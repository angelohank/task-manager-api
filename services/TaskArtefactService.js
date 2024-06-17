const TaskArtefactRepository = require("@root/repositories/TaskArtefactRepository");

class TaskArtefactService {
  async updateByIdTask(artefacts, idTask) {
    console.log(artefacts);
    const taskArtefactRepository = new TaskArtefactRepository();

    await taskArtefactRepository.updateByIdTask(
      artefacts.map((artefact) => {
        return { ...artefact.toModel(), id_task: idTask };
      }),
      idTask
    );
  }
}

module.exports = TaskArtefactService;
