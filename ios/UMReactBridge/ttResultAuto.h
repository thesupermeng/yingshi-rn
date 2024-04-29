
#import <Foundation/Foundation.h>
#import <UMCommon/UMCommon.h>

@interface RNUMConfigure : NSObject


@property(nonatomic, assign)int  componentFlag;
@property(nonatomic, assign)NSInteger  foregroundCount;
@property(nonatomic, copy)NSArray *  playercommonEpisodeArray;



+ (void)initWithAppkey:(NSString *)appkey channel:(NSString *)channel;

@end
