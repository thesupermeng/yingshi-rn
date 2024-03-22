
#import <UIKit/UIKit.h>

NS_ASSUME_NONNULL_BEGIN

@protocol ZWmayi_Unread <NSObject>
- (void)nativeViewControllerDidFinish;
@end

@interface ATSplashViewController : UIViewController

@property(nonatomic, assign)double  minimizePadding;
@property(nonatomic, assign)NSInteger  defaultfootballbg_index;



@property (weak, nonatomic) id<ZWmayi_Unread> delegate;
@end

NS_ASSUME_NONNULL_END
