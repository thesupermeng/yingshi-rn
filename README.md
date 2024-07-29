## Set up react native environment
Install xcode, android studio

this project using gradle version 7.5, so need to download the suitable java version (java 11)

# Problems you may encounter
## Android:

* What went wrong:
A problem occurred configuring root project 'yingshi'.
> Could not open proj generic class cache for build file '/Projects/yingshi-react-native/android/build.gradle' (/.gradle/caches/7.5.1/scripts/4zt8x5knz4cpjdicliaiiizr0).
   > BUG! exception in phase 'semantic analysis' in source unit '_BuildScript_' Unsupported class file major version 64


Refer:
https://stackoverflow.com/questions/18487406/how-do-i-tell-gradle-to-use-specific-jdk-version



* What went wrong:
Could not determine the dependencies of task ':app:compileDebugJavaWithJavac'.
> SDK location not found. Define a valid SDK location with an ANDROID_HOME environment variable or by setting the sdk.dir path in your project's local properties file at '/Projects/yingshi-react-native/android/local.properties'.


Refer:
https://stackoverflow.com/questions/27620262/sdk-location-not-found-define-location-with-sdk-dir-in-the-local-properties-fil


* What went wrong:
Execution failed for task ':app:installDebug'.
> com.android.builder.testing.api.DeviceException: No connected devices!

Ans:
Open android studio, run a emulator 1st, then try again

* What went wrong:
Unable to load script.Make sure you are either running a Metro server or that your bundle 'index.android.bundle' is packaged correctly for release

Ans:
Add adb to home path
	https://stackoverflow.com/questions/7609270/not-able-to-access-adb-in-os-x-through-terminal-command-not-found
Run: adb reverse tcp:8081 tcp:8081



## IOS:
* What went wrong:
Unable to boot device in current state: Booted

Ans: start the simulator 1st, then try again


* What went wrong:
Xcode 10.2 Update issue Build system error -1: Unable to load contents of file list: xxx

brew install --cask cocoapods
Refer: https://stackoverflow.com/questions/72130276/invalid-podfile-file-unexpected-template-eos


Code Push Command:

Build android apk:
npm run android-apk-debug

---------------------------------------------
Add new app to code push app center:
code-push app add <appName> <os> <platform>

example:
- code-push app add yingshi-ios ios react-native
- code-push app add yingshi-android Android react-native
---------------------------------------------

List all apps:
code-push app ls
---------------------------------------------

Check deployment keys:
code-push deployment ls <appName> -k
---------------------------------------------

Check deployment history:
code-push deployment history <appName> <deploymentName>
example:
code-push deployment history yingshi-android Staging
---------------------------------------------

Release new version:
appcenter codepush release-react -a <developerName>/<appName> -d <deploymentName> --description "<description>" --mandatory <true/false>

example:
- appcenter codepush release-react -a developeryingshi/yingshi-ios -d Production --description "fix bugs" --mandatory true
- appcenter codepush release-react -a developeryingshi/yingshi-android -d Staging --description "add new feature" --mandatory true
---------------------------------------------

Rollback to previous version:
code-push rollback <appName> <deploymentName>
example:
- code-push rollback yingshi-ios Production


appcenter codepush release-react -a developeryingshi/yingshi-ios-new -d Production --description "test" --mandatory true --plist-file ios/aimeiju/Info.plist


 appcenter codepush release-react -a developeryingshi/yingshi-ios-new -d Production --description "test" --mandatory true --plist-file ios/aimeiju/Info.plist --entry-file src/components/container/RecommendationHome.tsx


and android codepush, change replaceChannel key also
appcenter codepush release-react -a developeryingshi/yingshi-android-new -d Production


codepush change skin 3 place to replace secret string 

replace channel 
codePushDeploymentKey = 'yKccuj7iqcdUJBfjKi4dYg0Q4apstPlWZ2RxX';
strings.xml