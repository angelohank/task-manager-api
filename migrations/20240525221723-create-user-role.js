"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("user_roles", {
      id_user: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
          model: "users",
          key: "id_user",
        },
        onDelete: "cascade",
      },
      id_role: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
          model: "roles",
          key: "id_role",
        },
        onDelete: "cascade",
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("user_roles");
  },
};
