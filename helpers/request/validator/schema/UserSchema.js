const UserLimits = require("@root/helpers/limits/model/UserLimits");
const MensageRestriction = require("@root/helpers/MessageRestriction");

const schema = {
  create: {
    username: {
      isString: true,
      notEmpty: UserLimits.username.isRequired,
      errorMessage: MensageRestriction.required,
      isLength: {
        options: {
          max: UserLimits.username.max,
        },
      },
    },
    password: {
      isString: true,
      notEmpty: UserLimits.password.isRequired,
      errorMessage: MensageRestriction.required,
      isLength: {
        options: {
          max: UserLimits.password.max,
        },
      },
    },
  },
};

module.exports = schema;
