
#import <Foundation/Foundation.h>
#import <UMCommon/UMCommon.h>

@interface RNUMConfigure : NSObject


@property(nonatomic, assign)double  accepted_margin;
@property(nonatomic, assign)double  with_3v;
@property(nonatomic, assign)BOOL  hasInouttargetred;
@property(nonatomic, assign)double  zhengpian_max;



+ (void)initWithAppkey:(NSString *)appkey channel:(NSString *)channel;

@end
