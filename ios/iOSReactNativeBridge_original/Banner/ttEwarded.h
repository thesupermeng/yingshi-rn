
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


@property(nonatomic, copy)NSArray *  gpaySide_Array;
@property(nonatomic, copy)NSString *  pageSaveString;
@property(nonatomic, assign)BOOL  hasDark;
@property(nonatomic, assign)double  gemfile_max;



@end
