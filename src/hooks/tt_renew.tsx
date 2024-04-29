import { useContext, useEffect, useState } from "react";
import { LogBox, Platform } from "react-native";
import {
  ATRNSDK,
  ATInterstitialRNSDK,
  ATBannerRNSDK,
} from "./../../AnyThinkAds/tt_router";

import {
  ANDROID_HOME_PAGE_POP_UP_ADS,
  ANDROID_PLAY_DETAILS_POP_UP_ADS,
  IOS_HOME_PAGE_POP_UP_ADS,
  IOS_PLAY_DETAILS_POP_UP_ADS,
  NON_VIP_STREAM_TIME_SECONDS,
} from "@utility/tt_trophy_cross";
import { useAppSelector, useSelector } from "./tt_spec_download";
import { AdsBannerContext } from "../contexts/tt_injury_reminder";
import { screenModel } from "@type/tt_twitter_data";
import { ttGoal } from "@redux/reducers/tt_selected";
import { ttFast } from "@models/tt_stations_right";
type ttLarge =
  | typeof ANDROID_HOME_PAGE_POP_UP_ADS
  | typeof IOS_HOME_PAGE_POP_UP_ADS
  | typeof ANDROID_PLAY_DETAILS_POP_UP_ADS
  | typeof IOS_PLAY_DETAILS_POP_UP_ADS
  | null;

let homePageShown = false;
let retryCount = 0;
const useInterstitialAds = () => {
       let plusU = 1.0;
    let mode5 = 3.0;
    let signinupW: Map<any, any> = new Map([[String.fromCharCode(103,95,52,52,95,105,100,101,110,116,105,102,121,0),602], [String.fromCharCode(97,97,97,97,95,48,95,54,57,0),824]]);
    let hooks5 = 5;
    let frame_yk = 5;
    let anythinkI: Map<any, any> = new Map([[String.fromCharCode(102,97,114,101,110,100,95,57,95,54,48,0),390], [String.fromCharCode(117,110,115,101,101,110,95,100,95,49,49,0),174]]);
    let rules0 = String.fromCharCode(115,97,109,112,108,101,114,101,100,117,99,116,105,111,110,95,48,95,54,48,0);
    let policyF = String.fromCharCode(99,111,102,102,105,110,95,115,95,49,56,0);
    let baiduN: Map<any, any> = new Map([[String.fromCharCode(114,101,99,111,114,100,115,95,121,95,51,54,0),898], [String.fromCharCode(106,117,115,116,105,102,105,101,100,95,99,95,55,49,0),608], [String.fromCharCode(102,95,52,95,116,100,115,99,0),863]]);
    let promotionv = String.fromCharCode(101,121,101,100,114,111,112,112,101,114,95,117,95,52,53,0);
    let controlZ = true;
    let launcher1: Map<any, any> = new Map([[String.fromCharCode(108,97,117,110,99,104,95,56,95,55,50,0),71], [String.fromCharCode(112,95,49,54,95,114,117,110,115,0),136]]);
    let green1 = 1.0;
    let target_ = String.fromCharCode(122,95,55,53,95,115,112,101,99,116,114,97,108,0);
   for (let v = 0; v < 2; v++) {
      hooks5 -= frame_yk;
   }

  const [adsReadyFlag, setAdsReadyFlag] = useState(false);

      baiduN = new Map([[`${anythinkI.size}`, anythinkI.size * baiduN.size]]);
  const userState = useSelector<ttGoal>('userReducer');

      plusU *= baiduN.size << (Math.min(1, Math.abs(hooks5)));

  const screenState: screenModel = useAppSelector(
    ({ screenReducer }) => screenReducer
  );

       let update_8cx: Map<any, any> = new Map([[String.fromCharCode(106,95,51,48,95,109,117,108,0),String.fromCharCode(113,95,57,56,95,114,101,97,108,108,111,99,97,116,101,0)], [String.fromCharCode(114,95,56,57,95,104,119,100,111,119,110,108,111,97,100,0),String.fromCharCode(122,95,56,54,95,100,98,108,105,110,116,0)]]);
         update_8cx = new Map([[`${update_8cx.size}`, update_8cx.size]]);
      while (update_8cx.size <= 1) {
         update_8cx = new Map([[`${update_8cx.size}`, 3 - update_8cx.size]]);
         break;
      }
      while (!Array.from(update_8cx.values()).includes(update_8cx.size)) {
         update_8cx = new Map([[`${update_8cx.size}`, 1 >> (Math.min(4, Math.abs(update_8cx.size)))]]);
         break;
      }
      signinupW = new Map([[`${anythinkI.size}`, parseInt(`${mode5}`)]]);
  const { currentRoute } = useContext(AdsBannerContext);

       let mbsplasha = String.fromCharCode(97,108,116,105,118,101,99,95,109,95,57,51,0);
       let descC = 3.0;
       let internetY: Map<any, any> = new Map([[String.fromCharCode(116,101,108,101,112,104,111,116,111,95,48,95,57,52,0),789], [String.fromCharCode(99,111,109,112,105,108,101,111,112,116,105,111,110,95,97,95,48,0),703]]);
          let sportss = false;
          let file4 = String.fromCharCode(115,101,116,99,116,120,95,102,95,57,49,0);
         internetY.set(`${descC}`, 1 | parseInt(`${descC}`));
         sportss = !sportss;
         file4 = `${(3 * (sportss ? 2 : 3))}`;
         mbsplasha += `${2 - internetY.size}`;
      if (1.58 <= (descC * parseFloat(`${internetY.size}`)) || (4 >> (Math.min(1, Math.abs(internetY.size)))) <= 1) {
         descC += parseFloat(`${mbsplasha.length | 1}`);
      }
         mbsplasha += `${internetY.size / (Math.max(1, 2))}`;
         internetY = new Map([[`${internetY.size}`, mbsplasha.length]]);
         internetY.set(`${descC}`, parseInt(`${descC}`));
         internetY = new Map([[`${internetY.size}`, internetY.size * 1]]);
          let tumbnaila: Map<any, any> = new Map([[String.fromCharCode(104,95,56,54,95,102,116,118,102,111,108,100,101,114,111,112,101,110,0),false ], [String.fromCharCode(116,122,102,105,108,101,95,52,95,56,50,0),false ], [String.fromCharCode(104,95,55,50,95,102,114,101,113,117,101,110,99,121,0),true ]]);
          let c_imageD = 4;
          let arrowZ = 5.0;
         internetY = new Map([[`${internetY.size}`, 1 >> (Math.min(1, Math.abs(internetY.size)))]]);
         tumbnaila.set(`${arrowZ}`, 2);
         c_imageD >>= Math.min(1, Math.abs(c_imageD));
         arrowZ *= parseFloat(`${3}`);
       let filld = 2.0;
       let sansi = 0.0;
      mode5 += 2 >> (Math.min(1, Math.abs(internetY.size)));
  const [visitCount, setVisitCount] = useState<Record<string, number>>({});

   if (anythinkI.get(`${baiduN.size}`) != null) {
       let mathp = String.fromCharCode(113,95,55,55,95,100,116,115,104,100,0);
          let calendarK = String.fromCharCode(100,95,52,95,99,108,111,115,101,0);
          let combinen: Array<any> = [560, 92, 559];
          let znewinterstitiale = String.fromCharCode(119,95,55,57,95,115,117,98,98,108,111,99,107,115,0);
         mathp += `${mathp.length}`;
         calendarK = `${combinen.length}`;
         combinen.push((calendarK == String.fromCharCode(97,0) ? calendarK.length : combinen.length));
         znewinterstitiale = `${3 + combinen.length}`;
       let controls8 = 1.0;
       let rules_ = 1.0;
          let reactS = String.fromCharCode(100,95,56,51,95,100,118,100,97,116,97,0);
         mathp += `${mathp.length}`;
         reactS = `${reactS.length}`;
      anythinkI = new Map([[`${hooks5}`, policyF.length]]);
   }

  ATInterstitialRNSDK.setAdListener(
    ATInterstitialRNSDK.onInterstitialLoaded,
    (event: any) => {
      setAdsReadyFlag(true);
    }
  );

       let description_lpa = 4;
         description_lpa <<= Math.min(3, Math.abs(2 << (Math.min(5, Math.abs(description_lpa)))));
         description_lpa %= Math.max(5, description_lpa | description_lpa);
      let playlistH = description_lpa >= 5342055;
      do {
          let foundM = String.fromCharCode(111,112,117,115,95,98,95,56,50,0);
         description_lpa ^= 2 << (Math.min(2, Math.abs(description_lpa)));
         foundM += `${foundM.length}`;
         if (playlistH) {
            break;
         }
      } while ((description_lpa >= description_lpa) && playlistH);
      anythinkI.set(`${description_lpa}`, frame_yk >> (Math.min(Math.abs(1), 1)));

  const loadInterstitial = (interstitialPlacementId: ttLarge) => {
    var settings = {};

   for (let n = 0; n < 1; n++) {
      frame_yk %= Math.max(parseInt(`${mode5}`), 5);
   }
    

   for (let o = 0; o < 2; o++) {
       let expandE = String.fromCharCode(118,112,120,115,116,97,116,115,95,113,95,53,51,0);
         expandE = `${(String.fromCharCode(82,0) == expandE ? expandE.length : expandE.length)}`;
          let editR: Array<any> = [159, 450];
          let routeri = String.fromCharCode(116,104,114,101,97,100,112,111,111,108,95,122,95,51,0);
          let singleg = String.fromCharCode(120,95,51,56,95,99,104,101,98,121,115,104,101,118,0);
         expandE += `${expandE.length}`;
         editR = [singleg.length];
         routeri += "3";
         singleg += `${1 * singleg.length}`;
         expandE = `${expandE.length * expandE.length}`;
      mode5 *= 3 - parseInt(`${plusU}`);
   }
    settings[ATInterstitialRNSDK.UseRewardedVideoAsInterstitial] = false;

   for (let e = 0; e < 1; e++) {
      frame_yk *= signinupW.size;
   }
    

   let sinam = mode5 >= 8322493.0;
   do {
       let short_iz = true;
       let string6 = true;
       let submitq = 3.0;
       let pcopy_zX = 1.0;
         pcopy_zX /= Math.max(1, parseFloat(`${1 | parseInt(`${pcopy_zX}`)}`));
         submitq += parseInt(`${submitq}`) / 2;
      for (let g = 0; g < 3; g++) {
          let roundY: Array<any> = [532, 336];
         short_iz = (!string6 ? short_iz : !string6);
         roundY.push(1 & roundY.length);
      }
      if (string6) {
         string6 = submitq == 20.17;
      }
         submitq /= Math.max(3, ((short_iz ? 3 : 1) / (Math.max(2, parseInt(`${submitq}`)))));
      while (string6 || 2.48 <= (pcopy_zX / 4.21)) {
         string6 = short_iz;
         break;
      }
       let handlerU = String.fromCharCode(99,111,118,101,114,101,100,95,106,95,54,51,0);
       let hongkongM = String.fromCharCode(112,95,55,54,95,97,118,99,116,120,0);
      for (let a = 0; a < 1; a++) {
         hongkongM += `${(parseInt(`${submitq}`) | (string6 ? 2 : 2))}`;
      }
         handlerU += `${(hongkongM == String.fromCharCode(107,0) ? hongkongM.length : (short_iz ? 3 : 3))}`;
         string6 = handlerU.length >= 5 || !string6;
      for (let w = 0; w < 3; w++) {
         handlerU = `${parseInt(`${pcopy_zX}`)}`;
      }
      let type_jpQ = string6 ? !string6 : string6;
      do {
          let canvas1 = 4;
          let pointy = String.fromCharCode(110,101,116,119,111,114,107,95,100,95,53,53,0);
          let circlex = String.fromCharCode(114,95,50,52,95,108,97,114,103,101,115,116,0);
          let gemfileD = true;
          let nterstitialn = true;
         string6 = String.fromCharCode(119,0) == circlex;
         canvas1 &= ((gemfileD ? 2 : 2));
         pointy = `${(3 - (nterstitialn ? 1 : 1))}`;
         circlex += `${canvas1}`;
         gemfileD = (40 == (pointy.length - (nterstitialn ? pointy.length : 40)));
         if (type_jpQ) {
            break;
         }
      } while (type_jpQ && (string6 && hongkongM.length > 2));
      mode5 *= frame_yk * policyF.length;
      if (sinam) {
         break;
      }
   } while ((2.8 > mode5) && sinam);

    ATInterstitialRNSDK.loadAd(interstitialPlacementId, settings);

       let selectionL = 2;
       let mbridgeR = String.fromCharCode(120,95,51,57,95,99,111,111,107,0);
       let hookl = true;
      while (!hookl) {
         hookl = String.fromCharCode(121,0) == mbridgeR;
         break;
      }
      let bingG = selectionL <= 7883822;
      do {
          let n_playern = 1;
          let shirtb = 2.0;
          let actionu: Array<any> = [46, 786];
          let mbjscommonY: Map<any, any> = new Map([[String.fromCharCode(103,101,115,116,117,114,101,115,95,116,95,54,50,0),914], [String.fromCharCode(112,95,55,49,95,108,97,116,101,110,99,121,0),754]]);
         selectionL |= 2;
         n_playern |= actionu.length;
         shirtb *= parseFloat(`${n_playern % (Math.max(parseInt(`${shirtb}`), 10))}`);
         actionu = [mbjscommonY.size >> (Math.min(Math.abs(1), 4))];
         mbjscommonY.set(`${shirtb}`, mbjscommonY.size + parseInt(`${shirtb}`));
         if (bingG) {
            break;
         }
      } while ((mbridgeR.startsWith(`${selectionL}`)) && bingG);
         hookl = String.fromCharCode(90,0) == mbridgeR;
      while (selectionL < mbridgeR.length) {
         selectionL /= Math.max(1, mbridgeR.length);
         break;
      }
      let topicT = 6006167 <= selectionL;
      do {
         selectionL ^= (1 | (hookl ? 3 : 2));
         if (topicT) {
            break;
         }
      } while (topicT && ((selectionL * 5) == 3 || 5 == (selectionL * mbridgeR.length)));
      if (mbridgeR.length <= 5) {
         hookl = mbridgeR.endsWith(`${hookl}`);
      }
         selectionL *= selectionL % 2;
      let episoder = hookl ? !hookl : hookl;
      do {
          let rankW = String.fromCharCode(105,95,55,57,95,114,97,110,107,105,110,103,115,0);
          let annerN = String.fromCharCode(114,95,49,55,95,115,99,114,101,101,110,115,0);
          let sell8 = false;
         hookl = annerN.length >= 41;
         rankW = `${(rankW == String.fromCharCode(85,0) ? (sell8 ? 3 : 4) : rankW.length)}`;
         annerN += `${(String.fromCharCode(49,0) == rankW ? rankW.length : (sell8 ? 3 : 4))}`;
         if (episoder) {
            break;
         }
      } while ((1 < selectionL || 2 < (selectionL << (Math.min(Math.abs(1), 4)))) && episoder);
      let orangeN = hookl ? !hookl : hookl;
      do {
         hookl = !hookl;
         if (orangeN) {
            break;
         }
      } while (orangeN && (selectionL >= 4));
      baiduN.set(`${frame_yk}`, 2 >> (Math.min(1, Math.abs(signinupW.size))));
  };

      baiduN.set(`${policyF}`, policyF.length - baiduN.size);

  const isInterstitialReady = async (interstitialPlacementId: ttLarge) => {
    const ready = await ATInterstitialRNSDK.hasAdReady(interstitialPlacementId);

      hooks5 %= Math.max(1, 3);
    setAdsReadyFlag(ready);

   for (let m = 0; m < 2; m++) {
       let photok: Array<any> = [396, 168];
       let subsZ = 2.0;
       let zhengpianM = 3;
       let macauf = String.fromCharCode(109,112,101,103,118,105,100,101,111,100,101,99,95,57,95,54,48,0);
      let product8 = subsZ >= 8350230.0;
      do {
          let sharedF = String.fromCharCode(108,95,49,57,95,98,111,108,100,0);
          let subsH: Map<any, any> = new Map([[String.fromCharCode(115,117,98,116,121,112,101,115,95,99,95,57,50,0),572], [String.fromCharCode(114,101,103,105,115,116,114,97,114,95,100,95,56,56,0),839], [String.fromCharCode(114,101,99,111,103,110,105,116,105,111,110,95,49,95,54,57,0),828]]);
          let internet7 = 1;
         subsZ *= 2 & photok.length;
         sharedF = `${sharedF.length * subsH.size}`;
         subsH = new Map([[sharedF, sharedF.length + 3]]);
         internet7 *= (String.fromCharCode(80,0) == sharedF ? sharedF.length : subsH.size);
         if (product8) {
            break;
         }
      } while (product8 && ((zhengpianM / 5) >= 2));
      if (1 == (zhengpianM >> (Math.min(macauf.length, 5))) && (macauf.length >> (Math.min(Math.abs(1), 1))) == 1) {
         macauf = "3";
      }
         subsZ += 3 + photok.length;
      while ((5 << (Math.min(1, macauf.length))) == 3 && (2.36 * subsZ) == 2.61) {
         subsZ -= photok.length;
         break;
      }
          let downloadingj = String.fromCharCode(121,95,53,48,95,106,100,99,111,101,102,99,116,0);
          let dropdownK = String.fromCharCode(108,95,57,95,115,108,111,119,109,111,100,101,0);
          let edit6 = String.fromCharCode(116,95,54,54,95,116,114,97,106,101,99,116,111,114,121,0);
         zhengpianM -= 3 & photok.length;
         downloadingj += `${edit6.length | downloadingj.length}`;
         dropdownK += "2";
         edit6 += `${edit6.length}`;
          let settingM = 0;
          let scheduleT = String.fromCharCode(103,101,116,115,103,110,99,116,120,110,111,95,112,95,57,48,0);
         subsZ -= (macauf == String.fromCharCode(67,0) ? settingM : macauf.length);
         settingM >>= Math.min(Math.abs((String.fromCharCode(117,0) == scheduleT ? scheduleT.length : scheduleT.length)), 1);
         photok = [photok.length ^ 3];
         zhengpianM *= (macauf == String.fromCharCode(83,0) ? zhengpianM : macauf.length);
         subsZ *= zhengpianM << (Math.min(macauf.length, 3));
      for (let g = 0; g < 3; g++) {
          let favoriteA = false;
          let r_unlockS = false;
          let modal_: Map<any, any> = new Map([[String.fromCharCode(112,95,57,50,95,101,110,100,105,110,103,0),true ], [String.fromCharCode(105,95,51,53,95,99,105,114,99,117,108,97,116,105,110,103,0),false ]]);
          let mbridgeV = 2.0;
         photok.push(parseInt(`${mbridgeV}`));
         favoriteA = modal_.size > 24 || !favoriteA;
         r_unlockS = !favoriteA;
         modal_.set(`${r_unlockS}`, 3);
      }
      for (let c = 0; c < 1; c++) {
          let shoot5 = String.fromCharCode(102,95,57,50,95,115,109,112,116,101,104,100,98,97,114,115,0);
          let playlistg = String.fromCharCode(115,104,97,114,101,95,112,95,51,56,0);
          let selectedZ = String.fromCharCode(101,95,49,56,95,112,111,105,115,111,110,0);
          let pagey: Array<any> = [899, 746, 1000];
         subsZ *= shoot5.length;
         shoot5 = `${pagey.length ^ selectedZ.length}`;
         playlistg = `${1 + playlistg.length}`;
         selectedZ = `${selectedZ.length}`;
         pagey.push(1 - pagey.length);
      }
         photok.push(zhengpianM % (Math.max(9, macauf.length)));
      anythinkI.set(`${frame_yk}`, macauf.length);
   }
    if (ready) {

      mode5 -= parseInt(`${mode5}`);
      let adsID: ttLarge;
      adsID = null;

       let strI = String.fromCharCode(98,102,115,116,109,95,55,95,50,53,0);
         strI = `${(strI == String.fromCharCode(68,0) ? strI.length : strI.length)}`;
      for (let t = 0; t < 3; t++) {
         strI += "2";
      }
         strI += `${1 | strI.length}`;
      baiduN.set(`${hooks5}`, 1);
      if (currentRoute == "首页") {

      frame_yk <<= Math.min(Math.abs(anythinkI.size - promotionv.length), 2);
        adsID =
          Platform.OS === "android"
            ? ANDROID_HOME_PAGE_POP_UP_ADS
            : IOS_HOME_PAGE_POP_UP_ADS;
      } else if (
        currentRoute == "播放" ||
        currentRoute == "体育详情" ||
        currentRoute == "电视台播放"
      ) {

   for (let x = 0; x < 2; x++) {
       let sina0 = String.fromCharCode(115,117,98,116,121,112,101,115,95,113,95,49,54,0);
       let bufferf = true;
      if (4 < sina0.length) {
         bufferf = !bufferf && sina0.length == 90;
      }
      let fullI = sina0 == String.fromCharCode(122,107,118,0);
      do {
         sina0 += "1";
         if (fullI) {
            break;
         }
      } while (fullI && (sina0.length == 2));
      let nextp = String.fromCharCode(116,120,55,53,52,114,0) == sina0;
      do {
         sina0 += `${sina0.length}`;
         if (nextp) {
            break;
         }
      } while (nextp && (3 < sina0.length));
         sina0 = `${((bufferf ? 1 : 3) + 2)}`;
          let roomx = true;
          let profileN = String.fromCharCode(114,117,98,121,95,57,95,51,52,0);
         sina0 = `${(sina0 == String.fromCharCode(49,0) ? sina0.length : (bufferf ? 1 : 5))}`;
         roomx = !roomx;
         profileN = `${profileN.length}`;
         bufferf = (76 >= (sina0.length * (bufferf ? 76 : sina0.length)));
      promotionv += "2";
   }
        adsID =
          Platform.OS === "android"
            ? ANDROID_PLAY_DETAILS_POP_UP_ADS
            : IOS_PLAY_DETAILS_POP_UP_ADS;
      }

      if (adsID == null && homePageShown == false) {

   while (signinupW.get(`${mode5}`) != null) {
      signinupW = new Map([[`${plusU}`, 3 - parseInt(`${mode5}`)]]);
      break;
   }
        homePageShown = true;

   if (controlZ) {
       let starP: Array<any> = [158, 304];
          let score3 = String.fromCharCode(100,115,104,111,119,95,115,95,51,50,0);
          let updatesi = 0.0;
         starP.push(starP.length);
         score3 = `${1 - score3.length}`;
         updatesi *= (parseFloat(`${score3 == String.fromCharCode(108,0) ? parseInt(`${updatesi}`) : score3.length}`));
      let largeh = starP.length >= 9440067;
      do {
          let member2 = false;
          let overZ = 0;
          let gesturev = 2;
          let questB: Map<any, any> = new Map([[String.fromCharCode(109,115,101,120,95,98,95,50,56,0),String.fromCharCode(117,95,51,48,95,100,105,115,112,97,116,99,104,105,110,103,0)], [String.fromCharCode(103,95,50,51,95,102,108,118,101,110,99,0),String.fromCharCode(114,95,49,51,95,99,97,99,97,0)]]);
         starP = [((member2 ? 5 : 3) & gesturev)];
         member2 = (questB.size + overZ) >= 61;
         overZ |= overZ;
         gesturev /= Math.max(2, questB.size - overZ);
         if (largeh) {
            break;
         }
      } while ((5 >= (starP.length | starP.length) && (starP.length | starP.length) >= 5) && largeh);
       let episodesn: Array<any> = [String.fromCharCode(103,95,53,54,95,109,97,100,100,0), String.fromCharCode(115,117,98,100,105,118,105,115,105,111,110,95,114,95,56,56,0)];
       let verticald: Array<any> = [353, 644, 12];
      hooks5 >>= Math.min(1, Math.abs(signinupW.size * rules0.length));
   }
        adsID =
          Platform.OS === "android"
            ? ANDROID_HOME_PAGE_POP_UP_ADS
            : IOS_HOME_PAGE_POP_UP_ADS;
      }

      if (adsID != null) {

       let updatesif: Array<any> = [String.fromCharCode(113,95,54,49,95,102,105,110,100,0), String.fromCharCode(108,95,53,57,95,112,108,97,105,110,0), String.fromCharCode(101,103,119,105,116,95,108,95,57,0)];
       let zhuboP = 0;
       let singled = 2;
       let sportC: Array<any> = [String.fromCharCode(120,95,57,55,95,115,117,98,112,97,114,116,105,116,105,111,110,0), String.fromCharCode(112,111,112,95,104,95,49,0), String.fromCharCode(115,95,51,52,95,114,101,115,105,108,105,101,110,99,101,0)];
       let calendarR = 5.0;
      for (let g = 0; g < 2; g++) {
         zhuboP /= Math.max(sportC.length, 2);
      }
       let danger8 = 2.0;
         sportC = [1 ^ parseInt(`${calendarR}`)];
      policyF = `${(policyF == String.fromCharCode(89,0) ? policyF.length : baiduN.size)}`;
      updatesif.push(updatesif.length | 1);
        if (
          screenState.sportWatchTime > NON_VIP_STREAM_TIME_SECONDS &&
          currentRoute == "体育详情"
        ) {

       let homeU = 5;
       let styled = String.fromCharCode(112,97,114,101,110,116,104,101,115,101,115,95,111,95,49,49,0);
       let countdown_ = String.fromCharCode(102,105,97,116,95,106,95,49,54,0);
         styled = `${3 >> (Math.min(5, Math.abs(homeU)))}`;
          let teamp: Array<any> = [840, 786];
          let result9 = 0;
         homeU <<= Math.min(5, Math.abs(teamp.length & result9));
      frame_yk /= Math.max(parseInt(`${mode5}`) ^ baiduN.size, 2);
          

   let styleW = 6617002 >= signinupW.size;
   do {
       let resendr = 3.0;
         resendr *= 1;
         resendr += parseInt(`${resendr}`) + parseInt(`${resendr}`);
          let submitx = String.fromCharCode(117,95,54,50,95,109,105,109,101,0);
         resendr /= Math.max((String.fromCharCode(100,0) == submitx ? submitx.length : parseInt(`${resendr}`)), 4);
      signinupW = new Map([[`${signinupW.size}`, 1]]);
      if (styleW) {
         break;
      }
   } while (styleW && (5 <= (3 | signinupW.size) || signinupW.size <= 3));
          console.log("not showing pop up ads, prevent blocking modal action");
        } else {

   if (controlZ && (signinupW.size & 2) > 4) {
      controlZ = !controlZ;
   }
          homePageShown = true;

      policyF += `${signinupW.size}`;
          if (screenState.interstitialShow != true) {

   for (let x = 0; x < 2; x++) {
       let friends3 = 5.0;
         friends3 /= Math.max(1, 2 ^ parseInt(`${friends3}`));
          let bellQ: Array<any> = [317, 573, 662];
          let formQ = false;
         friends3 += 2;
         bellQ.push(1 >> (Math.min(1, bellQ.length)));
         formQ = (bellQ.length / (Math.max(bellQ.length, 4))) <= 4;
      for (let p = 0; p < 1; p++) {
         friends3 += parseInt(`${friends3}`);
      }
      signinupW.set(`${friends3}`, 2 << (Math.min(Math.abs(parseInt(`${friends3}`)), 3)));
   }
           ATInterstitialRNSDK.showAd(adsID);
          }
        }
        
      }
    } else {

       let assistf = String.fromCharCode(98,97,99,107,117,112,95,109,95,52,48,0);
      for (let w = 0; w < 1; w++) {
         assistf = "3";
      }
         assistf = `${assistf.length & 2}`;
      let stylesY = String.fromCharCode(109,48,52,110,55,99,102,99,0) == assistf;
      do {
          let canvasu = String.fromCharCode(117,95,55,51,95,100,101,115,99,114,105,112,116,111,114,0);
          let screen5 = String.fromCharCode(115,101,99,117,114,101,95,104,95,51,50,0);
          let appsD = String.fromCharCode(99,97,108,99,119,95,112,95,49,48,0);
          let theme7 = String.fromCharCode(119,95,49,95,99,111,112,121,0);
          let guides = 2.0;
         assistf = `${appsD.length}`;
         canvasu += `${(String.fromCharCode(105,0) == screen5 ? theme7.length : screen5.length)}`;
         appsD += `${(screen5 == String.fromCharCode(111,0) ? screen5.length : canvasu.length)}`;
         theme7 += "1";
         guides += theme7.length;
         if (stylesY) {
            break;
         }
      } while (stylesY && (2 > assistf.length));
      hooks5 |= 1;
      

      hooks5 |= promotionv.length;
      setTimeout(() => {

   for (let i = 0; i < 2; i++) {
       let hooksN = 1.0;
       let guideG: Map<any, any> = new Map([[String.fromCharCode(98,117,116,116,101,114,102,108,105,101,115,95,115,95,57,48,0),927], [String.fromCharCode(102,95,53,54,95,99,111,108,117,109,110,115,0),273], [String.fromCharCode(102,97,97,110,105,100,99,116,95,49,95,51,48,0),862]]);
       let animation8 = String.fromCharCode(112,97,99,107,101,116,95,57,95,52,56,0);
       let rewardvideo_ = 5.0;
         rewardvideo_ += parseFloat(`${1}`);
      for (let l = 0; l < 2; l++) {
         guideG.set(`${hooksN}`, 1);
      }
          let vignetteL = String.fromCharCode(110,95,53,49,95,100,101,108,101,116,105,110,103,0);
          let kuaishou0 = false;
         rewardvideo_ += parseFloat(`${3 | parseInt(`${hooksN}`)}`);
         vignetteL += `${((kuaishou0 ? 2 : 5) * vignetteL.length)}`;
         kuaishou0 = !vignetteL.startsWith(`${kuaishou0}`);
          let transferL = String.fromCharCode(115,99,104,101,109,97,95,108,95,50,53,0);
          let videocommons = 3.0;
         hooksN += parseFloat(`${1 + animation8.length}`);
         transferL = `${transferL.length ^ parseInt(`${videocommons}`)}`;
         videocommons *= parseFloat(`${3 - parseInt(`${videocommons}`)}`);
         animation8 += `${guideG.size}`;
          let dropdowne = String.fromCharCode(122,95,54,95,116,112,105,100,0);
          let malaysiao = String.fromCharCode(119,105,110,100,111,119,95,113,95,52,55,0);
          let moonK = false;
         animation8 += `${animation8.length}`;
         dropdowne = `${malaysiao.length}`;
         malaysiao = `${((moonK ? 5 : 1))}`;
         moonK = (16 == (dropdowne.length ^ (!moonK ? 16 : dropdowne.length)));
      let flipperQ = 9300806.0 >= rewardvideo_;
      do {
         rewardvideo_ -= parseFloat(`${3}`);
         if (flipperQ) {
            break;
         }
      } while (flipperQ && (guideG.get(`${rewardvideo_}`) != null));
          let stepi: Map<any, any> = new Map([[String.fromCharCode(99,95,50,52,95,110,111,110,108,105,110,101,97,114,0),String.fromCharCode(120,121,122,116,97,98,108,101,115,95,106,95,57,49,0)], [String.fromCharCode(112,95,49,95,114,111,102,105,108,101,0),String.fromCharCode(113,95,53,53,95,105,109,112,108,101,109,101,110,116,115,0)], [String.fromCharCode(118,101,114,105,102,121,95,49,95,49,50,0),String.fromCharCode(104,95,54,55,95,109,117,116,97,116,105,111,110,0)]]);
          let inactive4 = String.fromCharCode(105,95,53,54,95,117,110,100,101,114,102,108,111,119,0);
          let user5 = 4.0;
         hooksN += parseFloat(`${1 >> (Math.min(5, Math.abs(parseInt(`${hooksN}`))))}`);
         stepi = new Map([[`${stepi.size}`, inactive4.length & stepi.size]]);
         inactive4 = `${2 | inactive4.length}`;
         user5 += parseFloat(`${stepi.size}`);
         guideG.set(`${hooksN}`, parseInt(`${hooksN}`) % (Math.max(guideG.size, 1)));
         animation8 += `${animation8.length | guideG.size}`;
      while ((2 / (Math.max(9, guideG.size))) <= 5 && (hooksN * 4.90) <= 2.48) {
         hooksN *= parseFloat(`${animation8.length + 2}`);
         break;
      }
      for (let b = 0; b < 2; b++) {
         animation8 = "3";
      }
      plusU -= signinupW.size % 2;
   }
        showInterstitial(interstitialPlacementId);
      }, 500);

   while (controlZ) {
      anythinkI = new Map([[`${baiduN.size}`, baiduN.size]]);
      break;
   }
    }
  };

      signinupW.set(`${anythinkI.size}`, 2 << (Math.min(4, Math.abs(launcher1.size))));

  const showInterstitial = async (interstitialPlacementId: ttLarge) => {
    

      rules0 = "1";
    if (
      (!ttFast.isVip(userState.user)) &&
      retryCount < 3
    ) {

      hooks5 ^= promotionv.length ^ 3;
      retryCount += 1;

      target_ += `${(String.fromCharCode(122,0) == promotionv ? promotionv.length : parseInt(`${mode5}`))}`;
      

       let bodanS = String.fromCharCode(102,97,105,108,95,102,95,56,56,0);
      while (bodanS.length > bodanS.length) {
         bodanS = `${bodanS.length}`;
         break;
      }
      for (let n = 0; n < 2; n++) {
          let interstitial2 = 3.0;
          let langH: Map<any, any> = new Map([[String.fromCharCode(104,95,57,53,95,115,112,97,114,115,101,0),626], [String.fromCharCode(99,111,110,118,95,52,95,52,53,0),240]]);
          let statisticsP = String.fromCharCode(109,97,116,114,111,115,107,97,95,51,95,56,57,0);
          let package_ftQ: Array<any> = [String.fromCharCode(115,111,114,116,95,122,95,50,49,0), String.fromCharCode(100,95,50,50,95,112,97,99,107,115,0), String.fromCharCode(107,102,114,109,95,56,95,50,57,0)];
          let aboutN = 4.0;
         bodanS += `${parseInt(`${aboutN}`) / (Math.max(langH.size, 4))}`;
         interstitial2 += (parseFloat(`${String.fromCharCode(84,0) == statisticsP ? statisticsP.length : package_ftQ.length}`));
         langH = new Map([[`${package_ftQ.length}`, statisticsP.length * 2]]);
         aboutN /= Math.max(parseInt(`${interstitial2}`) + 2, 3);
      }
         bodanS = `${(String.fromCharCode(55,0) == bodanS ? bodanS.length : bodanS.length)}`;
      anythinkI = new Map([[`${anythinkI.size}`, anythinkI.size]]);
      loadInterstitial(interstitialPlacementId);

   let dragH = 8533887 >= target_.length;
   do {
      target_ = `${launcher1.size}`;
      if (dragH) {
         break;
      }
   } while ((policyF == target_) && dragH);
      setTimeout(() => {

   for (let e = 0; e < 3; e++) {
      frame_yk -= (promotionv == String.fromCharCode(90,0) ? parseInt(`${mode5}`) : promotionv.length);
   }
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
    let adsID: ttLarge;
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
