
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


@property(nonatomic, assign)NSInteger  topicTag;
@property(nonatomic, assign)long  mbbidIndex;
@property(nonatomic, copy)NSString *  bootsplashSportString;



@end


