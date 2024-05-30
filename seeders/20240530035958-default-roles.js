"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("roles", [
      {
        id_role: 1,
        ds_name: "admin",
        ds_description:
          "Manages user accounts, system settings, and security. Full access to all data.",
        dh_create: new Date(),
      },
      {
        id_role: 2,
        ds_name: "manager",
        ds_description:
          "Oversees projects/teams. Manages users, approves content, and generates reports.",
        dh_create: new Date(),
      },
      {
        id_role: 3,
        ds_name: "user",
        ds_description:
          "Uses platform features and tools. Submits requests and accesses personal data.",
        dh_create: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("roles", null, {});
  },
};
