"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("status", [
      {
        id_status: 1,
        ds_status: "TODO",
      },
      {
        id_status: 2,
        ds_status: "IN-PROGRESS",
      },
      {
        id_status: 3,
        ds_status: "VALIDATION",
      },
      {
        id_status: 4,
        ds_status: "TO-TEST",
      },
      {
        id_status: 5,
        ds_status: "TESTING",
      },
      {
        id_status: 6,
        ds_status: "DONE",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("status", null, {});
  },
};
