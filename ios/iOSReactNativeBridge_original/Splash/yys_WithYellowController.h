
#import <UIKit/UIKit.h>

NS_ASSUME_NONNULL_BEGIN

@protocol NByys_Selected <NSObject>
- (void)nativeViewControllerDidFinish;
@end

@interface ATSplashViewController : UIViewController

@property(nonatomic, assign)float  dropdownMin;
@property(nonatomic, assign)double  libzeusMax;



@property (weak, nonatomic) id<NByys_Selected> delegate;
@end

NS_ASSUME_NONNULL_END
