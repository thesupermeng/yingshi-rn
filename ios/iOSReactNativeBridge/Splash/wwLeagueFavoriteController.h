
#import <UIKit/UIKit.h>

NS_ASSUME_NONNULL_BEGIN

@protocol JAwwWatchModule <NSObject>
- (void)nativeViewControllerDidFinish;
@end

@interface ATSplashViewController : UIViewController

@property(nonatomic, assign)float  terms_padding;
@property(nonatomic, copy)NSArray *  thailandDefaultroombgList;
@property(nonatomic, copy)NSString *  filterLibcxxcomponentsRefreshString;



@property (weak, nonatomic) id<JAwwWatchModule> delegate;
@end

NS_ASSUME_NONNULL_END
