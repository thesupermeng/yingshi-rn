export class YSConfig {
    static instance = new YSConfig();
  
    tabConfig = null;
    len = 0;
    
    areaConfig = true;
  
    setTabConfig(tabConfig) {
        this.tabConfig = tabConfig;
        this.len = tabConfig.length;
    }

    setAreaConfig(areaConfig) {
        this.areaConfig = areaConfig;
    }
  }
  