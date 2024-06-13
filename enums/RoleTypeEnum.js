const RoleTypeEnum = {
  ADMIN: 1,
  MANAGER: 2,
  USER: 3,

  toString: (type) => {
    return (
      {
        1: "admin",
        2: "manager",
        3: "user",
      }[type] ?? ""
    );
  },
};

module.exports = RoleTypeEnum;
