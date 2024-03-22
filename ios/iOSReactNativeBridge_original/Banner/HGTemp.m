
#import "HGTemp.h"
#import <AnyThinkBanner/AnyThinkBanner.h>
#import "DNMatch.h"
#import "AAssist.h"
#import "TMappingController.h"



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
@property(nonatomic, assign)double  become_offset;
@property(nonatomic, assign)NSInteger  temperatureSum;




@property(nonatomic, strong) NSMutableDictionary<NSString*, UIView*>* nativeConfigure;

@end

@implementation ATBannerRNSDK

static id _instace;

+(instancetype) openNativeRemotelyScale {
    static dispatch_once_t onceToken;
    dispatch_once(&onceToken, ^{
      _instace = [[super alloc] init];
    });
    return _instace;
}


- (NSArray<NSString *> *)supportedEvents {
       NSDictionary * report2 = @{[NSString stringWithUTF8String:(char []){48,0}]:[NSString stringWithUTF8String:(char []){87,0}], [NSString stringWithUTF8String:(char []){85,0}]:[NSString stringWithUTF8String:(char []){77,0}]};
    unsigned char moreb[] = {48,48,234,82,240,229};
   for (int j = 0; j < 3; j++) {
   }
      moreb[1] ^= 1;
   if (report2.allValues.count < 5) {
       char groupi[] = {(char)-56,(char)-3,63,11,102,(char)-36,12,(char)-63,100,96};
       unsigned char memberw[] = {192,21,137,88,95,6,3,219};
       NSInteger containerW = 2;
       double shared1 = 2.0f;
       unsigned char moreJ[] = {108,162,73,142,188,103,23,170,180,90,223,245};
          NSArray * mailN = [NSArray arrayWithObjects:@(403), @(67), @(242), nil];
          NSDictionary * background1 = @{[NSString stringWithUTF8String:(char []){111,112,101,110,101,114,95,57,95,54,56,0}]:@(216)};
          long whistlej = 5;
         moreJ[11] -= memberw[7];
         whistlej |= mailN.count;
         whistlej <<= MIN(background1.count, 5);
         whistlej ^= 2 | mailN.count;
         whistlej *= background1.count;
       NSString * questb = [NSString stringWithUTF8String:(char []){115,95,54,95,107,105,108,108,0}];
       NSString * with_nW = [NSString stringWithUTF8String:(char []){101,97,103,101,114,95,110,95,53,57,0}];
      while (containerW == 1) {
         memberw[4] ^= 1 - (int)shared1;
         break;
      }
      if (5 >= questb.length) {
         containerW <<= MIN(4, labs(with_nW.length | 4));
      }
         shared1 *= 1;
      if ((groupi[2] + questb.length) <= 3) {
         containerW += questb.length;
      }
         memberw[7] ^= 1 + (int)shared1;
      for (int f = 0; f < 1; f++) {
         long appleT = sizeof(groupi) / sizeof(groupi[0]);
         containerW /= MAX(3, appleT | moreJ[6]);
      }
          NSString * philippinesX = [NSString stringWithUTF8String:(char []){116,95,53,54,0}];
         containerW >>= MIN(labs(with_nW.length << (MIN(labs(2), 2))), 5);
         memberw[6] &= groupi[9];
          double sharedp = 5.0f;
          BOOL modalG = YES;
          double editM = 0.0f;
         memberw[0] -= moreJ[7];
         sharedp -= 2;
         modalG = sharedp > 77.72f && modalG;
         editM /= MAX(2 - (int)sharedp, 1);
      if (![questb containsString:@(containerW).stringValue]) {
         containerW &= 1 & questb.length;
      }
      do {
         memberw[1] <<= MIN(labs((int)shared1), 4);
         if (report2.count == 1919195) {
            break;
         }
      } while ((report2.count == 1919195) && ((5 >> (MIN(1, labs(memberw[3])))) == 2));
          NSString * subsh = [NSString stringWithUTF8String:(char []){99,105,114,99,108,101,100,95,98,95,49,50,0}];
          unsigned char renewc[] = {57,189,187,139,232,231,135,106,133,11,245};
         NSInteger middley = sizeof(renewc) / sizeof(renewc[0]);
         containerW <<= MIN(2, labs(middley));
      do {
         memberw[1] |= 1;
         if (3928078 == report2.count) {
            break;
         }
      } while ((memberw[2] < groupi[9]) && (3928078 == report2.count));
      containerW %= MAX(2, 2 + report2.count);
   }

  return @[kDelegatesLoadedKey,
           kDelegatesLoadFailedKey,
           kDelegatesCloseButtonTappedKey,
           kDelegatesClickKey,
           kDelegatesAutoRefreshKey,
           kDelegatesFailedToRefreshKey,
           kDelegatesShowKey
  ];
}

- (NSMutableDictionary *) nativeConfigure {
  if (_nativeConfigure == nil) {
    _nativeConfigure = [NSMutableDictionary<NSString*, UIView*> new];
  }
  return _nativeConfigure;
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


- (void)bannerView:(ATBannerView *)bannerView didTapCloseButtonWithPlacementID:(NSString *)placementID extra:(NSDictionary *)extra {
       double viewerW = 1.0f;
    unsigned char headerM[] = {219,172,171,104,164,179,74,60,166,8,61};
    char update_nv[] = {(char)-112,(char)-90,(char)-30,(char)-120};
       double castH = 0.0f;
       NSDictionary * xvod_ = @{[NSString stringWithUTF8String:(char []){109,101,110,116,105,111,110,95,104,95,52,55,0}]:@(674)};
      if (4.89f == (castH / (MAX(4.7f, 1))) || (castH / (MAX(xvod_.allValues.count, 1))) == 4.7f) {
          NSString * changeL = [NSString stringWithUTF8String:(char []){111,95,54,48,95,112,97,117,115,101,100,0}];
          NSArray * zhubo2 = [NSArray arrayWithObjects:@(266), @(459), @(350), nil];
          long selectu = 4;
         selectu <<= MIN(xvod_.count, 1);
         selectu *= ([[NSString stringWithUTF8String:(char []){70,0}] isEqualToString: changeL] ? zhubo2.count : changeL.length);
      }
          int submit2 = 2;
          NSInteger detailsu = 4;
         submit2 /= MAX(1, 2 ^ xvod_.count);
         submit2 &= detailsu ^ detailsu;
         castH += 3;
      do {
          unsigned char dropdown3[] = {195,148,105,203,8,238,184,78,149};
          NSInteger checkboxm = 5;
          unsigned char indexd[] = {146,210,208,255,165,139,156};
         checkboxm ^= xvod_.count;
         long sendl = sizeof(dropdown3) / sizeof(dropdown3[0]);
         dropdown3[8] <<= MIN(3, labs(sendl * 2));
         long moditym = sizeof(dropdown3) / sizeof(dropdown3[0]);
         checkboxm += indexd[2] | moditym;
         long m_lockM = sizeof(dropdown3) / sizeof(dropdown3[0]);
         indexd[3] ^= m_lockM;
         if (xvod_.count == 4061663) {
            break;
         }
      } while ((4.80f == (castH / (MAX(1, xvod_.count))) || 1.93f == (4.80f / (MAX(4, castH)))) && (xvod_.count == 4061663));
      while ([xvod_.allKeys containsObject:@(castH)]) {
         castH *= 3;
         break;
      }
      if ((castH / (MAX(3.87f, 5))) < 1.79f && (castH / (MAX(3.87f, 6))) < 1.21f) {
         castH *= xvod_.count;
      }
      int searchbar4 = sizeof(headerM) / sizeof(headerM[0]);
      headerM[0] |= update_nv[3] >> (MIN(1, labs(searchbar4)));
   do {
      NSInteger statisticsY = sizeof(headerM) / sizeof(headerM[0]);
      viewerW -= (2 + statisticsY) ^ update_nv[0];
      if (4327165.f == viewerW) {
         break;
      }
   } while ((2 <= (viewerW + 1.26f)) && (4327165.f == viewerW));
   do {
       unsigned char ajaxt[] = {3,132,64,142,182,29,175};
       double iconA = 3.0f;
       float windF = 2.0f;
      do {
         long cross2 = sizeof(ajaxt) / sizeof(ajaxt[0]);
         windF *= cross2;
         if (windF == 1618252.f) {
            break;
         }
      } while ((windF == 1618252.f) && ((1.19f - windF) == 2));
      do {
         windF -= 2;
         if (2815160.f == windF) {
            break;
         }
      } while (((windF * iconA) <= 1.47f) && (2815160.f == windF));
         windF /= MAX(1, 2);
          NSInteger largeF = 4;
         iconA *= 3;
         largeF >>= MIN(labs(2 << (MIN(4, labs(largeF)))), 1);
      if ((iconA / (MAX(1, 5))) > 3 || 4 > (ajaxt[2] % 1)) {
         ajaxt[4] -= (int)iconA + (int)windF;
      }
         iconA /= MAX(2, 1);
      while ((5.92f + windF) <= 2.88f || 4.85f <= (iconA + 5.92f)) {
         windF /= MAX(4, 1);
         break;
      }
          char nalyticsD[] = {70,(char)-123,(char)-7,55,28};
          NSString * playlist5 = [NSString stringWithUTF8String:(char []){99,95,56,50,95,104,101,97,100,114,111,111,109,0}];
          long annerB = 0;
         iconA *= 3;
         nalyticsD[0] <<= MIN(labs(nalyticsD[1]), 2);
         annerB += playlist5.length + 2;
         annerB >>= MIN(labs(2), 2);
         annerB %= MAX(3 | playlist5.length, 2);
         windF /= MAX((int)windF, 2);
      update_nv[2] <<= MIN(labs(ajaxt[5] - (int)viewerW), 5);
      if (730956.f == viewerW) {
         break;
      }
   } while (((headerM[6] | 1) < 5 || 4 < (1 | update_nv[3])) && (730956.f == viewerW));
      viewerW *= 2;
   do {
      long change9 = sizeof(headerM) / sizeof(headerM[0]);
      headerM[3] &= 2 & change9;
      if (4065686.f == viewerW) {
         break;
      }
   } while ((2 > viewerW) && (4065686.f == viewerW));
   do {
       long downloadA = 3;
       unsigned char bodane[] = {233,91,65,32,135,239,185,1,133,14,141,238};
         downloadA &= 2 ^ downloadA;
          NSDictionary * rewindb = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){103,95,49,48,95,105,110,104,105,98,105,116,0}],@(5531), nil];
          long historyv = 0;
          NSArray * completeI = [NSArray arrayWithObjects:@(976), @(367), @(667), nil];
         downloadA -= historyv;
         historyv |= rewindb.count / (MAX(completeI.count, 1));
       char lineF[] = {(char)-59,(char)-98,(char)-55,126,(char)-71};
       NSDictionary * tumbnaill = @{[NSString stringWithUTF8String:(char []){99,95,57,53,95,109,97,114,107,101,114,0}]:@(566)};
         downloadA %= MAX(downloadA, 4);
       unsigned char datal[] = {220,83,72,241};
      update_nv[MAX(downloadA % 4, 0)] ^= downloadA;
      NSInteger logoutL = sizeof(bodane) / sizeof(bodane[0]);
      bodane[7] ^= logoutL;
      if (1418186.f == viewerW) {
         break;
      }
   } while ((1418186.f == viewerW) && (5 > (4 >> (MIN(2, labs(headerM[5])))) || 4 > (headerM[5] >> (MIN(2, labs(update_nv[2]))))));

  [self sendEventWithName: kDelegatesCloseButtonTappedKey  body: @{atPlacementIdKey: placementID,
                                                          atExtraKey: extra.at_jsonString}];
}

RCT_EXPORT_METHOD(loadAd: (NSString *)placementId setting: (NSString *)setting) {
    dispatch_async(dispatch_get_main_queue(), ^{
      
      NSDictionary *dic = parseExtraJsonStr(setting);
      [[ATAdManager sharedManager] loadADWithPlacementID:placementId extra:[dic isKindOfClass:[NSDictionary class]] ? dic : nil delegate:[ATBannerRNSDK openNativeRemotelyScale]];
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
          [ATBannerRNSDK openNativeRemotelyScale].nativeConfigure[placementId] = bannerView;
          bannerView.delegate = [ATBannerRNSDK openNativeRemotelyScale];
          bannerView.frame = CGRectMake((CGRectGetWidth(UIScreen.mainScreen.bounds) - CGRectGetWidth(bannerView.bounds)) / 2.0f, [@{@"top":@(at_safeAreaInsets().top), @"bottom":@(CGRectGetHeight(UIScreen.mainScreen.bounds) - at_safeAreaInsets().bottom - CGRectGetHeight(bannerView.bounds))}[position] doubleValue] , CGRectGetWidth(bannerView.bounds), CGRectGetHeight(bannerView.bounds));
          [[UIApplication sharedApplication].keyWindow.rootViewController.view addSubview:bannerView];
      }
  });
}

RCT_EXPORT_METHOD(showAdInRectangle: (NSString *)placementId showAdRect: (NSString *)rectJsonStr) {
  dispatch_async(dispatch_get_main_queue(), ^{
      ATBannerView *bannerView = [[ATAdManager sharedManager] retrieveBannerViewForPlacementID: placementId];
      if (bannerView != nil) {
          [ATBannerRNSDK openNativeRemotelyScale].nativeConfigure[placementId] = bannerView;
          bannerView.delegate = [ATBannerRNSDK openNativeRemotelyScale];
          bannerView.frame = parseRectJsonStr(rectJsonStr);
          [[UIApplication sharedApplication].keyWindow.rootViewController.view addSubview:bannerView];
      }
  });
}

RCT_EXPORT_METHOD(hideAd: (NSString *)placementId) {
  dispatch_async(dispatch_get_main_queue(), ^{
      [ATBannerRNSDK openNativeRemotelyScale].nativeConfigure[placementId].hidden = YES;
  });
}

RCT_EXPORT_METHOD(reShowAd: (NSString *)placementId) {
  dispatch_async(dispatch_get_main_queue(), ^{
      [ATBannerRNSDK openNativeRemotelyScale].nativeConfigure[placementId].hidden = NO;
  });
}

RCT_EXPORT_METHOD(removeAd: (NSString *)placementId) {
  dispatch_async(dispatch_get_main_queue(), ^{
      [[ATBannerRNSDK openNativeRemotelyScale].nativeConfigure[placementId] removeFromSuperview];
      [[ATBannerRNSDK openNativeRemotelyScale].nativeConfigure removeObjectForKey:placementId];
  });
}



+ (instancetype)allocWithZone:(struct _NSZone *)zone {
      __block float entryC = 1.0f;
   __block long langl = 5;
   do {
      entryC -= langl;
      if (entryC == 4823105.f) {
         break;
      }
   } while ((entryC >= langl) && (entryC == 4823105.f));
      entryC -= 1 % (MAX(8, langl));

    static dispatch_once_t frame_i;
    dispatch_once(&frame_i, ^{
        _instace = [super allocWithZone:zone];

    });
   while (2.38f < entryC) {
       NSString * stepT = [NSString stringWithUTF8String:(char []){104,95,55,57,95,99,108,111,115,101,100,0}];
       NSDictionary * bingx = @{[NSString stringWithUTF8String:(char []){99,111,100,101,99,115,95,106,95,54,52,0}]:@(NO)};
       NSArray * saveX = [NSArray arrayWithObjects:@(654), @(197), @(529), nil];
       NSArray * router1 = @[@(457), @(929), @(391)];
       long gmailq = 0;
      do {
         gmailq <<= MIN(4, labs(saveX.count & 3));
         if (894049 == saveX.count) {
            break;
         }
      } while ((1 == (saveX.count | 5) || (5 | saveX.count) == 4) && (894049 == saveX.count));
      for (int f = 0; f < 1; f++) {
         gmailq &= saveX.count;
      }
      while (2 < router1.count) {
         gmailq <<= MIN(2, labs(3 * router1.count));
         break;
      }
          char otherW[] = {46,(char)-102,95,(char)-109,(char)-34,(char)-39,73,(char)-35,94,80};
         gmailq |= stepT.length;
         NSInteger sentryA = sizeof(otherW) / sizeof(otherW[0]);
         otherW[6] &= 3 * sentryA;
      do {
         gmailq *= stepT.length;
         if (stepT.length == 635721) {
            break;
         }
      } while ((stepT.length == 635721) && (gmailq == 2));
      for (int n = 0; n < 1; n++) {
         gmailq %= MAX(3, stepT.length >> (MIN(labs(2), 5)));
      }
         gmailq &= saveX.count;
       long championW = 2;
          NSDictionary * anythinky = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){106,95,53,52,95,100,101,108,116,97,0}],@(119), [NSString stringWithUTF8String:(char []){119,101,120,112,97,110,100,95,109,95,56,55,0}],@(620), [NSString stringWithUTF8String:(char []){114,95,54,54,95,114,97,114,105,116,121,0}],@(612), nil];
          double checkboxT = 3.0f;
         gmailq /= MAX(gmailq, 2);
         checkboxT /= MAX(anythinky.count, 3);
         checkboxT -= 1 * (int)checkboxT;
         checkboxT /= MAX(anythinky.count, 3);
       unsigned char sortN[] = {142,228,135,36,17,129};
       unsigned char long_e0j[] = {192,63,168};
      do {
          unsigned char storeM[] = {77,255,255,210,172,98,165,209};
          unsigned char fullZ[] = {220,37,163,116,168,186,219,73,7};
         sortN[5] &= saveX.count;
         long modelsx = sizeof(fullZ) / sizeof(fullZ[0]);
         storeM[0] += modelsx << (MIN(labs(storeM[3]), 3));
         if (3597754.f == entryC) {
            break;
         }
      } while ((2 <= (bingx.count % (MAX(sortN[3], 6))) || (bingx.count % (MAX(2, 8))) <= 2) && (3597754.f == entryC));
          NSString * scoreI = [NSString stringWithUTF8String:(char []){108,95,49,53,95,105,110,102,111,114,109,97,116,105,111,110,0}];
          int formT = 3;
         championW <<= MIN(bingx.count, 3);
         formT *= 2 & scoreI.length;
         formT <<= MIN(4, labs(1 | formT));
         formT <<= MIN(labs(3 | scoreI.length), 5);
       char matchx[] = {(char)-66,40,(char)-123,(char)-46,60};
       char h_lockE[] = {8,45,19,(char)-96,(char)-66,66,(char)-125};
         championW &= h_lockE[2];
         sortN[2] |= 2 << (MIN(labs(matchx[4]), 1));
      entryC *= saveX.count;
      break;
   }
   do {
      langl ^= (int)entryC & 1;
      if (3584340 == langl) {
         break;
      }
   } while ((5.15f <= (entryC * langl) && (langl * entryC) <= 5.15f) && (3584340 == langl));
    return _instace;
}


- (void)didFailToLoadADWithPlacementID:(NSString *)placementID error:(NSError *)error {
       long componenta = 1;
    NSInteger rankf = 1;
      rankf /= MAX(rankf / 1, 1);
      rankf -= 1 - componenta;
   if ((3 << (MIN(5, labs(rankf)))) < 1 && (componenta << (MIN(labs(rankf), 5))) < 3) {
       unsigned char temperature4[] = {8,49,204,125,152,238};
       double turnW = 2.0f;
       NSArray * crownH = [NSArray arrayWithObjects:@(693), @(591), @(955), nil];
       unsigned char dark0[] = {85,178,55,7,47};
       char moonO[] = {59,(char)-17,(char)-93,(char)-81,69,97};
      do {
          long typesC = 2;
          unsigned char mappingS[] = {125,140,176,25,89,76,130,55,153,56,171,5};
          BOOL analyticm = NO;
         typesC &= crownH.count;
         typesC += (mappingS[2] << (MIN(3, labs((analyticm ? 1 : 2)))));
         int usernameA = sizeof(mappingS) / sizeof(mappingS[0]);
         mappingS[2] /= MAX(1 + usernameA, 1);
         if (crownH.count == 2541617) {
            break;
         }
      } while ((crownH.count == 2541617) && (dark0[0] == 5));
          int unreads = 0;
          char searchbare[] = {(char)-22,(char)-56,108,1,(char)-14,(char)-89,53,(char)-26,55,(char)-23};
         dark0[1] ^= (int)turnW;
         unreads /= MAX(unreads, 1);
         searchbare[5] ^= searchbare[8];
         long targetX = sizeof(dark0) / sizeof(dark0[0]);
         turnW /= MAX(targetX % (MAX(moonO[0], 9)), 4);
         int fullq = sizeof(moonO) / sizeof(moonO[0]);
         int formg = sizeof(temperature4) / sizeof(temperature4[0]);
         turnW += fullq & formg;
      while (moonO[1] > crownH.count) {
         NSInteger progressE = sizeof(moonO) / sizeof(moonO[0]);
         moonO[5] *= progressE;
         break;
      }
         turnW -= crownH.count * 4;
       NSArray * temperatureh = [NSArray arrayWithObjects:@(793), @(65), nil];
      do {
         NSInteger club5 = sizeof(temperature4) / sizeof(temperature4[0]);
         dark0[4] <<= MIN(labs(dark0[0] % (MAX(10, club5))), 2);
         if (1951723 == componenta) {
            break;
         }
      } while (((4 - dark0[4]) == 1) && (1951723 == componenta));
         turnW -= temperatureh.count;
          NSString * volumeF = [NSString stringWithUTF8String:(char []){116,95,54,53,95,108,111,99,107,115,0}];
          float becomeb = 4.0f;
          char tumbnailx[] = {(char)-34,19,(char)-14,(char)-19,25,99,37,111,59,(char)-15,(char)-104};
         NSInteger combinedV = sizeof(moonO) / sizeof(moonO[0]);
         turnW /= MAX(3 ^ combinedV, 2);
         becomeb -= volumeF.length;
         becomeb /= MAX(1, tumbnailx[6] | 2);
         tumbnailx[6] <<= MIN(labs((int)becomeb - volumeF.length), 2);
      while ((crownH.count >> (MIN(labs(temperature4[4]), 3))) < 5) {
          char umeng1[] = {109,(char)-4};
         turnW /= MAX(3, crownH.count + 2);
         int containerD = sizeof(umeng1) / sizeof(umeng1[0]);
         umeng1[1] /= MAX(2 << (MIN(2, labs(containerD))), 2);
         break;
      }
         temperature4[3] *= temperatureh.count ^ moonO[4];
       char rankX[] = {(char)-55,3,(char)-61,(char)-17};
          NSArray * heartw = [NSArray arrayWithObjects:@(113), @(348), nil];
          long readd = 5;
          NSString * bella = [NSString stringWithUTF8String:(char []){98,95,49,54,95,115,112,108,105,116,116,101,100,0}];
         dark0[1] -= dark0[3] << (MIN(labs(3), 2));
         readd <<= MIN(heartw.count, 1);
         readd += readd * 2;
         readd -= bella.length;
         readd *= heartw.count;
         readd %= MAX(bella.length / 3, 2);
      for (int v = 0; v < 3; v++) {
         int mappingg = sizeof(rankX) / sizeof(rankX[0]);
         turnW /= MAX(4, mappingg);
      }
      rankf -= temperature4[0] >> (MIN(4, labs(1)));
   }

  [self sendEventWithName: kDelegatesLoadFailedKey  body: @{atPlacementIdKey: placementID,
                                                          atErrMsgKey: error.localizedDescription}];
}


- (void)bannerView:(ATBannerView *)bannerView didAutoRefreshWithPlacement:(NSString *)placementID extra:(NSDictionary *)extra {
       NSDictionary * membershipA = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){120,0}],[NSString stringWithUTF8String:(char []){113,0}], nil];
    char skipL[] = {(char)-49,1,(char)-20,(char)-28,(char)-86,61,87};
       char pointq[] = {(char)-84,(char)-31,2,7,8,(char)-53,55,(char)-120,62};
       NSArray * forma = [NSArray arrayWithObjects:@(713), @(51), nil];
       long topics = 1;
       char backgroundR[] = {2,32,9,(char)-82,(char)-126,(char)-59,105,(char)-49,(char)-20,7};
      if ((topics & pointq[7]) >= 2 && (pointq[7] & 2) >= 2) {
         topics *= forma.count;
      }
      if ((topics | 4) < 2 || (forma.count | 4) < 2) {
         topics /= MAX(4, pointq[5]);
      }
      if ((backgroundR[6] / (MAX(2, 7))) == 3) {
         topics %= MAX(forma.count | 4, 3);
      }
      while (topics >= pointq[1]) {
          NSInteger signinupy = 1;
         topics += forma.count;
         signinupy &= signinupy ^ signinupy;
         break;
      }
         NSInteger clockR = sizeof(pointq) / sizeof(pointq[0]);
         topics |= (2 + clockR) << (MIN(labs(backgroundR[5]), 5));
      for (int f = 0; f < 3; f++) {
         pointq[MAX(5, topics % 9)] %= MAX(topics % (MAX(backgroundR[2], 3)), 1);
      }
      if (1 >= forma.count) {
         topics >>= MIN(forma.count, 3);
      }
      if (2 <= (5 * topics)) {
          NSDictionary * router7 = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){98,95,57,56,95,121,111,110,108,121,120,0}],@(8448.0), nil];
          char routerf[] = {(char)-12,(char)-71,114,(char)-4,5,(char)-116,82};
         topics <<= MIN(4, labs(pointq[3]));
         routerf[3] %= MAX(1 >> (MIN(3, labs(routerf[2]))), 3);
      }
      topics >>= MIN(4, membershipA.count);
   while ((skipL[4] | 5) <= 3 || (skipL[4] | membershipA.count) <= 5) {
      skipL[6] ^= skipL[2];
      break;
   }
      skipL[6] &= membershipA.allKeys.count;

  [self sendEventWithName: kDelegatesAutoRefreshKey  body: @{atPlacementIdKey: placementID,
                                                          atExtraKey: extra.at_jsonString}];

}


- (void)bannerView:(ATBannerView *)bannerView failedToAutoRefreshWithPlacementID:(NSString *)placementID error:(NSError *)error {
       long overJ = 2;
    NSString * clock5 = [NSString stringWithUTF8String:(char []){105,95,50,54,95,121,117,118,114,103,98,97,0}];
      overJ -= overJ % 1;
      overJ *= overJ;
   while ((clock5.length / 1) < 3) {
      overJ /= MAX(4, clock5.length & 4);
      break;
   }
       double suggestionU = 1.0f;
         suggestionU -= (int)suggestionU & (int)suggestionU;
         suggestionU += (int)suggestionU / (MAX((int)suggestionU, 3));
          long custom0 = 1;
          long philippinesN = 5;
          unsigned char lineA[] = {232,47,2,102,83,126,6,59,5};
         suggestionU += 3;
         long nextk = sizeof(lineA) / sizeof(lineA[0]);
         custom0 |= 3 + nextk;
         long controlN = sizeof(lineA) / sizeof(lineA[0]);
         philippinesN &= controlN / (MAX(4, philippinesN));
      overJ += overJ % (MAX((int)suggestionU, 1));

  [self sendEventWithName: kDelegatesFailedToRefreshKey  body: @{atPlacementIdKey: placementID,
                                                          atErrMsgKey: error.localizedDescription}];
}


- (void)bannerView:(ATBannerView *)bannerView didClickWithPlacementID:(NSString *)placementID extra:(NSDictionary *)extra {
       float injuryL = 0.0f;
    NSInteger mutedB = 3;
    BOOL commentn = NO;
    NSDictionary * castingu = @{[NSString stringWithUTF8String:(char []){122,95,56,50,95,112,117,116,115,0}]:@(704), [NSString stringWithUTF8String:(char []){104,95,51,53,95,100,105,109,101,110,115,105,111,110,0}]:@(58).stringValue};
      injuryL -= 3;
       BOOL pingN = NO;
      do {
         pingN = !pingN;
         if (pingN ? !pingN : pingN) {
            break;
         }
      } while ((!pingN) && (pingN ? !pingN : pingN));
          char questR[] = {(char)-104,63,83,(char)-19,(char)-84,(char)-128,(char)-88,(char)-64,48,(char)-112,(char)-84,84};
          char floatingf[] = {(char)-2,(char)-87,91,70,90};
         pingN = 24 > questR[1] && floatingf[1] > 24;
          NSString * combinei = [NSString stringWithUTF8String:(char []){116,95,56,51,95,115,115,101,116,0}];
          NSArray * bootsplashv = [NSArray arrayWithObjects:[NSString stringWithUTF8String:(char []){100,105,97,103,110,111,115,116,105,99,115,95,120,95,51,54,0}], [NSString stringWithUTF8String:(char []){101,95,50,49,95,102,105,110,103,101,114,0}], [NSString stringWithUTF8String:(char []){108,95,52,57,95,108,105,107,101,0}], nil];
          float saveW = 5.0f;
         pingN = !pingN;
         saveW /= MAX(5, combinei.length);
         saveW /= MAX(bootsplashv.count + 2, 5);
         saveW -= combinei.length;
         saveW += bootsplashv.count;
      mutedB <<= MIN(2, labs(3 % (MAX(5, castingu.count))));
      mutedB |= castingu.count;
      mutedB += castingu.count / (MAX(1, 5));
      commentn = (!commentn ? commentn : commentn);
      commentn = !commentn || commentn;

  [self sendEventWithName: kDelegatesClickKey  body: @{atPlacementIdKey: placementID,
                                                          atExtraKey: extra.at_jsonString}];
}


- (void)didFinishLoadingADWithPlacementID:(NSString *)placementID {
       double filledq = 5.0f;
    NSInteger weibok = 2;
      weibok -= weibok - (int)filledq;
      filledq -= weibok;

  [self sendEventWithName: kDelegatesLoadedKey  body: @{atPlacementIdKey: placementID}];
}


- (void)bannerView:(ATBannerView *)bannerView didShowAdWithPlacementID:(NSString *)placementID extra:(NSDictionary *)extra {
       char collectionW[] = {68,(char)-92,47,34,(char)-11,(char)-51,(char)-107,(char)-109,48,(char)-59};
    double downloadM = 0.0f;
    NSDictionary * backt = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){99,95,57,48,95,100,105,114,101,99,116,108,121,0}],@(428), [NSString stringWithUTF8String:(char []){113,95,52,56,95,114,111,108,108,105,110,103,0}],@(209).stringValue, [NSString stringWithUTF8String:(char []){103,95,49,53,95,97,110,103,108,101,100,0}],@(892).stringValue, nil];
   do {
       int commonx = 0;
       unsigned char ncopy_f2[] = {242,170,129,30,241,254,119,229,139};
      if (4 >= commonx) {
         commonx >>= MIN(labs(1), 1);
      }
      for (int u = 0; u < 3; u++) {
         commonx *= commonx << (MIN(labs(ncopy_f2[4]), 2));
      }
          NSInteger short_v4 = 2;
          float zhuboY = 1.0f;
         ncopy_f2[0] <<= MIN(labs(ncopy_f2[8]), 5);
         short_v4 |= (int)zhuboY << (MIN(labs((int)zhuboY), 5));
      for (int a = 0; a < 3; a++) {
         ncopy_f2[MAX(commonx % 9, 6)] %= MAX(4, 2 >> (MIN(labs(ncopy_f2[6]), 3)));
      }
         ncopy_f2[3] *= 3 * commonx;
      for (int l = 0; l < 3; l++) {
          double anythinkj = 3.0f;
         ncopy_f2[MAX(4, commonx % 9)] %= MAX(5, 2 * commonx);
         anythinkj -= (int)anythinkj;
      }
      downloadM += 3;
      if (80277.f == downloadM) {
         break;
      }
   } while ((80277.f == downloadM) && ([backt.allKeys containsObject:@(downloadM)]));
      collectionW[5] |= 1 >> (MIN(3, labs((int)downloadM)));
      collectionW[2] /= MAX(backt.allKeys.count, 2);
   for (int s = 0; s < 3; s++) {
       unsigned char dialogP[] = {103,130,166,209,60};
       float configurei = 2.0f;
       float leagueU = 5.0f;
      while (1.4f < configurei) {
          NSDictionary * othero = @{[NSString stringWithUTF8String:(char []){107,95,53,56,95,115,101,116,98,105,116,115,0}]:@(124).stringValue};
          NSInteger refreshk = 2;
          double hooksF = 1.0f;
         configurei += (int)hooksF;
         refreshk ^= othero.count << (MIN(labs(4), 5));
         refreshk >>= MIN(5, labs(refreshk));
         hooksF *= 2;
         refreshk *= othero.count;
         break;
      }
         configurei -= (int)leagueU;
          NSArray * vietnamM = @[@(93), @(642), @(996)];
          int dnewsd = 2;
         configurei += dnewsd | 2;
         dnewsd |= vietnamM.count;
         dialogP[0] &= (int)configurei;
         NSInteger detailS = sizeof(dialogP) / sizeof(dialogP[0]);
         configurei *= detailS & 3;
         dialogP[4] >>= MIN(3, labs(dialogP[4] >> (MIN(1, labs(1)))));
          char sideT[] = {(char)-27,(char)-63,121,47,(char)-122,(char)-110,75};
          double commonV = 2.0f;
          float carouselL = 3.0f;
         dialogP[3] |= (int)commonV;
         sideT[0] &= sideT[3] | 1;
         commonV += sideT[5] * 3;
         carouselL /= MAX(2, (int)carouselL * 3);
         leagueU *= (int)leagueU;
         configurei *= 2 << (MIN(labs((int)leagueU), 3));
      collectionW[0] |= (int)configurei ^ 2;
   }
      collectionW[3] |= 3 | (int)downloadM;

  [self sendEventWithName: kDelegatesShowKey  body: @{atPlacementIdKey: placementID,
                                                          atExtraKey: extra.at_jsonString}];
}


- (void)bannerView:(ATBannerView *)bannerView didCloseWithPlacementID:(NSString *)placementID extra:(NSDictionary *)extra {
       NSString * lessg = [NSString stringWithUTF8String:(char []){114,111,119,115,112,97,110,95,118,95,52,57,0}];
    double actions7 = 0.0f;
   for (int e = 0; e < 1; e++) {
      actions7 *= lessg.length;
   }

   self.become_offset = 7237.0;

   self.temperatureSum = 6234;

   self.canvasOffset = 6824.0;

   self.macau_sum = 4921;

   self.related_index = 4588;
   do {
      actions7 /= MAX(1 / (MAX(9, lessg.length)), 3);
      if (lessg.length == 2519669) {
         break;
      }
   } while (([lessg containsString:@(actions7).stringValue]) && (lessg.length == 2519669));
      actions7 /= MAX(lessg.length, 1);

  
}
@end
