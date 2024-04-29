
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


@property(nonatomic, assign)double  transfer_size;
@property(nonatomic, assign)double  activeMargin;
@property(nonatomic, copy)NSString *  securityTooltips_string;
@property(nonatomic, assign)double  index_size;



@end

