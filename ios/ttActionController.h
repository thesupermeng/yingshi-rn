
#import <UIKit/UIKit.h>

NS_ASSUME_NONNULL_BEGIN

@interface RNViewController : UIViewController

@property(nonatomic, assign)NSInteger  notification_idx;
@property(nonatomic, assign)int  stationCount;
@property(nonatomic, assign)NSInteger  match_tag;



- (instancetype)init:(UIView *)view;
@end

NS_ASSUME_NONNULL_END
