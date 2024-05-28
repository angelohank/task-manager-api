const { json } = require("sequelize");
const PermissionEntity = require("@root/entity/PermissionEntity");

class UserEntity {
  constructor(username, password, id = 0, permissions = []) {
    this.dsUsername = username;
    this.dsPassword = password;
    this.idUser = id;
    this.permissions = permissions;
  }

  toModel() {
    return {
      ds_username: this.dsUsername,
      ds_password: this.dsPassword,
    };
  }

  toJson() {
    return {
      username: this.dsUsername,
    };
  }

  static fromModel(model) {
    const permissionsEntity = model?.permissions?.map((permission) =>
      PermissionEntity.fromModel(permission)
    );

    return new UserEntity(
      model.ds_username,
      model.ds_password,
      model.id_user,
      permissionsEntity
    );
  }

  static fromJson(json) {
    return new UserEntity(json.username, json.password);
  }
}

module.exports = UserEntity;
