export class AppConfig {
  static instance = new AppConfig();

  config = {};
  get funeralMode() {
    return this.config?.funeralMode === '1' ? true : false;
  }

  setConfig(config) {
    this.config = config;
  }
}
