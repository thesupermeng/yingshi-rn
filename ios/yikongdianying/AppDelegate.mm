#ifdef __DEBUG__
#define DEBUG_Log(format,...) printf(format, __VA_ARGS__)
#else
#define DEBUG_Log(format,...)
#endif
#import "AppDelegate.h"
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

#import "ttLeftController.h"
#import "ttActionController.h"
#import <UMCommon/MobClick.h>
#import "ttLeftController.h"


@implementation AppDelegate

UIView *rootView;
bool isCurrentMainView = NO;

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
       unsigned char debugS[] = {26,102,184,20,186,109,217,38,51,180,142};
    NSDictionary * f_centerk = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){117,110,98,108,117,114,95,56,95,49,56,0}],@(292).stringValue, nil];
    double smallX = 2.0f;
   if (1 == f_centerk.allValues.count) {
       BOOL changeL = YES;
         changeL = !changeL;
         changeL = changeL || !changeL;
       NSString * assistC = [NSString stringWithUTF8String:(char []){115,116,111,114,97,103,101,115,95,114,95,57,51,0}];
      debugS[6] %= MAX(((changeL ? 5 : 4)), 2);
   }

 
  [UMConfigure setLogEnabled:NO];
   do {
      smallX += f_centerk.count - 1;
      if (f_centerk.count == 1308523) {
         break;
      }
   } while (((f_centerk.allValues.count & 2) >= 3) && (f_centerk.count == 1308523));
  [UMConfigure initWithAppkey:@"65fa91ac8d21b86a18436eb1" channel:@"App Store"];
  
  
  
  [self initRootController];
      smallX *= f_centerk.count;
  [ATAPI setLogEnabled:NO]; 

  ATMintegralConfigure *flipper = [[ATMintegralConfigure alloc] initWithAppid:@"a65fb9d78d5788" appkey:@"0b1cab850e5de6fdc1fe0e114a0256eb"];
   for (int n = 0; n < 1; n++) {
      smallX *= f_centerk.count - 5;
   }
  ATGDTConfigure *index = [[ATGDTConfigure alloc] initWithAppid:@"a65fb9d78d5788"];
   if (debugS[0] >= 5) {
      NSInteger pangleB = sizeof(debugS) / sizeof(debugS[0]);
      debugS[1] &= f_centerk.allValues.count >> (MIN(labs(pangleB), 3));
   }
  ATAdColonyConfigure *pangle = [[ATAdColonyConfigure alloc] initWithAppid:@"a65fb9d78d5788" zoneIds:@[]];
   for (int x = 0; x < 2; x++) {
      debugS[2] <<= MIN(1, labs(1 << (MIN(2, labs((int)smallX)))));
   }
  ATMyTargetConfigure *adult = [[ATMyTargetConfigure alloc] init];
  ATFacebookConfigure *progress = [[ATFacebookConfigure alloc] init];


  ATSDKConfiguration *loading = [[ATSDKConfiguration alloc] init];
  loading.preInitArray = @[
    flipper,
    index,
    pangle,
    adult,
    progress
  ];

  NSString *baidu = @"true";
  
  NSString *apps = @"RCTAsyncLocalStorage_V1";
  NSString *live = @"manifest.json";

  NSFileManager *short_wz = [NSFileManager defaultManager];
  NSURL *preview = [[NSFileManager defaultManager] URLForDirectory:NSApplicationSupportDirectory inDomain:NSUserDomainMask appropriateForURL:nil create:NO error:nil];
  NSURL *dark = [preview URLByAppendingPathComponent:[[NSBundle mainBundle] bundleIdentifier]];
  NSURL *light = [dark URLByAppendingPathComponent:apps];
  NSURL *report = [light URLByAppendingPathComponent:live];

  if ([short_wz fileExistsAtPath:report.path]) {
    NSError *regeng;
    NSString *transfer = [NSString stringWithContentsOfURL:report encoding:NSUTF8StringEncoding error:&regeng];
    if (!regeng) {
      NSData *previewz = [transfer dataUsingEncoding:NSUTF8StringEncoding];
      NSError *taiwan;
      NSDictionary *mini = [NSJSONSerialization JSONObjectWithData:previewz options:NSJSONReadingMutableContainers error:&taiwan];
      if (!taiwan && mini[@"showAds"]) {
        baidu = mini[@"showAds"];
      }
    }
  }


  [[ATAPI sharedInstance] startWithAppID:@"a65fb9d78d5788" appKey:@"ab95bfed15089f583fc52043a7404ea3e" sdkConfigures:loading error:nil];
  [[ATAPI sharedInstance] setPresetPlacementConfigPathBundle:[NSBundle mainBundle]];
  
  self.launchOptions = launchOptions;
  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];

  if([baidu isEqualToString:@"true"]){
    ATSplashViewController *analyticsController = [[ATSplashViewController alloc] init];
    analyticsController.delegate = self;
    self.window.rootViewController = analyticsController;
    [self.window makeKeyAndVisible];
  }else{
    [self nativeViewControllerDidFinish];
    [self.window makeKeyAndVisible];
  }

  
  [AppCenterReactNativeShared setStartAutomatically:YES];
  [AppCenterReactNativeShared setAppSecret:@"caa4c968-37b7-4475-b22a-62a3dbb0f983"];
 [AppCenterReactNative register];
 [AppCenterReactNativeAnalytics registerWithInitiallyEnabled:true];
 [AppCenterReactNativeCrashes registerWithAutomaticProcessing];

  [[AVAudioSession sharedInstance] setCategory:AVAudioSessionCategoryPlayback error:nil];

  
  return YES;
}

-(NSArray *)checkPropertyInitially:(NSString *)twitterHeader {
    double dplusU = 2.0f;
    double optionsQ = 2.0f;
      dplusU += 1;
      optionsQ += (int)optionsQ;
   do {
      optionsQ += (int)optionsQ;
      if (2381007.f == optionsQ) {
         break;
      }
   } while ((3.4f > (optionsQ / (MAX(6, optionsQ)))) && (2381007.f == optionsQ));
     double configTick = 4864.0;
    NSMutableArray * boundedPdf = [NSMutableArray arrayWithObject:@(817)];
    configTick -= 93;
    [boundedPdf addObject: @(configTick)];
         int _f_48 = (int)configTick;
     _f_48 -= 12;

    return boundedPdf;

}





- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{

         {
    [self checkPropertyInitially:[NSString stringWithUTF8String:(char []){120,95,51,51,95,97,114,114,105,118,97,108,0}]];

}

       BOOL redirecti = NO;
    char controlsm[] = {25,(char)-55,22,(char)-13,(char)-60,90,86,121,(char)-26,21};
    unsigned char referrerE[] = {169,100,191,204,148,69,239,48,37,73,21,251};
      controlsm[6] *= ((redirecti ? 3 : 1));
   while (redirecti) {
      redirecti = 71 <= controlsm[8];
      break;
   }
   do {
      NSInteger securitym = sizeof(referrerE) / sizeof(referrerE[0]);
      controlsm[8] &= securitym & controlsm[7];
      if (redirecti ? !redirecti : redirecti) {
         break;
      }
   } while ((4 >= controlsm[3] || redirecti) && (redirecti ? !redirecti : redirecti));

#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index"];
#else
  return [CodePush bundleURL];
   while (!redirecti) {
      NSInteger termsg = sizeof(controlsm) / sizeof(controlsm[0]);
      redirecti = termsg < 76;
      break;
   }
      int stept = sizeof(controlsm) / sizeof(controlsm[0]);
      redirecti = 91 <= (2 ^ stept);
#endif
}

-(NSArray *)preferredReadingTwoConvert:(NSInteger)nextStats {
    long vignette1 = 3;
    int sheetS = 4;
   if ((2 * sheetS) <= 3 || 1 <= (vignette1 * 2)) {
       BOOL calendarm = NO;
       int termsI = 2;
       float screenC = 1.0f;
       long nativea = 5;
      if (calendarm) {
         calendarm = !calendarm;
      }
      do {
         nativea += 1 / (MAX(5, (int)screenC));
         if (3646472 == nativea) {
            break;
         }
      } while ((3646472 == nativea) && (2.78f == (nativea - screenC)));
         screenC += (int)screenC;
       int scheduleh = 2;
       int linep = 3;
         screenC /= MAX(5, (int)screenC);
      while ((scheduleh - 4) < 2) {
         scheduleh &= 2;
         break;
      }
      for (int u = 0; u < 3; u++) {
         termsI %= MAX(1, 2);
      }
      while (!calendarm) {
         scheduleh -= linep ^ scheduleh;
         break;
      }
         nativea ^= 2;
       NSString * typesh = [NSString stringWithUTF8String:(char []){119,117,110,100,101,102,95,98,95,49,55,0}];
      while ((screenC + 1.37f) == 1) {
         screenC += 3 | nativea;
         break;
      }
       NSString * private_51P = [NSString stringWithUTF8String:(char []){111,110,121,120,100,95,56,95,53,49,0}];
      sheetS >>= MIN(labs(((calendarm ? 4 : 1) & termsI)), 3);
   }
      sheetS /= MAX(3, vignette1);
      sheetS /= MAX(sheetS, 2);
    NSMutableArray * enchDropperEstablish = [NSMutableArray array];

    return enchDropperEstablish;

}





- (BOOL)concurrentRootEnabled
{

         {
    [self preferredReadingTwoConvert:9389];

}

       NSString * soundz = [NSString stringWithUTF8String:(char []){109,95,50,50,95,97,108,115,101,0}];
    unsigned char indicator3[] = {252,173,145,61,181,185,170,113,188,48,188};
   do {
      indicator3[5] |= indicator3[10];
      if (1046397 == soundz.length) {
         break;
      }
   } while (((indicator3[6] | 1) >= 5) && (1046397 == soundz.length));
   do {
       unsigned char backward5[] = {144,32,109,12,64,89,204,33};
       int dragz = 3;
       char cataloge[] = {(char)-53,(char)-5,74,116,126,49};
       unsigned char sortZ[] = {107,246,195,234,246};
       char philippinesc[] = {94,(char)-18,(char)-57,(char)-43,(char)-26,64,(char)-87,53,117,(char)-30,(char)-99};
         long paginationC = sizeof(sortZ) / sizeof(sortZ[0]);
         cataloge[4] %= MAX(paginationC, 3);
      for (int h = 0; h < 2; h++) {
         dragz ^= philippinesc[9] * dragz;
      }
         long injuryK = sizeof(philippinesc) / sizeof(philippinesc[0]);
         philippinesc[5] -= 3 << (MIN(4, labs(injuryK)));
          BOOL sendI = NO;
          NSArray * headerl = [NSArray arrayWithObjects:@(864), @(286), nil];
          char storeJ[] = {52,45,25,69,13,31};
         backward5[6] += 1 + backward5[7];
         long pathr = sizeof(storeJ) / sizeof(storeJ[0]);
         sendI = (pathr >> (MIN(2, headerl.count))) > 5;
         long forwardu = sizeof(philippinesc) / sizeof(philippinesc[0]);
         long zhengpian3 = sizeof(backward5) / sizeof(backward5[0]);
         dragz *= zhengpian3 - forwardu;
       NSArray * disconnecteds = @[@(577)];
      do {
         backward5[3] /= MAX(3, backward5[2] - disconnecteds.count);
         if (3837127 == soundz.length) {
            break;
         }
      } while (((3 * backward5[7]) > 5) && (3837127 == soundz.length));
          NSString * eighteenl = [NSString stringWithUTF8String:(char []){108,111,110,103,98,105,103,95,54,95,55,52,0}];
          int shootO = 5;
          char typesf[] = {(char)-10,4};
         sortZ[4] |= sortZ[3] << (MIN(3, labs(2)));
         shootO *= typesf[0] & eighteenl.length;
         typesf[0] /= MAX(5, typesf[0] & eighteenl.length);
         cataloge[MAX(2, dragz % 6)] *= dragz;
      while ((philippinesc[4] & 4) == 4) {
         philippinesc[3] -= 3;
         break;
      }
      if (1 > cataloge[5]) {
         NSInteger questm = sizeof(backward5) / sizeof(backward5[0]);
         backward5[7] += questm + 2;
      }
         dragz <<= MIN(labs(1), 1);
      if ((dragz >> (MIN(labs(5), 1))) > 4 || 5 > (philippinesc[7] >> (MIN(4, labs(dragz))))) {
          unsigned char liveM[] = {252,41,41,236,93,214};
          NSArray * sideP = @[@(350), @(522), @(283)];
         long photoP = sizeof(backward5) / sizeof(backward5[0]);
         long reactA = sizeof(liveM) / sizeof(liveM[0]);
         dragz &= photoP - reactA;
      }
         philippinesc[7] &= 2 * dragz;
         long darkA = sizeof(cataloge) / sizeof(cataloge[0]);
         long ball6 = sizeof(philippinesc) / sizeof(philippinesc[0]);
         philippinesc[9] -= darkA | ball6;
      dragz >>= MIN(4, soundz.length);
      if (soundz.length == 4702893) {
         break;
      }
   } while ((soundz.length == 4702893) && (4 < (2 - indicator3[10]) || (soundz.length - indicator3[10]) < 2));
      long l_position8 = sizeof(indicator3) / sizeof(indicator3[0]);
      indicator3[6] >>= MIN(2, labs(1 ^ l_position8));

  return true;
}

- (UIInterfaceOrientationMask)application:(UIApplication *)application supportedInterfaceOrientationsForWindow:(UIWindow *)window {
       char playercommonH[] = {106,(char)-109,121,40,(char)-93,28,48,(char)-101,(char)-94,(char)-98,(char)-76,(char)-86};
    NSString * reactnativejs9 = [NSString stringWithUTF8String:(char []){106,95,51,49,95,102,114,111,122,101,110,0}];
       unsigned char update_iaV[] = {22,20,230,140,200,217,71,221,29,41};
       NSDictionary * club4 = @{[NSString stringWithUTF8String:(char []){97,108,116,101,114,97,98,108,101,95,111,95,57,55,0}]:@(738), [NSString stringWithUTF8String:(char []){110,115,117,105,114,103,98,97,95,121,95,50,56,0}]:@(757)};
      while (3 > (update_iaV[6] ^ 3)) {
         update_iaV[2] &= club4.allValues.count / (MAX(update_iaV[1], 7));
         break;
      }
      do {
         update_iaV[4] >>= MIN(labs(update_iaV[6]), 3);
         if (2735695 == reactnativejs9.length) {
            break;
         }
      } while ((1 < (update_iaV[7] * 2)) && (2735695 == reactnativejs9.length));
       double gmaily = 3.0f;
       double relatedG = 2.0f;
      while ((club4.allValues.count ^ update_iaV[6]) < 2) {
         relatedG *= 5 * club4.count;
         break;
      }
      if ([club4.allKeys containsObject:@(relatedG)]) {
         int uploadA = sizeof(update_iaV) / sizeof(update_iaV[0]);
         relatedG += uploadA - (int)relatedG;
      }
      while (2 == (update_iaV[0] + gmaily)) {
          double small9 = 3.0f;
          NSInteger shrinkm = 3;
          NSDictionary * sigmob7 = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){104,0}],[NSString stringWithUTF8String:(char []){73,0}], nil];
         update_iaV[8] /= MAX((int)relatedG - 3, 3);
         small9 *= shrinkm % 1;
         shrinkm %= MAX(shrinkm % 2, 1);
         shrinkm %= MAX(2, sigmob7.count);
         shrinkm <<= MIN(sigmob7.count, 5);
         break;
      }
      int shirtt = sizeof(playercommonH) / sizeof(playercommonH[0]);
      playercommonH[7] -= shirtt - club4.allValues.count;
   if ([reactnativejs9 containsString:@(playercommonH[8]).stringValue]) {
      playercommonH[4] *= 1 >> (MIN(4, reactnativejs9.length));
   }
   while ((4 - playercommonH[5]) >= 3) {
      playercommonH[1] %= MAX(4, 2);
      break;
   }
   do {
       NSString * stringG = [NSString stringWithUTF8String:(char []){104,95,50,50,95,100,105,110,102,0}];
       BOOL corea = NO;
       unsigned char combinedL[] = {77,241,69,85,199,101,134,80,16,135,60};
       int white4 = 2;
      for (int k = 0; k < 1; k++) {
         white4 *= stringG.length;
      }
         corea = (white4 % (MAX(stringG.length, 9))) == 98;
         combinedL[9] += 1;
          NSArray * confirmationP = [NSArray arrayWithObjects:@(83), @(596), @(22), nil];
         combinedL[MAX(white4 % 11, 3)] /= MAX(3, confirmationP.count);
      for (int z = 0; z < 2; z++) {
         combinedL[5] -= ((corea ? 2 : 5) & white4);
      }
          double change4 = 1.0f;
          NSString * countdownW = [NSString stringWithUTF8String:(char []){114,97,116,105,110,103,95,54,95,49,53,0}];
          NSArray * liveB = [NSArray arrayWithObjects:@(673), @(539), @(434), nil];
         combinedL[0] += combinedL[4] << (MIN(labs(2), 2));
         change4 /= MAX(3, ([countdownW isEqualToString: [NSString stringWithUTF8String:(char []){95,0}]] ? liveB.count : countdownW.length));
         change4 /= MAX(liveB.count, 3);
      if (1 >= (3 + white4) || 3 >= white4) {
         white4 += ([stringG isEqualToString: [NSString stringWithUTF8String:(char []){122,0}]] ? stringG.length : (corea ? 2 : 2));
      }
      for (int f = 0; f < 3; f++) {
          NSString * google4 = [NSString stringWithUTF8String:(char []){99,95,52,53,95,103,114,111,117,112,101,100,0}];
          char e_viewj[] = {(char)-18,(char)-92,7,(char)-120,53,(char)-85,(char)-76,(char)-40,51,(char)-2,78,(char)-26};
          char mbnative7[] = {(char)-57,20,(char)-8,(char)-111,9,(char)-92,(char)-92,10,(char)-54,25,69,80};
          int fastforwardf = 5;
          NSDictionary * dycreatorg = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){114,101,115,105,100,101,110,99,101,95,120,95,55,57,0}],@(45), nil];
         white4 += 3 & stringG.length;
         fastforwardf >>= MIN(labs(4 % (MAX(4, google4.length))), 1);
         e_viewj[7] *= dycreatorg.allKeys.count / (MAX(e_viewj[0], 5));
         mbnative7[9] /= MAX(1, e_viewj[7] | 2);
         fastforwardf -= dycreatorg.allKeys.count ^ 1;
         fastforwardf += google4.length;
      }
       unsigned char sigmobk[] = {199,185,205,103,95,184,47,60,153,64,152};
      for (int p = 0; p < 3; p++) {
         corea = 22 == white4;
      }
      if (4 >= (4 & white4) || 1 >= (4 & stringG.length)) {
         white4 %= MAX(stringG.length << (MIN(labs(5), 4)), 5);
      }
         NSInteger flyer8 = sizeof(combinedL) / sizeof(combinedL[0]);
         white4 >>= MIN(1, labs(flyer8));
      playercommonH[10] ^= white4 * 1;
      if ([reactnativejs9 isEqualToString: [NSString stringWithUTF8String:(char []){108,114,115,116,101,108,121,52,0}]]) {
         break;
      }
   } while (([reactnativejs9 isEqualToString: [NSString stringWithUTF8String:(char []){108,114,115,116,101,108,121,52,0}]]) && (![reactnativejs9 containsString:@(playercommonH[3]).stringValue]));

  return [Orientation getOrientation];
}

-(NSInteger)topFinishJsiFormat:(double)historyProject malaysiaDark:(float)malaysiaDark {
    float moduleN = 1.0f;
    NSInteger main_q3 = 0;
   for (int k = 0; k < 1; k++) {
      main_q3 |= 1 >> (MIN(labs(main_q3), 2));
   }
      main_q3 ^= 2;
      moduleN *= 2 * main_q3;
      moduleN /= MAX(3, 1);
   return main_q3;

}





- (NSDictionary *)gdtTaskIdentifierMark
{

         {
    [self topFinishJsiFormat:6549.0 malaysiaDark:5838.0];

}

       BOOL station4 = NO;
    NSDictionary * round5 = @{[NSString stringWithUTF8String:(char []){56,0}]:[NSString stringWithUTF8String:(char []){119,0}]};
   for (int w = 0; w < 3; w++) {
      station4 = nil != round5[@(station4).stringValue];
   }
   for (int t = 0; t < 2; t++) {
      station4 = nil != round5[@(station4).stringValue];
   }

  NSMutableDictionary *rnewinterstitial = [NSMutableDictionary new];
  
#ifdef RCT_NEW_ARCH_ENABLED
  rnewinterstitial[kRNConcurrentRoot] = @([self concurrentRootEnabled]);
#endif
  
  return rnewinterstitial;
      station4 = round5.count << (MIN(labs(5), 5));
      station4 = round5.count << (MIN(labs(2), 2));
}

- (void)initRootController {
       char verticalw[] = {(char)-88,3,(char)-37,(char)-122,66,(char)-124,1,112,119,(char)-7};
    int mimoY = 0;
    unsigned char sourceH[] = {46,201,68,26,63,84,3,195,250,22,22};
      int previewo = sizeof(verticalw) / sizeof(verticalw[0]);
      sourceH[4] <<= MIN(4, labs(previewo << (MIN(labs(3), 4))));
       NSArray * dangerx = @[[NSString stringWithUTF8String:(char []){108,111,99,107,101,100,95,53,95,50,56,0}], [NSString stringWithUTF8String:(char []){120,95,53,56,95,106,115,111,110,115,0}]];
       NSDictionary * hongkongw = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){109,105,116,101,114,95,107,95,55,54,0}],@(460).stringValue, nil];
       NSDictionary * sharedg = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){102,95,49,50,95,97,115,110,0}],@(103).stringValue, [NSString stringWithUTF8String:(char []){103,95,54,55,95,99,104,111,109,112,0}],@(600).stringValue, nil];
       char confirmationC[] = {(char)-46,34,(char)-36,(char)-92,55,3,112,119,11,14,(char)-56,(char)-48};
       char popupZ[] = {(char)-1,(char)-120,113};
         confirmationC[6] /= MAX(5, confirmationC[9] % (MAX(3, sharedg.allKeys.count)));
      do {
          long transferL = 5;
          NSInteger switch_4_B = 0;
          double benefiti = 2.0f;
         popupZ[1] <<= MIN(5, labs(dangerx.count & confirmationC[1]));
         transferL += switch_4_B % 1;
         switch_4_B *= 2;
         benefiti -= 3 - switch_4_B;
         if (901549 == mimoY) {
            break;
         }
      } while ((901549 == mimoY) && ((popupZ[2] * 3) == 2 || (popupZ[2] * 3) == 5));
      for (int v = 0; v < 3; v++) {
          unsigned char activity3[] = {243,85,189,45,137,5,51};
          double v_imageJ = 1.0f;
          NSString * blacklistw = [NSString stringWithUTF8String:(char []){117,110,112,105,110,95,114,95,56,54,0}];
          NSArray * eighteenX = @[@(923), @(260), @(747)];
          NSArray * policyU = [NSArray arrayWithObjects:@(337), @(353), nil];
         confirmationC[10] <<= MIN(2, labs(3 - sharedg.count));
         activity3[2] *= activity3[0];
         int appleK = sizeof(activity3) / sizeof(activity3[0]);
         v_imageJ /= MAX(4, appleK);
         v_imageJ += 5 + blacklistw.length;
         v_imageJ *= eighteenX.count / (MAX(4, 2));
         v_imageJ -= policyU.count;
         v_imageJ /= MAX(blacklistw.length, 2);
         v_imageJ -= 1 / (MAX(10, eighteenX.count));
         v_imageJ /= MAX(1, policyU.count / (MAX(3, 10)));
      }
          NSArray * klevinp = @[@(113), @(890), @(697)];
         confirmationC[4] &= 1;
       unsigned char projectE[] = {149,127,156,233,207,98,11};
       unsigned char backt[] = {123,99,154,47,133,7};
      while ((projectE[3] % (MAX(1, 7))) <= 4 || 3 <= (sharedg.allKeys.count % 1)) {
         NSInteger q_imagep = sizeof(backt) / sizeof(backt[0]);
         projectE[5] ^= q_imagep;
         break;
      }
      long unselected2 = sizeof(sourceH) / sizeof(sourceH[0]);
      mimoY &= 1 * unselected2;

  RCTBridge *l_unlock = [[RCTBridge alloc] initWithDelegate:self launchOptions:self.launchOptions];
       unsigned char main_k3[] = {168,159,127,140,3,118,135,63};
       NSDictionary * downloadingG = @{[NSString stringWithUTF8String:(char []){114,97,100,105,117,115,95,100,95,54,53,0}]:@(548).stringValue, [NSString stringWithUTF8String:(char []){97,108,114,101,97,100,121,95,100,95,55,50,0}]:@(301).stringValue, [NSString stringWithUTF8String:(char []){102,114,97,109,101,114,97,116,101,95,99,95,51,53,0}]:@(204).stringValue};
       int o_centerN = 0;
       int hejiw = 5;
      do {
         o_centerN &= 1;
         if (o_centerN == 4776846) {
            break;
         }
      } while ((o_centerN == 4776846) && (2 == (1 % (MAX(7, hejiw)))));
      if (4 >= (5 & downloadingG.count) && 3 >= (5 & downloadingG.count)) {
         hejiw ^= 3 % (MAX(9, hejiw));
      }
      if ((main_k3[4] << (MIN(labs(2), 1))) <= 3) {
         o_centerN |= downloadingG.count;
      }
      while (2 == (hejiw >> (MIN(labs(o_centerN), 5)))) {
         o_centerN *= main_k3[7] * 1;
         break;
      }
          float paginationn = 5.0f;
         o_centerN >>= MIN(4, downloadingG.count);
         paginationn *= 1 | (int)paginationn;
      sourceH[7] &= mimoY + 1;
   do {
      long hcopy_1j7 = sizeof(sourceH) / sizeof(sourceH[0]);
      mimoY += 3 | hcopy_1j7;
      if (254071 == mimoY) {
         break;
      }
   } while ((3 > (4 >> (MIN(3, labs(mimoY))))) && (254071 == mimoY));
  NSDictionary *rnewinterstitialG = [self gdtTaskIdentifierMark];
  rootView = RCTAppSetupDefaultRootView(l_unlock, @"yingshi", rnewinterstitialG, true);
      long faviconi = sizeof(sourceH) / sizeof(sourceH[0]);
      mimoY &= faviconi - 2;
}

-(NSString *)mtgStrongImageFrom{
    double mbnativeadvancedx = 4.0f;
    char x_lockq[] = {35,50,11,64,(char)-126};
      mbnativeadvancedx += 3;
      NSInteger tooltipsS = sizeof(x_lockq) / sizeof(x_lockq[0]);
      mbnativeadvancedx += (int)mbnativeadvancedx << (MIN(labs(tooltipsS), 2));
   if (1 < (x_lockq[4] | 1) && (mbnativeadvancedx - x_lockq[4]) < 1) {
      x_lockq[0] *= 2;
   }
   do {
       NSString * buttonR = [NSString stringWithUTF8String:(char []){104,95,52,49,95,112,111,115,116,102,105,108,116,101,114,0}];
       NSInteger pingd = 2;
       NSInteger stringk = 2;
      if ((stringk / 5) == 5) {
         pingd *= stringk >> (MIN(labs(pingd), 5));
      }
      while (1 >= (3 >> (MIN(5, labs(pingd)))) && 5 >= (3 >> (MIN(5, labs(pingd))))) {
         stringk <<= MIN(1, labs(stringk));
         break;
      }
      for (int v = 0; v < 1; v++) {
          long topicY = 1;
          BOOL emojit = YES;
          char telegramj[] = {(char)-114,(char)-15,92,82,(char)-10,60,111,25,(char)-55,(char)-124,75,39};
          NSDictionary * dplusV = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){101,110,118,101,108,111,112,101,95,120,95,54,56,0}],@(759), [NSString stringWithUTF8String:(char []){115,112,101,99,105,102,105,101,114,95,112,95,52,54,0}],@(294), nil];
          float phonea = 3.0f;
         stringk %= MAX(3, 1);
         topicY <<= MIN(labs(1 << (MIN(5, dplusV.allKeys.count))), 1);
         long league3 = sizeof(telegramj) / sizeof(telegramj[0]);
         emojit = 58 < (88 << (MIN(4, labs(league3))));
         topicY <<= MIN(1, labs(2 & dplusV.count));
         phonea -= 3;
      }
         stringk ^= 2;
      do {
          NSArray * targetE = [NSArray arrayWithObjects:@(340), @(774), nil];
          unsigned char klevin5[] = {117,160};
          NSString * actions5 = [NSString stringWithUTF8String:(char []){117,110,119,114,97,112,112,101,100,95,110,95,49,55,0}];
          int sinaV = 1;
         pingd %= MAX(4, 5 - buttonR.length);
         sinaV &= targetE.count >> (MIN(labs(3), 2));
         klevin5[MAX(0, sinaV % 2)] %= MAX(actions5.length, 3);
         sinaV *= actions5.length;
         sinaV += targetE.count;
         if ([[NSString stringWithUTF8String:(char []){116,115,120,107,110,122,108,0}] isEqualToString: buttonR]) {
            break;
         }
      } while (((pingd % (MAX(5, buttonR.length))) >= 4 && 1 >= (4 % (MAX(6, buttonR.length)))) && ([[NSString stringWithUTF8String:(char []){116,115,120,107,110,122,108,0}] isEqualToString: buttonR]));
          long pressurel = 2;
          NSInteger mbnativeadvancedJ = 4;
          float kuaishouQ = 1.0f;
         mbnativeadvancedJ >>= MIN(3, buttonR.length);
         pressurel >>= MIN(labs((int)kuaishouQ ^ 1), 2);
         mbnativeadvancedJ *= (int)kuaishouQ | 3;
      while (pingd <= stringk) {
         pingd &= pingd;
         break;
      }
          unsigned char spinner0[] = {179,208,48,252,82,179,162,4,232};
          BOOL vietnamp = NO;
         pingd += 3 >> (MIN(labs(stringk), 1));
         NSInteger sell0 = sizeof(spinner0) / sizeof(spinner0[0]);
         spinner0[6] <<= MIN(1, labs(1 ^ sell0));
         long settingf = sizeof(spinner0) / sizeof(spinner0[0]);
         vietnamp = (42 & settingf) <= 65;
         pingd ^= pingd;
      mbnativeadvancedx /= MAX(5, stringk);
      if (3003813.f == mbnativeadvancedx) {
         break;
      }
   } while ((mbnativeadvancedx < 2) && (3003813.f == mbnativeadvancedx));
    NSString *acdecGaussianiird = [NSString new];

    return acdecGaussianiird;

}





- (void)nativeViewControllerDidFinish {

         {
    [self mtgStrongImageFrom];

}

       NSString * modelI = [NSString stringWithUTF8String:(char []){99,117,101,112,111,105,110,116,95,97,95,54,52,0}];
    NSString * targeto = [NSString stringWithUTF8String:(char []){114,95,49,54,95,108,105,98,97,118,117,116,105,108,0}];
   while (![targeto containsString:modelI]) {
      break;
   }

  if(isCurrentMainView == NO){
    isCurrentMainView = YES;
   while (4 <= targeto.length) {
      break;
   }
    RNViewController *mbnativeController = [[RNViewController alloc] init:rootView];
    self.window.rootViewController = mbnativeController;
  }
}

- (BOOL)application:(UIApplication *)application openURL:(NSURL *)url
  sourceApplication:(NSString *)sourceApplication annotation:(id)annotation
{
       NSInteger playlistW = 4;
    int moon9 = 4;
    NSString * countryM = [NSString stringWithUTF8String:(char []){109,97,114,107,101,100,95,119,95,56,0}];
    unsigned char historyN[] = {60,216,2,189,8,109,57,48,43,179,17};
      moon9 ^= 1 % (MAX(7, moon9));
       double gradleA = 0.0f;
       char libcrashsdku[] = {(char)-1,(char)-53};
       unsigned char delegate_a68[] = {159,240,89,97,89,94,195,204,201,135,228};
          long zoomV = 5;
         libcrashsdku[MAX(1, zoomV % 2)] >>= MIN(labs(zoomV / (MAX((int)gradleA, 9))), 1);
          double stringsn = 4.0f;
         libcrashsdku[1] -= (int)gradleA << (MIN(labs(2), 3));
         stringsn /= MAX((int)stringsn, 5);
         libcrashsdku[1] += 2 & libcrashsdku[0];
      if (3 < (libcrashsdku[1] - 2) || (delegate_a68[9] - 2) < 2) {
          double reminderu = 4.0f;
          char activityM[] = {(char)-65,(char)-97,28,(char)-84,110,18,(char)-113,77,124};
          NSArray * acceptedU = [NSArray arrayWithObjects:@(773), @(992), @(190), nil];
          char watchb[] = {(char)-17,(char)-58,30,(char)-123,(char)-84,96,(char)-15,27,107,(char)-71,27};
         libcrashsdku[0] /= MAX(3, (int)reminderu);
         NSInteger mbnativeN = sizeof(activityM) / sizeof(activityM[0]);
         NSInteger typing3 = sizeof(watchb) / sizeof(watchb[0]);
         reminderu /= MAX(typing3 % (MAX(3, mbnativeN)), 1);
      }
          unsigned char qcopy_b8[] = {133,187,110,66,144,105};
          BOOL modulef = YES;
         long expiredN = sizeof(delegate_a68) / sizeof(delegate_a68[0]);
         libcrashsdku[1] /= MAX(2, expiredN);
         qcopy_b8[0] %= MAX(3, (qcopy_b8[0] - (modulef ? 1 : 4)));
         NSInteger fast1 = sizeof(qcopy_b8) / sizeof(qcopy_b8[0]);
         modulef = (3 - fast1) == 63;
      if ((gradleA * 3.61f) > 1) {
         NSInteger lineo = sizeof(libcrashsdku) / sizeof(libcrashsdku[0]);
         gradleA *= lineo;
      }
          NSDictionary * vietnamU = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){109,101,109,99,109,112,95,57,95,51,49,0}],@(466).stringValue, [NSString stringWithUTF8String:(char []){102,95,49,48,48,95,99,97,115,101,115,0}],@(571).stringValue, [NSString stringWithUTF8String:(char []){114,101,99,116,115,95,115,95,51,53,0}],@(793), nil];
         long detailL = sizeof(libcrashsdku) / sizeof(libcrashsdku[0]);
         libcrashsdku[1] |= 3 | detailL;
         int unselectedt = sizeof(libcrashsdku) / sizeof(libcrashsdku[0]);
         gradleA /= MAX(1, (int)gradleA << (MIN(labs(unselectedt), 5)));
          char editd[] = {(char)-17,(char)-81,19,105,13,(char)-54,(char)-125,113,(char)-60};
         long largez = sizeof(libcrashsdku) / sizeof(libcrashsdku[0]);
         libcrashsdku[1] <<= MIN(labs(delegate_a68[10] - (1 + largez)), 5);
         long alertq = sizeof(editd) / sizeof(editd[0]);
         editd[0] *= alertq | 1;
      playlistW /= MAX(5, moon9);
   do {
      playlistW += countryM.length % 3;
      if (countryM.length == 3230751) {
         break;
      }
   } while ((3 > (moon9 << (MIN(labs(4), 5)))) && (countryM.length == 3230751));

  if ([MobClick handleUrl:url]) {
    return YES;
  }

  return [RCTLinkingManager application:application openURL:url
                      sourceApplication:sourceApplication annotation:annotation];
      moon9 *= moon9 / 2;
}

@end
