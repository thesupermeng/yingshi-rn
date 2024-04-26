
#import "wwCrown.h"
#import <AnyThinkRewardedVideo/AnyThinkRewardedVideo.h>
#import "wwThailandStatistics.h"
#import "wwIncidentMovies.h"

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
@property(nonatomic, assign)BOOL  canText;
@property(nonatomic, assign)NSInteger  redirect_flag;




@end

@implementation ATRewardedVideoRNSDK

static id _instace;

+(instancetype) adcolonyStorageDelegatesDialog {
    static dispatch_once_t onceToken;
    dispatch_once(&onceToken, ^{
      _instace = [[super alloc] init];
    });
    return _instace;
}


- (void)rewardedVideoDidFailToPlayForPlacementID:(NSString *)placementID error:(NSError *)error extra:(NSDictionary *)extra {
       char filter4[] = {77,13,62,(char)-4,(char)-89,28,92,(char)-75};
    BOOL scrollviewk = YES;
    char directb[] = {35,(char)-23,9};
   if (filter4[5] <= 4) {
       int gifgoaly = 1;
       double libsgcore4 = 1.0f;
       char interstitial_[] = {65,(char)-84,60,127,(char)-83,(char)-52,(char)-3,(char)-40,(char)-108};
      for (int u = 0; u < 2; u++) {
         libsgcore4 *= gifgoaly;
      }
      do {
          int gesturesB = 1;
          char becomeZ[] = {(char)-115,74};
          char adultq[] = {(char)-121,125,(char)-102,103,(char)-66,87};
          NSArray * armvaf = @[@(301.0)];
          NSInteger iconplayi = 3;
         interstitial_[4] <<= MIN(4, labs(gifgoaly % (MAX(1, 1))));
         gesturesB &= becomeZ[0] - 3;
         becomeZ[1] <<= MIN(labs(iconplayi), 1);
         adultq[3] *= 1 - armvaf.count;
         iconplayi %= MAX(armvaf.count, 4);
         if (scrollviewk ? !scrollviewk : scrollviewk) {
            break;
         }
      } while ((scrollviewk ? !scrollviewk : scrollviewk) && (libsgcore4 >= interstitial_[8]));
         gifgoaly -= 1;
      while ((gifgoaly - libsgcore4) > 5.94f) {
          int chatN = 1;
          char privatechatbgk[] = {3,125,(char)-35,107,(char)-25,108,(char)-111,16};
          NSString * promotionp = [NSString stringWithUTF8String:(char []){111,95,57,95,97,116,116,97,99,107,0}];
          int dplusJ = 1;
         libsgcore4 -= promotionp.length % 3;
         chatN %= MAX(1, 5);
         privatechatbgk[MAX(6, dplusJ % 8)] &= dplusJ << (MIN(labs(3), 4));
         dplusJ ^= 3 >> (MIN(5, promotionp.length));
         break;
      }
      while (1.87f <= libsgcore4) {
         libsgcore4 *= gifgoaly;
         break;
      }
         interstitial_[MAX(1, gifgoaly % 9)] %= MAX(4, gifgoaly + 3);
      while ((gifgoaly ^ 4) >= 4) {
          float crowny = 5.0f;
          char q_center9[] = {(char)-97,13,8};
          NSDictionary * sansS = @{[NSString stringWithUTF8String:(char []){104,115,99,97,108,101,95,118,95,52,56,0}]:@(8404)};
          NSString * shootyesgoall = [NSString stringWithUTF8String:(char []){99,111,110,110,101,99,116,105,111,110,95,56,95,49,48,48,0}];
         libsgcore4 *= ([[NSString stringWithUTF8String:(char []){97,0}] isEqualToString: shootyesgoall] ? shootyesgoall.length : (int)crowny);
         crowny /= MAX(4, q_center9[0] >> (MIN(5, sansS.count)));
         q_center9[1] %= MAX(3, q_center9[0]);
         break;
      }
         gifgoaly >>= MIN(labs((int)libsgcore4), 2);
         gifgoaly += (int)libsgcore4 ^ 2;
      scrollviewk = 73 < filter4[3];
   }
   do {
      long inouttargetredt = sizeof(directb) / sizeof(directb[0]);
      scrollviewk = (70 & inouttargetredt) < 77;
      if (scrollviewk ? !scrollviewk : scrollviewk) {
         break;
      }
   } while ((2 == directb[1] && scrollviewk) && (scrollviewk ? !scrollviewk : scrollviewk));
       float cancelI = 0.0f;
         cancelI += 3 - (int)cancelI;
      while (4.48f == (cancelI / (MAX(8, 2.71f))) || 2.71f == (cancelI / (MAX(4, cancelI)))) {
         cancelI *= (int)cancelI;
         break;
      }
         cancelI /= MAX((int)cancelI & (int)cancelI, 2);
      long heji0 = sizeof(directb) / sizeof(directb[0]);
      directb[1] <<= MIN(labs(2 * heji0), 1);
      filter4[0] *= filter4[6];
   do {
       double temperaturej = 3.0f;
      while (2.33f >= temperaturej) {
         temperaturej -= 2;
         break;
      }
         temperaturej -= (int)temperaturej;
         temperaturej *= 3;
      NSInteger disconnectedlogo6 = sizeof(directb) / sizeof(directb[0]);
      directb[1] %= MAX(disconnectedlogo6, 4);
      if (scrollviewk ? !scrollviewk : scrollviewk) {
         break;
      }
   } while ((2 > (directb[2] << (MIN(labs(4), 4)))) && (scrollviewk ? !scrollviewk : scrollviewk));

  [self sendEventWithName: kDelegatesFailedToPlayKey  body: @{atPlacementIdKey: placementID,
                                                              atErrMsgKey: error.localizedDescription,
                                                              atExtraKey: extra.at_jsonString }];
}

RCT_EXPORT_MODULE()


- (void)rewardedVideoDidEndPlayingForPlacementID:(NSString *)placementID extra:(NSDictionary *)extra {
       char brightnessm[] = {(char)-16,(char)-63,15,(char)-125,42,72,(char)-6,(char)-123,(char)-22};
    double thailandR = 2.0f;
   while ((thailandR * 5) < 5 || 4 < (brightnessm[5] | 5)) {
      thailandR *= (int)thailandR;
      break;
   }
      brightnessm[3] &= brightnessm[4] >> (MIN(4, labs(1)));
   while (brightnessm[7] >= 5) {
      brightnessm[8] += (int)thailandR;
      break;
   }
   while (brightnessm[1] < 2) {
       char emoji7[] = {(char)-51,27,58,100,19,127,(char)-74,(char)-88};
       NSString * rnewinterstitiala = [NSString stringWithUTF8String:(char []){115,116,97,99,107,95,99,95,57,51,0}];
       unsigned char default_5y[] = {150,1,168,227,18,189,199,93,132,16};
       unsigned char weatherE[] = {6,42,91,167,43,127,189,248,61,19};
         NSInteger executorA = sizeof(weatherE) / sizeof(weatherE[0]);
         default_5y[4] &= (3 + executorA) | emoji7[7];
      do {
         long textinputl = sizeof(emoji7) / sizeof(emoji7[0]);
         weatherE[0] *= textinputl;
         if (3811901.f == thailandR) {
            break;
         }
      } while (((5 + emoji7[1]) > 4) && (3811901.f == thailandR));
         NSInteger topon3 = sizeof(emoji7) / sizeof(emoji7[0]);
         default_5y[7] %= MAX(1, topon3);
          char release_ct[] = {(char)-92,(char)-86,11,(char)-8};
         int styleg = sizeof(release_ct) / sizeof(release_ct[0]);
         release_ct[0] |= (2 + styleg) / (MAX(6, release_ct[0]));
         long next4 = sizeof(default_5y) / sizeof(default_5y[0]);
         default_5y[7] >>= MIN(labs(next4 / (MAX(emoji7[1], 3))), 2);
      thailandR += rnewinterstitiala.length / (MAX(3, emoji7[7]));
      break;
   }

  [self sendEventWithName: kDelegatesVideoEndKey  body: @{atPlacementIdKey: placementID,
                                                       atExtraKey: extra.at_jsonString}];
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
  [[ATAdManager sharedManager] loadADWithPlacementID: placementId extra: [extra isKindOfClass:[NSDictionary class]] ? extra : nil delegate: [ATRewardedVideoRNSDK adcolonyStorageDelegatesDialog]];
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
    [[ATAdManager sharedManager] showRewardedVideoWithPlacementID: placementId inViewController: [UIApplication sharedApplication].delegate.window.rootViewController delegate: [ATRewardedVideoRNSDK adcolonyStorageDelegatesDialog]];
  });
}

RCT_EXPORT_METHOD(showAdInScenario: (NSString *)placementId scenario: (NSString *)scenario) {
  dispatch_async(dispatch_get_main_queue(), ^{
    [[ATAdManager sharedManager] showRewardedVideoWithPlacementID: placementId scene:scenario inViewController: [UIApplication sharedApplication].delegate.window.rootViewController delegate: [ATRewardedVideoRNSDK adcolonyStorageDelegatesDialog]];
  });
}


- (void)rewardedVideoDidClickForPlacementID:(NSString *)placementID extra:(NSDictionary *)extra {
       char libreactperfloggerjnip[] = {(char)-30,(char)-45,29};
    char tempR[] = {(char)-125,14,(char)-76,(char)-94,(char)-2,(char)-70,48,54};
    char gradled[] = {(char)-6,(char)-41,14,(char)-118,(char)-106,88,(char)-125,(char)-71,40,(char)-128,59,123};
    float m_lockF = 0.0f;
   while (gradled[10] > 3) {
       long render6 = 1;
       NSArray * mbnativeP = @[@(7816)];
       unsigned char ballc[] = {17,164,234,83};
          NSString * sharedU = [NSString stringWithUTF8String:(char []){115,116,114,101,97,109,105,110,102,111,95,97,95,50,51,0}];
         render6 += mbnativeP.count;
      for (int c = 0; c < 2; c++) {
         render6 ^= 5 | mbnativeP.count;
      }
      for (int o = 0; o < 3; o++) {
          int checkboxR = 4;
          float commentX = 3.0f;
         ballc[3] -= 2 ^ ballc[3];
         checkboxR -= (int)commentX << (MIN(2, labs(checkboxR)));
         commentX -= 3;
      }
      for (int w = 0; w < 3; w++) {
         render6 |= 3 | render6;
      }
         render6 >>= MIN(3, labs(mbnativeP.count / (MAX(5, 3))));
      for (int i = 0; i < 2; i++) {
          long libcxxcomponentsc = 0;
          double gesturesm = 4.0f;
         render6 *= (int)gesturesm;
         libcxxcomponentsc &= libcxxcomponentsc | libcxxcomponentsc;
         gesturesm -= libcxxcomponentsc;
      }
          double xvodp = 1.0f;
         render6 >>= MIN(labs(5 - mbnativeP.count), 1);
         xvodp -= (int)xvodp;
      for (int h = 0; h < 1; h++) {
         render6 %= MAX(mbnativeP.count % (MAX(ballc[0], 5)), 3);
      }
       BOOL eventd = NO;
       BOOL renewf = NO;
      long mappingw = sizeof(gradled) / sizeof(gradled[0]);
      tempR[3] *= tempR[3] - (3 + mappingw);
      break;
   }

   self.canText = YES;

   self.redirect_flag = 5501;

   self.sportGreytickDisconnectedString = [NSString stringWithUTF8String:(char []){115,115,114,99,115,0}];

   self.predictionwin_offset = 7988.0;

   self.libfbSpace = 5648.0;

  [self sendEventWithName: kDelegatesClickKey  body: @{atPlacementIdKey: placementID,
                                                       atExtraKey: extra.at_jsonString}];
   do {
      long ready = sizeof(tempR) / sizeof(tempR[0]);
      tempR[3] ^= (1 + ready) << (MIN(labs(libreactperfloggerjnip[1]), 2));
      if (37 == tempR[3]) {
         break;
      }
   } while ((4 >= (gradled[7] ^ 5) && 3 >= (5 ^ tempR[5])) && (37 == tempR[3]));
   while (gradled[6] >= 2) {
      int rnewarchdefaultsj = sizeof(tempR) / sizeof(tempR[0]);
      gradled[3] += rnewarchdefaultsj * (int)m_lockF;
      break;
   }
       double textlayoutmanagerA = 3.0f;
       unsigned char expandO[] = {56,215,142,143,131,230,176,163,89};
       float bing5 = 3.0f;
         long containerh = sizeof(expandO) / sizeof(expandO[0]);
         expandO[3] ^= containerh;
      if (5 > (expandO[8] / 1) || 4 > (1 * expandO[8])) {
         textlayoutmanagerA *= expandO[2];
      }
      do {
         expandO[3] *= (int)bing5 >> (MIN(2, labs(3)));
         if (232 == expandO[0]) {
            break;
         }
      } while ((expandO[2] >= 1) && (232 == expandO[0]));
         expandO[1] -= (int)textlayoutmanagerA;
      while (textlayoutmanagerA > expandO[4]) {
          NSArray * runtimeY = [NSArray arrayWithObjects:@(917), @(864), nil];
         textlayoutmanagerA /= MAX((int)bing5, 2);
         break;
      }
      for (int m = 0; m < 3; m++) {
         expandO[5] |= (int)textlayoutmanagerA;
      }
         textlayoutmanagerA *= expandO[7];
      for (int o = 0; o < 2; o++) {
         expandO[4] ^= 3;
      }
      while ((expandO[6] * 2) > 4) {
         bing5 /= MAX((int)bing5 * 3, 2);
         break;
      }
      int ying7 = sizeof(libreactperfloggerjnip) / sizeof(libreactperfloggerjnip[0]);
      libreactperfloggerjnip[0] |= ying7;
   do {
       long rewardvideoK = 2;
       BOOL proxyd = YES;
       double launchk = 5.0f;
      if (1 > (launchk * 1.48f) && 1.48f > launchk) {
         proxyd = !proxyd && 89 < rewardvideoK;
      }
         launchk /= MAX(3, rewardvideoK);
          double gradlewr = 1.0f;
         launchk -= 3 | (int)launchk;
         gradlewr += (int)gradlewr - 3;
          double sourceN = 1.0f;
          BOOL umeng3 = YES;
          NSInteger predictionwinP = 2;
         rewardvideoK /= MAX((int)launchk, 2);
         sourceN *= 1;
         umeng3 = umeng3;
         predictionwinP <<= MIN(labs(predictionwinP >> (MIN(4, labs(2)))), 2);
         rewardvideoK <<= MIN(2, labs(2 << (MIN(labs((int)launchk), 1))));
      for (int g = 0; g < 1; g++) {
         launchk *= (int)launchk;
      }
      for (int m = 0; m < 1; m++) {
          unsigned char controlsP[] = {107,8,130,237,111};
          int favoriten = 2;
          double final_bB = 1.0f;
          float largep = 0.0f;
         launchk /= MAX((int)final_bB, 1);
         controlsP[0] /= MAX(4, (int)largep);
         favoriten -= (int)largep;
         final_bB /= MAX((int)largep | 1, 2);
      }
          unsigned char episodec[] = {244,72,182,96,108,241,192,157,198};
          unsigned char libsgcoreL[] = {220,229,186,105,62,193,12};
         NSInteger libglogf = sizeof(libsgcoreL) / sizeof(libsgcoreL[0]);
         launchk -= libglogf;
         NSInteger matchactiver = sizeof(episodec) / sizeof(episodec[0]);
         episodec[0] *= episodec[8] | (1 + matchactiver);
       NSArray * reminder2 = @[@(760), @(395)];
       NSArray * stylex = [NSArray arrayWithObjects:@(258), @(102), @(169), nil];
      libreactperfloggerjnip[2] <<= MIN(labs(3 & (int)launchk), 5);
      if (73 == libreactperfloggerjnip[0]) {
         break;
      }
   } while ((4 >= libreactperfloggerjnip[0]) && (73 == libreactperfloggerjnip[0]));
}


- (void)didFailToLoadADWithPlacementID:(NSString *)placementID error:(NSError *)error {
       unsigned char guidec[] = {93,144,82,159};
    NSArray * appsm = @[@(285), @(817), @(784)];
    NSArray * thailandF = [NSArray arrayWithObjects:@(734), @(961), @(604), nil];
   do {
      if (471877 == appsm.count) {
         break;
      }
   } while ((471877 == appsm.count) && (1 <= (appsm.count & thailandF.count) || 1 <= (appsm.count & thailandF.count)));
       char favicond[] = {49,86,2,76,(char)-73,109,(char)-40,(char)-1,(char)-117};
      do {
         NSInteger dplus4 = sizeof(favicond) / sizeof(favicond[0]);
         favicond[5] /= MAX((3 + dplus4) + favicond[8], 4);
         if (4168757 == appsm.count) {
            break;
         }
      } while ((2 <= (1 ^ favicond[8])) && (4168757 == appsm.count));
      while (3 <= (favicond[4] * favicond[5])) {
          NSString * hooksg = [NSString stringWithUTF8String:(char []){104,111,108,100,105,110,103,95,98,95,54,56,0}];
         favicond[5] |= 2 | favicond[4];
         break;
      }
          NSArray * chartV = [NSArray arrayWithObjects:@(9382.0), nil];
          NSInteger vipsportf = 0;
          float routerY = 3.0f;
         int showz = sizeof(favicond) / sizeof(favicond[0]);
         favicond[7] <<= MIN(5, labs((int)routerY / (MAX(showz, 5))));
         vipsportf *= chartV.count;
         vipsportf /= MAX(5, 3);
         routerY -= vipsportf / (MAX(chartV.count, 5));
   for (int v = 0; v < 1; v++) {
      guidec[2] /= MAX(appsm.count, 2);
   }
   do {
       BOOL styles9 = YES;
       char lnewsshareR[] = {57,79,63,43,27};
       long holder6 = 1;
       char carouselP[] = {110,1};
       unsigned char forward1[] = {198,161,2,182,141};
      if (1 == (forward1[2] | 5) || 5 == (holder6 | 5)) {
         forward1[3] -= holder6;
      }
         long greyc = sizeof(carouselP) / sizeof(carouselP[0]);
         forward1[1] %= MAX(3, greyc << (MIN(1, labs(holder6))));
      if (lnewsshareR[0] < 4) {
         NSInteger libpangleflippedJ = sizeof(lnewsshareR) / sizeof(lnewsshareR[0]);
         styles9 = (libpangleflippedJ / 44) >= 96;
      }
      for (int w = 0; w < 3; w++) {
         NSInteger iconshareU = sizeof(forward1) / sizeof(forward1[0]);
         styles9 = iconshareU >= forward1[1];
      }
      if (!styles9 && 3 > carouselP[1]) {
         NSInteger rootm = sizeof(lnewsshareR) / sizeof(lnewsshareR[0]);
         styles9 = lnewsshareR[2] <= rootm;
      }
      do {
         forward1[MAX(4, holder6 % 5)] -= 1 / (MAX(holder6, 9));
         if (appsm.count == 401924) {
            break;
         }
      } while ((appsm.count == 401924) && ((2 / (MAX(1, forward1[2]))) > 5));
          unsigned char foregroundG[] = {96,234,118,213,210,36,82,39,173,146};
         styles9 = 45 < holder6 && !styles9;
         int downloadedc = sizeof(foregroundG) / sizeof(foregroundG[0]);
         foregroundG[2] %= MAX(3, downloadedc * foregroundG[5]);
         forward1[MAX(4, holder6 % 5)] -= 3 / (MAX(1, holder6));
      if (forward1[1] > 3) {
         holder6 -= 2;
      }
      while (forward1[3] <= holder6) {
         long inactiveL = sizeof(lnewsshareR) / sizeof(lnewsshareR[0]);
         holder6 <<= MIN(labs(2 * inactiveL), 5);
         break;
      }
      for (int f = 0; f < 3; f++) {
         lnewsshareR[4] |= holder6 % (MAX(2, 10));
      }
          char commentP[] = {94,93,(char)-61,(char)-23,56,(char)-126,84,(char)-117,(char)-66};
         carouselP[1] ^= ((styles9 ? 5 : 3) / (MAX(1, 4)));
         NSInteger reduceru = sizeof(commentP) / sizeof(commentP[0]);
         commentP[7] <<= MIN(labs(2 - reduceru), 4);
         int desco = sizeof(carouselP) / sizeof(carouselP[0]);
         lnewsshareR[1] >>= MIN(labs((desco / (MAX(8, (styles9 ? 2 : 1))))), 2);
       double plusU = 3.0f;
         int saveN = sizeof(carouselP) / sizeof(carouselP[0]);
         plusU *= 3 & saveN;
      holder6 *= thailandF.count % 2;
      if (thailandF.count == 2817576) {
         break;
      }
   } while ((thailandF.count == 2817576) && (2 == (guidec[0] % 5)));
       unsigned char crossE[] = {176,221,118,189,29,131,28,238,143,170};
      for (int o = 0; o < 3; o++) {
         int mbnativeadvanced6 = sizeof(crossE) / sizeof(crossE[0]);
         crossE[0] /= MAX((2 + mbnativeadvanced6) | crossE[6], 4);
      }
          BOOL episoded = YES;
          unsigned char stepF[] = {16,42};
         NSInteger greyarrowupH = sizeof(crossE) / sizeof(crossE[0]);
         crossE[4] *= stepF[0] >> (MIN(1, labs(greyarrowupH)));
         episoded = !episoded;
         stepF[0] >>= MIN(3, labs(1));
      for (int r = 0; r < 3; r++) {
         long upgradeB = sizeof(crossE) / sizeof(crossE[0]);
         crossE[4] &= 1 << (MIN(4, labs(upgradeB)));
      }

  [self sendEventWithName: kDelegatesLoadFailedKey  body: @{atPlacementIdKey: placementID,
                                                       atErrMsgKey: error.localizedDescription}];
}


- (void)didFinishLoadingADWithPlacementID:(NSString *)placementID {
       double settings1 = 4.0f;
    long module0 = 2;
    unsigned char giftI[] = {231,200,139,130,226,72,54,232};
   for (int o = 0; o < 2; o++) {
      module0 &= (int)settings1 ^ module0;
   }
      settings1 += (int)settings1;
      giftI[0] *= 2;

  [self sendEventWithName: kDelegatesLoadedKey  body: @{atPlacementIdKey: placementID}];

}


+ (instancetype)allocWithZone:(struct _NSZone *)zone {
      __block float loginsuccessk = 0.0f;
   __block float heart9 = 3.0f;
   if (1.61f < (heart9 * loginsuccessk) && (heart9 * 1.61f) < 4.66f) {
      loginsuccessk /= MAX(3, 4);
   }
      loginsuccessk /= MAX(1 / (MAX((int)heart9, 3)), 3);

    static dispatch_once_t questicon;
    dispatch_once(&questicon, ^{
        _instace = [super allocWithZone:zone];
    });
       double searchbarv = 1.0f;
       NSDictionary * selectionQ = @{[NSString stringWithUTF8String:(char []){106,95,55,49,95,97,116,116,97,99,104,109,101,110,116,0}]:@(7812)};
       double inouttargetredq = 2.0f;
         searchbarv *= 2;
       double showV = 0.0f;
          NSInteger carouselR = 5;
         searchbarv *= 1;
         carouselR >>= MIN(1, labs(carouselR));
      while ((searchbarv + 2) <= 5.32f) {
         showV /= MAX(2, 1);
         break;
      }
      do {
          int templateprocessorb = 4;
         inouttargetredq /= MAX(3 - (int)inouttargetredq, 5);
         templateprocessorb ^= templateprocessorb;
         if (2707229.f == inouttargetredq) {
            break;
         }
      } while ((2707229.f == inouttargetredq) && (inouttargetredq > selectionQ.allKeys.count));
         showV += 1 * selectionQ.count;
         inouttargetredq -= selectionQ.allValues.count;
      while ((selectionQ.allValues.count * inouttargetredq) == 3.84f) {
          BOOL unselectedo = YES;
          BOOL reviewh = YES;
          float mbnative3 = 0.0f;
          NSInteger libjsinspectorn = 5;
          char whitetickn[] = {(char)-65,(char)-107,(char)-127,(char)-51,20,(char)-73,18,55,70,52};
         inouttargetredq -= 2 + (int)inouttargetredq;
         unselectedo = unselectedo;
         reviewh = (unselectedo ? !reviewh : !unselectedo);
         mbnative3 /= MAX(1, ((reviewh ? 1 : 1)));
         libjsinspectorn %= MAX(3, libjsinspectorn << (MIN(2, labs(3))));
         whitetickn[7] *= ((reviewh ? 1 : 4));
         break;
      }
       unsigned char reminder_[] = {220,87,54,112,151,174,198,18};
       unsigned char xadsdk4[] = {171,236,179};
      heart9 *= (int)searchbarv * 1;
   do {
      loginsuccessk += (int)heart9;
      if (loginsuccessk == 2557396.f) {
         break;
      }
   } while (((heart9 - loginsuccessk) > 5.45f || (heart9 - loginsuccessk) > 5.45f) && (loginsuccessk == 2557396.f));
    return _instace;
}


- (NSArray *)supportedEvents {
       long whitetickO = 1;
    char gifgoalbgT[] = {(char)-96,57,34,(char)-36,3,85,(char)-48,(char)-13,47,(char)-84,101};
    unsigned char lange[] = {155,170,141,114,34,53,186,166,11,124,109};
      long l_countI = sizeof(gifgoalbgT) / sizeof(gifgoalbgT[0]);
      whitetickO >>= MIN(labs(l_countI), 5);
   if ((2 / (MAX(8, lange[4]))) <= 5 && (whitetickO / (MAX(2, 7))) <= 1) {
       char foregroundl[] = {43,(char)-95,66,(char)-10,29,(char)-96,(char)-10,(char)-107,54,(char)-7};
       char greytickx[] = {106,68,(char)-97,109,(char)-16,(char)-87,101,89,102,100,15};
       char iconwechatL[] = {18,(char)-105,(char)-94,56,(char)-13,110,15,(char)-47};
         NSInteger iconusery = sizeof(greytickx) / sizeof(greytickx[0]);
         greytickx[6] += (3 + iconusery) / (MAX(foregroundl[0], 4));
         NSInteger annerT = sizeof(iconwechatL) / sizeof(iconwechatL[0]);
         foregroundl[5] += annerT;
       unsigned char bridge0[] = {46,129};
         long libflipperL = sizeof(bridge0) / sizeof(bridge0[0]);
         iconwechatL[2] <<= MIN(labs((3 + libflipperL) | iconwechatL[3]), 5);
       NSArray * bggradientu = @[@(4863)];
       NSArray * libreactnativeblobT = @[@(670), @(953)];
      do {
         if (3333149 == libreactnativeblobT.count) {
            break;
         }
      } while (((libreactnativeblobT.count * 3) < 3 || 1 < (3 * greytickx[1])) && (3333149 == libreactnativeblobT.count));
      for (int k = 0; k < 2; k++) {
         greytickx[9] -= 3;
      }
          int expandY = 3;
         expandY &= 2 / (MAX(10, bggradientu.count));
      long package_sj = sizeof(greytickx) / sizeof(greytickx[0]);
      lange[10] /= MAX(4, package_sj);
   }
   for (int u = 0; u < 1; u++) {
      long libsgcoreu = sizeof(gifgoalbgT) / sizeof(gifgoalbgT[0]);
      gifgoalbgT[6] *= lange[9] ^ libsgcoreu;
   }
      long clearC = sizeof(lange) / sizeof(lange[0]);
      lange[2] ^= 2 | clearC;
       NSArray * schedulerf = [NSArray arrayWithObjects:@(430), @(542), @(905), nil];
       NSDictionary * analyticst = @{[NSString stringWithUTF8String:(char []){122,0}]:[NSString stringWithUTF8String:(char []){85,0}]};
       BOOL l_playerw = NO;
      if (l_playerw) {
          NSInteger headeri = 5;
          NSString * iconshareq = [NSString stringWithUTF8String:(char []){97,95,52,51,95,97,112,112,114,111,118,101,0}];
          double acceptedc = 5.0f;
         headeri %= MAX(3, 5 >> (MIN(1, schedulerf.count)));
         headeri <<= MIN(labs(2 << (MIN(4, labs((int)acceptedc)))), 4);
         acceptedc -= 1 * iconshareq.length;
      }
         l_playerw = analyticst.count + 1;
      if (!l_playerw) {
         l_playerw = (72 >= ((l_playerw ? 72 : analyticst.allValues.count) % (MAX(analyticst.allValues.count, 4))));
      }
      do {
         l_playerw = 2 & analyticst.count;
         if (analyticst.count == 2548328) {
            break;
         }
      } while ((analyticst.count == 2548328) && (4 == analyticst.allKeys.count));
         l_playerw = 2 | schedulerf.count;
      do {
         l_playerw = analyticst.allKeys.count >= 99;
         if (l_playerw ? !l_playerw : l_playerw) {
            break;
         }
      } while ((l_playerw ? !l_playerw : l_playerw) && (l_playerw));
      for (int t = 0; t < 3; t++) {
         l_playerw = !l_playerw;
      }
         l_playerw = 5 % (MAX(10, schedulerf.count));
      if (schedulerf.count == 2) {
         l_playerw = 5 | schedulerf.count;
      }
      whitetickO -= schedulerf.count;
      gifgoalbgT[MAX(whitetickO % 11, 0)] <<= MIN(labs(2), 2);

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


- (void)rewardedVideoDidCloseForPlacementID:(NSString *)placementID rewarded:(BOOL)rewarded extra:(NSDictionary *)extra {
      __block double photoN = 4.0f;
   __block BOOL temp5 = YES;
   while (3.100f <= photoN && 2 <= (photoN * 3.100f)) {
       long iconplay6 = 3;
       char iconrefreshr[] = {(char)-82,(char)-108,(char)-97,(char)-126,(char)-57,21,12,12,44,(char)-18,70,(char)-85};
       char penaltygoalh[] = {117,(char)-90,(char)-121,1,(char)-72,116,(char)-71,(char)-85,19};
       double favoritea = 2.0f;
      if (1 >= iconplay6) {
         favoritea /= MAX(3, (int)favoritea ^ 2);
      }
         favoritea *= 3 ^ iconplay6;
         penaltygoalh[MAX(8, iconplay6 % 9)] |= 2 | (int)favoritea;
      for (int q = 0; q < 1; q++) {
         NSInteger username5 = sizeof(penaltygoalh) / sizeof(penaltygoalh[0]);
         favoritea *= username5 | 1;
      }
       int nalyticsf = 3;
       int dangerz = 3;
      while (4 < (iconrefreshr[4] * nalyticsf) || (4 * nalyticsf) < 2) {
         iconrefreshr[7] %= MAX(2, iconplay6 >> (MIN(labs(nalyticsf), 1)));
         break;
      }
          unsigned char libturbomodulejsijni8[] = {78,183,198,111,242,128};
          float bdxadsdkI = 4.0f;
         dangerz ^= 3 ^ libturbomodulejsijni8[2];
         libturbomodulejsijni8[4] <<= MIN(labs((int)bdxadsdkI), 3);
         bdxadsdkI /= MAX(3, 4);
      while (iconplay6 >= penaltygoalh[0]) {
         long championW = sizeof(penaltygoalh) / sizeof(penaltygoalh[0]);
         penaltygoalh[4] &= 3 / (MAX(championW, 9));
         break;
      }
         iconrefreshr[MAX(dangerz % 12, 7)] &= dangerz;
      if ((3 ^ nalyticsf) < 3 && (favoritea / (MAX(4, 5.70f))) < 1.17f) {
         favoritea -= 1;
      }
         nalyticsf += 3;
         iconrefreshr[MAX(5, nalyticsf % 12)] ^= nalyticsf << (MIN(labs((int)favoritea), 5));
      temp5 = 61 < (iconplay6 + favoritea);
      break;
   }
   for (int d = 0; d < 1; d++) {
      temp5 = 84.58f <= photoN;
   }

  
  if ([extra[kATRewardedVideoCallbackExtraNetworkIDKey] integerValue] == 35) {
    dispatch_async(dispatch_get_main_queue(), ^{
      [self sendEventWithName: kDelegatesCloseKey  body: @{atPlacementIdKey: placementID,
                                                           atExtraKey: extra.at_jsonString}];
    });
   if (!temp5) {
      temp5 = photoN < 95.0f || temp5;
   }
       char soundC[] = {104,30,7,71,(char)-1,(char)-76,70,(char)-117,(char)-46,(char)-32,98};
       double clockL = 4.0f;
      do {
         soundC[9] *= (int)clockL % (MAX(1, 4));
         if (photoN == 3188754.f) {
            break;
         }
      } while (((soundC[6] - 1) >= 1) && (photoN == 3188754.f));
      if (clockL >= soundC[7]) {
         soundC[7] <<= MIN(1, labs(2));
      }
      for (int s = 0; s < 2; s++) {
         soundC[9] >>= MIN(5, labs(3 - (int)clockL));
      }
         NSInteger hongkongV = sizeof(soundC) / sizeof(soundC[0]);
         clockL -= hongkongV + (int)clockL;
      if (1 >= soundC[5]) {
         int pointJ = sizeof(soundC) / sizeof(soundC[0]);
         soundC[2] <<= MIN(labs(3 | pointJ), 2);
      }
       NSDictionary * backiconL = @{[NSString stringWithUTF8String:(char []){114,95,55,53,95,101,121,99,104,97,105,110,0}]:@(122), [NSString stringWithUTF8String:(char []){114,95,57,51,95,101,110,102,111,114,99,101,0}]:@(842), [NSString stringWithUTF8String:(char []){99,101,108,108,117,108,97,114,95,99,95,53,55,0}]:@(593).stringValue};
       NSDictionary * shirtR = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){110,95,49,49,95,97,118,101,114,97,103,101,115,0}],@{[NSString stringWithUTF8String:(char []){80,0}]:[NSString stringWithUTF8String:(char []){98,0}]}, nil];
      temp5 = !temp5 || photoN >= 86.11f;
    return;
  }
  [self sendEventWithName: kDelegatesCloseKey  body: @{atPlacementIdKey: placementID,
                                                       atExtraKey: extra.at_jsonString}];

}


- (void)rewardedVideoDidStartPlayingForPlacementID:(NSString *)placementID extra:(NSDictionary *)extra {
       double subbasketballplayerO = 4.0f;
    unsigned char checkboxL[] = {60,245,125,230,83,87,93,31};
   do {
      checkboxL[7] += (int)subbasketballplayerO / (MAX(2, 5));
      if (3550592.f == subbasketballplayerO) {
         break;
      }
   } while ((3550592.f == subbasketballplayerO) && (4 >= checkboxL[4]));
   do {
       unsigned char dropdown8[] = {28,211,203,20};
       NSString * phoneY = [NSString stringWithUTF8String:(char []){99,108,101,97,114,95,112,95,51,49,0}];
       NSString * paginationA = [NSString stringWithUTF8String:(char []){100,101,101,112,95,121,95,51,49,0}];
       unsigned char humidity4[] = {147,250,80,110,163,130,233};
       unsigned char arroww[] = {164,76,82,203,98,224};
      for (int p = 0; p < 3; p++) {
      }
      do {
         arroww[0] += 1 - paginationA.length;
         if (subbasketballplayerO == 4613280.f) {
            break;
         }
      } while ((1 < arroww[3]) && (subbasketballplayerO == 4613280.f));
      do {
         if (2987690 == phoneY.length) {
            break;
         }
      } while ((2987690 == phoneY.length) && (4 >= (arroww[4] - 3)));
      while ([phoneY containsString:@(humidity4[3]).stringValue]) {
         humidity4[0] /= MAX(5, phoneY.length << (MIN(labs(1), 3)));
         break;
      }
      while ((paginationA.length + humidity4[2]) <= 4) {
         break;
      }
      while (3 == (2 << (MIN(2, paginationA.length)))) {
          unsigned char mimoH[] = {149,91,206,204};
          char strS[] = {(char)-121,89,88};
         int dropdownj = sizeof(arroww) / sizeof(arroww[0]);
         humidity4[4] <<= MIN(3, labs(dropdownj));
         long directX = sizeof(mimoH) / sizeof(mimoH[0]);
         mimoH[1] *= strS[2] % (MAX(2, directX));
         int combineV = sizeof(mimoH) / sizeof(mimoH[0]);
         strS[2] += combineV / (MAX(8, strS[0]));
         break;
      }
          double dependencyI = 4.0f;
         humidity4[6] -= 1;
         dependencyI -= (int)dependencyI << (MIN(labs((int)dependencyI), 3));
       char libcxxcomponentsi[] = {59,111,60,75};
      for (int d = 0; d < 2; d++) {
         NSInteger anytimey = sizeof(libcxxcomponentsi) / sizeof(libcxxcomponentsi[0]);
         NSInteger star6 = sizeof(dropdown8) / sizeof(dropdown8[0]);
         libcxxcomponentsi[1] *= star6 - anytimey;
      }
      if (![paginationA containsString:@(libcxxcomponentsi[3]).stringValue]) {
          double libreactperfloggerjniB = 4.0f;
          unsigned char reminder3[] = {213,197,66,247};
          long greyarrowup6 = 2;
         libcxxcomponentsi[3] -= dropdown8[3];
         libreactperfloggerjniB -= greyarrowup6 >> (MIN(labs((int)libreactperfloggerjniB), 1));
         reminder3[2] |= 1;
         greyarrowup6 *= greyarrowup6;
      }
      do {
         libcxxcomponentsi[0] *= phoneY.length;
         if (15442.f == subbasketballplayerO) {
            break;
         }
      } while ((15442.f == subbasketballplayerO) && (libcxxcomponentsi[1] >= humidity4[6]));
         libcxxcomponentsi[0] <<= MIN(1, labs(libcxxcomponentsi[1]));
       unsigned char time_qp[] = {14,180,101,156};
       unsigned char gesturesN[] = {95,57};
      long gradlef = sizeof(dropdown8) / sizeof(dropdown8[0]);
      checkboxL[6] <<= MIN(labs(gradlef), 4);
      if (subbasketballplayerO == 1816038.f) {
         break;
      }
   } while ((subbasketballplayerO == 1816038.f) && ((4 - subbasketballplayerO) == 3 || (4 % (MAX(1, checkboxL[7]))) == 3));
   for (int r = 0; r < 2; r++) {
       NSDictionary * module_ = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){99,98,108,107,95,102,95,52,0}],@(937).stringValue, [NSString stringWithUTF8String:(char []){118,95,57,57,95,116,104,117,109,98,115,0}],@(926), nil];
       char ballI[] = {115,39,91,(char)-12,108,44,(char)-28,(char)-106,(char)-49,62,(char)-103,89};
       NSDictionary * livenodatabgimgu = @{[NSString stringWithUTF8String:(char []){102,111,108,100,101,114,95,112,95,50,54,0}]:@(215)};
       long sliderT = 5;
         ballI[7] ^= 3 + sliderT;
         long serviceY = sizeof(ballI) / sizeof(ballI[0]);
         sliderT ^= serviceY;
       BOOL predictionarrowu = YES;
       BOOL libflipperR = YES;
      if (!predictionarrowu) {
          double navigation1 = 1.0f;
          char minimizeP[] = {20,(char)-70,(char)-20,94,120,(char)-8,67,109,4,(char)-118};
         sliderT ^= 1 & module_.count;
         navigation1 += minimizeP[8] * (int)navigation1;
         minimizeP[8] |= (int)navigation1;
      }
      while (4 <= (4 >> (MIN(3, labs(ballI[1])))) || 5 <= (4 >> (MIN(3, labs(ballI[1]))))) {
         ballI[10] += ((libflipperR ? 4 : 3));
         break;
      }
      if (5 >= module_.allValues.count || (module_.allValues.count / (MAX(5, 8))) >= 5) {
          long successR = 0;
          unsigned char paginationu[] = {66,1,99,149,240,235};
         libflipperR = !predictionarrowu;
         long changeP = sizeof(paginationu) / sizeof(paginationu[0]);
         successR *= changeP;
      }
      do {
         sliderT >>= MIN(livenodatabgimgu.count, 5);
         if (1196945 == livenodatabgimgu.count) {
            break;
         }
      } while (((ballI[5] * livenodatabgimgu.count) == 3 || (3 * livenodatabgimgu.count) == 2) && (1196945 == livenodatabgimgu.count));
      if (3 < sliderT) {
         predictionarrowu = !predictionarrowu;
      }
         libflipperR = ((livenodatabgimgu.count % (MAX(4, (predictionarrowu ? livenodatabgimgu.count : 91)))) < 80);
      do {
         sliderT /= MAX(module_.count ^ 4, 2);
         if (937380 == module_.count) {
            break;
         }
      } while ((module_.count <= 2) && (937380 == module_.count));
         libflipperR = libflipperR;
      do {
         sliderT %= MAX(2, livenodatabgimgu.count);
         if (livenodatabgimgu.count == 1041957) {
            break;
         }
      } while ((![livenodatabgimgu.allKeys containsObject:@(module_.allKeys.count)]) && (livenodatabgimgu.count == 1041957));
      checkboxL[7] |= (int)subbasketballplayerO;
   }
   while (subbasketballplayerO >= checkboxL[2]) {
      NSInteger dependencyV = sizeof(checkboxL) / sizeof(checkboxL[0]);
      subbasketballplayerO *= 3 % (MAX(dependencyV, 4));
      break;
   }

  [self sendEventWithName: kDelegatesVideoStartKey  body: @{atPlacementIdKey: placementID,
                                                       atExtraKey: extra.at_jsonString}];
}


- (void)rewardedVideoDidRewardSuccessForPlacemenID:(NSString *)placementID extra:(NSDictionary *)extra {
       char hookZ[] = {85,120,(char)-40,84,63,56,(char)-13,(char)-25,31,(char)-65,(char)-126,(char)-126};
    float dangerP = 4.0f;
      int profileQ = sizeof(hookZ) / sizeof(hookZ[0]);
      dangerP -= (int)dangerP | profileQ;
   for (int g = 0; g < 2; g++) {
      hookZ[3] -= hookZ[1] % (MAX(2, (int)dangerP));
   }
   do {
       double giftk = 5.0f;
       unsigned char classesw[] = {158,53,66};
       char becomec[] = {(char)-13,112,20,(char)-1,(char)-42,6,(char)-39,15,123,(char)-92,(char)-6,116};
       NSInteger singaporeN = 2;
       BOOL splashl = YES;
       NSInteger clear5 = 2;
      for (int b = 0; b < 1; b++) {
         classesw[MAX(1, clear5 % 3)] |= clear5;
      }
      do {
         giftk -= clear5 ^ 3;
         if (4423272.f == giftk) {
            break;
         }
      } while ((4423272.f == giftk) && (clear5 <= giftk));
      while (singaporeN <= becomec[4]) {
         becomec[7] |= 2 + (int)giftk;
         break;
      }
      while ((singaporeN / 3) > 5) {
         int recommendationc = sizeof(becomec) / sizeof(becomec[0]);
         singaporeN ^= classesw[0] + recommendationc;
         break;
      }
         becomec[MAX(clear5 % 12, 0)] <<= MIN(1, labs(clear5));
          BOOL mailf = NO;
         clear5 /= MAX(clear5, 2);
         mailf = (!mailf ? !mailf : !mailf);
         int greyC = sizeof(becomec) / sizeof(becomec[0]);
         becomec[3] -= greyC - 3;
         classesw[0] ^= ((splashl ? 2 : 5) % (MAX((int)giftk, 7)));
          NSArray * countdownY = @[@(478), @(773), @(59)];
          char iconnointernetP[] = {(char)-113,(char)-10,(char)-19,36,28,(char)-122};
          float moduleS = 2.0f;
         clear5 %= MAX(3, 3);
         moduleS /= MAX(2, countdownY.count - 5);
         iconnointernetP[2] &= iconnointernetP[5] % (MAX(3, 5));
         moduleS /= MAX(5, 3 & countdownY.count);
      do {
         NSInteger phoneW = sizeof(becomec) / sizeof(becomec[0]);
         becomec[10] %= MAX(phoneW ^ 1, 3);
         if (dangerP == 546553.f) {
            break;
         }
      } while ((dangerP == 546553.f) && (4 < clear5));
      dangerP += (int)dangerP - hookZ[5];
      if (2155396.f == dangerP) {
         break;
      }
   } while ((2155396.f == dangerP) && (5 < (2 - dangerP)));
   if (5 > hookZ[1]) {
      hookZ[11] -= (int)dangerP / (MAX(hookZ[8], 10));
   }

  
  [self sendEventWithName: kDelegatesRewardedKey  body: @{atPlacementIdKey: placementID,
                                                       atExtraKey: extra.at_jsonString}];
}


@end
