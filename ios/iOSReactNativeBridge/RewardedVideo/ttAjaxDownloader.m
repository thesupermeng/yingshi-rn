
#import "ttAjaxDownloader.h"
#import <AnyThinkRewardedVideo/AnyThinkRewardedVideo.h>
#import "ttLockOrange.h"
#import "ttTrashAction.h"
#import "ttLeftController.h"


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
@property(nonatomic, assign)BOOL  enbale_Emoji;
@property(nonatomic, assign)double  dark_max;
@property(nonatomic, assign)long  combineIndex;
@property(nonatomic, copy)NSString *  megaphoneArrowStr;




@end

@implementation ATRewardedVideoRNSDK

static id _instace;

+(instancetype) whiteReloadValidScenario {
    static dispatch_once_t onceToken;
    dispatch_once(&onceToken, ^{
      _instace = [[super alloc] init];
    });
    return _instace;
}


- (void)rewardedVideoDidStartPlayingForPlacementID:(NSString *)placementID extra:(NSDictionary *)extra {
       NSArray * mbjscommonT = @[@(705), @(986), @(239)];
    long membershipo = 3;
   do {
      membershipo |= mbjscommonT.count;
      if (4675092 == mbjscommonT.count) {
         break;
      }
   } while ((4675092 == mbjscommonT.count) && (4 >= (2 + mbjscommonT.count)));
   do {
      membershipo >>= MIN(labs(mbjscommonT.count % 5), 4);
      if (1692161 == mbjscommonT.count) {
         break;
      }
   } while ((1692161 == mbjscommonT.count) && ((2 << (MIN(3, labs(membershipo)))) >= 5 && 3 >= (2 << (MIN(2, labs(membershipo))))));

  [self sendEventWithName: kDelegatesVideoStartKey  body: @{atPlacementIdKey: placementID,
                                                       atExtraKey: extra.at_jsonString}];
}

RCT_EXPORT_MODULE()


- (void)rewardedVideoDidEndPlayingForPlacementID:(NSString *)placementID extra:(NSDictionary *)extra {
       char mathT[] = {47,59,(char)-33,(char)-91,53,14};
    int services = 2;
    long main_uj = 3;
   while (services < 2) {
      int goalg = sizeof(mathT) / sizeof(mathT[0]);
      mathT[3] /= MAX(1 / (MAX(9, goalg)), 1);
      break;
   }

   self.enbale_Emoji = NO;

   self.dark_max = 1322.0;

   self.combineIndex = 9391;

   self.megaphoneArrowStr = [NSString stringWithUTF8String:(char []){106,115,105,109,100,0}];

   self.becomeIdx = 7447;

   self.yellow_index = 6478;

  [self sendEventWithName: kDelegatesVideoEndKey  body: @{atPlacementIdKey: placementID,
                                                       atExtraKey: extra.at_jsonString}];
      mathT[MAX(services % 6, 2)] <<= MIN(3, labs(services | 3));
       long fastg = 2;
       int mimoh = 1;
       NSString * searchp = [NSString stringWithUTF8String:(char []){114,108,111,116,116,105,101,99,111,109,109,111,110,95,113,95,57,50,0}];
         mimoh &= searchp.length & 4;
      while (mimoh <= 5) {
          BOOL pingR = NO;
         mimoh >>= MIN(4, labs(mimoh));
         pingR = pingR || !pingR;
         break;
      }
         mimoh *= mimoh;
      do {
          BOOL componente = YES;
          unsigned char playlistv[] = {28,123};
          char stringv[] = {51,(char)-93,1,(char)-17,(char)-93,40,(char)-19};
         mimoh &= fastg;
         componente = componente;
         playlistv[1] <<= MIN(2, labs(((componente ? 5 : 2) % 3)));
         stringv[0] %= MAX(3, 1);
         if (3307648 == mimoh) {
            break;
         }
      } while ((3307648 == mimoh) && (fastg <= mimoh));
         mimoh /= MAX(1, 1);
         mimoh += searchp.length ^ 4;
         fastg /= MAX(2 >> (MIN(1, searchp.length)), 4);
      do {
         mimoh ^= 1 & fastg;
         if (mimoh == 3556981) {
            break;
         }
      } while ((mimoh == 3556981) && (5 <= (mimoh + searchp.length) && (searchp.length + 5) <= 5));
      while ((fastg - mimoh) < 4 || (fastg - mimoh) < 4) {
          double modelsA = 3.0f;
          char time_c4c[] = {(char)-93,(char)-78,(char)-43,(char)-55,74,49,(char)-74};
          int setting9 = 1;
          double playm = 2.0f;
         fastg <<= MIN(5, labs((int)playm ^ fastg));
         modelsA += setting9;
         time_c4c[MAX(setting9 % 7, 4)] /= MAX(setting9 / (MAX(time_c4c[0], 6)), 4);
         playm -= setting9;
         break;
      }
      main_uj += 2;
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
  [[ATAdManager sharedManager] loadADWithPlacementID: placementId extra: [extra isKindOfClass:[NSDictionary class]] ? extra : nil delegate: [ATRewardedVideoRNSDK whiteReloadValidScenario]];
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
    [[ATAdManager sharedManager] showRewardedVideoWithPlacementID: placementId inViewController: [UIApplication sharedApplication].delegate.window.rootViewController delegate: [ATRewardedVideoRNSDK whiteReloadValidScenario]];
  });
}

RCT_EXPORT_METHOD(showAdInScenario: (NSString *)placementId scenario: (NSString *)scenario) {
  dispatch_async(dispatch_get_main_queue(), ^{
    [[ATAdManager sharedManager] showRewardedVideoWithPlacementID: placementId scene:scenario inViewController: [UIApplication sharedApplication].delegate.window.rootViewController delegate: [ATRewardedVideoRNSDK whiteReloadValidScenario]];
  });
}


+ (instancetype)allocWithZone:(struct _NSZone *)zone {
      __block NSArray * relatedn = @[@(568), @(801), @(127)];
   __block NSDictionary * colorsh = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){99,111,109,112,111,115,101,100,95,53,95,56,54,0}],@(946).stringValue, nil];

    static dispatch_once_t zoom;
    dispatch_once(&zoom, ^{
        _instace = [super allocWithZone:zone];
    });
       unsigned char forwardy[] = {69,149,98,204};
       unsigned char catagoryr[] = {47,167,73,93,178,107,149,223,234,37,187};
      for (int v = 0; v < 1; v++) {
         int predictionP = sizeof(forwardy) / sizeof(forwardy[0]);
         forwardy[1] <<= MIN(5, labs(1 * predictionP));
      }
         int filledT = sizeof(catagoryr) / sizeof(catagoryr[0]);
         forwardy[1] += 1 * filledT;
      if (4 <= (forwardy[3] + 2)) {
         int redirects = sizeof(catagoryr) / sizeof(catagoryr[0]);
         int plashm = sizeof(forwardy) / sizeof(forwardy[0]);
         forwardy[3] ^= redirects >> (MIN(labs(plashm), 1));
      }
       double sansk = 2.0f;
       double founda = 0.0f;
      for (int l = 0; l < 1; l++) {
          char shoot7[] = {(char)-41,60,(char)-6,52};
          NSString * combinede = [NSString stringWithUTF8String:(char []){105,100,97,116,97,95,109,95,54,55,0}];
          NSArray * updatesv = @[@(736), @(220)];
          NSDictionary * vignetteb = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){112,111,105,110,116,115,95,113,95,53,54,0}],@(487), nil];
         catagoryr[6] <<= MIN(5, labs(updatesv.count + 2));
         shoot7[2] /= MAX(3, shoot7[1] % 3);
      }
         forwardy[0] *= (int)founda;
    return _instace;
   if ((relatedn.count >> (MIN(4, relatedn.count))) <= 5) {
   }
}


- (void)rewardedVideoDidFailToPlayForPlacementID:(NSString *)placementID error:(NSError *)error extra:(NSDictionary *)extra {
       unsigned char team2[] = {233,22,240,104,176};
    float editS = 3.0f;
    double handlerb = 2.0f;
   while (5 == (3 / (MAX(7, editS))) && 3 == (team2[4] / (MAX(5, editS)))) {
      editS += (int)handlerb % 1;
      break;
   }
   do {
       long crossJ = 2;
       NSString * weiboh = [NSString stringWithUTF8String:(char []){115,95,50,53,95,101,120,99,104,97,110,103,101,115,0}];
       unsigned char liveK[] = {22,187,244,70,188,239,215,201,180,155,73};
       char trashj[] = {(char)-119,10,62,57,97,105,(char)-98,(char)-4,(char)-15,49};
          NSString * dice1 = [NSString stringWithUTF8String:(char []){115,116,114,105,110,103,117,116,105,108,115,95,122,95,49,52,0}];
         trashj[5] &= weiboh.length;
      if ((5 ^ liveK[7]) == 3) {
         liveK[2] += 2 ^ weiboh.length;
      }
      do {
          int smallF = 3;
          char showT[] = {(char)-85,(char)-42,(char)-101,(char)-81,11,(char)-118,103,(char)-72,(char)-127,80,(char)-85,(char)-21};
         long upgradea = sizeof(liveK) / sizeof(liveK[0]);
         crossJ += crossJ % (MAX(upgradea, 7));
         long umengv = sizeof(showT) / sizeof(showT[0]);
         smallF <<= MIN(4, labs(smallF >> (MIN(labs(umengv), 4))));
         if (crossJ == 2910711) {
            break;
         }
      } while ((1 == crossJ) && (crossJ == 2910711));
      do {
          NSDictionary * successk = @{[NSString stringWithUTF8String:(char []){108,95,49,53,95,108,97,122,105,108,121,0}]:@(77).stringValue, [NSString stringWithUTF8String:(char []){115,95,50,55,95,116,114,97,110,115,112,111,114,116,0}]:@(951).stringValue, [NSString stringWithUTF8String:(char []){108,111,97,100,101,100,95,107,95,51,51,0}]:@(577).stringValue};
          BOOL moder = NO;
          float sliderE = 3.0f;
          float mapping7 = 4.0f;
          float chatC = 1.0f;
         int catalogn = sizeof(liveK) / sizeof(liveK[0]);
         trashj[0] &= catalogn;
         mapping7 /= MAX(4, successk.count);
         moder = sliderE == 41.79f || moder;
         sliderE += 2;
         mapping7 -= 3 - (int)sliderE;
         chatC += 1;
         sliderE *= successk.count;
         if (editS == 4450939.f) {
            break;
         }
      } while ((liveK[0] < trashj[9]) && (editS == 4450939.f));
      do {
         long clubO = sizeof(liveK) / sizeof(liveK[0]);
         liveK[3] *= clubO;
         if (editS == 3007975.f) {
            break;
         }
      } while (([weiboh containsString:@(liveK[8]).stringValue]) && (editS == 3007975.f));
         crossJ >>= MIN(2, weiboh.length);
      do {
         liveK[0] |= weiboh.length;
         if (editS == 3284098.f) {
            break;
         }
      } while ((liveK[2] < 2) && (editS == 3284098.f));
      do {
         crossJ *= weiboh.length;
         if ([[NSString stringWithUTF8String:(char []){119,97,115,53,101,111,120,105,101,0}] isEqualToString: weiboh]) {
            break;
         }
      } while (([[NSString stringWithUTF8String:(char []){119,97,115,53,101,111,120,105,101,0}] isEqualToString: weiboh]) && (5 <= (liveK[10] >> (MIN(weiboh.length, 2))) || (weiboh.length >> (MIN(1, labs(liveK[10])))) <= 5));
       NSArray * bridgeo = @[@(535), @(194), @(597)];
      for (int v = 0; v < 1; v++) {
         crossJ ^= bridgeo.count ^ 2;
      }
          char readL[] = {(char)-45,113,29,(char)-59,119,99,(char)-68,(char)-12,38,42,(char)-61,107};
          long overlayS = 2;
         trashj[7] |= 3;
         readL[MAX(overlayS % 12, 2)] /= MAX(readL[3] % 2, 3);
         overlayS /= MAX(2, overlayS ^ 3);
      while (5 >= (liveK[10] % 3)) {
         crossJ ^= 4 & weiboh.length;
         break;
      }
      NSInteger loadingB = sizeof(trashj) / sizeof(trashj[0]);
      editS -= team2[4] - (1 + loadingB);
      if (editS == 945528.f) {
         break;
      }
   } while (((editS - 2.74f) < 5) && (editS == 945528.f));
       NSDictionary * suggestionr = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){115,105,100,120,95,121,95,56,56,0}],@(18).stringValue, [NSString stringWithUTF8String:(char []){102,95,56,54,95,116,117,114,98,111,106,112,101,103,0}],@(372), [NSString stringWithUTF8String:(char []){113,95,55,51,95,108,97,98,101,108,110,115,0}],@(568), nil];
       char taiwanO[] = {84,(char)-127,110,(char)-30,(char)-128,109,38,27};
      while (3 == (taiwanO[5] | 5) || 3 == (suggestionr.allValues.count | 5)) {
          long dataY = 5;
          BOOL activityG = YES;
         taiwanO[MAX(4, dataY % 8)] &= 1;
         dataY += ((activityG ? 5 : 4) + (activityG ? 3 : 1));
         break;
      }
       char backward3[] = {(char)-64,(char)-2,15,83,(char)-125,101,(char)-12,(char)-51,(char)-88};
          char show6[] = {11,91,(char)-85,103};
          double indicatorT = 5.0f;
          long b_playerA = 1;
         int acceptedI = sizeof(backward3) / sizeof(backward3[0]);
         int details8 = sizeof(show6) / sizeof(show6[0]);
         taiwanO[4] += details8 | acceptedI;
         indicatorT *= 3;
         b_playerA <<= MIN(labs((int)indicatorT), 5);
          long modelsP = 3;
          unsigned char materialf[] = {254,198,71,90,31,80,23,163,223,66,252};
          BOOL package_2P = YES;
         long formQ = sizeof(backward3) / sizeof(backward3[0]);
         backward3[5] ^= formQ / 3;
         long pingm = sizeof(materialf) / sizeof(materialf[0]);
         modelsP *= pingm;
         package_2P = !package_2P;
      do {
         NSInteger rewindK = sizeof(backward3) / sizeof(backward3[0]);
         taiwanO[2] /= MAX(3, rewindK);
         if (editS == 2475845.f) {
            break;
         }
      } while ((3 < suggestionr.allKeys.count) && (editS == 2475845.f));
      do {
         taiwanO[6] %= MAX(1, suggestionr.count);
         if (2123178.f == editS) {
            break;
         }
      } while ((2123178.f == editS) && (5 == (taiwanO[7] * backward3[6])));
      handlerb += suggestionr.count % (MAX(taiwanO[1], 10));
   do {
       NSInteger room_ = 4;
       char bodann[] = {36,(char)-47,109,25};
       float logoE = 0.0f;
       double settings_ = 1.0f;
      if (4 == bodann[0]) {
          float membershipW = 2.0f;
         room_ /= MAX(5, (int)membershipW % 3);
      }
      while (3 <= (bodann[3] ^ room_) || (3 ^ room_) <= 3) {
          char injuryA[] = {89,98,54,15};
          double notification_ = 1.0f;
          BOOL contextv = YES;
          char matche[] = {(char)-84,101,(char)-35,(char)-55,85,8,18,81,50,88,4};
         bodann[1] >>= MIN(labs(3 - (int)logoE), 5);
         long backQ = sizeof(injuryA) / sizeof(injuryA[0]);
         injuryA[2] /= MAX(1, 3 ^ backQ);
         int viewsO = sizeof(matche) / sizeof(matche[0]);
         notification_ *= 3 ^ viewsO;
         long unselectedx = sizeof(matche) / sizeof(matche[0]);
         contextv = unselectedx < 88;
         break;
      }
         settings_ *= (int)logoE | room_;
      do {
          int hongkongQ = 4;
          double pressure0 = 4.0f;
          char forwardq[] = {35,(char)-75};
          NSInteger downJ = 3;
          char area7[] = {74,15,65,(char)-52,42};
         logoE /= MAX(1, 4);
         hongkongQ >>= MIN(labs((int)pressure0), 2);
         long backs = sizeof(area7) / sizeof(area7[0]);
         pressure0 /= MAX(backs + 1, 5);
         int videojsJ = sizeof(area7) / sizeof(area7[0]);
         forwardq[0] /= MAX(videojsJ, 1);
         downJ ^= area7[4] << (MIN(5, labs(downJ)));
         if (logoE == 3119922.f) {
            break;
         }
      } while ((5 > logoE) && (logoE == 3119922.f));
         settings_ *= (int)logoE;
      for (int e = 0; e < 1; e++) {
          long kickX = 1;
          NSArray * bufferV = @[@(714), @(964), @(713)];
         bodann[0] &= (int)logoE << (MIN(3, labs(3)));
         kickX -= bufferV.count;
         kickX /= MAX(2, 2 ^ bufferV.count);
      }
      if (room_ <= logoE) {
         room_ += 2;
      }
         room_ += 3 << (MIN(5, labs((int)settings_)));
         settings_ /= MAX(1, bodann[0] & (int)logoE);
      for (int q = 0; q < 2; q++) {
         NSInteger leftN = sizeof(bodann) / sizeof(bodann[0]);
         room_ %= MAX(leftN, 3);
      }
          BOOL module3 = YES;
          float checkbox_ = 2.0f;
         settings_ /= MAX(1, 5);
         module3 = module3;
         checkbox_ -= (int)checkbox_ & 3;
         settings_ *= room_;
      editS -= (int)logoE & 1;
      if (editS == 4122118.f) {
         break;
      }
   } while ((handlerb <= editS) && (editS == 4122118.f));
   for (int z = 0; z < 3; z++) {
       char d_center8[] = {119,69,(char)-28,(char)-70,80,(char)-96,78,(char)-25,87};
         int delegate_nR = sizeof(d_center8) / sizeof(d_center8[0]);
         d_center8[3] &= d_center8[5] & (2 + delegate_nR);
      do {
         long white3 = sizeof(d_center8) / sizeof(d_center8[0]);
         d_center8[5] *= white3 - d_center8[3];
         if (4832572.f == editS) {
            break;
         }
      } while ((4832572.f == editS) && ((d_center8[7] / (MAX(d_center8[1], 3))) < 2));
      do {
         long playercommonr = sizeof(d_center8) / sizeof(d_center8[0]);
         long helperf = sizeof(d_center8) / sizeof(d_center8[0]);
         d_center8[7] += helperf << (MIN(3, labs(playercommonr)));
         if (editS == 4584046.f) {
            break;
         }
      } while (((d_center8[4] - 3) > 4 || 3 > (d_center8[6] - 3)) && (editS == 4584046.f));
      team2[0] %= MAX(5, 2 | (int)handlerb);
   }
      editS *= 2;

  [self sendEventWithName: kDelegatesFailedToPlayKey  body: @{atPlacementIdKey: placementID,
                                                              atErrMsgKey: error.localizedDescription,
                                                              atExtraKey: extra.at_jsonString }];
}


- (void)rewardedVideoDidCloseForPlacementID:(NSString *)placementID rewarded:(BOOL)rewarded extra:(NSDictionary *)extra {
      __block double privilegeE = 3.0f;
   __block NSString * incidentR = [NSString stringWithUTF8String:(char []){117,95,53,52,95,97,100,100,105,116,105,111,110,97,108,108,121,0}];
   while (4 <= privilegeE) {
       unsigned char signinuph[] = {22,68,113,143,69};
       unsigned char popup4[] = {1,135,72,99,245};
       NSArray * animation1 = @[@(147), @(909), @(93)];
       double container9 = 4.0f;
         long short_nkI = sizeof(signinuph) / sizeof(signinuph[0]);
         popup4[3] <<= MIN(5, labs((3 + short_nkI) % (MAX(popup4[3], 6))));
         popup4[0] <<= MIN(labs(popup4[2] + 1), 2);
      for (int m = 0; m < 3; m++) {
         signinuph[4] -= 1;
      }
      while ((popup4[2] ^ animation1.count) >= 2 || 4 >= (2 ^ animation1.count)) {
         container9 *= 1 - animation1.count;
         break;
      }
      while (signinuph[1] <= popup4[3]) {
          BOOL signinupG = NO;
          int acceptedP = 3;
          double club1 = 0.0f;
          char shared_[] = {69,121,(char)-97,(char)-33,67,77,(char)-113,(char)-26,88,121};
         signinuph[MAX(acceptedP % 5, 2)] &= (int)club1;
         signinupG = 96 < (shared_[5] + 43);
         int indexD = sizeof(shared_) / sizeof(shared_[0]);
         acceptedP -= indexD;
         club1 /= MAX(((signinupG ? 1 : 1) / (MAX(1, 7))), 1);
         break;
      }
      do {
          NSString * alertg = [NSString stringWithUTF8String:(char []){109,95,50,49,95,100,101,116,101,114,109,105,110,101,0}];
          float sharedR = 4.0f;
         NSInteger leagueA = sizeof(popup4) / sizeof(popup4[0]);
         popup4[1] /= MAX(leagueA % 1, 5);
         sharedR -= alertg.length;
         sharedR *= 2;
         sharedR += alertg.length - 1;
         if (454452.f == privilegeE) {
            break;
         }
      } while ((454452.f == privilegeE) && (2 < (3 ^ animation1.count) && (3 ^ popup4[3]) < 5));
       int sportK = 5;
       int sentryJ = 0;
      for (int b = 0; b < 2; b++) {
         signinuph[3] <<= MIN(labs(animation1.count - 2), 3);
      }
      if (sentryJ >= container9) {
         sentryJ ^= (int)container9 % (MAX(1, 2));
      }
      do {
         NSInteger moviesl = sizeof(popup4) / sizeof(popup4[0]);
         sportK *= moviesl;
         if (4285972 == sportK) {
            break;
         }
      } while ((4285972 == sportK) && (sportK == container9));
          NSDictionary * time_rds = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){99,111,108,111,114,102,117,108,95,122,95,54,57,0}],@(886).stringValue, [NSString stringWithUTF8String:(char []){112,97,103,101,95,121,95,57,50,0}],@(272).stringValue, nil];
         int chinaL = sizeof(signinuph) / sizeof(signinuph[0]);
         int orientationd = sizeof(popup4) / sizeof(popup4[0]);
         signinuph[1] |= orientationd & chinaL;
      while ((animation1.count | 3) >= 5 && 1.9f >= (container9 * animation1.count)) {
          NSString * sigmobJ = [NSString stringWithUTF8String:(char []){110,95,52,48,95,111,110,101,0}];
          char rewardc[] = {(char)-39,(char)-20,30,(char)-115,(char)-95};
          int leagueU = 5;
         leagueU -= animation1.count / (MAX(3, 10));
         long bridgeJ = sizeof(rewardc) / sizeof(rewardc[0]);
         rewardc[0] += 1 * bridgeJ;
         leagueU &= sigmobJ.length - 1;
         break;
      }
      container9 *= incidentR.length;
      break;
   }
       int danger_ = 0;
      for (int g = 0; g < 2; g++) {
          NSString * configure2 = [NSString stringWithUTF8String:(char []){117,95,57,95,99,101,110,116,114,97,108,105,116,121,0}];
         danger_ |= ([[NSString stringWithUTF8String:(char []){121,0}] isEqualToString: configure2] ? configure2.length : danger_);
      }
         danger_ <<= MIN(5, labs(1 ^ danger_));
      while ((5 + danger_) <= 1) {
         danger_ |= danger_ << (MIN(labs(3), 5));
         break;
      }
      privilegeE *= 1;

  
  if ([extra[kATRewardedVideoCallbackExtraNetworkIDKey] integerValue] == 35) {
    dispatch_async(dispatch_get_main_queue(), ^{
      [self sendEventWithName: kDelegatesCloseKey  body: @{atPlacementIdKey: placementID,
                                                           atExtraKey: extra.at_jsonString}];
    });
      privilegeE /= MAX(5, 2);
   for (int p = 0; p < 2; p++) {
       unsigned char shootr[] = {114,175,106,104,102,35,128,61,81};
       double vnewinterstitialv = 2.0f;
       NSDictionary * gmaila = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){119,97,108,108,95,121,95,52,54,0}],@(333).stringValue, nil];
       double eventX = 0.0f;
         vnewinterstitialv *= (int)eventX;
         vnewinterstitialv /= MAX(gmaila.count, 1);
         shootr[0] /= MAX(3 >> (MIN(labs(shootr[4]), 2)), 2);
      do {
         shootr[0] += (int)vnewinterstitialv;
         if (privilegeE == 972034.f) {
            break;
         }
      } while (((gmaila.count % 3) > 1 && 3 > (shootr[5] % (MAX(8, gmaila.count)))) && (privilegeE == 972034.f));
         shootr[5] >>= MIN(gmaila.allValues.count, 5);
      if ([gmaila.allValues containsObject:@(eventX)]) {
         eventX -= gmaila.count * 1;
      }
         vnewinterstitialv -= gmaila.count + 3;
      if ((3 << (MIN(5, gmaila.allKeys.count))) == 4 && 1.59f == (vnewinterstitialv * 2.62f)) {
         vnewinterstitialv -= 1 * gmaila.count;
      }
      for (int j = 0; j < 2; j++) {
         eventX *= 5 * gmaila.count;
      }
         eventX *= (int)eventX - gmaila.allValues.count;
          unsigned char minid[] = {69,51,79,236,250,1};
         eventX += gmaila.count;
         long sans1 = sizeof(minid) / sizeof(minid[0]);
         long malaysia5 = sizeof(minid) / sizeof(minid[0]);
         minid[0] >>= MIN(labs(sans1 << (MIN(labs(malaysia5), 3))), 4);
      if (![gmaila.allValues containsObject:@(eventX)]) {
         eventX += gmaila.count;
      }
      privilegeE -= gmaila.count;
   }
    return;
  }
  [self sendEventWithName: kDelegatesCloseKey  body: @{atPlacementIdKey: placementID,
                                                       atExtraKey: extra.at_jsonString}];
   if (1 >= incidentR.length) {
       char bufferX[] = {43,12,(char)-41,3,85,25,75,27};
       int soundq = 3;
       BOOL huaweiE = YES;
       unsigned char sliderW[] = {253,20,146,2,109,220,26,106,109,166,174};
      for (int v = 0; v < 2; v++) {
         bufferX[6] ^= 2;
      }
      if (!huaweiE) {
         huaweiE = !huaweiE;
      }
       NSInteger moduleQ = 5;
      if (soundq > 2) {
         long whiteS = sizeof(bufferX) / sizeof(bufferX[0]);
         bufferX[6] *= 3 + whiteS;
      }
         NSInteger groupo = sizeof(bufferX) / sizeof(bufferX[0]);
         bufferX[MAX(6, soundq % 8)] += groupo | 2;
       float matchk = 0.0f;
       float tooltipsQ = 2.0f;
      for (int b = 0; b < 3; b++) {
         tooltipsQ -= 1;
      }
      while ((1 / (MAX(7, sliderW[9]))) > 3 && (sliderW[9] / (MAX(6, moduleQ))) > 1) {
          double statistics4 = 4.0f;
         moduleQ *= (int)statistics4 * (int)matchk;
         break;
      }
         NSInteger whatsappD = sizeof(bufferX) / sizeof(bufferX[0]);
         bufferX[2] *= (int)matchk << (MIN(labs(whatsappD), 2));
         matchk += (int)matchk % (MAX(1, 10));
          int h_position7 = 1;
         long sentryi = sizeof(sliderW) / sizeof(sliderW[0]);
         bufferX[4] &= (3 + sentryi) * bufferX[6];
         h_position7 <<= MIN(5, labs(h_position7));
          NSArray * configK = [NSArray arrayWithObjects:@(793), @(782), @(311), nil];
          NSArray * auto_b9r = @[@(6009)];
          float sinaG = 2.0f;
         moduleQ <<= MIN(labs(1 >> (MIN(labs((int)tooltipsQ), 1))), 4);
         sinaG -= configK.count / (MAX(4, 6));
         sinaG += auto_b9r.count;
         sinaG -= configK.count;
         sinaG *= auto_b9r.count;
      soundq *= 4 + incidentR.length;
   }

}


- (void)didFinishLoadingADWithPlacementID:(NSString *)placementID {
       char whistlew[] = {(char)-118,(char)-4,38,(char)-6,88};
    unsigned char shareu[] = {229,25,204};
    char backX[] = {(char)-15,(char)-105,53};
   while (shareu[0] == whistlew[1]) {
      int moviesR = sizeof(whistlew) / sizeof(whistlew[0]);
      whistlew[2] ^= moviesR - 1;
      break;
   }
   for (int u = 0; u < 3; u++) {
       NSString * kuaishoup = [NSString stringWithUTF8String:(char []){110,95,55,50,95,114,101,97,114,0}];
       float recommendationj = 3.0f;
       unsigned char dataC[] = {43,64,72,83,19};
      do {
         recommendationj *= (int)recommendationj;
         if (recommendationj == 4594646.f) {
            break;
         }
      } while ((recommendationj == 4594646.f) && ((recommendationj + kuaishoup.length) >= 5));
         recommendationj /= MAX(2, kuaishoup.length ^ 1);
      do {
         long chatv = sizeof(dataC) / sizeof(dataC[0]);
         dataC[0] %= MAX(chatv | 3, 1);
         if (dataC[4] == 138) {
            break;
         }
      } while ((1 <= (dataC[4] / (MAX(5, 1)))) && (dataC[4] == 138));
      if ((dataC[1] + recommendationj) > 5 || (recommendationj + 5) > 3) {
         dataC[1] &= 1;
      }
      while (2 < (kuaishoup.length - recommendationj)) {
          NSInteger relatedy = 2;
          double modeZ = 5.0f;
          NSString * store3 = [NSString stringWithUTF8String:(char []){97,95,53,54,95,114,101,97,100,111,110,108,121,0}];
         recommendationj /= MAX(2 / (MAX(10, dataC[0])), 5);
         relatedy <<= MIN(2, labs((int)modeZ));
         modeZ /= MAX(2, 3 + relatedy);
         relatedy /= MAX(2, store3.length / 5);
         relatedy %= MAX(1, store3.length >> (MIN(labs(5), 5)));
         break;
      }
       double darku = 4.0f;
       double dropdownC = 4.0f;
         dataC[1] *= (int)darku - (int)dropdownC;
       unsigned char bootsplash3[] = {184,229,32,58,102,4,23,46,111};
         darku += (int)dropdownC;
      int buildX = sizeof(shareu) / sizeof(shareu[0]);
      backX[0] |= buildX / (MAX(1, 9));
   }
   for (int v = 0; v < 3; v++) {
      NSInteger main_jl = sizeof(shareu) / sizeof(shareu[0]);
      backX[0] ^= whistlew[3] & main_jl;
   }
   if (4 <= (whistlew[4] ^ 4) || (whistlew[4] ^ shareu[0]) <= 4) {
       NSInteger indicatorm = 1;
       unsigned char emojiz[] = {212,218,188,19};
       float football8 = 5.0f;
       BOOL constantsJ = NO;
          float shrinkN = 0.0f;
         constantsJ = shrinkN >= 51.73f;
      if ((emojiz[1] - football8) < 3 && (football8 - 3) < 4) {
         football8 -= indicatorm;
      }
         indicatorm |= indicatorm - 3;
       long viewsa = 2;
         emojiz[MAX(indicatorm % 4, 2)] >>= MIN(labs(indicatorm / (MAX((int)football8, 4))), 3);
         constantsJ = constantsJ;
         viewsa %= MAX(5, 3);
          unsigned char frame_i5s[] = {33,166};
         viewsa &= indicatorm ^ 1;
         long predictionU = sizeof(frame_i5s) / sizeof(frame_i5s[0]);
         frame_i5s[0] >>= MIN(labs(predictionU), 1);
      whistlew[2] -= (int)football8 * indicatorm;
   }
   while (1 > (backX[1] * 3) || 3 > (backX[1] * 3)) {
      int awayx = sizeof(shareu) / sizeof(shareu[0]);
      backX[1] *= (1 + awayx) | backX[2];
      break;
   }
      NSInteger actionsh = sizeof(shareu) / sizeof(shareu[0]);
      shareu[1] %= MAX(3, actionsh);

  [self sendEventWithName: kDelegatesLoadedKey  body: @{atPlacementIdKey: placementID}];

}


- (void)didFailToLoadADWithPlacementID:(NSString *)placementID error:(NSError *)error {
       int canvas9 = 2;
    double score3 = 2.0f;
   while (canvas9 <= score3) {
      score3 *= canvas9 << (MIN(3, labs(2)));
      break;
   }
       float sportsY = 5.0f;
      if (2.69f >= (sportsY / (MAX(2, 3.93f))) && (sportsY / (MAX(9, 3.93f))) >= 2.52f) {
         sportsY *= (int)sportsY * (int)sportsY;
      }
         sportsY -= (int)sportsY;
         sportsY /= MAX((int)sportsY, 1);
      canvas9 >>= MIN(labs(2), 1);
      score3 *= 1;

  [self sendEventWithName: kDelegatesLoadFailedKey  body: @{atPlacementIdKey: placementID,
                                                       atErrMsgKey: error.localizedDescription}];
}


- (void)rewardedVideoDidRewardSuccessForPlacemenID:(NSString *)placementID extra:(NSDictionary *)extra {
       NSInteger shootO = 4;
    unsigned char whatsappR[] = {242,221,68,217};
      whatsappR[3] %= MAX(2, shootO);
      whatsappR[MAX(shootO % 4, 2)] &= shootO;
   if ((shootO / (MAX(3, 2))) <= 5 && 3 <= (whatsappR[2] / 3)) {
       double entrym = 4.0f;
       double minimizeE = 0.0f;
       NSInteger rnewsT = 2;
       double previewK = 4.0f;
       BOOL memberl = YES;
       unsigned char lineO[] = {3,190,98,145,223,97,218};
         memberl = entrym < minimizeE;
          unsigned char currentb[] = {39,246,153};
         int playS = sizeof(currentb) / sizeof(currentb[0]);
         entrym /= MAX(3, playS);
      while ((rnewsT ^ 4) < 4) {
         previewK -= (int)minimizeE;
         break;
      }
      if ((rnewsT - 3) >= 2) {
         memberl = 43 <= previewK && 43 <= lineO[2];
      }
         memberl = memberl || rnewsT == 76;
       char rewindW[] = {(char)-83,104,90,(char)-68,88,11};
       char edit7[] = {(char)-99,68,45,(char)-94,(char)-48,99};
      do {
          NSInteger giftm = 2;
          NSInteger soundf = 3;
         memberl = rnewsT >= minimizeE;
         giftm %= MAX(soundf, 1);
         soundf &= soundf;
         if (memberl ? !memberl : memberl) {
            break;
         }
      } while (((5.58f / (MAX(2, previewK))) >= 3 && previewK >= 5.58f) && (memberl ? !memberl : memberl));
       NSDictionary * interstitialb = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){108,95,54,95,101,120,112,111,110,101,110,116,105,97,108,0}],@(610).stringValue, nil];
      if (!memberl) {
         entrym -= 3 % (MAX(4, (int)minimizeE));
      }
         rnewsT ^= ((memberl ? 3 : 1));
          unsigned char bottom8[] = {17,209,44,81,34,116,152,213,212,182,46,130};
         edit7[4] ^= 2;
         long checkboxi = sizeof(bottom8) / sizeof(bottom8[0]);
         bottom8[1] %= MAX(checkboxi - 3, 4);
      while (5 == (minimizeE * 4.64f) && 4.64f == minimizeE) {
         memberl = minimizeE == 80.80f;
         break;
      }
      for (int c = 0; c < 2; c++) {
         NSInteger infoQ = sizeof(lineO) / sizeof(lineO[0]);
         entrym += edit7[0] | (3 + infoQ);
      }
      while ([interstitialb.allValues containsObject:@(entrym)]) {
          NSInteger anythinkP = 3;
          NSInteger sort3 = 0;
          int clearn = 4;
         sort3 ^= interstitialb.count;
         anythinkP /= MAX(1 >> (MIN(2, labs(anythinkP))), 1);
         sort3 += 1;
         clearn /= MAX(clearn, 3);
         break;
      }
      whatsappR[1] |= (int)minimizeE;
   }

  
  [self sendEventWithName: kDelegatesRewardedKey  body: @{atPlacementIdKey: placementID,
                                                       atExtraKey: extra.at_jsonString}];
}


- (void)rewardedVideoDidClickForPlacementID:(NSString *)placementID extra:(NSDictionary *)extra {
       char dycreatorH[] = {(char)-103,6,3,(char)-8};
    int feedbackX = 5;
       NSInteger long_wm = 3;
       NSInteger adult4 = 4;
      do {
         adult4 += adult4;
         if (adult4 == 1120588) {
            break;
         }
      } while (((adult4 | long_wm) == 2 || 2 == (adult4 | long_wm)) && (adult4 == 1120588));
      if ((1 * long_wm) == 4 || 5 == (long_wm * 1)) {
         long_wm ^= 3;
      }
      if (1 == (long_wm % (MAX(2, adult4))) || 1 == (1 % (MAX(9, adult4)))) {
          long recommendationS = 2;
          char userK[] = {98,(char)-114,(char)-18,(char)-28,84,(char)-56,67,117,41,59,(char)-92,(char)-63};
          char diceF[] = {(char)-125,(char)-32};
          unsigned char activityN[] = {13,76,200,122,79,238,172,57};
          char black7[] = {(char)-75,(char)-33,(char)-5,118,80,(char)-113,(char)-41,35,20,(char)-82,1};
         int hejip = sizeof(activityN) / sizeof(activityN[0]);
         long_wm -= hejip;
         recommendationS /= MAX(3, userK[7]);
         userK[2] ^= recommendationS;
         long binga = sizeof(black7) / sizeof(black7[0]);
         diceF[1] -= binga | diceF[0];
      }
         long_wm >>= MIN(labs(1 * long_wm), 2);
          long dplush = 3;
          float ballO = 2.0f;
         adult4 *= dplush;
         dplush |= (int)ballO + 3;
         ballO -= (int)ballO;
         adult4 += adult4;
      dycreatorH[0] <<= MIN(1, labs(1));
   if (5 == (feedbackX >> (MIN(labs(dycreatorH[1]), 3))) || 3 == (dycreatorH[1] >> (MIN(labs(5), 5)))) {
      feedbackX += feedbackX & dycreatorH[1];
   }
      feedbackX += 3 - feedbackX;
      feedbackX &= feedbackX;

  [self sendEventWithName: kDelegatesClickKey  body: @{atPlacementIdKey: placementID,
                                                       atExtraKey: extra.at_jsonString}];
}


- (NSArray *)supportedEvents {
       char gmailR[] = {(char)-46,(char)-128,(char)-80,(char)-109,43,(char)-50,37,106,(char)-126,(char)-119,22,57};
    NSString * type_9s = [NSString stringWithUTF8String:(char []){105,110,100,101,120,111,102,95,117,95,55,55,0}];
    long downloadingo = 3;
       double type_fzm = 2.0f;
      while (3.3f < (4.9f + type_fzm) || 5.91f < (type_fzm / (MAX(4.9f, 10)))) {
         type_fzm += 2 * (int)type_fzm;
         break;
      }
         type_fzm /= MAX(2, (int)type_fzm * (int)type_fzm);
         type_fzm /= MAX(3 << (MIN(labs((int)type_fzm), 1)), 1);
      gmailR[9] %= MAX(3, downloadingo);
   do {
       BOOL taiwanM = YES;
         taiwanM = (taiwanM ? !taiwanM : !taiwanM);
      for (int y = 0; y < 3; y++) {
          double countdown5 = 5.0f;
          NSArray * membershipA = @[[NSString stringWithUTF8String:(char []){103,95,54,50,95,97,110,103,108,101,0}]];
          float module4 = 0.0f;
         taiwanM = (countdown5 / (MAX(7, membershipA.count))) <= 96;
         countdown5 -= 2;
         module4 *= membershipA.count / (MAX(2, 5));
      }
      for (int j = 0; j < 1; j++) {
         taiwanM = !taiwanM;
      }
      downloadingo >>= MIN(2, type_9s.length);
      if ([[NSString stringWithUTF8String:(char []){98,118,57,0}] isEqualToString: type_9s]) {
         break;
      }
   } while (([[NSString stringWithUTF8String:(char []){98,118,57,0}] isEqualToString: type_9s]) && (type_9s.length >= 4));
      downloadingo |= 2;
   do {
      gmailR[0] %= MAX(3 * type_9s.length, 5);
      if (424703 == type_9s.length) {
         break;
      }
   } while ((424703 == type_9s.length) && (downloadingo >= 2));
      gmailR[3] -= downloadingo;
       NSArray * modelR = @[@(75), @(635), @(404)];
       char showG[] = {50,38,15,(char)-7,(char)-35,3,73,40};
      if (modelR.count > 3) {
      }
          NSArray * colors1 = [NSArray arrayWithObjects:@(316), @(181), @(873), nil];
          int sourceI = 5;
          NSArray * termsX = @[@(255), @(413)];
         showG[MAX(3, sourceI % 8)] *= 3;
         sourceI *= colors1.count * 3;
      if (modelR.count == 1) {
         showG[5] %= MAX(modelR.count, 2);
      }
         showG[5] ^= modelR.count >> (MIN(labs(showG[6]), 1));
      downloadingo += 3 >> (MIN(1, type_9s.length));

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


@end
