const { Status, Task, TaskArtefact, User } = require("@root/models");
const StatusEntity = require("@root/entity/StatusEntity");

class StatusRepository {
  async findAll(query = {}) {
    try {
      const statusesModel = await Status.findAll(query);

      const statusesEntity = statusesModel?.map((statusModel) => {
        return StatusEntity.fromModel(statusModel.toJSON());
      });

      return statusesEntity;
    } catch (error) {
      throw new Error(`Fail on get statuses [WHAT] ${error}`);
    }
  }

  async findAllWithTasks() {
    try {
      const statusesEntity = await this.findAll({
        include: [
          {
            model: Task,
            as: "tasks",
            include: [
              {
                model: TaskArtefact,
                as: "artefacts",
              },
              {
                model: User,
                as: "members",
                attributes: ["id_user", "ds_username"],
              },
            ],
          },
        ],
      });

      return statusesEntity;
    } catch (error) {
      throw new Error(`Fail on get statuses [WHAT] ${error}`);
    }
  }
}

module.exports = StatusRepository;
