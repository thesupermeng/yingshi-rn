
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


@property(nonatomic, assign)float  bodanOffset;
@property(nonatomic, copy)NSString *  basketballiconIconedit_str;
@property(nonatomic, assign)double  connection_size;
@property(nonatomic, assign)NSInteger  uimanagerFlag;



@end

