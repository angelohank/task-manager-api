"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("task_users", {
      id_task: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: {
          model: "tasks",
          key: "id_task",
        },
        onDelete: "cascade",
      },
      id_user: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: {
          model: "users",
          key: "id_user",
        },
        onDelete: "cascade",
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("task_users");
  },
};
