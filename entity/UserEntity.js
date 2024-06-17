const PermissionEntity = require("@root/entity/PermissionEntity");
const RoleEntity = require("./RoleEntity");

class UserEntity {
  constructor(username, password, id = 0, permissions = [], roles = []) {
    this.dsUsername = username;
    this.dsPassword = password;
    this.idUser = id > 0 ? id : null;
    this.permissions = permissions;
    this.roles = roles;
  }

  toModel() {
    return {
      id_user: this.idUser,
      ds_username: this.dsUsername,
      ds_password: this.dsPassword,
      roles: this.roles.map((role) => role.toModel()),
    };
  }

  toJson() {
    return {
      id: this.idUser,
      username: this.dsUsername,
    };
  }

  static fromModel(model) {
    const permissionsEntity = model?.permissions?.map((permission) =>
      PermissionEntity.fromModel(permission)
    );

    const rolesEntity = model?.roles?.map((role) => RoleEntity.fromModel(role));

    return new UserEntity(
      model.ds_username,
      model.ds_password,
      model.id_user,
      permissionsEntity,
      rolesEntity
    );
  }

  static fromJson(json) {
    return new UserEntity(json.username, json.password, json.id);
  }
}

module.exports = UserEntity;
