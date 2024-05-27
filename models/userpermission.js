"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserPermission extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserPermission.init(
    {
      id_user: {
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
      modelName: "UserPermission",
      tableName: "user_permissions",
      timestamps: false,
    }
  );
  return UserPermission;
};
