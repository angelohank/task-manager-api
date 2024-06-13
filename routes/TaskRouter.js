const express = require("express");
const router = express.Router();

const TaskSchema = require("@root/helpers/request/validator/schema/task/TaskSchema");
const TaskController = require("@root/controllers/TaskController");
const AuthenticationMiddleware = require("@root/middleware/AuthenticationMiddleware");
const PermissionMiddleware = require("@root/middleware/PermissionsMiddleware");
const RoleTypeEnum = require("@root/enums/RoleTypeEnum");
const { checkSchema } = require("@root/middleware/RequestValidator");

router.post(
  "/",
  AuthenticationMiddleware.isAuthenticated(),
  checkSchema(TaskSchema.create),
  new TaskController().create
);

router.put(
  "/",
  AuthenticationMiddleware.isAuthenticated(),
  checkSchema(TaskSchema.put),
  new TaskController().update
);

router.delete(
  "/:id",
  AuthenticationMiddleware.isAuthenticated(),
  PermissionMiddleware.needRole([RoleTypeEnum.ADMIN, RoleTypeEnum.MANAGER]),
  checkSchema(TaskSchema.delete),
  new TaskController().delete
);

router.get(
  "/",
  AuthenticationMiddleware.isAuthenticated(),
  new TaskController().findAll
);

router.get(
  "/:id",
  AuthenticationMiddleware.isAuthenticated(),
  checkSchema(TaskSchema.findOne),
  new TaskController().findOne
);

module.exports = router;
