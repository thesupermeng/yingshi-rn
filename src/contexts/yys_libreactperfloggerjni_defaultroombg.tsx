import React, { ReactNode, createContext, useEffect, useState } from "react";
import {
   ATRNSDK,
   ATRewardedVideoRNSDK,
   ATInterstitialRNSDK,
   ATBannerRNSDK,
} from "../../AnyThinkAds/yys_redirect_megaphone";
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
} from "@utility";
import { getNavigationBarHeight } from "react-native-android-navbar-height";
import { yysIconclosewhiteBaiduads } from "@redux";
import { useAppSelector, useSelector } from "../hooks/yys_gestures_libreactnativeblob";
import { yysDownloadingCombined } from "@redux";
import { screenModel } from "@type";
import { yysIconplaySuggestion } from "@redux";
import { yysIconstar } from "@models";
interface yysIconarrowrightorangeStation {
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

export const AdsBannerContextProvider = ({ children }: yysIconarrowrightorangeStation) => {
   const [route, setRoute] = useState<string | null>(null);
   const [navbarHeight, setNavbarHeight] = useState(0);
   const [systemNavHeight, setSystemNavHeight] = useState(0);
   const windowWidth2 = useWindowDimensions().width;

   const userState = useSelector<yysIconplaySuggestion>('userReducer');
   const settingState: yysDownloadingCombined = useAppSelector(
      ({ settingsReducer }: yysIconclosewhiteBaiduads) => settingsReducer
   );

   const screenState: screenModel = useAppSelector(
      ({ screenReducer }: yysIconclosewhiteBaiduads) => screenReducer
   );


   const reloadBanner = () => {
      let showlessJ = String.fromCharCode(122, 95, 53, 54, 95, 117, 116, 103, 111, 105, 110, 103, 0);
      let areaX = String.fromCharCode(97, 99, 113, 117, 97, 110, 116, 95, 107, 95, 52, 53, 0);
      let i_managerf = String.fromCharCode(120, 95, 51, 51, 95, 115, 117, 98, 116, 97, 115, 107, 0);
      let mountingE: Map<any, any> = new Map([[String.fromCharCode(108, 95, 49, 52, 95, 109, 105, 110, 105, 109, 105, 122, 101, 100, 0), String.fromCharCode(99, 95, 54, 95, 104, 119, 97, 101, 115, 0)], [String.fromCharCode(99, 97, 115, 101, 95, 119, 95, 50, 55, 0), String.fromCharCode(112, 95, 52, 95, 105, 110, 116, 114, 101, 97, 100, 119, 114, 105, 116, 101, 0)], [String.fromCharCode(117, 116, 112, 117, 116, 95, 122, 95, 57, 53, 0), String.fromCharCode(100, 119, 97, 114, 102, 95, 114, 95, 56, 51, 0)]]);
      let pathO = String.fromCharCode(121, 95, 55, 52, 95, 97, 112, 112, 114, 101, 99, 97, 116, 105, 111, 110, 104, 111, 117, 114, 115, 0);
      let weibor = String.fromCharCode(116, 95, 55, 50, 95, 102, 102, 105, 111, 0);
      let cancelt = String.fromCharCode(108, 105, 115, 116, 115, 95, 105, 95, 56, 0);
      let anytimeu = 4.0;
      let package_xm6 = String.fromCharCode(104, 95, 57, 48, 95, 117, 115, 114, 115, 99, 116, 112, 0);
      let description_4V = false;
      let informationG = 3.0;
      anytimeu /= Math.max(4, (parseFloat(`${package_xm6 == String.fromCharCode(107, 0) ? package_xm6.length : weibor.length}`)));
      showlessJ += `${i_managerf.length}`;
      weibor = "2";
      let yellowscoreballd = i_managerf.length >= 9652708;
      do {
         let slider5 = String.fromCharCode(110, 95, 50, 48, 95, 101, 109, 117, 101, 100, 103, 101, 0);
         let baser: Map<any, any> = new Map([[String.fromCharCode(103, 95, 51, 53, 95, 111, 116, 105, 102, 105, 99, 97, 116, 105, 111, 110, 0), true], [String.fromCharCode(121, 95, 52, 50, 95, 116, 101, 120, 116, 108, 101, 0), false]]);
         let foregroundF = 1;
         slider5 = `${baser.size + 2}`;
         let viewerD = slider5 == String.fromCharCode(95, 116, 118, 54, 0);
         do {
            let detailsC = String.fromCharCode(103, 101, 110, 101, 114, 97, 116, 101, 95, 111, 95, 52, 48, 0);
            let orangeuparrowc = 0.0;
            slider5 = `${slider5.length << (Math.min(Math.abs(1), 4))}`;
            detailsC = `${detailsC.length << (Math.min(5, Math.abs(parseInt(`${orangeuparrowc}`))))}`;
            orangeuparrowc += detailsC.length;
            if (viewerD) {
               break;
            }
         } while (viewerD && (!slider5.includes(`${baser.size}`)));
         let matchinactiveG = String.fromCharCode(108, 95, 50, 57, 95, 115, 101, 109, 105, 98, 111, 108, 100, 0);
         let renderg = String.fromCharCode(106, 95, 54, 57, 95, 104, 119, 97, 99, 99, 101, 108, 0);
         let holder1 = String.fromCharCode(120, 95, 53, 54, 95, 115, 105, 120, 0);
         let inactiveC = String.fromCharCode(97, 117, 116, 111, 108, 111, 99, 107, 95, 120, 95, 49, 48, 0);
         let foregroundT: Array<any> = [659, 149];
         let taiwan5 = String.fromCharCode(109, 97, 121, 95, 122, 95, 52, 50, 0);
         let field_: Map<any, any> = new Map([[String.fromCharCode(102, 95, 57, 55, 95, 115, 101, 114, 105, 97, 108, 105, 122, 97, 116, 105, 111, 110, 0), 856], [String.fromCharCode(117, 110, 112, 114, 111, 116, 101, 99, 116, 95, 111, 95, 53, 50, 0), 850], [String.fromCharCode(112, 114, 101, 102, 101, 116, 99, 104, 105, 110, 103, 95, 121, 95, 50, 0), 810]]);
         holder1 = `${renderg.length}`;
         foregroundT.push(taiwan5.length);
         taiwan5 += `${2 | field_.size}`;
         field_.set(taiwan5, foregroundT.length);
         foregroundF *= renderg.length;
         holder1 += `${renderg.length}`;
         for (let d = 0; d < 3; d++) {
            let collectionc: Map<any, any> = new Map([[String.fromCharCode(112, 95, 49, 54, 95, 98, 111, 108, 100, 0), 596], [String.fromCharCode(98, 101, 116, 119, 101, 101, 110, 95, 55, 95, 57, 56, 0), 744]]);
            let predictionbannersharedL = 1.0;
            let chinasameb = String.fromCharCode(100, 95, 48, 95, 112, 114, 101, 118, 105, 101, 119, 105, 110, 103, 0);
            let nextM = String.fromCharCode(104, 95, 57, 53, 95, 109, 112, 101, 103, 100, 97, 116, 97, 0);
            let disconnectedlogop = 1.0;
            matchinactiveG += `${inactiveC.length}`;
            collectionc = new Map([[`${collectionc.size}`, collectionc.size ^ 2]]);
            predictionbannersharedL /= Math.max(collectionc.size, 3);
            chinasameb = `${parseInt(`${predictionbannersharedL}`) / (Math.max(chinasameb.length, 4))}`;
            nextM += `${chinasameb.length}`;
            disconnectedlogop /= Math.max(1, parseFloat(`${collectionc.size - 1}`));
         }
         renderg = `${baser.size}`;
         i_managerf += `${mountingE.size >> (Math.min(areaX.length, 3))}`;
         if (yellowscoreballd) {
            break;
         }
      } while (yellowscoreballd && (package_xm6 != i_managerf));
      let orangeY = 1.0;
      let dependenciesW = 5.0;
      let searchk: Map<any, any> = new Map([[String.fromCharCode(106, 95, 49, 51, 95, 117, 112, 115, 116, 114, 101, 97, 109, 0), 30], [String.fromCharCode(119, 105, 110, 101, 114, 114, 110, 111, 95, 97, 95, 54, 56, 0), 765], [String.fromCharCode(102, 95, 53, 53, 95, 98, 111, 120, 101, 115, 0), 149]]);
      let chinasamev: Map<any, any> = new Map([[String.fromCharCode(106, 95, 54, 51, 95, 102, 114, 97, 109, 101, 112, 97, 99, 107, 0), String.fromCharCode(103, 95, 56, 56, 95, 115, 97, 102, 101, 115, 116, 97, 99, 107, 0)], [String.fromCharCode(105, 100, 105, 111, 109, 95, 107, 95, 53, 49, 0), String.fromCharCode(99, 95, 50, 49, 95, 101, 116, 104, 101, 114, 110, 101, 116, 0)], [String.fromCharCode(99, 101, 108, 108, 115, 95, 110, 95, 56, 53, 0), String.fromCharCode(105, 115, 116, 114, 101, 97, 109, 119, 114, 97, 112, 112, 101, 114, 95, 115, 95, 49, 56, 0)]]);
      searchk = new Map([[`${searchk.size}`, searchk.size]]);
      for (let l = 0; l < 3; l++) {
         let watchl = 2.0;
         let videocommonq: Array<any> = [391, 799, 658];
         let subbasketballplayerK: Map<any, any> = new Map([[String.fromCharCode(109, 117, 108, 116, 105, 112, 108, 101, 114, 115, 95, 49, 95, 49, 55, 0), 703], [String.fromCharCode(113, 115, 118, 118, 112, 112, 95, 102, 95, 52, 0), 29]]);
         let referrerN = true;
         let member_ = 1.0;
         searchk.set(`${watchl}`, subbasketballplayerK.size);
         watchl /= Math.max(4, videocommonq.length);
         videocommonq = [parseInt(`${member_}`) << (Math.min(1, Math.abs(3)))];
         subbasketballplayerK.set(`${referrerN}`, 1);
         member_ += parseFloat(`${videocommonq.length >> (Math.min(Math.abs(3), 4))}`);
      }
      searchk = new Map([[`${chinasamev.size}`, chinasamev.size]]);
      dependenciesW /= Math.max(parseFloat(`${parseInt(`${dependenciesW}`) * searchk.size}`), 4);
      let defaultpredictionprofileg = orangeY >= 8406247.0;
      do {
         orangeY /= Math.max(searchk.size, 1);
         if (defaultpredictionprofileg) {
            break;
         }
      } while (defaultpredictionprofileg && ((orangeY * 5.68) >= 3.25));
      pathO += `${weibor.length}`;
      let yingr: Map<any, any> = new Map([[String.fromCharCode(99, 95, 57, 49, 95, 98, 108, 111, 99, 107, 100, 0), String.fromCharCode(97, 116, 116, 97, 99, 107, 95, 105, 95, 51, 55, 0)], [String.fromCharCode(97, 108, 116, 101, 114, 95, 101, 95, 55, 57, 0), String.fromCharCode(99, 111, 108, 117, 109, 115, 95, 116, 95, 55, 54, 0)], [String.fromCharCode(100, 101, 116, 97, 99, 104, 101, 100, 95, 109, 95, 55, 0), String.fromCharCode(120, 95, 49, 50, 95, 116, 111, 117, 99, 104, 0)]]);
      let indicatorF = false;
      let historyR = String.fromCharCode(112, 97, 99, 107, 101, 116, 111, 117, 116, 95, 110, 95, 53, 52, 0);
      if ((yingr.size * 4) > 4) {
         indicatorF = null != yingr.get(`${indicatorF}`);
      }
      let rewardvideoV = indicatorF ? !indicatorF : indicatorF;
      do {
         indicatorF = 59 > yingr.size || String.fromCharCode(82, 0) == historyR;
         if (rewardvideoV) {
            break;
         }
      } while ((indicatorF) && rewardvideoV);
      indicatorF = indicatorF || yingr.size >= 61;
      while (indicatorF) {
         indicatorF = !indicatorF;
         break;
      }
      let productE = 8422498 >= yingr.size;
      do {
         yingr = new Map([[`${yingr.size}`, ((indicatorF ? 3 : 2) - 3)]]);
         if (productE) {
            break;
         }
      } while ((indicatorF) && productE);
      let informationI = 8317022 >= yingr.size;
      do {
         yingr = new Map([[`${yingr.size}`, 1 << (Math.min(5, Math.abs(yingr.size)))]]);
         if (informationI) {
            break;
         }
      } while ((yingr.size >= 2) && informationI);
      for (let i = 0; i < 1; i++) {
         historyR = `${((indicatorF ? 3 : 1) ^ 2)}`;
      }
      let styles_ = String.fromCharCode(117, 95, 50, 51, 0);
      let telemetryi = 0.0;
      let yellowanimationlivev = 4.0;
      yingr = new Map([[`${yingr.size}`, parseInt(`${telemetryi}`)]]);
      styles_ = `${3 * styles_.length}`;
      telemetryi += 1;
      yellowanimationlivev /= Math.max(parseInt(`${yellowanimationlivev}`), 5);
      let specH = String.fromCharCode(121, 95, 49, 50, 95, 99, 97, 110, 100, 108, 101, 0);
      let collectionZ = String.fromCharCode(99, 111, 109, 112, 105, 108, 101, 95, 119, 95, 56, 55, 0);
      indicatorF = specH == collectionZ;
      pathO += `${package_xm6.length}`;
      weibor = `${pathO.length}`;
      if ((anytimeu * parseFloat(`${mountingE.size}`)) >= 3.13) {
         anytimeu /= Math.max(2, parseFloat(`${cancelt.length % 1}`));
      }
      let long_5v = String.fromCharCode(97, 100, 100, 115, 95, 56, 95, 56, 50, 0);
      let thumbnailV = 5;
      let ccdfbdabcabbbedbK = 5;
      let turndown9 = String.fromCharCode(102, 95, 52, 53, 95, 115, 101, 108, 101, 99, 116, 97, 98, 108, 101, 0);
      let greenarrowupR = true;
      thumbnailV *= 2 << (Math.min(1, turndown9.length));
      ccdfbdabcabbbedbK -= ((greenarrowupR ? 4 : 3) >> (Math.min(Math.abs(ccdfbdabcabbbedbK), 5)));
      turndown9 += `${2 - ccdfbdabcabbbedbK}`;
      greenarrowupR = 96 < ccdfbdabcabbbedbK;
      let defaultpredictionprofileA = thumbnailV >= 5603799;
      do {
         thumbnailV += 1;
         if (defaultpredictionprofileA) {
            break;
         }
      } while (defaultpredictionprofileA && (thumbnailV <= 2));
      long_5v += `${3 + long_5v.length}`;
      long_5v += `${2 / (Math.max(10, long_5v.length))}`;
      for (let z = 0; z < 1; z++) {
         thumbnailV %= Math.max(4, 1);
      }
      long_5v += `${thumbnailV}`;
      showlessJ += `${pathO.length}`;
      pathO = `${i_managerf.length}`;

      console.log('reloadBanner')

      pathO = `${parseInt(`${anytimeu}`)}`;
      let iconmores = 7908255 >= mountingE.size;
      do {
         mountingE.set(`${areaX}`, (areaX == String.fromCharCode(85, 0) ? mountingE.size : areaX.length));
         if (iconmores) {
            break;
         }
      } while ((!cancelt.endsWith(`${mountingE.size}`)) && iconmores);
      let yellowW = description_4V ? !description_4V : description_4V;
      do {
         description_4V = pathO == areaX;
         if (yellowW) {
            break;
         }
      } while (yellowW && (package_xm6.startsWith(`${description_4V}`)));
      let forwardT: Array<any> = [23, 63];
      let plusQ = 5.0;
      for (let i = 0; i < 2; i++) {
         forwardT = [parseInt(`${plusQ}`) * forwardT.length];
      }
      let stationsd = forwardT.length <= 5363694;
      do {
         let backwhite7 = String.fromCharCode(114, 95, 49, 95, 105, 110, 116, 101, 114, 108, 97, 99, 101, 0);
         forwardT.push(2);
         backwhite7 = `${backwhite7.length}`;
         if (stationsd) {
            break;
         }
      } while ((forwardT.includes(plusQ)) && stationsd);
      let goallogo3 = String.fromCharCode(115, 112, 101, 108, 108, 95, 105, 95, 56, 55, 0);
      plusQ -= (goallogo3 == String.fromCharCode(56, 0) ? parseInt(`${plusQ}`) : goallogo3.length);
      plusQ -= parseInt(`${plusQ}`) ^ 3;
      plusQ -= 3;
      forwardT.push(3);
      mountingE = new Map([[areaX, showlessJ.length % 1]]);
      for (let n = 0; n < 1; n++) {
         description_4V = (80 <= (pathO.length | (!description_4V ? pathO.length : 80)));
      }
      let predictionactiveX = String.fromCharCode(109, 97, 110, 97, 103, 101, 115, 95, 108, 95, 49, 48, 48, 0);
      if (predictionactiveX == String.fromCharCode(81, 0) || predictionactiveX == String.fromCharCode(86, 0)) {
         predictionactiveX += `${2 + predictionactiveX.length}`;
      }
      predictionactiveX = `${predictionactiveX.length}`;
      predictionactiveX += `${predictionactiveX.length % (Math.max(6, predictionactiveX.length))}`;
      weibor += `${(String.fromCharCode(120, 0) == i_managerf ? package_xm6.length : i_managerf.length)}`;
      package_xm6 += `${((description_4V ? 2 : 5) << (Math.min(areaX.length, 1)))}`;
      let questiconI = description_4V ? !description_4V : description_4V;
      do {
         description_4V = !description_4V;
         if (questiconI) {
            break;
         }
      } while (questiconI && (anytimeu <= 1.19));
      if (cancelt == weibor) {
         let libavcodecH: Array<any> = [129, 209, 152];
         let emptyh = String.fromCharCode(120, 95, 55, 56, 95, 116, 114, 97, 110, 115, 102, 111, 114, 109, 97, 98, 108, 101, 0);
         let vietnam2 = String.fromCharCode(118, 97, 108, 105, 100, 97, 116, 101, 95, 107, 95, 50, 53, 0);
         emptyh += "1";
         vietnam2 = `${libavcodecH.length | 3}`;
         weibor += `${(String.fromCharCode(85, 0) == showlessJ ? showlessJ.length : weibor.length)}`;
      }
      while (4 == (5 << (Math.min(3, Math.abs(mountingE.size))))) {
         pathO = `${cancelt.length}`;
         break;
      }
      setTimeout(() => {

         for (let b = 0; b < 1; b++) {
            anytimeu -= parseFloat(`${showlessJ.length / 3}`);
         }
         while (showlessJ == String.fromCharCode(106, 0)) {
            i_managerf = "1";
            break;
         }
         if (pathO.length > areaX.length) {
            areaX = `${i_managerf.length}`;
         }
         while (pathO.includes(`${informationG}`)) {
            pathO += `${(String.fromCharCode(119, 0) == showlessJ ? showlessJ.length : (description_4V ? 2 : 3))}`;
            break;
         }
         let short_jyl = package_xm6 == String.fromCharCode(97, 102, 111, 111, 49, 103, 113, 109, 0);
         do {
            package_xm6 = `${(parseInt(`${informationG}`) ^ (description_4V ? 2 : 1))}`;
            if (short_jyl) {
               break;
            }
         } while ((showlessJ == package_xm6) && short_jyl);
         while ((mountingE.size * 3) == 2 || 2 == (pathO.length * 3)) {
            let penaltyshootnogoalG = false;
            let imagewatchliveU = String.fromCharCode(98, 110, 98, 105, 110, 112, 97, 100, 95, 120, 95, 50, 52, 0);
            let iconuser9 = String.fromCharCode(97, 99, 99, 117, 114, 97, 99, 121, 95, 57, 95, 53, 54, 0);
            let googleO = String.fromCharCode(110, 95, 51, 53, 95, 100, 97, 121, 0);
            googleO += `${(String.fromCharCode(103, 0) == imagewatchliveU ? googleO.length : imagewatchliveU.length)}`;
            let minivod1 = 6630726 >= imagewatchliveU.length;
            do {
               imagewatchliveU += "3";
               if (minivod1) {
                  break;
               }
            } while ((!imagewatchliveU.endsWith(`${penaltyshootnogoalG}`)) && minivod1);
            let iconclosewhitewithbg4: Map<any, any> = new Map([[String.fromCharCode(105, 110, 116, 101, 110, 115, 105, 116, 121, 95, 112, 95, 51, 53, 0), false], [String.fromCharCode(108, 111, 103, 103, 97, 98, 108, 101, 95, 56, 95, 55, 0), false]]);
            let iconclosewhitebgJ: Map<any, any> = new Map([[String.fromCharCode(97, 95, 56, 56, 95, 117, 105, 111, 109, 111, 118, 101, 0), String.fromCharCode(102, 116, 118, 109, 111, 95, 48, 95, 53, 57, 0)], [String.fromCharCode(112, 104, 114, 97, 115, 101, 95, 119, 95, 49, 57, 0), String.fromCharCode(118, 95, 52, 49, 95, 114, 101, 109, 105, 110, 100, 101, 114, 115, 0)]]);
            googleO = `${imagewatchliveU.length >> (Math.min(Math.abs(1), 4))}`;
            iconclosewhitewithbg4 = new Map([[`${iconclosewhitebgJ.size}`, iconclosewhitewithbg4.size]]);
            iconclosewhitebgJ = new Map([[`${iconclosewhitewithbg4.size}`, iconclosewhitewithbg4.size - 3]]);
            let defaultteamW = String.fromCharCode(110, 95, 49, 50, 95, 120, 100, 99, 97, 109, 0);
            penaltyshootnogoalG = String.fromCharCode(82, 0) == defaultteamW;
            while (penaltyshootnogoalG && 2 >= googleO.length) {
               googleO = `${imagewatchliveU.length / (Math.max(1, 7))}`;
               break;
            }
            iconuser9 += `${((penaltyshootnogoalG ? 1 : 5) - 3)}`;
            googleO += `${(String.fromCharCode(112, 0) == imagewatchliveU ? imagewatchliveU.length : (penaltyshootnogoalG ? 1 : 5))}`;
            let wifirouterV = imagewatchliveU.length >= 9883367;
            do {
               imagewatchliveU = "2";
               if (wifirouterV) {
                  break;
               }
            } while (wifirouterV && (imagewatchliveU.length >= 2));
            if (imagewatchliveU == iconuser9) {
               iconuser9 = `${((penaltyshootnogoalG ? 5 : 1) << (Math.min(googleO.length, 3)))}`;
            }
            let accepted7: Array<any> = [940, 782];
            for (let i = 0; i < 3; i++) {
               penaltyshootnogoalG = imagewatchliveU.length == accepted7.length;
            }
            while (googleO.startsWith(`${accepted7.length}`)) {
               googleO = `${iconuser9.length & googleO.length}`;
               break;
            }
            mountingE.set(imagewatchliveU, (String.fromCharCode(70, 0) == imagewatchliveU ? imagewatchliveU.length : weibor.length));
            break;
         }
         if (5 < (3 | mountingE.size) || (mountingE.size - parseInt(`${informationG}`)) < 3) {
            informationG *= 2 | weibor.length;
         }
         showlessJ += `${pathO.length}`;
         description_4V = mountingE.size <= 21 || String.fromCharCode(48, 0) == showlessJ;
         let formP = 4.0;
         while (3.65 == (formP / 5.19) && 5.71 == (formP / (Math.max(5.19, 3)))) {
            formP += 2 / (Math.max(parseInt(`${formP}`), 5));
            break;
         }
         while (formP >= 4.46) {
            let bottomP = String.fromCharCode(102, 95, 52, 48, 95, 102, 111, 117, 114, 115, 113, 117, 97, 114, 101, 0);
            let viewsz = String.fromCharCode(111, 95, 49, 49, 95, 105, 100, 102, 118, 0);
            let headery = false;
            let tempnodatagifl = 3;
            formP += 1 / (Math.max(6, parseInt(`${formP}`)));
            bottomP += `${((headery ? 2 : 3))}`;
            viewsz += `${viewsz.length}`;
            headery = headery || bottomP.length < 81;
            tempnodatagifl *= viewsz.length >> (Math.min(5, bottomP.length));
            break;
         }
         let selecteds = true;
         let main_l_ = true;
         mountingE.set(`${description_4V}`, parseInt(`${informationG}`) - 2);
         showBannerInPosition().then();
      }, 100);
   }

   const initBannerAdListener = () => {
      let thailandL = String.fromCharCode(117, 95, 49, 55, 95, 114, 117, 110, 116, 101, 114, 109, 0);
      let penaltymatchiconu = String.fromCharCode(115, 108, 105, 99, 101, 116, 104, 114, 101, 97, 100, 95, 108, 95, 54, 49, 0);
      let pangleC = false;
      let moviesa: Array<any> = [373, 200];
      let iconarrowleftR = 0.0;
      let brightnessW = String.fromCharCode(101, 110, 99, 114, 121, 112, 116, 95, 111, 95, 50, 57, 0);
      let profileB = 3.0;
      let areao: Map<any, any> = new Map([[String.fromCharCode(117, 95, 49, 48, 95, 98, 114, 101, 97, 107, 0), true], [String.fromCharCode(119, 95, 49, 48, 48, 95, 115, 104, 111, 114, 116, 108, 121, 0), true]]);
      let penaltymatchiconF: Map<any, any> = new Map([[String.fromCharCode(116, 95, 57, 95, 115, 105, 109, 112, 108, 101, 116, 97, 103, 0), 426], [String.fromCharCode(114, 95, 57, 51, 95, 118, 114, 101, 103, 105, 111, 110, 0), 853], [String.fromCharCode(115, 117, 102, 102, 105, 120, 95, 105, 95, 57, 55, 0), 93]]);
      let orangeuparrowN = 0.0;
      let profilepicd = 1;
      let routerM = false;
      pangleC = moviesa.length == parseInt(`${iconarrowleftR}`);

      ATBannerRNSDK.setAdListener(ATBannerRNSDK.onBannerLoaded, (event) => {

         let livenodatabgimgB = 4.0;
         let episode9 = 2;
         let downloadedq = String.fromCharCode(115, 112, 101, 97, 107, 101, 114, 115, 95, 51, 95, 51, 56, 0);
         for (let g = 0; g < 3; g++) {
            episode9 %= Math.max((String.fromCharCode(84, 0) == downloadedq ? episode9 : downloadedq.length), 5);
         }
         let annerp = episode9 <= 5466351;
         do {
            episode9 <<= Math.min(Math.abs(2 % (Math.max(parseInt(`${livenodatabgimgB}`), 7))), 3);
            if (annerp) {
               break;
            }
         } while ((5 > (episode9 + parseInt(`${livenodatabgimgB}`)) && (5 + episode9) > 3) && annerp);
         livenodatabgimgB /= Math.max(1, parseFloat(`${downloadedq.length % (Math.max(5, episode9))}`));
         let mapbuffer9 = 5;
         let largebrightnessT = 1.0;
         let iconstarD = 2.0;
         livenodatabgimgB /= Math.max(3, parseFloat(`${1}`));
         mapbuffer9 /= Math.max(parseInt(`${iconstarD}`), 4);
         largebrightnessT += 2;
         iconstarD -= parseFloat(`${parseInt(`${iconstarD}`)}`);
         livenodatabgimgB -= parseFloat(`${parseInt(`${livenodatabgimgB}`)}`);
         if (5.0 > (3.49 * livenodatabgimgB) || 4 > (downloadedq.length | 5)) {
            livenodatabgimgB -= parseFloat(`${2}`);
         }
         episode9 &= downloadedq.length;
         let subtextH: Array<any> = [302, 339];
         let largebrightnessD = String.fromCharCode(100, 105, 114, 101, 99, 116, 111, 114, 105, 101, 115, 95, 104, 95, 51, 53, 0);
         let libreactt = true;
         episode9 *= episode9;
         subtextH.push((3 >> (Math.min(4, Math.abs((libreactt ? 4 : 2))))));
         largebrightnessD = `${largebrightnessD.length - subtextH.length}`;
         libreactt = largebrightnessD.length <= 26;
         let securityN = String.fromCharCode(109, 95, 50, 55, 95, 117, 110, 99, 104, 101, 99, 107, 101, 100, 0);
         let greym = 5.0;
         let changeG = String.fromCharCode(103, 101, 110, 115, 95, 101, 95, 57, 48, 0);
         episode9 /= Math.max(3 & changeG.length, 4);
         securityN = `${securityN.length}`;
         greym *= parseInt(`${greym}`);
         changeG = `${securityN.length}`;
         iconarrowleftR *= (parseInt(`${iconarrowleftR}`) ^ (pangleC ? 2 : 1));
         console.log("ATBannerLoaded: " + event.placementId);
      });

      let descW: Map<any, any> = new Map([[String.fromCharCode(117, 95, 56, 49, 95, 114, 101, 109, 97, 112, 112, 105, 110, 103, 0), false], [String.fromCharCode(105, 109, 112, 117, 108, 115, 101, 95, 110, 95, 54, 56, 0), true], [String.fromCharCode(103, 101, 110, 101, 114, 97, 116, 101, 100, 95, 101, 95, 56, 54, 0), false]]);
      let basketballplayerplaceholderJ = String.fromCharCode(101, 95, 55, 54, 95, 103, 114, 97, 121, 0);
      basketballplayerplaceholderJ += `${descW.size | 2}`;
      let baseline5 = false;
      basketballplayerplaceholderJ = `${descW.size % (Math.max(basketballplayerplaceholderJ.length, 5))}`;
      baseline5 = !baseline5 || baseline5;
      basketballplayerplaceholderJ = `${descW.size}`;
      let greyarrowupS: Map<any, any> = new Map([[String.fromCharCode(108, 95, 52, 50, 95, 116, 111, 112, 105, 99, 0), 360], [String.fromCharCode(100, 101, 116, 101, 99, 116, 101, 100, 95, 113, 95, 53, 0), 952]]);
      for (let p = 0; p < 3; p++) {
         let playershirtx: Map<any, any> = new Map([[String.fromCharCode(118, 95, 53, 49, 95, 98, 105, 114, 116, 104, 100, 97, 116, 101, 0), 443], [String.fromCharCode(114, 116, 109, 100, 95, 112, 95, 49, 48, 48, 0), 344]]);
         let placementn = false;
         basketballplayerplaceholderJ += `${basketballplayerplaceholderJ.length % (Math.max(2, descW.size))}`;
         playershirtx = new Map([[`${playershirtx.size}`, ((placementn ? 2 : 4) >> (Math.min(Math.abs(playershirtx.size), 4)))]]);
         placementn = playershirtx.size < 93;
      }
      let optionsQ = 5986701 >= basketballplayerplaceholderJ.length;
      do {
         let condensedj = 1.0;
         let invitee = 0.0;
         let kicke = 5;
         let pangler: Array<any> = [238, 375, 492];
         basketballplayerplaceholderJ = `${descW.size * 2}`;
         condensedj -= parseFloat(`${kicke | parseInt(`${condensedj}`)}`);
         invitee -= parseFloat(`${3}`);
         kicke /= Math.max(1, 2 + parseInt(`${invitee}`));
         pangler = [kicke | parseInt(`${invitee}`)];
         if (optionsQ) {
            break;
         }
      } while (optionsQ && (4 < (3 / (Math.max(5, descW.size)))));
      moviesa.push(2);

      let latestMsg = "";

      for (let d = 0; d < 2; d++) {
         profileB /= Math.max(3, parseFloat(`${moviesa.length}`));
      }
      ATBannerRNSDK.setAdListener(ATBannerRNSDK.onBannerFail, (event) => {

         let subsv: Array<any> = [937, 156];
         let iconshareK = 3;
         let analytics4 = false;
         analytics4 = subsv.length == 9;
         let iconarrowrightblackU = analytics4 ? !analytics4 : analytics4;
         do {
            analytics4 = !analytics4;
            if (iconarrowrightblackU) {
               break;
            }
         } while (iconarrowrightblackU && (analytics4));
         let inouttargetyellowN = analytics4 ? !analytics4 : analytics4;
         do {
            let libavformatA = String.fromCharCode(104, 95, 50, 52, 95, 115, 117, 112, 112, 108, 101, 109, 101, 110, 116, 97, 114, 121, 0);
            let watchnowbgV: Array<any> = [777, 550];
            let sourceo = 3.0;
            analytics4 = 81 < subsv.length;
            libavformatA += "2";
            watchnowbgV = [parseInt(`${sourceo}`)];
            sourceo -= parseFloat(`${2}`);
            if (inouttargetyellowN) {
               break;
            }
         } while ((analytics4 || (iconshareK << (Math.min(Math.abs(3), 1))) >= 4) && inouttargetyellowN);
         let dragcloseT = String.fromCharCode(111, 95, 55, 57, 95, 102, 116, 97, 98, 0);
         let rightH = 1;
         let iconrefresha = String.fromCharCode(116, 104, 114, 101, 97, 100, 103, 114, 111, 117, 112, 95, 50, 95, 55, 53, 0);
         analytics4 = (48 == ((analytics4 ? iconrefresha.length : 48) | iconrefresha.length));
         dragcloseT = `${dragcloseT.length}`;
         rightH *= rightH;
         iconshareK -= iconshareK;
         let carouselL = String.fromCharCode(115, 97, 109, 112, 108, 101, 102, 109, 116, 95, 120, 95, 49, 50, 0);
         let action2: Map<any, any> = new Map([[String.fromCharCode(104, 95, 57, 57, 95, 115, 117, 109, 115, 113, 0), 408], [String.fromCharCode(118, 97, 108, 105, 100, 97, 116, 105, 111, 110, 95, 50, 95, 49, 49, 0), 377], [String.fromCharCode(109, 97, 107, 101, 100, 112, 107, 103, 95, 119, 95, 53, 52, 0), 725]]);
         iconshareK <<= Math.min(Math.abs(((analytics4 ? 1 : 1) + 3)), 2);
         carouselL += `${carouselL.length >> (Math.min(2, Math.abs(action2.size)))}`;
         action2.set(carouselL, (String.fromCharCode(72, 0) == carouselL ? carouselL.length : action2.size));
         analytics4 = iconshareK >= subsv.length;
         while (5 <= (subsv.length & iconshareK) || 5 <= (iconshareK & subsv.length)) {
            let canvash = String.fromCharCode(105, 95, 51, 49, 95, 98, 111, 110, 106, 111, 117, 114, 0);
            let zhuboz = String.fromCharCode(115, 99, 104, 101, 100, 117, 108, 101, 95, 101, 95, 55, 0);
            let changeT = 1.0;
            subsv.push(parseInt(`${changeT}`) << (Math.min(5, Math.abs(iconshareK))));
            canvash = `${zhuboz.length}`;
            zhuboz += `${zhuboz.length - 3}`;
            changeT /= Math.max(parseFloat(`${zhuboz.length}`), 4);
            break;
         }
         analytics4 = !analytics4;
         brightnessW += `${(String.fromCharCode(102, 0) == penaltymatchiconu ? areao.size : penaltymatchiconu.length)}`;
         if (latestMsg != event.errorMsg) {

            profileB += parseFloat(`${parseInt(`${iconarrowleftR}`) << (Math.min(1, Math.abs(1)))}`);
            latestMsg = event.errorMsg;

            iconarrowleftR /= Math.max(((pangleC ? 3 : 5) % (Math.max(5, parseInt(`${profileB}`)))), 3);
            console.warn(
               "ATBannerLoadFail: " +
               event.placementId +
               ", errorMsg: " +
               event.errorMsg
            );
         }
      });

      let favoriteE = 0.0;
      let time_xzB = 0;
      let umengr = String.fromCharCode(100, 105, 115, 97, 112, 112, 101, 97, 114, 97, 110, 99, 101, 95, 121, 95, 56, 53, 0);
      umengr = `${2 % (Math.max(8, time_xzB))}`;
      time_xzB -= time_xzB;
      let mbnativeadvancedo = 5.0;
      umengr += `${time_xzB - umengr.length}`;
      mbnativeadvancedo += parseFloat(`${2}`);
      if (1.27 == favoriteE) {
         favoriteE /= Math.max(4, time_xzB & 1);
      }
      time_xzB >>= Math.min(5, Math.abs(2 << (Math.min(Math.abs(parseInt(`${favoriteE}`)), 5))));
      let brightnessS: Array<any> = [209, 753, 641];
      let speck: Map<any, any> = new Map([[String.fromCharCode(110, 95, 51, 54, 95, 99, 104, 97, 110, 103, 101, 100, 0), 613], [String.fromCharCode(102, 95, 53, 55, 95, 112, 114, 101, 115, 99, 97, 108, 101, 0), 833]]);
      time_xzB <<= Math.min(5, Math.abs(speck.size));
      brightnessS.push(brightnessS.length);
      speck = new Map([[`${brightnessS.length}`, brightnessS.length]]);
      time_xzB >>= Math.min(Math.abs(parseInt(`${favoriteE}`)), 2);
      for (let z = 0; z < 3; z++) {
         time_xzB >>= Math.min(4, Math.abs(3 % (Math.max(time_xzB, 9))));
      }
      let iconwatchnow_ = 4;
      pangleC = (areao.size % (Math.max(9, umengr.length))) > 4;

      ATBannerRNSDK.setAdListener(ATBannerRNSDK.onBannerShow, (event) => {

         let orangeD = moviesa.length >= 8690843;
         do {
            moviesa = [areao.size % 2];
            if (orangeD) {
               break;
            }
         } while ((1 <= (moviesa.length / (Math.max(1, 1)))) && orangeD);


         for (let q = 0; q < 1; q++) {
            areao = new Map([[`${areao.size}`, areao.size ^ parseInt(`${iconarrowleftR}`)]]);
         }


         profilepicd >>= Math.min(3, Math.abs(2 + parseInt(`${orangeuparrowN}`)));


         let iconclosewhitewithbgY = penaltymatchiconF.size >= 6348210;
         do {
            let rulesE: Map<any, any> = new Map([[String.fromCharCode(98, 97, 99, 107, 103, 114, 111, 117, 110, 100, 105, 110, 103, 95, 54, 95, 54, 51, 0), true], [String.fromCharCode(107, 95, 53, 56, 95, 114, 97, 99, 105, 110, 103, 0), false], [String.fromCharCode(115, 97, 110, 101, 95, 55, 95, 53, 49, 0), true]]);
            let images1: Array<any> = [424, 449];
            let station1 = 5;
            let detailsr = true;
            if (rulesE.get(`${station1}`) == null) {
               station1 %= Math.max(3, station1);
            }
            let reactnativejsg = String.fromCharCode(111, 117, 112, 117, 116, 95, 104, 95, 50, 48, 0);
            if (reactnativejsg.includes(`${station1}`)) {
               let libglogK = String.fromCharCode(110, 95, 50, 57, 95, 119, 105, 110, 100, 111, 119, 115, 0);
               let starg = String.fromCharCode(106, 95, 52, 54, 95, 115, 117, 98, 109, 105, 116, 0);
               let langt = false;
               reactnativejsg = `${starg.length}`;
               libglogK = `${((langt ? 4 : 4))}`;
               starg += `${(1 - (langt ? 1 : 1))}`;
            }
            for (let f = 0; f < 2; f++) {
               images1.push((String.fromCharCode(74, 0) == reactnativejsg ? reactnativejsg.length : rulesE.size));
            }
            if (reactnativejsg.endsWith(`${rulesE.size}`)) {
               reactnativejsg += `${rulesE.size | 2}`;
            }
            while (reactnativejsg.endsWith(`${detailsr}`)) {
               let classesn = 2.0;
               reactnativejsg = `${station1}`;
               classesn /= Math.max(3, parseFloat(`${parseInt(`${classesn}`) >> (Math.min(Math.abs(parseInt(`${classesn}`)), 4))}`));
               break;
            }
            let statisticsj = 0.0;
            let libloggerV = 3.0;
            for (let l = 0; l < 3; l++) {
               let clockm = 2.0;
               station1 &= station1 * parseInt(`${libloggerV}`);
               clockm += parseFloat(`${parseInt(`${clockm}`) * parseInt(`${clockm}`)}`);
            }
            rulesE.set(reactnativejsg, reactnativejsg.length);
            for (let u = 0; u < 1; u++) {
               let smallsound8: Array<any> = [689, 915];
               let elementsa = false;
               let mountingx: Map<any, any> = new Map([[String.fromCharCode(98, 111, 114, 100, 101, 114, 95, 48, 95, 49, 54, 0), String.fromCharCode(115, 95, 49, 48, 48, 95, 114, 97, 100, 97, 114, 0)], [String.fromCharCode(100, 95, 56, 49, 95, 109, 117, 116, 97, 116, 101, 0), String.fromCharCode(118, 97, 114, 105, 110, 102, 111, 95, 99, 95, 57, 54, 0)]]);
               detailsr = !elementsa || reactnativejsg.length == 49;
               smallsound8 = [smallsound8.length];
               elementsa = (mountingx.size & smallsound8.length) == 4;
               mountingx.set(`${smallsound8.length}`, 2 | mountingx.size);
            }
            statisticsj += parseFloat(`${3}`);
            while ((1 * reactnativejsg.length) < 4) {
               statisticsj *= parseFloat(`${3 * reactnativejsg.length}`);
               break;
            }
            penaltymatchiconF = new Map([[`${rulesE.size}`, moviesa.length + rulesE.size]]);
            if (iconclosewhitewithbgY) {
               break;
            }
         } while (((profilepicd % 2) > 1 && (penaltymatchiconF.size % 2) > 5) && iconclosewhitewithbgY);


         let middlesoundL = String.fromCharCode(119, 95, 55, 50, 95, 112, 97, 115, 115, 102, 98, 0);
         middlesoundL += `${middlesoundL.length ^ 3}`;
         let rootn = 6847766 >= middlesoundL.length;
         do {
            middlesoundL = `${2 - middlesoundL.length}`;
            if (rootn) {
               break;
            }
         } while ((middlesoundL.length < 5) && rootn);
         middlesoundL = "1";
         areao.set(`${areao.size}`, penaltymatchiconF.size >> (Math.min(Math.abs(2), 3)));


         for (let w = 0; w < 1; w++) {
            let commentq = 2.0;
            let libfbjniU = 5.0;
            let styles3 = false;
            commentq += parseFloat(`${3 & parseInt(`${libfbjniU}`)}`);
            while (libfbjniU < 4.68) {
               libfbjniU *= (parseFloat(`${parseInt(`${libfbjniU}`) + (styles3 ? 5 : 5)}`));
               break;
            }
            styles3 = commentq < 54.89;
            libfbjniU *= parseFloat(`${1}`);
            for (let f = 0; f < 2; f++) {
               commentq += parseFloat(`${3 + parseInt(`${libfbjniU}`)}`);
            }
            styles3 = 66.67 > libfbjniU;
            let agreementj = commentq >= 9868680.0;
            do {
               commentq /= Math.max(2, (parseFloat(`${(styles3 ? 1 : 5) / (Math.max(parseInt(`${libfbjniU}`), 2))}`)));
               if (agreementj) {
                  break;
               }
            } while (agreementj && (2.99 > (commentq - 2.9)));
            if (styles3) {
               libfbjniU *= parseFloat(`${parseInt(`${commentq}`) >> (Math.min(1, Math.abs(1)))}`);
            }
            let giftbuttono = 3;
            let chatL = 0.0;
            libfbjniU *= parseFloat(`${3 >> (Math.min(Math.abs(giftbuttono), 5))}`);
            giftbuttono -= 3 % (Math.max(parseInt(`${chatL}`), 8));
            chatL /= Math.max(2, parseFloat(`${parseInt(`${chatL}`)}`));
            iconarrowleftR /= Math.max(2, moviesa.length);
         }


         let orientation8 = String.fromCharCode(97, 99, 99, 117, 114, 97, 99, 121, 95, 108, 95, 57, 57, 0);
         orientation8 = `${1 & orientation8.length}`;
         if (3 > orientation8.length) {
            orientation8 = `${orientation8.length}`;
         }
         if (3 >= orientation8.length) {
            orientation8 += `${orientation8.length}`;
         }
         iconarrowleftR += 1;
         console.log("ATBannerShow: " + event.placementId);
      });

      areao = new Map([[brightnessW, profilepicd & 1]]);

      ATBannerRNSDK.setAdListener(
         ATBannerRNSDK.onBannerCloseButtonTapped,
         (event) => {

            areao.set(`${profilepicd}`, 3);
            console.log(
               "ATBannerCloseButtonTapped: " +
               event.placementId +
               ", adCallbackInfo: " +
               event.adCallbackInfo
            );
         }
      );

      for (let q = 0; q < 2; q++) {
         let privatechatbgr: Array<any> = [387, 990];
         let networkp = 3.0;
         let filez = String.fromCharCode(116, 95, 55, 56, 95, 115, 116, 114, 100, 117, 112, 0);
         privatechatbgr.push(privatechatbgr.length);
         networkp *= parseInt(`${networkp}`) % (Math.max(filez.length, 10));
         filez += `${filez.length + parseInt(`${networkp}`)}`;
         let yellowscoreball9 = privatechatbgr.length >= 8074423;
         do {
            let modityL = 2.0;
            let friendsE = String.fromCharCode(107, 95, 50, 51, 95, 118, 115, 121, 110, 99, 0);
            let typingw = 2.0;
            let iconrightorangeQ = 1.0;
            privatechatbgr.push(parseInt(`${typingw}`) | friendsE.length);
            modityL *= 2 * parseInt(`${modityL}`);
            friendsE = `${parseInt(`${modityL}`)}`;
            typingw -= parseInt(`${modityL}`) % (Math.max(10, parseInt(`${iconrightorangeQ}`)));
            iconrightorangeQ -= parseFloat(`${parseInt(`${modityL}`)}`);
            if (yellowscoreball9) {
               break;
            }
         } while ((privatechatbgr.includes(privatechatbgr.length)) && yellowscoreball9);
         while ((privatechatbgr.length | privatechatbgr.length) >= 5 && (privatechatbgr.length | 5) >= 3) {
            let backiconmaskh = false;
            let inouttargetredd = 5.0;
            let tickE = 3.0;
            let iconnewsshareb = 1;
            privatechatbgr = [parseInt(`${inouttargetredd}`) >> (Math.min(3, Math.abs(2)))];
            backiconmaskh = backiconmaskh || tickE > 76.38;
            inouttargetredd += parseFloat(`${2 << (Math.min(Math.abs(iconnewsshareb), 3))}`);
            tickE /= Math.max(3, iconnewsshareb);
            break;
         }
         areao.set(penaltymatchiconu, (penaltymatchiconu == String.fromCharCode(53, 0) ? penaltymatchiconF.size : penaltymatchiconu.length));
      }

      ATBannerRNSDK.setAdListener(ATBannerRNSDK.onBannerClick, (event) => {

         for (let g = 0; g < 1; g++) {
            let pangleW = String.fromCharCode(112, 95, 50, 55, 95, 109, 116, 97, 102, 0);
            let toponj = 5;
            let awayicona = String.fromCharCode(113, 95, 55, 49, 95, 97, 115, 121, 109, 0);
            let debugu: Array<any> = [564, 51];
            let loginsuccessE = String.fromCharCode(102, 95, 53, 50, 95, 98, 114, 101, 97, 107, 105, 110, 103, 0);
            let embedb = String.fromCharCode(110, 95, 54, 56, 95, 116, 105, 108, 116, 0);
            let iconwatchk = String.fromCharCode(117, 110, 105, 120, 95, 48, 95, 55, 51, 0);
            pangleW = `${pangleW.length}`;
            loginsuccessE += "3";
            embedb += `${2 + iconwatchk.length}`;
            iconwatchk = `${embedb.length}`;
            let goallogoR: Map<any, any> = new Map([[String.fromCharCode(98, 105, 114, 116, 104, 100, 97, 116, 101, 95, 114, 95, 50, 49, 0), 927], [String.fromCharCode(105, 100, 101, 110, 116, 105, 102, 121, 95, 108, 95, 56, 50, 0), 881]]);
            toponj -= pangleW.length;
            goallogoR = new Map([[`${goallogoR.size}`, goallogoR.size]]);
            let catagory3 = 4;
            let detailQ = String.fromCharCode(116, 97, 98, 108, 101, 99, 95, 100, 95, 50, 57, 0);
            toponj ^= 3 & debugu.length;
            catagory3 >>= Math.min(Math.abs(catagory3 << (Math.min(Math.abs(2), 1))), 2);
            detailQ = `${catagory3}`;
            let bggradientq = String.fromCharCode(102, 95, 56, 55, 95, 110, 98, 105, 111, 0);
            let subtextt = String.fromCharCode(99, 111, 110, 115, 111, 110, 97, 110, 116, 95, 51, 95, 50, 51, 0);
            while ((debugu.length ^ bggradientq.length) < 4 || (bggradientq.length ^ debugu.length) < 4) {
               bggradientq = `${pangleW.length * 2}`;
               break;
            }
            debugu.push(awayicona.length * 2);
            let middlebrightnessQ: Map<any, any> = new Map([[String.fromCharCode(121, 95, 51, 51, 95, 100, 98, 115, 116, 97, 116, 0), String.fromCharCode(110, 95, 55, 51, 95, 115, 105, 109, 112, 108, 101, 119, 114, 105, 116, 101, 0)], [String.fromCharCode(112, 95, 53, 55, 95, 101, 107, 121, 0), String.fromCharCode(106, 95, 50, 48, 95, 99, 111, 110, 118, 101, 114, 115, 105, 111, 110, 115, 0)]]);
            let playg = String.fromCharCode(118, 95, 52, 57, 95, 97, 101, 99, 0);
            bggradientq += `${awayicona.length}`;
            middlebrightnessQ = new Map([[`${middlebrightnessQ.size}`, playg.length]]);
            playg += `${middlebrightnessQ.size / (Math.max(1, 7))}`;
            let orangedownarrowj = String.fromCharCode(120, 95, 52, 55, 95, 115, 112, 108, 105, 116, 109, 118, 115, 0);
            let casto = 4.0;
            let emojihearts = 0;
            awayicona += `${parseInt(`${casto}`) / (Math.max(3, orangedownarrowj.length))}`;
            orangedownarrowj = `${emojihearts & emojihearts}`;
            casto /= Math.max(parseFloat(`${emojihearts}`), 5);
            awayicona += `${(bggradientq == String.fromCharCode(70, 0) ? subtextt.length : bggradientq.length)}`;
            let detailz = 2.0;
            let vipsportb = 5.0;
            for (let l = 0; l < 1; l++) {
               let clearq: Array<any> = [957, 446, 618];
               let current7 = String.fromCharCode(107, 95, 55, 49, 95, 102, 116, 118, 112, 110, 111, 100, 101, 0);
               detailz += parseFloat(`${subtextt.length >> (Math.min(2, awayicona.length))}`);
               clearq = [clearq.length];
               current7 = `${(String.fromCharCode(105, 0) == current7 ? clearq.length : current7.length)}`;
            }
            awayicona += `${1 * awayicona.length}`;
            brightnessW = `${parseInt(`${profileB}`) >> (Math.min(pangleW.length, 3))}`;
         }
         console.log(
            "ATBannerClick: " +
            event.placementId +
            ", adCallbackInfo: " +
            event.adCallbackInfo
         );
      });

      for (let y = 0; y < 2; y++) {
         pangleC = profilepicd > 72;
      }

      ATBannerRNSDK.setAdListener(ATBannerRNSDK.onBannerRefresh, (event) => {

         let emoji9 = routerM ? !routerM : routerM;
         do {
            routerM = profileB <= 84.58 && 6 <= profilepicd;
            if (emoji9) {
               break;
            }
         } while (emoji9 && (5 > brightnessW.length));


         while (3 <= (5 << (Math.min(5, thailandL.length)))) {
            let nativex: Array<any> = [967, 689];
            let iconbell1 = 4;
            let sortH = 3;
            nativex.push(3);
            sortH /= Math.max(2, sortH);
            for (let h = 0; h < 2; h++) {
               let goallogoi = 2;
               let teamdetailsbgo = true;
               iconbell1 /= Math.max(nativex.length, 4);
               goallogoi /= Math.max(goallogoi, 1);
               teamdetailsbgo = teamdetailsbgo || 84 == goallogoi;
            }
            let imagewatchliveI = nativex.length <= 8905760;
            do {
               nativex.push(nativex.length + iconbell1);
               if (imagewatchliveI) {
                  break;
               }
            } while ((2 <= (nativex.length | 4) && 4 <= (4 | iconbell1)) && imagewatchliveI);
            iconbell1 *= nativex.length;
            iconbell1 ^= nativex.length % 2;
            for (let u = 0; u < 1; u++) {
               let launchN = String.fromCharCode(102, 95, 52, 53, 95, 110, 115, 117, 112, 112, 111, 114, 116, 101, 100, 0);
               let executorn: Array<any> = [String.fromCharCode(101, 95, 57, 56, 95, 112, 114, 101, 99, 111, 109, 112, 111, 115, 101, 100, 0), String.fromCharCode(103, 95, 52, 53, 95, 110, 105, 110, 101, 0)];
               let jcopy_0lo: Array<any> = [String.fromCharCode(110, 101, 109, 111, 110, 105, 99, 95, 110, 95, 57, 57, 0), String.fromCharCode(111, 105, 100, 95, 109, 95, 51, 53, 0), String.fromCharCode(112, 111, 112, 117, 108, 97, 116, 101, 100, 95, 107, 95, 53, 54, 0)];
               let termsV = 3.0;
               nativex = [1 + nativex.length];
               launchN = `${executorn.length}`;
               executorn.push(parseInt(`${termsV}`) ^ 2);
               jcopy_0lo.push(launchN.length % (Math.max(1, 6)));
               termsV *= parseFloat(`${jcopy_0lo.length - 3}`);
            }
            profileB -= parseFloat(`${areao.size & 1}`);
            break;
         }


         for (let i = 0; i < 2; i++) {
            profilepicd ^= penaltymatchiconF.size;
         }


         moviesa.push(1);


         let stationsW = profilepicd >= 9346870;
         do {
            profilepicd += 3;
            if (stationsW) {
               break;
            }
         } while (stationsW && (4 >= (5 * moviesa.length) || (5 * moviesa.length) >= 3));


         for (let g = 0; g < 3; g++) {
            orangeuparrowN += penaltymatchiconu.length;
         }


         if (penaltymatchiconF.size == penaltymatchiconu.length) {
            let abidetectV = String.fromCharCode(112, 111, 115, 105, 116, 105, 111, 110, 105, 110, 103, 95, 112, 95, 52, 52, 0);
            for (let x = 0; x < 2; x++) {
               abidetectV = `${abidetectV.length % 1}`;
            }
            let toponJ = 5.0;
            if (!abidetectV.endsWith(`${toponJ}`)) {
               let starQ = String.fromCharCode(111, 95, 55, 56, 95, 118, 109, 97, 102, 109, 111, 116, 105, 111, 110, 100, 115, 112, 0);
               let modityP = String.fromCharCode(115, 95, 51, 48, 95, 100, 117, 109, 112, 0);
               let hongkongH = String.fromCharCode(112, 97, 103, 101, 110, 111, 95, 114, 95, 51, 48, 0);
               let condensedw = String.fromCharCode(97, 95, 51, 57, 95, 112, 112, 99, 99, 111, 109, 109, 111, 110, 0);
               abidetectV = `${(String.fromCharCode(83, 0) == starQ ? starQ.length : parseInt(`${toponJ}`))}`;
               modityP = `${condensedw.length}`;
               hongkongH += `${hongkongH.length}`;
               condensedw += `${condensedw.length}`;
            }
            penaltymatchiconu += `${3 - moviesa.length}`;
         }


         moviesa.push(parseInt(`${orangeuparrowN}`));


         while (1.0 > (profileB + 4.12)) {
            profileB *= parseFloat(`${parseInt(`${iconarrowleftR}`) % (Math.max(3, 9))}`);
            break;
         }
         console.log("ATBannerRefresh: " + event.placementId);
      });

      iconarrowleftR -= penaltymatchiconu.length;

      ATBannerRNSDK.setAdListener(ATBannerRNSDK.onBannerRefreshFail, (event) => {

         let u_count4 = 5631299 >= profilepicd;
         do {
            profilepicd <<= Math.min(1, Math.abs(areao.size % (Math.max(1, 9))));
            if (u_count4) {
               break;
            }
         } while ((5 < profilepicd) && u_count4);
         console.log(
            "ATBannerRefreshFail: " +
            event.placementId +
            ", adCallbackInfo: " +
            event.adCallbackInfo
         );
      });
   };

   const initBanner = () => {
      let modelsH = String.fromCharCode(118, 95, 52, 52, 95, 112, 108, 117, 103, 105, 110, 115, 0);
      let codeB = true;
      let basketballplayerplaceholdert = 3;
      let internetv = 1;
      let attributedstringb = String.fromCharCode(98, 95, 57, 51, 95, 115, 101, 109, 105, 98, 111, 108, 100, 0);
      let libhermesd = String.fromCharCode(99, 111, 110, 115, 111, 110, 97, 110, 116, 95, 117, 95, 51, 54, 0);
      let runtimeschedulera = 4.0;
      let history_ = String.fromCharCode(115, 105, 109, 112, 108, 101, 115, 105, 103, 110, 97, 108, 95, 101, 95, 51, 51, 0);
      let logoM = 5;
      let iconpipexpand1 = 4.0;
      attributedstringb = `${(String.fromCharCode(105, 0) == history_ ? basketballplayerplaceholdert : history_.length)}`;
      logoM |= (String.fromCharCode(88, 0) == libhermesd ? libhermesd.length : modelsH.length);



      modelsH = `${internetv}`;
      while (libhermesd != String.fromCharCode(83, 0)) {
         let spinneri = 3;
         let libturbomodulejsijniV = 0.0;
         let issubd: Map<any, any> = new Map([[String.fromCharCode(112, 95, 51, 50, 95, 114, 97, 116, 101, 115, 0), 534], [String.fromCharCode(105, 95, 49, 95, 98, 97, 110, 0), 612]]);
         let googleF: Map<any, any> = new Map([[String.fromCharCode(115, 121, 115, 108, 111, 103, 95, 105, 95, 57, 50, 0), 601], [String.fromCharCode(118, 97, 114, 115, 95, 51, 95, 55, 50, 0), 8]]);
         spinneri |= parseInt(`${libturbomodulejsijniV}`) % (Math.max(2, 4));
         let vertical8 = String.fromCharCode(118, 97, 108, 117, 101, 115, 95, 110, 95, 49, 49, 0);
         libturbomodulejsijniV -= parseFloat(`${parseInt(`${libturbomodulejsijniV}`) >> (Math.min(2, Math.abs(3)))}`);
         vertical8 += `${vertical8.length + vertical8.length}`;
         for (let q = 0; q < 1; q++) {
            googleF.set(`${googleF.size}`, issubd.size);
         }
         let whatsappB = false;
         let activity6 = true;
         issubd.set(`${spinneri}`, spinneri);
         whatsappB = activity6 || whatsappB;
         activity6 = !whatsappB;
         let matchactiveI = String.fromCharCode(100, 101, 112, 114, 101, 99, 105, 97, 116, 101, 100, 104, 95, 99, 95, 54, 57, 0);
         googleF.set(matchactiveI, 3 | issubd.size);
         modelsH += `${(String.fromCharCode(67, 0) == modelsH ? logoM : modelsH.length)}`;
         break;
      }
      const settings = {};

      logoM >>= Math.min(1, Math.abs((history_ == String.fromCharCode(108, 0) ? attributedstringb.length : history_.length)));
      let hongkongX: Array<any> = [838, 603];
      hongkongX = [hongkongX.length];
      hongkongX.push(hongkongX.length - hongkongX.length);
      let debugg = String.fromCharCode(110, 101, 119, 116, 101, 107, 95, 113, 95, 50, 57, 0);
      hongkongX.push(debugg.length);
      logoM *= history_.length;
      const screenWidthInPixel =
         Dimensions.get("screen").width * Dimensions.get("screen").scale;

      let privacya: Array<any> = [409, 697, 528];
      let combinep = false;
      if (3 > privacya.length || (privacya.length << (Math.min(Math.abs(3), 5))) > 5) {
         let policyN = String.fromCharCode(115, 116, 97, 114, 116, 115, 95, 107, 95, 49, 51, 0);
         let abidetectM = 2.0;
         let shoots = 4;
         combinep = String.fromCharCode(121, 0) == policyN;
         policyN = `${shoots << (Math.min(Math.abs(parseInt(`${abidetectM}`)), 3))}`;
         abidetectM /= Math.max(3, parseFloat(`${shoots / (Math.max(parseInt(`${abidetectM}`), 7))}`));
      }
      let configure7 = String.fromCharCode(112, 117, 112, 105, 108, 95, 53, 95, 49, 48, 0);
      let zhengpianq = String.fromCharCode(112, 114, 105, 110, 116, 102, 95, 114, 95, 56, 56, 0);
      combinep = (zhengpianq.length & privacya.length) <= 30;
      configure7 = `${(configure7 == String.fromCharCode(48, 0) ? configure7.length : configure7.length)}`;
      zhengpianq += `${configure7.length | 3}`;
      let streamingl = 3.0;
      let basketballmatchdetailbgM = String.fromCharCode(118, 95, 52, 56, 95, 112, 97, 114, 97, 109, 115, 0);
      combinep = (((!combinep ? 55 : privacya.length) * privacya.length) < 55);
      streamingl -= parseFloat(`${2}`);
      basketballmatchdetailbgM += `${parseInt(`${streamingl}`) % (Math.max(1, 10))}`;
      for (let d = 0; d < 1; d++) {
         let iconviewergif6 = 0;
         let crickets = 4.0;
         combinep = 91.3 <= crickets || privacya.length <= 11;
         iconviewergif6 |= iconviewergif6 % 2;
         crickets *= parseFloat(`${iconviewergif6 + 2}`);
      }
      if ((privacya.length >> (Math.min(Math.abs(4), 5))) > 4) {
         privacya.push(privacya.length);
      }
      combinep = privacya.length < 15;
      internetv &= history_.length;
      while (5 <= (3 & modelsH.length)) {
         let short_8H = String.fromCharCode(108, 105, 103, 104, 116, 110, 101, 115, 115, 95, 51, 95, 56, 57, 0);
         let profileactiveO = false;
         let successy = String.fromCharCode(102, 95, 57, 50, 95, 115, 116, 114, 111, 107, 101, 0);
         if (short_8H.endsWith(`${profileactiveO}`)) {
            profileactiveO = short_8H.length >= 30;
         }
         successy += `${(successy.length & (profileactiveO ? 5 : 1))}`;
         let shareblackJ: Map<any, any> = new Map([[String.fromCharCode(99, 97, 110, 111, 110, 105, 99, 97, 108, 105, 122, 101, 100, 95, 56, 95, 51, 52, 0), false], [String.fromCharCode(115, 117, 112, 101, 114, 115, 101, 116, 95, 122, 95, 50, 54, 0), false], [String.fromCharCode(116, 104, 114, 111, 116, 116, 108, 101, 95, 98, 95, 57, 50, 0), false]]);
         let membershipY: Map<any, any> = new Map([[String.fromCharCode(117, 110, 98, 111, 120, 95, 105, 95, 53, 48, 0), String.fromCharCode(106, 95, 56, 52, 95, 105, 110, 116, 112, 0)], [String.fromCharCode(117, 110, 101, 100, 105, 116, 97, 98, 108, 101, 95, 107, 95, 56, 50, 0), String.fromCharCode(98, 95, 53, 52, 95, 115, 116, 114, 116, 97, 103, 0)]]);
         let countdownv = profileactiveO ? !profileactiveO : profileactiveO;
         do {
            profileactiveO = short_8H == String.fromCharCode(105, 0);
            if (countdownv) {
               break;
            }
         } while (((3 % (Math.max(8, membershipY.size))) <= 1 && !profileactiveO) && countdownv);
         let whitesmallticko = String.fromCharCode(114, 101, 102, 99, 111, 117, 110, 116, 101, 100, 111, 98, 106, 101, 99, 116, 95, 122, 95, 57, 50, 0);
         let ccdfbdabcabbbedbW = String.fromCharCode(107, 95, 54, 56, 95, 115, 111, 105, 115, 99, 111, 110, 110, 101, 99, 116, 105, 110, 103, 0);
         let iconeyeu = 0;
         membershipY.set(short_8H, membershipY.size / 3);
         whitesmallticko += `${(whitesmallticko == String.fromCharCode(79, 0) ? iconeyeu : whitesmallticko.length)}`;
         ccdfbdabcabbbedbW += `${(ccdfbdabcabbbedbW == String.fromCharCode(110, 0) ? iconeyeu : ccdfbdabcabbbedbW.length)}`;
         if (membershipY.size < short_8H.length) {
            short_8H = `${(successy == String.fromCharCode(78, 0) ? short_8H.length : successy.length)}`;
         }
         let componentsr = String.fromCharCode(101, 115, 116, 97, 98, 108, 105, 115, 104, 95, 54, 95, 49, 55, 0);
         let clubd = 1.0;
         short_8H += `${2 - componentsr.length}`;
         componentsr = `${parseInt(`${clubd}`) / (Math.max(8, parseInt(`${clubd}`)))}`;
         shareblackJ.set(`${shareblackJ.size}`, shareblackJ.size | 1);
         membershipY.set(short_8H, 3 << (Math.min(2, Math.abs(shareblackJ.size))));
         modelsH = `${3 & internetv}`;
         break;
      }
      if (Platform.OS === "android") {

         settings[
            ATBannerRNSDK.kATBannerAdLoadingExtraBannerAdSizeStruct
         ] = ATBannerRNSDK.createLoadAdSize(
            screenWidthInPixel,
            (TOPON_BANNER_HEIGHT * Dimensions.get("screen").scale * 50) / 320
         );

         let basketballawayteamf = modelsH.length >= 7642948;
         do {
            modelsH += `${(history_.length | (codeB ? 5 : 5))}`;
            if (basketballawayteamf) {
               break;
            }
         } while ((!modelsH.startsWith(`${codeB}`)) && basketballawayteamf);
         while (1 >= (libhermesd.length - basketballplayerplaceholdert)) {
            libhermesd += "1";
            break;
         }


         attributedstringb = `${internetv}`;
         let yellowredcardR = 8585131.0 <= runtimeschedulera;
         do {
            let dark_ = true;
            let router0 = String.fromCharCode(114, 101, 110, 100, 101, 114, 101, 114, 95, 53, 95, 54, 50, 0);
            let orangeticks = String.fromCharCode(116, 95, 52, 48, 95, 100, 105, 115, 116, 114, 105, 98, 117, 116, 105, 111, 110, 115, 0);
            for (let y = 0; y < 1; y++) {
               router0 = `${orangeticks.length & router0.length}`;
            }
            while (4 < orangeticks.length || !dark_) {
               dark_ = 100 <= router0.length;
               break;
            }
            while (router0 == String.fromCharCode(109, 0)) {
               let iconlogout8: Map<any, any> = new Map([[String.fromCharCode(99, 97, 116, 99, 104, 97, 98, 108, 101, 95, 121, 95, 56, 54, 0), 216], [String.fromCharCode(110, 95, 52, 54, 95, 115, 104, 111, 114, 116, 101, 115, 116, 0), 716]]);
               let entryA = String.fromCharCode(97, 95, 52, 57, 95, 112, 114, 111, 99, 99, 101, 115, 115, 0);
               let liveendmodallogo4 = 3;
               let windk = 3.0;
               let muted8: Map<any, any> = new Map([[String.fromCharCode(99, 111, 111, 107, 95, 114, 95, 55, 52, 0), false], [String.fromCharCode(109, 105, 115, 99, 95, 56, 95, 52, 55, 0), false]]);
               orangeticks = `${router0.length | 3}`;
               iconlogout8 = new Map([[`${muted8.size}`, muted8.size]]);
               entryA = "1";
               liveendmodallogo4 <<= Math.min(1, Math.abs(iconlogout8.size - entryA.length));
               windk += muted8.size >> (Math.min(1, Math.abs(parseInt(`${windk}`))));
               break;
            }
            if (dark_) {
               dark_ = !router0.includes(`${dark_}`);
            }
            let yingJ: Array<any> = [42, 588, 379];
            yingJ = [3];
            yingJ.push((2 ^ (dark_ ? 2 : 1)));
            let typingH: Map<any, any> = new Map([[String.fromCharCode(110, 111, 110, 110, 117, 108, 108, 105, 110, 99, 111, 109, 105, 110, 103, 95, 106, 95, 57, 48, 0), 156], [String.fromCharCode(99, 95, 49, 54, 95, 97, 102, 116, 101, 114, 108, 105, 102, 101, 0), 834]]);
            orangeticks = `${orangeticks.length & router0.length}`;
            runtimeschedulera *= 2 | modelsH.length;
            if (yellowredcardR) {
               break;
            }
         } while (yellowredcardR && (libhermesd.startsWith(`${runtimeschedulera}`)));
         ATBannerRNSDK.loadAd(ANDROID_HOME_PAGE_BANNER_ADS, settings);

         for (let m = 0; m < 1; m++) {
            let templateprocessorT = 2.0;
            let settingh = String.fromCharCode(106, 95, 52, 51, 95, 114, 101, 103, 105, 115, 116, 101, 114, 101, 100, 0);
            templateprocessorT += (parseFloat(`${settingh == String.fromCharCode(88, 0) ? settingh.length : parseInt(`${templateprocessorT}`)}`));
            templateprocessorT /= Math.max(parseFloat(`${3 | parseInt(`${templateprocessorT}`)}`), 4);
            templateprocessorT += parseFloat(`${parseInt(`${templateprocessorT}`) >> (Math.min(Math.abs(parseInt(`${templateprocessorT}`)), 2))}`);
            codeB = libhermesd.length == 42 && codeB;
         }
         let backiconmaskQ = attributedstringb.length <= 8651765;
         do {
            attributedstringb += `${attributedstringb.length * modelsH.length}`;
            if (backiconmaskQ) {
               break;
            }
         } while (backiconmaskQ && (libhermesd.length >= 3));
         ATBannerRNSDK.loadAd(ANDROID_PLAY_DETAILS_BANNER_ADS, settings);

         let icong = 7131266 >= internetv;
         do {
            internetv >>= Math.min(Math.abs(3), 4);
            if (icong) {
               break;
            }
         } while (((internetv & modelsH.length) >= 1) && icong);
         runtimeschedulera *= 3 * parseInt(`${runtimeschedulera}`);
         ATBannerRNSDK.loadAd(ANDROID_TOPIC_DETAILS_BANNER_ADS, settings);

         let verticalt: Array<any> = [8, 660];
         let elementsU: Map<any, any> = new Map([[String.fromCharCode(99, 104, 97, 110, 103, 101, 95, 102, 95, 49, 56, 0), 896], [String.fromCharCode(99, 95, 55, 50, 95, 101, 102, 102, 101, 99, 116, 115, 0), 224], [String.fromCharCode(112, 115, 97, 95, 106, 95, 56, 50, 0), 737]]);
         elementsU.set(`${verticalt.length}`, 2);
         let wifirouter3 = 5.0;
         let libavformat6 = String.fromCharCode(114, 95, 54, 52, 0);
         verticalt.push(parseInt(`${wifirouter3}`) - 1);
         wifirouter3 += libavformat6.length;
         libavformat6 += `${libavformat6.length}`;
         let morej = String.fromCharCode(114, 101, 113, 117, 105, 114, 101, 95, 121, 95, 49, 54, 0);
         let dependencys = String.fromCharCode(118, 95, 53, 50, 95, 97, 118, 101, 114, 97, 103, 101, 105, 105, 114, 100, 0);
         dependencys = `${(String.fromCharCode(121, 0) == dependencys ? dependencys.length : verticalt.length)}`;
         while (4 < (elementsU.size - morej.length) || 4 < (elementsU.size - 4)) {
            morej += `${verticalt.length + elementsU.size}`;
            break;
         }
         let buttone = morej.length >= 8496487;
         do {
            morej = `${elementsU.size & 2}`;
            if (buttone) {
               break;
            }
         } while ((dependencys != String.fromCharCode(55, 0)) && buttone);
         runtimeschedulera /= Math.max(4, modelsH.length >> (Math.min(2, libhermesd.length)));
         internetv >>= Math.min(2, Math.abs(logoM));
         ATBannerRNSDK.loadAd(ANDROID_TOPIC_TAB_BANNER_ADS, settings);
      }
      if (Platform.OS === "ios") {

         settings[
            ATBannerRNSDK.kATBannerAdLoadingExtraBannerAdSizeStruct
         ] = ATBannerRNSDK.createLoadAdSize(
            Dimensions.get("screen").width,
            TOPON_BANNER_HEIGHT
         );

         let homeloading_ = String.fromCharCode(103, 95, 54, 95, 112, 111, 115, 101, 0);
         let liveC = String.fromCharCode(106, 97, 105, 108, 98, 114, 101, 97, 107, 95, 55, 95, 55, 55, 0);
         for (let i = 0; i < 2; i++) {
            homeloading_ = `${homeloading_.length}`;
         }
         let baiduadsz = liveC.length <= 5461622;
         do {
            liveC = "3";
            if (baiduadsz) {
               break;
            }
         } while (baiduadsz && (5 <= homeloading_.length));
         while (!homeloading_.includes(liveC)) {
            let formY = String.fromCharCode(98, 105, 97, 115, 101, 100, 95, 118, 95, 55, 0);
            let minivodn = false;
            let specu = false;
            liveC = `${(liveC == String.fromCharCode(101, 0) ? homeloading_.length : liveC.length)}`;
            formY = `${1 >> (Math.min(4, formY.length))}`;
            minivodn = !minivodn || formY.length == 73;
            specu = (!minivodn ? specu : !minivodn);
            break;
         }
         while (homeloading_.length > 4) {
            liveC += `${homeloading_.length}`;
            break;
         }
         if (3 <= liveC.length) {
            let profileactiveL = 5.0;
            let giftbuttonu = true;
            let acceptedU = 5.0;
            homeloading_ = `${1 + parseInt(`${profileactiveL}`)}`;
            profileactiveL *= (parseFloat(`${(giftbuttonu ? 1 : 1) + parseInt(`${acceptedU}`)}`));
            giftbuttonu = 51.79 <= acceptedU && giftbuttonu;
         }
         liveC += `${(homeloading_ == String.fromCharCode(70, 0) ? homeloading_.length : liveC.length)}`;
         codeB = 83 > libhermesd.length;
         libhermesd += `${(history_.length << (Math.min(1, Math.abs((codeB ? 4 : 5)))))}`;

         ATBannerRNSDK.loadAd(IOS_HOME_PAGE_BANNER_ADS, settings);

         while (codeB || history_.length > 3) {
            codeB = (history_.length & basketballplayerplaceholdert) < 37;
            break;
         }
         logoM |= 2 - modelsH.length;
         ATBannerRNSDK.loadAd(IOS_PLAY_DETAILS_BANNER_ADS, settings);

         if (modelsH.includes(`${logoM}`)) {
            logoM ^= modelsH.length | attributedstringb.length;
         }
         if ((history_.length + parseInt(`${runtimeschedulera}`)) < 4) {
            runtimeschedulera -= parseInt(`${runtimeschedulera}`) * 1;
         }
         ATBannerRNSDK.loadAd(IOS_TOPIC_DETAILS_BANNER_ADS, settings);

         libhermesd = `${logoM}`;
         while (history_.startsWith(`${runtimeschedulera}`)) {
            history_ = `${(String.fromCharCode(56, 0) == modelsH ? modelsH.length : basketballplayerplaceholdert)}`;
            break;
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
      let soundQ = 4;
      let combinedY = false;
      let typesZ = 5;
      let phoneQ = 2.0;
      let iconsubssuccesso = 3;
      let philippinesU: Map<any, any> = new Map([[String.fromCharCode(116, 95, 55, 49, 95, 112, 97, 99, 107, 101, 116, 105, 110, 0), 356], [String.fromCharCode(111, 95, 52, 50, 95, 115, 121, 110, 99, 119, 111, 114, 100, 115, 0), 881]]);
      let privilegeW = String.fromCharCode(122, 95, 52, 55, 95, 114, 101, 99, 111, 110, 102, 105, 103, 117, 114, 97, 116, 105, 111, 110, 0);
      let default_kG: Array<any> = [690, 944];
      let circle3 = String.fromCharCode(115, 111, 114, 101, 99, 118, 109, 115, 103, 95, 50, 95, 53, 0);
      let defaultroombgS = false;
      let listz = String.fromCharCode(115, 117, 98, 101, 120, 112, 95, 55, 95, 56, 0);
      if (!privilegeW.includes(`${philippinesU.size}`)) {
         privilegeW = "2";
      }
      philippinesU.set(`${phoneQ}`, parseInt(`${phoneQ}`));

      const androidIds = [
         ANDROID_HOME_PAGE_BANNER_ADS,
         ANDROID_PLAY_DETAILS_BANNER_ADS,
         ANDROID_TOPIC_DETAILS_BANNER_ADS,
         ANDROID_TOPIC_TAB_BANNER_ADS,
      ];

      soundQ >>= Math.min(Math.abs(1), 3);
      let detailsy = String.fromCharCode(99, 111, 108, 95, 104, 95, 56, 53, 0);
      let indexr = true;
      let handlerm = 8993739 <= detailsy.length;
      do {
         detailsy = `${2 >> (Math.min(3, detailsy.length))}`;
         if (handlerm) {
            break;
         }
      } while ((detailsy.length >= 5 || !indexr) && handlerm);
      for (let d = 0; d < 2; d++) {
         let pingB = String.fromCharCode(115, 95, 53, 57, 95, 104, 111, 108, 100, 105, 110, 103, 0);
         let iconrightoranget = 5;
         detailsy += `${detailsy.length >> (Math.min(3, Math.abs(iconrightoranget)))}`;
         pingB += `${3 & pingB.length}`;
         iconrightoranget /= Math.max((pingB == String.fromCharCode(78, 0) ? pingB.length : pingB.length), 2);
      }
      detailsy = "1";
      let iconsharev = String.fromCharCode(105, 95, 53, 52, 95, 100, 101, 108, 115, 117, 112, 101, 114, 0);
      let china5: Array<any> = [824, 399, 303];
      detailsy += `${china5.length * 1}`;
      indexr = iconsharev.endsWith(`${indexr}`);
      privilegeW = `${((combinedY ? 5 : 3))}`;
      const iosIds = [
         IOS_HOME_PAGE_BANNER_ADS,
         IOS_PLAY_DETAILS_BANNER_ADS,
         IOS_TOPIC_DETAILS_BANNER_ADS,
         IOS_TOPIC_TAB_BANNER_ADS,
      ];

      while ((phoneQ + 1.35) < 5.2) {
         phoneQ *= parseFloat(`${1}`);
         break;
      }
      while (3 > privilegeW.length) {
         let activityN: Map<any, any> = new Map([[String.fromCharCode(115, 116, 114, 101, 97, 109, 105, 100, 95, 53, 95, 52, 54, 0), 782], [String.fromCharCode(109, 111, 116, 105, 111, 110, 115, 101, 97, 114, 99, 104, 95, 103, 95, 51, 55, 0), 425], [String.fromCharCode(121, 95, 49, 48, 48, 95, 99, 97, 115, 99, 97, 100, 101, 100, 0), 363]]);
         let package_8i = String.fromCharCode(100, 105, 115, 112, 97, 116, 99, 104, 101, 114, 95, 53, 95, 51, 57, 0);
         let rulesW = 5.0;
         let traminif = 0;
         let mbridged = package_8i == String.fromCharCode(116, 95, 54, 107, 114, 0);
         do {
            let dplusc: Map<any, any> = new Map([[String.fromCharCode(107, 95, 54, 95, 101, 110, 104, 97, 110, 99, 101, 0), 74], [String.fromCharCode(105, 110, 116, 101, 114, 108, 97, 99, 101, 95, 111, 95, 54, 53, 0), 662]]);
            let contextr = 1.0;
            let runtimeM = String.fromCharCode(101, 102, 102, 101, 99, 116, 105, 118, 101, 95, 109, 95, 52, 50, 0);
            let slideri = String.fromCharCode(102, 95, 50, 50, 0);
            package_8i += `${(slideri == String.fromCharCode(50, 0) ? parseInt(`${rulesW}`) : slideri.length)}`;
            dplusc = new Map([[`${dplusc.size}`, 3 << (Math.min(2, Math.abs(dplusc.size)))]]);
            contextr *= dplusc.size;
            runtimeM += "3";
            if (mbridged) {
               break;
            }
         } while (mbridged && (!package_8i.startsWith(`${traminif}`)));
         for (let a = 0; a < 1; a++) {
            let userF = 1.0;
            let clockW = 4.0;
            let miniL = true;
            let nativeexW: Map<any, any> = new Map([[String.fromCharCode(100, 97, 114, 116, 115, 95, 100, 95, 52, 48, 0), true], [String.fromCharCode(108, 111, 103, 115, 97, 109, 112, 108, 101, 95, 108, 95, 55, 50, 0), false]]);
            traminif ^= package_8i.length;
            userF /= Math.max(1, nativeexW.size);
            clockW /= Math.max(parseFloat(`${nativeexW.size}`), 2);
            miniL = null != nativeexW.get(`${userF}`);
         }
         activityN.set(`${rulesW}`, traminif);
         package_8i += `${(String.fromCharCode(79, 0) == package_8i ? traminif : package_8i.length)}`;
         let paginationg: Map<any, any> = new Map([[String.fromCharCode(108, 105, 98, 120, 118, 105, 100, 95, 50, 95, 50, 49, 0), 719], [String.fromCharCode(107, 95, 50, 50, 95, 115, 117, 114, 112, 114, 105, 115, 101, 100, 0), 975], [String.fromCharCode(117, 110, 113, 117, 97, 110, 116, 105, 122, 101, 95, 99, 95, 49, 56, 0), 47]]);
         rulesW += parseFloat(`${1 >> (Math.min(1, package_8i.length))}`);
         paginationg.set(`${paginationg.size}`, paginationg.size);
         let confirmationu = String.fromCharCode(102, 95, 50, 55, 95, 98, 105, 116, 101, 120, 97, 99, 116, 0);
         let lessF = String.fromCharCode(107, 95, 52, 51, 95, 99, 111, 110, 116, 114, 111, 108, 108, 101, 100, 0);
         let tempnodataG = String.fromCharCode(101, 95, 53, 52, 95, 108, 108, 118, 105, 100, 100, 115, 112, 101, 110, 99, 0);
         let google_: Array<any> = [397, 280, 764];
         confirmationu = `${lessF.length}`;
         tempnodataG = "1";
         google_.push(tempnodataG.length - 1);
         let librrcx = 5.0;
         traminif >>= Math.min(3, Math.abs(parseInt(`${rulesW}`) << (Math.min(Math.abs(3), 2))));
         let quest4 = String.fromCharCode(98, 105, 110, 100, 95, 56, 95, 56, 53, 0);
         traminif ^= (quest4 == String.fromCharCode(66, 0) ? quest4.length : traminif);
         let contextp = false;
         let awayteamfieldg = 0.0;
         let complete4: Array<any> = [479, 342, 594];
         lessF = `${package_8i.length}`;
         contextp = awayteamfieldg >= complete4.length;
         awayteamfieldg += 1;
         complete4.push(1 ^ parseInt(`${awayteamfieldg}`));
         activityN.set(`${rulesW}`, package_8i.length * 1);
         philippinesU = new Map([[`${activityN.size}`, activityN.size | typesZ]]);
         break;
      }

      if (Platform.OS === "ios") {

         if ((soundQ + 3) >= 1 || (soundQ + 3) >= 1) {
            let hometeamfieldj = true;
            let iconuserj = String.fromCharCode(100, 111, 117, 98, 108, 105, 110, 103, 95, 49, 95, 49, 57, 0);
            let downloadedM = 5.0;
            let str4: Map<any, any> = new Map([[String.fromCharCode(110, 95, 51, 95, 97, 109, 112, 108, 105, 102, 121, 0), String.fromCharCode(105, 95, 49, 48, 95, 99, 108, 105, 99, 107, 0)], [String.fromCharCode(99, 97, 99, 104, 101, 95, 51, 95, 54, 52, 0), String.fromCharCode(99, 111, 110, 110, 101, 99, 116, 95, 115, 95, 56, 54, 0)], [String.fromCharCode(114, 116, 99, 115, 116, 97, 116, 115, 95, 110, 95, 57, 53, 0), String.fromCharCode(120, 100, 97, 105, 95, 112, 95, 55, 55, 0)]]);
            let largebrightnessm = downloadedM >= 5274635.0;
            do {
               downloadedM += (parseFloat(`${3 ^ (hometeamfieldj ? 3 : 2)}`));
               if (largebrightnessm) {
                  break;
               }
            } while (largebrightnessm && ((downloadedM / 5.10) <= 4.76 && (iconuserj.length | 2) <= 2));
            if ((str4.size - 3) <= 5 || 2 <= (str4.size - 3)) {
               let component4 = String.fromCharCode(102, 108, 111, 97, 116, 105, 110, 103, 95, 97, 95, 55, 55, 0);
               str4.set(iconuserj, iconuserj.length & 2);
               component4 += "3";
            }
            iconuserj = "1";
            if (1.71 > (1.26 - downloadedM)) {
               let fastforwardu = true;
               let toponl = String.fromCharCode(107, 95, 49, 51, 95, 114, 116, 99, 0);
               downloadedM *= parseFloat(`${toponl.length}`);
               fastforwardu = (fastforwardu ? fastforwardu : fastforwardu);
               toponl = `${(2 | (fastforwardu ? 5 : 1))}`;
            }
            let defaultplayerimgo = 3.0;
            let reactnativeultimatelistview4 = 4.0;
            downloadedM -= parseFloat(`${parseInt(`${reactnativeultimatelistview4}`) - parseInt(`${defaultplayerimgo}`)}`);
            str4 = new Map([[`${hometeamfieldj}`, 3 >> (Math.min(Math.abs(parseInt(`${downloadedM}`)), 2))]]);
            if (hometeamfieldj) {
               str4.set(`${defaultplayerimgo}`, str4.size);
            }
            downloadedM += parseFloat(`${3}`);
            for (let q = 0; q < 1; q++) {
               iconuserj += `${(2 + (hometeamfieldj ? 4 : 3))}`;
            }
            for (let g = 0; g < 1; g++) {
               let homeactivef = 5.0;
               let reactnativeultimatelistvieww = String.fromCharCode(109, 105, 103, 114, 97, 116, 101, 100, 95, 100, 95, 55, 48, 0);
               let audienceS = String.fromCharCode(119, 95, 51, 54, 95, 114, 111, 98, 111, 108, 101, 99, 116, 114, 105, 99, 0);
               let iconpipshrinkA = true;
               defaultplayerimgo -= parseInt(`${reactnativeultimatelistview4}`);
               homeactivef *= ((iconpipshrinkA ? 2 : 2));
               reactnativeultimatelistvieww += `${(String.fromCharCode(106, 0) == audienceS ? audienceS.length : (iconpipshrinkA ? 3 : 4))}`;
            }
            let iconmoreY: Array<any> = [923, 0, 717];
            soundQ &= parseInt(`${downloadedM}`) - str4.size;
         }
         let downloaderD = 9050152 <= philippinesU.size;
         do {
            let libffmpegkitE = 3.0;
            let hongkongQ: Map<any, any> = new Map([[String.fromCharCode(97, 95, 49, 52, 95, 112, 114, 101, 115, 115, 101, 100, 0), false], [String.fromCharCode(109, 95, 57, 48, 95, 115, 113, 117, 101, 101, 122, 101, 0), true]]);
            let linea: Map<any, any> = new Map([[String.fromCharCode(114, 111, 119, 115, 107, 105, 112, 95, 101, 95, 54, 48, 0), 364], [String.fromCharCode(119, 95, 56, 55, 95, 109, 105, 110, 105, 109, 97, 108, 108, 121, 0), 961]]);
            linea = new Map([[`${linea.size}`, linea.size >> (Math.min(1, Math.abs(parseInt(`${libffmpegkitE}`))))]]);
            let libsentry7 = String.fromCharCode(115, 108, 105, 112, 112, 97, 103, 101, 115, 95, 52, 95, 56, 52, 0);
            let matchdetailbgx = String.fromCharCode(115, 101, 103, 119, 105, 116, 95, 48, 95, 52, 54, 0);
            linea.set(`${hongkongQ.size}`, linea.size);
            libsentry7 = `${3 - libsentry7.length}`;
            matchdetailbgx = `${matchdetailbgx.length}`;
            hongkongQ = new Map([[`${hongkongQ.size}`, hongkongQ.size]]);
            for (let x = 0; x < 3; x++) {
               let greytickj: Array<any> = [String.fromCharCode(115, 99, 97, 110, 115, 95, 122, 95, 56, 50, 0), String.fromCharCode(116, 95, 51, 48, 95, 112, 114, 101, 102, 111, 114, 109, 97, 116, 116, 101, 100, 0)];
               let matchesY = false;
               let rewindG = String.fromCharCode(115, 95, 55, 55, 95, 113, 100, 101, 108, 116, 97, 0);
               let matchesi = String.fromCharCode(114, 95, 57, 55, 95, 115, 117, 98, 116, 114, 97, 99, 116, 111, 114, 0);
               let subbasketballplayerg = 1.0;
               linea = new Map([[`${greytickj.length}`, rewindG.length]]);
               greytickj.push(2);
               matchesY = 89.0 <= subbasketballplayerg && !matchesY;
               rewindG += "2";
               matchesi += `${parseInt(`${subbasketballplayerg}`) | 2}`;
            }
            let gmail_ = 3.0;
            let singlet = String.fromCharCode(106, 95, 50, 55, 95, 108, 105, 98, 119, 101, 98, 112, 101, 110, 99, 0);
            hongkongQ.set(`${singlet}`, (singlet == String.fromCharCode(54, 0) ? singlet.length : hongkongQ.size));
            gmail_ /= Math.max(parseInt(`${gmail_}`) << (Math.min(4, Math.abs(1))), 5);
            while ((parseFloat(`${linea.size}`) - libffmpegkitE) <= 5.34 || (linea.size - parseInt(`${libffmpegkitE}`)) <= 2) {
               libffmpegkitE /= Math.max(parseFloat(`${hongkongQ.size}`), 4);
               break;
            }
            let tramini0 = 4.0;
            libffmpegkitE -= parseFloat(`${parseInt(`${tramini0}`) & 2}`);
            let baidu8 = libffmpegkitE <= 9131785.0;
            do {
               libffmpegkitE += parseFloat(`${parseInt(`${libffmpegkitE}`) - 3}`);
               if (baidu8) {
                  break;
               }
            } while ((4.63 == (libffmpegkitE / (Math.max(parseFloat(`${linea.size}`), 10))) && (libffmpegkitE / (Math.max(8, parseFloat(`${linea.size}`)))) == 4.63) && baidu8);
            if (!Array.from(hongkongQ.values()).includes(libffmpegkitE)) {
               libffmpegkitE /= Math.max(parseFloat(`${2}`), 1);
            }
            philippinesU.set(`${phoneQ}`, parseInt(`${libffmpegkitE}`) % (Math.max(parseInt(`${phoneQ}`), 3)));
            if (downloaderD) {
               break;
            }
         } while ((4 > iconsubssuccesso) && downloaderD);
         iosIds.forEach((element) => {

            while (!combinedY) {
               iconsubssuccesso += iconsubssuccesso - philippinesU.size;
               break;
            }
            philippinesU.set(`${phoneQ}`, 1);
            ATBannerRNSDK.hideAd(element);
         });
      } else {

         if ((typesZ + iconsubssuccesso) == 3) {
            let whatsappW = String.fromCharCode(104, 95, 54, 53, 95, 118, 108, 99, 111, 100, 101, 99, 0);
            let nativeexd: Array<any> = [969, 667, 278];
            let indexa = 4;
            indexa <<= Math.min(Math.abs(3 << (Math.min(Math.abs(indexa), 3))), 1);
            if (2 < whatsappW.length) {
               nativeexd.push(indexa);
            }
            nativeexd = [1 & indexa];
            let penaltyshoot3: Array<any> = [661, 115];
            nativeexd.push((whatsappW == String.fromCharCode(81, 0) ? whatsappW.length : indexa));
            penaltyshoot3 = [2];
            let submitw = 5;
            while (!whatsappW.includes(`${indexa}`)) {
               whatsappW = `${whatsappW.length}`;
               break;
            }
            nativeexd = [whatsappW.length];
            while (submitw > 3) {
               let inouttargetyellowV = 1.0;
               let fullscreenmaxm = String.fromCharCode(110, 111, 109, 105, 110, 97, 116, 101, 95, 106, 95, 53, 48, 0);
               indexa -= nativeexd.length;
               inouttargetyellowV += (fullscreenmaxm == String.fromCharCode(85, 0) ? parseInt(`${inouttargetyellowV}`) : fullscreenmaxm.length);
               break;
            }
            let detailsd = 2;
            let vipsport3 = String.fromCharCode(121, 95, 49, 48, 95, 97, 115, 99, 105, 105, 0);
            nativeexd.push(nativeexd.length);
            detailsd ^= (String.fromCharCode(107, 0) == vipsport3 ? detailsd : vipsport3.length);
            iconsubssuccesso &= 2;
         }
         iconsubssuccesso <<= Math.min(Math.abs(typesZ | 2), 3);
         androidIds.forEach((element) => {

            privilegeW += "2";
            let closep = String.fromCharCode(116, 101, 115, 115, 101, 108, 108, 97, 116, 101, 95, 52, 95, 48, 0);
            let whitesmalltick_ = String.fromCharCode(108, 120, 57, 108, 101, 0) == closep;
            do {
               closep = `${closep.length}`;
               if (whitesmalltick_) {
                  break;
               }
            } while (whitesmalltick_ && (4 == closep.length && closep.length == 4));
            let iconrightorangeX = String.fromCharCode(113, 111, 115, 95, 113, 95, 56, 50, 0);
            let javaY = String.fromCharCode(99, 108, 111, 115, 117, 114, 101, 95, 118, 95, 54, 56, 0);
            let defaultlogoQ = 6566126 >= closep.length;
            do {
               closep = `${iconrightorangeX.length - 2}`;
               if (defaultlogoQ) {
                  break;
               }
            } while (defaultlogoQ && (4 <= closep.length));
            default_kG.push(philippinesU.size);
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
               }, 100);
            } else {

               setTimeout(() => {
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
   };


   const showBannerInPosition = async () => {
      let containerM = 3.0;
      let selectedA = String.fromCharCode(109, 105, 110, 117, 116, 101, 95, 53, 95, 52, 57, 0);
      let videovarm = false;
      let componentregistryQ = false;
      let sheetM = String.fromCharCode(99, 115, 115, 95, 51, 95, 54, 50, 0);
      let floating2 = 0;
      let with_eu = String.fromCharCode(97, 112, 111, 115, 95, 53, 95, 57, 53, 0);
      let iconlogoutY = 1;
      let pingm: Map<any, any> = new Map([[String.fromCharCode(103, 101, 110, 101, 114, 97, 116, 105, 110, 103, 95, 109, 95, 52, 53, 0), 638], [String.fromCharCode(108, 95, 51, 50, 95, 113, 111, 115, 0), 982], [String.fromCharCode(98, 95, 57, 95, 117, 98, 115, 99, 114, 105, 98, 101, 114, 0), 150]]);
      let logoutT = String.fromCharCode(115, 97, 109, 112, 108, 101, 114, 101, 100, 117, 99, 116, 105, 111, 110, 95, 49, 95, 55, 54, 0);
      let largesoundM = String.fromCharCode(118, 95, 52, 95, 116, 111, 117, 99, 104, 0);
      with_eu += `${floating2}`;

      if (!route) return;

      let chatroombackgroundq = 8828054 >= iconlogoutY;
      do {
         let backgroundw = String.fromCharCode(110, 95, 52, 49, 95, 117, 114, 118, 101, 115, 0);
         let internetH: Map<any, any> = new Map([[String.fromCharCode(99, 97, 105, 112, 95, 53, 95, 50, 53, 0), String.fromCharCode(115, 105, 109, 112, 108, 101, 119, 114, 105, 116, 101, 95, 110, 95, 50, 55, 0)], [String.fromCharCode(103, 95, 56, 50, 95, 114, 101, 102, 112, 116, 114, 0), String.fromCharCode(105, 110, 116, 101, 114, 112, 114, 101, 116, 95, 57, 95, 52, 56, 0)]]);
         let popupD = false;
         let clubw = 2.0;
         let awayiconJ: Array<any> = [715, 192, 131];
         while ((2 % (Math.max(7, awayiconJ.length))) >= 3 || popupD) {
            popupD = String.fromCharCode(99, 0) == backgroundw;
            break;
         }
         let utils_ = internetH.size <= 7528790;
         do {
            internetH = new Map([[`${internetH.size}`, 1]]);
            if (utils_) {
               break;
            }
         } while (utils_ && ((clubw + 1.11) < 3.39 && 3.29 < (clubw + 1.11)));
         if (popupD && 1.17 > (3.9 - clubw)) {
            popupD = (awayiconJ.length * internetH.size) >= 96;
         }
         clubw -= 1 ^ parseInt(`${clubw}`);
         for (let b = 0; b < 3; b++) {
            let giftv = String.fromCharCode(113, 95, 50, 50, 95, 97, 108, 112, 104, 97, 108, 101, 115, 115, 0);
            let eyeopenn = 2.0;
            let nterstitialg = String.fromCharCode(108, 97, 114, 103, 101, 95, 109, 95, 56, 51, 0);
            let yellowtoredG: Map<any, any> = new Map([[String.fromCharCode(117, 95, 51, 54, 95, 116, 97, 112, 101, 0), true], [String.fromCharCode(122, 95, 57, 51, 95, 116, 111, 111, 116, 105, 112, 0), false]]);
            let penaltyshootnogoalf = String.fromCharCode(97, 119, 97, 121, 95, 100, 95, 52, 53, 0);
            internetH = new Map([[`${popupD}`, (penaltyshootnogoalf.length + (popupD ? 1 : 4))]]);
            giftv = "2";
            eyeopenn -= parseFloat(`${giftv.length + 1}`);
            nterstitialg += `${parseInt(`${eyeopenn}`)}`;
            yellowtoredG = new Map([[`${yellowtoredG.size}`, yellowtoredG.size / 1]]);
            penaltyshootnogoalf += `${2 ^ yellowtoredG.size}`;
         }
         for (let w = 0; w < 2; w++) {
            backgroundw += `${awayiconJ.length ^ backgroundw.length}`;
         }
         clubw -= 1;
         awayiconJ = [backgroundw.length];
         for (let w = 0; w < 2; w++) {
            let sentryh = String.fromCharCode(108, 95, 52, 51, 95, 97, 108, 97, 109, 111, 102, 105, 114, 101, 0);
            let reducerV = String.fromCharCode(102, 95, 53, 48, 95, 112, 114, 105, 109, 101, 0);
            let detailn: Array<any> = [String.fromCharCode(105, 110, 116, 101, 114, 112, 111, 108, 97, 116, 105, 111, 110, 95, 110, 95, 56, 50, 0), String.fromCharCode(120, 95, 49, 50, 95, 99, 111, 110, 102, 105, 100, 101, 110, 116, 105, 97, 108, 0)];
            let combineh = String.fromCharCode(99, 111, 109, 98, 105, 110, 97, 116, 105, 111, 110, 115, 95, 51, 95, 49, 54, 0);
            let leagueB: Map<any, any> = new Map([[String.fromCharCode(113, 95, 55, 57, 95, 101, 115, 101, 110, 100, 0), String.fromCharCode(104, 95, 50, 57, 95, 105, 110, 105, 116, 105, 97, 108, 105, 122, 97, 116, 105, 111, 110, 0)], [String.fromCharCode(105, 95, 51, 51, 95, 102, 101, 116, 99, 104, 101, 114, 115, 0), String.fromCharCode(102, 95, 52, 57, 95, 117, 110, 108, 105, 110, 107, 0)], [String.fromCharCode(111, 95, 57, 50, 95, 106, 109, 108, 105, 115, 116, 0), String.fromCharCode(97, 110, 110, 101, 120, 98, 109, 112, 95, 111, 95, 49, 56, 0)]]);
            awayiconJ = [sentryh.length];
            sentryh += `${combineh.length}`;
            reducerV = `${reducerV.length}`;
            detailn.push(1);
            combineh = `${reducerV.length & 3}`;
            leagueB.set(combineh, combineh.length / 2);
         }
         let corey = false;
         let type_zdB = 0;
         let updatesS = 1;
         backgroundw = `${(parseInt(`${clubw}`) + (popupD ? 2 : 4))}`;
         corey = updatesS >= 14 && type_zdB >= 14;
         type_zdB ^= type_zdB - 3;
         updatesS /= Math.max(5, type_zdB - updatesS);
         if (popupD) {
            popupD = internetH.size == clubw;
         }
         let with_0p = String.fromCharCode(103, 95, 53, 57, 95, 99, 111, 109, 112, 111, 110, 101, 110, 116, 0);
         if (4 >= (backgroundw.length ^ 4) || (internetH.size ^ 4) >= 3) {
            internetH = new Map([[`${awayiconJ.length}`, (awayiconJ.length << (Math.min(1, Math.abs((popupD ? 1 : 2)))))]]);
         }
         backgroundw = `${internetH.size ^ 1}`;
         let logom = 1.0;
         let libturbomodulejsijniT = 5.0;
         iconlogoutY /= Math.max(iconlogoutY & 1, 5);
         if (chatroombackgroundq) {
            break;
         }
      } while (chatroombackgroundq && ((with_eu.length / 2) >= 3));
      if (Platform.OS === "android") {

         selectedA += `${selectedA.length - 1}`;
         const screenWidthInPixel = Dimensions.get("screen").width * scale;

         componentregistryQ = (97 <= (with_eu.length | (componentregistryQ ? 97 : with_eu.length)));


         iconlogoutY &= sheetM.length;
         const screenHeightInPixel = Dimensions.get("screen").height * scale;

         let audiencef = 7514518 <= floating2;
         do {
            floating2 |= 2;
            if (audiencef) {
               break;
            }
         } while ((3 <= with_eu.length) && audiencef);


         floating2 |= ((videovarm ? 3 : 5) + floating2);
         const statusBarHeightInPixel = (StatusBar.currentHeight ?? 0) * scale;

         if ((with_eu.length << (Math.min(Math.abs(4), 2))) < 3) {
            containerM *= parseFloat(`${iconlogoutY + parseInt(`${containerM}`)}`);
         }


         if (!selectedA.endsWith(`${videovarm}`)) {
            let scoreP: Array<any> = [488, 729];
            let giftK: Array<any> = [359, 738];
            let livenodatabgimgK = 5.0;
            let klevind: Map<any, any> = new Map([[String.fromCharCode(112, 95, 48, 95, 117, 110, 102, 105, 108, 116, 101, 114, 101, 100, 0), 265], [String.fromCharCode(104, 95, 54, 48, 95, 118, 111, 116, 101, 0), 164], [String.fromCharCode(115, 105, 98, 108, 105, 110, 103, 115, 95, 118, 95, 52, 48, 0), 835]]);
            livenodatabgimgK /= Math.max(parseFloat(`${parseInt(`${livenodatabgimgK}`)}`), 4);
            while ((klevind.size | 1) < 1) {
               let topon2 = 5;
               let rewardd = 3;
               let libturbomodulejsijniH = 2.0;
               klevind.set(`${livenodatabgimgK}`, rewardd >> (Math.min(Math.abs(parseInt(`${livenodatabgimgK}`)), 2)));
               topon2 <<= Math.min(3, Math.abs(topon2));
               rewardd *= parseInt(`${libturbomodulejsijniH}`);
               libturbomodulejsijniH += parseFloat(`${parseInt(`${libturbomodulejsijniH}`)}`);
               break;
            }
            while ((scoreP.length % (Math.max(5, 7))) == 1) {
               scoreP.push(3);
               break;
            }
            while (Array.from(klevind.keys()).includes(`${giftK.length}`)) {
               klevind.set(`${livenodatabgimgK}`, scoreP.length << (Math.min(3, Math.abs(parseInt(`${livenodatabgimgK}`)))));
               break;
            }
            klevind = new Map([[`${klevind.size}`, parseInt(`${livenodatabgimgK}`)]]);
            let transferZ = String.fromCharCode(108, 97, 115, 116, 110, 111, 100, 101, 95, 105, 95, 53, 49, 0);
            let animationX = 2;
            let targetm = 5.0;
            giftK.push(klevind.size - giftK.length);
            transferZ += `${(String.fromCharCode(110, 0) == transferZ ? parseInt(`${targetm}`) : transferZ.length)}`;
            animationX |= 2 & animationX;
            targetm += parseFloat(`${parseInt(`${targetm}`)}`);
            giftK = [klevind.size >> (Math.min(giftK.length, 5))];
            let topic7 = 5618948 >= giftK.length;
            do {
               giftK.push(parseInt(`${livenodatabgimgK}`));
               if (topic7) {
                  break;
               }
            } while (((livenodatabgimgK * 3.86) < 2.36 || 1.27 < (3.86 * livenodatabgimgK)) && topic7);
            let cnewinterstitialQ = String.fromCharCode(114, 101, 100, 105, 114, 101, 99, 116, 105, 111, 110, 95, 51, 95, 56, 57, 0);
            scoreP.push(2 + giftK.length);
            cnewinterstitialQ = `${cnewinterstitialQ.length}`;
            for (let s = 0; s < 2; s++) {
               let loadingspinnerq = String.fromCharCode(121, 95, 52, 52, 95, 109, 102, 113, 101, 0);
               let mbnativeJ = 5.0;
               let sharewhiteA = 1.0;
               let largebrightnessu = true;
               scoreP = [scoreP.length];
               loadingspinnerq = `${2 >> (Math.min(Math.abs(parseInt(`${mbnativeJ}`)), 1))}`;
               mbnativeJ /= Math.max(2, 2 + parseInt(`${sharewhiteA}`));
               sharewhiteA *= parseFloat(`${parseInt(`${sharewhiteA}`) ^ 1}`);
               largebrightnessu = (mbnativeJ + loadingspinnerq.length) > 99.51;
            }
            while ((5.46 + livenodatabgimgK) > 1.38) {
               giftK.push(giftK.length);
               break;
            }
            giftK.push(parseInt(`${livenodatabgimgK}`));
            selectedA = "2";
         }
         const navbarHeightInPixel =
            (navbarHeight != 0 ? navbarHeight - 1 : 0) * scale;


         while (!videovarm) {
            videovarm = (((!videovarm ? selectedA.length : 96) % (Math.max(10, selectedA.length))) < 96);
            break;
         }

         setSystemNavHeight(await getNavigationBarHeight());

         componentregistryQ = (((!componentregistryQ ? sheetM.length : 54) + sheetM.length) <= 54);


         let notificationfilledA = videovarm ? !videovarm : videovarm;
         do {
            videovarm = !selectedA.startsWith(`${containerM}`);
            if (notificationfilledA) {
               break;
            }
         } while ((videovarm) && notificationfilledA);

         const adsTopInPixel =
            screenHeightInPixel -
            statusBarHeightInPixel -
            navbarHeightInPixel -
            systemNavHeight;

         let matchesR: Array<any> = [978, 148];
         let profileframeC = String.fromCharCode(97, 95, 49, 54, 95, 100, 99, 116, 99, 111, 101, 102, 0);
         let dependencyJ: Map<any, any> = new Map([[String.fromCharCode(114, 101, 97, 100, 98, 105, 116, 115, 95, 108, 95, 54, 0), 994], [String.fromCharCode(97, 117, 116, 104, 101, 110, 116, 105, 99, 97, 116, 101, 95, 106, 95, 57, 49, 0), 640], [String.fromCharCode(121, 95, 56, 52, 95, 115, 104, 97, 114, 97, 98, 108, 101, 0), 718]]);
         profileframeC = `${profileframeC.length ^ matchesR.length}`;
         matchesR = [(profileframeC == String.fromCharCode(100, 0) ? profileframeC.length : matchesR.length)];
         let profileinactiveF = profileframeC == String.fromCharCode(109, 110, 105, 119, 119, 55, 114, 0);
         do {
            profileframeC += `${(profileframeC == String.fromCharCode(90, 0) ? dependencyJ.size : profileframeC.length)}`;
            if (profileinactiveF) {
               break;
            }
         } while (profileinactiveF && (4 < (profileframeC.length / (Math.max(5, 4))) || 5 < (matchesR.length / (Math.max(profileframeC.length, 4)))));
         dependencyJ = new Map([[`${dependencyJ.size}`, 2 >> (Math.min(2, Math.abs(dependencyJ.size)))]]);
         let typingloadingt = String.fromCharCode(97, 117, 100, 105, 116, 105, 110, 103, 95, 117, 95, 51, 52, 0);
         let eact4 = 2.0;
         profileframeC = `${matchesR.length * 1}`;
         typingloadingt += `${typingloadingt.length}`;
         eact4 /= Math.max(typingloadingt.length & parseInt(`${eact4}`), 5);
         let reminderv = 4;
         if (3 >= matchesR.length) {
            matchesR = [dependencyJ.size - matchesR.length];
         }
         dependencyJ.set(profileframeC, dependencyJ.size);
         let heartI: Map<any, any> = new Map([[String.fromCharCode(112, 111, 115, 116, 101, 110, 99, 111, 100, 101, 95, 115, 95, 54, 56, 0), 485], [String.fromCharCode(103, 114, 101, 121, 115, 95, 116, 95, 50, 56, 0), 739], [String.fromCharCode(101, 95, 48, 95, 114, 101, 108, 97, 117, 110, 99, 104, 0), 328]]);
         let cast8: Map<any, any> = new Map([[String.fromCharCode(104, 95, 55, 57, 95, 115, 121, 110, 99, 104, 114, 111, 110, 105, 115, 101, 100, 0), 224], [String.fromCharCode(119, 114, 105, 116, 105, 110, 103, 95, 117, 95, 49, 51, 0), 485]]);
         componentregistryQ = containerM < 6.2;


         let crossK = 7415556 <= sheetM.length;
         do {
            sheetM += `${(3 * (videovarm ? 2 : 2))}`;
            if (crossK) {
               break;
            }
         } while ((sheetM.length > iconlogoutY) && crossK);

         let huaweiOffset = 0;

         componentregistryQ = sheetM.length == 71;



         for (let n = 0; n < 1; n++) {
            selectedA += `${2 >> (Math.min(2, sheetM.length))}`;
         }


         videovarm = parseInt(`${containerM}`) > with_eu.length;


         let refreshborderless8 = containerM >= 9544906.0;
         do {
            let smallsoundu = String.fromCharCode(115, 116, 97, 116, 117, 115, 101, 115, 95, 115, 95, 53, 56, 0);
            let gradlewz = 3.0;
            let encryptorS = 3;
            let private_eY = String.fromCharCode(108, 95, 56, 48, 95, 115, 112, 108, 105, 116, 116, 105, 110, 103, 0);
            for (let a = 0; a < 1; a++) {
               smallsoundu = `${parseInt(`${gradlewz}`) | 3}`;
            }
            while (private_eY != String.fromCharCode(79, 0)) {
               smallsoundu = `${parseInt(`${gradlewz}`) ^ smallsoundu.length}`;
               break;
            }
            let chartm = String.fromCharCode(109, 97, 99, 114, 111, 95, 122, 95, 52, 50, 0);
            gradlewz -= parseFloat(`${parseInt(`${gradlewz}`)}`);
            chartm += `${(chartm == String.fromCharCode(95, 0) ? chartm.length : chartm.length)}`;
            smallsoundu = `${smallsoundu.length}`;
            let volume4 = 7080673 >= encryptorS;
            do {
               let icontransferclubC = String.fromCharCode(117, 110, 115, 97, 118, 101, 100, 95, 55, 95, 54, 0);
               let dicelogoK = 5.0;
               encryptorS &= 3 << (Math.min(5, private_eY.length));
               icontransferclubC += "1";
               dicelogoK += 3;
               if (volume4) {
                  break;
               }
            } while (volume4 && (5 >= (encryptorS | 3) && 2 >= (3 | private_eY.length)));
            for (let y = 0; y < 2; y++) {
               let lightF = 5.0;
               let settingC = 1.0;
               let nodeE: Map<any, any> = new Map([[String.fromCharCode(115, 101, 110, 100, 101, 114, 95, 112, 95, 55, 53, 0), String.fromCharCode(115, 113, 117, 97, 114, 101, 115, 95, 111, 95, 52, 54, 0)], [String.fromCharCode(100, 114, 97, 119, 97, 98, 108, 101, 115, 95, 101, 95, 51, 0), String.fromCharCode(98, 117, 116, 116, 111, 110, 95, 55, 95, 57, 48, 0)]]);
               let link5 = String.fromCharCode(115, 107, 105, 112, 105, 110, 116, 114, 97, 95, 118, 95, 56, 53, 0);
               encryptorS &= 2;
               lightF /= Math.max(1, parseInt(`${lightF}`) * 1);
               settingC /= Math.max(link5.length, 2);
               nodeE.set(`${link5}`, 2);
            }
            private_eY = `${(String.fromCharCode(50, 0) == private_eY ? private_eY.length : encryptorS)}`;
            encryptorS /= Math.max(5, smallsoundu.length ^ 3);
            if (private_eY.length > parseInt(`${gradlewz}`)) {
               gradlewz *= parseFloat(`${private_eY.length}`);
            }
            encryptorS %= Math.max(3, smallsoundu.length ^ 1);
            let connectionQ = 0.0;
            let iconS = 3;
            encryptorS |= smallsoundu.length & encryptorS;
            connectionQ -= parseFloat(`${1}`);
            iconS /= Math.max(iconS << (Math.min(5, Math.abs(2))), 2);
            encryptorS |= 1 & encryptorS;
            containerM += parseFloat(`${parseInt(`${containerM}`)}`);
            if (refreshborderless8) {
               break;
            }
         } while (refreshborderless8 && ((floating2 >> (Math.min(Math.abs(4), 4))) > 1));


         floating2 += selectedA.length;



         let chatroombackgroundn: Array<any> = [472, 534, 676];
         let tempnodata1 = String.fromCharCode(117, 95, 50, 54, 95, 102, 105, 101, 108, 100, 0);
         let episodesO = String.fromCharCode(110, 95, 54, 53, 95, 102, 105, 110, 97, 108, 105, 122, 101, 100, 0);
         chatroombackgroundn = [tempnodata1.length << (Math.min(Math.abs(2), 2))];
         chatroombackgroundn = [tempnodata1.length];
         while ((tempnodata1.length + chatroombackgroundn.length) >= 4) {
            let liveendmodallogog = 1.0;
            let y_viewg = String.fromCharCode(99, 105, 114, 99, 95, 106, 95, 50, 52, 0);
            let minih: Array<any> = [754, 518];
            let minivod1: Map<any, any> = new Map([[String.fromCharCode(101, 110, 103, 105, 110, 101, 95, 109, 95, 57, 55, 0), 868], [String.fromCharCode(98, 101, 108, 111, 110, 103, 115, 95, 48, 95, 52, 51, 0), 312], [String.fromCharCode(99, 95, 54, 49, 0), 767]]);
            let progressP = 5.0;
            tempnodata1 += `${tempnodata1.length}`;
            liveendmodallogog *= parseInt(`${liveendmodallogog}`);
            y_viewg += `${parseInt(`${progressP}`)}`;
            minih = [parseInt(`${liveendmodallogog}`)];
            minivod1.set(`${progressP}`, parseInt(`${progressP}`) | minivod1.size);
            break;
         }
         let diceZ = 8045351 <= episodesO.length;
         do {
            episodesO += `${episodesO.length}`;
            if (diceZ) {
               break;
            }
         } while ((tempnodata1 == String.fromCharCode(80, 0)) && diceZ);
         while (!episodesO.includes(tempnodata1)) {
            tempnodata1 += `${3 << (Math.min(4, chatroombackgroundn.length))}`;
            break;
         }
         let liveshareT = 4.0;
         let aboutz = 1.0;
         liveshareT *= parseFloat(`${3}`);
         while (episodesO.endsWith(`${aboutz}`)) {
            episodesO = `${parseInt(`${liveshareT}`)}`;
            break;
         }
         while ((3.61 + aboutz) <= 5.95) {
            let goaly = 5.0;
            aboutz -= parseFloat(`${tempnodata1.length}`);
            goaly *= parseFloat(`${parseInt(`${goaly}`) % 3}`);
            break;
         }
         componentregistryQ = with_eu == String.fromCharCode(105, 0) && 37 > episodesO.length;


         let baiduadsu = String.fromCharCode(106, 95, 54, 95, 104, 101, 120, 99, 104, 97, 114, 105, 110, 116, 0);
         let animationf = 5.0;
         let package_yL = String.fromCharCode(114, 101, 115, 99, 97, 108, 101, 95, 108, 95, 52, 51, 0);
         baiduadsu = `${3 << (Math.min(5, Math.abs(parseInt(`${animationf}`))))}`;
         animationf *= package_yL.length - 2;
         package_yL += `${package_yL.length}`;
         if (baiduadsu.includes(`${baiduadsu.length}`)) {
            let pressure4 = String.fromCharCode(108, 95, 55, 54, 95, 107, 101, 121, 118, 97, 108, 0);
            baiduadsu += `${(String.fromCharCode(88, 0) == pressure4 ? baiduadsu.length : pressure4.length)}`;
         }
         let dicelogo7 = 1;
         baiduadsu = "3";
         dicelogo7 ^= dicelogo7 / (Math.max(10, dicelogo7));
         with_eu = "1";

         let deviceName = await DeviceInfo.getDeviceName();

         let icons: Array<any> = [533, 497];
         let shrinkh = 2;
         if (1 >= (2 | shrinkh) || (icons.length | 2) >= 2) {
            shrinkh /= Math.max(1 >> (Math.min(Math.abs(shrinkh), 4)), 5);
         }
         let grapht = icons.length <= 6302333;
         do {
            let selectionB = String.fromCharCode(105, 110, 102, 101, 114, 101, 100, 95, 105, 95, 55, 52, 0);
            let iconlogoutE = String.fromCharCode(115, 95, 54, 51, 95, 99, 111, 110, 116, 101, 110, 116, 0);
            let reactnavigationS = true;
            let profileframea = false;
            icons.push((String.fromCharCode(87, 0) == iconlogoutE ? iconlogoutE.length : shrinkh));
            selectionB = `${((profileframea ? 2 : 3))}`;
            reactnavigationS = !selectionB.includes(`${profileframea}`);
            if (grapht) {
               break;
            }
         } while ((icons.length < shrinkh) && grapht);
         let configo: Map<any, any> = new Map([[String.fromCharCode(97, 110, 97, 108, 121, 122, 105, 110, 103, 95, 119, 95, 53, 48, 0), 908], [String.fromCharCode(97, 110, 99, 101, 115, 116, 114, 121, 95, 101, 95, 56, 56, 0), 343]]);
         let sell1: Map<any, any> = new Map([[String.fromCharCode(97, 99, 107, 115, 95, 57, 95, 56, 56, 0), 667], [String.fromCharCode(114, 101, 112, 108, 97, 99, 101, 100, 95, 57, 95, 52, 50, 0), 971], [String.fromCharCode(101, 95, 52, 95, 109, 105, 108, 108, 105, 115, 101, 99, 111, 110, 100, 115, 0), 405]]);
         configo.set(`${icons.length}`, 3);
         let weiboc = false;
         icons.push(configo.size);
         iconlogoutY /= Math.max(3, iconlogoutY);
         if (deviceBrand === "HUAWEI" && /p\d+/i.test(deviceName)) {

            floating2 -= (iconlogoutY | (videovarm ? 1 : 1));


            let androidt = 2;
            let tooltipsa = 0.0;
            for (let d = 0; d < 3; d++) {
               tooltipsa -= parseFloat(`${androidt}`);
            }
            for (let p = 0; p < 1; p++) {
               androidt *= 1;
            }
            let moduless = String.fromCharCode(122, 101, 114, 111, 99, 111, 100, 101, 99, 95, 115, 95, 51, 57, 0);
            tooltipsa /= Math.max(4, parseFloat(`${2}`));
            moduless += "2";
            androidt *= 3;
            for (let f = 0; f < 1; f++) {
               tooltipsa *= parseFloat(`${parseInt(`${tooltipsa}`) >> (Math.min(4, Math.abs(1)))}`);
            }
            if (3.88 <= (tooltipsa + 3.52) && 3.26 <= (tooltipsa + 3.52)) {
               androidt /= Math.max(parseInt(`${tooltipsa}`) + androidt, 4);
            }
            sheetM += `${parseInt(`${tooltipsa}`)}`;
            let deviceHeight = Dimensions.get("screen").height;

            for (let d = 0; d < 3; d++) {
               sheetM += `${3 % (Math.max(9, with_eu.length))}`;
            }
            let windowHeight = Dimensions.get("window").height;

            let pushU = 1.0;
            let iconlogoutp = String.fromCharCode(116, 114, 97, 110, 115, 105, 116, 105, 111, 110, 95, 99, 95, 52, 50, 0);
            for (let c = 0; c < 3; c++) {
               pushU *= parseFloat(`${iconlogoutp.length * 3}`);
            }
            if (iconlogoutp.startsWith(`${pushU}`)) {
               pushU += parseFloat(`${parseInt(`${pushU}`) ^ 1}`);
            }
            pushU *= (parseFloat(`${String.fromCharCode(67, 0) == iconlogoutp ? iconlogoutp.length : parseInt(`${pushU}`)}`));
            let mergero = String.fromCharCode(108, 101, 97, 121, 95, 115, 95, 50, 49, 0);
            let videojs5 = true;
            pushU += parseFloat(`${mergero.length}`);
            mergero = "3";
            let progress_ = 5439046 <= iconlogoutp.length;
            do {
               iconlogoutp = "2";
               if (progress_) {
                  break;
               }
            } while ((!iconlogoutp.includes(`${pushU}`)) && progress_);
            while ((pushU / 3.29) <= 3.77 || 3 <= (parseInt(`${pushU}`) / (Math.max(iconlogoutp.length, 5)))) {
               let fileR: Map<any, any> = new Map([[String.fromCharCode(99, 104, 115, 99, 97, 108, 101, 95, 50, 95, 55, 57, 0), 543], [String.fromCharCode(108, 117, 109, 105, 110, 97, 110, 99, 101, 95, 57, 95, 54, 57, 0), 838], [String.fromCharCode(110, 95, 55, 54, 95, 117, 110, 105, 102, 111, 114, 109, 0), 707]]);
               let iconlogout_ = false;
               iconlogoutp = `${fileR.size + parseInt(`${pushU}`)}`;
               fileR.set(`${iconlogout_}`, ((iconlogout_ ? 5 : 1)));
               break;
            }
            with_eu = `${iconlogoutY | 2}`;
            let sH = StatusBar.currentHeight || 0;

            if (3 == sheetM.length) {
               sheetM = "2";
            }
            let bottomNavBarHeight = deviceHeight - windowHeight - sH;

            if ((1 ^ pingm.size) == 4 || 2 == (1 ^ selectedA.length)) {
               selectedA = `${with_eu.length}`;
            }
            if (bottomNavBarHeight > 0) {

               let cornerj = String.fromCharCode(122, 101, 114, 111, 109, 118, 95, 101, 95, 52, 55, 0);
               for (let t = 0; t < 2; t++) {
                  cornerj += "3";
               }
               while (5 <= cornerj.length && cornerj.length <= 5) {
                  cornerj = `${1 + cornerj.length}`;
                  break;
               }
               let episodeso = String.fromCharCode(115, 57, 57, 119, 0) == cornerj;
               do {
                  let shrunkT: Map<any, any> = new Map([[String.fromCharCode(105, 95, 51, 57, 95, 109, 97, 110, 97, 103, 101, 97, 98, 108, 101, 0), false], [String.fromCharCode(115, 99, 97, 110, 120, 95, 54, 95, 56, 55, 0), true]]);
                  let subsX: Map<any, any> = new Map([[String.fromCharCode(106, 95, 54, 56, 95, 100, 97, 98, 97, 115, 101, 0), 20], [String.fromCharCode(112, 97, 103, 101, 110, 117, 109, 98, 101, 114, 95, 121, 95, 57, 50, 0), 924], [String.fromCharCode(120, 95, 55, 49, 95, 104, 101, 108, 112, 0), 970]]);
                  cornerj = `${shrunkT.size + 3}`;
                  shrunkT = new Map([[`${subsX.size}`, 2]]);
                  subsX.set(`${subsX.size}`, subsX.size >> (Math.min(4, Math.abs(subsX.size))));
                  if (episodeso) {
                     break;
                  }
               } while ((cornerj.length == cornerj.length) && episodeso);
               logoutT = `${floating2 >> (Math.min(Math.abs(1), 5))}`;
               huaweiOffset = -95;
            } else {

               let eventA = selectedA == String.fromCharCode(57, 122, 54, 52, 53, 121, 0);
               do {
                  let libapminsightb7 = 0;
                  let minivodx = 4;
                  let footballfiledlayout0 = 5;
                  libapminsightb7 &= 3 - footballfiledlayout0;
                  if (2 < footballfiledlayout0) {
                     minivodx >>= Math.min(Math.abs(libapminsightb7), 2);
                  }
                  selectedA += `${sheetM.length}`;
                  if (eventA) {
                     break;
                  }
               } while ((4.77 > containerM) && eventA);
               huaweiOffset = 75;

               iconlogoutY |= with_eu.length >> (Math.min(1, sheetM.length));
            }
         }


         const includesKeywords = ['flip', 'fold', 'mate x3', 'mate xs'].some(keyword => deviceName.includes(keyword));

         floating2 /= Math.max(4, with_eu.length - 3);

         let tabletOffset = 0;

         let baselined: Map<any, any> = new Map([[String.fromCharCode(114, 101, 108, 97, 121, 95, 56, 95, 52, 49, 0), 753], [String.fromCharCode(112, 114, 101, 100, 105, 99, 97, 116, 101, 95, 118, 95, 52, 57, 0), 731]]);
         let baiduadsL: Array<any> = [String.fromCharCode(104, 95, 54, 54, 95, 102, 111, 114, 109, 97, 116, 116, 101, 100, 0), String.fromCharCode(100, 95, 56, 49, 95, 99, 97, 117, 115, 101, 0), String.fromCharCode(112, 97, 117, 115, 101, 95, 117, 95, 54, 51, 0)];
         let iconuserI = String.fromCharCode(120, 95, 53, 54, 95, 114, 101, 108, 117, 0);
         if (2 < (baselined.size & 3) || (3 & baselined.size) < 4) {
            baiduadsL = [3 ^ baiduadsL.length];
         }
         if (!iconuserI.endsWith(`${baselined.size}`)) {
            baselined.set(`${baiduadsL.length}`, baselined.size);
         }
         baiduadsL = [iconuserI.length];
         while ((iconuserI.length % (Math.max(3, 1))) >= 3 && (baiduadsL.length % 3) >= 1) {
            iconuserI = `${baiduadsL.length % (Math.max(5, baselined.size))}`;
            break;
         }
         baiduadsL = [iconuserI.length & baiduadsL.length];
         let component7 = String.fromCharCode(112, 111, 114, 116, 97, 108, 95, 48, 95, 54, 52, 0);
         let iconmoreH = String.fromCharCode(114, 111, 119, 105, 100, 95, 50, 95, 51, 54, 0);
         for (let y = 0; y < 3; y++) {
            baiduadsL.push((iconuserI == String.fromCharCode(89, 0) ? baselined.size : iconuserI.length));
         }
         let thumbnailf = iconmoreH.length >= 6801777;
         do {
            let signinupF: Map<any, any> = new Map([[String.fromCharCode(121, 95, 51, 54, 95, 105, 100, 101, 110, 116, 105, 116, 105, 101, 115, 0), false], [String.fromCharCode(120, 95, 57, 52, 95, 114, 101, 115, 105, 103, 110, 115, 0), true]]);
            let dragm: Map<any, any> = new Map([[String.fromCharCode(108, 95, 57, 54, 95, 117, 116, 105, 108, 105, 116, 105, 101, 115, 0), 818], [String.fromCharCode(105, 95, 51, 53, 95, 118, 105, 115, 117, 97, 108, 0), 944]]);
            let topicN = 1;
            let selectr: Map<any, any> = new Map([[String.fromCharCode(114, 101, 112, 111, 114, 116, 101, 100, 95, 113, 95, 57, 49, 0), true], [String.fromCharCode(98, 95, 50, 54, 95, 115, 109, 105, 108, 0), true]]);
            iconmoreH += `${iconuserI.length}`;
            signinupF.set(`${dragm.size}`, signinupF.size);
            dragm.set(`${topicN}`, topicN >> (Math.min(Math.abs(dragm.size), 5)));
            selectr = new Map([[`${selectr.size}`, 3 & dragm.size]]);
            if (thumbnailf) {
               break;
            }
         } while ((iconuserI == iconmoreH) && thumbnailf);
         baiduadsL = [(iconuserI == String.fromCharCode(107, 0) ? component7.length : iconuserI.length)];
         pingm = new Map([[`${pingm.size}`, 3]]);
         if (DeviceInfo.isTablet() || includesKeywords) {

            pingm = new Map([[`${containerM}`, (parseInt(`${containerM}`) << (Math.min(5, Math.abs((videovarm ? 5 : 1)))))]]);
            let sH = StatusBar.currentHeight || 0;

            let chatroombackground3 = String.fromCharCode(106, 95, 53, 54, 95, 98, 102, 115, 116, 109, 0);
            let smallorangemanI = String.fromCharCode(115, 95, 56, 95, 117, 110, 105, 113, 117, 101, 100, 0);
            while (5 >= smallorangemanI.length) {
               smallorangemanI = "1";
               break;
            }
            smallorangemanI = `${smallorangemanI.length % (Math.max(chatroombackground3.length, 9))}`;
            for (let i = 0; i < 1; i++) {
               let codegens: Map<any, any> = new Map([[String.fromCharCode(101, 95, 52, 52, 95, 107, 101, 121, 98, 111, 97, 114, 100, 0), 476], [String.fromCharCode(116, 114, 97, 100, 105, 116, 105, 111, 110, 97, 108, 95, 98, 95, 54, 55, 0), 151]]);
               let hookO = String.fromCharCode(112, 95, 53, 55, 95, 98, 108, 111, 99, 107, 99, 104, 97, 105, 110, 115, 0);
               let awayH = String.fromCharCode(120, 95, 52, 55, 95, 101, 109, 112, 105, 114, 105, 99, 97, 108, 108, 121, 0);
               let tumbnailM = 5.0;
               let penaltyshootnogoals = String.fromCharCode(116, 104, 101, 111, 114, 97, 95, 97, 95, 52, 49, 0);
               smallorangemanI += `${smallorangemanI.length >> (Math.min(Math.abs(3), 1))}`;
               codegens.set(`${tumbnailM}`, 1 >> (Math.min(1, awayH.length)));
               hookO = `${parseInt(`${tumbnailM}`) >> (Math.min(Math.abs(3), 4))}`;
               awayH = `${penaltyshootnogoals.length}`;
               penaltyshootnogoals = `${awayH.length}`;
            }
            let field2 = 5633657 >= smallorangemanI.length;
            do {
               smallorangemanI = `${2 + smallorangemanI.length}`;
               if (field2) {
                  break;
               }
            } while (field2 && (chatroombackground3 != String.fromCharCode(52, 0)));
            let tempnodatagifU = String.fromCharCode(97, 53, 54, 106, 54, 117, 101, 104, 56, 0) == chatroombackground3;
            do {
               chatroombackground3 += `${chatroombackground3.length}`;
               if (tempnodatagifU) {
                  break;
               }
            } while ((4 < smallorangemanI.length) && tempnodatagifU);
            let manifestt = String.fromCharCode(117, 112, 56, 100, 0) == chatroombackground3;
            do {
               chatroombackground3 = `${chatroombackground3.length}`;
               if (manifestt) {
                  break;
               }
            } while (manifestt && (!chatroombackground3.includes(smallorangemanI)));
            componentregistryQ = (logoutT.length + parseInt(`${containerM}`)) <= 23;
            tabletOffset = 60

            iconlogoutY <<= Math.min(Math.abs(2), 5);
         }

         let x, y, width, height;
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


      hideAllBanner();

      if (settingState.appOrientation === "PORTRAIT") {
         if (!yysIconstar.isVip(userState.user)) {


            setTimeout(() => {
               showBannerInPosition().then();
            }, 100);
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
