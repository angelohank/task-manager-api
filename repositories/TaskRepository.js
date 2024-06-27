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

      const usersModel = await taskCreateModel.addMembers(
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

  async update(taskModel) {
    try {
      const rowsUpdated = await Task.update(
        {
          ds_title: taskModel.ds_title,
          ds_description: taskModel.ds_description,
          dh_limit: taskModel.dh_limit,
          tp_priority: taskModel.tp_priority,
        },
        {
          where: {
            id_task: taskModel.id_task,
          },
        }
      );

      // TODO adjust errors
      if (!rowsUpdated || rowsUpdated[0] === 0) {
        throw new Error(`Fail on update task [WHAT] ${error}`);
      }

      const taskUpdated = await Task.findOne({
        where: {
          id_task: taskModel.id_task,
        },
      });

      await taskUpdated.setMembers(
        taskModel.members.map((member) => member.id_user)
      );
    } catch (error) {
      throw new Error(`Fail on update task [WHAT] ${error}`);
    }
  }

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

  async updateStatus(idTask, idStatus) {
    try {
      await Task.update(
        {
          id_status: idStatus,
        },
        {
          where: {
            id_task: idTask,
          },
        }
      );
    } catch (error) {
      throw new Error(`Fail on update status of task [WHAT] ${error}`);
    }
  }
}

module.exports = TaskRepository;
