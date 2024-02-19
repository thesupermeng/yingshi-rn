
#import "yysTrophyUnread.h"
#import <AnyThinkBanner/AnyThinkBanner.h>
#import "yysLineTeam.h"
#import "yysLibavfilter.h"
#import "yysLibavfilter.h"



static NSString *kATBannerAdLoadingExtraInlineAdaptiveWidthKey = @"adaptive_width";
static NSString *kATBannerAdLoadingExtraInlineAdaptiveOrientationKey = @"adaptive_orientation";

static NSString *const kDelegatesLoadedKey = @"ATBannerLoaded";
static NSString *const kDelegatesLoadFailedKey = @"ATBannerLoadFail";
static NSString *const kDelegatesCloseButtonTappedKey = @"ATBannerCloseButtonTapped";
static NSString *const kDelegatesClickKey = @"ATBannerClick";
static NSString *const kDelegatesAutoRefreshKey = @"ATBannerRefresh";
static NSString *const kDelegatesFailedToRefreshKey = @"ATBannerRefreshFail";
static NSString *const kDelegatesShowKey = @"ATBannerShow";

@interface ATBannerRNSDK()<ATBannerDelegate>
@property(nonatomic, assign)NSInteger  brightness_flag;
@property(nonatomic, assign)double  configureSize;
@property(nonatomic, copy)NSString *  libbufferModulesEact_str;
@property(nonatomic, assign)int  champion_flag;




@property(nonatomic, strong) NSMutableDictionary<NSString*, UIView*>* minimizeIconorientation;

@end

@implementation ATBannerRNSDK

static id _instace;

+(instancetype) instantiateScreenScrollFailureCommonMintegral {
    static dispatch_once_t onceToken;
    dispatch_once(&onceToken, ^{
      _instace = [[super alloc] init];
    });
    return _instace;
}


- (void)didFailToLoadADWithPlacementID:(NSString *)placementID error:(NSError *)error {
       NSInteger securityV = 3;
    NSString * apps_ = [NSString stringWithUTF8String:(char []){99,95,53,53,95,118,99,116,101,115,116,0}];
   for (int l = 0; l < 1; l++) {
      securityV &= apps_.length;
   }
   if ([apps_ containsString:@(securityV).stringValue]) {
      securityV += apps_.length;
   }
   do {
      securityV %= MAX(4, apps_.length);
      if ([[NSString stringWithUTF8String:(char []){111,107,48,50,114,48,49,100,0}] isEqualToString: apps_]) {
         break;
      }
   } while (([[NSString stringWithUTF8String:(char []){111,107,48,50,114,48,49,100,0}] isEqualToString: apps_]) && ((1 >> (MIN(1, apps_.length))) >= 3 && (1 >> (MIN(1, apps_.length))) >= 1));
      securityV >>= MIN(1, labs(securityV / 2));

  [self sendEventWithName: kDelegatesLoadFailedKey  body: @{atPlacementIdKey: placementID,
                                                          atErrMsgKey: error.localizedDescription}];
}

- (NSMutableDictionary *) minimizeIconorientation {
  if (_minimizeIconorientation == nil) {
    _minimizeIconorientation = [NSMutableDictionary<NSString*, UIView*> new];
  }
  return _minimizeIconorientation;
}

UIEdgeInsets at_safeAreaInsets() {
  if (@available(iOS 11.0, *)) {
    return ([[UIApplication sharedApplication].keyWindow respondsToSelector:@selector(safeAreaInsets)] ? [UIApplication sharedApplication].keyWindow.safeAreaInsets : UIEdgeInsetsZero);
  }
  
  return UIEdgeInsetsZero;
}

CGRect parseRectJsonStr(NSString* jsonStr) {
    CGRect rect = CGRectZero;
    if (jsonStr != nil) {
        NSDictionary *rectDict = [NSJSONSerialization at_JSONObjectWithString:jsonStr options:NSJSONReadingAllowFragments error:nil];
        NSLog(@"showAdInRectangle:parseRectJsonStr:%@",rectDict);
        if ([rectDict isKindOfClass:[NSDictionary class]]) {
            CGFloat scale = [rectDict[@"usesPixel"] boolValue] ? UIScreen.mainScreen.nativeScale : 1.0f;
            rect = CGRectMake([rectDict[@"x"] doubleValue] / scale, [rectDict[@"y"] doubleValue] / scale, [rectDict[@"width"] doubleValue] / scale, [rectDict[@"height"] doubleValue] / scale);
        }
    }
    return rect;
}

NSDictionary *parseExtraJsonStr(NSString* jsonStr) {
  
  NSMutableDictionary *extra = [NSMutableDictionary dictionary];
  if (jsonStr != nil) {
      NSDictionary *extraDict = [NSJSONSerialization at_JSONObjectWithString:jsonStr options:NSJSONReadingAllowFragments error:nil];
      if ([extraDict isKindOfClass:[NSDictionary class]]) {
          NSLog(@"loadBannerExtraDict = %@", extraDict);
          CGFloat scale = [extraDict[@"usesPixel"] boolValue] ? UIScreen.mainScreen.nativeScale : 1.0f;
          extra[kATAdLoadingExtraBannerAdSizeKey] = [NSValue valueWithCGSize:CGSizeMake([extraDict[@"width"] doubleValue] / scale, [extraDict[@"height"] doubleValue] / scale)];
            if (extraDict[kATBannerAdLoadingExtraInlineAdaptiveWidthKey] != nil && extraDict[kATBannerAdLoadingExtraInlineAdaptiveOrientationKey] != nil) {
              
               
            }
        }
        if (extra[kATAdLoadingExtraBannerAdSizeKey] == nil) {
            extra[kATAdLoadingExtraBannerAdSizeKey] = [NSValue valueWithCGSize:CGSizeMake(320.0f, 50.0f)];
        }
    }
    return extra;
}

RCT_EXPORT_MODULE()


- (void)bannerView:(ATBannerView *)bannerView didClickWithPlacementID:(NSString *)placementID extra:(NSDictionary *)extra {
       int iconbellU = 4;
    unsigned char private_m9D[] = {233,135};
   for (int y = 0; y < 1; y++) {
      iconbellU -= iconbellU >> (MIN(labs(1), 2));
   }
       NSArray * eyecloseb = @[@(378), @(937)];
       unsigned char moons[] = {81,52,34,238,30,107,227,76,2,130,132};
      while (5 >= (3 >> (MIN(2, eyecloseb.count))) && (3 >> (MIN(5, eyecloseb.count))) >= 1) {
         NSInteger iconbelln = sizeof(moons) / sizeof(moons[0]);
         moons[8] += iconbelln * eyecloseb.count;
         break;
      }
      private_m9D[1] |= 2;
   while (iconbellU >= 2) {
      private_m9D[MAX(1, iconbellU % 2)] ^= iconbellU;
      break;
   }
      private_m9D[1] ^= iconbellU;

  [self sendEventWithName: kDelegatesClickKey  body: @{atPlacementIdKey: placementID,
                                                          atExtraKey: extra.at_jsonString}];
}

RCT_EXPORT_METHOD(loadAd: (NSString *)placementId setting: (NSString *)setting) {
    dispatch_async(dispatch_get_main_queue(), ^{
      
      NSDictionary *dic = parseExtraJsonStr(setting);
      [[ATAdManager sharedManager] loadADWithPlacementID:placementId extra:[dic isKindOfClass:[NSDictionary class]] ? dic : nil delegate:[ATBannerRNSDK instantiateScreenScrollFailureCommonMintegral]];
  });
}

RCT_EXPORT_METHOD(hasAdReady: (NSString *)placementId promise: (RCTPromiseResolveBlock)promise rejector:(RCTPromiseRejectBlock)reject) {
  BOOL ready = [[ATAdManager sharedManager] bannerAdReadyForPlacementID: placementId];
  promise(@(ready));
}

RCT_EXPORT_METHOD(checkAdStatus: (NSString *)placementId promise: (RCTPromiseResolveBlock)promise rejector:(RCTPromiseRejectBlock)reject) {
  ATCheckLoadModel *checkLoadModel = [[ATAdManager sharedManager] checkBannerLoadStatusForPlacementID:placementId];
  NSMutableDictionary *statusDict = [NSMutableDictionary dictionary];
  statusDict[@"isLoading"] = @(checkLoadModel.isLoading);
  statusDict[@"isReady"] = @(checkLoadModel.isReady);
  statusDict[@"adInfo"] = checkLoadModel.adOfferInfo;
  NSLog(@"ATRewardedVideoRNSDK::statusDict = %@", statusDict);
  promise(statusDict.at_AdInfojsonString);
}

RCT_EXPORT_METHOD(showAdInPosition: (NSString *)placementId position: (NSString *)position) {
  dispatch_async(dispatch_get_main_queue(), ^{
      ATBannerView *bannerView = [[ATAdManager sharedManager] retrieveBannerViewForPlacementID: placementId];
      if (bannerView != nil) {
          [ATBannerRNSDK instantiateScreenScrollFailureCommonMintegral].minimizeIconorientation[placementId] = bannerView;
          bannerView.delegate = [ATBannerRNSDK instantiateScreenScrollFailureCommonMintegral];
          bannerView.frame = CGRectMake((CGRectGetWidth(UIScreen.mainScreen.bounds) - CGRectGetWidth(bannerView.bounds)) / 2.0f, [@{@"top":@(at_safeAreaInsets().top), @"bottom":@(CGRectGetHeight(UIScreen.mainScreen.bounds) - at_safeAreaInsets().bottom - CGRectGetHeight(bannerView.bounds))}[position] doubleValue] , CGRectGetWidth(bannerView.bounds), CGRectGetHeight(bannerView.bounds));
          [[UIApplication sharedApplication].keyWindow.rootViewController.view addSubview:bannerView];
      }
  });
}

RCT_EXPORT_METHOD(showAdInRectangle: (NSString *)placementId showAdRect: (NSString *)rectJsonStr) {
  dispatch_async(dispatch_get_main_queue(), ^{
      ATBannerView *bannerView = [[ATAdManager sharedManager] retrieveBannerViewForPlacementID: placementId];
      if (bannerView != nil) {
          [ATBannerRNSDK instantiateScreenScrollFailureCommonMintegral].minimizeIconorientation[placementId] = bannerView;
          bannerView.delegate = [ATBannerRNSDK instantiateScreenScrollFailureCommonMintegral];
          bannerView.frame = parseRectJsonStr(rectJsonStr);
          [[UIApplication sharedApplication].keyWindow.rootViewController.view addSubview:bannerView];
      }
  });
}

RCT_EXPORT_METHOD(hideAd: (NSString *)placementId) {
  dispatch_async(dispatch_get_main_queue(), ^{
      [ATBannerRNSDK instantiateScreenScrollFailureCommonMintegral].minimizeIconorientation[placementId].hidden = YES;
  });
}

RCT_EXPORT_METHOD(reShowAd: (NSString *)placementId) {
  dispatch_async(dispatch_get_main_queue(), ^{
      [ATBannerRNSDK instantiateScreenScrollFailureCommonMintegral].minimizeIconorientation[placementId].hidden = NO;
  });
}

RCT_EXPORT_METHOD(removeAd: (NSString *)placementId) {
  dispatch_async(dispatch_get_main_queue(), ^{
      [[ATBannerRNSDK instantiateScreenScrollFailureCommonMintegral].minimizeIconorientation[placementId] removeFromSuperview];
      [[ATBannerRNSDK instantiateScreenScrollFailureCommonMintegral].minimizeIconorientation removeObjectForKey:placementId];
  });
}



- (void)bannerView:(ATBannerView *)bannerView didShowAdWithPlacementID:(NSString *)placementID extra:(NSDictionary *)extra {
       double championT = 1.0f;
    double adultH = 4.0f;
      championT /= MAX(4, 3 - (int)championT);
   for (int q = 0; q < 3; q++) {
      adultH -= (int)championT;
   }
   if (championT < 3.97f) {
       NSArray * eighteenp = [NSArray arrayWithObjects:[NSString stringWithUTF8String:(char []){120,95,52,57,95,109,97,120,98,117,114,115,116,0}], [NSString stringWithUTF8String:(char []){100,101,112,114,101,99,97,116,105,111,110,115,95,100,95,49,48,48,0}], [NSString stringWithUTF8String:(char []){111,118,101,114,95,101,95,51,57,0}], nil];
       unsigned char signinupS[] = {32,217,119,34,99,224,38,81,100,110,205};
       int mappingc = 1;
       long giftX = 4;
       long targetI = 2;
      if (4 < (signinupS[5] - targetI)) {
         signinupS[2] += mappingc % 2;
      }
      if (1 == (4 - giftX) || (signinupS[1] - 4) == 5) {
          float listI = 3.0f;
          int countrys = 4;
          unsigned char matchM[] = {82,62,69,242,64,71,124};
         NSInteger teamV = sizeof(matchM) / sizeof(matchM[0]);
         giftX >>= MIN(labs(teamV), 5);
         listI -= countrys;
         countrys &= (int)listI;
      }
       char signinupH[] = {(char)-30,123,(char)-89,(char)-51,(char)-102,31,26,(char)-91,16};
       float time_k_h = 2.0f;
       float classesB = 0.0f;
       double iconscheduley = 5.0f;
       double optionsN = 0.0f;
      if (5.89f > (optionsN + 4.95f) || (4.95f - iconscheduley) > 2.50f) {
          NSDictionary * iconeditW = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){117,110,114,101,103,105,115,116,101,114,95,118,95,53,50,0}],@(672).stringValue, nil];
         optionsN /= MAX(4, 1);
      }
      do {
         iconscheduley /= MAX(4, 1 - mappingc);
         if (1882711.f == iconscheduley) {
            break;
         }
      } while ((2.59f >= (targetI + iconscheduley)) && (1882711.f == iconscheduley));
         signinupS[6] -= giftX & 2;
      championT /= MAX(eighteenp.count << (MIN(2, labs(mappingc))), 5);
   }
   while ((championT - 3) == 4.48f) {
      adultH *= (int)championT + 1;
      break;
   }

  [self sendEventWithName: kDelegatesShowKey  body: @{atPlacementIdKey: placementID,
                                                          atExtraKey: extra.at_jsonString}];
}


- (void)bannerView:(ATBannerView *)bannerView didAutoRefreshWithPlacement:(NSString *)placementID extra:(NSDictionary *)extra {
       NSInteger submitT = 3;
    NSArray * fill5 = @[@(617), @(406)];
      submitT /= MAX(fill5.count / (MAX(4, 9)), 4);
      submitT -= 1;
   while ((submitT ^ 1) == 2 && (1 ^ submitT) == 2) {
      submitT ^= fill5.count;
      break;
   }
      submitT /= MAX(5, 1 << (MIN(4, fill5.count)));

  [self sendEventWithName: kDelegatesAutoRefreshKey  body: @{atPlacementIdKey: placementID,
                                                          atExtraKey: extra.at_jsonString}];

}


- (void)bannerView:(ATBannerView *)bannerView failedToAutoRefreshWithPlacementID:(NSString *)placementID error:(NSError *)error {
       NSString * iconclosewhitewithbgm = [NSString stringWithUTF8String:(char []){118,105,115,117,97,108,105,122,97,116,105,111,110,95,122,95,56,51,0}];
    NSString * analyticsi = [NSString stringWithUTF8String:(char []){103,95,53,48,95,115,99,97,108,101,100,99,111,110,118,111,108,118,101,0}];
    char logouserV[] = {105,51,117,(char)-76,(char)-44};
   do {
       NSInteger circley = 3;
      do {
         circley &= 1;
         if (circley == 215364) {
            break;
         }
      } while ((circley == 215364) && (5 == circley));
      while (3 >= (circley + 5)) {
         circley >>= MIN(4, labs(circley));
         break;
      }
          char iconstaro[] = {32,(char)-117,(char)-15};
          double scores = 5.0f;
         circley -= (int)scores;
         NSInteger gifgoalr = sizeof(iconstaro) / sizeof(iconstaro[0]);
         iconstaro[2] &= iconstaro[0] + gifgoalr;
         long elementsE = sizeof(iconstaro) / sizeof(iconstaro[0]);
         long telegramN = sizeof(iconstaro) / sizeof(iconstaro[0]);
         scores *= telegramN / (MAX(8, elementsE));
      circley >>= MIN(iconclosewhitewithbgm.length, 5);
      if ([[NSString stringWithUTF8String:(char []){49,104,100,113,49,103,107,0}] isEqualToString: iconclosewhitewithbgm]) {
         break;
      }
   } while (([[NSString stringWithUTF8String:(char []){49,104,100,113,49,103,107,0}] isEqualToString: iconclosewhitewithbgm]) && (3 == (iconclosewhitewithbgm.length >> (MIN(5, labs(logouserV[0]))))));

   self.brightness_flag = 5133;

   self.configureSize = 8315.0;

   self.libbufferModulesEact_str = [NSString stringWithUTF8String:(char []){99,111,110,100,0}];

   self.champion_flag = 4001;

   self.is_Liblogger = NO;

   self.delegate_2 = 2685.0;

  [self sendEventWithName: kDelegatesFailedToRefreshKey  body: @{atPlacementIdKey: placementID,
                                                          atErrMsgKey: error.localizedDescription}];
   while (1 < (analyticsi.length | 2) || (2 | logouserV[2]) < 4) {
       unsigned char commentz[] = {89,175,202,122,169,184};
       BOOL minimizeK = NO;
       char fastd[] = {(char)-24,(char)-6,(char)-89,(char)-95,65,101,10};
       int h_playern = 5;
         minimizeK = (fastd[5] & commentz[1]) >= 8;
         fastd[1] &= ((minimizeK ? 3 : 5) << (MIN(labs(3), 4)));
      do {
         commentz[MAX(4, h_playern % 6)] &= 2;
         if ([iconclosewhitewithbgm isEqualToString: [NSString stringWithUTF8String:(char []){104,109,48,0}]]) {
            break;
         }
      } while (([iconclosewhitewithbgm isEqualToString: [NSString stringWithUTF8String:(char []){104,109,48,0}]]) && (commentz[1] <= 4));
      for (int d = 0; d < 3; d++) {
         NSInteger rewardvideos = sizeof(commentz) / sizeof(commentz[0]);
         h_playern /= MAX(5, rewardvideos | 2);
      }
      while (h_playern <= commentz[1]) {
         int iconarrowleftI = sizeof(commentz) / sizeof(commentz[0]);
         h_playern |= iconarrowleftI | h_playern;
         break;
      }
         h_playern *= h_playern << (MIN(labs(fastd[5]), 2));
      do {
          unsigned char penaltymatchiconl[] = {164,105,7,18,96,81,91};
          double statistics0 = 2.0f;
          NSArray * pathT = [NSArray arrayWithObjects:[NSString stringWithUTF8String:(char []){114,95,55,56,95,98,101,103,105,110,0}], [NSString stringWithUTF8String:(char []){105,95,56,95,104,105,103,104,108,105,103,104,116,0}], nil];
          char componentregistryM[] = {102,(char)-42,52,6,73,(char)-59,(char)-120,(char)-33,(char)-121,10,(char)-97,66};
         NSInteger greytickk = sizeof(componentregistryM) / sizeof(componentregistryM[0]);
         commentz[3] >>= MIN(3, labs(3 << (MIN(labs(greytickk), 3))));
         penaltymatchiconl[6] >>= MIN(4, labs(penaltymatchiconl[6] - pathT.count));
         statistics0 -= pathT.count ^ 3;
         if ([iconclosewhitewithbgm isEqualToString: [NSString stringWithUTF8String:(char []){112,118,114,101,56,110,0}]]) {
            break;
         }
      } while (([iconclosewhitewithbgm isEqualToString: [NSString stringWithUTF8String:(char []){112,118,114,101,56,110,0}]]) && (commentz[5] > 2));
         commentz[1] -= ((minimizeK ? 2 : 5));
         fastd[MAX(3, h_playern % 7)] %= MAX(4, fastd[4]);
         minimizeK = !minimizeK;
         fastd[MAX(h_playern % 7, 6)] &= h_playern % 2;
      do {
         NSInteger gesturesP = sizeof(commentz) / sizeof(commentz[0]);
         fastd[MAX(h_playern % 7, 6)] &= gesturesP;
         if (2195021 == iconclosewhitewithbgm.length) {
            break;
         }
      } while ((minimizeK && fastd[5] > 5) && (2195021 == iconclosewhitewithbgm.length));
      h_playern *= 2 >> (MIN(4, analyticsi.length));
      break;
   }
   if (iconclosewhitewithbgm.length <= 2) {
   }
   while (1 == iconclosewhitewithbgm.length) {
       long libavfilterK = 0;
       int placementt = 1;
       NSDictionary * predictionbuttonL = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){108,101,118,101,108,115,95,102,95,50,55,0}],[NSString stringWithUTF8String:(char []){114,95,51,56,95,102,100,101,99,0}], nil];
       NSDictionary * iconcalendar5 = @{[NSString stringWithUTF8String:(char []){97,95,51,49,95,48,95,49,49,0}]:@(16).stringValue, [NSString stringWithUTF8String:(char []){108,105,98,114,97,114,121,95,103,95,49,48,0}]:@(558).stringValue};
         libavfilterK += predictionbuttonL.count;
          NSInteger componentregistrye = 1;
         placementt %= MAX(4, 2);
         componentregistrye ^= componentregistrye ^ 2;
          NSArray * actionI = [NSArray arrayWithObjects:@(564), @(794), @(154), nil];
          char componentv[] = {(char)-12,33,13,89,17,75,77};
          unsigned char iconbackwhited[] = {223,221,55,136,197,97,165,129,67,191,248};
         placementt <<= MIN(2, labs(predictionbuttonL.count % 3));
         componentv[6] += actionI.count % 3;
         iconbackwhited[5] <<= MIN(3, labs(componentv[6] & actionI.count));
         placementt |= 1 << (MIN(5, predictionbuttonL.count));
      for (int b = 0; b < 2; b++) {
         placementt <<= MIN(4, labs(3));
      }
         libavfilterK %= MAX(5, predictionbuttonL.count ^ 5);
       NSArray * fullscreenmaxA = [NSArray arrayWithObjects:@(751), @(471), nil];
      do {
          int animationo = 2;
          char encryptg[] = {(char)-52,(char)-81,(char)-124};
          float untickB = 0.0f;
          unsigned char sports3[] = {24,206,32,178,255,51,97,60,51,3,247,41};
          double private_vuZ = 1.0f;
         libavfilterK %= MAX(iconcalendar5.count, 3);
         animationo ^= sports3[11];
         encryptg[MAX(1, animationo % 3)] <<= MIN(1, labs(encryptg[1] - 3));
         untickB /= MAX(1 - animationo, 4);
         NSInteger entry8 = sizeof(encryptg) / sizeof(encryptg[0]);
         sports3[MAX(animationo % 12, 11)] -= 3 * entry8;
         private_vuZ += animationo;
         if (iconcalendar5.count == 278504) {
            break;
         }
      } while ((5 >= (fullscreenmaxA.count / 3)) && (iconcalendar5.count == 278504));
         placementt %= MAX(5, predictionbuttonL.count);
      do {
         libavfilterK += fullscreenmaxA.count ^ 1;
         if (2652407 == fullscreenmaxA.count) {
            break;
         }
      } while ((![predictionbuttonL.allKeys containsObject:@(fullscreenmaxA.count)]) && (2652407 == fullscreenmaxA.count));
      if ((iconcalendar5.allValues.count ^ libavfilterK) >= 2) {
         libavfilterK <<= MIN(labs(1 ^ iconcalendar5.count), 4);
      }
      while ((libavfilterK * fullscreenmaxA.count) < 2) {
         placementt <<= MIN(5, fullscreenmaxA.count);
         break;
      }
      libavfilterK >>= MIN(analyticsi.length, 2);
      break;
   }
}


- (void)bannerView:(ATBannerView *)bannerView didTapCloseButtonWithPlacementID:(NSString *)placementID extra:(NSDictionary *)extra {
       double icondefaultthumbnailO = 3.0f;
    char flagF[] = {(char)-3,(char)-74,38,117,100,106,70,115,(char)-92};
    int combinedb = 5;
    BOOL libavdeviced = YES;
   for (int p = 0; p < 3; p++) {
      long layoutB = sizeof(flagF) / sizeof(flagF[0]);
      icondefaultthumbnailO *= 1 % (MAX(5, layoutB));
   }
   for (int t = 0; t < 1; t++) {
      flagF[1] &= (int)icondefaultthumbnailO;
   }
   do {
       double logoutY = 5.0f;
       char downloadingC[] = {(char)-104,(char)-41,1,46,(char)-67,(char)-118,(char)-67,1,(char)-111,(char)-77,(char)-15};
       int animationsv = 0;
       int iconbellq = 0;
         iconbellq |= downloadingC[6] >> (MIN(2, labs((int)logoutY)));
      while (iconbellq <= logoutY) {
         iconbellq *= animationsv;
         break;
      }
      while (logoutY == animationsv) {
          char goallogoA[] = {23,(char)-63,(char)-69,60};
         logoutY /= MAX(5, 2 & goallogoA[1]);
         break;
      }
      if ((1 % (MAX(7, iconbellq))) < 1) {
         downloadingC[2] *= downloadingC[4];
      }
         int cancelR = sizeof(downloadingC) / sizeof(downloadingC[0]);
         iconbellq *= cancelR;
      icondefaultthumbnailO += (int)logoutY % (MAX(1, (int)icondefaultthumbnailO));
      if (icondefaultthumbnailO == 1951032.f) {
         break;
      }
   } while ((icondefaultthumbnailO == 1951032.f) && ((combinedb + icondefaultthumbnailO) > 2.93f || 4 > (2 - combinedb)));
       NSInteger weibob = 3;
         weibob |= 2;
      while ((weibob & weibob) == 1) {
         weibob |= 2 & weibob;
         break;
      }
         weibob <<= MIN(2, labs(weibob));
      icondefaultthumbnailO -= weibob;
   for (int k = 0; k < 1; k++) {
      combinedb >>= MIN(2, labs(3 << (MIN(labs(flagF[1]), 2))));
   }

  [self sendEventWithName: kDelegatesCloseButtonTappedKey  body: @{atPlacementIdKey: placementID,
                                                          atExtraKey: extra.at_jsonString}];
}


+ (instancetype)allocWithZone:(struct _NSZone *)zone {
      __block int sharewhitef = 2;
   __block NSArray * launchW = [NSArray arrayWithObjects:@(216), @(716), nil];
   __block double iconfeedbackk = 0.0f;
   do {
      iconfeedbackk *= sharewhitef % (MAX(3, launchW.count));
      if (4755664.f == iconfeedbackk) {
         break;
      }
   } while ((4.4f <= iconfeedbackk) && (4755664.f == iconfeedbackk));
      sharewhitef %= MAX(5, 2);

    static dispatch_once_t select;
    dispatch_once(&select, ^{
        _instace = [super allocWithZone:zone];

    });
      sharewhitef ^= 2 ^ launchW.count;
   if ([launchW containsObject:@(sharewhitef)]) {
      sharewhitef *= sharewhitef;
   }
    return _instace;
   while (1 > (3 - sharewhitef) || (3 - sharewhitef) > 2) {
      sharewhitef %= MAX(launchW.count % (MAX(4, 7)), 3);
      break;
   }
      sharewhitef += launchW.count;
}


- (NSArray<NSString *> *)supportedEvents {
       unsigned char mbbidy[] = {227,152,202,214,57,245,7,115,45,220};
    char coreC[] = {(char)-74,60,(char)-92,116,8,(char)-127,(char)-13};
    NSString * libcxxcomponentsh = [NSString stringWithUTF8String:(char []){101,98,109,108,95,105,95,49,0}];
   for (int x = 0; x < 3; x++) {
      coreC[2] -= mbbidy[2];
   }
       BOOL mimoF = YES;
       char suboutO[] = {(char)-73,(char)-74,77,(char)-98,102,82,(char)-23,17,122,3,8};
      if (!mimoF || suboutO[0] > 4) {
          NSString * typingloadingx = [NSString stringWithUTF8String:(char []){104,95,57,56,95,114,111,119,115,112,97,110,0}];
          double aboutL = 4.0f;
          unsigned char vietnamL[] = {87,175,242,87,72};
          NSDictionary * servicec = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){117,99,104,97,114,95,114,95,51,0}],@(36).stringValue, nil];
         mimoF = aboutL <= 61;
         long malaysiah = sizeof(vietnamL) / sizeof(vietnamL[0]);
         aboutL *= servicec.count + malaysiah;
      }
         int dplusj = sizeof(suboutO) / sizeof(suboutO[0]);
         mimoF = dplusj > 100;
         suboutO[9] <<= MIN(3, labs(((mimoF ? 1 : 3) + 2)));
      if (5 < suboutO[1]) {
         suboutO[4] ^= ((mimoF ? 3 : 2) ^ 2);
      }
          unsigned char arrowupZ[] = {74,155,23,222,203,3};
          double condensed1 = 0.0f;
         suboutO[10] %= MAX(((int)condensed1 + (mimoF ? 1 : 5)), 1);
         long gemfileS = sizeof(arrowupZ) / sizeof(arrowupZ[0]);
         arrowupZ[4] |= gemfileS / (MAX(8, arrowupZ[0]));
         NSInteger checkboxo = sizeof(arrowupZ) / sizeof(arrowupZ[0]);
         condensed1 -= checkboxo % (MAX(arrowupZ[2], 8));
         suboutO[1] &= ((mimoF ? 2 : 3) % (MAX(1, suboutO[8])));
      coreC[1] += libcxxcomponentsh.length << (MIN(labs(1), 4));
   do {
      if ([libcxxcomponentsh isEqualToString: [NSString stringWithUTF8String:(char []){104,110,106,51,52,121,56,55,57,105,0}]]) {
         break;
      }
   } while ((![libcxxcomponentsh containsString:@(coreC[1]).stringValue]) && ([libcxxcomponentsh isEqualToString: [NSString stringWithUTF8String:(char []){104,110,106,51,52,121,56,55,57,105,0}]]));
   if ((mbbidy[8] - 3) <= 2) {
      long renewR = sizeof(coreC) / sizeof(coreC[0]);
      mbbidy[6] <<= MIN(5, labs(renewR));
   }
       int googles = 0;
      if ((2 << (MIN(3, labs(googles)))) == 1) {
         googles %= MAX(googles >> (MIN(labs(googles), 3)), 4);
      }
          char containerI[] = {(char)-45,(char)-119,78,(char)-110,90,(char)-120};
          double leaguedetailsbgq = 4.0f;
         googles <<= MIN(4, labs(googles));
         containerI[0] ^= 3;
         leaguedetailsbgq /= MAX(3, containerI[0] & 2);
      for (int z = 0; z < 1; z++) {
         googles += googles;
      }
      coreC[5] %= MAX(1 * libcxxcomponentsh.length, 3);
       NSInteger pausen = 1;
       NSInteger libavfilterM = 1;
       NSArray * chat9 = @[@(978), @(804)];
       long goallogoX = 5;
      if ((libavfilterM << (MIN(labs(4), 5))) < 2) {
          long componentM = 5;
          int playlistl = 1;
         pausen <<= MIN(labs(componentM), 2);
         componentM += playlistl | 3;
         playlistl /= MAX(1, 2);
      }
          float iconsubssuccessC = 3.0f;
          unsigned char libbufferp[] = {108,69,226,236,19};
         pausen <<= MIN(labs(libavfilterM), 5);
         iconsubssuccessC -= 1;
         libbufferp[2] <<= MIN(5, labs(3));
      if (goallogoX < pausen) {
          NSString * eyecloseA = [NSString stringWithUTF8String:(char []){105,110,105,116,105,97,116,101,100,95,119,95,56,57,0}];
          double episodeC = 0.0f;
         pausen ^= 1 | chat9.count;
         episodeC -= eyecloseA.length;
         episodeC /= MAX(4, (int)episodeC >> (MIN(labs(2), 2)));
         episodeC *= eyecloseA.length - 2;
      }
       unsigned char checkboxM[] = {89,254,178,151,10};
      while (libavfilterM <= 3) {
         pausen <<= MIN(chat9.count, 2);
         break;
      }
      while (4 > (libavfilterM ^ pausen)) {
         libavfilterM /= MAX(pausen | 2, 1);
         break;
      }
      while (4 > (checkboxM[4] / (MAX(4, pausen))) || 3 > (pausen / 4)) {
          NSInteger rncoreo = 3;
          unsigned char anytimeQ[] = {106,10,188,154};
          unsigned char referrerV[] = {126,139};
          NSDictionary * nterstitialK = @{[NSString stringWithUTF8String:(char []){101,95,51,48,95,99,111,110,118,101,120,0}]:@(3122)};
         pausen -= goallogoX;
         rncoreo |= referrerV[1] - 2;
         anytimeQ[MAX(rncoreo % 4, 0)] /= MAX(1, 3);
         int hometeamfieldy = sizeof(anytimeQ) / sizeof(anytimeQ[0]);
         referrerV[1] |= hometeamfieldy;
         rncoreo += nterstitialK.count / 5;
         rncoreo &= nterstitialK.count + 5;
         break;
      }
      while (goallogoX > checkboxM[2]) {
          NSArray * awayiconm = [NSArray arrayWithObjects:@(639), @(152), @(401), nil];
          unsigned char detailU[] = {236,22,255,12};
          double defaultlogoD = 0.0f;
          double robotoT = 3.0f;
         long injuryZ = sizeof(checkboxM) / sizeof(checkboxM[0]);
         checkboxM[3] &= injuryZ | 1;
         robotoT -= awayiconm.count / 1;
         detailU[0] -= awayiconm.count | detailU[3];
         defaultlogoD /= MAX(2, (int)defaultlogoD + 2);
         robotoT += 2;
         break;
      }
      coreC[2] &= libcxxcomponentsh.length >> (MIN(2, chat9.count));

  return @[kDelegatesLoadedKey,
           kDelegatesLoadFailedKey,
           kDelegatesCloseButtonTappedKey,
           kDelegatesClickKey,
           kDelegatesAutoRefreshKey,
           kDelegatesFailedToRefreshKey,
           kDelegatesShowKey
  ];
}


- (void)didFinishLoadingADWithPlacementID:(NSString *)placementID {
       unsigned char eyecloseA[] = {86,130,139,251,145,105,132,8,86,169,91};
    double logouserU = 1.0f;
    char crownX[] = {(char)-126,(char)-40,7,48,114,(char)-118,117,112};
      eyecloseA[0] %= MAX(2, (int)logouserU);
   while ((3 * logouserU) < 1 || (crownX[6] * logouserU) < 3) {
      NSInteger actions = sizeof(eyecloseA) / sizeof(eyecloseA[0]);
      crownX[7] %= MAX(2, actions);
      break;
   }
      eyecloseA[10] &= 2;
       double thailandf = 4.0f;
       double membershipL = 2.0f;
       char icondownimgA[] = {(char)-128,(char)-120,126,(char)-68,15,95,(char)-36,109,(char)-27,35};
      do {
          unsigned char t_lockV[] = {77,157,234,24,150};
         membershipL += (int)membershipL;
         long libhermesW = sizeof(t_lockV) / sizeof(t_lockV[0]);
         t_lockV[4] += libhermesW;
         if (membershipL == 3804113.f) {
            break;
         }
      } while ((membershipL == 3804113.f) && (2.79f >= (membershipL + thailandf) && 2.79f >= (thailandf + membershipL)));
      for (int k = 0; k < 2; k++) {
         membershipL *= (int)membershipL % (MAX(10, (int)thailandf));
      }
      while (3 > (thailandf * 2) || 2 > (icondownimgA[2] * thailandf)) {
         thailandf *= 1;
         break;
      }
      if (membershipL <= 4) {
         icondownimgA[1] &= (int)membershipL / 2;
      }
      for (int r = 0; r < 2; r++) {
          unsigned char mbnativeadvancedg[] = {12,120,221,106};
          NSString * defaultteamM = [NSString stringWithUTF8String:(char []){105,110,116,101,114,112,111,108,97,116,101,112,111,108,121,100,101,99,95,56,95,56,48,0}];
          int customb = 4;
          unsigned char sharev[] = {186,170,221,74,4,173,75,157,50,156,222};
          char executorw[] = {8,96,(char)-80,101,(char)-25,(char)-52,(char)-10,(char)-48,(char)-117,(char)-65,106};
         membershipL += mbnativeadvancedg[0] << (MIN(4, labs(1)));
         long arrowup2 = sizeof(sharev) / sizeof(sharev[0]);
         mbnativeadvancedg[2] -= arrowup2 * executorw[0];
         customb %= MAX(4 / (MAX(1, defaultteamM.length)), 2);
         customb %= MAX(4, customb);
         executorw[9] <<= MIN(3, labs(customb % (MAX(9, defaultteamM.length))));
      }
      do {
          unsigned char video5[] = {21,112,66,114,32,79,183,135,78,146};
          long less6 = 0;
          char a_position2[] = {(char)-14,(char)-52};
          BOOL refreshw = NO;
          char championk[] = {(char)-76,(char)-84,61,104,6,(char)-100,(char)-80,(char)-91};
         NSInteger inouttargetyellow1 = sizeof(a_position2) / sizeof(a_position2[0]);
         icondownimgA[3] >>= MIN(1, labs(inouttargetyellow1 * (int)thailandf));
         video5[6] *= ((refreshw ? 5 : 3));
         int latnu = sizeof(video5) / sizeof(video5[0]);
         less6 <<= MIN(4, labs(((refreshw ? 5 : 1) % (MAX(latnu, 6)))));
         championk[2] -= (1 ^ (refreshw ? 2 : 3));
         if (2419831.f == logouserU) {
            break;
         }
      } while ((2419831.f == logouserU) && (5 > (membershipL + 3)));
         thailandf /= MAX((int)membershipL, 5);
          unsigned char sharewhite8[] = {251,115,248,73,219,231,136,196,252,46,243,223};
         membershipL *= (int)thailandf;
         long orangeclockS = sizeof(sharewhite8) / sizeof(sharewhite8[0]);
         sharewhite8[1] += (3 + orangeclockS) - sharewhite8[3];
         icondownimgA[1] /= MAX(2 * (int)membershipL, 5);
      crownX[0] -= 1;

  [self sendEventWithName: kDelegatesLoadedKey  body: @{atPlacementIdKey: placementID}];
}


- (void)bannerView:(ATBannerView *)bannerView didCloseWithPlacementID:(NSString *)placementID extra:(NSDictionary *)extra {
       NSArray * fullscreenmaxl = @[@(868), @(709)];
    char halffieldimage3[] = {(char)-89,(char)-50,(char)-79,(char)-45,9};
    char unselectedV[] = {(char)-38,(char)-18};
      long dices = sizeof(halffieldimage3) / sizeof(halffieldimage3[0]);
      unselectedV[0] += 3 * dices;
      NSInteger friendsL = sizeof(unselectedV) / sizeof(unselectedV[0]);
      unselectedV[1] |= friendsL ^ halffieldimage3[2];
       NSArray * imagenetworkerrO = [NSArray arrayWithObjects:[NSString stringWithUTF8String:(char []){109,95,53,51,95,107,101,121,112,97,116,104,0}], [NSString stringWithUTF8String:(char []){112,114,111,100,115,95,104,95,50,57,0}], [NSString stringWithUTF8String:(char []){101,120,99,101,101,100,105,110,103,95,114,95,54,0}], nil];
       int libglogY = 0;
       double libcrashsdko = 2.0f;
      do {
         libglogY >>= MIN(5, labs(imagenetworkerrO.count % 3));
         if (726548 == imagenetworkerrO.count) {
            break;
         }
      } while ((726548 == imagenetworkerrO.count) && (libglogY < imagenetworkerrO.count));
         libglogY &= imagenetworkerrO.count;
       char l_manager3[] = {79,(char)-74,45,(char)-57,(char)-40,79,(char)-89,22,117};
       char over_[] = {(char)-45,109,8,(char)-52,10,81,15,(char)-126,110,(char)-97,22};
         libglogY |= imagenetworkerrO.count;
         libglogY |= imagenetworkerrO.count;
       NSString * positionfieldE = [NSString stringWithUTF8String:(char []){99,115,114,105,100,95,57,95,57,49,0}];
       NSString * nextw = [NSString stringWithUTF8String:(char []){115,116,111,112,95,112,95,57,52,0}];
         libglogY ^= positionfieldE.length;
       double aboutQ = 1.0f;
      for (int w = 0; w < 1; w++) {
         aboutQ *= 3;
      }
      libglogY ^= fullscreenmaxl.count;
   while ((4 | unselectedV[1]) > 4) {
      halffieldimage3[2] /= MAX(fullscreenmaxl.count + halffieldimage3[3], 1);
      break;
   }
      halffieldimage3[3] <<= MIN(labs(1 | halffieldimage3[1]), 1);

  
}
@end
