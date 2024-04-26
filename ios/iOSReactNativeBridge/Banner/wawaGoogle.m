
#import "wawaGoogle.h"
#import <AnyThinkBanner/AnyThinkBanner.h>
#import "wawaShrinkHelper.h"
#import "wawaPage.h"
#import "wawaLibsgcore.h"



static NSString *kATBannerAdLoadingExtraInlineAdaptiveWidthKey = @"adaptive_width";
static NSString *kATBannerAdLoadingExtraInlineAdaptiveOrientationKey = @"adaptive_orientation";

static NSString *const kDelegatesLoadedKey = @"ATBannerLoaded";
static NSString *const kDelegatesLoadFailedKey = @"ATBannerLoadFail";
static NSString *const kDelegatesCloseButtonTappedKey = @"ATBannerCloseButtonTapped";
static NSString *const kDelegatesClickKey = @"ATBannerClick";
static NSString *const kDelegatesAutoRefreshKey = @"ATBannerRefresh";
static NSString *const kDelegatesFailedToRefreshKey = @"ATBannerRefreshFail";
static NSString *const kDelegatesShowKey = @"ATBannerShow";

@interface ATBannerRNSDK()<ATBannerDelegate>
@property(nonatomic, assign)float  subbasketballplayerPadding;
@property(nonatomic, assign)NSInteger  combinedTag;




@property(nonatomic, strong) NSMutableDictionary<NSString*, UIView*>* stationsGrey;

@end

@implementation ATBannerRNSDK

static id _instace;

+(instancetype) queryInitialRawReadyRefresh {
    static dispatch_once_t onceToken;
    dispatch_once(&onceToken, ^{
      _instace = [[super alloc] init];
    });
    return _instace;
}


- (void)bannerView:(ATBannerView *)bannerView didCloseWithPlacementID:(NSString *)placementID extra:(NSDictionary *)extra {
       NSDictionary * sideb = @{[NSString stringWithUTF8String:(char []){111,95,53,51,95,110,97,116,105,111,110,97,108,0}]:@(434), [NSString stringWithUTF8String:(char []){112,114,101,115,101,110,116,97,116,105,111,110,115,95,120,95,56,57,0}]:@(544)};
    double reducerh = 2.0f;
   for (int q = 0; q < 3; q++) {
      reducerh *= 3 * sideb.count;
   }
      reducerh *= sideb.count;
       NSInteger hooksO = 2;
      do {
         hooksO ^= hooksO;
         if (2514793 == hooksO) {
            break;
         }
      } while ((2514793 == hooksO) && (2 < (hooksO / (MAX(1, 8)))));
       double giftbuttons = 4.0f;
      if (hooksO < 5) {
         hooksO %= MAX(3, 5);
      }
      reducerh += (int)reducerh;
   for (int m = 0; m < 2; m++) {
       unsigned char mountingj[] = {68,82,102,167,67,53,41,100,57,81};
          unsigned char kuaishou_[] = {27,145,214,218,255,79,216,212,148,244,75};
         NSInteger notificationgrayR = sizeof(kuaishou_) / sizeof(kuaishou_[0]);
         mountingj[5] *= 3 - notificationgrayR;
      for (int b = 0; b < 2; b++) {
         NSInteger layoutS = sizeof(mountingj) / sizeof(mountingj[0]);
         mountingj[5] <<= MIN(1, labs(layoutS / (MAX(3, mountingj[9]))));
      }
         long private_dwt = sizeof(mountingj) / sizeof(mountingj[0]);
         mountingj[4] %= MAX(private_dwt, 2);
      reducerh /= MAX(1 - sideb.count, 4);
   }

  
}

- (NSMutableDictionary *) stationsGrey {
  if (_stationsGrey == nil) {
    _stationsGrey = [NSMutableDictionary<NSString*, UIView*> new];
  }
  return _stationsGrey;
}

UIEdgeInsets at_safeAreaInsets() {
  if (@available(iOS 11.0, *)) {
    return ([[UIApplication sharedApplication].keyWindow respondsToSelector:@selector(safeAreaInsets)] ? [UIApplication sharedApplication].keyWindow.safeAreaInsets : UIEdgeInsetsZero);
  }
  
  return UIEdgeInsetsZero;
}

CGRect parseRectJsonStr(NSString* jsonStr) {
    CGRect rect = CGRectZero;
    if (jsonStr != nil) {
        NSDictionary *rectDict = [NSJSONSerialization at_JSONObjectWithString:jsonStr options:NSJSONReadingAllowFragments error:nil];
        if ([rectDict isKindOfClass:[NSDictionary class]]) {
            CGFloat scale = [rectDict[@"usesPixel"] boolValue] ? UIScreen.mainScreen.nativeScale : 1.0f;
            rect = CGRectMake([rectDict[@"x"] doubleValue] / scale, [rectDict[@"y"] doubleValue] / scale, [rectDict[@"width"] doubleValue] / scale, [rectDict[@"height"] doubleValue] / scale);
        }
    }
    return rect;
}

NSDictionary *parseExtraJsonStr(NSString* jsonStr) {
  
  NSMutableDictionary *extra = [NSMutableDictionary dictionary];
  if (jsonStr != nil) {
      NSDictionary *extraDict = [NSJSONSerialization at_JSONObjectWithString:jsonStr options:NSJSONReadingAllowFragments error:nil];
      if ([extraDict isKindOfClass:[NSDictionary class]]) {
          NSLog(@"loadBannerExtraDict = %@", extraDict);
          CGFloat scale = [extraDict[@"usesPixel"] boolValue] ? UIScreen.mainScreen.nativeScale : 1.0f;
          extra[kATAdLoadingExtraBannerAdSizeKey] = [NSValue valueWithCGSize:CGSizeMake([extraDict[@"width"] doubleValue] / scale, [extraDict[@"height"] doubleValue] / scale)];
            if (extraDict[kATBannerAdLoadingExtraInlineAdaptiveWidthKey] != nil && extraDict[kATBannerAdLoadingExtraInlineAdaptiveOrientationKey] != nil) {
              
               
            }
        }
        if (extra[kATAdLoadingExtraBannerAdSizeKey] == nil) {
            extra[kATAdLoadingExtraBannerAdSizeKey] = [NSValue valueWithCGSize:CGSizeMake(320.0f, 50.0f)];
        }
    }
    return extra;
}

RCT_EXPORT_MODULE()


- (void)bannerView:(ATBannerView *)bannerView failedToAutoRefreshWithPlacementID:(NSString *)placementID error:(NSError *)error {
       NSDictionary * dicex = @{[NSString stringWithUTF8String:(char []){118,95,52,49,95,111,98,116,97,105,110,0}]:@(467), [NSString stringWithUTF8String:(char []){116,114,97,110,115,108,97,116,111,110,95,106,95,50,49,0}]:@(416).stringValue, [NSString stringWithUTF8String:(char []){115,105,109,117,108,97,116,101,95,56,95,51,50,0}]:@(654)};
    double iconchatsendp = 0.0f;
    char mimoO[] = {(char)-111,110,(char)-71,(char)-47,(char)-24,(char)-32};
   do {
      iconchatsendp /= MAX(2, dicex.count + 1);
      if (dicex.count == 3193769) {
         break;
      }
   } while ((dicex.count == 3193769) && (5 == (mimoO[3] | 3)));
   for (int j = 0; j < 2; j++) {
      long malaysiao = sizeof(mimoO) / sizeof(mimoO[0]);
      iconchatsendp -= malaysiao ^ (int)iconchatsendp;
   }
   while (![dicex.allKeys containsObject:@(iconchatsendp)]) {
      iconchatsendp += (int)iconchatsendp | dicex.allValues.count;
      break;
   }
   for (int i = 0; i < 3; i++) {
       long libffmpegkitN = 3;
       unsigned char redirect5[] = {219,165,33,26,127,38,96,152,176,32,68};
       float videocommony = 3.0f;
       char libpangleflippedJ[] = {24,(char)-124,38,(char)-25,(char)-35};
       float notificationgray0 = 3.0f;
      while (5 > redirect5[5]) {
         redirect5[4] -= libffmpegkitN - 3;
         break;
      }
         libpangleflippedJ[MAX(libffmpegkitN % 5, 0)] += libffmpegkitN;
      if (4 >= (1 + libpangleflippedJ[2])) {
         libpangleflippedJ[1] -= (int)videocommony << (MIN(1, labs(3)));
      }
         int graphicsL = sizeof(redirect5) / sizeof(redirect5[0]);
         redirect5[4] /= MAX(2, graphicsL);
      if (2 > libpangleflippedJ[3]) {
          char chinah[] = {(char)-119,121,96,25,100,93,(char)-85,(char)-23,(char)-38,52};
          double leakcheckerA = 2.0f;
          float edit0 = 2.0f;
          double typesU = 3.0f;
          unsigned char valuesB[] = {121,130,239,80,248,80};
         videocommony /= MAX((int)edit0, 2);
         chinah[1] %= MAX(4, (int)leakcheckerA);
         int iconlogoutv = sizeof(chinah) / sizeof(chinah[0]);
         leakcheckerA += iconlogoutv;
         edit0 /= MAX((int)typesU, 5);
         long sideR = sizeof(chinah) / sizeof(chinah[0]);
         long change5 = sizeof(valuesB) / sizeof(valuesB[0]);
         typesU += sideR / (MAX(change5, 7));
      }
      for (int r = 0; r < 3; r++) {
         long areaJ = sizeof(libpangleflippedJ) / sizeof(libpangleflippedJ[0]);
         libpangleflippedJ[1] ^= areaJ >> (MIN(5, labs((int)videocommony)));
      }
      while ((1 + redirect5[3]) >= 3) {
         redirect5[MAX(libffmpegkitN % 11, 2)] >>= MIN(labs((int)videocommony), 2);
         break;
      }
         redirect5[9] += (int)videocommony << (MIN(labs(2), 3));
      for (int n = 0; n < 2; n++) {
         libpangleflippedJ[1] /= MAX(libffmpegkitN * (int)notificationgray0, 2);
      }
         long profilepico = sizeof(redirect5) / sizeof(redirect5[0]);
         videocommony += profilepico;
         NSInteger cornerx = sizeof(libpangleflippedJ) / sizeof(libpangleflippedJ[0]);
         redirect5[8] %= MAX(3 - cornerx, 3);
      for (int n = 0; n < 3; n++) {
         notificationgray0 *= libpangleflippedJ[1];
      }
          int emojiz = 1;
         videocommony += redirect5[1];
         emojiz &= 2;
      while (notificationgray0 < redirect5[6]) {
         redirect5[9] <<= MIN(5, labs(libffmpegkitN & 1));
         break;
      }
          float dycreatorZ = 1.0f;
         redirect5[5] %= MAX(3 ^ libffmpegkitN, 1);
         dycreatorZ /= MAX(5, 2);
      iconchatsendp += libffmpegkitN;
   }
   for (int q = 0; q < 3; q++) {
       double guidew = 1.0f;
       int iconpipexpandU = 4;
       float unreadG = 1.0f;
       double volumeb = 3.0f;
          NSArray * graphM = @[@(758), @(93)];
          long photog = 0;
          unsigned char iconclosei[] = {135,237,217,136,40,118};
         iconpipexpandU >>= MIN(labs(iconpipexpandU), 2);
         photog %= MAX(3, graphM.count);
         photog *= 2 >> (MIN(3, graphM.count));
         iconclosei[4] >>= MIN(labs(3 ^ graphM.count), 2);
      for (int y = 0; y < 3; y++) {
         guidew *= 2;
      }
      do {
         iconpipexpandU ^= (int)unreadG | 3;
         if (1320095 == iconpipexpandU) {
            break;
         }
      } while ((1320095 == iconpipexpandU) && (3 > (iconpipexpandU % (MAX(5, 1))) && 5.73f > (iconpipexpandU / (MAX(guidew, 9)))));
      while (1.71f > (3.6f * unreadG) || (unreadG * volumeb) > 3.6f) {
          char hiad1[] = {52,50,45};
          long nterstitialm = 1;
          unsigned char champion1[] = {171,225,30,35,190,129,33,204,224,11};
          unsigned char iconviewergifV[] = {121,217,176,155,201,177,64,44,19,235,60};
         volumeb *= iconviewergifV[9];
         NSInteger baiduadsR = sizeof(champion1) / sizeof(champion1[0]);
         hiad1[1] -= hiad1[0] % (MAX(2, (3 + baiduadsR)));
         nterstitialm %= MAX(3, nterstitialm + 1);
         iconviewergifV[MAX(nterstitialm % 11, 1)] -= 2;
         break;
      }
      do {
          double tooltipsi = 3.0f;
          char backgroundQ[] = {(char)-41,68,(char)-18,(char)-43,33,11,(char)-64};
         unreadG -= 1 - (int)volumeb;
         int iconarrowrightblackD = sizeof(backgroundQ) / sizeof(backgroundQ[0]);
         tooltipsi -= (int)tooltipsi ^ iconarrowrightblackD;
         if (1104972.f == unreadG) {
            break;
         }
      } while ((1104972.f == unreadG) && (3.44f > (1.19f / (MAX(4, unreadG)))));
          long statsnomoredatae = 4;
          long delegate_f_V = 2;
         unreadG -= delegate_f_V >> (MIN(labs((int)volumeb), 1));
         statsnomoredatae -= statsnomoredatae;
         delegate_f_V *= statsnomoredatae;
      if (4.64f < (guidew / (MAX(5, 5.6f))) || (iconpipexpandU & 3) < 5) {
          BOOL policy9 = NO;
          char filed8[] = {71,114,(char)-15,18,(char)-48,(char)-10,82,(char)-107,68};
          NSArray * iconbackwhiteT = [NSArray arrayWithObjects:@(906), @(61), @(583), nil];
          NSInteger recommendationC = 2;
         guidew += iconbackwhiteT.count * recommendationC;
         NSInteger arrowrighth = sizeof(filed8) / sizeof(filed8[0]);
         policy9 = (62 % (MAX(1, arrowrighth))) == 22;
         policy9 = iconbackwhiteT.count | 5;
         recommendationC |= ((policy9 ? 2 : 1));
      }
         iconpipexpandU <<= MIN(5, labs(1));
       double auto_fh = 3.0f;
       double entryL = 2.0f;
      if (guidew == 1.35f) {
         guidew *= 3;
      }
         entryL /= MAX(4, (int)entryL);
         volumeb -= 1 - (int)guidew;
      iconchatsendp /= MAX(1 / (MAX((int)unreadG, 9)), 3);
   }

  [self sendEventWithName: kDelegatesFailedToRefreshKey  body: @{atPlacementIdKey: placementID,
                                                          atErrMsgKey: error.localizedDescription}];
}

RCT_EXPORT_METHOD(loadAd: (NSString *)placementId setting: (NSString *)setting) {
    dispatch_async(dispatch_get_main_queue(), ^{
      
      NSDictionary *dic = parseExtraJsonStr(setting);
      [[ATAdManager sharedManager] loadADWithPlacementID:placementId extra:[dic isKindOfClass:[NSDictionary class]] ? dic : nil delegate:[ATBannerRNSDK queryInitialRawReadyRefresh]];
  });
}

RCT_EXPORT_METHOD(hasAdReady: (NSString *)placementId promise: (RCTPromiseResolveBlock)promise rejector:(RCTPromiseRejectBlock)reject) {
  BOOL ready = [[ATAdManager sharedManager] bannerAdReadyForPlacementID: placementId];
  promise(@(ready));
}

RCT_EXPORT_METHOD(checkAdStatus: (NSString *)placementId promise: (RCTPromiseResolveBlock)promise rejector:(RCTPromiseRejectBlock)reject) {
  ATCheckLoadModel *checkLoadModel = [[ATAdManager sharedManager] checkBannerLoadStatusForPlacementID:placementId];
  NSMutableDictionary *statusDict = [NSMutableDictionary dictionary];
  statusDict[@"isLoading"] = @(checkLoadModel.isLoading);
  statusDict[@"isReady"] = @(checkLoadModel.isReady);
  statusDict[@"adInfo"] = checkLoadModel.adOfferInfo;
  NSLog(@"ATRewardedVideoRNSDK::statusDict = %@", statusDict);
  promise(statusDict.at_AdInfojsonString);
}

RCT_EXPORT_METHOD(showAdInPosition: (NSString *)placementId position: (NSString *)position) {
  dispatch_async(dispatch_get_main_queue(), ^{
      ATBannerView *bannerView = [[ATAdManager sharedManager] retrieveBannerViewForPlacementID: placementId];
      if (bannerView != nil) {
          [ATBannerRNSDK queryInitialRawReadyRefresh].stationsGrey[placementId] = bannerView;
          bannerView.delegate = [ATBannerRNSDK queryInitialRawReadyRefresh];
          bannerView.frame = CGRectMake((CGRectGetWidth(UIScreen.mainScreen.bounds) - CGRectGetWidth(bannerView.bounds)) / 2.0f, [@{@"top":@(at_safeAreaInsets().top), @"bottom":@(CGRectGetHeight(UIScreen.mainScreen.bounds) - at_safeAreaInsets().bottom - CGRectGetHeight(bannerView.bounds))}[position] doubleValue] , CGRectGetWidth(bannerView.bounds), CGRectGetHeight(bannerView.bounds));
          [[UIApplication sharedApplication].keyWindow.rootViewController.view addSubview:bannerView];
      }
  });
}

RCT_EXPORT_METHOD(showAdInRectangle: (NSString *)placementId showAdRect: (NSString *)rectJsonStr) {
  dispatch_async(dispatch_get_main_queue(), ^{
      ATBannerView *bannerView = [[ATAdManager sharedManager] retrieveBannerViewForPlacementID: placementId];
      if (bannerView != nil) {
          [ATBannerRNSDK queryInitialRawReadyRefresh].stationsGrey[placementId] = bannerView;
          bannerView.delegate = [ATBannerRNSDK queryInitialRawReadyRefresh];
          bannerView.frame = parseRectJsonStr(rectJsonStr);
          [[UIApplication sharedApplication].keyWindow.rootViewController.view addSubview:bannerView];
      }
  });
}

RCT_EXPORT_METHOD(hideAd: (NSString *)placementId) {
  dispatch_async(dispatch_get_main_queue(), ^{
      [ATBannerRNSDK queryInitialRawReadyRefresh].stationsGrey[placementId].hidden = YES;
  });
}

RCT_EXPORT_METHOD(reShowAd: (NSString *)placementId) {
  dispatch_async(dispatch_get_main_queue(), ^{
      [ATBannerRNSDK queryInitialRawReadyRefresh].stationsGrey[placementId].hidden = NO;
  });
}

RCT_EXPORT_METHOD(removeAd: (NSString *)placementId) {
  dispatch_async(dispatch_get_main_queue(), ^{
      [[ATBannerRNSDK queryInitialRawReadyRefresh].stationsGrey[placementId] removeFromSuperview];
      [[ATBannerRNSDK queryInitialRawReadyRefresh].stationsGrey removeObjectForKey:placementId];
  });
}



- (void)didFinishLoadingADWithPlacementID:(NSString *)placementID {
       float point_ = 4.0f;
    char auto_du[] = {(char)-60,(char)-107,(char)-51,40};
    double yellowanimationliveu = 5.0f;
   while ((auto_du[1] / (MAX(8, yellowanimationliveu))) == 3) {
       char layouta[] = {62,(char)-15,109,3,6};
       char iconclosewhite4[] = {(char)-20,(char)-79,(char)-112,(char)-83,64,15};
       unsigned char langR[] = {113,143,232,247,120,21,20};
          unsigned char reddownarrowj[] = {25,125,29,23,14,60,238,108};
         int sideM = sizeof(langR) / sizeof(langR[0]);
         langR[4] |= (2 + sideM) / (MAX(iconclosewhite4[2], 7));
         long bottomf = sizeof(reddownarrowj) / sizeof(reddownarrowj[0]);
         reddownarrowj[3] >>= MIN(labs(bottomf * 2), 3);
         long iconuser2 = sizeof(iconclosewhite4) / sizeof(iconclosewhite4[0]);
         long icondownimgz = sizeof(langR) / sizeof(langR[0]);
         langR[1] ^= iconuser2 / (MAX(10, icondownimgz));
      while (1 >= langR[3]) {
          NSInteger airbnbstarselectedZ = 2;
          long actionp = 4;
          float watchnowbgI = 2.0f;
          BOOL roomy = NO;
         langR[4] ^= 2;
         airbnbstarselectedZ += ((int)watchnowbgI / (MAX(10, (roomy ? 1 : 4))));
         actionp &= 1 & (int)watchnowbgI;
         roomy = !roomy;
         break;
      }
      while ((iconclosewhite4[4] | 4) < 2 && 4 < (layouta[3] | iconclosewhite4[4])) {
          char themeM[] = {(char)-4,(char)-122,(char)-94,(char)-58,(char)-61,96,123,65,(char)-104};
          BOOL xnewarchdefaultse = YES;
          char plusS[] = {(char)-33,(char)-39,20,(char)-16,(char)-63,54,(char)-56,(char)-81,(char)-97,105};
          NSArray * fullL = [NSArray arrayWithObjects:@(178), @(684), nil];
          unsigned char j_player1[] = {134,57,140,250,196,18,33,134,106,57,196,128};
         iconclosewhite4[1] ^= fullL.count >> (MIN(labs(2), 1));
         int launch1 = sizeof(plusS) / sizeof(plusS[0]);
         themeM[3] <<= MIN(3, labs(launch1));
         xnewarchdefaultse = 6 == plusS[1];
         NSInteger libswscalev = sizeof(themeM) / sizeof(themeM[0]);
         j_player1[1] &= 1 ^ libswscalev;
         break;
      }
         int aboutg = sizeof(langR) / sizeof(langR[0]);
         langR[1] *= iconclosewhite4[0] | aboutg;
          unsigned char qaag0[] = {130,212};
          BOOL phoneshareI = YES;
         iconclosewhite4[2] += (2 | (phoneshareI ? 5 : 4));
         NSInteger switch_goV = sizeof(qaag0) / sizeof(qaag0[0]);
         qaag0[0] <<= MIN(labs(2 | switch_goV), 4);
         NSInteger plust = sizeof(qaag0) / sizeof(qaag0[0]);
         phoneshareI = plust <= qaag0[0];
      if (layouta[2] == 1) {
         NSInteger spect = sizeof(langR) / sizeof(langR[0]);
         iconclosewhite4[5] <<= MIN(2, labs(layouta[0] - (1 + spect)));
      }
       unsigned char graphicsm[] = {177,254,176,61,158,239};
       unsigned char imagenomoredatad[] = {45,233,10,58,56,44,16,47,254};
      if (2 == (imagenomoredatad[0] ^ 3)) {
          NSArray * fieldW = @[@(1399.0)];
         int mergerK = sizeof(graphicsm) / sizeof(graphicsm[0]);
         int neonK = sizeof(imagenomoredatad) / sizeof(imagenomoredatad[0]);
         layouta[0] <<= MIN(3, labs(mergerK >> (MIN(labs(neonK), 3))));
      }
      int giftO = sizeof(langR) / sizeof(langR[0]);
      auto_du[0] >>= MIN(2, labs(giftO % 3));
      break;
   }
   while (2 < (4 * yellowanimationliveu)) {
      auto_du[3] += 3 % (MAX(9, (int)yellowanimationliveu));
      break;
   }
   while (point_ == auto_du[2]) {
      int updatesC = sizeof(auto_du) / sizeof(auto_du[0]);
      auto_du[2] <<= MIN(3, labs(1 | updatesC));
      break;
   }
   if (3.16f >= (2.28f + point_) || (2.28f + point_) >= 3.57f) {
       long projectF = 0;
      while (5 <= projectF) {
         projectF *= projectF;
         break;
      }
       int manifestt = 1;
      do {
         projectF *= projectF / (MAX(2, manifestt));
         if (projectF == 2962829) {
            break;
         }
      } while ((projectF == 2962829) && (2 <= manifestt));
      yellowanimationliveu += 2 ^ auto_du[2];
   }
   while (1 > (yellowanimationliveu - auto_du[2])) {
      NSInteger iconrefreshu = sizeof(auto_du) / sizeof(auto_du[0]);
      auto_du[2] &= 2 ^ iconrefreshu;
      break;
   }
      auto_du[0] <<= MIN(labs((int)yellowanimationliveu >> (MIN(labs((int)point_), 2))), 2);

  [self sendEventWithName: kDelegatesLoadedKey  body: @{atPlacementIdKey: placementID}];
}


- (void)bannerView:(ATBannerView *)bannerView didTapCloseButtonWithPlacementID:(NSString *)placementID extra:(NSDictionary *)extra {
       BOOL statisticsactiveT = NO;
    float libswscaleN = 5.0f;
   if ((3.0f * libswscaleN) >= 2 || 3.0f >= libswscaleN) {
      statisticsactiveT = statisticsactiveT && 83.21f == libswscaleN;
   }
   do {
      statisticsactiveT = !statisticsactiveT;
      if (statisticsactiveT ? !statisticsactiveT : statisticsactiveT) {
         break;
      }
   } while ((statisticsactiveT ? !statisticsactiveT : statisticsactiveT) && ((libswscaleN + 3.76f) >= 3));
       NSInteger scrollviewm = 1;
       NSDictionary * guided = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){98,95,50,53,95,119,114,97,112,100,101,116,101,99,116,0}],@(4388.0), nil];
       BOOL shielddoneZ = NO;
          char issub0[] = {(char)-96,126,(char)-114,(char)-76,(char)-116,(char)-14,(char)-105,7,64,(char)-117,(char)-34,(char)-84};
          NSDictionary * mbnativeadvanced9 = @{[NSString stringWithUTF8String:(char []){114,101,115,101,116,98,117,102,95,57,95,57,57,0}]:[NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){108,95,53,49,95,99,111,109,112,108,101,109,101,110,116,0}],@(9016.0), nil]};
         scrollviewm &= 3;
         NSInteger cancelq = sizeof(issub0) / sizeof(issub0[0]);
         issub0[0] -= cancelq;
          NSString * anner6 = [NSString stringWithUTF8String:(char []){109,105,108,108,105,115,95,122,95,56,56,0}];
          unsigned char recommendationF[] = {75,16,171,65,18,160,218,208,57};
         shielddoneZ = 57 < recommendationF[3];
         recommendationF[2] |= 2 & anner6.length;
      while ((3 << (MIN(2, guided.allValues.count))) == 3) {
         scrollviewm ^= guided.count;
         break;
      }
          int leftA = 4;
         scrollviewm &= guided.count;
         leftA &= leftA;
      if (1 >= guided.allValues.count) {
          NSString * othery = [NSString stringWithUTF8String:(char []){107,95,51,48,95,114,101,113,117,97,110,116,0}];
          BOOL armvaF = YES;
         shielddoneZ = (16 >= ((!shielddoneZ ? 16 : othery.length) ^ othery.length));
         armvaF = armvaF && armvaF;
      }
          NSString * foregroundJ = [NSString stringWithUTF8String:(char []){108,95,51,55,95,118,112,108,97,121,101,114,0}];
         shielddoneZ = scrollviewm <= 58;
         shielddoneZ = 44 < guided.allValues.count;
      while (4 >= (scrollviewm % 1) || (1 % (MAX(3, guided.allKeys.count))) >= 5) {
         scrollviewm *= ((shielddoneZ ? 1 : 4) % (MAX(guided.allValues.count, 7)));
         break;
      }
         shielddoneZ = guided.allKeys.count <= 73;
      statisticsactiveT = 9 <= scrollviewm || !statisticsactiveT;
   for (int n = 0; n < 1; n++) {
      statisticsactiveT = libswscaleN > 65.57f || statisticsactiveT;
   }

  [self sendEventWithName: kDelegatesCloseButtonTappedKey  body: @{atPlacementIdKey: placementID,
                                                          atExtraKey: extra.at_jsonString}];
}


- (void)bannerView:(ATBannerView *)bannerView didClickWithPlacementID:(NSString *)placementID extra:(NSDictionary *)extra {
       BOOL dycreatorM = NO;
    NSString * episodeT = [NSString stringWithUTF8String:(char []){101,110,99,114,121,112,116,95,97,95,49,48,0}];
      dycreatorM = episodeT.length ^ 5;
   if (5 == episodeT.length) {
      dycreatorM = ![episodeT containsString:@(dycreatorM).stringValue];
   }

  [self sendEventWithName: kDelegatesClickKey  body: @{atPlacementIdKey: placementID,
                                                          atExtraKey: extra.at_jsonString}];
}


- (void)didFailToLoadADWithPlacementID:(NSString *)placementID error:(NSError *)error {
       unsigned char invite7[] = {243,44};
    NSDictionary * homeinactiveh = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){90,0}],[NSString stringWithUTF8String:(char []){120,0}], nil];
      invite7[1] *= homeinactiveh.allKeys.count;
       long iconmegaphone8 = 4;
          char eactp[] = {74,(char)-30,77,(char)-3,25,41,(char)-79,72,(char)-39,34,(char)-74,(char)-55};
          char android1[] = {(char)-49,(char)-1,(char)-106,(char)-19,(char)-12,(char)-128,(char)-18};
          char airbnbstarselectedn[] = {115,(char)-75,(char)-87,(char)-76,36,54};
         iconmegaphone8 &= 3;
         long libavfilter1 = sizeof(airbnbstarselectedn) / sizeof(airbnbstarselectedn[0]);
         eactp[8] <<= MIN(4, labs(libavfilter1));
         long predictionlossE = sizeof(android1) / sizeof(android1[0]);
         android1[2] /= MAX(3, predictionlossE / 1);
         iconmegaphone8 |= 3 / (MAX(7, iconmegaphone8));
         iconmegaphone8 &= iconmegaphone8 & 2;
      iconmegaphone8 += homeinactiveh.count & 4;
   if ((homeinactiveh.count & 1) <= 2 || 1 <= (invite7[1] & homeinactiveh.count)) {
   }

  [self sendEventWithName: kDelegatesLoadFailedKey  body: @{atPlacementIdKey: placementID,
                                                          atErrMsgKey: error.localizedDescription}];
}


- (NSArray<NSString *> *)supportedEvents {
       char commonz[] = {112,36};
    BOOL iconwatchx = YES;
       long mimoB = 2;
       unsigned char turnb[] = {110,196};
       unsigned char sigmobp[] = {82,214,50,198,96,241,125,16,159};
      for (int z = 0; z < 3; z++) {
          long dragclosev = 0;
          NSInteger libreactperfloggerjnit = 1;
         int storeM = sizeof(sigmobp) / sizeof(sigmobp[0]);
         turnb[0] >>= MIN(4, labs(1 | storeM));
         dragclosev |= 3;
         libreactperfloggerjnit *= libreactperfloggerjnit % 3;
      }
         mimoB %= MAX(4, sigmobp[8]);
      for (int x = 0; x < 3; x++) {
         int statione = sizeof(sigmobp) / sizeof(sigmobp[0]);
         turnb[1] <<= MIN(labs(statione), 2);
      }
         long acceptedt = sizeof(sigmobp) / sizeof(sigmobp[0]);
         mimoB += turnb[0] / (MAX(3, (2 + acceptedt)));
          char giftbuttonP[] = {46,(char)-35,38,20,39,97,76,(char)-37,(char)-73,35};
          char description_pX[] = {(char)-83,(char)-66};
         long baidut = sizeof(giftbuttonP) / sizeof(giftbuttonP[0]);
         turnb[MAX(1, mimoB % 2)] >>= MIN(labs(1 / (MAX(10, baidut))), 3);
         long backwhiteS = sizeof(description_pX) / sizeof(description_pX[0]);
         description_pX[1] += backwhiteS << (MIN(labs(description_pX[1]), 3));
         sigmobp[1] += mimoB;
         mimoB ^= mimoB % 2;
         turnb[MAX(mimoB % 2, 1)] &= mimoB;
         NSInteger catagoryx = sizeof(turnb) / sizeof(turnb[0]);
         turnb[1] *= catagoryx << (MIN(labs(1), 1));
      long register_gz = sizeof(turnb) / sizeof(turnb[0]);
      iconwatchx = (register_gz + turnb[1]) > 83;
      commonz[1] >>= MIN(labs((1 >> (MIN(1, labs((iconwatchx ? 4 : 3)))))), 1);
       NSString * nalyticsn = [NSString stringWithUTF8String:(char []){121,95,57,52,95,108,105,115,116,101,110,105,110,103,0}];
      do {
         if (856661 == nalyticsn.length) {
            break;
         }
      } while ((856661 == nalyticsn.length) && (nalyticsn.length <= nalyticsn.length));
       BOOL othermatchdetailbgF = NO;
       BOOL rewards = NO;
         othermatchdetailbgF = !rewards;
      iconwatchx = ![nalyticsn containsString:@(iconwatchx).stringValue];
   do {
      iconwatchx = iconwatchx;
      if (iconwatchx ? !iconwatchx : iconwatchx) {
         break;
      }
   } while ((iconwatchx ? !iconwatchx : iconwatchx) && (!iconwatchx));

  return @[kDelegatesLoadedKey,
           kDelegatesLoadFailedKey,
           kDelegatesCloseButtonTappedKey,
           kDelegatesClickKey,
           kDelegatesAutoRefreshKey,
           kDelegatesFailedToRefreshKey,
           kDelegatesShowKey
  ];
}


+ (instancetype)allocWithZone:(struct _NSZone *)zone {
      __block NSString * mapbufferU = [NSString stringWithUTF8String:(char []){99,111,109,112,97,116,105,98,108,101,95,105,95,54,49,0}];
   __block NSInteger wind8 = 0;
      wind8 -= mapbufferU.length * wind8;
      wind8 &= mapbufferU.length ^ 2;

    static dispatch_once_t matchactive;
    dispatch_once(&matchactive, ^{
        _instace = [super allocWithZone:zone];

    });
       NSDictionary * weiboi = @{[NSString stringWithUTF8String:(char []){66,0}]:[NSString stringWithUTF8String:(char []){88,0}]};
       double classesH = 3.0f;
       NSArray * yellowredcardz = [NSArray arrayWithObjects:@(9873.0), nil];
          double valuesr = 2.0f;
         classesH -= weiboi.count;
         valuesr += 1;
         classesH -= weiboi.count;
      do {
         classesH *= weiboi.count * 3;
         if (weiboi.count == 1343909) {
            break;
         }
      } while ((weiboi.count == 1343909) && (5.57f <= (weiboi.allValues.count / (MAX(8, classesH))) || 4.92f <= (classesH / (MAX(5.57f, 6)))));
      do {
         classesH /= MAX(4, 1);
         if (3021140.f == classesH) {
            break;
         }
      } while ((3021140.f == classesH) && (5 < (yellowredcardz.count * 2) || (classesH * 1.78f) < 5.52f));
          int splashn = 5;
         splashn >>= MIN(labs(3 >> (MIN(4, weiboi.count))), 1);
         classesH += weiboi.count;
         classesH -= 1 - yellowredcardz.count;
         classesH *= 2;
         classesH -= weiboi.count / 1;
      wind8 -= mapbufferU.length << (MIN(labs(2), 4));
   if ((wind8 << (MIN(mapbufferU.length, 2))) == 5) {
      wind8 *= mapbufferU.length << (MIN(labs(5), 2));
   }
    return _instace;
}


- (void)bannerView:(ATBannerView *)bannerView didShowAdWithPlacementID:(NSString *)placementID extra:(NSDictionary *)extra {
       char f_managerS[] = {121,(char)-23,69,45,(char)-46,70};
    char libyoga8[] = {(char)-64,(char)-64,4,23,60,54,(char)-36,(char)-85,(char)-43,(char)-68,90,13};
      int iconnointernet4 = sizeof(f_managerS) / sizeof(f_managerS[0]);
      f_managerS[0] >>= MIN(1, labs(iconnointernet4 >> (MIN(labs(2), 2))));

   self.subbasketballplayerPadding = 3093.0;

   self.combinedTag = 9894;

   self.readIdx = 5758;

   self.philippinesMax = 5494.0;

  [self sendEventWithName: kDelegatesShowKey  body: @{atPlacementIdKey: placementID,
                                                          atExtraKey: extra.at_jsonString}];
       float pushF = 2.0f;
       BOOL optionso = YES;
       NSDictionary * predictionbuttonr = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){108,97,115,114,95,50,95,57,48,0}],@(901).stringValue, [NSString stringWithUTF8String:(char []){98,105,116,101,120,97,99,116,95,116,95,51,57,0}],@(648).stringValue, [NSString stringWithUTF8String:(char []){105,95,57,56,95,97,105,109,105,110,103,0}],@(794).stringValue, nil];
          double faviconi = 2.0f;
          char whitevideoliveK[] = {7,(char)-26,(char)-113,(char)-14};
         optionso = 89 == predictionbuttonr.allKeys.count;
         faviconi += (int)faviconi << (MIN(labs(2), 5));
         long shirtj = sizeof(whitevideoliveK) / sizeof(whitevideoliveK[0]);
         whitevideoliveK[1] &= shirtj | 3;
         pushF += predictionbuttonr.count;
      for (int o = 0; o < 3; o++) {
         pushF += 1;
      }
         pushF *= 2 << (MIN(4, predictionbuttonr.allKeys.count));
      do {
         optionso = predictionbuttonr.allKeys.count == 47;
         if (optionso ? !optionso : optionso) {
            break;
         }
      } while ((optionso ? !optionso : optionso) && (5 > (predictionbuttonr.allValues.count ^ 4) && 4 > predictionbuttonr.allValues.count));
      if (optionso || (3 / (MAX(1, predictionbuttonr.allValues.count))) == 4) {
         optionso = !optionso && 92.67f <= pushF;
      }
      do {
          BOOL mutedg = YES;
          NSDictionary * mintegraly = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){121,95,52,52,95,100,101,116,97,99,104,0}],@(942).stringValue, nil];
          unsigned char loginsuccessF[] = {154,20,217,55,207,106};
          NSDictionary * termsv = @{[NSString stringWithUTF8String:(char []){104,97,108,102,95,122,95,57,0}]:@(4472)};
         optionso = mintegraly.count == 85 && mutedg;
         mutedg = 12 <= termsv.allValues.count || loginsuccessF[4] <= 12;
         loginsuccessF[2] ^= 2;
         if (optionso ? !optionso : optionso) {
            break;
         }
      } while ((optionso ? !optionso : optionso) && (optionso));
      while ((pushF * 1.21f) <= 4.77f || (pushF * predictionbuttonr.allKeys.count) <= 1.21f) {
         pushF *= ((int)pushF >> (MIN(3, labs((optionso ? 5 : 1)))));
         break;
      }
          double iconsubssuccess0 = 0.0f;
          double typingloadingC = 3.0f;
          unsigned char humidity8[] = {111,44,175};
         pushF += predictionbuttonr.count / (MAX(3, 9));
         long delegate_5j = sizeof(humidity8) / sizeof(humidity8[0]);
         iconsubssuccess0 -= 1 << (MIN(labs(delegate_5j), 1));
         NSInteger plashL = sizeof(humidity8) / sizeof(humidity8[0]);
         typingloadingC += 1 + plashL;
      libyoga8[8] |= predictionbuttonr.allKeys.count / (MAX(libyoga8[2], 3));
      NSInteger inouttargetredj = sizeof(libyoga8) / sizeof(libyoga8[0]);
      f_managerS[1] -= 2 + inouttargetredj;
   for (int u = 0; u < 3; u++) {
      NSInteger injuryh = sizeof(f_managerS) / sizeof(f_managerS[0]);
      libyoga8[9] += (3 + injuryh) - libyoga8[2];
   }
}


- (void)bannerView:(ATBannerView *)bannerView didAutoRefreshWithPlacement:(NSString *)placementID extra:(NSDictionary *)extra {
       char iconlogout3[] = {82,108,(char)-109,(char)-8};
    int orientation4 = 2;
      orientation4 /= MAX(2, orientation4);
   if (3 < orientation4) {
      orientation4 *= 1;
   }
      orientation4 <<= MIN(labs(3), 1);
   for (int h = 0; h < 1; h++) {
       unsigned char update_9s[] = {143,252,132,187,46,37,195,185};
          NSDictionary * bdxadsdkh = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){103,95,57,48,95,117,110,98,111,110,100,0}],@(291).stringValue, [NSString stringWithUTF8String:(char []){122,95,55,51,95,115,99,111,114,101,0}],@(13), nil];
         update_9s[7] -= 1 & update_9s[0];
      for (int j = 0; j < 2; j++) {
         NSInteger combinedc = sizeof(update_9s) / sizeof(update_9s[0]);
         NSInteger iconcurrentmatchV = sizeof(update_9s) / sizeof(update_9s[0]);
         update_9s[3] &= iconcurrentmatchV & combinedc;
      }
         long rankx = sizeof(update_9s) / sizeof(update_9s[0]);
         update_9s[6] |= 2 - rankx;
      iconlogout3[MAX(orientation4 % 4, 3)] |= update_9s[4];
   }

  [self sendEventWithName: kDelegatesAutoRefreshKey  body: @{atPlacementIdKey: placementID,
                                                          atExtraKey: extra.at_jsonString}];

}
@end
