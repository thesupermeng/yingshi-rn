
#import <Foundation/Foundation.h>

extern NSString *const atPlacementIdKey;
extern NSString *const atExtraKey;
extern NSString *const atErrMsgKey;

@interface NSDictionary (String)

- (NSString *)at_jsonString;

- (NSString *)at_AdInfojsonString;



-(NSDictionary *)setupPageAnchorFail:(long)androidLibhermes bottomSide:(NSString *)bottomSide;



@end

