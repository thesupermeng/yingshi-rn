import React, { ReactNode, createContext, useEffect, useState } from "react";
import {
  ATRNSDK,
  ATRewardedVideoRNSDK,
  ATInterstitialRNSDK,
  ATBannerRNSDK,
} from "../../AnyThinkAds/wawa_tick";
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
} from "@utility/wawa_iconpointscore";
import { getNavigationBarHeight } from "react-native-android-navbar-height";
import { wawaIconsubssuccess } from "@redux/wawa_bgvipsport_spinner";
import { useAppSelector, useSelector } from "@hooks/wawa_root";
import { wawaBackground } from "@redux/reducers/wawa_comment";
import { screenModel } from "@type/wawa_rules";
import { wawaPhoneControls } from "@redux/reducers/wawa_umeng";
import { wawaLibglog } from "@models/wawa_refreshborderless_found";
interface wawaAwayShow {
  children: ReactNode;
}

export const AdsBannerContext = createContext<{
  setRoute: any;
  setNavbarHeight: any;
  reloadBanner: any;
  currentRoute: string | null;
}>({
  setRoute: () => {},
  setNavbarHeight: () => {},
  reloadBanner: () => {},
  currentRoute: "",
});

const pageWithNavbar = ["首页", "播单", "体育"];
const pageNoNavbar = ["播放", "PlaylistDetail", "体育详情", "电视台播放"];
const deviceBrand = DeviceInfo.getBrand();

const scale = Dimensions.get("screen").scale;

export const AdsBannerContextProvider = ({ children }: wawaAwayShow) => {
  const [route, setRoute] = useState<string | null>(null);
  const [navbarHeight, setNavbarHeight] = useState(0);
  const [systemNavHeight, setSystemNavHeight] = useState(0);
  const windowWidth2 = useWindowDimensions().width;
  
  const userState = useSelector<wawaPhoneControls>("userReducer");
  const settingState: wawaBackground = useAppSelector(
    ({ settingsReducer }: wawaIconsubssuccess) => settingsReducer
  );

  const screenState: screenModel = useAppSelector(
    ({ screenReducer }: wawaIconsubssuccess) => screenReducer
  );
  

  const reloadBanner = () => {
       let libreanimatedD = false;
    let apps1: Map<any, any> = new Map([[String.fromCharCode(110,95,55,49,95,114,101,108,97,116,105,118,101,108,121,0),72], [String.fromCharCode(115,101,108,101,99,116,95,108,95,52,51,0),23], [String.fromCharCode(117,110,115,116,111,112,112,97,98,108,101,95,101,95,53,49,0),472]]);
    let greenarrowupi = 0.0;
    let uimanagert: Map<any, any> = new Map([[String.fromCharCode(100,98,105,95,119,95,56,51,0),688], [String.fromCharCode(114,95,51,51,95,101,114,115,105,111,110,0),988], [String.fromCharCode(104,95,56,53,95,114,101,112,97,105,110,116,0),995]]);
    let gradlewJ = String.fromCharCode(102,95,51,50,95,97,114,114,97,121,0);
    let fullscreenmaxZ = 5.0;
    let predictionactive_ = String.fromCharCode(109,95,49,49,95,99,111,109,112,97,110,121,0);
       let inviteY = String.fromCharCode(115,111,105,115,100,105,115,99,111,110,110,101,99,116,105,110,103,95,111,95,54,49,0);
       let turnQ: Map<any, any> = new Map([[String.fromCharCode(111,95,57,53,95,97,108,116,105,118,101,99,0),478], [String.fromCharCode(110,109,109,105,110,116,114,105,110,95,105,95,54,56,0),640], [String.fromCharCode(108,105,98,112,111,115,116,112,114,111,99,95,112,95,53,48,0),210]]);
       let castr = false;
         inviteY = `${1 / (Math.max(4, turnQ.size))}`;
       let searchbarm = 2.0;
      let sportY = castr ? !castr : castr;
      do {
          let orangeuparroww: Array<any> = [195, 374, 527];
         castr = turnQ.size >= 60;
         orangeuparroww = [orangeuparroww.length];
         if (sportY) {
            break;
         }
      } while (sportY && (castr));
          let guidev: Array<any> = [675, 517];
          let root9 = String.fromCharCode(109,95,55,56,95,115,116,97,99,107,118,105,101,119,0);
         turnQ = new Map([[root9, root9.length * inviteY.length]]);
         guidev = [guidev.length];
       let backiconX = String.fromCharCode(120,95,54,48,95,101,115,101,110,100,0);
      for (let g = 0; g < 3; g++) {
         inviteY = `${turnQ.size}`;
      }
         turnQ = new Map([[`${turnQ.size}`, 2]]);
      if (castr) {
          let disconnected6 = 1;
          let memberZ = String.fromCharCode(122,95,49,55,95,105,110,118,101,114,116,0);
         backiconX += `${inviteY.length}`;
         disconnected6 -= disconnected6;
         memberZ = `${memberZ.length}`;
      }
       let inouttargetreds = 0;
       let submity = 0;
      predictionactive_ = "3";
   for (let n = 0; n < 1; n++) {
      gradlewJ = "3";
   }
   let philippinesZ = 9313533 <= apps1.size;
   do {
      apps1 = new Map([[`${apps1.size}`, parseInt(`${fullscreenmaxZ}`) / (Math.max(1, 1))]]);
      if (philippinesZ) {
         break;
      }
   } while (philippinesZ && (apps1.size == 5));
   while ((predictionactive_.length | uimanagert.size) >= 4 && (4 | predictionactive_.length) >= 5) {
       let footballfieldy = 3.0;
          let iconnewsshareQ = false;
          let iconlogoutP = true;
         footballfieldy /= Math.max(2, parseFloat(`${2 ^ parseInt(`${footballfieldy}`)}`));
         iconnewsshareQ = !iconlogoutP;
       let matchactiveC = String.fromCharCode(120,95,52,95,114,97,110,115,105,116,105,111,110,0);
         matchactiveC = "3";
      uimanagert.set(`${greenarrowupi}`, parseInt(`${fullscreenmaxZ}`));
      break;
   }
   for (let f = 0; f < 2; f++) {
       let reactnativeratingsa: Map<any, any> = new Map([[String.fromCharCode(115,95,53,53,95,103,97,116,105,110,103,0),686], [String.fromCharCode(98,95,53,52,95,102,105,110,100,97,115,111,99,0),345]]);
       let homeiconJ = 3.0;
       let analyticj = String.fromCharCode(118,101,114,121,95,103,95,50,53,0);
      while (5 >= (analyticj.length * parseInt(`${homeiconJ}`)) || (analyticj.length % 5) >= 1) {
         analyticj += `${reactnativeratingsa.size}`;
         break;
      }
      if (!analyticj.startsWith(`${homeiconJ}`)) {
         analyticj += `${reactnativeratingsa.size}`;
      }
          let lineg = String.fromCharCode(113,117,97,114,116,101,114,95,118,95,48,0);
          let sina0 = 4.0;
          let short_1v: Array<any> = [378, 185, 966];
         homeiconJ *= 2 ^ parseInt(`${homeiconJ}`);
         lineg = `${short_1v.length}`;
         sina0 /= Math.max(1, 1);
         short_1v = [short_1v.length & lineg.length];
      while ((2.29 * homeiconJ) == 4.20) {
         homeiconJ /= Math.max(1 >> (Math.min(4, Math.abs(parseInt(`${homeiconJ}`)))), 1);
         break;
      }
      while (analyticj.includes(`${reactnativeratingsa.size}`)) {
         analyticj += `${(analyticj == String.fromCharCode(103,0) ? parseInt(`${homeiconJ}`) : analyticj.length)}`;
         break;
      }
      predictionactive_ += `${parseInt(`${fullscreenmaxZ}`)}`;
   }
      greenarrowupi -= parseFloat(`${2 - parseInt(`${greenarrowupi}`)}`);
   let elementsg = apps1.size <= 8815842;
   do {
       let default_mcc = 0.0;
       let appsr: Array<any> = [208, 197];
      if (4 == (appsr.length ^ 4) || (4 + appsr.length) == 2) {
          let dangeru = String.fromCharCode(109,101,115,115,97,103,101,95,51,95,53,53,0);
          let greyM = 1.0;
          let white7 = false;
         default_mcc -= (parseFloat(`${(white7 ? 1 : 4) << (Math.min(dangeru.length, 2))}`));
         dangeru += "1";
         greyM += parseInt(`${greyM}`);
      }
      let clearh = appsr.length >= 9459487;
      do {
         appsr = [parseInt(`${default_mcc}`)];
         if (clearh) {
            break;
         }
      } while ((3.54 > (4.54 * default_mcc) && (default_mcc * parseFloat(`${appsr.length}`)) > 4.54) && clearh);
         appsr = [parseInt(`${default_mcc}`)];
         default_mcc += parseFloat(`${parseInt(`${default_mcc}`) | 2}`);
         default_mcc += parseFloat(`${parseInt(`${default_mcc}`) << (Math.min(appsr.length, 1))}`);
         appsr.push(parseInt(`${default_mcc}`));
      apps1 = new Map([[`${apps1.size}`, parseInt(`${fullscreenmaxZ}`) >> (Math.min(Math.abs(1), 2))]]);
      if (elementsg) {
         break;
      }
   } while (elementsg && ((apps1.size + 3) >= 1 && 3 >= (3 % (Math.max(4, apps1.size)))));

    console.log("reloadBanner");

      libreanimatedD = (parseInt(`${greenarrowupi}`) * apps1.size) > 51;
   while (3 == (gradlewJ.length & 1) || (gradlewJ.length & 1) == 3) {
      apps1.set(`${fullscreenmaxZ}`, 3);
      break;
   }
   let taiwand = fullscreenmaxZ >= 8464224.0;
   do {
       let libavfilterr: Map<any, any> = new Map([[String.fromCharCode(97,100,100,115,95,114,95,55,0),531], [String.fromCharCode(122,95,55,52,95,119,111,114,100,115,0),591]]);
       let filledL = true;
       let hongkongQ = String.fromCharCode(108,101,114,116,95,113,95,53,57,0);
       let analyticH = String.fromCharCode(114,118,100,97,116,97,95,51,95,56,54,0);
         hongkongQ += `${analyticH.length}`;
      let libavformatN = String.fromCharCode(105,117,114,100,109,111,54,57,106,0) == analyticH;
      do {
         analyticH += `${libavfilterr.size}`;
         if (libavformatN) {
            break;
         }
      } while ((!filledL && analyticH.length > 4) && libavformatN);
       let previewW = 5.0;
      if (!filledL) {
         filledL = !filledL;
      }
      for (let x = 0; x < 3; x++) {
         hongkongQ = `${parseInt(`${previewW}`) + 3}`;
      }
      fullscreenmaxZ /= Math.max(1, parseFloat(`${3}`));
      if (taiwand) {
         break;
      }
   } while ((4.53 == fullscreenmaxZ) && taiwand);
      fullscreenmaxZ /= Math.max(4, parseFloat(`${1 << (Math.min(4, predictionactive_.length))}`));
   let showlessQ = apps1.size >= 8491741;
   do {
      apps1 = new Map([[`${fullscreenmaxZ}`, (String.fromCharCode(119,0) == predictionactive_ ? parseInt(`${fullscreenmaxZ}`) : predictionactive_.length)]]);
      if (showlessQ) {
         break;
      }
   } while ((apps1.size >= 4 || 5 >= (4 | apps1.size)) && showlessQ);
      gradlewJ = `${(3 ^ (libreanimatedD ? 4 : 1))}`;
   let libyogaB = uimanagert.size >= 7847765;
   do {
      uimanagert = new Map([[`${uimanagert.size}`, ((libreanimatedD ? 2 : 2) % (Math.max(3, 4)))]]);
      if (libyogaB) {
         break;
      }
   } while (libyogaB && ((1.69 * greenarrowupi) <= 3.40));
    setTimeout(() => {

   let chatK = 5401512.0 <= fullscreenmaxZ;
   do {
      fullscreenmaxZ += parseFloat(`${parseInt(`${greenarrowupi}`) << (Math.min(Math.abs(3), 2))}`);
      if (chatK) {
         break;
      }
   } while (chatK && (3.31 <= fullscreenmaxZ && (fullscreenmaxZ / 3.31) <= 4.98));
   for (let i = 0; i < 3; i++) {
      apps1 = new Map([[`${fullscreenmaxZ}`, 2 | predictionactive_.length]]);
   }
       let flyerF = String.fromCharCode(107,109,115,103,114,97,98,95,54,95,57,50,0);
       let leakcheckerk = 4;
      let iconnotificationnewv = 6651458 <= leakcheckerk;
      do {
         leakcheckerk /= Math.max(5, flyerF.length | 3);
         if (iconnotificationnewv) {
            break;
         }
      } while ((5 == (leakcheckerk & 2)) && iconnotificationnewv);
      let zhuboe = flyerF.length <= 6359913;
      do {
          let frame_dnu: Map<any, any> = new Map([[String.fromCharCode(101,110,116,114,111,112,121,109,111,100,101,100,97,116,97,95,105,95,51,48,0),String.fromCharCode(111,95,49,48,48,95,121,105,101,108,100,0)], [String.fromCharCode(99,104,111,109,112,95,119,95,56,57,0),String.fromCharCode(103,95,51,55,95,98,117,99,107,101,116,115,0)], [String.fromCharCode(101,95,49,48,95,116,101,115,115,0),String.fromCharCode(113,117,97,108,105,102,121,95,54,95,54,50,0)]]);
         flyerF = `${flyerF.length + 2}`;
         frame_dnu.set(`${frame_dnu.size}`, frame_dnu.size | 1);
         if (zhuboe) {
            break;
         }
      } while (((flyerF.length >> (Math.min(Math.abs(4), 1))) > 3 || 1 > (flyerF.length >> (Math.min(Math.abs(4), 5)))) && zhuboe);
      if (2 >= (leakcheckerk >> (Math.min(flyerF.length, 4))) || 2 >= (leakcheckerk >> (Math.min(Math.abs(2), 2)))) {
         leakcheckerk -= 3 >> (Math.min(3, flyerF.length));
      }
      for (let t = 0; t < 1; t++) {
          let templateprocessor0 = 5.0;
          let cornershoot5 = true;
          let greytickb = String.fromCharCode(115,109,111,111,116,104,101,110,95,105,95,57,54,0);
          let backicond = String.fromCharCode(101,120,112,108,111,114,101,114,95,97,95,50,53,0);
          let classes0 = 0.0;
         leakcheckerk *= parseInt(`${templateprocessor0}`) % (Math.max(greytickb.length, 4));
         templateprocessor0 /= Math.max(((cornershoot5 ? 2 : 5)), 3);
         cornershoot5 = classes0 == 72.2;
         greytickb += `${1 - parseInt(`${classes0}`)}`;
         backicond += "3";
      }
         leakcheckerk *= 2 - flyerF.length;
      while (!flyerF.includes(`${leakcheckerk}`)) {
         leakcheckerk >>= Math.min(4, Math.abs((String.fromCharCode(69,0) == flyerF ? flyerF.length : leakcheckerk)));
         break;
      }
      fullscreenmaxZ -= parseFloat(`${3 - predictionactive_.length}`);
   let helper0 = libreanimatedD ? !libreanimatedD : libreanimatedD;
   do {
      libreanimatedD = predictionactive_.length == 42;
      if (helper0) {
         break;
      }
   } while ((5 == (apps1.size % (Math.max(4, 8))) && libreanimatedD) && helper0);
      gradlewJ += `${(3 << (Math.min(1, Math.abs((libreanimatedD ? 2 : 3)))))}`;
       let typingloadingg = 3;
       let componentsa = 4.0;
       let videobufferloadinga: Map<any, any> = new Map([[String.fromCharCode(110,95,53,95,112,114,97,103,109,97,0),String.fromCharCode(109,95,52,56,95,115,104,97,112,101,0)], [String.fromCharCode(112,114,101,115,101,110,99,101,115,95,114,95,52,49,0),String.fromCharCode(104,101,108,112,95,99,95,50,56,0)]]);
      for (let x = 0; x < 1; x++) {
         typingloadingg &= parseInt(`${componentsa}`);
      }
      for (let w = 0; w < 2; w++) {
         videobufferloadinga.set(`${componentsa}`, videobufferloadinga.size >> (Math.min(5, Math.abs(parseInt(`${componentsa}`)))));
      }
         componentsa /= Math.max(parseInt(`${componentsa}`), 2);
          let sinaG: Array<any> = [587, 953];
          let privatechatbgz: Array<any> = [963, 804, 371];
         typingloadingg /= Math.max(5, parseInt(`${componentsa}`));
         sinaG.push(2);
         privatechatbgz = [privatechatbgz.length << (Math.min(Math.abs(1), 4))];
         typingloadingg ^= typingloadingg;
      let twitterE = videobufferloadinga.size <= 9744334;
      do {
         videobufferloadinga.set(`${typingloadingg}`, typingloadingg / (Math.max(4, videobufferloadinga.size)));
         if (twitterE) {
            break;
         }
      } while (twitterE && (Array.from(videobufferloadinga.values()).includes(componentsa)));
         componentsa /= Math.max(videobufferloadinga.size + parseInt(`${componentsa}`), 1);
          let scrollviewB = 1.0;
          let downarrowe = String.fromCharCode(108,97,116,105,110,95,51,95,54,51,0);
         videobufferloadinga.set(`${scrollviewB}`, 1);
         scrollviewB /= Math.max(parseFloat(`${downarrowe.length & downarrowe.length}`), 1);
         componentsa -= videobufferloadinga.size;
      uimanagert = new Map([[`${typingloadingg}`, 3 ^ gradlewJ.length]]);
   let libavformat3 = 6113106.0 <= fullscreenmaxZ;
   do {
      fullscreenmaxZ -= (parseFloat(`${String.fromCharCode(85,0) == gradlewJ ? apps1.size : gradlewJ.length}`));
      if (libavformat3) {
         break;
      }
   } while ((2.16 <= (5 + greenarrowupi)) && libavformat3);
      showBannerInPosition().then();
    }, 100);
  };

  const initBannerAdListener = () => {
       let privacy1: Map<any, any> = new Map([[String.fromCharCode(99,95,57,48,95,104,97,108,100,99,108,117,116,115,114,99,0),526], [String.fromCharCode(99,97,116,101,103,111,114,121,95,48,95,49,52,0),266], [String.fromCharCode(98,95,54,55,0),516]]);
    let background2 = String.fromCharCode(122,101,116,97,95,104,95,56,54,0);
    let predictionbuttonf = String.fromCharCode(109,95,49,53,95,100,101,115,116,114,117,99,116,105,118,101,0);
    let renew0 = String.fromCharCode(115,97,118,101,112,111,105,110,116,95,52,95,55,0);
    let trashA = 5.0;
    let mbridget = 5;
    let emojiheartH = String.fromCharCode(119,95,57,53,95,112,111,108,105,99,121,0);
    let megaphoneh = 1.0;
    let updatesL = String.fromCharCode(110,95,49,54,95,105,110,115,101,99,0);
    let philippinesM: Array<any> = [872, 432, 299];
    let championV = 0.0;
    let screenn: Map<any, any> = new Map([[String.fromCharCode(98,108,111,98,115,95,118,95,55,0),false ], [String.fromCharCode(101,100,105,116,105,110,103,95,53,95,50,52,0),false ]]);
    let shootyesgoalJ = 2.0;
       let handlerW = 0.0;
       let nalytics5 = 5.0;
       let dangerL = 2.0;
       let notificationfilledo = 5.0;
         nalytics5 -= parseFloat(`${2 + parseInt(`${nalytics5}`)}`);
          let matches7 = 3.0;
          let launchI = String.fromCharCode(111,98,115,101,114,118,105,110,103,95,110,95,57,56,0);
          let annert = String.fromCharCode(122,95,49,95,105,110,116,101,103,101,114,105,102,121,0);
         notificationfilledo *= parseInt(`${dangerL}`) % (Math.max(annert.length, 8));
         matches7 += parseFloat(`${launchI.length}`);
         launchI += `${(String.fromCharCode(66,0) == launchI ? parseInt(`${matches7}`) : launchI.length)}`;
         annert += `${launchI.length % 3}`;
       let showmorej = String.fromCharCode(103,95,54,57,95,115,121,110,116,104,101,115,105,122,101,0);
         showmorej = `${parseInt(`${notificationfilledo}`) / (Math.max(showmorej.length, 9))}`;
         dangerL *= (showmorej == String.fromCharCode(97,0) ? parseInt(`${handlerW}`) : showmorej.length);
      mbridget /= Math.max(2, updatesL.length);

    ATBannerRNSDK.setAdListener(ATBannerRNSDK.onBannerLoaded, (event) => {

   let liveshareK = String.fromCharCode(56,111,117,100,100,51,114,48,54,98,0) == emojiheartH;
   do {
       let saveD = 2;
       let baidui = 4;
       let iconmorei: Array<any> = [380, 879];
       let suggestionv = 5;
       let privacyG = 4;
         baidui <<= Math.min(Math.abs(saveD * 1), 3);
      while (1 > (suggestionv / (Math.max(2, 3)))) {
         baidui <<= Math.min(5, Math.abs(baidui));
         break;
      }
          let blackr: Map<any, any> = new Map([[String.fromCharCode(103,95,57,54,95,114,112,122,97,0),false ], [String.fromCharCode(120,109,117,108,116,95,117,95,56,52,0),false ]]);
          let nodeW = String.fromCharCode(115,99,97,108,105,110,103,95,113,95,51,0);
          let hoverK = String.fromCharCode(97,95,53,53,95,114,101,97,100,121,0);
         suggestionv |= blackr.size >> (Math.min(3, Math.abs(privacyG)));
         blackr = new Map([[hoverK, hoverK.length - nodeW.length]]);
         nodeW = "2";
      for (let p = 0; p < 3; p++) {
         iconmorei.push(suggestionv);
      }
      emojiheartH += `${1 % (Math.max(4, updatesL.length))}`;
      if (liveshareK) {
         break;
      }
   } while (liveshareK && (predictionbuttonf != String.fromCharCode(70,0)));
      console.log("ATBannerLoaded: " + event.placementId);
    });

   for (let i = 0; i < 3; i++) {
      renew0 = `${(emojiheartH == String.fromCharCode(86,0) ? mbridget : emojiheartH.length)}`;
   }

    let latestMsg = "";

      emojiheartH += "2";
    ATBannerRNSDK.setAdListener(ATBannerRNSDK.onBannerFail, (event) => {

   while (emojiheartH != String.fromCharCode(51,0)) {
       let inouttargetyellowL = String.fromCharCode(119,101,98,102,105,108,101,95,117,95,52,53,0);
          let emojiheart0 = true;
         inouttargetyellowL += `${(3 ^ (emojiheart0 ? 4 : 5))}`;
      let analyticsZ = 7160748 <= inouttargetyellowL.length;
      do {
         inouttargetyellowL += `${inouttargetyellowL.length % 2}`;
         if (analyticsZ) {
            break;
         }
      } while (analyticsZ && (inouttargetyellowL == inouttargetyellowL));
       let sendt = String.fromCharCode(99,111,100,101,98,111,111,107,115,95,111,95,53,56,0);
       let renderD = String.fromCharCode(110,95,49,55,95,112,108,105,115,116,0);
      predictionbuttonf = "1";
      break;
   }
      if (latestMsg != event.errorMsg) {

      updatesL += `${philippinesM.length >> (Math.min(Math.abs(2), 3))}`;
        latestMsg = event.errorMsg;

   let chinasamen = philippinesM.length <= 8890455;
   do {
      philippinesM = [emojiheartH.length];
      if (chinasamen) {
         break;
      }
   } while ((1 >= philippinesM.length) && chinasamen);
        console.warn(
          "ATBannerLoadFail: " +
            event.placementId +
            ", errorMsg: " +
            event.errorMsg
        );
      }
    });

   let buffers = 9296827.0 >= megaphoneh;
   do {
      megaphoneh /= Math.max(2, parseFloat(`${background2.length ^ 2}`));
      if (buffers) {
         break;
      }
   } while (buffers && (renew0.length > 4));

    ATBannerRNSDK.setAdListener(ATBannerRNSDK.onBannerShow, (event) => {

   let diceo = trashA >= 6569413.0;
   do {
       let edita = true;
       let iconarrowrightorangec: Map<any, any> = new Map([[String.fromCharCode(116,101,115,118,101,114,116,95,112,95,53,52,0),712], [String.fromCharCode(97,112,99,109,95,103,95,51,52,0),783], [String.fromCharCode(106,95,52,56,95,115,116,117,110,0),802]]);
      if (!edita || (2 + iconarrowrightorangec.size) <= 3) {
         edita = iconarrowrightorangec.size > 45;
      }
         iconarrowrightorangec.set(`${edita}`, 3);
          let trophyd: Map<any, any> = new Map([[String.fromCharCode(115,105,103,101,120,112,95,112,95,55,50,0),409], [String.fromCharCode(120,109,108,101,115,99,97,112,101,95,107,95,51,57,0),24], [String.fromCharCode(113,95,56,52,95,105,110,116,101,114,97,99,116,105,110,103,0),323]]);
          let canvasn = true;
          let iconuser5 = String.fromCharCode(97,112,115,95,106,95,53,0);
         iconarrowrightorangec.set(`${edita}`, 3 | iconarrowrightorangec.size);
         trophyd = new Map([[iconuser5, ((canvasn ? 5 : 1) + 1)]]);
         canvasn = iconuser5.length >= 89;
         iconarrowrightorangec.set(`${edita}`, 1);
      let smallorangemanL = 9802211 <= iconarrowrightorangec.size;
      do {
         iconarrowrightorangec.set(`${edita}`, 1);
         if (smallorangemanL) {
            break;
         }
      } while (smallorangemanL && (!edita));
      while ((iconarrowrightorangec.size ^ 4) >= 2 && iconarrowrightorangec.size >= 4) {
         iconarrowrightorangec = new Map([[`${iconarrowrightorangec.size}`, iconarrowrightorangec.size / 2]]);
         break;
      }
      trashA /= Math.max(background2.length % (Math.max(1, 9)), 3);
      if (diceo) {
         break;
      }
   } while (diceo && (4 <= (philippinesM.length / (Math.max(1, 4)))));
      

   while (1.36 < (championV / (Math.max(3.46, 2))) || (championV / 3.46) < 3.19) {
      championV *= parseFloat(`${2 << (Math.min(1, Math.abs(mbridget)))}`);
      break;
   }
      

       let static_n1 = 4.0;
       let valuesn: Map<any, any> = new Map([[String.fromCharCode(115,110,97,112,112,121,95,109,95,55,52,0),488], [String.fromCharCode(112,108,97,99,101,109,97,114,107,95,104,95,51,0),741]]);
         valuesn = new Map([[`${valuesn.size}`, parseInt(`${static_n1}`) ^ 1]]);
         valuesn.set(`${static_n1}`, valuesn.size);
      let neon6 = 5310123 <= valuesn.size;
      do {
         valuesn = new Map([[`${valuesn.size}`, 2 << (Math.min(2, Math.abs(parseInt(`${static_n1}`))))]]);
         if (neon6) {
            break;
         }
      } while (neon6 && (valuesn.get(`${static_n1}`) == null));
         valuesn = new Map([[`${valuesn.size}`, parseInt(`${static_n1}`)]]);
         static_n1 *= parseInt(`${static_n1}`);
      let incidentn = 9751770 >= valuesn.size;
      do {
          let liveL = String.fromCharCode(115,119,97,112,95,97,95,54,50,0);
          let livez: Array<any> = [String.fromCharCode(102,95,57,55,95,100,117,112,108,105,99,97,116,101,100,0), String.fromCharCode(99,95,55,49,95,102,116,118,109,108,97,115,116,110,111,100,101,0)];
          let moviesf: Array<any> = [711, 171];
         valuesn = new Map([[`${valuesn.size}`, moviesf.length]]);
         liveL = `${1 >> (Math.min(5, liveL.length))}`;
         livez = [2 << (Math.min(5, liveL.length))];
         moviesf = [(liveL == String.fromCharCode(51,0) ? liveL.length : livez.length)];
         if (incidentn) {
            break;
         }
      } while (incidentn && ((valuesn.size & 4) < 2 && (parseInt(`${static_n1}`) - valuesn.size) < 4));
      trashA /= Math.max(5, 3 ^ parseInt(`${megaphoneh}`));
      

       let libhermesq = String.fromCharCode(108,101,114,112,105,110,103,95,57,95,54,54,0);
       let componentsp = 1.0;
       let customL = String.fromCharCode(117,112,99,97,115,101,95,53,95,56,56,0);
         customL += `${libhermesq.length}`;
          let settings7: Array<any> = [972, 529];
          let chatroombackground3: Map<any, any> = new Map([[String.fromCharCode(109,97,120,107,101,121,115,105,122,101,95,57,95,57,54,0),250], [String.fromCharCode(106,115,101,112,95,110,95,53,57,0),24], [String.fromCharCode(111,103,103,95,48,95,49,56,0),456]]);
         componentsp += parseFloat(`${settings7.length + customL.length}`);
         settings7.push(chatroombackground3.size << (Math.min(Math.abs(3), 2)));
         chatroombackground3 = new Map([[`${chatroombackground3.size}`, chatroombackground3.size / (Math.max(chatroombackground3.size, 1))]]);
         componentsp /= Math.max(2, parseFloat(`${customL.length | 1}`));
         libhermesq += `${libhermesq.length - 2}`;
      if (4.5 == (componentsp / (Math.max(parseFloat(`${libhermesq.length}`), 8)))) {
          let homeplayer0 = 4;
          let airbnbstarselectedr: Array<any> = [806, 378];
          let playershirtz = String.fromCharCode(99,114,121,115,116,97,108,104,100,95,104,95,52,57,0);
          let pingl: Array<any> = [347, 972, 630];
          let refreshl = String.fromCharCode(113,95,50,52,95,101,104,105,103,104,0);
         componentsp /= Math.max((parseFloat(`${refreshl == String.fromCharCode(66,0) ? airbnbstarselectedr.length : refreshl.length}`)), 2);
         homeplayer0 |= homeplayer0 >> (Math.min(Math.abs(2), 1));
         airbnbstarselectedr = [2];
         playershirtz = `${playershirtz.length}`;
         pingl.push((playershirtz == String.fromCharCode(102,0) ? pingl.length : playershirtz.length));
      }
      while (1 <= libhermesq.length && customL != String.fromCharCode(57,0)) {
         customL = `${parseInt(`${componentsp}`)}`;
         break;
      }
         componentsp -= parseFloat(`${1}`);
         componentsp += parseFloat(`${customL.length + 3}`);
         customL = `${customL.length}`;
      philippinesM = [1];
      

   let larget = 6149670.0 <= trashA;
   do {
      trashA /= Math.max(3, renew0.length & 1);
      if (larget) {
         break;
      }
   } while (larget && (mbridget <= 2));
      

   let cornert = 6589598.0 <= trashA;
   do {
      trashA /= Math.max(3, 1);
      if (cornert) {
         break;
      }
   } while (cornert && (trashA == 5.2));
      

   while (renew0.startsWith(updatesL)) {
      renew0 += `${renew0.length + mbridget}`;
      break;
   }
      console.log("ATBannerShow: " + event.placementId);
    });

      updatesL = `${parseInt(`${championV}`) - 1}`;

    ATBannerRNSDK.setAdListener(
      ATBannerRNSDK.onBannerCloseButtonTapped,
      (event) => {

   while (!background2.startsWith(`${predictionbuttonf.length}`)) {
      predictionbuttonf += `${3 ^ philippinesM.length}`;
      break;
   }
        console.log(
          "ATBannerCloseButtonTapped: " +
            event.placementId +
            ", adCallbackInfo: " +
            event.adCallbackInfo
        );
      }
    );

   let downm = 5347579 <= background2.length;
   do {
       let subsy = 1.0;
         subsy -= parseFloat(`${parseInt(`${subsy}`)}`);
          let routern: Map<any, any> = new Map([[String.fromCharCode(99,95,56,49,95,115,101,97,116,0),766], [String.fromCharCode(97,110,110,117,108,97,114,95,50,95,51,0),54], [String.fromCharCode(112,114,101,115,115,101,115,95,57,95,55,53,0),135]]);
          let areaz = String.fromCharCode(101,95,56,57,95,114,101,113,117,105,117,114,101,115,0);
          let rncorew = true;
         subsy /= Math.max(parseFloat(`${areaz.length / (Math.max(1, 4))}`), 1);
         routern.set(`${rncorew}`, ((rncorew ? 4 : 4) ^ 2));
         areaz += `${routern.size * 3}`;
      while (3.86 <= (subsy * 2.92) && 5.72 <= (2.92 / (Math.max(10, subsy)))) {
         subsy /= Math.max(parseFloat(`${parseInt(`${subsy}`) - 1}`), 2);
         break;
      }
      background2 = `${(predictionbuttonf == String.fromCharCode(52,0) ? screenn.size : predictionbuttonf.length)}`;
      if (downm) {
         break;
      }
   } while (downm && ((parseFloat(`${background2.length}`) + championV) <= 4.54 || 2.3 <= (championV + 4.54)));

    ATBannerRNSDK.setAdListener(ATBannerRNSDK.onBannerClick, (event) => {

   if (emojiheartH.includes(`${background2.length}`)) {
      background2 += `${privacy1.size}`;
   }
      console.log(
        "ATBannerClick: " +
          event.placementId +
          ", adCallbackInfo: " +
          event.adCallbackInfo
      );
    });

   let faviconr = mbridget <= 8225852;
   do {
       let mapbufferb = String.fromCharCode(98,95,54,56,95,112,97,103,101,108,105,115,116,0);
       let libyogaU = 2;
       let traminiC: Map<any, any> = new Map([[String.fromCharCode(101,95,50,57,95,116,116,114,105,98,117,116,101,100,0),233], [String.fromCharCode(110,95,54,48,95,98,105,110,100,105,110,103,0),984]]);
      for (let d = 0; d < 2; d++) {
         libyogaU += (mapbufferb == String.fromCharCode(104,0) ? mapbufferb.length : libyogaU);
      }
          let splashD = String.fromCharCode(111,95,53,55,95,115,117,103,103,101,115,116,105,111,110,115,0);
          let details3: Array<any> = [908, 373];
         libyogaU -= splashD.length >> (Math.min(Math.abs(2), 3));
         splashD += `${details3.length ^ details3.length}`;
      while ((traminiC.size % 2) < 4) {
         mapbufferb = "1";
         break;
      }
      for (let s = 0; s < 3; s++) {
         mapbufferb += `${traminiC.size}`;
      }
      let buildK = libyogaU >= 6214618;
      do {
         libyogaU ^= traminiC.size;
         if (buildK) {
            break;
         }
      } while (buildK && (1 >= (mapbufferb.length % 5)));
          let rightl = true;
         mapbufferb = `${2 - libyogaU}`;
         rightl = rightl && !rightl;
          let nodev = String.fromCharCode(103,95,55,53,95,99,117,100,97,115,99,97,108,101,0);
         libyogaU >>= Math.min(4, Math.abs(3));
         nodev = `${nodev.length >> (Math.min(5, nodev.length))}`;
          let manifesta = String.fromCharCode(98,121,116,101,95,101,95,51,53,0);
          let matches9 = true;
         mapbufferb = `${mapbufferb.length - 1}`;
         manifesta += `${2 - manifesta.length}`;
         matches9 = (manifesta.length & manifesta.length) < 45;
      for (let l = 0; l < 2; l++) {
          let contextl = String.fromCharCode(120,95,56,52,95,104,111,108,108,111,119,0);
         traminiC.set(`${libyogaU}`, traminiC.size + libyogaU);
         contextl += `${contextl.length}`;
      }
      mbridget <<= Math.min(2, Math.abs((String.fromCharCode(97,0) == mapbufferb ? mapbufferb.length : screenn.size)));
      if (faviconr) {
         break;
      }
   } while (faviconr && (5 == (5 | emojiheartH.length)));

    ATBannerRNSDK.setAdListener(ATBannerRNSDK.onBannerRefresh, (event) => {

   for (let d = 0; d < 1; d++) {
      championV *= parseFloat(`${mbridget}`);
   }
      

   let applicationh = emojiheartH == String.fromCharCode(113,101,97,55,121,50,0);
   do {
      emojiheartH += `${parseInt(`${megaphoneh}`) << (Math.min(5, Math.abs(parseInt(`${championV}`))))}`;
      if (applicationh) {
         break;
      }
   } while (applicationh && (1.51 <= trashA));
      

       let unimplementedviewB = String.fromCharCode(114,103,98,95,55,95,49,53,0);
       let fcdaebecbcbafcdfceaaeccfeacdbS = String.fromCharCode(112,95,49,50,95,99,104,97,110,103,101,108,111,103,0);
       let whitesmallticky = String.fromCharCode(115,117,102,102,105,120,95,118,95,50,53,0);
      let subsQ = unimplementedviewB.length >= 8109866;
      do {
         unimplementedviewB = `${unimplementedviewB.length}`;
         if (subsQ) {
            break;
         }
      } while ((!unimplementedviewB.endsWith(`${fcdaebecbcbafcdfceaaeccfeacdbS.length}`)) && subsQ);
         unimplementedviewB = `${fcdaebecbcbafcdfceaaeccfeacdbS.length % (Math.max(5, whitesmallticky.length))}`;
      for (let x = 0; x < 3; x++) {
         unimplementedviewB = `${unimplementedviewB.length + fcdaebecbcbafcdfceaaeccfeacdbS.length}`;
      }
      for (let e = 0; e < 1; e++) {
         fcdaebecbcbafcdfceaaeccfeacdbS = `${whitesmallticky.length * unimplementedviewB.length}`;
      }
         whitesmallticky = `${3 & fcdaebecbcbafcdfceaaeccfeacdbS.length}`;
      privacy1.set(`${renew0}`, (String.fromCharCode(76,0) == renew0 ? screenn.size : renew0.length));
      

      emojiheartH += `${3 - renew0.length}`;
      

      championV /= Math.max(1, parseFloat(`${screenn.size}`));
      

      trashA -= emojiheartH.length << (Math.min(Math.abs(3), 5));
      

   for (let u = 0; u < 3; u++) {
      renew0 += "2";
   }
      

   for (let f = 0; f < 1; f++) {
      championV -= parseFloat(`${1}`);
   }
      

   if (emojiheartH.endsWith(`${megaphoneh}`)) {
      megaphoneh /= Math.max(4, parseFloat(`${1 - screenn.size}`));
   }
      console.log("ATBannerRefresh: " + event.placementId);
    });

   for (let x = 0; x < 1; x++) {
       let listZ = 5.0;
       let gmailM = false;
       let bannerN = 1.0;
      while (3.15 == (1.51 - listZ) || listZ == 1.51) {
         gmailM = !gmailM;
         break;
      }
         bannerN += parseFloat(`${parseInt(`${bannerN}`) >> (Math.min(4, Math.abs(2)))}`);
          let othermatchdetailbgy = String.fromCharCode(115,104,111,119,95,48,95,53,0);
          let iconplayS: Array<any> = [271, 763, 206];
         bannerN += parseFloat(`${othermatchdetailbgy.length % (Math.max(4, parseInt(`${bannerN}`)))}`);
         othermatchdetailbgy = `${iconplayS.length | iconplayS.length}`;
         gmailM = listZ > 13.4;
      for (let z = 0; z < 2; z++) {
          let dangerz = 3;
         gmailM = dangerz > 77;
      }
      for (let t = 0; t < 1; t++) {
          let pressureG = String.fromCharCode(103,101,116,102,114,97,109,101,95,97,95,50,49,0);
          let reducero = String.fromCharCode(109,97,103,101,95,52,95,53,50,0);
         bannerN += parseFloat(`${3}`);
         pressureG = `${pressureG.length ^ 1}`;
         reducero = `${pressureG.length & reducero.length}`;
      }
      let redcirclebge = gmailM ? !gmailM : gmailM;
      do {
         gmailM = !gmailM;
         if (redcirclebge) {
            break;
         }
      } while ((5.77 == (5.79 + listZ)) && redcirclebge);
      for (let k = 0; k < 1; k++) {
          let awayiconJ = String.fromCharCode(101,95,52,48,95,115,112,97,109,0);
          let countryi = false;
          let auto_ub = String.fromCharCode(119,95,49,54,95,105,110,115,116,97,108,108,97,116,105,111,110,115,0);
         bannerN += (parseFloat(`${parseInt(`${bannerN}`) >> (Math.min(2, Math.abs((countryi ? 2 : 5))))}`));
         awayiconJ = `${auto_ub.length & awayiconJ.length}`;
         countryi = auto_ub == awayiconJ;
      }
          let buttond = 2;
         bannerN += parseFloat(`${parseInt(`${listZ}`) & 2}`);
         buttond &= buttond;
      emojiheartH = `${parseInt(`${listZ}`) - 3}`;
   }

    ATBannerRNSDK.setAdListener(ATBannerRNSDK.onBannerRefreshFail, (event) => {

      emojiheartH = `${background2.length - privacy1.size}`;
      console.log(
        "ATBannerRefreshFail: " +
          event.placementId +
          ", adCallbackInfo: " +
          event.adCallbackInfo
      );
    });
  };

  const initBanner = () => {
       let rewardvideot: Array<any> = [644, 292];
    let headerE = 2.0;
    let hooksq = String.fromCharCode(103,114,111,119,95,103,95,54,51,0);
    let cross_ = 5.0;
    let bellF: Array<any> = [111, 925, 570];
    let editG = 4;
    let active7: Map<any, any> = new Map([[String.fromCharCode(100,113,117,97,110,116,95,110,95,52,50,0),String.fromCharCode(108,111,115,115,121,95,51,95,50,0)], [String.fromCharCode(98,101,116,104,115,111,102,116,118,105,100,101,111,95,121,95,49,50,0),String.fromCharCode(112,114,101,118,95,54,95,51,54,0)]]);
    let nterstitialf = String.fromCharCode(111,112,101,114,97,116,105,111,110,95,98,95,52,53,0);
    let playershirtf = String.fromCharCode(114,95,52,56,95,115,117,98,116,114,97,99,116,101,100,0);
    let currentU: Array<any> = [251, 812, 39];
    let unimplementedviewO = String.fromCharCode(98,105,110,111,109,105,97,108,95,119,95,57,57,0);
    let statisticsd: Map<any, any> = new Map([[String.fromCharCode(118,95,52,56,95,100,101,109,97,116,101,114,105,97,108,105,122,101,0),676], [String.fromCharCode(97,95,53,57,95,108,101,97,100,105,110,103,0),826], [String.fromCharCode(116,95,54,54,95,112,114,111,114,101,115,0),145]]);
    let e_playerh: Map<any, any> = new Map([[String.fromCharCode(116,97,103,103,101,114,95,51,95,50,0),String.fromCharCode(115,110,97,109,101,95,120,95,53,55,0)], [String.fromCharCode(117,95,53,48,95,115,113,108,105,116,101,0),String.fromCharCode(101,109,117,108,97,116,101,100,95,52,95,48,0)]]);
      currentU.push(nterstitialf.length & 2);
      unimplementedviewO = `${editG << (Math.min(5, Math.abs(2)))}`;

    

   for (let p = 0; p < 2; p++) {
      active7 = new Map([[`${headerE}`, 2 & editG]]);
   }
       let build_ = 5.0;
       let small7 = 5;
       let pages = 3;
      if (1.97 > (1.78 / (Math.max(5, build_)))) {
         pages |= small7 / 1;
      }
         small7 >>= Math.min(5, Math.abs(2 << (Math.min(4, Math.abs(pages)))));
      nterstitialf = "1";
    const settings = {};

      playershirtf += `${unimplementedviewO.length + 3}`;
   if (active7.size > 2) {
      active7.set(nterstitialf, nterstitialf.length + 3);
   }
    const screenWidthInPixel =
      Dimensions.get("screen").width * Dimensions.get("screen").scale;

       let googleN = 5;
       let vipsport1 = 3.0;
       let dacccfaabfbcbadeebddcabacdffdbI = false;
         googleN ^= 2;
       let imagenomoredataK = String.fromCharCode(119,105,116,104,95,117,95,52,55,0);
      while (!imagenomoredataK.includes(`${googleN}`)) {
          let clock4 = String.fromCharCode(120,95,50,57,95,115,109,100,109,0);
          let sportm: Map<any, any> = new Map([[String.fromCharCode(97,99,116,105,118,101,109,97,112,95,55,95,50,50,0),885], [String.fromCharCode(104,117,109,97,110,95,109,95,54,48,0),735], [String.fromCharCode(115,105,110,103,108,101,116,97,98,108,101,95,112,95,56,51,0),813]]);
          let connectionD = 3;
          let iconmoreR = String.fromCharCode(99,111,110,115,105,115,116,101,110,99,121,95,111,95,53,56,0);
         imagenomoredataK += `${iconmoreR.length}`;
         clock4 = `${3 >> (Math.min(2, Math.abs(connectionD)))}`;
         sportm = new Map([[`${sportm.size}`, clock4.length & 2]]);
         connectionD >>= Math.min(Math.abs((String.fromCharCode(83,0) == clock4 ? clock4.length : connectionD)), 1);
         iconmoreR += `${sportm.size * connectionD}`;
         break;
      }
      for (let e = 0; e < 2; e++) {
          let y_hash9 = String.fromCharCode(118,95,50,55,95,100,101,115,116,114,117,99,116,105,118,101,0);
          let orangeuparrowW = 4;
         dacccfaabfbcbadeebddcabacdffdbI = imagenomoredataK.length <= vipsport1;
         y_hash9 = `${y_hash9.length | orangeuparrowW}`;
         orangeuparrowW += (String.fromCharCode(57,0) == y_hash9 ? orangeuparrowW : y_hash9.length);
      }
         vipsport1 /= Math.max(parseInt(`${vipsport1}`), 4);
      if (!imagenomoredataK.endsWith(`${dacccfaabfbcbadeebddcabacdffdbI}`)) {
         imagenomoredataK += `${googleN / 1}`;
      }
      while (1.89 < vipsport1 || (1.89 + vipsport1) < 4.7) {
         vipsport1 *= googleN;
         break;
      }
      for (let b = 0; b < 3; b++) {
         vipsport1 /= Math.max(((dacccfaabfbcbadeebddcabacdffdbI ? 5 : 4) | imagenomoredataK.length), 5);
      }
          let downloader3 = String.fromCharCode(110,95,49,57,95,116,114,97,112,0);
          let teamA: Map<any, any> = new Map([[String.fromCharCode(113,95,52,52,95,115,117,98,112,97,121,108,111,97,100,0),174], [String.fromCharCode(121,117,118,99,111,110,102,105,103,105,109,97,103,101,95,119,95,50,49,0),68], [String.fromCharCode(111,95,52,57,95,112,114,111,112,101,114,121,0),982]]);
         imagenomoredataK = `${googleN % 2}`;
         downloader3 += `${teamA.size}`;
         teamA = new Map([[`${teamA.size}`, downloader3.length]]);
      active7 = new Map([[`${dacccfaabfbcbadeebddcabacdffdbI}`, 2 >> (Math.min(Math.abs(parseInt(`${vipsport1}`)), 1))]]);
   if (!Array.from(active7.values()).includes(headerE)) {
       let productv = String.fromCharCode(119,95,51,56,95,101,116,104,101,114,110,101,116,0);
       let mintegralc = 1.0;
      while (!productv.endsWith(`${mintegralc}`)) {
         productv += `${parseInt(`${mintegralc}`) % 3}`;
         break;
      }
          let emojiheart5 = String.fromCharCode(116,95,52,52,95,98,112,115,0);
          let indexN = false;
          let libyogaQ = true;
         productv += `${((libyogaQ ? 2 : 5) % (Math.max(parseInt(`${mintegralc}`), 4)))}`;
         emojiheart5 = `${emojiheart5.length}`;
         indexN = emojiheart5.length > 50 && indexN;
         libyogaQ = emojiheart5.length >= 62;
         mintegralc *= (parseFloat(`${String.fromCharCode(106,0) == productv ? productv.length : parseInt(`${mintegralc}`)}`));
       let customg = String.fromCharCode(118,97,114,105,97,110,99,101,115,95,114,95,50,53,0);
       let analytics_ = String.fromCharCode(115,117,98,112,97,121,108,111,97,100,95,116,95,57,52,0);
       let episodesV = String.fromCharCode(97,97,99,116,97,98,95,114,95,49,57,0);
         episodesV = `${3 | productv.length}`;
      active7 = new Map([[`${mintegralc}`, 2]]);
   }
    if (Platform.OS === "android") {
      
      settings[
        ATBannerRNSDK.kATBannerAdLoadingExtraBannerAdSizeStruct
      ] = ATBannerRNSDK.createLoadAdSize(
        screenWidthInPixel,
        (TOPON_BANNER_HEIGHT * Dimensions.get("screen").scale * 50) / 320
      );

   while ((editG / (Math.max(currentU.length, 8))) >= 5) {
      currentU = [active7.size];
      break;
   }
      headerE /= Math.max(3, (parseFloat(`${String.fromCharCode(54,0) == nterstitialf ? nterstitialf.length : editG}`)));
      

   while (playershirtf.length < unimplementedviewO.length) {
      playershirtf = `${parseInt(`${headerE}`) * unimplementedviewO.length}`;
      break;
   }
      playershirtf += "1";
      ATBannerRNSDK.loadAd(ANDROID_HOME_PAGE_BANNER_ADS, settings);

   let dropdownu = playershirtf == String.fromCharCode(115,104,102,120,99,108,0);
   do {
      playershirtf += `${rewardvideot.length & 1}`;
      if (dropdownu) {
         break;
      }
   } while ((2 > (4 - playershirtf.length)) && dropdownu);
      unimplementedviewO = `${bellF.length ^ 2}`;
      ATBannerRNSDK.loadAd(ANDROID_PLAY_DETAILS_BANNER_ADS, settings);

   for (let r = 0; r < 2; r++) {
      rewardvideot = [hooksq.length - editG];
   }
      cross_ -= playershirtf.length - rewardvideot.length;
      ATBannerRNSDK.loadAd(ANDROID_TOPIC_DETAILS_BANNER_ADS, settings);

   for (let f = 0; f < 3; f++) {
      active7.set(`${editG}`, editG % 3);
   }
      playershirtf += `${parseInt(`${headerE}`)}`;
      ATBannerRNSDK.loadAd(ANDROID_TOPIC_TAB_BANNER_ADS, settings);
    }
    if (Platform.OS === "ios") {
      
      settings[
        ATBannerRNSDK.kATBannerAdLoadingExtraBannerAdSizeStruct
      ] = ATBannerRNSDK.createLoadAdSize(
        Dimensions.get("screen").width,
        TOPON_BANNER_HEIGHT
      );

   for (let h = 0; h < 1; h++) {
      currentU = [(String.fromCharCode(95,0) == playershirtf ? currentU.length : playershirtf.length)];
   }
   while (3 < (rewardvideot.length + bellF.length) && (bellF.length + rewardvideot.length) < 3) {
      rewardvideot.push(2 >> (Math.min(2, Math.abs(parseInt(`${headerE}`)))));
      break;
   }

      ATBannerRNSDK.loadAd(IOS_HOME_PAGE_BANNER_ADS, settings);

   for (let q = 0; q < 1; q++) {
      playershirtf = `${rewardvideot.length}`;
   }
      bellF.push(rewardvideot.length - 1);
      ATBannerRNSDK.loadAd(IOS_PLAY_DETAILS_BANNER_ADS, settings);

   if ((active7.size - parseInt(`${headerE}`)) >= 5) {
      active7.set(`${currentU.length}`, rewardvideot.length);
   }
   while (unimplementedviewO.includes(`${active7.size}`)) {
       let statisticsinactive5 = String.fromCharCode(100,110,111,119,95,105,95,56,51,0);
       let ajaxE = String.fromCharCode(100,105,97,108,111,103,117,101,115,95,109,95,53,54,0);
      let scrollview7 = String.fromCharCode(52,48,113,101,115,121,107,116,121,115,0) == ajaxE;
      do {
         ajaxE = `${1 + statisticsinactive5.length}`;
         if (scrollview7) {
            break;
         }
      } while ((!ajaxE.startsWith(`${statisticsinactive5.length}`)) && scrollview7);
          let watcho = 1.0;
          let teamdetailsbgS = String.fromCharCode(109,97,105,110,104,101,97,100,101,114,95,54,95,56,51,0);
          let middlesoundD = String.fromCharCode(115,111,114,101,99,101,105,118,101,95,112,95,54,54,0);
         ajaxE = `${statisticsinactive5.length & 3}`;
         watcho /= Math.max(1, middlesoundD.length | 3);
         teamdetailsbgS += `${parseInt(`${watcho}`)}`;
         middlesoundD += `${(String.fromCharCode(100,0) == teamdetailsbgS ? teamdetailsbgS.length : parseInt(`${watcho}`))}`;
         ajaxE = "3";
      for (let u = 0; u < 2; u++) {
         statisticsinactive5 += `${statisticsinactive5.length ^ ajaxE.length}`;
      }
      for (let n = 0; n < 3; n++) {
         statisticsinactive5 = `${3 & statisticsinactive5.length}`;
      }
      while (statisticsinactive5 == ajaxE) {
          let inviteN = 1;
          let libimagepipelines = 3.0;
          let gestureu = String.fromCharCode(97,95,49,55,95,102,99,112,117,98,108,105,115,104,0);
         ajaxE += `${parseInt(`${libimagepipelines}`) / (Math.max(1, inviteN))}`;
         inviteN |= gestureu.length;
         libimagepipelines += parseFloat(`${gestureu.length - 3}`);
         break;
      }
      active7.set(unimplementedviewO, nterstitialf.length | unimplementedviewO.length);
      break;
   }
      ATBannerRNSDK.loadAd(IOS_TOPIC_DETAILS_BANNER_ADS, settings);

   if (4.64 <= (3.68 * headerE) || (headerE * 3.68) <= 2.36) {
       let notificationfilledI: Array<any> = [852, 195, 340];
       let greyt: Array<any> = [596, 196, 297];
      for (let f = 0; f < 1; f++) {
         greyt = [greyt.length | 1];
      }
         greyt.push(notificationfilledI.length % 1);
      while (greyt.length < notificationfilledI.length) {
         greyt = [3 - greyt.length];
         break;
      }
         greyt = [3];
      let arrowrightu = 6604280 <= notificationfilledI.length;
      do {
         notificationfilledI.push(2);
         if (arrowrightu) {
            break;
         }
      } while ((4 > (notificationfilledI.length >> (Math.min(greyt.length, 4)))) && arrowrightu);
          let emojiR = String.fromCharCode(105,95,56,54,95,97,117,116,104,107,101,121,0);
         greyt = [2 - notificationfilledI.length];
         emojiR += `${emojiR.length % (Math.max(3, 8))}`;
      headerE -= parseFloat(`${currentU.length}`);
   }
   let teamO = 5293804 <= rewardvideot.length;
   do {
      rewardvideot.push((unimplementedviewO == String.fromCharCode(109,0) ? unimplementedviewO.length : parseInt(`${cross_}`)));
      if (teamO) {
         break;
      }
   } while (teamO && ((rewardvideot.length - 1) > 5));
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
       let streamingJ = false;
    let iconwechatO = String.fromCharCode(97,114,103,120,95,97,95,54,56,0);
    let sounda = false;
    let neonl = String.fromCharCode(120,95,49,50,95,115,105,110,101,115,0);
    let yellow5 = 2.0;
    let result5 = 0.0;
    let gmailH = String.fromCharCode(99,95,49,49,95,115,112,97,116,105,97,108,0);
    let stark = String.fromCharCode(113,95,51,55,95,97,118,102,105,108,116,101,114,114,101,115,0);
   while (gmailH.includes(`${streamingJ}`)) {
       let statisticsinactiveZ = false;
       let downarrow9 = 3.0;
       let matchinactiveK = String.fromCharCode(114,95,51,55,95,115,116,101,109,109,101,114,0);
         downarrow9 += (parseInt(`${downarrow9}`) << (Math.min(5, Math.abs((statisticsinactiveZ ? 2 : 4)))));
         statisticsinactiveZ = !statisticsinactiveZ;
      while ((downarrow9 - 4.14) >= 2.19) {
          let predictionactiveg = 5.0;
          let current4 = String.fromCharCode(114,101,97,100,98,105,116,115,95,54,95,55,53,0);
          let rootu = 3.0;
         downarrow9 += current4.length % 1;
         predictionactiveg -= 2 & parseInt(`${rootu}`);
         current4 += `${parseInt(`${predictionactiveg}`)}`;
         rootu *= 2 ^ parseInt(`${rootu}`);
         break;
      }
      while (!statisticsinactiveZ) {
         matchinactiveK += `${matchinactiveK.length}`;
         break;
      }
      for (let c = 0; c < 3; c++) {
         matchinactiveK = `${matchinactiveK.length}`;
      }
          let libjsiF = String.fromCharCode(102,95,51,50,95,115,105,100,101,100,97,116,97,0);
         statisticsinactiveZ = !statisticsinactiveZ || 45.9 <= downarrow9;
         libjsiF += `${libjsiF.length / (Math.max(8, libjsiF.length))}`;
      let libffmpegkitj = downarrow9 <= 5717854.0;
      do {
          let profilepicA = 4.0;
          let slider4 = String.fromCharCode(121,97,109,97,104,97,95,113,95,48,0);
          let privacyE: Array<any> = [58, 27];
         downarrow9 -= parseInt(`${profilepicA}`);
         profilepicA *= parseFloat(`${slider4.length ^ 3}`);
         slider4 += `${slider4.length}`;
         privacyE.push(1 ^ slider4.length);
         if (libffmpegkitj) {
            break;
         }
      } while ((3.33 <= (downarrow9 - 5.66) && 5.66 <= downarrow9) && libffmpegkitj);
          let componentsf: Map<any, any> = new Map([[String.fromCharCode(116,95,56,55,95,115,98,115,112,108,105,116,0),889], [String.fromCharCode(115,119,105,116,99,104,95,106,95,49,57,0),733], [String.fromCharCode(98,95,49,95,100,105,115,112,108,97,121,0),522]]);
          let libfollyk: Array<any> = [110, 919, 225];
          let routera = String.fromCharCode(120,95,57,49,95,118,97,108,105,100,97,116,101,0);
         statisticsinactiveZ = 65.18 < downarrow9;
         componentsf = new Map([[`${componentsf.size}`, libfollyk.length]]);
         libfollyk = [componentsf.size + libfollyk.length];
         routera = "2";
       let page1 = String.fromCharCode(104,116,108,116,95,49,95,50,54,0);
       let philippines6 = String.fromCharCode(112,95,51,54,95,97,117,116,111,99,111,114,114,0);
      gmailH += `${((statisticsinactiveZ ? 5 : 5))}`;
      break;
   }
       let watchnowbgR = String.fromCharCode(105,109,109,101,100,105,97,116,101,108,121,95,98,95,49,57,0);
       let libturbomodulejsijniX = String.fromCharCode(114,101,99,116,115,95,102,95,50,52,0);
          let ewardeds = 5;
          let nbatrophyx = String.fromCharCode(115,105,110,99,95,101,95,54,50,0);
         libturbomodulejsijniX += `${watchnowbgR.length - libturbomodulejsijniX.length}`;
         ewardeds -= ewardeds % 3;
         nbatrophyx = `${nbatrophyx.length}`;
      let o_imageC = watchnowbgR.length >= 5723672;
      do {
          let executorL = String.fromCharCode(100,95,56,49,95,104,97,97,114,0);
         watchnowbgR = `${executorL.length}`;
         if (o_imageC) {
            break;
         }
      } while (o_imageC && (!watchnowbgR.endsWith(libturbomodulejsijniX)));
          let zhengpianF = 4.0;
          let arrowrightz: Array<any> = [907, 937, 550];
          let runtimeschedulerj: Array<any> = [646, 591, 883];
         libturbomodulejsijniX += `${arrowrightz.length + parseInt(`${zhengpianF}`)}`;
         zhengpianF -= 3 ^ runtimeschedulerj.length;
         arrowrightz.push(runtimeschedulerj.length);
         watchnowbgR += `${watchnowbgR.length}`;
      if (watchnowbgR.length <= 1) {
         libturbomodulejsijniX = `${watchnowbgR.length}`;
      }
      for (let g = 0; g < 3; g++) {
         watchnowbgR = "1";
      }
      result5 -= watchnowbgR.length + 3;

    const androidIds = [
      ANDROID_HOME_PAGE_BANNER_ADS,
      ANDROID_PLAY_DETAILS_BANNER_ADS,
      ANDROID_TOPIC_DETAILS_BANNER_ADS,
      ANDROID_TOPIC_TAB_BANNER_ADS,
    ];

      neonl += `${(parseInt(`${result5}`) | (streamingJ ? 4 : 3))}`;
   if (gmailH != iconwechatO) {
       let schedulea = 3;
       let corner3: Map<any, any> = new Map([[String.fromCharCode(119,95,56,49,95,115,109,101,97,114,0),true ], [String.fromCharCode(108,95,52,53,95,99,111,110,116,111,108,108,101,114,0),false ]]);
       let whistleu = 0;
       let iconlogout4: Array<any> = [588, 859, 196];
      while (5 < (schedulea >> (Math.min(iconlogout4.length, 4))) && (schedulea >> (Math.min(iconlogout4.length, 3))) < 5) {
         iconlogout4.push(whistleu - iconlogout4.length);
         break;
      }
          let downloadingr: Map<any, any> = new Map([[String.fromCharCode(122,95,49,55,95,110,111,99,97,115,101,0),811], [String.fromCharCode(112,114,111,118,105,100,101,95,119,95,50,48,0),978], [String.fromCharCode(115,101,101,95,52,95,49,0),957]]);
          let anner_ = false;
         corner3 = new Map([[`${iconlogout4.length}`, 3]]);
         downloadingr = new Map([[`${downloadingr.size}`, downloadingr.size ^ 2]]);
         anner_ = downloadingr.size >= 14;
      while (1 <= (schedulea >> (Math.min(Math.abs(corner3.size), 5))) && 1 <= (corner3.size >> (Math.min(Math.abs(1), 1)))) {
         corner3 = new Map([[`${iconlogout4.length}`, 2]]);
         break;
      }
          let dragP = true;
          let icondefaultthumbnailc = 3;
         iconlogout4 = [corner3.size];
         dragP = dragP && 45 >= icondefaultthumbnailc;
         icondefaultthumbnailc -= 1;
      if (Array.from(corner3.values()).includes(iconlogout4.length)) {
         iconlogout4.push(iconlogout4.length + 1);
      }
      if (corner3.get(`${schedulea}`) == null) {
         schedulea -= corner3.size;
      }
          let iconshareR = 3.0;
          let kuaishouO: Array<any> = [String.fromCharCode(104,95,56,57,95,100,118,98,116,120,116,0), String.fromCharCode(102,95,53,56,95,117,110,105,116,116,101,115,116,0)];
         whistleu >>= Math.min(Math.abs(2), 5);
         iconshareR -= parseFloat(`${1 - parseInt(`${iconshareR}`)}`);
         kuaishouO.push(kuaishouO.length % 1);
       let downloadedx: Map<any, any> = new Map([[String.fromCharCode(97,95,51,53,95,100,111,116,0),String.fromCharCode(100,95,56,57,95,115,97,109,112,108,101,99,112,121,0)], [String.fromCharCode(115,114,116,112,95,112,95,51,0),String.fromCharCode(103,95,52,51,95,100,111,99,108,105,115,116,0)]]);
       let homeinactivee: Map<any, any> = new Map([[String.fromCharCode(102,108,116,112,95,106,95,50,49,0),false ], [String.fromCharCode(119,95,56,51,95,116,114,105,112,108,101,116,0),true ]]);
         schedulea &= iconlogout4.length >> (Math.min(1, Math.abs(homeinactivee.size)));
       let manifest0 = 0.0;
       let showmore8 = 2.0;
         manifest0 -= parseFloat(`${homeinactivee.size}`);
         corner3 = new Map([[`${corner3.size}`, corner3.size]]);
      iconwechatO = `${3 << (Math.min(4, gmailH.length))}`;
   }
    const iosIds = [
      IOS_HOME_PAGE_BANNER_ADS,
      IOS_PLAY_DETAILS_BANNER_ADS,
      IOS_TOPIC_DETAILS_BANNER_ADS,
      IOS_TOPIC_TAB_BANNER_ADS,
    ];

      result5 *= parseInt(`${result5}`) / 1;
       let iconschedulec = String.fromCharCode(113,95,49,57,95,112,114,111,109,105,115,101,115,0);
       let reactnativeultimatelistviewU = 3;
         iconschedulec += `${(String.fromCharCode(122,0) == iconschedulec ? iconschedulec.length : reactnativeultimatelistviewU)}`;
         iconschedulec += `${reactnativeultimatelistviewU}`;
         iconschedulec += `${iconschedulec.length}`;
         reactnativeultimatelistviewU <<= Math.min(4, Math.abs(2 >> (Math.min(5, iconschedulec.length))));
         iconschedulec += `${iconschedulec.length + reactnativeultimatelistviewU}`;
      if (iconschedulec.startsWith(`${reactnativeultimatelistviewU}`)) {
          let verticalN = 2.0;
          let assetsD: Map<any, any> = new Map([[String.fromCharCode(107,95,56,49,95,102,100,111,112,101,110,0),777], [String.fromCharCode(115,95,51,55,95,114,101,99,116,0),69]]);
          let baiduU = true;
          let awayteamfieldp = String.fromCharCode(112,95,49,57,95,116,101,100,99,97,112,116,105,111,110,115,0);
          let libyogaa = true;
         reactnativeultimatelistviewU /= Math.max(4, ((libyogaa ? 4 : 3) << (Math.min(Math.abs(assetsD.size), 1))));
         verticalN += (parseFloat(`${(baiduU ? 3 : 4) >> (Math.min(Math.abs(1), 1))}`));
         assetsD.set(`${verticalN}`, 1 % (Math.max(7, parseInt(`${verticalN}`))));
         baiduU = verticalN < 33.64;
         awayteamfieldp += `${parseInt(`${verticalN}`)}`;
         libyogaa = parseFloat(`${awayteamfieldp.length}`) < verticalN;
      }
      gmailH += `${iconschedulec.length}`;

    if (Platform.OS === "ios") {

   for (let b = 0; b < 2; b++) {
      sounda = iconwechatO.includes(`${yellow5}`);
   }
   let libavformatj = sounda ? !sounda : sounda;
   do {
      sounda = yellow5 == 48.1;
      if (libavformatj) {
         break;
      }
   } while ((!sounda) && libavformatj);
      iosIds.forEach((element) => {

   while (3 <= gmailH.length) {
      gmailH = `${neonl.length}`;
      break;
   }
       let trophyq: Array<any> = [528, 555];
         trophyq = [1 << (Math.min(1, trophyq.length))];
         trophyq = [2 / (Math.max(9, trophyq.length))];
      for (let t = 0; t < 2; t++) {
          let entryQ = String.fromCharCode(111,117,116,112,117,116,115,95,110,95,57,0);
          let imageactionliveO = String.fromCharCode(112,97,116,116,101,114,110,95,49,95,51,50,0);
          let type_qjw: Map<any, any> = new Map([[String.fromCharCode(104,95,55,57,95,116,114,97,110,115,108,105,116,101,114,97,116,105,111,110,0),700], [String.fromCharCode(107,95,52,51,95,121,117,118,112,116,111,121,117,121,0),533]]);
         trophyq = [imageactionliveO.length];
         entryQ += "1";
         imageactionliveO += `${entryQ.length & type_qjw.size}`;
         type_qjw.set(entryQ, entryQ.length >> (Math.min(Math.abs(3), 3)));
      }
      sounda = !streamingJ;
        ATBannerRNSDK.hideAd(element);
      });
    } else {

      iconwechatO = "2";
   for (let g = 0; g < 2; g++) {
      result5 -= 1 & parseInt(`${result5}`);
   }
      androidIds.forEach((element) => {

   let shootnogoald = streamingJ ? !streamingJ : streamingJ;
   do {
       let dangeri = String.fromCharCode(119,95,51,52,95,108,115,112,105,0);
          let predictionbuttony = String.fromCharCode(114,111,117,112,95,106,95,56,52,0);
          let videobufferloading0 = String.fromCharCode(105,115,110,111,110,122,101,114,111,95,111,95,50,0);
         dangeri += "2";
         predictionbuttony += `${videobufferloading0.length}`;
         videobufferloading0 += `${predictionbuttony.length}`;
       let countdownk = 1.0;
          let basketballhometeamf: Array<any> = [String.fromCharCode(109,95,49,55,95,99,117,98,101,100,0), String.fromCharCode(111,95,55,49,95,99,97,110,110,111,116,0), String.fromCharCode(110,95,54,52,95,112,97,114,116,105,99,105,112,97,110,116,0)];
          let cleard = 4;
         countdownk += parseFloat(`${cleard * parseInt(`${countdownk}`)}`);
         basketballhometeamf = [basketballhometeamf.length - 1];
         cleard *= 3;
      streamingJ = !streamingJ;
      if (shootnogoald) {
         break;
      }
   } while ((!streamingJ || stark.length <= 2) && shootnogoald);
   let profileinactive2 = result5 >= 7866889.0;
   do {
      result5 += 2;
      if (profileinactive2) {
         break;
      }
   } while (profileinactive2 && (4.83 < (result5 + 5.48)));
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
    if (screenState.isHomeGuideShown != true) {
      return;
    }
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
       let sendm: Array<any> = [333, 349, 475];
    let combine5: Map<any, any> = new Map([[String.fromCharCode(98,95,57,95,115,117,99,99,101,115,115,99,98,0),String.fromCharCode(115,116,97,114,116,95,51,95,51,51,0)], [String.fromCharCode(110,112,112,116,114,97,110,115,112,111,115,101,95,117,95,51,55,0),String.fromCharCode(115,101,114,105,97,108,95,104,95,49,57,0)], [String.fromCharCode(102,97,115,116,101,115,116,95,102,95,53,49,0),String.fromCharCode(112,95,57,50,95,98,97,99,107,111,102,102,0)]]);
    let mathN = 3.0;
    let iconarrowrightorangeI = String.fromCharCode(116,95,56,57,95,109,97,105,108,0);
    let libreactnativeblob7 = 4.0;
    let iconclosewhiteu = 5.0;
    let tumbnailZ = String.fromCharCode(104,95,55,57,95,99,103,117,0);
    let gifgoalbgk = String.fromCharCode(115,117,114,102,97,99,101,115,95,48,95,51,51,0);
    let statsg = String.fromCharCode(104,95,48,95,99,114,101,97,116,101,0);
    let videovarj = String.fromCharCode(105,110,116,102,114,95,110,95,50,51,0);
    let awayplayerh = 3;
    let calendarh = 3.0;
    let floateri = String.fromCharCode(97,97,115,99,95,48,95,55,52,0);
   let project0 = videovarj == String.fromCharCode(109,103,113,103,120,54,118,120,110,0);
   do {
       let bdxadsdk4: Array<any> = [532, 48, 745];
       let showmore9: Array<any> = [488, 492];
      for (let h = 0; h < 1; h++) {
         showmore9 = [showmore9.length];
      }
          let showG = String.fromCharCode(115,95,57,48,95,102,116,118,108,97,115,116,110,111,100,101,0);
          let flagp = 5.0;
          let reddownarrowu = String.fromCharCode(115,117,98,115,101,113,117,101,110,116,95,55,95,56,55,0);
         bdxadsdk4 = [reddownarrowu.length];
         showG = `${(String.fromCharCode(70,0) == showG ? showG.length : parseInt(`${flagp}`))}`;
         flagp -= (parseFloat(`${showG == String.fromCharCode(80,0) ? parseInt(`${flagp}`) : showG.length}`));
         reddownarrowu += `${parseInt(`${flagp}`) % (Math.max(2, 7))}`;
         showmore9 = [bdxadsdk4.length];
      for (let t = 0; t < 3; t++) {
         showmore9 = [2 ^ bdxadsdk4.length];
      }
          let result9 = true;
         showmore9.push(showmore9.length / (Math.max(3, 6)));
         result9 = (result9 ? result9 : !result9);
       let selects = String.fromCharCode(113,95,55,53,95,98,95,56,56,0);
      videovarj += `${parseInt(`${iconclosewhiteu}`)}`;
      if (project0) {
         break;
      }
   } while ((gifgoalbgk != String.fromCharCode(51,0)) && project0);

    if (!route) return;

      statsg = "1";
    if (Platform.OS === "android") {

   let awayteamfieldT = 8792574 <= sendm.length;
   do {
      sendm = [statsg.length & parseInt(`${libreactnativeblob7}`)];
      if (awayteamfieldT) {
         break;
      }
   } while ((3 > (sendm.length >> (Math.min(Math.abs(4), 3))) || (libreactnativeblob7 + 2.4) > 3.69) && awayteamfieldT);
      const screenWidthInPixel = Dimensions.get("screen").width * scale;

   for (let f = 0; f < 2; f++) {
      statsg += `${statsg.length | sendm.length}`;
   }
      

      combine5 = new Map([[iconarrowrightorangeI, iconarrowrightorangeI.length / 3]]);
      const screenHeightInPixel = Dimensions.get("screen").height * scale;

      videovarj += `${combine5.size >> (Math.min(gifgoalbgk.length, 5))}`;
      

   if (!sendm.includes(mathN)) {
       let orangedownarrow4: Map<any, any> = new Map([[String.fromCharCode(104,100,115,112,95,112,95,52,53,0),String.fromCharCode(108,105,110,101,97,114,95,105,95,57,0)], [String.fromCharCode(116,109,105,120,95,57,95,52,57,0),String.fromCharCode(116,114,97,110,115,108,105,116,101,114,97,116,101,95,52,95,51,49,0)], [String.fromCharCode(110,95,54,55,95,105,115,108,101,97,112,0),String.fromCharCode(112,97,114,99,111,114,95,121,95,51,51,0)]]);
         orangedownarrow4 = new Map([[`${orangedownarrow4.size}`, 3 >> (Math.min(3, Math.abs(orangedownarrow4.size)))]]);
         orangedownarrow4 = new Map([[`${orangedownarrow4.size}`, orangedownarrow4.size]]);
         orangedownarrow4 = new Map([[`${orangedownarrow4.size}`, 2]]);
      mathN -= parseFloat(`${1}`);
   }
      const statusBarHeightInPixel = (StatusBar.currentHeight ?? 0) * scale;

   let nterstitialO = String.fromCharCode(114,104,112,119,0) == iconarrowrightorangeI;
   do {
       let largebrightnessp = 0;
       let emojig = String.fromCharCode(120,95,50,50,95,105,110,98,111,120,0);
       let leaguef: Array<any> = [400, 614];
       let redgoall = String.fromCharCode(110,95,57,51,95,101,99,109,117,108,116,0);
       let cancel3: Array<any> = [654, 751, 878];
      let time_zx = 5301013 <= largebrightnessp;
      do {
          let positionfieldy = 2;
          let appleK = String.fromCharCode(115,117,98,112,105,120,101,108,95,57,95,53,55,0);
         largebrightnessp *= (redgoall == String.fromCharCode(108,0) ? cancel3.length : redgoall.length);
         positionfieldy += 2 + positionfieldy;
         appleK += `${appleK.length}`;
         if (time_zx) {
            break;
         }
      } while ((3 < (largebrightnessp | redgoall.length) || 3 < (largebrightnessp | redgoall.length)) && time_zx);
         largebrightnessp *= emojig.length;
          let sort8 = String.fromCharCode(97,116,111,110,95,121,95,51,54,0);
          let yellowcirclebgo = String.fromCharCode(118,95,49,54,95,115,121,115,114,97,110,100,0);
          let iconnewsshareO: Map<any, any> = new Map([[String.fromCharCode(112,95,52,57,95,116,109,105,120,0),329], [String.fromCharCode(116,95,57,48,95,106,99,115,97,109,112,108,101,0),466]]);
         cancel3 = [sort8.length];
         sort8 = `${iconnewsshareO.size * 2}`;
         yellowcirclebgo = `${(yellowcirclebgo == String.fromCharCode(80,0) ? yellowcirclebgo.length : iconnewsshareO.size)}`;
       let renewV = String.fromCharCode(99,111,108,95,51,95,56,48,0);
      while (renewV.length >= emojig.length) {
         renewV = `${emojig.length}`;
         break;
      }
         leaguef.push((renewV == String.fromCharCode(75,0) ? cancel3.length : renewV.length));
          let auto_66 = 1;
          let predictionbuttonI = 4.0;
         leaguef.push(largebrightnessp - emojig.length);
         auto_66 %= Math.max(auto_66, 2);
         predictionbuttonI -= parseInt(`${predictionbuttonI}`) * auto_66;
         cancel3 = [cancel3.length];
          let profileinactive0 = String.fromCharCode(118,95,52,55,95,101,120,99,104,97,110,103,101,115,0);
          let iconsubssuccessZ = String.fromCharCode(110,95,54,57,95,107,101,112,116,0);
          let halffieldimagev = String.fromCharCode(98,105,103,117,105,110,116,95,98,95,51,48,0);
         renewV = `${leaguef.length >> (Math.min(Math.abs(2), 5))}`;
         profileinactive0 += `${(String.fromCharCode(82,0) == iconsubssuccessZ ? halffieldimagev.length : iconsubssuccessZ.length)}`;
         halffieldimagev += `${(iconsubssuccessZ == String.fromCharCode(82,0) ? halffieldimagev.length : iconsubssuccessZ.length)}`;
      let alertc = String.fromCharCode(99,49,50,55,114,120,119,0) == renewV;
      do {
         renewV = `${largebrightnessp % (Math.max(2, cancel3.length))}`;
         if (alertc) {
            break;
         }
      } while (((renewV.length & 4) == 5) && alertc);
      let notificationgrayv = leaguef.length <= 4946294;
      do {
         leaguef = [emojig.length & cancel3.length];
         if (notificationgrayv) {
            break;
         }
      } while (notificationgrayv && (2 == (2 >> (Math.min(3, emojig.length))) && 1 == (emojig.length >> (Math.min(Math.abs(2), 3)))));
          let splash5 = String.fromCharCode(121,95,51,48,95,99,104,97,114,115,0);
         emojig += `${renewV.length * emojig.length}`;
         splash5 += "1";
       let homeactive9 = true;
      while ((1 / (Math.max(2, cancel3.length))) == 3 && (cancel3.length / 1) == 4) {
         cancel3 = [2];
         break;
      }
          let gesturesS = 2.0;
          let questb = 2;
         renewV = "2";
         gesturesS *= parseFloat(`${parseInt(`${gesturesS}`) * 3}`);
         questb <<= Math.min(3, Math.abs(2));
      iconarrowrightorangeI = `${sendm.length}`;
      if (nterstitialO) {
         break;
      }
   } while ((!iconarrowrightorangeI.endsWith(`${iconclosewhiteu}`)) && nterstitialO);
      

   for (let e = 0; e < 2; e++) {
       let hooksU = 4.0;
       let libfabricjnib = String.fromCharCode(100,113,99,111,101,102,102,95,98,95,57,54,0);
       let carouself = String.fromCharCode(102,111,111,95,98,95,55,49,0);
       let notificationfilledT = 1.0;
       let w_animationt = 1.0;
      while (2 == (1 - parseInt(`${hooksU}`)) && 1.42 == (hooksU - libfabricjnib.length)) {
         hooksU += 3 | parseInt(`${w_animationt}`);
         break;
      }
      while (carouself.startsWith(libfabricjnib)) {
          let privatechatbgm = 4;
          let libffmpegkit5 = false;
          let rncoreL = String.fromCharCode(97,108,97,119,95,53,95,50,48,0);
          let klevins = String.fromCharCode(116,105,109,101,108,105,110,101,115,95,56,95,49,54,0);
          let castl = String.fromCharCode(116,95,51,53,95,110,111,97,108,108,111,99,0);
         libfabricjnib += `${((libffmpegkit5 ? 1 : 1) % (Math.max(parseInt(`${w_animationt}`), 6)))}`;
         privatechatbgm <<= Math.min(4, Math.abs(1));
         libffmpegkit5 = (castl.length + rncoreL.length) > 56;
         rncoreL += "3";
         klevins += `${(castl == String.fromCharCode(81,0) ? rncoreL.length : castl.length)}`;
         break;
      }
         w_animationt -= parseFloat(`${parseInt(`${hooksU}`) + 1}`);
          let strC = String.fromCharCode(114,97,98,98,105,116,95,112,95,50,51,0);
          let topon8 = String.fromCharCode(121,118,116,111,117,121,118,121,95,101,95,54,54,0);
         carouself = `${3 * libfabricjnib.length}`;
         strC = `${strC.length}`;
         topon8 = `${(topon8 == String.fromCharCode(98,0) ? topon8.length : strC.length)}`;
          let leakcheckerT = 1.0;
          let react6 = 2.0;
         notificationfilledT *= parseInt(`${hooksU}`);
         leakcheckerT *= parseFloat(`${parseInt(`${react6}`) + parseInt(`${leakcheckerT}`)}`);
         react6 -= parseInt(`${leakcheckerT}`);
      for (let a = 0; a < 2; a++) {
         w_animationt /= Math.max(1, parseFloat(`${parseInt(`${notificationfilledT}`) << (Math.min(carouself.length, 5))}`));
      }
      if ((parseInt(`${notificationfilledT}`) * 5) >= 1 || 2 >= (libfabricjnib.length & 5)) {
         libfabricjnib = `${parseInt(`${notificationfilledT}`) ^ parseInt(`${hooksU}`)}`;
      }
       let classesh = 2;
      if (1.72 > (hooksU * 5.95)) {
         hooksU *= 3 & libfabricjnib.length;
      }
          let redcirclebgr: Array<any> = [280, 441, 563];
          let refreshX = String.fromCharCode(107,95,53,57,95,112,101,114,99,101,110,116,97,103,101,0);
         notificationfilledT *= 2 << (Math.min(3, redcirclebgr.length));
         redcirclebgr.push(3);
         refreshX = `${(String.fromCharCode(78,0) == refreshX ? refreshX.length : refreshX.length)}`;
      if ((classesh / (Math.max(7, notificationfilledT))) < 2.61) {
          let searchbarp = String.fromCharCode(112,95,56,95,121,111,110,108,121,0);
         notificationfilledT *= 1;
         searchbarp += `${searchbarp.length}`;
      }
      while ((classesh << (Math.min(libfabricjnib.length, 5))) == 4) {
         libfabricjnib = `${classesh >> (Math.min(libfabricjnib.length, 5))}`;
         break;
      }
          let coreE = String.fromCharCode(119,95,50,55,95,112,101,114,115,111,110,0);
          let componentW = String.fromCharCode(109,112,101,103,97,117,100,105,111,100,101,99,104,101,97,100,101,114,95,56,95,53,52,0);
          let orientation9 = 1.0;
         hooksU *= parseInt(`${notificationfilledT}`);
         coreE = `${(String.fromCharCode(105,0) == coreE ? coreE.length : parseInt(`${orientation9}`))}`;
         componentW = "3";
         orientation9 *= 3;
      let bellk = 6410800.0 <= hooksU;
      do {
         hooksU += parseInt(`${notificationfilledT}`) & carouself.length;
         if (bellk) {
            break;
         }
      } while (bellk && ((libfabricjnib.length << (Math.min(Math.abs(4), 1))) == 1));
      for (let f = 0; f < 3; f++) {
         libfabricjnib += `${parseInt(`${hooksU}`)}`;
      }
      libreactnativeblob7 *= parseFloat(`${gifgoalbgk.length}`);
   }
      const navbarHeightInPixel =
        (navbarHeight != 0 ? navbarHeight - 1 : 0) * scale;
      

   let graph2 = libreactnativeblob7 >= 8204285.0;
   do {
      libreactnativeblob7 += parseFloat(`${gifgoalbgk.length}`);
      if (graph2) {
         break;
      }
   } while ((3.6 <= libreactnativeblob7) && graph2);

      setSystemNavHeight(await getNavigationBarHeight());

       let resendg: Array<any> = [String.fromCharCode(121,95,51,48,95,99,111,109,112,108,101,109,101,110,116,105,110,103,0), String.fromCharCode(101,95,52,51,95,110,111,110,101,0), String.fromCharCode(116,104,117,109,98,115,117,112,95,104,95,51,52,0)];
       let borderlessJ: Array<any> = [490, 372];
         resendg = [borderlessJ.length % (Math.max(resendg.length, 1))];
      while (1 <= (1 << (Math.min(5, resendg.length)))) {
          let iconcalendarD = 0;
          let uimanagerm = String.fromCharCode(113,95,56,56,95,113,115,99,97,108,101,113,108,111,103,0);
          let tickZ = 2.0;
          let dependenciesu = false;
          let private_5K = 1.0;
         resendg = [borderlessJ.length & 1];
         iconcalendarD ^= uimanagerm.length / 2;
         uimanagerm += `${uimanagerm.length >> (Math.min(Math.abs(2), 1))}`;
         tickZ += parseFloat(`${parseInt(`${private_5K}`)}`);
         dependenciesu = String.fromCharCode(50,0) == uimanagerm;
         private_5K += (parseFloat(`${(dependenciesu ? 5 : 2) | parseInt(`${private_5K}`)}`));
         break;
      }
      if (5 >= borderlessJ.length) {
          let bufferT = 0.0;
          let mbjscommonu: Array<any> = [124, 18];
          let screenJ = String.fromCharCode(103,95,53,57,95,98,111,114,100,101,114,101,100,0);
          let neong = 0.0;
          let rootO = true;
         resendg.push(mbjscommonu.length);
         bufferT += parseFloat(`${screenJ.length * parseInt(`${bufferT}`)}`);
         mbjscommonu.push(3 - parseInt(`${neong}`));
         screenJ = `${parseInt(`${neong}`) * 1}`;
         rootO = bufferT < 55.58;
      }
       let playercommonY = String.fromCharCode(111,112,116,105,111,110,115,95,54,95,52,0);
       let reddownarrowa = String.fromCharCode(112,95,51,56,95,105,110,116,101,114,112,111,108,97,116,97,98,108,101,0);
      let greyc = 5163877 <= resendg.length;
      do {
          let telegramu = true;
         resendg.push(3 >> (Math.min(4, resendg.length)));
         if (greyc) {
            break;
         }
      } while ((playercommonY.length >= resendg.length) && greyc);
         playercommonY += "2";
      combine5 = new Map([[`${combine5.size}`, parseInt(`${mathN}`)]]);
      

      tumbnailZ = `${2 % (Math.max(9, combine5.size))}`;

      const adsTopInPixel =
        screenHeightInPixel -
        statusBarHeightInPixel -
        navbarHeightInPixel -
        systemNavHeight;

   while (tumbnailZ.length < 2) {
      iconclosewhiteu *= parseInt(`${mathN}`);
      break;
   }
      

      mathN *= parseFloat(`${parseInt(`${mathN}`) % (Math.max(1, 4))}`);

      let huaweiOffset = 0;

   if (gifgoalbgk.endsWith(`${tumbnailZ.length}`)) {
       let mbbannerx: Map<any, any> = new Map([[String.fromCharCode(99,108,117,116,95,114,95,56,56,0),false ], [String.fromCharCode(114,95,55,54,95,112,108,117,103,105,110,0),true ], [String.fromCharCode(110,97,109,101,116,111,105,110,100,101,120,95,118,95,52,0),false ]]);
       let usernameY = String.fromCharCode(100,101,97,100,108,105,110,101,95,50,95,52,54,0);
         mbbannerx.set(`${usernameY}`, mbbannerx.size - 1);
      let windE = String.fromCharCode(52,102,108,101,56,109,0) == usernameY;
      do {
          let proxyu = String.fromCharCode(108,95,52,52,95,105,110,99,108,117,115,105,111,110,0);
          let circled = 0.0;
         usernameY += `${3 + mbbannerx.size}`;
         proxyu = `${1 * proxyu.length}`;
         circled /= Math.max(parseFloat(`${parseInt(`${circled}`) ^ 2}`), 4);
         if (windE) {
            break;
         }
      } while ((usernameY.length == 2) && windE);
      while (usernameY.includes(`${mbbannerx.size}`)) {
         mbbannerx.set(usernameY, usernameY.length);
         break;
      }
      if ((mbbannerx.size ^ 1) == 3 && (1 ^ usernameY.length) == 5) {
         mbbannerx = new Map([[`${mbbannerx.size}`, (usernameY == String.fromCharCode(55,0) ? mbbannerx.size : usernameY.length)]]);
      }
      for (let l = 0; l < 3; l++) {
         usernameY = `${mbbannerx.size % 2}`;
      }
      while ((mbbannerx.size | usernameY.length) < 1 && (usernameY.length | 1) < 3) {
         mbbannerx = new Map([[`${mbbannerx.size}`, mbbannerx.size]]);
         break;
      }
      tumbnailZ += `${sendm.length & 1}`;
   }

      

      gifgoalbgk += `${parseInt(`${mathN}`)}`;
      

      iconclosewhiteu -= 1 + awayplayerh;
      

      iconarrowrightorangeI += "2";
      

      awayplayerh += parseInt(`${iconclosewhiteu}`) % (Math.max(statsg.length, 7));

      

   for (let p = 0; p < 2; p++) {
       let mergerE = String.fromCharCode(97,95,53,56,95,108,111,111,115,101,0);
       let reactnativeultimatelistviews = 5;
       let source3 = String.fromCharCode(113,95,49,51,95,115,117,109,109,97,114,121,0);
       let singlej = 4.0;
         singlej /= Math.max(parseInt(`${singlej}`), 3);
         source3 += `${1 / (Math.max(9, parseInt(`${singlej}`)))}`;
         singlej /= Math.max(reactnativeultimatelistviews ^ 1, 3);
       let stations2 = String.fromCharCode(108,105,109,105,116,95,54,95,49,49,0);
      let small3 = stations2.length >= 7630906;
      do {
         stations2 += "3";
         if (small3) {
            break;
         }
      } while (small3 && (!stations2.startsWith(`${singlej}`)));
      if (4.100 >= singlej) {
         singlej *= mergerE.length;
      }
      for (let v = 0; v < 1; v++) {
         source3 += "2";
      }
         mergerE = `${mergerE.length * 3}`;
      if (mergerE.length <= 2) {
          let librrcR = false;
          let encrypt9: Array<any> = [123, 894];
         mergerE = "2";
         librrcR = (6 > (encrypt9.length % (Math.max(9, (!librrcR ? encrypt9.length : 6)))));
      }
         singlej *= parseInt(`${singlej}`);
      while (mergerE.length == stations2.length) {
         stations2 = `${(String.fromCharCode(86,0) == mergerE ? mergerE.length : parseInt(`${singlej}`))}`;
         break;
      }
      while (mergerE != String.fromCharCode(120,0) || stations2 == String.fromCharCode(82,0)) {
          let tempnodatagifO = String.fromCharCode(104,119,97,99,99,101,108,115,95,54,95,52,54,0);
          let reactnavigationC = 1.0;
          let fastforwardt = String.fromCharCode(103,101,110,101,114,105,99,115,95,99,95,57,54,0);
          let fillR = 1.0;
         mergerE += `${(fastforwardt == String.fromCharCode(109,0) ? fastforwardt.length : parseInt(`${reactnavigationC}`))}`;
         tempnodatagifO = `${parseInt(`${fillR}`)}`;
         reactnavigationC += parseFloat(`${tempnodatagifO.length}`);
         fillR -= (String.fromCharCode(68,0) == tempnodatagifO ? parseInt(`${fillR}`) : tempnodatagifO.length);
         break;
      }
      libreactnativeblob7 /= Math.max(parseFloat(`${reactnativeultimatelistviews}`), 2);
   }
      

      iconarrowrightorangeI = `${(String.fromCharCode(106,0) == videovarj ? videovarj.length : parseInt(`${libreactnativeblob7}`))}`;

      let deviceName = await DeviceInfo.getDeviceName();

      iconclosewhiteu += (String.fromCharCode(66,0) == tumbnailZ ? awayplayerh : tumbnailZ.length);
      if (deviceBrand === "HUAWEI" && /p\d+/i.test(deviceName)) {

   for (let h = 0; h < 1; h++) {
      mathN -= parseFloat(`${2}`);
   }
        

   for (let g = 0; g < 3; g++) {
       let zhengpianT = 4.0;
       let bgvipxvodD = String.fromCharCode(122,95,49,54,95,105,110,116,101,114,118,97,108,0);
       let yellowM = String.fromCharCode(98,108,97,99,107,115,95,119,95,51,52,0);
       let nterstitial_ = 3.0;
      if ((nterstitial_ / 2.11) >= 4.18 && (3 % (Math.max(2, yellowM.length))) >= 3) {
          let gifgoalW = 3.0;
          let screenm = String.fromCharCode(115,119,105,122,122,108,101,100,95,110,95,55,56,0);
          let views1: Map<any, any> = new Map([[String.fromCharCode(105,95,51,57,95,110,105,115,116,122,0),168], [String.fromCharCode(114,95,55,51,95,97,117,116,111,114,101,115,105,122,105,110,103,0),560]]);
          let templateprocessorv: Array<any> = [859, 617, 218];
          let anythink7 = true;
         nterstitial_ -= parseFloat(`${1}`);
         gifgoalW += parseFloat(`${screenm.length / (Math.max(4, views1.size))}`);
         screenm += `${3 % (Math.max(parseInt(`${gifgoalW}`), 9))}`;
         views1 = new Map([[`${views1.size}`, 2]]);
         templateprocessorv = [screenm.length];
         anythink7 = !anythink7;
      }
         yellowM = "1";
         bgvipxvodD = `${bgvipxvodD.length ^ parseInt(`${zhengpianT}`)}`;
      for (let l = 0; l < 3; l++) {
          let indexS = String.fromCharCode(99,97,108,105,98,114,97,116,101,100,95,56,95,57,57,0);
          let iconsaveimage8 = String.fromCharCode(117,114,108,100,101,99,111,100,101,95,102,95,57,52,0);
          let awayicon2: Array<any> = [526, 689];
         nterstitial_ -= (parseFloat(`${String.fromCharCode(55,0) == bgvipxvodD ? bgvipxvodD.length : indexS.length}`));
         indexS += `${awayicon2.length}`;
         iconsaveimage8 = "2";
         awayicon2 = [1 - awayicon2.length];
      }
      let downloadingr = 6200132.0 >= zhengpianT;
      do {
         zhengpianT -= yellowM.length * bgvipxvodD.length;
         if (downloadingr) {
            break;
         }
      } while (downloadingr && ((3.29 + zhengpianT) >= 4.34 && (bgvipxvodD.length * 3) >= 4));
       let videojsR = String.fromCharCode(116,111,111,108,98,97,114,115,95,119,95,49,53,0);
       let imagenetworkerre = String.fromCharCode(112,114,101,112,97,114,101,95,118,95,53,49,0);
         videojsR = `${parseInt(`${nterstitial_}`)}`;
      for (let o = 0; o < 1; o++) {
          let renewx = String.fromCharCode(115,95,54,53,95,97,117,103,109,101,110,116,0);
         nterstitial_ += parseFloat(`${parseInt(`${zhengpianT}`)}`);
         renewx += `${renewx.length | renewx.length}`;
      }
          let penaltyshootnogoalK = String.fromCharCode(100,110,115,110,97,109,101,95,121,95,56,57,0);
          let backiconmaskN = String.fromCharCode(121,95,54,49,95,112,114,122,112,0);
          let finit_15P = String.fromCharCode(103,95,52,50,95,115,108,117,103,0);
         videojsR = `${2 - videojsR.length}`;
         penaltyshootnogoalK += `${backiconmaskN.length % (Math.max(penaltyshootnogoalK.length, 8))}`;
         backiconmaskN += `${finit_15P.length >> (Math.min(Math.abs(2), 1))}`;
         finit_15P += "2";
         yellowM = `${1 / (Math.max(2, imagenetworkerre.length))}`;
         yellowM = `${yellowM.length + videojsR.length}`;
         videojsR = `${3 % (Math.max(5, parseInt(`${zhengpianT}`)))}`;
      statsg += `${2 + yellowM.length}`;
   }
        let deviceHeight = Dimensions.get("screen").height;

      iconarrowrightorangeI = `${combine5.size}`;
        let windowHeight = Dimensions.get("window").height;

   if (gifgoalbgk.length <= 1) {
      iconarrowrightorangeI += "1";
   }
        let sH = StatusBar.currentHeight || 0;

   while ((calendarh - 1.47) <= 1.90 && (calendarh - 1.47) <= 3.100) {
      iconclosewhiteu -= parseInt(`${libreactnativeblob7}`) | 3;
      break;
   }
        let bottomNavBarHeight = deviceHeight - windowHeight - sH;

   for (let w = 0; w < 1; w++) {
       let notificationI: Map<any, any> = new Map([[String.fromCharCode(103,95,50,50,95,115,116,114,105,114,101,112,108,97,99,101,0),130], [String.fromCharCode(99,114,111,112,112,101,100,95,115,95,52,0),655]]);
       let w_viewI = 0;
       let unfillz = String.fromCharCode(101,110,99,111,100,101,102,114,97,109,101,95,51,95,53,52,0);
       let short_i2F = false;
       let catalogW = String.fromCharCode(122,95,56,51,95,108,105,109,105,116,115,0);
         catalogW = `${unfillz.length - w_viewI}`;
         unfillz = `${notificationI.size}`;
      for (let e = 0; e < 1; e++) {
          let logouserT = String.fromCharCode(116,95,54,56,95,101,98,117,108,97,115,0);
          let user5: Map<any, any> = new Map([[String.fromCharCode(99,95,54,51,95,108,111,111,107,0),String.fromCharCode(99,104,97,110,103,101,95,56,95,52,55,0)], [String.fromCharCode(108,97,116,105,116,117,100,101,95,106,95,57,53,0),String.fromCharCode(101,120,112,108,105,99,105,116,108,121,95,117,95,50,48,0)]]);
          let routerc = 0.0;
          let homeplayerZ = String.fromCharCode(114,95,56,56,95,112,114,111,114,101,115,100,101,99,0);
         catalogW = `${(catalogW == String.fromCharCode(79,0) ? catalogW.length : w_viewI)}`;
         logouserT += `${user5.size * 3}`;
         user5.set(logouserT, homeplayerZ.length * 2);
         routerc += parseFloat(`${homeplayerZ.length | 2}`);
      }
      while (1 > w_viewI) {
         notificationI = new Map([[`${short_i2F}`, ((short_i2F ? 2 : 4))]]);
         break;
      }
      for (let q = 0; q < 3; q++) {
         unfillz = `${1 - unfillz.length}`;
      }
         short_i2F = !short_i2F;
         catalogW += `${catalogW.length - 2}`;
          let promotion0 = String.fromCharCode(101,120,116,114,97,100,97,116,97,99,111,110,102,105,103,95,117,95,56,49,0);
         notificationI = new Map([[`${short_i2F}`, unfillz.length]]);
         promotion0 += `${promotion0.length}`;
       let backwhite3 = 5;
         backwhite3 &= ((short_i2F ? 4 : 5));
       let backwhiteh = String.fromCharCode(100,95,55,56,95,116,104,111,117,103,104,0);
       let turndownB = String.fromCharCode(122,95,49,48,48,95,115,111,114,116,0);
      if (unfillz != String.fromCharCode(121,0)) {
         turndownB += `${(turndownB == String.fromCharCode(50,0) ? turndownB.length : notificationI.size)}`;
      }
          let leagueo = 0;
         turndownB = `${1 + backwhiteh.length}`;
         leagueo |= leagueo;
          let cornershoot2 = 0;
         w_viewI >>= Math.min(4, Math.abs(unfillz.length - w_viewI));
         cornershoot2 ^= 2;
      if (5 < unfillz.length) {
         unfillz = "3";
      }
      libreactnativeblob7 += parseFloat(`${w_viewI}`);
   }
        if (bottomNavBarHeight > 0) {

      combine5 = new Map([[gifgoalbgk, 2 % (Math.max(9, gifgoalbgk.length))]]);
          huaweiOffset = -95;
        } else {

      videovarj += `${parseInt(`${mathN}`) << (Math.min(2, Math.abs(2)))}`;
          huaweiOffset = 75;

      gifgoalbgk = `${parseInt(`${libreactnativeblob7}`)}`;
        }
      }

      const includesKeywords = [
        "flip",
        "fold",
        "mate x3",
        "mate xs",
      ].some((keyword) => deviceName.includes(keyword));

      statsg = `${parseInt(`${calendarh}`)}`;

      let tabletOffset = 0;

   for (let d = 0; d < 1; d++) {
      combine5 = new Map([[`${libreactnativeblob7}`, parseInt(`${libreactnativeblob7}`) | parseInt(`${calendarh}`)]]);
   }
      if (DeviceInfo.isTablet() || includesKeywords) {

   let condensedN = 6190515.0 >= mathN;
   do {
      mathN /= Math.max(1, parseFloat(`${gifgoalbgk.length}`));
      if (condensedN) {
         break;
      }
   } while (condensedN && ((libreactnativeblob7 - 5.48) == 5.87 || 1.87 == (mathN - 5.48)));
        let sH = StatusBar.currentHeight || 0;

   let libzeus1 = 9372135 <= tumbnailZ.length;
   do {
      tumbnailZ = `${parseInt(`${mathN}`) & awayplayerh}`;
      if (libzeus1) {
         break;
      }
   } while ((tumbnailZ.length == 1) && libzeus1);
        tabletOffset = 60;

   let wifirouterp = gifgoalbgk == String.fromCharCode(101,114,51,120,110,0);
   do {
       let baiduadsf = String.fromCharCode(114,95,56,95,105,110,116,101,108,0);
         baiduadsf += `${baiduadsf.length | baiduadsf.length}`;
         baiduadsf = `${baiduadsf.length}`;
      for (let h = 0; h < 3; h++) {
         baiduadsf += `${(baiduadsf == String.fromCharCode(84,0) ? baiduadsf.length : baiduadsf.length)}`;
      }
      gifgoalbgk += `${3 & parseInt(`${iconclosewhiteu}`)}`;
      if (wifirouterp) {
         break;
      }
   } while (((gifgoalbgk.length * parseInt(`${iconclosewhiteu}`)) > 1) && wifirouterp);
      }

      let x, y, width, height;

       let megaphoneG = 3.0;
      let reactB = megaphoneG >= 7609918.0;
      do {
         megaphoneG *= parseFloat(`${3 / (Math.max(parseInt(`${megaphoneG}`), 10))}`);
         if (reactB) {
            break;
         }
      } while (reactB && ((megaphoneG + 3.12) >= 2.11 || 3.12 >= (megaphoneG + megaphoneG)));
         megaphoneG *= parseFloat(`${parseInt(`${megaphoneG}`)}`);
      while (megaphoneG == 2.38) {
         megaphoneG -= parseFloat(`${parseInt(`${megaphoneG}`) / 1}`);
         break;
      }
      libreactnativeblob7 += parseFloat(`${parseInt(`${mathN}`)}`);
      x = 0;

   for (let k = 0; k < 3; k++) {
       let icondownimgs = String.fromCharCode(115,116,114,108,99,97,116,95,98,95,48,0);
       let gifgoalbgA = String.fromCharCode(99,108,97,110,103,95,115,95,49,53,0);
          let libfabricjni0: Array<any> = [908, 435];
          let unselectedO: Array<any> = [462, 129, 368];
         icondownimgs = `${gifgoalbgA.length}`;
         libfabricjni0 = [unselectedO.length];
         unselectedO = [1];
          let libpangleflippeds = String.fromCharCode(116,95,49,50,95,100,105,109,109,101,100,0);
          let footballfiledlayoutb = false;
          let clearS = String.fromCharCode(112,95,53,51,95,110,101,103,111,116,105,97,116,101,100,0);
         icondownimgs += `${icondownimgs.length - gifgoalbgA.length}`;
         libpangleflippeds += `${libpangleflippeds.length}`;
         footballfiledlayoutb = libpangleflippeds.endsWith(`${footballfiledlayoutb}`);
         clearS = `${((footballfiledlayoutb ? 3 : 4) & libpangleflippeds.length)}`;
         icondownimgs += `${icondownimgs.length}`;
       let customP = 2;
      while (1 <= (4 & icondownimgs.length) && 4 <= (icondownimgs.length & customP)) {
         customP -= customP ^ 1;
         break;
      }
         customP += gifgoalbgA.length + 3;
      statsg += `${parseInt(`${calendarh}`)}`;
   }
      let bannerHeightOnScreen =
        adsTopInPixel -
        TOPON_BANNER_HEIGHT * scale +
        huaweiOffset +
        tabletOffset;

       let predictionbannerN = 2;
      for (let o = 0; o < 1; o++) {
          let loadingz = 2.0;
          let filter7 = String.fromCharCode(99,111,108,108,101,99,116,95,113,95,54,55,0);
         predictionbannerN &= filter7.length;
         loadingz *= parseFloat(`${parseInt(`${loadingz}`) << (Math.min(Math.abs(parseInt(`${loadingz}`)), 4))}`);
         filter7 += `${parseInt(`${loadingz}`)}`;
      }
      while ((4 | predictionbannerN) == 1) {
          let tumbnail_ = String.fromCharCode(118,95,51,50,95,102,105,108,116,101,114,0);
          let materialG: Array<any> = [String.fromCharCode(108,97,121,115,95,53,95,51,50,0), String.fromCharCode(110,95,53,52,95,99,111,109,109,105,116,0)];
         predictionbannerN ^= tumbnail_.length ^ 2;
         tumbnail_ += `${materialG.length >> (Math.min(Math.abs(3), 3))}`;
         materialG.push(1 | materialG.length);
         break;
      }
      if (3 > (predictionbannerN / (Math.max(3, predictionbannerN))) && 3 > (3 / (Math.max(2, predictionbannerN)))) {
         predictionbannerN *= predictionbannerN;
      }
      videovarj = `${floateri.length}`;
      if (pageNoNavbar.includes(route)) {

       let subbasketballplayery = 4.0;
       let comment0 = 0;
       let halfm = String.fromCharCode(118,95,55,53,95,103,114,111,117,112,105,110,103,0);
      for (let z = 0; z < 1; z++) {
          let iconlogoutQ = 0.0;
          let reactk = String.fromCharCode(112,95,57,54,95,111,99,99,117,112,105,101,100,0);
          let bellreminderd: Map<any, any> = new Map([[String.fromCharCode(99,95,52,52,95,109,97,115,107,0),String.fromCharCode(116,95,55,48,95,101,121,99,104,97,105,110,0)], [String.fromCharCode(112,95,56,95,112,114,101,99,97,108,99,0),String.fromCharCode(103,95,54,57,95,115,99,97,110,120,0)]]);
          let streamingb: Array<any> = [253, 589, 271];
          let basketballiconl = false;
         comment0 >>= Math.min(Math.abs(2 * halfm.length), 4);
         iconlogoutQ -= parseFloat(`${1}`);
         reactk = `${streamingb.length}`;
         bellreminderd = new Map([[reactk, reactk.length]]);
         streamingb.push(parseInt(`${iconlogoutQ}`) - bellreminderd.size);
      }
      let whiteanimationliveH = comment0 <= 6229050;
      do {
         comment0 &= comment0 - parseInt(`${subbasketballplayery}`);
         if (whiteanimationliveH) {
            break;
         }
      } while ((subbasketballplayery >= 5.43) && whiteanimationliveH);
      while (3.20 <= (comment0 - subbasketballplayery) || (subbasketballplayery - 3.20) <= 5.92) {
          let coref = String.fromCharCode(111,95,50,55,95,99,108,97,115,104,101,100,0);
          let submitk: Array<any> = [796, 94, 918];
         comment0 |= halfm.length >> (Math.min(4, Math.abs(parseInt(`${subbasketballplayery}`))));
         coref += `${submitk.length}`;
         submitk.push(3 * submitk.length);
         break;
      }
       let libfollyM: Map<any, any> = new Map([[String.fromCharCode(97,99,114,111,110,121,109,115,95,115,95,49,50,0),679], [String.fromCharCode(114,95,54,55,95,111,110,110,101,99,116,105,111,110,0),186], [String.fromCharCode(100,105,105,110,95,102,95,50,55,0),890]]);
       let fastH: Map<any, any> = new Map([[String.fromCharCode(110,95,54,55,95,100,121,110,97,109,105,99,115,0),168], [String.fromCharCode(106,95,50,50,95,115,121,110,111,110,121,109,0),236], [String.fromCharCode(107,95,51,52,95,118,105,115,105,98,105,108,105,116,121,0),533]]);
         comment0 ^= libfollyM.size;
      for (let c = 0; c < 1; c++) {
         libfollyM = new Map([[`${fastH.size}`, libfollyM.size << (Math.min(Math.abs(1), 1))]]);
      }
      if (subbasketballplayery > comment0) {
          let refreshborderless2 = String.fromCharCode(102,95,55,54,95,105,110,99,111,109,105,110,103,0);
          let downloadz = false;
          let shrinkE = String.fromCharCode(119,97,118,101,115,95,118,95,55,54,0);
         subbasketballplayery += 2;
         refreshborderless2 += `${refreshborderless2.length - 2}`;
         downloadz = refreshborderless2 == shrinkE;
         shrinkE += "3";
      }
         halfm += "2";
      let whiteanimationlive5 = 8705966 >= halfm.length;
      do {
         halfm += `${parseInt(`${subbasketballplayery}`) / (Math.max(libfollyM.size, 9))}`;
         if (whiteanimationlive5) {
            break;
         }
      } while ((3 >= (halfm.length | comment0) && 3 >= (comment0 | halfm.length)) && whiteanimationlive5);
      libreactnativeblob7 /= Math.max(4, parseFloat(`${combine5.size}`));
        bannerHeightOnScreen += navbarHeightInPixel;
        
        
        
      }

      y = bannerHeightOnScreen;

   for (let u = 0; u < 1; u++) {
      videovarj += `${(String.fromCharCode(117,0) == videovarj ? videovarj.length : sendm.length)}`;
   }
      width = screenWidthInPixel;

       let iconwatchnowU = 5.0;
         iconwatchnowU += parseFloat(`${2}`);
         iconwatchnowU -= parseFloat(`${parseInt(`${iconwatchnowU}`)}`);
          let runtimed = 2.0;
         iconwatchnowU *= parseFloat(`${2 * parseInt(`${iconwatchnowU}`)}`);
         runtimed += parseInt(`${runtimed}`);
      statsg = `${parseInt(`${iconwatchnowU}`) & 1}`;
      height = TOPON_BANNER_HEIGHT * scale;

   while (parseInt(`${mathN}`) <= tumbnailZ.length) {
       let ballw: Array<any> = [String.fromCharCode(117,110,104,105,100,101,95,114,95,55,51,0), String.fromCharCode(109,97,99,104,105,110,101,95,50,95,54,53,0)];
       let canvasc: Map<any, any> = new Map([[String.fromCharCode(98,95,55,51,95,110,101,116,101,113,0),String.fromCharCode(97,115,107,105,110,103,95,122,95,49,56,0)], [String.fromCharCode(117,112,112,101,114,95,105,95,53,0),String.fromCharCode(114,95,55,95,99,114,111,112,0)]]);
         ballw.push(ballw.length * canvasc.size);
      for (let n = 0; n < 1; n++) {
         ballw = [canvasc.size * ballw.length];
      }
       let selectedG: Map<any, any> = new Map([[String.fromCharCode(105,109,112,111,114,116,101,114,95,118,95,51,57,0),969], [String.fromCharCode(115,108,111,119,101,115,116,95,98,95,56,48,0),694]]);
       let modulek: Map<any, any> = new Map([[String.fromCharCode(99,95,56,56,95,106,117,103,103,108,101,0),188], [String.fromCharCode(106,95,49,50,95,110,105,115,116,112,0),940]]);
         canvasc.set(`${canvasc.size}`, modulek.size / 2);
      while (canvasc.get(`${ballw.length}`) != null) {
         canvasc.set(`${ballw.length}`, ballw.length);
         break;
      }
         ballw = [selectedG.size];
      mathN -= (parseFloat(`${String.fromCharCode(70,0) == gifgoalbgk ? gifgoalbgk.length : parseInt(`${mathN}`)}`));
      break;
   }
      

      tumbnailZ += `${floateri.length + gifgoalbgk.length}`;

      

      sendm = [parseInt(`${iconclosewhiteu}`)];
      
      

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
      if (!wawaLibglog.isVip(userState.user)) {
        
        
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
