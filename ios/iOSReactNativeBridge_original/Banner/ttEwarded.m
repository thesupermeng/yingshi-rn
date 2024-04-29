
#import "ttEwarded.h"
#import <AnyThinkBanner/AnyThinkBanner.h>
#import "ttLockOrange.h"
#import "ttTrashAction.h"
#import "ttLeftController.h"



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
@property(nonatomic, copy)NSString *  securityQuestBlackString;
@property(nonatomic, assign)float  whatsappMax;
@property(nonatomic, copy)NSArray *  bridgeGroupNextArr;
@property(nonatomic, assign)long  taiwan_count;




@property(nonatomic, strong) NSMutableDictionary<NSString*, UIView*>* downloaderCount;

@end

@implementation ATBannerRNSDK

static id _instace;

+(instancetype) whiteReloadValidScenario {
    static dispatch_once_t onceToken;
    dispatch_once(&onceToken, ^{
      _instace = [[super alloc] init];
    });
    return _instace;
}


+ (instancetype)allocWithZone:(struct _NSZone *)zone {
      __block long privileger = 0;
   __block BOOL mappingy = NO;
   __block NSInteger selectI = 0;
   do {
      privileger >>= MIN(4, labs(privileger));
      if (privileger == 3701404) {
         break;
      }
   } while ((mappingy) && (privileger == 3701404));

    static dispatch_once_t zoom;
    dispatch_once(&zoom, ^{
        _instace = [super allocWithZone:zone];

    });
   do {
      mappingy = mappingy || privileger < 29;
      if (mappingy ? !mappingy : mappingy) {
         break;
      }
   } while ((!mappingy) && (mappingy ? !mappingy : mappingy));
    return _instace;
   while (2 <= (4 << (MIN(2, labs(selectI))))) {
      mappingy = selectI == 64;
      break;
   }
}

- (NSMutableDictionary *) downloaderCount {
  if (_downloaderCount == nil) {
    _downloaderCount = [NSMutableDictionary<NSString*, UIView*> new];
  }
  return _downloaderCount;
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
       unsigned char n_title5[] = {192,21,252,185,40,14};
    NSInteger matchq = 3;
      matchq += matchq;
   do {
       NSDictionary * text5 = @{[NSString stringWithUTF8String:(char []){103,95,50,53,95,99,111,109,98,105,110,101,114,0}]:@(188)};
       NSString * tickR = [NSString stringWithUTF8String:(char []){115,116,114,95,121,95,49,56,0}];
       char gemfileL[] = {31,53,46,(char)-31,125,(char)-79,(char)-47,113,(char)-90};
       NSArray * setting3 = [NSArray arrayWithObjects:@(515), @(302), @(952), nil];
       NSArray * mbridge4 = [NSArray arrayWithObjects:@(874), @(680), @(805), nil];
      do {
         if (183144 == setting3.count) {
            break;
         }
      } while ((183144 == setting3.count) && (4 <= (mbridge4.count / (MAX(5, setting3.count))) || 5 <= (setting3.count / 4)));
      do {
         gemfileL[4] *= setting3.count;
         if (4362592 == matchq) {
            break;
         }
      } while ((4362592 == matchq) && (gemfileL[5] == tickR.length));
      if (3 <= text5.allKeys.count) {
      }
      for (int p = 0; p < 2; p++) {
      }
       NSDictionary * langL = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){120,95,55,57,95,118,111,116,101,100,0}],@(71).stringValue, [NSString stringWithUTF8String:(char []){108,111,99,97,116,101,100,95,100,95,49,56,0}],@(235), [NSString stringWithUTF8String:(char []){98,95,52,51,95,114,101,100,111,0}],@(436).stringValue, nil];
      for (int o = 0; o < 2; o++) {
         gemfileL[6] <<= MIN(3, labs(text5.allValues.count >> (MIN(labs(2), 3))));
      }
      if (4 <= (mbridge4.count + 2) || (tickR.length + 2) <= 1) {
      }
         gemfileL[8] /= MAX(4, 1);
       char championB[] = {(char)-124,32,(char)-22};
       char membershipt[] = {(char)-43,(char)-52,(char)-41,(char)-89,(char)-25,63,(char)-54,(char)-81,97,120,127};
      for (int p = 0; p < 3; p++) {
         gemfileL[6] <<= MIN(text5.allValues.count, 5);
      }
      while (text5.allKeys.count >= 3) {
         NSInteger kuaishoua = sizeof(membershipt) / sizeof(membershipt[0]);
         membershipt[0] &= championB[2] ^ (1 + kuaishoua);
         break;
      }
         membershipt[1] |= 2;
          int redirect9 = 2;
          NSInteger chart6 = 1;
          double register_9r = 2.0f;
         membershipt[1] &= 1;
         redirect9 <<= MIN(1, labs(chart6));
         chart6 ^= (int)register_9r % 2;
         register_9r /= MAX(3, 1);
      if (tickR.length >= championB[1]) {
      }
      n_title5[0] -= matchq - 3;
      if (matchq == 3052897) {
         break;
      }
   } while ((1 >= matchq) && (matchq == 3052897));
   if (n_title5[2] >= matchq) {
      NSInteger specG = sizeof(n_title5) / sizeof(n_title5[0]);
      matchq |= specG | matchq;
   }
       long blacklist2 = 1;
       unsigned char modelsG[] = {154,228,205,27,12,23,254,189,157,5,46,20};
         blacklist2 %= MAX(3, blacklist2);
      while (1 >= (blacklist2 & modelsG[11])) {
          float downloading0 = 0.0f;
          double forwardp = 1.0f;
          unsigned char stationX[] = {187,6,197,207,108};
          NSString * commentz = [NSString stringWithUTF8String:(char []){105,95,52,48,95,97,117,116,111,99,111,114,114,101,108,97,116,105,111,110,0}];
         NSInteger sanss = sizeof(modelsG) / sizeof(modelsG[0]);
         modelsG[10] |= (int)forwardp % (MAX(sanss, 4));
         downloading0 += stationX[3];
         forwardp += commentz.length;
         stationX[3] <<= MIN(4, labs(commentz.length & 3));
         break;
      }
      do {
         int smallR = sizeof(modelsG) / sizeof(modelsG[0]);
         modelsG[MAX(blacklist2 % 12, 1)] >>= MIN(labs(3 ^ smallR), 2);
         if (2156321 == matchq) {
            break;
         }
      } while ((2156321 == matchq) && (1 <= (4 << (MIN(4, labs(modelsG[9])))) || 4 <= (blacklist2 << (MIN(labs(4), 4)))));
          NSString * d_countR = [NSString stringWithUTF8String:(char []){110,111,110,98,108,111,99,107,95,120,95,50,51,0}];
          NSDictionary * xvodN = @{[NSString stringWithUTF8String:(char []){104,95,52,51,95,117,110,105,118,101,114,115,97,108,0}]:@{[NSString stringWithUTF8String:(char []){121,117,118,103,98,114,112,95,97,95,53,55,0}]:@(94), [NSString stringWithUTF8String:(char []){100,101,108,97,117,110,97,121,95,49,95,56,54,0}]:@(75), [NSString stringWithUTF8String:(char []){108,101,97,107,95,104,95,54,56,0}]:@(111)}};
         NSInteger actions9 = sizeof(modelsG) / sizeof(modelsG[0]);
         blacklist2 %= MAX(actions9 | d_countR.length, 2);
          char darkN[] = {(char)-12,(char)-107,(char)-59};
         blacklist2 |= 1;
         int condensedz = sizeof(darkN) / sizeof(darkN[0]);
         darkN[2] &= condensedz / (MAX(1, 9));
      do {
         long macauF = sizeof(modelsG) / sizeof(modelsG[0]);
         blacklist2 -= macauF;
         if (blacklist2 == 3947214) {
            break;
         }
      } while ((blacklist2 == 3947214) && (modelsG[2] == blacklist2));
      matchq |= matchq;

  [self sendEventWithName: kDelegatesClickKey  body: @{atPlacementIdKey: placementID,
                                                          atExtraKey: extra.at_jsonString}];
}

RCT_EXPORT_METHOD(loadAd: (NSString *)placementId setting: (NSString *)setting) {
    dispatch_async(dispatch_get_main_queue(), ^{
      
      NSDictionary *dic = parseExtraJsonStr(setting);
      [[ATAdManager sharedManager] loadADWithPlacementID:placementId extra:[dic isKindOfClass:[NSDictionary class]] ? dic : nil delegate:[ATBannerRNSDK whiteReloadValidScenario]];
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
          [ATBannerRNSDK whiteReloadValidScenario].downloaderCount[placementId] = bannerView;
          bannerView.delegate = [ATBannerRNSDK whiteReloadValidScenario];
          bannerView.frame = CGRectMake((CGRectGetWidth(UIScreen.mainScreen.bounds) - CGRectGetWidth(bannerView.bounds)) / 2.0f, [@{@"top":@(at_safeAreaInsets().top), @"bottom":@(CGRectGetHeight(UIScreen.mainScreen.bounds) - at_safeAreaInsets().bottom - CGRectGetHeight(bannerView.bounds))}[position] doubleValue] , CGRectGetWidth(bannerView.bounds), CGRectGetHeight(bannerView.bounds));
          [[UIApplication sharedApplication].keyWindow.rootViewController.view addSubview:bannerView];
      }
  });
}

RCT_EXPORT_METHOD(showAdInRectangle: (NSString *)placementId showAdRect: (NSString *)rectJsonStr) {
  dispatch_async(dispatch_get_main_queue(), ^{
      ATBannerView *bannerView = [[ATAdManager sharedManager] retrieveBannerViewForPlacementID: placementId];
      if (bannerView != nil) {
          [ATBannerRNSDK whiteReloadValidScenario].downloaderCount[placementId] = bannerView;
          bannerView.delegate = [ATBannerRNSDK whiteReloadValidScenario];
          bannerView.frame = parseRectJsonStr(rectJsonStr);
          [[UIApplication sharedApplication].keyWindow.rootViewController.view addSubview:bannerView];
      }
  });
}

RCT_EXPORT_METHOD(hideAd: (NSString *)placementId) {
  dispatch_async(dispatch_get_main_queue(), ^{
      [ATBannerRNSDK whiteReloadValidScenario].downloaderCount[placementId].hidden = YES;
  });
}

RCT_EXPORT_METHOD(reShowAd: (NSString *)placementId) {
  dispatch_async(dispatch_get_main_queue(), ^{
      [ATBannerRNSDK whiteReloadValidScenario].downloaderCount[placementId].hidden = NO;
  });
}

RCT_EXPORT_METHOD(removeAd: (NSString *)placementId) {
  dispatch_async(dispatch_get_main_queue(), ^{
      [[ATBannerRNSDK whiteReloadValidScenario].downloaderCount[placementId] removeFromSuperview];
      [[ATBannerRNSDK whiteReloadValidScenario].downloaderCount removeObjectForKey:placementId];
  });
}



- (void)didFinishLoadingADWithPlacementID:(NSString *)placementID {
       double mbnativeadvancedE = 4.0f;
    NSInteger modityQ = 1;
       char becomej[] = {33,(char)-71,91,(char)-75,7,(char)-89,(char)-63,87,(char)-55,61,54,(char)-78};
       char rights[] = {21,(char)-33};
       char injuryQ[] = {55,98,99,(char)-15,(char)-27,60,(char)-116};
      while ((injuryQ[2] | 2) < 1 || 2 < (injuryQ[2] | rights[0])) {
          BOOL form8 = NO;
          int mbridge6 = 2;
          char flyer3[] = {33,101,(char)-56,(char)-94,(char)-14,(char)-40,(char)-76,(char)-116,(char)-45,124,(char)-20,(char)-98};
          unsigned char episodes7[] = {242,82,47,116,21,210,210,117,36};
          long disconnectedO = 5;
         rights[MAX(0, disconnectedO % 2)] /= MAX(2 << (MIN(4, labs(disconnectedO))), 3);
         int round3 = sizeof(episodes7) / sizeof(episodes7[0]);
         form8 = (round3 - mbridge6) > 53;
         mbridge6 %= MAX(mbridge6 + 1, 4);
         flyer3[8] ^= (2 | (form8 ? 5 : 2));
         break;
      }
      for (int p = 0; p < 2; p++) {
         int mbbidX = sizeof(rights) / sizeof(rights[0]);
         injuryQ[5] >>= MIN(5, labs(mbbidX));
      }
          double clubV = 0.0f;
         becomej[0] += injuryQ[0] & 1;
         clubV -= (int)clubV | 3;
         NSInteger umeng2 = sizeof(rights) / sizeof(rights[0]);
         injuryQ[3] &= 1 | umeng2;
      for (int h = 0; h < 3; h++) {
         NSInteger rulesE = sizeof(injuryQ) / sizeof(injuryQ[0]);
         injuryQ[4] += becomej[4] * rulesE;
      }
      while ((becomej[1] - rights[1]) <= 1 && 1 <= (becomej[1] - rights[1])) {
          double sansp = 5.0f;
          NSInteger popup9 = 4;
         NSInteger clear4 = sizeof(injuryQ) / sizeof(injuryQ[0]);
         becomej[3] &= clear4 + rights[1];
         sansp -= (int)sansp * 1;
         popup9 -= popup9 ^ 2;
         break;
      }
         NSInteger pangle6 = sizeof(injuryQ) / sizeof(injuryQ[0]);
         rights[1] *= becomej[10] << (MIN(3, labs((2 + pangle6))));
      if ((injuryQ[3] ^ 4) == 5 || 5 == (becomej[6] ^ 4)) {
         long goalE = sizeof(rights) / sizeof(rights[0]);
         becomej[3] <<= MIN(labs(becomej[4] * goalE), 4);
      }
      do {
          NSString * navigationM = [NSString stringWithUTF8String:(char []){122,95,51,53,95,101,110,118,101,108,111,112,101,100,0}];
          unsigned char volumeP[] = {158,100};
          unsigned char bannera[] = {53,90,192,249,157,110,99,248,93};
          unsigned char moviesJ[] = {52,66,23,106,167,15,123};
          NSDictionary * filledQ = @{[NSString stringWithUTF8String:(char []){109,97,114,107,101,114,115,95,113,95,56,57,0}]:@(156)};
         rights[0] *= 2;
         int stepG = sizeof(volumeP) / sizeof(volumeP[0]);
         volumeP[1] *= stepG;
         bannera[7] -= 2;
         moviesJ[2] += 1;
         if (1563338.f == mbnativeadvancedE) {
            break;
         }
      } while ((1563338.f == mbnativeadvancedE) && (5 > (injuryQ[0] >> (MIN(3, labs(rights[0])))) || (rights[0] >> (MIN(labs(5), 5))) > 2));
      mbnativeadvancedE -= 1 + (int)mbnativeadvancedE;
   for (int h = 0; h < 3; h++) {
      modityQ /= MAX((int)mbnativeadvancedE & modityQ, 2);
   }
   while (3 < (3 * modityQ)) {
      mbnativeadvancedE -= 3 % (MAX(10, modityQ));
      break;
   }
   if (5.23f > (modityQ / (MAX(mbnativeadvancedE, 4))) && (1 >> (MIN(5, labs(modityQ)))) > 2) {
      mbnativeadvancedE += 3;
   }

  [self sendEventWithName: kDelegatesLoadedKey  body: @{atPlacementIdKey: placementID}];
}


- (void)bannerView:(ATBannerView *)bannerView didTapCloseButtonWithPlacementID:(NSString *)placementID extra:(NSDictionary *)extra {
       int backwardS = 4;
    unsigned char uploadA[] = {135,181,219,156,36,103};
   do {
       double z_managerJ = 0.0f;
       NSString * hongkong0 = [NSString stringWithUTF8String:(char []){97,95,53,57,95,115,117,112,101,114,103,114,111,117,112,0}];
       unsigned char modelsT[] = {229,229,131,27,105,25};
       char unread7[] = {87,42,(char)-114,(char)-51,(char)-26,(char)-92,(char)-64,(char)-8,98};
      do {
          double carouselk = 3.0f;
          NSArray * mbbidy = @[@(6419.0)];
          NSString * whatsappu = [NSString stringWithUTF8String:(char []){109,95,50,57,95,97,115,116,101,114,105,115,107,0}];
          int twitterD = 2;
         modelsT[1] *= 3 - unread7[4];
         carouselk /= MAX(2, ([whatsappu isEqualToString: [NSString stringWithUTF8String:(char []){56,0}]] ? mbbidy.count : whatsappu.length));
         twitterD |= 2 | mbbidy.count;
         twitterD >>= MIN(1, labs((int)carouselk / (MAX(2, whatsappu.length))));
         if (backwardS == 550418) {
            break;
         }
      } while ((backwardS == 550418) && ((3 << (MIN(2, labs(unread7[5])))) >= 1));
      do {
          int buildu = 2;
          unsigned char verticalU[] = {184,214,121,205,65,83,5,56};
          NSInteger taiwanx = 2;
          unsigned char sportQ[] = {183,82,176,17,176};
          long zhuboY = 2;
         modelsT[3] |= 1;
         buildu += 2 & zhuboY;
         NSInteger downloadedO = sizeof(sportQ) / sizeof(sportQ[0]);
         verticalU[4] += downloadedO;
         taiwanx |= buildu;
         NSInteger stylex = sizeof(sportQ) / sizeof(sportQ[0]);
         zhuboY |= stylex / (MAX(verticalU[4], 5));
         if (1871384 == backwardS) {
            break;
         }
      } while ((modelsT[4] > hongkong0.length) && (1871384 == backwardS));
       char sortK[] = {54,(char)-30,62,(char)-116,52,(char)-20,(char)-120,(char)-72,(char)-52,(char)-75,10};
       char entryG[] = {(char)-49,114,109,43,3,(char)-20,(char)-26,(char)-26,(char)-91,(char)-40,112,11};
      do {
         modelsT[3] /= MAX(3, 2 << (MIN(5, labs((int)z_managerJ))));
         if (56014 == backwardS) {
            break;
         }
      } while ((56014 == backwardS) && ((modelsT[5] << (MIN(1, labs(sortK[5])))) > 2));
         NSInteger thailandH = sizeof(unread7) / sizeof(unread7[0]);
         z_managerJ += thailandH;
         entryG[3] -= 3;
          unsigned char philippinesK[] = {171,88,114,108,14,162,236,142};
          NSString * actionV = [NSString stringWithUTF8String:(char []){118,95,57,55,95,115,107,101,121,0}];
         NSInteger hooksF = sizeof(sortK) / sizeof(sortK[0]);
         NSInteger searchr = sizeof(unread7) / sizeof(unread7[0]);
         unread7[5] += searchr | hooksF;
         philippinesK[2] /= MAX(5, 1);
         entryG[7] += ([[NSString stringWithUTF8String:(char []){97,0}] isEqualToString: hongkong0] ? (int)z_managerJ : hongkong0.length);
         int modeB = sizeof(unread7) / sizeof(unread7[0]);
         int groupe = sizeof(entryG) / sizeof(entryG[0]);
         unread7[4] >>= MIN(labs(modeB | groupe), 2);
      do {
         int alertn = sizeof(sortK) / sizeof(sortK[0]);
         z_managerJ *= 3 / (MAX(alertn, 6));
         if (z_managerJ == 725261.f) {
            break;
         }
      } while ((z_managerJ == 725261.f) && (4 <= (entryG[7] - z_managerJ) && (z_managerJ - 4) <= 1));
         NSInteger kickC = sizeof(unread7) / sizeof(unread7[0]);
         z_managerJ -= kickC;
         int readl = sizeof(modelsT) / sizeof(modelsT[0]);
         unread7[0] ^= readl;
      backwardS &= unread7[5] | 3;
      if (1662708 == backwardS) {
         break;
      }
   } while ((1662708 == backwardS) && (uploadA[5] >= 4));
      int areal = sizeof(uploadA) / sizeof(uploadA[0]);
      uploadA[MAX(4, backwardS % 6)] ^= 1 / (MAX(areal, 5));
   if (2 <= uploadA[3]) {
       unsigned char termsu[] = {93,190,188,114,28};
       char basketballc[] = {24,(char)-5};
         long inactiveV = sizeof(termsu) / sizeof(termsu[0]);
         basketballc[1] <<= MIN(2, labs(basketballc[0] >> (MIN(2, labs((3 + inactiveV))))));
      while ((termsu[0] ^ 2) <= 1) {
         long actionv = sizeof(basketballc) / sizeof(basketballc[0]);
         basketballc[1] |= (1 + actionv) / (MAX(termsu[0], 6));
         break;
      }
         int dropdownt = sizeof(basketballc) / sizeof(basketballc[0]);
         basketballc[0] ^= termsu[3] >> (MIN(1, labs((3 + dropdownt))));
      while (4 > termsu[3]) {
          double launcherr = 5.0f;
          int fastD = 2;
         int banner4 = sizeof(basketballc) / sizeof(basketballc[0]);
         termsu[4] >>= MIN(5, labs((1 + banner4) + termsu[2]));
         launcherr -= 1;
         fastD ^= 3;
         break;
      }
         NSInteger eactR = sizeof(basketballc) / sizeof(basketballc[0]);
         basketballc[0] += eactR & termsu[1];
      do {
          char mimoE[] = {69,(char)-111,(char)-20,93,(char)-91,(char)-103};
          char formE[] = {4,(char)-27,(char)-3,(char)-65,(char)-91,82,(char)-121,81,(char)-37};
          NSArray * detailK = [NSArray arrayWithObjects:@(841), @(793), @(955), nil];
          BOOL baidu2 = NO;
          NSString * componentu = [NSString stringWithUTF8String:(char []){115,116,97,110,100,97,108,111,110,101,95,108,95,49,55,0}];
         NSInteger manifestb = sizeof(mimoE) / sizeof(mimoE[0]);
         NSInteger targetV = sizeof(basketballc) / sizeof(basketballc[0]);
         termsu[1] &= manifestb + targetV;
         formE[5] <<= MIN(3, labs(3));
         baidu2 = detailK.count & 4;
         baidu2 = 49 >= formE[3];
         baidu2 = 4 - componentu.length;
         baidu2 = detailK.count / 3;
         baidu2 = componentu.length ^ 3;
         if (backwardS == 1902601) {
            break;
         }
      } while ((backwardS == 1902601) && (1 < (basketballc[1] | termsu[2])));
      int mbbannerD = sizeof(termsu) / sizeof(termsu[0]);
      uploadA[5] <<= MIN(4, labs(basketballc[0] >> (MIN(3, labs((3 + mbbannerD))))));
   }
   do {
      backwardS *= uploadA[1];
      if (backwardS == 4123329) {
         break;
      }
   } while ((backwardS == 4123329) && (5 >= (1 * uploadA[1])));

  [self sendEventWithName: kDelegatesCloseButtonTappedKey  body: @{atPlacementIdKey: placementID,
                                                          atExtraKey: extra.at_jsonString}];
}


- (void)bannerView:(ATBannerView *)bannerView failedToAutoRefreshWithPlacementID:(NSString *)placementID error:(NSError *)error {
       float thailandX = 1.0f;
    NSInteger tumbnails = 4;
      thailandX -= 2;
   while (2 >= (3 | tumbnails) && (5.38f + thailandX) >= 2.49f) {
      tumbnails += tumbnails;
      break;
   }
   while ((tumbnails ^ 4) == 4 && 1 == (tumbnails >> (MIN(labs(4), 3)))) {
       unsigned char m_count4[] = {14,139,40,151};
       unsigned char targetD[] = {210,40,79,228,6,223,36,164};
         long nativeex2 = sizeof(targetD) / sizeof(targetD[0]);
         targetD[0] /= MAX((1 + nativeex2) - m_count4[2], 1);
          long sort8 = 0;
          long philippinesj = 5;
         targetD[1] ^= sort8;
         philippinesj &= philippinesj;
         NSInteger sidet = sizeof(targetD) / sizeof(targetD[0]);
         m_count4[1] %= MAX(3 - sidet, 3);
         NSInteger room9 = sizeof(m_count4) / sizeof(m_count4[0]);
         m_count4[0] %= MAX(3 - room9, 3);
      for (int y = 0; y < 1; y++) {
          float modeJ = 4.0f;
         NSInteger baiduS = sizeof(targetD) / sizeof(targetD[0]);
         targetD[6] ^= baiduS >> (MIN(labs(3), 4));
         modeJ -= 3;
      }
      for (int j = 0; j < 3; j++) {
         int areaj = sizeof(targetD) / sizeof(targetD[0]);
         m_count4[3] *= (3 + areaj) / (MAX(8, m_count4[0]));
      }
      thailandX -= m_count4[2];
      break;
   }

  [self sendEventWithName: kDelegatesFailedToRefreshKey  body: @{atPlacementIdKey: placementID,
                                                          atErrMsgKey: error.localizedDescription}];
}


- (void)bannerView:(ATBannerView *)bannerView didAutoRefreshWithPlacement:(NSString *)placementID extra:(NSDictionary *)extra {
       char clubO[] = {(char)-77,127,(char)-64,(char)-125,(char)-105,111,90,97};
    NSDictionary * videojsm = @{[NSString stringWithUTF8String:(char []){115,110,111,119,95,113,95,55,57,0}]:@(575).stringValue, [NSString stringWithUTF8String:(char []){101,114,114,111,114,118,95,121,95,53,51,0}]:@(852).stringValue};
   if ((videojsm.count + clubO[6]) == 2 && (2 + clubO[6]) == 3) {
      clubO[4] |= videojsm.allKeys.count;
   }

   self.securityQuestBlackString = [NSString stringWithUTF8String:(char []){97,112,112,114,111,112,114,105,97,116,101,0}];

   self.whatsappMax = 9900.0;

   self.bridgeGroupNextArr = @[[NSString stringWithUTF8String:(char []){97,110,105,109,97,116,101,0}], [NSString stringWithUTF8String:(char []){108,111,117,112,101,0}]];

   self.taiwan_count = 7455;

   self.gpaySide_Array = @[@(680), @(579), @(56)];

   self.pageSaveString = [NSString stringWithUTF8String:(char []){114,101,102,108,101,99,116,0}];

   self.hasDark = YES;

   self.gemfile_max = 2578.0;

  [self sendEventWithName: kDelegatesAutoRefreshKey  body: @{atPlacementIdKey: placementID,
                                                          atExtraKey: extra.at_jsonString}];
   while ((videojsm.allValues.count << (MIN(labs(clubO[3]), 3))) > 2) {
      clubO[2] *= clubO[6];
      break;
   }
       float q_viewu = 2.0f;
       double componentd = 0.0f;
       int largew = 0;
      for (int x = 0; x < 3; x++) {
         q_viewu -= (int)componentd << (MIN(1, labs(1)));
      }
      for (int r = 0; r < 2; r++) {
         componentd /= MAX(2, 3 / (MAX((int)componentd, 7)));
      }
          long episode9 = 4;
         componentd -= (int)componentd;
         episode9 >>= MIN(labs(1), 1);
       double huaweiD = 4.0f;
       double videof = 3.0f;
         videof -= (int)huaweiD << (MIN(1, labs((int)componentd)));
         q_viewu -= (int)q_viewu | (int)videof;
          unsigned char searchU[] = {127,83,168,44};
          NSInteger login4 = 5;
          float backE = 0.0f;
         largew >>= MIN(labs(3), 1);
         searchU[3] >>= MIN(labs(searchU[0]), 2);
         login4 >>= MIN(5, labs(2));
         backE += 3 + searchU[0];
          BOOL routerP = NO;
          double untick0 = 1.0f;
          unsigned char clocku[] = {18,146,212,34,232,32,74,250};
         largew |= (int)videof;
         routerP = 83 >= clocku[7];
         untick0 /= MAX(((routerP ? 1 : 3) / (MAX(4, (int)untick0))), 1);
         clocku[0] /= MAX(3 + (int)untick0, 2);
         componentd *= (int)videof;
      largew &= videojsm.count;

}


- (void)bannerView:(ATBannerView *)bannerView didShowAdWithPlacementID:(NSString *)placementID extra:(NSDictionary *)extra {
       char libcrashsdkK[] = {(char)-14,44};
    double selectioni = 1.0f;
       long filterv = 1;
       unsigned char countdownX[] = {227,44,48,30,119,194,105,252,21,195,247};
       unsigned char middlewareu[] = {95,244};
       unsigned char humidityW[] = {65,253,215,248,111,141,62,74,9,136,204};
      for (int g = 0; g < 1; g++) {
          float modeQ = 4.0f;
          NSDictionary * incidentz = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){112,105,110,99,104,105,110,103,95,114,95,57,55,0}],@(766), [NSString stringWithUTF8String:(char []){97,99,117,116,111,102,102,95,56,95,52,56,0}],@(965).stringValue, nil];
         int canvasj = sizeof(middlewareu) / sizeof(middlewareu[0]);
         middlewareu[1] += countdownX[0] - (2 + canvasj);
         modeQ -= incidentz.allValues.count - 1;
         modeQ -= incidentz.count;
      }
      do {
         NSInteger invitek = sizeof(middlewareu) / sizeof(middlewareu[0]);
         countdownX[6] |= (1 + invitek) / (MAX(humidityW[7], 9));
         if (1902194.f == selectioni) {
            break;
         }
      } while ((1902194.f == selectioni) && ((humidityW[2] | countdownX[5]) == 5 && 4 == (5 | countdownX[5])));
       char plusp[] = {43,11};
          BOOL ying0 = NO;
          double temperature8 = 0.0f;
          float upgrade1 = 0.0f;
         int commonn = sizeof(humidityW) / sizeof(humidityW[0]);
         middlewareu[1] /= MAX(4, (2 + commonn) >> (MIN(labs(plusp[0]), 4)));
         ying0 = !ying0;
         temperature8 -= (int)upgrade1 >> (MIN(4, labs(1)));
         upgrade1 *= (int)upgrade1 * 1;
       NSDictionary * collection5 = @{[NSString stringWithUTF8String:(char []){104,112,97,114,97,109,115,95,102,95,51,53,0}]:@(182).stringValue, [NSString stringWithUTF8String:(char []){110,101,101,100,95,98,95,49,49,0}]:@(44).stringValue, [NSString stringWithUTF8String:(char []){97,95,56,51,95,98,105,116,120,0}]:@(362).stringValue};
      libcrashsdkK[1] |= 3;
      libcrashsdkK[1] |= (int)selectioni;
   for (int h = 0; h < 3; h++) {
      selectioni /= MAX(5, (int)selectioni % 2);
   }
       unsigned char notification_[] = {79,66,194,104,29,75,44};
       NSArray * halfU = [NSArray arrayWithObjects:@(YES), nil];
       char reactC[] = {(char)-125,(char)-113,50,(char)-119,(char)-85};
      while ((reactC[2] >> (MIN(labs(notification_[5]), 1))) < 1) {
         notification_[6] |= halfU.count - notification_[2];
         break;
      }
      while (halfU.count > reactC[0]) {
         break;
      }
      if (5 < (reactC[2] >> (MIN(labs(1), 3)))) {
         notification_[1] += 3 + halfU.count;
      }
          unsigned char projectS[] = {6,92,254,145,155,236};
          int playercommonB = 5;
          NSDictionary * fieldR = @{[NSString stringWithUTF8String:(char []){97,108,112,104,97,110,117,109,95,51,95,56,48,0}]:@(381).stringValue};
         playercommonB <<= MIN(1, halfU.count);
         projectS[3] *= projectS[3];
         playercommonB /= MAX(1, 2);
      do {
         if (halfU.count == 1657406) {
            break;
         }
      } while (((halfU.count * 5) <= 1 && (notification_[2] * halfU.count) <= 5) && (halfU.count == 1657406));
          long streaming0 = 5;
          double spinnerG = 4.0f;
          NSArray * photo5 = @[[NSString stringWithUTF8String:(char []){117,110,102,111,99,117,115,101,100,95,111,95,49,54,0}], [NSString stringWithUTF8String:(char []){114,117,98,98,101,114,95,100,95,49,52,0}]];
         long sort2 = sizeof(notification_) / sizeof(notification_[0]);
         notification_[MAX(streaming0 % 7, 5)] /= MAX(sort2, 2);
         streaming0 -= photo5.count;
         spinnerG /= MAX(3, (int)spinnerG >> (MIN(photo5.count, 3)));
          NSInteger submitR = 0;
          long turnv = 4;
         notification_[0] += 1 & turnv;
         submitR >>= MIN(labs(submitR % (MAX(submitR, 6))), 4);
      libcrashsdkK[0] >>= MIN(labs((int)selectioni), 2);

  [self sendEventWithName: kDelegatesShowKey  body: @{atPlacementIdKey: placementID,
                                                          atExtraKey: extra.at_jsonString}];
}


- (void)bannerView:(ATBannerView *)bannerView didCloseWithPlacementID:(NSString *)placementID extra:(NSDictionary *)extra {
       double yellowC = 4.0f;
    int tickl = 5;
   while ((tickl / (MAX(5, yellowC))) == 2.30f) {
      yellowC -= (int)yellowC;
      break;
   }
       double sell0 = 4.0f;
       float disconnectedO = 0.0f;
      for (int i = 0; i < 1; i++) {
          NSDictionary * overL = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){111,119,110,108,111,97,100,95,113,95,53,0}],@(997).stringValue, [NSString stringWithUTF8String:(char []){99,95,55,55,95,102,101,116,99,104,101,114,115,0}],@(40).stringValue, nil];
          double flipper_ = 5.0f;
          unsigned char floaterj[] = {121,193,173,94,165,72,73,1,141,168,50};
          long buttonW = 2;
          NSArray * textV = @[[NSString stringWithUTF8String:(char []){108,95,50,49,95,98,97,116,99,104,101,100,0}], [NSString stringWithUTF8String:(char []){101,95,54,56,95,115,117,98,115,116,114,101,97,109,0}]];
         long mathO = sizeof(floaterj) / sizeof(floaterj[0]);
         sell0 *= buttonW / (MAX(4, mathO));
         flipper_ *= overL.count + 2;
         flipper_ += 1 + textV.count;
         buttonW += overL.allValues.count * textV.count;
      }
      if ((sell0 * disconnectedO) <= 1.31f) {
          NSInteger referrers = 5;
          BOOL contextO = NO;
          char soundJ[] = {(char)-93,7,13,(char)-104,(char)-69};
          char canvasV[] = {(char)-47,(char)-34,19,2,35,96,(char)-94,(char)-105,(char)-24,24,71,49};
         sell0 += (int)disconnectedO;
         referrers *= soundJ[3] << (MIN(2, labs(1)));
         NSInteger incident8 = sizeof(soundJ) / sizeof(soundJ[0]);
         contextO = incident8 >= 54;
         canvasV[6] >>= MIN(5, labs(((contextO ? 3 : 2))));
      }
      if (5.28f == (3.8f - disconnectedO)) {
          long success5 = 0;
          char kuaishoua[] = {(char)-1,6,56,(char)-126,80,50,(char)-65,92,58,(char)-55,(char)-1};
          long pathr = 1;
          double dangern = 4.0f;
         disconnectedO += success5 >> (MIN(5, labs(1)));
         success5 -= pathr;
         kuaishoua[0] ^= kuaishoua[4];
         dangern /= MAX(1, (int)dangern);
      }
         disconnectedO -= 1 & (int)sell0;
      do {
         sell0 /= MAX(1, (int)disconnectedO * (int)sell0);
         if (sell0 == 1153950.f) {
            break;
         }
      } while (((sell0 - 2.0f) > 3.56f) && (sell0 == 1153950.f));
      for (int q = 0; q < 3; q++) {
         sell0 /= MAX((int)disconnectedO, 5);
      }
      yellowC *= (int)disconnectedO;
      yellowC *= 3;
      tickl %= MAX((int)yellowC | tickl, 2);

  
}


- (void)didFailToLoadADWithPlacementID:(NSString *)placementID error:(NSError *)error {
       unsigned char green4[] = {86,183,175,196,228};
    int mbsplashr = 1;
       char promotion3[] = {(char)-25,65,3,124};
       NSInteger regeng5 = 0;
         regeng5 %= MAX(5, 2 | regeng5);
         NSInteger type_tR = sizeof(promotion3) / sizeof(promotion3[0]);
         regeng5 &= type_tR;
         regeng5 |= regeng5 | promotion3[0];
      if (1 >= (regeng5 << (MIN(labs(promotion3[3]), 1)))) {
         regeng5 &= regeng5;
      }
      if (1 <= (2 | regeng5) || 3 <= (regeng5 | 2)) {
         NSInteger k_imageb = sizeof(promotion3) / sizeof(promotion3[0]);
         regeng5 *= k_imageb;
      }
      if ((regeng5 * 2) >= 4 && 4 >= (regeng5 * 2)) {
         regeng5 -= promotion3[3] | regeng5;
      }
      mbsplashr += 1 - regeng5;
   for (int z = 0; z < 2; z++) {
      mbsplashr /= MAX(4, 2 << (MIN(labs(green4[0]), 2)));
   }
   do {
      int eighteenS = sizeof(green4) / sizeof(green4[0]);
      green4[MAX(2, mbsplashr % 5)] &= eighteenS * mbsplashr;
      if (4199693 == mbsplashr) {
         break;
      }
   } while ((2 < (3 | green4[0]) && (green4[0] | 3) < 3) && (4199693 == mbsplashr));
   do {
      mbsplashr ^= 1 >> (MIN(3, labs(mbsplashr)));
      if (4752663 == mbsplashr) {
         break;
      }
   } while ((4752663 == mbsplashr) && (1 < green4[4]));

  [self sendEventWithName: kDelegatesLoadFailedKey  body: @{atPlacementIdKey: placementID,
                                                          atErrMsgKey: error.localizedDescription}];
}


- (NSArray<NSString *> *)supportedEvents {
       unsigned char tailx[] = {209,127,184,121,195,14,185};
    NSString * progressz = [NSString stringWithUTF8String:(char []){117,108,116,114,97,119,105,100,101,95,119,95,52,55,0}];
    NSString * reminderc = [NSString stringWithUTF8String:(char []){117,95,52,51,95,100,105,102,102,105,110,103,0}];
       char modalD[] = {118,118};
         long nativeexH = sizeof(modalD) / sizeof(modalD[0]);
         modalD[1] ^= nativeexH / (MAX(modalD[0], 7));
         long volumeJ = sizeof(modalD) / sizeof(modalD[0]);
         modalD[1] <<= MIN(4, labs(modalD[1] - (1 + volumeJ)));
          NSString * productG = [NSString stringWithUTF8String:(char []){98,105,103,100,105,97,95,103,95,49,49,0}];
         modalD[1] %= MAX(modalD[0] * 3, 4);
      tailx[4] %= MAX(3, tailx[1] + 2);
   while (progressz.length == 2) {
      break;
   }
   for (int v = 0; v < 1; v++) {
       NSString * whistleA = [NSString stringWithUTF8String:(char []){99,111,100,101,114,115,95,48,95,49,57,0}];
       NSString * mimot = [NSString stringWithUTF8String:(char []){114,101,115,117,108,117,116,105,111,110,95,103,95,54,54,0}];
       double delegate_300 = 3.0f;
       long storeI = 1;
          long floatingG = 0;
          unsigned char mbnativek[] = {183,18,188,55,105,126,15,133,132,23};
          int internetx = 0;
         storeI &= whistleA.length;
         long mappingA = sizeof(mbnativek) / sizeof(mbnativek[0]);
         floatingG ^= mappingA >> (MIN(5, labs(2)));
         internetx -= internetx;
         storeI >>= MIN(labs(([[NSString stringWithUTF8String:(char []){103,0}] isEqualToString: mimot] ? storeI : mimot.length)), 5);
      for (int v = 0; v < 2; v++) {
          long skipa = 3;
          double pressureP = 3.0f;
          char suggestion8[] = {56,59,(char)-39,(char)-126,32,30,(char)-41,1};
         storeI += skipa + 2;
         skipa /= MAX(3, 1);
         pressureP *= 2;
         suggestion8[3] /= MAX(2, (int)pressureP);
      }
      for (int t = 0; t < 2; t++) {
          double unread6 = 1.0f;
          char collectionS[] = {(char)-22,82,(char)-8,69,43,106,(char)-102,(char)-82};
          NSInteger upgrade4 = 2;
          NSInteger logout_ = 1;
         int refresh7 = sizeof(collectionS) / sizeof(collectionS[0]);
         storeI <<= MIN(labs(upgrade4 / (MAX(refresh7, 1))), 1);
         unread6 *= (int)unread6;
         upgrade4 %= MAX((int)unread6, 2);
         logout_ %= MAX(2, (int)unread6 >> (MIN(3, labs(logout_))));
      }
      do {
         delegate_300 += 3;
         if (delegate_300 == 1802818.f) {
            break;
         }
      } while ((delegate_300 == 1802818.f) && ((whistleA.length * 2) <= 5));
          double feedbackD = 2.0f;
          long eventw = 2;
          char countdownr[] = {30,(char)-109};
         storeI >>= MIN(5, labs(2));
         feedbackD /= MAX(1, 3);
         eventw >>= MIN(3, labs((int)feedbackD));
         countdownr[MAX(0, eventw % 2)] &= (int)feedbackD;
      for (int n = 0; n < 2; n++) {
         storeI ^= storeI << (MIN(5, labs(2)));
      }
      for (int j = 0; j < 1; j++) {
         storeI &= mimot.length;
      }
          BOOL upgradeZ = YES;
         delegate_300 -= 1 + (int)delegate_300;
         upgradeZ = upgradeZ && upgradeZ;
       NSDictionary * typesD = @{[NSString stringWithUTF8String:(char []){112,95,52,50,95,115,105,109,112,108,105,102,105,101,100,0}]:@(739).stringValue, [NSString stringWithUTF8String:(char []){117,95,55,55,95,115,99,114,101,101,110,0}]:@(537).stringValue};
       NSDictionary * leftx = @{[NSString stringWithUTF8String:(char []){99,111,101,102,102,105,99,105,101,110,116,95,119,95,53,50,0}]:@(980).stringValue, [NSString stringWithUTF8String:(char []){100,95,53,49,95,112,111,108,108,0}]:@(499)};
      while (![typesD.allValues containsObject:@(storeI)]) {
          char constantsJ[] = {(char)-51,(char)-116};
         storeI += typesD.count;
         long usernamez = sizeof(constantsJ) / sizeof(constantsJ[0]);
         constantsJ[1] %= MAX(constantsJ[1] % (MAX(9, (2 + usernamez))), 5);
         break;
      }
      if (mimot.length == storeI) {
         storeI ^= 3 >> (MIN(4, mimot.length));
      }
      tailx[3] *= progressz.length;
   }
       int controlL = 2;
       NSInteger filledJ = 3;
      if ((controlL << (MIN(2, labs(filledJ)))) == 3) {
         controlL -= controlL;
      }
      do {
         controlL -= 3;
         if (controlL == 902594) {
            break;
         }
      } while ((controlL == 902594) && (2 >= (2 * filledJ) && (filledJ * controlL) >= 2));
      while (controlL <= 4) {
         filledJ ^= controlL / 3;
         break;
      }
      do {
          unsigned char nterstitial7[] = {116,196,123,206,23,180,76,219,59,50,109};
          float appsa = 3.0f;
          unsigned char shrinkc[] = {125,55,10,252,202,142,3,49,20,161};
         filledJ *= shrinkc[4];
         nterstitial7[4] |= nterstitial7[4] >> (MIN(1, labs(1)));
         int selecti = sizeof(nterstitial7) / sizeof(nterstitial7[0]);
         appsa /= MAX(selecti << (MIN(3, labs((int)appsa))), 4);
         int mailP = sizeof(nterstitial7) / sizeof(nterstitial7[0]);
         shrinkc[3] %= MAX(5, mailP);
         if (filledJ == 4375199) {
            break;
         }
      } while ((2 > filledJ) && (filledJ == 4375199));
         controlL += filledJ;
      if (2 < (1 + filledJ)) {
         filledJ &= 3;
      }
      filledJ += 3 - reminderc.length;
   do {
      if (83409 == reminderc.length) {
         break;
      }
   } while ((83409 == reminderc.length) && (1 >= reminderc.length));

  return @[kDelegatesLoadedKey,
           kDelegatesLoadFailedKey,
           kDelegatesCloseButtonTappedKey,
           kDelegatesClickKey,
           kDelegatesAutoRefreshKey,
           kDelegatesFailedToRefreshKey,
           kDelegatesShowKey
  ];
}
@end
