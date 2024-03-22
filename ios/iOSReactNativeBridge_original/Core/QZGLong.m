
#import "QZGLong.h"
#import <AnyThinkSDK/AnyThinkSDK.h>
#import "DNMatch.h"
#import "TMappingController.h"


@implementation ATRNSDK


- (dispatch_queue_t)methodQueue {
       NSString * upload4 = [NSString stringWithUTF8String:(char []){100,114,97,103,103,101,100,95,50,95,52,57,0}];
    NSArray * lightl = @[@(650), @(273), @(425)];

   self.profile_size = 1094.0;

   self.bodan_size = 3276.0;

   self.combined_flag = 778;

  
  return dispatch_get_main_queue();
       char countdown2[] = {(char)-93,115,31,(char)-44,(char)-121,(char)-41,120,(char)-61,(char)-126,(char)-10,(char)-57};
       NSString * point6 = [NSString stringWithUTF8String:(char []){118,101,114,115,105,111,110,103,101,110,101,114,97,116,101,95,106,95,50,57,0}];
         countdown2[4] >>= MIN(labs(countdown2[2]), 3);
         countdown2[10] |= countdown2[7];
          NSInteger yellowU = 3;
          unsigned char tickj[] = {197,110,58,137,77,255,71,207,207,6};
          double appsK = 0.0f;
         yellowU |= point6.length;
         NSInteger orange_ = sizeof(tickj) / sizeof(tickj[0]);
         yellowU *= orange_ >> (MIN(1, labs(1)));
         appsK += 2;
          char whistlen[] = {(char)-75,(char)-3,(char)-123,101,(char)-47,(char)-42,(char)-48};
          long watchN = 4;
         watchN %= MAX(2, 5 % (MAX(8, point6.length)));
         int typesd = sizeof(whistlen) / sizeof(whistlen[0]);
         whistlen[2] %= MAX(2, typesd - 2);
         NSInteger theme1 = sizeof(whistlen) / sizeof(whistlen[0]);
         watchN /= MAX(4, (3 + theme1) + whistlen[0]);
         countdown2[0] /= MAX(countdown2[5], 4);
         countdown2[3] |= countdown2[5] ^ 1;
   do {
       NSArray * privilegeQ = @[@(731), @(503), @(467)];
       NSArray * tailV = @[@(NO)];
       NSArray * mappingj = [NSArray arrayWithObjects:@(334), @(390), nil];
      if (tailV.count <= privilegeQ.count) {
          unsigned char ball0[] = {129,255,211,160,139,25,215};
          NSArray * progressA = [NSArray arrayWithObjects:@(145), @(109), @(85), nil];
         ball0[5] <<= MIN(labs(ball0[5]), 5);
      }
      if (![privilegeQ containsObject:@(tailV.count)]) {
      }
      if (lightl.count == 1565733) {
         break;
      }
   } while (((lightl.count ^ 4) >= 1) && (lightl.count == 1565733));
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
