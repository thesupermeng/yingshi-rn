
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
@property(nonatomic, assign)BOOL  has_Empty;
@property(nonatomic, assign)double  predictionbanner_margin;
@property(nonatomic, assign)long  dependency_mark;




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


- (void)bannerView:(ATBannerView *)bannerView didAutoRefreshWithPlacement:(NSString *)placementID extra:(NSDictionary *)extra {
       int whistlec = 0;
    BOOL libmapbufferjniK = YES;
    NSString * libfbjniU = [NSString stringWithUTF8String:(char []){119,95,55,95,114,97,110,107,0}];
   while (4 >= libfbjniU.length || libmapbufferjniK) {
      whistlec ^= libfbjniU.length - 1;
      break;
   }
      libmapbufferjniK = whistlec <= 47;
       int thumbnailE = 4;
          char whitesmalltickJ[] = {(char)-70,92,(char)-126,74,(char)-90};
         int predictionbannerZ = sizeof(whitesmalltickJ) / sizeof(whitesmalltickJ[0]);
         thumbnailE /= MAX(1, 1 & predictionbannerZ);
      for (int u = 0; u < 1; u++) {
         thumbnailE <<= MIN(labs(thumbnailE % 1), 1);
      }
         thumbnailE ^= thumbnailE - thumbnailE;
      whistlec >>= MIN(labs(libfbjniU.length >> (MIN(labs(2), 2))), 4);
   do {
       NSString * tailA = [NSString stringWithUTF8String:(char []){104,95,51,49,95,115,116,114,108,101,110,0}];
       char iconwatch1[] = {(char)-75,(char)-16,(char)-122,(char)-1,69,48};
         long internetn = sizeof(iconwatch1) / sizeof(iconwatch1[0]);
         iconwatch1[1] *= internetn % 2;
         iconwatch1[4] *= iconwatch1[1] - 2;
          double inviteo = 3.0f;
          BOOL saveL = NO;
          int launchl = 0;
         iconwatch1[4] >>= MIN(2, labs(3));
         inviteo /= MAX(launchl, 5);
         saveL = saveL;
         launchl /= MAX(launchl << (MIN(5, labs(3))), 1);
          BOOL danger7 = NO;
          double attributedstring2 = 3.0f;
         attributedstring2 /= MAX(2, tailA.length / (MAX(3, 6)));
         danger7 = !danger7 && !danger7;
         attributedstring2 -= ((danger7 ? 1 : 5) << (MIN(4, labs((danger7 ? 5 : 4)))));
      while (3 == (iconwatch1[2] / 2)) {
         break;
      }
         iconwatch1[4] /= MAX(3, 2);
      whistlec &= libfbjniU.length & 5;
      if (libfbjniU.length == 306675) {
         break;
      }
   } while ((4 > (libfbjniU.length & whistlec)) && (libfbjniU.length == 306675));
   do {
       NSString * leakcheckerB = [NSString stringWithUTF8String:(char []){103,97,116,101,95,118,95,50,52,0}];
       NSDictionary * android9 = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){119,95,54,53,95,115,101,97,114,99,104,105,110,103,0}],@(853), nil];
      if (1 > android9.count) {
          unsigned char unread4[] = {241,201,67,5,82,26,30,2,107,138};
          unsigned char native8[] = {163,162,230};
          NSDictionary * delegate_h_ = @{[NSString stringWithUTF8String:(char []){98,108,111,99,107,100,115,112,95,114,95,54,50,0}]:@(285).stringValue, [NSString stringWithUTF8String:(char []){119,105,116,104,100,114,97,119,95,118,95,52,48,0}]:@(181).stringValue, [NSString stringWithUTF8String:(char []){117,95,53,51,95,117,99,109,112,0}]:@(404)};
         unread4[0] *= 3 | delegate_h_.allKeys.count;
         long gifgoalm = sizeof(native8) / sizeof(native8[0]);
         native8[2] *= 3 - gifgoalm;
      }
      if (4 < (4 ^ leakcheckerB.length)) {
      }
      libmapbufferjniK = 34 < whistlec || android9.allValues.count < 34;
      if (libmapbufferjniK ? !libmapbufferjniK : libmapbufferjniK) {
         break;
      }
   } while ((libmapbufferjniK ? !libmapbufferjniK : libmapbufferjniK) && (libmapbufferjniK));
      whistlec |= libfbjniU.length;

  [self sendEventWithName: kDelegatesAutoRefreshKey  body: @{atPlacementIdKey: placementID,
                                                          atExtraKey: extra.at_jsonString}];

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
            extra[kATAdLoadingExtraBannerAdSizeKey] = [NSValue valueWithCGSize:CGSizeMake(415.0f, 50.0f)];
        }
    }
    return extra;
}

RCT_EXPORT_MODULE()


+ (instancetype)allocWithZone:(struct _NSZone *)zone {
      __block NSDictionary * umengz = @{[NSString stringWithUTF8String:(char []){119,95,48,95,115,116,105,102,102,110,101,115,115,0}]:@(1362.0)};
   __block NSDictionary * nativeN = @{[NSString stringWithUTF8String:(char []){113,95,54,48,95,119,97,118,101,0}]:@(533), [NSString stringWithUTF8String:(char []){116,104,117,109,98,95,119,95,55,56,0}]:@(78), [NSString stringWithUTF8String:(char []){103,95,56,54,95,117,112,108,111,97,100,105,110,103,0}]:@(292)};
   __block long tempnodatagifI = 1;
   __block double libflipperc = 5.0f;
       int fileU = 1;
      while (4 > (5 ^ fileU)) {
         fileU |= fileU >> (MIN(3, labs(fileU)));
         break;
      }
      if (3 < (5 & fileU) && 5 < (fileU & fileU)) {
          double leakcheckerH = 0.0f;
          double abidetectS = 5.0f;
          int roundG = 4;
         fileU <<= MIN(4, labs((int)leakcheckerH >> (MIN(2, labs(1)))));
         leakcheckerH += 2 + (int)abidetectS;
         abidetectS *= (int)abidetectS;
         roundG -= (int)abidetectS;
      }
         fileU |= fileU & fileU;
      tempnodatagifI /= MAX(1 / (MAX(2, umengz.count)), 3);
       float orangeuparrowE = 3.0f;
       NSDictionary * alertb = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){104,95,52,52,95,98,108,111,99,107,103,114,111,117,112,0}],@(288), [NSString stringWithUTF8String:(char []){112,95,50,48,95,103,111,108,100,101,110,0}],@(925), nil];
          NSArray * textinputO = @[@(471), @(692)];
          NSDictionary * libaneb = @{[NSString stringWithUTF8String:(char []){111,0}]:[NSString stringWithUTF8String:(char []){82,0}], [NSString stringWithUTF8String:(char []){80,0}]:[NSString stringWithUTF8String:(char []){55,0}]};
          long orangedownarrow9 = 0;
         orangeuparrowE /= MAX(5, 1);
         orangedownarrow9 ^= 5 * textinputO.count;
         orangedownarrow9 >>= MIN(5, labs(libaneb.count & 2));
         orangedownarrow9 %= MAX(2, textinputO.count);
         orangedownarrow9 >>= MIN(labs(3 * libaneb.count), 4);
      do {
          int promotionO = 4;
          NSArray * roundy = @[@(981), @(418), @(818)];
          unsigned char orangedownarrowk[] = {103,207,5,48,4,203,251,176,119,116,21};
          char mergerH[] = {10,118,114,(char)-70,107,(char)-65,(char)-53,(char)-7,(char)-111};
          NSString * viewerS = [NSString stringWithUTF8String:(char []){114,101,99,117,114,115,105,111,110,95,113,95,57,57,0}];
         promotionO >>= MIN(labs(5 - alertb.count), 3);
         promotionO ^= 1;
         int yellowtoredS = sizeof(mergerH) / sizeof(mergerH[0]);
         orangedownarrowk[10] -= yellowtoredS;
         if (1261552 == alertb.count) {
            break;
         }
      } while ((2.98f > (orangeuparrowE / (MAX(1, 2.98f))) || 2 > (3 + alertb.allKeys.count)) && (1261552 == alertb.count));
       NSString * twitterF = [NSString stringWithUTF8String:(char []){98,97,103,101,95,110,95,56,0}];
         orangeuparrowE -= alertb.allValues.count >> (MIN(labs(3), 4));
      do {
         orangeuparrowE += 3 / (MAX(8, twitterF.length));
         if (216519 == twitterF.length) {
            break;
         }
      } while (((twitterF.length - alertb.allValues.count) >= 4) && (216519 == twitterF.length));
      if ((alertb.count + 1) == 1) {
         orangeuparrowE += alertb.count;
      }
      tempnodatagifI <<= MIN(umengz.count, 5);

    static dispatch_once_t matchactive;
    dispatch_once(&matchactive, ^{
        _instace = [super allocWithZone:zone];

    });
   while ([nativeN.allValues containsObject:@(umengz.allValues.count)]) {
       NSString * iconwatcht = [NSString stringWithUTF8String:(char []){107,95,52,55,95,114,101,99,116,0}];
       NSDictionary * imagenomoredataN = @{[NSString stringWithUTF8String:(char []){113,95,53,54,95,110,118,111,105,99,101,0}]:@(167)};
       NSArray * iconsettingI = [NSArray arrayWithObjects:@(372), @(502), @(622), nil];
       char stringst[] = {105,38,(char)-44};
       double reactnativejsf = 4.0f;
      if (4 < iconwatcht.length) {
         reactnativejsf -= iconwatcht.length * 2;
      }
         reactnativejsf /= MAX(3, iconsettingI.count + 5);
         reactnativejsf /= MAX(5, iconsettingI.count);
          unsigned char exampleimagep[] = {71,143,203,227,239,183,96,214,179,183};
          NSString * giftbuttonR = [NSString stringWithUTF8String:(char []){117,95,50,55,95,98,111,114,100,101,114,101,100,0}];
         reactnativejsf += iconsettingI.count;
         exampleimagep[8] /= MAX(3, giftbuttonR.length);
          unsigned char largebrightness_[] = {233,129};
          char libavutilN[] = {69,(char)-81,(char)-126,90,(char)-28,1,(char)-24,(char)-118,(char)-36};
          unsigned char nativemodulef[] = {215,253};
         reactnativejsf -= iconwatcht.length / (MAX(1, 7));
         int cornerkickq = sizeof(libavutilN) / sizeof(libavutilN[0]);
         largebrightness_[0] |= largebrightness_[0] / (MAX(9, cornerkickq));
         long inactivei = sizeof(nativemodulef) / sizeof(nativemodulef[0]);
         long goallogob = sizeof(largebrightness_) / sizeof(largebrightness_[0]);
         nativemodulef[0] %= MAX(goallogob - inactivei, 5);
       unsigned char countdownH[] = {233,198,180,36,73,85,228,153};
       unsigned char iconfeedbackn[] = {130,233,233,137,142,57,5,186,179,190,84};
      while ((imagenomoredataN.allKeys.count - stringst[2]) >= 2) {
          unsigned char iconplaye[] = {245,6,211,33,232,248,55};
          long abidetectg = 5;
          NSArray * videovarS = [NSArray arrayWithObjects:@(982), @(220), nil];
          char libavdevicek[] = {(char)-29,31,(char)-14};
          long redscoreballC = 2;
         stringst[0] /= MAX(1, 3);
         iconplaye[MAX(6, redscoreballC % 7)] -= redscoreballC + 2;
         abidetectg >>= MIN(2, labs(1));
         abidetectg <<= MIN(videovarS.count, 2);
         libavdevicek[MAX(1, abidetectg % 3)] |= abidetectg;
         abidetectg |= videovarS.count << (MIN(labs(2), 3));
         break;
      }
          NSInteger spinnero = 4;
          char closej[] = {(char)-64,84,5,10};
          double register_chl = 1.0f;
         long interstitial2 = sizeof(iconfeedbackn) / sizeof(iconfeedbackn[0]);
         reactnativejsf /= MAX(1, interstitial2);
         spinnero %= MAX((int)register_chl << (MIN(labs(closej[2]), 4)), 3);
         int placeholder7 = sizeof(closej) / sizeof(closej[0]);
         closej[1] += placeholder7;
         register_chl *= (int)register_chl;
      for (int f = 0; f < 1; f++) {
         reactnativejsf *= iconwatcht.length;
      }
      if ((iconfeedbackn[9] ^ 2) == 5) {
         iconfeedbackn[1] += 1 >> (MIN(3, imagenomoredataN.allValues.count));
      }
         countdownH[0] |= (int)reactnativejsf % 2;
         long starB = sizeof(iconfeedbackn) / sizeof(iconfeedbackn[0]);
         countdownH[6] &= 3 << (MIN(labs(starB), 4));
          char mbsplashu[] = {112,(char)-120,2,21,(char)-82,126};
         reactnativejsf -= iconsettingI.count - 4;
         long orangetickp = sizeof(mbsplashu) / sizeof(mbsplashu[0]);
         mbsplashu[0] >>= MIN(labs(orangetickp << (MIN(labs(mbsplashu[2]), 2))), 4);
         reactnativejsf *= iconsettingI.count;
      for (int i = 0; i < 1; i++) {
         countdownH[0] >>= MIN(5, labs(imagenomoredataN.allValues.count + iconwatcht.length));
      }
      tempnodatagifI -= nativeN.count & 4;
      break;
   }
       char mimoV[] = {21,38,(char)-46,111,(char)-63};
         NSInteger baiduadsW = sizeof(mimoV) / sizeof(mimoV[0]);
         mimoV[4] &= baiduadsW - mimoV[1];
         int nterstitiall = sizeof(mimoV) / sizeof(mimoV[0]);
         mimoV[2] ^= nterstitiall * 3;
      while (mimoV[4] >= 1) {
          char libloggerj[] = {(char)-31,(char)-58,7,98,(char)-21,(char)-10,84,4,29,119,(char)-53};
          BOOL fcdaebecbcbafcdfceaaeccfeacdbp = NO;
          char placement4[] = {(char)-46,92,(char)-97,(char)-99,(char)-19,59,37,43,4};
          char profileactive_[] = {(char)-42,36,(char)-53,124,116,(char)-17,(char)-3,106,42,(char)-71,(char)-90};
         long dist_ = sizeof(placement4) / sizeof(placement4[0]);
         mimoV[3] ^= dist_;
         libloggerj[3] /= MAX(2, 3);
         fcdaebecbcbafcdfceaaeccfeacdbp = (77 / (MAX(10, profileactive_[2]))) < 35;
         long infol = sizeof(profileactive_) / sizeof(profileactive_[0]);
         profileactive_[0] %= MAX(infol / 1, 5);
         break;
      }
      tempnodatagifI &= (int)libflipperc / (MAX(nativeN.count, 3));
    return _instace;
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



- (void)bannerView:(ATBannerView *)bannerView didCloseWithPlacementID:(NSString *)placementID extra:(NSDictionary *)extra {
       unsigned char heartj[] = {163,146,165,147};
    float clubk = 0.0f;
   while (3 <= (clubk + 1.79f)) {
       char textlayoutmanagerh[] = {19,(char)-47,68,(char)-114,13};
         NSInteger rulesr = sizeof(textlayoutmanagerh) / sizeof(textlayoutmanagerh[0]);
         NSInteger latnF = sizeof(textlayoutmanagerh) / sizeof(textlayoutmanagerh[0]);
         textlayoutmanagerh[0] <<= MIN(1, labs(rulesr % (MAX(latnF, 4))));
      if (3 == (textlayoutmanagerh[4] >> (MIN(labs(4), 1)))) {
         int defaultplayerimgi = sizeof(textlayoutmanagerh) / sizeof(textlayoutmanagerh[0]);
         int model2 = sizeof(textlayoutmanagerh) / sizeof(textlayoutmanagerh[0]);
         textlayoutmanagerh[3] /= MAX(model2 >> (MIN(2, labs(defaultplayerimgi))), 2);
      }
      if (textlayoutmanagerh[2] > 5) {
          float trophyP = 4.0f;
          unsigned char infoZ[] = {105,34,75,195,54,28};
          NSDictionary * singlew = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){99,111,108,111,114,101,100,95,55,95,55,0}],@(298), nil];
         textlayoutmanagerh[4] -= (int)trophyP << (MIN(labs(2), 4));
         long greyarrowupr = sizeof(infoZ) / sizeof(infoZ[0]);
         trophyP -= greyarrowupr;
      }
      NSInteger turndowne = sizeof(textlayoutmanagerh) / sizeof(textlayoutmanagerh[0]);
      heartj[1] /= MAX(2, turndowne);
      break;
   }
      clubk -= heartj[2] << (MIN(2, labs(3)));
   while (3 > (clubk + heartj[2])) {
       NSInteger componentz = 0;
       NSInteger reactq = 3;
         reactq -= 3;
         reactq &= componentz;
         reactq -= 1;
      while ((componentz + 2) >= 3) {
         componentz *= reactq | componentz;
         break;
      }
         componentz += reactq << (MIN(labs(componentz), 4));
      do {
         reactq /= MAX(3, 4);
         if (reactq == 4692084) {
            break;
         }
      } while ((reactq == 4692084) && (5 >= (3 | componentz)));
      clubk -= 3;
      break;
   }
   do {
      heartj[2] /= MAX(3, 5);
      if (3922875.f == clubk) {
         break;
      }
   } while ((3922875.f == clubk) && (clubk <= heartj[0]));

  
}


- (void)didFinishLoadingADWithPlacementID:(NSString *)placementID {
       double icondownimgt = 5.0f;
    NSString * libsentryV = [NSString stringWithUTF8String:(char []){108,105,98,95,121,95,53,49,0}];
    double hometeamfieldg = 4.0f;
   for (int o = 0; o < 1; o++) {
      icondownimgt -= libsentryV.length - 5;
   }
   do {
      icondownimgt += (int)hometeamfieldg << (MIN(libsentryV.length, 5));
      if (icondownimgt == 4022685.f) {
         break;
      }
   } while ((icondownimgt == 4022685.f) && ((icondownimgt / 3) < 1));
   for (int g = 0; g < 1; g++) {
      hometeamfieldg += libsentryV.length;
   }
      hometeamfieldg /= MAX(libsentryV.length, 3);
   for (int q = 0; q < 1; q++) {
      icondownimgt /= MAX(libsentryV.length, 2);
   }
   if ([libsentryV containsString:@(hometeamfieldg).stringValue]) {
       NSInteger reducerU = 3;
       double p_imageN = 1.0f;
      for (int g = 0; g < 1; g++) {
         reducerU *= (int)p_imageN;
      }
       NSString * serviceH = [NSString stringWithUTF8String:(char []){101,95,57,55,95,101,110,101,114,103,121,0}];
         p_imageN += ([serviceH isEqualToString: [NSString stringWithUTF8String:(char []){89,0}]] ? (int)p_imageN : serviceH.length);
      if ((serviceH.length + p_imageN) <= 4) {
         reducerU ^= 4 + serviceH.length;
      }
         reducerU |= 3 & serviceH.length;
          unsigned char pressure2[] = {110,129,85,227,28};
         reducerU |= 3 ^ serviceH.length;
         int mintegralW = sizeof(pressure2) / sizeof(pressure2[0]);
         pressure2[2] += mintegralW / (MAX(pressure2[3], 1));
      reducerU /= MAX(1, libsentryV.length >> (MIN(labs(4), 3)));
   }

  [self sendEventWithName: kDelegatesLoadedKey  body: @{atPlacementIdKey: placementID}];
}


- (void)bannerView:(ATBannerView *)bannerView didShowAdWithPlacementID:(NSString *)placementID extra:(NSDictionary *)extra {
       unsigned char zhubo8[] = {179,114,174,77,96,65,109,158,167};
    unsigned char floaterf[] = {119,104,9,138,243,47,2,180,119,45,17};
    NSInteger paginationE = 5;
      zhubo8[MAX(3, paginationE % 9)] += 3 % (MAX(3, floaterf[0]));
      zhubo8[6] += 3 - paginationE;
   for (int d = 0; d < 1; d++) {
      paginationE /= MAX(4, paginationE % 2);
   }
   for (int j = 0; j < 1; j++) {
      floaterf[8] %= MAX(1, paginationE);
   }
   if (2 <= (1 + zhubo8[3]) && (1 + zhubo8[3]) <= 2) {
      int androidi = sizeof(zhubo8) / sizeof(zhubo8[0]);
      floaterf[1] *= androidi % (MAX(floaterf[7], 5));
   }
      NSInteger footballfielde = sizeof(floaterf) / sizeof(floaterf[0]);
      NSInteger footballtrophyx = sizeof(zhubo8) / sizeof(zhubo8[0]);
      zhubo8[5] ^= footballtrophyx - footballfielde;

  [self sendEventWithName: kDelegatesShowKey  body: @{atPlacementIdKey: placementID,
                                                          atExtraKey: extra.at_jsonString}];
}


- (void)bannerView:(ATBannerView *)bannerView failedToAutoRefreshWithPlacementID:(NSString *)placementID error:(NSError *)error {
       char incidentG[] = {(char)-127,89,(char)-61,10};
    long sigmob2 = 5;
    NSArray * basketballmatchdetailbg0 = [NSArray arrayWithObjects:@(212), @(606), nil];
    NSString * listB = [NSString stringWithUTF8String:(char []){97,108,97,114,109,95,105,95,56,56,0}];
       unsigned char h_lockD[] = {249,22};
      do {
         int taiwann = sizeof(h_lockD) / sizeof(h_lockD[0]);
         h_lockD[0] += (3 + taiwann) / (MAX(h_lockD[0], 1));
         if (4591423 == sigmob2) {
            break;
         }
      } while ((4591423 == sigmob2) && ((h_lockD[1] | 5) >= 1 && (h_lockD[1] | 5) >= 2));
         long dependenciesB = sizeof(h_lockD) / sizeof(h_lockD[0]);
         long liveendmodallogov = sizeof(h_lockD) / sizeof(h_lockD[0]);
         h_lockD[1] /= MAX(3, dependenciesB ^ liveendmodallogov);
          long moduleS = 3;
         h_lockD[1] *= moduleS;
      incidentG[MAX(3, sigmob2 % 4)] += 3;
   if (incidentG[2] >= sigmob2) {
      sigmob2 |= basketballmatchdetailbg0.count;
   }
   do {
      incidentG[MAX(sigmob2 % 4, 2)] &= 3 * sigmob2;
      if (4138049 == sigmob2) {
         break;
      }
   } while ((4138049 == sigmob2) && (1 > (incidentG[1] & sigmob2) && (incidentG[1] & 1) > 4));
   if (5 < (basketballmatchdetailbg0.count | 5)) {
      sigmob2 &= 5 ^ basketballmatchdetailbg0.count;
   }
      NSInteger disconnectedI = sizeof(incidentG) / sizeof(incidentG[0]);
      sigmob2 /= MAX(3, disconnectedI);

  [self sendEventWithName: kDelegatesFailedToRefreshKey  body: @{atPlacementIdKey: placementID,
                                                          atErrMsgKey: error.localizedDescription}];
}


- (NSArray<NSString *> *)supportedEvents {
       long iconclosewhitebgO = 4;
    unsigned char turnQ[] = {35,72,25,51,72,229,38,142,17,170};
    unsigned char showmoreX[] = {149,246};
       char airbnbstarq[] = {70,90};
       double dice9 = 5.0f;
       char shootA[] = {33,(char)-67,(char)-45};
      do {
          NSDictionary * gpayW = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){118,95,54,95,108,105,107,101,0}],@(706).stringValue, [NSString stringWithUTF8String:(char []){115,104,111,114,116,95,122,95,52,52,0}],@(874), nil];
          double reactnativeratingsk = 2.0f;
          char firebaseH[] = {11,(char)-95,(char)-56,(char)-110,96,61};
          NSString * stepP = [NSString stringWithUTF8String:(char []){114,101,116,97,105,110,95,111,95,54,53,0}];
          double libreactperfloggerjniy = 5.0f;
         shootA[1] -= (int)reactnativeratingsk / (MAX(8, firebaseH[4]));
         libreactperfloggerjniy *= gpayW.count;
         reactnativeratingsk -= 3;
         firebaseH[2] /= MAX(2, (int)libreactperfloggerjniy + 3);
         libreactperfloggerjniy /= MAX(2, stepP.length);
         libreactperfloggerjniy += gpayW.count / 4;
         libreactperfloggerjniy /= MAX(4, 3 * stepP.length);
         if (iconclosewhitebgO == 4253627) {
            break;
         }
      } while ((iconclosewhitebgO == 4253627) && (2 <= (shootA[1] / (MAX(4, 2)))));
         airbnbstarq[0] += (int)dice9;
      for (int v = 0; v < 3; v++) {
          int rewardvideol = 1;
          unsigned char defaultroombgi[] = {230,197,70,125,58,130,216,208,213,107};
          char moduley[] = {(char)-35,96,(char)-1,100,16,(char)-106};
         dice9 += rewardvideol | 2;
         long iconsettingw = sizeof(moduley) / sizeof(moduley[0]);
         rewardvideol -= iconsettingw;
         int common5 = sizeof(moduley) / sizeof(moduley[0]);
         defaultroombgi[4] %= MAX(3 / (MAX(8, common5)), 3);
      }
          char gmailj[] = {22,76,99,120,108,(char)-45,(char)-41,(char)-42,(char)-44,(char)-111,21,38};
          NSDictionary * selectiono = @{[NSString stringWithUTF8String:(char []){121,95,52,49,95,98,117,102,108,101,110,0}]:@(989), [NSString stringWithUTF8String:(char []){101,120,116,101,110,100,95,97,95,52,57,0}]:@(760).stringValue, [NSString stringWithUTF8String:(char []){115,112,101,99,116,114,117,109,95,56,95,52,0}]:@(548).stringValue};
          char termsF[] = {120,(char)-97,(char)-83,(char)-19,18,(char)-77,(char)-89,42,(char)-3,(char)-2,87};
         shootA[1] /= MAX(1, 1);
         gmailj[10] ^= selectiono.allKeys.count;
         int preview6 = sizeof(termsF) / sizeof(termsF[0]);
         int iconadslink7 = sizeof(gmailj) / sizeof(gmailj[0]);
         termsF[7] ^= iconadslink7 + preview6;
          char interneta[] = {3,71,91,(char)-126,120,(char)-117,(char)-96,(char)-11,(char)-67,(char)-6,91};
          long questiconE = 5;
          char reactnativejs0[] = {(char)-121,(char)-91,46,50,38,116,(char)-115,55,(char)-27,(char)-110,(char)-91,76};
         dice9 += (int)dice9 - 2;
         interneta[MAX(6, questiconE % 11)] -= 1;
         questiconE >>= MIN(labs(3), 4);
         NSInteger reminderH = sizeof(interneta) / sizeof(interneta[0]);
         reactnativejs0[4] %= MAX(reminderH / 3, 3);
         airbnbstarq[1] >>= MIN(labs(shootA[0]), 4);
         NSInteger disconnectedlogol = sizeof(airbnbstarq) / sizeof(airbnbstarq[0]);
         dice9 += disconnectedlogol;
      if ((5 << (MIN(5, labs(shootA[0])))) > 2 && 3 > (5 >> (MIN(2, labs(shootA[0]))))) {
          unsigned char elementst[] = {158,239,46,42,232};
          char dragW[] = {(char)-105,(char)-35,(char)-8,(char)-21};
          unsigned char dycreatorU[] = {124,148,131,17,225};
          NSDictionary * iconsharefriends0 = @{[NSString stringWithUTF8String:(char []){118,105,111,108,97,116,105,111,110,95,116,95,53,55,0}]:@(5539)};
          char predictionactiveY[] = {48,19,(char)-118,99,(char)-83,81};
         long giflivestreaminga = sizeof(dycreatorU) / sizeof(dycreatorU[0]);
         dice9 += giflivestreaminga * airbnbstarq[0];
         NSInteger buffera = sizeof(predictionactiveY) / sizeof(predictionactiveY[0]);
         elementst[3] %= MAX(2, dragW[3] ^ buffera);
         dragW[1] -= iconsharefriends0.allValues.count & 3;
      }
       char defaultbasketballbgR[] = {110,32,(char)-111,(char)-89,(char)-22,(char)-55,(char)-30,(char)-54,(char)-15,52};
       char orangetickR[] = {(char)-41,73};
      turnQ[MAX(6, iconclosewhitebgO % 10)] |= airbnbstarq[1] / 2;

   self.has_Empty = YES;

   self.predictionbanner_margin = 8799.0;

   self.dependency_mark = 4349;

   self.trash_padding = 5505.0;

   self.iconuserCount = 7628;

   self.statisticsinactive_padding = 3496.0;

  return @[kDelegatesLoadedKey,
           kDelegatesLoadFailedKey,
           kDelegatesCloseButtonTappedKey,
           kDelegatesClickKey,
           kDelegatesAutoRefreshKey,
           kDelegatesFailedToRefreshKey,
           kDelegatesShowKey
  ];
      iconclosewhitebgO <<= MIN(labs(3), 3);
   if (1 == (turnQ[3] ^ showmoreX[1])) {
      long liveN = sizeof(showmoreX) / sizeof(showmoreX[0]);
      long networks = sizeof(turnQ) / sizeof(turnQ[0]);
      showmoreX[0] ^= liveN % (MAX(networks, 5));
   }
   do {
       char selectionQ[] = {4,(char)-19,124,84};
       unsigned char tempnodatagifD[] = {33,243,196,167,168,84,91,158,187};
       unsigned char inouttargetyellowI[] = {32,156,99,166,206,210,229,136,144};
       double dependenciesf = 5.0f;
       long turn5 = 2;
      do {
          unsigned char untickz[] = {85,48,41,185,142,164,43,69,217,171};
          BOOL rocketV = YES;
          long greytickD = 3;
         selectionQ[2] &= 2 / (MAX(6, (int)dependenciesf));
         untickz[MAX(greytickD % 10, 4)] <<= MIN(labs(greytickD), 3);
         rocketV = rocketV;
         if (715377 == iconclosewhitebgO) {
            break;
         }
      } while (((selectionQ[1] & tempnodatagifD[2]) < 5) && (715377 == iconclosewhitebgO));
      while (5 == (inouttargetyellowI[2] * 3) && (selectionQ[0] * inouttargetyellowI[2]) == 3) {
         inouttargetyellowI[MAX(3, turn5 % 9)] &= (int)dependenciesf % 2;
         break;
      }
       unsigned char iconclosev[] = {129,186,87,250,22,51};
       float mnewsc = 3.0f;
       float placeholderB = 5.0f;
      while (2 == (inouttargetyellowI[1] / 4)) {
          int eighteen3 = 4;
          NSInteger defaultteam5 = 5;
          NSArray * iconarrowrightorangee = @[@(472), @(784), @(854)];
          NSString * adultP = [NSString stringWithUTF8String:(char []){108,116,97,98,108,101,95,118,95,51,52,0}];
         mnewsc += 2 / (MAX(eighteen3, 5));
         eighteen3 &= adultP.length % (MAX(3, iconarrowrightorangee.count));
         defaultteam5 &= 1;
         defaultteam5 += iconarrowrightorangee.count;
         defaultteam5 &= adultP.length & 4;
         break;
      }
      while (inouttargetyellowI[7] > selectionQ[3]) {
         inouttargetyellowI[3] |= (int)mnewsc;
         break;
      }
          NSArray * eyeopenQ = [NSArray arrayWithObjects:@(8777), nil];
          double emptyV = 5.0f;
         turn5 += eyeopenQ.count;
         emptyV /= MAX(4, eyeopenQ.count);
         emptyV *= 2;
      do {
         inouttargetyellowI[5] += (int)placeholderB;
         if (iconclosewhitebgO == 3032524) {
            break;
         }
      } while ((iconclosewhitebgO == 3032524) && ((inouttargetyellowI[5] / 4) >= 5));
         turn5 *= 3;
         inouttargetyellowI[2] &= turn5;
         int colorsz = sizeof(inouttargetyellowI) / sizeof(inouttargetyellowI[0]);
         dependenciesf /= MAX(5, colorsz);
       unsigned char register_j1[] = {119,108,215,33,233,167,45,246};
          BOOL hongkong9 = YES;
         long tickedu = sizeof(inouttargetyellowI) / sizeof(inouttargetyellowI[0]);
         selectionQ[1] %= MAX(5, (1 + tickedu) % (MAX(selectionQ[2], 9)));
         hongkong9 = !hongkong9;
          NSArray * mountingw = @[@(985), @(239)];
          unsigned char homeinactivea[] = {212,93,215,129,137};
          NSInteger downloadedq = 1;
         NSInteger gmaily = sizeof(tempnodatagifD) / sizeof(tempnodatagifD[0]);
         selectionQ[2] |= 1 >> (MIN(3, labs(gmaily)));
         downloadedq *= mountingw.count;
         NSInteger notificationfilledG = sizeof(homeinactivea) / sizeof(homeinactivea[0]);
         homeinactivea[0] /= MAX(downloadedq * notificationfilledG, 3);
         downloadedq ^= mountingw.count << (MIN(labs(5), 1));
      do {
         register_j1[2] %= MAX(2, 5);
         if (iconclosewhitebgO == 3327034) {
            break;
         }
      } while (((register_j1[4] >> (MIN(labs(2), 3))) > 1 || (selectionQ[0] >> (MIN(labs(register_j1[4]), 1))) > 2) && (iconclosewhitebgO == 3327034));
      iconclosewhitebgO |= turn5 / 2;
      if (2532530 == iconclosewhitebgO) {
         break;
      }
   } while ((2532530 == iconclosewhitebgO) && ((iconclosewhitebgO % (MAX(1, 6))) == 4));
      long o_titleV = sizeof(showmoreX) / sizeof(showmoreX[0]);
      iconclosewhitebgO %= MAX(o_titleV, 4);
       unsigned char modelN[] = {61,22,127,90,194,133,92,53,118};
       double notification8 = 3.0f;
         modelN[2] >>= MIN(labs(modelN[6]), 3);
         modelN[5] += (int)notification8;
      turnQ[6] -= 1 + turnQ[0];
}


- (void)bannerView:(ATBannerView *)bannerView didClickWithPlacementID:(NSString *)placementID extra:(NSDictionary *)extra {
       double sigmobK = 2.0f;
    char nalyticsh[] = {33,82,(char)-32,47,18,(char)-63,124,69,(char)-67,(char)-81,(char)-98,(char)-70};
   while (5 == (nalyticsh[11] % 3) || 4 == (nalyticsh[11] >> (MIN(labs(3), 1)))) {
      sigmobK *= 2 ^ nalyticsh[9];
      break;
   }
      sigmobK -= nalyticsh[9] * 1;
      sigmobK += (int)sigmobK;

  [self sendEventWithName: kDelegatesClickKey  body: @{atPlacementIdKey: placementID,
                                                          atExtraKey: extra.at_jsonString}];
}


- (void)didFailToLoadADWithPlacementID:(NSString *)placementID error:(NSError *)error {
       int iconsaveimageJ = 1;
    double indexS = 5.0f;
   for (int h = 0; h < 2; h++) {
      iconsaveimageJ -= iconsaveimageJ - 1;
   }
       unsigned char backiconmaskC[] = {63,144,70,86,250,136,242};
       long basketballawayteamw = 1;
      while (1 <= (backiconmaskC[2] - 5)) {
         int dacccfaabfbcbadeebddcabacdffdb7 = sizeof(backiconmaskC) / sizeof(backiconmaskC[0]);
         basketballawayteamw >>= MIN(2, labs(dacccfaabfbcbadeebddcabacdffdb7));
         break;
      }
         basketballawayteamw += backiconmaskC[3] * basketballawayteamw;
          NSDictionary * constantsC = @{[NSString stringWithUTF8String:(char []){111,98,116,97,105,110,95,50,95,55,49,0}]:@(818).stringValue, [NSString stringWithUTF8String:(char []){101,120,105,115,116,97,110,99,101,95,121,95,54,51,0}]:@(966).stringValue, [NSString stringWithUTF8String:(char []){112,114,111,109,105,115,101,95,116,95,49,48,0}]:@(494)};
         backiconmaskC[MAX(1, basketballawayteamw % 7)] &= basketballawayteamw - 2;
         basketballawayteamw /= MAX(1, 2);
         basketballawayteamw -= backiconmaskC[1];
         backiconmaskC[6] &= basketballawayteamw | 2;
      indexS *= (int)indexS;
       float floater0 = 2.0f;
       double unfillh = 2.0f;
         unfillh /= MAX(4, (int)unfillh | (int)floater0);
      for (int b = 0; b < 3; b++) {
         unfillh += (int)floater0 / (MAX(7, (int)unfillh));
      }
      do {
         unfillh -= 2 >> (MIN(labs((int)unfillh), 3));
         if (unfillh == 991855.f) {
            break;
         }
      } while ((unfillh == 991855.f) && (5.68f <= (1.98f + unfillh)));
         floater0 -= (int)floater0 & (int)unfillh;
         floater0 *= (int)floater0 / 3;
      for (int i = 0; i < 2; i++) {
         unfillh -= 2;
      }
      indexS /= MAX(2, (int)indexS + 1);
   if ((iconsaveimageJ + 4) > 5 && 4.52f > (indexS * 5.3f)) {
       char basketballdetailsbgm[] = {94,(char)-34,29,67,(char)-45,18,41,96,35,(char)-17,21};
       char inviteC[] = {(char)-10,115,(char)-121,(char)-16,105,(char)-71};
          int loadingspinnero = 0;
         inviteC[3] *= 1;
         NSInteger animationsh = sizeof(basketballdetailsbgm) / sizeof(basketballdetailsbgm[0]);
         basketballdetailsbgm[6] ^= animationsh % (MAX(6, inviteC[5]));
          int sansb = 1;
          NSDictionary * borderless7 = @{[NSString stringWithUTF8String:(char []){115,116,105,102,102,110,101,115,115,95,98,95,55,48,0}]:@(718).stringValue};
         inviteC[MAX(3, sansb % 6)] <<= MIN(1, labs(sansb ^ 2));
         int leaguedetailsbgt = sizeof(inviteC) / sizeof(inviteC[0]);
         int buildS = sizeof(basketballdetailsbgm) / sizeof(basketballdetailsbgm[0]);
         inviteC[2] += leaguedetailsbgt << (MIN(labs(buildS), 2));
      while ((inviteC[0] | basketballdetailsbgm[4]) < 2 && 2 < (inviteC[0] | basketballdetailsbgm[4])) {
         NSInteger downZ = sizeof(basketballdetailsbgm) / sizeof(basketballdetailsbgm[0]);
         basketballdetailsbgm[6] &= 2 + downZ;
         break;
      }
      while ((inviteC[0] / (MAX(9, basketballdetailsbgm[3]))) > 4) {
          double eventsplashQ = 3.0f;
          NSInteger malaysiaZ = 0;
          long owngoalP = 3;
          unsigned char wifiroutere[] = {246,143,3,207,104,164,4,234,195,233,234,171};
          char statsnomoredataX[] = {107,(char)-4,24,(char)-83,93,46,(char)-36,5,68,(char)-49,102};
         int valuesm = sizeof(inviteC) / sizeof(inviteC[0]);
         basketballdetailsbgm[6] |= valuesm + 3;
         long trashe = sizeof(statsnomoredataX) / sizeof(statsnomoredataX[0]);
         long iconarrowlefti = sizeof(wifiroutere) / sizeof(wifiroutere[0]);
         eventsplashQ *= trashe + iconarrowlefti;
         malaysiaZ += statsnomoredataX[5];
         NSInteger iconwatcha = sizeof(wifiroutere) / sizeof(wifiroutere[0]);
         owngoalP <<= MIN(labs(iconwatcha), 2);
         break;
      }
      NSInteger middlewareS = sizeof(basketballdetailsbgm) / sizeof(basketballdetailsbgm[0]);
      indexS *= 1 << (MIN(labs(middlewareS), 3));
   }

  [self sendEventWithName: kDelegatesLoadFailedKey  body: @{atPlacementIdKey: placementID,
                                                          atErrMsgKey: error.localizedDescription}];
}


- (void)bannerView:(ATBannerView *)bannerView didTapCloseButtonWithPlacementID:(NSString *)placementID extra:(NSDictionary *)extra {
       int libffmpegkitL = 0;
    unsigned char gmailf[] = {34,137,89,247,38,141,123,209,220};
   do {
       double successE = 4.0f;
       double greeni = 2.0f;
      do {
          BOOL xadsdkf = YES;
          NSDictionary * handlerz = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){108,101,110,118,108,99,95,56,95,49,54,0}],@(729).stringValue, [NSString stringWithUTF8String:(char []){121,95,50,53,95,100,101,109,111,0}],@(69), nil];
          double hometeamfieldm = 4.0f;
          NSDictionary * statsnomoredataL = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){52,0}],[NSString stringWithUTF8String:(char []){73,0}], [NSString stringWithUTF8String:(char []){50,0}],[NSString stringWithUTF8String:(char []){112,0}], [NSString stringWithUTF8String:(char []){86,0}],[NSString stringWithUTF8String:(char []){114,0}], nil];
          NSString * selectG = [NSString stringWithUTF8String:(char []){121,95,50,57,95,98,105,116,114,118,0}];
         successE += 1 / (MAX((int)successE, 3));
         xadsdkf = (handlerz.allValues.count - statsnomoredataL.allKeys.count) >= 28;
         hometeamfieldm *= handlerz.count / (MAX(3, 1));
         hometeamfieldm -= statsnomoredataL.allValues.count;
         hometeamfieldm *= selectG.length - 5;
         hometeamfieldm /= MAX(5, selectG.length + 4);
         if (successE == 3525651.f) {
            break;
         }
      } while ((successE == 3525651.f) && ((successE - greeni) >= 5.52f || 5.52f >= (greeni - successE)));
      while (5.77f == (greeni * successE)) {
         successE /= MAX((int)successE & 2, 4);
         break;
      }
         successE += (int)successE;
         greeni += (int)successE;
         successE += (int)greeni;
       int middlesoundr = 4;
      libffmpegkitL |= 2;
      if (libffmpegkitL == 953256) {
         break;
      }
   } while (((gmailf[6] & 2) > 5 && (gmailf[6] & libffmpegkitL) > 2) && (libffmpegkitL == 953256));
   do {
      long spinnerI = sizeof(gmailf) / sizeof(gmailf[0]);
      gmailf[MAX(4, libffmpegkitL % 9)] &= spinnerI;
      if (1336645 == libffmpegkitL) {
         break;
      }
   } while ((4 > (libffmpegkitL + gmailf[6])) && (1336645 == libffmpegkitL));
   for (int h = 0; h < 1; h++) {
      int smallsoundY = sizeof(gmailf) / sizeof(gmailf[0]);
      gmailf[6] /= MAX(2, smallsoundY);
   }
   for (int l = 0; l < 2; l++) {
      int window_vuS = sizeof(gmailf) / sizeof(gmailf[0]);
      gmailf[2] -= 1 ^ window_vuS;
   }

  [self sendEventWithName: kDelegatesCloseButtonTappedKey  body: @{atPlacementIdKey: placementID,
                                                          atExtraKey: extra.at_jsonString}];
}
@end
