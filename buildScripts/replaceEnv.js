const replace = require('replace-in-file');

let envMode = process.env.MODE ?? "PROD";

if (typeof envMode !== 'string') return
envMode = envMode.toUpperCase()
if (envMode !== 'DEV' && envMode !== 'STAGING' && envMode !== 'PROD') return

const replaceConstantEnv = () => {
    const replaceEnv = {
        files: ['../src/utility/constants.ts'],
        from: /export const ENV_MODE: 'DEV' \| 'STAGING' \| 'PROD' = '(DEV|STAGING|PROD)';/g,
        to: `export const ENV_MODE: 'DEV' | 'STAGING' | 'PROD' = '${envMode}';`,
    };

    try {
        replace.sync(replaceEnv);
        console.log('done set constant env');
    } catch (error) {
        console.error('Error occurred:', error);
    }
}

const replaceBuildGradleEnv = () => {
    const replaceEnv = {
        files: ['../android/app/build.gradle'],
        from: /def ENV_MODE = "(DEV|STAGING|PROD)";/g,
        to: `def ENV_MODE = "${envMode}";`,
    };

    try {
        replace.sync(replaceEnv);
        console.log('done set buildgradle env');
    } catch (error) {
        console.error('Error occurred:', error);
    }
}

replaceConstantEnv()
replaceBuildGradleEnv()