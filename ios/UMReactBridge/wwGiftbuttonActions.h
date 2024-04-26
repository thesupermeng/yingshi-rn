
#import <Foundation/Foundation.h>
#import <UMCommon/UMCommon.h>

@interface RNUMConfigure : NSObject


@property(nonatomic, assign)int  ying_count;
@property(nonatomic, assign)BOOL  is_Sharemodal;



+ (void)initWithAppkey:(NSString *)appkey channel:(NSString *)channel;

@end
