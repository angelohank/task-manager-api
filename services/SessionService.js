const { compare } = require("bcryptjs");
const { sign } = require("jsonwebtoken");

const UserRepository = require("@root/repositories/UserRepository");

class SessionService {
  async authenticate(userRequestEntity) {
    const userRepository = new UserRepository();

    const userEntity = await userRepository.findByDsUsername(
      userRequestEntity.dsUsername
    );

    if (!userEntity) {
      throw new Error("User does not exists!");
    }

    const isSamePassword = await compare(
      userRequestEntity.dsPassword,
      userEntity.dsPassword
    );

    if (!isSamePassword) {
      throw new Error("User or Password incorrect");
    }

    const token = sign({}, process.env.SECRET_JWT, {
      subject: toString(userEntity.idUser),
    });

    return token;
  }
}

module.exports = SessionService;
