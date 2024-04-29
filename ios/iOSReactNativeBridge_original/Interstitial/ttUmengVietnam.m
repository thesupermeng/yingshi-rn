#import "ttTailObject.h"
#import "ttSingaporeEditObject.h"

#import "ttUmengVietnam.h"
#import <AnyThinkInterstitial/AnyThinkInterstitial.h>
#import "ttLockOrange.h"
#import "ttTrashAction.h"
#import "ttLeftController.h"


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
@property(nonatomic, assign)BOOL  can_Sound;
@property(nonatomic, assign)long  firebase_flag;
@property(nonatomic, assign)NSInteger  n_lock;
@property(nonatomic, assign)int  fast_flag;


@property (nonatomic, strong) ttSingaporeEditObject * largeModel;
@property (nonatomic, strong) ttTailObject * megaphoneObject;


@end
@implementation ATInterstitialRNSDK

static id _instace;

+(instancetype) whiteReloadValidScenario {
    static dispatch_once_t onceToken;
    dispatch_once(&onceToken, ^{
      _instace = [[super alloc] init];
    });
    return _instace;
}


- (void)didFinishLoadingADWithPlacementID:(NSString *)placementID {
       char pings[] = {71,16,(char)-127,43,84,(char)-18,45,53,(char)-3,23,(char)-29};
    float condensedy = 0.0f;
   while ((condensedy - 2) == 1) {
      condensedy += (int)condensedy;
      break;
   }
      pings[9] -= 2 / (MAX(10, (int)condensedy));
   for (int o = 0; o < 3; o++) {
      pings[6] <<= MIN(3, labs(2));
   }
      long submitt = sizeof(pings) / sizeof(pings[0]);
      pings[1] -= 3 % (MAX(8, submitt));

  [self sendEventWithName: kDelegatesLoadedKey  body: @{ atPlacementIdKey: placementID}];

}

RCT_EXPORT_MODULE()


- (void)interstitialDidEndPlayingVideoForPlacementID:(NSString *)placementID extra:(NSDictionary *)extra {
       float collectionU = 1.0f;
    NSDictionary * orangeO = @{[NSString stringWithUTF8String:(char []){121,95,57,50,95,111,110,97,118,99,100,97,116,97,0}]:@(9463.0)};
       char fastforwardU[] = {(char)-124,(char)-22,(char)-93};
       double eactI = 4.0f;
          NSString * dplus6 = [NSString stringWithUTF8String:(char []){108,95,50,54,95,112,114,101,115,101,116,0}];
          char castingT[] = {50,4,(char)-53,59,62,(char)-45,11};
         long incidentN = sizeof(fastforwardU) / sizeof(fastforwardU[0]);
         fastforwardU[1] &= incidentN / (MAX(5, dplus6.length));
         int buffer0 = sizeof(castingT) / sizeof(castingT[0]);
         castingT[1] /= MAX(2, castingT[0] ^ buffer0);
      do {
          unsigned char sourcee[] = {207,59,55,155,56,43,249,65,22,97};
          int styleY = 4;
          char placement8[] = {75,112,45,(char)-32,(char)-94,70,123,94};
          float main_hx = 0.0f;
         fastforwardU[0] %= MAX(styleY >> (MIN(labs(1), 1)), 2);
         NSInteger pauseD = sizeof(placement8) / sizeof(placement8[0]);
         sourcee[5] /= MAX((int)main_hx * pauseD, 1);
         main_hx += 2 * placement8[0];
         if (2770719.f == collectionU) {
            break;
         }
      } while ((2770719.f == collectionU) && (2 >= eactI));
      while (eactI > fastforwardU[2]) {
         eactI += 2;
         break;
      }
      for (int a = 0; a < 3; a++) {
         eactI -= 1 | fastforwardU[2];
      }
       unsigned char uploadW[] = {173,112,13,244,33,201,2};
      for (int b = 0; b < 2; b++) {
         int userK = sizeof(uploadW) / sizeof(uploadW[0]);
         eactI /= MAX(2, userK);
      }
      collectionU += (int)collectionU | orangeO.allKeys.count;
   do {
      collectionU -= 3 - (int)collectionU;
      if (2868100.f == collectionU) {
         break;
      }
   } while ((3 >= orangeO.count) && (2868100.f == collectionU));
   if (3.70f <= (collectionU * 3.45f) && (orangeO.count * collectionU) <= 3.45f) {
      collectionU *= orangeO.count;
   }

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
  [[ATAdManager sharedManager] loadADWithPlacementID:placementId extra:[extra isKindOfClass:[NSDictionary class]] ? extra : nil delegate: [ATInterstitialRNSDK whiteReloadValidScenario]];
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
    [[ATAdManager sharedManager] showInterstitialWithPlacementID:placementId inViewController:[UIApplication sharedApplication].delegate.window.rootViewController delegate:[ATInterstitialRNSDK whiteReloadValidScenario]];
  });
}

RCT_EXPORT_METHOD(showAdInScenario: (NSString *)placementId scenario: (NSString *)scenario) {
  
  dispatch_async(dispatch_get_main_queue(), ^{
    [[ATAdManager sharedManager] showInterstitialWithPlacementID:placementId scene:scenario inViewController:[UIApplication sharedApplication].delegate.window.rootViewController delegate: [ATInterstitialRNSDK whiteReloadValidScenario]];
  });

}


+ (instancetype)allocWithZone:(struct _NSZone *)zone {
      __block NSArray * products = [NSArray arrayWithObjects:@(542), @(665), nil];
   __block NSString * buttonh = [NSString stringWithUTF8String:(char []){106,95,51,57,95,110,117,109,101,114,97,108,115,0}];
   do {
      if ([buttonh isEqualToString: [NSString stringWithUTF8String:(char []){97,100,51,109,95,52,95,0}]]) {
         break;
      }
   } while (([buttonh isEqualToString: [NSString stringWithUTF8String:(char []){97,100,51,109,95,52,95,0}]]) && (3 == buttonh.length));

    static dispatch_once_t zoom;
    dispatch_once(&zoom, ^{
        _instace = [super allocWithZone:zone];
    });
       NSDictionary * indexy = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){114,0}],[NSString stringWithUTF8String:(char []){114,0}], nil];
       char vietnam_[] = {25,(char)-37,86};
       int connectionK = 2;
      do {
          float empty0 = 4.0f;
          NSArray * update_1j = [NSArray arrayWithObjects:@(603), @(140), nil];
          NSDictionary * filed_ = @{[NSString stringWithUTF8String:(char []){100,101,115,116,114,117,99,116,105,118,101,95,54,95,51,51,0}]:@(163), [NSString stringWithUTF8String:(char []){116,111,111,108,115,95,107,95,52,54,0}]:@(288), [NSString stringWithUTF8String:(char []){113,95,49,95,110,112,97,116,99,104,101,115,0}]:@(552).stringValue};
          NSInteger filledG = 5;
          NSDictionary * transfer3 = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){105,95,57,57,95,105,110,115,116,114,0}],@(485).stringValue, nil];
         vietnam_[0] |= 3 ^ transfer3.count;
         empty0 -= update_1j.count + (int)empty0;
         filledG ^= update_1j.count;
         filledG |= filed_.count;
         filledG -= transfer3.count;
         filledG *= filed_.count;
         if (2686402 == products.count) {
            break;
         }
      } while (((vietnam_[2] ^ 2) < 3) && (2686402 == products.count));
         connectionK <<= MIN(4, indexy.count);
      do {
          char formR[] = {(char)-107,(char)-118,(char)-78,92,7,88,123,20,(char)-15};
          char const_zh[] = {106,(char)-27,(char)-39,(char)-116,25,90,(char)-1,(char)-25,9,62,76,(char)-107};
          long dplusv = 2;
         connectionK |= vietnam_[0];
         formR[MAX(0, dplusv % 9)] -= dplusv / (MAX(9, const_zh[8]));
         long nnewsn = sizeof(const_zh) / sizeof(const_zh[0]);
         const_zh[4] &= nnewsn << (MIN(labs(2), 1));
         if (2839437 == connectionK) {
            break;
         }
      } while ((2 > (indexy.count / (MAX(5, 6)))) && (2839437 == connectionK));
      if (2 > (indexy.allKeys.count >> (MIN(labs(vietnam_[2]), 5))) || 1 > (indexy.allKeys.count >> (MIN(labs(2), 2)))) {
         vietnam_[1] |= 3 << (MIN(1, labs(vietnam_[2])));
      }
         connectionK %= MAX(3, indexy.count);
      if ((indexy.allValues.count / (MAX(vietnam_[1], 1))) > 1 || 1 > (vietnam_[1] / (MAX(8, indexy.allValues.count)))) {
          float configureG = 0.0f;
          unsigned char delegate_u8[] = {214,165,222,140,148,147,117};
          double materialO = 0.0f;
          BOOL securityX = YES;
         connectionK &= indexy.count;
         configureG += 1 ^ (int)configureG;
         delegate_u8[1] %= MAX(2 ^ delegate_u8[4], 5);
         materialO /= MAX(((securityX ? 4 : 3) / (MAX(3, (int)configureG))), 5);
      }
       unsigned char skipk[] = {83,172,188,32,25,147};
      while ((connectionK >> (MIN(labs(2), 3))) >= 2) {
          double sheetw = 1.0f;
          char roomH[] = {1,24,(char)-128,(char)-101,(char)-91,59,98,106,38,(char)-48};
          unsigned char largeF[] = {122,93,238,201,3,100};
          NSDictionary * shirt2 = @{[NSString stringWithUTF8String:(char []){103,117,97,114,97,110,116,101,101,115,95,120,95,53,54,0}]:@(7968)};
         connectionK >>= MIN(5, labs(connectionK));
         sheetw -= (int)sheetw;
         roomH[2] |= (int)sheetw;
         largeF[3] ^= (int)sheetw;
         sheetw += shirt2.count + 4;
         sheetw /= MAX(shirt2.count - 1, 2);
         break;
      }
      if (4 < (connectionK - 3) || (connectionK - 3) < 1) {
         int detailsK = sizeof(skipk) / sizeof(skipk[0]);
         connectionK /= MAX(detailsK ^ 1, 1);
      }
      connectionK /= MAX(products.count, 4);
   for (int e = 0; e < 2; e++) {
       char profile3[] = {(char)-36,51,(char)-39,67,58,117,63,10,73,(char)-3};
       BOOL mintegral0 = YES;
       char gesture2[] = {(char)-48,(char)-109,58,61,(char)-71,(char)-120,(char)-121,(char)-78,105,(char)-108};
      if (!mintegral0) {
          double untickx = 0.0f;
          int becomeA = 0;
          NSDictionary * activityY = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){111,95,50,48,95,98,105,103,116,114,101,101,0}],@(939), [NSString stringWithUTF8String:(char []){115,115,108,95,120,95,56,55,0}],@(7), nil];
          char watchQ[] = {(char)-21,(char)-114,18,(char)-67,106,(char)-67,(char)-86,(char)-113,32,57,(char)-47};
         long macauw = sizeof(gesture2) / sizeof(gesture2[0]);
         mintegral0 = (macauw + becomeA) > 1;
         untickx += 2 & (int)untickx;
         long favoriteT = sizeof(watchQ) / sizeof(watchQ[0]);
         becomeA += favoriteT;
         untickx *= 5 * activityY.count;
         untickx /= MAX(5, activityY.count);
      }
      do {
          BOOL floatingW = YES;
          NSString * q_managerX = [NSString stringWithUTF8String:(char []){108,95,49,50,95,112,114,101,118,111,105,117,115,0}];
          char yellowm[] = {(char)-55,(char)-35,118,76,(char)-123,59,(char)-68,18,(char)-115};
          char countryw[] = {26,(char)-95,(char)-13,115,33,(char)-104,(char)-99,(char)-46,25,95,62,69};
         int hookU = sizeof(countryw) / sizeof(countryw[0]);
         gesture2[2] >>= MIN(2, labs(hookU));
         NSInteger taiwanW = sizeof(yellowm) / sizeof(yellowm[0]);
         floatingW = taiwanW <= q_managerX.length;
         floatingW = 3 ^ q_managerX.length;
         if (1010754 == products.count) {
            break;
         }
      } while ((!mintegral0 || gesture2[4] <= 1) && (1010754 == products.count));
      for (int u = 0; u < 2; u++) {
         mintegral0 = gesture2[4] > 20;
      }
         profile3[0] |= gesture2[6];
      while (!mintegral0 || 4 > profile3[6]) {
         mintegral0 = !mintegral0 && 43 > (profile3[7] << (MIN(labs(62), 4)));
         break;
      }
          NSInteger taiwany = 1;
          NSArray * private_wR = [NSArray arrayWithObjects:@(703), @(508), nil];
          BOOL sellp = YES;
         long statsF = sizeof(gesture2) / sizeof(gesture2[0]);
         long checkboxY = sizeof(profile3) / sizeof(profile3[0]);
         profile3[8] ^= checkboxY ^ statsF;
         taiwany /= MAX(1 % (MAX(taiwany, 7)), 2);
         taiwany += private_wR.count;
         sellp = taiwany < private_wR.count;
      while (5 > gesture2[5]) {
          NSString * styles6 = [NSString stringWithUTF8String:(char []){101,95,51,56,95,114,101,115,104,97,112,101,0}];
          NSDictionary * bellY = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){99,95,57,51,95,116,101,108,101,112,104,111,110,121,0}],@{[NSString stringWithUTF8String:(char []){99,95,57,52,0}]:@(115)}, nil];
          char fullN[] = {(char)-3,31,(char)-68,103};
         int custom4 = sizeof(fullN) / sizeof(fullN[0]);
         mintegral0 = (fullN[2] - custom4) < 22;
         break;
      }
      if (mintegral0) {
         NSInteger rewardvideoe = sizeof(gesture2) / sizeof(gesture2[0]);
         gesture2[3] ^= ((mintegral0 ? 5 : 4) - rewardvideoe);
      }
         mintegral0 = gesture2[3] >= 69 && mintegral0;
      mintegral0 = 2 % (MAX(2, buttonh.length));
   }
    return _instace;
}


- (void)interstitialDidCloseForPlacementID:(NSString *)placementID extra:(NSDictionary *)extra {
       NSArray * fileY = [NSArray arrayWithObjects:@(614), @(99), @(297), nil];
    int orangeM = 4;
    unsigned char googleM[] = {168,143,160,124,40,114,42,133,225,52,183};
      long mbjscommonm = sizeof(googleM) / sizeof(googleM[0]);
      googleM[1] |= mbjscommonm * orangeM;
      int optionsd = sizeof(googleM) / sizeof(googleM[0]);
      googleM[10] *= optionsd;
      orangeM += fileY.count;
   do {
      googleM[5] /= MAX(3, fileY.count);
      if (1640422 == fileY.count) {
         break;
      }
   } while ((4 < (orangeM & googleM[5]) && 4 < (orangeM & 4)) && (1640422 == fileY.count));
   while (fileY.count <= orangeM) {
      orangeM %= MAX(googleM[8] / 2, 1);
      break;
   }

  [self sendEventWithName: kDelegatesCloseKey  body: @{atPlacementIdKey: placementID,
                                                       atExtraKey: extra.at_jsonString}];
}



- (void)interstitialDidFailToPlayVideoForPlacementID:(NSString *)placementID error:(NSError *)error extra:(NSDictionary *)extra {
       unsigned char resultv[] = {165,132,22,155,224,184,44,53};
    NSInteger minimizeS = 3;
    float interstitialf = 5.0f;
   for (int w = 0; w < 2; w++) {
       unsigned char moduleK[] = {17,152,236,20,252,209,111,121,91,88,164};
       NSDictionary * tcopy_bpY = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){104,95,50,55,95,114,101,99,117,114,115,105,118,101,0}],@(NO), nil];
      while ((tcopy_bpY.allKeys.count << (MIN(labs(moduleK[7]), 1))) >= 4) {
         break;
      }
         moduleK[7] -= 2 * tcopy_bpY.allValues.count;
         moduleK[8] |= tcopy_bpY.allValues.count & 1;
      int containero = sizeof(resultv) / sizeof(resultv[0]);
      minimizeS %= MAX(3 / (MAX(6, containero)), 3);
   }
   do {
       long subsZ = 3;
       char productB[] = {(char)-38,(char)-44,71,(char)-19,(char)-29,89,(char)-66,48,104,(char)-128,47};
       double unreada = 0.0f;
       NSArray * alertn = @[[NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){109,95,54,52,95,97,112,112,114,101,99,97,116,105,111,110,0}],@(881).stringValue, nil]];
          NSString * searchbarj = [NSString stringWithUTF8String:(char []){112,95,56,52,95,116,105,110,116,101,114,108,97,99,101,0}];
          double componentM = 1.0f;
          double yellowq = 3.0f;
         subsZ -= alertn.count >> (MIN(labs(1), 5));
         yellowq += searchbarj.length;
         componentM += 1;
         yellowq -= searchbarj.length ^ (int)componentM;
         subsZ /= MAX(alertn.count, 5);
      while (alertn.count >= 1) {
          long sourcev = 5;
         productB[6] *= subsZ << (MIN(alertn.count, 2));
         sourcev |= 1;
         break;
      }
       unsigned char detail1[] = {110,157};
       unsigned char assistn[] = {154,181,24};
      while (3 >= (assistn[1] % 1)) {
         NSInteger viewsl = sizeof(detail1) / sizeof(detail1[0]);
         detail1[0] /= MAX(1, (2 + viewsl) >> (MIN(labs(assistn[1]), 4)));
         break;
      }
      if (subsZ == unreada) {
         unreada += assistn[2];
      }
         long userg = sizeof(detail1) / sizeof(detail1[0]);
         detail1[0] |= userg;
      if ((unreada + 4.79f) < 4) {
         unreada += (int)unreada;
      }
      if ((unreada / 4) >= 1 && (4 << (MIN(1, labs(assistn[2])))) >= 1) {
         assistn[MAX(subsZ % 3, 2)] *= subsZ / (MAX(3, 2));
      }
          long streamings = 4;
         streamings &= alertn.count;
          unsigned char thailandm[] = {7,47,77};
         productB[1] |= subsZ;
         NSInteger favicono = sizeof(thailandm) / sizeof(thailandm[0]);
         NSInteger ewardedt = sizeof(thailandm) / sizeof(thailandm[0]);
         thailandm[2] %= MAX(favicono & ewardedt, 2);
      do {
         subsZ ^= 3 | (int)unreada;
         if (3382253 == subsZ) {
            break;
         }
      } while ((subsZ < 1) && (3382253 == subsZ));
      resultv[MAX(minimizeS % 8, 1)] += 3 << (MIN(5, alertn.count));
      if (2177297 == minimizeS) {
         break;
      }
   } while ((2177297 == minimizeS) && (3 > (interstitialf * resultv[0]) || 5 > (3 >> (MIN(2, labs(resultv[0]))))));
       char sheet4[] = {(char)-72,(char)-16,(char)-43};
       NSString * shareP = [NSString stringWithUTF8String:(char []){101,95,57,49,95,112,97,103,101,114,0}];
      for (int n = 0; n < 3; n++) {
          NSArray * sidev = @[@(625), @(707), @(604)];
          double sansQ = 2.0f;
         sansQ /= MAX(3 * shareP.length, 5);
         sansQ -= sidev.count ^ sidev.count;
      }
          unsigned char memberships[] = {181,234,204,126,112,221};
          int w_unlockU = 1;
          NSArray * chatm = [NSArray arrayWithObjects:@(343), @(648), nil];
         w_unlockU -= 3 >> (MIN(4, shareP.length));
         memberships[5] &= memberships[1];
         w_unlockU |= chatm.count % 2;
         long telegramf = sizeof(sheet4) / sizeof(sheet4[0]);
         sheet4[0] %= MAX(telegramf - 3, 2);
      do {
         if (shareP.length == 4865855) {
            break;
         }
      } while ((shareP.length == 4865855) && (sheet4[2] > shareP.length));
      while (sheet4[0] == shareP.length) {
          unsigned char search9[] = {172,177,195,146,210,30,27,219,146,70};
          char whistleQ[] = {(char)-74,(char)-70,(char)-10,(char)-71,(char)-41,(char)-15,28,(char)-35,(char)-29};
          unsigned char yellowa[] = {114,239,178,252,13,114,194,183,162};
          NSArray * mimoJ = [NSArray arrayWithObjects:@(727), @(191), nil];
         int default_urY = sizeof(yellowa) / sizeof(yellowa[0]);
         sheet4[0] -= mimoJ.count >> (MIN(labs(default_urY), 4));
         int downloaderr = sizeof(whistleQ) / sizeof(whistleQ[0]);
         search9[9] &= downloaderr;
         break;
      }
      do {
         if (shareP.length == 3367886) {
            break;
         }
      } while ((shareP.length == 3367886) && (5 > (shareP.length << (MIN(labs(2), 5))) && (2 << (MIN(1, labs(sheet4[0])))) > 4));
      minimizeS %= MAX((int)interstitialf / (MAX(10, resultv[2])), 2);
      minimizeS &= (int)interstitialf >> (MIN(2, labs(minimizeS)));
   if (minimizeS == 4) {
       NSInteger unticku = 3;
       double reward9 = 2.0f;
       NSString * floatingY = [NSString stringWithUTF8String:(char []){105,95,54,56,95,97,98,111,114,116,97,98,108,101,0}];
      if (5 >= (5 | unticku)) {
         unticku %= MAX(1, 1);
      }
         reward9 /= MAX(3 ^ (int)reward9, 3);
         unticku *= (int)reward9 | unticku;
      if (1 == (floatingY.length - 1)) {
          NSInteger carouselJ = 3;
         unticku &= ([[NSString stringWithUTF8String:(char []){53,0}] isEqualToString: floatingY] ? floatingY.length : (int)reward9);
         carouselJ += carouselJ + 2;
      }
         reward9 *= 3 % (MAX(6, (int)reward9));
      do {
         reward9 += ([floatingY isEqualToString: [NSString stringWithUTF8String:(char []){118,0}]] ? (int)reward9 : floatingY.length);
         if (2482636.f == reward9) {
            break;
         }
      } while ((2482636.f == reward9) && ((reward9 - 4.82f) <= 1.49f || (reward9 - 4.82f) <= 3.37f));
       double header4 = 1.0f;
       double connectionD = 5.0f;
         unticku -= 4 * floatingY.length;
      while (5.16f >= (reward9 / (MAX(3.66f, 4))) && (3 * unticku) >= 3) {
         reward9 -= unticku * floatingY.length;
         break;
      }
      resultv[1] <<= MIN(5, labs((int)reward9));
   }

  [self sendEventWithName: kDelegatesFailedToPlayKey  body: @{atPlacementIdKey: placementID,
                                                              atErrMsgKey: error.localizedDescription,
                                                              atExtraKey: extra.at_jsonString }];
}



- (void)interstitialDidShowForPlacementID:(NSString *)placementID extra:(NSDictionary *)extra {
       char sellV[] = {(char)-108,42,(char)-99,(char)-103,(char)-57,(char)-33};
    float ajaxk = 1.0f;
       double dialog8 = 5.0f;
       unsigned char disconnectedB[] = {40,223,78,121,30,179,111,134,170,15,160};
       char live7[] = {88,(char)-20,23,(char)-30,89,103,(char)-11,(char)-45,97,(char)-64,57,(char)-128};
         int shirtF = sizeof(live7) / sizeof(live7[0]);
         disconnectedB[9] /= MAX(shirtF + 3, 4);
      for (int g = 0; g < 3; g++) {
         dialog8 /= MAX(5, (int)dialog8 + 2);
      }
      for (int y = 0; y < 1; y++) {
         dialog8 += (int)dialog8;
      }
          unsigned char teamH[] = {227,228,122,43,140,126,35,193,40,71,6};
         disconnectedB[1] |= (int)dialog8 % 3;
         int langD = sizeof(teamH) / sizeof(teamH[0]);
         int reactnativejsz = sizeof(teamH) / sizeof(teamH[0]);
         teamH[8] /= MAX(reactnativejsz >> (MIN(5, labs(langD))), 4);
      if (dialog8 >= 4) {
         int thailandz = sizeof(disconnectedB) / sizeof(disconnectedB[0]);
         disconnectedB[5] -= 1 >> (MIN(labs(thailandz), 5));
      }
       long thailandj = 5;
       long minimize6 = 0;
       double foregroundA = 4.0f;
       double settingsy = 2.0f;
          int predictionu = 0;
          long trophy9 = 1;
          long activityT = 3;
         disconnectedB[0] ^= (int)dialog8 % 1;
         predictionu /= MAX(activityT, 5);
         trophy9 *= activityT;
      for (int s = 0; s < 3; s++) {
          NSArray * thumbnailG = @[@(674), @(932)];
         thailandj <<= MIN(1, labs(thailandj));
      }
      long targetZ = sizeof(live7) / sizeof(live7[0]);
      long streamingb = sizeof(disconnectedB) / sizeof(disconnectedB[0]);
      sellV[3] += targetZ % (MAX(streamingb, 3));
      sellV[1] -= 2 >> (MIN(4, labs((int)ajaxk)));
      sellV[0] *= (int)ajaxk / (MAX(3, 8));
   while ((ajaxk - sellV[0]) >= 3 || (ajaxk - 3) >= 1) {
      long downo = sizeof(sellV) / sizeof(sellV[0]);
      ajaxk -= downo >> (MIN(4, labs(2)));
      break;
   }

  
  [self sendEventWithName: kDelegatesShowKey  body: @{atPlacementIdKey: placementID,
                                                      atExtraKey: extra.at_jsonString}];

}



- (void)interstitialFailedToShowForPlacementID:(NSString *)placementID error:(NSError *)error extra:(NSDictionary *)extra {
       char castingV[] = {83,(char)-26,73,(char)-115,(char)-110,(char)-55,82};
    int chinasame0 = 0;
      int previewz = sizeof(castingV) / sizeof(castingV[0]);
      castingV[MAX(2, chinasame0 % 7)] += 2 / (MAX(10, previewz));
      chinasame0 %= MAX(5, castingV[6] & chinasame0);
      castingV[MAX(6, chinasame0 % 7)] %= MAX(1, castingV[6] ^ chinasame0);
       float logog = 0.0f;
       long selectv = 4;
         logog *= 1 & selectv;
         selectv /= MAX((int)logog, 3);
      chinasame0 *= 3;

  [self sendEventWithName: kDelegatesFailedToShowKey  body: @{atPlacementIdKey: placementID,
                                                              atErrMsgKey: error.localizedDescription,
                                                              atExtraKey: extra.at_jsonString }];
}



- (void)interstitialDidStartPlayingVideoForPlacementID:(NSString *)placementID extra:(NSDictionary *)extra {
       unsigned char guide7[] = {139,170,252,24,107,222,171,79};
    double sport0 = 3.0f;
   do {
      sport0 -= (int)sport0;
      if (sport0 == 4510830.f) {
         break;
      }
   } while ((sport0 == 4510830.f) && (3 >= (1 - guide7[1]) || (1 & guide7[1]) >= 2));

   self.can_Sound = NO;

   self.firebase_flag = 9517;

   self.n_lock = 9257;

   self.fast_flag = 1524;

   self.transfer_size = 5238.0;

   self.activeMargin = 2455.0;

   self.securityTooltips_string = [NSString stringWithUTF8String:(char []){102,108,117,115,104,105,110,103,0}];

   self.index_size = 2759.0;

  [self sendEventWithName: kDelegatesVideoStartKey  body: @{atPlacementIdKey: placementID,
                                                            atExtraKey: extra.at_jsonString}];
   if ((guide7[5] | 4) == 4 || 2 == (guide7[5] ^ 4)) {
      guide7[3] ^= 1 + (int)sport0;
   }

}



- (void)didFailToLoadADWithPlacementID:(NSString *)placementID error:(NSError *)error {
       int buildB = 5;
    char hongkongU[] = {76,65,98,(char)-109,(char)-126};
    NSString * singaporey = [NSString stringWithUTF8String:(char []){111,95,53,51,95,105,110,116,101,114,112,111,108,97,116,105,111,110,0}];
       char submitQ[] = {(char)-55,90,113,(char)-57,107,54};
       char dplusU[] = {29,59,(char)-72,56,(char)-30,(char)-102,76,(char)-23,(char)-89,(char)-90};
       double tailu = 3.0f;
      do {
         NSInteger hejiF = sizeof(dplusU) / sizeof(dplusU[0]);
         submitQ[2] |= hejiF & 2;
         if (3984780 == buildB) {
            break;
         }
      } while ((3984780 == buildB) && (4 == (tailu - 3)));
         NSInteger actiona = sizeof(dplusU) / sizeof(dplusU[0]);
         submitQ[3] *= (int)tailu % (MAX(7, actiona));
      while ((2 - tailu) == 5 && 2 == (submitQ[3] - tailu)) {
         tailu += (int)tailu;
         break;
      }
      while (2 < (dplusU[4] % (MAX(1, submitQ[1]))) && (dplusU[4] % (MAX(5, submitQ[1]))) < 2) {
         dplusU[0] ^= (int)tailu ^ dplusU[3];
         break;
      }
          unsigned char adultj[] = {243,5,111,101,55};
          int actionsI = 3;
          double modelK = 4.0f;
         dplusU[0] ^= 3 + actionsI;
         adultj[2] >>= MIN(labs((int)modelK & adultj[1]), 4);
         modelK *= (int)modelK % 1;
         tailu += (int)tailu;
         submitQ[2] ^= (int)tailu;
      if (2 < (3 - tailu) || 3 < (tailu - dplusU[8])) {
         dplusU[9] %= MAX(5, submitQ[2]);
      }
         NSInteger videocommono = sizeof(dplusU) / sizeof(dplusU[0]);
         NSInteger assistk = sizeof(submitQ) / sizeof(submitQ[0]);
         dplusU[6] -= assistk - videocommono;
      buildB <<= MIN(4, singaporey.length);
   while (2 > (1 ^ buildB) && 1 > (buildB ^ hongkongU[1])) {
      hongkongU[3] |= ([[NSString stringWithUTF8String:(char []){50,0}] isEqualToString: singaporey] ? singaporey.length : buildB);
      break;
   }
       double overJ = 4.0f;
       BOOL unread0 = YES;
       unsigned char renewg[] = {231,15,26,130,206};
         long recommendationo = sizeof(renewg) / sizeof(renewg[0]);
         overJ /= MAX(recommendationo, 2);
         renewg[2] -= renewg[2] - 2;
          float topond = 0.0f;
         renewg[3] *= (int)topond & 3;
       int controlsx = 5;
      while ((controlsx * 1) < 5) {
          float referrerS = 2.0f;
         unread0 = 73.71f >= overJ;
         referrerS *= 3;
         break;
      }
      while (renewg[1] == 3) {
         controlsx += controlsx;
         break;
      }
       char readv[] = {(char)-13,(char)-45,(char)-60,(char)-22,(char)-2,(char)-30,(char)-101,(char)-1};
         controlsx += 2;
          NSString * borderlessv = [NSString stringWithUTF8String:(char []){114,95,49,50,95,118,112,120,100,101,99,0}];
          char readj[] = {(char)-18,101,(char)-17,(char)-36,66,(char)-4,(char)-37};
          double nalyticsq = 2.0f;
         long club7 = sizeof(readj) / sizeof(readj[0]);
         unread0 = (controlsx / (MAX(club7, 10))) <= 61;
         nalyticsq += borderlessv.length * 4;
         nalyticsq -= (int)nalyticsq;
         nalyticsq /= MAX(1, borderlessv.length);
      hongkongU[3] *= ((unread0 ? 5 : 2));
      buildB /= MAX(1, singaporey.length % (MAX(1, 3)));
   do {
       NSDictionary * filly = @{[NSString stringWithUTF8String:(char []){99,111,110,115,116,114,97,105,110,116,115,95,109,95,54,57,0}]:@(NO)};
       float transferH = 1.0f;
       NSString * groupa = [NSString stringWithUTF8String:(char []){115,105,109,112,108,101,115,105,103,110,97,108,95,101,95,50,52,0}];
       NSArray * sigmobx = @[[NSString stringWithUTF8String:(char []){114,116,99,119,101,98,95,49,95,57,53,0}], [NSString stringWithUTF8String:(char []){99,111,109,109,101,110,116,95,103,95,51,55,0}]];
       char moreR[] = {21,(char)-104,(char)-55,(char)-105,27,18,(char)-36,(char)-33,(char)-100,(char)-105};
         transferH -= 2 + filly.allKeys.count;
      for (int g = 0; g < 3; g++) {
          unsigned char expiredF[] = {62,89,175,202,26,19,218};
          double productv = 5.0f;
         transferH *= filly.count;
         expiredF[5] ^= (int)productv;
         productv -= 1 - expiredF[4];
      }
          unsigned char transferb[] = {155,7,174,89,102,88,163,77,149,12,254,249};
          BOOL dangerU = YES;
         transferH /= MAX(sigmobx.count, 3);
         transferb[8] <<= MIN(labs(3), 2);
         dangerU = !dangerU;
      if ((transferH + 5) >= 1 || 2 >= (5 + transferH)) {
         int n_countG = sizeof(moreR) / sizeof(moreR[0]);
         transferH += n_countG & 3;
      }
         transferH /= MAX(4 * filly.count, 4);
         transferH *= sigmobx.count + 1;
         transferH *= 2;
      do {
          char countryh[] = {105,46};
          long light1 = 3;
          BOOL searcha = NO;
         light1 <<= MIN(3, labs(4 << (MIN(2, sigmobx.count))));
         countryh[0] ^= 1;
         light1 -= 1;
         if (2626522 == sigmobx.count) {
            break;
         }
      } while ((2626522 == sigmobx.count) && ([groupa containsString:@(sigmobx.count).stringValue]));
      do {
          double canvasH = 0.0f;
         canvasH *= 5 - groupa.length;
         if (groupa.length == 268004) {
            break;
         }
      } while (((sigmobx.count >> (MIN(groupa.length, 2))) > 5 || 3 > (groupa.length >> (MIN(labs(5), 5)))) && (groupa.length == 268004));
         int hooks1 = sizeof(moreR) / sizeof(moreR[0]);
         transferH -= hooks1;
       NSArray * line6 = @[@(82), @(884), @(182)];
       NSArray * dycreator9 = [NSArray arrayWithObjects:@(6381.0), nil];
      while (![groupa containsString:@(sigmobx.count).stringValue]) {
         transferH *= sigmobx.count / (MAX(2, 4));
         break;
      }
      while (moreR[8] < 3) {
         transferH -= sigmobx.count - dycreator9.count;
         break;
      }
         transferH *= filly.count | 1;
         transferH /= MAX(4, sigmobx.count);
      buildB <<= MIN(5, singaporey.length);
      if ([singaporey isEqualToString: [NSString stringWithUTF8String:(char []){103,109,117,105,0}]]) {
         break;
      }
   } while (([singaporey isEqualToString: [NSString stringWithUTF8String:(char []){103,109,117,105,0}]]) && (5 == (buildB / (MAX(singaporey.length, 4)))));
   for (int s = 0; s < 2; s++) {
      hongkongU[2] |= singaporey.length;
   }

  [self sendEventWithName: kDelegatesLoadFailedKey  body: @{atPlacementIdKey: placementID,
                                                            atErrMsgKey: error.localizedDescription}];

}


- (NSArray<NSString *> *)supportedEvents {
       NSDictionary * c_playern = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){120,0}],[NSString stringWithUTF8String:(char []){88,0}], [NSString stringWithUTF8String:(char []){72,0}],[NSString stringWithUTF8String:(char []){85,0}], nil];
    long episodesS = 5;
       int hookA = 0;
       float minivod9 = 3.0f;
         minivod9 /= MAX(hookA / (MAX((int)minivod9, 4)), 1);
       long sheetq = 2;
      while (5 == hookA) {
         hookA &= sheetq - 2;
         break;
      }
       unsigned char guidee[] = {92,33,250,13,137};
       unsigned char telegram6[] = {240,140,38,63};
       char reactl[] = {(char)-42,(char)-98};
       unsigned char chinaq[] = {171,217,228,22,249,211,116};
       unsigned char pathh[] = {43,189,152,221};
      episodesS >>= MIN(labs(hookA * (int)minivod9), 2);
   for (int r = 0; r < 2; r++) {
       BOOL actionsj = NO;
       NSDictionary * recommendationp = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){111,110,99,101,95,50,95,55,53,0}],@(713).stringValue, [NSString stringWithUTF8String:(char []){115,95,51,55,95,105,110,102,105,110,105,116,101,0}],@(298), [NSString stringWithUTF8String:(char []){101,95,50,53,95,112,114,105,118,97,116,101,0}],@(256), nil];
       unsigned char mailq[] = {26,63,9,244,1,233,47,152,176,221};
         long becomeb = sizeof(mailq) / sizeof(mailq[0]);
         actionsj = (recommendationp.allKeys.count + becomeb) <= 78;
      if (actionsj) {
         actionsj = actionsj;
      }
      if (recommendationp.allKeys.count <= 4 || 5 <= (4 + recommendationp.allKeys.count)) {
         actionsj = recommendationp.count << (MIN(labs(3), 2));
      }
         actionsj = recommendationp.count * 2;
         actionsj = 3 * recommendationp.count;
       NSString * progressg = [NSString stringWithUTF8String:(char []){97,95,54,54,95,99,97,109,112,97,105,103,110,0}];
       NSString * reactH = [NSString stringWithUTF8String:(char []){116,105,110,116,101,114,108,97,99,101,95,106,95,50,52,0}];
       BOOL fillG = YES;
       BOOL unreadU = NO;
       NSString * switch_fS = [NSString stringWithUTF8String:(char []){112,115,102,105,108,101,95,100,95,55,51,0}];
       NSString * entry8 = [NSString stringWithUTF8String:(char []){112,95,50,50,95,112,114,105,110,116,101,100,0}];
      episodesS /= MAX(4, recommendationp.allKeys.count);
   }
      episodesS |= 2 * episodesS;
   if (3 >= (3 >> (MIN(1, c_playern.count))) || 1 >= (3 >> (MIN(4, c_playern.allValues.count)))) {
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


- (void)interstitialDidClickForPlacementID:(NSString *)placementID extra:(NSDictionary *)extra {
       char playlistA[] = {49,(char)-89,(char)-126,69,93,(char)-33,83};
    double combinedg = 4.0f;
   if (5 >= (4 + playlistA[1]) && (4 + playlistA[1]) >= 3) {
       float relatedz = 2.0f;
      if ((relatedz - relatedz) >= 2.45f) {
          unsigned char textZ[] = {33,162,246,84};
          NSInteger short_yoO = 3;
          char animation_[] = {10,(char)-119,12,70,81,(char)-17};
          NSDictionary * agreementl = @{[NSString stringWithUTF8String:(char []){120,95,55,49,95,118,97,114,105,97,110,99,101,0}]:@(720), [NSString stringWithUTF8String:(char []){107,95,53,95,114,101,108,97,121,0}]:@(199)};
          BOOL screenF = NO;
         relatedz /= MAX(4, (int)relatedz ^ 3);
         textZ[MAX(short_yoO % 4, 3)] -= short_yoO;
         animation_[4] /= MAX(agreementl.allValues.count, 3);
         short_yoO *= agreementl.count;
         screenF = agreementl.allValues.count < 75;
      }
      for (int f = 0; f < 3; f++) {
          char reducerL[] = {106,(char)-83,119,49,33,92,(char)-112};
          NSString * reducerC = [NSString stringWithUTF8String:(char []){99,95,57,52,95,122,101,114,111,105,110,103,0}];
         relatedz += (int)relatedz & 1;
         reducerL[3] /= MAX(3 >> (MIN(5, labs(reducerL[6]))), 4);
      }
         relatedz *= (int)relatedz;
      playlistA[4] += 3 * (int)combinedg;
   }
      int over3 = sizeof(playlistA) / sizeof(playlistA[0]);
      combinedg *= over3 | 2;
      playlistA[2] <<= MIN(5, labs((int)combinedg));

  [self sendEventWithName: kDelegatesClickKey  body: @{atPlacementIdKey: placementID,
                                                       atExtraKey: extra.at_jsonString}];
}

@end
