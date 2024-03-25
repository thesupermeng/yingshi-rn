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
import { yys_Libreact, yys_Step } from "@type/yys_libzeus";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import DownloadIcon from '@static/images/guideAdultTick.svg'
import DlIcon from "@static/images/fastFastMimo.svg";
import VipIcon from "@static/images/feedbackComment.svg"
import FinishIcon from "@static/images/liveSource.svg";
import { MARTextinputBackground, yys_TypeSelection } from "@type/yys_fast";
import { useAppSelector } from "@hooks/yys_frame";
import { yys_MintegralLibavdevice } from "@redux/yys_sport_shrink";
import DeviceInfo from "react-native-device-info";
import { Provider, Toast } from "@ant-design/react-native";
import { debounce, throttle } from "lodash";
import { yys_StatsForm } from "@utility/yys_context_muted";
import { DOWNLOAD_FEATURE_MAX_QUEUE } from "@utility/yys_ajax_switch";

const throttledToast = debounce((msg: string) => {
   yys_StatsForm.showToast(msg)
}, 1000)


interface yys_ConfigureUimanager {
   vodId?: number;
   isVip: boolean;
   source?: number;
   screen: string;
   episodes?: yys_Libreact;
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
}: yys_ConfigureUimanager) {
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
   const downloadVideoReducer: yys_TypeSelection = useAppSelector(
      ({ downloadVideoReducer }: yys_MintegralLibavdevice) => downloadVideoReducer
   );
   const [iosCustomToastIsVisible, setIosCustomToastIsVisible] = useState(false)
   const [iosCustomToastText, setIosCustomToastText] = useState("已加入下载队列，请查看‘我的下载’")

   const debouncedSetIosCustomToastIsVisibleTrue = debounce(() => {
      let bingN = String.fromCharCode(98, 95, 50, 54, 95, 112, 111, 115, 116, 0);
      let layoutq = 4.0;
      let kicka = 4.0;
      let libavfilterq = 1.0;
      let libturbomodulejsijnim = 1.0;
      let bottomn = String.fromCharCode(97, 95, 52, 53, 95, 105, 115, 105, 0);
      let formA: Array<any> = [48, 565, 664];
      let crownu = 4;
      let applicationZ = 5;
      let librrcP = 0.0;
      let libfolly2 = String.fromCharCode(98, 112, 115, 95, 121, 95, 55, 49, 0);
      let nterstitiald = true;
      let latna = 5;
      let videojsU: Map<any, any> = new Map([[String.fromCharCode(118, 97, 97, 99, 97, 108, 99, 117, 108, 97, 116, 105, 111, 110, 95, 57, 95, 55, 49, 0), 865], [String.fromCharCode(111, 115, 116, 114, 105, 110, 103, 115, 116, 114, 101, 97, 109, 95, 97, 95, 51, 52, 0), 951], [String.fromCharCode(121, 95, 50, 55, 95, 102, 111, 114, 116, 104, 0), 417]]);
      for (let f = 0; f < 3; f++) {
         let productu = 4.0;
         let greyq = String.fromCharCode(110, 95, 56, 52, 95, 109, 101, 116, 97, 100, 97, 116, 97, 0);
         let light6 = String.fromCharCode(114, 97, 100, 105, 117, 115, 95, 109, 95, 55, 55, 0);
         let runtimeschedulerB = false;
         let binddatasM: Array<any> = [142, 374];
         light6 = `${parseInt(`${productu}`)}`;
         binddatasM.push(binddatasM.length);
         let backgroundD = 4;
         light6 = `${2 & greyq.length}`;
         backgroundD &= backgroundD % 2;
         if (!light6.includes(`${runtimeschedulerB}`)) {
            runtimeschedulerB = !runtimeschedulerB;
         }
         let nterstitialB = 3.0;
         greyq = `${parseInt(`${productu}`)}`;
         for (let f = 0; f < 1; f++) {
            let photov = String.fromCharCode(112, 117, 114, 101, 95, 99, 95, 57, 0);
            let roundT = false;
            let condensedG = 4;
            let s_viewV = 3.0;
            let shared5: Map<any, any> = new Map([[String.fromCharCode(99, 111, 109, 112, 108, 105, 97, 110, 116, 95, 114, 95, 50, 49, 0), String.fromCharCode(121, 117, 118, 116, 101, 115, 116, 95, 105, 95, 49, 0)], [String.fromCharCode(100, 105, 100, 95, 120, 95, 56, 51, 0), String.fromCharCode(118, 95, 50, 52, 95, 115, 101, 110, 100, 0)], [String.fromCharCode(120, 102, 105, 120, 101, 115, 95, 52, 95, 55, 56, 0), String.fromCharCode(115, 112, 101, 99, 116, 114, 97, 108, 95, 97, 95, 55, 57, 0)]]);
            runtimeschedulerB = !roundT;
            photov += `${(photov == String.fromCharCode(48, 0) ? photov.length : condensedG)}`;
            condensedG >>= Math.min(3, Math.abs(shared5.size));
            s_viewV *= parseFloat(`${parseInt(`${s_viewV}`)}`);
            shared5 = new Map([[photov, parseInt(`${s_viewV}`) / 3]]);
         }
         let complete9 = 3.0;
         let videojsx = String.fromCharCode(110, 95, 55, 95, 111, 117, 116, 108, 105, 101, 114, 0);
         let dycreatorl: Map<any, any> = new Map([[String.fromCharCode(112, 108, 117, 103, 105, 110, 115, 95, 119, 95, 51, 50, 0), 448], [String.fromCharCode(102, 95, 55, 52, 95, 115, 112, 101, 99, 105, 102, 105, 99, 0), 275], [String.fromCharCode(117, 95, 53, 50, 95, 102, 105, 108, 101, 110, 97, 109, 101, 115, 0), 65]]);
         productu -= parseInt(`${complete9}`);
         complete9 += 1 * videojsx.length;
         videojsx = "1";
         dycreatorl.set(videojsx, 3);
         let settingsu = light6 == String.fromCharCode(109, 110, 121, 111, 121, 100, 0);
         do {
            light6 += `${(light6.length % (Math.max(9, (runtimeschedulerB ? 4 : 3))))}`;
            if (settingsu) {
               break;
            }
         } while (settingsu && (!runtimeschedulerB));
         let typingi: Map<any, any> = new Map([[String.fromCharCode(115, 97, 108, 116, 108, 101, 110, 95, 122, 95, 50, 57, 0), 358], [String.fromCharCode(101, 118, 101, 114, 121, 98, 111, 100, 121, 95, 109, 95, 55, 57, 0), 710], [String.fromCharCode(120, 95, 55, 51, 95, 116, 114, 97, 110, 115, 113, 117, 97, 110, 116, 0), 432]]);
         for (let b = 0; b < 1; b++) {
            let yingJ = String.fromCharCode(100, 111, 108, 108, 97, 114, 95, 114, 95, 52, 53, 0);
            let bannerQ = true;
            let floater9 = String.fromCharCode(120, 95, 52, 95, 101, 97, 99, 104, 0);
            typingi.set(`${productu}`, 2);
            yingJ += `${((bannerQ ? 1 : 2) ^ 1)}`;
            bannerQ = 37 > yingJ.length;
            floater9 += `${((bannerQ ? 3 : 5))}`;
         }
         if (!greyq.startsWith(`${nterstitialB}`)) {
            let yellowp = false;
            let thailandR = String.fromCharCode(109, 95, 49, 54, 95, 112, 114, 111, 98, 108, 101, 109, 0);
            let eventZ = String.fromCharCode(100, 97, 109, 112, 105, 110, 103, 95, 57, 95, 51, 50, 0);
            nterstitialB -= greyq.length;
            yellowp = (98 > ((yellowp ? thailandR.length : 98) / (Math.max(1, thailandR.length))));
            eventZ = `${((yellowp ? 5 : 1) / (Math.max(thailandR.length, 3)))}`;
         }
         nterstitialB -= (String.fromCharCode(119, 0) == light6 ? typingi.size : light6.length);
         libfolly2 = `${crownu}`;
      }
      libturbomodulejsijnim /= Math.max(5, parseInt(`${libturbomodulejsijnim}`) & 3);
      libturbomodulejsijnim += formA.length ^ 3;
      if (bottomn.length < 3) {
         bottomn = `${2 & bottomn.length}`;
      }
      for (let k = 0; k < 1; k++) {
         bingN += `${applicationZ}`;
      }
      librrcP += parseFloat(`${bingN.length}`);
      libavfilterq *= parseFloat(`${1 * bottomn.length}`);
      let pausev = nterstitiald ? !nterstitiald : nterstitiald;
      do {
         nterstitiald = layoutq >= parseFloat(`${bingN.length}`);
         if (pausev) {
            break;
         }
      } while (pausev && (2 < formA.length));
      if ((kicka + libturbomodulejsijnim) < 5.66) {
         let injurye = 1.0;
         if ((injurye + 5.2) >= 3.72 && (injurye + injurye) >= 5.2) {
            injurye *= parseInt(`${injurye}`) % (Math.max(9, parseInt(`${injurye}`)));
         }
         let questr = String.fromCharCode(107, 95, 48, 95, 98, 99, 104, 101, 99, 107, 0);
         injurye += parseInt(`${injurye}`) | questr.length;
         injurye *= parseInt(`${injurye}`) / 3;
         libturbomodulejsijnim += 2 >> (Math.min(Math.abs(parseInt(`${libturbomodulejsijnim}`)), 1));
      }
      for (let a = 0; a < 2; a++) {
         librrcP /= Math.max((parseFloat(`${parseInt(`${libavfilterq}`) << (Math.min(3, Math.abs((nterstitiald ? 2 : 5))))}`)), 2);
      }
      applicationZ ^= 3;
      for (let o = 0; o < 1; o++) {
         latna += applicationZ;
      }
      if ((4.27 + librrcP) < 3.86 || (parseFloat(`${crownu}`) + librrcP) < 4.27) {
         let renewI = String.fromCharCode(99, 97, 116, 97, 112, 117, 108, 116, 95, 99, 95, 54, 52, 0);
         let lessG = renewI == String.fromCharCode(109, 114, 102, 113, 54, 120, 100, 0);
         do {
            renewI = `${renewI.length}`;
            if (lessG) {
               break;
            }
         } while (lessG && (renewI == String.fromCharCode(56, 0) || renewI != String.fromCharCode(73, 0)));
         renewI = "2";
         renewI += `${renewI.length ^ 3}`;
         crownu -= parseInt(`${libturbomodulejsijnim}`);
      }
      if (libavfilterq < 2.24) {
         applicationZ /= Math.max(latna * 3, 1);
      }
      while ((kicka * librrcP) == 1.16 || (librrcP / 1.16) == 2.78) {
         librrcP += parseFloat(`${3 ^ parseInt(`${kicka}`)}`);
         break;
      }
      latna <<= Math.min(Math.abs((parseInt(`${libavfilterq}`) & (nterstitiald ? 5 : 2))), 1);
      for (let t = 0; t < 3; t++) {
         let penalty_: Map<any, any> = new Map([[String.fromCharCode(101, 120, 116, 114, 97, 112, 111, 108, 97, 116, 101, 95, 107, 95, 50, 52, 0), 58], [String.fromCharCode(97, 112, 112, 108, 105, 99, 97, 116, 105, 111, 110, 95, 112, 95, 57, 0), 451], [String.fromCharCode(110, 95, 55, 95, 106, 109, 108, 105, 115, 116, 0), 131]]);
         let currentB = String.fromCharCode(99, 111, 108, 117, 109, 115, 95, 117, 95, 50, 49, 0);
         let b_positionN = 2.0;
         let textinput0 = 2;
         for (let l = 0; l < 3; l++) {
            b_positionN -= parseFloat(`${penalty_.size / (Math.max(currentB.length, 4))}`);
         }
         let detailD: Map<any, any> = new Map([[String.fromCharCode(101, 98, 109, 108, 110, 117, 109, 95, 49, 95, 49, 48, 48, 0), String.fromCharCode(117, 110, 114, 105, 115, 101, 95, 121, 95, 57, 51, 0)], [String.fromCharCode(103, 95, 52, 53, 95, 115, 111, 98, 101, 108, 0), String.fromCharCode(121, 95, 57, 56, 95, 112, 114, 101, 100, 105, 99, 116, 111, 114, 115, 98, 0)], [String.fromCharCode(97, 98, 115, 120, 95, 121, 95, 52, 55, 0), String.fromCharCode(117, 95, 54, 50, 95, 97, 118, 102, 111, 114, 109, 97, 116, 114, 101, 115, 0)]]);
         let assistZ = 5.0;
         textinput0 |= textinput0;
         detailD = new Map([[`${detailD.size}`, parseInt(`${assistZ}`) << (Math.min(Math.abs(detailD.size), 1))]]);
         assistZ *= parseFloat(`${1 | parseInt(`${assistZ}`)}`);
         let chatb = String.fromCharCode(109, 97, 115, 107, 95, 112, 95, 55, 54, 0);
         textinput0 += (String.fromCharCode(54, 0) == chatb ? parseInt(`${b_positionN}`) : chatb.length);
         let faviconF: Map<any, any> = new Map([[String.fromCharCode(113, 95, 49, 57, 95, 100, 105, 97, 108, 111, 103, 117, 101, 115, 0), true], [String.fromCharCode(121, 95, 57, 95, 97, 110, 111, 116, 104, 101, 114, 0), true]]);
         let shrinkY = 5;
         let mapping2: Map<any, any> = new Map([[String.fromCharCode(105, 95, 50, 50, 95, 102, 117, 110, 99, 116, 105, 111, 110, 115, 0), 231], [String.fromCharCode(108, 95, 54, 49, 95, 115, 97, 116, 100, 120, 0), 578]]);
         textinput0 ^= 3 % (Math.max(2, shrinkY));
         faviconF.set(`${mapping2.size}`, 3);
         shrinkY -= mapping2.size;
         let mintegral6 = 7458130 >= penalty_.size;
         do {
            penalty_.set(`${textinput0}`, 3);
            if (mintegral6) {
               break;
            }
         } while (mintegral6 && (1 <= (4 % (Math.max(4, penalty_.size))) || 5 <= (penalty_.size % (Math.max(4, 9)))));
         let fcopy_yw = 4.0;
         for (let m = 0; m < 3; m++) {
            currentB = `${penalty_.size >> (Math.min(Math.abs(2), 1))}`;
         }
         penalty_ = new Map([[`${penalty_.size}`, penalty_.size]]);
         textinput0 <<= Math.min(Math.abs(penalty_.size * parseInt(`${fcopy_yw}`)), 3);
         let analyticsW = 0;
         let settings = 2;
         b_positionN += parseFloat(`${settings / 3}`);
         analyticsW |= 2;
         settings |= analyticsW;
         while (b_positionN == 4.37) {
            fcopy_yw -= parseInt(`${fcopy_yw}`) + 1;
            break;
         }
         let bridge2 = textinput0 >= 8327460;
         do {
            textinput0 >>= Math.min(5, Math.abs(parseInt(`${b_positionN}`) / (Math.max(4, parseInt(`${fcopy_yw}`)))));
            if (bridge2) {
               break;
            }
         } while (bridge2 && ((2.8 / (Math.max(6, fcopy_yw))) == 5.22));
         layoutq -= parseFloat(`${textinput0 ^ 2}`);
      }
      let root4 = kicka >= 5518853.0;
      do {
         kicka /= Math.max(bottomn.length % (Math.max(3, 10)), 1);
         if (root4) {
            break;
         }
      } while (root4 && (3.100 <= kicka));
      layoutq -= parseFloat(`${2}`);
      for (let v = 0; v < 2; v++) {
         crownu /= Math.max(4, applicationZ);
      }
      formA.push(parseInt(`${layoutq}`) % (Math.max(libfolly2.length, 6)));
      for (let t = 0; t < 2; t++) {
         let mapbufferr = String.fromCharCode(101, 95, 54, 56, 95, 110, 111, 116, 105, 102, 105, 101, 100, 0);
         let sheetJ = String.fromCharCode(102, 114, 105, 101, 110, 100, 108, 121, 95, 54, 95, 53, 49, 0);
         while (mapbufferr.length == sheetJ.length) {
            sheetJ += `${mapbufferr.length}`;
            break;
         }
         while (mapbufferr.length > 2) {
            let inactivei: Array<any> = [122, 729];
            sheetJ = "2";
            inactivei = [inactivei.length];
            break;
         }
         let playercommonP = String.fromCharCode(113, 95, 49, 55, 95, 110, 111, 116, 103, 101, 116, 0);
         sheetJ = `${mapbufferr.length & 3}`;
         playercommonP = `${playercommonP.length}`;
         for (let l = 0; l < 1; l++) {
            let confirmationZ = String.fromCharCode(112, 116, 114, 109, 97, 112, 95, 100, 95, 49, 51, 0);
            let pausej = 0;
            let custom7 = 1.0;
            let adultn: Map<any, any> = new Map([[String.fromCharCode(101, 95, 49, 56, 95, 100, 115, 100, 112, 99, 109, 0), 691], [String.fromCharCode(112, 95, 50, 95, 115, 97, 110, 100, 98, 111, 120, 0), 423]]);
            sheetJ += `${pausej / (Math.max(adultn.size, 7))}`;
            confirmationZ = "1";
            pausej += confirmationZ.length + parseInt(`${custom7}`);
            custom7 -= confirmationZ.length | parseInt(`${custom7}`);
            adultn = new Map([[confirmationZ, parseInt(`${custom7}`) - confirmationZ.length]]);
         }
         let combinee = 1.0;
         let reactp = String.fromCharCode(109, 95, 53, 53, 95, 99, 111, 109, 112, 111, 115, 105, 116, 105, 110, 103, 0);
         mapbufferr += `${parseInt(`${combinee}`) % (Math.max(3, 3))}`;
         combinee *= parseFloat(`${2 >> (Math.min(1, reactp.length))}`);
         reactp += `${reactp.length}`;
         for (let h = 0; h < 2; h++) {
            sheetJ = `${sheetJ.length - 2}`;
         }
         bingN += "3";
      }
      while ((latna / 3) >= 1 && (applicationZ / (Math.max(3, 7))) >= 4) {
         latna -= 3 << (Math.min(Math.abs(parseInt(`${libavfilterq}`)), 1));
         break;
      }
      let anytimeX = String.fromCharCode(99, 111, 110, 115, 117, 109, 97, 98, 108, 101, 95, 117, 95, 56, 56, 0);
      if (anytimeX == anytimeX) {
         anytimeX += `${(String.fromCharCode(50, 0) == anytimeX ? anytimeX.length : anytimeX.length)}`;
      }
      let graph5: Array<any> = [243, 237];
      let questj = String.fromCharCode(97, 115, 110, 95, 108, 95, 49, 56, 0);
      anytimeX = `${questj.length * 1}`;
      graph5.push(graph5.length);
      questj += `${graph5.length % (Math.max(graph5.length, 2))}`;
      let nativeexw = String.fromCharCode(119, 95, 56, 56, 95, 105, 111, 101, 114, 114, 0);
      let indexK = 1.0;
      let chinasamef = true;
      anytimeX += "1";
      nativeexw += `${nativeexw.length}`;
      indexK *= (nativeexw == String.fromCharCode(107, 0) ? nativeexw.length : parseInt(`${indexK}`));
      chinasamef = nativeexw.length < 21;
      libavfilterq /= Math.max(parseFloat(`${1 / (Math.max(10, parseInt(`${libavfilterq}`)))}`), 3);
      let upgradeb = 6635401.0 <= layoutq;
      do {
         let configureS = String.fromCharCode(111, 95, 56, 52, 95, 105, 116, 101, 109, 0);
         let changeC: Map<any, any> = new Map([[String.fromCharCode(102, 111, 108, 100, 95, 119, 95, 51, 57, 0), true], [String.fromCharCode(100, 116, 100, 102, 95, 107, 95, 57, 54, 0), true]]);
         configureS = "2";
         let mergerO = configureS.length >= 5874609;
         do {
            configureS += `${configureS.length ^ changeC.size}`;
            if (mergerO) {
               break;
            }
         } while (mergerO && (3 >= (changeC.size << (Math.min(configureS.length, 1))) || 3 >= (changeC.size << (Math.min(configureS.length, 4)))));
         if (1 >= (5 * configureS.length)) {
            configureS = `${(configureS == String.fromCharCode(120, 0) ? changeC.size : configureS.length)}`;
         }
         let temperatureh = String.fromCharCode(114, 101, 97, 108, 116, 105, 109, 101, 95, 113, 95, 55, 51, 0);
         let libsentry3 = String.fromCharCode(105, 110, 115, 101, 114, 116, 101, 100, 95, 122, 95, 52, 57, 0);
         let sliderL = String.fromCharCode(116, 95, 52, 54, 95, 116, 102, 120, 100, 0);
         changeC.set(configureS, temperatureh.length + 2);
         temperatureh += `${(libsentry3 == String.fromCharCode(67, 0) ? libsentry3.length : sliderL.length)}`;
         sliderL = "2";
         configureS += `${configureS.length / (Math.max(3, changeC.size))}`;
         let inactive9: Array<any> = [138, 182, 323];
         let orientationv = true;
         let librrcF = String.fromCharCode(109, 101, 109, 98, 101, 114, 115, 95, 104, 95, 52, 53, 0);
         configureS += `${configureS.length}`;
         inactive9.push(1);
         orientationv = (((!orientationv ? 62 : inactive9.length) % (Math.max(inactive9.length, 6))) <= 62);
         librrcF = "2";
         layoutq += parseFloat(`${2 << (Math.min(3, Math.abs(latna)))}`);
         if (upgradeb) {
            break;
         }
      } while (upgradeb && (!bingN.endsWith(`${layoutq}`)));
      while (!nterstitiald) {
         crownu -= latna & 3;
         break;
      }
      latna /= Math.max((parseInt(`${libavfilterq}`) ^ (nterstitiald ? 4 : 4)), 4);
      let philippinesV: Map<any, any> = new Map([[String.fromCharCode(98, 97, 99, 107, 103, 114, 117, 110, 100, 95, 112, 95, 52, 50, 0), String.fromCharCode(118, 105, 115, 105, 116, 95, 114, 95, 56, 52, 0)], [String.fromCharCode(98, 117, 102, 102, 101, 114, 115, 95, 112, 95, 55, 56, 0), String.fromCharCode(110, 95, 55, 55, 95, 115, 112, 101, 99, 105, 102, 105, 99, 97, 116, 105, 111, 110, 0)], [String.fromCharCode(122, 95, 56, 51, 95, 119, 97, 116, 101, 114, 109, 97, 114, 107, 115, 0), String.fromCharCode(117, 95, 53, 52, 95, 109, 101, 109, 100, 117, 112, 0)]]);
      let modityN = String.fromCharCode(116, 101, 99, 104, 110, 111, 108, 111, 103, 121, 95, 122, 95, 53, 50, 0);
      let successD = 2.0;
      successD += philippinesV.size ^ parseInt(`${successD}`);
      let tickv = String.fromCharCode(120, 95, 52, 50, 95, 100, 105, 115, 116, 114, 105, 98, 117, 116, 105, 111, 110, 0);
      modityN = `${tickv.length}`;
      if ((successD * 1.40) <= 3.79 && (parseInt(`${successD}`) * 3) <= 5) {
         modityN = "2";
      }
      let incidentY = 7937962.0 <= successD;
      do {
         let half0 = String.fromCharCode(107, 95, 49, 56, 95, 114, 116, 109, 112, 101, 0);
         let mbnativei = String.fromCharCode(97, 95, 56, 50, 95, 116, 105, 116, 108, 101, 98, 97, 114, 0);
         successD /= Math.max(2 >> (Math.min(1, mbnativei.length)), 4);
         half0 = `${half0.length / 2}`;
         mbnativei = `${half0.length}`;
         if (incidentY) {
            break;
         }
      } while (incidentY && (3.50 < (successD * modityN.length) || (modityN.length * parseInt(`${successD}`)) < 3));
      for (let w = 0; w < 1; w++) {
         philippinesV.set(`${modityN}`, modityN.length | philippinesV.size);
      }
      if ((modityN.length << (Math.min(Math.abs(4), 1))) <= 1) {
         modityN = `${3 + philippinesV.size}`;
      }
      let projectg: Map<any, any> = new Map([[String.fromCharCode(99, 97, 117, 116, 101, 114, 105, 122, 101, 95, 52, 95, 56, 56, 0), 270], [String.fromCharCode(106, 118, 101, 114, 115, 105, 111, 110, 95, 50, 95, 52, 51, 0), 342], [String.fromCharCode(120, 95, 53, 56, 95, 115, 117, 98, 116, 114, 97, 99, 116, 101, 100, 0), 85]]);
      let activeM = String.fromCharCode(100, 105, 115, 99, 117, 115, 115, 105, 111, 110, 95, 108, 95, 49, 57, 0);
      let suggestion9 = 3.0;
      let libpangleflipped3: Array<any> = [966, 627, 833];
      successD *= philippinesV.size;
      activeM += `${activeM.length / 1}`;
      suggestion9 -= 1;
      libpangleflipped3 = [1];
      let plusW = String.fromCharCode(99, 101, 110, 116, 101, 114, 101, 100, 95, 111, 95, 53, 48, 0);
      layoutq -= parseFloat(`${libfolly2.length}`);
      formA.push(applicationZ / (Math.max(parseInt(`${librrcP}`), 2)));
      for (let r = 0; r < 1; r++) {
         bottomn = `${parseInt(`${kicka}`) >> (Math.min(3, Math.abs(1)))}`;
      }
      if ((2 + libturbomodulejsijnim) == 2.78) {
         let placeholder4 = String.fromCharCode(116, 95, 54, 56, 95, 99, 111, 110, 110, 101, 99, 116, 105, 110, 103, 0);
         let xvodR = String.fromCharCode(105, 99, 111, 110, 105, 102, 105, 101, 100, 95, 53, 95, 51, 54, 0);
         let arrows = String.fromCharCode(116, 104, 114, 101, 97, 100, 109, 101, 115, 115, 97, 103, 101, 95, 104, 95, 52, 48, 0);
         xvodR += `${arrows.length}`;
         if (1 > xvodR.length) {
            arrows = "2";
         }
         let green3: Map<any, any> = new Map([[String.fromCharCode(104, 95, 51, 54, 95, 122, 112, 98, 105, 113, 117, 97, 100, 115, 0), true], [String.fromCharCode(98, 95, 53, 52, 95, 100, 109, 105, 120, 0), true], [String.fromCharCode(116, 97, 100, 100, 95, 106, 95, 52, 57, 0), true]]);
         let librrcK: Map<any, any> = new Map([[String.fromCharCode(120, 95, 50, 54, 95, 99, 104, 97, 110, 103, 101, 103, 114, 111, 117, 112, 0), 66], [String.fromCharCode(114, 101, 113, 117, 101, 115, 116, 101, 114, 115, 95, 116, 95, 55, 52, 0), 791]]);
         green3 = new Map([[arrows, xvodR.length]]);
         placeholder4 += `${xvodR.length ^ placeholder4.length}`;
         if (placeholder4.length == xvodR.length) {
            xvodR = `${librrcK.size ^ 1}`;
         }
         librrcK = new Map([[`${green3.size}`, (arrows == String.fromCharCode(110, 0) ? green3.size : arrows.length)]]);
         let predictiona = 0.0;
         let typesW = String.fromCharCode(102, 95, 52, 55, 95, 114, 101, 115, 116, 111, 114, 101, 0);
         green3.set(`${arrows}`, librrcK.size);
         typesW += `${(String.fromCharCode(110, 0) == typesW ? typesW.length : typesW.length)}`;
         kicka *= placeholder4.length >> (Math.min(Math.abs(2), 5));
      }
      kicka /= Math.max(libfolly2.length / 2, 1);
      let debugH = 8302438.0 <= layoutq;
      do {
         layoutq -= parseFloat(`${parseInt(`${layoutq}`) & bottomn.length}`);
         if (debugH) {
            break;
         }
      } while (debugH && (1.82 < (layoutq * 1.64)));
      while (5.21 <= (parseFloat(`${applicationZ}`) + librrcP) && 5 <= (applicationZ * 5)) {
         applicationZ &= 1;
         break;
      }
      while (4 <= crownu) {
         nterstitiald = bingN == bottomn;
         break;
      }
      bottomn = `${parseInt(`${libavfilterq}`)}`;
      if ((bingN.length % 3) <= 1 && 3 <= (bingN.length % (Math.max(4, videojsU.size)))) {
         let macaub = 0.0;
         let math1 = 1.0;
         let targetF = true;
         let side2 = 0.0;
         while (1.35 == macaub) {
            let skipc = 1;
            let condensedw = 0.0;
            let middleC = String.fromCharCode(101, 100, 105, 116, 101, 100, 95, 113, 95, 52, 52, 0);
            let promotionn: Array<any> = [7, 799, 515];
            let combine4 = true;
            macaub += (parseFloat(`${(combine4 ? 1 : 5) + skipc}`));
            skipc |= 3;
            condensedw -= parseFloat(`${middleC.length}`);
            middleC += `${promotionn.length}`;
            promotionn.push(3 << (Math.min(3, Math.abs(parseInt(`${condensedw}`)))));
            combine4 = (promotionn.length | middleC.length) > 4;
            break;
         }
         math1 += 2 + parseInt(`${macaub}`);
         macaub *= parseFloat(`${2}`);
         if ((math1 - side2) == 3.79 || (side2 - math1) == 3.79) {
            let bingb: Map<any, any> = new Map([[String.fromCharCode(114, 101, 97, 108, 95, 115, 95, 49, 50, 0), 159], [String.fromCharCode(100, 95, 53, 52, 95, 115, 112, 97, 114, 115, 101, 0), 613], [String.fromCharCode(111, 95, 51, 56, 95, 116, 114, 97, 105, 108, 105, 110, 103, 0), 327]]);
            let unewinterstitialR: Array<any> = [142, 196];
            let statisticst = String.fromCharCode(102, 114, 101, 101, 102, 111, 114, 109, 95, 114, 95, 52, 48, 0);
            let dplusC = String.fromCharCode(119, 95, 51, 51, 95, 100, 101, 102, 101, 114, 114, 101, 114, 0);
            side2 /= Math.max(parseFloat(`${2 >> (Math.min(1, dplusC.length))}`), 3);
            bingb = new Map([[`${bingb.size}`, 3 / (Math.max(4, bingb.size))]]);
            unewinterstitialR = [3];
            statisticst = `${statisticst.length}`;
            dplusC = `${statisticst.length & unewinterstitialR.length}`;
         }
         math1 += parseInt(`${side2}`) & 3;
         math1 *= parseInt(`${side2}`) + 3;
         if (macaub >= 2.36 && 5.17 >= (macaub / 2.36)) {
            macaub *= (parseFloat(`${(targetF ? 2 : 3) << (Math.min(Math.abs(parseInt(`${side2}`)), 1))}`));
         }
         for (let d = 0; d < 1; d++) {
            let darkq = 3;
            let emojis: Map<any, any> = new Map([[String.fromCharCode(118, 95, 55, 55, 95, 109, 101, 115, 115, 115, 97, 103, 101, 0), 445], [String.fromCharCode(112, 111, 115, 116, 112, 111, 110, 101, 100, 95, 115, 95, 57, 48, 0), 959], [String.fromCharCode(109, 95, 55, 52, 95, 101, 110, 106, 105, 110, 0), 329]]);
            let redirect1: Array<any> = [String.fromCharCode(114, 95, 56, 51, 95, 98, 105, 110, 97, 114, 121, 0), String.fromCharCode(117, 95, 49, 51, 95, 115, 113, 108, 0), String.fromCharCode(116, 95, 56, 57, 95, 109, 101, 109, 111, 114, 121, 0)];
            math1 -= 2;
            darkq <<= Math.min(Math.abs(emojis.size), 4);
            emojis = new Map([[`${emojis.size}`, emojis.size]]);
            redirect1.push(emojis.size & 2);
         }
         side2 /= Math.max(parseFloat(`${3 + parseInt(`${macaub}`)}`), 5);
         macaub -= parseFloat(`${parseInt(`${math1}`) % (Math.max(8, parseInt(`${side2}`)))}`);
         for (let c = 0; c < 1; c++) {
            side2 -= parseFloat(`${parseInt(`${side2}`) / 1}`);
         }
         let uimanager0 = String.fromCharCode(115, 97, 118, 101, 115, 116, 97, 116, 101, 95, 100, 95, 49, 53, 0);
         let fillE = String.fromCharCode(116, 104, 97, 119, 101, 100, 95, 57, 95, 51, 51, 0);
         bingN = `${parseInt(`${libturbomodulejsijnim}`) & 3}`;
      }
      let libreact8 = 8987034.0 <= libturbomodulejsijnim;
      do {
         libturbomodulejsijnim -= ((nterstitiald ? 4 : 5) - parseInt(`${layoutq}`));
         if (libreact8) {
            break;
         }
      } while (libreact8 && (formA.includes(libturbomodulejsijnim)));
      layoutq *= parseFloat(`${1}`);
      bottomn = `${latna}`;
      let matchesQ = kicka <= 4970212.0;
      do {
         let memberi: Map<any, any> = new Map([[String.fromCharCode(109, 95, 57, 49, 95, 120, 112, 117, 98, 0), 645], [String.fromCharCode(105, 95, 52, 57, 95, 116, 114, 97, 110, 115, 102, 111, 114, 109, 101, 114, 0), 648]]);
         let libtanC = 5;
         let langkeyl: Map<any, any> = new Map([[String.fromCharCode(116, 114, 97, 110, 115, 112, 111, 110, 101, 100, 95, 101, 95, 50, 53, 0), 593], [String.fromCharCode(113, 95, 54, 48, 95, 99, 97, 112, 116, 117, 114, 101, 0), 800], [String.fromCharCode(102, 95, 57, 49, 95, 115, 109, 112, 116, 101, 98, 97, 114, 115, 0), 115]]);
         let manifestS = 0;
         let resultz = 3;
         for (let w = 0; w < 3; w++) {
            let downQ = true;
            let umeng5: Array<any> = [10, 988];
            manifestS >>= Math.min(Math.abs(resultz), 4);
            downQ = downQ || umeng5.length > 1;
            umeng5.push(umeng5.length);
         }
         let termsU = String.fromCharCode(110, 95, 54, 54, 95, 112, 111, 115, 116, 112, 111, 110, 101, 0);
         resultz <<= Math.min(3, Math.abs(memberi.size % (Math.max(3, manifestS))));
         termsU = `${termsU.length}`;
         memberi = new Map([[`${langkeyl.size}`, 3 % (Math.max(6, langkeyl.size))]]);
         for (let h = 0; h < 2; h++) {
            memberi = new Map([[`${langkeyl.size}`, 1 << (Math.min(4, Math.abs(libtanC)))]]);
         }
         if (2 >= (memberi.size ^ langkeyl.size) || 4 >= (2 ^ memberi.size)) {
            langkeyl.set(`${resultz}`, 1);
         }
         libtanC += resultz * manifestS;
         while ((3 - libtanC) > 1) {
            let baiduK = String.fromCharCode(99, 117, 101, 115, 95, 104, 95, 49, 57, 0);
            let refreshO = String.fromCharCode(99, 95, 56, 48, 95, 117, 110, 118, 111, 116, 101, 0);
            manifestS /= Math.max(1, baiduK.length);
            baiduK = `${refreshO.length}`;
            refreshO += `${(refreshO == String.fromCharCode(122, 0) ? refreshO.length : refreshO.length)}`;
            break;
         }
         manifestS += libtanC / (Math.max(1, langkeyl.size));
         let ajaxq = 5;
         let p_unlockO = 4.0;
         memberi = new Map([[`${resultz}`, manifestS % (Math.max(resultz, 10))]]);
         ajaxq += parseInt(`${p_unlockO}`) / (Math.max(2, ajaxq));
         p_unlockO *= parseFloat(`${ajaxq / (Math.max(4, parseInt(`${p_unlockO}`)))}`);
         if (1 > (memberi.size * 3) && 3 > (manifestS * memberi.size)) {
            memberi.set(`${manifestS}`, manifestS);
         }
         while (resultz >= 3) {
            libtanC += 3 * memberi.size;
            break;
         }
         kicka += 3;
         if (matchesQ) {
            break;
         }
      } while (matchesQ && (5.27 >= (kicka - 2.87) && (4 << (Math.min(5, formA.length))) >= 2));
      if (1 >= (crownu ^ 2) && 2 >= (crownu ^ applicationZ)) {
         applicationZ *= 1;
      }
      let sina3 = String.fromCharCode(118, 95, 52, 52, 95, 105, 110, 108, 101, 110, 0);
      sina3 += `${(sina3 == String.fromCharCode(81, 0) ? sina3.length : sina3.length)}`;
      let xvodk = String.fromCharCode(102, 105, 114, 101, 100, 95, 105, 95, 55, 53, 0);
      let themeE = String.fromCharCode(103, 95, 52, 52, 95, 119, 101, 105, 103, 104, 116, 115, 0);
      let accepted4: Map<any, any> = new Map([[String.fromCharCode(101, 120, 97, 110, 100, 101, 100, 95, 119, 95, 49, 0), 865], [String.fromCharCode(112, 117, 114, 112, 111, 115, 101, 95, 121, 95, 50, 55, 0), 722]]);
      sina3 += `${accepted4.size | 3}`;
      latna <<= Math.min(libfolly2.length, 4);
      for (let i = 0; i < 2; i++) {
         bingN += "2";
      }
      let floatere = 6118389 >= latna;
      do {
         let listH = 5.0;
         let applicationI = 2.0;
         applicationI -= parseFloat(`${2}`);
         let macau2 = String.fromCharCode(112, 114, 111, 98, 95, 49, 95, 50, 54, 0);
         let mapbufferZ = String.fromCharCode(99, 104, 117, 110, 107, 95, 50, 95, 53, 57, 0);
         let delegate_rq9 = 5;
         applicationI += parseFloat(`${parseInt(`${listH}`) & 2}`);
         delegate_rq9 *= 3;
         listH *= parseFloat(`${parseInt(`${listH}`)}`);
         let default_dp3 = applicationI <= 6558328.0;
         do {
            applicationI /= Math.max(3, parseFloat(`${3 % (Math.max(3, mapbufferZ.length))}`));
            if (default_dp3) {
               break;
            }
         } while (default_dp3 && (5 > (macau2.length * 5) || (3.64 + applicationI) > 4.41));
         latna |= 2 - parseInt(`${libavfilterq}`);
         if (floatere) {
            break;
         }
      } while (floatere && ((latna + 3) >= 3));
      libturbomodulejsijnim -= (String.fromCharCode(115, 0) == bottomn ? crownu : bottomn.length);
      videojsU.set(`${applicationZ}`, libfolly2.length >> (Math.min(1, Math.abs(applicationZ))));
      bingN += `${videojsU.size << (Math.min(3, Math.abs(parseInt(`${libavfilterq}`))))}`;
      libturbomodulejsijnim += (libfolly2 == String.fromCharCode(53, 0) ? parseInt(`${layoutq}`) : libfolly2.length);
      for (let k = 0; k < 1; k++) {
         let fileP = 0.0;
         let sendG = true;
         let nterstitialX = 1.0;
         let imagemanager5 = String.fromCharCode(112, 101, 114, 109, 117, 116, 101, 115, 95, 98, 95, 56, 0);
         let configP = true;
         let eighteenv = 0;
         imagemanager5 += `${(parseInt(`${fileP}`) / (Math.max(4, (sendG ? 5 : 2))))}`;
         eighteenv &= 3 - eighteenv;
         let sellw = 3.0;
         let register_hs = 1.0;
         let umengV = String.fromCharCode(115, 117, 98, 112, 97, 114, 116, 95, 108, 95, 57, 52, 0);
         let aread = true;
         nterstitialX *= (parseFloat(`${String.fromCharCode(56, 0) == imagemanager5 ? imagemanager5.length : (configP ? 5 : 1)}`));
         register_hs += (parseFloat(`${(aread ? 5 : 1) << (Math.min(umengV.length, 5))}`));
         umengV += `${1 | umengV.length}`;
         while ((nterstitialX + 4.2) >= 5.19 && !configP) {
            nterstitialX += (parseFloat(`${3 << (Math.min(5, Math.abs((sendG ? 2 : 4))))}`));
            break;
         }
         sendG = String.fromCharCode(84, 0) == imagemanager5 && nterstitialX > 69.98;
         for (let m = 0; m < 2; m++) {
            nterstitialX += (parseFloat(`${imagemanager5 == String.fromCharCode(85, 0) ? imagemanager5.length : parseInt(`${fileP}`)}`));
         }
         sellw /= Math.max((parseFloat(`${imagemanager5.length << (Math.min(5, Math.abs((configP ? 1 : 3))))}`)), 1);
         nterstitialX /= Math.max((parseFloat(`${(sendG ? 1 : 5) / (Math.max(2, (configP ? 5 : 5)))}`)), 3);
         while (4 > imagemanager5.length) {
            let tumbnail9: Array<any> = [143, 798];
            let collectionO: Map<any, any> = new Map([[String.fromCharCode(116, 111, 120, 121, 122, 95, 97, 95, 50, 57, 0), 679], [String.fromCharCode(100, 111, 119, 110, 103, 114, 97, 100, 101, 95, 100, 95, 55, 49, 0), 172], [String.fromCharCode(98, 95, 49, 51, 95, 109, 111, 110, 111, 0), 945]]);
            imagemanager5 = "1";
            tumbnail9.push(tumbnail9.length);
            collectionO.set(`${tumbnail9.length}`, tumbnail9.length);
            break;
         }
         let gradlewI = sendG ? !sendG : sendG;
         do {
            sendG = !sendG;
            if (gradlewI) {
               break;
            }
         } while ((!sendG) && gradlewI);
         while (!configP || (3.28 + nterstitialX) >= 2.77) {
            let textinputU = 1;
            let yingQ = false;
            let listB = false;
            let xvodm = String.fromCharCode(108, 95, 57, 49, 95, 114, 116, 99, 119, 101, 98, 0);
            let modeG = String.fromCharCode(112, 101, 114, 109, 117, 116, 101, 95, 109, 95, 52, 48, 0);
            configP = yingQ && listB;
            textinputU >>= Math.min(2, Math.abs((String.fromCharCode(90, 0) == modeG ? modeG.length : xvodm.length)));
            yingQ = (modeG.length - xvodm.length) < 55;
            listB = textinputU <= 90;
            break;
         }
         let savep = 0.0;
         configP = 46.8 < fileP;
         savep -= parseInt(`${savep}`) - parseInt(`${savep}`);
         let bottom3: Array<any> = [952, 42, 367];
         let mbridgev = String.fromCharCode(101, 120, 116, 114, 101, 109, 101, 95, 112, 95, 53, 53, 0);
         sellw += parseFloat(`${parseInt(`${sellw}`) << (Math.min(imagemanager5.length, 5))}`);
         bottom3 = [(mbridgev == String.fromCharCode(101, 0) ? mbridgev.length : bottom3.length)];
         while (!sendG) {
            let usert = 3;
            let liveg = 2.0;
            let constantsL = String.fromCharCode(108, 115, 102, 108, 115, 112, 95, 122, 95, 57, 0);
            sendG = (imagemanager5.length * usert) >= 17;
            usert ^= 3;
            liveg -= (String.fromCharCode(53, 0) == constantsL ? constantsL.length : parseInt(`${liveg}`));
            break;
         }
         let libflipper2: Array<any> = [617, 476, 873];
         let maili: Array<any> = [984, 667];
         libturbomodulejsijnim *= 1 / (Math.max(parseInt(`${kicka}`), 9));
      }
      let dragE = String.fromCharCode(112, 114, 101, 115, 101, 116, 115, 95, 111, 95, 54, 48, 0);
      let entryo: Map<any, any> = new Map([[String.fromCharCode(121, 95, 54, 56, 95, 112, 111, 112, 117, 108, 97, 116, 101, 0), String.fromCharCode(110, 97, 118, 105, 103, 97, 116, 105, 110, 103, 95, 107, 95, 51, 57, 0)], [String.fromCharCode(112, 116, 105, 111, 110, 115, 95, 119, 95, 50, 50, 0), String.fromCharCode(110, 111, 110, 110, 117, 108, 108, 115, 115, 114, 99, 115, 95, 97, 95, 57, 50, 0)]]);
      for (let q = 0; q < 2; q++) {
         entryo.set(dragE, dragE.length);
      }
      let nativemoduleX = String.fromCharCode(109, 95, 55, 54, 95, 112, 108, 117, 103, 103, 101, 100, 0);
      let gmaila: Array<any> = [764, 301, 178];
      entryo.set(dragE, dragE.length);
      nativemoduleX = "2";
      gmaila.push(gmaila.length);
      if ((entryo.size >> (Math.min(Math.abs(5), 1))) >= 5 && 3 >= (5 >> (Math.min(4, Math.abs(entryo.size))))) {
         dragE += `${dragE.length >> (Math.min(1, Math.abs(entryo.size)))}`;
      }
      entryo = new Map([[`${entryo.size}`, entryo.size / (Math.max(3, 5))]]);
      dragE += `${2 * entryo.size}`;
      while (2 <= (3 + entryo.size) || (dragE.length + 3) <= 3) {
         dragE = `${1 / (Math.max(3, dragE.length))}`;
         break;
      }
      latna &= 1 | libfolly2.length;
      setIosCustomToastIsVisible(true)
   }, 1000)

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
      let core4: Array<any> = [974, 134];
      let philippinesz = String.fromCharCode(105, 110, 105, 116, 105, 97, 108, 108, 121, 95, 97, 95, 53, 55, 0);
      let libswscalem = true;
      let settingsH: Array<any> = [305, 29];
      let zoomf = String.fromCharCode(108, 95, 55, 95, 112, 97, 110, 110, 105, 110, 103, 0);
      let belle = 2;
      let layoutc = true;
      let anythink1 = true;
      let shareS = String.fromCharCode(118, 116, 97, 115, 107, 113, 117, 101, 117, 101, 95, 116, 95, 50, 48, 0);
      let brightness0: Map<any, any> = new Map([[String.fromCharCode(114, 103, 98, 116, 111, 98, 103, 114, 95, 120, 95, 57, 54, 0), true], [String.fromCharCode(106, 95, 53, 57, 95, 118, 109, 97, 102, 0), true], [String.fromCharCode(112, 95, 52, 95, 101, 103, 114, 101, 115, 115, 0), true]]);
      philippinesz += `${2 ^ philippinesz.length}`;
      core4.push(((layoutc ? 5 : 5) ^ shareS.length));
      libswscalem = core4.length == 41;
      core4 = [3];
      belle |= (zoomf == String.fromCharCode(100, 0) ? zoomf.length : (layoutc ? 3 : 2));
      let zhengpiank = belle <= 7296220;
      do {
         let taill = 5;
         let sliderE = 0.0;
         if (2.40 < (sliderE / 5.32)) {
            taill ^= 3 * taill;
         }
         sliderE /= Math.max(3, parseInt(`${sliderE}`) / 1);
         let dycreatora: Map<any, any> = new Map([[String.fromCharCode(100, 111, 119, 110, 115, 99, 97, 108, 101, 95, 100, 95, 57, 52, 0), true], [String.fromCharCode(99, 97, 115, 104, 116, 97, 103, 95, 104, 95, 54, 57, 0), false]]);
         let libyogab: Map<any, any> = new Map([[String.fromCharCode(102, 95, 50, 50, 95, 115, 101, 115, 115, 111, 110, 0), 31], [String.fromCharCode(98, 111, 117, 110, 100, 101, 100, 95, 104, 95, 50, 55, 0), 392], [String.fromCharCode(114, 95, 56, 49, 95, 115, 116, 111, 114, 101, 0), 633]]);
         while (2.98 < (sliderE + 4.28) && (libyogab.size + sliderE) < 4.28) {
            libyogab.set(`${sliderE}`, libyogab.size);
            break;
         }
         dycreatora.set(`${taill}`, taill);
         let playercommonn: Array<any> = [233, 156];
         belle &= 1 + parseInt(`${sliderE}`);
         if (zhengpiank) {
            break;
         }
      } while (zhengpiank && (belle <= 2 && 2 <= (2 * belle)));

      const eps = episodes?.urls?.slice(
         showEpisodeRangeStart,
         showEpisodeRangeEnd
      );

      let modalI = true;
      let grayY = modalI ? !modalI : modalI;
      do {
         modalI = (modalI ? modalI : !modalI);
         if (grayY) {
            break;
         }
      } while (grayY && (!modalI && modalI));
      if (!modalI && modalI) {
         modalI = !modalI;
      }
      modalI = (!modalI ? !modalI : !modalI);
      layoutc = !anythink1;
      belle *= settingsH.length;
      philippinesz = `${((anythink1 ? 2 : 3) * 1)}`;
      brightness0.set(philippinesz, philippinesz.length);
      while (anythink1) {
         anythink1 = 62 > core4.length;
         break;
      }
      libswscalem = zoomf.length < 83 && !layoutc;

      return eps;
   }, [showEpisodeRangeStart, showEpisodeRangeEnd, episodes]);

   const handleContainerLayout = (e) => {
      let gesturesf = false;
      let detailsA = 5.0;
      let animationN = 5.0;
      let q_managerH = String.fromCharCode(115, 97, 109, 105, 95, 111, 95, 52, 50, 0);
      let rncorec = 3;
      let playE = 1.0;
      let drag3 = 4.0;
      let moonq = String.fromCharCode(118, 95, 52, 52, 95, 111, 114, 100, 101, 114, 0);
      let unreadq = 3.0;
      let collectionB = String.fromCharCode(108, 95, 50, 53, 95, 114, 101, 109, 117, 120, 0);
      for (let g = 0; g < 3; g++) {
         playE -= parseFloat(`${2}`);
      }
      let shirtp = drag3 <= 7298236.0;
      do {
         drag3 /= Math.max(parseFloat(`${parseInt(`${playE}`) | 1}`), 5);
         if (shirtp) {
            break;
         }
      } while (shirtp && (5.43 >= (animationN / (Math.max(drag3, 3)))));
      let verticalX = 0.0;
      let libcrashsdkN = 3.0;
      verticalX *= parseInt(`${verticalX}`) + 2;
      if ((5.63 * libcrashsdkN) == 4.2 && 5.63 == (verticalX * libcrashsdkN)) {
         verticalX -= parseInt(`${libcrashsdkN}`) ^ parseInt(`${verticalX}`);
      }
      while (5.76 < (verticalX / (Math.max(1, 3)))) {
         libcrashsdkN -= parseInt(`${verticalX}`);
         break;
      }
      let layoutM = 4.0;
      let gpayU: Map<any, any> = new Map([[String.fromCharCode(113, 95, 50, 48, 95, 112, 114, 111, 99, 97, 109, 112, 0), true], [String.fromCharCode(99, 95, 51, 54, 95, 102, 114, 101, 105, 114, 0), true]]);
      let eventk = false;
      verticalX /= Math.max(3, 3 | parseInt(`${libcrashsdkN}`));
      layoutM -= parseFloat(`${parseInt(`${layoutM}`)}`);
      gpayU = new Map([[`${gpayU.size}`, ((eventk ? 5 : 4) - gpayU.size)]]);
      eventk = null != gpayU.get(`${layoutM}`);
      libcrashsdkN -= parseInt(`${verticalX}`);
      libcrashsdkN -= parseInt(`${verticalX}`);
      animationN += parseFloat(`${1}`);
      let interstitialE = 2.0;
      let connectionx: Array<any> = [String.fromCharCode(115, 108, 111, 112, 101, 95, 105, 95, 55, 56, 0), String.fromCharCode(105, 110, 115, 116, 97, 108, 108, 97, 116, 105, 111, 110, 95, 119, 95, 57, 0)];
      let hejiZ = String.fromCharCode(121, 95, 51, 57, 95, 100, 114, 97, 119, 97, 98, 108, 101, 115, 0);
      let hiadw = String.fromCharCode(99, 111, 115, 105, 95, 106, 95, 53, 55, 0);
      let mbjscommon9 = String.fromCharCode(115, 99, 101, 110, 101, 95, 98, 95, 54, 50, 0);
      let package_yd = String.fromCharCode(111, 95, 55, 55, 95, 117, 110, 114, 101, 109, 111, 118, 97, 98, 108, 101, 0);
      let gray7 = String.fromCharCode(98, 111, 116, 116, 111, 109, 95, 104, 95, 54, 54, 0);
      while (package_yd != String.fromCharCode(55, 0)) {
         let rulesR = String.fromCharCode(106, 95, 49, 50, 95, 99, 111, 110, 115, 116, 114, 97, 105, 110, 101, 100, 0);
         let bnewinterstitiala: Array<any> = [525, 564];
         let greyJ = 1.0;
         let pageR = 3.0;
         gray7 = `${bnewinterstitiala.length - 3}`;
         rulesR = `${1 | parseInt(`${greyJ}`)}`;
         bnewinterstitiala = [2];
         greyJ /= Math.max(parseFloat(`${parseInt(`${pageR}`) / (Math.max(2, 6))}`), 5);
         pageR += (String.fromCharCode(65, 0) == rulesR ? rulesR.length : parseInt(`${greyJ}`));
         break;
      }
      while ((2 >> (Math.min(1, hiadw.length))) > 1) {
         let graphicsO: Array<any> = [894, 796];
         hiadw = `${parseInt(`${interstitialE}`) - connectionx.length}`;
         graphicsO = [graphicsO.length | graphicsO.length];
         break;
      }
      gray7 = `${2 | mbjscommon9.length}`;
      let templateprocessorC = String.fromCharCode(101, 118, 98, 117, 102, 102, 101, 114, 95, 49, 95, 50, 48, 0);
      let reminderZ: Map<any, any> = new Map([[String.fromCharCode(111, 95, 53, 48, 95, 99, 111, 109, 98, 105, 110, 101, 115, 0), 667], [String.fromCharCode(109, 101, 97, 115, 117, 114, 101, 109, 101, 110, 116, 115, 95, 99, 95, 50, 0), 424]]);
      mbjscommon9 = `${connectionx.length}`;
      templateprocessorC = `${reminderZ.size}`;
      reminderZ.set(`${templateprocessorC}`, (templateprocessorC == String.fromCharCode(66, 0) ? reminderZ.size : templateprocessorC.length));
      let ewardedX = gray7 == String.fromCharCode(54, 54, 103, 109, 97, 109, 113, 117, 108, 117, 0);
      do {
         gray7 += `${2 * parseInt(`${interstitialE}`)}`;
         if (ewardedX) {
            break;
         }
      } while ((gray7 != String.fromCharCode(109, 0) || hejiZ == String.fromCharCode(119, 0)) && ewardedX);
      let kickZ = false;
      interstitialE /= Math.max(parseFloat(`${3}`), 5);
      kickZ = !kickZ;
      let arrowf = String.fromCharCode(49, 118, 115, 103, 51, 95, 98, 49, 108, 103, 0) == hiadw;
      do {
         hiadw += `${package_yd.length * 2}`;
         if (arrowf) {
            break;
         }
      } while (arrowf && (!hiadw.startsWith(`${hejiZ.length}`)));
      detailsA *= parseFloat(`${1}`);
      if (detailsA < 3.88) {
         let scrollview0 = 1;
         let cricketc = String.fromCharCode(100, 101, 116, 101, 114, 109, 105, 110, 101, 95, 100, 95, 53, 0);
         let tail2 = String.fromCharCode(116, 101, 108, 101, 112, 104, 111, 116, 111, 95, 119, 95, 55, 49, 0);
         let anythinkF = true;
         let shoot1: Array<any> = [600, 931];
         let root_ = 1.0;
         let playercommonu = false;
         cricketc += `${scrollview0}`;
         shoot1.push(3 | parseInt(`${root_}`));
         root_ -= parseFloat(`${2}`);
         playercommonu = !playercommonu;
         cricketc += `${scrollview0}`;
         let pathq = 1.0;
         pathq *= (String.fromCharCode(102, 0) == tail2 ? parseInt(`${pathq}`) : tail2.length);
         if (pathq <= 4.60 && (4.60 / (Math.max(9, pathq))) <= 3.78) {
            let ajaxw: Array<any> = [212, 847, 359];
            let profileP = String.fromCharCode(97, 95, 49, 57, 95, 111, 112, 116, 105, 109, 105, 115, 116, 105, 99, 0);
            pathq /= Math.max(4, 2);
            ajaxw = [ajaxw.length];
            profileP += `${(profileP == String.fromCharCode(66, 0) ? profileP.length : ajaxw.length)}`;
         }
         tail2 += `${parseInt(`${pathq}`)}`;
         anythinkF = (scrollview0 | cricketc.length) <= 65;
         while (1 >= cricketc.length) {
            anythinkF = String.fromCharCode(71, 0) == tail2 || 8 < scrollview0;
            break;
         }
         detailsA /= Math.max(parseFloat(`${tail2.length ^ scrollview0}`), 4);
      }
      if ((parseFloat(`${q_managerH.length}`) - animationN) < 5.34 || 5.34 < (parseFloat(`${q_managerH.length}`) - animationN)) {
         let detailsB = true;
         let manifestM = false;
         let frame_c0n = String.fromCharCode(106, 95, 55, 50, 95, 117, 118, 108, 99, 0);
         detailsB = frame_c0n.length < 62 || manifestM;
         let backwardF = String.fromCharCode(113, 98, 56, 54, 116, 105, 114, 120, 54, 101, 0) == frame_c0n;
         do {
            frame_c0n += `${((manifestM ? 1 : 4) * 1)}`;
            if (backwardF) {
               break;
            }
         } while (backwardF && (!frame_c0n.includes(`${detailsB}`)));
         let layout_ = false;
         let f_managerp = true;
         for (let n = 0; n < 2; n++) {
            layout_ = !layout_ && !f_managerp;
         }
         while (detailsB) {
            detailsB = f_managerp;
            break;
         }
         for (let b = 0; b < 2; b++) {
            let schedule5 = String.fromCharCode(108, 95, 50, 52, 95, 115, 117, 98, 115, 101, 113, 117, 101, 110, 99, 101, 0);
            frame_c0n = `${((detailsB ? 5 : 2) / (Math.max(6, (layout_ ? 2 : 2))))}`;
            schedule5 += `${(String.fromCharCode(71, 0) == schedule5 ? schedule5.length : schedule5.length)}`;
         }
         manifestM = !layout_;
         layout_ = frame_c0n.length == 12 && manifestM;
         for (let a = 0; a < 1; a++) {
            frame_c0n += `${((detailsB ? 5 : 4))}`;
         }
         q_managerH += `${parseInt(`${detailsA}`) - 2}`;
      }
      for (let s = 0; s < 3; s++) {
         gesturesf = detailsA <= 79.22;
      }

      const epHeight = e.nativeEvent.layout.height;

      let reminderY = playE <= 6911729.0;
      do {
         playE += (parseFloat(`${(gesturesf ? 5 : 5) ^ parseInt(`${animationN}`)}`));
         if (reminderY) {
            break;
         }
      } while (((playE - 3.14) <= 3.22 && (rncorec - parseInt(`${playE}`)) <= 5) && reminderY);
      animationN += (parseFloat(`${String.fromCharCode(50, 0) == moonq ? moonq.length : rncorec}`));
      playE -= (parseFloat(`${String.fromCharCode(99, 0) == q_managerH ? parseInt(`${playE}`) : q_managerH.length}`));
      let singleG = 3.0;
      let stringe = String.fromCharCode(97, 110, 99, 105, 108, 108, 97, 114, 121, 95, 112, 95, 49, 49, 0);
      let style2 = String.fromCharCode(109, 98, 115, 101, 103, 109, 101, 110, 116, 95, 109, 95, 57, 51, 0);
      let xadsdkR = stringe == String.fromCharCode(48, 112, 105, 111, 112, 112, 95, 117, 107, 120, 0);
      do {
         stringe = `${stringe.length}`;
         if (xadsdkR) {
            break;
         }
      } while (xadsdkR && (stringe.startsWith(style2)));
      style2 += `${(style2 == String.fromCharCode(107, 0) ? parseInt(`${singleG}`) : style2.length)}`;
      animationN *= parseFloat(`${2}`);
      playE -= parseFloat(`${3 & q_managerH.length}`);
      drag3 += parseFloat(`${rncorec}`);
      let splashr = String.fromCharCode(112, 97, 115, 115, 95, 117, 95, 52, 51, 0);
      let sheeta = 3.0;
      let changeV = String.fromCharCode(114, 101, 115, 99, 97, 108, 101, 95, 49, 95, 54, 48, 0);
      splashr = `${parseInt(`${sheeta}`)}`;
      sheeta /= Math.max(2, changeV.length);
      changeV += `${changeV.length ^ changeV.length}`;
      splashr += `${splashr.length}`;
      splashr = `${(splashr == String.fromCharCode(97, 0) ? splashr.length : splashr.length)}`;
      detailsA *= parseFloat(`${3 % (Math.max(parseInt(`${detailsA}`), 7))}`);
      const epWidth = e.nativeEvent.layout.width;

      detailsA *= parseFloat(`${parseInt(`${drag3}`)}`);
      while ((animationN + 4.77) >= 4.35) {
         let trashz = 1.0;
         let umengs = String.fromCharCode(121, 95, 57, 52, 95, 115, 115, 114, 99, 115, 0);
         trashz += 3 << (Math.min(5, Math.abs(parseInt(`${trashz}`))));
         let notificationQ = 3;
         trashz *= (umengs == String.fromCharCode(89, 0) ? notificationQ : umengs.length);
         while (umengs.length <= 2) {
            trashz -= umengs.length;
            break;
         }
         umengs = `${umengs.length * parseInt(`${trashz}`)}`;
         let libffmpegkitV: Array<any> = [42, 471];
         let floaterw: Array<any> = [255, 843];
         let tail1 = String.fromCharCode(110, 95, 57, 54, 95, 97, 114, 114, 97, 121, 115, 0);
         umengs += `${tail1.length}`;
         animationN /= Math.max(1, parseFloat(`${1 % (Math.max(3, parseInt(`${animationN}`)))}`));
         break;
      }
      detailsA += parseFloat(`${2 % (Math.max(parseInt(`${playE}`), 6))}`);
      for (let v = 0; v < 2; v++) {
         let libglogd = 2;
         let floatingj = 5.0;
         let next9 = String.fromCharCode(110, 95, 52, 51, 95, 100, 105, 115, 99, 111, 118, 101, 114, 101, 100, 0);
         let castingi: Map<any, any> = new Map([[String.fromCharCode(101, 95, 55, 55, 95, 98, 121, 116, 101, 105, 110, 0), 305], [String.fromCharCode(118, 95, 51, 56, 95, 119, 114, 105, 116, 97, 98, 108, 101, 0), 667], [String.fromCharCode(102, 95, 55, 48, 95, 116, 101, 115, 116, 98, 105, 116, 0), 16]]);
         let borderlesss = 5.0;
         let videocommon1 = false;
         let gestureN = false;
         while ((castingi.size / 3) < 4 && videocommon1) {
            castingi.set(`${libglogd}`, 2);
            break;
         }
         borderlesss += parseFloat(`${castingi.size}`);
         castingi.set(`${gestureN}`, 1);
         let pathv = 4;
         castingi = new Map([[`${borderlesss}`, (parseInt(`${borderlesss}`) & (gestureN ? 1 : 1))]]);
         pathv /= Math.max(3, pathv << (Math.min(Math.abs(1), 4)));
         let uinit_o5i = 0.0;
         let libturbomodulejsijniO = 0.0;
         gestureN = gestureN || !videocommon1;
         uinit_o5i *= parseFloat(`${parseInt(`${libturbomodulejsijniO}`)}`);
         videocommon1 = (floatingj + libglogd) > 64;
         let configurei = videocommon1 ? !videocommon1 : videocommon1;
         do {
            let qcopy_zU = String.fromCharCode(108, 105, 109, 105, 116, 97, 116, 105, 111, 110, 95, 108, 95, 49, 48, 0);
            let mail8: Array<any> = [560, 417];
            videocommon1 = !videocommon1;
            qcopy_zU = `${qcopy_zU.length / 3}`;
            mail8.push(mail8.length);
            if (configurei) {
               break;
            }
         } while ((!videocommon1 && 3 < next9.length) && configurei);
         for (let x = 0; x < 2; x++) {
            let private_bj: Map<any, any> = new Map([[String.fromCharCode(103, 95, 52, 56, 95, 97, 109, 111, 117, 110, 116, 115, 0), 604], [String.fromCharCode(108, 111, 111, 107, 97, 115, 105, 100, 101, 95, 54, 95, 54, 48, 0), 486], [String.fromCharCode(108, 95, 50, 53, 95, 115, 104, 114, 117, 110, 107, 0), 190]]);
            let completeO = false;
            let pathD = String.fromCharCode(118, 95, 57, 51, 95, 105, 110, 116, 101, 114, 112, 111, 108, 0);
            let relatedz = String.fromCharCode(100, 102, 108, 97, 95, 103, 95, 53, 54, 0);
            let floaterW = true;
            floatingj *= libglogd;
            private_bj = new Map([[relatedz, ((floaterW ? 1 : 3) >> (Math.min(Math.abs(3), 2)))]]);
            completeO = 6 >= private_bj.size;
            pathD = `${((floaterW ? 5 : 4) * (completeO ? 1 : 4))}`;
            relatedz = `${pathD.length / (Math.max(8, relatedz.length))}`;
         }
         while (!Array.from(castingi.keys()).includes(`${borderlesss}`)) {
            borderlesss -= parseFloat(`${parseInt(`${borderlesss}`)}`);
            break;
         }
         for (let b = 0; b < 1; b++) {
            castingi.set(`${borderlesss}`, castingi.size);
         }
         let relatedT = String.fromCharCode(109, 98, 112, 97, 105, 114, 95, 49, 95, 53, 49, 0);
         let schedulez = true;
         for (let x = 0; x < 3; x++) {
            let downloadH = String.fromCharCode(99, 95, 57, 48, 95, 102, 105, 110, 100, 0);
            let sorto = false;
            let target6 = false;
            let subsi = 4.0;
            relatedT += `${parseInt(`${floatingj}`) / (Math.max(next9.length, 6))}`;
            downloadH += `${((sorto ? 5 : 5) & parseInt(`${subsi}`))}`;
            sorto = downloadH.length <= 95 || sorto;
            target6 = !sorto;
            subsi -= (parseFloat(`${(target6 ? 4 : 5) & parseInt(`${subsi}`)}`));
         }
         schedulez = gestureN;
         q_managerH += `${collectionB.length}`;
      }
      animationN *= parseFloat(`${moonq.length - rncorec}`);
      let team7 = String.fromCharCode(112, 109, 103, 120, 103, 55, 111, 99, 0) == q_managerH;
      do {
         let scoreX = String.fromCharCode(98, 95, 57, 50, 95, 97, 112, 112, 101, 110, 100, 97, 98, 108, 101, 0);
         let hongkongq = String.fromCharCode(115, 116, 101, 114, 101, 111, 95, 103, 95, 54, 49, 0);
         let rightG: Array<any> = [90, 417, 589];
         if (5 > hongkongq.length) {
            let window_rm: Map<any, any> = new Map([[String.fromCharCode(106, 95, 55, 55, 95, 115, 116, 114, 105, 100, 101, 97, 98, 108, 101, 0), 821], [String.fromCharCode(106, 95, 54, 49, 95, 115, 105, 103, 105, 100, 0), 995]]);
            let temp1 = 0.0;
            rightG.push(window_rm.size);
            window_rm = new Map([[`${temp1}`, 3 / (Math.max(3, parseInt(`${temp1}`)))]]);
         }
         let mutedS: Array<any> = [529, 951];
         hongkongq += `${hongkongq.length}`;
         mutedS = [mutedS.length >> (Math.min(2, mutedS.length))];
         while (3 < (rightG.length + 4) || 4 < (rightG.length + scoreX.length)) {
            scoreX = `${rightG.length & hongkongq.length}`;
            break;
         }
         while (5 <= hongkongq.length) {
            let trophyT = String.fromCharCode(110, 100, 101, 102, 95, 56, 95, 50, 52, 0);
            let dark9 = String.fromCharCode(105, 100, 101, 110, 116, 105, 116, 105, 121, 95, 52, 95, 51, 54, 0);
            let typesk = 2.0;
            let referrere = 3.0;
            let classesM = true;
            scoreX += `${parseInt(`${referrere}`) - 3}`;
            trophyT = `${(parseInt(`${typesk}`) - (classesM ? 4 : 5))}`;
            dark9 = "1";
            typesk -= parseFloat(`${parseInt(`${typesk}`) & 1}`);
            referrere += ((classesM ? 3 : 3) / (Math.max(trophyT.length, 6)));
            break;
         }
         let malaysia4 = hongkongq == String.fromCharCode(52, 104, 114, 95, 109, 119, 50, 0);
         do {
            let frame_i0 = false;
            let awayq = String.fromCharCode(109, 111, 110, 111, 116, 111, 110, 121, 95, 104, 95, 52, 52, 0);
            hongkongq = `${awayq.length << (Math.min(Math.abs(1), 5))}`;
            if (malaysia4) {
               break;
            }
         } while ((!hongkongq.startsWith(`${rightG.length}`)) && malaysia4);
         let bottomq = true;
         let modelc = true;
         for (let z = 0; z < 3; z++) {
            let libglogG: Map<any, any> = new Map([[String.fromCharCode(108, 95, 55, 55, 95, 98, 97, 100, 103, 101, 115, 0), 349], [String.fromCharCode(110, 117, 109, 101, 114, 105, 99, 97, 108, 95, 56, 95, 56, 50, 0), 822], [String.fromCharCode(117, 95, 52, 55, 95, 115, 108, 111, 116, 115, 0), 512]]);
            rightG.push((String.fromCharCode(69, 0) == hongkongq ? rightG.length : hongkongq.length));
            libglogG = new Map([[`${libglogG.size}`, 3]]);
         }
         let type_4mU = String.fromCharCode(100, 95, 49, 48, 95, 116, 119, 105, 116, 99, 104, 0);
         let liveg: Map<any, any> = new Map([[String.fromCharCode(99, 95, 55, 53, 95, 101, 118, 101, 114, 121, 98, 111, 100, 121, 0), 897], [String.fromCharCode(106, 95, 51, 53, 95, 108, 105, 98, 97, 118, 100, 101, 118, 105, 99, 101, 0), 256], [String.fromCharCode(118, 95, 57, 53, 95, 99, 111, 111, 114, 100, 105, 110, 97, 116, 111, 114, 0), 371]]);
         bottomq = (type_4mU.length << (Math.min(5, hongkongq.length))) >= 82;
         type_4mU = `${liveg.size}`;
         liveg.set(`${liveg.size}`, 2 ^ liveg.size);
         let analyticsd: Array<any> = [980, 12, 304];
         let rewindt: Array<any> = [541, 581, 366];
         q_managerH += `${q_managerH.length % 3}`;
         if (team7) {
            break;
         }
      } while ((q_managerH.length >= rncorec) && team7);
      for (let g = 0; g < 3; g++) {
         detailsA -= parseFloat(`${parseInt(`${unreadq}`) & q_managerH.length}`);
      }
      setHeight(epHeight);

      playE /= Math.max(parseFloat(`${parseInt(`${playE}`) + rncorec}`), 4);
      let bdxadsdkg = 8852482.0 <= animationN;
      do {
         animationN *= parseFloat(`${2 ^ q_managerH.length}`);
         if (bdxadsdkg) {
            break;
         }
      } while (bdxadsdkg && (!q_managerH.endsWith(`${animationN}`)));
      let teamn = 3;
      for (let m = 0; m < 3; m++) {
         teamn &= 3 >> (Math.min(2, Math.abs(teamn)));
      }
      if (4 <= (teamn ^ 1) || 2 <= (teamn ^ 1)) {
         teamn <<= Math.min(Math.abs(2 >> (Math.min(1, Math.abs(teamn)))), 3);
      }
      while (4 >= (3 - teamn) && (3 - teamn) >= 3) {
         let umengW = 3.0;
         let ecopy_i5: Map<any, any> = new Map([[String.fromCharCode(112, 114, 111, 98, 97, 98, 105, 108, 105, 116, 105, 101, 115, 95, 109, 95, 51, 53, 0), 948], [String.fromCharCode(100, 105, 115, 112, 108, 97, 121, 101, 100, 95, 116, 95, 50, 0), 193], [String.fromCharCode(103, 95, 53, 48, 95, 112, 117, 110, 99, 116, 117, 97, 116, 105, 111, 110, 0), 376]]);
         let topicj: Map<any, any> = new Map([[String.fromCharCode(115, 95, 55, 56, 95, 99, 111, 100, 101, 99, 99, 116, 108, 0), String.fromCharCode(98, 95, 52, 53, 95, 97, 118, 100, 101, 118, 105, 99, 101, 0)], [String.fromCharCode(100, 111, 119, 110, 119, 97, 114, 100, 95, 99, 95, 56, 51, 0), String.fromCharCode(103, 95, 52, 51, 95, 121, 97, 108, 101, 0)], [String.fromCharCode(111, 95, 50, 49, 95, 114, 101, 115, 99, 104, 101, 100, 117, 108, 101, 0), String.fromCharCode(118, 95, 54, 54, 95, 98, 97, 115, 105, 99, 97, 108, 108, 121, 0)]]);
         teamn -= teamn;
         umengW += topicj.size;
         ecopy_i5 = new Map([[`${ecopy_i5.size}`, topicj.size]]);
         break;
      }
      gesturesf = unreadq < animationN;
      for (let w = 0; w < 2; w++) {
         moonq = `${parseInt(`${playE}`)}`;
      }
      animationN /= Math.max((parseFloat(`${parseInt(`${playE}`) << (Math.min(3, Math.abs((gesturesf ? 1 : 1))))}`)), 3);
      for (let d = 0; d < 2; d++) {
         playE -= parseFloat(`${moonq.length | parseInt(`${drag3}`)}`);
      }
      while (1.81 > (detailsA * 5.88) && detailsA > 5.88) {
         let libjsijniprofilerk = String.fromCharCode(121, 95, 57, 53, 95, 119, 97, 114, 110, 105, 110, 103, 115, 0);
         let downloadedP = String.fromCharCode(111, 95, 57, 57, 95, 100, 117, 112, 115, 111, 114, 116, 0);
         let dice0 = String.fromCharCode(97, 108, 108, 111, 119, 105, 95, 98, 95, 55, 56, 0);
         let readR = 2.0;
         let related1 = String.fromCharCode(118, 95, 57, 48, 95, 98, 97, 99, 107, 111, 102, 102, 0);
         let configO: Map<any, any> = new Map([[String.fromCharCode(115, 99, 99, 111, 110, 102, 105, 103, 95, 115, 95, 49, 48, 0), 824], [String.fromCharCode(113, 95, 49, 48, 48, 95, 115, 112, 101, 99, 0), 475]]);
         related1 += `${(libjsijniprofilerk == String.fromCharCode(98, 0) ? parseInt(`${readR}`) : libjsijniprofilerk.length)}`;
         for (let x = 0; x < 2; x++) {
            let libreactj = true;
            let rewardv: Array<any> = [899, 960];
            downloadedP += `${(rewardv.length ^ (libreactj ? 4 : 1))}`;
         }
         for (let k = 0; k < 2; k++) {
            downloadedP += `${3 - configO.size}`;
         }
         for (let t = 0; t < 1; t++) {
            configO.set(downloadedP, downloadedP.length);
         }
         let agreementn: Array<any> = [String.fromCharCode(98, 95, 55, 56, 95, 102, 101, 111, 102, 0), String.fromCharCode(112, 95, 55, 52, 95, 101, 109, 105, 116, 0)];
         let thailand3: Array<any> = [481, 8];
         let helperJ = 0;
         let humidityJ = 3;
         thailand3.push(1 * helperJ);
         helperJ /= Math.max(1, 5);
         humidityJ /= Math.max(humidityJ & 2, 2);
         for (let h = 0; h < 3; h++) {
            readR -= parseFloat(`${3}`);
         }
         let sentryC = 2;
         while ((dice0.length >> (Math.min(Math.abs(5), 1))) > 4 || 5 > (dice0.length >> (Math.min(4, agreementn.length)))) {
            dice0 += `${downloadedP.length}`;
            break;
         }
         configO.set(libjsijniprofilerk, parseInt(`${readR}`) * libjsijniprofilerk.length);
         detailsA += parseFloat(`${collectionB.length & 1}`);
         break;
      }
      setWidth(epWidth);
   }

   const displayEpisodesWithStatus = useMemo(() => {
      let umengK = String.fromCharCode(97, 95, 49, 48, 95, 101, 113, 117, 105, 118, 97, 108, 101, 110, 116, 0);
      let basketballb: Array<any> = [860, 912, 796];
      let temperatureP: Array<any> = [String.fromCharCode(116, 95, 52, 55, 95, 98, 101, 110, 99, 104, 115, 0), String.fromCharCode(100, 97, 116, 97, 95, 98, 95, 49, 55, 0)];
      let zhuboM: Array<any> = [999, 515, 975];
      let customV = 5.0;
      let philippinesn = String.fromCharCode(107, 95, 56, 52, 95, 100, 111, 119, 110, 108, 111, 97, 100, 0);
      let greyn = 3.0;
      let libswscalez = String.fromCharCode(114, 111, 103, 114, 97, 109, 95, 101, 95, 56, 0);
      let bottom5 = 0.0;
      let mbnativeadvancedS = String.fromCharCode(100, 95, 54, 53, 95, 99, 111, 108, 108, 105, 100, 101, 114, 0);
      let leagueu = 2.0;
      let clockT = 2;
      greyn /= Math.max(parseFloat(`${3}`), 3);
      let lefth = customV >= 9522582.0;
      do {
         let mergerM: Array<any> = [912, 938];
         let loadingq = String.fromCharCode(99, 95, 57, 56, 95, 103, 111, 116, 111, 0);
         let mathK = String.fromCharCode(102, 112, 101, 108, 95, 55, 95, 50, 50, 0);
         let store3 = String.fromCharCode(107, 95, 54, 48, 95, 105, 110, 108, 101, 110, 0);
         let currentv = 4.0;
         mathK = `${2 & mathK.length}`;
         let bodant = String.fromCharCode(113, 95, 49, 50, 95, 115, 112, 101, 99, 105, 102, 105, 101, 100, 0);
         let streaming3 = String.fromCharCode(114, 95, 52, 52, 95, 97, 118, 105, 103, 97, 116, 105, 111, 110, 0);
         let confirmationb: Array<any> = [794, 153];
         let clockk: Array<any> = [732, 474];
         for (let c = 0; c < 2; c++) {
            streaming3 += `${loadingq.length}`;
         }
         let configureF: Map<any, any> = new Map([[String.fromCharCode(112, 95, 53, 57, 95, 111, 98, 109, 99, 0), true], [String.fromCharCode(121, 95, 57, 54, 95, 100, 111, 117, 98, 108, 101, 105, 110, 116, 115, 116, 114, 0), true], [String.fromCharCode(100, 101, 97, 99, 116, 95, 55, 95, 55, 55, 0), true]]);
         currentv += (String.fromCharCode(67, 0) == store3 ? parseInt(`${currentv}`) : store3.length);
         for (let z = 0; z < 1; z++) {
            loadingq += `${(store3 == String.fromCharCode(105, 0) ? store3.length : parseInt(`${currentv}`))}`;
         }
         for (let r = 0; r < 2; r++) {
            loadingq += `${mergerM.length ^ confirmationb.length}`;
         }
         bodant += `${mathK.length}`;
         let securityU = 9616783 >= bodant.length;
         do {
            bodant += `${bodant.length ^ 2}`;
            if (securityU) {
               break;
            }
         } while (((bodant.length / 3) > 3 && (mergerM.length / 3) > 1) && securityU);
         streaming3 += `${mathK.length * clockk.length}`;
         let unselectedU = String.fromCharCode(97, 118, 99, 111, 100, 101, 99, 114, 101, 115, 95, 119, 95, 54, 52, 0);
         let graphK = String.fromCharCode(95, 114, 113, 51, 110, 113, 103, 107, 0) == mathK;
         do {
            mathK += `${(streaming3 == String.fromCharCode(111, 0) ? clockk.length : streaming3.length)}`;
            if (graphK) {
               break;
            }
         } while ((3.56 == currentv) && graphK);
         if ((1 - store3.length) >= 2) {
            store3 = `${mathK.length >> (Math.min(Math.abs(3), 1))}`;
         }
         let crossd: Map<any, any> = new Map([[String.fromCharCode(98, 95, 54, 54, 0), 974], [String.fromCharCode(109, 101, 109, 100, 117, 112, 95, 49, 95, 52, 57, 0), 231]]);
         let templateprocessorL = String.fromCharCode(101, 120, 112, 105, 114, 97, 116, 105, 111, 110, 95, 111, 95, 55, 56, 0);
         mergerM.push(1);
         crossd.set(`${templateprocessorL}`, 3);
         templateprocessorL = `${(String.fromCharCode(65, 0) == templateprocessorL ? crossd.size : templateprocessorL.length)}`;
         customV *= parseInt(`${leagueu}`);
         if (lefth) {
            break;
         }
      } while ((customV < libswscalez.length) && lefth);

      const vodInfo = downloadVideoReducer.downloads.find(
         (download) => download.vod.vod_id === vodId
      );

      if ((customV / 3.24) >= 3.10) {
         libswscalez = `${3 * basketballb.length}`;
      }
      while (3 <= basketballb.length) {
         leagueu *= 3;
         break;
      }

      if (!vodInfo) {

         if (parseInt(`${leagueu}`) >= libswscalez.length) {
            let activityF = false;
            let dangerd = 3.0;
            if (!activityF) {
               let downloadJ = String.fromCharCode(116, 112, 101, 108, 95, 48, 95, 51, 56, 0);
               let injuryD = false;
               let modaln = 0;
               let castn = false;
               let xadsdkB = String.fromCharCode(103, 97, 109, 117, 116, 95, 107, 95, 49, 57, 0);
               activityF = downloadJ.endsWith(`${dangerd}`);
               downloadJ += `${(String.fromCharCode(103, 0) == xadsdkB ? (castn ? 1 : 5) : xadsdkB.length)}`;
               injuryD = castn;
               modaln += modaln;
            }
            let castingN = 1.0;
            let playercommong = 2.0;
            dangerd += parseFloat(`${parseInt(`${playercommong}`)}`);
            let iconZ = String.fromCharCode(97, 110, 115, 119, 101, 114, 95, 98, 95, 53, 55, 0);
            let injuryb = String.fromCharCode(112, 95, 55, 50, 95, 116, 98, 109, 108, 0);
            let mbbannern = 5.0;
            activityF = 48.33 == castingN;
            iconZ = `${injuryb.length / (Math.max(4, parseInt(`${mbbannern}`)))}`;
            injuryb += `${injuryb.length}`;
            mbbannern -= parseFloat(`${parseInt(`${mbbannern}`)}`);
            castingN *= 1;
            let historys = activityF ? !activityF : activityF;
            do {
               activityF = 1.70 >= playercommong || 1.70 >= dangerd;
               if (historys) {
                  break;
               }
            } while (historys && (5.87 <= dangerd));
            libswscalez = `${3 >> (Math.min(4, temperatureP.length))}`;
         }
         let default_mp = String.fromCharCode(114, 52, 52, 122, 104, 54, 98, 97, 0) == libswscalez;
         do {
            libswscalez = `${zhuboM.length}`;
            if (default_mp) {
               break;
            }
         } while ((mbnativeadvancedS == libswscalez) && default_mp);
         return displayEpisodes as yys_Step[]
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

            while ((1 >> (Math.min(2, libswscalez.length))) >= 5 || 3.36 >= (leagueu / (Math.max(1.85, 2)))) {
               leagueu += clockT;
               break;
            }
            zhuboM.push(umengK.length);
            const isDownloading = episodeInfo.status === MARTextinputBackground.MARRewardvideoBell;

            let referrero = 5.0;
            let sportb = false;
            sportb = sportb || referrero <= 9.56;
            let downloadedc = referrero <= 9184662.0;
            do {
               let overl = String.fromCharCode(111, 95, 49, 51, 95, 112, 115, 110, 114, 104, 118, 115, 0);
               let ballh = 4;
               let expandw = 2.0;
               referrero *= parseFloat(`${2}`);
               overl = `${3 ^ parseInt(`${expandw}`)}`;
               ballh ^= overl.length;
               expandw *= ballh;
               if (downloadedc) {
                  break;
               }
            } while ((!sportb) && downloadedc);
            if ((referrero * 4.33) >= 5.96 && !sportb) {
               let plashN: Map<any, any> = new Map([[String.fromCharCode(115, 101, 97, 116, 95, 104, 95, 55, 49, 0), 193], [String.fromCharCode(112, 95, 50, 52, 0), 379]]);
               let eighteent = 4.0;
               let reducerP = String.fromCharCode(108, 95, 56, 49, 95, 114, 101, 99, 111, 110, 115, 116, 114, 117, 99, 116, 105, 111, 110, 0);
               let hejiM: Map<any, any> = new Map([[String.fromCharCode(105, 95, 50, 48, 95, 97, 97, 99, 115, 98, 114, 100, 97, 116, 97, 0), 66], [String.fromCharCode(107, 95, 51, 48, 95, 99, 111, 111, 114, 100, 105, 110, 97, 116, 101, 115, 0), 800], [String.fromCharCode(97, 115, 100, 107, 95, 113, 95, 50, 52, 0), 30]]);
               let libswresamplea = 3.0;
               sportb = !sportb;
               plashN = new Map([[`${hejiM.size}`, hejiM.size | 2]]);
               eighteent -= parseFloat(`${3}`);
               reducerP += `${parseInt(`${eighteent}`)}`;
               libswresamplea *= parseFloat(`${reducerP.length}`);
            }
            let colorsz = referrero >= 7098126.0;
            do {
               referrero *= parseFloat(`${parseInt(`${referrero}`) ^ 3}`);
               if (colorsz) {
                  break;
               }
            } while ((!sportb) && colorsz);
            let dycreatorQ: Array<any> = [String.fromCharCode(109, 95, 53, 48, 95, 116, 114, 97, 110, 115, 112, 111, 115, 101, 120, 0), String.fromCharCode(110, 95, 57, 49, 95, 109, 97, 116, 105, 99, 0), String.fromCharCode(119, 95, 54, 53, 95, 118, 112, 109, 99, 0)];
            let catagoryF = 5.0;
            let trashn = String.fromCharCode(97, 112, 112, 101, 97, 114, 101, 100, 95, 110, 95, 49, 55, 0);
            referrero /= Math.max(parseFloat(`${parseInt(`${catagoryF}`)}`), 3);
            dycreatorQ.push(dycreatorQ.length);
            catagoryF -= trashn.length;
            trashn = `${trashn.length}`;
            if (5.5 < (5.43 - referrero) || !sportb) {
               referrero /= Math.max(4, parseFloat(`${2 << (Math.min(Math.abs(parseInt(`${referrero}`)), 3))}`));
            }
            clockT -= (mbnativeadvancedS == String.fromCharCode(67, 0) ? mbnativeadvancedS.length : parseInt(`${greyn}`));
            customV += umengK.length;
            const isDownloaded = episodeInfo.status === MARTextinputBackground.MARLibjsi;

            libswscalez += `${clockT}`;
            let submitg = false;
            let crownA = 1;
            submitg = submitg || crownA < 16;
            let modalo = 1.0;
            submitg = 52.57 < modalo || submitg;
            submitg = crownA < 68 || !submitg;
            let orientationW = 4.0;
            submitg = 38 >= crownA && !submitg;
            orientationW *= parseFloat(`${parseInt(`${orientationW}`)}`);
            let viewsx = false;
            let n_center2 = true;
            while (!submitg || !n_center2) {
               submitg = crownA > 41;
               break;
            }
            mbnativeadvancedS += `${philippinesn.length}`;

            return {
               ...ep,
               isDownloading: !!isDownloading,
               isDownloaded: !!isDownloaded,
               progress: episodeInfo.progress,
            } as yys_Step;
         }

         return {
            ...ep,
            isDownloading: false,
            isDownloaded: false,
            progress: { percentage: 0, bytes: 0 }
         } as yys_Step;
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
                                 else yys_StatsForm.showToast('最多同时下载10个视频，请稍后继续')
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
