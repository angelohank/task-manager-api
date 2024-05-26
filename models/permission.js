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
        through: "permission_roles",
        foreignKey: "id_permission",
      });
      Permission.belongsToMany(models.User, {
        through: "user_permissions",
        foreignKey: "id_permission",
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
      freezeTableName: true,
      timestamps: false,
    }
  );
  return Permission;
};
