const { StatusCodes } = require("http-status-codes");
const TaskEntity = require("@root/entity/TaskEntity");
const TaskService = require("@root/services/TaskService");

class TaskController {
  async create(request, response) {
    const taskEntity = TaskEntity.fromJson(request.body);

    try {
      const taskService = new TaskService();

      const taskCreatedEntity = await taskService.create(taskEntity);

      response.status(StatusCodes.CREATED).json(taskCreatedEntity.toJson());
    } catch (error) {
      response
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ message: error.message });
    }
  }

  async update(request, response) {}

  async delete(request, response) {
    const idTask = request.params.id;

    try {
      const taskService = new TaskService();

      const taskCreatedEntity = await taskService.delete(idTask);

      response.status(StatusCodes.CREATED).json({
        message: `Task ${idTask} has deleted!`,
      });
    } catch (error) {
      response
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ message: error.message });
    }
  }

  async findOne(request, response) {
    const idTask = request.params.id;

    try {
      const taskService = new TaskService();

      const taskEntity = await taskService.findOne(idTask);

      response.status(StatusCodes.CREATED).json(taskEntity.toJson());
    } catch (error) {
      response
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ message: error.message });
    }
  }

  async findAll(request, response) {
    try {
      const taskService = new TaskService();

      const tasksEntity = await taskService.findAll();

      const tasksJson = tasksEntity?.map((task) => {
        return task.toJson();
      });

      response.status(StatusCodes.CREATED).json({
        tasks: tasksJson,
      });
    } catch (error) {
      response
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ message: error.message });
    }
  }
}

module.exports = TaskController;
