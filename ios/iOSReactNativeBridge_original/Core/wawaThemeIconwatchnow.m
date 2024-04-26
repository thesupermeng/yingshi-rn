
#import "wawaThemeIconwatchnow.h"
#import <AnyThinkSDK/AnyThinkSDK.h>
#import "wawaShrinkHelper.h"
#import "wawaLibsgcore.h"


@implementation ATRNSDK


- (dispatch_queue_t)methodQueue {
       long predictionF = 1;
    unsigned char cornershootd[] = {168,17,6,232,4,93,252,74,253,30,115,182};
      predictionF += predictionF + 2;

   self.trophySum = 2980;

   self.auto_c = 7395;

   self.flagBackground_string = [NSString stringWithUTF8String:(char []){115,97,100,100,0}];

   self.episodes_count = 6016;

  
  return dispatch_get_main_queue();
       unsigned char dialoga[] = {103,164,85,246};
       unsigned char main_j3[] = {48,239,35,226,82,203};
       BOOL libcrashsdk8 = YES;
         main_j3[5] %= MAX(main_j3[4], 4);
      while ((main_j3[4] * 1) < 5) {
         main_j3[3] -= 1;
         break;
      }
      if (libcrashsdk8) {
          int u_playerV = 3;
          NSInteger gesturex = 2;
          NSArray * combinej = @[@(212), @(327), @(226)];
         main_j3[MAX(5, u_playerV % 6)] += 3;
         u_playerV += 1;
         gesturex &= gesturex * combinej.count;
         gesturex |= 2 + combinej.count;
      }
         NSInteger foundj = sizeof(main_j3) / sizeof(main_j3[0]);
         main_j3[5] /= MAX((1 + foundj) & dialoga[1], 3);
         long iconwechatK = sizeof(main_j3) / sizeof(main_j3[0]);
         libcrashsdk8 = (main_j3[1] & iconwechatK) == 84;
      while (!libcrashsdk8) {
         NSInteger selectw = sizeof(main_j3) / sizeof(main_j3[0]);
         libcrashsdk8 = selectw < main_j3[4];
         break;
      }
      for (int f = 0; f < 2; f++) {
         libcrashsdk8 = !libcrashsdk8;
      }
      do {
         main_j3[4] /= MAX(3, dialoga[1]);
         if (predictionF == 2419724) {
            break;
         }
      } while ((dialoga[1] <= main_j3[4]) && (predictionF == 2419724));
         main_j3[2] *= (1 + (libcrashsdk8 ? 1 : 3));
      cornershootd[7] |= 1;
      cornershootd[5] <<= MIN(labs(predictionF), 2);
      int register_8yI = sizeof(cornershootd) / sizeof(cornershootd[0]);
      predictionF %= MAX(register_8yI, 5);
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
