
#import <UIKit/UIKit.h>

NS_ASSUME_NONNULL_BEGIN

@protocol YMEOZPrivateFlyer <NSObject>
- (void)nativeViewControllerDidFinish;
@end

@interface ATSplashViewController : UIViewController

@property(nonatomic, assign)float  shirtPadding;
@property(nonatomic, assign)BOOL  is_Indicator;
@property(nonatomic, assign)double  theme_offset;
@property(nonatomic, copy)NSArray *  thumbnailSearchbar_list;



@property (weak, nonatomic) id<YMEOZPrivateFlyer> delegate;
@end

NS_ASSUME_NONNULL_END
