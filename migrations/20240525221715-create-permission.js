"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("permissions", {
      id_permission: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      ds_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      ds_description: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      dh_create: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("permissions");
  },
};
