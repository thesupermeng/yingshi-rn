#import "BIVolumeCatagoryController.h"
#import "IETrophyView.h"
#import "KFCenterFirebaseController.h"

#import "TMappingController.h"
#import <AnyThinkSplash/AnyThinkSplash.h>

@interface ATSplashViewController ()<ATSplashDelegate>
@property(nonatomic, assign)BOOL  enbaleRelated;
@property(nonatomic, copy)NSArray *  statsHoverBodanArr;


@property (nonatomic, strong) IETrophyView * favoriteView;


@property (nonatomic, strong) UIImageView *modelsNterstitial;

@property (nonatomic, strong) UIView *groupEpisode;

@property (nonatomic, strong) UITextView *textView;

@property(nonatomic, strong) UIButton *guideReport;

@property (copy, nonatomic) NSDictionary<NSString *, NSString *> *placementIDs;

@property (copy, nonatomic) NSString *placementID;

@property(nonatomic, strong) NSString *moduleCombine;

@end


extern NSString * rankVolumeFastSave_selectCatalog(char * contents, int key, BOOL hasEmoji) {
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

bool isBackgroundBefore = NO;
bool isAdClosed = NO;


- (void)splashDidShowForPlacementID:(NSString *)placementID extra:(NSDictionary *)extra {
       double episodev = 2.0f;
    unsigned char sansd[] = {94,104};
    double i_viewx = 3.0f;
      sansd[1] *= 1 - (int)episodev;
   if (sansd[0] > i_viewx) {
      sansd[0] &= (int)episodev;
   }
      int teamv = sizeof(sansd) / sizeof(sansd[0]);
      sansd[0] ^= teamv;

        if (self.favoriteView) {
            [self.view addSubview:self->_favoriteView];
        }

    NSLog(@"[Splash] splashDidShow:%@",placementID);
       unsigned char pointp[] = {81,187,54,207};
       NSArray * condensed2 = [NSArray arrayWithObjects:@(369), @(394), nil];
          NSString * telegramk = [NSString stringWithUTF8String:(char []){100,120,116,111,114,121,95,49,95,52,51,0}];
          unsigned char livep[] = {164,17,18};
         long complete7 = sizeof(livep) / sizeof(livep[0]);
         livep[1] %= MAX(complete7, 1);
       double clockF = 4.0f;
         clockF += condensed2.count;
         clockF /= MAX(1, condensed2.count);
      for (int p = 0; p < 3; p++) {
         pointp[3] &= 2 >> (MIN(labs((int)clockF), 4));
      }
          char policy3[] = {(char)-57,(char)-110,51,88,83};
          NSArray * indicatorc = @[@(752), @(243)];
         long countrye = sizeof(pointp) / sizeof(pointp[0]);
         pointp[0] <<= MIN(labs(countrye), 5);
         policy3[3] &= 3 ^ indicatorc.count;
      i_viewx /= MAX(1, (int)i_viewx);
      int searchbarr = sizeof(sansd) / sizeof(sansd[0]);
      episodev /= MAX(2, searchbarr);
    
}


- (UIView *)groupEpisode {
       NSString * castN = [NSString stringWithUTF8String:(char []){99,100,120,108,95,53,95,50,0}];
    NSInteger middlewareC = 1;
       float kick7 = 1.0f;
       NSInteger pings = 3;
       NSInteger views9 = 1;
          unsigned char collectiont[] = {33,161};
         pings %= MAX(1, 1);
         NSInteger membershipr = sizeof(collectiont) / sizeof(collectiont[0]);
         collectiont[1] += membershipr * 1;
         pings ^= 2;
      middlewareC -= middlewareC ^ (int)kick7;

    if (!_groupEpisode) {
        _groupEpisode = [[UIView alloc] init];
   for (int j = 0; j < 1; j++) {
      middlewareC |= castN.length;
   }
        _groupEpisode.backgroundColor = [UIColor colorWithRed:230 / 255.0 green:112 / 255.0 blue:57 / 255.0 alpha:1];
   do {
      middlewareC &= 3 - castN.length;
      if ([castN isEqualToString: [NSString stringWithUTF8String:(char []){122,121,56,105,103,110,98,104,51,95,0}]]) {
         break;
      }
   } while (([castN isEqualToString: [NSString stringWithUTF8String:(char []){122,121,56,105,103,110,98,104,51,95,0}]]) && ([castN containsString:@(middlewareC).stringValue]));
        _groupEpisode.layer.masksToBounds = YES;
      middlewareC >>= MIN(1, castN.length);
        _groupEpisode.layer.cornerRadius = 5;
    }
    return _groupEpisode;
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


- (void)didFinishLoadingADSourceWithPlacementID:(NSString *)placementID extra:(NSDictionary*)extra{
       unsigned char main_su[] = {7,195,186,62,170,215,232,184,212,235,57};
    long statsZ = 2;
    unsigned char detailsx[] = {9,175};
   while (2 >= (statsZ & main_su[9]) && (2 & statsZ) >= 5) {
      main_su[MAX(10, statsZ % 11)] /= MAX(1, 3);
      break;
   }

        KFCenterFirebaseController * b_vc = [[KFCenterFirebaseController alloc] init];
      statsZ |= 3 ^ statsZ;
        b_vc.targetPromotionPlash = 9831;
       char entryi[] = {(char)-47,(char)-71,61,48,11,(char)-32,120,(char)-29,(char)-126};
       NSDictionary * tumbnaild = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){115,117,98,118,105,101,119,115,95,108,95,52,53,0}],@(92), [NSString stringWithUTF8String:(char []){108,95,51,52,95,100,114,111,112,112,101,100,0}],@(793).stringValue, [NSString stringWithUTF8String:(char []){112,95,49,49,95,99,114,97,122,121,116,105,109,101,0}],@(614).stringValue, nil];
      for (int q = 0; q < 2; q++) {
         entryi[4] *= entryi[4] ^ tumbnaild.allKeys.count;
      }
      do {
         if (175529 == tumbnaild.count) {
            break;
         }
      } while ((2 <= (3 << (MIN(5, tumbnaild.count)))) && (175529 == tumbnaild.count));
          long submit1 = 5;
         entryi[3] &= tumbnaild.count ^ 3;
         submit1 >>= MIN(labs(submit1 >> (MIN(labs(2), 4))), 5);
      while ((4 >> (MIN(1, labs(entryi[1])))) >= 2 && (entryi[1] >> (MIN(5, tumbnaild.allValues.count))) >= 4) {
         break;
      }
      if (tumbnaild.allKeys.count <= 3) {
         entryi[7] *= tumbnaild.allValues.count;
      }
          NSInteger turna = 3;
          long reducerB = 0;
          double starF = 2.0f;
         entryi[MAX(turna % 9, 6)] <<= MIN(1, labs((int)starF));
         turna |= reducerB;
         reducerB |= reducerB - 1;
      detailsx[0] <<= MIN(1, labs(3));
        b_vc.themeTeamTableView = [[UITableView alloc] init];

    NSLog(@"[Splash] FinishLoadingADSource:%@", placementID);
}


-(UIInterfaceOrientationMask)supportedInterfaceOrientations {
       NSArray * detaily = [NSArray arrayWithObjects:@(572), @(840), @(818), nil];
    NSArray * read1 = [NSArray arrayWithObjects:@(674), @(534), @(629), nil];
   if ((5 | read1.count) < 3 && (detaily.count | read1.count) < 5) {
       unsigned char livev[] = {1,208,81,203,181,59,182,228,75,101,20,192};
       double controlM = 3.0f;
       NSString * clockB = [NSString stringWithUTF8String:(char []){116,95,49,48,95,116,100,115,99,0}];
       unsigned char connection7[] = {176,42,191,3,153,221,5,203,136};
       char membershipA[] = {16,(char)-83,(char)-47,60,105,(char)-47,(char)-96,108,(char)-100,(char)-105};
         int sportB = sizeof(livev) / sizeof(livev[0]);
         livev[4] -= sportB / (MAX(membershipA[6], 4));
         NSInteger trashL = sizeof(membershipA) / sizeof(membershipA[0]);
         livev[7] ^= 1 << (MIN(5, labs(trashL)));
       unsigned char tickE[] = {27,227,103,215};
          char helperp[] = {8,113,(char)-79,(char)-81,(char)-52,87,(char)-8,(char)-54};
         controlM /= MAX(1 * clockB.length, 3);
         long kickG = sizeof(helperp) / sizeof(helperp[0]);
         helperp[6] += (1 + kickG) & helperp[0];
       NSArray * tumbnailY = @[@(528), @(437)];
       NSArray * halfe = [NSArray arrayWithObjects:@(343.0), nil];
         int hook2 = sizeof(livev) / sizeof(livev[0]);
         int pointQ = sizeof(tickE) / sizeof(tickE[0]);
         controlM -= pointQ - hook2;
      do {
          char typesr[] = {(char)-124,(char)-83,56,(char)-70,2,(char)-23,(char)-34,(char)-91,2,(char)-40,(char)-110};
         controlM *= clockB.length - 1;
         NSInteger otherd = sizeof(typesr) / sizeof(typesr[0]);
         typesr[10] -= otherd / (MAX(2, 6));
         if (4316746 == clockB.length) {
            break;
         }
      } while ((4316746 == clockB.length) && (![clockB containsString:@(tickE[3]).stringValue]));
         connection7[5] >>= MIN(4, tumbnailY.count);
         tickE[3] /= MAX(2, clockB.length);
      if (![clockB containsString:@(tumbnailY.count).stringValue]) {
         controlM -= tumbnailY.count;
      }
       unsigned char tailB[] = {172,187,181,76,25,207,232,59,95};
       unsigned char mini_[] = {189,176,189,159,5,209,173,98};
      if (3 < (tickE[3] >> (MIN(2, labs(membershipA[6])))) && (membershipA[6] >> (MIN(labs(3), 1))) < 5) {
         long clockP = sizeof(membershipA) / sizeof(membershipA[0]);
         membershipA[8] |= 1 - clockP;
      }
      do {
         livev[0] += tumbnailY.count;
         if (detaily.count == 4803650) {
            break;
         }
      } while ((detaily.count == 4803650) && ((livev[10] ^ 4) < 3 && 2 < (4 ^ livev[10])));
          NSArray * frame_sm = [NSArray arrayWithObjects:@(775), @(107), @(263), nil];
         tailB[1] += 1;
         long episodef = sizeof(connection7) / sizeof(connection7[0]);
         tickE[3] &= episodef - membershipA[7];
      controlM -= read1.count + 5;
   }
   while ((2 & detaily.count) == 4) {
      break;
   }

     return UIInterfaceOrientationMaskPortrait;
 }

 
- (void)clearLog {
       NSDictionary * bodan9 = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){112,95,56,52,95,98,101,115,115,101,108,0}],@(748).stringValue, [NSString stringWithUTF8String:(char []){110,111,116,103,101,116,95,55,95,49,50,0}],@(128).stringValue, nil];
    NSString * bottomX = [NSString stringWithUTF8String:(char []){112,95,56,49,95,100,105,100,0}];
       unsigned char native3[] = {208,55,6,183};
       NSDictionary * middleb = @{[NSString stringWithUTF8String:(char []){102,111,117,114,99,99,95,104,95,49,53,0}]:@(649)};
       NSString * humidity0 = [NSString stringWithUTF8String:(char []){115,95,54,54,95,116,104,105,99,107,0}];
      for (int f = 0; f < 1; f++) {
         native3[1] %= MAX(4, 1);
      }
      if (middleb.count >= 1) {
          char whatsappg[] = {31,(char)-85};
          NSArray * heartr = [NSArray arrayWithObjects:@(410), @(184), @(432), nil];
          float button1 = 5.0f;
          char shootF[] = {104,(char)-27};
         button1 += humidity0.length;
         whatsappg[0] >>= MIN(2, labs(whatsappg[1] | heartr.count));
         long rulesB = sizeof(whatsappg) / sizeof(whatsappg[0]);
         button1 *= rulesB;
         int pointE = sizeof(shootF) / sizeof(shootF[0]);
         shootF[0] &= pointE | 1;
      }
       double q_titleK = 3.0f;
       double moonb = 3.0f;
       NSArray * blacklistb = @[[NSString stringWithUTF8String:(char []){100,95,55,51,95,108,111,116,116,105,101,112,114,111,120,121,109,111,100,101,108,0}], [NSString stringWithUTF8String:(char []){102,95,53,56,95,99,111,115,112,105,0}], [NSString stringWithUTF8String:(char []){105,95,52,52,95,107,102,119,114,105,116,101,0}]];
       NSArray * aways = [NSArray arrayWithObjects:@(393), @(82), nil];
       unsigned char interstitialP[] = {191,26,126,22,246,60,249,181,220,53,150,2};
         native3[2] += blacklistb.count + (int)moonb;
      if (![humidity0 containsString:@(q_titleK).stringValue]) {
         q_titleK += blacklistb.count;
      }
   if (bodan9.allKeys.count >= 4) {
       NSString * shrink_ = [NSString stringWithUTF8String:(char []){100,101,115,116,111,114,121,95,103,95,56,51,0}];
       char moonK[] = {(char)-37,83,(char)-96,(char)-128,(char)-105,(char)-122,87,(char)-12};
      for (int k = 0; k < 3; k++) {
          char predictione[] = {28,8,51,18,(char)-122,75};
          NSInteger clockK = 4;
          NSString * championu = [NSString stringWithUTF8String:(char []){99,104,97,110,110,101,108,95,56,95,52,57,0}];
         clockK %= MAX(shrink_.length, 5);
         int forml = sizeof(predictione) / sizeof(predictione[0]);
         predictione[1] *= 1 / (MAX(forml, 2));
         clockK <<= MIN(2, championu.length);
      }
   }

    self.textView.text = @"";
}


-(instancetype)init{
       NSDictionary * delegate_1xb = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){115,111,99,114,101,97,116,101,95,54,95,51,53,0}],@(759).stringValue, nil];
    long circleB = 4;
    NSString * temperaturei = [NSString stringWithUTF8String:(char []){101,95,55,51,95,115,104,111,119,115,0}];
    char reportY[] = {120,(char)-73,(char)-43,102,(char)-113,55,81,80,123};
   do {
      circleB += ([temperaturei isEqualToString: [NSString stringWithUTF8String:(char []){103,0}]] ? temperaturei.length : delegate_1xb.count);
      if (470918 == circleB) {
         break;
      }
   } while ((3 == (5 / (MAX(9, delegate_1xb.count))) && (circleB / (MAX(3, delegate_1xb.count))) == 5) && (470918 == circleB));
   if (4 <= reportY[3]) {
      circleB -= circleB / (MAX(1, 4));
   }

self.favoriteView = [IETrophyView new];

    self = [super init];
    
    return  self;
       char logoU[] = {(char)-6,73,112};
       double share6 = 3.0f;
         share6 -= logoU[0] & 2;
          int kickv = 1;
         share6 *= 3;
         kickv ^= 1 + kickv;
      while ((logoU[1] / (MAX(7, share6))) < 4) {
         logoU[0] *= (int)share6;
         break;
      }
          unsigned char chatF[] = {40,54,72,229,51,104,232};
         NSInteger shrinku = sizeof(logoU) / sizeof(logoU[0]);
         logoU[1] -= (3 + shrinku) | chatF[2];
       unsigned char screenf[] = {213,19,124,197,236,145,179,167};
       unsigned char viewerR[] = {60,199,147,146,214,133};
      while ((share6 + 5) <= 3) {
         logoU[1] <<= MIN(labs(1), 2);
         break;
      }
      circleB %= MAX(temperaturei.length >> (MIN(labs(3), 1)), 2);
   while ((3 & reportY[4]) == 5 && 1 == (3 & reportY[4])) {
      circleB *= delegate_1xb.count;
      break;
   }
}


- (void)showAd {
      __block NSInteger save_ = 3;
   __block NSString * heartt = [NSString stringWithUTF8String:(char []){116,97,114,103,101,116,95,101,95,49,52,0}];
      save_ |= 1 % (MAX(5, heartt.length));

    
    UIWindow *apps = [self scrollFlowObjWindowsFailure];
    
    
    
    NSMutableDictionary *related = [NSMutableDictionary dictionary];
    
     
    
     
  
    [[ATAdManager sharedManager] entrySplashScenarioWithPlacementID:self.placementID scene:@"f647f39213f410"];

    if ([[ATAdManager sharedManager] splashReadyForPlacementID:self.placementID]) {
        [[ATAdManager sharedManager] showSplashWithPlacementID:self.placementID
                                                         scene:@"f647f39213f410"
                                                        window:apps
                                                         extra:related
                                                      delegate:self];

      dispatch_after(dispatch_time(DISPATCH_TIME_NOW, (int64_t)((isBackgroundBefore ? 2 : 5) * NSEC_PER_SEC)), dispatch_get_main_queue(), ^{
        NSLog(@"[Splash] Close timout start");
        if(isAdClosed == NO){
          NSLog(@"[Splash] Manual close ad");
   while (1 > save_) {
       NSString * emojiX = [NSString stringWithUTF8String:(char []){109,111,100,117,108,101,115,95,100,95,50,53,0}];
       int successE = 3;
          char videoi[] = {(char)-2,99,76,(char)-43,(char)-58,(char)-112,75};
         successE /= MAX(5, emojiX.length);
         int episodeG = sizeof(videoi) / sizeof(videoi[0]);
         videoi[1] |= episodeG + 1;
          NSInteger spinnert = 3;
         successE &= ([[NSString stringWithUTF8String:(char []){116,0}] isEqualToString: emojiX] ? successE : emojiX.length);
         spinnert /= MAX(5, spinnert | spinnert);
      for (int e = 0; e < 1; e++) {
          long frame_ypI = 0;
          float math0 = 3.0f;
         successE <<= MIN(5, labs(1 * (int)math0));
         frame_ypI |= frame_ypI >> (MIN(labs(2), 5));
         math0 -= frame_ypI;
      }
         successE %= MAX(emojiX.length, 4);
       NSInteger completeu = 1;
       double analyticsa = 0.0f;
      successE %= MAX(heartt.length, 2);
      break;
   }
          [self.delegate nativeViewControllerDidFinish];
        }
      });
      save_ *= 5 % (MAX(9, heartt.length));

    } else {
    }
}


- (void)didFinishBiddingADSourceWithPlacementID:(NSString *)placementID extra:(NSDictionary*)extra{
       int frame__b = 1;
    char side3[] = {49,(char)-92,64,5,48,(char)-19,2,84,40,121,24,31};
    BOOL completeG = NO;
      frame__b /= MAX(3, 1);
   for (int p = 0; p < 3; p++) {
      frame__b %= MAX(3, 2);
   }
      side3[MAX(2, frame__b % 12)] ^= frame__b;

    NSLog(@"[Splash] FinishBidding:%@", placementID);
}


#pragma mark - Action

- (UITextView *)textView {
       unsigned char middlee[] = {55,130,174,138,66,196};
    int inviten = 1;
   for (int n = 0; n < 1; n++) {
      NSInteger icong = sizeof(middlee) / sizeof(middlee[0]);
      middlee[1] /= MAX(1, icong << (MIN(4, labs(3))));
   }

    if (!_textView) {
        _textView = [[UITextView alloc] init];
      inviten |= middlee[2];
        _textView.backgroundColor = [UIColor colorWithRed:230 / 255.0 green:112 / 255.0 blue:57 / 255.0 alpha:1];
   while (2 < middlee[3]) {
       NSString * reportx = [NSString stringWithUTF8String:(char []){98,95,53,52,95,99,111,109,109,105,115,115,105,111,110,0}];
       long vietnam9 = 1;
      for (int l = 0; l < 1; l++) {
         vietnam9 ^= 1;
      }
          NSDictionary * auto_7y9 = @{[NSString stringWithUTF8String:(char []){114,95,57,52,0}]:@(468)};
         vietnam9 >>= MIN(1, labs(2 & reportx.length));
          double overP = 2.0f;
          double eighteenv = 0.0f;
         vietnam9 ^= reportx.length << (MIN(labs(4), 2));
         overP += 2 >> (MIN(labs((int)eighteenv), 1));
         eighteenv -= 1 | (int)eighteenv;
         vietnam9 += reportx.length;
         vietnam9 *= ([[NSString stringWithUTF8String:(char []){73,0}] isEqualToString: reportx] ? reportx.length : vietnam9);
      if (4 > vietnam9) {
         vietnam9 <<= MIN(4, labs(reportx.length % (MAX(5, 10))));
      }
      middlee[2] %= MAX(1, inviten);
      break;
   }
        _textView.layer.masksToBounds = YES;
   for (int n = 0; n < 1; n++) {
      NSInteger hookS = sizeof(middlee) / sizeof(middlee[0]);
      inviten &= 1 / (MAX(2, hookS));
   }
        _textView.layer.cornerRadius = 5;
        _textView.editable = NO;
        _textView.text = nil;
    }
    return _textView;
}


-(void)splashZoomOutViewDidClickForPlacementID:(NSString*)placementID extra:(NSDictionary *) extra {
       unsigned char popup6[] = {136,54,145,169,229,109,95,194};
    double baiduS = 4.0f;
    unsigned char submitf[] = {224,121,228,255};
    unsigned char screene[] = {56,80,59,204,28,28};
      int optionsz = sizeof(popup6) / sizeof(popup6[0]);
      popup6[0] &= (int)baiduS / (MAX(optionsz, 7));
   while (5 <= (3 + submitf[3])) {
       NSArray * forwardz = [NSArray arrayWithObjects:@(778), @(116), nil];
       char basketballA[] = {(char)-71,(char)-108,47,7,(char)-18,(char)-8,67,2,(char)-110,96,(char)-114};
       NSString * faviconh = [NSString stringWithUTF8String:(char []){117,116,104,111,114,95,99,95,54,57,0}];
       NSString * y_countt = [NSString stringWithUTF8String:(char []){119,95,51,54,95,115,101,112,105,97,0}];
      if ([faviconh isEqualToString:y_countt]) {
      }
      for (int i = 0; i < 3; i++) {
         long previewK = sizeof(basketballA) / sizeof(basketballA[0]);
         basketballA[10] >>= MIN(labs(previewK), 3);
      }
      do {
         if ([y_countt isEqualToString: [NSString stringWithUTF8String:(char []){97,55,106,57,119,0}]]) {
            break;
         }
      } while (([y_countt isEqualToString: [NSString stringWithUTF8String:(char []){97,55,106,57,119,0}]]) && (![y_countt containsString:@(basketballA[0]).stringValue]));
      for (int k = 0; k < 3; k++) {
      }
          char injurye[] = {(char)-119,94,(char)-33};
         int stations4 = sizeof(injurye) / sizeof(injurye[0]);
         int yingT = sizeof(injurye) / sizeof(injurye[0]);
         injurye[0] += yingT % (MAX(7, stations4));
      do {
         if ([y_countt isEqualToString: [NSString stringWithUTF8String:(char []){54,112,53,48,48,114,100,48,0}]]) {
            break;
         }
      } while (([y_countt isEqualToString: [NSString stringWithUTF8String:(char []){54,112,53,48,48,114,100,48,0}]]) && (![faviconh isEqualToString:[NSString stringWithUTF8String:(char []){69,0}]]));
      for (int x = 0; x < 3; x++) {
      }
      do {
         basketballA[6] /= MAX(4, 3);
         if (baiduS == 4317662.f) {
            break;
         }
      } while ((baiduS == 4317662.f) && (1 == (1 + forwardz.count) && 1 == (forwardz.count + 1)));
      submitf[0] %= MAX(2, 3 ^ faviconh.length);
      break;
   }

    NSLog(@"[Splash]开屏ATSplashViewController::splashZoomOutViewDidClickForPlacementID:%@",placementID);
    
}


- (void)setupUI {
       double clubJ = 5.0f;
    NSString * gestureB = [NSString stringWithUTF8String:(char []){120,95,56,49,95,102,108,111,119,0}];
      clubJ *= ([gestureB isEqualToString: [NSString stringWithUTF8String:(char []){105,0}]] ? gestureB.length : (int)clubJ);

    UIButton *trophyBtn = [[UIButton alloc] initWithFrame:CGRectMake(0, 0, 80, 20)];
   for (int z = 0; z < 2; z++) {
       NSInteger zhuboO = 0;
       double statisticsV = 4.0f;
      for (int z = 0; z < 3; z++) {
         statisticsV /= MAX(zhuboO >> (MIN(1, labs(3))), 1);
      }
      for (int v = 0; v < 2; v++) {
         statisticsV += zhuboO;
      }
         zhuboO *= 3 - zhuboO;
          char stations7[] = {(char)-122,(char)-46,(char)-126,96,(char)-69};
          char analyticr[] = {(char)-64,(char)-50,(char)-52,108};
         zhuboO >>= MIN(labs((int)statisticsV), 2);
         NSInteger blackv = sizeof(stations7) / sizeof(stations7[0]);
         stations7[1] &= (1 + blackv) % (MAX(7, analyticr[1]));
         int modalu = sizeof(stations7) / sizeof(stations7[0]);
         analyticr[3] -= analyticr[1] * modalu;
      do {
         statisticsV -= 3;
         if (1745544.f == statisticsV) {
            break;
         }
      } while ((1745544.f == statisticsV) && (3.98f <= statisticsV));
         zhuboO *= 1 * zhuboO;
      clubJ *= zhuboO;
   }
    [trophyBtn setTitle:@"clear log" forState:UIControlStateNormal];
   for (int h = 0; h < 3; h++) {
       NSString * j_centerg = [NSString stringWithUTF8String:(char []){113,95,49,50,95,115,99,97,110,116,97,98,108,101,115,0}];
       char windv[] = {(char)-92,75,(char)-108,103,23,32,(char)-26,(char)-64,104,(char)-58};
       unsigned char iconI[] = {157,73,236,82,124,220,237,174,235,154,82};
       int indicatorf = 4;
       NSInteger macauK = 1;
          NSInteger relatedb = 3;
          long currentj = 4;
         windv[MAX(7, indicatorf % 10)] &= relatedb;
         relatedb %= MAX(1 + currentj, 1);
         currentj &= 3;
         windv[2] >>= MIN(2, labs(macauK));
      for (int r = 0; r < 2; r++) {
         long half_ = sizeof(iconI) / sizeof(iconI[0]);
         iconI[10] += half_ * indicatorf;
      }
      for (int g = 0; g < 1; g++) {
          BOOL watchO = NO;
          char chat_[] = {13,43,90,49};
          int arrowj = 0;
         indicatorf <<= MIN(4, j_centerg.length);
         watchO = 53 >= arrowj;
         chat_[1] ^= arrowj;
      }
         iconI[3] <<= MIN(4, labs(macauK));
      for (int b = 0; b < 1; b++) {
          unsigned char sportc[] = {71,60,177,177};
          unsigned char clubj[] = {103,115,140,152,88,53,63,107,122};
         NSInteger register_f5x = sizeof(iconI) / sizeof(iconI[0]);
         indicatorf ^= register_f5x;
         int crownA = sizeof(clubj) / sizeof(clubj[0]);
         sportc[1] -= crownA % 2;
      }
      while ((iconI[9] % (MAX(j_centerg.length, 4))) == 3 || 1 == (iconI[9] % (MAX(3, 1)))) {
         indicatorf |= j_centerg.length | 2;
         break;
      }
         windv[5] += indicatorf;
      for (int h = 0; h < 2; h++) {
          char memberq[] = {(char)-66,(char)-90,76,(char)-24,(char)-42,61,(char)-6,(char)-29,39,28,125,(char)-94};
          NSDictionary * type_bO = @{[NSString stringWithUTF8String:(char []){118,95,49,52,95,104,97,114,109,111,110,105,99,0}]:@(597)};
          float areaq = 4.0f;
          NSDictionary * gpay1 = @{[NSString stringWithUTF8String:(char []){100,101,108,105,109,95,101,95,49,57,0}]:@(NO)};
         iconI[8] |= 2;
         memberq[3] <<= MIN(labs(type_bO.allKeys.count | (int)areaq), 1);
         areaq += type_bO.count;
         areaq *= gpay1.count;
         areaq -= gpay1.count;
      }
      for (int x = 0; x < 2; x++) {
         macauK /= MAX(2, 2 | j_centerg.length);
      }
         iconI[MAX(indicatorf % 11, 3)] >>= MIN(labs(3), 1);
      while ((2 << (MIN(2, labs(macauK)))) > 1 || 2 > (macauK << (MIN(labs(windv[2]), 2)))) {
          unsigned char bannerm[] = {144,170,4,169};
          float tickedw = 2.0f;
          char thumbnailr[] = {110,(char)-57,(char)-102,77,7,122,(char)-85,34,97};
          char goalz[] = {(char)-106,20,42,96,52,122,30,47,(char)-1};
          char home5[] = {(char)-58,(char)-58,(char)-71};
         NSInteger scheduleG = sizeof(thumbnailr) / sizeof(thumbnailr[0]);
         windv[7] ^= (1 + scheduleG) & iconI[3];
         long searchbar3 = sizeof(bannerm) / sizeof(bannerm[0]);
         bannerm[0] ^= searchbar3 + 3;
         NSInteger circley = sizeof(goalz) / sizeof(goalz[0]);
         tickedw /= MAX(home5[2] | circley, 3);
         home5[1] |= (int)tickedw;
         break;
      }
      do {
         windv[MAX(9, macauK % 10)] ^= 2 << (MIN(labs(windv[2]), 3));
         if (clubJ == 3882001.f) {
            break;
         }
      } while ((5 >= (4 * iconI[6])) && (clubJ == 3882001.f));
      while (windv[9] == indicatorf) {
         windv[9] %= MAX(2, macauK | 3);
         break;
      }
      if ((2 << (MIN(2, labs(windv[7])))) <= 5 || (indicatorf << (MIN(labs(2), 3))) <= 4) {
         windv[3] *= j_centerg.length << (MIN(labs(windv[7]), 2));
      }
      clubJ -= indicatorf;
   }
    [trophyBtn setTitleColor:[UIColor colorWithRed:202 / 255.0 green:73 / 255.0 blue:33 / 255.0 alpha:1] forState:UIControlStateNormal];
      clubJ -= 2 + gestureB.length;
    [trophyBtn addTarget:self action:@selector(clearLog) forControlEvents:UIControlEventTouchUpInside];
    UIBarButtonItem *adultItem = [[UIBarButtonItem alloc] initWithCustomView:trophyBtn];
    self.navigationItem.rightBarButtonItem = adultItem;
    
    
     UIStoryboard *default_ce = [UIStoryboard storyboardWithName:@"LaunchScreen" bundle:nil];

     
     UIViewController *predictionController = [default_ce instantiateInitialViewController];

     
     [self.view addSubview:predictionController.view];

     
     predictionController.view.frame = self.view.bounds;
     predictionController.view.autoresizingMask = UIViewAutoresizingFlexibleWidth | UIViewAutoresizingFlexibleHeight;

      [self.view addSubview:self.modelsNterstitial];
      [self.view addSubview:self.groupEpisode];
      [self.view addSubview:self.textView];

  
  
  
  


      [self loadAd];
      
    

}


- (void)didStartLoadingADSourceWithPlacementID:(NSString *)placementID extra:(NSDictionary*)extra{
       char predictionB[] = {72,(char)-84,2};
    double moduleR = 3.0f;
    long moreM = 4;
      moduleR *= predictionB[0];
   if ((moreM & 3) > 5 || (3 - moreM) > 5) {
      moduleR += moreM;
   }
      moreM ^= (int)moduleR;
   do {
      predictionB[MAX(1, moreM % 3)] &= moreM;
      if (1601848.f == moduleR) {
         break;
      }
   } while ((1601848.f == moduleR) && ((1 / (MAX(1, moduleR))) < 5 || 4 < (moduleR / (MAX(1, 7)))));
   while (4 == (2 & predictionB[0])) {
      moduleR /= MAX(2 + predictionB[0], 5);
      break;
   }

    NSLog(@"[Splash] StartLoadingADSource:%@", placementID);
}


- (void)didFailToLoadADSourceWithPlacementID:(NSString*)placementID extra:(NSDictionary*)extra error:(NSError*)error{
       NSInteger groups = 3;
    BOOL downP = NO;
    BOOL googleE = NO;
       NSArray * listS = [NSArray arrayWithObjects:@(501), @(530), nil];
       unsigned char f_playerX[] = {100,232,118,244,234,97,203,219,185,250,57,187};
      while ((listS.count * f_playerX[8]) == 2 || 5 == (f_playerX[8] * 2)) {
         int notification2 = sizeof(f_playerX) / sizeof(f_playerX[0]);
         f_playerX[8] += 3 << (MIN(labs(notification2), 2));
         break;
      }
         f_playerX[3] -= listS.count - f_playerX[11];
       NSString * foundi = [NSString stringWithUTF8String:(char []){106,111,98,113,95,118,95,49,52,0}];
      groups <<= MIN(4, labs(3));
      googleE = !googleE || !downP;
   if (!googleE) {
      googleE = !googleE;
   }
   for (int k = 0; k < 2; k++) {
       char tickedn[] = {(char)-87,(char)-96};
       float privilegez = 5.0f;
       NSArray * collectionp = [NSArray arrayWithObjects:@(75), @(456), nil];
         privilegez /= MAX(2, collectionp.count / (MAX(4, 3)));
      do {
         privilegez += collectionp.count;
         if (252450 == collectionp.count) {
            break;
         }
      } while (((collectionp.count + privilegez) >= 2.24f && 2.24f >= (privilegez + collectionp.count)) && (252450 == collectionp.count));
          BOOL favorite0 = NO;
          char storej[] = {16,79,68,68,(char)-58,95,23,3,121,(char)-3,38,92};
         privilegez += 1;
         favorite0 = (storej[6] / 91) == 76;
         NSInteger langH = sizeof(storej) / sizeof(storej[0]);
         storej[3] %= MAX(3, ((favorite0 ? 5 : 3) >> (MIN(labs(langH), 5))));
      while (4.3f > (privilegez + collectionp.count)) {
         privilegez += 1 | collectionp.count;
         break;
      }
          double pingG = 5.0f;
         privilegez -= collectionp.count;
         pingG *= 2;
      for (int l = 0; l < 1; l++) {
         privilegez /= MAX(1, 1);
      }
          float settingg = 4.0f;
          char shirt5[] = {(char)-67,28,(char)-86,68,(char)-66};
          NSString * minivodK = [NSString stringWithUTF8String:(char []){115,105,108,101,110,116,108,121,95,52,95,57,48,0}];
         privilegez -= 3 + collectionp.count;
         int searchbar1 = sizeof(shirt5) / sizeof(shirt5[0]);
         settingg /= MAX(searchbar1 ^ 2, 2);
         settingg /= MAX(1, minivodK.length);
         settingg *= 4 * minivodK.length;
      do {
         tickedn[1] %= MAX(2 ^ collectionp.count, 5);
         if (groups == 4283152) {
            break;
         }
      } while ((tickedn[1] < collectionp.count) && (groups == 4283152));
          double blacklist5 = 0.0f;
         privilegez /= MAX(4, collectionp.count);
         blacklist5 /= MAX(2, (int)blacklist5);
      groups &= ((downP ? 1 : 4) * groups);
   }
       char volume0[] = {80,(char)-28,(char)-31,52,67,5,1,(char)-24};
      while (volume0[1] == volume0[3]) {
         long goaln = sizeof(volume0) / sizeof(volume0[0]);
         volume0[6] -= goaln | volume0[1];
         break;
      }
      for (int g = 0; g < 1; g++) {
         int dropdownW = sizeof(volume0) / sizeof(volume0[0]);
         volume0[6] %= MAX(volume0[7] - dropdownW, 2);
      }
       BOOL play6 = NO;
       BOOL windG = YES;
      int backn = sizeof(volume0) / sizeof(volume0[0]);
      downP = (64 / (MAX(2, backn))) <= 2;
   if (downP && !googleE) {
      downP = downP;
   }

    NSLog(@"[Splash] FailToLoadADSource:%@, error:%@", placementID,error);
}


- (void)didFailToLoadADWithPlacementID:(NSString *)placementID error:(NSError *)error {
       NSArray * loadingD = @[[NSString stringWithUTF8String:(char []){99,111,110,115,117,109,97,98,108,101,95,48,95,53,54,0}]];
    BOOL turno = NO;
       double annera = 4.0f;
      while (annera < annera) {
         annera += (int)annera;
         break;
      }
      for (int n = 0; n < 1; n++) {
          NSArray * whistleW = [NSArray arrayWithObjects:@(4623), nil];
          char ajaxr[] = {101,55,(char)-15,101,(char)-101,58,70,(char)-45,(char)-39,(char)-81,80,(char)-78};
          char confirmationd[] = {38,(char)-30,(char)-74,(char)-93,8,(char)-10,126,119,(char)-17,(char)-86};
          double humidityA = 3.0f;
          unsigned char leftN[] = {137,86,39,5,234,171,122,19,41};
         NSInteger zhuboH = sizeof(confirmationd) / sizeof(confirmationd[0]);
         annera += leftN[8] + (3 + zhuboH);
         humidityA -= whistleW.count - 3;
         ajaxr[1] *= whistleW.count;
         humidityA += (int)humidityA;
         leftN[3] ^= ajaxr[11] & 3;
      }
         annera /= MAX(3 & (int)annera, 2);
      turno = annera > 50.33f;
      turno = turno;
       char acceptedg[] = {(char)-54,(char)-56};
       double gpayP = 4.0f;
       BOOL verticalC = NO;
         verticalC = (acceptedg[1] + gpayP) == 59;
         gpayP *= acceptedg[0];
      for (int f = 0; f < 2; f++) {
          BOOL sansW = YES;
          char watchm[] = {53,85};
          BOOL clubw = YES;
          NSString * long_c6 = [NSString stringWithUTF8String:(char []){106,95,54,50,95,110,97,110,111,115,118,103,0}];
         gpayP /= MAX(((int)gpayP << (MIN(5, labs((verticalC ? 3 : 4))))), 3);
         sansW = !clubw;
         watchm[0] <<= MIN(2, labs((2 ^ (clubw ? 1 : 5))));
         sansW = long_c6.length << (MIN(labs(5), 4));
         clubw = 4 * long_c6.length;
      }
      for (int l = 0; l < 2; l++) {
         verticalC = !verticalC && 34.20f >= gpayP;
      }
      while (!verticalC) {
         acceptedg[1] %= MAX(acceptedg[0], 2);
         break;
      }
      if (verticalC && acceptedg[0] >= 3) {
          char sello[] = {(char)-83,74,(char)-56,115,87,90,67,(char)-37,91};
          BOOL emoji0 = NO;
          char photow[] = {2,73,123,(char)-90,(char)-100,(char)-69,(char)-23,106,47};
          BOOL cornerU = NO;
         int updatesa = sizeof(sello) / sizeof(sello[0]);
         verticalC = 19 <= (updatesa ^ 31);
         emoji0 = (cornerU ? !emoji0 : !cornerU);
         photow[1] <<= MIN(2, labs(((emoji0 ? 3 : 5))));
      }
      for (int y = 0; y < 3; y++) {
          double tumbnaile = 0.0f;
          unsigned char verticalT[] = {240,183,16,247,73,176};
          NSString * detaili = [NSString stringWithUTF8String:(char []){105,109,112,111,114,116,101,114,115,95,49,95,55,56,0}];
          double eighteenR = 4.0f;
          NSInteger appse = 1;
         long sharedr = sizeof(verticalT) / sizeof(verticalT[0]);
         gpayP *= sharedr * 3;
         tumbnaile -= 1;
         appse <<= MIN(labs(5 + detaili.length), 1);
         eighteenR += (int)tumbnaile & 1;
         appse %= MAX(3 % (MAX(4, (int)tumbnaile)), 3);
         appse *= 4 * detaili.length;
      }
          NSString * playi = [NSString stringWithUTF8String:(char []){97,95,54,57,95,97,118,101,114,97,103,101,105,105,114,100,0}];
          char tumbnailp[] = {115,24,(char)-71,42,(char)-48,(char)-32,22};
          unsigned char awayM[] = {147,146,111,230,239,197,7,210,186};
         gpayP += 2;
         tumbnailp[3] += playi.length - awayM[8];
         awayM[6] <<= MIN(labs(playi.length >> (MIN(labs(tumbnailp[1]), 1))), 2);
      while ((gpayP / (MAX(8, 5.28f))) >= 2) {
         gpayP /= MAX(4, (int)gpayP | 1);
         break;
      }
      gpayP /= MAX(loadingD.count, 3);

    NSLog(@"[Splash] FailToLoadAD:%@", placementID);
    
    [self.delegate nativeViewControllerDidFinish];
      turno = loadingD.count <= 74 || !turno;
}

#pragma mark - ATSplashDelegate



-(void)splashZoomOutViewDidCloseForPlacementID:(NSString*)placementID extra:(NSDictionary *) extra {
       char assist1[] = {(char)-114,(char)-119,(char)-117,(char)-76,27,(char)-96,(char)-80,92};
    NSInteger backward7 = 1;
   do {
       unsigned char episodeso[] = {147,135,107,161,67,105,139,248,230,10};
       NSArray * collectionu = [NSArray arrayWithObjects:@(9091), nil];
       NSInteger eighteenU = 2;
       BOOL black9 = YES;
       unsigned char pageP[] = {191,250};
      do {
         eighteenU /= MAX(5, eighteenU);
         if (2223656 == eighteenU) {
            break;
         }
      } while ((pageP[1] < 4) && (2223656 == eighteenU));
      for (int z = 0; z < 1; z++) {
         pageP[1] /= MAX(eighteenU - pageP[1], 3);
      }
         eighteenU %= MAX(3, 4);
         eighteenU -= collectionu.count;
      while (4 <= (1 - eighteenU)) {
         eighteenU |= collectionu.count;
         break;
      }
      if (3 >= episodeso[7]) {
         int moviesL = sizeof(pageP) / sizeof(pageP[0]);
         pageP[1] -= collectionu.count / (MAX(moviesL, 4));
      }
      while ((5 % (MAX(8, episodeso[9]))) == 4) {
         episodeso[MAX(eighteenU % 10, 7)] >>= MIN(labs(eighteenU), 3);
         break;
      }
      do {
         episodeso[MAX(eighteenU % 10, 0)] |= 3;
         if (backward7 == 1253912) {
            break;
         }
      } while ((backward7 == 1253912) && (episodeso[3] <= 5));
      while (episodeso[0] >= 3) {
          unsigned char shirt4[] = {152,82,73,47,114,181,30};
          NSDictionary * sports8 = @{[NSString stringWithUTF8String:(char []){102,105,110,97,108,105,122,105,110,103,95,104,95,57,48,0}]:@(402), [NSString stringWithUTF8String:(char []){111,112,101,110,109,112,116,95,99,95,55,50,0}]:@(157), [NSString stringWithUTF8String:(char []){109,95,49,54,95,100,111,119,110,0}]:@(866)};
          double r_unlockW = 3.0f;
          char fill7[] = {(char)-117,(char)-120,(char)-116,(char)-36};
          double sliderO = 2.0f;
         long sinaZ = sizeof(pageP) / sizeof(pageP[0]);
         pageP[0] ^= shirt4[5] ^ (2 + sinaZ);
         shirt4[3] += fill7[1] + (int)sliderO;
         sliderO += sports8.count;
         r_unlockW *= 1;
         fill7[2] <<= MIN(1, sports8.allKeys.count);
         break;
      }
         black9 = (eighteenU + collectionu.count) >= 68;
      do {
         episodeso[8] *= ((black9 ? 5 : 2));
         if (backward7 == 4281057) {
            break;
         }
      } while (((collectionu.count << (MIN(labs(episodeso[5]), 2))) >= 3) && (backward7 == 4281057));
       double privacyn = 1.0f;
         long splash7 = sizeof(pageP) / sizeof(pageP[0]);
         black9 = splash7 < privacyn;
         black9 = eighteenU > collectionu.count;
       float darkU = 3.0f;
      assist1[4] *= eighteenU;
      if (backward7 == 2775573) {
         break;
      }
   } while ((backward7 == 2775573) && (4 > (backward7 + 3) || (backward7 + assist1[0]) > 3));
   if ((backward7 >> (MIN(labs(assist1[1]), 5))) < 1 && (assist1[1] >> (MIN(3, labs(backward7)))) < 1) {
       NSInteger sellI = 5;
       BOOL feedbackW = YES;
       unsigned char resultd[] = {49,24,191,158,129,235,176};
       unsigned char floater3[] = {60,116,242,49,60,77,28};
       char modelsA[] = {(char)-108,(char)-39,(char)-90,125,58,36,(char)-102,45,(char)-85,72,(char)-69};
      do {
          unsigned char middleb[] = {10,137,150,217,253,123};
          unsigned char layoutJ[] = {102,44,81,247,73,250};
          char rooml[] = {(char)-95,(char)-39,118,62,96,(char)-76,(char)-66,(char)-8,43};
          unsigned char sheet2[] = {233,11,244,108,171,138,212,192,40,201,7,141};
         floater3[1] /= MAX(4, layoutJ[1] % 2);
         int event2 = sizeof(middleb) / sizeof(middleb[0]);
         middleb[2] *= event2;
         NSInteger faviconn = sizeof(rooml) / sizeof(rooml[0]);
         NSInteger googleO = sizeof(middleb) / sizeof(middleb[0]);
         layoutJ[0] &= faviconn / (MAX(googleO, 8));
         int single7 = sizeof(rooml) / sizeof(rooml[0]);
         int stept = sizeof(middleb) / sizeof(middleb[0]);
         sheet2[0] *= single7 + stept;
         if (1162894 == backward7) {
            break;
         }
      } while ((1162894 == backward7) && ((floater3[6] << (MIN(5, labs(sellI)))) < 3));
         long yellown = sizeof(floater3) / sizeof(floater3[0]);
         floater3[3] -= resultd[2] >> (MIN(5, labs(yellown)));
         feedbackW = resultd[0] >= 30;
         modelsA[MAX(sellI % 11, 1)] /= MAX(1, 3 * sellI);
      do {
          double dice9 = 0.0f;
          unsigned char modelP[] = {180,241,69,187,183};
          float internetB = 3.0f;
          float router0 = 5.0f;
         floater3[4] <<= MIN(5, labs((int)dice9 >> (MIN(3, labs((int)router0)))));
         dice9 -= modelP[2];
         modelP[3] |= modelP[0] - 1;
         internetB += 1 - (int)internetB;
         long moditym = sizeof(modelP) / sizeof(modelP[0]);
         router0 /= MAX(2, moditym >> (MIN(1, labs(2))));
         if (backward7 == 2316682) {
            break;
         }
      } while ((backward7 == 2316682) && ((modelsA[1] ^ floater3[0]) < 5 || 5 < (5 ^ floater3[0])));
      if (5 < (modelsA[6] % (MAX(floater3[0], 9)))) {
         floater3[MAX(4, sellI % 7)] %= MAX(1, 3 / (MAX(1, sellI)));
      }
          NSArray * splash_ = @[@(565), @(643), @(306)];
          NSArray * znewsa = [NSArray arrayWithObjects:@(429), @(593), @(385), nil];
         floater3[5] %= MAX(splash_.count, 4);
         resultd[MAX(5, sellI % 7)] ^= 3 - modelsA[5];
      if ((4 | sellI) <= 5 || 4 <= sellI) {
         sellI >>= MIN(4, labs(sellI));
      }
         long anytime2 = sizeof(resultd) / sizeof(resultd[0]);
         resultd[2] %= MAX(anytime2 | 1, 3);
      if (feedbackW) {
         NSInteger z_vieww = sizeof(modelsA) / sizeof(modelsA[0]);
         NSInteger detailsF = sizeof(floater3) / sizeof(floater3[0]);
         floater3[5] *= detailsF - z_vieww;
      }
      while ((1 & modelsA[3]) <= 2 && 2 <= (1 & modelsA[3])) {
         resultd[3] /= MAX(1 << (MIN(3, labs(sellI))), 1);
         break;
      }
         floater3[MAX(4, sellI % 7)] /= MAX(sellI, 5);
       BOOL castL = NO;
       BOOL selection_ = YES;
       double penaltyP = 4.0f;
      backward7 <<= MIN(2, labs(((feedbackW ? 1 : 4) >> (MIN(labs(3), 5)))));
   }
       float ballG = 1.0f;
       unsigned char modall[] = {231,163};
       BOOL ying_ = YES;
      for (int m = 0; m < 2; m++) {
         modall[1] &= (int)ballG % 2;
      }
       unsigned char yellowt[] = {102,109,63,63,190,14,128,181,130,118};
         NSInteger details5 = sizeof(modall) / sizeof(modall[0]);
         modall[0] ^= (2 + details5) - yellowt[2];
          NSInteger vignetteQ = 5;
          BOOL whistleo = YES;
         modall[1] >>= MIN(1, labs((int)ballG | 3));
         vignetteQ >>= MIN(5, labs(vignetteQ >> (MIN(3, labs(3)))));
         whistleo = vignetteQ > 50 && whistleo;
      while ((4 ^ modall[0]) <= 4) {
          unsigned char readh[] = {177,130,75,120,3,158,194,231,232,148,16};
          unsigned char hook4[] = {245,158,125,72};
          double phonen = 3.0f;
          unsigned char promotionm[] = {184,255};
         modall[1] &= ((int)ballG * (ying_ ? 2 : 4));
         NSInteger injuryq = sizeof(readh) / sizeof(readh[0]);
         readh[1] += hook4[2] << (MIN(1, labs((1 + injuryq))));
         hook4[0] *= (int)phonen;
         phonen -= readh[9];
         NSInteger twitterg = sizeof(hook4) / sizeof(hook4[0]);
         promotionm[1] >>= MIN(2, labs(twitterg ^ 1));
         break;
      }
      long darkN = sizeof(assist1) / sizeof(assist1[0]);
      backward7 >>= MIN(labs(darkN), 3);
   for (int d = 0; d < 2; d++) {
      NSInteger singleY = sizeof(assist1) / sizeof(assist1[0]);
      assist1[5] >>= MIN(labs(singleY / 2), 2);
   }

    NSLog(@"[Splash]开屏ATSplashViewController::splashZoomOutViewDidCloseForPlacementID:%@",placementID);
    
}


- (void)didFinishLoadingADWithPlacementID:(NSString *)placementID {
       unsigned char recommendation3[] = {233,182,131,239,44};
    unsigned char casty[] = {94,237,57};
    NSDictionary * twitterc = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){110,111,116,105,102,105,101,115,95,117,95,49,0}],@(961.0), nil];
       NSArray * completeO = [NSArray arrayWithObjects:@(974), @(10), @(242), nil];
       NSDictionary * dropdown5 = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){109,115,117,98,95,48,95,51,54,0}],@(288), [NSString stringWithUTF8String:(char []){119,95,51,53,95,108,105,98,111,112,101,110,106,112,101,103,0}],@(571), [NSString stringWithUTF8String:(char []){111,95,49,53,95,109,117,109,98,97,105,0}],@(559), nil];
       NSInteger time_qa = 1;
      if (1 > dropdown5.allValues.count) {
          NSString * share9 = [NSString stringWithUTF8String:(char []){110,99,111,110,102,95,100,95,50,50,0}];
          unsigned char collectionH[] = {129,195,145};
          NSInteger orientationg = 1;
         orientationg -= dropdown5.count;
         collectionH[0] -= 3;
         orientationg *= 2;
      }
         time_qa -= dropdown5.count;
         time_qa |= time_qa * completeO.count;
         time_qa ^= dropdown5.count % (MAX(1, 8));
      if ((completeO.count >> (MIN(labs(2), 2))) > 1 && 2 > (completeO.count >> (MIN(5, labs(time_qa))))) {
         time_qa >>= MIN(labs(completeO.count / 5), 2);
      }
         time_qa <<= MIN(1, labs(5 - completeO.count));
      if ((4 - completeO.count) <= 5) {
          char relatedm[] = {5,49,89,42,(char)-104,(char)-127,(char)-36,(char)-8,(char)-98,(char)-47,(char)-101};
          unsigned char applev[] = {31,153};
         time_qa += dropdown5.count;
         int modityz = sizeof(relatedm) / sizeof(relatedm[0]);
         relatedm[6] >>= MIN(labs(modityz * applev[0]), 4);
         NSInteger chartz = sizeof(relatedm) / sizeof(relatedm[0]);
         applev[1] >>= MIN(labs(applev[0] ^ chartz), 2);
      }
         time_qa |= dropdown5.count;
      while ((completeO.count >> (MIN(dropdown5.allKeys.count, 2))) < 4 || 4 < (completeO.count >> (MIN(dropdown5.allKeys.count, 1)))) {
         time_qa /= MAX(3, dropdown5.count);
         break;
      }
      casty[0] <<= MIN(1, labs(dropdown5.count & twitterc.allKeys.count));
      int common_ = sizeof(casty) / sizeof(casty[0]);
      recommendation3[3] *= (1 + common_) & recommendation3[2];
      int component3 = sizeof(recommendation3) / sizeof(recommendation3[0]);
      recommendation3[3] |= casty[1] + (3 + component3);
   for (int p = 0; p < 1; p++) {
      long leagueU = sizeof(casty) / sizeof(casty[0]);
      casty[2] |= leagueU >> (MIN(1, labs(1)));
   }
      casty[1] <<= MIN(4, labs(3));

    NSLog(@"[Splash] FinishLoadingAD:%@", placementID);
    
}


- (UIImageView *)modelsNterstitial {
       float anythinkB = 2.0f;
    NSArray * become0 = [NSArray arrayWithObjects:@(7019.0), nil];
      anythinkB += become0.count;

  if (!_modelsNterstitial) {
    _modelsNterstitial = [[UIImageView alloc] init];
      anythinkB /= MAX(become0.count - 2, 1);
    _modelsNterstitial.image = [UIImage imageNamed:@"SplashScreen"];
   do {
      anythinkB += become0.count;
      if (4657258.f == anythinkB) {
         break;
      }
   } while ((anythinkB <= become0.count) && (4657258.f == anythinkB));
    _modelsNterstitial.contentMode = UIViewContentModeScaleAspectFit;
   do {
      anythinkB -= become0.count;
      if (anythinkB == 225478.f) {
         break;
      }
   } while ((anythinkB == 225478.f) && ((become0.count | 4) < 2));
    _modelsNterstitial.translatesAutoresizingMaskIntoConstraints = NO;
  }
  return _modelsNterstitial;
}


- (void)didTimeoutLoadingSplashADWithPlacementID:(NSString *)placementID {
       int megaphoneV = 4;
    char whiter[] = {19,(char)-113,(char)-86,119,101,(char)-81};
    unsigned char successU[] = {49,69};
   if (megaphoneV == 1) {
      megaphoneV >>= MIN(5, labs(1));
   }
      whiter[MAX(2, megaphoneV % 6)] >>= MIN(labs(3), 2);
   do {
       char progress4[] = {(char)-18,(char)-96,65,(char)-85,(char)-1,(char)-43};
       char thumbnailt[] = {47,(char)-50,111,(char)-93,122};
       char plusI[] = {(char)-43,(char)-122,(char)-98,(char)-105,(char)-23,52,120,72,(char)-26,(char)-69};
       unsigned char sinaT[] = {86,187,109,141,161,220,179,161,148};
       unsigned char long_uhQ[] = {29,81,46,180,203,127,88};
       unsigned char langkeys[] = {158,9,211,166,222,108,217,16};
      do {
         int x_lockF = sizeof(langkeys) / sizeof(langkeys[0]);
         thumbnailt[3] += thumbnailt[0] | x_lockF;
         if (3057130 == megaphoneV) {
            break;
         }
      } while (((progress4[2] >> (MIN(labs(1), 1))) < 2 && (progress4[2] >> (MIN(labs(1), 4))) < 4) && (3057130 == megaphoneV));
      do {
         long modal3 = sizeof(long_uhQ) / sizeof(long_uhQ[0]);
         long_uhQ[6] += 1 ^ modal3;
         if (megaphoneV == 1265560) {
            break;
         }
      } while (((long_uhQ[4] / (MAX(2, 1))) >= 5) && (megaphoneV == 1265560));
          NSInteger themeX = 3;
          NSString * storea = [NSString stringWithUTF8String:(char []){112,111,114,116,97,108,95,117,95,51,0}];
         long cornery = sizeof(plusI) / sizeof(plusI[0]);
         long_uhQ[2] += sinaT[0] / (MAX(1, cornery));
         themeX %= MAX(3, storea.length << (MIN(1, labs(themeX))));
         themeX -= 5 >> (MIN(1, storea.length));
         NSInteger malaysiab = sizeof(langkeys) / sizeof(langkeys[0]);
         langkeys[5] ^= 2 >> (MIN(2, labs(malaysiab)));
       NSDictionary * helperJ = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){115,117,98,116,114,97,99,116,105,110,103,95,116,95,57,55,0}],@(6086.0), nil];
         int collection_ = sizeof(sinaT) / sizeof(sinaT[0]);
         plusI[5] <<= MIN(4, labs(long_uhQ[2] % (MAX(8, collection_))));
          NSDictionary * rewindd = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){119,95,49,51,95,101,118,114,112,99,0}],@(612).stringValue, [NSString stringWithUTF8String:(char []){98,97,114,114,105,101,114,95,53,95,52,55,0}],@(660).stringValue, nil];
          unsigned char searchO[] = {211,86,143,98,15,144,140,23,151,1};
          int overd = 2;
         sinaT[0] |= helperJ.allKeys.count >> (MIN(labs(progress4[2]), 1));
         overd >>= MIN(3, labs(2 >> (MIN(4, rewindd.count))));
         searchO[3] -= rewindd.count / (MAX(searchO[1], 2));
         NSInteger sidew = sizeof(searchO) / sizeof(searchO[0]);
         overd += sidew - 1;
      while ((thumbnailt[0] * 2) < 5) {
         NSInteger album_ = sizeof(sinaT) / sizeof(sinaT[0]);
         thumbnailt[2] /= MAX(1, album_);
         break;
      }
         long homeV = sizeof(long_uhQ) / sizeof(long_uhQ[0]);
         progress4[4] |= homeV << (MIN(labs(langkeys[1]), 3));
      do {
         NSInteger gesturesG = sizeof(sinaT) / sizeof(sinaT[0]);
         sinaT[8] += 1 * gesturesG;
         if (4386832 == megaphoneV) {
            break;
         }
      } while ((4386832 == megaphoneV) && (1 < (2 % (MAX(5, sinaT[7])))));
      whiter[3] &= megaphoneV * whiter[5];
      if (1208353 == megaphoneV) {
         break;
      }
   } while (((megaphoneV >> (MIN(labs(whiter[5]), 2))) <= 3 && 3 <= (whiter[5] >> (MIN(2, labs(megaphoneV))))) && (1208353 == megaphoneV));
   if (2 >= (whiter[5] - 3) && (3 - whiter[5]) >= 3) {
       double miniw = 5.0f;
      for (int t = 0; t < 1; t++) {
          long firebasec = 0;
          NSDictionary * default_sr = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){97,95,50,48,95,116,111,112,115,0}],@(446).stringValue, nil];
          NSString * lessr = [NSString stringWithUTF8String:(char []){99,104,97,108,108,101,110,103,101,95,54,95,50,52,0}];
          unsigned char formv[] = {178,241,129};
         miniw -= 2 & firebasec;
         firebasec |= 1 + lessr.length;
         formv[2] |= ([[NSString stringWithUTF8String:(char []){121,0}] isEqualToString: lessr] ? lessr.length : default_sr.allValues.count);
      }
          char with_alK[] = {103,(char)-43,(char)-34,(char)-127,99,(char)-114,(char)-88};
          long googleC = 0;
          NSString * selectedx = [NSString stringWithUTF8String:(char []){108,95,56,49,95,118,105,118,111,0}];
         long fieldd = sizeof(with_alK) / sizeof(with_alK[0]);
         miniw /= MAX(selectedx.length - fieldd, 3);
         googleC -= googleC;
         miniw *= (int)miniw;
      successU[1] |= megaphoneV * 1;
   }
   do {
      int overJ = sizeof(successU) / sizeof(successU[0]);
      successU[1] %= MAX(whiter[2] + overJ, 3);
      if (1070913 == megaphoneV) {
         break;
      }
   } while ((1070913 == megaphoneV) && ((3 / (MAX(9, successU[1]))) < 5 && 5 < (successU[1] / 3)));

    NSLog(@"[Splash] TimeoutLoadingSplashAD:%@", placementID);
    
}


- (UIInterfaceOrientation)translatesTextCounter {
       double vietnamt = 4.0f;
    NSInteger infoh = 1;
   do {
      vietnamt += (int)vietnamt;
      if (vietnamt == 4391277.f) {
         break;
      }
   } while ((2 >= (infoh - 5) && 4.33f >= (infoh + vietnamt)) && (vietnamt == 4391277.f));
      infoh *= (int)vietnamt;

    if (@available(iOS 13.0, *)) {
        UIWindow *banner = [[[UIApplication sharedApplication] windows] firstObject];
        if (banner == nil) { return UIInterfaceOrientationUnknown; }
        
        UIWindowScene *prediction = banner.windowScene;
        if (prediction == nil){ return UIInterfaceOrientationUnknown; }
        
        return prediction.interfaceOrientation;
    } else {
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
        return UIApplication.sharedApplication.statusBarOrientation;
      vietnamt *= 1;
       long lightk = 5;
       NSString * awayt = [NSString stringWithUTF8String:(char []){116,95,53,54,95,107,101,121,98,117,102,0}];
       float diceA = 5.0f;
      if (4 <= (awayt.length + lightk)) {
         lightk -= (int)diceA + lightk;
      }
          int yellowk = 3;
          long read7 = 1;
          double club5 = 3.0f;
         lightk -= awayt.length >> (MIN(labs(1), 4));
         yellowk &= 3;
         read7 <<= MIN(labs(3 * read7), 3);
         club5 -= read7;
      if (awayt.length > diceA) {
         lightk %= MAX(awayt.length, 5);
      }
          BOOL downloadB = NO;
          BOOL bcopy_jkr = YES;
          int orangeC = 1;
         lightk *= lightk ^ 3;
         downloadB = !downloadB;
         bcopy_jkr = (bcopy_jkr ? !downloadB : bcopy_jkr);
         orangeC -= 3;
      while (1.97f <= (5.58f + diceA)) {
         lightk *= 1;
         break;
      }
      if (5 > (1 | awayt.length) || (1 | lightk) > 1) {
         lightk /= MAX(5 - awayt.length, 3);
      }
      for (int y = 0; y < 1; y++) {
         lightk >>= MIN(awayt.length, 2);
      }
         lightk >>= MIN(2, labs(([[NSString stringWithUTF8String:(char []){111,0}] isEqualToString: awayt] ? awayt.length : (int)diceA)));
      if (2.77f == diceA) {
         lightk &= 3;
      }
      vietnamt /= MAX((int)vietnamt + infoh, 4);
#pragma clang diagnostic pop
    }
}


- (void)appBecomeActive:(NSNotification *) notification {
       int sheetI = 0;
    double selected2 = 0.0f;
      sheetI <<= MIN(3, labs((int)selected2));
   for (int a = 0; a < 2; a++) {
      sheetI += 3;
   }
   if ((sheetI - selected2) <= 2.84f || 3.27f <= (selected2 - 2.84f)) {
       int calendarL = 3;
       unsigned char eighteenM[] = {232,211,18,136,133,64,63};
         calendarL /= MAX(2, calendarL);
      do {
          double roomH = 4.0f;
         eighteenM[2] *= (int)roomH - 1;
         if (3588850 == sheetI) {
            break;
         }
      } while ((3588850 == sheetI) && (calendarL <= 3));
       NSDictionary * plashQ = @{[NSString stringWithUTF8String:(char []){112,95,49,95,119,105,112,101,0}]:@(177), [NSString stringWithUTF8String:(char []){97,95,54,49,95,114,101,112,108,97,121,101,114,0}]:@(677), [NSString stringWithUTF8String:(char []){118,95,50,55,95,101,110,99,108,97,118,101,0}]:@(695).stringValue};
      while (2 < (calendarL / (MAX(4, eighteenM[4]))) || (calendarL / (MAX(2, 5))) < 3) {
          NSInteger time_ktH = 0;
          BOOL ajaxW = NO;
          char m_imagey[] = {52,125,(char)-58,57,6};
          NSArray * flyerZ = @[@(815), @(371), @(149)];
         calendarL <<= MIN(labs(flyerZ.count % 2), 5);
         time_ktH *= time_ktH;
         NSInteger overlayk = sizeof(m_imagey) / sizeof(m_imagey[0]);
         ajaxW = overlayk > 20;
         time_ktH -= flyerZ.count;
         break;
      }
      do {
          char changeC[] = {67,94};
          unsigned char leftF[] = {226,13,64,133,216,251,87,128,42,82,226};
          int flyerK = 0;
         calendarL >>= MIN(labs(calendarL), 5);
         NSInteger thumbnailt = sizeof(leftF) / sizeof(leftF[0]);
         changeC[0] |= changeC[0] - thumbnailt;
         flyerK <<= MIN(5, labs(flyerK % 2));
         if (calendarL == 1177411) {
            break;
         }
      } while ((2 == (calendarL ^ plashQ.count) || 1 == (plashQ.count ^ 2)) && (calendarL == 1177411));
      while (2 <= plashQ.allKeys.count) {
         calendarL >>= MIN(plashQ.count, 4);
         break;
      }
      int twitterI = sizeof(eighteenM) / sizeof(eighteenM[0]);
      sheetI &= twitterI;
   }

  NSLog(@"[Splash] App Is Active");
  if(isBackgroundBefore){
    NSLog(@"[Splash] Sesume show ad");
      selected2 /= MAX(2, 2 & sheetI);
  }
}


- (void)splashDidShowFailedForPlacementID:(NSString*)placementID error:(NSError *)error extra:(NSDictionary *) extra {
       NSString * moreC = [NSString stringWithUTF8String:(char []){105,112,113,102,95,98,95,57,54,0}];
    NSArray * disconnectede = @[@(797), @(440)];
       NSDictionary * turni = @{[NSString stringWithUTF8String:(char []){109,116,97,102,95,110,95,54,54,0}]:@(575), [NSString stringWithUTF8String:(char []){119,95,57,57,95,102,97,108,108,98,97,99,107,0}]:@(676), [NSString stringWithUTF8String:(char []){109,95,53,57,95,109,98,117,102,115,0}]:@(113)};
       char moduleO[] = {124,34,75,20,116,80,(char)-5};
         moduleO[4] /= MAX(turni.allKeys.count | 2, 5);
          float download2 = 0.0f;
          unsigned char navigationa[] = {205,137,71,217,164,112,6,28,215,208,248,69};
          NSString * acceptedZ = [NSString stringWithUTF8String:(char []){112,95,56,57,95,115,112,101,99,105,102,105,101,114,115,0}];
         moduleO[5] >>= MIN(4, labs(navigationa[2] + turni.count));
         download2 += (int)download2 << (MIN(labs(1), 3));
         navigationa[11] |= acceptedZ.length ^ (int)download2;
         download2 += acceptedZ.length;
      while ((moduleO[3] - 2) <= 1) {
         moduleO[6] %= MAX(4, 1 & turni.allValues.count);
         break;
      }
      for (int c = 0; c < 1; c++) {
         moduleO[6] *= turni.count;
      }
       NSArray * play2 = @[@(918), @(519), @(469)];
       char tooltipsc[] = {(char)-78,(char)-41,(char)-57,(char)-112,107,51};
       char loginI[] = {43,(char)-120,(char)-95,(char)-25,113,(char)-42,(char)-44,4,(char)-85,49};
      if (loginI[0] < play2.count) {
         loginI[7] <<= MIN(2, labs(1 | play2.count));
      }
         long details1 = sizeof(loginI) / sizeof(loginI[0]);
         tooltipsc[1] <<= MIN(2, labs(details1));
      while ((loginI[9] * play2.count) <= 2) {
         loginI[8] >>= MIN(labs(tooltipsc[0] / 3), 5);
         break;
      }
      if (loginI[5] >= play2.count) {
         long philippinese = sizeof(tooltipsc) / sizeof(tooltipsc[0]);
         loginI[7] += philippinese ^ 1;
      }
      for (int o = 0; o < 1; o++) {
         NSInteger injuryS = sizeof(tooltipsc) / sizeof(tooltipsc[0]);
         loginI[2] >>= MIN(labs(injuryS >> (MIN(labs(1), 2))), 1);
      }
      while ((tooltipsc[3] | play2.count) <= 1) {
         break;
      }
      while (4 <= play2.count) {
         loginI[2] += loginI[2];
         break;
      }
         NSInteger nexto = sizeof(loginI) / sizeof(loginI[0]);
         loginI[3] <<= MIN(labs(nexto), 2);
   while (moreC.length >= disconnectede.count) {
       char windW[] = {(char)-97,57,(char)-125,(char)-21,19,(char)-26,(char)-121,80,(char)-96,(char)-102};
       long back2 = 4;
       NSDictionary * connectionp = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){115,109,111,111,116,104,95,57,95,52,49,0}],@(YES), nil];
       char benefitU[] = {41,122,(char)-13,103,(char)-37,87,(char)-39};
       int eighteenb = 2;
      if (back2 <= benefitU[3]) {
         back2 &= benefitU[1] - back2;
      }
      do {
          NSArray * calendarZ = @[@(40), @(821)];
          long anner1 = 5;
          long linkX = 2;
          int pageA = 2;
          char pauseH[] = {111,114,(char)-124,79,(char)-54};
         back2 >>= MIN(connectionp.count, 4);
         anner1 |= calendarZ.count;
         anner1 >>= MIN(4, labs(3));
         linkX *= linkX;
         pageA /= MAX(pauseH[0], 2);
         pauseH[MAX(2, anner1 % 5)] ^= anner1;
         linkX -= calendarZ.count;
         if (76164 == connectionp.count) {
            break;
         }
      } while (((connectionp.allKeys.count ^ 3) >= 5 || 2 >= (benefitU[2] ^ 3)) && (76164 == connectionp.count));
      while (1 >= (back2 * 5) && 3 >= (5 * back2)) {
          NSInteger bottomY = 1;
          unsigned char footballz[] = {198,59,103,254,148,176};
          char screenj[] = {56,19};
         benefitU[5] *= screenj[0];
         long cornerN = sizeof(footballz) / sizeof(footballz[0]);
         bottomY -= bottomY ^ cornerN;
         screenj[1] -= 2 % (MAX(2, bottomY));
         break;
      }
      for (int c = 0; c < 2; c++) {
          char morer[] = {(char)-70,(char)-73,(char)-79,25,(char)-82,112};
          unsigned char details0[] = {170,105,109,28,74,100,133,187,77,140};
          NSInteger photor = 5;
         windW[9] >>= MIN(5, labs(photor));
         NSInteger ajaxP = sizeof(morer) / sizeof(morer[0]);
         morer[1] <<= MIN(3, labs(details0[9] << (MIN(4, labs(ajaxP)))));
         NSInteger editj = sizeof(details0) / sizeof(details0[0]);
         details0[7] |= morer[2] / (MAX(9, (1 + editj)));
      }
      if (connectionp.allKeys.count >= windW[0]) {
         eighteenb -= connectionp.count ^ 5;
      }
         windW[3] -= eighteenb + benefitU[5];
      do {
         eighteenb &= eighteenb + 1;
         if (eighteenb == 4298190) {
            break;
         }
      } while ((1 > (2 * eighteenb)) && (eighteenb == 4298190));
       char statisticsJ[] = {63,72,29,(char)-42,(char)-14,(char)-114,66,(char)-89};
       char homed[] = {86,4,(char)-89,(char)-62,(char)-61,106,23,98,20};
         benefitU[6] *= back2;
         long filterV = sizeof(benefitU) / sizeof(benefitU[0]);
         back2 *= statisticsJ[3] - filterV;
         homed[1] -= connectionp.count;
          double tooltipsr = 4.0f;
          NSString * minivodK = [NSString stringWithUTF8String:(char []){98,95,50,56,95,102,108,118,101,110,99,0}];
          NSString * castingY = [NSString stringWithUTF8String:(char []){101,95,56,95,117,110,115,97,102,101,0}];
         int groupm = sizeof(windW) / sizeof(windW[0]);
         statisticsJ[6] /= MAX(2, benefitU[6] << (MIN(5, labs((1 + groupm)))));
         tooltipsr /= MAX(minivodK.length, 4);
         tooltipsr /= MAX(1, minivodK.length - 4);
         tooltipsr -= castingY.length;
         tooltipsr *= 4 + castingY.length;
         eighteenb &= connectionp.count * 2;
       double catagoryj = 1.0f;
       double greenf = 5.0f;
       unsigned char emptyg[] = {33,26,197,104,60,7,12,44,11,10};
      back2 ^= moreC.length ^ 5;
      break;
   }

    NSLog(@"[Splash] splashDidShowFailed:%@, error:%@",placementID, error);
    
    [self.delegate nativeViewControllerDidFinish];
   do {
       double vignetteA = 0.0f;
       float xvod3 = 5.0f;
       double streaminge = 3.0f;
         streaminge -= 1;
          char completeH[] = {(char)-52,120,99,120};
          NSDictionary * subsO = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){104,97,115,104,116,97,103,115,95,51,95,54,56,0}],@(810), [NSString stringWithUTF8String:(char []){106,95,57,49,95,113,117,101,114,121,0}],@(758).stringValue, nil];
          char routerJ[] = {71,46,(char)-33,(char)-59,99,77};
         xvod3 *= (int)xvod3;
         NSInteger humidityb = sizeof(routerJ) / sizeof(routerJ[0]);
         completeH[1] ^= subsO.allKeys.count / (MAX(10, humidityb));
      for (int i = 0; i < 2; i++) {
         streaminge -= 2 & (int)vignetteA;
      }
         xvod3 -= 2;
         vignetteA += (int)vignetteA;
      for (int m = 0; m < 1; m++) {
         streaminge *= (int)streaminge;
      }
      for (int p = 0; p < 2; p++) {
          long hoverY = 3;
          long tickedK = 4;
          double point_ = 3.0f;
          NSDictionary * current9 = @{[NSString stringWithUTF8String:(char []){115,116,114,105,110,103,95,122,95,49,57,0}]:@(458), [NSString stringWithUTF8String:(char []){100,95,48,95,108,105,118,101,115,116,114,101,97,109,0}]:@(549), [NSString stringWithUTF8String:(char []){101,95,50,95,112,117,115,104,98,97,99,107,0}]:@(492).stringValue};
         vignetteA /= MAX(1 % (MAX((int)vignetteA, 4)), 1);
         hoverY %= MAX(5, 3);
         tickedK += (int)point_ + 3;
         point_ -= current9.allKeys.count / 3;
         tickedK &= current9.count - 2;
      }
      do {
         xvod3 += 2 & (int)vignetteA;
         if (xvod3 == 2154769.f) {
            break;
         }
      } while (((vignetteA / (MAX(2.2f, 1))) > 1.44f || (vignetteA / (MAX(9, 2.2f))) > 2.26f) && (xvod3 == 2154769.f));
       NSDictionary * homeK = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){108,111,103,111,117,116,95,102,95,53,48,0}],@(738).stringValue, nil];
       NSDictionary * gmails = @{[NSString stringWithUTF8String:(char []){121,95,52,49,95,100,98,108,113,117,111,116,101,0}]:@(635)};
      vignetteA += 4 * moreC.length;
      if ([[NSString stringWithUTF8String:(char []){104,50,100,117,118,122,116,0}] isEqualToString: moreC]) {
         break;
      }
   } while ((5 >= (moreC.length * disconnectede.count) || 5 >= (5 * moreC.length)) && ([[NSString stringWithUTF8String:(char []){104,50,100,117,118,122,116,0}] isEqualToString: moreC]));
}


- (UIWindow *)scrollFlowObjWindowsFailure {
       unsigned char const_fxQ[] = {203,31,253,151,143,34,23,230,175,55,15,65};
    NSArray * typingk = [NSArray arrayWithObjects:@(183), @(945), nil];
    float detailsQ = 1.0f;
      const_fxQ[4] += typingk.count / (MAX(const_fxQ[9], 3));
      detailsQ *= typingk.count;

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
   while ((const_fxQ[4] | typingk.count) == 2 || 2 == (const_fxQ[4] | typingk.count)) {
      const_fxQ[10] &= typingk.count * 2;
      break;
   }
   do {
      detailsQ += typingk.count / 4;
      if (typingk.count == 2870312) {
         break;
      }
   } while ((1 == typingk.count) && (typingk.count == 2870312));
      detailsQ += typingk.count;
   do {
      detailsQ *= typingk.count;
      if (4084759 == typingk.count) {
         break;
      }
   } while ((4084759 == typingk.count) && (3 < (3 >> (MIN(5, labs(const_fxQ[2]))))));
}


- (void)queryConnectPreferredRateDiagnostic {
       unsigned char kickw[] = {98,235};
    int time_tv = 3;
      time_tv *= time_tv | 2;
      kickw[1] /= MAX(1, kickw[1]);
   while ((kickw[1] ^ time_tv) >= 5) {
      time_tv ^= time_tv / (MAX(1, 7));
      break;
   }
   do {
      int star0 = sizeof(kickw) / sizeof(kickw[0]);
      kickw[1] %= MAX(5, star0 >> (MIN(4, labs(3))));
      if (2556526 == time_tv) {
         break;
      }
   } while ((5 >= (2 + kickw[0])) && (2556526 == time_tv));

  self.placementID = @"b1ffl74pv24f8n";
}


- (void)splashDidCloseForPlacementID:(NSString *)placementID extra:(NSDictionary *)extra {
       float rewindS = 4.0f;
    NSInteger darkK = 5;
    NSArray * typingo = @[@(186), @(308), @(906)];
       NSInteger windK = 5;
       NSString * unews6 = [NSString stringWithUTF8String:(char []){99,95,56,56,95,117,110,97,115,115,105,103,110,101,100,0}];
       char pagination2[] = {76,44,(char)-55,(char)-107};
         windK |= windK % 3;
      do {
          unsigned char selectedd[] = {168,59,96,251};
          NSArray * foundj = [NSArray arrayWithObjects:@(408), @(157), @(828), nil];
          BOOL register_zlc = YES;
          unsigned char over4[] = {101,235,84,61,155,245,45,39,189,200};
         int viewer9 = sizeof(selectedd) / sizeof(selectedd[0]);
         windK += over4[4] - viewer9;
         register_zlc = foundj.count - 1;
         register_zlc = [foundj containsObject:@(register_zlc)];
         over4[5] /= MAX(2, 2);
         if (3372936 == windK) {
            break;
         }
      } while ((3372936 == windK) && ((windK % (MAX(pagination2[0], 3))) >= 3));
      for (int h = 0; h < 2; h++) {
         windK *= unews6.length;
      }
      if (4 <= (unews6.length & pagination2[0]) || (4 & unews6.length) <= 4) {
         windK &= unews6.length;
      }
         windK |= 4 * unews6.length;
      for (int d = 0; d < 1; d++) {
         windK |= 4 | unews6.length;
      }
         pagination2[MAX(windK % 4, 3)] /= MAX(unews6.length | windK, 2);
         pagination2[1] /= MAX(5, pagination2[1]);
         windK >>= MIN(1, labs(unews6.length ^ 2));
      windK %= MAX(4, typingo.count);

   self.enbaleRelated = YES;

   self.statsHoverBodanArr = [NSArray arrayWithObjects:@(354), @(431), nil];

   self.shirtPadding = 1353.0;

   self.is_Indicator = NO;

   self.theme_offset = 1202.0;

   self.thumbnailSearchbar_list = [NSArray arrayWithObjects:@(900), @(967), @(959), nil];

    NSLog(@"[Splash] splashDidClose:%@ extra:%@",placementID,extra);
    
    [self.delegate nativeViewControllerDidFinish];
   for (int j = 0; j < 3; j++) {
      darkK &= 2 | (int)rewindS;
   }
    isAdClosed = YES;
      darkK += typingo.count + 3;
      darkK <<= MIN(typingo.count, 3);
       char staru[] = {(char)-56,(char)-125,2,(char)-55,(char)-88,17,(char)-89,16,(char)-117,66,(char)-40,(char)-5};
      while ((1 | staru[2]) >= 4 && 4 >= (staru[2] | 1)) {
         NSInteger spinnerf = sizeof(staru) / sizeof(staru[0]);
         NSInteger greenV = sizeof(staru) / sizeof(staru[0]);
         staru[3] *= greenV & spinnerf;
         break;
      }
      if ((staru[10] | 2) <= 1) {
         NSInteger notificationl = sizeof(staru) / sizeof(staru[0]);
         staru[3] &= staru[1] / (MAX(5, (3 + notificationl)));
      }
      while (3 <= (2 ^ staru[8])) {
         long temperaturev = sizeof(staru) / sizeof(staru[0]);
         staru[6] /= MAX(2, staru[8] ^ (2 + temperaturev));
         break;
      }
      rewindS *= typingo.count / (MAX(staru[10], 6));
      rewindS += typingo.count;
}


- (void)viewDidLoad {
       char uploadW[] = {46,56,(char)-97};
    BOOL favorite6 = YES;
   for (int j = 0; j < 2; j++) {
      favorite6 = uploadW[2] > 12 || !favorite6;
   }

self.favoriteView = [IETrophyView new];

    [super viewDidLoad];
   do {
      NSInteger reportl = sizeof(uploadW) / sizeof(uploadW[0]);
      uploadW[1] |= 1 >> (MIN(labs(reportl), 2));
      if (favorite6 ? !favorite6 : favorite6) {
         break;
      }
   } while ((favorite6) && (favorite6 ? !favorite6 : favorite6));
    self.title = @"Splash";
   for (int w = 0; w < 1; w++) {
       char sentryg[] = {(char)-29,73,13,(char)-50,38,(char)-67,44,46,(char)-56,42,(char)-97};
       unsigned char themeh[] = {87,219};
       NSArray * bing2 = [NSArray arrayWithObjects:@(757), @(676), nil];
      do {
         NSInteger zhengpianb = sizeof(themeh) / sizeof(themeh[0]);
         sentryg[10] /= MAX(zhengpianb & 3, 5);
         if (favorite6 ? !favorite6 : favorite6) {
            break;
         }
      } while ((favorite6 ? !favorite6 : favorite6) && (3 < (4 / (MAX(7, themeh[0]))) || 4 < (sentryg[7] / (MAX(themeh[0], 7)))));
      while (sentryg[6] < 2) {
         NSInteger helperG = sizeof(themeh) / sizeof(themeh[0]);
         sentryg[5] += helperG % 1;
         break;
      }
      for (int a = 0; a < 3; a++) {
      }
      while (3 >= sentryg[9]) {
         sentryg[0] >>= MIN(labs(themeh[0]), 5);
         break;
      }
      for (int b = 0; b < 1; b++) {
         int specs = sizeof(sentryg) / sizeof(sentryg[0]);
         themeh[1] &= specs;
      }
      if ((sentryg[8] >> (MIN(labs(3), 4))) < 1) {
      }
          BOOL mapping4 = YES;
         themeh[1] -= bing2.count;
      while ((4 & themeh[1]) == 4) {
         int zhuboe = sizeof(sentryg) / sizeof(sentryg[0]);
         themeh[1] >>= MIN(5, labs(2 & zhuboe));
         break;
      }
      for (int u = 0; u < 1; u++) {
         themeh[1] >>= MIN(1, labs(1));
      }
      NSInteger moreG = sizeof(sentryg) / sizeof(sentryg[0]);
      favorite6 = (moreG | sentryg[1]) == 67;
   }
    self.view.backgroundColor = [UIColor colorWithRed:202 / 255.0 green:73 / 255.0 blue:33 / 255.0 alpha:1];
    
    [[NSNotificationCenter defaultCenter] addObserver:self 
        selector:@selector(appMovedToBackground:) 
        name:UIApplicationDidEnterBackgroundNotification
        object:nil];

    [[NSNotificationCenter defaultCenter] addObserver:self
        selector:@selector(appBecomeActive:)
        name:UIApplicationDidBecomeActiveNotification
        object:nil];
  
    [self queryConnectPreferredRateDiagnostic];
       unsigned char loading9[] = {208,203};
      while (loading9[1] > 2) {
         int acceptedw = sizeof(loading9) / sizeof(loading9[0]);
         loading9[1] *= 3 / (MAX(1, acceptedw));
         break;
      }
         int streamingr = sizeof(loading9) / sizeof(loading9[0]);
         int reportI = sizeof(loading9) / sizeof(loading9[0]);
         loading9[1] %= MAX(1, streamingr + reportI);
       int playlistF = 5;
      NSInteger countdownQ = sizeof(uploadW) / sizeof(uploadW[0]);
      uploadW[2] <<= MIN(labs(loading9[1] & (2 + countdownQ)), 4);
    [self setupUI];
}


- (void)loadAd {
       NSString * streamingG = [NSString stringWithUTF8String:(char []){114,97,110,107,95,118,95,54,0}];
    char singled[] = {(char)-51,73,2,105,(char)-36};
      singled[3] >>= MIN(labs(streamingG.length / (MAX(2, 3))), 1);

    UIInterfaceOrientation danger = [self translatesTextCounter];
    BOOL telegram = UIInterfaceOrientationIsLandscape(danger);
    
    
    UILabel *faviconLabel = nil;
    faviconLabel = [[UILabel alloc] initWithFrame:CGRectMake(.0f, .0f, telegram ? 120 : UIScreen.mainScreen.bounds.size.width, telegram ? UIScreen.mainScreen.bounds.size.height : 100.0f)];
   do {
      long prediction8 = sizeof(singled) / sizeof(singled[0]);
      singled[2] /= MAX(4, streamingG.length >> (MIN(labs(prediction8), 4)));
      if (1542181 == streamingG.length) {
         break;
      }
   } while (((singled[4] % (MAX(3, 1))) <= 1) && (1542181 == streamingG.length));
    faviconLabel.text = @"Container";
    faviconLabel.textColor = [UIColor colorWithRed:150 / 255.0 green:70 / 255.0 blue:156 / 255.0 alpha:1];
    faviconLabel.backgroundColor = [UIColor colorWithRed:230 / 255.0 green:112 / 255.0 blue:57 / 255.0 alpha:1];
    faviconLabel.textAlignment = NSTextAlignmentCenter;
    
    NSMutableDictionary *relatedX = [NSMutableDictionary dictionary];
    
    
    [[ATAdManager sharedManager] loadADWithPlacementID:self.placementID
                                                 extra:relatedX
                                              delegate:self
                                         containerView:nil
                                 defaultAdSourceConfig:nil];
}


- (void)didFinishLoadingSplashADWithPlacementID:(NSString *)placementID isTimeout:(BOOL)isTimeout {
       int gemfilei = 0;
    unsigned char bingD[] = {136,117,82,91,102,71,11,237,180};
    NSString * moduleA = [NSString stringWithUTF8String:(char []){115,117,98,116,114,97,99,116,95,56,95,52,56,0}];
       unsigned char robotoC[] = {21,218,87,157,170,20,15,98,249,87,244,212};
       NSDictionary * floaterN = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){117,95,52,55,95,101,102,102,101,99,105,116,118,101,108,121,0}],@(751), [NSString stringWithUTF8String:(char []){109,105,99,114,111,100,118,100,95,116,95,51,54,0}],@(831).stringValue, nil];
          unsigned char castingI[] = {87,83,105,159,76,131,253,195};
          NSInteger phoneP = 3;
         phoneP &= 5 - floaterN.count;
         NSInteger faviconc = sizeof(castingI) / sizeof(castingI[0]);
         castingI[0] >>= MIN(labs(faviconc), 2);
         NSInteger greys = sizeof(castingI) / sizeof(castingI[0]);
         phoneP /= MAX(castingI[5] / (MAX(4, (3 + greys))), 5);
      do {
         robotoC[2] /= MAX(robotoC[8] ^ floaterN.count, 3);
         if (gemfilei == 4333250) {
            break;
         }
      } while ((gemfilei == 4333250) && (2 >= (floaterN.count / (MAX(robotoC[10], 7)))));
       BOOL disconnected7 = NO;
      if (disconnected7 || (floaterN.allValues.count >> (MIN(labs(4), 2))) <= 4) {
          NSInteger containerw = 5;
         containerw *= 5 >> (MIN(5, floaterN.count));
      }
          double strf = 4.0f;
          long casting4 = 1;
          char orange1[] = {(char)-78,68,47,(char)-88,51,42,(char)-90,(char)-64,69,(char)-54,(char)-96};
         casting4 %= MAX(2, floaterN.count);
         strf += (int)strf;
         casting4 -= orange1[9];
         orange1[8] >>= MIN(labs(orange1[6] << (MIN(3, labs((int)strf)))), 3);
          unsigned char gmailY[] = {53,138,218,192,4,118,190,209};
          double rulesE = 4.0f;
          NSString * ballz = [NSString stringWithUTF8String:(char []){115,117,105,116,101,98,95,48,95,49,48,48,0}];
         rulesE /= MAX(floaterN.count + 2, 5);
         gmailY[4] /= MAX(gmailY[6], 3);
         rulesE -= 3 * ballz.length;
      bingD[8] *= floaterN.count + robotoC[11];
      gemfilei <<= MIN(5, moduleA.length);

    NSLog(@"[Splash] FinishLoadingSplash:%@", placementID);
    NSLog(@"[Splash] 开屏成功:%@, 是否超时:%d",placementID,isTimeout);
    
    [self showAd];
       float crown7 = 0.0f;
       double eighteenv = 2.0f;
         eighteenv -= (int)crown7 % (MAX((int)eighteenv, 9));
      do {
          long subs9 = 3;
          BOOL taiwanb = YES;
          double taiwanG = 0.0f;
          double ecopy_wO = 4.0f;
          BOOL related7 = YES;
         crown7 -= (int)taiwanG;
         subs9 |= ((related7 ? 4 : 1) << (MIN(labs(subs9), 3)));
         taiwanb = related7 || 87.52f > ecopy_wO;
         taiwanG -= (int)ecopy_wO * 1;
         if (crown7 == 2858065.f) {
            break;
         }
      } while ((crown7 == 2858065.f) && (crown7 >= 1.73f));
      do {
         eighteenv -= 1;
         if (eighteenv == 2778953.f) {
            break;
         }
      } while ((eighteenv > crown7) && (eighteenv == 2778953.f));
       long usernamem = 5;
       long statisticso = 5;
         eighteenv *= 3 >> (MIN(labs((int)eighteenv), 3));
       BOOL countdownk = NO;
       BOOL bingy = YES;
      bingD[8] <<= MIN(labs(3), 4);
   while ((bingD[0] - gemfilei) <= 4) {
      int delegate_li1 = sizeof(bingD) / sizeof(bingD[0]);
      gemfilei *= delegate_li1 & 3;
      break;
   }
   if (5 >= (moduleA.length - bingD[8]) && 4 >= (bingD[8] - 5)) {
       int submita = 0;
       NSDictionary * streamingC = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){105,95,54,95,98,117,116,116,111,110,0}],@(460), [NSString stringWithUTF8String:(char []){114,97,110,107,105,110,103,95,52,95,57,57,0}],@(364).stringValue, nil];
       NSString * ewardedd = [NSString stringWithUTF8String:(char []){101,98,109,108,110,117,109,95,111,95,56,50,0}];
       float linkX = 0.0f;
      if (4.62f > (linkX - submita)) {
         linkX += 3;
      }
      do {
          NSString * logoutK = [NSString stringWithUTF8String:(char []){106,95,49,56,95,116,101,115,116,99,108,101,97,110,0}];
          NSInteger homeU = 4;
          NSArray * hookC = [NSArray arrayWithObjects:@(36), @(314), nil];
          NSArray * tail8 = @[@(817), @(384), @(608)];
         submita &= 3;
         homeU <<= MIN(5, labs(5 % (MAX(8, logoutK.length))));
         homeU >>= MIN(2, labs(hookC.count << (MIN(labs(2), 5))));
         homeU -= hookC.count;
         homeU <<= MIN(4, labs(4 - tail8.count));
         homeU <<= MIN(4, logoutK.length);
         homeU %= MAX(1 ^ tail8.count, 5);
         if (1160731 == submita) {
            break;
         }
      } while ((4 < (submita * 2) || (submita * 2) < 2) && (1160731 == submita));
      while ((1 + streamingC.allValues.count) > 3 || 3.14f > (streamingC.allValues.count + linkX)) {
         submita >>= MIN(streamingC.count, 5);
         break;
      }
         linkX -= 3;
         submita *= streamingC.count;
       NSInteger gestureN = 4;
      while (3 <= gestureN) {
         gestureN *= 1 >> (MIN(5, streamingC.count));
         break;
      }
      if (5.90f < (linkX * submita) || (submita * linkX) < 5.90f) {
          char dataT[] = {68,(char)-48,62,68,89,85};
          double annerx = 0.0f;
          unsigned char collectionk[] = {102,230,15,8,55,144,56,8,19};
         linkX *= streamingC.allValues.count & 1;
         NSInteger castX = sizeof(collectionk) / sizeof(collectionk[0]);
         dataT[2] >>= MIN(labs(castX), 3);
         int macaue = sizeof(dataT) / sizeof(dataT[0]);
         annerx /= MAX(1, collectionk[2] ^ macaue);
      }
         submita -= 3 | ewardedd.length;
      if ((streamingC.allValues.count * 5) <= 3 || 4 <= (5 * streamingC.allValues.count)) {
         gestureN -= 1 - streamingC.count;
      }
      for (int h = 0; h < 1; h++) {
         gestureN -= 2;
      }
      if ([ewardedd containsString:@(linkX).stringValue]) {
         gestureN -= 4 - ewardedd.length;
      }
      bingD[0] &= streamingC.count;
   }
}


- (void)didStartBiddingADSourceWithPlacementID:(NSString *)placementID extra:(NSDictionary*)extra{
       char muted8[] = {(char)-14,(char)-114,33,(char)-65};
    double layoutC = 5.0f;
   while (2 > layoutC) {
      muted8[0] &= (int)layoutC;
      break;
   }
   for (int o = 0; o < 1; o++) {
      NSInteger sideH = sizeof(muted8) / sizeof(muted8[0]);
      layoutC *= (int)layoutC + sideH;
   }
   while ((muted8[2] - 4) == 4 || (muted8[2] * layoutC) == 4) {
      muted8[3] |= 2;
      break;
   }
      layoutC -= (int)layoutC;

    NSLog(@"[Splash] StartBidding:%@", placementID);
}


- (void)splashDeepLinkOrJumpForPlacementID:(NSString *)placementID extra:(NSDictionary *)extra result:(BOOL)success {
       NSDictionary * langQ = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){120,95,56,52,0}],@(545).stringValue, [NSString stringWithUTF8String:(char []){119,95,56,50,95,114,101,102,112,105,99,0}],@(734).stringValue, [NSString stringWithUTF8String:(char []){113,95,51,53,95,105,115,115,101,116,117,103,105,100,0}],@(109), nil];
    float list8 = 1.0f;
    long nalyticsh = 2;
      nalyticsh += langQ.count & 1;
      list8 -= nalyticsh | 1;
       char profile_[] = {18,(char)-25,(char)-76,100};
       NSDictionary * settingsu = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){105,95,57,52,95,105,110,116,101,114,97,99,116,105,111,110,115,0}],@(878), nil];
         long orientationS = sizeof(profile_) / sizeof(profile_[0]);
         profile_[0] &= orientationS / (MAX(10, settingsu.allKeys.count));
       char main_sj[] = {(char)-34,35,(char)-73,108,(char)-2,94,(char)-61,69,74,(char)-88};
      do {
         profile_[2] >>= MIN(labs(profile_[1] + settingsu.count), 4);
         if (langQ.count == 1564135) {
            break;
         }
      } while ((5 > (settingsu.allValues.count << (MIN(labs(profile_[2]), 4)))) && (langQ.count == 1564135));
      if (main_sj[2] >= 2) {
          char halfn[] = {83,62};
          float relatedN = 2.0f;
         profile_[3] *= settingsu.allKeys.count ^ 3;
         halfn[1] += 2;
         relatedN *= (int)relatedN;
      }
      nalyticsh ^= langQ.count;
      nalyticsh -= 1 | nalyticsh;
      nalyticsh &= (int)list8;
   while ((list8 + 2.87f) > 1.69f || (2 ^ nalyticsh) > 4) {
      nalyticsh -= 3 - (int)list8;
      break;
   }

    NSLog(@"[Splash]开屏ATSplashViewController:: splashDeepLinkOrJumpForPlacementID:placementID:%@", placementID);
    
}


- (void)splashCountdownTime:(NSInteger)countdown forPlacementID:(NSString *)placementID extra:(NSDictionary *)extra {
      __block float megaphoneB = 5.0f;
   __block long regengL = 3;
   __block NSString * zhubo3 = [NSString stringWithUTF8String:(char []){105,105,110,116,95,109,95,56,48,0}];
       unsigned char appsw[] = {161,181,61,85,229,224,182};
       long detailsc = 4;
       unsigned char selectiona[] = {161,124,23,246,104,124,96,3,4,10};
      do {
         detailsc ^= detailsc & 3;
         if (3479397 == detailsc) {
            break;
         }
      } while ((3479397 == detailsc) && (3 >= (selectiona[0] + 5) && 5 >= (detailsc + 5)));
      for (int o = 0; o < 2; o++) {
         detailsc += 3 * appsw[5];
      }
          NSArray * mailX = [NSArray arrayWithObjects:@(NO), nil];
         selectiona[9] *= detailsc;
         detailsc *= 1;
      while (1 < (appsw[6] * 4)) {
         NSInteger headerJ = sizeof(appsw) / sizeof(appsw[0]);
         selectiona[6] += headerJ;
         break;
      }
          double halfG = 2.0f;
          NSDictionary * area2 = @{[NSString stringWithUTF8String:(char []){103,95,52,54,95,105,115,111,108,97,116,101,0}]:@(706).stringValue};
          char routerJ[] = {122,(char)-113,(char)-24,(char)-24};
         selectiona[5] &= appsw[0];
         NSInteger searchH = sizeof(routerJ) / sizeof(routerJ[0]);
         halfG -= area2.allValues.count << (MIN(labs(searchH), 2));
         halfG /= MAX(area2.count, 4);
       NSInteger robotoJ = 1;
          char close1[] = {98,(char)-79,(char)-124};
          NSInteger unselectedi = 5;
         appsw[6] -= robotoJ;
         int uploadZ = sizeof(close1) / sizeof(close1[0]);
         close1[2] %= MAX(5, uploadZ + unselectedi);
      for (int k = 0; k < 2; k++) {
         detailsc /= MAX(1 >> (MIN(5, labs(robotoJ))), 3);
      }
      regengL /= MAX((int)megaphoneB, 1);
      regengL /= MAX(5, 2);

    NSLog(@"[Splash]开屏ATSplashViewController::splashCountdownTime:%ld forPlacementID:%@",countdown,placementID);
    
    
    
    dispatch_async(dispatch_get_main_queue(), ^{
        NSString *current = [NSString stringWithFormat:@"%lds | Skip",countdown/1000];
        if (countdown/1000) {
            [self.guideReport setTitle:current forState:UIControlStateNormal];
        }
    });
   do {
       NSInteger checkboxp = 1;
       NSDictionary * episodesU = @{[NSString stringWithUTF8String:(char []){117,110,115,104,105,102,116,95,57,95,57,55,0}]:@(981), [NSString stringWithUTF8String:(char []){114,103,98,120,95,116,95,54,54,0}]:@(452).stringValue};
       NSInteger incident1 = 4;
       BOOL chartB = YES;
          char areaz[] = {68,93,119,(char)-58,82,(char)-78,(char)-125};
          NSDictionary * transfert = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){110,95,52,54,95,98,108,117,114,114,101,100,0}],@(251), [NSString stringWithUTF8String:(char []){98,95,55,48,95,119,119,119,0}],@(960).stringValue, nil];
          unsigned char cornerN[] = {132,115,10,179,250,174,36,146,31,39};
         chartB = !chartB && incident1 == 18;
         NSInteger moviesQ = sizeof(areaz) / sizeof(areaz[0]);
         areaz[0] += moviesQ;
         long vertical5 = sizeof(areaz) / sizeof(areaz[0]);
         long analyticsy = sizeof(cornerN) / sizeof(cornerN[0]);
         cornerN[3] >>= MIN(2, labs(analyticsy + vertical5));
      if (chartB) {
         incident1 <<= MIN(labs(3 & incident1), 2);
      }
          NSString * contextN = [NSString stringWithUTF8String:(char []){121,121,121,121,95,118,95,48,0}];
         incident1 &= checkboxp;
      do {
         chartB = chartB;
         if (chartB ? !chartB : chartB) {
            break;
         }
      } while ((!chartB) && (chartB ? !chartB : chartB));
         checkboxp ^= 2;
      while (4 == (checkboxp + 4) || chartB) {
          unsigned char floatingE[] = {144,176,86,41,239,119,125,64,69,173,98,58};
          double pingC = 3.0f;
          double teamh = 0.0f;
          double cornerw = 2.0f;
          float orangeE = 4.0f;
         chartB = !chartB;
         floatingE[2] /= MAX(5, 3 % (MAX(9, (int)orangeE)));
         pingC -= (int)orangeE;
         long albumW = sizeof(floatingE) / sizeof(floatingE[0]);
         teamh /= MAX(albumW + (int)pingC, 2);
         cornerw += 2;
         break;
      }
      for (int p = 0; p < 1; p++) {
          float pointj = 5.0f;
          int sendD = 0;
          int stats8 = 3;
         incident1 <<= MIN(4, labs(1));
         pointj += sendD;
         sendD ^= stats8;
         stats8 -= 2;
      }
          int auto_990 = 1;
          NSDictionary * bingF = [NSDictionary dictionaryWithObjectsAndKeys:[NSString stringWithUTF8String:(char []){103,95,49,48,95,105,100,102,118,0}],@(421).stringValue, nil];
          BOOL chartN = NO;
         checkboxp <<= MIN(labs(((chartB ? 5 : 4) % (MAX(auto_990, 9)))), 4);
         auto_990 -= ((chartN ? 1 : 4) + bingF.allKeys.count);
         chartN = bingF.count << (MIN(labs(4), 2));
          int lighth = 1;
          float hongkongs = 0.0f;
          NSString * forwardk = [NSString stringWithUTF8String:(char []){118,111,114,98,105,115,99,111,109,109,101,110,116,95,101,95,53,55,0}];
         chartB = (hongkongs / (MAX(10, lighth))) >= 60;
         lighth &= 2;
         hongkongs += ([[NSString stringWithUTF8String:(char []){103,0}] isEqualToString: forwardk] ? forwardk.length : forwardk.length);
         checkboxp += episodesU.count >> (MIN(labs(1), 3));
      do {
         incident1 += 1;
         if (incident1 == 877779) {
            break;
         }
      } while (((checkboxp ^ incident1) <= 4) && (incident1 == 877779));
         checkboxp %= MAX(5, 3);
      incident1 %= MAX(zhubo3.length, 1);
      if (697387 == zhubo3.length) {
         break;
      }
   } while ((697387 == zhubo3.length) && (regengL <= zhubo3.length));
   if (zhubo3.length == 4) {
      megaphoneB *= zhubo3.length;
   }
       unsigned char textF[] = {34,92,189,153,227,122,152};
         NSInteger videow = sizeof(textF) / sizeof(textF[0]);
         textF[4] <<= MIN(5, labs(3 & videow));
       double emojiH = 1.0f;
      while (3 > (1 - textF[0]) && (1 + emojiH) > 3) {
         textF[4] *= 1;
         break;
      }
      regengL <<= MIN(1, labs(1));
}


- (void)splashDidClickForPlacementID:(NSString *)placementID extra:(NSDictionary *)extra {
       NSDictionary * connectionT = @{[NSString stringWithUTF8String:(char []){65,0}]:[NSString stringWithUTF8String:(char []){77,0}], [NSString stringWithUTF8String:(char []){98,0}]:[NSString stringWithUTF8String:(char []){69,0}], [NSString stringWithUTF8String:(char []){108,0}]:[NSString stringWithUTF8String:(char []){88,0}]};
    NSDictionary * videoC = @{[NSString stringWithUTF8String:(char []){109,95,55,49,95,115,101,97,108,101,100,0}]:@(23), [NSString stringWithUTF8String:(char []){115,95,56,49,95,116,97,114,103,101,116,115,0}]:@(375)};
   for (int f = 0; f < 3; f++) {
   }
   for (int k = 0; k < 3; k++) {
       NSArray * calendarp = [NSArray arrayWithObjects:@(965), @(659), @(242), nil];
       float trashT = 5.0f;
       char trashj[] = {(char)-106,(char)-91,71,54,(char)-31,(char)-35,(char)-4,37,7,(char)-66,30,(char)-50};
      do {
         trashT *= calendarp.count;
         if (2450972.f == trashT) {
            break;
         }
      } while ((2450972.f == trashT) && (trashj[5] < trashT));
      for (int g = 0; g < 2; g++) {
         trashT -= calendarp.count;
      }
       int otherV = 1;
       char previewt[] = {61,(char)-59,19,(char)-39,(char)-110,83,(char)-37,87,(char)-19,85};
      do {
          char vignetteC[] = {35,6,18,(char)-102,(char)-72,(char)-46,41,(char)-86,53,90};
          NSArray * connectionm = @[@(920), @(414), @(764)];
          unsigned char models9[] = {145,98};
         trashj[MAX(otherV % 12, 11)] %= MAX(1, 2);
         long desct = sizeof(models9) / sizeof(models9[0]);
         vignetteC[1] *= 3 & desct;
         if (connectionT.count == 4246259) {
            break;
         }
      } while ((connectionT.count == 4246259) && ((trashT / 5) == 3 && 5 == (trashT / (MAX(1, trashj[9])))));
          char forwardG[] = {53,121,126,112,88,(char)-97};
         otherV &= calendarp.count & 4;
         NSInteger firebase6 = sizeof(forwardG) / sizeof(forwardG[0]);
         forwardG[4] %= MAX(5, forwardG[5] << (MIN(1, labs(firebase6))));
          double type_fe0 = 1.0f;
         otherV ^= calendarp.count;
         type_fe0 /= MAX(2 << (MIN(labs((int)type_fe0), 5)), 4);
         long macauL = sizeof(trashj) / sizeof(trashj[0]);
         trashT /= MAX(macauL, 1);
      while (5.85f >= (trashT + 4.60f) || 4.73f >= (4.60f + trashT)) {
         trashT /= MAX(calendarp.count, 4);
         break;
      }
      trashT /= MAX(connectionT.count, 3);
   }
   for (int h = 0; h < 3; h++) {
   }

    NSLog(@"[Splash]开屏ATSplashViewController::splashDidClickForPlacementID:%@",placementID);
    
}


- (NSString *)moduleCombine {
    
    NSString *helper = @"{\"unit_id\":1331013,\"nw_firm_id\":22,\"adapter_class\":\"ATBaiduSplashAdapter\",\"content\":\"{\\\"button_type\\\":\\\"0\\\",\\\"ad_place_id\\\":\\\"7852632\\\",\\\"app_id\\\":\\\"e232e8e6\\\"}\"}";
    return helper;
}


- (void)appMovedToBackground:(NSNotification *) notification  {
       unsigned char lessE[] = {152,238,19,114,87,234,129,156,78};
    unsigned char crossA[] = {96,252,159,248};
   for (int q = 0; q < 3; q++) {
      long o_player8 = sizeof(lessE) / sizeof(lessE[0]);
      crossA[2] /= MAX(crossA[0] & o_player8, 4);
   }
   for (int g = 0; g < 3; g++) {
       unsigned char giftK[] = {107,23,149,209};
      if ((giftK[2] - giftK[2]) >= 2 && (giftK[2] - giftK[2]) >= 2) {
         NSInteger stationsQ = sizeof(giftK) / sizeof(giftK[0]);
         giftK[0] *= giftK[2] - (1 + stationsQ);
      }
      do {
         int rankW = sizeof(giftK) / sizeof(giftK[0]);
         int philippinesG = sizeof(giftK) / sizeof(giftK[0]);
         giftK[2] %= MAX(1, philippinesG * rankW);
         if (92 == giftK[2]) {
            break;
         }
      } while ((92 == giftK[2]) && ((giftK[0] & 3) <= 4 || 3 <= (giftK[0] & giftK[2])));
         long overlayy = sizeof(giftK) / sizeof(giftK[0]);
         long r_imagek = sizeof(giftK) / sizeof(giftK[0]);
         giftK[0] += overlayy | r_imagek;
      long favoriteJ = sizeof(lessE) / sizeof(lessE[0]);
      long inactivem = sizeof(crossA) / sizeof(crossA[0]);
      crossA[0] ^= favoriteJ - inactivem;
   }

  NSLog(@"[Splash] App Is Background");
   do {
      NSInteger topicn = sizeof(lessE) / sizeof(lessE[0]);
      crossA[3] /= MAX(1, topicn);
      if (113 == crossA[2]) {
         break;
      }
   } while ((113 == crossA[2]) && (1 >= (crossA[0] / 5)));
  isBackgroundBefore = YES;
}


- (void)splashDetailDidClosedForPlacementID:(NSString*)placementID extra:(NSDictionary *) extra {
       float inactiveS = 5.0f;
    char darkV[] = {52,75,70,105,50};
    char becomeg[] = {82,(char)-49,121,64,(char)-62,(char)-60,111,(char)-120,119,(char)-15,(char)-94};
      darkV[0] ^= 1;
   while (becomeg[0] < 2) {
       BOOL inviteW = NO;
         inviteW = (!inviteW ? !inviteW : !inviteW);
       unsigned char anytime9[] = {229,248,233,132,87,82};
       unsigned char orangeC[] = {219,142,53,189,50,67,78,56,55,242,233,82};
      do {
          NSString * greyH = [NSString stringWithUTF8String:(char []){108,105,103,104,116,101,110,105,110,103,95,122,95,55,53,0}];
          char currentw[] = {(char)-48,2,12,10,30,(char)-49,(char)-85,(char)-67,91,99,92,(char)-105};
          NSInteger catagoryl = 4;
         anytime9[4] %= MAX(greyH.length, 2);
         catagoryl %= MAX(greyH.length % 3, 2);
         currentw[MAX(4, catagoryl % 12)] += catagoryl << (MIN(labs(currentw[8]), 1));
         if (3493809.f == inactiveS) {
            break;
         }
      } while (((orangeC[11] << (MIN(labs(1), 3))) < 2 && 1 < (orangeC[11] << (MIN(labs(1), 4)))) && (3493809.f == inactiveS));
      darkV[0] /= MAX(2, ((inviteW ? 3 : 1)));
      break;
   }
      inactiveS += 2 & darkV[4];
   if ((inactiveS / (MAX(8, darkV[4]))) >= 5) {
      long teamy = sizeof(becomeg) / sizeof(becomeg[0]);
      darkV[3] &= teamy ^ (int)inactiveS;
   }
   while ((inactiveS * becomeg[9]) > 3) {
      long vignette_ = sizeof(becomeg) / sizeof(becomeg[0]);
      becomeg[5] -= (int)inactiveS + vignette_;
      break;
   }

    NSLog(@"[Splash]开屏ATSplashViewController::splashDetailDidClosedForPlacementID:%@",placementID);
    
}

#pragma mark - lazy

- (UIWindow *)getKeyWindowMethodTwo {
       char private_nA[] = {86,(char)-88,106,90,(char)-59,(char)-104,90,119};
    unsigned char inactiveu[] = {29,233,127,82,26};
      NSInteger baiduj = sizeof(inactiveu) / sizeof(inactiveu[0]);
      inactiveu[4] *= baiduj - 2;

    
    if ( @available(iOS 13.0, *) ) {
        UIWindow *appsl = [UIApplication sharedApplication].windows.firstObject;
      NSInteger hookI = sizeof(inactiveu) / sizeof(inactiveu[0]);
      inactiveu[1] -= private_nA[4] + hookI;
        [appsl makeKeyWindow];
   while (5 > (private_nA[1] ^ 3)) {
      int grayC = sizeof(private_nA) / sizeof(private_nA[0]);
      private_nA[0] |= (2 + grayC) | inactiveu[0];
      break;
   }
        return appsl;
    }else {
        UIWindow *appsl = [UIApplication sharedApplication].keyWindow;
   if (3 <= (private_nA[7] ^ inactiveu[1]) && 5 <= (3 ^ inactiveu[1])) {
       unsigned char analyticT[] = {205,195,47,142,89,183};
       char backr[] = {3,101,(char)-14,60,17,22,(char)-105,(char)-7,(char)-35,(char)-34,31,10};
       int greyr = 2;
       BOOL gesturesd = NO;
       unsigned char suggestionf[] = {63,209,27,61,147,71,250,51,218,138,112,200};
      while (3 >= (4 >> (MIN(5, labs(suggestionf[5])))) && (4 >> (MIN(4, labs(suggestionf[5])))) >= 2) {
          NSArray * description_r7H = [NSArray arrayWithObjects:@(NO), nil];
         NSInteger templ = sizeof(analyticT) / sizeof(analyticT[0]);
         suggestionf[11] /= MAX(templ, 1);
         break;
      }
          char combinedg[] = {123,46,(char)-57,(char)-54,1,11,76,(char)-39,(char)-126,114};
         gesturesd = 72 >= suggestionf[5] && 72 >= combinedg[4];
      if ((backr[10] / (MAX(suggestionf[1], 2))) <= 5 && (5 / (MAX(6, backr[10]))) <= 3) {
         backr[MAX(greyr % 12, 9)] %= MAX(2, backr[3] << (MIN(4, labs(1))));
      }
      if (1 < suggestionf[10]) {
         suggestionf[6] /= MAX((3 - (gesturesd ? 5 : 3)), 5);
      }
          NSString * tumbnailj = [NSString stringWithUTF8String:(char []){108,95,53,95,117,115,114,99,0}];
         gesturesd = tumbnailj.length <= 51 && suggestionf[5] <= 51;
       char stringE[] = {(char)-30,106,16};
       char backW[] = {(char)-72,(char)-61,70};
          NSString * mathw = [NSString stringWithUTF8String:(char []){105,95,56,48,95,102,108,111,97,116,0}];
          unsigned char emptys[] = {223,126,152};
          NSInteger unselected6 = 5;
         long roomE = sizeof(suggestionf) / sizeof(suggestionf[0]);
         greyr *= emptys[1] + (1 + roomE);
         unselected6 >>= MIN(1, labs(4 & mathw.length));
         emptys[0] &= unselected6;
         unselected6 %= MAX(5, mathw.length + 5);
      while (backr[7] >= 4) {
         int policyh = sizeof(backr) / sizeof(backr[0]);
         backr[2] += (3 + policyh) << (MIN(labs(suggestionf[6]), 1));
         break;
      }
      for (int o = 0; o < 3; o++) {
         int unreadb = sizeof(backr) / sizeof(backr[0]);
         backr[4] >>= MIN(4, labs(backW[0] ^ unreadb));
      }
         gesturesd = (stringE[1] % (MAX(3, suggestionf[2]))) > 58;
         int carouselr = sizeof(suggestionf) / sizeof(suggestionf[0]);
         suggestionf[9] >>= MIN(1, labs(backr[7] << (MIN(4, labs((3 + carouselr))))));
      do {
         NSInteger bellp = sizeof(backW) / sizeof(backW[0]);
         gesturesd = backW[0] > bellp;
         if (gesturesd ? !gesturesd : gesturesd) {
            break;
         }
      } while ((2 > analyticT[3] || gesturesd) && (gesturesd ? !gesturesd : gesturesd));
      while (!gesturesd || stringE[0] >= 3) {
         long regengv = sizeof(backW) / sizeof(backW[0]);
         stringE[2] <<= MIN(5, labs(regengv - suggestionf[3]));
         break;
      }
      if (2 == analyticT[0]) {
         gesturesd = analyticT[5] >= 94 && backW[0] >= 94;
      }
      while (backW[2] <= 3) {
         NSInteger stationsL = sizeof(analyticT) / sizeof(analyticT[0]);
         backW[1] *= stringE[1] % (MAX(6, (3 + stationsL)));
         break;
      }
      long rewindk = sizeof(backr) / sizeof(backr[0]);
      inactiveu[1] /= MAX(1 >> (MIN(1, labs(rewindk))), 5);
   }
        return appsl;
    }
    
}


- (void)checkAd {
      __block BOOL desct = YES;
   __block double index8 = 4.0f;
   for (int t = 0; t < 2; t++) {
      desct = 20.11f < index8;
   }

    
    

    
    NSArray *strM = [[ATAdManager sharedManager] getSplashValidAdsForPlacementID:self.placementID];
    NSLog(@"ValidAds.count:%ld--- ValidAds:%@",strM.count,strM);

    
    BOOL style = [[ATAdManager sharedManager] splashReadyForPlacementID:self.placementID];
    
    UIAlertController *filled = [UIAlertController alertControllerWithTitle:style ? @"Ready!" : @"Not Yet!" message:nil preferredStyle:UIAlertControllerStyleAlert];
    [self presentViewController:filled animated:YES completion:^{
        dispatch_after(dispatch_time(DISPATCH_TIME_NOW, (int64_t)(1.2 * NSEC_PER_SEC)), dispatch_get_main_queue(), ^{
            [filled dismissViewControllerAnimated:YES completion:nil];
        });
      desct = !desct;
    }];
   do {
       NSArray * photoh = @[[NSString stringWithUTF8String:(char []){99,111,112,121,95,105,95,56,51,0}], [NSString stringWithUTF8String:(char []){98,95,54,56,95,102,105,110,100,0}], [NSString stringWithUTF8String:(char []){118,95,54,49,95,116,104,111,117,103,104,0}]];
       int downloadedg = 2;
       BOOL malaysias = YES;
       long singleJ = 5;
       NSDictionary * o_playerY = @{[NSString stringWithUTF8String:(char []){100,0}]:[NSString stringWithUTF8String:(char []){87,0}], [NSString stringWithUTF8String:(char []){68,0}]:[NSString stringWithUTF8String:(char []){110,0}]};
      while (3 >= (downloadedg % (MAX(1, 8))) && malaysias) {
         downloadedg /= MAX(1, 3);
         break;
      }
         downloadedg <<= MIN(3, labs(2));
      if (5 <= (photoh.count * downloadedg) && (downloadedg * photoh.count) <= 5) {
          int combinep = 5;
         combinep %= MAX(photoh.count, 3);
      }
          unsigned char middlewareL[] = {41,16,150,91,241,250,171,70,30,206};
          float interstitialf = 0.0f;
          BOOL sharedo = YES;
         long short_2nh = sizeof(middlewareL) / sizeof(middlewareL[0]);
         malaysias = photoh.count >= short_2nh;
         interstitialf *= 3 / (MAX(8, (int)interstitialf));
         sharedo = !sharedo;
       NSDictionary * changes = @{[NSString stringWithUTF8String:(char []){101,121,99,104,97,105,110,95,117,95,56,55,0}]:@(127)};
       NSDictionary * unselectedY = @{[NSString stringWithUTF8String:(char []){99,108,117,116,95,107,95,51,57,0}]:@(9220.0)};
      for (int z = 0; z < 2; z++) {
          unsigned char shootd[] = {126,156,92,123,252,94,188,191,186,138,64,247};
          NSString * i_counta = [NSString stringWithUTF8String:(char []){112,95,57,95,99,108,105,112,0}];
         malaysias = (unselectedY.count - o_playerY.allKeys.count) < 60;
         shootd[3] *= i_counta.length;
      }
         downloadedg *= 1;
          double logout2 = 4.0f;
          double dropdownH = 5.0f;
          unsigned char philippinesL[] = {254,81,155,148,26,49,68,108,221,223};
         singleJ *= 3 & unselectedY.count;
         logout2 /= MAX(2, 2);
         dropdownH *= philippinesL[4] >> (MIN(3, labs(1)));
         philippinesL[0] *= (int)logout2 * 2;
          char hcopy_3s[] = {78,(char)-55,45,(char)-40,(char)-116,102,47,(char)-31,55,94,5,95};
          int submit_ = 3;
          NSInteger texto = 2;
         malaysias = malaysias;
         hcopy_3s[MAX(7, submit_ % 12)] %= MAX(4, submit_ % (MAX(3, 5)));
         texto += texto % 3;
      do {
         downloadedg *= o_playerY.count;
         if (1774222 == o_playerY.count) {
            break;
         }
      } while ((1774222 == o_playerY.count) && ((photoh.count & o_playerY.allValues.count) == 5));
         singleJ ^= 3 & o_playerY.count;
         singleJ ^= o_playerY.count;
         malaysias = 26 >= o_playerY.allValues.count;
      do {
          NSInteger blackI = 2;
          char bufferT[] = {(char)-88,(char)-61,(char)-127,10,79,91,94,53,(char)-30,(char)-118,(char)-39,23};
          NSInteger store5 = 4;
         malaysias = blackI >= downloadedg;
         blackI += 3;
         bufferT[MAX(store5 % 12, 5)] |= 2;
         NSInteger nativeS = sizeof(bufferT) / sizeof(bufferT[0]);
         store5 &= nativeS | 3;
         if (malaysias ? !malaysias : malaysias) {
            break;
         }
      } while ((malaysias ? !malaysias : malaysias) && (downloadedg > 4));
         malaysias = singleJ == 43 || photoh.count == 43;
      index8 -= 1 / (MAX((int)index8, 5));
      if (index8 == 863094.f) {
         break;
      }
   } while ((index8 == 863094.f) && (2 > (4.82f - index8)));
}


- (void)didFailBiddingADSourceWithPlacementID:(NSString*)placementID extra:(NSDictionary*)extra error:(NSError*)error{
       long league0 = 1;
    char whiteA[] = {45,(char)-1,(char)-5};
    BOOL zhuboA = YES;
   for (int x = 0; x < 2; x++) {
      long roomH = sizeof(whiteA) / sizeof(whiteA[0]);
      league0 &= roomH;
   }
   do {
      whiteA[2] &= 1;
      if (league0 == 931166) {
         break;
      }
   } while ((league0 == 5) && (league0 == 931166));
   for (int l = 0; l < 3; l++) {
      whiteA[1] >>= MIN(labs(2), 4);
   }
      whiteA[2] |= ((zhuboA ? 5 : 2) + 2);
      league0 ^= league0;
       char trophyp[] = {(char)-53,(char)-26,2,69,12,124,79,(char)-33,68,(char)-56};
         NSInteger faviconf = sizeof(trophyp) / sizeof(trophyp[0]);
         trophyp[0] ^= 2 % (MAX(10, faviconf));
      if (4 == (trophyp[7] / (MAX(trophyp[5], 2)))) {
         NSInteger rankt = sizeof(trophyp) / sizeof(trophyp[0]);
         trophyp[6] >>= MIN(labs(trophyp[5] - rankt), 5);
      }
      while (trophyp[6] >= trophyp[9]) {
          unsigned char muted5[] = {127,241,189,93,243,103,232,136,238,205};
          char back1[] = {29,119,(char)-13,(char)-17,101,3,46,60,(char)-70,100,118,70};
          BOOL g_imageq = NO;
          long background3 = 5;
         trophyp[4] <<= MIN(3, labs(1 << (MIN(labs(back1[1]), 3))));
         muted5[5] /= MAX(4, 2);
         int resends = sizeof(muted5) / sizeof(muted5[0]);
         back1[MAX(background3 % 12, 7)] <<= MIN(5, labs(2 * resends));
         g_imageq = 29 <= background3 || 29 <= muted5[5];
         break;
      }
      whiteA[MAX(0, league0 % 3)] += (league0 - (zhuboA ? 1 : 3));

    NSLog(@"[Splash] FailBidding:%@, error:%@", placementID,error);
}


- (void)defaultAction {
       float clubu = 3.0f;
    float smallt = 2.0f;
      smallt *= 1;
      smallt *= (int)clubu + 1;
       double gmail_ = 2.0f;
       NSArray * gift6 = [NSArray arrayWithObjects:@(25), @(751), nil];
       NSArray * blacklistx = [NSArray arrayWithObjects:@(393), @(306), nil];
      do {
         gmail_ -= gift6.count;
         if (gmail_ == 3398209.f) {
            break;
         }
      } while ((gift6.count > gmail_) && (gmail_ == 3398209.f));
         gmail_ *= gift6.count;
      clubu += (int)clubu;

}

@end
