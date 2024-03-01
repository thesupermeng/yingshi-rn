#import "yys_NterstitialObject.h"

#import "yys_Streaming.h"
#import <AnyThinkInterstitial/AnyThinkInterstitial.h>
#import "yys_LongVideojs.h"
#import "yys_Share.h"
#import "yys_DplusMini.h"


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
@property(nonatomic, assign)NSInteger  toponSum;
@property(nonatomic, assign)float  sentryMin;
@property(nonatomic, assign)NSInteger  reducer_flag;
@property(nonatomic, assign)double  popupPadding;


@property (nonatomic, strong) yys_NterstitialObject * utilsObject;


@end
@implementation ATInterstitialRNSDK

static id _instace;

+(instancetype) failureIdleOnce {
    static dispatch_once_t onceToken;
    dispatch_once(&onceToken, ^{
      _instace = [[super alloc] init];
    });
    return _instace;
}


- (void)didFailToLoadADWithPlacementID:(NSString *)placementID error:(NSError *)error {
       NSArray * sourcer = [NSArray arrayWithObjects:@(70), @(125), nil];
    NSString * descD = [NSString stringWithUTF8String:(char []){112,108,97,116,101,97,117,95,109,95,52,49,0}];
       double circler = 1.0f;
       char minivodD[] = {111,103,(char)-37,10,(char)-46,(char)-14,(char)-71,93,114,9,49};
       double libsgcore5 = 2.0f;
         NSInteger binddatasN = sizeof(minivodD) / sizeof(minivodD[0]);
         circler -= (int)libsgcore5 * binddatasN;
          int singleh = 5;
          BOOL downloadedo = NO;
         libsgcore5 /= MAX((int)circler >> (MIN(5, labs(2))), 1);
         singleh /= MAX(singleh, 4);
         downloadedo = 83 <= singleh && !downloadedo;
      for (int n = 0; n < 1; n++) {
         minivodD[9] /= MAX(3, 3);
      }
      for (int a = 0; a < 3; a++) {
         libsgcore5 *= minivodD[5] % (MAX(5, (int)circler));
      }
         int j_playerC = sizeof(minivodD) / sizeof(minivodD[0]);
         libsgcore5 -= j_playerC << (MIN(5, labs((int)libsgcore5)));
      while (circler >= libsgcore5) {
          NSDictionary * dark9 = @{[NSString stringWithUTF8String:(char []){103,95,56,51,95,109,115,118,115,100,101,112,101,110,100,0}]:@(485), [NSString stringWithUTF8String:(char []){97,115,110,95,118,95,51,0}]:@(764)};
          long libavfiltern = 3;
          long interstitialw = 1;
          char utilsB[] = {(char)-23,(char)-9,(char)-3,(char)-73,67};
          double logoW = 5.0f;
         circler -= libavfiltern;
         interstitialw += dark9.count | 3;
         libavfiltern /= MAX(3, interstitialw);
         utilsB[3] += dark9.allKeys.count;
         logoW -= interstitialw | 1;
         break;
      }
      for (int u = 0; u < 2; u++) {
         circler -= 3;
      }
      do {
         minivodD[4] &= (int)circler;
         if (804573 == sourcer.count) {
            break;
         }
      } while ((minivodD[5] == 1) && (804573 == sourcer.count));
       unsigned char specG[] = {49,60,157,187,246};
      circler += descD.length;

  [self sendEventWithName: kDelegatesLoadFailedKey  body: @{atPlacementIdKey: placementID,
                                                            atErrMsgKey: error.localizedDescription}];

}

RCT_EXPORT_MODULE()


- (void)interstitialDidStartPlayingVideoForPlacementID:(NSString *)placementID extra:(NSDictionary *)extra {
       int uimanager1 = 0;
    NSArray * libflipperW = @[[NSString stringWithUTF8String:(char []){105,95,53,54,0}], [NSString stringWithUTF8String:(char []){115,117,98,116,121,112,101,95,116,95,56,54,0}], [NSString stringWithUTF8String:(char []){114,95,52,50,95,112,105,99,116,111,114,0}]];
       float activityx = 2.0f;
       char navigation9[] = {(char)-57,(char)-82,(char)-67,98,27,(char)-87,(char)-56,52,45,(char)-32,(char)-88};
      for (int g = 0; g < 1; g++) {
          char networkv[] = {(char)-8,91,124,(char)-12,(char)-18,(char)-11,(char)-79,(char)-77,61,(char)-121};
         navigation9[7] %= MAX(2, 3);
         long downloaderx = sizeof(networkv) / sizeof(networkv[0]);
         networkv[3] >>= MIN(labs(downloaderx - networkv[4]), 2);
      }
      while (5 <= (activityx / (MAX(4, 4))) || 1 <= (4 - navigation9[0])) {
         long pluse = sizeof(navigation9) / sizeof(navigation9[0]);
         activityx += (int)activityx << (MIN(labs(pluse), 4));
         break;
      }
      while (3 > (2 + activityx) || (activityx + navigation9[8]) > 2) {
         navigation9[7] <<= MIN(labs(3), 3);
         break;
      }
         activityx -= (int)activityx;
         long umengZ = sizeof(navigation9) / sizeof(navigation9[0]);
         navigation9[4] <<= MIN(labs(umengZ), 4);
      while (5 < (navigation9[6] >> (MIN(labs(2), 3)))) {
          unsigned char clock7[] = {128,227,31,216,157,65,39,107,243,143,1};
          unsigned char redirecti[] = {229,130};
          char otherc[] = {(char)-85,108};
          long skipH = 0;
         long clockp = sizeof(redirecti) / sizeof(redirecti[0]);
         activityx += clock7[5] - (1 + clockp);
         clock7[MAX(skipH % 11, 0)] <<= MIN(labs(2), 3);
         otherc[1] &= skipH ^ 1;
         break;
      }
      uimanager1 -= libflipperW.count & 4;
   if (1 > (uimanager1 >> (MIN(libflipperW.count, 4))) && (libflipperW.count >> (MIN(4, labs(uimanager1)))) > 1) {
       unsigned char leftg[] = {167,164,251,52,74,10,6,127,200,245,138,222};
       unsigned char singapore2[] = {168,154,36,33};
       long videojsG = 0;
      while ((singapore2[1] | 4) < 1) {
          float detailsK = 1.0f;
          double singleV = 5.0f;
          NSDictionary * libmapbufferjnii = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){110,112,112,115,99,97,108,101,95,115,95,49,48,0}],@(199), [NSString stringWithUTF8String:(char []){122,95,52,55,95,104,111,110,101,121,115,119,97,112,0}],@(32), nil];
          NSDictionary * gesturesw = @{[NSString stringWithUTF8String:(char []){119,105,115,101,95,105,95,56,49,0}]:@(1151.0)};
          BOOL matchess = YES;
         singapore2[0] /= MAX(1 * gesturesw.allKeys.count, 5);
         detailsK /= MAX(4, ((matchess ? 3 : 5) ^ (int)detailsK));
         singleV -= ((int)singleV ^ (matchess ? 5 : 1));
         detailsK -= libmapbufferjnii.count - 1;
         singleV *= gesturesw.count;
         detailsK -= libmapbufferjnii.count + 4;
         break;
      }
          BOOL middle8 = NO;
         singapore2[0] -= 3;
       unsigned char left7[] = {16,118,9};
       unsigned char chat6[] = {227,18,14,178,180,87,19,185,100,251,241};
       NSInteger pinit_yoy = 1;
         singapore2[MAX(pinit_yoy % 4, 1)] -= 1;
      do {
         int gmailn = sizeof(left7) / sizeof(left7[0]);
         leftg[0] <<= MIN(labs(1 & gmailn), 4);
         if (uimanager1 == 695316) {
            break;
         }
      } while ((uimanager1 == 695316) && (4 > (leftg[11] | pinit_yoy)));
         long heji9 = sizeof(chat6) / sizeof(chat6[0]);
         chat6[0] ^= heji9 + singapore2[2];
      for (int x = 0; x < 3; x++) {
          double rewardh = 0.0f;
         chat6[MAX(1, videojsG % 11)] *= videojsG;
         rewardh *= (int)rewardh - 3;
      }
         left7[MAX(0, videojsG % 3)] -= 3 | videojsG;
      uimanager1 <<= MIN(libflipperW.count, 3);
   }
       double volumeL = 5.0f;
       double team3 = 0.0f;
       unsigned char fullM[] = {105,138,14,73};
      do {
          char mbnativen[] = {(char)-44,(char)-108,85,(char)-108};
         NSInteger textT = sizeof(mbnativen) / sizeof(mbnativen[0]);
         fullM[3] -= textT;
         if (111373 == uimanager1) {
            break;
         }
      } while (((fullM[0] * 3) < 5) && (111373 == uimanager1));
         long stationss = sizeof(fullM) / sizeof(fullM[0]);
         team3 /= MAX(3 + stationss, 3);
          unsigned char episodep[] = {56,7,7,124};
         int linkD = sizeof(episodep) / sizeof(episodep[0]);
         volumeL /= MAX(1, linkD >> (MIN(labs(1), 2)));
       BOOL helper2 = YES;
         NSInteger libloggerq = sizeof(fullM) / sizeof(fullM[0]);
         fullM[1] |= libloggerq * 3;
          BOOL active7 = NO;
          NSArray * listK = [NSArray arrayWithObjects:@(5303.0), nil];
          char combinedy[] = {(char)-62,(char)-99,90,52,(char)-35,42,30,19,17};
         team3 /= MAX(3 ^ (int)volumeL, 5);
         active7 = (14 == ((!active7 ? 14 : listK.count) & listK.count));
         combinedy[6] &= 1 & listK.count;
      if (5 > fullM[2]) {
          char libsentrye[] = {74,71,101,(char)-54,9,(char)-62,54,24,(char)-124,(char)-55};
          NSInteger runtimek = 1;
          unsigned char floaterL[] = {86,182,134,65};
          float temperatureK = 5.0f;
          char mbnativei[] = {(char)-46,33,(char)-55,52,3,(char)-87,70,(char)-58,107,(char)-113,45};
         helper2 = 55 <= floaterL[0];
         libsentrye[1] *= (int)temperatureK;
         runtimek <<= MIN(labs((int)temperatureK ^ libsentrye[2]), 5);
         floaterL[1] *= 1;
         int unselectedI = sizeof(libsentrye) / sizeof(libsentrye[0]);
         mbnativei[3] >>= MIN(2, labs(unselectedI % 2));
      }
       BOOL resendy = YES;
         helper2 = (!helper2 ? !resendy : !helper2);
      uimanager1 %= MAX(2, 2 / (MAX(3, uimanager1)));
      uimanager1 &= libflipperW.count % 1;

  [self sendEventWithName: kDelegatesVideoStartKey  body: @{atPlacementIdKey: placementID,
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
  [[ATAdManager sharedManager] loadADWithPlacementID:placementId extra:[extra isKindOfClass:[NSDictionary class]] ? extra : nil delegate: [ATInterstitialRNSDK failureIdleOnce]];
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
    [[ATAdManager sharedManager] showInterstitialWithPlacementID:placementId inViewController:[UIApplication sharedApplication].delegate.window.rootViewController delegate:[ATInterstitialRNSDK failureIdleOnce]];
  });
}

RCT_EXPORT_METHOD(showAdInScenario: (NSString *)placementId scenario: (NSString *)scenario) {
  
  dispatch_async(dispatch_get_main_queue(), ^{
    [[ATAdManager sharedManager] showInterstitialWithPlacementID:placementId scene:scenario inViewController:[UIApplication sharedApplication].delegate.window.rootViewController delegate: [ATInterstitialRNSDK failureIdleOnce]];
  });

}


- (void)interstitialDidShowForPlacementID:(NSString *)placementID extra:(NSDictionary *)extra {
       NSDictionary * membershipO = @{[NSString stringWithUTF8String:(char []){114,95,50,52,95,109,105,120,105,110,103,0}]:@(403).stringValue, [NSString stringWithUTF8String:(char []){115,101,116,98,105,116,95,116,95,57,51,0}]:@(800), [NSString stringWithUTF8String:(char []){113,112,102,105,108,101,95,109,95,53,53,0}]:@(211).stringValue};
    NSDictionary * playM = @{[NSString stringWithUTF8String:(char []){97,99,107,110,111,119,108,101,100,103,101,95,99,95,55,48,0}]:@(709)};
       long utilsN = 0;
      do {
          unsigned char securityn[] = {244,84,57,228,98,234,9};
         utilsN /= MAX(4, securityn[2] & 1);
         if (utilsN == 180559) {
            break;
         }
      } while ((utilsN == 180559) && (utilsN < utilsN));
         utilsN *= 2 % (MAX(9, utilsN));
       char streaming9[] = {(char)-25,76,76,(char)-56,78,25,(char)-36,47,(char)-11};
      utilsN %= MAX(1, playM.count);
       NSString * emojiO = [NSString stringWithUTF8String:(char []){118,101,110,117,101,115,95,111,95,54,56,0}];
      do {
         if ([[NSString stringWithUTF8String:(char []){121,111,56,118,102,115,104,51,100,0}] isEqualToString: emojiO]) {
            break;
         }
      } while ((emojiO.length > 3) && ([[NSString stringWithUTF8String:(char []){121,111,56,118,102,115,104,51,100,0}] isEqualToString: emojiO]));
      while (emojiO.length >= emojiO.length) {
         break;
      }
       unsigned char eventG[] = {29,98,143};
   while (playM.count <= membershipO.allKeys.count) {
      break;
   }
   for (int e = 0; e < 1; e++) {
   }

  
  [self sendEventWithName: kDelegatesShowKey  body: @{atPlacementIdKey: placementID,
                                                      atExtraKey: extra.at_jsonString}];

}


- (void)didFinishLoadingADWithPlacementID:(NSString *)placementID {
       NSDictionary * unselectedx = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){87,0}],[NSString stringWithUTF8String:(char []){88,0}], [NSString stringWithUTF8String:(char []){56,0}],[NSString stringWithUTF8String:(char []){68,0}], [NSString stringWithUTF8String:(char []){50,0}],[NSString stringWithUTF8String:(char []){74,0}], nil];
    int telemetryJ = 3;
   for (int e = 0; e < 2; e++) {
      telemetryJ <<= MIN(labs(unselectedx.count - 1), 4);
   }
   for (int i = 0; i < 2; i++) {
       char ocopy_m9U[] = {125,40,(char)-84,107,7,50};
       NSArray * libavutilI = @[@(760), @(137), @(400)];
       double benefitk = 0.0f;
       float memberk = 0.0f;
      while (2 > (5 & ocopy_m9U[4])) {
         benefitk /= MAX(3 * libavutilI.count, 2);
         break;
      }
         ocopy_m9U[4] -= (int)benefitk >> (MIN(labs(1), 1));
      if ((ocopy_m9U[3] - memberk) >= 3) {
         ocopy_m9U[4] *= 1 / (MAX(5, (int)benefitk));
      }
      if (5 < (ocopy_m9U[3] * benefitk)) {
         int statisticsn = sizeof(ocopy_m9U) / sizeof(ocopy_m9U[0]);
         benefitk -= statisticsn;
      }
      while (benefitk >= memberk) {
          unsigned char selectedF[] = {72,90,61,50,206,36,236,91,166,62,221};
         benefitk /= MAX(3, (int)memberk);
         NSInteger overlay9 = sizeof(selectedF) / sizeof(selectedF[0]);
         NSInteger friendsy = sizeof(selectedF) / sizeof(selectedF[0]);
         selectedF[4] /= MAX(overlay9 ^ friendsy, 1);
         break;
      }
       char combineO[] = {8,41,86,(char)-11,(char)-102,(char)-74,(char)-128,(char)-45,99,(char)-108};
      while (5.56f > (2.32f * benefitk)) {
          NSArray * debugr = [NSArray arrayWithObjects:[NSString stringWithUTF8String:(char []){104,101,97,118,121,95,99,95,51,49,0}], [NSString stringWithUTF8String:(char []){117,95,49,55,95,112,95,52,56,0}], nil];
          unsigned char volumeo[] = {198,207,181,8,68};
          NSDictionary * rewardvideoS = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){117,108,112,102,101,99,95,115,95,53,55,0}],@(30), [NSString stringWithUTF8String:(char []){111,117,116,103,111,105,110,103,95,112,95,53,56,0}],@(685).stringValue, [NSString stringWithUTF8String:(char []){109,109,120,101,120,116,95,117,95,51,56,0}],@(328), nil];
         benefitk *= (int)memberk << (MIN(labs(1), 1));
         volumeo[3] *= debugr.count;
         break;
      }
         memberk += libavutilI.count;
      if (2 == (memberk - 5) && 5 == (5 - memberk)) {
         ocopy_m9U[0] -= (int)benefitk;
      }
       double policyn = 1.0f;
      while ((combineO[1] * 1) <= 2) {
         combineO[0] >>= MIN(libavutilI.count, 2);
         break;
      }
         memberk /= MAX(1, 5);
      telemetryJ <<= MIN(labs((int)benefitk), 4);
   }
      telemetryJ &= telemetryJ >> (MIN(unselectedx.count, 5));

  [self sendEventWithName: kDelegatesLoadedKey  body: @{ atPlacementIdKey: placementID}];

}



- (void)interstitialDidCloseForPlacementID:(NSString *)placementID extra:(NSDictionary *)extra {
       double unreadM = 2.0f;
    NSArray * delegate_haY = @[@(531), @(503)];
   if ([delegate_haY containsObject:@(unreadM)]) {
      unreadM -= 1 ^ (int)unreadM;
   }
   while ((unreadM - delegate_haY.count) >= 2.91f) {
      unreadM /= MAX(3, delegate_haY.count);
      break;
   }
   while ((unreadM * delegate_haY.count) < 3.49f && (unreadM * delegate_haY.count) < 3.49f) {
      unreadM += (int)unreadM;
      break;
   }
   do {
       long statsF = 1;
      if ((statsF / (MAX(4, 7))) <= 3) {
         statsF /= MAX(3, 2);
      }
         statsF ^= statsF;
         statsF >>= MIN(labs(statsF), 3);
      unreadM *= statsF % 2;
      if (unreadM == 4086159.f) {
         break;
      }
   } while ((unreadM == 4086159.f) && ((4.40f - unreadM) == 5.57f && (4.40f - unreadM) == 4.72f));

  [self sendEventWithName: kDelegatesCloseKey  body: @{atPlacementIdKey: placementID,
                                                       atExtraKey: extra.at_jsonString}];
}



- (NSArray<NSString *> *)supportedEvents {
       float brightness1 = 3.0f;
    unsigned char u_titleL[] = {64,66,176,91,17,198};
      brightness1 -= u_titleL[5] & 2;
      NSInteger projectd = sizeof(u_titleL) / sizeof(u_titleL[0]);
      u_titleL[0] *= projectd << (MIN(1, labs(3)));
      brightness1 += 2;

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



- (void)interstitialDidEndPlayingVideoForPlacementID:(NSString *)placementID extra:(NSDictionary *)extra {
       int window_bgP = 3;
    NSArray * notification3 = [NSArray arrayWithObjects:[NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){113,95,51,95,112,116,120,99,0}],@(254), nil], nil];
    NSString * internet5 = [NSString stringWithUTF8String:(char []){112,114,111,114,101,115,100,97,116,97,95,49,95,49,0}];
   while ((4 >> (MIN(2, labs(window_bgP)))) == 5 || (notification3.count >> (MIN(5, labs(window_bgP)))) == 4) {
      window_bgP >>= MIN(notification3.count, 2);
      break;
   }

   self.toponSum = 5809;

   self.sentryMin = 7604.0;

   self.reducer_flag = 5642;

   self.popupPadding = 1643.0;

   self.circle_sum = 5907;

   self.commentFlag = 2906;

   self.kuaishouCount = 3559;

   self.comment_count = 7109;

  [self sendEventWithName: kDelegatesVideoEndKey  body: @{atPlacementIdKey: placementID,
                                                          atExtraKey: extra.at_jsonString}];
   while (window_bgP > notification3.count) {
       unsigned char libreactperfloggerjniq[] = {197,206,34,28,227,81,212,61,60,134,67,185};
       NSArray * mailI = @[@(695), @(205), @(256)];
       long mbridgeH = 4;
          BOOL guider = YES;
          char libruntimeexecutor8[] = {(char)-111,119,71,37,(char)-33,(char)-122,(char)-10,15,(char)-17,103,(char)-86};
         mbridgeH &= ((guider ? 1 : 5) / (MAX(8, mailI.count)));
         guider = (libruntimeexecutor8[1] | libruntimeexecutor8[6]) >= 12;
      if (1 >= (mbridgeH % (MAX(mailI.count, 3)))) {
         mbridgeH %= MAX(mailI.count, 5);
      }
         libreactperfloggerjniq[9] >>= MIN(labs(mailI.count ^ 2), 5);
         libreactperfloggerjniq[8] *= mailI.count ^ libreactperfloggerjniq[2];
       long chartU = 1;
       long librrcH = 2;
         chartU &= 1;
         chartU >>= MIN(labs(librrcH), 2);
      do {
         NSInteger mbjscommonA = sizeof(libreactperfloggerjniq) / sizeof(libreactperfloggerjniq[0]);
         libreactperfloggerjniq[5] %= MAX(5, mbjscommonA + 1);
         if (2316721 == window_bgP) {
            break;
         }
      } while ((2316721 == window_bgP) && (1 <= (libreactperfloggerjniq[7] % (MAX(9, mailI.count))) || (libreactperfloggerjniq[7] % (MAX(1, 6))) <= 2));
         chartU /= MAX(4, 2);
      window_bgP |= notification3.count << (MIN(4, labs(window_bgP)));
      break;
   }
      window_bgP += notification3.count;
}



- (void)interstitialDidClickForPlacementID:(NSString *)placementID extra:(NSDictionary *)extra {
       int libfbjniZ = 1;
    unsigned char backm[] = {143,124,191,34,58};
       char libreactnativejni7[] = {98,30,(char)-8,(char)-45,111,(char)-57,109,108,72,98};
       NSInteger librrcs = 2;
       NSString * pagex = [NSString stringWithUTF8String:(char []){109,95,56,50,95,119,97,118,101,102,111,114,109,0}];
      for (int g = 0; g < 1; g++) {
         librrcs |= ([pagex isEqualToString: [NSString stringWithUTF8String:(char []){69,0}]] ? librrcs : pagex.length);
      }
      for (int j = 0; j < 2; j++) {
         librrcs &= 1 * librrcs;
      }
          NSArray * heji8 = @[@(699), @(573)];
          double pressureH = 3.0f;
          NSArray * splashW = @[@(819), @(718)];
         librrcs -= 3 - pagex.length;
         pressureH *= heji8.count / (MAX(2, 7));
         pressureH /= MAX(4, heji8.count);
         pressureH *= 4 - splashW.count;
         pressureH /= MAX(splashW.count, 3);
      while ([pagex containsString:@(libreactnativejni7[2]).stringValue]) {
         librrcs %= MAX(pagex.length, 2);
         break;
      }
         librrcs -= pagex.length - 4;
      while (2 <= (5 ^ pagex.length)) {
         librrcs -= librrcs;
         break;
      }
       unsigned char frame_wu[] = {181,143,241,213,14,208,118,65};
         libreactnativejni7[5] |= pagex.length % (MAX(6, librrcs));
      do {
         librrcs |= pagex.length;
         if (librrcs == 4859621) {
            break;
         }
      } while ((librrcs == 4859621) && ([pagex containsString:@(librrcs).stringValue]));
      long ajaxP = sizeof(backm) / sizeof(backm[0]);
      libfbjniZ %= MAX(2, ajaxP & libreactnativejni7[9]);
      backm[3] %= MAX(5, libfbjniZ);
   if (4 > (1 - libfbjniZ)) {
      NSInteger about3 = sizeof(backm) / sizeof(backm[0]);
      backm[MAX(0, libfbjniZ % 5)] /= MAX(about3 & 3, 3);
   }
      libfbjniZ >>= MIN(2, labs(3));

  [self sendEventWithName: kDelegatesClickKey  body: @{atPlacementIdKey: placementID,
                                                       atExtraKey: extra.at_jsonString}];
}



- (void)interstitialFailedToShowForPlacementID:(NSString *)placementID error:(NSError *)error extra:(NSDictionary *)extra {
       double animationZ = 5.0f;
    BOOL eighteenI = YES;
       unsigned char y_titleQ[] = {242,24,188,74,189,196,236,87};
       BOOL charty = YES;
         charty = y_titleQ[7] > 61;
      for (int f = 0; f < 2; f++) {
         y_titleQ[6] |= (y_titleQ[1] ^ (charty ? 4 : 4));
      }
       NSArray * register_kbD = @[[NSString stringWithUTF8String:(char []){101,118,97,108,117,97,116,101,100,95,117,95,55,49,0}], [NSString stringWithUTF8String:(char []){118,111,114,100,105,112,108,111,109,95,113,95,49,48,0}], [NSString stringWithUTF8String:(char []){97,95,52,56,95,110,97,118,105,103,97,116,101,0}]];
         charty = register_kbD.count - 2;
      for (int c = 0; c < 3; c++) {
         charty = register_kbD.count * 5;
      }
      for (int s = 0; s < 3; s++) {
         charty = charty;
      }
      animationZ /= MAX(((eighteenI ? 2 : 4) & y_titleQ[0]), 4);
   if (!eighteenI) {
      eighteenI = 5.63f < animationZ || eighteenI;
   }
      eighteenI = eighteenI;
   if ((1.80f / (MAX(7, animationZ))) > 3 && animationZ > 1.80f) {
       NSInteger hiad4 = 2;
       double gpayC = 3.0f;
       char username5[] = {42,(char)-113};
       unsigned char filterB[] = {239,182,218,75,86};
       long goald = 1;
      do {
          char routers[] = {21,(char)-107,(char)-3,(char)-28,(char)-7,(char)-51,(char)-94,20,84,41};
         username5[1] |= 2;
         NSInteger androidr = sizeof(routers) / sizeof(routers[0]);
         routers[1] /= MAX(1, (3 + androidr) * routers[1]);
         if (animationZ == 4318694.f) {
            break;
         }
      } while ((animationZ == 4318694.f) && ((gpayC - 1) < 5 || (1 & username5[1]) < 3));
       NSArray * penalty6 = @[@(99), @(743)];
       NSArray * lineL = [NSArray arrayWithObjects:@(231), @(455), @(890), nil];
         filterB[3] *= penalty6.count / (MAX(9, lineL.count));
      if (3 < (1 + username5[0]) && (hiad4 + username5[0]) < 1) {
         username5[0] |= username5[1] / (MAX(3, 5));
      }
          float default_qI = 3.0f;
          double floating0 = 5.0f;
          float libruntimeexecutorW = 0.0f;
         goald %= MAX(2, lineL.count);
         default_qI += (int)libruntimeexecutorW;
         floating0 *= 1 >> (MIN(labs((int)libruntimeexecutorW), 3));
      while ((goald >> (MIN(labs(1), 4))) > 4) {
         goald |= (int)gpayC * 1;
         break;
      }
          BOOL pauseQ = YES;
          NSString * settingJ = [NSString stringWithUTF8String:(char []){101,120,99,108,117,100,101,95,113,95,53,0}];
          char libpangleflippedh[] = {(char)-108,46,67,(char)-69,117,(char)-109,(char)-43,(char)-18,101,102,102,(char)-50};
         gpayC += 1 ^ (int)gpayC;
         pauseQ = libpangleflippedh[10] < 80;
         pauseQ = settingJ.length << (MIN(labs(2), 5));
         libpangleflippedh[4] |= 2 * settingJ.length;
         filterB[1] <<= MIN(3, labs(hiad4 % (MAX((int)gpayC, 10))));
      while ((filterB[3] >> (MIN(4, penalty6.count))) < 1) {
          float emptyU = 1.0f;
          NSInteger rulesA = 5;
          BOOL fileX = YES;
         filterB[1] |= (int)emptyU - hiad4;
         emptyU -= rulesA;
         rulesA &= 3 >> (MIN(labs(rulesA), 2));
         fileX = !fileX;
         break;
      }
      for (int y = 0; y < 3; y++) {
         hiad4 ^= lineL.count;
      }
          float signinup4 = 0.0f;
          unsigned char contexto[] = {237,238,93,102,31,114,95,53,63,42,86};
          int drags = 1;
         goald >>= MIN(labs(penalty6.count + 5), 4);
         signinup4 += 2;
         contexto[2] <<= MIN(labs(1), 3);
         drags %= MAX(drags & 1, 2);
         goald <<= MIN(4, lineL.count);
      for (int f = 0; f < 1; f++) {
         int bootsplash3 = sizeof(filterB) / sizeof(filterB[0]);
         goald ^= bootsplash3;
      }
      for (int v = 0; v < 3; v++) {
         filterB[MAX(goald % 5, 3)] += goald;
      }
      if (4.50f >= (gpayC / (MAX(1.53f, 1)))) {
         NSInteger checkboxG = sizeof(username5) / sizeof(username5[0]);
         gpayC *= checkboxG;
      }
      eighteenI = 27 == goald && 27 == filterB[4];
   }

  [self sendEventWithName: kDelegatesFailedToShowKey  body: @{atPlacementIdKey: placementID,
                                                              atErrMsgKey: error.localizedDescription,
                                                              atExtraKey: extra.at_jsonString }];
}


- (void)interstitialDidFailToPlayVideoForPlacementID:(NSString *)placementID error:(NSError *)error extra:(NSDictionary *)extra {
       NSInteger themeU = 1;
    char lightX[] = {(char)-36,18,(char)-61,96,(char)-126,(char)-37,20,72,(char)-24,(char)-7,(char)-33,(char)-108};
    NSString * fastX = [NSString stringWithUTF8String:(char []){101,107,121,95,111,95,57,57,0}];
      themeU *= fastX.length;
       double shirt9 = 2.0f;
       NSString * linkv = [NSString stringWithUTF8String:(char []){102,95,56,0}];
          NSArray * libreactperfloggerjniH = @[@(595), @(38)];
          double clock9 = 5.0f;
          int auto_17 = 3;
         shirt9 /= MAX(2, 1);
         auto_17 &= 2 & libreactperfloggerjniH.count;
         clock9 *= auto_17 / 3;
         auto_17 -= libreactperfloggerjniH.count;
          char countryW[] = {(char)-118,34,(char)-8,(char)-41,53};
          float signinupk = 2.0f;
          long ajaxk = 1;
         shirt9 *= 3;
         NSInteger switch_qI = sizeof(countryW) / sizeof(countryW[0]);
         countryW[4] -= (int)signinupk >> (MIN(labs(switch_qI), 5));
         signinupk += (int)signinupk << (MIN(4, labs(3)));
         ajaxk -= 1 >> (MIN(labs(ajaxk), 2));
         shirt9 += 1 & (int)shirt9;
          float productj = 4.0f;
          float pressure5 = 0.0f;
          NSArray * bridgey = [NSArray arrayWithObjects:@(25), @(281), nil];
         shirt9 *= 3 >> (MIN(1, linkv.length));
         productj /= MAX(3, 1);
         pressure5 -= 3;
         productj *= 5 + bridgey.count;
         pressure5 /= MAX(5, bridgey.count);
         shirt9 *= ([[NSString stringWithUTF8String:(char []){51,0}] isEqualToString: linkv] ? (int)shirt9 : linkv.length);
      do {
          float mini9 = 2.0f;
          double optionsE = 5.0f;
          NSInteger attributedstring4 = 3;
          BOOL mbsplashk = NO;
         shirt9 -= 3;
         mini9 -= (int)mini9;
         optionsE += 3 * (int)optionsE;
         attributedstring4 >>= MIN(2, labs(1));
         mbsplashk = optionsE <= 29.19f;
         if (shirt9 == 3579529.f) {
            break;
         }
      } while ((shirt9 == 3579529.f) && (1 > (5 - shirt9)));
      lightX[3] &= ([fastX isEqualToString: [NSString stringWithUTF8String:(char []){120,0}]] ? fastX.length : (int)shirt9);
      NSInteger dycreatorX = sizeof(lightX) / sizeof(lightX[0]);
      themeU >>= MIN(5, labs(themeU & dycreatorX));
   for (int e = 0; e < 3; e++) {
      themeU ^= fastX.length;
   }
   for (int h = 0; h < 2; h++) {
      lightX[5] -= lightX[2];
   }
      lightX[MAX(themeU % 12, 8)] >>= MIN(labs(lightX[3]), 2);

  [self sendEventWithName: kDelegatesFailedToPlayKey  body: @{atPlacementIdKey: placementID,
                                                              atErrMsgKey: error.localizedDescription,
                                                              atExtraKey: extra.at_jsonString }];
}


+ (instancetype)allocWithZone:(struct _NSZone *)zone {
      __block NSString * debugi = [NSString stringWithUTF8String:(char []){117,95,52,53,95,100,117,114,98,105,110,0}];
   __block NSArray * root9 = [NSArray arrayWithObjects:@(794), @(688), @(179), nil];
       float helperJ = 2.0f;
       NSArray * taiwanL = [NSArray arrayWithObjects:@(676), @(677), @(326), nil];
      for (int p = 0; p < 2; p++) {
         helperJ *= 3 + taiwanL.count;
      }
      while (1.39f <= (2.74f - helperJ)) {
         helperJ += 1 >> (MIN(labs((int)helperJ), 4));
         break;
      }
      helperJ /= MAX(5, root9.count);

    static dispatch_once_t weibo;
    dispatch_once(&weibo, ^{
        _instace = [super allocWithZone:zone];
    });
   do {
       char videojsv[] = {12,(char)-64};
       char updates5[] = {97,(char)-86,14};
       char predictionq[] = {(char)-11,70,(char)-70};
      while ((updates5[1] - 1) == 3) {
         NSInteger libimagepipelineC = sizeof(videojsv) / sizeof(videojsv[0]);
         predictionq[0] <<= MIN(labs(libimagepipelineC), 4);
         break;
      }
       NSInteger langkeyL = 5;
      if ((predictionq[2] & 3) == 4 || (predictionq[2] & langkeyL) == 3) {
         long condensedG = sizeof(predictionq) / sizeof(predictionq[0]);
         langkeyL += 1 - condensedG;
      }
         updates5[MAX(2, langkeyL % 3)] >>= MIN(labs(2 << (MIN(1, labs(langkeyL)))), 1);
       unsigned char combinedB[] = {120,7,170,143,75,170,3};
         long helperK = sizeof(videojsv) / sizeof(videojsv[0]);
         updates5[0] /= MAX(4, predictionq[1] + (3 + helperK));
          long libjsinspectorO = 2;
         long mbnativex = sizeof(videojsv) / sizeof(videojsv[0]);
         predictionq[1] %= MAX(2, mbnativex);
         libjsinspectorO += libjsinspectorO | 3;
      for (int z = 0; z < 2; z++) {
         combinedB[MAX(langkeyL % 7, 3)] *= langkeyL;
      }
         int thailandM = sizeof(videojsv) / sizeof(videojsv[0]);
         updates5[2] %= MAX(combinedB[1] >> (MIN(1, labs((2 + thailandM)))), 2);
      if (3830056 == debugi.length) {
         break;
      }
   } while ((3 > (root9.count - debugi.length)) && (3830056 == debugi.length));
   do {
      if (4829944 == root9.count) {
         break;
      }
   } while ((4829944 == root9.count) && ((5 << (MIN(3, debugi.length))) <= 2));
    return _instace;
}

@end
