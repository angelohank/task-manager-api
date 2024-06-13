const UserEntity = require("@root/entity/UserEntity");
const { User, Permission, Role } = require("@root/models");

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
}

module.exports = UserRepository;
