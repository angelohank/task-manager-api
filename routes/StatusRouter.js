const express = require("express");
const router = express.Router();

const StatusController = require("@root/controllers/StatusController");
const AuthenticationMiddleware = require("@root/middleware/AuthenticationMiddleware");

router.get(
  "/",
  AuthenticationMiddleware.isAuthenticated(),
  new StatusController().findAll
);

router.get(
  "/task",
  AuthenticationMiddleware.isAuthenticated(),
  new StatusController().findAllWithTasks
);

module.exports = router;
