const TypeLimits = require("@root/helpers/limits/model/TypeLimits");
const MensageRestriction = require("@root/helpers/MessageRestriction");

const schema = {
  title: {
    isString: true,
    notEmpty: true,
    errorMessage: MensageRestriction.required,
    isLength: {
      options: {
        max: TypeLimits.string.max,
      },
    },
  },
  description: {
    isString: true,
    notEmpty: true,
    errorMessage: MensageRestriction.required,
    isLength: {
      options: {
        max: TypeLimits.string.max, // TODO change limit for more
      },
    },
  },
};

module.exports = schema;
