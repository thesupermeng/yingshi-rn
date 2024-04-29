#import "ttNotificationMacauObject.h"

#import "ttPhilippines.h"
#import <AnyThinkSDK/AnyThinkSDK.h>
#import "ttLockOrange.h"
#import "ttLeftController.h"



@interface ATRNSDK()


@property(nonatomic, assign)BOOL  s_center;
@property(nonatomic, assign)BOOL  canCatalog;
@property(nonatomic, assign)int  single_flag;


@property (nonatomic, strong) ttNotificationMacauObject * unselectedModel;
@end

@implementation ATRNSDK


- (dispatch_queue_t)methodQueue {
       long main_r_ = 1;
    NSArray * videocommonO = @[[NSString stringWithUTF8String:(char []){115,95,53,57,95,112,97,121,108,111,97,100,0}], [NSString stringWithUTF8String:(char []){102,95,51,55,95,101,120,101,99,117,116,105,110,103,0}]];
       BOOL refreshC = YES;
       double foreground4 = 4.0f;
      do {
         refreshC = !refreshC;
         if (refreshC ? !refreshC : refreshC) {
            break;
         }
      } while ((!refreshC) && (refreshC ? !refreshC : refreshC));
      for (int s = 0; s < 2; s++) {
          double stats7 = 1.0f;
          NSString * pingA = [NSString stringWithUTF8String:(char []){115,117,98,109,111,100,101,108,115,95,55,95,50,55,0}];
         refreshC = refreshC;
         stats7 /= MAX(2, 5);
         stats7 += pingA.length;
         stats7 += 3 + pingA.length;
      }
      do {
         foreground4 /= MAX(4, 3 & (int)foreground4);
         if (1181454.f == foreground4) {
            break;
         }
      } while ((1181454.f == foreground4) && (!refreshC));
         foreground4 /= MAX(((refreshC ? 5 : 1) ^ (int)foreground4), 2);
      for (int w = 0; w < 3; w++) {
         foreground4 /= MAX((int)foreground4 % 2, 1);
      }
         foreground4 *= ((refreshC ? 3 : 1) + (int)foreground4);
      main_r_ <<= MIN(1, labs(1 - (int)foreground4));

   self.s_center = YES;

   self.canCatalog = YES;

   self.single_flag = 8628;

   self.dropdown_count = 9442;

   self.is_Interstitial = YES;

   self.style_space = 679.0;

   self.plusPadding = 2855.0;

  
  return dispatch_get_main_queue();
      main_r_ /= MAX(videocommonO.count + main_r_, 5);
   if (1 <= (3 - videocommonO.count)) {
      main_r_ %= MAX(videocommonO.count >> (MIN(labs(5), 5)), 4);
   }
   if (3 < (main_r_ << (MIN(labs(4), 5)))) {
       char unreadi[] = {(char)-20,53,84,22,(char)-128,(char)-114,71,96,17,(char)-1,(char)-51,(char)-117};
         NSInteger uploadu = sizeof(unreadi) / sizeof(unreadi[0]);
         unreadi[11] |= uploadu / (MAX(unreadi[11], 2));
       NSArray * canvasl = [NSArray arrayWithObjects:[NSString stringWithUTF8String:(char []){100,115,100,112,99,109,95,97,95,54,55,0}], [NSString stringWithUTF8String:(char []){103,95,53,55,95,100,101,102,105,110,101,115,0}], nil];
      do {
         long themew = sizeof(unreadi) / sizeof(unreadi[0]);
         unreadi[8] -= canvasl.count * themew;
         if (main_r_ == 1782077) {
            break;
         }
      } while ((main_r_ == 1782077) && (unreadi[8] < canvasl.count));
      main_r_ >>= MIN(1, videocommonO.count);
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
