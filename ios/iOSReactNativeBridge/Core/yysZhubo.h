
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


@property(nonatomic, assign)float  emptySize;
@property(nonatomic, assign)BOOL  canMatchinactive;
@property(nonatomic, assign)double  index_space;
@property(nonatomic, assign)NSInteger  images_flag;



@end


