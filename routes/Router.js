const express = require("express");
const router = express.Router();

const UserRouter = require("@root/routes/UserRouter");
const SessionRouter = require("@root/routes/SessionRouter");

router.use("/user", UserRouter);
router.use("/session", SessionRouter);

module.exports = router;
