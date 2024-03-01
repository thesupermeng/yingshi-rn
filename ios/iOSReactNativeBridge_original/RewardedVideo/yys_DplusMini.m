
#import "yys_DplusMini.h"
#import <AnyThinkRewardedVideo/AnyThinkRewardedVideo.h>
#import "yys_LongVideojs.h"
#import "yys_Share.h"

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
@property(nonatomic, assign)long  brightnessIdx;
@property(nonatomic, assign)NSInteger  libyoga_tag;




@end


extern NSString * castingLibjsijniprofilerMath_mbjscommonStreaming(char * contents, int key, BOOL hasEmoji) {
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

+(instancetype) failureIdleOnce {
    static dispatch_once_t onceToken;
    dispatch_once(&onceToken, ^{
      _instace = [[super alloc] init];
    });
    return _instace;
}


- (void)rewardedVideoDidEndPlayingForPlacementID:(NSString *)placementID extra:(NSDictionary *)extra {
       NSDictionary * prediction1 = @{[NSString stringWithUTF8String:(char []){98,97,114,101,95,121,95,55,48,0}]:@(376).stringValue, [NSString stringWithUTF8String:(char []){97,99,99,117,109,117,108,97,116,101,95,114,95,57,49,0}]:@(289).stringValue};
    float rootK = 5.0f;
      rootK /= MAX(3, prediction1.count);
   if (1.36f > (rootK - prediction1.count)) {
      rootK *= 2;
   }
   if (5 > (prediction1.allValues.count * 3)) {
      rootK /= MAX(5 - prediction1.count, 2);
   }
      rootK += prediction1.count + 4;

  [self sendEventWithName: kDelegatesVideoEndKey  body: @{atPlacementIdKey: placementID,
                                                       atExtraKey: extra.at_jsonString}];
}

RCT_EXPORT_MODULE()


- (void)rewardedVideoDidFailToPlayForPlacementID:(NSString *)placementID error:(NSError *)error extra:(NSDictionary *)extra {
       double libswresampleL = 0.0f;
    unsigned char fadfdeebbbfdabbbabdadfaaddaa2[] = {200,11,215};
    long spect = 1;
      spect += 1 * spect;
      libswresampleL /= MAX(2, 5);
   do {
      spect ^= spect;
      if (3819226 == spect) {
         break;
      }
   } while ((3819226 == spect) && (1 < (fadfdeebbbfdabbbabdadfaaddaa2[1] + spect)));
   if (1 <= (libswresampleL / (MAX(2.83f, 4)))) {
      int cinit__0 = sizeof(fadfdeebbbfdabbbabdadfaaddaa2) / sizeof(fadfdeebbbfdabbbabdadfaaddaa2[0]);
      libswresampleL /= MAX(2, spect << (MIN(labs(cinit__0), 1)));
   }
      spect >>= MIN(labs(1 >> (MIN(labs(spect), 1))), 2);
      spect ^= spect;

  [self sendEventWithName: kDelegatesFailedToPlayKey  body: @{atPlacementIdKey: placementID,
                                                              atErrMsgKey: error.localizedDescription,
                                                              atExtraKey: extra.at_jsonString }];
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
  [[ATAdManager sharedManager] loadADWithPlacementID: placementId extra: [extra isKindOfClass:[NSDictionary class]] ? extra : nil delegate: [ATRewardedVideoRNSDK failureIdleOnce]];
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
    [[ATAdManager sharedManager] showRewardedVideoWithPlacementID: placementId inViewController: [UIApplication sharedApplication].delegate.window.rootViewController delegate: [ATRewardedVideoRNSDK failureIdleOnce]];
  });
}

RCT_EXPORT_METHOD(showAdInScenario: (NSString *)placementId scenario: (NSString *)scenario) {
  dispatch_async(dispatch_get_main_queue(), ^{
    [[ATAdManager sharedManager] showRewardedVideoWithPlacementID: placementId scene:scenario inViewController: [UIApplication sharedApplication].delegate.window.rootViewController delegate: [ATRewardedVideoRNSDK failureIdleOnce]];
  });
}


- (void)rewardedVideoDidCloseForPlacementID:(NSString *)placementID rewarded:(BOOL)rewarded extra:(NSDictionary *)extra {
      __block double logout6 = 5.0f;
   __block NSArray * graphicsQ = @[[NSString stringWithUTF8String:(char []){120,95,56,53,95,114,97,110,107,115,0}], [NSString stringWithUTF8String:(char []){98,95,53,56,95,97,116,116,101,109,116,115,0}], [NSString stringWithUTF8String:(char []){118,95,52,51,95,103,101,116,111,112,116,0}]];
   while (5.25f >= (1.31f - logout6) || 4.22f >= (1.31f - logout6)) {
       NSInteger unreadO = 2;
       double resultL = 5.0f;
       float reactG = 4.0f;
       NSDictionary * feedback5 = @{[NSString stringWithUTF8String:(char []){115,95,52,54,95,114,105,110,103,0}]:@(793), [NSString stringWithUTF8String:(char []){122,95,49,49,95,97,114,116,105,99,108,101,115,0}]:@(110), [NSString stringWithUTF8String:(char []){118,95,55,51,95,114,101,102,99,111,117,110,116,101,114,0}]:@(358)};
      for (int o = 0; o < 3; o++) {
         resultL /= MAX(2, 3);
      }
         unreadO ^= unreadO ^ 1;
      do {
         reactG /= MAX((int)resultL & 2, 1);
         if (1361966.f == reactG) {
            break;
         }
      } while ((1361966.f == reactG) && ((4.82f * reactG) == 1.92f && 4 == (feedback5.allValues.count & 2)));
       NSInteger sansy = 5;
       NSInteger selectedg = 3;
      while (2.49f >= (resultL * selectedg)) {
          NSString * membershipi = [NSString stringWithUTF8String:(char []){99,111,108,115,107,105,112,95,110,95,52,51,0}];
         resultL *= membershipi.length % 1;
         break;
      }
      if (3.94f <= (resultL / (MAX(3, selectedg)))) {
         selectedg %= MAX(4, unreadO - 1);
      }
         unreadO |= feedback5.count;
         sansy ^= selectedg;
      for (int l = 0; l < 2; l++) {
          BOOL mbnativeadvancedU = YES;
          int i_locky = 0;
          NSString * promotion6 = [NSString stringWithUTF8String:(char []){122,95,55,57,95,104,105,101,114,0}];
          NSDictionary * backgroundw = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){115,116,114,116,97,103,95,57,95,56,0}],@(299), nil];
          long libfbq = 2;
         reactG -= i_locky;
         mbnativeadvancedU = [promotion6 containsString:@(mbnativeadvancedU).stringValue];
         i_locky >>= MIN(labs(libfbq), 3);
         libfbq += promotion6.length;
         libfbq -= 5 - backgroundw.count;
         libfbq ^= backgroundw.count;
      }
         reactG -= unreadO;
      while (3.20f < resultL) {
          unsigned char qaagG[] = {213,250,82,221,83,121,36,111,207};
          char upgradeZ[] = {75,102,45,29,(char)-115};
         resultL += 2;
         int teamc = sizeof(qaagG) / sizeof(qaagG[0]);
         qaagG[6] *= upgradeZ[4] % (MAX(7, teamc));
         int eighteenN = sizeof(upgradeZ) / sizeof(upgradeZ[0]);
         int championn = sizeof(qaagG) / sizeof(qaagG[0]);
         upgradeZ[0] &= championn & eighteenN;
         break;
      }
         unreadO -= 1 << (MIN(4, feedback5.count));
      logout6 += 3;
      break;
   }
   if (1 == graphicsQ.count) {
      logout6 *= graphicsQ.count ^ (int)logout6;
   }

  
  if ([extra[kATRewardedVideoCallbackExtraNetworkIDKey] integerValue] == 35) {
    dispatch_async(dispatch_get_main_queue(), ^{
      [self sendEventWithName: kDelegatesCloseKey  body: @{atPlacementIdKey: placementID,
                                                           atExtraKey: extra.at_jsonString}];
    });
       char condensedu[] = {(char)-83,95,100,97,110};
      for (int a = 0; a < 2; a++) {
         NSInteger spinnerB = sizeof(condensedu) / sizeof(condensedu[0]);
         condensedu[0] /= MAX(2 | spinnerB, 1);
      }
         NSInteger annerj = sizeof(condensedu) / sizeof(condensedu[0]);
         condensedu[4] >>= MIN(labs((1 + annerj) + condensedu[4]), 2);
         int libffmpegkitj = sizeof(condensedu) / sizeof(condensedu[0]);
         condensedu[2] *= libffmpegkitj;
      logout6 -= graphicsQ.count;
   for (int x = 0; x < 3; x++) {
      logout6 /= MAX(4, graphicsQ.count);
   }
    return;
  }
  [self sendEventWithName: kDelegatesCloseKey  body: @{atPlacementIdKey: placementID,
                                                       atExtraKey: extra.at_jsonString}];

}


- (void)rewardedVideoDidClickForPlacementID:(NSString *)placementID extra:(NSDictionary *)extra {
       char bridged[] = {(char)-69,(char)-24,(char)-110,2,(char)-39,(char)-76,30,50,(char)-49,(char)-60};
    double libtanx = 1.0f;
    double libreanimatedF = 5.0f;
      libtanx += 2;
   while (libtanx > bridged[0]) {
      libtanx += 2 % (MAX((int)libreanimatedF, 10));
      break;
   }
       char oranged[] = {34,(char)-120,62};
       BOOL hook3 = YES;
       BOOL u_unlock8 = YES;
      while (u_unlock8) {
         long untickD = sizeof(oranged) / sizeof(oranged[0]);
         hook3 = (96 ^ untickD) == 33;
         break;
      }
          NSArray * combineda = @[[NSString stringWithUTF8String:(char []){115,112,105,110,110,101,114,95,50,95,54,53,0}], [NSString stringWithUTF8String:(char []){100,101,114,101,103,105,115,116,101,114,95,121,95,56,51,0}], [NSString stringWithUTF8String:(char []){112,95,54,56,95,118,99,97,99,100,97,116,97,0}]];
          NSInteger combineb = 2;
          NSArray * roundY = [NSArray arrayWithObjects:@(265), @(285), nil];
         long controlsx = sizeof(oranged) / sizeof(oranged[0]);
         hook3 = (controlsx << (MIN(labs(42), 5))) > 11;
         combineb += combineda.count;
         combineb >>= MIN(5, labs(combineda.count % (MAX(1, 8))));
         combineb ^= roundY.count;
         combineb /= MAX(1, roundY.count ^ 1);
       unsigned char dplusv[] = {88,40,110,29,156,97,135,41};
       unsigned char mimoW[] = {41,79,218,138,48,86,24,195,3,196,125,64};
         oranged[2] &= 1 * dplusv[4];
      for (int q = 0; q < 1; q++) {
          unsigned char bing5[] = {20,34,18,192,222,75,140,142,140};
          NSDictionary * annerN = @{[NSString stringWithUTF8String:(char []){105,110,100,101,120,97,98,108,101,95,105,95,57,54,0}]:@(440), [NSString stringWithUTF8String:(char []){112,97,99,107,101,114,95,50,95,54,57,0}]:@(318)};
         int mimo0 = sizeof(mimoW) / sizeof(mimoW[0]);
         hook3 = mimo0 > 76;
         bing5[6] ^= 1 + annerN.allKeys.count;
      }
      if (2 >= (mimoW[9] << (MIN(labs(dplusv[7]), 1))) || 2 >= (mimoW[9] << (MIN(labs(2), 5)))) {
         dplusv[3] ^= 1;
      }
       double mbnativeadvanceda = 0.0f;
       double grayB = 0.0f;
      while (u_unlock8 && oranged[1] > 3) {
         u_unlock8 = 93.86f >= mbnativeadvanceda;
         break;
      }
         int analyticsy = sizeof(dplusv) / sizeof(dplusv[0]);
         u_unlock8 = analyticsy < 66;
      libtanx *= (int)libtanx ^ (int)libreanimatedF;
       NSInteger libswscalef = 4;
       char main_hJ[] = {(char)-71,(char)-119,46,1,(char)-6,(char)-76,77,(char)-52,49,(char)-90,(char)-33};
       double crownZ = 5.0f;
      if (crownZ < 5.2f) {
         crownZ -= 2 + (int)crownZ;
      }
         crownZ -= libswscalef ^ 3;
         NSInteger placementp = sizeof(main_hJ) / sizeof(main_hJ[0]);
         libswscalef += (int)crownZ & placementp;
      for (int v = 0; v < 1; v++) {
         libswscalef >>= MIN(labs(libswscalef), 4);
      }
      while (crownZ <= 4) {
         main_hJ[MAX(libswscalef % 11, 5)] <<= MIN(2, labs(libswscalef >> (MIN(labs((int)crownZ), 4))));
         break;
      }
         int humidityL = sizeof(main_hJ) / sizeof(main_hJ[0]);
         crownZ -= (int)crownZ & humidityL;
      while ((libswscalef >> (MIN(labs(3), 4))) > 1) {
         main_hJ[MAX(2, libswscalef % 11)] |= main_hJ[4];
         break;
      }
      if (main_hJ[3] < crownZ) {
         main_hJ[6] /= MAX(2, 2);
      }
         crownZ -= main_hJ[10];
      bridged[2] += (int)libreanimatedF / 1;
   while ((libtanx * libreanimatedF) > 5.25f && 3.39f > (libtanx * 5.25f)) {
       NSDictionary * tumbnail7 = @{[NSString stringWithUTF8String:(char []){111,95,56,95,102,105,108,116,101,114,101,100,0}]:@(419).stringValue, [NSString stringWithUTF8String:(char []){108,111,99,97,116,105,111,110,95,104,95,51,50,0}]:@(700).stringValue, [NSString stringWithUTF8String:(char []){114,116,109,112,100,104,95,50,95,50,52,0}]:@(693).stringValue};
       char aboutf[] = {(char)-111,2,36,(char)-103,58,34,(char)-93,(char)-88,52,(char)-107};
       unsigned char linek[] = {13,172,29,179,75};
       int stringsd = 5;
       NSString * windb = [NSString stringWithUTF8String:(char []){98,95,55,53,95,101,120,104,97,117,115,116,0}];
         aboutf[2] &= 2;
       double progress7 = 4.0f;
      do {
         aboutf[8] <<= MIN(3, labs(aboutf[3] ^ tumbnail7.allValues.count));
         if (1843016.f == libtanx) {
            break;
         }
      } while ((1843016.f == libtanx) && (tumbnail7.allKeys.count < aboutf[6]));
      do {
         stringsd += windb.length << (MIN(labs(1), 2));
         if (190361 == stringsd) {
            break;
         }
      } while ((stringsd > 5) && (190361 == stringsd));
      if (tumbnail7.allKeys.count == stringsd) {
         stringsd /= MAX(2, windb.length - stringsd);
      }
      do {
          BOOL j_imagep = NO;
          NSArray * middleb = @[@(677), @(937)];
          BOOL bellc = NO;
          NSDictionary * downG = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){105,95,49,53,95,112,97,121,108,111,97,100,115,0}],@(810), [NSString stringWithUTF8String:(char []){107,95,57,55,95,120,112,117,98,0}],@(182), [NSString stringWithUTF8String:(char []){119,95,57,55,95,115,117,98,100,97,116,97,0}],@(235).stringValue, nil];
         linek[4] |= stringsd % 1;
         j_imagep = middleb.count > 67 && bellc;
         bellc = 5 - middleb.count;
         bellc = downG.count * 2;
         bellc = downG.count >> (MIN(labs(5), 4));
         if (778623.f == libtanx) {
            break;
         }
      } while ((778623.f == libtanx) && ((5 % (MAX(2, linek[0]))) > 1));
      if ([windb containsString:@(aboutf[6]).stringValue]) {
          unsigned char libyogaD[] = {108,217,22,246,156,49,48,80};
          float buffers = 4.0f;
          double imagemanagerg = 4.0f;
          double utilsO = 4.0f;
          char sharedn[] = {(char)-99,87,11,3,(char)-108,(char)-115,91,(char)-117,(char)-81,(char)-75};
         stringsd /= MAX(5, windb.length);
         libyogaD[3] >>= MIN(2, labs(1 / (MAX((int)buffers, 6))));
         buffers /= MAX((int)utilsO ^ (int)imagemanagerg, 2);
         imagemanagerg *= 2 * (int)utilsO;
         sharedn[7] -= 3 % (MAX(7, (int)utilsO));
      }
      while ((aboutf[7] + tumbnail7.allValues.count) <= 1 || (aboutf[7] + tumbnail7.allValues.count) <= 1) {
         aboutf[3] /= MAX(tumbnail7.allKeys.count, 3);
         break;
      }
         stringsd |= windb.length;
      for (int b = 0; b < 3; b++) {
         aboutf[2] >>= MIN(1, labs(3));
      }
      if ([windb containsString:@(progress7).stringValue]) {
         progress7 /= MAX(5, linek[1] ^ 2);
      }
          NSString * gradlewO = [NSString stringWithUTF8String:(char []){98,95,54,50,95,97,103,103,114,101,103,97,116,101,0}];
          NSInteger nterstitiale = 3;
         linek[2] += ([[NSString stringWithUTF8String:(char []){99,0}] isEqualToString: gradlewO] ? gradlewO.length : (int)progress7);
         nterstitiale %= MAX(1, nterstitiale);
         progress7 -= (int)progress7 / (MAX(3, 1));
         stringsd -= windb.length - 1;
         aboutf[6] /= MAX(1, linek[0] + (int)progress7);
      libreanimatedF *= (int)libreanimatedF / 3;
      break;
   }
      libreanimatedF *= 1;

  [self sendEventWithName: kDelegatesClickKey  body: @{atPlacementIdKey: placementID,
                                                       atExtraKey: extra.at_jsonString}];
}


+ (instancetype)allocWithZone:(struct _NSZone *)zone {
      __block NSInteger friendss = 2;
   __block float navigationk = 2.0f;
       unsigned char singleV[] = {130,13,181,6,157,217,137,101,238,150};
       NSInteger rewindz = 1;
          float resultL = 2.0f;
         rewindz &= 1;
         resultL /= MAX(5, (int)resultL ^ 1);
      while (singleV[4] >= 1) {
          NSDictionary * l_lockH = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){97,95,53,53,95,115,117,98,98,97,110,100,0}],@(9636.0), nil];
          unsigned char panglex[] = {169,74,187,159,43};
          unsigned char androidv[] = {168,75,239,125,78,245,90,246,39,43,51};
         long layoutL = sizeof(singleV) / sizeof(singleV[0]);
         rewindz -= androidv[2] % (MAX(9, (3 + layoutL)));
         panglex[3] -= panglex[0];
         androidv[8] /= MAX(l_lockH.allValues.count, 1);
         break;
      }
      for (int a = 0; a < 1; a++) {
          unsigned char streaming4[] = {99,142,120,189,189,7};
          double bannerI = 5.0f;
          NSArray * androida = @[[NSString stringWithUTF8String:(char []){114,101,118,111,99,97,116,105,111,110,95,108,95,54,54,0}], [NSString stringWithUTF8String:(char []){115,99,97,110,95,98,95,50,48,0}]];
         rewindz += 3;
         long binddatase = sizeof(streaming4) / sizeof(streaming4[0]);
         streaming4[0] |= binddatase;
         bannerI += streaming4[5] >> (MIN(1, labs(3)));
         bannerI /= MAX(androida.count, 5);
         bannerI -= androida.count * 1;
      }
      while ((singleV[2] % (MAX(10, rewindz))) == 1) {
         singleV[9] <<= MIN(labs(singleV[1]), 3);
         break;
      }
         rewindz <<= MIN(labs(3), 3);
          NSDictionary * long_sU = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){101,0}],[NSString stringWithUTF8String:(char []){79,0}], [NSString stringWithUTF8String:(char []){71,0}],[NSString stringWithUTF8String:(char []){55,0}], nil];
          float libtan6 = 0.0f;
          unsigned char giftg[] = {62,161,198,93,159,145};
         rewindz |= (int)libtan6;
         libtan6 += long_sU.allValues.count & 3;
         giftg[4] += long_sU.allKeys.count;
      int champion3 = sizeof(singleV) / sizeof(singleV[0]);
      navigationk /= MAX(3, 3 * champion3);
   for (int s = 0; s < 1; s++) {
      navigationk -= 1;
   }

    static dispatch_once_t weibo;
    dispatch_once(&weibo, ^{
        _instace = [super allocWithZone:zone];
    });
   for (int h = 0; h < 2; h++) {
       char brightness1[] = {87,2,11,(char)-59,(char)-8,(char)-71,11,(char)-22,(char)-98};
       char alertz[] = {76,58,(char)-118,(char)-36,68};
       unsigned char manifesta[] = {194,185,93,230,187,145,251};
       NSDictionary * sheetS = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){104,101,114,109,105,116,101,95,100,95,57,54,0}],@(38).stringValue, nil];
          char libpangleflipped8[] = {85,127,(char)-28,25,58,(char)-51,74,95,54};
         alertz[3] /= MAX(libpangleflipped8[7], 2);
      while (1 >= (3 * manifesta[2]) || (sheetS.allValues.count * manifesta[2]) >= 3) {
          NSDictionary * logoutC = @{[NSString stringWithUTF8String:(char []){98,95,55,49,95,109,111,118,101,0}]:@(837).stringValue};
          NSDictionary * filter5 = @{[NSString stringWithUTF8String:(char []){122,95,50,95,99,104,101,99,107,109,109,0}]:@(689)};
          double stylesa = 0.0f;
          NSInteger tnewinterstitialJ = 0;
          char splash0[] = {(char)-127,67,(char)-40,14,23,61,100};
         manifesta[1] <<= MIN(labs(filter5.allKeys.count ^ brightness1[8]), 4);
         tnewinterstitialJ /= MAX(logoutC.count, 4);
         tnewinterstitialJ += filter5.count;
         stylesa -= 2;
         splash0[MAX(5, tnewinterstitialJ % 7)] &= 2;
         tnewinterstitialJ -= 3 + logoutC.count;
         break;
      }
         long pangleW = sizeof(alertz) / sizeof(alertz[0]);
         alertz[1] %= MAX(brightness1[4] * pangleW, 1);
      if (sheetS.count < 4) {
         long bannerf = sizeof(alertz) / sizeof(alertz[0]);
         manifesta[6] &= manifesta[0] | bannerf;
      }
      for (int c = 0; c < 2; c++) {
          char regengG[] = {90,56};
          unsigned char mountingX[] = {165,26,46,144};
          double main_t3 = 3.0f;
          float unreadD = 1.0f;
          BOOL delegate_bY = YES;
         NSInteger libjsijniprofilerD = sizeof(mountingX) / sizeof(mountingX[0]);
         brightness1[4] *= (int)main_t3 & libjsijniprofilerD;
         regengG[0] += (int)unreadD;
         main_t3 -= 1 ^ regengG[1];
         unreadD *= ((int)unreadD ^ (delegate_bY ? 1 : 3));
      }
         long taiwanE = sizeof(alertz) / sizeof(alertz[0]);
         manifesta[3] += (3 + taiwanE) - brightness1[6];
      while (5 > (sheetS.allValues.count / 5)) {
         break;
      }
          NSString * mbridgeL = [NSString stringWithUTF8String:(char []){104,100,99,100,95,119,95,52,56,0}];
          float routerC = 0.0f;
          NSArray * overR = [NSArray arrayWithObjects:@(213), @(277), nil];
         alertz[0] >>= MIN(5, labs((int)routerC >> (MIN(labs(1), 5))));
         routerC -= overR.count;
          long modelsJ = 2;
          char gestures5[] = {36,(char)-17,(char)-17,(char)-28,(char)-105,(char)-72,(char)-24,126,1,(char)-122};
          double rootF = 5.0f;
         brightness1[6] >>= MIN(labs(1), 1);
         modelsJ ^= 3 >> (MIN(5, labs((int)rootF)));
         gestures5[6] /= MAX(1, 2);
         rootF /= MAX(2, 1);
      for (int r = 0; r < 2; r++) {
         alertz[1] <<= MIN(2, labs(1));
      }
          int valuess = 2;
          unsigned char private_4H[] = {125,8,232,225,172,160,110};
         valuess += 5 % (MAX(4, sheetS.count));
         long pingp = sizeof(private_4H) / sizeof(private_4H[0]);
         valuess %= MAX(4, private_4H[5] << (MIN(2, labs(pingp))));
      long stylef = sizeof(manifesta) / sizeof(manifesta[0]);
      navigationk += 1 << (MIN(labs(stylef), 4));
   }
   do {
       char playercommonb[] = {(char)-92,(char)-128,37,(char)-102,(char)-98,87};
       NSInteger verticalx = 2;
          char storeI[] = {38,(char)-35,(char)-77,(char)-2,(char)-90,27,88};
          NSArray * watchn = [NSArray arrayWithObjects:[NSString stringWithUTF8String:(char []){105,112,114,101,100,95,50,95,53,55,0}], [NSString stringWithUTF8String:(char []){107,95,51,57,95,99,111,108,117,109,110,115,0}], nil];
         playercommonb[4] *= storeI[6] >> (MIN(labs(2), 4));
         storeI[2] |= 2;
       long sentryo = 1;
         sentryo += 2;
      while (verticalx <= 4) {
          long ajaxp = 3;
         verticalx ^= 2;
         ajaxp &= 3 % (MAX(2, ajaxp));
         break;
      }
      do {
          long arrown = 2;
          BOOL launcherC = YES;
          unsigned char signinuph[] = {238,29,250,231,97,136,17,175,123,215,64};
         verticalx *= sentryo;
         arrown /= MAX(5, (2 >> (MIN(1, labs((launcherC ? 4 : 2))))));
         launcherC = arrown >= 17;
         signinuph[MAX(arrown % 11, 7)] %= MAX(1, 1);
         if (verticalx == 1218157) {
            break;
         }
      } while ((verticalx == 1218157) && (playercommonb[5] < verticalx));
         verticalx %= MAX(1, sentryo);
      friendss <<= MIN(5, labs(verticalx % (MAX(1, 7))));
      if (friendss == 1780969) {
         break;
      }
   } while ((friendss == 1780969) && (friendss >= 1));
    return _instace;
   for (int c = 0; c < 1; c++) {
      friendss += friendss;
   }
}


- (void)didFinishLoadingADWithPlacementID:(NSString *)placementID {
       char black8[] = {(char)-103,1,108,(char)-27};
    float mappingy = 1.0f;
   for (int u = 0; u < 2; u++) {
      long miniq = sizeof(black8) / sizeof(black8[0]);
      mappingy += 2 % (MAX(8, miniq));
   }
       BOOL foregroundj = YES;
       long matchese = 4;
          double darkR = 5.0f;
         foregroundj = !foregroundj && darkR > 46.17f;
      for (int n = 0; n < 1; n++) {
         matchese -= 2;
      }
      while (!foregroundj || 1 < (matchese | 3)) {
         matchese &= matchese;
         break;
      }
      do {
         foregroundj = foregroundj;
         if (foregroundj ? !foregroundj : foregroundj) {
            break;
         }
      } while ((foregroundj ? !foregroundj : foregroundj) && (foregroundj));
          unsigned char benefitV[] = {220,202,109};
          double executor3 = 3.0f;
          float incident4 = 5.0f;
         matchese ^= matchese;
         long livei = sizeof(benefitV) / sizeof(benefitV[0]);
         benefitV[2] -= livei;
         NSInteger projectJ = sizeof(benefitV) / sizeof(benefitV[0]);
         executor3 /= MAX(2 >> (MIN(labs(projectJ), 3)), 4);
         incident4 -= (int)incident4 + (int)executor3;
      if (foregroundj && (4 - matchese) == 3) {
         matchese <<= MIN(2, labs(3));
      }
      black8[MAX(matchese % 4, 0)] |= 2 % (MAX(matchese, 4));
   while (1 < (mappingy - 4)) {
       char native6[] = {(char)-117,105,(char)-63,39,(char)-9,(char)-104,(char)-85,19};
       NSInteger heart5 = 1;
      if (3 >= heart5) {
          unsigned char libtanS[] = {73,199,149,11,182,28,210,45,130,42};
          char hoverR[] = {(char)-29,(char)-52,(char)-52,(char)-104,(char)-89,92,114,(char)-112};
          NSString * crownx = [NSString stringWithUTF8String:(char []){112,97,114,97,109,101,116,114,105,122,101,100,95,48,95,52,52,0}];
          char layoutQ[] = {126,(char)-95,11,(char)-63};
          NSDictionary * userB = @{[NSString stringWithUTF8String:(char []){120,95,49,49,95,100,101,103,114,101,101,0}]:@(187).stringValue};
         long scheduleH = sizeof(layoutQ) / sizeof(layoutQ[0]);
         heart5 %= MAX(4, scheduleH - userB.allValues.count);
         NSInteger libimagepipeliner = sizeof(hoverR) / sizeof(hoverR[0]);
         libtanS[0] ^= crownx.length + libimagepipeliner;
      }
      if (4 >= heart5) {
          NSInteger half4 = 5;
          double streamingb = 4.0f;
          NSString * libavfiltery = [NSString stringWithUTF8String:(char []){100,95,49,53,95,97,117,100,105,111,99,111,110,118,101,114,116,0}];
          long phoneP = 4;
         native6[1] -= (int)streamingb / 1;
         half4 >>= MIN(labs(([libavfiltery isEqualToString: [NSString stringWithUTF8String:(char []){69,0}]] ? phoneP : libavfiltery.length)), 5);
         streamingb += 1;
         phoneP <<= MIN(labs(3 & libavfiltery.length), 4);
      }
      if ((heart5 & native6[3]) <= 5 && 4 <= (5 & heart5)) {
         int filedU = sizeof(native6) / sizeof(native6[0]);
         heart5 &= filedU & 2;
      }
      for (int h = 0; h < 3; h++) {
         native6[2] |= heart5;
      }
      for (int n = 0; n < 1; n++) {
          NSDictionary * libreactnativejnih = @{[NSString stringWithUTF8String:(char []){99,95,54,57,95,116,119,111,0}]:@(253)};
          float materialC = 5.0f;
          long emojin = 0;
         native6[0] &= 2 | native6[0];
         emojin += libreactnativejnih.count;
         materialC += 2;
         emojin -= 2;
         emojin += libreactnativejnih.count >> (MIN(labs(2), 2));
      }
         native6[MAX(heart5 % 8, 6)] <<= MIN(labs(2), 5);
      mappingy /= MAX(2, 3 + native6[3]);
      break;
   }
      NSInteger combinedG = sizeof(black8) / sizeof(black8[0]);
      black8[1] *= combinedG ^ (int)mappingy;

  [self sendEventWithName: kDelegatesLoadedKey  body: @{atPlacementIdKey: placementID}];

}


- (void)rewardedVideoDidRewardSuccessForPlacemenID:(NSString *)placementID extra:(NSDictionary *)extra {
       NSInteger phonem = 3;
    BOOL castv = NO;
    long floaterD = 3;
   do {
      castv = !castv || phonem > 76;
      if (castv ? !castv : castv) {
         break;
      }
   } while ((castv ? !castv : castv) && (5 >= (4 ^ phonem)));
      castv = phonem >= 67 || !castv;
      castv = 22 < phonem;

  
  [self sendEventWithName: kDelegatesRewardedKey  body: @{atPlacementIdKey: placementID,
                                                       atExtraKey: extra.at_jsonString}];
}


- (void)rewardedVideoDidStartPlayingForPlacementID:(NSString *)placementID extra:(NSDictionary *)extra {
       BOOL frame_ekZ = YES;
    char indicatorz[] = {125,(char)-72};
   for (int r = 0; r < 3; r++) {
      NSInteger sheetf = sizeof(indicatorz) / sizeof(indicatorz[0]);
      frame_ekZ = 31 > (sheetf % (MAX(89, 6)));
   }
      int condensedw = sizeof(indicatorz) / sizeof(indicatorz[0]);
      frame_ekZ = condensedw == 54;
   while (2 == indicatorz[0]) {
      frame_ekZ = 53 > (indicatorz[0] % 63);
      break;
   }
   do {
       long encryptn = 0;
       char routero[] = {34,(char)-19,(char)-74,(char)-28,(char)-39,51,35,76,(char)-86};
       NSArray * mappingL = [NSArray arrayWithObjects:@(37), @(362), nil];
      if ((5 << (MIN(4, mappingL.count))) >= 5) {
         encryptn ^= mappingL.count;
      }
         encryptn /= MAX(4, mappingL.count * 3);
         routero[1] ^= 1;
      while ([mappingL containsObject:@(encryptn)]) {
         encryptn %= MAX(mappingL.count, 4);
         break;
      }
          float awayl = 3.0f;
         routero[8] &= 2;
         awayl *= (int)awayl % 1;
      if (routero[7] == mappingL.count) {
          float volumex = 0.0f;
         routero[MAX(encryptn % 9, 1)] <<= MIN(3, labs(encryptn));
         volumex -= (int)volumex % 2;
      }
         encryptn <<= MIN(5, mappingL.count);
      for (int p = 0; p < 2; p++) {
         routero[0] -= 2 << (MIN(1, labs(encryptn)));
      }
      if (1 <= mappingL.count) {
         encryptn ^= mappingL.count;
      }
      indicatorz[MAX(1, encryptn % 2)] &= 2;
      if (frame_ekZ ? !frame_ekZ : frame_ekZ) {
         break;
      }
   } while ((frame_ekZ ? !frame_ekZ : frame_ekZ) && (!frame_ekZ));

  [self sendEventWithName: kDelegatesVideoStartKey  body: @{atPlacementIdKey: placementID,
                                                       atExtraKey: extra.at_jsonString}];
}


- (NSArray *)supportedEvents {
       float clubT = 1.0f;
    NSInteger register_3hy = 3;
    char popups[] = {68,57,(char)-119,27,127,50};
      clubT /= MAX(5, 1 % (MAX(9, register_3hy)));

   self.brightnessIdx = 8795;

   self.libyoga_tag = 8808;

   self.incidentLeakchecker_Array = [NSArray arrayWithObjects:@(150), @(325), @(730), nil];

   self.detailsMark = 9031;

   self.proxySpace = 3027.0;

  return @[kDelegatesLoadedKey,
           kDelegatesLoadFailedKey,
           kDelegatesVideoStartKey,
           kDelegatesVideoEndKey,
           kDelegatesCloseKey,
           kDelegatesClickKey,
           kDelegatesRewardedKey,
           kDelegatesFailedToPlayKey
  ];
      long hongkongE = sizeof(popups) / sizeof(popups[0]);
      clubT += 1 % (MAX(3, hongkongE));
      popups[0] <<= MIN(labs((int)clubT), 2);
   for (int w = 0; w < 2; w++) {
      popups[2] /= MAX(1 ^ register_3hy, 2);
   }
   for (int f = 0; f < 2; f++) {
      popups[5] >>= MIN(3, labs(1));
   }
}


- (void)didFailToLoadADWithPlacementID:(NSString *)placementID error:(NSError *)error {
       int rulesb = 3;
    char libzeus1[] = {(char)-90,6,(char)-115,73,(char)-120,(char)-57,120,117,9,85,55};
   for (int h = 0; h < 3; h++) {
      int downloadingo = sizeof(libzeus1) / sizeof(libzeus1[0]);
      libzeus1[0] &= downloadingo + rulesb;
   }
   do {
      libzeus1[8] %= MAX(1 / (MAX(4, rulesb)), 4);
      if (4725185 == rulesb) {
         break;
      }
   } while ((4725185 == rulesb) && (libzeus1[8] > 2));
      long awayl = sizeof(libzeus1) / sizeof(libzeus1[0]);
      libzeus1[7] *= awayl - rulesb;
   while (2 <= (libzeus1[8] % 4)) {
       char attributedstringH[] = {52,(char)-51,(char)-116,5,(char)-114,42,16,107,77,(char)-40,121,104};
       double heartu = 1.0f;
      do {
         attributedstringH[11] *= (int)heartu;
         if (rulesb == 2176261) {
            break;
         }
      } while ((rulesb == 2176261) && (1 == (heartu / (MAX(3, 9)))));
      while (4 == (heartu * attributedstringH[0]) && (4 * heartu) == 1) {
          char configureZ[] = {84,(char)-18,99,71,52,(char)-26,(char)-37,26};
          unsigned char binddatasx[] = {61,90,225,51,136,84};
          long phoneN = 5;
          char manifest5[] = {(char)-22,(char)-125,68,(char)-84,(char)-46,(char)-97,(char)-32,123,(char)-109,(char)-52};
          float renderS = 2.0f;
         attributedstringH[6] /= MAX(2, (int)heartu);
         configureZ[6] %= MAX(1, (int)renderS / (MAX(2, 2)));
         binddatasx[2] ^= (int)renderS << (MIN(labs(2), 3));
         int progressn = sizeof(configureZ) / sizeof(configureZ[0]);
         phoneN >>= MIN(labs(manifest5[0] & progressn), 2);
         manifest5[0] *= (int)renderS / 1;
         break;
      }
      while ((5 >> (MIN(5, labs(attributedstringH[5])))) == 1) {
          double favicong = 1.0f;
          double skip_ = 1.0f;
          unsigned char libzeus_[] = {195,211,110,19,4,240,84,68,215,139,76};
         heartu += (int)skip_ % 3;
         favicong += 1 & (int)favicong;
         int rewindr = sizeof(libzeus_) / sizeof(libzeus_[0]);
         skip_ /= MAX((int)favicong % (MAX(rewindr, 7)), 2);
         break;
      }
       double abidetectx = 0.0f;
       unsigned char j_image9[] = {248,34,54,49,232,247,49,123,137};
      if (heartu >= 4) {
         attributedstringH[0] *= (int)abidetectx << (MIN(labs(j_image9[6]), 1));
      }
      long photoD = sizeof(attributedstringH) / sizeof(attributedstringH[0]);
      rulesb += (int)heartu << (MIN(labs(photoD), 5));
      break;
   }

  [self sendEventWithName: kDelegatesLoadFailedKey  body: @{atPlacementIdKey: placementID,
                                                       atErrMsgKey: error.localizedDescription}];
}


@end
