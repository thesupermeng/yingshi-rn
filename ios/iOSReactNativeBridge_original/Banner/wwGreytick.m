
#import "wwGreytick.h"
#import <AnyThinkBanner/AnyThinkBanner.h>
#import "wwThailandStatistics.h"
#import "wwIncidentMovies.h"
#import "wwCrown.h"



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
@property(nonatomic, assign)NSInteger  china_mark;
@property(nonatomic, copy)NSString *  package_z9StatisticsinactiveString;
@property(nonatomic, assign)int  halfIdx;




@property(nonatomic, strong) NSMutableDictionary<NSString*, UIView*>* mappingLogo;

@end

@implementation ATBannerRNSDK

static id _instace;

+(instancetype) adcolonyStorageDelegatesDialog {
    static dispatch_once_t onceToken;
    dispatch_once(&onceToken, ^{
      _instace = [[super alloc] init];
    });
    return _instace;
}


- (void)bannerView:(ATBannerView *)bannerView failedToAutoRefreshWithPlacementID:(NSString *)placementID error:(NSError *)error {
       char constantsN[] = {(char)-30,106,(char)-99,70,110};
    long whiteticky = 1;
       int side9 = 0;
          unsigned char dacccfaabfbcbadeebddcabacdffdbD[] = {1,49,171,11,215};
         long placementV = sizeof(dacccfaabfbcbadeebddcabacdffdbD) / sizeof(dacccfaabfbcbadeebddcabacdffdbD[0]);
         side9 -= side9 << (MIN(labs(placementV), 4));
         side9 |= 2 - side9;
      if ((2 | side9) >= 1) {
         side9 |= side9;
      }
      constantsN[1] &= whiteticky;
   do {
      constantsN[MAX(whiteticky % 5, 1)] /= MAX(whiteticky * constantsN[2], 4);
      if (2388102 == whiteticky) {
         break;
      }
   } while ((whiteticky < 2) && (2388102 == whiteticky));
      constantsN[2] ^= whiteticky;
       NSInteger round7 = 0;
       char componentA[] = {75,(char)-38,85};
       char bootx[] = {(char)-85,9,(char)-13,112,122,127};
         NSInteger ballz = sizeof(componentA) / sizeof(componentA[0]);
         bootx[2] >>= MIN(labs(3 | ballz), 4);
      while ((componentA[2] & round7) == 1 || (round7 & componentA[2]) == 1) {
          char clocka[] = {94,(char)-29,(char)-82,(char)-71,75,52,78};
         componentA[0] += clocka[3];
         break;
      }
      constantsN[2] += whiteticky % 1;

  [self sendEventWithName: kDelegatesFailedToRefreshKey  body: @{atPlacementIdKey: placementID,
                                                          atErrMsgKey: error.localizedDescription}];
}

- (NSMutableDictionary *) mappingLogo {
  if (_mappingLogo == nil) {
    _mappingLogo = [NSMutableDictionary<NSString*, UIView*> new];
  }
  return _mappingLogo;
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
            extra[kATAdLoadingExtraBannerAdSizeKey] = [NSValue valueWithCGSize:CGSizeMake(415.0f, 50.0f)];
        }
    }
    return extra;
}

RCT_EXPORT_MODULE()


- (NSArray<NSString *> *)supportedEvents {
       char modityG[] = {19,90,(char)-61,114,114};
    double episoded = 1.0f;
   do {
      modityG[2] |= 2;
      if (841270.f == episoded) {
         break;
      }
   } while ((3 == (episoded - modityG[1])) && (841270.f == episoded));
   if (modityG[4] == 4) {
      episoded /= MAX(1, modityG[0] + 2);
   }
      episoded += modityG[1] << (MIN(5, labs(2)));
       char activityk[] = {13,27,8,18,(char)-101};
       char imagenetworkerrR[] = {(char)-127,(char)-40,(char)-23,(char)-56,(char)-96,39,(char)-65,108,61,(char)-47,12,50};
          char libflippern[] = {(char)-6,58,(char)-95,77,(char)-67,42,(char)-120,(char)-60,123,54,(char)-55,108};
         NSInteger libffmpegkit9 = sizeof(imagenetworkerrR) / sizeof(imagenetworkerrR[0]);
         activityk[2] += 1 >> (MIN(2, labs(libffmpegkit9)));
         long subbasketballplayert = sizeof(libflippern) / sizeof(libflippern[0]);
         libflippern[5] >>= MIN(4, labs(subbasketballplayert - 1));
      do {
         NSInteger tnewarchdefaultsZ = sizeof(activityk) / sizeof(activityk[0]);
         NSInteger gesturesi = sizeof(imagenetworkerrR) / sizeof(imagenetworkerrR[0]);
         imagenetworkerrR[10] ^= tnewarchdefaultsZ / (MAX(8, gesturesi));
         if (3056959.f == episoded) {
            break;
         }
      } while ((1 < imagenetworkerrR[7]) && (3056959.f == episoded));
       NSString * ewardedX = [NSString stringWithUTF8String:(char []){114,101,99,111,114,100,95,48,95,54,56,0}];
       NSString * play5 = [NSString stringWithUTF8String:(char []){99,100,97,116,97,95,100,95,52,54,0}];
      while (![ewardedX containsString:@(play5.length).stringValue]) {
         break;
      }
      NSInteger values8 = sizeof(activityk) / sizeof(activityk[0]);
      modityG[1] |= imagenetworkerrR[10] - (1 + values8);

  return @[kDelegatesLoadedKey,
           kDelegatesLoadFailedKey,
           kDelegatesCloseButtonTappedKey,
           kDelegatesClickKey,
           kDelegatesAutoRefreshKey,
           kDelegatesFailedToRefreshKey,
           kDelegatesShowKey
  ];
}

RCT_EXPORT_METHOD(loadAd: (NSString *)placementId setting: (NSString *)setting) {
    dispatch_async(dispatch_get_main_queue(), ^{
      
      NSDictionary *dic = parseExtraJsonStr(setting);
      [[ATAdManager sharedManager] loadADWithPlacementID:placementId extra:[dic isKindOfClass:[NSDictionary class]] ? dic : nil delegate:[ATBannerRNSDK adcolonyStorageDelegatesDialog]];
  });
}

RCT_EXPORT_METHOD(hasAdReady: (NSString *)placementId promise: (RCTPromiseResolveBlock)promise rejector:(RCTPromiseRejectBlock)reject) {
  BOOL ready = [[ATAdManager sharedManager] bannerAdReadyForPlacementID: placementId];
  promise(@(ready));
}

RCT_EXPORT_METHOD(showAdInPosition: (NSString *)placementId position: (NSString *)position) {
  dispatch_async(dispatch_get_main_queue(), ^{
      ATBannerView *bannerView = [[ATAdManager sharedManager] retrieveBannerViewForPlacementID: placementId];
      if (bannerView != nil) {
          [ATBannerRNSDK adcolonyStorageDelegatesDialog].mappingLogo[placementId] = bannerView;
          bannerView.delegate = [ATBannerRNSDK adcolonyStorageDelegatesDialog];
          bannerView.frame = CGRectMake((CGRectGetWidth(UIScreen.mainScreen.bounds) - CGRectGetWidth(bannerView.bounds)) / 2.0f, [@{@"top":@(at_safeAreaInsets().top), @"bottom":@(CGRectGetHeight(UIScreen.mainScreen.bounds) - at_safeAreaInsets().bottom - CGRectGetHeight(bannerView.bounds))}[position] doubleValue] , CGRectGetWidth(bannerView.bounds), CGRectGetHeight(bannerView.bounds));
          [[UIApplication sharedApplication].keyWindow.rootViewController.view addSubview:bannerView];
      }
  });
}

RCT_EXPORT_METHOD(showAdInRectangle: (NSString *)placementId showAdRect: (NSString *)rectJsonStr) {
  dispatch_async(dispatch_get_main_queue(), ^{
      ATBannerView *bannerView = [[ATAdManager sharedManager] retrieveBannerViewForPlacementID: placementId];
      if (bannerView != nil) {
          [ATBannerRNSDK adcolonyStorageDelegatesDialog].mappingLogo[placementId] = bannerView;
          bannerView.delegate = [ATBannerRNSDK adcolonyStorageDelegatesDialog];
          bannerView.frame = parseRectJsonStr(rectJsonStr);
          [[UIApplication sharedApplication].keyWindow.rootViewController.view addSubview:bannerView];
      }
  });
}

RCT_EXPORT_METHOD(hideAd: (NSString *)placementId) {
  dispatch_async(dispatch_get_main_queue(), ^{
      [ATBannerRNSDK adcolonyStorageDelegatesDialog].mappingLogo[placementId].hidden = YES;
  });
}

RCT_EXPORT_METHOD(reShowAd: (NSString *)placementId) {
  dispatch_async(dispatch_get_main_queue(), ^{
      [ATBannerRNSDK adcolonyStorageDelegatesDialog].mappingLogo[placementId].hidden = NO;
  });
}

RCT_EXPORT_METHOD(removeAd: (NSString *)placementId) {
  dispatch_async(dispatch_get_main_queue(), ^{
      [[ATBannerRNSDK adcolonyStorageDelegatesDialog].mappingLogo[placementId] removeFromSuperview];
      [[ATBannerRNSDK adcolonyStorageDelegatesDialog].mappingLogo removeObjectForKey:placementId];
  });
}



- (void)bannerView:(ATBannerView *)bannerView didAutoRefreshWithPlacement:(NSString *)placementID extra:(NSDictionary *)extra {
       float diceM = 5.0f;
    NSInteger mathv = 0;
      mathv &= mathv;
   do {
       double event5 = 5.0f;
       unsigned char loginb[] = {148,40,83,121,184,241,249,188,141,183};
       NSDictionary * expandR = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){99,111,110,99,97,116,101,110,97,116,101,100,95,120,95,50,55,0}],[NSArray arrayWithObjects:@(591), @(764), nil], nil];
       BOOL v_unlockW = YES;
       double bufferw = 3.0f;
         bufferw /= MAX(3 >> (MIN(labs((int)bufferw), 5)), 3);
          long libflippera = 1;
          double analyticc = 4.0f;
          NSInteger controlT = 2;
         bufferw /= MAX(3 * expandR.allKeys.count, 4);
         libflippera &= (int)analyticc >> (MIN(5, labs(controlT)));
         analyticc /= MAX(4, libflippera);
         controlT ^= libflippera / (MAX((int)analyticc, 4));
      do {
         bufferw += expandR.count;
         if (3774027 == expandR.count) {
            break;
         }
      } while (((expandR.allValues.count + 3) > 5) && (3774027 == expandR.count));
         event5 += expandR.count + 3;
      do {
         bufferw += (int)bufferw + 3;
         if (1767438.f == bufferw) {
            break;
         }
      } while ((!v_unlockW) && (1767438.f == bufferw));
      while (3 >= (bufferw * loginb[4])) {
         bufferw *= ((v_unlockW ? 5 : 2) / (MAX(9, (int)bufferw)));
         break;
      }
         event5 /= MAX(((int)bufferw / (MAX(2, (v_unlockW ? 4 : 4)))), 2);
      while ((4 ^ expandR.allValues.count) <= 5 || !v_unlockW) {
         v_unlockW = loginb[0] == 73;
         break;
      }
      while ((expandR.count & 2) < 4 || 1 < (2 & loginb[7])) {
         loginb[3] %= MAX(1, loginb[3]);
         break;
      }
       double borderless2 = 0.0f;
      while (2.55f <= (4.14f * bufferw) && (4.14f + borderless2) <= 3.99f) {
          NSArray * zoomP = [NSArray arrayWithObjects:@(100), @(493), nil];
          char mbnativeadvancedn[] = {35,(char)-123,(char)-90,(char)-45,(char)-1,110,96,(char)-67,(char)-71,(char)-117};
          NSDictionary * otherY = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){110,97,110,111,112,98,95,114,95,56,0}],@(899).stringValue, nil];
         bufferw /= MAX(3, 2);
         mbnativeadvancedn[8] ^= zoomP.count;
         break;
      }
      mathv /= MAX(3, 3 / (MAX(6, (int)event5)));
      if (817451 == mathv) {
         break;
      }
   } while ((817451 == mathv) && (mathv > diceM));
       long trashF = 0;
       int completeW = 3;
      do {
          unsigned char linec[] = {251,21,245,55,226,134,192,164,227};
          double rncoreD = 5.0f;
          int gpay1 = 4;
          NSArray * sortu = [NSArray arrayWithObjects:@(473), @(476), nil];
         completeW |= linec[6] - 2;
         linec[MAX(gpay1 % 9, 1)] <<= MIN(labs(sortu.count + 1), 2);
         rncoreD *= sortu.count & gpay1;
         if (4832323 == completeW) {
            break;
         }
      } while ((4832323 == completeW) && (2 > (5 | trashF)));
      if (1 <= (trashF + 2) || (trashF + 2) <= 4) {
         completeW &= 3 * trashF;
      }
      for (int x = 0; x < 1; x++) {
         trashF %= MAX(trashF >> (MIN(labs(completeW), 2)), 3);
      }
      if (trashF < completeW) {
         trashF %= MAX(5, 2 << (MIN(2, labs(trashF))));
      }
         completeW /= MAX(2, trashF);
         trashF += completeW;
      diceM += 2;
      diceM -= 1;

  [self sendEventWithName: kDelegatesAutoRefreshKey  body: @{atPlacementIdKey: placementID,
                                                          atExtraKey: extra.at_jsonString}];

}


+ (instancetype)allocWithZone:(struct _NSZone *)zone {
      __block long readi = 5;
   __block double topicc = 4.0f;
   if ((3.43f + topicc) <= 4.7f && (3.43f + topicc) <= 4.46f) {
       NSString * rewinds = [NSString stringWithUTF8String:(char []){115,104,111,119,110,95,118,95,50,51,0}];
       NSInteger renderD = 1;
       double alertC = 1.0f;
       NSString * selectS = [NSString stringWithUTF8String:(char []){119,95,50,55,95,105,110,102,111,0}];
       char redirecth[] = {(char)-13,70,81,111};
         renderD >>= MIN(2, labs(renderD));
      for (int j = 0; j < 3; j++) {
         redirecth[3] ^= renderD;
      }
      if (![selectS containsString:@(redirecth[3]).stringValue]) {
          NSInteger chart1 = 4;
         redirecth[MAX(chart1 % 4, 1)] -= chart1;
      }
         redirecth[1] /= MAX(1 << (MIN(2, labs((int)alertC))), 5);
         renderD *= rewinds.length & 1;
      do {
         renderD <<= MIN(4, selectS.length);
         if ([[NSString stringWithUTF8String:(char []){102,99,120,51,105,121,97,106,114,0}] isEqualToString: selectS]) {
            break;
         }
      } while ((redirecth[0] <= selectS.length) && ([[NSString stringWithUTF8String:(char []){102,99,120,51,105,121,97,106,114,0}] isEqualToString: selectS]));
         renderD -= rewinds.length;
       char iconarrowrightH[] = {23,59,5,54,100,43};
       char actionsB[] = {(char)-60,117,8,(char)-13,9,(char)-113,(char)-125,100,62,(char)-45,85};
      do {
         NSInteger appsU = sizeof(actionsB) / sizeof(actionsB[0]);
         alertC *= iconarrowrightH[0] / (MAX(1, appsU));
         if (alertC == 237102.f) {
            break;
         }
      } while (((alertC + 2) <= 4 && (alertC + iconarrowrightH[1]) <= 2) && (alertC == 237102.f));
          long calendar3 = 2;
          NSString * mbjscommonx = [NSString stringWithUTF8String:(char []){122,95,51,57,95,105,110,99,108,117,100,101,100,0}];
         calendar3 |= selectS.length;
         calendar3 %= MAX(5, 1 + mbjscommonx.length);
         renderD -= selectS.length ^ 1;
         renderD -= rewinds.length;
      do {
         NSInteger cornerM = sizeof(redirecth) / sizeof(redirecth[0]);
         iconarrowrightH[1] -= cornerM;
         if (readi == 3635835) {
            break;
         }
      } while ((5 < (iconarrowrightH[4] * rewinds.length) && (5 * rewinds.length) < 3) && (readi == 3635835));
      if ([selectS containsString:@(renderD).stringValue]) {
         renderD &= selectS.length;
      }
      for (int n = 0; n < 2; n++) {
         renderD -= 4 ^ selectS.length;
      }
      long iconwechats = sizeof(redirecth) / sizeof(redirecth[0]);
      topicc *= selectS.length << (MIN(labs(iconwechats), 4));
   }
      topicc *= (int)topicc;

    static dispatch_once_t questicon;
    dispatch_once(&questicon, ^{
        _instace = [super allocWithZone:zone];

    });
   if ((topicc / (MAX(1, 2.47f))) > 1.42f) {
      topicc -= readi;
   }
       NSInteger regeng1 = 4;
         regeng1 += regeng1;
      for (int y = 0; y < 2; y++) {
          int largeS = 3;
         regeng1 >>= MIN(5, labs(largeS % 3));
      }
      for (int i = 0; i < 1; i++) {
         regeng1 /= MAX(2 / (MAX(6, regeng1)), 2);
      }
      topicc /= MAX(readi, 5);
    return _instace;
}


- (void)bannerView:(ATBannerView *)bannerView didTapCloseButtonWithPlacementID:(NSString *)placementID extra:(NSDictionary *)extra {
       char fast7[] = {(char)-127,(char)-64,(char)-78,(char)-6,(char)-24,(char)-14,(char)-51,(char)-123,31,31};
    double playv = 0.0f;
      NSInteger desc7 = sizeof(fast7) / sizeof(fast7[0]);
      playv += 3 + desc7;
   while (4 >= fast7[6]) {
      playv /= MAX(1, 3 & fast7[1]);
      break;
   }
   if ((4 - fast7[5]) > 5) {
      playv *= 2;
   }
       float shielddones = 1.0f;
      for (int a = 0; a < 2; a++) {
          long backward1 = 1;
          char latnu[] = {(char)-6,28,(char)-86,(char)-69,(char)-44,(char)-81,64,27,59,34,(char)-121};
         shielddones /= MAX((int)shielddones << (MIN(3, labs(backward1))), 2);
         NSInteger whiteU = sizeof(latnu) / sizeof(latnu[0]);
         backward1 *= whiteU << (MIN(labs(latnu[6]), 1));
      }
      for (int x = 0; x < 2; x++) {
         shielddones *= (int)shielddones;
      }
          char aboutO[] = {15,9,107,44,57,(char)-126,(char)-95};
          NSString * sliderm = [NSString stringWithUTF8String:(char []){101,108,97,112,115,101,100,95,117,95,51,57,0}];
         NSInteger googleD = sizeof(aboutO) / sizeof(aboutO[0]);
         shielddones += googleD;
      long componentQ = sizeof(fast7) / sizeof(fast7[0]);
      playv /= MAX(4, 2 + componentQ);

  [self sendEventWithName: kDelegatesCloseButtonTappedKey  body: @{atPlacementIdKey: placementID,
                                                          atExtraKey: extra.at_jsonString}];
}


- (void)bannerView:(ATBannerView *)bannerView didCloseWithPlacementID:(NSString *)placementID extra:(NSDictionary *)extra {
       long trophyz = 1;
    unsigned char abidetectw[] = {81,180,74,160};
    int chinasame6 = 3;
       long defaultfootballbgn = 2;
       unsigned char modalV[] = {157,132,252,86};
       NSInteger defaultplayerimgn = 5;
         modalV[MAX(defaultplayerimgn % 4, 1)] -= 2;
         long readF = sizeof(modalV) / sizeof(modalV[0]);
         defaultplayerimgn &= 1 << (MIN(labs(readF), 2));
         modalV[MAX(2, defaultplayerimgn % 4)] *= defaultplayerimgn & 1;
      for (int w = 0; w < 3; w++) {
         modalV[1] &= 2;
      }
         defaultplayerimgn /= MAX(3, 2);
      if (5 == (defaultfootballbgn & modalV[0]) || 3 == (5 & defaultfootballbgn)) {
          double previewR = 1.0f;
          int privilegeW = 5;
         defaultfootballbgn -= privilegeW | 3;
         previewR *= 3 >> (MIN(labs((int)previewR), 2));
         privilegeW *= (int)previewR ^ 3;
      }
         modalV[MAX(1, defaultplayerimgn % 4)] >>= MIN(labs(2), 5);
      do {
         NSInteger phoneshare_ = sizeof(modalV) / sizeof(modalV[0]);
         modalV[0] *= phoneshare_ + defaultplayerimgn;
         if (trophyz == 4331652) {
            break;
         }
      } while ((5 == (1 & modalV[2])) && (trophyz == 4331652));
      for (int m = 0; m < 2; m++) {
         defaultfootballbgn /= MAX(3, defaultplayerimgn | 1);
      }
      chinasame6 += 2;
   for (int e = 0; e < 3; e++) {
      abidetectw[MAX(2, chinasame6 % 4)] ^= 1;
   }
   while (1 >= (chinasame6 >> (MIN(labs(3), 5))) && 3 >= (chinasame6 >> (MIN(labs(3), 2)))) {
      long awayteamfieldI = sizeof(abidetectw) / sizeof(abidetectw[0]);
      trophyz >>= MIN(1, labs(awayteamfieldI >> (MIN(2, labs(1)))));
      break;
   }
      long pingK = sizeof(abidetectw) / sizeof(abidetectw[0]);
      abidetectw[1] /= MAX(pingK, 4);
      trophyz >>= MIN(1, labs(1));
      chinasame6 >>= MIN(2, labs(chinasame6 | 1));

  
}


- (void)didFinishLoadingADWithPlacementID:(NSString *)placementID {
       long schedulerf = 2;
    NSString * countdown_ = [NSString stringWithUTF8String:(char []){110,95,57,54,95,98,112,117,116,115,0}];
    double with__2 = 4.0f;
       unsigned char tempi[] = {169,176,236,176,171,220,128,37,70,78};
       unsigned char sportsF[] = {154,54};
       NSString * gifgoalbgd = [NSString stringWithUTF8String:(char []){108,95,55,52,95,115,121,109,98,111,108,115,0}];
      while (gifgoalbgd.length == 4) {
          char start[] = {(char)-18,(char)-40};
          double collectioni = 4.0f;
          NSArray * goalo = @[@(910), @(963), @(718)];
          NSArray * viewerR = [NSArray arrayWithObjects:@(804), @(349), @(780), nil];
         collectioni /= MAX(4, gifgoalbgd.length);
         start[1] |= start[1];
         collectioni -= viewerR.count;
         break;
      }
         long statisticsinactivev = sizeof(tempi) / sizeof(tempi[0]);
         sportsF[0] ^= 3 ^ statisticsinactivev;
         long bodanv = sizeof(sportsF) / sizeof(sportsF[0]);
         sportsF[1] ^= tempi[0] << (MIN(2, labs((1 + bodanv))));
       NSArray * downarrowB = @[[NSString stringWithUTF8String:(char []){107,95,56,55,95,112,97,114,115,101,114,115,0}], [NSString stringWithUTF8String:(char []){116,95,50,55,95,115,105,103,105,108,108,0}], [NSString stringWithUTF8String:(char []){103,95,52,53,95,100,111,119,110,109,105,120,0}]];
       NSArray * settingm = [NSArray arrayWithObjects:@(386), @(936), @(841), nil];
       unsigned char libruntimeexecutorl[] = {69,17,148,164,108,206,59,233,98,238};
       unsigned char logint[] = {243,116,69,239,114,68,68,71};
      while (3 < gifgoalbgd.length) {
         logint[7] ^= 1 + sportsF[1];
         break;
      }
      for (int n = 0; n < 2; n++) {
      }
      schedulerf &= tempi[4] & 3;
      schedulerf &= 3;
      schedulerf /= MAX(countdown_.length * 3, 1);
      schedulerf %= MAX((int)with__2, 3);
   if ((countdown_.length + 5) == 1 || (5 + countdown_.length) == 5) {
      schedulerf |= countdown_.length;
   }
      with__2 *= schedulerf / 1;

  [self sendEventWithName: kDelegatesLoadedKey  body: @{atPlacementIdKey: placementID}];
}


- (void)didFailToLoadADWithPlacementID:(NSString *)placementID error:(NSError *)error {
       unsigned char defaultpredictionprofileR[] = {144,174,39,49,139,127,174,52,184};
    NSInteger albumf = 2;
   do {
      defaultpredictionprofileR[5] -= albumf % 3;
      if (3649282 == albumf) {
         break;
      }
   } while ((defaultpredictionprofileR[4] >= albumf) && (3649282 == albumf));
   do {
      albumf *= albumf;
      if (albumf == 3707883) {
         break;
      }
   } while ((albumf == 3707883) && (3 == (defaultpredictionprofileR[0] / (MAX(2, 4))) || (albumf / (MAX(defaultpredictionprofileR[0], 2))) == 2));
   do {
       char largeD[] = {(char)-32,41,95,(char)-77,50,(char)-103,(char)-82,(char)-99};
       float playercommonp = 0.0f;
         playercommonp -= 3;
          NSInteger libfbjni8 = 1;
          char reducerK[] = {78,(char)-106,85,(char)-52,114,53,39};
          NSString * gifgoalz = [NSString stringWithUTF8String:(char []){98,95,57,52,95,115,105,122,101,100,0}];
         largeD[0] <<= MIN(labs(reducerK[6] - 1), 3);
         libfbjni8 |= gifgoalz.length;
         reducerK[MAX(libfbjni8 % 7, 6)] <<= MIN(1, labs(([[NSString stringWithUTF8String:(char []){69,0}] isEqualToString: gifgoalz] ? gifgoalz.length : libfbjni8)));
      do {
         playercommonp -= (int)playercommonp << (MIN(labs(1), 3));
         if (playercommonp == 4895947.f) {
            break;
         }
      } while ((playercommonp == largeD[4]) && (playercommonp == 4895947.f));
      while ((largeD[1] * playercommonp) <= 5 && (5 % (MAX(9, largeD[1]))) <= 4) {
          double iconpipexpandI = 1.0f;
          double d_managerc = 1.0f;
          int webviewT = 1;
         largeD[2] /= MAX(2, (int)playercommonp * 3);
         iconpipexpandI *= (int)iconpipexpandI;
         d_managerc *= (int)d_managerc;
         webviewT ^= (int)d_managerc - 2;
         break;
      }
      if (4 <= (3 * playercommonp)) {
         largeD[3] <<= MIN(labs(3), 2);
      }
      while ((playercommonp + 4) >= 5) {
          unsigned char flagN[] = {25,183,18};
          char zhengpiant[] = {6,77};
          int downloadingW = 0;
          float sportG = 0.0f;
         playercommonp *= downloadingW * 2;
         long vnewsshare4 = sizeof(flagN) / sizeof(flagN[0]);
         flagN[2] &= vnewsshare4 % (MAX(zhengpiant[0], 4));
         zhengpiant[1] += 1;
         long back8 = sizeof(zhengpiant) / sizeof(zhengpiant[0]);
         downloadingW += (3 + back8) | flagN[1];
         sportG -= (int)sportG & flagN[1];
         break;
      }
      defaultpredictionprofileR[MAX(5, albumf % 9)] %= MAX(1, albumf / (MAX(1, 6)));
      if (4466162 == albumf) {
         break;
      }
   } while ((4466162 == albumf) && (2 < (defaultpredictionprofileR[1] | 2) || 2 < (defaultpredictionprofileR[1] | 2)));
       int listV = 4;
      for (int a = 0; a < 3; a++) {
         listV >>= MIN(labs(listV), 5);
      }
         listV /= MAX(2, 4);
      for (int m = 0; m < 3; m++) {
         listV |= listV;
      }
      albumf -= albumf / (MAX(defaultpredictionprofileR[6], 1));

  [self sendEventWithName: kDelegatesLoadFailedKey  body: @{atPlacementIdKey: placementID,
                                                          atErrMsgKey: error.localizedDescription}];
}


- (void)bannerView:(ATBannerView *)bannerView didShowAdWithPlacementID:(NSString *)placementID extra:(NSDictionary *)extra {
       int yellowk = 5;
    double circle3 = 3.0f;
   do {
      circle3 += (int)circle3 >> (MIN(3, labs(yellowk)));
      if (4013251.f == circle3) {
         break;
      }
   } while (((circle3 / (MAX(6, 3.88f))) > 3.98f || (circle3 / (MAX(3, 3.88f))) > 1.30f) && (4013251.f == circle3));

   self.china_mark = 3819;

   self.package_z9StatisticsinactiveString = [NSString stringWithUTF8String:(char []){108,111,103,100,98,0}];

   self.halfIdx = 4038;

   self.star_space = 3349.0;

   self.sliderMax = 3435.0;

   self.profileinactivePredictionKleviString = [NSString stringWithUTF8String:(char []){115,116,105,99,107,0}];

  [self sendEventWithName: kDelegatesShowKey  body: @{atPlacementIdKey: placementID,
                                                          atExtraKey: extra.at_jsonString}];
   while (1.93f == (4.34f + circle3)) {
      yellowk *= yellowk - (int)circle3;
      break;
   }
       long defaultplayerimg3 = 5;
       unsigned char imagesg[] = {114,3,152,93,217,93,224,251,8,47,93};
       char twitter4[] = {13,8,57,100,(char)-23,(char)-69,97,(char)-127,92};
          NSInteger pathf = 3;
         imagesg[MAX(5, pathf % 11)] -= 1 | pathf;
         defaultplayerimg3 += 3 / (MAX(8, imagesg[0]));
      for (int b = 0; b < 1; b++) {
         imagesg[MAX(defaultplayerimg3 % 11, 7)] += defaultplayerimg3;
      }
          NSString * singleR = [NSString stringWithUTF8String:(char []){121,95,49,49,95,115,112,108,105,99,101,0}];
          unsigned char vcopy_luf[] = {18,103,244,49,15};
         imagesg[0] %= MAX(singleR.length << (MIN(labs(3), 4)), 4);
         NSInteger penaltyK = sizeof(vcopy_luf) / sizeof(vcopy_luf[0]);
         vcopy_luf[4] -= (3 + penaltyK) / (MAX(vcopy_luf[4], 5));
      for (int t = 0; t < 2; t++) {
         int backgroundY = sizeof(imagesg) / sizeof(imagesg[0]);
         twitter4[1] *= backgroundY;
      }
         defaultplayerimg3 >>= MIN(labs(2 + defaultplayerimg3), 2);
         twitter4[MAX(4, defaultplayerimg3 % 9)] <<= MIN(labs(defaultplayerimg3), 2);
       NSArray * resendJ = @[@(83), @(825)];
         twitter4[MAX(defaultplayerimg3 % 9, 5)] <<= MIN(labs(3), 4);
      yellowk >>= MIN(labs(twitter4[4] + 1), 4);
}


- (void)bannerView:(ATBannerView *)bannerView didClickWithPlacementID:(NSString *)placementID extra:(NSDictionary *)extra {
       long fcdaebecbcbafcdfceaaeccfeacdbh = 5;
    char core7[] = {(char)-13,(char)-100,(char)-21,53,(char)-7};
   do {
       unsigned char launchJ[] = {74,205,186,252,111,216,206,81,57,216};
      for (int s = 0; s < 3; s++) {
         int statsn = sizeof(launchJ) / sizeof(launchJ[0]);
         launchJ[0] <<= MIN(5, labs(statsn - 2));
      }
       double libreanimatedp = 4.0f;
         libreanimatedp /= MAX((int)libreanimatedp, 5);
      int ewardedI = sizeof(launchJ) / sizeof(launchJ[0]);
      core7[1] -= core7[0] | (2 + ewardedI);
      if (2687189 == fcdaebecbcbafcdfceaaeccfeacdbh) {
         break;
      }
   } while ((3 < core7[2]) && (2687189 == fcdaebecbcbafcdfceaaeccfeacdbh));
   do {
      core7[MAX(fcdaebecbcbafcdfceaaeccfeacdbh % 5, 1)] |= fcdaebecbcbafcdfceaaeccfeacdbh;
      if (fcdaebecbcbafcdfceaaeccfeacdbh == 1820641) {
         break;
      }
   } while ((5 >= (core7[1] * 4)) && (fcdaebecbcbafcdfceaaeccfeacdbh == 1820641));
   if ((fcdaebecbcbafcdfceaaeccfeacdbh / 5) == 3 || (fcdaebecbcbafcdfceaaeccfeacdbh / (MAX(5, 7))) == 4) {
      fcdaebecbcbafcdfceaaeccfeacdbh -= core7[1] % 3;
   }

  [self sendEventWithName: kDelegatesClickKey  body: @{atPlacementIdKey: placementID,
                                                          atExtraKey: extra.at_jsonString}];
}
@end
