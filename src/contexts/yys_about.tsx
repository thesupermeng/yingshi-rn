import React, { ReactNode, createContext, useEffect, useState } from "react";
import {
  ATRNSDK,
  ATRewardedVideoRNSDK,
  ATInterstitialRNSDK,
  ATBannerRNSDK,
} from "../../AnyThinkAds/yys_recommendation";
import DeviceInfo from "react-native-device-info";
import {
  Dimensions,
  LogBox,
  Platform,
  StatusBar,
  useWindowDimensions,
} from "react-native";
import {
  ANDROID_HOME_PAGE_BANNER_ADS,
  ANDROID_PLAY_DETAILS_BANNER_ADS,
  ANDROID_TOPIC_DETAILS_BANNER_ADS,
  ANDROID_TOPIC_TAB_BANNER_ADS,
  IOS_HOME_PAGE_BANNER_ADS,
  IOS_PLAY_DETAILS_BANNER_ADS,
  IOS_TOPIC_DETAILS_BANNER_ADS,
  IOS_TOPIC_TAB_BANNER_ADS,
  TOPON_BANNER_HEIGHT,
} from "@utility/yys_ajax_switch";
import { getNavigationBarHeight } from "react-native-android-navbar-height";
import { yys_MintegralLibavdevice } from "@redux/yys_sport_shrink";
import { useAppSelector, useSelector } from "@hooks/yys_frame";
import { yys_Videocommon } from "@redux/reducers/yys_libavdevice";
import { screenModel } from "@type/yys_service_setting";
import { yys_HejiCricket } from "@redux/reducers/yys_privacy_round";
import { yys_RelatedTooltips } from "@models/yys_project_pagination";
interface yys_ConfigureUimanager {
  children: ReactNode;
}

export const AdsBannerContext = createContext<{
  setRoute: any;
  setNavbarHeight: any;
  reloadBanner: any;
  currentRoute: string | null;
}>({
  setRoute: () => { },
  setNavbarHeight: () => { },
  reloadBanner: () => { },
  currentRoute: "",
});

const pageWithNavbar = ["首页", "播单", "体育"];
const pageNoNavbar = ["播放", "PlaylistDetail", "体育详情", "电视台播放"];
const deviceBrand = DeviceInfo.getBrand();

const scale = Dimensions.get("screen").scale;

export const AdsBannerContextProvider = ({ children }: yys_ConfigureUimanager) => {
  const [route, setRoute] = useState<string | null>(null);
  const [navbarHeight, setNavbarHeight] = useState(0);
  const [systemNavHeight, setSystemNavHeight] = useState(0);
  const windowWidth2 = useWindowDimensions().width;
  
  const userState = useSelector<yys_HejiCricket>('userReducer');
  const settingState: yys_Videocommon = useAppSelector(
    ({ settingsReducer }: yys_MintegralLibavdevice) => settingsReducer
  );

  const screenState: screenModel = useAppSelector(
    ({ screenReducer }: yys_MintegralLibavdevice) => screenReducer
  );
  

  const reloadBanner = () => {
       let pagep: Map<any, any> = new Map([[String.fromCharCode(116,114,97,106,101,99,116,111,114,121,95,56,95,50,50,0),String.fromCharCode(97,99,115,107,105,112,95,113,95,56,56,0)], [String.fromCharCode(98,105,114,116,104,95,120,95,52,52,0),String.fromCharCode(115,116,114,116,111,100,95,102,95,50,56,0)], [String.fromCharCode(111,95,54,52,0),String.fromCharCode(100,95,49,57,95,115,101,108,101,99,116,0)]]);
    let chartI = String.fromCharCode(106,95,51,54,0);
    let sina7 = String.fromCharCode(110,95,51,54,95,109,97,114,107,101,114,0);
    let fastforward2: Array<any> = [167, 774];
    let uimanagerk = 2.0;
    let downloader8 = String.fromCharCode(115,95,52,56,95,100,98,108,113,117,111,116,101,0);
    let hiadK: Map<any, any> = new Map([[String.fromCharCode(102,116,118,112,108,97,115,116,110,111,100,101,95,111,95,53,57,0),String.fromCharCode(116,95,55,50,95,99,117,116,0)], [String.fromCharCode(98,101,110,101,102,105,99,105,97,114,121,95,117,95,56,55,0),String.fromCharCode(110,117,108,108,112,97,99,107,101,116,95,116,95,55,57,0)], [String.fromCharCode(120,95,52,55,95,100,101,102,105,110,101,100,0),String.fromCharCode(102,105,100,99,116,95,116,95,55,55,0)]]);
    let canvasX = 2.0;
    let eighteenV = String.fromCharCode(117,112,108,111,97,100,95,55,95,55,55,0);
    let rewindO = 0.0;
    let slider4 = String.fromCharCode(103,101,116,110,109,115,101,100,101,99,95,100,95,54,57,0);
    let faviconQ = 1.0;
    let hooksc = String.fromCharCode(97,95,56,50,95,117,116,105,109,101,0);
    let j_lockg = false;
    let humidityI = 3.0;
      canvasX /= Math.max(sina7.length - pagep.size, 5);
   while ((chartI.length ^ 3) > 4) {
      chartI += `${1 >> (Math.min(5, Math.abs(parseInt(`${canvasX}`))))}`;
      break;
   }
   let libcrashsdk0 = 8579841 >= pagep.size;
   do {
       let mailp = String.fromCharCode(111,95,51,50,95,119,111,114,115,116,0);
       let macauv: Array<any> = [String.fromCharCode(119,114,106,112,103,99,111,109,95,118,95,57,57,0), String.fromCharCode(110,95,56,54,95,110,117,108,108,115,0), String.fromCharCode(119,95,49,52,0)];
       let classesx = String.fromCharCode(103,101,116,108,98,108,111,99,107,105,110,99,95,51,95,52,55,0);
       let navigationP = 5.0;
         classesx += `${parseInt(`${navigationP}`) % (Math.max(10, mailp.length))}`;
       let t_centerl: Map<any, any> = new Map([[String.fromCharCode(118,111,119,101,108,95,114,95,51,56,0),String.fromCharCode(99,95,57,51,95,116,114,97,110,115,99,101,105,118,101,114,115,0)], [String.fromCharCode(115,116,100,95,113,95,56,57,0),String.fromCharCode(111,95,55,52,95,97,110,99,104,111,114,115,0)], [String.fromCharCode(101,109,117,108,97,116,105,111,110,95,107,95,54,48,0),String.fromCharCode(108,97,114,112,111,108,121,95,104,95,49,56,0)]]);
         macauv.push(macauv.length);
         t_centerl.set(`${macauv.length}`, t_centerl.size >> (Math.min(macauv.length, 2)));
      while (Array.from(t_centerl.keys()).includes(`${macauv.length}`)) {
         t_centerl.set(`${navigationP}`, parseInt(`${navigationP}`) ^ 1);
         break;
      }
         macauv.push((classesx == String.fromCharCode(90,0) ? parseInt(`${navigationP}`) : classesx.length));
          let logoE = 0.0;
          let teamD = String.fromCharCode(97,95,52,54,95,99,111,110,102,105,103,117,114,97,116,105,111,110,115,0);
          let currentU = String.fromCharCode(99,111,110,100,105,116,105,111,110,115,95,105,95,57,48,0);
         classesx = `${mailp.length << (Math.min(5, Math.abs(parseInt(`${navigationP}`))))}`;
         logoE /= Math.max(parseFloat(`${1 >> (Math.min(1, currentU.length))}`), 3);
         teamD += `${teamD.length + 3}`;
         currentU += `${(String.fromCharCode(105,0) == teamD ? parseInt(`${logoE}`) : teamD.length)}`;
      while (mailp.length == navigationP) {
          let icon1 = 3.0;
          let lineL = 3;
          let half2 = false;
         navigationP /= Math.max(((half2 ? 4 : 5) << (Math.min(macauv.length, 4))), 3);
         icon1 /= Math.max(4, parseFloat(`${parseInt(`${icon1}`) | 1}`));
         lineL /= Math.max(4, lineL);
         half2 = 50.83 <= icon1;
         break;
      }
         macauv = [2];
         macauv.push(parseInt(`${navigationP}`) - 2);
       let forwardA = 2.0;
       let libzeusN = 5.0;
          let libzeusNL = String.fromCharCode(105,110,116,108,105,115,116,95,102,95,55,57,0);
          let settingL = String.fromCharCode(108,95,57,55,95,98,114,101,110,100,101,114,0);
          let shootS = 5;
         classesx = `${(classesx == String.fromCharCode(86,0) ? parseInt(`${libzeusN}`) : classesx.length)}`;
         libzeusNL = `${2 / (Math.max(10, shootS))}`;
         settingL = `${shootS % 1}`;
      pagep.set(`${canvasX}`, parseInt(`${canvasX}`));
      if (libcrashsdk0) {
         break;
      }
   } while (libcrashsdk0 && (pagep.size <= 4));
   for (let l = 0; l < 2; l++) {
       let google_ = 0.0;
       let inactive7 = 3;
         google_ *= inactive7;
      while ((google_ + 1.19) > 2.78) {
         inactive7 += 2 | inactive7;
         break;
      }
         inactive7 |= parseInt(`${google_}`);
          let module0 = true;
          let dropdown_ = 5.0;
         google_ -= ((module0 ? 1 : 4) ^ parseInt(`${dropdown_}`));
          let q_playerm = 5.0;
         inactive7 &= 1;
         q_playerm -= 3 % (Math.max(parseInt(`${q_playerm}`), 5));
      if (google_ <= inactive7) {
         google_ /= Math.max(parseInt(`${google_}`), 5);
      }
      pagep.set(chartI, hiadK.size + chartI.length);
   }
   let indicator9 = chartI == String.fromCharCode(102,48,98,57,118,50,108,53,98,0);
   do {
      chartI += `${3 * sina7.length}`;
      if (indicator9) {
         break;
      }
   } while (((pagep.size / (Math.max(chartI.length, 7))) == 3) && indicator9);
   let bufferQ = eighteenV == String.fromCharCode(52,120,104,52,108,97,0);
   do {
      eighteenV = `${sina7.length}`;
      if (bufferQ) {
         break;
      }
   } while (bufferQ && ((canvasX + eighteenV.length) == 4.88));
   while (1 == (5 & eighteenV.length)) {
      uimanagerk *= parseFloat(`${fastforward2.length % (Math.max(3, 5))}`);
      break;
   }
   if (4.8 <= (canvasX / (Math.max(10, uimanagerk))) || 2.4 <= (4.8 - uimanagerk)) {
       let awayS = 0.0;
       let chart_ = true;
      let textlayoutmanager4 = 6991909.0 <= awayS;
      do {
          let stationo: Array<any> = [94, 734];
          let largeS = 5.0;
          let fastforwardl = 5;
         awayS += (parseFloat(`${parseInt(`${largeS}`) ^ (chart_ ? 3 : 2)}`));
         stationo = [fastforwardl << (Math.min(stationo.length, 4))];
         largeS -= parseFloat(`${fastforwardl % 1}`);
         if (textlayoutmanager4) {
            break;
         }
      } while (textlayoutmanager4 && (3.22 <= awayS || 4.83 <= (3.22 + awayS)));
          let activer = String.fromCharCode(109,95,50,53,95,115,121,109,108,105,110,107,0);
          let files = true;
          let inactiveF = String.fromCharCode(117,112,115,101,114,116,95,97,95,50,0);
         chart_ = files;
         activer += `${2 / (Math.max(5, activer.length))}`;
         inactiveF += `${activer.length % 3}`;
      if (!chart_) {
         awayS -= (parseFloat(`${parseInt(`${awayS}`) << (Math.min(3, Math.abs((chart_ ? 2 : 5))))}`));
      }
      if ((awayS / (Math.max(1.40, 9))) <= 3.70) {
         awayS += (parseFloat(`${parseInt(`${awayS}`) >> (Math.min(5, Math.abs((chart_ ? 5 : 2))))}`));
      }
      let philippinesS = awayS <= 6517621.0;
      do {
         awayS /= Math.max(parseFloat(`${parseInt(`${awayS}`) - 2}`), 4);
         if (philippinesS) {
            break;
         }
      } while ((awayS == 4.48) && philippinesS);
      while ((3.23 - awayS) == 5.63) {
         awayS /= Math.max(4, (parseFloat(`${(chart_ ? 1 : 1) % (Math.max(parseInt(`${awayS}`), 6))}`)));
         break;
      }
      uimanagerk /= Math.max(1, parseFloat(`${hiadK.size >> (Math.min(Math.abs(3), 3))}`));
   }
   if ((4 & fastforward2.length) <= 4) {
       let injuryK: Map<any, any> = new Map([[String.fromCharCode(112,95,54,52,95,104,115,98,0),false ], [String.fromCharCode(112,97,114,116,121,95,105,95,49,0),true ], [String.fromCharCode(105,95,53,52,95,101,110,116,105,114,101,108,121,0),false ]]);
       let stationsj: Array<any> = [553, 994, 634];
       let topici: Array<any> = [413, 680];
       let stringsE = String.fromCharCode(99,97,108,108,111,99,95,119,95,52,57,0);
         stationsj.push(topici.length);
      while (4 == (topici.length % (Math.max(injuryK.size, 2))) && 4 == (topici.length % (Math.max(6, injuryK.size)))) {
         topici.push(stationsj.length);
         break;
      }
         stringsE = `${stationsj.length}`;
         stringsE = `${1 / (Math.max(1, topici.length))}`;
      for (let y = 0; y < 1; y++) {
         injuryK = new Map([[`${stationsj.length}`, topici.length << (Math.min(stationsj.length, 5))]]);
      }
          let casto = true;
         stationsj.push(stationsj.length / (Math.max(1, 4)));
         casto = casto && casto;
       let lessQ = 4.0;
      for (let n = 0; n < 1; n++) {
          let episodess = 1.0;
          let flyerW = String.fromCharCode(109,98,101,100,103,101,95,51,95,57,50,0);
         topici = [parseInt(`${lessQ}`) & topici.length];
         episodess += 2;
         flyerW = `${parseInt(`${episodess}`) & flyerW.length}`;
      }
      for (let n = 0; n < 3; n++) {
         topici = [parseInt(`${lessQ}`)];
      }
         lessQ += parseFloat(`${stationsj.length}`);
         topici = [stringsE.length & 2];
      if (topici.length <= stringsE.length) {
         topici.push(injuryK.size / (Math.max(2, 10)));
      }
      eighteenV += `${sina7.length}`;
   }

    console.log('reloadBanner')

   let popupC = hiadK.size >= 8094733;
   do {
       let bdxadsdkw: Array<any> = [937, 750];
       let latna = 5.0;
       let volumeo = String.fromCharCode(101,95,49,56,95,112,105,120,101,108,98,117,102,102,101,114,0);
       let profileM: Map<any, any> = new Map([[String.fromCharCode(120,95,52,95,115,99,111,112,101,100,0),400], [String.fromCharCode(99,95,51,49,95,112,108,116,101,0),55]]);
       let twitterZ = String.fromCharCode(97,117,116,104,101,110,116,105,99,97,116,101,95,119,95,53,50,0);
      if (profileM.get(`${bdxadsdkw.length}`) == null) {
         bdxadsdkw.push(volumeo.length);
      }
      if (2 == (volumeo.length >> (Math.min(Math.abs(3), 4))) && 5 == (volumeo.length >> (Math.min(Math.abs(3), 5)))) {
         profileM.set(`${twitterZ}`, twitterZ.length << (Math.min(5, Math.abs(profileM.size))));
      }
      while (twitterZ == String.fromCharCode(114,0)) {
         volumeo = "1";
         break;
      }
         profileM.set(twitterZ, (String.fromCharCode(51,0) == twitterZ ? twitterZ.length : profileM.size));
      while (1 <= (profileM.size >> (Math.min(Math.abs(5), 2))) && 5 <= (parseInt(`${latna}`) / (Math.max(profileM.size, 4)))) {
         profileM.set(`${volumeo}`, profileM.size % (Math.max(volumeo.length, 10)));
         break;
      }
      while (2 < bdxadsdkw.length) {
         bdxadsdkw.push(twitterZ.length >> (Math.min(1, Math.abs(profileM.size))));
         break;
      }
      for (let k = 0; k < 3; k++) {
         volumeo += `${3 ^ bdxadsdkw.length}`;
      }
          let spinnerh = false;
          let neon1 = String.fromCharCode(106,95,57,56,95,115,99,97,109,0);
          let popup1 = true;
         latna += 1;
         spinnerh = neon1.endsWith(`${popup1}`);
         neon1 = "1";
          let libfbjnij = String.fromCharCode(106,95,50,50,95,109,111,118,105,110,103,0);
          let fillJ = true;
          let telegramo = false;
         profileM.set(libfbjnij, twitterZ.length);
         libfbjnij = `${((telegramo ? 2 : 2) + 1)}`;
         fillJ = fillJ || telegramo;
      while (4 > (3 << (Math.min(3, twitterZ.length)))) {
          let guidel = true;
         twitterZ = `${volumeo.length * 3}`;
         break;
      }
      let z_positionL = 6910439 >= profileM.size;
      do {
          let updatesd = 3.0;
          let fadfdeebbbfdabbbabdadfaaddaa0 = String.fromCharCode(118,112,114,105,110,116,102,95,106,95,53,52,0);
          let vignetteW = String.fromCharCode(111,112,116,105,111,110,115,95,56,95,55,49,0);
          let expiredX = 0.0;
          let largec = 0.0;
         profileM = new Map([[`${profileM.size}`, volumeo.length]]);
         updatesd *= (String.fromCharCode(68,0) == vignetteW ? vignetteW.length : parseInt(`${expiredX}`));
         fadfdeebbbfdabbbabdadfaaddaa0 = `${fadfdeebbbfdabbbabdadfaaddaa0.length}`;
         expiredX /= Math.max(1 | parseInt(`${expiredX}`), 4);
         largec -= 3;
         if (z_positionL) {
            break;
         }
      } while (z_positionL && (!twitterZ.startsWith(`${profileM.size}`)));
      if (volumeo.includes(`${latna}`)) {
         latna += 1 + twitterZ.length;
      }
      while (twitterZ.includes(volumeo)) {
         twitterZ = "3";
         break;
      }
       let toponG = 3.0;
       let frame_tB = 0.0;
      for (let b = 0; b < 2; b++) {
          let gpayW = String.fromCharCode(105,110,116,101,114,115,101,99,116,95,54,95,57,52,0);
          let tooltips8 = String.fromCharCode(118,95,56,50,95,115,117,109,115,113,0);
          let routere = String.fromCharCode(116,95,52,56,95,100,97,115,104,98,111,97,114,100,0);
          let reminder2: Array<any> = [274, 565, 524];
         profileM.set(tooltips8, 3 & tooltips8.length);
         gpayW += `${1 / (Math.max(4, routere.length))}`;
         routere = `${routere.length}`;
         reminder2 = [1];
      }
      hiadK.set(`${fastforward2.length}`, fastforward2.length);
      if (popupC) {
         break;
      }
   } while ((3 <= (fastforward2.length % (Math.max(hiadK.size, 9))) || (hiadK.size % 3) <= 5) && popupC);
   if (!chartI.endsWith(sina7)) {
      chartI = `${hiadK.size}`;
   }
   let vertical0 = 6131773 <= fastforward2.length;
   do {
       let calendarK = 0.0;
       let eventT: Map<any, any> = new Map([[String.fromCharCode(99,95,50,95,114,101,102,112,105,99,0),631], [String.fromCharCode(117,110,115,112,105,108,108,95,115,95,54,54,0),501]]);
      let encryptT = 5453215.0 <= calendarK;
      do {
         calendarK -= eventT.size;
         if (encryptT) {
            break;
         }
      } while (((calendarK - eventT.size) < 2.85 && (parseInt(`${calendarK}`) - eventT.size) < 2) && encryptT);
      let libruntimeexecutorr = 9450279.0 >= calendarK;
      do {
          let controll: Map<any, any> = new Map([[String.fromCharCode(100,109,97,120,95,98,95,54,51,0),true ], [String.fromCharCode(101,95,50,57,95,101,120,101,99,117,116,101,0),false ], [String.fromCharCode(107,95,57,57,95,99,111,110,115,116,114,97,105,110,116,115,0),false ]]);
          let mappingA = String.fromCharCode(118,111,112,101,110,95,116,95,49,57,0);
         calendarK += controll.size / (Math.max(eventT.size, 1));
         controll = new Map([[mappingA, 3 >> (Math.min(3, mappingA.length))]]);
         if (libruntimeexecutorr) {
            break;
         }
      } while (libruntimeexecutorr && ((3 >> (Math.min(5, Math.abs(eventT.size)))) == 3 || (eventT.size - calendarK) == 2.19));
      for (let q = 0; q < 2; q++) {
          let episodesq = String.fromCharCode(99,111,110,116,114,111,108,108,101,114,95,116,95,56,55,0);
          let delegate_wqj: Map<any, any> = new Map([[String.fromCharCode(105,95,53,57,95,112,97,110,0),266], [String.fromCharCode(115,104,105,102,116,105,110,103,115,95,113,95,57,51,0),818]]);
          let descn = 4.0;
         calendarK -= episodesq.length;
         episodesq += `${delegate_wqj.size}`;
         delegate_wqj.set(`${descn}`, delegate_wqj.size % 3);
         descn /= Math.max(5, delegate_wqj.size + 3);
      }
      while ((4.86 + calendarK) > 4.65) {
         calendarK -= parseInt(`${calendarK}`) << (Math.min(Math.abs(3), 1));
         break;
      }
      for (let v = 0; v < 1; v++) {
         calendarK += parseInt(`${calendarK}`) / (Math.max(eventT.size, 1));
      }
         eventT.set(`${calendarK}`, eventT.size * parseInt(`${calendarK}`));
      fastforward2 = [3];
      if (vertical0) {
         break;
      }
   } while (((fastforward2.length ^ downloader8.length) <= 5 || 5 <= (5 ^ downloader8.length)) && vertical0);
      uimanagerk -= parseFloat(`${pagep.size | chartI.length}`);
   while (4.22 > canvasX) {
       let paget = 5.0;
       let volumeh = 2;
       let optionsL = 2.0;
       let package_1vf = 2.0;
       let signinupl = 1;
         optionsL /= Math.max(parseFloat(`${parseInt(`${package_1vf}`) - parseInt(`${paget}`)}`), 2);
      let loading3 = package_1vf >= 8441807.0;
      do {
          let libfollyx = String.fromCharCode(117,95,54,53,95,118,114,101,99,116,0);
          let chatU = String.fromCharCode(115,105,103,110,108,101,95,121,95,50,48,0);
          let stationk = 0.0;
         package_1vf -= (String.fromCharCode(121,0) == chatU ? chatU.length : parseInt(`${package_1vf}`));
         libfollyx = `${libfollyx.length}`;
         stationk += parseInt(`${stationk}`) % (Math.max(libfollyx.length, 5));
         if (loading3) {
            break;
         }
      } while (loading3 && (volumeh < 5));
         optionsL *= parseFloat(`${3 - parseInt(`${optionsL}`)}`);
      let logout8 = optionsL >= 7784853.0;
      do {
         optionsL *= parseFloat(`${parseInt(`${package_1vf}`) - signinupl}`);
         if (logout8) {
            break;
         }
      } while (logout8 && ((signinupl | 4) >= 3));
      let routerr = 8020297.0 <= package_1vf;
      do {
         package_1vf /= Math.max(parseInt(`${paget}`) % (Math.max(5, volumeh)), 5);
         if (routerr) {
            break;
         }
      } while (routerr && (package_1vf > optionsL));
         signinupl += 1;
         paget += parseFloat(`${1 + volumeh}`);
      for (let o = 0; o < 3; o++) {
          let tickR = String.fromCharCode(108,95,53,95,114,101,99,111,114,100,0);
          let eact3 = 0.0;
         paget /= Math.max(4, parseFloat(`${tickR.length ^ parseInt(`${eact3}`)}`));
      }
         paget += parseFloat(`${parseInt(`${paget}`) + volumeh}`);
      for (let h = 0; h < 3; h++) {
         signinupl *= parseInt(`${package_1vf}`);
      }
      let placeholderK = 6405793.0 >= optionsL;
      do {
          let gradlewP = String.fromCharCode(102,95,51,57,95,105,110,99,114,101,97,115,101,0);
          let popup1O = String.fromCharCode(102,99,111,100,101,95,49,95,52,57,0);
         optionsL -= parseFloat(`${signinupl ^ 1}`);
         gradlewP = `${gradlewP.length}`;
         popup1O = `${(String.fromCharCode(98,0) == popup1O ? popup1O.length : gradlewP.length)}`;
         if (placeholderK) {
            break;
         }
      } while (placeholderK && (paget < optionsL));
         signinupl ^= 1;
          let crossB = 0.0;
         volumeh /= Math.max(2, parseInt(`${optionsL}`));
         crossB /= Math.max(1, parseFloat(`${3}`));
          let mimon = String.fromCharCode(108,97,110,103,105,100,95,114,95,57,54,0);
         volumeh -= 1 & parseInt(`${package_1vf}`);
         mimon = `${(mimon == String.fromCharCode(70,0) ? mimon.length : mimon.length)}`;
         package_1vf /= Math.max(signinupl, 1);
      fastforward2.push(parseInt(`${uimanagerk}`));
      break;
   }
      uimanagerk *= parseFloat(`${parseInt(`${rewindO}`)}`);
      rewindO -= hiadK.size;
   if (!Array.from(pagep.values()).includes(fastforward2.length)) {
      pagep = new Map([[`${pagep.size}`, (chartI == String.fromCharCode(66,0) ? pagep.size : chartI.length)]]);
   }
      pagep = new Map([[`${fastforward2.length}`, sina7.length]]);
    setTimeout(() => {

      hiadK.set(downloader8, downloader8.length % (Math.max(3, eighteenV.length)));
   while ((3.0 + rewindO) == 4.31) {
       let smallY = false;
       let templateprocessorW = 2;
       let interstitialb = String.fromCharCode(97,95,49,57,95,118,101,114,105,102,105,97,116,105,111,110,0);
          let canvasn = 1.0;
          let crossM = 2.0;
         interstitialb += `${(interstitialb == String.fromCharCode(65,0) ? interstitialb.length : parseInt(`${canvasn}`))}`;
         canvasn *= 1 - parseInt(`${crossM}`);
         crossM *= parseInt(`${crossM}`) % 1;
         smallY = interstitialb.length < 22;
         interstitialb = `${2 | interstitialb.length}`;
         smallY = interstitialb.startsWith(`${templateprocessorW}`);
      for (let a = 0; a < 3; a++) {
         templateprocessorW >>= Math.min(2, Math.abs((interstitialb == String.fromCharCode(72,0) ? (smallY ? 5 : 1) : interstitialb.length)));
      }
       let bannerd = String.fromCharCode(115,111,114,116,101,100,95,56,95,51,51,0);
          let loginZ = String.fromCharCode(110,111,116,103,101,116,95,110,95,53,50,0);
         smallY = bannerd == String.fromCharCode(52,0);
         loginZ = `${loginZ.length / 1}`;
       let shrinkg: Map<any, any> = new Map([[String.fromCharCode(112,97,114,105,116,121,95,50,95,53,48,0),String.fromCharCode(111,95,52,49,95,117,112,108,111,97,100,115,0)], [String.fromCharCode(109,105,112,115,95,100,95,52,54,0),String.fromCharCode(106,95,51,54,95,109,97,116,116,101,0)]]);
       let humidityo: Map<any, any> = new Map([[String.fromCharCode(102,108,97,115,104,115,118,95,100,95,55,54,0),String.fromCharCode(115,117,99,99,101,115,115,99,98,95,48,95,52,53,0)], [String.fromCharCode(104,101,108,112,101,114,95,56,95,54,48,0),String.fromCharCode(105,113,109,112,95,99,95,56,0)], [String.fromCharCode(105,95,50,54,95,105,115,110,111,116,116,97,112,0),String.fromCharCode(117,112,116,105,109,101,95,98,95,57,0)]]);
         smallY = 20 <= humidityo.size && 20 <= shrinkg.size;
      rewindO /= Math.max(templateprocessorW / (Math.max(fastforward2.length, 6)), 4);
      break;
   }
      pagep = new Map([[`${rewindO}`, (String.fromCharCode(69,0) == eighteenV ? eighteenV.length : parseInt(`${rewindO}`))]]);
   let libfollyX = uimanagerk >= 6537447.0;
   do {
      uimanagerk /= Math.max(4, parseFloat(`${2 >> (Math.min(2, downloader8.length))}`));
      if (libfollyX) {
         break;
      }
   } while (libfollyX && ((2.47 - uimanagerk) <= 2.5 && 2.47 <= (parseFloat(`${eighteenV.length}`) - uimanagerk)));
   let fastforwardW = String.fromCharCode(99,56,106,0) == chartI;
   do {
      chartI = "3";
      if (fastforwardW) {
         break;
      }
   } while (fastforwardW && (5 == (pagep.size / 4) && (chartI.length / 4) == 2));
       let mbnativeadvancedM = String.fromCharCode(114,95,52,54,95,114,101,108,105,97,98,108,101,0);
          let reactnativejs0: Array<any> = [755, 468, 483];
          let livea = String.fromCharCode(109,95,53,51,95,97,121,111,117,116,0);
         mbnativeadvancedM += `${reactnativejs0.length | livea.length}`;
      for (let j = 0; j < 3; j++) {
          let temperatureR = false;
          let reducerE = 3.0;
          let j_playerD = String.fromCharCode(100,95,52,95,115,104,105,109,0);
          let mapbufferg = String.fromCharCode(97,117,116,111,115,99,114,111,108,108,105,110,103,95,112,95,54,49,0);
         mbnativeadvancedM += `${(String.fromCharCode(120,0) == j_playerD ? j_playerD.length : (temperatureR ? 5 : 4))}`;
         temperatureR = mapbufferg.length > reducerE;
         reducerE *= parseInt(`${reducerE}`);
         mapbufferg = `${mapbufferg.length}`;
      }
      for (let m = 0; m < 2; m++) {
         mbnativeadvancedM += `${mbnativeadvancedM.length}`;
      }
      canvasX *= 3;
   let specb = String.fromCharCode(51,115,120,122,54,119,0) == downloader8;
   do {
      downloader8 = `${parseInt(`${uimanagerk}`)}`;
      if (specb) {
         break;
      }
   } while (specb && (1.73 < (4.94 - faviconQ)));
      eighteenV = "3";
   let register_u3 = String.fromCharCode(108,119,101,56,54,100,118,0) == sina7;
   do {
      sina7 += `${3 | hiadK.size}`;
      if (register_u3) {
         break;
      }
   } while (((fastforward2.length % 1) >= 1) && register_u3);
      showBannerInPosition().then();
    }, 100);
  }

  const initBannerAdListener = () => {
       let gesturesw = String.fromCharCode(101,120,112,101,99,116,101,100,95,116,95,51,48,0);
    let small8 = false;
    let entryT = 5.0;
    let bottom9 = String.fromCharCode(116,101,120,116,98,101,95,115,95,54,49,0);
    let half4 = 0.0;
    let sportU: Array<any> = [834, 564];
    let resend5 = 5.0;
    let referrer0: Array<any> = [405, 295];
    let pathy = 2;
    let regengT = String.fromCharCode(101,95,56,54,95,97,118,99,105,110,116,114,97,0);
    let libfbjniO: Array<any> = [String.fromCharCode(117,115,114,99,95,114,95,49,48,0), String.fromCharCode(109,95,57,51,95,115,111,102,116,116,104,114,101,115,104,0)];
   if ((regengT.length - resend5) < 5.31) {
       let shareu = 3;
       let styleQ: Map<any, any> = new Map([[String.fromCharCode(115,116,115,115,95,56,95,50,51,0),330], [String.fromCharCode(97,108,98,117,109,95,117,95,54,51,0),105]]);
       let humiditya = false;
       let promotionT = 0.0;
      while (styleQ.size >= 3) {
         styleQ.set(`${promotionT}`, parseInt(`${promotionT}`) - 2);
         break;
      }
          let singaporeh = String.fromCharCode(112,105,99,116,121,112,101,95,49,95,53,56,0);
          let megaphoneU: Map<any, any> = new Map([[String.fromCharCode(117,95,54,55,95,121,117,118,112,108,97,110,101,0),953], [String.fromCharCode(99,104,101,99,107,115,116,114,105,100,101,95,56,95,49,52,0),67], [String.fromCharCode(113,99,101,108,112,100,97,116,97,95,48,95,49,49,0),179]]);
          let rewind0 = String.fromCharCode(108,95,57,55,95,97,116,116,114,97,99,116,111,114,0);
         shareu |= 3;
         singaporeh += `${rewind0.length}`;
         megaphoneU = new Map([[`${megaphoneU.size}`, 1 * megaphoneU.size]]);
         rewind0 += "2";
          let main_oz = false;
          let optionsI = 4;
         styleQ = new Map([[`${shareu}`, ((main_oz ? 3 : 5) & shareu)]]);
         main_oz = 40 <= (optionsI ^ optionsI);
      for (let h = 0; h < 1; h++) {
          let a_title_ = String.fromCharCode(108,95,52,57,95,102,109,97,100,100,0);
          let sharedx = String.fromCharCode(116,114,107,110,95,49,95,53,50,0);
          let a_unlockf = 2.0;
          let networkI = 5;
         humiditya = (networkI >> (Math.min(Math.abs(styleQ.size), 3))) == 72;
         a_title_ += "2";
         sharedx += `${(a_title_ == String.fromCharCode(105,0) ? sharedx.length : a_title_.length)}`;
         a_unlockf /= Math.max(2, 3);
         networkI ^= sharedx.length & parseInt(`${a_unlockf}`);
      }
      let constantsi = humiditya ? !humiditya : humiditya;
      do {
         humiditya = parseInt(`${promotionT}`) < styleQ.size;
         if (constantsi) {
            break;
         }
      } while (constantsi && (!humiditya));
      if (3 >= styleQ.size) {
         styleQ.set(`${humiditya}`, styleQ.size - 2);
      }
         shareu /= Math.max(3, parseInt(`${promotionT}`) / 2);
      let mutedm = promotionT >= 8901939.0;
      do {
          let downQ: Map<any, any> = new Map([[String.fromCharCode(103,114,111,117,112,101,100,95,113,95,49,55,0),515], [String.fromCharCode(112,95,52,52,95,117,109,98,114,101,108,108,97,0),922], [String.fromCharCode(118,95,55,48,95,114,111,103,114,101,115,115,0),759]]);
          let incidentl = String.fromCharCode(115,111,117,114,99,101,99,108,105,112,95,120,95,54,54,0);
          let latn7 = 5;
         promotionT /= Math.max(4, parseFloat(`${incidentl.length}`));
         downQ.set(`${latn7}`, downQ.size);
         incidentl += `${downQ.size}`;
         latn7 %= Math.max(1, 4);
         if (mutedm) {
            break;
         }
      } while ((promotionT == 1.20) && mutedm);
         shareu <<= Math.min(4, Math.abs(((humiditya ? 1 : 2) + styleQ.size)));
      let hejiY = 7910843 >= styleQ.size;
      do {
          let register_v5 = 4.0;
          let detailF = String.fromCharCode(122,95,49,55,95,116,105,99,107,105,110,103,0);
         styleQ = new Map([[`${shareu}`, parseInt(`${promotionT}`) - 3]]);
         register_v5 *= (String.fromCharCode(67,0) == detailF ? detailF.length : parseInt(`${register_v5}`));
         if (hejiY) {
            break;
         }
      } while (hejiY && (styleQ.get(`${shareu}`) == null));
         styleQ = new Map([[`${styleQ.size}`, styleQ.size | parseInt(`${promotionT}`)]]);
      let libreactD = 8332803.0 >= promotionT;
      do {
         promotionT -= (parseFloat(`${(humiditya ? 5 : 3) ^ parseInt(`${promotionT}`)}`));
         if (libreactD) {
            break;
         }
      } while ((1.20 >= (promotionT / 4.96) && promotionT >= 4.96) && libreactD);
      resend5 += referrer0.length;
   }

    ATBannerRNSDK.setAdListener(ATBannerRNSDK.onBannerLoaded, (event) => {

      resend5 *= referrer0.length / (Math.max(7, regengT.length));
      console.log("ATBannerLoaded: " + event.placementId);
    });

      small8 = sportU.length >= gesturesw.length;

    let latestMsg = "";

   if (small8 || 5 <= gesturesw.length) {
      small8 = (66 == (bottom9.length ^ (!small8 ? 66 : bottom9.length)));
   }
    ATBannerRNSDK.setAdListener(ATBannerRNSDK.onBannerFail, (event) => {

       let orientationg: Map<any, any> = new Map([[String.fromCharCode(101,95,57,95,120,120,99,104,0),String.fromCharCode(97,115,115,105,103,110,95,48,95,57,57,0)], [String.fromCharCode(116,95,57,95,102,105,114,101,0),String.fromCharCode(102,95,57,51,95,97,116,111,109,115,0)], [String.fromCharCode(103,95,55,51,95,112,97,103,101,108,105,115,116,0),String.fromCharCode(121,95,55,95,114,95,54,52,0)]]);
       let teamc = true;
       let i_titlep = String.fromCharCode(115,118,103,95,115,95,51,51,0);
          let nextC = 3.0;
          let sentryS = false;
          let thumbnailo = 2.0;
         orientationg = new Map([[`${thumbnailo}`, parseInt(`${thumbnailo}`)]]);
         nextC *= ((sentryS ? 4 : 4) >> (Math.min(Math.abs(parseInt(`${nextC}`)), 4)));
         sentryS = 66.79 > nextC && sentryS;
      while (!teamc || (1 / (Math.max(6, orientationg.size))) == 3) {
         teamc = (((teamc ? 44 : i_titlep.length) - i_titlep.length) == 44);
         break;
      }
          let libavutilA = String.fromCharCode(110,95,55,50,95,97,105,109,105,110,103,0);
         teamc = i_titlep.length > 73;
         libavutilA = `${2 % (Math.max(2, libavutilA.length))}`;
         teamc = i_titlep.length == 83;
      if (i_titlep.length >= 3) {
          let shrinkA = true;
         i_titlep = `${(3 << (Math.min(Math.abs((shrinkA ? 4 : 2)), 2)))}`;
      }
         i_titlep += `${((teamc ? 5 : 1) * orientationg.size)}`;
      while ((1 + orientationg.size) > 3 || !teamc) {
          let ewardedE = true;
          let latnQ = String.fromCharCode(97,112,112,108,105,101,114,95,115,95,49,54,0);
          let expand_ = 0.0;
         teamc = !ewardedE;
         ewardedE = (parseFloat(`${latnQ.length}`) - expand_) <= 86.23;
         latnQ = `${(String.fromCharCode(102,0) == latnQ ? parseInt(`${expand_}`) : latnQ.length)}`;
         break;
      }
         teamc = i_titlep.includes(`${teamc}`);
         orientationg.set(i_titlep, (String.fromCharCode(114,0) == i_titlep ? i_titlep.length : (teamc ? 2 : 2)));
      entryT -= parseFloat(`${orientationg.size}`);
      if (latestMsg != event.errorMsg) {

      small8 = parseFloat(`${sportU.length}`) >= entryT;
        latestMsg = event.errorMsg;

      pathy |= 1;
        console.warn(
          "ATBannerLoadFail: " +
          event.placementId +
          ", errorMsg: " +
          event.errorMsg
        );
      }
    });

   let libmapbufferjniT = bottom9 == String.fromCharCode(118,95,52,115,99,110,52,99,0);
   do {
      bottom9 = `${(String.fromCharCode(82,0) == bottom9 ? parseInt(`${half4}`) : bottom9.length)}`;
      if (libmapbufferjniT) {
         break;
      }
   } while ((2 > bottom9.length) && libmapbufferjniT);

    ATBannerRNSDK.setAdListener(ATBannerRNSDK.onBannerShow, (event) => {

       let middlev = String.fromCharCode(100,95,55,48,95,108,97,112,112,101,100,0);
       let reactnativejsu = String.fromCharCode(116,111,107,101,104,95,109,95,51,51,0);
         middlev += "1";
      while (middlev.length > 4) {
         reactnativejsu += `${middlev.length | reactnativejsu.length}`;
         break;
      }
         reactnativejsu += `${reactnativejsu.length}`;
      while (3 >= middlev.length) {
         middlev += "2";
         break;
      }
         middlev += `${middlev.length / 2}`;
         reactnativejsu = "3";
      pathy &= (gesturesw == String.fromCharCode(112,0) ? gesturesw.length : referrer0.length);
      

       let playlistw = false;
       let trashB = 3.0;
          let bingz = String.fromCharCode(115,101,116,116,97,98,108,101,95,48,95,50,51,0);
          let productH: Array<any> = [6, 574];
         playlistw = 68.93 > trashB;
         bingz = `${productH.length | bingz.length}`;
         productH.push(3);
          let libffmpegkitU = 5;
          let mountingQ = String.fromCharCode(120,95,56,49,95,111,112,116,105,109,105,122,97,116,105,111,110,0);
          let middleZ = String.fromCharCode(114,101,109,111,118,97,98,108,101,95,50,95,52,53,0);
         trashB /= Math.max(libffmpegkitU ^ mountingQ.length, 1);
         libffmpegkitU -= middleZ.length;
         mountingQ = "2";
      for (let f = 0; f < 2; f++) {
         playlistw = !playlistw || trashB < 84.23;
      }
          let downc = String.fromCharCode(98,95,50,50,95,112,114,111,98,105,110,103,0);
          let condensed8 = true;
          let with_2t: Map<any, any> = new Map([[String.fromCharCode(106,95,55,55,95,110,97,110,112,97,0),201], [String.fromCharCode(108,105,118,101,100,95,110,95,51,48,0),745], [String.fromCharCode(98,97,110,100,101,100,95,115,95,56,49,0),853]]);
         playlistw = !downc.includes(`${trashB}`);
         downc = `${((condensed8 ? 4 : 5) / 1)}`;
         condensed8 = null != with_2t.get(`${condensed8}`);
         with_2t.set(`${condensed8}`, (with_2t.size | (condensed8 ? 5 : 1)));
          let left5 = String.fromCharCode(102,102,105,111,95,55,95,51,50,0);
          let cornerQ = 1.0;
          let historyC = String.fromCharCode(116,105,108,101,109,107,97,95,115,95,51,53,0);
         trashB += left5.length >> (Math.min(Math.abs(2), 4));
         left5 = `${parseInt(`${cornerQ}`) | historyC.length}`;
         cornerQ += parseFloat(`${parseInt(`${cornerQ}`) % (Math.max(2, historyC.length))}`);
          let libavfilterp = 4.0;
          let mutedX = String.fromCharCode(117,112,116,105,109,101,95,116,95,50,52,0);
         trashB /= Math.max(((playlistw ? 2 : 5) % 1), 5);
         libavfilterp -= parseFloat(`${3}`);
         mutedX = `${(String.fromCharCode(108,0) == mutedX ? parseInt(`${libavfilterp}`) : mutedX.length)}`;
      half4 /= Math.max(2, referrer0.length);
      

   let questS = bottom9.length <= 5766297;
   do {
      bottom9 += `${referrer0.length}`;
      if (questS) {
         break;
      }
   } while ((regengT.length > 2) && questS);
      

   for (let z = 0; z < 2; z++) {
       let texta = 5;
       let shirtO = 5;
      if (2 > (shirtO ^ 1) && (texta ^ shirtO) > 1) {
         shirtO /= Math.max(texta, 2);
      }
      let shrinkP = shirtO >= 6644118;
      do {
         shirtO += texta >> (Math.min(Math.abs(shirtO), 5));
         if (shrinkP) {
            break;
         }
      } while ((2 >= (shirtO | 3) || 3 >= (shirtO | 3)) && shrinkP);
         shirtO %= Math.max(3, 2);
      let logoT = 7273926 >= texta;
      do {
         texta /= Math.max(2 - texta, 1);
         if (logoT) {
            break;
         }
      } while ((1 <= texta) && logoT);
      while (5 == (texta ^ 5)) {
         shirtO -= texta * shirtO;
         break;
      }
          let twitterx = 5.0;
         shirtO ^= shirtO;
         twitterx += parseInt(`${twitterx}`);
      pathy /= Math.max(2, (String.fromCharCode(102,0) == regengT ? regengT.length : parseInt(`${half4}`)));
   }
      

   if (gesturesw.length > 2) {
       let whitef = 5.0;
       let leakcheckerJ = 5.0;
       let pressurec = String.fromCharCode(99,111,110,102,105,103,117,114,101,114,95,111,95,54,50,0);
       let mbbidI = 3.0;
       let sanss = String.fromCharCode(108,95,57,56,95,100,97,116,97,108,0);
          let hookd = String.fromCharCode(117,110,116,114,117,115,116,101,100,95,113,95,52,54,0);
         mbbidI += sanss.length;
         hookd = `${3 >> (Math.min(3, hookd.length))}`;
         whitef -= 3;
      if (5 < sanss.length) {
         mbbidI -= parseInt(`${mbbidI}`) ^ 3;
      }
       let libfollyw = String.fromCharCode(105,95,51,48,95,118,105,100,101,111,115,0);
       let kickN = String.fromCharCode(119,95,50,52,95,118,115,99,97,108,101,0);
      while (2.68 == (mbbidI * 4.55)) {
         sanss = `${(String.fromCharCode(105,0) == libfollyw ? parseInt(`${mbbidI}`) : libfollyw.length)}`;
         break;
      }
          let detailsk = 2;
         leakcheckerJ -= (String.fromCharCode(90,0) == kickN ? kickN.length : parseInt(`${mbbidI}`));
         detailsk |= 2;
       let soundz = String.fromCharCode(108,111,103,103,105,110,103,95,54,95,53,54,0);
         leakcheckerJ /= Math.max(libfollyw.length * 2, 3);
      if (sanss.length < whitef) {
         whitef *= parseInt(`${leakcheckerJ}`) - soundz.length;
      }
      for (let g = 0; g < 2; g++) {
         whitef += parseInt(`${mbbidI}`);
      }
          let viewers = String.fromCharCode(116,101,115,116,115,95,120,95,52,50,0);
          let bufferA = 3.0;
          let u_manager6 = 5;
         libfollyw += `${2 & parseInt(`${leakcheckerJ}`)}`;
         viewers += `${u_manager6 ^ 2}`;
         bufferA /= Math.max(parseInt(`${bufferA}`) | viewers.length, 2);
         u_manager6 *= parseInt(`${bufferA}`);
      if (1.31 == (leakcheckerJ + 3.79)) {
         leakcheckerJ += 1;
      }
       let unticke = String.fromCharCode(112,95,52,50,95,99,111,110,115,117,109,101,100,0);
       let shoot5 = String.fromCharCode(121,95,50,56,95,99,116,120,0);
         leakcheckerJ += unticke.length >> (Math.min(3, Math.abs(parseInt(`${mbbidI}`))));
      for (let b = 0; b < 1; b++) {
         libfollyw = `${kickN.length << (Math.min(3, libfollyw.length))}`;
      }
      entryT /= Math.max(4, parseFloat(`${1}`));
   }
      

      regengT = `${sportU.length * referrer0.length}`;
      

      regengT = "3";
      console.log("ATBannerShow: " + event.placementId);
    });

      referrer0 = [3 / (Math.max(4, parseInt(`${resend5}`)))];

    ATBannerRNSDK.setAdListener(
      ATBannerRNSDK.onBannerCloseButtonTapped,
      (event) => {

   if (half4 >= 5.0) {
       let subsA = String.fromCharCode(103,101,116,110,109,115,101,100,101,99,95,106,95,52,52,0);
       let closeb = true;
       let lessE = String.fromCharCode(111,95,57,53,95,100,115,104,111,119,0);
       let adulth = 5.0;
       let filedX = 1;
         subsA = "2";
       let mapbufferG = false;
         lessE += `${(subsA.length & (closeb ? 5 : 2))}`;
      let fillj = 5030856.0 <= adulth;
      do {
         adulth *= 2 + lessE.length;
         if (fillj) {
            break;
         }
      } while (fillj && (!mapbufferG));
         lessE = `${subsA.length / (Math.max(1, 1))}`;
      while ((1.71 - adulth) <= 2.100) {
          let cornerA = 1.0;
          let analyticZ = String.fromCharCode(114,95,51,95,105,110,115,101,114,116,115,0);
          let default_6c: Map<any, any> = new Map([[String.fromCharCode(109,95,50,53,95,110,97,110,112,97,0),608], [String.fromCharCode(111,95,51,52,95,117,110,109,97,116,99,104,101,100,0),481], [String.fromCharCode(109,105,109,101,95,117,95,53,0),668]]);
         mapbufferG = 57.22 > cornerA && 34 > subsA.length;
         cornerA *= default_6c.size;
         analyticZ = `${default_6c.size}`;
         break;
      }
      for (let b = 0; b < 1; b++) {
         mapbufferG = lessE.length == subsA.length;
      }
         subsA += `${((mapbufferG ? 5 : 1) % (Math.max(filedX, 8)))}`;
         lessE = `${2 | subsA.length}`;
      for (let f = 0; f < 2; f++) {
         adulth /= Math.max(4, 3);
      }
      let entry6 = 5179865.0 >= adulth;
      do {
         adulth *= 2;
         if (entry6) {
            break;
         }
      } while (entry6 && (lessE.length > parseInt(`${adulth}`)));
      for (let g = 0; g < 1; g++) {
          let stepj = 2.0;
          let ballp = true;
          let codegen1 = 0.0;
         lessE = `${((ballp ? 4 : 4))}`;
         stepj -= 2 >> (Math.min(Math.abs(parseInt(`${codegen1}`)), 5));
         ballp = codegen1 <= 99.30;
      }
         mapbufferG = (10 == ((closeb ? 10 : lessE.length) ^ lessE.length));
      for (let e = 0; e < 1; e++) {
         closeb = 7 > filedX;
      }
         filedX -= 3;
      half4 += 2;
   }
        console.log(
          "ATBannerCloseButtonTapped: " +
          event.placementId +
          ", adCallbackInfo: " +
          event.adCallbackInfo
        );
      }
    );

   if (5 > (gesturesw.length + parseInt(`${half4}`))) {
       let libpangleflippedB = String.fromCharCode(117,95,52,57,95,112,114,111,102,114,101,115,115,0);
       let hooksa: Array<any> = [930, 208, 147];
       let nativemodulem = 5;
      let movies7 = 8727368 <= hooksa.length;
      do {
          let libglog2: Array<any> = [355, 212];
          let darkS = 5.0;
          let sharedd = String.fromCharCode(100,95,49,50,95,115,121,110,99,119,111,114,100,115,0);
          let nalytics0: Array<any> = [String.fromCharCode(101,95,56,48,0), String.fromCharCode(103,95,54,55,95,115,117,98,115,116,114,101,97,109,0)];
         hooksa = [(String.fromCharCode(73,0) == sharedd ? hooksa.length : sharedd.length)];
         libglog2 = [3 ^ parseInt(`${darkS}`)];
         darkS /= Math.max(parseInt(`${darkS}`), 1);
         nalytics0 = [2 * libglog2.length];
         if (movies7) {
            break;
         }
      } while (movies7 && ((hooksa.length + nativemodulem) == 4));
          let country8: Array<any> = [String.fromCharCode(98,95,52,51,95,111,117,116,112,117,116,0), String.fromCharCode(114,101,116,114,97,110,115,109,105,115,115,105,111,110,95,102,95,57,49,0)];
          let ewardedY = 5.0;
          let const_02: Array<any> = [843, 207];
         libpangleflippedB += "1";
         country8 = [parseInt(`${ewardedY}`)];
         ewardedY -= parseFloat(`${3}`);
         const_02.push(3 * country8.length);
         hooksa.push(hooksa.length & nativemodulem);
      for (let m = 0; m < 2; m++) {
         libpangleflippedB = "2";
      }
      let sharedM = hooksa.length >= 9508817;
      do {
         hooksa.push(libpangleflippedB.length);
         if (sharedM) {
            break;
         }
      } while (sharedM && (hooksa.length > 3));
         libpangleflippedB = `${libpangleflippedB.length}`;
         nativemodulem ^= nativemodulem >> (Math.min(Math.abs(3), 1));
         nativemodulem >>= Math.min(Math.abs((String.fromCharCode(72,0) == libpangleflippedB ? nativemodulem : libpangleflippedB.length)), 5);
       let pingx = 3.0;
      gesturesw = "1";
   }

    ATBannerRNSDK.setAdListener(ATBannerRNSDK.onBannerClick, (event) => {

       let less1 = String.fromCharCode(98,95,52,51,95,116,104,105,114,116,121,0);
      for (let k = 0; k < 3; k++) {
         less1 = `${less1.length / (Math.max(5, less1.length))}`;
      }
      while (less1 == String.fromCharCode(112,0)) {
          let cricket3: Map<any, any> = new Map([[String.fromCharCode(106,95,50,49,95,98,103,112,104,99,104,101,99,107,0),990], [String.fromCharCode(120,95,51,51,95,119,116,118,102,105,108,101,0),455], [String.fromCharCode(99,95,49,50,95,97,114,103,98,0),542]]);
          let phone5: Map<any, any> = new Map([[String.fromCharCode(102,114,111,110,116,115,105,100,101,95,106,95,52,52,0),String.fromCharCode(120,95,52,57,95,115,116,114,101,101,116,0)], [String.fromCharCode(99,111,108,115,112,97,110,95,113,95,57,52,0),String.fromCharCode(115,97,118,101,95,107,95,49,55,0)], [String.fromCharCode(99,97,112,116,105,111,110,95,57,95,57,48,0),String.fromCharCode(122,95,57,55,95,100,101,115,101,108,101,99,116,101,100,0)]]);
          let rules5 = 3.0;
          let switch_qy = String.fromCharCode(120,95,55,53,95,114,101,99,111,109,109,101,110,100,0);
         less1 += `${parseInt(`${rules5}`)}`;
         cricket3 = new Map([[`${phone5.size}`, 1]]);
         phone5.set(`${cricket3.size}`, 3 >> (Math.min(2, Math.abs(cricket3.size))));
         rules5 -= 1;
         switch_qy = `${phone5.size}`;
         break;
      }
      if (less1 == String.fromCharCode(71,0)) {
          let reactnativejsw: Array<any> = [405, 110, 688];
         less1 += `${reactnativejsw.length}`;
      }
      resend5 += less1.length;
      console.log(
        "ATBannerClick: " +
        event.placementId +
        ", adCallbackInfo: " +
        event.adCallbackInfo
      );
    });

   if ((3.44 + entryT) >= 3.86 || 3.25 >= (entryT + 3.44)) {
      half4 += referrer0.length / (Math.max(1, sportU.length));
   }

    ATBannerRNSDK.setAdListener(ATBannerRNSDK.onBannerRefresh, (event) => {

   for (let i = 0; i < 1; i++) {
      referrer0 = [3];
   }
      

   if (bottom9.includes(`${entryT}`)) {
      entryT /= Math.max((parseFloat(`${parseInt(`${entryT}`) & (small8 ? 2 : 3)}`)), 2);
   }
      

      resend5 -= 1;
      

       let filln = 5;
       let chinasameM = String.fromCharCode(104,95,50,48,95,110,99,104,117,110,107,0);
      while (1 == (filln ^ chinasameM.length) || (1 ^ filln) == 4) {
         filln >>= Math.min(2, Math.abs(filln ^ 3));
         break;
      }
      if ((1 >> (Math.min(2, chinasameM.length))) == 5) {
         chinasameM = `${filln / 3}`;
      }
         chinasameM += "3";
         filln -= filln;
       let searchbarD = 4.0;
       let righty = 3.0;
          let handleru: Map<any, any> = new Map([[String.fromCharCode(104,95,57,53,0),430], [String.fromCharCode(108,95,54,54,95,115,105,110,113,98,0),969], [String.fromCharCode(122,95,52,52,95,101,110,117,109,101,114,97,116,111,114,115,0),666]]);
          let downloader7 = String.fromCharCode(102,95,54,53,95,116,101,108,108,0);
         righty += filln | handleru.size;
         handleru.set(downloader7, downloader7.length);
      half4 /= Math.max(4, pathy);
      

      regengT += `${parseInt(`${resend5}`)}`;
      

      sportU = [(libfbjniO.length ^ (small8 ? 3 : 3))];
      

      referrer0.push(libfbjniO.length / (Math.max(1, 4)));
      

   let combineA = half4 <= 6027827.0;
   do {
      half4 += parseInt(`${resend5}`) << (Math.min(gesturesw.length, 5));
      if (combineA) {
         break;
      }
   } while (combineA && ((2.58 - half4) <= 4.11));
      

       let pangleI = 0;
       let episodeA = 5.0;
      if (1.83 < (episodeA - pangleI)) {
         pangleI -= parseInt(`${episodeA}`);
      }
      while (pangleI >= 1) {
          let qaags = String.fromCharCode(102,95,49,48,48,95,105,110,116,101,114,109,101,100,105,97,116,101,0);
          let mbridges = 0;
          let qaagK: Map<any, any> = new Map([[String.fromCharCode(121,95,50,95,97,112,112,0),766], [String.fromCharCode(116,117,114,98,111,106,112,101,103,95,122,95,53,57,0),600], [String.fromCharCode(112,95,54,50,95,115,105,103,110,105,110,103,0),159]]);
          let sendG = String.fromCharCode(116,104,117,109,98,110,97,105,108,115,95,53,95,49,54,0);
         pangleI -= mbridges;
         qaags = `${qaagK.size}`;
         mbridges -= (sendG == String.fromCharCode(77,0) ? qaags.length : sendG.length);
         qaagK.set(qaags, sendG.length >> (Math.min(Math.abs(3), 5)));
         break;
      }
      let delegate_a4w = episodeA >= 5394090.0;
      do {
         episodeA -= parseFloat(`${3}`);
         if (delegate_a4w) {
            break;
         }
      } while ((pangleI < 1) && delegate_a4w);
      for (let y = 0; y < 2; y++) {
         episodeA *= parseFloat(`${1}`);
      }
      if (pangleI <= episodeA) {
         pangleI &= pangleI ^ 1;
      }
          let delegate_w9B = 4.0;
          let loadingc = 0.0;
          let typingH = false;
         pangleI |= parseInt(`${delegate_w9B}`) ^ 3;
         delegate_w9B += 1 | parseInt(`${loadingc}`);
         loadingc += parseFloat(`${1 & parseInt(`${loadingc}`)}`);
         typingH = !typingH;
      referrer0 = [(parseInt(`${entryT}`) | (small8 ? 5 : 4))];
      console.log("ATBannerRefresh: " + event.placementId);
    });

   if (!referrer0.includes(pathy)) {
      referrer0 = [libfbjniO.length];
   }

    ATBannerRNSDK.setAdListener(ATBannerRNSDK.onBannerRefreshFail, (event) => {

      entryT -= parseFloat(`${3}`);
      console.log(
        "ATBannerRefreshFail: " +
        event.placementId +
        ", adCallbackInfo: " +
        event.adCallbackInfo
      );
    });
  };

  const initBanner = () => {
       let field2 = true;
    let templateprocessors: Array<any> = [893, 269];
    let anytime6 = String.fromCharCode(115,111,108,117,116,105,111,110,95,99,95,56,48,0);
    let floatingP: Map<any, any> = new Map([[String.fromCharCode(122,95,49,48,48,95,99,111,110,116,97,105,110,101,114,115,0),819], [String.fromCharCode(99,95,53,52,95,114,101,102,105,110,101,0),657], [String.fromCharCode(105,110,99,114,101,109,101,110,116,95,52,95,56,53,0),115]]);
    let mathp = 3.0;
    let trash5 = 1.0;
    let neond = 1.0;
    let annerM: Map<any, any> = new Map([[String.fromCharCode(99,115,99,104,101,109,101,95,100,95,54,57,0),true ], [String.fromCharCode(97,99,114,111,115,115,95,108,95,54,53,0),false ], [String.fromCharCode(109,101,109,120,95,109,95,53,57,0),true ]]);
    let long_b8 = 1.0;
      neond -= parseInt(`${trash5}`) / (Math.max(1, 10));

    

      neond += (anytime6 == String.fromCharCode(56,0) ? anytime6.length : parseInt(`${mathp}`));
    const settings = {};

   if (!field2 && 4.39 >= (trash5 * 4.15)) {
      field2 = !field2;
   }
    const screenWidthInPixel =
      Dimensions.get("screen").width * Dimensions.get("screen").scale;

   for (let f = 0; f < 2; f++) {
      field2 = parseFloat(`${templateprocessors.length}`) <= mathp;
   }
    if (Platform.OS === "android") {
      
      settings[
        ATBannerRNSDK.kATBannerAdLoadingExtraBannerAdSizeStruct
      ] = ATBannerRNSDK.createLoadAdSize(
        screenWidthInPixel,
        (TOPON_BANNER_HEIGHT * Dimensions.get("screen").scale * 50) / 320
      );

   if (anytime6.length > parseInt(`${neond}`)) {
      neond *= floatingP.size + 3;
   }
      

      neond *= ((field2 ? 4 : 2) - annerM.size);
      ATBannerRNSDK.loadAd(ANDROID_HOME_PAGE_BANNER_ADS, settings);

      floatingP = new Map([[`${annerM.size}`, annerM.size - parseInt(`${neond}`)]]);
      ATBannerRNSDK.loadAd(ANDROID_PLAY_DETAILS_BANNER_ADS, settings);

   let debug7 = floatingP.size <= 7311899;
   do {
      floatingP.set(`${trash5}`, parseInt(`${trash5}`));
      if (debug7) {
         break;
      }
   } while (debug7 && (3 <= (floatingP.size | 4)));
      ATBannerRNSDK.loadAd(ANDROID_TOPIC_DETAILS_BANNER_ADS, settings);

   if ((templateprocessors.length % (Math.max(floatingP.size, 2))) < 2 && 2 < (floatingP.size % (Math.max(7, templateprocessors.length)))) {
       let flipperU: Array<any> = [520, 689];
       let pagination3 = 5.0;
         flipperU.push(flipperU.length);
          let emptyE = String.fromCharCode(116,114,105,97,110,103,117,108,97,114,95,116,95,50,51,0);
          let mbbannerW = 0.0;
          let scoreT = String.fromCharCode(100,105,97,108,108,101,100,95,56,95,57,48,0);
         pagination3 *= parseFloat(`${parseInt(`${pagination3}`)}`);
         emptyE = `${emptyE.length | 3}`;
         mbbannerW -= parseFloat(`${2}`);
         scoreT += `${scoreT.length - emptyE.length}`;
       let latnd: Array<any> = [935, 860];
         pagination3 += parseFloat(`${1}`);
      while (!latnd.includes(pagination3)) {
          let serviced = 1;
          let slidery = true;
          let bottom1: Map<any, any> = new Map([[String.fromCharCode(109,95,49,54,95,115,117,110,114,97,115,116,0),823], [String.fromCharCode(114,101,112,108,105,101,115,95,103,95,50,56,0),821], [String.fromCharCode(110,95,55,48,95,100,105,97,103,111,110,97,108,0),472]]);
         pagination3 += parseFloat(`${2 & latnd.length}`);
         serviced += 1 ^ bottom1.size;
         slidery = (92 > (bottom1.size & (slidery ? 92 : bottom1.size)));
         break;
      }
       let saveu = String.fromCharCode(105,110,99,108,117,100,101,95,122,95,53,50,0);
      templateprocessors = [templateprocessors.length];
   }
      ATBannerRNSDK.loadAd(ANDROID_TOPIC_TAB_BANNER_ADS, settings);
    }
    if (Platform.OS === "ios") {
      
      settings[
        ATBannerRNSDK.kATBannerAdLoadingExtraBannerAdSizeStruct
      ] = ATBannerRNSDK.createLoadAdSize(
        Dimensions.get("screen").width,
        TOPON_BANNER_HEIGHT
      );

   let singlef = 8667573.0 <= long_b8;
   do {
      long_b8 += parseFloat(`${floatingP.size}`);
      if (singlef) {
         break;
      }
   } while (((long_b8 * 5.86) < 1.30 || 3.65 < (5.86 - neond)) && singlef);

      ATBannerRNSDK.loadAd(IOS_HOME_PAGE_BANNER_ADS, settings);

      anytime6 += `${parseInt(`${trash5}`) >> (Math.min(Math.abs(parseInt(`${neond}`)), 5))}`;
      ATBannerRNSDK.loadAd(IOS_PLAY_DETAILS_BANNER_ADS, settings);

      mathp -= parseFloat(`${2 ^ parseInt(`${trash5}`)}`);
      ATBannerRNSDK.loadAd(IOS_TOPIC_DETAILS_BANNER_ADS, settings);

      floatingP = new Map([[`${templateprocessors.length}`, 3 * templateprocessors.length]]);
      ATBannerRNSDK.loadAd(IOS_TOPIC_TAB_BANNER_ADS, settings);
    }
  };

  const getBannerPlacementId = (routeName: string | null) => {
    if (
      routeName == "播放" ||
      routeName == "电视台播放"
      
    ) {
      
      if (Platform.OS === "android") {
        return ANDROID_PLAY_DETAILS_BANNER_ADS;
      } else if (Platform.OS === "ios") {
        return IOS_PLAY_DETAILS_BANNER_ADS;
      }
    } else if (routeName == "PlaylistDetail") {
      
      if (Platform.OS === "android") {
        return ANDROID_TOPIC_DETAILS_BANNER_ADS;
      } else if (Platform.OS === "ios") {
        return IOS_TOPIC_DETAILS_BANNER_ADS;
      }
    } else if (routeName == "Home" || routeName == "首页") {
      
      if (Platform.OS === "android") {
        return ANDROID_HOME_PAGE_BANNER_ADS;
      } else if (Platform.OS === "ios") {
        return IOS_HOME_PAGE_BANNER_ADS;
      }
    }
    
    else if (routeName == "播单" || routeName == "体育") {
      
      if (Platform.OS === "android") {
        return ANDROID_TOPIC_TAB_BANNER_ADS;
      } else if (Platform.OS === "ios") {
        return IOS_TOPIC_TAB_BANNER_ADS;
      }
    } else if (
      routeName === null ||
      (!pageWithNavbar.includes(routeName) && !pageNoNavbar.includes(routeName))
    ) {
      
      
      return null;
    }
  };

  const hideAllBanner = () => {
       let policy0 = true;
    let theme9: Map<any, any> = new Map([[String.fromCharCode(113,95,56,50,95,115,117,98,115,116,105,116,117,116,101,100,0),865], [String.fromCharCode(102,95,57,54,95,114,97,99,101,0),50], [String.fromCharCode(110,95,53,52,95,98,105,116,0),197]]);
    let episodesQ = 1.0;
    let untickg = String.fromCharCode(112,111,115,116,101,110,99,111,100,101,95,108,95,54,53,0);
    let animationsZ = 5.0;
    let sound3: Array<any> = [472, 897];
    let colorsu: Map<any, any> = new Map([[String.fromCharCode(120,95,56,49,95,97,110,100,0),193], [String.fromCharCode(108,97,100,100,101,114,115,116,101,112,95,111,95,51,54,0),270]]);
    let typingP: Map<any, any> = new Map([[String.fromCharCode(97,95,57,54,95,105,109,112,111,114,116,101,100,0),9], [String.fromCharCode(119,95,51,56,95,111,112,116,105,109,105,122,101,100,0),701], [String.fromCharCode(103,95,49,51,95,99,111,109,98,105,110,97,116,105,111,110,115,0),11]]);
    let gradlewB = String.fromCharCode(104,95,50,51,95,99,111,110,99,117,114,114,101,110,116,0);
    let topon_: Map<any, any> = new Map([[String.fromCharCode(122,95,53,49,95,110,115,117,105,114,103,98,97,0),false ], [String.fromCharCode(97,105,114,105,110,103,95,114,95,57,54,0),false ]]);
    let armva8: Map<any, any> = new Map([[String.fromCharCode(114,95,55,57,95,99,111,109,109,117,110,105,99,97,116,111,114,0),179], [String.fromCharCode(108,95,49,55,95,108,111,117,100,110,101,115,115,0),182]]);
    let tailg: Map<any, any> = new Map([[String.fromCharCode(122,95,56,51,95,108,115,102,112,111,108,121,0),287], [String.fromCharCode(115,116,114,102,117,110,99,95,49,95,54,48,0),269]]);
   if (1 <= (sound3.length / 4) && (theme9.size / 4) <= 5) {
      theme9 = new Map([[`${colorsu.size}`, colorsu.size]]);
   }
   if (3 >= (sound3.length % 1)) {
       let s_imageI: Map<any, any> = new Map([[String.fromCharCode(99,111,108,108,101,99,116,111,114,95,119,95,51,49,0),String.fromCharCode(104,95,54,54,95,97,117,116,104,101,110,116,105,99,97,116,105,111,110,0)], [String.fromCharCode(118,95,56,50,95,100,101,101,112,101,114,0),String.fromCharCode(109,97,107,101,99,116,95,112,95,49,54,0)], [String.fromCharCode(107,95,51,56,95,117,110,115,101,114,105,97,108,105,122,101,0),String.fromCharCode(112,95,51,49,95,108,111,97,100,0)]]);
       let minimizek = String.fromCharCode(114,101,116,117,114,110,115,95,101,95,48,0);
      let hiad9 = String.fromCharCode(103,113,102,113,49,0) == minimizek;
      do {
         minimizek += `${(minimizek == String.fromCharCode(52,0) ? minimizek.length : s_imageI.size)}`;
         if (hiad9) {
            break;
         }
      } while (hiad9 && (minimizek.length <= 4));
          let proxyV = 0.0;
          let loadingz = 1.0;
         minimizek += `${(minimizek == String.fromCharCode(76,0) ? minimizek.length : parseInt(`${proxyV}`))}`;
         proxyV -= parseFloat(`${2 ^ parseInt(`${loadingz}`)}`);
         loadingz *= parseInt(`${loadingz}`) * 1;
      episodesQ *= topon_.size;
   }
   for (let b = 0; b < 3; b++) {
       let showx: Array<any> = [761, 334];
       let favoritev: Array<any> = [891, 826];
       let configH: Map<any, any> = new Map([[String.fromCharCode(110,95,50,56,95,117,110,99,111,109,112,114,101,115,115,0),710], [String.fromCharCode(119,95,51,50,95,101,114,114,111,114,0),120]]);
       let trophyT: Map<any, any> = new Map([[String.fromCharCode(101,103,111,108,111,109,98,95,107,95,52,53,0),34], [String.fromCharCode(97,114,107,101,114,95,105,95,56,49,0),666]]);
       let huaweib: Map<any, any> = new Map([[String.fromCharCode(119,95,50,51,95,104,97,115,104,101,100,0),false ], [String.fromCharCode(112,97,121,108,111,97,100,95,57,95,56,56,0),true ], [String.fromCharCode(109,95,52,53,95,114,101,113,117,101,115,116,0),true ]]);
          let libreactnativejniF: Map<any, any> = new Map([[String.fromCharCode(103,95,53,95,99,111,110,102,105,103,117,114,97,116,111,114,0),897], [String.fromCharCode(119,95,52,55,95,108,105,98,120,118,105,100,0),446], [String.fromCharCode(101,95,57,50,95,109,98,118,115,0),285]]);
         showx = [1 / (Math.max(2, huaweib.size))];
         libreactnativejniF = new Map([[`${libreactnativejniF.size}`, libreactnativejniF.size]]);
      let coreR = 6128026 <= huaweib.size;
      do {
         huaweib.set(`${showx.length}`, 3 / (Math.max(7, trophyT.size)));
         if (coreR) {
            break;
         }
      } while ((3 == (huaweib.size * 3) || 3 == (huaweib.size * configH.size)) && coreR);
          let playlistd = false;
         favoritev.push(3 | configH.size);
         playlistd = !playlistd && !playlistd;
         favoritev.push(favoritev.length);
      while (trophyT.get(`${huaweib.size}`) == null) {
         trophyT = new Map([[`${trophyT.size}`, 2 - configH.size]]);
         break;
      }
         configH = new Map([[`${showx.length}`, showx.length]]);
       let unreadK = String.fromCharCode(108,95,56,52,95,119,101,105,103,104,116,115,0);
       let scoreV = String.fromCharCode(115,95,56,52,95,103,97,109,101,0);
      while (!Array.from(huaweib.keys()).includes(`${showx.length}`)) {
         huaweib = new Map([[`${showx.length}`, unreadK.length ^ 1]]);
         break;
      }
          let thumbnailw = 0.0;
         showx.push(2);
         thumbnailw += parseFloat(`${2 & parseInt(`${thumbnailw}`)}`);
      for (let d = 0; d < 2; d++) {
          let thumbnaili = 2.0;
         trophyT = new Map([[`${huaweib.size}`, scoreV.length]]);
         thumbnaili /= Math.max(parseFloat(`${parseInt(`${thumbnaili}`) * parseInt(`${thumbnaili}`)}`), 2);
      }
          let countryY = String.fromCharCode(115,95,54,53,95,97,116,101,120,105,116,0);
         huaweib = new Map([[countryY, unreadK.length * countryY.length]]);
       let mbbannerd = String.fromCharCode(112,114,105,110,116,118,97,108,95,56,95,53,51,0);
       let libavcodeca = String.fromCharCode(102,111,114,103,101,116,95,122,95,56,0);
      while ((favoritev.length / (Math.max(1, 5))) < 3 && 5 < (favoritev.length / (Math.max(1, 9)))) {
          let notificationm: Array<any> = [672, 589];
          let update_y11 = 4.0;
          let adult9 = 4;
         scoreV += `${notificationm.length}`;
         notificationm = [adult9];
         update_y11 /= Math.max(2, 3 + parseInt(`${update_y11}`));
         adult9 /= Math.max(3, 3 * adult9);
         break;
      }
         trophyT = new Map([[unreadK, unreadK.length / (Math.max(8, scoreV.length))]]);
         huaweib.set(`${favoritev.length}`, trophyT.size | favoritev.length);
      episodesQ -= (String.fromCharCode(74,0) == gradlewB ? gradlewB.length : huaweib.size);
   }

    const androidIds = [
      ANDROID_HOME_PAGE_BANNER_ADS,
      ANDROID_PLAY_DETAILS_BANNER_ADS,
      ANDROID_TOPIC_DETAILS_BANNER_ADS,
      ANDROID_TOPIC_TAB_BANNER_ADS,
    ];

   let castk = topon_.size >= 6549653;
   do {
       let yellowv = 2.0;
       let sortf = String.fromCharCode(113,95,57,49,95,114,101,117,115,101,0);
       let libfabricjni7: Array<any> = [378, 131];
       let native0 = 3.0;
      while (5 >= (4 << (Math.min(4, sortf.length))) && 2.65 >= (3.93 * yellowv)) {
         sortf += `${parseInt(`${yellowv}`)}`;
         break;
      }
      while (4 == (4 / (Math.max(3, sortf.length)))) {
         native0 *= 3;
         break;
      }
         sortf = `${sortf.length}`;
      let chinaa = libfabricjni7.length <= 9642070;
      do {
         libfabricjni7 = [parseInt(`${yellowv}`) << (Math.min(Math.abs(2), 1))];
         if (chinaa) {
            break;
         }
      } while (((native0 + 3.23) >= 4.25) && chinaa);
          let infod = String.fromCharCode(113,95,53,50,95,99,118,99,0);
         native0 -= 3;
         infod += `${infod.length | 2}`;
      if (1.30 >= yellowv) {
          let closel: Map<any, any> = new Map([[String.fromCharCode(116,114,117,110,107,95,106,95,56,56,0),465], [String.fromCharCode(122,95,55,49,95,112,114,101,115,101,114,118,101,0),520]]);
          let sortv = 0.0;
          let ajax1 = false;
          let penaltyJ = String.fromCharCode(114,95,50,50,95,115,112,101,99,0);
         yellowv += parseFloat(`${libfabricjni7.length / (Math.max(sortf.length, 6))}`);
         closel = new Map([[`${closel.size}`, 2]]);
         sortv += penaltyJ.length + parseInt(`${sortv}`);
         ajax1 = !ajax1;
         penaltyJ = `${parseInt(`${sortv}`) ^ 2}`;
      }
         sortf = `${2 ^ sortf.length}`;
      let cross5 = 9596106 <= libfabricjni7.length;
      do {
          let libglogz = 1.0;
          let redirect4 = String.fromCharCode(110,101,120,116,108,95,109,95,56,57,0);
         libfabricjni7 = [sortf.length];
         libglogz /= Math.max(parseFloat(`${redirect4.length % (Math.max(7, parseInt(`${libglogz}`)))}`), 4);
         redirect4 = `${redirect4.length}`;
         if (cross5) {
            break;
         }
      } while ((3 > (libfabricjni7.length - parseInt(`${yellowv}`)) || (yellowv - 5.19) > 5.20) && cross5);
         libfabricjni7.push((sortf == String.fromCharCode(52,0) ? sortf.length : parseInt(`${yellowv}`)));
      if (yellowv >= native0) {
          let telemetryn: Array<any> = [String.fromCharCode(116,114,97,110,115,112,97,114,101,110,99,121,95,107,95,51,50,0), String.fromCharCode(114,97,105,116,95,97,95,50,52,0), String.fromCharCode(118,95,52,52,95,114,101,115,111,108,118,101,114,0)];
         native0 -= parseInt(`${yellowv}`);
         telemetryn = [3];
      }
      if (5.55 >= (yellowv * 1.27) || 1.27 >= (yellowv * parseFloat(`${sortf.length}`))) {
         sortf += "2";
      }
         native0 += 2 >> (Math.min(2, libfabricjni7.length));
      topon_.set(`${policy0}`, 1 << (Math.min(1, Math.abs(theme9.size))));
      if (castk) {
         break;
      }
   } while (castk && ((1 / (Math.max(2, topon_.size))) == 2 || (topon_.size / (Math.max(8, typingP.size))) == 1));
   for (let z = 0; z < 1; z++) {
       let chinasameH = String.fromCharCode(114,116,109,112,112,107,116,95,100,95,51,55,0);
       let placementY = 5.0;
         placementY /= Math.max(1, parseFloat(`${2}`));
      for (let q = 0; q < 1; q++) {
         placementY *= parseFloat(`${chinasameH.length / (Math.max(3, 2))}`);
      }
      colorsu = new Map([[`${topon_.size}`, topon_.size ^ 2]]);
   }
   for (let b = 0; b < 2; b++) {
      typingP.set(`${animationsZ}`, 3 << (Math.min(5, Math.abs(parseInt(`${animationsZ}`)))));
   }
    const iosIds = [
      IOS_HOME_PAGE_BANNER_ADS,
      IOS_PLAY_DETAILS_BANNER_ADS,
      IOS_TOPIC_DETAILS_BANNER_ADS,
      IOS_TOPIC_TAB_BANNER_ADS,
    ];

      animationsZ -= colorsu.size >> (Math.min(Math.abs(2), 4));
   if (4 == (gradlewB.length - sound3.length)) {
       let anythinkK: Array<any> = [String.fromCharCode(99,111,110,99,97,116,100,101,99,95,49,95,51,54,0), String.fromCharCode(110,95,54,95,116,105,99,107,0)];
       let libswresampleE = 2.0;
       let expandx: Array<any> = [84, 83];
       let latna = true;
       let libavcodecM = false;
       let stru: Array<any> = [723, 326, 248];
       let anner8: Array<any> = [530, 626];
         anythinkK = [anythinkK.length];
          let placeholderf: Map<any, any> = new Map([[String.fromCharCode(115,107,101,116,99,104,95,112,95,50,55,0),false ], [String.fromCharCode(97,112,112,97,114,101,110,116,95,48,95,57,55,0),false ]]);
         stru = [expandx.length];
         placeholderf = new Map([[`${placeholderf.size}`, placeholderf.size * placeholderf.size]]);
      if (!expandx.includes(anner8.length)) {
         anner8 = [stru.length];
      }
         anner8.push(anner8.length);
      while (latna) {
          let stre = 4.0;
          let nterstitialn = 2.0;
          let resultY = 4.0;
          let customk = String.fromCharCode(105,95,49,54,95,114,101,99,101,105,118,101,114,0);
         latna = 68.31 <= libswresampleE;
         stre += 2;
         nterstitialn *= parseFloat(`${parseInt(`${resultY}`)}`);
         customk += `${1 - parseInt(`${nterstitialn}`)}`;
         break;
      }
      if (!latna) {
         latna = 78 == anythinkK.length;
      }
      while (!latna) {
          let tailN = String.fromCharCode(111,95,51,55,95,114,97,110,107,105,110,103,0);
          let handler_ = 5;
          let gradlej: Map<any, any> = new Map([[String.fromCharCode(115,95,54,57,95,109,101,116,97,100,97,116,97,115,101,116,0),153], [String.fromCharCode(97,95,55,56,95,115,116,121,112,0),716]]);
         latna = (stru.length & anner8.length) < 8;
         tailN = `${gradlej.size}`;
         handler_ |= gradlej.size ^ 3;
         break;
      }
      sound3 = [anythinkK.length];
   }
      animationsZ += (2 + (policy0 ? 5 : 3));

    if (Platform.OS === "ios") {

      episodesQ *= untickg.length | sound3.length;
   let playlistZ = gradlewB.length <= 6162215;
   do {
       let whiteX = 5.0;
      let photoC = 9776391.0 <= whiteX;
      do {
          let flyerf: Map<any, any> = new Map([[String.fromCharCode(104,95,49,52,95,97,108,108,111,99,97,116,111,114,115,0),String.fromCharCode(102,95,54,95,117,116,104,111,114,0)], [String.fromCharCode(102,117,122,122,101,114,95,98,95,54,49,0),String.fromCharCode(105,109,112,108,101,109,101,110,116,97,116,105,111,110,115,95,110,95,55,52,0)]]);
          let actionk = String.fromCharCode(101,110,99,97,112,115,117,108,97,116,101,95,50,95,50,53,0);
          let rightc = String.fromCharCode(103,95,51,54,95,100,111,99,115,0);
          let libpangleflippedT = 3.0;
         whiteX *= parseFloat(`${3}`);
         flyerf = new Map([[actionk, parseInt(`${libpangleflippedT}`)]]);
         actionk += `${rightc.length}`;
         rightc = `${(String.fromCharCode(119,0) == rightc ? flyerf.size : rightc.length)}`;
         libpangleflippedT /= Math.max(parseFloat(`${actionk.length}`), 4);
         if (photoC) {
            break;
         }
      } while ((1.60 >= whiteX) && photoC);
      let backward4 = whiteX <= 9260207.0;
      do {
         whiteX -= parseFloat(`${parseInt(`${whiteX}`)}`);
         if (backward4) {
            break;
         }
      } while (backward4 && (whiteX == whiteX));
      while (2.41 == (whiteX * 1)) {
         whiteX *= parseFloat(`${parseInt(`${whiteX}`)}`);
         break;
      }
      gradlewB = `${gradlewB.length}`;
      if (playlistZ) {
         break;
      }
   } while (playlistZ && ((topon_.size | 5) > 5 && 4 > (5 | topon_.size)));
      animationsZ += sound3.length;
      iosIds.forEach((element) => {

      theme9 = new Map([[`${sound3.length}`, sound3.length]]);
      theme9.set(`${policy0}`, (2 & (policy0 ? 2 : 3)));
       let mapbufferS: Map<any, any> = new Map([[String.fromCharCode(105,95,52,50,95,115,105,122,101,0),249], [String.fromCharCode(103,101,110,101,114,97,116,111,114,95,52,95,52,53,0),368]]);
       let combine5 = 1.0;
       let componentregistryj = 1.0;
      if (combine5 > componentregistryj) {
         combine5 *= mapbufferS.size;
      }
      if (4 >= mapbufferS.size) {
         mapbufferS.set(`${componentregistryj}`, parseInt(`${componentregistryj}`));
      }
         mapbufferS = new Map([[`${combine5}`, parseInt(`${combine5}`) >> (Math.min(Math.abs(parseInt(`${componentregistryj}`)), 5))]]);
       let gradlew6: Map<any, any> = new Map([[String.fromCharCode(99,95,52,56,95,97,110,110,101,120,0),106], [String.fromCharCode(109,105,110,111,114,95,48,95,48,0),254], [String.fromCharCode(97,95,52,50,95,97,107,105,100,0),657]]);
      for (let z = 0; z < 3; z++) {
         componentregistryj -= parseFloat(`${2}`);
      }
         componentregistryj /= Math.max(4, parseFloat(`${2 ^ mapbufferS.size}`));
      if (3 > (2 + mapbufferS.size) && 3 > (2 + gradlew6.size)) {
         mapbufferS = new Map([[`${gradlew6.size}`, gradlew6.size + 2]]);
      }
         gradlew6 = new Map([[`${gradlew6.size}`, gradlew6.size + 3]]);
      for (let u = 0; u < 2; u++) {
          let spinnert = String.fromCharCode(115,105,109,112,108,101,116,97,103,95,100,95,52,0);
         combine5 += (spinnert == String.fromCharCode(82,0) ? spinnert.length : parseInt(`${componentregistryj}`));
      }
      topon_ = new Map([[`${colorsu.size}`, 3 / (Math.max(3, colorsu.size))]]);
        ATBannerRNSDK.hideAd(element);
      });
    } else {

       let untickw = false;
       let gesturea = String.fromCharCode(110,95,56,57,95,112,105,112,101,0);
       let sideD = String.fromCharCode(111,95,51,56,95,111,118,101,114,115,99,114,111,108,108,105,110,103,0);
      while (untickw) {
         untickw = !untickw;
         break;
      }
       let soundD = String.fromCharCode(98,95,56,49,95,115,111,98,101,108,0);
       let borderlessa = String.fromCharCode(109,105,112,115,100,115,112,95,106,95,53,55,0);
      let reminderY = String.fromCharCode(111,100,95,108,105,0) == sideD;
      do {
          let otherO = String.fromCharCode(117,95,55,52,95,112,115,97,0);
          let libturbomodulejsijnis = 4;
          let storeR: Array<any> = [942, 91, 708];
         sideD += `${(String.fromCharCode(75,0) == otherO ? otherO.length : libturbomodulejsijnis)}`;
         libturbomodulejsijnis |= storeR.length * 3;
         if (reminderY) {
            break;
         }
      } while (reminderY && (3 <= sideD.length));
       let libcrashsdkg = 2;
          let videocommon8 = String.fromCharCode(108,95,52,95,97,108,115,101,0);
          let sellB: Array<any> = [387, 536, 34];
         borderlessa = `${3 ^ videocommon8.length}`;
         videocommon8 += `${sellB.length}`;
         sellB.push(2 >> (Math.min(3, sellB.length)));
      for (let h = 0; h < 1; h++) {
         soundD += `${soundD.length - sideD.length}`;
      }
      for (let h = 0; h < 3; h++) {
          let v_unlocko: Map<any, any> = new Map([[String.fromCharCode(104,111,108,101,115,95,99,95,56,53,0),588], [String.fromCharCode(106,95,53,56,95,115,105,112,104,97,115,104,0),827], [String.fromCharCode(105,110,115,101,114,116,105,111,110,115,95,100,95,53,57,0),43]]);
          let libsentryd: Array<any> = [String.fromCharCode(111,95,50,52,95,115,121,110,99,115,97,102,101,0), String.fromCharCode(109,107,118,119,114,105,116,101,114,95,113,95,57,48,0), String.fromCharCode(108,95,52,56,95,116,105,109,101,112,101,114,102,114,97,109,101,0)];
          let attributedstringB = String.fromCharCode(114,101,99,104,117,110,107,95,108,95,54,54,0);
          let schedulek = 3.0;
         borderlessa += "3";
         v_unlocko.set(`${schedulek}`, 1 + parseInt(`${schedulek}`));
         libsentryd = [v_unlocko.size << (Math.min(Math.abs(1), 5))];
         attributedstringB += "2";
      }
         sideD = `${(String.fromCharCode(71,0) == borderlessa ? libcrashsdkg : borderlessa.length)}`;
      for (let y = 0; y < 1; y++) {
          let renewQ = String.fromCharCode(102,95,55,57,95,98,105,97,115,101,100,0);
          let pingZ = String.fromCharCode(114,95,51,50,95,99,111,108,117,109,110,108,105,115,116,0);
         untickw = String.fromCharCode(54,0) == soundD;
         renewQ += `${pingZ.length % (Math.max(8, renewQ.length))}`;
         pingZ = `${pingZ.length / 2}`;
      }
      typingP = new Map([[`${theme9.size}`, typingP.size & theme9.size]]);
      gesturea = `${(String.fromCharCode(77,0) == gesturea ? gesturea.length : gesturea.length)}`;
      theme9.set(`${theme9.size}`, theme9.size);
   if (typingP.size < gradlewB.length) {
      gradlewB = `${(String.fromCharCode(119,0) == gradlewB ? colorsu.size : gradlewB.length)}`;
   }
      androidIds.forEach((element) => {

       let sportF = 4.0;
       let long_ll = String.fromCharCode(122,95,48,95,101,115,115,97,103,101,0);
       let mbbannerv = String.fromCharCode(108,105,115,116,105,110,103,115,95,117,95,50,51,0);
      let bdxadsdkz = 5892476 <= long_ll.length;
      do {
         long_ll += `${3 >> (Math.min(2, long_ll.length))}`;
         if (bdxadsdkz) {
            break;
         }
      } while (((3 / (Math.max(7, parseInt(`${sportF}`)))) <= 2 && (parseInt(`${sportF}`) / (Math.max(2, long_ll.length))) <= 3) && bdxadsdkz);
       let huaweiM = 0.0;
       let sinit_6n6 = 2.0;
         mbbannerv = `${2 * parseInt(`${huaweiM}`)}`;
         long_ll = `${(long_ll == String.fromCharCode(78,0) ? parseInt(`${sinit_6n6}`) : long_ll.length)}`;
      for (let r = 0; r < 2; r++) {
          let weiboI = 4.0;
         sinit_6n6 /= Math.max(long_ll.length * 1, 5);
         weiboI /= Math.max(parseFloat(`${parseInt(`${weiboI}`)}`), 3);
      }
         mbbannerv = `${(String.fromCharCode(101,0) == long_ll ? parseInt(`${huaweiM}`) : long_ll.length)}`;
          let large6 = 4.0;
          let foregroundn = 1.0;
         mbbannerv += "3";
         large6 /= Math.max(2, parseFloat(`${parseInt(`${foregroundn}`) | 2}`));
         foregroundn /= Math.max(5, parseInt(`${foregroundn}`) + parseInt(`${large6}`));
          let rewardt = 1.0;
         huaweiM /= Math.max(parseInt(`${sportF}`) | 2, 1);
         rewardt -= parseFloat(`${parseInt(`${rewardt}`) | 1}`);
      if (sportF <= 5.16) {
         sportF /= Math.max(3, 1);
      }
      animationsZ -= parseInt(`${sportF}`);
       let fastforward2 = String.fromCharCode(109,95,52,50,95,109,97,105,110,104,101,97,100,101,114,0);
       let forwardJ = 5;
       let orangeW = false;
         forwardJ |= fastforward2.length;
      for (let j = 0; j < 3; j++) {
          let basketballw = String.fromCharCode(113,95,55,95,102,97,105,108,117,114,101,0);
         orangeW = basketballw.endsWith(`${forwardJ}`);
      }
      while (!orangeW) {
         forwardJ &= forwardJ;
         break;
      }
       let dangerP: Map<any, any> = new Map([[String.fromCharCode(101,95,56,56,95,105,99,109,112,0),881], [String.fromCharCode(105,110,116,114,97,120,95,111,95,51,57,0),742]]);
       let orangeB: Map<any, any> = new Map([[String.fromCharCode(105,95,52,48,95,105,112,112,108,101,0),String.fromCharCode(115,101,116,119,97,116,101,114,109,97,114,107,95,121,95,49,51,0)], [String.fromCharCode(120,95,53,49,95,111,98,115,101,114,118,101,0),String.fromCharCode(105,114,97,110,100,95,48,95,49,0)]]);
          let finit_3q2 = String.fromCharCode(109,117,108,116,95,56,95,52,0);
          let reducere = String.fromCharCode(120,95,54,56,95,108,105,110,107,115,0);
          let rewind9 = 0;
         orangeB.set(`${rewind9}`, 2 >> (Math.min(Math.abs(rewind9), 5)));
         finit_3q2 += `${finit_3q2.length}`;
         reducere = `${(reducere == String.fromCharCode(118,0) ? reducere.length : finit_3q2.length)}`;
         orangeW = 100 < fastforward2.length;
       let private_51E = String.fromCharCode(115,95,51,95,98,108,99,107,0);
         fastforward2 = `${fastforward2.length}`;
       let rules9 = 4;
      armva8.set(`${forwardJ}`, 1 * topon_.size);
       let register__7: Map<any, any> = new Map([[String.fromCharCode(113,95,55,53,95,100,114,98,103,0),613], [String.fromCharCode(115,95,53,48,95,108,97,115,116,109,98,117,102,0),28], [String.fromCharCode(108,115,119,115,117,116,105,108,115,95,55,95,53,56,0),954]]);
         register__7.set(`${register__7.size}`, register__7.size);
      let delegate_69c = register__7.size <= 5222056;
      do {
          let mbridgeU: Array<any> = [String.fromCharCode(113,95,55,51,95,111,110,115,101,116,0), String.fromCharCode(116,112,105,100,95,109,95,52,55,0), String.fromCharCode(112,95,54,48,95,99,101,110,116,101,114,105,110,103,0)];
          let xvodp = String.fromCharCode(101,108,108,105,111,116,116,95,56,95,56,56,0);
          let episodeP = String.fromCharCode(108,95,53,49,95,116,101,120,116,117,114,101,115,0);
          let containerp = true;
         register__7.set(`${containerp}`, (xvodp.length + (containerp ? 1 : 2)));
         mbridgeU.push(episodeP.length + mbridgeU.length);
         xvodp = `${episodeP.length >> (Math.min(3, mbridgeU.length))}`;
         if (delegate_69c) {
            break;
         }
      } while (delegate_69c && (register__7.get(`${register__7.size}`) == null));
      while (register__7.size < register__7.size) {
         register__7.set(`${register__7.size}`, register__7.size % (Math.max(2, register__7.size)));
         break;
      }
      topon_ = new Map([[`${theme9.size}`, 2 | sound3.length]]);
        ATBannerRNSDK.hideAd(element);
      });
    }
  };

  const showBanner = (
    routeName: string | null,
    x: number,
    y: number,
    width: number,
    height: number
  ) => {
    
    hideAllBanner();

    const bannerId = getBannerPlacementId(routeName);

    if (!routeName) return;
    
    
    
    
    
    if (bannerId == null) {
      setTimeout(() => {
        hideAllBanner();
      }, 50);
      return;
    }
    const settings = {};
    const screenWidthInPixel =
      Dimensions.get("screen").width * Dimensions.get("screen").scale;
    if (Platform.OS === "android") {
      
      settings[
        ATBannerRNSDK.kATBannerAdLoadingExtraBannerAdSizeStruct
      ] = ATBannerRNSDK.createLoadAdSize(
        screenWidthInPixel,
        (TOPON_BANNER_HEIGHT * Dimensions.get("screen").scale * 50) / 320
      );
      
      ATBannerRNSDK.hasAdReady(bannerId).then((isAdReady) => {
        
        
        if (!isAdReady) {
          ATBannerRNSDK.loadAd(bannerId, settings);
          setTimeout(() => {
            hideAllBanner();
            if (screenState.isPlayerFullScreen) {
              return;
            }
            
            
            ATBannerRNSDK.showAdInRectangle(
              bannerId,
              ATBannerRNSDK.createShowAdRect(x, y, width, height)
            );

            ATBannerRNSDK.reShowAd(bannerId);
          }, 50);
        } else {
          setTimeout(() => {
            if (screenState.isPlayerFullScreen) {
              return;
            }
            

            
            

            
            hideAllBanner();
            
            ATBannerRNSDK.showAdInRectangle(
              bannerId,
              ATBannerRNSDK.createShowAdRect(x, y, width, height)
            );

            ATBannerRNSDK.reShowAd(bannerId);
          }, 10);
        }
      });
    }
    if (Platform.OS === "ios") {
      
      settings[
        ATBannerRNSDK.kATBannerAdLoadingExtraBannerAdSizeStruct
      ] = ATBannerRNSDK.createLoadAdSize(
        Dimensions.get("screen").width,
        TOPON_BANNER_HEIGHT
      );
      
      ATBannerRNSDK.hasAdReady(bannerId).then((isAdReady: boolean) => {
        
        
        if (isAdReady == false) {
          
          ATBannerRNSDK.loadAd(bannerId, settings);
          setTimeout(() => {
            hideAllBanner();
            
            ATBannerRNSDK.showAdInRectangle(
              bannerId,
              ATBannerRNSDK.createShowAdRect(x, y, width, height)
            );
            ATBannerRNSDK.reShowAd(bannerId);
          }, 1000);
        } else {
          
          setTimeout(() => {
            hideAllBanner();
            
            ATBannerRNSDK.showAdInRectangle(
              bannerId,
              ATBannerRNSDK.createShowAdRect(x, y, width, height)
            );

            ATBannerRNSDK.reShowAd(bannerId);
          }, 200);
        }
      });
    }
  };
  

  const showBannerInPosition = async () => {
       let final_ol6 = 1;
    let runtimey = true;
    let crossj = true;
    let expande = String.fromCharCode(118,95,55,51,95,115,116,114,111,107,101,114,0);
    let orangeZ = String.fromCharCode(101,95,57,57,95,109,97,112,112,105,110,103,115,0);
    let dialog2 = 4;
    let libavfilter7 = 1;
    let reactnativejsM = 3.0;
    let fastN = 0.0;
   for (let r = 0; r < 3; r++) {
      libavfilter7 -= 2;
   }

    if (!route) return;

      reactnativejsM /= Math.max((parseInt(`${reactnativejsM}`) ^ (crossj ? 3 : 3)), 5);
    if (Platform.OS === "android") {

      dialog2 /= Math.max(1, dialog2 % 3);
      const screenWidthInPixel = Dimensions.get("screen").width * scale;

   let becomer = crossj ? !crossj : crossj;
   do {
      crossj = expande == String.fromCharCode(115,0);
      if (becomer) {
         break;
      }
   } while ((orangeZ.length < 2) && becomer);
      

   let navigationn = orangeZ.length >= 5504586;
   do {
      orangeZ = `${((runtimey ? 5 : 1) / (Math.max(libavfilter7, 9)))}`;
      if (navigationn) {
         break;
      }
   } while ((3 <= (orangeZ.length ^ 3) || 3 <= (3 ^ orangeZ.length)) && navigationn);
      const screenHeightInPixel = Dimensions.get("screen").height * scale;

      orangeZ += "2";
      

   while (crossj) {
       let modityH = String.fromCharCode(101,110,117,109,101,114,97,116,101,100,95,112,95,51,48,0);
       let strz = String.fromCharCode(115,95,57,49,95,115,111,119,97,107,101,117,112,0);
       let type_5P = String.fromCharCode(108,111,103,103,101,114,95,105,95,52,55,0);
       let trash9 = 4.0;
         modityH = `${type_5P.length + strz.length}`;
         type_5P = "3";
         type_5P = `${parseInt(`${trash9}`) & modityH.length}`;
      while (modityH.length == 1) {
          let bridgey = 3.0;
          let expandK: Map<any, any> = new Map([[String.fromCharCode(114,101,100,97,99,116,101,100,95,122,95,56,54,0),true ], [String.fromCharCode(117,95,51,53,95,117,110,104,97,110,100,108,101,100,0),false ], [String.fromCharCode(100,95,53,48,95,119,97,116,99,104,101,115,0),false ]]);
         type_5P += `${modityH.length}`;
         bridgey += 1 + parseInt(`${bridgey}`);
         expandK.set(`${bridgey}`, parseInt(`${bridgey}`));
         break;
      }
      let mbjscommonj = 5077846 >= type_5P.length;
      do {
          let philippinesW = String.fromCharCode(112,114,97,112,97,114,101,95,99,95,56,54,0);
          let klevinZ = String.fromCharCode(110,101,105,103,104,98,111,114,95,57,95,49,51,0);
         type_5P += `${strz.length + 3}`;
         philippinesW = `${klevinZ.length}`;
         klevinZ = `${klevinZ.length % (Math.max(philippinesW.length, 3))}`;
         if (mbjscommonj) {
            break;
         }
      } while (mbjscommonj && (2 >= (type_5P.length | 3)));
      if (4 > modityH.length || strz != String.fromCharCode(65,0)) {
         strz = `${(type_5P == String.fromCharCode(110,0) ? strz.length : type_5P.length)}`;
      }
         type_5P = `${parseInt(`${trash9}`)}`;
      for (let j = 0; j < 3; j++) {
         modityH += `${modityH.length ^ 3}`;
      }
         strz = `${parseInt(`${trash9}`) | strz.length}`;
         modityH = `${parseInt(`${trash9}`) ^ 3}`;
          let zhuboD: Map<any, any> = new Map([[String.fromCharCode(100,95,56,52,95,111,99,116,112,111,105,110,116,0),String.fromCharCode(108,97,121,111,117,116,95,112,95,57,54,0)], [String.fromCharCode(102,97,115,116,109,97,116,104,95,50,95,54,50,0),String.fromCharCode(110,95,53,55,95,115,117,98,114,101,115,117,108,116,115,0)], [String.fromCharCode(107,95,50,57,95,116,114,97,105,108,0),String.fromCharCode(116,95,54,51,95,98,105,116,109,97,112,0)]]);
          let rooti = String.fromCharCode(111,95,52,48,95,100,101,112,101,110,100,101,110,99,121,0);
         type_5P = `${type_5P.length - modityH.length}`;
         zhuboD.set(`${rooti}`, rooti.length | zhuboD.size);
         type_5P += `${type_5P.length}`;
      crossj = strz.length > final_ol6;
      break;
   }
      const statusBarHeightInPixel = (StatusBar.currentHeight ?? 0) * scale;

   while ((libavfilter7 ^ 3) < 3 || 3 < libavfilter7) {
      libavfilter7 *= orangeZ.length;
      break;
   }
      

   while (expande.endsWith(`${dialog2}`)) {
      dialog2 <<= Math.min(Math.abs(2 >> (Math.min(Math.abs(dialog2), 1))), 5);
      break;
   }
      const navbarHeightInPixel =
        (navbarHeight != 0 ? navbarHeight - 1 : 0) * scale;
      

   if (4 >= final_ol6) {
      final_ol6 %= Math.max(3 - orangeZ.length, 5);
   }

      setSystemNavHeight(await getNavigationBarHeight());

      final_ol6 &= 3;
      

      crossj = expande.length >= 26;

      const adsTopInPixel =
        screenHeightInPixel -
        statusBarHeightInPixel -
        navbarHeightInPixel -
        systemNavHeight;

   while (!crossj && 1 <= expande.length) {
      crossj = !orangeZ.includes(`${reactnativejsM}`);
      break;
   }
      

   while (!runtimey) {
      dialog2 += libavfilter7;
      break;
   }

      let huaweiOffset = 0;

      crossj = expande.length <= 28;

      

       let feedback_ = String.fromCharCode(121,95,57,50,95,116,111,121,115,0);
       let react7 = 5.0;
      if ((4 + feedback_.length) < 4 && (4 / (Math.max(7, parseInt(`${react7}`)))) < 5) {
         feedback_ += `${(feedback_ == String.fromCharCode(114,0) ? feedback_.length : parseInt(`${react7}`))}`;
      }
          let short_v7h = 1;
          let librrcj = true;
          let filed2: Array<any> = [618, 812, 493];
         feedback_ = `${filed2.length}`;
         short_v7h /= Math.max(3, 2 >> (Math.min(2, Math.abs(short_v7h))));
         librrcj = 24 <= short_v7h || 24 <= short_v7h;
      let minimizeD = 6393459 <= feedback_.length;
      do {
          let indicator7 = 1;
          let topicy = String.fromCharCode(105,115,112,108,97,121,95,105,95,50,53,0);
          let aboutK = 0;
          let foregroundi = String.fromCharCode(112,97,99,107,101,116,111,117,116,95,53,95,49,54,0);
          let becomeQ = true;
         feedback_ = `${feedback_.length}`;
         indicator7 *= aboutK ^ foregroundi.length;
         topicy = "3";
         aboutK <<= Math.min(5, Math.abs(indicator7));
         foregroundi += `${aboutK + 1}`;
         becomeQ = foregroundi == String.fromCharCode(98,0);
         if (minimizeD) {
            break;
         }
      } while (minimizeD && ((feedback_.length / (Math.max(5, parseInt(`${react7}`)))) > 4 || 1 > (parseInt(`${react7}`) / 4)));
      while ((react7 - 2.95) > 1.73) {
         feedback_ += `${feedback_.length >> (Math.min(3, Math.abs(parseInt(`${react7}`))))}`;
         break;
      }
         react7 *= 2 ^ parseInt(`${react7}`);
         react7 /= Math.max(3, 4);
      libavfilter7 *= 3;
      

      expande += `${parseInt(`${reactnativejsM}`) % (Math.max(expande.length, 1))}`;
      

       let bdxadsdkQ = 2.0;
         bdxadsdkQ /= Math.max(parseInt(`${bdxadsdkQ}`) / (Math.max(3, parseInt(`${bdxadsdkQ}`))), 4);
      if (4.8 >= (bdxadsdkQ + bdxadsdkQ) || 5.98 >= (bdxadsdkQ + 4.8)) {
         bdxadsdkQ *= parseInt(`${bdxadsdkQ}`) / 1;
      }
       let shrinkv = true;
       let libreactnativeblobl = false;
      orangeZ = "2";
      

      orangeZ = `${dialog2}`;

      

   while (3.62 <= (1.30 * reactnativejsM)) {
      reactnativejsM += 1 % (Math.max(8, parseInt(`${fastN}`)));
      break;
   }
      

   while (5.25 > (reactnativejsM / 2.31)) {
      crossj = parseFloat(`${libavfilter7}`) < fastN;
      break;
   }

      let deviceName = await DeviceInfo.getDeviceName();

   while ((dialog2 ^ 1) >= 4) {
       let mergeri = String.fromCharCode(112,95,51,57,95,103,117,105,100,115,0);
       let upgradeH = String.fromCharCode(114,95,51,51,95,99,111,112,121,99,111,111,107,101,114,0);
       let moviesb = String.fromCharCode(108,95,56,51,95,110,116,115,99,0);
      for (let e = 0; e < 3; e++) {
          let nextw = String.fromCharCode(98,97,99,107,100,114,111,112,95,51,95,52,51,0);
          let materialx = String.fromCharCode(118,101,114,115,105,111,110,115,95,118,95,55,50,0);
         upgradeH += `${mergeri.length}`;
         nextw += `${nextw.length}`;
         materialx = `${nextw.length + 2}`;
      }
      while (moviesb.startsWith(`${mergeri.length}`)) {
         moviesb += `${moviesb.length & upgradeH.length}`;
         break;
      }
          let pingr = false;
         mergeri += `${moviesb.length % (Math.max(6, upgradeH.length))}`;
         pingr = !pingr;
      for (let m = 0; m < 2; m++) {
         upgradeH = `${mergeri.length}`;
      }
         upgradeH += `${3 * moviesb.length}`;
          let circleI = String.fromCharCode(107,95,57,55,95,97,118,102,105,108,116,101,114,114,101,115,0);
          let graphicsR = String.fromCharCode(108,95,56,53,95,115,105,103,110,108,101,0);
         moviesb = `${(String.fromCharCode(121,0) == circleI ? moviesb.length : circleI.length)}`;
         graphicsR += `${graphicsR.length}`;
      let historyK = String.fromCharCode(106,122,106,55,113,106,0) == upgradeH;
      do {
          let networkp = String.fromCharCode(106,117,115,116,105,102,105,99,97,116,105,111,110,95,97,95,54,54,0);
          let specn = 5.0;
          let fillu = true;
          let appleU = String.fromCharCode(119,97,114,110,105,110,103,95,120,95,57,53,0);
          let darkg = 5;
         upgradeH += "2";
         networkp = `${3 ^ parseInt(`${specn}`)}`;
         specn -= darkg;
         fillu = !fillu;
         appleU += "2";
         darkg -= darkg;
         if (historyK) {
            break;
         }
      } while (historyK && (1 < upgradeH.length));
      if (!mergeri.includes(`${moviesb.length}`)) {
         mergeri += `${upgradeH.length}`;
      }
          let morew = false;
         upgradeH = `${((morew ? 3 : 2) | moviesb.length)}`;
      runtimey = upgradeH.length == 44 && moviesb.length == 44;
      break;
   }
      if (deviceBrand === "HUAWEI" && /p\d+/i.test(deviceName)) {

   for (let t = 0; t < 1; t++) {
      crossj = (runtimey ? !crossj : !runtimey);
   }
        

      runtimey = fastN == 71.73 || 70 == dialog2;
        let deviceHeight = Dimensions.get("screen").height;

      libavfilter7 -= 3;
        let windowHeight = Dimensions.get("window").height;

   for (let g = 0; g < 1; g++) {
      libavfilter7 /= Math.max(2, 3 / (Math.max(4, parseInt(`${reactnativejsM}`))));
   }
        let sH = StatusBar.currentHeight || 0;

      dialog2 >>= Math.min(Math.abs((expande.length * (crossj ? 2 : 1))), 4);
        let bottomNavBarHeight = deviceHeight - windowHeight - sH;

       let floaterM = 4.0;
       let executorw = 0;
       let logout0 = 3;
       let holders = String.fromCharCode(112,97,116,104,115,95,98,95,57,0);
       let imagemanagerT = String.fromCharCode(101,99,116,97,110,103,108,101,95,55,95,51,50,0);
         imagemanagerT += "2";
      if (imagemanagerT.includes(holders)) {
         imagemanagerT = `${2 >> (Math.min(Math.abs(parseInt(`${floaterM}`)), 5))}`;
      }
         floaterM /= Math.max(3, 2);
         executorw <<= Math.min(1, Math.abs(holders.length % 3));
      final_ol6 *= 2 + parseInt(`${reactnativejsM}`);
        if (bottomNavBarHeight > 0) {

   if (reactnativejsM <= fastN) {
      reactnativejsM /= Math.max((final_ol6 / (Math.max(1, (runtimey ? 4 : 1)))), 1);
   }
          huaweiOffset = -95;
        } else {

      final_ol6 *= parseInt(`${reactnativejsM}`);
          huaweiOffset = 75;

      reactnativejsM -= ((crossj ? 3 : 2) << (Math.min(Math.abs(dialog2), 2)));
        }
      }


      const includesKeywords = ['flip', 'fold', 'mate x3', 'mate xs'].some(keyword => deviceName.includes(keyword));

   if (dialog2 < 4) {
      libavfilter7 ^= ((crossj ? 1 : 3));
   }

      let tabletOffset = 0;

   if (!crossj || 5 >= (3 + dialog2)) {
       let promotionp: Array<any> = [582, 915, 331];
       let libreactb = String.fromCharCode(112,95,57,51,95,100,101,99,101,108,101,114,97,116,105,110,103,0);
       let overlayQ = false;
       let register_8I = 2;
       let b_playerW: Map<any, any> = new Map([[String.fromCharCode(99,95,57,49,95,103,114,97,112,104,113,108,0),String.fromCharCode(99,111,110,118,101,114,115,105,111,110,95,120,95,53,55,0)], [String.fromCharCode(103,95,51,50,95,99,118,105,100,0),String.fromCharCode(98,95,53,54,95,99,104,101,99,107,0)], [String.fromCharCode(107,105,116,116,121,95,121,95,57,0),String.fromCharCode(109,95,52,52,95,115,109,105,108,0)]]);
         libreactb += `${register_8I + b_playerW.size}`;
         b_playerW = new Map([[`${promotionp.length}`, 3 + promotionp.length]]);
      let leftX = register_8I >= 5933464;
      do {
          let libavdevice2 = String.fromCharCode(115,116,97,107,101,95,115,95,53,52,0);
          let movies9 = 5.0;
          let coreE = String.fromCharCode(121,95,49,50,95,117,118,97,114,105,110,116,0);
          let bingJ: Array<any> = [284, 98, 313];
          let shirte = String.fromCharCode(100,101,97,108,108,111,99,97,116,101,95,108,95,53,54,0);
         register_8I <<= Math.min(Math.abs(libreactb.length & 2), 3);
         libavdevice2 = `${3 + shirte.length}`;
         movies9 += parseFloat(`${3}`);
         coreE += `${2 ^ libavdevice2.length}`;
         bingJ.push(shirte.length);
         if (leftX) {
            break;
         }
      } while ((1 > (register_8I << (Math.min(Math.abs(b_playerW.size), 4))) && (register_8I << (Math.min(Math.abs(1), 4))) > 1) && leftX);
       let libloggerE: Array<any> = [620, 8];
      let componentregistry2 = overlayQ ? !overlayQ : overlayQ;
      do {
         overlayQ = libloggerE.length <= b_playerW.size;
         if (componentregistry2) {
            break;
         }
      } while ((!overlayQ) && componentregistry2);
          let gradlewp = false;
          let libglogb: Map<any, any> = new Map([[String.fromCharCode(110,111,116,105,102,105,101,114,95,122,95,51,53,0),3], [String.fromCharCode(109,95,53,56,95,98,105,116,109,97,112,0),557], [String.fromCharCode(98,108,111,99,107,120,95,100,95,52,50,0),59]]);
          let debug0 = String.fromCharCode(114,95,50,50,95,109,105,114,114,111,114,0);
         b_playerW.set(debug0, debug0.length << (Math.min(Math.abs(1), 1)));
         gradlewp = !gradlewp;
         libglogb.set(`${gradlewp}`, ((gradlewp ? 2 : 5) << (Math.min(Math.abs(libglogb.size), 3))));
      while (!overlayQ) {
         promotionp.push(libloggerE.length);
         break;
      }
       let googleT = 5;
          let formE = 0;
          let listA = 1;
          let containerz = 2.0;
         overlayQ = 7 < promotionp.length;
         formE >>= Math.min(Math.abs(3 | formE), 2);
         listA |= 2 | listA;
         containerz *= listA;
          let baseE = String.fromCharCode(116,95,49,56,95,115,121,110,99,104,114,111,110,105,122,101,114,0);
          let toponS = 2.0;
         overlayQ = !overlayQ;
         baseE += `${1 | parseInt(`${toponS}`)}`;
         toponS /= Math.max((baseE == String.fromCharCode(81,0) ? parseInt(`${toponS}`) : baseE.length), 5);
      let sideY = 8623899 <= libloggerE.length;
      do {
         libloggerE.push((googleT + (overlayQ ? 3 : 5)));
         if (sideY) {
            break;
         }
      } while ((!overlayQ) && sideY);
      while (5 <= (2 ^ b_playerW.size) || (libloggerE.length ^ b_playerW.size) <= 2) {
         libloggerE = [(promotionp.length - (overlayQ ? 5 : 5))];
         break;
      }
      while (5 >= (4 ^ libloggerE.length) && 4 >= (libloggerE.length ^ b_playerW.size)) {
         libloggerE.push(1 * b_playerW.size);
         break;
      }
      let langkey3 = overlayQ ? !overlayQ : overlayQ;
      do {
         overlayQ = register_8I <= 70 || 70 <= promotionp.length;
         if (langkey3) {
            break;
         }
      } while ((5 > (1 & promotionp.length)) && langkey3);
      while ((2 & promotionp.length) <= 2 || (2 & promotionp.length) <= 3) {
         libreactb += `${1 - promotionp.length}`;
         break;
      }
      dialog2 |= final_ol6;
   }
      if (DeviceInfo.isTablet() || includesKeywords) {

      expande += `${final_ol6}`;
        let sH = StatusBar.currentHeight || 0;

   for (let n = 0; n < 2; n++) {
       let gmailk = 5;
       let ajaxg = true;
         gmailk ^= gmailk;
         gmailk <<= Math.min(2, Math.abs((gmailk & (ajaxg ? 1 : 4))));
      while (ajaxg && 5 >= (gmailk % 2)) {
         ajaxg = gmailk == 34 && ajaxg;
         break;
      }
          let gemfiler: Map<any, any> = new Map([[String.fromCharCode(99,97,114,114,105,97,103,101,95,53,95,50,50,0),323], [String.fromCharCode(108,95,54,49,95,99,111,110,116,114,111,108,108,101,114,0),563], [String.fromCharCode(109,95,52,54,95,109,101,115,115,97,103,105,110,103,0),18]]);
         ajaxg = null == gemfiler.get(`${ajaxg}`);
      while (ajaxg && 2 <= (gmailk / 5)) {
          let gestures6: Map<any, any> = new Map([[String.fromCharCode(115,95,53,52,95,98,105,97,115,0),108], [String.fromCharCode(114,95,49,52,95,108,111,97,100,101,114,0),67]]);
          let savef = String.fromCharCode(119,95,55,50,95,112,111,114,116,115,0);
          let calendarv = 0.0;
         gmailk <<= Math.min(3, Math.abs(2));
         gestures6 = new Map([[`${gestures6.size}`, savef.length]]);
         savef += `${gestures6.size - 2}`;
         calendarv -= savef.length;
         break;
      }
          let final_nr: Array<any> = [850, 511, 423];
          let containerv = 2.0;
         ajaxg = 31 > gmailk;
         final_nr = [parseInt(`${containerv}`)];
         containerv /= Math.max(parseFloat(`${final_nr.length & 2}`), 2);
      orangeZ += `${parseInt(`${fastN}`)}`;
   }
        tabletOffset = 60

   for (let t = 0; t < 1; t++) {
      reactnativejsM /= Math.max(final_ol6, 4);
   }
      }

      let x, y, width, height;

      dialog2 -= parseInt(`${reactnativejsM}`);
      x = 0;
      let bannerHeightOnScreen =
        adsTopInPixel - TOPON_BANNER_HEIGHT * scale + huaweiOffset + tabletOffset;
      if (pageNoNavbar.includes(route)) {
        bannerHeightOnScreen += navbarHeightInPixel;
        
        
        
      }

      y = bannerHeightOnScreen;
      width = screenWidthInPixel;
      height = TOPON_BANNER_HEIGHT * scale;
      

      
      
      

      showBanner(route, x, y, width, height);
    } else if (Platform.OS === "ios") {
      const screenWidth = Dimensions.get("screen").width;
      
      const screenHeight = Dimensions.get("screen").height;
      
      const statusBarHeight = StatusBar.currentHeight ?? 0;
      
      const navHeight = navbarHeight != 0 ? navbarHeight - 1 : 0;
      

      const adsTopInPixel = screenHeight - statusBarHeight - navbarHeight;
      

      let x, y, width, height;
      x = 0;
      let bannerHeightOnScreen = adsTopInPixel - TOPON_BANNER_HEIGHT;
      if (pageNoNavbar.includes(route)) bannerHeightOnScreen += navHeight;
      y = bannerHeightOnScreen;
      width = screenWidth;
      height = TOPON_BANNER_HEIGHT;
      

      showBanner(route, x, y, width, height);
    }
  };

  useEffect(() => {
    

    initBannerAdListener();
    initBanner();

    return () => ATBannerRNSDK.removeAllListeners();
  }, []);

  

  useEffect(() => {
   if (screenState.interstitialShow == true) {
      hideAllBanner();
   } else {
   
      setTimeout(() => {
         hideAllBanner();
         showBannerInPosition().then();
       }, 200);
   }
 }, [screenState.interstitialShow , route , navbarHeight , systemNavHeight]);
  

  useEffect(() => {
    
    
    hideAllBanner();
    
    if (settingState.appOrientation === "PORTRAIT") {
      if (!yys_RelatedTooltips.isVip(userState.user)) {
        
        
        setTimeout(() => {
          showBannerInPosition().then();
        }, 200);
      }
    } else {
      console.log("hide banner");
      hideAllBanner();
    }
  }, [
    route,
    navbarHeight,
    systemNavHeight,
    settingState.appOrientation,
    screenState.isPlayerFullScreen,
    windowWidth2,
  ]);

  return (
    <AdsBannerContext.Provider
      value={{ setRoute, setNavbarHeight, currentRoute: route, reloadBanner }}
    >
      {children}
    </AdsBannerContext.Provider>
  );
};
