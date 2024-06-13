const TaskStatusEnum = {
  UNKNOW: -1,
  TODO: 1,
  IN_PROGRESS: 2,
  VALIDATION: 3,
  TO_TEST: 4,
  TESTING: 5,
  DONE: 6,

  fromString: (dsType) => {
    const tpTaskByDescription = new Map([
      ["TODO", 1],
      ["IN_PROGRESS", 2],
      ["VALIDATION", 3],
      ["TO_TEST", 4],
      ["TESTING", 5],
      ["DONE", 6],
    ]);
    return tpTaskByDescription.get(dsType) ?? -1;
  },
};

module.exports = TaskStatusEnum;
