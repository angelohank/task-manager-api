const UserEntity = require("@root/entity/UserEntity");
const { User } = require("../models");

class UserRepository {
  async findByDsUsername(dsUsername) {
    try {
      const userModel = await User.findOne({
        where: {
          ds_username: dsUsername,
        },
      });

      if (userModel === null) {
        return null;
      }

      return UserEntity.fromModel(userModel.toJSON());
    } catch (error) {
      throw new Error(`Fail on search user by username [WHAT] ${error}`);
    }
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
