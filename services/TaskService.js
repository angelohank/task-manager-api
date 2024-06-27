const TaskEntity = require("@root/entity/TaskEntity");
const TaskRepository = require("@root/repositories/TaskRepository");
const GeneralSettingsService = require("@root/services/GeneralSettingsService");
const TaskArtefactService = require("@root/services/TaskArtefactService");

class TaskService {
  async create(taskEntity) {
    const taskRepository = new TaskRepository();

    const idStatusDefault =
      await new GeneralSettingsService().findIdStatusDefault();

    taskEntity.setTpStatus(idStatusDefault);

    const taskCreatedEntity = await taskRepository.create(taskEntity.toModel());

    return taskCreatedEntity;
  }
  async update(taskEntity) {
    const taskRepository = new TaskRepository();

    await taskRepository.update(taskEntity.toModel());

    const taskArtefactService = new TaskArtefactService();

    taskArtefactService.updateByIdTask(taskEntity.artefacts, taskEntity.idTask);
  }

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

  async updateStatus(idTask, idStatus) {
    const taskRepository = new TaskRepository();

    await taskRepository.updateStatus(idTask, idStatus);
  }
}

module.exports = TaskService;
