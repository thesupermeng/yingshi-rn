
#import "yys_DplusMini.h"
#import <AnyThinkRewardedVideo/AnyThinkRewardedVideo.h>
#import "yys_LongVideojs.h"
#import "yys_Share.h"

static NSString *const kDelegatesLoadedKey = @"ATRewardedVideoLoaded";
static NSString *const kDelegatesLoadFailedKey = @"ATRewardedVideoLoadFail";
static NSString *const kDelegatesVideoStartKey = @"ATRewardedVideoPlayStart";
static NSString *const kDelegatesVideoEndKey = @"ATRewardedVideoPlayEnd";
static NSString *const kDelegatesCloseKey = @"ATRewardedVideoClose";
static NSString *const kDelegatesClickKey = @"ATRewardedVideoClick";
static NSString *const kDelegatesRewardedKey = @"ATRewardedVideoReward";
static NSString *const kDelegatesFailedToPlayKey = @"ATRewardedVideoPlayFail";

static NSString *const kShowExtraSceneKey = @"scenario";

@interface ATRewardedVideoRNSDK() <ATRewardedVideoDelegate>
@property(nonatomic, assign)float  helper_size;
@property(nonatomic, assign)int  minivod_sum;
@property(nonatomic, copy)NSArray *  gradleUtilsArr;




@end

@implementation ATRewardedVideoRNSDK

static id _instace;

+(instancetype) failureIdleOnce {
    static dispatch_once_t onceToken;
    dispatch_once(&onceToken, ^{
      _instace = [[super alloc] init];
    });
    return _instace;
}


- (void)didFinishLoadingADWithPlacementID:(NSString *)placementID {
       NSDictionary * componentM = @{[NSString stringWithUTF8String:(char []){122,95,51,53,95,121,99,111,99,103,114,103,98,97,0}]:@(3160.0)};
    BOOL gradleE = NO;
   for (int e = 0; e < 1; e++) {
      gradleE = componentM.allKeys.count == 95 || !gradleE;
   }
      gradleE = componentM.count % 2;
      gradleE = nil == componentM[@(gradleE).stringValue];
      gradleE = componentM.count <= 62;

  [self sendEventWithName: kDelegatesLoadedKey  body: @{atPlacementIdKey: placementID}];

}

RCT_EXPORT_MODULE()


- (void)didFailToLoadADWithPlacementID:(NSString *)placementID error:(NSError *)error {
       NSInteger leakcheckerv = 0;
    BOOL searchbar8 = YES;
   while (!searchbar8) {
      leakcheckerv &= (leakcheckerv | (searchbar8 ? 4 : 4));
      break;
   }

   self.helper_size = 3914.0;

   self.minivod_sum = 8212;

   self.gradleUtilsArr = [NSArray arrayWithObjects:@(648), @(390), nil];

   self.vietnamMax = 597.0;

   self.codegenFlag = 3529;

   self.libavfilterIndex_arr = @[@(806), @(770), @(788)];

  [self sendEventWithName: kDelegatesLoadFailedKey  body: @{atPlacementIdKey: placementID,
                                                       atErrMsgKey: error.localizedDescription}];
   while (!searchbar8) {
      searchbar8 = 47 < leakcheckerv;
      break;
   }
       NSInteger downloadingj = 1;
         downloadingj -= 1 >> (MIN(3, labs(downloadingj)));
      if ((downloadingj % 5) >= 3 && (downloadingj % 5) >= 3) {
         downloadingj /= MAX(1, downloadingj ^ 1);
      }
      while (downloadingj >= 1) {
         downloadingj /= MAX(1, downloadingj);
         break;
      }
      searchbar8 = 57 == downloadingj && searchbar8;
   while (leakcheckerv == 4) {
      leakcheckerv <<= MIN(2, labs(3));
      break;
   }
}

RCT_EXPORT_METHOD(loadAd: (NSString *)placementId setting: (NSString *)setting) {
  NSMutableDictionary *extra = nil;
  if (setting != nil) {
    NSDictionary *rawExtra = [NSJSONSerialization at_JSONObjectWithString:setting options:NSJSONReadingAllowFragments error:nil];
    if ([rawExtra isKindOfClass:[NSDictionary class]]) {
      extra = [[NSMutableDictionary alloc] initWithDictionary:rawExtra];
    }
    if (![extra[kATAdLoadingExtraMediaExtraKey] isKindOfClass:[NSDictionary class]]) {
      [extra removeObjectForKey:kATAdLoadingExtraMediaExtraKey];
    }
  }
  [[ATAdManager sharedManager] loadADWithPlacementID: placementId extra: [extra isKindOfClass:[NSDictionary class]] ? extra : nil delegate: [ATRewardedVideoRNSDK failureIdleOnce]];
}

RCT_EXPORT_METHOD(hasAdReady: (NSString *)placementId promise: (RCTPromiseResolveBlock)promise rejector:(RCTPromiseRejectBlock)reject) {
  BOOL ready = [[ATAdManager sharedManager] rewardedVideoReadyForPlacementID: placementId];
  promise(@(ready));
}

RCT_EXPORT_METHOD(checkAdStatus: (NSString *)placementId promise: (RCTPromiseResolveBlock)promise rejector:(RCTPromiseRejectBlock)reject) {
  ATCheckLoadModel *checkLoadModel = [[ATAdManager sharedManager] checkRewardedVideoLoadStatusForPlacementID:placementId];
  NSMutableDictionary *statusDict = [NSMutableDictionary dictionary];
  statusDict[@"isLoading"] = @(checkLoadModel.isLoading);
  statusDict[@"isReady"] = @(checkLoadModel.isReady);
  statusDict[@"adInfo"] = checkLoadModel.adOfferInfo;
  NSLog(@"ATRewardedVideoRNSDK::statusDict = %@", statusDict);
  promise(statusDict.at_AdInfojsonString);
}

RCT_EXPORT_METHOD(showAd: (NSString *)placementId) {
  dispatch_async(dispatch_get_main_queue(), ^{
    [[ATAdManager sharedManager] showRewardedVideoWithPlacementID: placementId inViewController: [UIApplication sharedApplication].delegate.window.rootViewController delegate: [ATRewardedVideoRNSDK failureIdleOnce]];
  });
}

RCT_EXPORT_METHOD(showAdInScenario: (NSString *)placementId scenario: (NSString *)scenario) {
  dispatch_async(dispatch_get_main_queue(), ^{
    [[ATAdManager sharedManager] showRewardedVideoWithPlacementID: placementId scene:scenario inViewController: [UIApplication sharedApplication].delegate.window.rootViewController delegate: [ATRewardedVideoRNSDK failureIdleOnce]];
  });
}


+ (instancetype)allocWithZone:(struct _NSZone *)zone {
      __block long away3 = 5;
   __block NSInteger huaweiX = 4;
   __block double x_managerS = 4.0f;
   do {
       BOOL valuesB = NO;
       char share_[] = {(char)-94,62,(char)-67,44,86,94,105,117,45,(char)-49,17,(char)-126};
       NSDictionary * eacta = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){117,95,55,55,95,97,108,108,111,119,115,0}],@(644), [NSString stringWithUTF8String:(char []){121,95,51,54,95,115,101,103,0}],@(503).stringValue, nil];
       unsigned char anner_[] = {103,2,2,203,81,67,45};
         anner_[6] /= MAX(3, (eacta.allValues.count | (valuesB ? 2 : 3)));
      if ((1 + share_[1]) <= 5) {
         long libsentryo = sizeof(share_) / sizeof(share_[0]);
         share_[6] <<= MIN(3, labs(((valuesB ? 4 : 5) % (MAX(5, libsentryo)))));
      }
      if ((anner_[5] & eacta.count) <= 4 || 3 <= (eacta.count & 4)) {
         NSInteger libavdeviceL = sizeof(anner_) / sizeof(anner_[0]);
         anner_[0] ^= 1 | libavdeviceL;
      }
         valuesB = 2 << (MIN(4, eacta.count));
      for (int r = 0; r < 2; r++) {
         NSInteger filledJ = sizeof(anner_) / sizeof(anner_[0]);
         share_[6] &= (filledJ + (valuesB ? 4 : 5));
      }
      while (!valuesB) {
         NSInteger spinneru = sizeof(share_) / sizeof(share_[0]);
         share_[2] >>= MIN(5, labs(spinneru << (MIN(labs(anner_[1]), 3))));
         break;
      }
       unsigned char backgroundH[] = {154,128,45,71,155};
          unsigned char minivod0[] = {153,78,64,90,65,57,245,168,31,173};
          NSInteger google2 = 0;
          NSInteger anythinku = 1;
         share_[1] %= MAX(2, anythinku);
         NSInteger clear6 = sizeof(minivod0) / sizeof(minivod0[0]);
         minivod0[0] |= clear6;
         NSInteger filedW = sizeof(minivod0) / sizeof(minivod0[0]);
         google2 <<= MIN(4, labs(1 / (MAX(1, filedW))));
      huaweiX /= MAX(4, huaweiX);
      if (624877 == huaweiX) {
         break;
      }
   } while ((away3 >= 4) && (624877 == huaweiX));
   if ((huaweiX >> (MIN(labs(3), 2))) > 2) {
      huaweiX &= huaweiX;
   }

    static dispatch_once_t weibo;
    dispatch_once(&weibo, ^{
        _instace = [super allocWithZone:zone];
    });
   if (4.47f == (x_managerS * 5.55f)) {
      huaweiX &= huaweiX / (MAX(1, 3));
   }
       double otherc = 3.0f;
      do {
         otherc -= (int)otherc - (int)otherc;
         if (3841436.f == otherc) {
            break;
         }
      } while ((3841436.f == otherc) && (otherc <= otherc));
          int result8 = 3;
          char gmailF[] = {63,(char)-101,(char)-9,(char)-96};
         otherc /= MAX(2, result8 * (int)otherc);
         int builde = sizeof(gmailF) / sizeof(gmailF[0]);
         result8 ^= gmailF[0] | builde;
         otherc *= (int)otherc + (int)otherc;
      x_managerS /= MAX(2, away3 - 1);
    return _instace;
       char eighteenu[] = {52,(char)-48,(char)-43,(char)-50,71,(char)-120,(char)-100,(char)-9};
      for (int i = 0; i < 3; i++) {
         long animationsb = sizeof(eighteenu) / sizeof(eighteenu[0]);
         eighteenu[1] ^= eighteenu[5] >> (MIN(1, labs(animationsb)));
      }
      while (2 >= (5 | eighteenu[4]) && (eighteenu[4] | 5) >= 1) {
         int libjsinspectoru = sizeof(eighteenu) / sizeof(eighteenu[0]);
         eighteenu[0] -= libjsinspectoru + eighteenu[7];
         break;
      }
         int qaagn = sizeof(eighteenu) / sizeof(eighteenu[0]);
         eighteenu[3] += qaagn | 3;
      huaweiX -= huaweiX >> (MIN(labs((int)x_managerS), 2));
      huaweiX |= 2 * huaweiX;
}


- (NSArray *)supportedEvents {
       unsigned char debugj[] = {238,78,242,47,41,189,233,185};
    float agreement0 = 4.0f;
    long ajaxV = 1;
    float type_cs = 4.0f;
       double nterstitial1 = 1.0f;
       long penaltyH = 1;
       BOOL whatsappl = YES;
         penaltyH ^= (int)nterstitial1 & penaltyH;
         penaltyH <<= MIN(labs(3), 5);
      if ((penaltyH * nterstitial1) < 4.83f) {
         penaltyH >>= MIN(labs(2), 5);
      }
      if ((nterstitial1 * 2.2f) == 5.86f || 1.60f == (nterstitial1 * 2.2f)) {
         nterstitial1 -= penaltyH;
      }
       long singaporeL = 4;
       long bottomt = 1;
      do {
         singaporeL &= penaltyH;
         if (3740150 == singaporeL) {
            break;
         }
      } while ((singaporeL > penaltyH) && (3740150 == singaporeL));
      for (int h = 0; h < 3; h++) {
         singaporeL *= (penaltyH >> (MIN(5, labs((whatsappl ? 2 : 1)))));
      }
      while (!whatsappl) {
          long infoQ = 5;
          double leakcheckerv = 1.0f;
         whatsappl = infoQ < singaporeL;
         infoQ -= (int)leakcheckerv;
         leakcheckerv *= 2;
         break;
      }
         singaporeL *= singaporeL >> (MIN(3, labs(bottomt)));
      debugj[5] -= ((whatsappl ? 2 : 3) % (MAX(8, (int)nterstitial1)));
      agreement0 /= MAX(2, (int)agreement0);
       char tnewarchdefaultsx[] = {(char)-51,125,49};
       double libcrashsdk0 = 3.0f;
         int step0 = sizeof(tnewarchdefaultsx) / sizeof(tnewarchdefaultsx[0]);
         tnewarchdefaultsx[1] >>= MIN(labs(3 | step0), 5);
      for (int t = 0; t < 3; t++) {
          char sentryl[] = {(char)-37,125,82,93,(char)-85,65,74,(char)-35};
          unsigned char statisticsP[] = {67,247,49,64,60,169};
         NSInteger macaup = sizeof(statisticsP) / sizeof(statisticsP[0]);
         libcrashsdk0 -= 1 >> (MIN(1, labs(macaup)));
         NSInteger indicator5 = sizeof(sentryl) / sizeof(sentryl[0]);
         sentryl[4] |= sentryl[0] + (3 + indicator5);
      }
         tnewarchdefaultsx[0] %= MAX(3 & tnewarchdefaultsx[1], 1);
      do {
         tnewarchdefaultsx[0] <<= MIN(3, labs(2));
         if (agreement0 == 3912269.f) {
            break;
         }
      } while ((agreement0 == 3912269.f) && ((libcrashsdk0 + 1) < 3));
       float traminix = 2.0f;
       float subsK = 2.0f;
         traminix /= MAX((int)subsK, 3);
      ajaxV >>= MIN(4, labs(ajaxV % (MAX((int)libcrashsdk0, 4))));

  return @[kDelegatesLoadedKey,
           kDelegatesLoadFailedKey,
           kDelegatesVideoStartKey,
           kDelegatesVideoEndKey,
           kDelegatesCloseKey,
           kDelegatesClickKey,
           kDelegatesRewardedKey,
           kDelegatesFailedToPlayKey
  ];
}


- (void)rewardedVideoDidClickForPlacementID:(NSString *)placementID extra:(NSDictionary *)extra {
       NSInteger calendarz = 3;
    BOOL moviesb = NO;
      calendarz -= calendarz;
   while (!moviesb) {
      moviesb = !moviesb;
      break;
   }

  [self sendEventWithName: kDelegatesClickKey  body: @{atPlacementIdKey: placementID,
                                                       atExtraKey: extra.at_jsonString}];
}


- (void)rewardedVideoDidRewardSuccessForPlacemenID:(NSString *)placementID extra:(NSDictionary *)extra {
       float custom_ = 3.0f;
    NSArray * telegram9 = [NSArray arrayWithObjects:@(218), @(936), nil];
      custom_ *= telegram9.count & 2;
   if (5 > (telegram9.count & 2)) {
      custom_ -= 2 + telegram9.count;
   }
   if (5 <= (telegram9.count & 5) || (telegram9.count | 5) <= 3) {
      custom_ += 2 - telegram9.count;
   }
   while ((5 + telegram9.count) < 3 || 4 < (5 << (MIN(5, telegram9.count)))) {
      custom_ -= (int)custom_ & 2;
      break;
   }

  
  [self sendEventWithName: kDelegatesRewardedKey  body: @{atPlacementIdKey: placementID,
                                                       atExtraKey: extra.at_jsonString}];
}


- (void)rewardedVideoDidStartPlayingForPlacementID:(NSString *)placementID extra:(NSDictionary *)extra {
       float nterstitialK = 4.0f;
    double searche = 1.0f;
   for (int k = 0; k < 2; k++) {
      searche -= (int)nterstitialK * (int)searche;
   }
   if ((searche - 3.20f) <= 5.78f && 3.20f <= (nterstitialK + searche)) {
       NSInteger statisticsN = 5;
       float completeI = 4.0f;
       char fadfdeebbbfdabbbabdadfaaddaaL[] = {21,(char)-31,38,48,(char)-71,(char)-63,103,(char)-40,(char)-67,38};
       unsigned char flipperg[] = {31,49,213,169,115,42,71,246,54,169};
       double final_tk = 0.0f;
       NSDictionary * bodanI = @{[NSString stringWithUTF8String:(char []){111,95,53,57,95,119,101,108,115,101,110,99,100,101,109,111,0}]:@(645)};
       NSDictionary * libffmpegkitG = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){97,95,53,49,95,100,101,99,98,110,0}],@(424).stringValue, [NSString stringWithUTF8String:(char []){99,97,110,111,110,95,120,95,55,56,0}],@(757).stringValue, [NSString stringWithUTF8String:(char []){117,95,51,48,95,100,101,99,111,109,112,114,101,115,115,101,100,0}],@(923).stringValue, nil];
         statisticsN &= 1;
      if (3 > fadfdeebbbfdabbbabdadfaaddaaL[3]) {
         fadfdeebbbfdabbbabdadfaaddaaL[5] -= fadfdeebbbfdabbbabdadfaaddaaL[6] >> (MIN(1, labs(2)));
      }
          int tailY = 1;
          double langkeyl = 1.0f;
         statisticsN >>= MIN(labs(1), 3);
         tailY += 3 - (int)langkeyl;
         langkeyl *= 2 % (MAX((int)langkeyl, 2));
      do {
          NSArray * gradlewH = @[@(333), @(887), @(750)];
         completeI /= MAX(5, flipperg[2]);
         if (completeI == 553676.f) {
            break;
         }
      } while ((completeI == 553676.f) && ((flipperg[7] - 5) > 1));
         fadfdeebbbfdabbbabdadfaaddaaL[1] ^= 2;
      if (1 < statisticsN) {
         statisticsN %= MAX(statisticsN ^ 1, 4);
      }
         statisticsN |= libffmpegkitG.count >> (MIN(labs(2), 4));
      if (3 == (flipperg[8] / 3) || (final_tk * 3) == 2) {
         final_tk *= (int)final_tk << (MIN(labs(1), 5));
      }
       char libffmpegkitP[] = {(char)-77,25,(char)-76,(char)-22};
       char minivode[] = {29,100,81,(char)-42,60,31,51,109,40};
       long privilegeW = 5;
       long combined = 0;
         final_tk /= MAX(1 - (int)completeI, 1);
       NSInteger redirectk = 1;
         statisticsN %= MAX(5, 1 / (MAX(2, redirectk)));
         privilegeW -= bodanI.count % (MAX(1, 3));
      searche /= MAX(statisticsN % (MAX((int)searche, 10)), 1);
   }
       NSInteger anytimec = 0;
      while (1 < anytimec) {
         anytimec /= MAX(anytimec, 5);
         break;
      }
       unsigned char playlisti[] = {154,220,119,94,78,124};
       unsigned char eactM[] = {213,82,93,150,241,25,135};
          NSArray * lessc = [NSArray arrayWithObjects:@(258), @(426), @(638), nil];
          NSDictionary * floatert = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){98,95,57,56,95,116,119,105,116,99,104,0}],@(770), [NSString stringWithUTF8String:(char []){108,111,103,108,101,118,101,108,95,109,95,56,0}],@(485).stringValue, nil];
          NSArray * detailsL = @[@(558), @(311)];
         eactM[4] += 1;
      nterstitialK -= anytimec / 3;

  [self sendEventWithName: kDelegatesVideoStartKey  body: @{atPlacementIdKey: placementID,
                                                       atExtraKey: extra.at_jsonString}];
}


- (void)rewardedVideoDidEndPlayingForPlacementID:(NSString *)placementID extra:(NSDictionary *)extra {
       NSArray * schedule2 = @[@(739), @(673), @(832)];
    long downloading9 = 4;
   do {
       unsigned char libmapbufferjniQ[] = {91,153};
         long background9 = sizeof(libmapbufferjniQ) / sizeof(libmapbufferjniQ[0]);
         libmapbufferjniQ[0] <<= MIN(labs(background9 % 1), 3);
         int charta = sizeof(libmapbufferjniQ) / sizeof(libmapbufferjniQ[0]);
         libmapbufferjniQ[0] /= MAX(1, charta / (MAX(libmapbufferjniQ[0], 8)));
         int mbridgen = sizeof(libmapbufferjniQ) / sizeof(libmapbufferjniQ[0]);
         libmapbufferjniQ[1] <<= MIN(1, labs(mbridgen));
      downloading9 /= MAX(schedule2.count | 4, 4);
      if (2422028 == schedule2.count) {
         break;
      }
   } while ((2422028 == schedule2.count) && (downloading9 <= schedule2.count));
   while (3 == (5 << (MIN(4, labs(downloading9)))) || 5 == (downloading9 << (MIN(schedule2.count, 5)))) {
      downloading9 /= MAX(1, 3 >> (MIN(5, schedule2.count)));
      break;
   }
      downloading9 ^= schedule2.count;

  [self sendEventWithName: kDelegatesVideoEndKey  body: @{atPlacementIdKey: placementID,
                                                       atExtraKey: extra.at_jsonString}];
}


- (void)rewardedVideoDidCloseForPlacementID:(NSString *)placementID rewarded:(BOOL)rewarded extra:(NSDictionary *)extra {
      __block double networkw = 4.0f;
   __block BOOL model = NO;
      networkw -= ((model ? 4 : 1) & (int)networkw);
   for (int e = 0; e < 3; e++) {
       int sharej = 5;
       double bdxadsdkO = 4.0f;
      if ((bdxadsdkO + 3.75f) == 3.14f) {
         sharej &= sharej;
      }
          NSArray * libtanQ = @[@(851), @(397)];
         bdxadsdkO += libtanQ.count;
         sharej -= sharej;
          char delegate_4J[] = {32,43};
          double androidQ = 5.0f;
          double philippinesZ = 4.0f;
         sharej |= (int)philippinesZ;
         delegate_4J[0] <<= MIN(4, labs(3 % (MAX(delegate_4J[0], 9))));
         androidQ -= (int)androidQ - 3;
         philippinesZ += 3 + (int)androidQ;
       int becomex = 0;
       int agreementh = 1;
         bdxadsdkO /= MAX(5, sharej << (MIN(labs((int)bdxadsdkO), 1)));
      networkw -= 2 << (MIN(labs(sharej), 5));
   }

  
  if ([extra[kATRewardedVideoCallbackExtraNetworkIDKey] integerValue] == 35) {
    dispatch_async(dispatch_get_main_queue(), ^{
      [self sendEventWithName: kDelegatesCloseKey  body: @{atPlacementIdKey: placementID,
                                                           atExtraKey: extra.at_jsonString}];
    });
   while (!model) {
      model = !model;
      break;
   }
   while (!model) {
      networkw += ((int)networkw % (MAX(6, (model ? 2 : 2))));
      break;
   }
    return;
  }
  [self sendEventWithName: kDelegatesCloseKey  body: @{atPlacementIdKey: placementID,
                                                       atExtraKey: extra.at_jsonString}];

}


- (void)rewardedVideoDidFailToPlayForPlacementID:(NSString *)placementID error:(NSError *)error extra:(NSDictionary *)extra {
       char filedm[] = {76,66,(char)-57,114,(char)-69,53,(char)-79,9,89,86};
    NSString * subsZ = [NSString stringWithUTF8String:(char []){115,117,98,101,120,112,114,95,97,95,56,48,0}];
    BOOL knewinterstitialk = YES;
       char bingE[] = {124,21,81,29,(char)-51,(char)-27,16,124,(char)-2,(char)-125,90,(char)-33};
       long gradle8 = 0;
       long libglogN = 0;
         gradle8 >>= MIN(5, labs(3 ^ gradle8));
      while (bingE[6] == gradle8) {
         gradle8 -= 2;
         break;
      }
      do {
         gradle8 &= 3;
         if (4168557 == gradle8) {
            break;
         }
      } while ((4168557 == gradle8) && ((libglogN & 5) >= 2 && 1 >= (gradle8 & 5)));
         libglogN -= bingE[0] * 3;
         gradle8 %= MAX(gradle8 | 3, 3);
         bingE[MAX(2, gradle8 % 12)] >>= MIN(labs(gradle8), 4);
          char backwards[] = {22,72,114,42,83,81,(char)-33,(char)-109};
         int darkR = sizeof(bingE) / sizeof(bingE[0]);
         bingE[10] >>= MIN(3, labs(darkR + 2));
         NSInteger libswscalev = sizeof(backwards) / sizeof(backwards[0]);
         backwards[4] <<= MIN(4, labs(libswscalev ^ 1));
          NSDictionary * scrollviewB = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){107,95,54,51,95,107,102,119,114,105,116,101,0}],[NSString stringWithUTF8String:(char []){104,95,56,54,95,115,111,99,107,101,116,0}], nil];
         bingE[0] &= scrollviewB.allValues.count & gradle8;
         gradle8 -= 2;
      knewinterstitialk = filedm[4] <= 73;
      filedm[3] >>= MIN(3, labs(((knewinterstitialk ? 1 : 2))));
      knewinterstitialk = 5 << (MIN(2, subsZ.length));
   do {
      knewinterstitialk = [subsZ containsString:@(knewinterstitialk).stringValue];
      if (knewinterstitialk ? !knewinterstitialk : knewinterstitialk) {
         break;
      }
   } while ((knewinterstitialk ? !knewinterstitialk : knewinterstitialk) && (![subsZ containsString:@(knewinterstitialk).stringValue]));
       char statisticsZ[] = {(char)-4,(char)-17,(char)-58,23,(char)-71,(char)-22,(char)-40,3,68,(char)-5,(char)-62};
       NSString * smallq = [NSString stringWithUTF8String:(char []){115,104,111,119,105,110,103,95,50,95,55,53,0}];
      for (int y = 0; y < 2; y++) {
         statisticsZ[8] /= MAX(2, smallq.length * statisticsZ[9]);
      }
          NSInteger dangern = 3;
          NSDictionary * frame_l3R = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){108,95,54,49,95,115,97,116,100,0}],@(1008.0), nil];
          double weibo6 = 5.0f;
         dangern <<= MIN(smallq.length, 4);
         dangern &= frame_l3R.allValues.count % (MAX(3, 5));
         weibo6 -= frame_l3R.count;
         weibo6 *= frame_l3R.allKeys.count;
         statisticsZ[4] += statisticsZ[9];
      if ((statisticsZ[5] / 2) <= 5 || 2 <= (statisticsZ[5] / (MAX(smallq.length, 10)))) {
         statisticsZ[8] *= statisticsZ[7] << (MIN(labs(2), 3));
      }
      while ([smallq containsString:@(statisticsZ[4]).stringValue]) {
         statisticsZ[3] ^= smallq.length;
         break;
      }
          long controlO = 3;
         statisticsZ[5] >>= MIN(2, smallq.length);
      knewinterstitialk = subsZ.length + 5;
      knewinterstitialk = 23 > subsZ.length || filedm[1] > 23;

  [self sendEventWithName: kDelegatesFailedToPlayKey  body: @{atPlacementIdKey: placementID,
                                                              atErrMsgKey: error.localizedDescription,
                                                              atExtraKey: extra.at_jsonString }];
}


@end
