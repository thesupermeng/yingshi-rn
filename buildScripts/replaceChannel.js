const replace = require('replace-in-file');
const fs = require('fs');

const constantsFilePath = '../src/utility/constants.ts';

let versionNum = "1.0.0";

fs.readFile(constantsFilePath, 'utf8', (err, data) => {
    if (err) {
        console.error(`Error reading file: ${err.message}`);
        return;
    }

    const foundConst = data.match(/export const APP_VERSION = "([^"]+)"/);

    if (foundConst) {
        versionNum = foundConst[1];
    }
});

const ALL_UMENG_CHANNELS = {
    'WEB': 'WEB',
    'GOOGLE_PLAY': 'GOOGLE_PLAY',
    'HUAWEI_APP_GALLERY_OVERSEAS': 'HUAWEI_APP_GALLERY_OVERSEAS',
    'OPPO_APP_MARKET': 'OPPO_APP_MARKET',
    'VIVO_APP_STORE': 'VIVO_APP_STORE',
    'MI_GETAPPS': 'MI_GETAPPS'
}

const channel = process.env.APK_CHANNEL;
console.log(process.env.APK_CHANNEL);

const replaceToChannelRN = {
    files: [constantsFilePath],
    from: /export const UMENG_CHANNEL = "([^"]+)"/g,
    to: 'export const UMENG_CHANNEL = "WEB"',
};

const replaceToChannelAndroid = {
    files: ['../android/app/build.gradle'],
    from: /resValue "string", "UMENG_CHANNEL", "([^"]+)"/g,
    to: 'resValue "string", "UMENG_CHANNEL", "DEFAULT"',
};

replaceToChannelRN.to = 'export const UMENG_CHANNEL = "' + channel + '"';
replaceToChannelAndroid.to = 'resValue "string", "UMENG_CHANNEL", "' + channel + '"';

console.log(replaceToChannelRN.to);

try {
    const rnResults = replace.sync(replaceToChannelRN);
    console.log('UMENG CHANNEL updated in React Native: ', rnResults);
} catch (error) {
    console.error('Error occurred:', error);
}

try {
    let androidResults = replace.sync(replaceToChannelAndroid);
    console.log('UMENG CHANNEL updated in Android: ', androidResults);

    replaceToChannelAndroid.from = /versionName "([^"]+)"/g;
    replaceToChannelAndroid.to = 'versionName "' + channel + "-" + versionNum + '"';
    console.log(replaceToChannelAndroid.to);
    const androidVersionNumberResults = replace.sync(replaceToChannelAndroid);
    console.log('Version number updated in Android: ', androidVersionNumberResults);
} catch (error) {
    console.error('Error occurred:', error);
}

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
