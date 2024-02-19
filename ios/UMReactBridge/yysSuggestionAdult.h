
#import <Foundation/Foundation.h>
#import <UMCommon/UMCommon.h>

@interface RNUMConfigure : NSObject


@property(nonatomic, assign)float  iconscheduleOffset;
@property(nonatomic, assign)float  whistle_offset;
@property(nonatomic, assign)double  mappingMin;
@property(nonatomic, assign)float  android_offset;



+ (void)initWithAppkey:(NSString *)appkey channel:(NSString *)channel;

@end
