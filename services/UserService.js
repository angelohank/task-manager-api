const { hash } = require("bcryptjs");

const UserRepository = require("@root/repositories/UserRepository");

class UserService {
  async create(user) {
    const userRepository = new UserRepository();

    const hasUsername = await userRepository.findByDsUsername(user.dsUsername);

    if (hasUsername) {
      return new Error("User already exists");
    }

    const nrSaltRounds = 8;
    const dsPasswordHash = await hash(user.dsPassword, nrSaltRounds);

    const user = await userRepository.create({
      dsUsername: user.dsUsername,
      dsPassword: dsPasswordHash,
    });

    return user;
  }
}

module.exports = UserService;
