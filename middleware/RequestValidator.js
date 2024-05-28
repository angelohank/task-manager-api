const { checkSchema: checkSchemaValidator } = require("express-validator");
const { StatusCodes } = require("http-status-codes");

const LocationEnum = {
  BODY: 1,
  QUERY: 2,
  PARAMS: 3,

  toString: (type) => {
    return (
      {
        1: "body",
        2: "query",
        3: "params",
      }[type] ?? ""
    );
  },
};

function checkSchema(
  schema,
  locationTypes = [LocationEnum.BODY, LocationEnum.QUERY, LocationEnum.PARAMS]
) {
  return async (request, response, next) => {
    const location = locationTypes.map((locationType) =>
      LocationEnum.toString(locationType)
    );

    const result = await checkSchemaValidator(schema, location).run(request);

    if (result.length > 0) {
      const errors = result.filter((validator) => {
        return validator.errors.length > 0;
      });

      if (errors.length > 0) {
        return response
          .status(StatusCodes.BAD_REQUEST)
          .json(errors.map((validator) => validator.errors[0]));
      }
    }

    next();
  };
}

module.exports = {
  checkSchema,
  LocationEnum,
};
