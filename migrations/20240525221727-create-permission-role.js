"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("permission_roles", {
      id_role: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: {
          model: "roles",
          key: "id_role",
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
    await queryInterface.dropTable("permission_roles");
  },
};
