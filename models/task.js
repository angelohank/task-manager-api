"use strict";
const { Model } = require("sequelize");
const TaskStatusEnum = require("@root/enums/TaskStatusEnum");
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Task.belongsToMany(models.User, {
        through: "task_users",
        foreignKey: "id_task",
        as: "users",
      });
    }
  }
  Task.init(
    {
      id_task: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      ds_title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      ds_description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      dh_created: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      tp_status: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: TaskStatusEnum.TODO,
      },
      dh_limit: {
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "Task",
      tableName: "tasks",
      timestamps: false,
    }
  );
  return Task;
};
