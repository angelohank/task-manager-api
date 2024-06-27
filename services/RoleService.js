const RoleRepository = require("@root/repositories/RoleRepository");

class RoleService {
  constructor() {
    this.roleRepository = new RoleRepository();
  }

  async findRoleByName(dsName) {
    return await this.roleRepository.findRoleByName(dsName);
  }

  async findAll() {
    return await this.roleRepository.findAll();
  }
}

module.exports = RoleService;
