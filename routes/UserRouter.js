const express = require("express");
const router = express.Router();

const UserSchema = require("@root/helpers/request/validator/schema/UserSchema");
const { checkSchema } = require("@root/middleware/RequestValidator");
const UserController = require("@root/controllers/UserController");
const PermissionMiddleware = require("@root/middleware/PermissionsMiddleware");
const AuthenticationMiddleware = require("@root/middleware/AuthenticationMiddleware");
const RoleTypeEnum = require("@root/enums/RoleTypeEnum");

router.post(
  "/create",
  checkSchema(UserSchema.login),
  new UserController().create
);

module.exports = router;
