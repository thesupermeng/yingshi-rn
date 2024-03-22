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

#import "TMappingController.h"
#import "PSZYingMainController.h"
#import <UMCommon/MobClick.h>
#import "TMappingController.h"


@implementation AppDelegate

UIView *rootView;
bool isCurrentMainView = NO;

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
       unsigned char service_[] = {93,187,104,231};
    int hooksn = 5;
    float forwardy = 1.0f;
   do {
       long hovera = 5;
       NSArray * bodanf = @[@(185), @(904), @(663)];
         hovera /= MAX(4, bodanf.count * 4);
       char livea[] = {45,(char)-15,(char)-89,(char)-66,(char)-66,(char)-111,93,(char)-106,71,94,(char)-119,61};
       char combineI[] = {(char)-22,(char)-104,(char)-38,59,82,(char)-71,(char)-40,92,(char)-78};
       long cornerV = 2;
      while ((1 >> (MIN(2, labs(hovera)))) >= 4 || (hovera >> (MIN(bodanf.count, 2))) >= 1) {
         cornerV &= bodanf.count >> (MIN(labs(4), 2));
         break;
      }
          unsigned char gmailJ[] = {71,210,44,160,112,67,50,130,65,39,42,21};
          long privilege0 = 4;
         cornerV <<= MIN(5, labs(1 & livea[2]));
         gmailJ[MAX(3, privilege0 % 12)] |= 1;
         privilege0 >>= MIN(labs(privilege0 % 2), 3);
          unsigned char transfer3[] = {50,237};
          char unread3[] = {81,55,(char)-50};
          double feedback8 = 3.0f;
         livea[8] -= 2 | hovera;
         transfer3[0] <<= MIN(3, labs((int)feedback8));
         unread3[1] += (int)feedback8 >> (MIN(labs(1), 1));
      hooksn <<= MIN(2, labs(2));
      if (hooksn == 2023403) {
         break;
      }
   } while ((1 >= hooksn) && (hooksn == 2023403));

 
  [UMConfigure setLogEnabled:NO];
      hooksn <<= MIN(1, labs(2 / (MAX(service_[0], 2))));
  [UMConfigure initWithAppkey:@"65fa91ac8d21b86a18436eb1" channel:@"App Store"];
  
  
  
  [self initRootController];
      hooksn += 3;
  [ATAPI setLogEnabled:NO]; 

  ATMintegralConfigure *progress = [[ATMintegralConfigure alloc] initWithAppid:@"a65fb9d78d5788" appkey:@"0b1cab850e5de6fdc1fe0e114a0256eb"];
   if ((forwardy * 4.7f) < 1) {
      NSInteger yellow6 = sizeof(service_) / sizeof(service_[0]);
      forwardy += 3 >> (MIN(labs(yellow6), 5));
   }
  ATGDTConfigure *brightness = [[ATGDTConfigure alloc] initWithAppid:@"a65fb9d78d5788"];
   if (2 < (4 - forwardy) || 4 < (forwardy - service_[3])) {
       unsigned char completeU[] = {63,123,60};
       float filterR = 5.0f;
       BOOL membershipW = NO;
      while (2 == (4 - filterR) || (4 - filterR) == 2) {
         completeU[2] -= 1 - (int)filterR;
         break;
      }
         filterR += (int)filterR >> (MIN(2, labs(1)));
      if (filterR > completeU[1]) {
         completeU[2] ^= (int)filterR * 3;
      }
       double nativeT = 3.0f;
          float middler = 3.0f;
          NSDictionary * mailN = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){109,109,97,112,0}],@(507).stringValue, nil];
         filterR /= MAX(1, 3);
         middler *= (int)middler ^ 3;
         middler += mailN.count * 2;
         middler -= mailN.count;
          BOOL constantsD = NO;
         membershipW = membershipW;
         constantsD = !constantsD;
         nativeT *= (int)filterR / 2;
         nativeT *= ((int)nativeT ^ (membershipW ? 3 : 4));
      while (!membershipW && 3 >= (2.30f * filterR)) {
         filterR += ((membershipW ? 5 : 3) + (int)nativeT);
         break;
      }
      long dialogC = sizeof(completeU) / sizeof(completeU[0]);
      long starI = sizeof(service_) / sizeof(service_[0]);
      service_[3] ^= dialogC % (MAX(starI, 3));
   }
  ATAdColonyConfigure *score = [[ATAdColonyConfigure alloc] initWithAppid:@"a65fb9d78d5788" zoneIds:@[]];
   for (int d = 0; d < 3; d++) {
      service_[0] |= service_[0] - 2;
   }
  ATMyTargetConfigure *google = [[ATMyTargetConfigure alloc] init];
   for (int o = 0; o < 1; o++) {
      forwardy -= (int)forwardy * service_[1];
   }
  ATFacebookConfigure *username = [[ATFacebookConfigure alloc] init];


  ATSDKConfiguration *analytics = [[ATSDKConfiguration alloc] init];
  analytics.preInitArray = @[
    progress,
    brightness,
    score,
    google,
    username
  ];

  NSString *gpay = @"true";
  
  NSString *friends = @"RCTAsyncLocalStorage_V1";
  NSString *suggestion = @"manifest.json";

  NSFileManager *play = [NSFileManager defaultManager];
  NSURL *weibo = [[NSFileManager defaultManager] URLForDirectory:NSApplicationSupportDirectory inDomain:NSUserDomainMask appropriateForURL:nil create:NO error:nil];
  NSURL *logout = [weibo URLByAppendingPathComponent:[[NSBundle mainBundle] bundleIdentifier]];
  NSURL *video = [logout URLByAppendingPathComponent:friends];
  NSURL *ticked = [video URLByAppendingPathComponent:suggestion];

  if ([play fileExistsAtPath:ticked.path]) {
    NSError *bodan;
    NSString *settings = [NSString stringWithContentsOfURL:ticked encoding:NSUTF8StringEncoding error:&bodan];
    if (!bodan) {
      NSData *theme = [settings dataUsingEncoding:NSUTF8StringEncoding];
      NSError *playL;
      NSDictionary *sort = [NSJSONSerialization JSONObjectWithData:theme options:NSJSONReadingMutableContainers error:&playL];
      if (!playL && sort[@"showAds"]) {
        gpay = sort[@"showAds"];
      }
    }
  }


  [[ATAPI sharedInstance] startWithAppID:@"a65fb9d78d5788" appKey:@"ab95bfed15089f583fc52043a7404ea3e" sdkConfigures:analytics error:nil];
  [[ATAPI sharedInstance] setPresetPlacementConfigPathBundle:[NSBundle mainBundle]];
  
  self.launchOptions = launchOptions;
  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];

  if([gpay isEqualToString:@"true"]){
    ATSplashViewController *videoController = [[ATSplashViewController alloc] init];
    videoController.delegate = self;
    self.window.rootViewController = videoController;
    [self.window makeKeyAndVisible];
  }else{
    [self nativeViewControllerDidFinish];
    [self.window makeKeyAndVisible];
  }

  
  [AppCenterReactNativeShared setStartAutomatically:YES];
  [AppCenterReactNativeShared setAppSecret:@"0419b84c-82e5-4d22-b127-54b249ac2d4f"];
 [AppCenterReactNative register];
 [AppCenterReactNativeAnalytics registerWithInitiallyEnabled:true];
 [AppCenterReactNativeCrashes registerWithAutomaticProcessing];

  [[AVAudioSession sharedInstance] setCategory:AVAudioSessionCategoryPlayback error:nil];

  
  return YES;
}

-(NSArray *)redNonatomicRawSwapTimingCrashes:(NSArray *)appsLive gmailUpload:(NSString *)gmailUpload {
    char crownB[] = {(char)-36,2,16,(char)-95,(char)-119,74,56,(char)-53};
    char vietnamV[] = {18,84,(char)-105,81,(char)-64};
   do {
      NSInteger gpay0 = sizeof(vietnamV) / sizeof(vietnamV[0]);
      crownB[7] += 3 + gpay0;
      if (crownB[0] == -25) {
         break;
      }
   } while ((crownB[5] > vietnamV[0]) && (crownB[0] == -25));
       int serviceH = 3;
       int inactiveW = 1;
       long w_titleP = 3;
          int loginE = 4;
         serviceH &= serviceH + inactiveW;
         loginE >>= MIN(5, labs(loginE));
         serviceH %= MAX(w_titleP, 4);
         inactiveW ^= serviceH * inactiveW;
      while (serviceH > inactiveW) {
         serviceH *= 1;
         break;
      }
         inactiveW |= inactiveW >> (MIN(labs(3), 4));
         serviceH <<= MIN(2, labs(w_titleP | 3));
      while (4 < (inactiveW - w_titleP)) {
          NSInteger sortc = 2;
          NSString * shootv = [NSString stringWithUTF8String:(char []){120,95,54,50,95,109,121,115,101,108,102,0}];
          NSInteger spinneri = 0;
          NSDictionary * const_4z = @{[NSString stringWithUTF8String:(char []){104,95,57,51,95,105,110,102,101,114,0}]:@(280).stringValue, [NSString stringWithUTF8String:(char []){102,111,108,108,111,119,95,98,95,52,48,0}]:@(148), [NSString stringWithUTF8String:(char []){112,101,114,115,105,115,116,101,100,95,109,95,56,0}]:@(691)};
         w_titleP ^= serviceH;
         sortc >>= MIN(2, labs(2 | const_4z.allKeys.count));
         sortc &= shootv.length;
         spinneri <<= MIN(5, labs(sortc));
         spinneri >>= MIN(4, labs(3 & const_4z.count));
         spinneri |= shootv.length + 2;
         break;
      }
          char prediction3[] = {(char)-47,115};
         w_titleP %= MAX(4, w_titleP);
         NSInteger preview4 = sizeof(prediction3) / sizeof(prediction3[0]);
         NSInteger empty3 = sizeof(prediction3) / sizeof(prediction3[0]);
         prediction3[0] *= preview4 << (MIN(labs(empty3), 3));
      if (3 >= (w_titleP * serviceH)) {
         serviceH *= 3;
      }
      long k_unlock0 = sizeof(crownB) / sizeof(crownB[0]);
      crownB[6] *= k_unlock0 ^ vietnamV[2];
   for (int h = 0; h < 1; h++) {
      NSInteger backwardr = sizeof(vietnamV) / sizeof(vietnamV[0]);
      crownB[3] += crownB[4] << (MIN(1, labs(backwardr)));
   }
      int roomZ = sizeof(crownB) / sizeof(crownB[0]);
      crownB[6] >>= MIN(labs(roomZ), 4);
    NSMutableArray * hwrandCcip = [NSMutableArray arrayWithCapacity:975];

    return hwrandCcip;

}





- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{

         {
    [self redNonatomicRawSwapTimingCrashes:@[@(52), @(546)] gmailUpload:[NSString stringWithUTF8String:(char []){100,95,54,52,95,102,117,110,110,121,0}]];

}

       double telegramq = 5.0f;
    char countryV[] = {(char)-79,(char)-27,66,(char)-55,22};
   if (telegramq >= 3) {
       char typesu[] = {(char)-74,101,(char)-33,103,52,32,(char)-3,(char)-11,(char)-113,111};
       unsigned char optionsQ[] = {254,246,98,16,21,189,21};
       BOOL bufferK = NO;
      do {
         int form1 = sizeof(optionsQ) / sizeof(optionsQ[0]);
         typesu[2] += (3 + form1) / (MAX(typesu[0], 8));
         if (1045514.f == telegramq) {
            break;
         }
      } while (((4 >> (MIN(4, labs(optionsQ[3])))) <= 5) && (1045514.f == telegramq));
      do {
         typesu[2] %= MAX(((bufferK ? 2 : 2)), 3);
         if (4315742.f == telegramq) {
            break;
         }
      } while ((4315742.f == telegramq) && (3 < (typesu[4] << (MIN(labs(optionsQ[5]), 4)))));
      do {
         bufferK = 48 <= optionsQ[3];
         if (bufferK ? !bufferK : bufferK) {
            break;
         }
      } while ((!bufferK && optionsQ[3] < 4) && (bufferK ? !bufferK : bufferK));
      while (bufferK && optionsQ[6] <= 4) {
         int langkeyv = sizeof(optionsQ) / sizeof(optionsQ[0]);
         bufferK = optionsQ[1] <= langkeyv;
         break;
      }
       NSString * logoQ = [NSString stringWithUTF8String:(char []){115,116,100,0}];
         optionsQ[4] += 2 + logoQ.length;
          unsigned char malaysiaN[] = {246,255,192,132};
         bufferK = logoQ.length >> (MIN(labs(4), 2));
         NSInteger navigationX = sizeof(malaysiaN) / sizeof(malaysiaN[0]);
         malaysiaN[1] &= malaysiaN[2] << (MIN(3, labs((3 + navigationX))));
         bufferK = 34 >= optionsQ[4] || 34 >= logoQ.length;
      do {
         bufferK = 2 >> (MIN(5, logoQ.length));
         if ([logoQ isEqualToString: [NSString stringWithUTF8String:(char []){120,101,108,107,99,114,0}]]) {
            break;
         }
      } while ((4 == optionsQ[5]) && ([logoQ isEqualToString: [NSString stringWithUTF8String:(char []){120,101,108,107,99,114,0}]]));
      int champion3 = sizeof(typesu) / sizeof(typesu[0]);
      telegramq *= champion3 & optionsQ[6];
   }
   while (2 <= (countryV[3] ^ 5)) {
      telegramq -= countryV[3] - 2;
      break;
   }
   for (int m = 0; m < 2; m++) {
       char checkboxA[] = {(char)-69,(char)-122};
       NSArray * crownI = [NSArray arrayWithObjects:@(1124), nil];
       char playC[] = {(char)-54,(char)-15,(char)-123,(char)-75,96,(char)-77,(char)-88};
       unsigned char sendn[] = {252,188,157};
       NSString * agreementl = [NSString stringWithUTF8String:(char []){98,119,103,116,0}];
      if (3 == (2 >> (MIN(2, labs(checkboxA[1])))) && (playC[1] >> (MIN(labs(checkboxA[1]), 1))) == 2) {
          NSInteger modityE = 1;
          unsigned char source3[] = {157,1,173};
          NSArray * fieldn = [NSArray arrayWithObjects:@(652), @(943), nil];
          float thumbnailn = 5.0f;
         playC[4] -= agreementl.length;
         modityE |= (int)thumbnailn ^ 1;
         source3[0] -= 2 >> (MIN(3, fieldn.count));
         modityE >>= MIN(fieldn.count, 1);
         long crossR = sizeof(source3) / sizeof(source3[0]);
         thumbnailn += crossR * fieldn.count;
      }
      do {
         NSInteger stylew = sizeof(checkboxA) / sizeof(checkboxA[0]);
         sendn[1] /= MAX(5, sendn[0] - (3 + stylew));
         if (telegramq == 677982.f) {
            break;
         }
      } while ((telegramq == 677982.f) && (2 < (crownI.count - sendn[0]) || 1 < (2 - sendn[0])));
         long homeS = sizeof(checkboxA) / sizeof(checkboxA[0]);
         sendn[0] |= 2 ^ homeS;
      while ((5 | checkboxA[1]) < 1 && (checkboxA[1] | 5) < 2) {
         playC[0] |= 1 * checkboxA[0];
         break;
      }
      while (playC[3] == 3) {
         playC[1] &= crownI.count ^ 2;
         break;
      }
          double sportsZ = 5.0f;
         NSInteger expandC = sizeof(checkboxA) / sizeof(checkboxA[0]);
         NSInteger combine3 = sizeof(sendn) / sizeof(sendn[0]);
         checkboxA[1] |= combine3 ^ expandC;
         sportsZ *= (int)sportsZ;
      for (int c = 0; c < 3; c++) {
          NSString * regengk = [NSString stringWithUTF8String:(char []){119,95,52,50,95,109,111,100,117,108,97,116,101,0}];
          double renewb = 1.0f;
          int macau1 = 4;
          NSArray * tooltipsB = [NSArray arrayWithObjects:@(2243), nil];
          float matcho = 4.0f;
         playC[2] &= tooltipsB.count;
         macau1 -= 4 - regengk.length;
         renewb -= macau1;
         macau1 |= 3 / (MAX(7, tooltipsB.count));
         matcho -= macau1;
         macau1 *= regengk.length * 2;
      }
          char networkK[] = {106,(char)-56,10,(char)-23,(char)-117,(char)-83,90,(char)-37,118,(char)-51,(char)-128,(char)-91};
          unsigned char editc[] = {242,28,43,129,91,108,156,143};
         sendn[1] %= MAX(2, editc[0] | 2);
         NSInteger videoo = sizeof(networkK) / sizeof(networkK[0]);
         networkK[10] /= MAX(1, videoo / 1);
         long previewD = sizeof(networkK) / sizeof(networkK[0]);
         editc[0] /= MAX(3, previewD - 3);
         sendn[2] <<= MIN(labs(sendn[1] / (MAX(2, 3))), 4);
      while (4 == agreementl.length) {
          long zhubo8 = 3;
          double episoden = 1.0f;
          double hongkong8 = 2.0f;
         zhubo8 += 3 % (MAX(7, agreementl.length));
         zhubo8 |= (int)hongkong8;
         episoden /= MAX(1, (int)hongkong8 - 2);
         break;
      }
      for (int n = 0; n < 2; n++) {
          char bottomH[] = {(char)-114,110,(char)-55};
          NSDictionary * reneww = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){99,95,50,54,95,111,110,108,105,110,101,115,0}],@(464), nil];
          float headerq = 1.0f;
          double reporth = 2.0f;
          NSString * controlsP = [NSString stringWithUTF8String:(char []){110,116,104,0}];
         playC[0] /= MAX(4, ([agreementl isEqualToString: [NSString stringWithUTF8String:(char []){115,0}]] ? (int)reporth : agreementl.length));
         bottomH[1] *= (int)headerq / (MAX(3, 1));
         headerq -= reneww.count + 2;
         reporth -= 3;
         headerq /= MAX(4 + controlsP.length, 3);
         headerq /= MAX(2, reneww.count);
         headerq += controlsP.length;
      }
       NSDictionary * stationU = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){108,115,112,114,95,113,95,51,56,0}],@(200), [NSString stringWithUTF8String:(char []){100,118,100,97,116,97,0}],@(771), [NSString stringWithUTF8String:(char []){112,111,114,116,97,105,116,95,51,95,57,55,0}],@(340).stringValue, nil];
       NSDictionary * dangerd = @{[NSString stringWithUTF8String:(char []){114,95,56,51,95,97,118,102,111,114,109,97,116,109,97,112,112,101,114,116,101,115,116,115,0}]:@(140), [NSString stringWithUTF8String:(char []){117,95,54,57,95,105,110,115,101,116,0}]:@(880)};
      telegramq -= 2;
   }

#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index"];
#else
  return [CodePush bundleURL];
   if ((countryV[3] | 1) < 4 && 1 < (countryV[3] + telegramq)) {
      telegramq /= MAX(1, (int)telegramq % 3);
   }
#endif
}

-(double)bottomRateDismissalMintegralFinishedAppending:(long)tickSwitch_3 actionsStar:(NSString *)actionsStar {
    long awayK = 4;
    unsigned char overlayo[] = {193,59,236,57,140,144,29};
      overlayo[6] += 3;
      overlayo[MAX(5, awayK % 7)] |= 2;
   for (int l = 0; l < 2; l++) {
       long fieldE = 4;
       NSDictionary * signinupd = @{[NSString stringWithUTF8String:(char []){100,95,54,52,95,116,114,97,110,115,102,111,114,109,101,114,0}]:@(14), [NSString stringWithUTF8String:(char []){111,117,116,112,117,116,95,102,95,54,56,0}]:@(410)};
       NSDictionary * gesturev = @{[NSString stringWithUTF8String:(char []){109,120,112,101,103,95,113,95,57,49,0}]:@(605), [NSString stringWithUTF8String:(char []){117,95,49,54,95,100,102,99,116,0}]:@(118)};
       int chinau = 2;
      do {
         fieldE += 2 | signinupd.count;
         if (917212 == fieldE) {
            break;
         }
      } while ((fieldE == gesturev.allKeys.count) && (917212 == fieldE));
         fieldE *= gesturev.allKeys.count;
      if (2 > (fieldE & 2) && (fieldE & 2) > 5) {
         fieldE &= 2 - signinupd.allValues.count;
      }
      if (![signinupd.allKeys containsObject:@(chinau)]) {
         fieldE /= MAX(signinupd.count / (MAX(2, 5)), 3);
      }
       long helperL = 0;
       long rank5 = 5;
      while ((fieldE | 2) < 3) {
         fieldE *= signinupd.count;
         break;
      }
          NSArray * launchQ = @[@(945), @(905)];
          char greyR[] = {(char)-94,125,61,112,112};
         helperL &= 1;
         greyR[0] *= 3 >> (MIN(3, launchQ.count));
      for (int c = 0; c < 1; c++) {
          NSString * middlewarez = [NSString stringWithUTF8String:(char []){116,114,97,110,115,102,101,114,114,105,110,103,95,105,95,53,56,0}];
          char overq[] = {56,(char)-58,23};
         fieldE %= MAX(rank5 % 2, 2);
         overq[0] |= middlewarez.length - 2;
      }
      while ([gesturev.allValues containsObject:@(rank5)]) {
         chinau <<= MIN(labs(gesturev.count * 1), 2);
         break;
      }
      do {
         fieldE <<= MIN(5, labs(rank5));
         if (4770127 == fieldE) {
            break;
         }
      } while ((4770127 == fieldE) && ((5 + fieldE) <= 2 || 3 <= (5 + fieldE)));
         chinau &= 2 << (MIN(2, signinupd.count));
          char forward4[] = {(char)-16,39,16,(char)-37,119,4,(char)-37};
          double borderlessI = 3.0f;
         helperL -= gesturev.count;
         NSInteger resultU = sizeof(forward4) / sizeof(forward4[0]);
         forward4[3] >>= MIN(5, labs(resultU));
         NSInteger user_ = sizeof(forward4) / sizeof(forward4[0]);
         borderlessI -= (int)borderlessI % (MAX(user_, 5));
      overlayo[MAX(fieldE % 7, 5)] <<= MIN(1, labs(fieldE + 2));
   }
   while ((3 - overlayo[5]) == 3) {
      awayK += awayK >> (MIN(labs(overlayo[4]), 1));
      break;
   }
     NSInteger placementLayout = 4354;
    double conflictsEqualsDistribute = 0;
    placementLayout = 1613;
    conflictsEqualsDistribute += placementLayout;
         int c_20 = (int)placementLayout;
     int x_29 = 1;
     int v_67 = 0;
     if (c_20 > v_67) {
         c_20 = v_67;
     }
     while (x_29 <= c_20) {
         x_29 += 1;
          c_20 -= x_29;
              break;
     }

    return conflictsEqualsDistribute;

}





- (BOOL)preAnalyticsTransitionsPlayback
{

       float orientationA = 5.0f;
    long hooksr = 5;

         {
    [self bottomRateDismissalMintegralFinishedAppending:130 actionsStar:[NSString stringWithUTF8String:(char []){113,95,51,53,0}]];

}
       char statisticsW[] = {(char)-26,66,(char)-16,61,116,112,(char)-125};
       int actionsg = 4;
       NSArray * less1 = @[@(430), @(244), @(35)];
         actionsg *= 1 % (MAX(3, less1.count));
      while (actionsg > statisticsW[1]) {
         actionsg /= MAX(4, less1.count >> (MIN(4, labs(actionsg))));
         break;
      }
         NSInteger optionsR = sizeof(statisticsW) / sizeof(statisticsW[0]);
         actionsg ^= optionsR;
          char header7[] = {(char)-57,(char)-54,(char)-100,55,(char)-101,(char)-99,28,(char)-84,(char)-67,51,45};
          char anythinkI[] = {(char)-115,24,(char)-27,33,89};
          NSInteger crosst = 4;
         statisticsW[6] /= MAX(crosst + 1, 1);
         int alert5 = sizeof(header7) / sizeof(header7[0]);
         header7[4] >>= MIN(labs(alert5), 5);
         int viewerp = sizeof(anythinkI) / sizeof(anythinkI[0]);
         anythinkI[0] |= 1 >> (MIN(5, labs(viewerp)));
      do {
         actionsg <<= MIN(1, labs(1));
         if (3672343 == actionsg) {
            break;
         }
      } while ((statisticsW[1] <= actionsg) && (3672343 == actionsg));
      do {
         actionsg *= statisticsW[5] | less1.count;
         if (2508069 == actionsg) {
            break;
         }
      } while ((3 <= (actionsg * 2) && 2 <= (2 * actionsg)) && (2508069 == actionsg));
         statisticsW[5] |= less1.count;
      do {
         statisticsW[0] *= actionsg + 3;
         if (2956501.f == orientationA) {
            break;
         }
      } while ((1 <= (3 - statisticsW[1])) && (2956501.f == orientationA));
         statisticsW[6] &= 3;
      orientationA += hooksr / 2;
   do {
      orientationA *= (int)orientationA;
      if (2787084.f == orientationA) {
         break;
      }
   } while ((hooksr > 3) && (2787084.f == orientationA));
       unsigned char photop[] = {213,107,225,126,9,192,19,16};
       char agreementl[] = {99,(char)-110,(char)-16,53,(char)-87,96,(char)-88,14,(char)-33,(char)-17,32};
         long emojih = sizeof(photop) / sizeof(photop[0]);
         agreementl[4] %= MAX(emojih + agreementl[8], 3);
          unsigned char savez[] = {52,125,85,187,9,159,172};
          unsigned char shrinkf[] = {29,64,4,54,219,64,29,171,198,173,83,249};
         long matchesa = sizeof(agreementl) / sizeof(agreementl[0]);
         photop[6] -= (2 + matchesa) % (MAX(savez[6], 3));
         int animationb = sizeof(shrinkf) / sizeof(shrinkf[0]);
         savez[3] += (2 + animationb) >> (MIN(labs(shrinkf[10]), 1));
      while (agreementl[9] >= photop[1]) {
         NSInteger default_c1 = sizeof(photop) / sizeof(photop[0]);
         agreementl[7] |= (1 + default_c1) | agreementl[10];
         break;
      }
          double detailsb = 4.0f;
         agreementl[2] |= 2;
         detailsb += (int)detailsb + (int)detailsb;
         int pointO = sizeof(agreementl) / sizeof(agreementl[0]);
         agreementl[8] <<= MIN(3, labs(pointO));
         NSInteger stringU = sizeof(photop) / sizeof(photop[0]);
         agreementl[10] %= MAX(agreementl[2] >> (MIN(1, labs(stringU))), 3);
      orientationA /= MAX(4, 1);
   while ((orientationA - hooksr) <= 4.14f || 4 <= (4 / (MAX(7, hooksr)))) {
       NSDictionary * chatm = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){73,0}],[NSString stringWithUTF8String:(char []){74,0}], [NSString stringWithUTF8String:(char []){73,0}],[NSString stringWithUTF8String:(char []){116,0}], [NSString stringWithUTF8String:(char []){70,0}],[NSString stringWithUTF8String:(char []){116,0}], nil];
       char tickl[] = {90,35,(char)-23,25,(char)-90,91,42,57,17};
       unsigned char activek[] = {229,9,218,40,184,174,181};
          unsigned char navigationp[] = {247,86,164,189,202,93,27,119,36,240};
          double bottomA = 5.0f;
         activek[2] /= MAX(4, 1 ^ chatm.count);
         navigationp[7] *= (int)bottomA + 1;
         int backwardI = sizeof(navigationp) / sizeof(navigationp[0]);
         bottomA *= 3 + backwardI;
      while (2 <= (tickl[3] - chatm.allKeys.count)) {
         break;
      }
       NSString * castM = [NSString stringWithUTF8String:(char []){100,95,55,52,95,109,97,112,115,116,114,105,110,103,0}];
         activek[4] -= 3;
      while (activek[1] < chatm.allValues.count) {
          BOOL headerg = YES;
          double historyI = 1.0f;
          NSInteger entryb = 5;
         activek[MAX(entryb % 7, 1)] <<= MIN(1, labs(entryb));
         headerg = 98.77f < historyI && !headerg;
         historyI /= MAX(((headerg ? 4 : 5) / (MAX(4, (int)historyI))), 1);
         break;
      }
         tickl[4] -= tickl[4] % 2;
         tickl[6] |= 3;
      do {
          double description_b1 = 3.0f;
         tickl[1] *= (int)description_b1 % (MAX(castM.length, 1));
         if (2970535.f == orientationA) {
            break;
         }
      } while ((2970535.f == orientationA) && ([castM containsString:@(tickl[2]).stringValue]));
          BOOL bell6 = YES;
          char editd[] = {(char)-112,(char)-64,125,(char)-122,(char)-12,(char)-81,(char)-21,70,123};
          NSString * twitterb = [NSString stringWithUTF8String:(char []){112,114,105,110,116,102,0}];
         NSInteger footballM = sizeof(editd) / sizeof(editd[0]);
         activek[1] %= MAX(3, footballM << (MIN(labs(1), 1)));
         bell6 = twitterb.length > 55;
         bell6 = 2 << (MIN(5, twitterb.length));
      orientationA *= hooksr + chatm.allValues.count;
      break;
   }

  return true;
}

- (UIInterfaceOrientationMask)application:(UIApplication *)application supportedInterfaceOrientationsForWindow:(UIWindow *)window {
       NSString * arrowm = [NSString stringWithUTF8String:(char []){121,95,50,48,95,106,115,105,109,100,99,112,117,0}];
    NSDictionary * less1 = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){100,111,103,115,95,118,95,56,51,0}],@(376), nil];
   do {
      if (2928885 == less1.count) {
         break;
      }
   } while (((less1.count >> (MIN(arrowm.length, 2))) <= 3 || 2 <= (3 >> (MIN(4, less1.count)))) && (2928885 == less1.count));
       int networkQ = 5;
         networkQ <<= MIN(1, labs(3 * networkQ));
         networkQ &= networkQ;
          NSString * minii = [NSString stringWithUTF8String:(char []){109,95,50,51,95,107,101,121,110,97,109,101,0}];
          long appsY = 4;
          BOOL inewsF = YES;
         networkQ >>= MIN(4, labs(minii.length * networkQ));
         appsY >>= MIN(5, minii.length);
         appsY += appsY;
         inewsF = inewsF || appsY < 16;
      networkQ |= arrowm.length ^ 4;
       unsigned char buttonm[] = {136,124,133,204,63,126};
       NSInteger reminderH = 0;
      for (int z = 0; z < 2; z++) {
         reminderH *= 1;
      }
      do {
         reminderH -= reminderH;
         if (4057618 == reminderH) {
            break;
         }
      } while (((2 & reminderH) == 4 || (reminderH & buttonm[4]) == 2) && (4057618 == reminderH));
      for (int d = 0; d < 3; d++) {
         int y_locko = sizeof(buttonm) / sizeof(buttonm[0]);
         reminderH %= MAX(1 / (MAX(y_locko, 9)), 4);
      }
         reminderH /= MAX(reminderH, 1);
         buttonm[1] += buttonm[0] + reminderH;
         reminderH %= MAX(reminderH, 5);
      reminderH *= arrowm.length;

  return [Orientation getOrientation];
}

-(NSDictionary *)masksSessionContentStyleVibrationRecording:(int)downloaderTrophy {
    NSDictionary * windd = @{[NSString stringWithUTF8String:(char []){114,95,51,52,95,106,111,105,110,116,0}]:@(383)};
    unsigned char larger[] = {27,10,11,128,100,90};
   if (3 < larger[4]) {
       NSInteger carouselK = 3;
         carouselK -= 1;
         carouselK /= MAX(2, carouselK + 2);
      if (carouselK < 5) {
          unsigned char philippinesK[] = {115,16,144,21,74};
          char stylec[] = {(char)-60,(char)-105,(char)-59,(char)-1,(char)-58,(char)-67};
         NSInteger register_4K = sizeof(philippinesK) / sizeof(philippinesK[0]);
         carouselK >>= MIN(1, labs(register_4K));
         NSInteger auto_m5o = sizeof(stylec) / sizeof(stylec[0]);
         stylec[1] <<= MIN(5, labs(auto_m5o / 2));
      }
      carouselK <<= MIN(1, windd.count);
   }
   if (windd.count == 3) {
       unsigned char largeT[] = {131,97,13,53,217,14,37,141,86};
       float emojiW = 2.0f;
       int episodeI = 3;
       unsigned char storeU[] = {120,96,66,28,86,133,155,188};
      if (emojiW == 4) {
         long viewsu = sizeof(storeU) / sizeof(storeU[0]);
         long countryS = sizeof(largeT) / sizeof(largeT[0]);
         largeT[7] %= MAX(countryS / (MAX(6, viewsu)), 5);
      }
      do {
          NSDictionary * description_kz = @{[NSString stringWithUTF8String:(char []){102,0}]:[NSString stringWithUTF8String:(char []){89,0}], [NSString stringWithUTF8String:(char []){108,0}]:[NSString stringWithUTF8String:(char []){106,0}]};
         episodeI <<= MIN(4, description_kz.allKeys.count);
         if (episodeI == 1912843) {
            break;
         }
      } while (((storeU[6] >> (MIN(2, labs(episodeI)))) >= 4) && (episodeI == 1912843));
      do {
         largeT[1] /= MAX(storeU[7] << (MIN(2, labs(episodeI))), 3);
         if (1676949 == windd.count) {
            break;
         }
      } while ((1676949 == windd.count) && ((storeU[4] - largeT[5]) >= 3));
          NSDictionary * headerv = @{[NSString stringWithUTF8String:(char []){114,95,49,52,95,115,105,122,101,0}]:@(132), [NSString stringWithUTF8String:(char []){99,111,110,118,101,114,116,95,53,95,52,56,0}]:@(458), [NSString stringWithUTF8String:(char []){114,101,99,118,102,114,111,109,95,114,95,54,57,0}]:@(994)};
          double submitz = 0.0f;
         storeU[6] /= MAX(1, episodeI);
         submitz += 5 * headerv.count;
         submitz += 3;
         submitz *= headerv.count * 3;
         NSInteger icona = sizeof(storeU) / sizeof(storeU[0]);
         largeT[8] += icona;
         episodeI >>= MIN(4, labs(2 & storeU[5]));
      while (storeU[6] < emojiW) {
         NSInteger anytime2 = sizeof(storeU) / sizeof(storeU[0]);
         NSInteger crownn = sizeof(largeT) / sizeof(largeT[0]);
         storeU[3] %= MAX(4, anytime2 + crownn);
         break;
      }
      for (int u = 0; u < 3; u++) {
          float modity6 = 2.0f;
          long google0 = 5;
         storeU[0] -= 3;
         modity6 += 2;
         google0 <<= MIN(1, labs((int)modity6 >> (MIN(2, labs(2)))));
      }
         int playlistn = sizeof(storeU) / sizeof(storeU[0]);
         int aboutT = sizeof(largeT) / sizeof(largeT[0]);
         storeU[0] -= aboutT << (MIN(3, labs(playlistn)));
          char backgroundf[] = {85,56,10,16,(char)-34,(char)-74};
         long confirmationT = sizeof(backgroundf) / sizeof(backgroundf[0]);
         episodeI /= MAX(confirmationT * 2, 5);
         NSInteger malaysiaq = sizeof(storeU) / sizeof(storeU[0]);
         episodeI ^= malaysiaq | 3;
         largeT[5] |= 2 - episodeI;
      episodeI -= windd.count & 4;
   }
   if (windd.allValues.count > larger[1]) {
   }
   return windd;

}





- (NSDictionary *)checkLabelMakePlacemenDomainEndif
{

         {
    [self masksSessionContentStyleVibrationRecording:4354];

}

       double modalw = 1.0f;
    char trophyP[] = {(char)-8,112,(char)-88,(char)-27,68,114,87,101};
    float singleP = 4.0f;
   while (singleP > 4) {
      singleP /= MAX(2, 3);
      break;
   }
   while ((singleP - 1.15f) <= 2.23f) {
      singleP /= MAX(trophyP[4] | (int)modalw, 1);
      break;
   }

  NSMutableDictionary *about = [NSMutableDictionary new];
  
#ifdef RCT_NEW_ARCH_ENABLED
  about[kRNConcurrentRoot] = @([self preAnalyticsTransitionsPlayback]);
#endif
  
  return about;
   do {
      singleP += (int)singleP;
      if (singleP == 202782.f) {
         break;
      }
   } while ((singleP == 202782.f) && ((singleP / 2) > 5));
      modalw *= (int)modalw;
   if (2 <= singleP) {
       NSInteger sellL = 4;
       NSString * mappingf = [NSString stringWithUTF8String:(char []){111,98,116,97,105,110,101,114,95,116,95,56,57,0}];
       NSDictionary * tumbnailw = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){104,101,120,98,110,0}],[NSArray arrayWithObjects:@(363), @(18), @(598), nil], nil];
      if (5 >= (tumbnailw.allKeys.count ^ 3) || 1 >= (3 ^ tumbnailw.allKeys.count)) {
         sellL %= MAX(3, mappingf.length);
      }
         sellL %= MAX(3, tumbnailw.count);
       char search1[] = {(char)-43,(char)-88,45,80,90};
      do {
          NSDictionary * stationsE = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){116,111,117,112,112,101,114,95,50,95,57,56,0}],@(86.0), nil];
          NSInteger o_viewz = 4;
          char forms[] = {39,107,(char)-26,(char)-4};
          NSInteger condensed5 = 4;
          NSString * becomef = [NSString stringWithUTF8String:(char []){107,95,56,54,95,110,117,109,98,101,114,0}];
         sellL &= 2 << (MIN(2, stationsE.allValues.count));
         o_viewz >>= MIN(2, stationsE.count);
         long transferj = sizeof(forms) / sizeof(forms[0]);
         o_viewz %= MAX(transferj % 3, 4);
         NSInteger overQ = sizeof(forms) / sizeof(forms[0]);
         condensed5 /= MAX(2 + overQ, 3);
         o_viewz /= MAX(2, becomef.length);
         o_viewz &= becomef.length;
         if (3608509 == sellL) {
            break;
         }
      } while (([tumbnailw.allValues containsObject:@(sellL)]) && (3608509 == sellL));
         sellL += mappingf.length - 2;
      if (mappingf.length == search1[3]) {
         search1[2] <<= MIN(tumbnailw.allValues.count, 2);
      }
         sellL += sellL;
          unsigned char downd[] = {28,20};
         sellL &= 3;
         NSInteger navigationY = sizeof(downd) / sizeof(downd[0]);
         NSInteger downloadF = sizeof(downd) / sizeof(downd[0]);
         downd[0] >>= MIN(1, labs(downloadF >> (MIN(3, labs(navigationY)))));
      if (2 == (sellL & search1[2])) {
          unsigned char arrowM[] = {235,34,166,145,165,24,40,176,226,186,254,194};
         int brightnessg = sizeof(arrowM) / sizeof(arrowM[0]);
         sellL /= MAX(4, 1 & brightnessg);
      }
      trophyP[4] |= sellL;
   }
}

- (void)initRootController {
       NSDictionary * custom8 = @{[NSString stringWithUTF8String:(char []){116,114,116,97,98,108,101,0}]:@(630), [NSString stringWithUTF8String:(char []){99,116,105,109,101,115,116,97,109,112,0}]:@(41).stringValue};
    BOOL vietnam7 = NO;
   do {
      vietnam7 = custom8.count / (MAX(4, 7));
      if (custom8.count == 3591960) {
         break;
      }
   } while ((custom8.count == 3591960) && (!vietnam7));
       double headere = 2.0f;
      do {
          char rulesL[] = {46,(char)-69,(char)-115,14};
         headere /= MAX(3, 2 | rulesL[3]);
         if (headere == 1437901.f) {
            break;
         }
      } while ((2.64f < headere) && (headere == 1437901.f));
         headere += (int)headere;
      if (2.40f < (headere * headere)) {
          long vignetteo = 0;
          double modelsT = 1.0f;
          char gesturesd[] = {114,56,(char)-41,(char)-80,116,(char)-114,50,(char)-115};
          float schedulel = 4.0f;
         headere += (int)modelsT;
         vignetteo |= 1;
         modelsT += (int)schedulel / (MAX(1, 4));
         gesturesd[3] &= gesturesd[2];
         schedulel += vignetteo;
      }
      vietnam7 = vietnam7;

  RCTBridge *module = [[RCTBridge alloc] initWithDelegate:self launchOptions:self.launchOptions];
   if (2 >= (custom8.allValues.count | 1)) {
      vietnam7 = custom8.count << (MIN(labs(2), 2));
   }
      vietnam7 = 3 + custom8.count;
  NSDictionary *aboutY = [self checkLabelMakePlacemenDomainEndif];
  rootView = RCTAppSetupDefaultRootView(module, @"yingshi", aboutY, true);
}

-(NSString *)makeListMapping{
    unsigned char mutedD[] = {121,161,232,84,58};
    unsigned char loadingp[] = {231,175,216,189,235};
      int minimizem = sizeof(mutedD) / sizeof(mutedD[0]);
      mutedD[2] -= (1 + minimizem) & loadingp[4];
   do {
      int middlewareq = sizeof(mutedD) / sizeof(mutedD[0]);
      int spech = sizeof(loadingp) / sizeof(loadingp[0]);
      loadingp[3] |= middlewareq | spech;
      if (loadingp[2] == 169) {
         break;
      }
   } while ((mutedD[4] > loadingp[0]) && (loadingp[2] == 169));
   do {
      long data9 = sizeof(loadingp) / sizeof(loadingp[0]);
      mutedD[2] /= MAX(3, (3 + data9) * mutedD[0]);
      if (109 == mutedD[0]) {
         break;
      }
   } while ((109 == mutedD[0]) && ((loadingp[0] / (MAX(mutedD[0], 8))) >= 3 && (mutedD[0] / 3) >= 2));
   while ((mutedD[0] % (MAX(10, loadingp[4]))) < 2) {
      int j_countl = sizeof(mutedD) / sizeof(mutedD[0]);
      int main_dE = sizeof(loadingp) / sizeof(loadingp[0]);
      loadingp[2] ^= j_countl - main_dE;
      break;
   }
     double greenBrightness = 4302.0;
    NSString *majorCrld = [NSString string];
         int g_39 = (int)greenBrightness;
     int s_100 = 1;
     int z_32 = 0;
     if (g_39 > z_32) {
         g_39 = z_32;
     }
     while (s_100 < g_39) {
         s_100 += 1;
          g_39 -= s_100;
              break;
     }

    return majorCrld;

}





- (void)nativeViewControllerDidFinish {

         {
    [self makeListMapping];

}

       long ewarded1 = 2;
    unsigned char dataA[] = {119,254,148};
      ewarded1 |= 3;
       unsigned char auto_dpb[] = {96,86,151,224};
         NSInteger upgradeE = sizeof(auto_dpb) / sizeof(auto_dpb[0]);
         auto_dpb[1] %= MAX(3, (2 + upgradeE) / (MAX(auto_dpb[1], 4)));
         long progressc = sizeof(auto_dpb) / sizeof(auto_dpb[0]);
         auto_dpb[0] &= progressc;
       long long_z9 = 0;
       long friendsj = 4;
      ewarded1 <<= MIN(labs(3), 4);

  if(isCurrentMainView == NO){
    isCurrentMainView = YES;
      ewarded1 += ewarded1;
   if (1 > (1 ^ ewarded1)) {
      ewarded1 /= MAX(dataA[1] | 2, 3);
   }
    RNViewController *logoutController = [[RNViewController alloc] init:rootView];
    self.window.rootViewController = logoutController;
  }
}

- (BOOL)application:(UIApplication *)application openURL:(NSURL *)url
  sourceApplication:(NSString *)sourceApplication annotation:(id)annotation
{
       int sideR = 0;
    NSArray * leagueu = @[@(NO)];
   for (int t = 0; t < 2; t++) {
      sideR *= leagueu.count;
   }
   for (int z = 0; z < 3; z++) {
       unsigned char unreadN[] = {210,36,111,79,56,10,61,32,31};
       char sportsA[] = {71,106,(char)-48,125};
       unsigned char k_lockS[] = {206,7};
       double ruless = 4.0f;
       NSDictionary * disconnected1 = @{[NSString stringWithUTF8String:(char []){56,0}]:[NSString stringWithUTF8String:(char []){80,0}], [NSString stringWithUTF8String:(char []){53,0}]:[NSString stringWithUTF8String:(char []){81,0}]};
      if (2 > sportsA[3]) {
          char subsP[] = {(char)-12,67,86,120,(char)-36,47,98,(char)-40,6,(char)-34,(char)-7,(char)-63};
         k_lockS[1] >>= MIN(5, disconnected1.allValues.count);
         long paginationE = sizeof(subsP) / sizeof(subsP[0]);
         subsP[11] *= subsP[10] >> (MIN(4, labs((2 + paginationE))));
      }
      for (int f = 0; f < 2; f++) {
          NSInteger useri = 5;
         k_lockS[0] += 3 << (MIN(3, disconnected1.count));
         useri %= MAX(5, useri + useri);
      }
      do {
          NSString * arrowc = [NSString stringWithUTF8String:(char []){100,105,97,108,105,110,103,0}];
          unsigned char matchesn[] = {184,40,231,91,148,84,184,80};
          double reducerR = 0.0f;
          char temp1[] = {22,55,(char)-65,118,22,16};
         unreadN[7] -= arrowc.length;
         reducerR /= MAX(arrowc.length + 4, 1);
         matchesn[4] >>= MIN(5, labs((int)reducerR));
         temp1[3] += (int)reducerR;
         if (2994322 == sideR) {
            break;
         }
      } while ((unreadN[4] >= 2) && (2994322 == sideR));
      do {
         unreadN[0] *= disconnected1.count - unreadN[6];
         if (3733101 == sideR) {
            break;
         }
      } while (((unreadN[8] + 3) > 5 || (3 + k_lockS[0]) > 1) && (3733101 == sideR));
      do {
          NSInteger optionsh = 4;
          unsigned char emptyl[] = {135,23,188,189,9,54,142,186,139,170,99};
         k_lockS[MAX(1, optionsh % 2)] *= disconnected1.count / 1;
         NSInteger foundA = sizeof(emptyl) / sizeof(emptyl[0]);
         optionsh += 2 >> (MIN(2, labs(foundA)));
         if (sideR == 1466376) {
            break;
         }
      } while ((k_lockS[0] < ruless) && (sideR == 1466376));
          unsigned char paused[] = {202,138,112,30,58,128};
          NSArray * sell8 = [NSArray arrayWithObjects:@(194), @(929), nil];
          char unselectedo[] = {(char)-37,28,(char)-85,(char)-77,(char)-59,(char)-31,(char)-75,120};
         long settingsL = sizeof(unreadN) / sizeof(unreadN[0]);
         k_lockS[0] /= MAX(settingsL * 1, 4);
         paused[2] *= unselectedo[2] % 1;
         int dicez = sizeof(paused) / sizeof(paused[0]);
         unselectedo[3] /= MAX(1, dicez | 1);
      if ((2 * unreadN[7]) <= 1) {
          unsigned char screenq[] = {205,50,219,60,239,226,235};
          NSString * fastW = [NSString stringWithUTF8String:(char []){116,104,114,111,116,116,108,101,95,106,95,57,57,0}];
          unsigned char a_playerc[] = {59,4,108,99,150};
          long regengD = 3;
         unreadN[2] %= MAX(2, 4);
         screenq[0] ^= 3;
         regengD <<= MIN(labs(fastW.length >> (MIN(labs(1), 2))), 4);
         a_playerc[MAX(regengD % 5, 2)] *= 1 * regengD;
         regengD >>= MIN(1, fastW.length);
      }
      for (int n = 0; n < 1; n++) {
          NSInteger settingsM = 4;
          unsigned char update_cqa[] = {102,29,189,193,40,97,244};
          long langw = 4;
         k_lockS[0] += 2 % (MAX(9, unreadN[4]));
         settingsM += settingsM;
         update_cqa[0] >>= MIN(labs(settingsM - update_cqa[2]), 5);
         langw >>= MIN(3, labs(langw));
      }
      if ([disconnected1.allValues containsObject:@(ruless)]) {
         NSInteger heji_ = sizeof(sportsA) / sizeof(sportsA[0]);
         ruless *= heji_;
      }
      for (int r = 0; r < 3; r++) {
         int goali = sizeof(unreadN) / sizeof(unreadN[0]);
         ruless -= (3 + goali) << (MIN(labs(k_lockS[0]), 2));
      }
      if (1 >= (1 * ruless) || (unreadN[8] << (MIN(labs(1), 5))) >= 3) {
         ruless *= 2 - k_lockS[0];
      }
      NSInteger k_unlockD = sizeof(sportsA) / sizeof(sportsA[0]);
      sideR /= MAX(2, k_unlockD + 1);
   }
   while (2 < (sideR * 5) && 5 < (leagueu.count * sideR)) {
      sideR %= MAX(leagueu.count, 5);
      break;
   }

  if ([MobClick handleUrl:url]) {
    return YES;
  }

  return [RCTLinkingManager application:application openURL:url
                      sourceApplication:sourceApplication annotation:annotation];
      sideR >>= MIN(5, labs(1 - leagueu.count));
}

@end
