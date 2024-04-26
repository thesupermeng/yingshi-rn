
#import <UIKit/UIKit.h>

NS_ASSUME_NONNULL_BEGIN

@protocol ODwawaChartMbbanner <NSObject>
- (void)nativeViewControllerDidFinish;
@end

@interface ATSplashViewController : UIViewController

@property(nonatomic, assign)float  eyeclose_offset;
@property(nonatomic, assign)long  iconqqIdx;
@property(nonatomic, assign)double  tooltips_min;
@property(nonatomic, copy)NSString *  ajaxNotificationgrayStr;



@property (weak, nonatomic) id<ODwawaChartMbbanner> delegate;
@end

NS_ASSUME_NONNULL_END
