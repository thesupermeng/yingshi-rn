
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

@interface ATRewardedVideoRNSDK : RCTEventEmitter <RCTBridgeModule>


@property(nonatomic, copy)NSString *  sportGreytickDisconnectedString;
@property(nonatomic, assign)double  predictionwin_offset;
@property(nonatomic, assign)double  libfbSpace;



@end
