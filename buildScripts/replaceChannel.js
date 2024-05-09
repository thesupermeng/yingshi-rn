const replace = require('replace-in-file');
const fs = require('fs');

const constantsFilePath = '../src/utility/constants.ts';
const androidKeyFile = '../android/app/src/main/res/values/strings.xml';
const package = require('../package.json');
const versionNum = package.version;
const appPath = '../App.tsx';
// const packageName = package.name;

let codePushDeploymentKey = '';
let umengKey = '';

// yingshi Staging Key
// codePushDeploymentKey = "TJMfhAG-GnqKD6ygv0iOCXPvwwraf7MT-89Tm"
// yingshi Production Key
codePushDeploymentKey = 'yKccuj7iqcdUJBfjKi4dYg0Q4apstPlWZ2RxX';
umengKey = '650938dcb2f6fa00ba556645';

// fs.readFile(constantsFilePath, 'utf8', (err, data) => {
//     if (err) {
//         console.error(`Error reading file: ${err.message}`);
//         return;
//     }

//     const foundConst = data.match(/export const APP_VERSION = "([^"]+)"/);

//     if (foundConst) {
//         versionNum = foundConst[1];
//     }
// });

fs.readFile(androidKeyFile, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }

  const updatedCodePush = data.replace(
    /<string\s+moduleConfig="true"\s+name="CodePushDeploymentKey">[^<]+<\/string>/,
    '<string moduleConfig="true" name="CodePushDeploymentKey">' +
    codePushDeploymentKey +
    '</string>',
  );

  fs.writeFile(androidKeyFile, updatedCodePush, 'utf8', err => {
    if (err) {
      console.error('Error writing to the file:', err);
      return;
    }
    console.log('File updated successfully.');
  });
});

const channel = process.env.APK_CHANNEL;
console.log(process.env.APK_CHANNEL);

const replaceToChannelRN = {
  files: [constantsFilePath],
  from: /export const UMENG_CHANNEL = "([^"]+)"/g,
  to: 'export const UMENG_CHANNEL = "WEB"',
};

const replaceToAppVersionRN = {
  files: [constantsFilePath],
  from: /export const APP_VERSION = "([^"]+)"/g,
  to: 'export const APP_VERSION = "1.1.1"',
};

const replaceToChannelAndroid = {
  files: ['../android/app/build.gradle'],
  from: /resValue "string", "UMENG_CHANNEL", "([^"]+)"/g,
  to: 'resValue "string", "UMENG_CHANNEL", "DEFAULT"',
};

const replaceToUmengAppKey = {
  files: ['../android/app/build.gradle'],
  from: /resValue "string", "UMENG_APPKEY", "([^"]+)"/g,
  to: 'resValue "string", "UMENG_APPKEY", "650938dcb2f6fa00ba556645"',
};

const replaceAppToponConf = {
  files: [appPath],
  from: /const topon_channel = "([^"]+)"/g,
  to: 'const topon_channel = "DEFAULT"',
};

replaceToChannelRN.to = 'export const UMENG_CHANNEL = "' + channel + '"';
replaceToAppVersionRN.to = 'export const APP_VERSION = "' + versionNum + '"';
replaceToChannelAndroid.to =
  'resValue "string", "UMENG_CHANNEL", "' + channel + '"';
replaceToUmengAppKey.to =
  'resValue "string", "UMENG_APPKEY", "' + umengKey + '"';
replaceAppToponConf.to = 'const topon_channel = "' + channel + '"';
console.log(replaceToChannelRN.to);

try {
  if (channel != '0' && channel != 0) {
    const rnResults = replace.sync(replaceToChannelRN);
    console.log('UMENG CHANNEL updated in React Native: ', rnResults);
  }
  const vnResults = replace.sync(replaceToAppVersionRN);
  console.log('APP_VERSION updated in React Native: ', vnResults);
} catch (error) {
  console.error('Error occurred:', error);
}

try {
  if (channel != '0' && channel != 0) {
    let androidResults = replace.sync(replaceToChannelAndroid);
    console.log('UMENG CHANNEL updated in Android: ', androidResults);
  }

  replaceToChannelAndroid.from = /versionName "([^"]+)"/g;
  replaceToChannelAndroid.to = 'versionName "' + versionNum + '"';
  console.log(replaceToChannelAndroid.to);
  const androidVersionNumberResults = replace.sync(replaceToChannelAndroid);
  console.log(
    'Version number updated in Android: ',
    androidVersionNumberResults,
  );
} catch (error) {
  console.error('Error occurred:', error);
}
try {
  let umengKeyResults = replace.sync(replaceToUmengAppKey);
  console.log('UMENG Key updated in Android: ', umengKeyResults);
} catch (error) {
  console.error('Error occurred:', error);
}

try {
  let appKeyResults = replace.sync(replaceAppToponConf);
  console.log('App.tsx topon Key updated in Android: ', appKeyResults);
} catch (error) {
  console.error('Error occurred:', error);
}

// const ALL_UMENG_CHANNELS = {
//     'WEB': 'WEB',
//     'GOOGLE_PLAY': 'GOOGLE_PLAY',
//     'HUAWEI_APP_GALLERY_OVERSEAS': 'HUAWEI_APP_GALLERY_OVERSEAS',
//     'OPPO_APP_MARKET': 'OPPO_APP_MARKET',
//     'VIVO_APP_STORE': 'VIVO_APP_STORE',
//     'MI_GETAPPS': 'MI_GETAPPS'
// }

// const channels = Object.entries(ALL_UMENG_CHANNELS);
// channels.forEach(([key, value]) => {

//     replaceToChannelRN.to = 'export const UMENG_CHANNEL = "' + key + '"';
//     replaceToChannelAndroid.to = 'resValue "string", "UMENG_CHANNEL", "' + key + '"';

//     console.log(replaceToChannelRN.to);

//     try {
//         const rnResults = replace.sync(replaceToChannelRN);
//         console.log('UMENG CHANNEL updated in React Native: ', rnResults);
//     } catch (error) {
//         console.error('Error occurred:', error);
//     }

//     try {
//         if(key == "APPLE_STORE"){
//             return;
//         }
//         const androidResults = replace.sync(replaceToChannelAndroid);
//         console.log('UMENG CHANNEL updated in Android: ', androidResults);
//     } catch (error) {
//         console.error('Error occurred:', error);
//     }
// })

// ============================== analysis ==============================
const ANALYTICS_FIREBASE = process.env.ANALYTICS_FIREBASE ?? "0";
const ANALYTICS_UMENG = process.env.ANALYTICS_UMENG ?? "0";

const replaceConstantAnalytics = () => {
  const replaceAnalyticsFirebaseConstance = {
    files: ['../src/utility/constants.ts'],
    from: /export const ANALYTICS_FIREBASE = (false|true);/g,
    to: `export const ANALYTICS_FIREBASE = ${ANALYTICS_FIREBASE === '1' ? true : false};`,
  };

  const replaceAnalyticsUmengConstance = {
    files: ['../src/utility/constants.ts'],
    from: /export const ANALYTICS_UMENG = (false|true);/g,
    to: `export const ANALYTICS_UMENG = ${ANALYTICS_UMENG === '1' ? true : false};`,
  };

  try {
    replace.sync(replaceAnalyticsFirebaseConstance);
    replace.sync(replaceAnalyticsUmengConstance);

    console.log('done set constants value of analytics');
  } catch (error) {
    console.error('Error occurred:', error);
  }
}

const replaceBuildGradleAnalytics = () => {
  const replaceAnalyticsFirebaseNative = {
    files: ['../android/app/build.gradle'],
    from: /def ANALYTICS_FIREBASE = "(0|1)";/g,
    to: `def ANALYTICS_FIREBASE = "${ANALYTICS_FIREBASE}";`,
  };

  const replaceAnalyticsUmengNative = {
    files: ['../android/app/build.gradle'],
    from: /def ANALYTICS_UMENG = "(0|1)";/g,
    to: `def ANALYTICS_UMENG = "${ANALYTICS_UMENG}";`,
  };

  try {
    replace.sync(replaceAnalyticsFirebaseNative);
    replace.sync(replaceAnalyticsUmengNative);

    console.log('done set build gradle value of analytics');
  } catch (error) {
    console.error('Error occurred:', error);
  }
}

const replaceNativeFileAnalytics = () => {
  const replaceAnalyticsFiles1 = {
    files: [
      '../android/app/src/main/java/com/yingshi/AnalyticsModule.java',
      '../android/app/src/main/java/com/yingshi/RNUMConfigure.java'
    ],
    from: ANALYTICS_UMENG === '1' ? /\/\*\/if/g : /\/\/if/g,
    to: ANALYTICS_UMENG === '1' ? '//if' : '/*/if',
  };
  const replaceAnalyticsFiles2 = {
    files: [
      '../android/app/src/main/java/com/yingshi/AnalyticsModule.java',
      '../android/app/src/main/java/com/yingshi/RNUMConfigure.java'
    ],
    from: ANALYTICS_UMENG === '1' ? /\/\/else\*\//g : /\/\*\/else/g,
    to: ANALYTICS_UMENG === '1' ? '/*/else' : '//else*/',
  };
  const replaceAnalyticsFiles3 = {
    files: [
      '../android/app/src/main/java/com/yingshi/AnalyticsModule.java',
      '../android/app/src/main/java/com/yingshi/RNUMConfigure.java'
    ],
    from: ANALYTICS_UMENG === '1' ? /\/\/endif/g : /\/\/endif\*\//g,
    to: ANALYTICS_UMENG === '1' ? '//endif*/' : '//endif',
  };

  try {
    replace.sync(replaceAnalyticsFiles1);
    replace.sync(replaceAnalyticsFiles2);
    replace.sync(replaceAnalyticsFiles3);

    console.log('done set native file import of analytics');
  } catch (error) {
    console.error('Error occurred:', error);
  }
}

replaceConstantAnalytics();
replaceBuildGradleAnalytics();
replaceNativeFileAnalytics();