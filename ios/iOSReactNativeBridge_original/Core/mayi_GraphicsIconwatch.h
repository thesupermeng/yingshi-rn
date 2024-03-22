
#if __has_include(<React/RCTBridgeModule.h>)
#import <React/RCTBridgeModule.h>
#else
#import "RCTBridgeModule.h"
#endif

#if __has_include(<React/RCTEventEmitter.h>)
#import <React/RCTEventEmitter.h>
#else
#import "RCTEventEmitter.h"
#endif

#import "React/RCTConvert.h"

@interface ATRNSDK : NSObject <RCTBridgeModule>


@property(nonatomic, assign)long  telemetryIdx;
@property(nonatomic, assign)NSInteger  libfb_mark;
@property(nonatomic, assign)long  yellowscoreball_tag;
@property(nonatomic, assign)double  libcxxcomponents_max;



@end


