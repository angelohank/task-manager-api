"use strict";
const { Model } = require("sequelize");
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
      dh_limit: {
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "Task",
      tableName: "tasks",
      freezeTableName: true,
      timestamps: false,
    }
  );
  return Task;
};