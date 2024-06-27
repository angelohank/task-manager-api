"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("users", [
      {
        id_user: 1,
        ds_username: "admin",
        ds_password:
          "$2a$08$hGzhCR8WnQtHEIxGkPn60..nHN9O8xMIk1Ydyld1g5JnsujvSy6Pe",
        dh_create: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {});
  },
};
