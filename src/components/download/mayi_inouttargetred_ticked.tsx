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
import { mayi_Const, mayi_CastingArea } from "@type/mayi_green";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import DownloadIcon from '@static/images/greenBlacklistSave.svg'
import DlIcon from "@static/images/popupBasketball.svg";
import VipIcon from "@static/images/episodeModuleEmbed.svg"
import FinishIcon from "@static/images/appleHalffieldimageTeamdetailsbg.svg";
import { CUASheetIconarrowright, mayi_Prediction } from "@type/mayi_agreement";
import { useAppSelector } from "@hooks/mayi_redirect";
import { mayi_Libapminsightb } from "@redux/mayi_live_tumbnail";
import DeviceInfo from "react-native-device-info";
import { Provider, Toast } from "@ant-design/react-native";
import { debounce, throttle } from "lodash";
import { mayi_Attributedstring } from "@utility/mayi_source";
import { DOWNLOAD_FEATURE_MAX_QUEUE } from "@utility/mayi_middleware_apps";

const throttledToast = debounce((msg: string) => {
  mayi_Attributedstring.showToast(msg)
}, 1000)


interface mayi_GoogleViews {
  vodId?: number;
  isVip: boolean;
  source?: number;
  screen: string;
  episodes?: mayi_Const;
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
}: mayi_GoogleViews) {
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
  const downloadVideoReducer: mayi_Prediction = useAppSelector(
    ({ downloadVideoReducer }: mayi_Libapminsightb) => downloadVideoReducer
  );
  const [iosCustomToastIsVisible, setIosCustomToastIsVisible] = useState(false)
  const [iosCustomToastText, setIosCustomToastText] = useState("已加入下载队列，请查看‘我的下载’")

  const debouncedSetIosCustomToastIsVisibleTrue = debounce(() => {
       let mapbufferM = String.fromCharCode(109,101,110,116,105,111,110,115,0);
    let fastG = String.fromCharCode(102,114,101,113,115,0);
    let arrowrightwithtaild = String.fromCharCode(105,110,115,117,102,102,105,99,105,101,110,116,0);
    let turnu = String.fromCharCode(115,105,109,105,108,97,114,0);
    let footballtrophy1 = String.fromCharCode(97,108,97,119,0);
    let fullscreenmaxZ: Array<any> = [564, 634, 204];
    let telegramX: Array<any> = [764, 290, 170];
    let diceL = 3;
    let bootsplashz = String.fromCharCode(114,97,116,105,111,0);
    let previewH: Array<any> = [505, 696, 810];
      fullscreenmaxZ.push((footballtrophy1 == String.fromCharCode(119,0) ? footballtrophy1.length : fullscreenmaxZ.length));
   for (let n = 0; n < 1; n++) {
      telegramX = [fastG.length << (Math.min(5, turnu.length))];
   }
   let iconcloset = turnu == String.fromCharCode(110,48,110,117,113,49,56,0);
   do {
       let abidetect9 = String.fromCharCode(112,114,111,0);
       let imagesL: Array<any> = [463, 684];
      for (let x = 0; x < 1; x++) {
         imagesL.push(imagesL.length << (Math.min(abidetect9.length, 3)));
      }
         abidetect9 += `${2 | abidetect9.length}`;
      turnu = `${telegramX.length * 2}`;
      if (iconcloset) {
         break;
      }
   } while (iconcloset && (!fastG.includes(`${turnu.length}`)));
   let adult2 = mapbufferM.length >= 5620767;
   do {
      mapbufferM = `${1 - turnu.length}`;
      if (adult2) {
         break;
      }
   } while ((2 == (fullscreenmaxZ.length % 2)) && adult2);
      mapbufferM += `${3 + fastG.length}`;
   while (turnu != String.fromCharCode(55,0)) {
      footballtrophy1 = `${1 & turnu.length}`;
      break;
   }
   let eighteen2 = String.fromCharCode(112,53,49,0) == fastG;
   do {
      fastG = `${arrowrightwithtaild.length - fastG.length}`;
      if (eighteen2) {
         break;
      }
   } while ((3 < (telegramX.length & fastG.length) || 4 < (3 & telegramX.length)) && eighteen2);
   let information6 = fastG == String.fromCharCode(119,103,109,53,115,107,0);
   do {
      fastG = `${2 & turnu.length}`;
      if (information6) {
         break;
      }
   } while (information6 && (5 <= turnu.length && fastG != String.fromCharCode(65,0)));
       let yellowcirclebgc = 2.0;
       let sansl: Array<any> = [318, 961];
       let unimplementedviewe: Array<any> = [719, 183];
      if (unimplementedviewe.length >= 1) {
         unimplementedviewe.push(unimplementedviewe.length % 2);
      }
         yellowcirclebgc *= parseFloat(`${sansl.length << (Math.min(Math.abs(2), 1))}`);
      fullscreenmaxZ = [telegramX.length];
       let nendi: Map<any, any> = new Map([[String.fromCharCode(108,105,98,115,119,115,99,97,108,101,0),68], [String.fromCharCode(119,111,114,100,0),354]]);
       let sportP = String.fromCharCode(105,110,102,111,114,109,0);
       let hover3 = String.fromCharCode(116,105,109,101,0);
         sportP += `${sportP.length & nendi.size}`;
      for (let h = 0; h < 3; h++) {
          let relatedR = 3;
          let cinit_tL = false;
          let heart6: Array<any> = [845, 814];
         hover3 += `${hover3.length % 2}`;
         relatedR <<= Math.min(Math.abs(1), 5);
         cinit_tL = 66 < relatedR || !cinit_tL;
         heart6 = [heart6.length];
      }
      while (hover3.includes(sportP)) {
         hover3 = `${nendi.size ^ 2}`;
         break;
      }
          let calendar0 = 4.0;
          let middleZ: Map<any, any> = new Map([[String.fromCharCode(100,101,112,101,110,100,101,110,116,0),true ], [String.fromCharCode(114,101,115,112,111,110,100,0),false ]]);
         sportP = `${sportP.length / (Math.max(1, 8))}`;
         calendar0 /= Math.max(5, parseFloat(`${middleZ.size / (Math.max(1, 9))}`));
         middleZ.set(`${calendar0}`, parseInt(`${calendar0}`) / (Math.max(2, 10)));
      let libyoga4 = 8422508 >= sportP.length;
      do {
         sportP = `${sportP.length}`;
         if (libyoga4) {
            break;
         }
      } while (libyoga4 && (3 == (2 + nendi.size)));
         hover3 += `${2 >> (Math.min(5, hover3.length))}`;
          let phone6 = String.fromCharCode(116,101,116,114,97,104,101,100,114,97,108,0);
          let listF = 4;
         hover3 += `${sportP.length}`;
         phone6 = `${(phone6 == String.fromCharCode(51,0) ? phone6.length : listF)}`;
         listF *= listF & phone6.length;
          let anners = false;
          let update_bad = 2.0;
          let defaultfootballbgH = String.fromCharCode(111,102,102,105,99,105,97,108,0);
         sportP += `${nendi.size >> (Math.min(Math.abs(3), 1))}`;
         anners = defaultfootballbgH.length >= update_bad;
         update_bad -= ((anners ? 1 : 4));
         defaultfootballbgH = `${defaultfootballbgH.length}`;
         nendi = new Map([[sportP, sportP.length * hover3.length]]);
      telegramX = [footballtrophy1.length];
      fastG += `${2 ^ fullscreenmaxZ.length}`;
   while (!fastG.includes(`${fullscreenmaxZ.length}`)) {
       let f_countM = 4.0;
       let binddatash: Map<any, any> = new Map([[String.fromCharCode(102,117,110,99,116,105,111,110,0),false ], [String.fromCharCode(99,101,110,116,101,114,0),true ]]);
       let toponm = String.fromCharCode(115,117,112,112,114,101,115,115,111,114,0);
       let heji2 = 2;
       let binddatasE: Map<any, any> = new Map([[String.fromCharCode(118,97,108,0),890], [String.fromCharCode(100,105,115,99,111,118,101,114,0),609]]);
          let progressk: Map<any, any> = new Map([[String.fromCharCode(108,105,118,101,100,0),false ], [String.fromCharCode(116,114,101,101,115,0),true ], [String.fromCharCode(99,104,101,98,121,115,104,101,118,0),false ]]);
          let ticked6 = String.fromCharCode(114,101,112,114,101,115,101,110,116,97,116,105,111,110,115,0);
          let optionsp = String.fromCharCode(99,111,108,108,97,112,115,101,0);
         f_countM -= 2 | heji2;
         progressk = new Map([[`${progressk.size}`, 2 | ticked6.length]]);
         ticked6 += `${2 / (Math.max(9, progressk.size))}`;
         optionsp = "3";
          let predictionwini = 5;
         heji2 <<= Math.min(2, toponm.length);
         predictionwini %= Math.max(3, 4);
      while (!Array.from(binddatash.values()).includes(f_countM)) {
         binddatash = new Map([[`${f_countM}`, heji2]]);
         break;
      }
         heji2 %= Math.max(binddatash.size, 5);
       let suggestions = true;
       let soundV = false;
      for (let s = 0; s < 1; s++) {
         f_countM += 1;
      }
      while (soundV && !suggestions) {
         suggestions = (binddatash.size ^ heji2) == 12;
         break;
      }
      let statisticsg = 7409560 >= binddatasE.size;
      do {
         binddatasE = new Map([[`${binddatash.size}`, 3]]);
         if (statisticsg) {
            break;
         }
      } while (((binddatasE.size & 2) < 3 || (binddatasE.size & toponm.length) < 2) && statisticsg);
       let text8 = true;
       let infoJ = false;
      let buildi = infoJ ? !infoJ : infoJ;
      do {
         infoJ = (!infoJ ? soundV : infoJ);
         if (buildi) {
            break;
         }
      } while ((!text8) && buildi);
      let statsnomoredata3 = f_countM >= 7949262.0;
      do {
          let libavcodecK = String.fromCharCode(99,111,110,118,101,114,116,105,98,108,101,0);
          let trophy3 = String.fromCharCode(104,119,99,97,112,0);
          let whitetickS = 4.0;
          let fieldy = String.fromCharCode(112,114,101,105,118,111,117,115,0);
         f_countM /= Math.max(3, binddatash.size + parseInt(`${f_countM}`));
         libavcodecK = `${fieldy.length * 3}`;
         trophy3 = `${libavcodecK.length ^ 1}`;
         whitetickS += fieldy.length * 2;
         if (statsnomoredata3) {
            break;
         }
      } while ((5 == (binddatash.size << (Math.min(Math.abs(4), 1))) && (4 | binddatash.size) == 3) && statsnomoredata3);
      for (let v = 0; v < 3; v++) {
         binddatash = new Map([[`${binddatash.size}`, binddatash.size]]);
      }
       let pausei = String.fromCharCode(119,117,110,100,101,102,0);
       let refreshborderless8 = String.fromCharCode(114,101,116,114,97,110,115,0);
         heji2 *= 3 & parseInt(`${f_countM}`);
         soundV = refreshborderless8 == String.fromCharCode(80,0) && 13 > pausei.length;
      fastG = `${mapbufferM.length}`;
      break;
   }
      arrowrightwithtaild = `${2 & arrowrightwithtaild.length}`;
       let moduleH = 1.0;
       let iconsettingP: Array<any> = [String.fromCharCode(100,111,99,115,105,122,101,0), String.fromCharCode(99,111,109,109,105,116,0)];
         moduleH -= parseFloat(`${3}`);
      while (iconsettingP.length >= 4) {
          let inouttargetredk = false;
          let editI = 1.0;
         iconsettingP = [1 % (Math.max(4, parseInt(`${editI}`)))];
         inouttargetredk = (!inouttargetredk ? !inouttargetredk : !inouttargetredk);
         editI /= Math.max(2, 1);
         break;
      }
      while (4.63 >= (moduleH / 1.32) || (iconsettingP.length % 3) >= 5) {
         moduleH += parseFloat(`${1}`);
         break;
      }
      while (iconsettingP.includes(moduleH)) {
          let philippinesK = String.fromCharCode(115,117,98,116,114,101,101,95,103,95,52,57,0);
          let modeH: Array<any> = [281, 133];
         moduleH /= Math.max(5, parseFloat(`${philippinesK.length}`));
         philippinesK = "2";
         modeH = [modeH.length];
         break;
      }
          let awayiconE = 2.0;
          let unselectedd: Array<any> = [124, 734];
          let eactw: Map<any, any> = new Map([[String.fromCharCode(97,112,112,101,110,100,101,100,0),830], [String.fromCharCode(102,111,114,109,97,116,116,101,114,115,0),44], [String.fromCharCode(99,97,112,116,117,114,101,112,97,114,109,115,0),927]]);
         iconsettingP = [3 & iconsettingP.length];
         awayiconE /= Math.max(3 >> (Math.min(5, unselectedd.length)), 1);
         unselectedd.push(parseInt(`${awayiconE}`));
         eactw.set(`${awayiconE}`, 1 | unselectedd.length);
         moduleH -= parseFloat(`${iconsettingP.length * 2}`);
      footballtrophy1 += `${3 & parseInt(`${moduleH}`)}`;
      telegramX = [turnu.length - telegramX.length];
   let awayiconM = 9388124 <= turnu.length;
   do {
       let predictionbannersharedA = 4.0;
       let resendK: Map<any, any> = new Map([[String.fromCharCode(112,101,114,102,111,114,109,0),812], [String.fromCharCode(109,105,109,105,99,0),666], [String.fromCharCode(105,119,104,116,120,0),159]]);
       let catalog2 = 3.0;
       let foundo = String.fromCharCode(114,101,99,111,103,110,105,122,101,114,0);
      for (let v = 0; v < 2; v++) {
          let graphicsK = 1;
          let giftbuttonP = String.fromCharCode(114,101,102,101,114,114,101,114,0);
          let privilegec = 2.0;
          let executorJ = 0.0;
          let skipt = String.fromCharCode(115,117,112,112,111,114,116,115,0);
         predictionbannersharedA *= parseFloat(`${1 % (Math.max(2, parseInt(`${privilegec}`)))}`);
         graphicsK |= 2 & graphicsK;
         giftbuttonP += "2";
         privilegec -= parseFloat(`${giftbuttonP.length}`);
         executorJ *= parseFloat(`${giftbuttonP.length * graphicsK}`);
         skipt += `${skipt.length * 3}`;
      }
         catalog2 -= parseFloat(`${resendK.size}`);
      while (!Array.from(resendK.values()).includes(predictionbannersharedA)) {
         resendK = new Map([[`${resendK.size}`, 1]]);
         break;
      }
         catalog2 *= parseFloat(`${resendK.size << (Math.min(5, Math.abs(parseInt(`${predictionbannersharedA}`))))}`);
      if (!Array.from(resendK.values()).includes(catalog2)) {
         resendK.set(`${predictionbannersharedA}`, parseInt(`${predictionbannersharedA}`) >> (Math.min(foundo.length, 2)));
      }
      let forwardq = 5677017.0 <= predictionbannersharedA;
      do {
         predictionbannersharedA /= Math.max(parseFloat(`${parseInt(`${catalog2}`)}`), 2);
         if (forwardq) {
            break;
         }
      } while (((foundo.length * 3) < 1) && forwardq);
         resendK.set(`${catalog2}`, parseInt(`${predictionbannersharedA}`) >> (Math.min(Math.abs(parseInt(`${catalog2}`)), 2)));
       let settingE = 3.0;
       let mapbuffere = 3.0;
      let page9 = mapbuffere <= 5938119.0;
      do {
         mapbuffere /= Math.max(parseFloat(`${parseInt(`${predictionbannersharedA}`) >> (Math.min(Math.abs(1), 3))}`), 1);
         if (page9) {
            break;
         }
      } while (((3.99 + settingE) >= 4.61 || 3.99 >= (settingE + mapbuffere)) && page9);
      if (3 > foundo.length) {
         foundo = `${parseInt(`${catalog2}`) >> (Math.min(3, Math.abs(3)))}`;
      }
       let customO = String.fromCharCode(114,101,108,101,118,97,110,116,0);
       let update_6uV = String.fromCharCode(114,111,117,116,101,0);
         customO += "2";
      turnu = `${3 * diceL}`;
      if (awayiconM) {
         break;
      }
   } while ((footballtrophy1 != turnu) && awayiconM);
   while (turnu.length > 3) {
       let currentD = false;
       let customo = String.fromCharCode(99,111,110,116,101,110,116,0);
       let libfbY = String.fromCharCode(115,107,101,119,101,100,0);
       let libfollym: Array<any> = [544, 528];
       let actionsH: Array<any> = [605, 628, 460];
         actionsH.push(libfbY.length / (Math.max(1, 3)));
          let yellowanimationlivep = String.fromCharCode(118,116,101,110,99,0);
          let klevinQ: Array<any> = [String.fromCharCode(102,116,118,108,105,110,107,0), String.fromCharCode(114,101,97,115,111,110,0), String.fromCharCode(112,114,105,118,107,101,121,0)];
         libfbY += `${yellowanimationlivep.length}`;
         yellowanimationlivep = `${klevinQ.length}`;
         klevinQ = [2];
       let twittert = 0.0;
       let smallorangemanv = String.fromCharCode(112,114,101,118,101,110,116,101,100,0);
      let forwardc = smallorangemanv.length >= 5105100;
      do {
         smallorangemanv += `${2 + parseInt(`${twittert}`)}`;
         if (forwardc) {
            break;
         }
      } while (forwardc && (!smallorangemanv.endsWith(`${twittert}`)));
      let liveh = currentD ? !currentD : currentD;
      do {
         currentD = smallorangemanv.length == 56;
         if (liveh) {
            break;
         }
      } while (liveh && (!libfbY.startsWith(`${currentD}`)));
         libfbY += `${smallorangemanv.length}`;
         libfbY = "1";
         actionsH = [1];
         actionsH = [parseInt(`${twittert}`)];
         actionsH = [2];
      turnu += `${fastG.length}`;
      customo = `${1 << (Math.min(4, libfollym.length))}`;
      libfollym = [3];
      break;
   }
      diceL %= Math.max((arrowrightwithtaild == String.fromCharCode(55,0) ? turnu.length : arrowrightwithtaild.length), 2);
   while (fullscreenmaxZ.length >= telegramX.length) {
       let modulesY = true;
       let completep = 2.0;
       let showlessW = String.fromCharCode(112,114,111,116,111,0);
         modulesY = completep < showlessW.length;
         showlessW = `${(parseInt(`${completep}`) / (Math.max(4, (modulesY ? 1 : 3))))}`;
          let telegramF: Array<any> = [470, 210, 616];
          let pangleI = 3.0;
          let rootq = String.fromCharCode(115,117,112,112,108,101,109,101,110,116,97,108,0);
         showlessW += `${parseInt(`${completep}`) / 3}`;
         telegramF = [parseInt(`${pangleI}`) * 1];
         pangleI /= Math.max(3, parseFloat(`${telegramF.length | 1}`));
         rootq += `${rootq.length}`;
       let fieldd = 5.0;
      let file2 = String.fromCharCode(100,49,118,0) == showlessW;
      do {
         showlessW = `${showlessW.length & parseInt(`${fieldd}`)}`;
         if (file2) {
            break;
         }
      } while (file2 && ((showlessW.length ^ 1) == 2 && 5.50 == (2.22 + completep)));
      if ((fieldd + 4.39) >= 5.18 && 5.57 >= (fieldd + 4.39)) {
         fieldd *= parseFloat(`${parseInt(`${fieldd}`) % (Math.max(10, showlessW.length))}`);
      }
      let yellowU = String.fromCharCode(113,110,51,51,49,121,0) == showlessW;
      do {
          let stationss = 2.0;
          let homeplayeri = 0.0;
          let templateprocessorC: Array<any> = [196, 315, 228];
         showlessW = `${parseInt(`${fieldd}`)}`;
         stationss /= Math.max(2, parseFloat(`${parseInt(`${stationss}`) ^ templateprocessorC.length}`));
         homeplayeri += parseFloat(`${templateprocessorC.length << (Math.min(Math.abs(2), 4))}`);
         if (yellowU) {
            break;
         }
      } while (((completep + 5.60) < 3.78) && yellowU);
      for (let t = 0; t < 2; t++) {
         showlessW += `${parseInt(`${completep}`) + 1}`;
      }
         fieldd /= Math.max(parseFloat(`${3}`), 4);
      telegramX.push(showlessW.length & 3);
      break;
   }
      footballtrophy1 += `${arrowrightwithtaild.length}`;
      arrowrightwithtaild += `${turnu.length / (Math.max(1, 2))}`;
      diceL <<= Math.min(4, Math.abs(3 % (Math.max(5, fastG.length))));
   let volumeK = turnu.length >= 8894322;
   do {
       let reducerE = String.fromCharCode(119,114,105,116,101,99,104,101,99,107,0);
       let iconschedulec = String.fromCharCode(104,107,100,102,0);
       let eactR: Map<any, any> = new Map([[String.fromCharCode(100,117,114,105,110,103,0),false ], [String.fromCharCode(110,101,119,115,108,101,116,116,101,114,0),true ]]);
       let audienceh = 2;
       let bgvipsportB = 5.0;
         reducerE += `${eactR.size}`;
      if ((eactR.size & 3) == 3) {
          let plash5 = String.fromCharCode(117,110,115,101,110,116,0);
         eactR.set(`${audienceh}`, 2);
         plash5 = `${(plash5 == String.fromCharCode(68,0) ? plash5.length : plash5.length)}`;
      }
      while (audienceh >= reducerE.length) {
         reducerE += `${1 + eactR.size}`;
         break;
      }
         iconschedulec += `${3 << (Math.min(4, reducerE.length))}`;
         iconschedulec = "3";
       let hover2 = String.fromCharCode(109,117,116,101,100,0);
          let codegenq = String.fromCharCode(99,117,118,105,100,0);
          let googleS = 4.0;
         reducerE = `${parseInt(`${bgvipsportB}`)}`;
         codegenq += `${1 - parseInt(`${googleS}`)}`;
         googleS += codegenq.length;
         eactR.set(iconschedulec, (iconschedulec == String.fromCharCode(73,0) ? iconschedulec.length : audienceh));
          let sharedS = 3.0;
          let textD = 3;
          let langkeyb = String.fromCharCode(112,104,114,97,115,101,115,0);
         audienceh |= eactR.size;
         sharedS -= parseFloat(`${parseInt(`${sharedS}`) + 1}`);
         textD <<= Math.min(2, Math.abs(parseInt(`${sharedS}`) * textD));
         langkeyb = "3";
      while (4.84 < bgvipsportB) {
         audienceh >>= Math.min(1, Math.abs(3));
         break;
      }
         iconschedulec = `${(String.fromCharCode(53,0) == hover2 ? audienceh : hover2.length)}`;
      turnu = "2";
      if (volumeK) {
         break;
      }
   } while ((turnu.length < 2) && volumeK);
      fastG += `${1 - fullscreenmaxZ.length}`;
      bootsplashz += `${arrowrightwithtaild.length}`;
       let libffmpegkitc = 0.0;
         libffmpegkitc += parseInt(`${libffmpegkitc}`) + 3;
      let greytick5 = 8715306.0 >= libffmpegkitc;
      do {
         libffmpegkitc += parseInt(`${libffmpegkitc}`);
         if (greytick5) {
            break;
         }
      } while (((libffmpegkitc + libffmpegkitc) <= 4.80) && greytick5);
      while ((libffmpegkitc - libffmpegkitc) < 3.48) {
         libffmpegkitc *= parseInt(`${libffmpegkitc}`);
         break;
      }
      mapbufferM += `${diceL}`;
       let backwardv = 1.0;
       let j_hashH = 2;
       let libapminsightbY = String.fromCharCode(114,101,102,101,114,101,110,99,101,100,0);
         j_hashH |= parseInt(`${backwardv}`) - 1;
      for (let m = 0; m < 2; m++) {
         libapminsightbY += `${libapminsightbY.length >> (Math.min(5, Math.abs(parseInt(`${backwardv}`))))}`;
      }
      if (3 == (j_hashH << (Math.min(Math.abs(1), 5))) || (j_hashH << (Math.min(libapminsightbY.length, 2))) == 1) {
          let langi: Array<any> = [String.fromCharCode(110,102,116,0), String.fromCharCode(108,111,111,112,105,110,103,0)];
          let typesb: Map<any, any> = new Map([[String.fromCharCode(105,113,109,102,0),String.fromCharCode(109,101,100,105,117,109,116,104,114,101,115,104,0)], [String.fromCharCode(115,101,116,119,97,116,101,114,109,97,114,107,0),String.fromCharCode(109,97,105,110,115,116,97,103,101,0)], [String.fromCharCode(102,105,103,117,114,101,0),String.fromCharCode(112,101,97,107,0)]]);
          let edit4: Map<any, any> = new Map([[String.fromCharCode(115,116,114,105,107,101,0),743], [String.fromCharCode(119,101,108,115,0),421], [String.fromCharCode(109,111,100,101,108,115,0),257]]);
         j_hashH += parseInt(`${backwardv}`) >> (Math.min(langi.length, 4));
         langi.push(typesb.size >> (Math.min(4, Math.abs(edit4.size))));
         typesb = new Map([[`${typesb.size}`, edit4.size]]);
      }
         backwardv /= Math.max(parseFloat(`${2}`), 5);
          let foundJ = String.fromCharCode(98,105,116,115,112,117,108,115,101,115,0);
         libapminsightbY += `${2 >> (Math.min(Math.abs(j_hashH), 3))}`;
         foundJ = `${foundJ.length ^ foundJ.length}`;
      for (let s = 0; s < 3; s++) {
          let gift4 = String.fromCharCode(118,115,110,112,114,105,110,116,102,0);
          let componentregistryb = 3.0;
          let executorZ = String.fromCharCode(99,111,111,114,100,0);
          let libswresampleu = true;
         j_hashH -= executorZ.length - 1;
         gift4 += `${parseInt(`${componentregistryb}`) >> (Math.min(4, Math.abs(2)))}`;
         componentregistryb += (parseFloat(`${2 >> (Math.min(1, Math.abs((libswresampleu ? 1 : 2))))}`));
         executorZ += `${gift4.length}`;
         libswresampleu = gift4.length < 73 || componentregistryb < 12.95;
      }
      while (2.13 <= (4.67 + backwardv)) {
         backwardv += parseFloat(`${j_hashH}`);
         break;
      }
       let entryb = 3.0;
      if ((j_hashH + libapminsightbY.length) <= 3) {
         j_hashH += j_hashH;
      }
      fullscreenmaxZ = [fastG.length & 1];
   let neonc = fastG.length <= 8539116;
   do {
       let predictionbannerv = 3.0;
       let homeloadinge = 1.0;
       let googlew = String.fromCharCode(99,97,110,116,0);
       let iconsaveimagez = String.fromCharCode(114,101,110,100,101,114,105,110,103,0);
      if ((homeloadinge / (Math.max(iconsaveimagez.length, 5))) < 5.10 && 1 < (3 + iconsaveimagez.length)) {
          let attributedstringM = 2.0;
          let dependenciesj = 4.0;
          let manifestm = 1.0;
         iconsaveimagez = `${(googlew == String.fromCharCode(76,0) ? googlew.length : parseInt(`${attributedstringM}`))}`;
         attributedstringM *= parseFloat(`${parseInt(`${dependenciesj}`)}`);
         manifestm -= parseInt(`${dependenciesj}`);
      }
         predictionbannerv -= 2;
          let hometeamfield9 = String.fromCharCode(102,114,97,109,101,0);
          let reddownarrowz = String.fromCharCode(118,97,114,108,101,110,103,116,104,0);
          let mbridge3 = String.fromCharCode(110,111,110,110,101,103,97,116,105,118,101,0);
         predictionbannerv += mbridge3.length;
         hometeamfield9 = "3";
         reddownarrowz = `${3 + hometeamfield9.length}`;
         mbridge3 += `${reddownarrowz.length | hometeamfield9.length}`;
      let coreP = googlew == String.fromCharCode(122,99,55,54,0);
      do {
         googlew += `${iconsaveimagez.length | 1}`;
         if (coreP) {
            break;
         }
      } while (coreP && (iconsaveimagez == googlew));
       let thailandk: Array<any> = [761, 414];
         googlew += "1";
         predictionbannerv /= Math.max(parseInt(`${predictionbannerv}`) - parseInt(`${homeloadinge}`), 4);
          let mbnativeadvancedK = String.fromCharCode(112,97,114,116,105,97,108,0);
          let bottomu: Map<any, any> = new Map([[String.fromCharCode(98,114,111,97,100,99,97,115,116,0),821], [String.fromCharCode(119,105,107,105,0),150]]);
          let becomei: Array<any> = [726, 759];
         homeloadinge /= Math.max(4, parseInt(`${homeloadinge}`) ^ iconsaveimagez.length);
         mbnativeadvancedK += "3";
         bottomu = new Map([[`${bottomu.size}`, 1 % (Math.max(7, becomei.length))]]);
         becomei = [becomei.length];
          let gifgoalbgk = 1;
          let expiredW = String.fromCharCode(104,95,53,50,0);
          let logoutV = String.fromCharCode(108,101,114,116,0);
         iconsaveimagez = `${expiredW.length}`;
         gifgoalbgk *= logoutV.length;
         expiredW += `${logoutV.length * 3}`;
         homeloadinge *= 1 + iconsaveimagez.length;
       let disconnected8 = String.fromCharCode(117,114,112,111,115,101,0);
       let remindery = String.fromCharCode(99,111,108,111,110,0);
      let downT = thailandk.length >= 9094006;
      do {
         thailandk = [googlew.length];
         if (downT) {
            break;
         }
      } while (downT && (iconsaveimagez.length <= thailandk.length));
      fastG += `${parseInt(`${homeloadinge}`)}`;
      if (neonc) {
         break;
      }
   } while (neonc && (bootsplashz.startsWith(`${fastG.length}`)));
   while (1 >= fastG.length) {
       let gifgoalbgm = 3.0;
       let uploadN = true;
      for (let h = 0; h < 1; h++) {
         uploadN = 51.39 >= gifgoalbgm;
      }
         uploadN = 29.53 < gifgoalbgm || uploadN;
         gifgoalbgm -= (parseFloat(`${parseInt(`${gifgoalbgm}`) >> (Math.min(2, Math.abs((uploadN ? 1 : 3))))}`));
      let iconshareC = uploadN ? !uploadN : uploadN;
      do {
         uploadN = !uploadN;
         if (iconshareC) {
            break;
         }
      } while ((!uploadN) && iconshareC);
       let shootyesgoalQ = false;
       let alertm = true;
       let arrowB = 0.0;
      diceL &= turnu.length % (Math.max(3, 3));
      break;
   }
      diceL ^= 1;
      fullscreenmaxZ = [telegramX.length];
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
       let videoZ: Map<any, any> = new Map([[String.fromCharCode(100,105,115,115,105,109,0),56], [String.fromCharCode(115,116,114,116,111,108,108,0),12], [String.fromCharCode(105,100,101,110,116,105,99,97,108,0),512]]);
    let leagueS: Array<any> = [357, 667, 529];
    let embedF: Array<any> = [201, 278, 204];
    let skipx = String.fromCharCode(112,101,114,115,105,115,116,97,98,108,101,0);
    let modityb = true;
    let backwhiteQ = String.fromCharCode(100,101,108,116,97,115,0);
    let areac: Array<any> = [292, 751, 367];
    let googleA = 1.0;
    let notificationfillemptyK = 5.0;
    let championQ = String.fromCharCode(112,97,103,105,110,97,116,105,111,110,0);
    let homeactived = true;
    let mbjscommonX = String.fromCharCode(105,110,116,101,114,115,112,101,114,115,101,0);
    let baidub = String.fromCharCode(109,105,103,114,97,116,105,110,103,0);
    let termsJ = 3;
      championQ += `${championQ.length}`;
      championQ += `${leagueS.length | 2}`;
       let predictiondefaultK = String.fromCharCode(97,95,54,56,0);
         predictiondefaultK += `${predictiondefaultK.length}`;
      let comment5 = 7988709 >= predictiondefaultK.length;
      do {
          let statisticsr: Array<any> = [String.fromCharCode(99,111,110,116,114,105,98,0), String.fromCharCode(116,101,108,101,116,101,120,116,0)];
          let showless5 = 0;
          let codem = String.fromCharCode(110,101,119,101,114,0);
         predictiondefaultK = `${codem.length}`;
         statisticsr.push(showless5 >> (Math.min(5, Math.abs(1))));
         showless5 %= Math.max(showless5, 5);
         codem += "3";
         if (comment5) {
            break;
         }
      } while (comment5 && (predictiondefaultK.endsWith(predictiondefaultK)));
      if (predictiondefaultK.length >= 3) {
         predictiondefaultK = `${predictiondefaultK.length % 1}`;
      }
      googleA += ((modityb ? 5 : 3) | parseInt(`${notificationfillemptyK}`));
   let iconpointscoreO = modityb ? !modityb : modityb;
   do {
      modityb = 7 < videoZ.size;
      if (iconpointscoreO) {
         break;
      }
   } while (iconpointscoreO && (!modityb));
      embedF = [parseInt(`${googleA}`)];
   while ((googleA / 3.58) < 2.94 && modityb) {
       let bgvipxvodn = true;
       let evento = 0.0;
       let downloaded_ = String.fromCharCode(114,101,99,101,105,118,101,0);
       let injuryP = 1;
      if ((1.96 + evento) > 4.87 && bgvipxvodn) {
         bgvipxvodn = 50 > injuryP || 34.64 > evento;
      }
      while (!bgvipxvodn) {
          let playlists = String.fromCharCode(111,119,110,108,111,97,100,0);
         injuryP *= playlists.length;
         break;
      }
      let arrowW = injuryP >= 7300606;
      do {
          let iconrightorangeH = String.fromCharCode(97,109,114,119,98,100,97,116,97,0);
          let orangedownarrow5: Map<any, any> = new Map([[String.fromCharCode(109,115,101,112,115,110,114,0),34], [String.fromCharCode(97,118,117,105,0),144], [String.fromCharCode(98,101,104,105,110,100,0),864]]);
          let privatechatbgu = String.fromCharCode(100,105,115,99,108,111,115,117,114,101,0);
         injuryP ^= 1 >> (Math.min(3, privatechatbgu.length));
         iconrightorangeH = `${1 << (Math.min(4, iconrightorangeH.length))}`;
         orangedownarrow5 = new Map([[`${orangedownarrow5.size}`, 2]]);
         privatechatbgu += `${(String.fromCharCode(117,0) == iconrightorangeH ? orangedownarrow5.size : iconrightorangeH.length)}`;
         if (arrowW) {
            break;
         }
      } while ((5 >= (injuryP / (Math.max(downloaded_.length, 10))) && (downloaded_.length / (Math.max(6, injuryP))) >= 5) && arrowW);
          let androidn = true;
          let str2 = 3.0;
         evento /= Math.max(((bgvipxvodn ? 5 : 3) ^ injuryP), 1);
         androidn = !androidn && str2 == 97.4;
         str2 -= (parseFloat(`${(androidn ? 1 : 4) << (Math.min(Math.abs(parseInt(`${str2}`)), 1))}`));
      let modules4 = evento <= 8490747.0;
      do {
         evento -= parseInt(`${evento}`) ^ 3;
         if (modules4) {
            break;
         }
      } while (modules4 && (evento == 4.38));
       let cornershootK = String.fromCharCode(98,117,99,107,101,116,115,0);
         cornershootK += `${downloaded_.length & 3}`;
      for (let p = 0; p < 1; p++) {
          let downarrow6 = String.fromCharCode(109,101,109,100,98,0);
          let homeloadingo = String.fromCharCode(103,115,116,114,105,110,103,0);
         cornershootK = `${cornershootK.length}`;
         downarrow6 = `${homeloadingo.length}`;
         homeloadingo = `${2 >> (Math.min(2, homeloadingo.length))}`;
      }
      let disconnecteda = downloaded_.length <= 7084893;
      do {
         downloaded_ = `${injuryP * downloaded_.length}`;
         if (disconnecteda) {
            break;
         }
      } while (disconnecteda && (injuryP <= downloaded_.length));
      for (let e = 0; e < 3; e++) {
         injuryP >>= Math.min(Math.abs(1 * downloaded_.length), 3);
      }
      for (let z = 0; z < 3; z++) {
          let sellR = String.fromCharCode(120,120,104,97,115,104,0);
          let rewardh = 5.0;
          let inouttargetredZ = 5;
         downloaded_ += `${parseInt(`${evento}`) % (Math.max(sellR.length, 8))}`;
         sellR += "2";
         rewardh /= Math.max(parseFloat(`${3}`), 2);
         inouttargetredZ -= inouttargetredZ & parseInt(`${rewardh}`);
      }
      while (!bgvipxvodn) {
          let handler8 = 4;
          let mountingC = 3;
          let connectionV = 1.0;
          let iconfeedbackc = String.fromCharCode(99,100,97,116,97,0);
         bgvipxvodn = downloaded_.length >= evento;
         handler8 >>= Math.min(Math.abs(mountingC % 3), 3);
         mountingC |= iconfeedbackc.length;
         connectionV *= parseFloat(`${mountingC}`);
         iconfeedbackc = `${parseInt(`${connectionV}`) | 1}`;
         break;
      }
      googleA /= Math.max(3 + parseInt(`${googleA}`), 4);
      break;
   }
   if ((5 << (Math.min(3, championQ.length))) < 1) {
      googleA *= championQ.length * parseInt(`${notificationfillemptyK}`);
   }

    const eps = episodes?.urls?.slice(
      showEpisodeRangeStart,
      showEpisodeRangeEnd
    );

   for (let d = 0; d < 2; d++) {
      notificationfillemptyK += parseFloat(`${3 ^ championQ.length}`);
   }
   if (!modityb) {
       let spinner0 = String.fromCharCode(117,110,100,101,114,115,99,111,114,101,0);
      if (spinner0.startsWith(spinner0)) {
         spinner0 += `${spinner0.length}`;
      }
      let iconstare = 6871654 <= spinner0.length;
      do {
         spinner0 = `${spinner0.length}`;
         if (iconstare) {
            break;
         }
      } while (iconstare && (2 <= spinner0.length));
      if (spinner0 != spinner0) {
         spinner0 = `${spinner0.length * 3}`;
      }
      modityb = 83 < areac.length && skipx == String.fromCharCode(115,0);
   }
      championQ += `${(areac.length + (modityb ? 4 : 2))}`;
       let libsentryD = String.fromCharCode(116,114,97,110,115,102,111,114,109,101,114,115,0);
       let lang9: Map<any, any> = new Map([[String.fromCharCode(114,108,105,110,101,0),false ], [String.fromCharCode(115,111,117,114,99,101,105,100,0),false ]]);
       let halffieldimaged = String.fromCharCode(115,119,97,98,0);
         libsentryD += `${(String.fromCharCode(98,0) == halffieldimaged ? halffieldimaged.length : libsentryD.length)}`;
      while (lang9.size >= halffieldimaged.length) {
          let verticaln: Array<any> = [602, 92];
          let orientationl: Map<any, any> = new Map([[String.fromCharCode(98,97,103,0),true ], [String.fromCharCode(106,111,117,114,110,97,108,0),true ]]);
         lang9 = new Map([[libsentryD, libsentryD.length >> (Math.min(Math.abs(2), 5))]]);
         verticaln = [2];
         orientationl = new Map([[`${orientationl.size}`, verticaln.length]]);
         break;
      }
          let bottomd: Array<any> = [593, 418, 369];
          let downloadingh: Map<any, any> = new Map([[String.fromCharCode(112,97,116,99,104,0),109], [String.fromCharCode(105,103,110,97,108,0),910], [String.fromCharCode(108,111,99,107,0),775]]);
          let basketballtrophyW = 5;
         libsentryD = `${halffieldimaged.length / 3}`;
         bottomd = [bottomd.length >> (Math.min(Math.abs(1), 3))];
         downloadingh = new Map([[`${downloadingh.size}`, downloadingh.size >> (Math.min(Math.abs(3), 1))]]);
         basketballtrophyW |= basketballtrophyW ^ 3;
      if (!halffieldimaged.startsWith(`${libsentryD.length}`)) {
         libsentryD += `${halffieldimaged.length}`;
      }
      if (halffieldimaged.includes(`${lang9.size}`)) {
          let buildy = String.fromCharCode(115,97,109,112,108,101,114,101,100,117,99,116,105,111,110,0);
         lang9 = new Map([[halffieldimaged, buildy.length / (Math.max(5, halffieldimaged.length))]]);
      }
      championQ = `${areac.length + libsentryD.length}`;
       let sharewhiteU = String.fromCharCode(102,109,116,115,0);
       let regengT = String.fromCharCode(112,116,105,111,110,115,0);
      for (let w = 0; w < 2; w++) {
         regengT += `${regengT.length * sharewhiteU.length}`;
      }
          let statisticsinactiveS: Map<any, any> = new Map([[String.fromCharCode(99,111,108,108,105,100,105,110,103,0),923], [String.fromCharCode(105,110,100,101,111,100,97,116,97,0),768], [String.fromCharCode(118,108,105,110,101,0),774]]);
         regengT = `${regengT.length}`;
         statisticsinactiveS.set(`${statisticsinactiveS.size}`, statisticsinactiveS.size);
      for (let u = 0; u < 1; u++) {
         regengT = `${(regengT == String.fromCharCode(68,0) ? sharewhiteU.length : regengT.length)}`;
      }
      for (let f = 0; f < 1; f++) {
         regengT = `${regengT.length}`;
      }
      for (let p = 0; p < 2; p++) {
          let yingn = 5.0;
          let resendT = String.fromCharCode(116,101,109,112,108,97,116,101,100,0);
          let gray9 = false;
         sharewhiteU += `${(parseInt(`${yingn}`) ^ (gray9 ? 5 : 4))}`;
         yingn *= parseFloat(`${resendT.length ^ 2}`);
         resendT += `${resendT.length - 1}`;
      }
       let completeE = false;
      embedF.push(regengT.length);
   for (let n = 0; n < 1; n++) {
      embedF.push(leagueS.length << (Math.min(Math.abs(1), 4)));
   }
   while (!areac.includes(notificationfillemptyK)) {
       let profileV = 1.0;
       let stationA = true;
       let videobufferloadingK: Array<any> = [767, 959];
       let description_hgw: Map<any, any> = new Map([[String.fromCharCode(99,108,105,112,115,0),131], [String.fromCharCode(112,114,101,112,114,111,99,101,115,115,0),879], [String.fromCharCode(98,114,101,97,107,112,111,105,110,116,0),445]]);
       let package_lv = String.fromCharCode(109,117,108,116,105,112,108,121,0);
         stationA = description_hgw.size < package_lv.length;
          let libreanimated2 = 5.0;
         stationA = package_lv == String.fromCharCode(112,0);
         libreanimated2 *= parseFloat(`${parseInt(`${libreanimated2}`)}`);
         profileV -= parseFloat(`${videobufferloadingK.length}`);
      for (let j = 0; j < 2; j++) {
         description_hgw.set(`${profileV}`, package_lv.length);
      }
         package_lv = "2";
         profileV /= Math.max(5, parseFloat(`${description_hgw.size}`));
      while (package_lv.startsWith(`${description_hgw.size}`)) {
         description_hgw.set(`${profileV}`, ((stationA ? 1 : 4) * parseInt(`${profileV}`)));
         break;
      }
          let manifestP = false;
          let assistl: Map<any, any> = new Map([[String.fromCharCode(98,101,115,115,101,108,0),false ], [String.fromCharCode(99,112,112,108,105,110,116,0),false ]]);
          let navigationM = String.fromCharCode(114,117,110,0);
         description_hgw = new Map([[`${videobufferloadingK.length}`, videobufferloadingK.length << (Math.min(Math.abs(2), 5))]]);
         manifestP = ((navigationM.length ^ (manifestP ? navigationM.length : 65)) >= 65);
         assistl.set(`${manifestP}`, ((manifestP ? 3 : 4)));
       let pressuren = 3.0;
       let analyticx = 4.0;
         package_lv += `${(parseInt(`${analyticx}`) * (stationA ? 4 : 3))}`;
      let mappingJ = 7062818 <= package_lv.length;
      do {
          let dropdownz: Array<any> = [String.fromCharCode(119,104,105,116,101,108,105,115,116,0), String.fromCharCode(97,114,109,108,105,110,107,0), String.fromCharCode(101,100,116,115,0)];
          let popupD = String.fromCharCode(112,97,115,115,112,111,114,116,0);
         package_lv = `${1 - parseInt(`${profileV}`)}`;
         dropdownz = [popupD.length * 3];
         popupD = `${dropdownz.length}`;
         if (mappingJ) {
            break;
         }
      } while (mappingJ && (stationA));
       let injuryc: Map<any, any> = new Map([[String.fromCharCode(100,100,99,116,0),String.fromCharCode(97,97,99,101,110,99,116,97,98,0)], [String.fromCharCode(112,103,109,120,0),String.fromCharCode(99,111,110,116,97,105,110,101,100,0)]]);
          let plus5 = String.fromCharCode(116,98,108,104,100,114,0);
          let fillede = false;
         analyticx += parseInt(`${profileV}`);
         plus5 = `${plus5.length}`;
         fillede = !plus5.startsWith(`${fillede}`);
       let shootyesgoalC = String.fromCharCode(112,97,103,101,111,117,116,0);
         injuryc = new Map([[`${injuryc.size}`, 3]]);
      notificationfillemptyK += parseFloat(`${1 | skipx.length}`);
      break;
   }

    return eps;
  }, [showEpisodeRangeStart, showEpisodeRangeEnd, episodes]);

  const handleContainerLayout = (e) => {
       let frame_i6 = String.fromCharCode(116,120,116,0);
    let minimizef = false;
    let plus5 = 5;
    let editl: Map<any, any> = new Map([[String.fromCharCode(101,110,99,111,100,105,110,103,98,0),768], [String.fromCharCode(115,119,102,112,108,97,121,101,114,0),25], [String.fromCharCode(115,116,97,114,116,115,0),145]]);
    let dycreatorL = String.fromCharCode(102,101,101,100,0);
    let telemetrys = String.fromCharCode(105,110,100,97,116,97,0);
    let sharedm = 1.0;
    let championS = 0.0;
    let iconlogoutV: Map<any, any> = new Map([[String.fromCharCode(112,117,114,112,111,115,101,0),String.fromCharCode(100,97,112,112,0)], [String.fromCharCode(97,98,111,117,116,0),String.fromCharCode(109,101,100,105,97,99,111,100,101,99,100,101,99,0)], [String.fromCharCode(103,108,107,0),String.fromCharCode(102,108,97,116,0)]]);
    let reactnavigationt = String.fromCharCode(115,111,114,116,105,110,103,0);
   for (let w = 0; w < 1; w++) {
      frame_i6 += `${editl.size}`;
   }
       let default_80e = true;
       let halfm: Map<any, any> = new Map([[String.fromCharCode(109,97,112,102,105,108,101,0),942], [String.fromCharCode(114,101,112,108,97,99,101,0),950], [String.fromCharCode(97,102,116,101,114,0),972]]);
       let reducerC = 5.0;
      if (1 < halfm.size) {
         halfm.set(`${reducerC}`, halfm.size * 3);
      }
      for (let e = 0; e < 2; e++) {
         halfm.set(`${default_80e}`, (parseInt(`${reducerC}`) << (Math.min(2, Math.abs((default_80e ? 1 : 5))))));
      }
      while (default_80e) {
         halfm = new Map([[`${halfm.size}`, halfm.size | 3]]);
         break;
      }
       let club_: Map<any, any> = new Map([[String.fromCharCode(117,114,97,110,100,111,109,0),129], [String.fromCharCode(101,99,107,101,121,0),110], [String.fromCharCode(103,101,116,97,100,100,114,105,110,102,111,0),460]]);
       let policyN: Map<any, any> = new Map([[String.fromCharCode(104,105,115,116,111,114,121,0),false ], [String.fromCharCode(115,117,98,110,111,100,101,0),true ]]);
      if (4.59 <= reducerC) {
         halfm.set(`${default_80e}`, (policyN.size ^ (default_80e ? 1 : 5)));
      }
         policyN.set(`${reducerC}`, 3);
      if (1.100 >= (4.25 * reducerC) && !default_80e) {
          let blacklistF: Array<any> = [163, 90];
         default_80e = parseFloat(`${halfm.size}`) >= reducerC;
         blacklistF = [2];
      }
          let iconB = 4;
          let s_positionl = String.fromCharCode(97,100,100,105,116,105,118,101,0);
          let zhubov = String.fromCharCode(117,110,99,111,110,102,105,103,117,114,101,0);
         default_80e = zhubov.length >= 1;
         iconB >>= Math.min(1, Math.abs(iconB));
         s_positionl += `${s_positionl.length * 2}`;
         zhubov += "1";
      let downloader8 = halfm.size >= 8270959;
      do {
         halfm.set(`${default_80e}`, policyN.size | 2);
         if (downloader8) {
            break;
         }
      } while (downloader8 && ((5 / (Math.max(4, halfm.size))) == 5));
      telemetrys = `${((minimizef ? 5 : 1) << (Math.min(Math.abs(editl.size), 1)))}`;
      plus5 /= Math.max(1, plus5 - parseInt(`${championS}`));
   let nextj = championS <= 7185228.0;
   do {
       let gemfileu: Array<any> = [String.fromCharCode(113,117,97,110,116,0), String.fromCharCode(97,98,117,115,101,0)];
       let unimplementedviewT: Map<any, any> = new Map([[String.fromCharCode(101,120,114,100,115,112,0),114], [String.fromCharCode(99,111,110,115,117,109,112,116,105,111,110,0),448], [String.fromCharCode(112,115,110,114,0),241]]);
       let libjsil = String.fromCharCode(109,103,109,116,0);
       let countdownI = 2;
      let libfb7 = 8126410 >= unimplementedviewT.size;
      do {
         unimplementedviewT = new Map([[`${gemfileu.length}`, 1 + libjsil.length]]);
         if (libfb7) {
            break;
         }
      } while (libfb7 && (unimplementedviewT.get(`${countdownI}`) == null));
          let tempnodatagifd: Map<any, any> = new Map([[String.fromCharCode(110,111,97,115,109,0),String.fromCharCode(102,95,57,52,0)], [String.fromCharCode(118,103,108,111,98,97,108,0),String.fromCharCode(114,101,100,115,112,97,114,107,0)]]);
          let fastforwardf = 4.0;
          let yellowcirclebg0: Array<any> = [643, 436, 703];
         unimplementedviewT.set(`${yellowcirclebg0.length}`, yellowcirclebg0.length);
         tempnodatagifd = new Map([[`${tempnodatagifd.size}`, parseInt(`${fastforwardf}`) | tempnodatagifd.size]]);
         fastforwardf -= parseFloat(`${tempnodatagifd.size}`);
      if ((libjsil.length - 1) == 3 || 1 == (gemfileu.length - libjsil.length)) {
         libjsil += `${2 >> (Math.min(5, Math.abs(unimplementedviewT.size)))}`;
      }
         gemfileu = [2];
          let ying8 = String.fromCharCode(100,121,97,100,105,99,0);
          let mapbuffer5 = String.fromCharCode(117,110,97,117,116,104,111,114,105,122,101,100,0);
         libjsil += `${(String.fromCharCode(106,0) == ying8 ? ying8.length : countdownI)}`;
         mapbuffer5 = `${mapbuffer5.length | 1}`;
       let renew_: Map<any, any> = new Map([[String.fromCharCode(115,117,98,115,101,115,115,105,111,110,0),922], [String.fromCharCode(108,111,99,97,108,105,122,101,100,0),618], [String.fromCharCode(99,109,121,107,0),352]]);
       let matchesM: Map<any, any> = new Map([[String.fromCharCode(117,121,118,121,0),String.fromCharCode(110,112,112,116,114,97,110,115,112,111,115,101,0)], [String.fromCharCode(106,97,105,108,98,114,101,97,107,0),String.fromCharCode(99,104,105,108,108,0)]]);
         renew_ = new Map([[`${renew_.size}`, countdownI * 3]]);
         renew_ = new Map([[`${renew_.size}`, 3 / (Math.max(5, renew_.size))]]);
         countdownI <<= Math.min(2, Math.abs(matchesM.size));
      while ((libjsil.length - unimplementedviewT.size) >= 5) {
          let analyticq = 1.0;
          let controlf = String.fromCharCode(115,105,103,110,0);
          let iconsharefriendsh = String.fromCharCode(112,111,108,121,109,101,115,104,0);
         libjsil = `${matchesM.size / (Math.max(unimplementedviewT.size, 9))}`;
         analyticq -= iconsharefriendsh.length;
         controlf = `${parseInt(`${analyticq}`) << (Math.min(iconsharefriendsh.length, 3))}`;
         break;
      }
          let holderN = 4.0;
         matchesM = new Map([[`${matchesM.size}`, matchesM.size | countdownI]]);
         holderN -= parseFloat(`${parseInt(`${holderN}`)}`);
      while (!Array.from(matchesM.keys()).includes(`${gemfileu.length}`)) {
         gemfileu = [unimplementedviewT.size | countdownI];
         break;
      }
      championS /= Math.max(3, plus5);
      if (nextj) {
         break;
      }
   } while (nextj && ((dycreatorL.length + championS) <= 5.89 && 5 <= (dycreatorL.length & 2)));
   let reminderA = minimizef ? !minimizef : minimizef;
   do {
       let temperatureW: Map<any, any> = new Map([[String.fromCharCode(99,99,105,112,0),String.fromCharCode(97,112,112,114,111,118,101,100,95,108,95,57,50,0)], [String.fromCharCode(103,115,117,98,0),String.fromCharCode(114,101,112,111,0)]]);
       let libavutilf = String.fromCharCode(101,116,97,100,97,116,97,0);
       let orangea = 1.0;
       let tempo: Array<any> = [String.fromCharCode(112,114,111,116,111,98,117,102,0), String.fromCharCode(100,121,110,97,109,105,99,115,0), String.fromCharCode(114,101,99,117,114,115,105,118,101,108,121,0)];
       let assist0 = 1.0;
      if (1 < (temperatureW.size + 5) || (5 + tempo.length) < 4) {
         tempo = [2];
      }
         libavutilf += `${parseInt(`${orangea}`)}`;
      for (let p = 0; p < 3; p++) {
         libavutilf += `${2 << (Math.min(1, Math.abs(temperatureW.size)))}`;
      }
          let animationl = String.fromCharCode(119,97,116,101,114,109,97,114,107,115,0);
         tempo.push(3);
         animationl += `${animationl.length % (Math.max(1, 5))}`;
      while (4 > (1 - temperatureW.size)) {
         temperatureW.set(`${orangea}`, parseInt(`${orangea}`));
         break;
      }
      let collectionH = libavutilf.length <= 9867481;
      do {
         libavutilf += `${temperatureW.size + libavutilf.length}`;
         if (collectionH) {
            break;
         }
      } while (collectionH && (2.73 < (orangea / 4.50)));
         assist0 += parseFloat(`${temperatureW.size & parseInt(`${orangea}`)}`);
      if (3 <= temperatureW.size) {
          let minivody = String.fromCharCode(115,117,98,115,99,114,105,98,97,98,108,101,0);
          let settingsP = 0.0;
          let imagemanagerF = false;
          let minig = 2;
          let owngoal2 = 5.0;
         temperatureW.set(`${owngoal2}`, parseInt(`${owngoal2}`));
         minivody = `${2 ^ minig}`;
         settingsP *= parseFloat(`${parseInt(`${settingsP}`)}`);
         imagemanagerF = 47.65 >= settingsP || !imagemanagerF;
         minig ^= 2;
      }
          let skipz: Map<any, any> = new Map([[String.fromCharCode(100,97,116,97,98,108,111,99,107,0),871], [String.fromCharCode(104,115,118,97,0),117]]);
         orangea -= 2 | parseInt(`${orangea}`);
         skipz.set(`${skipz.size}`, 2 ^ skipz.size);
       let iconclosewhiteR: Map<any, any> = new Map([[String.fromCharCode(116,114,97,110,115,112,97,114,101,110,99,121,0),765], [String.fromCharCode(109,117,108,116,105,98,97,115,101,0),387]]);
      let playlist6 = 8147826.0 >= orangea;
      do {
          let sports: Array<any> = [String.fromCharCode(115,112,105,110,0), String.fromCharCode(109,111,100,101,109,118,99,111,115,116,0), String.fromCharCode(120,105,112,104,0)];
         orangea += tempo.length | 2;
         sports.push(sports.length >> (Math.min(sports.length, 3)));
         if (playlist6) {
            break;
         }
      } while ((!libavutilf.startsWith(`${orangea}`)) && playlist6);
      if (4 == (parseInt(`${assist0}`) - libavutilf.length) || (libavutilf.length - parseInt(`${assist0}`)) == 4) {
         assist0 -= parseFloat(`${3 << (Math.min(Math.abs(parseInt(`${orangea}`)), 5))}`);
      }
         orangea *= tempo.length;
      let librrcN = iconclosewhiteR.size >= 6335199;
      do {
         iconclosewhiteR.set(`${assist0}`, parseInt(`${assist0}`));
         if (librrcN) {
            break;
         }
      } while (librrcN && (iconclosewhiteR.get(`${temperatureW.size}`) == null));
         libavutilf = `${parseInt(`${orangea}`) + 1}`;
      minimizef = libavutilf == telemetrys;
      if (reminderA) {
         break;
      }
   } while ((telemetrys.length == 5 && !minimizef) && reminderA);
      dycreatorL = "2";
      minimizef = dycreatorL == telemetrys;

    const epHeight = e.nativeEvent.layout.height;

   while (dycreatorL != String.fromCharCode(73,0)) {
      frame_i6 = `${parseInt(`${sharedm}`)}`;
      break;
   }
   if ((iconlogoutV.size / 2) == 3) {
      iconlogoutV.set(frame_i6, dycreatorL.length % 3);
   }
   let register_p8H = plus5 <= 7864714;
   do {
      plus5 *= dycreatorL.length & iconlogoutV.size;
      if (register_p8H) {
         break;
      }
   } while ((1.31 >= (plus5 - sharedm) || 5.29 >= (1.31 - sharedm)) && register_p8H);
   for (let y = 0; y < 3; y++) {
       let event7 = 2.0;
       let iconbackwhiteE = String.fromCharCode(103,101,116,99,114,101,100,0);
       let libreactY = String.fromCharCode(116,97,103,115,0);
       let whiteI = 3;
       let catagory1: Map<any, any> = new Map([[String.fromCharCode(105,118,97,114,115,0),436], [String.fromCharCode(117,110,102,114,101,101,122,101,0),964]]);
      let encrypty = iconbackwhiteE == String.fromCharCode(112,116,95,107,55,97,111,106,0);
      do {
          let temperature8 = String.fromCharCode(109,111,110,111,119,104,105,116,101,0);
          let awayM = String.fromCharCode(105,115,109,101,109,115,101,116,0);
          let neonk = 5.0;
          let cornershootJ: Array<any> = [988, 81, 152];
         iconbackwhiteE = `${1 / (Math.max(5, cornershootJ.length))}`;
         temperature8 += `${awayM.length}`;
         awayM += `${temperature8.length}`;
         neonk += awayM.length ^ parseInt(`${neonk}`);
         cornershootJ = [temperature8.length];
         if (encrypty) {
            break;
         }
      } while ((libreactY.endsWith(iconbackwhiteE)) && encrypty);
      while ((2.52 + event7) >= 3.30 || 1 >= (catagory1.size | 3)) {
         event7 -= 2;
         break;
      }
       let iconfeedbackE = 5;
       let reddownarrowt = 3.0;
       let huaweik = 3.0;
      for (let d = 0; d < 1; d++) {
         iconfeedbackE <<= Math.min(2, Math.abs(catagory1.size + libreactY.length));
      }
         event7 -= 2;
       let libtobo = 0;
       let downloadR = 1;
         libreactY = "2";
          let turndowne = String.fromCharCode(101,114,97,115,101,114,0);
          let privacyU = String.fromCharCode(99,111,112,121,114,105,103,104,116,0);
         iconfeedbackE &= parseInt(`${reddownarrowt}`);
         turndowne += `${privacyU.length}`;
         privacyU = `${privacyU.length | turndowne.length}`;
         iconfeedbackE ^= parseInt(`${reddownarrowt}`);
      let plusv = 9160693.0 <= reddownarrowt;
      do {
          let graphics_: Array<any> = [168, 730];
          let forwardW = true;
          let humidityC = String.fromCharCode(97,118,102,111,114,109,97,116,0);
          let questR = 5;
          let flipperN = false;
         reddownarrowt *= downloadR;
         graphics_ = [humidityC.length % (Math.max(3, 9))];
         forwardW = graphics_.length < 90;
         humidityC += `${(graphics_.length * (flipperN ? 5 : 5))}`;
         questR /= Math.max(1, 3);
         flipperN = humidityC.endsWith(`${questR}`);
         if (plusv) {
            break;
         }
      } while (plusv && ((reddownarrowt * iconbackwhiteE.length) <= 2.13));
      for (let n = 0; n < 3; n++) {
         whiteI *= 3 - parseInt(`${huaweik}`);
      }
         iconfeedbackE -= 3 >> (Math.min(3, Math.abs(parseInt(`${event7}`))));
       let clubz = 0.0;
         iconbackwhiteE += `${iconfeedbackE}`;
      frame_i6 += `${(libreactY == String.fromCharCode(120,0) ? (minimizef ? 3 : 5) : libreactY.length)}`;
   }
      frame_i6 += `${iconlogoutV.size}`;
      championS += (String.fromCharCode(49,0) == dycreatorL ? editl.size : dycreatorL.length);
      plus5 += telemetrys.length;
    const epWidth = e.nativeEvent.layout.width;

   if (frame_i6.includes(`${plus5}`)) {
      frame_i6 += `${2 * parseInt(`${sharedm}`)}`;
   }
      sharedm -= (telemetrys == String.fromCharCode(67,0) ? plus5 : telemetrys.length);
   while (4 <= (dycreatorL.length / 5) || 5 <= (editl.size / (Math.max(5, dycreatorL.length)))) {
       let libavcodecE: Map<any, any> = new Map([[String.fromCharCode(114,101,102,105,100,0),String.fromCharCode(121,112,114,101,100,105,99,116,105,111,110,0)], [String.fromCharCode(105,110,98,111,120,0),String.fromCharCode(111,114,105,101,110,116,0)], [String.fromCharCode(97,117,116,111,114,111,116,97,116,101,0),String.fromCharCode(117,101,102,97,0)]]);
       let strC = 0.0;
       let sansE = String.fromCharCode(97,108,97,98,97,115,116,101,114,0);
       let dialogT = String.fromCharCode(102,114,97,109,101,112,97,99,107,0);
       let shareH: Map<any, any> = new Map([[String.fromCharCode(98,97,114,99,111,100,101,0),true ], [String.fromCharCode(109,107,118,109,117,120,101,114,117,116,105,108,0),false ], [String.fromCharCode(100,117,112,108,105,99,97,116,111,114,0),true ]]);
         strC /= Math.max(parseFloat(`${1}`), 3);
      while ((4 >> (Math.min(3, Math.abs(shareH.size)))) < 3) {
         dialogT = "1";
         break;
      }
      let annerX = 5885707.0 <= strC;
      do {
          let event8 = String.fromCharCode(115,101,97,114,99,104,97,98,108,101,0);
         strC *= parseFloat(`${libavcodecE.size}`);
         event8 += `${event8.length << (Math.min(Math.abs(1), 4))}`;
         if (annerX) {
            break;
         }
      } while ((3.72 == (strC * 4.71) && 3 == (parseInt(`${strC}`) * libavcodecE.size)) && annerX);
         strC /= Math.max(parseFloat(`${1 >> (Math.min(5, Math.abs(libavcodecE.size)))}`), 3);
      if (5.15 == (parseFloat(`${shareH.size}`) - strC) || 3.25 == (strC - 5.15)) {
          let yellowanimationliveV = String.fromCharCode(97,98,108,0);
         shareH.set(`${libavcodecE.size}`, libavcodecE.size);
         yellowanimationliveV = `${yellowanimationliveV.length - 1}`;
      }
      while (libavcodecE.get(`${shareH.size}`) == null) {
         libavcodecE.set(`${dialogT}`, (String.fromCharCode(118,0) == dialogT ? shareH.size : dialogT.length));
         break;
      }
       let mbnativeadvancedI = false;
      while (shareH.size >= sansE.length) {
         sansE += `${parseInt(`${strC}`) / 2}`;
         break;
      }
         strC *= parseFloat(`${parseInt(`${strC}`)}`);
         dialogT += `${parseInt(`${strC}`) - dialogT.length}`;
       let cancelg = 1;
       let closeb = 5;
      for (let a = 0; a < 1; a++) {
         cancelg += shareH.size;
      }
          let confirmationH = 1.0;
          let confirmationN = false;
         sansE += "1";
         confirmationH *= parseFloat(`${2 >> (Math.min(Math.abs(parseInt(`${confirmationH}`)), 1))}`);
         confirmationN = !confirmationN;
      if (closeb <= cancelg) {
         closeb &= dialogT.length << (Math.min(Math.abs(1), 5));
      }
       let predictiony = String.fromCharCode(115,111,117,114,99,101,99,108,105,112,0);
      dycreatorL += "3";
      break;
   }
       let iconmoreO = String.fromCharCode(110,97,112,115,104,111,116,0);
       let scorepopsoundv = false;
       let megaphone8 = String.fromCharCode(114,101,100,105,114,101,99,116,105,111,110,97,108,0);
          let skipl = 4.0;
         scorepopsoundv = iconmoreO.length > 91 && !scorepopsoundv;
         skipl *= parseInt(`${skipl}`);
       let fullscreenminH = 0.0;
       let bangc = 1.0;
         scorepopsoundv = !scorepopsoundv;
          let uimanagerc = false;
          let defaultfootballbgH = String.fromCharCode(116,114,97,110,115,0);
          let static_oy0 = true;
         fullscreenminH *= (parseFloat(`${String.fromCharCode(68,0) == iconmoreO ? (static_oy0 ? 4 : 3) : iconmoreO.length}`));
         uimanagerc = defaultfootballbgH.includes(`${uimanagerc}`);
         defaultfootballbgH += `${((uimanagerc ? 1 : 5) | 3)}`;
         static_oy0 = defaultfootballbgH.length <= 10;
         bangc /= Math.max(parseFloat(`${3 * parseInt(`${bangc}`)}`), 5);
         iconmoreO = `${parseInt(`${fullscreenminH}`)}`;
       let skipy = String.fromCharCode(106,111,98,115,0);
       let vietnamQ = String.fromCharCode(97,99,116,117,97,108,0);
          let animationsy = false;
          let soundQ = String.fromCharCode(97,97,99,116,97,98,0);
          let dplusV = String.fromCharCode(118,97,114,105,97,110,99,101,120,0);
         scorepopsoundv = soundQ.length >= iconmoreO.length;
         animationsy = !animationsy;
         soundQ = `${((animationsy ? 5 : 4))}`;
         dplusV += `${dplusV.length}`;
         fullscreenminH += parseFloat(`${2}`);
      dycreatorL += `${2 | telemetrys.length}`;
   if (5 < (dycreatorL.length - 3) && (dycreatorL.length / 3) < 1) {
       let lineG = String.fromCharCode(109,97,99,101,0);
      if (lineG == lineG) {
          let rewindc = String.fromCharCode(114,101,102,100,117,112,101,0);
          let analyticC: Map<any, any> = new Map([[String.fromCharCode(116,115,97,110,0),382], [String.fromCharCode(115,104,114,105,110,107,0),86], [String.fromCharCode(97,112,112,101,97,114,105,110,103,0),443]]);
         lineG += `${(rewindc == String.fromCharCode(108,0) ? lineG.length : rewindc.length)}`;
         analyticC.set(`${analyticC.size}`, analyticC.size);
      }
       let tickedH = false;
       let basketballmatchdetailbgt = true;
       let checkboxr = 5;
       let mimo5 = 3;
      championS += 1 - iconlogoutV.size;
   }
   while (iconlogoutV.size < 2) {
       let renewF = 1.0;
         renewF /= Math.max(4, parseFloat(`${parseInt(`${renewF}`)}`));
         renewF /= Math.max(parseFloat(`${parseInt(`${renewF}`)}`), 4);
         renewF *= parseFloat(`${2}`);
      iconlogoutV.set(`${sharedm}`, parseInt(`${sharedm}`) + parseInt(`${renewF}`));
      break;
   }
   if (!minimizef) {
      minimizef = championS == 95.38 && iconlogoutV.size == 71;
   }
    setHeight(epHeight);

   if (!minimizef) {
      iconlogoutV.set(`${minimizef}`, 1);
   }
      iconlogoutV.set(frame_i6, reactnavigationt.length >> (Math.min(Math.abs(3), 2)));
      editl = new Map([[`${championS}`, parseInt(`${championS}`)]]);
   while (iconlogoutV.get(`${championS}`) == null) {
       let chatF = String.fromCharCode(108,111,111,107,0);
       let backwardv = 5;
       let downloadingL = String.fromCharCode(108,97,121,101,114,115,0);
       let verticalT = false;
       let inactiveT = String.fromCharCode(111,114,105,103,105,110,115,0);
          let activea = false;
          let indicatoro = String.fromCharCode(97,112,112,118,101,121,111,114,0);
          let crossD = String.fromCharCode(119,105,116,104,100,114,97,119,0);
         downloadingL += `${inactiveT.length}`;
         activea = crossD.length <= indicatoro.length;
         indicatoro += `${((activea ? 5 : 1) + crossD.length)}`;
         chatF += `${backwardv / (Math.max(3, chatF.length))}`;
      let emptyM = inactiveT == String.fromCharCode(116,110,106,50,109,100,120,52,56,0);
      do {
         inactiveT += `${3 + chatF.length}`;
         if (emptyM) {
            break;
         }
      } while (emptyM && (verticalT || 2 >= inactiveT.length));
      while (verticalT) {
          let homeplayerq: Map<any, any> = new Map([[String.fromCharCode(104,97,110,100,108,101,0),false ], [String.fromCharCode(101,118,105,99,116,0),false ], [String.fromCharCode(115,116,97,114,114,101,100,0),true ]]);
          let rankW = String.fromCharCode(109,101,97,115,117,114,101,115,0);
         chatF = `${(inactiveT == String.fromCharCode(84,0) ? inactiveT.length : downloadingL.length)}`;
         homeplayerq = new Map([[`${homeplayerq.size}`, homeplayerq.size | 2]]);
         rankW = `${homeplayerq.size + 1}`;
         break;
      }
       let eabafadfadddbafeddddeeefeaafY = String.fromCharCode(110,112,111,105,110,116,115,0);
       let detail3 = String.fromCharCode(116,117,112,108,101,115,0);
          let updatesV = 0.0;
          let indexa = 1;
         eabafadfadddbafeddddeeefeaafY = `${chatF.length >> (Math.min(Math.abs(3), 5))}`;
         updatesV -= parseFloat(`${indexa}`);
         indexa &= indexa ^ parseInt(`${updatesV}`);
          let gemfileq = 2.0;
          let package_l4E = 5;
          let executorU: Map<any, any> = new Map([[String.fromCharCode(119,105,110,97,114,109,0),298], [String.fromCharCode(109,118,99,111,109,112,111,110,101,110,116,0),604], [String.fromCharCode(118,97,97,99,97,108,99,117,108,97,116,105,111,110,0),220]]);
         chatF = `${downloadingL.length - 3}`;
         gemfileq -= parseInt(`${gemfileq}`) * 2;
         package_l4E *= 2;
         executorU.set(`${package_l4E}`, 1 - executorU.size);
         inactiveT = `${inactiveT.length}`;
      while (inactiveT.length <= downloadingL.length) {
         inactiveT += `${(String.fromCharCode(112,0) == chatF ? detail3.length : chatF.length)}`;
         break;
      }
      let libfollyH = String.fromCharCode(100,100,57,0) == detail3;
      do {
         detail3 += `${chatF.length / (Math.max(3, detail3.length))}`;
         if (libfollyH) {
            break;
         }
      } while ((!detail3.endsWith(`${verticalT}`)) && libfollyH);
         downloadingL += "3";
      let uploadq = 6124487 <= eabafadfadddbafeddddeeefeaafY.length;
      do {
         eabafadfadddbafeddddeeefeaafY = `${backwardv}`;
         if (uploadq) {
            break;
         }
      } while (uploadq && (1 < chatF.length && eabafadfadddbafeddddeeefeaafY.length < 1));
          let libbuffer1 = 1.0;
         eabafadfadddbafeddddeeefeaafY += `${((verticalT ? 3 : 4) | parseInt(`${libbuffer1}`))}`;
      while (inactiveT != String.fromCharCode(49,0)) {
         detail3 += `${eabafadfadddbafeddddeeefeaafY.length}`;
         break;
      }
      while (5 >= (backwardv | 3) || backwardv >= 3) {
          let sidev = String.fromCharCode(107,101,121,98,111,97,114,100,0);
          let malaysiap = 3.0;
          let macau2 = String.fromCharCode(118,105,100,101,111,100,115,112,0);
          let bottomw = String.fromCharCode(101,110,116,114,111,112,121,109,111,100,101,100,97,116,97,0);
          let nendC = String.fromCharCode(99,117,114,114,101,110,116,0);
         verticalT = (((verticalT ? 15 : macau2.length) / (Math.max(macau2.length, 10))) == 15);
         sidev += `${bottomw.length ^ 1}`;
         malaysiap += (String.fromCharCode(83,0) == sidev ? parseInt(`${malaysiap}`) : sidev.length);
         bottomw = `${sidev.length ^ 3}`;
         nendC = `${sidev.length}`;
         break;
      }
      iconlogoutV.set(downloadingL, downloadingL.length);
      break;
   }
   if (!dycreatorL.endsWith(`${championS}`)) {
       let mbbidA = String.fromCharCode(101,116,119,111,114,107,0);
       let gpayT = String.fromCharCode(100,101,98,117,103,103,105,110,103,0);
       let smallbrightnessj = 5.0;
       let activej = 1.0;
          let malaysiaX = 1.0;
         gpayT += "1";
         malaysiaX *= parseInt(`${malaysiaX}`);
      if (1.59 == smallbrightnessj) {
         smallbrightnessj *= parseFloat(`${gpayT.length}`);
      }
      if ((2.88 + smallbrightnessj) <= 5.44 && 5.36 <= (2.88 + activej)) {
          let firebasel: Array<any> = [String.fromCharCode(114,101,101,110,116,114,97,110,116,0), String.fromCharCode(112,114,111,116,111,99,111,108,0)];
          let bootsplashu = 4.0;
          let zoomK = String.fromCharCode(113,116,115,0);
          let manifest1 = 5.0;
          let matchesG = String.fromCharCode(110,116,104,0);
         smallbrightnessj *= parseFloat(`${gpayT.length}`);
         firebasel.push(1 << (Math.min(Math.abs(parseInt(`${manifest1}`)), 2)));
         bootsplashu /= Math.max(1, parseFloat(`${3 - firebasel.length}`));
         zoomK = "3";
         manifest1 += parseFloat(`${1}`);
         matchesG = `${firebasel.length}`;
      }
       let orangeuparrow_ = 3.0;
       let listd = 2.0;
         smallbrightnessj /= Math.max(parseFloat(`${3}`), 4);
      if ((smallbrightnessj - 1.74) < 1.24 && (1.74 + smallbrightnessj) < 5.88) {
         smallbrightnessj += parseFloat(`${2 - parseInt(`${smallbrightnessj}`)}`);
      }
      for (let w = 0; w < 1; w++) {
         mbbidA = `${gpayT.length + 3}`;
      }
      while (4.66 >= listd) {
         gpayT += `${parseInt(`${listd}`) + 2}`;
         break;
      }
      let buttonp = orangeuparrow_ >= 9548147.0;
      do {
         orangeuparrow_ += 3;
         if (buttonp) {
            break;
         }
      } while (((1 & mbbidA.length) == 1) && buttonp);
       let yellowtoredK = 4;
       let p_managerH = 4;
      for (let k = 0; k < 2; k++) {
         smallbrightnessj -= parseFloat(`${2 >> (Math.min(4, mbbidA.length))}`);
      }
       let hoverd = String.fromCharCode(119,101,105,103,104,116,105,110,103,0);
      championS += 1 + parseInt(`${championS}`);
   }
   for (let a = 0; a < 3; a++) {
      dycreatorL = `${telemetrys.length}`;
   }
   while (!minimizef) {
       let buttony: Array<any> = [340, 577, 685];
       let minimize2 = String.fromCharCode(108,101,101,119,97,121,0);
      for (let c = 0; c < 2; c++) {
          let libswresampleV: Array<any> = [167, 127];
          let blackc = true;
          let middlewarea = 4.0;
         buttony = [2];
         libswresampleV.push(parseInt(`${middlewarea}`));
         blackc = libswresampleV.includes(middlewarea);
      }
      if (1 < (minimize2.length * 2)) {
          let subtexti: Map<any, any> = new Map([[String.fromCharCode(109,97,103,110,105,116,117,100,101,115,0),345], [String.fromCharCode(117,110,98,105,97,115,0),674]]);
          let stationo = String.fromCharCode(114,117,115,115,105,97,110,0);
          let awayteamfieldy: Array<any> = [String.fromCharCode(102,99,112,117,98,108,105,115,104,0), String.fromCharCode(99,111,110,115,116,114,117,99,116,105,118,101,0), String.fromCharCode(104,97,100,100,0)];
         minimize2 = `${subtexti.size}`;
         subtexti = new Map([[`${awayteamfieldy.length}`, 1]]);
         stationo += `${(String.fromCharCode(84,0) == stationo ? stationo.length : awayteamfieldy.length)}`;
      }
       let themea = false;
         buttony.push(2);
      let unimplementedviewM = 7615817 >= minimize2.length;
      do {
         minimize2 += "1";
         if (unimplementedviewM) {
            break;
         }
      } while ((buttony.length == 2) && unimplementedviewM);
       let native0 = 0.0;
      plus5 <<= Math.min(Math.abs((reactnavigationt == String.fromCharCode(118,0) ? reactnavigationt.length : parseInt(`${championS}`))), 3);
      break;
   }
    setWidth(epWidth);
  }

  const displayEpisodesWithStatus = useMemo(() => {
       let preview4 = String.fromCharCode(115,101,114,118,101,114,0);
    let greenM = 2;
    let shrinkC = 4.0;
    let homeiconS = 4.0;
    let blackQ = false;
    let footballfieldH = String.fromCharCode(115,112,101,108,108,0);
    let tickedA: Map<any, any> = new Map([[String.fromCharCode(103,100,115,112,0),true ], [String.fromCharCode(98,121,116,101,114,117,110,0),true ], [String.fromCharCode(121,109,105,110,112,117,116,0),true ]]);
    let libswscaled: Map<any, any> = new Map([[String.fromCharCode(115,111,99,97,110,116,115,101,110,100,109,111,114,101,0),true ], [String.fromCharCode(98,97,115,101,110,97,109,101,0),false ]]);
    let recommendation_ = String.fromCharCode(103,101,116,110,109,115,101,100,101,99,0);
    let homeplayer7 = String.fromCharCode(112,111,115,105,116,105,111,110,105,110,103,0);
    let humidity4: Array<any> = [783, 378, 128];
    let iconh = true;
       let entry0 = true;
      if (entry0) {
          let attributedstringU = 2;
          let gmailC = true;
          let kuaishouc = 1.0;
         entry0 = gmailC;
         attributedstringU *= attributedstringU;
         kuaishouc /= Math.max(5, attributedstringU + parseInt(`${kuaishouc}`));
      }
          let basketballmatchdetailbg2 = 1.0;
          let appleK = 0.0;
         entry0 = appleK < 96.11;
         basketballmatchdetailbg2 += 3 - parseInt(`${basketballmatchdetailbg2}`);
         appleK += parseFloat(`${parseInt(`${basketballmatchdetailbg2}`) >> (Math.min(3, Math.abs(parseInt(`${basketballmatchdetailbg2}`))))}`);
      if (!entry0) {
         entry0 = !entry0 || entry0;
      }
      greenM >>= Math.min(4, preview4.length);

    const vodInfo = downloadVideoReducer.downloads.find(
      (download) => download.vod.vod_id === vodId
    );

      shrinkC -= parseFloat(`${parseInt(`${homeiconS}`) + 3}`);

    if (!vodInfo) {

      shrinkC += parseFloat(`${preview4.length | footballfieldH.length}`);
      return displayEpisodes as mayi_CastingArea[]
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

      greenM &= (String.fromCharCode(116,0) == footballfieldH ? tickedA.size : footballfieldH.length);
        const isDownloading = episodeInfo.status === CUASheetIconarrowright.CUAAudienceUmeng;

      homeiconS /= Math.max((String.fromCharCode(90,0) == recommendation_ ? (blackQ ? 5 : 2) : recommendation_.length), 1);
        const isDownloaded = episodeInfo.status === CUASheetIconarrowright.CUAAttributedstring;

      homeiconS += parseInt(`${shrinkC}`) | footballfieldH.length;

        return {
          ...ep,
          isDownloading: !!isDownloading,
          isDownloaded: !!isDownloaded,
          progress: episodeInfo.progress,
        } as mayi_CastingArea;
      }

      return {
        ...ep,
        isDownloading: false,
        isDownloaded: false,
        progress: { percentage: 0, bytes: 0 }
      } as mayi_CastingArea;
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
                      else mayi_Attributedstring.showToast('最多同时下载10个视频，请稍后继续')
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
