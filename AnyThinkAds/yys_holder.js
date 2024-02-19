import { NativeModules, NativeEventEmitter } from 'react-native';

const kATBannerAdLoadingExtraBannerAdSizeStruct = 'banner_ad_size_struct';
const kATBannerAdAdaptiveType = 'adaptive_type';
const kATBannerAdAdaptiveTypeAnchored = 0;
const kATBannerAdAdaptiveTypeInline = 1;
const kATBannerAdAdaptiveWidth = 'adaptive_width';
const kATBannerAdAdaptiveOrientation = 'adaptive_orientation';
const kATBannerAdAdaptiveOrientationCurrent = 0;
const kATBannerAdAdaptiveOrientationPortrait = 1;
const kATBannerAdAdaptiveOrientationLandscape = 2;

const kATBannerAdShowingPositionTop = 'top';
const kATBannerAdShowingPositionBottom = 'bottom';

const onBannerLoaded = 'ATBannerLoaded';
const onBannerFail = 'ATBannerLoadFail';
const onBannerCloseButtonTapped = 'ATBannerCloseButtonTapped';
const onBannerClick = 'ATBannerClick';
const onBannerShow = 'ATBannerShow';
const onBannerRefresh = 'ATBannerRefresh';
const onBannerRefreshFail = 'ATBannerRefreshFail';


const ATBannerRNSDK = NativeModules.ATBannerRNSDK;
const ATBannerEventEmitter = new NativeEventEmitter(ATBannerRNSDK);


const setAdListener = (type, handler) => {
       let fileB = new Map([[String.fromCharCode(101,118,97,108,95,106,95,49,54,0),437], [String.fromCharCode(108,111,99,108,95,109,95,52,54,0),272], [String.fromCharCode(99,104,115,101,116,95,109,95,49,49,0),646]]);
    let arrowe = String.fromCharCode(109,97,100,101,98,121,95,50,95,53,55,0);
    let carouselg = new Map([[String.fromCharCode(108,95,49,51,95,109,111,100,98,0),true ], [String.fromCharCode(121,95,49,48,48,95,101,120,116,101,110,116,0),false ]]);
    let runtimescheduler7 = [561, 486, 52];
    let questicon4 = 5;
    let awayU = [753, 629, 702];
    let chinaF = String.fromCharCode(100,105,118,95,52,95,57,49,0);
    let middleH = new Map([[String.fromCharCode(101,120,112,97,110,100,95,104,95,50,54,0),true ], [String.fromCharCode(100,111,110,116,95,115,95,51,53,0),true ], [String.fromCharCode(101,95,51,57,95,105,116,101,114,97,116,105,111,110,0),false ]]);
    let iconchatsend5 = 3;
    let libcxxcomponentsL = 3.0;
      fileB = new Map([[`${carouselg.size}`, carouselg.size % 3]]);
      arrowe += `${carouselg.size % (Math.max(2, 8))}`;

  switch (type) {
      case onBannerLoaded:
      case onBannerFail:
      case onBannerCloseButtonTapped:
      case onBannerClick:
      case onBannerShow:
      case onBannerRefresh:
      case onBannerRefreshFail:
        removeAdListener(type);
   if (4 < (arrowe.length & runtimescheduler7.length)) {
       let indexs = String.fromCharCode(98,95,53,56,95,119,104,105,116,101,115,112,97,99,101,0);
       let notificationfillemptyX = String.fromCharCode(109,95,51,95,99,109,111,118,101,0);
       let libavfilter4 = String.fromCharCode(116,95,50,95,103,114,111,117,112,115,0);
       let miniB = 4;
       let icontransferclubp = true;
      for (let o = 0; o < 1; o++) {
         notificationfillemptyX = `${(String.fromCharCode(66,0) == indexs ? (icontransferclubp ? 2 : 2) : indexs.length)}`;
      }
         miniB /= Math.max(1, miniB);
       let orangedownarrowy = 0.0;
       let zhengpianv = 1.0;
         icontransferclubp = (notificationfillemptyX.length * parseInt(`${orangedownarrowy}`)) == 19;
         indexs += `${parseInt(`${zhengpianv}`)}`;
         indexs += "3";
         icontransferclubp = orangedownarrowy == 93.18 && miniB == 20;
      do {
         orangedownarrowy -= 3;
         if (3569324.0 == orangedownarrowy) {
            break;
         }
      } while (((parseInt(`${orangedownarrowy}`) - notificationfillemptyX.length) >= 5) && (3569324.0 == orangedownarrowy));
      do {
          let reminder4 = new Map([[String.fromCharCode(113,95,53,52,95,109,98,117,102,115,0),808], [String.fromCharCode(100,101,108,111,103,111,95,101,95,53,51,0),211], [String.fromCharCode(99,95,55,56,95,97,117,116,104,101,110,116,104,105,99,97,116,101,0),836]]);
          let a_viewA = String.fromCharCode(97,118,97,116,97,114,115,95,49,95,50,57,0);
         icontransferclubp = 80 >= notificationfillemptyX.length;
         reminder4[`${a_viewA}`] = 2 | reminder4.size;
         a_viewA = `${(String.fromCharCode(113,0) == a_viewA ? reminder4.size : a_viewA.length)}`;
         if (icontransferclubp ? !icontransferclubp : icontransferclubp) {
            break;
         }
      } while ((3.49 <= (1.40 + zhengpianv) || 1.40 <= zhengpianv) && (icontransferclubp ? !icontransferclubp : icontransferclubp));
      if (2 <= libavfilter4.length || !icontransferclubp) {
         icontransferclubp = 6 == indexs.length || notificationfillemptyX.length == 6;
      }
      while (notificationfillemptyX == String.fromCharCode(55,0)) {
          let weibo0 = true;
         libavfilter4 = `${notificationfillemptyX.length | libavfilter4.length}`;
         weibo0 = !weibo0;
         break;
      }
      arrowe = `${runtimescheduler7.length}`;
   }
   while (awayU.includes(runtimescheduler7.length)) {
      runtimescheduler7.push(arrowe.length);
      break;
   }

        ATBannerEventEmitter.addListener(type, handler);
       let kuaishouG = String.fromCharCode(102,95,51,48,95,114,101,100,0);
       let adultK = 1.0;
      for (let c = 0; c < 1; c++) {
         adultK *= 3 << (Math.min(3, Math.abs(parseInt(`${adultK}`))));
      }
      do {
         kuaishouG = `${kuaishouG.length * parseInt(`${adultK}`)}`;
         if (kuaishouG == String.fromCharCode(115,106,118,97,0)) {
            break;
         }
      } while ((parseInt(`${adultK}`) >= kuaishouG.length) && (kuaishouG == String.fromCharCode(115,106,118,97,0)));
         adultK *= 3 << (Math.min(3, kuaishouG.length));
         kuaishouG += `${parseInt(`${adultK}`) ^ kuaishouG.length}`;
      for (let z = 0; z < 3; z++) {
          let baiduadsK = 1.0;
          let iconeyer = [205, 775];
          let modelsp = 0;
         kuaishouG = `${3 + iconeyer.length}`;
         baiduadsK -= modelsp;
         iconeyer = [parseInt(`${baiduadsK}`)];
         modelsp += parseInt(`${baiduadsK}`) / 2;
      }
      for (let r = 0; r < 3; r++) {
         kuaishouG += "1";
      }
      arrowe = `${awayU.length}`;
   if ((carouselg.size - 1) <= 4) {
      carouselg[`${arrowe}`] = arrowe.length;
   }

        break;
   while (3 < (1 + carouselg.size) && 3 < (carouselg.size + 1)) {
      carouselg = new Map([[`${awayU.length}`, awayU.length - 3]]);
      break;
   }
       let videoY = [956, 622, 581];
       let mimor = true;
       let cornerkick_ = 1;
       let arrowrightwithtaila = String.fromCharCode(103,114,101,101,116,105,110,103,95,118,95,51,0);
          let playercommonB = 4.0;
         mimor = playercommonB < 14.97 && arrowrightwithtaila == String.fromCharCode(106,0);
      do {
         cornerkick_ |= ((mimor ? 5 : 4) ^ videoY.length);
         if (4028878 == cornerkick_) {
            break;
         }
      } while (((1 ^ cornerkick_) > 3 || (1 ^ videoY.length) > 1) && (4028878 == cornerkick_));
      do {
         cornerkick_ -= 2 - cornerkick_;
         if (cornerkick_ == 1254030) {
            break;
         }
      } while ((cornerkick_ == 1254030) && (videoY.includes(cornerkick_)));
         cornerkick_ |= 2;
      for (let m = 0; m < 1; m++) {
         mimor = (21 <= ((!mimor ? arrowrightwithtaila.length : 21) - arrowrightwithtaila.length));
      }
          let annerj = new Map([[String.fromCharCode(113,95,50,56,95,104,119,102,114,97,109,101,0),String.fromCharCode(114,101,99,101,105,118,105,110,103,95,97,95,56,53,0)], [String.fromCharCode(120,95,56,56,95,117,110,98,105,110,100,0),String.fromCharCode(119,114,106,112,103,99,111,109,95,118,95,52,48,0)], [String.fromCharCode(109,111,111,118,95,116,95,51,51,0),String.fromCharCode(100,95,53,53,95,119,114,105,116,101,120,0)]]);
         arrowrightwithtaila = "2";
         annerj = new Map([[`${annerj.size}`, 2]]);
          let penaltyshootz = 3;
          let disconnectedlogor = String.fromCharCode(106,95,55,56,95,110,117,109,98,101,114,115,0);
          let changer = true;
         cornerkick_ >>= Math.min(3, videoY.length);
         penaltyshootz <<= Math.min(Math.abs((String.fromCharCode(81,0) == disconnectedlogor ? (changer ? 4 : 2) : disconnectedlogor.length)), 1);
         changer = (disconnectedlogor.length ^ penaltyshootz) <= 92;
      if (1 <= videoY.length) {
         mimor = arrowrightwithtaila == String.fromCharCode(77,0);
      }
      carouselg = new Map([[`${mimor}`, cornerkick_ + 3]]);

      default:
        console.log(`Event with type ${type} does not exist.`);
      chinaF = "2";
      carouselg[chinaF] = fileB.size;

    }
};

const removeAdListener = (type) => {
       let rulesk = true;
    let bootsplashT = String.fromCharCode(109,95,53,51,95,101,110,116,101,114,101,100,0);
    let rootY = String.fromCharCode(114,95,53,57,95,97,118,97,105,108,97,98,105,108,105,116,121,0);
    let basketballiconG = 1.0;
    let soundx = 1.0;
    let episodeg = String.fromCharCode(110,95,52,95,104,115,116,114,105,110,103,0);
    let lineW = 5.0;
    let reducer4 = 2.0;
    let liveshareK = 2.0;
   if (2.94 > (3.59 / (Math.max(7, basketballiconG))) && 3.59 > (liveshareK / (Math.max(10, basketballiconG)))) {
       let relatedG = String.fromCharCode(113,95,50,51,95,109,97,116,99,104,101,115,0);
         relatedG += `${3 + relatedG.length}`;
          let selectk = String.fromCharCode(114,116,112,119,95,108,95,51,53,0);
         relatedG += "3";
         selectk += `${1 & selectk.length}`;
      do {
         relatedG = `${relatedG.length}`;
         if (relatedG.length == 4469171) {
            break;
         }
      } while ((relatedG.length == 4469171) && (3 == relatedG.length));
      liveshareK *= 1;
   }
   if ((5 * soundx) < 5.45) {
      basketballiconG += parseFloat(`${parseInt(`${liveshareK}`)}`);
   }
   while (bootsplashT.length > rootY.length) {
       let homeactiveC = 5;
       let faviconC = 2;
      for (let l = 0; l < 1; l++) {
         homeactiveC /= Math.max(faviconC, 4);
      }
         faviconC *= homeactiveC;
         homeactiveC >>= Math.min(4, Math.abs(homeactiveC | 3));
          let mounting7 = String.fromCharCode(99,95,49,57,95,115,117,101,108,111,0);
         faviconC += 1;
         mounting7 += `${mounting7.length / (Math.max(4, mounting7.length))}`;
      for (let w = 0; w < 3; w++) {
         faviconC >>= Math.min(1, Math.abs(homeactiveC >> (Math.min(2, Math.abs(faviconC)))));
      }
      for (let a = 0; a < 3; a++) {
          let predictionarrowV = false;
          let mbbidK = 1;
          let valuest = true;
          let graphicsu = [438, 641];
          let nativez = String.fromCharCode(101,120,112,111,114,116,95,108,95,48,0);
         homeactiveC |= homeactiveC << (Math.min(Math.abs(faviconC), 3));
         predictionarrowV = !valuest || 62 > mbbidK;
         mbbidK <<= Math.min(5, Math.abs(((valuest ? 2 : 2))));
         graphicsu.push(graphicsu.length / (Math.max(2, 3)));
         nativez += `${graphicsu.length}`;
      }
      rootY += `${rootY.length % (Math.max(2, parseInt(`${reducer4}`)))}`;
      break;
   }
   do {
      episodeg = `${1 & parseInt(`${liveshareK}`)}`;
      if (episodeg == String.fromCharCode(112,118,118,57,0)) {
         break;
      }
   } while ((rootY.length > episodeg.length) && (episodeg == String.fromCharCode(112,118,118,57,0)));
      basketballiconG /= Math.max(5, parseFloat(`${rootY.length * 2}`));
   while (lineW < reducer4) {
      lineW += (String.fromCharCode(71,0) == bootsplashT ? bootsplashT.length : (rulesk ? 4 : 4));
      break;
   }
      liveshareK += 3 - episodeg.length;
      reducer4 += 2 / (Math.max(5, episodeg.length));
   if ((soundx / 5) > 5.93) {
      reducer4 /= Math.max(2, episodeg.length);
   }
      rulesk = basketballiconG == 74.6;
      lineW -= parseInt(`${soundx}`) / 1;
      episodeg = `${parseInt(`${basketballiconG}`)}`;
      rulesk = (25 < ((rulesk ? 25 : bootsplashT.length) >> (Math.min(bootsplashT.length, 5))));
       let imagesX = String.fromCharCode(120,95,53,52,95,99,108,111,115,101,99,98,0);
       let defaultteamy = String.fromCharCode(116,97,105,108,95,105,95,51,48,0);
       let hoverw = String.fromCharCode(114,97,105,116,95,54,95,54,53,0);
       let iconarrowrightn = [String.fromCharCode(114,97,110,115,102,111,114,109,101,114,95,111,95,55,55,0), String.fromCharCode(117,95,49,95,117,110,97,108,105,103,110,101,100,0)];
       let tickedd = [676, 132, 613];
         iconarrowrightn = [2];
      for (let t = 0; t < 3; t++) {
         imagesX = `${(String.fromCharCode(74,0) == defaultteamy ? hoverw.length : defaultteamy.length)}`;
      }
       let iconarrowrightwhiteP = new Map([[String.fromCharCode(115,95,56,53,95,98,108,111,99,107,100,99,0),String.fromCharCode(109,95,53,55,95,100,97,116,97,114,0)], [String.fromCharCode(119,95,52,53,95,119,97,105,116,105,110,103,0),String.fromCharCode(99,95,51,57,95,114,101,97,100,113,0)], [String.fromCharCode(116,95,53,51,95,110,105,101,108,115,97,100,100,0),String.fromCharCode(103,95,57,53,95,97,105,114,105,110,103,0)]]);
       let downloadz = new Map([[String.fromCharCode(100,101,115,99,114,105,98,101,95,106,95,51,49,0),273], [String.fromCharCode(110,95,51,95,99,112,117,105,110,102,111,0),444], [String.fromCharCode(98,105,116,109,97,112,95,98,95,53,48,0),134]]);
         iconarrowrightwhiteP = new Map([[`${iconarrowrightwhiteP.size}`, iconarrowrightwhiteP.size]]);
      for (let v = 0; v < 3; v++) {
          let progressV = false;
          let scrollviewD = String.fromCharCode(121,95,52,49,95,97,112,112,101,110,100,105,110,103,0);
          let defaultteamZ = String.fromCharCode(103,95,56,55,95,105,110,115,101,114,116,105,111,110,115,0);
          let matchesH = [String.fromCharCode(105,95,49,56,95,116,114,97,110,115,105,116,105,111,110,105,110,103,0), String.fromCharCode(104,95,53,55,95,97,108,101,114,116,115,0), String.fromCharCode(110,111,116,101,115,95,101,95,54,52,0)];
         iconarrowrightwhiteP = new Map([[hoverw, defaultteamy.length * hoverw.length]]);
         progressV = defaultteamZ.length == 81;
         scrollviewD = `${((progressV ? 1 : 1) % 1)}`;
         defaultteamZ = `${(matchesH.length >> (Math.min(4, Math.abs((progressV ? 1 : 3)))))}`;
         matchesH = [defaultteamZ.length & 2];
      }
         tickedd.push(2);
      for (let q = 0; q < 2; q++) {
         hoverw += `${downloadz.size - 3}`;
      }
          let policyl = String.fromCharCode(101,95,56,55,95,115,109,97,108,108,0);
          let indicatorG = String.fromCharCode(97,100,100,107,101,121,95,105,95,53,51,0);
          let libavfiltern = [572, 466];
         iconarrowrightwhiteP = new Map([[`${iconarrowrightn.length}`, 2]]);
         policyl += `${1 >> (Math.min(3, libavfiltern.length))}`;
         indicatorG += `${policyl.length}`;
         libavfiltern = [3];
      rootY = `${defaultteamy.length}`;
   while (5.66 > (1.46 - soundx) && 3.7 > (1.46 - reducer4)) {
       let episodesY = 4.0;
       let activityD = String.fromCharCode(115,116,114,101,97,109,104,101,97,100,101,114,95,50,95,50,49,0);
       let klevinH = 0.0;
       let goallogoA = String.fromCharCode(105,110,116,101,114,97,99,116,105,118,101,95,57,95,49,51,0);
      if (5 > (1 * goallogoA.length) && (1 - goallogoA.length) > 4) {
          let canvasB = 2.0;
         goallogoA = `${parseInt(`${klevinH}`)}`;
         canvasB += parseFloat(`${3}`);
      }
       let promotionr = 1.0;
          let floatingl = String.fromCharCode(109,101,116,104,111,100,115,95,118,95,57,51,0);
          let pathb = 1.0;
          let awayiconX = String.fromCharCode(97,95,50,57,95,116,114,97,110,115,99,111,100,101,0);
         episodesY -= parseFloat(`${3 - parseInt(`${promotionr}`)}`);
         floatingl += `${parseInt(`${pathb}`)}`;
         pathb /= Math.max((floatingl == String.fromCharCode(90,0) ? floatingl.length : parseInt(`${pathb}`)), 4);
         awayiconX = `${parseInt(`${pathb}`)}`;
          let country2 = true;
          let iconclosewhitewithbgO = 0.0;
          let coreD = 0;
         episodesY /= Math.max(parseFloat(`${2 + parseInt(`${iconclosewhitewithbgO}`)}`), 4);
         country2 = coreD > 86 || country2;
         iconclosewhitewithbgO *= 1 / (Math.max(5, coreD));
          let favorite0 = true;
          let buildt = [2, 24];
          let combineH = String.fromCharCode(115,111,105,115,100,105,115,99,111,110,110,101,99,116,105,110,103,95,100,95,55,56,0);
         promotionr /= Math.max(3, 4);
         favorite0 = combineH.length < 20 || !favorite0;
         buildt = [buildt.length / (Math.max(2, 2))];
         combineH += `${(3 ^ (favorite0 ? 3 : 4))}`;
      for (let u = 0; u < 3; u++) {
         activityD += `${2 + goallogoA.length}`;
      }
          let closen = 1;
         episodesY += parseFloat(`${parseInt(`${klevinH}`) * goallogoA.length}`);
         closen += closen - closen;
         promotionr /= Math.max(goallogoA.length, 4);
      if ((2 % (Math.max(10, activityD.length))) > 4 && (1.37 * promotionr) > 2.77) {
         promotionr -= parseInt(`${klevinH}`);
      }
       let predictioni = 2.0;
       let shared2 = String.fromCharCode(100,95,52,95,114,101,116,97,105,110,0);
         shared2 = `${(String.fromCharCode(103,0) == activityD ? parseInt(`${episodesY}`) : activityD.length)}`;
      soundx += 1;
      break;
   }

 ATBannerEventEmitter.removeAllListeners(type);
       let videojsP = String.fromCharCode(120,95,53,57,95,101,109,105,116,0);
       let splashE = new Map([[String.fromCharCode(100,95,49,52,0),String.fromCharCode(118,95,49,55,95,104,97,112,113,97,0)], [String.fromCharCode(106,95,51,49,95,114,101,115,116,97,107,101,0),String.fromCharCode(119,101,120,112,97,110,100,95,55,95,53,53,0)]]);
       let gpayq = new Map([[String.fromCharCode(112,115,121,109,111,100,101,108,95,113,95,53,52,0),true ], [String.fromCharCode(107,101,101,112,95,53,95,54,0),true ]]);
         gpayq = new Map([[`${splashE.size}`, splashE.size & 3]]);
       let libturbomodulejsijnin = String.fromCharCode(101,95,49,48,48,95,110,101,97,114,101,114,0);
       let whitebellQ = String.fromCharCode(114,101,116,114,105,101,100,95,48,95,52,53,0);
      while ((whitebellQ.length & splashE.size) > 1) {
          let linkN = 3.0;
          let nendf = String.fromCharCode(105,100,101,110,116,105,102,105,97,98,108,101,95,119,95,50,51,0);
          let textlayoutmanager_ = String.fromCharCode(113,95,53,52,95,115,116,114,101,97,109,99,111,112,121,0);
          let sharev = String.fromCharCode(117,95,55,53,95,109,98,112,111,115,116,0);
         splashE = new Map([[`${linkN}`, nendf.length ^ 3]]);
         linkN /= Math.max(1, 1);
         nendf += `${2 * textlayoutmanager_.length}`;
         textlayoutmanager_ = `${2 - textlayoutmanager_.length}`;
         sharev = `${(String.fromCharCode(105,0) == textlayoutmanager_ ? sharev.length : textlayoutmanager_.length)}`;
         break;
      }
      for (let v = 0; v < 2; v++) {
         splashE = new Map([[`${gpayq.size}`, 3]]);
      }
      for (let u = 0; u < 1; u++) {
         libturbomodulejsijnin = `${libturbomodulejsijnin.length}`;
      }
      do {
         videojsP += `${libturbomodulejsijnin.length & gpayq.size}`;
         if (videojsP == String.fromCharCode(95,108,117,0)) {
            break;
         }
      } while ((videojsP == String.fromCharCode(95,108,117,0)) && (4 >= videojsP.length));
         videojsP = `${1 | gpayq.size}`;
         libturbomodulejsijnin = `${2 - libturbomodulejsijnin.length}`;
         gpayq = new Map([[`${splashE.size}`, 3]]);
      reducer4 -= (parseInt(`${reducer4}`) & (rulesk ? 1 : 3));
   do {
      episodeg += `${((rulesk ? 2 : 2) & parseInt(`${lineW}`))}`;
      if (episodeg.length == 3407347) {
         break;
      }
   } while ((episodeg.length == 3407347) && (1.38 == (liveshareK + 2.38) && 4 == (parseInt(`${liveshareK}`) + episodeg.length)));
   for (let s = 0; s < 2; s++) {
       let bodank = new Map([[String.fromCharCode(98,117,102,115,95,120,95,51,56,0),false ], [String.fromCharCode(99,111,111,107,100,97,116,97,95,107,95,56,48,0),true ]]);
       let const_gsb = 4.0;
      while (bodank[`${const_gsb}`] != null) {
          let humidityv = String.fromCharCode(104,95,56,56,95,97,116,97,99,101,110,116,101,114,0);
          let clocks = true;
          let actionz = String.fromCharCode(111,95,57,52,95,105,109,112,111,114,116,97,98,108,101,100,0);
         const_gsb *= 2;
         humidityv += `${((clocks ? 5 : 3) ^ humidityv.length)}`;
         clocks = !clocks || humidityv.length <= 18;
         actionz = `${((clocks ? 4 : 4) >> (Math.min(humidityv.length, 2)))}`;
         break;
      }
      while (1.60 == (const_gsb * 3.84)) {
         bodank[`${const_gsb}`] = 2 << (Math.min(5, Math.abs(bodank.size)));
         break;
      }
         bodank = new Map([[`${bodank.size}`, bodank.size]]);
         bodank[`${const_gsb}`] = parseInt(`${const_gsb}`) >> (Math.min(Math.abs(1), 4));
          let libcrashsdkg = new Map([[String.fromCharCode(99,117,114,118,101,95,109,95,50,48,0),true ], [String.fromCharCode(122,97,108,108,111,99,95,109,95,53,53,0),true ]]);
          let auto__d = new Map([[String.fromCharCode(121,118,116,111,117,121,118,121,95,117,95,53,56,0),true ], [String.fromCharCode(105,95,51,57,95,99,111,110,116,97,105,110,101,100,0),false ]]);
         bodank[`${const_gsb}`] = bodank.size;
         libcrashsdkg[`${libcrashsdkg.size}`] = 2 / (Math.max(2, auto__d.size));
         auto__d = new Map([[`${libcrashsdkg.size}`, auto__d.size]]);
      do {
         const_gsb /= Math.max(bodank.size, 3);
         if (347685.0 == const_gsb) {
            break;
         }
      } while (((5.47 - const_gsb) > 1.68) && (347685.0 == const_gsb));
      lineW *= rootY.length & 2;
   }
   for (let w = 0; w < 2; w++) {
      episodeg = `${((rulesk ? 2 : 5) * parseInt(`${liveshareK}`))}`;
   }
       let tick0 = true;
       let resultH = String.fromCharCode(115,95,55,51,95,114,101,112,111,0);
       let moviesm = new Map([[String.fromCharCode(118,112,99,120,95,100,95,49,48,0),true ], [String.fromCharCode(110,95,53,49,95,114,101,112,101,97,116,105,110,103,0),false ]]);
         resultH = "3";
         resultH = `${moviesm.size + resultH.length}`;
      if (!tick0) {
         tick0 = !resultH.endsWith(`${tick0}`);
      }
       let specV = String.fromCharCode(98,95,56,57,95,109,117,108,116,105,112,97,114,116,0);
       let whitesmalltick9 = String.fromCharCode(114,101,99,111,109,112,111,115,101,95,102,95,56,52,0);
      do {
         whitesmalltick9 += "1";
         if (String.fromCharCode(104,113,99,0) == whitesmalltick9) {
            break;
         }
      } while ((String.fromCharCode(104,113,99,0) == whitesmalltick9) && (!tick0 && 4 == whitesmalltick9.length));
         resultH = `${((tick0 ? 3 : 4) + 1)}`;
         resultH += `${whitesmalltick9.length}`;
      if ((5 * resultH.length) == 4 && (moviesm.size * 5) == 1) {
          let incident2 = 3.0;
          let containerB = String.fromCharCode(106,97,99,111,98,105,95,112,95,54,56,0);
          let bottom2 = String.fromCharCode(103,95,55,55,95,115,105,103,105,108,108,0);
         resultH += `${1 + containerB.length}`;
         incident2 -= parseInt(`${incident2}`);
         containerB += `${bottom2.length}`;
         bottom2 += `${parseInt(`${incident2}`) & 3}`;
      }
       let customV = String.fromCharCode(120,95,51,95,108,122,109,97,0);
      reducer4 *= parseInt(`${soundx}`);
       let largesoundc = [String.fromCharCode(102,114,111,110,116,95,57,95,52,57,0), String.fromCharCode(99,95,49,53,95,112,104,111,116,111,0)];
       let saveD = 4;
       let basketballtrophym = 5;
      while ((saveD - 5) < 2 || (5 - largesoundc.length) < 2) {
         largesoundc = [1 % (Math.max(3, saveD))];
         break;
      }
          let iconarrowrightoranger = new Map([[String.fromCharCode(121,95,54,50,95,116,101,114,109,105,110,97,116,105,111,110,0),String.fromCharCode(97,95,52,51,95,104,121,98,114,105,100,0)], [String.fromCharCode(98,110,98,105,110,95,109,95,52,52,0),String.fromCharCode(102,95,52,55,95,117,110,105,102,111,114,109,115,0)], [String.fromCharCode(102,95,54,48,95,101,112,108,121,0),String.fromCharCode(105,95,55,57,95,99,116,114,120,0)]]);
          let starH = String.fromCharCode(119,101,98,102,105,108,101,95,108,95,53,51,0);
          let awayteamfieldn = 2.0;
         saveD %= Math.max(2 ^ basketballtrophym, 1);
         iconarrowrightoranger = new Map([[starH, 2]]);
         starH = `${(starH == String.fromCharCode(85,0) ? starH.length : iconarrowrightoranger.size)}`;
         awayteamfieldn /= Math.max(parseInt(`${awayteamfieldn}`), 3);
      rulesk = bootsplashT == String.fromCharCode(87,0) && liveshareK >= 52.9;
   for (let o = 0; o < 3; o++) {
      rootY = `${((rulesk ? 1 : 3) & parseInt(`${basketballiconG}`))}`;
   }
   if (lineW == 4.47) {
      lineW += parseInt(`${reducer4}`) ^ parseInt(`${liveshareK}`);
   }
   do {
      soundx -= parseInt(`${basketballiconG}`) ^ episodeg.length;
      if (soundx == 2057081.0) {
         break;
      }
   } while ((2.20 == soundx) && (soundx == 2057081.0));
   while (2.91 <= (reducer4 / 3.56) && (reducer4 / 3.56) <= 2.99) {
       let referrerX = [516, 287, 788];
       let stepQ = false;
       let champion0 = String.fromCharCode(102,95,51,49,95,105,110,105,116,105,97,108,0);
      while (!stepQ) {
         stepQ = referrerX.length > 89 || !stepQ;
         break;
      }
      do {
          let dependency3 = String.fromCharCode(104,95,50,52,95,100,105,115,97,112,112,101,97,114,101,100,0);
          let liveendmodallogoL = 0.0;
         referrerX.push(1);
         dependency3 += `${dependency3.length ^ 1}`;
         liveendmodallogoL /= Math.max(3, 3);
         if (2467556 == referrerX.length) {
            break;
         }
      } while ((!stepQ) && (2467556 == referrerX.length));
      do {
         referrerX.push(((stepQ ? 4 : 1)));
         if (2988187 == referrerX.length) {
            break;
         }
      } while ((2988187 == referrerX.length) && (!stepQ));
          let materialt = String.fromCharCode(112,111,115,116,98,111,120,95,101,95,52,48,0);
          let types5 = 1.0;
         champion0 += "1";
         materialt = `${parseInt(`${types5}`)}`;
         types5 *= 1;
          let storen = 1;
          let shirtb = String.fromCharCode(117,110,99,104,97,110,103,101,100,95,55,95,56,49,0);
         stepQ = !stepQ;
         storen -= shirtb.length;
         shirtb += `${storen}`;
          let resultG = String.fromCharCode(116,105,110,105,116,95,51,95,52,0);
          let twitter2 = 5.0;
         referrerX = [2];
         resultG += `${1 >> (Math.min(3, Math.abs(parseInt(`${twitter2}`))))}`;
         twitter2 *= parseFloat(`${3}`);
      while (champion0.length > 1) {
         champion0 += `${((stepQ ? 3 : 2) % (Math.max(1, 2)))}`;
         break;
      }
          let smallorangemanW = true;
         stepQ = !smallorangemanW;
      for (let w = 0; w < 3; w++) {
          let rewindA = String.fromCharCode(108,95,52,48,95,100,117,114,98,0);
         stepQ = (((!stepQ ? 60 : champion0.length) + champion0.length) >= 60);
         rewindA = `${(rewindA == String.fromCharCode(85,0) ? rewindA.length : rewindA.length)}`;
      }
      episodeg = `${parseInt(`${soundx}`)}`;
      break;
   }
      lineW /= Math.max(parseInt(`${soundx}`), 2);
   if (episodeg == String.fromCharCode(78,0)) {
       let bottomH = 1.0;
       let bgvipsportW = [724, 459, 135];
       let emojiheartt = [917, 531];
      for (let s = 0; s < 2; s++) {
         bottomH *= 3 | bgvipsportW.length;
      }
         bottomH -= 1;
      while (1.9 > (emojiheartt.length * bottomH)) {
         emojiheartt = [bgvipsportW.length % 2];
         break;
      }
      for (let e = 0; e < 2; e++) {
         emojiheartt = [bgvipsportW.length >> (Math.min(Math.abs(1), 2))];
      }
      for (let k = 0; k < 3; k++) {
         bgvipsportW = [bgvipsportW.length];
      }
          let small5 = true;
          let stationsF = 2.0;
          let basketballh = String.fromCharCode(105,95,50,49,95,112,97,103,101,115,101,101,107,0);
         bottomH -= ((small5 ? 1 : 2) - parseInt(`${stationsF}`));
         small5 = 77 > basketballh.length;
         stationsF /= Math.max(basketballh.length - 3, 5);
         bgvipsportW.push(3);
         bgvipsportW = [bgvipsportW.length];
      while (emojiheartt.length <= 3) {
          let targetI = 1.0;
          let iconnotificationnewN = String.fromCharCode(117,110,105,118,101,114,115,97,108,95,120,95,51,52,0);
          let coreW = String.fromCharCode(97,95,49,48,95,109,111,110,111,0);
          let iconnotificationnewy = String.fromCharCode(114,95,54,49,95,108,97,118,102,105,0);
         emojiheartt = [1];
         targetI -= iconnotificationnewN.length ^ parseInt(`${targetI}`);
         iconnotificationnewN += `${parseInt(`${targetI}`) ^ 2}`;
         coreW = `${parseInt(`${targetI}`)}`;
         iconnotificationnewy = `${parseInt(`${targetI}`)}`;
         break;
      }
      bootsplashT += `${episodeg.length}`;
   }
      episodeg = `${episodeg.length + 3}`;
   do {
      lineW += parseInt(`${lineW}`) | parseInt(`${basketballiconG}`);
      if (lineW == 1570985.0) {
         break;
      }
   } while ((lineW == 1570985.0) && (4.71 > (lineW / 1.58)));
      rulesk = 16.18 >= (basketballiconG - lineW);

};

const removeAllListeners = () => {
       let terms9 = 2.0;
    let iconwechatC = 2.0;
    let libavutilq = false;
    let executorK = String.fromCharCode(114,101,97,115,111,110,95,108,95,51,49,0);
    let privilegez = [String.fromCharCode(99,97,110,111,112,117,115,95,99,95,49,49,0), String.fromCharCode(113,95,54,56,95,101,120,116,114,97,100,97,116,97,112,115,101,116,115,0)];
    let private_6rh = String.fromCharCode(116,95,54,52,95,113,117,101,114,105,101,115,0);
    let java1 = String.fromCharCode(106,118,101,114,115,105,111,110,95,122,95,57,57,0);
    let showmorel = false;
    let windF = 1.0;
   for (let r = 0; r < 3; r++) {
      java1 += `${parseInt(`${terms9}`) | 3}`;
   }
   while (iconwechatC <= terms9) {
      iconwechatC /= Math.max(5, ((showmorel ? 4 : 4)));
      break;
   }
      terms9 += ((showmorel ? 4 : 2) / 1);

  ATBannerEventEmitter.removeAllListeners(onBannerLoaded);
      executorK = `${(2 * (libavutilq ? 2 : 3))}`;
   for (let h = 0; h < 1; h++) {
      terms9 += java1.length * executorK.length;
   }
   for (let k = 0; k < 2; k++) {
      iconwechatC += java1.length + parseInt(`${iconwechatC}`);
   }

  ATBannerEventEmitter.removeAllListeners(onBannerFail);
   while (libavutilq) {
      libavutilq = (private_6rh.length & java1.length) == 8;
      break;
   }
      executorK += `${(parseInt(`${iconwechatC}`) | (libavutilq ? 4 : 4))}`;
      terms9 -= private_6rh.length;

  ATBannerEventEmitter.removeAllListeners(onBannerCloseButtonTapped);
   if ((4.100 + iconwechatC) == 3.54 && libavutilq) {
      iconwechatC *= 1 * parseInt(`${iconwechatC}`);
   }
   while ((2 - privilegez.length) >= 1) {
      iconwechatC += parseInt(`${terms9}`);
      break;
   }
      private_6rh += `${parseInt(`${terms9}`) ^ 1}`;

  ATBannerEventEmitter.removeAllListeners(onBannerClick);
   while (iconwechatC >= private_6rh.length) {
      iconwechatC /= Math.max(executorK.length, 4);
      break;
   }
   while (private_6rh.length <= 1) {
       let defaultroombgX = 2;
       let greenarrowup_ = 3.0;
       let morew = 2.0;
       let gray2 = String.fromCharCode(115,95,51,49,95,98,108,99,107,0);
          let n_playern = [505, 724, 626];
          let vietnamd = String.fromCharCode(98,116,111,98,105,110,95,50,95,53,48,0);
         defaultroombgX /= Math.max(1, 5);
         n_playern.push(vietnamd.length - n_playern.length);
         vietnamd += `${(vietnamd == String.fromCharCode(51,0) ? n_playern.length : vietnamd.length)}`;
      while (3 == (gray2.length << (Math.min(1, Math.abs(defaultroombgX))))) {
         defaultroombgX <<= Math.min(Math.abs(parseInt(`${greenarrowup_}`)), 3);
         break;
      }
      do {
         morew *= parseFloat(`${gray2.length | parseInt(`${morew}`)}`);
         if (444257.0 == morew) {
            break;
         }
      } while ((2.38 <= (4.68 + morew) && (gray2.length | 2) <= 1) && (444257.0 == morew));
      if (gray2.includes(`${defaultroombgX}`)) {
          let sorth = String.fromCharCode(97,109,112,108,105,102,121,95,52,95,50,55,0);
          let basketballmatchdetailbgK = true;
          let hooksW = String.fromCharCode(99,95,50,57,95,105,115,112,111,114,116,0);
         gray2 += `${parseInt(`${greenarrowup_}`) | hooksW.length}`;
         sorth += `${(1 + (basketballmatchdetailbgK ? 5 : 1))}`;
         basketballmatchdetailbgK = !basketballmatchdetailbgK;
         hooksW += `${2 >> (Math.min(5, sorth.length))}`;
      }
      if (3 > (gray2.length + parseInt(`${morew}`)) || 5 > (gray2.length + 3)) {
          let sharedG = 5;
          let basketballmatchdetailbgH = String.fromCharCode(100,95,50,54,95,112,97,115,116,101,108,0);
          let smallbrightnessZ = false;
         morew += (parseFloat(`${String.fromCharCode(74,0) == gray2 ? sharedG : gray2.length}`));
         sharedG ^= basketballmatchdetailbgH.length % 3;
         basketballmatchdetailbgH = `${((smallbrightnessZ ? 2 : 1) | 3)}`;
      }
       let icondownimgI = true;
         gray2 += `${gray2.length - 3}`;
       let becomeN = [String.fromCharCode(110,95,49,50,95,110,115,117,105,0), String.fromCharCode(122,95,49,54,95,115,104,111,114,116,99,117,116,115,0)];
       let whitebelln = [262, 410];
      if (4.29 >= morew) {
          let iconeyeu = true;
         gray2 += `${(gray2 == String.fromCharCode(80,0) ? (icondownimgI ? 3 : 2) : gray2.length)}`;
         iconeyeu = !iconeyeu || !iconeyeu;
      }
      if (5.42 < (greenarrowup_ + whitebelln.length)) {
         greenarrowup_ -= (parseInt(`${greenarrowup_}`) + (icondownimgI ? 4 : 1));
      }
      do {
          let episodesp = String.fromCharCode(112,95,51,0);
          let eventt = String.fromCharCode(107,95,53,55,95,116,118,100,99,0);
          let redgoald = 0.0;
         whitebelln.push(3 + parseInt(`${morew}`));
         episodesp += `${(String.fromCharCode(68,0) == eventt ? parseInt(`${redgoald}`) : eventt.length)}`;
         redgoald *= parseFloat(`${eventt.length + parseInt(`${redgoald}`)}`);
         if (whitebelln.length == 4619266) {
            break;
         }
      } while ((gray2.length < whitebelln.length) && (whitebelln.length == 4619266));
         icondownimgI = (defaultroombgX * whitebelln.length) < 15;
      private_6rh += `${privilegez.length}`;
      break;
   }
   while ((4.20 + terms9) <= 4.88 || (4.20 / (Math.max(10, iconwechatC))) <= 4.88) {
      iconwechatC /= Math.max(3, private_6rh.length >> (Math.min(2, privilegez.length)));
      break;
   }

  ATBannerEventEmitter.removeAllListeners(onBannerShow);
   if (private_6rh.length >= 5) {
      private_6rh = `${parseInt(`${terms9}`) % 3}`;
   }
   for (let s = 0; s < 3; s++) {
       let bingV = [String.fromCharCode(103,95,51,49,95,97,112,112,115,0), String.fromCharCode(100,105,102,95,102,95,54,48,0)];
       let with_o3b = 1.0;
       let loadingspinnerK = [831, 358, 302];
       let gemfilek = String.fromCharCode(121,95,56,53,95,115,111,98,101,108,0);
       let combinedZ = 2.0;
          let fillh = 4.0;
          let huaweiJ = String.fromCharCode(114,95,55,54,95,116,114,105,97,110,103,108,101,0);
          let largebrightnessw = String.fromCharCode(110,98,105,116,115,95,115,95,56,56,0);
         bingV = [2];
         fillh += parseFloat(`${2 | huaweiJ.length}`);
         huaweiJ = `${huaweiJ.length}`;
         largebrightnessw += "3";
         with_o3b += parseFloat(`${bingV.length}`);
      while (1.0 <= (loadingspinnerK.length + combinedZ) && 1.0 <= (combinedZ + loadingspinnerK.length)) {
         loadingspinnerK = [loadingspinnerK.length | 2];
         break;
      }
          let checkboxS = 2.0;
          let routerR = true;
          let positionfieldq = 2.0;
         bingV = [1];
         checkboxS /= Math.max(2, parseInt(`${positionfieldq}`));
         routerR = 38.23 > checkboxS && positionfieldq > 38.23;
      do {
         loadingspinnerK = [parseInt(`${with_o3b}`)];
         if (499514 == loadingspinnerK.length) {
            break;
         }
      } while (((2 * loadingspinnerK.length) > 5 || 1 > (2 * bingV.length)) && (499514 == loadingspinnerK.length));
      while (gemfilek.startsWith(`${combinedZ}`)) {
          let clubZ = String.fromCharCode(99,95,56,52,95,115,104,97,100,101,114,0);
         combinedZ /= Math.max(5, gemfilek.length >> (Math.min(2, Math.abs(parseInt(`${with_o3b}`)))));
         clubZ = `${(String.fromCharCode(73,0) == clubZ ? clubZ.length : clubZ.length)}`;
         break;
      }
      do {
         with_o3b *= parseFloat(`${2 | parseInt(`${with_o3b}`)}`);
         if (1661926.0 == with_o3b) {
            break;
         }
      } while ((1661926.0 == with_o3b) && (3.4 >= (with_o3b * 4.86) && (4 ^ bingV.length) >= 3));
      while ((parseInt(`${with_o3b}`) + gemfilek.length) == 2 && (parseFloat(`${gemfilek.length}`) + with_o3b) == 5.43) {
         gemfilek += "1";
         break;
      }
      while (!gemfilek.includes(`${combinedZ}`)) {
         gemfilek += `${(String.fromCharCode(101,0) == gemfilek ? gemfilek.length : bingV.length)}`;
         break;
      }
         gemfilek += `${loadingspinnerK.length | bingV.length}`;
          let overlayQ = String.fromCharCode(102,95,53,55,95,103,99,109,0);
          let dplus7 = String.fromCharCode(108,95,57,56,95,98,117,102,102,101,114,113,117,101,117,101,0);
          let robotoz = String.fromCharCode(110,95,49,56,95,114,111,119,105,100,0);
         combinedZ /= Math.max(3, loadingspinnerK.length);
         overlayQ = "3";
         dplus7 = `${1 & robotoz.length}`;
         robotoz += `${(String.fromCharCode(115,0) == robotoz ? robotoz.length : overlayQ.length)}`;
         combinedZ *= 3 ^ loadingspinnerK.length;
         loadingspinnerK.push(2);
          let libreactperfloggerjnim = true;
          let lessD = String.fromCharCode(116,121,112,101,100,95,55,95,50,55,0);
         with_o3b *= (parseFloat(`${lessD == String.fromCharCode(80,0) ? loadingspinnerK.length : lessD.length}`));
         libreactperfloggerjnim = !libreactperfloggerjnim;
      if (gemfilek.includes(`${combinedZ}`)) {
         combinedZ /= Math.max(2, 3);
      }
      java1 = `${gemfilek.length}`;
   }
   do {
       let emojik = String.fromCharCode(110,95,56,49,95,113,115,118,100,101,105,110,116,0);
       let z_playerD = String.fromCharCode(100,101,115,116,114,111,121,105,110,103,95,52,95,54,52,0);
       let largebrightnessC = true;
       let upgradeQ = String.fromCharCode(109,112,101,103,118,105,100,101,111,100,101,99,95,106,95,52,55,0);
          let m_view4 = String.fromCharCode(115,117,103,103,101,115,116,105,111,110,95,115,95,57,53,0);
         upgradeQ += `${upgradeQ.length}`;
         m_view4 = `${2 + m_view4.length}`;
      do {
         emojik += `${z_playerD.length | emojik.length}`;
         if (35972 == emojik.length) {
            break;
         }
      } while ((emojik != String.fromCharCode(117,0) || 5 == upgradeQ.length) && (35972 == emojik.length));
      do {
          let over9 = 3;
          let videovar4 = [430, 667];
          let debugZ = 4;
          let yellowcirclebgi = String.fromCharCode(118,95,57,51,95,97,110,97,110,100,97,110,0);
         z_playerD += `${1 | z_playerD.length}`;
         over9 -= videovar4.length / 1;
         videovar4.push(debugZ + yellowcirclebgi.length);
         debugZ %= Math.max(5, over9);
         yellowcirclebgi = `${3 << (Math.min(3, yellowcirclebgi.length))}`;
         if (z_playerD.length == 3910103) {
            break;
         }
      } while ((z_playerD.length == 3) && (z_playerD.length == 3910103));
      while (upgradeQ == String.fromCharCode(110,0)) {
         emojik += `${upgradeQ.length}`;
         break;
      }
         largebrightnessC = !largebrightnessC || emojik.length <= 93;
      for (let c = 0; c < 2; c++) {
         largebrightnessC = (z_playerD.length + emojik.length) == 22;
      }
      if (2 < emojik.length) {
         largebrightnessC = z_playerD.length >= 92;
      }
      do {
         upgradeQ = `${emojik.length}`;
         if (upgradeQ.length == 4083155) {
            break;
         }
      } while ((upgradeQ.length == 4083155) && (5 == upgradeQ.length));
      while (emojik.length == 3) {
         upgradeQ = `${z_playerD.length / (Math.max(1, 3))}`;
         break;
      }
       let pcopy_f6l = String.fromCharCode(115,95,56,57,95,111,99,107,105,110,103,0);
       let storeO = String.fromCharCode(116,95,52,50,95,116,101,108,101,103,114,97,0);
         z_playerD = "3";
      if (!largebrightnessC) {
         pcopy_f6l = `${((largebrightnessC ? 5 : 4))}`;
      }
      java1 = `${(parseInt(`${terms9}`) / (Math.max(9, (largebrightnessC ? 4 : 1))))}`;
      if (java1.length == 3694642) {
         break;
      }
   } while ((terms9 >= java1.length) && (java1.length == 3694642));

  ATBannerEventEmitter.removeAllListeners(onBannerRefresh);
      showmorel = terms9 <= 13.99;
      windF /= Math.max(parseFloat(`${parseInt(`${windF}`) - private_6rh.length}`), 3);
   if (5 > (privilegez.length ^ executorK.length) && 5 > (privilegez.length ^ executorK.length)) {
      executorK = `${(java1.length / (Math.max(3, (showmorel ? 1 : 5))))}`;
   }

  ATBannerEventEmitter.removeAllListeners(onBannerRefreshFail);
      java1 = `${((libavutilq ? 5 : 5))}`;
   if ((privilegez.length & 4) == 1 && 4 == privilegez.length) {
       let termsH = new Map([[String.fromCharCode(97,95,51,54,95,100,101,99,105,112,104,101,114,0),323], [String.fromCharCode(114,95,50,48,95,104,115,118,97,0),525], [String.fromCharCode(115,101,116,108,101,99,116,101,100,95,111,95,55,52,0),118]]);
       let anythinkb = new Map([[String.fromCharCode(112,117,98,108,105,99,95,119,95,50,49,0),false ], [String.fromCharCode(105,110,116,101,114,112,111,108,97,116,97,98,108,101,95,107,95,57,57,0),false ]]);
       let catalogo = new Map([[String.fromCharCode(112,115,102,98,95,104,95,55,51,0),String.fromCharCode(115,116,114,105,110,103,117,116,105,108,115,95,50,95,50,54,0)], [String.fromCharCode(105,110,111,100,101,115,95,52,95,54,53,0),String.fromCharCode(108,105,98,119,101,98,112,101,110,99,95,108,95,49,0)], [String.fromCharCode(115,111,99,97,110,116,115,101,110,100,109,111,114,101,95,51,95,54,55,0),String.fromCharCode(98,95,50,55,95,110,97,116,105,118,101,108,121,0)]]);
       let bingJ = String.fromCharCode(99,111,110,100,117,99,116,111,114,95,56,95,57,51,0);
       let logoutt = false;
         anythinkb = new Map([[`${logoutt}`, 3]]);
         catalogo = new Map([[`${anythinkb.size}`, catalogo.size % 1]]);
       let grayL = String.fromCharCode(110,95,49,54,95,99,116,97,98,108,101,115,0);
       let entryn = String.fromCharCode(109,95,51,54,95,112,114,105,110,116,97,98,108,101,0);
         logoutt = !logoutt;
      if (!grayL.includes(`${logoutt}`)) {
          let chinaR = String.fromCharCode(107,95,54,54,95,99,111,109,102,111,114,116,0);
          let circleT = 3.0;
         logoutt = bingJ.length < anythinkb.size;
         chinaR += `${chinaR.length}`;
         circleT -= parseFloat(`${3}`);
      }
      for (let d = 0; d < 1; d++) {
          let libswresampleS = 5.0;
         grayL = `${anythinkb.size << (Math.min(Math.abs(1), 1))}`;
         libswresampleS += parseFloat(`${parseInt(`${libswresampleS}`) << (Math.min(Math.abs(parseInt(`${libswresampleS}`)), 3))}`);
      }
      for (let f = 0; f < 2; f++) {
         entryn = `${(bingJ == String.fromCharCode(97,0) ? termsH.size : bingJ.length)}`;
      }
      for (let n = 0; n < 1; n++) {
         entryn += `${entryn.length / (Math.max(3, 9))}`;
      }
         grayL = `${anythinkb.size * bingJ.length}`;
       let memberf = new Map([[String.fromCharCode(108,95,56,50,95,99,108,105,99,107,0),String.fromCharCode(98,95,51,55,95,99,111,109,112,97,114,101,114,115,0)], [String.fromCharCode(98,95,54,51,95,104,121,112,104,101,110,97,116,101,100,0),String.fromCharCode(98,101,97,116,95,104,95,51,51,0)]]);
         bingJ += `${anythinkb.size}`;
         grayL = `${memberf.size - 1}`;
      for (let d = 0; d < 1; d++) {
         termsH[`${bingJ}`] = bingJ.length;
      }
         bingJ += `${termsH.size % (Math.max(memberf.size, 5))}`;
      do {
          let downarrowB = true;
          let xcopy_mtn = String.fromCharCode(113,95,52,54,95,104,111,115,116,110,97,109,101,0);
          let searchbarh = String.fromCharCode(108,95,52,53,95,112,105,120,102,109,116,115,0);
         entryn += `${grayL.length}`;
         downarrowB = searchbarh == String.fromCharCode(81,0) && xcopy_mtn.length >= 52;
         xcopy_mtn += `${xcopy_mtn.length}`;
         searchbarh += `${xcopy_mtn.length}`;
         if (entryn.length == 1738748) {
            break;
         }
      } while ((5 > entryn.length || grayL != String.fromCharCode(99,0)) && (entryn.length == 1738748));
      libavutilq = catalogo.size < termsH.size;
   }
      windF -= parseFloat(`${1}`);

}

function createLoadAdSize(width, height) {
       let trophy9 = true;
    let libjsijniprofilerw = 3.0;
    let scorepopsoundX = [155, 365];
    let icondefaultthumbnailN = 0.0;
    let homeiconZ = String.fromCharCode(114,101,102,115,95,119,95,52,53,0);
    let libfilem = 3.0;
    let unreadz = String.fromCharCode(105,95,56,53,95,99,117,116,111,117,116,0);
    let liveendmodallogov = 1.0;
    let predictionbuttonl = 1.0;
    let orangeticky = 1.0;
    let halffieldimageZ = 4.0;
       let iconadslinkN = true;
       let cnewarchdefaultsc = 1.0;
       let iconnewchatB = String.fromCharCode(107,97,108,109,97,110,95,121,95,49,52,0);
      for (let n = 0; n < 3; n++) {
          let orangeuparrowX = 0.0;
          let defaultplayerimgw = 1;
         cnewarchdefaultsc -= 2 | parseInt(`${orangeuparrowX}`);
         orangeuparrowX += 1;
         defaultplayerimgw %= Math.max(5, defaultplayerimgw);
      }
         iconadslinkN = iconnewchatB.length == cnewarchdefaultsc;
      do {
         cnewarchdefaultsc *= (parseInt(`${cnewarchdefaultsc}`) + (iconadslinkN ? 3 : 2));
         if (2570119.0 == cnewarchdefaultsc) {
            break;
         }
      } while (((cnewarchdefaultsc * 3.64) <= 2.69 && 3.64 <= cnewarchdefaultsc) && (2570119.0 == cnewarchdefaultsc));
         iconnewchatB += `${((iconadslinkN ? 3 : 2) % (Math.max(parseInt(`${cnewarchdefaultsc}`), 10)))}`;
      do {
         iconadslinkN = (81 < ((iconadslinkN ? 81 : iconnewchatB.length) >> (Math.min(iconnewchatB.length, 3))));
         if (iconadslinkN ? !iconadslinkN : iconadslinkN) {
            break;
         }
      } while (((5.12 + cnewarchdefaultsc) == 4.28) && (iconadslinkN ? !iconadslinkN : iconadslinkN));
      do {
          let taiwanO = 5.0;
          let muteda = String.fromCharCode(99,97,108,105,98,114,97,116,101,100,95,99,95,49,56,0);
          let subbasketballplayerQ = String.fromCharCode(112,103,115,122,95,55,95,49,48,48,0);
          let countdownV = String.fromCharCode(97,102,102,105,110,105,116,121,95,117,95,54,52,0);
         iconadslinkN = !iconadslinkN;
         taiwanO += parseFloat(`${countdownV.length - subbasketballplayerQ.length}`);
         muteda = `${subbasketballplayerQ.length}`;
         countdownV = `${parseInt(`${taiwanO}`)}`;
         if (iconadslinkN ? !iconadslinkN : iconadslinkN) {
            break;
         }
      } while ((iconnewchatB.length < 4) && (iconadslinkN ? !iconadslinkN : iconadslinkN));
      while (iconadslinkN) {
         iconadslinkN = !iconadslinkN;
         break;
      }
         iconadslinkN = 48.8 > cnewarchdefaultsc;
       let penaltygoalD = [String.fromCharCode(104,97,115,104,107,101,121,95,54,95,52,54,0), String.fromCharCode(111,118,101,114,119,114,105,116,101,95,54,95,52,49,0), String.fromCharCode(100,117,109,112,105,110,103,95,110,95,57,53,0)];
      homeiconZ = `${scorepopsoundX.length}`;
      libjsijniprofilerw *= parseFloat(`${parseInt(`${libjsijniprofilerw}`)}`);
      icondefaultthumbnailN -= parseFloat(`${2}`);
      trophy9 = 4.38 <= icondefaultthumbnailN;
      homeiconZ = `${3 << (Math.min(5, scorepopsoundX.length))}`;

    var loadAdSize = {};
      predictionbuttonl += (parseFloat(`${(trophy9 ? 3 : 5) & scorepopsoundX.length}`));
   if (!trophy9 && 5 > unreadz.length) {
      trophy9 = predictionbuttonl <= 90.27;
   }
      trophy9 = orangeticky == 13.77;
       let libtobB = 0;
       let iconsettingM = String.fromCharCode(116,95,48,95,116,119,105,100,100,108,101,0);
       let tempnodatagifj = new Map([[String.fromCharCode(114,111,117,110,100,115,95,111,95,52,52,0),false ], [String.fromCharCode(99,97,115,104,116,97,103,95,110,95,55,51,0),true ], [String.fromCharCode(101,114,97,115,101,100,95,54,95,53,53,0),false ]]);
          let libavdeviceJ = new Map([[String.fromCharCode(117,95,49,56,95,99,97,110,99,101,108,108,97,116,105,111,110,0),624], [String.fromCharCode(101,95,57,54,95,107,101,114,110,101,100,0),85], [String.fromCharCode(100,111,112,115,95,48,95,51,50,0),832]]);
         iconsettingM = "1";
         libavdeviceJ = new Map([[`${libavdeviceJ.size}`, libavdeviceJ.size]]);
          let defaultfootballbgN = 1.0;
          let halffieldimagei = String.fromCharCode(110,95,55,49,95,110,101,105,103,104,98,111,117,114,115,0);
         tempnodatagifj = new Map([[`${tempnodatagifj.size}`, tempnodatagifj.size / (Math.max(8, parseInt(`${defaultfootballbgN}`)))]]);
         defaultfootballbgN /= Math.max(halffieldimagei.length, 1);
         halffieldimagei += "1";
       let footballtrophyX = [77, 659, 419];
       let checkboxe = [576, 356, 885];
      do {
         libtobB /= Math.max(footballtrophyX.length, 4);
         if (1122307 == libtobB) {
            break;
         }
      } while (((footballtrophyX.length + libtobB) < 3) && (1122307 == libtobB));
      do {
          let iconmorel = 1;
          let goalk = new Map([[String.fromCharCode(113,95,57,56,95,99,111,114,101,115,0),314], [String.fromCharCode(115,117,98,110,111,100,101,95,114,95,56,52,0),120], [String.fromCharCode(118,112,99,99,95,113,95,50,55,0),196]]);
          let latnE = String.fromCharCode(117,110,108,111,97,100,95,122,95,50,0);
         libtobB /= Math.max(2, 3 % (Math.max(1, iconmorel)));
         iconmorel >>= Math.min(4, Math.abs((String.fromCharCode(55,0) == latnE ? goalk.size : latnE.length)));
         goalk = new Map([[`${goalk.size}`, goalk.size << (Math.min(Math.abs(1), 4))]]);
         if (2625911 == libtobB) {
            break;
         }
      } while ((2625911 == libtobB) && ((libtobB >> (Math.min(Math.abs(1), 5))) < 1 && 1 < (1 >> (Math.min(3, footballtrophyX.length)))));
      for (let f = 0; f < 1; f++) {
         iconsettingM = `${checkboxe.length}`;
      }
      if (!footballtrophyX.includes(checkboxe.length)) {
         checkboxe = [checkboxe.length | 1];
      }
      while ((4 ^ iconsettingM.length) <= 1 || 4 <= (libtobB ^ iconsettingM.length)) {
         libtobB >>= Math.min(Math.abs(libtobB), 4);
         break;
      }
      while ((tempnodatagifj.size - iconsettingM.length) <= 5 && 2 <= (5 - tempnodatagifj.size)) {
         tempnodatagifj = new Map([[`${checkboxe.length}`, libtobB]]);
         break;
      }
      predictionbuttonl *= parseFloat(`${3 + parseInt(`${libjsijniprofilerw}`)}`);
       let pingf = String.fromCharCode(110,111,111,112,95,119,95,52,57,0);
       let weatherR = true;
          let libcxxcomponentsL = 2.0;
         weatherR = pingf.length <= 21;
         libcxxcomponentsL -= 2;
      for (let c = 0; c < 2; c++) {
         pingf = `${pingf.length}`;
      }
      while (!weatherR) {
          let colorsy = String.fromCharCode(107,101,121,101,100,95,55,95,50,48,0);
          let auto_pB = 5.0;
         pingf = `${3 + colorsy.length}`;
         colorsy = `${parseInt(`${auto_pB}`) / (Math.max(3, parseInt(`${auto_pB}`)))}`;
         break;
      }
      if (pingf.startsWith(`${weatherR}`)) {
         pingf += "3";
      }
      do {
         pingf += `${pingf.length}`;
         if (String.fromCharCode(112,98,51,52,48,104,101,107,113,114,0) == pingf) {
            break;
         }
      } while ((String.fromCharCode(112,98,51,52,48,104,101,107,113,114,0) == pingf) && (!weatherR));
      for (let w = 0; w < 3; w++) {
         weatherR = (81 > (pingf.length & (weatherR ? pingf.length : 81)));
      }
      homeiconZ = `${parseInt(`${orangeticky}`) ^ 2}`;

    loadAdSize["width"] = width;
       let matchinactiveL = String.fromCharCode(111,95,52,52,95,97,99,116,117,97,108,108,121,0);
      do {
         matchinactiveL = `${(String.fromCharCode(82,0) == matchinactiveL ? matchinactiveL.length : matchinactiveL.length)}`;
         if (String.fromCharCode(101,55,108,105,56,114,52,97,0) == matchinactiveL) {
            break;
         }
      } while ((5 > matchinactiveL.length) && (String.fromCharCode(101,55,108,105,56,114,52,97,0) == matchinactiveL));
       let yellowtoredL = 1.0;
      for (let z = 0; z < 1; z++) {
         matchinactiveL = `${(matchinactiveL == String.fromCharCode(101,0) ? matchinactiveL.length : parseInt(`${yellowtoredL}`))}`;
      }
      icondefaultthumbnailN *= parseFloat(`${parseInt(`${predictionbuttonl}`) & 1}`);
       let popupH = 3.0;
       let profilepicf = String.fromCharCode(105,95,55,56,95,114,101,115,101,114,118,101,100,0);
       let sportn = String.fromCharCode(103,95,55,52,95,115,121,109,98,111,108,105,99,97,116,101,100,0);
          let issube = String.fromCharCode(112,101,114,99,101,112,116,95,105,95,55,49,0);
         profilepicf = `${profilepicf.length | 1}`;
         issube = `${issube.length}`;
      while (5 == (parseInt(`${popupH}`) - profilepicf.length) && 2.58 == (1.81 - popupH)) {
         profilepicf = `${sportn.length}`;
         break;
      }
      scorepopsoundX.push(unreadz.length);
      libjsijniprofilerw *= parseFloat(`${2}`);
   for (let r = 0; r < 3; r++) {
       let currentq = true;
          let iconnewchatf = 3.0;
         currentq = 33.86 <= iconnewchatf;
      while (currentq) {
         currentq = currentq && !currentq;
         break;
      }
      while (currentq && !currentq) {
          let redgoale = String.fromCharCode(112,97,97,100,95,108,95,49,53,0);
          let privacy5 = new Map([[String.fromCharCode(97,95,54,49,95,108,105,115,116,101,110,101,114,0),454], [String.fromCharCode(110,95,55,50,95,112,114,101,118,105,101,119,101,100,0),615]]);
          let forwardn = String.fromCharCode(106,95,50,49,95,108,111,99,107,97,98,108,101,0);
          let auto_hk = false;
          let arrowdowns = String.fromCharCode(114,101,99,116,97,110,103,108,101,115,95,103,95,50,0);
         currentq = !auto_hk;
         redgoale = "1";
         privacy5 = new Map([[`${privacy5.size}`, 2]]);
         forwardn += `${forwardn.length}`;
         arrowdowns = `${forwardn.length}`;
         break;
      }
      unreadz = `${1 << (Math.min(1, homeiconZ.length))}`;
   }
       let iconpointscore2 = String.fromCharCode(114,101,99,118,109,115,103,95,106,95,54,0);
      if (!iconpointscore2.startsWith(`${iconpointscore2.length}`)) {
         iconpointscore2 += `${iconpointscore2.length | iconpointscore2.length}`;
      }
         iconpointscore2 += `${iconpointscore2.length}`;
          let yingR = String.fromCharCode(101,95,50,52,95,113,116,114,108,101,0);
          let iconrightorangeN = String.fromCharCode(120,99,104,97,99,104,97,95,116,95,57,0);
         iconpointscore2 += `${(iconrightorangeN == String.fromCharCode(76,0) ? yingR.length : iconrightorangeN.length)}`;
      liveendmodallogov += homeiconZ.length << (Math.min(3, iconpointscore2.length));

    loadAdSize["height"] = height;
      orangeticky /= Math.max(parseFloat(`${3 << (Math.min(Math.abs(parseInt(`${icondefaultthumbnailN}`)), 2))}`), 4);
   for (let g = 0; g < 1; g++) {
      icondefaultthumbnailN *= (parseFloat(`${parseInt(`${orangeticky}`) | (trophy9 ? 5 : 2)}`));
   }
       let short_afH = String.fromCharCode(109,110,101,109,111,110,105,99,95,54,95,57,55,0);
       let manifestB = 2.0;
          let project9 = [222, 549, 182];
          let checkbox7 = 5.0;
         short_afH += `${1 - project9.length}`;
         project9 = [parseInt(`${checkbox7}`)];
          let condensedH = 3;
          let libruntimeexecutorD = String.fromCharCode(99,95,54,55,95,101,99,108,0);
          let encryptorK = new Map([[String.fromCharCode(104,95,55,51,95,115,117,98,115,116,114,97,99,116,101,100,0),true ], [String.fromCharCode(100,95,51,56,95,110,117,108,108,115,114,99,0),true ]]);
         manifestB *= 2 - libruntimeexecutorD.length;
         condensedH /= Math.max(1, 4);
         libruntimeexecutorD = `${condensedH}`;
         encryptorK = new Map([[`${encryptorK.size}`, encryptorK.size % 3]]);
      while (4.6 == (manifestB / 1.49)) {
         manifestB -= parseInt(`${manifestB}`);
         break;
      }
          let iconshareC = String.fromCharCode(104,117,110,103,95,53,95,57,53,0);
         manifestB *= 3;
         iconshareC = `${(iconshareC == String.fromCharCode(104,0) ? iconshareC.length : iconshareC.length)}`;
      do {
         manifestB *= parseInt(`${manifestB}`) >> (Math.min(Math.abs(2), 5));
         if (manifestB == 412524.0) {
            break;
         }
      } while ((manifestB == 412524.0) && (5 >= (parseInt(`${manifestB}`) - short_afH.length) && 1.97 >= (manifestB - short_afH.length)));
      while (short_afH.endsWith(`${manifestB}`)) {
         short_afH = `${(short_afH == String.fromCharCode(75,0) ? parseInt(`${manifestB}`) : short_afH.length)}`;
         break;
      }
      libfilem *= parseFloat(`${parseInt(`${liveendmodallogov}`)}`);
      orangeticky /= Math.max(5, (parseFloat(`${(trophy9 ? 3 : 3) ^ parseInt(`${orangeticky}`)}`)));
      icondefaultthumbnailN *= parseFloat(`${parseInt(`${libjsijniprofilerw}`)}`);

    return loadAdSize;
      scorepopsoundX.push(2 | parseInt(`${libjsijniprofilerw}`));
   for (let w = 0; w < 3; w++) {
       let actionsr = String.fromCharCode(111,102,102,95,116,95,57,54,0);
       let hongkong8 = String.fromCharCode(114,95,54,48,95,119,101,108,115,101,110,99,100,101,109,111,0);
       let faviconm = 3.0;
      if (2 == hongkong8.length) {
          let shrinkM = 2.0;
          let emojiI = 5.0;
          let questicona = new Map([[String.fromCharCode(115,101,116,116,108,101,95,103,95,54,48,0),179], [String.fromCharCode(106,95,49,57,95,109,105,120,105,110,103,0),109]]);
          let mintegralH = false;
          let ticked6 = 2.0;
         hongkong8 = `${actionsr.length}`;
         shrinkM += parseFloat(`${parseInt(`${emojiI}`) & 1}`);
         emojiI -= parseFloat(`${1 & questicona.size}`);
         questicona = new Map([[`${mintegralH}`, (parseInt(`${shrinkM}`) % (Math.max(3, (mintegralH ? 5 : 1))))]]);
         ticked6 += questicona.size;
      }
      while (actionsr.endsWith(`${faviconm}`)) {
         faviconm /= Math.max(4, parseFloat(`${parseInt(`${faviconm}`) & 2}`));
         break;
      }
         faviconm *= parseFloat(`${1}`);
       let reactnativeratings5 = 0.0;
      while ((hongkong8.length << (Math.min(Math.abs(1), 4))) < 3) {
          let mbnativeadvancedm = 3.0;
          let activeK = String.fromCharCode(116,104,114,101,97,100,103,114,111,117,112,95,109,95,51,50,0);
          let stepA = String.fromCharCode(102,109,97,99,95,122,95,51,0);
         hongkong8 += `${actionsr.length}`;
         mbnativeadvancedm -= 3;
         activeK += "2";
         stepA += `${activeK.length | 1}`;
         break;
      }
         hongkong8 = `${(String.fromCharCode(70,0) == actionsr ? parseInt(`${reactnativeratings5}`) : actionsr.length)}`;
         hongkong8 += `${actionsr.length}`;
      for (let l = 0; l < 2; l++) {
         faviconm += parseFloat(`${2}`);
      }
      do {
         faviconm /= Math.max(parseFloat(`${parseInt(`${reactnativeratings5}`)}`), 5);
         if (faviconm == 2455990.0) {
            break;
         }
      } while ((actionsr.length < 1) && (faviconm == 2455990.0));
      liveendmodallogov *= 3 * parseInt(`${libjsijniprofilerw}`);
   }
      unreadz += `${parseInt(`${liveendmodallogov}`)}`;
       let patht = String.fromCharCode(111,114,105,103,105,110,115,95,110,95,49,55,0);
       let dragd = 3.0;
       let episodesY = String.fromCharCode(107,95,52,52,95,102,105,110,97,108,105,122,101,100,0);
       let livenodatabgimgL = String.fromCharCode(112,108,97,99,101,104,111,108,100,101,114,95,51,95,49,53,0);
      do {
         dragd /= Math.max(1, parseInt(`${dragd}`) % 3);
         if (dragd == 4811172.0) {
            break;
         }
      } while ((dragd == 4811172.0) && (episodesY.includes(`${dragd}`)));
      while (episodesY == patht) {
          let largesound9 = new Map([[String.fromCharCode(98,105,110,97,114,121,95,101,95,55,56,0),960], [String.fromCharCode(107,95,53,49,95,97,115,115,111,99,105,97,116,105,111,110,0),446]]);
          let iconpipexpandP = new Map([[String.fromCharCode(100,98,108,105,110,116,95,53,95,53,56,0),String.fromCharCode(97,95,57,56,95,115,105,110,103,108,101,116,97,98,108,101,0)], [String.fromCharCode(118,95,51,95,116,102,114,97,0),String.fromCharCode(112,111,112,111,118,101,114,95,108,95,55,53,0)], [String.fromCharCode(109,111,100,95,120,95,57,57,0),String.fromCharCode(122,95,53,52,95,99,111,110,116,97,99,116,0)]]);
          let graphb = String.fromCharCode(117,110,99,111,109,112,114,101,115,115,95,54,95,54,51,0);
          let sport3 = 5.0;
         patht = `${iconpipexpandP.size >> (Math.min(graphb.length, 3))}`;
         largesound9 = new Map([[`${largesound9.size}`, 3 << (Math.min(5, Math.abs(largesound9.size)))]]);
         iconpipexpandP = new Map([[`${largesound9.size}`, parseInt(`${sport3}`)]]);
         graphb += `${largesound9.size}`;
         sport3 *= parseFloat(`${parseInt(`${sport3}`)}`);
         break;
      }
          let becomeR = String.fromCharCode(97,95,55,53,95,115,117,102,102,105,120,0);
          let selectiond = 4.0;
         patht = `${parseInt(`${selectiond}`)}`;
         becomeR += `${becomeR.length}`;
         selectiond += (parseFloat(`${String.fromCharCode(116,0) == becomeR ? becomeR.length : becomeR.length}`));
         episodesY += `${(livenodatabgimgL == String.fromCharCode(86,0) ? episodesY.length : livenodatabgimgL.length)}`;
      do {
         livenodatabgimgL = `${(String.fromCharCode(67,0) == episodesY ? patht.length : episodesY.length)}`;
         if (2180832 == livenodatabgimgL.length) {
            break;
         }
      } while ((2180832 == livenodatabgimgL.length) && (livenodatabgimgL.length >= patht.length));
      trophy9 = (scorepopsoundX.length + unreadz.length) > 11;
      orangeticky *= parseFloat(`${1}`);

}

function createShowAdRect(x, y, width, height) {
       let iconsaveimagew = String.fromCharCode(104,95,50,51,95,97,117,116,104,101,110,116,105,99,97,116,101,100,0);
    let playercommon2 = false;
    let brightnessS = true;
    let injurym = new Map([[String.fromCharCode(116,111,114,103,98,95,114,95,56,50,0),827], [String.fromCharCode(118,97,114,95,115,95,55,50,0),80]]);
    let libfbI = String.fromCharCode(104,111,108,100,101,114,115,95,54,95,50,50,0);
    let redgoal8 = 2;
    let mbridges = [80, 691];
    let selecteda = 3.0;
    let logoutC = true;
    let subtexte = 4.0;
    let bgvipxvodI = false;
   if ((parseFloat(`${redgoal8}`) * selecteda) <= 2.14 || (redgoal8 % (Math.max(5, 7))) <= 4) {
       let iconclosewhitewithbga = 4.0;
       let attributedstringP = 0;
      do {
         attributedstringP /= Math.max(1, 2);
         if (attributedstringP == 3901476) {
            break;
         }
      } while (((3 / (Math.max(2, attributedstringP))) == 5) && (attributedstringP == 3901476));
      for (let o = 0; o < 2; o++) {
         attributedstringP /= Math.max(parseInt(`${iconclosewhitewithbga}`), 5);
      }
      if (5.97 < (attributedstringP / (Math.max(iconclosewhitewithbga, 8)))) {
         iconclosewhitewithbga += parseFloat(`${parseInt(`${iconclosewhitewithbga}`)}`);
      }
      if (5.73 >= (attributedstringP + iconclosewhitewithbga)) {
         attributedstringP *= 1;
      }
          let logind = [7, 723, 988];
          let lang7 = new Map([[String.fromCharCode(118,95,50,56,95,111,105,100,97,110,121,0),1000], [String.fromCharCode(114,97,110,107,105,110,103,95,108,95,50,53,0),679]]);
         attributedstringP -= 3;
         logind.push(2 - lang7.size);
         lang7[`${logind.length}`] = lang7.size + logind.length;
       let bgvipxvodY = String.fromCharCode(117,110,99,104,97,110,103,101,100,95,55,95,53,53,0);
      selecteda += parseFloat(`${3}`);
   }
      mbridges.push(parseInt(`${subtexte}`));
       let carouseli = 3;
       let libmapbufferjnid = [670, 500, 601];
       let shareblackF = String.fromCharCode(118,95,56,50,95,112,97,115,116,101,0);
      do {
          let matchese = new Map([[String.fromCharCode(97,114,102,113,95,120,95,52,54,0),true ], [String.fromCharCode(112,117,108,108,117,112,95,49,95,54,48,0),true ], [String.fromCharCode(105,95,51,55,95,99,111,108,108,101,99,116,101,100,0),true ]]);
          let defaultbasketballbg6 = String.fromCharCode(97,117,114,97,95,101,95,49,48,48,0);
          let clubY = 5.0;
         libmapbufferjnid.push(shareblackF.length & defaultbasketballbg6.length);
         matchese[`${clubY}`] = 2;
         defaultbasketballbg6 = `${parseInt(`${clubY}`)}`;
         if (1160062 == libmapbufferjnid.length) {
            break;
         }
      } while ((1160062 == libmapbufferjnid.length) && (2 >= (carouseli >> (Math.min(libmapbufferjnid.length, 2)))));
          let stepZ = 3.0;
         carouseli |= libmapbufferjnid.length / 2;
         stepZ += 3 ^ parseInt(`${stepZ}`);
       let iconuserc = new Map([[String.fromCharCode(114,101,99,117,114,115,105,118,101,95,110,95,53,57,0),1], [String.fromCharCode(106,95,55,57,95,101,115,99,97,112,101,0),428]]);
      for (let u = 0; u < 2; u++) {
         iconuserc = new Map([[`${libmapbufferjnid.length}`, 2 - shareblackF.length]]);
      }
         carouseli <<= Math.min(5, Math.abs(shareblackF.length - 3));
      for (let p = 0; p < 1; p++) {
         carouseli |= 3;
      }
          let iconviewerV = String.fromCharCode(97,95,54,56,95,115,111,117,114,99,101,0);
         libmapbufferjnid.push((iconviewerV == String.fromCharCode(116,0) ? iconviewerV.length : iconuserc.size));
      if (!Array.from(iconuserc.keys()).includes(`${carouseli}`)) {
         iconuserc = new Map([[shareblackF, 3]]);
      }
         iconuserc = new Map([[`${libmapbufferjnid.length}`, 3]]);
      mbridges = [iconsaveimagew.length * injurym.size];
      logoutC = 70 == injurym.size && mbridges.length == 70;

    var adRect = {};
   do {
       let subsj = false;
       let macauO = String.fromCharCode(97,99,104,101,95,105,95,49,54,0);
       let brightnessi = 2.0;
       let fasty = String.fromCharCode(110,95,51,53,95,116,101,99,104,110,111,108,111,103,121,0);
       let round1 = String.fromCharCode(120,95,53,53,95,114,101,109,105,120,0);
      while (round1.startsWith(`${fasty.length}`)) {
         fasty += `${((subsj ? 1 : 4) & 1)}`;
         break;
      }
      do {
         brightnessi /= Math.max(parseInt(`${brightnessi}`) << (Math.min(Math.abs(3), 1)), 4);
         if (1458523.0 == brightnessi) {
            break;
         }
      } while ((1458523.0 == brightnessi) && (1 <= (1 + fasty.length)));
      if ((5.6 * brightnessi) <= 4.9) {
          let mintegral3 = String.fromCharCode(114,101,112,108,97,121,103,97,105,110,95,98,95,50,51,0);
          let predictiondefault4 = String.fromCharCode(107,95,56,49,95,100,105,115,116,114,105,98,117,116,101,0);
          let adultE = 5;
          let entryX = String.fromCharCode(117,95,53,51,95,116,104,114,101,115,104,111,108,100,105,110,103,0);
          let iconarrowrightblackU = 4;
         brightnessi += (macauO == String.fromCharCode(87,0) ? macauO.length : iconarrowrightblackU);
         mintegral3 = `${(mintegral3 == String.fromCharCode(86,0) ? adultE : mintegral3.length)}`;
         predictiondefault4 += "2";
         adultE /= Math.max((String.fromCharCode(116,0) == mintegral3 ? mintegral3.length : predictiondefault4.length), 4);
         entryX = `${predictiondefault4.length >> (Math.min(Math.abs(1), 2))}`;
         iconarrowrightblackU <<= Math.min(4, Math.abs((String.fromCharCode(84,0) == predictiondefault4 ? predictiondefault4.length : adultE)));
      }
          let libimagepipelineh = [884, 705];
          let suboutt = String.fromCharCode(122,95,52,49,95,109,117,108,116,105,99,111,100,101,99,0);
         fasty += `${2 + suboutt.length}`;
         libimagepipelineh.push(libimagepipelineh.length);
         suboutt += `${1 + libimagepipelineh.length}`;
      for (let v = 0; v < 2; v++) {
         fasty = `${fasty.length * 3}`;
      }
         fasty += `${(fasty == String.fromCharCode(76,0) ? fasty.length : (subsj ? 1 : 1))}`;
      for (let x = 0; x < 2; x++) {
          let profilepic3 = 5;
          let specG = true;
          let langkeyw = String.fromCharCode(100,116,115,104,100,95,109,95,54,49,0);
          let shootx = [896, 750, 83];
         round1 += `${profilepic3}`;
         profilepic3 -= 3 >> (Math.min(3, langkeyw.length));
         specG = langkeyw.length < 27;
         shootx = [3 | shootx.length];
      }
         round1 = `${parseInt(`${brightnessi}`)}`;
      for (let z = 0; z < 3; z++) {
          let confirmation1 = 4.0;
          let stylem = false;
          let smallsoundN = 3.0;
          let pointS = false;
         fasty = `${((pointS ? 4 : 4) ^ macauO.length)}`;
         confirmation1 *= parseInt(`${smallsoundN}`);
         stylem = 3.4 >= smallsoundN && !stylem;
         pointS = smallsoundN > 69.83;
      }
      if (!round1.endsWith(`${macauO.length}`)) {
          let redgoalH = false;
          let routerL = [628, 825, 329];
          let basketballawayteamh = new Map([[String.fromCharCode(110,95,57,50,95,117,99,104,97,114,0),String.fromCharCode(121,95,51,52,95,115,101,97,108,0)], [String.fromCharCode(105,108,115,116,95,102,95,50,54,0),String.fromCharCode(115,95,52,57,95,97,108,108,0)], [String.fromCharCode(115,95,55,51,95,99,111,109,112,108,101,109,101,110,116,105,110,103,0),String.fromCharCode(118,95,56,50,95,99,111,109,112,97,99,116,101,100,0)]]);
          let listK = false;
          let chinasameV = 5.0;
         macauO = `${basketballawayteamh.size}`;
         redgoalH = !listK;
         routerL.push(1 * parseInt(`${chinasameV}`));
         basketballawayteamh = new Map([[`${chinasameV}`, 3 << (Math.min(Math.abs(parseInt(`${chinasameV}`)), 2))]]);
      }
       let iconr = true;
       let controlH = true;
      do {
         controlH = fasty.length > 57;
         if (controlH ? !controlH : controlH) {
            break;
         }
      } while ((controlH ? !controlH : controlH) && (controlH));
       let icondownimgU = false;
       let upgrade3 = true;
         icondownimgU = iconr && subsj;
      while (!icondownimgU) {
         icondownimgU = upgrade3 || round1.length <= 70;
         break;
      }
      playercommon2 = round1.length > redgoal8;
      if (playercommon2 ? !playercommon2 : playercommon2) {
         break;
      }
   } while ((playercommon2 ? !playercommon2 : playercommon2) && (!playercommon2 && (selecteda / (Math.max(4.74, 6))) <= 2.1));
   while (subtexte <= 4.48) {
       let whistleorangeV = 5.0;
       let product9 = new Map([[String.fromCharCode(106,95,50,48,95,97,116,116,101,109,112,116,0),String.fromCharCode(112,95,56,50,95,97,112,110,103,0)], [String.fromCharCode(99,111,110,102,108,105,99,116,101,100,95,111,95,57,51,0),String.fromCharCode(115,115,116,104,114,101,115,104,95,105,95,51,52,0)]]);
       let moviesz = String.fromCharCode(97,100,100,120,95,112,95,50,51,0);
       let benefito = [30, 980];
       let anytime8 = 3;
      if (product9.size > moviesz.length) {
         moviesz = "3";
      }
       let iconarrowrightwhitel = true;
       let debugs = true;
      if ((1.50 + whistleorangeV) < 4.60 && !debugs) {
         debugs = 80 > anytime8;
      }
         product9[`${anytime8}`] = anytime8 / (Math.max(parseInt(`${whistleorangeV}`), 6));
         whistleorangeV *= product9.size;
         iconarrowrightwhitel = 97 >= product9.size;
         whistleorangeV *= product9.size - 1;
       let videovart = 1;
       let goallogok = 5;
          let iconclosewhitebgp = String.fromCharCode(105,95,51,51,95,110,97,109,101,115,0);
          let projectS = 1.0;
          let eighteenH = String.fromCharCode(100,99,98,122,95,113,95,50,49,0);
         whistleorangeV /= Math.max(5, moviesz.length & 1);
         iconclosewhitebgp = `${parseInt(`${projectS}`)}`;
         projectS *= eighteenH.length % (Math.max(iconclosewhitebgp.length, 10));
         eighteenH = `${eighteenH.length}`;
      for (let e = 0; e < 3; e++) {
          let reactnativeratingsL = 4;
          let agreemento = String.fromCharCode(97,99,99,117,109,117,108,97,116,101,100,95,48,95,49,50,0);
         benefito = [goallogok];
         reactnativeratingsL /= Math.max(3 + reactnativeratingsL, 5);
         agreemento += `${agreemento.length / 2}`;
      }
         goallogok /= Math.max(moviesz.length, 3);
         product9 = new Map([[`${product9.size}`, (moviesz == String.fromCharCode(97,0) ? product9.size : moviesz.length)]]);
      do {
         benefito = [(benefito.length + (debugs ? 3 : 4))];
         if (benefito.length == 1378257) {
            break;
         }
      } while ((benefito.length == 1378257) && (!moviesz.endsWith(`${benefito.length}`)));
      if ((product9.size / (Math.max(9, goallogok))) <= 4) {
         product9[`${moviesz}`] = moviesz.length;
      }
         whistleorangeV *= product9.size | benefito.length;
      subtexte *= (parseFloat(`${(brightnessS ? 4 : 4) << (Math.min(Math.abs(2), 3))}`));
      break;
   }
       let photoy = 0.0;
          let nodeC = String.fromCharCode(121,97,100,105,102,95,122,95,50,56,0);
         photoy -= parseInt(`${photoy}`);
         nodeC += `${1 * nodeC.length}`;
          let settingA = String.fromCharCode(111,95,57,95,97,114,103,98,0);
          let iconcurrentmatchd = 2.0;
          let phoneN = String.fromCharCode(104,95,50,50,95,100,101,112,111,115,105,116,0);
         photoy += settingA.length;
         settingA = `${phoneN.length >> (Math.min(5, Math.abs(parseInt(`${iconcurrentmatchd}`))))}`;
         iconcurrentmatchd /= Math.max(3, parseInt(`${iconcurrentmatchd}`));
         phoneN = `${phoneN.length}`;
         photoy += 1;
      iconsaveimagew += `${parseInt(`${photoy}`)}`;
       let styleo = new Map([[String.fromCharCode(100,101,97,108,108,111,99,97,116,101,95,57,95,49,56,0),String.fromCharCode(103,95,50,53,95,114,101,97,100,111,110,108,121,0)], [String.fromCharCode(103,95,56,55,95,97,99,116,105,118,97,116,101,0),String.fromCharCode(107,95,51,51,95,109,105,100,101,113,117,97,108,105,122,101,114,0)], [String.fromCharCode(99,97,110,99,101,108,108,97,116,105,111,110,95,108,95,54,48,0),String.fromCharCode(106,95,52,95,109,105,110,115,0)]]);
       let ready = new Map([[String.fromCharCode(97,108,97,119,95,56,95,53,52,0),996], [String.fromCharCode(98,95,54,51,95,99,97,116,99,104,105,110,103,0),524]]);
       let pingL = 3;
       let singleR = 0;
      for (let c = 0; c < 1; c++) {
         styleo = new Map([[`${ready.size}`, ready.size]]);
      }
      if (!Array.from(ready.values()).includes(pingL)) {
         pingL <<= Math.min(Math.abs(1 - styleo.size), 2);
      }
         pingL ^= 3;
         ready[`${singleR}`] = singleR;
      if (2 <= (5 % (Math.max(10, pingL))) && (singleR % 5) <= 3) {
         pingL += pingL ^ 3;
      }
      subtexte -= parseFloat(`${2 * iconsaveimagew.length}`);

    adRect["x"] = x;
   while (1.33 > subtexte) {
      selecteda += parseFloat(`${3 * parseInt(`${selecteda}`)}`);
      break;
   }
       let privatechatbgd = new Map([[String.fromCharCode(109,95,52,53,95,99,111,110,112,111,110,101,110,116,115,0),594], [String.fromCharCode(100,101,102,97,117,108,95,108,95,52,51,0),596], [String.fromCharCode(104,101,97,100,101,114,95,109,95,51,53,0),342]]);
      do {
          let imagenomoredataA = new Map([[String.fromCharCode(97,115,112,101,99,116,115,95,55,95,50,57,0),500], [String.fromCharCode(104,111,114,105,122,111,110,116,97,108,95,100,95,51,53,0),7]]);
         privatechatbgd = new Map([[`${privatechatbgd.size}`, privatechatbgd.size * 3]]);
         imagenomoredataA = new Map([[`${imagenomoredataA.size}`, imagenomoredataA.size & imagenomoredataA.size]]);
         if (privatechatbgd.size == 4074810) {
            break;
         }
      } while ((privatechatbgd.size == 4074810) && (privatechatbgd[`${privatechatbgd.size}`] != null));
          let pointf = [204, 13];
         privatechatbgd[`${pointf.length}`] = 1 + privatechatbgd.size;
       let stylesS = 3.0;
       let yellowtoredK = 0.0;
      mbridges.push(((logoutC ? 4 : 1) ^ parseInt(`${selecteda}`)));
   for (let u = 0; u < 2; u++) {
      injurym[`${subtexte}`] = 3 * mbridges.length;
   }
   if (selecteda <= 3.3) {
       let notificationt = String.fromCharCode(99,95,52,50,95,101,118,105,99,116,0);
       let issubO = 2;
       let leagueW = [String.fromCharCode(115,101,114,105,97,108,105,122,101,95,116,95,49,48,0), String.fromCharCode(112,97,105,114,119,105,115,101,95,48,95,55,0), String.fromCharCode(102,95,56,52,95,98,117,102,108,101,110,0)];
       let fileG = 3.0;
       let resend2 = String.fromCharCode(97,99,99,117,109,117,108,97,116,111,114,95,101,95,52,52,0);
          let bootsplashu = String.fromCharCode(115,99,114,101,101,110,112,114,101,115,115,111,95,116,95,52,53,0);
         issubO >>= Math.min(3, Math.abs(1));
         bootsplashu = `${(bootsplashu == String.fromCharCode(50,0) ? bootsplashu.length : bootsplashu.length)}`;
      do {
         notificationt = `${leagueW.length % 1}`;
         if (notificationt == String.fromCharCode(105,57,49,108,122,103,48,100,0)) {
            break;
         }
      } while ((leagueW.length == notificationt.length) && (notificationt == String.fromCharCode(105,57,49,108,122,103,48,100,0)));
      if (notificationt.length >= resend2.length) {
         resend2 += `${parseInt(`${fileG}`)}`;
      }
         resend2 += `${issubO / 1}`;
          let bodanX = new Map([[String.fromCharCode(116,114,97,110,115,102,111,114,109,95,104,95,55,50,0),false ], [String.fromCharCode(112,95,55,49,95,112,114,115,99,116,112,0),false ], [String.fromCharCode(122,95,57,50,95,118,105,100,101,111,105,110,102,111,104,101,97,100,101,114,0),true ]]);
         resend2 = `${issubO & 1}`;
         bodanX[`${bodanX.size}`] = 2;
      while (2.18 == fileG) {
          let reminderv = String.fromCharCode(120,95,55,52,95,120,99,108,105,0);
         issubO |= parseInt(`${fileG}`);
         reminderv += `${reminderv.length}`;
         break;
      }
      for (let f = 0; f < 1; f++) {
         notificationt += `${issubO}`;
      }
      if (notificationt.length <= leagueW.length) {
         leagueW = [1 & resend2.length];
      }
         issubO += 3 + issubO;
       let settingsO = 1.0;
       let reducerX = 2.0;
          let indicatorj = String.fromCharCode(121,95,53,51,95,113,115,118,118,112,112,0);
         notificationt += `${3 << (Math.min(Math.abs(parseInt(`${reducerX}`)), 1))}`;
         indicatorj += "1";
          let pangle4 = 3;
          let singleH = 2.0;
          let filledO = new Map([[String.fromCharCode(101,97,99,115,95,48,95,53,0),867], [String.fromCharCode(118,111,105,99,101,95,107,95,52,57,0),611], [String.fromCharCode(112,117,115,104,105,110,103,95,112,95,57,54,0),478]]);
         resend2 += `${pangle4 / (Math.max(7, parseInt(`${fileG}`)))}`;
         pangle4 -= filledO.size;
         singleH -= parseFloat(`${1 | filledO.size}`);
         fileG -= (parseFloat(`${String.fromCharCode(98,0) == notificationt ? parseInt(`${reducerX}`) : notificationt.length}`));
      if (resend2.length <= 4) {
          let pauser = new Map([[String.fromCharCode(102,105,108,101,102,117,110,99,95,108,95,52,55,0),746], [String.fromCharCode(111,95,52,57,95,113,115,118,101,110,99,0),549], [String.fromCharCode(122,95,51,56,95,102,111,114,109,0),823]]);
          let philippinesj = String.fromCharCode(99,105,110,97,117,100,105,111,95,55,95,54,57,0);
         resend2 = `${resend2.length | notificationt.length}`;
         pauser = new Map([[`${pauser.size}`, philippinesj.length - 2]]);
         philippinesj = `${philippinesj.length}`;
      }
      while ((settingsO / 5.93) == 4.69 || (settingsO / (Math.max(5.93, 3))) == 3.15) {
         reducerX -= parseFloat(`${notificationt.length / 2}`);
         break;
      }
      selecteda /= Math.max(parseFloat(`${notificationt.length ^ parseInt(`${subtexte}`)}`), 2);
   }

    adRect["y"] = y;
   do {
      iconsaveimagew += `${3 / (Math.max(6, parseInt(`${selecteda}`)))}`;
      if (String.fromCharCode(104,111,50,49,122,110,121,118,52,0) == iconsaveimagew) {
         break;
      }
   } while ((iconsaveimagew.length == 2 || !logoutC) && (String.fromCharCode(104,111,50,49,122,110,121,118,52,0) == iconsaveimagew));
      logoutC = (brightnessS ? !playercommon2 : !brightnessS);
   do {
      selecteda -= parseFloat(`${3}`);
      if (selecteda == 604625.0) {
         break;
      }
   } while ((selecteda == 604625.0) && (mbridges.includes(selecteda)));
   if (iconsaveimagew.length >= 2) {
      iconsaveimagew += `${(libfbI == String.fromCharCode(71,0) ? libfbI.length : redgoal8)}`;
   }

    adRect["width"] = width;
   for (let y = 0; y < 2; y++) {
      iconsaveimagew = `${iconsaveimagew.length}`;
   }
   do {
      libfbI = `${((playercommon2 ? 3 : 1))}`;
      if (String.fromCharCode(54,57,95,109,99,112,51,57,0) == libfbI) {
         break;
      }
   } while ((String.fromCharCode(54,57,95,109,99,112,51,57,0) == libfbI) && (1 < iconsaveimagew.length));
      redgoal8 &= 3 / (Math.max(10, parseInt(`${selecteda}`)));
   for (let q = 0; q < 1; q++) {
       let catagorym = 2;
       let yellowredcardQ = 5;
       let jnewsshare6 = 1.0;
       let confirmation9 = 4.0;
       let shareF = true;
      for (let p = 0; p < 2; p++) {
         shareF = catagorym < parseInt(`${jnewsshare6}`);
      }
       let yellowvideoliveP = new Map([[String.fromCharCode(119,95,53,53,95,117,115,105,110,103,0),711], [String.fromCharCode(99,95,57,49,95,111,117,116,100,101,118,115,0),201], [String.fromCharCode(98,105,97,115,95,109,95,55,48,0),350]]);
      for (let y = 0; y < 2; y++) {
         shareF = yellowvideoliveP.size < 69 || jnewsshare6 < 76.94;
      }
         shareF = 98.53 >= jnewsshare6;
      for (let l = 0; l < 3; l++) {
         jnewsshare6 -= catagorym & 3;
      }
          let modulew = 1.0;
          let customp = String.fromCharCode(120,95,53,51,95,99,97,99,104,101,0);
          let completeP = true;
         yellowredcardQ ^= 3;
         modulew /= Math.max(3, 2);
         customp = `${parseInt(`${modulew}`) >> (Math.min(customp.length, 2))}`;
         completeP = modulew >= 96.77;
          let halffieldimage7 = String.fromCharCode(107,105,108,108,95,57,95,57,54,0);
          let project9 = String.fromCharCode(117,110,99,111,110,102,105,114,109,101,100,95,120,95,52,49,0);
         shareF = catagorym == 55 && 55 == yellowvideoliveP.size;
         halffieldimage7 = "3";
         project9 = `${halffieldimage7.length}`;
         yellowredcardQ &= yellowvideoliveP.size * parseInt(`${confirmation9}`);
       let cnewsshareP = 5.0;
       let panglek = 3;
      while (!shareF) {
         yellowredcardQ |= (3 | (shareF ? 3 : 3));
         break;
      }
          let main_i1 = [12, 654];
          let yellowredcardU = String.fromCharCode(114,116,112,112,114,111,116,111,95,56,95,54,49,0);
          let black3 = [672, 184, 937];
         cnewsshareP += parseFloat(`${3 >> (Math.min(1, yellowredcardU.length))}`);
         main_i1 = [main_i1.length];
         yellowredcardU += "2";
         black3 = [main_i1.length];
         shareF = (yellowvideoliveP.size * parseInt(`${confirmation9}`)) >= 24;
         catagorym *= parseInt(`${confirmation9}`) ^ 1;
          let roomE = String.fromCharCode(106,105,116,116,101,114,95,119,95,54,50,0);
          let colors1 = 5.0;
         confirmation9 += 2;
         roomE = `${(roomE == String.fromCharCode(74,0) ? parseInt(`${colors1}`) : roomE.length)}`;
         colors1 -= parseFloat(`${2}`);
      brightnessS = catagorym >= mbridges.length;
   }

    adRect["height"] = height;
   do {
      playercommon2 = 74 <= libfbI.length;
      if (playercommon2 ? !playercommon2 : playercommon2) {
         break;
      }
   } while ((playercommon2 ? !playercommon2 : playercommon2) && (playercommon2));
      injurym[`${playercommon2}`] = (redgoal8 / (Math.max(2, (playercommon2 ? 1 : 1))));
       let r_unlockH = 0.0;
      while ((r_unlockH / 1) <= 3.68) {
         r_unlockH /= Math.max(parseInt(`${r_unlockH}`) >> (Math.min(2, Math.abs(2))), 2);
         break;
      }
         r_unlockH -= parseInt(`${r_unlockH}`);
          let trophy7 = [903, 667];
          let cancel6 = String.fromCharCode(107,95,52,57,95,116,114,105,97,110,103,108,101,115,0);
         r_unlockH += trophy7.length;
         trophy7.push(cancel6.length / (Math.max(cancel6.length, 4)));
      selecteda /= Math.max(parseFloat(`${mbridges.length << (Math.min(4, Math.abs(redgoal8)))}`), 5);
       let checkboxn = true;
       let iconnotificationnewD = new Map([[String.fromCharCode(99,111,109,97,110,100,95,104,95,55,50,0),String.fromCharCode(109,100,97,116,101,95,101,95,56,53,0)], [String.fromCharCode(98,117,105,108,100,95,99,95,51,56,0),String.fromCharCode(103,95,55,57,95,99,114,111,112,0)]]);
       let refreshn = 4.0;
         refreshn /= Math.max(((checkboxn ? 1 : 5) + parseInt(`${refreshn}`)), 2);
       let tickJ = String.fromCharCode(109,101,115,97,103,101,95,106,95,49,48,0);
      if ((tickJ.length - 4) <= 1) {
         refreshn += (tickJ.length + (checkboxn ? 3 : 3));
      }
         checkboxn = !tickJ.startsWith(`${refreshn}`);
      do {
         tickJ += `${parseInt(`${refreshn}`) + iconnotificationnewD.size}`;
         if (tickJ == String.fromCharCode(107,49,99,97,0)) {
            break;
         }
      } while ((tickJ == String.fromCharCode(107,49,99,97,0)) && ((refreshn - 2.59) == 2.94 || (tickJ.length - 1) == 2));
      while ((tickJ.length + 1) < 1 || (refreshn - 5.34) < 4.78) {
         tickJ = `${iconnotificationnewD.size | 2}`;
         break;
      }
      if (!Array.from(iconnotificationnewD.keys()).includes(`${refreshn}`)) {
          let bufferm = true;
          let downloadingB = false;
          let libfb6 = String.fromCharCode(122,95,53,54,95,98,108,97,99,107,115,0);
         refreshn /= Math.max(tickJ.length % (Math.max(3, 1)), 3);
         bufferm = !downloadingB || libfb6.length < 60;
         downloadingB = (16 == ((downloadingB ? 16 : libfb6.length) * libfb6.length));
      }
      while (!checkboxn) {
          let iconschedule2 = 5.0;
         iconnotificationnewD[`${checkboxn}`] = (parseInt(`${iconschedule2}`) | (checkboxn ? 4 : 2));
         break;
      }
         checkboxn = !checkboxn;
      bgvipxvodI = checkboxn;

    return adRect;
      logoutC = (parseInt(`${subtexte}`) - mbridges.length) <= 25;
       let eactm = 3;
       let subtextI = 3.0;
       let huaweid = new Map([[String.fromCharCode(103,101,116,108,98,108,111,99,107,105,110,99,95,117,95,51,53,0),27], [String.fromCharCode(101,114,105,97,108,105,122,97,116,105,111,110,95,103,95,52,56,0),209], [String.fromCharCode(120,95,49,95,115,117,98,110,111,100,101,0),879]]);
      for (let q = 0; q < 1; q++) {
         subtextI += eactm << (Math.min(3, Math.abs(2)));
      }
      for (let c = 0; c < 1; c++) {
          let default_6s = false;
          let h_countN = 0.0;
          let libjsinspector2 = 3.0;
          let screenH = 2;
          let defaultprofilepicr = true;
         huaweid = new Map([[`${eactm}`, 1 >> (Math.min(Math.abs(parseInt(`${subtextI}`)), 2))]]);
         default_6s = screenH == 93;
         h_countN += 2 << (Math.min(Math.abs(parseInt(`${h_countN}`)), 4));
         libjsinspector2 += parseInt(`${h_countN}`);
         screenH -= ((defaultprofilepicr ? 5 : 1) + screenH);
         defaultprofilepicr = libjsinspector2 < 95.45;
      }
         subtextI *= huaweid.size ^ parseInt(`${subtextI}`);
      while ((huaweid.size * 3) > 3) {
          let darkx = false;
          let iconadslinkT = new Map([[String.fromCharCode(103,114,101,97,116,101,114,95,52,95,57,57,0),581], [String.fromCharCode(105,95,53,51,95,117,100,116,97,0),857]]);
          let iconmoreu = 0.0;
          let mountingJ = 4.0;
          let leakcheckerV = String.fromCharCode(108,95,54,95,114,101,99,108,97,105,109,0);
         subtextI /= Math.max(huaweid.size, 3);
         darkx = parseInt(`${mountingJ}`) <= iconadslinkT.size;
         iconadslinkT[`${iconmoreu}`] = parseInt(`${mountingJ}`);
         iconmoreu -= 3 | leakcheckerV.length;
         leakcheckerV += `${1 - leakcheckerV.length}`;
         break;
      }
          let penaltygoalN = [355, 17];
          let libcrashsdkM = new Map([[String.fromCharCode(102,105,120,116,117,114,101,115,95,99,95,50,55,0),false ], [String.fromCharCode(97,108,98,117,109,115,95,122,95,49,54,0),false ]]);
         subtextI += 3;
         penaltygoalN.push(penaltygoalN.length);
         libcrashsdkM = new Map([[`${libcrashsdkM.size}`, libcrashsdkM.size & penaltygoalN.length]]);
      for (let z = 0; z < 2; z++) {
          let stationY = String.fromCharCode(101,114,114,115,116,114,95,101,95,49,48,0);
          let langkeyh = 1;
          let iconarrowrightwhiteu = String.fromCharCode(115,117,103,103,101,115,116,105,111,110,95,53,95,54,49,0);
          let basketballdetailsbgK = String.fromCharCode(105,95,54,52,95,110,111,110,110,117,108,108,100,101,115,116,105,110,97,116,105,111,110,0);
          let typingo = String.fromCharCode(100,118,118,105,100,101,111,95,48,95,54,55,0);
         huaweid = new Map([[`${huaweid.size}`, huaweid.size & stationY.length]]);
         stationY += `${iconarrowrightwhiteu.length}`;
         langkeyh >>= Math.min(Math.abs(3 % (Math.max(5, typingo.length))), 2);
         iconarrowrightwhiteu += `${basketballdetailsbgK.length - iconarrowrightwhiteu.length}`;
         basketballdetailsbgK = `${iconarrowrightwhiteu.length}`;
         typingo += `${(iconarrowrightwhiteu == String.fromCharCode(107,0) ? iconarrowrightwhiteu.length : langkeyh)}`;
      }
         huaweid = new Map([[`${subtextI}`, 1 | eactm]]);
          let singaporeg = 2;
         subtextI /= Math.max(2, parseInt(`${subtextI}`));
         singaporeg <<= Math.min(4, Math.abs(singaporeg - 3));
      while (eactm < subtextI) {
          let teamdetailsbg4 = 1.0;
         eactm += parseInt(`${teamdetailsbg4}`);
         break;
      }
      mbridges = [mbridges.length];
   if (iconsaveimagew.length < redgoal8) {
       let backa = false;
       let confirmationY = 1.0;
       let nendo = String.fromCharCode(110,95,52,50,95,111,118,101,114,114,105,100,100,101,110,0);
       let shirt5 = [String.fromCharCode(99,111,109,109,101,110,116,115,95,56,95,57,49,0), String.fromCharCode(108,95,51,49,95,115,98,105,116,115,0)];
         shirt5 = [shirt5.length];
         shirt5.push(((backa ? 5 : 1) % (Math.max(parseInt(`${confirmationY}`), 2))));
         shirt5.push(((backa ? 4 : 4) * parseInt(`${confirmationY}`)));
         shirt5 = [((backa ? 4 : 3) << (Math.min(Math.abs(parseInt(`${confirmationY}`)), 5)))];
      for (let f = 0; f < 2; f++) {
         shirt5 = [(String.fromCharCode(87,0) == nendo ? shirt5.length : nendo.length)];
      }
         nendo = `${nendo.length}`;
          let livenodatabgimg2 = String.fromCharCode(104,105,100,105,110,103,95,54,95,53,0);
         backa = !backa && 72.0 >= confirmationY;
         livenodatabgimg2 = `${3 | livenodatabgimg2.length}`;
         confirmationY *= 3;
      while ((nendo.length ^ 2) == 2) {
         nendo += `${(parseInt(`${confirmationY}`) & (backa ? 1 : 3))}`;
         break;
      }
      if (!backa) {
         backa = !backa && 15.33 < confirmationY;
      }
      for (let g = 0; g < 1; g++) {
         shirt5 = [nendo.length << (Math.min(Math.abs(3), 4))];
      }
      for (let d = 0; d < 2; d++) {
         confirmationY -= ((backa ? 4 : 1));
      }
      redgoal8 >>= Math.min(3, iconsaveimagew.length);
   }
   for (let q = 0; q < 3; q++) {
       let brightnessZ = String.fromCharCode(112,110,103,100,115,112,95,97,95,51,48,0);
       let paginationC = true;
         paginationC = (77 == (brightnessZ.length << (Math.min(3, Math.abs((!paginationC ? brightnessZ.length : 77))))));
       let selectedC = true;
       let greyarrowupH = false;
         paginationC = brightnessZ.length == 61 || selectedC;
      if (brightnessZ.includes(`${greyarrowupH}`)) {
         brightnessZ = "1";
      }
          let libtobc = 3.0;
         greyarrowupH = !greyarrowupH;
         libtobc -= parseFloat(`${parseInt(`${libtobc}`)}`);
         greyarrowupH = (86 <= ((paginationC ? brightnessZ.length : 86) % (Math.max(4, brightnessZ.length))));
      brightnessS = playercommon2;
   }

}

function loadAd(placementId, settings) {
       let analytic7 = [463, 263];
    let basketballdetailsbgq = String.fromCharCode(102,95,51,54,95,115,116,97,110,100,97,114,100,0);
    let flipper8 = [String.fromCharCode(119,97,116,99,104,101,114,95,117,95,57,54,0), String.fromCharCode(117,110,98,108,117,114,95,50,95,50,51,0), String.fromCharCode(101,95,55,54,95,99,97,110,99,101,108,108,0)];
    let defaultteamn = 3.0;
    let backward4 = [610, 449];
    let anytimeM = String.fromCharCode(101,110,97,98,108,101,95,98,95,57,52,0);
    let cornerkickU = 0.0;
    let loginQ = String.fromCharCode(114,95,49,48,95,115,117,114,102,97,99,101,0);
    let sellmathbackgroundt = String.fromCharCode(115,116,117,98,95,48,95,55,54,0);
    let frame_d6 = [609, 691, 465];
    let sinaj = String.fromCharCode(117,95,53,56,95,100,101,112,97,114,116,109,101,110,116,0);
    let mapbufferw = false;
    let exampleimageD = 1.0;
    let greytickL = 1.0;
    let largebrightnessO = String.fromCharCode(97,95,51,95,115,99,97,108,101,114,0);
      analytic7 = [analytic7.length ^ 1];
   do {
      cornerkickU -= 1 - sellmathbackgroundt.length;
      if (cornerkickU == 3512787.0) {
         break;
      }
   } while ((cornerkickU == 3512787.0) && (1.13 <= (cornerkickU - loginQ.length)));
   do {
      anytimeM = `${anytimeM.length + parseInt(`${defaultteamn}`)}`;
      if (anytimeM.length == 3503369) {
         break;
      }
   } while ((anytimeM.length == 3503369) && (anytimeM != String.fromCharCode(51,0) || sellmathbackgroundt != String.fromCharCode(51,0)));
       let libreanimatedz = new Map([[String.fromCharCode(109,97,116,120,95,116,95,49,50,0),String.fromCharCode(115,95,53,54,95,116,105,99,107,101,114,115,0)], [String.fromCharCode(115,101,101,107,105,110,103,95,111,95,54,55,0),String.fromCharCode(103,95,57,54,95,115,101,109,97,110,116,105,99,115,0)], [String.fromCharCode(115,116,114,100,117,112,95,107,95,51,48,0),String.fromCharCode(97,117,120,95,52,95,55,50,0)]]);
       let pauseL = true;
          let searchbarB = [456, 42];
          let const_3W = 0.0;
         libreanimatedz[`${const_3W}`] = libreanimatedz.size ^ 2;
         searchbarB = [searchbarB.length ^ 2];
         const_3W += searchbarB.length;
      for (let u = 0; u < 1; u++) {
         pauseL = ((libreanimatedz.size - (pauseL ? 23 : libreanimatedz.size)) == 23);
      }
         libreanimatedz = new Map([[`${libreanimatedz.size}`, (libreanimatedz.size >> (Math.min(5, Math.abs((pauseL ? 2 : 1)))))]]);
       let iconnointernet2 = String.fromCharCode(116,101,114,109,115,101,116,95,56,95,49,52,0);
          let penaltygoalB = new Map([[String.fromCharCode(107,95,55,55,95,99,97,118,115,100,115,112,0),0], [String.fromCharCode(105,110,115,101,114,116,101,100,95,110,95,55,53,0),234]]);
          let iconclosewhitewithbg9 = 1.0;
          let selectionT = [300, 195];
         pauseL = !pauseL;
         penaltygoalB = new Map([[`${penaltygoalB.size}`, penaltygoalB.size]]);
         iconclosewhitewithbg9 -= parseInt(`${iconclosewhitewithbg9}`) >> (Math.min(5, Math.abs(1)));
         selectionT = [parseInt(`${iconclosewhitewithbg9}`)];
          let imagewatchliveA = 0.0;
          let fill8 = new Map([[String.fromCharCode(109,112,101,103,118,105,100,101,111,100,101,99,95,108,95,51,57,0),610], [String.fromCharCode(101,95,52,51,95,114,101,107,101,121,0),688]]);
         libreanimatedz[`${pauseL}`] = iconnointernet2.length;
         imagewatchliveA -= 3 + fill8.size;
         fill8 = new Map([[`${fill8.size}`, fill8.size | parseInt(`${imagewatchliveA}`)]]);
      analytic7 = [sinaj.length + frame_d6.length];
   while (anytimeM == String.fromCharCode(118,0)) {
      sellmathbackgroundt += `${(parseInt(`${defaultteamn}`) - (mapbufferw ? 4 : 5))}`;
      break;
   }

    if (settings.hasOwnProperty(kATBannerAdLoadingExtraBannerAdSizeStruct)) {

      basketballdetailsbgq += "1";
      defaultteamn -= 1;
      mapbufferw = backward4.length <= 82 && 99.91 <= cornerkickU;
   do {
       let defaultlogom = String.fromCharCode(103,95,51,54,95,115,112,104,101,114,105,99,97,108,0);
       let uimanagerF = new Map([[String.fromCharCode(115,117,98,115,99,114,105,98,97,98,108,101,115,95,110,95,49,56,0),205], [String.fromCharCode(103,101,116,100,105,103,105,116,95,57,95,50,54,0),409]]);
       let hometeamfieldy = String.fromCharCode(101,120,116,101,114,110,95,111,95,55,48,0);
       let desck = [948, 335, 107];
       let untickb = true;
       let issubw = String.fromCharCode(103,95,51,51,95,109,97,110,105,112,117,108,97,116,101,0);
       let detailsX = String.fromCharCode(119,101,105,103,104,116,112,95,107,95,53,48,0);
         uimanagerF[`${untickb}`] = ((untickb ? 1 : 2) / 3);
         issubw = `${detailsX.length}`;
      do {
          let sendy = new Map([[String.fromCharCode(97,100,106,97,99,101,110,116,95,50,95,50,54,0),String.fromCharCode(119,95,53,48,95,109,115,115,100,115,112,0)], [String.fromCharCode(101,120,116,115,107,95,122,95,57,50,0),String.fromCharCode(122,95,55,50,95,116,101,114,109,105,110,97,116,105,110,103,0)]]);
         uimanagerF = new Map([[`${uimanagerF.size}`, 3]]);
         sendy[`${sendy.size}`] = sendy.size & 3;
         if (uimanagerF.size == 2453537) {
            break;
         }
      } while ((uimanagerF.size == 2453537) && ((4 ^ uimanagerF.size) >= 1 && (defaultlogom.length ^ 4) >= 4));
         uimanagerF = new Map([[defaultlogom, 2 | defaultlogom.length]]);
      do {
          let armvaQ = String.fromCharCode(99,114,101,97,116,101,101,120,95,55,95,51,54,0);
          let iconnotificationnewj = String.fromCharCode(98,105,116,114,101,118,95,112,95,54,53,0);
          let catagoryR = new Map([[String.fromCharCode(111,95,56,50,95,102,105,110,105,115,104,101,100,0),625], [String.fromCharCode(109,105,110,116,95,111,95,50,48,0),752], [String.fromCharCode(119,95,51,48,95,104,111,115,116,110,97,109,101,0),51]]);
          let sellmathbackgroundv = 2;
          let libsentry1 = String.fromCharCode(114,100,99,111,115,116,95,105,95,56,57,0);
         issubw = `${detailsX.length + 2}`;
         armvaQ += `${sellmathbackgroundv}`;
         iconnotificationnewj += `${sellmathbackgroundv ^ armvaQ.length}`;
         catagoryR[armvaQ] = 1 % (Math.max(1, catagoryR.size));
         libsentry1 += `${catagoryR.size}`;
         if (issubw.length == 4694831) {
            break;
         }
      } while ((issubw.length == 4694831) && (detailsX.startsWith(`${issubw.length}`)));
      do {
         hometeamfieldy += `${1 - uimanagerF.size}`;
         if (hometeamfieldy == String.fromCharCode(51,121,99,100,49,52,119,119,113,102,0)) {
            break;
         }
      } while ((hometeamfieldy == String.fromCharCode(51,121,99,100,49,52,119,119,113,102,0)) && (issubw == hometeamfieldy));
         issubw = `${detailsX.length}`;
      for (let x = 0; x < 3; x++) {
         desck = [1 & hometeamfieldy.length];
      }
         untickb = hometeamfieldy.length <= desck.length;
      for (let f = 0; f < 2; f++) {
         defaultlogom += `${(String.fromCharCode(70,0) == hometeamfieldy ? hometeamfieldy.length : detailsX.length)}`;
      }
      for (let x = 0; x < 3; x++) {
         uimanagerF[`${untickb}`] = ((untickb ? 2 : 4) ^ issubw.length);
      }
         untickb = defaultlogom.length <= 23;
      for (let z = 0; z < 1; z++) {
         issubw = `${desck.length}`;
      }
         issubw = "1";
      analytic7 = [flipper8.length];
      if (analytic7.length == 2574675) {
         break;
      }
   } while ((analytic7.length == 2574675) && ((3 + loginQ.length) >= 1 || (loginQ.length + 3) >= 5));
   do {
      loginQ += `${2 >> (Math.min(Math.abs(parseInt(`${defaultteamn}`)), 1))}`;
      if (loginQ == String.fromCharCode(106,105,106,115,48,115,97,98,116,0)) {
         break;
      }
   } while ((loginQ == String.fromCharCode(106,105,106,115,48,115,97,98,116,0)) && (3 <= loginQ.length || sinaj.length <= 3));
        var loadAdSize = settings[kATBannerAdLoadingExtraBannerAdSizeStruct];
      sinaj += `${parseInt(`${cornerkickU}`)}`;
   do {
      basketballdetailsbgq += `${parseInt(`${defaultteamn}`)}`;
      if (String.fromCharCode(100,115,56,100,48,103,102,0) == basketballdetailsbgq) {
         break;
      }
   } while ((String.fromCharCode(100,115,56,100,48,103,102,0) == basketballdetailsbgq) && (basketballdetailsbgq.length <= loginQ.length));
       let text8 = true;
       let nalyticsU = new Map([[String.fromCharCode(109,97,99,114,111,115,95,103,95,49,55,0),String.fromCharCode(115,95,54,50,95,105,108,111,103,0)], [String.fromCharCode(105,115,112,108,97,121,95,120,95,53,50,0),String.fromCharCode(119,95,56,56,95,99,104,97,110,103,101,99,111,117,110,116,101,114,0)]]);
      for (let l = 0; l < 2; l++) {
          let liveG = 2;
          let round_ = String.fromCharCode(115,95,53,49,95,110,97,99,107,0);
         text8 = String.fromCharCode(113,0) == round_ || 15 <= nalyticsU.size;
         liveG |= liveG / (Math.max(1, 2));
         round_ += "1";
      }
         nalyticsU = new Map([[`${nalyticsU.size}`, nalyticsU.size]]);
      analytic7 = [basketballdetailsbgq.length];
      basketballdetailsbgq = "1";
       let defaultfootballbgo = false;
       let infoR = true;
       let short_k6g = 1.0;
      while (infoR) {
         infoR = !infoR;
         break;
      }
         infoR = (defaultfootballbgo ? !infoR : defaultfootballbgo);
          let yellowtoredW = new Map([[String.fromCharCode(122,95,50,56,95,103,101,116,110,109,115,101,100,101,99,0),200], [String.fromCharCode(121,95,50,56,95,109,97,115,107,115,0),305]]);
          let fastd = 3.0;
         infoR = yellowtoredW[`${defaultfootballbgo}`] == null;
         yellowtoredW = new Map([[`${fastd}`, 3]]);
         fastd *= parseInt(`${fastd}`);
      for (let d = 0; d < 2; d++) {
         defaultfootballbgo = infoR && defaultfootballbgo;
      }
      if (defaultfootballbgo || (1.55 + short_k6g) < 5.92) {
         defaultfootballbgo = !defaultfootballbgo;
      }
         infoR = !infoR;
       let updatesa = 1.0;
          let register_fK = 2.0;
          let alertM = [651, 143];
          let libavfilterF = 2.0;
         infoR = 85.57 > updatesa;
         register_fK *= alertM.length;
         alertM.push(parseInt(`${register_fK}`));
         libavfilterF *= 1;
      for (let q = 0; q < 3; q++) {
         updatesa /= Math.max(1 ^ parseInt(`${updatesa}`), 3);
      }
      defaultteamn -= parseInt(`${defaultteamn}`) << (Math.min(Math.abs(parseInt(`${cornerkickU}`)), 3));

        settings["width"] = loadAdSize["width"];
      defaultteamn += parseInt(`${cornerkickU}`) % (Math.max(3, anytimeM.length));
      cornerkickU *= loginQ.length;
   while (1 >= (5 << (Math.min(2, backward4.length)))) {
       let infor = 2;
       let androidm = String.fromCharCode(110,95,57,54,95,99,104,101,99,107,0);
       let awayiconu = String.fromCharCode(102,105,108,101,114,101,97,100,115,116,114,101,97,109,95,50,95,49,51,0);
       let userW = 4;
      do {
          let infoS = String.fromCharCode(112,97,115,119,111,114,100,95,53,95,51,56,0);
          let detailsM = 0.0;
          let reactnavigationQ = new Map([[String.fromCharCode(100,101,97,100,108,111,99,107,101,100,95,112,95,52,49,0),true ], [String.fromCharCode(99,111,109,112,111,115,101,95,56,95,57,0),false ], [String.fromCharCode(104,95,52,56,0),true ]]);
         infor *= androidm.length % (Math.max(5, awayiconu.length));
         infoS = `${reactnavigationQ.size % 3}`;
         detailsM += 3;
         reactnavigationQ[infoS] = reactnavigationQ.size / (Math.max(infoS.length, 7));
         if (infor == 343735) {
            break;
         }
      } while ((infor == 343735) && ((2 & androidm.length) > 1));
         userW ^= androidm.length % 3;
      if (awayiconu.length < 5 || 5 < androidm.length) {
          let megaphonec = String.fromCharCode(111,110,102,105,103,117,114,97,116,105,111,110,95,111,95,52,50,0);
          let actionJ = 4;
          let brightnesss = 0.0;
         androidm += "3";
         megaphonec = `${(String.fromCharCode(72,0) == megaphonec ? megaphonec.length : parseInt(`${brightnesss}`))}`;
         actionJ &= actionJ;
         brightnesss *= 1;
      }
         userW *= (String.fromCharCode(120,0) == androidm ? androidm.length : userW);
         androidm = `${awayiconu.length << (Math.min(3, Math.abs(userW)))}`;
       let foregroundL = String.fromCharCode(114,95,57,56,95,114,103,98,97,121,99,111,99,103,0);
      while (foregroundL.includes(`${androidm.length}`)) {
          let chinasameN = [655, 127, 700];
         androidm = `${infor + awayiconu.length}`;
         chinasameN.push(1 + chinasameN.length);
         break;
      }
      for (let r = 0; r < 1; r++) {
         infor -= androidm.length | 1;
      }
         infor &= androidm.length;
      do {
         userW |= (String.fromCharCode(110,0) == androidm ? androidm.length : infor);
         if (userW == 708501) {
            break;
         }
      } while ((userW == 708501) && (1 < (userW * awayiconu.length) && 2 < (1 * userW)));
          let leakcheckeri = String.fromCharCode(116,95,57,56,95,111,118,101,114,108,97,112,112,101,100,0);
          let abidetecta = String.fromCharCode(105,119,104,116,95,56,95,50,50,0);
          let castp = [584, 230, 716];
         foregroundL += `${androidm.length ^ 3}`;
         leakcheckeri = `${abidetecta.length}`;
         abidetecta += "1";
         castp = [abidetecta.length % (Math.max(5, leakcheckeri.length))];
         androidm = `${infor}`;
      backward4 = [3];
      break;
   }
   if ((1 >> (Math.min(1, analytic7.length))) < 1) {
      frame_d6 = [parseInt(`${defaultteamn}`) >> (Math.min(5, Math.abs(parseInt(`${cornerkickU}`))))];
   }
       let overE = false;
       let shared9 = String.fromCharCode(122,95,51,52,95,99,117,98,105,99,0);
       let bgvipsportv = String.fromCharCode(105,95,53,55,95,114,101,113,117,105,117,114,101,115,0);
      for (let r = 0; r < 2; r++) {
         bgvipsportv += `${(3 + (overE ? 5 : 5))}`;
      }
         bgvipsportv += `${bgvipsportv.length}`;
      for (let q = 0; q < 2; q++) {
         shared9 = `${shared9.length ^ 1}`;
      }
          let targetO = String.fromCharCode(100,95,52,55,95,122,101,114,111,98,108,111,98,0);
          let greyV = new Map([[String.fromCharCode(109,95,56,52,95,100,105,115,112,108,97,121,0),720], [String.fromCharCode(119,95,53,55,95,117,115,101,114,105,110,116,101,114,102,97,99,101,0),881]]);
          let attributedstringX = true;
         overE = shared9 == bgvipsportv;
         targetO = `${((attributedstringX ? 4 : 4) - greyV.size)}`;
         greyV[targetO] = 2 - targetO.length;
         attributedstringX = greyV.size < targetO.length;
          let orangeticki = false;
          let notificationfilledN = 3;
         shared9 += `${((orangeticki ? 5 : 4) << (Math.min(Math.abs(notificationfilledN), 5)))}`;
      do {
         shared9 = `${shared9.length % 1}`;
         if (shared9 == String.fromCharCode(103,57,57,0)) {
            break;
         }
      } while ((3 >= shared9.length) && (shared9 == String.fromCharCode(103,57,57,0)));
       let bootsplashZ = String.fromCharCode(110,117,108,108,112,97,99,107,101,116,95,106,95,52,0);
       let materialf = String.fromCharCode(118,95,57,48,95,99,111,109,112,97,115,115,0);
         bootsplashZ += "1";
         overE = bgvipsportv.length < shared9.length;
      basketballdetailsbgq = `${anytimeM.length}`;

        settings["height"] = loadAdSize["height"];
      anytimeM += `${sellmathbackgroundt.length ^ flipper8.length}`;
      loginQ += `${(String.fromCharCode(57,0) == anytimeM ? flipper8.length : anytimeM.length)}`;
      sellmathbackgroundt += `${parseInt(`${cornerkickU}`) | 3}`;
       let notificationfillemptyV = new Map([[String.fromCharCode(109,97,120,105,109,117,109,95,102,95,56,52,0),315], [String.fromCharCode(97,95,50,51,95,100,117,112,99,108,0),890], [String.fromCharCode(100,99,111,110,108,121,95,49,95,49,54,0),613]]);
       let profilepic4 = String.fromCharCode(119,95,50,54,95,112,101,114,102,111,114,109,101,100,0);
       let imagenetworkerr6 = 2.0;
      for (let y = 0; y < 3; y++) {
          let sharewhiteQ = String.fromCharCode(119,95,53,56,95,112,111,105,110,116,101,114,115,0);
         profilepic4 = `${profilepic4.length}`;
         sharewhiteQ += `${sharewhiteQ.length}`;
      }
      if ((3 ^ profilepic4.length) <= 2) {
         imagenetworkerr6 += parseFloat(`${2}`);
      }
       let zoom_ = String.fromCharCode(112,114,111,99,95,112,95,52,48,0);
       let applicationd = String.fromCharCode(118,95,54,57,95,99,109,121,107,0);
      for (let k = 0; k < 2; k++) {
         notificationfillemptyV[applicationd] = zoom_.length >> (Math.min(Math.abs(1), 2));
      }
      for (let e = 0; e < 2; e++) {
         imagenetworkerr6 /= Math.max(1, parseFloat(`${parseInt(`${imagenetworkerr6}`)}`));
      }
      if ((5.70 / (Math.max(7, imagenetworkerr6))) >= 3.0) {
         zoom_ += `${(applicationd == String.fromCharCode(76,0) ? applicationd.length : profilepic4.length)}`;
      }
       let indicator8 = true;
      while (indicator8 && 5 >= (notificationfillemptyV.size >> (Math.min(Math.abs(2), 1)))) {
          let goalB = 3.0;
          let libglogE = new Map([[String.fromCharCode(99,97,116,99,104,95,111,95,51,50,0),423], [String.fromCharCode(112,114,111,103,114,97,109,115,95,49,95,56,55,0),763], [String.fromCharCode(100,117,109,112,112,97,99,107,101,116,95,112,95,56,54,0),664]]);
         indicator8 = (notificationfillemptyV.size % (Math.max(applicationd.length, 4))) == 58;
         goalB -= parseInt(`${goalB}`) ^ libglogE.size;
         libglogE = new Map([[`${libglogE.size}`, libglogE.size & parseInt(`${goalB}`)]]);
         break;
      }
         applicationd = `${3 | notificationfillemptyV.size}`;
      backward4 = [1];
   do {
      defaultteamn /= Math.max(2, 1);
      if (4141359.0 == defaultteamn) {
         break;
      }
   } while ((4141359.0 == defaultteamn) && (3 == (anytimeM.length | 3) || 3.79 == (5.40 + defaultteamn)));

        delete settings[kATBannerAdLoadingExtraBannerAdSizeStruct];
   for (let r = 0; r < 2; r++) {
      mapbufferw = analytic7.length >= anytimeM.length;
   }
      backward4.push(2 >> (Math.min(1, analytic7.length)));
      loginQ = "2";
      flipper8.push(1 / (Math.max(parseInt(`${defaultteamn}`), 3)));
      anytimeM += `${loginQ.length & 2}`;

    }
    ATBannerRNSDK.loadAd(placementId, JSON.stringify(settings));
       let langkeye = 5.0;
       let bannerS = String.fromCharCode(116,95,57,48,0);
       let reminderk = String.fromCharCode(119,114,105,116,101,108,111,99,107,95,111,95,54,52,0);
          let iconstar5 = new Map([[String.fromCharCode(117,110,109,111,118,101,100,95,115,95,54,53,0),true ], [String.fromCharCode(107,101,121,108,101,110,95,48,95,55,52,0),false ]]);
          let iconarrowrightwhiteb = String.fromCharCode(109,95,53,52,95,100,111,99,116,111,116,97,108,0);
         bannerS += `${reminderk.length | 3}`;
         iconstar5 = new Map([[`${iconstar5.size}`, iconstar5.size]]);
         iconarrowrightwhiteb += `${iconstar5.size}`;
         reminderk = `${parseInt(`${langkeye}`) >> (Math.min(reminderk.length, 4))}`;
      exampleimageD -= loginQ.length / (Math.max(3, frame_d6.length));
      flipper8 = [parseInt(`${cornerkickU}`)];
   if (5 <= (parseInt(`${defaultteamn}`) / (Math.max(backward4.length, 6)))) {
      backward4 = [parseInt(`${defaultteamn}`)];
   }
   for (let c = 0; c < 2; c++) {
      basketballdetailsbgq += `${parseInt(`${exampleimageD}`)}`;
   }
   do {
      cornerkickU -= 1 << (Math.min(3, analytic7.length));
      if (cornerkickU == 1303529.0) {
         break;
      }
   } while ((5 <= (loginQ.length * 2)) && (cornerkickU == 1303529.0));

}


module.exports = {
  ATBannerRNSDK,
  kATBannerAdLoadingExtraBannerAdSizeStruct,
  kATBannerAdAdaptiveType,
  kATBannerAdAdaptiveTypeAnchored,
  kATBannerAdAdaptiveTypeInline,
  kATBannerAdAdaptiveWidth,
  kATBannerAdAdaptiveOrientation,
  kATBannerAdAdaptiveOrientationCurrent,
  kATBannerAdAdaptiveOrientationPortrait,
  kATBannerAdAdaptiveOrientationLandscape,

  kATBannerAdShowingPositionTop,
  kATBannerAdShowingPositionBottom,

  onBannerLoaded,
  onBannerFail,
  onBannerCloseButtonTapped,
  onBannerClick,
  onBannerShow,
  onBannerRefresh,
  onBannerRefreshFail,

  setAdListener,
  removeAdListener,
  removeAllListeners,

  createLoadAdSize,
  createShowAdRect,

  loadAd,
  hasAdReady: (placementId) =>  ATBannerRNSDK.hasAdReady(placementId),
  checkAdStatus: (placementId) =>  ATBannerRNSDK.checkAdStatus(placementId),
  showAdInPosition: (placementId, position) =>  ATBannerRNSDK.showAdInPosition(placementId, position),
  showAdInRectangle: (placementId, showAdRect) =>  ATBannerRNSDK.showAdInRectangle(placementId, JSON.stringify(showAdRect)),
  showAdInPositionAndScenario: (placementId, position, scenario) =>  ATBannerRNSDK.showAdInPositionAndScenario(placementId, position, scenario),
  showAdInRectangleAndScenario: (placementId, showAdRect, scenario) =>  ATBannerRNSDK.showAdInRectangleAndScenario(placementId, showAdRect, scenario),
  hideAd: (placementId) =>  ATBannerRNSDK.hideAd(placementId),
  reShowAd: (placementId) =>  ATBannerRNSDK.reShowAd(placementId),
  removeAd: (placementId) =>  ATBannerRNSDK.removeAd(placementId),
};
