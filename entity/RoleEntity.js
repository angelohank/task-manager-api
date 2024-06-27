class RoleEntity {
  constructor(idRole, dsName, dsDescription = "", dhCreate = null) {
    this.idRole = idRole;
    this.dsName = dsName;
    this.dsDescription = dsDescription;
    this.dhCreate = dhCreate;
  }

  toModel() {
    return {
      id_role: this.idRole,
      ds_name: this.dsName,
      ds_description: this.dsDescription,
      dh_create: this.dhCreate,
    };
  }

  toJson() {
    return {
      id: this.idRole,
      type: this.dsName,
      description: this.dsDescription,
      dh_create: this.dhCreate,
    };
  }

  static fromJson(roleJson) {
    return new RoleEntity(roleJson.id, roleJson.dsName);
  }

  static fromModel(role) {
    return new RoleEntity(
      role.id_role,
      role.ds_name,
      role.ds_description,
      role.dh_create
    );
  }
}

module.exports = RoleEntity;
