import { useContext, useEffect, useState } from "react";
import { LogBox, Platform } from "react-native";
import {
  ATRNSDK,
  ATInterstitialRNSDK,
  ATBannerRNSDK,
} from "./../../AnyThinkAds/wawa_tick";

import {
  ANDROID_HOME_PAGE_POP_UP_ADS,
  ANDROID_PLAY_DETAILS_POP_UP_ADS,
  IOS_HOME_PAGE_POP_UP_ADS,
  IOS_PLAY_DETAILS_POP_UP_ADS,
  NON_VIP_STREAM_TIME_SECONDS,
} from "@utility/wawa_iconpointscore";
import { useAppDispatch, useAppSelector, useSelector } from "./wawa_root";
import { AdsBannerContext } from "../contexts/wawa_analytics";
import { screenModel } from "@type/wawa_rules";
import { wawaPhoneControls } from "@redux/reducers/wawa_umeng";
import { wawaLibglog } from "@models/wawa_refreshborderless_found";
import { setManualShowPopAds } from "@redux/actions/wawa_related";
type wawaCombineTail =
  | typeof ANDROID_HOME_PAGE_POP_UP_ADS
  | typeof IOS_HOME_PAGE_POP_UP_ADS
  | typeof ANDROID_PLAY_DETAILS_POP_UP_ADS
  | typeof IOS_PLAY_DETAILS_POP_UP_ADS
  | null;

let homePageShown = false;
let retryCount = 0;
const useInterstitialAds = () => {
       let matches7 = 5;
    let logouserL = 5.0;
    let file9 = 0.0;
    let predictionactiveh = 4.0;
    let rank_: Map<any, any> = new Map([[String.fromCharCode(101,118,116,97,103,0),String.fromCharCode(115,101,101,107,97,98,108,101,0)], [String.fromCharCode(97,100,100,105,0),String.fromCharCode(102,101,101,100,98,97,99,107,0)], [String.fromCharCode(97,118,102,111,114,109,97,116,114,101,115,0),String.fromCharCode(101,112,97,102,0)]]);
    let whitetickH = true;
    let dialog6 = String.fromCharCode(116,104,114,101,97,100,115,108,105,99,101,0);
    let runtimescheduleru = 0.0;
    let sharedj = 0.0;
    let videocommonE = String.fromCharCode(121,117,118,121,117,118,0);
    let headerv = 2.0;
    let ksad7 = true;
    let predictionarrowN = String.fromCharCode(105,119,97,108,115,104,0);
    let mbbidV = String.fromCharCode(115,116,114,101,97,109,115,0);
      file9 /= Math.max((String.fromCharCode(88,0) == dialog6 ? matches7 : dialog6.length), 2);

  const [adsReadyFlag, setAdsReadyFlag] = useState(false);

   if (whitetickH) {
      whitetickH = whitetickH && 71.91 > runtimescheduleru;
   }
  const userState = useSelector<wawaPhoneControls>("userReducer");

       let gifgoalbg3 = String.fromCharCode(115,113,117,97,114,101,115,0);
       let vignettey = true;
       let redgoalU = 3;
      if (4 > (redgoalU | 5) || vignettey) {
         vignettey = gifgoalbg3.length <= 75;
      }
         gifgoalbg3 = "1";
         redgoalU *= redgoalU;
      while (5 >= (redgoalU / 5)) {
         vignettey = !vignettey;
         break;
      }
      let nextk = vignettey ? !vignettey : vignettey;
      do {
         vignettey = redgoalU >= 97;
         if (nextk) {
            break;
         }
      } while (nextk && (!vignettey));
      predictionactiveh *= ((vignettey ? 4 : 1));

  const screenState: screenModel = useAppSelector(
    ({ screenReducer }) => screenReducer
  );

       let icondefaultthumbnaile = String.fromCharCode(109,101,115,115,97,103,105,110,103,0);
      while (icondefaultthumbnaile.length > 3) {
          let basketballplayerplaceholderV: Map<any, any> = new Map([[String.fromCharCode(112,117,108,108,100,111,119,110,0),394], [String.fromCharCode(100,108,105,100,120,0),847], [String.fromCharCode(108,117,109,97,107,101,121,0),505]]);
          let yellowcirclebgF: Map<any, any> = new Map([[String.fromCharCode(115,117,98,116,108,101,0),String.fromCharCode(116,100,101,99,111,100,101,0)], [String.fromCharCode(111,112,116,103,114,111,117,112,0),String.fromCharCode(101,118,101,114,121,119,104,101,114,101,0)], [String.fromCharCode(107,101,121,110,97,109,101,0),String.fromCharCode(109,115,112,101,108,0)]]);
          let panglev = String.fromCharCode(100,101,112,115,0);
         icondefaultthumbnaile = "3";
         basketballplayerplaceholderV = new Map([[`${basketballplayerplaceholderV.size}`, 3]]);
         yellowcirclebgF = new Map([[`${basketballplayerplaceholderV.size}`, yellowcirclebgF.size]]);
         panglev += "1";
         break;
      }
       let langkeyV = 3;
         icondefaultthumbnaile = `${icondefaultthumbnaile.length * langkeyV}`;
      videocommonE = `${3 * dialog6.length}`;
  const { currentRoute } = useContext(AdsBannerContext);

       let icontransferclub9 = String.fromCharCode(100,117,114,103,101,114,0);
       let episodeD = 3.0;
          let schedule1: Array<any> = [String.fromCharCode(98,105,111,109,101,116,114,105,99,0), String.fromCharCode(118,111,119,101,108,0)];
          let userP = String.fromCharCode(97,100,100,101,100,0);
          let profileD = false;
         episodeD -= (parseFloat(`${String.fromCharCode(55,0) == userP ? (profileD ? 5 : 5) : userP.length}`));
         schedule1 = [schedule1.length | 1];
       let sellmathbackgroundt = String.fromCharCode(100,101,105,110,105,116,0);
         episodeD *= parseFloat(`${parseInt(`${episodeD}`) ^ icontransferclub9.length}`);
      if (4 > (icontransferclub9.length + parseInt(`${episodeD}`))) {
         episodeD += (parseFloat(`${icontransferclub9 == String.fromCharCode(69,0) ? sellmathbackgroundt.length : icontransferclub9.length}`));
      }
      for (let y = 0; y < 2; y++) {
         episodeD /= Math.max(4, parseFloat(`${parseInt(`${episodeD}`)}`));
      }
      for (let m = 0; m < 3; m++) {
         episodeD += (parseFloat(`${icontransferclub9 == String.fromCharCode(77,0) ? icontransferclub9.length : parseInt(`${episodeD}`)}`));
      }
      rank_.set(`${headerv}`, 2);
  const [visitCount, setVisitCount] = useState<Record<string, number>>({});

   let scheduler0 = 8602458.0 <= file9;
   do {
       let modew = 0.0;
       let google3 = String.fromCharCode(97,112,110,115,0);
       let eighteenI = false;
         google3 += `${((eighteenI ? 2 : 4))}`;
       let iconpipexpandA: Map<any, any> = new Map([[String.fromCharCode(111,102,102,0),339], [String.fromCharCode(99,102,101,110,99,0),597], [String.fromCharCode(114,101,115,111,108,117,116,105,111,110,0),906]]);
       let libpangleflippeds: Map<any, any> = new Map([[String.fromCharCode(104,121,115,99,97,108,101,0),403], [String.fromCharCode(104,105,103,104,115,104,101,108,102,0),573]]);
         eighteenI = null == iconpipexpandA.get(`${eighteenI}`);
         eighteenI = modew < 95.98;
          let termsh = 5.0;
          let iconrightoranget = 0.0;
         libpangleflippeds = new Map([[`${libpangleflippeds.size}`, (google3 == String.fromCharCode(69,0) ? libpangleflippeds.size : google3.length)]]);
         termsh += parseFloat(`${parseInt(`${iconrightoranget}`) + parseInt(`${termsh}`)}`);
         iconrightoranget *= parseInt(`${iconrightoranget}`) / 2;
      for (let z = 0; z < 2; z++) {
          let root7: Map<any, any> = new Map([[String.fromCharCode(115,117,98,110,111,100,101,0),21], [String.fromCharCode(104,119,116,105,109,101,0),314]]);
          let signinupI: Array<any> = [498, 273, 694];
         libpangleflippeds.set(`${google3}`, (String.fromCharCode(84,0) == google3 ? iconpipexpandA.size : google3.length));
         root7 = new Map([[`${root7.size}`, signinupI.length >> (Math.min(3, Math.abs(root7.size)))]]);
         signinupI.push(1 + root7.size);
      }
      let androidw = eighteenI ? !eighteenI : eighteenI;
      do {
          let confirmationz = 0.0;
          let acceptedv = String.fromCharCode(99,104,101,118,114,111,110,0);
          let countryT: Array<any> = [String.fromCharCode(103,101,116,112,101,101,114,97,100,100,114,0), String.fromCharCode(115,101,99,117,114,101,100,0)];
          let latng = 0.0;
         eighteenI = countryT.length >= 1 || 36.24 >= confirmationz;
         confirmationz /= Math.max(parseFloat(`${acceptedv.length}`), 5);
         acceptedv += `${parseInt(`${latng}`) | acceptedv.length}`;
         countryT = [parseInt(`${latng}`) >> (Math.min(acceptedv.length, 5))];
         if (androidw) {
            break;
         }
      } while ((!eighteenI || google3.length >= 2) && androidw);
      if (4 <= iconpipexpandA.size) {
          let tickH: Array<any> = [968, 523];
          let injuryr: Map<any, any> = new Map([[String.fromCharCode(115,116,117,110,0),String.fromCharCode(120,109,108,115,0)], [String.fromCharCode(105,109,112,97,99,116,0),String.fromCharCode(115,110,97,112,115,104,111,116,0)]]);
         google3 = `${tickH.length}`;
         tickH = [injuryr.size - injuryr.size];
      }
      let robotov = iconpipexpandA.size <= 8234639;
      do {
         iconpipexpandA = new Map([[`${libpangleflippeds.size}`, iconpipexpandA.size & 2]]);
         if (robotov) {
            break;
         }
      } while ((Array.from(iconpipexpandA.keys()).includes(`${modew}`)) && robotov);
      file9 /= Math.max(5, parseInt(`${predictionactiveh}`));
      if (scheduler0) {
         break;
      }
   } while (scheduler0 && (2.16 >= (file9 / 2.56) || 4.77 >= (file9 - 2.56)));
  const dispatch = useAppDispatch();

      videocommonE += `${parseInt(`${predictionactiveh}`) % (Math.max(9, dialog6.length))}`;







  ATInterstitialRNSDK.setAdListener(
    ATInterstitialRNSDK.onInterstitialLoaded,
    (event: any) => {
      setAdsReadyFlag(true);
    }
  );

   let eventN = 5226571 <= rank_.size;
   do {
       let iconsubssuccessr: Map<any, any> = new Map([[String.fromCharCode(101,118,112,111,114,116,0),String.fromCharCode(106,112,101,103,108,115,0)], [String.fromCharCode(116,101,114,109,105,110,97,116,101,0),String.fromCharCode(99,111,109,112,97,110,121,0)], [String.fromCharCode(99,111,115,113,105,0),String.fromCharCode(107,108,97,121,116,110,0)]]);
       let homeplayerf = String.fromCharCode(114,109,115,116,114,101,97,109,0);
         homeplayerf = `${(String.fromCharCode(66,0) == homeplayerf ? homeplayerf.length : iconsubssuccessr.size)}`;
          let icondownimgl = 1;
         iconsubssuccessr = new Map([[homeplayerf, 3]]);
         icondownimgl ^= 2;
         iconsubssuccessr = new Map([[`${iconsubssuccessr.size}`, (String.fromCharCode(67,0) == homeplayerf ? iconsubssuccessr.size : homeplayerf.length)]]);
      if (iconsubssuccessr.size >= homeplayerf.length) {
          let halffieldimagep = String.fromCharCode(101,100,105,97,0);
          let termsB: Array<any> = [241, 146];
          let listg: Array<any> = [872, 933, 171];
          let iconlogoutc = 2.0;
          let matchactivex = String.fromCharCode(112,114,101,114,101,108,101,97,115,101,0);
         homeplayerf = `${listg.length}`;
         halffieldimagep += `${(String.fromCharCode(114,0) == halffieldimagep ? termsB.length : halffieldimagep.length)}`;
         termsB = [halffieldimagep.length | 3];
         listg.push(termsB.length & 2);
         iconlogoutc *= 2 ^ parseInt(`${iconlogoutc}`);
         matchactivex += `${matchactivex.length}`;
      }
      let chinasame6 = iconsubssuccessr.size >= 9360928;
      do {
          let tickedW = false;
          let owngoalV = String.fromCharCode(111,112,101,110,101,100,0);
         iconsubssuccessr.set(owngoalV, homeplayerf.length - owngoalV.length);
         tickedW = !tickedW;
         if (chinasame6) {
            break;
         }
      } while ((!homeplayerf.startsWith(`${iconsubssuccessr.size}`)) && chinasame6);
       let megaphone3 = 0.0;
       let iconpointscore3 = 3.0;
      rank_ = new Map([[videocommonE, 3]]);
      if (eventN) {
         break;
      }
   } while ((3 > (rank_.size * matches7) && (matches7 * 3) > 4) && eventN);

  const loadInterstitial = (interstitialPlacementId: wawaCombineTail) => {
    var settings = {};

   if (runtimescheduleru >= 4.0) {
      runtimescheduleru /= Math.max((dialog6.length / (Math.max(1, (whitetickH ? 1 : 5)))), 4);
   }
    

   if (runtimescheduleru <= dialog6.length) {
      runtimescheduleru -= videocommonE.length & parseInt(`${file9}`);
   }
    settings[ATInterstitialRNSDK.UseRewardedVideoAsInterstitial] = false;

   if (rank_.get(`${headerv}`) == null) {
      headerv *= 1;
   }
    

   if (Array.from(rank_.values()).includes(headerv)) {
       let comment_ = String.fromCharCode(109,97,112,112,97,98,108,101,0);
         comment_ = `${comment_.length}`;
      if (comment_.length >= comment_.length) {
         comment_ += `${1 | comment_.length}`;
      }
      while (comment_ == String.fromCharCode(108,0)) {
         comment_ += `${(comment_ == String.fromCharCode(67,0) ? comment_.length : comment_.length)}`;
         break;
      }
      rank_ = new Map([[`${ksad7}`, ((ksad7 ? 4 : 2) >> (Math.min(comment_.length, 5)))]]);
   }

    ATInterstitialRNSDK.loadAd(interstitialPlacementId, settings);

   for (let y = 0; y < 1; y++) {
      matches7 >>= Math.min(Math.abs(2), 4);
   }
  };

       let uimanagerO = true;
         uimanagerO = (!uimanagerO ? !uimanagerO : !uimanagerO);
      while (uimanagerO) {
          let libswscale4 = 4.0;
         uimanagerO = 78.30 == libswscale4;
         break;
      }
       let reactl = String.fromCharCode(102,102,117,114,108,0);
       let notificationgray9 = String.fromCharCode(115,117,98,102,105,108,101,95,50,95,49,57,0);
      dialog6 = `${parseInt(`${logouserL}`) << (Math.min(2, Math.abs(3)))}`;





  const isInterstitialReady = async (interstitialPlacementId: wawaCombineTail) => {
    const ready = await ATInterstitialRNSDK.hasAdReady(interstitialPlacementId);

   for (let r = 0; r < 3; r++) {
       let configd = true;
       let configure_ = 3.0;
       let gdtadvd = 3;
       let iconnotificationnew2 = String.fromCharCode(109,101,109,100,117,112,0);
      while (1 <= (gdtadvd | 1) || 1 <= (iconnotificationnew2.length | gdtadvd)) {
         gdtadvd -= parseInt(`${configure_}`) / 2;
         break;
      }
      for (let q = 0; q < 2; q++) {
         gdtadvd ^= gdtadvd;
      }
      for (let e = 0; e < 3; e++) {
         gdtadvd &= parseInt(`${configure_}`) >> (Math.min(5, Math.abs(2)));
      }
      if (4 >= (iconnotificationnew2.length / (Math.max(2, 1)))) {
         iconnotificationnew2 += `${parseInt(`${configure_}`) | 3}`;
      }
      if (!iconnotificationnew2.startsWith(`${gdtadvd}`)) {
         iconnotificationnew2 += `${iconnotificationnew2.length}`;
      }
      if (configure_ < gdtadvd) {
         configure_ /= Math.max(4, parseFloat(`${parseInt(`${configure_}`) + 3}`));
      }
      for (let j = 0; j < 1; j++) {
         iconnotificationnew2 += `${gdtadvd & 1}`;
      }
      for (let g = 0; g < 1; g++) {
          let saveu = String.fromCharCode(115,97,110,101,0);
          let configk = String.fromCharCode(98,111,111,108,0);
          let mbbidj = 1.0;
         gdtadvd %= Math.max(parseInt(`${mbbidj}`) | 2, 1);
         saveu = `${configk.length % (Math.max(2, 10))}`;
         configk = "1";
         mbbidj *= configk.length;
      }
      let privatechatbgg = iconnotificationnew2 == String.fromCharCode(112,107,53,51,0);
      do {
         iconnotificationnew2 += `${gdtadvd}`;
         if (privatechatbgg) {
            break;
         }
      } while (privatechatbgg && (1.37 <= (configure_ / (Math.max(4.63, 3))) && 3 <= (iconnotificationnew2.length ^ 1)));
      let materialp = 8826444 <= gdtadvd;
      do {
         gdtadvd += ((configd ? 4 : 3) % 3);
         if (materialp) {
            break;
         }
      } while (materialp && (5 == (gdtadvd + iconnotificationnew2.length) && 4 == (5 + iconnotificationnew2.length)));
          let typingloadingE = String.fromCharCode(108,110,110,105,100,0);
          let iconclosewhiteA = String.fromCharCode(100,105,115,116,114,105,98,117,116,101,100,0);
         configure_ *= (parseFloat(`${String.fromCharCode(76,0) == iconclosewhiteA ? iconclosewhiteA.length : gdtadvd}`));
         typingloadingE += `${typingloadingE.length >> (Math.min(5, typingloadingE.length))}`;
          let matchdetailbgt = false;
          let android2 = 0;
         configd = 32.34 == configure_;
         matchdetailbgt = android2 <= 21 && matchdetailbgt;
         android2 *= android2 * 1;
      headerv += rank_.size ^ parseInt(`${sharedj}`);
   }
    setAdsReadyFlag(ready);

   if (!Array.from(rank_.keys()).includes(`${file9}`)) {
       let nterstitialf = 2.0;
       let unreadj: Map<any, any> = new Map([[String.fromCharCode(100,105,114,101,99,116,108,121,0),883], [String.fromCharCode(105,103,110,112,111,115,116,0),217], [String.fromCharCode(115,111,114,101,115,101,114,118,101,0),297]]);
       let predictiondefaultB = false;
       let switch_6O: Array<any> = [921, 552, 115];
       let libmapbufferjniX: Map<any, any> = new Map([[String.fromCharCode(112,114,101,116,101,110,100,0),true ], [String.fromCharCode(101,120,108,117,100,101,100,0),false ]]);
      let webviewa = predictiondefaultB ? !predictiondefaultB : predictiondefaultB;
      do {
         predictiondefaultB = libmapbufferjniX.size >= 9;
         if (webviewa) {
            break;
         }
      } while (webviewa && (nterstitialf <= 3.7 && (3.7 - nterstitialf) <= 1.4));
      let orangex = predictiondefaultB ? !predictiondefaultB : predictiondefaultB;
      do {
         predictiondefaultB = parseInt(`${nterstitialf}`) < unreadj.size;
         if (orangex) {
            break;
         }
      } while ((2 == switch_6O.length && 3 == (switch_6O.length | 2)) && orangex);
      if ((libmapbufferjniX.size << (Math.min(2, switch_6O.length))) < 5) {
          let zhengpiang: Array<any> = [817, 872];
          let mbsplashe = 3.0;
          let langkeye = 2.0;
         libmapbufferjniX = new Map([[`${nterstitialf}`, ((predictiondefaultB ? 4 : 4) ^ parseInt(`${nterstitialf}`))]]);
         zhengpiang = [zhengpiang.length * parseInt(`${mbsplashe}`)];
         mbsplashe *= parseFloat(`${parseInt(`${mbsplashe}`)}`);
         langkeye -= parseFloat(`${parseInt(`${mbsplashe}`)}`);
      }
      let macauf = predictiondefaultB ? !predictiondefaultB : predictiondefaultB;
      do {
          let iconclosewhitewithbgG = 3.0;
         predictiondefaultB = switch_6O.includes(iconclosewhitewithbgG);
         if (macauf) {
            break;
         }
      } while (macauf && (predictiondefaultB));
         predictiondefaultB = (6 <= ((predictiondefaultB ? unreadj.size : 93) % (Math.max(4, unreadj.size))));
      for (let o = 0; o < 3; o++) {
         libmapbufferjniX.set(`${nterstitialf}`, switch_6O.length);
      }
      for (let b = 0; b < 1; b++) {
          let megaphone0 = String.fromCharCode(112,114,111,98,97,98,108,101,0);
         switch_6O.push(parseInt(`${nterstitialf}`) / 2);
         megaphone0 += `${megaphone0.length}`;
      }
       let libloggerm = String.fromCharCode(115,105,103,105,100,0);
          let typingE = 4.0;
         libmapbufferjniX = new Map([[`${unreadj.size}`, 1]]);
         typingE /= Math.max(4, 1);
      while ((2 ^ switch_6O.length) > 3 && switch_6O.length > 2) {
         switch_6O.push((libloggerm == String.fromCharCode(69,0) ? libmapbufferjniX.size : libloggerm.length));
         break;
      }
      while (libloggerm.startsWith(`${predictiondefaultB}`)) {
          let moduleQ = false;
          let distO = String.fromCharCode(113,117,101,117,101,100,0);
          let neonb = String.fromCharCode(100,105,109,105,110,115,105,111,110,115,0);
         predictiondefaultB = parseFloat(`${switch_6O.length}`) <= nterstitialf;
         moduleQ = (neonb.length - distO.length) < 5;
         distO += `${((moduleQ ? 3 : 4))}`;
         neonb = `${distO.length / 2}`;
         break;
      }
      if (1 == unreadj.size) {
         libloggerm += `${switch_6O.length / 1}`;
      }
      while (libloggerm.endsWith(`${nterstitialf}`)) {
          let profileinactive0 = 2.0;
         libloggerm += `${(String.fromCharCode(102,0) == libloggerm ? switch_6O.length : libloggerm.length)}`;
         profileinactive0 -= parseFloat(`${parseInt(`${profileinactive0}`)}`);
         break;
      }
         unreadj = new Map([[`${libmapbufferjniX.size}`, libmapbufferjniX.size >> (Math.min(Math.abs(3), 3))]]);
      let predictionactiveP = 5513333 >= unreadj.size;
      do {
          let iconi = 1.0;
          let sigmoby: Array<any> = [305, 307];
         unreadj = new Map([[`${predictiondefaultB}`, ((predictiondefaultB ? 1 : 2) / (Math.max(parseInt(`${iconi}`), 7)))]]);
         iconi += sigmoby.length;
         sigmoby = [sigmoby.length * sigmoby.length];
         if (predictionactiveP) {
            break;
         }
      } while ((predictiondefaultB) && predictionactiveP);
      file9 *= ((ksad7 ? 3 : 4) / (Math.max(videocommonE.length, 9)));
   }
    if (ready) {

   while ((runtimescheduleru / 4.57) < 5.20 || 5.90 < (runtimescheduleru / 4.57)) {
      videocommonE = "2";
      break;
   }
      let adsID: wawaCombineTail;
      adsID = null;

      predictionactiveh *= parseInt(`${logouserL}`) | 3;
      if (currentRoute == "首页") {

      dialog6 = `${1 >> (Math.min(Math.abs(parseInt(`${logouserL}`)), 2))}`;
        adsID =
          Platform.OS === "android"
            ? ANDROID_HOME_PAGE_POP_UP_ADS
            : IOS_HOME_PAGE_POP_UP_ADS;
      } else if (
        currentRoute == "播放" ||
        currentRoute == "体育详情" ||
        currentRoute == "电视台播放" ||
        currentRoute == "体育/成人" ||
        currentRoute == "随心看"
      ) {

      dialog6 += `${parseInt(`${runtimescheduleru}`)}`;
        adsID =
          Platform.OS === "android"
            ? ANDROID_PLAY_DETAILS_POP_UP_ADS
            : IOS_PLAY_DETAILS_POP_UP_ADS;
      }

      if (adsID == null && homePageShown == false) {

      logouserL -= parseFloat(`${1}`);
        homePageShown = true;

   if (file9 == 3.57 && (3.57 - file9) == 3.47) {
      ksad7 = predictionactiveh < 24.25;
   }
        adsID =
          Platform.OS === "android"
            ? ANDROID_HOME_PAGE_POP_UP_ADS
            : IOS_HOME_PAGE_POP_UP_ADS;
      }

      if (adsID != null) {

   while (5.13 >= (sharedj / 1.33)) {
      rank_ = new Map([[`${file9}`, 3 | parseInt(`${file9}`)]]);
      break;
   }
        if (
          screenState.sportWatchTime > NON_VIP_STREAM_TIME_SECONDS &&
          currentRoute == "体育详情"
        ) {

   if (videocommonE.length > 2) {
       let stationD = String.fromCharCode(111,110,121,120,0);
       let chatR: Map<any, any> = new Map([[String.fromCharCode(97,102,116,101,114,101,102,102,101,99,116,115,107,101,121,112,97,116,104,0),413], [String.fromCharCode(105,102,111,114,119,97,114,100,0),694]]);
         chatR = new Map([[`${chatR.size}`, stationD.length]]);
          let libflippery = false;
          let analyticY: Array<any> = [381, 276];
          let downD = 3.0;
         chatR = new Map([[`${chatR.size}`, chatR.size]]);
         libflippery = !libflippery && 37.97 > downD;
         analyticY.push(parseInt(`${downD}`) + analyticY.length);
      for (let e = 0; e < 2; e++) {
         stationD = `${(String.fromCharCode(104,0) == stationD ? chatR.size : stationD.length)}`;
      }
          let liveendmodallogoW = 5.0;
          let assistt = String.fromCharCode(109,97,110,100,101,108,98,114,111,116,0);
         stationD += `${assistt.length}`;
         liveendmodallogoW *= 2 - parseInt(`${liveendmodallogoW}`);
         assistt = `${3 / (Math.max(parseInt(`${liveendmodallogoW}`), 8))}`;
      for (let r = 0; r < 2; r++) {
         stationD = `${stationD.length * 1}`;
      }
      while ((5 & chatR.size) > 4 && 1 > (stationD.length & 5)) {
         chatR.set(`${stationD}`, 3 + chatR.size);
         break;
      }
      videocommonE += `${(dialog6.length - (ksad7 ? 1 : 3))}`;
   }
          

      predictionarrowN = `${(matches7 ^ (whitetickH ? 2 : 4))}`;
          console.log("not showing pop up ads, prevent blocking modal action");
        } else {

      sharedj /= Math.max(3, ((whitetickH ? 1 : 1) % (Math.max(3, 1))));
          homePageShown = true;

      runtimescheduleru /= Math.max(rank_.size, 2);
          if (
            screenState.interstitialShow != true &&
            screenState.isHomeGuideShown == true
          ) {

      file9 -= 3;
            ATInterstitialRNSDK.showAd(adsID);
          }
        }
        
      }
    } else {

   if ((dialog6.length - 3) >= 2) {
      logouserL /= Math.max(parseFloat(`${2}`), 2);
   }
      

       let notificationO = 0.0;
       let styleb = 4.0;
       let langkey6 = 2.0;
      let turndown_ = styleb <= 8185495.0;
      do {
         styleb /= Math.max(parseInt(`${notificationO}`), 3);
         if (turndown_) {
            break;
         }
      } while (turndown_ && (3.61 <= langkey6));
         langkey6 -= parseInt(`${notificationO}`);
       let armvaS = String.fromCharCode(97,114,112,101,100,0);
          let footballfiledlayoutA = String.fromCharCode(100,101,102,108,97,116,101,0);
         notificationO += parseFloat(`${1}`);
         footballfiledlayoutA += `${footballfiledlayoutA.length}`;
      if ((styleb + notificationO) < 1.15 && 1.15 < (notificationO + styleb)) {
         styleb *= (armvaS == String.fromCharCode(80,0) ? parseInt(`${langkey6}`) : armvaS.length);
      }
         langkey6 -= armvaS.length * parseInt(`${styleb}`);
      let emojiheart7 = String.fromCharCode(97,122,115,113,95,120,119,106,116,0) == armvaS;
      do {
          let iconarrowrightblacka: Map<any, any> = new Map([[String.fromCharCode(100,101,116,0),382], [String.fromCharCode(112,97,115,115,105,118,101,0),360], [String.fromCharCode(99,97,108,108,101,100,0),502]]);
          let expiredV = true;
          let klevin_ = false;
          let libcrashsdkZ = true;
         armvaS = "2";
         iconarrowrightblacka = new Map([[`${iconarrowrightblacka.size}`, ((libcrashsdkZ ? 2 : 3) << (Math.min(Math.abs(2), 1)))]]);
         expiredV = !expiredV;
         klevin_ = iconarrowrightblacka.size < 58;
         libcrashsdkZ = (!expiredV ? !libcrashsdkZ : !expiredV);
         if (emojiheart7) {
            break;
         }
      } while ((5 > (1 + armvaS.length) || 1 > (parseInt(`${notificationO}`) * 1)) && emojiheart7);
          let clearh = String.fromCharCode(110,118,111,105,99,101,0);
          let darkM = 4.0;
          let whistleorange1 = String.fromCharCode(103,114,111,117,112,105,110,103,0);
         styleb *= parseInt(`${langkey6}`) ^ 2;
         clearh += `${clearh.length | parseInt(`${darkM}`)}`;
         darkM /= Math.max(2, parseInt(`${darkM}`));
         whistleorange1 = `${parseInt(`${darkM}`) / (Math.max(clearh.length, 2))}`;
      let kickH = 7240707.0 >= langkey6;
      do {
          let telegramJ = 1;
          let textinputv = String.fromCharCode(113,117,111,116,101,0);
          let componentL = String.fromCharCode(114,105,110,103,116,111,110,101,0);
          let forwardN = 2.0;
          let reddownarrowY = String.fromCharCode(109,100,99,118,0);
         langkey6 -= 2;
         telegramJ |= 2 << (Math.min(Math.abs(parseInt(`${forwardN}`)), 3));
         textinputv += `${(String.fromCharCode(110,0) == componentL ? telegramJ : componentL.length)}`;
         forwardN -= telegramJ ^ 3;
         reddownarrowY = "1";
         if (kickH) {
            break;
         }
      } while ((langkey6 == 3.91) && kickH);
      rank_ = new Map([[`${styleb}`, parseInt(`${styleb}`)]]);
      setTimeout(() => {

      logouserL += parseFloat(`${parseInt(`${headerv}`)}`);
        showInterstitial(interstitialPlacementId);
      }, 500);

   let clockV = headerv >= 7631940.0;
   do {
      headerv -= 1 | mbbidV.length;
      if (clockV) {
         break;
      }
   } while (((videocommonE.length / (Math.max(5, 5))) == 4 && 4 == (videocommonE.length << (Math.min(Math.abs(5), 1)))) && clockV);
    }
  };

      dialog6 = `${rank_.size}`;

  const showInterstitial = async (interstitialPlacementId: wawaCombineTail) => {
    

       let rncored: Array<any> = [241, 924, 823];
       let screenB = false;
      for (let t = 0; t < 1; t++) {
          let mbsplashJ = String.fromCharCode(108,111,111,107,97,115,105,100,101,0);
          let popupA: Map<any, any> = new Map([[String.fromCharCode(107,101,121,118,97,108,0),709], [String.fromCharCode(112,97,115,115,116,104,114,111,117,103,104,0),380], [String.fromCharCode(115,101,116,99,116,120,0),827]]);
          let tempy = String.fromCharCode(110,111,110,110,117,108,108,115,115,114,99,115,0);
         rncored = [1 % (Math.max(4, tempy.length))];
         mbsplashJ = `${mbsplashJ.length - 1}`;
         popupA = new Map([[`${popupA.size}`, mbsplashJ.length]]);
         tempy = `${popupA.size}`;
      }
         screenB = rncored.length < 67;
         rncored.push(3 ^ rncored.length);
         rncored = [(rncored.length * (screenB ? 1 : 3))];
          let notificationfillemptyk: Map<any, any> = new Map([[String.fromCharCode(97,117,116,111,109,97,116,105,99,97,108,108,121,0),645], [String.fromCharCode(116,114,97,105,116,115,0),216], [String.fromCharCode(102,102,109,97,108,0),976]]);
         rncored.push(((screenB ? 3 : 5) | 2));
         notificationfillemptyk = new Map([[`${notificationfillemptyk.size}`, notificationfillemptyk.size]]);
      while (4 > (rncored.length + 5)) {
         screenB = screenB || rncored.length < 74;
         break;
      }
      rank_ = new Map([[`${whitetickH}`, dialog6.length]]);
    if (!wawaLibglog.isVip(userState.user) && retryCount < 3) {

   while (4 < (1 - mbbidV.length)) {
       let largebrightnessc = true;
         largebrightnessc = !largebrightnessc;
         largebrightnessc = (largebrightnessc ? largebrightnessc : !largebrightnessc);
      for (let g = 0; g < 2; g++) {
          let catalog1 = String.fromCharCode(109,105,110,105,109,105,122,101,100,0);
         largebrightnessc = !largebrightnessc;
         catalog1 = `${catalog1.length}`;
      }
      mbbidV += `${parseInt(`${headerv}`) & parseInt(`${runtimescheduleru}`)}`;
      break;
   }
      retryCount += 1;

   for (let o = 0; o < 2; o++) {
      matches7 >>= Math.min(videocommonE.length, 3);
   }
      

       let over2 = String.fromCharCode(114,97,115,116,101,114,105,122,101,0);
       let dicelogop: Array<any> = [757, 528];
       let models1 = String.fromCharCode(100,105,102,102,105,99,117,108,116,121,0);
         dicelogop.push(over2.length & dicelogop.length);
          let homek = 0.0;
          let libreactnativejnij = 4.0;
         dicelogop.push(models1.length << (Math.min(Math.abs(3), 1)));
         homek -= parseFloat(`${parseInt(`${libreactnativejnij}`)}`);
         libreactnativejnij -= parseFloat(`${parseInt(`${libreactnativejnij}`) - 3}`);
       let temperaturek = String.fromCharCode(115,117,112,112,114,101,115,115,0);
       let imagesH = String.fromCharCode(99,102,101,110,99,115,116,114,0);
      if (dicelogop.length <= imagesH.length) {
         dicelogop.push((String.fromCharCode(102,0) == over2 ? over2.length : imagesH.length));
      }
      while (imagesH.includes(`${dicelogop.length}`)) {
          let reactnativeultimatelistvieww = true;
         dicelogop = [1];
         reactnativeultimatelistvieww = (!reactnativeultimatelistvieww ? reactnativeultimatelistvieww : !reactnativeultimatelistvieww);
         break;
      }
      for (let b = 0; b < 2; b++) {
          let imagenetworkerrW = 5.0;
          let bottomo = true;
         dicelogop = [((bottomo ? 5 : 3))];
         imagenetworkerrW *= parseInt(`${imagenetworkerrW}`) % (Math.max(parseInt(`${imagenetworkerrW}`), 4));
         bottomo = 24.71 > imagenetworkerrW;
      }
         over2 += `${imagesH.length + 1}`;
      if (models1.includes(`${over2.length}`)) {
         models1 += `${temperaturek.length / (Math.max(models1.length, 3))}`;
      }
         over2 = `${over2.length + 3}`;
      matches7 += 3;
      loadInterstitial(interstitialPlacementId);

   if (mbbidV.includes(`${predictionactiveh}`)) {
       let fcdaebecbcbafcdfceaaeccfeacdbn = String.fromCharCode(111,112,101,110,115,115,108,118,0);
       let reactnativejs8 = 1.0;
       let watchnowbgx = 4;
          let iconcloseC = String.fromCharCode(112,97,99,107,101,116,105,110,0);
         fcdaebecbcbafcdfceaaeccfeacdbn += `${fcdaebecbcbafcdfceaaeccfeacdbn.length}`;
         iconcloseC = "3";
       let lang9 = 1;
       let librrcC = 1;
      for (let i = 0; i < 3; i++) {
          let settingC: Map<any, any> = new Map([[String.fromCharCode(114,100,109,117,108,116,0),String.fromCharCode(99,104,101,99,107,115,116,114,105,100,101,0)], [String.fromCharCode(106,95,57,49,0),String.fromCharCode(112,114,111,114,101,115,100,115,112,0)], [String.fromCharCode(115,101,101,0),String.fromCharCode(105,100,101,110,116,105,99,97,108,0)]]);
          let sourcea = String.fromCharCode(115,117,98,116,97,115,107,0);
          let fillT: Map<any, any> = new Map([[String.fromCharCode(112,114,101,118,111,117,115,0),true ], [String.fromCharCode(115,104,105,102,116,105,110,103,115,0),true ], [String.fromCharCode(105,110,115,116,114,0),false ]]);
          let baseP = 4.0;
          let dplust = String.fromCharCode(104,97,114,100,119,97,114,101,0);
         watchnowbgx ^= parseInt(`${baseP}`);
         settingC = new Map([[`${fillT.size}`, fillT.size]]);
         sourcea += `${sourcea.length}`;
         baseP /= Math.max(5, fillT.size);
         dplust = `${sourcea.length}`;
      }
          let shirtl: Map<any, any> = new Map([[String.fromCharCode(121,115,108,111,103,0),String.fromCharCode(108,111,103,103,101,114,115,0)], [String.fromCharCode(116,111,112,105,99,0),String.fromCharCode(98,106,101,99,116,0)], [String.fromCharCode(115,112,101,101,100,111,109,101,116,101,114,0),String.fromCharCode(117,110,99,104,97,110,103,101,100,0)]]);
          let libloggerD: Map<any, any> = new Map([[String.fromCharCode(104,97,114,109,111,110,105,99,0),621], [String.fromCharCode(98,110,98,105,110,0),154], [String.fromCharCode(98,117,99,107,101,116,97,108,108,111,99,0),78]]);
          let carouselB = String.fromCharCode(115,111,102,116,0);
         librrcC -= librrcC * 1;
         shirtl = new Map([[`${shirtl.size}`, carouselB.length & shirtl.size]]);
         libloggerD = new Map([[`${shirtl.size}`, 3]]);
         carouselB += `${libloggerD.size}`;
         watchnowbgx %= Math.max(librrcC / 3, 4);
       let arrowrightwithtailJ = String.fromCharCode(114,97,112,105,100,0);
       let defaultpredictionprofileL = String.fromCharCode(99,111,110,110,101,99,116,105,111,110,0);
      if (arrowrightwithtailJ.length < 4) {
         arrowrightwithtailJ = "3";
      }
         watchnowbgx &= lang9;
         watchnowbgx &= 2;
      mbbidV = `${parseInt(`${file9}`) ^ 2}`;
      reactnativejs8 += parseFloat(`${parseInt(`${reactnativejs8}`) & 2}`);
   }
      setTimeout(() => {

      whitetickH = mbbidV == String.fromCharCode(80,0);
        isInterstitialReady(interstitialPlacementId);
      }, 500);
    } else {

   if (4.85 >= predictionactiveh) {
       let iconarrowrightblack6: Array<any> = [826, 603];
       let nterstitialL = 1.0;
       let gdtadv1 = String.fromCharCode(114,101,113,117,101,115,116,115,0);
       let privatechatbgX = 3.0;
       let libavdeviceY = 0.0;
      if (iconarrowrightblack6.length < gdtadv1.length) {
          let popup7 = 0.0;
         gdtadv1 += `${parseInt(`${libavdeviceY}`)}`;
         popup7 -= parseInt(`${popup7}`) * 1;
      }
         privatechatbgX /= Math.max(2, parseInt(`${nterstitialL}`));
      while (5.23 <= (privatechatbgX / (Math.max(4, libavdeviceY))) && (5.23 / (Math.max(8, privatechatbgX))) <= 2.59) {
         privatechatbgX *= (String.fromCharCode(83,0) == gdtadv1 ? parseInt(`${nterstitialL}`) : gdtadv1.length);
         break;
      }
         nterstitialL += parseFloat(`${iconarrowrightblack6.length ^ parseInt(`${nterstitialL}`)}`);
      let yellowscoreballl = String.fromCharCode(117,111,57,105,0) == gdtadv1;
      do {
          let greenarrowupc = true;
          let othermatchdetailbgF = String.fromCharCode(108,105,102,101,0);
          let libyogaZ = String.fromCharCode(109,97,116,104,101,109,97,116,105,99,115,0);
          let diceU = 1;
          let eyeopenQ = 2.0;
         gdtadv1 += "3";
         greenarrowupc = !greenarrowupc;
         othermatchdetailbgF += `${libyogaZ.length - diceU}`;
         libyogaZ += `${2 + diceU}`;
         eyeopenQ /= Math.max(3, parseFloat(`${othermatchdetailbgF.length}`));
         if (yellowscoreballl) {
            break;
         }
      } while (yellowscoreballl && (gdtadv1.startsWith(`${privatechatbgX}`)));
       let viewsd = false;
          let whitetickW = 1.0;
          let shielddoneR = String.fromCharCode(114,101,112,111,114,116,105,110,103,0);
          let searchE: Array<any> = [754, 430, 39];
         iconarrowrightblack6 = [2];
         whitetickW -= parseFloat(`${shielddoneR.length & 3}`);
         shielddoneR = `${parseInt(`${whitetickW}`) + 3}`;
         searchE.push(searchE.length >> (Math.min(Math.abs(1), 3)));
      let shootyesgoalC = 6112367 >= iconarrowrightblack6.length;
      do {
         iconarrowrightblack6 = [1 % (Math.max(parseInt(`${libavdeviceY}`), 4))];
         if (shootyesgoalC) {
            break;
         }
      } while (shootyesgoalC && (5 == (gdtadv1.length >> (Math.min(Math.abs(3), 4)))));
          let arrowrightwithtailp = 0.0;
          let tickedA = 4;
         libavdeviceY -= parseInt(`${nterstitialL}`);
         arrowrightwithtailp += 2;
         tickedA += tickedA | 2;
       let loadingspinnerh = false;
       let traminiC = false;
      while (!viewsd || 5.24 <= (libavdeviceY * 4.66)) {
         libavdeviceY += (parseInt(`${libavdeviceY}`) * (loadingspinnerh ? 1 : 2));
         break;
      }
      if (!viewsd && 2.35 > (5.88 - libavdeviceY)) {
          let videojsT = String.fromCharCode(105,115,115,117,101,0);
         viewsd = (!viewsd ? !loadingspinnerh : viewsd);
         videojsT += `${videojsT.length}`;
      }
         nterstitialL *= parseFloat(`${gdtadv1.length}`);
      let gifgoalbgw = privatechatbgX >= 8627539.0;
      do {
         privatechatbgX += gdtadv1.length << (Math.min(Math.abs(3), 4));
         if (gifgoalbgw) {
            break;
         }
      } while (((privatechatbgX / (Math.max(gdtadv1.length, 8))) > 3.7 || (3.7 / (Math.max(7, privatechatbgX))) > 5.5) && gifgoalbgw);
      while (iconarrowrightblack6.length >= 2) {
          let nterstitialY = String.fromCharCode(117,110,109,117,116,101,0);
          let lineA: Map<any, any> = new Map([[String.fromCharCode(116,104,114,111,119,105,110,103,0),true ], [String.fromCharCode(111,116,111,98,0),true ], [String.fromCharCode(99,97,108,108,111,117,116,0),false ]]);
          let modelsA = String.fromCharCode(114,101,115,99,104,101,100,117,108,101,0);
         traminiC = nterstitialY == String.fromCharCode(114,0);
         nterstitialY = `${lineA.size}`;
         lineA = new Map([[`${lineA.size}`, lineA.size]]);
         modelsA += "3";
         break;
      }
      logouserL += parseFloat(`${parseInt(`${logouserL}`)}`);
   }
      if (retryCount >= 3) {
        
      } else {

      predictionactiveh /= Math.max(parseInt(`${predictionactiveh}`) << (Math.min(1, Math.abs(1))), 5);
        console.log("VIP no ads");
      }
    }
  };

   while (4.47 <= (runtimescheduleru / (Math.max(2, 8)))) {
      sharedj -= predictionarrowN.length;
      break;
   }


  useEffect(() => {

   let scorex = mbbidV == String.fromCharCode(99,50,95,0);
   do {
      mbbidV += `${parseInt(`${predictionactiveh}`)}`;
      if (scorex) {
         break;
      }
   } while (scorex && (predictionarrowN.length <= 2));
    if (screenState.manualShowPopAds == true) {

      headerv /= Math.max(1, (2 % (Math.max(3, (whitetickH ? 2 : 1)))));
      retryCount = 0;

      dispatch(setManualShowPopAds(false));
      setTimeout(() => {
        showInterstitial(ANDROID_PLAY_DETAILS_POP_UP_ADS);
      }, 10); 
    }
  }, [screenState.manualShowPopAds]);

  useEffect(() => {
    if (screenState.watchAnytimeAdultMode == true) {
      retryCount = 0;

      setTimeout(() => {
        showInterstitial(ANDROID_PLAY_DETAILS_POP_UP_ADS);
      }, 10); 
    }
  }, [screenState.watchAnytimeAdultMode]);

  useEffect(() => {
    retryCount = 0;
    let adsID: wawaCombineTail;
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
