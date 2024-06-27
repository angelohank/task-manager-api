const TaskStatusEnum = {
  UNKNOW: -1,
  LOW: 1,
  MEDIUM: 2,
  URGENT: 3,

  fromString: (dsType) => {
    const tpTaskByDescription = new Map([
      ["LOW", 1],
      ["MEDIUM", 2],
      ["URGENT", 3],
    ]);
    return tpTaskByDescription.get(dsType) ?? -1;
  },

  toString: (type) => {
    const tpTaskByDescription = new Map([
      [1, "LOW"],
      [2, "MEDIUM"],
      [3, "URGENT"],
    ]);
    return tpTaskByDescription.get(type) ?? "";
  },
};

module.exports = TaskStatusEnum;
