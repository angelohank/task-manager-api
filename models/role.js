"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Role.belongsToMany(models.User, {
        through: "user_roles",
        foreignKey: "id_role",
      });
      Role.belongsToMany(models.Permission, {
        through: "permission_roles",
        foreignKey: "id_role",
      });
    }
  }
  Role.init(
    {
      id_role: {
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
        defaultValue: DataTypes.NOW,
      },
    },
    {
      sequelize,
      modelName: "Role",
      tableName: "roles",
      freezeTableName: true,
      timestamps: false,
    }
  );
  return Role;
};
