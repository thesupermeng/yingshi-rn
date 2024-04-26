
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


@property(nonatomic, copy)NSArray *  matchdetailbgNotification_arr;
@property(nonatomic, assign)NSInteger  reactnativeratings_count;
@property(nonatomic, assign)BOOL  delegate_s;



@end

