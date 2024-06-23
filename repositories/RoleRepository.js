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

  async findAll() {
    try {
      const rolesModel = await Role.findAll();

      if (!rolesModel) {
        return null;
      }

      return rolesModel.map((role) => {
        return RoleEntity.fromModel(role);
      });
    } catch (error) {
      throw new Error(`Fail on get roles [WHAT] ${error}`);
    }
  }
}

module.exports = RoleRepository;
