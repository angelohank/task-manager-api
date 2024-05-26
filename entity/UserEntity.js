const { json } = require("sequelize");

class UserEntity {
  constructor(username, password) {
    this.dsUsername = username;
    this.dsPassword = password;
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
    return new UserEntity(model.ds_username, model.ds_password);
  }

  static fromJson(json) {
    return new UserEntity(json.username, json.password);
  }
}

module.exports = UserEntity;
