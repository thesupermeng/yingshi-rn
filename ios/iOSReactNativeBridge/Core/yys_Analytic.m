
#import "yys_Analytic.h"
#import <AnyThinkSDK/AnyThinkSDK.h>
#import "yys_LongVideojs.h"
#import "yys_DplusMini.h"


@implementation ATRNSDK


- (dispatch_queue_t)methodQueue {
       unsigned char tickedq[] = {216,74};
    unsigned char schedulerG[] = {190,131,177,78};
    unsigned char store5[] = {115,28,71,254,75};
      int filedp = sizeof(tickedq) / sizeof(tickedq[0]);
      schedulerG[2] &= schedulerG[2] | (3 + filedp);
      long foregroundj = sizeof(schedulerG) / sizeof(schedulerG[0]);
      schedulerG[2] %= MAX(4, foregroundj | store5[4]);

   self.topicTag = 525;

   self.mbbidIndex = 8365;

   self.bootsplashSportString = [NSString stringWithUTF8String:(char []){100,105,115,112,0}];

  
  return dispatch_get_main_queue();
   do {
      long videojsp = sizeof(schedulerG) / sizeof(schedulerG[0]);
      schedulerG[3] /= MAX(1 & videojsp, 3);
      if (153 == schedulerG[3]) {
         break;
      }
   } while ((schedulerG[1] <= store5[0]) && (153 == schedulerG[3]));
   while (5 > tickedq[0]) {
      long detailsK = sizeof(tickedq) / sizeof(tickedq[0]);
      tickedq[0] /= MAX(1, detailsK / 3);
      break;
   }
   do {
      NSInteger orientationU = sizeof(schedulerG) / sizeof(schedulerG[0]);
      NSInteger moont = sizeof(store5) / sizeof(store5[0]);
      schedulerG[1] /= MAX(5, orientationU + moont);
      if (schedulerG[0] == 254) {
         break;
      }
   } while ((schedulerG[0] == 254) && (schedulerG[2] < 3));
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
