
#import "ttUmengVietnam.h"
#import <AnyThinkInterstitial/AnyThinkInterstitial.h>
#import "ttLockOrange.h"
#import "ttTrashAction.h"
#import "ttLeftController.h"


NSString *const kLoadUseRVAsInterstitialKey = @"UseRewardedVideoAsInterstitial";

static NSString *const kDelegatesLoadedKey = @"ATInterstitialLoaded";
static NSString *const kDelegatesLoadFailedKey = @"ATInterstitialLoadFail";
static NSString *const kDelegatesShowKey = @"ATInterstitialAdShow";
static NSString *const kDelegatesVideoStartKey = @"ATInterstitialPlayStart";
static NSString *const kDelegatesVideoEndKey = @"ATInterstitialPlayEnd";
static NSString *const kDelegatesCloseKey = @"ATInterstitialClose";
static NSString *const kDelegatesClickKey = @"ATInterstitialClick";
static NSString *const kDelegatesFailedToPlayKey = @"ATInterstitialPlayFail";
static NSString *const kDelegatesFailedToShowKey = @"ATInterstitialAdFailedToShow";

@interface ATInterstitialRNSDK() <ATInterstitialDelegate>
@property(nonatomic, assign)NSInteger  logoIndex;
@property(nonatomic, copy)NSString *  sheetInternetBasketballString;




@end
@implementation ATInterstitialRNSDK

static id _instace;

+(instancetype) whiteReloadValidScenario {
    static dispatch_once_t onceToken;
    dispatch_once(&onceToken, ^{
      _instace = [[super alloc] init];
    });
    return _instace;
}


- (void)interstitialFailedToShowForPlacementID:(NSString *)placementID error:(NSError *)error extra:(NSDictionary *)extra {
       NSArray * areak = @[@(922), @(616), @(829)];
    NSInteger overi = 3;
   do {
      overi %= MAX(areak.count - 4, 5);
      if (areak.count == 46918) {
         break;
      }
   } while ((areak.count == 46918) && ((overi >> (MIN(labs(3), 2))) == 5 || 1 == (3 >> (MIN(3, labs(overi))))));
   for (int y = 0; y < 3; y++) {
      overi <<= MIN(3, labs(overi));
   }
   while (1 < (overi | 3) && (overi | areak.count) < 3) {
      overi &= overi;
      break;
   }
   for (int z = 0; z < 1; z++) {
      overi ^= areak.count;
   }

  [self sendEventWithName: kDelegatesFailedToShowKey  body: @{atPlacementIdKey: placementID,
                                                              atErrMsgKey: error.localizedDescription,
                                                              atExtraKey: extra.at_jsonString }];
}

RCT_EXPORT_MODULE()


- (void)interstitialDidShowForPlacementID:(NSString *)placementID extra:(NSDictionary *)extra {
       long langb = 1;
    char ewardeda[] = {121,(char)-88,(char)-83};
    unsigned char groupB[] = {43,158};
      long navigationB = sizeof(ewardeda) / sizeof(ewardeda[0]);
      ewardeda[0] >>= MIN(labs(navigationB - groupB[1]), 5);
       unsigned char telegram2[] = {140,249,133};
       char condensedp[] = {69,84,26,(char)-14,(char)-86,(char)-39,17,(char)-19};
       char incidentf[] = {10,18,(char)-59,(char)-127,12,62,(char)-21,97,51,(char)-40};
      do {
         long homee = sizeof(telegram2) / sizeof(telegram2[0]);
         condensedp[6] ^= homee;
         if (3238526 == langb) {
            break;
         }
      } while ((3238526 == langb) && (1 < (5 ^ condensedp[7])));
       NSDictionary * emptyA = @{[NSString stringWithUTF8String:(char []){114,97,100,98,103,95,115,95,56,51,0}]:@{[NSString stringWithUTF8String:(char []){69,0}]:[NSString stringWithUTF8String:(char []){107,0}], [NSString stringWithUTF8String:(char []){106,0}]:[NSString stringWithUTF8String:(char []){52,0}], [NSString stringWithUTF8String:(char []){120,0}]:[NSString stringWithUTF8String:(char []){68,0}]}};
       NSDictionary * mini1 = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){114,97,112,112,101,114,95,109,95,49,55,0}],@(655).stringValue, [NSString stringWithUTF8String:(char []){122,95,55,48,95,116,114,97,110,102,115,101,114,0}],@(235).stringValue, nil];
      int placeholderY = sizeof(ewardeda) / sizeof(ewardeda[0]);
      groupB[MAX(langb % 2, 0)] /= MAX(1, 3 >> (MIN(labs(placeholderY), 1)));
   for (int o = 0; o < 2; o++) {
      int redirecte = sizeof(ewardeda) / sizeof(ewardeda[0]);
      ewardeda[1] %= MAX(2, langb * redirecte);
   }
      ewardeda[MAX(1, langb % 3)] &= groupB[0] ^ langb;
   while ((groupB[1] + 5) == 2 || 5 == (ewardeda[2] + groupB[1])) {
      NSInteger apple7 = sizeof(ewardeda) / sizeof(ewardeda[0]);
      ewardeda[0] <<= MIN(labs(groupB[1] ^ (2 + apple7)), 5);
      break;
   }

  
  [self sendEventWithName: kDelegatesShowKey  body: @{atPlacementIdKey: placementID,
                                                      atExtraKey: extra.at_jsonString}];

}

RCT_EXPORT_METHOD(loadAd: (NSString *)placementId setting: (NSString *)setting) {
  NSDictionary *extra = nil;
  if (setting != nil) {
      NSDictionary *extraDict = [NSJSONSerialization at_JSONObjectWithString:setting options:NSJSONReadingAllowFragments error:nil];
      NSLog(@"extraDict = %@", extraDict);
      if (extraDict[kLoadUseRVAsInterstitialKey] != nil) {
          extra = @{kATInterstitialExtraUsesRewardedVideo:@([extraDict[kLoadUseRVAsInterstitialKey] boolValue])};
      }
  }
  [[ATAdManager sharedManager] loadADWithPlacementID:placementId extra:[extra isKindOfClass:[NSDictionary class]] ? extra : nil delegate: [ATInterstitialRNSDK whiteReloadValidScenario]];
}

RCT_EXPORT_METHOD(hasAdReady: (NSString *)placementId promise: (RCTPromiseResolveBlock)promise rejector:(RCTPromiseRejectBlock)reject) {
  BOOL ready = [[ATAdManager sharedManager] interstitialReadyForPlacementID:placementId];
  promise(@(ready));
}

RCT_EXPORT_METHOD(checkAdStatus: (NSString *)placementId promise: (RCTPromiseResolveBlock)promise rejector:(RCTPromiseRejectBlock)reject) {
  ATCheckLoadModel *checkLoadModel = [[ATAdManager sharedManager] checkInterstitialLoadStatusForPlacementID:placementId];
  NSMutableDictionary *statusDict = [NSMutableDictionary dictionary];
  statusDict[@"isLoading"] = @(checkLoadModel.isLoading);
  statusDict[@"isReady"] = @(checkLoadModel.isReady);
  statusDict[@"adInfo"] = checkLoadModel.adOfferInfo;
  NSLog(@"ATInterstitialRNSDK::statusDict = %@", statusDict);
  promise(statusDict.at_AdInfojsonString);
}

RCT_EXPORT_METHOD(showAd: (NSString *)placementId) {
  
  dispatch_async(dispatch_get_main_queue(), ^{
    [[ATAdManager sharedManager] showInterstitialWithPlacementID:placementId inViewController:[UIApplication sharedApplication].delegate.window.rootViewController delegate:[ATInterstitialRNSDK whiteReloadValidScenario]];
  });
}

RCT_EXPORT_METHOD(showAdInScenario: (NSString *)placementId scenario: (NSString *)scenario) {
  
  dispatch_async(dispatch_get_main_queue(), ^{
    [[ATAdManager sharedManager] showInterstitialWithPlacementID:placementId scene:scenario inViewController:[UIApplication sharedApplication].delegate.window.rootViewController delegate: [ATInterstitialRNSDK whiteReloadValidScenario]];
  });

}


- (void)interstitialDidCloseForPlacementID:(NSString *)placementID extra:(NSDictionary *)extra {
       int miniJ = 4;
    char sellM[] = {(char)-52,(char)-86,70,(char)-7,(char)-86};
   if (2 <= (sellM[4] % (MAX(4, 2)))) {
      sellM[2] >>= MIN(4, labs(miniJ));
   }
   if ((sellM[1] % 2) < 4 || (miniJ % 2) < 3) {
      int forwardT = sizeof(sellM) / sizeof(sellM[0]);
      sellM[MAX(miniJ % 5, 0)] /= MAX(3, miniJ << (MIN(labs(forwardT), 3)));
   }
      long bridgez = sizeof(sellM) / sizeof(sellM[0]);
      miniJ /= MAX(bridgez << (MIN(4, labs(miniJ))), 3);

  [self sendEventWithName: kDelegatesCloseKey  body: @{atPlacementIdKey: placementID,
                                                       atExtraKey: extra.at_jsonString}];
}


- (void)didFinishLoadingADWithPlacementID:(NSString *)placementID {
       int tickedj = 2;
    char auto_rl2[] = {(char)-58,(char)-13};
   while ((auto_rl2[1] | 2) == 4) {
      long preview6 = sizeof(auto_rl2) / sizeof(auto_rl2[0]);
      auto_rl2[MAX(tickedj % 2, 1)] &= 3 >> (MIN(labs(preview6), 1));
      break;
   }
      tickedj += 3;
      tickedj ^= auto_rl2[1];
       float philippines1 = 3.0f;
      do {
         philippines1 /= MAX(3, (int)philippines1);
         if (philippines1 == 3510482.f) {
            break;
         }
      } while ((philippines1 == 3510482.f) && (1.22f > (philippines1 * 3)));
      while (5.29f < philippines1) {
         philippines1 /= MAX(2 + (int)philippines1, 3);
         break;
      }
         philippines1 *= (int)philippines1 * 3;
      auto_rl2[1] *= auto_rl2[1];

  [self sendEventWithName: kDelegatesLoadedKey  body: @{ atPlacementIdKey: placementID}];

}



- (void)interstitialDidStartPlayingVideoForPlacementID:(NSString *)placementID extra:(NSDictionary *)extra {
       NSString * lang1 = [NSString stringWithUTF8String:(char []){111,95,53,55,95,108,97,122,105,108,121,0}];
    BOOL bannerT = NO;
      bannerT = (((!bannerT ? lang1.length : 82) / (MAX(8, lang1.length))) < 82);
       BOOL historyn = NO;
         historyn = !historyn;
      while (!historyn) {
         historyn = !historyn;
         break;
      }
      do {
         historyn = !historyn && historyn;
         if (historyn ? !historyn : historyn) {
            break;
         }
      } while ((historyn ? !historyn : historyn) && (historyn && historyn));
      historyn = lang1.length | 2;
       NSDictionary * soundF = @{[NSString stringWithUTF8String:(char []){109,105,100,95,115,95,51,54,0}]:@(824).stringValue};
       long pauseq = 5;
      do {
         pauseq >>= MIN(3, labs(2 & soundF.count));
         if (soundF.count == 3600092) {
            break;
         }
      } while ((soundF.count <= pauseq) && (soundF.count == 3600092));
      while ((5 - pauseq) <= 2) {
         pauseq <<= MIN(4, labs(1 - pauseq));
         break;
      }
          double showb = 4.0f;
         pauseq |= soundF.count;
         showb += 2;
         pauseq %= MAX(1, soundF.count * 4);
      do {
         pauseq %= MAX(soundF.count, 3);
         if (4557405 == soundF.count) {
            break;
         }
      } while ((4557405 == soundF.count) && (pauseq < 4));
         pauseq /= MAX(soundF.count - 3, 4);
      pauseq %= MAX(3, lang1.length & 3);

  [self sendEventWithName: kDelegatesVideoStartKey  body: @{atPlacementIdKey: placementID,
                                                            atExtraKey: extra.at_jsonString}];

}



- (void)interstitialDidEndPlayingVideoForPlacementID:(NSString *)placementID extra:(NSDictionary *)extra {
       unsigned char filledh[] = {99,220,27,1};
    unsigned char textZ[] = {217,192,99,86,94,193,210,164,55,69,31};
       int minimizeb = 2;
          char mbnativeadvancedS[] = {62,(char)-87,(char)-53,76,(char)-99,12,(char)-88,(char)-28,103,(char)-28};
          char rewindQ[] = {(char)-58,(char)-25,106,(char)-2,86,12,12,(char)-39};
         minimizeb += mbnativeadvancedS[3];
         int groupR = sizeof(rewindQ) / sizeof(rewindQ[0]);
         mbnativeadvancedS[3] &= (3 + groupR) / (MAX(rewindQ[4], 1));
      if (3 == (3 << (MIN(1, labs(minimizeb))))) {
         minimizeb ^= 2;
      }
         minimizeb += minimizeb % (MAX(minimizeb, 5));
      long ewardedz = sizeof(filledh) / sizeof(filledh[0]);
      textZ[2] /= MAX((2 + ewardedz) - textZ[5], 3);
      int videoz = sizeof(filledh) / sizeof(filledh[0]);
      int inactiveP = sizeof(textZ) / sizeof(textZ[0]);
      textZ[1] /= MAX(1, videoz % (MAX(6, inactiveP)));
   for (int k = 0; k < 1; k++) {
      long sound4 = sizeof(textZ) / sizeof(textZ[0]);
      long fastL = sizeof(filledh) / sizeof(filledh[0]);
      filledh[1] += fastL - sound4;
   }
   for (int d = 0; d < 3; d++) {
      long rankj = sizeof(textZ) / sizeof(textZ[0]);
      filledh[3] /= MAX(3, 1 >> (MIN(1, labs(rankj))));
   }

  [self sendEventWithName: kDelegatesVideoEndKey  body: @{atPlacementIdKey: placementID,
                                                          atExtraKey: extra.at_jsonString}];
}



- (void)didFailToLoadADWithPlacementID:(NSString *)placementID error:(NSError *)error {
       unsigned char morep[] = {201,210,199};
    unsigned char sliderc[] = {193,211,190,131,117,108,60};
    NSInteger sansB = 2;
    NSString * weiboL = [NSString stringWithUTF8String:(char []){109,101,115,97,103,101,115,95,49,95,55,52,0}];
      sliderc[5] %= MAX(4, 1 ^ sansB);
   do {
       NSDictionary * filef = @{[NSString stringWithUTF8String:(char []){102,102,109,97,108,95,50,95,56,49,0}]:@(207)};
      while (4 == (filef.allKeys.count >> (MIN(labs(1), 3)))) {
         break;
      }
          long searchbari = 2;
         searchbari >>= MIN(filef.count, 4);
      sansB ^= weiboL.length | 2;
      if ([[NSString stringWithUTF8String:(char []){102,121,102,49,103,98,0}] isEqualToString: weiboL]) {
         break;
      }
   } while ((sansB == weiboL.length) && ([[NSString stringWithUTF8String:(char []){102,121,102,49,103,98,0}] isEqualToString: weiboL]));
      sliderc[2] &= weiboL.length;
   for (int h = 0; h < 2; h++) {
      morep[0] %= MAX(2 & weiboL.length, 2);
   }
       NSInteger floater0 = 0;
         floater0 %= MAX(1 - floater0, 1);
          double libcrashsdk7 = 5.0f;
          NSString * e_imagew = [NSString stringWithUTF8String:(char []){101,110,108,97,114,103,101,95,98,95,51,50,0}];
          unsigned char appsu[] = {155,244,227,14,135,207,137,171};
         floater0 %= MAX((int)libcrashsdk7, 4);
         libcrashsdk7 *= appsu[3] ^ 3;
         appsu[6] /= MAX(appsu[1] ^ 1, 5);
      for (int y = 0; y < 3; y++) {
         floater0 |= 1 << (MIN(1, labs(floater0)));
      }
      sansB += weiboL.length;

  [self sendEventWithName: kDelegatesLoadFailedKey  body: @{atPlacementIdKey: placementID,
                                                            atErrMsgKey: error.localizedDescription}];

}



- (void)interstitialDidFailToPlayVideoForPlacementID:(NSString *)placementID error:(NSError *)error extra:(NSDictionary *)extra {
       double tickedw = 5.0f;
    double downloading0 = 2.0f;
      downloading0 += (int)downloading0 & (int)tickedw;
       double placementI = 5.0f;
       char sigmob_[] = {(char)-4,(char)-86,(char)-48,(char)-12,3,107};
       NSDictionary * whistleD = @{[NSString stringWithUTF8String:(char []){111,95,57,52,0}]:@(606)};
         placementI *= whistleD.count >> (MIN(4, labs((int)placementI)));
      while (3 <= sigmob_[4]) {
          unsigned char sansp[] = {166,34,36,59,136,150,90};
          double sansv = 2.0f;
         sigmob_[0] *= whistleD.count * 1;
         NSInteger membershipF = sizeof(sansp) / sizeof(sansp[0]);
         sansp[4] >>= MIN(labs(membershipF % 1), 2);
         sansv /= MAX((int)sansv ^ 2, 5);
         break;
      }
      for (int x = 0; x < 1; x++) {
         placementI += sigmob_[1] - whistleD.allKeys.count;
      }
          int regengQ = 5;
          double emojiO = 5.0f;
         regengQ ^= whistleD.count;
         regengQ &= 2 - (int)emojiO;
         emojiO += (int)emojiO;
          char inviteu[] = {93,(char)-19,60,(char)-57};
          float reportd = 0.0f;
          unsigned char materialC[] = {160,2,32,10,107};
         long sends = sizeof(inviteu) / sizeof(inviteu[0]);
         sigmob_[4] ^= 1 / (MAX(9, sends));
         reportd += 2 & (int)reportd;
         materialC[0] *= 1;
      if (1 <= (5 ^ whistleD.count) && 5 <= (whistleD.count ^ 5)) {
         sigmob_[5] <<= MIN(labs((int)placementI), 2);
      }
       double awayA = 5.0f;
       double videocommonw = 0.0f;
      while (4 > (placementI / (MAX(sigmob_[4], 8))) && 4 > (placementI / (MAX(sigmob_[4], 10)))) {
         int quest6 = sizeof(sigmob_) / sizeof(sigmob_[0]);
         sigmob_[2] |= quest6 | 2;
         break;
      }
      do {
         placementI *= whistleD.count - 3;
         if (whistleD.count == 1411270) {
            break;
         }
      } while ((whistleD.count == 1411270) && (whistleD.count < placementI));
      downloading0 /= MAX(1, 1);
      downloading0 /= MAX(2, (int)downloading0);
      downloading0 *= 2;
      tickedw *= (int)tickedw;
   if ((tickedw * 5) >= 4.34f) {
       long dangerk = 1;
       BOOL forward9 = NO;
       BOOL middleware4 = YES;
      for (int v = 0; v < 2; v++) {
         middleware4 = (forward9 ? middleware4 : forward9);
      }
         dangerk ^= dangerk & 3;
      tickedw += (int)tickedw << (MIN(4, labs(dangerk)));
   }

  [self sendEventWithName: kDelegatesFailedToPlayKey  body: @{atPlacementIdKey: placementID,
                                                              atErrMsgKey: error.localizedDescription,
                                                              atExtraKey: extra.at_jsonString }];
}



+ (instancetype)allocWithZone:(struct _NSZone *)zone {
      __block NSString * dycreatorQ = [NSString stringWithUTF8String:(char []){109,97,116,104,95,108,95,50,57,0}];
   __block NSDictionary * resultt = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){98,101,105,103,110,101,116,95,52,95,50,51,0}],@(862), nil];
   if ((resultt.allKeys.count % 1) < 2 && (resultt.allKeys.count % (MAX(1, 1))) < 4) {
   }

    static dispatch_once_t zoom;
    dispatch_once(&zoom, ^{
        _instace = [super allocWithZone:zone];
    });
    return _instace;
   do {
       float inviteP = 4.0f;
      while (1.87f <= (inviteP * 4.49f) && (inviteP * inviteP) <= 4.49f) {
         inviteP /= MAX((int)inviteP, 4);
         break;
      }
      while (5.4f >= (inviteP - 3.67f) && 2.11f >= (3.67f - inviteP)) {
         inviteP -= (int)inviteP;
         break;
      }
      do {
         inviteP *= (int)inviteP / 1;
         if (inviteP == 555115.f) {
            break;
         }
      } while ((inviteP == 555115.f) && (inviteP <= 5.86f));
      inviteP *= dycreatorQ.length;
      if (1153758 == dycreatorQ.length) {
         break;
      }
   } while ((![dycreatorQ containsString:dycreatorQ]) && (1153758 == dycreatorQ.length));
}


- (void)interstitialDidClickForPlacementID:(NSString *)placementID extra:(NSDictionary *)extra {
       unsigned char stylesA[] = {160,80,215,94};
    int placeholder3 = 2;
   for (int a = 0; a < 3; a++) {
      NSInteger faviconA = sizeof(stylesA) / sizeof(stylesA[0]);
      stylesA[1] -= faviconA / 1;
   }
   while ((3 & stylesA[3]) >= 2 && 3 >= (placeholder3 & stylesA[3])) {
       unsigned char policyp[] = {48,75,184,220};
       NSArray * humidityD = @[@(345), @(686)];
       NSDictionary * common_ = @{[NSString stringWithUTF8String:(char []){121,117,118,103,98,114,112,95,110,95,55,50,0}]:@(447).stringValue};
       long previewN = 3;
          char agreementy[] = {(char)-67,(char)-81,(char)-72,53,95};
          long mintegral4 = 0;
          NSDictionary * transferk = @{[NSString stringWithUTF8String:(char []){99,97,112,97,99,105,116,121,95,98,95,50,48,0}]:@{[NSString stringWithUTF8String:(char []){110,105,115,116,95,52,95,52,54,0}]:@(336).stringValue, [NSString stringWithUTF8String:(char []){106,95,49,51,95,99,97,112,116,117,114,101,114,0}]:@(970).stringValue}};
         previewN <<= MIN(5, humidityD.count);
         agreementy[4] /= MAX(5, mintegral4);
         mintegral4 /= MAX(transferk.count, 1);
         mintegral4 += transferk.count;
       double weiboR = 1.0f;
       long mbbidJ = 5;
       long nativeex7 = 0;
      while ((policyp[2] / 5) > 5) {
         mbbidJ %= MAX(common_.count, 4);
         break;
      }
         previewN &= humidityD.count << (MIN(2, labs(previewN)));
      if ((5 << (MIN(3, labs(mbbidJ)))) > 4) {
         mbbidJ &= 1 >> (MIN(1, labs(previewN)));
      }
         mbbidJ *= (int)weiboR;
      do {
         weiboR += 2 + common_.count;
         if (weiboR == 4614826.f) {
            break;
         }
      } while ((weiboR == 4614826.f) && ((weiboR - 4.68f) > 5.64f || (weiboR - previewN) > 4.68f));
          NSString * holderL = [NSString stringWithUTF8String:(char []){100,95,50,52,95,104,97,110,100,108,101,115,0}];
          NSString * progressV = [NSString stringWithUTF8String:(char []){99,117,114,114,101,110,100,95,107,95,55,52,0}];
         mbbidJ += 1 % (MAX(previewN, 3));
       char editK[] = {28,4,82,47,93,(char)-81,63};
       unsigned char carouselc[] = {104,203,140,231,81,35,48,149,56};
         nativeex7 += common_.count;
      placeholder3 *= humidityD.count + placeholder3;
      break;
   }
      placeholder3 -= 3 % (MAX(10, stylesA[0]));
       unsigned char gestures_[] = {48,91,146,111,248,225,172,181,209};
      for (int s = 0; s < 1; s++) {
         long const_zV = sizeof(gestures_) / sizeof(gestures_[0]);
         long notificationC = sizeof(gestures_) / sizeof(gestures_[0]);
         gestures_[2] *= const_zV >> (MIN(labs(notificationC), 4));
      }
      for (int h = 0; h < 2; h++) {
         NSInteger actionZ = sizeof(gestures_) / sizeof(gestures_[0]);
         gestures_[6] |= actionZ;
      }
       int downloaded5 = 4;
      long cornerX = sizeof(gestures_) / sizeof(gestures_[0]);
      stylesA[3] ^= placeholder3 ^ cornerX;

  [self sendEventWithName: kDelegatesClickKey  body: @{atPlacementIdKey: placementID,
                                                       atExtraKey: extra.at_jsonString}];
}


- (NSArray<NSString *> *)supportedEvents {
       NSString * dragP = [NSString stringWithUTF8String:(char []){106,95,52,48,95,100,97,98,97,115,101,0}];
    char backwardb[] = {25,(char)-45};
      backwardb[1] *= dragP.length >> (MIN(labs(backwardb[0]), 4));

   self.logoIndex = 3946;

   self.sheetInternetBasketballString = [NSString stringWithUTF8String:(char []){112,105,112,101,108,105,110,101,0}];

   self.loginNavigation_arr = @[@(683), @(908)];

   self.enbale_Rewardvideo = YES;

   self.hasActivity = NO;

  return @[kDelegatesLoadedKey,
           kDelegatesLoadFailedKey,
           kDelegatesShowKey,
           kDelegatesVideoStartKey,
           kDelegatesVideoEndKey,
           kDelegatesCloseKey,
           kDelegatesClickKey,
           kDelegatesFailedToPlayKey,
           kDelegatesFailedToShowKey
  ];
   for (int s = 0; s < 2; s++) {
      backwardb[0] -= dragP.length / 3;
   }
       NSArray * private_hy = @[@(534), @(347), @(806)];
      for (int v = 0; v < 2; v++) {
      }
      while (5 > (1 ^ private_hy.count)) {
         break;
      }
      do {
         if (997181 == private_hy.count) {
            break;
         }
      } while ((997181 == private_hy.count) && (![private_hy containsObject:@(private_hy.count)]));
   if (dragP.length >= 5) {
   }
}

@end
