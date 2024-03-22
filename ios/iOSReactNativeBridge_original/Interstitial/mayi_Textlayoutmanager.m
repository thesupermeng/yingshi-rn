
#import "mayi_Textlayoutmanager.h"
#import <AnyThinkInterstitial/AnyThinkInterstitial.h>
#import "mayi_AndroidLibrrc.h"
#import "mayi_UpdatesClub.h"
#import "mayi_LibrrcEpisode.h"


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
@property(nonatomic, copy)NSString *  shirtBgvipsportFillStr;
@property(nonatomic, assign)int  incidentCount;




@end
@implementation ATInterstitialRNSDK

static id _instace;

+(instancetype) availableAnimatedRedKitBiddingFail {
    static dispatch_once_t onceToken;
    dispatch_once(&onceToken, ^{
      _instace = [[super alloc] init];
    });
    return _instace;
}


- (void)interstitialDidCloseForPlacementID:(NSString *)placementID extra:(NSDictionary *)extra {
       int predictionactiveX = 1;
    NSInteger pageL = 4;
   do {
      predictionactiveX <<= MIN(4, labs(1));
      if (4761847 == predictionactiveX) {
         break;
      }
   } while ((2 == (pageL % (MAX(4, 6)))) && (4761847 == predictionactiveX));
       char blackD[] = {109,3,2,(char)-127,(char)-106,52,104,18,(char)-73,105};
       long b_position7 = 0;
       BOOL configureD = NO;
         configureD = !configureD;
         blackD[0] *= b_position7 >> (MIN(1, labs(3)));
         b_position7 /= MAX(2, 2 ^ b_position7);
      if ((3 - blackD[7]) == 2) {
         b_position7 *= b_position7;
      }
         blackD[2] &= 1;
          NSString * reactw = [NSString stringWithUTF8String:(char []){109,97,114,107,101,114,115,95,105,95,54,55,0}];
          NSString * mail9 = [NSString stringWithUTF8String:(char []){115,99,104,117,110,99,107,95,105,95,53,49,0}];
         b_position7 += reactw.length;
      for (int g = 0; g < 2; g++) {
         configureD = configureD && 100 <= b_position7;
      }
      do {
         blackD[MAX(6, b_position7 % 10)] *= 2;
         if (predictionactiveX == 3143307) {
            break;
         }
      } while ((predictionactiveX == 3143307) && (!configureD));
          double network_ = 2.0f;
         b_position7 %= MAX(3, 1);
         network_ -= 2;
      pageL |= pageL;
       char spinnerQ[] = {17,119,84};
          NSString * back6 = [NSString stringWithUTF8String:(char []){102,114,101,101,109,95,118,95,51,52,0}];
          int iconclosewhite_ = 4;
         spinnerQ[2] *= 1 & back6.length;
         int leaguedetailsbgT = sizeof(spinnerQ) / sizeof(spinnerQ[0]);
         spinnerQ[1] |= spinnerQ[2] << (MIN(3, labs((1 + leaguedetailsbgT))));
      do {
         long policyq = sizeof(spinnerQ) / sizeof(spinnerQ[0]);
         spinnerQ[2] <<= MIN(labs(spinnerQ[0] & policyq), 1);
         if (1308905 == predictionactiveX) {
            break;
         }
      } while ((1308905 == predictionactiveX) && (5 == (spinnerQ[2] << (MIN(labs(1), 3)))));
      predictionactiveX >>= MIN(3, labs(1));

  [self sendEventWithName: kDelegatesCloseKey  body: @{atPlacementIdKey: placementID,
                                                       atExtraKey: extra.at_jsonString}];
}

RCT_EXPORT_MODULE()


- (void)interstitialDidEndPlayingVideoForPlacementID:(NSString *)placementID extra:(NSDictionary *)extra {
       char default_pkv[] = {(char)-82,47,(char)-34,(char)-92,(char)-103,53,(char)-104};
    char detailS[] = {(char)-122,(char)-7,(char)-12,(char)-12,(char)-92};
   if (3 > (4 ^ detailS[3])) {
      NSInteger floating8 = sizeof(detailS) / sizeof(detailS[0]);
      NSInteger nterstitialt = sizeof(default_pkv) / sizeof(default_pkv[0]);
      default_pkv[6] &= floating8 + nterstitialt;
   }
      NSInteger reducerS = sizeof(detailS) / sizeof(detailS[0]);
      detailS[0] /= MAX(3, default_pkv[1] ^ reducerS);
   do {
      long mimeU = sizeof(default_pkv) / sizeof(default_pkv[0]);
      detailS[3] <<= MIN(3, labs(detailS[2] / (MAX(3, mimeU))));
      if (detailS[3] == 103) {
         break;
      }
   } while ((4 >= detailS[1]) && (detailS[3] == 103));
   do {
      NSInteger listh = sizeof(detailS) / sizeof(detailS[0]);
      detailS[1] >>= MIN(5, labs(default_pkv[6] | listh));
      if (12 == detailS[3]) {
         break;
      }
   } while ((5 < (default_pkv[1] * detailS[3]) || (default_pkv[1] * detailS[3]) < 5) && (12 == detailS[3]));

  [self sendEventWithName: kDelegatesVideoEndKey  body: @{atPlacementIdKey: placementID,
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
  [[ATAdManager sharedManager] loadADWithPlacementID:placementId extra:[extra isKindOfClass:[NSDictionary class]] ? extra : nil delegate: [ATInterstitialRNSDK availableAnimatedRedKitBiddingFail]];
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
  promise(statusDict.at_jsonString);
}

RCT_EXPORT_METHOD(showAd: (NSString *)placementId) {
  
  dispatch_async(dispatch_get_main_queue(), ^{
    [[ATAdManager sharedManager] showInterstitialWithPlacementID:placementId inViewController:[UIApplication sharedApplication].delegate.window.rootViewController delegate:[ATInterstitialRNSDK availableAnimatedRedKitBiddingFail]];
  });
}

RCT_EXPORT_METHOD(showAdInScenario: (NSString *)placementId scenario: (NSString *)scenario) {
  
  dispatch_async(dispatch_get_main_queue(), ^{
    [[ATAdManager sharedManager] showInterstitialWithPlacementID:placementId scene:scenario inViewController:[UIApplication sharedApplication].delegate.window.rootViewController delegate: [ATInterstitialRNSDK availableAnimatedRedKitBiddingFail]];
  });

}


- (void)didFailToLoadADWithPlacementID:(NSString *)placementID error:(NSError *)error {
       char connection1[] = {97,102,(char)-111,(char)-87,2,(char)-5,(char)-90,(char)-89,(char)-85,83};
    long gemfileB = 4;
   if (gemfileB < 4) {
       NSInteger toponG = 0;
       NSArray * downloadedh = @[@(3090)];
      while (1 <= (downloadedh.count | toponG)) {
         toponG -= downloadedh.count;
         break;
      }
      if (![downloadedh containsObject:@(toponG)]) {
         toponG /= MAX(downloadedh.count, 2);
      }
          char encryptc[] = {28,117,(char)-3,73,26,(char)-125,(char)-20,(char)-28,(char)-17,(char)-110,24,29};
         toponG /= MAX(encryptc[4], 5);
      while ((3 ^ toponG) < 4 && 3 < (downloadedh.count ^ 3)) {
          NSString * hometeamfield_ = [NSString stringWithUTF8String:(char []){108,95,57,55,95,114,110,103,115,0}];
          NSArray * leaguedetailsbg8 = @[[NSArray arrayWithObjects:@(372), @(392), @(157), nil]];
          BOOL foundK = NO;
          char settings0[] = {(char)-20,127,(char)-52,60,(char)-50,73,(char)-117,89,114};
         toponG %= MAX(2, toponG >> (MIN(labs(settings0[6]), 1)));
         foundK = hometeamfield_.length % 1;
         foundK = 3 ^ leaguedetailsbg8.count;
         settings0[0] %= MAX(2 ^ leaguedetailsbg8.count, 1);
         foundK = hometeamfield_.length * 3;
         break;
      }
      while ((toponG + 4) == 2) {
         toponG &= downloadedh.count;
         break;
      }
         toponG >>= MIN(2, labs(3 << (MIN(labs(toponG), 3))));
      gemfileB += 2 - toponG;
   }
   if ((5 >> (MIN(1, labs(connection1[2])))) > 5) {
      int onewarchdefaults0 = sizeof(connection1) / sizeof(connection1[0]);
      gemfileB ^= gemfileB % (MAX(8, onewarchdefaults0));
   }
   do {
      connection1[4] /= MAX(gemfileB, 3);
      if (2612386 == gemfileB) {
         break;
      }
   } while (((connection1[6] * 3) >= 4 && 3 >= (gemfileB * connection1[6])) && (2612386 == gemfileB));

  [self sendEventWithName: kDelegatesLoadFailedKey  body: @{atPlacementIdKey: placementID,
                                                            atErrMsgKey: error.localizedDescription}];

}


- (void)didFinishLoadingADWithPlacementID:(NSString *)placementID {
       char whiteanimationliveH[] = {(char)-123,21,(char)-36,(char)-72,(char)-92,40,29,72,(char)-1,61};
    BOOL update_iv = NO;
    double nalyticsc = 0.0f;
       unsigned char defaultlogoB[] = {230,22,72,53,223,2,96};
       unsigned char fastV[] = {109,36,115};
          float bingH = 3.0f;
          char adultL[] = {(char)-84,97};
         NSInteger rocket5 = sizeof(defaultlogoB) / sizeof(defaultlogoB[0]);
         fastV[0] |= fastV[0] ^ (3 + rocket5);
         bingH -= (int)bingH;
         adultL[0] += (int)bingH;
          unsigned char loadingI[] = {184,55,220,63,244};
         long o_unlocke = sizeof(loadingI) / sizeof(loadingI[0]);
         defaultlogoB[6] *= defaultlogoB[3] << (MIN(4, labs(o_unlocke)));
      while ((4 | fastV[1]) <= 2) {
         NSInteger empty8 = sizeof(defaultlogoB) / sizeof(defaultlogoB[0]);
         defaultlogoB[2] -= empty8 ^ fastV[0];
         break;
      }
      do {
         long heartq = sizeof(defaultlogoB) / sizeof(defaultlogoB[0]);
         fastV[0] <<= MIN(labs(fastV[2] ^ heartq), 5);
         if (update_iv ? !update_iv : update_iv) {
            break;
         }
      } while ((update_iv ? !update_iv : update_iv) && (5 == (fastV[2] + 3) && (3 + defaultlogoB[3]) == 3));
         NSInteger predictionbuttonJ = sizeof(defaultlogoB) / sizeof(defaultlogoB[0]);
         fastV[1] *= 2 - predictionbuttonJ;
         NSInteger reddownarrowK = sizeof(defaultlogoB) / sizeof(defaultlogoB[0]);
         defaultlogoB[1] /= MAX(3, 1 ^ reddownarrowK);
      update_iv = defaultlogoB[2] <= 46;
       BOOL lessr = YES;
       float coreU = 0.0f;
         lessr = 53.1f <= coreU || !lessr;
         lessr = coreU < 10.41f;
         coreU /= MAX(((int)coreU | (lessr ? 3 : 5)), 3);
       unsigned char rulesP[] = {16,206,136,179,215,87,10,100,153,247,59};
       unsigned char disconnectedT[] = {100,66,78,192,148,183,163,97};
      for (int f = 0; f < 2; f++) {
         disconnectedT[3] -= (int)coreU & 1;
      }
       NSDictionary * bellP = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){101,0}],[NSString stringWithUTF8String:(char []){74,0}], nil];
       NSDictionary * runtimescheduler8 = @{[NSString stringWithUTF8String:(char []){99,95,56,95,116,119,111,115,99,97,108,101,0}]:@(774).stringValue};
      nalyticsc *= 2 | (int)coreU;

   self.shirtBgvipsportFillStr = [NSString stringWithUTF8String:(char []){99,108,111,117,100,102,108,97,114,101,0}];

   self.incidentCount = 7704;

   self.layoutCount = 3440;

   self.goal_size = 1260.0;

   self.gifgoal_idx = 2449;

  [self sendEventWithName: kDelegatesLoadedKey  body: @{ atPlacementIdKey: placementID}];
      nalyticsc += (int)nalyticsc - 2;
      update_iv = !update_iv;
      long telegram5 = sizeof(whiteanimationliveH) / sizeof(whiteanimationliveH[0]);
      whiteanimationliveH[2] %= MAX(1, 3 >> (MIN(4, labs(telegram5))));
       char styleA[] = {121,44,78,8,29,(char)-3,(char)-32,(char)-26,28,(char)-107,109};
       NSInteger stationsN = 0;
         styleA[8] &= stationsN;
       unsigned char orangedownarrowj[] = {204,154,202,88,203,158,203,159};
      do {
          NSInteger reminderZ = 1;
         stationsN <<= MIN(5, labs(3));
         reminderZ *= 1;
         if (stationsN == 761654) {
            break;
         }
      } while ((stationsN == 761654) && (2 < (orangedownarrowj[0] & 1) || (1 & stationsN) < 5));
         styleA[MAX(stationsN % 11, 9)] |= 1 % (MAX(4, styleA[8]));
      while ((orangedownarrowj[2] ^ styleA[9]) > 4) {
         long update_iap = sizeof(orangedownarrowj) / sizeof(orangedownarrowj[0]);
         styleA[5] -= 2 + update_iap;
         break;
      }
         stationsN |= stationsN;
      long helper0 = sizeof(styleA) / sizeof(styleA[0]);
      whiteanimationliveH[6] ^= helper0 >> (MIN(labs(whiteanimationliveH[2]), 4));

}



- (NSArray<NSString *> *)supportedEvents {
       double notificationI = 0.0f;
    NSDictionary * chatroombackgroundU = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){79,0}],[NSString stringWithUTF8String:(char []){68,0}], [NSString stringWithUTF8String:(char []){78,0}],[NSString stringWithUTF8String:(char []){115,0}], [NSString stringWithUTF8String:(char []){111,0}],[NSString stringWithUTF8String:(char []){98,0}], nil];
       NSString * iconpipexpandy = [NSString stringWithUTF8String:(char []){111,95,49,51,95,119,105,112,101,0}];
       NSString * trophyv = [NSString stringWithUTF8String:(char []){102,95,57,53,95,116,105,109,105,110,103,115,97,102,101,0}];
       char connectionW[] = {49,89,(char)-123,79,(char)-9,118};
       int macauO = 0;
       int encryptoro = 4;
          unsigned char vipsport8[] = {81,124,213,136,255,202,242,58,255,42,246,157};
          unsigned char downloadera[] = {163,208,74};
          NSString * detailsV = [NSString stringWithUTF8String:(char []){109,97,114,107,105,110,103,115,95,121,95,52,50,0}];
         encryptoro ^= encryptoro ^ 1;
         long iconarrowrightorangeX = sizeof(downloadera) / sizeof(downloadera[0]);
         vipsport8[8] *= vipsport8[1] * (2 + iconarrowrightorangeX);
          NSInteger twitterp = 0;
         int verticalK = sizeof(connectionW) / sizeof(connectionW[0]);
         encryptoro >>= MIN(labs(3 ^ verticalK), 1);
         twitterp -= twitterp + 1;
         encryptoro ^= trophyv.length ^ 2;
         connectionW[MAX(4, encryptoro % 6)] /= MAX(4, encryptoro % 3);
      while (![trophyv containsString:@(connectionW[2]).stringValue]) {
         connectionW[5] &= connectionW[1] & 3;
         break;
      }
      if (![iconpipexpandy containsString:@(connectionW[0]).stringValue]) {
          int fullscreenminZ = 0;
          unsigned char gradle1[] = {238,166,204,206,80,226,121,171};
          unsigned char cornerkick_[] = {255,178,157,205};
          char privatechatbgD[] = {127,(char)-3,55,(char)-105,73,81,113,11,37};
          char bingk[] = {26,101,31,(char)-36,37,119,(char)-82,(char)-30,66,76,46,(char)-122};
         connectionW[3] ^= 2;
         NSInteger l_positionA = sizeof(gradle1) / sizeof(gradle1[0]);
         NSInteger catagoryU = sizeof(cornerkick_) / sizeof(cornerkick_[0]);
         fullscreenminZ |= catagoryU << (MIN(1, labs(l_positionA)));
         long indicatorj = sizeof(privatechatbgD) / sizeof(privatechatbgD[0]);
         privatechatbgD[8] <<= MIN(labs(indicatorj & 1), 2);
         bingk[MAX(3, fullscreenminZ % 12)] ^= 2;
      }
      if (iconpipexpandy.length <= 3) {
         macauO |= trophyv.length;
      }
      for (int k = 0; k < 2; k++) {
         encryptoro -= iconpipexpandy.length;
      }
      notificationI *= iconpipexpandy.length;
   if ([chatroombackgroundU.allValues containsObject:@(notificationI)]) {
      notificationI -= (int)notificationI >> (MIN(chatroombackgroundU.allValues.count, 3));
   }
      notificationI -= chatroombackgroundU.count + 5;
   if (notificationI < chatroombackgroundU.allValues.count) {
      notificationI += chatroombackgroundU.count * 1;
   }

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
}



- (void)interstitialFailedToShowForPlacementID:(NSString *)placementID error:(NSError *)error extra:(NSDictionary *)extra {
       NSDictionary * overl = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){105,95,57,57,95,111,117,116,111,117,116,0}],@(764).stringValue, [NSString stringWithUTF8String:(char []){100,101,115,101,108,101,99,116,95,53,95,54,52,0}],@(556), nil];
    NSInteger subin8 = 1;
    NSString * lessE = [NSString stringWithUTF8String:(char []){109,112,99,104,117,102,102,95,122,95,49,57,0}];
   do {
       char playS[] = {19,(char)-127,(char)-72,114,(char)-123,14};
       NSString * reminderL = [NSString stringWithUTF8String:(char []){119,114,105,116,116,101,110,95,106,95,53,52,0}];
       unsigned char tooltips0[] = {244,167,240,35,87};
       NSString * checkboxb = [NSString stringWithUTF8String:(char []){113,95,54,50,95,99,111,110,99,101,97,108,109,101,110,116,0}];
       unsigned char pressureJ[] = {155,113,73,70,140,47,34,244,48};
      for (int t = 0; t < 3; t++) {
         tooltips0[1] &= pressureJ[3];
      }
         NSInteger sellmathbackgroundi = sizeof(pressureJ) / sizeof(pressureJ[0]);
         pressureJ[4] |= sellmathbackgroundi ^ playS[5];
         tooltips0[3] ^= reminderL.length;
       char teamT[] = {(char)-126,87,105,102,24};
      if ((1 >> (MIN(1, labs(pressureJ[6])))) == 5 && 3 == (1 >> (MIN(3, labs(teamT[4]))))) {
          BOOL runtimescheduler2 = NO;
          BOOL dropdowne = YES;
          long phoneshare5 = 2;
          double filede = 2.0f;
         teamT[3] /= MAX(4, pressureJ[5] % (MAX(5, checkboxb.length)));
         runtimescheduler2 = 6 <= phoneshare5;
         dropdowne = filede < 21.37f && dropdowne;
         phoneshare5 >>= MIN(3, labs(((dropdowne ? 5 : 5) << (MIN(5, labs(3))))));
         filede += (int)filede;
      }
       char template_pM[] = {(char)-48,(char)-3,75,99,(char)-44,104,(char)-85,125,118,55,(char)-25};
       char photom[] = {(char)-68,(char)-81,39,(char)-67,125,(char)-35,(char)-53,(char)-39,79,(char)-30};
          NSArray * tickedK = @[@(465), @(433), @(968)];
          NSDictionary * filed8 = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){106,95,54,95,117,110,97,117,116,104,111,114,105,122,101,100,0}],@{[NSString stringWithUTF8String:(char []){78,0}]:[NSString stringWithUTF8String:(char []){100,0}]}, nil];
          BOOL readm = NO;
         long inactiveh = sizeof(tooltips0) / sizeof(tooltips0[0]);
         photom[8] %= MAX(reminderL.length ^ inactiveh, 2);
         readm = tickedK.count * 1;
         readm = filed8.count + 5;
         readm = 3 / (MAX(9, tickedK.count));
         readm = 4 & filed8.count;
         long securityS = sizeof(photom) / sizeof(photom[0]);
         teamT[2] >>= MIN(2, labs(playS[5] >> (MIN(2, labs((1 + securityS))))));
         long basketballicon2 = sizeof(teamT) / sizeof(teamT[0]);
         playS[2] %= MAX(reminderL.length << (MIN(labs(basketballicon2), 3)), 5);
      if (![checkboxb isEqualToString:reminderL]) {
      }
      do {
         if (680827 == reminderL.length) {
            break;
         }
      } while ((680827 == reminderL.length) && (![reminderL containsString:@(photom[2]).stringValue]));
         long mbnativeadvanced1 = sizeof(photom) / sizeof(photom[0]);
         playS[2] >>= MIN(labs(mbnativeadvanced1), 5);
       NSString * footballtrophyy = [NSString stringWithUTF8String:(char []){100,114,97,119,117,116,105,108,115,95,110,95,53,48,0}];
      do {
          unsigned char z_centerr[] = {167,84,214,31,119,249,95,118,153,183};
          float modalf = 0.0f;
          BOOL sourceO = NO;
         modalf += 5 * footballtrophyy.length;
         z_centerr[5] *= 1;
         modalf *= 1;
         if ([[NSString stringWithUTF8String:(char []){105,118,113,51,104,104,108,119,0}] isEqualToString: footballtrophyy]) {
            break;
         }
      } while (([[NSString stringWithUTF8String:(char []){105,118,113,51,104,104,108,119,0}] isEqualToString: footballtrophyy]) && ([footballtrophyy containsString:@(photom[8]).stringValue]));
      subin8 ^= checkboxb.length / 1;
      if (subin8 == 4274148) {
         break;
      }
   } while ((1 < (overl.count ^ subin8) && (overl.count ^ 1) < 3) && (subin8 == 4274148));
   if ((3 + lessE.length) < 4 && (lessE.length + overl.allKeys.count) < 3) {
      subin8 &= lessE.length * 2;
   }

  [self sendEventWithName: kDelegatesFailedToShowKey  body: @{atPlacementIdKey: placementID,
                                                              atErrMsgKey: error.localizedDescription,
                                                              atExtraKey: extra.at_jsonString }];
}



+ (instancetype)allocWithZone:(struct _NSZone *)zone {
      __block NSDictionary * thailandH = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){115,95,54,48,95,100,105,115,99,0}],@(465), [NSString stringWithUTF8String:(char []){117,110,114,101,102,99,111,117,110,116,95,114,95,53,48,0}],@(603), [NSString stringWithUTF8String:(char []){122,97,108,108,111,99,95,122,95,53,0}],@(155).stringValue, nil];
   __block NSArray * goalF = [NSArray arrayWithObjects:@(545), @(540), @(809), nil];
   while (thailandH[@(goalF.count).stringValue]) {
      break;
   }

    static dispatch_once_t config;
    dispatch_once(&config, ^{
        _instace = [super allocWithZone:zone];
    });
       NSString * videoL = [NSString stringWithUTF8String:(char []){97,118,100,99,116,95,51,95,54,53,0}];
       int strings_ = 2;
         strings_ >>= MIN(5, labs(strings_));
      while (2 <= (4 ^ strings_) && 2 <= (4 ^ videoL.length)) {
         strings_ |= 3 & videoL.length;
         break;
      }
         strings_ |= videoL.length ^ strings_;
         strings_ <<= MIN(5, videoL.length);
         strings_ %= MAX(videoL.length, 4);
         strings_ ^= 2 ^ videoL.length;
      strings_ -= thailandH.count;
   if ((thailandH.allKeys.count & 3) > 1) {
   }
    return _instace;
   for (int u = 0; u < 2; u++) {
   }
   for (int v = 0; v < 3; v++) {
   }
}



- (void)interstitialDidClickForPlacementID:(NSString *)placementID extra:(NSDictionary *)extra {
       unsigned char latnR[] = {188,118,123,89,47,187,30,146};
    int imagenomoredatap = 2;
      long goallogou = sizeof(latnR) / sizeof(latnR[0]);
      latnR[2] *= imagenomoredatap >> (MIN(labs(goallogou), 1));
   do {
      imagenomoredatap %= MAX(1, 3 & imagenomoredatap);
      if (imagenomoredatap == 4770785) {
         break;
      }
   } while (((imagenomoredatap % (MAX(6, latnR[3]))) < 4) && (imagenomoredatap == 4770785));
   for (int q = 0; q < 2; q++) {
      imagenomoredatap *= imagenomoredatap;
   }
   for (int u = 0; u < 3; u++) {
      imagenomoredatap += 1;
   }

  [self sendEventWithName: kDelegatesClickKey  body: @{atPlacementIdKey: placementID,
                                                       atExtraKey: extra.at_jsonString}];
}



- (void)interstitialDidStartPlayingVideoForPlacementID:(NSString *)placementID extra:(NSDictionary *)extra {
       unsigned char yellowcirclebgd[] = {236,225,239,14,126,222,174};
    long ballu = 1;
       NSInteger memberQ = 3;
       unsigned char roundJ[] = {48,28,141,85,244,192,102,226,130};
         roundJ[3] |= 2 & memberQ;
         NSInteger penalty9 = sizeof(roundJ) / sizeof(roundJ[0]);
         roundJ[MAX(memberQ % 9, 5)] &= 3 / (MAX(penalty9, 6));
      do {
         roundJ[7] |= memberQ;
         if (3231169 == ballu) {
            break;
         }
      } while ((2 == (3 << (MIN(1, labs(memberQ)))) || 3 == (roundJ[4] << (MIN(1, labs(memberQ))))) && (3231169 == ballu));
         memberQ %= MAX(2, 2);
      while ((2 >> (MIN(4, labs(memberQ)))) < 4 || 2 < (2 >> (MIN(5, labs(memberQ))))) {
          unsigned char arrowrightwithtail6[] = {238,1,79};
          double awayiconl = 2.0f;
          NSArray * subinL = @[@(8230.0)];
         roundJ[6] &= arrowrightwithtail6[1];
         arrowrightwithtail6[0] -= 3;
         awayiconl += (int)awayiconl | subinL.count;
         awayiconl *= 1 / (MAX(2, subinL.count));
         break;
      }
          char zoomJ[] = {(char)-47,114,68,(char)-95,20,(char)-5,127};
          char iconrightorangez[] = {(char)-39,(char)-8,41,(char)-38,(char)-20,60,63,(char)-81,(char)-63,(char)-27};
          char detail0[] = {(char)-9,80,(char)-113,(char)-56,74,(char)-68,(char)-34,3,(char)-72};
         int libjsiv = sizeof(iconrightorangez) / sizeof(iconrightorangez[0]);
         memberQ %= MAX(detail0[0] ^ (1 + libjsiv), 2);
         int page3 = sizeof(zoomJ) / sizeof(zoomJ[0]);
         zoomJ[6] *= zoomJ[6] & (1 + page3);
      NSInteger containerV = sizeof(roundJ) / sizeof(roundJ[0]);
      yellowcirclebgd[MAX(memberQ % 7, 6)] &= memberQ & containerV;
   while (5 > (yellowcirclebgd[3] >> (MIN(labs(2), 5)))) {
      yellowcirclebgd[2] &= ballu;
      break;
   }
      yellowcirclebgd[6] ^= ballu * 2;

  [self sendEventWithName: kDelegatesVideoStartKey  body: @{atPlacementIdKey: placementID,
                                                            atExtraKey: extra.at_jsonString}];

}


- (void)interstitialDidFailToPlayVideoForPlacementID:(NSString *)placementID error:(NSError *)error extra:(NSDictionary *)extra {
       NSInteger networkQ = 2;
    double overp = 3.0f;
    unsigned char editD[] = {20,191,220,224,140,221,40,216,244,26,243};
   if (networkQ > overp) {
       float live5 = 5.0f;
       NSInteger successe = 0;
       float libmapbufferjni8 = 5.0f;
       int libcxxcomponentsZ = 3;
      for (int l = 0; l < 3; l++) {
          double cornershootR = 1.0f;
          char terms6[] = {(char)-115,75,10,117,(char)-52,60};
          long reactK = 5;
          char mbsplashJ[] = {(char)-68,(char)-41,(char)-69,(char)-45,(char)-45,(char)-2,(char)-74,(char)-12,(char)-65,13,127,69};
         NSInteger xvodg = sizeof(mbsplashJ) / sizeof(mbsplashJ[0]);
         libmapbufferjni8 *= 3 >> (MIN(labs(xvodg), 3));
         cornershootR += (int)cornershootR % 3;
         NSInteger cornerkickj = sizeof(terms6) / sizeof(terms6[0]);
         terms6[0] *= cornerkickj % 3;
         reactK /= MAX(3, 1);
      }
      while (1 < successe) {
         libmapbufferjni8 *= 1;
         break;
      }
      if (2.63f > libmapbufferjni8) {
         libmapbufferjni8 *= (int)libmapbufferjni8;
      }
         libmapbufferjni8 += (int)libmapbufferjni8 >> (MIN(labs((int)live5), 3));
          NSInteger chatroombackgroundU = 3;
          NSDictionary * imagesF = @{[NSString stringWithUTF8String:(char []){102,95,56,54,95,109,111,110,111,119,104,105,116,101,0}]:@(12).stringValue, [NSString stringWithUTF8String:(char []){114,101,116,97,105,110,95,103,95,56,55,0}]:@(488).stringValue, [NSString stringWithUTF8String:(char []){98,97,99,107,114,111,117,110,100,95,108,95,53,54,0}]:@(160).stringValue};
          double rewardo = 0.0f;
         libmapbufferjni8 /= MAX((int)live5, 4);
         chatroombackgroundU *= 1;
         chatroombackgroundU *= imagesF.count;
         rewardo *= 2;
         chatroombackgroundU >>= MIN(labs(5 ^ imagesF.count), 3);
         successe &= (int)libmapbufferjni8;
          int libavcodecy = 3;
          unsigned char largel[] = {18,69,216,71,129,234,181,109,117,26,20,98};
         successe += libavcodecy & 1;
         NSInteger shootN = sizeof(largel) / sizeof(largel[0]);
         libavcodecy += (3 + shootN) % (MAX(largel[6], 10));
          char away2[] = {(char)-109,(char)-76};
          char iconorientationf[] = {46,(char)-13,(char)-54,(char)-37,(char)-98,(char)-64,(char)-97,122};
          NSArray * issubp = @[@(602), @(433), @(919)];
         successe ^= iconorientationf[2] + 2;
         away2[1] %= MAX(5, issubp.count);
         iconorientationf[0] <<= MIN(labs(away2[1] >> (MIN(labs(3), 2))), 5);
         libmapbufferjni8 -= (int)libmapbufferjni8 + 3;
      for (int w = 0; w < 1; w++) {
         live5 /= MAX(1, successe >> (MIN(labs((int)libmapbufferjni8), 1)));
      }
      if ((successe * libmapbufferjni8) > 1.63f && 1 > (successe + 2)) {
          NSDictionary * filterg = @{[NSString stringWithUTF8String:(char []){99,97,99,104,101,102,108,117,115,104,95,103,95,57,56,0}]:@(325), [NSString stringWithUTF8String:(char []){118,95,53,48,95,118,97,105,108,97,98,105,108,105,116,121,0}]:@(762).stringValue, [NSString stringWithUTF8String:(char []){110,95,52,52,0}]:@(116).stringValue};
          unsigned char close3[] = {107,186,230,191,43,22,72,83};
          unsigned char gifgoalbgc[] = {143,206,121,177,242,56};
         successe *= (int)libmapbufferjni8 ^ 2;
         NSInteger launcherU = sizeof(close3) / sizeof(close3[0]);
         close3[0] %= MAX(launcherU, 5);
         gifgoalbgc[3] |= filterg.count % 3;
      }
         libcxxcomponentsZ |= 1 + (int)libmapbufferjni8;
      int iconeditY = sizeof(editD) / sizeof(editD[0]);
      overp += iconeditY >> (MIN(4, labs(2)));
   }
   while (1 < overp) {
      editD[MAX(3, networkQ % 11)] += 2 + (int)overp;
      break;
   }
   for (int z = 0; z < 2; z++) {
       double stationsx = 5.0f;
       unsigned char emoji9[] = {239,145,250,82,13,182,43,86};
       unsigned char basketballplayerplaceholdert[] = {84,207,190};
       unsigned char megaphone5[] = {110,174,245,121,95,15,166,204,247,64};
         long dialog5 = sizeof(megaphone5) / sizeof(megaphone5[0]);
         emoji9[4] %= MAX(2 - dialog5, 3);
         NSInteger rocketX = sizeof(emoji9) / sizeof(emoji9[0]);
         NSInteger alertf = sizeof(megaphone5) / sizeof(megaphone5[0]);
         emoji9[4] += rocketX >> (MIN(labs(alertf), 2));
         emoji9[6] -= 3;
      do {
         long downarrowH = sizeof(emoji9) / sizeof(emoji9[0]);
         long playC = sizeof(basketballplayerplaceholdert) / sizeof(basketballplayerplaceholdert[0]);
         megaphone5[5] <<= MIN(labs(downarrowH ^ playC), 3);
         if (1085999 == networkQ) {
            break;
         }
      } while (((5 - emoji9[4]) > 5 && 4 > (emoji9[4] - 5)) && (1085999 == networkQ));
      while (4 <= (2 ^ basketballplayerplaceholdert[2]) && 2 <= (stationsx / (MAX(4, basketballplayerplaceholdert[2])))) {
         NSInteger bgvipsportL = sizeof(basketballplayerplaceholdert) / sizeof(basketballplayerplaceholdert[0]);
         basketballplayerplaceholdert[2] >>= MIN(labs(bgvipsportL + emoji9[4]), 5);
         break;
      }
      for (int n = 0; n < 3; n++) {
          char baselineS[] = {119,74,37,107,37,(char)-37,112,(char)-13,(char)-12,25,4};
         long iconclosewhitebgu = sizeof(emoji9) / sizeof(emoji9[0]);
         basketballplayerplaceholdert[0] |= iconclosewhitebgu % (MAX(6, basketballplayerplaceholdert[1]));
         int homeplayer8 = sizeof(baselineS) / sizeof(baselineS[0]);
         baselineS[1] %= MAX(3, 1 ^ homeplayer8);
      }
      do {
         long cornerkicko = sizeof(basketballplayerplaceholdert) / sizeof(basketballplayerplaceholdert[0]);
         long rncore5 = sizeof(megaphone5) / sizeof(megaphone5[0]);
         megaphone5[4] -= rncore5 << (MIN(2, labs(cornerkicko)));
         if (2079405 == networkQ) {
            break;
         }
      } while ((emoji9[5] >= 3) && (2079405 == networkQ));
      do {
         NSInteger storeg = sizeof(basketballplayerplaceholdert) / sizeof(basketballplayerplaceholdert[0]);
         basketballplayerplaceholdert[1] &= (int)stationsx - storeg;
         if (2296123 == networkQ) {
            break;
         }
      } while ((2296123 == networkQ) && (4 > (stationsx / (MAX(basketballplayerplaceholdert[2], 2)))));
      do {
         basketballplayerplaceholdert[2] /= MAX(5, (int)stationsx >> (MIN(labs(1), 4)));
         if (1310326 == networkQ) {
            break;
         }
      } while ((4 == (stationsx + basketballplayerplaceholdert[1]) && 3 == (4 + stationsx)) && (1310326 == networkQ));
      for (int h = 0; h < 1; h++) {
          char dependenciesV[] = {67,(char)-121,(char)-114,(char)-67,100};
         int giftbuttona = sizeof(dependenciesV) / sizeof(dependenciesV[0]);
         basketballplayerplaceholdert[0] -= giftbuttona;
      }
       long blacklistP = 3;
       long i_managerJ = 1;
       NSInteger eighteen4 = 0;
      long greenp = sizeof(emoji9) / sizeof(emoji9[0]);
      overp *= 2 ^ greenp;
   }
   do {
       NSDictionary * greyarrowupI = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){121,117,118,97,95,57,95,52,48,0}],@(432).stringValue, [NSString stringWithUTF8String:(char []){113,95,55,54,95,111,102,102,115,99,114,101,101,110,0}],@(276).stringValue, nil];
       NSString * formb = [NSString stringWithUTF8String:(char []){105,95,55,48,95,118,109,110,99,0}];
       int flipperd = 0;
       char actionsK[] = {(char)-12,(char)-37};
         flipperd |= formb.length % 3;
      do {
          unsigned char default_s69[] = {65,127,168};
          NSDictionary * iconorientationk = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){115,95,51,52,95,97,118,101,114,114,111,114,0}],@(514).stringValue, [NSString stringWithUTF8String:(char []){115,101,110,100,116,111,95,114,95,56,48,0}],@(579), nil];
         flipperd /= MAX(greyarrowupI.count % 1, 1);
         default_s69[1] &= iconorientationk.allValues.count | 2;
         if (greyarrowupI.count == 1829746) {
            break;
         }
      } while ((greyarrowupI.count == 1829746) && (formb.length > 5));
      do {
         flipperd &= greyarrowupI.count;
         if (1562771 == greyarrowupI.count) {
            break;
         }
      } while ((greyarrowupI.count < 2) && (1562771 == greyarrowupI.count));
          double modulee = 3.0f;
          NSDictionary * textinputP = @{[NSString stringWithUTF8String:(char []){99,0}]:[NSString stringWithUTF8String:(char []){70,0}], [NSString stringWithUTF8String:(char []){111,0}]:[NSString stringWithUTF8String:(char []){65,0}], [NSString stringWithUTF8String:(char []){82,0}]:[NSString stringWithUTF8String:(char []){112,0}]};
          NSString * actionu = [NSString stringWithUTF8String:(char []){115,117,98,115,101,108,101,99,116,95,102,95,54,52,0}];
         actionsK[1] += 1;
         modulee -= 3 + actionu.length;
         modulee /= MAX(3, textinputP.count);
         modulee -= actionu.length / 1;
         modulee -= textinputP.count / 4;
       float ajax1 = 1.0f;
       float ajaxe = 5.0f;
         ajax1 *= (int)ajax1 * greyarrowupI.count;
      if (2 > (2 << (MIN(5, labs(flipperd)))) || (flipperd + ajaxe) > 5.75f) {
         ajaxe += formb.length ^ flipperd;
      }
      do {
         ajaxe += 2;
         if (662087.f == ajaxe) {
            break;
         }
      } while ((![formb containsString:@(ajaxe).stringValue]) && (662087.f == ajaxe));
      overp *= (int)overp;
      if (overp == 4145515.f) {
         break;
      }
   } while ((overp == 4145515.f) && (networkQ >= 2));
   while (2 < (networkQ << (MIN(labs(editD[1]), 2))) || (networkQ << (MIN(labs(2), 3))) < 3) {
       float searchl = 4.0f;
       char delegate_wB[] = {(char)-1,(char)-50,84,(char)-43,11,(char)-34,(char)-96,(char)-120,(char)-62,91,26};
       char shirtp[] = {(char)-80,53,(char)-5};
       unsigned char iconqqs[] = {231,192,65,181,250,248,253};
          BOOL theme4 = NO;
          NSDictionary * resend5 = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){111,114,103,97,110,105,122,97,116,105,111,110,95,115,95,49,52,0}],@(4627), nil];
         shirtp[1] %= MAX(resend5.allKeys.count | 1, 4);
         theme4 = theme4 && theme4;
         theme4 = 2 * resend5.count;
      do {
         NSInteger t_title0 = sizeof(iconqqs) / sizeof(iconqqs[0]);
         shirtp[0] *= delegate_wB[0] - (1 + t_title0);
         if (networkQ == 2012424) {
            break;
         }
      } while (((shirtp[0] + searchl) <= 5 || 5 <= (5 * shirtp[0])) && (networkQ == 2012424));
         NSInteger componentregistryl = sizeof(iconqqs) / sizeof(iconqqs[0]);
         searchl -= componentregistryl << (MIN(labs(shirtp[2]), 4));
      for (int v = 0; v < 1; v++) {
         NSInteger configureV = sizeof(shirtp) / sizeof(shirtp[0]);
         shirtp[2] %= MAX(4, 2 / (MAX(10, configureV)));
      }
      do {
         iconqqs[1] %= MAX(5, 3);
         if (781639 == networkQ) {
            break;
         }
      } while ((781639 == networkQ) && (searchl <= 5));
      for (int x = 0; x < 1; x++) {
         int detail3 = sizeof(delegate_wB) / sizeof(delegate_wB[0]);
         delegate_wB[8] += 2 / (MAX(10, detail3));
      }
          double update_wq = 5.0f;
         int reactnativeultimatelistviewv = sizeof(delegate_wB) / sizeof(delegate_wB[0]);
         shirtp[2] ^= 3 << (MIN(2, labs(reactnativeultimatelistviewv)));
         update_wq /= MAX((int)update_wq, 2);
         NSInteger sinae = sizeof(delegate_wB) / sizeof(delegate_wB[0]);
         searchl -= shirtp[2] ^ (2 + sinae);
          NSString * catagoryL = [NSString stringWithUTF8String:(char []){115,95,56,54,95,114,101,113,117,105,114,101,0}];
          NSInteger libfileZ = 1;
         iconqqs[MAX(3, libfileZ % 7)] >>= MIN(1, labs(1 * iconqqs[2]));
         libfileZ |= 2 << (MIN(4, catagoryL.length));
         NSInteger animationsp = sizeof(shirtp) / sizeof(shirtp[0]);
         shirtp[1] &= animationsp | 1;
      for (int m = 0; m < 2; m++) {
          BOOL downarrow_ = YES;
          NSInteger servicez = 4;
          unsigned char subtextS[] = {253,141,119,214,178,200,97,83,184};
          unsigned char productg[] = {86,63,120,207};
          unsigned char belld[] = {8,49,23,105,220,151,214,119,89,26,120,50};
         delegate_wB[0] &= ((downarrow_ ? 3 : 1));
         long iconarrowrightorangeY = sizeof(belld) / sizeof(belld[0]);
         downarrow_ = iconarrowrightorangeY == servicez;
         int modelsV = sizeof(belld) / sizeof(belld[0]);
         servicez ^= 1 % (MAX(modelsV, 7));
         int banner4 = sizeof(belld) / sizeof(belld[0]);
         subtextS[6] |= banner4;
         long unreadi = sizeof(productg) / sizeof(productg[0]);
         productg[2] *= unreadi + belld[1];
      }
          NSString * dplusQ = [NSString stringWithUTF8String:(char []){100,101,108,97,95,48,95,54,52,0}];
          NSDictionary * forwardP = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){113,95,49,54,95,110,114,101,102,0}],[NSString stringWithUTF8String:(char []){118,101,114,116,101,120,95,116,95,49,57,0}], nil];
          double pathj = 2.0f;
         shirtp[2] += 1;
         pathj += dplusQ.length;
         pathj += forwardP.count;
         pathj -= 3 - dplusQ.length;
         pathj -= 3 - forwardP.count;
      editD[8] %= MAX(2, 3);
      break;
   }
   for (int q = 0; q < 2; q++) {
      overp -= (int)overp;
   }

  [self sendEventWithName: kDelegatesFailedToPlayKey  body: @{atPlacementIdKey: placementID,
                                                              atErrMsgKey: error.localizedDescription,
                                                              atExtraKey: extra.at_jsonString }];
}


- (void)interstitialDidShowForPlacementID:(NSString *)placementID extra:(NSDictionary *)extra {
       NSArray * confirmationM = @[@(475), @(158)];
    unsigned char otherd[] = {235,207,7,214,212,88,71,110,159,20,112,13};
      NSInteger backicon9 = sizeof(otherd) / sizeof(otherd[0]);
      otherd[5] |= 3 >> (MIN(labs(backicon9), 5));
   for (int s = 0; s < 3; s++) {
      otherd[1] ^= otherd[7];
   }
   if (2 == (otherd[4] | 4) && (confirmationM.count | otherd[4]) == 4) {
       int successr = 4;
       int store_ = 5;
       char subinN[] = {55,(char)-59,(char)-110,(char)-61,121};
       BOOL tempnodatag = NO;
       int redscoreballv = 0;
      do {
         int prediction4 = sizeof(subinN) / sizeof(subinN[0]);
         redscoreballv -= prediction4;
         if (redscoreballv == 4764799) {
            break;
         }
      } while ((redscoreballv == 4764799) && (!tempnodatag && 2 >= (5 - redscoreballv)));
      do {
         store_ -= 1;
         if (3577292 == store_) {
            break;
         }
      } while ((3577292 == store_) && (store_ < successr));
       int mbnativeadvancedL = 2;
      if (1 >= (2 / (MAX(10, redscoreballv)))) {
          unsigned char libswscaleg[] = {130,250,110,13};
          unsigned char sina0[] = {245,199,35,243,30,183};
          long customo = 5;
          NSString * bottomv = [NSString stringWithUTF8String:(char []){114,95,51,49,95,108,97,110,101,0}];
         subinN[MAX(mbnativeadvancedL % 5, 4)] |= 3 - mbnativeadvancedL;
         long launcherS = sizeof(sina0) / sizeof(sina0[0]);
         libswscaleg[0] |= libswscaleg[1] - (1 + launcherS);
         customo ^= customo % 2;
         customo *= bottomv.length;
         customo <<= MIN(labs(bottomv.length + 4), 5);
      }
       double apps1 = 2.0f;
       double libfabricjniJ = 2.0f;
          double runtimescheduleru = 2.0f;
          NSArray * librrcb = @[@(109), @(420), @(492)];
         store_ -= (int)apps1;
         runtimescheduleru += librrcb.count & 1;
         runtimescheduleru *= librrcb.count;
          long awayteamfieldP = 3;
          unsigned char bufferM[] = {193,225,8,188,129,56,68,246};
         long feedbackF = sizeof(subinN) / sizeof(subinN[0]);
         mbnativeadvancedL -= 3 & feedbackF;
         awayteamfieldP <<= MIN(labs(awayteamfieldP >> (MIN(labs(bufferM[0]), 2))), 3);
         bufferM[7] ^= bufferM[3] & 1;
         tempnodatag = 87 >= redscoreballv;
      do {
         libfabricjniJ *= (int)apps1 | 2;
         if (libfabricjniJ == 3062839.f) {
            break;
         }
      } while ((libfabricjniJ == 3062839.f) && (3.34f < (successr + libfabricjniJ) || (3.34f + libfabricjniJ) < 4.43f));
       unsigned char z_count_[] = {196,197,160,221,73,59};
       unsigned char brightness7[] = {36,20,217,172,43,29,24,61};
      while ((5.94f * libfabricjniJ) > 1.9f && 5.94f > (libfabricjniJ * mbnativeadvancedL)) {
          int foundU = 5;
          int photoo = 0;
          NSArray * cricketw = @[@(5850.0)];
          char pressureC[] = {76,30,49,72,32,(char)-127,74,(char)-28,(char)-57,(char)-94};
         mbnativeadvancedL |= 1 & successr;
         int predictionactivev = sizeof(pressureC) / sizeof(pressureC[0]);
         foundU += predictionactivev;
         photoo &= photoo;
         foundU <<= MIN(labs(2 & cricketw.count), 5);
         photoo += cricketw.count;
         break;
      }
      do {
         NSInteger utils1 = sizeof(z_count_) / sizeof(z_count_[0]);
         tempnodatag = store_ < utils1;
         if (tempnodatag ? !tempnodatag : tempnodatag) {
            break;
         }
      } while ((tempnodatag ? !tempnodatag : tempnodatag) && (!tempnodatag));
      do {
         apps1 /= MAX(2 & store_, 4);
         if (228517.f == apps1) {
            break;
         }
      } while ((2.48f > (apps1 / (MAX(2.72f, 5))) && 3 > (mbnativeadvancedL >> (MIN(labs(5), 4)))) && (228517.f == apps1));
      do {
          long textinputc = 3;
          NSString * chart_ = [NSString stringWithUTF8String:(char []){112,95,55,54,95,114,101,99,101,105,118,101,0}];
          BOOL predictionbutton4 = YES;
          int ballZ = 1;
         mbnativeadvancedL &= chart_.length - 3;
         textinputc -= 3 * ballZ;
         textinputc ^= chart_.length;
         predictionbutton4 = textinputc >= 67 || ballZ >= 67;
         if (1354554 == mbnativeadvancedL) {
            break;
         }
      } while ((1354554 == mbnativeadvancedL) && ((mbnativeadvancedL & subinN[3]) > 2 && (subinN[3] & mbnativeadvancedL) > 2));
      do {
         subinN[3] /= MAX(5, (int)libfabricjniJ);
         if (3534371 == confirmationM.count) {
            break;
         }
      } while ((store_ < subinN[4]) && (3534371 == confirmationM.count));
      successr &= confirmationM.count / 4;
   }
       char videocommonk[] = {(char)-33,(char)-79,(char)-121};
       char successg[] = {39,127,121,(char)-91,(char)-31,(char)-111,(char)-75,56,88,(char)-20,(char)-92};
       float customn = 2.0f;
       double time_l0I = 1.0f;
       NSInteger libffmpegkitN = 5;
         customn -= (int)time_l0I;
          char alertj[] = {(char)-83,111,58};
          double frame_mon = 5.0f;
         videocommonk[0] |= (int)frame_mon / (MAX((int)time_l0I, 3));
         int dark3 = sizeof(alertj) / sizeof(alertj[0]);
         alertj[0] ^= dark3;
         long imagenetworkerr5 = sizeof(alertj) / sizeof(alertj[0]);
         frame_mon /= MAX(alertj[1] | imagenetworkerr5, 5);
      for (int k = 0; k < 2; k++) {
         time_l0I *= 3;
      }
         int turnL = sizeof(successg) / sizeof(successg[0]);
         int termsA = sizeof(videocommonk) / sizeof(videocommonk[0]);
         videocommonk[1] &= termsA | turnL;
          unsigned char executorZ[] = {15,9,50,105,209,184,60,175,140,185,94,16};
          NSDictionary * homeplayerM = @{[NSString stringWithUTF8String:(char []){97,116,114,97,99,112,108,117,115,95,52,95,56,55,0}]:@(749)};
          long topone = 0;
         time_l0I /= MAX((int)customn, 3);
         executorZ[0] &= executorZ[6] | topone;
         topone >>= MIN(labs(1 ^ homeplayerM.count), 2);
         topone -= homeplayerM.count;
         NSInteger libfbjnim = sizeof(videocommonk) / sizeof(videocommonk[0]);
         successg[1] += libfbjnim;
      while (successg[0] <= 2) {
          NSDictionary * huaweiw = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){102,95,56,57,95,102,111,108,100,101,114,0}],[NSArray arrayWithObjects:[NSString stringWithUTF8String:(char []){103,95,49,57,95,98,97,110,110,101,114,0}], [NSString stringWithUTF8String:(char []){112,114,105,110,99,105,112,97,108,95,48,95,53,55,0}], [NSString stringWithUTF8String:(char []){104,95,52,53,95,98,114,111,119,110,0}], nil], nil];
         successg[MAX(libffmpegkitN % 11, 8)] *= libffmpegkitN;
         break;
      }
      customn /= MAX(confirmationM.count + 5, 3);

  
  [self sendEventWithName: kDelegatesShowKey  body: @{atPlacementIdKey: placementID,
                                                      atExtraKey: extra.at_jsonString}];

}

@end
