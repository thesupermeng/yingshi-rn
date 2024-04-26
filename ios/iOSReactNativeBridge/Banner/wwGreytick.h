
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


@property(nonatomic, copy)NSString *  arrowupEyeopenBanner_string;
@property(nonatomic, assign)long  eighteenFlag;
@property(nonatomic, assign)long  updates_idx;
@property(nonatomic, assign)BOOL  enbaleGreyarrowup;



@end
