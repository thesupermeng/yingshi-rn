
#import "yysTrophyUnread.h"
#import <AnyThinkBanner/AnyThinkBanner.h>
#import "yysLineTeam.h"
#import "yysLibavfilter.h"
#import "yysLibavfilter.h"



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
@property(nonatomic, assign)long  libtobMark;
@property(nonatomic, assign)long  commonFlag;
@property(nonatomic, assign)double  ping_padding;
@property(nonatomic, copy)NSString *  benefitGemfile_string;




@property(nonatomic, strong) NSMutableDictionary<NSString*, UIView*>* minimizeIconorientation;

@end

@implementation ATBannerRNSDK

static id _instace;

+(instancetype) instantiateScreenScrollFailureCommonMintegral {
    static dispatch_once_t onceToken;
    dispatch_once(&onceToken, ^{
      _instace = [[super alloc] init];
    });
    return _instace;
}


- (void)bannerView:(ATBannerView *)bannerView didCloseWithPlacementID:(NSString *)placementID extra:(NSDictionary *)extra {
       unsigned char round8[] = {214,120,120,73,30,45,244,179};
    int ccdfbdabcabbbedbo = 2;
    NSInteger classesE = 5;
   while (1 > (4 >> (MIN(3, labs(ccdfbdabcabbbedbo)))) || (classesE >> (MIN(labs(ccdfbdabcabbbedbo), 1))) > 4) {
      ccdfbdabcabbbedbo -= classesE;
      break;
   }
      long downloadedt = sizeof(round8) / sizeof(round8[0]);
      ccdfbdabcabbbedbo <<= MIN(4, labs(classesE | downloadedt));
   for (int c = 0; c < 3; c++) {
      ccdfbdabcabbbedbo -= ccdfbdabcabbbedbo * classesE;
   }
   do {
       double stationu = 4.0f;
       unsigned char downloadings[] = {154,216,149,104,208};
       int embeda = 3;
       NSDictionary * privacyA = @{[NSString stringWithUTF8String:(char []){101,0}]:[NSString stringWithUTF8String:(char []){101,0}], [NSString stringWithUTF8String:(char []){71,0}]:[NSString stringWithUTF8String:(char []){88,0}]};
          NSInteger mimev = 2;
          double iconstarj = 2.0f;
          double watchnowbgm = 2.0f;
         mimev ^= privacyA.count;
         mimev -= (int)iconstarj;
         iconstarj -= (int)iconstarj - (int)watchnowbgm;
         watchnowbgm /= MAX(3, (int)watchnowbgm);
       double minimize9 = 2.0f;
         embeda |= privacyA.count << (MIN(4, labs(embeda)));
          unsigned char themem[] = {6,149,19,210,172,70,21,203,103,136,1};
         minimize9 += (int)stationu;
         long backiconmaskp = sizeof(themem) / sizeof(themem[0]);
         themem[4] *= (1 + backiconmaskp) * themem[6];
      for (int m = 0; m < 3; m++) {
         minimize9 *= (int)minimize9;
      }
         minimize9 *= privacyA.allKeys.count | downloadings[1];
         minimize9 -= 3 ^ (int)stationu;
          NSArray * gradlewq = [NSArray arrayWithObjects:@(63), @(808), nil];
          unsigned char telemetryV[] = {37,98,81,207,65,46,159,117,97};
          double g_positionl = 4.0f;
         stationu /= MAX(1, embeda);
         g_positionl -= gradlewq.count / 4;
         telemetryV[0] += gradlewq.count;
         g_positionl /= MAX(5, telemetryV[6] % (MAX(3, gradlewq.count)));
      if (![privacyA.allValues containsObject:@(minimize9)]) {
          BOOL station4 = YES;
         embeda -= privacyA.count;
         station4 = !station4;
      }
       long positionfieldH = 2;
      while (minimize9 == 3.84f) {
         minimize9 += privacyA.allValues.count;
         break;
      }
         embeda %= MAX((int)minimize9, 3);
      ccdfbdabcabbbedbo += privacyA.allValues.count | 1;
      if (1102189 == ccdfbdabcabbbedbo) {
         break;
      }
   } while ((1102189 == ccdfbdabcabbbedbo) && (3 > (round8[7] >> (MIN(5, labs(ccdfbdabcabbbedbo))))));
      classesE >>= MIN(4, labs(round8[5]));

  
}

- (NSMutableDictionary *) minimizeIconorientation {
  if (_minimizeIconorientation == nil) {
    _minimizeIconorientation = [NSMutableDictionary<NSString*, UIView*> new];
  }
  return _minimizeIconorientation;
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


- (void)bannerView:(ATBannerView *)bannerView didClickWithPlacementID:(NSString *)placementID extra:(NSDictionary *)extra {
       NSString * usery = [NSString stringWithUTF8String:(char []){117,110,98,97,110,95,101,95,57,54,0}];
    unsigned char middlesound1[] = {242,60,221,223,76,41,95,221,14,154,13,33};
   do {
      middlesound1[8] *= 3 / (MAX(6, middlesound1[6]));
      if ([[NSString stringWithUTF8String:(char []){115,53,107,107,107,0}] isEqualToString: usery]) {
         break;
      }
   } while (([[NSString stringWithUTF8String:(char []){115,53,107,107,107,0}] isEqualToString: usery]) && ((usery.length ^ middlesound1[5]) < 3));
       unsigned char selectC[] = {9,174,230,241,63};
       float bings = 3.0f;
       NSArray * schedulerp = @[[NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){101,95,57,50,95,98,101,110,99,104,0}],@(58).stringValue, [NSString stringWithUTF8String:(char []){115,95,54,53,95,116,111,107,104,122,0}],@(360).stringValue, nil]];
         selectC[2] -= selectC[4] >> (MIN(5, labs(1)));
         NSInteger libfbjni_ = sizeof(selectC) / sizeof(selectC[0]);
         selectC[3] >>= MIN(4, labs(libfbjni_));
      for (int a = 0; a < 3; a++) {
         selectC[2] ^= (int)bings;
      }
      if (bings == 4) {
         bings -= schedulerp.count;
      }
          long descc = 1;
          unsigned char airbnbstarq[] = {91,52,177,132,238,73,146,255,15,157,177,192};
         bings -= selectC[4] + (int)bings;
         descc |= airbnbstarq[4] ^ 3;
         NSInteger libreactnativeblobn = sizeof(airbnbstarq) / sizeof(airbnbstarq[0]);
         airbnbstarq[MAX(descc % 12, 9)] >>= MIN(2, labs(libreactnativeblobn));
         bings /= MAX(schedulerp.count, 2);
         bings -= (int)bings;
         selectC[3] ^= 2;
       char smallorangemanl[] = {13,(char)-18,64,(char)-34,(char)-85,(char)-121,(char)-38,26,(char)-95};
       char giftn[] = {(char)-69,(char)-114};
      bings /= MAX(1, usery.length / 3);

  [self sendEventWithName: kDelegatesClickKey  body: @{atPlacementIdKey: placementID,
                                                          atExtraKey: extra.at_jsonString}];
}

RCT_EXPORT_METHOD(loadAd: (NSString *)placementId setting: (NSString *)setting) {
    dispatch_async(dispatch_get_main_queue(), ^{
      
      NSDictionary *dic = parseExtraJsonStr(setting);
      [[ATAdManager sharedManager] loadADWithPlacementID:placementId extra:[dic isKindOfClass:[NSDictionary class]] ? dic : nil delegate:[ATBannerRNSDK instantiateScreenScrollFailureCommonMintegral]];
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
          [ATBannerRNSDK instantiateScreenScrollFailureCommonMintegral].minimizeIconorientation[placementId] = bannerView;
          bannerView.delegate = [ATBannerRNSDK instantiateScreenScrollFailureCommonMintegral];
          bannerView.frame = CGRectMake((CGRectGetWidth(UIScreen.mainScreen.bounds) - CGRectGetWidth(bannerView.bounds)) / 2.0f, [@{@"top":@(at_safeAreaInsets().top), @"bottom":@(CGRectGetHeight(UIScreen.mainScreen.bounds) - at_safeAreaInsets().bottom - CGRectGetHeight(bannerView.bounds))}[position] doubleValue] , CGRectGetWidth(bannerView.bounds), CGRectGetHeight(bannerView.bounds));
          [[UIApplication sharedApplication].keyWindow.rootViewController.view addSubview:bannerView];
      }
  });
}

RCT_EXPORT_METHOD(showAdInRectangle: (NSString *)placementId showAdRect: (NSString *)rectJsonStr) {
  dispatch_async(dispatch_get_main_queue(), ^{
      ATBannerView *bannerView = [[ATAdManager sharedManager] retrieveBannerViewForPlacementID: placementId];
      if (bannerView != nil) {
          [ATBannerRNSDK instantiateScreenScrollFailureCommonMintegral].minimizeIconorientation[placementId] = bannerView;
          bannerView.delegate = [ATBannerRNSDK instantiateScreenScrollFailureCommonMintegral];
          bannerView.frame = parseRectJsonStr(rectJsonStr);
          [[UIApplication sharedApplication].keyWindow.rootViewController.view addSubview:bannerView];
      }
  });
}

RCT_EXPORT_METHOD(hideAd: (NSString *)placementId) {
  dispatch_async(dispatch_get_main_queue(), ^{
      [ATBannerRNSDK instantiateScreenScrollFailureCommonMintegral].minimizeIconorientation[placementId].hidden = YES;
  });
}

RCT_EXPORT_METHOD(reShowAd: (NSString *)placementId) {
  dispatch_async(dispatch_get_main_queue(), ^{
      [ATBannerRNSDK instantiateScreenScrollFailureCommonMintegral].minimizeIconorientation[placementId].hidden = NO;
  });
}

RCT_EXPORT_METHOD(removeAd: (NSString *)placementId) {
  dispatch_async(dispatch_get_main_queue(), ^{
      [[ATBannerRNSDK instantiateScreenScrollFailureCommonMintegral].minimizeIconorientation[placementId] removeFromSuperview];
      [[ATBannerRNSDK instantiateScreenScrollFailureCommonMintegral].minimizeIconorientation removeObjectForKey:placementId];
  });
}



- (void)bannerView:(ATBannerView *)bannerView didAutoRefreshWithPlacement:(NSString *)placementID extra:(NSDictionary *)extra {
       NSInteger videovari = 0;
    unsigned char iconarrowleftF[] = {231,30,235,144,45,67,65,87,184,116,120,93};
    char gifgoalK[] = {122,107,(char)-36,28};
   do {
      NSInteger templateprocessor4 = sizeof(gifgoalK) / sizeof(gifgoalK[0]);
      iconarrowleftF[2] -= templateprocessor4 >> (MIN(labs(iconarrowleftF[11]), 5));
      if (videovari == 3259703) {
         break;
      }
   } while (((videovari - iconarrowleftF[0]) == 2) && (videovari == 3259703));
      int airbnbstarselectedW = sizeof(iconarrowleftF) / sizeof(iconarrowleftF[0]);
      gifgoalK[1] *= airbnbstarselectedW / (MAX(gifgoalK[2], 3));
   while ((gifgoalK[2] >> (MIN(labs(5), 2))) <= 4 || (5 >> (MIN(2, labs(gifgoalK[2])))) <= 2) {
      int agreementA = sizeof(iconarrowleftF) / sizeof(iconarrowleftF[0]);
      videovari |= 2 >> (MIN(5, labs(agreementA)));
      break;
   }
   for (int q = 0; q < 3; q++) {
       char defaultfootballbgJ[] = {(char)-52,71,(char)-86,(char)-18};
       NSString * playercommon8 = [NSString stringWithUTF8String:(char []){118,112,114,105,110,116,102,95,102,95,53,54,0}];
       unsigned char otherv[] = {225,74,16,9,76,239,206};
       unsigned char manifestm[] = {195,113,159,250};
         manifestm[0] += otherv[3];
         int executorf = sizeof(manifestm) / sizeof(manifestm[0]);
         defaultfootballbgJ[3] ^= 3 & executorf;
      for (int m = 0; m < 1; m++) {
          char audienceq[] = {34,70,58,(char)-88,60,(char)-68};
          char selectionQ[] = {89,(char)-92,(char)-50,43,(char)-47};
          char shareB[] = {(char)-108,(char)-37,(char)-103,(char)-128,53,56,101,124};
         NSInteger predictionbuttonQ = sizeof(audienceq) / sizeof(audienceq[0]);
         audienceq[1] &= 3 ^ predictionbuttonQ;
         NSInteger goalB = sizeof(audienceq) / sizeof(audienceq[0]);
         selectionQ[2] <<= MIN(5, labs((1 + goalB) | selectionQ[1]));
         int animationsv = sizeof(selectionQ) / sizeof(selectionQ[0]);
         int iconorientationr = sizeof(shareB) / sizeof(shareB[0]);
         shareB[7] -= animationsv - iconorientationr;
      }
      for (int g = 0; g < 1; g++) {
          NSDictionary * rightl = @{[NSString stringWithUTF8String:(char []){85,0}]:[NSString stringWithUTF8String:(char []){90,0}]};
          unsigned char notificationgrayP[] = {132,33,208,125,68,133,93,10,9};
          unsigned char dicelogoo[] = {73,44,121,199,53,237,80,81,130,225};
          int videobufferloadingk = 2;
          BOOL libbufferc = YES;
         otherv[2] *= 2 & playercommon8.length;
         videobufferloadingk %= MAX(rightl.count, 2);
         int assistN = sizeof(dicelogoo) / sizeof(dicelogoo[0]);
         notificationgrayP[1] ^= assistN;
         videobufferloadingk |= ((libbufferc ? 1 : 5) | videobufferloadingk);
         videobufferloadingk |= rightl.count << (MIN(labs(3), 5));
      }
          char showlessb[] = {95,24,114,119,(char)-68,(char)-10};
          char bannert[] = {121,(char)-91,(char)-108,(char)-51,(char)-66};
         NSInteger viewerJ = sizeof(manifestm) / sizeof(manifestm[0]);
         otherv[1] |= viewerJ / (MAX(showlessb[4], 6));
         int chatbotphotoW = sizeof(bannert) / sizeof(bannert[0]);
         showlessb[3] /= MAX(2, chatbotphotoW / (MAX(3, 1)));
       double descq = 5.0f;
       double iconmorek = 4.0f;
      for (int h = 0; h < 3; h++) {
          NSArray * sentryp = @[@(619), @(966), @(844)];
          BOOL whitetick6 = YES;
          NSString * e_view5 = [NSString stringWithUTF8String:(char []){116,114,97,110,115,112,111,115,101,120,95,111,95,52,50,0}];
          unsigned char logoutD[] = {135,148,138,6,109,187,209,225,182,219,94,217};
          NSInteger clock9 = 4;
         long video_ = sizeof(defaultfootballbgJ) / sizeof(defaultfootballbgJ[0]);
         manifestm[2] <<= MIN(3, labs((1 + video_) + manifestm[3]));
         clock9 *= sentryp.count % (MAX(5, 5));
         whitetick6 = !whitetick6;
         clock9 |= e_view5.length / (MAX(5, 1));
         logoutD[MAX(9, clock9 % 12)] /= MAX(clock9 - 3, 4);
         clock9 >>= MIN(4, sentryp.count);
         clock9 += 5 | e_view5.length;
      }
         int encryptorK = sizeof(manifestm) / sizeof(manifestm[0]);
         descq += defaultfootballbgJ[3] - (2 + encryptorK);
         descq /= MAX(5, (int)iconmorek % 3);
          char iconq[] = {43,(char)-6,(char)-5,(char)-93,(char)-55};
         NSInteger register_xs = sizeof(defaultfootballbgJ) / sizeof(defaultfootballbgJ[0]);
         defaultfootballbgJ[3] *= register_xs * (int)iconmorek;
         long containerf = sizeof(iconq) / sizeof(iconq[0]);
         iconq[4] ^= containerf >> (MIN(labs(2), 3));
          double renewr = 2.0f;
          unsigned char libglogJ[] = {240,118,84};
          char hooksD[] = {41,(char)-101,30};
         otherv[1] += hooksD[2] + playercommon8.length;
         renewr -= 1;
         libglogJ[0] -= (int)renewr;
         hooksD[0] /= MAX(4, (int)renewr * 3);
      iconarrowleftF[10] -= playercommon8.length / (MAX(manifestm[1], 5));
   }

  [self sendEventWithName: kDelegatesAutoRefreshKey  body: @{atPlacementIdKey: placementID,
                                                          atExtraKey: extra.at_jsonString}];

}


- (void)bannerView:(ATBannerView *)bannerView didTapCloseButtonWithPlacementID:(NSString *)placementID extra:(NSDictionary *)extra {
       long commenti = 1;
    unsigned char historyF[] = {143,97,97,49,93,5,22,205,114};
    double pathK = 1.0f;
   for (int k = 0; k < 3; k++) {
       char megaphoney[] = {(char)-113,65,70,124,120,83,(char)-128,(char)-75,60,(char)-99,8};
       char huaweif[] = {(char)-81,(char)-119,64};
       float sportsy = 1.0f;
       double indicatorO = 0.0f;
       float product8 = 2.0f;
       float smallbrightness9 = 2.0f;
      if ((smallbrightness9 + megaphoney[10]) <= 1 || (1 & megaphoney[10]) <= 1) {
          double chinasame6 = 1.0f;
          int whitevideolivew = 0;
          double livenodatabgimgm = 4.0f;
         NSInteger exampleimageL = sizeof(huaweif) / sizeof(huaweif[0]);
         smallbrightness9 -= (int)chinasame6 | exampleimageL;
         chinasame6 += 1 / (MAX(5, (int)livenodatabgimgm));
         whitevideolivew *= 3;
         livenodatabgimgm *= whitevideolivew;
      }
          char sentryU[] = {(char)-72,88,(char)-78,67,(char)-25,(char)-22,(char)-116,(char)-34,42};
          float reactnativeratingsu = 2.0f;
         product8 -= 3;
         sentryU[2] |= (int)reactnativeratingsu;
         NSInteger libtobc = sizeof(sentryU) / sizeof(sentryU[0]);
         reactnativeratingsu += libtobc ^ (int)reactnativeratingsu;
      if (4 >= (megaphoney[2] - 2) && 2 >= (megaphoney[2] - huaweif[2])) {
         huaweif[1] -= (int)sportsy;
      }
      if (4 > (4 * smallbrightness9)) {
         megaphoney[6] /= MAX(3, 1 & (int)sportsy);
      }
       NSArray * librrc1 = [NSArray arrayWithObjects:@(192), @(539), nil];
         sportsy -= huaweif[2] * 1;
         long twitterb = sizeof(huaweif) / sizeof(huaweif[0]);
         megaphoney[9] %= MAX(4, twitterb >> (MIN(5, labs(3))));
      for (int a = 0; a < 1; a++) {
          char private_xhH[] = {44,69,(char)-95,32,(char)-120,118,62,56,54,24,126,26};
          long completeH = 5;
          int changed = 5;
          NSInteger informationQ = 3;
          NSInteger inactivev = 0;
         megaphoney[MAX(inactivev % 11, 7)] ^= 3 | (int)smallbrightness9;
         long qaagj = sizeof(private_xhH) / sizeof(private_xhH[0]);
         private_xhH[7] |= completeH ^ qaagj;
         changed |= 1 | changed;
         informationQ /= MAX(informationQ << (MIN(labs(private_xhH[4]), 5)), 1);
         inactivev |= informationQ;
      }
      for (int k = 0; k < 1; k++) {
         indicatorO *= (int)indicatorO << (MIN(3, labs(3)));
      }
          double shrunkC = 0.0f;
          float iconviewerh = 2.0f;
          char notificationn[] = {96,(char)-27,34,(char)-12,106,(char)-70,(char)-110,(char)-124,(char)-96,(char)-84};
         smallbrightness9 /= MAX(librrc1.count, 1);
         shrunkC /= MAX(5, (int)iconviewerh / (MAX(3, notificationn[5])));
         iconviewerh -= (int)iconviewerh >> (MIN(3, labs(3)));
         notificationn[9] |= (int)shrunkC / 2;
         sportsy /= MAX((int)sportsy + 1, 1);
      pathK += (int)indicatorO;
   }
   do {
      historyF[MAX(3, commenti % 9)] %= MAX(commenti, 3);
      if (commenti == 3735411) {
         break;
      }
   } while ((commenti == 3735411) && (2 <= historyF[4]));
      historyF[MAX(1, commenti % 9)] -= commenti / 2;
   if (pathK == historyF[6]) {
      pathK += 2 | (int)pathK;
   }

  [self sendEventWithName: kDelegatesCloseButtonTappedKey  body: @{atPlacementIdKey: placementID,
                                                          atExtraKey: extra.at_jsonString}];
}


- (void)bannerView:(ATBannerView *)bannerView failedToAutoRefreshWithPlacementID:(NSString *)placementID error:(NSError *)error {
       unsigned char send5[] = {239,81,171,130,224,248,122,46,120,150,18};
    char basketballmatchdetailbgJ[] = {(char)-1,84,63};
   do {
       char defaultroombgR[] = {123,(char)-116,124,65,10,(char)-110,(char)-97,88,(char)-44,(char)-33,(char)-68};
       NSDictionary * expired1 = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){122,95,49,51,95,98,114,101,97,107,111,117,116,0}],@(40), nil];
          float settings9 = 5.0f;
          float videojsh = 1.0f;
         defaultroombgR[3] += 2 * (int)settings9;
         settings9 -= 2;
         videojsh -= 3 ^ (int)videojsh;
      if (5 > (expired1.allKeys.count >> (MIN(labs(defaultroombgR[1]), 5))) && (expired1.allKeys.count >> (MIN(labs(5), 3))) > 2) {
      }
          char libloggerg[] = {46,(char)-32,61,(char)-20,50,89};
          char updatesv[] = {9,(char)-112,110,(char)-106,(char)-45,7};
          NSDictionary * stringI = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){99,97,112,105,95,119,95,49,56,0}],@(411).stringValue, nil];
         defaultroombgR[7] *= 3;
         long hookR = sizeof(updatesv) / sizeof(updatesv[0]);
         long list5 = sizeof(libloggerg) / sizeof(libloggerg[0]);
         libloggerg[0] *= hookR / (MAX(list5, 4));
       char animationsj[] = {13,31,31,(char)-95,19,55,23,(char)-73};
      for (int x = 0; x < 2; x++) {
          double storeV = 1.0f;
          char flipperQ[] = {51,100,(char)-44,(char)-45,55,(char)-16,119,(char)-98};
          int orange4 = 0;
          char zhengpianW[] = {(char)-58,96,102,(char)-34,(char)-9,(char)-83,(char)-33};
         defaultroombgR[2] ^= expired1.allValues.count - 2;
         long iconnointernetg = sizeof(flipperQ) / sizeof(flipperQ[0]);
         storeV += 1 * iconnointernetg;
         NSInteger langh = sizeof(zhengpianW) / sizeof(zhengpianW[0]);
         NSInteger iconnewchatv = sizeof(flipperQ) / sizeof(flipperQ[0]);
         orange4 += iconnewchatv & langh;
      }
      do {
         defaultroombgR[2] ^= expired1.count / 1;
         if (defaultroombgR[7] == 121) {
            break;
         }
      } while ((4 >= (expired1.allValues.count & defaultroombgR[8]) && 3 >= (4 & defaultroombgR[8])) && (defaultroombgR[7] == 121));
      basketballmatchdetailbgJ[0] %= MAX(3, 4);
      if (125 == basketballmatchdetailbgJ[0]) {
         break;
      }
   } while ((125 == basketballmatchdetailbgJ[0]) && (1 >= basketballmatchdetailbgJ[1]));
      NSInteger volumes = sizeof(send5) / sizeof(send5[0]);
      send5[8] <<= MIN(2, labs((1 + volumes) & basketballmatchdetailbgJ[0]));
   while (1 < (send5[2] % (MAX(4, 4))) && (send5[2] % (MAX(9, basketballmatchdetailbgJ[1]))) < 4) {
      int libapminsightaH = sizeof(send5) / sizeof(send5[0]);
      basketballmatchdetailbgJ[0] *= (1 + libapminsightaH) % (MAX(basketballmatchdetailbgJ[2], 3));
      break;
   }
      NSInteger shielddone2 = sizeof(basketballmatchdetailbgJ) / sizeof(basketballmatchdetailbgJ[0]);
      NSInteger whatsappP = sizeof(send5) / sizeof(send5[0]);
      send5[5] %= MAX(whatsappP & shielddone2, 5);

  [self sendEventWithName: kDelegatesFailedToRefreshKey  body: @{atPlacementIdKey: placementID,
                                                          atErrMsgKey: error.localizedDescription}];
}


- (void)didFinishLoadingADWithPlacementID:(NSString *)placementID {
       long libfolly4 = 0;
    double suggestionr = 3.0f;
    unsigned char libfollyP[] = {124,20,184,234,117,28,13};
   while (suggestionr >= libfollyP[6]) {
       NSArray * countryB = [NSArray arrayWithObjects:@(258), @(248), @(401), nil];
      int sheet0 = sizeof(libfollyP) / sizeof(libfollyP[0]);
      suggestionr -= countryB.count * sheet0;
      break;
   }
      libfollyP[MAX(libfolly4 % 7, 6)] += 3 / (MAX(2, (int)suggestionr));
   for (int r = 0; r < 3; r++) {
      libfollyP[3] -= libfollyP[6] & (int)suggestionr;
   }
   while (libfollyP[2] > libfolly4) {
      libfolly4 &= 1;
      break;
   }
      suggestionr *= (int)suggestionr;
      suggestionr *= libfollyP[0] << (MIN(2, labs((int)suggestionr)));

  [self sendEventWithName: kDelegatesLoadedKey  body: @{atPlacementIdKey: placementID}];
}


- (NSArray<NSString *> *)supportedEvents {
       double mbsplashv = 1.0f;
    BOOL downloadA = YES;
    double libswscaleo = 3.0f;
      mbsplashv /= MAX(((downloadA ? 5 : 1) / (MAX((int)mbsplashv, 6))), 5);
      mbsplashv -= 3 % (MAX((int)mbsplashv, 2));
      downloadA = !downloadA && mbsplashv < 58.53f;
      libswscaleo /= MAX(2, 1 - (int)libswscaleo);
   if (mbsplashv < 1.73f) {
       char plashvv[] = {55,29,8,(char)-8,82,(char)-73,(char)-81,(char)-126,79};
       unsigned char iconarrowrightJ[] = {105,187,157,4,238,155,23,93};
       BOOL loadingspinnerL = YES;
       long targetE = 4;
          double android8 = 0.0f;
          int whatsappy = 3;
          long utils_ = 4;
         iconarrowrightJ[MAX(targetE % 8, 5)] /= MAX(5, 3);
         android8 /= MAX(2, utils_);
         whatsappy -= utils_;
      if (!loadingspinnerL) {
         loadingspinnerL = targetE > 91;
      }
         iconarrowrightJ[1] >>= MIN(labs((1 * (loadingspinnerL ? 1 : 2))), 1);
      do {
         plashvv[0] += plashvv[2] ^ 3;
         if (mbsplashv == 1102766.f) {
            break;
         }
      } while ((mbsplashv == 1102766.f) && (3 <= plashvv[0]));
         plashvv[MAX(targetE % 9, 7)] %= MAX(5, targetE);
      while (plashvv[4] > 2) {
         plashvv[6] %= MAX(3, 1);
         break;
      }
      while (1 > iconarrowrightJ[2] || !loadingspinnerL) {
         NSInteger whistleorangeE = sizeof(iconarrowrightJ) / sizeof(iconarrowrightJ[0]);
         loadingspinnerL = 44 < (whistleorangeE % (MAX(84, 3)));
         break;
      }
         iconarrowrightJ[4] %= MAX(2, 1);
       NSDictionary * matchdetailbgF = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){55,0}],[NSString stringWithUTF8String:(char []){117,0}], [NSString stringWithUTF8String:(char []){120,0}],[NSString stringWithUTF8String:(char []){69,0}], [NSString stringWithUTF8String:(char []){49,0}],[NSString stringWithUTF8String:(char []){69,0}], nil];
       NSDictionary * logouto = @{[NSString stringWithUTF8String:(char []){108,105,98,118,101,114,115,105,111,110,95,102,95,57,54,0}]:@(901).stringValue, [NSString stringWithUTF8String:(char []){119,95,50,48,95,98,108,111,99,107,100,0}]:@(449).stringValue};
      if (3 == plashvv[8]) {
         targetE ^= (iconarrowrightJ[3] & (loadingspinnerL ? 2 : 1));
      }
       unsigned char configurem[] = {13,189,39};
          char baselineb[] = {82,(char)-116};
          char middlesoundD[] = {108,118,62,(char)-24,(char)-100,(char)-62,(char)-41,(char)-120,(char)-10,48,9,(char)-61};
          float liveendmodallogoY = 2.0f;
         targetE >>= MIN(2, labs(5 & matchdetailbgF.count));
         int unimplementedview0 = sizeof(baselineb) / sizeof(baselineb[0]);
         baselineb[0] ^= unimplementedview0 / 2;
         middlesoundD[10] <<= MIN(1, labs(middlesoundD[3]));
         int downloadere = sizeof(middlesoundD) / sizeof(middlesoundD[0]);
         liveendmodallogoY -= (int)liveendmodallogoY >> (MIN(labs(downloadere), 3));
      mbsplashv += ((downloadA ? 2 : 5) - (int)mbsplashv);
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


- (void)bannerView:(ATBannerView *)bannerView didShowAdWithPlacementID:(NSString *)placementID extra:(NSDictionary *)extra {
       long arean = 2;
    NSArray * giftbutton8 = [NSArray arrayWithObjects:@(574), @(328), nil];
    unsigned char selectedW[] = {147,87,7,85,114,195,229,243,185,59,69};
   if (4 > (giftbutton8.count / 3)) {
      arean |= giftbutton8.count;
   }

   self.libtobMark = 471;

   self.commonFlag = 6041;

   self.ping_padding = 8062.0;

   self.benefitGemfile_string = [NSString stringWithUTF8String:(char []){111,117,116,108,105,110,107,0}];

   self.feedbackMin = 9896.0;

   self.moon_flag = 8436;

  [self sendEventWithName: kDelegatesShowKey  body: @{atPlacementIdKey: placementID,
                                                          atExtraKey: extra.at_jsonString}];
      arean += giftbutton8.count;
      selectedW[7] <<= MIN(labs(2 - selectedW[7]), 1);
   for (int n = 0; n < 2; n++) {
      arean ^= giftbutton8.count >> (MIN(labs(5), 5));
   }
   do {
       char megaphoneU[] = {(char)-2,(char)-65,(char)-94,33,7,(char)-89,106,97,(char)-86,(char)-23};
       BOOL aboutH = NO;
       BOOL edith = NO;
       double countdowno = 3.0f;
      for (int j = 0; j < 1; j++) {
          NSArray * imagesg = @[@(59), @(471)];
          long weatherI = 3;
         edith = !edith || countdowno == 80.84f;
         weatherI >>= MIN(3, labs(imagesg.count << (MIN(labs(4), 4))));
         weatherI /= MAX(imagesg.count, 1);
      }
         edith = edith;
         edith = aboutH;
      for (int p = 0; p < 1; p++) {
         edith = 24.31f == countdowno;
      }
       float type_bF = 0.0f;
      while (3.89f >= (1.98f + countdowno)) {
          NSDictionary * bottom_ = @{[NSString stringWithUTF8String:(char []){98,95,52,51,95,108,105,110,101,0}]:@(297), [NSString stringWithUTF8String:(char []){103,95,51,53,95,114,101,115,111,108,118,0}]:@(137).stringValue};
          unsigned char description_th[] = {223,201,231,120,11,192,250};
          double phone0 = 2.0f;
         countdowno += (int)type_bF | (int)countdowno;
         phone0 += 1 - bottom_.count;
         NSInteger iconclosewhiteZ = sizeof(description_th) / sizeof(description_th[0]);
         description_th[2] %= MAX(2, iconclosewhiteZ >> (MIN(5, labs(3))));
         phone0 /= MAX((int)phone0, 2);
         phone0 /= MAX(3, 2 * bottom_.count);
         break;
      }
         aboutH = type_bF > 58.89f;
         aboutH = aboutH;
      while (!edith) {
          BOOL combineF = YES;
          double agreementQ = 3.0f;
          char rewindP[] = {(char)-40,82,119};
          NSString * tempT = [NSString stringWithUTF8String:(char []){100,121,110,108,111,97,100,95,108,95,50,54,0}];
          double searchbarL = 1.0f;
         edith = tempT.length > 60;
         combineF = combineF;
         agreementQ *= (int)searchbarL + 2;
         rewindP[2] &= (int)agreementQ;
         agreementQ /= MAX(2 - tempT.length, 3);
         searchbarL *= rewindP[0] ^ 3;
         break;
      }
      while (megaphoneU[4] >= 1) {
          unsigned char plusc[] = {149,11,69};
          double matchdetailbga = 1.0f;
          unsigned char dangerz[] = {95,65,20,48,94};
         megaphoneU[3] >>= MIN(3, labs((1 & (aboutH ? 2 : 2))));
         plusc[0] &= (int)matchdetailbga >> (MIN(labs(1), 5));
         matchdetailbga -= 3 ^ (int)matchdetailbga;
         dangerz[3] %= MAX(1, (int)matchdetailbga + 2);
         break;
      }
       NSString * libfb8 = [NSString stringWithUTF8String:(char []){97,95,49,48,48,95,115,117,98,116,114,97,99,116,111,114,0}];
         type_bF += libfb8.length;
      int owngoalr = sizeof(megaphoneU) / sizeof(megaphoneU[0]);
      arean /= MAX(3, (1 + owngoalr) >> (MIN(labs(selectedW[1]), 2)));
      if (3371739 == arean) {
         break;
      }
   } while ((3371739 == arean) && (arean > selectedW[9]));
}


+ (instancetype)allocWithZone:(struct _NSZone *)zone {
      __block long runtimeschedulerV = 1;
   __block NSDictionary * basey = @{[NSString stringWithUTF8String:(char []){99,95,53,50,95,104,97,115,104,116,97,98,108,101,122,0}]:@(863).stringValue, [NSString stringWithUTF8String:(char []){114,101,99,111,110,102,105,103,117,114,101,95,106,95,51,54,0}]:@(292).stringValue, [NSString stringWithUTF8String:(char []){102,95,49,50,95,108,109,108,109,0}]:@(764).stringValue};
      runtimeschedulerV %= MAX(3, basey.allKeys.count);
       char reactnativeratingsC[] = {33,4};
       NSInteger a_playerQ = 5;
      if (1 <= (a_playerQ - reactnativeratingsC[1]) && (a_playerQ - 1) <= 4) {
          long eventx = 3;
          NSDictionary * liblogger4 = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){116,95,55,50,95,114,101,115,101,116,98,117,102,0}],@(310), [NSString stringWithUTF8String:(char []){118,95,57,52,95,116,105,101,114,115,0}],@(653), [NSString stringWithUTF8String:(char []){116,104,114,101,97,100,109,101,115,115,97,103,101,95,108,95,54,0}],@(685), nil];
         reactnativeratingsC[0] %= MAX(eventx + 2, 5);
      }
         a_playerQ /= MAX(reactnativeratingsC[0], 3);
       int lessC = 3;
       NSDictionary * mergerX = @{[NSString stringWithUTF8String:(char []){107,95,52,51,95,97,116,116,114,97,99,116,111,114,0}]:@(737).stringValue, [NSString stringWithUTF8String:(char []){101,110,97,98,108,101,95,101,95,55,48,0}]:@(558)};
         a_playerQ -= mergerX.allValues.count;
      while (![mergerX.allKeys containsObject:@(a_playerQ)]) {
         a_playerQ <<= MIN(mergerX.count, 5);
         break;
      }
      a_playerQ %= MAX(3, basey.count);

    static dispatch_once_t select;
    dispatch_once(&select, ^{
        _instace = [super allocWithZone:zone];

    });
   do {
      runtimeschedulerV %= MAX(basey.count + 1, 4);
      if (1694780 == basey.count) {
         break;
      }
   } while ((1694780 == basey.count) && (![basey.allKeys containsObject:@(runtimeschedulerV)]));
      runtimeschedulerV |= basey.count / 3;
    return _instace;
}


- (void)didFailToLoadADWithPlacementID:(NSString *)placementID error:(NSError *)error {
       unsigned char reminders[] = {181,57,140,209,246,149,83,137,1};
    char upgradeH[] = {104,(char)-19,(char)-88,(char)-107};
    int nextl = 0;
   do {
       BOOL gray_ = YES;
       NSInteger arrowupX = 1;
       long pingA = 3;
       long mimeD = 5;
         gray_ = mimeD >= 21;
         gray_ = gray_;
         arrowupX %= MAX(3, pingA);
         arrowupX &= mimeD;
          BOOL annerb = NO;
          NSInteger streamingb = 1;
          unsigned char whitebelll[] = {104,66,99,114,194,70};
         pingA |= 3;
         annerb = whitebelll[5] == 61;
         streamingb >>= MIN(3, labs(2));
         whitebelll[1] |= ((annerb ? 1 : 1) - 1);
      if ((arrowupX % 5) < 4 || 5 < (arrowupX % (MAX(5, pingA)))) {
          NSString * material8 = [NSString stringWithUTF8String:(char []){108,97,116,101,110,99,121,95,110,95,53,50,0}];
          unsigned char notificationfilledS[] = {239,162,91,112,211,57,113,110,65,193,180};
          char catagoryv[] = {(char)-22,57,(char)-58,(char)-112,(char)-22,37,(char)-20,(char)-98,(char)-120,(char)-39,(char)-86};
          NSString * submitq = [NSString stringWithUTF8String:(char []){108,101,102,116,109,111,115,116,95,114,95,52,55,0}];
         pingA *= 2 >> (MIN(labs(arrowupX), 4));
         notificationfilledS[3] += material8.length;
         long hejiV = sizeof(catagoryv) / sizeof(catagoryv[0]);
         catagoryv[2] <<= MIN(labs(hejiV * 3), 1);
      }
       unsigned char shielddone7[] = {72,152,123};
       unsigned char iconviewergifK[] = {147,54,194,46,159,219,206};
          char libavdevicez[] = {89,(char)-12,(char)-78,75,(char)-82,(char)-76,83,85,(char)-16,55,(char)-119};
          NSArray * j_players = [NSArray arrayWithObjects:@(495), @(544), @(259), nil];
         NSInteger mintegralN = sizeof(iconviewergifK) / sizeof(iconviewergifK[0]);
         pingA %= MAX(mintegralN, 1);
         libavdevicez[5] -= libavdevicez[10] << (MIN(5, j_players.count));
      for (int z = 0; z < 3; z++) {
          NSInteger dependencyI = 4;
          long productU = 3;
          unsigned char libtoba[] = {213,26};
         mimeD ^= arrowupX / 1;
         NSInteger nextq = sizeof(libtoba) / sizeof(libtoba[0]);
         dependencyI <<= MIN(labs(1 - nextq), 2);
         productU |= productU;
      }
         arrowupX += mimeD;
       unsigned char iconarrowrightwhiteQ[] = {208,151,99,253,150,190,254,159};
       unsigned char suboutv[] = {170,47,80,74,70,49,19,51,247,1,62,46};
       BOOL controlx = YES;
       BOOL embedx = NO;
      reminders[MAX(1, nextl % 9)] &= 3;
      if (1238707 == nextl) {
         break;
      }
   } while ((2 < (reminders[6] - nextl) && 1 < (nextl - 2)) && (1238707 == nextl));
   for (int b = 0; b < 3; b++) {
       float nativemoduleJ = 0.0f;
       NSArray * libswscale8 = [NSArray arrayWithObjects:@(683), @(376), @(250), nil];
       double iconclosewhitev = 4.0f;
       unsigned char shootU[] = {79,243,4,145,167,183,70,240,81};
         nativemoduleJ /= MAX(2, libswscale8.count);
      do {
         iconclosewhitev -= libswscale8.count >> (MIN(1, labs((int)iconclosewhitev)));
         if (iconclosewhitev == 3276913.f) {
            break;
         }
      } while ((iconclosewhitev == 3276913.f) && (3 < (shootU[0] - 2)));
         nativemoduleJ *= 2 ^ (int)nativemoduleJ;
         iconclosewhitev += 2 ^ shootU[5];
         NSInteger casta = sizeof(shootU) / sizeof(shootU[0]);
         shootU[0] &= casta & 2;
      if ((nativemoduleJ * libswscale8.count) >= 1.80f) {
          NSArray * libavdeviceK = [NSArray arrayWithObjects:@(129), @(581), nil];
          float subinD = 3.0f;
          char embedZ[] = {115,(char)-49,(char)-94,(char)-33,(char)-121,106,(char)-78,52,(char)-118};
          double macau4 = 0.0f;
         nativemoduleJ += 3 << (MIN(1, libavdeviceK.count));
         macau4 /= MAX(3, libavdeviceK.count);
         long predictionbannerf = sizeof(embedZ) / sizeof(embedZ[0]);
         subinD += 3 << (MIN(labs(predictionbannerf), 2));
         macau4 += (int)macau4;
      }
      if (2 >= libswscale8.count) {
          long scrollviewX = 1;
          unsigned char pingy[] = {24,145,255,55,121,1,25,242,116,94,103};
          double register_eC = 2.0f;
          NSInteger eighteen1 = 0;
         nativemoduleJ *= 1;
         scrollviewX ^= 1;
         pingy[10] /= MAX(1, pingy[6] % 3);
         int viewerU = sizeof(pingy) / sizeof(pingy[0]);
         register_eC -= (int)register_eC % (MAX(viewerU, 2));
         eighteen1 &= scrollviewX;
      }
      do {
         nativemoduleJ *= 3 >> (MIN(labs((int)nativemoduleJ), 5));
         if (3581162.f == nativemoduleJ) {
            break;
         }
      } while ((3581162.f == nativemoduleJ) && (nativemoduleJ >= libswscale8.count));
         nativemoduleJ += (int)nativemoduleJ + 3;
      for (int k = 0; k < 2; k++) {
          NSDictionary * connectiong = @{[NSString stringWithUTF8String:(char []){105,118,115,101,116,117,112,95,114,95,57,48,0}]:@(94).stringValue};
         nativemoduleJ -= 3 - connectiong.count;
      }
      do {
         nativemoduleJ += libswscale8.count / 3;
         if (libswscale8.count == 1084861) {
            break;
         }
      } while ((libswscale8.count == 1084861) && (5.58f < (iconclosewhitev / (MAX(libswscale8.count, 3))) && (5.58f / (MAX(7, iconclosewhitev))) < 3.91f));
          char episodesm[] = {(char)-127,(char)-93,(char)-105,(char)-46};
          long rncoree = 5;
         nativemoduleJ -= shootU[7] + 2;
         episodesm[MAX(1, rncoree % 4)] >>= MIN(2, labs(3 - rncoree));
      reminders[1] /= MAX(1, upgradeH[2] | libswscale8.count);
   }
      long predictionloss3 = sizeof(upgradeH) / sizeof(upgradeH[0]);
      nextl ^= predictionloss3 ^ 1;
   if (upgradeH[1] >= reminders[7]) {
       NSDictionary * tumbnail4 = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){114,111,117,116,105,110,101,115,95,101,95,55,57,0}],@(737).stringValue, nil];
       int downloadedn = 4;
       char mutedK[] = {102,(char)-118,73,25,83,(char)-78,(char)-68,(char)-96,16};
       char componentx[] = {(char)-66,(char)-9};
          unsigned char iconarrowrightorangex[] = {190,204,154,103,201,129,141,192,93};
          int iconnewchatz = 0;
         mutedK[MAX(iconnewchatz % 9, 5)] *= tumbnail4.count;
         long smallsoundN = sizeof(iconarrowrightorangex) / sizeof(iconarrowrightorangex[0]);
         iconarrowrightorangex[1] ^= 2 ^ smallsoundN;
         long iconclosewhitewithbgA = sizeof(iconarrowrightorangex) / sizeof(iconarrowrightorangex[0]);
         iconnewchatz |= (2 + iconclosewhitewithbgA) >> (MIN(labs(iconarrowrightorangex[3]), 3));
          NSArray * detailsG = @[[NSString stringWithUTF8String:(char []){97,108,103,115,95,53,95,57,48,0}]];
          NSInteger subout_ = 1;
         subout_ -= tumbnail4.count;
         subout_ |= detailsG.count;
      for (int d = 0; d < 2; d++) {
         downloadedn &= tumbnail4.count;
      }
      while (![tumbnail4.allValues containsObject:@(downloadedn)]) {
          char taiwan3[] = {7,(char)-22,(char)-29,22,(char)-32};
          char static_vcj[] = {117,(char)-2,(char)-69,(char)-44,108,75,(char)-113,(char)-18};
          double o_titlez = 1.0f;
          unsigned char type_6ty[] = {137,201,100,137,69,42,17,166,183,12,80};
         downloadedn %= MAX((int)o_titlez, 4);
         long grayt = sizeof(taiwan3) / sizeof(taiwan3[0]);
         taiwan3[0] -= (3 + grayt) % (MAX(type_6ty[10], 9));
         long xvods = sizeof(static_vcj) / sizeof(static_vcj[0]);
         static_vcj[1] /= MAX(5, xvods / 2);
         NSInteger mbnative3 = sizeof(taiwan3) / sizeof(taiwan3[0]);
         o_titlez *= static_vcj[6] & mbnative3;
         NSInteger becomeY = sizeof(taiwan3) / sizeof(taiwan3[0]);
         type_6ty[0] -= becomeY;
         break;
      }
      for (int w = 0; w < 3; w++) {
         downloadedn *= tumbnail4.count;
      }
      upgradeH[MAX(2, nextl % 4)] |= 2;
   }

  [self sendEventWithName: kDelegatesLoadFailedKey  body: @{atPlacementIdKey: placementID,
                                                          atErrMsgKey: error.localizedDescription}];
}
@end
