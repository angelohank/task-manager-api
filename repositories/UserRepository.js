const UserEntity = require("@root/entity/UserEntity");
const { User, UserPermission, Permission } = require("../models");

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
      throw new Error(`Fail on search user by username [WHAT] ${error}`);
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

      return UserEntity.fromModel(userCreateModel.toJSON());
    } catch (error) {
      throw new Error(`Fail on create user [WHAT] ${error}`);
    }
  }
}

module.exports = UserRepository;
