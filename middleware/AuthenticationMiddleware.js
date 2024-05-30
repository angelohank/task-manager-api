const { decode, verify } = require("jsonwebtoken");
const { StatusCodes } = require("http-status-codes");

function isAuthenticated() {
  return (request, response, next) => {
    const authHeaders = request.headers.authorization;

    if (!authHeaders) {
      return response
        .status(StatusCodes.OK)
        .json({ error: "Token is missing" });
    }

    const [, token] = authHeaders.split(" ");

    try {
      verify(token, process.env.SECRET_JWT);

      const { sub } = decode(token);
      request.idUser = sub.toString();

      return next();
    } catch (error) {
      console.error(error);
      return response
        .status(StatusCodes.UNAUTHORIZED)
        .json({ message: "Authentication failed! check your access token." });
    }
  };
}

module.exports = {
  isAuthenticated,
};
