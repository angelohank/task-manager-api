const TaskCreateSchema = require("@root/helpers/request/validator/schema/task/TaskCreateSchema");
const TaskDeleteSchema = require("@root/helpers/request/validator/schema/task/TaskDeleteSchema");
const TaskPutSchema = require("@root/helpers/request/validator/schema/task/TaskPutSchema");
const TaskFindOneSchema = require("@root/helpers/request/validator/schema/task/TaskFindOneSchema");

module.exports = {
  create: TaskCreateSchema,
  delete: TaskDeleteSchema,
  put: TaskPutSchema,
  findOne: TaskFindOneSchema,
};
