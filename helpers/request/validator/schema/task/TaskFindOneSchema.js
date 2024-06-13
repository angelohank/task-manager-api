const MensageRestriction = require("@root/helpers/MessageRestriction");

const schema = {
  id: {
    isString: false,
    notEmpty: true,
    errorMessage: MensageRestriction.required,
  },
};

module.exports = schema;
