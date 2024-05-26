const UserService = require("@root/services/UserService");
const UserEntity = require("@root/entity/UserEntity");
const { StatusCodes } = require("http-status-codes");

class UserController {
  async create(request, response) {
    const userEntity = UserEntity.fromJson(request.body);

    try {
      const userService = new UserService();

      const userCreatedEntity = await userService.create(userEntity);

      response.status(StatusCodes.CREATED).json(userCreatedEntity.toJson());
    } catch (error) {
      response
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ message: error.message });
    }
  }
}

module.exports = UserController;
