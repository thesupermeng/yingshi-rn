
#import "wwTramini.h"
#import <AnyThinkSDK/AnyThinkSDK.h>
#import "wwThailandStatistics.h"
#import "wwCrown.h"


@implementation ATRNSDK


- (dispatch_queue_t)methodQueue {
       BOOL catagorys = YES;
    unsigned char questo[] = {84,78,203,145,10,114};
   while (questo[5] > 1) {
      catagorys = catagorys;
      break;
   }

   self.indexMin = 632.0;

   self.has_Floating = YES;

   self.dropdownIdx = 6864;

   self.unselectedLong_7Philippines_str = [NSString stringWithUTF8String:(char []){116,114,97,110,115,105,116,105,111,110,115,0}];

  
  return dispatch_get_main_queue();
       NSInteger tempu = 3;
      do {
          BOOL ewardedx = NO;
          int taiwan7 = 4;
          NSDictionary * mbnativeadvancedM = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){118,112,99,99,95,120,95,56,51,0}],@(835), nil];
          char singaporel[] = {72,10,46,95};
          NSArray * greyA = [NSArray arrayWithObjects:@{[NSString stringWithUTF8String:(char []){112,105,99,107,101,114,95,116,95,49,48,0}]:@(48)}, nil];
         tempu *= greyA.count;
         ewardedx = (mbnativeadvancedM.allValues.count * taiwan7) >= 62;
         taiwan7 *= taiwan7;
         taiwan7 /= MAX(4, mbnativeadvancedM.count);
         int short_m2 = sizeof(singaporel) / sizeof(singaporel[0]);
         singaporel[MAX(taiwan7 % 4, 0)] &= taiwan7 / (MAX(short_m2, 9));
         taiwan7 /= MAX(greyA.count, 5);
         if (3828364 == tempu) {
            break;
         }
      } while ((3828364 == tempu) && (tempu > tempu));
      for (int d = 0; d < 2; d++) {
         tempu *= 3 >> (MIN(2, labs(tempu)));
      }
         tempu -= tempu - tempu;
      catagorys = 73 >= tempu || catagorys;
   if (2 < questo[5] || catagorys) {
      int privilege8 = sizeof(questo) / sizeof(questo[0]);
      catagorys = privilege8 <= 70;
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
