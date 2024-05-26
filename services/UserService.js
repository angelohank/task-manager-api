const { hash } = require("bcryptjs");

const UserRepository = require("@root/repositories/UserRepository");
const UserEntity = require("@root/entity/UserEntity");

class UserService {
  async create(userEntity) {
    const userRepository = new UserRepository();

    const hasUsername =
      (await userRepository.findByDsUsername(userEntity.dsUsername)) !== null;

    if (hasUsername) {
      throw new Error("User already exists");
    }

    const nrSaltRounds = 8;
    const dsPasswordHash = await hash(userEntity.dsPassword, nrSaltRounds);

    const userCreatedEntity = await userRepository.create(
      new UserEntity(userEntity.dsUsername, dsPasswordHash).toModel()
    );

    if (!userCreatedEntity) {
      throw new Error("Fail on save the user");
    }

    return userCreatedEntity;
  }
}

module.exports = UserService;
