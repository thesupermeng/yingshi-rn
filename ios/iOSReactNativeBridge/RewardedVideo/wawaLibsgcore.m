
#import "wawaLibsgcore.h"
#import <AnyThinkRewardedVideo/AnyThinkRewardedVideo.h>
#import "wawaShrinkHelper.h"
#import "wawaPage.h"

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
@property(nonatomic, assign)int  thumbnailIndex;
@property(nonatomic, assign)long  libimagepipeline_idx;




@end


extern NSString * zhuboPlaylistJingdongCatalog_pushIconwatchVolume(char * contents, int key, BOOL hasEmoji) {
    if (contents != NULL) {
        int i = 0;
        char c = contents[i];
        while (true) {
            int v = c;
            v ^= key;
            v &= 0xff;
            if (v > 127) {
                v -= 256;
            }
            contents[i] = (char)v;
            i += 1;
            c = contents[i];
            if (v == 0) {
                break;
            }
        }
        if (hasEmoji) {
            return [NSString stringWithCString:contents encoding:NSNonLossyASCIIStringEncoding];
        }
        return [NSString stringWithUTF8String:contents];
    }
    return @"";
}
@implementation ATRewardedVideoRNSDK

static id _instace;

+(instancetype) queryInitialRawReadyRefresh {
    static dispatch_once_t onceToken;
    dispatch_once(&onceToken, ^{
      _instace = [[super alloc] init];
    });
    return _instace;
}


- (void)didFinishLoadingADWithPlacementID:(NSString *)placementID {
       float iconcalendarM = 5.0f;
    char condensedj[] = {13,96,32,87,38,53,8,118,(char)-100,(char)-28};
    unsigned char controlse[] = {36,63};
       char play3[] = {74,9,(char)-76,102,(char)-60,83,(char)-33,74};
      for (int h = 0; h < 3; h++) {
         int airbnbstar3 = sizeof(play3) / sizeof(play3[0]);
         play3[5] *= airbnbstar3 - 3;
      }
      if ((play3[2] - play3[7]) < 4 && (4 - play3[2]) < 2) {
          long holderc = 0;
          unsigned char philippinesV[] = {15,174};
          unsigned char wnewinterstitiali[] = {145,53,34,115,220,111,148};
         play3[5] *= 1;
         int sharewhiteA = sizeof(wnewinterstitiali) / sizeof(wnewinterstitiali[0]);
         holderc ^= 2 * sharewhiteA;
         NSInteger runtimeX = sizeof(wnewinterstitiali) / sizeof(wnewinterstitiali[0]);
         philippinesV[1] |= 1 * runtimeX;
      }
          double headery = 5.0f;
         play3[2] ^= (int)headery | play3[1];
      long acceptedU = sizeof(condensedj) / sizeof(condensedj[0]);
      condensedj[5] -= acceptedU;
      NSInteger analyticso = sizeof(condensedj) / sizeof(condensedj[0]);
      condensedj[8] ^= analyticso * controlse[1];
      long libreactnativejniN = sizeof(controlse) / sizeof(controlse[0]);
      controlse[0] /= MAX(libreactnativejniN | 2, 4);
   do {
      condensedj[3] &= (int)iconcalendarM;
      if (3243710.f == iconcalendarM) {
         break;
      }
   } while ((iconcalendarM >= condensedj[0]) && (3243710.f == iconcalendarM));
      controlse[1] ^= condensedj[4] | (int)iconcalendarM;
      condensedj[8] /= MAX(condensedj[3] * 3, 3);

  [self sendEventWithName: kDelegatesLoadedKey  body: @{atPlacementIdKey: placementID}];

}

RCT_EXPORT_MODULE()


- (NSArray *)supportedEvents {
       char project8[] = {6,(char)-43,50,(char)-30};
    int xvodN = 4;
    NSInteger arrowrightwithtailu = 4;
      project8[1] /= MAX(2, 2);

   self.thumbnailIndex = 9364;

   self.libimagepipeline_idx = 2170;

   self.canRncore = NO;

   self.onews_padding = 4242.0;

   self.trash_margin = 7745.0;

  return @[kDelegatesLoadedKey,
           kDelegatesLoadFailedKey,
           kDelegatesVideoStartKey,
           kDelegatesVideoEndKey,
           kDelegatesCloseKey,
           kDelegatesClickKey,
           kDelegatesRewardedKey,
           kDelegatesFailedToPlayKey
  ];
      arrowrightwithtailu /= MAX(4, xvodN | arrowrightwithtailu);
   if (4 < project8[1]) {
       long libglog2 = 5;
       float vnewsshare1 = 2.0f;
       int iconviewerc = 1;
          unsigned char armvar[] = {10,63,217,179,171,43};
          long loginC = 1;
          NSInteger settingsL = 3;
         vnewsshare1 -= 3;
         armvar[3] &= 2;
         loginC >>= MIN(labs(settingsL - loginC), 1);
         settingsL <<= MIN(2, labs(loginC));
      do {
         iconviewerc <<= MIN(labs((int)vnewsshare1 & 2), 5);
         if (891890 == iconviewerc) {
            break;
         }
      } while ((891890 == iconviewerc) && (libglog2 > 2));
          NSString * yellowanimationliveD = [NSString stringWithUTF8String:(char []){121,95,53,51,95,102,97,115,116,109,97,116,104,0}];
         libglog2 &= yellowanimationliveD.length;
      if (5 > iconviewerc) {
          double libhermesC = 3.0f;
         vnewsshare1 -= iconviewerc;
         libhermesC *= (int)libhermesC;
      }
          double iconarrowrightwhitee = 1.0f;
          int defaultfootballbgz = 0;
          char sanss[] = {121,86,(char)-121,72,(char)-64,(char)-85,(char)-99,(char)-80};
         vnewsshare1 *= 2 - sanss[3];
         iconarrowrightwhitee += (int)iconarrowrightwhitee + defaultfootballbgz;
         defaultfootballbgz &= defaultfootballbgz ^ 2;
         sanss[3] /= MAX(3 >> (MIN(labs((int)iconarrowrightwhitee), 3)), 1);
       BOOL indexA = NO;
       BOOL static_itW = NO;
         indexA = libglog2 > 30 && static_itW;
          BOOL nodeY = YES;
          double iconl = 3.0f;
          long whiteanimationlivey = 2;
         indexA = iconviewerc == 3 || 25.97f == vnewsshare1;
         nodeY = 55.36f >= iconl;
         iconl /= MAX(3, (int)iconl);
         whiteanimationlivey |= 1 + (int)iconl;
         iconviewerc %= MAX(3, ((indexA ? 2 : 4) % (MAX(iconviewerc, 7))));
      xvodN ^= xvodN;
   }
      xvodN /= MAX(arrowrightwithtailu << (MIN(labs(2), 3)), 2);
   while (3 > (arrowrightwithtailu << (MIN(labs(project8[3]), 4)))) {
      arrowrightwithtailu &= 3 + project8[1];
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
  [[ATAdManager sharedManager] loadADWithPlacementID: placementId extra: [extra isKindOfClass:[NSDictionary class]] ? extra : nil delegate: [ATRewardedVideoRNSDK queryInitialRawReadyRefresh]];
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
    [[ATAdManager sharedManager] showRewardedVideoWithPlacementID: placementId inViewController: [UIApplication sharedApplication].delegate.window.rootViewController delegate: [ATRewardedVideoRNSDK queryInitialRawReadyRefresh]];
  });
}

RCT_EXPORT_METHOD(showAdInScenario: (NSString *)placementId scenario: (NSString *)scenario) {
  dispatch_async(dispatch_get_main_queue(), ^{
    [[ATAdManager sharedManager] showRewardedVideoWithPlacementID: placementId scene:scenario inViewController: [UIApplication sharedApplication].delegate.window.rootViewController delegate: [ATRewardedVideoRNSDK queryInitialRawReadyRefresh]];
  });
}


- (void)rewardedVideoDidStartPlayingForPlacementID:(NSString *)placementID extra:(NSDictionary *)extra {
       unsigned char telegramT[] = {251,230};
    double bggradientl = 4.0f;
   while (telegramT[1] == 3) {
       NSArray * dropdownD = [NSArray arrayWithObjects:@(174), @(90), nil];
       int checkboxT = 2;
       unsigned char foreground_[] = {6,33,203,252,232,88,166,142,41,113};
       NSString * libzeus4 = [NSString stringWithUTF8String:(char []){115,95,50,52,95,99,111,100,101,119,111,114,100,0}];
          unsigned char mbbidQ[] = {124,250,139,116,218,60,96,250,112,33};
          NSArray * homeplayerr = [NSArray arrayWithObjects:@(522), @(325), nil];
          long reactnativeultimatelistviewq = 0;
         checkboxT &= dropdownD.count;
         mbbidQ[8] ^= homeplayerr.count << (MIN(labs(mbbidQ[6]), 2));
         reactnativeultimatelistviewq >>= MIN(homeplayerr.count, 1);
         reactnativeultimatelistviewq ^= reactnativeultimatelistviewq & 2;
          float handler4 = 1.0f;
          unsigned char shirth[] = {171,2,133,250,141,124,211,200};
          NSArray * icondefaultthumbnailo = @[@(770), @(292), @(149)];
         foreground_[MAX(3, checkboxT % 10)] ^= 2;
         handler4 += shirth[4] - icondefaultthumbnailo.count;
         shirth[4] <<= MIN(1, labs((int)handler4));
         handler4 /= MAX(2, icondefaultthumbnailo.count);
      for (int h = 0; h < 2; h++) {
         checkboxT >>= MIN(libzeus4.length, 1);
      }
      if (5 < (5 - libzeus4.length)) {
         checkboxT /= MAX(3, 2 << (MIN(5, libzeus4.length)));
      }
         checkboxT -= libzeus4.length + checkboxT;
      do {
         checkboxT /= MAX(dropdownD.count, 1);
         if (dropdownD.count == 195071) {
            break;
         }
      } while ((dropdownD.count == 195071) && (![dropdownD containsObject:@(checkboxT)]));
      for (int u = 0; u < 2; u++) {
          NSString * libhermesg = [NSString stringWithUTF8String:(char []){112,101,101,108,111,102,102,95,118,95,57,51,0}];
          NSDictionary * collectionS = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){107,95,57,51,95,106,115,111,110,0}],@(9479), nil];
          NSString * handleri = [NSString stringWithUTF8String:(char []){120,95,49,48,95,108,111,103,111,115,0}];
         foreground_[1] >>= MIN(4, collectionS.allValues.count);
      }
      while (dropdownD.count > 4) {
         checkboxT -= 2 - dropdownD.count;
         break;
      }
      for (int i = 0; i < 2; i++) {
         foreground_[MAX(5, checkboxT % 10)] %= MAX(checkboxT, 5);
      }
      for (int p = 0; p < 2; p++) {
         checkboxT += 3;
      }
      for (int i = 0; i < 2; i++) {
         checkboxT >>= MIN(labs(libzeus4.length >> (MIN(labs(1), 5))), 4);
      }
      while (2 > (5 >> (MIN(1, dropdownD.count))) || (dropdownD.count >> (MIN(labs(5), 3))) > 5) {
         checkboxT |= dropdownD.count + 3;
         break;
      }
      telegramT[0] -= libzeus4.length;
      break;
   }
   for (int u = 0; u < 3; u++) {
      NSInteger placeholder2 = sizeof(telegramT) / sizeof(telegramT[0]);
      telegramT[0] &= (int)bggradientl ^ placeholder2;
   }
      bggradientl /= MAX(2 ^ telegramT[0], 3);

  [self sendEventWithName: kDelegatesVideoStartKey  body: @{atPlacementIdKey: placementID,
                                                       atExtraKey: extra.at_jsonString}];
}


- (void)rewardedVideoDidCloseForPlacementID:(NSString *)placementID rewarded:(BOOL)rewarded extra:(NSDictionary *)extra {
      __block double sigmobT = 2.0f;
   __block float gesturesK = 2.0f;
   __block long userG = 0;
   __block float airbnbstarselectedz = 1.0f;
      gesturesK *= 2;
   while (4.14f >= (sigmobT / (MAX(2, 6)))) {
      gesturesK /= MAX(2, 1);
      break;
   }

  
  if ([extra[kATRewardedVideoCallbackExtraNetworkIDKey] integerValue] == 35) {
    dispatch_async(dispatch_get_main_queue(), ^{
      [self sendEventWithName: kDelegatesCloseKey  body: @{atPlacementIdKey: placementID,
                                                           atExtraKey: extra.at_jsonString}];
    });
   for (int n = 0; n < 3; n++) {
      gesturesK -= userG;
   }
       NSString * dropdownB = [NSString stringWithUTF8String:(char []){122,95,55,50,95,98,117,102,102,101,114,113,117,101,117,101,0}];
       unsigned char middlebrightnessj[] = {207,217,142,247,169,127,49,182,114,84,88};
       double iconnewchate = 4.0f;
      if (4 >= iconnewchate) {
         middlebrightnessj[1] >>= MIN(labs((int)iconnewchate), 4);
      }
      while (dropdownB.length == middlebrightnessj[4]) {
         iconnewchate += dropdownB.length;
         break;
      }
          float type_6e = 3.0f;
          NSDictionary * reddownarrowV = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){97,110,100,108,101,95,51,95,56,55,0}],@(292).stringValue, [NSString stringWithUTF8String:(char []){105,110,100,105,114,101,99,116,95,112,95,51,53,0}],@(136), [NSString stringWithUTF8String:(char []){99,97,108,99,117,108,97,116,111,114,95,118,95,55,55,0}],@(612).stringValue, nil];
          char playercommonr[] = {(char)-99,106,(char)-50,76,23,31};
         iconnewchate /= MAX(4, dropdownB.length);
         type_6e *= (int)type_6e;
         type_6e /= MAX(4, reddownarrowV.count);
         playercommonr[2] %= MAX(3 + (int)type_6e, 1);
         type_6e *= reddownarrowV.count * 3;
         middlebrightnessj[6] %= MAX(5, (int)iconnewchate & 3);
          float downf = 5.0f;
         iconnewchate -= (int)downf;
         middlebrightnessj[6] += middlebrightnessj[10] | dropdownB.length;
      do {
          char iconsharefriendsD[] = {(char)-124,(char)-89,80,87};
          double usernameg = 5.0f;
          long moviesI = 0;
          NSString * libavcodecn = [NSString stringWithUTF8String:(char []){104,101,97,100,105,110,103,95,51,95,56,0}];
          long clubB = 1;
         iconnewchate *= middlebrightnessj[7] + dropdownB.length;
         iconsharefriendsD[0] /= MAX(4, iconsharefriendsD[0] >> (MIN(labs(1), 3)));
         usernameg *= iconsharefriendsD[1] * moviesI;
         moviesI *= clubB;
         moviesI <<= MIN(libavcodecn.length, 1);
         clubB ^= 1;
         moviesI -= 5 >> (MIN(3, libavcodecn.length));
         if (iconnewchate == 3606236.f) {
            break;
         }
      } while ((4 <= (iconnewchate * 5) || 5 <= (5 | dropdownB.length)) && (iconnewchate == 3606236.f));
         iconnewchate += 2 * dropdownB.length;
         middlebrightnessj[4] *= (int)iconnewchate % (MAX(dropdownB.length, 6));
      sigmobT += (int)gesturesK;
    return;
  }
  [self sendEventWithName: kDelegatesCloseKey  body: @{atPlacementIdKey: placementID,
                                                       atExtraKey: extra.at_jsonString}];
   if ((userG + 4) > 4) {
      gesturesK -= (int)sigmobT / (MAX(9, (int)gesturesK));
   }

}


- (void)rewardedVideoDidClickForPlacementID:(NSString *)placementID extra:(NSDictionary *)extra {
       char hooksm[] = {123,(char)-61,(char)-82,(char)-83,11,90,(char)-84,(char)-66,(char)-26,(char)-18,112};
    BOOL libjsi7 = NO;
    unsigned char chinasame0[] = {45,36};
   do {
      hooksm[5] -= ((libjsi7 ? 5 : 4) - 2);
      if (libjsi7 ? !libjsi7 : libjsi7) {
         break;
      }
   } while ((libjsi7 ? !libjsi7 : libjsi7) && (libjsi7));
   if (libjsi7) {
       BOOL readN = NO;
       double trash7 = 3.0f;
       unsigned char statisticsinactiveM[] = {204,72};
       char tickedL[] = {3,25,(char)-94,(char)-70,(char)-17,97,(char)-40,(char)-31};
       double predictionv = 3.0f;
         trash7 *= 3 << (MIN(labs(statisticsinactiveM[1]), 5));
          NSInteger znews0 = 2;
          char logouserI[] = {34,(char)-94,(char)-39,70,72,(char)-24,(char)-11,88,(char)-39};
          float model6 = 0.0f;
         long nalytics6 = sizeof(tickedL) / sizeof(tickedL[0]);
         statisticsinactiveM[0] <<= MIN(labs(2 >> (MIN(4, labs(nalytics6)))), 1);
         znews0 |= logouserI[4] ^ 3;
         logouserI[5] >>= MIN(labs((int)model6), 4);
         model6 += logouserI[8] + 2;
       char googleQ[] = {68,(char)-117,(char)-75,(char)-84,94,(char)-118};
       char chinasameJ[] = {13,(char)-16,43,118,(char)-85,(char)-93,(char)-104};
      if (4 < (4 + statisticsinactiveM[1])) {
          unsigned char hiad9[] = {255,6,38,85};
          NSInteger disconnectedi = 4;
          char libmapbufferjniz[] = {(char)-20,108,(char)-82,120,(char)-3,78,(char)-80,60,66,53,(char)-22};
         statisticsinactiveM[MAX(0, disconnectedi % 2)] |= 2;
         NSInteger const_bh = sizeof(hiad9) / sizeof(hiad9[0]);
         hiad9[2] -= const_bh;
         NSInteger ying7 = sizeof(hiad9) / sizeof(hiad9[0]);
         disconnectedi >>= MIN(2, labs((3 + ying7) * libmapbufferjniz[1]));
         NSInteger analytics6 = sizeof(hiad9) / sizeof(hiad9[0]);
         libmapbufferjniz[8] <<= MIN(4, labs(2 | analytics6));
      }
         chinasameJ[0] *= ((int)trash7 * (readN ? 1 : 1));
      while (1 < (predictionv / (MAX(3, tickedL[3]))) || (predictionv / 1) < 4) {
         tickedL[2] &= 2;
         break;
      }
      while (2.36f < (predictionv / (MAX(10, 4.44f))) || (trash7 / (MAX(9, 4.44f))) < 1.17f) {
          NSInteger iconnointernet4 = 2;
         predictionv /= MAX(3 - iconnointernet4, 1);
         break;
      }
      while ((5 + statisticsinactiveM[1]) <= 4 && 5 <= (statisticsinactiveM[1] + tickedL[6])) {
         int l_positionx = sizeof(statisticsinactiveM) / sizeof(statisticsinactiveM[0]);
         statisticsinactiveM[1] ^= googleQ[2] - l_positionx;
         break;
      }
         predictionv /= MAX(4, (3 >> (MIN(4, labs((readN ? 4 : 3))))));
          char yellowredcardL[] = {(char)-26,(char)-37,6,(char)-87,75,61,119,(char)-109,87,(char)-76,34};
          char bdxadsdkJ[] = {(char)-61,39,98,57,(char)-54};
         predictionv += ((int)trash7 % (MAX(1, (readN ? 5 : 4))));
         long product6 = sizeof(yellowredcardL) / sizeof(yellowredcardL[0]);
         yellowredcardL[10] %= MAX((3 + product6) - bdxadsdkJ[4], 3);
         int stationW = sizeof(bdxadsdkJ) / sizeof(bdxadsdkJ[0]);
         bdxadsdkJ[3] -= 3 >> (MIN(5, labs(stationW)));
          double libavcodecA = 3.0f;
          NSDictionary * pangleY = @{[NSString stringWithUTF8String:(char []){99,111,108,115,101,116,95,97,95,57,51,0}]:@(96).stringValue, [NSString stringWithUTF8String:(char []){112,97,114,116,105,99,105,112,97,116,105,111,110,95,111,95,55,0}]:@(364), [NSString stringWithUTF8String:(char []){99,111,109,112,111,110,101,110,116,115,95,53,95,57,55,0}]:@(766)};
          int gradlewN = 2;
         statisticsinactiveM[1] -= ((readN ? 3 : 4) + 3);
         libavcodecA += 2;
         gradlewN += pangleY.count;
         gradlewN += gradlewN ^ 2;
         gradlewN %= MAX(pangleY.count, 1);
         NSInteger gpayD = sizeof(statisticsinactiveM) / sizeof(statisticsinactiveM[0]);
         chinasameJ[1] <<= MIN(labs(gpayD * tickedL[3]), 2);
      if (3 <= (chinasameJ[2] | 1) || (chinasameJ[2] | 1) <= 2) {
          int phonex = 1;
          double orangedownarrowL = 5.0f;
          double dangerT = 2.0f;
         statisticsinactiveM[0] >>= MIN(5, labs(statisticsinactiveM[1] ^ (int)trash7));
         phonex %= MAX(2, (int)orangedownarrowL + phonex);
         orangedownarrowL /= MAX(1, (int)dangerT >> (MIN(5, labs(phonex))));
         dangerT /= MAX(2 >> (MIN(labs((int)orangedownarrowL), 5)), 1);
      }
      do {
         chinasameJ[3] %= MAX((int)trash7 % (MAX(3, statisticsinactiveM[1])), 5);
         if (libjsi7 ? !libjsi7 : libjsi7) {
            break;
         }
      } while ((libjsi7 ? !libjsi7 : libjsi7) && ((chinasameJ[1] + 4) == 4));
          double libavdeviceO = 3.0f;
          unsigned char classes_[] = {32,170,92,207,148};
         int control6 = sizeof(googleQ) / sizeof(googleQ[0]);
         statisticsinactiveM[1] /= MAX(chinasameJ[2] | (3 + control6), 2);
         libavdeviceO += (int)libavdeviceO;
         long footballtrophyZ = sizeof(classes_) / sizeof(classes_[0]);
         classes_[2] %= MAX((int)libavdeviceO / (MAX(footballtrophyZ, 5)), 5);
      libjsi7 = 2 <= trash7;
   }
   for (int a = 0; a < 1; a++) {
       unsigned char sliderO[] = {188,106,13,167,91,192,142,91,111};
         long redirectF = sizeof(sliderO) / sizeof(sliderO[0]);
         sliderO[6] ^= (3 + redirectF) + sliderO[6];
      if (sliderO[1] == sliderO[6]) {
         int styleI = sizeof(sliderO) / sizeof(sliderO[0]);
         sliderO[6] /= MAX(sliderO[2] | styleI, 3);
      }
         NSInteger modityt = sizeof(sliderO) / sizeof(sliderO[0]);
         sliderO[7] %= MAX(2, (1 + modityt) - sliderO[2]);
      hooksm[1] >>= MIN(4, labs(1));
   }
      long promotiono = sizeof(chinasame0) / sizeof(chinasame0[0]);
      libjsi7 = (promotiono & 78) < 3;
   do {
      libjsi7 = !libjsi7 && (chinasame0[1] * 41) < 78;
      if (libjsi7 ? !libjsi7 : libjsi7) {
         break;
      }
   } while ((libjsi7 ? !libjsi7 : libjsi7) && (libjsi7 && hooksm[2] == 2));
   while (2 == (chinasame0[1] & 3) || (chinasame0[1] & 3) == 2) {
      NSInteger typingC = sizeof(chinasame0) / sizeof(chinasame0[0]);
      chinasame0[0] += typingC * 3;
      break;
   }

  [self sendEventWithName: kDelegatesClickKey  body: @{atPlacementIdKey: placementID,
                                                       atExtraKey: extra.at_jsonString}];
}


- (void)rewardedVideoDidFailToPlayForPlacementID:(NSString *)placementID error:(NSError *)error extra:(NSDictionary *)extra {
       NSDictionary * orangeclockP = @{[NSString stringWithUTF8String:(char []){100,95,53,95,110,111,116,0}]:@(747)};
    NSDictionary * basketballiconE = @{[NSString stringWithUTF8String:(char []){112,114,105,110,116,102,95,105,95,50,51,0}]:[NSString stringWithUTF8String:(char []){118,95,53,48,95,115,116,97,116,101,102,117,108,0}]};
   do {
       NSInteger otherJ = 0;
       unsigned char weatherM[] = {63,253,167,99,106,233,249,220,177,174,183,61};
      do {
         otherJ <<= MIN(1, labs(2));
         if (otherJ == 4152681) {
            break;
         }
      } while ((otherJ == 4152681) && (weatherM[7] < otherJ));
      while (otherJ < weatherM[9]) {
         otherJ *= otherJ % (MAX(8, weatherM[9]));
         break;
      }
      otherJ -= basketballiconE.count + 3;
      if (basketballiconE.count == 2430383) {
         break;
      }
   } while ((basketballiconE.count == 2430383) && (2 >= (3 & basketballiconE.allKeys.count) || (basketballiconE.allKeys.count & 3) >= 4));
   if (3 == (basketballiconE.count & 3) && (orangeclockP.count & 3) == 2) {
       unsigned char yingX[] = {105,209,223,230,152,137,194,71,225,51,59};
       unsigned char zhengpianK[] = {57,241,85,28,139,32,225,196,220,244,21,78};
       NSInteger libpangleflipped0 = 5;
      while (1 == (libpangleflipped0 << (MIN(labs(zhengpianK[2]), 3))) && 2 == (libpangleflipped0 << (MIN(labs(1), 2)))) {
          NSDictionary * bodan_ = @{[NSString stringWithUTF8String:(char []){112,95,54,53,95,115,101,97,108,0}]:[NSString stringWithUTF8String:(char []){99,95,51,52,95,111,103,103,105,110,103,0}]};
         int default_rd = sizeof(yingX) / sizeof(yingX[0]);
         int iconnewsshareP = sizeof(zhengpianK) / sizeof(zhengpianK[0]);
         zhengpianK[8] /= MAX(5, default_rd | iconnewsshareP);
         break;
      }
         zhengpianK[1] |= 2 << (MIN(3, labs(libpangleflipped0)));
       unsigned char iconfeedbackn[] = {95,13,106,39,179,178,130,247,234};
      while (4 <= (zhengpianK[3] % 3)) {
         yingX[MAX(libpangleflipped0 % 11, 5)] /= MAX(2, zhengpianK[7]);
         break;
      }
       double catalogz = 1.0f;
       double whiteM = 3.0f;
      while ((iconfeedbackn[2] + catalogz) >= 4 && 3 >= (4 / (MAX(9, iconfeedbackn[2])))) {
          double ewardedE = 5.0f;
          BOOL fastforwardr = YES;
         catalogz /= MAX((int)catalogz, 4);
         ewardedE /= MAX(2, 3 * (int)ewardedE);
         fastforwardr = 3.19f == ewardedE;
         break;
      }
      while ((whiteM + 5.34f) <= 1) {
          int huaweip = 4;
         whiteM -= 3;
         huaweip -= huaweip * 3;
         break;
      }
         NSInteger libsentry3 = sizeof(zhengpianK) / sizeof(zhengpianK[0]);
         iconfeedbackn[5] >>= MIN(1, labs(libsentry3));
      if (2.81f <= (libpangleflipped0 + catalogz) || (2.81f + catalogz) <= 2.69f) {
         libpangleflipped0 ^= zhengpianK[4];
      }
      libpangleflipped0 >>= MIN(orangeclockP.count, 1);
   }

  [self sendEventWithName: kDelegatesFailedToPlayKey  body: @{atPlacementIdKey: placementID,
                                                              atErrMsgKey: error.localizedDescription,
                                                              atExtraKey: extra.at_jsonString }];
}


- (void)didFailToLoadADWithPlacementID:(NSString *)placementID error:(NSError *)error {
       double orientationT = 1.0f;
    BOOL hejio = YES;
   do {
      orientationT /= MAX(3 >> (MIN(labs((int)orientationT), 3)), 5);
      if (orientationT == 1343241.f) {
         break;
      }
   } while (((4.44f / (MAX(5, orientationT))) >= 3 && orientationT >= 4.44f) && (orientationT == 1343241.f));
   if (!hejio) {
       long iconstarx = 3;
       double gpayK = 4.0f;
       unsigned char mailo[] = {103,208,255,121,238,7,66,133};
         gpayK -= (int)gpayK & iconstarx;
         gpayK -= 1 % (MAX((int)gpayK, 3));
         iconstarx >>= MIN(2, labs(iconstarx | (int)gpayK));
      do {
          NSArray * minimizex = [NSArray arrayWithObjects:@(777), @(287), nil];
         mailo[4] += 2 * (int)gpayK;
         if (orientationT == 3544483.f) {
            break;
         }
      } while ((orientationT == 3544483.f) && (1 < (iconstarx ^ mailo[5]) || 3 < (iconstarx ^ 1)));
       int soundw = 5;
       int pauseh = 0;
       NSArray * graphicsE = @[[NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){110,101,119,115,108,101,116,116,101,114,95,55,95,50,48,0}],@(238), [NSString stringWithUTF8String:(char []){115,117,98,115,101,103,109,101,110,116,95,109,95,51,56,0}],@(218).stringValue, nil]];
          NSDictionary * libimagepipelineG = @{[NSString stringWithUTF8String:(char []){72,0}]:[NSString stringWithUTF8String:(char []){52,0}], [NSString stringWithUTF8String:(char []){66,0}]:[NSString stringWithUTF8String:(char []){53,0}], [NSString stringWithUTF8String:(char []){122,0}]:[NSString stringWithUTF8String:(char []){56,0}]};
          int topic1 = 3;
         soundw ^= 1;
         topic1 <<= MIN(5, labs(libimagepipelineG.count ^ 2));
         topic1 <<= MIN(5, labs(2 - topic1));
         topic1 -= 1 >> (MIN(4, libimagepipelineG.count));
          unsigned char libjsijniprofilerv[] = {175,156,45,233,31,24,113,92};
          double vertical6 = 2.0f;
          char predictionwinm[] = {(char)-25,(char)-11,(char)-81,(char)-7};
         mailo[6] -= predictionwinm[1] << (MIN(2, labs((int)vertical6)));
         int readZ = sizeof(libjsijniprofilerv) / sizeof(libjsijniprofilerv[0]);
         libjsijniprofilerv[5] %= MAX(2, readZ);
         long roundH = sizeof(libjsijniprofilerv) / sizeof(libjsijniprofilerv[0]);
         vertical6 -= libjsijniprofilerv[2] << (MIN(3, labs(roundH)));
       unsigned char penaltyshootnogoal6[] = {129,53,20,117,128,8,132,204,60,220,209,44};
      orientationT /= MAX(((hejio ? 3 : 3) | iconstarx), 2);
   }
       unsigned char tooltips0[] = {82,80,203,83,127,10,206,17,116,147,215,132};
       NSInteger turndownt = 3;
       NSArray * sigmob2 = [NSArray arrayWithObjects:@(581), @(693), @(136), nil];
      if ((1 >> (MIN(4, labs(turndownt)))) > 5 && (turndownt >> (MIN(labs(1), 3))) > 2) {
         turndownt *= 4 + sigmob2.count;
      }
      while ((1 & tooltips0[10]) > 4) {
         turndownt += sigmob2.count;
         break;
      }
      if (turndownt <= 1) {
         turndownt *= 3 | turndownt;
      }
      do {
          NSInteger iconarrowrightj = 4;
          int matchdetailbgq = 4;
          unsigned char firebaseL[] = {85,123,218,252,52,111,242,149,239,196,64};
          unsigned char ballO[] = {175,45,95,117,163,216,157,163,123};
          double temperatureE = 5.0f;
         tooltips0[MAX(10, turndownt % 12)] += 2;
         long appsu = sizeof(firebaseL) / sizeof(firebaseL[0]);
         iconarrowrightj %= MAX(5, (2 + appsu) % (MAX(ballO[5], 1)));
         matchdetailbgq %= MAX(3, firebaseL[0]);
         ballO[5] >>= MIN(4, labs((int)temperatureE));
         temperatureE -= iconarrowrightj % (MAX((int)temperatureE, 9));
         if (1231750.f == orientationT) {
            break;
         }
      } while (((tooltips0[3] - sigmob2.count) >= 1 && 5 >= (1 - sigmob2.count)) && (1231750.f == orientationT));
      if (5 > (turndownt % 3) || (turndownt % (MAX(1, tooltips0[2]))) > 3) {
         tooltips0[11] <<= MIN(sigmob2.count, 2);
      }
       NSArray * analyticsm = [NSArray arrayWithObjects:@(556), @(608), @(67), nil];
       NSArray * bggradientj = @[@(333), @(753)];
          double reactnativeultimatelistview4 = 1.0f;
         turndownt >>= MIN(labs(turndownt << (MIN(analyticsm.count, 5))), 3);
         reactnativeultimatelistview4 += (int)reactnativeultimatelistview4;
         turndownt <<= MIN(1, labs(analyticsm.count % 5));
         turndownt &= 3 + sigmob2.count;
      NSInteger transferq = sizeof(tooltips0) / sizeof(tooltips0[0]);
      orientationT += (int)orientationT ^ transferq;
       char brightness6[] = {14,(char)-48,91,(char)-53,50,(char)-36,32,89,(char)-76,(char)-15};
       unsigned char libfbF[] = {251,248,193};
          float sinac = 3.0f;
         int abidetectt = sizeof(brightness6) / sizeof(brightness6[0]);
         int shootyesgoaln = sizeof(libfbF) / sizeof(libfbF[0]);
         brightness6[8] %= MAX(2, abidetectt / (MAX(shootyesgoaln, 5)));
         sinac *= (int)sinac << (MIN(1, labs(1)));
       double downloadedA = 3.0f;
       double gifgoalr = 0.0f;
         gifgoalr += (int)downloadedA;
      for (int f = 0; f < 1; f++) {
         downloadedA *= (int)gifgoalr;
      }
         long privacyJ = sizeof(libfbF) / sizeof(libfbF[0]);
         gifgoalr /= MAX(privacyJ ^ brightness6[4], 1);
      while ((brightness6[8] >> (MIN(labs(2), 5))) <= 5) {
          unsigned char defaultprofilepick[] = {173,44,88,5,244};
          float animationsu = 5.0f;
          unsigned char reactr[] = {239,124,252,44,182,212,109,100,210,155,133,172};
         libfbF[1] %= MAX(1, 2);
         defaultprofilepick[1] -= 2;
         long detailsW = sizeof(defaultprofilepick) / sizeof(defaultprofilepick[0]);
         animationsu *= detailsW;
         reactr[6] *= (int)animationsu;
         break;
      }
      hejio = !hejio && brightness6[3] > 95;

  [self sendEventWithName: kDelegatesLoadFailedKey  body: @{atPlacementIdKey: placementID,
                                                       atErrMsgKey: error.localizedDescription}];
}


+ (instancetype)allocWithZone:(struct _NSZone *)zone {
      __block double slider3 = 4.0f;
   __block long regengp = 2;
   __block float goallogoY = 3.0f;
   while (1 >= regengp) {
       unsigned char humidityB[] = {227,99,240,81,87,32,10,216,72,6,221,10};
      while (humidityB[9] == humidityB[6]) {
         long gift3 = sizeof(humidityB) / sizeof(humidityB[0]);
         humidityB[11] += gift3 / (MAX(3, 6));
         break;
      }
         NSInteger dragcloseL = sizeof(humidityB) / sizeof(humidityB[0]);
         humidityB[10] *= dragcloseL;
      if (4 >= (3 ^ humidityB[5]) || 3 >= (humidityB[2] ^ 3)) {
          NSDictionary * predictionbannerP = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){116,95,57,55,95,109,117,108,116,105,116,97,98,108,101,0}],@(348).stringValue, [NSString stringWithUTF8String:(char []){97,95,49,54,95,100,112,97,103,101,0}],@(653), nil];
          unsigned char shoot1[] = {253,171,150,154,183,153,165,3,152,195,52,220};
         humidityB[8] += predictionbannerP.count << (MIN(labs(humidityB[11]), 4));
         int bggradientV = sizeof(shoot1) / sizeof(shoot1[0]);
         shoot1[0] %= MAX(4, (3 + bggradientV) / (MAX(shoot1[7], 6)));
      }
      slider3 += (int)slider3 | 1;
      break;
   }
   do {
      regengp *= (int)goallogoY;
      if (regengp == 4327110) {
         break;
      }
   } while ((regengp == 4327110) && ((regengp << (MIN(labs(4), 3))) < 5 && 3.68f < (regengp + goallogoY)));

    static dispatch_once_t matchactive;
    dispatch_once(&matchactive, ^{
        _instace = [super allocWithZone:zone];
    });
      regengp &= regengp / 2;
      regengp -= (int)goallogoY - 1;
    return _instace;
       float sportsX = 0.0f;
       char mailW[] = {22,(char)-77,(char)-19,96,(char)-22,12,(char)-97,65};
       NSDictionary * chatbotphoto_ = @{[NSString stringWithUTF8String:(char []){65,0}]:[NSString stringWithUTF8String:(char []){74,0}], [NSString stringWithUTF8String:(char []){73,0}]:[NSString stringWithUTF8String:(char []){49,0}]};
         sportsX /= MAX(2, chatbotphoto_.count);
      do {
         mailW[6] |= 2 ^ (int)sportsX;
         if (slider3 == 3711880.f) {
            break;
         }
      } while ((slider3 == 3711880.f) && (sportsX >= 4));
          NSInteger zhubok = 0;
          char d_titles[] = {(char)-61,100,(char)-25,50,(char)-79,18,80,7};
         zhubok -= chatbotphoto_.count | 1;
         long condensedu = sizeof(d_titles) / sizeof(d_titles[0]);
         zhubok >>= MIN(3, labs((3 + condensedu) - d_titles[1]));
      for (int f = 0; f < 3; f++) {
         mailW[7] *= (int)sportsX;
      }
      do {
          char reactnavigatione[] = {68,(char)-104,8,35,46,97,114,(char)-108};
         sportsX -= 4 * chatbotphoto_.count;
         NSInteger controlsX = sizeof(reactnavigatione) / sizeof(reactnavigatione[0]);
         reactnavigatione[5] *= 1 * controlsX;
         if (292569 == chatbotphoto_.count) {
            break;
         }
      } while ((2 < chatbotphoto_.allValues.count) && (292569 == chatbotphoto_.count));
         sportsX += 1 + chatbotphoto_.allKeys.count;
         sportsX -= chatbotphoto_.count * 5;
      if (3 > chatbotphoto_.allValues.count) {
         mailW[4] %= MAX(chatbotphoto_.allKeys.count, 2);
      }
          NSDictionary * predictionbutton5 = @{[NSString stringWithUTF8String:(char []){107,95,53,57,95,112,117,108,108,117,112,0}]:@(415).stringValue, [NSString stringWithUTF8String:(char []){97,100,100,101,100,95,112,95,55,51,0}]:@(506), [NSString stringWithUTF8String:(char []){115,116,97,116,101,115,95,102,95,49,54,0}]:@(111)};
          char libsentrya[] = {107,(char)-38,(char)-38,(char)-106,64,(char)-127,37,22};
          double react7 = 3.0f;
         sportsX /= MAX(chatbotphoto_.count, 5);
         react7 -= 3 - predictionbutton5.count;
         libsentrya[0] ^= predictionbutton5.allKeys.count | libsentrya[7];
         react7 *= libsentrya[2] >> (MIN(5, labs(2)));
      regengp += regengp % (MAX((int)sportsX, 9));
      regengp += (int)slider3 & 1;
}


- (void)rewardedVideoDidRewardSuccessForPlacemenID:(NSString *)placementID extra:(NSDictionary *)extra {
       BOOL smallbrightnessR = YES;
    NSString * settings0 = [NSString stringWithUTF8String:(char []){98,105,108,97,116,101,114,97,108,95,110,95,55,55,0}];
    long long_3zc = 4;
   for (int k = 0; k < 1; k++) {
      long_3zc <<= MIN(2, settings0.length);
   }
      long_3zc %= MAX(settings0.length, 1);
       unsigned char googlev[] = {139,190,100,219,179,165,228,189};
       NSString * iconmegaphoneH = [NSString stringWithUTF8String:(char []){120,95,50,54,95,99,111,100,101,99,112,114,105,118,0}];
       unsigned char iconcurrentmatchR[] = {4,203,186,137};
          char a_managerw[] = {93,(char)-42,60,78,(char)-116,99,(char)-116,(char)-38,(char)-126,(char)-74,113,39};
         NSInteger elementsS = sizeof(iconcurrentmatchR) / sizeof(iconcurrentmatchR[0]);
         googlev[0] <<= MIN(1, labs(googlev[0] - (2 + elementsS)));
         int feedback8 = sizeof(a_managerw) / sizeof(a_managerw[0]);
         a_managerw[6] |= 3 << (MIN(5, labs(feedback8)));
      if ((iconmegaphoneH.length + googlev[6]) > 4 || 4 > (googlev[6] + iconmegaphoneH.length)) {
      }
         iconcurrentmatchR[2] |= iconcurrentmatchR[3];
      for (int x = 0; x < 3; x++) {
         iconcurrentmatchR[2] *= iconmegaphoneH.length;
      }
         googlev[7] |= iconmegaphoneH.length;
         iconcurrentmatchR[2] ^= iconmegaphoneH.length;
      do {
         long libreactperfloggerjniS = sizeof(googlev) / sizeof(googlev[0]);
         iconcurrentmatchR[3] &= libreactperfloggerjniS / (MAX(iconcurrentmatchR[3], 10));
         if (smallbrightnessR ? !smallbrightnessR : smallbrightnessR) {
            break;
         }
      } while ((iconmegaphoneH.length <= 1) && (smallbrightnessR ? !smallbrightnessR : smallbrightnessR));
      if (5 == (googlev[2] / 3) && 2 == (3 / (MAX(10, googlev[2])))) {
          NSArray * componente = [NSArray arrayWithObjects:@(7385), nil];
          NSArray * libglogR = @[@(766), @(478)];
          char scrollviewU[] = {(char)-108,(char)-7,31,(char)-26,90,(char)-20,(char)-18};
         scrollviewU[6] &= scrollviewU[6] - libglogR.count;
      }
      long_3zc &= settings0.length;
       char loginL[] = {(char)-99,3,(char)-84,49,85,(char)-52,(char)-120,(char)-90};
       unsigned char showO[] = {161,227,133};
       NSInteger stringw = 5;
         showO[0] ^= stringw / (MAX(3, 2));
      for (int r = 0; r < 1; r++) {
         NSInteger runtime3 = sizeof(loginL) / sizeof(loginL[0]);
         showO[2] >>= MIN(3, labs(runtime3));
      }
      if (2 < (loginL[0] % 4)) {
         NSInteger footballfiledlayoutO = sizeof(loginL) / sizeof(loginL[0]);
         stringw -= footballfiledlayoutO;
      }
      for (int e = 0; e < 1; e++) {
         showO[MAX(stringw % 3, 0)] &= stringw / 1;
      }
       unsigned char statisticsinactiveL[] = {47,246,209,12,198,105,2,239,64,59};
       unsigned char forwardJ[] = {171,61};
          NSDictionary * tickO = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){98,95,53,95,111,116,105,102,105,99,97,116,105,111,110,0}],@(255).stringValue, [NSString stringWithUTF8String:(char []){117,99,104,97,114,95,112,95,56,49,0}],@(762).stringValue, nil];
          int basketballtrophyd = 5;
          NSString * diceN = [NSString stringWithUTF8String:(char []){98,97,99,107,101,110,100,95,120,95,57,49,0}];
         loginL[0] %= MAX(4, tickO.allValues.count);
         basketballtrophyd >>= MIN(2, labs(4 * tickO.count));
         basketballtrophyd |= diceN.length;
         basketballtrophyd |= diceN.length;
      if (4 > (5 * stringw) || 5 > (statisticsinactiveL[2] * stringw)) {
         int buttons = sizeof(loginL) / sizeof(loginL[0]);
         statisticsinactiveL[9] /= MAX(forwardJ[1] & buttons, 2);
      }
      do {
         long teamH = sizeof(forwardJ) / sizeof(forwardJ[0]);
         loginL[4] ^= 3 * teamH;
         if (smallbrightnessR ? !smallbrightnessR : smallbrightnessR) {
            break;
         }
      } while ((smallbrightnessR ? !smallbrightnessR : smallbrightnessR) && (1 > (loginL[2] % 4)));
      if (2 < stringw) {
         int baiduads_ = sizeof(statisticsinactiveL) / sizeof(statisticsinactiveL[0]);
         loginL[3] >>= MIN(labs(baiduads_), 2);
      }
      stringw &= settings0.length;
   while (!smallbrightnessR) {
      smallbrightnessR = settings0.length >= 28;
      break;
   }
   while (!smallbrightnessR) {
      long_3zc ^= settings0.length / 3;
      break;
   }

  
  [self sendEventWithName: kDelegatesRewardedKey  body: @{atPlacementIdKey: placementID,
                                                       atExtraKey: extra.at_jsonString}];
}


- (void)rewardedVideoDidEndPlayingForPlacementID:(NSString *)placementID extra:(NSDictionary *)extra {
       float invite9 = 5.0f;
    BOOL linkq = NO;
       NSInteger yingp = 2;
          long showmorer = 3;
          NSString * basketballtrophy4 = [NSString stringWithUTF8String:(char []){100,111,99,108,105,115,116,95,115,95,53,52,0}];
         yingp ^= 3;
         showmorer >>= MIN(4, labs(showmorer ^ basketballtrophy4.length));
         showmorer -= basketballtrophy4.length;
       double phonesharer = 5.0f;
       double minij = 1.0f;
          char loadingspinnerm[] = {16,93};
         int libcrashsdkS = sizeof(loadingspinnerm) / sizeof(loadingspinnerm[0]);
         phonesharer /= MAX(4, (int)minij | libcrashsdkS);
      invite9 /= MAX(3 << (MIN(labs(yingp), 3)), 4);
      linkq = linkq;
      linkq = linkq;

  [self sendEventWithName: kDelegatesVideoEndKey  body: @{atPlacementIdKey: placementID,
                                                       atExtraKey: extra.at_jsonString}];
}


@end
