#import "AppDelegate.h"
#import <AVFoundation/AVFoundation.h>
#import <React/RCTBundleURLProvider.h>
#import "Orientation.h"

#import <UMCommon/UMConfigure.h>

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  [UMConfigure setLogEnabled:YES];
  // [RNUMConfigure initWithAppkey:@"64a632e5bd4b621232c9e379" channel:@"App Store"];
  [UMConfigure initWithAppkey:@"64a632e5bd4b621232c9e379" channel:@"App Store"];
  self.moduleName = @"yingshi";
  // You can add your custom initial props in the dictionary below.
  // They will be passed down to the ViewController used by React Native.
  self.initialProps = @{};
  
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
  return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
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
