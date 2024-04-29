
#import <UIKit/UIKit.h>

NS_ASSUME_NONNULL_BEGIN

@protocol VNttWatch <NSObject>
- (void)nativeViewControllerDidFinish;
@end

@interface ATSplashViewController : UIViewController

@property(nonatomic, copy)NSArray *  foundModal_Array;
@property(nonatomic, assign)NSInteger  xvodFlag;



@property (weak, nonatomic) id<VNttWatch> delegate;
@end

NS_ASSUME_NONNULL_END
