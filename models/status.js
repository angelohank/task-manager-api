"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Status extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Status.hasMany(models.Task, {
        sourceKey: "id_status",
        foreignKey: "id_status",
        as: "tasks",
      });
    }
  }
  Status.init(
    {
      id_status: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      ds_status: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "Status",
      tableName: "status",
      timestamps: false,
    }
  );
  return Status;
};
