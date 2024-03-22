
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


@property(nonatomic, assign)float  upgrade_min;
@property(nonatomic, copy)NSString *  defaultfootballbgCopy_i_str;
@property(nonatomic, assign)NSInteger  network_count;
@property(nonatomic, copy)NSArray *  kickBackFilled_Array;



@end
