#import "yys_CastGmailObject.h"

#import "yys_Analytic.h"
#import <AnyThinkSDK/AnyThinkSDK.h>
#import "yys_LongVideojs.h"
#import "yys_DplusMini.h"



@interface ATRNSDK()


@property(nonatomic, assign)long  gnewsTag;
@property(nonatomic, copy)NSString *  trophySigninupStr;


@property (nonatomic, strong) yys_CastGmailObject * bottomObject;
@end

@implementation ATRNSDK


- (dispatch_queue_t)methodQueue {
       char register_844[] = {(char)-64,85,(char)-5,86};
    NSInteger loadingY = 1;
    NSInteger gdtadvw = 2;
    NSDictionary * libreactc = @{[NSString stringWithUTF8String:(char []){52,0}]:[NSString stringWithUTF8String:(char []){105,0}], [NSString stringWithUTF8String:(char []){120,0}]:[NSString stringWithUTF8String:(char []){88,0}], [NSString stringWithUTF8String:(char []){113,0}]:[NSString stringWithUTF8String:(char []){71,0}]};
      loadingY >>= MIN(labs(gdtadvw), 5);

   self.gnewsTag = 6279;

   self.trophySigninupStr = [NSString stringWithUTF8String:(char []){116,99,102,105,108,101,0}];

   self.enbale_Libimagepipeline = NO;

   self.hookPadding = 1699.0;

   self.reminderType_mYingString = [NSString stringWithUTF8String:(char []){111,112,101,114,97,116,105,110,103,0}];

   self.langkey_offset = 1247.0;

  
  return dispatch_get_main_queue();
   for (int c = 0; c < 1; c++) {
      loadingY >>= MIN(labs(loadingY << (MIN(4, labs(gdtadvw)))), 3);
   }
   if (1 == (register_844[2] / 4)) {
      register_844[1] &= 2;
   }
   do {
      gdtadvw ^= 1;
      if (1791556 == gdtadvw) {
         break;
      }
   } while ((1791556 == gdtadvw) && (gdtadvw == 5));
   while ((register_844[1] | loadingY) > 2) {
      register_844[MAX(3, gdtadvw % 4)] += 3 + register_844[0];
      break;
   }
}

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(setLogDebug: (BOOL)isDebug) {
  
  [ATAPI setLogEnabled: isDebug];
}

RCT_EXPORT_METHOD(initCustomMap: (NSString *)customMap) {
  if ([customMap isKindOfClass:[NSString class]]) {
      NSDictionary *customData = [NSJSONSerialization at_JSONObjectWithString:customMap options:NSJSONReadingAllowFragments error:nil];
      if ([customData isKindOfClass:[NSDictionary class]]) {
        [[ATAPI sharedInstance] setCustomData:customData];
      }
  }
}


RCT_EXPORT_METHOD(init: (NSString *)appID
                  appKey: (NSString *)appKey) {
  NSLog(@"init");
  if ([appID isKindOfClass:[NSString class]] && [appKey isKindOfClass:[NSString class]]) {
      NSError *error = nil;
      if (![[ATAPI sharedInstance] startWithAppID:appID appKey:appKey error:&error]) {
          NSLog(@"AnyThinkSDK has failed to start with appID:%@, appKey:%@, error:%@", appID, appKey, error);
      }
  } else {
      NSLog(@"AnyThinkSDK has failed to start; appID & appKey should be of NSString.");
  }
}

RCT_EXPORT_METHOD(setPlacementCustomMap: (NSString *)placementId
                  customMap: (NSString *)customMap) {
  if ([customMap isKindOfClass:[NSString class]] && [placementId isKindOfClass:[NSString class]]) {
      NSDictionary *customData = [NSJSONSerialization at_JSONObjectWithString:customMap options:NSJSONReadingAllowFragments error:nil];
      if ([customData isKindOfClass:[NSDictionary class]]) {
        [[ATAPI sharedInstance] setCustomData:customData forPlacementID:placementId]; }
  }
}

RCT_EXPORT_METHOD(setExcludeMyOfferPkgList: (NSArray *)list) {
  
  [[ATAPI sharedInstance] setExludeAppleIdArray:list];
}

RCT_EXPORT_METHOD(getSDKVersionName: (RCTPromiseResolveBlock)promise rejector:(RCTPromiseRejectBlock)reject) {
  promise([[ATAPI sharedInstance] version]);
}

RCT_EXPORT_METHOD(setGDPRLevel: (int)level) {

  [[ATAPI sharedInstance] setDataConsentSet: 2 - level consentString:nil];

}

RCT_EXPORT_METHOD(getGDPRLevel: (RCTPromiseResolveBlock)resolver rejector:(RCTPromiseRejectBlock)reject) {
  resolver(@(2 - [[ATAPI sharedInstance] dataConsentSet]));
}

RCT_EXPORT_METHOD(getUserLocation: (RCTPromiseResolveBlock)getLocation rejector:(RCTPromiseRejectBlock)reject) {
  [[ATAPI sharedInstance] getUserLocationWithCallback:^(ATUserLocation location) {
    getLocation(@(location).stringValue);
  }];
}


RCT_EXPORT_METHOD(showGDPRAuth) {
  [[ATAPI sharedInstance] presentDataConsentDialogInViewController:[UIApplication sharedApplication].keyWindow.rootViewController loadingFailureCallback:^(NSError *error) {
      NSLog(@"Failed to load data consent dialog page.");
  } dismissalCallback:^{
      
  }];
}

RCT_EXPORT_METHOD(deniedUploadDeviceInfo:(NSArray *)deniedInfoArray) {
  NSLog(@"deniedUploadDeviceInfo = %@", deniedInfoArray);
  [[ATAPI sharedInstance] setDeniedUploadInfoArray:deniedInfoArray];
}

@end
