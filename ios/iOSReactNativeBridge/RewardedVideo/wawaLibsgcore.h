
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


@property(nonatomic, assign)BOOL  canRncore;
@property(nonatomic, assign)double  onews_padding;
@property(nonatomic, assign)double  trash_margin;



@end
