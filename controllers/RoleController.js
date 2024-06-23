const RoleService = require("@root/services/RoleService");
const { StatusCodes } = require("http-status-codes");

class RoleController {
  async findAll(request, response) {
    try {
      const roleService = new RoleService();

      const rolesEntity = await roleService.findAll();

      const rolesJson = rolesEntity?.map((role) => {
        return role.toJson();
      });

      response.status(StatusCodes.CREATED).json(rolesJson);
    } catch (error) {
      response
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ message: error.message });
    }
  }
}

module.exports = RoleController;
