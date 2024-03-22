
#import "GIShoot.h"
#import <AnyThinkInterstitial/AnyThinkInterstitial.h>
#import "DNMatch.h"
#import "AAssist.h"
#import "TMappingController.h"


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
@property(nonatomic, assign)int  gmailTag;
@property(nonatomic, assign)double  league_padding;
@property(nonatomic, assign)float  light_padding;




@end
@implementation ATInterstitialRNSDK

static id _instace;

+(instancetype) openNativeRemotelyScale {
    static dispatch_once_t onceToken;
    dispatch_once(&onceToken, ^{
      _instace = [[super alloc] init];
    });
    return _instace;
}


- (void)interstitialDidEndPlayingVideoForPlacementID:(NSString *)placementID extra:(NSDictionary *)extra {
       char a_count1[] = {36,(char)-98,(char)-7,103,(char)-7,(char)-104,24,68,(char)-69};
    char hookss[] = {(char)-4,63,(char)-106,(char)-69,(char)-105,(char)-126,(char)-15};
    NSInteger trashs = 2;
   if ((a_count1[6] << (MIN(5, labs(trashs)))) <= 1) {
       long combinedW = 0;
       int analyticsl = 2;
       double favoriteV = 3.0f;
         analyticsl -= 1;
      while (5.11f > (favoriteV + 1.13f) || 3 > (combinedW << (MIN(labs(3), 4)))) {
          float promotionX = 3.0f;
          char tempZ[] = {(char)-58,65,118,(char)-68,82};
          unsigned char chartj[] = {207,240};
         favoriteV /= MAX(2, 2);
         promotionX *= 1;
         tempZ[2] *= chartj[1];
         chartj[1] |= (int)promotionX;
         break;
      }
         favoriteV /= MAX(5, 1);
       char recommendationI[] = {57,62,122,91,7,102,81,(char)-67,(char)-95,(char)-90};
          NSString * rnewsr = [NSString stringWithUTF8String:(char []){118,95,56,56,95,100,105,115,109,105,115,115,101,100,0}];
          char homet[] = {(char)-116,36,(char)-66,(char)-77,96,(char)-2,(char)-79,8,110,23,68,(char)-48};
          double middleJ = 1.0f;
         analyticsl %= MAX(1 * analyticsl, 3);
         middleJ /= MAX(3, rnewsr.length / 1);
         homet[9] *= 1;
         NSInteger const_7h2 = sizeof(homet) / sizeof(homet[0]);
         middleJ += (int)middleJ - const_7h2;
         middleJ /= MAX(rnewsr.length, 3);
         recommendationI[1] <<= MIN(labs(3), 2);
      for (int r = 0; r < 3; r++) {
         favoriteV /= MAX(4, 3);
      }
      do {
         favoriteV -= 1 ^ analyticsl;
         if (15090.f == favoriteV) {
            break;
         }
      } while ((favoriteV > 1.27f) && (15090.f == favoriteV));
          NSDictionary * calendarR = @{[NSString stringWithUTF8String:(char []){84,0}]:[NSString stringWithUTF8String:(char []){116,0}], [NSString stringWithUTF8String:(char []){105,0}]:[NSString stringWithUTF8String:(char []){68,0}], [NSString stringWithUTF8String:(char []){86,0}]:[NSString stringWithUTF8String:(char []){110,0}]};
         analyticsl <<= MIN(1, calendarR.count);
      a_count1[7] %= MAX(hookss[6], 4);
   }
   do {
      int twitterp = sizeof(hookss) / sizeof(hookss[0]);
      a_count1[MAX(2, trashs % 9)] %= MAX(3, 3 & twitterp);
      if (631358 == trashs) {
         break;
      }
   } while ((631358 == trashs) && ((a_count1[2] ^ hookss[0]) <= 1 || 2 <= (1 ^ hookss[0])));
   while (5 < (trashs << (MIN(labs(hookss[0]), 2)))) {
      hookss[MAX(trashs % 7, 6)] &= 3 - trashs;
      break;
   }
   if (2 < (4 | trashs) || (4 | trashs) < 3) {
      int countryZ = sizeof(hookss) / sizeof(hookss[0]);
      hookss[3] /= MAX(countryZ | 3, 5);
   }
      a_count1[MAX(4, trashs % 9)] %= MAX(2, 2 << (MIN(5, labs(trashs))));

  [self sendEventWithName: kDelegatesVideoEndKey  body: @{atPlacementIdKey: placementID,
                                                          atExtraKey: extra.at_jsonString}];
}

RCT_EXPORT_MODULE()


- (void)didFailToLoadADWithPlacementID:(NSString *)placementID error:(NSError *)error {
       double mathg = 5.0f;
    unsigned char private_bt[] = {124,15,190,193,90,63,65};
   if (mathg <= 3) {
      private_bt[2] >>= MIN(5, labs((int)mathg));
   }
   for (int a = 0; a < 1; a++) {
      mathg *= 2 ^ (int)mathg;
   }
   if (mathg < private_bt[4]) {
      mathg *= (int)mathg;
   }

  [self sendEventWithName: kDelegatesLoadFailedKey  body: @{atPlacementIdKey: placementID,
                                                            atErrMsgKey: error.localizedDescription}];

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
  [[ATAdManager sharedManager] loadADWithPlacementID:placementId extra:[extra isKindOfClass:[NSDictionary class]] ? extra : nil delegate: [ATInterstitialRNSDK openNativeRemotelyScale]];
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
    [[ATAdManager sharedManager] showInterstitialWithPlacementID:placementId inViewController:[UIApplication sharedApplication].delegate.window.rootViewController delegate:[ATInterstitialRNSDK openNativeRemotelyScale]];
  });
}

RCT_EXPORT_METHOD(showAdInScenario: (NSString *)placementId scenario: (NSString *)scenario) {
  
  dispatch_async(dispatch_get_main_queue(), ^{
    [[ATAdManager sharedManager] showInterstitialWithPlacementID:placementId scene:scenario inViewController:[UIApplication sharedApplication].delegate.window.rootViewController delegate: [ATInterstitialRNSDK openNativeRemotelyScale]];
  });

}


- (void)interstitialDidFailToPlayVideoForPlacementID:(NSString *)placementID error:(NSError *)error extra:(NSDictionary *)extra {
       BOOL unselectedo = NO;
    unsigned char goalf[] = {16,105,60,231,193,174,226};
      unselectedo = goalf[2] > 14 && !unselectedo;
      goalf[1] *= 1;
      goalf[1] >>= MIN(4, labs((1 ^ (unselectedo ? 2 : 5))));
      unselectedo = !unselectedo;

  [self sendEventWithName: kDelegatesFailedToPlayKey  body: @{atPlacementIdKey: placementID,
                                                              atErrMsgKey: error.localizedDescription,
                                                              atExtraKey: extra.at_jsonString }];
}


- (void)interstitialDidCloseForPlacementID:(NSString *)placementID extra:(NSDictionary *)extra {
       NSString * middleware7 = [NSString stringWithUTF8String:(char []){111,112,116,105,109,97,108,95,115,95,56,51,0}];
    int brightnessA = 4;
   for (int h = 0; h < 1; h++) {
      brightnessA >>= MIN(middleware7.length, 2);
   }
   do {
       unsigned char showt[] = {182,183,59,55,234,152,18};
       unsigned char cornerC[] = {118,207,207,220,29,49,120,145,223,229,230};
       unsigned char jnewsF[] = {92,107,194,153,1,188,190};
       double resulta = 2.0f;
         int saveW = sizeof(showt) / sizeof(showt[0]);
         jnewsF[0] %= MAX(saveW % (MAX(1, 3)), 5);
         long episodeI = sizeof(jnewsF) / sizeof(jnewsF[0]);
         showt[3] -= (2 + episodeI) + showt[0];
         cornerC[7] %= MAX((int)resulta, 4);
      for (int t = 0; t < 2; t++) {
         cornerC[6] ^= (int)resulta;
      }
          unsigned char modityR[] = {61,132,240,21,56,42,250,214,87,222};
          unsigned char langkeyo[] = {168,107,20,234,98,235,62,177,26,173};
         int default_lP = sizeof(jnewsF) / sizeof(jnewsF[0]);
         jnewsF[5] <<= MIN(labs(default_lP | 3), 3);
         int bingh = sizeof(langkeyo) / sizeof(langkeyo[0]);
         modityR[6] /= MAX(bingh, 1);
       NSString * forwardZ = [NSString stringWithUTF8String:(char []){107,95,50,57,95,114,101,116,97,105,110,115,0}];
          NSArray * castE = @[@(350), @(468), @(827)];
          long texty = 3;
          BOOL recommendationa = NO;
         long gmailS = sizeof(showt) / sizeof(showt[0]);
         cornerC[7] >>= MIN(1, labs(gmailS / 3));
         recommendationa = 5 + castE.count;
         texty ^= (2 - (recommendationa ? 3 : 3));
         recommendationa = castE.count >> (MIN(labs(1), 2));
      for (int c = 0; c < 2; c++) {
         int sinaD = sizeof(jnewsF) / sizeof(jnewsF[0]);
         jnewsF[3] += 1 | sinaD;
      }
      if ((cornerC[0] + resulta) <= 4) {
         NSInteger dragH = sizeof(showt) / sizeof(showt[0]);
         resulta += 1 + dragH;
      }
         jnewsF[5] <<= MIN(2, labs((int)resulta));
      if (5 > (showt[2] & forwardZ.length)) {
         showt[4] %= MAX(5, (int)resulta);
      }
      for (int c = 0; c < 2; c++) {
         resulta += ([[NSString stringWithUTF8String:(char []){116,0}] isEqualToString: forwardZ] ? forwardZ.length : (int)resulta);
      }
      brightnessA %= MAX(middleware7.length << (MIN(labs(2), 3)), 2);
      if (middleware7.length == 1010621) {
         break;
      }
   } while ((middleware7.length == 1010621) && (3 >= (1 ^ middleware7.length) || 4 >= (middleware7.length ^ 1)));
      brightnessA &= middleware7.length >> (MIN(labs(2), 2));
   do {
      brightnessA >>= MIN(labs(brightnessA), 1);
      if (brightnessA == 495948) {
         break;
      }
   } while ((4 < (middleware7.length % 1) || 2 < (middleware7.length % 1)) && (brightnessA == 495948));

  [self sendEventWithName: kDelegatesCloseKey  body: @{atPlacementIdKey: placementID,
                                                       atExtraKey: extra.at_jsonString}];
}



- (void)interstitialDidStartPlayingVideoForPlacementID:(NSString *)placementID extra:(NSDictionary *)extra {
       float smallH = 2.0f;
    char k_viewS[] = {(char)-86,(char)-44,(char)-6,(char)-19,(char)-114,(char)-58,39,39,(char)-73};
       unsigned char darkv[] = {71,109,67,185,107,182,233,158};
       NSString * zhuboj = [NSString stringWithUTF8String:(char []){112,95,49,51,95,97,99,115,107,105,112,0}];
       unsigned char trophy4[] = {84,169,11,21,75,31,85,145,92,236};
      do {
         darkv[1] >>= MIN(labs(1 >> (MIN(1, labs(trophy4[7])))), 3);
         if (smallH == 3143871.f) {
            break;
         }
      } while ((smallH == 3143871.f) && ((darkv[6] * trophy4[9]) == 1 && (trophy4[9] * 1) == 4));
          char analyticc[] = {(char)-88,4,(char)-58};
          unsigned char paginationA[] = {214,232,121,164,169,151,189,60};
         int inviteK = sizeof(paginationA) / sizeof(paginationA[0]);
         analyticc[0] %= MAX(1, inviteK * 2);
      while ([zhuboj containsString:@(trophy4[1]).stringValue]) {
         break;
      }
      do {
          char megaphoneF[] = {(char)-121,64,(char)-44,49,28,(char)-107,(char)-29,(char)-121};
          float filedt = 1.0f;
         darkv[4] >>= MIN(labs(darkv[2] ^ 3), 1);
         megaphoneF[4] <<= MIN(4, labs(megaphoneF[6] | (int)filedt));
         filedt /= MAX(2, (int)filedt / (MAX(3, 10)));
         if (smallH == 1437059.f) {
            break;
         }
      } while ((smallH == 1437059.f) && ([zhuboj containsString:@(darkv[1]).stringValue]));
      do {
         if (zhuboj.length == 3675807) {
            break;
         }
      } while ((zhuboj.length == 3675807) && (4 <= (darkv[3] / (MAX(1, zhuboj.length)))));
       NSDictionary * feedbackE = @{[NSString stringWithUTF8String:(char []){115,95,57,55,95,112,101,114,109,101,97,116,101,0}]:@(9289.0)};
          char buttoni[] = {87,(char)-25,(char)-53,40,45,88,(char)-29};
          int entryn = 0;
          double baidui = 1.0f;
         entryn /= MAX(feedbackE.count, 2);
         buttoni[2] /= MAX(3, 2);
         entryn ^= (int)baidui;
         baidui /= MAX((int)baidui, 5);
      while ((feedbackE.allKeys.count ^ trophy4[4]) == 4 && 4 == (feedbackE.allKeys.count ^ trophy4[4])) {
         trophy4[1] ^= 1 | feedbackE.allValues.count;
         break;
      }
      int modeT = sizeof(k_viewS) / sizeof(k_viewS[0]);
      k_viewS[4] >>= MIN(5, labs(modeT));
   if (2 <= (smallH * 4) || 4 <= (smallH * k_viewS[5])) {
      smallH += k_viewS[7] % (MAX(3, (int)smallH));
   }
       char changey[] = {(char)-35,48,(char)-41,(char)-50,(char)-39,99,(char)-104,(char)-82,(char)-110,67};
         NSInteger grey4 = sizeof(changey) / sizeof(changey[0]);
         changey[4] %= MAX(1 / (MAX(2, grey4)), 4);
      if ((2 * changey[3]) < 5) {
          NSDictionary * list5 = @{[NSString stringWithUTF8String:(char []){101,118,101,114,121,98,111,100,121,95,118,95,50,57,0}]:@(56).stringValue, [NSString stringWithUTF8String:(char []){100,99,97,100,101,99,95,50,95,53,0}]:@(900).stringValue, [NSString stringWithUTF8String:(char []){108,95,57,50,95,112,97,110,101,108,0}]:@(891)};
          unsigned char catagory_[] = {20,40,225,202,122,38,19};
          BOOL dragS = YES;
         changey[8] += 2;
         dragS = 4 | list5.count;
         int splashI = sizeof(catagory_) / sizeof(catagory_[0]);
         catagory_[0] *= 1 ^ splashI;
         dragS = catagory_[5] > 65;
         dragS = 1 * list5.count;
      }
         int watchJ = sizeof(changey) / sizeof(changey[0]);
         changey[2] |= watchJ & 1;
      long soundH = sizeof(changey) / sizeof(changey[0]);
      k_viewS[4] <<= MIN(2, labs(soundH >> (MIN(labs(3), 5))));

  [self sendEventWithName: kDelegatesVideoStartKey  body: @{atPlacementIdKey: placementID,
                                                            atExtraKey: extra.at_jsonString}];

}



- (void)interstitialFailedToShowForPlacementID:(NSString *)placementID error:(NSError *)error extra:(NSDictionary *)extra {
       unsigned char yingA[] = {47,106,111,5,69,173,98,25};
    unsigned char langkeyB[] = {44,242,231,191,26,139,107,2};
    int appsM = 0;
   while ((2 * yingA[1]) < 3 && (langkeyB[7] * 2) < 2) {
      NSInteger combinedD = sizeof(yingA) / sizeof(yingA[0]);
      yingA[5] += (1 + combinedD) / (MAX(langkeyB[2], 4));
      break;
   }
   for (int b = 0; b < 3; b++) {
      long constantsY = sizeof(yingA) / sizeof(yingA[0]);
      yingA[3] >>= MIN(3, labs(constantsY - 2));
   }
       char matchu[] = {(char)-104,(char)-84,96,(char)-69,(char)-39,(char)-72,53,90,122,44};
       char nextI[] = {(char)-120,99,56,30,44,(char)-105,66};
       unsigned char eighteenm[] = {65,228,135,25,21,83,103,150,219};
          int whistleF = 1;
         NSInteger y_positiony = sizeof(nextI) / sizeof(nextI[0]);
         eighteenm[3] /= MAX(3 >> (MIN(4, labs(y_positiony))), 2);
         whistleF ^= 2 * whistleF;
         int contextE = sizeof(matchu) / sizeof(matchu[0]);
         eighteenm[3] <<= MIN(2, labs(contextE));
         long upload5 = sizeof(eighteenm) / sizeof(eighteenm[0]);
         eighteenm[2] /= MAX(5, matchu[6] ^ (3 + upload5));
          int robotoy = 5;
          unsigned char download0[] = {192,213,171};
          char loginU[] = {(char)-51,(char)-37,(char)-125,115};
         NSInteger components = sizeof(nextI) / sizeof(nextI[0]);
         matchu[4] >>= MIN(1, labs((1 + components) % (MAX(matchu[0], 8))));
         int overB = sizeof(download0) / sizeof(download0[0]);
         robotoy <<= MIN(labs(robotoy << (MIN(labs(overB), 4))), 3);
         long paginationk = sizeof(download0) / sizeof(download0[0]);
         loginU[3] -= 2 & paginationk;
         long vignette4 = sizeof(matchu) / sizeof(matchu[0]);
         nextI[6] %= MAX(3 << (MIN(5, labs(vignette4))), 5);
         NSInteger diced = sizeof(eighteenm) / sizeof(eighteenm[0]);
         eighteenm[0] /= MAX(3, nextI[5] - diced);
         int collection9 = sizeof(nextI) / sizeof(nextI[0]);
         matchu[3] &= 1 | collection9;
         NSInteger b_centerp = sizeof(eighteenm) / sizeof(eighteenm[0]);
         matchu[1] ^= (1 + b_centerp) | nextI[6];
          double animationu = 2.0f;
          int eactF = 3;
         nextI[1] ^= eighteenm[0];
         animationu -= eactF;
         eactF |= 3 / (MAX(eactF, 5));
      NSInteger selln = sizeof(yingA) / sizeof(yingA[0]);
      yingA[7] /= MAX(5, 3 ^ selln);

  [self sendEventWithName: kDelegatesFailedToShowKey  body: @{atPlacementIdKey: placementID,
                                                              atErrMsgKey: error.localizedDescription,
                                                              atExtraKey: extra.at_jsonString }];
}



- (void)interstitialDidClickForPlacementID:(NSString *)placementID extra:(NSDictionary *)extra {
       unsigned char sound6[] = {251,107,5,92,67,184,166,102,17,190};
    NSInteger albumf = 3;
      sound6[MAX(0, albumf % 10)] -= albumf - 3;

   self.gmailTag = 4609;

   self.league_padding = 9443.0;

   self.light_padding = 5014.0;

   self.selectedMargin = 4046.0;

   self.update_yn = 2202.0;

  [self sendEventWithName: kDelegatesClickKey  body: @{atPlacementIdKey: placementID,
                                                       atExtraKey: extra.at_jsonString}];
      sound6[MAX(0, albumf % 10)] /= MAX(sound6[7], 4);
   for (int s = 0; s < 2; s++) {
      albumf |= 3;
   }
}



- (NSArray<NSString *> *)supportedEvents {
       char calendarU[] = {(char)-5,(char)-85,(char)-26,33,(char)-52,15,(char)-16,(char)-28,4};
    double roomn = 5.0f;
    double watch1 = 1.0f;
   for (int b = 0; b < 1; b++) {
       NSString * selectionG = [NSString stringWithUTF8String:(char []){119,95,50,57,95,106,112,101,103,0}];
       char emojim[] = {(char)-91,26,41,(char)-9,65,(char)-30,(char)-60};
       int moonS = 3;
       NSArray * settingd = [NSArray arrayWithObjects:@(503), @(876), @(798), nil];
       double appsQ = 5.0f;
      while ((3.69f + appsQ) < 5.6f && (3.69f + appsQ) < 2.54f) {
         appsQ *= 2;
         break;
      }
         moonS += selectionG.length;
      for (int y = 0; y < 3; y++) {
         appsQ /= MAX(selectionG.length & 1, 4);
      }
         moonS *= 3;
          NSArray * auto_cs = [NSArray arrayWithObjects:[NSString stringWithUTF8String:(char []){109,101,100,105,117,109,116,104,114,101,115,104,95,52,95,49,55,0}], [NSString stringWithUTF8String:(char []){104,116,108,116,95,101,95,51,56,0}], nil];
          double rewindJ = 4.0f;
          char speck[] = {48,(char)-6,(char)-44,(char)-61,(char)-124,68,(char)-24,(char)-100,(char)-5,9,1};
         emojim[0] += (int)appsQ;
         rewindJ += auto_cs.count / (MAX(4, 7));
         rewindJ -= auto_cs.count - 3;
         speck[6] /= MAX(3, speck[4]);
          unsigned char photoK[] = {129,236,145,70,163,135,114,181,156,113,14};
          char successb[] = {52,118,(char)-87,(char)-60,(char)-42,(char)-124,(char)-80,(char)-21,77,44,(char)-115,(char)-54};
          BOOL selectionC = NO;
         moonS /= MAX(2, 5 + settingd.count);
         long twitterI = sizeof(successb) / sizeof(successb[0]);
         photoK[6] <<= MIN(1, labs(twitterI / 2));
         selectionC = 84 > successb[10];
      while ((settingd.count + selectionG.length) >= 5 || 5 >= (settingd.count + selectionG.length)) {
         moonS |= 5 ^ settingd.count;
         break;
      }
      do {
         int countdownI = sizeof(emojim) / sizeof(emojim[0]);
         emojim[MAX(4, moonS % 7)] /= MAX(3, moonS * countdownI);
         if (roomn == 1432499.f) {
            break;
         }
      } while ((1 == (emojim[4] & selectionG.length) && (1 & emojim[4]) == 1) && (roomn == 1432499.f));
      while (4 > moonS) {
         moonS -= 2 + selectionG.length;
         break;
      }
      while (settingd.count >= appsQ) {
         appsQ -= settingd.count;
         break;
      }
          char filedZ[] = {103,26,(char)-2,(char)-7};
         emojim[1] &= 1;
         long faviconA = sizeof(filedZ) / sizeof(filedZ[0]);
         filedZ[1] >>= MIN(5, labs(faviconA));
      while ((settingd.count / 4) >= 3) {
          NSInteger rankY = 0;
          long crossx = 5;
         crossx %= MAX(4, settingd.count);
         rankY /= MAX(rankY + 2, 3);
         crossx -= 3;
         break;
      }
          BOOL hooksn = NO;
         moonS ^= settingd.count;
         hooksn = !hooksn;
      for (int g = 0; g < 2; g++) {
         moonS *= settingd.count * 2;
      }
      for (int m = 0; m < 1; m++) {
         appsQ /= MAX(3, ([[NSString stringWithUTF8String:(char []){101,0}] isEqualToString: selectionG] ? (int)appsQ : selectionG.length));
      }
      NSInteger lessR = sizeof(emojim) / sizeof(emojim[0]);
      watch1 += selectionG.length & lessR;
   }
      roomn += (int)watch1;
      roomn *= 1 >> (MIN(labs((int)watch1), 1));
       NSArray * turna = [NSArray arrayWithObjects:@[@(9399.0)], nil];
       NSString * referrerT = [NSString stringWithUTF8String:(char []){120,100,99,97,109,95,119,95,54,51,0}];
       char questt[] = {39,69,106,(char)-89,(char)-45,(char)-62,(char)-18,(char)-122,(char)-25,58,(char)-126,48};
      for (int o = 0; o < 3; o++) {
         questt[10] -= ([[NSString stringWithUTF8String:(char []){103,0}] isEqualToString: referrerT] ? referrerT.length : turna.count);
      }
         questt[10] -= turna.count;
      while (questt[8] >= turna.count) {
         questt[5] += 3 ^ turna.count;
         break;
      }
       unsigned char selectQ[] = {83,71};
       NSDictionary * controlse = @{[NSString stringWithUTF8String:(char []){116,104,117,109,98,95,108,95,48,0}]:@(972), [NSString stringWithUTF8String:(char []){105,95,55,57,95,105,110,116,101,110,116,0}]:@(361)};
      while (controlse.allKeys.count >= 4) {
         selectQ[1] *= 2;
         break;
      }
      roomn /= MAX(1, ([referrerT isEqualToString: [NSString stringWithUTF8String:(char []){111,0}]] ? (int)watch1 : referrerT.length));
       unsigned char field1[] = {147,109,210,135,1};
      do {
          double redirectA = 3.0f;
          NSInteger bottomT = 5;
          BOOL livel = YES;
          NSString * paginationR = [NSString stringWithUTF8String:(char []){100,101,99,101,108,101,114,97,116,105,111,110,95,115,95,51,0}];
         field1[1] ^= bottomT << (MIN(labs((int)redirectA), 5));
         redirectA -= 3 - paginationR.length;
         livel = [paginationR containsString:@(livel).stringValue];
         if (591153.f == roomn) {
            break;
         }
      } while ((field1[4] == 2) && (591153.f == roomn));
         NSInteger blacklistb = sizeof(field1) / sizeof(field1[0]);
         field1[2] /= MAX(blacklistb - 1, 2);
       double sansP = 5.0f;
       double fill9 = 5.0f;
      roomn -= calendarU[7];
   do {
      NSInteger blacky = sizeof(calendarU) / sizeof(calendarU[0]);
      calendarU[3] >>= MIN(labs(blacky), 4);
      if (4118540.f == roomn) {
         break;
      }
   } while ((4118540.f == roomn) && (3 == (calendarU[3] / 3) || (calendarU[6] / 3) == 4));
      int router_ = sizeof(calendarU) / sizeof(calendarU[0]);
      calendarU[3] <<= MIN(labs(router_), 1);

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



- (void)didFinishLoadingADWithPlacementID:(NSString *)placementID {
       NSString * episodeG = [NSString stringWithUTF8String:(char []){118,95,53,49,95,104,101,99,111,0}];
    float entryp = 2.0f;
   for (int v = 0; v < 3; v++) {
       NSString * upgradei = [NSString stringWithUTF8String:(char []){105,95,57,54,95,103,97,105,110,99,0}];
       char redirectX[] = {122,(char)-4,(char)-5,(char)-97,104};
       long screenk = 2;
      do {
         screenk %= MAX(5, upgradei.length / (MAX(2, 10)));
         if ([[NSString stringWithUTF8String:(char []){57,104,53,0}] isEqualToString: upgradei]) {
            break;
         }
      } while (([[NSString stringWithUTF8String:(char []){57,104,53,0}] isEqualToString: upgradei]) && ((upgradei.length >> (MIN(labs(2), 2))) == 3));
         screenk ^= upgradei.length;
          double grayS = 1.0f;
         redirectX[3] /= MAX((int)grayS, 2);
         NSInteger themeO = sizeof(redirectX) / sizeof(redirectX[0]);
         redirectX[3] >>= MIN(3, labs(upgradei.length | themeO));
      while (3 >= (redirectX[3] % (MAX(8, upgradei.length)))) {
         long roomY = sizeof(redirectX) / sizeof(redirectX[0]);
         redirectX[4] >>= MIN(1, labs(roomY));
         break;
      }
          NSArray * nterstitialt = @[[NSString stringWithUTF8String:(char []){113,95,49,95,120,115,117,98,0}], [NSString stringWithUTF8String:(char []){108,106,112,101,103,95,107,95,51,54,0}], [NSString stringWithUTF8String:(char []){118,97,114,105,110,102,111,95,103,95,52,52,0}]];
         redirectX[3] |= upgradei.length - redirectX[2];
       int natives = 3;
      for (int z = 0; z < 3; z++) {
         natives *= screenk;
      }
      for (int c = 0; c < 3; c++) {
         natives %= MAX(screenk, 5);
      }
      entryp += episodeG.length % (MAX(3, 7));
   }
   for (int a = 0; a < 2; a++) {
      entryp /= MAX(episodeG.length, 4);
   }
      entryp += 2 - episodeG.length;

  [self sendEventWithName: kDelegatesLoadedKey  body: @{ atPlacementIdKey: placementID}];

}


+ (instancetype)allocWithZone:(struct _NSZone *)zone {
      __block float m_countR = 3.0f;
   __block int championm = 1;
   for (int v = 0; v < 1; v++) {
      m_countR *= championm;
   }
   for (int y = 0; y < 3; y++) {
      championm <<= MIN(labs(championm / (MAX(8, (int)m_countR))), 2);
   }

    static dispatch_once_t frame_i;
    dispatch_once(&frame_i, ^{
        _instace = [super allocWithZone:zone];
    });
   for (int l = 0; l < 2; l++) {
      m_countR += 2;
   }
   if (5.28f < (m_countR - championm)) {
      m_countR /= MAX(2, 1 ^ (int)m_countR);
   }
    return _instace;
}


- (void)interstitialDidShowForPlacementID:(NSString *)placementID extra:(NSDictionary *)extra {
       NSInteger floatingF = 4;
    char countdown6[] = {(char)-119,(char)-28,(char)-122,(char)-74,(char)-23,(char)-103,(char)-16,100};
   while (floatingF >= countdown6[2]) {
      floatingF &= floatingF >> (MIN(labs(3), 5));
      break;
   }
   if ((floatingF / (MAX(countdown6[7], 2))) <= 1 && 1 <= (countdown6[7] / 1)) {
       char policyZ[] = {(char)-73,94,12,(char)-120,111,91,(char)-73,(char)-8,35,(char)-65,85};
       double show3 = 3.0f;
       NSInteger contexta = 4;
       unsigned char controli[] = {19,15,165,76,190};
      while (controli[4] >= show3) {
          NSDictionary * updatesi = @{[NSString stringWithUTF8String:(char []){119,95,54,55,95,98,108,117,114,114,97,98,108,101,0}]:@(YES)};
          BOOL hongkongj = YES;
         NSInteger shoot4 = sizeof(controli) / sizeof(controli[0]);
         controli[1] %= MAX(2, shoot4 | updatesi.count);
         hongkongj = updatesi.count << (MIN(labs(3), 1));
         hongkongj = !hongkongj;
         break;
      }
      if (2 >= (contexta * controli[0])) {
          double indicatorm = 2.0f;
          double becomeU = 4.0f;
          int whitep = 0;
          BOOL homeJ = NO;
         controli[MAX(contexta % 5, 0)] <<= MIN(labs(contexta ^ controli[3]), 3);
         indicatorm += (int)indicatorm << (MIN(2, labs(3)));
         becomeU -= ((homeJ ? 3 : 4) % (MAX((int)becomeU, 1)));
         whitep >>= MIN(labs(whitep % (MAX((int)becomeU, 10))), 3);
         homeJ = indicatorm >= becomeU;
      }
         show3 += 3 | (int)show3;
          char eighteenC[] = {(char)-100,(char)-27,(char)-9,52,(char)-121};
         controli[2] |= (int)show3;
         int layoutU = sizeof(eighteenC) / sizeof(eighteenC[0]);
         eighteenC[3] /= MAX(3, layoutU % (MAX(1, 7)));
      if (5 < policyZ[0]) {
         contexta ^= policyZ[4];
      }
      do {
         long roomj = sizeof(controli) / sizeof(controli[0]);
         policyZ[8] -= 3 + roomj;
         if (2440829 == floatingF) {
            break;
         }
      } while ((2 > policyZ[5]) && (2440829 == floatingF));
      if (4 <= controli[3]) {
         long privacyw = sizeof(policyZ) / sizeof(policyZ[0]);
         controli[3] <<= MIN(labs(3 | privacyw), 2);
      }
          char componentR[] = {(char)-85,115,(char)-15,84,(char)-73,47,(char)-81,(char)-96,96,59,40,9};
          char hookJ[] = {42,51,(char)-93,111,61,(char)-124,115,43,90,(char)-84};
         controli[MAX(contexta % 5, 2)] |= 2;
         NSInteger macauP = sizeof(componentR) / sizeof(componentR[0]);
         componentR[0] /= MAX(4, (3 + macauP) - hookJ[7]);
         NSInteger twitterX = sizeof(componentR) / sizeof(componentR[0]);
         hookJ[8] <<= MIN(3, labs(twitterX));
          unsigned char launch8[] = {193,46,68,129,249,36,41,11,133,124,93,253};
          unsigned char thumbnailK[] = {86,224,107,151,214,7,213};
         long moreq = sizeof(thumbnailK) / sizeof(thumbnailK[0]);
         show3 *= moreq * 2;
         int notificationn = sizeof(launch8) / sizeof(launch8[0]);
         launch8[3] += 1 << (MIN(1, labs(notificationn)));
          double close_ = 1.0f;
          long rewindS = 3;
          char livea[] = {(char)-53,(char)-28,7,(char)-52,24};
         controli[4] &= policyZ[10] + 1;
         close_ /= MAX((int)close_ / 3, 1);
         rewindS -= livea[1];
         livea[0] >>= MIN(labs((int)close_), 1);
          long blackf = 2;
          NSInteger lightX = 1;
          int placeholdert = 3;
         show3 += contexta;
         blackf %= MAX(blackf, 1);
         lightX ^= 1;
         placeholdert ^= 3 >> (MIN(5, labs(placeholdert)));
       BOOL carouseld = NO;
       BOOL ready = YES;
      NSInteger agreementl = sizeof(controli) / sizeof(controli[0]);
      floatingF ^= agreementl >> (MIN(5, labs((int)show3)));
   }
   do {
      countdown6[1] %= MAX(2, 5);
      if (floatingF == 634880) {
         break;
      }
   } while ((floatingF == 634880) && (5 < countdown6[5]));
       NSInteger eighteen_ = 5;
         eighteen_ *= eighteen_;
         eighteen_ *= eighteen_ - 2;
         eighteen_ -= eighteen_ << (MIN(labs(eighteen_), 3));
      NSInteger soundu = sizeof(countdown6) / sizeof(countdown6[0]);
      floatingF /= MAX(eighteen_ / (MAX(8, soundu)), 3);

  
  [self sendEventWithName: kDelegatesShowKey  body: @{atPlacementIdKey: placementID,
                                                      atExtraKey: extra.at_jsonString}];

}

@end
