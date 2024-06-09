class TaskArtefactEntity {
  constructor(dsUrl) {
    this.dsUrl = dsUrl;
  }

  setIdTask(idTask) {
    this.idTask = idTask;
  }

  idTask() {
    return this.idTask;
  }

  setIdArtefact(idArtefact) {
    this.idArtefact = idArtefact;
  }

  idArtefact() {
    return this.idArtefact;
  }

  setDsUrl(dsUrl) {
    this.dsUrl = this.dsUrl;
  }

  dsUrl() {
    return this.dsUrl;
  }

  toJson() {
    return {
      id: this.idArtefact,
      ds_url: this.dsUrl,
    };
  }

  toModel() {
    return {
      ds_url: this.dsUrl,
    };
  }

  static fromJson(artefact) {
    return new TaskArtefactEntity(artefact.ds_url);
  }

  static fromModel(artefact) {
    var taskArtefactEntity = new TaskArtefactEntity(artefact.ds_url);
    taskArtefactEntity.setIdArtefact(artefact.id_artefact);
    return taskArtefactEntity;
  }
}

module.exports = TaskArtefactEntity;
