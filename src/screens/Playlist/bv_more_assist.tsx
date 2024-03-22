import React, { useCallback, useEffect, useState, memo } from 'react';
import { StyleSheet, View, Text, RefreshControl, FlatList } from 'react-native';
import { useQueryClient } from '@tanstack/react-query';
import ScreenContainer from '../../components/container/ypy_fast';
import MainHeader from '../../components/header/tae_refresh_header';
import { useFocusEffect, useTheme } from '@react-navigation/native';
import { useInfiniteQuery } from '@tanstack/react-query';
import { LDGray, RBEmojiEwarded } from '@type/wpk_long';
import VodPlaylist from '../../components/playlist/ki_gift_zhubo';
import { BottomTabScreenProps, useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { API_DOMAIN } from '@utility/n_subs_interstitial';
import FastImage from "../../components/common/gwi_with"
import { useIsFocused } from '@react-navigation/native';
import NoConnection from './../../components/common/nyr_animation_langkey';
import NetInfo, { NetInfoState } from '@react-native-community/netinfo';
import { GBYMiniCanvas } from '@redux/reducers/t_types';
import { useAppSelector } from '@hooks/kg_index';
import { PSmall } from '@redux/fj_prediction_thailand';
import umb_center_carousel from '../../../Umeng/umb_center_carousel';
import { RLarge } from '@api';

type MEYMode = {
  item: RBEmojiEwarded;
  index: number;
};

function Playlist({ navigation }: BottomTabScreenProps<any>) {
  
  const { textVariants, colors, spacing } = useTheme();
  const LIMIT_PER_PAGE = 10;
  // const [results, setResults] = useState<Array<RBEmojiEwarded>>([])
  const [totalPage, setTotalPage] = useState(0);

  const isFocused = useIsFocused();
  const [isOffline, setIsOffline] = useState(false);

  const settingsReducer: GBYMiniCanvas = useAppSelector(
    ({ settingsReducer }: PSmall) => settingsReducer
  );

  
  useFocusEffect(useCallback(() => {
    umb_center_carousel.playlistViewsAnalytics();
  }, []));
  

  
  const handleTabPress = () => {
       let whistlew = String.fromCharCode(105,110,115,105,100,101,95,118,95,50,53,0);
    let borderlessJ = false;
    let episodeS = 3.0;
    let f_centerq = 0.0;
    let megaphoneE = 2.0;
    let liveq: Array<any> = [180, 159];
    let serviceG = String.fromCharCode(114,101,105,110,105,116,95,107,95,57,49,0);
    let feedbacko = 0;
    let sansq = 4.0;
    let sansY: Map<any, any> = new Map([[String.fromCharCode(105,95,50,95,100,97,115,104,98,111,97,114,100,0),false ], [String.fromCharCode(98,95,56,48,95,101,109,112,116,121,0),false ], [String.fromCharCode(103,101,110,101,114,105,99,115,95,98,95,57,53,0),true ]]);
    let flyero = String.fromCharCode(119,95,50,52,95,115,116,121,108,101,0);
    let componentv = String.fromCharCode(110,95,53,51,95,101,112,115,105,108,111,110,0);
    let downloadedm = String.fromCharCode(99,121,97,110,95,101,95,55,56,0);
      whistlew += `${(whistlew == String.fromCharCode(55,0) ? whistlew.length : (borderlessJ ? 4 : 2))}`;
   if (feedbacko <= 1) {
       let selectedd = 4;
       let tickD = true;
         tickD = 68 >= selectedd || !tickD;
         selectedd %= Math.max(selectedd, 4);
      borderlessJ = (parseInt(`${megaphoneE}`) + whistlew.length) < 79;
   }
      borderlessJ = 12.48 >= megaphoneE;
   let rulesj = 6247924 >= feedbacko;
   do {
      feedbacko ^= feedbacko / 1;
      if (rulesj) {
         break;
      }
   } while (rulesj && (3 > (feedbacko * 2) && 1 > (feedbacko & 2)));
       let gestureN: Map<any, any> = new Map([[String.fromCharCode(114,101,119,105,110,100,95,101,95,50,53,0),94], [String.fromCharCode(116,101,109,112,111,114,97,114,121,95,119,95,54,50,0),955]]);
       let orangeF = 1;
       let gesturest = 2.0;
       let shrinkw = String.fromCharCode(118,95,51,54,95,111,114,100,101,114,115,0);
       let stationk = String.fromCharCode(115,101,97,108,98,111,120,95,106,95,50,53,0);
         gestureN = new Map([[`${orangeF}`, parseInt(`${gesturest}`)]]);
      let taiwan4 = shrinkw == String.fromCharCode(50,102,53,111,106,110,95,53,0);
      do {
         shrinkw += `${orangeF % (Math.max(1, 2))}`;
         if (taiwan4) {
            break;
         }
      } while ((4 <= stationk.length && shrinkw.length <= 4) && taiwan4);
         gestureN = new Map([[`${gestureN.size}`, 1 & orangeF]]);
         orangeF %= Math.max((String.fromCharCode(121,0) == shrinkw ? gestureN.size : shrinkw.length), 4);
      let short_nR = gestureN.size >= 5841376;
      do {
         gestureN = new Map([[`${gestureN.size}`, parseInt(`${gesturest}`) - 1]]);
         if (short_nR) {
            break;
         }
      } while ((!Array.from(gestureN.keys()).includes(`${gesturest}`)) && short_nR);
      let previewA = 5817758 >= orangeF;
      do {
          let downloadedL = String.fromCharCode(113,100,101,108,116,97,95,118,95,50,48,0);
          let update_5e = String.fromCharCode(112,97,114,116,121,95,51,95,50,54,0);
         orangeF &= 3;
         downloadedL += `${update_5e.length}`;
         update_5e += `${update_5e.length}`;
         if (previewA) {
            break;
         }
      } while (previewA && ((stationk.length & 5) == 1));
      let textR = stationk.length <= 6138661;
      do {
         stationk = `${parseInt(`${gesturest}`)}`;
         if (textR) {
            break;
         }
      } while (textR && ((stationk.length - 1) == 5 || (orangeF - stationk.length) == 1));
      while (!Array.from(gestureN.keys()).includes(`${orangeF}`)) {
         orangeF &= parseInt(`${gesturest}`);
         break;
      }
      sansq *= serviceG.length;
      sansq /= Math.max(3 * parseInt(`${f_centerq}`), 4);
      borderlessJ = f_centerq >= episodeS;
   let assist4 = borderlessJ ? !borderlessJ : borderlessJ;
   do {
       let greenL = 4.0;
         greenL -= parseInt(`${greenL}`) + parseInt(`${greenL}`);
      let popupF = greenL <= 5962484.0;
      do {
         greenL *= parseInt(`${greenL}`) >> (Math.min(2, Math.abs(3)));
         if (popupF) {
            break;
         }
      } while (popupF && ((greenL / 1.79) < 2.46));
      while (1.4 == greenL) {
          let logoN = String.fromCharCode(99,108,117,98,95,122,95,48,0);
          let unselectede = 2.0;
         greenL -= (logoN == String.fromCharCode(76,0) ? logoN.length : parseInt(`${unselectede}`));
         break;
      }
      borderlessJ = !borderlessJ;
      if (assist4) {
         break;
      }
   } while (assist4 && (liveq.length < 2));
       let nalyticsx = 2.0;
         nalyticsx /= Math.max(1, parseFloat(`${2 + parseInt(`${nalyticsx}`)}`));
       let store_ = String.fromCharCode(102,108,97,99,95,99,95,56,57,0);
      while (store_.startsWith(`${nalyticsx}`)) {
          let windf = String.fromCharCode(107,95,51,56,95,102,100,99,116,100,115,112,0);
          let playlistM = 1.0;
          let countdownT: Map<any, any> = new Map([[String.fromCharCode(118,95,55,56,95,99,111,112,121,98,97,99,107,0),false ], [String.fromCharCode(112,95,51,48,95,99,111,109,98,105,110,97,116,111,114,0),false ]]);
          let whatsapp2 = 5.0;
          let sellN = false;
         nalyticsx *= parseFloat(`${store_.length}`);
         windf = `${parseInt(`${playlistM}`) * windf.length}`;
         playlistM *= parseInt(`${whatsapp2}`) << (Math.min(4, Math.abs(3)));
         countdownT.set(`${sellN}`, (windf == String.fromCharCode(104,0) ? windf.length : (sellN ? 2 : 4)));
         whatsapp2 -= (parseFloat(`${(sellN ? 2 : 4) + 3}`));
         break;
      }
      sansq *= parseInt(`${megaphoneE}`) << (Math.min(1, Math.abs(1)));
      whistlew = `${parseInt(`${episodeS}`)}`;

    if (isFocused) {

   for (let k = 0; k < 2; k++) {
      sansq *= ((borderlessJ ? 1 : 3) ^ 1);
   }
   let nativem = borderlessJ ? !borderlessJ : borderlessJ;
   do {
       let playK = 3.0;
       let privilegeJ: Map<any, any> = new Map([[String.fromCharCode(112,97,114,107,95,110,95,52,52,0),548], [String.fromCharCode(107,95,57,55,0),8], [String.fromCharCode(107,95,56,53,95,114,101,118,101,114,116,0),853]]);
         playK += parseFloat(`${1 & privilegeJ.size}`);
         playK -= parseFloat(`${1 + parseInt(`${playK}`)}`);
          let inactive2 = String.fromCharCode(115,101,116,105,95,116,95,54,50,0);
          let router9 = 0.0;
         privilegeJ = new Map([[`${privilegeJ.size}`, 3 / (Math.max(2, inactive2.length))]]);
         inactive2 += `${parseInt(`${router9}`) * parseInt(`${router9}`)}`;
         playK += parseFloat(`${3}`);
         privilegeJ = new Map([[`${privilegeJ.size}`, 2]]);
          let historym = 4;
          let downloaderz = 3.0;
          let trashl = 0.0;
         privilegeJ.set(`${playK}`, privilegeJ.size * parseInt(`${playK}`));
         historym %= Math.max(parseInt(`${downloaderz}`) << (Math.min(2, Math.abs(3))), 2);
         downloaderz += parseFloat(`${2 * parseInt(`${trashl}`)}`);
         trashl *= parseFloat(`${parseInt(`${downloaderz}`) % 3}`);
      borderlessJ = feedbacko > 39;
      if (nativem) {
         break;
      }
   } while (nativem && (1.18 > episodeS || 2.79 > (episodeS * 1.18)));
      serviceG += `${serviceG.length / 3}`;
      sansY.set(`${f_centerq}`, parseInt(`${f_centerq}`));
       let statisticsx = 0.0;
       let iconJ = 2;
         iconJ |= parseInt(`${statisticsx}`);
          let teamY: Array<any> = [667, 902];
          let lnewsM = 2.0;
          let filterQ: Array<any> = [619, 544, 91];
         iconJ <<= Math.min(Math.abs(iconJ), 5);
         teamY = [parseInt(`${lnewsM}`) % (Math.max(5, filterQ.length))];
         lnewsM += parseFloat(`${1}`);
         filterQ.push(filterQ.length << (Math.min(1, teamY.length)));
       let skipg = 2.0;
       let chatu = 5.0;
         iconJ |= parseInt(`${statisticsx}`);
      if ((statisticsx * 3.13) > 4.95 && (3.13 * chatu) > 5.58) {
         chatu /= Math.max(3, parseInt(`${statisticsx}`));
      }
         chatu *= 1;
      serviceG = "2";
      borderlessJ = !borderlessJ;
       let action9 = String.fromCharCode(114,101,97,108,109,95,107,95,56,48,0);
       let anythinkX = String.fromCharCode(103,95,56,57,95,105,110,115,101,99,0);
         action9 += `${anythinkX.length % (Math.max(8, action9.length))}`;
      if (!anythinkX.startsWith(`${action9.length}`)) {
         action9 += `${(String.fromCharCode(115,0) == action9 ? anythinkX.length : action9.length)}`;
      }
         anythinkX = `${anythinkX.length}`;
          let cornerO = String.fromCharCode(115,95,49,50,95,112,103,110,111,0);
          let c_countn: Array<any> = [84, 38];
         action9 += `${cornerO.length}`;
         cornerO = `${c_countn.length}`;
         c_countn.push(c_countn.length);
         action9 += `${(String.fromCharCode(84,0) == anythinkX ? action9.length : anythinkX.length)}`;
         anythinkX += `${action9.length / 2}`;
      whistlew = `${(parseInt(`${episodeS}`) * (borderlessJ ? 5 : 1))}`;
       let middleL = String.fromCharCode(112,95,51,52,95,112,97,115,115,98,0);
       let favicona: Map<any, any> = new Map([[String.fromCharCode(100,95,52,56,95,102,97,100,101,111,117,116,0),String.fromCharCode(106,115,105,109,100,99,102,103,95,55,95,53,56,0)], [String.fromCharCode(109,95,54,50,95,100,105,115,112,111,115,97,98,108,101,0),String.fromCharCode(101,100,105,116,95,98,95,56,55,0)], [String.fromCharCode(114,95,48,95,98,101,116,97,0),String.fromCharCode(97,103,103,114,101,103,97,116,101,95,107,95,57,50,0)]]);
         middleL = "2";
       let tempb = 5;
       let shrinkX = 3;
      megaphoneE /= Math.max((parseFloat(`${String.fromCharCode(100,0) == whistlew ? liveq.length : whistlew.length}`)), 1);
   if (whistlew.length > sansY.size) {
       let rewindR = false;
       let auto_v91: Array<any> = [353, 733, 600];
       let showh: Array<any> = [535, 564, 357];
       let shrinkb = 1.0;
          let usernameS = 4.0;
          let privilege_ = 5;
         auto_v91 = [((rewindR ? 5 : 2) >> (Math.min(auto_v91.length, 5)))];
         usernameS /= Math.max(parseFloat(`${parseInt(`${usernameS}`) ^ 1}`), 2);
         privilege_ |= privilege_ - 2;
      for (let g = 0; g < 3; g++) {
         showh = [(2 | (rewindR ? 3 : 4))];
      }
          let detailk: Array<any> = [String.fromCharCode(116,110,112,117,116,95,112,95,57,54,0), String.fromCharCode(121,95,51,49,95,115,116,97,116,105,115,116,105,99,0)];
          let stylei = 1.0;
          let firebaseE: Array<any> = [724, 16];
         auto_v91 = [detailk.length | firebaseE.length];
         detailk = [parseInt(`${stylei}`) >> (Math.min(2, Math.abs(parseInt(`${stylei}`))))];
          let ajax7 = String.fromCharCode(97,98,111,118,101,95,55,95,54,48,0);
         rewindR = (shrinkb + showh.length) >= 28.69;
         ajax7 = `${(String.fromCharCode(53,0) == ajax7 ? ajax7.length : ajax7.length)}`;
      let areax = 9394150 >= showh.length;
      do {
         showh = [parseInt(`${shrinkb}`)];
         if (areax) {
            break;
         }
      } while (areax && (2 >= (showh.length % 3)));
      if ((shrinkb * 4.5) >= 3.91) {
          let sansT = 2.0;
          let rightA = 4.0;
          let v_imageD = String.fromCharCode(115,111,117,114,99,101,105,100,95,52,95,53,56,0);
         auto_v91 = [(String.fromCharCode(108,0) == v_imageD ? v_imageD.length : parseInt(`${rightA}`))];
         sansT += parseInt(`${sansT}`);
         rightA -= parseInt(`${sansT}`);
      }
       let bottomX = 3;
       let moviesA = 3;
          let shoota = String.fromCharCode(122,95,57,50,95,112,97,114,101,110,116,104,101,115,101,115,0);
         moviesA <<= Math.min(Math.abs(bottomX), 1);
         shoota += `${shoota.length ^ 1}`;
      let sentryz = auto_v91.length >= 6425968;
      do {
         auto_v91 = [1];
         if (sentryz) {
            break;
         }
      } while ((!rewindR) && sentryz);
      let robotoN = moviesA <= 9257739;
      do {
         moviesA &= 3;
         if (robotoN) {
            break;
         }
      } while (robotoN && ((moviesA / 4) > 4));
       let moviesv = 5.0;
         moviesA ^= parseInt(`${moviesv}`);
      whistlew += `${3 >> (Math.min(5, Math.abs(parseInt(`${f_centerq}`))))}`;
   }
      f_centerq /= Math.max(1, parseFloat(`${parseInt(`${f_centerq}`) * 3}`));
      handleRefresh();
    }
  };

  const checkConnection = useCallback(async () => {
       let selections = 1;
    let tickedX = String.fromCharCode(108,105,98,95,107,95,53,50,0);
    let leaguej: Array<any> = [String.fromCharCode(98,108,111,99,107,101,100,95,57,95,51,50,0), String.fromCharCode(107,95,50,95,115,100,97,108,108,111,99,120,0), String.fromCharCode(120,95,51,55,95,97,98,115,101,105,108,0)];
    let customG = true;
    let plus9 = String.fromCharCode(99,111,109,109,111,110,95,110,95,57,49,0);
    let modulev: Map<any, any> = new Map([[String.fromCharCode(117,95,55,55,95,102,114,97,109,101,115,105,122,101,115,0),false ], [String.fromCharCode(99,111,108,115,112,97,110,95,111,95,51,56,0),true ], [String.fromCharCode(109,97,102,113,95,48,95,57,57,0),true ]]);
    let fastforwardG = false;
    let hcopy_diQ = 2;
    let bottomW = 3.0;
    let sportW = String.fromCharCode(112,95,54,51,95,99,111,114,114,101,108,97,116,101,0);
    let fulll = false;
    let injuryJ = 5.0;
    let balll = String.fromCharCode(104,95,50,57,95,109,111,100,101,110,97,109,101,0);
    let actionV = String.fromCharCode(109,112,115,117,98,95,111,95,50,52,0);
    let telegramF = 3.0;
       let stylef: Map<any, any> = new Map([[String.fromCharCode(111,95,50,54,95,103,114,101,103,0),true ], [String.fromCharCode(118,95,56,51,95,98,97,99,107,103,114,111,117,110,100,0),false ], [String.fromCharCode(111,95,50,51,95,109,112,97,100,115,112,0),true ]]);
          let details6 = String.fromCharCode(118,95,54,48,95,115,105,110,100,101,120,0);
         stylef = new Map([[`${stylef.size}`, (details6 == String.fromCharCode(95,0) ? stylef.size : details6.length)]]);
      while (5 >= (stylef.size >> (Math.min(Math.abs(2), 3))) && (stylef.size >> (Math.min(2, Math.abs(stylef.size)))) >= 2) {
         stylef = new Map([[`${stylef.size}`, stylef.size]]);
         break;
      }
      let sort1 = 6532069 <= stylef.size;
      do {
         stylef.set(`${stylef.size}`, stylef.size);
         if (sort1) {
            break;
         }
      } while ((!Array.from(stylef.keys()).includes(`${stylef.size}`)) && sort1);
      modulev.set(`${bottomW}`, 1);
      modulev = new Map([[plus9, (plus9 == String.fromCharCode(95,0) ? plus9.length : (fastforwardG ? 4 : 3))]]);
   let trophyj = customG ? !customG : customG;
   do {
       let halfc: Map<any, any> = new Map([[String.fromCharCode(102,114,101,113,95,108,95,53,54,0),931], [String.fromCharCode(115,95,53,95,115,117,105,116,101,98,0),426]]);
       let controlsf = 2.0;
         halfc.set(`${controlsf}`, halfc.size);
         controlsf /= Math.max(1, parseFloat(`${halfc.size ^ 1}`));
         halfc.set(`${controlsf}`, 1);
         controlsf /= Math.max(1, parseFloat(`${halfc.size | 2}`));
         halfc.set(`${controlsf}`, 2);
      while (!Array.from(halfc.values()).includes(controlsf)) {
         controlsf -= parseFloat(`${parseInt(`${controlsf}`)}`);
         break;
      }
      customG = (bottomW + hcopy_diQ) >= 38;
      if (trophyj) {
         break;
      }
   } while (trophyj && (!customG));
   while (!leaguej.includes(bottomW)) {
      bottomW += (parseFloat(`${String.fromCharCode(49,0) == plus9 ? hcopy_diQ : plus9.length}`));
      break;
   }
      plus9 = `${leaguej.length % 3}`;
      customG = selections > 67;

    const state = await NetInfo.fetch();

       let auto_dqF = 3.0;
      for (let v = 0; v < 3; v++) {
         auto_dqF *= 2 >> (Math.min(Math.abs(parseInt(`${auto_dqF}`)), 4));
      }
         auto_dqF -= parseInt(`${auto_dqF}`);
          let containerU = 5.0;
          let clockk = String.fromCharCode(103,95,52,53,95,110,116,115,99,0);
         auto_dqF *= parseInt(`${containerU}`);
         containerU += clockk.length - 1;
         clockk = `${clockk.length}`;
      plus9 = `${parseInt(`${bottomW}`)}`;
   while (tickedX.length > parseInt(`${bottomW}`)) {
      bottomW += parseFloat(`${2}`);
      break;
   }
   for (let g = 0; g < 2; g++) {
       let gpayJ = 3;
       let giftS = String.fromCharCode(100,95,55,95,115,116,114,105,114,101,112,108,97,99,101,0);
       let membershipw = String.fromCharCode(108,95,52,52,95,99,117,114,114,101,110,116,108,121,0);
       let modeG = String.fromCharCode(114,101,109,111,118,97,98,108,101,95,104,95,55,49,0);
       let emptyD = 0;
         emptyD *= 3;
      if (2 > (modeG.length | 3) || 1 > (3 | modeG.length)) {
          let shirt9 = 0;
          let giftO = String.fromCharCode(117,95,57,49,95,108,111,111,115,101,0);
          let unread1 = 3;
          let indexv = String.fromCharCode(104,95,56,54,95,116,101,115,116,99,111,110,102,105,103,0);
          let signinup8 = false;
         emptyD -= (giftO.length << (Math.min(1, Math.abs((signinup8 ? 3 : 3)))));
         shirt9 |= shirt9;
         giftO = "1";
         unread1 *= shirt9 + 2;
         indexv += `${shirt9}`;
         signinup8 = indexv.length > shirt9;
      }
      for (let z = 0; z < 2; z++) {
         modeG += `${emptyD}`;
      }
         modeG = `${1 & membershipw.length}`;
      for (let j = 0; j < 3; j++) {
          let t_centerW = 1;
          let remindert: Map<any, any> = new Map([[String.fromCharCode(99,95,54,54,95,108,105,98,111,112,101,110,104,0),true ], [String.fromCharCode(99,117,114,115,111,114,115,95,52,95,56,51,0),false ]]);
         membershipw += `${gpayJ & 2}`;
         t_centerW *= t_centerW >> (Math.min(Math.abs(remindert.size), 2));
         remindert = new Map([[`${remindert.size}`, 1]]);
      }
         modeG += `${giftS.length}`;
      while (2 >= (membershipw.length * gpayJ) || 2 >= (membershipw.length * 2)) {
         gpayJ += 2;
         break;
      }
      while ((membershipw.length & 3) == 4) {
         membershipw += `${membershipw.length}`;
         break;
      }
      while (5 <= modeG.length || giftS.length <= 5) {
          let reportZ = 4;
         modeG += `${modeG.length}`;
         reportZ ^= 2 << (Math.min(4, Math.abs(reportZ)));
         break;
      }
          let logoutA = String.fromCharCode(116,95,53,95,117,110,109,97,114,107,0);
         emptyD <<= Math.min(Math.abs(1), 3);
         logoutA = "2";
         modeG += `${2 << (Math.min(2, modeG.length))}`;
       let strJ = String.fromCharCode(120,95,52,95,105,110,116,101,114,97,116,105,111,110,0);
       let filedT = 3.0;
       let searchS = 0.0;
         filedT *= 3;
         gpayJ -= parseInt(`${searchS}`) + giftS.length;
      customG = !fastforwardG;
   }
   for (let c = 0; c < 2; c++) {
      modulev = new Map([[`${modulev.size}`, ((fastforwardG ? 5 : 1) / (Math.max(1, modulev.size)))]]);
   }
   while ((selections & 2) > 2) {
      tickedX += `${hcopy_diQ % 2}`;
      break;
   }
   let lessI = hcopy_diQ >= 8711779;
   do {
      hcopy_diQ /= Math.max(parseInt(`${bottomW}`) << (Math.min(1, Math.abs(3))), 5);
      if (lessI) {
         break;
      }
   } while ((3 == hcopy_diQ) && lessI);
    const offline = !(state.isConnected && state.isInternetReachable);

      leaguej.push(3);
   for (let g = 0; g < 2; g++) {
      hcopy_diQ ^= 2;
   }
   let firebase4 = plus9.length <= 5425361;
   do {
      plus9 += "1";
      if (firebase4) {
         break;
      }
   } while (firebase4 && (3 < (plus9.length % 1) && (hcopy_diQ % (Math.max(plus9.length, 3))) < 1));
      fastforwardG = 71 >= selections;
   for (let h = 0; h < 3; h++) {
      hcopy_diQ >>= Math.min(5, Math.abs(parseInt(`${bottomW}`)));
   }
       let ajaxJ = 3.0;
         ajaxJ *= parseFloat(`${3 * parseInt(`${ajaxJ}`)}`);
          let foundr: Map<any, any> = new Map([[String.fromCharCode(100,95,50,54,95,115,108,97,118,101,115,0),String.fromCharCode(97,95,51,50,95,116,119,111,108,97,109,101,0)], [String.fromCharCode(101,95,52,57,95,99,104,97,110,103,101,115,0),String.fromCharCode(104,95,51,57,95,112,121,116,104,111,110,0)]]);
          let stationp = 4.0;
         ajaxJ *= parseFloat(`${1}`);
         foundr.set(`${stationp}`, foundr.size);
         stationp += foundr.size << (Math.min(Math.abs(2), 4));
         ajaxJ /= Math.max(parseFloat(`${1 / (Math.max(2, parseInt(`${ajaxJ}`)))}`), 2);
      customG = modulev.size <= leaguej.length;
    setIsOffline(offline);

      sportW = `${leaguej.length}`;
      balll += "1";
   for (let x = 0; x < 1; x++) {
      bottomW -= parseFloat(`${3 % (Math.max(parseInt(`${injuryJ}`), 9))}`);
   }
   let stationsa = fastforwardG ? !fastforwardG : fastforwardG;
   do {
      fastforwardG = plus9.length <= 78;
      if (stationsa) {
         break;
      }
   } while ((!sportW.includes(`${fastforwardG}`)) && stationsa);
      modulev = new Map([[`${hcopy_diQ}`, parseInt(`${bottomW}`) / 2]]);
      leaguej.push((balll == String.fromCharCode(114,0) ? parseInt(`${injuryJ}`) : balll.length));
    if (!offline) {

       let blackQ = String.fromCharCode(110,95,48,95,111,98,106,101,99,116,105,118,101,0);
      let type__l = blackQ == String.fromCharCode(51,116,103,107,50,106,53,0);
      do {
         blackQ += `${blackQ.length}`;
         if (type__l) {
            break;
         }
      } while ((blackQ == String.fromCharCode(79,0)) && type__l);
      while (3 > blackQ.length) {
         blackQ = "2";
         break;
      }
      while (blackQ != String.fromCharCode(110,0) && blackQ != String.fromCharCode(113,0)) {
         blackQ += "1";
         break;
      }
      bottomW *= (parseFloat(`${String.fromCharCode(82,0) == tickedX ? tickedX.length : selections}`));
      customG = (24 <= (tickedX.length ^ (!fulll ? 24 : tickedX.length)));
      bottomW -= parseFloat(`${parseInt(`${bottomW}`) | hcopy_diQ}`);
       let borderless6 = 2;
       let wnewsd = 2;
       let modelsd: Map<any, any> = new Map([[String.fromCharCode(100,95,52,95,100,101,99,111,109,112,114,101,115,115,101,100,0),330], [String.fromCharCode(97,95,53,50,95,115,97,116,117,114,97,116,105,111,110,0),534], [String.fromCharCode(108,95,48,95,116,101,115,116,0),728]]);
         wnewsd &= wnewsd / 3;
      while (!Array.from(modelsd.values()).includes(borderless6)) {
         modelsd.set(`${borderless6}`, 2);
         break;
      }
       let tumbnail0 = 3.0;
       let guider = 1.0;
          let langkeyC = 0.0;
         tumbnail0 /= Math.max(2, parseFloat(`${wnewsd * modelsd.size}`));
         langkeyC -= 2;
      let p_playera = borderless6 >= 9562969;
      do {
          let resendI = String.fromCharCode(98,105,115,101,99,116,95,119,95,51,50,0);
          let controlj: Array<any> = [402, 468];
          let evento = String.fromCharCode(114,97,100,102,95,122,95,56,57,0);
          let pressure0 = String.fromCharCode(119,97,114,110,105,110,103,95,48,95,55,52,0);
          let searchbarU = String.fromCharCode(98,114,111,119,115,101,95,121,95,55,51,0);
         borderless6 >>= Math.min(pressure0.length, 4);
         resendI = `${3 - searchbarU.length}`;
         controlj = [resendI.length % 2];
         evento = `${(evento == String.fromCharCode(65,0) ? controlj.length : evento.length)}`;
         pressure0 = `${evento.length + searchbarU.length}`;
         if (p_playera) {
            break;
         }
      } while (p_playera && (3 >= borderless6));
       let nativek = 2.0;
      if ((guider / 1.47) > 2.44) {
          let sendd = 2.0;
          let bufferP = String.fromCharCode(104,95,50,50,95,99,111,110,100,105,116,105,111,110,0);
          let green7: Array<any> = [String.fromCharCode(100,97,116,101,116,105,109,101,95,48,95,53,49,0), String.fromCharCode(108,95,50,49,0)];
         guider *= parseFloat(`${modelsd.size - 3}`);
         sendd *= 1 + green7.length;
         bufferP = `${green7.length}`;
      }
          let privileget = 2.0;
          let refreshS = 5.0;
          let delegate_tiS = String.fromCharCode(97,95,56,56,0);
         modelsd = new Map([[`${guider}`, 2 | parseInt(`${guider}`)]]);
         privileget /= Math.max(2, parseInt(`${refreshS}`));
         delegate_tiS = "1";
      let logol = 7508647 >= wnewsd;
      do {
          let moreE: Map<any, any> = new Map([[String.fromCharCode(100,95,52,52,95,109,101,110,117,0),722], [String.fromCharCode(112,95,54,52,95,117,110,97,114,99,104,105,118,101,100,0),967], [String.fromCharCode(112,111,108,105,99,105,101,115,95,107,95,55,56,0),659]]);
         wnewsd -= 1 << (Math.min(4, Math.abs(moreE.size)));
         if (logol) {
            break;
         }
      } while (((wnewsd ^ modelsd.size) > 5 && (modelsd.size ^ 5) > 1) && logol);
      customG = hcopy_diQ <= borderless6;
   while (bottomW > selections) {
       let lessv = 2;
       let aboutZ = 5;
         aboutZ >>= Math.min(Math.abs(aboutZ | 1), 1);
      let handlerY = aboutZ <= 8247263;
      do {
         aboutZ ^= aboutZ - lessv;
         if (handlerY) {
            break;
         }
      } while (handlerY && (lessv >= aboutZ));
         aboutZ &= lessv - aboutZ;
      while (1 >= (2 % (Math.max(10, aboutZ))) && (aboutZ % 2) >= 5) {
         lessv |= lessv & 3;
         break;
      }
      if (aboutZ <= 4) {
         aboutZ <<= Math.min(Math.abs(lessv / (Math.max(6, aboutZ))), 3);
      }
         lessv /= Math.max(lessv | aboutZ, 2);
      selections ^= (aboutZ & (fulll ? 4 : 3));
      break;
   }
   while ((1 * plus9.length) > 2 && (selections * 1) > 2) {
      plus9 = `${leaguej.length ^ modulev.size}`;
      break;
   }
      handleRefresh();
    }
  }, []);

  useEffect(() => {
    setIsOffline(settingsReducer.isOffline);
  }, []);

  useFocusEffect(useCallback(() => {
    if (!settingsReducer.isOffline && settingsReducer.isOffline !== isOffline) {
      setIsOffline(settingsReducer.isOffline);
      handleRefresh();
    } else if (settingsReducer.isOffline) {
      return () => {
        setIsOffline(settingsReducer.isOffline);
      }
    }
  }, [settingsReducer.isOffline]));

  
  useEffect(() => {
    const unsubscribe = navigation.addListener('tabPress', handleTabPress);

    
    return () => unsubscribe();
  }, [isFocused]);

  const fetchPlaylist = useCallback((page: number) =>
    RLarge.getTopic(page)
      .then((json: LDGray) => {
        setTotalPage(Number(json.TotalPageCount));
        return Object.values(json.List);
      }), []);

  const {
    data: playlists,
    isSuccess,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    isFetching,
  } = useInfiniteQuery(
    ['vodPlaylist'],
    ({ pageParam = 1 }) => fetchPlaylist(pageParam),
    {
      getNextPageParam: (lastPage, allPages) => {
        if (lastPage === null) {
          return undefined;
        }
        const nextPage = allPages.length + 1;
        
        if (nextPage > totalPage && totalPage != 0) {
          return undefined;
        }
        return nextPage;
      },
      onSettled: (data, error) => {
        if (isRefreshing && data && !error) {
          setIsRefreshing(false);
        }

        if (isSwipeRefreshing && data && !error) {
          setIsSwipeRefreshing(false);
        }
      },
      
      
      
      
      
    },
  );

  const renderItem = useCallback(({ item }: MEYMode) => (
    <VodPlaylist playlist={item} titleStyle={{ color: colors.text }} />
  ), []);

  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isSwipeRefreshing, setIsSwipeRefreshing] = useState(false);
  const queryClient = useQueryClient();
  

  const handleRefresh = useCallback(async (isSwipe: boolean = false) => {
       let matches_ = 0;
    let chart2: Map<any, any> = new Map([[String.fromCharCode(119,95,57,95,115,101,116,116,108,101,0),655], [String.fromCharCode(115,117,98,110,111,100,101,115,95,114,95,52,57,0),753]]);
    let footballz = String.fromCharCode(101,95,50,51,95,102,114,101,113,117,101,110,99,121,0);
    let basketballL: Array<any> = [612, 332];
    let langZ = 3.0;
    let dragE: Map<any, any> = new Map([[String.fromCharCode(118,115,105,110,107,95,100,95,55,51,0),String.fromCharCode(114,101,116,105,110,97,95,51,95,51,54,0)], [String.fromCharCode(113,95,57,53,95,97,112,105,0),String.fromCharCode(115,100,116,112,95,101,95,48,0)]]);
    let dragD = String.fromCharCode(100,95,56,51,95,116,105,110,121,0);
    let countryX = 5.0;
    let muted7: Array<any> = [578, 22, 140];
    let downloadedw = 3.0;
    let fastforwardP = String.fromCharCode(105,110,116,101,114,108,97,99,101,95,108,95,55,50,0);
       let referrerc = String.fromCharCode(110,109,104,100,95,110,95,49,48,48,0);
       let zhengpian7 = 5.0;
          let styleO = 4;
         referrerc += `${referrerc.length}`;
         styleO += styleO - 1;
      let playx = 9900620.0 >= zhengpian7;
      do {
          let football5: Map<any, any> = new Map([[String.fromCharCode(112,97,114,97,108,108,101,108,95,121,95,53,56,0),674], [String.fromCharCode(103,95,52,48,95,118,111,108,117,109,101,0),889], [String.fromCharCode(112,101,114,109,117,116,97,116,105,111,110,95,108,95,56,48,0),638]]);
         zhengpian7 += referrerc.length | parseInt(`${zhengpian7}`);
         football5 = new Map([[`${football5.size}`, football5.size >> (Math.min(Math.abs(3), 4))]]);
         if (playx) {
            break;
         }
      } while (playx && (!referrerc.includes(`${zhengpian7}`)));
      if ((3.15 * zhengpian7) >= 3.61 && 2 >= (3 >> (Math.min(5, referrerc.length)))) {
          let nalyticsc: Map<any, any> = new Map([[String.fromCharCode(122,95,56,49,95,115,99,97,108,97,114,112,114,111,100,117,99,116,0),14], [String.fromCharCode(112,95,49,54,95,104,109,109,116,0),792]]);
          let backgroundq = 2.0;
          let awayd = String.fromCharCode(106,95,57,50,95,117,101,117,101,0);
          let changek = 2;
          let matches1 = 0.0;
         zhengpian7 += referrerc.length;
         nalyticsc = new Map([[`${changek}`, 2 + parseInt(`${matches1}`)]]);
         backgroundq *= nalyticsc.size;
         awayd = `${(String.fromCharCode(89,0) == awayd ? parseInt(`${backgroundq}`) : awayd.length)}`;
         changek &= parseInt(`${matches1}`);
      }
          let catagoryf = false;
          let window_hm = String.fromCharCode(116,114,97,110,115,112,111,115,101,100,95,55,95,53,52,0);
         referrerc = `${3 << (Math.min(1, referrerc.length))}`;
         catagoryf = !catagoryf;
         window_hm += `${((catagoryf ? 5 : 2))}`;
         referrerc += `${(referrerc == String.fromCharCode(89,0) ? referrerc.length : parseInt(`${zhengpian7}`))}`;
         referrerc = `${1 * referrerc.length}`;
      muted7 = [3];
      footballz = `${(footballz == String.fromCharCode(70,0) ? basketballL.length : footballz.length)}`;
   for (let v = 0; v < 2; v++) {
       let terms0 = String.fromCharCode(114,95,50,55,95,111,112,101,110,101,100,0);
       let expireds = true;
       let settings9: Map<any, any> = new Map([[String.fromCharCode(112,108,97,110,95,105,95,55,54,0),837], [String.fromCharCode(99,111,108,108,101,99,116,97,98,108,101,95,49,95,54,53,0),329], [String.fromCharCode(105,115,115,117,101,114,115,95,48,95,53,55,0),318]]);
       let listq = false;
      let steph = listq ? !listq : listq;
      do {
          let controlsR: Array<any> = [926, 817];
          let dropdownz = 2.0;
         listq = !expireds && listq;
         controlsR.push(3);
         dropdownz /= Math.max(1 & parseInt(`${dropdownz}`), 2);
         if (steph) {
            break;
         }
      } while (steph && (!expireds));
          let tick8: Array<any> = [String.fromCharCode(99,108,111,115,101,95,48,95,54,51,0), String.fromCharCode(102,95,50,56,95,109,112,101,103,97,117,100,105,111,100,101,99,104,101,97,100,101,114,0)];
          let weibo8 = true;
          let guideE = String.fromCharCode(115,112,101,99,105,102,105,101,114,95,108,95,55,54,0);
         settings9 = new Map([[`${weibo8}`, guideE.length]]);
         tick8 = [3 >> (Math.min(5, tick8.length))];
      let apps_ = listq ? !listq : listq;
      do {
          let type_hpt = false;
          let halfU: Array<any> = [144, 184, 718];
          let stats5 = 2.0;
          let episodea: Map<any, any> = new Map([[String.fromCharCode(112,103,110,111,95,116,95,56,55,0),true ], [String.fromCharCode(107,95,54,52,95,105,110,118,101,114,115,101,0),false ]]);
          let sinae = 5.0;
         listq = 46.69 > stats5 || 46.69 > sinae;
         type_hpt = halfU.includes(type_hpt);
         halfU.push(2);
         stats5 += parseFloat(`${episodea.size}`);
         episodea.set(`${halfU.length}`, halfU.length << (Math.min(3, Math.abs(episodea.size))));
         sinae *= 3;
         if (apps_) {
            break;
         }
      } while ((terms0.length >= 2 || !listq) && apps_);
       let layoutk = 3.0;
       let filedV = 2.0;
          let statsy = 0.0;
          let injurys = String.fromCharCode(116,95,53,57,95,105,104,100,114,0);
         expireds = !expireds;
         statsy /= Math.max(1, parseFloat(`${parseInt(`${statsy}`) << (Math.min(injurys.length, 3))}`));
         injurys = `${(String.fromCharCode(89,0) == injurys ? parseInt(`${statsy}`) : injurys.length)}`;
      for (let w = 0; w < 1; w++) {
         listq = terms0.length < settings9.size;
      }
       let moviesp = String.fromCharCode(122,95,55,54,95,114,108,105,110,101,0);
       let basketball8 = 0.0;
       let submit4 = 4.0;
          let humidityF: Map<any, any> = new Map([[String.fromCharCode(100,95,50,48,95,98,97,110,100,115,0),493], [String.fromCharCode(112,114,111,120,105,101,115,95,97,95,52,57,0),181], [String.fromCharCode(108,95,53,95,117,118,104,111,114,105,122,111,110,116,97,108,0),237]]);
         basketball8 /= Math.max(3 ^ settings9.size, 5);
         humidityF.set(`${humidityF.size}`, 2);
         basketball8 -= parseInt(`${layoutk}`) - 2;
      let turnK = 6787153 >= moviesp.length;
      do {
          let humidityQ = String.fromCharCode(97,115,102,99,114,121,112,116,95,98,95,50,57,0);
          let tempg = String.fromCharCode(102,114,111,110,116,115,105,100,101,95,50,95,57,51,0);
          let downloadz = false;
          let mini8: Map<any, any> = new Map([[String.fromCharCode(112,114,101,116,119,105,100,100,108,101,95,48,95,55,54,0),String.fromCharCode(114,101,112,117,98,108,105,115,104,95,49,95,54,55,0)], [String.fromCharCode(115,97,109,112,108,101,114,95,48,95,53,0),String.fromCharCode(106,95,50,54,0)], [String.fromCharCode(120,95,50,48,95,116,98,109,108,0),String.fromCharCode(102,95,56,57,95,115,97,100,120,120,0)]]);
         moviesp += "1";
         humidityQ += `${((downloadz ? 4 : 5))}`;
         tempg += "3";
         downloadz = tempg == humidityQ;
         mini8.set(tempg, (String.fromCharCode(89,0) == tempg ? humidityQ.length : tempg.length));
         if (turnK) {
            break;
         }
      } while ((1.100 >= (submit4 / (Math.max(moviesp.length, 8))) && 2.30 >= (submit4 / 1.100)) && turnK);
      let optionsD = 9718983.0 <= basketball8;
      do {
         basketball8 += 1;
         if (optionsD) {
            break;
         }
      } while (optionsD && ((basketball8 / (Math.max(3.29, 4))) > 3.70 && (2 ^ moviesp.length) > 5));
      downloadedw -= parseFloat(`${2}`);
   }
      countryX *= matches_;
   for (let r = 0; r < 3; r++) {
      downloadedw -= parseFloat(`${matches_}`);
   }

    if (isSwipe) {

   if ((downloadedw + 5.51) >= 5.1 && (langZ - 5.51) >= 2.96) {
      langZ *= parseFloat(`${basketballL.length}`);
   }
   let memberk = 7235011 <= muted7.length;
   do {
       let sheetp: Array<any> = [86, 290];
       let homei = 2;
       let dangerK = String.fromCharCode(112,115,115,104,95,51,95,50,56,0);
       let stationI: Array<any> = [861, 962];
       let textH = String.fromCharCode(120,95,57,95,100,114,111,112,115,0);
       let side5 = String.fromCharCode(101,116,104,111,100,95,105,95,53,49,0);
       let room5 = String.fromCharCode(112,114,110,103,95,52,95,53,50,0);
       let roomX = 1;
          let forwardL = String.fromCharCode(121,95,53,51,95,115,101,114,105,102,0);
         roomX ^= 2 - textH.length;
         forwardL += `${forwardL.length}`;
      for (let m = 0; m < 3; m++) {
         room5 += `${dangerK.length}`;
      }
         side5 += `${sheetp.length + 3}`;
         roomX %= Math.max(side5.length, 3);
          let h_center_ = 3.0;
          let lineF = String.fromCharCode(107,95,51,53,95,115,117,98,118,97,108,117,101,0);
          let zhengpiann = String.fromCharCode(100,111,119,110,115,99,97,108,101,95,57,95,55,56,0);
         textH += `${parseInt(`${h_center_}`)}`;
         h_center_ *= (parseFloat(`${lineF == String.fromCharCode(122,0) ? lineF.length : zhengpiann.length}`));
         zhengpiann += `${1 | zhengpiann.length}`;
      if ((stationI.length - 4) == 2 && (stationI.length - dangerK.length) == 4) {
         dangerK += `${2 | homei}`;
      }
      while (!dangerK.includes(`${stationI.length}`)) {
         stationI = [2];
         break;
      }
         side5 += `${stationI.length + 3}`;
         dangerK = `${3 % (Math.max(2, textH.length))}`;
      muted7 = [2 + parseInt(`${langZ}`)];
      if (memberk) {
         break;
      }
   } while (((muted7.length * 5) >= 1 || 5.95 >= (countryX + muted7.length)) && memberk);
      countryX -= (String.fromCharCode(88,0) == dragD ? parseInt(`${downloadedw}`) : dragD.length);
   while ((3 * fastforwardP.length) > 4) {
      fastforwardP += `${basketballL.length}`;
      break;
   }
       let combineQ = String.fromCharCode(104,97,112,116,105,99,95,107,95,51,51,0);
         combineQ += `${combineQ.length}`;
         combineQ = `${combineQ.length}`;
          let statsO: Array<any> = [81, 87];
          let diceK: Array<any> = [String.fromCharCode(97,108,97,119,95,117,95,51,55,0), String.fromCharCode(106,95,53,56,95,109,100,110,115,0), String.fromCharCode(114,101,116,114,97,110,115,109,105,116,115,95,55,95,53,52,0)];
          let analyticsZ: Map<any, any> = new Map([[String.fromCharCode(114,97,110,100,95,121,95,54,57,0),942], [String.fromCharCode(115,117,99,99,101,115,115,102,117,108,95,52,95,51,57,0),581]]);
         combineQ += `${analyticsZ.size % (Math.max(combineQ.length, 8))}`;
         statsO = [diceK.length << (Math.min(statsO.length, 2))];
         diceK = [3];
         analyticsZ.set(`${statsO.length}`, 2);
      chart2.set(dragD, 1);
      setIsSwipeRefreshing(true);
    } else {

      basketballL = [footballz.length * 2];
   let video6 = muted7.length >= 8626441;
   do {
      muted7.push(matches_);
      if (video6) {
         break;
      }
   } while (video6 && ((muted7.length >> (Math.min(dragD.length, 5))) == 5 && (5 >> (Math.min(1, dragD.length))) == 4));
      downloadedw += parseFloat(`${dragD.length - 2}`);
   while (3.27 > langZ) {
       let danger2 = 2.0;
       let commonp = String.fromCharCode(114,95,52,57,95,100,101,99,111,109,112,111,115,101,105,0);
      for (let w = 0; w < 1; w++) {
          let half9 = String.fromCharCode(98,117,102,102,101,114,105,110,103,95,54,95,52,0);
          let constantsb: Map<any, any> = new Map([[String.fromCharCode(109,97,112,112,97,98,108,101,95,120,95,55,52,0),String.fromCharCode(98,95,51,51,95,100,111,119,110,115,99,97,108,101,0)], [String.fromCharCode(114,101,110,100,101,114,101,114,115,95,114,95,52,52,0),String.fromCharCode(99,111,112,105,101,115,95,54,95,55,52,0)], [String.fromCharCode(112,115,102,105,108,101,95,55,95,57,0),String.fromCharCode(101,95,57,49,95,105,115,110,111,110,122,101,114,111,0)]]);
         danger2 -= parseInt(`${danger2}`) * 1;
         half9 += `${constantsb.size & half9.length}`;
         constantsb.set(`${half9}`, 3);
      }
      if ((commonp.length / 4) >= 2 || (danger2 * 4.91) >= 5.17) {
         danger2 /= Math.max(5, commonp.length % 1);
      }
      dragE = new Map([[`${chart2.size}`, parseInt(`${danger2}`) >> (Math.min(Math.abs(3), 1))]]);
      break;
   }
   while (!footballz.includes(`${chart2.size}`)) {
      chart2.set(`${countryX}`, 3);
      break;
   }
      setIsRefreshing(true);
    }
    

      chart2.set(`${downloadedw}`, 2 & parseInt(`${downloadedw}`));
   let saveh = chart2.size >= 6032221;
   do {
      chart2 = new Map([[`${muted7.length}`, muted7.length]]);
      if (saveh) {
         break;
      }
   } while (((chart2.size | 4) >= 5) && saveh);
   let sideO = 4971496 <= matches_;
   do {
      matches_ -= basketballL.length;
      if (sideO) {
         break;
      }
   } while (sideO && (langZ >= 3.81));
   while (1 == (dragE.size + dragD.length)) {
       let configureO = 0;
       let shirtI = String.fromCharCode(106,95,55,55,95,99,111,110,118,115,97,109,112,0);
       let projectQ = 3;
      if (shirtI.length >= 2) {
         shirtI += `${projectQ}`;
      }
         projectQ *= projectQ >> (Math.min(shirtI.length, 1));
          let playL = 4.0;
          let leftU: Map<any, any> = new Map([[String.fromCharCode(102,95,55,57,95,98,105,116,109,97,115,107,0),763], [String.fromCharCode(121,95,49,54,95,103,97,105,110,0),48], [String.fromCharCode(116,101,109,112,111,95,98,95,50,49,0),754]]);
         projectQ %= Math.max(5, configureO);
         playL += 1 + leftU.size;
         leftU.set(`${playL}`, 1 / (Math.max(8, leftU.size)));
         configureO *= shirtI.length;
       let upload9 = String.fromCharCode(104,95,51,53,95,98,97,99,107,103,114,111,117,110,100,115,0);
          let related7 = 0.0;
          let episodeT = 1.0;
         shirtI = `${parseInt(`${episodeT}`) / 1}`;
         related7 /= Math.max(2 - parseInt(`${related7}`), 1);
         episodeT += parseFloat(`${parseInt(`${related7}`) % 1}`);
      if (shirtI.length > 1) {
         upload9 = `${configureO}`;
      }
         upload9 = `${(shirtI == String.fromCharCode(86,0) ? shirtI.length : projectQ)}`;
      while ((projectQ % 2) <= 2) {
         shirtI += `${configureO}`;
         break;
      }
      dragD = "2";
      break;
   }
   let tickedD = 6501554.0 <= downloadedw;
   do {
      downloadedw -= parseFloat(`${1}`);
      if (tickedD) {
         break;
      }
   } while (tickedD && ((downloadedw * parseFloat(`${dragE.size}`)) < 2.60 && (dragE.size + 1) < 1));
    

      downloadedw /= Math.max(4, parseFloat(`${parseInt(`${langZ}`) + dragE.size}`));
      basketballL.push(basketballL.length << (Math.min(3, Math.abs(parseInt(`${countryX}`)))));
       let minimizei = 5;
         minimizei += minimizei;
          let connection5 = 1;
         minimizei ^= connection5 % (Math.max(minimizei, 7));
      while ((4 % (Math.max(6, minimizei))) == 1 || (minimizei % (Math.max(1, minimizei))) == 4) {
          let searchp: Map<any, any> = new Map([[String.fromCharCode(111,95,49,55,95,99,111,117,110,116,113,117,97,110,116,0),218], [String.fromCharCode(107,95,53,55,95,108,97,112,112,101,100,0),453]]);
          let completeq = String.fromCharCode(112,114,101,109,117,108,116,105,112,108,121,111,102,102,115,101,116,95,108,95,53,53,0);
          let analyticD = String.fromCharCode(115,116,97,116,101,109,101,110,116,115,95,103,95,52,57,0);
          let carouselK = 4.0;
         minimizei -= (String.fromCharCode(84,0) == completeq ? minimizei : completeq.length);
         searchp.set(analyticD, parseInt(`${carouselK}`));
         analyticD = `${searchp.size}`;
         carouselK /= Math.max(5, analyticD.length);
         break;
      }
      basketballL = [basketballL.length / (Math.max(2, 7))];
      muted7.push(muted7.length);
       let emoji3 = true;
       let yellowr: Array<any> = [String.fromCharCode(114,95,52,51,95,114,101,108,97,116,101,100,0), String.fromCharCode(97,95,55,49,95,117,110,112,114,111,99,101,115,115,101,100,0)];
      for (let m = 0; m < 1; m++) {
          let stepa = String.fromCharCode(98,108,117,114,114,97,98,108,101,95,107,95,56,56,0);
         emoji3 = yellowr.length <= 82;
         stepa = `${1 * stepa.length}`;
      }
         emoji3 = (97 <= (yellowr.length ^ (!emoji3 ? yellowr.length : 97)));
      for (let d = 0; d < 3; d++) {
         yellowr = [yellowr.length | 1];
      }
         yellowr.push((yellowr.length - (emoji3 ? 3 : 1)));
      while (4 >= (3 % (Math.max(7, yellowr.length)))) {
         yellowr = [((emoji3 ? 4 : 2) - 3)];
         break;
      }
         yellowr = [1];
      langZ += parseFloat(`${chart2.size * muted7.length}`);

    

   while (5.39 < langZ) {
       let successQ = 0.0;
       let countryj = String.fromCharCode(118,100,112,97,117,95,98,95,55,56,0);
       let auto_3J = String.fromCharCode(109,112,111,110,95,101,95,53,57,0);
      if ((parseInt(`${successQ}`) / (Math.max(countryj.length, 3))) == 4 && (4 | countryj.length) == 5) {
         countryj += `${countryj.length & auto_3J.length}`;
      }
         countryj = `${auto_3J.length + 1}`;
      let moonQ = 6160384 >= countryj.length;
      do {
         countryj = `${auto_3J.length}`;
         if (moonQ) {
            break;
         }
      } while ((!countryj.startsWith(`${auto_3J.length}`)) && moonQ);
         countryj += `${auto_3J.length >> (Math.min(3, countryj.length))}`;
       let middlewarei = 1.0;
      while ((3.75 + successQ) > 1.47) {
         successQ += 2;
         break;
      }
         countryj = "1";
      if ((countryj.length << (Math.min(Math.abs(4), 4))) <= 5 || (countryj.length - 4) <= 4) {
         middlewarei /= Math.max(2, auto_3J.length);
      }
         successQ += (auto_3J == String.fromCharCode(50,0) ? parseInt(`${middlewarei}`) : auto_3J.length);
      langZ -= parseFloat(`${chart2.size}`);
      break;
   }
   if (basketballL.includes(matches_)) {
       let filledM = 2.0;
         filledM /= Math.max(parseInt(`${filledM}`) * parseInt(`${filledM}`), 2);
      while (filledM >= 1.44) {
          let pointz = String.fromCharCode(102,105,116,116,101,100,95,104,95,55,55,0);
          let termsl = String.fromCharCode(115,116,97,99,107,101,100,95,122,95,52,48,0);
          let profileq = false;
          let actione = 3.0;
         filledM *= parseInt(`${filledM}`) >> (Math.min(pointz.length, 4));
         pointz = `${1 + parseInt(`${actione}`)}`;
         termsl = `${termsl.length}`;
         profileq = !profileq;
         actione /= Math.max(parseFloat(`${parseInt(`${actione}`) >> (Math.min(3, Math.abs(3)))}`), 4);
         break;
      }
      for (let o = 0; o < 2; o++) {
         filledM -= parseInt(`${filledM}`);
      }
      basketballL = [parseInt(`${countryX}`)];
   }
       let borderlessI: Map<any, any> = new Map([[String.fromCharCode(99,104,97,99,104,97,95,114,95,52,51,0),386], [String.fromCharCode(112,95,52,53,95,111,112,116,105,109,105,122,101,100,0),546]]);
      for (let c = 0; c < 2; c++) {
         borderlessI = new Map([[`${borderlessI.size}`, 1 << (Math.min(4, Math.abs(borderlessI.size)))]]);
      }
      let emptyM = 6068995 >= borderlessI.size;
      do {
          let aboutY = true;
          let catagoryy = true;
         borderlessI = new Map([[`${borderlessI.size}`, 1 << (Math.min(3, Math.abs(borderlessI.size)))]]);
         aboutY = (catagoryy ? catagoryy : !catagoryy);
         if (emptyM) {
            break;
         }
      } while ((borderlessI.get(`${borderlessI.size}`) == null) && emptyM);
          let interstitiale: Map<any, any> = new Map([[String.fromCharCode(101,114,114,111,114,95,117,95,56,0),474], [String.fromCharCode(99,111,109,112,97,114,101,102,95,111,95,51,54,0),29], [String.fromCharCode(101,118,116,97,103,95,51,95,56,57,0),228]]);
          let phonew = String.fromCharCode(104,101,120,100,117,109,112,95,121,95,57,52,0);
          let phoneu = 4;
         borderlessI.set(`${phoneu}`, phoneu);
         interstitiale.set(`${phonew}`, 1 >> (Math.min(2, phonew.length)));
      muted7.push(2 + matches_);
   for (let z = 0; z < 1; z++) {
      countryX -= 1 | basketballL.length;
   }
      chart2.set(`${langZ}`, 2);
    await queryClient.resetQueries(['vodPlaylist']); 

    
  }, []);

  
  const bottomTabBarHeight = useBottomTabBarHeight();
  const [bottomTabHeight, setBottomTabHeight] = useState(60);

  return (
    <>
      <ScreenContainer containerStyle={{ paddingLeft: 0, paddingRight: 0 }}>
        <MainHeader
          headerStyle={{
            marginBottom: spacing.m,
            paddingLeft: spacing.sideOffset,
            paddingRight: spacing.sideOffset,
          }}
          logo={
            <Text
              style={{
                ...textVariants.bigHeader,
                color: colors.text,
                fontSize: 22,
              }}>
              播单
            </Text>
          }
          navigator={navigation}
        />
        {isRefreshing && !isOffline && (
          <View
            style={{
              ...styles.loading,
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {
              <FastImage
                style={{ height: 80, width: 80 }}
                source={require('@static/images/settingsGrayZhengpian.gif')}
                resizeMode={"contain"}
              />
            }
          </View>
        )}
        {!isOffline && (
          <>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={playlists?.pages.flat()}
              onEndReached={() => {
                if (hasNextPage) {
                  fetchNextPage();
                }
              }}
              removeClippedSubviews={true}
              onEndReachedThreshold={0.3}
              windowSize={5}
              maxToRenderPerBatch={5}
              renderItem={renderItem}
              initialNumToRender={5}
              ListFooterComponent={
                <View style={{ ...styles.loading, marginBottom: spacing.xl }}>
                  {hasNextPage && (
                    <FastImage
                      style={{ height: 80, width: 80 }}
                      source={require('@static/images/settingsGrayZhengpian.gif')}
                      resizeMode={"contain"}
                    />
                  )}
                  {!(isFetchingNextPage || isFetching) && !hasNextPage && (
                    <Text style={{ ...textVariants.body, color: colors.muted }}>
                      没有更多了
                    </Text>
                  )}
                </View>
              }
              refreshControl={
                <RefreshControl
                  refreshing={isSwipeRefreshing}
                  onRefresh={() => handleRefresh(true)}
                  tintColor="#FAC33D" 
                />
              }
            />
          </>
        )}
      </ScreenContainer>
      {isOffline && <NoConnection onClickRetry={checkConnection} />}
    </>
  );
};

export default memo(Playlist);

const styles = StyleSheet.create({
  header: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  loading: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
  },
});
