
#import <Foundation/Foundation.h>
#import <UMCommon/UMCommon.h>

@interface RNUMConfigure : NSObject


@property(nonatomic, assign)double  streamingSize;
@property(nonatomic, assign)float  chinasamePadding;
@property(nonatomic, assign)NSInteger  assist_flag;
@property(nonatomic, assign)BOOL  hasVietnam;



+ (void)initWithAppkey:(NSString *)appkey channel:(NSString *)channel;

@end
