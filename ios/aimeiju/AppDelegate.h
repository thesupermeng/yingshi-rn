#import <RCTAppDelegate.h>
#import <UIKit/UIKit.h>
#import "ATSplashViewController.h"

@interface AppDelegate : UIResponder <UIApplicationDelegate, RCTBridgeDelegate, NativeViewControllerDelegate>

@property (nonatomic, strong) UIWindow *window;

@property (nonatomic, strong) NSDictionary *launchOptions;

@end
