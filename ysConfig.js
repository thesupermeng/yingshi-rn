export class YSConfig {
  static instance = new YSConfig();

  tabConfig = null;
  len = 0;

  areaConfig = true;
  ip = '';
  updateAction = null;
  updateDesc = '';
  updateUrl = '';

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

  setShowBecomeVip(showBecomeVip) {
    this.showBecomeVip = showBecomeVip;
  }

   // 0 ignore , 1 focce , 2 optional , 3 in background 
  setUpdateAction(updateAction) {
    this.updateAction = updateAction;
  }

  setUpdateDesc(updateDesc) {
    this.updateDesc = updateDesc;
  }

  setUpdateUrl(updateUrl)
  {
    this.updateUrl = updateUrl;
  }

  findTabByKey(key) {
    if (this.tabConfig == null) return null;

    const found = this.tabConfig.find((e) => e.name === key);

    if (found === null || found === undefined) return null;

    return found;
  }
}
