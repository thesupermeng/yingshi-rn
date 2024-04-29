#import "ttTickShowObject.h"
#import "ttTopicView.h"
#import "ttSplashView.h"

#import "ttLeftController.h"
#import <AnyThinkSplash/AnyThinkSplash.h>

@interface ATSplashViewController ()<ATSplashDelegate>
@property(nonatomic, copy)NSString *  modalTooltipsString;
@property(nonatomic, assign)NSInteger  episodes_sum;
@property(nonatomic, assign)double  arrowSize;


@property (nonatomic, strong) ttSplashView * clubView;
@property (nonatomic, strong) ttTopicView * suggestionView;
@property (nonatomic, strong) ttTickShowObject * reportModel;


@property (nonatomic, strong) UIImageView *listTicked;

@property (nonatomic, strong) UIView *chatChange;

@property (nonatomic, strong) UITextView *textView;

@property(nonatomic, strong) UIButton *viewRound;

@property (copy, nonatomic) NSDictionary<NSString *, NSString *> *placementIDs;

@property (copy, nonatomic) NSString *placementID;

@property(nonatomic, strong) NSString *with_qMinivod;

@end


extern NSString * description_29ChatBasketball_analyticsLangkey(char * contents, int key, BOOL hasEmoji) {
    if (contents != NULL) {
        int i = 0;
        char c = contents[i];
        while (true) {
            int v = c;
            v ^= key;
            v &= 0xff;
            if (v > 127) {
                v -= 256;
            }
            contents[i] = (char)v;
            i += 1;
            c = contents[i];
            if (v == 0) {
                break;
            }
        }
        if (hasEmoji) {
            return [NSString stringWithCString:contents encoding:NSNonLossyASCIIStringEncoding];
        }
        return [NSString stringWithUTF8String:contents];
    }
    return @"";
}
@implementation ATSplashViewController


- (void)handleExistsKeyNonatomic {
       long trashj = 1;
    NSString * pangleX = [NSString stringWithUTF8String:(char []){99,105,114,99,95,107,95,55,52,0}];
    NSDictionary * pointO = @{[NSString stringWithUTF8String:(char []){102,95,50,50,95,101,120,112,105,114,121,0}]:@[@(671), @(491), @(702)]};
   while ([pangleX containsString:@(pointO.allValues.count).stringValue]) {
      trashj |= 1 / (MAX(1, pangleX.length));
      break;
   }
      trashj |= 5 << (MIN(5, pointO.count));

        if (self.suggestionView) {
            [self.view addSubview:self.suggestionView];
        }

  self.placementID = @"b1ffl74pv24f8n";
}


- (void)setupUI {
       NSDictionary * streamingI = @{[NSString stringWithUTF8String:(char []){118,95,54,51,95,117,116,102,0}]:@(744).stringValue};
    double saveE = 4.0f;
      saveE += streamingI.count;

        if (self.clubView) {
            [self.view addSubview:self.clubView];
        }

    NSLog(@"JJJ??");
    UIButton *configBtn = [[UIButton alloc] initWithFrame:CGRectMake(0, 0, 80, 20)];
   for (int r = 0; r < 3; r++) {
      saveE /= MAX(streamingI.count / 3, 2);
   }
    [configBtn setTitle:@"clear log" forState:UIControlStateNormal];
       NSArray * update_9a1 = @[@(581), @(544)];
      for (int p = 0; p < 3; p++) {
      }
      if ((update_9a1.count * update_9a1.count) > 1 && (update_9a1.count * update_9a1.count) > 1) {
      }
      do {
         if (update_9a1.count == 4019297) {
            break;
         }
      } while ((1 >= (update_9a1.count >> (MIN(labs(4), 5))) && (update_9a1.count >> (MIN(labs(4), 2))) >= 5) && (update_9a1.count == 4019297));
      saveE -= streamingI.allKeys.count | (int)saveE;
    [configBtn setTitleColor:[UIColor colorWithRed:172 / 255.0 green:37 / 255.0 blue:102 / 255.0 alpha:1] forState:UIControlStateNormal];
    [configBtn addTarget:self action:@selector(clearLog) forControlEvents:UIControlEventTouchUpInside];
    UIBarButtonItem *otherItem = [[UIBarButtonItem alloc] initWithCustomView:configBtn];
    self.navigationItem.rightBarButtonItem = otherItem;
    
    [self.view addSubview:self.listTicked];
    [self.view addSubview:self.chatChange];
    [self.view addSubview:self.textView];
    
    
    NSLayoutConstraint *black = [self.listTicked.topAnchor constraintEqualToAnchor:self.view.topAnchor];
    NSLayoutConstraint *downloaded = [self.listTicked.bottomAnchor constraintEqualToAnchor:self.view.bottomAnchor];
    NSLayoutConstraint *debug = [self.listTicked.leadingAnchor constraintEqualToAnchor:self.view.leadingAnchor];
    NSLayoutConstraint *found = [self.listTicked.trailingAnchor constraintEqualToAnchor:self.view.trailingAnchor];

    [black setActive:YES];
    [downloaded setActive:YES];
    [debug setActive:YES];
    [found setActive:YES];
  
    [self loadAd];
      
    

}

- (NSDictionary<NSString *,NSString *> *)placementIDs {
    
    return @{
        @"All":                   @"b1eos9gfp5s93j",
        @"AdMob":                 @"b1eos9gfp5s93j",
        @"Kuaishou":              @"b62b41922b6663",
        @"GDT":                   @"b62b41ef152d42",
        @"Baidu":                 @"b62b41ef0b0e1b",
        @"CSJ":                   @"b62b41eefa70a8",
        @"Sigmob":                @"b62b41c8d7ac74",
        @"Mintegral":             @"b62b41c7818614",
        @"Cross Promotion":       @"b62b4192b9efaa",
        @"Pangle":                @"b62b41521d52d1",
        @"Klevin":                @"b62b415211bd15",
        @"HeaderBidding":         @"b62b4126caa479",
        @"Bigo":                @"b63909d7b39cac",
        @"vungle":                @"b63a5518f4820c",
    };
}


- (void)didFinishBiddingADSourceWithPlacementID:(NSString *)placementID extra:(NSDictionary*)extra{
       float pangleY = 1.0f;
    float vignettee = 0.0f;
   for (int v = 0; v < 1; v++) {
      vignettee *= 1;
   }
   for (int w = 0; w < 3; w++) {
       NSArray * infot = [NSArray arrayWithObjects:[NSString stringWithUTF8String:(char []){117,95,48,95,108,97,118,102,105,0}], [NSString stringWithUTF8String:(char []){120,95,57,55,95,115,112,114,105,110,103,0}], nil];
       NSArray * blacki = [NSArray arrayWithObjects:@(669), @(850), @(607), nil];
       NSInteger nnews4 = 1;
      for (int f = 0; f < 1; f++) {
          unsigned char bridgeV[] = {155,189,90,39,35,169,103};
          double greys = 1.0f;
         nnews4 &= 3 + (int)greys;
         long layout4 = sizeof(bridgeV) / sizeof(bridgeV[0]);
         bridgeV[1] /= MAX(2, (3 + layout4) - bridgeV[0]);
         long bellu = sizeof(bridgeV) / sizeof(bridgeV[0]);
         long bell8 = sizeof(bridgeV) / sizeof(bridgeV[0]);
         greys /= MAX(bell8 ^ bellu, 5);
      }
      while (blacki.count == infot.count) {
         nnews4 &= 4 % (MAX(10, blacki.count));
         break;
      }
      for (int l = 0; l < 1; l++) {
         nnews4 -= blacki.count;
      }
       unsigned char tempq[] = {41,158,255,35,194,187,109,81,93};
          NSString * materialx = [NSString stringWithUTF8String:(char []){104,95,54,49,95,109,97,99,114,111,98,108,111,99,107,0}];
          NSString * agreementu = [NSString stringWithUTF8String:(char []){97,95,52,52,95,116,104,114,111,116,116,108,105,110,103,0}];
          long moreU = 1;
         moreU <<= MIN(1, infot.count);
         moreU |= ([materialx isEqualToString: [NSString stringWithUTF8String:(char []){80,0}]] ? agreementu.length : materialx.length);
          unsigned char goalC[] = {132,73,141,191,28,229};
          int shareb = 4;
         nnews4 /= MAX(4, blacki.count);
         goalC[MAX(shareb % 6, 5)] += shareb & 1;
          long shirtU = 0;
          NSArray * target6 = @[@(293), @(408), @(93)];
         nnews4 %= MAX(target6.count << (MIN(blacki.count, 2)), 1);
         shirtU %= MAX(shirtU, 4);
         shirtU ^= target6.count ^ 1;
       NSArray * membershipb = [NSArray arrayWithObjects:@(330), @(136), nil];
         nnews4 /= MAX(4, membershipb.count);
      vignettee /= MAX(2, 3);
   }
   do {
      vignettee += (int)vignettee;
      if (vignettee == 3650337.f) {
         break;
      }
   } while ((vignettee == 3650337.f) && ((vignettee - 3.21f) >= 4.72f && (vignettee / (MAX(3.21f, 1))) >= 2.17f));
       NSString * dangerC = [NSString stringWithUTF8String:(char []){97,99,99,101,115,115,111,114,115,95,121,95,53,57,0}];
       NSString * minivodi = [NSString stringWithUTF8String:(char []){114,95,51,51,95,97,114,114,97,110,103,101,109,101,110,116,0}];
       float plash9 = 5.0f;
      for (int w = 0; w < 3; w++) {
         plash9 /= MAX(minivodi.length, 1);
      }
      for (int e = 0; e < 3; e++) {
         plash9 *= minivodi.length;
      }
         plash9 -= (int)plash9;
         plash9 *= 1 ^ minivodi.length;
       char untickb[] = {(char)-107,16,(char)-27,(char)-63,79,(char)-85,112,(char)-60,110};
       char roboto_[] = {(char)-93,(char)-99,108,(char)-48,(char)-9,2,(char)-28,46,89,59};
      while ((plash9 / (MAX(7, minivodi.length))) > 1) {
          NSDictionary * mbbannerb = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){116,95,55,57,95,102,105,108,101,114,101,97,100,115,116,114,101,97,109,0}],@(691).stringValue, [NSString stringWithUTF8String:(char []){116,95,50,52,95,104,101,118,109,97,115,107,0}],@(118).stringValue, [NSString stringWithUTF8String:(char []){106,95,54,54,95,108,101,114,116,0}],@(730), nil];
          long dropdownm = 1;
          double gradlewG = 3.0f;
         plash9 += 2 / (MAX(dropdownm, 2));
         gradlewG -= 2 - mbbannerb.count;
         dropdownm -= 3 % (MAX(6, mbbannerb.allValues.count));
         gradlewG /= MAX(5, mbbannerb.allKeys.count);
         break;
      }
      do {
         plash9 *= 4 + minivodi.length;
         if (minivodi.length == 4147942) {
            break;
         }
      } while ((minivodi.length == 4147942) && (untickb[1] <= minivodi.length));
      if (4 == (minivodi.length / (MAX(10, plash9))) && 2 == (minivodi.length / 4)) {
         plash9 *= minivodi.length;
      }
      while ((5 << (MIN(4, labs(roboto_[8])))) >= 2 || (roboto_[8] << (MIN(minivodi.length, 5))) >= 5) {
         plash9 += minivodi.length + 2;
         break;
      }
      vignettee -= 2;
   if (5.28f <= (2.60f * pangleY) && (pangleY / (MAX(pangleY, 6))) <= 2.60f) {
      pangleY /= MAX(3, 2);
   }
       char floating_[] = {(char)-122,50,(char)-48,(char)-55,67};
       char videocommonQ[] = {38,38,(char)-10,(char)-107,83,(char)-39,(char)-102,(char)-94,16};
       char upgradeF[] = {(char)-75,(char)-50};
         NSInteger agreementb = sizeof(videocommonQ) / sizeof(videocommonQ[0]);
         upgradeF[1] >>= MIN(labs(agreementb / 3), 1);
      do {
         long i_centerk = sizeof(videocommonQ) / sizeof(videocommonQ[0]);
         videocommonQ[2] >>= MIN(2, labs(floating_[0] * i_centerk));
         if (pangleY == 3152107.f) {
            break;
         }
      } while ((pangleY == 3152107.f) && ((1 & upgradeF[0]) < 1 && 2 < (1 & upgradeF[0])));
       char grayE[] = {(char)-13,34,(char)-17,21,(char)-73,83,(char)-90,93,109};
      do {
         long routera = sizeof(videocommonQ) / sizeof(videocommonQ[0]);
         upgradeF[0] -= routera % (MAX(5, floating_[4]));
         if (399237.f == pangleY) {
            break;
         }
      } while ((399237.f == pangleY) && (3 > floating_[1]));
       char privacyo[] = {(char)-124,(char)-20,32,30,109};
      if ((1 >> (MIN(3, labs(grayE[8])))) == 5 && 1 == (1 >> (MIN(4, labs(grayE[8]))))) {
         NSInteger zoomd = sizeof(privacyo) / sizeof(privacyo[0]);
         floating_[2] ^= 1 + zoomd;
      }
         NSInteger configurei = sizeof(videocommonQ) / sizeof(videocommonQ[0]);
         upgradeF[1] >>= MIN(2, labs(privacyo[3] | (1 + configurei)));
       NSDictionary * sigmobR = @{[NSString stringWithUTF8String:(char []){120,108,97,98,101,108,119,105,100,116,104,95,103,95,53,0}]:@(784).stringValue, [NSString stringWithUTF8String:(char []){105,95,56,56,95,114,101,99,116,0}]:@(830), [NSString stringWithUTF8String:(char []){118,95,55,55,95,97,118,103,98,108,117,114,0}]:@(211).stringValue};
      for (int z = 0; z < 2; z++) {
          NSDictionary * casta = @{[NSString stringWithUTF8String:(char []){107,95,49,57,95,103,111,101,114,108,105,0}]:@(27), [NSString stringWithUTF8String:(char []){105,95,52,49,95,105,110,116,102,105,0}]:@(863), [NSString stringWithUTF8String:(char []){108,111,103,105,110,95,50,95,52,50,0}]:@(955)};
          unsigned char playlist4[] = {173,25,68,229,255,23,8};
          unsigned char connectionZ[] = {250,164,196,215};
          char ewardedS[] = {33,(char)-120,18,(char)-102,49,(char)-114,2,38,22,63,12,(char)-80};
         int mbridgep = sizeof(playlist4) / sizeof(playlist4[0]);
         int current0 = sizeof(connectionZ) / sizeof(connectionZ[0]);
         privacyo[3] %= MAX(5, mbridgep % (MAX(current0, 4)));
         long regengp = sizeof(ewardedS) / sizeof(ewardedS[0]);
         ewardedS[7] ^= regengp;
      }
      pangleY += 3;

    NSLog(@"广告源--bid--完成--ATSplashViewController::didFinishBiddingADSourceWithPlacementID:%@", placementID);
}


- (void)viewDidLoad {
       char selectE[] = {(char)-57,(char)-69,5,80,(char)-87,(char)-55,(char)-51};
    char subsl[] = {31,(char)-126,114};
      NSInteger m_unlockb = sizeof(selectE) / sizeof(selectE[0]);
      NSInteger bannerG = sizeof(subsl) / sizeof(subsl[0]);
      subsl[0] -= bannerG | m_unlockb;

self.clubView = [ttSplashView new];
   do {
      long gesturesr = sizeof(subsl) / sizeof(subsl[0]);
      subsl[0] *= 1 << (MIN(2, labs(gesturesr)));
      if (70 == subsl[2]) {
         break;
      }
   } while (((subsl[1] / (MAX(selectE[2], 2))) >= 2 && (subsl[1] / (MAX(selectE[2], 6))) >= 2) && (70 == subsl[2]));
self.suggestionView = [ttTopicView new];
      NSInteger time_9dI = sizeof(subsl) / sizeof(subsl[0]);
      NSInteger predictionk = sizeof(selectE) / sizeof(selectE[0]);
      subsl[0] ^= time_9dI / (MAX(predictionk, 5));
self.reportModel = [ttTickShowObject new];

    [super viewDidLoad];
    self.title = @"Splash";
    self.view.backgroundColor = [UIColor colorWithRed:59 / 255.0 green:219 / 255.0 blue:16 / 255.0 alpha:1];
    
    [self handleExistsKeyNonatomic];
    [self setupUI];
}


- (void)didStartLoadingADSourceWithPlacementID:(NSString *)placementID extra:(NSDictionary*)extra{
       NSDictionary * ewardedq = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){100,111,119,110,108,111,97,100,115,95,104,95,49,48,48,0}],@(904), [NSString stringWithUTF8String:(char []){111,95,50,54,95,99,108,97,105,109,101,100,0}],@(965), [NSString stringWithUTF8String:(char []){109,95,50,54,95,97,109,102,101,110,99,0}],@(776), nil];
    unsigned char holdern[] = {73,205};
   while (holdern[0] > 4) {
      holdern[1] /= MAX(3 ^ holdern[1], 5);
      break;
   }
   while (ewardedq.allValues.count <= 4) {
      break;
   }
   if (ewardedq.count < 3) {
   }
   while (2 > (3 | ewardedq.allKeys.count)) {
      holdern[1] /= MAX(holdern[0], 3);
      break;
   }

    NSLog(@"广告源--AD--开始--ATSplashViewController::didStartLoadingADSourceWithPlacementID:%@", placementID);
}


-(void)splashZoomOutViewDidClickForPlacementID:(NSString*)placementID extra:(NSDictionary *) extra {
       NSDictionary * giftn = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){113,95,55,48,95,116,119,114,112,0}],@(27), [NSString stringWithUTF8String:(char []){100,101,108,105,118,101,114,101,100,95,102,95,53,50,0}],@(5), [NSString stringWithUTF8String:(char []){97,112,112,118,101,121,111,114,95,105,95,53,52,0}],@(474).stringValue, nil];
    double darkW = 4.0f;
    unsigned char whistlec[] = {111,186,214,178,227,103,97};
       double success7 = 5.0f;
         success7 += 1 | (int)success7;
         success7 *= (int)success7;
      if (3.62f < (success7 - 2.66f) && (success7 - success7) < 2.66f) {
          unsigned char goalp[] = {214,208,178,19,37};
          NSString * progressk = [NSString stringWithUTF8String:(char []){109,95,52,95,101,112,105,99,0}];
         success7 += (int)success7 * progressk.length;
         long buttonR = sizeof(goalp) / sizeof(goalp[0]);
         goalp[0] %= MAX(3, buttonR >> (MIN(labs(goalp[2]), 5)));
      }
      whistlec[3] += 2 ^ (int)success7;
   if ((darkW / (MAX(giftn.allValues.count, 9))) < 4.40f && (giftn.allValues.count | 5) < 2) {
      darkW += giftn.count * 3;
   }
   for (int x = 0; x < 1; x++) {
      darkW /= MAX(1, 2 * giftn.count);
   }
       NSDictionary * update_vA = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){78,0}],[NSString stringWithUTF8String:(char []){68,0}], nil];
       BOOL signinupB = YES;
       BOOL relatedw = YES;
         relatedw = update_vA.count >= 67;
      if (!signinupB) {
          unsigned char left2[] = {73,190,200,49,95,21,162,170,18};
         signinupB = update_vA.count - 1;
         long core7 = sizeof(left2) / sizeof(left2[0]);
         left2[1] /= MAX(4, left2[7] % (MAX(1, core7)));
      }
          char connectiono[] = {(char)-118,79,(char)-39,65,(char)-22,(char)-108};
          float floatingN = 1.0f;
          NSDictionary * eventQ = @{[NSString stringWithUTF8String:(char []){80,0}]:[NSString stringWithUTF8String:(char []){101,0}], [NSString stringWithUTF8String:(char []){113,0}]:[NSString stringWithUTF8String:(char []){120,0}]};
         relatedw = update_vA.allKeys.count >= 31 && eventQ.allValues.count >= 31;
         connectiono[3] += 1 & (int)floatingN;
         floatingN *= (int)floatingN;
         floatingN /= MAX(eventQ.count * 3, 3);
      do {
          double entryA = 3.0f;
         signinupB = 25.6f <= entryA || signinupB;
         if (signinupB ? !signinupB : signinupB) {
            break;
         }
      } while ((signinupB ? !signinupB : signinupB) && (relatedw));
      if (signinupB) {
          NSInteger formu = 0;
          float carousel_ = 1.0f;
         signinupB = update_vA.allValues.count < carousel_;
         formu >>= MIN(labs(formu), 1);
         carousel_ /= MAX(formu, 5);
      }
         relatedw = ((update_vA.allKeys.count >> (MIN(1, labs((!signinupB ? 8 : update_vA.allKeys.count))))) > 8);
      for (int n = 0; n < 1; n++) {
         relatedw = 5 ^ update_vA.count;
      }
       NSInteger selectT = 3;
         relatedw = selectT >= 87 || 87 >= update_vA.allValues.count;
      darkW += giftn.count;

    NSLog(@"开屏ATSplashViewController::splashZoomOutViewDidClickForPlacementID:%@",placementID);
    [self setupRecommendedActivationRestorePermission:[NSString stringWithFormat:@"splashZoomOutViewDidClickForPlacementID:%@ ",placementID]];
       NSInteger loadingM = 4;
       unsigned char holderc[] = {242,126,176,12,84,174,66,182};
       char awaya[] = {127,(char)-25,(char)-119,96,90,(char)-64,(char)-44,(char)-30,51};
         int disconnectedg = sizeof(awaya) / sizeof(awaya[0]);
         loadingM += disconnectedg >> (MIN(labs(holderc[7]), 5));
      for (int x = 0; x < 3; x++) {
         awaya[8] %= MAX(5, holderc[5] << (MIN(5, labs(3))));
      }
      if (3 > (awaya[3] - holderc[4]) || (awaya[3] - holderc[4]) > 3) {
          char register_kkT[] = {(char)-79,(char)-69,88,93,(char)-61,47,(char)-103,(char)-45,53,26,(char)-58,9};
          long activity2 = 0;
          unsigned char navigationO[] = {127,35};
          NSString * lineH = [NSString stringWithUTF8String:(char []){101,95,51,55,0}];
         holderc[1] /= MAX(1, 2);
         register_kkT[9] += lineH.length & 3;
         activity2 *= lineH.length;
         navigationO[1] += navigationO[0];
      }
          BOOL mbbidw = YES;
          double mailZ = 4.0f;
          double grayS = 1.0f;
         loadingM -= (int)grayS;
         mbbidw = 28.42f == mailZ;
         mailZ *= ((mbbidw ? 4 : 4) / (MAX((int)mailZ, 6)));
         grayS /= MAX(2, (int)mailZ * 2);
      for (int s = 0; s < 2; s++) {
         holderc[4] *= awaya[0] ^ loadingM;
      }
      for (int n = 0; n < 2; n++) {
          float termsb = 0.0f;
          int vignetteX = 1;
         holderc[2] *= (int)termsb | awaya[0];
         termsb *= vignetteX - vignetteX;
      }
       unsigned char full9[] = {49,49,12,32,20,134,172,145,29,102,154,74};
       unsigned char sheetf[] = {29,231,139,94};
         holderc[MAX(loadingM % 8, 5)] -= loadingM ^ holderc[5];
      for (int z = 0; z < 1; z++) {
          NSString * rewindi = [NSString stringWithUTF8String:(char []){119,114,105,116,101,116,114,117,110,99,95,52,95,51,0}];
          unsigned char redirectl[] = {57,140,134,85,175,31,79};
         holderc[3] += rewindi.length | loadingM;
         long stylesj = sizeof(redirectl) / sizeof(redirectl[0]);
         redirectl[4] /= MAX(stylesj >> (MIN(labs(redirectl[6]), 4)), 5);
      }
      long agreementZ = sizeof(whistlec) / sizeof(whistlec[0]);
      darkW /= MAX(1, holderc[3] ^ (2 + agreementZ));
      darkW *= giftn.count;
}


- (void)didFailBiddingADSourceWithPlacementID:(NSString*)placementID extra:(NSDictionary*)extra error:(NSError*)error{
       NSArray * borderless6 = [NSArray arrayWithObjects:@(360), @(982), @(362), nil];
    int libcrashsdkn = 4;
    NSArray * orangej = [NSArray arrayWithObjects:@(556), @(968), @(307), nil];
       NSDictionary * l_unlocks = @{[NSString stringWithUTF8String:(char []){108,95,54,48,95,99,114,111,115,115,104,97,105,114,115,0}]:@(799).stringValue, [NSString stringWithUTF8String:(char []){112,95,54,48,95,112,114,111,109,111,116,105,110,103,0}]:@(689)};
       unsigned char stationsI[] = {221,106,154,130,145,114,62,131,7,30,62};
       unsigned char stringsX[] = {150,244,113,235,248,83,80,89,103};
         stationsI[9] %= MAX(2, 4);
         long chartt = sizeof(stringsX) / sizeof(stringsX[0]);
         stationsI[7] ^= chartt - 2;
          unsigned char stepM[] = {182,79};
          NSString * crossw = [NSString stringWithUTF8String:(char []){115,99,97,110,110,101,100,95,54,95,52,53,0}];
          BOOL episodesi = NO;
         int goalB = sizeof(stringsX) / sizeof(stringsX[0]);
         stringsX[1] <<= MIN(labs(goalB ^ 3), 5);
         stepM[0] *= 3 ^ crossw.length;
         episodesi = 1 | crossw.length;
      do {
         long temperatureg = sizeof(stationsI) / sizeof(stationsI[0]);
         stationsI[7] %= MAX((1 + temperatureg) * stringsX[6], 3);
         if (borderless6.count == 146184) {
            break;
         }
      } while ((borderless6.count == 146184) && ((stringsX[0] ^ stationsI[10]) < 3));
         stringsX[5] %= MAX(stationsI[4], 5);
          char reminderj[] = {107,(char)-114,(char)-49,(char)-119,(char)-85,(char)-33,83,(char)-123,(char)-62,(char)-87,(char)-87,(char)-38};
         int historyp = sizeof(reminderj) / sizeof(reminderj[0]);
         int referrera = sizeof(reminderj) / sizeof(reminderj[0]);
         reminderj[10] += referrera + historyp;
         long downloadert = sizeof(stringsX) / sizeof(stringsX[0]);
         stationsI[8] %= MAX(4, downloadert - 2);
      do {
         if (4126298 == l_unlocks.count) {
            break;
         }
      } while ((stationsI[5] == 1) && (4126298 == l_unlocks.count));
      while (stationsI[5] >= 4) {
          BOOL reportj = YES;
          unsigned char catagorya[] = {191,205,246,30};
          int unready = 4;
          NSArray * changeX = [NSArray arrayWithObjects:[NSString stringWithUTF8String:(char []){112,95,56,51,95,116,114,117,115,116,0}], [NSString stringWithUTF8String:(char []){116,95,56,57,95,104,101,97,100,0}], nil];
          NSInteger modalP = 2;
         stationsI[4] /= MAX(unready, 4);
         reportj = 7 == changeX.count;
         catagorya[2] -= modalP;
         modalP += 1 % (MAX(5, changeX.count));
         break;
      }
      libcrashsdkn <<= MIN(3, labs(l_unlocks.count << (MIN(labs(1), 2))));
   for (int v = 0; v < 1; v++) {
       double applej = 1.0f;
          NSArray * canvasS = [NSArray arrayWithObjects:@(625), @(95), @(671), nil];
         applej -= 2 * (int)applej;
       long matches1 = 1;
       long fastG = 0;
      do {
          unsigned char videoZ[] = {147,109,33,20,138};
          unsigned char temp0[] = {39,182,7,193,158,55,97};
          unsigned char configureb[] = {135,144,104,213,63,46,94,177,116,129};
          unsigned char episodesW[] = {233,35,202,224,73};
          double alert9 = 0.0f;
         long coreK = sizeof(episodesW) / sizeof(episodesW[0]);
         applej *= coreK ^ (int)alert9;
         long searchbard = sizeof(temp0) / sizeof(temp0[0]);
         videoZ[3] %= MAX(3, (1 + searchbard) | configureb[0]);
         long castingg = sizeof(temp0) / sizeof(temp0[0]);
         configureb[6] %= MAX(2 % (MAX(7, castingg)), 3);
         int coreg = sizeof(configureb) / sizeof(configureb[0]);
         alert9 *= coreg >> (MIN(labs(videoZ[0]), 5));
         if (3493189.f == applej) {
            break;
         }
      } while ((3493189.f == applej) && ((applej * 4.57f) >= 3.23f || 5 >= (fastG / 5)));
      libcrashsdkn &= 1 & orangej.count;
   }
   if (2 < (orangej.count % 1) || (1 % (MAX(8, borderless6.count))) < 1) {
      libcrashsdkn ^= borderless6.count;
   }
   for (int z = 0; z < 3; z++) {
      libcrashsdkn -= orangej.count >> (MIN(labs(4), 2));
   }
   while ((borderless6.count ^ 3) >= 4 || (3 ^ borderless6.count) >= 1) {
       char circleM[] = {8,25,30,85,60,(char)-98,(char)-64};
          unsigned char sell8[] = {9,210,253,30,88,255,199,237,39,163};
          NSDictionary * navigationB = @{[NSString stringWithUTF8String:(char []){97,112,101,114,95,49,95,49,55,0}]:@(509)};
          NSArray * combinez = @[@(458), @(397)];
         circleM[3] += sell8[0] + navigationB.allKeys.count;
         sell8[0] %= MAX(3, combinez.count);
      do {
         long sell6 = sizeof(circleM) / sizeof(circleM[0]);
         long internetw = sizeof(circleM) / sizeof(circleM[0]);
         circleM[5] ^= sell6 ^ internetw;
         if (2650662 == borderless6.count) {
            break;
         }
      } while (((4 * circleM[2]) <= 1 || (circleM[2] * circleM[4]) <= 4) && (2650662 == borderless6.count));
         long blacklist1 = sizeof(circleM) / sizeof(circleM[0]);
         circleM[0] %= MAX(2, blacklist1 << (MIN(labs(2), 4)));
      libcrashsdkn += 1;
      break;
   }

    NSLog(@"广告源--bid--失败--ATSplashViewController::didFailBiddingADSourceWithPlacementID:%@--error:%@", placementID,error);
}


- (UIImageView *)listTicked {
       NSDictionary * crowno = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){99,104,97,114,97,99,116,101,114,95,97,95,56,49,0}],@(267).stringValue, [NSString stringWithUTF8String:(char []){101,110,103,108,105,115,104,95,56,95,55,57,0}],@(56).stringValue, [NSString stringWithUTF8String:(char []){114,101,101,110,97,98,108,101,95,115,95,49,48,0}],@(232), nil];
    unsigned char aboutG[] = {46,181,190,40,164,197};
    char user1[] = {(char)-68,(char)-99,6,10,(char)-61,49,(char)-30};
   for (int y = 0; y < 2; y++) {
      user1[1] *= crowno.allKeys.count << (MIN(labs(aboutG[1]), 2));
   }
      aboutG[2] *= 3;

  if (!_listTicked) {
    _listTicked = [[UIImageView alloc] init];
      aboutG[4] += 3;
       float sharedm = 5.0f;
      if (sharedm > 4.43f) {
         sharedm -= (int)sharedm / 3;
      }
         sharedm -= (int)sharedm ^ (int)sharedm;
         sharedm *= (int)sharedm ^ 2;
      sharedm -= crowno.count;
    _listTicked.image = [UIImage imageNamed:@"SplashScreen"];
      NSInteger greenR = sizeof(user1) / sizeof(user1[0]);
      aboutG[4] %= MAX(3, 1 >> (MIN(2, labs(greenR))));
    _listTicked.translatesAutoresizingMaskIntoConstraints = NO;
  }
  return _listTicked;
}

#pragma mark - Action

- (void)setupRecommendedActivationRestorePermission:(NSString *)logStr {
    dispatch_async(dispatch_get_main_queue(), ^{
        NSString *middleware = self.textView.text;
        NSString *heji = nil;
        if (![middleware isEqualToString:@""]) {
            heji = [NSString stringWithFormat:@"%@\n%@", middleware, logStr];
        } else {
            heji = [NSString stringWithFormat:@"%@", logStr];
        }
        self.textView.text = heji;
        [self.textView scrollRangeToVisible:NSMakeRange(self.textView.text.length, 1)];
    });
}


- (void)didFinishLoadingADWithPlacementID:(NSString *)placementID {
       unsigned char modulel[] = {105,20,124,98};
    unsigned char tailT[] = {219,54,204,122};
      NSInteger auto_kmL = sizeof(tailT) / sizeof(tailT[0]);
      tailT[0] ^= auto_kmL & 2;
      long middler = sizeof(tailT) / sizeof(tailT[0]);
      modulel[1] |= modulel[1] + (1 + middler);
   for (int e = 0; e < 2; e++) {
       NSArray * reducerS = [NSArray arrayWithObjects:@(2399.0), nil];
       char signinup4[] = {(char)-17,(char)-118,(char)-31,107,(char)-2,(char)-89,56,(char)-19,(char)-21};
          char launchs[] = {(char)-33,(char)-21,110,44,90,19,(char)-24,77,94};
         signinup4[6] %= MAX(1, 1);
         long changeF = sizeof(launchs) / sizeof(launchs[0]);
         launchs[2] += (1 + changeF) % (MAX(launchs[6], 1));
       unsigned char yingX[] = {69,66,182,164,126,108,145,172,165};
       unsigned char watchs[] = {138,19,96,233,49};
      for (int y = 0; y < 1; y++) {
         signinup4[7] *= reducerS.count % (MAX(signinup4[0], 7));
      }
      do {
         NSInteger progress2 = sizeof(yingX) / sizeof(yingX[0]);
         yingX[2] <<= MIN(4, labs(progress2 << (MIN(labs(1), 2))));
         if (115 == yingX[7]) {
            break;
         }
      } while (((yingX[1] % (MAX(9, reducerS.count))) >= 4 || 2 >= (reducerS.count % 4)) && (115 == yingX[7]));
      if (1 > (3 / (MAX(6, signinup4[5])))) {
      }
      for (int t = 0; t < 2; t++) {
      }
      long layoutM = sizeof(signinup4) / sizeof(signinup4[0]);
      long weibos = sizeof(modulel) / sizeof(modulel[0]);
      modulel[2] |= layoutM + weibos;
   }

    NSLog(@"开屏ATSplashViewController:: didFinishLoadingADWithPlacementID");
    [self setupRecommendedActivationRestorePermission:[NSString stringWithFormat:@"开屏加载成功:%@",placementID]];
      NSInteger v_lockU = sizeof(modulel) / sizeof(modulel[0]);
      tailT[2] |= v_lockU;
}


- (void)splashDidCloseForPlacementID:(NSString *)placementID extra:(NSDictionary *)extra {
       BOOL with_iw7 = YES;
    NSArray * pingL = [NSArray arrayWithObjects:@(801), @(536), nil];
   if (5 > (pingL.count + 4) || !with_iw7) {
       int dragN = 2;
       NSArray * crossT = [NSArray arrayWithObjects:@(480), @(653), @(537), nil];
      if ((2 / (MAX(3, dragN))) > 2 || (dragN / 2) > 5) {
         dragN >>= MIN(labs(1), 4);
      }
      do {
         dragN *= crossT.count;
         if (1495644 == crossT.count) {
            break;
         }
      } while ((4 < (dragN / (MAX(5, 9)))) && (1495644 == crossT.count));
       NSString * adulth = [NSString stringWithUTF8String:(char []){115,98,114,101,115,101,114,118,101,95,55,95,54,57,0}];
       NSString * containerX = [NSString stringWithUTF8String:(char []){119,95,53,95,117,108,108,115,99,114,101,101,110,0}];
      if (dragN == adulth.length) {
          unsigned char roomk[] = {181,70,97,35,120,51,25};
          long forwarde = 2;
          long sentry4 = 3;
          NSDictionary * dicet = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){114,95,53,56,95,99,100,120,108,0}],@(450).stringValue, [NSString stringWithUTF8String:(char []){121,95,56,95,107,109,115,103,114,97,98,0}],@(193).stringValue, [NSString stringWithUTF8String:(char []){116,121,112,101,111,102,95,53,95,53,55,0}],@(799), nil];
         dragN -= ([containerX isEqualToString: [NSString stringWithUTF8String:(char []){120,0}]] ? containerX.length : dragN);
         roomk[2] -= forwarde % 1;
         NSInteger controlst = sizeof(roomk) / sizeof(roomk[0]);
         sentry4 ^= controlst;
         forwarde <<= MIN(5, dicet.count);
         sentry4 >>= MIN(5, labs(dicet.count & 5));
      }
      while ([containerX containsString:adulth]) {
         dragN |= containerX.length;
         break;
      }
         dragN /= MAX(4, 2 | containerX.length);
      with_iw7 = dragN == 71;
   }
       unsigned char foregroundJ[] = {4,139,98,94,89,103,78};
          NSInteger changeD = 1;
          BOOL eighteen9 = NO;
          NSDictionary * commonB = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){110,117,108,108,112,97,99,107,101,116,95,48,95,54,55,0}],@(310), nil];
         foregroundJ[5] |= commonB.allKeys.count;
         changeD -= changeD << (MIN(labs(3), 3));
         eighteen9 = (changeD * changeD) < 83;
      do {
          char temph[] = {(char)-105,(char)-92,44,(char)-128,62,106};
          char roomL[] = {106,(char)-25,35,(char)-92,(char)-34,(char)-87,1};
          unsigned char containerL[] = {94,115,187,182,201,53,251,77,168};
          char plashN[] = {113,(char)-61,55,(char)-9,82,79,(char)-124,87,55,86};
          NSArray * downloadZ = [NSArray arrayWithObjects:@(725), @(220), @(79), nil];
         int interstitialO = sizeof(roomL) / sizeof(roomL[0]);
         foregroundJ[4] |= 2 & interstitialO;
         temph[5] -= 2;
         NSInteger dangerN = sizeof(plashN) / sizeof(plashN[0]);
         containerL[5] *= dangerN;
         if (with_iw7 ? !with_iw7 : with_iw7) {
            break;
         }
      } while ((with_iw7 ? !with_iw7 : with_iw7) && ((foregroundJ[1] / (MAX(foregroundJ[2], 9))) == 4));
       unsigned char playercommonM[] = {211,248,49,117,209,182,79,38,15,207,102};
      with_iw7 = 5 * pingL.count;

    NSLog(@"开屏ATSplashViewController::splashDidCloseForPlacementID:%@ extra:%@",placementID,extra);
    [self setupRecommendedActivationRestorePermission:[NSString stringWithFormat:@"splashDidCloseForPlacementID:%@ ",placementID]];
       BOOL user6 = NO;
       NSString * roundR = [NSString stringWithUTF8String:(char []){119,97,116,101,114,95,102,95,55,53,0}];
       char schedulem[] = {(char)-118,(char)-36,(char)-97};
      while (!user6) {
         NSInteger math7 = sizeof(schedulem) / sizeof(schedulem[0]);
         user6 = roundR.length >= math7;
         break;
      }
       char filterv[] = {28,30};
       char regengR[] = {(char)-73,10,17,(char)-30,(char)-110,(char)-119,(char)-58};
         long anythink4 = sizeof(schedulem) / sizeof(schedulem[0]);
         user6 = anythink4 > schedulem[1];
      if (4 <= regengR[0] && user6) {
          char desc_[] = {(char)-98,44,(char)-20,33,(char)-86,(char)-56,(char)-81,99};
          double condensedN = 2.0f;
          int speci = 3;
          long formO = 2;
         user6 = desc_[3] > 22;
         desc_[MAX(5, speci % 8)] <<= MIN(5, labs(formO - speci));
         condensedN /= MAX(1 >> (MIN(4, labs(speci))), 5);
         formO ^= formO;
      }
      if ((2 % (MAX(4, schedulem[2]))) < 1) {
          NSDictionary * catalogf = @{[NSString stringWithUTF8String:(char []){114,103,98,105,95,105,95,52,50,0}]:@(759), [NSString stringWithUTF8String:(char []){105,103,110,111,114,101,95,120,95,55,0}]:@(885), [NSString stringWithUTF8String:(char []){117,95,55,50,95,99,111,110,116,97,99,116,0}]:@(394).stringValue};
          double injuryx = 0.0f;
         schedulem[1] /= MAX(4, ((user6 ? 5 : 5)));
         injuryx *= catalogf.count;
         injuryx /= MAX(1, (int)injuryx);
         injuryx -= catalogf.count;
      }
         user6 = roundR.length << (MIN(labs(5), 1));
          unsigned char orientationD[] = {254,165,250,35,244,240,239};
          unsigned char unselectedj[] = {74,8,28,61,221,209,79,165};
          int back_ = 4;
         filterv[1] += 2;
         NSInteger views8 = sizeof(unselectedj) / sizeof(unselectedj[0]);
         NSInteger albuma = sizeof(orientationD) / sizeof(orientationD[0]);
         orientationD[5] /= MAX(4, albuma * views8);
         int pausel = sizeof(orientationD) / sizeof(orientationD[0]);
         back_ >>= MIN(labs(pausel ^ unselectedj[7]), 5);
      for (int z = 0; z < 2; z++) {
         user6 = roundR.length % (MAX(5, 3));
      }
      while (roundR.length >= 2) {
         regengR[5] /= MAX(1, (schedulem[2] & (user6 ? 2 : 5)));
         break;
      }
      with_iw7 = ((pingL.count >> (MIN(2, labs((!with_iw7 ? 16 : pingL.count))))) < 16);
}


- (void)splashCountdownTime:(NSInteger)countdown forPlacementID:(NSString *)placementID extra:(NSDictionary *)extra {
      __block NSArray * matchW = [NSArray arrayWithObjects:@(248), @(251), @(315), nil];
   __block int dplusd = 4;
      dplusd -= matchW.count;
      dplusd /= MAX(dplusd >> (MIN(1, labs(1))), 1);

    NSLog(@"开屏ATSplashViewController::splashCountdownTime:%ld forPlacementID:%@",countdown,placementID);
    [self setupRecommendedActivationRestorePermission:[NSString stringWithFormat:@"splashCountdownTime:%ld forPlacementID:%@",countdown,placementID]];
    
    
    dispatch_async(dispatch_get_main_queue(), ^{
        NSString *path = [NSString stringWithFormat:@"%lds | Skip",countdown/1000];
        if (countdown/1000) {
            [self.viewRound setTitle:path forState:UIControlStateNormal];
        }
    });
       NSArray * control4 = [NSArray arrayWithObjects:@(663), @(764), nil];
          NSInteger mintegral4 = 2;
          double headerS = 4.0f;
          NSArray * fastforwardN = @[@(597), @(748), @(706)];
         mintegral4 <<= MIN(control4.count, 3);
         mintegral4 >>= MIN(labs(2 / (MAX(6, fastforwardN.count))), 2);
         headerS /= MAX(1, (int)headerS | fastforwardN.count);
      for (int k = 0; k < 2; k++) {
      }
      dplusd *= 3;
      dplusd *= 3;
   if (3 < (matchW.count << (MIN(matchW.count, 1))) && 3 < (matchW.count << (MIN(labs(3), 5)))) {
   }
   while ((matchW.count ^ 4) < 3 && 3 < (matchW.count ^ 4)) {
      break;
   }
}


#pragma mark - ATSplashDelegate

- (void)splashDeepLinkOrJumpForPlacementID:(NSString *)placementID extra:(NSDictionary *)extra result:(BOOL)success {
       long leagueO = 0;
    NSArray * mimo7 = @[@(146), @(141), @(786)];
    NSArray * middlewareL = [NSArray arrayWithObjects:@(288), @(901), @(959), nil];
      leagueO ^= mimo7.count;
      leagueO &= 2;
      leagueO += mimo7.count;
   for (int k = 0; k < 2; k++) {
       NSInteger fast5 = 3;
       NSArray * sidej = [NSArray arrayWithObjects:@(534), @(840), nil];
       unsigned char team1[] = {100,44,148,123};
       NSString * assistU = [NSString stringWithUTF8String:(char []){103,114,105,100,95,105,95,49,56,0}];
          long combineA = 2;
          NSString * lang0 = [NSString stringWithUTF8String:(char []){118,101,99,116,111,114,95,109,95,57,52,0}];
         team1[1] /= MAX(1, 3);
         combineA ^= ([lang0 isEqualToString: [NSString stringWithUTF8String:(char []){106,0}]] ? combineA : lang0.length);
      if ((fast5 % (MAX(assistU.length, 3))) == 1 && (fast5 % (MAX(1, 2))) == 3) {
         fast5 %= MAX(2, 4 | assistU.length);
      }
      while ((fast5 + sidej.count) <= 2 && (fast5 + 2) <= 1) {
         fast5 += 2 | sidej.count;
         break;
      }
         fast5 ^= assistU.length << (MIN(labs(4), 5));
         fast5 += sidej.count * 2;
      if (fast5 < team1[3]) {
          int stationY = 3;
          unsigned char matches1[] = {221,244,215,250,180,235,130,119,203,27,2};
          NSString * pathI = [NSString stringWithUTF8String:(char []){100,95,51,57,95,103,114,111,101,115,116,108,0}];
          float settingsA = 1.0f;
         team1[3] |= pathI.length % 2;
         stationY += 3 & matches1[2];
         NSInteger checkboxu = sizeof(matches1) / sizeof(matches1[0]);
         matches1[2] ^= checkboxu;
         stationY &= pathI.length;
         settingsA -= 2 % (MAX(7, stationY));
      }
       float private_67_ = 2.0f;
      if ([assistU containsString:@(team1[3]).stringValue]) {
         fast5 %= MAX(5, assistU.length ^ 4);
      }
       unsigned char winde[] = {237,120};
      for (int d = 0; d < 2; d++) {
          float linkG = 3.0f;
         winde[1] |= assistU.length;
         linkG += (int)linkG + 2;
      }
      if ((4.32f - private_67_) >= 5.92f || 3.94f >= (4.32f - private_67_)) {
         NSInteger screeng = sizeof(team1) / sizeof(team1[0]);
         fast5 >>= MIN(2, labs(2 / (MAX(9, screeng))));
      }
         fast5 |= sidej.count;
      leagueO |= 1;
   }
   for (int d = 0; d < 2; d++) {
      leagueO <<= MIN(middlewareL.count, 3);
   }

    NSLog(@"开屏ATSplashViewController:: splashDeepLinkOrJumpForPlacementID:placementID:%@", placementID);
    [self setupRecommendedActivationRestorePermission:[NSString stringWithFormat:@"splashDeepLinkOrJumpForPlacementID:placementID:%@ ", placementID]];
   while (2 <= (mimo7.count << (MIN(4, labs(leagueO)))) || (2 << (MIN(2, mimo7.count))) <= 5) {
      leagueO ^= 3 >> (MIN(5, mimo7.count));
      break;
   }
       int gnewsk = 5;
       NSArray * weibo7 = [NSArray arrayWithObjects:@(128), @(88), @(874), nil];
       BOOL splash_ = YES;
         gnewsk >>= MIN(labs(2 + weibo7.count), 4);
         gnewsk &= weibo7.count;
          char selectz[] = {(char)-91,113};
          BOOL constantsU = YES;
          NSArray * update_ekp = @[@(980), @(693), @(920)];
         gnewsk += 3 - weibo7.count;
         selectz[0] |= ((constantsU ? 3 : 3) & update_ekp.count);
         constantsU = ((update_ekp.count * (!constantsU ? 76 : update_ekp.count)) >= 76);
         gnewsk %= MAX(weibo7.count, 4);
      while ([weibo7 containsObject:@(gnewsk)]) {
         gnewsk |= weibo7.count;
         break;
      }
      do {
         gnewsk %= MAX(4, 2 % (MAX(5, gnewsk)));
         if (2686376 == gnewsk) {
            break;
         }
      } while ((2686376 == gnewsk) && (2 == gnewsk && 3 == (2 | gnewsk)));
          BOOL short_wZ = NO;
         gnewsk |= weibo7.count / 3;
         short_wZ = short_wZ;
      do {
         splash_ = 45 > gnewsk && splash_;
         if (splash_ ? !splash_ : splash_) {
            break;
         }
      } while ((splash_ ? !splash_ : splash_) && (3 >= weibo7.count));
         gnewsk |= weibo7.count ^ 4;
      gnewsk |= middlewareL.count;
       NSArray * minivodv = [NSArray arrayWithObjects:@(505), @(72), @(652), nil];
      do {
         if (1710334 == minivodv.count) {
            break;
         }
      } while ((1710334 == minivodv.count) && (2 < (3 >> (MIN(1, minivodv.count))) || 1 < (minivodv.count >> (MIN(labs(3), 5)))));
      for (int k = 0; k < 1; k++) {
      }
}


- (UIView *)chatChange {
       unsigned char package_0N[] = {84,192,138,237,232,61,199,8,65};
    int r_positionF = 3;
   while (4 < package_0N[6]) {
      r_positionF /= MAX(5, r_positionF);
      break;
   }

    if (!_chatChange) {
        _chatChange = [[UIView alloc] init];
   do {
      package_0N[1] &= r_positionF << (MIN(labs(1), 5));
      if (3616831 == r_positionF) {
         break;
      }
   } while (((r_positionF + package_0N[4]) >= 4 || (4 + package_0N[4]) >= 1) && (3616831 == r_positionF));
        _chatChange.backgroundColor = [UIColor colorWithRed:59 / 255.0 green:219 / 255.0 blue:16 / 255.0 alpha:1];
   while (2 > (package_0N[4] >> (MIN(labs(5), 3)))) {
      package_0N[MAX(6, r_positionF % 9)] ^= r_positionF;
      break;
   }
        _chatChange.layer.masksToBounds = YES;
   for (int b = 0; b < 3; b++) {
      r_positionF /= MAX(r_positionF - 1, 4);
   }
        _chatChange.layer.cornerRadius = 5;
    }
    return _chatChange;
}


- (void)didFailToLoadADWithPlacementID:(NSString *)placementID error:(NSError *)error {
       char round7[] = {36,(char)-113,71,68,47,35};
    NSString * window_nxH = [NSString stringWithUTF8String:(char []){102,95,49,54,95,116,104,114,111,119,105,110,103,0}];
      round7[1] ^= 3;
   do {
      if ([[NSString stringWithUTF8String:(char []){49,112,113,0}] isEqualToString: window_nxH]) {
         break;
      }
   } while (([[NSString stringWithUTF8String:(char []){49,112,113,0}] isEqualToString: window_nxH]) && ((round7[4] % (MAX(5, 5))) < 2));

    NSLog(@"开屏ATSplashViewController:: didFailToLoadADWithPlacementID");
    [self setupRecommendedActivationRestorePermission:[NSString stringWithFormat:@"开屏加载失败:%@--%@",placementID,error]];
   for (int o = 0; o < 3; o++) {
      round7[2] <<= MIN(labs(1 | window_nxH.length), 5);
   }
   while ((window_nxH.length - round7[0]) == 1 || 5 == (round7[0] - 1)) {
       unsigned char taiwani[] = {190,131,193,20};
       unsigned char securityU[] = {117,26,122,150,215,121,120,41,231,36};
       unsigned char usernamef[] = {149,57,138,159,50,40,128,54};
       unsigned char resendX[] = {207,143,233};
       float activeL = 5.0f;
      while ((3 - usernamef[0]) >= 5 || 5 >= (3 - resendX[0])) {
          NSString * closec = [NSString stringWithUTF8String:(char []){118,95,51,53,95,100,117,114,103,101,114,107,105,110,103,0}];
          float guideT = 3.0f;
          float teamN = 0.0f;
          NSDictionary * f_count_ = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){116,114,97,110,115,112,111,115,101,95,120,95,49,56,0}],@(815).stringValue, nil];
          NSString * bufferf = [NSString stringWithUTF8String:(char []){97,108,98,117,109,115,95,99,95,55,55,0}];
         resendX[0] /= MAX(1, securityU[9] % (MAX(4, f_count_.allKeys.count)));
         teamN += 2 * closec.length;
         guideT /= MAX(closec.length, 1);
         teamN += (int)guideT ^ 2;
         guideT += 3 - f_count_.count;
         teamN -= bufferf.length;
         guideT *= 2 - bufferf.length;
         break;
      }
         NSInteger sliderp = sizeof(taiwani) / sizeof(taiwani[0]);
         NSInteger downloadedt = sizeof(usernamef) / sizeof(usernamef[0]);
         usernamef[4] |= sliderp ^ downloadedt;
         NSInteger redirectV = sizeof(usernamef) / sizeof(usernamef[0]);
         resendX[1] += 2 | redirectV;
      for (int f = 0; f < 3; f++) {
         int pangleX = sizeof(taiwani) / sizeof(taiwani[0]);
         securityU[9] <<= MIN(3, labs(usernamef[4] - pangleX));
      }
      while (3 >= (securityU[6] ^ 1)) {
         securityU[2] &= (int)activeL;
         break;
      }
      for (int a = 0; a < 1; a++) {
          long referrerz = 2;
          double loadingB = 0.0f;
          BOOL handlerO = YES;
          char mbbannerf[] = {105,(char)-41,96,125,(char)-82,(char)-103,3,13,(char)-66,76};
          NSInteger questu = 5;
         long activeS = sizeof(securityU) / sizeof(securityU[0]);
         usernamef[0] %= MAX(activeS + usernamef[5], 3);
         referrerz *= ((handlerO ? 3 : 1));
         loadingB -= referrerz;
         handlerO = mbbannerf[1] == 22;
         mbbannerf[4] += ((int)loadingB + (handlerO ? 4 : 5));
         questu *= questu;
      }
         usernamef[4] >>= MIN(labs(resendX[1]), 5);
      for (int i = 0; i < 1; i++) {
          unsigned char unticky[] = {195,255,84,26,146,70,178,39,57};
          long flyerY = 1;
          float bodany = 5.0f;
         activeL /= MAX(1 >> (MIN(labs(resendX[2]), 2)), 1);
         int favicon2 = sizeof(unticky) / sizeof(unticky[0]);
         unticky[MAX(1, flyerY % 9)] &= favicon2;
         flyerY <<= MIN(labs(1), 3);
         bodany *= 3;
      }
          char faviconJ[] = {127,(char)-104,(char)-41};
         NSInteger header5 = sizeof(resendX) / sizeof(resendX[0]);
         taiwani[0] &= (2 + header5) | taiwani[3];
         int home0 = sizeof(faviconJ) / sizeof(faviconJ[0]);
         faviconJ[0] %= MAX(2 / (MAX(1, home0)), 5);
      while ((activeL - usernamef[2]) < 4) {
          NSString * emptyM = [NSString stringWithUTF8String:(char []){99,114,111,115,115,112,111,115,116,95,56,95,57,57,0}];
          BOOL macauy = YES;
         activeL /= MAX(emptyM.length, 5);
         macauy = 5 << (MIN(3, emptyM.length));
         macauy = (!macauy ? macauy : !macauy);
         break;
      }
          NSArray * playercommon2 = [NSArray arrayWithObjects:@(81), @(635), nil];
          double overe = 1.0f;
          char playlistA[] = {(char)-81,(char)-2,(char)-109,(char)-59,(char)-29,(char)-60,(char)-111,46};
         taiwani[1] %= MAX(1, 3);
         overe /= MAX(5, playercommon2.count * 1);
         long typeso = sizeof(playlistA) / sizeof(playlistA[0]);
         overe -= typeso / (MAX(8, (int)overe));
         overe *= playercommon2.count;
         NSInteger settingsj = sizeof(resendX) / sizeof(resendX[0]);
         activeL *= 2 - settingsj;
      do {
         NSInteger overlayg = sizeof(taiwani) / sizeof(taiwani[0]);
         resendX[2] ^= securityU[2] - overlayg;
         if ([[NSString stringWithUTF8String:(char []){114,103,105,56,109,116,49,51,0}] isEqualToString: window_nxH]) {
            break;
         }
      } while (([[NSString stringWithUTF8String:(char []){114,103,105,56,109,116,49,51,0}] isEqualToString: window_nxH]) && (resendX[2] >= taiwani[2]));
      do {
         securityU[6] ^= (int)activeL;
         if ([[NSString stringWithUTF8String:(char []){118,53,100,119,48,97,100,117,0}] isEqualToString: window_nxH]) {
            break;
         }
      } while (([[NSString stringWithUTF8String:(char []){118,53,100,119,48,97,100,117,0}] isEqualToString: window_nxH]) && (3 <= (securityU[6] * usernamef[3])));
       double appleg = 0.0f;
       double penalty0 = 0.0f;
      activeL /= MAX(4, window_nxH.length);
      break;
   }
    [self.delegate nativeViewControllerDidFinish];
}


- (void)splashDetailDidClosedForPlacementID:(NSString*)placementID extra:(NSDictionary *) extra {
       NSArray * traminiW = @[@(1941.0)];
    NSArray * flyerM = @[@(4627)];
   if ((4 ^ flyerM.count) <= 2 || (traminiW.count ^ 4) <= 3) {
   }

    NSLog(@"ATSplashViewController::splashDetailDidClosedForPlacementID:%@",placementID);
    [self setupRecommendedActivationRestorePermission:[NSString stringWithFormat:@"splashDetailDidClosedForPlacementID:%@ ",placementID]];
}


- (void)showAd {
       double temperatures = 4.0f;
    char popup9[] = {76,(char)-30,(char)-30,49,(char)-36,71,2,104,63,36};
   do {
       unsigned char awayR[] = {151,132,171};
       double i_title_ = 5.0f;
      do {
         i_title_ /= MAX(1, (int)i_title_);
         if (i_title_ == 3614546.f) {
            break;
         }
      } while ((awayR[1] > 1) && (i_title_ == 3614546.f));
          unsigned char materialk[] = {136,225,202,109,246};
          unsigned char progressi[] = {24,7,98,246,11,65,231,114,60,93};
          long interstitialh = 1;
         i_title_ -= 2;
         int placeholder8 = sizeof(materialk) / sizeof(materialk[0]);
         materialk[MAX(1, interstitialh % 5)] %= MAX(placeholder8 * interstitialh, 1);
         NSInteger frame_d6y = sizeof(progressi) / sizeof(progressi[0]);
         progressi[2] <<= MIN(3, labs(frame_d6y));
      for (int y = 0; y < 2; y++) {
         i_title_ /= MAX((int)i_title_ / 1, 1);
      }
      for (int q = 0; q < 3; q++) {
         i_title_ -= awayR[2];
      }
       BOOL eighteen4 = NO;
       BOOL fastforwardo = YES;
          int chinaI = 5;
          unsigned char placeholderM[] = {190,59,141,138,94,63,108,248,14};
         i_title_ -= ((fastforwardo ? 4 : 5) ^ 3);
         chinaI %= MAX(chinaI / (MAX(placeholderM[7], 6)), 2);
         placeholderM[0] /= MAX(chinaI ^ 1, 4);
      temperatures -= 3 * (int)temperatures;
      if (1787710.f == temperatures) {
         break;
      }
   } while ((5 == temperatures) && (1787710.f == temperatures));


    
    UIWindow *hongkong = [self codeLabelConstraintsZoom];
    
    
    
    NSMutableDictionary *configure = [NSMutableDictionary dictionary];
    
     
    
     
  
    [[ATAdManager sharedManager] entrySplashScenarioWithPlacementID:self.placementID scene:@"f647f39213f410"];
    
    if ([[ATAdManager sharedManager] splashReadyForPlacementID:self.placementID]) {
        
        [[ATAdManager sharedManager] showSplashWithPlacementID:self.placementID
                                                         scene:@"f647f39213f410"
                                                        window:hongkong
                                                         extra:configure
                                                      delegate:self];
    } else {
    }
    
    [self.delegate nativeViewControllerDidFinish];
   for (int a = 0; a < 3; a++) {
       unsigned char volumeu[] = {224,44,235,138,235,234,200,123};
       unsigned char buttonQ[] = {78,201,184,96};
       NSArray * referrer8 = [NSArray arrayWithObjects:@[@(899), @(235)], nil];
       unsigned char slidery[] = {83,241,118,115,251,96,124,254,243};
       double typeso = 1.0f;
          char firebase6[] = {(char)-90,123};
         long x_playerT = sizeof(buttonQ) / sizeof(buttonQ[0]);
         buttonQ[0] += x_playerT;
         long colorsJ = sizeof(firebase6) / sizeof(firebase6[0]);
         long historyo = sizeof(firebase6) / sizeof(firebase6[0]);
         firebase6[1] %= MAX(1, colorsJ + historyo);
      while (referrer8.count > volumeu[6]) {
         typeso /= MAX(2, 3 + referrer8.count);
         break;
      }
       unsigned char libcrashsdkM[] = {93,115,96};
       unsigned char team3[] = {210,244,50,109,182,66,211,83,12};
         team3[6] -= 2;
         slidery[5] |= slidery[2];
      while (1 == (referrer8.count ^ buttonQ[2])) {
         typeso /= MAX(4 - referrer8.count, 5);
         break;
      }
       double whiter = 1.0f;
       BOOL tickG = YES;
       BOOL stringso = NO;
       char agreementk[] = {(char)-14,(char)-91,(char)-100,(char)-19,(char)-79,109,(char)-53,66,40,34,(char)-65,(char)-124};
      for (int b = 0; b < 1; b++) {
         whiter -= agreementk[6] * referrer8.count;
      }
      for (int o = 0; o < 3; o++) {
         long network7 = sizeof(team3) / sizeof(team3[0]);
         volumeu[1] >>= MIN(2, labs(1 * network7));
      }
      if (3 < (libcrashsdkM[0] | slidery[4])) {
         slidery[8] *= libcrashsdkM[1];
      }
      if (!stringso) {
         stringso = libcrashsdkM[0] < 54 && volumeu[6] < 54;
      }
      do {
          NSString * bridger = [NSString stringWithUTF8String:(char []){106,95,53,50,95,100,111,119,110,115,116,114,101,97,109,0}];
         int assistB = sizeof(agreementk) / sizeof(agreementk[0]);
         whiter /= MAX(2, assistB);
         if (4218083.f == whiter) {
            break;
         }
      } while ((2 <= (slidery[6] / (MAX(8, whiter))) || (whiter / 2) <= 4) && (4218083.f == whiter));
      while (3 <= (3 >> (MIN(3, labs(slidery[4])))) && 3 <= (whiter / (MAX(3, 10)))) {
         slidery[3] += ((int)typeso * (tickG ? 4 : 1));
         break;
      }
      temperatures -= volumeu[4] ^ (int)temperatures;
   }
   do {
      NSInteger entryT = sizeof(popup9) / sizeof(popup9[0]);
      popup9[7] %= MAX(entryT | 3, 4);
      if (temperatures == 4438501.f) {
         break;
      }
   } while ((4 < (popup9[3] - temperatures)) && (temperatures == 4438501.f));
   do {
       BOOL wnewinterstitialk = YES;
       float trophyb = 4.0f;
       double bootsplashc = 3.0f;
       char logox[] = {(char)-33,(char)-100,32,33,47,(char)-47,29,(char)-52,(char)-38,(char)-55};
          char resultE[] = {62,64,48,21,29,38,63,43,6,19,(char)-65};
          NSInteger favoriteJ = 1;
         wnewinterstitialk = (favoriteJ / (MAX(logox[4], 3))) > 68;
         int t_lock0 = sizeof(resultE) / sizeof(resultE[0]);
         resultE[6] %= MAX(4, t_lock0 % (MAX(1, 6)));
         int termsD = sizeof(resultE) / sizeof(resultE[0]);
         favoriteJ -= 2 & termsD;
         logox[9] /= MAX(1, 3);
      for (int s = 0; s < 1; s++) {
         trophyb *= ((wnewinterstitialk ? 5 : 5) << (MIN(labs((int)trophyb), 3)));
      }
      if (!wnewinterstitialk || (trophyb * 1.47f) < 4) {
          NSInteger reactM = 1;
         trophyb -= 3;
         reactM %= MAX(1 & reactM, 3);
      }
          float whiteB = 3.0f;
          NSDictionary * componentZ = @{[NSString stringWithUTF8String:(char []){109,95,55,54,95,114,101,108,97,121,101,100,0}]:@(956), [NSString stringWithUTF8String:(char []){115,99,111,114,101,115,95,101,95,55,0}]:@(439).stringValue};
         wnewinterstitialk = logox[1] > 21 || componentZ.allValues.count > 21;
         whiteB -= (int)whiteB;
         whiteB -= componentZ.count;
       unsigned char launcherj[] = {85,80,111,128,217};
       unsigned char p_position5[] = {175,240,76,94,68,20};
      if (1.91f < (bootsplashc + trophyb) || (bootsplashc + trophyb) < 1.91f) {
         NSInteger containerH = sizeof(launcherj) / sizeof(launcherj[0]);
         NSInteger topona = sizeof(p_position5) / sizeof(p_position5[0]);
         trophyb += topona ^ containerH;
      }
      do {
         trophyb -= (int)trophyb;
         if (trophyb == 3744751.f) {
            break;
         }
      } while ((trophyb == 3744751.f) && (!wnewinterstitialk));
         launcherj[0] |= (2 / (MAX(1, (wnewinterstitialk ? 5 : 1))));
       NSDictionary * fastforwardq = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){103,117,116,115,95,119,95,54,57,0}],@(2841.0), nil];
       NSDictionary * ajaxu = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){115,95,57,50,0}],[NSArray arrayWithObjects:@(NO), nil], nil];
         p_position5[0] += (int)trophyb + ajaxu.allValues.count;
      if (logox[6] < bootsplashc) {
          unsigned char paginationT[] = {180,39,87,53,207};
         logox[4] -= (int)bootsplashc << (MIN(labs(2), 3));
         long reducerC = sizeof(paginationT) / sizeof(paginationT[0]);
         paginationT[2] &= reducerC;
      }
      temperatures *= (int)trophyb;
      if (1678582.f == temperatures) {
         break;
      }
   } while ((1678582.f == temperatures) && (5 >= popup9[0]));
}


- (NSString *)with_qMinivod {
    
    NSString *sina = @"{\"unit_id\":1331013,\"nw_firm_id\":22,\"adapter_class\":\"ATBaiduSplashAdapter\",\"content\":\"{\\\"button_type\\\":\\\"0\\\",\\\"ad_place_id\\\":\\\"7852632\\\",\\\"app_id\\\":\\\"e232e8e6\\\"}\"}";
    return sina;
}


-(void)splashZoomOutViewDidCloseForPlacementID:(NSString*)placementID extra:(NSDictionary *) extra {
       unsigned char largeP[] = {58,81,14};
    NSArray * muted1 = @[@(904), @(237)];
   for (int h = 0; h < 3; h++) {
      largeP[0] &= muted1.count << (MIN(labs(largeP[2]), 5));
   }
   do {
       int manifest7 = 4;
      while (manifest7 > 1) {
         manifest7 *= manifest7;
         break;
      }
      do {
          double rulesA = 3.0f;
          unsigned char typingi[] = {137,164,56,46,200,117,157,87,83,220,241,255};
          unsigned char robotoA[] = {45,178};
          NSDictionary * editI = @{[NSString stringWithUTF8String:(char []){97,115,116,114,111,110,111,109,105,99,97,108,95,112,95,57,55,0}]:@(586), [NSString stringWithUTF8String:(char []){99,95,50,57,95,115,116,97,98,105,108,105,122,101,0}]:@(744).stringValue};
         manifest7 <<= MIN(labs(3), 3);
         rulesA -= 2;
         typingi[7] &= 2;
         int checkboxo = sizeof(robotoA) / sizeof(robotoA[0]);
         robotoA[1] <<= MIN(labs(checkboxo), 1);
         rulesA /= MAX(5 + editI.count, 4);
         rulesA += 3 * editI.count;
         if (3408584 == manifest7) {
            break;
         }
      } while (((manifest7 ^ 2) == 5 || (manifest7 ^ manifest7) == 2) && (3408584 == manifest7));
      for (int p = 0; p < 1; p++) {
         manifest7 ^= 1 / (MAX(5, manifest7));
      }
      largeP[2] -= muted1.count - 3;
      if (muted1.count == 4202845) {
         break;
      }
   } while ((muted1.count == 4202845) && ((muted1.count + largeP[0]) <= 3));

    NSLog(@"开屏ATSplashViewController::splashZoomOutViewDidCloseForPlacementID:%@",placementID);
    [self setupRecommendedActivationRestorePermission:[NSString stringWithFormat:@"splashZoomOutViewDidCloseForPlacementID:%@ ",placementID]];
   do {
      if (1656695 == muted1.count) {
         break;
      }
   } while ((1656695 == muted1.count) && (4 >= (4 >> (MIN(2, labs(largeP[2])))) || (muted1.count >> (MIN(labs(largeP[2]), 5))) >= 4));
}


- (void)loadAd {
       unsigned char placementT[] = {56,42,176,61,249,40,114,66,172,57,180,105};
    int skip2 = 0;
    double grayi = 5.0f;
      grayi *= skip2 & (int)grayi;

   self.modalTooltipsString = [NSString stringWithUTF8String:(char []){108,105,115,116,115,0}];

   self.episodes_sum = 8573;

   self.arrowSize = 6664.0;

   self.dycreatorMin = 5154.0;

   self.foregroundLessList = [NSArray arrayWithObjects:@(807), @(732), @(749), nil];

   self.away_tag = 7919;

    UIInterfaceOrientation huawei = [self rightSheetConnectedRejectorManaged];
       BOOL serviceg = YES;
       NSString * sendg = [NSString stringWithUTF8String:(char []){115,105,110,113,105,95,57,95,54,55,0}];
       char castingN[] = {(char)-20,108,21,96,(char)-34,96};
         castingN[5] *= castingN[5] ^ sendg.length;
          double topic5 = 1.0f;
          NSString * circle4 = [NSString stringWithUTF8String:(char []){106,95,52,55,95,116,114,117,101,104,100,0}];
          char notificationa[] = {(char)-7,(char)-97,(char)-67,116,96,(char)-124};
         serviceg = (79 == (circle4.length % (MAX(1, (!serviceg ? circle4.length : 79)))));
         topic5 += notificationa[1];
         notificationa[2] >>= MIN(labs(notificationa[5] << (MIN(5, labs((int)topic5)))), 3);
         castingN[4] *= sendg.length;
      while (serviceg) {
         serviceg = (11 <= (sendg.length >> (MIN(2, labs((serviceg ? sendg.length : 11))))));
         break;
      }
      while (4 > sendg.length) {
         long roundw = sizeof(castingN) / sizeof(castingN[0]);
         serviceg = sendg.length >= roundw;
         break;
      }
          char routerJ[] = {(char)-48,(char)-31,61,(char)-52,(char)-60,(char)-39,53,(char)-48,78};
         serviceg = 27 < sendg.length && castingN[5] < 27;
         int styleZ = sizeof(routerJ) / sizeof(routerJ[0]);
         routerJ[8] ^= (2 + styleZ) & routerJ[5];
      do {
          NSInteger iconB = 1;
          NSDictionary * time_vwJ = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){105,95,50,53,95,119,97,118,101,115,0}],@(29).stringValue, [NSString stringWithUTF8String:(char []){101,120,116,114,97,102,105,101,108,100,95,105,95,51,49,0}],@(524).stringValue, nil];
         iconB >>= MIN(sendg.length, 2);
         iconB ^= 1 * time_vwJ.count;
         if (3848067 == sendg.length) {
            break;
         }
      } while ((serviceg) && (3848067 == sendg.length));
      for (int h = 0; h < 1; h++) {
         serviceg = 1 | sendg.length;
      }
      if (castingN[1] > 1) {
         castingN[5] %= MAX(((serviceg ? 1 : 4) ^ sendg.length), 1);
      }
      NSInteger applicationB = sizeof(placementT) / sizeof(placementT[0]);
      grayi *= applicationB | 2;
    BOOL alert = UIInterfaceOrientationIsLandscape(huawei);
    
    
    UILabel *interstitialLabel = nil;
    interstitialLabel = [[UILabel alloc] initWithFrame:CGRectMake(.0f, .0f, alert ? 120 : UIScreen.mainScreen.bounds.size.width, alert ? UIScreen.mainScreen.bounds.size.height : 100.0f)];
      placementT[4] -= (int)grayi;
    interstitialLabel.text = @"Container";
       char nativeexg[] = {(char)-92,28,(char)-96,56,(char)-80,(char)-101,101};
       BOOL singleu = NO;
       BOOL appsq = YES;
         long condensed1 = sizeof(nativeexg) / sizeof(nativeexg[0]);
         singleu = condensed1 == 55;
         singleu = nativeexg[3] > 2;
         singleu = singleu && 9 == (78 & nativeexg[3]);
          unsigned char activityR[] = {37,29};
          NSArray * frame_eeo = @[@(187), @(89), @(403)];
         singleu = nativeexg[6] > 67;
         activityR[1] %= MAX(frame_eeo.count | activityR[1], 5);
       double agreementd = 4.0f;
       double checkboxp = 2.0f;
         agreementd /= MAX(4, ((singleu ? 5 : 3)));
      while (agreementd >= 4.5f || (4.5f - agreementd) >= 2) {
         agreementd -= (int)agreementd;
         break;
      }
         appsq = 15.49f < (checkboxp * agreementd);
          long share0 = 0;
          NSArray * friendsv = [NSArray arrayWithObjects:[NSString stringWithUTF8String:(char []){122,111,111,109,97,98,108,101,95,49,95,52,56,0}], nil];
         agreementd += share0 << (MIN(labs(2), 5));
         share0 %= MAX(1, friendsv.count & friendsv.count);
      skip2 >>= MIN(labs(skip2 / 3), 3);
    interstitialLabel.textColor = [UIColor colorWithRed:120 / 255.0 green:121 / 255.0 blue:158 / 255.0 alpha:1];
   while (skip2 >= 1) {
      skip2 %= MAX(skip2, 2);
      break;
   }
    interstitialLabel.backgroundColor = [UIColor colorWithRed:59 / 255.0 green:219 / 255.0 blue:16 / 255.0 alpha:1];
    interstitialLabel.textAlignment = NSTextAlignmentCenter;
    
    NSMutableDictionary *configureE = [NSMutableDictionary dictionary];
    
    
    [[ATAdManager sharedManager] loadADWithPlacementID:self.placementID
                                                 extra:configureE
                                              delegate:self
                                         containerView:nil
                                 defaultAdSourceConfig:nil];
}


- (UIWindow *)getKeyWindowMethodTwo {
       unsigned char completeB[] = {130,45,184,75,16,71,191,208,178,31};
    double headerv = 5.0f;
      headerv += (int)headerv ^ 1;
      headerv += (int)headerv;

    
    if ( @available(iOS 13.0, *) ) {
        UIWindow *hongkongD = [UIApplication sharedApplication].windows.firstObject;
   for (int a = 0; a < 1; a++) {
      headerv /= MAX(completeB[1] ^ (int)headerv, 5);
   }
   for (int v = 0; v < 2; v++) {
      headerv += (int)headerv;
   }
        [hongkongD makeKeyWindow];
       unsigned char guides[] = {93,83,144,230,241,247,184};
       float resulte = 2.0f;
       char lessz[] = {125,59,124,(char)-81,(char)-51,91,(char)-85,(char)-98,80,42,(char)-28,(char)-81};
      while ((resulte / (MAX(7, lessz[7]))) == 5 || 5 == (lessz[7] / (MAX(3, resulte)))) {
          int selectedT = 0;
          BOOL settingsM = YES;
          long banner7 = 1;
          int recommendationP = 5;
          char viewsy[] = {1,124,(char)-86,70,65,53};
         lessz[5] %= MAX(4, banner7);
         selectedT <<= MIN(3, labs(3 + recommendationP));
         settingsM = settingsM && viewsy[0] < 36;
         recommendationP |= 1;
         viewsy[1] |= recommendationP * 1;
         break;
      }
          int spinnerJ = 3;
          unsigned char description_8C[] = {197,121,38,76,231,187,221,239};
         NSInteger humidityO = sizeof(lessz) / sizeof(lessz[0]);
         guides[3] += 1 | humidityO;
         spinnerJ %= MAX(spinnerJ, 3);
         NSInteger sharedm = sizeof(description_8C) / sizeof(description_8C[0]);
         description_8C[MAX(5, spinnerJ % 8)] |= sharedm;
         int qcopy_3p = sizeof(lessz) / sizeof(lessz[0]);
         resulte /= MAX(4, qcopy_3p * (int)resulte);
         long klevinX = sizeof(lessz) / sizeof(lessz[0]);
         guides[6] += klevinX;
         resulte -= 1;
         NSInteger complete4 = sizeof(lessz) / sizeof(lessz[0]);
         lessz[0] <<= MIN(4, labs(complete4));
      for (int o = 0; o < 1; o++) {
          float const_5hj = 0.0f;
          int larges = 1;
          BOOL unselectedx = NO;
         guides[1] += 1;
         const_5hj /= MAX(2, ((unselectedx ? 1 : 3) % (MAX(larges, 5))));
         larges <<= MIN(labs(3), 1);
         unselectedx = larges > 11;
      }
      for (int q = 0; q < 3; q++) {
          long overO = 5;
         long applicationr = sizeof(lessz) / sizeof(lessz[0]);
         guides[5] &= (int)resulte - applicationr;
         overO &= overO;
      }
          float with__7g = 0.0f;
          NSDictionary * backward4 = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){115,101,99,95,107,95,56,55,0}],@(725).stringValue, nil];
         resulte *= 1 & (int)with__7g;
         with__7g /= MAX(backward4.allKeys.count & backward4.allKeys.count, 1);
      completeB[6] &= (int)resulte;
      long trashT = sizeof(completeB) / sizeof(completeB[0]);
      completeB[0] >>= MIN(labs(trashT), 5);
        return hongkongD;
    }else {
        UIWindow *hongkongD = [UIApplication sharedApplication].keyWindow;
        return hongkongD;
    }
    
}


- (void)didTimeoutLoadingSplashADWithPlacementID:(NSString *)placementID {
       NSArray * fastQ = [NSArray arrayWithObjects:@(424), @(199), @(737), nil];
    unsigned char profileP[] = {230,85,185,103,181,180,194,79,67};
   while (fastQ.count > profileP[4]) {
       NSInteger huaweiH = 5;
       BOOL modelt = NO;
       char logoN[] = {(char)-69,28,(char)-60,(char)-80,4,(char)-82};
       double handlero = 3.0f;
       double securitye = 1.0f;
         handlero /= MAX(1, 1);
      while (3 == logoN[0] || !modelt) {
         logoN[2] ^= 2;
         break;
      }
      for (int n = 0; n < 2; n++) {
          NSDictionary * humidityC = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){102,95,49,57,95,112,101,114,109,117,116,101,0}],@(314), [NSString stringWithUTF8String:(char []){114,101,97,100,102,117,108,108,95,106,95,54,54,0}],@(605).stringValue, nil];
         huaweiH /= MAX(5, logoN[1]);
      }
      while (1 > (logoN[0] / (MAX(3, handlero)))) {
          double activityA = 1.0f;
         handlero *= (int)activityA ^ 3;
         break;
      }
      while ((huaweiH >> (MIN(labs(2), 1))) <= 4 && modelt) {
          double containerR = 3.0f;
          long episodesH = 1;
          char catalogq[] = {(char)-41,44,100,(char)-89,39,(char)-1,90,114,(char)-48,97};
          char controlw[] = {124,14,(char)-70,94,(char)-121,(char)-34,(char)-13,63};
          double modeI = 2.0f;
         NSInteger charth = sizeof(logoN) / sizeof(logoN[0]);
         huaweiH &= huaweiH - charth;
         containerR -= episodesH / (MAX(controlw[2], 1));
         episodesH |= (int)modeI << (MIN(4, labs((int)containerR)));
         catalogq[9] *= (int)containerR;
         controlw[MAX(episodesH % 8, 7)] ^= episodesH;
         modeI -= 2 << (MIN(labs((int)containerR), 1));
         break;
      }
       NSDictionary * moduleM = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){119,105,114,101,95,55,95,52,57,0}],@(811).stringValue, [NSString stringWithUTF8String:(char []){111,95,54,52,95,118,97,114,105,97,110,99,101,115,0}],@(603), [NSString stringWithUTF8String:(char []){108,95,50,54,95,97,118,101,114,0}],@(595).stringValue, nil];
      while (2.32f >= (5.35f / (MAX(8, handlero))) || (handlero / (MAX(1, huaweiH))) >= 5.35f) {
         handlero /= MAX(4, (int)handlero);
         break;
      }
          char modelsf[] = {(char)-67,94,(char)-103,58};
          NSArray * materialh = [NSArray arrayWithObjects:@(385), @(620), @(317), nil];
          NSString * adult7 = [NSString stringWithUTF8String:(char []){115,95,55,53,95,116,114,97,110,115,105,116,105,111,110,115,0}];
         long gradleo = sizeof(modelsf) / sizeof(modelsf[0]);
         huaweiH /= MAX(1, gradleo & 3);
      while ((3 * logoN[2]) <= 4) {
          BOOL loginB = NO;
         handlero += (int)securitye >> (MIN(5, labs(huaweiH)));
         loginB = loginB;
         break;
      }
         handlero /= MAX(4, logoN[4]);
      while (1 == huaweiH) {
         securitye -= (int)handlero;
         break;
      }
      do {
          int overV = 4;
          char ying0[] = {(char)-70,(char)-62,(char)-128,63,(char)-37,59,80,(char)-57,118};
          char utilsH[] = {125,95,(char)-78,(char)-32,(char)-76,21,(char)-32};
          char untick1[] = {76,(char)-93,(char)-91,100,19};
          NSArray * turnE = @[@(8660)];
         huaweiH += overV;
         overV %= MAX(1, 2);
         NSInteger philippinesl = sizeof(ying0) / sizeof(ying0[0]);
         ying0[6] >>= MIN(labs(philippinesl | 1), 4);
         int usernameY = sizeof(untick1) / sizeof(untick1[0]);
         utilsH[0] -= usernameY;
         if (huaweiH == 1456189) {
            break;
         }
      } while (((huaweiH ^ 2) <= 5 || huaweiH <= 2) && (huaweiH == 1456189));
       NSInteger sendQ = 0;
       NSInteger expandT = 3;
         expandT >>= MIN(labs(huaweiH), 1);
         securitye *= sendQ;
      profileP[8] <<= MIN(labs((1 + (modelt ? 3 : 5))), 1);
      break;
   }

    NSLog(@"开屏超时:%@",placementID);
       unsigned char strv[] = {127,35,218,110,227,85,255,44};
       char private_ia[] = {(char)-54,(char)-24,10,52,121,77,69,24};
      for (int b = 0; b < 1; b++) {
          long benefit7 = 4;
         strv[MAX(benefit7 % 8, 6)] /= MAX(benefit7, 1);
      }
      if ((private_ia[0] & strv[5]) < 3 && 5 < (private_ia[0] & 3)) {
         int androidV = sizeof(private_ia) / sizeof(private_ia[0]);
         private_ia[2] -= androidV;
      }
       NSArray * castF = [NSArray arrayWithObjects:@(34), @(252), nil];
       NSArray * subsL = [NSArray arrayWithObjects:@(670), @(836), @(601), nil];
      if (castF.count > 5) {
          char fastU[] = {42,(char)-109,(char)-34,(char)-121,(char)-31,(char)-48};
          double plus9 = 0.0f;
          NSDictionary * form7 = @{[NSString stringWithUTF8String:(char []){113,105,97,110,95,100,95,54,52,0}]:@(638)};
          NSString * tooltips_ = [NSString stringWithUTF8String:(char []){106,95,55,54,95,114,101,115,105,122,101,114,0}];
          unsigned char friendsj[] = {128,28,24};
         plus9 += castF.count;
         long expiredw = sizeof(friendsj) / sizeof(friendsj[0]);
         fastU[0] /= MAX(1, expiredw);
         plus9 /= MAX(4, tooltips_.length);
      }
          NSDictionary * greym = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){98,95,54,57,95,116,104,97,116,0}],@(7231.0), nil];
          NSInteger carouselZ = 0;
         strv[1] >>= MIN(labs(strv[6]), 4);
         carouselZ >>= MIN(3, greym.count);
         carouselZ &= carouselZ % (MAX(greym.allKeys.count, 1));
      if (castF.count > 4) {
          double sportF = 3.0f;
          float dangerf = 5.0f;
          float foregroundH = 3.0f;
         private_ia[7] |= private_ia[5];
         sportF += (int)sportF + (int)foregroundH;
         dangerf -= 3;
         foregroundH *= 2;
      }
    NSLog(@"开屏didTimeoutLoadingSplashADWithPlacementID:");
    [self setupRecommendedActivationRestorePermission:[NSString stringWithFormat:@"开屏超时:%@",placementID]];
}


- (UITextView *)textView {
       NSArray * listf = @[@(711), @(609), @(541)];
    char viewerG[] = {(char)-104,(char)-64,98,(char)-46,(char)-18,70,19,23};
    int downloadY = 4;
   while ((5 & downloadY) < 4) {
      downloadY -= viewerG[5];
      break;
   }

    if (!_textView) {
        _textView = [[UITextView alloc] init];
      viewerG[4] += listf.count ^ 3;
        _textView.backgroundColor = [UIColor colorWithRed:59 / 255.0 green:219 / 255.0 blue:16 / 255.0 alpha:1];
   do {
      viewerG[MAX(5, downloadY % 8)] |= downloadY % 2;
      if (listf.count == 1916181) {
         break;
      }
   } while ((2 >= (downloadY >> (MIN(labs(viewerG[4]), 3)))) && (listf.count == 1916181));
        _textView.layer.masksToBounds = YES;
      downloadY %= MAX(5 - listf.count, 3);
        _textView.layer.cornerRadius = 5;
       float expandf = 2.0f;
       BOOL bannerl = NO;
       NSDictionary * policyO = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){108,95,56,53,95,104,113,120,100,115,112,0}],@(939).stringValue, [NSString stringWithUTF8String:(char []){102,95,49,53,95,115,117,98,116,114,97,99,116,109,111,100,0}],@(48), [NSString stringWithUTF8String:(char []){97,95,48,95,115,114,99,0}],@(656).stringValue, nil];
       char buildY[] = {38,118,(char)-102,(char)-85,(char)-25,(char)-59,(char)-82,(char)-49,62,(char)-42,(char)-102,56};
       char stylesu[] = {62,76,73,107,71,57,(char)-29,14};
         expandf /= MAX(4 / (MAX(4, policyO.count)), 1);
      do {
         buildY[5] ^= policyO.allValues.count;
         if (1823864 == listf.count) {
            break;
         }
      } while ((buildY[8] >= 5) && (1823864 == listf.count));
      while ((stylesu[3] + expandf) == 4) {
         stylesu[3] /= MAX(1, 5);
         break;
      }
      do {
         expandf += policyO.count;
         if (policyO.count == 3939701) {
            break;
         }
      } while ((policyO.count == 3939701) && ([policyO.allKeys containsObject:@(expandf)]));
          int detailJ = 3;
          char traminiG[] = {38,(char)-37,(char)-72,(char)-69,66,61,(char)-121,(char)-1};
         int mbjscommonX = sizeof(stylesu) / sizeof(stylesu[0]);
         buildY[MAX(detailJ % 12, 6)] |= mbjscommonX >> (MIN(2, labs(1)));
         NSInteger ewardedf = sizeof(traminiG) / sizeof(traminiG[0]);
         detailJ -= ewardedf / (MAX(traminiG[0], 2));
      while (!bannerl) {
         bannerl = !bannerl;
         break;
      }
      for (int e = 0; e < 1; e++) {
          int pingI = 2;
          float actionsV = 2.0f;
          NSDictionary * huawein = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){119,95,49,57,95,110,101,116,101,113,0}],[NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){87,0}],[NSString stringWithUTF8String:(char []){97,0}], [NSString stringWithUTF8String:(char []){48,0}],[NSString stringWithUTF8String:(char []){103,0}], [NSString stringWithUTF8String:(char []){80,0}],[NSString stringWithUTF8String:(char []){48,0}], nil], nil];
          NSInteger plashd = 1;
         expandf += 3 + (int)expandf;
         pingI >>= MIN(huawein.allKeys.count, 5);
         actionsV -= huawein.allValues.count;
         plashd >>= MIN(5, huawein.allValues.count);
      }
      for (int n = 0; n < 3; n++) {
          unsigned char foundv[] = {98,150,229,209,25,133};
          double hover3 = 5.0f;
          long reneww = 3;
          unsigned char zoomX[] = {21,227,205};
         bannerl = policyO.allKeys.count > 1;
         foundv[MAX(4, reneww % 6)] |= 3;
         hover3 -= 1;
         reneww >>= MIN(4, labs((int)hover3 * 3));
         zoomX[0] |= 3;
      }
      viewerG[7] -= 2 << (MIN(1, policyO.allValues.count));
        _textView.editable = NO;
   if ((viewerG[3] / (MAX(1, downloadY))) < 2) {
      NSInteger questW = sizeof(viewerG) / sizeof(viewerG[0]);
      viewerG[6] <<= MIN(2, labs(listf.count << (MIN(labs(questW), 4))));
   }
        _textView.text = nil;
    }
    return _textView;
}


- (void)didFailToLoadADSourceWithPlacementID:(NSString*)placementID extra:(NSDictionary*)extra error:(NSError*)error{
       int analyticsR = 0;
    long zhengpiano = 2;
      zhengpiano += 2;
      zhengpiano ^= analyticsR ^ zhengpiano;
      analyticsR &= analyticsR;

    NSLog(@"广告源--AD--失败--ATSplashViewController::didFailToLoadADSourceWithPlacementID:%@---error:%@", placementID,error);
}


- (void)didStartBiddingADSourceWithPlacementID:(NSString *)placementID extra:(NSDictionary*)extra{
       NSString * bottomB = [NSString stringWithUTF8String:(char []){103,95,51,56,95,102,105,110,105,115,101,100,0}];
    double savef = 5.0f;
    double awayO = 0.0f;
   do {
       char private_yt[] = {(char)-112,9,(char)-104,(char)-91,115,54,81,31,(char)-108};
       char reminderB[] = {119,25,81};
       long privilegeG = 1;
       unsigned char bingG[] = {59,103,219,43,193,62};
       long textM = 3;
       NSInteger debugz = 4;
          double project2 = 4.0f;
          double spec0 = 3.0f;
          NSInteger signinupO = 0;
         long fastC = sizeof(reminderB) / sizeof(reminderB[0]);
         bingG[MAX(privilegeG % 6, 3)] /= MAX(1, fastC);
         project2 *= (int)project2;
         spec0 -= (int)project2 << (MIN(4, labs(2)));
         signinupO *= signinupO;
      do {
         textM += textM;
         if (2956617 == textM) {
            break;
         }
      } while ((1 > (1 | private_yt[5])) && (2956617 == textM));
      if ((private_yt[8] | reminderB[0]) > 3 && (private_yt[8] | 3) > 1) {
          float statione = 3.0f;
          double invite3 = 4.0f;
          NSArray * actionsj = [NSArray arrayWithObjects:@[@(637), @(468), @(183)], nil];
         reminderB[1] += private_yt[4] % 1;
         statione *= 3;
         invite3 /= MAX(1 & actionsj.count, 4);
         invite3 /= MAX(actionsj.count / (MAX(3, 3)), 5);
      }
         private_yt[MAX(textM % 9, 6)] -= textM;
      while ((privilegeG - 2) > 4 && 5 > (2 - privilegeG)) {
         privilegeG /= MAX(textM % (MAX(1, 7)), 2);
         break;
      }
          int eighteenl = 2;
          BOOL gemfile_ = NO;
          float style8 = 1.0f;
         textM -= 3 >> (MIN(labs(bingG[5]), 5));
         eighteenl /= MAX(2 - (int)style8, 5);
         gemfile_ = style8 >= 98.34f;
          char serviceK[] = {52,(char)-96,26};
         privilegeG += 2;
         NSInteger league4 = sizeof(serviceK) / sizeof(serviceK[0]);
         serviceK[0] &= (3 + league4) % (MAX(serviceK[2], 3));
          NSInteger volume8 = 1;
          double backgroundK = 4.0f;
         privilegeG /= MAX(5, 1);
         volume8 -= 3;
         backgroundK += volume8;
       unsigned char utilst[] = {226,237,151,100,194};
       unsigned char signinuph[] = {135,237,17};
          unsigned char applicationZ[] = {104,126,8,98,104,62,206};
          char foregroundJ[] = {(char)-47,55,(char)-103,(char)-45};
          NSDictionary * nterstitialC = @{[NSString stringWithUTF8String:(char []){115,111,108,105,100,105,116,121,95,114,95,57,56,0}]:@(715).stringValue, [NSString stringWithUTF8String:(char []){98,110,109,112,105,95,101,95,54,53,0}]:@(797)};
         debugz ^= privilegeG;
         applicationZ[4] <<= MIN(labs(nterstitialC.count << (MIN(labs(foregroundJ[2]), 5))), 3);
         long chatv = sizeof(foregroundJ) / sizeof(foregroundJ[0]);
         foregroundJ[2] &= nterstitialC.count << (MIN(labs(chatv), 2));
          int morec = 4;
         debugz /= MAX(3, privilegeG);
         morec %= MAX(1, 3);
      while (4 == (1 - textM)) {
          double modityQ = 1.0f;
          float playercommon3 = 4.0f;
          NSString * usernameV = [NSString stringWithUTF8String:(char []){105,110,116,101,114,97,116,105,111,110,95,111,95,51,56,0}];
          NSString * kickQ = [NSString stringWithUTF8String:(char []){109,105,99,95,100,95,56,57,0}];
         bingG[3] &= 1;
         modityQ -= kickQ.length >> (MIN(3, labs((int)modityQ)));
         playercommon3 /= MAX(1, usernameV.length ^ (int)playercommon3);
         modityQ += usernameV.length * 3;
         playercommon3 -= kickQ.length;
         break;
      }
      while (bingG[2] >= 1) {
         bingG[2] -= debugz - 1;
         break;
      }
      if (privilegeG >= bingG[5]) {
         NSInteger downloadedO = sizeof(signinuph) / sizeof(signinuph[0]);
         privilegeG |= downloadedO ^ textM;
      }
      savef += 3 >> (MIN(5, labs(privilegeG)));
      if (1326707.f == savef) {
         break;
      }
   } while (((bottomB.length - savef) == 4 || (bottomB.length - savef) == 4) && (1326707.f == savef));
       unsigned char expiredb[] = {53,46,132,21,9,79};
      while (4 == (expiredb[1] ^ expiredb[2]) && 1 == (expiredb[1] ^ 4)) {
          NSArray * security4 = @[@(999), @(614), @(538)];
          NSString * headerI = [NSString stringWithUTF8String:(char []){110,101,118,101,114,95,118,95,50,53,0}];
          NSArray * orangec = @[@(264), @(263), @(697)];
          BOOL updatess = YES;
          NSInteger macaux = 5;
         expiredb[1] |= macaux;
         updatess = 1 + security4.count;
         updatess = 5 - headerI.length;
         updatess = orangec.count >> (MIN(labs(2), 5));
         updatess = security4.count >> (MIN(labs(4), 2));
         updatess = headerI.length - 2;
         updatess = orangec.count % (MAX(1, 1));
         break;
      }
         long playU = sizeof(expiredb) / sizeof(expiredb[0]);
         expiredb[2] %= MAX(2 - playU, 2);
       long scheduleQ = 0;
      savef *= 2;
       char backwardc[] = {(char)-82,(char)-62,(char)-13,(char)-124,(char)-115,(char)-98,(char)-110,86,(char)-35,(char)-70,(char)-56};
       long spinnerG = 2;
      do {
         backwardc[MAX(7, spinnerG % 11)] += backwardc[3];
         if ([bottomB isEqualToString: [NSString stringWithUTF8String:(char []){56,118,54,102,49,0}]]) {
            break;
         }
      } while (([bottomB isEqualToString: [NSString stringWithUTF8String:(char []){56,118,54,102,49,0}]]) && (spinnerG == 1));
      do {
         spinnerG -= 3;
         if (3234973 == spinnerG) {
            break;
         }
      } while ((3234973 == spinnerG) && ((backwardc[1] >> (MIN(labs(4), 3))) <= 3 || 4 <= (spinnerG >> (MIN(labs(backwardc[1]), 5)))));
         spinnerG &= spinnerG;
      do {
         backwardc[2] -= 2;
         if ([[NSString stringWithUTF8String:(char []){54,111,51,53,114,0}] isEqualToString: bottomB]) {
            break;
         }
      } while (((backwardc[8] | 2) < 4 && 2 < (backwardc[8] | 2)) && ([[NSString stringWithUTF8String:(char []){54,111,51,53,114,0}] isEqualToString: bottomB]));
      do {
          int eactH = 3;
          NSInteger borderlesst = 0;
          unsigned char mimou[] = {28,164,246,30,103};
         spinnerG |= 2;
         eactH *= borderlesst % (MAX(3, 9));
         long styleu = sizeof(mimou) / sizeof(mimou[0]);
         borderlesst *= styleu;
         if (spinnerG == 210858) {
            break;
         }
      } while (((spinnerG % 5) > 5) && (spinnerG == 210858));
      do {
         backwardc[10] |= spinnerG >> (MIN(labs(3), 3));
         if (798201 == bottomB.length) {
            break;
         }
      } while ((798201 == bottomB.length) && ((backwardc[4] / 4) <= 2));
      savef /= MAX(3, (int)awayO * (int)savef);
       NSDictionary * mailI = @{[NSString stringWithUTF8String:(char []){101,97,99,104,95,53,95,53,52,0}]:@(998)};
      while (2 == mailI.allKeys.count) {
          int controlst = 2;
          NSDictionary * save6 = @{[NSString stringWithUTF8String:(char []){101,120,112,114,101,115,115,95,50,95,57,56,0}]:@(800).stringValue};
          unsigned char collectionJ[] = {198,91,97,102,46,49,169,58,137,129,201};
          double weiboC = 2.0f;
         controlst <<= MIN(mailI.count, 2);
         controlst <<= MIN(4, labs((int)weiboC - save6.allKeys.count));
         weiboC -= save6.count;
         collectionJ[6] %= MAX(4, save6.allKeys.count + 3);
         break;
      }
      for (int l = 0; l < 3; l++) {
      }
      if ([mailI.allValues containsObject:@(mailI.count)]) {
          unsigned char dycreatora[] = {188,63,5,5,9,16,9};
         long teamz = sizeof(dycreatora) / sizeof(dycreatora[0]);
         dycreatora[6] <<= MIN(2, labs(teamz & 3));
      }
      savef /= MAX(1, (int)awayO);
      savef += (int)awayO;
      awayO += 3 >> (MIN(4, labs((int)savef)));

    NSLog(@"广告源--bid--开始--ATSplashViewController::didStartBiddingADSourceWithPlacementID:%@", placementID);
}


- (void)defaultAction {
       BOOL navigationm = YES;
    float largeV = 5.0f;
    char submitG[] = {108,54,118,(char)-73,(char)-15,(char)-16};
       char downr[] = {107,24,122,88,(char)-41,(char)-82,100};
       NSArray * build6 = @[@(19), @(644)];
      for (int l = 0; l < 3; l++) {
          unsigned char rewardy[] = {66,200,22,222,82,138,199,132,60,100,12};
          unsigned char launchX[] = {212,237,51,143,155,43,203};
          char countrye[] = {5,(char)-30,(char)-41,(char)-27,(char)-49,(char)-54};
         int memberc = sizeof(launchX) / sizeof(launchX[0]);
         int singled = sizeof(rewardy) / sizeof(rewardy[0]);
         rewardy[3] *= singled - memberc;
         NSInteger halfE = sizeof(countrye) / sizeof(countrye[0]);
         countrye[1] &= (2 + halfE) / (MAX(launchX[6], 2));
      }
      for (int l = 0; l < 3; l++) {
          double areak = 3.0f;
          char cornerH[] = {53,60,(char)-11,36,(char)-79,26,16,22,(char)-79,45,(char)-39};
          unsigned char updatesK[] = {102,136,2,40,113,89,84};
          int productL = 1;
         productL |= build6.count;
         long heartv = sizeof(updatesK) / sizeof(updatesK[0]);
         areak /= MAX(heartv, 2);
         int downloadG = sizeof(updatesK) / sizeof(updatesK[0]);
         cornerH[2] <<= MIN(labs(downloadG), 4);
         int rewardvideop = sizeof(cornerH) / sizeof(cornerH[0]);
         productL >>= MIN(4, labs(3 | rewardvideop));
      }
      for (int v = 0; v < 2; v++) {
      }
       float debuga = 2.0f;
      int mbnativef = sizeof(downr) / sizeof(downr[0]);
      navigationm = largeV == mbnativef;
      navigationm = (largeV / (MAX(submitG[1], 5))) >= 52;
   for (int b = 0; b < 3; b++) {
      submitG[2] *= 3;
   }
   for (int k = 0; k < 2; k++) {
      largeV -= ((navigationm ? 3 : 2));
   }
       NSArray * unreadE = [NSArray arrayWithObjects:@(232), @(373), @(660), nil];
       char checkboxX[] = {(char)-2,(char)-5,77,(char)-97,(char)-116};
      do {
          double resendg = 0.0f;
          double guidea = 2.0f;
          BOOL phonei = YES;
          int modityf = 0;
         modityf &= unreadE.count / (MAX(1, 9));
         resendg -= ((phonei ? 4 : 3) % (MAX((int)guidea, 1)));
         guidea -= (int)guidea * 2;
         phonei = resendg > guidea;
         modityf *= (int)guidea + 1;
         if (1931575 == unreadE.count) {
            break;
         }
      } while ((1931575 == unreadE.count) && ((unreadE.count << (MIN(labs(5), 3))) < 4));
      do {
         if (4340487 == unreadE.count) {
            break;
         }
      } while ((4 < (unreadE.count >> (MIN(labs(checkboxX[2]), 4)))) && (4340487 == unreadE.count));
          BOOL gemfilec = NO;
          int fill3 = 3;
          BOOL sports5 = NO;
         fill3 += unreadE.count ^ 1;
         gemfilec = (!gemfilec ? sports5 : !gemfilec);
         fill3 /= MAX(3, ((gemfilec ? 3 : 5)));
       long privacy8 = 5;
       long policy4 = 1;
      do {
         checkboxX[MAX(4, privacy8 % 5)] /= MAX(3, checkboxX[0]);
         if (navigationm ? !navigationm : navigationm) {
            break;
         }
      } while ((navigationm ? !navigationm : navigationm) && ((checkboxX[2] - privacy8) == 4 || 4 == (checkboxX[2] - privacy8)));
      largeV /= MAX(3, 2);

}


- (void)didFinishLoadingADSourceWithPlacementID:(NSString *)placementID extra:(NSDictionary*)extra{
       NSArray * tickB = @[[NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){115,105,103,104,97,110,100,108,101,114,95,116,95,51,56,0}],@(833).stringValue, nil]];
    double nativeexN = 0.0f;
    long friendsC = 3;
      friendsC |= friendsC ^ (int)nativeexN;
      friendsC |= tickB.count;
      friendsC %= MAX(tickB.count, 3);
       long mbnativeadvancedh = 1;
       char langm[] = {107,(char)-34,108};
          int kuaishou8 = 5;
          unsigned char episodesW[] = {242,204,17,131,120,15,169,53,153};
         langm[2] %= MAX(kuaishou8 + episodesW[6], 3);
      while ((4 | langm[0]) < 5 || 1 < (4 | langm[0])) {
          NSDictionary * selectd = @{[NSString stringWithUTF8String:(char []){118,95,52,95,117,110,105,102,111,114,109,115,0}]:@(5583.0)};
         mbnativeadvancedh &= 1;
         break;
      }
      do {
         langm[MAX(mbnativeadvancedh % 3, 1)] |= 3 >> (MIN(1, labs(mbnativeadvancedh)));
         if (4756330 == tickB.count) {
            break;
         }
      } while (((mbnativeadvancedh / (MAX(1, langm[1]))) > 5 && 1 > (langm[1] / 5)) && (4756330 == tickB.count));
      while (mbnativeadvancedh >= 3) {
         langm[MAX(1, mbnativeadvancedh % 3)] += 3;
         break;
      }
         mbnativeadvancedh &= 3;
         mbnativeadvancedh -= 3 | mbnativeadvancedh;
      friendsC += friendsC;
       NSDictionary * const_708 = @{[NSString stringWithUTF8String:(char []){114,101,115,117,109,101,100,95,114,95,52,57,0}]:@(157), [NSString stringWithUTF8String:(char []){111,95,51,49,95,100,105,115,112,111,115,101,100,0}]:@(223).stringValue};
      for (int w = 0; w < 2; w++) {
      }
          NSArray * championj = [NSArray arrayWithObjects:@(680), @(921), nil];
          long p_positionZ = 3;
         p_positionZ /= MAX(const_708.count, 1);
         p_positionZ ^= championj.count;
      nativeexN *= const_708.allKeys.count % 2;
   while (5 <= (tickB.count << (MIN(5, labs(friendsC)))) && 3 <= (tickB.count << (MIN(labs(5), 4)))) {
      friendsC /= MAX(1, (int)nativeexN / (MAX(4, tickB.count)));
      break;
   }

    NSLog(@"广告源--AD--完成--ATSplashViewController::didFinishLoadingADSourceWithPlacementID:%@", placementID);
}


- (UIWindow *)codeLabelConstraintsZoom {
       long favicon1 = 4;
    char lineh[] = {76,81,49,85,(char)-121,(char)-29,(char)-89,125,(char)-105};
    char delegate_kaU[] = {59,56,104,(char)-75,113,91,102,(char)-78,(char)-59,(char)-113,(char)-80};
   if (4 >= (lineh[1] % (MAX(7, delegate_kaU[1]))) && 1 >= (4 % (MAX(3, delegate_kaU[1])))) {
      NSInteger nativeexO = sizeof(delegate_kaU) / sizeof(delegate_kaU[0]);
      delegate_kaU[MAX(favicon1 % 11, 0)] >>= MIN(1, labs(nativeexO | 3));
   }
      delegate_kaU[2] >>= MIN(2, labs(3 % (MAX(10, favicon1))));

    if (@available(iOS 13.0, *)) {
        for (UIWindowScene* windowScene in [UIApplication sharedApplication].connectedScenes) {
            if (windowScene.activationState == UISceneActivationStateForegroundActive)
            {
                for (UIWindow *window in windowScene.windows)
                {
                    if (window.isKeyWindow)
                    {
                        return window;
                    }
                }
            }
        }
    } else {
        
        UIWindow * window = [UIApplication sharedApplication].delegate.window;
        if (window) {
            return window;
        }
        return [UIApplication sharedApplication].keyWindow;
    }
    return nil;
   for (int r = 0; r < 2; r++) {
      int register_8u = sizeof(delegate_kaU) / sizeof(delegate_kaU[0]);
      delegate_kaU[4] %= MAX((1 + register_8u) << (MIN(labs(lineh[5]), 5)), 1);
   }
      delegate_kaU[MAX(6, favicon1 % 11)] /= MAX(favicon1, 3);
   for (int b = 0; b < 1; b++) {
      int shoot6 = sizeof(lineh) / sizeof(lineh[0]);
      int streamingG = sizeof(delegate_kaU) / sizeof(delegate_kaU[0]);
      lineh[8] <<= MIN(1, labs(shoot6 + streamingG));
   }
}


- (void)splashDidShowFailedForPlacementID:(NSString*)placementID error:(NSError *)error extra:(NSDictionary *) extra {
       NSArray * cornerY = [NSArray arrayWithObjects:@(136), @(892), @(676), nil];
    double libcrashsdki = 4.0f;
    double description_8T = 4.0f;
      libcrashsdki += (int)description_8T / (MAX((int)libcrashsdki, 1));
      libcrashsdki /= MAX(4, (int)libcrashsdki * 1);
   while (2.62f <= description_8T) {
       double connectionj = 3.0f;
      for (int h = 0; h < 1; h++) {
         connectionj /= MAX(4, 2 | (int)connectionj);
      }
         connectionj -= (int)connectionj / 2;
      for (int x = 0; x < 2; x++) {
         connectionj -= (int)connectionj;
      }
      libcrashsdki -= 2;
      break;
   }
   if ((3.82f - libcrashsdki) > 4.80f) {
       double commentA = 5.0f;
       NSString * tickedq = [NSString stringWithUTF8String:(char []){110,95,51,95,114,101,102,117,110,100,0}];
       BOOL networkT = YES;
         networkT = ![tickedq containsString:@(networkT).stringValue];
          NSDictionary * kuaishouo = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){119,95,51,55,95,109,112,106,112,101,103,0}],@(593), [NSString stringWithUTF8String:(char []){121,95,54,53,95,99,117,108,102,114,101,113,0}],@(857).stringValue, nil];
          unsigned char areaH[] = {73,109,1,79,13,250,55,135,3,52,72,14};
          NSArray * yings = @[@(305), @(705)];
         commentA -= kuaishouo.allKeys.count & yings.count;
         NSInteger sendm = sizeof(areaH) / sizeof(areaH[0]);
         NSInteger gesturest = sizeof(areaH) / sizeof(areaH[0]);
         areaH[2] -= sendm & gesturest;
      if (4 == commentA) {
         commentA /= MAX(2, tickedq.length);
      }
       BOOL stepK = NO;
          char huaweiN[] = {58,62,(char)-50,91,25,64};
          long with_cO = 0;
         stepK = (commentA + huaweiN[3]) <= 37;
         huaweiN[3] /= MAX(1, 3);
         with_cO |= with_cO;
      if ([tickedq containsString:@(networkT).stringValue]) {
         networkT = !stepK;
      }
          NSDictionary * stylej = @{[NSString stringWithUTF8String:(char []){107,95,54,52,95,116,114,97,110,115,105,116,0}]:@(4826)};
         networkT = 10.56f > commentA;
       unsigned char agreement_[] = {138,172,171,26,8,109};
       unsigned char context7[] = {213,213,250,210,102,186,73,205,105,172};
         commentA *= tickedq.length / 2;
      libcrashsdki += (int)libcrashsdki >> (MIN(3, labs(1)));
   }

    NSLog(@"开屏ATSplashViewController::splashDidShowFailedForPlacementID:%@",placementID);
    [self setupRecommendedActivationRestorePermission:[NSString stringWithFormat:@"splashDidShowFailedForPlacementID:%@ error:%@ ",placementID,error]];
      description_8T *= cornerY.count;
   while (![cornerY containsObject:@(cornerY.count)]) {
       unsigned char bufferC[] = {8,232,170,34,25};
       double watchI = 3.0f;
      for (int h = 0; h < 3; h++) {
         watchI -= bufferC[2];
      }
      if ((bufferC[4] - watchI) < 5) {
          double feedback6 = 2.0f;
          NSDictionary * typing_ = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){52,0}],[NSString stringWithUTF8String:(char []){67,0}], nil];
          NSInteger dropdownH = 1;
          unsigned char uploadA[] = {117,31};
          NSArray * router2 = [NSArray arrayWithObjects:@(440), @(729), nil];
         watchI -= dropdownH;
         feedback6 *= router2.count;
         feedback6 *= typing_.count;
         dropdownH -= 2;
         uploadA[0] %= MAX(router2.count - 3, 2);
         feedback6 += typing_.count * 2;
      }
      do {
          char cross6[] = {(char)-4,(char)-62,(char)-108,(char)-40,(char)-5};
          char rewind8[] = {11,(char)-70,(char)-124,(char)-107,30};
          double inviteb = 3.0f;
          unsigned char stations7[] = {159,104,197,229,51,252};
         NSInteger moonm = sizeof(cross6) / sizeof(cross6[0]);
         watchI -= moonm * 2;
         NSInteger userJ = sizeof(stations7) / sizeof(stations7[0]);
         rewind8[4] %= MAX(1, userJ * 2);
         inviteb *= rewind8[2];
         if (watchI == 4724087.f) {
            break;
         }
      } while ((4 <= (bufferC[2] + 2)) && (watchI == 4724087.f));
         watchI += (int)watchI ^ 2;
      if ((3 + watchI) > 3 && (watchI + bufferC[3]) > 3) {
         watchI *= (int)watchI;
      }
         bufferC[2] >>= MIN(5, labs(1));
      watchI += cornerY.count / (MAX(4, 1));
      break;
   }
}


- (UIInterfaceOrientation)rightSheetConnectedRejectorManaged {
       NSArray * typing0 = @[@(915), @(434), @(720)];
    unsigned char diceu[] = {146,111,105,222,50,114,215,138,40,146,159,114};
      diceu[2] |= typing0.count + diceu[10];

    if (@available(iOS 13.0, *)) {
        UIWindow *details = [[[UIApplication sharedApplication] windows] firstObject];
        if (details == nil) { return UIInterfaceOrientationUnknown; }
        
        UIWindowScene *nalytics = details.windowScene;
        if (nalytics == nil){ return UIInterfaceOrientationUnknown; }
        
        return nalytics.interfaceOrientation;
    } else {
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
        return UIApplication.sharedApplication.statusBarOrientation;
       char thumbnailL[] = {121,39,71,85,(char)-122,34,100,(char)-125,(char)-92,(char)-18};
       NSArray * moduleD = [NSArray arrayWithObjects:@(457), @(888), @(775), nil];
       float other3 = 5.0f;
         thumbnailL[3] += (int)other3;
         other3 += (int)other3;
      for (int b = 0; b < 3; b++) {
         thumbnailL[8] *= (int)other3;
      }
      do {
         thumbnailL[6] ^= (int)other3 % 3;
         if (817751 == typing0.count) {
            break;
         }
      } while ((817751 == typing0.count) && (4 >= (4 + other3)));
         other3 *= 1;
         other3 += moduleD.count;
      if (![moduleD containsObject:@(other3)]) {
          double emojil = 2.0f;
          NSDictionary * flipperp = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){104,95,53,51,95,114,101,116,114,105,101,118,101,100,0}],@(124).stringValue, [NSString stringWithUTF8String:(char []){97,95,55,53,95,109,112,111,110,0}],@(355), nil];
          char klevinK[] = {(char)-106,47,54,(char)-73,76,66};
          unsigned char chinasame4[] = {72,82,42};
          BOOL playercommoni = YES;
         long combineW = sizeof(klevinK) / sizeof(klevinK[0]);
         other3 /= MAX(1, combineW ^ 2);
         long detailX = sizeof(chinasame4) / sizeof(chinasame4[0]);
         emojil -= detailX;
         emojil /= MAX(5, flipperp.count);
         playercommoni = flipperp.allValues.count == emojil;
      }
          NSDictionary * typingt = @{[NSString stringWithUTF8String:(char []){113,95,57,54,95,115,111,99,107,0}]:@(847).stringValue, [NSString stringWithUTF8String:(char []){115,97,116,117,114,97,116,105,111,110,95,102,95,53,56,0}]:@(373).stringValue};
          char sans5[] = {72,(char)-99,(char)-112,(char)-41,90,(char)-61};
         other3 -= moduleD.count;
         sans5[3] <<= MIN(3, typingt.allKeys.count);
      do {
          NSDictionary * userl = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){118,111,105,99,101,115,95,113,95,55,51,0}],@(876).stringValue, nil];
          unsigned char canvasl[] = {146,190,8};
          int c_countz = 5;
          float routerR = 4.0f;
          NSString * toponn = [NSString stringWithUTF8String:(char []){102,95,48,95,116,117,110,105,110,103,0}];
         c_countz -= moduleD.count >> (MIN(labs(5), 4));
         routerR *= userl.count;
         canvasl[0] <<= MIN(2, labs((int)routerR / (MAX(canvasl[0], 3))));
         c_countz <<= MIN(labs(canvasl[1] >> (MIN(5, userl.allKeys.count))), 4);
         routerR -= 4 * toponn.length;
         routerR += toponn.length;
         if (moduleD.count == 890784) {
            break;
         }
      } while ((moduleD.count == 890784) && (5 == (moduleD.count << (MIN(labs(5), 5))) || 5 == (5 << (MIN(2, labs(thumbnailL[5]))))));
      other3 /= MAX(5, typing0.count / 1);
   if (diceu[1] < 5) {
       char filedt[] = {19,(char)-78,21,72,(char)-2,(char)-77,(char)-33,(char)-58,93};
       int libcrashsdkS = 4;
       int dropdownN = 2;
         libcrashsdkS >>= MIN(labs(libcrashsdkS >> (MIN(labs(1), 1))), 2);
      do {
          char results[] = {(char)-4,77,29,(char)-117,(char)-61,(char)-42,(char)-63,56,19};
          float progresse = 5.0f;
          NSDictionary * floatingw = @{[NSString stringWithUTF8String:(char []){121,95,51,49,95,116,119,111,115,99,97,108,101,0}]:@(5738.0)};
          char list9[] = {24,115,40,(char)-36,118,78};
          NSDictionary * googleZ = @{[NSString stringWithUTF8String:(char []){114,95,57,95,119,97,115,116,101,100,0}]:@(225)};
         NSInteger actionsZ = sizeof(results) / sizeof(results[0]);
         dropdownN %= MAX(3, 1 * actionsZ);
         progresse /= MAX(5, floatingw.count);
         progresse += floatingw.count;
         list9[1] ^= 1 - (int)progresse;
         progresse /= MAX(5, googleZ.count);
         progresse -= googleZ.count;
         if (2895628 == dropdownN) {
            break;
         }
      } while ((5 <= dropdownN) && (2895628 == dropdownN));
      for (int d = 0; d < 1; d++) {
         libcrashsdkS /= MAX(dropdownN << (MIN(labs(filedt[5]), 4)), 1);
      }
       NSDictionary * largeF = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){122,95,56,55,95,115,97,100,120,120,0}],@(381).stringValue, [NSString stringWithUTF8String:(char []){101,95,49,48,48,95,100,114,97,119,116,101,120,116,0}],@(223), nil];
       NSDictionary * readZ = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){99,95,54,49,95,115,115,115,101,0}],@(103), nil];
          char previewf[] = {(char)-114,(char)-77,(char)-55,82,100,119,62,2,80,(char)-102,17,94};
          long expandO = 3;
         libcrashsdkS >>= MIN(1, labs(dropdownN >> (MIN(largeF.count, 3))));
         previewf[MAX(expandO % 12, 11)] ^= expandO / 1;
      while (!largeF[@(dropdownN).stringValue]) {
         libcrashsdkS %= MAX(4, largeF.count + 3);
         break;
      }
         filedt[0] ^= libcrashsdkS | 3;
      while ((dropdownN << (MIN(labs(2), 2))) <= 1) {
         dropdownN += 1 & libcrashsdkS;
         break;
      }
      while ((1 >> (MIN(3, labs(filedt[5])))) < 4 && (1 >> (MIN(3, labs(filedt[5])))) < 4) {
         long mbbannerl = sizeof(filedt) / sizeof(filedt[0]);
         filedt[MAX(3, libcrashsdkS % 9)] &= mbbannerl;
         break;
      }
      dropdownN ^= typing0.count;
   }
#pragma clang diagnostic pop
    }
}


- (void)splashDidClickForPlacementID:(NSString *)placementID extra:(NSDictionary *)extra {
       NSInteger currentB = 5;
    float textQ = 1.0f;
    float tailY = 3.0f;
      tailY *= (int)textQ << (MIN(5, labs(2)));
       BOOL downloadingU = NO;
       char acceptedO[] = {82,(char)-73,(char)-62,(char)-11,(char)-30,(char)-86,(char)-119,7};
       float targetB = 3.0f;
      if (!downloadingU) {
         int actiono = sizeof(acceptedO) / sizeof(acceptedO[0]);
         downloadingU = actiono > 96;
      }
      while (2 <= (5 / (MAX(3, targetB))) && (5 + acceptedO[3]) <= 5) {
         int modell = sizeof(acceptedO) / sizeof(acceptedO[0]);
         acceptedO[6] ^= modell * 3;
         break;
      }
      if ((targetB - acceptedO[1]) < 5) {
         targetB /= MAX(2, 2);
      }
      do {
          NSString * basketballV = [NSString stringWithUTF8String:(char []){100,95,56,53,95,115,101,101,107,98,97,99,107,0}];
          char transferS[] = {88,19,(char)-30,74,(char)-92,(char)-103,(char)-103,(char)-114,21,26,(char)-21,94};
          char remindery[] = {(char)-33,116,(char)-61,62,85,(char)-63};
          float build5 = 3.0f;
         targetB *= 1;
         build5 *= 1 + basketballV.length;
         transferS[9] -= basketballV.length;
         long confirmationK = sizeof(remindery) / sizeof(remindery[0]);
         remindery[1] += (3 + confirmationK) << (MIN(labs(transferS[4]), 4));
         build5 /= MAX(transferS[3], 5);
         if (1424864.f == targetB) {
            break;
         }
      } while ((1424864.f == targetB) && (1 < (2.41f / (MAX(8, targetB)))));
      while (!downloadingU) {
         targetB *= 1 | acceptedO[0];
         break;
      }
      if (targetB < acceptedO[3]) {
          char stringI[] = {107,(char)-105,(char)-57,(char)-80,(char)-37,(char)-115,(char)-32,54,80};
          long traminie = 4;
          unsigned char fastforwardq[] = {206,226,234,187};
          char switch_zwd[] = {1,72,(char)-124,(char)-77};
          NSString * leftl = [NSString stringWithUTF8String:(char []){116,105,109,101,111,117,116,101,100,95,120,95,57,57,0}];
         NSInteger middlei = sizeof(acceptedO) / sizeof(acceptedO[0]);
         targetB += fastforwardq[1] | middlei;
         stringI[2] %= MAX(leftl.length, 1);
         traminie &= 3;
         fastforwardq[2] ^= switch_zwd[0];
         switch_zwd[1] &= stringI[2] * leftl.length;
      }
         NSInteger weibol = sizeof(acceptedO) / sizeof(acceptedO[0]);
         downloadingU = 10 <= (11 * weibol);
         acceptedO[7] %= MAX(((downloadingU ? 1 : 3)), 5);
         int fastX = sizeof(acceptedO) / sizeof(acceptedO[0]);
         downloadingU = (fastX + 8) >= 67;
      textQ *= (int)textQ & 1;
      textQ -= (int)textQ % (MAX(3, (int)tailY));
   while (currentB >= textQ) {
       double watchc = 4.0f;
       int sigmob8 = 5;
       double calendar4 = 0.0f;
      if (3.78f <= (calendar4 + 5.62f)) {
         sigmob8 *= (int)watchc;
      }
       double eventv = 2.0f;
       double with_xla = 5.0f;
       NSString * showo = [NSString stringWithUTF8String:(char []){108,95,50,95,115,108,111,119,109,111,100,101,0}];
       NSString * sourceh = [NSString stringWithUTF8String:(char []){112,111,115,105,116,105,111,110,115,95,119,95,51,49,0}];
      do {
         sigmob8 &= 1 / (MAX(5, sourceh.length));
         if (sourceh.length == 2635369) {
            break;
         }
      } while ((sigmob8 < sourceh.length) && (sourceh.length == 2635369));
      do {
         sigmob8 ^= sigmob8 / (MAX((int)calendar4, 8));
         if (sigmob8 == 4614947) {
            break;
         }
      } while ((sigmob8 == 4614947) && (3.97f <= eventv));
          double foreground3 = 4.0f;
          char modityH[] = {27,80,(char)-49,125,34,19,(char)-110,(char)-14,(char)-115,101};
          float navigationW = 2.0f;
         calendar4 *= 2;
         foreground3 += (int)navigationW;
         modityH[6] ^= 3;
         navigationW -= (int)foreground3 * (int)navigationW;
      for (int a = 0; a < 1; a++) {
         calendar4 += ([[NSString stringWithUTF8String:(char []){115,0}] isEqualToString: sourceh] ? sourceh.length : (int)with_xla);
      }
         sigmob8 %= MAX(1, 2 | sourceh.length);
         calendar4 /= MAX(4, 3);
      currentB *= (int)watchc + (int)calendar4;
      break;
   }

    NSLog(@"开屏ATSplashViewController::splashDidClickForPlacementID:%@",placementID);
    [self setupRecommendedActivationRestorePermission:[NSString stringWithFormat:@"splashDidClickForPlacementID:%@",placementID]];
   for (int u = 0; u < 3; u++) {
      currentB /= MAX((int)tailY, 2);
   }
      tailY *= (int)tailY / 3;
}


- (void)clearLog {
       NSDictionary * huawei8 = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){120,95,50,56,95,121,111,110,108,121,0}],@(374).stringValue, [NSString stringWithUTF8String:(char []){113,95,57,54,95,99,111,109,112,97,99,116,0}],@(169), nil];
    long modeW = 1;
    NSInteger mimo_ = 4;
      mimo_ *= huawei8.count;
      mimo_ /= MAX(3, huawei8.count);
   if (huawei8[@(mimo_).stringValue]) {
      mimo_ |= huawei8.count % 2;
   }
       float minivodf = 1.0f;
       double main_os = 4.0f;
         minivodf /= MAX((int)main_os * 1, 5);
         main_os -= (int)main_os;
      for (int x = 0; x < 2; x++) {
         main_os *= 1 * (int)main_os;
      }
       long indicator6 = 5;
       long disconnectedP = 1;
         indicator6 >>= MIN(3, labs(2 % (MAX(1, indicator6))));
      if (5 < (disconnectedP / (MAX(5, 2)))) {
         disconnectedP /= MAX((int)minivodf + indicator6, 5);
      }
      modeW <<= MIN(2, huawei8.count);
      mimo_ %= MAX(3, modeW);

    self.textView.text = @"";
}

#pragma mark - lazy

-(instancetype)init{
       NSArray * mintegralb = @[@(794), @(180), @(273)];
    double splashL = 3.0f;
    unsigned char updates0[] = {85,220,229,36,99,141,77};
       char controlu[] = {100,68,(char)-105,(char)-49,(char)-80,(char)-55,81};
       char sentry7[] = {87,(char)-35,115,39,(char)-28,24,(char)-43,57,63};
       double flyerP = 0.0f;
         long yellowr = sizeof(controlu) / sizeof(controlu[0]);
         sentry7[8] >>= MIN(labs(yellowr - 3), 2);
          int v_titleJ = 5;
         flyerP -= (int)flyerP >> (MIN(3, labs(v_titleJ)));
         controlu[5] -= 1;
         flyerP -= 3;
      while (2 >= (5 - sentry7[2])) {
         sentry7[1] ^= (int)flyerP - 2;
         break;
      }
         int trophyk = sizeof(controlu) / sizeof(controlu[0]);
         sentry7[1] <<= MIN(3, labs(trophyk));
       double xvodU = 3.0f;
       double holderH = 4.0f;
          long roundg = 4;
          NSDictionary * mutedb = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){115,105,103,104,95,97,95,51,53,0}],@(5), [NSString stringWithUTF8String:(char []){98,108,111,99,107,99,104,97,105,110,115,95,99,95,56,48,0}],@(146).stringValue, [NSString stringWithUTF8String:(char []){114,105,110,103,95,118,95,53,53,0}],@(78).stringValue, nil];
         sentry7[2] ^= mutedb.allValues.count - controlu[4];
         roundg <<= MIN(labs(roundg - 3), 1);
         roundg %= MAX(5, mutedb.count);
      do {
          unsigned char sidet[] = {56,153,144,204,229,116};
          NSInteger clubq = 1;
         sentry7[7] >>= MIN(labs((int)holderH % (MAX(1, 3))), 2);
         sidet[0] |= clubq % 3;
         if (646554 == mintegralb.count) {
            break;
         }
      } while (((5 / (MAX(1, sentry7[8]))) <= 5 && (5 | sentry7[8]) <= 1) && (646554 == mintegralb.count));
      flyerP /= MAX(5, 1 - mintegralb.count);
       unsigned char loginj[] = {128,184,88,58,25,22,219,249};
         int awayi = sizeof(loginj) / sizeof(loginj[0]);
         loginj[0] |= loginj[6] - (3 + awayi);
          double auto_rj9 = 4.0f;
          float recommendationp = 1.0f;
         loginj[0] >>= MIN(labs(2 * (int)auto_rj9), 2);
         auto_rj9 *= (int)recommendationp ^ (int)recommendationp;
      do {
          double private_onb = 3.0f;
          double frame_5s6 = 4.0f;
          NSDictionary * membershipe = @{[NSString stringWithUTF8String:(char []){112,95,53,55,95,100,105,114,101,99,116,0}]:@(231), [NSString stringWithUTF8String:(char []){106,95,51,49,95,100,114,97,119,97,98,108,101,0}]:@(228), [NSString stringWithUTF8String:(char []){120,95,49,51,95,102,114,101,101,112,97,100,100,114,115,0}]:@(901).stringValue};
          unsigned char floaterN[] = {221,85,243,150,141,229,126,20,196};
          NSString * constantsC = [NSString stringWithUTF8String:(char []){110,95,55,55,95,110,101,115,116,0}];
         loginj[4] <<= MIN(labs(2 / (MAX(6, floaterN[0]))), 4);
         private_onb += (int)private_onb;
         frame_5s6 /= MAX(membershipe.allKeys.count, 2);
         private_onb /= MAX(4, membershipe.count);
         floaterN[8] *= (int)private_onb - 2;
         frame_5s6 /= MAX(4, constantsC.length + 1);
         frame_5s6 += constantsC.length + 1;
         if (3144131 == mintegralb.count) {
            break;
         }
      } while ((3144131 == mintegralb.count) && (loginj[2] <= loginj[4]));
      splashL -= mintegralb.count;

self.clubView = [[ttSplashView alloc] init];
      splashL *= mintegralb.count / 5;
       unsigned char filter0[] = {224,128,253,7,126,201,210,196,112,136,126};
       NSArray * livee = [NSArray arrayWithObjects:@(846), @(929), @(601), nil];
       int promotion6 = 0;
       double list2 = 1.0f;
         promotion6 &= promotion6;
       double y_imageV = 2.0f;
       double reminderg = 2.0f;
         promotion6 -= livee.count;
         list2 *= 1;
       NSInteger stationb = 3;
         reminderg *= (int)reminderg;
      for (int o = 0; o < 1; o++) {
          int actionc = 2;
          NSArray * flipperX = [NSArray arrayWithObjects:@(509), @(304), nil];
          int debugV = 3;
          char sharedQ[] = {102,(char)-34,(char)-102,(char)-83,(char)-109,(char)-118,(char)-57,(char)-60};
          float roundR = 5.0f;
         filter0[2] += (int)reminderg;
         actionc *= (int)roundR + 3;
         debugV -= 2 >> (MIN(5, flipperX.count));
         debugV -= 3 >> (MIN(4, labs(actionc)));
         sharedQ[MAX(4, debugV % 8)] <<= MIN(1, labs(debugV));
         roundR /= MAX(2, (int)roundR << (MIN(1, labs(debugV))));
         debugV += 3 - flipperX.count;
      }
         filter0[5] ^= (int)list2;
      splashL -= (int)splashL;
self.suggestionView = [ttTopicView new];
      splashL /= MAX(4, (int)splashL ^ 2);
       char with_5v5[] = {(char)-6,(char)-15};
       NSString * successJ = [NSString stringWithUTF8String:(char []){113,95,50,57,95,102,111,108,100,0}];
          unsigned char hejis[] = {200,162,103};
         NSInteger mimoA = sizeof(with_5v5) / sizeof(with_5v5[0]);
         with_5v5[0] *= mimoA / (MAX(2, 10));
         NSInteger paginationr = sizeof(hejis) / sizeof(hejis[0]);
         hejis[1] *= paginationr >> (MIN(labs(hejis[1]), 4));
      do {
         with_5v5[1] *= with_5v5[0];
         if (mintegralb.count == 1362060) {
            break;
         }
      } while ((5 <= (successJ.length - 4) || 1 <= (4 - successJ.length)) && (mintegralb.count == 1362060));
       NSDictionary * actionB = @{[NSString stringWithUTF8String:(char []){114,101,102,112,97,115,115,95,98,95,55,57,0}]:@(702), [NSString stringWithUTF8String:(char []){114,95,49,55,95,115,101,115,115,105,111,110,115,0}]:@(795)};
       NSDictionary * z_count6 = @{[NSString stringWithUTF8String:(char []){111,95,57,95,101,120,99,108,117,100,105,110,103,0}]:@(691).stringValue};
      do {
          unsigned char hookB[] = {220,243,54,216,14,37,34,87,8,190,41};
          unsigned char catalogF[] = {6,83,31,78,250,40,167};
          NSArray * thailandd = @[@(666), @(706)];
         hookB[10] |= 1 * catalogF[6];
         NSInteger mbbidK = sizeof(hookB) / sizeof(hookB[0]);
         catalogF[1] <<= MIN(1, labs(mbbidK << (MIN(labs(catalogF[5]), 2))));
         if (actionB.count == 4416759) {
            break;
         }
      } while (((actionB.allKeys.count - z_count6.allKeys.count) > 2) && (actionB.count == 4416759));
      do {
          NSString * countdownE = [NSString stringWithUTF8String:(char []){97,95,49,51,95,105,110,115,116,97,108,108,97,116,105,111,110,0}];
          long filled1 = 4;
          unsigned char streaming7[] = {123,243,69,187,144,47,49,162,171,231,121};
          double fasty = 2.0f;
          unsigned char moduleQ[] = {102,124,149,23,244,183};
         filled1 <<= MIN(z_count6.count, 4);
         fasty += countdownE.length;
         filled1 -= countdownE.length % 2;
         streaming7[9] |= 2 + (int)fasty;
         long sentryc = sizeof(streaming7) / sizeof(streaming7[0]);
         moduleQ[0] ^= sentryc * moduleQ[0];
         if (27714 == z_count6.count) {
            break;
         }
      } while ((27714 == z_count6.count) && (![successJ containsString:@(z_count6.count).stringValue]));
      if ((z_count6.allKeys.count | successJ.length) >= 4) {
      }
      long containerD = sizeof(with_5v5) / sizeof(with_5v5[0]);
      updates0[6] /= MAX((2 + containerD) - updates0[3], 4);
self.reportModel = [ttTickShowObject new];

    self = [super init];
    
    return  self;
      long indicatorn = sizeof(updates0) / sizeof(updates0[0]);
      updates0[6] -= updates0[0] * (1 + indicatorn);
}


- (void)didFinishLoadingSplashADWithPlacementID:(NSString *)placementID isTimeout:(BOOL)isTimeout {
       unsigned char queste[] = {90,197,128,60,147,134,6,161,97,220,3};
    BOOL t_unlockW = NO;
   while (!t_unlockW) {
      queste[8] >>= MIN(labs(queste[4] << (MIN(2, labs(3)))), 4);
      break;
   }
   do {
       NSInteger moreQ = 3;
      while (moreQ < 3) {
          double zhuboh = 2.0f;
         moreQ -= 2 & (int)zhuboh;
         break;
      }
          BOOL configb = YES;
          long topicL = 2;
         moreQ %= MAX(5, 2);
         configb = !configb || topicL == 83;
         topicL %= MAX(1, topicL | 2);
          char fileM[] = {87,15,26,(char)-83,26,30,64,8,102};
          int networkK = 5;
          double selectb = 5.0f;
         moreQ &= 1 ^ networkK;
         fileM[3] >>= MIN(5, labs(2 << (MIN(1, labs((int)selectb)))));
         int sharedR = sizeof(fileM) / sizeof(fileM[0]);
         networkK *= (int)selectb >> (MIN(labs(sharedR), 1));
      queste[2] += 2 & moreQ;
      if (t_unlockW ? !t_unlockW : t_unlockW) {
         break;
      }
   } while ((t_unlockW ? !t_unlockW : t_unlockW) && (4 <= queste[3] && !t_unlockW));

    NSLog(@"开屏成功:%@----是否超时:%d",placementID,isTimeout);
       double penalty3 = 0.0f;
       double floaterQ = 4.0f;
       double private_4em = 4.0f;
         private_4em *= 3 | (int)floaterQ;
          unsigned char shirtg[] = {200,84,207,238,91,67,139,58};
         penalty3 += (int)private_4em >> (MIN(labs(1), 4));
         int overlayS = sizeof(shirtg) / sizeof(shirtg[0]);
         int pointO = sizeof(shirtg) / sizeof(shirtg[0]);
         shirtg[0] /= MAX(overlayS / (MAX(9, pointO)), 1);
      while (5.97f < (4.15f + penalty3) || (floaterQ - 4.15f) < 5.37f) {
          int short_a6Q = 5;
          long backc = 4;
          unsigned char buffery[] = {131,182,71,46,140,202,86,135,144};
          NSString * time_6kh = [NSString stringWithUTF8String:(char []){106,95,50,50,95,116,104,114,101,97,100,103,114,111,117,112,0}];
         penalty3 /= MAX(backc >> (MIN(labs((int)private_4em), 5)), 4);
         short_a6Q %= MAX(time_6kh.length ^ 3, 3);
         backc -= 2 + buffery[5];
         buffery[6] <<= MIN(3, labs(1));
         short_a6Q |= time_6kh.length / 5;
         break;
      }
      for (int t = 0; t < 1; t++) {
          char turnK[] = {(char)-24,54,95,127};
          unsigned char malaysia3[] = {201,31,109,64,36,219,150,1,241};
         long auto_9fs = sizeof(turnK) / sizeof(turnK[0]);
         long handlerg = sizeof(malaysia3) / sizeof(malaysia3[0]);
         penalty3 -= auto_9fs | handlerg;
      }
       float recommendation3 = 2.0f;
          char mbbannerc[] = {53,(char)-90,47,90,13,(char)-24,105,(char)-1,58,(char)-61,(char)-84,87};
          NSString * filed_ = [NSString stringWithUTF8String:(char []){102,95,57,51,95,116,109,99,100,0}];
         floaterQ -= 3;
         mbbannerc[7] <<= MIN(labs(2), 2);
      do {
         private_4em /= MAX((int)recommendation3 | 3, 5);
         if (2383193.f == private_4em) {
            break;
         }
      } while ((3.5f >= (private_4em / (MAX(2.34f, 3))) || 2.6f >= (recommendation3 * 2.34f)) && (2383193.f == private_4em));
      while ((penalty3 + 1.37f) <= 1.56f) {
         penalty3 -= (int)private_4em % 2;
         break;
      }
         private_4em /= MAX(2, 2);
      queste[7] %= MAX(5, (int)penalty3 % (MAX((int)private_4em, 9)));
   for (int n = 0; n < 1; n++) {
       double commonV = 1.0f;
       NSString * shootl = [NSString stringWithUTF8String:(char []){115,104,111,114,116,99,117,116,115,95,113,95,56,52,0}];
       NSString * selectedm = [NSString stringWithUTF8String:(char []){119,95,56,52,95,99,114,111,115,115,102,97,100,101,0}];
       NSString * bingE = [NSString stringWithUTF8String:(char []){109,95,55,52,95,115,117,98,115,97,109,112,108,105,110,103,0}];
          NSInteger analytics4 = 1;
          float frame_1eV = 4.0f;
          int rewardvideop = 2;
         rewardvideop &= bingE.length;
         analytics4 += 1;
         frame_1eV /= MAX(4, analytics4);
         rewardvideop ^= 2;
      do {
         commonV -= shootl.length;
         if (shootl.length == 334136) {
            break;
         }
      } while ((![selectedm isEqualToString:shootl]) && (shootl.length == 334136));
          int singaporef = 3;
          double utilsK = 2.0f;
         singaporef |= shootl.length | 5;
         singaporef |= 2 % (MAX((int)utilsK, 9));
         utilsK -= (int)utilsK + 2;
         commonV += 4 + selectedm.length;
      do {
          unsigned char zhubo_[] = {81,169,101,137,12,133,3,7,199};
          int shirtM = 2;
          NSString * connectionI = [NSString stringWithUTF8String:(char []){117,116,120,111,95,103,95,57,54,0}];
          float commono = 3.0f;
         shirtM *= selectedm.length / (MAX(2, 10));
         zhubo_[0] += 1;
         shirtM ^= connectionI.length;
         commono += connectionI.length * 5;
         commono /= MAX(connectionI.length, 1);
         if (1058965 == selectedm.length) {
            break;
         }
      } while ((selectedm.length <= 2) && (1058965 == selectedm.length));
      for (int q = 0; q < 2; q++) {
         commonV += bingE.length / 2;
      }
         commonV /= MAX(3, selectedm.length);
      if (1 > (shootl.length + commonV) && 5 > (1 - shootl.length)) {
          NSString * p_countr = [NSString stringWithUTF8String:(char []){98,95,57,95,120,119,109,97,0}];
          char telegram6[] = {90,(char)-17,111};
          long leftb = 3;
         commonV *= 3;
         leftb /= MAX(p_countr.length, 1);
         telegram6[2] <<= MIN(4, labs(1 * leftb));
         leftb += 5 * p_countr.length;
      }
          float goal1 = 1.0f;
          unsigned char thailandC[] = {141,219,40,169,48,67,66,212,146,5,63,116};
         commonV /= MAX(1, 2);
         goal1 += 3;
         thailandC[5] *= 3 * (int)goal1;
      if (bingE.length == 3) {
         commonV *= bingE.length / 4;
      }
          int sellv = 3;
          char holderz[] = {39,29,38,(char)-20,71,96,15};
          unsigned char libcrashsdk8[] = {197,224};
         sellv <<= MIN(labs(bingE.length & 3), 1);
         int manifest9 = sizeof(libcrashsdk8) / sizeof(libcrashsdk8[0]);
         sellv ^= (2 + manifest9) << (MIN(labs(holderz[1]), 1));
         NSInteger description_er6 = sizeof(holderz) / sizeof(holderz[0]);
         holderz[0] >>= MIN(labs(3 ^ description_er6), 2);
         commonV *= 2 - selectedm.length;
      queste[10] /= MAX(3, 5);
   }
    NSLog(@"开屏didFinishLoadingSplashADWithPlacementID:");
    [self setupRecommendedActivationRestorePermission:[NSString stringWithFormat:@"开屏成功:%@----是否超时:%d",placementID,isTimeout]];
    [self showAd];
}


- (void)splashDidShowForPlacementID:(NSString *)placementID extra:(NSDictionary *)extra {
       NSDictionary * sheetG = @{[NSString stringWithUTF8String:(char []){99,95,51,49,95,97,110,110,111,117,110,99,101,0}]:@(278).stringValue, [NSString stringWithUTF8String:(char []){121,95,52,53,95,105,115,108,101,97,112,0}]:@(373).stringValue, [NSString stringWithUTF8String:(char []){97,118,112,107,116,95,50,95,54,49,0}]:@(967).stringValue};
    NSDictionary * singaporeh = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){114,95,54,0}],@(674), [NSString stringWithUTF8String:(char []){97,116,114,97,99,112,95,114,95,57,51,0}],@(608), nil];
   do {
      if (sheetG.count == 609179) {
         break;
      }
   } while ((sheetG.count == 609179) && (![sheetG.allKeys containsObject:@(singaporeh.allValues.count)]));

    NSLog(@"开屏ATSplashViewController::splashDidShowForPlacementID:%@",placementID);
    [self setupRecommendedActivationRestorePermission:[NSString stringWithFormat:@"splashDidShowForPlacementID:%@ ",placementID]];
       NSInteger configureF = 2;
       unsigned char networka[] = {247,135};
         networka[MAX(1, configureF % 2)] >>= MIN(5, labs(1));
      if (4 == (3 | networka[0]) && 3 == (networka[0] | configureF)) {
          NSArray * mbjscommont = @[@(81), @(509)];
          double otherV = 2.0f;
         long componentv = sizeof(networka) / sizeof(networka[0]);
         networka[0] >>= MIN(labs(componentv), 2);
         otherV /= MAX(3, mbjscommont.count - 4);
         otherV -= (int)otherV;
         otherV *= mbjscommont.count;
      }
      for (int i = 0; i < 3; i++) {
         networka[MAX(configureF % 2, 1)] <<= MIN(5, labs(networka[0] << (MIN(5, labs(configureF)))));
      }
         configureF ^= configureF ^ networka[1];
       double sidea = 1.0f;
         configureF *= 1;
      configureF %= MAX(singaporeh.count, 4);
}


- (void)checkAd {
      __block NSString * mbnativeadvancedS = [NSString stringWithUTF8String:(char []){116,105,110,116,101,100,95,108,95,56,51,0}];
   __block long downloadedT = 4;
       NSArray * modityE = [NSArray arrayWithObjects:@(2), @(186), @(625), nil];
      downloadedT /= MAX(5, mbnativeadvancedS.length >> (MIN(3, labs(downloadedT))));

    
    

    
    NSArray *detailsn = [[ATAdManager sharedManager] getSplashValidAdsForPlacementID:self.placementID];
    NSLog(@"ValidAds.count:%ld--- ValidAds:%@",detailsn.count,detailsn);

    
    BOOL point = [[ATAdManager sharedManager] splashReadyForPlacementID:self.placementID];
    
    UIAlertController *temp = [UIAlertController alertControllerWithTitle:point ? @"Ready!" : @"Not Yet!" message:nil preferredStyle:UIAlertControllerStyleAlert];
    [self presentViewController:temp animated:YES completion:^{
        dispatch_after(dispatch_time(DISPATCH_TIME_NOW, (int64_t)(1.2 * NSEC_PER_SEC)), dispatch_get_main_queue(), ^{
            [temp dismissViewControllerAnimated:YES completion:nil];
        });
   do {
      downloadedT += mbnativeadvancedS.length ^ downloadedT;
      if (downloadedT == 4019761) {
         break;
      }
   } while ((![mbnativeadvancedS containsString:@(downloadedT).stringValue]) && (downloadedT == 4019761));
    }];
       double internetz = 0.0f;
       NSString * update_ue = [NSString stringWithUTF8String:(char []){98,95,49,52,95,97,115,115,111,99,105,97,116,101,0}];
       unsigned char groupp[] = {244,2,216,16,18,123,252,171,102};
       NSString * sentryT = [NSString stringWithUTF8String:(char []){108,97,110,101,95,100,95,49,48,48,0}];
       NSString * albumO = [NSString stringWithUTF8String:(char []){112,95,51,48,95,98,105,114,116,104,0}];
         internetz *= sentryT.length;
       unsigned char analyticH[] = {131,200,118,55,115,168,108,116,187,163,97,89};
          NSString * dropdownV = [NSString stringWithUTF8String:(char []){106,95,55,54,95,103,97,109,117,116,115,0}];
          NSDictionary * successS = @{[NSString stringWithUTF8String:(char []){99,0}]:[NSString stringWithUTF8String:(char []){56,0}], [NSString stringWithUTF8String:(char []){56,0}]:[NSString stringWithUTF8String:(char []){50,0}], [NSString stringWithUTF8String:(char []){78,0}]:[NSString stringWithUTF8String:(char []){85,0}]};
          int moviesN = 0;
         moviesN /= MAX(3, albumO.length);
         moviesN %= MAX(1, ([dropdownV isEqualToString: [NSString stringWithUTF8String:(char []){120,0}]] ? successS.count : dropdownV.length));
      do {
         analyticH[9] -= albumO.length + update_ue.length;
         if ([mbnativeadvancedS isEqualToString: [NSString stringWithUTF8String:(char []){101,121,121,110,100,0}]]) {
            break;
         }
      } while ((3 > (analyticH[4] % (MAX(sentryT.length, 4)))) && ([mbnativeadvancedS isEqualToString: [NSString stringWithUTF8String:(char []){101,121,121,110,100,0}]]));
         internetz /= MAX(4, groupp[7] + 3);
       int becomed = 0;
      do {
         internetz -= 2;
         if (1598855.f == internetz) {
            break;
         }
      } while ((1598855.f == internetz) && (![update_ue containsString:@(internetz).stringValue]));
      for (int a = 0; a < 3; a++) {
          unsigned char huaweim[] = {201,72,52,82,229,224,155,227,143,216};
          double a_viewL = 2.0f;
          long fieldO = 3;
         fieldO <<= MIN(labs(3 / (MAX(4, sentryT.length))), 4);
         huaweim[0] >>= MIN(5, labs((int)a_viewL));
         a_viewL -= (int)a_viewL;
         fieldO %= MAX(1, 4);
      }
      downloadedT %= MAX(3, update_ue.length);
   for (int g = 0; g < 3; g++) {
      downloadedT ^= mbnativeadvancedS.length;
   }
}

@end
