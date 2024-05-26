"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class PermissionRole extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PermissionRole.init(
    {
      id_role: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      id_permission: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "PermissionRole",
      tableName: "permission_roles",
      freezeTableName: true,
      timestamps: false,
    }
  );
  return PermissionRole;
};
