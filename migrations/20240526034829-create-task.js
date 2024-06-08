"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("tasks", {
      id_task: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      ds_title: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      ds_description: {
        allowNull: false,
        type: Sequelize.STRING, // TODO change for TEXT, limit is 255 how STRING
      },
      dh_created: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
      },
      tp_status: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
      dh_limit: {
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("tasks");
  },
};
