const express = require("express");
const router = express.Router();

const AuthenticationMiddleware = require("@root/middleware/AuthenticationMiddleware");
const RoleController = require("@root/controllers/RoleController");

router.get(
  "/",
  AuthenticationMiddleware.isAuthenticated(),
  new RoleController().findAll
);

module.exports = router;
