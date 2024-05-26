"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class TaskUser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TaskUser.init(
    {
      id_task: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      id_user: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "TaskUser",
      tableName: "task_users",
      freezeTableName: true,
      timestamps: false,
    }
  );
  return TaskUser;
};
