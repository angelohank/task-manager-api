const UserEntity = require("@root/entity/UserEntity");
const { User, Permission, Role } = require("@root/models");
const FilterSequelizeHelper = require("@root/helpers/sequelize/FilterSequelizeHelper");
const sequelize = require("sequelize");

class UserRepository {
  async findOne(query) {
    try {
      const userModel = await User.findOne(query);

      if (userModel === null) {
        return null;
      }

      console.log(userModel.toJSON());

      return UserEntity.fromModel(userModel.toJSON());
    } catch (error) {
      throw new Error(`Fail on search user [WHAT] ${error}`);
    }
  }

  async findByDsUsername(dsUsername) {
    return await this.findOne({
      where: {
        ds_username: dsUsername,
      },
    });
  }

  async findByIdUser(idUser) {
    return await this.findOne({
      where: {
        id_user: idUser,
      },
    });
  }

  async findByIdUserInclueRoles(idUser) {
    return await this.findOne({
      include: {
        model: Role,
        as: "roles",
        attributes: ["id_role", "ds_name", "dh_create", "ds_description"],
      },
      where: {
        id_user: idUser,
      },
    });
  }

  async findAll() {
    try {
      const usersModel = await User.findAll({
        include: {
          model: Role,
          as: "roles",
          attributes: ["id_role", "ds_name", "dh_create", "ds_description"],
        },
      });

      if (!usersModel) {
        return null;
      }

      const usersEntity = usersModel?.map((user) => {
        return UserEntity.fromModel(user);
      });

      return usersEntity;
    } catch (error) {
      console.error(error);
      throw new Error(`Fail on findAll users [WHAT] ${error}`);
    }
  }

  async findByIdUserIncludePermissions(idUser) {
    return await this.findOne({
      include: {
        model: Permission,
        as: "permissions",
        attributes: ["ds_name"],
      },
      where: {
        id_user: idUser,
      },
    });
  }

  async create(userModel) {
    try {
      const userCreateModel = await User.create(userModel);

      if (userCreateModel === null) {
        return null;
      }

      await userCreateModel.addRoles(
        userModel.roles.map((role) => role.id_role)
      );

      return UserEntity.fromModel(userCreateModel.toJSON());
    } catch (error) {
      throw new Error(`Fail on create user [WHAT] ${error}`);
    }
  }

  async findAllByDsUsername(dsUsername) {
    console.log(dsUsername);
    try {
      const usersModel = await User.findAll({
        attributes: ["id_user", "ds_username"],
        where: {
          [sequelize.Op.and]: FilterSequelizeHelper.likeLowerCase(
            dsUsername,
            "ds_username"
          ),
        },
      });

      if (!usersModel) {
        return null;
      }

      const usersEntity = usersModel?.map((user) => {
        return UserEntity.fromModel(user);
      });

      return usersEntity;
    } catch (error) {
      throw new Error(`Fail on search by user [WHAT] ${error}`);
    }
  }

  async deleteById(idUser) {
    try {
      await User.destroy({
        where: {
          id_user: idUser,
        },
      });
    } catch (error) {
      throw new Error(`Fail on delete User [WHAT] ${error}`);
    }
  }

  async update(userModel) {
    console.log(userModel);
    try {
      const rowsUpdated = await User.update(userModel, {
        where: {
          id_user: userModel.id_user,
        },
      });

      if (!rowsUpdated || rowsUpdated[0] === 0) {
        throw new Error(`Fail on update user [WHAT] ${error}`);
      }

      console.log(userModel);

      const userUpdated = await User.findOne({
        where: {
          id_user: userModel.id_user,
        },
      });

      await userUpdated.setRoles(userModel.roles.map((role) => role.id_role));
    } catch (error) {
      throw new Error(`Fail on update User [WHAT] ${error}`);
    }
  }
}

module.exports = UserRepository;
