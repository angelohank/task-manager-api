const express = require("express");
const router = express.Router();

const UserSchema = require("@root/helpers/request/validator/schema/UserSchema");
const { checkSchema } = require("@root/middleware/RequestValidator");
const UserController = require("@root/controllers/UserController");

router.post(
  "/create",
  checkSchema(UserSchema.create),
  new UserController().create
);

module.exports = router;
