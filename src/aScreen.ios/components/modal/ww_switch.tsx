import React, {
  useState,
  useMemo,
  memo,
  useEffect,
} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import { wwKsadStore } from '@type/ww_dycreator_result';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import SortAscIcon from '@static/images/overlayMatch.svg';
import SortDescIcon from '@static/images/binddatasRight.svg';
import BottomSheet from '../bottomSheet/ww_questicon_shielddone';

interface wwIndexDice {
  onConfirm: any;
  onCancel: any;
  episodes?: wwKsadStore;
  activeEpisode?: number;
  rangeSize?: number;
  isVisible: boolean;
  handleClose: any;
}
function VodEpisodeSelectionModal({
  onConfirm,
  onCancel,
  episodes,
  isVisible,
  handleClose,
  activeEpisode = 0,
  rangeSize = 50,
}: wwIndexDice) {
  const { colors, textVariants, spacing } = useTheme();
  const EPISODE_RANGE_SIZE = rangeSize;
  const insets = useSafeAreaInsets();
  const [sortBy, setSortBy] = useState('asc');
  const [currentIndex, setCurrentIndex] = useState(
    Math.floor(activeEpisode / EPISODE_RANGE_SIZE),
  );
  const showEpisodeRangeStart = useMemo(
    () => currentIndex * EPISODE_RANGE_SIZE,
    [activeEpisode, currentIndex],
  );
  const showEpisodeRangeEnd = useMemo(
    () =>
      Math.min(
        showEpisodeRangeStart + EPISODE_RANGE_SIZE,
        episodes
          ? episodes.url_count
          : showEpisodeRangeStart + EPISODE_RANGE_SIZE,
      ),
    [episodes, showEpisodeRangeStart],
  );
  const displayEpisodes = useMemo(() => {
       let leakchecker8 = 1.0;
    let iconscheduleV = 2.0;
    let sansQ: Array<any> = [String.fromCharCode(116,101,115,116,110,101,116,95,108,95,50,0), String.fromCharCode(115,117,114,102,97,99,101,115,0), String.fromCharCode(109,97,102,113,0)];
    let robotoM = 3.0;
    let libhermesz = true;
    let unreadW = 1.0;
    let imagesB = 2.0;
    let mailF = String.fromCharCode(112,95,57,51,95,109,99,111,109,112,0);
    let bridgeT = 4.0;
   while (2.88 >= robotoM) {
      robotoM += (parseFloat(`${parseInt(`${leakchecker8}`) / (Math.max(3, (libhermesz ? 4 : 2)))}`));
      break;
   }
      unreadW += parseInt(`${imagesB}`);
   while (2.65 < (unreadW / (Math.max(imagesB, 1))) || 3.87 < (2.65 / (Math.max(3, unreadW)))) {
       let tooltipsT = String.fromCharCode(119,101,108,115,101,110,99,95,52,95,55,51,0);
       let minivodJ = String.fromCharCode(105,110,116,114,112,0);
         minivodJ += "3";
       let privatechatbgN = String.fromCharCode(115,111,100,105,115,99,111,110,110,101,99,116,95,101,95,52,48,0);
       let default_xjT = String.fromCharCode(98,117,102,101,114,95,48,95,51,0);
       let privatechatbg0 = String.fromCharCode(106,95,49,55,95,103,101,110,101,114,105,99,0);
      if (minivodJ != String.fromCharCode(118,0)) {
          let libreactnativeblobl = 1.0;
          let activityn = 0;
         default_xjT += "3";
         libreactnativeblobl -= parseFloat(`${activityn}`);
         activityn >>= Math.min(Math.abs(2), 4);
      }
       let homed: Array<any> = [String.fromCharCode(114,103,98,116,111,121,118,0), String.fromCharCode(114,116,112,102,98,95,105,95,53,49,0), String.fromCharCode(102,108,111,97,116,105,110,103,95,55,95,56,49,0)];
       let trophyO = 4.0;
      imagesB /= Math.max(5, parseFloat(`${parseInt(`${robotoM}`) + 1}`));
      tooltipsT += `${1 + tooltipsT.length}`;
      break;
   }
   let borderless2 = unreadW <= 7827864.0;
   do {
       let manifestz: Map<any, any> = new Map([[String.fromCharCode(116,101,108,101,116,101,120,116,95,105,95,53,0),99], [String.fromCharCode(100,114,111,112,112,101,100,0),483]]);
       let bridgee = false;
         bridgee = null != manifestz.get(`${bridgee}`);
      if (!bridgee) {
          let custom4 = String.fromCharCode(109,115,118,115,100,101,112,101,110,100,0);
         manifestz = new Map([[`${manifestz.size}`, custom4.length + 3]]);
      }
       let renderA = 1.0;
      if (2 > manifestz.size) {
          let a_titleC = 4.0;
          let shirtx = 1.0;
         bridgee = renderA <= 73.28;
         a_titleC += parseInt(`${shirtx}`) + 3;
         shirtx -= parseInt(`${shirtx}`) ^ parseInt(`${a_titleC}`);
      }
       let transferF = false;
      let bodank = 9571043.0 <= renderA;
      do {
          let action1: Map<any, any> = new Map([[String.fromCharCode(112,117,98,108,105,99,105,116,121,0),false ], [String.fromCharCode(117,114,105,0),true ], [String.fromCharCode(105,95,57,51,0),true ]]);
          let iconuserf: Map<any, any> = new Map([[String.fromCharCode(99,117,115,116,111,109,105,122,101,95,52,95,57,49,0),970], [String.fromCharCode(99,105,112,104,101,114,116,101,120,116,95,57,95,53,51,0),984], [String.fromCharCode(109,101,116,104,111,100,115,0),723]]);
          let usernamet: Array<any> = [String.fromCharCode(98,95,50,55,95,114,101,100,115,112,97,114,107,0), String.fromCharCode(114,101,97,99,116,95,54,95,54,50,0), String.fromCharCode(114,97,109,112,117,112,95,117,95,57,57,0)];
         renderA += (parseFloat(`${(transferF ? 1 : 1) ^ parseInt(`${renderA}`)}`));
         action1.set(`${usernamet.length}`, usernamet.length);
         iconuserf.set(`${usernamet.length}`, usernamet.length % 2);
         if (bodank) {
            break;
         }
      } while (bodank && (!Array.from(manifestz.keys()).includes(`${renderA}`)));
      unreadW /= Math.max(parseInt(`${imagesB}`) / (Math.max(7, parseInt(`${unreadW}`))), 5);
      if (borderless2) {
         break;
      }
   } while (borderless2 && (!sansQ.includes(unreadW)));

    const eps = episodes?.urls?.slice(
      showEpisodeRangeStart,
      showEpisodeRangeEnd,
    );

   if ((4.55 * leakchecker8) > 4.40 && 4.64 > (4.55 * leakchecker8)) {
      iconscheduleV *= parseFloat(`${2}`);
   }
   for (let t = 0; t < 3; t++) {
      unreadW -= parseInt(`${imagesB}`);
   }
   while (libhermesz) {
      sansQ = [parseInt(`${iconscheduleV}`) ^ parseInt(`${unreadW}`)];
      break;
   }
   if ((imagesB - 2.12) > 4.60 || (sansQ.length / 4) > 4) {
       let refresho = String.fromCharCode(117,95,48,95,107,105,110,103,102,105,115,104,101,114,0);
       let templateprocessor0: Map<any, any> = new Map([[String.fromCharCode(103,101,111,98,116,97,103,0),String.fromCharCode(112,95,49,50,95,116,105,112,115,0)], [String.fromCharCode(118,95,49,51,95,99,112,117,105,100,0),String.fromCharCode(99,114,101,97,116,105,111,110,95,52,95,49,48,0)]]);
       let iconpipexpandq = 5.0;
       let update_1I = String.fromCharCode(103,101,110,102,105,108,101,115,95,115,95,54,51,0);
       let dacccfaabfbcbadeebddcabacdffdbK = String.fromCharCode(97,118,103,98,108,117,114,0);
      if ((5 + templateprocessor0.size) > 1 || 3 > (refresho.length + 5)) {
          let minivodE = 3.0;
          let hookP = false;
          let textK = String.fromCharCode(103,97,116,101,100,0);
          let disconnectedJ = String.fromCharCode(112,108,97,121,97,98,108,101,0);
         refresho += "2";
         minivodE /= Math.max(1, 3);
         hookP = (textK.length + disconnectedJ.length) == 44;
         textK += `${(textK == String.fromCharCode(88,0) ? textK.length : parseInt(`${minivodE}`))}`;
         disconnectedJ = "2";
      }
         update_1I += `${2 << (Math.min(2, update_1I.length))}`;
      for (let k = 0; k < 1; k++) {
         dacccfaabfbcbadeebddcabacdffdbK = `${(update_1I == String.fromCharCode(121,0) ? parseInt(`${iconpipexpandq}`) : update_1I.length)}`;
      }
      if (update_1I.includes(`${iconpipexpandq}`)) {
         iconpipexpandq /= Math.max(5, refresho.length | 3);
      }
       let navigationj = 4.0;
       let orangeclockc = 2.0;
         templateprocessor0 = new Map([[`${templateprocessor0.size}`, (refresho == String.fromCharCode(74,0) ? templateprocessor0.size : refresho.length)]]);
          let roundo = String.fromCharCode(112,116,105,111,110,115,0);
         templateprocessor0 = new Map([[`${orangeclockc}`, parseInt(`${iconpipexpandq}`)]]);
         roundo += "3";
         update_1I += `${templateprocessor0.size}`;
      let b_unlockw = navigationj <= 7247332.0;
      do {
          let str1 = String.fromCharCode(118,110,101,103,113,0);
          let moreE = 3.0;
          let final_oR = String.fromCharCode(115,111,109,101,0);
          let long_my = 1.0;
          let halffieldimaged = String.fromCharCode(109,95,53,48,95,112,114,101,102,105,120,101,100,0);
         navigationj -= parseFloat(`${parseInt(`${orangeclockc}`)}`);
         str1 = `${1 ^ final_oR.length}`;
         moreE -= parseInt(`${long_my}`);
         final_oR += `${str1.length + 2}`;
         long_my *= (parseFloat(`${String.fromCharCode(56,0) == str1 ? str1.length : parseInt(`${moreE}`)}`));
         halffieldimaged = `${final_oR.length << (Math.min(Math.abs(3), 1))}`;
         if (b_unlockw) {
            break;
         }
      } while (b_unlockw && (orangeclockc == navigationj));
         refresho = `${update_1I.length % (Math.max(8, parseInt(`${orangeclockc}`)))}`;
         dacccfaabfbcbadeebddcabacdffdbK = `${refresho.length - 1}`;
      for (let d = 0; d < 1; d++) {
         update_1I += `${templateprocessor0.size >> (Math.min(Math.abs(3), 2))}`;
      }
      let unewsshare9 = iconpipexpandq >= 5120165.0;
      do {
         iconpipexpandq -= 2 >> (Math.min(Math.abs(parseInt(`${iconpipexpandq}`)), 2));
         if (unewsshare9) {
            break;
         }
      } while (unewsshare9 && (2.33 <= iconpipexpandq));
         orangeclockc /= Math.max(parseFloat(`${parseInt(`${navigationj}`)}`), 4);
      while (refresho.includes(`${templateprocessor0.size}`)) {
         templateprocessor0 = new Map([[refresho, dacccfaabfbcbadeebddcabacdffdbK.length >> (Math.min(Math.abs(2), 2))]]);
         break;
      }
      sansQ = [1 << (Math.min(2, update_1I.length))];
   }
    if (sortBy === 'desc') {

      robotoM *= parseFloat(`${parseInt(`${unreadW}`)}`);
       let long_l71 = String.fromCharCode(104,95,49,52,95,112,97,103,101,110,111,0);
         long_l71 += `${2 >> (Math.min(3, long_l71.length))}`;
          let foregroundU = 3.0;
          let playercommonC = String.fromCharCode(99,111,109,112,101,110,115,97,116,101,95,52,95,54,55,0);
          let whitec: Array<any> = [342, 1, 367];
         long_l71 = `${playercommonC.length}`;
         foregroundU += whitec.length;
         playercommonC += `${parseInt(`${foregroundU}`) ^ 3}`;
         whitec.push(whitec.length * 2);
      for (let c = 0; c < 3; c++) {
         long_l71 = `${long_l71.length}`;
      }
      imagesB -= parseFloat(`${parseInt(`${robotoM}`)}`);
   while (libhermesz) {
      libhermesz = iconscheduleV <= 77.60;
      break;
   }
   while (imagesB >= 3.100) {
       let moreK = false;
      let livenodatabgimg2 = moreK ? !moreK : moreK;
      do {
         moreK = (moreK ? moreK : moreK);
         if (livenodatabgimg2) {
            break;
         }
      } while (livenodatabgimg2 && (!moreK));
      for (let r = 0; r < 2; r++) {
          let giftE = String.fromCharCode(116,114,97,110,115,99,101,105,118,101,114,115,0);
          let iconfeedbacko = 2;
          let predictionactivem = String.fromCharCode(104,95,53,55,95,115,104,105,102,116,115,0);
          let borderlessx: Map<any, any> = new Map([[String.fromCharCode(119,95,56,55,95,97,112,102,115,0),981], [String.fromCharCode(111,95,55,48,95,102,105,108,116,101,114,0),79], [String.fromCharCode(104,95,52,57,95,100,101,110,111,105,115,101,102,105,108,116,101,114,0),942]]);
          let privileged = 5;
         moreK = 87 >= giftE.length;
         giftE = `${iconfeedbacko | 2}`;
         iconfeedbacko %= Math.max(3, 1);
         predictionactivem = `${predictionactivem.length}`;
         borderlessx = new Map([[`${borderlessx.size}`, borderlessx.size + iconfeedbacko]]);
         privileged <<= Math.min(4, Math.abs(iconfeedbacko + borderlessx.size));
      }
          let typingp = String.fromCharCode(97,110,103,114,121,95,111,95,48,0);
         moreK = (((!moreK ? typingp.length : 42) << (Math.min(typingp.length, 3))) > 42);
      imagesB *= parseFloat(`${parseInt(`${unreadW}`) << (Math.min(sansQ.length, 5))}`);
      break;
   }
      eps?.reverse();
    }
    return eps;
  }, [showEpisodeRangeStart, showEpisodeRangeEnd, episodes, sortBy]);

  
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeEpisode]);

  const sort = () => {
       let show6: Map<any, any> = new Map([[String.fromCharCode(117,95,49,53,95,100,101,103,114,101,101,0),614], [String.fromCharCode(97,108,116,101,114,97,98,108,101,0),986]]);
    let componentsF: Array<any> = [String.fromCharCode(112,111,108,108,105,110,103,95,107,95,50,57,0), String.fromCharCode(119,105,100,103,101,116,95,99,95,49,51,0), String.fromCharCode(109,111,110,111,98,108,97,99,107,95,103,95,49,55,0)];
    let shrink8 = String.fromCharCode(105,110,118,101,114,116,101,100,95,98,95,50,51,0);
    let videojsT = true;
    let dependencyd = String.fromCharCode(109,95,51,54,95,103,117,105,100,101,115,0);
    let securityb = String.fromCharCode(104,95,49,54,95,116,114,97,107,0);
    let twitterl = 4;
    let orientationz = 2.0;
    let attributedstringF = 4.0;
    let libruntimeexecutorB = String.fromCharCode(112,114,111,103,114,101,115,115,101,115,0);
    let catagory3 = false;
    let x_manager6 = String.fromCharCode(110,95,54,51,95,101,97,115,101,0);
    let guidej = String.fromCharCode(112,95,48,95,109,117,108,0);
    let toponK = String.fromCharCode(109,117,108,97,100,100,95,99,95,56,54,0);
    let codeS = 2;
   let predictionactivef = 6803458 >= securityb.length;
   do {
       let halfQ = 5.0;
         halfQ *= parseInt(`${halfQ}`);
          let disconnectedM = String.fromCharCode(116,97,110,103,101,110,116,0);
          let desc0 = 5.0;
         halfQ -= parseInt(`${halfQ}`) | parseInt(`${desc0}`);
         disconnectedM += `${(disconnectedM == String.fromCharCode(90,0) ? disconnectedM.length : disconnectedM.length)}`;
         desc0 /= Math.max(1, parseFloat(`${disconnectedM.length + disconnectedM.length}`));
          let type_fa = String.fromCharCode(97,108,105,103,110,95,54,95,53,49,0);
          let libfb5 = 0.0;
          let langD = String.fromCharCode(102,95,57,57,95,97,108,116,0);
         halfQ += parseInt(`${halfQ}`) % (Math.max(1, type_fa.length));
         type_fa = `${(langD == String.fromCharCode(109,0) ? parseInt(`${libfb5}`) : langD.length)}`;
         libfb5 /= Math.max((parseFloat(`${String.fromCharCode(108,0) == langD ? parseInt(`${libfb5}`) : langD.length}`)), 1);
      securityb += `${componentsF.length}`;
      if (predictionactivef) {
         break;
      }
   } while ((videojsT) && predictionactivef);
      orientationz *= parseInt(`${attributedstringF}`);
   while (!libruntimeexecutorB.startsWith(`${videojsT}`)) {
       let inactivey = 4.0;
       let imagenetworkerrP: Map<any, any> = new Map([[String.fromCharCode(105,95,54,49,95,109,105,103,104,116,0),726], [String.fromCharCode(102,105,108,101,0),81], [String.fromCharCode(105,110,115,116,114,117,99,116,105,111,110,115,95,101,95,55,50,0),463]]);
       let goalK: Array<any> = [317, 132];
      if (4 >= (goalK.length & imagenetworkerrP.size) && (4 & goalK.length) >= 5) {
          let iconeditM = 1.0;
          let miniA = String.fromCharCode(118,95,55,49,95,111,112,116,103,114,111,117,112,0);
          let whitetickA = String.fromCharCode(114,111,111,116,95,49,95,52,49,0);
         goalK = [parseInt(`${iconeditM}`) >> (Math.min(5, Math.abs(2)))];
         iconeditM -= 2 - whitetickA.length;
         miniA += `${whitetickA.length % 1}`;
      }
          let static_bpF = String.fromCharCode(118,95,50,50,95,100,101,115,101,108,101,99,116,0);
          let binddatas4 = String.fromCharCode(101,115,99,97,112,105,110,103,95,121,95,51,48,0);
          let filedB = 0.0;
         imagenetworkerrP = new Map([[`${goalK.length}`, (binddatas4 == String.fromCharCode(68,0) ? goalK.length : binddatas4.length)]]);
         static_bpF += `${(String.fromCharCode(69,0) == static_bpF ? parseInt(`${filedB}`) : static_bpF.length)}`;
         filedB += parseFloat(`${static_bpF.length}`);
      while (1 < goalK.length) {
          let iconshareR = String.fromCharCode(99,111,100,105,110,103,0);
          let greytickD = false;
          let fnewarchdefaultsI: Array<any> = [String.fromCharCode(98,105,116,101,95,50,95,52,54,0), String.fromCharCode(119,95,52,53,95,112,97,108,101,116,116,101,0), String.fromCharCode(119,97,114,110,95,120,95,56,55,0)];
          let greyarrowupp = false;
         inactivey += parseFloat(`${1}`);
         iconshareR = `${(fnewarchdefaultsI.length >> (Math.min(2, Math.abs((greytickD ? 5 : 3)))))}`;
         greytickD = (((greytickD ? 81 : iconshareR.length) % (Math.max(iconshareR.length, 5))) > 81);
         fnewarchdefaultsI = [3];
         greyarrowupp = (fnewarchdefaultsI.length ^ iconshareR.length) > 41;
         break;
      }
         imagenetworkerrP = new Map([[`${imagenetworkerrP.size}`, goalK.length]]);
          let streamingI = String.fromCharCode(98,121,116,101,111,117,116,95,107,95,50,48,0);
         imagenetworkerrP.set(`${inactivey}`, 2 | parseInt(`${inactivey}`));
         streamingI += `${2 % (Math.max(10, streamingI.length))}`;
      while ((goalK.length << (Math.min(Math.abs(3), 5))) >= 4 && (imagenetworkerrP.size << (Math.min(Math.abs(3), 4))) >= 2) {
          let historyh = true;
          let greyarrowup8 = String.fromCharCode(116,115,101,113,0);
          let nativeexO = false;
         imagenetworkerrP.set(greyarrowup8, imagenetworkerrP.size);
         historyh = !nativeexO;
         greyarrowup8 = `${((historyh ? 4 : 3))}`;
         break;
      }
      if (3.71 >= (3.60 * inactivey)) {
         imagenetworkerrP.set(`${goalK.length}`, imagenetworkerrP.size - 1);
      }
         imagenetworkerrP = new Map([[`${imagenetworkerrP.size}`, goalK.length << (Math.min(Math.abs(2), 1))]]);
      if (imagenetworkerrP.get(`${inactivey}`) != null) {
          let suggestionY = 2;
         imagenetworkerrP.set(`${suggestionY}`, suggestionY / 2);
      }
      libruntimeexecutorB += `${componentsF.length}`;
      break;
   }
   let gesturese = attributedstringF >= 5237127.0;
   do {
       let r_position6 = String.fromCharCode(99,97,99,104,101,102,108,117,115,104,95,53,95,52,48,0);
      for (let v = 0; v < 1; v++) {
          let annerv = String.fromCharCode(109,105,110,105,109,97,108,95,108,95,53,51,0);
          let proxyS: Array<any> = [296, 931, 999];
         r_position6 = `${r_position6.length + 1}`;
         annerv += "1";
         proxyS.push((annerv == String.fromCharCode(52,0) ? annerv.length : proxyS.length));
      }
         r_position6 += `${r_position6.length}`;
          let photoN = String.fromCharCode(115,121,110,99,104,114,111,110,105,122,101,114,0);
          let iconstarf = String.fromCharCode(116,119,111,95,57,95,55,53,0);
          let matchesB = String.fromCharCode(97,114,109,108,105,110,107,95,111,95,57,48,0);
         r_position6 += "1";
         photoN += `${photoN.length}`;
         iconstarf += "3";
         matchesB = `${matchesB.length}`;
      attributedstringF -= (parseInt(`${attributedstringF}`) * (videojsT ? 2 : 4));
      if (gesturese) {
         break;
      }
   } while ((libruntimeexecutorB.length >= 4) && gesturese);
   for (let j = 0; j < 2; j++) {
      shrink8 += `${libruntimeexecutorB.length - 3}`;
   }
      securityb += `${parseInt(`${orientationz}`)}`;
   for (let o = 0; o < 2; o++) {
       let clearz = false;
       let main_oI: Map<any, any> = new Map([[String.fromCharCode(97,103,97,105,110,115,116,0),false ], [String.fromCharCode(97,95,50,48,95,100,105,114,97,99,0),false ], [String.fromCharCode(116,111,111,108,98,111,120,0),true ]]);
          let transfer2: Map<any, any> = new Map([[String.fromCharCode(103,95,52,52,95,97,116,116,97,99,104,109,101,110,116,115,0),201], [String.fromCharCode(114,101,101,110,97,98,108,101,95,116,95,56,56,0),458]]);
         main_oI = new Map([[`${transfer2.size}`, ((clearz ? 1 : 2) & 2)]]);
      for (let b = 0; b < 2; b++) {
         main_oI = new Map([[`${main_oI.size}`, 3 % (Math.max(5, main_oI.size))]]);
      }
       let diceg = false;
       let libruntimeexecutorZ = false;
       let sortx = false;
      for (let o = 0; o < 3; o++) {
         main_oI.set(`${diceg}`, 1);
      }
      let username0 = diceg ? !diceg : diceg;
      do {
         diceg = (!clearz ? diceg : !clearz);
         if (username0) {
            break;
         }
      } while ((!diceg && !libruntimeexecutorZ) && username0);
      orientationz += 3;
   }
       let condensedh: Array<any> = [942, 427, 219];
       let libloggeri = 1.0;
       let hiadZ = String.fromCharCode(111,95,57,95,97,110,99,104,111,114,0);
         condensedh.push(parseInt(`${libloggeri}`) >> (Math.min(4, Math.abs(2))));
      let mountingb = hiadZ == String.fromCharCode(101,105,121,110,98,99,106,119,0);
      do {
         hiadZ += `${hiadZ.length % 3}`;
         if (mountingb) {
            break;
         }
      } while ((!hiadZ.endsWith(`${libloggeri}`)) && mountingb);
      for (let d = 0; d < 3; d++) {
         libloggeri /= Math.max(3, parseFloat(`${parseInt(`${libloggeri}`) % (Math.max(9, hiadZ.length))}`));
      }
      for (let e = 0; e < 2; e++) {
          let placeholderQ = String.fromCharCode(116,95,52,57,95,100,101,102,105,110,105,116,105,111,110,0);
         hiadZ += "3";
         placeholderQ += `${placeholderQ.length * 3}`;
      }
         condensedh = [condensedh.length >> (Math.min(Math.abs(1), 3))];
      show6 = new Map([[libruntimeexecutorB, parseInt(`${attributedstringF}`)]]);
   while (shrink8.length >= 4) {
      dependencyd += `${show6.size & componentsF.length}`;
      break;
   }

    if (sortBy === 'asc') {

   for (let u = 0; u < 3; u++) {
       let libglogT = 5;
       let disconnectedlogoC = 3.0;
      for (let z = 0; z < 3; z++) {
         libglogT += parseInt(`${disconnectedlogoC}`) * 1;
      }
      while (disconnectedlogoC >= 3.66) {
          let redirectA = String.fromCharCode(109,95,49,48,95,115,117,112,101,114,102,114,97,109,101,0);
          let long_w5h = false;
          let pushp = String.fromCharCode(104,100,110,111,100,101,95,114,95,56,50,0);
          let white7 = 1.0;
         disconnectedlogoC += parseFloat(`${redirectA.length}`);
         redirectA += `${pushp.length}`;
         long_w5h = (pushp.length * parseInt(`${white7}`)) <= 96;
         white7 += parseFloat(`${3 % (Math.max(3, pushp.length))}`);
         break;
      }
      let relatedv = 9512309.0 <= disconnectedlogoC;
      do {
         disconnectedlogoC += parseFloat(`${libglogT % (Math.max(5, parseInt(`${disconnectedlogoC}`)))}`);
         if (relatedv) {
            break;
         }
      } while (relatedv && (5.75 > (disconnectedlogoC * 3.94)));
         disconnectedlogoC *= parseFloat(`${libglogT}`);
      if (libglogT < disconnectedlogoC) {
          let sourcez = String.fromCharCode(117,110,115,116,97,107,101,0);
          let flipperh = 2;
          let notificationfillemptyd = 2;
          let halffieldimageq = String.fromCharCode(98,114,105,100,103,101,0);
          let iconplayj = String.fromCharCode(119,95,57,57,95,112,97,116,104,109,116,117,0);
         disconnectedlogoC /= Math.max(parseFloat(`${iconplayj.length}`), 3);
         sourcez = `${notificationfillemptyd}`;
         flipperh *= 3;
         notificationfillemptyd -= flipperh >> (Math.min(halffieldimageq.length, 1));
         halffieldimageq += `${flipperh - 3}`;
         iconplayj = `${sourcez.length}`;
      }
          let modulesu = String.fromCharCode(110,101,99,101,115,115,97,114,121,95,48,95,55,49,0);
         libglogT += 1 ^ modulesu.length;
      videojsT = (x_manager6.length << (Math.min(securityb.length, 5))) < 53;
   }
   if (x_manager6.length == parseInt(`${orientationz}`)) {
       let vnewinterstitialu = 1.0;
       let libreactperfloggerjni2: Array<any> = [408, 470];
       let fcdaebecbcbafcdfceaaeccfeacdb8: Array<any> = [856, 543, 25];
      for (let y = 0; y < 2; y++) {
         fcdaebecbcbafcdfceaaeccfeacdb8.push(3 % (Math.max(9, fcdaebecbcbafcdfceaaeccfeacdb8.length)));
      }
          let blackW: Array<any> = [252, 377];
          let dacccfaabfbcbadeebddcabacdffdb6: Array<any> = [449, 90];
         vnewinterstitialu += parseFloat(`${libreactperfloggerjni2.length}`);
         blackW.push(blackW.length);
         dacccfaabfbcbadeebddcabacdffdb6 = [1 * dacccfaabfbcbadeebddcabacdffdb6.length];
      x_manager6 = "2";
   }
      show6.set(dependencyd, dependencyd.length % (Math.max(10, show6.size)));
   while ((componentsF.length - shrink8.length) > 4 || (4 - shrink8.length) > 3) {
      componentsF = [parseInt(`${attributedstringF}`)];
      break;
   }
      componentsF.push((String.fromCharCode(115,0) == dependencyd ? dependencyd.length : securityb.length));
   for (let h = 0; h < 3; h++) {
      securityb += `${securityb.length | parseInt(`${attributedstringF}`)}`;
   }
      twitterl %= Math.max(1, componentsF.length);
      libruntimeexecutorB += `${dependencyd.length * libruntimeexecutorB.length}`;
   while (shrink8 == libruntimeexecutorB) {
      libruntimeexecutorB += "2";
      break;
   }
      setSortBy('desc');
    } else {

      dependencyd += `${3 + twitterl}`;
      libruntimeexecutorB += `${x_manager6.length}`;
   for (let w = 0; w < 1; w++) {
      dependencyd += `${((catagory3 ? 3 : 4) % (Math.max(8, libruntimeexecutorB.length)))}`;
   }
      show6 = new Map([[shrink8, 2]]);
   let middles = catagory3 ? !catagory3 : catagory3;
   do {
       let screenj: Map<any, any> = new Map([[String.fromCharCode(118,100,115,111,95,51,95,56,48,0),false ], [String.fromCharCode(116,114,101,110,100,108,105,110,101,95,105,95,51,52,0),false ], [String.fromCharCode(98,97,115,105,115,0),true ]]);
       let booti = 3.0;
       let b_unlockh = String.fromCharCode(115,101,112,97,114,97,116,111,114,115,0);
       let iconshareZ = String.fromCharCode(105,95,54,57,95,119,111,114,100,115,0);
      let neonq = booti >= 5033917.0;
      do {
         booti *= parseInt(`${booti}`) % (Math.max(iconshareZ.length, 6));
         if (neonq) {
            break;
         }
      } while ((booti <= 5.23) && neonq);
      for (let f = 0; f < 2; f++) {
          let saveU = 2.0;
          let bangc = 4;
          let iconeditO = 2.0;
          let connectionK = true;
         b_unlockh = "2";
         saveU += parseFloat(`${parseInt(`${iconeditO}`) | 2}`);
         bangc += bangc;
         iconeditO -= 3 + parseInt(`${saveU}`);
         connectionK = bangc >= 16;
      }
         b_unlockh = "2";
         b_unlockh += `${b_unlockh.length << (Math.min(iconshareZ.length, 1))}`;
          let iconsettingf: Map<any, any> = new Map([[String.fromCharCode(102,111,111,0),531], [String.fromCharCode(101,118,101,114,121,0),420]]);
         iconshareZ += `${iconshareZ.length}`;
         iconsettingf.set(`${iconsettingf.size}`, iconsettingf.size);
         iconshareZ += `${1 | screenj.size}`;
      let disconnectedlogoO = b_unlockh.length <= 6225490;
      do {
         b_unlockh = `${screenj.size >> (Math.min(Math.abs(2), 4))}`;
         if (disconnectedlogoO) {
            break;
         }
      } while ((b_unlockh.length >= 1) && disconnectedlogoO);
      let bottomi = b_unlockh.length >= 9233148;
      do {
         b_unlockh += `${iconshareZ.length}`;
         if (bottomi) {
            break;
         }
      } while (bottomi && (b_unlockh.length > iconshareZ.length));
      if ((booti * 4.20) >= 2.11 || 4.20 >= (iconshareZ.length * booti)) {
         iconshareZ += `${iconshareZ.length ^ 3}`;
      }
      let chatH = 5579208.0 >= booti;
      do {
         booti += parseInt(`${booti}`) + 1;
         if (chatH) {
            break;
         }
      } while ((!Array.from(screenj.keys()).includes(`${booti}`)) && chatH);
         booti += (b_unlockh == String.fromCharCode(110,0) ? parseInt(`${booti}`) : b_unlockh.length);
       let teamP = String.fromCharCode(108,111,99,97,116,105,111,110,115,0);
      catagory3 = 86 < dependencyd.length;
      if (middles) {
         break;
      }
   } while ((!catagory3) && middles);
       let defaultroombgE = String.fromCharCode(98,95,49,54,95,112,114,105,110,116,118,97,108,0);
       let typingJ = String.fromCharCode(104,97,110,100,115,104,97,107,101,0);
       let leakcheckerg: Array<any> = [909, 647, 246];
      let with_ma8 = 7183363 <= typingJ.length;
      do {
         typingJ += `${typingJ.length - leakcheckerg.length}`;
         if (with_ma8) {
            break;
         }
      } while (with_ma8 && (2 > (typingJ.length / (Math.max(3, leakcheckerg.length))) || 2 > (typingJ.length / (Math.max(6, leakcheckerg.length)))));
      while ((leakcheckerg.length - typingJ.length) > 2 || 2 > (typingJ.length - leakcheckerg.length)) {
          let uimanager6 = String.fromCharCode(112,114,101,117,112,100,97,116,101,0);
          let defaultplayerimgR = 1.0;
         typingJ = `${defaultroombgE.length}`;
         uimanager6 += `${3 ^ uimanager6.length}`;
         defaultplayerimgR -= uimanager6.length;
         break;
      }
      let release_ny = String.fromCharCode(110,111,50,0) == defaultroombgE;
      do {
          let mailF = 2.0;
          let textinputH: Map<any, any> = new Map([[String.fromCharCode(115,112,97,110,115,95,101,95,52,52,0),964], [String.fromCharCode(99,116,120,116,95,55,95,51,54,0),40], [String.fromCharCode(99,95,57,95,106,97,99,111,98,105,0),431]]);
          let matchactived = 3;
          let loadingj = true;
         defaultroombgE = `${typingJ.length}`;
         mailF += textinputH.size >> (Math.min(4, Math.abs(parseInt(`${mailF}`))));
         textinputH.set(`${loadingj}`, (parseInt(`${mailF}`) / (Math.max(8, (loadingj ? 3 : 5)))));
         matchactived %= Math.max(textinputH.size, 4);
         if (release_ny) {
            break;
         }
      } while ((!typingJ.includes(`${defaultroombgE.length}`)) && release_ny);
       let downloadingd = String.fromCharCode(115,99,104,101,100,117,108,105,110,103,95,104,95,50,57,0);
       let vietnamd = String.fromCharCode(97,95,51,49,95,115,104,105,109,115,0);
         downloadingd = `${typingJ.length}`;
         downloadingd = `${typingJ.length}`;
         defaultroombgE = `${vietnamd.length}`;
      if (leakcheckerg.length >= typingJ.length) {
          let layoutm = 3.0;
          let klevinf = 0;
         typingJ = "1";
         layoutm += parseFloat(`${parseInt(`${layoutm}`)}`);
         klevinf += klevinf / (Math.max(2, parseInt(`${layoutm}`)));
      }
          let chat3: Map<any, any> = new Map([[String.fromCharCode(112,98,107,100,102,95,48,95,53,53,0),true ], [String.fromCharCode(115,95,50,50,95,115,121,110,99,104,114,111,110,105,122,101,100,0),true ]]);
          let shrinkc = 2;
         leakcheckerg.push(defaultroombgE.length);
         chat3 = new Map([[`${chat3.size}`, 2]]);
         shrinkc += shrinkc + chat3.size;
      libruntimeexecutorB = `${libruntimeexecutorB.length - 3}`;
   for (let b = 0; b < 3; b++) {
      dependencyd += `${show6.size}`;
   }
   for (let h = 0; h < 1; h++) {
      x_manager6 += `${twitterl}`;
   }
   while (orientationz <= securityb.length) {
      orientationz *= (String.fromCharCode(111,0) == libruntimeexecutorB ? securityb.length : libruntimeexecutorB.length);
      break;
   }
      setSortBy('asc');
    }
  };

  return (
    <BottomSheet
      isVisible={isVisible}
      onBackdropPress={handleClose}
      containerStyle={{
        paddingLeft: spacing.sideOffset,
        paddingRight: spacing.sideOffset,
        gap: spacing.m,
        alignItems: 'center',
      }}
      height='50%'
    >
      <View style={styles.episodeList}>
        <Text
          style={{
            ...styles.btn,
            ...textVariants.header
          }}>
          {`${showEpisodeRangeStart + 1}-${showEpisodeRangeEnd} 集`}
        </Text>
        <TouchableOpacity style={styles.sortBtn} onPress={sort}>
          <View style={{ paddingTop: 4 }}>
            {sortBy === 'asc' ? <SortAscIcon /> : <SortDescIcon />}
          </View>
          <Text
            style={{
              textAlign: 'center',
              ...textVariants.header,
              color: colors.muted,
              fontSize: 15,
            }}>
            顺序
          </Text>
        </TouchableOpacity>
      </View>
      {(displayEpisodes && isVisible) &&
        <ScrollView
          contentContainerStyle={{
            ...styles.episodeList,
            paddingBottom: insets.bottom,
          }}>
          {displayEpisodes?.map((ep, idx) => (
            <TouchableOpacity
              key={`expand-${idx}`}
              onPress={() => {
                onConfirm(ep.nid);
                onCancel();
              }}>
              <View
                style={{
                  backgroundColor:
                    ep.nid === activeEpisode ? colors.primary : colors.search,
                  padding: spacing.s,
                  minWidth: 60,
                  marginRight: 'auto',
                  marginBottom: spacing.s,
                  borderRadius: 8,
                }}>
                <Text
                  numberOfLines={1}
                  style={{
                    fontSize: 13,
                    textAlign: 'center',
                    fontWeight: '500',
                    color:
                      ep.nid === activeEpisode ? colors.primaryContrast : colors.muted,
                  }}>
                  {`${ep.name}`}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      }
    </BottomSheet>
  );
}

export default memo(VodEpisodeSelectionModal);

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    flex: 1,
  },
  text: {
    color: 'white',
    textAlign: 'center',
  },
  btn: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
  episodeList: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    justifyContent: 'flex-start',
    paddingLeft: 8,
    marginBottom: 14,
  },
  sortBtn: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
