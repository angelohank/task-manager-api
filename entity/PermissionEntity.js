class PermisionEntity {
  constructor(dsName) {
    this.dsName = dsName;
  }

  static fromModel(permission) {
    return new PermisionEntity(permission.ds_name);
  }
}

module.exports = PermisionEntity;
