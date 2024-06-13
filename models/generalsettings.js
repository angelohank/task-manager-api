"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class GeneralSettings extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  GeneralSettings.init(
    {
      id_general_settings: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      id_status_default: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "GeneralSettings",
      tableName: "general_settings",
      timestamps: false,
    }
  );
  return GeneralSettings;
};
