const { hash } = require("bcryptjs");

const UserRepository = require("@root/repositories/UserRepository");
const UserEntity = require("@root/entity/UserEntity");
const RoleService = require("@root/services/RoleService");
const RoleTypeEnum = require("@root/enums/RoleTypeEnum");

class UserService {
  async create(userEntity) {
    const userRepository = new UserRepository();

    const hasUsername =
      (await userRepository.findByDsUsername(userEntity.dsUsername)) !== null;

    if (hasUsername) {
      throw new Error("User already exists");
    }

    const roleService = new RoleService();

    const roleEntity = await roleService.findRoleByName(
      RoleTypeEnum.toString(RoleTypeEnum.USER)
    );

    if (!roleEntity) {
      throw new Error("Default permission don't found");
    }

    const nrSaltRounds = 8;
    const dsPasswordHash = await hash(userEntity.dsPassword, nrSaltRounds);

    const userCreatedEntity = await userRepository.create(
      new UserEntity(
        userEntity.dsUsername,
        dsPasswordHash,
        0,
        [],
        [roleEntity]
      ).toModel()
    );

    if (!userCreatedEntity) {
      throw new Error("Fail on save the user");
    }

    return userCreatedEntity;
  }

  async findAllByDsUsername(dsUsername) {
    const userRepository = new UserRepository();

    const usersEntity = await userRepository.findAllByDsUsername(dsUsername);

    return usersEntity;
  }
}

module.exports = UserService;
