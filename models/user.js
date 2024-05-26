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
        through: "user_roles",
        foreignKey: "id_user",
      });
      User.belongsToMany(models.Permission, {
        through: "user_permissions",
        foreignKey: "id_user",
      });
      User.belongsToMany(models.Task, {
        through: "task_users",
        foreignKey: "id_user",
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
        type: DataTypes.STRING,
        allowNull: false,
      },
      ds_password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      dh_create: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "User",
      tableName: "users",
      freezeTableName: true,
      timestamps: false,
    }
  );
  return User;
};
