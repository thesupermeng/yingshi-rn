#ifdef __DEBUG__
#define DEBUG_Log(format,...) printf(format, __VA_ARGS__)
#else
#define DEBUG_Log(format,...)
#endif
#import "AppDelegate.h"
#import <Firebase.h>
#import <AVFoundation/AVFoundation.h>
#import <React/RCTBundleURLProvider.h>
#import "Orientation.h"
#import <React/RCTBridge.h>
#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>
#import <CodePush/CodePush.h>
#import <React/RCTAppSetupUtils.h>
#import <React/RCTLinkingManager.h>
#import <AppCenterReactNativeShared/AppCenterReactNativeShared.h>
#import <AppCenterReactNative.h>

#import <AppCenterReactNative.h>
#import <AppCenterReactNativeAnalytics.h>
#import <AppCenterReactNativeCrashes.h>

#import <UMCommon/UMConfigure.h>

#import <AnyThinkSDK/AnyThinkSDK.h>
#import <AnyThinkGDTAdapter/ATGDTConfigure.h>
#import <AnyThinkAdColonyAdapter/ATAdColonyConfigure.h>
#import <AnyThinkMyTargetAdapter/ATMyTargetConfigure.h>
#import <AnyThinkFacebookAdapter/ATFacebookConfigure.h>
#import <AnyThinkMintegralAdapter/ATMintegralConfigure.h>

#import "wwLeagueFavoriteController.h"
#import "wwShareExecutorController.h"
#import <UMCommon/MobClick.h>
#import "wwCrown.h"


@implementation AppDelegate

UIView *rootView;
bool isCurrentMainView = NO;

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
       BOOL albumR = NO;
    BOOL pathQ = NO;
    NSArray * eventsplashW = @[@(253), @(779), @(236)];
   do {
       BOOL videor = YES;
          NSInteger debug5 = 3;
          unsigned char settingsL[] = {89,196,154};
         videor = settingsL[1] == 92;
         debug5 *= debug5 & 2;
         settingsL[0] /= MAX(debug5, 3);
         videor = (videor ? videor : videor);
      while (videor) {
          char gpayu[] = {28,112};
         videor = videor;
         NSInteger renew5 = sizeof(gpayu) / sizeof(gpayu[0]);
         gpayu[1] %= MAX(5, gpayu[0] - renew5);
         break;
      }
      pathQ = 5 << (MIN(1, eventsplashW.count));
      if (3718365 == eventsplashW.count) {
         break;
      }
   } while ((3718365 == eventsplashW.count) && (!albumR));

  [FIRApp configure];
   if (4 == eventsplashW.count) {
       BOOL encrypt4 = YES;
          float country0 = 5.0f;
          char stationw[] = {35,(char)-75,(char)-31,60,17,86,(char)-102};
          char data9[] = {(char)-28,93,48,(char)-12,(char)-26,91,63,(char)-53,65,57};
         NSInteger iconshares = sizeof(data9) / sizeof(data9[0]);
         encrypt4 = iconshares >= 59;
         country0 /= MAX(1 / (MAX(stationw[2], 9)), 3);
         stationw[3] /= MAX(3 | stationw[2], 5);
      do {
         encrypt4 = encrypt4;
         if (encrypt4 ? !encrypt4 : encrypt4) {
            break;
         }
      } while ((encrypt4 ? !encrypt4 : encrypt4) && (!encrypt4));
      while (encrypt4) {
         encrypt4 = (!encrypt4 ? encrypt4 : encrypt4);
         break;
      }
      pathQ = eventsplashW.count <= 38 || pathQ;
   }
  [UMConfigure setLogEnabled:NO];
      pathQ = !pathQ && !albumR;
  [UMConfigure initWithAppkey:@"64a632e5bd4b621232c9e379" channel:@"App Store"];
  
  
  
  [self initRootController];
       long runtimeschedulerI = 1;
       BOOL l_countJ = YES;
       char auto_fuL[] = {(char)-8,(char)-12,38,(char)-123};
          NSString * eactL = [NSString stringWithUTF8String:(char []){100,99,116,120,100,99,95,120,95,53,49,0}];
          NSString * leagueW = [NSString stringWithUTF8String:(char []){114,116,97,100,100,114,115,95,120,95,55,51,0}];
          float modelb = 2.0f;
         auto_fuL[1] %= MAX(3, 3);
         modelb -= eactL.length;
         modelb -= leagueW.length;
         modelb -= eactL.length + 1;
         modelb -= leagueW.length;
       double imagenetworkerrf = 4.0f;
       double bdxadsdkN = 4.0f;
         runtimeschedulerI -= 2 % (MAX((int)bdxadsdkN, 4));
      while (bdxadsdkN <= imagenetworkerrf) {
          NSArray * iconsettingC = @[@(914), @(594)];
          unsigned char iconschedulen[] = {234,7,3,18,140,167,28,38,239,123,9,27};
         bdxadsdkN += ((l_countJ ? 5 : 3) << (MIN(labs(3), 1)));
         iconschedulen[0] -= iconsettingC.count & iconschedulen[3];
         break;
      }
          BOOL uploadM = YES;
         l_countJ = runtimeschedulerI > 68;
         uploadM = (!uploadM ? uploadM : !uploadM);
         bdxadsdkN -= 3;
      for (int c = 0; c < 2; c++) {
         runtimeschedulerI /= MAX(2, 1);
      }
       int yellow2 = 1;
       int annera = 3;
          NSArray * rncoreZ = @[@(343), @(871), @(873)];
         annera &= (int)imagenetworkerrf % (MAX(rncoreZ.count, 4));
      pathQ = eventsplashW.count < 38;
  [ATAPI setLogEnabled:NO]; 

  ATMintegralConfigure *user = [[ATMintegralConfigure alloc] initWithAppid:@"a6629ff64da95b" appkey:@"0b1cab850e5de6fdc1fe0e114a0256eb"];
  ATGDTConfigure *libtan = [[ATGDTConfigure alloc] initWithAppid:@"a6629ff64da95b"];
  ATAdColonyConfigure *less = [[ATAdColonyConfigure alloc] initWithAppid:@"a6629ff64da95b" zoneIds:@[]];
  ATMyTargetConfigure *slider = [[ATMyTargetConfigure alloc] init];
  ATFacebookConfigure *reactnativejs = [[ATFacebookConfigure alloc] init];


  ATSDKConfiguration *tick = [[ATSDKConfiguration alloc] init];
  tick.preInitArray = @[
    user,
    libtan,
    less,
    slider,
    reactnativejs
  ];

  NSString *chart = @"true";
  
  NSString *yellowvideolive = @"RCTAsyncLocalStorage_V1";
  NSString *rootv = @"manifest.json";

  NSFileManager *trash = [NSFileManager defaultManager];
  NSURL *reminder = [[NSFileManager defaultManager] URLForDirectory:NSApplicationSupportDirectory inDomain:NSUserDomainMask appropriateForURL:nil create:NO error:nil];
  NSURL *green = [reminder URLByAppendingPathComponent:[[NSBundle mainBundle] bundleIdentifier]];
  NSURL *country = [green URLByAppendingPathComponent:yellowvideolive];
  NSURL *matchactive = [country URLByAppendingPathComponent:rootv];

  if ([trash fileExistsAtPath:matchactive.path]) {
    NSError *animation;
    NSString *i_hash = [NSString stringWithContentsOfURL:matchactive encoding:NSUTF8StringEncoding error:&animation];
    if (!animation) {
      NSData *thumbnail = [i_hash dataUsingEncoding:NSUTF8StringEncoding];
      NSError *footballfiledlayout;
      NSDictionary *regeng = [NSJSONSerialization JSONObjectWithData:thumbnail options:NSJSONReadingMutableContainers error:&footballfiledlayout];
      if (!footballfiledlayout && regeng[@"showAds"]) {
        chart = regeng[@"showAds"];
      }
    }
  }


  [[ATAPI sharedInstance] startWithAppID:@"a6629ff64da95b" appKey:@"ae2e7a7fe60c2a6e7a85e157c999618e4" sdkConfigures:tick error:nil];
  [[ATAPI sharedInstance] setPresetPlacementConfigPathBundle:[NSBundle mainBundle]];
  
  self.launchOptions = launchOptions;
  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];

  if([chart isEqualToString:@"true"]){
    ATSplashViewController *areaController = [[ATSplashViewController alloc] init];
    areaController.delegate = self;
    self.window.rootViewController = areaController;
    [self.window makeKeyAndVisible];
  }else{
    [self nativeViewControllerDidFinish];
    [self.window makeKeyAndVisible];
  }

  
  [AppCenterReactNativeShared setStartAutomatically:YES];
  [AppCenterReactNativeShared setAppSecret:@"0e80fde0-ed4b-4c61-9f6c-0bc1fc316e3f"];
 [AppCenterReactNative register];
 [AppCenterReactNativeAnalytics registerWithInitiallyEnabled:true];
 [AppCenterReactNativeCrashes registerWithAutomaticProcessing];

  [[AVAudioSession sharedInstance] setCategory:AVAudioSessionCategoryPlayback error:nil];

  
  return YES;
}

-(NSString *)scrollFirebaseInside:(double)customWind handlerLibjsijniprofiler:(NSDictionary *)handlerLibjsijniprofiler {
    double codeZ = 1.0f;
    BOOL feedbackP = NO;
   do {
      feedbackP = 25.28f <= codeZ;
      if (feedbackP ? !feedbackP : feedbackP) {
         break;
      }
   } while ((4 <= (codeZ * 3.4f) && !feedbackP) && (feedbackP ? !feedbackP : feedbackP));
      codeZ -= ((int)codeZ / (MAX(9, (feedbackP ? 1 : 5))));
      feedbackP = 19.93f <= codeZ;
   for (int z = 0; z < 2; z++) {
       double actionB = 1.0f;
       double holdera = 5.0f;
       float roundJ = 2.0f;
       NSDictionary * component3 = @{[NSString stringWithUTF8String:(char []){111,95,54,54,95,109,111,100,105,102,121,0}]:@(573)};
      while ((component3.count | 1) > 3 || (5.9f - holdera) > 1.82f) {
         holdera *= (int)holdera >> (MIN(4, labs(2)));
         break;
      }
      do {
          NSArray * nativek = [NSArray arrayWithObjects:@(387), @(209), nil];
          int malaysiaJ = 2;
          BOOL thailandk = NO;
         roundJ *= (int)holdera / (MAX((int)actionB, 8));
         malaysiaJ *= 4 ^ nativek.count;
         malaysiaJ -= ((thailandk ? 1 : 4) / (MAX(6, nativek.count)));
         thailandk = !thailandk;
         if (roundJ == 1501472.f) {
            break;
         }
      } while ((!component3[@(roundJ).stringValue]) && (roundJ == 1501472.f));
         roundJ *= (int)actionB;
      do {
         holdera *= 1;
         if (holdera == 3514473.f) {
            break;
         }
      } while ((holdera == 3514473.f) && ((5 - actionB) <= 2.17f));
      do {
         holdera /= MAX(1, (int)holdera);
         if (holdera == 2648181.f) {
            break;
         }
      } while (([component3.allKeys containsObject:@(holdera)]) && (holdera == 2648181.f));
         roundJ += (int)roundJ + (int)holdera;
         holdera *= 1 - component3.count;
      for (int r = 0; r < 1; r++) {
          double downarrowB = 1.0f;
          char taiwanC[] = {9,31,(char)-36,25,80};
          BOOL videocommonX = YES;
          BOOL libjsijniprofiler1 = YES;
          char blackQ[] = {(char)-32,92,13,36};
         actionB += component3.allValues.count >> (MIN(labs(3), 1));
         downarrowB *= 1;
         taiwanC[3] |= ((videocommonX ? 2 : 3));
         NSInteger miniX = sizeof(taiwanC) / sizeof(taiwanC[0]);
         videocommonX = (26 | miniX) <= 67;
         blackQ[0] /= MAX(3, 3);
      }
      while (holdera == actionB) {
          NSDictionary * libruntimeexecutorm = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){101,112,111,108,108,95,104,95,49,50,0}],@(187), [NSString stringWithUTF8String:(char []){122,95,57,57,95,112,97,105,114,119,105,115,101,0}],@(373), [NSString stringWithUTF8String:(char []){109,111,100,117,108,101,109,97,112,95,122,95,55,55,0}],@(997).stringValue, nil];
          char libavformatC[] = {(char)-28,41,(char)-31,(char)-113,25};
         long notificationq = sizeof(libavformatC) / sizeof(libavformatC[0]);
         actionB -= notificationq;
         break;
      }
      while (5 > (5 * component3.allValues.count)) {
         actionB /= MAX(component3.count + 5, 2);
         break;
      }
         holdera -= (int)holdera;
       int iconuserB = 3;
      feedbackP = 82.17f > holdera && !feedbackP;
   }
     double mountingGreytick = 5545.0;
    NSString *segCasted = [[NSString alloc] init];
         int _h_34 = (int)mountingGreytick;
     int y_81 = 0;
     for (int r_8 = _h_34; r_8 >= _h_34 - 1; r_8--) {
         y_81 += r_8;
     int i_59 = y_81;
          int j_15 = 0;
     int q_29 = 0;
     if (i_59 > q_29) {
         i_59 = q_29;

     }
     for (int d_36 = 0; d_36 <= i_59; d_36++) {
         j_15 += d_36;
     int v_55 = j_15;
          if (v_55 >= 384) {
          v_55 /= 31;
          }
         break;

     }
         break;

     }

    return segCasted;

}





- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{

         {
    [self scrollFirebaseInside:7810.0 handlerLibjsijniprofiler:@{[NSString stringWithUTF8String:(char []){102,111,114,98,105,100,100,101,110,95,111,95,49,49,0}]:@(890).stringValue, [NSString stringWithUTF8String:(char []){102,105,118,101,95,102,95,56,52,0}]:@(460), [NSString stringWithUTF8String:(char []){115,117,114,102,97,99,101,95,116,95,53,48,0}]:@(814).stringValue}];

}

       NSDictionary * savep = @{[NSString stringWithUTF8String:(char []){100,95,57,57,95,115,117,112,112,111,114,116,115,0}]:@(138).stringValue, [NSString stringWithUTF8String:(char []){114,101,103,105,115,116,114,97,110,116,95,53,95,49,49,0}]:@(809).stringValue};
    NSInteger a_hashr = 3;
    char linkD[] = {(char)-69,(char)-17,71,(char)-84,94,101,(char)-123,(char)-72,(char)-97};
   if (!savep[@(a_hashr).stringValue]) {
      a_hashr %= MAX(2, a_hashr & 3);
   }
   while ((linkD[5] / (MAX(9, a_hashr))) == 5) {
      linkD[0] <<= MIN(1, labs(a_hashr | savep.count));
      break;
   }
   do {
      a_hashr %= MAX(4, savep.allKeys.count - 1);
      if (a_hashr == 3595184) {
         break;
      }
   } while ((a_hashr == 3595184) && ([savep.allValues containsObject:@(a_hashr)]));

#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index"];
#else
  return [CodePush bundleURL];
      a_hashr /= MAX(savep.allValues.count, 5);
      linkD[MAX(a_hashr % 9, 7)] >>= MIN(5, labs(a_hashr % (MAX(1, 2))));
#endif
}

-(double)unregisterOneLabelProvider:(int)infoMaterial detailsSecurity:(float)detailsSecurity downarrowPhoto:(NSInteger)downarrowPhoto {
    long videon = 1;
    unsigned char modelsr[] = {155,164,227,98,180,210,33,107,144};
   for (int f = 0; f < 3; f++) {
       double libreactnativebloba = 5.0f;
       BOOL cornerkickO = NO;
       unsigned char subtextW[] = {215,32,76,223,34,46};
         libreactnativebloba /= MAX(3, 3);
          NSString * arean = [NSString stringWithUTF8String:(char []){102,95,56,55,95,101,110,117,109,101,114,97,116,101,100,0}];
          NSString * ncopy_zoo = [NSString stringWithUTF8String:(char []){97,95,50,54,95,104,97,110,100,101,114,0}];
          unsigned char binddatasm[] = {36,182,49,213,47,197};
         subtextW[3] -= 2 >> (MIN(labs((int)libreactnativebloba), 2));
         binddatasm[4] ^= arean.length;
      do {
          unsigned char empty8[] = {123,95,134,77,38,132,247,200,208,140};
          char stationP[] = {(char)-55,18,85,19,(char)-123};
          int gradleK = 4;
          NSInteger analyticsi = 3;
         cornerkickO = libreactnativebloba < 83.52f;
         long loading8 = sizeof(stationP) / sizeof(stationP[0]);
         empty8[2] ^= 1 & loading8;
         gradleK -= gradleK;
         analyticsi |= stationP[1];
         if (cornerkickO ? !cornerkickO : cornerkickO) {
            break;
         }
      } while ((4 > subtextW[3]) && (cornerkickO ? !cornerkickO : cornerkickO));
         NSInteger previewp = sizeof(subtextW) / sizeof(subtextW[0]);
         cornerkickO = (libreactnativebloba - previewp) >= 44;
      if ((2.28f + libreactnativebloba) >= 2) {
         cornerkickO = libreactnativebloba <= 89.15f;
      }
      for (int f = 0; f < 2; f++) {
         NSInteger guideL = sizeof(subtextW) / sizeof(subtextW[0]);
         subtextW[3] /= MAX(((cornerkickO ? 1 : 1) % (MAX(guideL, 4))), 5);
      }
      do {
          NSArray * subtextx = [NSArray arrayWithObjects:@(165), @(306), nil];
         subtextW[1] >>= MIN(1, labs(1));
         if (346367 == videon) {
            break;
         }
      } while (((subtextW[3] >> (MIN(labs(3), 3))) == 1 && 4 == (3 - libreactnativebloba)) && (346367 == videon));
          char smallB[] = {(char)-53,(char)-7,42};
          NSInteger currentJ = 5;
         int eighteen0 = sizeof(smallB) / sizeof(smallB[0]);
         cornerkickO = eighteen0 > 35;
         currentJ >>= MIN(labs(currentJ & currentJ), 2);
      if (cornerkickO) {
          float dataG = 4.0f;
          double neonf = 2.0f;
         cornerkickO = libreactnativebloba > 42.57f;
         dataG /= MAX(2, (int)dataG);
         neonf *= 1;
      }
      videon |= videon;
   }
   while (modelsr[0] >= videon) {
       long storeJ = 5;
       long membershipi = 5;
       BOOL livenodatabgimgY = YES;
       char homea[] = {101,(char)-91,34,43,22,(char)-22};
       NSArray * subsF = @[@(4), @(791)];
      while (homea[1] >= 3) {
          char searchP[] = {(char)-125,53,108,(char)-125,(char)-108,12,(char)-73,8};
          NSString * banner5 = [NSString stringWithUTF8String:(char []){115,95,55,49,95,101,113,117,101,115,116,0}];
          long foregroundL = 5;
          char librrc8[] = {(char)-28,(char)-57,(char)-21,(char)-115};
          unsigned char albumh[] = {79,97,197,135,101};
         homea[5] += ((livenodatabgimgY ? 3 : 3) % (MAX(1, 5)));
         NSInteger rewindR = sizeof(librrc8) / sizeof(librrc8[0]);
         searchP[MAX(5, foregroundL % 8)] %= MAX(rewindR | foregroundL, 2);
         foregroundL &= banner5.length;
         albumh[0] %= MAX(3 - banner5.length, 4);
         break;
      }
         homea[1] >>= MIN(labs(3 + membershipi), 3);
      if (4 >= (subsF.count * 4) && (subsF.count * storeJ) >= 4) {
         storeJ <<= MIN(4, subsF.count);
      }
         long floater7 = sizeof(homea) / sizeof(homea[0]);
         livenodatabgimgY = subsF.count == floater7;
      do {
         membershipi += membershipi ^ subsF.count;
         if (2664985 == membershipi) {
            break;
         }
      } while ((2664985 == membershipi) && (storeJ > membershipi));
      while (![subsF containsObject:@(membershipi)]) {
         storeJ *= subsF.count;
         break;
      }
         membershipi *= 1;
         membershipi *= subsF.count / 3;
      while (homea[1] == 3 || !livenodatabgimgY) {
          int videovar2 = 0;
         homea[MAX(2, membershipi % 6)] *= membershipi;
         videovar2 >>= MIN(3, labs(2));
         break;
      }
          NSInteger xnewsshareU = 4;
          double pusht = 1.0f;
         xnewsshareU >>= MIN(4, labs(5 + subsF.count));
         xnewsshareU &= (int)pusht;
         pusht /= MAX((int)pusht ^ (int)pusht, 3);
      do {
         storeJ |= ((livenodatabgimgY ? 2 : 5) | membershipi);
         if (storeJ == 3912487) {
            break;
         }
      } while ((storeJ == 3912487) && (5 <= (storeJ % 5) || livenodatabgimgY));
      while (homea[1] <= 4 && livenodatabgimgY) {
         livenodatabgimgY = 83 <= membershipi || livenodatabgimgY;
         break;
      }
       NSString * mergerG = [NSString stringWithUTF8String:(char []){117,95,50,52,95,100,105,114,112,0}];
       NSString * plus2 = [NSString stringWithUTF8String:(char []){116,95,50,55,95,99,109,97,115,107,0}];
      if (5 <= (3 * membershipi) || !livenodatabgimgY) {
         livenodatabgimgY = mergerG.length <= 25;
      }
      do {
         storeJ /= MAX(plus2.length & 2, 1);
         if (3767859 == plus2.length) {
            break;
         }
      } while ((3767859 == plus2.length) && ((3 * plus2.length) == 3));
      modelsr[MAX(1, membershipi % 9)] |= 1 * membershipi;
      break;
   }
   for (int q = 0; q < 3; q++) {
      modelsr[MAX(2, videon % 9)] %= MAX(3 / (MAX(modelsr[7], 3)), 5);
   }
   for (int x = 0; x < 2; x++) {
      videon >>= MIN(labs(2 ^ videon), 4);
   }
     int yellowvideoliveReact = 5575;
    double premultstraightBus = 0;
    yellowvideoliveReact += 13;
    premultstraightBus /= MAX(yellowvideoliveReact, 1);
         int tmp_o_50 = (int)yellowvideoliveReact;
     if (tmp_o_50 >= 789) {
          }
     else if (tmp_o_50 >= 893) {
     
     }
     else if (tmp_o_50 != 171) {
          tmp_o_50 *= 100;
     
     }

    return premultstraightBus;

}





- (BOOL)concurrentRootEnabled
{

       long videovarF = 3;
    int nativemoduleN = 1;

         {
    [self unregisterOneLabelProvider:167 detailsSecurity:6445.0 downarrowPhoto:5107];

}
      videovarF &= videovarF;
   do {
       BOOL libmapbufferjni4 = YES;
       char halffieldimageI[] = {(char)-47,48,(char)-51,113,(char)-53,(char)-108};
         libmapbufferjni4 = (22 - halffieldimageI[5]) > 59;
         halffieldimageI[4] += ((libmapbufferjni4 ? 3 : 3) & 2);
      do {
         NSInteger iconw = sizeof(halffieldimageI) / sizeof(halffieldimageI[0]);
         halffieldimageI[0] ^= iconw;
         if (videovarF == 2466009) {
            break;
         }
      } while ((videovarF == 2466009) && (libmapbufferjni4));
       NSDictionary * handlerU = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){118,0}],[NSString stringWithUTF8String:(char []){121,0}], [NSString stringWithUTF8String:(char []){55,0}],[NSString stringWithUTF8String:(char []){113,0}], [NSString stringWithUTF8String:(char []){78,0}],[NSString stringWithUTF8String:(char []){70,0}], nil];
       NSDictionary * modeX = @{[NSString stringWithUTF8String:(char []){122,95,57,95,121,117,118,0}]:@(870)};
      if ((halffieldimageI[2] << (MIN(labs(5), 2))) == 5 || (5 << (MIN(5, labs(halffieldimageI[2])))) == 3) {
         libmapbufferjni4 = 1 % (MAX(8, modeX.count));
      }
      do {
         libmapbufferjni4 = !libmapbufferjni4;
         if (libmapbufferjni4 ? !libmapbufferjni4 : libmapbufferjni4) {
            break;
         }
      } while ((libmapbufferjni4 ? !libmapbufferjni4 : libmapbufferjni4) && (halffieldimageI[1] >= 4 && !libmapbufferjni4));
      videovarF += 3;
      if (videovarF == 2613143) {
         break;
      }
   } while ((videovarF == 2613143) && (videovarF < nativemoduleN));
       NSArray * agreement8 = @[@(1040.0)];
       float schedulerX = 1.0f;
       int dplusx = 5;
      while ((dplusx + schedulerX) < 5.60f) {
         dplusx -= 2;
         break;
      }
      while ((dplusx & 5) <= 5) {
          NSDictionary * default_oB = @{[NSString stringWithUTF8String:(char []){103,95,54,56,95,97,109,114,119,98,100,97,116,97,0}]:@(720).stringValue};
          NSString * selection1 = [NSString stringWithUTF8String:(char []){102,95,52,56,95,115,121,110,116,104,101,115,105,122,101,100,0}];
          char controlj[] = {(char)-112,(char)-30,23,100,97,(char)-96,(char)-53,(char)-67,(char)-94,14,(char)-95};
         schedulerX += default_oB.allKeys.count;
         controlj[9] ^= 1 & controlj[8];
         break;
      }
          double footballfiledlayoutU = 2.0f;
         dplusx >>= MIN(2, agreement8.count);
         footballfiledlayoutU *= 3;
         dplusx /= MAX(1, agreement8.count);
         dplusx /= MAX(agreement8.count, 2);
       unsigned char iconfeedback7[] = {34,170,169,105,80,93,13};
       unsigned char pagination0[] = {175,159,47,220,141,15,134,18};
       float hookM = 0.0f;
       float backiconj = 1.0f;
      do {
         dplusx -= pagination0[4];
         if (dplusx == 4685764) {
            break;
         }
      } while ((2 <= dplusx) && (dplusx == 4685764));
       unsigned char macauQ[] = {165,61,247,27,104,211,72,91,149};
      nativemoduleN %= MAX(2 * dplusx, 4);

  return true;
}

- (UIInterfaceOrientationMask)application:(UIApplication *)application supportedInterfaceOrientationsForWindow:(UIWindow *)window {
       unsigned char gestures1[] = {209,143,237,130,147,75,143};
    char countryC[] = {109,(char)-125,(char)-26,(char)-28};
   if (5 == countryC[2]) {
       float questo = 0.0f;
       NSString * release_pqK = [NSString stringWithUTF8String:(char []){108,95,54,49,95,118,105,115,105,98,105,108,105,116,121,0}];
       BOOL userL = YES;
          float bggradientk = 1.0f;
         bggradientk += release_pqK.length;
      for (int q = 0; q < 1; q++) {
          NSInteger orientationy = 3;
          int baseN = 0;
         orientationy *= 3 * release_pqK.length;
         orientationy += baseN;
         baseN -= 2;
      }
         userL = 98.79f > questo;
       char latn1[] = {31,97,63,(char)-62};
         userL = release_pqK.length >= 42;
          unsigned char m_hashO[] = {80,230,132,191,193,134,173,139,192,127,216};
          int helper_ = 0;
         questo /= MAX(m_hashO[4] - 1, 5);
         m_hashO[3] -= helper_;
      do {
         userL = (latn1[1] & 13) >= 65;
         if (userL ? !userL : userL) {
            break;
         }
      } while (([release_pqK containsString:@(userL).stringValue]) && (userL ? !userL : userL));
      for (int q = 0; q < 3; q++) {
         latn1[0] -= ((userL ? 5 : 1));
      }
       double telemetry5 = 0.0f;
      gestures1[3] >>= MIN(release_pqK.length, 3);
   }
       char indexQ[] = {1,(char)-116,109,95,8,(char)-94};
       NSString * listJ = [NSString stringWithUTF8String:(char []){104,95,48,95,102,116,118,100,111,99,0}];
       NSInteger grayw = 4;
      if (4 > indexQ[5]) {
          double defaultprofilepicm = 0.0f;
          char defaultpredictionprofileO[] = {(char)-26,100,100,116,(char)-111,(char)-60,(char)-28,5};
         indexQ[0] -= listJ.length % 3;
         NSInteger short_a3 = sizeof(defaultpredictionprofileO) / sizeof(defaultpredictionprofileO[0]);
         defaultprofilepicm += 3 / (MAX(short_a3, 9));
      }
          NSArray * thumbnailo = @[@(188), @(346)];
          double mbnativeadvancedQ = 4.0f;
         indexQ[3] <<= MIN(2, labs(indexQ[5] | 3));
         mbnativeadvancedQ -= thumbnailo.count + 3;
         mbnativeadvancedQ *= thumbnailo.count;
         indexQ[2] &= grayw;
         indexQ[4] <<= MIN(5, labs(grayw));
      for (int h = 0; h < 3; h++) {
         grayw *= listJ.length | 4;
      }
         grayw += listJ.length << (MIN(labs(3), 3));
      do {
          unsigned char rncoreq[] = {128,18,250,41,244,132,65,27,110};
         indexQ[2] &= listJ.length;
         int pushb = sizeof(rncoreq) / sizeof(rncoreq[0]);
         rncoreq[5] >>= MIN(3, labs(pushb));
         if (-84 == indexQ[3]) {
            break;
         }
      } while ((-84 == indexQ[3]) && ((listJ.length * indexQ[1]) < 3 || 1 < (indexQ[1] * 3)));
      while ((grayw ^ 4) < 3) {
         grayw >>= MIN(listJ.length, 3);
         break;
      }
          double goalo = 0.0f;
         grayw *= listJ.length;
         goalo /= MAX((int)goalo / 2, 1);
      int register_fC = sizeof(countryC) / sizeof(countryC[0]);
      gestures1[3] += register_fC + 3;
   do {
      int regeng4 = sizeof(countryC) / sizeof(countryC[0]);
      countryC[3] /= MAX(regeng4 + 2, 4);
      if (countryC[1] == 55) {
         break;
      }
   } while ((countryC[1] == 55) && ((gestures1[2] / (MAX(1, 2))) == 3 || (1 / (MAX(3, gestures1[2]))) == 2));
   if (gestures1[6] <= countryC[0]) {
       char iconnewsshareJ[] = {1,43,60,(char)-123,(char)-98};
       unsigned char searchbarN[] = {229,156};
       NSArray * analyticsL = @[[NSString stringWithUTF8String:(char []){97,95,56,57,95,114,101,109,97,112,112,101,100,0}], [NSString stringWithUTF8String:(char []){108,97,117,110,99,104,95,99,95,52,49,0}]];
      for (int p = 0; p < 2; p++) {
         searchbarN[1] %= MAX(3, analyticsL.count & 2);
      }
         searchbarN[0] += 2 - analyticsL.count;
         long static_fD = sizeof(searchbarN) / sizeof(searchbarN[0]);
         searchbarN[1] += static_fD | 2;
      NSInteger plashm = sizeof(searchbarN) / sizeof(searchbarN[0]);
      countryC[2] |= (2 + plashm) << (MIN(labs(countryC[1]), 3));
      NSInteger routerg = sizeof(iconnewsshareJ) / sizeof(iconnewsshareJ[0]);
      iconnewsshareJ[4] |= routerg + iconnewsshareJ[1];
   }

  return [Orientation getOrientation];
}

-(long)statusArgcMasksPlayIdentifierWrapper:(NSArray *)streamingIconarrowright popupConst_z4:(NSArray *)popupConst_z4 modulesProfileinactive:(NSDictionary *)modulesProfileinactive {
    int point3 = 1;
    NSInteger refreshS = 3;
   for (int t = 0; t < 2; t++) {
      refreshS ^= 1 + refreshS;
   }
    int activity7 = 4;
   do {
      activity7 -= point3;
      if (1056368 == activity7) {
         break;
      }
   } while ((1056368 == activity7) && (activity7 == 2));
    long consecutiveLsplpc = 0;

    return consecutiveLsplpc;

}





- (NSDictionary *)showObjectContentsKind
{

         {
    [self statusArgcMasksPlayIdentifierWrapper:@[@(437), @(596), @(926)] popupConst_z4:@[@(401), @(324)] modulesProfileinactive:[NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){117,110,118,111,116,101,95,113,95,50,52,0}],@(158).stringValue, [NSString stringWithUTF8String:(char []){107,95,50,49,95,97,116,111,102,0}],@(566).stringValue, nil]];

}

       double utilsv = 1.0f;
    char feedbackT[] = {(char)-75,110};
      NSInteger hejiS = sizeof(feedbackT) / sizeof(feedbackT[0]);
      utilsv /= MAX(2, 1 | hejiS);
   do {
      long cancelq = sizeof(feedbackT) / sizeof(feedbackT[0]);
      utilsv += cancelq ^ 2;
      if (1693611.f == utilsv) {
         break;
      }
   } while ((1693611.f == utilsv) && (feedbackT[0] == 1));

  NSMutableDictionary *floating = [NSMutableDictionary new];
  
#ifdef RCT_NEW_ARCH_ENABLED
  floating[kRNConcurrentRoot] = @([self concurrentRootEnabled]);
#endif
  
  return floating;
   while (utilsv <= 3) {
       char mapbufferb[] = {44,9,105,127,(char)-103,117,73};
       int greeng = 0;
       BOOL libfabricjniH = YES;
      if ((greeng % (MAX(3, mapbufferb[3]))) == 4) {
          NSInteger networkd = 0;
          double clockS = 4.0f;
          int currentU = 0;
          int libyogaT = 5;
         mapbufferb[3] <<= MIN(4, labs(2));
         networkd %= MAX(4, (int)clockS);
         clockS *= (int)clockS;
         currentU <<= MIN(5, labs(currentU));
         libyogaT >>= MIN(1, labs((int)clockS));
      }
         greeng ^= 3;
      if (libfabricjniH) {
         int libavcodecA = sizeof(mapbufferb) / sizeof(mapbufferb[0]);
         libfabricjniH = libavcodecA > greeng;
      }
         mapbufferb[MAX(greeng % 7, 1)] |= 1 << (MIN(labs(greeng), 2));
      if (libfabricjniH) {
         libfabricjniH = libfabricjniH;
      }
          NSDictionary * vignetteX = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){116,95,57,55,95,116,114,97,100,105,116,105,111,110,97,108,0}],@(190), nil];
          NSArray * light7 = [NSArray arrayWithObjects:@(8829.0), nil];
         greeng &= 1;
          float yellowvideoliveY = 0.0f;
          unsigned char wnewssharec[] = {82,203,13,213,117,44,29,127};
          NSArray * kuaishouE = [NSArray arrayWithObjects:[NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){108,97,122,105,108,121,95,51,95,50,53,0}],[NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){110,95,51,52,95,112,108,117,114,97,108,105,122,101,100,0}],@(640).stringValue, nil], nil], nil];
         long headerG = sizeof(mapbufferb) / sizeof(mapbufferb[0]);
         libfabricjniH = (greeng * headerG) < 20;
         yellowvideoliveY -= (int)yellowvideoliveY & 3;
         wnewssharec[7] += kuaishouE.count & 3;
         yellowvideoliveY -= kuaishouE.count;
       double updatesx = 2.0f;
         greeng <<= MIN(labs(greeng << (MIN(labs(mapbufferb[1]), 5))), 4);
      NSInteger bootsplashd = sizeof(feedbackT) / sizeof(feedbackT[0]);
      feedbackT[0] &= 2 & bootsplashd;
      break;
   }
   for (int j = 0; j < 2; j++) {
       double codegen2 = 5.0f;
       double internetU = 2.0f;
       long libreanimated7 = 4;
          char settings5[] = {81,82,101,91,51,111,(char)-80,(char)-31,33,(char)-90,(char)-105};
         codegen2 *= (int)internetU / 1;
         NSInteger iconsaveimagez = sizeof(settings5) / sizeof(settings5[0]);
         settings5[9] += iconsaveimagez * 1;
      for (int e = 0; e < 3; e++) {
         codegen2 -= (int)internetU;
      }
      do {
          NSArray * libcrashsdkd = @[@(297), @(737), @(561)];
          double progress0 = 0.0f;
          BOOL moon0 = YES;
         internetU -= (int)codegen2;
         progress0 += libcrashsdkd.count;
         progress0 /= MAX((int)progress0 & 2, 4);
         moon0 = !moon0;
         progress0 -= libcrashsdkd.count * 2;
         if (1126559.f == internetU) {
            break;
         }
      } while ((internetU >= 4.5f) && (1126559.f == internetU));
      for (int y = 0; y < 3; y++) {
         codegen2 /= MAX((int)codegen2 % 2, 4);
      }
      do {
          NSString * historyS = [NSString stringWithUTF8String:(char []){100,101,99,105,109,97,108,95,99,95,48,0}];
          char dependencyN[] = {(char)-71,(char)-82,58,(char)-118,70};
          unsigned char logouserr[] = {137,218,170,32,78,153,134,96,87,201,182,92};
         libreanimated7 -= (int)internetU % (MAX((int)codegen2, 3));
         dependencyN[4] >>= MIN(labs(2), 5);
         logouserr[3] &= historyS.length;
         if (3851654 == libreanimated7) {
            break;
         }
      } while ((3851654 == libreanimated7) && ((2 + libreanimated7) == 3 || 1 == (libreanimated7 + 2)));
      while (libreanimated7 == 2) {
         internetU *= libreanimated7;
         break;
      }
      do {
          unsigned char componentJ[] = {7,159,248,178,53};
          NSArray * greyB = @[@(145), @(813)];
         internetU *= greyB.count;
         NSInteger sinad = sizeof(componentJ) / sizeof(componentJ[0]);
         componentJ[4] -= sinad << (MIN(labs(componentJ[1]), 4));
         if (internetU == 1558152.f) {
            break;
         }
      } while ((2 >= (2 + libreanimated7)) && (internetU == 1558152.f));
      if (5 < (2 & libreanimated7) || 4.28f < (libreanimated7 - internetU)) {
         internetU /= MAX(3, libreanimated7);
      }
      do {
         codegen2 /= MAX(libreanimated7, 3);
         if (3048825.f == codegen2) {
            break;
         }
      } while (((codegen2 / (MAX(1.24f, 7))) > 3.69f) && (3048825.f == codegen2));
      utilsv += 1;
   }
}

- (void)initRootController {
       char logoN[] = {(char)-49,(char)-29,(char)-3,(char)-24,(char)-69,114,(char)-73,66,(char)-101,(char)-88};
    BOOL mathg = YES;
   do {
       unsigned char profileactiveN[] = {34,200};
      while (profileactiveN[0] == profileactiveN[1]) {
         long pointj = sizeof(profileactiveN) / sizeof(profileactiveN[0]);
         long analyticI = sizeof(profileactiveN) / sizeof(profileactiveN[0]);
         profileactiveN[1] |= pointj - analyticI;
         break;
      }
      if ((3 | profileactiveN[1]) < 3 && (profileactiveN[1] | 3) < 2) {
         int reactnativeratingsa = sizeof(profileactiveN) / sizeof(profileactiveN[0]);
         profileactiveN[0] |= reactnativeratingsa >> (MIN(labs(profileactiveN[1]), 2));
      }
         NSInteger p_titleQ = sizeof(profileactiveN) / sizeof(profileactiveN[0]);
         profileactiveN[1] >>= MIN(labs((3 + p_titleQ) - profileactiveN[1]), 3);
      logoN[1] %= MAX(((mathg ? 4 : 4)), 2);
      if (mathg ? !mathg : mathg) {
         break;
      }
   } while ((mathg ? !mathg : mathg) && (mathg));
      mathg = logoN[9] <= 26 && !mathg;

  RCTBridge *whatsapp = [[RCTBridge alloc] initWithDelegate:self launchOptions:self.launchOptions];
      mathg = 36 <= (28 - logoN[6]);
   while (!mathg) {
      logoN[3] ^= (3 * (mathg ? 2 : 2));
      break;
   }
  NSDictionary *floatingT = [self showObjectContentsKind];
  rootView = RCTAppSetupDefaultRootView(whatsapp, @"yingshi", floatingT, true);
}

- (void)nativeViewControllerDidFinish {

       unsigned char defaultroombg0[] = {255,8,139,31,226,56,40,121};
    char thailand2[] = {123,127,(char)-38};
    float textlayoutmanagerA = 5.0f;
      int yellowanimationlive1 = sizeof(thailand2) / sizeof(thailand2[0]);
      thailand2[2] /= MAX(yellowanimationlive1, 2);
      long resendz = sizeof(thailand2) / sizeof(thailand2[0]);
      long splashn = sizeof(defaultroombg0) / sizeof(defaultroombg0[0]);
      thailand2[1] %= MAX(splashn + resendz, 3);

  if(isCurrentMainView == NO){
    isCurrentMainView = YES;
      NSInteger reactnativeratingsy = sizeof(thailand2) / sizeof(thailand2[0]);
      thailand2[2] |= reactnativeratingsy ^ 1;
    RNViewController *telemetryController = [[RNViewController alloc] init:rootView];
    self.window.rootViewController = telemetryController;
  }
}

- (BOOL)application:(UIApplication *)application openURL:(NSURL *)url
  sourceApplication:(NSString *)sourceApplication annotation:(id)annotation
{
       NSString * iconsubssuccessz = [NSString stringWithUTF8String:(char []){112,97,103,101,115,95,99,95,55,53,0}];
    char shrinkN[] = {(char)-41,(char)-44,(char)-70,6,25};
    long base9 = 2;
       long lightL = 4;
       NSString * skipk = [NSString stringWithUTF8String:(char []){100,101,105,110,116,95,107,95,56,57,0}];
       unsigned char hnewsz[] = {233,74,157,200,155};
      if (skipk.length >= 2) {
          int short_dzS = 0;
          double nativemoduleX = 2.0f;
          BOOL macaum = NO;
         short_dzS &= skipk.length;
         short_dzS ^= 3 / (MAX(2, (int)nativemoduleX));
         nativemoduleX += ((int)nativemoduleX << (MIN(3, labs((macaum ? 5 : 1)))));
         macaum = 55.48f >= nativemoduleX;
      }
      do {
         lightL >>= MIN(labs(([[NSString stringWithUTF8String:(char []){121,0}] isEqualToString: skipk] ? skipk.length : lightL)), 2);
         if (lightL == 1289258) {
            break;
         }
      } while (((hnewsz[2] ^ 5) > 5) && (lightL == 1289258));
         lightL |= skipk.length << (MIN(labs(4), 4));
         int mimoL = sizeof(hnewsz) / sizeof(hnewsz[0]);
         lightL >>= MIN(3, labs(mimoL));
      for (int p = 0; p < 1; p++) {
          BOOL basketballhometeamQ = NO;
          BOOL unreadv = YES;
          BOOL const_tT = YES;
         lightL *= ((const_tT ? 1 : 5));
         basketballhometeamQ = (!unreadv ? unreadv : unreadv);
      }
          unsigned char iconmoreB[] = {171,143,59,246,39,45,58,231,121,179,170};
          NSInteger termsD = 2;
          NSArray * gemfileW = @[@(770), @(295)];
         lightL += skipk.length;
         iconmoreB[10] &= gemfileW.count;
         termsD ^= 1 ^ termsD;
         termsD += gemfileW.count;
         lightL ^= lightL;
      for (int u = 0; u < 1; u++) {
          unsigned char unimplementedviewa[] = {124,106,27,104,134,196,37,224};
          double armvaX = 4.0f;
          double profileinactiveY = 1.0f;
         lightL |= hnewsz[4] | 1;
         unimplementedviewa[3] &= 2;
         armvaX -= 3;
         profileinactiveY += (int)armvaX;
      }
         lightL <<= MIN(2, labs(1 - skipk.length));
      shrinkN[1] += skipk.length & base9;
      base9 += 5 + iconsubssuccessz.length;
      base9 |= iconsubssuccessz.length;
       NSDictionary * libavformatJ = @{[NSString stringWithUTF8String:(char []){118,95,50,95,115,115,101,100,105,102,102,0}]:@[@(371), @(689), @(715)]};
      while (1 > (4 ^ libavformatJ.count)) {
          NSInteger libswresample0 = 5;
          double securityQ = 3.0f;
          int i_unlockj = 1;
          char launch6[] = {85,(char)-28,(char)-107,37,(char)-94,(char)-18,(char)-81};
         libswresample0 &= libavformatJ.count;
         libswresample0 *= i_unlockj;
         securityQ += i_unlockj;
         long vipsportZ = sizeof(launch6) / sizeof(launch6[0]);
         launch6[MAX(i_unlockj % 7, 2)] ^= vipsportZ >> (MIN(2, labs(i_unlockj)));
         break;
      }
          long lineO = 3;
          char currentM[] = {124,65,(char)-105,41,(char)-103,10,(char)-104,121,27};
          char iconeditD[] = {11,115,19,(char)-59,75,(char)-109,(char)-32};
         lineO *= libavformatJ.count | 4;
         int application2 = sizeof(currentM) / sizeof(currentM[0]);
         lineO &= application2 * iconeditD[6];
         int invitex = sizeof(currentM) / sizeof(currentM[0]);
         iconeditD[2] -= invitex | iconeditD[1];
      for (int z = 0; z < 1; z++) {
          unsigned char sharemodalL[] = {31,27,88,156,190,158,199,148,26,227};
          NSArray * darkN = [NSArray arrayWithObjects:@(442), @(843), @(606), nil];
          int redirectc = 5;
          char ewardeda[] = {(char)-17,(char)-73,123,(char)-30,101,(char)-43,40};
         redirectc <<= MIN(4, libavformatJ.count);
         sharemodalL[1] %= MAX(1, 1 / (MAX(10, darkN.count)));
         int reducera = sizeof(ewardeda) / sizeof(ewardeda[0]);
         redirectc *= (3 + reducera) | sharemodalL[8];
      }
      shrinkN[1] /= MAX(libavformatJ.allKeys.count | shrinkN[2], 3);

  if ([MobClick handleUrl:url]) {
    return YES;
  }

  return [RCTLinkingManager application:application openURL:url
                      sourceApplication:sourceApplication annotation:annotation];
       double championv = 5.0f;
       float footballR = 3.0f;
       unsigned char resulta[] = {181,150,159,88,178,16,210,96,217,88,12};
         footballR *= 2;
         long rncoreU = sizeof(resulta) / sizeof(resulta[0]);
         resulta[9] <<= MIN(3, labs(3 ^ rncoreU));
         footballR -= (int)footballR;
      while (3.18f >= footballR) {
         championv *= (int)championv;
         break;
      }
      for (int l = 0; l < 2; l++) {
         footballR /= MAX(1, 2);
      }
      if (footballR > championv) {
         footballR *= 2;
      }
          unsigned char inouttargetredk[] = {149,135,80,116};
          long final_0wz = 0;
         resulta[6] %= MAX(3, (int)footballR);
         inouttargetredk[0] <<= MIN(2, labs(2));
         final_0wz ^= 1;
         footballR -= (int)footballR;
      while ((footballR - 1.98f) > 4.45f) {
         footballR -= (int)championv;
         break;
      }
      base9 %= MAX(iconsubssuccessz.length, 5);
   while ((shrinkN[1] - 3) == 2 || 4 == (3 - iconsubssuccessz.length)) {
       NSDictionary * overlayo = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){110,95,50,51,95,100,117,114,103,101,114,0}],@(903).stringValue, nil];
       char bodand[] = {92,(char)-93,20,97,(char)-127,76,116,68,(char)-29,18,11,(char)-20};
      while ((overlayo.allValues.count << (MIN(labs(5), 1))) == 1 && 2 == (overlayo.allValues.count << (MIN(labs(5), 4)))) {
         break;
      }
         bodand[7] |= bodand[5];
          char default_3S[] = {79,(char)-10,(char)-112,54,93,(char)-68,74};
          float specf = 4.0f;
         specf *= overlayo.count - 1;
         NSInteger emoji3 = sizeof(default_3S) / sizeof(default_3S[0]);
         default_3S[5] >>= MIN(labs((1 + emoji3) / (MAX(5, default_3S[0]))), 3);
         long tumbnailf = sizeof(default_3S) / sizeof(default_3S[0]);
         specf /= MAX(2, tumbnailf << (MIN(labs(default_3S[1]), 4)));
      do {
          int point_ = 0;
         point_ += overlayo.count >> (MIN(labs(4), 5));
         if (74831 == overlayo.count) {
            break;
         }
      } while ((74831 == overlayo.count) && (bodand[5] >= overlayo.allValues.count));
      base9 %= MAX(iconsubssuccessz.length - 1, 4);
      break;
   }
}

@end
