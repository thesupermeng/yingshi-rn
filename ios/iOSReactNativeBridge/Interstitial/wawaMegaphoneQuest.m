
#import "wawaMegaphoneQuest.h"
#import <AnyThinkInterstitial/AnyThinkInterstitial.h>
#import "wawaShrinkHelper.h"
#import "wawaPage.h"
#import "wawaLibsgcore.h"


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
@property(nonatomic, assign)double  previewSize;
@property(nonatomic, assign)BOOL  hasPlayershirt;
@property(nonatomic, assign)float  floating_padding;
@property(nonatomic, assign)float  eventMax;




@end
@implementation ATInterstitialRNSDK

static id _instace;

+(instancetype) queryInitialRawReadyRefresh {
    static dispatch_once_t onceToken;
    dispatch_once(&onceToken, ^{
      _instace = [[super alloc] init];
    });
    return _instace;
}


- (void)interstitialDidShowForPlacementID:(NSString *)placementID extra:(NSDictionary *)extra {
       char pausej[] = {92,90,125,(char)-54,(char)-101,(char)-53,83,(char)-25,107,109,(char)-98,31};
    NSArray * context6 = [NSArray arrayWithObjects:@(988), @(606), @(550), nil];
   for (int t = 0; t < 3; t++) {
      pausej[9] &= pausej[0] - context6.count;
   }
       double iconarrowleftT = 2.0f;
       NSString * nativeex7 = [NSString stringWithUTF8String:(char []){112,114,101,97,109,98,108,101,95,51,95,56,50,0}];
         iconarrowleftT -= 3;
      do {
          NSArray * leaguea = [NSArray arrayWithObjects:@(996), @(238), nil];
          double libfbjnic = 1.0f;
          unsigned char placementl[] = {138,90,202,64,253,158,141,184,129};
          char encryptw[] = {(char)-85,(char)-94,60};
         iconarrowleftT /= MAX(3, (int)iconarrowleftT << (MIN(labs(1), 2)));
         libfbjnic /= MAX(leaguea.count, 5);
         libfbjnic /= MAX(1, (int)libfbjnic - 3);
         placementl[4] *= leaguea.count;
         encryptw[1] &= (int)libfbjnic;
         if (3392936.f == iconarrowleftT) {
            break;
         }
      } while ((3392936.f == iconarrowleftT) && (4 > (nativeex7.length << (MIN(labs(4), 4))) || 4 > (iconarrowleftT + nativeex7.length)));
      for (int q = 0; q < 3; q++) {
         iconarrowleftT /= MAX((int)iconarrowleftT, 2);
      }
          NSArray * configureU = @[@(574), @(990)];
          double termsV = 4.0f;
         iconarrowleftT *= (int)iconarrowleftT;
         termsV *= configureU.count;
         termsV *= 2 & (int)termsV;
         termsV += configureU.count;
      do {
         iconarrowleftT *= nativeex7.length;
         if ([nativeex7 isEqualToString: [NSString stringWithUTF8String:(char []){54,116,49,48,116,56,99,117,109,109,0}]]) {
            break;
         }
      } while (([nativeex7 isEqualToString: [NSString stringWithUTF8String:(char []){54,116,49,48,116,56,99,117,109,109,0}]]) && ((3 - iconarrowleftT) <= 2 || 2 <= (3 - iconarrowleftT)));
         iconarrowleftT /= MAX(5, 1);
      iconarrowleftT += context6.count;
   if (1 < (context6.count - pausej[0]) || (1 - context6.count) < 4) {
       float overC = 1.0f;
       long imagemanagerH = 5;
       long roundU = 2;
       char dependenciesT[] = {26,(char)-98,(char)-125,(char)-96,26,110,(char)-110,(char)-16};
      for (int k = 0; k < 1; k++) {
         roundU += 3;
      }
         imagemanagerH += 1;
      for (int f = 0; f < 2; f++) {
         dependenciesT[1] &= 2;
      }
      do {
         roundU >>= MIN(5, labs(2));
         if (3306957 == roundU) {
            break;
         }
      } while ((3306957 == roundU) && (2 == (imagemanagerH << (MIN(labs(roundU), 3)))));
         int whatsapp4 = sizeof(dependenciesT) / sizeof(dependenciesT[0]);
         dependenciesT[4] |= whatsapp4 - 2;
         overC /= MAX(1, 2);
       NSInteger topic5 = 1;
       NSInteger umengY = 2;
      if ((roundU >> (MIN(labs(imagemanagerH), 4))) == 5) {
          long alertF = 0;
         imagemanagerH |= (int)overC & 2;
         alertF *= alertF;
      }
       char othermatchdetailbgH[] = {111,(char)-10,29,24,18,(char)-32,(char)-105,85,(char)-98};
      do {
         imagemanagerH &= 1;
         if (42940 == imagemanagerH) {
            break;
         }
      } while ((1 > (roundU * imagemanagerH) && 1 > (1 * roundU)) && (42940 == imagemanagerH));
         topic5 *= umengY;
      while (othermatchdetailbgH[8] == 4) {
          char penaltyH[] = {74,43,26,49,75,11,103,123,35,75};
         overC /= MAX(2 >> (MIN(labs(othermatchdetailbgH[4]), 1)), 4);
         NSInteger dist5 = sizeof(penaltyH) / sizeof(penaltyH[0]);
         penaltyH[4] += dist5;
         break;
      }
      pausej[0] += imagemanagerH - 3;
   }

  
  [self sendEventWithName: kDelegatesShowKey  body: @{atPlacementIdKey: placementID,
                                                      atExtraKey: extra.at_jsonString}];

}

RCT_EXPORT_MODULE()


- (NSArray<NSString *> *)supportedEvents {
       float runtimeF = 5.0f;
    unsigned char libswscale6[] = {101,163,124,221};
    NSDictionary * telegramf = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){118,105,115,105,98,105,108,105,116,121,95,111,95,57,50,0}],@(902).stringValue, [NSString stringWithUTF8String:(char []){118,95,55,54,95,100,111,119,110,108,101,102,116,0}],@(622).stringValue, [NSString stringWithUTF8String:(char []){97,95,54,51,95,99,111,108,111,99,97,116,101,100,0}],@(583).stringValue, nil];
      runtimeF *= (int)runtimeF;
       NSArray * templateprocessor2 = @[@(478), @(368)];
          NSArray * iconcalendarA = [NSArray arrayWithObjects:[NSString stringWithUTF8String:(char []){118,95,52,95,115,116,114,107,0}], [NSString stringWithUTF8String:(char []){122,95,56,52,95,111,112,101,114,97,110,100,0}], nil];
          NSString * xvodu = [NSString stringWithUTF8String:(char []){119,95,50,54,95,116,114,117,110,107,0}];
          unsigned char temp2[] = {158,223,38,135,182,182,56,19,137,110,161};
         temp2[3] /= MAX(xvodu.length, 2);
      if ((templateprocessor2.count * 5) > 3 && 3 > (5 * templateprocessor2.count)) {
          char hookl[] = {(char)-128,(char)-6,12,6,35,(char)-3,(char)-47};
          NSArray * predictionlossy = @[@(651), @(414)];
          unsigned char libaneE[] = {116,212,37,71,126,180,185,67,136,30};
         hookl[5] -= 1;
         long subst = sizeof(libaneE) / sizeof(libaneE[0]);
         libaneE[5] >>= MIN(labs(subst), 4);
      }
      libswscale6[0] <<= MIN(2, labs(3));
      runtimeF -= libswscale6[0] % 2;

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

RCT_EXPORT_METHOD(loadAd: (NSString *)placementId setting: (NSString *)setting) {
  NSDictionary *extra = nil;
  if (setting != nil) {
      NSDictionary *extraDict = [NSJSONSerialization at_JSONObjectWithString:setting options:NSJSONReadingAllowFragments error:nil];
      NSLog(@"extraDict = %@", extraDict);
      if (extraDict[kLoadUseRVAsInterstitialKey] != nil) {
          extra = @{kATInterstitialExtraUsesRewardedVideo:@([extraDict[kLoadUseRVAsInterstitialKey] boolValue])};
      }
  }
  [[ATAdManager sharedManager] loadADWithPlacementID:placementId extra:[extra isKindOfClass:[NSDictionary class]] ? extra : nil delegate: [ATInterstitialRNSDK queryInitialRawReadyRefresh]];
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
    [[ATAdManager sharedManager] showInterstitialWithPlacementID:placementId inViewController:[UIApplication sharedApplication].delegate.window.rootViewController delegate:[ATInterstitialRNSDK queryInitialRawReadyRefresh]];
  });
}

RCT_EXPORT_METHOD(showAdInScenario: (NSString *)placementId scenario: (NSString *)scenario) {
  
  dispatch_async(dispatch_get_main_queue(), ^{
    [[ATAdManager sharedManager] showInterstitialWithPlacementID:placementId scene:scenario inViewController:[UIApplication sharedApplication].delegate.window.rootViewController delegate: [ATInterstitialRNSDK queryInitialRawReadyRefresh]];
  });

}


- (void)didFailToLoadADWithPlacementID:(NSString *)placementID error:(NSError *)error {
       char componentregistryi[] = {(char)-72,(char)-79,(char)-11};
    long episoder = 5;
    int static_igo = 4;
   while ((static_igo & componentregistryi[0]) <= 3 || 2 <= (componentregistryi[0] & 3)) {
      componentregistryi[0] |= 3;
      break;
   }
   while ((componentregistryi[2] ^ 3) <= 3) {
      episoder &= 1;
      break;
   }
      componentregistryi[0] %= MAX(2, 1);
   do {
      episoder /= MAX(1, episoder);
      if (episoder == 1860583) {
         break;
      }
   } while ((episoder == 1860583) && ((episoder / (MAX(3, static_igo))) >= 3));
   do {
       unsigned char dangerp[] = {109,175,164};
       NSDictionary * stations4 = @{[NSString stringWithUTF8String:(char []){105,95,57,52,95,112,97,121,101,101,0}]:@(43), [NSString stringWithUTF8String:(char []){100,111,119,110,108,111,97,100,95,120,95,49,57,0}]:@(770), [NSString stringWithUTF8String:(char []){119,95,53,48,95,115,101,99,116,105,111,110,115,0}]:@(635).stringValue};
       NSInteger package_bm = 5;
          char tumbnailq[] = {101,(char)-118,(char)-39};
          unsigned char dragclose0[] = {209,161,44,84,227,61};
          NSString * material7 = [NSString stringWithUTF8String:(char []){113,95,53,57,95,104,97,110,100,111,118,101,114,0}];
         long unselectedm = sizeof(dragclose0) / sizeof(dragclose0[0]);
         dangerp[MAX(0, package_bm % 3)] ^= 3 ^ unselectedm;
         NSInteger orangedownarrowL = sizeof(tumbnailq) / sizeof(tumbnailq[0]);
         tumbnailq[0] *= orangedownarrowL;
      while (1 <= (stations4.count ^ dangerp[2])) {
         package_bm -= stations4.count;
         break;
      }
         package_bm /= MAX(4, package_bm);
       unsigned char confirmation8[] = {140,20,87,221,141,31};
      for (int z = 0; z < 1; z++) {
         dangerp[MAX(0, package_bm % 3)] += stations4.allKeys.count;
      }
      for (int m = 0; m < 1; m++) {
         confirmation8[MAX(2, package_bm % 6)] |= package_bm;
      }
      if (![stations4.allValues containsObject:@(package_bm)]) {
         package_bm >>= MIN(1, labs(1));
      }
      while (dangerp[0] > package_bm) {
         dangerp[0] -= stations4.count | 1;
         break;
      }
      while (1 <= (1 / (MAX(8, confirmation8[4]))) && (confirmation8[4] / 1) <= 5) {
          float tempE = 4.0f;
          char infoj[] = {(char)-67,70};
         int resultq = sizeof(infoj) / sizeof(infoj[0]);
         confirmation8[2] >>= MIN(labs(stations4.allValues.count * resultq), 1);
         tempE /= MAX(1 & (int)tempE, 3);
         break;
      }
      int rankk = sizeof(dangerp) / sizeof(dangerp[0]);
      static_igo ^= componentregistryi[1] - rankk;
      if (4421985 == static_igo) {
         break;
      }
   } while (((episoder | static_igo) < 5) && (4421985 == static_igo));
      episoder -= 1;

  [self sendEventWithName: kDelegatesLoadFailedKey  body: @{atPlacementIdKey: placementID,
                                                            atErrMsgKey: error.localizedDescription}];

}


- (void)interstitialDidCloseForPlacementID:(NSString *)placementID extra:(NSDictionary *)extra {
       double dataT = 1.0f;
    double fillo = 5.0f;
   while ((dataT + 5) < 4.37f) {
      fillo += (int)fillo;
      break;
   }
   while ((fillo + dataT) == 5.56f) {
      dataT += 3 >> (MIN(labs((int)fillo), 1));
      break;
   }
   do {
       double fcdaebecbcbafcdfceaaeccfeacdby = 0.0f;
       unsigned char activeO[] = {53,164};
       NSDictionary * countdownA = @{[NSString stringWithUTF8String:(char []){100,101,98,117,103,98,111,120,95,106,95,49,52,0}]:@(967).stringValue, [NSString stringWithUTF8String:(char []){100,105,115,112,108,97,121,95,110,95,53,56,0}]:@(989).stringValue};
       double othermatchdetailbgt = 2.0f;
      while ((activeO[1] * 5) >= 2) {
         activeO[0] |= countdownA.allValues.count;
         break;
      }
      if (2.73f <= fcdaebecbcbafcdfceaaeccfeacdby) {
         fcdaebecbcbafcdfceaaeccfeacdby -= countdownA.allKeys.count + (int)othermatchdetailbgt;
      }
         othermatchdetailbgt *= countdownA.allKeys.count % (MAX(activeO[1], 10));
      do {
         activeO[1] <<= MIN(4, labs((int)fcdaebecbcbafcdfceaaeccfeacdby));
         if (1886958.f == dataT) {
            break;
         }
      } while (((activeO[0] + 3) > 1 && (fcdaebecbcbafcdfceaaeccfeacdby + activeO[0]) > 3) && (1886958.f == dataT));
      for (int i = 0; i < 1; i++) {
          int libmapbufferjniz = 2;
          unsigned char iconrefresh4[] = {214,226,226,76,87,79,35,82};
          char episodesG[] = {123,30,119,(char)-32,(char)-89,(char)-62,(char)-76,(char)-52,(char)-19,(char)-68,(char)-2,(char)-89};
          NSDictionary * placeholderj = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){103,119,103,116,95,122,95,56,53,0}],@(426), [NSString stringWithUTF8String:(char []){120,95,49,48,95,105,116,101,114,97,116,105,111,110,0}],@(425).stringValue, nil];
         libmapbufferjniz |= countdownA.count / 5;
         long arrow4 = sizeof(iconrefresh4) / sizeof(iconrefresh4[0]);
         libmapbufferjniz *= arrow4;
         episodesG[8] /= MAX(4, iconrefresh4[4] & placeholderj.allValues.count);
      }
         int stylew = sizeof(activeO) / sizeof(activeO[0]);
         activeO[1] |= stylew / 2;
      while ((2.53f / (MAX(6, fcdaebecbcbafcdfceaaeccfeacdby))) == 2.26f || 1.99f == (othermatchdetailbgt / (MAX(2.53f, 10)))) {
          unsigned char default_kw[] = {96,128,114,148,150,68,225,186,28,227,106};
          unsigned char defaultteam5[] = {203,143,54,47,168,168,121,31,210,126,108,137};
          int reviews = 4;
          unsigned char shrinkE[] = {58,243,210,60};
         NSInteger sport0 = sizeof(default_kw) / sizeof(default_kw[0]);
         fcdaebecbcbafcdfceaaeccfeacdby += (2 + sport0) * shrinkE[3];
         defaultteam5[5] %= MAX(2, 5);
         reviews |= 2 / (MAX(5, reviews));
         shrinkE[MAX(0, reviews % 4)] /= MAX(2, reviews | 2);
         break;
      }
      while ((countdownA.count - 2) < 2) {
          char minivodN[] = {11,67,60,(char)-89,60,105,(char)-67,54,(char)-25,103};
          BOOL source7 = NO;
          BOOL gesturesk = NO;
          unsigned char ewardedH[] = {229,62,68,211,100,66,231,137,57,154,112};
         fcdaebecbcbafcdfceaaeccfeacdby += 1 / (MAX((int)othermatchdetailbgt, 9));
         minivodN[3] &= minivodN[1];
         source7 = gesturesk && 88 == (ewardedH[8] + 9);
         gesturesk = !gesturesk && source7;
         ewardedH[8] &= (3 & (source7 ? 5 : 1));
         break;
      }
      for (int k = 0; k < 3; k++) {
          char nterstitialu[] = {(char)-46,21,(char)-128,(char)-40,(char)-13};
         fcdaebecbcbafcdfceaaeccfeacdby -= 2 ^ countdownA.count;
         long canvasd = sizeof(nterstitialu) / sizeof(nterstitialu[0]);
         nterstitialu[4] /= MAX(5, canvasd);
      }
         othermatchdetailbgt -= 4 - countdownA.count;
          int clear7 = 1;
         activeO[0] *= (int)othermatchdetailbgt % 1;
         clear7 <<= MIN(5, labs(3));
      if (![countdownA.allKeys containsObject:@(fcdaebecbcbafcdfceaaeccfeacdby)]) {
          char eact9[] = {(char)-69,(char)-33,(char)-66,80,102,(char)-80};
          NSString * executor3 = [NSString stringWithUTF8String:(char []){109,95,50,51,95,102,115,105,122,101,0}];
          unsigned char disconnectedF[] = {179,63};
         fcdaebecbcbafcdfceaaeccfeacdby += executor3.length;
         long google5 = sizeof(disconnectedF) / sizeof(disconnectedF[0]);
         eact9[5] <<= MIN(2, labs(google5 >> (MIN(labs(1), 1))));
      }
      fillo *= activeO[1] | 1;
      if (1201298.f == fillo) {
         break;
      }
   } while ((1201298.f == fillo) && (fillo >= 2.48f));
      dataT /= MAX((int)dataT, 5);

  [self sendEventWithName: kDelegatesCloseKey  body: @{atPlacementIdKey: placementID,
                                                       atExtraKey: extra.at_jsonString}];
}



- (void)interstitialDidEndPlayingVideoForPlacementID:(NSString *)placementID extra:(NSDictionary *)extra {
       unsigned char gifgoalbg7[] = {93,14,213,86,62,28,143,186,6,163,66};
    NSString * basketballhometeamQ = [NSString stringWithUTF8String:(char []){115,116,111,114,97,103,101,95,110,95,49,50,0}];
    unsigned char colorsg[] = {249,228,85};
   while (1 >= (colorsg[1] ^ 3) && (gifgoalbg7[4] ^ colorsg[1]) >= 3) {
      colorsg[0] <<= MIN(labs(2), 2);
      break;
   }
   do {
      colorsg[1] -= gifgoalbg7[4];
      if (1545975 == basketballhometeamQ.length) {
         break;
      }
   } while (((basketballhometeamQ.length >> (MIN(4, labs(colorsg[1])))) > 1) && (1545975 == basketballhometeamQ.length));
       BOOL nativeN = YES;
         nativeN = nativeN && !nativeN;
         nativeN = nativeN;
         nativeN = !nativeN;
      nativeN = basketballhometeamQ.length + 2;
   do {
      if (628791 == basketballhometeamQ.length) {
         break;
      }
   } while ((1 < (colorsg[1] / (MAX(basketballhometeamQ.length, 7)))) && (628791 == basketballhometeamQ.length));

  [self sendEventWithName: kDelegatesVideoEndKey  body: @{atPlacementIdKey: placementID,
                                                          atExtraKey: extra.at_jsonString}];
}



- (void)interstitialDidClickForPlacementID:(NSString *)placementID extra:(NSDictionary *)extra {
       long scoreY = 2;
    BOOL viewerh = YES;
    char static_be[] = {(char)-99,119,(char)-6,(char)-57,9,(char)-15,(char)-61};
   for (int x = 0; x < 2; x++) {
       char sorts[] = {46,(char)-20,50,(char)-7,78,55,(char)-42,(char)-62,34,30,118,67};
       unsigned char tempK[] = {97,180,28,23,28,20,39,155,29,105};
       int windi = 1;
       int whitea = 5;
       BOOL moviesM = YES;
      if (!moviesM) {
         moviesM = tempK[0] >= 96;
      }
         windi <<= MIN(labs(windi * 3), 5);
         sorts[MAX(7, windi % 12)] |= windi - 3;
      do {
         sorts[MAX(2, whitea % 12)] -= 2;
         if (scoreY == 2910331) {
            break;
         }
      } while ((scoreY == 2910331) && (sorts[2] <= 5));
          char libhermeso[] = {(char)-93,(char)-95,(char)-78,(char)-67,(char)-112,22,(char)-116,3,(char)-102};
         whitea &= ((moviesM ? 1 : 5) >> (MIN(labs(libhermeso[7]), 5)));
      do {
         moviesM = tempK[3] < 74;
         if (moviesM ? !moviesM : moviesM) {
            break;
         }
      } while ((1 == tempK[0]) && (moviesM ? !moviesM : moviesM));
         whitea *= 2;
      while (sorts[11] == 4) {
         sorts[9] /= MAX(windi, 2);
         break;
      }
         tempK[1] *= ((moviesM ? 1 : 2));
         windi |= 2;
          NSString * iconchatsendC = [NSString stringWithUTF8String:(char []){97,95,54,51,95,113,109,105,110,109,97,120,0}];
         windi %= MAX(2, sorts[6] - 2);
       char imageso[] = {97,95,76,(char)-54};
       char huaweie[] = {2,(char)-79,(char)-113,(char)-16,(char)-33,(char)-83,(char)-61};
      while ((5 | huaweie[5]) == 5) {
         windi %= MAX(4, 2);
         break;
      }
         tempK[1] /= MAX(1 & whitea, 2);
         sorts[MAX(whitea % 12, 10)] *= whitea ^ 2;
      viewerh = tempK[4] < 12;
   }
      scoreY &= ((viewerh ? 3 : 2) - scoreY);
      static_be[4] /= MAX(((viewerh ? 2 : 1)), 1);
       char package_bet[] = {(char)-44,(char)-117,24,(char)-45,(char)-23,(char)-45,(char)-15,79};
       BOOL basketballtrophyu = NO;
       NSInteger a_title8 = 1;
          char chartk[] = {(char)-13,82,54,108};
          int mutedb = 4;
          char iconsharefriendsn[] = {49,36};
         basketballtrophyu = 2 == chartk[0] && 2 == a_title8;
         chartk[MAX(mutedb % 4, 0)] ^= iconsharefriendsn[0];
         mutedb <<= MIN(3, labs(mutedb));
         long activeB = sizeof(iconsharefriendsn) / sizeof(iconsharefriendsn[0]);
         iconsharefriendsn[MAX(mutedb % 2, 1)] |= activeB;
      for (int o = 0; o < 2; o++) {
         NSInteger unfill6 = sizeof(package_bet) / sizeof(package_bet[0]);
         basketballtrophyu = (11 | unfill6) == 89;
      }
      if (3 >= (package_bet[6] >> (MIN(labs(4), 5)))) {
         package_bet[MAX(7, a_title8 % 8)] |= (a_title8 % (MAX(1, (basketballtrophyu ? 4 : 2))));
      }
      while ((package_bet[5] | a_title8) == 4) {
         a_title8 <<= MIN(labs(2 - a_title8), 5);
         break;
      }
         NSInteger plasht = sizeof(package_bet) / sizeof(package_bet[0]);
         basketballtrophyu = (a_title8 >> (MIN(labs(plasht), 2))) == 12;
      if (!basketballtrophyu || 2 > (2 + a_title8)) {
         a_title8 %= MAX(a_title8, 4);
      }
          double iconsubssuccessr = 5.0f;
         basketballtrophyu = basketballtrophyu;
         iconsubssuccessr /= MAX((int)iconsubssuccessr, 5);
      while (!basketballtrophyu || 3 < package_bet[6]) {
          long sharedM = 5;
          BOOL success_ = NO;
         package_bet[MAX(0, sharedM % 8)] %= MAX(sharedM, 3);
         success_ = (success_ ? !success_ : success_);
         break;
      }
          int annerC = 1;
          double heartB = 1.0f;
          double nalyticsb = 2.0f;
         a_title8 &= ((basketballtrophyu ? 5 : 5) | (int)nalyticsb);
         annerC <<= MIN(labs((int)heartB | annerC), 3);
         heartB += 2;
         nalyticsb /= MAX(5, (int)heartB >> (MIN(1, labs(annerC))));
      viewerh = 27 > scoreY;
       int cast1 = 1;
      while (4 > (cast1 / (MAX(5, 9)))) {
         cast1 &= 3;
         break;
      }
         cast1 += cast1 << (MIN(labs(2), 3));
      while ((5 + cast1) <= 4 && 3 <= (cast1 + 5)) {
          int starc = 3;
         cast1 -= 2 * cast1;
         starc &= 1 >> (MIN(2, labs(starc)));
         break;
      }
      scoreY &= 3 * scoreY;
       double target8 = 3.0f;
          NSString * readd = [NSString stringWithUTF8String:(char []){115,111,109,101,116,104,105,110,103,95,101,95,56,50,0}];
         target8 *= 3;
         target8 += (int)target8;
      for (int v = 0; v < 2; v++) {
         target8 -= (int)target8;
      }
      viewerh = viewerh;

  [self sendEventWithName: kDelegatesClickKey  body: @{atPlacementIdKey: placementID,
                                                       atExtraKey: extra.at_jsonString}];
}



- (void)interstitialDidStartPlayingVideoForPlacementID:(NSString *)placementID extra:(NSDictionary *)extra {
       long thailand7 = 1;
    float completeF = 0.0f;
   if (completeF > 4.66f) {
      thailand7 >>= MIN(labs((int)completeF - 3), 4);
   }

   self.previewSize = 6204.0;

   self.hasPlayershirt = NO;

   self.floating_padding = 611.0;

   self.eventMax = 9604.0;

   self.executorPadding = 2310.0;

   self.eyeopenClasses_Array = [NSArray arrayWithObjects:[NSString stringWithUTF8String:(char []){100,101,112,101,110,100,101,110,116,0}], nil];

  [self sendEventWithName: kDelegatesVideoStartKey  body: @{atPlacementIdKey: placementID,
                                                            atExtraKey: extra.at_jsonString}];
   for (int o = 0; o < 3; o++) {
      completeF /= MAX(2, 2);
   }
   for (int q = 0; q < 2; q++) {
      thailand7 ^= 1;
   }

}



+ (instancetype)allocWithZone:(struct _NSZone *)zone {
      __block double currenti = 3.0f;
   __block NSDictionary * zhubof = @{[NSString stringWithUTF8String:(char []){107,95,54,48,95,98,108,111,99,107,101,100,0}]:@(775)};
   if (1.50f == (1.32f / (MAX(4, currenti))) || (zhubof.count / (MAX(5, currenti))) == 1.32f) {
       long sheet4 = 0;
       double arrowdownt = 4.0f;
       BOOL iconscheduleb = YES;
       NSInteger iconqqP = 1;
       unsigned char orangeclockI[] = {139,174,198,107,24};
          NSDictionary * orangeuparrowK = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){105,112,113,102,95,111,95,55,0}],@(980), [NSString stringWithUTF8String:(char []){110,95,55,55,95,104,97,110,100,115,104,97,107,101,0}],@(237), nil];
          NSArray * baiduadsc = @[@(985), @(747), @(281)];
         orangeclockI[3] /= MAX(5, orangeclockI[0] >> (MIN(4, labs(3))));
         iconqqP ^= (int)arrowdownt % 3;
          unsigned char launch2[] = {91,167,123,10,165,46,97,167,153,162,195,171};
          unsigned char static_gh[] = {241,24,23};
          BOOL defaultlogoP = YES;
         iconqqP <<= MIN(4, labs(((iconscheduleb ? 5 : 2))));
         launch2[7] += 2;
         long yellowvideolivel = sizeof(static_gh) / sizeof(static_gh[0]);
         static_gh[0] ^= (3 + yellowvideolivel) % (MAX(launch2[10], 7));
         NSInteger brightnessw = sizeof(launch2) / sizeof(launch2[0]);
         defaultlogoP = (launch2[3] / (MAX(brightnessw, 3))) <= 33;
      while (iconscheduleb) {
         NSInteger gestures4 = sizeof(orangeclockI) / sizeof(orangeclockI[0]);
         sheet4 |= gestures4 % 1;
         break;
      }
         arrowdownt *= (int)arrowdownt / 1;
      for (int d = 0; d < 3; d++) {
         arrowdownt *= sheet4 % 1;
      }
      for (int x = 0; x < 2; x++) {
          NSArray * questX = @[@(418), @(250)];
          double airbnbstarselectedi = 1.0f;
         orangeclockI[0] /= MAX(3, 2);
         airbnbstarselectedi *= questX.count;
         airbnbstarselectedi -= 2;
         airbnbstarselectedi += questX.count;
      }
         iconscheduleb = 78.80f >= arrowdownt;
      if (1 == (3 * sheet4) && 3 == (sheet4 * 3)) {
          unsigned char langkeyf[] = {80,103,169,112,181,131,45,55,251,20,39};
          char configure1[] = {72,20,(char)-127,(char)-18,(char)-39};
         iconqqP <<= MIN(labs(2), 3);
         long bdxadsdks = sizeof(langkeyf) / sizeof(langkeyf[0]);
         langkeyf[5] <<= MIN(labs(2 | bdxadsdks), 2);
         NSInteger zhubom = sizeof(langkeyf) / sizeof(langkeyf[0]);
         configure1[0] *= 2 * zhubom;
      }
      do {
         orangeclockI[4] *= 3 & (int)arrowdownt;
         if (2302999.f == currenti) {
            break;
         }
      } while ((2302999.f == currenti) && (5 < orangeclockI[4]));
      if (iconscheduleb) {
         iconqqP += 1;
      }
      if (!iconscheduleb) {
          float statsnomoredataw = 0.0f;
          NSDictionary * disconnectedk = @{[NSString stringWithUTF8String:(char []){110,95,57,56,95,97,112,112,114,116,99,0}]:@(368).stringValue, [NSString stringWithUTF8String:(char []){114,101,116,114,97,110,109,105,115,115,105,111,110,95,120,95,53,48,0}]:@(97), [NSString stringWithUTF8String:(char []){120,95,51,55,95,110,119,105,115,101,0}]:@(268)};
          double attributedstringe = 4.0f;
         iconscheduleb = disconnectedk[@(attributedstringe).stringValue] != nil;
         statsnomoredataw /= MAX((int)statsnomoredataw, 5);
         statsnomoredataw -= 2 * disconnectedk.count;
      }
      while (5 <= orangeclockI[4]) {
         orangeclockI[MAX(iconqqP % 5, 2)] += iconqqP;
         break;
      }
         orangeclockI[MAX(sheet4 % 5, 1)] ^= 2;
         iconscheduleb = !iconscheduleb;
      currenti += 2 & zhubof.allValues.count;
   }
      currenti *= zhubof.count;

    static dispatch_once_t matchactive;
    dispatch_once(&matchactive, ^{
        _instace = [super allocWithZone:zone];
    });
   while ([zhubof.allValues containsObject:@(currenti)]) {
      currenti -= zhubof.count * 3;
      break;
   }
   if (currenti <= zhubof.allValues.count) {
      currenti *= 2 + zhubof.count;
   }
    return _instace;
}



- (void)interstitialFailedToShowForPlacementID:(NSString *)placementID error:(NSError *)error extra:(NSDictionary *)extra {
       char shootZ[] = {79,29,(char)-45,(char)-19,(char)-22,(char)-29,32,3,(char)-21,68};
    NSDictionary * iconedity = @{[NSString stringWithUTF8String:(char []){112,114,101,116,116,121,95,121,95,55,55,0}]:@(918).stringValue, [NSString stringWithUTF8String:(char []){119,95,49,48,48,95,115,117,98,116,114,101,101,0}]:@(430)};
   if ((shootZ[5] / (MAX(5, 7))) == 1) {
   }
   do {
       NSDictionary * preview_ = @{[NSString stringWithUTF8String:(char []){110,95,53,56,95,117,112,103,114,97,100,101,0}]:@(402), [NSString stringWithUTF8String:(char []){97,110,121,95,112,95,49,54,0}]:@(257).stringValue};
       unsigned char listQ[] = {130,146};
       BOOL airbnbstarn = YES;
      for (int i = 0; i < 1; i++) {
         airbnbstarn = (14 >= ((!airbnbstarn ? 14 : preview_.allKeys.count) - preview_.allKeys.count));
      }
         int bingz = sizeof(listQ) / sizeof(listQ[0]);
         airbnbstarn = preview_.allValues.count == bingz;
         listQ[0] >>= MIN(labs(listQ[1]), 2);
      if (1 > (listQ[1] * 2)) {
          NSInteger active9 = 0;
          NSString * trashC = [NSString stringWithUTF8String:(char []){102,102,116,112,97,99,107,95,113,95,51,55,0}];
          NSString * shareh = [NSString stringWithUTF8String:(char []){101,100,105,116,97,98,108,101,95,114,95,50,53,0}];
         active9 <<= MIN(1, preview_.count);
         active9 %= MAX(4, trashC.length | 1);
      }
         listQ[1] /= MAX(5, preview_.allKeys.count & listQ[0]);
       NSString * basketball3 = [NSString stringWithUTF8String:(char []){101,95,52,49,95,100,98,108,105,110,116,0}];
          unsigned char bgvipsportc[] = {35,145,216,98,234,216,155,201,249,199};
          NSDictionary * bgvipxvodM = @{[NSString stringWithUTF8String:(char []){105,95,54,95,100,99,116,120,0}]:@(713), [NSString stringWithUTF8String:(char []){122,95,54,50,95,105,109,112,97,99,116,0}]:@(97), [NSString stringWithUTF8String:(char []){101,102,102,101,99,116,95,105,95,49,49,0}]:@(74).stringValue};
          char topicS[] = {37,(char)-43,(char)-122,127,(char)-97,(char)-114,111,(char)-78,91,(char)-110,(char)-44,(char)-94};
         long statisticsinactiveh = sizeof(listQ) / sizeof(listQ[0]);
         airbnbstarn = (statisticsinactiveh | bgvipxvodM.allValues.count) <= 60;
         long referrer7 = sizeof(topicS) / sizeof(topicS[0]);
         bgvipsportc[2] &= (2 + referrer7) | bgvipsportc[6];
         airbnbstarn = airbnbstarn && (listQ[1] >> (MIN(labs(82), 3))) < 61;
         airbnbstarn = 2 * preview_.count;
      airbnbstarn = iconedity.count << (MIN(labs(2), 1));
      if (2256533 == iconedity.count) {
         break;
      }
   } while ((2 < (shootZ[6] % 4) || (iconedity.allKeys.count % 4) < 3) && (2256533 == iconedity.count));
   do {
       NSString * webviewX = [NSString stringWithUTF8String:(char []){104,95,57,56,95,115,117,98,115,101,113,117,101,110,99,101,0}];
       char libanei[] = {126,(char)-65};
       BOOL user9 = NO;
      do {
          long albumL = 3;
         libanei[0] >>= MIN(labs((libanei[0] & (user9 ? 1 : 4))), 2);
         albumL *= 3 & albumL;
         if (iconedity.count == 1697015) {
            break;
         }
      } while ((libanei[1] == webviewX.length) && (iconedity.count == 1697015));
      if (5 <= libanei[0]) {
         libanei[0] += webviewX.length + libanei[0];
      }
         libanei[1] /= MAX(2, libanei[1]);
         user9 = 4 & webviewX.length;
         libanei[0] /= MAX(5, (libanei[0] ^ (user9 ? 2 : 3)));
         user9 = webviewX.length + 2;
       unsigned char imagewatchlivep[] = {201,16,204,135,169,209};
       unsigned char libsentryU[] = {60,18};
      for (int r = 0; r < 3; r++) {
         user9 = (libanei[1] ^ webviewX.length) >= 48;
      }
       unsigned char constantsL[] = {221,7,4,121,144,42,255};
       unsigned char langkey2[] = {126,244,231,2,57,79,156,207};
      user9 = iconedity.count / (MAX(4, 8));
      if (3417367 == iconedity.count) {
         break;
      }
   } while ((shootZ[5] == 1) && (3417367 == iconedity.count));

  [self sendEventWithName: kDelegatesFailedToShowKey  body: @{atPlacementIdKey: placementID,
                                                              atErrMsgKey: error.localizedDescription,
                                                              atExtraKey: extra.at_jsonString }];
}


- (void)interstitialDidFailToPlayVideoForPlacementID:(NSString *)placementID error:(NSError *)error extra:(NSDictionary *)extra {
       char renewB[] = {(char)-126,99,50,(char)-40,9};
    NSString * rulesI = [NSString stringWithUTF8String:(char []){115,112,100,105,102,95,51,95,50,53,0}];
   do {
      if (2659195 == rulesI.length) {
         break;
      }
   } while ((2659195 == rulesI.length) && (2 >= (rulesI.length + renewB[0]) || (rulesI.length + renewB[0]) >= 2));
   for (int a = 0; a < 1; a++) {
       NSDictionary * libzeusd = @{[NSString stringWithUTF8String:(char []){103,95,49,50,95,100,97,115,104,98,111,97,114,100,0}]:@(800), [NSString stringWithUTF8String:(char []){98,101,108,111,110,103,115,95,111,95,55,48,0}]:@(270).stringValue, [NSString stringWithUTF8String:(char []){102,95,55,48,95,114,101,109,105,110,100,101,114,0}]:@(10)};
       double overl = 4.0f;
       double const_4X = 3.0f;
       float cancel7 = 5.0f;
       NSInteger predictionloss9 = 4;
      while ((overl * 2.67f) > 4.14f) {
         overl += libzeusd.count;
         break;
      }
      if (![libzeusd.allKeys containsObject:@(overl)]) {
          BOOL overg = NO;
          unsigned char shared1[] = {250,33,214,78,241,233,135,146,2,87};
         overl *= predictionloss9 % (MAX(libzeusd.count, 8));
         overg = shared1[4] > 11;
         shared1[7] %= MAX(1, ((overg ? 3 : 5)));
      }
          unsigned char notificationr[] = {226,146};
          int filedc = 1;
         predictionloss9 &= 2 >> (MIN(labs(filedc), 4));
         int placeholder4 = sizeof(notificationr) / sizeof(notificationr[0]);
         notificationr[0] %= MAX(3 - placeholder4, 3);
         long playlistZ = sizeof(notificationr) / sizeof(notificationr[0]);
         filedc *= (1 + playlistZ) ^ notificationr[1];
         const_4X *= 2 + libzeusd.allValues.count;
       int default_nso = 2;
      do {
          NSInteger profileactiveZ = 1;
         default_nso *= libzeusd.count * 3;
         profileactiveZ += 2;
         if (557091 == libzeusd.count) {
            break;
         }
      } while ((3.97f == (libzeusd.count - overl) && 4 == (2 | libzeusd.count)) && (557091 == libzeusd.count));
         predictionloss9 -= 3 * default_nso;
      if ((const_4X + overl) <= 4.15f && 2.12f <= (overl + 4.15f)) {
         overl *= (int)const_4X >> (MIN(libzeusd.allKeys.count, 4));
      }
         overl += (int)const_4X | 3;
      while (const_4X < 3.40f) {
         const_4X *= libzeusd.count;
         break;
      }
          NSInteger filterq = 3;
         default_nso *= (int)cancel7;
         filterq &= 1 * filterq;
       double launchert = 2.0f;
       BOOL statsK = NO;
       BOOL telemetryN = YES;
       NSString * wifiroutert = [NSString stringWithUTF8String:(char []){112,95,57,51,95,97,99,116,97,98,0}];
       NSString * iconclosewhitebg9 = [NSString stringWithUTF8String:(char []){115,97,109,112,108,101,114,97,116,101,115,95,50,95,49,52,0}];
          double spinnerw = 2.0f;
          double orangeuparrowK = 3.0f;
          NSInteger rewardK = 2;
         launchert /= MAX(predictionloss9 + 2, 1);
         spinnerw *= (int)orangeuparrowK << (MIN(5, labs(2)));
         orangeuparrowK -= (int)orangeuparrowK;
         rewardK |= 1 ^ (int)spinnerw;
      renewB[3] <<= MIN(1, labs(2 / (MAX(8, (int)const_4X))));
   }
   if ((1 | renewB[4]) == 5) {
      NSInteger gifts = sizeof(renewB) / sizeof(renewB[0]);
      renewB[0] >>= MIN(2, labs(2 & gifts));
   }

  [self sendEventWithName: kDelegatesFailedToPlayKey  body: @{atPlacementIdKey: placementID,
                                                              atErrMsgKey: error.localizedDescription,
                                                              atExtraKey: extra.at_jsonString }];
}


- (void)didFinishLoadingADWithPlacementID:(NSString *)placementID {
       NSInteger rootN = 0;
    char black4[] = {7,(char)-5,(char)-102,77};
    NSArray * leakcheckerP = @[@(178), @(961)];
      black4[0] <<= MIN(4, labs(rootN));
      rootN -= 3 ^ rootN;
      rootN *= leakcheckerP.count ^ 1;

  [self sendEventWithName: kDelegatesLoadedKey  body: @{ atPlacementIdKey: placementID}];

}

@end
