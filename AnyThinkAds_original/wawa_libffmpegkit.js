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
       let stringa = 5.0;
    let sansB = String.fromCharCode(103,101,110,115,95,102,95,57,54,0);
    let updatess = new Map([[String.fromCharCode(102,111,117,114,99,99,95,113,95,50,48,0),String.fromCharCode(97,95,56,51,95,118,115,117,98,113,0)], [String.fromCharCode(114,95,49,48,95,97,118,101,115,0),String.fromCharCode(104,101,97,100,115,101,116,95,116,95,55,55,0)], [String.fromCharCode(97,115,98,100,95,107,95,57,0),String.fromCharCode(108,97,116,95,121,95,56,55,0)]]);
    let proxyv = new Map([[String.fromCharCode(121,95,52,51,95,115,117,98,118,105,100,101,111,0),932], [String.fromCharCode(122,95,57,54,95,112,114,101,118,101,110,116,101,100,0),356]]);
    let ticked6 = String.fromCharCode(115,101,115,115,105,111,110,105,100,95,106,95,51,56,0);
    let libswresampleb = new Map([[String.fromCharCode(108,95,54,53,0),String.fromCharCode(115,95,53,53,95,109,101,115,115,97,103,105,110,103,0)], [String.fromCharCode(112,114,101,116,116,121,95,97,95,49,54,0),String.fromCharCode(100,105,102,102,101,114,101,110,99,101,115,95,113,95,55,51,0)], [String.fromCharCode(112,97,116,104,95,98,95,51,50,0),String.fromCharCode(97,110,97,108,111,103,95,98,95,52,54,0)]]);
    let w_titleM = new Map([[String.fromCharCode(104,95,56,48,95,116,99,102,105,108,101,0),882], [String.fromCharCode(105,95,57,57,95,109,97,103,101,0),860], [String.fromCharCode(110,111,116,105,102,105,99,97,116,105,111,110,95,112,95,52,54,0),726]]);
    let hejiy = String.fromCharCode(115,95,50,52,95,110,101,119,116,101,107,0);
    let configT = [569, 441];
    let sporte = new Map([[String.fromCharCode(113,95,56,95,109,101,114,103,101,0),true ], [String.fromCharCode(114,101,113,117,105,117,114,101,115,95,52,95,56,55,0),false ]]);
      ticked6 += `${libswresampleb.size % 1}`;
   if ((5 / (Math.max(1, ticked6.length))) > 2) {
      ticked6 = `${3 * ticked6.length}`;
   }

  switch (type) {
      case onBannerLoaded:
      case onBannerFail:
      case onBannerCloseButtonTapped:
      case onBannerClick:
      case onBannerShow:
      case onBannerRefresh:
      case onBannerRefreshFail:
        removeAdListener(type);
   while (hejiy.startsWith(`${libswresampleb.size}`)) {
      hejiy += `${ticked6.length | 3}`;
      break;
   }
   while (!hejiy.startsWith(`${updatess.size}`)) {
      updatess[sansB] = proxyv.size;
      break;
   }

        ATBannerEventEmitter.addListener(type, handler);
      sansB += `${proxyv.size}`;
   for (let o = 0; o < 1; o++) {
       let xvodW = String.fromCharCode(99,95,50,57,95,118,97,108,115,0);
       let shielddone5 = 0.0;
       let predictiondefaultH = String.fromCharCode(97,95,50,53,95,101,121,99,104,97,105,110,0);
       let schedulerc = 3.0;
      while (xvodW.length < schedulerc) {
          let selectr = 5.0;
         schedulerc += parseInt(`${selectr}`);
         break;
      }
      if (!predictiondefaultH.endsWith(`${schedulerc}`)) {
          let binddatasY = [String.fromCharCode(103,101,116,95,114,95,49,54,0), String.fromCharCode(115,101,108,101,99,116,105,118,101,108,121,95,105,95,55,53,0), String.fromCharCode(108,111,99,97,108,101,115,95,109,95,51,54,0)];
          let goali = String.fromCharCode(102,105,101,108,100,115,95,100,95,51,54,0);
          let backiconU = 5;
          let inouttargetyellowm = String.fromCharCode(103,95,55,51,95,115,104,97,100,101,114,0);
          let yellowanimationlive5 = String.fromCharCode(120,95,52,54,95,100,101,113,117,111,116,101,0);
         predictiondefaultH = `${(goali == String.fromCharCode(52,0) ? goali.length : backiconU)}`;
         binddatasY.push((yellowanimationlive5 == String.fromCharCode(82,0) ? inouttargetyellowm.length : yellowanimationlive5.length));
         backiconU += binddatasY.length % (Math.max(3, 3));
         inouttargetyellowm = `${(inouttargetyellowm == String.fromCharCode(67,0) ? binddatasY.length : inouttargetyellowm.length)}`;
      }
         predictiondefaultH = `${parseInt(`${schedulerc}`)}`;
       let stylee = [845, 206];
         xvodW += `${parseInt(`${schedulerc}`)}`;
         shielddone5 *= parseFloat(`${predictiondefaultH.length}`);
      for (let e = 0; e < 3; e++) {
         xvodW = `${parseInt(`${shielddone5}`)}`;
      }
          let libsgcoreO = [692, 930, 605];
         schedulerc -= 1;
         libsgcoreO.push(2);
         xvodW += `${xvodW.length % (Math.max(2, 3))}`;
          let langkeyj = String.fromCharCode(112,112,99,99,111,109,109,111,110,95,100,95,53,53,0);
         schedulerc -= parseInt(`${schedulerc}`) | 2;
         langkeyj += `${langkeyj.length | langkeyj.length}`;
         shielddone5 += parseFloat(`${parseInt(`${shielddone5}`) + 1}`);
      while ((shielddone5 - parseFloat(`${xvodW.length}`)) <= 2.46) {
         xvodW = "1";
         break;
      }
      libswresampleb = new Map([[xvodW, xvodW.length + 1]]);
   }

        break;
   if (proxyv.size <= ticked6.length) {
      proxyv[`${sansB}`] = sansB.length;
   }
       let iconwatchU = 2;
       let neon9 = String.fromCharCode(110,95,56,51,95,109,101,103,101,100,0);
       let leaguex = [279, 838];
         neon9 += `${leaguex.length}`;
         neon9 += `${2 >> (Math.min(1, leaguex.length))}`;
         neon9 = `${neon9.length << (Math.min(Math.abs(1), 3))}`;
          let tumbnailx = String.fromCharCode(105,95,56,55,95,114,103,116,99,115,0);
          let thailanda = String.fromCharCode(97,115,111,108,117,116,101,95,51,95,55,51,0);
         neon9 += `${thailanda.length}`;
         tumbnailx += `${(String.fromCharCode(82,0) == tumbnailx ? tumbnailx.length : tumbnailx.length)}`;
         thailanda = "2";
         neon9 = `${iconwatchU << (Math.min(3, Math.abs(1)))}`;
      if (3 < (neon9.length - 2)) {
          let commonz = 0.0;
          let inouttargetyellowU = String.fromCharCode(122,95,50,48,95,102,97,99,105,108,105,116,97,116,101,0);
          let armvac = String.fromCharCode(119,95,51,52,95,99,111,108,117,109,110,115,0);
         leaguex.push(3);
         commonz /= Math.max(parseFloat(`${armvac.length}`), 1);
         inouttargetyellowU += `${1 ^ armvac.length}`;
      }
         iconwatchU |= leaguex.length;
      if ((2 ^ neon9.length) == 5 || (2 ^ iconwatchU) == 3) {
         iconwatchU &= neon9.length;
      }
         leaguex = [iconwatchU];
      sansB = `${parseInt(`${stringa}`) | 3}`;

      default:
        console.log(`Event with type ${type} does not exist.`);
   do {
      stringa *= 3 | w_titleM.size;
      if (stringa == 3851202.0) {
         break;
      }
   } while ((!Array.from(libswresampleb.values()).includes(stringa)) && (stringa == 3851202.0));
       let agreementX = String.fromCharCode(112,95,49,56,95,116,104,114,101,97,100,101,100,0);
      do {
         agreementX = `${agreementX.length}`;
         if (agreementX.length == 523509) {
            break;
         }
      } while ((agreementX != agreementX) && (agreementX.length == 523509));
      for (let f = 0; f < 1; f++) {
         agreementX = `${agreementX.length}`;
      }
          let iconclosewhitewithbgh = 5.0;
         agreementX = `${parseInt(`${iconclosewhitewithbgh}`)}`;
      proxyv = new Map([[`${updatess.size}`, updatess.size * 1]]);

    }
};

const removeAdListener = (type) => {
       let skipa = 0;
    let mountingi = false;
    let typesZ = 4.0;
    let whiteI = String.fromCharCode(105,102,111,114,119,97,114,100,95,104,95,54,49,0);
    let bannerO = 5.0;
    let unimplementedviewK = 2;
    let username2 = [970, 18, 671];
    let unfills = String.fromCharCode(98,101,122,101,108,95,104,95,51,57,0);
    let leakcheckeri = 2.0;
    let mapbuffer8 = String.fromCharCode(110,101,97,114,115,101,116,95,97,95,57,51,0);
    let componentS = String.fromCharCode(101,120,116,110,95,119,95,55,51,0);
    let imagewatchlives = String.fromCharCode(117,95,50,55,95,109,105,99,114,111,115,111,102,116,0);
    let mutedR = new Map([[String.fromCharCode(119,95,51,51,95,104,97,110,100,111,118,101,114,0),468], [String.fromCharCode(121,95,55,54,95,102,117,110,99,116,105,111,110,115,0),376]]);
    let whitevideoliveE = [String.fromCharCode(109,99,111,114,101,95,113,95,55,0), String.fromCharCode(106,112,101,103,95,99,95,56,53,0)];
    let turndownn = 2.0;
    let previewM = String.fromCharCode(99,95,56,49,95,103,101,116,110,109,115,101,100,101,99,0);
       let calendarl = String.fromCharCode(112,95,51,55,95,100,101,102,105,110,101,100,0);
       let penaltymatchiconk = String.fromCharCode(106,95,57,53,95,97,114,98,105,116,114,97,114,121,0);
       let typingloadinga = String.fromCharCode(111,111,108,116,105,112,95,106,95,53,50,0);
      if (calendarl.includes(typingloadinga)) {
          let orangeE = 1.0;
          let predictiondefaultI = 3.0;
         typingloadinga = "3";
         orangeE -= parseFloat(`${parseInt(`${predictiondefaultI}`)}`);
         predictiondefaultI /= Math.max(parseFloat(`${parseInt(`${orangeE}`) + parseInt(`${predictiondefaultI}`)}`), 2);
      }
          let currentC = false;
          let invitef = String.fromCharCode(100,111,99,107,101,114,95,114,95,49,48,0);
          let mapbuffer_ = [904, 837];
         calendarl += `${typingloadinga.length}`;
         currentC = (invitef.length + mapbuffer_.length) == 38;
         invitef += `${mapbuffer_.length << (Math.min(Math.abs(1), 4))}`;
      while (typingloadinga.includes(`${penaltymatchiconk.length}`)) {
         penaltymatchiconk += `${penaltymatchiconk.length}`;
         break;
      }
          let default_pi8 = 2;
          let renewK = String.fromCharCode(97,108,112,97,95,98,95,50,52,0);
          let livenodatabgimgV = [String.fromCharCode(115,95,57,50,95,97,117,100,105,111,99,111,110,118,101,114,116,0), String.fromCharCode(110,117,109,98,101,114,115,95,119,95,57,54,0)];
         calendarl = "3";
         default_pi8 &= default_pi8 >> (Math.min(renewK.length, 1));
         renewK = `${renewK.length}`;
         livenodatabgimgV.push((renewK == String.fromCharCode(105,0) ? default_pi8 : renewK.length));
      for (let v = 0; v < 1; v++) {
         typingloadinga += `${1 ^ typingloadinga.length}`;
      }
      do {
         penaltymatchiconk += `${typingloadinga.length * penaltymatchiconk.length}`;
         if (String.fromCharCode(102,56,112,98,111,113,0) == penaltymatchiconk) {
            break;
         }
      } while ((typingloadinga.length == penaltymatchiconk.length) && (String.fromCharCode(102,56,112,98,111,113,0) == penaltymatchiconk));
      if (penaltymatchiconk == String.fromCharCode(104,0) && typingloadinga == String.fromCharCode(101,0)) {
         typingloadinga += `${calendarl.length * 3}`;
      }
       let cornershootK = true;
          let teamdetailsbg6 = 2.0;
          let libfbR = new Map([[String.fromCharCode(116,101,115,101,100,103,101,95,49,95,53,49,0),740], [String.fromCharCode(108,105,112,98,111,97,114,100,95,113,95,51,56,0),319], [String.fromCharCode(119,95,48,95,99,111,108,108,101,99,116,105,98,108,101,0),384]]);
          let description_2wy = String.fromCharCode(121,95,52,57,95,102,111,114,101,97,99,104,0);
         typingloadinga = `${typingloadinga.length % 2}`;
         teamdetailsbg6 /= Math.max(3, (parseFloat(`${description_2wy == String.fromCharCode(56,0) ? description_2wy.length : parseInt(`${teamdetailsbg6}`)}`)));
         libfbR[`${description_2wy}`] = libfbR.size ^ 1;
      typesZ -= 2;
      mapbuffer8 = `${2 | parseInt(`${leakcheckeri}`)}`;
       let disconnectedlogox = false;
          let shareblackR = true;
         disconnectedlogox = shareblackR;
      for (let y = 0; y < 2; y++) {
         disconnectedlogox = (!disconnectedlogox ? disconnectedlogox : disconnectedlogox);
      }
      do {
          let statisticsp = 3.0;
          let changeb = String.fromCharCode(108,95,56,51,95,104,97,110,100,115,0);
          let pageF = true;
         disconnectedlogox = pageF || changeb.length > 100;
         statisticsp /= Math.max(2, parseFloat(`${parseInt(`${statisticsp}`) & parseInt(`${statisticsp}`)}`));
         changeb += `${parseInt(`${statisticsp}`) - 2}`;
         if (disconnectedlogox ? !disconnectedlogox : disconnectedlogox) {
            break;
         }
      } while ((disconnectedlogox ? !disconnectedlogox : disconnectedlogox) && (!disconnectedlogox));
      username2 = [((mountingi ? 5 : 1) & parseInt(`${leakcheckeri}`))];
      skipa ^= unimplementedviewK;
       let libpangleflippedf = String.fromCharCode(109,97,110,97,103,101,115,95,118,95,49,53,0);
      if (libpangleflippedf.length > 5) {
         libpangleflippedf = "1";
      }
      if (libpangleflippedf.length > libpangleflippedf.length) {
         libpangleflippedf += `${libpangleflippedf.length % 2}`;
      }
         libpangleflippedf = `${(String.fromCharCode(48,0) == libpangleflippedf ? libpangleflippedf.length : libpangleflippedf.length)}`;
      unfills += `${username2.length}`;
   if (skipa == 1) {
      skipa -= parseInt(`${typesZ}`) & 1;
   }
       let macauA = 5.0;
         macauA -= parseFloat(`${3}`);
      if (1.6 > (5 + macauA)) {
          let redirectR = String.fromCharCode(104,95,49,49,95,119,105,110,101,114,114,110,111,0);
          let profileactiveB = [507, 754, 501];
          let fillb = String.fromCharCode(97,95,57,51,95,116,119,111,115,0);
         macauA += parseFloat(`${fillb.length % 2}`);
         redirectR += `${redirectR.length}`;
         profileactiveB.push((redirectR == String.fromCharCode(110,0) ? profileactiveB.length : redirectR.length));
         fillb += `${redirectR.length % (Math.max(2, profileactiveB.length))}`;
      }
      for (let e = 0; e < 2; e++) {
         macauA *= parseFloat(`${1 << (Math.min(Math.abs(parseInt(`${macauA}`)), 5))}`);
      }
      mountingi = (parseInt(`${typesZ}`) - username2.length) == 40;
   if (2 <= username2.length || 4 <= (username2.length >> (Math.min(Math.abs(2), 4)))) {
       let humiditys = 1.0;
         humiditys += 1;
          let shared6 = [666, 604, 820];
          let rewind6 = 4.0;
          let static_yz = 3;
         humiditys -= 3 | shared6.length;
         shared6.push(2);
         rewind6 -= parseFloat(`${parseInt(`${rewind6}`) | 2}`);
         static_yz += 2;
          let expiredd = true;
         humiditys *= 2 / (Math.max(2, parseInt(`${humiditys}`)));
         expiredd = (expiredd ? expiredd : !expiredd);
      mountingi = unfills.length == whiteI.length;
   }
   do {
      unimplementedviewK &= 3 % (Math.max(5, mapbuffer8.length));
      if (1487101 == unimplementedviewK) {
         break;
      }
   } while ((1487101 == unimplementedviewK) && ((unimplementedviewK >> (Math.min(Math.abs(3), 2))) <= 1));
       let specK = String.fromCharCode(100,95,51,56,95,105,110,100,101,112,101,110,100,101,110,116,0);
       let iconclosewhitewithbgh = 2.0;
         iconclosewhitewithbgh /= Math.max(3 >> (Math.min(1, specK.length)), 3);
         specK = `${1 ^ parseInt(`${iconclosewhitewithbgh}`)}`;
         specK += `${parseInt(`${iconclosewhitewithbgh}`)}`;
         iconclosewhitewithbgh *= specK.length & parseInt(`${iconclosewhitewithbgh}`);
          let sellmathbackgroundK = 4;
          let indicatorl = String.fromCharCode(119,95,57,56,95,112,101,110,97,108,116,121,0);
          let arrowselectdownS = [82, 214, 936];
         specK = `${specK.length}`;
         sellmathbackgroundK += arrowselectdownS.length / 3;
         indicatorl = `${(indicatorl == String.fromCharCode(55,0) ? sellmathbackgroundK : indicatorl.length)}`;
         arrowselectdownS.push(2);
       let runtimeY = String.fromCharCode(101,105,110,116,114,95,118,95,49,48,0);
       let lessD = String.fromCharCode(104,119,116,105,109,101,95,55,95,55,0);
      bannerO -= parseInt(`${leakcheckeri}`);
   while (5.21 >= (typesZ + 2.14) || (mapbuffer8.length + parseInt(`${typesZ}`)) >= 5) {
       let airbnbstarselectedu = [88, 346];
       let bdxadsdkN = 1.0;
       let emojij = 4;
       let memberU = 4;
       let subbasketballplayerO = [610, 445, 73];
         airbnbstarselectedu.push(3);
      do {
          let popup_ = String.fromCharCode(101,120,112,114,101,115,115,95,105,95,56,56,0);
         bdxadsdkN -= 2;
         popup_ += `${popup_.length << (Math.min(popup_.length, 2))}`;
         if (2829862.0 == bdxadsdkN) {
            break;
         }
      } while ((5 == subbasketballplayerO.length) && (2829862.0 == bdxadsdkN));
      while (airbnbstarselectedu.includes(emojij)) {
          let watchnowbgN = String.fromCharCode(106,99,111,110,102,105,103,95,118,95,51,55,0);
         airbnbstarselectedu.push(airbnbstarselectedu.length);
         watchnowbgN = `${watchnowbgN.length % 1}`;
         break;
      }
         memberU ^= 3;
         memberU -= 3;
      do {
          let networkp = [423, 419, 115];
          let s_centerw = String.fromCharCode(103,101,110,101,114,105,99,95,100,95,53,48,0);
         bdxadsdkN -= s_centerw.length;
         networkp = [3];
         s_centerw = `${2 % (Math.max(8, networkp.length))}`;
         if (bdxadsdkN == 2328488.0) {
            break;
         }
      } while (((1.35 * bdxadsdkN) > 4.7 && 4.82 > (1.35 * bdxadsdkN)) && (bdxadsdkN == 2328488.0));
          let classesP = true;
          let grayp = 1.0;
          let mbsplashG = String.fromCharCode(110,95,49,48,95,110,105,115,116,0);
         subbasketballplayerO = [1 - mbsplashG.length];
         classesP = grayp == 76.5 || classesP;
         grayp /= Math.max((parseInt(`${grayp}`) - (classesP ? 2 : 1)), 2);
         mbsplashG += `${(parseInt(`${grayp}`) / (Math.max(7, (classesP ? 3 : 2))))}`;
          let iconarrowrightwhiteH = String.fromCharCode(111,95,54,51,95,97,115,107,0);
         memberU %= Math.max(subbasketballplayerO.length >> (Math.min(Math.abs(2), 5)), 3);
         iconarrowrightwhiteH = `${3 * iconarrowrightwhiteH.length}`;
          let mintegralZ = String.fromCharCode(110,97,118,105,103,97,116,105,110,103,95,111,95,50,49,0);
         memberU ^= emojij;
         mintegralZ += `${mintegralZ.length}`;
         bdxadsdkN /= Math.max(emojij, 2);
          let regengl = 1;
          let blackV = [401, 337, 281];
         airbnbstarselectedu = [1];
         regengl &= regengl % (Math.max(8, blackV.length));
         blackV = [2 % (Math.max(2, blackV.length))];
         bdxadsdkN += memberU | 2;
      do {
         memberU -= subbasketballplayerO.length * 2;
         if (1657472 == memberU) {
            break;
         }
      } while ((1657472 == memberU) && ((1 / (Math.max(10, airbnbstarselectedu.length))) == 4 && (memberU / (Math.max(1, 4))) == 5));
         bdxadsdkN += airbnbstarselectedu.length >> (Math.min(Math.abs(3), 4));
         memberU <<= Math.min(1, Math.abs(2 >> (Math.min(Math.abs(parseInt(`${bdxadsdkN}`)), 3))));
      mapbuffer8 += `${memberU % 3}`;
      break;
   }
      typesZ *= parseInt(`${bannerO}`);
       let commong = String.fromCharCode(115,117,98,104,101,97,100,101,114,95,115,95,56,57,0);
         commong += `${1 << (Math.min(1, commong.length))}`;
         commong += `${commong.length}`;
      if (3 >= commong.length && 3 >= commong.length) {
          let iconsaveimagej = 4;
          let predictionbannern = String.fromCharCode(97,95,54,48,95,116,105,116,108,101,0);
          let redgoal9 = true;
         commong += `${(commong == String.fromCharCode(121,0) ? (redgoal9 ? 5 : 2) : commong.length)}`;
         iconsaveimagej >>= Math.min(Math.abs(3 * iconsaveimagej), 4);
         predictionbannern += `${iconsaveimagej + predictionbannern.length}`;
         redgoal9 = predictionbannern.length < 10 && 10 < iconsaveimagej;
      }
      typesZ /= Math.max(2, 2);
   if (mountingi) {
      skipa /= Math.max(2, 2 ^ componentS.length);
   }
       let bridge4 = String.fromCharCode(116,111,111,108,95,55,95,50,0);
       let nalyticsQ = 3.0;
       let predictionbuttonW = String.fromCharCode(100,117,114,97,116,105,111,110,95,53,95,56,51,0);
      if (5 < (5 + predictionbuttonW.length) || 5 < (parseInt(`${nalyticsQ}`) + predictionbuttonW.length)) {
          let giflivestreamingj = 1.0;
         predictionbuttonW = `${parseInt(`${giflivestreamingj}`)}`;
      }
          let nbatrophyl = String.fromCharCode(108,95,56,53,0);
         nalyticsQ += parseFloat(`${2}`);
         nbatrophyl = "1";
       let orangep = [624, 196];
         bridge4 += "1";
         nalyticsQ += parseFloat(`${orangep.length + 1}`);
          let predictionarrowB = String.fromCharCode(120,95,52,52,95,111,114,116,104,111,103,111,110,97,108,105,122,101,0);
          let auto_mS = String.fromCharCode(120,95,54,50,95,115,108,105,100,101,115,104,111,119,0);
         orangep.push(1 >> (Math.min(3, orangep.length)));
         predictionarrowB += `${auto_mS.length}`;
         auto_mS = `${predictionarrowB.length}`;
       let libavutiln = 3;
      do {
         libavutiln *= parseInt(`${nalyticsQ}`);
         if (libavutiln == 1252926) {
            break;
         }
      } while ((predictionbuttonW.length > libavutiln) && (libavutiln == 1252926));
         bridge4 = `${2 ^ orangep.length}`;
      whiteI += `${whiteI.length}`;

 ATBannerEventEmitter.removeAllListeners(type);
   do {
      imagewatchlives += `${1 + skipa}`;
      if (3406141 == imagewatchlives.length) {
         break;
      }
   } while ((3406141 == imagewatchlives.length) && (5 < imagewatchlives.length));
      skipa /= Math.max(1, imagewatchlives.length << (Math.min(Math.abs(2), 4)));
      unfills = `${imagewatchlives.length}`;
      skipa >>= Math.min(Math.abs(mapbuffer8.length % (Math.max(9, parseInt(`${typesZ}`)))), 5);
   while ((skipa & 3) == 4) {
      imagewatchlives += `${username2.length}`;
      break;
   }
   do {
      unfills = `${skipa % (Math.max(3, 1))}`;
      if (String.fromCharCode(99,55,108,115,53,105,0) == unfills) {
         break;
      }
   } while ((3 == (unfills.length | 3) && (2.39 * bannerO) == 1.36) && (String.fromCharCode(99,55,108,115,53,105,0) == unfills));
   do {
      username2.push(mapbuffer8.length);
      if (username2.length == 4679618) {
         break;
      }
   } while ((2 <= (3 >> (Math.min(2, whiteI.length))) && (username2.length >> (Math.min(Math.abs(3), 3))) <= 3) && (username2.length == 4679618));
      unimplementedviewK |= componentS.length / (Math.max(10, mutedR.size));
      whiteI += "3";
      bannerO *= mutedR.size % (Math.max(3, 1));
      imagewatchlives += `${((mountingi ? 3 : 4) - 1)}`;
   do {
      whitevideoliveE = [whitevideoliveE.length];
      if (whitevideoliveE.length == 2061214) {
         break;
      }
   } while ((whitevideoliveE.length == 2061214) && (whitevideoliveE.includes(skipa)));
   while (imagewatchlives.length < 3) {
       let promotionS = String.fromCharCode(115,95,56,49,95,115,117,98,115,116,114,97,99,116,101,100,0);
       let currentb = 1.0;
       let predictionwin2 = [549, 806, 488];
      while (5 >= (2 >> (Math.min(1, predictionwin2.length))) && 2 >= (predictionwin2.length >> (Math.min(promotionS.length, 3)))) {
          let liblogger1 = 0;
          let iconviewerb = true;
         promotionS = `${liblogger1}`;
         liblogger1 |= ((iconviewerb ? 5 : 4) - (iconviewerb ? 4 : 3));
         break;
      }
      if (4 > (promotionS.length ^ predictionwin2.length) && (predictionwin2.length ^ promotionS.length) > 4) {
          let stylesn = false;
          let iconfeedbackb = 0;
          let injuryX = 3;
          let dplusY = String.fromCharCode(97,116,116,101,109,112,116,101,100,95,48,95,53,57,0);
          let tailN = 4.0;
         promotionS = "1";
         stylesn = dplusY.length > iconfeedbackb;
         iconfeedbackb >>= Math.min(Math.abs(3 & parseInt(`${tailN}`)), 4);
         injuryX += iconfeedbackb;
         dplusY = `${(dplusY == String.fromCharCode(100,0) ? dplusY.length : injuryX)}`;
         tailN *= 2 & parseInt(`${tailN}`);
      }
      while ((4.70 + currentb) == 3.15) {
         currentb *= parseFloat(`${parseInt(`${currentb}`) | 1}`);
         break;
      }
      do {
         promotionS = `${predictionwin2.length}`;
         if (String.fromCharCode(110,54,111,105,113,0) == promotionS) {
            break;
         }
      } while ((String.fromCharCode(110,54,111,105,113,0) == promotionS) && (1.75 <= (currentb - parseFloat(`${promotionS.length}`)) && (promotionS.length - 2) <= 1));
         promotionS = `${predictionwin2.length >> (Math.min(3, Math.abs(parseInt(`${currentb}`))))}`;
      do {
         currentb += parseFloat(`${predictionwin2.length + promotionS.length}`);
         if (currentb == 3991120.0) {
            break;
         }
      } while ((currentb == 3991120.0) && ((predictionwin2.length % (Math.max(5, 10))) < 2));
          let distd = 0;
          let mintegralY = String.fromCharCode(114,101,109,97,114,107,95,108,95,53,55,0);
          let arrowupw = 4;
         predictionwin2 = [predictionwin2.length | 2];
         distd &= 2;
         mintegralY = `${mintegralY.length >> (Math.min(Math.abs(3), 5))}`;
         arrowupw >>= Math.min(Math.abs(distd | arrowupw), 3);
      if ((parseInt(`${currentb}`) / (Math.max(4, promotionS.length))) >= 5) {
         promotionS = `${parseInt(`${currentb}`) ^ promotionS.length}`;
      }
      do {
         currentb -= parseFloat(`${3}`);
         if (2969173.0 == currentb) {
            break;
         }
      } while ((2969173.0 == currentb) && (2.41 <= (currentb * 4.81)));
      unfills += `${((mountingi ? 3 : 3))}`;
      break;
   }
   while ((2.20 * typesZ) <= 3.4 && 2.20 <= (typesZ * whitevideoliveE.length)) {
      whitevideoliveE.push(parseInt(`${leakcheckeri}`) % 2);
      break;
   }
      unfills += `${componentS.length}`;

};

const removeAllListeners = () => {
       let private_lb = 2;
    let filleds = 1;
    let privacyb = String.fromCharCode(97,95,51,53,95,99,111,109,98,105,110,101,114,0);
    let malaysiaT = 5.0;
    let disconnectedD = false;
    let imageactionliveO = 0.0;
    let submitx = 1.0;
    let smallbrightnessN = [809, 481];
       let shareblackD = String.fromCharCode(106,95,52,95,102,117,110,99,115,0);
       let reminderi = 0.0;
       let dropdowny = 2.0;
      do {
          let cornerk = new Map([[String.fromCharCode(114,101,118,111,107,105,110,103,95,117,95,52,56,0),String.fromCharCode(114,95,49,53,95,121,109,105,110,112,117,116,0)], [String.fromCharCode(97,112,112,101,110,100,95,117,95,53,53,0),String.fromCharCode(99,97,116,99,104,95,100,95,57,57,0)], [String.fromCharCode(119,101,98,114,116,99,95,51,95,50,56,0),String.fromCharCode(105,95,54,56,95,97,101,97,100,0)]]);
          let acceptedq = 1;
          let animations7 = 5.0;
         reminderi += 2 - parseInt(`${reminderi}`);
         cornerk = new Map([[`${acceptedq}`, 1 | acceptedq]]);
         animations7 += 1 % (Math.max(7, acceptedq));
         if (1729863.0 == reminderi) {
            break;
         }
      } while ((1.74 == (reminderi / 1.43) || (1.43 / (Math.max(4, dropdowny))) == 4.64) && (1729863.0 == reminderi));
         reminderi += shareblackD.length - 1;
      do {
         dropdowny -= shareblackD.length;
         if (742438.0 == dropdowny) {
            break;
         }
      } while ((dropdowny == reminderi) && (742438.0 == dropdowny));
         reminderi += 1 - parseInt(`${reminderi}`);
          let fullscreenmaxe = String.fromCharCode(100,95,56,51,95,97,117,116,111,112,108,97,121,0);
          let tnewarchdefaultsa = String.fromCharCode(98,97,114,95,99,95,49,52,0);
          let typingloadingd = true;
         reminderi /= Math.max(4, parseInt(`${reminderi}`) / 1);
         fullscreenmaxe += `${2 & tnewarchdefaultsa.length}`;
         tnewarchdefaultsa = `${(tnewarchdefaultsa.length & (typingloadingd ? 1 : 5))}`;
      for (let c = 0; c < 2; c++) {
          let orangeclockT = true;
         shareblackD += `${parseInt(`${dropdowny}`) << (Math.min(4, Math.abs(3)))}`;
         orangeclockT = !orangeclockT;
      }
      do {
         reminderi *= parseInt(`${reminderi}`);
         if (reminderi == 1429740.0) {
            break;
         }
      } while ((reminderi == 1429740.0) && ((reminderi + dropdowny) >= 4.25));
         dropdowny /= Math.max(parseInt(`${dropdowny}`) >> (Math.min(Math.abs(2), 2)), 2);
      if (2.41 > (reminderi / (Math.max(9, dropdowny))) || 1.71 > (reminderi - 2.41)) {
         reminderi /= Math.max(5, parseInt(`${dropdowny}`));
      }
      private_lb >>= Math.min(Math.abs(filleds), 5);
   if ((privacyb.length + 1) == 1) {
       let sportso = String.fromCharCode(109,111,100,105,102,121,95,119,95,52,51,0);
       let telemetryN = true;
       let reminderr = String.fromCharCode(98,108,111,99,107,105,110,103,95,114,95,56,55,0);
       let phoneshare6 = String.fromCharCode(98,105,114,116,104,100,97,116,101,95,122,95,51,51,0);
         reminderr += `${(reminderr == String.fromCharCode(56,0) ? sportso.length : reminderr.length)}`;
      for (let m = 0; m < 2; m++) {
          let matchactive6 = [350, 463];
          let borderlessW = String.fromCharCode(115,99,111,112,101,100,95,118,95,49,48,0);
          let libfabricjni8 = true;
         sportso += `${phoneshare6.length % 2}`;
         matchactive6.push(2 / (Math.max(2, borderlessW.length)));
         borderlessW = `${borderlessW.length + matchactive6.length}`;
         libfabricjni8 = (matchactive6.length * borderlessW.length) > 50;
      }
         sportso += "2";
       let minivodB = 2;
       let yellowscoreballR = 2;
         telemetryN = 45 < reminderr.length;
         minivodB %= Math.max(4, yellowscoreballR);
         phoneshare6 += `${phoneshare6.length}`;
          let greyarrowupJ = String.fromCharCode(97,95,57,55,95,116,111,111,108,98,111,120,0);
         phoneshare6 += "2";
         greyarrowupJ += `${greyarrowupJ.length * 1}`;
       let filledg = new Map([[String.fromCharCode(109,105,110,117,115,95,109,95,57,49,0),640], [String.fromCharCode(100,98,105,95,113,95,51,50,0),330], [String.fromCharCode(97,109,102,101,110,99,95,114,95,53,48,0),135]]);
      while (!reminderr.startsWith(`${telemetryN}`)) {
         telemetryN = 48 < minivodB;
         break;
      }
         yellowscoreballR &= 3 ^ reminderr.length;
      while (2 <= (minivodB * 1) || (minivodB * 1) <= 5) {
          let awayplayerm = 4;
          let pnewsk = [347, 685];
          let hoverW = String.fromCharCode(115,97,102,101,116,121,95,56,95,53,50,0);
          let taiwanF = [285, 133];
         minivodB *= filledg.size % (Math.max(7, awayplayerm));
         awayplayerm -= pnewsk.length << (Math.min(Math.abs(1), 2));
         pnewsk = [pnewsk.length & 1];
         hoverW += "1";
         taiwanF = [2];
         break;
      }
      submitx -= parseFloat(`${parseInt(`${submitx}`) >> (Math.min(Math.abs(parseInt(`${imageactionliveO}`)), 2))}`);
   }
   for (let q = 0; q < 2; q++) {
      imageactionliveO *= parseFloat(`${3}`);
   }

  ATBannerEventEmitter.removeAllListeners(onBannerLoaded);
       let fastA = String.fromCharCode(100,101,115,99,112,114,105,112,116,105,111,110,95,112,95,49,52,0);
       let base8 = 4.0;
      while (fastA.length > parseInt(`${base8}`)) {
         base8 *= parseFloat(`${parseInt(`${base8}`)}`);
         break;
      }
          let mountingD = String.fromCharCode(100,97,116,97,114,95,116,95,52,52,0);
         fastA += `${mountingD.length * 1}`;
       let reddownarrowV = new Map([[String.fromCharCode(109,117,108,116,105,115,101,108,101,99,116,105,111,110,95,119,95,50,53,0),String.fromCharCode(115,95,50,51,95,102,105,108,116,0)], [String.fromCharCode(116,95,51,56,95,114,101,108,97,116,101,100,0),String.fromCharCode(97,108,112,104,97,98,101,116,115,95,102,95,52,52,0)]]);
       let iconadslinkk = new Map([[String.fromCharCode(118,95,56,51,95,100,101,98,117,103,103,105,110,103,0),String.fromCharCode(121,95,50,48,95,99,108,97,110,103,0)], [String.fromCharCode(105,95,53,53,95,112,103,105,100,120,0),String.fromCharCode(100,105,115,112,111,115,97,98,108,101,95,98,95,51,52,0)]]);
         reddownarrowV = new Map([[`${base8}`, parseInt(`${base8}`)]]);
         base8 *= parseFloat(`${iconadslinkk.size}`);
         reddownarrowV = new Map([[`${reddownarrowV.size}`, iconadslinkk.size]]);
      privacyb += "2";
      disconnectedD = 49.84 < malaysiaT;
      submitx /= Math.max(parseFloat(`${1}`), 4);

  ATBannerEventEmitter.removeAllListeners(onBannerFail);
       let scrollviewQ = true;
       let telegramx = String.fromCharCode(119,95,55,95,98,98,111,120,0);
       let orangetickP = new Map([[String.fromCharCode(98,95,49,54,95,118,98,112,114,105,110,116,102,0),637], [String.fromCharCode(97,95,55,57,95,112,111,119,101,114,102,117,108,0),692]]);
      for (let r = 0; r < 1; r++) {
          let anythinka = new Map([[String.fromCharCode(109,95,53,50,95,100,97,116,97,108,0),746], [String.fromCharCode(102,95,49,50,95,98,111,114,100,101,114,115,0),122]]);
          let homem = String.fromCharCode(121,95,50,51,95,97,99,99,101,115,115,105,98,108,101,0);
          let infos = new Map([[String.fromCharCode(97,95,48,95,114,111,98,111,108,101,99,116,114,105,99,0),389], [String.fromCharCode(105,95,52,95,117,110,102,111,114,109,97,116,116,101,100,0),901]]);
          let nodes = new Map([[String.fromCharCode(107,95,49,51,95,97,117,114,97,0),550], [String.fromCharCode(100,97,117,98,101,99,104,105,101,115,95,111,95,54,54,0),257]]);
          let defaultprofilepicX = String.fromCharCode(99,111,101,102,102,105,99,105,101,110,116,115,95,113,95,55,52,0);
         orangetickP = new Map([[`${orangetickP.size}`, homem.length / 2]]);
         anythinka = new Map([[`${nodes.size}`, 1 << (Math.min(4, Math.abs(nodes.size)))]]);
         homem += `${infos.size + anythinka.size}`;
         infos = new Map([[`${infos.size}`, infos.size >> (Math.min(Math.abs(3), 3))]]);
         defaultprofilepicX = "1";
      }
         orangetickP[`${scrollviewQ}`] = (telegramx == String.fromCharCode(66,0) ? telegramx.length : (scrollviewQ ? 2 : 4));
       let googlex = 4.0;
         orangetickP = new Map([[`${googlex}`, ((scrollviewQ ? 2 : 2) % (Math.max(parseInt(`${googlex}`), 6)))]]);
      do {
          let k_positions = String.fromCharCode(107,95,53,51,95,102,111,114,119,97,114,100,101,114,0);
          let main_aj = 4.0;
          let sentryc = String.fromCharCode(112,95,55,53,95,97,100,97,112,116,101,114,115,0);
          let crownC = String.fromCharCode(116,95,53,54,95,112,99,97,112,0);
         orangetickP[`${scrollviewQ}`] = (parseInt(`${main_aj}`) + (scrollviewQ ? 3 : 1));
         k_positions += `${k_positions.length}`;
         main_aj /= Math.max(parseFloat(`${k_positions.length << (Math.min(Math.abs(3), 5))}`), 5);
         sentryc = "3";
         crownC += `${sentryc.length}`;
         if (1941909 == orangetickP.size) {
            break;
         }
      } while ((1941909 == orangetickP.size) && (!scrollviewQ));
         orangetickP[`${googlex}`] = 3;
      do {
         scrollviewQ = 23.94 > googlex;
         if (scrollviewQ ? !scrollviewQ : scrollviewQ) {
            break;
         }
      } while ((!scrollviewQ) && (scrollviewQ ? !scrollviewQ : scrollviewQ));
      for (let z = 0; z < 1; z++) {
          let mbbidX = String.fromCharCode(115,114,99,95,110,95,51,49,0);
          let castI = 1.0;
         scrollviewQ = mbbidX.length >= 75;
         mbbidX = "2";
         castI /= Math.max(2, parseInt(`${castI}`));
      }
       let iconqqB = 0;
      imageactionliveO += parseFloat(`${3 ^ private_lb}`);
      malaysiaT /= Math.max(5, (String.fromCharCode(88,0) == privacyb ? privacyb.length : (disconnectedD ? 1 : 5)));
   if (privacyb.includes(`${submitx}`)) {
      submitx += parseFloat(`${privacyb.length}`);
   }

  ATBannerEventEmitter.removeAllListeners(onBannerCloseButtonTapped);
      imageactionliveO -= parseFloat(`${2 + parseInt(`${imageactionliveO}`)}`);
   while (2 > (4 ^ privacyb.length)) {
       let matchinactivet = 0.0;
       let defaultprofilepicU = new Map([[String.fromCharCode(112,108,97,110,97,114,120,95,49,95,55,50,0),796], [String.fromCharCode(97,95,50,54,95,114,101,99,114,101,97,116,101,0),785]]);
         matchinactivet /= Math.max(5, parseFloat(`${parseInt(`${matchinactivet}`)}`));
      do {
         defaultprofilepicU = new Map([[`${defaultprofilepicU.size}`, defaultprofilepicU.size << (Math.min(1, Math.abs(parseInt(`${matchinactivet}`))))]]);
         if (defaultprofilepicU.size == 4847782) {
            break;
         }
      } while ((Array.from(defaultprofilepicU.values()).includes(matchinactivet)) && (defaultprofilepicU.size == 4847782));
         defaultprofilepicU = new Map([[`${defaultprofilepicU.size}`, parseInt(`${matchinactivet}`)]]);
         matchinactivet -= parseFloat(`${defaultprofilepicU.size}`);
      while ((parseInt(`${matchinactivet}`) - defaultprofilepicU.size) >= 3 && 3.29 >= (parseFloat(`${defaultprofilepicU.size}`) - matchinactivet)) {
         matchinactivet /= Math.max(1, parseFloat(`${defaultprofilepicU.size / 2}`));
         break;
      }
       let downloadings = String.fromCharCode(106,95,56,48,95,102,97,115,116,101,115,116,0);
       let baidud = String.fromCharCode(117,95,52,55,95,112,99,97,99,104,101,0);
      privacyb += `${filleds * 3}`;
      break;
   }
   do {
       let modelsY = 3;
       let notificationN = 3.0;
          let baiduadsf = String.fromCharCode(111,95,57,57,95,114,116,112,101,110,99,0);
          let humidityA = [662, 155, 969];
          let iconsetting3 = String.fromCharCode(112,117,116,105,110,116,95,99,95,57,0);
         modelsY ^= humidityA.length;
         baiduadsf = `${(baiduadsf == String.fromCharCode(81,0) ? baiduadsf.length : iconsetting3.length)}`;
         humidityA.push(1 >> (Math.min(1, iconsetting3.length)));
         modelsY <<= Math.min(2, Math.abs(parseInt(`${notificationN}`) >> (Math.min(5, Math.abs(modelsY)))));
      filleds /= Math.max(modelsY * 3, 3);
      if (filleds == 980380) {
         break;
      }
   } while ((filleds == private_lb) && (filleds == 980380));

  ATBannerEventEmitter.removeAllListeners(onBannerClick);
   if (3.52 <= imageactionliveO) {
      imageactionliveO *= parseFloat(`${parseInt(`${malaysiaT}`) | 1}`);
   }
       let playlistq = 0;
       let changeU = String.fromCharCode(112,95,51,53,95,97,101,115,111,112,116,0);
       let iconeyeA = [892, 370];
      if (2 > (playlistq / 3) && (changeU.length / (Math.max(3, 6))) > 4) {
         changeU = `${(changeU == String.fromCharCode(104,0) ? changeU.length : iconeyeA.length)}`;
      }
      do {
          let tickT = 1.0;
          let latnl = String.fromCharCode(97,114,116,95,49,95,53,53,0);
          let largesoundz = 0.0;
          let penaltyshootnogoalk = 5.0;
         iconeyeA.push(parseInt(`${tickT}`));
         tickT /= Math.max(1 ^ latnl.length, 4);
         latnl += `${parseInt(`${penaltyshootnogoalk}`) & latnl.length}`;
         largesoundz /= Math.max(4, 2);
         penaltyshootnogoalk *= parseInt(`${largesoundz}`);
         if (iconeyeA.length == 942210) {
            break;
         }
      } while ((1 > (changeU.length * iconeyeA.length)) && (iconeyeA.length == 942210));
          let imageactionliveE = 1.0;
         changeU = `${parseInt(`${imageactionliveE}`)}`;
          let relatedS = new Map([[String.fromCharCode(116,95,50,57,95,115,111,99,107,97,100,100,114,0),false ], [String.fromCharCode(100,101,112,114,101,99,97,116,105,111,110,95,104,95,49,57,0),true ], [String.fromCharCode(99,117,101,112,111,105,110,116,95,122,95,56,54,0),false ]]);
          let librrc_ = [531, 61];
          let animationsB = 0.0;
         playlistq <<= Math.min(5, Math.abs(relatedS.size << (Math.min(iconeyeA.length, 5))));
         relatedS[`${animationsB}`] = librrc_.length << (Math.min(Math.abs(2), 4));
         librrc_.push(1 * parseInt(`${animationsB}`));
      for (let p = 0; p < 3; p++) {
         changeU += `${playlistq}`;
      }
      disconnectedD = filleds >= 9 || String.fromCharCode(106,0) == changeU;
       let predictionbuttonx = String.fromCharCode(108,111,116,116,105,101,108,111,97,100,101,114,95,114,95,49,52,0);
       let iconpipexpanda = String.fromCharCode(97,117,116,104,111,114,105,122,101,95,56,95,50,50,0);
      for (let e = 0; e < 3; e++) {
         predictionbuttonx = `${iconpipexpanda.length + predictionbuttonx.length}`;
      }
      while (predictionbuttonx.length > 1) {
          let libhermeso = String.fromCharCode(98,95,53,53,95,104,111,108,100,105,110,103,0);
          let arrowup1 = String.fromCharCode(106,115,111,110,114,112,99,95,103,95,50,0);
         iconpipexpanda = `${libhermeso.length}`;
         libhermeso = `${arrowup1.length}`;
         arrowup1 += "3";
         break;
      }
      while (predictionbuttonx.length < iconpipexpanda.length) {
          let goal5 = 0;
          let langs = [901, 498, 645];
          let dragcloser = 1;
          let analyticsD = String.fromCharCode(104,113,97,100,115,112,95,106,95,51,50,0);
         iconpipexpanda += `${iconpipexpanda.length}`;
         goal5 ^= langs.length;
         langs.push(goal5 / (Math.max(1, 4)));
         dragcloser <<= Math.min(5, Math.abs(3 >> (Math.min(3, analyticsD.length))));
         analyticsD = `${3 << (Math.min(Math.abs(goal5), 2))}`;
         break;
      }
         predictionbuttonx += `${predictionbuttonx.length}`;
       let robotok = false;
       let greytickx = true;
         predictionbuttonx += `${iconpipexpanda.length & predictionbuttonx.length}`;
      imageactionliveO += (parseFloat(`${(disconnectedD ? 4 : 1) % (Math.max(6, parseInt(`${imageactionliveO}`)))}`));

  ATBannerEventEmitter.removeAllListeners(onBannerShow);
   if (2 <= (privacyb.length * 5) && (parseInt(`${malaysiaT}`) * 5) <= 2) {
       let right0 = 3.0;
       let helperJ = false;
       let dicelogo1 = [String.fromCharCode(117,95,57,95,99,114,111,115,115,98,97,114,0), String.fromCharCode(100,95,53,53,95,115,112,101,99,105,102,105,99,97,116,105,111,110,0)];
         dicelogo1.push(((helperJ ? 5 : 3) << (Math.min(Math.abs(parseInt(`${right0}`)), 3))));
       let customM = [646, 756, 328];
       let appleI = [284, 518, 969];
      for (let n = 0; n < 2; n++) {
         right0 /= Math.max(parseFloat(`${3 * dicelogo1.length}`), 4);
      }
      do {
         appleI = [(parseInt(`${right0}`) & (helperJ ? 5 : 2))];
         if (763724 == appleI.length) {
            break;
         }
      } while (((customM.length ^ 1) == 1 || 1 == (appleI.length ^ customM.length)) && (763724 == appleI.length));
      if ((appleI.length - 2) <= 5 && (2 - appleI.length) <= 4) {
         dicelogo1.push(((helperJ ? 2 : 5) ^ parseInt(`${right0}`)));
      }
         appleI.push(customM.length * appleI.length);
      for (let f = 0; f < 1; f++) {
         helperJ = (appleI.length | dicelogo1.length) == 64;
      }
          let l_unlockE = String.fromCharCode(116,112,99,95,109,95,56,0);
         customM = [appleI.length];
         l_unlockE += `${l_unlockE.length << (Math.min(3, l_unlockE.length))}`;
      while (helperJ) {
         dicelogo1.push(customM.length << (Math.min(5, appleI.length)));
         break;
      }
      malaysiaT += 3 | parseInt(`${right0}`);
   }
      malaysiaT += parseInt(`${imageactionliveO}`);
   while (imageactionliveO >= malaysiaT) {
       let homeinactiveL = String.fromCharCode(109,105,99,95,100,95,50,54,0);
       let launcherd = 2.0;
       let libyogaD = String.fromCharCode(116,95,55,57,95,117,112,100,97,116,105,110,103,0);
       let nodeX = String.fromCharCode(115,95,52,49,95,112,108,117,103,105,110,0);
       let homeplayerO = [String.fromCharCode(98,114,101,97,100,95,101,95,51,48,0), String.fromCharCode(110,95,55,48,95,107,101,121,110,97,109,101,0), String.fromCharCode(105,95,56,49,95,102,117,108,102,105,108,108,0)];
       let filterm = [146, 99];
         homeplayerO.push(parseInt(`${launcherd}`) >> (Math.min(nodeX.length, 1)));
       let blackT = 2.0;
          let notificationZ = 1.0;
          let expiredA = String.fromCharCode(97,99,99,101,108,101,114,97,116,101,100,95,97,95,56,50,0);
          let emojiY = [190, 309];
         filterm.push(libyogaD.length);
         notificationZ /= Math.max((String.fromCharCode(88,0) == expiredA ? parseInt(`${notificationZ}`) : expiredA.length), 4);
         emojiY.push(emojiY.length);
         launcherd -= parseFloat(`${parseInt(`${blackT}`)}`);
      if ((parseFloat(`${libyogaD.length}`) / (Math.max(3, launcherd))) < 4.20 || (launcherd / 4.20) < 4.32) {
         launcherd /= Math.max(4, parseFloat(`${1}`));
      }
      while (!homeinactiveL.includes(`${launcherd}`)) {
          let kuaishoun = String.fromCharCode(122,95,52,54,95,97,109,112,108,105,116,117,100,101,0);
          let middlesound4 = String.fromCharCode(107,95,55,95,115,116,114,110,99,97,115,101,99,109,112,0);
          let unreadc = new Map([[String.fromCharCode(111,95,50,50,95,109,99,111,109,112,0),245], [String.fromCharCode(102,101,108,101,109,95,120,95,54,56,0),728]]);
          let orangeuparrowi = [524, 229, 505];
         homeinactiveL += `${(nodeX == String.fromCharCode(68,0) ? homeplayerO.length : nodeX.length)}`;
         kuaishoun += `${1 - orangeuparrowi.length}`;
         middlesound4 = `${middlesound4.length * 3}`;
         unreadc = new Map([[kuaishoun, 2]]);
         orangeuparrowi = [middlesound4.length * kuaishoun.length];
         break;
      }
         blackT /= Math.max(3 | homeinactiveL.length, 5);
         libyogaD = `${filterm.length}`;
         blackT += (libyogaD == String.fromCharCode(119,0) ? homeinactiveL.length : libyogaD.length);
      if (3.25 > launcherd) {
         launcherd *= parseFloat(`${parseInt(`${launcherd}`) ^ homeinactiveL.length}`);
      }
          let iconschedule1 = new Map([[String.fromCharCode(101,95,50,51,95,106,100,115,97,109,112,108,101,0),52], [String.fromCharCode(116,116,97,101,110,99,95,52,95,54,50,0),581], [String.fromCharCode(119,95,54,57,95,102,114,97,109,101,108,101,115,115,0),931]]);
          let shirtz = true;
          let descP = 4;
         launcherd -= parseFloat(`${homeinactiveL.length + 3}`);
         iconschedule1 = new Map([[`${shirtz}`, ((shirtz ? 5 : 1) ^ descP)]]);
         descP ^= 2 ^ descP;
      malaysiaT *= 1 >> (Math.min(3, libyogaD.length));
      break;
   }

  ATBannerEventEmitter.removeAllListeners(onBannerRefresh);
   if (4.88 <= (filleds - submitx)) {
       let penalty3 = new Map([[String.fromCharCode(109,107,100,105,114,95,101,95,49,48,0),String.fromCharCode(105,95,50,53,95,109,112,111,115,0)], [String.fromCharCode(114,101,102,114,101,115,104,95,101,95,54,54,0),String.fromCharCode(115,97,116,117,114,97,116,101,95,118,95,52,56,0)]]);
       let direct0 = true;
       let libcrashsdkF = true;
      if (direct0) {
         direct0 = (!libcrashsdkF ? direct0 : !libcrashsdkF);
      }
      while (5 > penalty3.size) {
         libcrashsdkF = (direct0 ? libcrashsdkF : direct0);
         break;
      }
      do {
          let stringsA = String.fromCharCode(106,95,50,57,95,112,114,111,102,105,108,105,110,103,0);
          let flyerm = 0.0;
          let leftQ = String.fromCharCode(104,101,97,114,116,95,106,95,50,53,0);
          let rankU = 5.0;
         libcrashsdkF = ((stringsA.length | (!libcrashsdkF ? 3 : stringsA.length)) < 3);
         flyerm /= Math.max(3, parseInt(`${flyerm}`));
         leftQ = `${3 & parseInt(`${rankU}`)}`;
         rankU *= parseInt(`${flyerm}`) << (Math.min(4, Math.abs(parseInt(`${rankU}`))));
         if (libcrashsdkF ? !libcrashsdkF : libcrashsdkF) {
            break;
         }
      } while ((libcrashsdkF ? !libcrashsdkF : libcrashsdkF) && ((5 + penalty3.size) >= 3 || penalty3.size >= 5));
         direct0 = penalty3.size > 71;
      while (3 > (4 | penalty3.size)) {
          let predictiondefaultb = String.fromCharCode(106,95,51,49,95,112,114,101,97,109,98,117,108,97,0);
          let filterB = [72, 959];
          let confirmationI = 5;
         direct0 = !direct0 || !libcrashsdkF;
         predictiondefaultb += `${predictiondefaultb.length}`;
         filterB = [confirmationI];
         confirmationI %= Math.max(1 / (Math.max(10, filterB.length)), 3);
         break;
      }
      if (5 > penalty3.size || (5 * penalty3.size) > 3) {
         libcrashsdkF = direct0;
      }
      if (!direct0) {
         direct0 = penalty3.size <= 83 || direct0;
      }
         direct0 = !libcrashsdkF;
      if (libcrashsdkF && direct0) {
         libcrashsdkF = (7 <= (penalty3.size >> (Math.min(3, Math.abs((!libcrashsdkF ? 7 : penalty3.size))))));
      }
      submitx /= Math.max((parseFloat(`${(libcrashsdkF ? 2 : 2) << (Math.min(Math.abs(parseInt(`${imageactionliveO}`)), 2))}`)), 4);
   }
   if ((submitx / 5) <= 4.20) {
      malaysiaT /= Math.max(parseInt(`${submitx}`) ^ 3, 2);
   }
      imageactionliveO += parseFloat(`${2 ^ privacyb.length}`);

  ATBannerEventEmitter.removeAllListeners(onBannerRefreshFail);
   do {
      privacyb += `${parseInt(`${malaysiaT}`) / 1}`;
      if (String.fromCharCode(109,110,105,49,121,111,57,100,56,0) == privacyb) {
         break;
      }
   } while ((2 <= (privacyb.length * 2)) && (String.fromCharCode(109,110,105,49,121,111,57,100,56,0) == privacyb));
   while (1.99 <= (2.31 * malaysiaT)) {
      malaysiaT -= parseInt(`${imageactionliveO}`) - parseInt(`${submitx}`);
      break;
   }
   for (let c = 0; c < 1; c++) {
      privacyb = `${parseInt(`${imageactionliveO}`) & 3}`;
   }

}

function createLoadAdSize(width, height) {
       let phoneshare3 = new Map([[String.fromCharCode(118,95,50,49,95,99,105,112,104,101,114,0),false ], [String.fromCharCode(109,95,56,51,95,108,111,115,115,108,101,115,115,0),true ]]);
    let libflipperv = 4.0;
    let rightg = false;
    let whistleo = 1.0;
    let themeU = String.fromCharCode(111,95,57,53,95,99,111,117,110,116,100,111,119,110,0);
    let nativemoduleP = false;
    let progresso = 0;
    let arrowdownN = 0.0;
    let defaultprofilepicw = [String.fromCharCode(97,99,100,101,99,95,51,95,52,51,0), String.fromCharCode(97,114,101,118,101,114,115,101,95,52,95,50,52,0), String.fromCharCode(104,95,57,50,95,110,101,101,100,0)];
    let cancelG = 3.0;
    let goallogot = 0.0;
    let teamdetailsbg7 = [378, 46];
    let iconeye_ = 0;
    let switch_rb = false;
    let scrollviewz = 5.0;
    let unimplementedview4 = String.fromCharCode(112,114,101,117,112,108,111,97,100,95,114,95,49,53,0);
   while (nativemoduleP) {
      progresso *= phoneshare3.size << (Math.min(Math.abs(2), 2));
      break;
   }
       let defaultpredictionprofileJ = true;
       let toponx = 2.0;
       let rewinde = String.fromCharCode(110,95,49,52,95,102,102,106,110,105,0);
          let dropdown3 = 5.0;
          let shielddonep = new Map([[String.fromCharCode(100,117,109,112,105,110,103,95,109,95,56,0),526], [String.fromCharCode(105,95,53,95,105,110,116,101,114,112,111,108,97,116,101,0),837]]);
         rewinde = `${((defaultpredictionprofileJ ? 5 : 2) * 1)}`;
         dropdown3 -= 1;
         shielddonep[`${dropdown3}`] = parseInt(`${dropdown3}`);
          let utils2 = true;
          let iconarrowright3 = new Map([[String.fromCharCode(114,95,49,56,95,97,112,112,101,110,100,97,98,108,101,0),941], [String.fromCharCode(99,95,57,56,95,99,104,97,110,103,101,0),212], [String.fromCharCode(115,97,100,120,95,117,95,55,0),234]]);
         rewinde = `${((utils2 ? 5 : 1))}`;
         utils2 = (iconarrowright3.size / (Math.max(iconarrowright3.size, 8))) > 79;
      do {
          let moviesk = [684, 903];
          let filen = 2.0;
          let yellowvideoliveT = new Map([[String.fromCharCode(115,117,98,112,97,116,104,115,95,48,95,51,48,0),591], [String.fromCharCode(110,95,55,49,95,102,119,100,0),586]]);
          let libtanR = 5.0;
         toponx *= parseFloat(`${parseInt(`${filen}`) % 2}`);
         moviesk.push(moviesk.length & 3);
         filen /= Math.max(yellowvideoliveT.size, 5);
         yellowvideoliveT = new Map([[`${yellowvideoliveT.size}`, 2 / (Math.max(9, parseInt(`${libtanR}`)))]]);
         libtanR += parseInt(`${libtanR}`);
         if (2065703.0 == toponx) {
            break;
         }
      } while ((2065703.0 == toponx) && (parseInt(`${toponx}`) == rewinde.length));
         toponx /= Math.max(4, parseFloat(`${parseInt(`${toponx}`) / (Math.max(rewinde.length, 3))}`));
      do {
          let scorez = 3.0;
         toponx += (parseFloat(`${rewinde == String.fromCharCode(48,0) ? rewinde.length : parseInt(`${scorez}`)}`));
         if (3415896.0 == toponx) {
            break;
         }
      } while ((defaultpredictionprofileJ) && (3415896.0 == toponx));
      for (let i = 0; i < 2; i++) {
         toponx *= parseFloat(`${rewinde.length ^ 3}`);
      }
          let chinap = String.fromCharCode(98,117,99,107,101,116,95,49,95,53,52,0);
          let videocommons = String.fromCharCode(100,95,50,48,95,105,110,116,114,111,100,117,99,116,105,111,110,0);
          let match2 = String.fromCharCode(111,95,52,95,110,101,108,108,121,109,111,115,101,114,0);
         defaultpredictionprofileJ = 58 < match2.length && chinap.length < 58;
         chinap = "2";
         videocommons = `${videocommons.length}`;
      if (defaultpredictionprofileJ) {
         defaultpredictionprofileJ = toponx >= 55.42;
      }
      while ((toponx - parseFloat(`${rewinde.length}`)) <= 2.19 && (3 * rewinde.length) <= 5) {
          let layoutO = [String.fromCharCode(100,111,99,105,100,115,95,99,95,51,56,0), String.fromCharCode(122,95,50,48,95,111,117,116,112,111,105,110,116,0)];
          let filled3 = [739, 24, 691];
          let handlerc = 4.0;
         toponx *= parseFloat(`${layoutO.length << (Math.min(Math.abs(3), 3))}`);
         layoutO = [1 ^ parseInt(`${handlerc}`)];
         filled3 = [1 & filled3.length];
         handlerc *= filled3.length;
         break;
      }
      libflipperv += parseFloat(`${parseInt(`${toponx}`) ^ teamdetailsbg7.length}`);
       let orientationQ = false;
       let iconrefreshS = new Map([[String.fromCharCode(115,101,108,95,121,95,55,55,0),String.fromCharCode(98,95,56,56,95,99,99,105,116,116,0)], [String.fromCharCode(97,95,56,50,95,109,101,108,116,0),String.fromCharCode(114,95,55,50,95,100,115,116,114,0)], [String.fromCharCode(100,95,55,52,95,111,110,121,120,99,0),String.fromCharCode(108,105,98,97,118,100,101,118,105,99,101,95,54,95,55,50,0)]]);
       let libsentryB = 3.0;
         orientationQ = (parseInt(`${libsentryB}`) / (Math.max(iconrefreshS.size, 6))) >= 42;
          let page3 = String.fromCharCode(111,114,100,101,114,115,95,122,95,51,53,0);
          let imagesz = 4.0;
         iconrefreshS = new Map([[`${iconrefreshS.size}`, iconrefreshS.size]]);
         page3 = `${3 << (Math.min(3, Math.abs(parseInt(`${imagesz}`))))}`;
         imagesz -= (String.fromCharCode(84,0) == page3 ? parseInt(`${imagesz}`) : page3.length);
         iconrefreshS = new Map([[`${iconrefreshS.size}`, parseInt(`${libsentryB}`) - iconrefreshS.size]]);
          let libmapbufferjnio = false;
         iconrefreshS = new Map([[`${iconrefreshS.size}`, ((libmapbufferjnio ? 3 : 5) & iconrefreshS.size)]]);
      for (let e = 0; e < 2; e++) {
         iconrefreshS = new Map([[`${orientationQ}`, (parseInt(`${libsentryB}`) - (orientationQ ? 1 : 3))]]);
      }
      do {
          let downloadingW = String.fromCharCode(116,95,52,53,95,105,110,99,114,101,97,115,105,110,103,0);
          let confirmationQ = 1;
         libsentryB += confirmationQ % 2;
         downloadingW += `${downloadingW.length + 2}`;
         confirmationQ <<= Math.min(Math.abs((downloadingW == String.fromCharCode(52,0) ? downloadingW.length : downloadingW.length)), 2);
         if (libsentryB == 3386404.0) {
            break;
         }
      } while ((libsentryB == 3386404.0) && ((libsentryB + 1.49) <= 3.71));
          let arrowupm = true;
         libsentryB /= Math.max(2, (1 << (Math.min(Math.abs((orientationQ ? 3 : 4)), 4))));
       let mailZ = true;
         mailZ = iconrefreshS[`${mailZ}`] != null;
      themeU = "2";
   if (3.75 >= (3 + arrowdownN)) {
      whistleo *= progresso;
   }
      phoneshare3[`${nativemoduleP}`] = defaultprofilepicw.length + 3;
       let dataG = false;
       let photok = [String.fromCharCode(115,95,55,49,95,114,100,99,111,115,116,0), String.fromCharCode(113,95,54,95,114,101,100,101,108,105,118,101,114,121,0), String.fromCharCode(97,95,49,50,95,111,100,105,110,103,0)];
       let libjsinspectors = true;
      if (!libjsinspectors) {
         dataG = !libjsinspectors;
      }
      do {
          let scorepopsoundd = 0.0;
          let closeE = String.fromCharCode(99,95,57,51,95,104,105,103,104,105,103,104,116,0);
          let iconwechatf = String.fromCharCode(120,97,109,112,108,101,95,105,95,50,52,0);
          let watchl = String.fromCharCode(101,95,54,53,95,112,114,101,115,99,97,108,101,0);
         dataG = (parseInt(`${scorepopsoundd}`) * closeE.length) > 32;
         scorepopsoundd *= parseFloat(`${iconwechatf.length * 1}`);
         closeE = `${watchl.length}`;
         iconwechatf += `${watchl.length}`;
         if (dataG ? !dataG : dataG) {
            break;
         }
      } while ((libjsinspectors) && (dataG ? !dataG : dataG));
      while (5 >= (1 >> (Math.min(4, photok.length))) && libjsinspectors) {
          let injuryL = 0.0;
          let yellowB = [String.fromCharCode(104,95,51,57,95,101,114,99,0), String.fromCharCode(103,109,104,100,95,121,95,49,57,0)];
          let sharemodalP = 0.0;
         photok = [photok.length];
         injuryL /= Math.max(parseFloat(`${parseInt(`${sharemodalP}`) << (Math.min(2, Math.abs(1)))}`), 3);
         yellowB.push(yellowB.length / (Math.max(2, parseInt(`${sharemodalP}`))));
         break;
      }
      while (!libjsinspectors) {
         libjsinspectors = photok.length <= 9;
         break;
      }
          let zoomD = String.fromCharCode(103,114,111,119,116,104,95,98,95,50,52,0);
          let libmapbufferjniK = String.fromCharCode(110,95,49,50,95,104,119,116,105,109,101,0);
          let libruntimeexecutorm = [605, 705];
         photok.push(((libjsinspectors ? 2 : 3) >> (Math.min(Math.abs(3), 2))));
         zoomD += `${(libmapbufferjniK == String.fromCharCode(120,0) ? zoomD.length : libmapbufferjniK.length)}`;
         libruntimeexecutorm = [1 ^ zoomD.length];
         photok = [photok.length % (Math.max(3, 8))];
         dataG = (73 == ((!dataG ? 73 : photok.length) >> (Math.min(photok.length, 1))));
         dataG = (((!dataG ? 49 : photok.length) * photok.length) <= 49);
          let libloggerB = String.fromCharCode(99,95,55,48,95,103,101,116,104,100,114,0);
          let acceptedg = 3;
          let iconviewergifQ = new Map([[String.fromCharCode(109,105,110,105,95,49,95,56,53,0),true ], [String.fromCharCode(101,95,49,52,95,114,101,115,97,109,112,0),false ], [String.fromCharCode(97,110,110,111,116,97,116,105,111,110,115,95,54,95,53,49,0),true ]]);
         photok.push(3);
         libloggerB += `${libloggerB.length & 2}`;
         acceptedg <<= Math.min(Math.abs(2 >> (Math.min(2, Math.abs(acceptedg)))), 2);
         iconviewergifQ[`${acceptedg}`] = 3;
      libflipperv -= parseFloat(`${3 >> (Math.min(Math.abs(parseInt(`${libflipperv}`)), 3))}`);
   do {
      rightg = 15 <= defaultprofilepicw.length;
      if (rightg ? !rightg : rightg) {
         break;
      }
   } while ((rightg) && (rightg ? !rightg : rightg));

    var loadAdSize = {};
   for (let j = 0; j < 2; j++) {
      progresso |= teamdetailsbg7.length | 3;
   }
   while (!rightg) {
      rightg = cancelG > 13.5;
      break;
   }
      goallogot *= parseFloat(`${progresso}`);
      defaultprofilepicw.push(((rightg ? 3 : 3) / (Math.max(progresso, 1))));
      phoneshare3 = new Map([[`${iconeye_}`, themeU.length * 3]]);
   while ((1.72 * arrowdownN) > 1.80) {
      nativemoduleP = 8 == (progresso + whistleo);
      break;
   }
      whistleo /= Math.max(4, 1);

    loadAdSize["width"] = width;
   if (cancelG == 4.65) {
       let orangedownarrowh = 1.0;
       let userp = true;
       let mbbanner6 = 0.0;
         userp = mbbanner6 < 30.65;
          let libavdeviceR = 0.0;
          let matchdetailbgQ = true;
          let gmailc = 2;
         userp = (!matchdetailbgQ ? !userp : !matchdetailbgQ);
         libavdeviceR /= Math.max(3, parseFloat(`${parseInt(`${libavdeviceR}`)}`));
         gmailc ^= 1;
      if (1.63 >= (orangedownarrowh * 4.47) || orangedownarrowh >= 4.47) {
         orangedownarrowh -= (parseFloat(`${parseInt(`${mbbanner6}`) ^ (userp ? 2 : 5)}`));
      }
          let time_npl = String.fromCharCode(120,104,116,109,108,95,54,95,57,52,0);
         userp = 26.65 < orangedownarrowh;
         time_npl += "2";
         mbbanner6 += (parseInt(`${mbbanner6}`) | (userp ? 4 : 3));
         userp = mbbanner6 == 65.71 || userp;
          let incidentm = String.fromCharCode(118,99,120,112,114,111,106,95,112,95,53,50,0);
          let fastc = String.fromCharCode(118,111,108,117,109,101,95,120,95,52,0);
          let rewardU = String.fromCharCode(100,95,51,48,95,105,112,104,111,110,101,0);
         userp = orangedownarrowh <= 96.30;
         incidentm = `${1 | rewardU.length}`;
         fastc += `${2 + incidentm.length}`;
         rewardU += `${(rewardU == String.fromCharCode(104,0) ? fastc.length : rewardU.length)}`;
         orangedownarrowh -= (parseFloat(`${parseInt(`${orangedownarrowh}`) - (userp ? 2 : 3)}`));
      for (let i = 0; i < 1; i++) {
         userp = !userp;
      }
      teamdetailsbg7 = [parseInt(`${goallogot}`)];
   }
   for (let i = 0; i < 1; i++) {
      whistleo /= Math.max(parseInt(`${libflipperv}`) & 2, 1);
   }
   while (phoneshare3.size == parseInt(`${whistleo}`)) {
      phoneshare3[`${nativemoduleP}`] = ((nativemoduleP ? 3 : 3) & 3);
      break;
   }
      themeU += "3";
      progresso &= parseInt(`${goallogot}`);
   if (4.74 < (arrowdownN * 3.22) && (arrowdownN * 3.22) < 4.8) {
      goallogot += parseFloat(`${parseInt(`${cancelG}`) & iconeye_}`);
   }
       let bgvipxvodj = String.fromCharCode(100,95,54,52,95,110,111,116,101,0);
      while (!bgvipxvodj.startsWith(bgvipxvodj)) {
         bgvipxvodj += `${bgvipxvodj.length}`;
         break;
      }
         bgvipxvodj = `${1 >> (Math.min(5, bgvipxvodj.length))}`;
      while (bgvipxvodj == String.fromCharCode(69,0)) {
          let profilepicX = 4;
          let clubZ = String.fromCharCode(102,95,52,95,115,117,103,103,101,115,116,105,111,110,115,0);
          let inouttargetyellowr = String.fromCharCode(112,95,57,57,95,97,118,101,114,97,103,101,0);
          let iconc = false;
         bgvipxvodj += `${(String.fromCharCode(111,0) == inouttargetyellowr ? inouttargetyellowr.length : profilepicX)}`;
         profilepicX += ((iconc ? 2 : 4));
         clubZ = `${((iconc ? 2 : 2))}`;
         break;
      }
      goallogot += parseFloat(`${bgvipxvodj.length}`);

    loadAdSize["height"] = height;
   while ((3.11 + arrowdownN) < 3.66 && (3.11 + arrowdownN) < 2.2) {
      iconeye_ ^= defaultprofilepicw.length;
      break;
   }
       let rewardw = 2;
       let libjsiG = 5;
       let airbnbstarselectedL = String.fromCharCode(106,115,105,109,100,99,112,117,95,121,95,56,56,0);
         libjsiG <<= Math.min(Math.abs(2), 3);
         rewardw ^= 2;
      do {
         airbnbstarselectedL = "1";
         if (airbnbstarselectedL == String.fromCharCode(120,100,52,0)) {
            break;
         }
      } while (((3 * libjsiG) < 3 || 3 < (libjsiG * airbnbstarselectedL.length)) && (airbnbstarselectedL == String.fromCharCode(120,100,52,0)));
      if ((2 * libjsiG) <= 1 && (2 * airbnbstarselectedL.length) <= 3) {
         airbnbstarselectedL = `${rewardw - 1}`;
      }
         rewardw /= Math.max(3 >> (Math.min(2, Math.abs(libjsiG))), 5);
      if (4 == airbnbstarselectedL.length) {
         rewardw -= 2;
      }
          let configR = 1.0;
          let home0 = 5;
          let iconviewerW = [416, 258];
         libjsiG -= home0 - libjsiG;
         configR /= Math.max(parseFloat(`${iconviewerW.length >> (Math.min(Math.abs(1), 1))}`), 1);
         home0 ^= iconviewerW.length;
      while (2 == (rewardw + 4) || (4 + libjsiG) == 3) {
         rewardw %= Math.max(3, 1 ^ libjsiG);
         break;
      }
         libjsiG &= (airbnbstarselectedL == String.fromCharCode(84,0) ? libjsiG : airbnbstarselectedL.length);
      iconeye_ ^= airbnbstarselectedL.length;
      phoneshare3 = new Map([[`${libflipperv}`, parseInt(`${arrowdownN}`) >> (Math.min(5, Math.abs(parseInt(`${libflipperv}`))))]]);
      nativemoduleP = progresso == teamdetailsbg7.length;
      switch_rb = !switch_rb;
      libflipperv -= parseFloat(`${2}`);
      libflipperv -= (parseFloat(`${(rightg ? 4 : 3) ^ parseInt(`${arrowdownN}`)}`));

    return loadAdSize;
      whistleo -= (themeU == String.fromCharCode(70,0) ? themeU.length : iconeye_);
   do {
      cancelG /= Math.max(1, parseFloat(`${defaultprofilepicw.length & parseInt(`${libflipperv}`)}`));
      if (cancelG == 3448028.0) {
         break;
      }
   } while ((1.53 == (cancelG - progresso)) && (cancelG == 3448028.0));
   if (1 >= (parseInt(`${libflipperv}`) + teamdetailsbg7.length) && 1 >= (parseInt(`${libflipperv}`) + teamdetailsbg7.length)) {
      teamdetailsbg7 = [parseInt(`${libflipperv}`)];
   }
      nativemoduleP = 52 >= progresso;
   while (goallogot >= cancelG) {
      goallogot += parseFloat(`${teamdetailsbg7.length ^ themeU.length}`);
      break;
   }
   while (nativemoduleP) {
      teamdetailsbg7.push(themeU.length);
      break;
   }
      whistleo += (3 | (switch_rb ? 3 : 5));

}

function createShowAdRect(x, y, width, height) {
       let darkt = true;
    let predictionlossr = String.fromCharCode(97,95,53,95,104,118,99,99,0);
    let profileinactive2 = [946, 162, 567];
    let libflipperV = String.fromCharCode(107,95,53,53,95,114,101,99,101,105,118,101,0);
    let logouserd = [13, 827, 708];
    let flyerS = false;
    let thailandy = String.fromCharCode(117,95,53,50,95,115,116,100,105,110,116,0);
    let commonH = 5;
    let predictionactive5 = [591, 215];
    let navigation4 = 0.0;
    let t_animationO = String.fromCharCode(108,111,117,100,110,101,115,115,95,51,95,51,49,0);
       let share5 = new Map([[String.fromCharCode(115,101,110,100,95,122,95,53,57,0),207], [String.fromCharCode(114,111,98,105,110,95,110,95,56,52,0),348]]);
      if (1 > (2 * share5.size) || 1 > (2 * share5.size)) {
          let ajaxO = 1;
          let pressurei = [781, 549];
          let with_4vt = String.fromCharCode(103,111,108,100,101,110,95,109,95,50,49,0);
          let armvao = 2;
          let combinedz = new Map([[String.fromCharCode(105,95,52,49,95,115,105,110,107,115,0),31], [String.fromCharCode(99,104,97,99,104,97,112,111,108,121,95,57,95,51,56,0),379]]);
         share5 = new Map([[with_4vt, ajaxO % 3]]);
         ajaxO /= Math.max(combinedz.size, 3);
         pressurei = [1];
         with_4vt += `${pressurei.length / 3}`;
         armvao ^= combinedz.size;
      }
       let inouttargetredt = String.fromCharCode(108,95,50,57,95,114,101,103,105,115,116,101,114,0);
       let tickf = String.fromCharCode(99,100,110,95,106,95,52,52,0);
       let tnewsshareH = String.fromCharCode(98,112,114,105,110,116,95,122,95,49,52,0);
       let r_unlockq = String.fromCharCode(99,95,51,51,95,102,114,101,101,100,111,109,0);
      predictionlossr += `${((darkt ? 4 : 3) + logouserd.length)}`;
       let anytimez = 5.0;
       let brightness9 = new Map([[String.fromCharCode(97,99,99,101,115,115,95,116,95,50,52,0),457], [String.fromCharCode(119,95,54,57,95,109,101,97,115,117,114,101,109,101,110,116,115,0),606]]);
         anytimez += parseFloat(`${3}`);
      while ((5.19 + anytimez) <= 5.6) {
         anytimez -= parseFloat(`${3 & brightness9.size}`);
         break;
      }
         brightness9 = new Map([[`${brightness9.size}`, parseInt(`${anytimez}`) / (Math.max(2, brightness9.size))]]);
      do {
         brightness9 = new Map([[`${brightness9.size}`, brightness9.size]]);
         if (brightness9.size == 2162554) {
            break;
         }
      } while ((4.93 < anytimez) && (brightness9.size == 2162554));
      if (brightness9[`${anytimez}`] != null) {
          let largebrightnessp = true;
          let zhuboI = String.fromCharCode(121,95,56,55,95,111,98,115,101,114,118,105,110,103,0);
         anytimez -= parseFloat(`${zhuboI.length - 1}`);
         largebrightnessp = !largebrightnessp && largebrightnessp;
         zhuboI = `${((largebrightnessp ? 3 : 5))}`;
      }
         anytimez += parseFloat(`${brightness9.size - 2}`);
      logouserd = [2];
      darkt = profileinactive2.length < 65;
   if (4 < libflipperV.length) {
       let sharemodalw = String.fromCharCode(112,114,101,102,101,114,115,95,121,95,51,48,0);
       let latnQ = 5.0;
       let hejiY = 2;
       let pushh = [String.fromCharCode(114,103,98,105,95,54,95,49,54,0), String.fromCharCode(120,108,97,98,101,108,119,105,100,116,104,95,98,95,52,57,0), String.fromCharCode(111,95,49,48,95,97,98,115,0)];
       let commenty = new Map([[String.fromCharCode(102,115,101,101,107,95,52,95,50,50,0),889], [String.fromCharCode(122,95,51,52,95,105,110,105,116,105,97,108,105,122,97,116,105,111,110,0),718]]);
      do {
         pushh = [commenty.size | 2];
         if (pushh.length == 3853612) {
            break;
         }
      } while ((pushh.length == 3853612) && (2.52 > latnQ));
       let profileactiveF = 0.0;
       let giftn = 3.0;
         latnQ *= parseInt(`${profileactiveF}`) & 1;
      while ((parseInt(`${profileactiveF}`) + pushh.length) == 2) {
         profileactiveF *= parseFloat(`${parseInt(`${giftn}`) * commenty.size}`);
         break;
      }
         sharemodalw += `${pushh.length}`;
         hejiY *= pushh.length;
          let inewsQ = new Map([[String.fromCharCode(114,101,109,105,110,100,95,100,95,56,49,0),String.fromCharCode(110,117,108,108,115,114,99,95,112,95,54,50,0)], [String.fromCharCode(108,95,49,95,98,97,115,105,99,115,0),String.fromCharCode(112,114,102,95,114,95,52,57,0)], [String.fromCharCode(110,115,117,112,112,111,114,116,101,100,95,108,95,52,50,0),String.fromCharCode(98,95,55,50,95,97,117,116,111,102,111,99,117,115,105,110,103,0)]]);
          let activeR = String.fromCharCode(114,111,117,112,95,50,95,54,51,0);
          let defaultplayerimgV = String.fromCharCode(115,95,57,56,95,115,107,97,100,0);
         sharemodalw = `${hejiY & 2}`;
         inewsQ[`${activeR}`] = 1 * inewsQ.size;
         activeR += `${inewsQ.size % (Math.max(1, defaultplayerimgV.length))}`;
         defaultplayerimgV = `${inewsQ.size}`;
         giftn *= parseFloat(`${2}`);
      while (3 >= (4 | commenty.size)) {
          let goalS = String.fromCharCode(103,101,110,101,114,97,108,95,49,95,57,48,0);
          let helperF = true;
          let bellremindera = String.fromCharCode(107,105,110,103,102,105,115,104,101,114,95,117,95,53,0);
          let mountingJ = new Map([[String.fromCharCode(117,110,99,111,109,112,114,101,115,115,95,120,95,48,0),String.fromCharCode(117,112,97,116,101,100,95,52,95,55,51,0)], [String.fromCharCode(112,114,101,115,101,110,116,97,98,108,101,95,112,95,55,52,0),String.fromCharCode(112,114,111,99,95,116,95,54,51,0)], [String.fromCharCode(122,95,49,48,95,106,115,111,110,115,0),String.fromCharCode(111,110,101,99,104,95,111,95,53,0)]]);
          let langR = false;
         commenty = new Map([[`${mountingJ.size}`, ((helperF ? 1 : 3) ^ 2)]]);
         goalS += `${(bellremindera == String.fromCharCode(67,0) ? (langR ? 5 : 4) : bellremindera.length)}`;
         helperF = goalS.length == 67 || !langR;
         mountingJ[bellremindera] = 1;
         break;
      }
          let defaultpredictionprofileN = 4;
          let libpangleflippedk = [String.fromCharCode(99,111,108,108,97,116,105,110,103,95,56,95,51,50,0), String.fromCharCode(117,95,56,55,95,114,101,110,100,105,116,105,111,110,0), String.fromCharCode(119,97,108,108,95,122,95,52,52,0)];
         pushh.push(libpangleflippedk.length);
         defaultpredictionprofileN -= defaultpredictionprofileN - 3;
         libpangleflippedk.push(defaultpredictionprofileN << (Math.min(5, Math.abs(defaultpredictionprofileN))));
      for (let n = 0; n < 2; n++) {
          let libyogat = true;
          let dycreatork = String.fromCharCode(117,110,115,97,118,101,95,97,95,51,0);
          let libreactnativejnia = true;
          let readH = 0;
          let final_3db = String.fromCharCode(109,117,108,116,105,112,108,105,101,100,95,48,95,51,52,0);
         pushh = [3 - hejiY];
         libyogat = !libreactnativejnia;
         dycreatork = "1";
         readH /= Math.max(dycreatork.length & 1, 3);
         final_3db = `${dycreatork.length | 1}`;
      }
      while (commenty[`${profileactiveF}`] == null) {
         profileactiveF /= Math.max(parseFloat(`${3 & sharemodalw.length}`), 1);
         break;
      }
      if (1 <= (sharemodalw.length + parseInt(`${giftn}`))) {
         giftn -= parseFloat(`${hejiY}`);
      }
       let settingi = String.fromCharCode(122,95,53,56,95,115,104,117,116,100,111,119,110,0);
          let basketballdetailsbgE = 4;
          let largesoundN = [String.fromCharCode(112,114,111,103,114,97,109,109,97,116,105,99,97,108,108,121,95,101,95,49,50,0), String.fromCharCode(115,117,98,115,97,109,112,108,105,110,103,95,108,95,53,54,0)];
         giftn += parseFloat(`${basketballdetailsbgE ^ 2}`);
         basketballdetailsbgE ^= 1;
         largesoundN.push(1 ^ largesoundN.length);
      predictionactive5.push((thailandy == String.fromCharCode(118,0) ? hejiY : thailandy.length));
   }

    var adRect = {};
      predictionlossr = `${1 >> (Math.min(1, thailandy.length))}`;
       let static_2t8 = String.fromCharCode(116,95,56,54,95,112,97,108,108,101,116,101,0);
       let umeng3 = 3;
       let closep = String.fromCharCode(109,95,52,57,95,105,110,115,116,97,108,108,105,110,103,0);
          let ewardedB = false;
         closep += "3";
      if (5 >= umeng3) {
         closep = `${(String.fromCharCode(87,0) == closep ? closep.length : umeng3)}`;
      }
          let filedr = String.fromCharCode(105,95,56,49,95,97,100,100,102,0);
         closep += `${umeng3}`;
         filedr = `${filedr.length >> (Math.min(filedr.length, 2))}`;
      while (4 == closep.length) {
         umeng3 >>= Math.min(3, Math.abs((String.fromCharCode(69,0) == static_2t8 ? umeng3 : static_2t8.length)));
         break;
      }
         umeng3 |= static_2t8.length;
          let customZ = 0;
          let policya = String.fromCharCode(102,109,105,120,95,56,95,51,56,0);
          let orangeN = 4;
         closep = `${static_2t8.length ^ 3}`;
         customZ /= Math.max(4, policya.length);
         policya += `${policya.length | orangeN}`;
         orangeN |= 1 - orangeN;
      while (closep.endsWith(`${umeng3}`)) {
         umeng3 += (static_2t8 == String.fromCharCode(114,0) ? umeng3 : static_2t8.length);
         break;
      }
      while (1 == static_2t8.length) {
         static_2t8 += `${static_2t8.length ^ 2}`;
         break;
      }
      if (closep.endsWith(`${umeng3}`)) {
         umeng3 >>= Math.min(Math.abs(umeng3 >> (Math.min(static_2t8.length, 1))), 2);
      }
      predictionactive5 = [2 >> (Math.min(2, logouserd.length))];
   do {
      profileinactive2.push(3);
      if (1671074 == profileinactive2.length) {
         break;
      }
   } while ((1671074 == profileinactive2.length) && (profileinactive2.length > 5));
       let fullscreenminM = 0.0;
      do {
         fullscreenminM += parseFloat(`${parseInt(`${fullscreenminM}`)}`);
         if (4489905.0 == fullscreenminM) {
            break;
         }
      } while (((fullscreenminM * 2.48) > 3.33 && (fullscreenminM / 2.48) > 2.26) && (4489905.0 == fullscreenminM));
         fullscreenminM -= parseFloat(`${parseInt(`${fullscreenminM}`)}`);
         fullscreenminM -= parseFloat(`${parseInt(`${fullscreenminM}`) ^ 2}`);
      darkt = (((darkt ? libflipperV.length : 46) >> (Math.min(libflipperV.length, 2))) > 46);

    adRect["x"] = x;
      logouserd.push(1);
   for (let f = 0; f < 1; f++) {
       let forwardH = String.fromCharCode(110,101,111,110,116,101,115,116,95,48,95,56,53,0);
       let iconcloseJ = 3.0;
       let imagenetworkerrj = 1.0;
       let awayteamfieldv = new Map([[String.fromCharCode(101,95,56,56,95,118,99,100,97,116,97,0),763], [String.fromCharCode(108,105,98,106,112,101,103,116,117,114,98,111,95,106,95,53,54,0),605], [String.fromCharCode(99,111,109,112,111,115,101,100,95,105,95,57,52,0),484]]);
       let pangleV = String.fromCharCode(109,95,52,50,95,118,109,100,118,105,100,101,111,0);
      if (iconcloseJ > imagenetworkerrj) {
         imagenetworkerrj -= parseFloat(`${parseInt(`${iconcloseJ}`)}`);
      }
      for (let v = 0; v < 3; v++) {
         pangleV = `${forwardH.length ^ 3}`;
      }
          let whatsappS = 3.0;
          let logog = 5.0;
          let liveE = [String.fromCharCode(115,95,49,56,95,115,117,98,115,99,114,105,98,97,98,108,101,115,0), String.fromCharCode(117,110,112,114,101,109,117,108,116,105,112,108,121,95,50,95,55,52,0)];
         forwardH = `${awayteamfieldv.size}`;
         whatsappS += parseFloat(`${parseInt(`${logog}`)}`);
         logog *= parseFloat(`${1 ^ liveE.length}`);
         liveE.push(1);
         iconcloseJ *= parseFloat(`${1 << (Math.min(3, Math.abs(parseInt(`${imagenetworkerrj}`))))}`);
       let libfollyf = 4.0;
      do {
         forwardH += `${pangleV.length}`;
         if (1464742 == forwardH.length) {
            break;
         }
      } while (((forwardH.length << (Math.min(Math.abs(5), 1))) == 3) && (1464742 == forwardH.length));
      while (imagenetworkerrj >= parseFloat(`${awayteamfieldv.size}`)) {
          let loginsuccessz = new Map([[String.fromCharCode(119,95,55,54,95,99,112,111,115,0),899], [String.fromCharCode(115,117,98,115,97,109,112,95,116,95,55,56,0),622]]);
         imagenetworkerrj *= parseFloat(`${awayteamfieldv.size - 1}`);
         loginsuccessz = new Map([[`${loginsuccessz.size}`, loginsuccessz.size * loginsuccessz.size]]);
         break;
      }
      if ((libfollyf * iconcloseJ) == 1.6 && 5.5 == (iconcloseJ * 1.6)) {
          let photob = [63, 31, 324];
          let update_1L = String.fromCharCode(108,111,103,111,115,95,57,95,55,57,0);
          let downA = String.fromCharCode(109,95,53,48,95,118,100,112,97,117,0);
         libfollyf *= parseInt(`${iconcloseJ}`) + parseInt(`${imagenetworkerrj}`);
         photob = [photob.length];
         update_1L = `${downA.length}`;
         downA += `${update_1L.length}`;
      }
         libfollyf -= 3;
         forwardH = `${(pangleV == String.fromCharCode(106,0) ? forwardH.length : pangleV.length)}`;
         pangleV += `${parseInt(`${iconcloseJ}`) | pangleV.length}`;
         pangleV = `${(pangleV == String.fromCharCode(102,0) ? pangleV.length : parseInt(`${imagenetworkerrj}`))}`;
       let statisticsactive4 = true;
       let greyarrowupa = false;
          let flagM = 1;
         iconcloseJ -= parseFloat(`${flagM}`);
       let classesn = 5.0;
      darkt = logouserd.length > 68;
   }
       let pressure4 = String.fromCharCode(114,101,110,97,109,101,95,57,95,51,51,0);
       let circle5 = String.fromCharCode(111,95,57,95,109,112,101,103,118,105,100,101,111,101,110,99,100,115,112,0);
       let eventsplashg = 0.0;
      for (let l = 0; l < 1; l++) {
         pressure4 = "2";
      }
      if ((5 | circle5.length) < 1 || 5 < (5 + circle5.length)) {
          let unfillH = new Map([[String.fromCharCode(104,97,108,102,108,116,117,105,110,116,95,98,95,56,55,0),String.fromCharCode(109,101,114,103,101,95,50,95,52,51,0)], [String.fromCharCode(112,114,101,100,120,108,95,55,95,53,56,0),String.fromCharCode(108,95,52,57,95,117,110,105,110,116,101,114,112,114,101,116,101,100,0)]]);
          let klevinB = new Map([[String.fromCharCode(101,109,111,116,105,99,111,110,115,95,121,95,52,51,0),452], [String.fromCharCode(109,97,116,101,114,105,97,108,95,54,95,50,54,0),621], [String.fromCharCode(99,95,50,55,95,101,120,116,101,110,116,0),885]]);
         eventsplashg /= Math.max(3, klevinB.size ^ unfillH.size);
      }
      if (pressure4 != circle5) {
         circle5 += "1";
      }
      do {
         circle5 = `${parseInt(`${eventsplashg}`)}`;
         if (circle5.length == 3774247) {
            break;
         }
      } while ((3 == circle5.length) && (circle5.length == 3774247));
          let halfO = new Map([[String.fromCharCode(104,95,50,50,95,118,97,114,116,105,109,101,0),true ], [String.fromCharCode(118,95,56,57,95,99,111,110,115,116,114,117,99,116,111,114,109,97,103,105,99,0),true ], [String.fromCharCode(97,105,114,105,110,103,95,111,95,53,53,0),false ]]);
          let regengJ = [306, 311, 868];
         circle5 += `${regengJ.length * 2}`;
         halfO[`${halfO.size}`] = halfO.size * 3;
         regengJ.push(halfO.size / 3);
      if ((eventsplashg / (Math.max(5.38, 9))) >= 4.31 || (circle5.length / (Math.max(2, 8))) >= 3) {
          let constants1 = false;
         eventsplashg *= 1;
         constants1 = (constants1 ? constants1 : constants1);
      }
          let guider = new Map([[String.fromCharCode(97,116,116,105,98,117,116,101,95,102,95,49,56,0),false ], [String.fromCharCode(105,95,55,52,95,108,105,98,99,0),true ]]);
         circle5 += `${(String.fromCharCode(52,0) == circle5 ? circle5.length : guider.size)}`;
      do {
         circle5 += "1";
         if (circle5 == String.fromCharCode(108,115,55,54,55,110,106,0)) {
            break;
         }
      } while ((circle5 == String.fromCharCode(108,115,55,54,55,110,106,0)) && (pressure4 != circle5));
       let libimagepipelineU = new Map([[String.fromCharCode(109,97,112,95,113,95,54,52,0),true ], [String.fromCharCode(116,95,54,52,95,115,116,114,105,100,101,115,0),false ]]);
      profileinactive2.push(circle5.length);
      predictionactive5 = [predictionactive5.length];

    adRect["y"] = y;
   for (let o = 0; o < 3; o++) {
      thailandy = `${3 >> (Math.min(5, predictionlossr.length))}`;
   }
   do {
      logouserd = [3];
      if (4457552 == logouserd.length) {
         break;
      }
   } while ((4457552 == logouserd.length) && (logouserd.length == 2));
   while (!flyerS) {
      flyerS = !darkt;
      break;
   }
       let indicatork = [String.fromCharCode(99,95,53,52,95,119,105,107,105,0), String.fromCharCode(115,116,114,105,114,101,112,108,97,99,101,95,107,95,51,52,0)];
       let starh = true;
       let commonu = 2.0;
      while (!starh) {
         commonu += (parseFloat(`${3 + (starh ? 1 : 5)}`));
         break;
      }
         indicatork.push(1);
          let iconbackwhiteA = [539, 41];
          let static_dpp = 4.0;
          let rocketZ = String.fromCharCode(104,95,52,56,95,111,118,101,114,115,99,114,111,108,108,105,110,103,0);
         indicatork = [iconbackwhiteA.length | parseInt(`${commonu}`)];
         iconbackwhiteA = [rocketZ.length % (Math.max(3, 2))];
         static_dpp *= parseFloat(`${3 | parseInt(`${static_dpp}`)}`);
         rocketZ += `${rocketZ.length}`;
      while ((commonu + 3.33) >= 1.83 || 5 >= (3 | indicatork.length)) {
         commonu += (parseFloat(`${(starh ? 2 : 5) / (Math.max(parseInt(`${commonu}`), 5))}`));
         break;
      }
      for (let x = 0; x < 1; x++) {
          let serviceU = String.fromCharCode(103,95,57,53,0);
          let watchnowbgQ = new Map([[String.fromCharCode(122,95,57,57,95,97,100,116,115,0),971], [String.fromCharCode(113,95,55,49,95,114,101,116,117,114,110,115,0),823]]);
          let libavdeviceW = true;
         starh = !libavdeviceW && commonu >= 36.48;
         serviceU += `${serviceU.length % (Math.max(2, watchnowbgQ.size))}`;
         watchnowbgQ = new Map([[`${watchnowbgQ.size}`, serviceU.length ^ 3]]);
         libavdeviceW = serviceU.length <= 31;
      }
          let umengR = 1.0;
          let sheetq = 3.0;
          let leagueA = 1;
         starh = umengR == indicatork.length;
         umengR += leagueA;
         sheetq += leagueA;
          let utilsd = String.fromCharCode(97,108,108,111,99,97,116,105,111,110,95,109,95,52,54,0);
          let homeloadingN = 3.0;
          let adult2 = 3.0;
         starh = 35 < indicatork.length && 55.56 < commonu;
         utilsd += `${utilsd.length}`;
         homeloadingN += parseFloat(`${parseInt(`${homeloadingN}`) * parseInt(`${adult2}`)}`);
         adult2 -= parseInt(`${homeloadingN}`) << (Math.min(Math.abs(1), 1));
         indicatork.push(2 - parseInt(`${commonu}`));
         starh = starh || indicatork.length == 14;
      thailandy = `${(String.fromCharCode(85,0) == libflipperV ? (darkt ? 1 : 2) : libflipperV.length)}`;

    adRect["width"] = width;
   for (let m = 0; m < 2; m++) {
      logouserd.push(logouserd.length);
   }
      commonH -= (thailandy == String.fromCharCode(66,0) ? logouserd.length : thailandy.length);
      commonH <<= Math.min(3, Math.abs(2));
      predictionlossr = `${(commonH + (flyerS ? 2 : 5))}`;

    adRect["height"] = height;
   for (let x = 0; x < 2; x++) {
      predictionlossr = `${predictionlossr.length}`;
   }
   for (let u = 0; u < 3; u++) {
      logouserd = [predictionactive5.length];
   }
      predictionactive5.push(2);
       let annerq = String.fromCharCode(116,95,53,48,0);
       let cornershootO = String.fromCharCode(115,121,109,98,111,108,105,99,95,102,95,53,53,0);
          let resendp = 4.0;
         cornershootO += `${parseInt(`${resendp}`)}`;
      while (annerq.includes(`${cornershootO.length}`)) {
          let penaltyshootd = 0;
          let leftT = String.fromCharCode(101,95,53,48,95,109,100,104,100,0);
         annerq += `${leftT.length ^ cornershootO.length}`;
         penaltyshootd -= penaltyshootd & penaltyshootd;
         leftT = `${penaltyshootd & 3}`;
         break;
      }
      if (4 < cornershootO.length) {
          let arrowselectdownY = 2.0;
          let dropdownP = 4.0;
          let castingw = new Map([[String.fromCharCode(109,97,114,107,95,100,95,54,48,0),589], [String.fromCharCode(97,114,99,104,105,116,101,99,116,117,114,101,95,51,95,55,52,0),812]]);
          let alertC = 4.0;
          let tickedt = String.fromCharCode(102,95,50,51,95,103,101,116,115,103,110,99,116,120,110,111,0);
         cornershootO += `${cornershootO.length + parseInt(`${arrowselectdownY}`)}`;
         arrowselectdownY -= parseFloat(`${tickedt.length}`);
         dropdownP *= tickedt.length - parseInt(`${alertC}`);
         castingw[`${dropdownP}`] = parseInt(`${dropdownP}`);
         alertC -= parseFloat(`${3 << (Math.min(1, Math.abs(castingw.size)))}`);
      }
         cornershootO = `${annerq.length >> (Math.min(cornershootO.length, 2))}`;
      do {
         cornershootO += `${cornershootO.length}`;
         if (cornershootO == String.fromCharCode(107,55,49,54,53,118,0)) {
            break;
         }
      } while ((annerq != String.fromCharCode(90,0)) && (cornershootO == String.fromCharCode(107,55,49,54,53,118,0)));
      if (cornershootO.length >= 2) {
         cornershootO += `${cornershootO.length}`;
      }
      logouserd = [3 / (Math.max(10, predictionactive5.length))];

    return adRect;
   do {
      predictionlossr = `${logouserd.length}`;
      if (predictionlossr.length == 4163530) {
         break;
      }
   } while ((predictionlossr.length == 4163530) && (predictionlossr.length < 4 || thailandy.length < 4));
       let sentryn = 1.0;
       let sinaR = 5;
       let tickF = 0.0;
       let floating1 = 3.0;
      for (let j = 0; j < 3; j++) {
          let backY = [197, 473, 126];
          let path5 = String.fromCharCode(101,95,51,48,95,105,114,114,101,108,101,118,97,110,116,0);
          let iconplayn = 1;
         sinaR >>= Math.min(Math.abs(parseInt(`${tickF}`) + 1), 5);
         backY.push(iconplayn & path5.length);
         path5 = `${path5.length}`;
         iconplayn <<= Math.min(1, Math.abs(backY.length % 2));
      }
      do {
          let heart7 = String.fromCharCode(100,111,119,110,108,111,97,100,97,98,108,101,95,55,95,50,48,0);
          let sendS = 1.0;
          let libswresample3 = false;
         sinaR %= Math.max(1, 1);
         heart7 += `${((libswresample3 ? 5 : 1) * parseInt(`${sendS}`))}`;
         sendS /= Math.max(2, 3 | parseInt(`${sendS}`));
         libswresample3 = ((heart7.length * (libswresample3 ? heart7.length : 46)) >= 46);
         if (sinaR == 3396520) {
            break;
         }
      } while ((sinaR == 3396520) && (3.27 >= (tickF * 4.50)));
      if ((tickF * 1.59) < 3.40) {
          let iconqqV = String.fromCharCode(122,95,55,95,98,114,97,110,99,104,0);
          let incidentO = new Map([[String.fromCharCode(101,95,48,95,119,97,116,99,104,100,111,103,0),970], [String.fromCharCode(114,101,99,111,110,115,116,114,117,99,116,105,111,110,95,49,95,51,55,0),504], [String.fromCharCode(117,95,53,56,95,112,114,111,112,101,114,121,0),218]]);
          let debugP = String.fromCharCode(102,105,110,97,108,105,122,105,110,103,95,117,95,56,52,0);
          let configureK = 0;
         tickF /= Math.max(5, debugP.length);
         iconqqV += `${incidentO.size}`;
         incidentO = new Map([[`${configureK}`, configureK % (Math.max(iconqqV.length, 10))]]);
         debugP += `${incidentO.size}`;
      }
      do {
         floating1 /= Math.max(1, 1);
         if (floating1 == 4874830.0) {
            break;
         }
      } while ((floating1 == 4874830.0) && ((4 / (Math.max(7, sinaR))) > 5 || (sinaR % 4) > 4));
       let megaphoneu = [String.fromCharCode(100,95,49,51,95,115,105,110,117,115,111,105,100,97,108,0), String.fromCharCode(97,95,52,50,95,116,111,109,105,99,0)];
       let reactnativeultimatelistviewg = [806, 32, 66];
      flyerS = 25 > profileinactive2.length;
      sentryn *= parseFloat(`${1 / (Math.max(7, parseInt(`${sentryn}`)))}`);
      darkt = predictionactive5.length < 51;
   if (libflipperV != thailandy) {
      thailandy += `${1 * predictionlossr.length}`;
   }

}

function loadAd(placementId, settings) {
       let iconbellV = 5;
    let greyU = [7, 569];
    let mbjscommonL = String.fromCharCode(114,101,116,95,112,95,49,51,0);
    let default_gF = true;
    let iconbellactive8 = String.fromCharCode(117,95,52,50,95,111,118,101,114,108,97,112,0);
    let umengo = false;
    let weiboH = String.fromCharCode(119,95,56,52,95,107,115,101,116,0);
    let libavfilterL = false;
    let anytimee = String.fromCharCode(99,104,97,110,95,119,95,49,55,0);
    let inviteq = 2.0;
    let subsm = 3.0;
    let disconnectedlogof = String.fromCharCode(114,95,57,95,98,111,117,110,100,105,110,103,0);
    let positionfieldp = String.fromCharCode(98,95,49,57,95,112,108,97,110,97,114,116,111,121,117,121,0);
   while (3 == anytimee.length && libavfilterL) {
      libavfilterL = anytimee.includes(`${subsm}`);
      break;
   }
   do {
      inviteq -= parseInt(`${inviteq}`) - 2;
      if (744426.0 == inviteq) {
         break;
      }
   } while ((1.41 > (subsm / 5)) && (744426.0 == inviteq));
   if (mbjscommonL.length == 1) {
       let largeP = String.fromCharCode(102,114,97,109,101,115,101,116,116,101,114,95,53,95,52,0);
       let giftbutton3 = 5.0;
       let cornerkickf = false;
       let redscoreballo = true;
       let refresh3 = String.fromCharCode(118,105,101,119,101,114,95,110,95,54,52,0);
      if (largeP.length <= 5) {
         refresh3 = `${largeP.length ^ parseInt(`${giftbutton3}`)}`;
      }
         cornerkickf = refresh3.length >= 84;
         largeP = `${((redscoreballo ? 4 : 4))}`;
      while (refresh3.length <= 5) {
          let recommendationv = String.fromCharCode(112,114,101,105,118,111,117,115,95,98,95,52,56,0);
         cornerkickf = !redscoreballo;
         recommendationv += "1";
         break;
      }
         giftbutton3 /= Math.max(5, (3 % (Math.max(9, (redscoreballo ? 5 : 1)))));
          let notificationfilleda = false;
          let libswresamplea = [816, 671, 855];
          let previewS = 3;
         largeP = `${3 >> (Math.min(1, refresh3.length))}`;
         notificationfilleda = libswresamplea.includes(notificationfilleda);
         libswresamplea = [previewS | 1];
         previewS <<= Math.min(2, Math.abs(previewS));
      do {
         largeP += `${(largeP == String.fromCharCode(85,0) ? largeP.length : (redscoreballo ? 1 : 1))}`;
         if (4020948 == largeP.length) {
            break;
         }
      } while ((!refresh3.endsWith(largeP)) && (4020948 == largeP.length));
       let interstitial5 = 0;
          let mathv = true;
          let mintegralF = false;
          let cornerkickL = false;
         cornerkickf = interstitial5 >= 82;
         mathv = (!mintegralF ? !cornerkickL : !mintegralF);
         cornerkickL = mintegralF;
      do {
         redscoreballo = giftbutton3 < 35.89 && !cornerkickf;
         if (redscoreballo ? !redscoreballo : redscoreballo) {
            break;
         }
      } while ((redscoreballo ? !redscoreballo : redscoreballo) && (!redscoreballo || cornerkickf));
      do {
         largeP = `${(2 << (Math.min(Math.abs((redscoreballo ? 3 : 4)), 2)))}`;
         if (String.fromCharCode(56,112,121,101,101,54,0) == largeP) {
            break;
         }
      } while ((String.fromCharCode(56,112,121,101,101,54,0) == largeP) && (refresh3 != String.fromCharCode(73,0)));
          let reviewq = String.fromCharCode(98,95,53,95,111,112,99,111,100,101,115,0);
          let ksadm = false;
         giftbutton3 /= Math.max(3, reviewq.length / (Math.max(3, refresh3.length)));
         reviewq = `${((ksadm ? 2 : 3) + 3)}`;
         cornerkickf = (!cornerkickf ? redscoreballo : !cornerkickf);
      if (!largeP.endsWith(`${refresh3.length}`)) {
          let statisticsinactivek = String.fromCharCode(99,112,108,120,95,99,95,54,54,0);
          let right6 = String.fromCharCode(97,118,103,115,97,100,95,122,95,52,57,0);
          let pnewinterstitialk = new Map([[String.fromCharCode(100,95,55,48,95,109,97,108,108,111,99,122,0),156], [String.fromCharCode(108,95,56,57,95,104,119,109,97,112,0),807]]);
          let questicon0 = [String.fromCharCode(97,114,97,98,105,99,95,114,95,54,57,0), String.fromCharCode(114,111,117,116,101,114,95,53,95,56,48,0)];
          let sourceG = String.fromCharCode(102,114,101,101,102,111,114,109,95,117,95,55,0);
         largeP += `${interstitial5}`;
         statisticsinactivek = `${sourceG.length}`;
         right6 += `${(sourceG == String.fromCharCode(109,0) ? pnewinterstitialk.size : sourceG.length)}`;
         pnewinterstitialk = new Map([[`${questicon0.length}`, questicon0.length]]);
      }
      while (cornerkickf && !redscoreballo) {
         redscoreballo = !cornerkickf;
         break;
      }
      weiboH += `${refresh3.length ^ greyU.length}`;
   }
      inviteq *= disconnectedlogof.length - anytimee.length;
       let bridgep = 5.0;
      if (3.40 == (bridgep / (Math.max(3, bridgep))) && 3.40 == (bridgep / (Math.max(2, bridgep)))) {
         bridgep += parseFloat(`${2}`);
      }
         bridgep *= parseFloat(`${2 - parseInt(`${bridgep}`)}`);
      do {
         bridgep *= parseFloat(`${2}`);
         if (bridgep == 4049064.0) {
            break;
         }
      } while ((bridgep == 4049064.0) && ((bridgep + 3) <= 1.40));
      umengo = mbjscommonL.length >= 85;

    if (settings.hasOwnProperty(kATBannerAdLoadingExtraBannerAdSizeStruct)) {

   if ((inviteq * 2.97) < 2.63 && 2.97 < (iconbellV * inviteq)) {
       let positionfieldQ = [324, 185, 352];
       let pathG = [String.fromCharCode(122,95,53,55,95,111,100,109,108,0), String.fromCharCode(104,95,53,51,0), String.fromCharCode(99,114,108,102,95,107,95,52,54,0)];
       let liveendmodallogoU = [170, 693];
       let loadingspinneru = true;
       let indicatorc = 3.0;
       let playershirtJ = 0.0;
         loadingspinneru = positionfieldQ.includes(indicatorc);
         positionfieldQ.push(2 | pathG.length);
          let iconscheduleZ = new Map([[String.fromCharCode(114,101,115,116,114,97,105,110,95,99,95,56,53,0),360], [String.fromCharCode(100,105,115,112,111,115,97,98,108,101,115,95,118,95,56,55,0),720], [String.fromCharCode(100,101,97,99,116,105,118,97,116,105,110,103,95,53,95,55,56,0),919]]);
         indicatorc -= parseFloat(`${iconscheduleZ.size}`);
      do {
         liveendmodallogoU = [3];
         if (liveendmodallogoU.length == 1208086) {
            break;
         }
      } while ((3 <= (5 * positionfieldQ.length) && (5 * liveendmodallogoU.length) <= 2) && (liveendmodallogoU.length == 1208086));
      do {
         playershirtJ += parseFloat(`${pathG.length}`);
         if (1957722.0 == playershirtJ) {
            break;
         }
      } while ((1957722.0 == playershirtJ) && (!positionfieldQ.includes(playershirtJ)));
         pathG = [3 & positionfieldQ.length];
       let zoomB = 5.0;
         indicatorc *= parseFloat(`${pathG.length}`);
      while (5 >= positionfieldQ.length) {
          let switch_4D = 5;
          let bgvipxvode = new Map([[String.fromCharCode(112,95,54,50,95,116,115,97,110,0),String.fromCharCode(105,110,116,101,114,102,97,99,101,115,95,103,95,49,56,0)], [String.fromCharCode(101,114,108,101,95,101,95,51,55,0),String.fromCharCode(118,102,105,108,116,101,114,95,55,95,49,54,0)]]);
          let termsA = 2;
          let mbnativeh = 3.0;
          let bgvipsport1 = String.fromCharCode(108,111,116,116,105,101,108,111,97,100,101,114,95,55,95,52,0);
         loadingspinneru = indicatorc >= 89.77;
         switch_4D += 2;
         bgvipxvode[`${termsA}`] = bgvipxvode.size;
         termsA <<= Math.min(Math.abs(termsA), 2);
         mbnativeh /= Math.max(parseFloat(`${termsA}`), 5);
         bgvipsport1 = `${termsA}`;
         break;
      }
      if (!loadingspinneru) {
         liveendmodallogoU.push(3 / (Math.max(3, parseInt(`${playershirtJ}`))));
      }
      if ((zoomB * 4.80) <= 2.52 && 3.80 <= (zoomB * 4.80)) {
         pathG = [liveendmodallogoU.length + 1];
      }
      iconbellV -= (2 << (Math.min(1, Math.abs((default_gF ? 2 : 4)))));
   }
   for (let o = 0; o < 2; o++) {
       let middlebrightnessu = 2.0;
       let headerS = String.fromCharCode(102,116,118,109,108,97,115,116,110,111,100,101,95,107,95,54,54,0);
       let forwardC = 2;
      if (2 <= (forwardC ^ 1) || 2 <= (1 ^ headerS.length)) {
         headerS = `${forwardC}`;
      }
         headerS += `${parseInt(`${middlebrightnessu}`)}`;
      while (5 == (forwardC >> (Math.min(headerS.length, 2)))) {
         forwardC <<= Math.min(1, Math.abs(3));
         break;
      }
         middlebrightnessu *= parseFloat(`${parseInt(`${middlebrightnessu}`) * headerS.length}`);
      if ((2.9 - middlebrightnessu) >= 1.4 && (2.9 - middlebrightnessu) >= 3.55) {
         middlebrightnessu *= parseFloat(`${parseInt(`${middlebrightnessu}`)}`);
      }
         headerS = `${3 / (Math.max(8, headerS.length))}`;
      while ((5 >> (Math.min(2, Math.abs(forwardC)))) > 2 || (forwardC >> (Math.min(Math.abs(5), 4))) > 5) {
         forwardC <<= Math.min(2, Math.abs(headerS.length | parseInt(`${middlebrightnessu}`)));
         break;
      }
      do {
          let eventv = 1.0;
          let whiteanimationlive0 = true;
         forwardC %= Math.max(3, ((whiteanimationlive0 ? 4 : 2)));
         eventv += parseInt(`${eventv}`);
         whiteanimationlive0 = eventv == eventv;
         if (forwardC == 4473934) {
            break;
         }
      } while ((3.44 >= (middlebrightnessu + forwardC)) && (forwardC == 4473934));
          let arrowselectdowni = false;
         forwardC -= 3;
         arrowselectdowni = (!arrowselectdowni ? arrowselectdowni : arrowselectdowni);
      subsm += parseInt(`${inviteq}`) >> (Math.min(5, Math.abs(3)));
   }
      inviteq += 2 / (Math.max(6, iconbellactive8.length));
   do {
       let mergerg = 3;
       let sportsE = String.fromCharCode(111,95,49,49,95,104,97,115,104,116,97,103,0);
       let dependencyY = 0.0;
       let actions2 = String.fromCharCode(107,95,56,50,95,121,111,117,0);
         dependencyY *= 2 | mergerg;
      do {
          let modelsW = String.fromCharCode(111,95,56,53,95,101,97,114,108,121,0);
          let videoR = 5.0;
          let i_viewo = String.fromCharCode(105,108,111,103,95,116,95,49,51,0);
          let modules2 = String.fromCharCode(115,116,105,112,112,101,100,95,121,95,57,54,0);
         mergerg <<= Math.min(actions2.length, 1);
         modelsW = `${i_viewo.length}`;
         videoR *= parseInt(`${videoR}`) % 3;
         i_viewo = "3";
         modules2 += `${i_viewo.length & 1}`;
         if (3639265 == mergerg) {
            break;
         }
      } while ((4 <= mergerg) && (3639265 == mergerg));
         dependencyY += sportsE.length;
      while (!actions2.endsWith(`${dependencyY}`)) {
          let filedr = new Map([[String.fromCharCode(101,120,116,101,110,116,95,100,95,51,49,0),String.fromCharCode(122,95,50,95,115,117,98,115,116,105,116,117,116,101,100,0)], [String.fromCharCode(112,95,52,53,95,116,97,98,108,101,108,105,109,0),String.fromCharCode(112,114,111,102,114,101,115,115,95,104,95,52,54,0)], [String.fromCharCode(109,95,57,51,95,114,101,113,117,101,115,116,0),String.fromCharCode(99,95,50,57,95,99,97,118,101,97,116,0)]]);
          let favoriteo = [105, 701, 564];
          let commentF = 4.0;
          let adult5 = String.fromCharCode(109,95,57,95,115,116,114,101,115,115,0);
          let interstitialy = 4.0;
         dependencyY *= sportsE.length;
         filedr = new Map([[`${favoriteo.length}`, 3 / (Math.max(parseInt(`${commentF}`), 3))]]);
         favoriteo = [2 / (Math.max(8, favoriteo.length))];
         commentF /= Math.max(1 | parseInt(`${interstitialy}`), 5);
         adult5 = "1";
         interstitialy /= Math.max(parseFloat(`${filedr.size % (Math.max(favoriteo.length, 10))}`), 1);
         break;
      }
         dependencyY *= sportsE.length ^ 3;
          let appsT = String.fromCharCode(100,95,56,51,95,97,114,109,111,110,121,0);
         dependencyY *= mergerg | 3;
         appsT += `${appsT.length}`;
          let langkeyh = new Map([[String.fromCharCode(104,95,57,49,95,115,117,112,101,114,120,115,97,105,0),false ], [String.fromCharCode(97,95,52,48,95,115,111,114,116,101,100,0),false ]]);
          let belle = String.fromCharCode(100,97,105,108,121,95,111,95,55,0);
          let profilepic1 = String.fromCharCode(122,95,51,54,95,101,120,114,100,115,112,0);
         mergerg += profilepic1.length;
         langkeyh[`${belle}`] = langkeyh.size;
         belle = `${belle.length}`;
         profilepic1 += `${1 >> (Math.min(1, belle.length))}`;
      for (let b = 0; b < 3; b++) {
         mergerg -= actions2.length;
      }
      umengo = (iconbellactive8.length + mergerg) == 89;
      if (umengo ? !umengo : umengo) {
         break;
      }
   } while ((umengo ? !umengo : umengo) && (!umengo));
   if ((greyU.length * iconbellactive8.length) == 1) {
      iconbellactive8 = "1";
   }
        var loadAdSize = settings[kATBannerAdLoadingExtraBannerAdSizeStruct];
   do {
       let chatbotphotow = new Map([[String.fromCharCode(108,95,52,51,95,108,111,111,112,102,105,108,116,101,114,0),281], [String.fromCharCode(110,97,118,105,95,114,95,55,0),514]]);
       let shootD = 2;
       let iconlogoutL = new Map([[String.fromCharCode(112,95,56,51,95,99,102,116,109,100,108,0),532], [String.fromCharCode(97,95,56,50,95,116,101,108,0),885]]);
       let codegen_ = String.fromCharCode(102,95,50,53,95,99,104,101,118,114,111,110,0);
       let with_nM = String.fromCharCode(97,114,99,104,95,122,95,54,53,0);
       let bodans = String.fromCharCode(116,104,114,101,97,100,115,108,105,99,101,95,101,95,56,52,0);
      if (chatbotphotow[`${shootD}`] != null) {
         chatbotphotow[bodans] = 3;
      }
      for (let o = 0; o < 3; o++) {
         shootD ^= with_nM.length << (Math.min(Math.abs(2), 5));
      }
         codegen_ = `${chatbotphotow.size - 3}`;
      do {
         shootD *= chatbotphotow.size + shootD;
         if (shootD == 4247575) {
            break;
         }
      } while ((1 == shootD) && (shootD == 4247575));
         shootD %= Math.max(1, shootD * 1);
      if (with_nM.startsWith(codegen_)) {
         with_nM += `${bodans.length}`;
      }
      if ((1 + shootD) < 4 && 1 < (1 + bodans.length)) {
          let screen5 = String.fromCharCode(111,95,49,54,95,99,111,108,114,97,109,0);
          let matchdetailbgZ = 0;
          let u_titlep = [428, 183];
          let zoomX = 2;
         bodans = `${screen5.length + with_nM.length}`;
         screen5 += `${zoomX ^ u_titlep.length}`;
         matchdetailbgZ *= zoomX - u_titlep.length;
      }
      while (5 == (chatbotphotow.size * iconlogoutL.size) || 3 == (5 * iconlogoutL.size)) {
         chatbotphotow = new Map([[`${iconlogoutL.size}`, shootD]]);
         break;
      }
          let megaphoney = [661, 965];
         iconlogoutL = new Map([[`${iconlogoutL.size}`, chatbotphotow.size & iconlogoutL.size]]);
         megaphoney = [3 | megaphoney.length];
         with_nM += `${chatbotphotow.size}`;
         shootD |= with_nM.length;
      iconbellV -= parseInt(`${inviteq}`) * weiboH.length;
      if (963144 == iconbellV) {
         break;
      }
   } while (((iconbellV % (Math.max(10, anytimee.length))) < 5 || 5 < (iconbellV % (Math.max(anytimee.length, 2)))) && (963144 == iconbellV));
   for (let i = 0; i < 3; i++) {
      subsm += greyU.length;
   }
       let matchesT = 5;
       let frame_ulq = [291, 165];
         matchesT += matchesT;
      do {
         frame_ulq = [frame_ulq.length << (Math.min(4, Math.abs(matchesT)))];
         if (141639 == frame_ulq.length) {
            break;
         }
      } while ((frame_ulq.length > 5) && (141639 == frame_ulq.length));
      for (let q = 0; q < 3; q++) {
          let thailandQ = String.fromCharCode(113,95,51,95,100,105,99,116,0);
          let rewindk = false;
          let iconeyef = String.fromCharCode(107,95,56,56,95,100,101,108,97,121,0);
         matchesT |= 3;
         thailandQ += `${thailandQ.length * 1}`;
         rewindk = thailandQ.length == 15;
         iconeyef = `${iconeyef.length}`;
      }
      do {
         matchesT += frame_ulq.length / 3;
         if (2703879 == matchesT) {
            break;
         }
      } while ((2703879 == matchesT) && (frame_ulq.length == 4));
      do {
          let sigmob2 = 1.0;
          let liblogger5 = String.fromCharCode(122,95,53,51,95,112,97,108,108,101,116,101,0);
          let orangeuparrowx = 2.0;
          let libsentry7 = 0.0;
          let volumeq = String.fromCharCode(105,110,118,97,108,105,100,97,116,101,95,117,95,55,54,0);
         frame_ulq = [parseInt(`${sigmob2}`)];
         sigmob2 *= volumeq.length;
         liblogger5 = `${parseInt(`${libsentry7}`)}`;
         orangeuparrowx *= parseInt(`${orangeuparrowx}`) + parseInt(`${libsentry7}`);
         volumeq += `${parseInt(`${orangeuparrowx}`) & liblogger5.length}`;
         if (157871 == frame_ulq.length) {
            break;
         }
      } while ((157871 == frame_ulq.length) && (5 == (matchesT + frame_ulq.length)));
         frame_ulq = [frame_ulq.length];
      mbjscommonL += `${mbjscommonL.length}`;
   for (let f = 0; f < 1; f++) {
      anytimee = `${((default_gF ? 3 : 5))}`;
   }
   do {
      iconbellactive8 = `${iconbellV % (Math.max(1, disconnectedlogof.length))}`;
      if (iconbellactive8.length == 1629223) {
         break;
      }
   } while ((libavfilterL) && (iconbellactive8.length == 1629223));

        settings["width"] = loadAdSize["width"];
   do {
       let changem = String.fromCharCode(108,97,112,112,101,100,95,103,95,52,48,0);
       let temp5 = 2;
       let runtimescheduler3 = new Map([[String.fromCharCode(114,101,97,100,108,110,95,109,95,52,49,0),56], [String.fromCharCode(114,116,112,109,97,112,95,55,95,55,53,0),497], [String.fromCharCode(105,95,54,53,95,117,110,99,111,114,114,0),875]]);
       let configF = 5;
      for (let p = 0; p < 2; p++) {
         changem += `${1 >> (Math.min(1, Math.abs(configF)))}`;
      }
      while ((configF << (Math.min(Math.abs(5), 3))) > 2) {
         configF += (changem == String.fromCharCode(87,0) ? temp5 : changem.length);
         break;
      }
      while (!Array.from(runtimescheduler3.values()).includes(configF)) {
          let suggestiona = 4;
          let themes = false;
          let reactnativejsZ = 5.0;
          let matchactiveg = String.fromCharCode(120,95,56,49,95,99,104,97,105,110,115,0);
          let submit3 = 3.0;
         configF |= runtimescheduler3.size - 1;
         suggestiona -= parseInt(`${reactnativejsZ}`) + 1;
         themes = suggestiona > 4;
         reactnativejsZ /= Math.max(parseFloat(`${1}`), 3);
         matchactiveg += `${matchactiveg.length - parseInt(`${reactnativejsZ}`)}`;
         submit3 /= Math.max(4, (parseFloat(`${String.fromCharCode(50,0) == matchactiveg ? matchactiveg.length : parseInt(`${submit3}`)}`)));
         break;
      }
      if (3 < (runtimescheduler3.size << (Math.min(Math.abs(3), 3))) || 3 < (runtimescheduler3.size << (Math.min(3, Math.abs(temp5))))) {
         runtimescheduler3 = new Map([[`${runtimescheduler3.size}`, 2]]);
      }
         changem += `${changem.length + 2}`;
      while (4 == (configF | 2) && (changem.length | 2) == 5) {
          let iconclosewhitewithbgG = String.fromCharCode(115,117,98,109,105,116,116,101,100,95,110,95,50,57,0);
          let footballn = new Map([[String.fromCharCode(107,95,52,55,95,112,114,101,118,105,101,119,105,110,103,0),false ], [String.fromCharCode(100,95,50,54,95,102,105,102,97,0),false ], [String.fromCharCode(117,95,55,51,95,105,100,99,116,100,115,112,0),true ]]);
         configF *= temp5;
         iconclosewhitewithbgG += `${2 << (Math.min(3, iconclosewhitewithbgG.length))}`;
         footballn[`${iconclosewhitewithbgG}`] = 3;
         break;
      }
         runtimescheduler3[`${temp5}`] = temp5;
      while ((runtimescheduler3.size % 2) > 3 && (temp5 % (Math.max(runtimescheduler3.size, 1))) > 2) {
         runtimescheduler3[changem] = (changem == String.fromCharCode(81,0) ? configF : changem.length);
         break;
      }
      if (5 <= (1 | runtimescheduler3.size) && 1 <= (changem.length | 1)) {
         changem = `${runtimescheduler3.size >> (Math.min(4, Math.abs(configF)))}`;
      }
          let historyz = [377, 874, 931];
         configF <<= Math.min(1, Math.abs(runtimescheduler3.size | 2));
         historyz = [historyz.length];
       let footballZ = 2;
          let profilepicE = String.fromCharCode(99,95,50,57,95,114,101,110,100,105,116,105,111,110,0);
          let n_viewS = 0.0;
         footballZ ^= footballZ * 2;
         profilepicE += `${parseInt(`${n_viewS}`) * 3}`;
         n_viewS -= (String.fromCharCode(122,0) == profilepicE ? parseInt(`${n_viewS}`) : profilepicE.length);
      disconnectedlogof = `${3 - iconbellactive8.length}`;
      if (1164529 == disconnectedlogof.length) {
         break;
      }
   } while ((!disconnectedlogof.startsWith(`${default_gF}`)) && (1164529 == disconnectedlogof.length));
   for (let p = 0; p < 3; p++) {
      libavfilterL = !libavfilterL;
   }
       let iconviewergif5 = 2;
       let latn2 = [936, 234];
       let logoZ = [509, 141, 989];
      if ((logoZ.length & latn2.length) > 3 && 4 > (3 & logoZ.length)) {
          let homeinactivei = String.fromCharCode(111,95,50,95,117,110,116,105,108,0);
          let turndownp = String.fromCharCode(115,105,109,112,108,105,102,105,101,100,95,109,95,56,51,0);
          let mimoq = String.fromCharCode(104,116,109,108,115,117,98,116,105,116,108,101,115,95,108,95,57,53,0);
         logoZ = [logoZ.length * latn2.length];
         homeinactivei += "2";
         turndownp += `${(mimoq == String.fromCharCode(53,0) ? turndownp.length : mimoq.length)}`;
      }
      for (let o = 0; o < 1; o++) {
         iconviewergif5 *= latn2.length;
      }
      inviteq /= Math.max(mbjscommonL.length, 2);
   do {
      weiboH = `${greyU.length}`;
      if (3098954 == weiboH.length) {
         break;
      }
   } while ((2 <= (weiboH.length & 2)) && (3098954 == weiboH.length));
      libavfilterL = !default_gF && greyU.length < 54;

        settings["height"] = loadAdSize["height"];
      mbjscommonL += `${2 + parseInt(`${subsm}`)}`;
      inviteq -= 2;
      weiboH += `${iconbellactive8.length}`;
      greyU.push(weiboH.length);
   if (!umengo || !default_gF) {
      umengo = (mbjscommonL.length + parseInt(`${subsm}`)) == 85;
   }

        delete settings[kATBannerAdLoadingExtraBannerAdSizeStruct];
   if (weiboH.length == 4) {
      default_gF = umengo || weiboH.length < 90;
   }
       let agreementy = false;
       let resultV = String.fromCharCode(115,117,98,111,98,106,101,99,116,95,102,95,49,56,0);
      do {
         resultV = `${resultV.length}`;
         if (3639396 == resultV.length) {
            break;
         }
      } while ((resultV.startsWith(`${agreementy}`)) && (3639396 == resultV.length));
          let librrci = String.fromCharCode(100,95,51,55,95,112,97,107,116,0);
         resultV = `${2 / (Math.max(6, resultV.length))}`;
         librrci += `${(librrci == String.fromCharCode(79,0) ? librrci.length : librrci.length)}`;
       let formB = String.fromCharCode(111,118,112,97,103,101,95,100,95,50,49,0);
       let questH = String.fromCharCode(108,95,56,51,95,100,101,115,101,114,105,97,108,105,122,101,0);
          let final_9rs = [String.fromCharCode(105,95,52,49,95,98,108,117,114,0), String.fromCharCode(98,95,56,52,95,101,97,99,115,0), String.fromCharCode(103,95,53,57,95,113,112,101,103,0)];
          let mbnativeadvancedM = String.fromCharCode(105,115,115,117,105,110,103,95,114,95,49,54,0);
         resultV += `${1 % (Math.max(1, formB.length))}`;
         final_9rs.push(1);
         mbnativeadvancedM += `${mbnativeadvancedM.length ^ final_9rs.length}`;
       let data_ = String.fromCharCode(121,95,57,51,95,99,117,98,101,0);
      while (!data_.includes(`${formB.length}`)) {
         data_ = `${resultV.length}`;
         break;
      }
      anytimee += `${1 >> (Math.min(1, mbjscommonL.length))}`;
       let livenodatabgimgk = new Map([[String.fromCharCode(110,111,110,95,107,95,53,55,0),false ], [String.fromCharCode(114,108,111,116,116,105,101,95,121,95,49,57,0),false ]]);
          let umengt = false;
          let bell8 = 3;
          let leftj = 2;
         livenodatabgimgk[`${umengt}`] = bell8 & 1;
         umengt = leftj < leftj;
         bell8 &= leftj;
         livenodatabgimgk[`${livenodatabgimgk.size}`] = livenodatabgimgk.size * livenodatabgimgk.size;
         livenodatabgimgk[`${livenodatabgimgk.size}`] = livenodatabgimgk.size / (Math.max(3, 7));
      greyU.push(((umengo ? 3 : 1)));
      subsm *= (mbjscommonL == String.fromCharCode(105,0) ? greyU.length : mbjscommonL.length);
       let countdownd = String.fromCharCode(98,105,103,117,105,110,116,95,99,95,49,57,0);
       let layoutd = String.fromCharCode(111,95,49,55,95,109,97,114,107,105,110,103,0);
       let awayiconF = [String.fromCharCode(99,111,110,118,101,110,105,101,110,99,101,95,54,95,54,50,0), String.fromCharCode(105,95,54,50,95,115,117,98,112,101,101,114,0), String.fromCharCode(115,101,114,105,97,108,105,122,97,116,105,111,110,95,122,95,50,52,0)];
       let livesharec = [69, 643, 714];
       let shirtx = [636, 206, 417];
      do {
         awayiconF.push(livesharec.length);
         if (3105410 == awayiconF.length) {
            break;
         }
      } while ((3105410 == awayiconF.length) && (livesharec.length >= awayiconF.length));
      do {
         awayiconF.push(layoutd.length);
         if (3092273 == awayiconF.length) {
            break;
         }
      } while ((layoutd.length >= awayiconF.length) && (3092273 == awayiconF.length));
      do {
         layoutd = `${livesharec.length}`;
         if (layoutd.length == 762203) {
            break;
         }
      } while ((!layoutd.includes(`${shirtx.length}`)) && (layoutd.length == 762203));
         shirtx = [(String.fromCharCode(113,0) == countdownd ? countdownd.length : shirtx.length)];
      for (let k = 0; k < 2; k++) {
         layoutd += `${(countdownd == String.fromCharCode(119,0) ? shirtx.length : countdownd.length)}`;
      }
         shirtx = [layoutd.length & 3];
          let flagW = String.fromCharCode(111,100,100,97,118,103,95,106,95,49,53,0);
         countdownd += `${livesharec.length}`;
         flagW += `${flagW.length}`;
          let tickG = [401, 451];
          let iconclosewhitebgE = String.fromCharCode(98,111,114,100,101,114,101,100,95,111,95,49,54,0);
         layoutd = `${iconclosewhitebgE.length - shirtx.length}`;
         tickG.push(2);
         iconclosewhitebgE += `${tickG.length ^ tickG.length}`;
      inviteq /= Math.max(2, (countdownd == String.fromCharCode(89,0) ? greyU.length : countdownd.length));

    }
    ATBannerRNSDK.loadAd(placementId, JSON.stringify(settings));
      subsm += 1;
      mbjscommonL += `${2 >> (Math.min(Math.abs(parseInt(`${inviteq}`)), 1))}`;
      anytimee = `${iconbellactive8.length >> (Math.min(Math.abs(2), 5))}`;
   if (iconbellactive8.length >= 2) {
      iconbellV /= Math.max(3, 4);
   }
   for (let k = 0; k < 1; k++) {
      mbjscommonL += "2";
   }

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
  showAdInPosition: (placementId, position) =>  ATBannerRNSDK.showAdInPosition(placementId, position),
  showAdInRectangle: (placementId, showAdRect) =>  ATBannerRNSDK.showAdInRectangle(placementId, JSON.stringify(showAdRect)),
  hideAd: (placementId) =>  ATBannerRNSDK.hideAd(placementId),
  reShowAd: (placementId) =>  ATBannerRNSDK.reShowAd(placementId),
  removeAd: (placementId) =>  ATBannerRNSDK.removeAd(placementId),
};
