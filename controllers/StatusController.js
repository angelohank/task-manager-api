const StatusService = require("@root/services/StatusService");
const { StatusCodes } = require("http-status-codes");

class StatusController {
  async findAll(request, response) {
    try {
      const statusService = new StatusService();

      const statusesEntity = await statusService.findAll();

      const statusesJson = statusesEntity?.map((statusEntity) => {
        return statusEntity.toJson();
      });

      response.status(StatusCodes.CREATED).json({
        statuses: statusesJson,
      });
    } catch (error) {
      response
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ message: error.message });
    }
  }
  async findAllWithTasks(request, response) {
    try {
      const statusService = new StatusService();

      const statusesEntity = await statusService.findAllWithTasks();

      const statusesJson = statusesEntity?.map((statusEntity) => {
        return statusEntity.toJson();
      });

      response.status(StatusCodes.CREATED).json({
        statuses: statusesJson,
      });
    } catch (error) {
      response
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ message: error.message });
    }
  }
}

module.exports = StatusController;
