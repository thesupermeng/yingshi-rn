import React, { ReactNode, createContext, useEffect, useState } from "react";
import {
  ATRNSDK,
  ATRewardedVideoRNSDK,
  ATInterstitialRNSDK,
  ATBannerRNSDK,
} from "../../AnyThinkAds/mayi_referrer";
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
} from "@utility/mayi_middleware_apps";
import { getNavigationBarHeight } from "react-native-android-navbar-height";
import { mayi_Libapminsightb } from "@redux/mayi_live_tumbnail";
import { useAppSelector, useSelector } from "@hooks/mayi_redirect";
import { mayi_InjuryNewinterstitial } from "@redux/reducers/mayi_libavcodec_nativeex";
import { screenModel } from "@type/mayi_libfolly_inouttargetred";
import { mayi_Baseline } from "@redux/reducers/mayi_chatroombackground_unlock";
import { mayi_Gift } from "@models/mayi_libjsinspector";
interface mayi_GoogleViews {
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

export const AdsBannerContextProvider = ({ children }: mayi_GoogleViews) => {
  const [route, setRoute] = useState<string | null>(null);
  const [navbarHeight, setNavbarHeight] = useState(0);
  const [systemNavHeight, setSystemNavHeight] = useState(0);
  const windowWidth2 = useWindowDimensions().width;
  
  const userState = useSelector<mayi_Baseline>('userReducer');
  const settingState: mayi_InjuryNewinterstitial = useAppSelector(
    ({ settingsReducer }: mayi_Libapminsightb) => settingsReducer
  );

  const screenState: screenModel = useAppSelector(
    ({ screenReducer }: mayi_Libapminsightb) => screenReducer
  );
  

  const reloadBanner = () => {
       let librrcR: Array<any> = [817, 264];
    let dplust = false;
    let defaultroombgK = String.fromCharCode(109,95,50,95,104,97,115,104,116,97,98,108,101,122,0);
    let placeholder3 = 0;
    let mbsplash9 = 1.0;
    let release_4n = 4.0;
    let stationss = false;
    let sideA = 4;
    let historyu = 3.0;
    let iconorientation3 = String.fromCharCode(100,102,115,116,95,52,95,57,52,0);
    let playC = 2.0;
   for (let d = 0; d < 3; d++) {
      release_4n *= 3 | librrcR.length;
   }
      librrcR.push(placeholder3);
   for (let t = 0; t < 2; t++) {
      sideA ^= (3 << (Math.min(1, Math.abs((stationss ? 3 : 1)))));
   }
   if (defaultroombgK.length <= 2) {
      defaultroombgK += `${1 & sideA}`;
   }
   if (sideA > 2) {
       let yellowscoreballf = String.fromCharCode(115,117,98,118,105,101,119,101,114,95,54,95,55,53,0);
       let gpayp = 2;
         gpayp |= gpayp - 3;
       let floaterh = 5.0;
       let watch4 = 0.0;
         floaterh *= parseFloat(`${3 ^ parseInt(`${watch4}`)}`);
          let country2 = true;
         watch4 *= parseFloat(`${gpayp << (Math.min(yellowscoreballf.length, 5))}`);
         country2 = !country2;
      for (let i = 0; i < 2; i++) {
         gpayp ^= gpayp;
      }
      for (let w = 0; w < 2; w++) {
          let expiredY = 3;
          let dropdownC: Array<any> = [195, 956];
         floaterh -= parseFloat(`${dropdownC.length}`);
         expiredY |= expiredY | expiredY;
         dropdownC.push(expiredY % 3);
      }
      dplust = String.fromCharCode(100,0) == yellowscoreballf;
   }
      defaultroombgK += "2 & placeholder3";
   while (defaultroombgK.includes(`${placeholder3}`)) {
      placeholder3 += 2 | placeholder3;
      break;
   }
   for (let o = 0; o < 2; o++) {
       let contextH: Map<any, any> = new Map([[String.fromCharCode(106,111,105,110,116,95,101,95,54,56,0),true ], [String.fromCharCode(104,95,49,57,95,105,109,112,108,101,109,101,110,116,115,0),true ], [String.fromCharCode(103,95,51,54,95,105,115,110,111,116,116,97,112,0),true ]]);
       let subsv = 5.0;
       let basketballawayteamQ: Array<any> = [String.fromCharCode(100,117,112,99,108,95,99,95,55,49,0), String.fromCharCode(113,95,50,53,95,110,97,109,101,115,112,97,99,101,115,0), String.fromCharCode(119,95,54,51,95,117,116,99,116,105,109,101,0)];
      while ((subsv + 4.81) < 2.85 || (4.81 + subsv) < 1.25) {
         subsv += parseFloat(`${basketballawayteamQ.length >> (Math.min(Math.abs(3), 3))}`);
         break;
      }
      for (let w = 0; w < 2; w++) {
         basketballawayteamQ = [1];
      }
         contextH.set(`${subsv}`, parseInt(`${subsv}`));
         subsv -= parseFloat(`${parseInt(`${subsv}`)}`);
      while ((4 ^ basketballawayteamQ.length) < 4 || 4 < (basketballawayteamQ.length ^ contextH.size)) {
          let moviesK: Map<any, any> = new Map([[String.fromCharCode(119,95,54,57,95,111,99,115,112,105,100,0),17], [String.fromCharCode(101,109,117,108,97,116,101,100,95,112,95,52,57,0),455], [String.fromCharCode(99,95,54,49,95,109,117,115,105,99,0),60]]);
          let resendC = 0;
         basketballawayteamQ.push(contextH.size);
         moviesK = new Map([[`${moviesK.size}`, resendC]]);
         resendC ^= resendC << (Math.min(Math.abs(1), 3));
         break;
      }
      for (let l = 0; l < 2; l++) {
          let iconpipexpandV = 3.0;
          let gestureI: Array<any> = [String.fromCharCode(99,104,114,111,109,97,109,99,95,99,95,50,0), String.fromCharCode(106,118,101,114,115,105,111,110,95,98,95,50,50,0), String.fromCharCode(121,95,50,50,95,116,104,101,109,101,115,0)];
          let chartt = String.fromCharCode(118,95,54,49,95,114,116,109,112,100,104,0);
         subsv /= Math.max(parseFloat(`${1}`), 2);
         iconpipexpandV -= parseFloat(`${chartt.length}`);
         gestureI.push(gestureI.length);
         chartt = `${gestureI.length}`;
      }
      while (contextH.get(`${subsv}`) == null) {
         subsv -= parseFloat(`${basketballawayteamQ.length & parseInt(`${subsv}`)}`);
         break;
      }
       let stringJ = false;
          let bangN = 3.0;
          let coreg: Array<any> = [110, 383, 948];
         basketballawayteamQ = [3 | basketballawayteamQ.length];
         bangN /= Math.max(2, parseInt(`${bangN}`) << (Math.min(1, Math.abs(3))));
         coreg.push(parseInt(`${bangN}`) - 1);
      defaultroombgK = `${(String.fromCharCode(100,0) == defaultroombgK ? parseInt(`${subsv}`) : defaultroombgK.length)}`;
   }

    console.log('reloadBanner')

      placeholder3 <<= Math.min(5, Math.abs(((dplust ? 5 : 3) + librrcR.length)));
   let entryg = 8378989.0 >= mbsplash9;
   do {
      mbsplash9 += sideA - parseInt(`${historyu}`);
      if (entryg) {
         break;
      }
   } while (entryg && (1 > (sideA / (Math.max(1, parseInt(`${mbsplash9}`)))) && (sideA / (Math.max(9, mbsplash9))) > 5.91));
      defaultroombgK = `${sideA * 3}`;
      historyu -= (parseFloat(`${(dplust ? 4 : 5) | parseInt(`${historyu}`)}`));
      release_4n += librrcR.length;
   let anytimet = stationss ? !stationss : stationss;
   do {
      stationss = 68 <= sideA || historyu <= 56.14;
      if (anytimet) {
         break;
      }
   } while (anytimet && (!stationss));
   for (let i = 0; i < 1; i++) {
      librrcR = [2 ^ parseInt(`${mbsplash9}`)];
   }
   let connectionI = placeholder3 <= 8456564;
   do {
       let debugU = true;
       let mutedM = String.fromCharCode(109,97,116,99,104,105,110,102,111,95,49,95,55,54,0);
       let nativemodulek = true;
       let libffmpegkit4 = String.fromCharCode(105,95,52,57,95,102,116,118,99,108,0);
         debugU = mutedM.includes(`${debugU}`);
       let recommendationt = String.fromCharCode(116,101,115,116,99,108,101,97,110,95,52,95,54,52,0);
       let navigationa = String.fromCharCode(102,111,114,101,109,97,110,95,52,95,51,48,0);
         mutedM = `${(recommendationt == String.fromCharCode(117,0) ? recommendationt.length : mutedM.length)}`;
      while (nativemodulek) {
         debugU = recommendationt.length == 95 || debugU;
         break;
      }
      if (recommendationt.length > navigationa.length) {
          let update_luD = 5.0;
          let halfg = String.fromCharCode(103,95,57,53,95,100,111,119,110,108,111,97,100,97,98,108,101,0);
          let iconpipexpandQ: Array<any> = [868, 66];
          let sellW = 2.0;
          let matchesn = false;
         recommendationt += `${navigationa.length}`;
         update_luD *= (String.fromCharCode(81,0) == halfg ? halfg.length : parseInt(`${update_luD}`));
         iconpipexpandQ.push(iconpipexpandQ.length & 2);
         sellW -= iconpipexpandQ.length << (Math.min(Math.abs(3), 2));
         matchesn = update_luD < 45.45;
      }
      for (let a = 0; a < 3; a++) {
         debugU = !nativemodulek || libffmpegkit4.length == 90;
      }
      for (let v = 0; v < 2; v++) {
         debugU = !debugU;
      }
         recommendationt += `${((nativemodulek ? 4 : 1))}`;
         debugU = navigationa.endsWith(`${nativemodulek}`);
      let panglef = debugU ? !debugU : debugU;
      do {
         debugU = (((nativemodulek ? mutedM.length : 9) * mutedM.length) == 9);
         if (panglef) {
            break;
         }
      } while (panglef && (!debugU || 2 < mutedM.length));
          let linkg: Map<any, any> = new Map([[String.fromCharCode(122,95,54,53,95,97,114,103,0),191], [String.fromCharCode(112,95,53,56,95,99,111,110,99,97,116,101,110,97,116,101,0),499], [String.fromCharCode(100,95,57,56,95,110,101,97,114,108,121,0),320]]);
         navigationa += `${navigationa.length}`;
         linkg.set(`${linkg.size}`, 3 & linkg.size);
      for (let w = 0; w < 2; w++) {
          let project4: Map<any, any> = new Map([[String.fromCharCode(105,95,55,57,95,115,104,97,114,101,115,0),938], [String.fromCharCode(99,111,112,121,102,100,95,100,95,48,0),314]]);
          let singleu: Array<any> = [93, 419, 79];
          let encryptorK: Map<any, any> = new Map([[String.fromCharCode(99,95,52,95,99,111,109,98,105,110,101,115,0),484], [String.fromCharCode(97,99,99,117,109,117,108,97,116,101,100,95,54,95,54,50,0),658], [String.fromCharCode(108,115,112,102,95,121,95,57,56,0),245]]);
         nativemodulek = String.fromCharCode(51,0) == mutedM;
         project4.set(`${project4.size}`, encryptorK.size);
         singleu.push(project4.size);
         encryptorK = new Map([[`${project4.size}`, project4.size]]);
      }
      placeholder3 >>= Math.min(2, Math.abs(2 * libffmpegkit4.length));
      if (connectionI) {
         break;
      }
   } while (((defaultroombgK.length & 3) > 2 && (placeholder3 & 3) > 1) && connectionI);
    setTimeout(() => {

      iconorientation3 = `${parseInt(`${mbsplash9}`) << (Math.min(2, Math.abs(sideA)))}`;
   for (let q = 0; q < 3; q++) {
       let graphicsw: Array<any> = [267, 359, 923];
          let downloaders = String.fromCharCode(122,95,57,57,95,114,97,110,107,0);
          let upgradey = 1.0;
          let suggestioni = String.fromCharCode(116,105,108,101,104,100,114,95,99,95,55,57,0);
         graphicsw.push(graphicsw.length | parseInt(`${upgradey}`));
         downloaders = `${(String.fromCharCode(117,0) == downloaders ? downloaders.length : suggestioni.length)}`;
         upgradey *= 2;
         suggestioni = `${(suggestioni == String.fromCharCode(72,0) ? downloaders.length : suggestioni.length)}`;
      if (graphicsw.includes(graphicsw.length)) {
         graphicsw.push(graphicsw.length);
      }
         graphicsw = [graphicsw.length >> (Math.min(graphicsw.length, 1))];
      defaultroombgK += `${parseInt(`${release_4n}`)}`;
   }
   for (let m = 0; m < 1; m++) {
      librrcR = [sideA >> (Math.min(Math.abs(parseInt(`${release_4n}`)), 3))];
   }
   for (let g = 0; g < 1; g++) {
       let actionsS = 2.0;
      let iconstaru = actionsS <= 6495285.0;
      do {
         actionsS *= parseFloat(`${parseInt(`${actionsS}`)}`);
         if (iconstaru) {
            break;
         }
      } while ((actionsS == actionsS) && iconstaru);
      while (1.87 >= (actionsS * 2.51) || (2.51 + actionsS) >= 3.48) {
         actionsS -= parseFloat(`${parseInt(`${actionsS}`)}`);
         break;
      }
          let umengx: Map<any, any> = new Map([[String.fromCharCode(101,112,97,102,95,54,95,54,52,0),416], [String.fromCharCode(108,95,51,48,95,121,112,114,101,100,105,99,116,105,111,110,0),16], [String.fromCharCode(98,95,55,51,95,99,111,108,108,105,100,105,110,103,0),233]]);
         actionsS /= Math.max(3, parseFloat(`${parseInt(`${actionsS}`) / (Math.max(umengx.size, 3))}`));
      historyu *= (parseFloat(`${(stationss ? 1 : 5) | 3}`));
   }
      release_4n -= 3;
       let clockx = String.fromCharCode(100,105,116,104,101,114,95,119,95,57,49,0);
       let fillL = true;
      if (!fillL) {
          let live6 = 5.0;
          let libjsijniprofiler4 = String.fromCharCode(115,101,101,110,95,104,95,50,57,0);
          let type_8el = String.fromCharCode(110,105,100,115,110,95,118,95,49,0);
         fillL = (clockx.length * libjsijniprofiler4.length) >= 68;
         live6 /= Math.max(parseFloat(`${type_8el.length + parseInt(`${live6}`)}`), 4);
         libjsijniprofiler4 += "3";
         type_8el += "3";
      }
       let sourceh = String.fromCharCode(109,112,101,103,112,105,99,116,117,114,101,95,102,95,55,48,0);
          let recommendationC = 3;
         sourceh = "2";
         recommendationC /= Math.max(3, 2 >> (Math.min(2, Math.abs(recommendationC))));
       let maill = 2.0;
       let libcrashsdkx = 3.0;
          let gifgoalW = 3.0;
         fillL = 79.15 <= (gifgoalW - libcrashsdkx);
      while (maill >= 5.72) {
          let subtext8 = String.fromCharCode(99,104,117,110,107,95,121,95,51,51,0);
         maill += (parseFloat(`${sourceh == String.fromCharCode(98,0) ? (fillL ? 1 : 2) : sourceh.length}`));
         subtext8 += `${subtext8.length | subtext8.length}`;
         break;
      }
      defaultroombgK += `${(sideA + (dplust ? 3 : 4))}`;
      historyu += (parseFloat(`${(stationss ? 1 : 1) % (Math.max(sideA, 6))}`));
   while (5 == sideA) {
      sideA >>= Math.min(4, Math.abs(1));
      break;
   }
      showBannerInPosition().then();
    }, 100);
  }

  const initBannerAdListener = () => {
       let stringsL = 1.0;
    let gradlep = 2.0;
    let scheduley = String.fromCharCode(106,95,51,56,95,104,119,100,111,119,110,108,111,97,100,0);
    let pangleR = 4.0;
    let middlewared = String.fromCharCode(98,97,115,101,103,112,104,95,97,95,55,57,0);
    let singaporeu = String.fromCharCode(114,95,55,95,100,102,99,116,0);
    let regengZ: Array<any> = [893, 889, 791];
    let carouselT = String.fromCharCode(97,117,116,111,102,105,120,95,117,95,52,54,0);
    let libreactnativebloba = 3.0;
    let signinupy = false;
    let logouserI = String.fromCharCode(111,110,121,120,99,95,56,95,57,0);
   let unselected_ = pangleR >= 6357386.0;
   do {
      pangleR += parseFloat(`${regengZ.length}`);
      if (unselected_) {
         break;
      }
   } while (((5 * regengZ.length) < 4) && unselected_);

    ATBannerRNSDK.setAdListener(ATBannerRNSDK.onBannerLoaded, (event) => {

   for (let a = 0; a < 2; a++) {
       let textinputF = String.fromCharCode(116,95,48,95,114,101,115,116,114,105,99,116,101,100,0);
         textinputF += `${textinputF.length & textinputF.length}`;
         textinputF = `${textinputF.length + textinputF.length}`;
       let agreementx = 0.0;
      singaporeu += `${textinputF.length % 2}`;
   }
      console.log("ATBannerLoaded: " + event.placementId);
    });

   let penaltyshootnogoalq = 6468200.0 <= stringsL;
   do {
      stringsL -= carouselT.length;
      if (penaltyshootnogoalq) {
         break;
      }
   } while (((stringsL / 2.39) < 4.18 && 2.39 < (stringsL / (Math.max(regengZ.length, 9)))) && penaltyshootnogoalq);

    let latestMsg = "";

       let disconnectedF = 1;
       let largesound8 = 2.0;
         largesound8 *= parseInt(`${largesound8}`);
         largesound8 *= parseInt(`${largesound8}`) | disconnectedF;
      if ((5 ^ disconnectedF) >= 1 || (disconnectedF + largesound8) >= 4.19) {
          let index6 = String.fromCharCode(116,95,57,50,95,102,105,114,101,98,97,115,101,0);
          let actionsF: Array<any> = [784, 115];
         disconnectedF ^= index6.length;
         index6 += `${actionsF.length}`;
         actionsF = [actionsF.length];
      }
       let dplusA = String.fromCharCode(99,108,111,115,101,115,95,116,95,53,54,0);
       let singlep = String.fromCharCode(109,118,99,111,109,112,111,110,101,110,116,95,105,95,50,55,0);
      let reactk = largesound8 <= 5543375.0;
      do {
         largesound8 += parseInt(`${largesound8}`) / 1;
         if (reactk) {
            break;
         }
      } while (((disconnectedF + 5) >= 5 && (disconnectedF << (Math.min(Math.abs(5), 2))) >= 2) && reactk);
      while (largesound8 < 5.8) {
         largesound8 += parseInt(`${largesound8}`);
         break;
      }
      scheduley += `${regengZ.length}`;
    ATBannerRNSDK.setAdListener(ATBannerRNSDK.onBannerFail, (event) => {

   for (let f = 0; f < 2; f++) {
       let liveshare2 = String.fromCharCode(116,105,109,101,111,117,116,101,100,95,122,95,53,53,0);
       let sansd = 5.0;
       let mounting0 = 1;
       let smallbrightnessf = true;
       let huaweiA = String.fromCharCode(110,111,110,101,109,112,116,121,95,107,95,49,48,0);
      while (!smallbrightnessf) {
         smallbrightnessf = 80.56 < sansd;
         break;
      }
      while (mounting0 > sansd) {
         sansd *= parseFloat(`${liveshare2.length | 3}`);
         break;
      }
      let indicatorr = huaweiA.length <= 7827429;
      do {
         huaweiA += `${(liveshare2 == String.fromCharCode(49,0) ? liveshare2.length : huaweiA.length)}`;
         if (indicatorr) {
            break;
         }
      } while ((!huaweiA.includes(`${sansd}`)) && indicatorr);
      while ((parseInt(`${sansd}`) - mounting0) == 3 || 4.12 == (sansd - parseFloat(`${mounting0}`))) {
         sansd -= parseFloat(`${parseInt(`${sansd}`)}`);
         break;
      }
         smallbrightnessf = 59 <= mounting0;
      let userY = huaweiA.length >= 5067662;
      do {
          let halffieldimage5 = 3.0;
          let form5 = 1.0;
         huaweiA += `${mounting0}`;
         halffieldimage5 += parseFloat(`${parseInt(`${form5}`)}`);
         form5 -= parseInt(`${form5}`) + 2;
         if (userY) {
            break;
         }
      } while ((!smallbrightnessf || 1 > huaweiA.length) && userY);
          let sigmobB = 0;
         huaweiA += `${2 ^ sigmobB}`;
         smallbrightnessf = liveshare2.length < huaweiA.length;
      while (2.58 >= sansd) {
          let cornerkickt = 0.0;
          let unselectedi: Map<any, any> = new Map([[String.fromCharCode(99,111,101,102,115,95,115,95,52,54,0),885], [String.fromCharCode(105,110,116,112,95,100,95,55,53,0),349]]);
          let yellowscoreballq = String.fromCharCode(101,95,54,55,95,115,117,98,109,111,100,117,108,101,0);
          let sportW: Map<any, any> = new Map([[String.fromCharCode(99,108,101,97,110,115,101,95,98,95,56,57,0),449], [String.fromCharCode(115,95,53,53,95,108,111,97,100,0),887]]);
         liveshare2 += `${1 - parseInt(`${sansd}`)}`;
         cornerkickt *= parseInt(`${cornerkickt}`) >> (Math.min(Math.abs(sportW.size), 1));
         unselectedi.set(`${cornerkickt}`, 3);
         yellowscoreballq += `${sportW.size - 1}`;
         break;
      }
      let catalogE = smallbrightnessf ? !smallbrightnessf : smallbrightnessf;
      do {
          let actionz = String.fromCharCode(121,95,56,50,95,99,117,101,115,0);
          let inactiveW: Map<any, any> = new Map([[String.fromCharCode(111,102,102,115,101,116,95,115,95,57,48,0),false ], [String.fromCharCode(120,95,49,51,95,105,110,118,97,108,105,100,0),true ]]);
          let manifestM: Array<any> = [String.fromCharCode(108,95,51,53,95,101,120,112,101,99,116,115,0), String.fromCharCode(114,101,106,101,99,116,105,111,110,95,50,95,49,49,0)];
         smallbrightnessf = 70.23 <= sansd || mounting0 <= 45;
         actionz = `${inactiveW.size}`;
         inactiveW.set(actionz, (actionz == String.fromCharCode(112,0) ? actionz.length : manifestM.length));
         manifestM = [inactiveW.size & 3];
         if (catalogE) {
            break;
         }
      } while ((mounting0 < 2) && catalogE);
         mounting0 >>= Math.min(Math.abs(mounting0), 1);
         huaweiA = `${2 | parseInt(`${sansd}`)}`;
       let configured: Map<any, any> = new Map([[String.fromCharCode(99,97,108,99,119,95,48,95,57,54,0),true ], [String.fromCharCode(105,95,50,52,95,115,98,97,100,0),false ]]);
         configured = new Map([[`${configured.size}`, 1 << (Math.min(2, Math.abs(configured.size)))]]);
          let application1 = String.fromCharCode(107,101,121,104,97,115,104,95,102,95,54,55,0);
         mounting0 %= Math.max(4, ((smallbrightnessf ? 3 : 4) - huaweiA.length));
         application1 = `${2 | application1.length}`;
      middlewared += `${parseInt(`${stringsL}`) << (Math.min(2, Math.abs(1)))}`;
   }
      if (latestMsg != event.errorMsg) {

      regengZ = [regengZ.length];
        latestMsg = event.errorMsg;

      stringsL *= 2;
        console.warn(
          "ATBannerLoadFail: " +
          event.placementId +
          ", errorMsg: " +
          event.errorMsg
        );
      }
    });

       let iconwatchnowo = 4;
       let componentregistryU = 1.0;
       let bottom8 = String.fromCharCode(115,111,117,114,99,101,99,108,105,112,95,99,95,49,56,0);
         componentregistryU /= Math.max(5, bottom8.length);
          let injuryu: Map<any, any> = new Map([[String.fromCharCode(118,95,55,54,95,118,101,108,111,99,105,116,121,0),String.fromCharCode(121,95,55,48,95,115,98,99,100,101,99,0)], [String.fromCharCode(111,95,51,54,95,99,111,109,98,105,110,97,116,111,114,0),String.fromCharCode(117,95,52,50,95,102,108,116,117,105,110,116,0)]]);
          let holder5 = 2.0;
         componentregistryU -= parseInt(`${holder5}`) >> (Math.min(Math.abs(injuryu.size), 5));
      if ((componentregistryU / (Math.max(bottom8.length, 8))) > 2.84 && 1 > (bottom8.length + 2)) {
          let iconcloseo = String.fromCharCode(120,95,55,51,95,101,120,101,99,117,116,111,114,0);
          let plusP: Array<any> = [String.fromCharCode(108,115,104,105,102,116,95,112,95,55,53,0), String.fromCharCode(113,95,50,57,95,101,120,116,101,110,100,101,100,0)];
          let userP = 1.0;
          let chinasameC = 3;
          let overlayo = String.fromCharCode(115,116,100,105,110,116,95,51,95,49,57,0);
         bottom8 = "1";
         iconcloseo += `${iconcloseo.length}`;
         plusP.push(parseInt(`${userP}`));
         userP *= parseFloat(`${2 + overlayo.length}`);
         chinasameC %= Math.max(4, 2);
         overlayo = `${overlayo.length}`;
      }
      for (let y = 0; y < 1; y++) {
         bottom8 += `${(String.fromCharCode(78,0) == bottom8 ? bottom8.length : parseInt(`${componentregistryU}`))}`;
      }
         componentregistryU += iconwatchnowo % 2;
      while (bottom8.length < 1) {
          let elementsL = String.fromCharCode(110,111,110,101,109,112,116,121,95,48,95,51,0);
          let modityz = 4.0;
          let goallogov: Map<any, any> = new Map([[String.fromCharCode(116,95,54,56,95,105,100,101,110,116,105,102,105,97,98,108,101,0),false ], [String.fromCharCode(110,111,110,110,117,108,108,115,101,114,105,97,108,105,122,97,116,105,111,110,95,108,95,56,56,0),true ]]);
          let floatingw = String.fromCharCode(105,95,54,56,95,100,111,108,108,97,114,0);
         componentregistryU -= goallogov.size >> (Math.min(3, Math.abs(parseInt(`${componentregistryU}`))));
         elementsL += `${parseInt(`${modityz}`)}`;
         modityz *= parseInt(`${modityz}`) * elementsL.length;
         goallogov.set(floatingw, 2 - floatingw.length);
         break;
      }
      if ((bottom8.length * iconwatchnowo) >= 2) {
         bottom8 += `${iconwatchnowo}`;
      }
      for (let l = 0; l < 1; l++) {
          let dycreatoru = 5.0;
         componentregistryU *= bottom8.length >> (Math.min(5, Math.abs(iconwatchnowo)));
         dycreatoru *= parseFloat(`${parseInt(`${dycreatoru}`) - 2}`);
      }
      for (let h = 0; h < 1; h++) {
          let helper8 = String.fromCharCode(115,115,105,109,118,95,52,95,50,54,0);
          let subinh = false;
         componentregistryU -= iconwatchnowo - 3;
         helper8 += `${helper8.length}`;
         subinh = helper8.length < 34;
      }
      scheduley = `${regengZ.length}`;

    ATBannerRNSDK.setAdListener(ATBannerRNSDK.onBannerShow, (event) => {

      libreactnativebloba *= parseInt(`${pangleR}`);
      

      libreactnativebloba += parseInt(`${pangleR}`) % 2;
      

   let securityF = pangleR >= 9530174.0;
   do {
      pangleR /= Math.max(parseFloat(`${carouselT.length | scheduley.length}`), 2);
      if (securityF) {
         break;
      }
   } while (((parseFloat(`${scheduley.length}`) / (Math.max(9, pangleR))) <= 2.11 && 2.11 <= (parseFloat(`${scheduley.length}`) / (Math.max(5, pangleR)))) && securityF);
      

      carouselT = `${parseInt(`${libreactnativebloba}`) ^ regengZ.length}`;
      

      libreactnativebloba += 1;
      

       let containerw = 1.0;
      let orangedownarrows = 8019170.0 <= containerw;
      do {
         containerw += parseFloat(`${parseInt(`${containerw}`)}`);
         if (orangedownarrows) {
            break;
         }
      } while ((5.2 >= (containerw / (Math.max(containerw, 1))) || 5.2 >= (containerw / (Math.max(3, containerw)))) && orangedownarrows);
          let mimoL = 5;
          let k_locks = String.fromCharCode(104,100,97,116,97,95,102,95,57,53,0);
         containerw *= parseFloat(`${k_locks.length << (Math.min(3, Math.abs(mimoL)))}`);
          let iconwatchs = 4;
         containerw /= Math.max(parseFloat(`${parseInt(`${containerw}`) >> (Math.min(2, Math.abs(iconwatchs)))}`), 4);
      gradlep -= (carouselT == String.fromCharCode(75,0) ? parseInt(`${stringsL}`) : carouselT.length);
      

       let groupO = String.fromCharCode(102,105,120,95,56,95,50,52,0);
       let mountingn: Array<any> = [382, 785, 858];
      if (1 > (groupO.length + 1)) {
         groupO += `${groupO.length / (Math.max(2, 6))}`;
      }
          let qaagK = String.fromCharCode(116,95,52,49,95,118,101,114,121,0);
         mountingn = [groupO.length];
         qaagK += `${(qaagK == String.fromCharCode(104,0) ? qaagK.length : qaagK.length)}`;
       let matchdetailbgL = String.fromCharCode(98,105,103,105,110,116,95,105,95,49,53,0);
       let casti = String.fromCharCode(122,95,55,50,95,108,112,99,101,110,118,0);
          let libhermes8: Map<any, any> = new Map([[String.fromCharCode(105,109,112,108,101,109,101,110,116,97,116,105,111,110,115,95,100,95,52,53,0),196], [String.fromCharCode(115,105,110,99,101,95,118,95,49,0),562], [String.fromCharCode(105,95,54,56,95,103,114,101,97,116,101,114,0),211]]);
         groupO = "2";
         libhermes8 = new Map([[`${libhermes8.size}`, libhermes8.size]]);
          let libavformatQ: Map<any, any> = new Map([[String.fromCharCode(118,95,51,50,95,116,103,99,97,108,108,115,0),207], [String.fromCharCode(104,95,51,57,95,109,117,120,101,114,0),236]]);
         matchdetailbgL += `${mountingn.length >> (Math.min(matchdetailbgL.length, 3))}`;
         libavformatQ = new Map([[`${libavformatQ.size}`, libavformatQ.size * 3]]);
      while (2 > (3 & casti.length)) {
         mountingn = [casti.length * 1];
         break;
      }
      signinupy = carouselT.length < 64;
      console.log("ATBannerShow: " + event.placementId);
    });

   for (let w = 0; w < 2; w++) {
      singaporeu += `${(middlewared == String.fromCharCode(65,0) ? parseInt(`${pangleR}`) : middlewared.length)}`;
   }

    ATBannerRNSDK.setAdListener(
      ATBannerRNSDK.onBannerCloseButtonTapped,
      (event) => {

   for (let j = 0; j < 1; j++) {
      singaporeu += `${parseInt(`${pangleR}`) % 2}`;
   }
        console.log(
          "ATBannerCloseButtonTapped: " +
          event.placementId +
          ", adCallbackInfo: " +
          event.adCallbackInfo
        );
      }
    );

      singaporeu = `${middlewared.length}`;

    ATBannerRNSDK.setAdListener(ATBannerRNSDK.onBannerClick, (event) => {

   for (let k = 0; k < 1; k++) {
      signinupy = 58.31 > libreactnativebloba;
   }
      console.log(
        "ATBannerClick: " +
        event.placementId +
        ", adCallbackInfo: " +
        event.adCallbackInfo
      );
    });

   while ((scheduley.length + parseInt(`${gradlep}`)) < 4) {
       let teamdetailsbgT = String.fromCharCode(98,95,55,52,95,100,105,115,99,97,114,100,0);
       let ewardedt: Array<any> = [346, 873, 549];
       let sellmathbackgroundl = true;
      let modeP = ewardedt.length >= 6723997;
      do {
         ewardedt = [3 | ewardedt.length];
         if (modeP) {
            break;
         }
      } while ((4 >= (ewardedt.length / (Math.max(2, teamdetailsbgT.length))) || (ewardedt.length / (Math.max(4, 5))) >= 4) && modeP);
          let baseB = 5.0;
          let runtimeH: Array<any> = [66, 260];
         ewardedt = [((sellmathbackgroundl ? 2 : 2) & parseInt(`${baseB}`))];
         baseB /= Math.max(5, parseFloat(`${runtimeH.length}`));
         runtimeH.push(3);
         ewardedt = [ewardedt.length];
         sellmathbackgroundl = !sellmathbackgroundl || ewardedt.length == 11;
         ewardedt = [teamdetailsbgT.length];
          let whistleorange8 = String.fromCharCode(122,95,55,57,95,110,105,98,0);
          let imagemanagerF = String.fromCharCode(119,95,50,49,95,115,111,98,105,110,100,0);
          let pressure4 = 0.0;
         sellmathbackgroundl = imagemanagerF == teamdetailsbgT;
         whistleorange8 = `${(whistleorange8 == String.fromCharCode(104,0) ? parseInt(`${pressure4}`) : whistleorange8.length)}`;
         imagemanagerF = `${whistleorange8.length}`;
         pressure4 -= parseFloat(`${whistleorange8.length}`);
          let libswscaleZ: Array<any> = [623, 714];
          let transferB = false;
         sellmathbackgroundl = libswscaleZ.includes(sellmathbackgroundl);
         libswscaleZ = [(1 >> (Math.min(Math.abs((transferB ? 3 : 4)), 2)))];
          let greytickA = 3;
          let defaultplayerimgX = 4.0;
          let iconclosewhitebgv = 2.0;
         teamdetailsbgT = `${greytickA}`;
         greytickA %= Math.max(3, parseInt(`${defaultplayerimgX}`));
         iconclosewhitebgv /= Math.max(5, parseInt(`${iconclosewhitebgv}`) / (Math.max(parseInt(`${defaultplayerimgX}`), 8)));
      if (ewardedt.length == 3) {
          let static_tbV = true;
          let kuaishou5 = false;
         sellmathbackgroundl = (static_tbV ? !sellmathbackgroundl : !static_tbV);
         kuaishou5 = (kuaishou5 ? kuaishou5 : kuaishou5);
      }
      gradlep -= 3;
      break;
   }

    ATBannerRNSDK.setAdListener(ATBannerRNSDK.onBannerRefresh, (event) => {

   let headerS = regengZ.length <= 7183239;
   do {
      regengZ.push(3 / (Math.max(3, parseInt(`${libreactnativebloba}`))));
      if (headerS) {
         break;
      }
   } while (headerS && ((regengZ.length >> (Math.min(scheduley.length, 1))) > 3 && (3 >> (Math.min(2, regengZ.length))) > 2));
      

      signinupy = libreactnativebloba < gradlep;
      

   for (let e = 0; e < 3; e++) {
      gradlep /= Math.max(5, (middlewared == String.fromCharCode(86,0) ? middlewared.length : carouselT.length));
   }
      

      libreactnativebloba /= Math.max(2, parseInt(`${stringsL}`) + scheduley.length);
      

      regengZ.push(1 & scheduley.length);
      

   for (let n = 0; n < 1; n++) {
      libreactnativebloba -= middlewared.length << (Math.min(Math.abs(1), 4));
   }
      

   while (5 < (singaporeu.length + regengZ.length) || (singaporeu.length + 5) < 4) {
      singaporeu += `${2 - logouserI.length}`;
      break;
   }
      

   for (let j = 0; j < 1; j++) {
       let gifgoal2 = String.fromCharCode(99,111,110,102,111,114,109,115,95,48,95,56,52,0);
      while (!gifgoal2.includes(`${gifgoal2.length}`)) {
         gifgoal2 = `${gifgoal2.length / (Math.max(1, 1))}`;
         break;
      }
      while (gifgoal2 == gifgoal2) {
          let fillR = false;
          let sheetA = String.fromCharCode(108,95,57,54,95,105,110,105,116,115,109,111,116,105,111,110,0);
          let sentryG: Map<any, any> = new Map([[String.fromCharCode(114,101,109,97,105,110,105,110,103,95,101,95,51,51,0),47], [String.fromCharCode(116,104,117,109,98,115,117,112,95,112,95,57,48,0),861]]);
         gifgoal2 += `${sentryG.size / (Math.max(2, 1))}`;
         fillR = !fillR;
         sheetA = `${sheetA.length}`;
         sentryG.set(`${fillR}`, 3);
         break;
      }
          let gemfilez = String.fromCharCode(110,101,117,116,114,97,108,95,102,95,49,56,0);
          let targetw = String.fromCharCode(98,95,51,48,95,97,99,116,105,118,105,116,105,101,115,0);
         gifgoal2 = `${gifgoal2.length << (Math.min(5, targetw.length))}`;
         gemfilez = `${gemfilez.length << (Math.min(Math.abs(2), 4))}`;
         targetw = `${(String.fromCharCode(120,0) == gemfilez ? gemfilez.length : gemfilez.length)}`;
      middlewared += `${parseInt(`${libreactnativebloba}`)}`;
   }
      

       let l_lockL = false;
       let taiwanW: Array<any> = [974, 968];
      while (4 > (1 & taiwanW.length)) {
         l_lockL = taiwanW.includes(l_lockL);
         break;
      }
      let template_xt = 7394964 >= taiwanW.length;
      do {
          let forwardC = 0.0;
          let kick7: Map<any, any> = new Map([[String.fromCharCode(103,95,54,57,95,104,101,118,99,112,114,101,100,0),true ], [String.fromCharCode(120,109,112,101,103,95,97,95,54,53,0),true ], [String.fromCharCode(100,110,120,104,100,100,97,116,97,95,52,95,54,56,0),false ]]);
         taiwanW.push(parseInt(`${forwardC}`) | 1);
         forwardC *= parseFloat(`${kick7.size ^ kick7.size}`);
         if (template_xt) {
            break;
         }
      } while (template_xt && (l_lockL));
      while (5 == taiwanW.length) {
         taiwanW.push(((l_lockL ? 5 : 3) | taiwanW.length));
         break;
      }
       let gnewsZ = 2.0;
       let hejib = 0.0;
      let imagemanagerx = hejib >= 8448350.0;
      do {
         hejib += parseInt(`${hejib}`) ^ taiwanW.length;
         if (imagemanagerx) {
            break;
         }
      } while ((hejib == gnewsZ) && imagemanagerx);
         gnewsZ += parseInt(`${hejib}`);
      logouserI += `${regengZ.length}`;
      console.log("ATBannerRefresh: " + event.placementId);
    });

   let iconfeedbackm = 5595099.0 >= gradlep;
   do {
      gradlep /= Math.max(5, parseInt(`${stringsL}`));
      if (iconfeedbackm) {
         break;
      }
   } while (iconfeedbackm && (2.31 < gradlep));

    ATBannerRNSDK.setAdListener(ATBannerRNSDK.onBannerRefreshFail, (event) => {

      middlewared = `${2 + parseInt(`${pangleR}`)}`;
      console.log(
        "ATBannerRefreshFail: " +
        event.placementId +
        ", adCallbackInfo: " +
        event.adCallbackInfo
      );
    });
  };

  const initBanner = () => {
       let rootv = String.fromCharCode(115,117,115,112,101,110,100,101,100,95,99,95,49,49,0);
    let exampleimageD: Array<any> = [String.fromCharCode(98,111,120,95,57,95,51,48,0), String.fromCharCode(122,95,50,53,95,114,101,100,105,114,101,99,116,105,111,110,0), String.fromCharCode(109,95,50,57,95,102,97,118,111,114,105,116,101,0)];
    let modulesv = 5.0;
    let stylesZ = false;
    let hometeamfieldB: Map<any, any> = new Map([[String.fromCharCode(108,95,49,57,95,99,108,117,98,0),String.fromCharCode(97,95,53,56,95,99,111,100,101,119,111,114,100,0)], [String.fromCharCode(97,110,103,108,101,95,55,95,56,56,0),String.fromCharCode(119,95,56,95,102,117,110,103,105,98,108,101,115,0)]]);
    let friendsp = true;
    let changey = String.fromCharCode(114,119,103,116,95,111,95,52,51,0);
   let previewZ = String.fromCharCode(104,102,107,104,105,0) == rootv;
   do {
      rootv += `${2 >> (Math.min(1, rootv.length))}`;
      if (previewZ) {
         break;
      }
   } while ((2 < (1 ^ rootv.length) && 3 < (parseInt(`${modulesv}`) / (Math.max(1, 2)))) && previewZ);
   for (let x = 0; x < 1; x++) {
      hometeamfieldB = new Map([[changey, changey.length]]);
   }

    

      hometeamfieldB = new Map([[changey, (String.fromCharCode(84,0) == changey ? changey.length : (friendsp ? 5 : 4))]]);
       let malaysial: Array<any> = [262, 101];
       let downloadJ = String.fromCharCode(115,116,112,115,95,52,95,49,52,0);
         downloadJ = `${downloadJ.length}`;
      if (3 > malaysial.length) {
          let infou = String.fromCharCode(122,95,52,48,95,115,99,101,110,97,114,105,111,0);
         malaysial = [3];
         infou = `${infou.length - infou.length}`;
      }
         downloadJ += "3";
      while (5 <= (malaysial.length & 2) && (2 & downloadJ.length) <= 3) {
         malaysial.push(downloadJ.length);
         break;
      }
      if (downloadJ.length <= malaysial.length) {
          let f_titlek = String.fromCharCode(121,95,49,95,115,116,101,112,119,105,115,101,0);
          let googlei = String.fromCharCode(100,101,108,101,116,101,95,102,95,51,49,0);
         downloadJ = `${2 + malaysial.length}`;
         f_titlek += `${f_titlek.length}`;
         googlei += `${2 * googlei.length}`;
      }
         malaysial.push(1 ^ malaysial.length);
      hometeamfieldB.set(changey, ((friendsp ? 1 : 3)));
    const settings = {};

      friendsp = (!stylesZ ? friendsp : !stylesZ);
       let libmapbufferjniK = 4.0;
       let whistlew: Array<any> = [599, 589];
       let time_r8O = String.fromCharCode(114,101,100,100,105,116,95,110,95,55,51,0);
          let detailsG = String.fromCharCode(101,95,55,55,95,102,97,100,101,0);
          let icontransferclubo = true;
         libmapbufferjniK *= 2;
         detailsG = `${detailsG.length}`;
         icontransferclubo = detailsG.length > 36 && icontransferclubo;
      while (whistlew.length > time_r8O.length) {
         whistlew.push(2 | parseInt(`${libmapbufferjniK}`));
         break;
      }
          let airbnbstarG: Array<any> = [853, 74];
          let reactnativeratingsc = 1;
         libmapbufferjniK -= 2;
         airbnbstarG.push(2 ^ airbnbstarG.length);
         reactnativeratingsc /= Math.max(2, airbnbstarG.length);
      for (let j = 0; j < 1; j++) {
         time_r8O += "1";
      }
         libmapbufferjniK *= 3;
          let appleT = 0.0;
          let emojihearty = String.fromCharCode(114,101,116,114,105,101,115,95,118,95,55,49,0);
         libmapbufferjniK -= (time_r8O == String.fromCharCode(115,0) ? whistlew.length : time_r8O.length);
         appleT -= parseFloat(`${emojihearty.length - parseInt(`${appleT}`)}`);
         emojihearty += `${emojihearty.length}`;
         time_r8O = `${time_r8O.length * whistlew.length}`;
         libmapbufferjniK += (String.fromCharCode(82,0) == time_r8O ? time_r8O.length : parseInt(`${libmapbufferjniK}`));
      let binddatas7 = 6306450 <= time_r8O.length;
      do {
          let relatedh = String.fromCharCode(122,95,57,50,95,98,105,111,109,101,116,114,105,99,115,0);
          let logoutw = true;
          let shrinkI = 5.0;
          let whatsapp4 = String.fromCharCode(99,108,108,99,95,120,95,49,52,0);
          let changee = 5.0;
         time_r8O += `${parseInt(`${libmapbufferjniK}`) / 2}`;
         relatedh = `${parseInt(`${shrinkI}`)}`;
         logoutw = 14.28 >= changee && String.fromCharCode(103,0) == relatedh;
         whatsapp4 += `${1 * parseInt(`${changee}`)}`;
         if (binddatas7) {
            break;
         }
      } while (binddatas7 && (2 > (whistlew.length | 4) || 2 > (4 | whistlew.length)));
      friendsp = !friendsp;
    const screenWidthInPixel =
      Dimensions.get("screen").width * Dimensions.get("screen").scale;

   let iconadslinkA = friendsp ? !friendsp : friendsp;
   do {
       let orangedownarrowq = 2.0;
       let historyN = 2;
         orangedownarrowq += parseFloat(`${3 >> (Math.min(Math.abs(historyN), 1))}`);
      for (let l = 0; l < 2; l++) {
          let networkv = 1.0;
          let upgradeN = 3.0;
          let predictionarrowq = String.fromCharCode(100,101,99,108,116,121,112,101,95,49,95,56,0);
          let splashs = String.fromCharCode(114,95,55,57,95,97,112,112,114,101,99,97,116,105,111,110,104,111,117,114,115,0);
          let shielddoneq = 5;
         orangedownarrowq /= Math.max(parseFloat(`${historyN}`), 5);
         networkv -= splashs.length;
         upgradeN *= shielddoneq << (Math.min(Math.abs(parseInt(`${networkv}`)), 5));
         predictionarrowq += `${parseInt(`${upgradeN}`) | 1}`;
         splashs = `${1 % (Math.max(shielddoneq, 9))}`;
      }
      if ((historyN + 4) <= 5) {
         orangedownarrowq /= Math.max(4, parseFloat(`${2 % (Math.max(historyN, 6))}`));
      }
         historyN /= Math.max(1 ^ parseInt(`${orangedownarrowq}`), 2);
      for (let l = 0; l < 1; l++) {
         historyN *= parseInt(`${orangedownarrowq}`);
      }
         historyN /= Math.max(parseInt(`${orangedownarrowq}`), 4);
      friendsp = rootv == String.fromCharCode(54,0);
      if (iconadslinkA) {
         break;
      }
   } while (iconadslinkA && (!changey.startsWith(`${friendsp}`)));
       let template_df = 1.0;
          let mintegralQ = 1;
         template_df *= parseFloat(`${parseInt(`${template_df}`) >> (Math.min(4, Math.abs(1)))}`);
         mintegralQ *= mintegralQ;
         template_df -= parseFloat(`${parseInt(`${template_df}`)}`);
          let privilegeL = String.fromCharCode(97,99,101,110,99,95,107,95,54,57,0);
          let rankJ = 4.0;
         template_df += parseFloat(`${2}`);
         privilegeL += `${parseInt(`${rankJ}`) % (Math.max(3, 6))}`;
         rankJ *= parseFloat(`${privilegeL.length}`);
      changey = `${((friendsp ? 2 : 4) >> (Math.min(Math.abs(1), 5)))}`;
    if (Platform.OS === "android") {
      
      settings[
        ATBannerRNSDK.kATBannerAdLoadingExtraBannerAdSizeStruct
      ] = ATBannerRNSDK.createLoadAdSize(
        screenWidthInPixel,
        (TOPON_BANNER_HEIGHT * Dimensions.get("screen").scale * 50) / 320
      );

       let castB = 1.0;
       let time_rk = String.fromCharCode(112,95,53,57,95,109,97,115,107,101,100,99,108,97,109,112,0);
       let redirectQ = 5;
      let fnewarchdefaultsG = 7575152 >= time_rk.length;
      do {
         time_rk = `${redirectQ}`;
         if (fnewarchdefaultsG) {
            break;
         }
      } while (fnewarchdefaultsG && ((time_rk.length + redirectQ) > 5 || (5 + redirectQ) > 1));
      while (1.61 > (castB + redirectQ) || 1 > (redirectQ + parseInt(`${castB}`))) {
         redirectQ |= time_rk.length % (Math.max(3, 4));
         break;
      }
      while (time_rk.length < redirectQ) {
         time_rk += `${time_rk.length}`;
         break;
      }
         castB -= redirectQ;
         time_rk += `${redirectQ % 1}`;
      for (let s = 0; s < 3; s++) {
         castB -= redirectQ + 2;
      }
      while (2 > (parseInt(`${castB}`) + time_rk.length) || (3.54 + castB) > 4.35) {
         time_rk += `${2 - parseInt(`${castB}`)}`;
         break;
      }
      if ((time_rk.length ^ redirectQ) >= 2 && (redirectQ ^ time_rk.length) >= 2) {
         time_rk = "2";
      }
       let libtobv: Array<any> = [String.fromCharCode(102,116,118,102,111,108,100,101,114,111,112,101,110,95,110,95,51,48,0), String.fromCharCode(98,95,54,56,95,97,110,111,116,104,101,114,0), String.fromCharCode(97,117,116,111,114,101,109,111,118,101,95,120,95,49,48,0)];
       let unreadq: Array<any> = [String.fromCharCode(101,110,117,109,101,114,97,116,101,95,102,95,52,57,0), String.fromCharCode(115,117,103,103,101,115,116,101,100,95,114,95,53,55,0), String.fromCharCode(97,114,99,95,101,95,52,57,0)];
      friendsp = !friendsp;
   while (stylesZ) {
       let leakcheckern = String.fromCharCode(107,95,55,56,95,115,112,97,99,101,114,115,0);
       let vignettea = String.fromCharCode(119,101,101,107,100,97,121,115,95,109,95,54,50,0);
       let plust = 3;
       let philippinesJ = 3.0;
       let unreadB = String.fromCharCode(112,114,101,102,105,120,101,100,95,103,95,52,51,0);
      let telemetryH = philippinesJ <= 9875339.0;
      do {
         philippinesJ /= Math.max(plust, 2);
         if (telemetryH) {
            break;
         }
      } while (telemetryH && (philippinesJ > 5.96));
       let customn = 2.0;
       let backQ = 2;
         customn /= Math.max(parseInt(`${customn}`), 2);
      let scrollviewo = 7680114 <= leakcheckern.length;
      do {
         leakcheckern = `${leakcheckern.length}`;
         if (scrollviewo) {
            break;
         }
      } while (scrollviewo && (vignettea.includes(leakcheckern)));
      if (4 <= unreadB.length) {
         customn *= unreadB.length;
      }
      if (3 > (2 | vignettea.length)) {
         vignettea += `${vignettea.length}`;
      }
      let iconrightorangeP = leakcheckern.length <= 9718479;
      do {
          let libreactx: Array<any> = [String.fromCharCode(103,95,51,52,95,99,114,111,108,108,0), String.fromCharCode(109,95,52,50,95,105,115,112,97,99,107,101,100,0)];
          let iconcalendar_ = 3.0;
         leakcheckern = "3";
         libreactx.push(libreactx.length);
         iconcalendar_ *= parseInt(`${iconcalendar_}`) >> (Math.min(libreactx.length, 5));
         if (iconrightorangeP) {
            break;
         }
      } while (iconrightorangeP && (5 < leakcheckern.length && vignettea == String.fromCharCode(49,0)));
      let backG = 6443594 <= backQ;
      do {
         backQ %= Math.max(2, backQ);
         if (backG) {
            break;
         }
      } while (((backQ / (Math.max(parseInt(`${customn}`), 10))) >= 2 || (customn / (Math.max(4.34, 7))) >= 5.1) && backG);
         backQ >>= Math.min(Math.abs(vignettea.length - plust), 2);
         backQ >>= Math.min(2, Math.abs(unreadB.length & 2));
      stylesZ = 72 > vignettea.length;
      break;
   }
      

   let libreanimated0 = hometeamfieldB.size >= 5899112;
   do {
      hometeamfieldB.set(`${stylesZ}`, 3 << (Math.min(Math.abs(parseInt(`${modulesv}`)), 4)));
      if (libreanimated0) {
         break;
      }
   } while ((!stylesZ) && libreanimated0);
   while (!friendsp || stylesZ) {
      stylesZ = !stylesZ;
      break;
   }
      ATBannerRNSDK.loadAd(ANDROID_HOME_PAGE_BANNER_ADS, settings);

      stylesZ = exampleimageD.length == modulesv;
   while ((exampleimageD.length | hometeamfieldB.size) == 1 && (exampleimageD.length | hometeamfieldB.size) == 1) {
      exampleimageD.push(3);
      break;
   }
      ATBannerRNSDK.loadAd(ANDROID_PLAY_DETAILS_BANNER_ADS, settings);

      hometeamfieldB = new Map([[`${exampleimageD.length}`, (String.fromCharCode(78,0) == rootv ? rootv.length : exampleimageD.length)]]);
   while (5 < (parseInt(`${modulesv}`) / 1) && 1.72 < (4.6 / (Math.max(9, modulesv)))) {
       let groupi = String.fromCharCode(116,104,97,119,95,97,95,55,53,0);
       let libjsiW = 5.0;
       let stylesg = String.fromCharCode(115,116,114,105,110,103,95,56,95,49,52,0);
       let ewardedY = 1.0;
       let delegate_ms = 1.0;
       let policyU = 0.0;
          let unewinterstitialQ = String.fromCharCode(115,99,101,110,97,114,105,111,95,56,95,55,53,0);
          let bodan1 = 5.0;
          let smallX = String.fromCharCode(108,95,48,95,116,111,112,105,99,97,108,0);
         policyU += parseFloat(`${1}`);
         unewinterstitialQ = `${1 + parseInt(`${bodan1}`)}`;
         bodan1 -= (String.fromCharCode(89,0) == unewinterstitialQ ? smallX.length : unewinterstitialQ.length);
         smallX += "3";
         libjsiW -= parseFloat(`${parseInt(`${delegate_ms}`) ^ 3}`);
      let tickedN = 5097529.0 <= ewardedY;
      do {
         ewardedY -= 3;
         if (tickedN) {
            break;
         }
      } while ((!stylesg.includes(`${ewardedY}`)) && tickedN);
         stylesg = `${2 + parseInt(`${delegate_ms}`)}`;
      if (policyU > parseFloat(`${groupi.length}`)) {
          let embedu: Array<any> = [String.fromCharCode(119,95,56,51,95,97,117,116,111,114,101,115,105,122,105,110,103,0), String.fromCharCode(113,117,97,108,105,116,121,95,117,95,55,49,0)];
          let unread9 = 2.0;
         groupi += "2";
         embedu.push(embedu.length);
         unread9 -= embedu.length / (Math.max(2, 6));
      }
       let videovare: Array<any> = [String.fromCharCode(100,101,114,105,118,97,116,105,111,110,95,110,95,55,55,0), String.fromCharCode(99,111,109,112,114,101,115,115,95,97,95,57,52,0), String.fromCharCode(106,95,53,55,95,117,110,97,114,99,104,105,118,101,100,0)];
       let langkeyC: Array<any> = [String.fromCharCode(109,105,110,105,109,105,122,101,95,108,95,54,0), String.fromCharCode(97,117,100,105,111,100,97,116,97,95,121,95,55,49,0), String.fromCharCode(100,95,52,55,95,106,112,101,103,108,105,98,0)];
         delegate_ms += parseFloat(`${2}`);
      let sansf = stylesg.length <= 4955337;
      do {
          let eactx = true;
          let goallogoS: Map<any, any> = new Map([[String.fromCharCode(107,95,53,52,95,97,116,116,105,98,117,116,101,0),true ], [String.fromCharCode(118,95,57,50,95,105,116,101,114,97,116,105,111,110,0),true ]]);
         stylesg += `${parseInt(`${policyU}`)}`;
         eactx = (((eactx ? goallogoS.size : 8) ^ goallogoS.size) > 57);
         if (sansf) {
            break;
         }
      } while ((langkeyC.length <= stylesg.length) && sansf);
       let iconscheduleI = false;
         stylesg = `${parseInt(`${policyU}`) / 1}`;
         langkeyC.push(langkeyC.length - videovare.length);
      modulesv += hometeamfieldB.size;
      break;
   }
      ATBannerRNSDK.loadAd(ANDROID_TOPIC_DETAILS_BANNER_ADS, settings);

      friendsp = hometeamfieldB.size >= 27 || !stylesZ;
      rootv = `${changey.length << (Math.min(4, Math.abs(hometeamfieldB.size)))}`;
      ATBannerRNSDK.loadAd(ANDROID_TOPIC_TAB_BANNER_ADS, settings);
    }
    if (Platform.OS === "ios") {
      
      settings[
        ATBannerRNSDK.kATBannerAdLoadingExtraBannerAdSizeStruct
      ] = ATBannerRNSDK.createLoadAdSize(
        Dimensions.get("screen").width,
        TOPON_BANNER_HEIGHT
      );

      exampleimageD.push(parseInt(`${modulesv}`) << (Math.min(Math.abs(1), 1)));
      changey += "2";

      ATBannerRNSDK.loadAd(IOS_HOME_PAGE_BANNER_ADS, settings);

   let footballtrophyr = 6123917 <= exampleimageD.length;
   do {
       let reactJ = String.fromCharCode(104,95,54,51,95,100,105,97,103,110,111,115,116,105,99,115,0);
       let informationK: Map<any, any> = new Map([[String.fromCharCode(98,95,57,51,95,108,97,118,102,117,116,105,108,115,0),289], [String.fromCharCode(108,95,54,48,95,99,104,111,105,99,101,0),65], [String.fromCharCode(97,116,116,114,105,98,95,98,95,57,49,0),143]]);
       let unimplementedviewb: Map<any, any> = new Map([[String.fromCharCode(119,95,55,51,95,99,108,117,116,0),String.fromCharCode(108,95,53,53,95,114,101,110,100,105,116,105,111,110,115,0)], [String.fromCharCode(105,115,105,95,115,95,51,50,0),String.fromCharCode(117,95,52,95,99,111,110,110,0)]]);
       let darkP = String.fromCharCode(108,105,98,116,103,118,111,105,112,95,97,95,54,51,0);
       let iconsaveimagek = true;
         reactJ = `${reactJ.length + 2}`;
      if (4 > (informationK.size >> (Math.min(Math.abs(1), 2)))) {
         informationK = new Map([[`${unimplementedviewb.size}`, 1 ^ darkP.length]]);
      }
         informationK.set(`${iconsaveimagek}`, ((iconsaveimagek ? 4 : 1) & unimplementedviewb.size));
         reactJ += "1";
          let nativemoduleT = String.fromCharCode(100,111,116,116,101,100,95,55,95,49,48,48,0);
         unimplementedviewb = new Map([[darkP, (String.fromCharCode(101,0) == nativemoduleT ? darkP.length : nativemoduleT.length)]]);
          let homeactivep = 1.0;
          let selectW = 2.0;
         darkP = `${unimplementedviewb.size | parseInt(`${homeactivep}`)}`;
         homeactivep += parseInt(`${selectW}`) - 1;
         selectW /= Math.max(parseInt(`${selectW}`), 1);
         informationK = new Map([[`${informationK.size}`, unimplementedviewb.size % (Math.max(1, 10))]]);
       let gestureW: Array<any> = [String.fromCharCode(100,105,115,112,97,116,99,104,101,114,95,100,95,55,55,0), String.fromCharCode(115,101,101,110,95,100,95,54,0)];
          let liveshareP = false;
         unimplementedviewb.set(`${liveshareP}`, (unimplementedviewb.size | (liveshareP ? 4 : 1)));
         gestureW = [darkP.length << (Math.min(Math.abs(3), 5))];
          let rewardp = String.fromCharCode(99,97,108,108,98,97,99,107,115,95,122,95,57,50,0);
          let readV = 5.0;
          let morea = String.fromCharCode(109,95,55,51,95,98,97,122,101,108,0);
         informationK = new Map([[`${informationK.size}`, 1 / (Math.max(4, reactJ.length))]]);
         rewardp = `${parseInt(`${readV}`) - 1}`;
         readV *= (String.fromCharCode(104,0) == morea ? parseInt(`${readV}`) : morea.length);
      let shirt4 = 6338488 >= unimplementedviewb.size;
      do {
          let libjsiU = String.fromCharCode(118,95,57,52,95,110,101,119,114,111,119,0);
          let orientationF = 4.0;
          let graphics0 = 4.0;
         unimplementedviewb.set(libjsiU, libjsiU.length * 2);
         orientationF -= parseInt(`${orientationF}`) & parseInt(`${graphics0}`);
         graphics0 += parseFloat(`${3}`);
         if (shirt4) {
            break;
         }
      } while (shirt4 && ((unimplementedviewb.size | 3) == 5 || (unimplementedviewb.size | informationK.size) == 3));
       let formC = 2.0;
       let dropdownp = 4.0;
      while (2 <= (unimplementedviewb.size | 5)) {
         formC *= 3 % (Math.max(4, reactJ.length));
         break;
      }
      if ((1 % (Math.max(1, informationK.size))) >= 1 && 5.60 >= (informationK.size - dropdownp)) {
          let traminit: Map<any, any> = new Map([[String.fromCharCode(118,112,100,97,116,97,95,98,95,51,0),440], [String.fromCharCode(100,95,51,50,95,101,110,116,101,114,105,110,103,0),9], [String.fromCharCode(118,95,49,48,95,99,97,112,112,101,100,0),813]]);
          let typingU = String.fromCharCode(99,111,110,115,101,99,117,116,105,118,101,95,51,95,53,54,0);
          let thailandl: Map<any, any> = new Map([[String.fromCharCode(98,97,115,105,99,95,99,95,57,57,0),696], [String.fromCharCode(119,95,50,95,97,114,103,118,0),428], [String.fromCharCode(103,95,55,95,110,105,108,115,0),477]]);
         informationK.set(`${iconsaveimagek}`, 2);
         traminit = new Map([[`${thailandl.size}`, typingU.length]]);
         typingU += `${typingU.length}`;
         thailandl = new Map([[`${traminit.size}`, traminit.size - 3]]);
      }
      exampleimageD = [1];
      if (footballtrophyr) {
         break;
      }
   } while (footballtrophyr && (4 == hometeamfieldB.size));
   for (let c = 0; c < 2; c++) {
       let nterstitialY = true;
       let gradleE = String.fromCharCode(99,95,50,52,95,115,117,98,115,116,97,116,101,0);
       let mailM = 4.0;
       let libreactnativeblobO = 3;
      let themeL = nterstitialY ? !nterstitialY : nterstitialY;
      do {
         nterstitialY = 67 >= libreactnativeblobO && !nterstitialY;
         if (themeL) {
            break;
         }
      } while ((gradleE.length >= 2) && themeL);
         libreactnativeblobO ^= parseInt(`${mailM}`) >> (Math.min(Math.abs(2), 5));
      let hejiz = mailM <= 8697552.0;
      do {
          let chatD = 4.0;
          let pathd = true;
          let expiredx = String.fromCharCode(101,120,105,115,116,97,110,99,101,95,102,95,52,55,0);
          let gifty: Array<any> = [String.fromCharCode(97,118,99,111,100,101,99,114,101,115,95,102,95,55,56,0), String.fromCharCode(110,95,51,52,95,108,117,97,0)];
         mailM *= parseFloat(`${gradleE.length & 2}`);
         chatD -= (String.fromCharCode(68,0) == expiredx ? (pathd ? 5 : 2) : expiredx.length);
         pathd = expiredx.includes(`${pathd}`);
         gifty = [parseInt(`${chatD}`) << (Math.min(5, Math.abs(2)))];
         if (hejiz) {
            break;
         }
      } while ((mailM >= 2.70) && hejiz);
          let reactnativeultimatelistviewD = String.fromCharCode(98,114,97,99,107,101,116,95,105,95,50,48,0);
          let rewardvideoM = String.fromCharCode(99,111,112,121,120,95,105,95,57,49,0);
          let hejix = String.fromCharCode(102,114,97,110,100,95,118,95,51,51,0);
         nterstitialY = gradleE.includes(`${mailM}`);
         reactnativeultimatelistviewD = "3";
         rewardvideoM += `${(hejix == String.fromCharCode(113,0) ? hejix.length : rewardvideoM.length)}`;
       let libruntimeexecutorf: Map<any, any> = new Map([[String.fromCharCode(97,117,103,109,101,110,116,97,116,105,111,110,95,106,95,56,50,0),293], [String.fromCharCode(102,117,108,108,121,95,99,95,53,57,0),99], [String.fromCharCode(106,95,56,95,119,100,108,116,0),492]]);
         libreactnativeblobO += 2 & parseInt(`${mailM}`);
          let crown9 = false;
          let predictionarrowI = 3;
          let clockv = String.fromCharCode(104,95,53,95,104,117,102,102,0);
         libreactnativeblobO &= (String.fromCharCode(108,0) == gradleE ? (nterstitialY ? 4 : 4) : gradleE.length);
         crown9 = crown9 && predictionarrowI <= 10;
         predictionarrowI &= 3 % (Math.max(3, clockv.length));
         clockv = `${3 >> (Math.min(2, clockv.length))}`;
      while (5 < libreactnativeblobO) {
         libreactnativeblobO /= Math.max(gradleE.length, 5);
         break;
      }
       let helper3: Map<any, any> = new Map([[String.fromCharCode(108,95,55,49,95,97,120,105,120,0),927], [String.fromCharCode(116,95,49,48,48,95,99,97,112,105,0),811]]);
         gradleE = `${libruntimeexecutorf.size % (Math.max(helper3.size, 8))}`;
         nterstitialY = parseFloat(`${helper3.size}`) == mailM;
       let with_tM = 2.0;
      modulesv -= exampleimageD.length % (Math.max(changey.length, 7));
   }
      ATBannerRNSDK.loadAd(IOS_PLAY_DETAILS_BANNER_ADS, settings);

       let rewardpM = 0.0;
       let eventR: Array<any> = [String.fromCharCode(99,100,108,109,115,95,50,95,51,0), String.fromCharCode(117,95,49,48,48,95,102,108,111,97,116,105,110,103,0), String.fromCharCode(120,95,55,55,95,109,101,110,117,115,0)];
      let awayicon2 = 5368891.0 <= rewardpM;
      do {
         rewardpM -= parseFloat(`${parseInt(`${rewardpM}`)}`);
         if (awayicon2) {
            break;
         }
      } while (awayicon2 && (2 == (1 << (Math.min(5, eventR.length))) || (5.4 * rewardpM) == 5.39));
          let nbatrophyD = 5;
         rewardpM /= Math.max(5, parseFloat(`${2 << (Math.min(Math.abs(nbatrophyD), 3))}`));
      if (parseInt(`${rewardpM}`) > eventR.length) {
         eventR.push(1 << (Math.min(Math.abs(parseInt(`${rewardpM}`)), 3)));
      }
         rewardpM *= parseFloat(`${3}`);
         eventR.push(3 + eventR.length);
      let predictionarrowz = rewardpM <= 8238632.0;
      do {
         rewardpM /= Math.max(parseFloat(`${parseInt(`${rewardpM}`) | eventR.length}`), 2);
         if (predictionarrowz) {
            break;
         }
      } while (((rewardpM + 4.58) < 4.73) && predictionarrowz);
      hometeamfieldB.set(rootv, 2 & eventR.length);
      stylesZ = changey.length <= 31;
      ATBannerRNSDK.loadAd(IOS_TOPIC_DETAILS_BANNER_ADS, settings);

       let whiteu = String.fromCharCode(99,108,108,105,95,55,95,52,52,0);
      while (4 == whiteu.length || 4 == whiteu.length) {
         whiteu += `${whiteu.length - 3}`;
         break;
      }
         whiteu = `${2 - whiteu.length}`;
      if (whiteu.length >= 4) {
          let libreanimatedt = String.fromCharCode(103,114,97,110,117,108,97,114,95,110,95,54,57,0);
          let defaultprofilepicC = 3.0;
          let bootsplash6: Array<any> = [334, 279];
          let weatherX = String.fromCharCode(115,121,109,95,115,95,53,53,0);
         whiteu += `${whiteu.length}`;
         libreanimatedt = `${weatherX.length % 2}`;
         defaultprofilepicC += 3 << (Math.min(5, libreanimatedt.length));
         bootsplash6 = [libreanimatedt.length];
         weatherX = "2";
      }
      hometeamfieldB = new Map([[`${friendsp}`, 1 - rootv.length]]);
   for (let w = 0; w < 3; w++) {
       let zoomD = 1.0;
       let iconnewssharex = 2.0;
         zoomD *= parseFloat(`${2 % (Math.max(4, parseInt(`${iconnewssharex}`)))}`);
         zoomD += parseFloat(`${parseInt(`${iconnewssharex}`)}`);
      if (3.35 < (1 - iconnewssharex)) {
         zoomD *= parseFloat(`${2}`);
      }
      let shirt1 = iconnewssharex <= 5376898.0;
      do {
         iconnewssharex *= parseFloat(`${3 / (Math.max(6, parseInt(`${iconnewssharex}`)))}`);
         if (shirt1) {
            break;
         }
      } while ((5.51 >= zoomD) && shirt1);
      let calendarw = zoomD <= 7622280.0;
      do {
         zoomD -= parseFloat(`${parseInt(`${zoomD}`) * 1}`);
         if (calendarw) {
            break;
         }
      } while (calendarw && (4.60 > (zoomD / (Math.max(4.99, 8)))));
          let footballd = false;
         zoomD *= parseFloat(`${parseInt(`${zoomD}`) | 2}`);
         footballd = !footballd || footballd;
      rootv = `${exampleimageD.length}`;
   }
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
       let macauk: Map<any, any> = new Map([[String.fromCharCode(115,95,57,51,0),true ], [String.fromCharCode(104,97,109,98,117,114,103,101,114,95,52,95,56,0),true ]]);
    let penaltymatchicond: Array<any> = [554, 378];
    let largesoundJ = 3.0;
    let iconfeedbackB = 1;
    let borderless0 = String.fromCharCode(98,108,117,101,116,111,111,116,104,95,51,95,49,51,0);
    let twitters: Array<any> = [505, 463];
    let sendU = 3.0;
    let componentJ = String.fromCharCode(113,95,54,48,95,115,111,108,118,101,0);
    let libjsid = String.fromCharCode(99,111,110,102,105,103,95,103,95,51,49,0);
    let gestureso = 2.0;
    let blacklist9 = String.fromCharCode(115,95,54,95,105,110,116,101,114,115,101,99,116,0);
      largesoundJ += parseFloat(`${parseInt(`${sendU}`) & twitters.length}`);
      macauk = new Map([[`${twitters.length}`, 3]]);
   for (let r = 0; r < 2; r++) {
       let episodeO: Map<any, any> = new Map([[String.fromCharCode(102,105,108,101,114,101,97,100,115,116,114,101,97,109,95,105,95,55,55,0),90], [String.fromCharCode(114,101,109,111,118,101,103,114,97,105,110,95,111,95,54,57,0),937]]);
      while (2 <= (episodeO.size * 5) && 3 <= (episodeO.size * 5)) {
         episodeO.set(`${episodeO.size}`, 2 >> (Math.min(4, Math.abs(episodeO.size))));
         break;
      }
      let playlistp = episodeO.size >= 4927074;
      do {
         episodeO.set(`${episodeO.size}`, 3 - episodeO.size);
         if (playlistp) {
            break;
         }
      } while (playlistp && (2 == (episodeO.size >> (Math.min(1, Math.abs(episodeO.size)))) && (episodeO.size >> (Math.min(Math.abs(2), 2))) == 5));
      while ((episodeO.size ^ episodeO.size) == 3 && 5 == (3 ^ episodeO.size)) {
         episodeO.set(`${episodeO.size}`, 3);
         break;
      }
      macauk = new Map([[`${penaltymatchicond.length}`, (libjsid == String.fromCharCode(69,0) ? penaltymatchicond.length : libjsid.length)]]);
   }

    const androidIds = [
      ANDROID_HOME_PAGE_BANNER_ADS,
      ANDROID_PLAY_DETAILS_BANNER_ADS,
      ANDROID_TOPIC_DETAILS_BANNER_ADS,
      ANDROID_TOPIC_TAB_BANNER_ADS,
    ];

   if (5 >= iconfeedbackB) {
       let mutedi: Array<any> = [979, 289];
       let paginationC = String.fromCharCode(108,97,121,101,114,115,95,50,95,51,54,0);
       let mbnativeh = String.fromCharCode(115,109,105,108,105,101,115,95,104,95,56,0);
       let downloadedW = String.fromCharCode(120,109,117,108,116,95,56,95,55,51,0);
       let moden = String.fromCharCode(117,118,104,111,114,105,122,111,110,116,97,108,95,56,95,55,0);
       let footballfieldc = 2.0;
       let awayG = 4.0;
      for (let p = 0; p < 3; p++) {
         footballfieldc -= parseFloat(`${downloadedW.length}`);
      }
          let servicew: Map<any, any> = new Map([[String.fromCharCode(104,95,49,57,95,108,97,110,103,117,97,103,101,0),816], [String.fromCharCode(109,95,56,49,95,109,98,98,108,111,99,107,0),961]]);
          let arrowrightwithtailZ = 5;
         mbnativeh = `${paginationC.length << (Math.min(2, mbnativeh.length))}`;
         servicew.set(`${arrowrightwithtailZ}`, 1 & servicew.size);
         arrowrightwithtailZ <<= Math.min(5, Math.abs(arrowrightwithtailZ % (Math.max(3, 10))));
         footballfieldc *= parseFloat(`${1}`);
         paginationC = `${3 | parseInt(`${awayG}`)}`;
      while (mbnativeh.length > downloadedW.length) {
          let libapminsightal: Array<any> = [788, 784];
          let smallbrightnessf: Map<any, any> = new Map([[String.fromCharCode(112,95,57,53,95,105,110,115,116,114,117,99,116,105,111,110,115,0),232], [String.fromCharCode(108,95,54,55,95,119,115,118,113,97,0),121], [String.fromCharCode(103,114,111,101,115,116,108,95,51,95,57,51,0),486]]);
          let stylek = String.fromCharCode(102,95,50,57,95,104,101,108,112,101,114,115,0);
          let philippines0 = false;
          let modelsP = 5.0;
         mbnativeh += `${(moden == String.fromCharCode(65,0) ? moden.length : downloadedW.length)}`;
         libapminsightal = [smallbrightnessf.size / (Math.max(6, libapminsightal.length))];
         smallbrightnessf = new Map([[`${smallbrightnessf.size}`, 3 >> (Math.min(3, stylek.length))]]);
         stylek += `${smallbrightnessf.size}`;
         philippines0 = libapminsightal.length > smallbrightnessf.size;
         modelsP += parseFloat(`${stylek.length * parseInt(`${modelsP}`)}`);
         break;
      }
      while (downloadedW.startsWith(`${awayG}`)) {
          let current7: Map<any, any> = new Map([[String.fromCharCode(99,104,112,108,95,108,95,57,55,0),true ], [String.fromCharCode(111,95,57,54,95,109,101,109,100,98,0),false ], [String.fromCharCode(115,95,50,52,95,107,101,121,100,105,114,0),false ]]);
          let long_5np = 5.0;
         downloadedW = `${current7.size >> (Math.min(Math.abs(3), 1))}`;
         current7 = new Map([[`${long_5np}`, 2 % (Math.max(parseInt(`${long_5np}`), 10))]]);
         break;
      }
          let uimanageru = 3.0;
         awayG /= Math.max(parseFloat(`${paginationC.length}`), 5);
         uimanageru -= parseFloat(`${3}`);
         mbnativeh += `${2 << (Math.min(Math.abs(parseInt(`${awayG}`)), 4))}`;
         mutedi = [(paginationC == String.fromCharCode(65,0) ? paginationC.length : parseInt(`${awayG}`))];
         paginationC = `${(paginationC == String.fromCharCode(56,0) ? paginationC.length : mutedi.length)}`;
         downloadedW += `${downloadedW.length / (Math.max(3, 9))}`;
      while (!mbnativeh.startsWith(downloadedW)) {
         downloadedW = `${(String.fromCharCode(119,0) == downloadedW ? parseInt(`${footballfieldc}`) : downloadedW.length)}`;
         break;
      }
         mutedi.push(parseInt(`${awayG}`) << (Math.min(Math.abs(1), 1)));
          let iconarrowleftI = 5;
         paginationC += `${paginationC.length}`;
         iconarrowleftI &= iconarrowleftI + 2;
      iconfeedbackB >>= Math.min(mutedi.length, 2);
   }
       let buttonZ = String.fromCharCode(111,114,105,103,105,110,95,57,95,49,0);
       let iconpointscorep = 2.0;
       let sendb = String.fromCharCode(119,95,57,51,95,114,101,118,105,101,119,0);
      for (let e = 0; e < 1; e++) {
          let filedL: Array<any> = [String.fromCharCode(116,95,49,54,95,116,101,100,99,97,112,116,105,111,110,115,0), String.fromCharCode(110,117,108,108,97,98,108,101,114,101,115,111,108,118,101,100,95,54,95,52,53,0), String.fromCharCode(115,95,54,57,95,105,110,102,117,114,97,0)];
         iconpointscorep -= sendb.length;
         filedL = [filedL.length * filedL.length];
      }
      while (2 < (buttonZ.length * 5)) {
          let audienceg = false;
          let libreanimated8 = false;
          let yellowscoreball8 = String.fromCharCode(106,95,50,57,95,97,108,108,111,99,97,116,105,111,110,0);
          let borderless6 = String.fromCharCode(121,95,50,54,95,97,110,103,108,101,115,0);
          let valuesk = true;
         iconpointscorep -= parseInt(`${iconpointscorep}`);
         audienceg = (libreanimated8 ? valuesk : !libreanimated8);
         yellowscoreball8 = `${((valuesk ? 1 : 4) >> (Math.min(5, Math.abs((libreanimated8 ? 4 : 5)))))}`;
         borderless6 = "2";
         break;
      }
      if (buttonZ.length > parseInt(`${iconpointscorep}`)) {
         iconpointscorep += 3 % (Math.max(7, buttonZ.length));
      }
         sendb += `${buttonZ.length / (Math.max(sendb.length, 10))}`;
         iconpointscorep /= Math.max(sendb.length, 1);
         sendb += `${(sendb == String.fromCharCode(70,0) ? buttonZ.length : sendb.length)}`;
          let screenZ = String.fromCharCode(107,105,99,107,95,104,95,54,48,0);
         buttonZ += `${parseInt(`${iconpointscorep}`)}`;
         screenZ += "3";
          let libturbomodulejsijni7: Map<any, any> = new Map([[String.fromCharCode(115,104,114,117,110,107,95,55,95,49,0),221], [String.fromCharCode(112,114,111,100,117,99,116,95,104,95,54,51,0),57]]);
         buttonZ += `${parseInt(`${iconpointscorep}`) / 3}`;
         libturbomodulejsijni7.set(`${libturbomodulejsijni7.size}`, 1 % (Math.max(7, libturbomodulejsijni7.size)));
          let popupE = 2.0;
          let videojsq = 3;
         iconpointscorep -= buttonZ.length;
         popupE -= parseFloat(`${videojsq}`);
         videojsq ^= videojsq;
      componentJ = `${parseInt(`${largesoundJ}`)}`;
      blacklist9 = `${(blacklist9 == String.fromCharCode(118,0) ? parseInt(`${gestureso}`) : blacklist9.length)}`;
    const iosIds = [
      IOS_HOME_PAGE_BANNER_ADS,
      IOS_PLAY_DETAILS_BANNER_ADS,
      IOS_TOPIC_DETAILS_BANNER_ADS,
      IOS_TOPIC_TAB_BANNER_ADS,
    ];

       let exampleimages = String.fromCharCode(110,105,100,115,110,95,53,95,54,51,0);
       let rank5: Map<any, any> = new Map([[String.fromCharCode(108,105,110,101,95,119,95,52,57,0),true ], [String.fromCharCode(101,118,98,117,102,102,101,114,95,104,95,51,50,0),true ]]);
      if ((exampleimages.length & rank5.size) < 4 && 4 < (rank5.size & exampleimages.length)) {
          let foregroundf = String.fromCharCode(109,117,108,116,105,101,110,100,95,51,95,51,49,0);
          let libswscaleN = String.fromCharCode(114,95,57,48,95,111,117,116,112,117,116,0);
          let sigmobY = 3;
          let switch_obH = 0.0;
         exampleimages = `${libswscaleN.length & exampleimages.length}`;
         foregroundf += `${sigmobY}`;
         libswscaleN += `${parseInt(`${switch_obH}`)}`;
         sigmobY <<= Math.min(Math.abs(parseInt(`${switch_obH}`)), 3);
      }
      if ((rank5.size / (Math.max(2, exampleimages.length))) == 2 && (exampleimages.length / 2) == 3) {
          let greyarrowupx = String.fromCharCode(98,95,55,56,95,103,108,121,112,104,115,0);
          let macauq = 2.0;
          let delegate_tm = 5.0;
          let smallbrightnessP = String.fromCharCode(104,113,97,100,115,112,95,98,95,52,56,0);
          let minivodU = String.fromCharCode(111,95,52,55,95,115,101,114,118,105,99,101,0);
         rank5.set(smallbrightnessP, 3 | smallbrightnessP.length);
         greyarrowupx += `${parseInt(`${macauq}`)}`;
         macauq -= 1 >> (Math.min(4, Math.abs(parseInt(`${delegate_tm}`))));
         delegate_tm /= Math.max(minivodU.length, 2);
         minivodU = `${greyarrowupx.length + parseInt(`${delegate_tm}`)}`;
      }
      let selectr = 9836289 <= rank5.size;
      do {
         rank5.set(`${exampleimages}`, rank5.size - exampleimages.length);
         if (selectr) {
            break;
         }
      } while ((rank5.size <= 2) && selectr);
      while (1 >= (rank5.size >> (Math.min(exampleimages.length, 4)))) {
          let klevinw = 2;
          let mountingH = String.fromCharCode(99,111,111,108,100,111,119,110,115,95,98,95,57,50,0);
          let countdowno = String.fromCharCode(100,95,55,56,95,112,114,101,118,101,110,116,101,100,0);
          let plashm = String.fromCharCode(115,117,98,105,116,101,109,115,95,121,95,54,49,0);
         rank5 = new Map([[plashm, 1]]);
         klevinw <<= Math.min(Math.abs(3), 1);
         mountingH += `${klevinw}`;
         countdowno = `${mountingH.length ^ 2}`;
         plashm = `${mountingH.length - 2}`;
         break;
      }
          let foreground2 = false;
          let shielddoneM = String.fromCharCode(100,95,53,50,95,101,109,117,108,97,116,111,114,0);
          let pausek = 0;
         rank5.set(shielddoneM, rank5.size + 1);
         foreground2 = 55 <= pausek;
         shielddoneM = `${(pausek | (foreground2 ? 5 : 4))}`;
      for (let l = 0; l < 3; l++) {
          let forwardd = true;
          let dycreatorb = String.fromCharCode(109,95,57,54,95,97,114,102,113,0);
          let long_3P = String.fromCharCode(121,95,50,55,95,97,116,116,114,105,98,117,116,101,0);
          let animationsk = String.fromCharCode(115,97,116,117,114,97,116,101,95,119,95,54,0);
         rank5 = new Map([[`${rank5.size}`, 2 / (Math.max(3, rank5.size))]]);
         forwardd = dycreatorb == long_3P;
         dycreatorb += `${dycreatorb.length - 2}`;
         long_3P += `${(String.fromCharCode(85,0) == animationsk ? dycreatorb.length : animationsk.length)}`;
      }
      borderless0 += `${parseInt(`${gestureso}`)}`;
   let defaultprofilepice = 6746395 >= iconfeedbackB;
   do {
      iconfeedbackB >>= Math.min(Math.abs(3), 3);
      if (defaultprofilepice) {
         break;
      }
   } while (defaultprofilepice && ((iconfeedbackB & libjsid.length) > 3));
      libjsid += `${libjsid.length / 1}`;

    if (Platform.OS === "ios") {

      borderless0 += "2";
   let encryptS = 7242936.0 >= gestureso;
   do {
       let largesoundb: Map<any, any> = new Map([[String.fromCharCode(117,95,50,52,95,109,98,117,102,99,104,97,105,110,0),String.fromCharCode(100,95,50,54,95,105,115,110,111,116,116,97,112,0)], [String.fromCharCode(109,95,51,48,95,104,97,110,100,111,102,102,0),String.fromCharCode(99,95,49,51,95,109,111,99,107,115,0)]]);
       let gestureW = true;
          let iconclosewhitebgF = 3;
          let helperk = 0;
          let componento = String.fromCharCode(99,97,108,99,117,108,97,116,105,111,110,95,50,95,56,51,0);
         largesoundb.set(`${gestureW}`, (iconclosewhitebgF * (gestureW ? 1 : 5)));
         iconclosewhitebgF /= Math.max((String.fromCharCode(90,0) == componento ? componento.length : helperk), 3);
         helperk %= Math.max(componento.length, 5);
          let bgvipsport3 = String.fromCharCode(103,95,49,51,95,102,109,117,108,0);
          let whistleorangeD = false;
          let goallogoA = String.fromCharCode(110,95,55,95,102,102,118,108,0);
         gestureW = goallogoA.includes(`${gestureW}`);
         bgvipsport3 = `${((whistleorangeD ? 1 : 1))}`;
         whistleorangeD = (88 <= (bgvipsport3.length | (!whistleorangeD ? 88 : bgvipsport3.length)));
         goallogoA += "1";
      for (let u = 0; u < 1; u++) {
          let zoom6 = String.fromCharCode(97,110,105,109,97,116,105,111,110,95,109,95,51,51,0);
         gestureW = (63 < (zoom6.length + (!gestureW ? 63 : zoom6.length)));
      }
       let injuryM = 5.0;
      for (let f = 0; f < 1; f++) {
         gestureW = !gestureW;
      }
          let sliderv: Array<any> = [718, 418];
          let playlistX = String.fromCharCode(100,101,108,101,116,101,95,106,95,55,49,0);
          let nodey = 5.0;
         injuryM /= Math.max(parseFloat(`${1}`), 5);
         sliderv = [sliderv.length << (Math.min(5, Math.abs(parseInt(`${nodey}`))))];
         playlistX += `${parseInt(`${nodey}`)}`;
      gestureso *= 3;
      if (encryptS) {
         break;
      }
   } while (encryptS && (largesoundJ >= 1.33));
       let unreadW = String.fromCharCode(97,95,50,48,95,100,105,114,101,99,116,100,0);
      while (unreadW.startsWith(`${unreadW.length}`)) {
         unreadW += "3";
         break;
      }
      let filterw = unreadW == String.fromCharCode(118,117,48,102,57,99,120,0);
      do {
         unreadW += `${unreadW.length & unreadW.length}`;
         if (filterw) {
            break;
         }
      } while ((3 >= unreadW.length) && filterw);
      if (unreadW.length < 3) {
         unreadW += `${unreadW.length}`;
      }
      libjsid = `${libjsid.length * 2}`;
      iosIds.forEach((element) => {

       let description_fu = true;
       let cedbadcebfbfbfbcfecbcg = 3.0;
       let videojsE = String.fromCharCode(122,95,57,56,95,115,117,112,111,114,116,101,100,0);
      while (5 <= (videojsE.length ^ 2)) {
          let rankG: Map<any, any> = new Map([[String.fromCharCode(106,97,99,111,98,105,95,110,95,49,56,0),558], [String.fromCharCode(112,110,105,101,108,115,97,100,100,95,97,95,53,50,0),72], [String.fromCharCode(98,97,110,100,115,95,112,95,53,57,0),721]]);
          let completeS = String.fromCharCode(115,95,50,49,95,98,110,98,105,110,0);
         cedbadcebfbfbfbcfecbcg *= parseFloat(`${rankG.size << (Math.min(Math.abs(2), 5))}`);
         rankG.set(completeS, (completeS == String.fromCharCode(90,0) ? completeS.length : completeS.length));
         break;
      }
      if (5 <= (videojsE.length + 3) && (parseInt(`${cedbadcebfbfbfbcfecbcg}`) - videojsE.length) <= 3) {
          let homeplayerp: Array<any> = [788, 384, 910];
          let u_playerB = 2.0;
          let iconpointscoreg: Map<any, any> = new Map([[String.fromCharCode(114,101,116,114,105,101,118,101,95,122,95,49,48,48,0),705], [String.fromCharCode(108,97,114,103,101,115,116,95,114,95,57,48,0),490]]);
          let matches8 = String.fromCharCode(104,111,117,114,95,109,95,50,53,0);
          let eventk = 3.0;
         videojsE = "2";
         homeplayerp.push(parseInt(`${eventk}`) + homeplayerp.length);
         u_playerB -= homeplayerp.length * parseInt(`${eventk}`);
         iconpointscoreg = new Map([[`${eventk}`, (String.fromCharCode(97,0) == matches8 ? matches8.length : parseInt(`${eventk}`))]]);
      }
      let update_03G = 6466899.0 <= cedbadcebfbfbfbcfecbcg;
      do {
          let recommendationg = String.fromCharCode(120,95,57,50,95,102,97,114,101,110,100,0);
          let successW = String.fromCharCode(109,107,118,119,114,105,116,101,114,95,116,95,51,55,0);
          let iconsetting0 = String.fromCharCode(102,95,50,53,95,103,114,105,100,0);
          let roomA = true;
         cedbadcebfbfbfbcfecbcg /= Math.max(parseFloat(`${iconsetting0.length}`), 5);
         recommendationg = `${((roomA ? 1 : 2) / 1)}`;
         successW += `${(recommendationg.length | (roomA ? 3 : 2))}`;
         iconsetting0 += `${((roomA ? 1 : 1) + 2)}`;
         if (update_03G) {
            break;
         }
      } while (update_03G && (3.68 >= (2.47 + cedbadcebfbfbfbcfecbcg) || description_fu));
          let basketball0 = 0.0;
         description_fu = (basketball0 - cedbadcebfbfbfbcfecbcg) <= 11.88;
       let trophyx: Map<any, any> = new Map([[String.fromCharCode(113,95,52,95,105,110,100,105,99,105,101,115,0),38], [String.fromCharCode(99,111,114,114,101,108,97,116,105,111,110,95,102,95,55,49,0),230], [String.fromCharCode(97,97,117,100,105,111,95,119,95,49,49,0),751]]);
       let homeplayerH: Map<any, any> = new Map([[String.fromCharCode(119,105,112,101,95,53,95,50,52,0),803], [String.fromCharCode(109,95,57,54,95,115,116,105,99,107,101,114,115,101,116,0),909]]);
         cedbadcebfbfbfbcfecbcg -= parseFloat(`${videojsE.length * trophyx.size}`);
      let renderF = homeplayerH.size <= 9612280;
      do {
          let iconclosewhitebg4: Array<any> = [911, 162, 609];
          let finit_glD = String.fromCharCode(114,101,97,115,115,109,95,114,95,52,53,0);
         homeplayerH = new Map([[`${trophyx.size}`, 3]]);
         iconclosewhitebg4.push(finit_glD.length);
         finit_glD += `${2 >> (Math.min(1, finit_glD.length))}`;
         if (renderF) {
            break;
         }
      } while ((2 <= (homeplayerH.size >> (Math.min(4, Math.abs(trophyx.size)))) || 1 <= (2 >> (Math.min(1, Math.abs(trophyx.size))))) && renderF);
      if (1 >= trophyx.size) {
          let orangej = 0.0;
         description_fu = cedbadcebfbfbfbcfecbcg <= 67.82 && trophyx.size <= 91;
         orangej *= parseFloat(`${parseInt(`${orangej}`)}`);
      }
         description_fu = 44.44 <= cedbadcebfbfbfbcfecbcg;
      iconfeedbackB |= 1 ^ borderless0.length;
   if (1 >= componentJ.length) {
      macauk = new Map([[`${largesoundJ}`, 2]]);
   }
       let clockF = false;
       let episodesS: Array<any> = [616, 190, 88];
       let predictionc = String.fromCharCode(97,116,116,97,99,104,109,101,110,116,115,95,110,95,51,53,0);
      while (3 > episodesS.length) {
          let clubN = String.fromCharCode(114,103,98,97,95,117,95,53,52,0);
          let cornershootH = 5.0;
          let bootsplashH = String.fromCharCode(107,95,49,55,95,109,112,101,103,97,117,100,105,111,100,101,99,116,97,98,0);
         clockF = episodesS.length < 95;
         clubN += "3";
         cornershootH -= bootsplashH.length;
         bootsplashH += `${parseInt(`${cornershootH}`) % (Math.max(clubN.length, 9))}`;
         break;
      }
         clockF = String.fromCharCode(86,0) == predictionc;
      if (5 >= predictionc.length) {
          let matchesj = String.fromCharCode(110,95,53,50,95,105,110,116,101,114,115,101,99,116,105,110,103,0);
         predictionc = `${(predictionc == String.fromCharCode(68,0) ? predictionc.length : episodesS.length)}`;
         matchesj = `${matchesj.length}`;
      }
         predictionc = `${predictionc.length + episodesS.length}`;
      for (let w = 0; w < 1; w++) {
          let turne = 3;
          let icontransferclubz: Array<any> = [String.fromCharCode(99,104,105,109,112,95,117,95,54,0), String.fromCharCode(117,95,53,95,101,118,97,108,115,0)];
          let type_bj = String.fromCharCode(114,101,102,99,111,117,110,116,101,100,95,52,95,51,49,0);
          let commone = String.fromCharCode(112,111,108,121,107,101,121,95,110,95,51,50,0);
          let arrows = 4.0;
         predictionc = `${((clockF ? 2 : 5) % 1)}`;
         turne >>= Math.min(1, commone.length);
         icontransferclubz = [3 ^ parseInt(`${arrows}`)];
         type_bj = `${parseInt(`${arrows}`) * 3}`;
         commone += `${3 / (Math.max(1, turne))}`;
      }
       let descl = String.fromCharCode(109,95,51,52,95,112,105,99,109,101,109,115,101,116,0);
       let downloader8 = String.fromCharCode(109,100,99,118,95,101,95,57,53,0);
         predictionc += "3";
         downloader8 = "1";
         clockF = downloader8 == String.fromCharCode(83,0);
      blacklist9 += `${macauk.size}`;
        ATBannerRNSDK.hideAd(element);
      });
    } else {

   if (2.28 > (parseFloat(`${componentJ.length}`) + sendU)) {
      sendU *= parseFloat(`${parseInt(`${largesoundJ}`) + libjsid.length}`);
   }
      libjsid = "3";
       let dependencyG = String.fromCharCode(101,118,105,99,101,95,100,95,50,0);
       let iconviewergifr = 1.0;
       let libreacto = String.fromCharCode(115,116,116,115,95,103,95,56,0);
      while ((libreacto.length << (Math.min(Math.abs(1), 3))) <= 3 && (iconviewergifr / (Math.max(4, libreacto.length))) <= 3.22) {
         libreacto = `${(String.fromCharCode(87,0) == libreacto ? parseInt(`${iconviewergifr}`) : libreacto.length)}`;
         break;
      }
      if (iconviewergifr <= dependencyG.length) {
         dependencyG = `${3 | libreacto.length}`;
      }
      while ((parseInt(`${iconviewergifr}`) - 3) > 3 && (iconviewergifr - 2.36) > 5.83) {
          let arrowrightwithtailq: Map<any, any> = new Map([[String.fromCharCode(101,108,108,105,103,105,98,108,101,95,56,95,57,48,0),570], [String.fromCharCode(97,118,101,114,95,116,95,53,50,0),559]]);
          let mintegralm = 5;
          let interstitialv = 4.0;
          let y_imagel = String.fromCharCode(117,110,98,111,120,95,122,95,57,53,0);
          let analyticsG = 1.0;
         iconviewergifr -= 2;
         arrowrightwithtailq = new Map([[`${arrowrightwithtailq.size}`, mintegralm & 2]]);
         mintegralm *= arrowrightwithtailq.size;
         interstitialv /= Math.max(1 ^ parseInt(`${analyticsG}`), 2);
         y_imagel += `${mintegralm}`;
         analyticsG += parseFloat(`${mintegralm}`);
         break;
      }
         dependencyG = `${parseInt(`${iconviewergifr}`)}`;
      for (let h = 0; h < 3; h++) {
         iconviewergifr += dependencyG.length;
      }
          let manifestC: Array<any> = [710, 85, 529];
          let neona = true;
         dependencyG += `${((neona ? 5 : 5))}`;
         manifestC = [manifestC.length];
         neona = (manifestC.length | manifestC.length) > 44;
       let reportE = true;
          let iconbackwhiteG = false;
         libreacto += `${(dependencyG == String.fromCharCode(67,0) ? libreacto.length : dependencyG.length)}`;
         iconbackwhiteG = (!iconbackwhiteG ? iconbackwhiteG : !iconbackwhiteG);
          let sourceh = 0;
          let baidu0 = String.fromCharCode(112,95,56,57,95,115,112,101,101,120,0);
         dependencyG += `${3 >> (Math.min(1, Math.abs(parseInt(`${iconviewergifr}`))))}`;
         sourceh /= Math.max(sourceh, 1);
         baidu0 += "1";
      blacklist9 += `${blacklist9.length}`;
      androidIds.forEach((element) => {

   let faviconO = 7361080.0 >= gestureso;
   do {
       let private_zgh: Map<any, any> = new Map([[String.fromCharCode(119,95,51,57,95,114,116,114,101,101,0),125], [String.fromCharCode(114,101,109,97,114,107,95,116,95,49,54,0),428]]);
       let signinupW = String.fromCharCode(108,95,50,50,95,118,120,119,111,114,107,115,0);
       let xvodv = String.fromCharCode(97,100,118,97,110,99,101,100,95,121,95,49,53,0);
         xvodv += `${3 + signinupW.length}`;
          let dependenciesZ = String.fromCharCode(119,101,114,101,95,108,95,49,49,0);
          let whitevideoliveA = String.fromCharCode(100,101,115,114,111,121,95,118,95,56,50,0);
         xvodv = `${private_zgh.size}`;
         dependenciesZ = `${whitevideoliveA.length & dependenciesZ.length}`;
         whitevideoliveA += `${whitevideoliveA.length | 1}`;
         xvodv += `${xvodv.length + private_zgh.size}`;
         signinupW = `${xvodv.length}`;
      for (let r = 0; r < 3; r++) {
         signinupW = "2";
      }
      while (signinupW == xvodv) {
         xvodv = `${signinupW.length | 3}`;
         break;
      }
         xvodv = `${private_zgh.size}`;
      for (let a = 0; a < 3; a++) {
         signinupW += `${xvodv.length & 3}`;
      }
       let annerk = 3.0;
      gestureso *= 2;
      if (faviconO) {
         break;
      }
   } while (((parseInt(`${gestureso}`) / (Math.max(componentJ.length, 9))) == 3 && (gestureso / 3.100) == 5.25) && faviconO);
      twitters.push(macauk.size);
   if ((libjsid.length * 3) < 5 && (libjsid.length * 3) < 2) {
       let libreactS: Array<any> = [8, 36];
       let libreactC = false;
       let footballv = 3;
       let template_mV = String.fromCharCode(101,110,99,95,98,95,57,57,0);
       let libfbjniY: Map<any, any> = new Map([[String.fromCharCode(99,111,114,114,101,115,112,111,110,100,101,110,116,115,95,120,95,53,53,0),false ], [String.fromCharCode(101,114,105,97,108,105,122,97,116,105,111,110,95,120,95,52,56,0),false ]]);
         template_mV += `${((libreactC ? 2 : 1) + footballv)}`;
      while (!libreactC) {
         libreactS = [(template_mV.length ^ (libreactC ? 4 : 5))];
         break;
      }
      for (let v = 0; v < 2; v++) {
         template_mV = `${template_mV.length}`;
      }
         template_mV += `${libfbjniY.size}`;
          let bellT = 4;
         libreactS = [libfbjniY.size ^ 2];
         bellT -= bellT ^ bellT;
         libfbjniY.set(template_mV, libreactS.length);
      while (!libreactC) {
         libreactC = libreactS.length > 91;
         break;
      }
      let playercommong = libfbjniY.size <= 5175303;
      do {
         libfbjniY.set(`${footballv}`, 1);
         if (playercommong) {
            break;
         }
      } while ((5 == (4 ^ libreactS.length) || (libfbjniY.size ^ libreactS.length) == 4) && playercommong);
         libfbjniY = new Map([[`${footballv}`, template_mV.length]]);
      let footballL = libreactC ? !libreactC : libreactC;
      do {
         libreactC = template_mV == String.fromCharCode(103,0);
         if (footballL) {
            break;
         }
      } while ((!libreactC) && footballL);
      for (let c = 0; c < 1; c++) {
          let expandy = 1.0;
         template_mV = `${libfbjniY.size}`;
         expandy *= parseFloat(`${3}`);
      }
          let iconarrowrightwhiteT: Array<any> = [762, 707];
          let predictionC: Array<any> = [177, 882];
          let cornerC = 0;
         footballv <<= Math.min(2, Math.abs(2 | cornerC));
         iconarrowrightwhiteT.push(iconarrowrightwhiteT.length);
         predictionC = [predictionC.length];
         cornerC += predictionC.length;
      while (1 < (template_mV.length / 1) || 1 < (template_mV.length / (Math.max(10, libreactS.length)))) {
         libreactS.push(1);
         break;
      }
      for (let q = 0; q < 1; q++) {
         libreactC = template_mV.length <= 12;
      }
          let imagemanagerg = String.fromCharCode(117,95,49,54,95,101,110,99,111,100,101,114,115,0);
          let libfollyM = false;
         libreactC = 11 >= imagemanagerg.length && libfbjniY.size >= 11;
         imagemanagerg += `${((libfollyM ? 2 : 5) & 3)}`;
      iconfeedbackB <<= Math.min(3, Math.abs(2 * penaltymatchicond.length));
   }
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
          }, 500);
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
       let dangerE = 5.0;
    let embedj = String.fromCharCode(112,116,114,95,121,95,53,50,0);
    let bootsplashf: Array<any> = [676, 233];
    let toponv: Map<any, any> = new Map([[String.fromCharCode(114,117,110,110,105,110,103,95,56,95,52,54,0),397], [String.fromCharCode(99,95,50,57,95,105,115,115,117,105,110,103,0),267], [String.fromCharCode(99,111,100,101,99,115,95,101,95,57,50,0),318]]);
    let schedulery = true;
    let filed6 = 5.0;
    let product4 = 4;
    let j_countD = String.fromCharCode(119,100,108,102,99,110,95,53,95,52,56,0);
    let chatroombackgroundf = 3;
    let appleN = String.fromCharCode(115,95,49,55,95,105,110,115,112,101,99,116,97,98,108,101,0);
    let iconarrowrightwhitel = String.fromCharCode(118,95,51,95,110,97,110,112,97,0);
    let mimeF: Map<any, any> = new Map([[String.fromCharCode(121,95,50,57,95,112,114,101,101,110,99,111,100,101,0),777], [String.fromCharCode(110,95,53,53,95,100,101,118,105,99,101,115,0),506], [String.fromCharCode(100,105,115,116,97,110,99,101,95,56,95,51,49,0),480]]);
    let profileactive2 = false;
    let moonr = String.fromCharCode(107,95,57,50,95,108,111,116,116,105,101,107,101,121,112,97,116,104,0);
   if (4 >= embedj.length) {
      embedj += `${chatroombackgroundf | 3}`;
   }

    if (!route) return;

      filed6 /= Math.max(parseFloat(`${parseInt(`${filed6}`)}`), 5);
    if (Platform.OS === "android") {

   let tooltipsj = filed6 >= 9496057.0;
   do {
      filed6 += parseFloat(`${j_countD.length - 3}`);
      if (tooltipsj) {
         break;
      }
   } while (((parseFloat(`${embedj.length}`) - filed6) < 2.100) && tooltipsj);
      const screenWidthInPixel = Dimensions.get("screen").width * scale;

   while (!embedj.startsWith(`${toponv.size}`)) {
       let encryptI = false;
       let subinH = false;
      let scorek = encryptI ? !encryptI : encryptI;
      do {
         encryptI = !subinH;
         if (scorek) {
            break;
         }
      } while (scorek && (!subinH));
       let containerj = String.fromCharCode(105,115,109,108,95,120,95,51,48,0);
      for (let h = 0; h < 1; h++) {
         subinH = !subinH;
      }
         encryptI = containerj.length >= 68;
         encryptI = (!encryptI ? subinH : !encryptI);
       let homeactiveL = 0;
       let lessn = 1;
      embedj += `${embedj.length - chatroombackgroundf}`;
      break;
   }
      

      product4 *= appleN.length;
      const screenHeightInPixel = Dimensions.get("screen").height * scale;

   while (3 == (toponv.size & j_countD.length) && (j_countD.length & 3) == 3) {
       let termsu: Map<any, any> = new Map([[String.fromCharCode(98,97,110,100,105,110,103,95,57,95,51,51,0),34], [String.fromCharCode(114,116,112,101,110,99,95,48,95,56,57,0),587]]);
       let mathU = String.fromCharCode(97,95,51,53,95,106,102,105,101,108,100,115,0);
         termsu.set(`${mathU}`, (mathU == String.fromCharCode(55,0) ? mathU.length : termsu.size));
       let zoomo = String.fromCharCode(106,95,54,54,95,115,111,99,107,115,0);
       let grayP = String.fromCharCode(99,114,108,115,95,122,95,54,53,0);
       let iconfeedback8 = String.fromCharCode(107,95,57,52,95,114,101,112,101,97,116,101,100,0);
      while (!zoomo.endsWith(`${grayP.length}`)) {
         zoomo += `${3 * zoomo.length}`;
         break;
      }
      for (let f = 0; f < 3; f++) {
         iconfeedback8 = `${grayP.length | 3}`;
      }
         mathU += `${(iconfeedback8 == String.fromCharCode(81,0) ? termsu.size : iconfeedback8.length)}`;
      j_countD = `${(String.fromCharCode(50,0) == j_countD ? j_countD.length : parseInt(`${dangerE}`))}`;
      break;
   }
      

      toponv.set(`${chatroombackgroundf}`, 1);
      const statusBarHeightInPixel = (StatusBar.currentHeight ?? 0) * scale;

   if (5.2 >= (product4 * dangerE)) {
      product4 ^= 3 >> (Math.min(1, bootsplashf.length));
   }
      

   while ((parseInt(`${dangerE}`) / (Math.max(4, embedj.length))) > 1) {
      dangerE *= (j_countD == String.fromCharCode(75,0) ? parseInt(`${dangerE}`) : j_countD.length);
      break;
   }
      const navbarHeightInPixel =
        (navbarHeight != 0 ? navbarHeight - 1 : 0) * scale;
      

      appleN = `${embedj.length}`;

      setSystemNavHeight(await getNavigationBarHeight());

   if (2 >= (embedj.length / 4)) {
      filed6 *= parseFloat(`${appleN.length / 1}`);
   }
      

       let benefitr: Array<any> = [897, 287];
       let cedbadcebfbfbfbcfecbcC = 1.0;
       let cornerZ = 2.0;
         benefitr = [1];
          let m_lockN = String.fromCharCode(99,104,105,108,100,114,101,110,95,118,95,52,51,0);
          let logov = String.fromCharCode(105,102,105,108,116,101,114,95,54,95,56,49,0);
          let ewardedD = 2.0;
         cedbadcebfbfbfbcfecbcC += parseFloat(`${logov.length >> (Math.min(5, m_lockN.length))}`);
         m_lockN = `${parseInt(`${ewardedD}`) + 3}`;
         logov += `${parseInt(`${ewardedD}`) ^ 2}`;
      schedulery = 27.53 == dangerE && schedulery;

      const adsTopInPixel =
        screenHeightInPixel -
        statusBarHeightInPixel -
        navbarHeightInPixel -
        systemNavHeight;

       let zoomc = String.fromCharCode(108,95,49,95,110,111,105,110,100,101,120,0);
       let informationS = 4.0;
       let readp = 0;
      let libapminsightbA = informationS <= 5905435.0;
      do {
         informationS *= parseFloat(`${readp}`);
         if (libapminsightbA) {
            break;
         }
      } while (libapminsightbA && (3.71 >= informationS));
       let productf = String.fromCharCode(109,117,108,116,105,95,122,95,52,52,0);
         zoomc += `${1 ^ readp}`;
          let homeplayers = true;
          let progresss = 4;
          let codegeno = String.fromCharCode(112,95,50,49,95,97,97,110,100,99,116,116,97,98,0);
         readp >>= Math.min(1, Math.abs(zoomc.length * productf.length));
         homeplayers = 72 == progresss;
         progresss |= codegeno.length * 1;
         codegeno = `${(String.fromCharCode(108,0) == codegeno ? progresss : codegeno.length)}`;
      while (3 == (parseInt(`${informationS}`) + productf.length)) {
         informationS *= parseFloat(`${parseInt(`${informationS}`)}`);
         break;
      }
      product4 |= product4;
      

   while (bootsplashf.length >= 2) {
      bootsplashf.push(1 ^ parseInt(`${filed6}`));
      break;
   }

      let huaweiOffset = 0;

   if (1 > (j_countD.length / (Math.max(1, 7)))) {
      j_countD += `${((schedulery ? 5 : 1))}`;
   }

      

   let codet = filed6 >= 5805064.0;
   do {
       let tumbnailz = 5.0;
       let shared5: Map<any, any> = new Map([[String.fromCharCode(109,97,110,97,103,101,109,101,110,116,95,100,95,57,55,0),true ], [String.fromCharCode(103,97,112,95,115,95,56,49,0),true ]]);
       let gpayR = 4;
       let awayx = String.fromCharCode(97,109,101,114,97,95,101,95,56,48,0);
      let gestureZ = 7923923.0 >= tumbnailz;
      do {
         tumbnailz *= parseFloat(`${parseInt(`${tumbnailz}`) + 1}`);
         if (gestureZ) {
            break;
         }
      } while ((Array.from(shared5.keys()).includes(`${tumbnailz}`)) && gestureZ);
      if (shared5.get(`${gpayR}`) != null) {
         shared5.set(awayx, gpayR);
      }
         tumbnailz -= parseFloat(`${awayx.length / 2}`);
         gpayR /= Math.max(shared5.size, 4);
      for (let u = 0; u < 3; u++) {
         tumbnailz += parseFloat(`${gpayR}`);
      }
      if ((awayx.length % (Math.max(4, 5))) >= 3 && 3 >= (gpayR % 4)) {
         gpayR &= parseInt(`${tumbnailz}`);
      }
         gpayR <<= Math.min(Math.abs(3 - parseInt(`${tumbnailz}`)), 5);
         shared5.set(`${tumbnailz}`, shared5.size);
         awayx += `${3 + parseInt(`${tumbnailz}`)}`;
      while (2 < (parseInt(`${tumbnailz}`) - awayx.length) && (tumbnailz - 4.52) < 1.27) {
         tumbnailz -= parseFloat(`${shared5.size + 1}`);
         break;
      }
      let zhubo2 = 8987318 <= gpayR;
      do {
         gpayR >>= Math.min(5, Math.abs((String.fromCharCode(87,0) == awayx ? gpayR : awayx.length)));
         if (zhubo2) {
            break;
         }
      } while ((4 > (shared5.size - 1) || 1 > (shared5.size - gpayR)) && zhubo2);
      let filledh = 8856931.0 >= tumbnailz;
      do {
          let iconqqE = 5.0;
         tumbnailz -= parseFloat(`${awayx.length >> (Math.min(Math.abs(2), 2))}`);
         iconqqE -= parseInt(`${iconqqE}`) + 2;
         if (filledh) {
            break;
         }
      } while ((3 > (shared5.size | 2) && (2 % (Math.max(5, shared5.size))) > 3) && filledh);
      filed6 -= parseFloat(`${parseInt(`${dangerE}`)}`);
      if (codet) {
         break;
      }
   } while ((2.53 == (5.94 - filed6)) && codet);
      

   while (chatroombackgroundf <= dangerE) {
      dangerE -= 3;
      break;
   }
      

   while (!schedulery) {
      mimeF = new Map([[`${product4}`, parseInt(`${dangerE}`) / (Math.max(4, product4))]]);
      break;
   }
      

   let eighteen7 = String.fromCharCode(106,50,98,117,110,52,106,0) == appleN;
   do {
      appleN = `${1 / (Math.max(7, mimeF.size))}`;
      if (eighteen7) {
         break;
      }
   } while (eighteen7 && (j_countD != String.fromCharCode(76,0)));

      

   let i_titleE = j_countD == String.fromCharCode(100,108,112,111,95,104,122,0);
   do {
      j_countD = "1";
      if (i_titleE) {
         break;
      }
   } while (((j_countD.length ^ 3) >= 4 || (j_countD.length ^ toponv.size) >= 3) && i_titleE);
      

       let smallorangemanf = String.fromCharCode(99,95,52,48,95,97,110,116,105,97,108,105,97,115,0);
       let libfbO: Array<any> = [216, 283];
       let launcherK = false;
       let customd: Map<any, any> = new Map([[String.fromCharCode(108,95,52,52,95,100,101,97,100,108,111,99,107,101,100,0),910], [String.fromCharCode(103,95,56,57,95,110,101,118,101,114,0),847]]);
       let libruntimeexecutorD: Map<any, any> = new Map([[String.fromCharCode(97,95,51,48,95,102,108,97,115,104,105,110,103,0),425], [String.fromCharCode(99,95,50,55,95,116,114,97,99,101,0),491], [String.fromCharCode(104,95,51,57,95,116,104,114,101,115,104,111,108,100,0),917]]);
         customd.set(smallorangemanf, 1 * smallorangemanf.length);
         customd.set(smallorangemanf, smallorangemanf.length);
       let smallorangemanx: Array<any> = [361, 66, 101];
         launcherK = !launcherK;
      let dropdownQ = 5410184 >= customd.size;
      do {
         customd.set(`${libfbO.length}`, 2);
         if (dropdownQ) {
            break;
         }
      } while ((customd.size >= 4) && dropdownQ);
          let template_4uC = 2;
         smallorangemanf += `${template_4uC}`;
          let stationi = String.fromCharCode(104,95,56,56,95,98,116,110,99,108,105,99,107,0);
         libruntimeexecutorD.set(`${smallorangemanx.length}`, libruntimeexecutorD.size | 2);
         stationi += `${(stationi == String.fromCharCode(79,0) ? stationi.length : stationi.length)}`;
          let phoneshareG: Map<any, any> = new Map([[String.fromCharCode(101,95,54,95,118,97,108,105,100,97,116,97,98,108,101,0),407], [String.fromCharCode(98,97,115,101,117,114,108,95,113,95,57,52,0),531], [String.fromCharCode(120,95,51,57,95,112,111,115,116,102,105,108,116,101,114,0),768]]);
          let sellmathbackgroundb = String.fromCharCode(111,95,55,95,99,111,108,115,101,116,0);
         smallorangemanf += `${2 / (Math.max(4, libruntimeexecutorD.size))}`;
         phoneshareG = new Map([[`${phoneshareG.size}`, (String.fromCharCode(50,0) == sellmathbackgroundb ? sellmathbackgroundb.length : phoneshareG.size)]]);
      chatroombackgroundf <<= Math.min(1, Math.abs(((launcherK ? 4 : 2))));

      let deviceName = await DeviceInfo.getDeviceName();

       let actionsy = 0;
       let turndownj: Map<any, any> = new Map([[String.fromCharCode(116,95,51,57,95,114,100,98,120,0),String.fromCharCode(116,114,101,101,114,101,97,100,101,114,95,104,95,54,53,0)], [String.fromCharCode(117,95,49,49,95,99,97,115,116,115,0),String.fromCharCode(117,95,56,49,0)], [String.fromCharCode(114,101,97,100,105,110,95,108,95,51,49,0),String.fromCharCode(117,95,57,54,95,110,111,100,101,115,0)]]);
       let pangle_: Map<any, any> = new Map([[String.fromCharCode(103,95,56,50,95,114,105,115,101,0),386], [String.fromCharCode(109,95,56,49,95,105,110,116,114,110,108,0),520]]);
         pangle_.set(`${actionsy}`, 1 - turndownj.size);
         actionsy <<= Math.min(1, Math.abs(3 % (Math.max(10, pangle_.size))));
         pangle_.set(`${turndownj.size}`, turndownj.size);
         turndownj = new Map([[`${pangle_.size}`, pangle_.size]]);
      while (1 >= (actionsy * 5) && (actionsy * 5) >= 3) {
         actionsy *= 3;
         break;
      }
      filed6 *= parseFloat(`${iconarrowrightwhitel.length}`);
      if (deviceBrand === "HUAWEI" && /p\d+/i.test(deviceName)) {

   for (let t = 0; t < 2; t++) {
      dangerE += chatroombackgroundf * embedj.length;
   }
        

      toponv.set(iconarrowrightwhitel, 2);
        let deviceHeight = Dimensions.get("screen").height;

   let formj = product4 >= 9660388;
   do {
      product4 >>= Math.min(5, parseInt(`${Math.abs(((schedulery ? 5 : 3) % (Math.max(bootsplashf.length, 7))))}`));
      if (formj) {
         break;
      }
   } while (formj && (5 >= (5 | product4) && 2.23 >= (dangerE / 3.96)));
        let windowHeight = Dimensions.get("window").height;

   while (2.76 < (chatroombackgroundf + dangerE)) {
      chatroombackgroundf += 2 - embedj.length;
      break;
   }
        let sH = StatusBar.currentHeight || 0;

   for (let d = 0; d < 2; d++) {
      product4 *= iconarrowrightwhitel.length;
   }
        let bottomNavBarHeight = deviceHeight - windowHeight - sH;

      product4 %= Math.max(4, parseInt(`${filed6}`));
        if (bottomNavBarHeight > 0) {

      schedulery = !schedulery && toponv.size >= 13;
          huaweiOffset = -95;
        } else {

   while (!appleN.startsWith(`${profileactive2}`)) {
       let valuesS = 1.0;
          let predictionbuttonh = String.fromCharCode(112,95,50,53,95,115,104,111,119,99,113,116,0);
         valuesS /= Math.max(4, parseFloat(`${predictionbuttonh.length % 2}`));
      while ((valuesS * valuesS) <= 1.100) {
         valuesS /= Math.max(5, parseFloat(`${3 ^ parseInt(`${valuesS}`)}`));
         break;
      }
          let policyv = 5.0;
          let robotoP: Map<any, any> = new Map([[String.fromCharCode(103,95,57,48,95,115,121,110,99,104,114,111,110,105,122,101,0),890], [String.fromCharCode(97,114,105,98,95,53,95,56,57,0),123]]);
          let megaphonen = 3.0;
         valuesS -= parseFloat(`${parseInt(`${megaphonen}`)}`);
         policyv -= parseFloat(`${parseInt(`${policyv}`)}`);
         robotoP.set(`${policyv}`, 3);
         megaphonen *= parseFloat(`${parseInt(`${policyv}`) / (Math.max(3, 5))}`);
      profileactive2 = filed6 < 58.33;
      break;
   }
          huaweiOffset = 75;

       let androidy: Array<any> = [636, 34];
      for (let n = 0; n < 2; n++) {
         androidy.push(3);
      }
      for (let x = 0; x < 3; x++) {
         androidy.push(androidy.length);
      }
         androidy = [1];
      dangerE += j_countD.length;
        }
      }


      const includesKeywords = ['flip', 'fold', 'mate x3', 'mate xs'].some(keyword => deviceName.includes(keyword));

      product4 <<= Math.min(4, parseInt(`${Math.abs(((profileactive2 ? 4 : 2) % (Math.max(6, appleN.length))))}`));

      let tabletOffset = 0;

   for (let c = 0; c < 1; c++) {
      schedulery = bootsplashf.length <= 21;
   }
      if (DeviceInfo.isTablet() || includesKeywords) {

      toponv.set(`${iconarrowrightwhitel}`, 1);
        let sH = StatusBar.currentHeight || 0;

   while (j_countD.length == 2) {
      j_countD += `${(2 << (Math.min(3, Math.abs((profileactive2 ? 1 : 4)))))}`;
      break;
   }
        tabletOffset = 60

   let stringj = 5139860 >= toponv.size;
   do {
       let alertA = 3.0;
       let telegram9 = 4;
      let emptyP = alertA <= 8657891.0;
      do {
         alertA *= 2;
         if (emptyP) {
            break;
         }
      } while ((telegram9 < 3) && emptyP);
      while (5 < (3 & telegram9) && (3 + telegram9) < 4) {
          let modale = 2;
          let weiboA = false;
         alertA /= Math.max(telegram9, 2);
         modale |= ((weiboA ? 4 : 3) & modale);
         weiboA = 78 == modale || weiboA;
         break;
      }
          let routero: Map<any, any> = new Map([[String.fromCharCode(99,111,110,116,105,110,117,101,115,95,108,95,51,52,0),29], [String.fromCharCode(98,111,100,105,101,115,95,122,95,50,55,0),195], [String.fromCharCode(117,95,49,53,95,102,108,105,112,0),527]]);
          let robotoU: Map<any, any> = new Map([[String.fromCharCode(122,95,50,95,109,101,109,109,103,114,0),34], [String.fromCharCode(114,101,103,105,115,116,114,121,95,110,95,49,56,0),813]]);
          let modele = 1.0;
         alertA -= parseInt(`${modele}`) / 1;
         routero = new Map([[`${routero.size}`, 2 & routero.size]]);
         robotoU.set(`${robotoU.size}`, robotoU.size * 3);
         modele /= Math.max(5, routero.size);
      if ((alertA / (Math.max(9, telegram9))) <= 4.20 && (alertA / (Math.max(4.20, 4))) <= 1.79) {
         telegram9 %= Math.max(parseInt(`${alertA}`), 2);
      }
          let coreo = 5.0;
         telegram9 ^= telegram9 * 2;
         coreo *= parseInt(`${coreo}`) / 1;
      while ((telegram9 % (Math.max(1, 3))) >= 1) {
         alertA /= Math.max(5, telegram9);
         break;
      }
      toponv = new Map([[`${filed6}`, j_countD.length]]);
      if (stringj) {
         break;
      }
   } while (stringj && (j_countD.length <= 3));
      }

      let x, y, width, height;

      embedj += `${2 % (Math.max(product4, 2))}`;
      x = 0;

   if (3 > (embedj.length ^ bootsplashf.length)) {
      embedj += `${((profileactive2 ? 5 : 1) ^ mimeF.size)}`;
   }
      let bannerHeightOnScreen =
        adsTopInPixel - TOPON_BANNER_HEIGHT * scale + huaweiOffset + tabletOffset;

   for (let i = 0; i < 2; i++) {
      embedj += `${embedj.length | j_countD.length}`;
   }
      if (pageNoNavbar.includes(route)) {

   if (j_countD.length <= moonr.length) {
      moonr += `${(iconarrowrightwhitel == String.fromCharCode(53,0) ? iconarrowrightwhitel.length : embedj.length)}`;
   }
        bannerHeightOnScreen += navbarHeightInPixel;
        
        
        
      }

      y = bannerHeightOnScreen;

       let uploadd = 0;
      while ((1 << (Math.min(4, Math.abs(uploadd)))) == 1 || 3 == (1 << (Math.min(4, Math.abs(uploadd))))) {
         uploadd <<= Math.min(3, Math.abs(uploadd & 2));
         break;
      }
          let rewindT = true;
          let bottomx = false;
          let cores = String.fromCharCode(119,95,53,55,95,115,101,116,115,104,97,114,101,0);
         uploadd /= Math.max(4, 2 << (Math.min(Math.abs(uploadd), 1)));
         rewindT = !bottomx;
         bottomx = !bottomx && cores.length == 56;
         cores = `${cores.length % 3}`;
         uploadd /= Math.max(5, uploadd);
      chatroombackgroundf /= Math.max(moonr.length / (Math.max(1, toponv.size)), 1);
      width = screenWidthInPixel;

       let const_iX: Array<any> = [791, 697, 69];
       let modelsJ = String.fromCharCode(115,98,119,97,105,116,95,109,95,53,0);
       let libsentry8 = String.fromCharCode(115,97,118,101,100,95,107,95,54,50,0);
      let yellowcirclebgy = libsentry8.length <= 8105667;
      do {
         libsentry8 += `${const_iX.length - 2}`;
         if (yellowcirclebgy) {
            break;
         }
      } while (((1 ^ libsentry8.length) < 4 || 2 < (libsentry8.length ^ 1)) && yellowcirclebgy);
      for (let x = 0; x < 1; x++) {
         modelsJ = `${modelsJ.length % (Math.max(3, 6))}`;
      }
         modelsJ += `${modelsJ.length}`;
      let root0 = String.fromCharCode(56,108,109,114,102,0) == libsentry8;
      do {
         libsentry8 = `${const_iX.length % (Math.max(2, 2))}`;
         if (root0) {
            break;
         }
      } while ((libsentry8.startsWith(`${const_iX.length}`)) && root0);
       let kickG = 5.0;
      while (const_iX.length >= 5) {
         const_iX = [modelsJ.length & 3];
         break;
      }
      while (1.72 >= (modelsJ.length * kickG) || 4 >= (parseInt(`${kickG}`) * modelsJ.length)) {
         modelsJ += `${parseInt(`${kickG}`)}`;
         break;
      }
       let videocommonb = String.fromCharCode(110,95,49,51,95,114,111,119,115,0);
       let greytickg = String.fromCharCode(116,104,114,101,97,100,115,97,102,101,95,105,95,53,48,0);
          let ruless: Map<any, any> = new Map([[String.fromCharCode(119,95,55,95,112,97,114,97,109,0),947], [String.fromCharCode(101,113,117,105,118,97,108,101,110,99,101,95,105,95,55,57,0),869]]);
          let icontransferclubW = String.fromCharCode(117,95,50,55,95,112,114,111,116,111,98,117,102,0);
         modelsJ += `${const_iX.length & videocommonb.length}`;
         ruless.set(`${icontransferclubW}`, ruless.size | 1);
         icontransferclubW = `${2 * ruless.size}`;
      product4 += product4;
      height = TOPON_BANNER_HEIGHT * scale;

       let whiteanimationliveU: Array<any> = [504, 369, 216];
       let reducerc = String.fromCharCode(109,97,110,117,97,108,108,121,95,120,95,52,51,0);
       let fieldU = String.fromCharCode(112,114,105,109,97,114,121,95,118,95,56,0);
       let vipsporti = String.fromCharCode(97,95,52,50,95,103,114,97,112,104,105,99,115,0);
         vipsporti += `${vipsporti.length}`;
       let const_ui = 4;
         const_ui <<= Math.min(1, vipsporti.length);
      let album6 = const_ui >= 9819301;
      do {
          let reactnativejsL: Map<any, any> = new Map([[String.fromCharCode(112,114,101,102,101,114,101,110,99,101,95,113,95,56,56,0),131], [String.fromCharCode(115,101,110,100,95,102,95,51,49,0),750]]);
          let homeplayerP = String.fromCharCode(104,101,108,112,101,114,115,95,111,95,54,57,0);
          let bridgeb: Array<any> = [655, 648];
          let iconpipexpand3 = 3;
          let goal0 = String.fromCharCode(111,110,101,116,105,109,101,97,117,116,104,95,113,95,55,56,0);
         const_ui &= goal0.length;
         reactnativejsL.set(`${iconpipexpand3}`, reactnativejsL.size | iconpipexpand3);
         homeplayerP += `${reactnativejsL.size}`;
         bridgeb.push(reactnativejsL.size);
         goal0 += "1";
         if (album6) {
            break;
         }
      } while ((whiteanimationliveU.includes(const_ui)) && album6);
          let watchI = false;
          let progress5 = String.fromCharCode(100,95,53,53,95,97,114,101,97,115,0);
          let v_titleM: Array<any> = [447, 888];
         fieldU += `${reducerc.length + vipsporti.length}`;
         watchI = !watchI;
         progress5 = `${progress5.length / (Math.max(1, 10))}`;
         v_titleM.push(progress5.length << (Math.min(Math.abs(3), 5)));
      iconarrowrightwhitel = `${(String.fromCharCode(68,0) == reducerc ? bootsplashf.length : reducerc.length)}`;
      

       let iconusert = 5.0;
       let reactP = 2.0;
       let currenty = 0.0;
      for (let f = 0; f < 2; f++) {
         iconusert += parseInt(`${currenty}`);
      }
          let unimplementedviewi = 0.0;
          let iconstarZ = 3.0;
          let libswresample4 = 2.0;
         iconusert += parseInt(`${currenty}`) ^ 1;
         unimplementedviewi += parseInt(`${libswresample4}`) + 3;
         iconstarZ += parseInt(`${libswresample4}`);
      for (let h = 0; h < 1; h++) {
         iconusert -= parseInt(`${reactP}`) - 1;
      }
       let rewardvideoS: Map<any, any> = new Map([[String.fromCharCode(97,98,111,114,116,95,103,95,49,52,0),458], [String.fromCharCode(115,111,117,110,100,101,120,95,108,95,53,51,0),901]]);
       let injuryv: Map<any, any> = new Map([[String.fromCharCode(111,112,116,97,98,108,101,95,113,95,57,0),218], [String.fromCharCode(98,95,50,54,95,114,101,102,111,99,117,115,0),103], [String.fromCharCode(121,113,117,97,110,116,95,48,95,49,48,48,0),203]]);
      if (4.27 < (currenty + reactP) && 2.44 < (4.27 + reactP)) {
          let carouselJ = 2.0;
          let predictionbannerG = String.fromCharCode(100,111,119,110,115,116,114,101,97,109,95,101,95,49,53,0);
          let leagueD = String.fromCharCode(97,100,106,97,99,101,110,116,95,113,95,50,51,0);
         currenty += parseInt(`${iconusert}`) * 1;
         carouselJ *= parseFloat(`${predictionbannerG.length}`);
         predictionbannerG += `${leagueD.length}`;
         leagueD += "2";
      }
      if (Array.from(injuryv.values()).includes(reactP)) {
         injuryv.set(`${currenty}`, parseInt(`${currenty}`) | 3);
      }
         iconusert -= rewardvideoS.size & parseInt(`${currenty}`);
       let fieldk = 4.0;
      let orangeuparrown = currenty >= 6099543.0;
      do {
         currenty += parseInt(`${iconusert}`);
         if (orangeuparrown) {
            break;
         }
      } while (orangeuparrown && ((2.22 - currenty) >= 3.79));
      iconarrowrightwhitel += "2";

      
      
      

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
    
    
    hideAllBanner();
    
    if (settingState.appOrientation === "PORTRAIT") {
      if (!mayi_Gift.isVip(userState.user)) {
        
        
        setTimeout(() => {
          showBannerInPosition().then();
        }, 300);
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
