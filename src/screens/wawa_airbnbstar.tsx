import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Image,
  ImageBackground,
  Platform,
  TouchableWithoutFeedback,
} from "react-native";
import ScreenContainer from "../components/container/wawa_nterstitial_iconpipexpand";
import { useFocusEffect, useTheme } from "@react-navigation/native";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

import {
  BottomTabScreenProps,
  useBottomTabBarHeight,
} from "@react-navigation/bottom-tabs";
import { API_DOMAIN, MATCH_API_DOMAIN, SHOW_ZF_CONST } from "@utility/wawa_iconpointscore";
import Animated from "react-native-reanimated";
import FastImage from "react-native-fast-image";
import wawaLibjsinspector from "../Sports/middleware/wawa_ping";
import { Url } from "../Sports/middleware/wawa_iconfeedback";

import MatchScheduleNavVip from "../Sports/components/matchSchedule/wawa_configure_langkey";
import NoConnection from "../components/common/wawa_filed_privacy";
import NetInfo, { NetInfoState } from "@react-native-community/netinfo";

import { useAppSelector, useSelector } from "@hooks/wawa_root";
import { wawaIconsubssuccess } from "@redux/wawa_bgvipsport_spinner";
import { useDispatch } from "react-redux";
import BecomeVipOverlay from "../components/modal/wawa_arrowrightwithtail";
import { wawaBackground } from "@redux/reducers/wawa_comment";
import wawa_dacccfaabfbcbadeebddcabacdffdbc_video from "../../Umeng/wawa_dacccfaabfbcbadeebddcabacdffdbc_video";
import XvodTabIcon from "@static/images/libjsiWhatsapp.svg";
import SportTabIcon from "@static/images/gestureBackiconmask.svg";
import XVodTab from "./VipPrivilege/wawa_disconnected_middleware";
import { screenModel } from "@type/wawa_rules";
import {
  disableAdultMode,
  setAutoSelectSport,
  showAdultModeDisclaimer,
} from "@redux/actions/wawa_related";
import { BlurView } from "../components/blurView";
import { wawaBasketballiconPenaltyshootnogoal } from "../../wawa_shareblack_orientation";
import VipEntry from '@static/images/splash/activeLibavutil.svg';
import { wawaPhoneControls } from "@redux/reducers/wawa_umeng";
import { wawaLibglog } from "@models/wawa_refreshborderless_found";
interface wawaFullscreenminIconarrowleft {
  has_submenu: boolean;
  ids: Array<number>;
  type: string;
}

export default ({ navigation }: BottomTabScreenProps<any>) => {
  const showSport = (wawaBasketballiconPenaltyshootnogoal.instance.tabConfig != null && wawaBasketballiconPenaltyshootnogoal.instance.len == 5)
  const { textVariants, colors, spacing } = useTheme();
  const [isOffline, setIsOffline] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const dispatch = useDispatch();
  const [showBecomeVIPOverlay, setShowBecomeVIPOverlay] = useState(false);
  const userState = useSelector<wawaPhoneControls>('userReducer');
  const settingsReducer: wawaBackground = useAppSelector(
    ({ settingsReducer }: wawaIconsubssuccess) => settingsReducer
  );

  const screenState: screenModel = useAppSelector(
    ({ screenReducer }) => screenReducer
  );

  const [selectedTab, setSelectedTab] = useState(showSport ? 'sport' : screenState.showAdultTab ? 'xvod' : null);

  const handleRejectEighteenPlus = () => {
       let libreanimatedn = String.fromCharCode(110,95,54,52,0);
    let invitee = String.fromCharCode(103,101,115,116,117,114,101,115,95,122,95,57,53,0);
    let colors2 = String.fromCharCode(100,117,109,95,55,95,55,53,0);
    let roundh = 0.0;
    let libtanl: Map<any, any> = new Map([[String.fromCharCode(107,95,49,95,115,121,110,99,104,114,111,110,111,117,115,0),290], [String.fromCharCode(101,95,55,51,95,115,101,109,105,99,111,108,111,110,0),549]]);
    let liveendmodallogoy: Map<any, any> = new Map([[String.fromCharCode(103,95,55,55,95,117,112,100,97,116,101,0),122], [String.fromCharCode(112,95,52,50,95,110,101,116,105,115,114,0),918]]);
    let rewardQ = 1;
    let unselectedb: Map<any, any> = new Map([[String.fromCharCode(101,115,101,110,100,95,48,95,54,51,0),614], [String.fromCharCode(112,95,51,54,95,102,97,105,108,115,0),906]]);
    let singleH = false;
    let delegate_v3a: Array<any> = [541, 275, 439];
    let firebasea = 1;
    let iconsetting4 = String.fromCharCode(105,95,52,48,95,115,102,114,97,109,101,0);
    let white3 = true;
   while (invitee == String.fromCharCode(87,0)) {
      libreanimatedn = `${rewardQ % (Math.max(4, parseInt(`${roundh}`)))}`;
      break;
   }
      libreanimatedn += `${parseInt(`${roundh}`) % 1}`;
       let predictionwin1 = String.fromCharCode(118,95,49,95,114,101,116,97,105,110,115,0);
       let libturbomodulejsijni3 = String.fromCharCode(114,95,55,54,0);
       let completew = 2.0;
       let basketballicon6 = 0.0;
      while (libturbomodulejsijni3.length < 1) {
         libturbomodulejsijni3 = `${predictionwin1.length + 2}`;
         break;
      }
          let giftM: Array<any> = [719, 120, 689];
          let recommendationr = false;
          let membership3 = 2.0;
         basketballicon6 += parseInt(`${completew}`) / 2;
         giftM = [(parseInt(`${membership3}`) % (Math.max(2, (recommendationr ? 4 : 2))))];
         recommendationr = membership3 == 69.56;
      while (2 <= (parseInt(`${completew}`) + libturbomodulejsijni3.length) || (parseInt(`${completew}`) + libturbomodulejsijni3.length) <= 2) {
         completew += parseInt(`${completew}`) << (Math.min(libturbomodulejsijni3.length, 5));
         break;
      }
          let firebasel: Map<any, any> = new Map([[String.fromCharCode(119,95,52,56,95,100,97,116,97,99,101,110,116,101,114,0),485], [String.fromCharCode(104,95,53,56,95,114,97,108,102,100,97,116,97,0),356]]);
          let langu = String.fromCharCode(118,112,97,105,110,116,101,114,95,107,95,54,0);
         completew += predictionwin1.length + libturbomodulejsijni3.length;
         firebasel = new Map([[`${firebasel.size}`, (String.fromCharCode(77,0) == langu ? langu.length : firebasel.size)]]);
      let q_hashS = 5672622.0 <= completew;
      do {
          let iconpipexpandc = 4.0;
          let libffmpegkitj = String.fromCharCode(104,95,49,56,95,115,111,99,114,101,97,116,101,0);
          let indicator0 = 5;
          let stringR = String.fromCharCode(102,105,108,101,114,101,97,100,115,116,114,101,97,109,95,49,95,51,52,0);
         completew += libffmpegkitj.length ^ stringR.length;
         iconpipexpandc *= parseFloat(`${parseInt(`${iconpipexpandc}`)}`);
         libffmpegkitj += "1";
         indicator0 ^= indicator0;
         stringR += `${indicator0 ^ 2}`;
         if (q_hashS) {
            break;
         }
      } while ((completew > 1.32) && q_hashS);
      libreanimatedn = `${rewardQ}`;
       let whiteanimationlive3: Map<any, any> = new Map([[String.fromCharCode(106,95,51,55,95,112,105,110,110,105,110,103,0),355], [String.fromCharCode(101,120,112,108,111,114,101,114,95,97,95,54,57,0),981]]);
       let ticked1 = String.fromCharCode(116,95,57,56,0);
       let strings0 = String.fromCharCode(114,97,116,101,99,116,114,108,95,57,95,49,57,0);
         ticked1 += `${ticked1.length & 3}`;
         whiteanimationlive3.set(`${ticked1}`, 3 | whiteanimationlive3.size);
         whiteanimationlive3.set(ticked1, ticked1.length);
         ticked1 += `${strings0.length}`;
          let member9 = String.fromCharCode(114,116,97,100,100,114,115,95,116,95,55,55,0);
          let chinaZ: Map<any, any> = new Map([[String.fromCharCode(105,95,53,49,95,109,107,118,119,114,105,116,101,114,0),String.fromCharCode(114,97,100,102,103,95,56,95,57,53,0)], [String.fromCharCode(112,101,110,100,105,110,103,95,50,95,55,52,0),String.fromCharCode(117,110,108,111,99,107,101,100,95,105,95,56,56,0)], [String.fromCharCode(118,95,51,52,95,102,97,115,116,116,101,115,116,0),String.fromCharCode(104,97,110,100,108,101,95,57,95,55,56,0)]]);
          let search8 = true;
         strings0 += `${1 + chinaZ.size}`;
         member9 = `${member9.length}`;
         chinaZ = new Map([[`${search8}`, ((search8 ? 1 : 4) % (Math.max(member9.length, 7)))]]);
         strings0 += `${(String.fromCharCode(119,0) == strings0 ? whiteanimationlive3.size : strings0.length)}`;
      if ((2 + strings0.length) <= 1 || 1 <= (2 + strings0.length)) {
          let awayG = String.fromCharCode(116,95,53,56,95,121,117,118,116,101,115,116,0);
          let shootnogoalX = 5.0;
          let renewe = 2;
          let userM: Array<any> = [324, 618];
         strings0 += `${parseInt(`${shootnogoalX}`)}`;
         awayG = "2";
         shootnogoalX /= Math.max(5, parseFloat(`${userM.length}`));
         renewe >>= Math.min(1, Math.abs(renewe & userM.length));
      }
         whiteanimationlive3 = new Map([[`${whiteanimationlive3.size}`, (strings0 == String.fromCharCode(72,0) ? whiteanimationlive3.size : strings0.length)]]);
          let target1 = 3.0;
          let circleV = true;
          let policyM = 0.0;
         whiteanimationlive3.set(ticked1, (ticked1 == String.fromCharCode(81,0) ? ticked1.length : parseInt(`${target1}`)));
         target1 -= 2 ^ parseInt(`${policyM}`);
         circleV = circleV || 33.40 >= policyM;
      unselectedb.set(`${roundh}`, unselectedb.size);
   for (let c = 0; c < 3; c++) {
       let predictionbuttona = 3.0;
      let watchnowbgw = predictionbuttona <= 8678383.0;
      do {
          let awayiconC = 3.0;
          let iconrefreshh: Array<any> = [32, 705, 691];
          let mintegralJ = String.fromCharCode(98,95,56,54,95,116,111,111,116,105,112,0);
          let episodeA = String.fromCharCode(109,101,108,116,95,98,95,51,51,0);
          let reactu = String.fromCharCode(115,95,52,51,95,97,110,105,109,97,116,101,0);
         predictionbuttona /= Math.max(3, episodeA.length);
         awayiconC /= Math.max(iconrefreshh.length << (Math.min(Math.abs(2), 5)), 1);
         iconrefreshh.push((reactu == String.fromCharCode(117,0) ? reactu.length : mintegralJ.length));
         mintegralJ = `${reactu.length << (Math.min(Math.abs(3), 3))}`;
         episodeA = `${parseInt(`${awayiconC}`) / (Math.max(iconrefreshh.length, 1))}`;
         if (watchnowbgw) {
            break;
         }
      } while (((5 - predictionbuttona) <= 3.60) && watchnowbgw);
         predictionbuttona *= parseInt(`${predictionbuttona}`);
         predictionbuttona *= parseInt(`${predictionbuttona}`) - parseInt(`${predictionbuttona}`);
      unselectedb = new Map([[colors2, (String.fromCharCode(111,0) == libreanimatedn ? libreanimatedn.length : colors2.length)]]);
   }
   if (!invitee.startsWith(`${unselectedb.size}`)) {
      invitee = `${libreanimatedn.length | 2}`;
   }
   let usernameA = 7112738 <= libreanimatedn.length;
   do {
      libreanimatedn += `${delegate_v3a.length + unselectedb.size}`;
      if (usernameA) {
         break;
      }
   } while (usernameA && (2 <= (libreanimatedn.length >> (Math.min(3, Math.abs(rewardQ))))));
   for (let k = 0; k < 1; k++) {
      libtanl = new Map([[`${libtanl.size}`, (1 << (Math.min(5, Math.abs((singleH ? 4 : 3)))))]]);
   }
   if (2 >= delegate_v3a.length) {
      delegate_v3a = [parseInt(`${roundh}`) | libreanimatedn.length];
   }
   let executorD = rewardQ <= 5680997;
   do {
      rewardQ /= Math.max(((singleH ? 2 : 4)), 1);
      if (executorD) {
         break;
      }
   } while ((5 > (invitee.length & 3) || (rewardQ & 3) > 5) && executorD);
   for (let d = 0; d < 3; d++) {
      singleH = 52 <= libreanimatedn.length;
   }
      libreanimatedn += `${delegate_v3a.length * 3}`;
      libtanl.set(colors2, 3);
      delegate_v3a.push((String.fromCharCode(89,0) == invitee ? invitee.length : rewardQ));
      delegate_v3a = [colors2.length * libreanimatedn.length];
   if (colors2.length > 5) {
       let redscoreballj = String.fromCharCode(117,109,111,116,105,111,110,95,120,95,49,57,0);
       let assists = 4;
       let flippery: Array<any> = [String.fromCharCode(115,101,99,111,110,100,115,95,98,95,50,48,0), String.fromCharCode(108,97,114,103,101,114,95,108,95,55,54,0)];
       let yellowtoreda: Array<any> = [424, 279];
       let stringi: Map<any, any> = new Map([[String.fromCharCode(122,105,109,103,95,104,95,54,53,0),672], [String.fromCharCode(120,95,56,49,95,97,100,97,112,116,97,116,105,111,110,115,101,116,0),443], [String.fromCharCode(98,109,111,100,101,95,54,95,50,49,0),922]]);
      for (let h = 0; h < 3; h++) {
          let switch_j0F: Array<any> = [581, 820];
          let homeiconD = String.fromCharCode(112,95,51,55,95,99,121,99,108,105,99,114,101,102,114,101,115,104,0);
          let largeT = String.fromCharCode(102,95,53,49,95,100,105,115,112,97,116,99,104,101,100,0);
         stringi.set(`${assists}`, yellowtoreda.length);
         switch_j0F = [homeiconD.length];
         homeiconD = "1";
         largeT += `${3 * switch_j0F.length}`;
      }
          let china3 = 4.0;
         redscoreballj += `${flippery.length}`;
         china3 /= Math.max(parseInt(`${china3}`) / (Math.max(10, parseInt(`${china3}`))), 2);
      if ((yellowtoreda.length % (Math.max(redscoreballj.length, 10))) > 1 || (redscoreballj.length % 1) > 5) {
         redscoreballj += "1";
      }
      let const_0O = assists >= 7202693;
      do {
          let entryW = true;
          let megaphone0 = String.fromCharCode(116,105,112,115,95,98,95,52,50,0);
          let whistleorange7: Array<any> = [872, 444, 298];
          let basketballawayteamv = 3.0;
         assists ^= megaphone0.length << (Math.min(5, Math.abs(parseInt(`${basketballawayteamv}`))));
         entryW = (((!entryW ? whistleorange7.length : 23) | whistleorange7.length) < 23);
         megaphone0 = `${whistleorange7.length & 3}`;
         basketballawayteamv *= whistleorange7.length;
         if (const_0O) {
            break;
         }
      } while (const_0O && (assists > flippery.length));
          let notificationfilledU = false;
         redscoreballj = `${stringi.size % (Math.max(1, 1))}`;
         notificationfilledU = !notificationfilledU;
      while (redscoreballj.length == 5) {
         assists >>= Math.min(yellowtoreda.length, 5);
         break;
      }
         redscoreballj = "2";
         redscoreballj += `${stringi.size}`;
      while (1 >= (flippery.length / 2) || (stringi.size / 2) >= 1) {
         stringi.set(`${flippery.length}`, 3 ^ flippery.length);
         break;
      }
      while (4 < assists) {
         assists += 1 - assists;
         break;
      }
      if ((redscoreballj.length & 2) >= 3 && (2 & stringi.size) >= 1) {
          let encrypt1: Array<any> = [9, 44, 918];
          let androidJ: Array<any> = [362, 921];
          let catalogC = String.fromCharCode(115,121,109,98,111,108,105,99,97,116,101,100,95,120,95,55,51,0);
          let mintegralk: Array<any> = [585, 190, 5];
          let policy2 = 3.0;
         redscoreballj += `${catalogC.length}`;
         encrypt1 = [encrypt1.length];
         androidJ.push(parseInt(`${policy2}`));
         catalogC = `${encrypt1.length}`;
         mintegralk = [androidJ.length % (Math.max(encrypt1.length, 2))];
         policy2 *= parseFloat(`${androidJ.length}`);
      }
         assists *= stringi.size;
       let phonesharem = 5;
      if (redscoreballj.endsWith(`${assists}`)) {
         assists %= Math.max(3 + phonesharem, 3);
      }
          let yingn: Map<any, any> = new Map([[String.fromCharCode(120,95,48,95,99,111,110,115,101,99,117,116,105,118,101,0),String.fromCharCode(106,95,51,48,0)], [String.fromCharCode(103,95,54,95,120,106,112,101,103,0),String.fromCharCode(101,95,49,95,116,104,114,111,117,103,104,112,117,116,0)], [String.fromCharCode(101,110,103,108,105,115,104,95,110,95,55,57,0),String.fromCharCode(116,114,97,110,115,112,111,115,101,120,95,49,95,49,53,0)]]);
         phonesharem -= flippery.length;
         yingn = new Map([[`${yingn.size}`, 1 % (Math.max(7, yingn.size))]]);
      colors2 = `${invitee.length}`;
   }
      libtanl = new Map([[`${unselectedb.size}`, unselectedb.size * firebasea]]);
   for (let k = 0; k < 2; k++) {
       let matcht = String.fromCharCode(114,101,109,105,120,105,110,103,95,108,95,57,52,0);
       let teamdetailsbgW: Array<any> = [759, 102];
       let cored: Map<any, any> = new Map([[String.fromCharCode(98,97,99,107,100,114,111,112,95,114,95,52,49,0),String.fromCharCode(97,115,115,105,103,110,95,121,95,50,52,0)], [String.fromCharCode(112,116,115,95,112,95,54,55,0),String.fromCharCode(119,95,49,50,95,115,104,97,108,108,0)], [String.fromCharCode(97,95,50,54,95,98,117,102,102,101,114,115,114,99,0),String.fromCharCode(108,95,50,50,95,115,116,114,101,116,99,104,97,98,108,101,0)]]);
       let bannerP = String.fromCharCode(105,110,116,101,114,111,112,95,100,95,54,54,0);
       let refresh1 = String.fromCharCode(102,95,55,55,95,101,120,112,97,110,100,97,98,108,101,0);
          let penaltygoala = String.fromCharCode(111,95,56,55,95,105,110,115,116,97,108,108,97,116,105,111,110,0);
          let style_ = 5;
         refresh1 = `${penaltygoala.length}`;
         penaltygoala += `${2 / (Math.max(5, style_))}`;
         style_ >>= Math.min(Math.abs(style_ >> (Math.min(Math.abs(1), 5))), 2);
          let mbnative9: Array<any> = [501, 824, 501];
         bannerP += `${1 << (Math.min(5, mbnative9.length))}`;
         teamdetailsbgW = [teamdetailsbgW.length];
         cored = new Map([[matcht, bannerP.length]]);
         refresh1 = `${1 - cored.size}`;
      for (let o = 0; o < 3; o++) {
          let exampleimageX = String.fromCharCode(119,95,52,50,95,115,116,114,104,97,115,104,0);
          let libreactT = 5.0;
          let tickg = String.fromCharCode(119,101,108,115,101,110,99,95,110,95,56,54,0);
          let klevin3: Array<any> = [425, 96];
          let muted4: Array<any> = [177, 367, 389];
         refresh1 = "3";
         exampleimageX = `${muted4.length}`;
         libreactT += parseFloat(`${klevin3.length - 3}`);
         tickg += `${3 ^ klevin3.length}`;
         muted4.push(parseInt(`${libreactT}`) | 3);
      }
      let roomM = 6900875 >= teamdetailsbgW.length;
      do {
          let assistG: Map<any, any> = new Map([[String.fromCharCode(111,95,50,49,95,115,104,97,114,112,101,110,105,110,103,0),false ], [String.fromCharCode(99,111,110,116,97,105,110,101,100,95,113,95,55,50,0),false ], [String.fromCharCode(101,120,104,97,117,115,116,95,56,95,55,50,0),false ]]);
          let tempnodatag = 5.0;
         teamdetailsbgW = [(String.fromCharCode(111,0) == refresh1 ? refresh1.length : assistG.size)];
         assistG.set(`${tempnodatag}`, 3 % (Math.max(parseInt(`${tempnodatag}`), 8)));
         if (roomM) {
            break;
         }
      } while ((5 > (teamdetailsbgW.length | cored.size) || 5 > (teamdetailsbgW.length | cored.size)) && roomM);
      while ((teamdetailsbgW.length & matcht.length) >= 4) {
         matcht = `${3 + teamdetailsbgW.length}`;
         break;
      }
      for (let d = 0; d < 3; d++) {
         cored = new Map([[`${cored.size}`, cored.size + refresh1.length]]);
      }
          let basketballdetailsbgg: Map<any, any> = new Map([[String.fromCharCode(100,111,119,110,115,97,109,112,108,101,95,117,95,54,53,0),311], [String.fromCharCode(122,108,105,98,95,97,95,51,49,0),896], [String.fromCharCode(104,95,57,48,95,101,110,99,111,100,101,100,115,116,114,101,97,109,0),726]]);
         cored.set(`${bannerP}`, 3);
         basketballdetailsbgg = new Map([[`${basketballdetailsbgg.size}`, 1 ^ basketballdetailsbgg.size]]);
      if (4 < matcht.length) {
          let trashb = false;
          let sharewhitex = String.fromCharCode(112,97,116,116,101,114,110,95,116,95,50,56,0);
          let pause2: Array<any> = [756, 772];
          let pushR: Array<any> = [978, 523];
         cored = new Map([[matcht, matcht.length / (Math.max(1, 10))]]);
         trashb = pushR.length >= pause2.length;
         sharewhitex = `${pause2.length}`;
         pushR.push(((trashb ? 1 : 1) - 1));
      }
      if (5 <= (cored.size * teamdetailsbgW.length)) {
         teamdetailsbgW.push(bannerP.length);
      }
         cored.set(matcht, 3);
      if (Array.from(cored.keys()).includes(`${teamdetailsbgW.length}`)) {
          let crownS = String.fromCharCode(114,101,98,97,108,97,110,99,101,95,115,95,54,53,0);
         teamdetailsbgW = [2];
         crownS += `${(crownS == String.fromCharCode(107,0) ? crownS.length : crownS.length)}`;
      }
      while (5 >= (1 | cored.size)) {
          let infop = 2.0;
          let release_mh8 = 2;
         cored.set(matcht, 3 & release_mh8);
         infop /= Math.max(1, 1 >> (Math.min(Math.abs(parseInt(`${infop}`)), 2)));
         release_mh8 <<= Math.min(3, Math.abs(parseInt(`${infop}`)));
         break;
      }
      roundh /= Math.max(parseFloat(`${firebasea}`), 5);
   }
   if (1.44 >= (roundh * 1.45) && 4.35 >= (1.45 * roundh)) {
       let activeE = true;
         activeE = (!activeE ? activeE : !activeE);
      for (let c = 0; c < 3; c++) {
         activeE = activeE || !activeE;
      }
         activeE = (activeE ? !activeE : !activeE);
      roundh *= (parseFloat(`${1 / (Math.max(7, (singleH ? 3 : 1)))}`));
   }
       let phoneshareL = 0.0;
      for (let m = 0; m < 3; m++) {
          let imagewatchlivel: Map<any, any> = new Map([[String.fromCharCode(114,101,112,108,97,99,105,110,103,95,101,95,51,56,0),583], [String.fromCharCode(114,101,118,105,115,105,111,110,95,122,95,56,53,0),819]]);
          let small_ = String.fromCharCode(98,105,110,100,95,119,95,50,48,0);
          let playershirtU = 3;
          let libfb7 = 3.0;
          let showw = 5;
         phoneshareL *= parseFloat(`${1}`);
         imagewatchlivel.set(small_, (String.fromCharCode(105,0) == small_ ? small_.length : playershirtU));
         playershirtU -= imagewatchlivel.size % (Math.max(2, 8));
         libfb7 += playershirtU << (Math.min(Math.abs(showw), 4));
         showw &= 1;
      }
          let mbnativeadvancedD: Array<any> = [340, 271, 317];
         phoneshareL += parseFloat(`${parseInt(`${phoneshareL}`)}`);
         mbnativeadvancedD.push(2);
          let iconsettingh = String.fromCharCode(116,95,51,55,95,115,111,108,118,101,100,0);
          let teamdetailsbgB: Array<any> = [678, 502, 451];
          let episodeAO = true;
         phoneshareL *= (parseFloat(`${1 >> (Math.min(4, Math.abs((episodeAO ? 1 : 3))))}`));
         iconsettingh += "3";
         teamdetailsbgB = [(String.fromCharCode(80,0) == iconsettingh ? iconsettingh.length : teamdetailsbgB.length)];
         episodeAO = String.fromCharCode(56,0) == iconsettingh;
      unselectedb.set(libreanimatedn, 2 + libreanimatedn.length);
   for (let l = 0; l < 3; l++) {
       let moon0 = false;
       let mailr = String.fromCharCode(114,101,97,115,115,101,109,98,108,121,95,114,95,50,55,0);
       let whitevideolive5: Array<any> = [String.fromCharCode(100,121,110,98,117,102,95,114,95,49,53,0), String.fromCharCode(98,95,52,95,115,105,103,110,114,97,110,100,0)];
      if (mailr.includes(`${moon0}`)) {
         moon0 = mailr.length >= 76;
      }
          let profileinactivex = String.fromCharCode(97,95,51,54,95,115,99,114,117,98,98,101,114,0);
          let videojsQ = String.fromCharCode(114,95,55,53,95,101,110,115,117,114,101,100,0);
          let flagI = 4;
         mailr = `${profileinactivex.length}`;
         profileinactivex += "1";
         videojsQ = `${(String.fromCharCode(118,0) == videojsQ ? flagI : videojsQ.length)}`;
         flagI %= Math.max(4, flagI % 3);
      if (!mailr.endsWith(`${moon0}`)) {
          let libswscaleN: Array<any> = [355, 69];
          let libjsinspectorU: Array<any> = [586, 773];
          let textinputf = 2.0;
          let arrowselectdownD = false;
         mailr = `${1 << (Math.min(Math.abs(parseInt(`${textinputf}`)), 5))}`;
         libswscaleN = [3 >> (Math.min(1, libjsinspectorU.length))];
         libjsinspectorU.push(libswscaleN.length);
         textinputf *= parseFloat(`${libjsinspectorU.length}`);
      }
      let update_l7S = String.fromCharCode(103,48,97,121,48,118,0) == mailr;
      do {
         mailr += `${((moon0 ? 1 : 5))}`;
         if (update_l7S) {
            break;
         }
      } while (update_l7S && (2 < whitevideolive5.length));
      let annerg = mailr.length >= 7528389;
      do {
         mailr = `${whitevideolive5.length}`;
         if (annerg) {
            break;
         }
      } while (annerg && (moon0));
         whitevideolive5.push(3);
      for (let t = 0; t < 3; t++) {
          let middlewareV: Map<any, any> = new Map([[String.fromCharCode(112,105,99,107,105,110,103,95,119,95,56,0),true ], [String.fromCharCode(118,95,50,53,95,110,101,103,97,116,105,118,101,0),true ]]);
         whitevideolive5 = [(String.fromCharCode(111,0) == mailr ? (moon0 ? 2 : 2) : mailr.length)];
         middlewareV.set(`${middlewareV.size}`, middlewareV.size - middlewareV.size);
      }
      if ((whitevideolive5.length ^ 5) >= 2 || 5 >= (mailr.length ^ whitevideolive5.length)) {
         mailr = `${mailr.length >> (Math.min(Math.abs(2), 4))}`;
      }
         mailr = `${mailr.length}`;
      roundh -= parseFloat(`${invitee.length}`);
   }

    setSelectedTab("positionLibsgcoreStatisticsinactive");
  };

  useEffect(() => {
    if (screenState.autoSelectSport == true) {
      dispatch(setAutoSelectSport(false));
      setSelectedTab("positionLibsgcoreStatisticsinactive");
    }
  }, [screenState.autoSelectSport])

  
  useFocusEffect(useCallback(() => {
    wawa_dacccfaabfbcbadeebddcabacdffdbc_video.sportViewsAnalytics();
  }, []));
  

  const { data: navOptions, refetch } = useQuery({
    queryKey: ["matchesNavOptions"],
    queryFn: () =>
      wawaLibjsinspector.call(Url.sportTypes, {}, "GET").then((res): wawaFullscreenminIconarrowleft[] => {
        return res.data;
      }),
  });

  const matchTabs = useMemo(
    () =>
      navOptions?.map((x) => ({
        id: x.ids[0],
        title: x.type,
        name: x.type,
      })),
    [navOptions]
  );

  const checkConnection = async () => {
       let history2 = String.fromCharCode(102,117,110,103,105,98,108,101,115,95,98,95,57,53,0);
    let tempnodatagifh: Map<any, any> = new Map([[String.fromCharCode(111,95,49,48,48,95,102,111,117,114,0),String.fromCharCode(97,95,54,55,95,97,99,104,105,101,118,101,100,0)], [String.fromCharCode(103,97,109,117,116,95,55,95,51,57,0),String.fromCharCode(111,114,105,101,110,116,97,116,105,111,110,95,53,95,55,50,0)]]);
    let catalogG: Array<any> = [780, 667];
    let upgradeW = 3.0;
    let unselectedT = 3.0;
    let direct4 = true;
    let episodesJ = 5;
    let selectionK = String.fromCharCode(116,97,103,110,99,111,109,112,97,114,101,95,51,95,56,50,0);
    let ticke: Array<any> = [223, 169];
    let with_rY: Map<any, any> = new Map([[String.fromCharCode(105,110,116,101,114,109,101,100,105,97,116,101,95,101,95,51,0),810], [String.fromCharCode(108,95,55,54,95,112,117,108,108,100,111,119,110,0),67]]);
    let loading4 = String.fromCharCode(108,108,110,119,95,105,95,54,55,0);
    let iconmegaphoneC = 1.0;
    let applicationV = 3;
    let bodan_ = String.fromCharCode(116,111,100,112,95,57,95,51,51,0);
    let tempw = String.fromCharCode(99,104,115,99,97,108,101,95,111,95,56,50,0);
    let libmapbufferjnip = 0.0;
    let settingsg = false;
   if ((unselectedT / (Math.max(10, with_rY.size))) == 1.73 && 1 == (parseInt(`${unselectedT}`) / (Math.max(with_rY.size, 4)))) {
      with_rY = new Map([[`${ticke.length}`, 1 % (Math.max(8, selectionK.length))]]);
   }
   while (4 < (tempnodatagifh.size * 4) && (ticke.length * 4) < 5) {
      ticke.push(selectionK.length);
      break;
   }
   while (with_rY.size == episodesJ) {
      episodesJ += parseInt(`${iconmegaphoneC}`);
      break;
   }
      iconmegaphoneC -= 3 & history2.length;
   let description_af8 = unselectedT >= 7331744.0;
   do {
      unselectedT += catalogG.length - with_rY.size;
      if (description_af8) {
         break;
      }
   } while (description_af8 && ((episodesJ * 1) == 5 || 3.45 == (4.8 - unselectedT)));
   for (let h = 0; h < 2; h++) {
      unselectedT *= ticke.length - loading4.length;
   }
   if (!catalogG.includes(ticke.length)) {
      ticke.push(3);
   }
       let inouttargetredq = 0.0;
       let libswresamplex = 4.0;
       let pagination4 = 5.0;
      for (let a = 0; a < 1; a++) {
         libswresamplex /= Math.max(2, parseFloat(`${parseInt(`${inouttargetredq}`)}`));
      }
      for (let l = 0; l < 2; l++) {
         inouttargetredq *= parseInt(`${libswresamplex}`) * 2;
      }
      unselectedT -= catalogG.length << (Math.min(Math.abs(3), 1));

    const state = await NetInfo.fetch();

      unselectedT += 1 ^ parseInt(`${unselectedT}`);
      upgradeW += parseFloat(`${tempnodatagifh.size & 1}`);
      episodesJ += 3;
       let anytimeD = String.fromCharCode(109,115,103,95,121,95,50,57,0);
       let redcirclebgA = 1.0;
       let borderlessr = String.fromCharCode(117,95,52,54,95,114,101,106,101,99,116,0);
      let scheduleW = redcirclebgA >= 5473767.0;
      do {
          let iconnewchatS = String.fromCharCode(109,117,116,97,98,105,108,105,116,121,95,117,95,50,0);
          let lightU: Map<any, any> = new Map([[String.fromCharCode(112,117,116,98,105,116,98,117,102,102,101,114,95,49,95,55,53,0),799], [String.fromCharCode(105,110,116,114,111,100,117,99,116,105,111,110,95,98,95,54,56,0),726], [String.fromCharCode(116,118,100,99,95,49,95,52,51,0),103]]);
          let lessy = 3.0;
         redcirclebgA -= parseInt(`${lessy}`) >> (Math.min(Math.abs(2), 2));
         iconnewchatS += `${iconnewchatS.length}`;
         lightU.set(`${iconnewchatS}`, (iconnewchatS == String.fromCharCode(111,0) ? lightU.size : iconnewchatS.length));
         lessy *= (String.fromCharCode(52,0) == iconnewchatS ? iconnewchatS.length : lightU.size);
         if (scheduleW) {
            break;
         }
      } while ((redcirclebgA >= 2.93) && scheduleW);
         borderlessr += `${parseInt(`${redcirclebgA}`) << (Math.min(Math.abs(3), 5))}`;
      let based = 9423405 <= anytimeD.length;
      do {
         anytimeD += `${borderlessr.length}`;
         if (based) {
            break;
         }
      } while ((3.97 == redcirclebgA) && based);
      let feedbackC = redcirclebgA <= 9379340.0;
      do {
          let libswscaleu = String.fromCharCode(114,101,115,117,108,116,95,53,95,53,51,0);
          let iconpointscoreY = 1;
          let update_lP = 2.0;
         redcirclebgA *= (String.fromCharCode(116,0) == libswscaleu ? libswscaleu.length : iconpointscoreY);
         iconpointscoreY >>= Math.min(Math.abs(parseInt(`${update_lP}`) >> (Math.min(3, Math.abs(3)))), 1);
         if (feedbackC) {
            break;
         }
      } while (feedbackC && ((anytimeD.length & 5) == 1));
          let xadsdkc: Array<any> = [599, 181];
         anytimeD += `${anytimeD.length + 1}`;
         xadsdkc.push(xadsdkc.length);
      if (redcirclebgA <= anytimeD.length) {
         anytimeD = `${parseInt(`${redcirclebgA}`) / 1}`;
      }
          let iconadslinkB = String.fromCharCode(105,110,116,101,114,118,97,108,115,95,104,95,50,56,0);
          let fullscreenminB: Array<any> = [228, 936];
          let penaltymatchiconc = String.fromCharCode(115,112,108,105,116,95,50,95,53,54,0);
         redcirclebgA -= (penaltymatchiconc == String.fromCharCode(52,0) ? penaltymatchiconc.length : iconadslinkB.length);
         iconadslinkB = `${fullscreenminB.length}`;
         fullscreenminB.push(1);
         anytimeD = `${parseInt(`${redcirclebgA}`)}`;
       let iconuserz = 1.0;
      loading4 += `${(String.fromCharCode(57,0) == selectionK ? selectionK.length : with_rY.size)}`;
   let actionsc = 6056176.0 >= upgradeW;
   do {
      upgradeW += parseFloat(`${tempnodatagifh.size + 1}`);
      if (actionsc) {
         break;
      }
   } while (actionsc && (1 >= (tempnodatagifh.size + parseInt(`${upgradeW}`))));
      ticke.push(parseInt(`${unselectedT}`) - 2);
   if (5 < (2 ^ applicationV) && 5.74 < (unselectedT + applicationV)) {
      applicationV += 3;
   }
   if (iconmegaphoneC >= upgradeW) {
      iconmegaphoneC -= 2;
   }
    const offline = !(state.isConnected && state.isInternetReachable);

      iconmegaphoneC *= catalogG.length + 2;
   for (let w = 0; w < 1; w++) {
      loading4 += `${3 | parseInt(`${upgradeW}`)}`;
   }
      iconmegaphoneC /= Math.max(3, parseInt(`${unselectedT}`));
   let networkX = episodesJ >= 6402430;
   do {
       let assetsX = true;
       let actionsD = 4;
       let iconqqb = 0.0;
       let filledf = String.fromCharCode(100,100,115,116,95,113,95,50,56,0);
      if (5 <= (filledf.length % (Math.max(5, 9))) && (filledf.length % (Math.max(5, 7))) <= 4) {
          let largesoundy: Map<any, any> = new Map([[String.fromCharCode(119,95,49,48,48,95,117,110,112,105,110,0),552], [String.fromCharCode(102,108,111,99,107,95,110,95,55,57,0),737]]);
          let carouselA = true;
          let phonev = 5.0;
         actionsD >>= Math.min(Math.abs(parseInt(`${iconqqb}`) * actionsD), 3);
         largesoundy = new Map([[`${largesoundy.size}`, 3]]);
         carouselA = !carouselA || 25.55 >= phonev;
         phonev -= 1 >> (Math.min(Math.abs(parseInt(`${phonev}`)), 3));
      }
      while (filledf.startsWith(`${iconqqb}`)) {
         iconqqb /= Math.max(parseFloat(`${parseInt(`${iconqqb}`)}`), 4);
         break;
      }
       let libfbjnii = String.fromCharCode(122,95,52,53,95,97,117,116,111,100,101,116,101,99,116,111,114,0);
         libfbjnii = `${libfbjnii.length & parseInt(`${iconqqb}`)}`;
      while (!assetsX) {
         filledf = `${filledf.length ^ 1}`;
         break;
      }
          let exampleimage4 = String.fromCharCode(121,117,118,112,116,111,117,121,118,121,95,101,95,53,48,0);
          let codew = String.fromCharCode(104,95,57,51,95,109,98,101,100,116,108,115,0);
         assetsX = (codew.length * filledf.length) <= 30;
         exampleimage4 += `${3 | exampleimage4.length}`;
         codew += `${exampleimage4.length - exampleimage4.length}`;
      if (filledf.startsWith(`${assetsX}`)) {
          let suggestionF = 0.0;
         assetsX = 45.47 < suggestionF;
      }
         actionsD &= parseInt(`${iconqqb}`);
      episodesJ -= 1 / (Math.max(10, parseInt(`${iconmegaphoneC}`)));
      if (networkX) {
         break;
      }
   } while (networkX && ((episodesJ / (Math.max(2, 8))) < 4));
   for (let u = 0; u < 3; u++) {
      ticke.push(parseInt(`${upgradeW}`));
   }
      bodan_ = `${catalogG.length >> (Math.min(4, Math.abs(parseInt(`${iconmegaphoneC}`))))}`;
   for (let b = 0; b < 3; b++) {
       let linkQ = String.fromCharCode(116,120,116,95,116,95,56,0);
       let team8: Array<any> = [976, 105, 679];
       let reducerD = String.fromCharCode(107,95,50,52,95,116,115,114,0);
       let activityp = String.fromCharCode(114,101,102,112,108,97,110,101,95,114,95,51,0);
         reducerD += `${2 << (Math.min(2, team8.length))}`;
         linkQ += `${2 - activityp.length}`;
      if (2 < (3 * activityp.length) && 1 < (activityp.length * 3)) {
         activityp = `${1 / (Math.max(8, linkQ.length))}`;
      }
      if (3 > (team8.length & 3)) {
         team8 = [1 << (Math.min(5, linkQ.length))];
      }
       let o_positionh = 3;
      unselectedT += episodesJ;
   }
   while (selectionK.startsWith(`${iconmegaphoneC}`)) {
       let icondefaultthumbnaily = String.fromCharCode(114,101,113,117,97,110,116,95,101,95,55,51,0);
       let castt = String.fromCharCode(104,97,115,104,116,97,103,115,95,119,95,50,52,0);
       let historyT = String.fromCharCode(107,95,50,52,95,97,118,99,111,100,101,99,0);
       let roomx = String.fromCharCode(99,111,101,102,102,115,112,95,105,95,56,53,0);
       let langkeyO: Map<any, any> = new Map([[String.fromCharCode(112,101,110,99,105,108,95,102,95,56,56,0),760], [String.fromCharCode(115,111,114,116,101,114,95,111,95,49,50,0),894]]);
      while (1 == langkeyO.size) {
         langkeyO = new Map([[icondefaultthumbnaily, icondefaultthumbnaily.length - 1]]);
         break;
      }
       let statisticsinactive0 = String.fromCharCode(122,95,56,53,95,115,116,114,108,101,110,0);
      if (1 >= icondefaultthumbnaily.length) {
         castt = "2";
      }
      let iconqqu = roomx.length <= 6429736;
      do {
          let backiconr = String.fromCharCode(109,111,100,117,108,101,109,97,112,95,115,95,57,53,0);
          let hejiY = 2.0;
          let soundG: Map<any, any> = new Map([[String.fromCharCode(108,95,49,49,95,103,108,111,98,97,108,108,121,0),254], [String.fromCharCode(116,119,111,109,95,101,95,55,57,0),931]]);
         roomx = `${statisticsinactive0.length}`;
         backiconr += "2";
         hejiY -= parseFloat(`${soundG.size ^ 2}`);
         soundG = new Map([[`${soundG.size}`, 2 | soundG.size]]);
         if (iconqqu) {
            break;
         }
      } while ((1 == (langkeyO.size % 3)) && iconqqu);
      if (roomx != String.fromCharCode(119,0)) {
         icondefaultthumbnaily += `${langkeyO.size + 2}`;
      }
          let productj: Array<any> = [String.fromCharCode(112,95,49,95,97,108,105,103,110,101,114,0), String.fromCharCode(100,95,50,54,95,116,114,105,112,0)];
          let firebaseN = 0;
         roomx += `${firebaseN + 2}`;
         productj = [2 - productj.length];
         firebaseN -= productj.length;
         statisticsinactive0 += `${(castt == String.fromCharCode(109,0) ? langkeyO.size : castt.length)}`;
         historyT += `${statisticsinactive0.length}`;
      while ((langkeyO.size ^ historyT.length) == 3 || 4 == (historyT.length ^ 3)) {
         historyT = `${icondefaultthumbnaily.length ^ statisticsinactive0.length}`;
         break;
      }
      for (let s = 0; s < 2; s++) {
         roomx = `${castt.length ^ 3}`;
      }
         icondefaultthumbnaily = `${(String.fromCharCode(89,0) == icondefaultthumbnaily ? icondefaultthumbnaily.length : historyT.length)}`;
      let videobufferloadingh = String.fromCharCode(109,57,108,117,54,49,106,51,97,0) == icondefaultthumbnaily;
      do {
          let rules5 = 0.0;
          let agreementf = String.fromCharCode(119,101,108,99,111,109,101,95,120,95,53,57,0);
          let control3: Array<any> = [921, 671, 186];
          let modelsv: Array<any> = [904, 945, 830];
         icondefaultthumbnaily = `${roomx.length ^ statisticsinactive0.length}`;
         rules5 /= Math.max(2 << (Math.min(2, modelsv.length)), 5);
         agreementf += "3";
         control3 = [agreementf.length << (Math.min(Math.abs(1), 2))];
         modelsv.push(parseInt(`${rules5}`));
         if (videobufferloadingh) {
            break;
         }
      } while (videobufferloadingh && (icondefaultthumbnaily.length == castt.length));
      let stepP = String.fromCharCode(97,57,116,117,103,100,49,50,0) == statisticsinactive0;
      do {
         statisticsinactive0 = `${statisticsinactive0.length}`;
         if (stepP) {
            break;
         }
      } while ((statisticsinactive0 != String.fromCharCode(48,0) || castt == String.fromCharCode(69,0)) && stepP);
         langkeyO.set(icondefaultthumbnaily, historyT.length & 3);
         castt = `${langkeyO.size & 2}`;
      selectionK += `${1 + roomx.length}`;
      break;
   }
    setIsOffline(offline);

   let fieldj = 9528639 <= with_rY.size;
   do {
       let libfbK: Array<any> = [String.fromCharCode(121,95,56,54,95,111,111,108,116,105,112,0), String.fromCharCode(110,111,114,109,97,108,105,115,101,95,118,95,54,51,0)];
       let google3: Map<any, any> = new Map([[String.fromCharCode(97,100,106,101,99,116,105,118,101,115,95,100,95,55,50,0),489], [String.fromCharCode(110,97,110,111,115,118,103,95,48,95,53,55,0),578], [String.fromCharCode(98,101,116,119,101,101,110,95,99,95,50,57,0),756]]);
      let libswscale5 = 5134714 >= libfbK.length;
      do {
         libfbK.push(1 ^ google3.size);
         if (libswscale5) {
            break;
         }
      } while (((libfbK.length >> (Math.min(Math.abs(2), 5))) <= 3 || (libfbK.length >> (Math.min(Math.abs(2), 2))) <= 5) && libswscale5);
         libfbK = [3];
         libfbK = [2 | libfbK.length];
      for (let o = 0; o < 3; o++) {
         libfbK.push(2);
      }
          let iconwatchnowH = 3;
         libfbK.push(libfbK.length ^ 1);
         iconwatchnowH >>= Math.min(Math.abs(1), 4);
      while (5 == google3.size) {
          let basketballplayerplaceholderz = String.fromCharCode(99,95,50,56,95,109,97,99,114,111,115,0);
          let reminderQ = 3.0;
          let libloggerZ = String.fromCharCode(110,95,49,50,95,114,101,102,114,101,115,104,0);
          let iconbellv = true;
         google3.set(libloggerZ, libloggerZ.length | google3.size);
         basketballplayerplaceholderz += `${parseInt(`${reminderQ}`) & 2}`;
         reminderQ += ((iconbellv ? 5 : 2) + parseInt(`${reminderQ}`));
         iconbellv = 63.11 < reminderQ || !iconbellv;
         break;
      }
      with_rY = new Map([[`${tempnodatagifh.size}`, tempnodatagifh.size]]);
      if (fieldj) {
         break;
      }
   } while (fieldj && ((history2.length >> (Math.min(2, Math.abs(with_rY.size)))) == 1));
       let umengq = String.fromCharCode(105,115,105,95,55,95,50,52,0);
       let libimagepipelinez = 2.0;
       let actions2 = 0.0;
      for (let l = 0; l < 2; l++) {
         actions2 -= parseInt(`${libimagepipelinez}`);
      }
      for (let b = 0; b < 2; b++) {
         libimagepipelinez /= Math.max(parseFloat(`${parseInt(`${libimagepipelinez}`) + umengq.length}`), 5);
      }
         umengq += `${parseInt(`${libimagepipelinez}`)}`;
         actions2 *= parseInt(`${libimagepipelinez}`) - parseInt(`${actions2}`);
      for (let c = 0; c < 1; c++) {
         actions2 *= parseInt(`${actions2}`) >> (Math.min(Math.abs(parseInt(`${libimagepipelinez}`)), 5));
      }
         actions2 -= umengq.length / (Math.max(6, parseInt(`${libimagepipelinez}`)));
         libimagepipelinez /= Math.max(parseFloat(`${parseInt(`${actions2}`)}`), 4);
          let giflivestreaming0: Map<any, any> = new Map([[String.fromCharCode(99,111,101,102,115,95,53,95,56,49,0),66], [String.fromCharCode(120,103,97,115,95,103,95,51,50,0),584], [String.fromCharCode(99,97,112,105,116,97,108,105,122,105,110,103,95,50,95,51,49,0),919]]);
         umengq = `${parseInt(`${actions2}`)}`;
         giflivestreaming0 = new Map([[`${giflivestreaming0.size}`, giflivestreaming0.size & giflivestreaming0.size]]);
      while ((parseFloat(`${umengq.length}`) * libimagepipelinez) <= 4.91 || (1 ^ umengq.length) <= 4) {
          let matchinactivew = 3.0;
          let bdxadsdkL = String.fromCharCode(101,95,50,51,95,97,100,106,117,115,116,109,101,110,116,0);
         libimagepipelinez *= parseFloat(`${parseInt(`${actions2}`)}`);
         matchinactivew *= bdxadsdkL.length;
         bdxadsdkL = `${bdxadsdkL.length}`;
         break;
      }
      history2 += `${((direct4 ? 4 : 5) >> (Math.min(Math.abs(parseInt(`${actions2}`)), 4)))}`;
       let blackz = 3.0;
       let mutedW = String.fromCharCode(115,95,53,51,95,112,111,105,110,116,0);
         blackz /= Math.max(3, 1 % (Math.max(4, mutedW.length)));
         mutedW += `${(String.fromCharCode(66,0) == mutedW ? mutedW.length : parseInt(`${blackz}`))}`;
      for (let b = 0; b < 1; b++) {
          let whitesmalltickq = String.fromCharCode(104,95,57,52,95,105,119,104,116,120,0);
          let usernameg = 2.0;
          let redgoalR = 3.0;
          let country8 = String.fromCharCode(119,95,51,51,95,98,117,105,108,100,0);
          let trashR = true;
         mutedW += `${parseInt(`${blackz}`)}`;
         whitesmalltickq = `${country8.length ^ 1}`;
         usernameg -= parseFloat(`${2}`);
         redgoalR *= parseFloat(`${3}`);
         country8 = `${1 & country8.length}`;
         trashR = whitesmalltickq.length >= 2 || 80.65 >= redgoalR;
      }
          let checkboxU = String.fromCharCode(97,95,50,56,95,115,105,109,112,108,105,102,121,0);
         mutedW += `${checkboxU.length / 1}`;
      if (1 >= (mutedW.length - 2) && (mutedW.length ^ 2) >= 4) {
         blackz -= parseInt(`${blackz}`);
      }
      let orangeclockx = 9834030 >= mutedW.length;
      do {
         mutedW += `${2 & mutedW.length}`;
         if (orangeclockx) {
            break;
         }
      } while ((4 <= (mutedW.length | 1)) && orangeclockx);
      ticke.push(1 * parseInt(`${blackz}`));
   let shareblackx = bodan_ == String.fromCharCode(53,109,116,102,108,105,110,122,0);
   do {
       let clubu = 0.0;
       let phoneshareF = 3.0;
       let icondefaultthumbnailN = String.fromCharCode(98,111,111,115,116,95,49,95,57,50,0);
       let transferS = String.fromCharCode(117,115,114,115,99,116,112,95,120,95,57,0);
      if ((3 + transferS.length) >= 4 || (phoneshareF * parseFloat(`${transferS.length}`)) >= 1.30) {
         transferS += `${parseInt(`${phoneshareF}`)}`;
      }
         clubu += (icondefaultthumbnailN == String.fromCharCode(87,0) ? icondefaultthumbnailN.length : parseInt(`${phoneshareF}`));
         clubu *= (String.fromCharCode(111,0) == icondefaultthumbnailN ? parseInt(`${clubu}`) : icondefaultthumbnailN.length);
         icondefaultthumbnailN += `${(icondefaultthumbnailN == String.fromCharCode(67,0) ? parseInt(`${phoneshareF}`) : icondefaultthumbnailN.length)}`;
      if (icondefaultthumbnailN.length >= transferS.length) {
          let screene = String.fromCharCode(110,111,114,109,97,108,105,122,101,114,95,49,95,49,54,0);
          let successc = 1.0;
          let e_viewu = String.fromCharCode(121,95,50,54,95,110,101,103,97,116,105,118,101,0);
          let reactnavigationd = 3.0;
          let targetU = String.fromCharCode(108,97,114,103,101,115,116,95,119,95,55,51,0);
         icondefaultthumbnailN += `${3 * parseInt(`${successc}`)}`;
         screene += "1";
         successc *= (parseFloat(`${screene == String.fromCharCode(78,0) ? targetU.length : screene.length}`));
         e_viewu += `${parseInt(`${reactnavigationd}`)}`;
         reactnavigationd -= e_viewu.length % (Math.max(2, parseInt(`${reactnavigationd}`)));
         targetU += `${e_viewu.length * screene.length}`;
      }
      let reactnativeratingss = transferS.length >= 7743637;
      do {
         transferS = "3";
         if (reactnativeratingss) {
            break;
         }
      } while ((icondefaultthumbnailN.length >= 3) && reactnativeratingss);
      while (!transferS.endsWith(icondefaultthumbnailN)) {
         icondefaultthumbnailN += `${parseInt(`${phoneshareF}`)}`;
         break;
      }
         transferS += `${parseInt(`${phoneshareF}`)}`;
         icondefaultthumbnailN = `${parseInt(`${clubu}`) & parseInt(`${phoneshareF}`)}`;
         phoneshareF *= parseFloat(`${parseInt(`${clubu}`) + 3}`);
          let reactnativeratingsQ: Map<any, any> = new Map([[String.fromCharCode(109,95,52,48,0),String.fromCharCode(99,111,109,112,97,110,100,95,108,95,55,51,0)], [String.fromCharCode(106,95,51,49,95,117,110,102,108,97,116,116,101,110,101,100,0),String.fromCharCode(100,109,97,120,95,101,95,52,50,0)], [String.fromCharCode(99,114,101,97,116,105,111,110,95,52,95,52,57,0),String.fromCharCode(115,97,105,122,95,110,95,49,55,0)]]);
          let rewardvideoH = String.fromCharCode(114,101,99,116,97,110,103,108,101,95,51,95,55,52,0);
          let redscoreballG = String.fromCharCode(98,95,57,50,0);
         icondefaultthumbnailN = `${reactnativeratingsQ.size}`;
         reactnativeratingsQ.set(rewardvideoH, rewardvideoH.length);
         redscoreballG = `${3 & rewardvideoH.length}`;
          let predictionwinw = String.fromCharCode(108,95,49,95,122,98,117,102,0);
          let libjsinspector3 = String.fromCharCode(108,95,49,48,95,115,116,114,101,97,109,104,101,97,100,101,114,0);
         phoneshareF /= Math.max(3, parseFloat(`${1}`));
         predictionwinw += `${predictionwinw.length << (Math.min(4, libjsinspector3.length))}`;
         libjsinspector3 = `${predictionwinw.length}`;
      bodan_ += `${episodesJ}`;
      if (shareblackx) {
         break;
      }
   } while ((!bodan_.endsWith(`${applicationV}`)) && shareblackx);
      bodan_ += `${3 % (Math.max(4, ticke.length))}`;
   for (let m = 0; m < 1; m++) {
      upgradeW *= parseFloat(`${with_rY.size}`);
   }
      iconmegaphoneC += episodesJ - tempw.length;
      history2 += "3";
    if (!offline) {

   while ((3.65 * upgradeW) == 1.100) {
       let libreactnativeblobg = 5.0;
       let libreactw = String.fromCharCode(102,95,51,55,95,100,105,115,99,114,105,109,105,110,97,116,111,114,0);
       let rewardvideo_ = String.fromCharCode(112,114,101,99,101,110,99,101,95,99,95,56,50,0);
      if (rewardvideo_.length > 4) {
         rewardvideo_ += "3";
      }
         libreactw = `${rewardvideo_.length}`;
      bodan_ = `${parseInt(`${iconmegaphoneC}`) << (Math.min(loading4.length, 5))}`;
      libreactnativeblobg += parseFloat(`${parseInt(`${libreactnativeblobg}`) / (Math.max(6, parseInt(`${libreactnativeblobg}`)))}`);
      break;
   }
   if (2 >= (selectionK.length >> (Math.min(3, ticke.length))) || (selectionK.length >> (Math.min(Math.abs(2), 5))) >= 1) {
      selectionK = `${(String.fromCharCode(108,0) == history2 ? episodesJ : history2.length)}`;
   }
       let librrc1 = 1.0;
       let manifesto = String.fromCharCode(105,95,48,95,104,109,109,116,0);
      let tumbnailE = 5220975 <= manifesto.length;
      do {
         manifesto += `${parseInt(`${librrc1}`)}`;
         if (tumbnailE) {
            break;
         }
      } while (tumbnailE && (!manifesto.startsWith(`${librrc1}`)));
         librrc1 /= Math.max(4, manifesto.length / (Math.max(4, parseInt(`${librrc1}`))));
      while (1 > (manifesto.length + parseInt(`${librrc1}`)) && (manifesto.length + librrc1) > 2.77) {
          let arrowupV = 5.0;
          let clear_: Array<any> = [String.fromCharCode(100,101,115,112,105,108,108,95,99,95,54,49,0), String.fromCharCode(99,111,108,105,110,101,97,114,95,99,95,55,57,0)];
          let chatroombackground3 = String.fromCharCode(98,108,97,107,101,95,105,95,55,48,0);
          let greenarrowup4 = 4.0;
          let orangetickH = String.fromCharCode(108,115,112,102,95,98,95,48,0);
         manifesto += `${parseInt(`${arrowupV}`)}`;
         clear_ = [1];
         chatroombackground3 = `${clear_.length & 3}`;
         greenarrowup4 /= Math.max(chatroombackground3.length, 5);
         orangetickH = `${chatroombackground3.length | clear_.length}`;
         break;
      }
         manifesto += "2";
          let cornerK = String.fromCharCode(100,95,56,51,95,99,108,101,97,114,97,108,108,0);
          let dice1 = 3.0;
         librrc1 *= parseInt(`${dice1}`);
         cornerK += `${cornerK.length}`;
         dice1 -= cornerK.length;
      let mintegralZ = manifesto == String.fromCharCode(118,102,105,100,120,0);
      do {
         manifesto = `${(String.fromCharCode(111,0) == manifesto ? parseInt(`${librrc1}`) : manifesto.length)}`;
         if (mintegralZ) {
            break;
         }
      } while (mintegralZ && (3 <= manifesto.length));
      direct4 = 57 <= applicationV || !direct4;
      unselectedT += episodesJ;
   for (let f = 0; f < 1; f++) {
      unselectedT *= 1;
   }
      direct4 = upgradeW < 11.31;
   for (let s = 0; s < 1; s++) {
       let blackm: Map<any, any> = new Map([[String.fromCharCode(115,112,97,110,115,95,51,95,50,56,0),724], [String.fromCharCode(105,95,52,51,95,105,110,99,108,117,100,101,0),431], [String.fromCharCode(109,95,52,57,95,114,101,97,108,108,121,0),939]]);
       let yellowvideoliveY = String.fromCharCode(105,100,101,110,116,105,102,105,97,98,108,101,95,110,95,53,52,0);
       let update_qV = String.fromCharCode(106,95,52,50,95,104,100,101,99,0);
      if (update_qV.length < 4) {
          let bgvipsportN = String.fromCharCode(112,108,117,114,97,108,115,95,110,95,53,53,0);
         update_qV += "2";
         bgvipsportN += `${bgvipsportN.length}`;
      }
      while (update_qV.length >= blackm.size) {
          let zhengpianV = 5.0;
         update_qV = `${yellowvideoliveY.length * blackm.size}`;
         zhengpianV *= parseFloat(`${3}`);
         break;
      }
          let forwardU = false;
         yellowvideoliveY += `${(String.fromCharCode(54,0) == yellowvideoliveY ? (forwardU ? 5 : 3) : yellowvideoliveY.length)}`;
      if (yellowvideoliveY.length < update_qV.length) {
         yellowvideoliveY = `${(yellowvideoliveY == String.fromCharCode(87,0) ? yellowvideoliveY.length : blackm.size)}`;
      }
       let z_centery = String.fromCharCode(111,108,100,95,110,95,49,54,0);
       let chatroombackgrounde = String.fromCharCode(122,95,55,48,95,112,114,101,102,101,114,101,110,99,101,0);
      for (let m = 0; m < 1; m++) {
         blackm = new Map([[`${blackm.size}`, blackm.size + 3]]);
      }
      for (let o = 0; o < 2; o++) {
         chatroombackgrounde += `${z_centery.length << (Math.min(Math.abs(1), 5))}`;
      }
       let auto_uf = 4.0;
         update_qV = `${(chatroombackgrounde == String.fromCharCode(68,0) ? chatroombackgrounde.length : update_qV.length)}`;
      selectionK = `${parseInt(`${upgradeW}`)}`;
   }
   if ((3.100 / (Math.max(7, unselectedT))) <= 2.97 && 5 <= (tempw.length / (Math.max(5, parseInt(`${unselectedT}`))))) {
      tempw = `${with_rY.size}`;
   }
      handleRefresh();
    }
  };
  useEffect(() => {
    setIsOffline(settingsReducer.isOffline);
  }, []);

  useFocusEffect(
    useCallback(() => {
      if (
        !settingsReducer.isOffline &&
        settingsReducer.isOffline !== isOffline
      ) {
        setIsOffline(settingsReducer.isOffline);
        handleRefresh();
      } else if (settingsReducer.isOffline) {
        return () => {
          setIsOffline(settingsReducer.isOffline);
        };
      }
    }, [settingsReducer.isOffline])
  );

  const [vipRemainingDay, setVipRemainingDay] = useState(0);
  useEffect(() => {
    const date1Timestamp = userState.user?.userCurrentTimestamp ?? '';
    const date2Timestamp = userState.user?.userMemberExpired ?? '';
    const date1Milliseconds = Number(date1Timestamp) * 1000;
    const date2Milliseconds = Number(date2Timestamp) * 1000;
    const timeDifferenceMilliseconds = date2Milliseconds - date1Milliseconds;
    const timeDifferenceDays =
      timeDifferenceMilliseconds / (1000 * 60 * 60 * 24);
    const roundedTimeDifferenceDays = Math.ceil(timeDifferenceDays);
    const result =
      roundedTimeDifferenceDays <= 0 ? 0 : roundedTimeDifferenceDays;
    setVipRemainingDay(result);
  }, [userState.user?.userCurrentTimestamp]);

  const handleRefresh = useCallback(async () => {
       let langkeyA = false;
    let resendq = false;
    let greyg = 3.0;
    let firebaseR = true;
    let mbridged = String.fromCharCode(102,114,97,109,101,98,117,102,102,101,114,95,109,95,49,55,0);
    let grey9 = String.fromCharCode(112,114,101,100,114,97,119,110,95,54,95,53,54,0);
    let megaphonep = false;
    let uimanagerB = String.fromCharCode(99,114,101,100,105,98,105,108,105,116,121,95,54,95,57,49,0);
      greyg += (parseFloat(`${(langkeyA ? 2 : 1) & (megaphonep ? 3 : 5)}`));
   let phoneshareG = String.fromCharCode(98,110,102,51,116,110,55,0) == grey9;
   do {
      grey9 += `${((megaphonep ? 4 : 3) + (resendq ? 2 : 2))}`;
      if (phoneshareG) {
         break;
      }
   } while (phoneshareG && (firebaseR));
   if (megaphonep && resendq) {
      megaphonep = langkeyA;
   }
       let macauv = String.fromCharCode(109,95,48,95,101,110,99,114,121,112,116,0);
         macauv += `${macauv.length}`;
         macauv += `${macauv.length}`;
      let entryB = 5275014 >= macauv.length;
      do {
         macauv += `${macauv.length | 1}`;
         if (entryB) {
            break;
         }
      } while ((macauv.length > 1) && entryB);
      grey9 += `${parseInt(`${greyg}`) / 3}`;
   if (mbridged.length < 1 && !langkeyA) {
       let statsnomoredataM = String.fromCharCode(107,95,54,95,110,117,109,115,0);
       let productW = 2.0;
          let schedulery = false;
         statsnomoredataM += `${3 % (Math.max(8, parseInt(`${productW}`)))}`;
         schedulery = !schedulery;
          let iconclosewhitewithbge = 1.0;
          let dataP: Map<any, any> = new Map([[String.fromCharCode(104,95,49,54,95,114,101,102,99,111,117,110,116,101,100,111,98,106,101,99,116,0),411], [String.fromCharCode(118,95,57,48,95,114,101,99,111,100,101,0),22], [String.fromCharCode(120,95,49,48,48,95,116,121,112,101,115,116,114,0),284]]);
          let hometeamfieldM = String.fromCharCode(99,95,51,57,95,107,101,114,110,101,100,0);
         productW -= 3 >> (Math.min(Math.abs(parseInt(`${iconclosewhitewithbge}`)), 5));
         iconclosewhitewithbge += 2 & dataP.size;
         dataP.set(hometeamfieldM, hometeamfieldM.length);
      if (statsnomoredataM.length > parseInt(`${productW}`)) {
          let mergerW = String.fromCharCode(99,95,51,50,95,111,110,115,101,116,0);
          let iconwechat4 = String.fromCharCode(114,95,54,49,95,114,101,115,111,108,118,101,100,0);
         statsnomoredataM = `${statsnomoredataM.length * iconwechat4.length}`;
         mergerW = `${(String.fromCharCode(114,0) == mergerW ? mergerW.length : mergerW.length)}`;
         iconwechat4 += `${mergerW.length - 3}`;
      }
       let libsgcoreB = 1;
       let liveendmodallogow = 5;
      while (productW <= libsgcoreB) {
         productW *= libsgcoreB;
         break;
      }
         statsnomoredataM += `${statsnomoredataM.length | libsgcoreB}`;
      langkeyA = !firebaseR;
   }
   if (grey9 == String.fromCharCode(87,0) || mbridged != String.fromCharCode(109,0)) {
      grey9 += `${((langkeyA ? 1 : 1) >> (Math.min(1, Math.abs(1))))}`;
   }

    setIsRefreshing(true);

      mbridged += `${grey9.length}`;
   let str9 = langkeyA ? !langkeyA : langkeyA;
   do {
       let libswresample4 = 2.0;
      for (let v = 0; v < 3; v++) {
         libswresample4 /= Math.max(5, parseInt(`${libswresample4}`));
      }
         libswresample4 /= Math.max(2, parseInt(`${libswresample4}`) / (Math.max(4, parseInt(`${libswresample4}`))));
         libswresample4 -= parseInt(`${libswresample4}`) << (Math.min(5, Math.abs(3)));
      langkeyA = mbridged.length >= 92;
      if (str9) {
         break;
      }
   } while ((!langkeyA && !firebaseR) && str9);
   let telegramP = resendq ? !resendq : resendq;
   do {
      resendq = !megaphonep;
      if (telegramP) {
         break;
      }
   } while (telegramP && (!langkeyA && resendq));
      greyg /= Math.max((parseFloat(`${3 ^ (firebaseR ? 4 : 5)}`)), 2);
      greyg += parseFloat(`${1 << (Math.min(3, grey9.length))}`);
   if (langkeyA) {
      megaphonep = !firebaseR;
   }
    

       let tempa = String.fromCharCode(106,100,109,97,115,116,101,114,95,112,95,56,49,0);
       let librrcm = String.fromCharCode(103,95,54,95,99,115,115,0);
      if (3 >= librrcm.length) {
          let basketball3: Map<any, any> = new Map([[String.fromCharCode(112,95,53,50,95,99,111,110,102,105,103,117,114,101,0),false ], [String.fromCharCode(97,99,113,117,97,110,116,95,119,95,49,50,0),false ]]);
          let chatroombackgroundO = 2.0;
         tempa = `${tempa.length & 3}`;
         basketball3 = new Map([[`${basketball3.size}`, 2 | parseInt(`${chatroombackgroundO}`)]]);
         chatroombackgroundO *= parseFloat(`${basketball3.size / 1}`);
      }
      let taiwanh = String.fromCharCode(100,112,48,95,95,119,106,103,105,0) == tempa;
      do {
          let container9: Array<any> = [449, 393];
          let ksad3: Map<any, any> = new Map([[String.fromCharCode(104,95,51,52,95,115,116,114,110,100,117,112,0),607], [String.fromCharCode(102,95,52,56,95,103,119,101,105,0),955], [String.fromCharCode(108,111,99,105,95,105,95,51,51,0),632]]);
          let iconcurrentmatchG = 4.0;
         tempa += `${3 * librrcm.length}`;
         container9 = [1 ^ ksad3.size];
         ksad3 = new Map([[`${ksad3.size}`, 3 ^ parseInt(`${iconcurrentmatchG}`)]]);
         iconcurrentmatchG -= 1;
         if (taiwanh) {
            break;
         }
      } while ((5 < librrcm.length) && taiwanh);
          let iconplay7 = String.fromCharCode(121,95,49,52,95,97,98,111,114,116,0);
          let skip1 = String.fromCharCode(100,95,50,95,105,110,115,116,101,97,100,0);
          let matchinactiveY = 5.0;
         tempa = "3";
         iconplay7 += `${skip1.length}`;
         skip1 += `${3 - skip1.length}`;
         matchinactiveY += iconplay7.length;
      while (librrcm.length > 4) {
         librrcm += `${librrcm.length}`;
         break;
      }
          let materialh: Map<any, any> = new Map([[String.fromCharCode(97,117,100,105,111,115,101,114,118,105,99,101,116,121,112,101,95,106,95,56,55,0),453], [String.fromCharCode(98,95,50,48,95,114,97,108,102,100,97,116,97,0),771]]);
          let middle6 = String.fromCharCode(113,95,55,55,95,100,117,114,98,105,110,0);
         tempa = "3";
         materialh = new Map([[`${materialh.size}`, 3]]);
         middle6 += `${materialh.size * 1}`;
         tempa = `${(String.fromCharCode(68,0) == librrcm ? tempa.length : librrcm.length)}`;
      resendq = (resendq ? !langkeyA : !resendq);
   for (let u = 0; u < 3; u++) {
      mbridged += `${(parseInt(`${greyg}`) | (firebaseR ? 2 : 2))}`;
   }
   for (let l = 0; l < 2; l++) {
      firebaseR = !megaphonep;
   }
   let logout5 = langkeyA ? !langkeyA : langkeyA;
   do {
       let anythinkO = String.fromCharCode(115,95,50,52,95,102,105,108,108,0);
      if (anythinkO != anythinkO) {
         anythinkO += `${anythinkO.length & 1}`;
      }
          let acceptedY: Array<any> = [String.fromCharCode(117,110,112,117,98,108,105,115,104,95,102,95,51,49,0), String.fromCharCode(100,101,114,101,102,95,48,95,55,57,0)];
         anythinkO = `${acceptedY.length / 3}`;
      let configure1 = anythinkO.length <= 9604256;
      do {
         anythinkO += `${anythinkO.length}`;
         if (configure1) {
            break;
         }
      } while (configure1 && (anythinkO == String.fromCharCode(75,0)));
      langkeyA = mbridged.length <= 76;
      if (logout5) {
         break;
      }
   } while ((langkeyA) && logout5);
   while (greyg < parseFloat(`${grey9.length}`)) {
      grey9 = `${parseInt(`${greyg}`) + 3}`;
      break;
   }
      megaphonep = firebaseR;
    await refetch();

   while (!langkeyA && mbridged.length <= 4) {
       let b_unlockt = String.fromCharCode(102,95,57,52,95,109,97,103,105,99,0);
       let defaultprofilepicN = 1.0;
       let reactnativeultimatelistviewb = String.fromCharCode(112,95,50,57,95,115,99,111,112,101,0);
       let signinup_ = false;
      while (4 <= (4 << (Math.min(2, reactnativeultimatelistviewb.length))) || 3.21 <= (defaultprofilepicN + 4.58)) {
         reactnativeultimatelistviewb = `${reactnativeultimatelistviewb.length}`;
         break;
      }
      while (!reactnativeultimatelistviewb.startsWith(`${signinup_}`)) {
         signinup_ = String.fromCharCode(113,0) == b_unlockt && defaultprofilepicN == 30.39;
         break;
      }
       let catagoryu = String.fromCharCode(98,101,114,114,105,101,115,95,121,95,55,48,0);
       let constantsD = String.fromCharCode(114,101,109,105,110,100,95,100,95,55,57,0);
      while (reactnativeultimatelistviewb.length >= 2 && 2 >= b_unlockt.length) {
         reactnativeultimatelistviewb += `${constantsD.length}`;
         break;
      }
      for (let v = 0; v < 2; v++) {
         defaultprofilepicN -= parseFloat(`${parseInt(`${defaultprofilepicN}`)}`);
      }
         b_unlockt = `${(3 - (signinup_ ? 4 : 5))}`;
          let sellmathbackgroundU = String.fromCharCode(112,97,101,116,104,95,111,95,55,53,0);
          let minimizeA = String.fromCharCode(122,95,57,52,95,100,101,115,116,105,110,97,116,105,111,110,115,0);
         signinup_ = (catagoryu.length & reactnativeultimatelistviewb.length) < 99;
         sellmathbackgroundU = `${sellmathbackgroundU.length * 3}`;
         minimizeA += `${minimizeA.length + sellmathbackgroundU.length}`;
      while (3 > catagoryu.length) {
         catagoryu += `${b_unlockt.length % 1}`;
         break;
      }
         b_unlockt += `${parseInt(`${defaultprofilepicN}`)}`;
          let profilepice: Array<any> = [287, 829, 313];
          let dist1 = String.fromCharCode(112,116,111,110,95,105,95,51,0);
          let backiconr = 1.0;
         signinup_ = defaultprofilepicN >= parseFloat(`${catagoryu.length}`);
         profilepice = [1];
         dist1 += `${profilepice.length}`;
         backiconr += dist1.length;
      if (constantsD.length <= 3) {
         catagoryu = `${parseInt(`${defaultprofilepicN}`)}`;
      }
          let topicX = 2.0;
          let whiteanimationliver = String.fromCharCode(119,95,52,53,95,121,109,101,110,99,0);
          let flyerG = String.fromCharCode(120,115,117,98,95,97,95,49,55,0);
         signinup_ = String.fromCharCode(107,0) == b_unlockt;
         topicX += flyerG.length;
         whiteanimationliver += `${whiteanimationliver.length * flyerG.length}`;
      langkeyA = reactnativeultimatelistviewb.includes(`${signinup_}`);
      break;
   }
   while (!firebaseR || !megaphonep) {
      firebaseR = 29.85 <= greyg;
      break;
   }
      langkeyA = resendq;
   for (let m = 0; m < 3; m++) {
       let tumbnailP = 3.0;
       let imagenomoredataT: Array<any> = [180, 404, 643];
       let encryptn: Map<any, any> = new Map([[String.fromCharCode(98,95,52,51,95,98,105,116,119,114,105,116,101,114,0),117], [String.fromCharCode(99,95,51,49,95,99,100,97,116,101,0),862]]);
       let zhuboO = String.fromCharCode(99,114,121,115,116,97,108,104,100,95,52,95,52,50,0);
      let commentg = 6226641.0 >= tumbnailP;
      do {
         tumbnailP *= imagenomoredataT.length / 1;
         if (commentg) {
            break;
         }
      } while (commentg && (4.13 == (imagenomoredataT.length - tumbnailP)));
         encryptn = new Map([[`${encryptn.size}`, encryptn.size % (Math.max(6, imagenomoredataT.length))]]);
         zhuboO = `${parseInt(`${tumbnailP}`) & imagenomoredataT.length}`;
       let review2: Map<any, any> = new Map([[String.fromCharCode(98,111,117,110,99,105,110,101,115,115,95,55,95,54,50,0),908], [String.fromCharCode(116,95,56,55,95,112,108,117,114,97,108,0),30]]);
       let formD: Map<any, any> = new Map([[String.fromCharCode(118,95,54,48,95,106,118,101,114,115,105,111,110,0),String.fromCharCode(102,95,49,54,95,108,105,98,115,114,116,0)], [String.fromCharCode(109,117,116,101,100,95,116,95,53,55,0),String.fromCharCode(113,116,97,98,108,101,95,102,95,57,57,0)]]);
         formD.set(`${review2.size}`, formD.size ^ review2.size);
          let downu: Array<any> = [406, 581];
         zhuboO += `${formD.size}`;
         downu.push(1 & downu.length);
          let loginu: Map<any, any> = new Map([[String.fromCharCode(122,108,105,98,112,114,105,109,101,95,51,95,57,51,0),String.fromCharCode(97,98,99,115,95,119,95,52,50,0)], [String.fromCharCode(97,118,101,114,114,111,114,95,51,95,49,53,0),String.fromCharCode(115,99,114,111,108,108,105,110,103,95,105,95,57,0)], [String.fromCharCode(116,97,112,95,106,95,52,56,0),String.fromCharCode(111,95,56,54,95,113,116,97,98,108,101,115,0)]]);
         zhuboO += "2";
         loginu = new Map([[`${loginu.size}`, 2 * loginu.size]]);
       let tailt: Map<any, any> = new Map([[String.fromCharCode(100,114,111,112,95,106,95,53,52,0),716], [String.fromCharCode(119,95,50,51,95,116,101,115,116,98,114,105,100,103,101,0),554]]);
       let backo: Map<any, any> = new Map([[String.fromCharCode(112,114,101,102,101,116,99,104,101,114,95,51,95,56,56,0),String.fromCharCode(114,101,112,108,97,99,101,109,101,110,116,115,95,106,95,49,51,0)], [String.fromCharCode(100,111,99,115,95,51,95,53,49,0),String.fromCharCode(113,95,49,54,95,115,107,101,119,101,100,0)]]);
      let iconnewchat8 = 5610495 <= formD.size;
      do {
          let viewerX = String.fromCharCode(107,95,56,53,95,100,114,97,119,105,110,103,0);
          let gmailu = 4.0;
          let dependency7 = 5.0;
         formD.set(`${dependency7}`, 3);
         viewerX = `${parseInt(`${gmailu}`) / (Math.max(viewerX.length, 3))}`;
         gmailu *= parseFloat(`${2 | parseInt(`${gmailu}`)}`);
         dependency7 -= (viewerX == String.fromCharCode(57,0) ? viewerX.length : parseInt(`${gmailu}`));
         if (iconnewchat8) {
            break;
         }
      } while (((4 | formD.size) > 3 || 4 > (backo.size | formD.size)) && iconnewchat8);
       let textinputW = 0.0;
      while (zhuboO.startsWith(`${encryptn.size}`)) {
         zhuboO = "3";
         break;
      }
      for (let i = 0; i < 1; i++) {
          let iconmoreu = 1;
          let logoutt = String.fromCharCode(106,95,55,53,95,115,121,109,98,111,108,115,0);
          let otherC: Map<any, any> = new Map([[String.fromCharCode(114,95,57,52,95,98,115,102,115,0),493], [String.fromCharCode(100,101,108,97,121,97,98,108,101,95,111,95,49,50,0),533]]);
          let arrowrightwithtaila = 2.0;
         review2 = new Map([[`${iconmoreu}`, iconmoreu]]);
         logoutt += `${logoutt.length - 2}`;
         otherC.set(logoutt, otherC.size);
         arrowrightwithtaila /= Math.max(parseFloat(`${otherC.size}`), 4);
      }
      greyg *= parseFloat(`${2 >> (Math.min(5, Math.abs(parseInt(`${greyg}`))))}`);
   }
   while (langkeyA) {
       let componentregistryv: Map<any, any> = new Map([[String.fromCharCode(112,114,111,100,117,99,116,105,111,110,95,119,95,53,53,0),179], [String.fromCharCode(99,108,97,109,112,101,100,95,121,95,56,0),898]]);
       let typingQ = 4;
       let weathery = String.fromCharCode(117,110,122,105,112,95,113,95,49,53,0);
       let react5 = false;
         react5 = 40 > componentregistryv.size && weathery.length > 40;
         typingQ %= Math.max(typingQ / (Math.max(7, weathery.length)), 3);
      let smallorangemanZ = weathery == String.fromCharCode(57,48,118,51,106,0);
      do {
         weathery = `${((react5 ? 3 : 2) % (Math.max(componentregistryv.size, 6)))}`;
         if (smallorangemanZ) {
            break;
         }
      } while ((weathery.includes(`${react5}`)) && smallorangemanZ);
          let themez = String.fromCharCode(97,95,57,48,95,116,114,97,110,115,113,117,97,110,116,0);
          let redscoreballd = 5.0;
         typingQ ^= 2;
         themez = `${themez.length}`;
         redscoreballd *= parseInt(`${redscoreballd}`) % (Math.max(2, 10));
         react5 = null != componentregistryv.get(`${react5}`);
         react5 = weathery.length < 10;
      while (!react5) {
         react5 = null != componentregistryv.get(`${typingQ}`);
         break;
      }
      for (let x = 0; x < 3; x++) {
         typingQ /= Math.max(3, 4);
      }
          let interstitialJ = 3.0;
          let mbsplashC = 1;
         react5 = !react5;
         interstitialJ *= parseInt(`${interstitialJ}`);
         mbsplashC >>= Math.min(Math.abs(parseInt(`${interstitialJ}`)), 3);
       let privilege8: Array<any> = [179, 655];
         typingQ <<= Math.min(Math.abs((weathery == String.fromCharCode(85,0) ? componentregistryv.size : weathery.length)), 3);
      if (componentregistryv.get(`${privilege8.length}`) != null) {
         componentregistryv.set(weathery, weathery.length);
      }
      firebaseR = langkeyA;
      break;
   }
       let corner7 = String.fromCharCode(105,110,100,101,118,115,95,115,95,51,56,0);
      for (let m = 0; m < 3; m++) {
          let langc = String.fromCharCode(98,95,56,48,95,109,97,105,110,110,101,116,115,0);
          let fastforwardw = String.fromCharCode(110,101,105,103,104,98,111,114,105,110,103,95,55,95,54,53,0);
          let libruntimeexecutorb = String.fromCharCode(116,95,57,53,95,100,105,115,116,114,105,98,117,116,101,100,0);
          let iconarrowrightW = 4.0;
          let libreactnativejni_ = true;
         corner7 += `${libruntimeexecutorb.length & 3}`;
         langc = `${parseInt(`${iconarrowrightW}`) * 1}`;
         fastforwardw = "2";
         libruntimeexecutorb += `${fastforwardw.length - 3}`;
         iconarrowrightW *= (3 | (libreactnativejni_ ? 3 : 5));
         libreactnativejni_ = langc.includes(`${iconarrowrightW}`);
      }
      for (let t = 0; t < 3; t++) {
          let bell5 = 4.0;
          let filedN = true;
          let forwardQ: Array<any> = [String.fromCharCode(100,111,103,95,107,95,53,53,0), String.fromCharCode(107,95,57,52,95,108,111,115,115,108,101,115,115,0), String.fromCharCode(103,95,56,52,95,118,105,101,119,0)];
          let iconarrowrightblackH = 1;
         corner7 += "3";
         bell5 -= parseFloat(`${forwardQ.length}`);
         filedN = !filedN;
         forwardQ = [forwardQ.length];
         iconarrowrightblackH <<= Math.min(Math.abs(parseInt(`${bell5}`)), 4);
      }
         corner7 = "1";
      grey9 += `${((megaphonep ? 4 : 1) | 1)}`;
    setIsRefreshing(false);

   let hometeamfieldt = mbridged.length <= 6991208;
   do {
      mbridged += `${mbridged.length}`;
      if (hometeamfieldt) {
         break;
      }
   } while (hometeamfieldt && (mbridged.length > 2));
       let bgvipxvodq = 5;
       let notificationfilled9 = 5.0;
      for (let b = 0; b < 1; b++) {
          let libfabricjnif = false;
          let codegenL: Array<any> = [394, 29];
          let iconcalendarI = false;
         notificationfilled9 -= (bgvipxvodq ^ (iconcalendarI ? 5 : 1));
         libfabricjnif = codegenL.length == 94 || !libfabricjnif;
         codegenL.push((codegenL.length << (Math.min(3, Math.abs((libfabricjnif ? 3 : 3))))));
         iconcalendarI = (75 >= (codegenL.length - (libfabricjnif ? codegenL.length : 75)));
      }
      while (notificationfilled9 >= bgvipxvodq) {
         notificationfilled9 += 2 | bgvipxvodq;
         break;
      }
          let yellowanimationliveb = String.fromCharCode(97,118,102,111,114,109,97,116,95,103,95,52,48,0);
          let typing1: Map<any, any> = new Map([[String.fromCharCode(107,95,52,51,95,99,105,100,0),String.fromCharCode(107,95,51,51,95,115,112,105,110,110,101,114,0)], [String.fromCharCode(102,111,108,108,111,119,95,50,95,53,49,0),String.fromCharCode(109,105,115,109,97,116,99,104,95,122,95,56,53,0)]]);
          let iconqqX = String.fromCharCode(99,108,111,115,105,110,103,95,113,95,52,57,0);
         notificationfilled9 *= bgvipxvodq;
         yellowanimationliveb += `${iconqqX.length | typing1.size}`;
         typing1 = new Map([[yellowanimationliveb, iconqqX.length]]);
      while (3.7 >= (bgvipxvodq - notificationfilled9)) {
         notificationfilled9 -= 1 & bgvipxvodq;
         break;
      }
      while ((1.22 / (Math.max(10, notificationfilled9))) == 3.40 && 1.22 == (notificationfilled9 / (Math.max(3, bgvipxvodq)))) {
         notificationfilled9 /= Math.max(2, bgvipxvodq);
         break;
      }
          let libavdeviceL = 1.0;
         bgvipxvodq /= Math.max(2, 2);
         libavdeviceL -= parseInt(`${libavdeviceL}`) % 3;
      grey9 = `${((firebaseR ? 3 : 5))}`;
      grey9 += `${((resendq ? 2 : 2) * parseInt(`${greyg}`))}`;
      greyg /= Math.max(5, parseFloat(`${parseInt(`${greyg}`) ^ 2}`));
      grey9 = `${(mbridged == String.fromCharCode(89,0) ? (firebaseR ? 4 : 1) : mbridged.length)}`;
   while (megaphonep) {
      grey9 = `${((resendq ? 4 : 4))}`;
      break;
   }
    return;
  }, []);
  

  const isVip = wawaLibglog.fakeIsVip(userState.user);

  useEffect(() => {
    if (selectedTab === 'xvod' && !isVip) {
      setShowBecomeVIPOverlay(true)
    } else {
      setShowBecomeVIPOverlay(false)
    }
  }, [selectedTab])


  return (
    <>
      <ImageBackground
        source={
          selectedTab == "positionLibsgcoreStatisticsinactive"
            ? require("./../../static/images/shrinkTwitter.png")
            : screenState.showAdultTab
              ? require("./../../static/images/reddownarrowHalfVipsport.png")
              : require("./../../static/images/profile/malaysiaReactnativeultimatelistviewViews.png")
        }
        resizeMode="cover"
        style={{ flex: 1, height: 200 }}
      >
        <ScreenContainer
          isBgHide={true}
          containerStyle={{
            paddingLeft: 0,
            paddingRight: 0,
            paddingTop: Platform.OS === "ios" ? 8 : 15,
          }}
        >
          <View
            style={{
              paddingLeft: spacing.sideOffset,
              paddingRight: spacing.sideOffset,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingTop: 8,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {showSport &&
                <TouchableOpacity
                  onPress={() => {
                    setSelectedTab("positionLibsgcoreStatisticsinactive");
                    dispatch(disableAdultMode());
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <View
                      style={{
                        paddingRight: 7,
                        position: "relative",
                        bottom: 10,
                      }}
                    >
                      <SportTabIcon width={32} height={32} />
                    </View>

                    <View
                      style={{
                        flexDirection: "column",
                      }}
                    >
                      <Text
                        style={{
                          ...textVariants.bigHeader,
                          color: colors.text,
                          fontSize: selectedTab == "positionLibsgcoreStatisticsinactive" ? 20 : 16,
                          
                          paddingBottom: 3,
                          marginBottom: 0,
                        }}
                      >
                        体育
                      </Text>

                      <View
                        style={{
                          justifyContent: "center",
                          paddingHorizontal: 12,
                        }}
                      >
                        <View
                          style={{
                            borderTopWidth: selectedTab == "positionLibsgcoreStatisticsinactive" ? 2 : 0, 
                            borderTopColor: "#ffffff", 
                            maxWidth: 20,
                          }}
                        ></View>

                        <Text></Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              }

              {screenState.showAdultTab && (
                <>
                  <TouchableOpacity
                    onPress={() => {
                      setSelectedTab("xvod");
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        marginLeft: 15,
                      }}
                    >
                      <View
                        style={{
                          paddingRight: 7,
                          position: "relative",
                          bottom: 12,
                        }}
                      >
                        <XvodTabIcon width={32} height={32} />
                      </View>

                      <View
                        style={{
                          flexDirection: "column",
                        }}
                      >
                        <Text
                          style={{
                            ...textVariants.bigHeader,
                            color: colors.text,
                            fontSize: selectedTab == "xvod" ? 20 : 16,
                            
                            paddingBottom: 3,
                            marginBottom: 0,
                          }}
                        >
                          成人
                        </Text>

                        <View
                          style={{
                            justifyContent: "center",
                            paddingHorizontal: 15,
                          }}
                        >
                          <View
                            style={{
                              borderTopWidth: selectedTab == "xvod" ? 2 : 0, 
                              borderTopColor: "#ffffff", 
                              maxWidth: 22,
                            }}
                          ></View>

                          <Text></Text>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                </>
              )}
            </View>
            {SHOW_ZF_CONST &&
              <TouchableOpacity
                activeOpacity={
                  !wawaLibglog.isVip(userState.user) ||
                    wawaLibglog.isGuest(userState.user)
                    ? 0.5
                    : 1
                }
                onPress={() => {
                  if (
                    !wawaLibglog.isVip(userState.user)
                  ) {
                    setShowBecomeVIPOverlay(true);
                  }
                }}
              >
                {!wawaLibglog.isVip(userState.user) ? (
                  <>
                    <View style={styles.headerContainerRight2}>
                      <VipEntry height={30} />
                    </View>
                  </>
                ) : (
                  <>
                    <View style={styles.headerContainerRight}>
                      <Image
                        style={styles.iconStyle}
                        source={require("@static/images/profile/viewerRoundCommon.png")}
                      />
                      <Text
                        style={{
                          color: colors.text,
                          fontSize: 14,
                        }}
                      >
                        VIP {vipRemainingDay}天
                      </Text>
                    </View>
                  </>
                )}
              </TouchableOpacity>
            }
          </View>
          {selectedTab == "positionLibsgcoreStatisticsinactive" &&
            matchTabs &&
            matchTabs.length > 0 &&
            !isOffline && (
              <View
                style={{
                  flex: 1,
                  marginHorizontal: 10,
                  backgroundColor: "transparent",
                  
                  
                }}
              >
                <MatchScheduleNavVip
                  setShowBecomeVIPOverlay={setShowBecomeVIPOverlay}
                  tabList={matchTabs}
                />
                {!isVip &&
                  <BecomeVipOverlay
                    setShowBecomeVIPOverlay={setShowBecomeVIPOverlay}
                    showBecomeVIPOverlay={showBecomeVIPOverlay}
                    selectedTab={selectedTab}
                  />
                }
              </View>
              // <Text>sport</Text>
            )}

          {selectedTab == "xvod" && (
            <View
              style={{
                flex: 1,
                marginHorizontal: 10,
                backgroundColor: "transparent",
                marginTop: 5
                
                
              }}
            >
              <XVodTab handleRejectEighteenPlus={handleRejectEighteenPlus} />
              {!isVip &&
                <>
                  <TouchableWithoutFeedback
                    style={styles.xvodBlur}
                    onPress={() => setShowBecomeVIPOverlay(true)}
                  >
                    <BlurView
                      blurType="dark"
                      blurAmount={2}
                      style={styles.xvodBlur}
                      overlayColor="" 
                    />
                  </TouchableWithoutFeedback>
                  <BecomeVipOverlay
                    setShowBecomeVIPOverlay={setShowBecomeVIPOverlay}
                    showBecomeVIPOverlay={showBecomeVIPOverlay}
                    selectedTab={selectedTab}
                  />
                </>
              }
            </View>
          )}
          {isOffline && <NoConnection onClickRetry={checkConnection} />}
        </ScreenContainer>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
  },
  loading: {
    flexDirection: "row",
    justifyContent: "center",
    flex: 1,
  },
  nav: {
    flexGrow: 1,
    justifyContent: "center",
    marginBottom: 10,
  },
  iconStyle: {
    height: 18,
    width: 18,
    marginRight: 5,
  },
  headerContainerRight: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(34, 35, 39 , 0.7)",
    paddingHorizontal: 10,
    borderRadius: 30,
    paddingVertical: 5,
    position: "relative",
    bottom: 8,
  },
  headerContainerRight2: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(34, 35, 39 , 0.7)",
    paddingHorizontal: 7,
    borderRadius: 30,
    paddingVertical: 1,
    position: "relative",
    bottom: 8,
  },
  xvodBlur: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
    marginTop: 10,
    borderRadius: 15,
    
  }
});
