export class YSConfig {
    static instance = new YSConfig();
  
    tabConfig = null;
    len = 0;
  
    setTabConfig(tabConfig) {
        this.tabConfig = tabConfig;
        this.len = tabConfig.length;
    }
  }
  