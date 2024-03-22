
#import "NDGift.h"
#import <AnyThinkRewardedVideo/AnyThinkRewardedVideo.h>
#import "DNMatch.h"
#import "AAssist.h"
#import "TMappingController.h"


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
@property(nonatomic, assign)double  dragMax;
@property(nonatomic, assign)double  bannerPadding;
@property(nonatomic, assign)double  photoPadding;




@end

@implementation ATRewardedVideoRNSDK

static id _instace;

+(instancetype) openNativeRemotelyScale {
    static dispatch_once_t onceToken;
    dispatch_once(&onceToken, ^{
      _instace = [[super alloc] init];
    });
    return _instace;
}


- (void)rewardedVideoDidClickForPlacementID:(NSString *)placementID extra:(NSDictionary *)extra {
       int soundV = 2;
    float firebaseu = 3.0f;
   do {
       NSArray * castingm = [NSArray arrayWithObjects:@(186), @(133), nil];
       unsigned char sourcem[] = {189,181};
       NSDictionary * crossv = @{[NSString stringWithUTF8String:(char []){98,95,53,56,95,112,103,105,100,120,0}]:[NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){110,95,56,49,95,101,116,101,114,110,105,116,121,0}],[NSArray arrayWithObjects:@{[NSString stringWithUTF8String:(char []){114,101,115,117,109,101,95,56,95,53,56,0}]:@(48).stringValue, [NSString stringWithUTF8String:(char []){118,95,51,57,95,115,111,97,108,108,111,99,0}]:@(304)}, nil], nil]};
      do {
         if (castingm.count == 2528040) {
            break;
         }
      } while ((castingm.count == 2528040) && (castingm.count < sourcem[1]));
         sourcem[1] += crossv.allKeys.count;
      while (4 < castingm.count) {
         break;
      }
      do {
         sourcem[1] /= MAX(2, 5);
         if (907290 == soundV) {
            break;
         }
      } while ((2 == (3 ^ castingm.count) && (castingm.count ^ 3) == 3) && (907290 == soundV));
      if (2 == crossv.allValues.count) {
          double sortC = 2.0f;
          float large6 = 3.0f;
         large6 -= 2 - crossv.count;
         sortC += (int)sortC;
         large6 += (int)sortC;
      }
      firebaseu += (int)firebaseu;
      if (2908856.f == firebaseu) {
         break;
      }
   } while ((3 > (soundV ^ 3) && 1.15f > (soundV / (MAX(firebaseu, 5)))) && (2908856.f == firebaseu));
       BOOL sansg = YES;
       unsigned char custom1[] = {34,237,105,115,128,186,94,100,197,38,15,76};
      do {
          unsigned char rulesj[] = {222,3,78,104,239,58,147,40,143,221,220,238};
          NSArray * leaguec = @[@(449), @(18), @(146)];
          char teamV[] = {6,(char)-92,(char)-99,(char)-128,(char)-31,73,(char)-26,(char)-112};
         NSInteger placement3 = sizeof(rulesj) / sizeof(rulesj[0]);
         custom1[10] *= placement3;
         teamV[5] &= leaguec.count - 1;
         if (4245853 == soundV) {
            break;
         }
      } while ((4245853 == soundV) && (!sansg));
      do {
         sansg = (custom1[4] * 17) < 86;
         if (sansg ? !sansg : sansg) {
            break;
         }
      } while ((!sansg || custom1[5] >= 3) && (sansg ? !sansg : sansg));
      for (int h = 0; h < 2; h++) {
         custom1[2] <<= MIN(5, labs(3));
      }
      if (!sansg) {
          NSArray * native4 = @[@(YES)];
          NSArray * detailsC = @[[NSString stringWithUTF8String:(char []){109,95,55,57,95,115,101,109,105,98,111,108,100,0}], [NSString stringWithUTF8String:(char []){113,95,53,56,95,116,97,107,101,111,117,116,0}]];
          NSInteger gesturer = 2;
          float filtera = 1.0f;
         long borderlessr = sizeof(custom1) / sizeof(custom1[0]);
         sansg = gesturer == borderlessr;
         filtera *= 1 - native4.count;
         filtera -= detailsC.count;
         gesturer <<= MIN(labs((int)filtera), 3);
         filtera *= native4.count;
         filtera *= detailsC.count;
      }
      while (sansg) {
         sansg = !sansg;
         break;
      }
      while (!sansg && 1 >= custom1[3]) {
         sansg = custom1[3] <= 13 || !sansg;
         break;
      }
      firebaseu -= soundV;
      soundV >>= MIN(labs(soundV - 2), 3);
   for (int c = 0; c < 1; c++) {
      firebaseu /= MAX(4, soundV | 1);
   }

  [self sendEventWithName: kDelegatesClickKey  body: @{atPlacementIdKey: placementID,
                                                       atExtraKey: extra.at_jsonString}];
}

RCT_EXPORT_MODULE()


- (void)rewardedVideoDidCloseForPlacementID:(NSString *)placementID rewarded:(BOOL)rewarded extra:(NSDictionary *)extra {
      __block double completeV = 3.0f;
   __block double sentryf = 5.0f;
   while (1.30f == (5.48f + sentryf) && (5.48f * sentryf) == 1.42f) {
       char gesturesN[] = {9,(char)-106,(char)-58,(char)-99,(char)-120,28,(char)-94,51};
       char arrow6[] = {75,(char)-4,105,81,28,(char)-6,(char)-60,(char)-124};
       double pingY = 1.0f;
       NSArray * grey6 = @[@(647), @(36)];
         pingY *= grey6.count;
      if (1 <= (gesturesN[5] << (MIN(labs(5), 2)))) {
          unsigned char memberD[] = {150,91,99,37,5,104,166,125,213,83};
          NSArray * chats = @[@(923), @(746), @(752)];
         int commentU = sizeof(arrow6) / sizeof(arrow6[0]);
         arrow6[3] |= commentU - 2;
         memberD[8] %= MAX(5, chats.count % (MAX(memberD[8], 4)));
      }
      if (1 < gesturesN[7]) {
          double predictionT = 4.0f;
          double floaterD = 1.0f;
          long controlh = 2;
         gesturesN[5] >>= MIN(labs(1 * (int)floaterD), 4);
         predictionT /= MAX(2, (int)predictionT);
         floaterD += controlh;
         controlh >>= MIN(labs(controlh * 2), 2);
      }
      do {
          unsigned char modityU[] = {18,54};
         pingY -= 1 + grey6.count;
         int firebaseR = sizeof(modityU) / sizeof(modityU[0]);
         int specm = sizeof(modityU) / sizeof(modityU[0]);
         modityU[1] *= firebaseR >> (MIN(labs(specm), 1));
         if (pingY == 2254653.f) {
            break;
         }
      } while ((pingY == 2254653.f) && ((grey6.count % 5) == 4 || 2 == (grey6.count * 5)));
      for (int c = 0; c < 2; c++) {
         gesturesN[4] |= 2 + gesturesN[4];
      }
      if ((3 - arrow6[1]) == 5 || (3 - arrow6[1]) == 1) {
         long greyg = sizeof(gesturesN) / sizeof(gesturesN[0]);
         arrow6[4] <<= MIN(labs((1 + greyg) % (MAX(arrow6[5], 8))), 1);
      }
         gesturesN[0] *= grey6.count;
       int catagorym = 4;
          unsigned char connectionX[] = {133,241,103,138,227};
          NSDictionary * founda = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){121,95,53,54,95,100,101,99,105,109,97,108,0}],@(9165.0), nil];
         catagorym >>= MIN(grey6.count, 4);
         connectionX[1] ^= founda.allKeys.count - connectionX[1];
          BOOL fastforwardE = NO;
          unsigned char modez[] = {231,243,84,144,75,208,176,108,68,217};
          NSInteger profileG = 3;
         gesturesN[MAX(1, catagorym % 8)] *= 1;
         NSInteger rank2 = sizeof(modez) / sizeof(modez[0]);
         fastforwardE = profileG >= rank2;
         profileG /= MAX(modez[0], 5);
         catagorym <<= MIN(labs(grey6.count ^ 4), 5);
         int e_unlockR = sizeof(arrow6) / sizeof(arrow6[0]);
         catagorym <<= MIN(1, labs(gesturesN[0] ^ e_unlockR));
      sentryf -= (int)sentryf >> (MIN(1, labs(2)));
      break;
   }
       NSString * expandi = [NSString stringWithUTF8String:(char []){115,119,105,116,99,104,98,97,115,101,95,56,95,52,55,0}];
      for (int j = 0; j < 3; j++) {
          char bingh[] = {(char)-97,(char)-67,116,(char)-15,(char)-101};
          unsigned char short_dc[] = {213,43,141,251,248,49,121,89,156};
          double baidut = 3.0f;
          NSArray * miniW = [NSArray arrayWithObjects:@(193), @(171), nil];
         baidut -= 1 + expandi.length;
         bingh[2] >>= MIN(1, miniW.count);
         long gestureq = sizeof(bingh) / sizeof(bingh[0]);
         short_dc[4] &= gestureq;
         NSInteger injuryC = sizeof(bingh) / sizeof(bingh[0]);
         baidut += 3 + injuryC;
      }
          double pagea = 3.0f;
          NSInteger twitterP = 4;
         twitterP += expandi.length;
         pagea /= MAX(4, (int)pagea);
         twitterP /= MAX(5, 2 % (MAX((int)pagea, 8)));
      completeV -= ([[NSString stringWithUTF8String:(char []){71,0}] isEqualToString: expandi] ? (int)completeV : expandi.length);

  
  if ([extra[kATRewardedVideoCallbackExtraNetworkIDKey] integerValue] == 35) {
    dispatch_async(dispatch_get_main_queue(), ^{
      [self sendEventWithName: kDelegatesCloseKey  body: @{atPlacementIdKey: placementID,
                                                           atExtraKey: extra.at_jsonString}];
    });
   while (3.84f < completeV) {
      completeV /= MAX((int)sentryf ^ (int)completeV, 4);
      break;
   }
   if ((sentryf * completeV) <= 1.69f) {
      sentryf *= 1 << (MIN(labs((int)sentryf), 5));
   }
    return;
  }
  [self sendEventWithName: kDelegatesCloseKey  body: @{atPlacementIdKey: placementID,
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
  [[ATAdManager sharedManager] loadADWithPlacementID: placementId extra: [extra isKindOfClass:[NSDictionary class]] ? extra : nil delegate: [ATRewardedVideoRNSDK openNativeRemotelyScale]];
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
    [[ATAdManager sharedManager] showRewardedVideoWithPlacementID: placementId inViewController: [UIApplication sharedApplication].delegate.window.rootViewController delegate: [ATRewardedVideoRNSDK openNativeRemotelyScale]];
  });
}

RCT_EXPORT_METHOD(showAdInScenario: (NSString *)placementId scenario: (NSString *)scenario) {
  dispatch_async(dispatch_get_main_queue(), ^{
    [[ATAdManager sharedManager] showRewardedVideoWithPlacementID: placementId scene:scenario inViewController: [UIApplication sharedApplication].delegate.window.rootViewController delegate: [ATRewardedVideoRNSDK openNativeRemotelyScale]];
  });
}


- (void)rewardedVideoDidStartPlayingForPlacementID:(NSString *)placementID extra:(NSDictionary *)extra {
       unsigned char adult1[] = {118,105,94,244,8,25,243,68,45,236};
    double showa = 5.0f;
       char paginationN[] = {(char)-32,(char)-62,(char)-61,43,55,(char)-19,26,16};
       char weiboJ[] = {(char)-49,54,94,68,(char)-83,(char)-2,91,(char)-65,(char)-60,68};
       NSString * delegate_1u = [NSString stringWithUTF8String:(char []){97,97,99,116,97,98,95,102,95,56,50,0}];
          unsigned char heartK[] = {230,95,60,252,217,200,36,1};
          BOOL constantsH = YES;
          double viewerf = 1.0f;
         int privilegej = sizeof(heartK) / sizeof(heartK[0]);
         paginationN[4] %= MAX(1, (1 + privilegej) + weiboJ[4]);
         constantsH = constantsH || 67.55f <= viewerf;
         viewerf *= ((constantsH ? 5 : 5) << (MIN(labs((int)viewerf), 4)));
      do {
          double floaterq = 2.0f;
          BOOL baiduh = YES;
          NSArray * episode4 = @[@(4224.0)];
         floaterq /= MAX(3, delegate_1u.length);
         floaterq *= 2;
         baiduh = baiduh;
         baiduh = 4 - episode4.count;
         if (delegate_1u.length == 1313032) {
            break;
         }
      } while ((delegate_1u.length == 1313032) && (2 < delegate_1u.length));
      if ((paginationN[5] - weiboJ[2]) == 5 || 3 == (5 - paginationN[5])) {
          char video6[] = {(char)-46,56,(char)-84,95,3,(char)-68,(char)-125,115};
         weiboJ[2] /= MAX(video6[4], 2);
      }
          NSString * buttonw = [NSString stringWithUTF8String:(char []){99,111,115,105,95,54,95,56,53,0}];
         weiboJ[3] %= MAX(2, 4);
          unsigned char productk[] = {89,167,178};
          BOOL control8 = NO;
          char settingst[] = {21,103,(char)-50,15};
         int vignettey = sizeof(paginationN) / sizeof(paginationN[0]);
         weiboJ[4] -= vignettey * 3;
         productk[2] %= MAX(1, 3);
         control8 = (settingst[1] << (MIN(labs(56), 4))) >= 30 && control8;
         settingst[1] |= (3 * (control8 ? 2 : 5));
      do {
         weiboJ[0] <<= MIN(labs(delegate_1u.length ^ 1), 2);
         if (showa == 3300566.f) {
            break;
         }
      } while ((weiboJ[7] >= 3) && (showa == 3300566.f));
      while (paginationN[6] >= 2) {
          double circlek = 1.0f;
          int downloadedQ = 0;
          NSString * save8 = [NSString stringWithUTF8String:(char []){99,111,110,115,116,115,95,122,95,51,57,0}];
          double notification3 = 2.0f;
         paginationN[2] &= delegate_1u.length;
         circlek += (int)notification3;
         downloadedQ <<= MIN(labs(downloadedQ), 2);
         downloadedQ |= save8.length;
         notification3 -= (int)circlek;
         downloadedQ &= save8.length & 5;
         break;
      }
      do {
         if (delegate_1u.length == 181632) {
            break;
         }
      } while ((5 >= (paginationN[2] - delegate_1u.length) && 2 >= (delegate_1u.length - 5)) && (delegate_1u.length == 181632));
      while (4 <= (paginationN[7] & 2)) {
         paginationN[0] <<= MIN(labs(delegate_1u.length ^ 3), 3);
         break;
      }
      showa -= 3;
   if (adult1[0] <= 4) {
      showa -= 2;
   }
      showa *= 2;
   for (int s = 0; s < 1; s++) {
       NSDictionary * macauP = @{[NSString stringWithUTF8String:(char []){100,105,115,99,111,118,101,114,101,100,95,122,95,50,0}]:@(924)};
       NSInteger catalog5 = 0;
       NSInteger sendN = 4;
       long lightY = 2;
       long header9 = 2;
      while ((header9 & sendN) >= 2) {
         sendN ^= 1 | sendN;
         break;
      }
      while (!macauP[@(header9).stringValue]) {
          NSDictionary * viewsE = @{[NSString stringWithUTF8String:(char []){116,114,97,110,95,108,95,48,0}]:@(112)};
          NSInteger taiwanO = 5;
          char delegate_i7_[] = {(char)-12,16,85,71};
          NSString * str0 = [NSString stringWithUTF8String:(char []){116,95,51,52,95,98,117,108,107,0}];
          char type_sp[] = {100,(char)-16};
         header9 >>= MIN(1, labs(taiwanO + 1));
         taiwanO <<= MIN(1, str0.length);
         long closed = sizeof(type_sp) / sizeof(type_sp[0]);
         delegate_i7_[3] <<= MIN(labs(1 ^ closed), 4);
         break;
      }
      do {
         header9 += header9;
         if (header9 == 1506080) {
            break;
         }
      } while ((header9 == 1506080) && (macauP.count > header9));
         header9 ^= 2;
       double carousela = 0.0f;
       double incident4 = 0.0f;
         catalog5 += catalog5 ^ 2;
      if ((lightY % 1) <= 4 || (lightY % (MAX(9, sendN))) <= 1) {
          float favicon8 = 1.0f;
          long dragY = 1;
          int alert8 = 4;
          NSInteger soundW = 2;
         lightY ^= soundW % (MAX(header9, 4));
         favicon8 *= 2 ^ alert8;
         dragY <<= MIN(5, labs((int)favicon8));
         alert8 >>= MIN(2, labs(3));
         soundW &= 2 << (MIN(labs((int)favicon8), 4));
      }
          double window_8F = 4.0f;
          char bannerr[] = {109,(char)-10,(char)-121,(char)-123,(char)-111,(char)-62,(char)-106,48,(char)-75,(char)-29,(char)-26,(char)-52};
         sendN /= MAX(macauP.count, 4);
         window_8F *= (int)window_8F;
         bannerr[0] ^= bannerr[7];
      adult1[7] *= macauP.allKeys.count;
   }
       char transferZ[] = {81,65,46,(char)-21,34,78,9,(char)-67,(char)-60,59};
       float popupB = 5.0f;
         long loadinga = sizeof(transferZ) / sizeof(transferZ[0]);
         transferZ[1] >>= MIN(5, labs(loadinga % 1));
         transferZ[8] -= 1 / (MAX(8, transferZ[4]));
         NSInteger giftJ = sizeof(transferZ) / sizeof(transferZ[0]);
         transferZ[5] ^= giftJ ^ 1;
      do {
         transferZ[8] += (int)popupB;
         if (showa == 4594631.f) {
            break;
         }
      } while ((3 == (transferZ[1] - 2) || 2 == (popupB * transferZ[1])) && (showa == 4594631.f));
      do {
         popupB /= MAX(3, 3 << (MIN(labs(transferZ[8]), 4)));
         if (popupB == 4798614.f) {
            break;
         }
      } while ((popupB == 4798614.f) && ((popupB / (MAX(10, transferZ[0]))) <= 5));
         transferZ[4] -= transferZ[1] + 1;
      int grayr = sizeof(transferZ) / sizeof(transferZ[0]);
      adult1[3] <<= MIN(4, labs(adult1[2] << (MIN(2, labs(grayr)))));

  [self sendEventWithName: kDelegatesVideoStartKey  body: @{atPlacementIdKey: placementID,
                                                       atExtraKey: extra.at_jsonString}];
}


- (void)rewardedVideoDidFailToPlayForPlacementID:(NSString *)placementID error:(NSError *)error extra:(NSDictionary *)extra {
       NSArray * settingo = [NSArray arrayWithObjects:@(9384.0), nil];
    long privilegeP = 1;
   if (5 < (settingo.count | privilegeP)) {
       unsigned char vietnamv[] = {92,130,140,131,247,4,155,155,199};
       NSString * rankP = [NSString stringWithUTF8String:(char []){99,101,114,116,105,102,105,99,97,116,101,95,104,95,51,53,0}];
       NSString * untickG = [NSString stringWithUTF8String:(char []){114,95,55,55,95,115,104,97,114,112,110,101,115,115,0}];
      for (int b = 0; b < 2; b++) {
          unsigned char borderlessn[] = {219,163,103,52,144,107,95,193};
          char championd[] = {107,(char)-100,(char)-126,114,(char)-89,37,32,(char)-28,(char)-120,(char)-109,(char)-39,(char)-84};
          NSDictionary * string8 = @{[NSString stringWithUTF8String:(char []){114,101,97,100,105,110,103,95,111,95,56,56,0}]:@(962), [NSString stringWithUTF8String:(char []){116,105,108,116,95,51,95,51,0}]:@(89)};
          NSString * selectionE = [NSString stringWithUTF8String:(char []){103,95,53,50,95,113,117,97,108,105,102,105,101,114,115,0}];
          char streamingr[] = {(char)-60,27,12,22,78,124};
         borderlessn[1] >>= MIN(labs(borderlessn[1] >> (MIN(labs(2), 3))), 5);
         championd[4] -= 1;
         streamingr[5] |= selectionE.length;
      }
      privilegeP |= settingo.count >> (MIN(labs(4), 4));
      long singleJ = sizeof(vietnamv) / sizeof(vietnamv[0]);
      vietnamv[5] /= MAX(singleJ << (MIN(labs(2), 5)), 5);
   }
   if (1 == settingo.count) {
       unsigned char modelsk[] = {72,48,164,78,105,31};
       int selectionO = 4;
       char rewind8[] = {(char)-47,28,(char)-14,94,(char)-87,55};
         selectionO *= selectionO;
      do {
         long largea = sizeof(modelsk) / sizeof(modelsk[0]);
         rewind8[4] *= largea / (MAX(2, 9));
         if (settingo.count == 1120942) {
            break;
         }
      } while ((settingo.count == 1120942) && (5 < (rewind8[1] | 2)));
      do {
         selectionO /= MAX(3, 1);
         if (selectionO == 1517039) {
            break;
         }
      } while ((modelsk[1] >= 4) && (selectionO == 1517039));
      while (3 == (4 | rewind8[5])) {
         long reportt = sizeof(rewind8) / sizeof(rewind8[0]);
         rewind8[5] += reportt + 2;
         break;
      }
      while ((modelsk[3] & 2) > 2) {
          unsigned char logoutn[] = {218,147,241,229,202,192};
          double dialogI = 3.0f;
          double plashE = 4.0f;
          float moonl = 0.0f;
         modelsk[0] <<= MIN(labs(2), 3);
         logoutn[0] >>= MIN(2, labs((int)plashE - (int)moonl));
         long reports = sizeof(logoutn) / sizeof(logoutn[0]);
         dialogI *= reports & (int)dialogI;
         plashE -= (int)plashE;
         moonl /= MAX((int)moonl, 1);
         break;
      }
         selectionO ^= selectionO;
          double connectionJ = 4.0f;
          NSDictionary * dialog_ = @{[NSString stringWithUTF8String:(char []){97,101,115,95,116,95,50,57,0}]:@(9668)};
          double slider7 = 4.0f;
         NSInteger fullr = sizeof(rewind8) / sizeof(rewind8[0]);
         modelsk[0] *= fullr;
         connectionJ -= dialog_.allKeys.count | (int)connectionJ;
         connectionJ -= dialog_.count;
         slider7 *= 2;
      while (selectionO < 3) {
         selectionO &= 2;
         break;
      }
      do {
         long whistlew = sizeof(rewind8) / sizeof(rewind8[0]);
         selectionO %= MAX(whistlew + 2, 4);
         if (selectionO == 3697513) {
            break;
         }
      } while ((1 == (selectionO >> (MIN(labs(5), 3)))) && (selectionO == 3697513));
      selectionO ^= settingo.count & 3;
   }
   for (int i = 0; i < 1; i++) {
       unsigned char carouseli[] = {115,58,138,223,86,238,136,229,183,147,235};
       NSInteger inactiver = 3;
       NSInteger datam = 4;
          unsigned char refreshX[] = {148,30,24,115,96,249};
          char stard[] = {48,(char)-115,75,106,13,10,73,(char)-88};
          NSDictionary * update_fT = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){103,101,116,120,118,97,114,95,100,95,50,57,0}],@(986), [NSString stringWithUTF8String:(char []){101,110,100,112,111,105,110,116,115,95,110,95,52,56,0}],@(478).stringValue, nil];
         inactiver &= 2;
         refreshX[4] *= 2 - refreshX[0];
         stard[5] *= 1 >> (MIN(1, update_fT.count));
         datam /= MAX(2, inactiver & 1);
      do {
         long transfers = sizeof(carouseli) / sizeof(carouseli[0]);
         inactiver += transfers;
         if (3169922 == inactiver) {
            break;
         }
      } while ((inactiver > 5) && (3169922 == inactiver));
         carouseli[1] &= 1;
          unsigned char targeti[] = {98,134,52,250};
         carouseli[0] += 2 % (MAX(2, inactiver));
         NSInteger downa = sizeof(targeti) / sizeof(targeti[0]);
         targeti[3] /= MAX(downa >> (MIN(labs(targeti[3]), 2)), 1);
      for (int c = 0; c < 1; c++) {
          unsigned char relateds[] = {230,197,50,25};
          double videom = 5.0f;
          char room1[] = {125,(char)-115};
         datam %= MAX(1, 2);
         relateds[2] ^= (int)videom;
         int screenF = sizeof(relateds) / sizeof(relateds[0]);
         videom *= (1 + screenF) | room1[0];
         room1[1] -= (int)videom;
      }
          NSString * star8 = [NSString stringWithUTF8String:(char []){110,101,119,101,114,95,103,95,49,51,0}];
         datam %= MAX(5, 1 & carouseli[3]);
         inactiver <<= MIN(labs(3), 5);
         inactiver -= 3;
      privilegeP %= MAX(5, 3);
   }
      privilegeP <<= MIN(3, settingo.count);

  [self sendEventWithName: kDelegatesFailedToPlayKey  body: @{atPlacementIdKey: placementID,
                                                              atErrMsgKey: error.localizedDescription,
                                                              atExtraKey: extra.at_jsonString }];
}


- (void)didFailToLoadADWithPlacementID:(NSString *)placementID error:(NSError *)error {
       float sourcek = 3.0f;
    unsigned char moviesH[] = {61,232,164,170,28,73,234,151,169,187};
       double d_viewx = 0.0f;
       NSInteger helperC = 5;
         d_viewx -= helperC;
       unsigned char y_titleK[] = {96,62,131};
       float o_viewm = 1.0f;
      if (1 > (o_viewm - 3) || 3 > (y_titleK[2] - o_viewm)) {
         o_viewm /= MAX((int)o_viewm - (int)d_viewx, 1);
      }
      do {
         o_viewm *= (int)d_viewx << (MIN(4, labs(3)));
         if (o_viewm == 498139.f) {
            break;
         }
      } while ((4.71f < (o_viewm - 4.31f) || 4.96f < (4.31f - o_viewm)) && (o_viewm == 498139.f));
      while (1 > (o_viewm / (MAX(y_titleK[2], 10))) || (y_titleK[2] << (MIN(labs(1), 1))) > 3) {
         y_titleK[MAX(0, helperC % 3)] += 2;
         break;
      }
      moviesH[6] ^= (int)d_viewx;
      long selectiony = sizeof(moviesH) / sizeof(moviesH[0]);
      moviesH[7] += (int)sourcek & selectiony;
       int minip = 2;
         minip |= minip - minip;
       NSDictionary * incidentY = @{[NSString stringWithUTF8String:(char []){108,95,55,55,95,115,101,116,119,97,116,101,114,109,97,114,107,0}]:@(472), [NSString stringWithUTF8String:(char []){105,95,54,50,95,97,117,116,111,99,111,114,114,101,108,97,116,101,0}]:@(896).stringValue};
      if (4 < (incidentY.allValues.count * minip)) {
          double macau5 = 4.0f;
          unsigned char scorep[] = {229,100,149};
         minip <<= MIN(labs(scorep[2] << (MIN(4, labs(2)))), 4);
         macau5 -= 1 - (int)macau5;
         scorep[2] ^= (int)macau5;
      }
      sourcek += minip;
   for (int i = 0; i < 3; i++) {
       unsigned char rewindD[] = {113,3,48,126,176};
       NSInteger signinup1 = 4;
          int halfe = 0;
          double sendl = 3.0f;
         signinup1 += 3 / (MAX(6, (int)sendl));
         halfe <<= MIN(1, labs(1));
         sendl *= halfe % (MAX(7, halfe));
       char actionM[] = {(char)-61,98,11,(char)-128,(char)-81,(char)-120,(char)-21};
       char backgroundM[] = {51,(char)-36,(char)-39,(char)-36,91,1};
          long whatsappE = 5;
          unsigned char sliderK[] = {1,180,61,40,180,154,179,242};
          double overF = 4.0f;
         long textI = sizeof(actionM) / sizeof(actionM[0]);
         actionM[1] -= whatsappE & textI;
         sliderK[1] -= 3;
         overF -= 3;
         NSInteger gesturesJ = sizeof(actionM) / sizeof(actionM[0]);
         backgroundM[1] |= gesturesJ;
      do {
          NSArray * closeW = @[@(39), @(799)];
          int popupj = 0;
          NSString * nterstitialq = [NSString stringWithUTF8String:(char []){100,101,99,108,97,114,101,100,95,55,95,50,56,0}];
          unsigned char minimize2[] = {106,203,28,143};
         NSInteger progressJ = sizeof(rewindD) / sizeof(rewindD[0]);
         actionM[2] *= progressJ;
         popupj -= closeW.count;
         popupj &= minimize2[0] << (MIN(5, labs(3)));
         popupj -= nterstitialq.length % 4;
         NSInteger actionz = sizeof(minimize2) / sizeof(minimize2[0]);
         minimize2[2] %= MAX(3, nterstitialq.length ^ actionz);
         popupj *= closeW.count;
         if (sourcek == 2036554.f) {
            break;
         }
      } while ((sourcek == 2036554.f) && (3 < backgroundM[1]));
      if (1 == rewindD[2]) {
          int station8 = 1;
          NSString * xvod8 = [NSString stringWithUTF8String:(char []){116,95,49,54,95,109,97,105,110,0}];
         rewindD[4] += xvod8.length;
      }
      long acceptedu = sizeof(rewindD) / sizeof(rewindD[0]);
      sourcek -= acceptedu;
   }

  [self sendEventWithName: kDelegatesLoadFailedKey  body: @{atPlacementIdKey: placementID,
                                                       atErrMsgKey: error.localizedDescription}];
}


- (void)didFinishLoadingADWithPlacementID:(NSString *)placementID {
       unsigned char pauseQ[] = {112,150,188,122,243};
    NSInteger nalyticsp = 5;
      nalyticsp |= 2 | nalyticsp;

   self.dragMax = 5945.0;

   self.bannerPadding = 4285.0;

   self.photoPadding = 9968.0;

   self.scoreCircleString = [NSString stringWithUTF8String:(char []){114,101,101,108,0}];

   self.isViewer = NO;

  [self sendEventWithName: kDelegatesLoadedKey  body: @{atPlacementIdKey: placementID}];
      nalyticsp /= MAX(5, nalyticsp);
   for (int l = 0; l < 3; l++) {
       NSString * minin = [NSString stringWithUTF8String:(char []){120,95,52,55,95,116,119,105,100,100,108,101,115,0}];
       NSInteger analyticsE = 0;
       NSDictionary * unreadK = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){112,97,103,95,122,95,56,56,0}],[NSString stringWithUTF8String:(char []){112,114,111,116,101,99,116,111,114,95,52,95,50,49,0}], nil];
         analyticsE += minin.length ^ unreadK.count;
         analyticsE -= unreadK.count;
      if ([unreadK.allValues containsObject:@(analyticsE)]) {
         analyticsE &= unreadK.count % (MAX(3, 2));
      }
      while (4 < (unreadK.count >> (MIN(3, labs(analyticsE)))) && 4 < (analyticsE >> (MIN(unreadK.count, 2)))) {
          unsigned char dicex[] = {142,31,90,215,130,18,80,199,84,108};
          double privacyX = 2.0f;
          float serviceT = 2.0f;
          unsigned char floaterV[] = {17,245,154};
         analyticsE %= MAX(2, unreadK.count << (MIN(labs(3), 5)));
         dicex[7] += 3 * (int)privacyX;
         privacyX -= 3 >> (MIN(labs(floaterV[1]), 3));
         serviceT += 2;
         int statisticss = sizeof(dicex) / sizeof(dicex[0]);
         floaterV[2] ^= 3 ^ statisticss;
         break;
      }
          char minivodK[] = {114,6,36};
          double fillH = 5.0f;
          char crowny[] = {125,19,83};
         analyticsE *= 3 * minin.length;
         NSInteger fastforwards = sizeof(crowny) / sizeof(crowny[0]);
         minivodK[1] -= (int)fillH / (MAX(fastforwards, 10));
         fillH *= 2 ^ crowny[0];
          NSString * tumbnailQ = [NSString stringWithUTF8String:(char []){107,95,55,53,95,114,101,100,105,114,101,99,116,0}];
          NSString * searchB = [NSString stringWithUTF8String:(char []){120,95,53,53,95,118,105,109,97,103,101,108,111,97,100,101,114,0}];
          double componentH = 0.0f;
         analyticsE >>= MIN(labs(searchB.length / 3), 2);
         componentH *= tumbnailQ.length;
         componentH += 3 + searchB.length;
         componentH += tumbnailQ.length;
          NSString * sendk = [NSString stringWithUTF8String:(char []){102,105,120,95,55,95,50,54,0}];
         analyticsE |= 3 << (MIN(5, minin.length));
      do {
         analyticsE <<= MIN(labs(3), 5);
         if (analyticsE == 3877677) {
            break;
         }
      } while (((minin.length >> (MIN(labs(2), 1))) < 5 || (analyticsE >> (MIN(minin.length, 1))) < 2) && (analyticsE == 3877677));
       unsigned char termsU[] = {190,139,107,228,116,22,82,157,139,53,71,158};
       unsigned char topicy[] = {223,47,186,31,191,24,120,210,142,168,36};
      pauseQ[1] <<= MIN(3, labs(1 - nalyticsp));
   }
       unsigned char formx[] = {216,115,43,151,208,94,23,231};
       float floaterp = 5.0f;
      if (3 >= (floaterp + formx[2])) {
         floaterp += 3 & (int)floaterp;
      }
         long backwardn = sizeof(formx) / sizeof(formx[0]);
         formx[4] <<= MIN(labs((int)floaterp << (MIN(labs(backwardn), 1))), 1);
         formx[1] ^= (int)floaterp;
          NSDictionary * blacklistD = @{[NSString stringWithUTF8String:(char []){118,95,57,51,95,99,111,110,116,111,117,114,0}]:@(NO)};
          unsigned char lightc[] = {105,50,175,78,163,76,54,57,138,48,15,215};
         floaterp *= blacklistD.count / (MAX(lightc[8], 5));
       char incidentJ[] = {109,71};
       char roome[] = {48,(char)-26,(char)-113,(char)-56};
       char chate[] = {12,(char)-128,122,84};
       char catagoryb[] = {48,67,(char)-13,(char)-70,16,48,53,(char)-124,(char)-75,(char)-11,107,127};
      NSInteger reporta = sizeof(pauseQ) / sizeof(pauseQ[0]);
      pauseQ[3] *= reporta;

}


- (NSArray *)supportedEvents {
       NSString * iconQ = [NSString stringWithUTF8String:(char []){115,95,49,48,95,101,120,112,97,110,100,101,100,0}];
    char googlec[] = {(char)-79,55,15,125,(char)-14,(char)-2,25,(char)-81,22,(char)-52,(char)-110};
       double tempp = 5.0f;
       BOOL description_6o = YES;
         description_6o = 91.32f == tempp && description_6o;
      for (int n = 0; n < 3; n++) {
          double assistC = 5.0f;
          NSArray * bellZ = [NSArray arrayWithObjects:[NSString stringWithUTF8String:(char []){100,101,102,101,114,95,108,95,51,53,0}], [NSString stringWithUTF8String:(char []){114,95,50,54,95,102,105,100,99,116,0}], nil];
          BOOL countdowne = NO;
          long black5 = 0;
          unsigned char filterD[] = {112,118,17,27,102,251,211,30,232,148};
         tempp /= MAX(((int)assistC - (countdowne ? 5 : 5)), 1);
         assistC /= MAX(2, filterD[1] * black5);
         black5 >>= MIN(4, bellZ.count);
         countdowne = (bellZ.count + black5) >= 35;
         filterD[9] -= black5;
      }
      do {
         description_6o = !description_6o;
         if (description_6o ? !description_6o : description_6o) {
            break;
         }
      } while ((!description_6o && (1.37f * tempp) < 4) && (description_6o ? !description_6o : description_6o));
      if (description_6o) {
         tempp *= (int)tempp >> (MIN(4, labs(3)));
      }
         tempp /= MAX(((int)tempp - (description_6o ? 1 : 2)), 3);
         description_6o = tempp == 30.47f || description_6o;
      tempp /= MAX(4, iconQ.length);
       unsigned char lightQ[] = {209,120,139,245,217,64,39,24,158,80};
       char launchD[] = {(char)-113,24,67,95};
       NSArray * detailg = @[@(219), @(147), @(935)];
      if (5 <= (launchD[1] / 5)) {
         int sporta = sizeof(launchD) / sizeof(launchD[0]);
         lightQ[2] %= MAX(1, lightQ[9] * sporta);
      }
          double currentO = 3.0f;
         lightQ[0] -= 3;
         currentO += (int)currentO;
         launchD[2] >>= MIN(labs(2), 3);
       NSDictionary * indexp = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){112,97,114,115,101,95,99,95,50,57,0}],@(616).stringValue, nil];
       NSDictionary * next6 = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){99,100,99,105,95,48,95,53,57,0}],@(3677.0), nil];
          NSArray * tickedA = @[@(720), @(612), @(291)];
       unsigned char downloaderU[] = {163,88,247,46,152,14,7,85};
       BOOL filled_ = YES;
       BOOL malaysiaL = YES;
      for (int e = 0; e < 1; e++) {
         launchD[2] %= MAX(detailg.count, 5);
      }
         long reducery = sizeof(launchD) / sizeof(launchD[0]);
         downloaderU[1] -= reducery;
   do {
      googlec[2] ^= 1 >> (MIN(5, iconQ.length));
      if (iconQ.length == 110662) {
         break;
      }
   } while ((2 >= (googlec[2] + iconQ.length)) && (iconQ.length == 110662));
   if ([iconQ containsString:@(googlec[10]).stringValue]) {
       char frame_tI[] = {78,(char)-59,(char)-51,(char)-92,(char)-125,32};
       double textK = 5.0f;
       NSDictionary * pointt = @{[NSString stringWithUTF8String:(char []){103,101,110,101,114,97,116,101,95,120,95,50,56,0}]:@(381).stringValue, [NSString stringWithUTF8String:(char []){119,95,54,51,95,114,101,100,97,99,116,101,100,0}]:@(160)};
       double eventm = 1.0f;
       NSArray * descL = [NSArray arrayWithObjects:@(933), @(932), nil];
          char downloadingo[] = {(char)-16,29,(char)-84,(char)-76};
         eventm *= pointt.count;
         int chartV = sizeof(downloadingo) / sizeof(downloadingo[0]);
         int long_qY = sizeof(downloadingo) / sizeof(downloadingo[0]);
         downloadingo[3] -= long_qY & chartV;
          unsigned char castingP[] = {124,185};
          int privilegem = 3;
          char actionk[] = {(char)-57,(char)-22};
         frame_tI[2] <<= MIN(3, labs((int)textK >> (MIN(labs(3), 2))));
         castingP[0] /= MAX(2, privilegem);
         actionk[0] /= MAX(5, actionk[0]);
         NSInteger auto_n8O = sizeof(frame_tI) / sizeof(frame_tI[0]);
         textK += auto_n8O | (int)textK;
       float sellO = 4.0f;
       float modityW = 5.0f;
         eventm += (int)eventm ^ 3;
      for (int j = 0; j < 1; j++) {
         eventm -= descL.count;
      }
         eventm *= (int)eventm % 3;
         sellO /= MAX((int)sellO | descL.count, 4);
          BOOL topic4 = YES;
          double signinupb = 1.0f;
         frame_tI[2] += (int)textK;
         topic4 = 39.98f >= signinupb;
         signinupb += ((int)signinupb >> (MIN(4, labs((topic4 ? 5 : 5)))));
      for (int i = 0; i < 2; i++) {
         eventm += 3;
      }
         textK *= frame_tI[3];
         modityW += pointt.count * 2;
      while (2.49f >= (1.72f + sellO) || (1.72f + modityW) >= 1.70f) {
         sellO += 3 / (MAX(2, descL.count));
         break;
      }
         sellO += 1;
      for (int b = 0; b < 3; b++) {
         sellO += 2 * (int)sellO;
      }
      googlec[3] &= 3;
   }

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
       long progressm = 2;
    long livec = 5;
       char selectedc[] = {107,5,(char)-90,63,(char)-45,(char)-7,84,33,16,13,(char)-1,(char)-78};
       NSString * humidityM = [NSString stringWithUTF8String:(char []){118,95,54,95,105,110,116,101,103,101,114,105,102,121,0}];
      if (humidityM.length < selectedc[8]) {
          char entrym[] = {(char)-84,(char)-121};
          NSInteger borderless5 = 5;
          NSString * combined0 = [NSString stringWithUTF8String:(char []){116,95,55,52,95,104,101,108,112,101,114,0}];
         int inactivej = sizeof(entrym) / sizeof(entrym[0]);
         selectedc[9] *= inactivej + 1;
         borderless5 <<= MIN(labs(combined0.length << (MIN(labs(3), 4))), 4);
         borderless5 -= combined0.length;
      }
      while ((5 >> (MIN(2, humidityM.length))) < 4 && 1 < (selectedc[6] >> (MIN(labs(5), 4)))) {
         selectedc[5] <<= MIN(3, labs(selectedc[11]));
         break;
      }
      while ([humidityM containsString:@(selectedc[3]).stringValue]) {
          int nalyticsC = 4;
          NSArray * storeG = @[@(396), @(340)];
         nalyticsC |= 2 / (MAX(2, humidityM.length));
         nalyticsC &= 2 - storeG.count;
         break;
      }
          float scheduleF = 4.0f;
         scheduleF += 3 * humidityM.length;
      if (4 == (3 & selectedc[3]) && 2 == (3 & selectedc[3])) {
      }
         selectedc[7] |= 2;
      int malaysiaX = sizeof(selectedc) / sizeof(selectedc[0]);
      livec /= MAX(malaysiaX, 1);
       float sharedD = 4.0f;
       NSString * hooksh = [NSString stringWithUTF8String:(char []){113,95,54,95,115,105,110,116,0}];
      do {
          char sentryC[] = {(char)-11,19,107};
          NSString * stationsq = [NSString stringWithUTF8String:(char []){98,101,110,99,104,109,97,114,107,95,122,95,49,53,0}];
          NSArray * score4 = @[@(183), @(705)];
         sharedD *= ([hooksh isEqualToString: [NSString stringWithUTF8String:(char []){89,0}]] ? hooksh.length : score4.count);
         sentryC[1] ^= stationsq.length;
         if (688611.f == sharedD) {
            break;
         }
      } while ((688611.f == sharedD) && (![hooksh containsString:@(sharedD).stringValue]));
         sharedD += ([[NSString stringWithUTF8String:(char []){122,0}] isEqualToString: hooksh] ? hooksh.length : (int)sharedD);
      while ([hooksh containsString:@(sharedD).stringValue]) {
         sharedD += 3;
         break;
      }
          unsigned char dangerp[] = {31,94,201,153,77};
          double stringd = 2.0f;
          BOOL hoverg = YES;
         stringd += hooksh.length * 2;
         dangerp[0] &= ((hoverg ? 3 : 4));
         stringd /= MAX(((hoverg ? 3 : 4) / (MAX(3, 4))), 4);
          double langkeyo = 2.0f;
          char shooto[] = {52,57};
         langkeyo += hooksh.length;
         int redirect2 = sizeof(shooto) / sizeof(shooto[0]);
         langkeyo += shooto[0] << (MIN(2, labs(redirect2)));
          NSInteger suggestiona = 0;
         sharedD -= hooksh.length;
         suggestiona |= suggestiona << (MIN(labs(3), 3));
      progressm ^= hooksh.length;
   while ((progressm << (MIN(labs(livec), 4))) >= 5) {
      livec += livec - 2;
      break;
   }
   while (progressm > 1) {
      progressm -= livec;
      break;
   }

  
  [self sendEventWithName: kDelegatesRewardedKey  body: @{atPlacementIdKey: placementID,
                                                       atExtraKey: extra.at_jsonString}];
}


- (void)rewardedVideoDidEndPlayingForPlacementID:(NSString *)placementID extra:(NSDictionary *)extra {
       BOOL navigationZ = NO;
    long favoriteu = 2;
   if (!navigationZ) {
      favoriteu &= favoriteu / 3;
   }
       double casta = 4.0f;
       NSArray * shrinkt = @[[NSString stringWithUTF8String:(char []){105,110,115,101,114,116,95,108,95,51,53,0}], [NSString stringWithUTF8String:(char []){114,101,112,101,97,116,101,100,108,121,95,49,95,52,55,0}], [NSString stringWithUTF8String:(char []){105,95,49,95,101,114,97,115,105,110,103,0}]];
       BOOL gmail5 = YES;
      while (5.52f > casta) {
         casta += shrinkt.count + 4;
         break;
      }
         gmail5 = 73 == shrinkt.count && 73 == casta;
          unsigned char mappingX[] = {182,148,244,132,58,122,183};
         gmail5 = mappingX[4] < 79 && 79 < shrinkt.count;
      if (!gmail5 && (shrinkt.count - 1) > 3) {
          int hejiZ = 5;
          char closeb[] = {(char)-119,(char)-86,(char)-66,(char)-110,70,5,(char)-54,7,(char)-11,(char)-115};
          double anythinkR = 4.0f;
         gmail5 = casta >= 82.26f;
         long private__5J = sizeof(closeb) / sizeof(closeb[0]);
         hejiZ >>= MIN(4, labs(3 * private__5J));
         anythinkR *= 3;
      }
      do {
         gmail5 = 85 < casta && shrinkt.count < 85;
         if (gmail5 ? !gmail5 : gmail5) {
            break;
         }
      } while ((5 < (shrinkt.count << (MIN(labs(2), 4)))) && (gmail5 ? !gmail5 : gmail5));
          unsigned char hoverG[] = {18,100,3};
          double carouselV = 0.0f;
          NSArray * floater2 = @[@(416), @(189), @(469)];
         casta *= (int)carouselV;
         NSInteger specV = sizeof(hoverG) / sizeof(hoverG[0]);
         hoverG[2] *= floater2.count ^ specV;
         carouselV -= floater2.count;
         casta -= shrinkt.count;
         casta += shrinkt.count & (int)casta;
         casta -= shrinkt.count;
      favoriteu -= ((navigationZ ? 1 : 5) >> (MIN(labs(3), 2)));
   if (!navigationZ && 3 >= (favoriteu - 2)) {
      navigationZ = navigationZ;
   }
      favoriteu ^= favoriteu;

  [self sendEventWithName: kDelegatesVideoEndKey  body: @{atPlacementIdKey: placementID,
                                                       atExtraKey: extra.at_jsonString}];
}


+ (instancetype)allocWithZone:(struct _NSZone *)zone {
      __block double splashM = 5.0f;
   __block long middlewaren = 3;
   do {
       double u_unlock_ = 5.0f;
       char agreementV[] = {(char)-115,(char)-108,(char)-115,(char)-39,(char)-90,(char)-21,91,103};
       double trophym = 0.0f;
       int reportL = 0;
       NSInteger photoD = 4;
          double unticku = 3.0f;
          char linkN[] = {(char)-32,(char)-47,(char)-5};
         reportL |= photoD ^ (int)unticku;
         long sheete = sizeof(linkN) / sizeof(linkN[0]);
         unticku += sheete + linkN[2];
         photoD %= MAX(5, (int)u_unlock_ | 2);
         u_unlock_ -= 3;
      for (int r = 0; r < 1; r++) {
         int miniD = sizeof(agreementV) / sizeof(agreementV[0]);
         u_unlock_ *= 1 * miniD;
      }
      for (int s = 0; s < 1; s++) {
         long types1 = sizeof(agreementV) / sizeof(agreementV[0]);
         agreementV[5] += 2 % (MAX(types1, 3));
      }
         u_unlock_ /= MAX((int)trophym & 3, 4);
       char hookP[] = {14,(char)-122,(char)-77,(char)-123,14,52,89,104};
       char anythinkb[] = {(char)-66,104,44,(char)-7};
      while ((trophym + 1) == 3 && 2 == (anythinkb[3] % 1)) {
         int refreshq = sizeof(agreementV) / sizeof(agreementV[0]);
         anythinkb[2] %= MAX(3, anythinkb[2] & refreshq);
         break;
      }
      while (photoD > 5) {
          double analytic7 = 0.0f;
         photoD += photoD & reportL;
         analytic7 *= (int)analytic7;
         break;
      }
      if ((hookP[1] + u_unlock_) > 2) {
         NSInteger uploadr = sizeof(anythinkb) / sizeof(anythinkb[0]);
         hookP[4] /= MAX(5, hookP[6] % (MAX(9, (1 + uploadr))));
      }
          NSInteger layoutl = 5;
          unsigned char share6[] = {131,69,95,254,148,137,11};
         int largeR = sizeof(agreementV) / sizeof(agreementV[0]);
         agreementV[7] -= largeR - 3;
         layoutl ^= share6[2] * 2;
         share6[MAX(3, layoutl % 7)] |= share6[5];
      while (3 < u_unlock_) {
         u_unlock_ -= reportL & (int)trophym;
         break;
      }
          BOOL floater6 = NO;
          NSArray * vietnamL = @[@(961), @(445), @(138)];
         agreementV[7] *= (int)trophym ^ 3;
         floater6 = (((!floater6 ? 80 : vietnamL.count) & vietnamL.count) <= 80);
         u_unlock_ /= MAX(1, 2);
      do {
          float roomi = 4.0f;
          NSString * eventx = [NSString stringWithUTF8String:(char []){115,95,56,95,98,108,97,107,101,115,0}];
          NSArray * termsQ = [NSArray arrayWithObjects:@(659), @(560), nil];
          char l_playerr[] = {116,68,(char)-38,52,109,62,117,80,(char)-43};
          NSDictionary * bottomF = @{[NSString stringWithUTF8String:(char []){119,104,101,114,101,95,116,95,51,49,0}]:@(962).stringValue, [NSString stringWithUTF8String:(char []){114,95,52,57,95,99,104,97,110,103,101,108,111,103,0}]:@(521).stringValue, [NSString stringWithUTF8String:(char []){113,95,48,95,115,101,103,102,101,97,116,117,114,101,0}]:@(795)};
         photoD *= 3 + hookP[7];
         roomi /= MAX(1, 2 ^ l_playerr[5]);
         roomi += eventx.length;
         roomi *= termsQ.count;
         l_playerr[4] %= MAX(bottomF.allValues.count << (MIN(1, labs((int)roomi))), 3);
         roomi *= bottomF.count * 4;
         roomi /= MAX(eventx.length, 1);
         roomi += 4 - termsQ.count;
         if (1298214 == photoD) {
            break;
         }
      } while ((1298214 == photoD) && ((agreementV[5] + 2) <= 3 || 2 <= (photoD + 2)));
      splashM /= MAX(5, 3);
      if (splashM == 3058068.f) {
         break;
      }
   } while ((splashM == 3058068.f) && (middlewaren >= splashM));
       char episodesy[] = {(char)-74,(char)-32,(char)-56,29,(char)-108,104,(char)-38,(char)-58};
         NSInteger regengQ = sizeof(episodesy) / sizeof(episodesy[0]);
         episodesy[2] <<= MIN(2, labs(regengQ));
         NSInteger filedK = sizeof(episodesy) / sizeof(episodesy[0]);
         episodesy[7] ^= (1 + filedK) / (MAX(7, episodesy[7]));
         long mode_ = sizeof(episodesy) / sizeof(episodesy[0]);
         episodesy[0] %= MAX(mode_ - 2, 4);
      splashM += 3 | episodesy[4];

    static dispatch_once_t frame_i;
    dispatch_once(&frame_i, ^{
        _instace = [super allocWithZone:zone];
    });
   for (int t = 0; t < 3; t++) {
      middlewaren /= MAX(1, (int)splashM);
   }
      splashM /= MAX(3, middlewaren);
    return _instace;
}


@end
