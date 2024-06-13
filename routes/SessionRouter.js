const express = require("express");
const router = express.Router();

const UserSchema = require("@root/helpers/request/validator/schema/UserSchema");
const SessionController = require("@root/controllers/SessionController");
const { checkSchema } = require("@root/middleware/RequestValidator");

router.post(
  "/authenticate",
  checkSchema(UserSchema.login),
  (request, response) => {
    new SessionController().authenticate(request, response);
  }
);

module.exports = router;
