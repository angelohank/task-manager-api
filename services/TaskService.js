const TaskEntity = require("@root/entity/TaskEntity");
const TaskRepository = require("@root/repositories/TaskRepository");

class TaskService {
  async create(taskEntity) {
    const taskRepository = new TaskRepository();

    const taskCreatedEntity = await taskRepository.create(taskEntity.toModel());

    return taskCreatedEntity;
  }
  async update() {}

  async findAll() {
    const taskRepository = new TaskRepository();

    const tasksEntity = await taskRepository.findAll();

    return tasksEntity;
  }

  async findOne(idTask) {
    const taskRepository = new TaskRepository();

    const taskEntity = await taskRepository.findOne(idTask);

    return taskEntity;
  }

  async delete(idTask) {
    const taskRepository = new TaskRepository();

    await taskRepository.delete(idTask);
  }
}

module.exports = TaskService;
