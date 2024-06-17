const GeneralSettingsRepository = require("@root/repositories/GeneralSessingsRepository");

class GeneralSettingsService {
  async findIdStatusDefault() {
    const generalSettingsRepository = new GeneralSettingsRepository();
    return await generalSettingsRepository.findIdStatusDefault();
  }
}

module.exports = GeneralSettingsService;
