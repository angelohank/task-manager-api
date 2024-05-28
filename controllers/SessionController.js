const UserEntity = require("@root/entity/UserEntity");
const SessionService = require("@root/services/SessionService");
const { StatusCodes } = require("http-status-codes");

class SessionController {
  async authenticate(request, response) {
    const userRequestEntity = UserEntity.fromJson(request.body);

    try {
      const sessionService = new SessionService();

      const token = await sessionService.authenticate(userRequestEntity);

      response.status(StatusCodes.OK).json({
        token,
      });
    } catch (error) {
      response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: error.message,
      });
    }
  }
}

module.exports = SessionController;
