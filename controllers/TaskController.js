const TaskEntity = require("@root/entity/TaskEntity");

class TaskController {
  async create(request, response) {
    const taskEntity = TaskEntity.fromJson(request.body);

    console.log(taskEntity);

    try {
      // TODO making something
      response.json({});
    } catch (error) {
      response
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ message: error.message });
    }
  }

  async update(request, response) {}

  async delete(request, response) {}

  async findOne(request, response) {}

  async findAll(request, response) {}
}

module.exports = TaskController;
