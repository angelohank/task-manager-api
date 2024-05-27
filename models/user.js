"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.belongsToMany(models.Role, {
        through: models.UserRole,
        foreignKey: "id_user",
        sourceKey: "id_user",
      });
      User.belongsToMany(models.Permission, {
        through: models.UserPermission,
        foreignKey: "id_user",
        sourceKey: "id_user",
        as: "permissions",
      });
      User.belongsToMany(models.Task, {
        through: models.TaskUser,
        foreignKey: "id_user",
        sourceKey: "id_user",
      });
    }
  }
  User.init(
    {
      id_user: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      ds_username: {
        type: DataTypes.STRING(64),
        allowNull: false,
      },
      ds_password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      dh_create: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      sequelize,
      modelName: "User",
      tableName: "users",
      timestamps: false,
    }
  );
  return User;
};
