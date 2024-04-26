import React, { useState, useMemo, memo, useEffect, useRef, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Animated,
  FlatList,
  Platform
} from "react-native";
import { useNavigation, useTheme } from "@react-navigation/native";
import { wwKsadStore, wwChinasameDirect } from "@type/ww_dycreator_result";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import DownloadIcon from '@static/images/loginsuccessXadsdkCenter.svg'
import DlIcon from "@static/images/countryValues.svg";
import VipIcon from "@static/images/selectedDefaultplayerimgAnner.svg"
import FinishIcon from "@static/images/chinasameMintegralBorderless.svg";
import { DVGGrayTeamdetailsbg, wwResendTextlayoutmanager } from "@type/ww_skip";
import { useAppSelector } from "@hooks/ww_catagory_neon";
import { wwEighteenShirt } from "@redux/ww_small";
import DeviceInfo from "react-native-device-info";
import { Provider, Toast } from "@ant-design/react-native";
import { debounce, throttle } from "lodash";
import { wwLaunchRound } from "@utility/ww_star";
import { DOWNLOAD_FEATURE_MAX_QUEUE } from "@utility/ww_icon";

const throttledToast = debounce((msg: string) => {
  wwLaunchRound.showToast(msg)
}, 1000)


interface wwIndexDice {
  vodId?: number;
  isVip: boolean;
  source?: number;
  screen: string;
  episodes?: wwKsadStore;
  handleClose: any;
  rangeSize?: number;
  activeEpisode?: number;
  onDownload: (nid: number) => void;
  setShowAdOverlay: (show: boolean) => void;
  onPressToDownload: () => void,
}
function SelectDownloadComponent({
  vodId,
  isVip,
  source,
  screen,
  episodes,
  handleClose,
  rangeSize = 50,
  activeEpisode = 0,
  onDownload,
  setShowAdOverlay,
  onPressToDownload,
}: wwIndexDice) {
  const { colors, textVariants, spacing } = useTheme();
  const EPISODE_RANGE_SIZE = rangeSize;
  const insets = useSafeAreaInsets();
  const itemPerRow = 5;
  const gapSize = 8;
  const windowWidth = screen === 'landscape' ? Dimensions.get('window').width / 2 : Dimensions.get('window').width;
  const width = windowWidth - 15 - spacing.sideOffset * 4;
  const height = Dimensions.get('window').height / 2 * (screen === 'landscape' ? 0.8 : 0.55);
  const childWidth = (width - gapSize) / itemPerRow;
  const [episodeHeight, setHeight] = useState(0);
  const [episodeWidth, setWidth] = useState(0);
  const navigation = useNavigation();
  const downloadVideoReducer: wwResendTextlayoutmanager = useAppSelector(
    ({ downloadVideoReducer }: wwEighteenShirt) => downloadVideoReducer
  );
  const [iosCustomToastIsVisible, setIosCustomToastIsVisible] = useState(false)
  const [iosCustomToastText, setIosCustomToastText] = useState("已加入下载队列，请查看‘我的下载’")

  const debouncedSetIosCustomToastIsVisibleTrue = debounce(() => {
       let libreactperfloggerjniZ: Array<any> = [326, 585, 820];
    let belld: Map<any, any> = new Map([[String.fromCharCode(99,115,115,0),String.fromCharCode(119,97,116,99,104,101,115,0)], [String.fromCharCode(101,109,98,101,100,0),String.fromCharCode(115,116,121,108,101,115,0)], [String.fromCharCode(119,101,108,108,98,101,104,97,118,101,100,0),String.fromCharCode(112,105,120,101,108,115,120,0)]]);
    let qaagh = String.fromCharCode(109,100,116,97,0);
    let philippinesd = String.fromCharCode(109,111,122,106,112,101,103,0);
    let classesa = 4;
    let feedbacko = String.fromCharCode(109,97,114,107,117,112,0);
    let dicer = String.fromCharCode(99,114,111,115,115,104,97,105,114,115,0);
    let main_v2: Map<any, any> = new Map([[String.fromCharCode(97,112,112,101,110,100,99,104,97,114,0),426], [String.fromCharCode(102,114,101,101,108,105,115,116,0),252], [String.fromCharCode(115,97,100,98,0),777]]);
    let gpays = false;
    let commonQ = String.fromCharCode(108,111,117,100,115,112,101,97,107,101,114,0);
    let graphR = String.fromCharCode(117,116,120,111,115,0);
    let security5 = String.fromCharCode(114,101,112,114,101,115,101,110,116,97,98,108,101,0);
    let upload8 = String.fromCharCode(116,114,97,102,0);
    let plashU = String.fromCharCode(101,110,117,109,101,114,97,116,111,114,0);
    let telegram_ = 0;
   for (let l = 0; l < 1; l++) {
      classesa *= classesa >> (Math.min(Math.abs(2), 5));
   }
   if (dicer.length >= 2) {
      dicer += `${classesa}`;
   }
      belld.set(`${feedbacko}`, 3 - main_v2.size);
      classesa ^= qaagh.length;
      main_v2 = new Map([[qaagh, (String.fromCharCode(122,0) == security5 ? qaagh.length : security5.length)]]);
   if (main_v2.get(`${classesa}`) == null) {
      main_v2 = new Map([[`${gpays}`, 1 + graphR.length]]);
   }
      philippinesd += `${libreactperfloggerjniZ.length & 2}`;
       let othert: Map<any, any> = new Map([[String.fromCharCode(110,101,119,108,105,110,101,0),579], [String.fromCharCode(99,111,115,0),223], [String.fromCharCode(116,114,97,110,115,99,116,105,111,110,0),197]]);
       let adultA = true;
       let pingD = String.fromCharCode(106,111,105,110,116,0);
      let checkbox0 = 6746797 <= othert.size;
      do {
         othert = new Map([[pingD, pingD.length]]);
         if (checkbox0) {
            break;
         }
      } while (checkbox0 && (othert.size <= 3));
      for (let v = 0; v < 2; v++) {
          let loadingw = String.fromCharCode(105,100,99,116,0);
          let assistB = String.fromCharCode(109,97,105,110,115,116,97,103,101,0);
          let calendarp = 1.0;
         othert = new Map([[`${adultA}`, 1 | parseInt(`${calendarp}`)]]);
         loadingw = `${(assistB == String.fromCharCode(53,0) ? assistB.length : loadingw.length)}`;
         calendarp -= (parseFloat(`${String.fromCharCode(86,0) == assistB ? loadingw.length : assistB.length}`));
      }
         adultA = null != othert.get(`${adultA}`);
      let liveT = 6104550 >= othert.size;
      do {
          let renderH = String.fromCharCode(103,101,116,112,101,101,114,97,100,100,114,0);
         othert.set(`${pingD}`, othert.size + 1);
         renderH = `${renderH.length >> (Math.min(renderH.length, 2))}`;
         if (liveT) {
            break;
         }
      } while ((othert.size >= 5) && liveT);
         othert = new Map([[pingD, pingD.length]]);
      let taiwanF = adultA ? !adultA : adultA;
      do {
         adultA = !adultA;
         if (taiwanF) {
            break;
         }
      } while ((!pingD.endsWith(`${adultA}`)) && taiwanF);
      let mapbuffer8 = 5334526 >= othert.size;
      do {
          let dependencyQ = 2.0;
          let holderg = true;
          let arrowupJ = false;
          let bootN = String.fromCharCode(98,116,110,0);
         othert = new Map([[bootN, (String.fromCharCode(76,0) == bootN ? bootN.length : (holderg ? 1 : 1))]]);
         dependencyQ /= Math.max(2, parseInt(`${dependencyQ}`) >> (Math.min(4, Math.abs(2))));
         holderg = 18.86 >= dependencyQ;
         arrowupJ = 86.65 <= dependencyQ || !arrowupJ;
         if (mapbuffer8) {
            break;
         }
      } while ((4 >= (5 + othert.size) || othert.size >= 5) && mapbuffer8);
         adultA = !pingD.endsWith(`${adultA}`);
       let typingU: Map<any, any> = new Map([[String.fromCharCode(115,117,98,108,97,121,101,114,0),137], [String.fromCharCode(106,109,111,114,101,99,102,103,0),89]]);
       let release_uD: Map<any, any> = new Map([[String.fromCharCode(97,114,101,115,0),488], [String.fromCharCode(114,101,118,105,101,119,0),847], [String.fromCharCode(107,101,121,112,97,116,104,0),141]]);
      belld.set(qaagh, dicer.length % (Math.max(1, qaagh.length)));
   if (security5.endsWith(`${gpays}`)) {
      gpays = 38 > commonQ.length;
   }
   for (let x = 0; x < 1; x++) {
       let rncorew = String.fromCharCode(97,109,102,101,110,99,0);
       let upgrade7 = String.fromCharCode(109,101,100,105,97,0);
      for (let y = 0; y < 3; y++) {
          let ewardedM = String.fromCharCode(99,97,108,108,98,97,99,107,0);
          let bufferL = false;
          let configureH = true;
         rncorew += `${((configureH ? 2 : 4) | ewardedM.length)}`;
         ewardedM = "1";
      }
       let phonesharef: Array<any> = [799, 695, 358];
       let saveL: Array<any> = [165, 317, 705];
          let greyarrowupk = 5.0;
         rncorew = "2";
         greyarrowupk -= parseInt(`${greyarrowupk}`);
      if (phonesharef.includes(saveL.length)) {
          let iconscheduleQ = 0.0;
          let overlayP = 3.0;
          let expiredY: Array<any> = [490, 939, 428];
          let configure_: Array<any> = [715, 554, 884];
         saveL = [saveL.length | phonesharef.length];
         iconscheduleQ += 2 & parseInt(`${iconscheduleQ}`);
         overlayP += parseInt(`${iconscheduleQ}`);
         expiredY = [configure_.length + 3];
         configure_.push(3);
      }
         upgrade7 += `${upgrade7.length / 1}`;
         saveL.push(1);
      classesa >>= Math.min(5, Math.abs((String.fromCharCode(65,0) == feedbacko ? (gpays ? 3 : 1) : feedbacko.length)));
   }
   if (belld.size == 4) {
      belld = new Map([[graphR, graphR.length]]);
   }
      philippinesd += `${1 >> (Math.min(1, qaagh.length))}`;
       let goalN = 4.0;
          let imagenetworkerrp: Map<any, any> = new Map([[String.fromCharCode(102,114,101,113,115,0),855], [String.fromCharCode(99,97,108,105,110,103,0),147], [String.fromCharCode(111,110,97,118,99,100,97,116,97,0),50]]);
          let libpangleflippedY = String.fromCharCode(102,111,99,117,115,0);
          let mapbufferf = String.fromCharCode(117,98,108,105,99,0);
         goalN /= Math.max(3, 1);
         imagenetworkerrp = new Map([[`${imagenetworkerrp.size}`, 2 << (Math.min(3, libpangleflippedY.length))]]);
         libpangleflippedY = `${imagenetworkerrp.size | 2}`;
         mapbufferf = `${libpangleflippedY.length}`;
         goalN += parseInt(`${goalN}`) ^ parseInt(`${goalN}`);
         goalN += parseInt(`${goalN}`) + parseInt(`${goalN}`);
      belld.set(philippinesd, 2 & philippinesd.length);
   let d_player3 = gpays ? !gpays : gpays;
   do {
      gpays = 18 > libreactperfloggerjniZ.length;
      if (d_player3) {
         break;
      }
   } while ((1 <= (2 ^ belld.size) && !gpays) && d_player3);
   let weatherK = String.fromCharCode(116,122,52,118,118,55,104,57,0) == philippinesd;
   do {
      philippinesd = `${2 | libreactperfloggerjniZ.length}`;
      if (weatherK) {
         break;
      }
   } while (weatherK && (philippinesd.startsWith(`${feedbacko.length}`)));
   let yellowS = belld.size <= 6901264;
   do {
       let thailandW = 3;
       let dnewinterstitialx: Map<any, any> = new Map([[String.fromCharCode(97,116,114,97,99,116,97,98,0),440], [String.fromCharCode(114,101,115,99,104,101,100,117,108,101,0),482]]);
       let bannerW = String.fromCharCode(99,104,114,111,109,105,110,97,110,99,101,0);
       let mbnativeJ = String.fromCharCode(102,105,110,105,115,104,101,100,0);
         dnewinterstitialx.set(`${thailandW}`, dnewinterstitialx.size & thailandW);
      while ((dnewinterstitialx.size | mbnativeJ.length) == 2) {
         mbnativeJ += `${dnewinterstitialx.size & 3}`;
         break;
      }
         mbnativeJ = `${dnewinterstitialx.size}`;
          let alerta = false;
         bannerW = `${(3 * (alerta ? 3 : 3))}`;
       let minivodR = 4.0;
       let singleQ = 1.0;
         thailandW %= Math.max(2, 4);
      let fastC = 6302270.0 >= singleQ;
      do {
         singleQ /= Math.max(thailandW, 3);
         if (fastC) {
            break;
         }
      } while (((3.57 * singleQ) > 5.14 || 3.57 > (singleQ - minivodR)) && fastC);
      while (!Array.from(dnewinterstitialx.values()).includes(singleQ)) {
          let videocommonl = String.fromCharCode(108,111,99,107,110,101,115,115,0);
          let macauV: Array<any> = [615, 299, 575];
          let libfollyV = 5.0;
         dnewinterstitialx.set(bannerW, bannerW.length - 1);
         videocommonl = `${(String.fromCharCode(104,0) == videocommonl ? macauV.length : videocommonl.length)}`;
         macauV.push(videocommonl.length << (Math.min(3, macauV.length)));
         libfollyV *= parseFloat(`${videocommonl.length & macauV.length}`);
         break;
      }
      let statisticsinactive3 = bannerW.length <= 6206182;
      do {
         bannerW += `${bannerW.length}`;
         if (statisticsinactive3) {
            break;
         }
      } while ((dnewinterstitialx.size < 5) && statisticsinactive3);
      let bootL = String.fromCharCode(52,48,110,0) == bannerW;
      do {
         bannerW = `${dnewinterstitialx.size - 2}`;
         if (bootL) {
            break;
         }
      } while (((4 | thailandW) <= 3 && (thailandW | bannerW.length) <= 4) && bootL);
         thailandW &= bannerW.length;
       let taiwanS: Array<any> = [606, 522];
       let hookx: Array<any> = [947, 710, 29];
      belld.set(mbnativeJ, 3);
      if (yellowS) {
         break;
      }
   } while (yellowS && (belld.size <= 1));
       let philippinesN = String.fromCharCode(115,112,111,116,0);
         philippinesN += `${philippinesN.length}`;
          let launcher3 = String.fromCharCode(105,109,112,108,105,101,115,0);
          let chinasame1 = String.fromCharCode(103,110,111,115,105,115,0);
          let dependencyh: Map<any, any> = new Map([[String.fromCharCode(97,118,100,101,118,105,99,101,114,101,115,0),677], [String.fromCharCode(114,97,115,116,101,114,105,122,101,0),883], [String.fromCharCode(114,111,117,116,105,110,101,115,0),450]]);
         philippinesN += `${philippinesN.length}`;
         launcher3 = `${(String.fromCharCode(121,0) == chinasame1 ? dependencyh.size : chinasame1.length)}`;
         dependencyh.set(launcher3, 2);
       let tailG = true;
      commonQ += `${libreactperfloggerjniZ.length | 2}`;
      dicer += `${1 >> (Math.min(2, commonQ.length))}`;
      qaagh += `${main_v2.size + 2}`;
       let tickedR = 0.0;
         tickedR += parseInt(`${tickedR}`);
      if (5.72 > (tickedR / 3.22)) {
         tickedR /= Math.max(parseInt(`${tickedR}`) % 3, 5);
      }
         tickedR *= parseInt(`${tickedR}`);
      feedbacko += `${(graphR == String.fromCharCode(82,0) ? graphR.length : belld.size)}`;
       let downloads = 0.0;
         downloads -= parseFloat(`${parseInt(`${downloads}`) >> (Math.min(Math.abs(parseInt(`${downloads}`)), 2))}`);
          let f_lockC: Map<any, any> = new Map([[String.fromCharCode(112,114,111,98,108,101,109,0),String.fromCharCode(100,112,110,97,109,101,0)], [String.fromCharCode(110,101,103,97,116,105,118,101,0),String.fromCharCode(112,114,101,104,97,115,104,0)]]);
          let macau8 = String.fromCharCode(109,101,116,104,111,100,0);
         downloads /= Math.max(parseFloat(`${macau8.length}`), 4);
         f_lockC = new Map([[`${f_lockC.size}`, 1]]);
         macau8 += `${f_lockC.size}`;
      if (downloads < 5.23) {
          let acceptedM = 3;
          let sidev = false;
          let matchU = String.fromCharCode(102,105,108,101,104,101,97,100,101,114,0);
          let successp = 3;
         downloads += parseFloat(`${parseInt(`${downloads}`) << (Math.min(matchU.length, 3))}`);
         acceptedM &= 2;
         sidev = 85 > acceptedM;
         matchU = `${1 % (Math.max(acceptedM, 3))}`;
         successp ^= successp;
      }
      gpays = commonQ.length < 86;
   while (main_v2.size < 4) {
       let libturbomodulejsijni6 = String.fromCharCode(98,114,105,110,103,0);
       let nextW: Array<any> = [597, 670];
       let rewinde: Map<any, any> = new Map([[String.fromCharCode(97,119,97,105,116,105,110,103,0),String.fromCharCode(104,105,103,104,115,104,101,108,102,0)], [String.fromCharCode(110,118,101,110,99,0),String.fromCharCode(115,109,118,106,112,101,103,0)], [String.fromCharCode(99,111,115,116,115,0),String.fromCharCode(100,105,97,103,0)]]);
       let configJ = 4.0;
       let context_ = String.fromCharCode(110,97,118,105,0);
      while (context_.startsWith(`${configJ}`)) {
         configJ *= context_.length;
         break;
      }
          let tempM = 5.0;
         nextW = [parseInt(`${configJ}`)];
         tempM *= 2;
      let mbnativeO = rewinde.size <= 4912344;
      do {
          let short_29 = 1;
          let middlebrightnessV = String.fromCharCode(97,112,112,115,0);
          let baiduI = String.fromCharCode(97,112,112,114,111,120,0);
          let hooksO = String.fromCharCode(116,114,101,110,100,108,105,110,101,0);
          let abidetectK = String.fromCharCode(115,101,116,115,104,97,114,101,0);
         rewinde = new Map([[abidetectK, abidetectK.length]]);
         short_29 += middlebrightnessV.length % 1;
         middlebrightnessV = `${(String.fromCharCode(83,0) == middlebrightnessV ? middlebrightnessV.length : hooksO.length)}`;
         baiduI = `${short_29 / (Math.max(baiduI.length, 7))}`;
         hooksO += `${short_29}`;
         if (mbnativeO) {
            break;
         }
      } while (mbnativeO && (4 >= (nextW.length - rewinde.size) || (nextW.length - rewinde.size) >= 4));
      for (let l = 0; l < 3; l++) {
         context_ = `${context_.length >> (Math.min(Math.abs(3), 3))}`;
      }
      let lessJ = 7122967 >= rewinde.size;
      do {
         rewinde = new Map([[`${rewinde.size}`, rewinde.size]]);
         if (lessJ) {
            break;
         }
      } while ((2.7 == (configJ - 1.39) || 4 == (rewinde.size - parseInt(`${configJ}`))) && lessJ);
         context_ = `${(String.fromCharCode(89,0) == libturbomodulejsijni6 ? parseInt(`${configJ}`) : libturbomodulejsijni6.length)}`;
         libturbomodulejsijni6 += `${nextW.length / (Math.max(libturbomodulejsijni6.length, 3))}`;
         nextW.push(context_.length);
      let iconwechatx = 7544782 <= nextW.length;
      do {
         nextW.push(3);
         if (iconwechatx) {
            break;
         }
      } while (iconwechatx && (rewinde.get(`${nextW.length}`) == null));
         nextW = [parseInt(`${configJ}`)];
         libturbomodulejsijni6 += `${rewinde.size}`;
      for (let p = 0; p < 2; p++) {
          let clubo = 2.0;
          let close2: Map<any, any> = new Map([[String.fromCharCode(102,112,115,0),88], [String.fromCharCode(118,111,105,99,101,0),764]]);
          let iconwatchnowq: Map<any, any> = new Map([[String.fromCharCode(115,110,100,105,111,0),805], [String.fromCharCode(108,111,119,112,97,115,115,0),820], [String.fromCharCode(115,116,114,105,100,101,115,0),478]]);
          let contexti = String.fromCharCode(100,115,104,111,119,0);
          let package_2i_: Array<any> = [555, 858, 739];
         nextW.push(rewinde.size);
         clubo /= Math.max(2, parseFloat(`${contexti.length * 1}`));
         close2 = new Map([[`${package_2i_.length}`, parseInt(`${clubo}`)]]);
         iconwatchnowq.set(`${package_2i_.length}`, iconwatchnowq.size << (Math.min(package_2i_.length, 3)));
         contexti = `${1 | parseInt(`${clubo}`)}`;
      }
         nextW = [parseInt(`${configJ}`)];
      for (let l = 0; l < 1; l++) {
         context_ += `${libturbomodulejsijni6.length}`;
      }
          let roomq: Map<any, any> = new Map([[String.fromCharCode(116,105,110,121,0),882], [String.fromCharCode(114,101,112,108,97,99,101,0),267], [String.fromCharCode(110,101,97,114,98,121,0),131]]);
         rewinde.set(libturbomodulejsijni6, nextW.length % (Math.max(libturbomodulejsijni6.length, 8)));
         roomq = new Map([[`${roomq.size}`, roomq.size]]);
      libreactperfloggerjniZ.push(3 ^ parseInt(`${configJ}`));
      break;
   }
      upload8 = `${belld.size}`;
      philippinesd = `${commonQ.length}`;
      philippinesd = "2";
      graphR = `${(String.fromCharCode(116,0) == upload8 ? libreactperfloggerjniZ.length : upload8.length)}`;
   for (let v = 0; v < 3; v++) {
      feedbacko = "1";
   }
       let tickd = 3.0;
       let halffieldimageC = 1.0;
         halffieldimageC /= Math.max(parseFloat(`${2}`), 2);
       let mbridgeQ = String.fromCharCode(101,102,102,101,99,116,0);
         mbridgeQ += `${parseInt(`${tickd}`) - parseInt(`${halffieldimageC}`)}`;
         tickd -= 3;
      if ((halffieldimageC - tickd) < 5.61) {
         tickd *= 2;
      }
         halffieldimageC -= parseFloat(`${parseInt(`${tickd}`) << (Math.min(3, Math.abs(2)))}`);
      classesa &= belld.size | 1;
       let renewq = String.fromCharCode(114,101,116,97,105,110,115,0);
       let temperatureN = 0.0;
          let checkboxp = String.fromCharCode(116,97,112,101,115,0);
          let gpay9: Map<any, any> = new Map([[String.fromCharCode(103,101,116,102,114,97,109,101,0),String.fromCharCode(98,97,107,101,0)], [String.fromCharCode(99,108,101,97,114,97,108,108,0),String.fromCharCode(99,121,99,108,105,99,114,101,102,114,101,115,104,0)], [String.fromCharCode(98,115,111,108,117,116,101,0),String.fromCharCode(99,104,114,111,109,97,107,101,121,0)]]);
         renewq += "1";
         checkboxp += `${checkboxp.length}`;
         gpay9 = new Map([[`${gpay9.size}`, 2]]);
         renewq += `${renewq.length % 2}`;
          let d_titleE = 4.0;
          let hejiP = String.fromCharCode(112,114,111,98,115,0);
          let settingsr = 4.0;
         temperatureN += parseInt(`${settingsr}`) & 3;
         d_titleE /= Math.max(2, parseFloat(`${parseInt(`${d_titleE}`)}`));
         hejiP = `${(String.fromCharCode(87,0) == hejiP ? hejiP.length : parseInt(`${d_titleE}`))}`;
         settingsr /= Math.max(1, (parseFloat(`${String.fromCharCode(117,0) == hejiP ? parseInt(`${d_titleE}`) : hejiP.length}`)));
      while (renewq.length == parseInt(`${temperatureN}`)) {
         temperatureN += parseInt(`${temperatureN}`) - 2;
         break;
      }
          let telemetryr = true;
         temperatureN -= 1;
         telemetryr = !telemetryr;
         renewq += `${1 + parseInt(`${temperatureN}`)}`;
      gpays = qaagh == String.fromCharCode(72,0) && 32.41 > temperatureN;
   while (!feedbacko.endsWith(`${philippinesd.length}`)) {
       let activityb = 2.0;
         activityb /= Math.max(2, parseFloat(`${parseInt(`${activityb}`) / (Math.max(8, parseInt(`${activityb}`)))}`));
      let submitr = 5941500.0 <= activityb;
      do {
         activityb *= parseFloat(`${2 | parseInt(`${activityb}`)}`);
         if (submitr) {
            break;
         }
      } while ((5.89 < (activityb + activityb)) && submitr);
      while (activityb >= 5.18) {
         activityb += parseFloat(`${parseInt(`${activityb}`)}`);
         break;
      }
      feedbacko += `${3 & libreactperfloggerjniZ.length}`;
      break;
   }
   let g_imageG = belld.size >= 6025070;
   do {
      belld = new Map([[commonQ, commonQ.length]]);
      if (g_imageG) {
         break;
      }
   } while ((belld.size < 2) && g_imageG);
       let mergerm = String.fromCharCode(100,105,115,116,114,105,99,116,0);
      let libruntimeexecutor4 = 7263361 <= mergerm.length;
      do {
          let historyU = String.fromCharCode(100,101,108,105,118,101,114,121,0);
          let bottomP = 0;
          let reactnativejs7: Map<any, any> = new Map([[String.fromCharCode(99,111,110,110,101,99,116,101,100,0),161], [String.fromCharCode(105,110,116,120,120,0),252], [String.fromCharCode(118,111,105,100,0),286]]);
          let eact0 = 4.0;
          let sigmobX = String.fromCharCode(108,111,99,97,108,101,0);
         mergerm += `${historyU.length << (Math.min(mergerm.length, 4))}`;
         historyU = "1";
         bottomP |= (sigmobX == String.fromCharCode(116,0) ? sigmobX.length : parseInt(`${eact0}`));
         reactnativejs7 = new Map([[sigmobX, sigmobX.length | bottomP]]);
         eact0 /= Math.max(parseFloat(`${bottomP}`), 2);
         if (libruntimeexecutor4) {
            break;
         }
      } while (libruntimeexecutor4 && (mergerm == String.fromCharCode(104,0) && mergerm == String.fromCharCode(77,0)));
      if (mergerm.length >= mergerm.length) {
          let main_hm = 3;
          let home8 = 3.0;
          let downloadedO: Map<any, any> = new Map([[String.fromCharCode(122,111,111,109,97,98,108,101,0),String.fromCharCode(99,101,110,116,101,114,0)], [String.fromCharCode(108,105,109,105,116,97,116,105,111,110,0),String.fromCharCode(97,97,99,101,110,99,0)], [String.fromCharCode(117,115,101,114,115,112,97,99,101,0),String.fromCharCode(115,117,112,101,114,120,115,97,105,0)]]);
          let commentV = 2.0;
         mergerm += `${3 + downloadedO.size}`;
         main_hm |= 1 & parseInt(`${home8}`);
         home8 *= parseInt(`${commentV}`);
         downloadedO.set(`${home8}`, parseInt(`${home8}`) % (Math.max(2, main_hm)));
      }
         mergerm = `${(mergerm == String.fromCharCode(99,0) ? mergerm.length : mergerm.length)}`;
      dicer = `${graphR.length << (Math.min(3, security5.length))}`;
      dicer = `${((gpays ? 4 : 4) % (Math.max(2, 4)))}`;
      upload8 += `${3 * libreactperfloggerjniZ.length}`;
   for (let m = 0; m < 1; m++) {
      classesa >>= Math.min(Math.abs(3), 1);
   }
   let privatechatbgg = libreactperfloggerjniZ.length <= 7572636;
   do {
      libreactperfloggerjniZ = [belld.size << (Math.min(libreactperfloggerjniZ.length, 3))];
      if (privatechatbgg) {
         break;
      }
   } while (privatechatbgg && (libreactperfloggerjniZ.length == security5.length));
      upload8 += `${libreactperfloggerjniZ.length}`;
      classesa -= 2;
       let activityf: Map<any, any> = new Map([[String.fromCharCode(102,114,101,101,0),841], [String.fromCharCode(118,109,97,102,109,111,116,105,111,110,100,115,112,0),328], [String.fromCharCode(97,117,116,104,111,114,105,122,101,114,0),935]]);
      if (activityf.get(`${activityf.size}`) == null) {
          let mbridge1 = 1.0;
          let placeholder7 = String.fromCharCode(114,101,110,100,101,114,105,110,103,0);
          let executort = 1;
          let iconeditW: Map<any, any> = new Map([[String.fromCharCode(114,111,112,115,116,101,110,0),953], [String.fromCharCode(118,105,115,98,108,101,0),125]]);
         activityf.set(`${executort}`, executort);
         mbridge1 -= parseInt(`${mbridge1}`) << (Math.min(placeholder7.length, 5));
         placeholder7 += "3";
         iconeditW.set(placeholder7, 1);
      }
       let with_aB = false;
       let anewsR = true;
      if (!anewsR && with_aB) {
          let playT = 1.0;
          let optionsv = 5.0;
          let statisticsinactiveB = String.fromCharCode(115,111,99,107,0);
          let typingG = 2.0;
         with_aB = typingG < 31.14;
         playT /= Math.max(parseFloat(`${parseInt(`${optionsv}`) - 3}`), 4);
         optionsv -= parseFloat(`${parseInt(`${playT}`)}`);
         statisticsinactiveB = `${parseInt(`${playT}`)}`;
         typingG -= parseFloat(`${parseInt(`${optionsv}`) | 1}`);
      }
      security5 += `${dicer.length}`;
   for (let g = 0; g < 2; g++) {
      graphR += `${dicer.length % (Math.max(commonQ.length, 9))}`;
   }
      security5 += `${feedbacko.length}`;
       let libyogaZ = String.fromCharCode(111,117,116,98,111,117,110,100,0);
       let nterstitial8: Array<any> = [505, 76];
       let sendH = 3;
       let googleP = String.fromCharCode(115,99,116,112,0);
       let kuaishouH = String.fromCharCode(114,117,98,98,101,114,0);
          let shootyesgoalE: Map<any, any> = new Map([[String.fromCharCode(101,110,99,111,100,101,100,112,111,105,110,116,0),false ], [String.fromCharCode(115,97,109,101,0),true ], [String.fromCharCode(99,111,110,99,101,97,108,109,101,110,116,0),false ]]);
          let l_hash2 = String.fromCharCode(110,97,116,117,114,97,108,0);
         googleP += `${shootyesgoalE.size}`;
         shootyesgoalE = new Map([[l_hash2, 2 & l_hash2.length]]);
       let codegen2 = 0.0;
       let components6 = 2.0;
         codegen2 *= (kuaishouH == String.fromCharCode(120,0) ? nterstitial8.length : kuaishouH.length);
      for (let b = 0; b < 3; b++) {
          let formt = false;
          let mimos = 5.0;
          let rightU = 1.0;
          let pause7 = 5.0;
         kuaishouH = `${nterstitial8.length / (Math.max(3, 9))}`;
         formt = rightU > 64.30;
         mimos -= parseInt(`${pause7}`) - 1;
         rightU /= Math.max(1, parseFloat(`${parseInt(`${rightU}`) - 1}`));
         pause7 *= parseFloat(`${parseInt(`${rightU}`) - 3}`);
      }
      classesa ^= 1;
      libyogaZ = `${libyogaZ.length}`;
      dicer = `${feedbacko.length ^ security5.length}`;
   while (security5 != upload8) {
       let guideX = String.fromCharCode(112,97,103,101,0);
       let faviconZ = 5.0;
         guideX = `${3 | parseInt(`${faviconZ}`)}`;
      for (let j = 0; j < 3; j++) {
         faviconZ -= guideX.length % (Math.max(1, 10));
      }
         guideX = `${guideX.length}`;
      while (guideX.endsWith(`${faviconZ}`)) {
          let upgradeo = false;
          let libreanimated8 = String.fromCharCode(99,97,108,108,101,114,0);
          let iconV = 0.0;
         guideX += `${parseInt(`${iconV}`) % (Math.max(libreanimated8.length, 5))}`;
         upgradeo = (upgradeo ? upgradeo : upgradeo);
         libreanimated8 += `${(3 - (upgradeo ? 3 : 4))}`;
         break;
      }
       let thailandj = false;
       let minimizeI = false;
          let profiler = 2;
         faviconZ += ((thailandj ? 5 : 2) ^ profiler);
      upload8 += `${(String.fromCharCode(73,0) == upload8 ? commonQ.length : upload8.length)}`;
      break;
   }
   while (3 >= libreactperfloggerjniZ.length) {
      libreactperfloggerjniZ.push(2);
      break;
   }
   while (upload8 != String.fromCharCode(100,0)) {
       let settingA = false;
       let matchL = String.fromCharCode(99,111,100,101,99,117,116,105,108,115,0);
       let soundi: Map<any, any> = new Map([[String.fromCharCode(117,110,99,104,97,110,103,101,100,0),574], [String.fromCharCode(115,116,114,108,99,97,116,0),701], [String.fromCharCode(117,110,99,108,97,109,112,101,100,0),278]]);
         matchL += `${matchL.length}`;
      while (!settingA) {
          let vietnamD = 1.0;
         matchL = `${soundi.size >> (Math.min(Math.abs(3), 5))}`;
         vietnamD -= parseFloat(`${3}`);
         break;
      }
      for (let w = 0; w < 1; w++) {
         soundi = new Map([[matchL, 1]]);
      }
       let analyticx = 5.0;
       let libsentryA = String.fromCharCode(114,101,112,111,115,105,116,105,111,110,0);
         analyticx *= parseFloat(`${matchL.length / 2}`);
         matchL = `${matchL.length}`;
         analyticx += parseFloat(`${soundi.size}`);
       let analyticse: Map<any, any> = new Map([[String.fromCharCode(106,102,105,101,108,100,115,0),416], [String.fromCharCode(111,118,101,114,108,97,121,0),495], [String.fromCharCode(115,112,97,114,115,101,0),640]]);
      security5 = "1";
      break;
   }
   if (!graphR.endsWith(dicer)) {
      dicer = `${security5.length}`;
   }
   if (4 >= philippinesd.length) {
      philippinesd += `${qaagh.length}`;
   }
   let selectedK = belld.size >= 5654980;
   do {
      belld = new Map([[`${libreactperfloggerjniZ.length}`, (String.fromCharCode(122,0) == feedbacko ? feedbacko.length : libreactperfloggerjniZ.length)]]);
      if (selectedK) {
         break;
      }
   } while ((4 < (2 / (Math.max(7, belld.size)))) && selectedK);
      gpays = main_v2.size >= 83;
      security5 = `${philippinesd.length}`;
   if ((belld.size ^ 3) == 4) {
      qaagh += `${feedbacko.length << (Math.min(2, dicer.length))}`;
   }
   let fcdaebecbcbafcdfceaaeccfeacdbN = plashU.length <= 5945646;
   do {
      plashU = `${main_v2.size}`;
      if (fcdaebecbcbafcdfceaaeccfeacdbN) {
         break;
      }
   } while (fcdaebecbcbafcdfceaaeccfeacdbN && (commonQ == String.fromCharCode(54,0)));
 setIosCustomToastIsVisible(true) }, 1000)

  const ranges = [
    ...Array(
      episodes?.url_count === undefined
        ? 0
        : Math.ceil(episodes.url_count / EPISODE_RANGE_SIZE)
    ).keys(),
  ].map(
    (x) =>
      `${x * EPISODE_RANGE_SIZE + 1}-${Math.min(
        (x + 1) * EPISODE_RANGE_SIZE,
        episodes?.url_count === undefined
          ? (x + 1) * EPISODE_RANGE_SIZE - 1
          : episodes?.url_count
      )}`
  );

  const [currentIndex, setCurrentIndex] = useState(
    Math.floor(activeEpisode / EPISODE_RANGE_SIZE)
  );
  const showEpisodeRangeStart = useMemo(
    () => currentIndex * EPISODE_RANGE_SIZE,
    [activeEpisode, currentIndex]
  );

  const showEpisodeRangeEnd = useMemo(
    () =>
      Math.min(
        showEpisodeRangeStart + EPISODE_RANGE_SIZE,
        episodes
          ? episodes.url_count
          : showEpisodeRangeStart + EPISODE_RANGE_SIZE
      ),
    [episodes, showEpisodeRangeStart]
  );

  const displayEpisodes = useMemo(() => {
       let turnj = false;
    let wcopy_kV = 3;
    let mini3 = String.fromCharCode(118,105,116,99,0);
    let membership1 = String.fromCharCode(115,105,103,110,97,108,105,110,103,0);
    let libreactnativeblobz = 3.0;
    let actionL = String.fromCharCode(112,111,105,115,115,111,110,0);
    let neon1: Array<any> = [String.fromCharCode(103,101,116,110,112,97,115,115,101,115,0), String.fromCharCode(117,110,115,101,108,101,99,116,0)];
    let pushP = true;
    let downloading9 = 0;
    let megaphonez: Map<any, any> = new Map([[String.fromCharCode(110,104,97,110,99,101,0),false ], [String.fromCharCode(116,114,97,110,115,102,111,114,109,101,114,115,0),false ], [String.fromCharCode(98,105,114,116,104,100,97,121,0),false ]]);
      turnj = !pushP && wcopy_kV > 97;
   while ((wcopy_kV & 3) > 5 && 3 > wcopy_kV) {
      wcopy_kV %= Math.max(((turnj ? 2 : 1) % 3), 2);
      break;
   }
   while (pushP || mini3.length < 1) {
      pushP = libreactnativeblobz >= 32.1 && membership1 == String.fromCharCode(102,0);
      break;
   }
       let linkH = 2.0;
       let unselected9 = false;
         linkH -= (parseFloat(`${parseInt(`${linkH}`) / (Math.max(1, (unselected9 ? 2 : 5)))}`));
      let libfollyu = linkH <= 5344205.0;
      do {
          let sendv = 3.0;
          let plash9: Map<any, any> = new Map([[String.fromCharCode(115,117,109,115,113,0),617], [String.fromCharCode(108,112,99,101,110,118,0),188]]);
          let greyarrowupY = String.fromCharCode(97,99,104,101,0);
          let bridgeI = String.fromCharCode(114,116,108,0);
          let alertz = String.fromCharCode(115,117,98,105,109,97,103,101,0);
         linkH -= parseFloat(`${parseInt(`${linkH}`)}`);
         sendv -= parseFloat(`${plash9.size}`);
         plash9 = new Map([[`${sendv}`, 2 ^ parseInt(`${sendv}`)]]);
         greyarrowupY += "1";
         bridgeI += `${plash9.size}`;
         alertz = `${greyarrowupY.length ^ parseInt(`${sendv}`)}`;
         if (libfollyu) {
            break;
         }
      } while ((!unselected9) && libfollyu);
          let checkboxU = String.fromCharCode(97,99,99,101,115,115,101,100,0);
          let footballfiledlayoutJ = 3.0;
         linkH -= parseFloat(`${parseInt(`${linkH}`)}`);
         checkboxU += `${parseInt(`${footballfiledlayoutJ}`)}`;
         footballfiledlayoutJ /= Math.max(3, checkboxU.length);
      for (let n = 0; n < 2; n++) {
          let thumbnailM: Array<any> = [734, 982];
          let libfollye = 0.0;
          let googlet = 1.0;
          let routerT = 3.0;
         linkH /= Math.max(parseFloat(`${parseInt(`${linkH}`) << (Math.min(4, Math.abs(1)))}`), 1);
         thumbnailM = [parseInt(`${libfollye}`)];
         libfollye *= parseInt(`${libfollye}`) - 2;
         googlet -= 1;
         routerT /= Math.max(1 / (Math.max(4, parseInt(`${libfollye}`))), 2);
      }
       let controls3 = true;
       let flyerm = false;
         controls3 = (!flyerm ? controls3 : !flyerm);
      pushP = 98 > membership1.length;
       let hejie: Map<any, any> = new Map([[String.fromCharCode(101,122,105,101,114,0),true ], [String.fromCharCode(99,111,110,103,101,115,116,105,111,110,0),true ]]);
       let time_wm6 = 1;
         time_wm6 >>= Math.min(3, Math.abs(time_wm6 % 3));
      for (let k = 0; k < 2; k++) {
         hejie = new Map([[`${hejie.size}`, hejie.size ^ 2]]);
      }
      while (4 == (4 + hejie.size) || 4 == (time_wm6 + hejie.size)) {
          let adultf = 5.0;
          let subtexti = String.fromCharCode(109,97,100,100,0);
          let submit0 = 5;
          let relatedP = String.fromCharCode(103,97,117,115,115,105,97,110,0);
          let questicon6 = String.fromCharCode(115,97,108,115,97,0);
         hejie = new Map([[`${adultf}`, parseInt(`${adultf}`)]]);
         subtexti += `${submit0 | 1}`;
         submit0 <<= Math.min(1, Math.abs(2 & questicon6.length));
         relatedP += `${2 ^ subtexti.length}`;
         questicon6 = `${relatedP.length}`;
         break;
      }
         time_wm6 /= Math.max(1, 4);
          let actionsj: Array<any> = [349, 238, 334];
         hejie.set(`${time_wm6}`, hejie.size);
         actionsj = [actionsj.length / 3];
         time_wm6 *= 3;
      mini3 += `${hejie.size}`;

    const eps = episodes?.urls?.slice(
      showEpisodeRangeStart,
      showEpisodeRangeEnd
    );

   if (!neon1.includes(libreactnativeblobz)) {
      neon1.push(3 + actionL.length);
   }
   if (turnj) {
      pushP = 87 > wcopy_kV;
   }
   if (!mini3.startsWith(actionL)) {
       let hover3 = String.fromCharCode(114,101,97,108,108,111,99,112,0);
       let tickedf = 0.0;
       let downarrow_ = 0.0;
       let launchA = 4.0;
       let ewardedD: Map<any, any> = new Map([[String.fromCharCode(112,108,97,110,97,114,116,111,117,121,118,121,0),String.fromCharCode(101,110,116,105,116,101,115,0)], [String.fromCharCode(114,97,119,101,110,99,0),String.fromCharCode(115,117,98,115,116,114,101,97,109,0)]]);
       let megaphoneC: Map<any, any> = new Map([[String.fromCharCode(110,111,110,110,117,108,108,100,101,115,116,105,110,97,116,105,111,110,0),true ], [String.fromCharCode(104,99,108,114,0),true ]]);
         tickedf += parseFloat(`${megaphoneC.size}`);
      while (Array.from(ewardedD.keys()).includes(`${downarrow_}`)) {
          let androidI = 5.0;
         ewardedD.set(`${launchA}`, parseInt(`${launchA}`) << (Math.min(5, Math.abs(1))));
         androidI -= parseFloat(`${1 << (Math.min(Math.abs(parseInt(`${androidI}`)), 3))}`);
         break;
      }
      let ksada = String.fromCharCode(109,98,106,57,106,109,0) == hover3;
      do {
         hover3 = `${megaphoneC.size}`;
         if (ksada) {
            break;
         }
      } while ((3 <= (ewardedD.size + 5)) && ksada);
         megaphoneC.set(hover3, parseInt(`${downarrow_}`));
       let greyO = String.fromCharCode(103,108,105,116,99,104,0);
       let minimize0 = String.fromCharCode(116,101,108,101,116,101,120,116,0);
      let iconwatchnowj = downarrow_ <= 6809524.0;
      do {
         downarrow_ -= parseFloat(`${1}`);
         if (iconwatchnowj) {
            break;
         }
      } while (((2.25 / (Math.max(10, downarrow_))) <= 4.35) && iconwatchnowj);
         megaphoneC.set(greyO, greyO.length);
      actionL += `${(neon1.length >> (Math.min(2, Math.abs((pushP ? 3 : 1)))))}`;
   }
   while (!membership1.startsWith(`${neon1.length}`)) {
      membership1 += `${mini3.length << (Math.min(Math.abs(1), 4))}`;
      break;
   }
   while ((wcopy_kV ^ 1) == 4 && 1 == wcopy_kV) {
      pushP = !turnj;
      break;
   }

    return eps;
  }, [showEpisodeRangeStart, showEpisodeRangeEnd, episodes]);

  const handleContainerLayout = (e) => {
       let libavutilE = false;
    let auto_vrj = true;
    let topicq = 4.0;
    let gemfilex = String.fromCharCode(114,101,103,101,120,112,0);
    let n_playerU: Map<any, any> = new Map([[String.fromCharCode(114,101,109,105,120,0),109], [String.fromCharCode(109,97,110,105,112,117,108,97,116,111,114,0),248]]);
    let stringsc = 0;
    let mapbufferT = String.fromCharCode(108,111,117,112,101,0);
    let temperatureH = 2.0;
    let layouti = 2;
    let loadingO = String.fromCharCode(116,120,104,97,115,104,0);
    let sinaa = 1.0;
    let buffer9 = false;
   for (let y = 0; y < 3; y++) {
       let context5 = String.fromCharCode(117,101,102,97,0);
      while (3 <= context5.length) {
         context5 = `${3 ^ context5.length}`;
         break;
      }
         context5 = `${context5.length}`;
          let libswresampleX = true;
         context5 += `${((libswresampleX ? 3 : 4))}`;
      sinaa *= parseFloat(`${1}`);
   }
      topicq /= Math.max((parseFloat(`${String.fromCharCode(54,0) == gemfilex ? parseInt(`${topicq}`) : gemfilex.length}`)), 4);
      gemfilex = `${((auto_vrj ? 2 : 2) >> (Math.min(Math.abs(parseInt(`${topicq}`)), 5)))}`;
   while (1 == (stringsc << (Math.min(Math.abs(2), 4)))) {
      stringsc &= mapbufferT.length - 1;
      break;
   }
   let based = String.fromCharCode(55,55,115,0) == gemfilex;
   do {
      gemfilex = `${parseInt(`${topicq}`)}`;
      if (based) {
         break;
      }
   } while (based && (gemfilex.length >= 3));
      stringsc >>= Math.min(Math.abs((3 * (auto_vrj ? 1 : 1))), 3);
   while ((sinaa * 2.72) <= 5.83) {
      sinaa *= parseFloat(`${parseInt(`${topicq}`) - 1}`);
      break;
   }
   while (3.80 < (5.33 * topicq)) {
       let basketballhometeamZ = String.fromCharCode(118,112,99,120,0);
       let clockx = String.fromCharCode(108,105,98,115,114,116,0);
       let topicx: Map<any, any> = new Map([[String.fromCharCode(108,111,115,115,121,0),false ], [String.fromCharCode(117,118,118,101,114,116,105,99,97,108,0),true ]]);
       let downloadW = 4.0;
       let pagey = String.fromCharCode(99,111,108,108,105,100,101,114,0);
      if (basketballhometeamZ.endsWith(`${downloadW}`)) {
         downloadW -= parseFloat(`${basketballhometeamZ.length}`);
      }
          let privilegeK = 2.0;
          let rankF = 4.0;
         topicx.set(`${downloadW}`, parseInt(`${downloadW}`) % (Math.max(basketballhometeamZ.length, 7)));
         privilegeK += parseFloat(`${parseInt(`${rankF}`)}`);
       let slider9 = 5.0;
       let bnewinterstitiale = 5.0;
       let moduley = 1;
       let plashQ = 4;
         basketballhometeamZ += `${2 << (Math.min(Math.abs(parseInt(`${slider9}`)), 4))}`;
         pagey = `${plashQ}`;
         basketballhometeamZ = `${parseInt(`${bnewinterstitiale}`)}`;
       let twitterV = false;
       let otherS = true;
         plashQ /= Math.max(3, 1);
          let moony = 4.0;
          let iconplaym = String.fromCharCode(122,101,114,111,101,100,0);
          let pauseD = 2.0;
         twitterV = 80 <= topicx.size;
         moony /= Math.max(parseFloat(`${3 | parseInt(`${moony}`)}`), 5);
         iconplaym = `${1 * parseInt(`${moony}`)}`;
         pauseD /= Math.max(5, parseFloat(`${parseInt(`${moony}`) ^ iconplaym.length}`));
          let actionsX = 2;
          let suggestionH = String.fromCharCode(102,97,117,108,116,0);
         basketballhometeamZ += "3";
         actionsX ^= 2 * actionsX;
         suggestionH = `${actionsX}`;
         clockx += `${1 | parseInt(`${downloadW}`)}`;
      let types8 = topicx.size >= 8968262;
      do {
         topicx.set(basketballhometeamZ, basketballhometeamZ.length);
         if (types8) {
            break;
         }
      } while (((topicx.size << (Math.min(Math.abs(1), 1))) >= 2 || 1 >= (topicx.size - parseInt(`${bnewinterstitiale}`))) && types8);
      if (moduley <= 1) {
         downloadW *= parseFloat(`${plashQ}`);
      }
      if (2.12 > (bnewinterstitiale - pagey.length) || 2.12 > (bnewinterstitiale - pagey.length)) {
         pagey += `${plashQ}`;
      }
      topicq /= Math.max(parseFloat(`${gemfilex.length ^ 3}`), 1);
      break;
   }
      loadingO = "1";
      n_playerU = new Map([[`${n_playerU.size}`, 3]]);
       let math8 = 4.0;
       let plusW = 1.0;
          let materialf = 0.0;
          let whistle_ = 1;
         math8 -= parseInt(`${materialf}`) >> (Math.min(3, Math.abs(3)));
         materialf /= Math.max(parseFloat(`${1 + whistle_}`), 1);
         whistle_ <<= Math.min(Math.abs(1 | whistle_), 1);
      if (5.70 > plusW) {
          let gifgoal_: Array<any> = [770, 134];
          let bootO = 4;
          let teamdetailsbgM = 1.0;
          let profileinactivei = true;
          let weibol: Array<any> = [364, 942, 539];
         math8 -= weibol.length;
         gifgoal_ = [1];
         bootO += parseInt(`${teamdetailsbgM}`);
         teamdetailsbgM /= Math.max(3, bootO);
         profileinactivei = gifgoal_.includes(bootO);
         weibol.push(gifgoal_.length);
      }
      let libffmpegkitV = 9552021.0 <= plusW;
      do {
         plusW += 3 - parseInt(`${plusW}`);
         if (libffmpegkitV) {
            break;
         }
      } while ((math8 == 4.46) && libffmpegkitV);
      let downloading0 = 5857785.0 <= math8;
      do {
         math8 *= parseInt(`${plusW}`);
         if (downloading0) {
            break;
         }
      } while (downloading0 && ((plusW * math8) < 2.1 || (2.1 * plusW) < 3.82));
         math8 -= parseInt(`${math8}`) + parseInt(`${plusW}`);
      let dependenciesW = 8394521.0 >= plusW;
      do {
         plusW /= Math.max(4, 1 % (Math.max(9, parseInt(`${plusW}`))));
         if (dependenciesW) {
            break;
         }
      } while (dependenciesW && (plusW <= 1.85));
      topicq /= Math.max(parseFloat(`${loadingO.length}`), 1);

    const epHeight = e.nativeEvent.layout.height;

       let textm = String.fromCharCode(114,101,111,112,101,110,0);
       let libreactP = 1;
      if (!textm.includes(`${libreactP}`)) {
          let valuesc = 0.0;
          let libcxxcomponents6 = 2.0;
          let castV = String.fromCharCode(101,110,102,111,114,99,101,0);
          let arrowuph = 2.0;
          let basketballI: Array<any> = [354, 52];
         textm += `${2 - basketballI.length}`;
         valuesc -= parseFloat(`${parseInt(`${libcxxcomponents6}`)}`);
         libcxxcomponents6 /= Math.max(5, parseFloat(`${2}`));
         castV += `${parseInt(`${arrowuph}`) ^ 3}`;
         arrowuph += 3;
         basketballI = [parseInt(`${libcxxcomponents6}`) - parseInt(`${valuesc}`)];
      }
         textm += `${textm.length}`;
       let playercommonL: Map<any, any> = new Map([[String.fromCharCode(108,105,98,114,97,114,105,101,115,0),String.fromCharCode(112,101,114,99,101,112,116,117,97,108,0)], [String.fromCharCode(105,116,101,114,97,116,105,111,110,0),String.fromCharCode(99,111,114,114,101,99,116,0)]]);
       let singled: Map<any, any> = new Map([[String.fromCharCode(100,111,119,110,115,104,105,102,116,0),true ], [String.fromCharCode(115,105,108,101,110,116,108,121,0),false ]]);
         libreactP /= Math.max(playercommonL.size, 1);
      for (let o = 0; o < 2; o++) {
         playercommonL = new Map([[textm, 2]]);
      }
      while (4 >= textm.length) {
         textm = `${1 | singled.size}`;
         break;
      }
      stringsc ^= 1;
      n_playerU.set(`${layouti}`, layouti);
       let commentd: Array<any> = [String.fromCharCode(116,105,108,101,100,0), String.fromCharCode(115,112,105,110,0), String.fromCharCode(115,116,114,111,110,103,0)];
       let emptyc = String.fromCharCode(98,101,103,105,110,115,0);
       let uimanager3 = String.fromCharCode(101,120,99,101,101,100,105,110,103,0);
         commentd.push(commentd.length);
      if (!emptyc.includes(`${commentd.length}`)) {
          let greenL = 0.0;
         emptyc += `${parseInt(`${greenL}`) / 2}`;
      }
      let runtimescheduler1 = uimanager3 == String.fromCharCode(113,50,120,104,113,50,97,110,52,0);
      do {
         uimanager3 += `${commentd.length}`;
         if (runtimescheduler1) {
            break;
         }
      } while ((emptyc == String.fromCharCode(103,0)) && runtimescheduler1);
       let greenM = String.fromCharCode(117,110,99,111,114,114,0);
       let colorsT = String.fromCharCode(115,111,114,116,0);
         greenM = `${commentd.length << (Math.min(Math.abs(3), 1))}`;
      let nativee = uimanager3 == String.fromCharCode(100,111,110,50,119,110,0);
      do {
         uimanager3 += `${commentd.length}`;
         if (nativee) {
            break;
         }
      } while ((emptyc != uimanager3) && nativee);
       let libjsinspectorm = 1;
         libjsinspectorm &= (colorsT == String.fromCharCode(73,0) ? uimanager3.length : colorsT.length);
      for (let m = 0; m < 1; m++) {
         commentd.push(greenM.length & emptyc.length);
      }
      topicq -= parseFloat(`${commentd.length * 2}`);
   while (!loadingO.startsWith(`${temperatureH}`)) {
      loadingO += `${loadingO.length}`;
      break;
   }
       let tickedB = String.fromCharCode(101,110,99,105,114,99,108,101,100,0);
          let yellowanimationlive1 = 3;
          let imagesJ = 0.0;
         tickedB = `${(tickedB == String.fromCharCode(102,0) ? tickedB.length : parseInt(`${imagesJ}`))}`;
         yellowanimationlive1 |= 2;
         imagesJ *= parseFloat(`${1}`);
          let whiteanimationlive9: Array<any> = [String.fromCharCode(97,114,101,97,0), String.fromCharCode(99,111,110,115,101,110,116,0)];
         tickedB = `${tickedB.length}`;
         whiteanimationlive9 = [whiteanimationlive9.length];
      for (let k = 0; k < 3; k++) {
         tickedB = `${tickedB.length}`;
      }
      gemfilex += `${n_playerU.size / (Math.max(10, layouti))}`;
       let typesy = 4;
      if ((4 << (Math.min(5, Math.abs(typesy)))) >= 4) {
         typesy *= typesy;
      }
      let benefitM = typesy <= 6374578;
      do {
          let sentryE = false;
          let toponf = 0;
          let volumeB = 3;
          let chinar = 4;
         typesy ^= typesy * 3;
         sentryE = volumeB >= 76;
         toponf <<= Math.min(3, Math.abs(toponf * 3));
         volumeB -= volumeB;
         chinar &= 1 & toponf;
         if (benefitM) {
            break;
         }
      } while (((typesy & 3) == 2 && (3 & typesy) == 2) && benefitM);
          let logink = 1.0;
          let delegate_6j8 = false;
         typesy &= 2 ^ parseInt(`${logink}`);
         logink /= Math.max(5, (parseFloat(`${(delegate_6j8 ? 2 : 2)}`)));
      gemfilex = `${gemfilex.length}`;
   while (!libavutilE || (stringsc + 1) <= 3) {
      stringsc -= gemfilex.length;
      break;
   }
   for (let r = 0; r < 2; r++) {
       let spinner1 = 2.0;
       let download1 = 2.0;
       let sheet2 = 1.0;
       let modelX: Map<any, any> = new Map([[String.fromCharCode(103,110,117,116,108,115,0),495], [String.fromCharCode(98,105,116,115,0),705], [String.fromCharCode(99,111,109,112,111,115,101,105,0),969]]);
      while ((2.90 + download1) == 2.96 && (2.90 + download1) == 1.86) {
         download1 -= parseFloat(`${parseInt(`${spinner1}`) << (Math.min(2, Math.abs(parseInt(`${sheet2}`))))}`);
         break;
      }
          let windt = 0;
          let profileframeF = String.fromCharCode(115,101,101,110,0);
          let iconwechatb = String.fromCharCode(108,119,115,115,112,110,0);
         spinner1 /= Math.max((parseFloat(`${String.fromCharCode(88,0) == iconwechatb ? iconwechatb.length : parseInt(`${download1}`)}`)), 1);
         windt /= Math.max(5, windt);
         profileframeF += `${(String.fromCharCode(112,0) == profileframeF ? windt : profileframeF.length)}`;
      while (parseInt(`${sheet2}`) < modelX.size) {
         modelX.set(`${download1}`, modelX.size % 2);
         break;
      }
          let unselectedl = 5;
         spinner1 -= parseFloat(`${3 / (Math.max(10, parseInt(`${download1}`)))}`);
         unselectedl |= unselectedl;
          let rewindu = true;
         download1 -= parseFloat(`${parseInt(`${sheet2}`)}`);
         rewindu = !rewindu;
          let policyE = false;
         spinner1 /= Math.max(5, parseFloat(`${parseInt(`${download1}`)}`));
         policyE = !policyE;
         download1 /= Math.max(parseFloat(`${2 >> (Math.min(Math.abs(parseInt(`${download1}`)), 5))}`), 5);
      let white3 = modelX.size <= 9154854;
      do {
         modelX = new Map([[`${modelX.size}`, parseInt(`${spinner1}`) >> (Math.min(Math.abs(3), 2))]]);
         if (white3) {
            break;
         }
      } while ((parseInt(`${download1}`) >= modelX.size) && white3);
      loadingO = `${parseInt(`${download1}`)}`;
   }
   for (let k = 0; k < 2; k++) {
      mapbufferT = `${mapbufferT.length | 3}`;
   }
   for (let z = 0; z < 3; z++) {
      layouti -= (mapbufferT == String.fromCharCode(115,0) ? mapbufferT.length : (libavutilE ? 4 : 2));
   }
   let taiwanU = 6810459.0 <= temperatureH;
   do {
      temperatureH -= parseFloat(`${parseInt(`${temperatureH}`) >> (Math.min(4, Math.abs(2)))}`);
      if (taiwanU) {
         break;
      }
   } while ((4 == layouti) && taiwanU);
    const epWidth = e.nativeEvent.layout.width;

       let encryptp = String.fromCharCode(100,97,116,97,98,108,111,99,107,0);
       let middle9: Map<any, any> = new Map([[String.fromCharCode(108,115,102,108,115,112,100,0),String.fromCharCode(119,114,105,116,101,0)], [String.fromCharCode(97,100,112,99,109,0),String.fromCharCode(100,111,119,110,108,111,97,100,101,114,0)], [String.fromCharCode(101,120,112,114,108,105,115,116,0),String.fromCharCode(111,103,103,0)]]);
      let eventt = 6583923 >= middle9.size;
      do {
         middle9.set(`${encryptp}`, 3 & middle9.size);
         if (eventt) {
            break;
         }
      } while (((encryptp.length * middle9.size) < 3 || 2 < (3 * encryptp.length)) && eventt);
         encryptp += `${middle9.size / 2}`;
         middle9.set(`${encryptp}`, middle9.size % (Math.max(encryptp.length, 10)));
      if (3 <= (2 << (Math.min(3, Math.abs(middle9.size)))) && (2 << (Math.min(4, Math.abs(middle9.size)))) <= 1) {
         encryptp += `${middle9.size}`;
      }
      if ((encryptp.length / (Math.max(1, middle9.size))) > 1 || 1 > (encryptp.length / (Math.max(8, middle9.size)))) {
         encryptp = `${encryptp.length}`;
      }
      for (let q = 0; q < 1; q++) {
          let layouta = 2;
          let footballfielde = 0.0;
         encryptp = `${middle9.size - 3}`;
         layouta >>= Math.min(Math.abs(parseInt(`${footballfielde}`) << (Math.min(1, Math.abs(layouta)))), 4);
         footballfielde *= parseInt(`${footballfielde}`);
      }
      loadingO += `${((auto_vrj ? 1 : 5))}`;
   for (let h = 0; h < 1; h++) {
       let spinnerc: Map<any, any> = new Map([[String.fromCharCode(100,101,115,116,105,110,97,116,105,111,110,0),709], [String.fromCharCode(102,101,97,116,117,114,101,115,0),926]]);
          let classesU = 1;
          let overlayB = false;
          let plash3 = 3.0;
         spinnerc.set(`${overlayB}`, classesU);
         classesU |= parseInt(`${plash3}`) % (Math.max(5, parseInt(`${plash3}`)));
         overlayB = (plash3 / (Math.max(9, plash3))) < 5.99;
      let disconnectedD = spinnerc.size <= 7034261;
      do {
          let previewd = String.fromCharCode(97,120,105,120,0);
          let robotoZ = 2.0;
          let predictionarrowK: Map<any, any> = new Map([[String.fromCharCode(100,97,105,108,121,0),String.fromCharCode(101,109,109,115,0)], [String.fromCharCode(117,99,111,110,115,116,0),String.fromCharCode(99,108,97,109,112,0)]]);
          let team_ = String.fromCharCode(113,117,101,114,121,0);
         spinnerc.set(`${robotoZ}`, 3);
         previewd = `${predictionarrowK.size}`;
         robotoZ += parseFloat(`${1}`);
         predictionarrowK = new Map([[`${predictionarrowK.size}`, predictionarrowK.size | team_.length]]);
         team_ = "1";
         if (disconnectedD) {
            break;
         }
      } while (disconnectedD && (5 < spinnerc.size));
      if (3 <= (spinnerc.size & spinnerc.size)) {
          let inviteW = String.fromCharCode(107,101,101,112,97,108,105,118,101,0);
         spinnerc.set(inviteW, 1);
      }
      auto_vrj = 64 <= spinnerc.size;
   }
      auto_vrj = buffer9;
      sinaa += parseFloat(`${2 << (Math.min(Math.abs(parseInt(`${topicq}`)), 2))}`);
       let kickg: Array<any> = [596, 619, 602];
      let onewssharel = 9212452 <= kickg.length;
      do {
         kickg.push(kickg.length);
         if (onewssharel) {
            break;
         }
      } while (((kickg.length % (Math.max(5, kickg.length))) < 2 || 2 < (kickg.length % (Math.max(3, kickg.length)))) && onewssharel);
         kickg = [kickg.length];
         kickg = [kickg.length & kickg.length];
      temperatureH -= parseFloat(`${2}`);
   for (let q = 0; q < 2; q++) {
       let huaweiV = String.fromCharCode(114,101,97,109,0);
       let short_9Y = true;
       let kuaishouf = 1.0;
      if (!short_9Y) {
         short_9Y = kuaishouf > 57.18;
      }
         kuaishouf *= (String.fromCharCode(88,0) == huaweiV ? huaweiV.length : (short_9Y ? 1 : 5));
      while (!short_9Y) {
         short_9Y = huaweiV.length > 9;
         break;
      }
      let liveendmodallogoP = kuaishouf <= 5148353.0;
      do {
          let vietnamo = String.fromCharCode(97,116,116,114,105,98,117,116,101,115,0);
          let logout3 = String.fromCharCode(110,112,114,111,98,101,0);
          let module7 = String.fromCharCode(101,122,111,115,0);
          let injuryP = String.fromCharCode(105,110,102,111,0);
          let ewardedZ = 3.0;
         kuaishouf += (String.fromCharCode(79,0) == logout3 ? parseInt(`${kuaishouf}`) : logout3.length);
         vietnamo += "3";
         module7 = `${injuryP.length}`;
         injuryP += `${parseInt(`${ewardedZ}`)}`;
         ewardedZ += injuryP.length + 3;
         if (liveendmodallogoP) {
            break;
         }
      } while (liveendmodallogoP && (huaweiV.startsWith(`${kuaishouf}`)));
      while (2 >= huaweiV.length) {
         huaweiV += `${((short_9Y ? 5 : 3) ^ parseInt(`${kuaishouf}`))}`;
         break;
      }
         kuaishouf /= Math.max(2 % (Math.max(parseInt(`${kuaishouf}`), 9)), 4);
         huaweiV = `${((short_9Y ? 1 : 1) + parseInt(`${kuaishouf}`))}`;
         huaweiV += `${(String.fromCharCode(80,0) == huaweiV ? huaweiV.length : parseInt(`${kuaishouf}`))}`;
      let libavutil4 = short_9Y ? !short_9Y : short_9Y;
      do {
         short_9Y = huaweiV.length < 84;
         if (libavutil4) {
            break;
         }
      } while (libavutil4 && (short_9Y));
      gemfilex = `${1 % (Math.max(parseInt(`${kuaishouf}`), 4))}`;
   }
   let circleb = auto_vrj ? !auto_vrj : auto_vrj;
   do {
      auto_vrj = buffer9 && 11.72 > sinaa;
      if (circleb) {
         break;
      }
   } while (circleb && (!auto_vrj || loadingO.length < 5));
      topicq -= parseFloat(`${parseInt(`${topicq}`) & 2}`);
   while (!loadingO.endsWith(`${stringsc}`)) {
       let mbjscommon4 = String.fromCharCode(106,99,111,108,115,97,109,112,0);
       let pushF = String.fromCharCode(110,111,116,99,104,101,100,0);
         pushF += `${(String.fromCharCode(111,0) == mbjscommon4 ? pushF.length : mbjscommon4.length)}`;
      let playercommony = String.fromCharCode(118,104,104,55,120,103,114,105,0) == mbjscommon4;
      do {
         mbjscommon4 = `${1 & pushF.length}`;
         if (playercommony) {
            break;
         }
      } while (playercommony && (2 <= mbjscommon4.length));
          let bingS = 1.0;
          let previewN = String.fromCharCode(97,110,99,104,111,114,0);
          let heartp: Map<any, any> = new Map([[String.fromCharCode(117,116,103,111,105,110,103,0),true ], [String.fromCharCode(105,110,116,101,114,112,111,108,0),true ], [String.fromCharCode(97,118,117,105,0),true ]]);
         mbjscommon4 += `${pushF.length ^ 1}`;
         bingS -= previewN.length ^ 3;
         previewN = `${parseInt(`${bingS}`) & 1}`;
         heartp = new Map([[previewN, (String.fromCharCode(57,0) == previewN ? parseInt(`${bingS}`) : previewN.length)]]);
       let libpangleflippedY = String.fromCharCode(97,99,111,108,111,114,0);
       let arrowup9 = String.fromCharCode(115,112,97,99,101,0);
         pushF += "1";
      while (arrowup9 != String.fromCharCode(107,0) && libpangleflippedY == String.fromCharCode(81,0)) {
         arrowup9 += `${(mbjscommon4 == String.fromCharCode(105,0) ? mbjscommon4.length : arrowup9.length)}`;
         break;
      }
      loadingO += `${mapbufferT.length}`;
      break;
   }
      libavutilE = topicq == 2.75;
      n_playerU.set(`${stringsc}`, stringsc);
    setHeight(epHeight);

   while (3 >= gemfilex.length) {
       let proxy9 = 5.0;
         proxy9 /= Math.max(5, parseInt(`${proxy9}`) & 1);
      let tickeds = proxy9 >= 9648956.0;
      do {
          let sentry2 = 0.0;
          let loginsuccessh = String.fromCharCode(109,111,99,107,115,0);
          let membershipD = String.fromCharCode(100,99,116,120,100,99,0);
         proxy9 *= 3 | membershipD.length;
         sentry2 -= 1 ^ parseInt(`${sentry2}`);
         loginsuccessh = "3";
         membershipD += `${loginsuccessh.length - parseInt(`${sentry2}`)}`;
         if (tickeds) {
            break;
         }
      } while (((4.36 - proxy9) == 2.10 || (4.36 - proxy9) == 3.83) && tickeds);
          let googleI = String.fromCharCode(99,114,97,122,121,116,105,109,101,0);
         proxy9 -= parseInt(`${proxy9}`) & googleI.length;
      libavutilE = topicq == 87.65;
      break;
   }
       let arrowupQ = String.fromCharCode(97,103,114,101,101,109,101,110,116,0);
       let iconpipexpand5 = String.fromCharCode(115,101,99,117,114,105,116,121,0);
      if (iconpipexpand5.length > arrowupQ.length) {
         iconpipexpand5 += `${iconpipexpand5.length - arrowupQ.length}`;
      }
       let episodesv: Map<any, any> = new Map([[String.fromCharCode(116,114,97,110,115,112,111,115,101,120,0),String.fromCharCode(112,114,101,112,114,111,103,114,97,109,109,101,100,0)], [String.fromCharCode(102,97,99,101,98,111,111,107,0),String.fromCharCode(99,97,112,116,117,114,101,112,97,114,109,115,0)], [String.fromCharCode(115,117,98,108,101,110,103,116,104,0),String.fromCharCode(114,101,103,105,115,116,101,114,115,0)]]);
       let whistleorangeN: Map<any, any> = new Map([[String.fromCharCode(99,114,111,115,115,98,97,114,0),false ], [String.fromCharCode(111,98,115,101,114,118,97,116,105,111,110,0),true ], [String.fromCharCode(118,109,97,102,0),true ]]);
      while (4 >= (whistleorangeN.size / 5) && (episodesv.size / 5) >= 1) {
         whistleorangeN.set(`${episodesv.size}`, whistleorangeN.size);
         break;
      }
      while ((arrowupQ.length << (Math.min(Math.abs(1), 3))) > 1 || (1 << (Math.min(1, arrowupQ.length))) > 2) {
         arrowupQ += `${iconpipexpand5.length ^ episodesv.size}`;
         break;
      }
          let libreactperfloggerjniu = String.fromCharCode(117,110,105,120,0);
          let historyz: Map<any, any> = new Map([[String.fromCharCode(113,105,97,110,0),false ], [String.fromCharCode(119,114,105,116,101,120,0),false ]]);
         episodesv.set(`${whistleorangeN.size}`, 2 >> (Math.min(3, Math.abs(historyz.size))));
         libreactperfloggerjniu = "1";
         historyz.set(libreactperfloggerjniu, (String.fromCharCode(68,0) == libreactperfloggerjniu ? libreactperfloggerjniu.length : libreactperfloggerjniu.length));
      let watchnowbgc = arrowupQ.length <= 7613108;
      do {
         arrowupQ += `${2 ^ whistleorangeN.size}`;
         if (watchnowbgc) {
            break;
         }
      } while (watchnowbgc && (arrowupQ.length <= iconpipexpand5.length));
      auto_vrj = temperatureH < 2.65 || libavutilE;
      mapbufferT = `${((libavutilE ? 5 : 5) >> (Math.min(loadingO.length, 1)))}`;
   let zhengpianH = 5127017 >= mapbufferT.length;
   do {
      mapbufferT = `${parseInt(`${temperatureH}`)}`;
      if (zhengpianH) {
         break;
      }
   } while ((2 < (4 >> (Math.min(1, mapbufferT.length)))) && zhengpianH);
      auto_vrj = !auto_vrj && 19.14 == topicq;
      n_playerU.set(`${topicq}`, 1);
   if (buffer9 && libavutilE) {
      buffer9 = gemfilex == String.fromCharCode(102,0);
   }
   let catagoryI = auto_vrj ? !auto_vrj : auto_vrj;
   do {
      auto_vrj = 23 < n_playerU.size;
      if (catagoryI) {
         break;
      }
   } while ((libavutilE) && catagoryI);
   while (4 < (1 - parseInt(`${temperatureH}`)) && 1 < (mapbufferT.length - parseInt(`${temperatureH}`))) {
      mapbufferT += `${(3 >> (Math.min(Math.abs((buffer9 ? 5 : 5)), 3)))}`;
      break;
   }
       let topic8 = String.fromCharCode(121,117,118,112,99,0);
       let defaultroombgM = String.fromCharCode(112,108,117,103,105,110,115,0);
       let debug7 = String.fromCharCode(103,114,97,110,116,0);
      while (topic8.length < defaultroombgM.length) {
         defaultroombgM = "2";
         break;
      }
      let dacccfaabfbcbadeebddcabacdffdbi = defaultroombgM == String.fromCharCode(101,102,106,0);
      do {
         defaultroombgM += `${defaultroombgM.length ^ debug7.length}`;
         if (dacccfaabfbcbadeebddcabacdffdbi) {
            break;
         }
      } while ((debug7.length == 5) && dacccfaabfbcbadeebddcabacdffdbi);
      for (let y = 0; y < 3; y++) {
         topic8 += "2";
      }
         defaultroombgM += `${defaultroombgM.length * 1}`;
         defaultroombgM = `${defaultroombgM.length}`;
      if (defaultroombgM.length > 2) {
          let dragk = String.fromCharCode(101,99,111,117,110,116,0);
          let ajaxC = String.fromCharCode(117,110,105,109,112,108,101,109,101,110,116,101,100,0);
          let telegramN: Map<any, any> = new Map([[String.fromCharCode(100,101,99,111,114,97,116,105,111,110,0),485], [String.fromCharCode(98,97,99,107,119,97,114,100,0),584]]);
          let hookn = 5.0;
         debug7 = `${2 | topic8.length}`;
         dragk += `${telegramN.size | dragk.length}`;
         ajaxC = `${telegramN.size}`;
         hookn -= parseFloat(`${dragk.length & parseInt(`${hookn}`)}`);
      }
       let iconbackwhiteh = String.fromCharCode(99,104,117,110,107,101,100,0);
       let encryptA = String.fromCharCode(114,101,99,111,114,100,115,0);
      for (let u = 0; u < 3; u++) {
         encryptA += `${iconbackwhiteh.length}`;
      }
      while (encryptA.length == 4 && iconbackwhiteh != String.fromCharCode(77,0)) {
         iconbackwhiteh = `${iconbackwhiteh.length - debug7.length}`;
         break;
      }
      gemfilex = "1";
      layouti |= 2;
    setWidth(epWidth);
  }

  const displayEpisodesWithStatus = useMemo(() => {
       let iconsetting4 = String.fromCharCode(117,116,102,116,111,0);
    let qcopy_d7 = String.fromCharCode(108,111,119,100,101,108,97,121,0);
    let googleY = String.fromCharCode(112,115,110,114,104,118,115,0);
    let injuryr = String.fromCharCode(99,114,111,112,0);
    let eventv = 3;
    let shirto = 2.0;
    let smallL = 1.0;
    let eact4 = false;
    let iconedits = String.fromCharCode(115,104,111,119,119,97,118,101,115,112,105,99,0);
    let nativeY = String.fromCharCode(118,102,114,101,101,0);
    let libtanW = String.fromCharCode(112,114,105,109,101,114,0);
    let buildC = String.fromCharCode(105,110,116,114,105,110,0);
    let incidenth: Array<any> = [315, 135];
    let catalogc = String.fromCharCode(112,104,111,110,101,115,0);
    let final_ilM = 1;
    let materialE = 4;
    let analytic7 = String.fromCharCode(109,97,116,114,105,120,101,110,99,0);
   for (let m = 0; m < 2; m++) {
      eact4 = parseInt(`${smallL}`) < libtanW.length;
   }
   let register_xr4 = buildC.length >= 7215154;
   do {
       let placement9 = String.fromCharCode(97,110,105,109,97,116,111,114,0);
       let whistler = String.fromCharCode(119,109,97,112,114,111,100,97,116,97,0);
       let clockX = 5;
       let mailV = String.fromCharCode(115,116,114,105,107,101,116,104,114,111,117,103,104,115,0);
       let submitp = String.fromCharCode(114,97,100,105,120,0);
          let signinupK = String.fromCharCode(112,111,115,116,102,105,108,116,101,114,0);
          let bridgeL: Map<any, any> = new Map([[String.fromCharCode(107,101,121,104,97,115,104,0),67], [String.fromCharCode(116,105,100,121,0),600], [String.fromCharCode(102,111,114,119,97,114,100,105,110,103,0),919]]);
          let windy = true;
         submitp = `${whistler.length + placement9.length}`;
         signinupK += "2";
         bridgeL.set(signinupK, signinupK.length >> (Math.min(2, Math.abs(bridgeL.size))));
         windy = (((!windy ? 40 : bridgeL.size) / (Math.max(bridgeL.size, 4))) < 40);
      while (submitp.startsWith(`${clockX}`)) {
          let bridgeLI = true;
          let moviesD = String.fromCharCode(108,111,103,115,97,109,112,108,101,0);
          let diceA = 2.0;
          let iconscheduleU = 0.0;
          let canvasd = String.fromCharCode(118,112,108,112,102,0);
         submitp += "3";
         bridgeLI = 63 <= canvasd.length && iconscheduleU <= 11.45;
         moviesD += `${moviesD.length % (Math.max(8, parseInt(`${iconscheduleU}`)))}`;
         diceA += parseFloat(`${parseInt(`${diceA}`)}`);
         canvasd = `${3 << (Math.min(4, moviesD.length))}`;
         break;
      }
      if (3 > (clockX % 1) && (submitp.length % (Math.max(10, clockX))) > 1) {
         submitp += `${1 + mailV.length}`;
      }
      let playercommonb = 8782509 >= clockX;
      do {
         clockX %= Math.max(1, whistler.length);
         if (playercommonb) {
            break;
         }
      } while ((2 > clockX) && playercommonb);
      for (let w = 0; w < 2; w++) {
         clockX %= Math.max(2, (whistler == String.fromCharCode(98,0) ? mailV.length : whistler.length));
      }
      if (submitp != String.fromCharCode(87,0)) {
         mailV = `${(String.fromCharCode(55,0) == placement9 ? placement9.length : clockX)}`;
      }
      while (whistler.length < 1) {
         whistler = `${submitp.length}`;
         break;
      }
          let activeo = 2.0;
          let logoB = 1;
          let descr = 3.0;
         placement9 = `${submitp.length ^ 1}`;
         activeo += parseInt(`${descr}`) - parseInt(`${activeo}`);
         logoB |= parseInt(`${activeo}`);
         descr += parseFloat(`${parseInt(`${activeo}`) ^ logoB}`);
         submitp = `${clockX}`;
          let castingy: Array<any> = [23, 328, 874];
         placement9 = `${placement9.length * 1}`;
         castingy = [castingy.length * castingy.length];
         clockX *= 1 - submitp.length;
          let danger3 = String.fromCharCode(97,99,116,105,111,110,115,0);
          let vietnamn = String.fromCharCode(115,104,97,112,101,0);
         whistler = `${mailV.length}`;
         danger3 = `${vietnamn.length + 3}`;
         vietnamn = `${vietnamn.length}`;
      if (!whistler.includes(`${clockX}`)) {
          let chatZ = 3.0;
          let huaweiz: Array<any> = [303, 790];
         whistler += `${(String.fromCharCode(77,0) == mailV ? mailV.length : huaweiz.length)}`;
         chatZ *= parseInt(`${chatZ}`) / (Math.max(2, parseInt(`${chatZ}`)));
         huaweiz = [parseInt(`${chatZ}`)];
      }
         mailV += `${1 & mailV.length}`;
       let launchery: Array<any> = [695, 120];
      buildC += `${(String.fromCharCode(114,0) == nativeY ? nativeY.length : injuryr.length)}`;
      if (register_xr4) {
         break;
      }
   } while ((qcopy_d7 == buildC) && register_xr4);

    const vodInfo = downloadVideoReducer.downloads.find(
      (download) => download.vod.vod_id === vodId
    );

   if (injuryr.length > parseInt(`${shirto}`)) {
      shirto += parseFloat(`${googleY.length}`);
   }
   let inouttargetreds = shirto >= 9685855.0;
   do {
      shirto *= (parseFloat(`${String.fromCharCode(113,0) == buildC ? buildC.length : parseInt(`${smallL}`)}`));
      if (inouttargetreds) {
         break;
      }
   } while (inouttargetreds && ((eventv / 4) <= 4 || (eventv / (Math.max(4, 1))) <= 4));

    if (!vodInfo) {

   for (let k = 0; k < 3; k++) {
      libtanW += `${nativeY.length}`;
   }
   while (libtanW.length > 2) {
       let libreactperfloggerjniu = false;
       let largebrightnessh = String.fromCharCode(113,117,101,117,101,115,0);
       let networkC = 2.0;
      let soundS = String.fromCharCode(51,100,120,115,49,121,112,117,101,51,0) == largebrightnessh;
      do {
          let zhengpianY = 4.0;
         largebrightnessh += `${parseInt(`${networkC}`) >> (Math.min(2, Math.abs(3)))}`;
         zhengpianY += parseFloat(`${parseInt(`${zhengpianY}`) | 3}`);
         if (soundS) {
            break;
         }
      } while ((!largebrightnessh.endsWith(`${networkC}`)) && soundS);
      let expiredY = libreactperfloggerjniu ? !libreactperfloggerjniu : libreactperfloggerjniu;
      do {
         libreactperfloggerjniu = !libreactperfloggerjniu || 45.46 > networkC;
         if (expiredY) {
            break;
         }
      } while (expiredY && (!libreactperfloggerjniu));
      for (let w = 0; w < 3; w++) {
         largebrightnessh = `${1 & parseInt(`${networkC}`)}`;
      }
         largebrightnessh += `${largebrightnessh.length}`;
         networkC *= parseInt(`${networkC}`) >> (Math.min(largebrightnessh.length, 5));
      if (3 == (1 >> (Math.min(5, largebrightnessh.length))) && 2 == (1 >> (Math.min(3, largebrightnessh.length)))) {
          let stylev = 5.0;
          let dialog4 = 1.0;
         largebrightnessh = `${(parseInt(`${stylev}`) << (Math.min(5, Math.abs((libreactperfloggerjniu ? 5 : 3)))))}`;
         stylev += 3;
         dialog4 -= 3;
      }
      if (!libreactperfloggerjniu) {
          let yellowredcardz = true;
          let descG = String.fromCharCode(112,114,111,103,114,97,109,115,0);
          let anytimep: Array<any> = [27, 398, 387];
          let coreN = 0.0;
          let libcxxcomponentsX = String.fromCharCode(99,111,114,114,101,108,97,116,105,111,110,0);
         networkC *= ((libreactperfloggerjniu ? 4 : 1) + parseInt(`${coreN}`));
         yellowredcardz = !libcxxcomponentsX.includes(`${yellowredcardz}`);
         descG = `${(2 & (yellowredcardz ? 2 : 1))}`;
         anytimep.push(descG.length + libcxxcomponentsX.length);
         coreN += (descG.length & (yellowredcardz ? 1 : 2));
      }
          let reactnativejsP: Array<any> = [923, 451];
          let libavformatB = 5;
         libreactperfloggerjniu = 84.28 >= networkC;
         reactnativejsP = [reactnativejsP.length ^ libavformatB];
         libavformatB <<= Math.min(Math.abs(3 | libavformatB), 2);
      let common0 = libreactperfloggerjniu ? !libreactperfloggerjniu : libreactperfloggerjniu;
      do {
         libreactperfloggerjniu = !libreactperfloggerjniu;
         if (common0) {
            break;
         }
      } while (common0 && (3.31 > networkC));
      libtanW = `${3 % (Math.max(4, nativeY.length))}`;
      break;
   }
      return displayEpisodes as wwChinasameDirect[]
    }

    return displayEpisodes?.map((ep) => {
      const episodeInfo = vodInfo && !vodInfo.vodIsAdult ?
        vodInfo.episodes.find(
          (episode) => episode.vodUrlNid === ep.nid && episode.vodSourceId === source
        )
        :
        vodInfo.episodes.find(
          (episode) => episode.vodUrlNid === ep.nid
        )

      if (vodInfo && episodeInfo) {

       let sportp = 2.0;
       let iconwatchnowf = String.fromCharCode(117,110,115,101,110,100,0);
       let values3 = String.fromCharCode(112,105,110,0);
       let kickJ = String.fromCharCode(113,117,97,110,116,115,0);
      let short_de = iconwatchnowf == String.fromCharCode(98,104,118,114,110,51,113,108,100,103,0);
      do {
         iconwatchnowf += `${(String.fromCharCode(109,0) == kickJ ? kickJ.length : iconwatchnowf.length)}`;
         if (short_de) {
            break;
         }
      } while ((3.22 >= (sportp - 3.85)) && short_de);
      for (let t = 0; t < 1; t++) {
         kickJ = `${2 * iconwatchnowf.length}`;
      }
         sportp /= Math.max(iconwatchnowf.length >> (Math.min(Math.abs(3), 3)), 4);
      for (let s = 0; s < 3; s++) {
         values3 += `${iconwatchnowf.length}`;
      }
      for (let y = 0; y < 2; y++) {
         iconwatchnowf += `${parseInt(`${sportp}`) % (Math.max(kickJ.length, 7))}`;
      }
      googleY += `${nativeY.length}`;
      injuryr += `${libtanW.length}`;
        const isDownloading = episodeInfo.status === DVGGrayTeamdetailsbg.DVGNalyticsTextinput;

       let playercommony: Array<any> = [728, 997, 228];
       let defaultpredictionprofilef = String.fromCharCode(115,101,108,101,99,116,101,100,0);
      if ((5 & defaultpredictionprofilef.length) < 4 || 5 < (playercommony.length & 5)) {
         defaultpredictionprofilef += `${defaultpredictionprofilef.length - 1}`;
      }
      while (3 >= (defaultpredictionprofilef.length << (Math.min(4, playercommony.length))) && 5 >= (3 << (Math.min(2, playercommony.length)))) {
          let gesturesd = 3.0;
          let textinput6 = String.fromCharCode(100,105,97,108,108,105,110,103,0);
          let libsentryB = 4.0;
         playercommony = [parseInt(`${gesturesd}`) << (Math.min(Math.abs(2), 4))];
         gesturesd += textinput6.length - parseInt(`${libsentryB}`);
         textinput6 = `${3 + textinput6.length}`;
         libsentryB += parseInt(`${libsentryB}`) | 3;
         break;
      }
      eact4 = buildC.length >= 22;
   let whistleH = libtanW == String.fromCharCode(99,117,110,49,57,116,0);
   do {
      libtanW = `${(parseInt(`${smallL}`) % (Math.max(10, (eact4 ? 1 : 5))))}`;
      if (whistleH) {
         break;
      }
   } while (whistleH && (iconsetting4 != libtanW));
        const isDownloaded = episodeInfo.status === DVGGrayTeamdetailsbg.DVGRoom;

   for (let k = 0; k < 1; k++) {
      nativeY = `${eventv / 1}`;
   }
       let whiteZ = 0;
      let infoa = whiteZ <= 7869828;
      do {
          let descK = false;
          let condensedY = true;
          let libjsijniprofiler7 = String.fromCharCode(108,105,98,99,0);
         whiteZ %= Math.max(3, 2);
         descK = (!descK ? !condensedY : descK);
         condensedY = !condensedY;
         libjsijniprofiler7 = `${libjsijniprofiler7.length - 1}`;
         if (infoa) {
            break;
         }
      } while ((whiteZ >= 5) && infoa);
      for (let j = 0; j < 1; j++) {
         whiteZ >>= Math.min(Math.abs(2 & whiteZ), 4);
      }
         whiteZ <<= Math.min(2, Math.abs(whiteZ));
      googleY += `${1 | injuryr.length}`;

        return {
          ...ep,
          isDownloading: !!isDownloading,
          isDownloaded: !!isDownloaded,
          progress: episodeInfo.progress,
        } as wwChinasameDirect;
      }

      return {
        ...ep,
        isDownloading: false,
        isDownloaded: false,
        progress: { percentage: 0, bytes: 0 }
      } as wwChinasameDirect;
    });
  }, [displayEpisodes, downloadVideoReducer.downloads, vodId]);

  useEffect(() => {
    setCurrentIndex(0);
  }, [vodId]);

  const renderItem = useCallback(({ item, index }: { item: string; index: number }) => {
    return (
      <TouchableOpacity
        style={styles.btn}
        onPress={() => setCurrentIndex(index)}
      >
        <Text
          style={{
            textAlign: "center",
            ...textVariants.header,
            color: index === currentIndex ? colors.text : colors.muted,
            fontSize: index === currentIndex ? 18 : 15,
          }}
        >
          {`${item}集`}
        </Text>
      </TouchableOpacity>
    );
  }, [ranges])

  useEffect(() => {
    if (iosCustomToastIsVisible) {
      setTimeout(() => {
        setIosCustomToastIsVisible(false)
      }, 2000);
    }
  }, [iosCustomToastIsVisible])

  return (
    <>
      {iosCustomToastIsVisible && screen === 'landscape' && Platform.OS === 'ios' && <View style={{
        opacity: 0.8,
        backgroundColor: 'black',
        position: 'absolute',
        top: '50%',
        left: '-50%',
        padding: 8,
        borderRadius: 4
      }}>
        <Text style={{ color: 'white', fontSize: 16 }}>
          {iosCustomToastText}
        </Text>
      </View>}
      {screen === 'potrait' && (
        <View
          style={{
            ...styles.header, marginHorizontal: 30,
          }}>
          <Text
            style={[
              styles.title,
              textVariants.header
            ]}>
            下载
          </Text>
        </View>
      )}

      <FlatList
        horizontal
        data={ranges}
        renderItem={renderItem}
      />

      {displayEpisodesWithStatus && (
        <>
          <ScrollView
            style={{
              height: height,
              marginBottom: 15,
              marginHorizontal: spacing.sideOffset,
            }}
            contentContainerStyle={{
              ...styles.episodeList,
              paddingTop: 10,
              paddingBottom: insets.bottom,
              paddingHorizontal: 5,
            }}
            nestedScrollEnabled={true}
          >
            {displayEpisodesWithStatus?.map((ep, idx) => (
              <TouchableOpacity
                key={`expand-${idx}`}
                onPress={() => {
                  if (!isVip) {
                    handleClose();
                    setShowAdOverlay(true);
                  } else {
                    if (downloadVideoReducer.queue.length + downloadVideoReducer.currentDownloading.length >= DOWNLOAD_FEATURE_MAX_QUEUE) {
                      setIosCustomToastText('最多同时下载10个视频，请稍后继续')
                      if (screen === 'landscape' && Platform.OS === 'ios') debouncedSetIosCustomToastIsVisibleTrue() 
                      else wwLaunchRound.showToast('最多同时下载10个视频，请稍后继续')
                    } else {
                      setIosCustomToastText('已加入下载队列，请查看‘我的下载’')
                      onDownload(ep.nid);
                      
                      //   content: <Text style={{color: 'white', top:-100, backgroundColor: '#00000080', padding: 5}}>'已加入下载队列，请查看‘我的下载’'</Text>, 
                      
                      
                      
                      if (screen === 'landscape' && Platform.OS === 'ios') debouncedSetIosCustomToastIsVisibleTrue() 
                      else throttledToast('已加入下载队列，请查看‘我的下载’')
                    }
                  }
                }}
                disabled={ep.isDownloaded || ep.isDownloading}
              >
                <View
                  style={{
                    backgroundColor: colors.search,
                    padding: spacing.s,
                    minWidth: childWidth,
                    marginBottom: spacing.s,
                    borderRadius: 8,
                    position: "relative",
                  }}
                  onLayout={episodeHeight === 0 || episodeWidth === 0 ? handleContainerLayout : undefined}
                >
                  {ep.isDownloading && (
                    <Animated.View style={{
                      backgroundColor: ep.isDownloading ? colors.primary : colors.search,
                      position: "absolute",
                      bottom: 0,
                      height: ep.progress.percentage / 100 * episodeHeight,
                      width: episodeWidth,
                      borderRadius: 8,
                    }}>
                    </Animated.View>
                  )}

                  <Text
                    numberOfLines={1}
                    style={{
                      fontSize: 13,
                      textAlign: "center",
                      fontWeight: "500",
                      color: colors.muted,
                    }}
                  >
                    {`${ep.name}`}
                  </Text>

                  {ep.isDownloading && (
                    <DlIcon
                      style={{
                        position: "absolute",
                        right: -8,
                        top: -5
                      }}
                    />
                  )}

                  {ep.isDownloaded && (
                    <View style={{
                      ...styles.legend,
                      backgroundColor: colors.primary + '29',
                      borderTopRightRadius: 8,
                      borderBottomLeftRadius: 8
                    }}>
                      <FinishIcon
                        width={10}
                        height={10}
                        color={colors.success}
                      />
                    </View>
                  )}

                  {!isVip && !ep.isDownloaded && (
                    <View style={{ ...styles.legend }}>
                      <VipIcon
                        color={colors.yellow}
                        width={14}
                        height={14}
                      />
                    </View>
                  )}
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>

          {isVip ? (
            <TouchableOpacity
              style={{
                backgroundColor: colors.search,
                marginHorizontal: spacing.sideOffset + 5,
                padding: spacing.s,
                borderRadius: 8,
                flexDirection: "row",
                justifyContent: "center",
                gap: 5,
                marginBottom: insets.bottom,
              }}
              onPress={() => {
                onPressToDownload();
              }}
            >
              <DownloadIcon width={24} height={24} />
              <Text
                style={{
                  ...styles.title,
                  ...textVariants.header,
                  fontSize: 15,
                  color: colors.muted,
                  paddingBottom: 3,
                }}
              >
                我的下载
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={{
                backgroundColor: colors.yellow,
                marginHorizontal: spacing.sideOffset + 5,
                padding: spacing.s,
                borderRadius: 8,
                marginBottom: insets.bottom,
              }}
              onPress={() => {
                handleClose();
                setShowAdOverlay(true);
              }}
            >
              <Text
                style={{
                  ...styles.title,
                  ...textVariants.header,
                  fontSize: 15,
                  color: !isVip ? colors.selected : colors.muted,
                }}
              >
                下载功能仅对VIP会员开放
              </Text>
            </TouchableOpacity>
          )}
        </>
      )}
    </>
  );
}

export default memo(SelectDownloadComponent);

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
  },
  title: {
    alignSelf: 'center',
    textAlign: "center",
  },
  episodeList: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    gap: 10,
    marginBottom: 14,
  },
  legend: {
    position: 'absolute',
    top: 0,
    right: 0,
    paddingVertical: 3,
    paddingHorizontal: 6,
    overflow: 'hidden'
  },
  btn: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 10,
    paddingRight: 10,
  },
});
