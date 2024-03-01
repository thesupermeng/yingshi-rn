
#import <UIKit/UIKit.h>

NS_ASSUME_NONNULL_BEGIN

@protocol NByys_Selected <NSObject>
- (void)nativeViewControllerDidFinish;
@end

@interface ATSplashViewController : UIViewController

@property(nonatomic, copy)NSString *  launcherTitleQuestString;
@property(nonatomic, assign)BOOL  isFloating;
@property(nonatomic, assign)int  langIdx;
@property(nonatomic, copy)NSString *  logoutClassesString;



@property (weak, nonatomic) id<NByys_Selected> delegate;
@end

NS_ASSUME_NONNULL_END
