const replace = require('replace-in-file');


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