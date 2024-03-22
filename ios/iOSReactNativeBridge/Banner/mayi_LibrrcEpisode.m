
#import "mayi_LibrrcEpisode.h"
#import <AnyThinkBanner/AnyThinkBanner.h>
#import "mayi_AndroidLibrrc.h"
#import "mayi_UpdatesClub.h"


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
@property(nonatomic, copy)NSString *  dialogSmall_string;
@property(nonatomic, assign)BOOL  canVipsport;




@property(nonatomic, strong) NSMutableDictionary<NSString*, UIView*>* subbasketballplayerFullscreenm;

@end

@implementation ATBannerRNSDK

static id _instace;

+(instancetype) availableAnimatedRedKitBiddingFail {
    static dispatch_once_t onceToken;
    dispatch_once(&onceToken, ^{
      _instace = [[super alloc] init];
    });
    return _instace;
}


- (void)bannerView:(ATBannerView *)bannerView didShowAdWithPlacementID:(NSString *)placementID extra:(NSDictionary *)extra {
       unsigned char guided[] = {154,86,50,235,62,1,61,111,182};
    NSArray * issubA = [NSArray arrayWithObjects:@(545), @(805), nil];
      guided[6] <<= MIN(4, labs(2 & guided[6]));
   while (5 <= issubA.count) {
       double animations8 = 3.0f;
      do {
         animations8 += 1 + (int)animations8;
         if (3643537.f == animations8) {
            break;
         }
      } while ((3643537.f == animations8) && ((animations8 + animations8) == 2.38f));
         animations8 *= (int)animations8 + (int)animations8;
      for (int f = 0; f < 1; f++) {
          long thailand_ = 0;
         animations8 -= 2;
         thailand_ |= thailand_;
      }
      guided[6] >>= MIN(labs((int)animations8 * 3), 2);
      break;
   }
   if (4 < (guided[2] + issubA.count)) {
   }
   if ((3 + issubA.count) == 2 || (issubA.count + guided[2]) == 3) {
       char invitet[] = {(char)-62,(char)-28,11,102,(char)-92,(char)-63,(char)-23,117,66};
         long info1 = sizeof(invitet) / sizeof(invitet[0]);
         invitet[2] -= info1 >> (MIN(labs(invitet[5]), 3));
         long actionsx = sizeof(invitet) / sizeof(invitet[0]);
         invitet[2] &= (1 + actionsx) - invitet[4];
         int calendaro = sizeof(invitet) / sizeof(invitet[0]);
         invitet[8] += calendaro / 1;
   }

  [self sendEventWithName: kDelegatesShowKey  body: @{atPlacementIdKey: placementID,
                                                          atExtraKey: extra.at_jsonString}];
}

- (NSMutableDictionary *) subbasketballplayerFullscreenm {
  if (_subbasketballplayerFullscreenm == nil) {
    _subbasketballplayerFullscreenm = [NSMutableDictionary<NSString*, UIView*> new];
  }
  return _subbasketballplayerFullscreenm;
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
        NSLog(@"showAdInRectangle:parseRectJsonStr:%@",rectDict);
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


- (void)bannerView:(ATBannerView *)bannerView didClickWithPlacementID:(NSString *)placementID extra:(NSDictionary *)extra {
       char videojsY[] = {(char)-128,107,(char)-68,15,49,(char)-21,(char)-121};
    char showlessf[] = {98,(char)-124,96,6,65,114,75,55,(char)-100,69,(char)-64,(char)-7};
   while (3 == (5 * videojsY[1])) {
      NSInteger klevinL = sizeof(showlessf) / sizeof(showlessf[0]);
      showlessf[5] <<= MIN(3, labs(klevinL));
      break;
   }
      int assistX = sizeof(showlessf) / sizeof(showlessf[0]);
      videojsY[1] >>= MIN(1, labs(assistX));
   do {
      int collectionv = sizeof(videojsY) / sizeof(videojsY[0]);
      showlessf[3] >>= MIN(labs((3 + collectionv) % (MAX(showlessf[6], 2))), 4);
      if (84 == showlessf[11]) {
         break;
      }
   } while ((5 > (3 / (MAX(1, showlessf[4])))) && (84 == showlessf[11]));

  [self sendEventWithName: kDelegatesClickKey  body: @{atPlacementIdKey: placementID,
                                                          atExtraKey: extra.at_jsonString}];
}

RCT_EXPORT_METHOD(loadAd: (NSString *)placementId setting: (NSString *)setting) {
    dispatch_async(dispatch_get_main_queue(), ^{
      
      NSDictionary *dic = parseExtraJsonStr(setting);
      [[ATAdManager sharedManager] loadADWithPlacementID:placementId extra:[dic isKindOfClass:[NSDictionary class]] ? dic : nil delegate:[ATBannerRNSDK availableAnimatedRedKitBiddingFail]];
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
          [ATBannerRNSDK availableAnimatedRedKitBiddingFail].subbasketballplayerFullscreenm[placementId] = bannerView;
          bannerView.delegate = [ATBannerRNSDK availableAnimatedRedKitBiddingFail];
          bannerView.frame = CGRectMake((CGRectGetWidth(UIScreen.mainScreen.bounds) - CGRectGetWidth(bannerView.bounds)) / 2.0f, [@{@"top":@(at_safeAreaInsets().top), @"bottom":@(CGRectGetHeight(UIScreen.mainScreen.bounds) - at_safeAreaInsets().bottom - CGRectGetHeight(bannerView.bounds))}[position] doubleValue] , CGRectGetWidth(bannerView.bounds), CGRectGetHeight(bannerView.bounds));
          [[UIApplication sharedApplication].keyWindow.rootViewController.view addSubview:bannerView];
      }
  });
}

RCT_EXPORT_METHOD(showAdInRectangle: (NSString *)placementId showAdRect: (NSString *)rectJsonStr) {
  dispatch_async(dispatch_get_main_queue(), ^{
      ATBannerView *bannerView = [[ATAdManager sharedManager] retrieveBannerViewForPlacementID: placementId];
      if (bannerView != nil) {
          [ATBannerRNSDK availableAnimatedRedKitBiddingFail].subbasketballplayerFullscreenm[placementId] = bannerView;
          bannerView.delegate = [ATBannerRNSDK availableAnimatedRedKitBiddingFail];
          bannerView.frame = parseRectJsonStr(rectJsonStr);
          [[UIApplication sharedApplication].keyWindow.rootViewController.view addSubview:bannerView];
      }
  });
}

RCT_EXPORT_METHOD(hideAd: (NSString *)placementId) {
  dispatch_async(dispatch_get_main_queue(), ^{
      [ATBannerRNSDK availableAnimatedRedKitBiddingFail].subbasketballplayerFullscreenm[placementId].hidden = YES;
  });
}

RCT_EXPORT_METHOD(reShowAd: (NSString *)placementId) {
  dispatch_async(dispatch_get_main_queue(), ^{
      [ATBannerRNSDK availableAnimatedRedKitBiddingFail].subbasketballplayerFullscreenm[placementId].hidden = NO;
  });
}

RCT_EXPORT_METHOD(removeAd: (NSString *)placementId) {
  dispatch_async(dispatch_get_main_queue(), ^{
      [[ATBannerRNSDK availableAnimatedRedKitBiddingFail].subbasketballplayerFullscreenm[placementId] removeFromSuperview];
      [[ATBannerRNSDK availableAnimatedRedKitBiddingFail].subbasketballplayerFullscreenm removeObjectForKey:placementId];
  });
}



- (void)bannerView:(ATBannerView *)bannerView didCloseWithPlacementID:(NSString *)placementID extra:(NSDictionary *)extra {
       int awayiconD = 1;
    float nativemodule8 = 4.0f;
    long gesturesq = 0;
   for (int o = 0; o < 2; o++) {
      awayiconD &= awayiconD % (MAX(1, (int)nativemodule8));
   }
   do {
      awayiconD /= MAX(3 - awayiconD, 2);
      if (4411488 == awayiconD) {
         break;
      }
   } while ((4411488 == awayiconD) && (2.71f <= (nativemodule8 + 3.39f)));
      awayiconD >>= MIN(5, labs(3 % (MAX(awayiconD, 7))));
   do {
      nativemodule8 += 1 % (MAX((int)nativemodule8, 5));
      if (106972.f == nativemodule8) {
         break;
      }
   } while ((106972.f == nativemodule8) && (gesturesq >= 3));
   if (nativemodule8 < awayiconD) {
       unsigned char friendsQ[] = {139,121,70,35,196,129,46,242,91,2};
       char mimeC[] = {116,70,(char)-13};
       int gifgoalA = 2;
       char sideM[] = {(char)-16,4,104,(char)-116,(char)-68,(char)-64,12,88,(char)-117,98};
       double homeinactivei = 3.0f;
          double successJ = 4.0f;
         friendsQ[3] ^= 3;
         successJ /= MAX((int)successJ, 2);
         mimeC[2] -= sideM[2] << (MIN(3, labs(3)));
          NSDictionary * downarrowI = @{[NSString stringWithUTF8String:(char []){122,95,50,57,95,114,111,117,116,105,110,115,0}]:@(426).stringValue};
          char update_hH[] = {(char)-32,17,22,68,18};
          double xvodh = 4.0f;
         sideM[7] >>= MIN(3, downarrowI.count);
         xvodh *= 2 * downarrowI.count;
         update_hH[0] *= (int)xvodh;
      while (5 >= mimeC[2]) {
         friendsQ[2] /= MAX(gifgoalA + 2, 5);
         break;
      }
      for (int i = 0; i < 3; i++) {
         int shootX = sizeof(mimeC) / sizeof(mimeC[0]);
         int gesturesJ = sizeof(sideM) / sizeof(sideM[0]);
         mimeC[1] >>= MIN(labs(gesturesJ & shootX), 4);
      }
      while ((2 >> (MIN(3, labs(mimeC[0])))) <= 2 || (2 - mimeC[0]) <= 5) {
          BOOL yellowB = NO;
          float filledS = 5.0f;
          NSArray * philippinesb = @[@(331), @(475), @(764)];
         int codeR = sizeof(friendsQ) / sizeof(friendsQ[0]);
         homeinactivei /= MAX(2, codeR);
         yellowB = filledS < 42.97f && !yellowB;
         filledS /= MAX(((yellowB ? 4 : 1) & 3), 3);
         filledS += philippinesb.count * 2;
         filledS -= 2 / (MAX(6, philippinesb.count));
         break;
      }
          long history9 = 0;
         homeinactivei /= MAX(history9 + gifgoalA, 5);
      while (3 < (friendsQ[1] / (MAX(2, 2)))) {
         friendsQ[5] <<= MIN(labs(1 >> (MIN(labs(mimeC[1]), 5))), 5);
         break;
      }
          char teamP[] = {114,(char)-54,19,(char)-63,45,(char)-91,(char)-42};
          unsigned char telegram9[] = {129,59,204,88,89,3,135,18,7,166};
         long rewardvideoe = sizeof(mimeC) / sizeof(mimeC[0]);
         friendsQ[2] += (1 + rewardvideoe) >> (MIN(labs(friendsQ[8]), 2));
         NSInteger becomeV = sizeof(telegram9) / sizeof(telegram9[0]);
         teamP[4] -= 2 & becomeV;
      if (3 >= sideM[1]) {
          float typesR = 4.0f;
         NSInteger chinaC = sizeof(mimeC) / sizeof(mimeC[0]);
         sideM[6] *= chinaC;
         typesR *= (int)typesR << (MIN(3, labs(3)));
      }
      if (1 >= gifgoalA) {
         gifgoalA &= 3;
      }
      if (5 <= (gifgoalA << (MIN(labs(sideM[4]), 3)))) {
         int lessm = sizeof(sideM) / sizeof(sideM[0]);
         int subbasketballplayerK = sizeof(friendsQ) / sizeof(friendsQ[0]);
         sideM[1] += subbasketballplayerK & lessm;
      }
         sideM[5] += (int)homeinactivei >> (MIN(labs(3), 5));
       NSString * share3 = [NSString stringWithUTF8String:(char []){114,95,53,50,95,113,116,112,97,108,101,116,116,101,0}];
      while (![share3 containsString:@(sideM[3]).stringValue]) {
         gifgoalA %= MAX(share3.length / (MAX(1, 8)), 4);
         break;
      }
      nativemodule8 += 2;
   }
      gesturesq /= MAX(3, 4);
   for (int x = 0; x < 2; x++) {
       NSString * modityv = [NSString stringWithUTF8String:(char []){110,95,54,0}];
       long bgvipsporta = 3;
       unsigned char defaultfootballbgD[] = {55,59,173,206,232};
      if (3 > modityv.length) {
         bgvipsporta *= modityv.length;
      }
         defaultfootballbgD[MAX(3, bgvipsporta % 5)] <<= MIN(3, labs(defaultfootballbgD[4]));
       BOOL mintegralR = NO;
       BOOL listH = YES;
      for (int k = 0; k < 1; k++) {
         defaultfootballbgD[4] -= ((mintegralR ? 1 : 1) % (MAX(modityv.length, 3)));
      }
      for (int l = 0; l < 2; l++) {
         defaultfootballbgD[0] += modityv.length / 3;
      }
      for (int b = 0; b < 2; b++) {
          long volumeC = 2;
          char langkeyv[] = {104,84,(char)-29,92,(char)-79};
         NSInteger castingJ = sizeof(defaultfootballbgD) / sizeof(defaultfootballbgD[0]);
         mintegralR = 17 >= (51 ^ castingJ);
         volumeC -= volumeC;
         langkeyv[MAX(3, volumeC % 5)] ^= 2;
      }
          unsigned char yellowcirclebgr[] = {171,27,77,224,63,84};
         listH = (yellowcirclebgr[5] & bgvipsporta) == 15;
         bgvipsporta %= MAX(4, modityv.length);
         listH = defaultfootballbgD[2] == 19;
      gesturesq <<= MIN(2, labs(gesturesq | modityv.length));
   }

  
}


- (void)bannerView:(ATBannerView *)bannerView didAutoRefreshWithPlacement:(NSString *)placementID extra:(NSDictionary *)extra {
       unsigned char gmailb[] = {132,53,250,202,159,68,198,107,15};
    NSString * executorC = [NSString stringWithUTF8String:(char []){112,114,111,112,115,95,100,95,54,49,0}];
      gmailb[0] >>= MIN(labs(gmailb[3] << (MIN(5, executorC.length))), 4);
   if (3 < (4 * executorC.length) && (4 * gmailb[6]) < 4) {
      gmailb[7] %= MAX(1, 2 >> (MIN(3, labs(gmailb[4]))));
   }
      gmailb[6] ^= 1;

  [self sendEventWithName: kDelegatesAutoRefreshKey  body: @{atPlacementIdKey: placementID,
                                                          atExtraKey: extra.at_jsonString}];

}


- (void)bannerView:(ATBannerView *)bannerView failedToAutoRefreshWithPlacementID:(NSString *)placementID error:(NSError *)error {
       float nextl = 1.0f;
    NSDictionary * sellG = @{[NSString stringWithUTF8String:(char []){116,95,51,49,95,112,101,110,100,105,110,103,115,0}]:@(736), [NSString stringWithUTF8String:(char []){116,103,101,116,95,120,95,51,54,0}]:@(83).stringValue, [NSString stringWithUTF8String:(char []){116,117,114,110,111,102,102,95,110,95,55,56,0}]:@(550)};
    double scopy_ez = 1.0f;
   for (int g = 0; g < 1; g++) {
       NSDictionary * taiwanA = @{[NSString stringWithUTF8String:(char []){120,95,54,56,95,101,110,100,0}]:@(422).stringValue};
       BOOL hooksf = NO;
       unsigned char libapminsightay[] = {207,250};
      do {
          float gesturesu = 3.0f;
          NSInteger nnewsr = 0;
          char iconuserc[] = {14,24,70,70,83,85,(char)-80,(char)-45,(char)-10,50,(char)-62,(char)-115};
          char main_t0[] = {(char)-94,80};
         NSInteger hoverN = sizeof(iconuserc) / sizeof(iconuserc[0]);
         hooksf = (taiwanA.allKeys.count % (MAX(hoverN, 3))) > 54;
         gesturesu += nnewsr;
         nnewsr %= MAX(1, nnewsr);
         main_t0[0] %= MAX(3, 2);
         if (hooksf ? !hooksf : hooksf) {
            break;
         }
      } while ((hooksf ? !hooksf : hooksf) && (!hooksf || libapminsightay[1] >= 2));
          float selectG = 2.0f;
          char bodanB[] = {(char)-107,10,101,(char)-126,37,38,70,114,(char)-127,4};
          unsigned char vignetteq[] = {160,2,155,132,79,253,66};
         selectG /= MAX(4, taiwanA.count + 2);
         int invite2 = sizeof(vignetteq) / sizeof(vignetteq[0]);
         selectG *= invite2 >> (MIN(labs(bodanB[1]), 2));
         int eventg = sizeof(bodanB) / sizeof(bodanB[0]);
         bodanB[9] &= eventg;
      while (2 <= taiwanA.allKeys.count) {
          BOOL dragZ = YES;
          float codegenO = 5.0f;
          NSString * foundj = [NSString stringWithUTF8String:(char []){100,95,49,56,95,116,121,112,101,115,101,116,116,101,114,0}];
          NSDictionary * r_centerQ = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){99,119,114,115,105,95,119,95,49,48,48,0}],@(860).stringValue, nil];
         codegenO += taiwanA.count - 2;
         dragZ = ((foundj.length | (!dragZ ? 61 : foundj.length)) <= 61);
         codegenO += r_centerQ.allKeys.count;
         dragZ = r_centerQ.count & 3;
         break;
      }
      do {
         hooksf = 30 > (50 ^ libapminsightay[0]) || hooksf;
         if (hooksf ? !hooksf : hooksf) {
            break;
         }
      } while ((2 < (taiwanA.allKeys.count - 2) && !hooksf) && (hooksf ? !hooksf : hooksf));
      while (!hooksf || 3 <= libapminsightay[0]) {
         hooksf = hooksf;
         break;
      }
          BOOL matchinactiveC = NO;
          float terms1 = 2.0f;
          unsigned char collection4[] = {106,103,166,127,2,38,141};
         libapminsightay[0] -= 2 / (MAX(2, (int)terms1));
         matchinactiveC = !matchinactiveC;
         terms1 += 1;
         collection4[0] ^= 3 ^ collection4[5];
          double subtext1 = 4.0f;
          double leftX = 0.0f;
         libapminsightay[1] += (int)leftX ^ taiwanA.count;
         subtext1 *= (int)subtext1;
         leftX -= 1;
      if (hooksf) {
          char nativemodulei[] = {59,(char)-48,(char)-78,94,(char)-100,104};
          long index7 = 0;
         hooksf = hooksf || index7 >= 32;
         int verticalX = sizeof(nativemodulei) / sizeof(nativemodulei[0]);
         nativemodulei[5] %= MAX(nativemodulei[5] % (MAX(10, verticalX)), 3);
         long mounting7 = sizeof(nativemodulei) / sizeof(nativemodulei[0]);
         index7 *= nativemodulei[0] >> (MIN(1, labs((1 + mounting7))));
      }
         hooksf = 4 & taiwanA.count;
      scopy_ez *= sellG.count;
   }
      nextl += sellG.count;
   do {
      nextl *= 3;
      if (nextl == 358698.f) {
         break;
      }
   } while ((nextl == 358698.f) && (4.44f == (2 + scopy_ez)));
      nextl *= sellG.allValues.count * 2;
   do {
      nextl /= MAX(4, 3 * sellG.allKeys.count);
      if (nextl == 4870532.f) {
         break;
      }
   } while ((3.54f > (sellG.count + nextl)) && (nextl == 4870532.f));

  [self sendEventWithName: kDelegatesFailedToRefreshKey  body: @{atPlacementIdKey: placementID,
                                                          atErrMsgKey: error.localizedDescription}];
}


- (void)bannerView:(ATBannerView *)bannerView didTapCloseButtonWithPlacementID:(NSString *)placementID extra:(NSDictionary *)extra {
       unsigned char neonp[] = {34,107,208,179,199,192,203,68,232};
    double flyerL = 4.0f;
      flyerL += (int)flyerL;
   do {
      neonp[6] |= (int)flyerL / (MAX(3, 9));
      if (flyerL == 3459948.f) {
         break;
      }
   } while ((3 < (neonp[1] * 2) || (2 - flyerL) < 5) && (flyerL == 3459948.f));
   while (4 < (neonp[4] * 5)) {
      neonp[3] -= 2;
      break;
   }
   if (flyerL < neonp[2]) {
      neonp[0] ^= (int)flyerL;
   }

  [self sendEventWithName: kDelegatesCloseButtonTappedKey  body: @{atPlacementIdKey: placementID,
                                                          atExtraKey: extra.at_jsonString}];
}


- (NSArray<NSString *> *)supportedEvents {
       NSInteger statsnomoredatae = 3;
    unsigned char blacklistx[] = {237,219,61,148,19,78,65,224};
      int pauseM = sizeof(blacklistx) / sizeof(blacklistx[0]);
      statsnomoredatae |= pauseM * statsnomoredatae;

   self.dialogSmall_string = [NSString stringWithUTF8String:(char []){111,105,100,0}];

   self.canVipsport = NO;

   self.upgrade_min = 8461.0;

   self.defaultfootballbgCopy_i_str = [NSString stringWithUTF8String:(char []){101,120,112,97,110,100,0}];

   self.network_count = 3281;

   self.kickBackFilled_Array = @[[NSString stringWithUTF8String:(char []){116,104,101,110,0}], [NSString stringWithUTF8String:(char []){99,104,101,99,107,0}], [NSString stringWithUTF8String:(char []){122,111,111,109,97,98,108,101,0}]];

  return @[kDelegatesLoadedKey,
           kDelegatesLoadFailedKey,
           kDelegatesCloseButtonTappedKey,
           kDelegatesClickKey,
           kDelegatesAutoRefreshKey,
           kDelegatesFailedToRefreshKey,
           kDelegatesShowKey
  ];
      statsnomoredatae ^= 1 | statsnomoredatae;
   for (int v = 0; v < 2; v++) {
      blacklistx[5] *= statsnomoredatae / (MAX(blacklistx[1], 3));
   }
       unsigned char predictionbannerh[] = {218,150,137,3,158,134,234,52,168,168,112,2};
       NSInteger promotionk = 3;
         long backP = sizeof(predictionbannerh) / sizeof(predictionbannerh[0]);
         promotionk <<= MIN(1, labs(promotionk | backP));
          int baidu6 = 4;
          char dycreatorc[] = {111,(char)-25,(char)-31,(char)-55,47,(char)-37};
         predictionbannerh[MAX(11, promotionk % 12)] %= MAX(1, promotionk);
         baidu6 |= 1 & dycreatorc[5];
         long backg = sizeof(dycreatorc) / sizeof(dycreatorc[0]);
         dycreatorc[MAX(baidu6 % 6, 1)] %= MAX(backg, 5);
         predictionbannerh[MAX(promotionk % 12, 4)] >>= MIN(labs(3), 4);
         predictionbannerh[MAX(promotionk % 12, 8)] -= promotionk ^ 1;
      if (promotionk < predictionbannerh[1]) {
         promotionk += 3 + promotionk;
      }
      if ((predictionbannerh[9] / 4) < 2) {
          unsigned char vignette1[] = {113,227};
          int entryJ = 4;
          BOOL auto_5ct = NO;
          float defaultfootballbgK = 4.0f;
         promotionk ^= 2 << (MIN(labs(promotionk), 4));
         vignette1[0] /= MAX((int)defaultfootballbgK, 3);
         entryJ &= 3;
         auto_5ct = auto_5ct;
         defaultfootballbgK /= MAX(3 - entryJ, 3);
      }
      blacklistx[MAX(statsnomoredatae % 8, 4)] |= 1 >> (MIN(1, labs(statsnomoredatae)));
}


- (void)didFinishLoadingADWithPlacementID:(NSString *)placementID {
       NSArray * whitevideolive8 = [NSArray arrayWithObjects:@(370), @(978), @(564), nil];
    long collectionQ = 4;
   if (5 > (1 | collectionQ) && 5 > (1 | collectionQ)) {
      collectionQ &= whitevideolive8.count % 5;
   }
       NSArray * iconsharefriendsP = @[@(796), @(345)];
       double condensed5 = 0.0f;
       char humidity5[] = {10,(char)-118,25,97,(char)-69,(char)-82,(char)-121,119};
      do {
         condensed5 *= 1;
         if (condensed5 == 1159787.f) {
            break;
         }
      } while ((condensed5 == 1159787.f) && (1.16f > condensed5));
      if (2 > (4 - humidity5[4])) {
         humidity5[1] &= iconsharefriendsP.count ^ 3;
      }
         humidity5[7] <<= MIN(labs(2), 3);
      for (int g = 0; g < 1; g++) {
         condensed5 -= 1;
      }
       char iconclosewhitebgb[] = {(char)-27,28,40,(char)-117,18,126,(char)-46,121,(char)-33,(char)-33,84};
         condensed5 /= MAX(3, 1 - iconsharefriendsP.count);
      if (humidity5[6] > 1) {
         condensed5 /= MAX(3, 3 >> (MIN(3, labs(humidity5[5]))));
      }
         condensed5 += iconsharefriendsP.count;
      for (int k = 0; k < 3; k++) {
          char libavdeviceK[] = {(char)-116,(char)-20,(char)-127,119};
          long y_managerA = 2;
          NSInteger result3 = 1;
          float viewerF = 2.0f;
         iconclosewhitebgb[MAX(result3 % 11, 6)] |= result3 % (MAX(y_managerA, 5));
         libavdeviceK[3] -= 1;
         y_managerA *= 3;
         viewerF /= MAX(1, (int)viewerF % 3);
      }
      collectionQ /= MAX(iconsharefriendsP.count, 3);
      collectionQ += 3 & collectionQ;
      collectionQ -= whitevideolive8.count % (MAX(5, 8));

  [self sendEventWithName: kDelegatesLoadedKey  body: @{atPlacementIdKey: placementID}];
}


+ (instancetype)allocWithZone:(struct _NSZone *)zone {
      __block NSDictionary * expiredt = @{[NSString stringWithUTF8String:(char []){120,95,53,56,95,115,101,97,114,99,104,0}]:@(373), [NSString stringWithUTF8String:(char []){97,114,109,108,105,110,107,95,56,95,54,0}]:@(53).stringValue};
   __block NSDictionary * suggestionK = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){115,0}],[NSString stringWithUTF8String:(char []){119,0}], nil];
   while ((expiredt.count | suggestionK.count) <= 2) {
       NSInteger leftd = 2;
       char audience8[] = {51,98,76,(char)-111,(char)-73,88,(char)-26,14,123,18,(char)-57};
       char sinit_m5x[] = {(char)-74,(char)-54,(char)-9,(char)-64,(char)-45,(char)-52,(char)-28,116,(char)-80,(char)-43,(char)-22,59};
       int cornerkick2 = 4;
      if ((cornerkick2 >> (MIN(2, labs(leftd)))) > 2) {
         cornerkick2 >>= MIN(labs(cornerkick2 ^ 3), 3);
      }
       int crownS = 5;
      if ((cornerkick2 >> (MIN(labs(sinit_m5x[1]), 3))) == 3) {
          unsigned char videocommon9[] = {172,137,2};
          long libglogW = 1;
          BOOL flyerl = NO;
          NSString * morej = [NSString stringWithUTF8String:(char []){108,105,118,101,100,95,52,95,53,55,0}];
          float teamn = 1.0f;
         cornerkick2 -= leftd;
         videocommon9[1] *= 2;
         libglogW ^= libglogW / 2;
         flyerl = morej.length > 21;
         libglogW /= MAX(3, morej.length);
         int private_ub = sizeof(videocommon9) / sizeof(videocommon9[0]);
         teamn /= MAX(private_ub >> (MIN(1, labs(libglogW))), 1);
      }
         cornerkick2 |= leftd >> (MIN(5, labs(cornerkick2)));
      if ((audience8[7] / 4) <= 4 || (crownS / 4) <= 1) {
          unsigned char iconediti[] = {180,229,43,152,194,162,9,91,150};
          double whatsapp6 = 0.0f;
          NSDictionary * indexM = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){117,110,98,111,110,100,101,100,95,98,95,56,53,0}],@(9478), nil];
         crownS %= MAX(4, 3);
         iconediti[2] *= iconediti[1] << (MIN(2, labs(1)));
         whatsapp6 -= 1 + (int)whatsapp6;
         whatsapp6 -= indexM.count;
         whatsapp6 *= indexM.count;
      }
      for (int h = 0; h < 2; h++) {
          unsigned char libsentryW[] = {180,67};
          NSArray * mbnativex = @[@(109), @(591), @(123)];
          double classesB = 1.0f;
         int tempnodatagifw = sizeof(sinit_m5x) / sizeof(sinit_m5x[0]);
         sinit_m5x[0] &= (2 + tempnodatagifw) * audience8[2];
         libsentryW[1] -= 1;
         classesB -= 4 / (MAX(2, mbnativex.count));
         classesB -= mbnativex.count << (MIN(3, labs((int)classesB)));
      }
          float searcho = 3.0f;
         cornerkick2 /= MAX(2, 3 | crownS);
         searcho *= (int)searcho;
          char firebaseK[] = {(char)-49,46};
          double promotionb = 5.0f;
         leftd /= MAX(4, 3);
         firebaseK[1] *= (int)promotionb;
         long typesI = sizeof(firebaseK) / sizeof(firebaseK[0]);
         promotionb -= (int)promotionb >> (MIN(labs(typesI), 1));
      if (5 < (cornerkick2 / 2)) {
         sinit_m5x[8] /= MAX(crownS, 2);
      }
          double rulesb = 3.0f;
         leftd >>= MIN(labs(1), 1);
         rulesb /= MAX((int)rulesb, 2);
      while ((3 + cornerkick2) > 3) {
         cornerkick2 += crownS + 1;
         break;
      }
      if (2 >= (1 % (MAX(7, audience8[2])))) {
         audience8[7] &= crownS / 3;
      }
      cornerkick2 |= 5 & expiredt.count;
      break;
   }

    static dispatch_once_t config;
    dispatch_once(&config, ^{
        _instace = [super allocWithZone:zone];

    });
       unsigned char orangez[] = {166,157,75,255,255,240,32,186,242,65};
       char unimplementedviewG[] = {(char)-26,(char)-88,5,(char)-82,(char)-119};
         NSInteger inactiveB = sizeof(unimplementedviewG) / sizeof(unimplementedviewG[0]);
         unimplementedviewG[0] /= MAX(2, (2 + inactiveB) >> (MIN(labs(orangez[0]), 1)));
         long imagesH = sizeof(unimplementedviewG) / sizeof(unimplementedviewG[0]);
         orangez[7] %= MAX((3 + imagesH) & orangez[4], 1);
         NSInteger targetJ = sizeof(unimplementedviewG) / sizeof(unimplementedviewG[0]);
         unimplementedviewG[2] >>= MIN(3, labs(orangez[7] ^ (2 + targetJ)));
      for (int o = 0; o < 1; o++) {
         NSInteger lnewinterstitial6 = sizeof(orangez) / sizeof(orangez[0]);
         orangez[6] |= unimplementedviewG[3] >> (MIN(1, labs((3 + lnewinterstitial6))));
      }
         int whitetickn = sizeof(unimplementedviewG) / sizeof(unimplementedviewG[0]);
         int j_locka = sizeof(orangez) / sizeof(orangez[0]);
         orangez[3] *= j_locka >> (MIN(4, labs(whitetickn)));
         long matchinactive5 = sizeof(orangez) / sizeof(orangez[0]);
         unimplementedviewG[2] |= unimplementedviewG[1] << (MIN(5, labs((1 + matchinactive5))));
    return _instace;
}


- (void)didFailToLoadADWithPlacementID:(NSString *)placementID error:(NSError *)error {
       double yingH = 5.0f;
    BOOL whitevideolive_ = NO;
    unsigned char defaultlogo1[] = {254,152,77,90,182,229,94,21,22,81};
    double mounting0 = 5.0f;
      defaultlogo1[3] &= (1 << (MIN(2, labs((whitevideolive_ ? 4 : 1)))));
   do {
      yingH /= MAX(1, defaultlogo1[3] - 2);
      if (4394431.f == yingH) {
         break;
      }
   } while ((4394431.f == yingH) && (2 <= (5.22f - yingH) && 5.22f <= yingH));
   do {
      int iconnotificationnewc = sizeof(defaultlogo1) / sizeof(defaultlogo1[0]);
      yingH *= iconnotificationnewc ^ 1;
      if (yingH == 3058317.f) {
         break;
      }
   } while ((5 <= (defaultlogo1[4] + yingH) && (5 + yingH) <= 3) && (yingH == 3058317.f));
       char circle6[] = {(char)-76,(char)-118,(char)-72,110,20,(char)-61,(char)-102,(char)-127,117,17,(char)-42,84};
       float leaguedetailsbgJ = 4.0f;
       float resend4 = 3.0f;
         leaguedetailsbgJ *= 2 ^ (int)leaguedetailsbgJ;
          double philippines5 = 1.0f;
         leaguedetailsbgJ -= (int)philippines5;
          unsigned char combinedI[] = {35,221};
         resend4 *= 3 << (MIN(4, labs((int)leaguedetailsbgJ)));
         NSInteger arrowT = sizeof(combinedI) / sizeof(combinedI[0]);
         combinedI[0] *= 1 << (MIN(5, labs(arrowT)));
      do {
          char libhermesO[] = {(char)-117,48,110,125,21,111,(char)-59};
          unsigned char splasht[] = {83,70};
         leaguedetailsbgJ -= (int)leaguedetailsbgJ >> (MIN(labs(1), 3));
         NSInteger awayteamfield3 = sizeof(libhermesO) / sizeof(libhermesO[0]);
         libhermesO[6] ^= splasht[0] ^ (2 + awayteamfield3);
         long libhermesY = sizeof(splasht) / sizeof(splasht[0]);
         splasht[1] >>= MIN(5, labs(libhermesY / (MAX(libhermesO[5], 10))));
         if (2040498.f == leaguedetailsbgJ) {
            break;
         }
      } while ((leaguedetailsbgJ > 5) && (2040498.f == leaguedetailsbgJ));
      if ((circle6[11] * 4) == 2 || 4 == (leaguedetailsbgJ / (MAX(1, circle6[11])))) {
         leaguedetailsbgJ *= 3 | (int)leaguedetailsbgJ;
      }
         circle6[9] &= (int)resend4;
       NSString * share8 = [NSString stringWithUTF8String:(char []){110,95,52,95,115,117,112,112,111,114,116,115,0}];
       NSString * animationsQ = [NSString stringWithUTF8String:(char []){99,95,51,55,95,116,111,109,98,117,102,0}];
         leaguedetailsbgJ += share8.length;
      while ((leaguedetailsbgJ / (MAX(4.71f, 4))) < 1.77f && (4.71f - leaguedetailsbgJ) < 2.16f) {
         leaguedetailsbgJ -= (int)leaguedetailsbgJ;
         break;
      }
      defaultlogo1[3] %= MAX((int)resend4, 2);
       unsigned char buildI[] = {160,204,33,36,201,24,144,166,134,13};
      while ((3 + buildI[4]) == 4 || 3 == (buildI[7] + buildI[4])) {
         int componentregistry5 = sizeof(buildI) / sizeof(buildI[0]);
         buildI[6] |= (3 + componentregistry5) << (MIN(labs(buildI[9]), 1));
         break;
      }
         int handlerb = sizeof(buildI) / sizeof(buildI[0]);
         int tempnodataY = sizeof(buildI) / sizeof(buildI[0]);
         buildI[2] >>= MIN(3, labs(tempnodataY - handlerb));
       char iconcloseU[] = {(char)-66,(char)-34,(char)-56,90,(char)-34};
       char phoneshare6[] = {(char)-128,(char)-122,(char)-58,(char)-7,(char)-7,14,106,(char)-70,(char)-84,17};
      NSInteger backiconG = sizeof(defaultlogo1) / sizeof(defaultlogo1[0]);
      whitevideolive_ = backiconG >= 49;

  [self sendEventWithName: kDelegatesLoadFailedKey  body: @{atPlacementIdKey: placementID,
                                                          atErrMsgKey: error.localizedDescription}];
}
@end
