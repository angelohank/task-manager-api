const UserEntity = require("@root/entity/UserEntity");
const TaskArtefactEntity = require("@root/entity/TaskArtefactEntity");
const TaskStatusEnum = require("@root/enums/TaskStatusEnum");

class TaskEntity {
  constructor() {
    this.dsTitle = "";
    this.dsDescription = "";
    this.dhCreated = "";
    this.dhLimit = "";
    this.tpStatus = TaskStatusEnum.UNKNOW;
    this.members = [];
    this.artefacts = [];
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

  static fromJson(task) {
    var taskEntity = new TaskEntity();

    console.log(taskEntity);

    taskEntity.setDsTitle(task.title);
    taskEntity.setDsDescription(task.description);
    taskEntity.setTpStatus(TaskStatusEnum.fromString(task.status));
    taskEntity.setDhCreated(task.dh_created ?? "");
    taskEntity.setDhLimit(task.dh_limit ?? "");

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
