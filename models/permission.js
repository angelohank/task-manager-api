"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Permission extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Permission.belongsToMany(models.Role, {
        through: models.PermissionRole,
        foreignKey: "id_permission",
        sourceKey: "id_permission",
      });
      Permission.belongsToMany(models.User, {
        through: models.UserPermission,
        foreignKey: "id_permission",
        sourceKey: "id_permission",
      });
    }
  }
  Permission.init(
    {
      id_permission: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      ds_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      ds_description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      dh_create: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Permission",
      tableName: "permissions",
      timestamps: false,
    }
  );
  return Permission;
};
