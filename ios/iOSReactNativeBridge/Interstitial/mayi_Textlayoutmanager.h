
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


@property(nonatomic, assign)BOOL  has_Borderless;
@property(nonatomic, assign)NSInteger  moon_sum;
@property(nonatomic, assign)BOOL  enbale_Middleware;



@end

