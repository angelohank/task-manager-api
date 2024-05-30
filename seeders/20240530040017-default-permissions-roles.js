"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("permission_roles", [
      {
        id_role: 1,
        id_permission: 1,
      },
      {
        id_role: 1,
        id_permission: 2,
      },
      {
        id_role: 1,
        id_permission: 3,
      },
      {
        id_role: 1,
        id_permission: 4,
      },
      {
        id_role: 2,
        id_permission: 1,
      },
      {
        id_role: 2,
        id_permission: 2,
      },
      {
        id_role: 2,
        id_permission: 3,
      },
      {
        id_role: 3,
        id_permission: 1,
      },
      {
        id_role: 3,
        id_permission: 2,
      },
      {
        id_role: 3,
        id_permission: 3,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("permission_roles", null, {});
  },
};
