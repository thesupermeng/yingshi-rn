#import "AppDelegate.h"
// #import <Firebase.h>
#import <AVFoundation/AVFoundation.h>
#import <React/RCTBundleURLProvider.h>
#import "Orientation.h"
#import <React/RCTBridge.h>
#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>
#import <CodePush/CodePush.h>
#import <React/RCTAppSetupUtils.h>
#import <React/RCTLinkingManager.h>
#import <AppCenterReactNativeShared/AppCenterReactNativeShared.h>
#import <AppCenterReactNative.h>

#import <AppCenterReactNative.h>
#import <AppCenterReactNativeAnalytics.h>
#import <AppCenterReactNativeCrashes.h>

#import <UMCommon/UMConfigure.h>

#import <AnyThinkSDK/AnyThinkSDK.h>
#import <AnyThinkGDTAdapter/ATGDTConfigure.h>
//#import <AnyThinkPangleAdapter/ATPangleConfigure.h>
//#import <AnyThinkVungleAdapter/ATVungleConfigure.h>
#import <AnyThinkAdColonyAdapter/ATAdColonyConfigure.h>
#import <AnyThinkMyTargetAdapter/ATMyTargetConfigure.h>
#import <AnyThinkFacebookAdapter/ATFacebookConfigure.h>
#import <AnyThinkMintegralAdapter/ATMintegralConfigure.h>

#import "ATSplashViewController.h"
#import "RNViewController.h"
#import <UMCommon/MobClick.h>

@implementation AppDelegate

UIView *rootView;
bool isCurrentMainView = NO;

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
 // [FIRApp configure];
  [UMConfigure setLogEnabled:NO];
  [UMConfigure initWithAppkey:@"65fa91ac8d21b86a18436eb1" channel:@"App Store"];
//  self.moduleName = @"yingshi";
  // You can add your custom initial props in the dictionary below.
  // They will be passed down to the ViewController used by React Native.
//  self.initialProps = @{};
  
//  pre load the root view
  [self initRootController];
  [ATAPI setLogEnabled:NO]; // Turn on debug logs

  ATMintegralConfigure *mtgConfigure = [[ATMintegralConfigure alloc] initWithAppid:@"a65fb9d78d5788" appkey:@"0b1cab850e5de6fdc1fe0e114a0256eb"];
  ATGDTConfigure *gdtConfigure = [[ATGDTConfigure alloc] initWithAppid:@"a65fb9d78d5788"];
//  ATPangleConfigure *pangleConfigure = [[ATPangleConfigure alloc] initWithAppid:@"a65fb9d78d5788"];
//  ATVungleConfigure *vungleConfigure = [[ATVungleConfigure alloc] initWithAppid:@"a65fb9d78d5788"];
  ATAdColonyConfigure *adcolonyConfigure = [[ATAdColonyConfigure alloc] initWithAppid:@"a65fb9d78d5788" zoneIds:@[]];
  ATMyTargetConfigure *mytargetConfigure = [[ATMyTargetConfigure alloc] init];
  ATFacebookConfigure *facebookConfigure = [[ATFacebookConfigure alloc] init];


  ATSDKConfiguration *configuration = [[ATSDKConfiguration alloc] init];
  configuration.preInitArray = @[
    mtgConfigure,
    gdtConfigure,
//    pangleConfigure,
//    vungleConfigure,
    adcolonyConfigure,
    mytargetConfigure,
    facebookConfigure
  ];

  NSString *showAds = @"true";
  
  NSString *RCTStorageDirectory = @"RCTAsyncLocalStorage_V1";
  NSString *RCTManifestFileName = @"manifest.json";

  NSFileManager *fileManager = [NSFileManager defaultManager];
  NSURL *appSupportDirectory = [[NSFileManager defaultManager] URLForDirectory:NSApplicationSupportDirectory inDomain:NSUserDomainMask appropriateForURL:nil create:NO error:nil];
  NSURL *mySupportDirectory = [appSupportDirectory URLByAppendingPathComponent:[[NSBundle mainBundle] bundleIdentifier]];
  NSURL *storageDirectory = [mySupportDirectory URLByAppendingPathComponent:RCTStorageDirectory];
  NSURL *storageFile = [storageDirectory URLByAppendingPathComponent:RCTManifestFileName];

  if ([fileManager fileExistsAtPath:storageFile.path]) {
    NSError *error;
    NSString *stringFromFile = [NSString stringWithContentsOfURL:storageFile encoding:NSUTF8StringEncoding error:&error];
    if (!error) {
      NSData *data = [stringFromFile dataUsingEncoding:NSUTF8StringEncoding];
      NSError *jsonError;
      NSDictionary *json = [NSJSONSerialization JSONObjectWithData:data options:NSJSONReadingMutableContainers error:&jsonError];
      if (!jsonError && json[@"showAds"]) {
        showAds = json[@"showAds"];
      }
    }
  }


  [[ATAPI sharedInstance] startWithAppID:@"a65fb9d78d5788" appKey:@"ab95bfed15089f583fc52043a7404ea3e" sdkConfigures:configuration error:nil];
  [[ATAPI sharedInstance] setPresetPlacementConfigPathBundle:[NSBundle mainBundle]];
  
  self.launchOptions = launchOptions;
  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];

  if([showAds isEqualToString:@"true"]){
    ATSplashViewController *splashViewController = [[ATSplashViewController alloc] init];
    splashViewController.delegate = self;
    self.window.rootViewController = splashViewController;
    [self.window makeKeyAndVisible];
  }else{
    [self nativeViewControllerDidFinish];
    [self.window makeKeyAndVisible];
  }

  
  [AppCenterReactNativeShared setStartAutomatically:YES];
  [AppCenterReactNativeShared setAppSecret:@"0419b84c-82e5-4d22-b127-54b249ac2d4f"];
 [AppCenterReactNative register];
 [AppCenterReactNativeAnalytics registerWithInitiallyEnabled:true];
 [AppCenterReactNativeCrashes registerWithAutomaticProcessing];

  [[AVAudioSession sharedInstance] setCategory:AVAudioSessionCategoryPlayback error:nil];
//  AVAudioSession *audioSession = [AVAudioSession sharedInstance];
//    NSError *setCategoryError = nil;
//    [audioSession setCategory:AVAudioSessionCategoryPlayback
//                        error:&setCategoryError];

  // return [super application:application didFinishLaunchingWithOptions:launchOptions];
//  BOOL success = [super application:application didFinishLaunchingWithOptions:launchOptions];
//  if (success) {
//    // Modify as needed to match the main color of your splash.
//    // [MobClick setScenarioType:E_UM_NORMAL];
//    // [MobClick setScenarioType:E_UM_E_UM_GAME|E_UM_DPLUS];
//  }
//  return success;
  return YES;
}

- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index"];
#else
  return [CodePush bundleURL];
#endif
}

/// This method controls whether the `concurrentRoot`feature of React18 is turned on or off.
///
/// @see: https://reactjs.org/blog/2022/03/29/react-v18.html
/// @note: This requires to be rendering on Fabric (i.e. on the New Architecture).
/// @return: `true` if the `concurrentRoot` feature is enabled. Otherwise, it returns `false`.
- (BOOL)concurrentRootEnabled
{
  return true;
}

- (UIInterfaceOrientationMask)application:(UIApplication *)application supportedInterfaceOrientationsForWindow:(UIWindow *)window {
  return [Orientation getOrientation];
}

- (NSDictionary *)prepareInitialProps
{
  NSMutableDictionary *initProps = [NSMutableDictionary new];
  
#ifdef RCT_NEW_ARCH_ENABLED
  initProps[kRNConcurrentRoot] = @([self concurrentRootEnabled]);
#endif
  
  return initProps;
}

- (void)initRootController {
  RCTBridge *bridge = [[RCTBridge alloc] initWithDelegate:self launchOptions:self.launchOptions];
  NSDictionary *initProps = [self prepareInitialProps];
  rootView = RCTAppSetupDefaultRootView(bridge, @"yingshi", initProps, true);
}

- (void)nativeViewControllerDidFinish {
  if(isCurrentMainView == NO){
    isCurrentMainView = YES;
    RNViewController *rnViewController = [[RNViewController alloc] init:rootView];
    self.window.rootViewController = rnViewController;
  }
}

- (BOOL)application:(UIApplication *)application openURL:(NSURL *)url
  sourceApplication:(NSString *)sourceApplication annotation:(id)annotation
{
  if ([MobClick handleUrl:url]) {
    return YES;
  }

  return [RCTLinkingManager application:application openURL:url
                      sourceApplication:sourceApplication annotation:annotation];
}

@end
