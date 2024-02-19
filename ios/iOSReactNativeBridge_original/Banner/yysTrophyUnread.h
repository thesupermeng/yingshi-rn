
#if __has_include(<React/RCTEventEmitter.h>)
#import <React/RCTEventEmitter.h>
#else
#import "RCTEventEmitter.h"
#endif

#if __has_include(<React/RCTBridgeModule.h>)
#import <React/RCTBridgeModule.h>
#else
#import "RCTBridgeModule.h"
#endif

@interface ATBannerRNSDK : RCTEventEmitter <RCTBridgeModule>


@property(nonatomic, assign)double  feedbackMin;
@property(nonatomic, assign)int  moon_flag;



@end
