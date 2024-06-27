const { TaskArtefact } = require("@root/models");

class TaskArtefactRepository {
  async updateByIdTask(artefacts, idTask) {
    try {
      await TaskArtefact.destroy({
        where: {
          id_task: idTask,
        },
      });

      await TaskArtefact.bulkCreate(artefacts);
    } catch (error) {
      throw new Error(`Fail on update artefacts [WHAT] ${error}`);
    }
  }
}

module.exports = TaskArtefactRepository;
