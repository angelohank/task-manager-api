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

  async findAllByDsUsername(request, response) {
    const dsUsername = request.query.dsUsername;

    if (dsUsername.length < 3) {
      return response
        .status(StatusCodes.BAD_REQUEST)
        .json({ message: "Minimum size of field is three caracters" });
    }

    try {
      const userService = new UserService();

      const usersEntity = await userService.findAllByDsUsername(dsUsername);

      const usersJson = usersEntity?.map((userEntity) => {
        return userEntity.toJson();
      });

      response.status(StatusCodes.CREATED).json({
        users: usersJson,
      });
    } catch (error) {
      response
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ message: error.message });
    }
  }
}

module.exports = UserController;
