const replace = require('replace-in-file');
const fs = require('fs');

const constantsFilePath = '../src/utility/constants.ts';
const androidKeyFile = '../android/app/src/main/res/values/strings.xml';
const package = require('../package.json');
const versionNum = package.version;
const packageName = package.name;

let codePushDeploymentKey = "";
let umengKey = "";

if (packageName == "yingshipin") {
    // yingshipin Staging Key
    // codePushDeploymentKey = "o-gu4vgW0ne79pMzU8HNVjZzJjTcBFUnXqx1I"
    // yingshipin Production Key
    codePushDeploymentKey = "SVDKNhmyEZXHTxX14U0uxQwSOAwc9me-xnj7U"
    umengKey = "650938dcb2f6fa00ba556645"
} else {
    // yingshi Staging Key
    // codePushDeploymentKey = "TJMfhAG-GnqKD6ygv0iOCXPvwwraf7MT-89Tm"
    // yingshi Production Key
    codePushDeploymentKey = "6AU3ZnXjdVagR29vAWza6a0rNeXC_372DupHn"
    umengKey = "648ec50987568a379b587f39"
}

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
        '<string moduleConfig="true" name="CodePushDeploymentKey">' + codePushDeploymentKey + '</string>'
    );

    fs.writeFile(androidKeyFile, updatedCodePush, 'utf8', (err) => {
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

const replaceToChannelAndroid = {
    files: ['../android/app/build.gradle'],
    from: /resValue "string", "UMENG_CHANNEL", "([^"]+)"/g,
    to: 'resValue "string", "UMENG_CHANNEL", "DEFAULT"',
};

const replaceToUmengAppKey = {
    files: ['../android/app/build.gradle'],
    from: /resValue "string", "UMENG_APPKEY", "([^"]+)"/g,
    to: 'resValue "string", "UMENG_APPKEY", "648ec50987568a379b587f39"',
};

replaceToChannelRN.to = 'export const UMENG_CHANNEL = "' + channel + '"';
replaceToChannelAndroid.to = 'resValue "string", "UMENG_CHANNEL", "' + channel + '"';
replaceToUmengAppKey.to = 'resValue "string", "UMENG_APPKEY", "' + umengKey + '"';

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
    replaceToChannelAndroid.to = 'versionName "' + versionNum + '"';
    console.log(replaceToChannelAndroid.to);
    const androidVersionNumberResults = replace.sync(replaceToChannelAndroid);
    console.log('Version number updated in Android: ', androidVersionNumberResults);
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
