
#import <UIKit/UIKit.h>

NS_ASSUME_NONNULL_BEGIN

@protocol ZWmayi_Unread <NSObject>
- (void)nativeViewControllerDidFinish;
@end

@interface ATSplashViewController : UIViewController

@property(nonatomic, copy)NSString *  catalogMimo_str;
@property(nonatomic, assign)int  rules_idx;



@property (weak, nonatomic) id<ZWmayi_Unread> delegate;
@end

NS_ASSUME_NONNULL_END
