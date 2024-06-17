const { GeneralSettings } = require("@root/models");

class GeneralSettingsRepository {
  async findIdStatusDefault() {
    const generalSettigsModel = await GeneralSettings.findAll({ limit: 1 });

    if (!generalSettigsModel) {
      return;
    }

    console.log(generalSettigsModel);

    return generalSettigsModel[0].toJSON().id_status_default;
  }
}

module.exports = GeneralSettingsRepository;
