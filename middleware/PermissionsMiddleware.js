const UserRepository = require("@root/repositories/UserRepository");
const { StatusCodes } = require("http-status-codes");

const PermissionTypeEnum = {
  CREATE_TASK: 1,
  UPDATE_TASK: 2,
  DELETE_TASK: 3,

  toString: (type) => {
    return (
      {
        1: "create_task",
        2: "update_task",
        3: "delete_task",
      }[type] ?? ""
    );
  },
};

function need(permissionsType) {
  return async function (request, response, next) {
    const idUser = request.idUser ?? 1;

    if (idUser === null) {
      return response.status(StatusCodes.FORBIDDEN).json({
        message: "You don't'have permission to access this resource",
      });
    }

    const userRepository = new UserRepository();

    const userEntity = await userRepository.findByIdUserIncludePermissions(
      idUser
    );

    if (!userEntity) {
      return response.status(StatusCodes.FORBIDDEN).json({
        message: "You don't'have permission to access this resource",
      });
    }

    const namePermissionsUser = userEntity.permissions.map(
      (permissionEntity) => permissionEntity.dsName
    );

    const namePermissionsNeeded = permissionsType.map((permissionType) =>
      PermissionTypeEnum.toString(permissionType)
    );

    const hasPermissions = namePermissionsNeeded.every(
      (dsNamePermissionNeeded) =>
        namePermissionsUser.includes(dsNamePermissionNeeded)
    );

    if (!hasPermissions) {
      return response.status(StatusCodes.FORBIDDEN).json({
        message: "You don't'have permission to access this resource",
      });
    }

    next();
  };
}

function needRole() {}

module.exports = {
  need,
};
