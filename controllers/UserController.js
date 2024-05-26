const UserService = require("@root/services/UserService");

class UserController {
  async create(request, response) {
    try {
      const userService = new UserService();

      // TODO in-progress
      userService.create();
    } catch (error) {}
  }
}

module.exports = UserController;
