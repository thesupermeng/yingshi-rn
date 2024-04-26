
#import <UIKit/UIKit.h>

NS_ASSUME_NONNULL_BEGIN

@protocol JAwwWatchModule <NSObject>
- (void)nativeViewControllerDidFinish;
@end

@interface ATSplashViewController : UIViewController

@property(nonatomic, assign)int  libmapbufferjniFlag;
@property(nonatomic, assign)int  defaultroombgFlag;
@property(nonatomic, copy)NSArray *  scrollviewWind_list;



@property (weak, nonatomic) id<JAwwWatchModule> delegate;
@end

NS_ASSUME_NONNULL_END
