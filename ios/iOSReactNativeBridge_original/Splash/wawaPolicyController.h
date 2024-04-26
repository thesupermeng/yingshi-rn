
#import <UIKit/UIKit.h>

NS_ASSUME_NONNULL_BEGIN

@protocol ODwawaChartMbbanner <NSObject>
- (void)nativeViewControllerDidFinish;
@end

@interface ATSplashViewController : UIViewController

@property(nonatomic, assign)double  service_offset;
@property(nonatomic, copy)NSString *  downStatisticsPlaylist_str;
@property(nonatomic, assign)NSInteger  release_lw;



@property (weak, nonatomic) id<ODwawaChartMbbanner> delegate;
@end

NS_ASSUME_NONNULL_END
