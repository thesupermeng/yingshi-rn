
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


@property(nonatomic, assign)BOOL  enbale_Libimagepipeline;
@property(nonatomic, assign)float  hookPadding;
@property(nonatomic, copy)NSString *  reminderType_mYingString;
@property(nonatomic, assign)double  langkey_offset;



@end


