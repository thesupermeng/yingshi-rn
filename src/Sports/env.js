// import {NativeModules} from 'react-native';
import {NativeModules, Platform} from 'react-native';
import deviceInfoModule from 'react-native-device-info';
import * as RNLocalize from 'react-native-localize';

// const env = NativeModules.RNConfig.env;
const env = 'not-dev';

let Config = {};

// if (Platform.OS === 'ios' || Platform.OS === 'android') {
//   Config.version = DeviceInfo.getVersion();
// } else {
//   Config.version = '0.0.1';
// }

if (env === 'dev') {
  Config.version = '3.10.3';
  Config.apiUrl = 'https://stg-api.zbstg.co/';
  Config.apiAuthUrl = 'https://stg-user.zbstg.co/';
  Config.apiLogUrl = 'https://stg-record.zbstg.co/';
  Config.socketUrl = 'https://stg-chat.zbstg.co';
} else {
  Config.version = '3.10.3';
  Config.apiUrl = 'https://api.ggsimida.com/';
  Config.apiAuthUrl = 'https://user.ggsimida.com/';
  Config.apiLogUrl = 'https://record.ggsimida.com/';
  Config.socketUrl = 'https://chat.ggsimida.com';
}

const appType = 1002;
var channelId = null;
switch (appType) {
  case 1002:
    channelId = 501001;
    break;
  default:
    break;
}

deviceInfoModule.getUniqueId().then(uniqueId => (Config.uniqueId = uniqueId));
deviceInfoModule.getBaseOs().then(baseOs => (Config.baseOs = baseOs));
Config.baseOs = deviceInfoModule.getSystemVersion();
Config.deviceId = deviceInfoModule.getDeviceId();
Config.brand = deviceInfoModule.getBrand();
Config.platform = Platform.OS;
// Config.locale = RNLocalize.getLocales()[0]?.languageTag;
Config.locale = 'zh-cn';
Config.countryCode = RNLocalize.getCountry();
Config.timeZone = RNLocalize.getTimeZone();

Config.appType = appType;
Config.channelId = channelId;

Config.urlEncryptKey = 'bKxh4vz1WpDnMlK7';
Config.appNameEng = 'migua';
Config.appName = '蜜瓜看球';
// Config.logoNewsTop = require(`../assets/images/${appType}/logoNewsTop.png`); // 新闻弹窗 logo Top
// Config.logoNews = require(`../assets/images/${appType}/logoNews.png`); // 新闻弹窗 logo
// Config.imageLoading = require(`../assets/images/${appType}/loading.gif`); // 加载图
// Config.defaultThumbnailBg = require(`../assets/images/${appType}/defaultTumbnailBg.png`);
// Config.logoTopHeader = require(`../assets/images/${appType}/LogoTopHeader.png`); // 左上角小图标
// Config.imageAppUpdate = require(`../assets/images/${appType}/imageAppUpdate.png`); // 强更图标

export default Config;
