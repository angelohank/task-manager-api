const { User } = require("../models");

class UserRepository {
  async findByDsUsername(dsUsername) {
    return await User.findOne({
      where: {
        ds_username: dsUsername,
      },
    });
  }

  async create(user) {
    return await User.create({
      ds_username: user.dsUsername,
      ds_password: user.dsPassword,
    });
  }
}

module.exports = UserRepository;
