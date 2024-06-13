"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class TaskArtefact extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      TaskArtefact.hasOne(models.Task, {
        sourceKey: "id_task",
        foreignKey: "id_task",
        as: "tasks",
      });
    }
  }
  TaskArtefact.init(
    {
      id_artefact: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      id_task: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      ds_url: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "TaskArtefact",
      tableName: "task_artefacts",
      timestamps: false,
    }
  );
  return TaskArtefact;
};
