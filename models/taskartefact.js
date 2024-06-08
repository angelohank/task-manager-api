"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class taskartefact extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  taskartefact.init(
    {
      id_artefact: {
        type: DataTypes.INTEGER,
      },
      id_task: {
        type: DataTypes.INTEGER,
      },
      ds_url: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "TaskArtefact",
      tableName: "task_artefacts",
      timestamps: false,
    }
  );
  return taskartefact;
};
