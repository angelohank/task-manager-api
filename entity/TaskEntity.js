const UserEntity = require("@root/entity/UserEntity");
const TaskArtefactEntity = require("@root/entity/TaskArtefactEntity");
const TaskStatusEnum = require("@root/enums/TaskStatusEnum");

class TaskEntity {
  constructor() {
    this.dsTitle = "";
    this.dsDescription = "";
    this.dhCreated = null;
    this.dhLimit = null;
    this.tpStatus = TaskStatusEnum.UNKNOW;
    this.members = [];
    this.artefacts = [];
  }

  setIdTask(idTask) {
    this.idTask = idTask;
  }

  idTask() {
    return this.idTask;
  }

  setDsTitle(dsTitle) {
    this.dsTitle = dsTitle;
  }

  dsTitle() {
    return this.dsTitle;
  }

  setDsDescription(dsDescription) {
    this.dsDescription = dsDescription;
  }

  dsDescription() {
    return this.dsDescription;
  }

  setTpStatus(tpStatus) {
    this.tpStatus = tpStatus;
  }

  setDhCreated(dhCreated) {
    this.dhCreated = dhCreated;
  }

  dhCreated() {
    return this.dhCreated;
  }

  setDhLimit(dhLimit) {
    this.dhLimit = dhLimit;
  }

  dhLimit() {
    return this.dhLimit;
  }

  setMembers(members) {
    this.members = members;
  }

  members() {
    return this.members;
  }

  setArtefacts(artefacts) {
    this.artefacts = artefacts;
  }

  artefacts() {
    return this.artefacts;
  }

  toModel() {
    return {
      ds_title: this.dsTitle,
      ds_description: this.dsDescription,
      dh_created: this.dhCreated,
      tp_status: this.tpStatus,
      dh_limit: this.dhLimit,
      artefacts: this.artefacts?.map((artefact) => {
        return artefact.toModel();
      }),
      members: this.members?.map((member) => {
        return member.toModel();
      }),
    };
  }

  toJson() {
    return {
      id: this.idTask,
      description: this.dsDescription,
      title: this.dsTitle,
      dh_created: this.dhCreated,
      dh_limit: this.dhLimit,
      status: this.tpStatus,
      members: this.members?.map((member) => {
        return member.toJson();
      }),
      artefacts: this.artefacts?.map((artefact) => {
        return artefact.toJson();
      }),
    };
  }

  static fromModel(task) {
    var taskEntity = new TaskEntity();
    taskEntity.setIdTask(task.id_task);
    taskEntity.setDsTitle(task.ds_title);
    taskEntity.setDsDescription(task.ds_description);
    taskEntity.setDhCreated(task.dh_created);
    taskEntity.setTpStatus(task.tp_status);
    taskEntity.setDhLimit(task.dh_limit);
    taskEntity.setArtefacts(
      task.artefacts?.map((artefact) => {
        return TaskArtefactEntity.fromModel(artefact);
      })
    );
    taskEntity.setMembers(
      task.members?.map((member) => {
        return UserEntity.fromModel(member);
      })
    );
    return taskEntity;
  }

  static fromJson(task) {
    var taskEntity = new TaskEntity();

    taskEntity.setDsTitle(task.title);
    taskEntity.setDsDescription(task.description);
    taskEntity.setTpStatus(TaskStatusEnum.fromString(task.status));
    taskEntity.setDhCreated(task.dh_created);
    taskEntity.setDhLimit(task.dh_limit);

    taskEntity.setMembers(
      task.members?.map((member) => {
        return UserEntity.fromJson(member);
      }) ?? []
    );

    taskEntity.setArtefacts(
      task.artefacts?.map((artefact) => {
        return TaskArtefactEntity.fromJson(artefact);
      }) ?? []
    );

    return taskEntity;
  }
}

module.exports = TaskEntity;
