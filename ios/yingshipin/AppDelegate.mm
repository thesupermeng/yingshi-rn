#import "AppDelegate.h"
#import <AVFoundation/AVFoundation.h>
#import <React/RCTBundleURLProvider.h>
#import "Orientation.h"
#import <React/RCTBridge.h>
#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>
#import <CodePush/CodePush.h>
#import <React/RCTAppSetupUtils.h>

#import <AppCenterReactNative.h>
#import <AppCenterReactNativeAnalytics.h>
#import <AppCenterReactNativeCrashes.h>

//#import <UMCommon/UMConfigure.h>

#import <AnyThinkSDK/AnyThinkSDK.h>
#import <AnyThinkGDTAdapter/ATGDTConfigure.h>
// #import <AnyThinkPangleAdapter/ATPangleConfigure.h>
// #import <AnyThinkVungleAdapter/ATVungleConfigure.h>
// #import <AnyThinkAdColonyAdapter/ATAdColonyConfigure.h>
#import <AnyThinkMyTargetAdapter/ATMyTargetConfigure.h>
// #import <AnyThinkFacebookAdapter/ATFacebookConfigure.h>
// #import <AnyThinkFacebookAdapter/ATFacebookConfigure.h>
#import "ATSplashViewController.h"

@implementation AppDelegate

UIView *rootView;

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
//  [UMConfigure setLogEnabled:YES];
  // [RNUMConfigure initWithAppkey:@"64a632e5bd4b621232c9e379" channel:@"App Store"];
//  [UMConfigure initWithAppkey:@"64a632e5bd4b621232c9e379" channel:@"App Store"];
//  self.moduleName = @"yingshi";
  // You can add your custom initial props in the dictionary below.
  // They will be passed down to the ViewController used by React Native.
//  self.initialProps = @{};
  
  [self initRootController];
  [ATAPI setLogEnabled:NO]; // Turn on debug logs

  //  ATMintegralConfigure *mtgConfigure = [[ATMintegralConfigure alloc] initWithAppid:@"a650a6ca02b6a6" appkey:@"a1d5a4e8e7e2bb06880eb2cda108716ed"];
    ATGDTConfigure *gdtConfigure = [[ATGDTConfigure alloc] initWithAppid:@"a650a6ca02b6a6"];
  //  ATPangleConfigure *pangleConfigure = [[ATPangleConfigure alloc] initWithAppid:@"a650a6ca02b6a6"];
  //  ATVungleConfigure *vungleConfigure = [[ATVungleConfigure alloc] initWithAppid:@"a650a6ca02b6a6"];
  //  ATAdColonyConfigure *adcolonyConfigure = [[ATAdColonyConfigure alloc] initWithAppid:@"a650a6ca02b6a6" zoneIds:@[zoneIds]];
    ATMyTargetConfigure *mytargetConfigure = [[ATMyTargetConfigure alloc] init];
  //  ATFacebookConfigure *facebookConfigure = [[ATFacebookConfigure alloc] init];

    ATSDKConfiguration *configuration = [[ATSDKConfiguration alloc] init];
    configuration.preInitArray = @[
  //    mtgConfigure,
     gdtConfigure,
  //    pangleConfigure,
  //    vungleConfigure,
  //    adcolonyConfigure,
      mytargetConfigure,
  //    facebookConfigure
    ];

  [[ATAPI sharedInstance] startWithAppID:@"a650a6ca02b6a6" appKey:@"a1d5a4e8e7e2bb06880eb2cda108716ed" sdkConfigures:configuration error:nil];
  [[ATAPI sharedInstance] setPresetPlacementConfigPathBundle:[NSBundle mainBundle]];
  
  self.launchOptions = launchOptions;
  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  
  ATSplashViewController *splashViewController = [[ATSplashViewController alloc] init];
  splashViewController.delegate = self;
  self.window.rootViewController = splashViewController;
  [self.window makeKeyAndVisible];
  
//  [AppCenterReactNative register];
//  [AppCenterReactNativeAnalytics registerWithInitiallyEnabled:true];
//  [AppCenterReactNativeCrashes registerWithAutomaticProcessing];

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
  rootView.backgroundColor = [UIColor blackColor];
}

- (void)nativeViewControllerDidFinish {
  UIViewController *rootViewController = [UIViewController new];
  rootViewController.view = rootView;
  self.window.rootViewController = rootViewController;
}
@end
