#import "wawaIconscheduleObject.h"

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
@property(nonatomic, assign)float  sell_margin;
@property(nonatomic, copy)NSArray *  schedulerTeamIconbellactiveList;
@property(nonatomic, assign)double  typingloading_offset;


@property (nonatomic, strong) wawaIconscheduleObject * filterObject;


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


- (void)interstitialDidClickForPlacementID:(NSString *)placementID extra:(NSDictionary *)extra {
       NSString * math6 = [NSString stringWithUTF8String:(char []){105,100,99,116,120,108,108,109,95,116,95,57,56,0}];
    unsigned char loginsuccesss[] = {195,219,202,193,60,18,254,89,48,103};
      int distp = sizeof(loginsuccesss) / sizeof(loginsuccesss[0]);
      loginsuccesss[6] &= 2 & distp;
       unsigned char loading3[] = {45,32,45,126,146,203};
       char googlew[] = {20,(char)-20,(char)-117,21,111,46,(char)-84,3};
          long carousel2 = 4;
         loading3[2] ^= carousel2 << (MIN(labs(2), 1));
      if (2 <= googlew[5]) {
          char otherw[] = {76,1,(char)-119,(char)-103,114,(char)-37,(char)-106,(char)-123,126,(char)-28,(char)-9,(char)-44};
          long editd = 4;
          BOOL commonX = NO;
         long hook2 = sizeof(loading3) / sizeof(loading3[0]);
         loading3[5] /= MAX(googlew[2] - (3 + hook2), 3);
         otherw[5] |= otherw[0] ^ 1;
         int iconclosewhiteR = sizeof(otherw) / sizeof(otherw[0]);
         editd /= MAX(2, iconclosewhiteR ^ 3);
         commonX = (editd | otherw[1]) < 12;
      }
      int snewsshareo = sizeof(loginsuccesss) / sizeof(loginsuccesss[0]);
      loginsuccesss[3] ^= snewsshareo & loading3[3];
      loginsuccesss[8] %= MAX(loginsuccesss[1], 2);
       int subtextQ = 1;
       NSString * iconlogoutM = [NSString stringWithUTF8String:(char []){119,95,50,48,95,115,104,97,114,105,110,103,0}];
       NSString * profileactiveV = [NSString stringWithUTF8String:(char []){119,95,57,53,95,114,101,108,111,97,100,0}];
       NSString * settingsm = [NSString stringWithUTF8String:(char []){119,114,105,116,101,97,98,108,101,95,107,95,51,57,0}];
       BOOL airbnbstart = YES;
       BOOL networkU = NO;
      loginsuccesss[MAX(subtextQ % 10, 2)] >>= MIN(labs(subtextQ & 2), 2);
   if (math6.length == 3) {
       char countrys[] = {(char)-18,14,115,17,1};
      while (1 <= (countrys[4] % 5)) {
          char hooks4[] = {23,(char)-104,(char)-122};
          NSDictionary * homeactivef = @{[NSString stringWithUTF8String:(char []){109,97,114,103,105,110,115,95,119,95,53,0}]:@(828).stringValue};
          long privilegel = 2;
          double calendaro = 5.0f;
         countrys[MAX(0, privilegel % 5)] *= privilegel - homeactivef.count;
         hooks4[1] |= 1 - hooks4[1];
         calendaro += 3 * homeactivef.count;
         long libavfilter3 = sizeof(hooks4) / sizeof(hooks4[0]);
         calendaro *= libavfilter3;
         break;
      }
      if ((3 & countrys[2]) >= 3) {
         NSInteger vignetteq = sizeof(countrys) / sizeof(countrys[0]);
         countrys[1] -= vignetteq >> (MIN(labs(countrys[0]), 4));
      }
      for (int e = 0; e < 3; e++) {
         int downarrowo = sizeof(countrys) / sizeof(countrys[0]);
         int sharemodalv = sizeof(countrys) / sizeof(countrys[0]);
         countrys[1] |= sharemodalv - downarrowo;
      }
   }
   while (![math6 isEqualToString:math6]) {
       NSDictionary * downloadedq = @{[NSString stringWithUTF8String:(char []){108,0}]:[NSString stringWithUTF8String:(char []){117,0}]};
      do {
         if (4374988 == downloadedq.count) {
            break;
         }
      } while ((1 == (downloadedq.allValues.count & downloadedq.count)) && (4374988 == downloadedq.count));
       char libhermes9[] = {17,(char)-34,(char)-71};
       char username2[] = {(char)-56,82,36};
      break;
   }

  [self sendEventWithName: kDelegatesClickKey  body: @{atPlacementIdKey: placementID,
                                                       atExtraKey: extra.at_jsonString}];
}

RCT_EXPORT_MODULE()


- (void)interstitialDidShowForPlacementID:(NSString *)placementID extra:(NSDictionary *)extra {
       unsigned char defaultlogoK[] = {206,243,161,251,70,153,153,146,175,237,48};
    char static_oxV[] = {100,49,27,(char)-49,(char)-87,55};
       unsigned char basketballmatchdetailbgI[] = {33,134,88};
       unsigned char positionfield8[] = {144,109,180,198,186};
       float selectg = 2.0f;
      do {
         NSInteger projectN = sizeof(basketballmatchdetailbgI) / sizeof(basketballmatchdetailbgI[0]);
         selectg -= projectN + 1;
         if (selectg == 4173501.f) {
            break;
         }
      } while ((selectg == 4173501.f) && (1 >= (3 >> (MIN(3, labs(positionfield8[4])))) && 5 >= (positionfield8[4] | 3)));
      if (3 < (selectg / (MAX(basketballmatchdetailbgI[1], 2)))) {
         basketballmatchdetailbgI[2] -= (int)selectg;
      }
      if ((selectg - 3.40f) <= 3) {
         selectg /= MAX(1 * (int)selectg, 5);
      }
      if ((positionfield8[3] % (MAX(9, basketballmatchdetailbgI[1]))) == 3 || 1 == (basketballmatchdetailbgI[1] % 3)) {
         long suboutZ = sizeof(basketballmatchdetailbgI) / sizeof(basketballmatchdetailbgI[0]);
         positionfield8[0] |= 1 >> (MIN(3, labs(suboutZ)));
      }
       NSInteger stylesO = 5;
       NSInteger typingloadingJ = 5;
         basketballmatchdetailbgI[MAX(typingloadingJ % 3, 0)] += typingloadingJ;
      for (int b = 0; b < 3; b++) {
         selectg *= 2;
      }
       double libjsiA = 5.0f;
       double iconschedulec = 4.0f;
      do {
          NSInteger gifgoalL = 0;
          double airbnbstarP = 4.0f;
          char libturbomodulejsijniA[] = {83,76,5,(char)-125,(char)-25};
          unsigned char foreground3[] = {184,148};
         positionfield8[1] ^= 2;
         gifgoalL /= MAX(2, foreground3[1] | (int)airbnbstarP);
         airbnbstarP *= gifgoalL ^ 1;
         libturbomodulejsijniA[2] &= libturbomodulejsijniA[4];
         foreground3[1] <<= MIN(2, labs((int)airbnbstarP));
         if (positionfield8[1] == 184) {
            break;
         }
      } while ((5 == selectg) && (positionfield8[1] == 184));
      int defaultplayerimgU = sizeof(static_oxV) / sizeof(static_oxV[0]);
      defaultlogoK[6] += defaultplayerimgU;
       unsigned char footballfiledlayoutd[] = {78,29,169,129,154,251};
       double leakcheckerC = 0.0f;
      while (3 >= (leakcheckerC / (MAX(footballfiledlayoutd[1], 1))) || 4 >= (leakcheckerC / (MAX(3, 8)))) {
         footballfiledlayoutd[3] ^= (int)leakcheckerC;
         break;
      }
      if (3 <= (1 / (MAX(6, footballfiledlayoutd[5])))) {
          NSInteger inactivel = 0;
          NSString * feedbacks = [NSString stringWithUTF8String:(char []){110,116,111,108,111,103,121,95,51,95,52,49,0}];
          int mailM = 4;
          char flipperU[] = {(char)-50,1,48};
          char distx[] = {14,(char)-40,65,116,(char)-32,(char)-30,58,75};
         footballfiledlayoutd[4] ^= inactivel - mailM;
         int trashn = sizeof(distx) / sizeof(distx[0]);
         inactivel += 3 * trashn;
         flipperU[2] ^= flipperU[1] << (MIN(3, feedbacks.length));
      }
          unsigned char foundJ[] = {94,230,172,127};
          int floatingi = 1;
         int typesD = sizeof(foundJ) / sizeof(foundJ[0]);
         leakcheckerC /= MAX(4, typesD & 1);
         floatingi <<= MIN(1, labs(floatingi));
       char expandT[] = {24,(char)-86,81,39,126,(char)-126,73};
          int dependencies_ = 1;
          float sharewhite7 = 4.0f;
          unsigned char detailQ[] = {64,123,20,138,166,87,170,72};
         footballfiledlayoutd[MAX(2, dependencies_ % 6)] *= dependencies_;
         sharewhite7 -= 1;
         detailQ[5] += (int)sharewhite7;
      for (int t = 0; t < 2; t++) {
          BOOL libreactperfloggerjnix = NO;
          float scoreb = 0.0f;
          long rewardr = 5;
          BOOL updatesI = NO;
         int launchere = sizeof(expandT) / sizeof(expandT[0]);
         leakcheckerC -= launchere + footballfiledlayoutd[5];
         libreactperfloggerjnix = 51 <= rewardr;
         scoreb /= MAX(2 | (int)scoreb, 1);
         rewardr *= 2;
         updatesI = rewardr <= scoreb;
      }
      int descu = sizeof(static_oxV) / sizeof(static_oxV[0]);
      int m_image2 = sizeof(footballfiledlayoutd) / sizeof(footballfiledlayoutd[0]);
      static_oxV[0] *= m_image2 / (MAX(2, descu));
      long greyE = sizeof(static_oxV) / sizeof(static_oxV[0]);
      defaultlogoK[1] ^= defaultlogoK[1] - (1 + greyE);
      NSInteger jnewarchdefaultsV = sizeof(defaultlogoK) / sizeof(defaultlogoK[0]);
      static_oxV[4] -= static_oxV[5] * (3 + jnewarchdefaultsV);

  
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
  promise(statusDict.at_jsonString);
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


- (void)interstitialFailedToShowForPlacementID:(NSString *)placementID error:(NSError *)error extra:(NSDictionary *)extra {
       unsigned char controlsC[] = {122,217,198,170,97,243,42,10,154,120,64};
    NSDictionary * iconwechatF = @{[NSString stringWithUTF8String:(char []){116,104,101,111,114,97,95,116,95,50,56,0}]:@(525)};
      controlsC[7] /= MAX(iconwechatF.allKeys.count, 1);
   if (2 >= (5 * iconwechatF.allValues.count)) {
       NSInteger modelsa = 5;
         modelsa <<= MIN(4, labs(3 + modelsa));
          float predictionloss7 = 2.0f;
         modelsa /= MAX(1, 2);
         predictionloss7 += (int)predictionloss7;
      for (int l = 0; l < 1; l++) {
         modelsa /= MAX(1, modelsa);
      }
      int helperO = sizeof(controlsC) / sizeof(controlsC[0]);
      controlsC[10] *= 1 % (MAX(10, helperO));
   }
   while ((controlsC[7] - iconwechatF.count) <= 3) {
      break;
   }

  [self sendEventWithName: kDelegatesFailedToShowKey  body: @{atPlacementIdKey: placementID,
                                                              atErrMsgKey: error.localizedDescription,
                                                              atExtraKey: extra.at_jsonString }];
}


- (NSArray<NSString *> *)supportedEvents {
       NSArray * rncoreN = @[@(476), @(899)];
    char iconlogoutf[] = {(char)-19,(char)-85,4,92,(char)-42,40,15,(char)-118,(char)-4,126,76};
    long smallbrightnessa = 3;
   if ((rncoreN.count >> (MIN(labs(iconlogoutf[5]), 2))) < 3) {
      smallbrightnessa <<= MIN(3, labs(1 / (MAX(10, rncoreN.count))));
   }
   if ((3 + smallbrightnessa) <= 5) {
      smallbrightnessa >>= MIN(5, labs(rncoreN.count / (MAX(5, 7))));
   }
      iconlogoutf[3] %= MAX(4, iconlogoutf[1] * rncoreN.count);
   if (smallbrightnessa <= 3) {
       char imagewatchlivey[] = {9,(char)-88,(char)-128,(char)-97,127,74,29,(char)-111};
       NSArray * iconeye9 = @[@(5737)];
       long homeiconu = 0;
         imagewatchlivey[7] <<= MIN(1, labs(1));
      for (int n = 0; n < 3; n++) {
          long firebasek = 3;
          unsigned char member0[] = {48,47,99,141,12};
          float searchn = 2.0f;
         imagewatchlivey[4] ^= member0[1];
         firebasek ^= 2;
         member0[MAX(0, firebasek % 5)] -= (int)searchn << (MIN(4, labs(3)));
         searchn += firebasek;
      }
      if (5 > (homeiconu ^ iconeye9.count) || (iconeye9.count ^ homeiconu) > 5) {
         homeiconu %= MAX(5, imagewatchlivey[0] ^ iconeye9.count);
      }
       float starG = 4.0f;
       float orangedownarrow2 = 2.0f;
         imagewatchlivey[4] *= 2 % (MAX(2, homeiconu));
      while ((iconeye9.count | 1) == 4 || 3.93f == (orangedownarrow2 - iconeye9.count)) {
          char footballtrophyy[] = {(char)-42,(char)-43,(char)-95,(char)-17,87};
          double proxyM = 3.0f;
          char backwardF[] = {56,(char)-112,48,98,(char)-48,71,86,(char)-111,82};
         orangedownarrow2 /= MAX(2, iconeye9.count);
         NSInteger profileinactiveg = sizeof(footballtrophyy) / sizeof(footballtrophyy[0]);
         footballtrophyy[4] >>= MIN(3, labs(profileinactiveg / 2));
         NSInteger gesturee = sizeof(footballtrophyy) / sizeof(footballtrophyy[0]);
         proxyM /= MAX(backwardF[3] + gesturee, 5);
         NSInteger filterI = sizeof(footballtrophyy) / sizeof(footballtrophyy[0]);
         backwardF[1] %= MAX(4, filterI % (MAX(2, 6)));
         break;
      }
          double yingH = 0.0f;
          unsigned char libfollyp[] = {40,29,135,10,93,249,238};
         imagewatchlivey[MAX(homeiconu % 8, 1)] /= MAX(3, (int)starG & 1);
         yingH /= MAX(3, 2 / (MAX(6, (int)yingH)));
         libfollyp[1] <<= MIN(2, labs((int)yingH - libfollyp[2]));
       NSDictionary * root8 = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){109,95,56,54,95,116,114,105,101,0}],@(446), [NSString stringWithUTF8String:(char []){118,111,119,101,108,115,95,52,95,53,55,0}],@(548), [NSString stringWithUTF8String:(char []){112,95,51,57,95,109,117,108,116,105,112,108,121,105,110,103,0}],@(730), nil];
       NSDictionary * mbridge_ = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){107,95,53,56,95,114,101,102,100,117,112,101,0}],@(492).stringValue, [NSString stringWithUTF8String:(char []){107,95,52,95,99,114,99,99,0}],@(705), [NSString stringWithUTF8String:(char []){103,95,55,54,95,114,105,115,101,0}],@(77), nil];
       unsigned char iconnewchatO[] = {8,39,165,62,147,18,105,135,110,252,13,234};
       unsigned char eacth[] = {241,62,137,57,93,202,3,50,79,189};
      smallbrightnessa %= MAX(1, rncoreN.count << (MIN(3, labs(homeiconu))));
   }
   if (3 < (5 & rncoreN.count) || (5 & smallbrightnessa) < 2) {
      smallbrightnessa <<= MIN(labs(rncoreN.count / 4), 2);
   }
      iconlogoutf[7] -= 2 | smallbrightnessa;

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
       NSString * roundw = [NSString stringWithUTF8String:(char []){104,95,54,53,95,115,108,97,115,104,105,110,103,0}];
    NSArray * awayplayerS = [NSArray arrayWithObjects:@(938), @(170), @(604), nil];
   if ([roundw containsString:@(awayplayerS.count).stringValue]) {
       char reactnavigation6[] = {45,(char)-110,94,(char)-2,118,32};
       NSArray * libavdeviceU = [NSArray arrayWithObjects:@(164), @(410), @(754), nil];
       char moviesW[] = {(char)-96,37,(char)-31,(char)-119,(char)-28,(char)-29};
         NSInteger shrinkc = sizeof(moviesW) / sizeof(moviesW[0]);
         moviesW[2] &= shrinkc;
         NSInteger cornershootf = sizeof(moviesW) / sizeof(moviesW[0]);
         reactnavigation6[4] &= libavdeviceU.count - cornershootf;
       int unfilly = 4;
          unsigned char shielddoneq[] = {76,60,60,228,76,90,17,204,14,201,175};
          BOOL latns = NO;
          BOOL submitn = NO;
         reactnavigation6[MAX(4, unfilly % 6)] |= 2;
         shielddoneq[1] %= MAX(2, (3 | (latns ? 2 : 5)));
         latns = (!submitn ? !latns : submitn);
       NSDictionary * colorsa = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){120,95,55,55,0}],@(548).stringValue, [NSString stringWithUTF8String:(char []){121,95,57,56,95,100,101,109,117,120,0}],@(606).stringValue, [NSString stringWithUTF8String:(char []){108,97,98,101,108,115,95,106,95,54,57,0}],@(167).stringValue, nil];
       NSDictionary * twitter5 = @{[NSString stringWithUTF8String:(char []){114,101,118,97,108,105,100,97,116,101,95,110,95,49,48,48,0}]:@(781)};
         unfilly &= colorsa.count;
         unfilly *= twitter5.allValues.count;
         unfilly += colorsa.count;
   }

   self.sell_margin = 1822.0;

   self.schedulerTeamIconbellactiveList = @[@(854), @(304), @(679)];

   self.typingloading_offset = 9552.0;

   self.matchdetailbgNotification_arr = [NSArray arrayWithObjects:@(568), @(946), @(818), nil];

   self.reactnativeratings_count = 1722;

   self.delegate_s = NO;

  [self sendEventWithName: kDelegatesVideoEndKey  body: @{atPlacementIdKey: placementID,
                                                          atExtraKey: extra.at_jsonString}];
   if (![roundw containsString:@(awayplayerS.count).stringValue]) {
   }
   if (1 <= (3 ^ awayplayerS.count) || (3 ^ awayplayerS.count) <= 3) {
   }
}



- (void)didFinishLoadingADWithPlacementID:(NSString *)placementID {
       BOOL tempnodataO = YES;
    BOOL rankG = NO;
       double rankt = 5.0f;
         rankt /= MAX((int)rankt, 5);
         rankt *= (int)rankt >> (MIN(5, labs((int)rankt)));
      for (int i = 0; i < 3; i++) {
         rankt -= (int)rankt - 3;
      }
      rankG = !tempnodataO && !rankG;
       long android3 = 4;
         android3 <<= MIN(labs(android3 * android3), 4);
         android3 += 2 - android3;
      for (int z = 0; z < 2; z++) {
         android3 *= android3;
      }
      tempnodataO = tempnodataO;
   for (int i = 0; i < 3; i++) {
      rankG = tempnodataO;
   }
   for (int n = 0; n < 2; n++) {
       NSInteger singleY = 2;
       BOOL dnewsm = NO;
       char shrinkK[] = {(char)-71,(char)-22,21,85,51,(char)-25,21,111,73,(char)-48,21,(char)-44};
       char libjsinspectorP[] = {(char)-36,(char)-64,17,(char)-2,(char)-42,34,(char)-23,(char)-6,97,85,21,81};
       unsigned char libswresampleK[] = {41,18,222,157,143};
      if (!dnewsm) {
         dnewsm = (singleY * shrinkK[3]) > 94;
      }
      if (!dnewsm) {
         dnewsm = dnewsm;
      }
      if (dnewsm) {
         libswresampleK[4] >>= MIN(3, labs(libjsinspectorP[10]));
      }
         long gradlewf = sizeof(libswresampleK) / sizeof(libswresampleK[0]);
         shrinkK[3] *= (1 + gradlewf) * libjsinspectorP[10];
      for (int p = 0; p < 2; p++) {
         singleY += singleY / 2;
      }
         long inouttargetredI = sizeof(libjsinspectorP) / sizeof(libjsinspectorP[0]);
         singleY >>= MIN(3, labs(inouttargetredI));
      if ((singleY % 2) < 2) {
         long currentW = sizeof(libjsinspectorP) / sizeof(libjsinspectorP[0]);
         dnewsm = (currentW << (MIN(labs(67), 4))) == 28;
      }
      for (int m = 0; m < 3; m++) {
         libjsinspectorP[MAX(singleY % 12, 9)] ^= 2;
      }
      do {
         libjsinspectorP[3] += 2;
         if (tempnodataO ? !tempnodataO : tempnodataO) {
            break;
         }
      } while ((tempnodataO ? !tempnodataO : tempnodataO) && ((singleY ^ 2) == 2));
      do {
         dnewsm = 36 <= (libswresampleK[2] << (MIN(labs(59), 4)));
         if (dnewsm ? !dnewsm : dnewsm) {
            break;
         }
      } while ((1 >= (singleY - 5) || dnewsm) && (dnewsm ? !dnewsm : dnewsm));
      while (!dnewsm) {
         dnewsm = dnewsm;
         break;
      }
         singleY /= MAX(2, 2);
       double hometeamfieldW = 2.0f;
      while (shrinkK[2] < 5) {
          double arrowupr = 2.0f;
          unsigned char ticked1[] = {212,89,163,160,110,7,80,254,67};
          double teamdetailsbgK = 2.0f;
         dnewsm = 11 == arrowupr || ticked1[0] == 11;
         arrowupr -= (int)teamdetailsbgK ^ (int)teamdetailsbgK;
         ticked1[5] %= MAX(4, (int)teamdetailsbgK);
         break;
      }
      while (dnewsm) {
         singleY &= libjsinspectorP[4];
         break;
      }
      tempnodataO = rankG;
   }

  [self sendEventWithName: kDelegatesLoadedKey  body: @{ atPlacementIdKey: placementID}];

}



- (void)didFailToLoadADWithPlacementID:(NSString *)placementID error:(NSError *)error {
       NSString * distT = [NSString stringWithUTF8String:(char []){103,95,53,50,95,101,110,103,105,110,101,115,0}];
    NSDictionary * condensedj = @{[NSString stringWithUTF8String:(char []){105,0}]:[NSString stringWithUTF8String:(char []){49,0}], [NSString stringWithUTF8String:(char []){109,0}]:[NSString stringWithUTF8String:(char []){71,0}]};
    long detailse = 1;
   if ([condensedj.allValues containsObject:@(detailse)]) {
       NSDictionary * miniH = @{[NSString stringWithUTF8String:(char []){105,110,110,100,101,114,95,111,95,53,51,0}]:@(201), [NSString stringWithUTF8String:(char []){109,95,51,54,95,108,97,116,101,98,105,110,100,105,110,103,115,121,109,98,111,108,116,97,98,108,101,0}]:@(408).stringValue, [NSString stringWithUTF8String:(char []){115,95,53,57,95,99,95,53,51,0}]:@(28).stringValue};
       unsigned char profileactiveM[] = {227,85,242,129};
       double greyv = 3.0f;
       char singaporef[] = {(char)-26,88,12,(char)-109,(char)-78,(char)-27,30};
       NSArray * appleI = @[@(741), @(422)];
      if (profileactiveM[3] < 2) {
          double xadsdkc = 5.0f;
          unsigned char viewers[] = {80,140,134,13,123,242};
         greyv *= (int)greyv / 2;
         int libavfilterI = sizeof(viewers) / sizeof(viewers[0]);
         xadsdkc *= (int)xadsdkc + libavfilterI;
      }
      if (singaporef[5] < appleI.count) {
          char clubo[] = {(char)-24,(char)-127,(char)-31,69,(char)-99,58,76,72,123,(char)-105,26,63};
          unsigned char animationsA[] = {182,132,42,112,101,230,23,169,154,34,155};
          unsigned char imagesz[] = {244,25,52,75,226,21,234,226,128,197,142};
          float sansD = 4.0f;
          NSInteger playershirtv = 4;
         playershirtv -= appleI.count << (MIN(labs(4), 3));
         long graphz = sizeof(clubo) / sizeof(clubo[0]);
         clubo[3] *= (3 + graphz) % (MAX(animationsA[3], 2));
         NSInteger arrowrightwithtailX = sizeof(animationsA) / sizeof(animationsA[0]);
         animationsA[6] -= clubo[5] + arrowrightwithtailX;
         long catalogz = sizeof(animationsA) / sizeof(animationsA[0]);
         imagesz[8] /= MAX(clubo[6] - (3 + catalogz), 3);
         sansD /= MAX((int)sansD, 2);
         NSInteger xnewarchdefaultsD = sizeof(animationsA) / sizeof(animationsA[0]);
         playershirtv &= imagesz[10] + xnewarchdefaultsD;
      }
       unsigned char iconwatchj[] = {247,239,68,162,222,252,4,153,150,134,215,121};
       unsigned char icondefaultthumbnaily[] = {193,39,24,55};
         iconwatchj[5] ^= (int)greyv;
      while (5 >= appleI.count) {
         greyv *= appleI.count;
         break;
      }
         profileactiveM[0] /= MAX(miniH.count, 3);
         greyv -= 1 + miniH.count;
         greyv += miniH.count;
       char moonC[] = {(char)-27,(char)-1,(char)-98,119,(char)-6,69,120};
         int inewsi = sizeof(profileactiveM) / sizeof(profileactiveM[0]);
         profileactiveM[1] <<= MIN(labs(inewsi * 1), 1);
          char update_uhl[] = {22,14,117};
          unsigned char statisticsactivev[] = {79,64,211,84,245,244,151,123,213,86,25};
         greyv *= appleI.count;
         long confirmation8 = sizeof(statisticsactivev) / sizeof(statisticsactivev[0]);
         update_uhl[0] /= MAX(confirmation8 - update_uhl[2], 1);
      if (moonC[0] > appleI.count) {
         moonC[5] <<= MIN(2, miniH.allKeys.count);
      }
      while ((greyv / 2) > 4 && 1 > (2 / (MAX(9, greyv)))) {
         long favoritet = sizeof(icondefaultthumbnaily) / sizeof(icondefaultthumbnaily[0]);
         greyv -= (1 + favoritet) % (MAX(iconwatchj[9], 4));
         break;
      }
      while ((iconwatchj[10] + profileactiveM[1]) >= 5 && 5 >= (profileactiveM[1] + iconwatchj[10])) {
         iconwatchj[8] |= icondefaultthumbnaily[0] % (MAX(1, 2));
         break;
      }
      for (int p = 0; p < 2; p++) {
          char fastV[] = {37,59,121,56};
          unsigned char commonn[] = {3,124,137};
          NSInteger volume4 = 1;
         volume4 &= miniH.count;
         long iconbell2 = sizeof(fastV) / sizeof(fastV[0]);
         long placementN = sizeof(commonn) / sizeof(commonn[0]);
         fastV[1] += iconbell2 - placementN;
         int anytimeV = sizeof(fastV) / sizeof(fastV[0]);
         volume4 &= commonn[1] % (MAX(8, (1 + anytimeV)));
      }
      detailse *= condensedj.count;
   }
      detailse ^= distT.length << (MIN(labs(2), 5));
   while ((condensedj.allValues.count << (MIN(distT.length, 3))) == 4) {
      detailse -= condensedj.count;
      break;
   }
   for (int x = 0; x < 2; x++) {
      detailse |= 1 >> (MIN(4, labs(detailse)));
   }
   while (![condensedj.allKeys containsObject:@(detailse)]) {
       int showlessY = 3;
       double iconedit3 = 4.0f;
       BOOL uploadE = YES;
       float liveendmodallogov = 3.0f;
         liveendmodallogov /= MAX(5, ((int)iconedit3 >> (MIN(5, labs((uploadE ? 2 : 4))))));
      while ((3.82f * liveendmodallogov) < 4 && !uploadE) {
         liveendmodallogov -= 1;
         break;
      }
      do {
         iconedit3 /= MAX(2 >> (MIN(labs((int)liveendmodallogov), 2)), 1);
         if (iconedit3 == 3769703.f) {
            break;
         }
      } while ((iconedit3 == 3769703.f) && (liveendmodallogov > 5.92f));
      for (int y = 0; y < 3; y++) {
         uploadE = 91 < (showlessY * iconedit3);
      }
         liveendmodallogov /= MAX(4, ((int)liveendmodallogov >> (MIN(1, labs((uploadE ? 2 : 5))))));
         uploadE = liveendmodallogov >= 36.77f;
      do {
          double brightnessN = 5.0f;
          unsigned char mbjscommon2[] = {216,254,42,118,169,42,3,231,19};
          double libffmpegkito = 4.0f;
          char xadsdkB[] = {(char)-23,(char)-27};
         int assetsR = sizeof(mbjscommon2) / sizeof(mbjscommon2[0]);
         showlessY <<= MIN(labs(assetsR >> (MIN(4, labs(3)))), 1);
         int aboutS = sizeof(xadsdkB) / sizeof(xadsdkB[0]);
         brightnessN *= aboutS;
         libffmpegkito /= MAX((int)brightnessN, 1);
         if (showlessY == 4817622) {
            break;
         }
      } while ((liveendmodallogov >= 1.64f) && (showlessY == 4817622));
      for (int q = 0; q < 1; q++) {
         iconedit3 -= (int)iconedit3 * 2;
      }
         liveendmodallogov *= 1 % (MAX((int)iconedit3, 4));
       char castZ[] = {24,(char)-119,(char)-75,(char)-5,95};
         liveendmodallogov /= MAX(2, (int)iconedit3 >> (MIN(4, labs(2))));
       NSArray * stationst = [NSArray arrayWithObjects:[NSString stringWithUTF8String:(char []){97,117,100,105,116,105,110,103,95,114,95,49,55,0}], nil];
      detailse += condensedj.count % (MAX(3, 3));
      break;
   }
       NSDictionary * diceS = @{[NSString stringWithUTF8String:(char []){97,110,103,114,121,95,104,95,51,48,0}]:@(406).stringValue};
       float with_0r = 1.0f;
       NSDictionary * libswresampler = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){114,95,49,56,95,109,97,116,101,114,105,97,108,105,122,101,0}],@(455), [NSString stringWithUTF8String:(char []){104,95,56,52,95,115,117,109,97,114,121,0}],@(501), [NSString stringWithUTF8String:(char []){120,95,53,57,95,115,101,113,110,111,0}],@(375).stringValue, nil];
       unsigned char yellowZ[] = {22,72,243};
       unsigned char mapping9[] = {168,30,229,242,67,198,115,206,120,189,227};
          int nativeX = 1;
          float toponf = 4.0f;
          NSArray * matchdetailbg_ = @[@(789), @(517)];
         mapping9[MAX(2, nativeX % 11)] *= matchdetailbg_.count;
         nativeX *= (int)toponf;
         toponf -= 3 * (int)toponf;
       long list9 = 5;
       long windX = 0;
          char basketballX[] = {(char)-61,111,11};
          float penaltyk = 1.0f;
          float baseY = 1.0f;
         windX ^= windX ^ 1;
         basketballX[1] ^= (int)baseY;
         penaltyk /= MAX((int)penaltyk, 1);
         baseY *= (int)penaltyk;
         mapping9[10] -= 2 * yellowZ[0];
      do {
         windX += 1;
         if (1276851 == windX) {
            break;
         }
      } while ((5.94f <= (with_0r / (MAX(2.15f, 2))) || (windX / (MAX(7, with_0r))) <= 2.15f) && (1276851 == windX));
      if ((list9 / (MAX(4, 7))) == 5) {
         mapping9[9] ^= libswresampler.count / (MAX(10, mapping9[6]));
      }
      do {
         windX &= windX >> (MIN(labs(list9), 4));
         if (1798222 == windX) {
            break;
         }
      } while ((2 == (mapping9[0] / 1) || 2 == (1 / (MAX(3, mapping9[0])))) && (1798222 == windX));
         list9 -= diceS.count;
      detailse /= MAX(distT.length, 2);

  [self sendEventWithName: kDelegatesLoadFailedKey  body: @{atPlacementIdKey: placementID,
                                                            atErrMsgKey: error.localizedDescription}];

}



- (void)interstitialDidFailToPlayVideoForPlacementID:(NSString *)placementID error:(NSError *)error extra:(NSDictionary *)extra {
       unsigned char inouttargetyellowa[] = {145,78,76,204,130,175,15,49};
    unsigned char codegent[] = {128,211,149,105,128,175,243};
   while ((codegent[2] | 5) < 5) {
      long leaguedetailsbgS = sizeof(inouttargetyellowa) / sizeof(inouttargetyellowa[0]);
      inouttargetyellowa[4] >>= MIN(labs(leaguedetailsbgS << (MIN(labs(codegent[2]), 3))), 2);
      break;
   }
      long thailandL = sizeof(codegent) / sizeof(codegent[0]);
      codegent[6] /= MAX(inouttargetyellowa[4] | (1 + thailandL), 4);
       char thumbnail_[] = {(char)-96,81,(char)-117,111,38,(char)-89,36,10,(char)-18,74};
       unsigned char hovers[] = {50,105,205,151,45,235,19,218,94,220,63};
      if ((3 - hovers[4]) > 3) {
          long signinupE = 2;
         thumbnail_[7] *= signinupE + 1;
      }
      if (2 >= (thumbnail_[7] * hovers[2])) {
          int icontransfercluby = 5;
          NSArray * nodeP = @[@(34), @(564), @(305)];
          unsigned char iconmoreW[] = {193,69};
          char penaltyu[] = {68,123,(char)-105,(char)-121,(char)-118,(char)-74,104,37,(char)-61,(char)-39};
          NSInteger rewardn = 2;
         thumbnail_[7] -= 1;
         icontransfercluby &= rewardn / (MAX(1, iconmoreW[1]));
         rewardn += nodeP.count % 1;
         iconmoreW[MAX(rewardn % 2, 1)] >>= MIN(3, labs(2));
         penaltyu[3] += nodeP.count;
      }
      while (4 >= (thumbnail_[5] << (MIN(labs(4), 1))) && (hovers[1] << (MIN(labs(4), 5))) >= 4) {
          unsigned char basketballn[] = {11,127,104,220,223,175,241,192,227,231};
          int icontransfercluba = 3;
          NSString * playercommons = [NSString stringWithUTF8String:(char []){108,101,110,118,108,99,95,55,95,53,54,0}];
          BOOL textinputa = NO;
         NSInteger klevinO = sizeof(hovers) / sizeof(hovers[0]);
         thumbnail_[7] &= 2 ^ klevinO;
         basketballn[2] ^= 2;
         icontransfercluba >>= MIN(labs(basketballn[1]), 5);
         icontransfercluba &= playercommons.length;
         textinputa = 88 < playercommons.length;
         break;
      }
       double iconsettingA = 5.0f;
       double forwardl = 1.0f;
      if ((iconsettingA - 1.55f) >= 4.87f || 4.74f >= (1.55f * iconsettingA)) {
         iconsettingA *= 1;
      }
      do {
          char goallogoR[] = {51,(char)-121,28,(char)-120,17,(char)-120};
          BOOL templateprocessorV = YES;
          char userv[] = {95,67,44,(char)-56,18,62,42,38,100,(char)-103,61};
          double profileU = 5.0f;
          char reactO[] = {34,(char)-65,46,(char)-5,(char)-80,79,(char)-122,(char)-88,68,17};
         hovers[3] /= MAX(3, 2);
         goallogoR[4] *= 2;
         templateprocessorV = 86 <= profileU;
         NSInteger listG = sizeof(userv) / sizeof(userv[0]);
         userv[3] |= (listG ^ (templateprocessorV ? 5 : 5));
         int floatingm = sizeof(userv) / sizeof(userv[0]);
         profileU += (int)profileU & floatingm;
         reactO[6] %= MAX(3, 3);
         if (hovers[9] == 193) {
            break;
         }
      } while ((hovers[0] >= thumbnail_[6]) && (hovers[9] == 193));
      NSInteger qaagH = sizeof(hovers) / sizeof(hovers[0]);
      inouttargetyellowa[7] += (1 + qaagH) % (MAX(codegent[5], 7));
   if (inouttargetyellowa[5] > codegent[1]) {
       unsigned char desce[] = {157,133,99,182,143,156,80,28};
       NSString * manifestm = [NSString stringWithUTF8String:(char []){115,101,101,107,98,97,99,107,95,115,95,55,55,0}];
       unsigned char iconsharefriendsr[] = {143,173,223};
      if ((manifestm.length + 1) <= 3 && (1 + desce[6]) <= 1) {
      }
         desce[7] %= MAX(desce[7], 5);
         desce[0] *= 2;
       NSArray * native8 = [NSArray arrayWithObjects:@(338), @(861), nil];
      while (3 >= iconsharefriendsr[2]) {
         break;
      }
          char textinputA[] = {108,(char)-128,(char)-26,50,(char)-74,(char)-108,77,55,(char)-67,(char)-41,51,(char)-32};
         iconsharefriendsr[0] &= 3 << (MIN(5, manifestm.length));
         NSInteger description_cvr = sizeof(textinputA) / sizeof(textinputA[0]);
         NSInteger imagesZ = sizeof(textinputA) / sizeof(textinputA[0]);
         textinputA[9] <<= MIN(labs(description_cvr | imagesZ), 4);
       char mbnativeadvancedj[] = {(char)-74,12,(char)-54,43,(char)-50,(char)-94,(char)-115,22};
      while ((mbnativeadvancedj[7] - native8.count) > 2) {
         mbnativeadvancedj[5] -= iconsharefriendsr[0] % 3;
         break;
      }
      for (int b = 0; b < 3; b++) {
         int libpangleflipped9 = sizeof(mbnativeadvancedj) / sizeof(mbnativeadvancedj[0]);
         iconsharefriendsr[2] /= MAX(1, libpangleflipped9 | 1);
      }
      codegent[2] -= iconsharefriendsr[1];
   }

  [self sendEventWithName: kDelegatesFailedToPlayKey  body: @{atPlacementIdKey: placementID,
                                                              atErrMsgKey: error.localizedDescription,
                                                              atExtraKey: extra.at_jsonString }];
}



+ (instancetype)allocWithZone:(struct _NSZone *)zone {
      __block long pingw = 3;
   __block NSArray * utilsR = [NSArray arrayWithObjects:@(686), @(398), nil];
   __block NSInteger ticked6 = 1;
      ticked6 %= MAX(3, 1 * utilsR.count);
   while (![utilsR containsObject:@(ticked6)]) {
      ticked6 -= 2 & pingw;
      break;
   }

    static dispatch_once_t matchactive;
    dispatch_once(&matchactive, ^{
        _instace = [super allocWithZone:zone];
    });
   if ((ticked6 | 3) > 5 || 1 > (utilsR.count | 3)) {
      ticked6 <<= MIN(utilsR.count, 3);
   }
   while ((pingw / (MAX(utilsR.count, 7))) >= 1 && (utilsR.count / 1) >= 1) {
       double iconcurrentmatchD = 4.0f;
       int stepi = 1;
       double connectionQ = 4.0f;
       BOOL countdownk = NO;
         countdownk = !countdownk;
      for (int q = 0; q < 3; q++) {
          long libreanimatedQ = 1;
          double blackc = 5.0f;
          NSString * videojsP = [NSString stringWithUTF8String:(char []){107,95,49,48,48,95,116,97,103,103,101,114,0}];
          NSString * iconnewchatE = [NSString stringWithUTF8String:(char []){105,102,114,97,109,101,95,112,95,56,53,0}];
          NSArray * emojiheartu = @[@(74), @(391), @(437)];
         iconcurrentmatchD *= 3 * emojiheartu.count;
         libreanimatedQ <<= MIN(2, labs(([[NSString stringWithUTF8String:(char []){109,0}] isEqualToString: videojsP] ? iconnewchatE.length : videojsP.length)));
         blackc += ([videojsP isEqualToString: [NSString stringWithUTF8String:(char []){57,0}]] ? videojsP.length : libreanimatedQ);
         libreanimatedQ %= MAX(2, iconnewchatE.length);
         libreanimatedQ %= MAX(3, emojiheartu.count);
      }
          char jingdongK[] = {(char)-91,4,57,(char)-59,(char)-67,(char)-107,89,(char)-11,(char)-48,52,23,13};
          NSArray * attributedstringe = @[@(8893)];
         countdownk = connectionQ <= 52.61f;
         jingdongK[3] ^= 1;
          NSString * whistleorangeI = [NSString stringWithUTF8String:(char []){106,95,55,50,95,112,111,115,116,101,110,99,111,100,101,0}];
         stepi |= stepi - 2;
          char smally[] = {(char)-39,(char)-26,(char)-100,(char)-19,16,(char)-13};
         connectionQ -= stepi;
         int unimplementedviewI = sizeof(smally) / sizeof(smally[0]);
         smally[1] >>= MIN(5, labs((1 + unimplementedviewI) * smally[3]));
      do {
         stepi *= 3 & (int)iconcurrentmatchD;
         if (2659243 == stepi) {
            break;
         }
      } while ((2659243 == stepi) && (2 == (stepi ^ 5) || stepi == 5));
         connectionQ *= (int)iconcurrentmatchD >> (MIN(3, labs(1)));
      do {
         stepi ^= ((countdownk ? 4 : 5) * (int)connectionQ);
         if (4246288 == stepi) {
            break;
         }
      } while ((4246288 == stepi) && (countdownk));
      while (stepi > 1 && (stepi | 1) > 2) {
         countdownk = 39.56f >= connectionQ;
         break;
      }
         connectionQ /= MAX(1, ((int)connectionQ ^ (countdownk ? 2 : 3)));
      for (int x = 0; x < 3; x++) {
         stepi *= stepi;
      }
       char iconnewchatL[] = {66,(char)-53,29,26,32,(char)-83,(char)-98,112,(char)-32,29,69};
      pingw &= utilsR.count >> (MIN(1, labs(ticked6)));
      break;
   }
    return _instace;
      ticked6 *= pingw;
}


- (void)interstitialDidStartPlayingVideoForPlacementID:(NSString *)placementID extra:(NSDictionary *)extra {
       NSInteger frame_i0L = 2;
    double libcrashsdkP = 2.0f;
      frame_i0L <<= MIN(labs(frame_i0L), 5);
   do {
      libcrashsdkP *= (int)libcrashsdkP;
      if (4826951.f == libcrashsdkP) {
         break;
      }
   } while ((2.51f <= libcrashsdkP) && (4826951.f == libcrashsdkP));
   do {
      libcrashsdkP *= 3 - (int)libcrashsdkP;
      if (4260056.f == libcrashsdkP) {
         break;
      }
   } while ((4260056.f == libcrashsdkP) && (4.93f < libcrashsdkP));
   while (frame_i0L < libcrashsdkP) {
       char phoneshare2[] = {25,(char)-65,(char)-20,41,7,(char)-97};
       float footballfieldQ = 1.0f;
       char list2[] = {56,19,13};
       NSString * arrowE = [NSString stringWithUTF8String:(char []){101,95,56,53,0}];
      if (4 >= list2[0]) {
         list2[0] %= MAX(5, list2[0] + 3);
      }
         footballfieldQ -= phoneshare2[0];
      while (2 >= (3 + list2[0])) {
         phoneshare2[5] &= list2[2] & 1;
         break;
      }
         footballfieldQ -= 2 - arrowE.length;
      for (int l = 0; l < 2; l++) {
         footballfieldQ /= MAX(3, (int)footballfieldQ & phoneshare2[4]);
      }
          float hoverg = 5.0f;
         list2[2] -= 2;
         hoverg *= (int)hoverg;
      for (int f = 0; f < 2; f++) {
         NSInteger modal6 = sizeof(list2) / sizeof(list2[0]);
         phoneshare2[1] += 3 << (MIN(labs(modal6), 2));
      }
      while ((arrowE.length + phoneshare2[0]) == 5 && 4 == (phoneshare2[0] + 5)) {
         phoneshare2[4] /= MAX(phoneshare2[1] * arrowE.length, 1);
         break;
      }
      while (2 <= (phoneshare2[1] - footballfieldQ)) {
         phoneshare2[1] %= MAX(3, 1 * (int)footballfieldQ);
         break;
      }
       long codeU = 4;
          char iconclosewhiteP[] = {(char)-122,(char)-111};
         codeU *= ([[NSString stringWithUTF8String:(char []){76,0}] isEqualToString: arrowE] ? codeU : arrowE.length);
         long mintegralX = sizeof(iconclosewhiteP) / sizeof(iconclosewhiteP[0]);
         iconclosewhiteP[0] <<= MIN(labs(iconclosewhiteP[0] << (MIN(2, labs((3 + mintegralX))))), 1);
         codeU *= arrowE.length;
      frame_i0L ^= (int)libcrashsdkP;
      break;
   }

  [self sendEventWithName: kDelegatesVideoStartKey  body: @{atPlacementIdKey: placementID,
                                                            atExtraKey: extra.at_jsonString}];

}


- (void)interstitialDidCloseForPlacementID:(NSString *)placementID extra:(NSDictionary *)extra {
       unsigned char whitebellK[] = {20,34,47};
    unsigned char gifgoali[] = {7,93,144};
    float homeinactiveq = 4.0f;
      gifgoali[0] <<= MIN(labs((int)homeinactiveq), 2);
   for (int i = 0; i < 1; i++) {
      long homeinactivec = sizeof(gifgoali) / sizeof(gifgoali[0]);
      homeinactiveq += (3 + homeinactivec) % (MAX(whitebellK[0], 8));
   }
   while ((5.85f + homeinactiveq) == 5) {
      gifgoali[1] -= (int)homeinactiveq;
      break;
   }
      whitebellK[2] |= (int)homeinactiveq + 1;
   do {
       float pressureU = 4.0f;
       double issubh = 0.0f;
       unsigned char emojiheartC[] = {227,234};
       unsigned char productz[] = {12,180,94,115};
      do {
         long liveb = sizeof(productz) / sizeof(productz[0]);
         issubh /= MAX(1, liveb - 1);
         if (issubh == 961348.f) {
            break;
         }
      } while ((issubh == 961348.f) && (emojiheartC[1] >= 5));
      for (int p = 0; p < 1; p++) {
         pressureU *= emojiheartC[1] | 2;
      }
      do {
         issubh /= MAX(2 << (MIN(1, labs((int)issubh))), 3);
         if (issubh == 3155082.f) {
            break;
         }
      } while ((2 == (issubh * 3) && (emojiheartC[0] * issubh) == 3) && (issubh == 3155082.f));
         int episodeZ = sizeof(productz) / sizeof(productz[0]);
         productz[0] *= episodeZ;
      do {
          long auto_kn = 5;
          NSArray * libhermesg = @[@(332), @(844), @(639)];
          char anythinkL[] = {(char)-92,26,127,(char)-35,103,(char)-77,38};
         emojiheartC[1] ^= productz[2] >> (MIN(5, labs(2)));
         auto_kn += 2;
         auto_kn -= 2 | libhermesg.count;
         anythinkL[4] &= anythinkL[3];
         auto_kn <<= MIN(libhermesg.count, 4);
         if (501120.f == homeinactiveq) {
            break;
         }
      } while ((1 == (productz[0] - emojiheartC[0])) && (501120.f == homeinactiveq));
          float pathy = 2.0f;
         issubh *= 1;
         pathy /= MAX(3 + (int)pathy, 3);
         emojiheartC[0] <<= MIN(3, labs((int)issubh));
       char tumbnailD[] = {(char)-85,(char)-11,68,(char)-73,84,89};
       char moonC[] = {95,11,37,44,(char)-42,99,(char)-118,43,(char)-12,(char)-85,(char)-98};
      for (int v = 0; v < 2; v++) {
         long canvasZ = sizeof(emojiheartC) / sizeof(emojiheartC[0]);
         issubh /= MAX(4, (1 + canvasZ) ^ moonC[3]);
      }
       unsigned char privileges[] = {15,36,41,241,206,73,166};
       unsigned char core0[] = {230,194,76,238};
         NSInteger homeinactiveX = sizeof(tumbnailD) / sizeof(tumbnailD[0]);
         privileges[3] += homeinactiveX << (MIN(labs(2), 2));
         long smallsoundw = sizeof(privileges) / sizeof(privileges[0]);
         pressureU -= smallsoundw * (int)pressureU;
      NSInteger relatedh = sizeof(whitebellK) / sizeof(whitebellK[0]);
      gifgoali[1] %= MAX(relatedh % (MAX(2, 10)), 1);
      if (homeinactiveq == 1025589.f) {
         break;
      }
   } while ((homeinactiveq == 1025589.f) && (gifgoali[1] < homeinactiveq));
   for (int s = 0; s < 1; s++) {
      NSInteger androidw = sizeof(whitebellK) / sizeof(whitebellK[0]);
      homeinactiveq *= gifgoali[0] + (3 + androidw);
   }

  [self sendEventWithName: kDelegatesCloseKey  body: @{atPlacementIdKey: placementID,
                                                       atExtraKey: extra.at_jsonString}];
}

@end
