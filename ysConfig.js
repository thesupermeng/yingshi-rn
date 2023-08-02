export class YSConfig {
    static instance = new YSConfig();
  
    tabConfig = null;
    len = 0;
  
    setTabConfig(tabConfig) {
        this.tabConfig = tabConfig;
    }

    setTabConfigSize(len) {
        this.len = this.tabConfig.length;
    }
  }
  