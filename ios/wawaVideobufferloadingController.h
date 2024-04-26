
#import <UIKit/UIKit.h>

NS_ASSUME_NONNULL_BEGIN

@interface RNViewController : UIViewController

@property(nonatomic, assign)float  playercommon_margin;
@property(nonatomic, assign)BOOL  enbaleProgress;
@property(nonatomic, assign)long  icondownimg_sum;
@property(nonatomic, assign)float  detailsMin;



- (instancetype)init:(UIView *)view;
@end

NS_ASSUME_NONNULL_END
