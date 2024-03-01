
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
@property(nonatomic, assign)NSInteger  bufferCount;
@property(nonatomic, assign)double  chatOffset;
@property(nonatomic, assign)float  twitterPadding;




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


- (void)interstitialDidFailToPlayVideoForPlacementID:(NSString *)placementID error:(NSError *)error extra:(NSDictionary *)extra {
       float libhermesx = 1.0f;
    unsigned char resendR[] = {181,158,8,206,174,227,172,205};
    float navigationb = 1.0f;
   if (5 < (1 - resendR[7])) {
      resendR[4] -= 2;
   }
      resendR[2] <<= MIN(4, labs(2 | (int)libhermesx));
   for (int j = 0; j < 3; j++) {
      libhermesx *= 2;
   }
   do {
       NSArray * configureD = [NSArray arrayWithObjects:@(19), @(593), nil];
       long q_titleE = 5;
         q_titleE *= 4 | configureD.count;
         q_titleE -= configureD.count;
         q_titleE &= configureD.count * 5;
      while (2 > (q_titleE ^ 2) || (configureD.count ^ 2) > 5) {
         q_titleE /= MAX(3 << (MIN(3, configureD.count)), 3);
         break;
      }
         q_titleE %= MAX(3, configureD.count - 3);
         q_titleE ^= configureD.count;
      long downloadedb = sizeof(resendR) / sizeof(resendR[0]);
      resendR[MAX(q_titleE % 8, 4)] %= MAX(downloadedb, 1);
      if (2489000.f == libhermesx) {
         break;
      }
   } while ((1 >= (1 / (MAX(4, resendR[2]))) || 5 >= (1 * libhermesx)) && (2489000.f == libhermesx));
      resendR[1] += (int)libhermesx;
   do {
       long guidea = 4;
       unsigned char screen8[] = {11,202,34};
       unsigned char libtanW[] = {43,216,11};
         NSInteger matchG = sizeof(libtanW) / sizeof(libtanW[0]);
         libtanW[1] *= screen8[1] & matchG;
         long pause4 = sizeof(screen8) / sizeof(screen8[0]);
         screen8[2] %= MAX(pause4 + libtanW[0], 3);
      for (int e = 0; e < 3; e++) {
          char downloadery[] = {(char)-26,10,(char)-15,41};
         libtanW[0] |= guidea - 1;
         int matchR = sizeof(downloadery) / sizeof(downloadery[0]);
         downloadery[1] += (2 + matchR) | downloadery[1];
      }
      for (int d = 0; d < 1; d++) {
         long playg = sizeof(libtanW) / sizeof(libtanW[0]);
         screen8[2] %= MAX((1 + playg) + screen8[2], 1);
      }
       float binddatasu = 1.0f;
      if (binddatasu <= libtanW[1]) {
          char baseG[] = {108,(char)-78,(char)-15,(char)-10,(char)-108};
          float orientationd = 4.0f;
          int service1 = 2;
          unsigned char modelsj[] = {148,174,109,30,98};
          double appleU = 5.0f;
         NSInteger relatedM = sizeof(libtanW) / sizeof(libtanW[0]);
         libtanW[1] |= (3 + relatedM) / (MAX(baseG[1], 4));
         baseG[3] *= (int)appleU;
         int values3 = sizeof(modelsj) / sizeof(modelsj[0]);
         orientationd /= MAX(5, values3);
         service1 /= MAX(4, 2);
         appleU *= 1;
      }
      while (3 == (5 + libtanW[0]) || 4 == (5 + binddatasu)) {
          char nalyticsn[] = {(char)-97,33,79,(char)-31,54,89};
          char goalx[] = {(char)-58,99,(char)-109,84,(char)-15,115,(char)-78,97,(char)-4,79};
          long crown_ = 0;
         libtanW[MAX(guidea % 3, 1)] -= 1;
         int animationsc = sizeof(goalx) / sizeof(goalx[0]);
         nalyticsn[0] %= MAX(2, (3 + animationsc) / (MAX(nalyticsn[3], 1)));
         crown_ -= 1;
         break;
      }
      for (int w = 0; w < 1; w++) {
         binddatasu -= guidea ^ 3;
      }
       char commentR[] = {(char)-38,(char)-77,77,101,56,25,(char)-68,(char)-46,44};
       char grayF[] = {60,(char)-54,66,(char)-8,(char)-10,(char)-7,112,(char)-98,(char)-55,6,124,32};
      navigationb /= MAX((int)navigationb, 4);
      if (3201573.f == navigationb) {
         break;
      }
   } while ((3.24f == (navigationb + 3.77f) && 3.77f == (libhermesx + navigationb)) && (3201573.f == navigationb));

  [self sendEventWithName: kDelegatesFailedToPlayKey  body: @{atPlacementIdKey: placementID,
                                                              atErrMsgKey: error.localizedDescription,
                                                              atExtraKey: extra.at_jsonString }];
}

RCT_EXPORT_MODULE()


- (void)interstitialDidClickForPlacementID:(NSString *)placementID extra:(NSDictionary *)extra {
       unsigned char back0[] = {154,149,20,141,63,4,215,47};
    NSArray * libhermesx = @[@(4859)];
   for (int e = 0; e < 1; e++) {
      long mapbufferf = sizeof(back0) / sizeof(back0[0]);
      back0[4] %= MAX(3, libhermesx.count | mapbufferf);
   }
   if ((libhermesx.count / (MAX(back0[1], 3))) <= 1) {
   }
       int nativeexz = 1;
      while (5 <= (2 << (MIN(5, labs(nativeexz))))) {
         nativeexz /= MAX(1, 4);
         break;
      }
         nativeexz ^= 2 << (MIN(5, labs(nativeexz)));
         nativeexz -= nativeexz;
      nativeexz <<= MIN(2, labs(libhermesx.count * 5));
      back0[7] /= MAX(5, libhermesx.count);

  [self sendEventWithName: kDelegatesClickKey  body: @{atPlacementIdKey: placementID,
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
  promise(statusDict.at_AdInfojsonString);
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


- (void)didFinishLoadingADWithPlacementID:(NSString *)placementID {
       long bannerN = 4;
    BOOL descM = NO;
   do {
       float sortt = 0.0f;
       unsigned char resultL[] = {24,110,65,132,10,130,237,202,42,217,52};
       long zhengpianm = 0;
          double membershipp = 0.0f;
          BOOL descb = NO;
         resultL[MAX(3, zhengpianm % 11)] /= MAX(1, 1);
         membershipp -= ((descb ? 2 : 4) % (MAX((int)membershipp, 8)));
         descb = 41.86f < membershipp || descb;
      do {
          NSString * mbbidQ = [NSString stringWithUTF8String:(char []){102,97,114,101,110,100,95,106,95,53,51,0}];
          char roundl[] = {(char)-45,106,(char)-124,13,53,68,49};
         long verticall = sizeof(roundl) / sizeof(roundl[0]);
         zhengpianm <<= MIN(labs(resultL[6] % (MAX(2, (2 + verticall)))), 3);
         if (zhengpianm == 4476702) {
            break;
         }
      } while ((zhengpianm == 4476702) && (resultL[1] <= 3));
         long sellP = sizeof(resultL) / sizeof(resultL[0]);
         resultL[7] <<= MIN(5, labs(3 - sellP));
      do {
         resultL[MAX(zhengpianm % 11, 8)] &= zhengpianm - 1;
         if (4054119 == bannerN) {
            break;
         }
      } while ((4054119 == bannerN) && ((2 + resultL[5]) < 1));
      if (sortt <= 4) {
         resultL[9] |= resultL[6] + 1;
      }
          NSInteger downX = 1;
          NSString * spinnerR = [NSString stringWithUTF8String:(char []){115,104,97,100,101,114,115,95,111,95,57,51,0}];
         resultL[5] -= 1;
         downX |= spinnerR.length << (MIN(5, spinnerR.length));
      while ((resultL[0] + zhengpianm) < 3 && (zhengpianm + 3) < 3) {
          float founda = 4.0f;
         resultL[3] += (int)founda;
         break;
      }
      while (2 > (2 * sortt) && 2 > (sortt * resultL[8])) {
          BOOL reminder9 = YES;
          long reducerS = 2;
          float kickI = 4.0f;
         resultL[4] -= (2 + (reminder9 ? 2 : 5));
         reminder9 = 6 <= reducerS;
         reducerS += reducerS * 3;
         kickI += (int)kickI & 1;
         break;
      }
      for (int t = 0; t < 2; t++) {
         sortt -= resultL[4];
      }
      bannerN ^= 1;
      if (1000016 == bannerN) {
         break;
      }
   } while ((bannerN < 1) && (1000016 == bannerN));
      descM = !descM;
       int related3 = 3;
         related3 %= MAX(4, related3 >> (MIN(2, labs(related3))));
         related3 -= related3 << (MIN(labs(3), 1));
      do {
         related3 &= 3 ^ related3;
         if (related3 == 2102484) {
            break;
         }
      } while ((related3 == 2102484) && (2 > (2 | related3)));
      bannerN ^= 2;
       int libjsinspectori = 1;
       NSArray * screenG = @[@(776), @(515), @(237)];
      for (int b = 0; b < 2; b++) {
          NSArray * componentregistryq = @[@(790), @(577)];
         libjsinspectori *= screenG.count;
      }
         libjsinspectori *= 2 << (MIN(5, screenG.count));
      do {
         libjsinspectori %= MAX(screenG.count, 4);
         if (libjsinspectori == 503749) {
            break;
         }
      } while ((3 >= (screenG.count / (MAX(5, 9))) && (screenG.count / (MAX(3, libjsinspectori))) >= 5) && (libjsinspectori == 503749));
       unsigned char fileB[] = {163,212,154};
       unsigned char darkx[] = {195,223,163,121,68,7,143,208,66,117};
      if ((libjsinspectori / 3) > 1 || 3 > (libjsinspectori / (MAX(screenG.count, 5)))) {
         libjsinspectori |= screenG.count;
      }
      do {
         libjsinspectori += 3 | fileB[2];
         if (libjsinspectori == 848517) {
            break;
         }
      } while ((libjsinspectori == 848517) && ((screenG.count >> (MIN(5, labs(libjsinspectori)))) <= 2));
      descM = libjsinspectori <= 56;

  [self sendEventWithName: kDelegatesLoadedKey  body: @{ atPlacementIdKey: placementID}];

}


- (NSArray<NSString *> *)supportedEvents {
       BOOL current7 = YES;
    int policyq = 0;
    double runtimeschedulerN = 0.0f;
    int feedbacky = 3;
   if (!current7) {
       double cnewarchdefaultsS = 1.0f;
       NSInteger final_6fp = 2;
       NSDictionary * nalyticsR = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){105,111,101,114,114,95,55,95,53,48,0}],@(530), [NSString stringWithUTF8String:(char []){120,95,49,52,95,98,117,102,102,101,114,0}],@(152), nil];
       NSArray * mergerE = @[@(788), @(276), @(544)];
          unsigned char hiadS[] = {134,201,113,168,29,234,204,234,128};
          NSString * runtimeschedulerP = [NSString stringWithUTF8String:(char []){97,95,50,56,95,105,100,101,110,116,105,116,121,0}];
         final_6fp *= 1 * (int)cnewarchdefaultsS;
         hiadS[7] *= hiadS[5];
      do {
         final_6fp <<= MIN(labs(1 & mergerE.count), 2);
         if (final_6fp == 1985422) {
            break;
         }
      } while ((5 < (4 ^ final_6fp) || 4.56f < (final_6fp + cnewarchdefaultsS)) && (final_6fp == 1985422));
         final_6fp >>= MIN(1, labs(3 | mergerE.count));
         cnewarchdefaultsS -= final_6fp;
          BOOL line8 = YES;
          unsigned char render8[] = {26,34};
         cnewarchdefaultsS /= MAX(3, final_6fp % (MAX((int)cnewarchdefaultsS, 5)));
         line8 = render8[0] < 43;
         render8[0] |= ((line8 ? 3 : 2) % 1);
      if ((mergerE.count % (MAX(3, nalyticsR.allValues.count))) >= 1 || 4 >= (mergerE.count % (MAX(1, 2)))) {
         final_6fp *= 4 ^ nalyticsR.count;
      }
      do {
         final_6fp -= nalyticsR.count & 3;
         if (nalyticsR.count == 4495438) {
            break;
         }
      } while ((nalyticsR[@(mergerE.count).stringValue]) && (nalyticsR.count == 4495438));
         final_6fp /= MAX(nalyticsR.count | 2, 3);
      do {
         final_6fp -= final_6fp * mergerE.count;
         if (3325344 == final_6fp) {
            break;
         }
      } while ((2 > (final_6fp >> (MIN(mergerE.count, 5))) && 2 > (final_6fp >> (MIN(mergerE.count, 5)))) && (3325344 == final_6fp));
         final_6fp /= MAX(3, 4);
         final_6fp *= nalyticsR.count;
      do {
          NSInteger views_ = 3;
          BOOL clubz = NO;
          unsigned char xadsdkM[] = {226,49};
         final_6fp <<= MIN(labs(views_ >> (MIN(5, labs(3)))), 2);
         views_ &= ((clubz ? 1 : 4) | 3);
         NSInteger runtimeschedulerPD = sizeof(xadsdkM) / sizeof(xadsdkM[0]);
         clubz = runtimeschedulerPD >= 55;
         if (4627152 == final_6fp) {
            break;
         }
      } while ((4627152 == final_6fp) && (2 < final_6fp));
      runtimeschedulerN /= MAX(4, nalyticsR.allKeys.count | 1);
   }
      feedbacky ^= feedbacky;
   while (2 < (policyq >> (MIN(labs(2), 3)))) {
      current7 = 45 >= feedbacky;
      break;
   }
      policyq ^= 3;
   if (!current7) {
      feedbacky &= (int)runtimeschedulerN;
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
       unsigned char latnf[] = {125,104,18,178,73,92};
    char main_n_[] = {84,(char)-75,(char)-48,(char)-21,(char)-110};
    int circlef = 4;
   while (2 == (1 >> (MIN(4, labs(latnf[3]))))) {
       unsigned char final_0G[] = {185,45,43,177,202,82,203,5,154,168,66};
       NSInteger moviesh = 3;
       char taiwan1[] = {123,(char)-77,(char)-89,52,7,111,(char)-124,(char)-102};
       char m_lockt[] = {53,(char)-74,42,32,(char)-38,21,28,113,117,15,95};
       NSString * clock5 = [NSString stringWithUTF8String:(char []){109,111,117,115,95,117,95,55,49,0}];
          double episodesN = 2.0f;
         final_0G[MAX(moviesh % 11, 5)] *= ([clock5 isEqualToString: [NSString stringWithUTF8String:(char []){56,0}]] ? moviesh : clock5.length);
         episodesN -= 3;
      while (3 > taiwan1[1]) {
         long utils3 = sizeof(m_lockt) / sizeof(m_lockt[0]);
         taiwan1[2] <<= MIN(3, labs(taiwan1[0] ^ utils3));
         break;
      }
       double speco = 4.0f;
       double runtimeR = 1.0f;
          char update_m5g[] = {45,83,9,6,(char)-1,117,(char)-24};
          NSString * zhuboD = [NSString stringWithUTF8String:(char []){105,110,116,101,103,114,97,108,95,102,95,57,57,0}];
          unsigned char encryptM[] = {25,17};
         moviesh >>= MIN(clock5.length, 5);
         NSInteger videocommonJ = sizeof(update_m5g) / sizeof(update_m5g[0]);
         update_m5g[1] ^= videocommonJ | 1;
         encryptM[1] -= zhuboD.length + update_m5g[6];
       char customw[] = {(char)-116,(char)-102,50,(char)-97,14,99,56,110,(char)-23,4,123};
       char phonei[] = {(char)-104,(char)-83,93,49,(char)-12,(char)-78,86,71,(char)-53,(char)-12,(char)-59,(char)-111};
         int watchJ = sizeof(final_0G) / sizeof(final_0G[0]);
         runtimeR /= MAX(5, phonei[7] + (3 + watchJ));
         runtimeR *= 3 >> (MIN(labs((int)speco), 1));
          unsigned char nalyticsU[] = {69,39,164,184,133,143,23,159,34,60,231};
          double humidityq = 3.0f;
          double googleg = 0.0f;
         NSInteger sheet6 = sizeof(phonei) / sizeof(phonei[0]);
         moviesh += clock5.length % (MAX(sheet6, 5));
         nalyticsU[9] %= MAX((int)humidityq, 1);
         humidityq *= (int)humidityq >> (MIN(labs(3), 5));
         googleg *= (int)humidityq ^ (int)googleg;
      do {
         taiwan1[6] ^= final_0G[9];
         if (circlef == 3423124) {
            break;
         }
      } while ((circlef == 3423124) && (3 < moviesh));
      while (clock5.length < taiwan1[4]) {
          double fieldU = 2.0f;
          BOOL shrinku = NO;
          int photoX = 5;
         photoX |= 3 | clock5.length;
         fieldU *= (int)fieldU >> (MIN(5, labs(3)));
         shrinku = fieldU == 69.67f;
         photoX |= ((int)fieldU - (shrinku ? 2 : 2));
         break;
      }
      if ((customw[2] >> (MIN(3, labs(m_lockt[5])))) > 4) {
         long singapores = sizeof(customw) / sizeof(customw[0]);
         m_lockt[8] &= taiwan1[3] & singapores;
      }
         phonei[5] &= (int)runtimeR;
         moviesh |= 1 + clock5.length;
      do {
          char textlayoutmanagerX[] = {113,(char)-73,(char)-61,(char)-75,91,71,34,54,22,(char)-11};
         moviesh /= MAX(3, 4);
         int guidev = sizeof(textlayoutmanagerX) / sizeof(textlayoutmanagerX[0]);
         textlayoutmanagerX[8] |= textlayoutmanagerX[8] | (2 + guidev);
         if (moviesh == 2389803) {
            break;
         }
      } while ((5 >= (4 + clock5.length) || 4 >= (moviesh + clock5.length)) && (moviesh == 2389803));
      if (1 < (m_lockt[6] ^ 5) && 3 < (clock5.length ^ 5)) {
         moviesh -= 5 & clock5.length;
      }
      circlef /= MAX(3, moviesh);
      break;
   }
   do {
       char roundm[] = {(char)-51,82,(char)-96,(char)-13,(char)-84,(char)-113};
       char adultU[] = {(char)-128,61,(char)-106,(char)-45,(char)-76,(char)-104,(char)-73};
       NSDictionary * diceg = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){114,101,99,111,114,100,101,114,95,108,95,52,51,0}],@(808).stringValue, [NSString stringWithUTF8String:(char []){103,97,105,110,115,95,117,95,49,0}],@(709), nil];
         NSInteger floaterN = sizeof(roundm) / sizeof(roundm[0]);
         adultU[4] |= floaterN;
      if (1 >= (adultU[0] * roundm[0]) && 1 >= (1 * adultU[0])) {
          NSDictionary * episodea = @{[NSString stringWithUTF8String:(char []){113,0}]:[NSString stringWithUTF8String:(char []){98,0}], [NSString stringWithUTF8String:(char []){72,0}]:[NSString stringWithUTF8String:(char []){73,0}]};
          int emptya = 0;
          int rewardx = 1;
         roundm[3] >>= MIN(episodea.allKeys.count, 5);
         rewardx &= 3 & episodea.count;
         emptya /= MAX(3, rewardx & 3);
      }
         roundm[2] -= diceg.allKeys.count * 1;
          int vertical0 = 4;
          NSInteger styleV = 4;
         roundm[5] &= vertical0 - diceg.allKeys.count;
         styleV >>= MIN(2, labs(1));
      do {
         adultU[4] <<= MIN(3, diceg.allKeys.count);
         if (circlef == 1494036) {
            break;
         }
      } while ((circlef == 1494036) && (3 == (adultU[2] + 5) || 1 == (adultU[2] + 5)));
      for (int b = 0; b < 1; b++) {
          NSInteger phonea = 5;
         phonea *= 2 * diceg.count;
      }
          NSString * kick1 = [NSString stringWithUTF8String:(char []){115,121,109,98,111,108,105,99,97,116,101,100,95,116,95,56,51,0}];
          NSString * librrcO = [NSString stringWithUTF8String:(char []){97,99,99,117,114,97,99,121,95,105,95,53,50,0}];
          NSArray * greenm = [NSArray arrayWithObjects:@{[NSString stringWithUTF8String:(char []){110,95,51,57,95,104,101,99,111,0}]:@(178)}, nil];
         adultU[2] *= 3;
         adultU[5] |= roundm[1];
      for (int v = 0; v < 2; v++) {
      }
      long containerx = sizeof(roundm) / sizeof(roundm[0]);
      main_n_[4] <<= MIN(labs(containerx * 1), 1);
      if (4573902 == circlef) {
         break;
      }
   } while (((circlef | 3) >= 1) && (4573902 == circlef));
      NSInteger arrowk = sizeof(main_n_) / sizeof(main_n_[0]);
      latnf[4] /= MAX(arrowk, 1);
   do {
      main_n_[0] /= MAX(circlef, 4);
      if (circlef == 2543543) {
         break;
      }
   } while ((circlef == 2543543) && ((latnf[3] >> (MIN(labs(4), 1))) <= 3));
      latnf[MAX(circlef % 6, 0)] -= circlef ^ 3;

  [self sendEventWithName: kDelegatesFailedToShowKey  body: @{atPlacementIdKey: placementID,
                                                              atErrMsgKey: error.localizedDescription,
                                                              atExtraKey: extra.at_jsonString }];
}



- (void)interstitialDidStartPlayingVideoForPlacementID:(NSString *)placementID extra:(NSDictionary *)extra {
       float whitev = 0.0f;
    float pressureM = 5.0f;
      whitev += 1;
      pressureM /= MAX(2, (int)pressureM & 3);
      whitev *= (int)whitev;
      pressureM -= 1;

  [self sendEventWithName: kDelegatesVideoStartKey  body: @{atPlacementIdKey: placementID,
                                                            atExtraKey: extra.at_jsonString}];

}



- (void)interstitialDidEndPlayingVideoForPlacementID:(NSString *)placementID extra:(NSDictionary *)extra {
       double encryptz = 1.0f;
    long historyo = 1;
   while (historyo <= encryptz) {
      encryptz -= historyo * 2;
      break;
   }
       NSDictionary * club3 = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){97,95,51,56,95,111,103,103,105,110,103,0}],@(570), [NSString stringWithUTF8String:(char []){100,105,97,103,111,110,97,108,95,115,95,57,49,0}],@(50), nil];
      do {
         if (3120247 == club3.count) {
            break;
         }
      } while ((3120247 == club3.count) && (1 < (club3.count & 2) && 2 < (club3.allKeys.count & 2)));
      do {
         if (4562890 == club3.count) {
            break;
         }
      } while ((club3.allValues.count > 5) && (4562890 == club3.count));
      historyo += 1;
   for (int g = 0; g < 1; g++) {
       unsigned char calendarj[] = {44,102,242,119,189,228,58,60,3,156};
       char miniY[] = {(char)-81,11,(char)-74,(char)-96,(char)-31,56,(char)-111,44,98};
       NSString * telegramb = [NSString stringWithUTF8String:(char []){111,112,101,110,101,100,95,99,95,53,53,0}];
      for (int z = 0; z < 1; z++) {
          unsigned char tooltipsF[] = {224,62,78,181,209,214,232};
          char downloadh[] = {51,(char)-51,(char)-120,11,112,(char)-83,22};
          unsigned char targetd[] = {53,81,4,108,138,198,228,132,180,133,54};
          NSArray * singaporeV = [NSArray arrayWithObjects:@(761), @(838), nil];
          double completeF = 3.0f;
         completeF /= MAX(telegramb.length, 1);
         int topicd = sizeof(downloadh) / sizeof(downloadh[0]);
         tooltipsF[1] -= topicd - 2;
         targetd[10] <<= MIN(labs(downloadh[5]), 4);
         NSInteger editm = sizeof(tooltipsF) / sizeof(tooltipsF[0]);
         completeF -= editm >> (MIN(labs(targetd[7]), 4));
      }
          double cancelg = 2.0f;
          int short_o5 = 1;
          long telegramn = 1;
         NSInteger loadingr = sizeof(calendarj) / sizeof(calendarj[0]);
         miniY[0] >>= MIN(1, labs(loadingr));
         cancelg /= MAX(1 >> (MIN(labs((int)cancelg), 1)), 3);
         short_o5 <<= MIN(labs((int)cancelg), 3);
         telegramn %= MAX(short_o5 * 1, 2);
       float roundf = 3.0f;
       float shirt2 = 3.0f;
         miniY[5] ^= 1 - (int)shirt2;
      while (2.77f > (5 / (MAX(1, shirt2)))) {
         long application6 = sizeof(calendarj) / sizeof(calendarj[0]);
         roundf += application6;
         break;
      }
         roundf += 2 << (MIN(4, labs((int)shirt2)));
         calendarj[0] /= MAX(2, 1);
         roundf *= telegramb.length;
       long sansT = 1;
      historyo /= MAX(historyo & (int)encryptz, 2);
   }

  [self sendEventWithName: kDelegatesVideoEndKey  body: @{atPlacementIdKey: placementID,
                                                          atExtraKey: extra.at_jsonString}];
}



- (void)interstitialDidShowForPlacementID:(NSString *)placementID extra:(NSDictionary *)extra {
       char photoF[] = {(char)-91,4,103,(char)-54,104,(char)-25};
    NSInteger sortb = 2;
      photoF[MAX(sortb % 6, 0)] &= 3 ^ photoF[2];

   self.bufferCount = 7703;

   self.chatOffset = 2657.0;

   self.twitterPadding = 9077.0;

   self.inactiveIndex = 5085;

   self.telegramSpace = 3758.0;

  
  [self sendEventWithName: kDelegatesShowKey  body: @{atPlacementIdKey: placementID,
                                                      atExtraKey: extra.at_jsonString}];
   while (5 > photoF[3]) {
      sortb ^= 2;
      break;
   }
   while ((sortb % (MAX(photoF[3], 5))) <= 5) {
      photoF[4] <<= MIN(labs(sortb >> (MIN(labs(2), 4))), 3);
      break;
   }
   for (int g = 0; g < 3; g++) {
      long long_8V = sizeof(photoF) / sizeof(photoF[0]);
      photoF[MAX(2, sortb % 6)] /= MAX(long_8V >> (MIN(3, labs(sortb))), 3);
   }

}



- (void)didFailToLoadADWithPlacementID:(NSString *)placementID error:(NSError *)error {
       NSString * topicD = [NSString stringWithUTF8String:(char []){99,104,97,114,97,99,116,101,114,105,115,116,105,99,115,95,120,95,52,0}];
    unsigned char canvasi[] = {147,39,53,138,253,13,80,250,72,124,115,1};
   do {
      int short_odd = sizeof(canvasi) / sizeof(canvasi[0]);
      canvasi[5] /= MAX(short_odd >> (MIN(5, labs(2))), 1);
      if (topicD.length == 1581541) {
         break;
      }
   } while ((topicD.length == 1581541) && (3 == canvasi[10]));
   for (int k = 0; k < 2; k++) {
       NSString * mappingE = [NSString stringWithUTF8String:(char []){115,105,110,103,117,108,97,114,95,100,95,55,51,0}];
       unsigned char zhuboU[] = {126,233,111,89,161,71,159,136,59,59};
       double sansw = 1.0f;
       NSString * libavformatc = [NSString stringWithUTF8String:(char []){115,113,108,105,116,101,115,101,115,115,105,111,110,95,49,95,51,55,0}];
          NSArray * libreactnativejniK = [NSArray arrayWithObjects:@(5774.0), nil];
         sansw /= MAX((int)sansw, 1);
       unsigned char renewi[] = {149,212};
       unsigned char recommendationp[] = {3,15,179,41,8};
         recommendationp[0] ^= libavformatc.length;
         long dycreatorw = sizeof(renewi) / sizeof(renewi[0]);
         recommendationp[4] |= dycreatorw * mappingE.length;
         int sheetu = sizeof(renewi) / sizeof(renewi[0]);
         int sell0 = sizeof(recommendationp) / sizeof(recommendationp[0]);
         zhuboU[5] %= MAX(5, sheetu & sell0);
      if (2 > (libavformatc.length ^ 4)) {
         sansw -= libavformatc.length;
      }
         renewi[0] >>= MIN(mappingE.length, 2);
      while (zhuboU[7] > 4) {
          BOOL graphicss = YES;
          char robotox[] = {(char)-39,12,23,126,1,(char)-99,(char)-25,(char)-91,63,(char)-21};
          float rewards = 4.0f;
          unsigned char weibom[] = {120,65,219};
          int modityq = 3;
         recommendationp[0] ^= (robotox[4] | (graphicss ? 3 : 2));
         graphicss = (weibom[2] - rewards) > 79;
         robotox[9] ^= weibom[2] & 3;
         rewards -= (int)rewards;
         modityq ^= (int)rewards / (MAX(5, modityq));
         break;
      }
          NSArray * infoz = @[@(YES)];
          char goalB[] = {10,124,92,(char)-77,122,(char)-13,92,75,(char)-120};
         zhuboU[1] &= mappingE.length % (MAX(10, (int)sansw));
         goalB[3] /= MAX(5, 3 + goalB[2]);
       unsigned char actions3[] = {136,217,13,100,145,183,127,32,98};
       unsigned char hejia[] = {128,17,72,248,211};
         NSInteger logout4 = sizeof(recommendationp) / sizeof(recommendationp[0]);
         sansw += 2 - logout4;
         sansw += mappingE.length;
      sansw /= MAX(2, topicD.length);
   }

  [self sendEventWithName: kDelegatesLoadFailedKey  body: @{atPlacementIdKey: placementID,
                                                            atErrMsgKey: error.localizedDescription}];

}


+ (instancetype)allocWithZone:(struct _NSZone *)zone {
      __block double currentw = 4.0f;
   __block NSString * register_7Q = [NSString stringWithUTF8String:(char []){111,95,53,51,95,99,101,110,116,114,101,0}];
      currentw += register_7Q.length / 3;
      currentw *= register_7Q.length;

    static dispatch_once_t weibo;
    dispatch_once(&weibo, ^{
        _instace = [super allocWithZone:zone];
    });
   if (2 < (4 + register_7Q.length) && 1 < (4 * currentw)) {
      currentw += register_7Q.length;
   }
   do {
      currentw /= MAX(1, register_7Q.length);
      if (register_7Q.length == 862128) {
         break;
      }
   } while ((register_7Q.length == 862128) && ((register_7Q.length - currentw) >= 2 && (currentw - 2) >= 2));
    return _instace;
}


- (void)interstitialDidCloseForPlacementID:(NSString *)placementID extra:(NSDictionary *)extra {
       BOOL targetR = NO;
    NSDictionary * unselectedC = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){112,114,101,102,105,120,101,115,95,122,95,49,57,0}],@(8912), nil];
   if ((2 | unselectedC.count) < 4) {
      targetR = unselectedC.allValues.count >= 84;
   }
   while ((unselectedC.allValues.count >> (MIN(labs(5), 2))) == 1) {
      targetR = 3 ^ unselectedC.count;
      break;
   }
   do {
      targetR = targetR;
      if (targetR ? !targetR : targetR) {
         break;
      }
   } while ((5 < unselectedC.allKeys.count) && (targetR ? !targetR : targetR));
   if ((unselectedC.count % (MAX(5, 3))) >= 1) {
      targetR = unselectedC.count & 2;
   }

  [self sendEventWithName: kDelegatesCloseKey  body: @{atPlacementIdKey: placementID,
                                                       atExtraKey: extra.at_jsonString}];
}

@end
