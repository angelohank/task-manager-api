const { Task, TaskArtefact, User } = require("@root/models");
const TaskEntity = require("@root/entity/TaskEntity");
const UserEntity = require("@root/entity/UserEntity");

class TaskRepository {
  async create(taskModel) {
    try {
      const taskCreateModel = await Task.create(taskModel, {
        include: [
          {
            association: "artefacts",
          },
        ],
      });

      if (taskCreateModel === null) {
        return null;
      }

      const usersModel = await taskCreateModel.addUser(
        taskModel.members.map((member) => member.id_user)
      );

      const usersEntity = usersModel?.map((user) => {
        return UserEntity.fromModel(user.toJSON());
      });

      var taskEntity = TaskEntity.fromModel(taskCreateModel.toJSON());
      taskEntity.setMembers(usersEntity);
      return taskEntity;
    } catch (error) {
      throw new Error(`Fail on create task [WHAT] ${error}`);
    }
  }

  async update() {}

  async findAll() {
    try {
      const tasksModel = await Task.findAll({
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
      });

      const tasksEntity = tasksModel?.map((taskModel) => {
        return TaskEntity.fromModel(taskModel.toJSON());
      });

      return tasksEntity;
    } catch (error) {
      throw new Error(`Fail on get tasks [WHAT] ${error}`);
    }
  }

  async findOne(idTask) {
    try {
      console.log(idTask);
      const taskModel = await Task.findByPk(idTask, {
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
      });

      console.log(taskModel);

      return TaskEntity.fromModel(taskModel.toJSON());
    } catch (error) {
      throw new Error(`Fail on get task [WHAT] ${error}`);
    }
  }

  async delete(idTask) {
    try {
      await Task.destroy({
        where: {
          id_task: idTask,
        },
      });
    } catch (error) {
      throw new Error(`Fail on delete task [WHAT] ${error}`);
    }
  }
}

module.exports = TaskRepository;
