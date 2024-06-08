const express = require("express");
const router = express.Router();

const UserRouter = require("@root/routes/UserRouter");
const SessionRouter = require("@root/routes/SessionRouter");
const TaskRouter = require("@root/routes/TaskRouter");

router.use("/user", UserRouter);
router.use("/session", SessionRouter);
router.use("/task", TaskRouter);

module.exports = router;
