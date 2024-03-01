import { useContext, useEffect, useState } from "react";
import { LogBox, Platform } from "react-native";
import {
  ATRNSDK,
  ATInterstitialRNSDK,
  ATBannerRNSDK,
} from "./../../AnyThinkAds/yys_recommendation";

import {
  ANDROID_HOME_PAGE_POP_UP_ADS,
  ANDROID_PLAY_DETAILS_POP_UP_ADS,
  IOS_HOME_PAGE_POP_UP_ADS,
  IOS_PLAY_DETAILS_POP_UP_ADS,
  NON_VIP_STREAM_TIME_SECONDS,
} from "@utility/yys_ajax_switch";
import { useAppSelector, useSelector } from "./yys_frame";
import { AdsBannerContext } from "../contexts/yys_about";
import { screenModel } from "@type/yys_service_setting";
import { yys_HejiCricket } from "@redux/reducers/yys_privacy_round";
import { yys_RelatedTooltips } from "@models/yys_project_pagination";
type yys_Data =
  | typeof ANDROID_HOME_PAGE_POP_UP_ADS
  | typeof IOS_HOME_PAGE_POP_UP_ADS
  | typeof ANDROID_PLAY_DETAILS_POP_UP_ADS
  | typeof IOS_PLAY_DETAILS_POP_UP_ADS
  | null;

let homePageShown = false;
let retryCount = 0;
const useInterstitialAds = () => {
       let specQ = String.fromCharCode(101,108,115,101,95,51,95,49,57,0);
    let librrcX: Map<any, any> = new Map([[String.fromCharCode(100,95,50,51,95,115,112,97,114,115,101,0),605], [String.fromCharCode(109,112,101,103,118,108,99,95,52,95,55,54,0),140]]);
    let recommendationJ = String.fromCharCode(115,115,101,116,95,101,95,50,53,0);
    let sentryZ = String.fromCharCode(101,110,99,105,112,104,101,114,95,107,95,49,49,0);
    let rewindE = String.fromCharCode(105,100,101,110,116,105,102,121,95,98,95,55,51,0);
    let bufferd: Array<any> = [746, 456];
    let wind_ = 3.0;
    let contextA = String.fromCharCode(115,104,105,109,109,101,114,95,114,95,54,51,0);
       let eactt = String.fromCharCode(116,97,114,103,101,116,95,51,95,50,57,0);
      for (let v = 0; v < 3; v++) {
         eactt = `${1 - eactt.length}`;
      }
         eactt = `${eactt.length & 1}`;
       let darkw = 1;
       let baiduO = 2;
      recommendationJ += `${parseInt(`${wind_}`) * 3}`;

  const [adsReadyFlag, setAdsReadyFlag] = useState(false);

   while (specQ.length <= 1) {
       let skip6 = String.fromCharCode(111,95,57,49,95,106,97,99,111,115,117,98,0);
       let white9: Array<any> = [268, 550];
         skip6 += `${2 + white9.length}`;
      for (let f = 0; f < 3; f++) {
         skip6 += `${white9.length}`;
      }
      let neonE = 8006052 >= skip6.length;
      do {
          let penaltyt = 2;
          let mergery = 0;
          let phoneF: Map<any, any> = new Map([[String.fromCharCode(115,116,105,99,107,101,114,115,101,116,95,105,95,52,48,0),805], [String.fromCharCode(108,95,52,55,95,105,109,103,117,116,105,108,115,0),414]]);
         skip6 = `${phoneF.size + white9.length}`;
         penaltyt -= mergery;
         phoneF = new Map([[`${mergery}`, 3 << (Math.min(3, Math.abs(penaltyt)))]]);
         if (neonE) {
            break;
         }
      } while ((2 >= (skip6.length | 1) || 1 >= (skip6.length | white9.length)) && neonE);
      let vignetteg = String.fromCharCode(48,54,111,100,48,118,111,101,100,98,0) == skip6;
      do {
         skip6 = `${1 + white9.length}`;
         if (vignetteg) {
            break;
         }
      } while ((2 < (white9.length % 1)) && vignetteg);
      if (4 > white9.length) {
         white9.push(skip6.length);
      }
      while ((skip6.length >> (Math.min(5, white9.length))) >= 2 && 2 >= (white9.length >> (Math.min(skip6.length, 3)))) {
         white9.push(skip6.length / (Math.max(5, white9.length)));
         break;
      }
      contextA = `${1 & sentryZ.length}`;
      break;
   }
  const userState = useSelector<yys_HejiCricket>('userReducer');

      librrcX.set(specQ, specQ.length >> (Math.min(Math.abs(3), 3)));

  const screenState: screenModel = useAppSelector(
    ({ screenReducer }) => screenReducer
  );

      wind_ /= Math.max(2, 2);
  const { currentRoute } = useContext(AdsBannerContext);

   if (recommendationJ.length == 1) {
      rewindE = "2";
   }
  const [visitCount, setVisitCount] = useState<Record<string, number>>({});

   for (let y = 0; y < 3; y++) {
      bufferd = [librrcX.size];
   }

  ATInterstitialRNSDK.setAdListener(
    ATInterstitialRNSDK.onInterstitialLoaded,
    (event: any) => {
      setAdsReadyFlag(true);
    }
  );

      librrcX.set(specQ, (specQ == String.fromCharCode(78,0) ? specQ.length : recommendationJ.length));

  const loadInterstitial = (interstitialPlacementId: yys_Data) => {
    var settings = {};

      sentryZ = "2";
    

      librrcX.set(`${wind_}`, rewindE.length / 3);
    settings[ATInterstitialRNSDK.UseRewardedVideoAsInterstitial] = false;

   if (5 < sentryZ.length) {
      sentryZ = `${recommendationJ.length & librrcX.size}`;
   }
    

      sentryZ = "1";

    ATInterstitialRNSDK.loadAd(interstitialPlacementId, settings);

      bufferd = [(rewindE == String.fromCharCode(53,0) ? rewindE.length : sentryZ.length)];
  };

      contextA = `${(specQ == String.fromCharCode(122,0) ? parseInt(`${wind_}`) : specQ.length)}`;

  const isInterstitialReady = async (interstitialPlacementId: yys_Data) => {
    const ready = await ATInterstitialRNSDK.hasAdReady(interstitialPlacementId);

   if ((recommendationJ.length * 3) > 2 || (recommendationJ.length * bufferd.length) > 3) {
       let rendera = 4.0;
       let member6 = String.fromCharCode(105,110,116,101,114,97,99,116,105,110,103,95,108,95,55,52,0);
       let register_eW = String.fromCharCode(115,105,109,112,108,101,114,101,97,100,95,110,95,50,49,0);
       let matchO = 0;
       let refreshz = String.fromCharCode(108,111,97,100,95,118,95,50,0);
         rendera /= Math.max(parseInt(`${rendera}`) >> (Math.min(4, Math.abs(1))), 3);
      let l_playerk = matchO <= 4940373;
      do {
         matchO -= 1;
         if (l_playerk) {
            break;
         }
      } while (l_playerk && ((matchO / 4) >= 4 || 1.21 >= (4.16 * rendera)));
      while ((member6.length * matchO) >= 1 || 3 >= (member6.length * 1)) {
         matchO /= Math.max(1 << (Math.min(2, Math.abs(parseInt(`${rendera}`)))), 5);
         break;
      }
         rendera -= 3;
      while ((matchO << (Math.min(Math.abs(1), 5))) >= 1 || 5.23 >= (5.84 - rendera)) {
         rendera /= Math.max(3, 2);
         break;
      }
         register_eW += `${3 >> (Math.min(3, member6.length))}`;
       let libreactnativejniM = 0;
       let time_8c = 2;
      while ((time_8c - rendera) == 2.36 && (time_8c - rendera) == 2.36) {
          let bellB: Map<any, any> = new Map([[String.fromCharCode(103,95,54,53,95,114,112,99,103,101,110,0),String.fromCharCode(116,114,97,118,101,108,95,114,95,54,56,0)], [String.fromCharCode(99,101,110,116,101,114,95,98,95,53,50,0),String.fromCharCode(115,95,55,51,95,117,110,117,115,101,100,0)]]);
         rendera += matchO & 3;
         bellB.set(`${bellB.size}`, 2);
         break;
      }
       let footballV: Map<any, any> = new Map([[String.fromCharCode(122,95,53,95,108,105,98,115,119,105,102,116,111,115,0),106], [String.fromCharCode(97,108,116,114,101,102,95,120,95,55,0),349], [String.fromCharCode(111,114,116,104,111,103,111,110,97,108,105,122,101,95,119,95,52,55,0),885]]);
      while (5 > (footballV.size ^ 2)) {
         rendera += (refreshz == String.fromCharCode(121,0) ? member6.length : refreshz.length);
         break;
      }
      while (4.19 >= (rendera / (Math.max(3, matchO))) && (3 ^ matchO) >= 3) {
         matchO ^= refreshz.length;
         break;
      }
      let fastforwardM = 8805062 <= libreactnativejniM;
      do {
         libreactnativejniM -= footballV.size;
         if (fastforwardM) {
            break;
         }
      } while (fastforwardM && ((4 & register_eW.length) < 2));
      if ((refreshz.length % 5) <= 1 && (refreshz.length % (Math.max(5, 4))) <= 1) {
          let orangew = 5.0;
         footballV = new Map([[refreshz, (String.fromCharCode(55,0) == refreshz ? parseInt(`${rendera}`) : refreshz.length)]]);
         orangew += parseFloat(`${1}`);
      }
      let colorsZ = 9880685 >= matchO;
      do {
          let loading0: Array<any> = [70, 589, 245];
          let wind7: Array<any> = [949, 143];
          let paginationW = 3.0;
          let reactk = String.fromCharCode(113,95,51,56,95,114,101,115,111,108,118,105,110,103,0);
          let step_ = true;
         matchO ^= footballV.size << (Math.min(loading0.length, 4));
         loading0.push(((step_ ? 3 : 3)));
         wind7.push(((step_ ? 1 : 5) / (Math.max(reactk.length, 7))));
         paginationW -= parseFloat(`${parseInt(`${paginationW}`) & 2}`);
         reactk += `${reactk.length}`;
         if (colorsZ) {
            break;
         }
      } while (((rendera + matchO) <= 1.36) && colorsZ);
       let injury1 = 0.0;
      recommendationJ = `${bufferd.length / (Math.max(1, 4))}`;
   }
    setAdsReadyFlag(ready);

   while ((wind_ - 5.14) < 2.32) {
      wind_ /= Math.max((String.fromCharCode(81,0) == contextA ? contextA.length : librrcX.size), 5);
      break;
   }
    if (ready) {

       let other6 = 5.0;
      let type_5Z = 5585569.0 >= other6;
      do {
         other6 -= parseInt(`${other6}`) * parseInt(`${other6}`);
         if (type_5Z) {
            break;
         }
      } while ((3.48 < (1 * other6)) && type_5Z);
       let coreW = String.fromCharCode(105,99,109,112,95,118,95,56,55,0);
       let auto_69a = String.fromCharCode(100,105,115,116,97,110,99,101,115,95,101,95,56,51,0);
      if ((5 + parseInt(`${other6}`)) >= 2 || 3.56 >= (1.1 + other6)) {
         auto_69a += `${parseInt(`${other6}`) * 2}`;
      }
      contextA = `${bufferd.length + 1}`;
      let adsID: yys_Data;
      adsID = null;

      librrcX.set(`${sentryZ}`, 2);
      if (currentRoute == "首页") {

       let short_9hz = 4.0;
       let whiteb: Array<any> = [953, 759, 193];
       let page4 = false;
      while (3 >= (whiteb.length - 1) && whiteb.length >= 1) {
         whiteb.push(whiteb.length);
         break;
      }
         short_9hz *= ((page4 ? 5 : 5) * parseInt(`${short_9hz}`));
          let actionsQ = String.fromCharCode(110,95,55,54,95,113,100,109,99,0);
         short_9hz += parseInt(`${short_9hz}`) << (Math.min(2, Math.abs(1)));
         actionsQ += `${actionsQ.length}`;
       let livec = String.fromCharCode(114,101,97,115,111,110,115,95,51,95,51,52,0);
       let eactG = String.fromCharCode(108,108,118,105,100,100,115,112,101,110,99,95,120,95,57,48,0);
          let gradled = String.fromCharCode(97,99,99,117,114,97,99,121,95,48,95,55,0);
          let thailandI = String.fromCharCode(100,101,102,101,114,114,101,100,95,111,95,57,48,0);
         page4 = short_9hz >= 62.44;
         gradled = `${(String.fromCharCode(116,0) == thailandI ? gradled.length : thailandI.length)}`;
      let fullF = String.fromCharCode(54,57,121,0) == eactG;
      do {
         eactG += "2";
         if (fullF) {
            break;
         }
      } while (fullF && (4 <= (whiteb.length >> (Math.min(eactG.length, 2))) || (4 >> (Math.min(1, whiteb.length))) <= 2));
      let directp = 8174852.0 <= short_9hz;
      do {
         short_9hz += (whiteb.length / (Math.max(8, (page4 ? 2 : 4))));
         if (directp) {
            break;
         }
      } while ((1 >= (livec.length + parseInt(`${short_9hz}`)) || (parseInt(`${short_9hz}`) + livec.length) >= 1) && directp);
      if (!eactG.includes(`${page4}`)) {
         page4 = 96 < eactG.length;
      }
         livec = `${parseInt(`${short_9hz}`) | 1}`;
      bufferd.push(contextA.length % (Math.max(2, parseInt(`${wind_}`))));
        adsID =
          Platform.OS === "android"
            ? ANDROID_HOME_PAGE_POP_UP_ADS
            : IOS_HOME_PAGE_POP_UP_ADS;
      } else if (
        currentRoute == "播放" ||
        currentRoute == "体育详情" ||
        currentRoute == "电视台播放"
      ) {

   let fieldV = 8867104 >= librrcX.size;
   do {
       let styleE = String.fromCharCode(116,95,49,53,95,109,111,118,105,110,103,0);
       let fadfdeebbbfdabbbabdadfaaddaam = true;
       let libreactperfloggerjniP = 2;
       let feedback6 = 5;
       let sendr = true;
      for (let w = 0; w < 1; w++) {
         styleE += "2";
      }
      while ((feedback6 / 2) < 2) {
         feedback6 >>= Math.min(2, Math.abs(3 % (Math.max(3, feedback6))));
         break;
      }
      if ((feedback6 | 5) < 2) {
         libreactperfloggerjniP -= 1 - styleE.length;
      }
         sendr = styleE.length > 59 && !sendr;
      let mutedh = sendr ? !sendr : sendr;
      do {
         sendr = (!sendr ? fadfdeebbbfdabbbabdadfaaddaam : !sendr);
         if (mutedh) {
            break;
         }
      } while ((!sendr && styleE.length == 1) && mutedh);
       let cluby: Map<any, any> = new Map([[String.fromCharCode(100,105,116,97,98,108,101,95,97,95,51,49,0),259], [String.fromCharCode(111,95,56,55,95,115,116,100,0),305]]);
       let pointU: Map<any, any> = new Map([[String.fromCharCode(115,101,113,117,101,110,99,101,95,121,95,53,0),455], [String.fromCharCode(115,116,114,117,99,116,117,114,101,95,51,95,54,52,0),88], [String.fromCharCode(109,117,108,116,105,99,111,100,101,99,95,56,95,55,50,0),430]]);
         cluby.set(`${fadfdeebbbfdabbbabdadfaaddaam}`, cluby.size);
      while (styleE.length == 2) {
         styleE += `${cluby.size}`;
         break;
      }
         libreactperfloggerjniP %= Math.max(feedback6 / (Math.max(cluby.size, 6)), 2);
         styleE += `${((fadfdeebbbfdabbbabdadfaaddaam ? 1 : 2))}`;
       let invitex = String.fromCharCode(117,95,53,52,95,108,111,115,115,108,101,115,115,0);
       let klevin2 = String.fromCharCode(115,108,111,116,115,95,54,95,52,57,0);
         cluby = new Map([[`${feedback6}`, feedback6]]);
      while ((3 * styleE.length) < 3 && 2 < (3 * styleE.length)) {
         pointU = new Map([[`${cluby.size}`, cluby.size]]);
         break;
      }
       let friendsF: Array<any> = [String.fromCharCode(98,95,55,57,95,101,109,111,106,105,0), String.fromCharCode(113,95,55,52,95,105,110,116,101,114,99,101,112,116,0), String.fromCharCode(112,117,98,108,105,99,107,101,121,115,95,110,95,51,48,0)];
       let read8: Array<any> = [629, 746];
      if (2 <= (3 >> (Math.min(4, read8.length))) || (3 >> (Math.min(2, Math.abs(libreactperfloggerjniP)))) <= 2) {
         libreactperfloggerjniP >>= Math.min(Math.abs((pointU.size ^ (sendr ? 5 : 1))), 4);
      }
      librrcX.set(`${fadfdeebbbfdabbbabdadfaaddaam}`, 1 << (Math.min(5, recommendationJ.length)));
      if (fieldV) {
         break;
      }
   } while ((recommendationJ.endsWith(`${librrcX.size}`)) && fieldV);
        adsID =
          Platform.OS === "android"
            ? ANDROID_PLAY_DETAILS_POP_UP_ADS
            : IOS_PLAY_DETAILS_POP_UP_ADS;
      }

      if (adsID == null && homePageShown == false) {

      wind_ /= Math.max(1 ^ specQ.length, 5);
        homePageShown = true;

      specQ += `${librrcX.size}`;
        adsID =
          Platform.OS === "android"
            ? ANDROID_HOME_PAGE_POP_UP_ADS
            : IOS_HOME_PAGE_POP_UP_ADS;
      }

      if (adsID != null) {

      rewindE += "3";
        if (
          screenState.sportWatchTime > NON_VIP_STREAM_TIME_SECONDS &&
          currentRoute == "体育详情"
        ) {

      librrcX = new Map([[`${bufferd.length}`, rewindE.length]]);
          

   if (!recommendationJ.includes(`${sentryZ.length}`)) {
       let librrcK = String.fromCharCode(103,95,56,53,95,108,117,116,121,117,118,0);
       let championU = true;
       let whatsappM = 2;
      for (let c = 0; c < 1; c++) {
          let history0 = 4;
          let libswresampleO = String.fromCharCode(111,95,56,50,95,98,105,116,97,108,108,111,99,0);
         championU = String.fromCharCode(111,0) == librrcK;
         history0 &= 3 + history0;
         libswresampleO += "2 - history0";
      }
      let materialo = championU ? !championU : championU;
      do {
          let mbsplashj = true;
          let playG: Map<any, any> = new Map([[String.fromCharCode(121,95,54,55,95,109,118,99,111,109,112,111,110,101,110,116,0),55], [String.fromCharCode(109,105,114,114,111,114,101,100,95,116,95,53,54,0),846]]);
          let modity2: Map<any, any> = new Map([[String.fromCharCode(115,110,97,109,101,95,106,95,51,52,0),391], [String.fromCharCode(116,104,117,109,98,110,97,105,108,115,95,51,95,54,50,0),877], [String.fromCharCode(109,105,112,115,100,115,112,95,56,95,55,55,0),152]]);
          let libavformaty = String.fromCharCode(105,122,101,114,111,95,50,95,55,48,0);
         championU = playG.size > 30;
         mbsplashj = (libavformaty.length | modity2.size) <= 68;
         playG.set(`${mbsplashj}`, modity2.size | 1);
         libavformaty += "3";
         if (materialo) {
            break;
         }
      } while (materialo && (whatsappM >= 3));
      let redirectC = 9292039 >= whatsappM;
      do {
         whatsappM += 1;
         if (redirectC) {
            break;
         }
      } while (((2 >> (Math.min(5, librrcK.length))) < 5 && 2 < (whatsappM >> (Math.min(librrcK.length, 2)))) && redirectC);
       let subs5 = 4.0;
      let otherY = 8575514.0 >= subs5;
      do {
          let fieldS = String.fromCharCode(115,95,52,51,95,99,111,110,116,111,117,114,0);
         subs5 += (parseFloat(`${(championU ? 2 : 3) ^ parseInt(`${subs5}`)}`));
         fieldS = `${fieldS.length | 1}`;
         if (otherY) {
            break;
         }
      } while (((subs5 * 3.36) >= 4.64) && otherY);
       let cast6 = String.fromCharCode(108,117,109,97,95,99,95,50,57,0);
      if (!librrcK.startsWith(`${championU}`)) {
         librrcK = `${(String.fromCharCode(104,0) == cast6 ? cast6.length : (championU ? 5 : 2))}`;
      }
         subs5 += (parseFloat(`${parseInt(`${subs5}`) / (Math.max(9, (championU ? 4 : 5)))}`));
       let zhuboS = 5.0;
       let modelZ = 1.0;
      sentryZ += `${3 * specQ.length}`;
   }
          console.log("not showing pop up ads, prevent blocking modal action");
        } else {

   if (1 < (recommendationJ.length / (Math.max(10, bufferd.length))) || (bufferd.length / (Math.max(1, 7))) < 1) {
      recommendationJ = `${bufferd.length}`;
   }
          homePageShown = true;

      specQ = `${librrcX.size << (Math.min(Math.abs(2), 3))}`;
    
            // ANDROID_HOME_PAGE_POP_UP_ADS,
            // ANDROID_PLAY_DETAILS_POP_UP_ADS,
            // IOS_HOME_PAGE_POP_UP_ADS,
            // IOS_PLAY_DETAILS_POP_UP_ADS,
            // NON_VIP_STREAM_TIME_SECONDS,
            if((screenState.isPlayGuideShown2 == false || screenState.isPlayGuideShown == false) &&  adsID == IOS_PLAY_DETAILS_POP_UP_ADS)
            {
               return
            }

            if((screenState.isSportGuideShown == false) &&  adsID == IOS_PLAY_DETAILS_POP_UP_ADS)
            {
               return
            }

            if((screenState.isHomeGuideShown == false) &&  adsID == IOS_HOME_PAGE_POP_UP_ADS)
            {
               return
            }
               ATInterstitialRNSDK.showAd(adsID);
        }
        
      }
    } else {

      specQ += `${(rewindE == String.fromCharCode(75,0) ? recommendationJ.length : rewindE.length)}`;
      

   for (let u = 0; u < 1; u++) {
       let singley = 5;
       let interstitialK = 4.0;
       let sortt = 4;
       let mathO = 1.0;
      if (1 > (parseInt(`${mathO}`) - sortt) && (4.36 - mathO) > 4.14) {
          let progress6: Map<any, any> = new Map([[String.fromCharCode(99,111,112,121,109,95,104,95,49,56,0),557], [String.fromCharCode(119,95,49,48,48,95,117,110,115,101,110,100,0),157], [String.fromCharCode(101,110,116,101,114,95,110,95,55,53,0),808]]);
          let bufferu = String.fromCharCode(108,111,110,103,95,56,95,56,55,0);
          let redirect3 = String.fromCharCode(106,95,50,54,95,112,105,112,101,108,111,115,115,0);
          let termsn = 5.0;
          let traminiy = false;
         sortt >>= Math.min(Math.abs(parseInt(`${termsn}`)), 2);
         progress6 = new Map([[`${progress6.size}`, 1]]);
         bufferu = `${bufferu.length >> (Math.min(2, Math.abs(progress6.size)))}`;
         redirect3 = `${((traminiy ? 3 : 2))}`;
         traminiy = redirect3.length > 94;
      }
      for (let o = 0; o < 1; o++) {
         mathO /= Math.max(2, singley);
      }
          let materialy: Array<any> = [575, 997, 917];
          let onewsN: Array<any> = [653, 431];
          let videoE = String.fromCharCode(100,105,114,101,99,116,95,116,95,50,51,0);
         singley -= onewsN.length << (Math.min(3, Math.abs(singley)));
         materialy.push(1);
         onewsN = [materialy.length ^ 2];
         videoE = `${materialy.length / (Math.max(videoE.length, 4))}`;
         singley %= Math.max(sortt, 4);
      while ((sortt + mathO) < 5.16) {
         sortt *= 3 & sortt;
         break;
      }
      while (1.100 >= mathO) {
          let topicV = String.fromCharCode(97,118,102,111,114,109,97,116,95,98,95,55,0);
          let events = 3.0;
          let backm: Array<any> = [73, 863];
          let bootsplashr: Array<any> = [515, 354];
         sortt >>= Math.min(Math.abs(singley << (Math.min(3, Math.abs(3)))), 1);
         topicV = `${parseInt(`${events}`)}`;
         events += parseFloat(`${1 << (Math.min(3, backm.length))}`);
         backm = [backm.length];
         bootsplashr.push((topicV == String.fromCharCode(101,0) ? topicV.length : bootsplashr.length));
         break;
      }
      while (1 <= (sortt + 3)) {
         sortt /= Math.max(1, 3 - parseInt(`${interstitialK}`));
         break;
      }
          let transferK: Map<any, any> = new Map([[String.fromCharCode(116,95,53,55,95,117,116,118,105,100,101,111,0),821], [String.fromCharCode(115,99,97,108,105,110,103,95,51,95,51,49,0),366]]);
         interstitialK *= parseFloat(`${parseInt(`${interstitialK}`) + parseInt(`${mathO}`)}`);
         transferK.set(`${transferK.size}`, transferK.size - 3);
         interstitialK *= parseFloat(`${singley}`);
      let nextZ = 9564478 <= sortt;
      do {
         sortt <<= Math.min(Math.abs(parseInt(`${mathO}`)), 1);
         if (nextZ) {
            break;
         }
      } while (((mathO / 5.42) <= 5.81 || 1 <= (2 >> (Math.min(1, Math.abs(sortt))))) && nextZ);
       let bellI = String.fromCharCode(115,116,114,105,112,112,101,100,95,113,95,49,48,48,0);
       let bingu = String.fromCharCode(109,101,115,104,95,122,95,51,57,0);
         mathO *= parseInt(`${interstitialK}`) * 3;
      wind_ *= (specQ == String.fromCharCode(72,0) ? parseInt(`${interstitialK}`) : specQ.length);
   }
      setTimeout(() => {

      librrcX = new Map([[`${librrcX.size}`, (contextA == String.fromCharCode(54,0) ? librrcX.size : contextA.length)]]);
        showInterstitial(interstitialPlacementId);
      }, 500);

      rewindE = `${bufferd.length << (Math.min(contextA.length, 1))}`;
    }
  };

   if (1 < (4 >> (Math.min(2, specQ.length))) && (parseInt(`${wind_}`) * 4) < 4) {
      wind_ *= rewindE.length;
   }

  const showInterstitial = async (interstitialPlacementId: yys_Data) => {
    

      specQ += `${parseInt(`${wind_}`)}`;
    if (
      (!yys_RelatedTooltips.isVip(userState.user)) &&
      retryCount < 3
    ) {

       let anner_ = 5.0;
      for (let u = 0; u < 3; u++) {
         anner_ += parseFloat(`${parseInt(`${anner_}`) - parseInt(`${anner_}`)}`);
      }
      let nterstitialp = anner_ >= 9555611.0;
      do {
         anner_ /= Math.max(parseFloat(`${parseInt(`${anner_}`)}`), 4);
         if (nterstitialp) {
            break;
         }
      } while (((anner_ * 2.35) > 5.83 && (anner_ * anner_) > 2.35) && nterstitialp);
       let untickX = String.fromCharCode(120,95,57,52,95,116,97,98,115,0);
      librrcX.set(`${wind_}`, bufferd.length & parseInt(`${wind_}`));
      retryCount += 1;

   while (5 > (3 ^ specQ.length) && (specQ.length ^ 3) > 3) {
       let manifestB = String.fromCharCode(109,95,54,56,95,122,111,111,109,105,110,103,0);
         manifestB = "1";
         manifestB += `${2 | manifestB.length}`;
      for (let v = 0; v < 1; v++) {
          let emojiB = String.fromCharCode(105,95,57,48,95,101,110,97,98,108,101,115,0);
          let ewardedk = true;
          let buttonD = 4;
          let downloadedt = String.fromCharCode(114,101,110,100,101,114,98,117,102,102,101,114,95,121,95,49,55,0);
          let reducerw: Array<any> = [String.fromCharCode(99,109,97,112,95,109,95,56,52,0), String.fromCharCode(116,95,54,95,117,112,108,105,110,107,0)];
         manifestB = `${manifestB.length}`;
         emojiB += `${reducerw.length}`;
         ewardedk = String.fromCharCode(68,0) == emojiB;
         buttonD *= (buttonD - (ewardedk ? 3 : 5));
         downloadedt += "3";
         reducerw.push(buttonD << (Math.min(downloadedt.length, 1)));
      }
      bufferd.push(specQ.length);
      break;
   }
      

   while (specQ.includes(`${librrcX.size}`)) {
      librrcX = new Map([[recommendationJ, sentryZ.length ^ recommendationJ.length]]);
      break;
   }
      loadInterstitial(interstitialPlacementId);

      bufferd.push(1);
      setTimeout(() => {

      wind_ -= bufferd.length * 2;
        isInterstitialReady(interstitialPlacementId);
      }, 500);
    } else {

       let bingH: Map<any, any> = new Map([[String.fromCharCode(114,101,99,117,114,115,105,111,110,95,116,95,51,53,0),true ], [String.fromCharCode(101,120,101,99,117,116,101,95,49,95,50,48,0),false ]]);
         bingH.set(`${bingH.size}`, 1 << (Math.min(4, Math.abs(bingH.size))));
         bingH.set(`${bingH.size}`, 2 - bingH.size);
         bingH.set(`${bingH.size}`, bingH.size);
      specQ += `${specQ.length}`;
      if (retryCount >= 3) {
        
      } else {

   if (5 == (bufferd.length & 2) || (rewindE.length & bufferd.length) == 2) {
      bufferd = [(specQ == String.fromCharCode(99,0) ? bufferd.length : specQ.length)];
   }
        console.log("VIP no ads");
      }
    }
  };

  useEffect(() => {
    retryCount = 0;
    let adsID: yys_Data;
    adsID = null;

    if (currentRoute == "首页" && homePageShown == false) {
      adsID =
        Platform.OS === "android"
          ? ANDROID_HOME_PAGE_POP_UP_ADS
          : IOS_HOME_PAGE_POP_UP_ADS;
    } else if (
      currentRoute == "播放" ||
      currentRoute == "体育详情" ||
      currentRoute == "电视台播放"
    ) {
      adsID =
        Platform.OS === "android"
          ? ANDROID_PLAY_DETAILS_POP_UP_ADS
          : IOS_PLAY_DETAILS_POP_UP_ADS;
    }

    if (adsID != null) {
      setTimeout(() => {
        showInterstitial(adsID);
      }, 100); 
    }
  }, [currentRoute]);

  useEffect(() => {
    retryCount = 0;
    loadInterstitial(
      Platform.OS === "android"
        ? ANDROID_HOME_PAGE_POP_UP_ADS
        : IOS_HOME_PAGE_POP_UP_ADS
    );

    loadInterstitial(
      Platform.OS === "android"
        ? ANDROID_PLAY_DETAILS_POP_UP_ADS
        : IOS_PLAY_DETAILS_POP_UP_ADS
    );

    if (Platform.OS === "ios") {
      setTimeout(() => {
        showInterstitial(
          Platform.OS === "android"
            ? ANDROID_HOME_PAGE_POP_UP_ADS
            : IOS_HOME_PAGE_POP_UP_ADS
        );
      }, 100);
    }
  }, []);

  return;
};

export default useInterstitialAds;
