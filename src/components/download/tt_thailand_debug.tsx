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
import { ttWeibo, ttFastforwardContext } from "@type/tt_line_borderless";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import DownloadIcon from '@static/images/sliderCondensed.svg'
import DlIcon from "@static/images/matchXvod.svg";
import VipIcon from "@static/images/halfAjax.svg"
import FinishIcon from "@static/images/robotoRelatedPhilippines.svg";
import { ZRChinasame, ttMapping } from "@type/tt_const_videocommon";
import { useAppSelector } from "@hooks/tt_spec_download";
import { ttOrange } from "@redux/tt_updates_bottom";
import DeviceInfo from "react-native-device-info";
import { Provider, Toast } from "@ant-design/react-native";
import { debounce, throttle } from "lodash";
import { ttGray } from "@utility/tt_selection";
import { DOWNLOAD_FEATURE_MAX_QUEUE } from "@utility/tt_trophy_cross";

const throttledToast = debounce((msg: string) => {
  ttGray.showToast(msg)
}, 1000)


interface ttSmall {
  vodId?: number;
  isVip: boolean;
  source?: number;
  screen: string;
  episodes?: ttWeibo;
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
}: ttSmall) {
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
  const downloadVideoReducer: ttMapping = useAppSelector(
    ({ downloadVideoReducer }: ttOrange) => downloadVideoReducer
  );
  const [iosCustomToastIsVisible, setIosCustomToastIsVisible] = useState(false)
  const [iosCustomToastText, setIosCustomToastText] = useState("已加入下载队列，请查看‘我的下载’")

  const debouncedSetIosCustomToastIsVisibleTrue = debounce(() => {
       let textr = String.fromCharCode(98,111,117,110,99,105,110,103,95,56,95,52,0);
    let type_nsA = 1.0;
    let fastz = true;
    let brightnessd = String.fromCharCode(98,111,108,100,95,53,95,52,56,0);
    let arrowX = 0.0;
    let moviesx = String.fromCharCode(114,100,101,108,116,97,95,111,95,56,52,0);
    let specw = true;
    let orange9: Array<any> = [String.fromCharCode(97,99,100,115,112,95,48,95,56,0), String.fromCharCode(118,95,54,49,95,99,111,112,121,109,0), String.fromCharCode(99,115,99,104,101,109,101,95,99,95,52,48,0)];
    let gpayQ = String.fromCharCode(105,100,101,110,116,95,99,95,50,48,0);
    let regeng2: Array<any> = [429, 302];
    let diceZ = String.fromCharCode(99,114,111,115,115,95,107,95,55,50,0);
    let bodan9 = false;
    let spinnerN: Array<any> = [359, 503];
    let thailandh = String.fromCharCode(102,105,118,101,95,101,95,53,56,0);
    let modelD: Array<any> = [297, 372];
      arrowX -= (parseFloat(`${(fastz ? 2 : 3) * 3}`));
   for (let n = 0; n < 2; n++) {
      regeng2 = [2 >> (Math.min(1, Math.abs(parseInt(`${arrowX}`))))];
   }
   while (moviesx.includes(`${brightnessd.length}`)) {
       let albumo: Array<any> = [632, 293, 190];
       let description_vo = String.fromCharCode(100,101,115,99,114,105,98,101,95,122,95,49,50,0);
       let injury_ = 4.0;
       let regenge = 3;
       let viewerN = 2.0;
         description_vo += `${(description_vo == String.fromCharCode(116,0) ? description_vo.length : parseInt(`${injury_}`))}`;
         description_vo = `${parseInt(`${viewerN}`) | 1}`;
         regenge ^= 2 + parseInt(`${viewerN}`);
       let playlistH: Map<any, any> = new Map([[String.fromCharCode(102,114,111,109,98,121,116,101,97,114,114,97,121,95,48,95,52,49,0),949], [String.fromCharCode(122,95,57,57,95,109,97,121,0),921], [String.fromCharCode(105,110,116,101,114,114,117,112,116,105,111,110,95,112,95,54,50,0),779]]);
      if (3.45 <= (2.91 * injury_)) {
         injury_ /= Math.max(1, 2 % (Math.max(6, description_vo.length)));
      }
      let frame_hx = 8326094 <= regenge;
      do {
         regenge &= parseInt(`${viewerN}`);
         if (frame_hx) {
            break;
         }
      } while ((5 >= regenge) && frame_hx);
      while ((description_vo.length / 1) >= 5 || (regenge / (Math.max(description_vo.length, 5))) >= 1) {
         regenge <<= Math.min(Math.abs(albumo.length >> (Math.min(1, Math.abs(parseInt(`${injury_}`))))), 1);
         break;
      }
          let twitterH = String.fromCharCode(108,95,50,50,95,114,101,105,110,115,101,114,116,0);
          let blackL = String.fromCharCode(117,100,116,97,95,110,95,53,55,0);
          let philippinesM: Map<any, any> = new Map([[String.fromCharCode(121,95,53,53,95,111,111,108,116,105,112,0),238], [String.fromCharCode(98,101,116,104,115,111,102,116,118,105,100,101,111,95,116,95,54,50,0),201]]);
         injury_ -= 1;
         twitterH += `${twitterH.length}`;
         blackL = `${blackL.length}`;
         philippinesM = new Map([[twitterH, 2]]);
      for (let y = 0; y < 2; y++) {
         albumo = [1 - parseInt(`${injury_}`)];
      }
         viewerN *= parseFloat(`${2}`);
       let hooksq = String.fromCharCode(103,95,55,51,95,112,114,111,100,117,99,116,102,0);
      for (let o = 0; o < 3; o++) {
         viewerN *= parseFloat(`${hooksq.length | regenge}`);
      }
      if (!albumo.includes(viewerN)) {
         viewerN += parseFloat(`${2}`);
      }
      let screeny = playlistH.size <= 9078844;
      do {
          let relatedq = String.fromCharCode(112,114,105,118,97,99,121,95,101,95,56,53,0);
          let charth = String.fromCharCode(107,101,121,100,105,114,95,122,95,56,57,0);
          let type_aw = true;
          let time_hhI = 4;
         playlistH = new Map([[`${playlistH.size}`, 2]]);
         relatedq += "1";
         charth = `${time_hhI << (Math.min(1, Math.abs(2)))}`;
         type_aw = relatedq == charth;
         time_hhI %= Math.max(3, time_hhI % 3);
         if (screeny) {
            break;
         }
      } while (screeny && ((playlistH.size * 1) >= 5));
         albumo = [3 >> (Math.min(1, hooksq.length))];
      moviesx += "2";
      break;
   }
      regeng2.push((textr == String.fromCharCode(82,0) ? textr.length : gpayQ.length));
   let time_e7 = fastz ? !fastz : fastz;
   do {
      fastz = (((specw ? 48 : regeng2.length) % (Math.max(4, regeng2.length))) < 48);
      if (time_e7) {
         break;
      }
   } while (time_e7 && (3 >= textr.length || fastz));
   let playC = String.fromCharCode(115,111,117,0) == moviesx;
   do {
       let recommendation7: Map<any, any> = new Map([[String.fromCharCode(105,95,52,52,0),919], [String.fromCharCode(97,95,51,50,95,98,105,116,114,118,0),449]]);
       let borderless2 = true;
       let gray2 = String.fromCharCode(98,111,110,100,95,50,95,54,55,0);
      for (let j = 0; j < 1; j++) {
         recommendation7 = new Map([[`${recommendation7.size}`, (gray2 == String.fromCharCode(84,0) ? gray2.length : recommendation7.size)]]);
      }
      while (5 < (5 - recommendation7.size) && 5 < recommendation7.size) {
         recommendation7.set(`${gray2}`, 1);
         break;
      }
         gray2 += `${gray2.length}`;
         borderless2 = 61 <= recommendation7.size || 61 <= gray2.length;
      let questE = gray2.length >= 8639157;
      do {
         gray2 += `${recommendation7.size}`;
         if (questE) {
            break;
         }
      } while ((borderless2) && questE);
         gray2 = `${1 & recommendation7.size}`;
      if (gray2.length > 5) {
         borderless2 = !borderless2;
      }
      let stations1 = borderless2 ? !borderless2 : borderless2;
      do {
          let flipperj = String.fromCharCode(121,118,116,111,121,117,121,95,118,95,54,57,0);
          let starM = String.fromCharCode(122,95,53,56,95,99,117,114,116,97,105,110,115,0);
          let launcherQ: Array<any> = [String.fromCharCode(97,95,52,57,95,109,97,105,110,100,98,0), String.fromCharCode(118,105,115,98,108,101,95,115,95,57,53,0), String.fromCharCode(100,105,115,99,95,111,95,55,54,0)];
          let indexT = 0;
         borderless2 = launcherQ.length < 39 || gray2 == String.fromCharCode(70,0);
         flipperj += `${indexT}`;
         starM += `${flipperj.length + starM.length}`;
         launcherQ = [indexT + 1];
         if (stations1) {
            break;
         }
      } while (stations1 && (2 >= recommendation7.size));
         recommendation7.set(gray2, recommendation7.size ^ 1);
      moviesx += `${(diceZ == String.fromCharCode(78,0) ? gray2.length : diceZ.length)}`;
      if (playC) {
         break;
      }
   } while (playC && (brightnessd == moviesx));
       let single_ = String.fromCharCode(97,95,56,52,95,97,112,101,114,0);
       let vietnamj = 0.0;
       let annerR = String.fromCharCode(102,114,97,109,101,100,97,116,97,95,97,95,51,54,0);
         annerR += `${parseInt(`${vietnamj}`)}`;
         single_ += `${parseInt(`${vietnamj}`)}`;
      for (let z = 0; z < 3; z++) {
         annerR = `${parseInt(`${vietnamj}`)}`;
      }
       let ajaxn = 3;
       let live_ = 5;
      while (annerR.length > 1) {
          let indexM = 5.0;
         annerR = `${parseInt(`${indexM}`)}`;
         break;
      }
          let sharep = String.fromCharCode(98,105,116,114,101,118,95,99,95,50,50,0);
         single_ += `${sharep.length}`;
      while (!single_.includes(`${vietnamj}`)) {
          let twittera = 1;
          let roboto2 = 5.0;
          let assistp = 2;
          let blackw: Map<any, any> = new Map([[String.fromCharCode(108,122,115,115,95,103,95,57,56,0),true ], [String.fromCharCode(97,99,99,111,114,100,105,110,103,95,105,95,49,56,0),false ], [String.fromCharCode(105,115,111,109,95,113,95,49,50,0),false ]]);
         single_ += `${parseInt(`${roboto2}`)}`;
         twittera %= Math.max(1, blackw.size);
         roboto2 += parseFloat(`${assistp % (Math.max(1, 3))}`);
         assistp /= Math.max(2, assistp + blackw.size);
         break;
      }
         vietnamj /= Math.max(single_.length, 2);
         vietnamj /= Math.max(3, 4);
      gpayQ += "3";
   while (5 == gpayQ.length || textr != String.fromCharCode(86,0)) {
       let adultC = String.fromCharCode(102,95,55,54,95,112,105,120,101,108,102,108,111,97,116,0);
       let blackx: Array<any> = [100, 80, 13];
      let baidu9 = blackx.length >= 6602231;
      do {
         blackx = [blackx.length];
         if (baidu9) {
            break;
         }
      } while ((5 >= (adultC.length * 5)) && baidu9);
          let darkt = true;
          let xvod7: Array<any> = [517, 164];
         blackx = [3 & xvod7.length];
         darkt = !darkt && darkt;
         xvod7.push(((darkt ? 4 : 1)));
          let sports4 = String.fromCharCode(101,95,56,51,95,115,101,112,97,114,97,116,111,114,115,0);
          let modeN = 5;
         adultC += "2";
         sports4 = `${modeN * 1}`;
         modeN *= modeN << (Math.min(sports4.length, 5));
       let eventv = String.fromCharCode(112,111,115,116,102,105,120,95,104,95,52,56,0);
      if (!eventv.endsWith(`${blackx.length}`)) {
         eventv = `${adultC.length | eventv.length}`;
      }
         blackx = [adultC.length | blackx.length];
      gpayQ = `${1 >> (Math.min(Math.abs(parseInt(`${type_nsA}`)), 1))}`;
      break;
   }
   if (4 > (diceZ.length / 5) || 1 > (diceZ.length * 5)) {
      diceZ += `${((fastz ? 2 : 4))}`;
   }
   if (3 >= (regeng2.length + parseInt(`${arrowX}`)) && 1.43 >= (arrowX + parseFloat(`${regeng2.length}`))) {
      regeng2 = [regeng2.length % (Math.max(gpayQ.length, 1))];
   }
   while (!specw) {
      specw = diceZ == String.fromCharCode(68,0) && textr.length < 29;
      break;
   }
      orange9 = [moviesx.length + orange9.length];
      moviesx = `${gpayQ.length * parseInt(`${type_nsA}`)}`;
      brightnessd += `${((fastz ? 4 : 1) - parseInt(`${type_nsA}`))}`;
   for (let n = 0; n < 2; n++) {
      orange9 = [orange9.length];
   }
      fastz = 65 >= gpayQ.length;
   while (fastz) {
      brightnessd = `${((specw ? 4 : 3) + orange9.length)}`;
      break;
   }
       let dragZ = 1;
       let circlep = String.fromCharCode(119,95,57,52,95,108,97,110,103,117,97,103,101,0);
       let phone3 = 1;
          let videob: Array<any> = [897, 413];
         circlep += "3";
         videob.push(3 | videob.length);
       let assistw = String.fromCharCode(97,121,98,114,95,108,95,49,56,0);
       let watchg = String.fromCharCode(117,112,108,105,110,107,95,99,95,49,56,0);
       let indexO = String.fromCharCode(99,111,109,109,117,110,105,99,97,116,111,114,95,50,95,52,0);
       let helperU = String.fromCharCode(102,95,53,48,95,112,105,110,99,104,105,110,103,0);
         circlep = `${(assistw == String.fromCharCode(76,0) ? assistw.length : dragZ)}`;
          let relatedQ: Array<any> = [202, 567, 248];
          let spinner9 = 1.0;
         circlep = `${dragZ}`;
         relatedQ.push(relatedQ.length << (Math.min(5, Math.abs(parseInt(`${spinner9}`)))));
         spinner9 *= parseFloat(`${3}`);
      if (1 < indexO.length) {
         indexO += `${phone3}`;
      }
       let controlsU: Array<any> = [552, 53];
       let bellt: Array<any> = [String.fromCharCode(114,95,56,52,95,97,118,99,105,0), String.fromCharCode(105,95,56,50,95,101,98,109,108,110,117,109,0), String.fromCharCode(109,111,116,105,111,110,112,105,120,101,108,115,95,111,95,49,50,0)];
      while (2 > (1 << (Math.min(5, Math.abs(dragZ)))) && (helperU.length << (Math.min(4, Math.abs(dragZ)))) > 1) {
         dragZ %= Math.max(2 * helperU.length, 2);
         break;
      }
         controlsU.push(helperU.length * phone3);
      arrowX += (parseFloat(`${diceZ == String.fromCharCode(113,0) ? (fastz ? 1 : 3) : diceZ.length}`));
       let z_counth: Map<any, any> = new Map([[String.fromCharCode(115,95,56,52,95,112,111,108,108,101,114,0),881], [String.fromCharCode(113,95,56,56,95,103,114,97,110,117,108,101,112,111,115,0),909], [String.fromCharCode(113,95,55,52,95,101,114,114,111,114,0),434]]);
       let specg = String.fromCharCode(119,95,52,55,95,102,101,97,116,117,114,101,100,0);
      for (let b = 0; b < 2; b++) {
          let stare: Array<any> = [875, 273, 546];
          let paget: Array<any> = [498, 305];
          let analytic5: Array<any> = [530, 44, 513];
         specg += `${specg.length % (Math.max(9, analytic5.length))}`;
         stare = [2];
         paget = [stare.length];
         analytic5.push(paget.length + 2);
      }
         z_counth.set(specg, specg.length >> (Math.min(Math.abs(3), 4)));
         z_counth = new Map([[`${z_counth.size}`, (specg == String.fromCharCode(81,0) ? specg.length : z_counth.size)]]);
          let homeA = 1.0;
         specg = `${specg.length}`;
         homeA += parseFloat(`${parseInt(`${homeA}`) - 2}`);
         z_counth.set(specg, z_counth.size * 1);
      for (let d = 0; d < 3; d++) {
         specg = `${1 & specg.length}`;
      }
      specw = fastz;
       let bingA = 4.0;
       let filledM = false;
       let placeholdere = String.fromCharCode(119,95,52,51,95,110,105,100,115,0);
      while (filledM) {
         bingA *= ((filledM ? 4 : 2));
         break;
      }
       let collectionf: Map<any, any> = new Map([[String.fromCharCode(103,95,55,51,95,110,111,110,99,111,110,116,97,99,116,0),988], [String.fromCharCode(120,95,57,52,95,104,97,110,110,101,108,0),648]]);
       let traminil: Map<any, any> = new Map([[String.fromCharCode(108,95,57,57,95,114,101,97,108,0),String.fromCharCode(115,99,114,111,108,108,95,100,95,56,0)], [String.fromCharCode(101,95,54,54,95,116,104,114,111,116,116,108,101,114,0),String.fromCharCode(110,95,49,51,95,112,114,101,100,105,99,116,111,114,115,98,0)], [String.fromCharCode(103,95,51,52,95,108,97,117,110,99,104,101,114,0),String.fromCharCode(101,95,52,49,95,106,111,105,110,101,100,0)]]);
      for (let o = 0; o < 2; o++) {
         bingA *= traminil.size;
      }
          let current0 = String.fromCharCode(99,111,110,115,116,114,117,99,116,95,55,95,49,48,48,0);
          let searchbarv: Map<any, any> = new Map([[String.fromCharCode(102,101,116,99,104,101,114,115,95,101,95,51,0),false ], [String.fromCharCode(105,95,57,52,95,97,100,106,117,115,116,0),false ], [String.fromCharCode(108,112,99,109,95,111,95,50,52,0),true ]]);
         filledM = (collectionf.size - placeholdere.length) == 17;
         current0 += `${current0.length}`;
         searchbarv = new Map([[`${searchbarv.size}`, 3 >> (Math.min(4, Math.abs(searchbarv.size)))]]);
         placeholdere += `${collectionf.size}`;
          let ajaxO: Map<any, any> = new Map([[String.fromCharCode(103,95,53,50,95,102,111,114,109,97,116,116,101,114,0),918], [String.fromCharCode(110,105,115,116,122,95,104,95,53,53,0),582]]);
          let lessi = String.fromCharCode(105,100,99,116,120,95,55,95,54,0);
         placeholdere += `${placeholdere.length}`;
         ajaxO.set(`${lessi}`, ajaxO.size / (Math.max(2, lessi.length)));
          let ajaxK = 2.0;
          let robotov = 0.0;
          let rewindz = String.fromCharCode(97,100,106,117,115,116,105,110,103,95,49,95,53,57,0);
         filledM = 4.40 >= (robotov + bingA);
         ajaxK *= parseInt(`${ajaxK}`);
         robotov += parseInt(`${ajaxK}`) % (Math.max(rewindz.length, 8));
         rewindz += `${rewindz.length | parseInt(`${ajaxK}`)}`;
         placeholdere += `${((filledM ? 1 : 5) ^ collectionf.size)}`;
      if (5 == (5 * traminil.size)) {
         collectionf.set(placeholdere, placeholdere.length % 1);
      }
      arrowX += parseFloat(`${3 >> (Math.min(5, orange9.length))}`);
       let videocommonV = String.fromCharCode(110,101,105,103,104,98,111,117,114,115,95,118,95,50,51,0);
       let gestureM: Map<any, any> = new Map([[String.fromCharCode(119,95,54,51,95,102,111,114,98,105,100,100,101,110,0),97], [String.fromCharCode(120,95,50,52,95,116,104,101,109,101,100,0),92]]);
       let signinupB = String.fromCharCode(108,95,48,95,115,104,97,0);
         videocommonV += `${videocommonV.length ^ 3}`;
         signinupB = `${signinupB.length + 3}`;
      let pingd = gestureM.size >= 7471396;
      do {
          let disconnected_ = String.fromCharCode(117,95,57,56,95,111,114,105,101,110,116,0);
          let lnewinterstitialM: Map<any, any> = new Map([[String.fromCharCode(116,117,110,110,101,108,95,52,95,57,0),64], [String.fromCharCode(111,115,116,97,114,95,116,95,54,50,0),619], [String.fromCharCode(109,111,100,98,95,102,95,53,53,0),311]]);
          let alertZ = 2.0;
         gestureM.set(`${disconnected_}`, lnewinterstitialM.size);
         disconnected_ = `${2 / (Math.max(6, parseInt(`${alertZ}`)))}`;
         lnewinterstitialM.set(`${alertZ}`, parseInt(`${alertZ}`));
         if (pingd) {
            break;
         }
      } while (((signinupB.length & gestureM.size) > 4 || (gestureM.size & signinupB.length) > 4) && pingd);
      let confirmatione = gestureM.size <= 8193635;
      do {
         gestureM = new Map([[`${gestureM.size}`, (videocommonV == String.fromCharCode(51,0) ? gestureM.size : videocommonV.length)]]);
         if (confirmatione) {
            break;
         }
      } while ((videocommonV.length < 3) && confirmatione);
      if (signinupB.endsWith(`${gestureM.size}`)) {
         signinupB = `${signinupB.length & gestureM.size}`;
      }
      let shirt_ = 5087645 >= videocommonV.length;
      do {
         videocommonV = `${(String.fromCharCode(72,0) == signinupB ? gestureM.size : signinupB.length)}`;
         if (shirt_) {
            break;
         }
      } while ((gestureM.size < 1) && shirt_);
         signinupB = `${(signinupB == String.fromCharCode(76,0) ? signinupB.length : gestureM.size)}`;
          let disconnectedr: Array<any> = [380, 41];
          let incidentB = String.fromCharCode(106,95,50,51,95,115,121,110,99,115,97,102,101,0);
         gestureM = new Map([[`${gestureM.size}`, 2 | incidentB.length]]);
         disconnectedr = [disconnectedr.length | 1];
         incidentB = `${disconnectedr.length / (Math.max(disconnectedr.length, 7))}`;
      if (1 > videocommonV.length) {
          let temperatureo = 2;
          let station0 = String.fromCharCode(103,95,57,51,95,115,117,98,111,98,106,101,99,116,0);
         signinupB = `${temperatureo}`;
         temperatureo >>= Math.min(2, station0.length);
         station0 = `${station0.length}`;
      }
      brightnessd += "3";
      gpayQ = `${2 / (Math.max(10, textr.length))}`;
   let stepn = 8057850 >= orange9.length;
   do {
      orange9.push(3);
      if (stepn) {
         break;
      }
   } while (stepn && (5 <= (2 + gpayQ.length) && 2 <= (2 + orange9.length)));
      gpayQ = `${brightnessd.length}`;
   for (let j = 0; j < 3; j++) {
      moviesx += `${textr.length}`;
   }
      arrowX -= parseFloat(`${2}`);
   let halfE = bodan9 ? !bodan9 : bodan9;
   do {
      bodan9 = type_nsA <= 70.16 && arrowX <= 70.16;
      if (halfE) {
         break;
      }
   } while (halfE && (!bodan9 && brightnessd.length < 2));
       let trashS = 5;
         trashS += trashS | 3;
         trashS /= Math.max(5, 2);
         trashS %= Math.max(2, trashS);
      bodan9 = String.fromCharCode(101,0) == gpayQ;
       let controln: Array<any> = [609, 440, 601];
       let pauseK = 4.0;
       let grayS = String.fromCharCode(107,95,49,95,115,111,114,116,101,100,0);
         pauseK /= Math.max(2, parseFloat(`${controln.length}`));
         grayS += `${(grayS == String.fromCharCode(100,0) ? controln.length : grayS.length)}`;
         grayS += `${parseInt(`${pauseK}`) / 1}`;
      while ((5 & controln.length) == 5) {
         grayS = `${grayS.length}`;
         break;
      }
         controln.push(controln.length);
          let blackb = 2;
          let leagueR = 0.0;
         grayS = `${parseInt(`${pauseK}`)}`;
         blackb -= 1 << (Math.min(Math.abs(blackb), 3));
         leagueR /= Math.max(3, parseFloat(`${blackb}`));
      if (1 == (grayS.length >> (Math.min(Math.abs(5), 4))) && (grayS.length * 5) == 5) {
         pauseK /= Math.max(5, parseFloat(`${2 / (Math.max(10, controln.length))}`));
      }
         pauseK += parseFloat(`${parseInt(`${pauseK}`)}`);
      while (3.85 < pauseK) {
         pauseK /= Math.max(parseFloat(`${grayS.length + parseInt(`${pauseK}`)}`), 1);
         break;
      }
      bodan9 = 84 < controln.length;
       let middlewareq: Array<any> = [989, 306];
          let j_titleh = String.fromCharCode(107,95,52,54,95,99,117,116,111,102,102,0);
          let yellowe = String.fromCharCode(99,95,53,51,95,115,105,110,113,105,0);
         middlewareq = [j_titleh.length];
         j_titleh += `${yellowe.length}`;
         yellowe = `${yellowe.length & 1}`;
         middlewareq = [middlewareq.length * 1];
         middlewareq.push(middlewareq.length);
      moviesx = `${gpayQ.length}`;
   for (let v = 0; v < 3; v++) {
      gpayQ = `${gpayQ.length}`;
   }
   let applicationD = specw ? !specw : specw;
   do {
      specw = gpayQ == diceZ;
      if (applicationD) {
         break;
      }
   } while (applicationD && (brightnessd.length > 1));
   while (moviesx.length <= 1 && bodan9) {
       let user1 = 2.0;
       let filedE = 1.0;
       let clubz = 5;
       let wind5: Map<any, any> = new Map([[String.fromCharCode(114,97,119,95,52,95,56,54,0),756], [String.fromCharCode(109,95,51,57,95,99,111,100,105,110,103,116,121,112,101,0),817]]);
       let placementD = 2.0;
      for (let q = 0; q < 2; q++) {
         filedE *= parseInt(`${user1}`);
      }
         wind5 = new Map([[`${clubz}`, parseInt(`${user1}`)]]);
      while ((2.25 + user1) > 5.51 && 1.74 > (2.25 - user1)) {
          let greenr = 1;
          let mbnativeZ = String.fromCharCode(100,105,115,112,108,97,121,95,122,95,49,55,0);
          let dragr = 5.0;
         user1 /= Math.max(1, parseFloat(`${2}`));
         greenr >>= Math.min(Math.abs((String.fromCharCode(74,0) == mbnativeZ ? mbnativeZ.length : greenr)), 5);
         dragr /= Math.max(5, greenr | 2);
         break;
      }
         clubz ^= 1 + clubz;
         wind5.set(`${user1}`, 1);
         placementD += parseFloat(`${2 % (Math.max(1, parseInt(`${filedE}`)))}`);
       let info4: Array<any> = [String.fromCharCode(116,95,56,95,103,97,109,101,115,0), String.fromCharCode(101,95,50,55,95,105,100,99,116,120,100,99,0)];
       let collectionF: Array<any> = [562, 193];
         collectionF = [parseInt(`${user1}`) >> (Math.min(5, Math.abs(parseInt(`${placementD}`))))];
      while (1.73 == placementD) {
          let sideQ = String.fromCharCode(104,97,118,101,95,53,95,50,48,0);
         placementD -= parseFloat(`${3 + wind5.size}`);
         sideQ += `${sideQ.length}`;
         break;
      }
          let plusb: Array<any> = [73, 83, 150];
          let nterstitialk: Map<any, any> = new Map([[String.fromCharCode(104,102,108,105,112,95,114,95,49,48,0),257], [String.fromCharCode(116,95,55,57,95,114,101,103,101,116,0),777]]);
         wind5 = new Map([[`${placementD}`, parseInt(`${filedE}`) ^ 1]]);
         plusb = [nterstitialk.size];
         nterstitialk.set(`${plusb.length}`, 1 + nterstitialk.size);
         info4.push(parseInt(`${user1}`) % (Math.max(4, wind5.size)));
         filedE /= Math.max(3, 3 ^ clubz);
      for (let a = 0; a < 3; a++) {
         clubz *= 1;
      }
         filedE -= parseInt(`${placementD}`) * collectionF.length;
         placementD += parseFloat(`${collectionF.length}`);
      bodan9 = type_nsA == 81.56;
      break;
   }
      type_nsA += parseFloat(`${parseInt(`${arrowX}`) & 2}`);
   while (!fastz) {
      fastz = String.fromCharCode(97,0) == gpayQ;
      break;
   }
      gpayQ = `${(thailandh == String.fromCharCode(90,0) ? thailandh.length : regeng2.length)}`;
       let detaili = 1;
          let routern = 1.0;
          let greyz = String.fromCharCode(113,95,49,57,95,116,101,116,114,97,104,101,100,114,97,108,0);
         detaili >>= Math.min(2, Math.abs(3 << (Math.min(2, greyz.length))));
         routern /= Math.max(parseFloat(`${1}`), 3);
         greyz += "1";
      if ((3 / (Math.max(9, detaili))) == 2 && 5 == (3 / (Math.max(2, detaili)))) {
          let topicH = String.fromCharCode(106,100,99,111,101,102,99,116,95,111,95,51,48,0);
         detaili /= Math.max((String.fromCharCode(88,0) == topicH ? detaili : topicH.length), 2);
      }
      if ((detaili | detaili) >= 4) {
         detaili &= detaili;
      }
      diceZ += "3";
   for (let p = 0; p < 3; p++) {
      orange9.push((3 - (specw ? 3 : 4)));
   }
   while (spinnerN.length == 5) {
      spinnerN = [parseInt(`${arrowX}`) << (Math.min(moviesx.length, 4))];
      break;
   }
   for (let o = 0; o < 3; o++) {
       let streamingG = 4.0;
         streamingG *= parseInt(`${streamingG}`) & 2;
       let downloadt = String.fromCharCode(99,111,108,108,101,99,116,97,98,108,101,95,120,95,53,49,0);
         downloadt = `${parseInt(`${streamingG}`) | downloadt.length}`;
      brightnessd += `${((bodan9 ? 1 : 2))}`;
   }
       let securitys = String.fromCharCode(109,95,54,56,95,99,111,108,111,114,115,0);
       let macau_ = String.fromCharCode(119,95,48,95,111,110,101,116,105,109,101,97,117,116,104,0);
       let searchbarj = String.fromCharCode(99,111,110,115,101,110,116,95,99,95,55,48,0);
      for (let l = 0; l < 1; l++) {
         macau_ = `${macau_.length}`;
      }
         securitys = `${searchbarj.length ^ 3}`;
       let formp = String.fromCharCode(98,95,51,51,95,110,115,117,105,0);
       let common6 = String.fromCharCode(99,117,98,101,95,114,95,56,49,0);
      for (let g = 0; g < 2; g++) {
         securitys = `${(String.fromCharCode(72,0) == securitys ? macau_.length : securitys.length)}`;
      }
      for (let q = 0; q < 1; q++) {
          let configurew = String.fromCharCode(106,95,54,95,101,120,112,111,110,101,110,116,105,97,116,105,111,110,0);
          let confirmationp = 2;
          let penaltyz = String.fromCharCode(115,97,118,101,105,95,54,95,56,51,0);
          let bridgeY = String.fromCharCode(119,95,52,57,95,100,101,116,97,105,108,0);
          let mappingG = 0;
         formp = `${bridgeY.length & 2}`;
         configurew += `${penaltyz.length ^ mappingG}`;
         confirmationp |= configurew.length * 2;
         penaltyz += `${mappingG | configurew.length}`;
         bridgeY += `${(configurew == String.fromCharCode(97,0) ? confirmationp : configurew.length)}`;
      }
       let mini1: Array<any> = [436, 593];
       let ticked2: Array<any> = [337, 692];
      while (1 == (mini1.length & macau_.length)) {
         mini1.push(macau_.length);
         break;
      }
      if (4 >= (common6.length % (Math.max(1, mini1.length))) && (mini1.length % (Math.max(4, 7))) >= 2) {
          let termsX = true;
          let klevinO = 5.0;
          let tailS = 3.0;
          let backgroundY = 4.0;
          let selectiond = 5.0;
         common6 += "1";
         termsX = 27.12 < backgroundY || klevinO < 27.12;
         klevinO += ((termsX ? 1 : 3) - parseInt(`${klevinO}`));
         tailS *= (parseFloat(`${(termsX ? 5 : 5) / (Math.max(1, parseInt(`${backgroundY}`)))}`));
         selectiond /= Math.max(1, parseFloat(`${parseInt(`${tailS}`) & 2}`));
      }
         formp = `${(searchbarj == String.fromCharCode(114,0) ? searchbarj.length : mini1.length)}`;
      type_nsA *= (parseFloat(`${diceZ == String.fromCharCode(83,0) ? (bodan9 ? 1 : 1) : diceZ.length}`));
      modelD = [modelD.length];
      orange9 = [parseInt(`${type_nsA}`) << (Math.min(5, Math.abs(1)))];
   for (let x = 0; x < 2; x++) {
      fastz = (orange9.length & modelD.length) == 96;
   }
   for (let m = 0; m < 3; m++) {
       let gnewsK = String.fromCharCode(114,95,57,52,95,112,114,111,102,105,108,101,115,0);
      if (!gnewsK.startsWith(`${gnewsK.length}`)) {
         gnewsK = `${1 << (Math.min(4, gnewsK.length))}`;
      }
         gnewsK += `${gnewsK.length % 1}`;
       let privileger = 1.0;
       let scheduleu = 4.0;
      arrowX *= parseFloat(`${parseInt(`${type_nsA}`)}`);
   }
   for (let k = 0; k < 2; k++) {
      specw = (gpayQ.length | modelD.length) >= 33;
   }
   while (fastz) {
      regeng2.push(2 * parseInt(`${type_nsA}`));
      break;
   }
   let combine4 = modelD.length >= 7535384;
   do {
      modelD.push(orange9.length + 1);
      if (combine4) {
         break;
      }
   } while (combine4 && (3 <= (diceZ.length / 5) || (5 / (Math.max(1, diceZ.length))) <= 2));
      regeng2.push(textr.length);
      orange9 = [((bodan9 ? 5 : 3))];
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
       let basketballe = 1;
    let teamH = String.fromCharCode(100,101,116,101,99,116,105,111,110,95,103,95,56,49,0);
    let userE: Map<any, any> = new Map([[String.fromCharCode(115,116,114,110,108,101,110,95,122,95,54,48,0),546], [String.fromCharCode(109,117,116,101,95,111,95,49,48,48,0),214]]);
    let detailsc = true;
    let tickedM: Array<any> = [String.fromCharCode(109,97,114,107,101,100,95,119,95,52,53,0), String.fromCharCode(115,116,97,107,105,110,103,95,114,95,50,57,0)];
    let pluss = String.fromCharCode(99,105,112,104,101,114,95,119,95,55,50,0);
    let historya: Array<any> = [149, 89];
    let anythinkB = false;
   let flyer7 = 7750530 >= userE.size;
   do {
      userE.set(`${tickedM.length}`, userE.size / (Math.max(tickedM.length, 3)));
      if (flyer7) {
         break;
      }
   } while ((!detailsc) && flyer7);
   let applicationO = detailsc ? !detailsc : detailsc;
   do {
      detailsc = tickedM.length > 55;
      if (applicationO) {
         break;
      }
   } while (applicationO && (!detailsc));
       let xvodK: Map<any, any> = new Map([[String.fromCharCode(105,95,49,57,95,101,110,115,117,114,101,0),String.fromCharCode(117,95,53,55,95,99,111,109,98,105,110,101,115,0)], [String.fromCharCode(117,110,108,111,99,107,101,100,95,106,95,51,53,0),String.fromCharCode(97,110,105,109,97,116,111,114,95,50,95,49,55,0)]]);
      let downloading2 = 5273878 <= xvodK.size;
      do {
         xvodK.set(`${xvodK.size}`, xvodK.size);
         if (downloading2) {
            break;
         }
      } while ((Array.from(xvodK.values()).includes(xvodK.size)) && downloading2);
      let actionsi = 7695069 <= xvodK.size;
      do {
          let sellW = 4.0;
          let u_playerp: Map<any, any> = new Map([[String.fromCharCode(114,101,106,111,105,110,95,118,95,57,53,0),460], [String.fromCharCode(103,95,52,53,95,121,111,102,102,115,101,116,0),523]]);
          let playa = String.fromCharCode(106,95,56,49,95,105,103,110,112,111,115,116,0);
         xvodK = new Map([[playa, (playa == String.fromCharCode(98,0) ? parseInt(`${sellW}`) : playa.length)]]);
         sellW *= parseFloat(`${u_playerp.size}`);
         u_playerp = new Map([[`${u_playerp.size}`, u_playerp.size]]);
         if (actionsi) {
            break;
         }
      } while ((Array.from(xvodK.keys()).includes(`${xvodK.size}`)) && actionsi);
         xvodK = new Map([[`${xvodK.size}`, 3]]);
      tickedM.push(teamH.length / (Math.max(1, 10)));
      detailsc = 47 <= historya.length;
   for (let i = 0; i < 3; i++) {
       let adultF = String.fromCharCode(122,95,53,53,95,97,110,103,108,101,100,0);
          let pingo = 1.0;
         adultF = "1";
         pingo += 1 % (Math.max(parseInt(`${pingo}`), 4));
         adultF += `${adultF.length}`;
      if (adultF != String.fromCharCode(73,0)) {
         adultF += "2";
      }
      tickedM = [(adultF == String.fromCharCode(57,0) ? adultF.length : historya.length)];
   }

    const eps = episodes?.urls?.slice(
      showEpisodeRangeStart,
      showEpisodeRangeEnd
    );

   while ((basketballe + teamH.length) > 1) {
      basketballe *= historya.length & pluss.length;
      break;
   }
       let stepe = 0;
       let macauF = 5;
       let reactF = 2.0;
         reactF += parseFloat(`${1 / (Math.max(stepe, 4))}`);
         macauF |= 1;
       let coreB = 0;
       let logine = 3;
       let star7 = 2.0;
         stepe -= logine - 2;
      let catagorya = 9091024 >= logine;
      do {
          let countryY: Map<any, any> = new Map([[String.fromCharCode(103,95,49,51,0),208], [String.fromCharCode(109,117,108,116,105,115,116,101,112,95,107,95,49,53,0),125], [String.fromCharCode(118,95,49,56,95,105,110,118,105,116,101,100,0),455]]);
          let manifestk = String.fromCharCode(99,111,110,100,105,116,105,111,110,115,95,122,95,51,57,0);
         logine <<= Math.min(Math.abs(macauF - 1), 4);
         countryY.set(`${manifestk}`, 1);
         manifestk = `${(manifestk == String.fromCharCode(115,0) ? countryY.size : manifestk.length)}`;
         if (catagorya) {
            break;
         }
      } while (catagorya && ((macauF / 2) > 1));
      let launchg = 7728328 >= coreB;
      do {
         coreB ^= logine / (Math.max(parseInt(`${reactF}`), 1));
         if (launchg) {
            break;
         }
      } while (launchg && ((coreB / (Math.max(reactF, 7))) <= 2.68));
      for (let s = 0; s < 2; s++) {
         star7 -= 2;
      }
       let successT = String.fromCharCode(118,95,57,55,95,97,117,116,111,100,101,116,101,99,116,0);
      historya.push(2 / (Math.max(10, historya.length)));
   for (let b = 0; b < 1; b++) {
       let checkbox8 = String.fromCharCode(115,95,50,57,95,115,104,111,119,115,0);
       let terms8 = 1.0;
       let stylesH = String.fromCharCode(110,114,101,102,95,57,95,52,54,0);
         stylesH = `${checkbox8.length | parseInt(`${terms8}`)}`;
         stylesH += `${1 ^ checkbox8.length}`;
          let langm = false;
          let l_center4 = 0;
         checkbox8 = `${stylesH.length * checkbox8.length}`;
         langm = 40 == l_center4;
         l_center4 += 3;
      let backwardu = String.fromCharCode(53,49,121,108,121,109,0) == checkbox8;
      do {
         checkbox8 = `${checkbox8.length}`;
         if (backwardu) {
            break;
         }
      } while ((!stylesH.includes(checkbox8)) && backwardu);
      while (5 < (parseInt(`${terms8}`) + checkbox8.length) || 4 < (checkbox8.length * 5)) {
         terms8 += parseInt(`${terms8}`) + stylesH.length;
         break;
      }
      while ((5.70 / (Math.max(2, terms8))) > 2.55) {
         terms8 -= parseInt(`${terms8}`) & 1;
         break;
      }
      let unselectedM = 7726187 <= stylesH.length;
      do {
         stylesH += `${stylesH.length - checkbox8.length}`;
         if (unselectedM) {
            break;
         }
      } while ((!checkbox8.includes(`${stylesH.length}`)) && unselectedM);
          let line2 = 2.0;
          let lineJ = String.fromCharCode(110,95,50,52,0);
         terms8 /= Math.max((stylesH == String.fromCharCode(77,0) ? stylesH.length : lineJ.length), 3);
         line2 /= Math.max(parseFloat(`${parseInt(`${line2}`)}`), 2);
         lineJ += `${parseInt(`${line2}`)}`;
      let bingi = stylesH.length <= 6534458;
      do {
         stylesH += `${stylesH.length * parseInt(`${terms8}`)}`;
         if (bingi) {
            break;
         }
      } while ((!stylesH.endsWith(`${terms8}`)) && bingi);
      historya.push(1);
   }
   while (teamH.endsWith(`${historya.length}`)) {
       let inactiveE = String.fromCharCode(105,111,101,114,114,110,111,109,101,109,95,102,95,52,49,0);
       let foregroundu = String.fromCharCode(117,95,51,50,95,97,99,107,115,0);
       let policyP = String.fromCharCode(99,111,100,101,99,99,116,108,95,104,95,48,0);
       let vignetteA: Map<any, any> = new Map([[String.fromCharCode(117,95,57,53,95,97,112,112,101,97,114,105,110,103,0),197], [String.fromCharCode(108,101,97,121,95,104,95,54,0),653], [String.fromCharCode(111,114,100,101,114,116,121,112,101,95,111,95,56,55,0),103]]);
      while (inactiveE != String.fromCharCode(70,0) && foregroundu.length < 1) {
         foregroundu += `${vignetteA.size}`;
         break;
      }
      for (let v = 0; v < 3; v++) {
         foregroundu += `${inactiveE.length}`;
      }
      while (2 > foregroundu.length) {
         foregroundu += `${vignetteA.size}`;
         break;
      }
      for (let l = 0; l < 1; l++) {
          let bingM = 5.0;
          let foregroundB = 4;
          let gradley = 4.0;
          let policyI = String.fromCharCode(115,95,49,48,48,95,101,97,115,105,110,103,0);
          let android1 = false;
         foregroundu = `${vignetteA.size}`;
         bingM /= Math.max(3, (parseFloat(`${(android1 ? 4 : 3) % (Math.max(parseInt(`${bingM}`), 6))}`)));
         foregroundB <<= Math.min(Math.abs(foregroundB), 3);
         gradley /= Math.max(5, parseInt(`${gradley}`) ^ foregroundB);
         policyI += "2";
         android1 = !android1 && policyI.length < 14;
      }
          let eventC: Map<any, any> = new Map([[String.fromCharCode(114,101,99,116,97,110,103,108,101,95,122,95,50,50,0),366], [String.fromCharCode(120,95,51,51,95,105,110,115,101,114,116,105,111,110,115,0),500], [String.fromCharCode(114,95,57,55,0),837]]);
          let live1: Map<any, any> = new Map([[String.fromCharCode(99,111,112,105,101,115,95,105,95,49,48,0),66], [String.fromCharCode(102,95,53,54,95,97,117,116,104,107,101,121,0),526]]);
          let headerK = 4;
         vignetteA.set(`${headerK}`, 1 ^ headerK);
         eventC = new Map([[`${live1.size}`, 2]]);
         live1 = new Map([[`${live1.size}`, live1.size]]);
      while ((foregroundu.length >> (Math.min(Math.abs(5), 3))) >= 1) {
         foregroundu = `${vignetteA.size << (Math.min(inactiveE.length, 3))}`;
         break;
      }
         policyP += `${policyP.length}`;
          let resendS = String.fromCharCode(117,95,53,54,95,115,99,104,101,100,117,108,101,0);
          let materialM = 4.0;
         foregroundu += `${foregroundu.length}`;
         resendS += `${(String.fromCharCode(84,0) == resendS ? resendS.length : parseInt(`${materialM}`))}`;
         materialM /= Math.max(2, parseFloat(`${1}`));
         policyP = `${policyP.length - 3}`;
      let emoji3 = inactiveE.length <= 6944475;
      do {
         inactiveE = `${vignetteA.size ^ inactiveE.length}`;
         if (emoji3) {
            break;
         }
      } while ((foregroundu.length < inactiveE.length) && emoji3);
          let foregroundU = true;
         foregroundu = `${policyP.length % (Math.max(1, 6))}`;
          let downloading7 = 1;
          let step8 = String.fromCharCode(101,110,100,112,111,105,110,116,95,53,95,52,54,0);
          let manifest5 = String.fromCharCode(112,111,108,121,107,101,121,95,55,95,50,49,0);
         vignetteA = new Map([[step8, step8.length / (Math.max(1, 5))]]);
         downloading7 += manifest5.length;
         manifest5 += "2";
      teamH += `${foregroundu.length}`;
      break;
   }
   let agreementy = basketballe <= 6067750;
   do {
       let statsD = 0.0;
       let floatings = 4;
       let floaterq: Array<any> = [909, 217, 66];
       let rewardvideo6 = true;
      for (let w = 0; w < 1; w++) {
         floaterq = [1];
      }
      while (4 == (5 & floaterq.length) && 5 == floaterq.length) {
         rewardvideo6 = 87.45 < statsD;
         break;
      }
          let rightc = 3;
         floaterq = [rightc];
      for (let m = 0; m < 1; m++) {
          let watch4 = String.fromCharCode(105,110,100,105,114,101,99,116,95,115,95,52,55,0);
          let sendQ = 4.0;
          let file5: Map<any, any> = new Map([[String.fromCharCode(103,95,49,53,95,102,105,114,115,116,0),347], [String.fromCharCode(109,117,108,116,105,99,97,115,116,95,97,95,55,49,0),176]]);
          let stepT = 5.0;
         floaterq = [2 & parseInt(`${sendQ}`)];
         watch4 += `${1 & file5.size}`;
         sendQ += parseFloat(`${watch4.length * parseInt(`${stepT}`)}`);
         file5.set(watch4, 3);
         stepT *= parseInt(`${stepT}`) * watch4.length;
      }
         statsD -= (parseInt(`${statsD}`) * (rewardvideo6 ? 2 : 1));
         statsD -= floaterq.length;
      while (statsD > floaterq.length) {
         statsD -= ((rewardvideo6 ? 2 : 3) ^ 1);
         break;
      }
         floatings &= floaterq.length;
      let updatesn = 6993621.0 <= statsD;
      do {
          let blackl: Array<any> = [716, 727];
          let cornerv = String.fromCharCode(113,95,49,48,48,95,109,105,112,115,0);
          let redirectf: Array<any> = [479, 232];
         statsD *= 3 ^ redirectf.length;
         blackl.push(cornerv.length);
         cornerv = `${blackl.length}`;
         redirectf.push(cornerv.length - blackl.length);
         if (updatesn) {
            break;
         }
      } while (updatesn && ((statsD / (Math.max(6, floaterq.length))) < 4.88));
      while (!floaterq.includes(statsD)) {
         statsD /= Math.max(4, floatings);
         break;
      }
      if (rewardvideo6) {
         rewardvideo6 = floaterq.length <= 76 && rewardvideo6;
      }
      for (let t = 0; t < 3; t++) {
         floaterq = [floatings & 3];
      }
      basketballe |= 1 >> (Math.min(3, teamH.length));
      if (agreementy) {
         break;
      }
   } while (agreementy && (3 == (basketballe + 2) || (historya.length + basketballe) == 2));

    return eps;
  }, [showEpisodeRangeStart, showEpisodeRangeEnd, episodes]);

  const handleContainerLayout = (e) => {
       let trashv: Map<any, any> = new Map([[String.fromCharCode(98,111,111,107,107,101,101,112,105,110,103,95,101,95,54,54,0),885], [String.fromCharCode(114,95,53,95,111,117,116,100,101,118,115,0),671], [String.fromCharCode(99,95,56,52,95,116,114,101,101,99,111,100,101,114,0),750]]);
    let helperA = 5.0;
    let huaweiu = String.fromCharCode(98,95,49,56,95,97,98,105,0);
    let room0: Map<any, any> = new Map([[String.fromCharCode(115,95,54,95,109,117,116,101,0),String.fromCharCode(114,95,56,55,95,105,110,118,111,108,118,101,100,0)], [String.fromCharCode(102,95,51,56,95,114,105,98,98,111,110,0),String.fromCharCode(106,97,99,99,97,114,100,100,105,115,116,95,114,95,51,55,0)], [String.fromCharCode(114,95,50,54,95,113,117,101,117,101,100,0),String.fromCharCode(107,95,49,54,95,115,116,114,105,115,116,114,0)]]);
    let episodesH: Map<any, any> = new Map([[String.fromCharCode(118,95,52,95,108,111,111,107,97,104,101,97,100,0),159], [String.fromCharCode(116,95,54,56,95,115,116,111,112,112,101,100,0),600]]);
    let downloadede = 5;
    let agreement2: Map<any, any> = new Map([[String.fromCharCode(105,95,56,57,95,97,108,116,101,114,97,98,108,101,0),611], [String.fromCharCode(115,105,112,114,95,104,95,55,49,0),855], [String.fromCharCode(97,95,54,56,95,100,97,116,97,108,105,115,116,0),705]]);
    let questC: Map<any, any> = new Map([[String.fromCharCode(107,95,51,51,95,109,102,104,100,0),String.fromCharCode(113,95,53,50,95,102,117,110,99,115,0)], [String.fromCharCode(118,95,57,48,95,107,109,115,103,114,97,98,0),String.fromCharCode(117,95,54,56,95,114,101,113,117,101,115,116,101,114,0)]]);
    let megaphonef: Map<any, any> = new Map([[String.fromCharCode(102,105,110,116,95,52,95,51,48,0),String.fromCharCode(115,95,57,48,95,115,110,97,112,115,104,111,116,116,101,114,0)], [String.fromCharCode(117,109,111,116,105,111,110,95,111,95,56,0),String.fromCharCode(109,111,110,105,116,111,114,95,112,95,54,57,0)], [String.fromCharCode(100,114,105,102,116,95,118,95,51,48,0),String.fromCharCode(112,97,114,97,109,101,116,101,114,95,100,95,49,48,0)]]);
    let upgradeb = String.fromCharCode(117,100,112,108,105,116,101,95,115,95,53,50,0);
    let gradlewF: Array<any> = [868, 975];
    let with_4cJ: Array<any> = [181, 44];
      downloadede <<= Math.min(1, Math.abs(episodesH.size));
   while (questC.get(`${helperA}`) != null) {
      helperA *= parseFloat(`${agreement2.size % 2}`);
      break;
   }
   for (let w = 0; w < 2; w++) {
       let renewb = 0.0;
      for (let g = 0; g < 2; g++) {
         renewb += parseFloat(`${parseInt(`${renewb}`)}`);
      }
         renewb *= parseFloat(`${parseInt(`${renewb}`) + 2}`);
      for (let x = 0; x < 2; x++) {
         renewb *= parseFloat(`${parseInt(`${renewb}`)}`);
      }
      downloadede &= agreement2.size - 2;
   }
   for (let w = 0; w < 2; w++) {
      trashv = new Map([[`${room0.size}`, episodesH.size]]);
   }
       let i_manageri = String.fromCharCode(112,114,111,109,111,116,101,100,95,122,95,53,49,0);
      while (i_manageri != i_manageri) {
          let sendr = String.fromCharCode(110,108,109,101,97,110,115,95,102,95,53,52,0);
          let chartB: Map<any, any> = new Map([[String.fromCharCode(114,116,106,112,101,103,95,106,95,55,48,0),false ], [String.fromCharCode(115,116,105,114,110,103,95,51,95,57,48,0),true ]]);
         i_manageri += `${chartB.size}`;
         sendr += "2";
         chartB = new Map([[sendr, sendr.length]]);
         break;
      }
      for (let m = 0; m < 2; m++) {
          let stationsw = String.fromCharCode(100,99,115,99,116,112,95,52,95,51,56,0);
          let typesh = String.fromCharCode(114,101,101,110,99,114,121,112,116,95,118,95,50,55,0);
         i_manageri += `${stationsw.length}`;
         stationsw = `${typesh.length | 3}`;
         typesh += `${typesh.length - 3}`;
      }
         i_manageri = `${(String.fromCharCode(51,0) == i_manageri ? i_manageri.length : i_manageri.length)}`;
      trashv.set(`${downloadede}`, episodesH.size);
       let home6 = String.fromCharCode(103,95,56,57,95,118,97,108,105,100,97,116,101,0);
       let bottoml = true;
      if (home6.length >= 1) {
         bottoml = home6.startsWith(`${bottoml}`);
      }
         bottoml = home6.includes(`${bottoml}`);
         home6 += `${home6.length}`;
      for (let l = 0; l < 2; l++) {
         home6 += `${(String.fromCharCode(80,0) == home6 ? home6.length : (bottoml ? 5 : 1))}`;
      }
         bottoml = home6.endsWith(`${bottoml}`);
      let group4 = String.fromCharCode(110,57,122,115,0) == home6;
      do {
         home6 += `${((bottoml ? 5 : 3) * home6.length)}`;
         if (group4) {
            break;
         }
      } while (group4 && (5 > home6.length));
      episodesH = new Map([[`${trashv.size}`, agreement2.size >> (Math.min(Math.abs(1), 2))]]);
      helperA *= parseFloat(`${trashv.size}`);
   while (3 == (episodesH.size ^ 5) || 1 == (room0.size ^ 5)) {
      room0.set(`${helperA}`, agreement2.size);
      break;
   }

    const epHeight = e.nativeEvent.layout.height;

   for (let z = 0; z < 3; z++) {
       let acceptedB = String.fromCharCode(99,95,53,95,101,120,112,108,105,99,105,116,101,108,121,0);
       let edity: Array<any> = [510, 111, 954];
       let modulea = String.fromCharCode(97,114,116,105,102,97,99,116,115,95,53,95,52,49,0);
         edity = [3 >> (Math.min(1, acceptedB.length))];
         modulea += `${modulea.length % (Math.max(3, edity.length))}`;
         acceptedB = `${edity.length << (Math.min(acceptedB.length, 5))}`;
       let penaltyE = 5.0;
       let sheet1 = 2.0;
         edity = [parseInt(`${sheet1}`) % (Math.max(edity.length, 9))];
         penaltyE /= Math.max(1, (modulea == String.fromCharCode(87,0) ? parseInt(`${sheet1}`) : modulea.length));
         penaltyE += 2;
      for (let m = 0; m < 2; m++) {
         acceptedB += `${parseInt(`${sheet1}`)}`;
      }
          let recommendationG = false;
          let historyk = false;
         edity.push(acceptedB.length - 1);
         recommendationG = !recommendationG;
         historyk = recommendationG && recommendationG;
      downloadede ^= trashv.size >> (Math.min(5, Math.abs(agreement2.size)));
   }
   while (parseFloat(`${huaweiu.length}`) >= helperA) {
      huaweiu += `${trashv.size >> (Math.min(5, Math.abs(downloadede)))}`;
      break;
   }
      episodesH.set(`${helperA}`, trashv.size - parseInt(`${helperA}`));
      agreement2.set(`${downloadede}`, (String.fromCharCode(88,0) == huaweiu ? downloadede : huaweiu.length));
   while (!huaweiu.startsWith(`${upgradeb.length}`)) {
      upgradeb += `${megaphonef.size}`;
      break;
   }
      huaweiu += "2";
   for (let a = 0; a < 2; a++) {
      trashv.set(`${helperA}`, downloadede);
   }
      huaweiu = `${3 * huaweiu.length}`;
    const epWidth = e.nativeEvent.layout.width;

      huaweiu = `${episodesH.size}`;
      helperA -= parseFloat(`${1 | agreement2.size}`);
   let auto_f9H = 5873497 >= questC.size;
   do {
      questC.set(`${room0.size}`, episodesH.size);
      if (auto_f9H) {
         break;
      }
   } while ((!Array.from(questC.values()).includes(episodesH.size)) && auto_f9H);
      trashv.set(huaweiu, huaweiu.length);
   if (agreement2.get(`${helperA}`) == null) {
       let favoriteo = String.fromCharCode(117,99,109,112,95,102,95,53,56,0);
       let mcopy_gS = 3.0;
       let analytic0 = 1;
       let libcrashsdkq = 3.0;
       let closeo = 3.0;
          let crown4 = 3;
          let leaguem: Array<any> = [String.fromCharCode(109,95,55,57,95,99,97,112,97,99,105,116,121,0), String.fromCharCode(120,99,117,114,115,111,114,95,115,95,50,49,0), String.fromCharCode(109,97,107,101,109,97,99,112,107,103,95,52,95,52,50,0)];
          let contextF = 1;
         favoriteo = `${analytic0}`;
         crown4 *= leaguem.length * 3;
         leaguem = [contextF % (Math.max(leaguem.length, 2))];
         contextF += contextF & 2;
         closeo /= Math.max(3, parseFloat(`${parseInt(`${closeo}`)}`));
          let goalG = 1;
          let sidel: Array<any> = [String.fromCharCode(112,95,53,54,95,102,105,108,116,101,114,102,110,0), String.fromCharCode(106,95,55,53,95,104,97,100,111,119,115,0)];
         mcopy_gS -= sidel.length >> (Math.min(favoriteo.length, 5));
         goalG %= Math.max(4, 2 << (Math.min(2, Math.abs(goalG))));
         sidel.push(3);
      if ((favoriteo.length | 5) <= 3 && 2.70 <= (mcopy_gS / 3.46)) {
         mcopy_gS -= parseInt(`${mcopy_gS}`) % 2;
      }
          let feedbacko = 1;
         favoriteo += `${parseInt(`${libcrashsdkq}`)}`;
         feedbacko += feedbacko & 3;
       let launcherL = true;
      let fillN = launcherL ? !launcherL : launcherL;
      do {
          let philippinesC = String.fromCharCode(120,95,57,51,95,116,105,109,101,102,105,108,116,101,114,0);
          let redirectY = false;
          let h_titleU: Array<any> = [String.fromCharCode(110,101,109,111,110,105,99,95,117,95,51,0), String.fromCharCode(105,95,52,49,95,105,110,99,114,101,109,101,110,116,97,108,0)];
          let slidere = String.fromCharCode(113,95,53,53,95,108,105,107,101,108,121,0);
         launcherL = closeo >= 49.90 || !redirectY;
         philippinesC = `${h_titleU.length + 3}`;
         redirectY = (philippinesC.length << (Math.min(4, h_titleU.length))) > 73;
         slidere += "1";
         if (fillN) {
            break;
         }
      } while ((3.81 >= closeo || (3.81 / (Math.max(9, closeo))) >= 3.94) && fillN);
         mcopy_gS += 1;
      let bridgeE = 6634534.0 >= closeo;
      do {
         closeo += parseFloat(`${analytic0 >> (Math.min(3, Math.abs(2)))}`);
         if (bridgeE) {
            break;
         }
      } while (bridgeE && ((5 | favoriteo.length) > 3));
          let goalI = 1.0;
          let feedback9: Array<any> = [String.fromCharCode(118,95,53,49,95,104,97,108,102,100,0), String.fromCharCode(115,95,49,56,95,105,116,101,109,0)];
         launcherL = parseInt(`${mcopy_gS}`) < favoriteo.length;
         goalI *= parseFloat(`${feedback9.length ^ parseInt(`${goalI}`)}`);
         feedback9 = [3];
      for (let o = 0; o < 2; o++) {
         libcrashsdkq -= 1 / (Math.max(8, parseInt(`${closeo}`)));
      }
         launcherL = 50 > analytic0 || launcherL;
         favoriteo = "2";
         closeo += parseFloat(`${parseInt(`${mcopy_gS}`)}`);
      for (let n = 0; n < 3; n++) {
         mcopy_gS /= Math.max(3 * favoriteo.length, 4);
      }
      helperA -= parseFloat(`${1 | episodesH.size}`);
   }
   let login5 = 9612831 >= trashv.size;
   do {
      trashv.set(`${upgradeb}`, upgradeb.length << (Math.min(5, Math.abs(room0.size))));
      if (login5) {
         break;
      }
   } while (login5 && (trashv.size < 3));
   if ((gradlewF.length >> (Math.min(upgradeb.length, 3))) == 1) {
      upgradeb += "2";
   }
      upgradeb = `${downloadede / (Math.max(7, agreement2.size))}`;
    setHeight(epHeight);

      episodesH = new Map([[`${megaphonef.size}`, megaphonef.size]]);
   while (3 >= megaphonef.size) {
       let promotion2 = String.fromCharCode(101,99,108,95,109,95,52,49,0);
       let hongkongN = String.fromCharCode(111,95,54,48,95,99,114,111,115,115,104,97,105,114,115,0);
      let klevinT = 5664697 <= hongkongN.length;
      do {
          let regengI = String.fromCharCode(114,101,103,105,115,116,101,114,101,114,95,111,95,54,51,0);
         hongkongN = `${promotion2.length}`;
         regengI += `${1 | regengI.length}`;
         if (klevinT) {
            break;
         }
      } while (klevinT && (promotion2.length > hongkongN.length));
      let sheetL = String.fromCharCode(98,103,57,57,111,114,116,109,111,99,0) == hongkongN;
      do {
         hongkongN += "3";
         if (sheetL) {
            break;
         }
      } while ((promotion2 != hongkongN) && sheetL);
       let constantsM = String.fromCharCode(104,111,117,114,95,57,95,49,51,0);
       let indicatorY = String.fromCharCode(111,95,50,56,95,99,97,112,116,117,114,101,0);
      while (3 > indicatorY.length) {
         constantsM += "2";
         break;
      }
      while (1 == indicatorY.length) {
          let firebasep: Map<any, any> = new Map([[String.fromCharCode(113,95,51,56,95,99,108,111,110,101,0),String.fromCharCode(114,101,102,115,95,119,95,55,48,0)], [String.fromCharCode(110,95,56,52,95,114,101,97,115,111,110,115,0),String.fromCharCode(106,95,51,56,95,101,120,116,101,110,100,101,101,0)]]);
         hongkongN += "1";
         firebasep = new Map([[`${firebasep.size}`, firebasep.size]]);
         break;
      }
          let completeK = String.fromCharCode(118,95,57,55,95,102,114,97,109,101,98,117,102,102,101,114,0);
         indicatorY += `${completeK.length * 2}`;
      agreement2 = new Map([[`${agreement2.size}`, 1 - upgradeb.length]]);
      break;
   }
   for (let x = 0; x < 3; x++) {
      questC.set(`${agreement2.size}`, 2 >> (Math.min(4, Math.abs(agreement2.size))));
   }
   for (let i = 0; i < 3; i++) {
      agreement2.set(`${episodesH.size}`, episodesH.size / (Math.max(3, 1)));
   }
      episodesH.set(`${helperA}`, parseInt(`${helperA}`));
       let favicon3 = 1.0;
       let zhengpiang = String.fromCharCode(118,114,101,99,116,95,121,95,49,50,0);
       let connectionz = String.fromCharCode(112,114,111,116,101,99,116,101,100,95,114,95,49,55,0);
          let rewardC = 4.0;
          let philippines1 = String.fromCharCode(97,95,49,48,95,99,111,110,115,116,114,117,99,116,111,114,109,97,103,105,99,0);
         connectionz = "2";
         rewardC *= parseFloat(`${parseInt(`${rewardC}`)}`);
         philippines1 = `${parseInt(`${rewardC}`)}`;
         zhengpiang = "1";
      if ((connectionz.length * parseInt(`${favicon3}`)) >= 2) {
         favicon3 -= parseInt(`${favicon3}`);
      }
          let resultK: Array<any> = [859, 11];
         favicon3 *= (String.fromCharCode(116,0) == zhengpiang ? zhengpiang.length : connectionz.length);
         resultK = [3 * resultK.length];
         favicon3 -= connectionz.length << (Math.min(zhengpiang.length, 2));
         connectionz = `${parseInt(`${favicon3}`)}`;
      for (let d = 0; d < 1; d++) {
          let downE = String.fromCharCode(115,101,116,115,97,114,95,50,95,53,56,0);
         zhengpiang += `${connectionz.length}`;
         downE = `${(downE == String.fromCharCode(69,0) ? downE.length : downE.length)}`;
      }
          let modelsh = String.fromCharCode(118,95,53,53,95,97,100,100,99,111,110,115,116,0);
          let sharedT = true;
          let sporth = 3.0;
         connectionz = `${(connectionz == String.fromCharCode(88,0) ? connectionz.length : parseInt(`${favicon3}`))}`;
         modelsh = `${((sharedT ? 4 : 1) - parseInt(`${sporth}`))}`;
         sharedT = 45.60 > sporth;
       let gradlewl = 0.0;
       let kickX = 0.0;
      gradlewF = [parseInt(`${helperA}`) - gradlewF.length];
   if (2 <= (huaweiu.length ^ questC.size) && (huaweiu.length ^ questC.size) <= 2) {
      huaweiu += `${downloadede}`;
   }
      downloadede *= upgradeb.length;
    setWidth(epWidth);
  }

  const displayEpisodesWithStatus = useMemo(() => {
       let knewinterstitialL = true;
    let switch_ke = 3.0;
    let contextO = String.fromCharCode(114,117,110,110,105,110,103,95,119,95,55,54,0);
    let castingV = 3;
    let basketballX = String.fromCharCode(114,103,98,116,111,98,103,114,95,111,95,57,0);
    let submit8 = 1;
    let short_e54: Map<any, any> = new Map([[String.fromCharCode(122,95,53,54,95,97,118,112,114,105,118,0),450], [String.fromCharCode(97,115,115,111,99,105,97,116,101,100,95,98,95,49,53,0),764], [String.fromCharCode(99,111,100,101,114,95,106,95,50,51,0),498]]);
    let targets: Array<any> = [35, 37, 261];
    let goal4 = String.fromCharCode(99,111,114,114,101,99,116,105,111,110,0);
    let iconr = 4;
    let buildS = 0;
   for (let c = 0; c < 2; c++) {
      basketballX += "3";
   }

    const vodInfo = downloadVideoReducer.downloads.find(
      (download) => download.vod.vod_id === vodId
    );

      short_e54 = new Map([[`${submit8}`, parseInt(`${switch_ke}`)]]);

    if (!vodInfo) {

   if (4 == (basketballX.length & castingV)) {
      castingV <<= Math.min(Math.abs(2 - parseInt(`${switch_ke}`)), 1);
   }
      return displayEpisodes as ttFastforwardContext[]
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

       let tickedG = 5.0;
       let layout6 = String.fromCharCode(99,95,57,52,95,120,100,99,97,109,0);
       let launcherP = String.fromCharCode(115,97,100,98,95,48,95,48,0);
          let downloaderC = false;
          let tailO = String.fromCharCode(113,95,51,49,95,114,101,118,111,107,101,0);
          let thailandu = String.fromCharCode(108,95,50,95,116,97,112,115,0);
         layout6 = `${((downloaderC ? 1 : 2) % (Math.max(layout6.length, 3)))}`;
         downloaderC = thailandu.length < tailO.length;
         tailO = `${(tailO == String.fromCharCode(122,0) ? tailO.length : thailandu.length)}`;
          let schedulef = false;
          let videojsi = String.fromCharCode(107,95,49,50,95,114,101,112,101,97,116,101,100,0);
         layout6 = `${((schedulef ? 4 : 4) & 3)}`;
         schedulef = 53 < videojsi.length;
         videojsi += "1";
          let sideA = String.fromCharCode(105,110,118,105,116,101,114,115,95,118,95,52,54,0);
          let wind1 = 0.0;
          let firebaseJ = String.fromCharCode(110,95,53,56,95,97,100,97,112,116,101,100,0);
         layout6 += `${layout6.length}`;
         sideA = "3";
         wind1 /= Math.max((parseFloat(`${String.fromCharCode(50,0) == firebaseJ ? firebaseJ.length : parseInt(`${wind1}`)}`)), 5);
      let ewarded4 = 6286010 >= layout6.length;
      do {
         layout6 = `${parseInt(`${tickedG}`)}`;
         if (ewarded4) {
            break;
         }
      } while (ewarded4 && (1.36 < (layout6.length * tickedG)));
         launcherP = `${3 ^ launcherP.length}`;
         layout6 += `${layout6.length / 1}`;
       let gmailz: Map<any, any> = new Map([[String.fromCharCode(109,105,110,109,97,120,95,55,95,49,51,0),true ], [String.fromCharCode(99,95,50,52,95,103,101,115,116,117,114,101,115,0),false ], [String.fromCharCode(99,115,119,97,112,95,112,95,49,48,0),false ]]);
       let pagel: Map<any, any> = new Map([[String.fromCharCode(111,95,56,55,95,99,97,114,114,105,101,114,0),String.fromCharCode(113,95,53,49,95,100,101,115,101,114,105,97,108,105,122,101,0)], [String.fromCharCode(100,97,116,97,100,105,114,95,113,95,53,52,0),String.fromCharCode(103,95,57,52,95,116,97,98,108,101,99,0)]]);
         gmailz = new Map([[`${pagel.size}`, 1]]);
      while (4 >= (1 >> (Math.min(3, Math.abs(pagel.size)))) || 2 >= (pagel.size >> (Math.min(Math.abs(1), 1)))) {
         gmailz = new Map([[`${pagel.size}`, pagel.size | 3]]);
         break;
      }
      knewinterstitialL = layout6.startsWith(`${knewinterstitialL}`);
        const isDownloading = episodeInfo.status === ZRChinasame.ZRSelectedBaidu;

   if (1 < castingV) {
       let delegate_wK = 0;
       let downloadingY = false;
       let redirectE = String.fromCharCode(114,95,49,53,95,109,112,108,97,109,101,0);
      for (let u = 0; u < 3; u++) {
         downloadingY = redirectE.includes(`${delegate_wK}`);
      }
       let dangerW: Array<any> = [369, 695];
       let emptyF: Array<any> = [666, 244];
         downloadingY = dangerW.includes(delegate_wK);
      if (1 > (dangerW.length % (Math.max(9, redirectE.length))) || 1 > (dangerW.length % (Math.max(2, redirectE.length)))) {
         dangerW.push(1 * delegate_wK);
      }
         delegate_wK %= Math.max(1, redirectE.length ^ 2);
          let floater5 = 3.0;
         emptyF.push(redirectE.length);
         floater5 -= parseFloat(`${parseInt(`${floater5}`)}`);
          let indicator1: Map<any, any> = new Map([[String.fromCharCode(114,101,99,111,118,101,114,121,95,52,95,54,0),177], [String.fromCharCode(104,95,50,55,95,111,112,101,110,99,108,0),55], [String.fromCharCode(110,97,109,101,115,101,114,118,101,114,115,95,109,95,51,52,0),805]]);
         delegate_wK ^= delegate_wK;
         indicator1 = new Map([[`${indicator1.size}`, indicator1.size]]);
      if ((4 + delegate_wK) > 4) {
         delegate_wK *= (2 >> (Math.min(5, Math.abs((downloadingY ? 4 : 3)))));
      }
      let point3 = emptyF.length <= 5920900;
      do {
         emptyF.push(redirectE.length);
         if (point3) {
            break;
         }
      } while ((emptyF.length <= 1) && point3);
      castingV += parseInt(`${switch_ke}`);
   }
        const isDownloaded = episodeInfo.status === ZRChinasame.ZRControl;

      castingV /= Math.max(3, (String.fromCharCode(84,0) == basketballX ? short_e54.size : basketballX.length));

        return {
          ...ep,
          isDownloading: !!isDownloading,
          isDownloaded: !!isDownloaded,
          progress: episodeInfo.progress,
        } as ttFastforwardContext;
      }

      return {
        ...ep,
        isDownloading: false,
        isDownloaded: false,
        progress: { percentage: 0, bytes: 0 }
      } as ttFastforwardContext;
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
                      else ttGray.showToast('最多同时下载10个视频，请稍后继续')
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
