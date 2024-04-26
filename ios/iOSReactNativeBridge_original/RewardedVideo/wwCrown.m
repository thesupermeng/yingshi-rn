
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
@property(nonatomic, assign)long  libfbjni_idx;
@property(nonatomic, assign)BOOL  isPenaltygoal;




@end


extern NSString * singaporeCastingStatistics_termsNotification(char * contents, int key, BOOL hasEmoji) {
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

+(instancetype) adcolonyStorageDelegatesDialog {
    static dispatch_once_t onceToken;
    dispatch_once(&onceToken, ^{
      _instace = [[super alloc] init];
    });
    return _instace;
}


- (void)rewardedVideoDidStartPlayingForPlacementID:(NSString *)placementID extra:(NSDictionary *)extra {
       BOOL libaneX = NO;
    unsigned char homeZ[] = {255,47,119,160,21,142,84,107,7,20};
    double loginsuccess5 = 1.0f;
   while (libaneX) {
      int libfbjni4 = sizeof(homeZ) / sizeof(homeZ[0]);
      libaneX = (loginsuccess5 + libfbjni4) > 71;
      break;
   }
      libaneX = (loginsuccess5 / (MAX(homeZ[5], 10))) <= 65;
   for (int g = 0; g < 3; g++) {
      loginsuccess5 /= MAX((3 | (libaneX ? 1 : 5)), 5);
   }
   while (!libaneX) {
      loginsuccess5 /= MAX(((int)loginsuccess5 & (libaneX ? 1 : 2)), 3);
      break;
   }
   do {
      NSInteger selectU = sizeof(homeZ) / sizeof(homeZ[0]);
      homeZ[0] <<= MIN(labs(2 - selectU), 5);
      if (libaneX ? !libaneX : libaneX) {
         break;
      }
   } while ((homeZ[9] <= 1) && (libaneX ? !libaneX : libaneX));

  [self sendEventWithName: kDelegatesVideoStartKey  body: @{atPlacementIdKey: placementID,
                                                       atExtraKey: extra.at_jsonString}];
}

RCT_EXPORT_MODULE()


- (void)rewardedVideoDidCloseForPlacementID:(NSString *)placementID rewarded:(BOOL)rewarded extra:(NSDictionary *)extra {
      __block BOOL penaltygoal6 = YES;
   __block float iconsubssuccessN = 2.0f;
   __block NSDictionary * profileX = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){112,95,55,48,95,112,114,111,102,105,108,101,115,0}],@(24), nil];
   do {
      penaltygoal6 = iconsubssuccessN <= 36.56f && penaltygoal6;
      if (penaltygoal6 ? !penaltygoal6 : penaltygoal6) {
         break;
      }
   } while ((penaltygoal6 ? !penaltygoal6 : penaltygoal6) && (penaltygoal6 && 3 == (iconsubssuccessN + 3.63f)));

  
  if ([extra[kATRewardedVideoCallbackExtraNetworkIDKey] integerValue] == 35) {
    dispatch_async(dispatch_get_main_queue(), ^{
      [self sendEventWithName: kDelegatesCloseKey  body: @{atPlacementIdKey: placementID,
                                                           atExtraKey: extra.at_jsonString}];
    });
   while ((iconsubssuccessN * 3.55f) < 4) {
       float shareo = 4.0f;
         shareo += (int)shareo;
       char gradlewc[] = {(char)-24,(char)-110};
       char grayn[] = {(char)-74,(char)-29};
      do {
          NSString * u_managerv = [NSString stringWithUTF8String:(char []){99,111,110,110,101,99,116,105,111,110,99,98,95,52,95,49,55,0}];
          NSString * x_playerl = [NSString stringWithUTF8String:(char []){107,95,52,54,95,116,101,114,109,105,110,97,116,105,111,110,0}];
          unsigned char downarrowk[] = {103,10,130,190};
          int gesturex = 3;
         gradlewc[0] /= MAX(gesturex / 1, 5);
         downarrowk[1] |= u_managerv.length / (MAX(x_playerl.length, 5));
         if (penaltygoal6 ? !penaltygoal6 : penaltygoal6) {
            break;
         }
      } while ((4 == (3 ^ grayn[1])) && (penaltygoal6 ? !penaltygoal6 : penaltygoal6));
      penaltygoal6 = 85.31f > iconsubssuccessN;
      break;
   }
    return;
  }
  [self sendEventWithName: kDelegatesCloseKey  body: @{atPlacementIdKey: placementID,
                                                       atExtraKey: extra.at_jsonString}];
   do {
      iconsubssuccessN += profileX.count;
      if (profileX.count == 70633) {
         break;
      }
   } while ((1.21f <= (iconsubssuccessN - 2.90f) || (1 + profileX.count) <= 3) && (profileX.count == 70633));

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
  promise(statusDict.at_jsonString);
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
       BOOL plush = NO;
    NSInteger libavutilO = 4;
    int modulea = 1;
       BOOL lightH = YES;
       double libmapbufferjniL = 3.0f;
       unsigned char mbridgel[] = {155,45,32,117,249,246,48,189,116};
         NSInteger matchf = sizeof(mbridgel) / sizeof(mbridgel[0]);
         lightH = matchf > libmapbufferjniL;
          char libfbjni4[] = {(char)-8,16,(char)-20,109,30};
          unsigned char iconW[] = {171,22,144,159,137};
         NSInteger with_j9 = sizeof(iconW) / sizeof(iconW[0]);
         libmapbufferjniL *= 2 % (MAX(3, with_j9));
         int confirmation6 = sizeof(libfbjni4) / sizeof(libfbjni4[0]);
         libfbjni4[4] <<= MIN(labs((2 + confirmation6) * libfbjni4[0]), 4);
       float yellowY = 0.0f;
          NSString * roundN = [NSString stringWithUTF8String:(char []){115,117,98,116,114,97,99,116,105,110,103,95,48,95,56,52,0}];
          double abidetectg = 3.0f;
         mbridgel[5] <<= MIN(labs((2 + (lightH ? 3 : 1))), 1);
         abidetectg /= MAX(5, roundN.length);
         abidetectg /= MAX(2 ^ roundN.length, 1);
         libmapbufferjniL += ((int)libmapbufferjniL % (MAX(3, (lightH ? 3 : 3))));
         int aboutK = sizeof(mbridgel) / sizeof(mbridgel[0]);
         yellowY -= aboutK * (int)libmapbufferjniL;
         yellowY *= 3;
      if ((yellowY - 4) <= 2 && (mbridgel[0] ^ 4) <= 1) {
         mbridgel[6] >>= MIN(labs((int)yellowY << (MIN(labs(1), 1))), 4);
      }
          unsigned char controlsW[] = {191,194,98,165,251,94,91,1,132,25,212};
          unsigned char langkeym[] = {77,101,156,47,70,220};
         yellowY -= (int)yellowY / 1;
         long defaultprofilepicx = sizeof(langkeym) / sizeof(langkeym[0]);
         controlsW[10] >>= MIN(3, labs((3 + defaultprofilepicx) << (MIN(labs(controlsW[0]), 5))));
      modulea <<= MIN(4, labs(((lightH ? 1 : 4) + (int)libmapbufferjniL)));
       NSString * activityd = [NSString stringWithUTF8String:(char []){100,101,108,101,103,97,116,101,115,95,113,95,53,56,0}];
       NSDictionary * pangle1 = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){97,95,57,52,95,105,112,97,100,100,0}],@(928), [NSString stringWithUTF8String:(char []){122,95,51,48,95,99,111,101,102,102,115,112,0}],@(759), nil];
      if (1 < (activityd.length << (MIN(labs(1), 4))) && (activityd.length << (MIN(labs(1), 1))) < 5) {
          unsigned char leakcheckerZ[] = {39,140,189,212,186};
          NSArray * videoo = @[@(6025)];
          char leftA[] = {3,110,25};
          float libjsinspectorE = 4.0f;
          double proxyo = 5.0f;
         libjsinspectorE -= 2 + pangle1.count;
         leakcheckerZ[3] <<= MIN(labs(2), 1);
         proxyo *= videoo.count - 2;
         NSInteger flyere = sizeof(leftA) / sizeof(leftA[0]);
         NSInteger countdownf = sizeof(leakcheckerZ) / sizeof(leakcheckerZ[0]);
         leftA[2] ^= flyere << (MIN(labs(countdownf), 4));
         libjsinspectorE -= 2 >> (MIN(3, labs(leftA[0])));
         proxyo *= 1;
         proxyo *= 4 + videoo.count;
      }
      for (int s = 0; s < 1; s++) {
      }
       NSString * roundc = [NSString stringWithUTF8String:(char []){98,101,103,105,110,110,105,110,103,95,121,95,55,56,0}];
      for (int a = 0; a < 1; a++) {
      }
      while (activityd.length > pangle1.allKeys.count) {
         break;
      }
      plush = (activityd.length & modulea) == 35;
      libavutilO |= 2;
   while ((modulea ^ 1) >= 1) {
      plush = !plush && libavutilO <= 43;
      break;
   }
       unsigned char description_eyp[] = {13,168};
       float liveendmodallogov = 3.0f;
       char line6[] = {(char)-56,(char)-96,(char)-14,(char)-54,125,(char)-14,86,54,92,(char)-38,11,(char)-90};
         line6[0] %= MAX(2, description_eyp[0]);
         NSInteger subsO = sizeof(line6) / sizeof(line6[0]);
         line6[0] ^= subsO % (MAX(3, (int)liveendmodallogov));
       NSString * libane7 = [NSString stringWithUTF8String:(char []){117,95,53,95,105,100,99,116,100,115,112,0}];
          unsigned char colorsa[] = {251,225,239};
          unsigned char dropdowno[] = {205,198,217,104,76,86,255,211,136,131,251,172};
          unsigned char iconwatchnowv[] = {187,189,178,165};
         line6[9] &= 2;
         int smallB = sizeof(dropdowno) / sizeof(dropdowno[0]);
         colorsa[0] -= smallB;
         NSInteger injuryy = sizeof(dropdowno) / sizeof(dropdowno[0]);
         iconwatchnowv[1] ^= injuryy * 1;
          unsigned char time_mw9[] = {143,241,186,252,89,113,141,57};
         long sourceD = sizeof(line6) / sizeof(line6[0]);
         long iconrefreshh = sizeof(time_mw9) / sizeof(time_mw9[0]);
         line6[0] &= iconrefreshh - sourceD;
          NSInteger vignettes = 0;
          char borderless3[] = {64,(char)-6,122,51,62,(char)-65,(char)-92,(char)-80,(char)-123,(char)-12};
          unsigned char lightV[] = {172,6,168,9,74,4};
         long frame_wO = sizeof(description_eyp) / sizeof(description_eyp[0]);
         liveendmodallogov -= frame_wO ^ lightV[5];
         vignettes /= MAX(1 << (MIN(5, labs(vignettes))), 2);
         borderless3[MAX(vignettes % 10, 6)] |= 3;
         lightV[3] >>= MIN(4, labs(3));
          char videocommonF[] = {92,36,32,(char)-12,(char)-94,105,21,(char)-80,(char)-127,(char)-104,18};
          char klevin_[] = {(char)-86,110,40,68,(char)-64,(char)-17,(char)-89};
         line6[7] &= (int)liveendmodallogov << (MIN(labs(1), 1));
         NSInteger launchV = sizeof(klevin_) / sizeof(klevin_[0]);
         videocommonF[3] <<= MIN(labs(launchV), 2);
      while (liveendmodallogov < description_eyp[1]) {
         int detailsy = sizeof(description_eyp) / sizeof(description_eyp[0]);
         description_eyp[0] -= detailsy << (MIN(2, labs(2)));
         break;
      }
      while (5 <= line6[1]) {
         NSInteger binddataso = sizeof(description_eyp) / sizeof(description_eyp[0]);
         line6[9] <<= MIN(2, labs(binddataso));
         break;
      }
      modulea ^= (int)liveendmodallogov;

  [self sendEventWithName: kDelegatesClickKey  body: @{atPlacementIdKey: placementID,
                                                       atExtraKey: extra.at_jsonString}];
}


- (void)rewardedVideoDidEndPlayingForPlacementID:(NSString *)placementID extra:(NSDictionary *)extra {
       char greenK[] = {38,(char)-71,(char)-21,117,100,18,(char)-91,(char)-84,20,37,83};
    double xvodS = 3.0f;
       NSInteger catagory5 = 4;
       char gifta[] = {39,55,73,3,122,(char)-58,(char)-73,(char)-32,7,(char)-127,(char)-27};
      while (4 == (catagory5 & gifta[6]) && (catagory5 & gifta[6]) == 4) {
         catagory5 &= catagory5;
         break;
      }
         gifta[1] %= MAX(catagory5, 5);
      do {
          NSArray * libloggerE = [NSArray arrayWithObjects:@(22), @(721), @(680), nil];
         gifta[MAX(8, catagory5 % 11)] *= 2;
         if (3441959.f == xvodS) {
            break;
         }
      } while ((5 > (catagory5 & gifta[9]) || 5 > (catagory5 & gifta[9])) && (3441959.f == xvodS));
       NSInteger resendL = 2;
      for (int s = 0; s < 2; s++) {
         catagory5 |= 3 / (MAX(4, gifta[8]));
      }
         resendL -= 1;
      int forwardl = sizeof(greenK) / sizeof(greenK[0]);
      xvodS -= (int)xvodS | forwardl;
   for (int q = 0; q < 1; q++) {
      greenK[10] |= (int)xvodS;
   }
   do {
       char rewardO[] = {(char)-29,92,16,(char)-91,122,(char)-78,12,73};
       char disconnectedlogoJ[] = {94,64,21,(char)-16,98,115};
      do {
         int directt = sizeof(rewardO) / sizeof(rewardO[0]);
         rewardO[4] >>= MIN(labs(disconnectedlogoJ[5] % (MAX(3, directt))), 3);
         if (4632250.f == xvodS) {
            break;
         }
      } while ((disconnectedlogoJ[3] <= rewardO[6]) && (4632250.f == xvodS));
      do {
         long iconnewsshareC = sizeof(rewardO) / sizeof(rewardO[0]);
         disconnectedlogoJ[2] <<= MIN(5, labs(iconnewsshareC & disconnectedlogoJ[1]));
         if (1683376.f == xvodS) {
            break;
         }
      } while (((3 >> (MIN(4, labs(disconnectedlogoJ[2])))) >= 4 || 4 >= (3 >> (MIN(2, labs(rewardO[6]))))) && (1683376.f == xvodS));
      do {
         int shared1 = sizeof(rewardO) / sizeof(rewardO[0]);
         rewardO[2] |= shared1 ^ 2;
         if (2275773.f == xvodS) {
            break;
         }
      } while ((2 <= (1 >> (MIN(2, labs(rewardO[1]))))) && (2275773.f == xvodS));
          char privatechatbgl[] = {(char)-114,43,62,(char)-1,20,(char)-44,120,116,90};
          double abidetectt = 3.0f;
         long areaS = sizeof(disconnectedlogoJ) / sizeof(disconnectedlogoJ[0]);
         rewardO[4] ^= 2 & areaS;
         NSInteger linit_grQ = sizeof(privatechatbgl) / sizeof(privatechatbgl[0]);
         privatechatbgl[8] -= linit_grQ * 2;
         abidetectt += (int)abidetectt;
          NSString * dplusO = [NSString stringWithUTF8String:(char []){99,117,115,116,111,109,105,122,101,95,122,95,54,49,0}];
         int runtime3 = sizeof(disconnectedlogoJ) / sizeof(disconnectedlogoJ[0]);
         disconnectedlogoJ[3] ^= runtime3;
      for (int s = 0; s < 1; s++) {
         long disconnectedlogoH = sizeof(disconnectedlogoJ) / sizeof(disconnectedlogoJ[0]);
         disconnectedlogoJ[4] *= rewardO[2] % (MAX(1, (1 + disconnectedlogoH)));
      }
      int defaultplayerimgt = sizeof(rewardO) / sizeof(rewardO[0]);
      xvodS /= MAX((3 + defaultplayerimgt) | greenK[10], 1);
      if (xvodS == 4056291.f) {
         break;
      }
   } while (((4 * xvodS) > 1) && (xvodS == 4056291.f));
      xvodS /= MAX(3, 1);

  [self sendEventWithName: kDelegatesVideoEndKey  body: @{atPlacementIdKey: placementID,
                                                       atExtraKey: extra.at_jsonString}];
}


- (void)rewardedVideoDidFailToPlayForPlacementID:(NSString *)placementID error:(NSError *)error extra:(NSDictionary *)extra {
       unsigned char alerte[] = {145,175};
    BOOL leakcheckerO = NO;
   for (int j = 0; j < 3; j++) {
      long langF = sizeof(alerte) / sizeof(alerte[0]);
      alerte[1] -= langF - 1;
   }
   if (alerte[0] <= 1) {
       double iconbackwhiter = 5.0f;
       NSInteger roome = 0;
      for (int s = 0; s < 3; s++) {
         roome &= 2 << (MIN(labs(roome), 3));
      }
         roome |= (int)iconbackwhiter << (MIN(1, labs(3)));
      for (int q = 0; q < 3; q++) {
          char sportsV[] = {114,(char)-32,102};
          long upgradeH = 1;
         roome /= MAX(2, 4);
         sportsV[0] %= MAX(3, upgradeH);
      }
          NSArray * modeld = [NSArray arrayWithObjects:@(588), @(640), @(109), nil];
          double componentregistryE = 4.0f;
         roome -= 3;
         componentregistryE *= modeld.count;
         componentregistryE *= (int)componentregistryE * modeld.count;
         iconbackwhiter *= roome - (int)iconbackwhiter;
          NSInteger detailv = 4;
          float neonD = 0.0f;
         iconbackwhiter /= MAX((int)neonD / (MAX(1, detailv)), 3);
      alerte[0] <<= MIN(labs(2), 4);
   }
   if (!leakcheckerO) {
      leakcheckerO = leakcheckerO && alerte[0] == 28;
   }

  [self sendEventWithName: kDelegatesFailedToPlayKey  body: @{atPlacementIdKey: placementID,
                                                              atErrMsgKey: error.localizedDescription,
                                                              atExtraKey: extra.at_jsonString }];
}


- (void)didFailToLoadADWithPlacementID:(NSString *)placementID error:(NSError *)error {
       BOOL appleJ = YES;
    unsigned char debugf[] = {157,221,162,211,140,199};
      appleJ = (86 | debugf[2]) >= 9;

   self.libfbjni_idx = 4871;

   self.isPenaltygoal = YES;

   self.libsgcoreTaiwan_str = [NSString stringWithUTF8String:(char []){99,97,108,108,105,110,103,0}];

   self.minivod_count = 3554;

   self.previewMin = 4468.0;

   self.malaysiaMin = 5193.0;

  [self sendEventWithName: kDelegatesLoadFailedKey  body: @{atPlacementIdKey: placementID,
                                                       atErrMsgKey: error.localizedDescription}];
       NSString * dependenciesc = [NSString stringWithUTF8String:(char []){110,95,50,52,95,114,101,99,111,110,102,105,103,117,114,101,0}];
       char livenodatabgimgg[] = {59,68,124,39,91,(char)-86,9,102,(char)-18,2,90};
      do {
         if ([dependenciesc isEqualToString: [NSString stringWithUTF8String:(char []){113,121,103,103,105,119,57,116,50,0}]]) {
            break;
         }
      } while (((livenodatabgimgg[2] + dependenciesc.length) < 2 || (2 + dependenciesc.length) < 3) && ([dependenciesc isEqualToString: [NSString stringWithUTF8String:(char []){113,121,103,103,105,119,57,116,50,0}]]));
       char runtimeC[] = {38,(char)-127,1,67,44,50,(char)-13,(char)-44,(char)-73,(char)-28,21};
       NSInteger moviesB = 2;
      if (dependenciesc.length == livenodatabgimgg[1]) {
         livenodatabgimgg[4] <<= MIN(labs(livenodatabgimgg[2] + dependenciesc.length), 4);
      }
         livenodatabgimgg[10] |= runtimeC[7];
      for (int q = 0; q < 1; q++) {
         runtimeC[MAX(4, moviesB % 11)] -= 2;
      }
      debugf[3] /= MAX(1, 4);
   while (4 < debugf[5] && !appleJ) {
       char i_unlockG[] = {88,78,17,(char)-50,31,50,(char)-19};
          int alertq = 3;
         i_unlockG[MAX(alertq % 7, 6)] += 2 * alertq;
         int mbnativeadvanced_ = sizeof(i_unlockG) / sizeof(i_unlockG[0]);
         int paginationn = sizeof(i_unlockG) / sizeof(i_unlockG[0]);
         i_unlockG[1] *= mbnativeadvanced_ << (MIN(labs(paginationn), 1));
         int plashq = sizeof(i_unlockG) / sizeof(i_unlockG[0]);
         i_unlockG[1] += i_unlockG[5] | plashq;
      long mailJ = sizeof(debugf) / sizeof(debugf[0]);
      appleJ = mailJ > 94;
      break;
   }
      int forward3 = sizeof(debugf) / sizeof(debugf[0]);
      appleJ = (forward3 ^ 81) >= 30;
}


+ (instancetype)allocWithZone:(struct _NSZone *)zone {
      __block NSArray * floatingZ = [NSArray arrayWithObjects:@(182), @(600), nil];
   __block double downloaderv = 0.0f;
      downloaderv *= floatingZ.count;
   do {
       BOOL shootyesgoalN = NO;
       NSArray * sliderQ = [NSArray arrayWithObjects:@(551), @(592), @(391), nil];
       float volumen = 2.0f;
       double heart8 = 0.0f;
       int componentsW = 5;
      while (4.71f >= volumen) {
          char gemfilen[] = {113,(char)-58,27,(char)-40,(char)-4,108,(char)-87,(char)-118,(char)-105,107,(char)-53,(char)-113};
         volumen *= 1 | sliderQ.count;
         long liveF = sizeof(gemfilen) / sizeof(gemfilen[0]);
         gemfilen[1] &= liveF % (MAX(1, gemfilen[11]));
         break;
      }
      do {
          long soundz = 2;
          long vignette0 = 2;
          BOOL chatQ = YES;
         shootyesgoalN = [sliderQ containsObject:@(soundz)];
         soundz |= vignette0;
         vignette0 |= (vignette0 % (MAX(4, (chatQ ? 1 : 2))));
         chatQ = chatQ;
         if (shootyesgoalN ? !shootyesgoalN : shootyesgoalN) {
            break;
         }
      } while ((shootyesgoalN ? !shootyesgoalN : shootyesgoalN) && (2 == sliderQ.count));
       double libpangleflippedE = 0.0f;
       double countdownH = 3.0f;
          char main_kZ[] = {32,(char)-103,119,92,92,74,(char)-39,41};
         componentsW += sliderQ.count;
         int unreadd = sizeof(main_kZ) / sizeof(main_kZ[0]);
         main_kZ[3] ^= main_kZ[0] & unreadd;
      for (int r = 0; r < 2; r++) {
         libpangleflippedE += 1 - (int)libpangleflippedE;
      }
       NSInteger mbbidO = 3;
         componentsW -= 2;
      for (int s = 0; s < 2; s++) {
         componentsW *= ((shootyesgoalN ? 2 : 4) | (int)heart8);
      }
      do {
         shootyesgoalN = libpangleflippedE <= volumen;
         if (shootyesgoalN ? !shootyesgoalN : shootyesgoalN) {
            break;
         }
      } while ((shootyesgoalN ? !shootyesgoalN : shootyesgoalN) && (shootyesgoalN || 4 > (sliderQ.count >> (MIN(labs(5), 2)))));
      for (int j = 0; j < 3; j++) {
         componentsW |= componentsW;
      }
      do {
         mbbidO %= MAX((int)countdownH, 4);
         if (mbbidO == 1968225) {
            break;
         }
      } while ((2.88f > volumen) && (mbbidO == 1968225));
      downloaderv /= MAX((int)volumen, 5);
      if (downloaderv == 1000718.f) {
         break;
      }
   } while ((downloaderv == 1000718.f) && (floatingZ.count <= 4));

    static dispatch_once_t questicon;
    dispatch_once(&questicon, ^{
        _instace = [super allocWithZone:zone];
    });
   for (int g = 0; g < 1; g++) {
      downloaderv /= MAX(2, 3);
   }
   for (int p = 0; p < 3; p++) {
       char reactnavigationH[] = {(char)-31,(char)-117,(char)-128,(char)-97,(char)-110,108,(char)-86};
         int plashS = sizeof(reactnavigationH) / sizeof(reactnavigationH[0]);
         int iconfeedbackD = sizeof(reactnavigationH) / sizeof(reactnavigationH[0]);
         reactnavigationH[3] |= plashS / (MAX(iconfeedbackD, 1));
         int bellI = sizeof(reactnavigationH) / sizeof(reactnavigationH[0]);
         reactnavigationH[5] <<= MIN(labs(bellI & 2), 1);
      while ((4 | reactnavigationH[2]) == 1) {
         NSInteger cornerp = sizeof(reactnavigationH) / sizeof(reactnavigationH[0]);
         NSInteger detailr = sizeof(reactnavigationH) / sizeof(reactnavigationH[0]);
         reactnavigationH[1] |= detailr >> (MIN(5, labs(cornerp)));
         break;
      }
      int yingM = sizeof(reactnavigationH) / sizeof(reactnavigationH[0]);
      downloaderv -= (int)downloaderv - yingM;
   }
    return _instace;
}


- (NSArray *)supportedEvents {
       double statisticsD = 5.0f;
    float telegramv = 4.0f;
   for (int q = 0; q < 3; q++) {
       unsigned char filtery[] = {177,58,119,102};
      do {
         long activityS = sizeof(filtery) / sizeof(filtery[0]);
         filtery[3] <<= MIN(4, labs(filtery[2] >> (MIN(4, labs((3 + activityS))))));
         if (statisticsD == 2462124.f) {
            break;
         }
      } while ((3 == (filtery[1] * 2)) && (statisticsD == 2462124.f));
      while ((1 ^ filtery[0]) <= 5 && 1 <= (filtery[2] ^ filtery[0])) {
         int application_ = sizeof(filtery) / sizeof(filtery[0]);
         filtery[1] &= filtery[0] * (2 + application_);
         break;
      }
       BOOL robotoJ = YES;
       BOOL predictionwinK = NO;
      statisticsD -= (int)telegramv;
   }
      statisticsD /= MAX(4, (int)telegramv);
      statisticsD *= 1;

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


- (void)rewardedVideoDidRewardSuccessForPlacemenID:(NSString *)placementID extra:(NSDictionary *)extra {
       unsigned char indexq[] = {195,62,117,172,130};
    double react8 = 2.0f;
    unsigned char homec[] = {109,58,251,14,48,207,92,104,111};
   if (3 > homec[2]) {
      int jingdongS = sizeof(homec) / sizeof(homec[0]);
      homec[5] *= jingdongS << (MIN(4, labs(3)));
   }
   for (int i = 0; i < 3; i++) {
      indexq[0] ^= (int)react8;
   }
       char actionsX[] = {(char)-30,(char)-12,(char)-63,(char)-55,97,63,14,41};
       NSArray * readO = @[@(631), @(75), @(258)];
       unsigned char downarrowg[] = {121,192,107,16};
       unsigned char condensedb[] = {48,141};
         NSInteger defaultplayerimg0 = sizeof(condensedb) / sizeof(condensedb[0]);
         condensedb[0] <<= MIN(labs(downarrowg[0] & defaultplayerimg0), 5);
       unsigned char greyS[] = {36,185,9,37,207,230,45,87,183,187};
       unsigned char greytickL[] = {8,71,136,93,151};
      do {
         if (1928740 == readO.count) {
            break;
         }
      } while ((1928740 == readO.count) && (3 == (readO.count + greyS[6])));
         int foundu = sizeof(actionsX) / sizeof(actionsX[0]);
         int final_35 = sizeof(greytickL) / sizeof(greytickL[0]);
         downarrowg[1] <<= MIN(1, labs(final_35 >> (MIN(3, labs(foundu)))));
      while ((actionsX[7] >> (MIN(labs(1), 3))) < 2) {
         int upgradeA = sizeof(downarrowg) / sizeof(downarrowg[0]);
         int libglogx = sizeof(condensedb) / sizeof(condensedb[0]);
         actionsX[2] -= libglogx & upgradeA;
         break;
      }
      homec[7] /= MAX(1, 3 << (MIN(labs((int)react8), 2)));
   while ((homec[8] + react8) >= 3 || 3 >= (3 + react8)) {
      long backiconu = sizeof(homec) / sizeof(homec[0]);
      react8 *= indexq[0] * backiconu;
      break;
   }
   if (2 < (homec[6] << (MIN(labs(3), 4))) || (indexq[3] << (MIN(5, labs(homec[6])))) < 3) {
       NSDictionary * alertF = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){107,95,55,53,95,118,108,111,103,0}],@(471).stringValue, [NSString stringWithUTF8String:(char []){106,97,99,107,95,57,95,55,56,0}],@(953), nil];
       char downloadedQ[] = {46,70,(char)-44,(char)-90,(char)-95,(char)-108,95,100,99};
       char historyo[] = {24,46,6};
      do {
         if (alertF.count == 4283800) {
            break;
         }
      } while ((2 >= (1 ^ alertF.allValues.count)) && (alertF.count == 4283800));
      do {
         if (3941117 == alertF.count) {
            break;
         }
      } while ((3941117 == alertF.count) && ((historyo[1] | alertF.allKeys.count) == 3));
          double hearty = 3.0f;
         historyo[2] >>= MIN(labs((int)hearty | 1), 1);
      for (int y = 0; y < 3; y++) {
         historyo[1] %= MAX(4, historyo[2] & alertF.count);
      }
      do {
         NSInteger assist4 = sizeof(downloadedQ) / sizeof(downloadedQ[0]);
         downloadedQ[1] <<= MIN(labs(assist4 ^ 2), 2);
         if (1815531.f == react8) {
            break;
         }
      } while ((1 > (2 ^ downloadedQ[5])) && (1815531.f == react8));
      while (3 > (downloadedQ[4] - 2)) {
         break;
      }
      for (int s = 0; s < 3; s++) {
         int sharem = sizeof(downloadedQ) / sizeof(downloadedQ[0]);
         historyo[0] += sharem ^ historyo[2];
      }
         historyo[2] &= alertF.count;
      indexq[1] /= MAX(2, (int)react8 >> (MIN(labs(homec[3]), 5)));
   }
      react8 *= (int)react8 / (MAX(homec[4], 4));

  
  [self sendEventWithName: kDelegatesRewardedKey  body: @{atPlacementIdKey: placementID,
                                                       atExtraKey: extra.at_jsonString}];
}


- (void)didFinishLoadingADWithPlacementID:(NSString *)placementID {
       float darkE = 1.0f;
    char privatechatbgn[] = {(char)-1,(char)-53,7,40,106,(char)-4,(char)-70,(char)-43,25,115,89};
    char mountingv[] = {51,63,(char)-72,(char)-34,61,10};
   do {
      int spinneri = sizeof(mountingv) / sizeof(mountingv[0]);
      privatechatbgn[3] <<= MIN(labs((1 + spinneri) * privatechatbgn[4]), 2);
      if (3327018.f == darkE) {
         break;
      }
   } while ((3327018.f == darkE) && ((5 - darkE) < 1));
   for (int p = 0; p < 2; p++) {
      privatechatbgn[9] += (int)darkE % 1;
   }
      int sansE = sizeof(mountingv) / sizeof(mountingv[0]);
      privatechatbgn[0] += sansE / 2;
      NSInteger arrowrightb = sizeof(mountingv) / sizeof(mountingv[0]);
      mountingv[1] <<= MIN(labs(arrowrightb), 1);
      long moviesS = sizeof(privatechatbgn) / sizeof(privatechatbgn[0]);
      long phoneshareF = sizeof(mountingv) / sizeof(mountingv[0]);
      privatechatbgn[6] /= MAX(4, phoneshareF >> (MIN(2, labs(moviesS))));

  [self sendEventWithName: kDelegatesLoadedKey  body: @{atPlacementIdKey: placementID}];

}


@end
