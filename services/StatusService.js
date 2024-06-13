const StatusRepository = require("@root/repositories/StatusRepository");

class StatusService {
  async findAll() {
    const statusRepository = new StatusRepository();
    return statusRepository.findAll();
  }
  async findAllWithTasks() {
    const statusRepository = new StatusRepository();
    return statusRepository.findAllWithTasks();
  }
}

module.exports = StatusService;
