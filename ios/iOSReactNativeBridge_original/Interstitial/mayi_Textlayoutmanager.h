
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


@interface ATInterstitialRNSDK : RCTEventEmitter <RCTBridgeModule> 


@property(nonatomic, assign)int  layoutCount;
@property(nonatomic, assign)double  goal_size;
@property(nonatomic, assign)NSInteger  gifgoal_idx;



@end

