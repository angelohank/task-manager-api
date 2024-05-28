"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("user_permissions", {
      id_user: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: {
          model: "users",
          key: "id_user",
        },
      },
      id_permission: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: {
          model: "permissions",
          key: "id_permission",
        },
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("user_permissions");
  },
};
