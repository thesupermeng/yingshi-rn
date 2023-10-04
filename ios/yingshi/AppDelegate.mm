#import "AppDelegate.h"
#import <AVFoundation/AVFoundation.h>
#import <React/RCTBundleURLProvider.h>
#import "Orientation.h"
#import <React/RCTBridge.h>
#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>
#import <CodePush/CodePush.h>

#import <AppCenterReactNative.h>
#import <AppCenterReactNativeAnalytics.h>
#import <AppCenterReactNativeCrashes.h>

//#import <UMCommon/UMConfigure.h>

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
//  [UMConfigure setLogEnabled:YES];
  // [RNUMConfigure initWithAppkey:@"64a632e5bd4b621232c9e379" channel:@"App Store"];
//  [UMConfigure initWithAppkey:@"64a632e5bd4b621232c9e379" channel:@"App Store"];
  self.moduleName = @"yingshi";
  // You can add your custom initial props in the dictionary below.
  // They will be passed down to the ViewController used by React Native.
  self.initialProps = @{};
  
  [AppCenterReactNative register];
  [AppCenterReactNativeAnalytics registerWithInitiallyEnabled:true];
  [AppCenterReactNativeCrashes registerWithAutomaticProcessing];
  
//  UIStoryboard *storyboard = [UIStoryboard storyboardWithName:@"AnimationViewStoryboard" bundle:[NSBundle mainBundle]];
//    // this code just run when storyboard have default ViewController
//  //  UIViewController *vc =[storyboard instantiateInitialViewController];
//
//  UIViewController *vc =[storyboard instantiateViewControllerWithIdentifier:@"myAnimationViewController"];
//
//  RCTBridge *bridge = [[RCTBridge alloc] initWithDelegate:self launchOptions:launchOptions];
//  RCTRootView *rootView = [[RCTRootView alloc] initWithBridge:bridge
//                                               moduleName:@"yingshi"
//                                        initialProperties:nil];
//
//  rootView.backgroundColor = [UIColor blueColor];
//
//  UIViewController *rootViewController = [UIViewController new];
//  rootViewController.view = rootView;
//
//  self.window = [[UIWindow alloc] initWithFrame:[[UIScreen mainScreen] bounds]];
//  self.window.rootViewController = vc;
//  [self.window makeKeyAndVisible];

//  dispatch_after(dispatch_time(DISPATCH_TIME_NOW, (int64_t)(10 * NSEC_PER_SEC)), dispatch_get_main_queue(), ^{
//    self.window.rootViewController = rootViewController;
//  });
  
  [[AVAudioSession sharedInstance] setCategory:AVAudioSessionCategoryPlayback error:nil];
//  AVAudioSession *audioSession = [AVAudioSession sharedInstance];
//    NSError *setCategoryError = nil;
//    [audioSession setCategory:AVAudioSessionCategoryPlayback
//                        error:&setCategoryError];

  // return [super application:application didFinishLaunchingWithOptions:launchOptions];
  BOOL success = [super application:application didFinishLaunchingWithOptions:launchOptions];
  if (success) {
    // Modify as needed to match the main color of your splash.
    // [MobClick setScenarioType:E_UM_NORMAL];
    // [MobClick setScenarioType:E_UM_E_UM_GAME|E_UM_DPLUS];
  }
  return success;
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

@end
