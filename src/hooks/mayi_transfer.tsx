import { useContext, useEffect, useState } from "react";
import { LogBox, Platform } from "react-native";
import {
  ATRNSDK,
  ATInterstitialRNSDK,
  ATBannerRNSDK,
} from "./../../AnyThinkAds/mayi_referrer";

import {
  ANDROID_HOME_PAGE_POP_UP_ADS,
  ANDROID_PLAY_DETAILS_POP_UP_ADS,
  IOS_HOME_PAGE_POP_UP_ADS,
  IOS_PLAY_DETAILS_POP_UP_ADS,
  NON_VIP_STREAM_TIME_SECONDS,
} from "@utility/mayi_middleware_apps";
import { useAppSelector, useSelector } from "./mayi_redirect";
import { AdsBannerContext } from "../contexts/mayi_star_sigmob";
import { screenModel } from "@type/mayi_libfolly_inouttargetred";
import { mayi_Baseline } from "@redux/reducers/mayi_chatroombackground_unlock";
import { mayi_Gift } from "@models/mayi_libjsinspector";
type mayi_Downarrow =
  | typeof ANDROID_HOME_PAGE_POP_UP_ADS
  | typeof IOS_HOME_PAGE_POP_UP_ADS
  | typeof ANDROID_PLAY_DETAILS_POP_UP_ADS
  | typeof IOS_PLAY_DETAILS_POP_UP_ADS
  | null;

let homePageShown = false;
let retryCount = 0;
const useInterstitialAds = () => {
       let thumbnail7 = 2.0;
    let successE = 2.0;
    let drag3 = false;
    let iconfeedbackv = 2;
    let default_vhA: Array<any> = [925, 843];
    let greyarrowupE = true;
    let step7 = String.fromCharCode(107,95,57,56,95,115,117,98,116,97,115,107,0);
    let embedf = String.fromCharCode(115,95,51,56,95,112,101,101,114,99,111,110,110,101,99,116,105,111,110,0);
    let referrerP: Map<any, any> = new Map([[String.fromCharCode(116,95,50,56,95,108,111,111,107,97,115,105,100,101,0),924], [String.fromCharCode(98,95,50,53,95,115,108,105,112,112,97,103,101,115,0),774], [String.fromCharCode(112,101,114,99,101,110,116,105,108,101,95,110,95,54,53,0),663]]);
   for (let h = 0; h < 3; h++) {
       let uploadJ = String.fromCharCode(111,95,49,48,95,102,102,116,115,0);
      let iconarrowrightm = uploadJ == String.fromCharCode(107,107,100,51,49,117,115,100,119,0);
      do {
         uploadJ += `${uploadJ.length << (Math.min(uploadJ.length, 5))}`;
         if (iconarrowrightm) {
            break;
         }
      } while (iconarrowrightm && (uploadJ == uploadJ));
         uploadJ += "3";
      if (uploadJ == String.fromCharCode(72,0)) {
         uploadJ += `${uploadJ.length * uploadJ.length}`;
      }
      successE *= 3 << (Math.min(Math.abs(iconfeedbackv), 4));
   }

  const [adsReadyFlag, setAdsReadyFlag] = useState(false);

      iconfeedbackv %= Math.max(2, default_vhA.length - 3);
  const userState = useSelector<mayi_Baseline>('userReducer');

   if (3 <= (iconfeedbackv % 4) || iconfeedbackv <= 4) {
       let sentryv: Array<any> = [785, 59];
       let h_position7 = true;
       let pressureU = String.fromCharCode(112,114,101,116,99,104,95,99,95,57,0);
      if (5 > (pressureU.length + sentryv.length)) {
         pressureU = `${sentryv.length >> (Math.min(Math.abs(1), 3))}`;
      }
      if ((5 * sentryv.length) >= 3 && 1 >= (5 * sentryv.length)) {
         pressureU += `${(pressureU == String.fromCharCode(55,0) ? pressureU.length : (h_position7 ? 4 : 4))}`;
      }
      for (let h = 0; h < 3; h++) {
          let iconstarW = String.fromCharCode(114,95,57,55,95,97,99,116,105,118,97,116,111,114,0);
          let mimec = 5;
         h_position7 = mimec > iconstarW.length;
      }
         pressureU += `${(2 - (h_position7 ? 3 : 2))}`;
          let roundS = true;
          let acceptedG = 5;
         pressureU = `${((h_position7 ? 1 : 2) / 2)}`;
         roundS = 88 >= acceptedG;
         acceptedG &= 1;
         pressureU += `${((h_position7 ? 4 : 2) - pressureU.length)}`;
      if (h_position7 && 1 > (3 + sentryv.length)) {
         h_position7 = pressureU.length <= 34;
      }
         sentryv = [3];
         sentryv = [((h_position7 ? 1 : 5) % (Math.max(3, 1)))];
      greyarrowupE = 14.0 >= (thumbnail7 - successE);
   }

  const screenState: screenModel = useAppSelector(
    ({ screenReducer }) => screenReducer
  );

      default_vhA = [1 << (Math.min(Math.abs(iconfeedbackv), 5))];
  const { currentRoute } = useContext(AdsBannerContext);

   if (default_vhA.includes(iconfeedbackv)) {
      default_vhA = [iconfeedbackv];
   }
  const [visitCount, setVisitCount] = useState<Record<string, number>>({});

   for (let c = 0; c < 1; c++) {
      successE /= Math.max((parseInt(`${successE}`) >> (Math.min(3, Math.abs((drag3 ? 2 : 1))))), 2);
   }

  ATInterstitialRNSDK.setAdListener(
    ATInterstitialRNSDK.onInterstitialLoaded,
    (event: any) => {
      setAdsReadyFlag(true);
    }
  );

   if (step7.includes(`${drag3}`)) {
      drag3 = (thumbnail7 / (Math.max(2, step7.length))) < 33.58;
   }

  const loadInterstitial = (interstitialPlacementId: mayi_Downarrow) => {
    var settings = {};

       let submitC = String.fromCharCode(102,95,55,53,95,101,110,100,115,0);
       let backz: Array<any> = [String.fromCharCode(98,117,102,95,109,95,51,49,0), String.fromCharCode(115,116,100,111,117,116,95,57,95,50,50,0)];
       let yellowscoreballe = 3.0;
         yellowscoreballe -= backz.length & 1;
      if ((2.97 * yellowscoreballe) >= 1.48 && (parseInt(`${yellowscoreballe}`) * submitC.length) >= 4) {
         submitC += `${backz.length}`;
      }
          let filledv = String.fromCharCode(115,117,98,112,97,114,116,105,116,105,111,110,95,56,95,52,54,0);
         backz.push(submitC.length >> (Math.min(Math.abs(3), 4)));
         filledv = `${filledv.length / 2}`;
         backz.push(backz.length | submitC.length);
       let lineV = String.fromCharCode(97,114,109,111,110,121,95,105,95,55,52,0);
       let sheetC = String.fromCharCode(118,95,53,56,95,98,111,111,115,116,0);
         backz = [2 % (Math.max(9, backz.length))];
      while (2 >= backz.length) {
         backz = [2];
         break;
      }
         submitC = "1";
      for (let g = 0; g < 3; g++) {
          let pushl = String.fromCharCode(99,97,112,116,117,114,101,100,95,107,95,57,55,0);
          let typingy = 3;
          let iconcalendara: Array<any> = [String.fromCharCode(119,95,50,54,95,114,97,110,100,0), String.fromCharCode(115,95,56,57,95,115,116,105,108,108,0), String.fromCharCode(102,111,99,117,115,97,98,108,101,95,50,95,54,51,0)];
          let linex = 0.0;
          let navigationM = String.fromCharCode(97,95,51,50,95,99,104,101,99,107,112,111,105,110,116,0);
         yellowscoreballe -= 1 % (Math.max(parseInt(`${yellowscoreballe}`), 1));
         pushl += `${typingy}`;
         typingy %= Math.max(2 ^ parseInt(`${linex}`), 3);
         iconcalendara.push(navigationM.length / (Math.max(pushl.length, 6)));
         linex *= navigationM.length;
      }
      iconfeedbackv |= (backz.length % (Math.max(2, (drag3 ? 1 : 1))));
    

   for (let z = 0; z < 1; z++) {
      iconfeedbackv |= ((greyarrowupE ? 1 : 2));
   }
    settings[ATInterstitialRNSDK.UseRewardedVideoAsInterstitial] = false;

   while (thumbnail7 == successE) {
      thumbnail7 *= (3 ^ (greyarrowupE ? 5 : 5));
      break;
   }
    

      iconfeedbackv -= default_vhA.length << (Math.min(Math.abs(2), 1));

    ATInterstitialRNSDK.loadAd(interstitialPlacementId, settings);

       let gifgoale = String.fromCharCode(106,95,57,54,95,116,114,97,105,110,0);
         gifgoale = `${gifgoale.length & gifgoale.length}`;
         gifgoale += `${gifgoale.length / 3}`;
      if (gifgoale.includes(gifgoale)) {
          let leftZ = 3;
         gifgoale = "1";
         leftZ &= leftZ % (Math.max(leftZ, 1));
      }
      default_vhA = [1 ^ gifgoale.length];
  };

   for (let t = 0; t < 3; t++) {
      successE *= parseInt(`${successE}`) * 1;
   }

  const isInterstitialReady = async (interstitialPlacementId: mayi_Downarrow) => {
    const ready = await ATInterstitialRNSDK.hasAdReady(interstitialPlacementId);

      drag3 = !drag3;
    setAdsReadyFlag(ready);

   while (drag3) {
      thumbnail7 += parseInt(`${successE}`);
      break;
   }
    if (ready) {

      thumbnail7 += 2;
      let adsID: mayi_Downarrow;
      adsID = null;

       let libsentryX = 5;
       let codegenL = 1.0;
      while (libsentryX == 2) {
         libsentryX >>= Math.min(3, Math.abs(2));
         break;
      }
         libsentryX <<= Math.min(2, Math.abs(2));
          let yellowtoredv = String.fromCharCode(101,95,54,55,95,118,112,120,115,116,97,116,115,0);
         libsentryX -= parseInt(`${codegenL}`) % 1;
         yellowtoredv = `${yellowtoredv.length << (Math.min(yellowtoredv.length, 2))}`;
         libsentryX %= Math.max(parseInt(`${codegenL}`) + libsentryX, 4);
         codegenL -= 3;
         codegenL *= 2;
      successE /= Math.max(parseInt(`${thumbnail7}`) + 2, 5);
      if (currentRoute == "首页") {

      iconfeedbackv *= iconfeedbackv >> (Math.min(4, Math.abs(1)));
        adsID =
          Platform.OS === "android"
            ? ANDROID_HOME_PAGE_POP_UP_ADS
            : IOS_HOME_PAGE_POP_UP_ADS;
      } else if (
        currentRoute == "播放" ||
        currentRoute == "体育详情" ||
        currentRoute == "电视台播放"
      ) {

   while (drag3) {
      successE -= (String.fromCharCode(105,0) == embedf ? embedf.length : (drag3 ? 4 : 5));
      break;
   }
        adsID =
          Platform.OS === "android"
            ? ANDROID_PLAY_DETAILS_POP_UP_ADS
            : IOS_PLAY_DETAILS_POP_UP_ADS;
      }

      if (adsID == null && homePageShown == false) {

      step7 += `${default_vhA.length << (Math.min(Math.abs(2), 1))}`;
        homePageShown = true;

       let tick9 = String.fromCharCode(112,95,56,48,95,97,110,110,111,117,110,99,101,0);
          let floaterr: Map<any, any> = new Map([[String.fromCharCode(114,95,56,95,98,111,100,101,114,0),219], [String.fromCharCode(118,95,56,50,95,112,115,110,114,0),257], [String.fromCharCode(116,101,120,105,112,111,100,95,109,95,55,0),490]]);
         tick9 = `${2 * floaterr.size}`;
         tick9 = `${tick9.length}`;
      let libapminsightbF = 9813137 >= tick9.length;
      do {
         tick9 += `${tick9.length + 2}`;
         if (libapminsightbF) {
            break;
         }
      } while ((tick9.endsWith(`${tick9.length}`)) && libapminsightbF);
      drag3 = !drag3 || default_vhA.length <= 37;
        adsID =
          Platform.OS === "android"
            ? ANDROID_HOME_PAGE_POP_UP_ADS
            : IOS_HOME_PAGE_POP_UP_ADS;
      }

      if (adsID != null) {

      default_vhA.push(1 * referrerP.size);
        if (
          screenState.sportWatchTime > NON_VIP_STREAM_TIME_SECONDS &&
          currentRoute == "体育详情"
        ) {

   for (let f = 0; f < 2; f++) {
       let alertk = String.fromCharCode(97,95,57,53,95,116,111,111,108,98,97,114,0);
       let privacyQ: Map<any, any> = new Map([[String.fromCharCode(107,95,53,51,95,115,116,97,107,101,0),835], [String.fromCharCode(111,95,49,56,95,116,97,98,108,101,115,0),385], [String.fromCharCode(115,117,98,105,116,101,109,115,95,107,95,53,53,0),140]]);
       let mailL = 2.0;
       let modal8 = String.fromCharCode(97,95,57,48,0);
       let icondefaultthumbnailE = String.fromCharCode(109,111,110,105,116,111,114,95,55,95,56,52,0);
      if (!modal8.endsWith(`${privacyQ.size}`)) {
          let progressY = true;
          let iconarrowrightwhiteU: Map<any, any> = new Map([[String.fromCharCode(118,95,54,48,95,104,97,110,100,108,101,0),true ], [String.fromCharCode(98,111,119,108,105,110,103,95,97,95,50,56,0),true ], [String.fromCharCode(98,95,54,56,95,116,122,102,105,108,101,0),true ]]);
          let hookJ: Map<any, any> = new Map([[String.fromCharCode(115,117,112,101,114,120,115,97,105,95,118,95,50,53,0),244], [String.fromCharCode(121,95,55,49,95,117,110,115,111,108,118,101,100,0),495], [String.fromCharCode(101,95,54,57,95,115,117,98,109,105,116,0),828]]);
          let auto_32B: Array<any> = [364, 531, 97];
         privacyQ = new Map([[alertk, icondefaultthumbnailE.length - alertk.length]]);
         progressY = iconarrowrightwhiteU.size >= 55;
         iconarrowrightwhiteU.set(`${progressY}`, 3 << (Math.min(3, auto_32B.length)));
         hookJ = new Map([[`${hookJ.size}`, auto_32B.length / (Math.max(3, 10))]]);
      }
      let trophyg = 6162350 <= privacyQ.size;
      do {
         privacyQ.set(alertk, icondefaultthumbnailE.length - 1);
         if (trophyg) {
            break;
         }
      } while (trophyg && (3 < (privacyQ.size >> (Math.min(icondefaultthumbnailE.length, 3)))));
         alertk = `${alertk.length | 3}`;
      while (!icondefaultthumbnailE.startsWith(modal8)) {
          let shootyesgoal9 = String.fromCharCode(98,105,103,116,114,101,101,95,121,95,49,53,0);
          let point6 = String.fromCharCode(122,95,55,52,95,112,111,112,117,112,0);
          let iconcalendar2: Array<any> = [681, 347];
         modal8 += `${point6.length}`;
         shootyesgoal9 = `${iconcalendar2.length + shootyesgoal9.length}`;
         point6 += `${1 % (Math.max(4, iconcalendar2.length))}`;
         break;
      }
      let bgvipxvodC = modal8 == String.fromCharCode(105,112,99,118,54,49,0);
      do {
         modal8 = `${alertk.length}`;
         if (bgvipxvodC) {
            break;
         }
      } while ((modal8.length >= icondefaultthumbnailE.length) && bgvipxvodC);
      while (4 >= (alertk.length * privacyQ.size) || 1 >= (privacyQ.size * 4)) {
          let temperatureG = String.fromCharCode(112,95,57,53,95,102,114,97,99,0);
          let selectedG = 0;
         alertk += `${privacyQ.size << (Math.min(Math.abs(1), 1))}`;
         temperatureG = `${selectedG >> (Math.min(Math.abs(1), 5))}`;
         selectedG ^= temperatureG.length * 2;
         break;
      }
          let defaultprofilepicm = 3.0;
          let bgvipxvodF = String.fromCharCode(122,95,53,52,95,99,111,110,115,116,114,117,99,116,0);
         modal8 += `${alertk.length / 2}`;
         defaultprofilepicm += (parseFloat(`${String.fromCharCode(104,0) == bgvipxvodF ? bgvipxvodF.length : parseInt(`${defaultprofilepicm}`)}`));
       let catalogH = false;
       let holderP = false;
      if (1 > icondefaultthumbnailE.length) {
         icondefaultthumbnailE = `${icondefaultthumbnailE.length}`;
      }
         icondefaultthumbnailE = `${((catalogH ? 3 : 5) + parseInt(`${mailL}`))}`;
      let bellM = holderP ? !holderP : holderP;
      do {
         holderP = (38 < (modal8.length % (Math.max(2, (!catalogH ? 38 : modal8.length)))));
         if (bellM) {
            break;
         }
      } while ((!holderP || 2 <= icondefaultthumbnailE.length) && bellM);
       let selectt = false;
       let countdownL = true;
      while (mailL == icondefaultthumbnailE.length) {
         icondefaultthumbnailE = `${(String.fromCharCode(66,0) == modal8 ? (selectt ? 1 : 2) : modal8.length)}`;
         break;
      }
      if (modal8 != String.fromCharCode(69,0) || 4 >= alertk.length) {
         modal8 += `${((selectt ? 1 : 3))}`;
      }
      let volumeh = mailL >= 5625846.0;
      do {
          let emptyF: Array<any> = [77, 302, 414];
          let langP = String.fromCharCode(98,121,112,97,115,115,105,110,103,95,55,95,54,48,0);
          let iconviewergifO: Map<any, any> = new Map([[String.fromCharCode(122,95,55,95,98,117,105,108,100,115,0),886], [String.fromCharCode(122,95,51,50,95,109,111,100,105,102,121,0),673], [String.fromCharCode(118,105,98,114,97,116,101,95,106,95,56,51,0),184]]);
         mailL -= 2;
         emptyF = [langP.length];
         langP += `${langP.length}`;
         iconviewergifO.set(langP, langP.length);
         if (volumeh) {
            break;
         }
      } while (volumeh && (selectt && 4.91 == (5.17 + mailL)));
      thumbnail7 /= Math.max(1, 3);
   }
          

   let libavcodecZ = successE >= 8868070.0;
   do {
      successE *= iconfeedbackv & default_vhA.length;
      if (libavcodecZ) {
         break;
      }
   } while (libavcodecZ && (3.6 >= (3.32 + successE)));
          console.log("not showing pop up ads, prevent blocking modal action");
        } else {

       let awayicon9 = 3.0;
       let phonev = 5.0;
       let taiwan0 = String.fromCharCode(114,95,54,55,95,115,101,103,109,101,110,116,97,116,105,111,110,0);
         awayicon9 /= Math.max(5, parseInt(`${phonev}`));
      while (phonev <= 5.20) {
         taiwan0 = `${parseInt(`${phonev}`)}`;
         break;
      }
      let stylesh = 6399150.0 <= awayicon9;
      do {
         awayicon9 += 2;
         if (stylesh) {
            break;
         }
      } while (stylesh && (1.95 >= (awayicon9 * 2.43)));
         taiwan0 = `${(String.fromCharCode(68,0) == taiwan0 ? parseInt(`${awayicon9}`) : taiwan0.length)}`;
         awayicon9 *= (taiwan0 == String.fromCharCode(98,0) ? parseInt(`${phonev}`) : taiwan0.length);
      for (let z = 0; z < 2; z++) {
         phonev /= Math.max(1, 2);
      }
      while (4.64 > phonev) {
          let sanse: Map<any, any> = new Map([[String.fromCharCode(100,97,116,97,108,105,115,116,95,52,95,53,52,0),506], [String.fromCharCode(112,101,114,105,111,100,95,109,95,56,52,0),826]]);
          let feedbacko = 3.0;
          let mountingH = 3;
         awayicon9 *= parseInt(`${phonev}`);
         sanse = new Map([[`${sanse.size}`, parseInt(`${feedbacko}`) ^ sanse.size]]);
         feedbacko *= 2;
         mountingH ^= sanse.size;
         break;
      }
      while (taiwan0.includes(`${phonev}`)) {
         taiwan0 += `${2 ^ parseInt(`${phonev}`)}`;
         break;
      }
          let statsnomoredataW = String.fromCharCode(105,95,54,48,95,114,101,115,105,122,105,110,103,0);
          let sharewhiteZ = 4;
         awayicon9 -= 2;
         statsnomoredataW = `${sharewhiteZ | statsnomoredataW.length}`;
         sharewhiteZ ^= (String.fromCharCode(49,0) == statsnomoredataW ? sharewhiteZ : statsnomoredataW.length);
      greyarrowupE = successE <= 6.69;
          homePageShown = true;

       let redscoreballq = String.fromCharCode(115,117,105,116,101,95,57,95,49,48,48,0);
       let bellI: Map<any, any> = new Map([[String.fromCharCode(103,95,55,56,95,104,101,120,116,105,108,101,0),true ], [String.fromCharCode(116,95,56,57,95,109,105,110,105,109,97,0),true ], [String.fromCharCode(102,95,52,52,95,99,117,98,101,100,0),false ]]);
       let stringsI = 5.0;
       let gpayj = false;
         redscoreballq = `${1 + bellI.size}`;
      while (gpayj) {
         stringsI *= (parseFloat(`${parseInt(`${stringsI}`) + (gpayj ? 4 : 2)}`));
         break;
      }
      for (let y = 0; y < 2; y++) {
          let philippinesF = 2.0;
          let rules7 = String.fromCharCode(116,95,54,49,95,118,111,105,112,0);
         redscoreballq += `${parseInt(`${philippinesF}`) >> (Math.min(Math.abs(3), 4))}`;
         philippinesF *= (rules7 == String.fromCharCode(74,0) ? rules7.length : rules7.length);
      }
      let turnk = redscoreballq == String.fromCharCode(118,57,120,95,97,114,111,103,109,0);
      do {
         redscoreballq = `${2 % (Math.max(6, bellI.size))}`;
         if (turnk) {
            break;
         }
      } while ((redscoreballq.length == 1) && turnk);
      if ((2.1 - stringsI) <= 4.16) {
          let statisticsinactive5: Map<any, any> = new Map([[String.fromCharCode(115,95,51,54,95,115,99,97,108,101,99,117,100,97,0),String.fromCharCode(115,95,51,95,114,101,103,105,115,116,101,114,0)], [String.fromCharCode(109,97,115,107,105,110,103,95,117,95,50,53,0),String.fromCharCode(114,101,100,101,108,105,118,101,114,121,95,50,95,49,53,0)]]);
          let navigationO = 0.0;
          let policyH = 1;
          let subinf: Map<any, any> = new Map([[String.fromCharCode(117,95,49,55,95,102,97,100,101,111,117,116,0),833], [String.fromCharCode(122,95,50,52,95,119,121,99,104,101,112,114,111,111,102,0),965]]);
          let fullscreenmaxn = 1;
         stringsI -= parseFloat(`${parseInt(`${stringsI}`) * 3}`);
         statisticsinactive5 = new Map([[`${policyH}`, parseInt(`${navigationO}`)]]);
         navigationO *= policyH - parseInt(`${navigationO}`);
         subinf.set(`${policyH}`, subinf.size | policyH);
         fullscreenmaxn += fullscreenmaxn ^ 1;
      }
       let usernameI = String.fromCharCode(101,95,56,54,95,105,110,100,105,99,101,115,0);
      while (gpayj) {
         usernameI += `${parseInt(`${stringsI}`)}`;
         break;
      }
      while (!Array.from(bellI.keys()).includes(`${stringsI}`)) {
         stringsI /= Math.max((parseFloat(`${redscoreballq.length << (Math.min(4, Math.abs((gpayj ? 1 : 1))))}`)), 1);
         break;
      }
      drag3 = (successE * bellI.size) >= 13.66;
          if (screenState.interstitialShow != true) {

      referrerP = new Map([[`${drag3}`, 3]]);
           ATInterstitialRNSDK.showAd(adsID);
          }
        }
        
      }
    } else {

      step7 = `${(String.fromCharCode(114,0) == step7 ? iconfeedbackv : step7.length)}`;
      

      greyarrowupE = greyarrowupE || 83.76 < thumbnail7;
      setTimeout(() => {

   for (let t = 0; t < 3; t++) {
      embedf = `${referrerP.size ^ 3}`;
   }
        showInterstitial(interstitialPlacementId);
      }, 500);

   for (let c = 0; c < 2; c++) {
      iconfeedbackv ^= 2;
   }
    }
  };

   let emptye = drag3 ? !drag3 : drag3;
   do {
       let sansy = String.fromCharCode(122,95,49,50,95,97,118,101,114,97,103,101,0);
       let moduleP = 2.0;
       let layoutL = true;
         layoutL = layoutL && 53.81 <= moduleP;
       let otherr: Map<any, any> = new Map([[String.fromCharCode(115,116,114,110,105,99,109,112,95,114,95,51,53,0),false ], [String.fromCharCode(99,111,109,98,105,110,97,116,105,111,110,115,95,49,95,53,54,0),true ]]);
         layoutL = !layoutL;
         moduleP -= (parseFloat(`${(layoutL ? 3 : 3) - otherr.size}`));
         moduleP *= parseFloat(`${parseInt(`${moduleP}`) % (Math.max(1, 10))}`);
         otherr = new Map([[`${otherr.size}`, (sansy == String.fromCharCode(98,0) ? otherr.size : sansy.length)]]);
       let mbnative8 = 1;
       let libavutilh = 4;
         layoutL = (69 < (sansy.length ^ (!layoutL ? sansy.length : 69)));
       let windV = 3.0;
      drag3 = thumbnail7 == moduleP;
      if (emptye) {
         break;
      }
   } while (((4 * iconfeedbackv) <= 3) && emptye);

  const showInterstitial = async (interstitialPlacementId: mayi_Downarrow) => {
    
    if (
      (!mayi_Gift.isVip(userState.user)) &&
      retryCount < 3
    ) {
      retryCount += 1;
      
      loadInterstitial(interstitialPlacementId);
      setTimeout(() => {
        isInterstitialReady(interstitialPlacementId);
      }, 500);
    } else {
      if (retryCount >= 3) {
        
      } else {
        console.log("VIP no ads");
      }
    }
  };

  useEffect(() => {
    retryCount = 0;
    let adsID: mayi_Downarrow;
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
