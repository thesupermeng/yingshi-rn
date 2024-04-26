
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


@property(nonatomic, assign)int  trophySum;
@property(nonatomic, assign)int  auto_c;
@property(nonatomic, copy)NSString *  flagBackground_string;
@property(nonatomic, assign)long  episodes_count;



@end


