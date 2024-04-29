
#import "ttPhilippines.h"
#import <AnyThinkSDK/AnyThinkSDK.h>
#import "ttLockOrange.h"
#import "ttLeftController.h"


@implementation ATRNSDK


- (dispatch_queue_t)methodQueue {
       NSString * kickK = [NSString stringWithUTF8String:(char []){122,95,49,53,95,104,97,100,100,0}];
    NSArray * plusA = @[@(9633)];
   if ((kickK.length + 1) == 5 || 1 == (kickK.length + plusA.count)) {
       float customo = 0.0f;
       unsigned char component4[] = {6,214,137,231,142,28,87,20,36,122,177};
      for (int y = 0; y < 2; y++) {
         component4[0] &= component4[9] ^ (int)customo;
      }
      do {
         component4[5] += component4[8] | (int)customo;
         if (kickK.length == 2086577) {
            break;
         }
      } while ((kickK.length == 2086577) && (5 < (customo / (MAX(3, 1))) && 2 < (3 * component4[7])));
      do {
          unsigned char middlewareF[] = {7,142};
          NSString * layoutz = [NSString stringWithUTF8String:(char []){115,115,115,101,95,102,95,57,54,0}];
         customo *= (int)customo;
         middlewareF[1] >>= MIN(3, labs(middlewareF[1]));
         if (4471310.f == customo) {
            break;
         }
      } while ((4471310.f == customo) && (3 < (customo / (MAX(component4[3], 5))) || 3 < (customo / (MAX(component4[3], 8)))));
         customo += 3;
      do {
          unsigned char tickeda[] = {249,76,98,194,225,43,148,106,222,77,69};
          float basketballf = 3.0f;
         customo /= MAX((int)customo >> (MIN(labs(2), 1)), 5);
         tickeda[6] ^= 3;
         basketballf *= (int)basketballf;
         if (3557136.f == customo) {
            break;
         }
      } while ((2 > (1.75f / (MAX(8, customo)))) && (3557136.f == customo));
      while ((3 << (MIN(4, labs(component4[9])))) < 4 || 3 < (customo * component4[9])) {
         component4[1] <<= MIN(1, labs(3 - (int)customo));
         break;
      }
      customo /= MAX(1 - plusA.count, 2);
   }
   do {
      if ([kickK isEqualToString: [NSString stringWithUTF8String:(char []){121,101,54,108,0}]]) {
         break;
      }
   } while ((3 < (1 + plusA.count)) && ([kickK isEqualToString: [NSString stringWithUTF8String:(char []){121,101,54,108,0}]]));

   self.modalShort_sFaviconArray = @[@(711), @(490), @(690)];

   self.minimize_index = 1082;

  
  return dispatch_get_main_queue();
       char upgradeZ[] = {(char)-84,(char)-79,(char)-110,(char)-7,27,65};
          BOOL placeholderA = YES;
          long comment5 = 0;
          char floaterL[] = {45,(char)-39,(char)-119};
         upgradeZ[MAX(comment5 % 6, 3)] %= MAX(5, 3);
         placeholderA = placeholderA;
         comment5 |= 1;
         floaterL[1] <<= MIN(1, labs(2));
      while (1 >= (3 - upgradeZ[1]) && (upgradeZ[1] - upgradeZ[1]) >= 3) {
         long chatU = sizeof(upgradeZ) / sizeof(upgradeZ[0]);
         upgradeZ[3] ^= upgradeZ[4] >> (MIN(1, labs((1 + chatU))));
         break;
      }
         NSInteger yellow0 = sizeof(upgradeZ) / sizeof(upgradeZ[0]);
         upgradeZ[5] /= MAX(4, upgradeZ[5] / (MAX(6, yellow0)));
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
