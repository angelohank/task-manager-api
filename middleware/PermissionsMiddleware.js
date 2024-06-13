const { StatusCodes } = require("http-status-codes");
const UserRepository = require("@root/repositories/UserRepository");
const MessageRestriction = require("@root/helpers/MessageRestriction");
const RoleTypeEnum = require("@root/enums/RoleTypeEnum");

const PermissionTypeEnum = {
  CREATE_TASK: 1,
  UPDATE_TASK: 2,
  DELETE_TASK: 3,
  DELETE_USER: 4,

  toString: (type) => {
    return (
      {
        1: "create_task",
        2: "update_task",
        3: "delete_task",
        4: "delete_user",
      }[type] ?? ""
    );
  },
};

function need(permissionsType) {
  return async function (request, response, next) {
    try {
      const idUser = request.idUser ?? null;

      if (idUser === null) {
        throw new Error(MessageRestriction.permissionRequired);
      }

      const userRepository = new UserRepository();

      const userEntity = await userRepository.findByIdUserIncludePermissions(
        idUser
      );

      if (!userEntity) {
        throw new Error(MessageRestriction.permissionRequired);
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
        throw new Error(MessageRestriction.permissionRequired);
      }
    } catch (error) {
      return response.status(StatusCodes.FORBIDDEN).json({
        message: error.message,
      });
    }

    next();
  };
}

function needRole(rolesType) {
  return async function (request, response, next) {
    try {
      const idUser = request.idUser;

      if (!idUser) {
        throw new Error(MessageRestriction.permissionRequired);
      }

      const userRepository = new UserRepository();

      const userEntity = await userRepository.findByIdUserInclueRoles(idUser);

      if (!userEntity) {
        throw new Error(MessageRestriction.permissionRequired);
      }

      const nameRolesNeeded = rolesType.map((roleType) =>
        RoleTypeEnum.toString(roleType)
      );

      const nameRolesUser = userEntity.roles.map((role) => role.dsName);

      const hasAtLeastOneRole = nameRolesUser.some((nameRole) =>
        nameRolesNeeded.includes(nameRole)
      );

      if (!hasAtLeastOneRole) {
        throw new Error(MessageRestriction.permissionRequired);
      }
    } catch (error) {
      return response.status(StatusCodes.FORBIDDEN).json({
        message: error.message,
      });
    }

    next();
  };
}

module.exports = {
  need,
  needRole,
  PermissionTypeEnum,
};
