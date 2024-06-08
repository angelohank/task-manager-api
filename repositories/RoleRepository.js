const { Role } = require("@root/models");
const RoleEntity = require("@root/entity/RoleEntity");

class RoleRepository {
  async findOne(query) {
    try {
      const roleModel = await Role.findOne(query);

      if (roleModel === null) {
        return null;
      }

      return RoleEntity.fromModel(roleModel.toJSON());
    } catch (error) {
      throw new Error(`Fail on search role [WHAT] ${error}`);
    }
  }

  async findRoleByName(dsName) {
    return await this.findOne({
      where: {
        ds_name: dsName,
      },
    });
  }
}

module.exports = RoleRepository;
