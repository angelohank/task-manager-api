"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("permissions", [
      {
        id_permission: 1,
        ds_name: "create_task",
        ds_description:
          "Creates a new task with specified details and assigns it to users.",
        dh_create: new Date(),
      },
      {
        id_permission: 2,
        ds_name: "update_task",
        ds_description:
          "Modifies existing task details, such as status, description, and assigned users.",
        dh_create: new Date(),
      },
      {
        id_permission: 3,
        ds_name: "delete_task",
        ds_description:
          "Removes an existing task from the system, including all associated data.",
        dh_create: new Date(),
      },
      {
        id_permission: 4,
        ds_name: "delete_user",
        ds_description:
          "Removes a user account and all associated data from the system.",
        dh_create: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("People", null, {});
  },
};
