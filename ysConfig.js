export class YSConfig {
  static instance = new YSConfig();

  tabConfig = null;
  len = 0;

  areaConfig = true;
  ip = '';

      // y == 成为VIP 
    // n == 付费购买VIP
    showBecomeVip = false;

  setTabConfig(tabConfig) {
    this.tabConfig = tabConfig;
    this.len = tabConfig.length;
  }

  setAreaConfig(areaConfig) {
    this.areaConfig = areaConfig;
  }

  setNetworkIp(ip) {
    this.ip = ip;
  }

  setShowBecomeVip(payload) {
    this.showBecomeVip = payload;
  }
}
