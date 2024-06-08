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

  static fromJson(artefact) {
    return new TaskArtefactEntity(artefact.dsUrl);
  }
}
