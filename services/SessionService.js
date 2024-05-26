const { compare } = require("bcryptjs");
const { sign } = require("jsonwebtoken");

const UserRepository = require("@root/repositories/UserRepository");

class SessionService {
  async execute(dsUsername, dsPassword) {
    const userRepository = new UserRepository();

    const user = userRepository.findByDsUsername(dsUsername);

    if (!user) {
      return new Error("User does not exists!");
    }

    const isSamePassword = await compare(dsPassword, user.password);

    if (!isSamePassword) {
      return new Error("User or Password incorrect");
    }

    const token = sign({}, process.env.SECRET_JWT, {
      subject: user.id,
    });

    return { token };
  }
}

module.exports = SessionService;
