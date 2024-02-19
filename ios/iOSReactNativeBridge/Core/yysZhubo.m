
#import "yysZhubo.h"
#import <AnyThinkSDK/AnyThinkSDK.h>
#import "yysLineTeam.h"
#import "yysLibavfilter.h"


@implementation ATRNSDK


- (dispatch_queue_t)methodQueue {
       char gradlep[] = {93,14,94};
    float iconfeedbacks = 3.0f;
      iconfeedbacks *= 2;

   self.emptySize = 8007.0;

   self.canMatchinactive = YES;

   self.index_space = 9604.0;

   self.images_flag = 8948;

  
  return dispatch_get_main_queue();
   if ((iconfeedbacks / (MAX(1, 4))) <= 1 && 1 <= (1 * gradlep[0])) {
      gradlep[0] *= 3 & gradlep[1];
   }
      gradlep[2] += 3;
      iconfeedbacks /= MAX(3 << (MIN(5, labs((int)iconfeedbacks))), 2);
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
