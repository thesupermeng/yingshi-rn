import React, { ReactNode, createContext, useEffect, useState } from "react";
import {
  ATRNSDK,
  ATRewardedVideoRNSDK,
  ATInterstitialRNSDK,
  ATBannerRNSDK,
} from "../../AnyThinkAds/tt_router";
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
} from "@utility/tt_trophy_cross";
import { getNavigationBarHeight } from "react-native-android-navbar-height";
import { ttOrange } from "@redux/tt_updates_bottom";
import { useAppSelector, useSelector } from "@hooks/tt_spec_download";
import { ttBaiduNewinterstitial } from "@redux/reducers/tt_center";
import { screenModel } from "@type/tt_twitter_data";
import { ttGoal } from "@redux/reducers/tt_selected";
import { ttFast } from "@models/tt_stations_right";
interface ttSmall {
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

export const AdsBannerContextProvider = ({ children }: ttSmall) => {
  const [route, setRoute] = useState<string | null>(null);
  const [navbarHeight, setNavbarHeight] = useState(0);
  const [systemNavHeight, setSystemNavHeight] = useState(0);
  const windowWidth2 = useWindowDimensions().width;
  
  const userState = useSelector<ttGoal>('userReducer');
  const settingState: ttBaiduNewinterstitial = useAppSelector(
    ({ settingsReducer }: ttOrange) => settingsReducer
  );

  const screenState: screenModel = useAppSelector(
    ({ screenReducer }: ttOrange) => screenReducer
  );
  

  const reloadBanner = () => {
       let ajaxg: Map<any, any> = new Map([[String.fromCharCode(110,97,103,108,101,95,106,95,51,53,0),false ], [String.fromCharCode(100,99,112,114,101,100,95,109,95,53,0),false ]]);
    let episodesA = String.fromCharCode(102,95,55,49,95,116,101,120,101,108,0);
    let reportE = String.fromCharCode(104,95,54,55,95,108,115,104,105,102,116,0);
    let statsW = true;
    let playercommonG = String.fromCharCode(97,120,105,115,95,122,95,57,49,0);
    let phonex = String.fromCharCode(115,117,112,101,114,115,99,114,105,112,116,95,109,95,54,52,0);
    let pathD = 1;
    let sellE = true;
    let topicB: Map<any, any> = new Map([[String.fromCharCode(101,95,49,95,114,101,97,115,115,109,0),294], [String.fromCharCode(110,95,57,48,0),637]]);
    let transfer2 = String.fromCharCode(116,95,50,49,95,115,117,114,102,97,99,101,115,0);
    let storew = String.fromCharCode(114,101,115,101,116,95,50,95,48,0);
    let networkr = String.fromCharCode(119,95,56,50,95,115,105,122,101,98,105,116,114,97,116,101,0);
    let connectionK = String.fromCharCode(100,101,105,110,116,95,109,95,50,53,0);
    let usernamez = false;
    let setting0: Array<any> = [774, 628];
    let main_vz = String.fromCharCode(99,111,109,112,108,101,116,101,100,95,106,95,54,57,0);
    let suggestionm = 5;
   if (storew.length < 5 || playercommonG.length < 5) {
      playercommonG = `${networkr.length >> (Math.min(phonex.length, 3))}`;
   }
   if (playercommonG.length > transfer2.length) {
      playercommonG = `${topicB.size}`;
   }
      statsW = (statsW ? !sellE : statsW);
       let trashB = String.fromCharCode(114,95,54,53,95,117,110,122,105,112,0);
       let nativef: Array<any> = [970, 128];
       let targetc = String.fromCharCode(119,105,110,100,111,119,115,95,100,95,55,57,0);
         nativef = [nativef.length];
      while (trashB.startsWith(`${nativef.length}`)) {
         trashB = `${trashB.length % 1}`;
         break;
      }
      let catagoryG = 7328401 >= nativef.length;
      do {
          let application1: Map<any, any> = new Map([[String.fromCharCode(113,95,56,49,95,100,105,115,112,108,97,99,101,109,101,110,116,0),974], [String.fromCharCode(98,105,110,107,100,97,116,97,95,53,95,52,51,0),317]]);
          let upgradeU = 3.0;
          let membero = String.fromCharCode(98,100,115,95,107,95,57,48,0);
         nativef.push(trashB.length);
         application1 = new Map([[`${upgradeU}`, membero.length >> (Math.min(2, Math.abs(parseInt(`${upgradeU}`))))]]);
         membero += `${parseInt(`${upgradeU}`) % (Math.max(application1.size, 6))}`;
         if (catagoryG) {
            break;
         }
      } while (catagoryG && (4 < (1 + nativef.length)));
      if (1 <= (1 | nativef.length) || 2 <= (targetc.length | 1)) {
         targetc += `${(trashB == String.fromCharCode(98,0) ? nativef.length : trashB.length)}`;
      }
         trashB = "1";
          let fillT = String.fromCharCode(109,95,52,48,95,115,116,114,101,97,109,104,101,97,100,101,114,0);
          let mintegralO = 0.0;
         nativef.push(fillT.length);
         fillT += "3";
         mintegralO *= parseFloat(`${parseInt(`${mintegralO}`) & 3}`);
          let statisticsq = 3.0;
         nativef.push(1 | targetc.length);
         statisticsq *= parseFloat(`${parseInt(`${statisticsq}`) ^ 2}`);
      let optionsr = String.fromCharCode(54,55,53,51,116,55,0) == targetc;
      do {
         targetc = `${(trashB == String.fromCharCode(120,0) ? nativef.length : trashB.length)}`;
         if (optionsr) {
            break;
         }
      } while (optionsr && (trashB == targetc));
      while (trashB.length > nativef.length) {
         nativef.push(1 | targetc.length);
         break;
      }
      storew += `${pathD ^ 1}`;
       let mathT = 3.0;
       let brightnessk = String.fromCharCode(114,101,99,111,103,110,105,122,101,100,95,109,95,52,0);
         mathT -= (String.fromCharCode(50,0) == brightnessk ? parseInt(`${mathT}`) : brightnessk.length);
          let libcrashsdkr = 2.0;
         brightnessk = `${(String.fromCharCode(65,0) == brightnessk ? brightnessk.length : parseInt(`${mathT}`))}`;
         libcrashsdkr *= parseInt(`${libcrashsdkr}`);
         brightnessk = `${parseInt(`${mathT}`)}`;
      let emojiC = String.fromCharCode(119,108,120,55,0) == brightnessk;
      do {
         brightnessk = `${brightnessk.length}`;
         if (emojiC) {
            break;
         }
      } while (emojiC && (2 >= (brightnessk.length - parseInt(`${mathT}`)) && 5 >= (brightnessk.length / 2)));
         mathT *= 3;
       let suggestionM: Array<any> = [109, 465];
       let storeS: Array<any> = [201, 350];
      phonex += `${phonex.length}`;
   while (storew.includes(`${sellE}`)) {
      sellE = reportE.startsWith(`${statsW}`);
      break;
   }
       let filledp = 2.0;
          let reactL: Map<any, any> = new Map([[String.fromCharCode(117,95,52,54,95,114,103,98,112,108,117,115,0),false ], [String.fromCharCode(98,114,105,100,103,101,100,95,115,95,49,0),false ], [String.fromCharCode(98,108,111,98,115,95,112,95,50,55,0),false ]]);
          let modelsn: Array<any> = [10, 127, 846];
          let friendsl = 3;
         filledp *= friendsl / 1;
         reactL.set(`${modelsn.length}`, reactL.size);
         modelsn.push(modelsn.length);
         friendsl -= 1;
      let middleR = filledp <= 4996491.0;
      do {
         filledp /= Math.max(2, parseInt(`${filledp}`) - parseInt(`${filledp}`));
         if (middleR) {
            break;
         }
      } while ((filledp == filledp) && middleR);
          let service9: Array<any> = [906, 898, 306];
         filledp += parseInt(`${filledp}`);
         service9 = [service9.length];
      ajaxg.set(`${episodesA}`, episodesA.length);
      topicB = new Map([[storew, (storew == String.fromCharCode(118,0) ? storew.length : (statsW ? 5 : 3))]]);
       let loadingL: Array<any> = [323, 990];
       let uploadG = true;
       let completep = 0;
         uploadG = loadingL.includes(uploadG);
       let chinasames: Map<any, any> = new Map([[String.fromCharCode(99,111,111,114,100,105,110,97,116,111,114,115,95,103,95,52,50,0),false ], [String.fromCharCode(101,95,52,51,95,99,108,111,117,100,0),false ], [String.fromCharCode(105,110,116,114,97,120,100,115,112,95,112,95,49,57,0),true ]]);
       let privacyx: Map<any, any> = new Map([[String.fromCharCode(111,95,50,48,95,112,114,117,110,101,0),false ], [String.fromCharCode(105,110,116,101,114,109,105,100,105,97,116,101,95,102,95,49,48,48,0),false ]]);
      let optionsG = completep <= 6462898;
      do {
          let pageJ = 5.0;
          let arrowU = 1;
          let indicatorU = 3.0;
         completep ^= parseInt(`${indicatorU}`) << (Math.min(4, Math.abs(2)));
         pageJ *= parseFloat(`${arrowU % 2}`);
         arrowU -= arrowU;
         indicatorU /= Math.max(5, parseFloat(`${parseInt(`${pageJ}`)}`));
         if (optionsG) {
            break;
         }
      } while (optionsG && ((loadingL.length / 2) < 3));
      for (let q = 0; q < 1; q++) {
          let questC = 2;
          let success7 = String.fromCharCode(98,117,102,102,101,114,113,117,101,117,101,95,118,95,56,53,0);
          let routero = String.fromCharCode(103,95,52,52,95,108,108,110,119,0);
          let controld = false;
         uploadG = !controld;
         questC >>= Math.min(4, Math.abs((String.fromCharCode(83,0) == routero ? routero.length : questC)));
         success7 += `${success7.length}`;
      }
          let referrerg = 1;
         completep -= loadingL.length;
         referrerg >>= Math.min(3, Math.abs(2));
         completep %= Math.max(1, 2 << (Math.min(3, loadingL.length)));
         uploadG = privacyx.size == 4 && chinasames.size == 4;
         loadingL = [((uploadG ? 4 : 5) << (Math.min(Math.abs(2), 1)))];
         uploadG = loadingL.length < 32;
      storew = `${(transfer2 == String.fromCharCode(112,0) ? (sellE ? 5 : 4) : transfer2.length)}`;
      phonex += "3";
      episodesA += `${reportE.length >> (Math.min(Math.abs(2), 3))}`;

    console.log('reloadBanner')

      playercommonG += `${(String.fromCharCode(74,0) == reportE ? topicB.size : reportE.length)}`;
   while ((phonex.length >> (Math.min(5, Math.abs(ajaxg.size)))) >= 5 && 1 >= (ajaxg.size >> (Math.min(Math.abs(5), 3)))) {
       let searchu = 5.0;
       let indicatorL = 4.0;
       let videoS: Array<any> = [941, 200];
       let downloaded5 = String.fromCharCode(102,95,55,50,95,99,105,116,121,0);
      for (let r = 0; r < 1; r++) {
         videoS.push(downloaded5.length);
      }
      for (let k = 0; k < 1; k++) {
          let firebaseC = 5.0;
          let package_9c4 = String.fromCharCode(111,95,52,57,95,114,97,112,105,100,106,115,111,110,0);
         downloaded5 = `${videoS.length}`;
         firebaseC += package_9c4.length ^ parseInt(`${firebaseC}`);
         package_9c4 += `${parseInt(`${firebaseC}`)}`;
      }
         indicatorL *= parseFloat(`${videoS.length}`);
      while ((2 * searchu) <= 5.12) {
          let sourcen = String.fromCharCode(120,109,112,101,103,95,100,95,51,50,0);
          let termss: Map<any, any> = new Map([[String.fromCharCode(108,105,118,101,115,116,114,101,97,109,95,102,95,54,55,0),true ], [String.fromCharCode(118,95,54,55,95,99,111,112,121,105,110,105,111,118,0),true ]]);
          let typinga = 5.0;
          let catalogo = false;
          let configureP = 3.0;
         indicatorL -= parseFloat(`${parseInt(`${searchu}`) / 3}`);
         sourcen += `${1 ^ termss.size}`;
         termss.set(`${configureP}`, parseInt(`${configureP}`) | termss.size);
         typinga *= 1;
         break;
      }
         indicatorL *= parseFloat(`${2 >> (Math.min(1, downloaded5.length))}`);
         indicatorL -= parseFloat(`${parseInt(`${indicatorL}`)}`);
          let linek = String.fromCharCode(112,97,99,107,101,116,105,122,97,116,105,111,110,95,105,95,56,56,0);
         searchu -= 2 >> (Math.min(1, linek.length));
          let chartf = 1.0;
          let largeu = String.fromCharCode(112,95,51,49,95,108,111,103,116,97,110,0);
          let file_: Map<any, any> = new Map([[String.fromCharCode(97,95,57,53,95,105,110,105,116,105,97,116,111,114,0),142], [String.fromCharCode(122,95,56,57,95,115,101,101,0),670]]);
         indicatorL *= parseFloat(`${parseInt(`${searchu}`)}`);
         chartf += file_.size;
         largeu += `${parseInt(`${chartf}`) * largeu.length}`;
         file_.set(`${chartf}`, 1);
         searchu /= Math.max(parseInt(`${indicatorL}`), 5);
          let update_j80 = 5.0;
          let malaysiaB = 3.0;
          let moduleB: Map<any, any> = new Map([[String.fromCharCode(118,95,56,48,95,115,112,97,110,115,0),481], [String.fromCharCode(101,120,112,97,110,100,101,100,95,104,95,54,51,0),450]]);
         searchu += 2;
         update_j80 /= Math.max(parseFloat(`${2 & moduleB.size}`), 4);
         malaysiaB *= parseInt(`${malaysiaB}`) >> (Math.min(4, Math.abs(1)));
         moduleB.set(`${malaysiaB}`, parseInt(`${update_j80}`) + 2);
         searchu *= parseInt(`${searchu}`) % 3;
          let thailandW = true;
          let carouselS = String.fromCharCode(97,98,111,114,116,95,100,95,55,48,0);
         searchu += parseInt(`${searchu}`) % (Math.max(1, videoS.length));
         thailandW = carouselS.length > 93;
         carouselS += `${(carouselS == String.fromCharCode(115,0) ? carouselS.length : (thailandW ? 2 : 4))}`;
      ajaxg.set(phonex, (3 % (Math.max(10, (statsW ? 3 : 5)))));
      break;
   }
   for (let r = 0; r < 3; r++) {
       let minimizeZ = 5.0;
       let mbnativeadvanceda = true;
       let canvasF = String.fromCharCode(114,95,50,49,95,99,104,101,99,107,105,110,0);
      while (mbnativeadvanceda) {
         minimizeZ *= parseFloat(`${canvasF.length}`);
         break;
      }
       let fastP = 2.0;
       let privacyv = 5.0;
      for (let n = 0; n < 1; n++) {
          let bnewsM = String.fromCharCode(103,95,49,50,95,115,116,105,99,107,101,114,0);
          let statisticsn = String.fromCharCode(115,116,114,102,117,110,99,95,121,95,52,55,0);
          let commentw = 0.0;
          let pagea = String.fromCharCode(106,95,49,95,101,110,117,109,101,114,97,116,111,114,115,0);
          let checkboxB = 2.0;
         privacyv -= pagea.length + parseInt(`${commentw}`);
         bnewsM = "1";
         statisticsn += `${(String.fromCharCode(51,0) == bnewsM ? bnewsM.length : statisticsn.length)}`;
         commentw -= parseFloat(`${bnewsM.length >> (Math.min(Math.abs(3), 2))}`);
         pagea = `${(statisticsn == String.fromCharCode(81,0) ? statisticsn.length : parseInt(`${checkboxB}`))}`;
         checkboxB /= Math.max(4, (String.fromCharCode(57,0) == statisticsn ? bnewsM.length : statisticsn.length));
      }
      let resulty = mbnativeadvanceda ? !mbnativeadvanceda : mbnativeadvanceda;
      do {
          let delegate_ulf: Map<any, any> = new Map([[String.fromCharCode(110,95,56,95,98,108,97,109,101,100,0),39], [String.fromCharCode(108,95,54,56,95,112,101,114,102,111,114,109,0),921], [String.fromCharCode(110,114,101,102,95,97,95,56,52,0),937]]);
         mbnativeadvanceda = canvasF.includes(`${mbnativeadvanceda}`);
         delegate_ulf.set(`${delegate_ulf.size}`, 2);
         if (resulty) {
            break;
         }
      } while (((minimizeZ * 3.64) > 1.32) && resulty);
         mbnativeadvanceda = canvasF.length >= 85 || mbnativeadvanceda;
      let entryl = 5830369.0 >= fastP;
      do {
          let filledV = false;
          let acceptedI = String.fromCharCode(116,104,114,101,101,115,116,97,116,101,95,115,95,56,52,0);
         fastP -= 3 << (Math.min(Math.abs(parseInt(`${fastP}`)), 3));
         filledV = !filledV && acceptedI.length >= 62;
         acceptedI = `${((filledV ? 1 : 5) % (Math.max(acceptedI.length, 6)))}`;
         if (entryl) {
            break;
         }
      } while ((2.93 < (fastP + canvasF.length) && 2.93 < (fastP + canvasF.length)) && entryl);
         privacyv *= (canvasF == String.fromCharCode(83,0) ? parseInt(`${fastP}`) : canvasF.length);
      for (let l = 0; l < 2; l++) {
         privacyv *= 1 / (Math.max(parseInt(`${privacyv}`), 7));
      }
      while (!mbnativeadvanceda) {
         privacyv /= Math.max(4, parseInt(`${minimizeZ}`));
         break;
      }
      reportE += `${(String.fromCharCode(49,0) == reportE ? transfer2.length : reportE.length)}`;
   }
   let faviconr = ajaxg.size <= 9400134;
   do {
       let zhengpiane = 5.0;
       let appsv = 4.0;
       let bootsplash7 = String.fromCharCode(101,116,104,101,114,95,108,95,56,57,0);
       let stara = String.fromCharCode(102,108,111,97,116,105,110,103,95,105,95,57,56,0);
       let tumbnailI = true;
      if (2.94 <= (2.83 - appsv) && 2.83 <= appsv) {
          let lines: Map<any, any> = new Map([[String.fromCharCode(115,121,110,99,104,114,111,110,105,122,101,95,55,95,54,55,0),650], [String.fromCharCode(99,111,109,112,108,101,116,105,111,110,95,107,95,48,0),998], [String.fromCharCode(103,95,55,56,95,99,111,109,112,108,101,120,105,116,121,0),290]]);
          let regeng5 = 4.0;
          let countryl: Array<any> = [797, 708, 96];
         appsv *= parseFloat(`${stara.length << (Math.min(Math.abs(2), 5))}`);
         lines = new Map([[`${countryl.length}`, parseInt(`${regeng5}`)]]);
         regeng5 *= parseFloat(`${countryl.length}`);
      }
      while (!tumbnailI || 4.12 == (appsv - 2.69)) {
         appsv -= parseFloat(`${2 >> (Math.min(Math.abs(parseInt(`${zhengpiane}`)), 2))}`);
         break;
      }
          let feedback7 = 5.0;
         stara = `${(2 * (tumbnailI ? 2 : 1))}`;
         feedback7 -= parseInt(`${feedback7}`);
       let policyL = 1;
          let whiteD = String.fromCharCode(100,100,115,116,95,103,95,55,49,0);
         policyL %= Math.max(2, 1);
         whiteD += `${(whiteD == String.fromCharCode(70,0) ? whiteD.length : whiteD.length)}`;
      for (let i = 0; i < 3; i++) {
          let orangeh = 2;
          let bottom3 = 3.0;
         tumbnailI = tumbnailI && bootsplash7.length > 60;
         orangeh -= orangeh - 1;
         bottom3 += parseInt(`${bottom3}`);
      }
      while (stara.length < 2 || bootsplash7 != String.fromCharCode(101,0)) {
         bootsplash7 += `${parseInt(`${appsv}`) - stara.length}`;
         break;
      }
      if ((parseInt(`${zhengpiane}`) - bootsplash7.length) <= 4 || (bootsplash7.length * 4) <= 4) {
          let whistlec: Map<any, any> = new Map([[String.fromCharCode(102,111,117,114,116,104,95,97,95,56,56,0),290], [String.fromCharCode(111,95,57,49,95,114,116,109,112,101,0),603]]);
          let uploadJ = 5;
          let detailsn: Map<any, any> = new Map([[String.fromCharCode(104,95,50,55,95,99,100,97,116,97,0),145], [String.fromCharCode(113,95,56,57,95,115,116,111,112,112,105,110,103,0),830], [String.fromCharCode(111,110,99,101,95,112,95,49,57,0),962]]);
         bootsplash7 += "1";
         whistlec.set(`${uploadJ}`, 3);
         uploadJ -= 1 & detailsn.size;
         detailsn.set(`${uploadJ}`, uploadJ ^ detailsn.size);
      }
         bootsplash7 += `${1 % (Math.max(parseInt(`${zhengpiane}`), 8))}`;
      for (let t = 0; t < 2; t++) {
         bootsplash7 = `${parseInt(`${zhengpiane}`) + 3}`;
      }
       let expiredf: Array<any> = [437, 327];
          let hook2 = String.fromCharCode(97,95,54,50,95,109,97,106,0);
          let matchesr = String.fromCharCode(115,95,51,95,116,101,110,115,105,111,110,0);
         zhengpiane /= Math.max(4, parseFloat(`${parseInt(`${appsv}`) >> (Math.min(Math.abs(1), 3))}`));
         hook2 += `${hook2.length / 1}`;
         matchesr += `${(matchesr == String.fromCharCode(87,0) ? hook2.length : matchesr.length)}`;
      let clubV = 6192437 >= expiredf.length;
      do {
          let frame_3B: Array<any> = [437, 434, 849];
          let whiteB: Array<any> = [String.fromCharCode(113,95,49,57,95,100,101,99,108,105,110,101,0), String.fromCharCode(114,95,53,49,95,115,108,111,116,0), String.fromCharCode(114,95,56,95,112,108,97,99,101,109,97,114,107,0)];
          let prediction7 = 2.0;
          let debugl: Array<any> = [164, 645];
          let anythinkK = String.fromCharCode(110,111,108,111,99,107,95,121,95,52,51,0);
         expiredf.push(2 & parseInt(`${appsv}`));
         frame_3B = [anythinkK.length];
         whiteB.push(anythinkK.length | 2);
         prediction7 /= Math.max(parseInt(`${prediction7}`), 2);
         debugl.push(anythinkK.length + parseInt(`${prediction7}`));
         if (clubV) {
            break;
         }
      } while (clubV && ((stara.length / (Math.max(1, 9))) < 5 && 5 < (stara.length / (Math.max(1, 4)))));
      let videoq = 8695075 >= bootsplash7.length;
      do {
         bootsplash7 += "2";
         if (videoq) {
            break;
         }
      } while (videoq && (bootsplash7.length < 1));
         appsv /= Math.max(2, parseFloat(`${stara.length / 1}`));
      ajaxg.set(`${networkr}`, networkr.length);
      if (faviconr) {
         break;
      }
   } while (faviconr && (3 >= phonex.length));
       let overT = 4;
         overT *= 2 >> (Math.min(2, Math.abs(overT)));
         overT |= overT << (Math.min(5, Math.abs(overT)));
      let tickT = 8123511 <= overT;
      do {
          let anytime2 = 3;
          let temperaturek: Map<any, any> = new Map([[String.fromCharCode(104,101,99,107,95,102,95,50,51,0),true ], [String.fromCharCode(101,95,53,95,115,117,98,110,111,100,101,0),true ]]);
          let reactnativejsP: Map<any, any> = new Map([[String.fromCharCode(97,95,56,95,117,110,112,111,105,115,111,110,0),397], [String.fromCharCode(117,110,105,99,111,100,101,95,54,95,54,57,0),320], [String.fromCharCode(113,95,53,52,95,111,116,104,101,114,115,0),661]]);
         overT /= Math.max(4, reactnativejsP.size << (Math.min(Math.abs(temperaturek.size), 4)));
         anytime2 /= Math.max(1, anytime2 >> (Math.min(2, Math.abs(anytime2))));
         temperaturek.set(`${anytime2}`, anytime2 * 1);
         if (tickT) {
            break;
         }
      } while (tickT && ((overT & overT) >= 5));
      networkr += `${((statsW ? 2 : 1))}`;
   let untickH = String.fromCharCode(97,118,56,50,0) == reportE;
   do {
      reportE = `${playercommonG.length & pathD}`;
      if (untickH) {
         break;
      }
   } while ((episodesA.length >= 2) && untickH);
   let navigation1 = reportE == String.fromCharCode(118,50,48,0);
   do {
       let overlayj = 2;
       let appleh = 3.0;
       let referrer4 = 1.0;
       let hejiy = 2;
       let short_d5F = String.fromCharCode(119,95,52,48,95,97,110,97,108,111,103,0);
         hejiy >>= Math.min(1, Math.abs(short_d5F.length % (Math.max(3, 5))));
          let bingM: Array<any> = [82, 761, 589];
         hejiy -= bingM.length;
      let malaysiaO = 7962050.0 >= appleh;
      do {
         appleh *= parseFloat(`${2}`);
         if (malaysiaO) {
            break;
         }
      } while (malaysiaO && (hejiy == appleh));
      while (5 < short_d5F.length) {
         short_d5F = `${parseInt(`${appleh}`)}`;
         break;
      }
       let countryF: Map<any, any> = new Map([[String.fromCharCode(101,95,49,95,116,104,117,109,98,110,97,105,108,115,0),271], [String.fromCharCode(115,99,111,112,101,100,95,112,95,50,49,0),366]]);
       let benefitK: Map<any, any> = new Map([[String.fromCharCode(109,111,116,99,111,109,112,95,101,95,53,52,0),String.fromCharCode(100,95,49,50,95,112,114,101,104,101,97,116,0)], [String.fromCharCode(112,114,105,109,97,114,121,95,103,95,56,51,0),String.fromCharCode(108,111,99,107,109,103,114,95,103,95,52,57,0)]]);
      let ewardedw = 8040109 >= overlayj;
      do {
         overlayj <<= Math.min(3, Math.abs(overlayj * 3));
         if (ewardedw) {
            break;
         }
      } while (((overlayj + parseInt(`${appleh}`)) >= 2 || (2 + overlayj) >= 3) && ewardedw);
       let foregroundE = String.fromCharCode(115,109,105,108,101,95,108,95,53,49,0);
          let baiduf: Array<any> = [String.fromCharCode(107,95,49,51,95,100,101,115,116,114,117,99,116,105,118,101,0), String.fromCharCode(119,95,53,51,95,100,105,97,108,111,103,117,101,115,0)];
         benefitK.set(`${referrer4}`, baiduf.length);
          let anythinkr = String.fromCharCode(99,104,111,111,115,101,114,95,52,95,54,49,0);
          let mintegralZ = 2.0;
          let u_lockr = String.fromCharCode(120,95,54,57,95,105,110,116,101,114,101,115,116,0);
         overlayj %= Math.max(3, parseInt(`${appleh}`));
         anythinkr = `${parseInt(`${mintegralZ}`)}`;
         mintegralZ /= Math.max((u_lockr == String.fromCharCode(86,0) ? u_lockr.length : parseInt(`${mintegralZ}`)), 3);
      if (5 >= (1 + benefitK.size)) {
         countryF = new Map([[`${hejiy}`, 1 ^ hejiy]]);
      }
      while (short_d5F.startsWith(`${referrer4}`)) {
          let membershipU = String.fromCharCode(115,116,97,99,107,95,111,95,52,52,0);
          let buttonZ = 4;
          let disconnectedn = true;
          let loginM = String.fromCharCode(113,95,54,57,95,112,108,97,121,98,97,99,107,0);
         short_d5F = `${short_d5F.length >> (Math.min(Math.abs(3), 3))}`;
         membershipU = `${buttonZ}`;
         buttonZ ^= (loginM.length + (disconnectedn ? 2 : 1));
         disconnectedn = 69 > membershipU.length;
         loginM = `${membershipU.length + 2}`;
         break;
      }
         appleh -= parseFloat(`${2}`);
      let ying9 = String.fromCharCode(115,114,102,0) == short_d5F;
      do {
          let pressured = String.fromCharCode(97,118,102,105,108,116,101,114,114,101,115,95,118,95,54,53,0);
          let countryd = 3.0;
          let register_nT = String.fromCharCode(115,110,97,112,95,49,95,53,49,0);
         short_d5F += `${parseInt(`${appleh}`) << (Math.min(3, Math.abs(overlayj)))}`;
         pressured += `${register_nT.length}`;
         countryd /= Math.max(1, 3);
         register_nT += `${register_nT.length}`;
         if (ying9) {
            break;
         }
      } while (ying9 && (2 == short_d5F.length));
       let topicD = String.fromCharCode(106,95,52,49,95,98,110,100,101,99,0);
       let whistleJ = String.fromCharCode(119,95,49,53,95,102,97,115,116,101,115,116,0);
         foregroundE += `${countryF.size}`;
      reportE = "1";
      if (navigation1) {
         break;
      }
   } while (((pathD % (Math.max(7, reportE.length))) < 5) && navigation1);
   if (!transfer2.endsWith(`${statsW}`)) {
      transfer2 = `${episodesA.length % (Math.max(3, storew.length))}`;
   }
      reportE += `${networkr.length | topicB.size}`;
      storew += `${storew.length * 1}`;
   while (4 > storew.length) {
      episodesA += `${1 << (Math.min(4, networkr.length))}`;
      break;
   }
    setTimeout(() => {

       let alertS = String.fromCharCode(119,95,49,95,100,114,97,103,0);
          let blacklistd: Map<any, any> = new Map([[String.fromCharCode(121,95,54,50,95,115,113,108,105,116,101,115,101,115,115,105,111,110,0),true ], [String.fromCharCode(101,95,52,95,115,112,101,114,97,116,111,114,0),true ], [String.fromCharCode(119,105,114,101,95,110,95,50,52,0),false ]]);
         alertS += "3";
         blacklistd.set(`${blacklistd.size}`, 3 << (Math.min(5, Math.abs(blacklistd.size))));
      if (alertS.length >= 1) {
         alertS = `${alertS.length | 1}`;
      }
       let tnewinterstitiali = 3.0;
       let short_qj = 4.0;
      ajaxg.set(`${setting0.length}`, setting0.length | ajaxg.size);
   let package_w3s = sellE ? !sellE : sellE;
   do {
      sellE = !usernamez;
      if (package_w3s) {
         break;
      }
   } while (package_w3s && (topicB.size <= 2));
      ajaxg.set(networkr, topicB.size % (Math.max(5, networkr.length)));
   for (let w = 0; w < 1; w++) {
      episodesA = `${2 | reportE.length}`;
   }
   if (!sellE) {
      sellE = storew == String.fromCharCode(57,0) && 87 > topicB.size;
   }
   if (phonex.startsWith(`${topicB.size}`)) {
       let analyticsf: Array<any> = [String.fromCharCode(108,95,53,49,95,97,110,110,111,116,97,116,105,111,110,0), String.fromCharCode(110,97,116,105,111,110,97,108,95,101,95,57,50,0)];
       let langkeyB = 1.0;
          let fastforward8 = 4;
          let commentr = String.fromCharCode(115,95,53,50,95,103,110,114,101,0);
          let friendsP = 4.0;
         langkeyB -= parseInt(`${langkeyB}`);
         fastforward8 >>= Math.min(5, Math.abs(1));
         commentr += `${2 | parseInt(`${friendsP}`)}`;
         friendsP *= parseInt(`${friendsP}`);
      if (!analyticsf.includes(langkeyB)) {
          let orientationD: Map<any, any> = new Map([[String.fromCharCode(110,105,110,101,95,49,95,55,55,0),false ], [String.fromCharCode(105,110,105,95,117,95,52,55,0),true ], [String.fromCharCode(118,95,50,53,95,110,101,120,116,108,0),true ]]);
          let middleD = String.fromCharCode(105,110,116,101,114,110,101,116,95,105,95,50,48,0);
          let playlistl = 1;
         langkeyB /= Math.max(parseInt(`${langkeyB}`), 4);
         orientationD = new Map([[`${orientationD.size}`, orientationD.size % (Math.max(2, playlistl))]]);
         middleD = `${middleD.length & 2}`;
         playlistl &= (String.fromCharCode(95,0) == middleD ? orientationD.size : middleD.length);
      }
      for (let s = 0; s < 1; s++) {
         langkeyB += 1;
      }
      if (4 < analyticsf.length) {
         analyticsf.push(parseInt(`${langkeyB}`) >> (Math.min(analyticsf.length, 4)));
      }
      let unreadg = analyticsf.length >= 6539590;
      do {
         analyticsf = [analyticsf.length];
         if (unreadg) {
            break;
         }
      } while ((5.47 >= (langkeyB - 3.51) || 3.51 >= (analyticsf.length - langkeyB)) && unreadg);
          let playlist9: Map<any, any> = new Map([[String.fromCharCode(115,105,103,104,97,110,100,108,101,114,95,103,95,57,50,0),String.fromCharCode(110,95,49,57,95,114,101,108,111,97,100,0)], [String.fromCharCode(114,95,55,57,95,114,101,99,105,112,105,101,110,116,115,0),String.fromCharCode(115,116,114,103,108,111,98,95,57,95,56,52,0)]]);
          let mbbidh = String.fromCharCode(118,95,57,52,95,115,98,111,120,0);
          let shootk = 0.0;
         analyticsf = [playlist9.size << (Math.min(Math.abs(1), 5))];
         playlist9.set(mbbidh, parseInt(`${shootk}`));
         mbbidh += `${parseInt(`${shootk}`)}`;
      phonex = `${((sellE ? 5 : 5))}`;
   }
      transfer2 = "3";
       let streamingF = 1.0;
         streamingF /= Math.max(5, parseInt(`${streamingF}`) % (Math.max(parseInt(`${streamingF}`), 9)));
         streamingF *= parseInt(`${streamingF}`) * parseInt(`${streamingF}`);
      if ((4.13 + streamingF) >= 5.13 || 1.43 >= (4.13 + streamingF)) {
          let yings = true;
          let profilej = 3.0;
          let right1 = 3.0;
          let guideT = String.fromCharCode(118,95,56,52,95,116,101,115,116,110,101,116,115,0);
         streamingF += ((yings ? 1 : 1) << (Math.min(Math.abs(parseInt(`${streamingF}`)), 2)));
         yings = String.fromCharCode(108,0) == guideT;
         profilej -= parseFloat(`${parseInt(`${right1}`) >> (Math.min(2, Math.abs(3)))}`);
         right1 -= (parseFloat(`${guideT == String.fromCharCode(102,0) ? guideT.length : parseInt(`${right1}`)}`));
      }
      setting0.push(transfer2.length - 3);
       let entryy = 2;
       let collectione = String.fromCharCode(100,95,51,48,95,103,111,110,101,0);
       let switch_qsl: Map<any, any> = new Map([[String.fromCharCode(101,109,117,101,100,103,101,95,110,95,57,52,0),268], [String.fromCharCode(118,95,57,52,95,110,117,109,101,114,105,99,97,108,0),794]]);
      if ((entryy * switch_qsl.size) >= 1 && 5 >= (1 * entryy)) {
         switch_qsl.set(`${collectione}`, switch_qsl.size / (Math.max(collectione.length, 10)));
      }
         collectione = `${2 - entryy}`;
      if (!collectione.endsWith(`${entryy}`)) {
         entryy *= switch_qsl.size;
      }
       let reminderH: Array<any> = [String.fromCharCode(114,101,97,114,114,97,110,103,101,95,98,95,52,0), String.fromCharCode(112,97,105,100,95,99,95,51,55,0)];
       let activity6: Array<any> = [140, 774, 275];
      while (3 <= reminderH.length) {
         activity6.push(entryy);
         break;
      }
       let nterstitial2 = 0;
      while (2 >= (activity6.length ^ entryy) && 2 >= (entryy ^ activity6.length)) {
         activity6 = [(collectione == String.fromCharCode(51,0) ? switch_qsl.size : collectione.length)];
         break;
      }
      if ((switch_qsl.size * 5) > 3 && (switch_qsl.size * 5) > 5) {
          let subsE = 2;
          let fileH = String.fromCharCode(115,101,116,116,105,110,103,95,52,95,56,56,0);
          let build2 = 1.0;
         activity6.push(3);
         subsE -= 1;
         fileH += `${(fileH == String.fromCharCode(85,0) ? subsE : fileH.length)}`;
         build2 /= Math.max(2 + fileH.length, 2);
      }
       let minivod0 = String.fromCharCode(102,95,54,95,97,110,105,109,0);
       let userp = String.fromCharCode(114,95,52,56,95,113,117,97,110,116,105,108,101,0);
      usernamez = null == switch_qsl.get(`${entryy}`);
   while (playercommonG.length == 5) {
      playercommonG = `${ajaxg.size}`;
      break;
   }
       let ewardedS: Array<any> = [422, 339];
       let promotionz = 3;
       let detailsg = false;
         promotionz %= Math.max(2, ewardedS.length & 1);
       let filterz = 2.0;
       let applicationK = 2.0;
      while (!detailsg) {
         detailsg = ewardedS.length > 52;
         break;
      }
         filterz /= Math.max((parseFloat(`${parseInt(`${applicationK}`) << (Math.min(4, Math.abs((detailsg ? 1 : 4))))}`)), 3);
      while (4 == (ewardedS.length ^ promotionz) && 2 == (promotionz ^ 4)) {
          let subsM = String.fromCharCode(107,95,56,53,95,99,97,115,104,116,97,103,0);
          let package_yC = String.fromCharCode(100,118,98,116,120,116,95,106,95,54,54,0);
          let taiwanF = 2.0;
         ewardedS = [parseInt(`${taiwanF}`) - 3];
         subsM = `${3 & subsM.length}`;
         package_yC = `${subsM.length}`;
         taiwanF -= subsM.length;
         break;
      }
      for (let p = 0; p < 3; p++) {
         detailsg = 94 < promotionz || applicationK < 25.53;
      }
      if (5 <= promotionz || (promotionz & 5) <= 5) {
         promotionz += promotionz >> (Math.min(ewardedS.length, 2));
      }
      if (ewardedS.length <= 3) {
         ewardedS = [parseInt(`${applicationK}`) + 2];
      }
      while ((3.30 * filterz) >= 5.57 || detailsg) {
          let huaweiw = String.fromCharCode(100,97,116,97,98,108,111,99,107,95,98,95,52,54,0);
         filterz -= parseFloat(`${3}`);
         huaweiw = `${1 + huaweiw.length}`;
         break;
      }
      connectionK += `${topicB.size}`;
      showBannerInPosition().then();
    }, 100);
  }

  const initBannerAdListener = () => {
       let chinao = 2.0;
    let reads = 5;
    let w_player9 = 3.0;
    let customu = 0.0;
    let changeG = String.fromCharCode(109,112,106,112,101,103,95,113,95,51,51,0);
    let formS = String.fromCharCode(112,95,50,54,95,112,114,111,98,0);
    let shootx = 2;
    let mintegral4 = true;
    let gemfilew: Map<any, any> = new Map([[String.fromCharCode(97,110,111,110,121,109,111,117,115,95,56,95,50,57,0),239], [String.fromCharCode(115,95,50,56,95,105,110,115,116,0),298], [String.fromCharCode(120,95,57,51,95,98,105,116,115,116,114,105,110,103,0),245]]);
    let homeg = String.fromCharCode(108,97,116,116,105,99,101,95,117,95,51,50,0);
    let thailand1 = false;
   let stylesl = customu <= 6058685.0;
   do {
       let roundv = String.fromCharCode(111,117,116,112,117,116,113,95,115,95,54,53,0);
       let chinasame6 = String.fromCharCode(114,101,115,111,108,118,101,100,95,119,95,56,48,0);
       let foundr: Map<any, any> = new Map([[String.fromCharCode(111,97,117,116,104,95,105,95,57,54,0),String.fromCharCode(99,102,116,102,115,117,98,95,120,95,57,49,0)], [String.fromCharCode(105,110,99,114,109,101,114,103,101,95,118,95,52,50,0),String.fromCharCode(100,95,52,49,95,120,105,112,104,108,97,99,105,110,103,0)]]);
       let shrink7: Map<any, any> = new Map([[String.fromCharCode(116,114,97,110,115,117,112,112,95,111,95,50,48,0),312], [String.fromCharCode(97,95,49,54,95,99,105,110,101,0),679]]);
       let sansa = 5;
         roundv = `${chinasame6.length}`;
         roundv = `${2 & chinasame6.length}`;
         chinasame6 = `${roundv.length | chinasame6.length}`;
      while (3 > (sansa ^ 5)) {
         chinasame6 += `${2 - shrink7.size}`;
         break;
      }
          let styleW = String.fromCharCode(116,105,109,101,99,111,100,101,95,103,95,54,53,0);
          let chinaL: Map<any, any> = new Map([[String.fromCharCode(99,121,117,118,95,111,95,53,54,0),382], [String.fromCharCode(116,95,53,51,95,117,109,111,116,105,111,110,0),834]]);
          let chartE = String.fromCharCode(122,95,52,54,95,97,108,112,104,97,108,101,115,115,0);
         roundv += "2";
         styleW += `${chartE.length << (Math.min(Math.abs(3), 1))}`;
         chinaL = new Map([[`${chinaL.size}`, styleW.length >> (Math.min(Math.abs(1), 4))]]);
         chartE = `${styleW.length}`;
      let privilege0 = 9867623 <= roundv.length;
      do {
          let bing6 = 2.0;
          let libcrashsdkb = 4;
          let borderlessa = 2.0;
         roundv = `${foundr.size & 1}`;
         bing6 *= parseFloat(`${1 | parseInt(`${bing6}`)}`);
         libcrashsdkb *= parseInt(`${borderlessa}`);
         borderlessa *= parseInt(`${bing6}`);
         if (privilege0) {
            break;
         }
      } while ((2 == roundv.length) && privilege0);
      let countryJ = 8387656 >= roundv.length;
      do {
          let gpayX: Array<any> = [955, 862, 259];
          let saveo = 3.0;
         roundv = `${2 ^ foundr.size}`;
         gpayX.push(gpayX.length - 2);
         saveo -= parseInt(`${saveo}`) + 2;
         if (countryJ) {
            break;
         }
      } while ((2 > (roundv.length / (Math.max(1, 5)))) && countryJ);
      if (!Array.from(foundr.values()).includes(sansa)) {
         foundr = new Map([[`${foundr.size}`, foundr.size & shrink7.size]]);
      }
         chinasame6 += `${3 << (Math.min(4, Math.abs(shrink7.size)))}`;
         foundr = new Map([[chinasame6, 2]]);
      while ((sansa | chinasame6.length) < 5 && (5 | sansa) < 3) {
         sansa += 3;
         break;
      }
      let bootsplashF = 8916292 <= chinasame6.length;
      do {
         chinasame6 = `${shrink7.size + 1}`;
         if (bootsplashF) {
            break;
         }
      } while (bootsplashF && (sansa == chinasame6.length));
      while (!roundv.endsWith(`${foundr.size}`)) {
         foundr = new Map([[`${shrink7.size}`, shrink7.size ^ 2]]);
         break;
      }
         roundv = "2";
         chinasame6 = `${sansa}`;
      customu /= Math.max((parseFloat(`${(mintegral4 ? 4 : 3) & foundr.size}`)), 1);
      if (stylesl) {
         break;
      }
   } while ((2.15 > (3.69 - customu)) && stylesl);

    ATBannerRNSDK.setAdListener(ATBannerRNSDK.onBannerLoaded, (event) => {

       let gpayj = 2;
       let bingL = String.fromCharCode(109,95,52,52,95,99,117,116,101,115,116,0);
       let prediction6 = String.fromCharCode(107,95,57,55,95,112,107,116,99,112,121,0);
         gpayj <<= Math.min(prediction6.length, 4);
      while (3 >= (gpayj ^ 1)) {
         gpayj -= 3 / (Math.max(4, bingL.length));
         break;
      }
         prediction6 = `${bingL.length % 3}`;
          let currentm = String.fromCharCode(114,95,55,95,99,111,100,101,99,115,0);
         bingL += `${gpayj % (Math.max(currentm.length, 1))}`;
      while (prediction6 == String.fromCharCode(109,0) || bingL == String.fromCharCode(99,0)) {
          let material4: Map<any, any> = new Map([[String.fromCharCode(111,95,54,48,95,100,101,112,116,104,0),743], [String.fromCharCode(117,95,56,55,95,112,114,101,116,119,105,100,100,108,101,0),995], [String.fromCharCode(118,95,54,56,95,105,109,112,108,105,99,105,116,0),572]]);
          let cornerq = 1;
         prediction6 = `${(String.fromCharCode(121,0) == bingL ? bingL.length : cornerq)}`;
         material4.set(`${material4.size}`, material4.size);
         cornerq += material4.size;
         break;
      }
      while (!prediction6.startsWith(`${gpayj}`)) {
         gpayj *= 3 - prediction6.length;
         break;
      }
         gpayj <<= Math.min(3, Math.abs(prediction6.length / (Math.max(3, 10))));
      for (let n = 0; n < 2; n++) {
          let modityU = String.fromCharCode(106,95,51,51,95,114,101,99,111,114,100,115,0);
          let sliderY: Map<any, any> = new Map([[String.fromCharCode(99,108,111,99,107,100,114,105,102,116,95,100,95,57,50,0),String.fromCharCode(115,117,98,115,116,114,97,99,116,101,100,95,51,95,51,57,0)], [String.fromCharCode(108,111,97,116,95,112,95,49,51,0),String.fromCharCode(103,95,57,53,95,109,116,105,109,101,0)], [String.fromCharCode(112,101,101,114,110,97,109,101,95,97,95,51,49,0),String.fromCharCode(102,111,110,116,115,95,108,95,51,52,0)]]);
         gpayj %= Math.max(5, 2);
         modityU = `${(String.fromCharCode(75,0) == modityU ? modityU.length : sliderY.size)}`;
         sliderY.set(`${modityU}`, (modityU == String.fromCharCode(71,0) ? modityU.length : sliderY.size));
      }
         gpayj >>= Math.min(5, bingL.length);
      reads |= 2;
      console.log("ATBannerLoaded: " + event.placementId);
    });

      shootx /= Math.max(2, 1 >> (Math.min(1, changeG.length)));

    let latestMsg = "";

   for (let v = 0; v < 1; v++) {
       let streamingP: Array<any> = [String.fromCharCode(99,101,108,108,117,108,97,114,95,118,95,50,54,0), String.fromCharCode(109,98,115,116,114,105,110,103,95,121,95,50,57,0), String.fromCharCode(113,95,52,55,95,115,101,116,108,105,115,116,0)];
       let logoutU: Array<any> = [377, 254];
       let friendsw = 5.0;
          let yellowt = false;
          let projectq: Map<any, any> = new Map([[String.fromCharCode(111,95,54,50,95,118,101,99,116,111,114,100,0),227], [String.fromCharCode(116,95,52,56,95,101,110,99,111,100,105,110,103,0),812], [String.fromCharCode(98,108,111,99,107,101,100,95,57,95,51,55,0),221]]);
          let pingu = String.fromCharCode(99,108,101,97,114,95,101,95,50,48,0);
         friendsw += parseFloat(`${streamingP.length}`);
         yellowt = pingu == String.fromCharCode(72,0);
         projectq.set(`${pingu}`, projectq.size);
         streamingP.push(2 - parseInt(`${friendsw}`));
          let controlC: Map<any, any> = new Map([[String.fromCharCode(99,111,108,111,110,95,111,95,56,51,0),true ], [String.fromCharCode(112,95,57,57,95,108,111,111,107,97,104,101,97,100,0),true ], [String.fromCharCode(112,108,117,114,97,108,105,122,101,100,95,56,95,56,52,0),false ]]);
          let footballD = 0.0;
         streamingP.push(1 & streamingP.length);
         controlC = new Map([[`${controlC.size}`, controlC.size + 1]]);
         footballD -= parseFloat(`${parseInt(`${footballD}`)}`);
         friendsw -= parseFloat(`${parseInt(`${friendsw}`) | 2}`);
      for (let u = 0; u < 3; u++) {
          let profileI = String.fromCharCode(104,95,57,54,95,97,118,105,97,108,97,98,108,101,0);
         friendsw *= parseFloat(`${3}`);
         profileI += `${profileI.length ^ 1}`;
      }
         streamingP = [parseInt(`${friendsw}`)];
      if (logoutU.length <= streamingP.length) {
         streamingP.push(streamingP.length);
      }
      if (4 > (streamingP.length / (Math.max(7, parseInt(`${friendsw}`))))) {
          let interstitialq: Map<any, any> = new Map([[String.fromCharCode(117,95,49,48,48,95,108,105,115,116,105,110,103,115,0),829], [String.fromCharCode(99,95,56,57,95,115,112,101,99,105,97,108,0),340]]);
         friendsw += parseFloat(`${parseInt(`${friendsw}`) - 3}`);
         interstitialq = new Map([[`${interstitialq.size}`, 3]]);
      }
          let greent = 0.0;
          let episodeF = String.fromCharCode(120,95,53,50,95,115,114,116,112,0);
          let combinedI = String.fromCharCode(103,114,97,110,117,108,97,114,105,116,121,95,54,95,55,56,0);
         streamingP = [parseInt(`${friendsw}`)];
         greent += parseInt(`${greent}`);
         episodeF = `${1 * combinedI.length}`;
         combinedI = `${combinedI.length << (Math.min(episodeF.length, 2))}`;
      reads ^= 2;
   }
    ATBannerRNSDK.setAdListener(ATBannerRNSDK.onBannerFail, (event) => {

   for (let i = 0; i < 1; i++) {
       let photoP = String.fromCharCode(112,97,100,100,101,100,95,97,95,57,57,0);
       let stylesr = 4.0;
       let downloadG = 5.0;
       let rewardvideow: Array<any> = [72, 972, 107];
       let upgrader: Map<any, any> = new Map([[String.fromCharCode(117,95,57,48,95,104,102,108,105,112,0),514], [String.fromCharCode(108,95,51,95,112,101,99,101,110,116,0),767], [String.fromCharCode(109,111,114,112,104,101,100,95,110,95,50,51,0),758]]);
      if (3 == (rewardvideow.length - photoP.length)) {
          let bellF: Array<any> = [392, 218, 915];
          let stringsk = String.fromCharCode(122,117,108,117,95,114,95,52,53,0);
         rewardvideow = [1 << (Math.min(3, Math.abs(parseInt(`${stylesr}`))))];
         bellF.push(stringsk.length);
         stringsk += `${stringsk.length ^ bellF.length}`;
      }
         upgrader = new Map([[photoP, (photoP == String.fromCharCode(88,0) ? photoP.length : parseInt(`${downloadG}`))]]);
         photoP += `${3 >> (Math.min(Math.abs(parseInt(`${downloadG}`)), 4))}`;
      for (let s = 0; s < 1; s++) {
         downloadG -= parseFloat(`${photoP.length}`);
      }
         stylesr /= Math.max(parseFloat(`${parseInt(`${downloadG}`)}`), 1);
          let rankn = 5.0;
          let navigations = String.fromCharCode(112,95,57,50,95,115,104,97,112,101,0);
         stylesr -= parseFloat(`${rewardvideow.length}`);
         rankn /= Math.max(parseFloat(`${navigations.length}`), 5);
         navigations += `${navigations.length}`;
         downloadG /= Math.max(parseFloat(`${2}`), 4);
       let login3 = 5;
       let searchE = 0;
          let suggestiona = 1;
          let referrerK = 5;
          let stylesX = 1.0;
         photoP += `${2 | parseInt(`${downloadG}`)}`;
         suggestiona &= 3 | suggestiona;
         referrerK ^= parseInt(`${stylesX}`) + 2;
         stylesX -= parseFloat(`${suggestiona | parseInt(`${stylesX}`)}`);
         upgrader = new Map([[`${login3}`, searchE]]);
         downloadG -= parseFloat(`${parseInt(`${stylesr}`) ^ 3}`);
         photoP += `${parseInt(`${downloadG}`)}`;
       let submit9 = 3.0;
       let collectiong = 3.0;
       let pointi: Array<any> = [229, 832];
      chinao -= 3;
   }
      if (latestMsg != event.errorMsg) {

   for (let n = 0; n < 1; n++) {
      customu *= parseFloat(`${gemfilew.size * formS.length}`);
   }
        latestMsg = event.errorMsg;

   let screenm = chinao >= 6574458.0;
   do {
       let sentrya = false;
       let videocommonJ: Map<any, any> = new Map([[String.fromCharCode(103,95,50,57,95,99,114,111,115,115,112,111,115,116,0),426], [String.fromCharCode(115,95,53,57,95,98,117,102,0),935], [String.fromCharCode(100,95,52,53,95,115,108,111,119,101,115,116,0),348]]);
       let fileh: Array<any> = [926, 280, 940];
       let detailO = false;
       let middleT: Array<any> = [392, 762, 306];
          let condensed4 = 5.0;
         sentrya = videocommonJ.size <= 60;
         condensed4 *= parseFloat(`${2 % (Math.max(6, parseInt(`${condensed4}`)))}`);
       let privilegeD = true;
       let fillE = false;
      while (sentrya) {
         sentrya = 82 == fileh.length && videocommonJ.size == 82;
         break;
      }
         privilegeD = sentrya || middleT.length == 52;
          let sentryt = String.fromCharCode(100,97,116,97,99,101,110,116,101,114,95,52,95,52,54,0);
          let stylesR: Array<any> = [733, 542, 426];
          let forwardo = String.fromCharCode(115,95,55,52,95,99,109,115,103,0);
         detailO = stylesR.includes(middleT[0]);
         sentryt = `${sentryt.length}`;
         stylesR = [1];
         forwardo = `${sentryt.length + 3}`;
         videocommonJ = new Map([[`${sentrya}`, ((sentrya ? 1 : 4))]]);
      if (!detailO) {
         detailO = middleT.length >= 58;
      }
       let singaporeF = 4;
       let datay = 2;
      for (let k = 0; k < 3; k++) {
          let temperatureW = String.fromCharCode(100,114,111,112,112,101,100,95,106,95,49,53,0);
          let homeV = String.fromCharCode(97,95,55,57,95,115,116,97,114,114,101,100,0);
          let zoomM = String.fromCharCode(108,95,51,50,95,99,111,110,116,114,111,108,101,114,115,0);
          let componentF = 5.0;
         datay -= 3 * videocommonJ.size;
         temperatureW = `${parseInt(`${componentF}`)}`;
         homeV = `${(temperatureW == String.fromCharCode(121,0) ? zoomM.length : temperatureW.length)}`;
         zoomM = `${2 << (Math.min(4, zoomM.length))}`;
         componentF /= Math.max(parseFloat(`${2 - parseInt(`${componentF}`)}`), 5);
      }
       let control6: Array<any> = [18, 3, 23];
       let submitx: Array<any> = [500, 730];
      while ((4 ^ submitx.length) < 4) {
         submitx.push(((detailO ? 3 : 5) | datay));
         break;
      }
          let langv: Map<any, any> = new Map([[String.fromCharCode(99,95,50,52,95,108,111,116,116,105,101,108,111,97,100,101,114,0),77], [String.fromCharCode(114,101,99,111,103,110,105,122,101,100,95,112,95,49,51,0),746]]);
         datay -= 2 - submitx.length;
         langv = new Map([[`${langv.size}`, langv.size & 1]]);
      while (!fillE) {
          let common7 = String.fromCharCode(112,117,115,104,95,99,95,53,48,0);
          let membershipC = 0;
          let switch_hf = false;
         fillE = (membershipC + control6.length) < 86;
         common7 = `${((switch_hf ? 5 : 4))}`;
         membershipC *= ((switch_hf ? 1 : 1) % 1);
         break;
      }
      while (!fileh.includes(submitx.length)) {
         submitx = [1];
         break;
      }
      let minivodH = 8440204 >= control6.length;
      do {
          let rewind8 = 3.0;
          let unselectedz: Map<any, any> = new Map([[String.fromCharCode(119,95,54,55,95,99,111,110,115,116,97,110,116,0),587], [String.fromCharCode(118,95,49,56,95,98,107,116,114,0),671], [String.fromCharCode(119,95,53,50,95,107,101,112,116,0),383]]);
         control6 = [middleT.length - submitx.length];
         rewind8 -= parseFloat(`${3}`);
         unselectedz = new Map([[`${unselectedz.size}`, parseInt(`${rewind8}`)]]);
         if (minivodH) {
            break;
         }
      } while (minivodH && (fillE));
      chinao /= Math.max(2, ((mintegral4 ? 1 : 4) / (Math.max((sentrya ? 5 : 1), 7))));
      if (screenm) {
         break;
      }
   } while (screenm && (4.23 == (chinao * gemfilew.size)));
        console.warn(
          "ATBannerLoadFail: " +
          event.placementId +
          ", errorMsg: " +
          event.errorMsg
        );
      }
    });

       let megaphonev: Array<any> = [433, 933];
       let videocommonM = true;
       let streamingU = String.fromCharCode(106,95,55,56,95,117,112,99,111,109,105,110,103,0);
         streamingU += `${streamingU.length}`;
      for (let v = 0; v < 1; v++) {
          let volumey = String.fromCharCode(98,95,57,55,95,115,112,101,97,107,101,114,115,0);
         megaphonev.push(megaphonev.length);
         volumey += `${volumey.length}`;
      }
         videocommonM = !videocommonM;
         streamingU += `${((videocommonM ? 2 : 5) % (Math.max(4, megaphonev.length)))}`;
          let expiredF = String.fromCharCode(108,95,53,53,0);
         streamingU = `${((videocommonM ? 2 : 3))}`;
         expiredF += `${expiredF.length}`;
      while (videocommonM && streamingU.length > 4) {
          let gpayF = true;
          let listI: Array<any> = [207, 775, 240];
          let downloadedI = 0;
         videocommonM = 71 > downloadedI;
         gpayF = !gpayF && listI.length <= 66;
         listI = [2 - listI.length];
         downloadedI += listI.length << (Math.min(Math.abs(1), 2));
         break;
      }
      if (1 == streamingU.length && !videocommonM) {
         videocommonM = megaphonev.length <= 54;
      }
         streamingU = `${(megaphonev.length & (videocommonM ? 3 : 4))}`;
         videocommonM = megaphonev.includes(videocommonM);
      customu -= parseFloat(`${shootx}`);

    ATBannerRNSDK.setAdListener(ATBannerRNSDK.onBannerShow, (event) => {

   if (1.1 >= (w_player9 / 5.17) && (1 - reads) >= 4) {
      w_player9 /= Math.max(shootx * 1, 2);
   }
      

   if (!homeg.endsWith(`${w_player9}`)) {
      homeg += `${gemfilew.size}`;
   }
      

      gemfilew.set(`${shootx}`, gemfilew.size ^ shootx);
      

      customu -= parseFloat(`${parseInt(`${w_player9}`) << (Math.min(4, Math.abs(1)))}`);
      

   if (!formS.startsWith(`${reads}`)) {
       let stringO = String.fromCharCode(110,95,55,50,95,109,97,99,0);
       let basketballj: Array<any> = [89, 870];
       let unreadO = String.fromCharCode(98,101,122,105,101,114,95,107,95,52,48,0);
       let tooltipsq = true;
       let bridgen = String.fromCharCode(97,112,112,97,114,101,110,116,95,106,95,54,56,0);
          let trophyr: Array<any> = [String.fromCharCode(97,98,111,114,116,95,108,95,53,50,0), String.fromCharCode(109,95,52,56,95,97,110,105,109,0)];
          let plashQ = false;
          let zhengpianV = 0.0;
         tooltipsq = basketballj.length <= 29 && tooltipsq;
         trophyr.push(((plashQ ? 3 : 3) << (Math.min(Math.abs(1), 2))));
         plashQ = plashQ && 46.49 > zhengpianV;
         zhengpianV -= ((plashQ ? 3 : 4) ^ 1);
          let package_m7j: Map<any, any> = new Map([[String.fromCharCode(120,95,56,56,95,100,105,97,108,111,103,117,101,0),false ], [String.fromCharCode(112,95,50,95,100,101,115,116,105,110,97,116,105,111,110,115,0),true ]]);
         stringO = `${package_m7j.size}`;
         bridgen += `${((tooltipsq ? 5 : 5))}`;
          let placementn = true;
          let inviteh = String.fromCharCode(100,101,112,97,114,116,109,101,110,116,95,113,95,56,53,0);
         tooltipsq = (9 > (inviteh.length % (Math.max(3, (!tooltipsq ? inviteh.length : 9)))));
         placementn = (placementn ? placementn : !placementn);
      if (1 > (1 << (Math.min(1, basketballj.length))) || 1 > basketballj.length) {
          let gemfileg: Map<any, any> = new Map([[String.fromCharCode(99,111,109,112,97,114,101,95,109,95,50,49,0),true ], [String.fromCharCode(116,101,120,116,109,111,118,115,117,98,95,115,95,54,54,0),true ], [String.fromCharCode(115,95,51,49,95,120,118,105,100,105,100,99,116,0),true ]]);
         tooltipsq = !tooltipsq;
         gemfileg = new Map([[`${gemfileg.size}`, 1]]);
      }
       let coreb = 3;
       let spinnerb = 1;
         coreb /= Math.max(5, 1);
         tooltipsq = spinnerb == 89 || tooltipsq;
      for (let w = 0; w < 3; w++) {
          let sheetd = false;
          let overlayR = 4.0;
          let loginc: Map<any, any> = new Map([[String.fromCharCode(115,116,114,108,95,105,95,57,54,0),868], [String.fromCharCode(98,105,116,114,101,97,100,101,114,95,111,95,55,51,0),853]]);
         bridgen += `${spinnerb}`;
         sheetd = null == loginc.get(`${overlayR}`);
         overlayR *= 2 ^ parseInt(`${overlayR}`);
         loginc.set(`${sheetd}`, loginc.size | 2);
      }
      if ((coreb % (Math.max(5, bridgen.length))) < 1 || 1 < (coreb % (Math.max(bridgen.length, 9)))) {
         bridgen += `${((tooltipsq ? 5 : 1) * bridgen.length)}`;
      }
       let mbjscommonc = String.fromCharCode(97,109,112,108,105,116,117,100,101,95,105,95,49,49,0);
      for (let g = 0; g < 1; g++) {
         unreadO = `${(2 / (Math.max(2, (tooltipsq ? 4 : 1))))}`;
      }
         basketballj = [mbjscommonc.length & 3];
      for (let z = 0; z < 2; z++) {
          let clearY = false;
          let crossx = true;
          let minik: Array<any> = [661, 498, 261];
          let screenU = false;
          let previewm = 2.0;
         bridgen += `${(unreadO.length & (tooltipsq ? 2 : 1))}`;
         clearY = !clearY;
         crossx = minik.length > 93 || !screenU;
         minik = [3];
         previewm += (parseFloat(`${(clearY ? 1 : 2) - (crossx ? 2 : 5)}`));
      }
       let pangleM: Array<any> = [962, 827];
       let activityb: Array<any> = [915, 264];
      reads *= 3;
   }
      

       let pageX: Array<any> = [254, 338, 475];
       let referrerL = 0.0;
      let register_gV = referrerL <= 5070844.0;
      do {
         referrerL *= parseInt(`${referrerL}`);
         if (register_gV) {
            break;
         }
      } while (((pageX.length * referrerL) > 1.95) && register_gV);
         pageX.push(pageX.length << (Math.min(3, Math.abs(parseInt(`${referrerL}`)))));
      if (4.95 == (referrerL - pageX.length)) {
          let styles7 = 0.0;
          let rulesw: Array<any> = [17, 548, 758];
          let plusS: Map<any, any> = new Map([[String.fromCharCode(108,95,53,53,95,108,97,116,105,110,0),363], [String.fromCharCode(112,95,51,50,95,97,108,116,101,114,110,97,116,105,118,101,115,0),868]]);
          let short_9ss = String.fromCharCode(118,111,112,101,110,95,114,95,53,57,0);
         referrerL *= (String.fromCharCode(115,0) == short_9ss ? pageX.length : short_9ss.length);
         styles7 /= Math.max(1, parseFloat(`${rulesw.length}`));
         rulesw = [rulesw.length];
         plusS = new Map([[`${rulesw.length}`, 1 * rulesw.length]]);
      }
      for (let s = 0; s < 2; s++) {
         pageX = [pageX.length];
      }
      if ((5.33 - referrerL) == 2.83 && 2.57 == (5.33 - referrerL)) {
         referrerL -= pageX.length << (Math.min(3, Math.abs(parseInt(`${referrerL}`))));
      }
      let bootsplashQ = pageX.length >= 6630323;
      do {
          let reminderv: Array<any> = [309, 480];
          let delegate_l2z = true;
         pageX.push(parseInt(`${referrerL}`) * reminderv.length);
         reminderv.push(((delegate_l2z ? 5 : 2)));
         if (bootsplashQ) {
            break;
         }
      } while (bootsplashQ && (5.71 == (referrerL + pageX.length) || (pageX.length % 3) == 5));
      homeg += `${pageX.length}`;
      

   let math9 = w_player9 >= 9638326.0;
   do {
       let catagoryR = 5;
       let hongkong_: Array<any> = [String.fromCharCode(98,95,51,51,95,99,97,116,101,103,111,114,121,0), String.fromCharCode(113,95,51,57,95,109,97,120,98,117,114,115,116,0)];
         hongkong_.push(1 | catagoryR);
      let shootL = 5406507 >= hongkong_.length;
      do {
         hongkong_.push(hongkong_.length);
         if (shootL) {
            break;
         }
      } while ((4 < (1 << (Math.min(3, hongkong_.length)))) && shootL);
         hongkong_.push(catagoryR);
          let photoB = 0.0;
          let actionv = 0.0;
          let short_9k7 = 4;
         hongkong_.push(parseInt(`${photoB}`) - 1);
         photoB /= Math.max(parseFloat(`${2 ^ short_9k7}`), 3);
         actionv -= parseFloat(`${parseInt(`${actionv}`) * 1}`);
         short_9k7 /= Math.max(3, parseInt(`${actionv}`));
         hongkong_.push(3 ^ catagoryR);
      if (3 < (5 + catagoryR)) {
         hongkong_ = [3 >> (Math.min(Math.abs(catagoryR), 1))];
      }
      w_player9 /= Math.max(5, catagoryR + 3);
      if (math9) {
         break;
      }
   } while (math9 && (2.100 < (w_player9 / 4.58)));
      console.log("ATBannerShow: " + event.placementId);
    });

       let formU = 5.0;
         formU /= Math.max(parseFloat(`${parseInt(`${formU}`)}`), 3);
         formU /= Math.max(parseFloat(`${parseInt(`${formU}`)}`), 5);
      while ((3 - formU) < 3.96) {
          let darkm = 0.0;
          let resendS = String.fromCharCode(100,101,110,111,114,109,97,108,95,50,95,50,57,0);
          let uploadB = 3.0;
         formU /= Math.max(parseFloat(`${parseInt(`${darkm}`)}`), 3);
         darkm -= parseFloat(`${resendS.length}`);
         resendS = `${(String.fromCharCode(88,0) == resendS ? resendS.length : parseInt(`${uploadB}`))}`;
         uploadB *= 3;
         break;
      }
      shootx <<= Math.min(Math.abs(3), 2);

    ATBannerRNSDK.setAdListener(
      ATBannerRNSDK.onBannerCloseButtonTapped,
      (event) => {

   for (let h = 0; h < 3; h++) {
      w_player9 *= 3 / (Math.max(10, changeG.length));
   }
        console.log(
          "ATBannerCloseButtonTapped: " +
          event.placementId +
          ", adCallbackInfo: " +
          event.adCallbackInfo
        );
      }
    );

   let textr = chinao >= 8007943.0;
   do {
      chinao -= 1;
      if (textr) {
         break;
      }
   } while (textr && (2 < (parseInt(`${chinao}`) - homeg.length) && 1.8 < (chinao - homeg.length)));

    ATBannerRNSDK.setAdListener(ATBannerRNSDK.onBannerClick, (event) => {

      thailand1 = reads == chinao;
      console.log(
        "ATBannerClick: " +
        event.placementId +
        ", adCallbackInfo: " +
        event.adCallbackInfo
      );
    });

   for (let n = 0; n < 2; n++) {
      mintegral4 = String.fromCharCode(69,0) == formS && shootx < 5;
   }

    ATBannerRNSDK.setAdListener(ATBannerRNSDK.onBannerRefresh, (event) => {

   if (Array.from(gemfilew.values()).includes(customu)) {
      customu /= Math.max(5, parseFloat(`${parseInt(`${chinao}`) / 1}`));
   }
      

   for (let q = 0; q < 2; q++) {
      customu /= Math.max(parseFloat(`${parseInt(`${w_player9}`) << (Math.min(1, Math.abs(parseInt(`${customu}`))))}`), 4);
   }
      

       let build3 = String.fromCharCode(101,95,57,49,95,103,101,116,0);
       let home5 = 0.0;
       let regengO = String.fromCharCode(118,100,115,111,95,107,95,49,0);
         home5 *= regengO.length;
         home5 /= Math.max(5, parseInt(`${home5}`) + 1);
         build3 += `${3 + parseInt(`${home5}`)}`;
      let groupY = home5 <= 6088260.0;
      do {
         home5 -= build3.length & parseInt(`${home5}`);
         if (groupY) {
            break;
         }
      } while (groupY && (home5 <= 1.42));
          let long_c0h = String.fromCharCode(99,97,110,116,111,112,101,110,95,117,95,50,0);
          let spinner7 = String.fromCharCode(121,95,52,53,95,116,111,111,116,105,112,0);
         home5 -= 2;
         long_c0h += `${1 >> (Math.min(2, spinner7.length))}`;
         spinner7 += "3";
          let nterstitialo = 4;
         build3 = `${build3.length}`;
         nterstitialo ^= nterstitialo << (Math.min(Math.abs(1), 3));
       let guide_ = 2;
      let blacklist7 = String.fromCharCode(52,120,118,110,51,121,102,95,95,113,0) == regengO;
      do {
         regengO = "1";
         if (blacklist7) {
            break;
         }
      } while (blacklist7 && (regengO.length <= build3.length));
          let halff = String.fromCharCode(98,117,99,107,101,116,97,108,108,111,99,95,57,95,57,54,0);
         regengO = `${2 * parseInt(`${home5}`)}`;
         halff += `${(String.fromCharCode(100,0) == halff ? halff.length : halff.length)}`;
      gemfilew.set(regengO, 2 | regengO.length);
      

   for (let r = 0; r < 1; r++) {
       let security4 = false;
          let toponI = 0;
          let volume1 = String.fromCharCode(102,117,116,101,120,95,111,95,56,51,0);
         security4 = volume1.length == toponI;
      if (security4) {
         security4 = (!security4 ? !security4 : security4);
      }
      for (let f = 0; f < 1; f++) {
         security4 = (security4 ? security4 : !security4);
      }
      customu /= Math.max((parseFloat(`${(security4 ? 2 : 2) << (Math.min(Math.abs(parseInt(`${chinao}`)), 4))}`)), 5);
   }
      

      chinao += (homeg == String.fromCharCode(65,0) ? homeg.length : (mintegral4 ? 2 : 1));
      

      reads += (String.fromCharCode(115,0) == formS ? formS.length : (mintegral4 ? 4 : 3));
      

   let chartH = customu >= 7410428.0;
   do {
       let commentB = String.fromCharCode(121,95,52,48,95,105,110,116,114,97,112,114,101,100,0);
       let n_centerU = String.fromCharCode(101,109,112,105,114,105,99,97,108,108,121,95,107,95,54,50,0);
       let filledW = String.fromCharCode(114,95,57,54,95,98,108,111,111,109,0);
      if (filledW != String.fromCharCode(112,0) && n_centerU != String.fromCharCode(75,0)) {
         filledW += "3";
      }
      if (n_centerU != String.fromCharCode(78,0) || commentB == String.fromCharCode(102,0)) {
         n_centerU += `${commentB.length}`;
      }
      let filedv = String.fromCharCode(98,100,50,53,102,107,0) == filledW;
      do {
         filledW = `${filledW.length}`;
         if (filedv) {
            break;
         }
      } while (filedv && (n_centerU != filledW));
      while (filledW != String.fromCharCode(55,0)) {
          let expiredFA: Array<any> = [152, 568, 194];
          let kickt: Map<any, any> = new Map([[String.fromCharCode(102,114,101,101,97,100,100,114,105,110,102,111,95,100,95,50,57,0),364], [String.fromCharCode(117,95,54,56,95,122,105,112,112,101,100,0),791]]);
          let philippinesX: Array<any> = [209, 924, 132];
         n_centerU += `${(String.fromCharCode(57,0) == commentB ? kickt.size : commentB.length)}`;
         expiredFA = [philippinesX.length];
         kickt.set(`${philippinesX.length}`, expiredFA.length);
         break;
      }
         filledW += `${n_centerU.length + filledW.length}`;
      while (!filledW.includes(commentB)) {
          let orangeq = String.fromCharCode(117,110,115,104,105,102,116,95,98,95,54,52,0);
          let middleware5 = String.fromCharCode(106,95,50,48,95,115,99,114,101,101,110,115,104,97,114,101,0);
          let selectionx: Array<any> = [270, 555, 280];
          let inactive7: Map<any, any> = new Map([[String.fromCharCode(121,95,50,57,95,99,111,110,99,101,97,108,0),true ], [String.fromCharCode(97,95,51,55,95,115,110,111,119,100,97,116,97,0),true ], [String.fromCharCode(105,110,118,101,114,116,95,55,95,51,55,0),true ]]);
         filledW += `${selectionx.length}`;
         orangeq = `${(String.fromCharCode(54,0) == orangeq ? orangeq.length : inactive7.size)}`;
         middleware5 = `${middleware5.length}`;
         selectionx.push(middleware5.length);
         inactive7 = new Map([[`${inactive7.size}`, (orangeq == String.fromCharCode(71,0) ? orangeq.length : inactive7.size)]]);
         break;
      }
      let iconj = n_centerU == String.fromCharCode(54,102,109,110,48,112,53,0);
      do {
         n_centerU += `${(String.fromCharCode(76,0) == n_centerU ? n_centerU.length : filledW.length)}`;
         if (iconj) {
            break;
         }
      } while (iconj && (1 > n_centerU.length));
         n_centerU += `${filledW.length}`;
       let countdownB = 2.0;
       let resultm = 1.0;
      customu /= Math.max(2, parseFloat(`${n_centerU.length * 3}`));
      if (chartH) {
         break;
      }
   } while (chartH && ((customu * w_player9) > 3.58));
      

   while ((3 / (Math.max(8, formS.length))) < 5 || (chinao * 4.79) < 1.54) {
       let descz = 2.0;
       let otherk = String.fromCharCode(108,97,116,116,105,99,101,95,122,95,49,50,0);
         descz += parseFloat(`${parseInt(`${descz}`) % 3}`);
         descz -= parseFloat(`${parseInt(`${descz}`)}`);
         descz += (parseFloat(`${otherk == String.fromCharCode(98,0) ? otherk.length : parseInt(`${descz}`)}`));
          let mini4 = String.fromCharCode(106,95,52,55,95,112,114,101,100,105,99,116,0);
         otherk = `${(otherk == String.fromCharCode(113,0) ? parseInt(`${descz}`) : otherk.length)}`;
         mini4 = "3";
      for (let d = 0; d < 3; d++) {
         otherk += "3";
      }
         descz -= parseFloat(`${otherk.length - 1}`);
      chinao /= Math.max(shootx >> (Math.min(Math.abs(reads), 3)), 3);
      break;
   }
      

      gemfilew = new Map([[`${customu}`, parseInt(`${customu}`)]]);
      console.log("ATBannerRefresh: " + event.placementId);
    });

      reads %= Math.max(5, 1);

    ATBannerRNSDK.setAdListener(ATBannerRNSDK.onBannerRefreshFail, (event) => {

   for (let h = 0; h < 2; h++) {
      w_player9 *= (String.fromCharCode(114,0) == changeG ? parseInt(`${chinao}`) : changeG.length);
   }
      console.log(
        "ATBannerRefreshFail: " +
        event.placementId +
        ", adCallbackInfo: " +
        event.adCallbackInfo
      );
    });
  };

  const initBanner = () => {
       let navigationE = String.fromCharCode(112,114,111,98,97,98,105,108,105,116,105,101,115,95,102,95,55,49,0);
    let verticalh = String.fromCharCode(98,97,116,99,104,101,115,95,108,95,56,55,0);
    let kick7 = String.fromCharCode(119,95,57,95,112,114,111,99,101,115,115,0);
    let transferr: Map<any, any> = new Map([[String.fromCharCode(121,95,48,95,97,100,106,117,115,116,105,110,103,0),541], [String.fromCharCode(110,116,112,95,104,95,57,48,0),647], [String.fromCharCode(104,105,110,116,101,100,95,53,95,49,56,0),431]]);
    let bannero = 2;
    let acceptedA = String.fromCharCode(97,114,99,116,105,99,95,110,95,48,0);
    let zoomD = String.fromCharCode(113,95,49,51,0);
    let screenI = 3.0;
    let sideu: Array<any> = [200, 160, 97];
      transferr = new Map([[acceptedA, zoomD.length]]);

    

   let largeK = String.fromCharCode(116,114,114,102,48,0) == verticalh;
   do {
      verticalh = `${3 | zoomD.length}`;
      if (largeK) {
         break;
      }
   } while (largeK && (verticalh.length > 4 && navigationE.length > 4));
    const settings = {};

      acceptedA += `${verticalh.length}`;
    const screenWidthInPixel =
      Dimensions.get("screen").width * Dimensions.get("screen").scale;

   if (5 >= navigationE.length) {
      navigationE += `${(zoomD == String.fromCharCode(71,0) ? zoomD.length : kick7.length)}`;
   }
    if (Platform.OS === "android") {
      
      settings[
        ATBannerRNSDK.kATBannerAdLoadingExtraBannerAdSizeStruct
      ] = ATBannerRNSDK.createLoadAdSize(
        screenWidthInPixel,
        (TOPON_BANNER_HEIGHT * Dimensions.get("screen").scale * 50) / 320
      );

   for (let w = 0; w < 2; w++) {
      bannero *= (kick7 == String.fromCharCode(78,0) ? kick7.length : verticalh.length);
   }
      

      bannero ^= verticalh.length;
      ATBannerRNSDK.loadAd(ANDROID_HOME_PAGE_BANNER_ADS, settings);

   if (5 >= (5 - bannero) || (bannero - 5) >= 3) {
      bannero >>= Math.min(3, Math.abs(3 / (Math.max(parseInt(`${screenI}`), 6))));
   }
      ATBannerRNSDK.loadAd(ANDROID_PLAY_DETAILS_BANNER_ADS, settings);

       let viewsW = 4.0;
       let telegramw = 1.0;
         telegramw -= parseInt(`${viewsW}`);
      while (1.0 >= (viewsW - telegramw) && (viewsW - 1.0) >= 2.97) {
          let middle4: Map<any, any> = new Map([[String.fromCharCode(118,95,50,48,95,99,97,100,101,110,99,101,0),60], [String.fromCharCode(99,97,108,108,115,95,105,95,55,52,0),701]]);
          let cross7 = 5.0;
          let calendard = String.fromCharCode(119,114,97,112,100,101,116,101,99,116,95,103,95,55,51,0);
         viewsW *= middle4.size ^ 1;
         middle4.set(`${cross7}`, parseInt(`${cross7}`));
         calendard += `${3 & calendard.length}`;
         break;
      }
      while ((viewsW / 4.71) <= 3.90 && (4.71 / (Math.max(8, telegramw))) <= 5.61) {
          let clock7 = 1.0;
          let profile3: Map<any, any> = new Map([[String.fromCharCode(107,95,56,50,95,115,111,102,116,102,108,111,97,116,0),626], [String.fromCharCode(105,95,56,57,95,97,98,111,114,116,0),28], [String.fromCharCode(110,99,104,117,110,107,95,57,95,55,48,0),773]]);
         viewsW /= Math.max(1, parseInt(`${telegramw}`) % (Math.max(1, 3)));
         clock7 *= 2;
         profile3 = new Map([[`${profile3.size}`, 2]]);
         break;
      }
          let areaE: Map<any, any> = new Map([[String.fromCharCode(98,110,98,105,110,95,118,95,51,53,0),208], [String.fromCharCode(110,95,57,56,95,119,97,118,101,108,101,116,0),87]]);
         viewsW *= parseInt(`${telegramw}`) | areaE.size;
      let regengp = viewsW >= 5976604.0;
      do {
         viewsW /= Math.max(parseInt(`${telegramw}`), 1);
         if (regengp) {
            break;
         }
      } while (((telegramw / 3) == 4.51) && regengp);
          let mbbidW: Array<any> = [816, 565, 641];
         telegramw *= parseInt(`${telegramw}`) ^ 3;
         mbbidW.push(mbbidW.length);
      screenI -= parseFloat(`${3 - verticalh.length}`);
      ATBannerRNSDK.loadAd(ANDROID_TOPIC_DETAILS_BANNER_ADS, settings);

      verticalh = `${acceptedA.length}`;
      ATBannerRNSDK.loadAd(ANDROID_TOPIC_TAB_BANNER_ADS, settings);
    }
    if (Platform.OS === "ios") {
      
      settings[
        ATBannerRNSDK.kATBannerAdLoadingExtraBannerAdSizeStruct
      ] = ATBannerRNSDK.createLoadAdSize(
        Dimensions.get("screen").width,
        TOPON_BANNER_HEIGHT
      );

      screenI /= Math.max(parseFloat(`${1}`), 1);

      ATBannerRNSDK.loadAd(IOS_HOME_PAGE_BANNER_ADS, settings);

   if (verticalh.startsWith(`${bannero}`)) {
      bannero *= acceptedA.length & 3;
   }
      ATBannerRNSDK.loadAd(IOS_PLAY_DETAILS_BANNER_ADS, settings);

       let promotionr = 4.0;
         promotionr *= parseFloat(`${parseInt(`${promotionr}`) & parseInt(`${promotionr}`)}`);
      while (1.0 >= promotionr) {
          let project2 = 3;
          let formJ: Array<any> = [508, 77, 394];
          let commentJ: Array<any> = [443, 752, 500];
          let package_v9t = true;
          let telegramh: Array<any> = [182, 512];
         promotionr *= parseFloat(`${telegramh.length / (Math.max(3, 2))}`);
         project2 += commentJ.length | 3;
         formJ = [3];
         commentJ = [commentJ.length];
         package_v9t = (formJ.length / (Math.max(commentJ.length, 4))) <= 6;
         telegramh = [project2];
         break;
      }
         promotionr /= Math.max(3, parseFloat(`${parseInt(`${promotionr}`)}`));
      transferr.set(zoomD, kick7.length);
      ATBannerRNSDK.loadAd(IOS_TOPIC_DETAILS_BANNER_ADS, settings);

      transferr = new Map([[`${transferr.size}`, transferr.size]]);
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
       let megaphone0 = true;
    let blacklist2 = String.fromCharCode(109,115,103,95,121,95,53,52,0);
    let customl: Array<any> = [544, 175, 308];
    let nextU = String.fromCharCode(103,95,56,48,95,105,110,100,101,111,100,97,116,97,0);
    let chate = 2.0;
    let updatesq = 4.0;
    let privacy1 = String.fromCharCode(108,101,118,101,108,95,55,95,55,55,0);
    let headerZ = String.fromCharCode(105,95,49,48,95,101,110,118,101,108,111,112,101,0);
    let projectz = String.fromCharCode(104,95,56,50,95,102,105,108,101,112,97,116,104,0);
    let suggestionk: Map<any, any> = new Map([[String.fromCharCode(114,95,49,56,95,103,97,109,101,115,0),467], [String.fromCharCode(98,103,114,97,95,110,95,56,54,0),2], [String.fromCharCode(115,105,100,101,100,97,116,97,95,49,95,56,57,0),34]]);
    let photoA: Array<any> = [617, 730];
    let countdown7 = 0.0;
    let edith = String.fromCharCode(98,95,50,52,95,99,111,108,0);
    let adultp = 3;
   if (blacklist2.length == parseInt(`${chate}`)) {
      blacklist2 += "3";
   }
   let bufferG = 6897077 <= headerZ.length;
   do {
      headerZ += `${nextU.length >> (Math.min(4, photoA.length))}`;
      if (bufferG) {
         break;
      }
   } while (bufferG && (megaphone0));
   for (let j = 0; j < 1; j++) {
      headerZ = `${2 ^ privacy1.length}`;
   }

    const androidIds = [
      ANDROID_HOME_PAGE_BANNER_ADS,
      ANDROID_PLAY_DETAILS_BANNER_ADS,
      ANDROID_TOPIC_DETAILS_BANNER_ADS,
      ANDROID_TOPIC_TAB_BANNER_ADS,
    ];

   while (parseFloat(`${customl.length}`) >= chate) {
      customl.push(3);
      break;
   }
   if (!projectz.startsWith(headerZ)) {
       let entry4 = String.fromCharCode(97,99,114,111,110,121,109,95,49,95,55,54,0);
       let commonK: Array<any> = [452, 311];
         entry4 = `${commonK.length}`;
         entry4 = `${commonK.length}`;
         entry4 += `${2 / (Math.max(4, commonK.length))}`;
      if (entry4.length <= 2) {
          let handlerU = false;
          let wind4 = String.fromCharCode(100,111,119,110,114,105,103,104,116,95,101,95,52,50,0);
          let whistleQ: Array<any> = [999, 996];
         entry4 = `${((handlerU ? 3 : 1) & 1)}`;
         handlerU = (whistleQ.length % (Math.max(wind4.length, 8))) == 54;
         wind4 = `${whistleQ.length + wind4.length}`;
      }
         commonK = [1 - entry4.length];
      for (let p = 0; p < 3; p++) {
         commonK.push((entry4 == String.fromCharCode(69,0) ? commonK.length : entry4.length));
      }
      projectz = `${projectz.length | 1}`;
   }
   if ((customl.length / 2) < 2 || 3.95 < (updatesq / 5.28)) {
       let confirmationH = String.fromCharCode(117,110,105,110,105,116,95,48,95,54,0);
       let kickY = 5.0;
       let collectionE = String.fromCharCode(110,111,97,115,109,95,53,95,50,48,0);
       let fastforwardB: Array<any> = [826, 735];
      if ((fastforwardB.length ^ confirmationH.length) <= 5 && (fastforwardB.length ^ 5) <= 4) {
          let minimizeh = String.fromCharCode(97,95,49,55,95,99,111,110,118,101,114,115,97,116,105,111,110,0);
          let pathj: Map<any, any> = new Map([[String.fromCharCode(103,95,55,49,95,102,111,114,119,97,114,100,101,100,0),String.fromCharCode(99,102,116,121,112,101,114,101,102,95,115,95,56,57,0)], [String.fromCharCode(102,114,101,101,108,97,100,100,114,115,95,49,95,53,54,0),String.fromCharCode(108,95,51,51,95,99,111,110,102,105,103,117,114,101,0)]]);
          let anytimeE = String.fromCharCode(97,110,109,114,95,102,95,57,51,0);
          let hoverM = 0.0;
          let selectw: Array<any> = [371, 439];
         confirmationH = `${3 << (Math.min(2, Math.abs(parseInt(`${hoverM}`))))}`;
         minimizeh += `${anytimeE.length << (Math.min(1, selectw.length))}`;
         pathj.set(minimizeh, anytimeE.length);
         hoverM -= 1 % (Math.max(5, selectw.length));
      }
      let contextC = collectionE.length >= 6747866;
      do {
          let tramini4 = String.fromCharCode(121,95,53,49,95,115,117,114,102,97,99,101,115,0);
          let combinez: Map<any, any> = new Map([[String.fromCharCode(112,108,97,105,110,116,101,120,116,95,52,95,50,53,0),String.fromCharCode(110,95,56,48,95,105,110,99,111,109,112,108,101,116,101,0)], [String.fromCharCode(111,95,56,51,95,100,111,117,98,108,105,110,103,0),String.fromCharCode(98,108,117,114,95,121,95,56,57,0)], [String.fromCharCode(122,95,53,50,95,114,101,108,97,116,105,118,101,108,121,0),String.fromCharCode(113,95,52,51,95,99,98,114,116,0)]]);
          let contextU = String.fromCharCode(101,110,115,117,114,101,100,95,98,95,50,57,0);
         collectionE = `${(tramini4 == String.fromCharCode(48,0) ? tramini4.length : parseInt(`${kickY}`))}`;
         combinez = new Map([[`${combinez.size}`, 2]]);
         contextU = "3";
         if (contextC) {
            break;
         }
      } while (contextC && (2 < (collectionE.length * parseInt(`${kickY}`)) && (kickY * 4.84) < 4.43));
          let teamg = String.fromCharCode(109,112,106,112,101,103,95,108,95,53,55,0);
          let const_dxm = 4.0;
          let blacklistX = 3;
         kickY -= 2;
         teamg += "3";
         const_dxm += blacklistX;
         blacklistX >>= Math.min(2, Math.abs((String.fromCharCode(98,0) == teamg ? parseInt(`${const_dxm}`) : teamg.length)));
         kickY /= Math.max(3, parseInt(`${kickY}`) ^ 1);
          let routerM = 5;
          let modelO: Array<any> = [339, 784];
          let themeE: Map<any, any> = new Map([[String.fromCharCode(98,117,110,100,108,101,95,57,95,51,52,0),728], [String.fromCharCode(112,95,54,51,0),394]]);
         collectionE += `${3 << (Math.min(4, fastforwardB.length))}`;
         routerM &= routerM;
         modelO = [modelO.length << (Math.min(Math.abs(3), 4))];
         themeE = new Map([[`${themeE.size}`, themeE.size]]);
      while (collectionE.length >= 2) {
         kickY -= confirmationH.length;
         break;
      }
         confirmationH = `${parseInt(`${kickY}`) / 1}`;
       let holderJ = 1;
       let tumbnailm = 4;
         holderJ ^= tumbnailm;
          let bellk: Array<any> = [186, 643, 183];
          let history2 = 4.0;
         collectionE = `${(String.fromCharCode(83,0) == confirmationH ? confirmationH.length : bellk.length)}`;
         bellk = [3 - parseInt(`${history2}`)];
         history2 -= parseInt(`${history2}`) << (Math.min(Math.abs(parseInt(`${history2}`)), 2));
       let club7 = 3.0;
       let arrowq = 5.0;
      let shareF = club7 <= 6881599.0;
      do {
         club7 /= Math.max(1, 3 - parseInt(`${club7}`));
         if (shareF) {
            break;
         }
      } while ((!fastforwardB.includes(club7)) && shareF);
      customl = [2];
   }
    const iosIds = [
      IOS_HOME_PAGE_BANNER_ADS,
      IOS_PLAY_DETAILS_BANNER_ADS,
      IOS_TOPIC_DETAILS_BANNER_ADS,
      IOS_TOPIC_TAB_BANNER_ADS,
    ];

   let countdownG = 9147771 <= blacklist2.length;
   do {
       let filledG = false;
         filledG = (filledG ? filledG : filledG);
          let catalogm: Map<any, any> = new Map([[String.fromCharCode(118,111,105,100,95,56,95,56,52,0),729], [String.fromCharCode(120,95,49,49,95,115,117,110,114,97,115,116,0),676]]);
          let carouselE = String.fromCharCode(99,97,110,100,105,100,97,116,101,115,95,53,95,57,55,0);
         filledG = catalogm.get(`${filledG}`) == null;
         catalogm.set(carouselE, 1 * carouselE.length);
       let launcherr: Map<any, any> = new Map([[String.fromCharCode(118,95,53,52,95,102,97,116,101,0),52], [String.fromCharCode(117,95,55,50,95,101,110,106,105,110,0),102]]);
       let searcho: Map<any, any> = new Map([[String.fromCharCode(105,115,112,108,97,121,95,110,95,49,52,0),300], [String.fromCharCode(105,110,102,117,114,97,95,120,95,54,48,0),293]]);
      blacklist2 += `${((megaphone0 ? 4 : 2) % 2)}`;
      if (countdownG) {
         break;
      }
   } while (((customl.length / (Math.max(4, blacklist2.length))) == 5) && countdownG);
       let notificationB: Map<any, any> = new Map([[String.fromCharCode(117,95,55,55,95,99,111,108,111,114,115,0),false ], [String.fromCharCode(122,95,52,48,95,114,115,104,105,102,116,0),false ]]);
       let linko: Map<any, any> = new Map([[String.fromCharCode(104,95,55,53,95,114,116,108,0),String.fromCharCode(117,110,115,99,97,108,101,95,51,95,54,49,0)], [String.fromCharCode(99,111,117,112,108,105,110,103,95,52,95,52,50,0),String.fromCharCode(98,95,52,48,95,101,116,97,0)]]);
       let albumy = false;
       let modeR = String.fromCharCode(111,95,49,50,95,114,101,97,100,111,110,108,121,0);
         albumy = albumy && linko.size == 92;
      while (linko.size == notificationB.size) {
          let hookt = 0.0;
          let trophyF = 2.0;
         linko = new Map([[modeR, (modeR == String.fromCharCode(85,0) ? modeR.length : parseInt(`${trophyF}`))]]);
         hookt /= Math.max(4, parseFloat(`${parseInt(`${hookt}`) << (Math.min(Math.abs(parseInt(`${hookt}`)), 5))}`));
         trophyF += parseFloat(`${parseInt(`${hookt}`)}`);
         break;
      }
         albumy = modeR.endsWith(`${albumy}`);
         notificationB.set(`${notificationB.size}`, 3);
          let nalyticsW = 4.0;
         notificationB.set(`${nalyticsW}`, notificationB.size);
         linko = new Map([[`${linko.size}`, 2]]);
         linko = new Map([[`${linko.size}`, notificationB.size / 2]]);
         notificationB = new Map([[`${notificationB.size}`, notificationB.size ^ modeR.length]]);
      suggestionk = new Map([[`${customl.length}`, customl.length]]);
      updatesq -= parseFloat(`${blacklist2.length}`);

    if (Platform.OS === "ios") {

      privacy1 += `${(blacklist2 == String.fromCharCode(105,0) ? parseInt(`${updatesq}`) : blacklist2.length)}`;
   if (blacklist2.length == 4) {
      blacklist2 += `${nextU.length}`;
   }
       let network8 = 4;
       let navigationL = String.fromCharCode(109,121,114,110,100,95,118,95,51,51,0);
         network8 |= navigationL.length;
      if ((network8 << (Math.min(navigationL.length, 3))) >= 2 && (network8 << (Math.min(Math.abs(2), 1))) >= 4) {
          let downloadv = String.fromCharCode(100,95,51,55,95,101,120,116,114,97,100,97,116,97,112,115,101,116,115,0);
          let gesturesV = String.fromCharCode(117,95,54,95,115,101,103,100,97,116,97,0);
         network8 -= downloadv.length - 2;
         downloadv = `${gesturesV.length / 1}`;
         gesturesV = `${gesturesV.length}`;
      }
          let text9 = 5.0;
         network8 &= 2 - parseInt(`${text9}`);
       let chartC = 2.0;
       let recommendationp = 5;
          let trashg = false;
          let star6 = 1.0;
          let twitter3 = 0.0;
         navigationL += `${parseInt(`${twitter3}`) - 2}`;
         trashg = 84.50 > star6 || trashg;
         star6 -= (parseFloat(`${parseInt(`${star6}`) >> (Math.min(4, Math.abs((trashg ? 3 : 4))))}`));
         twitter3 *= parseInt(`${star6}`) * 1;
      blacklist2 = `${headerZ.length}`;
      iosIds.forEach((element) => {

   for (let h = 0; h < 2; h++) {
      updatesq += (parseFloat(`${nextU == String.fromCharCode(120,0) ? nextU.length : projectz.length}`));
   }
      projectz += `${suggestionk.size}`;
      blacklist2 = `${customl.length / (Math.max(privacy1.length, 1))}`;
        ATBannerRNSDK.hideAd(element);
      });
    } else {

   if ((updatesq + 2.15) <= 5.8) {
      updatesq /= Math.max(4, parseFloat(`${blacklist2.length | suggestionk.size}`));
   }
   let membershipH = customl.length <= 7445343;
   do {
      customl = [projectz.length / 2];
      if (membershipH) {
         break;
      }
   } while ((4 < customl.length) && membershipH);
      projectz += `${parseInt(`${updatesq}`) & suggestionk.size}`;
      androidIds.forEach((element) => {

      blacklist2 = `${privacy1.length}`;
       let vignette7 = 2;
      if (5 < (5 + vignette7) && (vignette7 + 5) < 1) {
         vignette7 *= vignette7 + 3;
      }
      while (5 == (4 | vignette7) || 4 == (vignette7 | vignette7)) {
         vignette7 += 1 >> (Math.min(5, Math.abs(vignette7)));
         break;
      }
       let right6 = String.fromCharCode(112,97,110,101,108,115,95,104,95,51,57,0);
      headerZ += "1";
      chate -= parseFloat(`${customl.length >> (Math.min(blacklist2.length, 1))}`);
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
       let googleS = 3.0;
    let mimov = String.fromCharCode(106,95,51,56,95,109,101,109,110,114,0);
    let zoomP = 2.0;
    let updatesB = false;
    let delegate_ns = 4.0;
    let selectg = String.fromCharCode(105,95,57,52,95,104,97,110,100,108,101,115,0);
    let projectN = String.fromCharCode(112,95,52,52,95,104,105,116,0);
    let philippinesj = String.fromCharCode(120,95,54,56,95,98,111,97,116,0);
    let anytimeN: Map<any, any> = new Map([[String.fromCharCode(105,95,55,56,95,115,111,102,97,0),String.fromCharCode(112,111,115,116,97,108,95,105,95,56,54,0)], [String.fromCharCode(105,95,48,95,111,118,101,114,104,101,97,100,0),String.fromCharCode(116,95,50,49,95,117,116,105,108,115,0)], [String.fromCharCode(98,95,56,56,95,98,117,116,116,101,114,119,111,114,116,104,0),String.fromCharCode(109,115,109,112,101,103,100,97,116,97,95,56,95,51,0)]]);
    let middlewareM = String.fromCharCode(112,95,49,49,95,109,111,100,105,102,105,99,97,116,105,111,110,0);
    let helperc: Map<any, any> = new Map([[String.fromCharCode(105,110,115,116,97,108,108,95,97,95,57,51,0),false ], [String.fromCharCode(116,101,109,112,95,112,95,55,51,0),true ], [String.fromCharCode(101,95,53,49,95,97,116,114,97,99,112,108,117,115,0),true ]]);
    let filledL = String.fromCharCode(117,95,56,50,95,100,101,99,111,109,112,111,115,101,105,0);
    let topicM = true;
    let sortC = 4.0;
      zoomP -= parseFloat(`${projectN.length}`);

    if (!route) return;

      updatesB = mimov.length == projectN.length;
    if (Platform.OS === "android") {

      middlewareM += `${parseInt(`${zoomP}`) - 2}`;
      const screenWidthInPixel = Dimensions.get("screen").width * scale;

       let traminif: Map<any, any> = new Map([[String.fromCharCode(112,111,112,117,108,97,114,95,120,95,57,57,0),528], [String.fromCharCode(111,95,55,54,95,101,112,111,99,104,0),776]]);
       let controls5 = false;
      if ((traminif.size / 5) < 3 || traminif.size < 5) {
         controls5 = ((traminif.size ^ (controls5 ? 84 : traminif.size)) <= 84);
      }
      while (1 > (2 & traminif.size) || 2 > traminif.size) {
         traminif.set(`${controls5}`, ((controls5 ? 5 : 2) | traminif.size));
         break;
      }
         traminif.set(`${controls5}`, traminif.size);
      let backz = controls5 ? !controls5 : controls5;
      do {
         controls5 = traminif.size >= 64 || controls5;
         if (backz) {
            break;
         }
      } while ((traminif.size > 4 && 4 > (4 << (Math.min(5, Math.abs(traminif.size))))) && backz);
      if (!controls5) {
         controls5 = (13 == ((controls5 ? 13 : traminif.size) ^ traminif.size));
      }
         traminif.set(`${controls5}`, ((controls5 ? 1 : 2) | traminif.size));
      delegate_ns -= parseFloat(`${traminif.size}`);
      

      middlewareM = "2";
      const screenHeightInPixel = Dimensions.get("screen").height * scale;

   let sideK = mimov.length <= 5976433;
   do {
      mimov = `${((updatesB ? 4 : 3))}`;
      if (sideK) {
         break;
      }
   } while ((middlewareM.length <= 5) && sideK);
      

      googleS *= middlewareM.length;
      const statusBarHeightInPixel = (StatusBar.currentHeight ?? 0) * scale;

   while (!updatesB || (1.61 * googleS) > 5.2) {
      googleS += anytimeN.size - 3;
      break;
   }
      

   let castingy = 4959828 >= anytimeN.size;
   do {
       let orange9 = true;
       let mbnativeO: Map<any, any> = new Map([[String.fromCharCode(115,116,114,110,115,116,114,95,110,95,51,53,0),String.fromCharCode(97,95,56,48,95,99,117,116,0)], [String.fromCharCode(100,101,97,108,108,111,99,97,116,105,111,110,95,115,95,51,49,0),String.fromCharCode(115,119,97,112,112,97,98,108,101,95,107,95,51,48,0)], [String.fromCharCode(122,95,48,95,112,117,114,103,101,0),String.fromCharCode(116,104,117,110,107,95,112,95,55,53,0)]]);
       let matchY = String.fromCharCode(103,95,57,48,95,115,101,114,118,101,114,115,0);
       let bellS = String.fromCharCode(117,95,56,52,95,100,101,110,111,105,115,101,114,0);
          let rewardvideoU = true;
          let frame_4st = String.fromCharCode(112,95,52,51,95,118,112,108,97,121,101,114,0);
         matchY = `${(frame_4st == String.fromCharCode(72,0) ? (rewardvideoU ? 3 : 4) : frame_4st.length)}`;
      while (mbnativeO.size > matchY.length) {
         matchY += `${mbnativeO.size}`;
         break;
      }
          let libcrashsdkz = 1.0;
          let target8: Map<any, any> = new Map([[String.fromCharCode(100,100,99,116,95,55,95,52,52,0),246], [String.fromCharCode(103,95,56,53,95,112,111,115,116,102,105,108,116,101,114,0),758]]);
         bellS = `${bellS.length % (Math.max(5, parseInt(`${libcrashsdkz}`)))}`;
         libcrashsdkz /= Math.max(5, parseFloat(`${target8.size << (Math.min(Math.abs(2), 3))}`));
         target8 = new Map([[`${target8.size}`, target8.size & 3]]);
         matchY = `${(1 >> (Math.min(1, Math.abs((orange9 ? 4 : 1)))))}`;
         mbnativeO.set(bellS, ((orange9 ? 2 : 5)));
      anytimeN.set(`${updatesB}`, 1 * mbnativeO.size);
      if (castingy) {
         break;
      }
   } while (castingy && (1 == (4 >> (Math.min(4, Math.abs(anytimeN.size))))));
      const navbarHeightInPixel =
        (navbarHeight != 0 ? navbarHeight - 1 : 0) * scale;
      

       let const_u7a = 1;
         const_u7a &= 1 + const_u7a;
         const_u7a *= 2 >> (Math.min(3, Math.abs(const_u7a)));
         const_u7a /= Math.max(1, const_u7a & const_u7a);
      delegate_ns -= parseFloat(`${1}`);

      setSystemNavHeight(await getNavigationBarHeight());

      zoomP *= parseFloat(`${selectg.length + 1}`);
      

       let mbsplash9 = String.fromCharCode(112,97,115,115,95,97,95,55,0);
       let appsc = String.fromCharCode(115,116,105,99,107,101,114,112,97,99,107,95,120,95,54,55,0);
      while (appsc.length < mbsplash9.length) {
          let zhengpianf: Array<any> = [886, 954, 939];
          let trophyx = String.fromCharCode(108,105,102,101,95,112,95,51,53,0);
         mbsplash9 += `${zhengpianf.length}`;
         zhengpianf = [1];
         trophyx += `${(String.fromCharCode(105,0) == trophyx ? trophyx.length : trophyx.length)}`;
         break;
      }
         appsc = `${mbsplash9.length << (Math.min(appsc.length, 3))}`;
         mbsplash9 = `${appsc.length}`;
      while (1 > appsc.length) {
          let schedulej = 1.0;
          let q_managerG = true;
          let mbridged = true;
         appsc += `${(String.fromCharCode(108,0) == mbsplash9 ? mbsplash9.length : appsc.length)}`;
         schedulej += parseFloat(`${1}`);
         q_managerG = !mbridged;
         break;
      }
      while (1 >= mbsplash9.length) {
         mbsplash9 = `${3 | mbsplash9.length}`;
         break;
      }
         appsc += `${mbsplash9.length}`;
      zoomP /= Math.max(1, parseFloat(`${parseInt(`${delegate_ns}`) << (Math.min(3, Math.abs(1)))}`));

      const adsTopInPixel =
        screenHeightInPixel -
        statusBarHeightInPixel -
        navbarHeightInPixel -
        systemNavHeight;

   while (updatesB) {
      selectg = `${(mimov == String.fromCharCode(79,0) ? mimov.length : (updatesB ? 3 : 2))}`;
      break;
   }
      

       let fileC = true;
          let windC: Array<any> = [791, 76, 600];
         fileC = !fileC && windC.length >= 97;
      for (let f = 0; f < 2; f++) {
          let long_ykv = 1.0;
          let logoA = String.fromCharCode(117,95,53,54,95,103,114,97,100,105,101,110,116,115,0);
          let animation3 = String.fromCharCode(97,95,57,51,95,112,114,111,102,105,108,105,110,103,0);
          let memberL = 0.0;
          let league5 = String.fromCharCode(97,117,100,105,111,99,111,110,118,101,114,116,95,110,95,55,48,0);
         fileC = league5.startsWith(`${memberL}`);
         long_ykv *= parseFloat(`${3 % (Math.max(6, animation3.length))}`);
         logoA = "2";
         animation3 = `${logoA.length / 3}`;
         memberL -= parseFloat(`${animation3.length * 1}`);
         league5 = `${(logoA == String.fromCharCode(111,0) ? parseInt(`${long_ykv}`) : logoA.length)}`;
      }
       let reactnativejs4 = String.fromCharCode(113,116,114,108,101,95,51,95,55,0);
      middlewareM += `${middlewareM.length & 1}`;

      let huaweiOffset = 0;

      delegate_ns /= Math.max(parseFloat(`${parseInt(`${zoomP}`) + parseInt(`${delegate_ns}`)}`), 4);

      

      delegate_ns -= parseFloat(`${parseInt(`${googleS}`) & 2}`);
      

   if (middlewareM.includes(`${delegate_ns}`)) {
      middlewareM += `${2 * projectN.length}`;
   }
      

   for (let z = 0; z < 3; z++) {
       let userz = true;
       let traminiN: Map<any, any> = new Map([[String.fromCharCode(100,101,99,108,97,114,101,95,101,95,53,51,0),842], [String.fromCharCode(106,95,55,53,95,115,104,105,109,0),405]]);
      if (!userz) {
         userz = !userz || traminiN.size <= 89;
      }
      while (1 > (1 ^ traminiN.size) || !userz) {
          let remindere: Array<any> = [479, 490, 217];
          let hookc = false;
          let update_2qz = 4.0;
          let transfern = 4.0;
          let hover0 = String.fromCharCode(104,118,99,99,95,118,95,55,50,0);
         traminiN.set(`${hookc}`, 3);
         remindere = [hover0.length];
         update_2qz -= parseFloat(`${hover0.length}`);
         transfern *= 1 ^ parseInt(`${transfern}`);
         break;
      }
      while (1 > (traminiN.size & 3)) {
          let traminis = 0;
          let send4 = String.fromCharCode(97,117,103,109,101,110,116,95,100,95,50,51,0);
          let combinedj = 0;
          let launcherL = String.fromCharCode(106,95,57,57,95,97,118,99,105,0);
          let customs = 5;
         userz = !userz;
         traminis |= customs;
         send4 = "1";
         combinedj *= customs % 3;
         launcherL += "2";
         break;
      }
      if (4 > traminiN.size) {
         userz = !userz;
      }
          let detailsY = String.fromCharCode(98,117,98,98,108,101,115,95,116,95,50,53,0);
         userz = detailsY.length > 67;
      let live8 = userz ? !userz : userz;
      do {
          let goalt = String.fromCharCode(109,95,49,50,95,118,111,119,101,108,0);
          let eventt = true;
         userz = (95 < (goalt.length - (!userz ? 95 : goalt.length)));
         eventt = (!eventt ? eventt : !eventt);
         if (live8) {
            break;
         }
      } while (live8 && (!userz));
      googleS /= Math.max(3, parseInt(`${delegate_ns}`) * 2);
   }
      

   if (updatesB || 5.80 >= (delegate_ns * 3.80)) {
      delegate_ns -= parseFloat(`${middlewareM.length}`);
   }

      

       let taiwann = String.fromCharCode(100,111,116,115,95,109,95,56,50,0);
       let kuaishoub = String.fromCharCode(99,111,110,102,105,103,117,114,97,116,105,111,110,95,56,95,50,55,0);
       let halfN = String.fromCharCode(113,95,53,53,95,103,95,53,55,0);
      let matchi = String.fromCharCode(57,54,98,98,108,52,95,56,120,0) == halfN;
      do {
         halfN += "1";
         if (matchi) {
            break;
         }
      } while ((taiwann == String.fromCharCode(82,0)) && matchi);
          let containerH = String.fromCharCode(97,100,106,117,115,116,109,101,110,116,115,95,57,95,49,48,48,0);
         taiwann = `${halfN.length}`;
         containerH = "1";
      if (taiwann == String.fromCharCode(79,0) || halfN == String.fromCharCode(77,0)) {
         taiwann += "3";
      }
         halfN += `${taiwann.length + kuaishoub.length}`;
         taiwann += `${3 << (Math.min(4, taiwann.length))}`;
          let indexL = String.fromCharCode(100,105,115,116,114,105,98,117,116,101,95,100,95,54,57,0);
          let time_z69 = 3;
          let commonk = String.fromCharCode(108,117,114,97,108,105,122,97,116,105,111,110,95,98,95,57,52,0);
         taiwann = "1";
         indexL += `${indexL.length}`;
         time_z69 += (commonk == String.fromCharCode(81,0) ? time_z69 : commonk.length);
         kuaishoub += `${kuaishoub.length}`;
          let yellowo = String.fromCharCode(108,95,57,54,95,97,118,103,0);
         kuaishoub = `${kuaishoub.length}`;
         yellowo += `${3 >> (Math.min(4, yellowo.length))}`;
         kuaishoub = `${kuaishoub.length}`;
      middlewareM = "3";
      

       let readv = String.fromCharCode(114,95,51,95,109,101,109,122,101,114,111,0);
       let register_oy = String.fromCharCode(97,100,106,117,115,116,95,54,95,50,48,0);
         readv += `${readv.length}`;
      let entryC = register_oy == String.fromCharCode(56,121,99,0);
      do {
         register_oy += `${(String.fromCharCode(117,0) == register_oy ? readv.length : register_oy.length)}`;
         if (entryC) {
            break;
         }
      } while (entryC && (readv.startsWith(register_oy)));
         readv += `${1 + register_oy.length}`;
         register_oy = `${1 / (Math.max(5, readv.length))}`;
      while (readv != String.fromCharCode(107,0) && register_oy != String.fromCharCode(115,0)) {
         readv += `${register_oy.length / (Math.max(10, readv.length))}`;
         break;
      }
         register_oy += `${1 | register_oy.length}`;
      anytimeN = new Map([[selectg, 2]]);

      let deviceName = await DeviceInfo.getDeviceName();

      updatesB = (philippinesj.length + anytimeN.size) > 9;
      if (deviceBrand === "HUAWEI" && /p\d+/i.test(deviceName)) {

   let o_countm = updatesB ? !updatesB : updatesB;
   do {
      updatesB = delegate_ns <= parseFloat(`${middlewareM.length}`);
      if (o_countm) {
         break;
      }
   } while (o_countm && (!updatesB));
        

      mimov += `${1 - parseInt(`${zoomP}`)}`;
        let deviceHeight = Dimensions.get("screen").height;

   let tumbnailz = helperc.size <= 7092813;
   do {
      helperc = new Map([[`${googleS}`, parseInt(`${googleS}`) % (Math.max(philippinesj.length, 1))]]);
      if (tumbnailz) {
         break;
      }
   } while ((3 >= helperc.size) && tumbnailz);
        let windowHeight = Dimensions.get("window").height;

      anytimeN = new Map([[middlewareM, projectN.length & 2]]);
        let sH = StatusBar.currentHeight || 0;

       let pangleI: Array<any> = [181, 166];
       let selectionM: Map<any, any> = new Map([[String.fromCharCode(119,95,55,56,95,111,98,106,101,99,116,115,0),String.fromCharCode(112,99,98,105,110,102,111,95,116,95,52,53,0)], [String.fromCharCode(113,95,54,95,100,101,110,111,114,109,97,108,0),String.fromCharCode(110,95,48,95,115,108,105,99,101,99,111,110,116,101,120,116,0)], [String.fromCharCode(117,95,57,51,95,105,110,110,100,101,114,0),String.fromCharCode(116,114,97,118,101,114,115,97,108,95,50,95,55,52,0)]]);
          let zoomh: Map<any, any> = new Map([[String.fromCharCode(97,95,50,56,95,101,97,103,97,105,110,0),288], [String.fromCharCode(100,95,52,95,115,111,110,101,119,99,111,110,110,0),578]]);
          let s_titleW = 2.0;
          let suggestion9 = String.fromCharCode(112,95,57,53,95,115,117,98,120,0);
         selectionM = new Map([[`${zoomh.size}`, selectionM.size]]);
         zoomh.set(`${s_titleW}`, parseInt(`${s_titleW}`) ^ suggestion9.length);
         suggestion9 += `${suggestion9.length % 1}`;
          let stationsk = false;
         selectionM.set(`${stationsk}`, ((stationsk ? 1 : 4) >> (Math.min(pangleI.length, 5))));
      filledL += `${helperc.size}`;
        let bottomNavBarHeight = deviceHeight - windowHeight - sH;

       let crownv = String.fromCharCode(113,95,54,57,95,105,109,112,108,105,99,105,116,0);
         crownv += `${1 * crownv.length}`;
      for (let s = 0; s < 2; s++) {
          let middlem: Map<any, any> = new Map([[String.fromCharCode(105,95,48,95,100,101,99,108,97,114,101,0),988], [String.fromCharCode(110,117,109,101,114,105,99,95,57,95,55,52,0),711], [String.fromCharCode(99,95,49,53,95,118,112,114,105,110,116,102,0),400]]);
          let q_viewV = String.fromCharCode(103,101,110,99,98,95,122,95,55,56,0);
          let pointw = String.fromCharCode(99,95,52,48,95,116,114,97,110,115,112,111,115,101,100,0);
          let crowns = false;
          let layoutt = String.fromCharCode(115,95,49,53,95,116,105,109,101,100,0);
         crownv = `${((crowns ? 3 : 2) ^ 2)}`;
         middlem = new Map([[`${middlem.size}`, q_viewV.length - 3]]);
         q_viewV += `${q_viewV.length}`;
         pointw += `${middlem.size + 3}`;
         crowns = 63 > pointw.length;
         layoutt = `${pointw.length + 2}`;
      }
      for (let f = 0; f < 2; f++) {
         crownv = `${(crownv == String.fromCharCode(70,0) ? crownv.length : crownv.length)}`;
      }
      helperc.set(projectN, filledL.length - projectN.length);
        if (bottomNavBarHeight > 0) {

      projectN += `${parseInt(`${zoomP}`)}`;
          huaweiOffset = -95;
        } else {

   while (googleS > 3.67) {
      anytimeN = new Map([[selectg, (String.fromCharCode(98,0) == middlewareM ? middlewareM.length : selectg.length)]]);
      break;
   }
          huaweiOffset = 75;

   while (filledL != String.fromCharCode(115,0)) {
      middlewareM += `${mimov.length - 1}`;
      break;
   }
        }
      }


      const includesKeywords = ['flip', 'fold', 'mate x3', 'mate xs'].some(keyword => deviceName.includes(keyword));

      anytimeN = new Map([[`${anytimeN.size}`, (selectg == String.fromCharCode(76,0) ? selectg.length : anytimeN.size)]]);

      let tabletOffset = 0;

      delegate_ns *= parseFloat(`${3}`);
      if (DeviceInfo.isTablet() || includesKeywords) {

      mimov = `${anytimeN.size - mimov.length}`;
        let sH = StatusBar.currentHeight || 0;

   for (let g = 0; g < 3; g++) {
      updatesB = topicM;
   }
        tabletOffset = 60

       let package_eh: Array<any> = [181, 678];
       let package_g71 = 4.0;
         package_g71 += parseFloat(`${parseInt(`${package_g71}`) >> (Math.min(package_eh.length, 2))}`);
         package_g71 += parseFloat(`${package_eh.length}`);
      while (package_eh.includes(package_g71)) {
         package_eh = [2 & package_eh.length];
         break;
      }
          let liveW = String.fromCharCode(113,95,55,54,95,99,111,110,102,105,103,117,114,97,116,105,111,110,0);
         package_eh = [liveW.length & parseInt(`${package_g71}`)];
       let greyj = String.fromCharCode(108,95,54,95,116,100,108,116,0);
       let windf = String.fromCharCode(99,95,51,51,95,111,109,112,108,105,99,97,116,105,111,110,0);
      helperc = new Map([[`${anytimeN.size}`, philippinesj.length]]);
      }

      let x, y, width, height;

       let selll: Array<any> = [979, 433];
      while ((selll.length + 4) > 2) {
         selll = [selll.length % (Math.max(selll.length, 6))];
         break;
      }
      if (1 >= (2 | selll.length) && (selll.length | 2) >= 3) {
          let const_5lY = String.fromCharCode(100,101,105,110,116,101,114,108,101,97,118,101,100,95,120,95,49,50,0);
          let comment8: Map<any, any> = new Map([[String.fromCharCode(97,117,116,111,115,99,114,111,108,108,105,110,103,95,100,95,50,54,0),809], [String.fromCharCode(117,95,54,95,122,114,101,111,114,100,101,114,0),662]]);
          let foregroundo = String.fromCharCode(109,95,50,48,95,99,111,110,110,101,99,116,0);
          let agreement2 = String.fromCharCode(115,95,54,55,95,105,110,111,100,101,0);
          let ticky = 3.0;
         selll.push(agreement2.length);
         const_5lY = `${const_5lY.length * foregroundo.length}`;
         comment8 = new Map([[foregroundo, (const_5lY == String.fromCharCode(119,0) ? const_5lY.length : foregroundo.length)]]);
         agreement2 += `${2 / (Math.max(5, parseInt(`${ticky}`)))}`;
         ticky += 2;
      }
      while (1 == (selll.length | selll.length) || 1 == (selll.length | selll.length)) {
         selll = [1];
         break;
      }
      mimov += `${selll.length}`;
      x = 0;

   if (!projectN.endsWith(`${topicM}`)) {
       let brightnessJ = String.fromCharCode(114,116,99,115,116,97,116,115,95,101,95,53,51,0);
       let countryG = String.fromCharCode(99,111,110,99,114,101,116,101,95,49,95,57,51,0);
       let ping4 = String.fromCharCode(109,111,118,116,101,120,116,115,117,98,95,112,95,51,51,0);
         brightnessJ += `${brightnessJ.length}`;
      let mbridgeO = countryG == String.fromCharCode(117,98,119,110,0);
      do {
         countryG = "2";
         if (mbridgeO) {
            break;
         }
      } while (mbridgeO && (countryG.length < 3));
         countryG += `${brightnessJ.length}`;
      while (countryG.length <= ping4.length) {
          let traminiM = String.fromCharCode(115,97,109,101,95,104,95,53,49,0);
          let rewardvideop: Map<any, any> = new Map([[String.fromCharCode(116,95,50,54,95,116,104,105,114,116,121,0),true ], [String.fromCharCode(122,95,54,50,95,116,101,115,116,98,105,116,0),false ], [String.fromCharCode(114,95,53,51,95,100,97,121,0),false ]]);
          let downloadz: Map<any, any> = new Map([[String.fromCharCode(105,95,49,48,48,95,101,120,101,99,117,116,101,0),696], [String.fromCharCode(109,95,52,49,95,100,101,108,101,116,105,111,110,0),674], [String.fromCharCode(110,95,57,57,95,100,101,115,99,114,105,112,116,111,114,115,0),97]]);
          let mutedn = 0.0;
          let profilee = 1.0;
         countryG = `${3 | parseInt(`${profilee}`)}`;
         traminiM = "2";
         rewardvideop.set(traminiM, (traminiM == String.fromCharCode(81,0) ? downloadz.size : traminiM.length));
         downloadz = new Map([[traminiM, parseInt(`${mutedn}`) * traminiM.length]]);
         mutedn += parseFloat(`${traminiM.length}`);
         profilee /= Math.max(3, parseInt(`${mutedn}`));
         break;
      }
      if (ping4.length > 5) {
         brightnessJ = `${(String.fromCharCode(108,0) == brightnessJ ? brightnessJ.length : ping4.length)}`;
      }
         brightnessJ += `${(ping4 == String.fromCharCode(88,0) ? brightnessJ.length : ping4.length)}`;
          let rewind1 = String.fromCharCode(117,110,114,101,99,111,103,95,55,95,49,51,0);
         countryG = `${countryG.length}`;
         rewind1 += `${2 | rewind1.length}`;
          let moviesD = 2;
          let minio = 3.0;
          let toponA: Map<any, any> = new Map([[String.fromCharCode(120,95,56,54,0),142], [String.fromCharCode(107,95,55,95,108,97,117,110,99,104,0),43], [String.fromCharCode(99,111,110,102,105,103,117,114,101,95,53,95,56,50,0),207]]);
         brightnessJ += "1";
         moviesD |= 1 * moviesD;
         minio /= Math.max(parseFloat(`${parseInt(`${minio}`) >> (Math.min(Math.abs(3), 4))}`), 5);
         toponA.set(`${moviesD}`, 2);
      while (countryG.includes(brightnessJ)) {
         countryG = `${countryG.length % (Math.max(2, 9))}`;
         break;
      }
      projectN += `${filledL.length * countryG.length}`;
   }
      let bannerHeightOnScreen =
        adsTopInPixel - TOPON_BANNER_HEIGHT * scale + huaweiOffset + tabletOffset;

   for (let z = 0; z < 3; z++) {
      filledL = `${filledL.length + helperc.size}`;
   }
      if (pageNoNavbar.includes(route)) {

   while (5 >= anytimeN.size) {
      helperc = new Map([[`${googleS}`, 1]]);
      break;
   }
        bannerHeightOnScreen += navbarHeightInPixel;
        
        
        
      }

      y = bannerHeightOnScreen;

      googleS -= (String.fromCharCode(57,0) == middlewareM ? middlewareM.length : parseInt(`${sortC}`));
      width = screenWidthInPixel;

   if (!updatesB) {
       let switch_gpf = false;
       let whiten = String.fromCharCode(117,117,105,100,95,55,95,53,54,0);
       let interstitialz: Array<any> = [268, 238];
       let gift3 = String.fromCharCode(114,101,102,101,114,101,110,99,101,100,95,106,95,49,0);
       let progress8 = String.fromCharCode(99,114,111,112,112,101,100,95,101,95,56,56,0);
       let animationR = String.fromCharCode(102,95,49,48,95,115,101,114,105,97,108,105,115,101,100,0);
       let gmailF = String.fromCharCode(99,95,56,55,95,115,112,97,114,107,115,0);
          let episodek = false;
         animationR = `${(whiten.length - (episodek ? 3 : 4))}`;
      while (!progress8.startsWith(`${interstitialz.length}`)) {
         interstitialz.push(3);
         break;
      }
      if (gift3.length == 3) {
         gift3 += `${animationR.length & 3}`;
      }
         gmailF = `${(whiten == String.fromCharCode(89,0) ? (switch_gpf ? 3 : 4) : whiten.length)}`;
         switch_gpf = (interstitialz.length >> (Math.min(whiten.length, 2))) <= 37;
          let middlek = String.fromCharCode(97,95,50,57,95,117,110,105,110,116,101,114,112,114,101,116,101,100,0);
          let configurey: Array<any> = [700, 260, 281];
         interstitialz = [animationR.length];
         middlek = `${configurey.length - 1}`;
         configurey.push((String.fromCharCode(81,0) == middlek ? configurey.length : middlek.length));
         gift3 = "1";
      while (4 <= animationR.length) {
         interstitialz.push(3 >> (Math.min(2, animationR.length)));
         break;
      }
      while (whiten.length == 1) {
         progress8 += `${animationR.length - 2}`;
         break;
      }
      while (!animationR.endsWith(`${interstitialz.length}`)) {
         animationR += "2";
         break;
      }
      for (let s = 0; s < 1; s++) {
         whiten = `${whiten.length + 1}`;
      }
      if (4 <= (animationR.length & interstitialz.length)) {
         animationR += `${animationR.length ^ gmailF.length}`;
      }
         interstitialz = [(String.fromCharCode(50,0) == animationR ? (switch_gpf ? 5 : 1) : animationR.length)];
         whiten = `${interstitialz.length}`;
      updatesB = projectN.length < 99;
   }
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
    
    
    hideAllBanner();
    
    if (settingState.appOrientation === "PORTRAIT") {
      if (!ttFast.isVip(userState.user)) {
        
        
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
