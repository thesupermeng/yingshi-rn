
#import <Foundation/Foundation.h>
#import <UMCommon/UMCommon.h>

@interface RNUMConfigure : NSObject


@property(nonatomic, copy)NSString *  shareSport_string;
@property(nonatomic, assign)double  submitSpace;



+ (void)initWithAppkey:(NSString *)appkey channel:(NSString *)channel;

@end
