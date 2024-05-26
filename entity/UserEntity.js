const { json } = require("sequelize");

class UserEntity {
  constructor(username, password, id = 0) {
    this.dsUsername = username;
    this.dsPassword = password;
    this.idUser = id;
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
    return new UserEntity(model.ds_username, model.ds_password, model.id_user);
  }

  static fromJson(json) {
    return new UserEntity(json.username, json.password);
  }
}

module.exports = UserEntity;
