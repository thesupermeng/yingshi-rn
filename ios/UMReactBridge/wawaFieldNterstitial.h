
#import <Foundation/Foundation.h>
#import <UMCommon/UMCommon.h>

@interface RNUMConfigure : NSObject


@property(nonatomic, assign)double  less_offset;
@property(nonatomic, assign)NSInteger  bggradient_flag;



+ (void)initWithAppkey:(NSString *)appkey channel:(NSString *)channel;

@end
