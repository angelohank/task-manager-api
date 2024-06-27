const express = require("express");
const router = express.Router();

const UserSchema = require("@root/helpers/request/validator/schema/UserSchema");
const { checkSchema } = require("@root/middleware/RequestValidator");
const UserController = require("@root/controllers/UserController");
const PermissionMiddleware = require("@root/middleware/PermissionsMiddleware");
const AuthenticationMiddleware = require("@root/middleware/AuthenticationMiddleware");
const RoleTypeEnum = require("@root/enums/RoleTypeEnum");

router.post("/", checkSchema(UserSchema.login), new UserController().create);

router.get(
  "/:dsUsername",
  AuthenticationMiddleware.isAuthenticated(),
  new UserController().findAllByDsUsername
);

router.get(
  "/",
  AuthenticationMiddleware.isAuthenticated(),
  new UserController().findAll
);

router.delete(
  "/:id",
  AuthenticationMiddleware.isAuthenticated(),
  PermissionMiddleware.needRole([RoleTypeEnum.ADMIN]),
  new UserController().deleteById
);

router.put(
  "/:id",
  AuthenticationMiddleware.isAuthenticated(),
  PermissionMiddleware.needRole([RoleTypeEnum.ADMIN]),
  new UserController().update
);

module.exports = router;
