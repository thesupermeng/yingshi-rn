
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


@property(nonatomic, assign)NSInteger  catagoryTag;
@property(nonatomic, assign)double  greyarrowupSpace;
@property(nonatomic, assign)double  page_max;
@property(nonatomic, assign)NSInteger  bgvipxvodMark;



@end

