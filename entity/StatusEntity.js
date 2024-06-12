const TaskEntity = require("@root/entity/TaskEntity");

class StatusEntity {
  constructor(idStatus, dsStatus, tasks) {
    this.idStatus = idStatus;
    this.dsStatus = dsStatus;
    this.tasks = tasks;
  }

  toJson() {
    return {
      id: this.idStatus,
      description: this.dsStatus,
      tasks: this.tasks?.map((task) => {
        return task.toJson(task);
      }),
    };
  }

  static fromModel(model) {
    const tasksEntity = model.tasks?.map((task) => {
      return TaskEntity.fromModel(task);
    });
    return new StatusEntity(model.id_status, model.ds_status, tasksEntity);
  }
}

module.exports = StatusEntity;
