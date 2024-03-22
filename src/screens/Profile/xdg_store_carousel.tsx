import React, { useCallback, useEffect, useState, memo } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  RefreshControl,
  Platform,
} from "react-native";
import { useTheme, useFocusEffect } from "@react-navigation/native";
import { useAppDispatch, useAppSelector, useSelector } from "@hooks/kg_index";
import { PSmall } from "@redux/fj_prediction_thailand";
import ShowMoreButton from "../../components/button/c_logo_countdown_button";

import CollectionIcon from "@static/images/privacySearchbarTrash.svg";
import HistoryIcon from "@static/images/usernameCountry.svg";
import FeedbackIcon from "@static/images/vietnamCalendarMiddleware.svg";
import SettingsIcon from "@static/images/malaysiaTumbnailCombine.svg";
import InfoIcon from "@static/images/configureGift.svg";
import DownloadIcon from "@static/images/feedbackAway.svg";
import { useNavigation } from "@react-navigation/native";

import Orientation from "react-native-orientation-locker";
import ProfileIcon from "@static/images/leaguePrivate_l.svg";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import MoreArrow from "@static/images/readBingMode.svg";
import EditIcn from "@static/images/profile/roomStreaming.svg";

import VipIcon from "@static/images/playlistInjury.svg";
import VipArrow from "@static/images/modalUserReminder.svg";
import AddIcon from "@static/images/vip/thailandApple.svg";
import { KLongNext } from "../../../z_search";

import {
  hideBottomSheetAction,
  removeScreenAction,
  setShowGuestPurchaseSuccess,
  showLoginAction,
} from "@redux/actions/a_switch";
import NotificationModal from "../../components/modal/fc_shoot_bodan";
import { updateUserAuth, updateUserReferral } from "@redux/actions/rk_filed_watch";
import ExpiredOverlay from "../../components/modal/rv_borderless";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { DOWNLOAD_FEATURE_ENABLED, SHOW_ZF_CONST, UMENG_CHANNEL } from "@utility/n_subs_interstitial";
import FastImage from "../../components/common/gwi_with";
import { THFirebase } from "@api";
import { KTMain } from "../../Sports/global/h_update";
import { BannerContainer } from "../../components/container/r_basketball_common";
import { MAboutEdit } from "@type/wpk_long";
import { JTumbnailMatches } from "@utility/qot_stations_station";
import { MVCountry } from "../../constants/i_favorite";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { UQQuest } from "../../api/z_google";
import umb_center_carousel from "../../../Umeng/umb_center_carousel";
import DeviceInfo from "react-native-device-info";
import style from "../../Sports/components/matchDetails/liveChatPage/fgl_less_position";
import { VipLoginAlertOverlay } from "../../components/modal/rv_accepted_china";
import { OUWeiboOverlay } from "@redux/reducers/hm_favorite";
import { HDTGesturesList } from "@redux/reducers/f_gmail";
import { KWConstants } from "@models/kl_sheet";

function Profile({ navigation, route }: BottomTabScreenProps<any>) {
  const navigator = useNavigation();
  const { colors, textVariants, icons, spacing } = useTheme();
  const dispatch = useAppDispatch();
  const [refreshing, setRefreshing] = useState(false);
  const [displayedDate, setDisplayedDate] = useState("");
  const userState = useSelector<HDTGesturesList>('userReducer');
  const appState = useSelector<OUWeiboOverlay>('backgroundReducer');
  
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [bannerAd, setBannerAd] = useState<MAboutEdit[]>();

  const toggleOverlay = () => {
       let lessa: Map<any, any> = new Map([[String.fromCharCode(115,105,110,103,108,101,116,97,98,108,101,95,109,95,57,51,0),557], [String.fromCharCode(115,107,105,112,95,52,95,56,48,0),612], [String.fromCharCode(100,101,102,105,110,101,115,95,98,95,52,0),748]]);
    let sports9 = String.fromCharCode(115,105,109,117,108,97,116,101,95,98,95,54,53,0);
    let navigationx: Map<any, any> = new Map([[String.fromCharCode(109,95,53,48,95,109,111,109,101,110,116,0),112], [String.fromCharCode(113,95,56,56,95,117,112,108,111,97,100,105,110,103,0),610]]);
    let data8 = 2;
    let acceptedd = String.fromCharCode(113,95,51,51,95,99,101,108,108,97,117,116,111,0);
    let typingl: Array<any> = [588, 243, 833];
    let dark4 = String.fromCharCode(109,95,57,52,95,102,97,114,109,101,0);
    let arrowW = 2.0;
    let adult9 = String.fromCharCode(109,117,108,116,95,52,95,53,50,0);
   let fillK = navigationx.size >= 6371742;
   do {
       let updatese = String.fromCharCode(116,95,53,48,95,114,101,118,101,114,98,0);
       let nalyticsw: Array<any> = [344, 770, 400];
       let customK = String.fromCharCode(120,95,52,55,95,98,97,115,105,99,97,108,108,121,0);
       let descR: Array<any> = [228, 11];
          let memberm = String.fromCharCode(97,95,54,57,95,108,97,116,116,105,99,101,0);
         descR.push(descR.length);
         memberm = `${(memberm == String.fromCharCode(117,0) ? memberm.length : memberm.length)}`;
          let screene = 1;
         descR = [(String.fromCharCode(89,0) == customK ? nalyticsw.length : customK.length)];
         screene <<= Math.min(Math.abs(screene), 2);
      for (let m = 0; m < 3; m++) {
         nalyticsw.push(2 << (Math.min(4, descR.length)));
      }
       let editn = 4.0;
      while ((customK.length << (Math.min(Math.abs(2), 4))) < 3) {
         customK += "1";
         break;
      }
      if (2 <= (5 >> (Math.min(5, customK.length))) && (descR.length >> (Math.min(Math.abs(5), 5))) <= 4) {
         customK = `${updatese.length / 3}`;
      }
         descR = [parseInt(`${editn}`) & descR.length];
          let handlero: Map<any, any> = new Map([[String.fromCharCode(116,111,111,98,105,103,95,111,95,55,55,0),String.fromCharCode(99,97,99,104,101,115,105,122,101,95,103,95,52,50,0)], [String.fromCharCode(113,95,54,56,95,116,108,101,110,0),String.fromCharCode(115,95,51,56,95,99,104,97,116,0)], [String.fromCharCode(113,95,57,52,95,107,105,110,103,102,105,115,104,101,114,0),String.fromCharCode(119,97,116,99,104,105,110,103,95,57,95,52,0)]]);
          let predictions = String.fromCharCode(105,115,112,111,115,97,98,108,101,95,118,95,50,52,0);
         updatese = `${updatese.length}`;
         handlero = new Map([[`${handlero.size}`, (String.fromCharCode(101,0) == predictions ? predictions.length : handlero.size)]]);
          let private_1ed = String.fromCharCode(99,102,115,116,114,101,97,109,95,99,95,49,50,0);
          let rewind2 = 1;
         editn += 3 - descR.length;
         private_1ed = `${3 << (Math.min(3, Math.abs(rewind2)))}`;
         rewind2 <<= Math.min(1, Math.abs(3));
      for (let g = 0; g < 3; g++) {
         updatese = `${descR.length}`;
      }
      let closeL = 9772011 >= descR.length;
      do {
         descR = [customK.length & nalyticsw.length];
         if (closeL) {
            break;
         }
      } while (closeL && (5 >= (customK.length | 4)));
         updatese += `${parseInt(`${editn}`)}`;
      navigationx = new Map([[`${navigationx.size}`, customK.length]]);
      if (fillK) {
         break;
      }
   } while ((!sports9.includes(`${navigationx.size}`)) && fillK);
      acceptedd += "3";
   let editi = 9573166 <= navigationx.size;
   do {
      navigationx = new Map([[`${typingl.length}`, typingl.length << (Math.min(Math.abs(3), 5))]]);
      if (editi) {
         break;
      }
   } while ((navigationx.size <= 3) && editi);
       let combinedQ = true;
       let changeD = String.fromCharCode(100,105,115,112,108,97,99,101,109,101,110,116,95,117,95,50,48,0);
       let previewA: Map<any, any> = new Map([[String.fromCharCode(112,95,55,49,95,100,121,110,97,114,114,97,121,0),String.fromCharCode(104,117,101,95,48,95,49,0)], [String.fromCharCode(105,110,105,116,105,97,108,105,122,101,100,95,52,95,49,57,0),String.fromCharCode(107,95,56,54,95,119,105,110,100,111,119,115,0)]]);
       let blacklisth = String.fromCharCode(112,111,115,116,114,111,116,97,116,101,95,118,95,57,57,0);
          let resendT = String.fromCharCode(119,95,49,53,95,114,101,97,100,0);
          let rightl = false;
          let vcopy__z = String.fromCharCode(107,95,50,57,95,99,104,97,114,115,0);
         changeD = `${((combinedQ ? 2 : 1))}`;
         resendT += `${resendT.length}`;
         rightl = vcopy__z.length <= 53;
         vcopy__z = `${resendT.length}`;
      if ((4 - blacklisth.length) < 1 || 4 < (blacklisth.length - previewA.size)) {
         previewA = new Map([[`${previewA.size}`, changeD.length & 1]]);
      }
         changeD += "3";
          let resultN = String.fromCharCode(116,114,97,110,115,102,111,114,109,97,98,108,101,95,98,95,51,57,0);
          let emptyf = String.fromCharCode(104,95,49,49,95,115,97,110,101,0);
          let invite3 = String.fromCharCode(102,116,118,102,111,108,100,101,114,99,108,111,115,101,100,95,49,95,51,52,0);
         blacklisth = `${previewA.size}`;
         resultN = `${1 >> (Math.min(2, emptyf.length))}`;
         emptyf = `${emptyf.length - invite3.length}`;
         invite3 = `${emptyf.length / (Math.max(resultN.length, 2))}`;
      let sliderJ = 9740654 >= previewA.size;
      do {
         previewA.set(changeD, ((combinedQ ? 3 : 3)));
         if (sliderJ) {
            break;
         }
      } while ((previewA.size >= 1 || (previewA.size + 1) >= 3) && sliderJ);
       let subsE = 3.0;
         blacklisth = `${changeD.length - 3}`;
      for (let a = 0; a < 2; a++) {
         blacklisth += `${changeD.length >> (Math.min(Math.abs(1), 5))}`;
      }
      data8 -= 2 + previewA.size;
   for (let s = 0; s < 1; s++) {
      lessa.set(`${typingl.length}`, typingl.length);
   }
   let typingQ = arrowW <= 8149675.0;
   do {
      arrowW /= Math.max((parseFloat(`${String.fromCharCode(79,0) == sports9 ? sports9.length : lessa.size}`)), 1);
      if (typingQ) {
         break;
      }
   } while (typingQ && ((dark4.length - parseInt(`${arrowW}`)) > 5 || 5 > (parseInt(`${arrowW}`) - dark4.length)));
      lessa.set(acceptedd, 2 >> (Math.min(5, acceptedd.length)));
   for (let d = 0; d < 1; d++) {
      sports9 += "1";
   }
   while (sports9.includes(`${lessa.size}`)) {
       let recommendationh = false;
       let tempH = String.fromCharCode(105,110,116,101,114,110,101,100,95,118,95,52,57,0);
       let upgradeP = 4;
       let sortU: Array<any> = [18, 919, 44];
         upgradeP |= 1;
      for (let k = 0; k < 3; k++) {
         upgradeP ^= 2 | upgradeP;
      }
      let largeP = sortU.length >= 4939039;
      do {
         sortU = [3];
         if (largeP) {
            break;
         }
      } while ((4 >= (3 ^ sortU.length) || 2 >= (upgradeP ^ 3)) && largeP);
      if (!recommendationh) {
         recommendationh = tempH.length >= 40;
      }
      while (tempH.includes(`${upgradeP}`)) {
          let videoO = String.fromCharCode(99,95,54,53,95,101,100,116,115,0);
         upgradeP ^= sortU.length;
         videoO += "1";
         break;
      }
         recommendationh = tempH.length <= 63 || recommendationh;
          let scoreK = 5.0;
          let usernameY = true;
         tempH = `${tempH.length}`;
         scoreK -= ((usernameY ? 1 : 1) / (Math.max(parseInt(`${scoreK}`), 10)));
         usernameY = 79.63 < scoreK;
          let navigationL: Map<any, any> = new Map([[String.fromCharCode(102,95,54,52,95,118,101,99,116,111,114,115,99,111,112,101,0),202], [String.fromCharCode(115,95,57,55,95,110,111,116,105,102,105,99,97,116,105,111,110,115,0),317]]);
          let gpayA = String.fromCharCode(99,111,100,97,98,108,101,95,121,95,49,53,0);
         upgradeP /= Math.max(upgradeP >> (Math.min(sortU.length, 5)), 2);
         navigationL = new Map([[`${navigationL.size}`, 1]]);
         gpayA = `${gpayA.length}`;
      let suggestion8 = recommendationh ? !recommendationh : recommendationh;
      do {
          let shootY = String.fromCharCode(103,95,49,51,95,108,101,118,101,108,0);
          let signinupI = String.fromCharCode(115,117,98,98,108,111,99,107,115,95,50,95,53,54,0);
          let xvodT: Array<any> = [691, 265];
         recommendationh = ((tempH.length << (Math.min(3, Math.abs((!recommendationh ? 8 : tempH.length))))) >= 8);
         shootY = `${xvodT.length}`;
         signinupI += `${shootY.length}`;
         xvodT.push(shootY.length % 2);
         if (suggestion8) {
            break;
         }
      } while (suggestion8 && (!tempH.startsWith(`${recommendationh}`)));
         tempH = "1";
          let linko: Map<any, any> = new Map([[String.fromCharCode(118,95,52,49,95,97,116,111,110,0),400], [String.fromCharCode(119,95,55,51,0),916], [String.fromCharCode(99,97,112,97,98,105,108,105,116,105,101,115,95,103,95,57,49,0),947]]);
          let descw = false;
         upgradeP += (linko.size ^ (recommendationh ? 3 : 4));
         linko.set(`${descw}`, ((descw ? 1 : 4)));
          let usernamev = String.fromCharCode(108,95,54,56,95,112,117,98,108,105,99,105,116,121,0);
          let sinaS: Map<any, any> = new Map([[String.fromCharCode(97,99,116,117,97,108,108,121,95,109,95,51,50,0),true ], [String.fromCharCode(110,101,97,114,95,54,95,57,51,0),true ], [String.fromCharCode(118,101,114,98,111,115,101,95,105,95,55,57,0),true ]]);
         upgradeP &= ((recommendationh ? 4 : 3) + sinaS.size);
         usernamev = "3";
         sinaS = new Map([[usernamev, usernamev.length % (Math.max(4, usernamev.length))]]);
      sports9 += `${sortU.length << (Math.min(Math.abs(3), 2))}`;
      break;
   }
      acceptedd += `${adult9.length % (Math.max(acceptedd.length, 2))}`;
   for (let r = 0; r < 1; r++) {
      dark4 += `${3 | lessa.size}`;
   }
   if (1 <= (adult9.length - 5)) {
      adult9 = `${(adult9 == String.fromCharCode(56,0) ? adult9.length : navigationx.size)}`;
   }
   if (2 >= (data8 & navigationx.size)) {
       let skipl: Array<any> = [571, 669, 336];
       let clockl = 3.0;
      let description_zaa = clockl >= 7949133.0;
      do {
         clockl -= 2 * parseInt(`${clockl}`);
         if (description_zaa) {
            break;
         }
      } while (((skipl.length << (Math.min(Math.abs(5), 5))) < 3) && description_zaa);
         clockl /= Math.max(1, skipl.length);
      navigationx.set(`${sports9}`, navigationx.size);
   }
      typingl = [typingl.length];
   if (3 > (sports9.length - lessa.size) && 2 > (3 - sports9.length)) {
      lessa.set(`${arrowW}`, parseInt(`${arrowW}`) << (Math.min(Math.abs(3), 4)));
   }
   while (adult9 != String.fromCharCode(106,0) && dark4 == String.fromCharCode(90,0)) {
      dark4 += `${2 | lessa.size}`;
      break;
   }
   let canvasZ = 6229884 <= typingl.length;
   do {
      typingl = [data8];
      if (canvasZ) {
         break;
      }
   } while (canvasZ && (5 < (typingl.length + parseInt(`${arrowW}`)) && 3 < (typingl.length / 5)));

    setIsDialogOpen(!isDialogOpen);
  };

  const refreshUserState = async () => {
       let incidentd = String.fromCharCode(114,95,49,57,95,112,105,99,107,109,111,100,101,0);
    let linki = String.fromCharCode(110,95,52,52,0);
    let pointm = String.fromCharCode(119,95,52,52,95,112,114,101,115,101,110,116,101,100,0);
    let tumbnailM = String.fromCharCode(99,104,97,114,103,101,95,109,95,57,57,0);
    let reminderi = 1;
    let actionsb = String.fromCharCode(97,95,56,52,95,109,117,110,109,97,112,0);
    let shrink8 = 4;
    let shoot1: Array<any> = [524, 921, 538];
   let placeholderr = reminderi >= 5127350;
   do {
      reminderi *= shrink8;
      if (placeholderr) {
         break;
      }
   } while (placeholderr && (5 < (tumbnailM.length + 3)));
      reminderi &= shrink8 / 2;
       let disconnectedP = String.fromCharCode(102,95,56,54,95,115,112,111,105,108,101,114,115,0);
      for (let d = 0; d < 2; d++) {
         disconnectedP = `${(disconnectedP == String.fromCharCode(68,0) ? disconnectedP.length : disconnectedP.length)}`;
      }
         disconnectedP = `${(disconnectedP == String.fromCharCode(85,0) ? disconnectedP.length : disconnectedP.length)}`;
      if (disconnectedP.startsWith(disconnectedP)) {
         disconnectedP += `${disconnectedP.length}`;
      }
      linki = "2";
      linki += `${2 ^ reminderi}`;

    const result = await THFirebase.getUserDetails();

      tumbnailM = `${linki.length}`;
      linki += `${reminderi}`;
   for (let o = 0; o < 3; o++) {
       let constantsm = 0.0;
       let customd: Array<any> = [711, 209, 558];
       let hejiV = String.fromCharCode(109,111,100,109,95,106,95,57,57,0);
       let eactL = 5.0;
       let aboutO = 1;
      let moreL = eactL >= 7404754.0;
      do {
         eactL /= Math.max(parseInt(`${eactL}`) / (Math.max(customd.length, 8)), 2);
         if (moreL) {
            break;
         }
      } while (moreL && (hejiV.includes(`${eactL}`)));
          let flyerB = String.fromCharCode(109,101,114,103,101,95,97,95,50,55,0);
          let privacyJ: Map<any, any> = new Map([[String.fromCharCode(115,101,112,97,114,97,116,111,114,115,95,121,95,57,48,0),328], [String.fromCharCode(97,110,105,109,97,116,111,114,115,95,114,95,49,54,0),861], [String.fromCharCode(99,95,54,95,117,110,112,105,110,110,101,100,0),903]]);
          let reducerM = 2.0;
         hejiV += `${parseInt(`${reducerM}`)}`;
         flyerB = `${privacyJ.size * 3}`;
         privacyJ.set(`${flyerB}`, flyerB.length - 1);
      if ((aboutO * hejiV.length) >= 3 && (hejiV.length * aboutO) >= 3) {
         hejiV = `${parseInt(`${eactL}`) + 2}`;
      }
         constantsm += parseFloat(`${customd.length * 1}`);
      if (3.33 > (aboutO / (Math.max(constantsm, 9)))) {
         aboutO &= parseInt(`${constantsm}`);
      }
      while (1.73 <= (2.51 - constantsm)) {
         hejiV = `${parseInt(`${eactL}`)}`;
         break;
      }
      if (eactL >= 1.7) {
         eactL += 2;
      }
       let megaphoneD = 4.0;
       let thumbnailZ = 5.0;
      let roomm = eactL >= 8397958.0;
      do {
         eactL /= Math.max(2, parseInt(`${megaphoneD}`));
         if (roomm) {
            break;
         }
      } while (roomm && (1.35 <= (eactL - aboutO) && (parseInt(`${eactL}`) - aboutO) <= 5));
         aboutO -= 2 - parseInt(`${megaphoneD}`);
      let downloader3 = 9900002.0 >= eactL;
      do {
         eactL += hejiV.length % 1;
         if (downloader3) {
            break;
         }
      } while ((aboutO <= eactL) && downloader3);
         thumbnailZ /= Math.max(parseFloat(`${3 ^ aboutO}`), 4);
          let leagueb = true;
          let recommendationI: Array<any> = [683, 72];
          let zhengpianz = false;
         aboutO >>= Math.min(parseInt(`${Math.abs((parseInt(`${constantsm}`) % (Math.max(7, (zhengpianz ? 1 : 3)))))}`), 4);
         leagueb = recommendationI.includes(leagueb);
         recommendationI.push(((leagueb ? 1 : 2) + 3));
         zhengpianz = leagueb;
      while (4 > aboutO) {
         eactL *= parseInt(`${constantsm}`) * customd.length;
         break;
      }
         megaphoneD /= Math.max(5, parseFloat(`${customd.length}`));
      tumbnailM += `${2 / (Math.max(1, actionsb.length))}`;
   }
       let ballh = 5.0;
       let maile = 2.0;
       let ballW = String.fromCharCode(105,110,105,118,105,116,101,100,95,57,95,49,55,0);
          let control2 = 4.0;
          let logouto = String.fromCharCode(111,95,51,49,95,115,117,112,112,108,121,0);
         ballh *= (logouto == String.fromCharCode(111,0) ? logouto.length : parseInt(`${control2}`));
      let searchX = 5729348.0 >= ballh;
      do {
          let homeV = 4.0;
          let awayC = String.fromCharCode(101,95,51,56,95,115,101,101,107,105,110,103,0);
          let modeS = true;
          let gcopy_da = 0.0;
          let playW: Array<any> = [92, 517, 819];
         ballh -= 3 / (Math.max(3, parseInt(`${homeV}`)));
         homeV /= Math.max(3, parseFloat(`${playW.length}`));
         awayC += `${3 >> (Math.min(Math.abs(parseInt(`${gcopy_da}`)), 2))}`;
         modeS = gcopy_da == 33.78;
         playW = [playW.length];
         if (searchX) {
            break;
         }
      } while (searchX && (maile <= 5.7));
       let routerB = String.fromCharCode(114,95,56,54,95,117,110,97,117,116,104,111,114,105,122,101,100,0);
       let agreementJ = String.fromCharCode(104,95,56,49,95,119,114,105,116,101,97,98,108,101,0);
         ballW = `${(ballW == String.fromCharCode(74,0) ? ballW.length : parseInt(`${maile}`))}`;
         routerB = `${routerB.length << (Math.min(4, ballW.length))}`;
      tumbnailM += `${parseInt(`${maile}`)}`;
    if (result == null) {

   for (let r = 0; r < 3; r++) {
      reminderi <<= Math.min(linki.length, 4);
   }
       let next7 = 3.0;
      while (2.75 >= next7) {
         next7 *= parseFloat(`${1}`);
         break;
      }
          let mathw = 4.0;
          let overT: Map<any, any> = new Map([[String.fromCharCode(115,116,114,110,115,116,114,95,106,95,50,55,0),454], [String.fromCharCode(111,118,101,114,105,100,100,101,110,95,106,95,53,53,0),311]]);
          let previewx = 0.0;
         next7 += parseFloat(`${parseInt(`${mathw}`) - 1}`);
         mathw -= parseFloat(`${2}`);
         overT.set(`${previewx}`, parseInt(`${previewx}`) % (Math.max(overT.size, 3)));
          let robotog = 1.0;
         next7 /= Math.max(parseFloat(`${1 & parseInt(`${robotog}`)}`), 4);
      incidentd = `${2 << (Math.min(3, tumbnailM.length))}`;
   if (pointm != String.fromCharCode(118,0) || actionsb != String.fromCharCode(89,0)) {
      pointm = "2";
   }
   for (let d = 0; d < 1; d++) {
      pointm = `${tumbnailM.length / (Math.max(3, linki.length))}`;
   }
      return;
    }

    await dispatch(updateUserAuth(result));

      incidentd += `${1 << (Math.min(1, incidentd.length))}`;
      shrink8 &= reminderi + actionsb.length;
      linki = `${reminderi * 2}`;
   for (let c = 0; c < 3; c++) {
       let bingq = 1.0;
       let bodanU = 2.0;
       let fastM = String.fromCharCode(101,108,105,115,105,111,110,95,116,95,55,57,0);
          let mathS = String.fromCharCode(104,95,55,95,100,111,110,101,0);
         bodanU *= mathS.length ^ 3;
         bodanU += 2;
         bodanU *= 1;
         bingq -= parseFloat(`${fastM.length}`);
          let handler5 = 4.0;
          let productu: Map<any, any> = new Map([[String.fromCharCode(100,109,105,120,95,48,95,52,54,0),596], [String.fromCharCode(115,95,50,52,95,98,111,108,100,0),546]]);
          let bodanG = String.fromCharCode(98,95,49,52,95,101,120,97,99,116,108,121,0);
         bodanU /= Math.max(4, parseInt(`${handler5}`));
         handler5 *= (bodanG == String.fromCharCode(105,0) ? productu.size : bodanG.length);
         productu.set(bodanG, (bodanG == String.fromCharCode(83,0) ? bodanG.length : productu.size));
      let emojid = String.fromCharCode(103,114,54,113,0) == fastM;
      do {
         fastM += `${fastM.length | 2}`;
         if (emojid) {
            break;
         }
      } while ((3 <= fastM.length) && emojid);
      if (5.16 <= (2.40 - bodanU) || (bodanU - 2.40) <= 2.93) {
          let streamingK: Array<any> = [679, 436, 121];
          let disconnectedO = 4;
         fastM += `${parseInt(`${bodanU}`) / (Math.max(5, parseInt(`${bingq}`)))}`;
         streamingK = [3];
         disconnectedO /= Math.max(disconnectedO, 1);
      }
         fastM += `${parseInt(`${bingq}`) << (Math.min(1, Math.abs(parseInt(`${bodanU}`))))}`;
         bingq += (parseFloat(`${String.fromCharCode(70,0) == fastM ? parseInt(`${bodanU}`) : fastM.length}`));
      linki = `${incidentd.length / (Math.max(5, fastM.length))}`;
   }
    return;
  };

  const handleRefresh = async () => {
       let brightnessc = 5.0;
    let str1: Map<any, any> = new Map([[String.fromCharCode(108,95,52,54,95,109,117,108,116,105,115,101,108,101,99,116,105,111,110,0),393], [String.fromCharCode(109,97,99,101,120,97,109,112,108,101,95,52,95,52,48,0),191]]);
    let long_0C = String.fromCharCode(100,101,116,97,99,104,95,103,95,56,53,0);
    let blackE = 4.0;
    let sansH = false;
    let updatesR: Array<any> = [912, 112];
    let suggestionU = 1;
    let inactive_ = 3.0;
    let default_e3w = 2.0;
    let overlays = String.fromCharCode(117,95,52,56,95,111,98,115,101,114,118,101,114,115,0);
    let blackS: Map<any, any> = new Map([[String.fromCharCode(97,95,53,95,105,112,102,115,0),903], [String.fromCharCode(105,110,116,101,114,114,117,112,116,95,112,95,49,53,0),527]]);
    let volumeN = String.fromCharCode(100,95,52,56,95,109,97,107,101,109,97,99,112,107,103,0);
       let taiwanY = 1.0;
      if ((taiwanY - taiwanY) < 5.21) {
          let selectionq: Map<any, any> = new Map([[String.fromCharCode(118,95,49,49,95,97,112,111,115,0),67], [String.fromCharCode(101,95,52,51,95,99,108,97,109,112,101,100,0),154], [String.fromCharCode(113,95,54,56,95,104,101,99,107,0),191]]);
          let texte: Map<any, any> = new Map([[String.fromCharCode(118,95,51,56,95,121,99,111,99,103,114,103,98,97,0),false ], [String.fromCharCode(111,98,115,101,114,118,105,110,103,95,102,95,50,53,0),true ]]);
          let completeX = String.fromCharCode(115,99,101,110,101,95,119,95,49,48,48,0);
          let viewerj = 3.0;
         taiwanY -= 1;
         selectionq.set(`${completeX}`, 1 ^ selectionq.size);
         texte.set(`${viewerj}`, selectionq.size << (Math.min(5, Math.abs(parseInt(`${viewerj}`)))));
         completeX = `${parseInt(`${viewerj}`)}`;
      }
       let descA = 4.0;
       let reducerN = 5.0;
      let bootsplashF = reducerN <= 6754038.0;
      do {
         reducerN /= Math.max(1, parseInt(`${taiwanY}`));
         if (bootsplashF) {
            break;
         }
      } while (((reducerN - descA) < 3.75 || 3.76 < (reducerN * 3.75)) && bootsplashF);
      default_e3w /= Math.max(parseFloat(`${suggestionU - parseInt(`${brightnessc}`)}`), 3);
   while ((long_0C.length ^ 1) == 3 && (updatesR.length ^ 1) == 1) {
       let const_eh = String.fromCharCode(102,105,108,101,112,97,116,104,95,119,95,50,51,0);
      if (const_eh.length > 3) {
          let trashs = String.fromCharCode(116,114,97,110,115,102,111,114,109,101,114,115,95,48,95,50,55,0);
          let loginC = false;
          let basketballz = false;
          let bingW = 3;
          let splashW = 2.0;
         const_eh += `${(trashs.length & (loginC ? 5 : 2))}`;
         trashs += `${parseInt(`${splashW}`)}`;
         loginC = 43.11 <= splashW;
         basketballz = !basketballz;
         bingW >>= Math.min(2, Math.abs(parseInt(`${splashW}`)));
      }
      let listR = const_eh == String.fromCharCode(54,55,52,108,51,118,103,122,51,51,0);
      do {
         const_eh += `${const_eh.length}`;
         if (listR) {
            break;
         }
      } while (listR && (const_eh == String.fromCharCode(70,0) || const_eh == String.fromCharCode(113,0)));
      while (1 < const_eh.length || const_eh != String.fromCharCode(102,0)) {
         const_eh += `${const_eh.length + const_eh.length}`;
         break;
      }
      long_0C += `${(overlays.length ^ (sansH ? 5 : 4))}`;
      break;
   }
      sansH = sansH && updatesR.length < 96;
      updatesR.push(3);
   for (let d = 0; d < 1; d++) {
       let foundc = String.fromCharCode(119,97,108,107,105,110,103,95,48,95,55,54,0);
          let collection_ = true;
         foundc = `${foundc.length}`;
         foundc = `${foundc.length}`;
          let profilel = String.fromCharCode(106,95,49,55,95,99,111,110,115,116,97,110,116,115,0);
          let floatingl = false;
         foundc += "3";
         profilel = `${((floatingl ? 1 : 2) / (Math.max(1, 4)))}`;
         floatingl = (((floatingl ? 8 : profilel.length) | profilel.length) >= 8);
      inactive_ *= parseInt(`${blackE}`);
   }
   while (1.67 <= (inactive_ + 1.4)) {
      inactive_ -= overlays.length * 1;
      break;
   }
       let downloaderp = 2.0;
       let r_locku = 2.0;
      while (3.63 < (1.37 * downloaderp)) {
          let moon3 = 2.0;
         downloaderp += parseFloat(`${parseInt(`${r_locku}`)}`);
         moon3 -= parseFloat(`${parseInt(`${moon3}`)}`);
         break;
      }
         r_locku += parseFloat(`${2}`);
          let fastforwardO = String.fromCharCode(115,116,97,110,100,97,114,100,95,112,95,48,0);
          let frame_tj: Map<any, any> = new Map([[String.fromCharCode(114,95,55,56,95,116,109,112,0),534], [String.fromCharCode(115,95,49,48,95,112,97,115,115,102,98,0),850], [String.fromCharCode(102,95,56,50,95,110,101,116,119,111,114,107,110,101,119,0),125]]);
         r_locku *= parseFloat(`${3}`);
         fastforwardO = `${fastforwardO.length}`;
         frame_tj.set(`${fastforwardO}`, frame_tj.size - 1);
      while (5.64 == (r_locku * 5.75) && 4.43 == (r_locku + 5.75)) {
         r_locku += parseFloat(`${parseInt(`${r_locku}`) | 3}`);
         break;
      }
          let helperH = false;
          let areak: Array<any> = [944, 537];
          let dialog9: Array<any> = [978, 243];
         downloaderp /= Math.max(parseFloat(`${dialog9.length}`), 3);
         helperH = !helperH;
         areak = [((helperH ? 5 : 1) & areak.length)];
         dialog9 = [3 << (Math.min(1, areak.length))];
      while (downloaderp <= r_locku) {
          let customP = String.fromCharCode(120,95,51,55,95,97,108,97,110,103,117,97,103,101,0);
          let desc8 = String.fromCharCode(103,95,56,57,95,106,97,99,111,115,117,98,0);
          let chart2 = 4;
         downloaderp += (parseFloat(`${customP == String.fromCharCode(86,0) ? customP.length : chart2}`));
         desc8 += `${3 + desc8.length}`;
         break;
      }
      suggestionU <<= Math.min(Math.abs(1), 3);
      long_0C += `${parseInt(`${inactive_}`)}`;
       let countrye = 5.0;
       let clearh = String.fromCharCode(97,112,112,101,110,100,101,100,95,57,95,50,52,0);
       let e_center0 = String.fromCharCode(107,101,121,98,117,102,95,121,95,54,50,0);
          let tooltipsd = 0;
          let fieldn = 3;
          let checkboxy = 1.0;
         clearh += `${parseInt(`${countrye}`)}`;
         tooltipsd >>= Math.min(3, Math.abs(tooltipsd ^ fieldn));
         fieldn &= fieldn / 1;
         checkboxy += 1 ^ fieldn;
      for (let w = 0; w < 3; w++) {
         clearh = `${e_center0.length}`;
      }
         countrye /= Math.max(5, e_center0.length << (Math.min(4, Math.abs(parseInt(`${countrye}`)))));
         clearh = `${parseInt(`${countrye}`) << (Math.min(e_center0.length, 3))}`;
         e_center0 = `${(String.fromCharCode(65,0) == clearh ? e_center0.length : clearh.length)}`;
       let circleC: Array<any> = [String.fromCharCode(108,95,49,48,95,112,105,120,109,102,116,115,0), String.fromCharCode(99,111,109,112,117,116,101,95,55,95,50,50,0)];
       let termsw: Array<any> = [306, 370];
      if (countrye == 5.58) {
          let progressI = String.fromCharCode(122,95,49,51,95,97,115,115,101,109,98,108,101,114,0);
          let modelsV = String.fromCharCode(109,95,55,54,95,115,116,114,0);
          let starG: Map<any, any> = new Map([[String.fromCharCode(104,95,51,57,95,115,118,101,99,116,111,114,0),537], [String.fromCharCode(109,101,116,97,100,97,116,97,115,95,48,95,49,56,0),357], [String.fromCharCode(114,101,109,97,105,110,100,101,114,95,108,95,57,55,0),505]]);
          let megaphone6 = 2;
         countrye -= 1;
         progressI += "2";
         modelsV += `${progressI.length / (Math.max(1, 2))}`;
         starG.set(progressI, modelsV.length);
         megaphone6 /= Math.max(4, megaphone6 & starG.size);
      }
         countrye /= Math.max(2 & termsw.length, 4);
          let bing4 = String.fromCharCode(100,95,49,49,95,109,98,118,115,0);
         e_center0 += `${parseInt(`${countrye}`)}`;
         bing4 = `${bing4.length ^ 3}`;
      updatesR.push(e_center0.length);
      updatesR = [long_0C.length];
   if (4 > updatesR.length) {
       let clubS = String.fromCharCode(98,95,54,57,95,115,117,98,118,105,101,119,101,114,0);
       let switch_orN = 0;
      for (let y = 0; y < 2; y++) {
          let lessw = 5.0;
          let incidente: Array<any> = [String.fromCharCode(99,95,52,55,95,99,111,110,110,105,110,112,117,116,0), String.fromCharCode(102,108,97,103,95,112,95,51,51,0)];
          let canvasV = 0.0;
         clubS = `${1 >> (Math.min(Math.abs(parseInt(`${canvasV}`)), 5))}`;
         lessw /= Math.max(3, parseFloat(`${incidente.length / (Math.max(6, parseInt(`${lessw}`)))}`));
         incidente.push(1);
         canvasV /= Math.max(incidente.length, 1);
      }
      while (2 >= (switch_orN - clubS.length) && 2 >= (clubS.length - 2)) {
         switch_orN %= Math.max(switch_orN, 5);
         break;
      }
      let spinnerB = 6890247 <= switch_orN;
      do {
          let albumx = String.fromCharCode(107,95,51,56,95,115,99,114,97,112,101,0);
          let zcopy_0lg = String.fromCharCode(100,105,115,115,111,108,118,101,95,50,95,50,56,0);
          let expand7 = 4.0;
          let lessY = 5.0;
          let configuref: Array<any> = [880, 442];
         switch_orN &= (clubS == String.fromCharCode(80,0) ? configuref.length : clubS.length);
         albumx += `${parseInt(`${lessY}`) - 2}`;
         zcopy_0lg = `${albumx.length}`;
         expand7 *= zcopy_0lg.length - 1;
         lessY -= 3 << (Math.min(Math.abs(parseInt(`${lessY}`)), 5));
         configuref = [parseInt(`${lessY}`)];
         if (spinnerB) {
            break;
         }
      } while (spinnerB && ((1 << (Math.min(1, Math.abs(switch_orN)))) >= 2));
          let hover2 = 1.0;
         switch_orN -= 3;
         hover2 -= parseInt(`${hover2}`);
      for (let x = 0; x < 3; x++) {
         clubS += `${switch_orN << (Math.min(Math.abs(3), 3))}`;
      }
          let zhubob = 3.0;
          let sport3: Array<any> = [261, 216, 14];
          let bello: Map<any, any> = new Map([[String.fromCharCode(98,95,49,56,95,97,108,115,97,115,121,109,98,111,108,116,97,98,108,101,0),47], [String.fromCharCode(99,97,110,99,101,108,108,95,109,95,50,50,0),879]]);
         clubS = "1";
         zhubob -= sport3.length;
         sport3 = [parseInt(`${zhubob}`)];
         bello = new Map([[`${bello.size}`, bello.size % (Math.max(sport3.length, 2))]]);
      updatesR.push(updatesR.length);
   }
   if (1.61 < blackE && 4.94 < (blackE / 1.61)) {
      blackE += parseFloat(`${parseInt(`${default_e3w}`) ^ overlays.length}`);
   }

    setRefreshing(true);

      default_e3w -= parseFloat(`${parseInt(`${blackE}`)}`);
   while ((default_e3w + 1.72) <= 1.93 && sansH) {
      sansH = blackE == 65.85;
      break;
   }
      inactive_ += 1;
   while (!sansH) {
       let bing8 = String.fromCharCode(101,120,99,101,101,100,101,100,95,101,95,54,50,0);
      if (bing8 != String.fromCharCode(106,0)) {
         bing8 = `${bing8.length}`;
      }
      for (let z = 0; z < 1; z++) {
          let descx = String.fromCharCode(105,109,112,114,101,115,115,105,111,110,115,95,119,95,53,55,0);
         bing8 += `${descx.length ^ bing8.length}`;
      }
         bing8 += `${bing8.length}`;
      default_e3w -= parseFloat(`${str1.size * 2}`);
      break;
   }
   while (5 > overlays.length) {
      overlays += `${suggestionU}`;
      break;
   }
      inactive_ *= parseInt(`${default_e3w}`);
      str1 = new Map([[`${updatesR.length}`, updatesR.length]]);
       let loadingT = String.fromCharCode(112,114,111,109,111,95,105,95,56,52,0);
       let fastforward6 = 3.0;
       let progressp = String.fromCharCode(99,111,109,98,105,110,97,116,111,114,95,112,95,50,54,0);
      let langx = loadingT == String.fromCharCode(51,105,112,114,116,0);
      do {
          let infos: Array<any> = [374, 221];
          let currentk = String.fromCharCode(117,110,98,97,110,95,53,95,55,52,0);
          let selecta = 4.0;
          let update_v7 = String.fromCharCode(119,95,51,95,100,105,103,101,115,116,0);
          let hookW = String.fromCharCode(102,105,110,100,101,114,95,105,95,50,48,0);
         loadingT += `${progressp.length}`;
         infos = [hookW.length * 1];
         currentk += `${1 - currentk.length}`;
         selecta /= Math.max(2 * parseInt(`${selecta}`), 3);
         update_v7 += `${parseInt(`${selecta}`)}`;
         hookW += `${hookW.length}`;
         if (langx) {
            break;
         }
      } while (langx && (!loadingT.includes(`${fastforward6}`)));
         fastforward6 -= progressp.length % (Math.max(4, parseInt(`${fastforward6}`)));
         fastforward6 *= parseInt(`${fastforward6}`) % 1;
         fastforward6 *= (String.fromCharCode(110,0) == loadingT ? parseInt(`${fastforward6}`) : loadingT.length);
      let flyer4 = 8646646 <= loadingT.length;
      do {
         loadingT = `${parseInt(`${fastforward6}`) | progressp.length}`;
         if (flyer4) {
            break;
         }
      } while (flyer4 && (fastforward6 < loadingT.length));
         loadingT = `${parseInt(`${fastforward6}`) - loadingT.length}`;
      while (1 >= (loadingT.length * parseInt(`${fastforward6}`)) && 4 >= (1 - loadingT.length)) {
         loadingT += `${(String.fromCharCode(114,0) == loadingT ? loadingT.length : parseInt(`${fastforward6}`))}`;
         break;
      }
       let modelsc: Array<any> = [66, 166];
          let customo = 2.0;
          let crosst = 3.0;
          let layoutA = true;
         loadingT = `${parseInt(`${fastforward6}`)}`;
         customo /= Math.max(parseFloat(`${1}`), 2);
         crosst += parseFloat(`${1 << (Math.min(Math.abs(parseInt(`${crosst}`)), 2))}`);
         layoutA = crosst <= 29.41;
      str1.set(`${sansH}`, suggestionU);
      suggestionU *= parseInt(`${blackE}`) ^ str1.size;
   while (!overlays.endsWith(`${str1.size}`)) {
       let resultr: Array<any> = [468, 231, 388];
       let gesturep = String.fromCharCode(108,95,56,53,95,99,111,117,110,116,101,100,0);
      while (!gesturep.endsWith(`${resultr.length}`)) {
         gesturep += `${2 + gesturep.length}`;
         break;
      }
         gesturep = `${resultr.length}`;
       let greenu = String.fromCharCode(121,95,55,53,95,99,104,97,114,108,101,110,0);
       let whatsappZ = String.fromCharCode(103,97,116,105,110,103,95,118,95,52,55,0);
       let nextW: Map<any, any> = new Map([[String.fromCharCode(101,120,101,99,117,116,101,95,111,95,52,0),false ], [String.fromCharCode(112,117,98,105,99,95,52,95,53,55,0),false ]]);
         gesturep += `${nextW.size % (Math.max(whatsappZ.length, 1))}`;
      if (gesturep.endsWith(greenu)) {
          let tumbnailE: Array<any> = [286, 64];
          let yellowe = String.fromCharCode(108,95,53,48,95,105,110,116,101,114,114,117,112,116,101,100,0);
          let combineN = 1.0;
         greenu = `${parseInt(`${combineN}`) & tumbnailE.length}`;
         tumbnailE = [yellowe.length % 3];
         yellowe = `${yellowe.length}`;
      }
      str1.set(`${blackE}`, parseInt(`${blackE}`) * 2);
      break;
   }
       let contextA = String.fromCharCode(100,119,97,114,102,95,101,95,57,52,0);
       let subsj: Map<any, any> = new Map([[String.fromCharCode(113,112,98,105,116,115,95,112,95,50,48,0),381], [String.fromCharCode(109,111,110,116,95,99,95,52,50,0),325], [String.fromCharCode(99,95,49,48,95,114,101,111,114,100,101,114,101,100,0),945]]);
      if (1 >= (contextA.length & subsj.size)) {
          let halfX: Map<any, any> = new Map([[String.fromCharCode(99,108,111,115,117,114,101,95,116,95,49,51,0),String.fromCharCode(107,95,51,49,95,114,101,102,108,101,99,116,105,111,110,0)], [String.fromCharCode(101,110,100,95,118,95,57,57,0),String.fromCharCode(101,110,99,114,121,112,116,95,50,95,52,56,0)]]);
          let streamingi = String.fromCharCode(108,95,53,48,95,100,111,99,0);
          let logo6 = String.fromCharCode(113,95,55,55,95,105,109,112,111,114,116,0);
          let modelsY: Array<any> = [23, 711];
          let modalR: Map<any, any> = new Map([[String.fromCharCode(114,101,103,100,101,102,95,111,95,56,51,0),271], [String.fromCharCode(106,95,52,52,0),186], [String.fromCharCode(112,101,97,99,104,95,104,95,54,55,0),668]]);
         subsj.set(logo6, (logo6 == String.fromCharCode(86,0) ? modelsY.length : logo6.length));
         halfX = new Map([[`${halfX.size}`, 2 * halfX.size]]);
         streamingi += `${halfX.size % (Math.max(1, 2))}`;
         modelsY = [1 / (Math.max(7, modalR.size))];
         modalR.set(`${halfX.size}`, modalR.size << (Math.min(Math.abs(2), 1)));
      }
      let tumbnaily = 8149889 >= subsj.size;
      do {
         subsj = new Map([[`${subsj.size}`, subsj.size]]);
         if (tumbnaily) {
            break;
         }
      } while ((!contextA.endsWith(`${subsj.size}`)) && tumbnaily);
          let shrinkN = String.fromCharCode(108,95,50,49,95,108,111,97,100,0);
          let i_unlockU = String.fromCharCode(109,117,116,97,116,105,111,110,95,55,95,49,55,0);
         subsj = new Map([[shrinkN, shrinkN.length & 1]]);
         i_unlockU = "3";
      while (2 > contextA.length) {
         subsj = new Map([[`${subsj.size}`, (String.fromCharCode(109,0) == contextA ? contextA.length : subsj.size)]]);
         break;
      }
         contextA += `${contextA.length}`;
         contextA += `${(String.fromCharCode(104,0) == contextA ? subsj.size : contextA.length)}`;
      blackS.set(`${sansH}`, (contextA == String.fromCharCode(117,0) ? contextA.length : (sansH ? 2 : 3)));
   let gesturesn = overlays == String.fromCharCode(106,51,57,112,109,108,48,0);
   do {
      overlays += "1";
      if (gesturesn) {
         break;
      }
   } while ((overlays.length <= updatesR.length) && gesturesn);
    await refreshUserState();

   while (brightnessc <= 5.93) {
      brightnessc *= long_0C.length >> (Math.min(Math.abs(2), 4));
      break;
   }
       let listP = String.fromCharCode(109,111,100,101,109,118,99,111,115,116,95,117,95,54,51,0);
       let logout_ = String.fromCharCode(97,95,49,54,95,115,104,105,109,115,0);
       let o_unlock3 = false;
         logout_ += `${((o_unlock3 ? 4 : 1) ^ listP.length)}`;
      for (let n = 0; n < 2; n++) {
          let usernameh = 1;
          let register_6I = String.fromCharCode(114,101,102,112,116,114,95,109,95,53,0);
          let greenm = String.fromCharCode(103,95,49,48,48,0);
          let prediction3 = 1.0;
         o_unlock3 = logout_ == String.fromCharCode(51,0);
         usernameh &= parseInt(`${prediction3}`);
         register_6I += `${greenm.length % 3}`;
         greenm = `${usernameh}`;
         prediction3 += (parseFloat(`${String.fromCharCode(79,0) == register_6I ? parseInt(`${prediction3}`) : register_6I.length}`));
      }
         logout_ = "2";
         logout_ = `${3 - listP.length}`;
      while (listP.startsWith(`${o_unlock3}`)) {
         listP = `${logout_.length}`;
         break;
      }
         listP = `${(listP == String.fromCharCode(115,0) ? logout_.length : listP.length)}`;
      let schedule6 = listP.length <= 8608670;
      do {
         listP = `${(String.fromCharCode(71,0) == logout_ ? logout_.length : (o_unlock3 ? 3 : 3))}`;
         if (schedule6) {
            break;
         }
      } while (schedule6 && (!o_unlock3));
          let footballH: Map<any, any> = new Map([[String.fromCharCode(105,95,57,49,95,102,114,97,109,101,100,0),857], [String.fromCharCode(104,95,55,52,95,108,105,110,103,101,114,0),312], [String.fromCharCode(105,95,52,52,95,98,108,117,101,0),743]]);
         o_unlock3 = !logout_.startsWith(`${o_unlock3}`);
         footballH.set(`${footballH.size}`, footballH.size ^ footballH.size);
          let indicatorK = 2;
          let forwardX = String.fromCharCode(113,95,50,52,95,100,101,105,110,116,101,114,108,97,99,101,0);
          let chartE = false;
         logout_ += `${((chartE ? 4 : 2) + 3)}`;
         indicatorK += (String.fromCharCode(103,0) == forwardX ? indicatorK : forwardX.length);
         chartE = forwardX.length == 4;
      inactive_ += 3 + parseInt(`${blackE}`);
       let lives = 2.0;
      for (let u = 0; u < 2; u++) {
         lives -= parseFloat(`${3 - parseInt(`${lives}`)}`);
      }
         lives += parseFloat(`${3 - parseInt(`${lives}`)}`);
      while (1.49 <= (lives - 5)) {
          let episodesA = false;
          let othero = String.fromCharCode(102,116,118,110,115,95,55,95,50,50,0);
          let anythinkm = 1;
          let firebaseR: Map<any, any> = new Map([[String.fromCharCode(99,111,117,110,116,114,121,95,103,95,54,48,0),396], [String.fromCharCode(97,95,54,48,95,104,105,116,0),758], [String.fromCharCode(108,95,54,95,104,111,111,107,115,0),566]]);
         lives *= parseFloat(`${parseInt(`${lives}`) + 1}`);
         episodesA = String.fromCharCode(112,0) == othero || 5 >= anythinkm;
         othero += `${((episodesA ? 5 : 2) % 3)}`;
         anythinkm >>= Math.min(5, Math.abs(firebaseR.size));
         firebaseR = new Map([[othero, anythinkm]]);
         break;
      }
      blackS = new Map([[`${updatesR.length}`, 2]]);
      suggestionU -= (parseInt(`${inactive_}`) & (sansH ? 4 : 3));
   let shirtS = brightnessc <= 9545795.0;
   do {
      brightnessc *= 3;
      if (shirtS) {
         break;
      }
   } while (shirtS && ((2.74 * brightnessc) > 3.0 && (2.74 * brightnessc) > 5.46));
   let stations5 = blackS.size <= 7258489;
   do {
      blackS = new Map([[`${str1.size}`, blackS.size]]);
      if (stations5) {
         break;
      }
   } while ((1.16 <= (brightnessc / 1.100) && (blackS.size % (Math.max(3, 4))) <= 1) && stations5);
   while (inactive_ < 5.47) {
       let agreement0 = 3.0;
          let stationP = String.fromCharCode(103,95,48,95,105,109,109,117,116,97,98,108,101,0);
          let gestureW = String.fromCharCode(109,112,101,103,95,48,95,57,48,0);
         agreement0 += parseInt(`${agreement0}`);
         stationP = `${gestureW.length << (Math.min(Math.abs(1), 1))}`;
         gestureW = `${(gestureW == String.fromCharCode(112,0) ? stationP.length : gestureW.length)}`;
         agreement0 *= parseInt(`${agreement0}`) << (Math.min(5, Math.abs(3)));
      let storeX = agreement0 <= 6070794.0;
      do {
         agreement0 -= parseInt(`${agreement0}`) * 1;
         if (storeX) {
            break;
         }
      } while ((2.21 >= agreement0) && storeX);
      inactive_ *= overlays.length;
      break;
   }
      str1 = new Map([[`${str1.size}`, str1.size]]);
   let hongkongB = default_e3w >= 7969057.0;
   do {
       let turn6 = 5.0;
       let commentb = String.fromCharCode(116,101,115,116,99,111,110,102,105,103,95,99,95,52,52,0);
       let tempB = 5;
       let ying7: Map<any, any> = new Map([[String.fromCharCode(99,111,108,115,101,116,95,103,95,49,53,0),String.fromCharCode(105,95,51,54,95,112,114,111,109,112,116,0)], [String.fromCharCode(106,95,55,57,95,117,110,112,97,100,100,101,100,0),String.fromCharCode(99,111,108,108,101,99,116,101,100,95,105,95,53,51,0)]]);
         turn6 /= Math.max(4, parseFloat(`${1}`));
          let recommendation6 = 0;
          let combineQ = String.fromCharCode(120,111,114,101,100,95,122,95,53,54,0);
         tempB *= parseInt(`${turn6}`) / 1;
         recommendation6 %= Math.max((String.fromCharCode(103,0) == combineQ ? combineQ.length : recommendation6), 1);
         ying7.set(`${turn6}`, commentb.length << (Math.min(Math.abs(1), 3)));
      while (ying7.size <= 5) {
         ying7.set(`${tempB}`, tempB % (Math.max(3, 2)));
         break;
      }
         commentb += `${tempB}`;
      if ((parseInt(`${turn6}`) * commentb.length) == 1 && (parseInt(`${turn6}`) * commentb.length) == 1) {
         commentb += `${commentb.length >> (Math.min(1, Math.abs(tempB)))}`;
      }
       let frame_gsE = String.fromCharCode(99,111,111,107,100,97,116,97,95,57,95,55,56,0);
       let listW = String.fromCharCode(100,95,52,57,95,100,101,113,117,97,110,116,0);
      while (3.8 < (2.54 - turn6) && 2 < (2 - parseInt(`${turn6}`))) {
          let langkeyQ = String.fromCharCode(109,95,53,55,95,105,110,99,108,117,100,101,115,0);
          let z_countU = 3.0;
          let report1 = 5.0;
         listW = `${parseInt(`${report1}`) % 1}`;
         langkeyQ = `${2 % (Math.max(3, langkeyQ.length))}`;
         z_countU += parseInt(`${z_countU}`);
         report1 += parseFloat(`${3}`);
         break;
      }
      let containerW = String.fromCharCode(118,108,113,109,95,95,120,48,0) == commentb;
      do {
          let controlm: Array<any> = [495, 711];
          let nterstitialz: Map<any, any> = new Map([[String.fromCharCode(115,101,99,115,95,98,95,55,0),373], [String.fromCharCode(104,95,56,55,95,120,97,109,112,108,101,0),335]]);
          let championy = 2.0;
          let ticky = String.fromCharCode(101,95,54,50,95,115,112,97,109,0);
         commentb = `${(frame_gsE == String.fromCharCode(53,0) ? nterstitialz.size : frame_gsE.length)}`;
         controlm.push(controlm.length + 1);
         nterstitialz.set(`${championy}`, parseInt(`${championy}`));
         ticky += `${parseInt(`${championy}`)}`;
         if (containerW) {
            break;
         }
      } while ((!commentb.endsWith(`${listW.length}`)) && containerW);
          let shirt7 = false;
          let singaporeB = 1;
         tempB -= frame_gsE.length;
         shirt7 = singaporeB >= 76;
         singaporeB -= singaporeB & 1;
      while ((tempB & listW.length) == 5 && (listW.length & 5) == 2) {
         listW = `${frame_gsE.length}`;
         break;
      }
         turn6 *= parseFloat(`${listW.length & frame_gsE.length}`);
      default_e3w += parseFloat(`${str1.size + 2}`);
      if (hongkongB) {
         break;
      }
   } while ((3 <= (updatesR.length % (Math.max(1, 10))) || 1.61 <= (default_e3w - 3.76)) && hongkongB);
       let suggestiong: Map<any, any> = new Map([[String.fromCharCode(113,95,51,56,95,103,111,108,100,101,110,0),743], [String.fromCharCode(97,95,57,48,95,115,117,112,101,114,110,111,100,101,115,0),10]]);
       let sans5: Array<any> = [114, 374];
         suggestiong.set(`${sans5.length}`, 1);
         sans5 = [sans5.length * suggestiong.size];
          let renewm = 4.0;
         suggestiong = new Map([[`${sans5.length}`, parseInt(`${renewm}`) >> (Math.min(sans5.length, 3))]]);
       let termsa = 0.0;
         sans5.push(suggestiong.size);
          let otherG = 4;
         sans5 = [sans5.length | suggestiong.size];
         otherG *= otherG;
      suggestionU >>= Math.min(Math.abs(parseInt(`${brightnessc}`) / (Math.max(5, sans5.length))), 4);
   while (!long_0C.endsWith(`${default_e3w}`)) {
       let telegramC = 2.0;
       let connectionA: Array<any> = [String.fromCharCode(114,101,97,100,108,110,95,116,95,55,0), String.fromCharCode(116,114,97,110,115,112,95,51,95,56,51,0)];
       let filled0 = 3;
         connectionA = [3 | parseInt(`${telegramC}`)];
      while (5 > connectionA.length) {
          let leaguee = 2;
          let editn = 0;
          let fullX = String.fromCharCode(112,108,117,115,95,102,95,51,0);
          let untickR = String.fromCharCode(109,117,109,98,97,105,95,102,95,52,48,0);
         connectionA = [leaguee % 2];
         leaguee %= Math.max(2, 2);
         editn &= editn << (Math.min(Math.abs(3), 2));
         fullX = `${editn}`;
         untickR = "3";
         break;
      }
      if (!connectionA.includes(telegramC)) {
         telegramC += parseFloat(`${connectionA.length}`);
      }
      while ((filled0 | connectionA.length) >= 4) {
          let downloaderF = 5.0;
          let configurec = String.fromCharCode(112,95,53,52,95,109,110,99,0);
          let whatsappg: Array<any> = [String.fromCharCode(100,95,51,51,95,111,110,101,119,97,121,0), String.fromCharCode(120,95,53,50,95,111,115,116,114,101,97,109,0)];
          let actionsK = false;
         connectionA = [((actionsK ? 5 : 1) & filled0)];
         downloaderF *= parseInt(`${downloaderF}`);
         configurec += `${parseInt(`${downloaderF}`)}`;
         whatsappg = [parseInt(`${downloaderF}`)];
         actionsK = (configurec.length + downloaderF) <= 10.67;
         break;
      }
         filled0 *= filled0 / 2;
      let sortq = 6371907 >= connectionA.length;
      do {
          let infoX = 4.0;
          let untickD = 3;
          let long_i31 = 1;
          let stationsl = 3.0;
         connectionA.push(filled0);
         infoX += parseFloat(`${parseInt(`${stationsl}`)}`);
         untickD %= Math.max(4, parseInt(`${stationsl}`));
         long_i31 &= long_i31;
         if (sortq) {
            break;
         }
      } while ((!connectionA.includes(filled0)) && sortq);
          let bannerP = String.fromCharCode(115,95,56,53,95,102,114,97,109,101,112,111,111,108,0);
          let footballZ = String.fromCharCode(122,95,55,51,95,111,119,110,101,114,115,0);
          let dataj = 3.0;
         telegramC /= Math.max(parseFloat(`${footballZ.length & 3}`), 1);
         bannerP += `${parseInt(`${dataj}`)}`;
         footballZ += `${parseInt(`${dataj}`) * bannerP.length}`;
         filled0 -= connectionA.length / (Math.max(5, parseInt(`${telegramC}`)));
      let vignette2 = 6199257 >= connectionA.length;
      do {
          let stationso: Array<any> = [656, 820];
          let selectP = String.fromCharCode(98,95,50,52,0);
          let hooki = String.fromCharCode(98,95,50,56,95,105,115,105,0);
          let previewn = 0.0;
         connectionA = [stationso.length ^ filled0];
         stationso = [3 >> (Math.min(5, hooki.length))];
         selectP += `${hooki.length}`;
         previewn += parseFloat(`${1}`);
         if (vignette2) {
            break;
         }
      } while ((2 <= (filled0 / 2)) && vignette2);
      long_0C = "2";
      break;
   }
   while ((blackE / 4) > 5.58) {
      inactive_ *= str1.size & 2;
      break;
   }
    setRefreshing(false);
  };

  const insets = useSafeAreaInsets();

  useEffect(() => {
    const unsubscribe = navigation.addListener("blur", () => {
      
      dispatch(hideBottomSheetAction());
    });
    return unsubscribe;
  }, [navigator]);

  useFocusEffect(
    useCallback(() => {
      Orientation.lockToPortrait();
      return () => {
        
      };
    }, [])
  );

  
  
  
  
  const escapeRegExp = (string: string) => {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  };
  const highlightText = (text: string, keyword: string) => {
    
    const escapedKeyword = escapeRegExp(keyword);
    const parts = text.split(new RegExp(`(${escapedKeyword})`, "gi"));
    return parts.map((part, index) =>
      part.toLowerCase() === keyword.toLowerCase() ? (
        <Text
          key={index}
          style={{ ...textVariants.body, color: colors.yellow, fontSize: 15 }}
        >
          {part}
        </Text>
      ) : (
        <Text
          key={index}
          style={{ ...textVariants.body, color: "#FFF0CA", fontSize: 15 }}
        >
          {part}
        </Text>
      )
    );
  };

  const fetchBannerAd = async () => {
       let calendarH = String.fromCharCode(110,97,110,111,115,101,99,111,110,100,115,95,52,95,56,50,0);
    let overd = 2;
    let sinaZ: Array<any> = [205, 467];
    let teamR = false;
    let borderlessJ = false;
    let skipy: Map<any, any> = new Map([[String.fromCharCode(117,95,52,53,95,99,111,99,103,0),219], [String.fromCharCode(113,95,55,53,95,99,108,101,97,114,97,108,108,0),688]]);
    let settingsi = 5.0;
    let anythinkZ = 5;
    let dialogY = 5.0;
    let watchF: Array<any> = [String.fromCharCode(102,95,55,95,114,101,117,115,97,98,108,101,0), String.fromCharCode(102,109,97,100,100,95,116,95,52,48,0), String.fromCharCode(97,117,116,111,99,104,101,99,107,112,111,105,110,116,95,120,95,54,0)];
    let internetT = String.fromCharCode(121,95,49,55,95,104,101,108,112,101,114,115,0);
    let whitep = true;
    let guidey = 4.0;
    let dark7 = 2;
    let home9 = String.fromCharCode(117,110,105,116,121,95,118,95,55,52,0);
   while (5 > (skipy.size / 3)) {
      sinaZ = [3 ^ internetT.length];
      break;
   }
   while (3 < (sinaZ.length % 1)) {
       let championm = String.fromCharCode(98,95,51,53,95,105,110,116,108,101,0);
       let dropdownk: Array<any> = [String.fromCharCode(108,95,56,50,95,110,101,119,115,0), String.fromCharCode(99,114,111,115,115,102,97,100,101,95,102,95,54,0)];
       let expandk: Array<any> = [714, 436, 319];
       let closeS = 1.0;
      let orientationc = expandk.length <= 5884589;
      do {
         expandk.push(championm.length);
         if (orientationc) {
            break;
         }
      } while (orientationc && (!expandk.includes(closeS)));
      while (4 > expandk.length) {
         closeS *= parseFloat(`${3 >> (Math.min(5, expandk.length))}`);
         break;
      }
          let fastforwardp = false;
         closeS /= Math.max((parseFloat(`${String.fromCharCode(89,0) == championm ? dropdownk.length : championm.length}`)), 4);
         fastforwardp = fastforwardp && !fastforwardp;
         expandk = [2];
          let groupi = 4;
          let source1 = 2;
         expandk.push(dropdownk.length);
         groupi |= source1 % (Math.max(3, 8));
         source1 /= Math.max(5, 1 + source1);
         closeS /= Math.max(4, parseFloat(`${expandk.length - 2}`));
      let nexta = championm.length >= 5391066;
      do {
         championm += "3";
         if (nexta) {
            break;
         }
      } while (nexta && ((championm.length - dropdownk.length) >= 2 || (dropdownk.length - championm.length) >= 2));
          let splash7: Array<any> = [903, 96, 938];
          let dialoge = String.fromCharCode(104,97,100,97,109,97,114,100,120,95,56,95,49,0);
         expandk = [(dialoge == String.fromCharCode(108,0) ? championm.length : dialoge.length)];
         splash7.push(1);
       let middleK = 3.0;
       let configurel = 0.0;
         middleK /= Math.max(parseFloat(`${championm.length * dropdownk.length}`), 4);
          let gnews1 = 4;
          let thailand9 = String.fromCharCode(105,95,52,95,105,110,115,116,97,108,108,105,110,103,0);
         middleK += parseFloat(`${gnews1 * parseInt(`${middleK}`)}`);
         gnews1 %= Math.max(thailand9.length / (Math.max(3, 1)), 3);
         thailand9 += `${thailand9.length & thailand9.length}`;
       let sinab = String.fromCharCode(109,100,104,100,95,119,95,57,48,0);
      sinaZ.push(championm.length % 1);
      break;
   }
       let progressJ = String.fromCharCode(118,97,114,119,105,100,116,104,95,109,95,52,51,0);
       let auto_jkg = 5.0;
      while ((2.71 / (Math.max(7, auto_jkg))) >= 3.47 && 2.71 >= (auto_jkg / (Math.max(parseFloat(`${progressJ.length}`), 4)))) {
         progressJ = `${progressJ.length * parseInt(`${auto_jkg}`)}`;
         break;
      }
         auto_jkg += parseFloat(`${progressJ.length + parseInt(`${auto_jkg}`)}`);
         auto_jkg *= parseFloat(`${parseInt(`${auto_jkg}`)}`);
         progressJ = `${progressJ.length >> (Math.min(Math.abs(1), 3))}`;
          let activen = 2.0;
         auto_jkg /= Math.max(3, parseFloat(`${progressJ.length}`));
         activen -= parseFloat(`${parseInt(`${activen}`) ^ parseInt(`${activen}`)}`);
      if (progressJ.length >= 4) {
         progressJ = `${(String.fromCharCode(51,0) == progressJ ? parseInt(`${auto_jkg}`) : progressJ.length)}`;
      }
      borderlessJ = 52 >= calendarH.length;
   if (1 > internetT.length) {
       let usernameN: Array<any> = [344, 451, 778];
         usernameN.push(usernameN.length >> (Math.min(Math.abs(2), 3)));
          let yellowt = String.fromCharCode(113,117,97,110,116,105,122,101,114,115,95,111,95,55,56,0);
         usernameN = [yellowt.length - usernameN.length];
         usernameN = [usernameN.length];
      internetT = `${calendarH.length}`;
   }
       let options_ = 0;
       let dialog5: Map<any, any> = new Map([[String.fromCharCode(108,95,57,53,95,112,97,115,115,101,115,0),347], [String.fromCharCode(102,95,53,51,95,115,117,98,112,105,120,101,108,0),744]]);
      for (let y = 0; y < 2; y++) {
         dialog5.set(`${options_}`, 2 & dialog5.size);
      }
         options_ *= 3;
      let downloady = 7503620 >= dialog5.size;
      do {
          let icone = String.fromCharCode(119,95,54,49,95,115,105,122,105,110,103,0);
          let playlistr = 0;
          let sentry_: Map<any, any> = new Map([[String.fromCharCode(118,95,52,55,95,112,105,112,101,108,111,115,115,0),String.fromCharCode(108,101,114,112,95,54,95,49,50,0)], [String.fromCharCode(116,95,55,55,95,100,105,118,105,100,111,114,0),String.fromCharCode(106,95,56,56,95,114,101,99,111,110,102,105,103,117,114,97,98,108,101,0)]]);
         dialog5.set(icone, dialog5.size | 2);
         icone = "3";
         playlistr *= playlistr;
         sentry_ = new Map([[`${sentry_.size}`, playlistr ^ 1]]);
         if (downloady) {
            break;
         }
      } while (downloady && (5 < (options_ ^ dialog5.size)));
       let carouselQ = String.fromCharCode(108,97,122,121,95,115,95,52,53,0);
      while (3 >= (carouselQ.length % 5)) {
         carouselQ = "3";
         break;
      }
          let blacklistT = 4;
          let contextQ = 2.0;
         carouselQ += `${carouselQ.length | 3}`;
         blacklistT <<= Math.min(4, Math.abs(parseInt(`${contextQ}`)));
         contextQ *= blacklistT;
      borderlessJ = sinaZ.length > 38 || anythinkZ > 38;
   for (let j = 0; j < 3; j++) {
       let subss: Map<any, any> = new Map([[String.fromCharCode(121,95,52,57,95,103,97,116,105,110,103,0),false ], [String.fromCharCode(99,111,110,116,105,103,117,111,117,115,95,121,95,54,48,0),true ], [String.fromCharCode(114,95,55,50,95,108,108,118,105,100,101,110,99,100,115,112,0),false ]]);
       let settingV = 4;
          let backwardr = 2;
          let targete: Map<any, any> = new Map([[String.fromCharCode(115,97,118,101,114,95,51,95,55,50,0),String.fromCharCode(99,111,102,102,105,110,95,119,95,56,54,0)], [String.fromCharCode(119,95,57,56,95,100,105,115,101,109,118,111,119,101,108,101,100,0),String.fromCharCode(109,98,108,111,111,112,95,120,95,57,53,0)], [String.fromCharCode(108,105,98,97,118,117,116,105,108,95,104,95,50,57,0),String.fromCharCode(108,95,56,56,95,118,112,100,101,99,0)]]);
         subss.set(`${settingV}`, targete.size * settingV);
         backwardr |= 3;
         targete = new Map([[`${backwardr}`, backwardr ^ 3]]);
      let const_iu = 4986205 >= settingV;
      do {
         settingV <<= Math.min(4, Math.abs(subss.size));
         if (const_iu) {
            break;
         }
      } while ((subss.get(`${settingV}`) != null) && const_iu);
      for (let v = 0; v < 2; v++) {
         subss = new Map([[`${subss.size}`, settingV]]);
      }
         subss.set(`${settingV}`, subss.size * 2);
      if ((settingV % 4) == 2) {
          let corner8 = String.fromCharCode(118,95,53,50,95,115,95,56,53,0);
          let settingsy = String.fromCharCode(114,95,55,48,95,112,117,98,108,105,99,105,116,121,0);
          let calendarp = 3;
          let default_pn = 5.0;
         subss.set(`${default_pn}`, corner8.length | 2);
         corner8 = `${calendarp}`;
         settingsy += `${settingsy.length & 1}`;
         calendarp %= Math.max(5, 2);
         default_pn /= Math.max(3, parseFloat(`${calendarp << (Math.min(settingsy.length, 1))}`));
      }
         subss.set(`${settingV}`, subss.size);
      anythinkZ >>= Math.min(5, Math.abs((2 + (borderlessJ ? 4 : 4))));
   }
   for (let g = 0; g < 3; g++) {
       let policyn = String.fromCharCode(97,95,51,57,95,122,101,114,111,122,101,114,111,0);
       let viewsb = 1.0;
      if (policyn.length == 1) {
         policyn = `${policyn.length & 2}`;
      }
       let controlst = String.fromCharCode(116,114,97,106,101,99,116,111,114,121,95,122,95,50,53,0);
       let hookX = String.fromCharCode(114,95,52,50,95,110,101,111,110,116,101,115,116,0);
      let container3 = 5776358.0 <= viewsb;
      do {
         viewsb *= hookX.length | controlst.length;
         if (container3) {
            break;
         }
      } while (container3 && (hookX.length == viewsb));
       let weiboD: Map<any, any> = new Map([[String.fromCharCode(114,95,56,53,95,101,110,100,112,111,105,110,116,0),367], [String.fromCharCode(118,105,100,101,111,114,101,110,100,101,114,101,114,95,51,95,50,57,0),18]]);
      if (controlst.endsWith(`${viewsb}`)) {
          let helpert = String.fromCharCode(110,112,112,116,114,97,110,115,112,111,115,101,95,109,95,48,0);
          let successh = 4;
         viewsb += 1;
         helpert = `${successh & helpert.length}`;
         successh += (helpert == String.fromCharCode(54,0) ? helpert.length : successh);
      }
         viewsb -= weiboD.size - hookX.length;
      skipy.set(`${anythinkZ}`, 3 * anythinkZ);
   }

    const banner = await UQQuest.getEventBanner();

   for (let r = 0; r < 1; r++) {
      internetT = `${skipy.size}`;
   }
   while (!borderlessJ || 3 >= internetT.length) {
       let backwardX = 3.0;
       let transferE = String.fromCharCode(113,116,97,98,108,101,115,95,108,95,48,0);
      for (let e = 0; e < 1; e++) {
          let calendarx: Map<any, any> = new Map([[String.fromCharCode(107,110,111,119,110,95,102,95,53,50,0),198], [String.fromCharCode(100,114,111,112,111,102,102,95,53,95,49,48,48,0),970]]);
          let langkeyj = false;
          let indicators = String.fromCharCode(98,95,51,56,95,118,101,110,100,111,114,0);
         transferE += `${((langkeyj ? 2 : 4) >> (Math.min(Math.abs(calendarx.size), 2)))}`;
         calendarx = new Map([[indicators, indicators.length]]);
         langkeyj = indicators == String.fromCharCode(50,0);
      }
         backwardX -= transferE.length;
         backwardX += parseInt(`${backwardX}`);
       let updatesh: Map<any, any> = new Map([[String.fromCharCode(105,110,99,108,117,100,101,95,105,95,57,54,0),390], [String.fromCharCode(104,95,57,50,95,112,105,120,109,102,116,115,0),734], [String.fromCharCode(116,95,57,52,95,98,97,100,103,101,0),914]]);
       let halfG: Map<any, any> = new Map([[String.fromCharCode(110,97,109,101,115,101,114,118,101,114,95,114,95,56,56,0),375], [String.fromCharCode(118,95,52,53,95,99,114,99,99,0),117], [String.fromCharCode(99,95,49,55,95,115,117,98,114,101,115,117,108,116,0),871]]);
      let share6 = 9001256 >= halfG.size;
      do {
          let minit = 5.0;
          let time_zS = String.fromCharCode(118,112,109,99,95,122,95,56,52,0);
          let volume7 = 3.0;
          let saveV: Map<any, any> = new Map([[String.fromCharCode(110,95,52,53,95,97,114,99,104,105,118,101,114,0),207], [String.fromCharCode(119,95,50,49,95,106,112,101,103,108,115,0),793]]);
         halfG.set(time_zS, time_zS.length | 1);
         minit -= parseInt(`${volume7}`) << (Math.min(Math.abs(2), 5));
         volume7 -= parseInt(`${minit}`);
         saveV.set(`${minit}`, parseInt(`${minit}`));
         if (share6) {
            break;
         }
      } while (((updatesh.size / 3) == 1 && 3 == (updatesh.size / (Math.max(halfG.size, 5)))) && share6);
          let borderlessz = String.fromCharCode(100,95,56,56,95,115,116,114,108,99,112,121,0);
         transferE += `${borderlessz.length}`;
      borderlessJ = calendarH == internetT;
      break;
   }
   for (let f = 0; f < 1; f++) {
      sinaZ.push(((whitep ? 2 : 1)));
   }
      overd /= Math.max(5, internetT.length);
       let tickedL: Map<any, any> = new Map([[String.fromCharCode(121,95,52,95,109,97,103,105,99,0),String.fromCharCode(100,95,56,56,95,112,114,111,116,101,99,116,0)], [String.fromCharCode(104,95,51,50,95,109,110,101,109,111,110,105,99,0),String.fromCharCode(119,95,50,48,95,102,117,108,102,105,108,108,101,100,0)], [String.fromCharCode(112,114,111,103,114,101,115,115,95,120,95,55,55,0),String.fromCharCode(114,101,99,111,114,100,105,110,103,99,111,110,110,95,105,95,51,51,0)]]);
       let dataM = 5.0;
      if ((dataM * 4.91) > 4.80 || (4.91 * dataM) > 4.36) {
         dataM -= 2;
      }
          let giftc = String.fromCharCode(118,95,53,56,95,97,99,99,101,115,115,111,114,105,101,115,0);
          let umengX = String.fromCharCode(114,95,49,51,95,112,114,101,100,105,99,116,105,111,110,115,0);
         dataM /= Math.max((giftc == String.fromCharCode(104,0) ? tickedL.size : giftc.length), 1);
         umengX = `${umengX.length / (Math.max(umengX.length, 5))}`;
          let long_bt3: Map<any, any> = new Map([[String.fromCharCode(100,95,57,50,95,115,104,111,114,116,108,121,0),543], [String.fromCharCode(99,108,111,115,101,95,99,95,49,54,0),601], [String.fromCharCode(99,111,112,121,120,110,95,56,95,57,52,0),73]]);
         tickedL = new Map([[`${tickedL.size}`, 1 - tickedL.size]]);
         long_bt3.set(`${long_bt3.size}`, long_bt3.size + 2);
      while (!Array.from(tickedL.values()).includes(dataM)) {
         tickedL = new Map([[`${tickedL.size}`, parseInt(`${dataM}`)]]);
         break;
      }
       let combinedA = String.fromCharCode(109,105,110,115,95,108,95,56,53,0);
       let interstitialG = String.fromCharCode(112,108,97,121,97,98,108,101,95,102,95,54,55,0);
         dataM += combinedA.length << (Math.min(4, Math.abs(parseInt(`${dataM}`))));
      internetT = `${sinaZ.length & 2}`;
       let scoreN = 2.0;
         scoreN /= Math.max(parseFloat(`${parseInt(`${scoreN}`) % (Math.max(1, parseInt(`${scoreN}`)))}`), 2);
      while (2.92 < (scoreN - 3)) {
          let usernameo = String.fromCharCode(98,95,49,50,95,98,108,111,111,109,0);
          let casting2: Array<any> = [132, 635, 639];
          let result4: Array<any> = [893, 566];
          let mailf = 3.0;
         scoreN *= parseFloat(`${casting2.length / (Math.max(2, 10))}`);
         usernameo += `${result4.length - usernameo.length}`;
         casting2.push(result4.length);
         mailf += (usernameo == String.fromCharCode(97,0) ? usernameo.length : result4.length);
         break;
      }
      if ((2.80 * scoreN) == 1.86) {
          let phone4 = 5.0;
          let componentG = 3.0;
          let stationB = 1;
         scoreN *= parseFloat(`${parseInt(`${componentG}`)}`);
         phone4 += 2;
         componentG -= stationB;
         stationB &= stationB;
      }
      whitep = 80.65 < scoreN;
       let interstitialM = String.fromCharCode(119,104,105,108,101,95,54,95,49,48,48,0);
      if (2 == interstitialM.length) {
         interstitialM += `${interstitialM.length}`;
      }
          let paginationK = 1.0;
          let placeholderK: Array<any> = [21, 966];
         interstitialM += `${parseInt(`${paginationK}`)}`;
         paginationK += placeholderK.length >> (Math.min(Math.abs(3), 1));
         placeholderK.push(placeholderK.length + placeholderK.length);
      let sansy = 8072290 >= interstitialM.length;
      do {
         interstitialM += `${interstitialM.length}`;
         if (sansy) {
            break;
         }
      } while ((5 < interstitialM.length || 5 < interstitialM.length) && sansy);
      internetT = "1";

    if (banner) {

   for (let d = 0; d < 2; d++) {
      skipy.set(`${overd}`, sinaZ.length + overd);
   }
      sinaZ = [parseInt(`${settingsi}`) | anythinkZ];
   while (guidey == sinaZ.length) {
      guidey += ((whitep ? 1 : 2));
      break;
   }
      guidey -= (parseInt(`${settingsi}`) << (Math.min(1, Math.abs((teamR ? 4 : 3)))));
       let suggestion2 = 3.0;
       let switch_94A = 4.0;
       let founds = 1.0;
      if (3.21 <= (founds / 3.91)) {
         founds *= parseFloat(`${parseInt(`${suggestion2}`) - parseInt(`${switch_94A}`)}`);
      }
         switch_94A += parseFloat(`${parseInt(`${founds}`)}`);
      let handlerW = 8850700.0 <= founds;
      do {
          let album5: Map<any, any> = new Map([[String.fromCharCode(115,118,101,99,116,111,114,95,49,95,51,55,0),String.fromCharCode(115,95,51,57,95,108,105,107,101,108,121,0)], [String.fromCharCode(105,115,97,99,95,114,95,54,53,0),String.fromCharCode(104,119,97,99,99,101,108,115,95,102,95,53,52,0)], [String.fromCharCode(114,116,112,115,101,110,100,101,114,95,48,95,56,53,0),String.fromCharCode(106,95,50,52,95,119,101,98,0)]]);
          let leftL: Map<any, any> = new Map([[String.fromCharCode(102,95,54,57,95,117,112,100,97,116,101,0),false ], [String.fromCharCode(122,95,57,52,95,99,97,118,115,105,100,99,116,0),true ], [String.fromCharCode(121,95,55,49,95,116,105,109,101,114,115,0),true ]]);
          let forwardp = String.fromCharCode(105,95,49,95,115,117,112,112,108,101,109,101,110,116,97,114,121,0);
         founds -= parseFloat(`${parseInt(`${switch_94A}`)}`);
         album5 = new Map([[`${leftL.size}`, 3]]);
         leftL.set(`${leftL.size}`, 3 & album5.size);
         forwardp += `${(forwardp == String.fromCharCode(54,0) ? leftL.size : forwardp.length)}`;
         if (handlerW) {
            break;
         }
      } while (handlerW && (founds >= suggestion2));
          let modelf = String.fromCharCode(97,95,50,95,102,117,108,108,0);
          let lessw: Array<any> = [381, 171, 163];
          let shirtd = String.fromCharCode(109,95,49,48,48,95,100,101,98,97,110,100,0);
         switch_94A *= parseFloat(`${parseInt(`${founds}`) - 1}`);
         modelf = `${shirtd.length % 2}`;
         lessw.push(3);
         shirtd = `${shirtd.length ^ 2}`;
       let stationsu = String.fromCharCode(111,95,52,53,95,99,111,108,111,114,109,97,112,0);
       let skip3 = String.fromCharCode(97,109,111,117,110,116,95,50,95,56,49,0);
      overd %= Math.max(1 & calendarH.length, 5);
      whitep = !teamR;
   while (teamR) {
      whitep = 65.62 >= guidey;
      break;
   }
      setBannerAd(banner);
    } else {

       let anythinkT = String.fromCharCode(116,95,57,57,95,115,116,97,108,108,0);
       let lineG = String.fromCharCode(98,95,54,50,95,115,112,97,114,115,101,110,101,115,115,0);
         lineG = `${1 ^ anythinkT.length}`;
          let footballO = false;
         anythinkT += `${anythinkT.length << (Math.min(3, lineG.length))}`;
         footballO = !footballO;
      teamR = guidey <= 73.26 || 61 <= anythinkZ;
      whitep = calendarH == String.fromCharCode(55,0);
      calendarH = `${((whitep ? 4 : 2) << (Math.min(internetT.length, 2)))}`;
   while (sinaZ.length <= 1) {
       let leftf = true;
         leftf = !leftf;
      if (!leftf) {
          let xvod4 = String.fromCharCode(112,95,53,51,95,100,115,109,111,116,105,111,110,0);
         leftf = (95 > ((!leftf ? 95 : xvod4.length) % (Math.max(9, xvod4.length))));
      }
      while (!leftf && leftf) {
          let switch_cB = 4;
          let tickE = 3.0;
          let episodes = String.fromCharCode(104,101,97,100,115,101,116,95,97,95,50,48,0);
          let matchO = String.fromCharCode(97,97,97,97,95,55,95,52,53,0);
          let memberL = String.fromCharCode(121,95,57,95,112,114,111,112,101,114,0);
         leftf = String.fromCharCode(49,0) == episodes;
         switch_cB %= Math.max(5, 2 & matchO.length);
         tickE += (memberL == String.fromCharCode(77,0) ? switch_cB : memberL.length);
         episodes += `${parseInt(`${tickE}`)}`;
         matchO += `${1 | matchO.length}`;
         break;
      }
      sinaZ.push(skipy.size << (Math.min(5, Math.abs(parseInt(`${dialogY}`)))));
      break;
   }
      settingsi *= ((borderlessJ ? 4 : 5));
      guidey += 1;
   if (4 > (calendarH.length << (Math.min(Math.abs(4), 2))) || 4 > (4 / (Math.max(3, calendarH.length)))) {
      calendarH += `${((teamR ? 1 : 2) / (Math.max(anythinkZ, 8)))}`;
   }
      setBannerAd(undefined);
    }
  };

  const shouldShowAds = async () => {
       let settingsf = true;
    let largeV = 5.0;
    let eighteen3 = String.fromCharCode(106,100,115,97,109,112,108,101,95,50,95,50,51,0);
    let confirmationb = String.fromCharCode(115,95,54,49,95,119,97,116,99,104,0);
    let googleH: Array<any> = [390, 60, 101];
    let logoutO: Map<any, any> = new Map([[String.fromCharCode(111,95,53,51,95,99,111,100,101,119,111,114,100,0),375], [String.fromCharCode(105,95,51,55,95,99,111,114,100,0),760]]);
    let selectE: Array<any> = [String.fromCharCode(114,101,107,101,121,95,102,95,54,49,0), String.fromCharCode(106,95,52,51,95,114,101,99,111,114,100,115,0)];
    let orange0 = 1;
    let questZ = 2.0;
    let commentZ: Array<any> = [26, 34];
    let megaphonef: Map<any, any> = new Map([[String.fromCharCode(119,101,108,115,100,101,99,100,101,109,111,95,117,95,57,52,0),false ], [String.fromCharCode(112,114,101,115,101,100,95,108,95,49,48,48,0),true ]]);
    let auto_ad1: Map<any, any> = new Map([[String.fromCharCode(99,95,51,48,95,113,117,97,114,116,122,0),String.fromCharCode(109,101,97,110,95,105,95,52,48,0)], [String.fromCharCode(118,95,52,54,95,110,97,109,101,0),String.fromCharCode(115,111,117,114,99,101,105,100,95,113,95,54,49,0)], [String.fromCharCode(105,95,56,57,95,117,105,111,116,111,109,98,117,102,0),String.fromCharCode(100,101,115,116,105,110,97,116,105,111,110,115,95,49,95,51,49,0)]]);
    let detailP = 2.0;
    let commentD: Map<any, any> = new Map([[String.fromCharCode(100,95,54,55,95,103,101,116,99,0),String.fromCharCode(100,105,115,112,108,97,121,101,100,95,99,95,55,51,0)], [String.fromCharCode(114,95,51,57,0),String.fromCharCode(99,111,109,112,97,114,97,116,111,114,95,119,95,55,54,0)], [String.fromCharCode(107,95,50,48,95,117,110,100,101,114,102,108,111,119,0),String.fromCharCode(98,95,52,52,95,119,114,105,116,97,98,108,101,0)]]);
    let sentry2: Array<any> = [String.fromCharCode(119,95,55,95,102,117,114,116,104,101,114,0), String.fromCharCode(97,100,100,114,115,95,55,95,53,49,0)];
   if ((5 + googleH.length) <= 4) {
      logoutO.set(`${settingsf}`, ((settingsf ? 4 : 1) << (Math.min(selectE.length, 3))));
   }
      questZ /= Math.max(parseFloat(`${parseInt(`${largeV}`)}`), 2);
   for (let s = 0; s < 1; s++) {
       let logoutR = String.fromCharCode(99,95,54,53,95,115,99,97,108,101,100,0);
       let twitterF = true;
       let predictionr = 0.0;
       let trashF = false;
      while (3 <= logoutR.length) {
          let privilegeS = true;
          let register_clo = 3.0;
          let listQ = String.fromCharCode(102,105,112,115,95,99,95,54,48,0);
          let roome: Array<any> = [String.fromCharCode(99,111,109,101,95,110,95,54,49,0), String.fromCharCode(116,95,53,54,95,109,101,109,111,0), String.fromCharCode(119,95,52,51,95,115,108,117,114,112,0)];
         logoutR = `${parseInt(`${predictionr}`)}`;
         privilegeS = !privilegeS;
         register_clo *= ((privilegeS ? 2 : 2) / (Math.max(parseInt(`${register_clo}`), 1)));
         listQ = `${(parseInt(`${register_clo}`) & (privilegeS ? 1 : 4))}`;
         roome.push(listQ.length | 3);
         break;
      }
      while (!trashF) {
          let telegramd: Array<any> = [String.fromCharCode(103,95,55,53,95,97,98,115,111,108,117,116,101,0), String.fromCharCode(112,95,55,57,95,115,111,114,116,0)];
          let hongkong7 = String.fromCharCode(119,95,55,53,95,100,113,117,111,116,101,0);
          let indicatort = String.fromCharCode(112,103,110,111,95,49,95,56,0);
          let sportsn = String.fromCharCode(105,95,50,49,95,97,114,101,0);
          let gmailB = 0.0;
         twitterF = 97.12 > gmailB;
         telegramd.push(telegramd.length % (Math.max(3, 4)));
         hongkong7 += `${telegramd.length}`;
         indicatort = `${(sportsn == String.fromCharCode(69,0) ? telegramd.length : sportsn.length)}`;
         gmailB *= sportsn.length - 3;
         break;
      }
      if (5 <= logoutR.length) {
         twitterF = predictionr == 48.78 || 79 == logoutR.length;
      }
       let indexz = String.fromCharCode(97,95,54,53,95,114,101,116,114,105,101,114,0);
         trashF = !logoutR.includes(`${trashF}`);
         indexz += `${indexz.length * logoutR.length}`;
          let tailn = String.fromCharCode(101,110,99,97,112,115,117,108,97,116,101,95,50,95,56,55,0);
         twitterF = 30 >= logoutR.length && predictionr >= 39.57;
         tailn += `${3 | tailn.length}`;
      if (predictionr < 5.45 && (predictionr / 5.45) < 2.89) {
         trashF = !indexz.endsWith(`${predictionr}`);
      }
      for (let q = 0; q < 2; q++) {
         twitterF = logoutR.length < 97;
      }
      let searchd = trashF ? !trashF : trashF;
      do {
          let sheetp: Array<any> = [String.fromCharCode(104,95,53,56,95,110,97,118,105,103,97,116,101,0), String.fromCharCode(104,99,109,99,95,48,95,54,54,0), String.fromCharCode(114,101,109,105,110,100,95,114,95,57,55,0)];
          let eventS = 3;
          let clubc = String.fromCharCode(112,95,53,48,95,97,119,97,105,116,0);
          let aboutL = 2.0;
          let bufferF = String.fromCharCode(110,95,52,50,95,105,99,111,110,115,0);
         trashF = 63 >= bufferF.length;
         sheetp = [(clubc == String.fromCharCode(106,0) ? clubc.length : sheetp.length)];
         eventS -= sheetp.length;
         aboutL -= parseFloat(`${sheetp.length - 2}`);
         bufferF += "3";
         if (searchd) {
            break;
         }
      } while ((4 == indexz.length) && searchd);
         twitterF = logoutR.length < 7;
      for (let j = 0; j < 2; j++) {
         logoutR = `${parseInt(`${predictionr}`)}`;
      }
      questZ += parseFloat(`${3 - parseInt(`${questZ}`)}`);
   }
   if ((eighteen3.length % (Math.max(4, 8))) <= 1 && 4.24 <= (largeV + 4.44)) {
      largeV /= Math.max(4, (String.fromCharCode(98,0) == eighteen3 ? eighteen3.length : logoutO.size));
   }
   for (let i = 0; i < 2; i++) {
      settingsf = !settingsf;
   }
      megaphonef.set(`${logoutO.size}`, 2 ^ logoutO.size);
      eighteen3 += "2";
      commentZ = [2];
   let zhuboR = logoutO.size <= 8180690;
   do {
       let combinedE = String.fromCharCode(112,110,105,101,108,115,95,114,95,49,50,0);
          let projectf = 3;
          let const_i6 = String.fromCharCode(115,116,97,99,107,115,95,115,95,51,0);
         combinedE += `${combinedE.length}`;
         projectf |= projectf - const_i6.length;
         const_i6 = `${projectf % 1}`;
      while (combinedE.length < combinedE.length) {
         combinedE += "3";
         break;
      }
      let orangek = combinedE == String.fromCharCode(121,112,114,49,0);
      do {
          let nativeg = 3.0;
          let overh = 0.0;
          let nativeo = String.fromCharCode(97,110,105,109,97,116,101,95,53,95,55,56,0);
         combinedE = `${nativeo.length}`;
         nativeg -= parseFloat(`${parseInt(`${overh}`) >> (Math.min(Math.abs(parseInt(`${nativeg}`)), 1))}`);
         overh *= parseFloat(`${parseInt(`${overh}`) / 1}`);
         nativeo = `${parseInt(`${overh}`)}`;
         if (orangek) {
            break;
         }
      } while (orangek && (combinedE.length == combinedE.length));
      logoutO.set(confirmationb, 3 ^ confirmationb.length);
      if (zhuboR) {
         break;
      }
   } while (zhuboR && ((5 + logoutO.size) <= 3 || 5 <= (5 + googleH.length)));
   while (commentZ.length <= selectE.length) {
       let whites: Array<any> = [656, 65];
       let v_countt = String.fromCharCode(109,95,52,54,95,116,114,105,97,110,103,108,101,115,0);
       let combinedL = 1;
       let mailO = 1.0;
      while (5 > (4 | combinedL) || 5.59 > (mailO / (Math.max(1.42, 3)))) {
         combinedL <<= Math.min(Math.abs(v_countt.length << (Math.min(Math.abs(3), 5))), 2);
         break;
      }
          let largeC = String.fromCharCode(109,95,56,48,95,99,111,109,98,105,110,97,116,111,114,0);
          let logoutw = 1;
          let mathb = false;
         mailO += parseFloat(`${parseInt(`${mailO}`)}`);
         largeC = `${logoutw - 1}`;
         logoutw |= largeC.length >> (Math.min(3, Math.abs(logoutw)));
         mathb = largeC.includes(`${logoutw}`);
         v_countt = "2";
          let paused: Map<any, any> = new Map([[String.fromCharCode(98,105,111,95,101,95,51,57,0),151], [String.fromCharCode(115,95,53,56,95,101,110,97,98,108,101,0),212], [String.fromCharCode(97,112,112,114,101,99,97,116,105,111,110,104,111,117,114,115,95,119,95,51,56,0),931]]);
          let bannerv = 0.0;
          let suggestionp = 5;
         combinedL *= v_countt.length * 2;
         paused.set(`${suggestionp}`, suggestionp);
         bannerv /= Math.max(parseFloat(`${parseInt(`${bannerv}`)}`), 1);
       let constantsj: Array<any> = [String.fromCharCode(109,97,120,105,109,105,122,101,100,95,104,95,49,48,48,0), String.fromCharCode(103,101,116,115,95,108,95,51,54,0)];
      for (let t = 0; t < 1; t++) {
          let subs9: Array<any> = [118, 437, 30];
          let countdownV = String.fromCharCode(97,95,49,53,95,101,120,116,115,107,0);
         whites.push(whites.length * 2);
         subs9.push(subs9.length);
         countdownV += `${countdownV.length * 2}`;
      }
         mailO *= parseFloat(`${combinedL}`);
          let gmail9: Array<any> = [307, 185];
         v_countt = "1";
         gmail9.push(gmail9.length + gmail9.length);
          let yellowC: Map<any, any> = new Map([[String.fromCharCode(113,117,97,100,114,95,114,95,57,49,0),936], [String.fromCharCode(122,95,56,53,95,100,111,119,110,109,105,120,0),158]]);
          let componentG: Array<any> = [String.fromCharCode(116,114,105,109,95,120,95,55,52,0), String.fromCharCode(105,110,118,97,108,105,100,97,116,101,100,95,54,95,51,54,0)];
          let v_unlockK: Map<any, any> = new Map([[String.fromCharCode(97,110,115,119,101,114,115,95,52,95,56,52,0),String.fromCharCode(114,95,57,95,99,109,97,115,107,0)], [String.fromCharCode(117,95,50,57,95,104,108,115,112,108,97,121,108,105,115,116,0),String.fromCharCode(111,95,55,52,95,98,105,116,118,101,99,115,0)]]);
         whites.push(v_unlockK.size | 2);
         yellowC.set(`${componentG.length}`, componentG.length | yellowC.size);
         v_unlockK = new Map([[`${yellowC.size}`, yellowC.size % (Math.max(componentG.length, 8))]]);
      if (combinedL > 1) {
         mailO += (parseFloat(`${String.fromCharCode(69,0) == v_countt ? combinedL : v_countt.length}`));
      }
      for (let w = 0; w < 2; w++) {
          let sideK = false;
         whites = [(String.fromCharCode(86,0) == v_countt ? v_countt.length : whites.length)];
         sideK = (!sideK ? !sideK : sideK);
      }
      let philippines_ = mailO >= 6499201.0;
      do {
          let roomo = 4;
         mailO -= parseFloat(`${3}`);
         roomo ^= roomo & roomo;
         if (philippines_) {
            break;
         }
      } while ((constantsj.length > 5) && philippines_);
      selectE.push(eighteen3.length);
      break;
   }
      logoutO = new Map([[`${largeV}`, ((settingsf ? 5 : 5) << (Math.min(Math.abs(parseInt(`${largeV}`)), 2)))]]);
   if (1 >= (5 | logoutO.size)) {
       let xvodA: Array<any> = [273, 339];
       let footballQ = String.fromCharCode(118,97,108,105,100,97,116,111,114,95,55,95,54,57,0);
         xvodA = [xvodA.length];
      while ((footballQ.length * 5) < 1) {
         footballQ += `${xvodA.length * footballQ.length}`;
         break;
      }
         xvodA = [1];
         xvodA.push(xvodA.length);
      for (let e = 0; e < 1; e++) {
         footballQ += `${xvodA.length >> (Math.min(footballQ.length, 2))}`;
      }
         footballQ += `${(footballQ == String.fromCharCode(54,0) ? footballQ.length : xvodA.length)}`;
      settingsf = questZ < 4.12;
   }
       let stationu = true;
       let linkn = String.fromCharCode(106,95,50,57,95,101,110,100,97,0);
          let yingb = 0;
         stationu = !stationu;
         yingb *= 1;
      let viewsy = String.fromCharCode(50,110,103,95,97,0) == linkn;
      do {
         linkn = `${(1 ^ (stationu ? 1 : 3))}`;
         if (viewsy) {
            break;
         }
      } while ((stationu && linkn.length > 2) && viewsy);
      let window_gkZ = linkn == String.fromCharCode(111,107,118,0);
      do {
         linkn += `${((stationu ? 3 : 2) >> (Math.min(Math.abs(2), 2)))}`;
         if (window_gkZ) {
            break;
         }
      } while (window_gkZ && (!stationu));
      for (let b = 0; b < 3; b++) {
          let mail5 = 4.0;
          let canvasl = 5;
         linkn += `${linkn.length}`;
         mail5 *= canvasl;
         canvasl &= 2 * parseInt(`${mail5}`);
      }
      for (let i = 0; i < 3; i++) {
          let plashT: Array<any> = [450, 256];
          let umengq = String.fromCharCode(105,110,116,101,114,108,97,99,101,95,111,95,49,48,0);
          let canvasg = String.fromCharCode(106,95,49,54,95,99,103,105,109,97,103,101,0);
         linkn += `${umengq.length - 3}`;
         plashT = [(String.fromCharCode(84,0) == canvasg ? canvasg.length : plashT.length)];
         umengq = `${plashT.length + canvasg.length}`;
      }
      while (stationu) {
          let tempo = 2;
         linkn += `${tempo & 1}`;
         break;
      }
      selectE.push((confirmationb == String.fromCharCode(89,0) ? commentZ.length : confirmationb.length));
   while (1.63 == (2.40 / (Math.max(3, largeV))) && 5.77 == (largeV / 2.40)) {
      largeV -= logoutO.size << (Math.min(4, Math.abs(orange0)));
      break;
   }
      googleH = [2 + googleH.length];
   while ((logoutO.size + 2) > 2) {
      googleH = [googleH.length];
      break;
   }
      selectE.push((confirmationb == String.fromCharCode(103,0) ? logoutO.size : confirmationb.length));
      largeV -= auto_ad1.size % 1;
       let goalV = 0.0;
       let maths = String.fromCharCode(109,97,110,116,105,115,115,97,95,49,95,56,56,0);
       let pauseP = String.fromCharCode(112,108,97,116,102,111,114,109,95,51,95,49,48,0);
       let humidityO = String.fromCharCode(109,98,98,121,95,112,95,51,0);
         goalV -= parseFloat(`${2 << (Math.min(3, Math.abs(parseInt(`${goalV}`))))}`);
         pauseP += `${pauseP.length | 1}`;
      let borderlessD = pauseP.length >= 5604981;
      do {
         pauseP = `${(String.fromCharCode(84,0) == pauseP ? pauseP.length : parseInt(`${goalV}`))}`;
         if (borderlessD) {
            break;
         }
      } while ((4.21 <= (2.87 * goalV)) && borderlessD);
      for (let y = 0; y < 3; y++) {
         humidityO = `${humidityO.length | 2}`;
      }
      if (pauseP != humidityO) {
         humidityO = `${3 << (Math.min(5, Math.abs(parseInt(`${goalV}`))))}`;
      }
      megaphonef.set(`${largeV}`, parseInt(`${largeV}`) * commentZ.length);
      maths += `${(String.fromCharCode(97,0) == maths ? maths.length : maths.length)}`;
   if (eighteen3.includes(`${googleH.length}`)) {
      googleH.push(1 | orange0);
   }
      settingsf = String.fromCharCode(69,0) == confirmationb;
   if (auto_ad1.get(`${detailP}`) == null) {
      auto_ad1 = new Map([[`${logoutO.size}`, logoutO.size]]);
   }
      megaphonef = new Map([[`${logoutO.size}`, ((settingsf ? 4 : 1) & logoutO.size)]]);
   if (largeV < 3.8) {
       let whistlev = 1;
       let over9 = String.fromCharCode(98,95,49,57,95,115,119,105,102,116,0);
       let send2 = 1;
       let guide5: Map<any, any> = new Map([[String.fromCharCode(97,108,112,104,97,110,117,109,101,114,105,99,115,95,52,95,51,50,0),908], [String.fromCharCode(100,95,56,52,95,118,112,97,116,104,0),76], [String.fromCharCode(97,103,97,116,101,95,105,95,55,54,0),584]]);
      for (let i = 0; i < 3; i++) {
          let found_: Array<any> = [730, 180, 899];
          let updatesw = 5.0;
          let greyK = String.fromCharCode(102,97,118,105,99,111,110,95,98,95,50,49,0);
          let change2: Map<any, any> = new Map([[String.fromCharCode(104,117,101,115,95,114,95,52,49,0),775], [String.fromCharCode(114,101,106,101,99,116,101,100,95,56,95,54,57,0),739]]);
          let upgradel = 5;
         over9 = `${3 ^ greyK.length}`;
         found_.push(upgradel);
         updatesw += parseFloat(`${3 + parseInt(`${updatesw}`)}`);
         greyK = `${parseInt(`${updatesw}`)}`;
         change2 = new Map([[`${found_.length}`, 2 + found_.length]]);
         upgradel |= change2.size ^ 3;
      }
          let awayC: Map<any, any> = new Map([[String.fromCharCode(115,95,52,52,95,102,111,117,114,99,99,115,0),888], [String.fromCharCode(102,95,55,50,95,103,114,111,117,110,100,0),877], [String.fromCharCode(114,101,99,101,105,118,101,95,122,95,52,51,0),285]]);
          let matchb = true;
          let clearI = 0.0;
         over9 += `${guide5.size * send2}`;
         awayC.set(`${clearI}`, 3);
         matchb = awayC.get(`${matchb}`) != null;
         clearI *= parseFloat(`${1 / (Math.max(4, parseInt(`${clearI}`)))}`);
         over9 = `${(String.fromCharCode(116,0) == over9 ? whistlev : over9.length)}`;
      while (5 > (over9.length | guide5.size)) {
         over9 += "2";
         break;
      }
      while (2 == over9.length) {
          let signinupr = String.fromCharCode(104,95,56,54,95,100,97,116,97,108,105,115,116,0);
         whistlev -= guide5.size;
         signinupr += `${signinupr.length}`;
         break;
      }
       let dangerX = String.fromCharCode(109,95,57,55,95,100,101,97,100,108,105,110,101,0);
       let gift9 = String.fromCharCode(99,109,105,111,95,110,95,50,0);
      for (let i = 0; i < 1; i++) {
         over9 += `${(gift9 == String.fromCharCode(86,0) ? gift9.length : send2)}`;
      }
         guide5.set(dangerX, dangerX.length & over9.length);
          let vignetteF: Array<any> = [992, 453, 942];
         guide5.set(gift9, vignetteF.length << (Math.min(gift9.length, 1)));
      while (2 == dangerX.length) {
         guide5.set(`${whistlev}`, 2);
         break;
      }
      if (4 == (send2 * whistlev) && (whistlev * send2) == 4) {
          let signinupJ = false;
         send2 ^= send2;
         signinupJ = !signinupJ;
      }
          let optionse = String.fromCharCode(102,95,53,57,95,114,109,115,116,114,101,97,109,0);
          let mode_ = true;
          let usernameS = String.fromCharCode(107,95,52,52,95,97,112,112,101,97,114,105,110,103,0);
         guide5 = new Map([[`${guide5.size}`, (String.fromCharCode(67,0) == dangerX ? dangerX.length : guide5.size)]]);
         optionse += "2";
         mode_ = usernameS.length <= 33 || !mode_;
         usernameS = `${1 + optionse.length}`;
      eighteen3 = `${parseInt(`${largeV}`)}`;
   }
   while (1.41 >= largeV) {
      commentZ = [logoutO.size % 3];
      break;
   }
   while (!settingsf) {
       let main_n3 = String.fromCharCode(97,95,54,50,95,106,112,101,103,100,119,116,0);
       let faviconx = String.fromCharCode(113,95,53,55,95,118,101,110,99,0);
         faviconx += `${main_n3.length}`;
      for (let z = 0; z < 3; z++) {
         faviconx = `${faviconx.length}`;
      }
      let desc5 = faviconx == String.fromCharCode(100,49,54,95,106,119,120,115,121,97,0);
      do {
         faviconx = `${faviconx.length - 2}`;
         if (desc5) {
            break;
         }
      } while (desc5 && (faviconx.endsWith(main_n3)));
          let projectk = String.fromCharCode(105,95,54,52,95,117,99,109,112,0);
          let whistler = 5.0;
         main_n3 = `${2 << (Math.min(4, faviconx.length))}`;
         projectk += `${(projectk == String.fromCharCode(95,0) ? projectk.length : parseInt(`${whistler}`))}`;
         whistler /= Math.max((String.fromCharCode(104,0) == projectk ? projectk.length : parseInt(`${whistler}`)), 1);
       let singaporeL = 1.0;
      if (!faviconx.startsWith(`${singaporeL}`)) {
          let math6 = 0.0;
          let starj = false;
          let sellX = String.fromCharCode(99,111,108,117,109,110,95,122,95,49,48,0);
          let green_: Map<any, any> = new Map([[String.fromCharCode(97,97,99,100,101,99,95,103,95,53,55,0),String.fromCharCode(115,116,114,116,97,103,95,114,95,53,52,0)], [String.fromCharCode(121,95,49,48,95,100,105,115,112,97,116,99,104,0),String.fromCharCode(114,95,50,95,100,105,114,101,99,116,111,114,105,101,115,0)], [String.fromCharCode(120,95,54,55,95,115,101,110,115,105,116,105,118,101,0),String.fromCharCode(121,95,49,56,95,105,110,115,116,0)]]);
          let pointJ = false;
         faviconx = `${faviconx.length}`;
         math6 += ((starj ? 5 : 5) | parseInt(`${math6}`));
         starj = green_.size > 37;
         sellX += `${parseInt(`${math6}`) | green_.size}`;
         pointJ = sellX == String.fromCharCode(77,0);
      }
      logoutO = new Map([[`${logoutO.size}`, 1 & selectE.length]]);
      break;
   }
   if (2 <= (selectE.length ^ commentZ.length) && 1 <= (2 ^ commentZ.length)) {
      selectE = [auto_ad1.size];
   }
   for (let n = 0; n < 2; n++) {
       let time_uP = 4;
      for (let t = 0; t < 3; t++) {
         time_uP >>= Math.min(Math.abs(time_uP), 3);
      }
         time_uP -= 3;
          let textw: Map<any, any> = new Map([[String.fromCharCode(108,101,116,116,101,114,115,95,110,95,57,57,0),46], [String.fromCharCode(113,95,54,56,95,115,112,101,99,115,0),194]]);
         time_uP += 3;
         textw = new Map([[`${textw.size}`, textw.size]]);
      questZ /= Math.max(parseFloat(`${megaphonef.size / 1}`), 4);
   }

    fetchBannerAd();
  };

  useFocusEffect(
    useCallback(() => {
      shouldShowAds();
    }, [])
  );

  const [deviceUniqueId, setDeviceUniqueId] = useState("");

  const setDeviceId = async () => {
       let streamingM = String.fromCharCode(112,114,111,98,97,98,105,108,105,116,121,95,99,95,52,56,0);
    let productI: Array<any> = [String.fromCharCode(115,112,107,114,95,51,95,57,49,0), String.fromCharCode(115,117,103,103,101,115,116,101,100,95,48,95,52,51,0)];
    let details4 = String.fromCharCode(98,95,51,51,95,114,111,117,116,105,110,103,0);
    let signinup7 = String.fromCharCode(116,105,109,101,118,97,108,95,106,95,50,56,0);
    let down5 = 2.0;
    let episodesK = String.fromCharCode(113,95,57,57,95,109,105,100,105,0);
    let string_ = 1;
    let episodes = String.fromCharCode(115,104,97,114,101,100,95,122,95,52,50,0);
      episodesK = "2";
   while ((productI.length | details4.length) == 3 && 3 == (details4.length | 3)) {
      productI = [streamingM.length << (Math.min(Math.abs(1), 3))];
      break;
   }
      episodes += `${signinup7.length}`;
   if (details4 != streamingM) {
      streamingM += `${signinup7.length}`;
   }
      string_ %= Math.max(2, 2 & episodes.length);
      episodes = `${episodesK.length % 3}`;
   for (let y = 0; y < 2; y++) {
       let sportM = String.fromCharCode(102,105,110,100,97,115,115,111,99,95,48,95,55,53,0);
       let googleZ: Array<any> = [401, 79];
       let thailandU = String.fromCharCode(117,110,115,101,108,101,99,116,101,100,95,48,95,49,54,0);
         googleZ.push(sportM.length * 2);
         googleZ.push((thailandU == String.fromCharCode(82,0) ? thailandU.length : googleZ.length));
       let groupx = String.fromCharCode(113,95,56,49,95,115,111,102,116,0);
       let side0 = String.fromCharCode(117,95,51,95,97,100,100,120,0);
      for (let k = 0; k < 3; k++) {
         groupx = `${sportM.length << (Math.min(Math.abs(1), 5))}`;
      }
      for (let k = 0; k < 3; k++) {
         side0 += `${sportM.length | 3}`;
      }
          let datai = String.fromCharCode(120,95,51,55,95,114,101,110,101,119,97,98,108,101,0);
          let shrinkN = 3.0;
         googleZ = [groupx.length];
         datai = "1";
         shrinkN += parseFloat(`${1}`);
      let confirmationz = 5542189 >= side0.length;
      do {
         side0 += `${(groupx == String.fromCharCode(106,0) ? groupx.length : googleZ.length)}`;
         if (confirmationz) {
            break;
         }
      } while (confirmationz && (5 < (4 * side0.length) && 3 < (4 * googleZ.length)));
          let commentf = String.fromCharCode(115,95,50,52,95,120,100,99,97,109,0);
         thailandU += "1";
         commentf = "3";
      for (let q = 0; q < 1; q++) {
         thailandU += `${(thailandU == String.fromCharCode(112,0) ? googleZ.length : thailandU.length)}`;
      }
      signinup7 += `${(sportM == String.fromCharCode(80,0) ? sportM.length : signinup7.length)}`;
   }
       let modale = String.fromCharCode(113,95,56,48,95,99,108,97,112,0);
          let edit1 = String.fromCharCode(122,95,51,48,95,108,111,111,112,105,110,103,0);
          let stationn = String.fromCharCode(114,97,119,95,110,95,51,51,0);
         modale = `${modale.length}`;
         edit1 += `${edit1.length}`;
         stationn = `${edit1.length}`;
       let homeb: Map<any, any> = new Map([[String.fromCharCode(119,95,52,57,95,99,111,110,110,101,99,116,0),String.fromCharCode(116,95,50,51,95,115,116,97,116,105,115,116,105,99,0)], [String.fromCharCode(113,117,97,114,116,122,95,51,95,56,48,0),String.fromCharCode(99,111,112,121,97,100,100,95,114,95,55,54,0)], [String.fromCharCode(114,95,50,48,95,105,100,105,111,109,0),String.fromCharCode(104,111,115,116,95,108,95,52,57,0)]]);
       let catagory4: Map<any, any> = new Map([[String.fromCharCode(121,95,50,53,95,115,101,110,100,101,114,115,0),false ], [String.fromCharCode(114,101,112,111,114,116,105,110,103,95,118,95,49,48,48,0),true ]]);
          let trashp = String.fromCharCode(117,95,51,53,95,105,110,118,0);
         catagory4.set(`${homeb.size}`, catagory4.size << (Math.min(3, Math.abs(homeb.size))));
         trashp = `${trashp.length | 2}`;
      details4 = `${details4.length % 1}`;
   let pressure4 = down5 >= 7861805.0;
   do {
      down5 /= Math.max(parseFloat(`${parseInt(`${down5}`)}`), 2);
      if (pressure4) {
         break;
      }
   } while (((details4.length >> (Math.min(Math.abs(1), 4))) >= 4 || 1 >= (details4.length / (Math.max(1, parseInt(`${down5}`))))) && pressure4);
   if (down5 == 1.40) {
       let light1: Array<any> = [933, 360];
       let favicona = true;
       let blacklistN: Map<any, any> = new Map([[String.fromCharCode(97,108,119,97,121,115,95,108,95,49,48,0),String.fromCharCode(100,95,49,50,95,101,116,104,101,114,115,99,97,110,0)], [String.fromCharCode(119,95,55,55,95,118,105,97,98,108,101,0),String.fromCharCode(115,105,102,102,95,122,95,49,52,0)]]);
       let configuret = String.fromCharCode(102,95,53,53,95,120,99,116,101,115,116,0);
       let mathE = String.fromCharCode(120,95,52,55,95,101,109,112,105,114,105,99,97,108,108,121,0);
      if (!favicona) {
         favicona = blacklistN.size <= light1.length;
      }
      while (!favicona) {
         configuret = `${mathE.length}`;
         break;
      }
          let relatedi = String.fromCharCode(102,111,114,101,118,101,114,95,102,95,52,48,0);
          let chatD = false;
         mathE += `${(2 >> (Math.min(1, Math.abs((favicona ? 3 : 5)))))}`;
         relatedi += `${2 * relatedi.length}`;
         chatD = !chatD;
         configuret = `${blacklistN.size ^ light1.length}`;
      if (!favicona) {
          let nativeV = false;
          let kickX: Map<any, any> = new Map([[String.fromCharCode(108,95,50,51,95,112,115,97,0),545], [String.fromCharCode(116,95,51,56,95,97,116,104,0),868]]);
          let delegate_hw = String.fromCharCode(109,95,53,53,95,116,114,110,115,0);
          let notification0: Array<any> = [680, 720, 162];
          let contextu = String.fromCharCode(100,108,116,97,95,112,95,50,0);
         mathE += `${2 % (Math.max(1, contextu.length))}`;
         nativeV = (((nativeV ? 69 : delegate_hw.length) >> (Math.min(delegate_hw.length, 1))) == 69);
         kickX.set(delegate_hw, 1);
         notification0 = [1];
         contextu += `${(delegate_hw == String.fromCharCode(116,0) ? notification0.length : delegate_hw.length)}`;
      }
      if (blacklistN.size < 3) {
          let play8 = 1;
          let actionC = true;
          let viewer0 = String.fromCharCode(101,118,105,99,101,95,115,95,52,48,0);
         light1.push(((actionC ? 1 : 1) << (Math.min(mathE.length, 1))));
         play8 += 3 * play8;
         actionC = viewer0.length >= 50;
         viewer0 += `${play8 | viewer0.length}`;
      }
      if (configuret.length > 1) {
         configuret = `${mathE.length}`;
      }
      let pressureh = 5746175 <= blacklistN.size;
      do {
         blacklistN.set(`${favicona}`, 1);
         if (pressureh) {
            break;
         }
      } while (pressureh && (blacklistN.size > light1.length));
      streamingM = `${2 & details4.length}`;
   }
       let service6 = 2.0;
       let modey = false;
       let service6w = String.fromCharCode(98,95,52,55,95,112,114,101,118,101,110,116,115,0);
         service6 *= (service6w == String.fromCharCode(100,0) ? service6w.length : parseInt(`${service6}`));
      let bingV = service6w == String.fromCharCode(104,100,103,103,106,105,122,0);
      do {
         service6w = `${((modey ? 3 : 1) & parseInt(`${service6}`))}`;
         if (bingV) {
            break;
         }
      } while ((!modey && 3 <= service6w.length) && bingV);
      for (let y = 0; y < 2; y++) {
          let middleS = 2.0;
          let injuryj = String.fromCharCode(114,101,103,105,115,116,114,97,110,116,95,49,95,55,0);
          let soundw = String.fromCharCode(97,116,111,109,105,99,115,95,100,95,56,48,0);
          let views0 = 5.0;
         modey = soundw == injuryj;
         middleS *= parseInt(`${middleS}`) + 1;
         injuryj += `${parseInt(`${views0}`) + 1}`;
         soundw = `${parseInt(`${views0}`)}`;
      }
       let routerN = String.fromCharCode(101,95,49,56,95,115,104,101,108,108,0);
       let weiboD = String.fromCharCode(97,108,112,97,95,120,95,54,51,0);
         service6w = `${3 | parseInt(`${service6}`)}`;
      if (weiboD == service6w) {
         service6w = "2";
      }
         routerN += `${(service6w.length << (Math.min(4, Math.abs((modey ? 2 : 4)))))}`;
         modey = 13.99 == service6 || modey;
         routerN = `${routerN.length * service6w.length}`;
      streamingM = `${episodesK.length - 3}`;
   if (details4.length < string_) {
      details4 = `${(details4 == String.fromCharCode(48,0) ? parseInt(`${down5}`) : details4.length)}`;
   }
   let sinaU = episodes == String.fromCharCode(116,50,51,116,57,112,116,122,107,0);
   do {
      episodes += `${signinup7.length}`;
      if (sinaU) {
         break;
      }
   } while ((episodes.length > 3) && sinaU);

    let deviceId = await DeviceInfo.getUniqueId();

      down5 *= parseFloat(`${string_ << (Math.min(Math.abs(1), 2))}`);
   if (!streamingM.includes(details4)) {
      details4 = `${(episodes == String.fromCharCode(77,0) ? episodes.length : string_)}`;
   }
      episodes += `${episodes.length}`;
   for (let l = 0; l < 2; l++) {
      signinup7 += `${signinup7.length}`;
   }
      productI = [(String.fromCharCode(116,0) == episodesK ? parseInt(`${down5}`) : episodesK.length)];
       let darkb = String.fromCharCode(107,95,50,95,103,108,111,98,97,108,116,101,109,0);
         darkb = "2";
       let checkboxX = 4.0;
         checkboxX -= parseInt(`${checkboxX}`);
      down5 /= Math.max(4, parseFloat(`${streamingM.length}`));
   while (!details4.includes(`${string_}`)) {
       let gemfile_ = String.fromCharCode(116,105,109,101,99,111,100,101,95,107,95,50,56,0);
       let friendsS = String.fromCharCode(101,120,99,108,117,100,101,100,95,121,95,55,48,0);
         gemfile_ += `${gemfile_.length}`;
         friendsS = `${(friendsS == String.fromCharCode(48,0) ? friendsS.length : gemfile_.length)}`;
      for (let h = 0; h < 2; h++) {
         gemfile_ = `${gemfile_.length & friendsS.length}`;
      }
          let completeW: Map<any, any> = new Map([[String.fromCharCode(113,95,49,53,95,103,122,105,112,112,101,100,0),504], [String.fromCharCode(115,114,112,95,108,95,55,55,0),766], [String.fromCharCode(100,117,114,97,116,105,111,110,115,95,107,95,51,48,0),527]]);
          let pagination7 = 4.0;
         friendsS += `${(String.fromCharCode(50,0) == friendsS ? friendsS.length : gemfile_.length)}`;
         completeW = new Map([[`${completeW.size}`, completeW.size / (Math.max(3, 9))]]);
         pagination7 -= parseFloat(`${completeW.size | parseInt(`${pagination7}`)}`);
       let unselected0 = String.fromCharCode(100,101,99,111,109,112,114,101,115,115,105,111,110,95,122,95,57,57,0);
         friendsS = `${(unselected0 == String.fromCharCode(105,0) ? friendsS.length : unselected0.length)}`;
      details4 = `${string_ | 2}`;
      break;
   }
   for (let z = 0; z < 2; z++) {
      productI.push(3);
   }
       let injuryE: Map<any, any> = new Map([[String.fromCharCode(121,95,49,57,95,111,112,101,110,115,115,108,99,111,110,102,0),651], [String.fromCharCode(113,95,54,54,95,112,114,105,111,114,105,116,121,0),595], [String.fromCharCode(98,100,119,110,95,98,95,57,0),449]]);
       let long_hC = String.fromCharCode(118,105,101,119,115,95,57,95,51,0);
      let inviteF = 7924993 <= long_hC.length;
      do {
         long_hC += `${injuryE.size}`;
         if (inviteF) {
            break;
         }
      } while (inviteF && ((injuryE.size >> (Math.min(long_hC.length, 2))) >= 4 && (injuryE.size >> (Math.min(Math.abs(4), 3))) >= 2));
       let awayY = true;
         awayY = long_hC == String.fromCharCode(89,0);
       let roboto8 = String.fromCharCode(105,104,100,114,95,100,95,50,57,0);
      if (awayY && 2 >= (2 | injuryE.size)) {
          let vietnamV = false;
          let benefitC = 2.0;
          let maill: Map<any, any> = new Map([[String.fromCharCode(103,95,55,51,95,98,97,115,101,108,105,110,101,0),531], [String.fromCharCode(121,95,57,55,95,101,120,97,109,105,110,101,0),117]]);
          let confirmation5 = 2.0;
          let bannerC = String.fromCharCode(111,95,50,55,95,115,112,101,97,107,101,114,0);
         awayY = injuryE.size == 49;
         vietnamV = benefitC <= 54.40;
         benefitC -= 2;
         maill.set(`${benefitC}`, 2 | parseInt(`${confirmation5}`));
         confirmation5 *= parseFloat(`${1}`);
         bannerC = `${maill.size}`;
      }
          let uploadm = true;
          let download6 = String.fromCharCode(102,111,117,114,115,113,117,97,114,101,95,53,95,53,50,0);
         awayY = String.fromCharCode(103,0) == download6 || 94 <= roboto8.length;
         uploadm = !uploadm;
         download6 += `${((uploadm ? 2 : 2))}`;
      productI.push((long_hC == String.fromCharCode(53,0) ? long_hC.length : details4.length));
      details4 = `${3 & parseInt(`${down5}`)}`;
   while (2 < (3 & episodesK.length) && 5 < (string_ & 3)) {
       let membershipD = 3;
         membershipD /= Math.max(1 - membershipD, 4);
          let penaltyb = 2;
          let middleu = 5.0;
         membershipD |= penaltyb;
         penaltyb >>= Math.min(Math.abs(2), 2);
         middleu /= Math.max(4, 3 | parseInt(`${middleu}`));
         membershipD >>= Math.min(2, Math.abs(membershipD * 1));
      string_ &= string_;
      break;
   }
   if (2.83 == down5) {
      down5 *= parseFloat(`${productI.length}`);
   }
   for (let w = 0; w < 2; w++) {
      episodesK += `${episodesK.length + streamingM.length}`;
   }
    setDeviceUniqueId(deviceId);
  };

  useEffect(() => {
    setDeviceId();
  }, []);

  useEffect(() => {
    let date = new Date(Number(userState.user?.userMemberExpired ?? '0') * 1000); 
    
    let year = date.getFullYear();
    let month = date.getMonth() + 1; 
    let day = date.getDate();
    setDisplayedDate(`${year}年${month}月${day}日`);
  }, [userState.user?.userMemberExpired]);

  const onBannerView = useCallback(({ id, name, slot_id, title }: any) => {
    umb_center_carousel.profileBannerViewAnalytics({
      ads_id: id,
      ads_name: name,
      ads_slot_id: slot_id,
      ads_title: title,
    });
  }, []);

  const onBannerPress = useCallback(({ id, name, slot_id, title }: any) => {
    umb_center_carousel.profileBannerClickAnalytics({
      ads_id: id,
      ads_name: name,
      ads_slot_id: slot_id,
      ads_title: title,
    });
  }, []);



  const [showBecomeVIPOverlay, setShowBecomeVIPOverlay] = useState(false);

  const renderOverlay = () => {
       let controls0 = false;
    let windK: Map<any, any> = new Map([[String.fromCharCode(97,99,99,117,109,117,108,97,116,111,114,95,107,95,56,49,0),763], [String.fromCharCode(107,95,55,50,95,121,117,118,112,108,97,110,101,0),840], [String.fromCharCode(119,95,53,54,95,105,100,99,105,110,0),180]]);
    let termsZ = String.fromCharCode(98,119,103,116,95,111,95,56,56,0);
    let progressz = String.fromCharCode(111,95,51,54,95,115,112,101,99,105,102,105,99,0);
    let combinedE: Map<any, any> = new Map([[String.fromCharCode(113,95,55,51,95,112,114,101,115,101,114,118,101,115,0),String.fromCharCode(113,95,54,51,95,97,116,116,105,98,117,116,101,0)], [String.fromCharCode(121,95,50,51,95,108,111,111,107,117,112,0),String.fromCharCode(115,116,115,99,95,110,95,52,0)]]);
    let detailsA: Array<any> = [734, 662, 989];
    let indicatorC = String.fromCharCode(110,95,49,48,48,95,97,116,116,97,99,104,101,100,0);
    let watchh: Map<any, any> = new Map([[String.fromCharCode(119,97,116,101,114,109,97,114,107,115,95,118,95,54,53,0),String.fromCharCode(98,95,49,49,95,101,120,112,111,110,101,110,116,0)], [String.fromCharCode(119,104,105,116,101,95,107,95,49,54,0),String.fromCharCode(103,114,97,110,112,111,115,95,122,95,56,52,0)]]);
    let matches_: Array<any> = [530, 81, 936];
    let bootsplashr = 1.0;
    let hooksO = 2.0;
   for (let w = 0; w < 1; w++) {
      windK.set(`${detailsA.length}`, combinedE.size * detailsA.length);
   }
   let fast_ = 4984042 <= windK.size;
   do {
       let weiboq = 4.0;
       let emojir = String.fromCharCode(116,95,49,95,114,101,97,99,104,97,98,105,108,105,116,121,0);
       let scheduleT: Map<any, any> = new Map([[String.fromCharCode(100,95,52,55,95,109,101,109,115,104,105,112,0),163], [String.fromCharCode(100,95,52,52,95,100,101,118,105,99,101,115,0),78]]);
       let fieldF: Map<any, any> = new Map([[String.fromCharCode(97,112,112,108,121,105,110,103,95,97,95,50,56,0),118], [String.fromCharCode(99,111,114,114,101,99,116,105,111,110,95,51,95,49,53,0),322], [String.fromCharCode(108,95,55,48,95,105,110,116,114,111,100,117,99,116,105,111,110,0),877]]);
       let windM = true;
      let langI = 7655860.0 <= weiboq;
      do {
         weiboq += fieldF.size % 2;
         if (langI) {
            break;
         }
      } while ((!emojir.startsWith(`${weiboq}`)) && langI);
      if (windM) {
          let whistleE: Array<any> = [191, 495, 867];
         windM = !windM && scheduleT.size <= 9;
         whistleE.push(whistleE.length & whistleE.length);
      }
      for (let m = 0; m < 1; m++) {
         fieldF.set(`${weiboq}`, emojir.length);
      }
         emojir += `${(emojir == String.fromCharCode(101,0) ? emojir.length : fieldF.size)}`;
         fieldF.set(`${weiboq}`, parseInt(`${weiboq}`));
      if (scheduleT.size >= emojir.length) {
         emojir += `${((windM ? 2 : 4) | emojir.length)}`;
      }
      for (let a = 0; a < 1; a++) {
         weiboq /= Math.max(scheduleT.size << (Math.min(Math.abs(2), 4)), 1);
      }
      while (2 > (scheduleT.size >> (Math.min(Math.abs(fieldF.size), 1))) && 2 > (fieldF.size >> (Math.min(5, Math.abs(scheduleT.size))))) {
          let vignetteG = 0;
          let thumbnailO: Map<any, any> = new Map([[String.fromCharCode(117,112,108,111,97,100,95,101,95,49,51,0),347], [String.fromCharCode(116,95,51,52,95,97,108,97,99,0),410], [String.fromCharCode(115,95,49,48,95,110,117,109,101,114,105,99,0),681]]);
          let internet7 = 0.0;
          let volumem = String.fromCharCode(119,95,54,54,95,115,116,114,99,97,115,101,99,109,112,0);
         fieldF = new Map([[`${fieldF.size}`, 3 / (Math.max(4, parseInt(`${internet7}`)))]]);
         vignetteG ^= (String.fromCharCode(74,0) == volumem ? volumem.length : vignetteG);
         thumbnailO.set(`${vignetteG}`, 2);
         internet7 += volumem.length;
         break;
      }
      while (1 > fieldF.size) {
         fieldF.set(`${windM}`, (String.fromCharCode(97,0) == emojir ? emojir.length : (windM ? 3 : 3)));
         break;
      }
       let bottomS: Map<any, any> = new Map([[String.fromCharCode(117,95,53,53,95,105,119,97,108,115,104,0),String.fromCharCode(118,105,115,105,98,108,101,95,106,95,54,53,0)], [String.fromCharCode(97,114,99,95,119,95,53,52,0),String.fromCharCode(105,110,116,114,97,102,114,97,109,101,95,110,95,57,54,0)], [String.fromCharCode(99,111,109,98,105,95,120,95,49,56,0),String.fromCharCode(115,97,117,99,101,95,119,95,50,57,0)]]);
       let shrinkA: Map<any, any> = new Map([[String.fromCharCode(107,95,53,95,108,112,99,109,0),true ], [String.fromCharCode(111,95,49,48,48,95,108,111,99,97,116,101,100,0),false ], [String.fromCharCode(115,97,118,101,114,95,113,95,53,49,0),true ]]);
       let carousel5: Map<any, any> = new Map([[String.fromCharCode(107,98,112,115,95,101,95,57,49,0),String.fromCharCode(106,95,54,95,115,116,99,98,0)], [String.fromCharCode(97,117,116,104,111,114,105,122,101,95,110,95,50,48,0),String.fromCharCode(115,115,108,114,111,111,116,115,95,98,95,51,52,0)], [String.fromCharCode(99,111,108,108,97,116,105,111,110,95,107,95,57,56,0),String.fromCharCode(116,105,109,101,103,109,95,121,95,48,0)]]);
       let chartk: Map<any, any> = new Map([[String.fromCharCode(119,95,49,52,95,97,108,108,101,116,0),String.fromCharCode(110,95,51,49,95,101,99,108,0)], [String.fromCharCode(102,97,99,116,111,114,97,98,108,101,95,119,95,56,48,0),String.fromCharCode(109,97,116,101,114,105,97,108,95,49,95,52,48,0)]]);
      while (!emojir.includes(`${carousel5.size}`)) {
         emojir = `${2 * fieldF.size}`;
         break;
      }
         emojir += `${((windM ? 4 : 1) % (Math.max(bottomS.size, 10)))}`;
      if (5 > carousel5.size) {
          let update_93z = String.fromCharCode(102,95,49,95,119,101,105,103,104,116,115,0);
         emojir += `${((windM ? 5 : 2))}`;
         update_93z += `${update_93z.length - update_93z.length}`;
      }
          let spinner5 = false;
         chartk = new Map([[`${bottomS.size}`, 1]]);
         spinner5 = (!spinner5 ? spinner5 : !spinner5);
      windK = new Map([[`${scheduleT.size}`, termsZ.length]]);
      if (fast_) {
         break;
      }
   } while ((windK.size > 1) && fast_);
   while ((2 >> (Math.min(1, Math.abs(watchh.size)))) >= 2) {
       let dangerW = String.fromCharCode(114,95,52,57,95,112,101,101,114,105,100,0);
       let gmailO = String.fromCharCode(112,117,98,108,105,99,105,116,121,95,52,95,50,52,0);
       let collectionR: Array<any> = [357, 331, 912];
      let borderlessP = dangerW.length >= 8779555;
      do {
          let usernameo = 2.0;
          let otheru = 5.0;
         dangerW += "2";
         usernameo += 3;
         otheru /= Math.max(parseFloat(`${parseInt(`${usernameo}`)}`), 4);
         if (borderlessP) {
            break;
         }
      } while (borderlessP && (1 == collectionR.length));
      for (let p = 0; p < 3; p++) {
         dangerW = `${collectionR.length % 3}`;
      }
       let disconnected7 = String.fromCharCode(99,111,108,108,101,116,105,111,110,95,100,95,53,51,0);
       let launchw = String.fromCharCode(114,95,57,49,95,101,109,105,116,0);
         disconnected7 = "1";
      while (disconnected7.length > 4) {
         disconnected7 = `${2 | gmailO.length}`;
         break;
      }
      while (dangerW != String.fromCharCode(114,0)) {
          let adultt = 3.0;
          let countdown8 = true;
          let brightness1 = 5.0;
          let morev = String.fromCharCode(116,100,115,102,95,114,95,50,54,0);
         gmailO += "1";
         adultt *= ((countdown8 ? 1 : 2) << (Math.min(Math.abs(parseInt(`${brightness1}`)), 1)));
         countdown8 = 51.70 >= brightness1 && !countdown8;
         morev += `${((countdown8 ? 2 : 3) ^ 3)}`;
         break;
      }
         disconnected7 += `${1 << (Math.min(2, collectionR.length))}`;
      let checkbox0 = String.fromCharCode(104,48,118,110,51,50,52,53,0) == launchw;
      do {
         launchw += `${dangerW.length}`;
         if (checkbox0) {
            break;
         }
      } while (checkbox0 && (!launchw.includes(`${dangerW.length}`)));
         launchw = `${2 << (Math.min(1, dangerW.length))}`;
      watchh = new Map([[indicatorC, indicatorC.length]]);
      break;
   }
   let entryq = termsZ.length <= 6068303;
   do {
      termsZ = `${matches_.length}`;
      if (entryq) {
         break;
      }
   } while ((4 == (3 * matches_.length) || (matches_.length * 3) == 5) && entryq);
      termsZ = `${termsZ.length}`;
      indicatorC = `${indicatorC.length}`;
   for (let f = 0; f < 2; f++) {
      detailsA = [indicatorC.length];
   }
   if (2 >= (indicatorC.length >> (Math.min(Math.abs(4), 3))) && (matches_.length >> (Math.min(indicatorC.length, 1))) >= 4) {
      matches_ = [indicatorC.length / 2];
   }
   if ((combinedE.size / (Math.max(3, windK.size))) > 4 || 1 > (windK.size / (Math.max(4, 8)))) {
      windK.set(progressz, progressz.length % 1);
   }
      matches_.push(((controls0 ? 5 : 5) - matches_.length));
       let sheetH = String.fromCharCode(100,95,48,95,119,104,105,116,101,115,112,97,99,101,0);
          let assist1 = false;
          let hoverE: Array<any> = [452, 953, 935];
          let modityx: Array<any> = [530, 476];
         sheetH = "2";
         assist1 = hoverE.length >= modityx.length;
         hoverE.push(2);
         modityx.push(((assist1 ? 4 : 3) & modityx.length));
          let settingsa: Array<any> = [String.fromCharCode(120,95,55,54,0), String.fromCharCode(116,95,57,95,112,97,108,98,97,114,115,0), String.fromCharCode(111,95,52,51,95,112,111,121,116,109,0)];
         sheetH = `${sheetH.length}`;
         settingsa = [settingsa.length * 1];
      let refreshW = sheetH == String.fromCharCode(107,102,105,0);
      do {
         sheetH += `${sheetH.length}`;
         if (refreshW) {
            break;
         }
      } while (refreshW && (sheetH.length > 4));
      controls0 = 60 < matches_.length;
   while ((windK.size << (Math.min(Math.abs(combinedE.size), 2))) > 2 && (windK.size << (Math.min(Math.abs(combinedE.size), 4))) > 2) {
      combinedE = new Map([[progressz, (progressz == String.fromCharCode(86,0) ? progressz.length : (controls0 ? 1 : 5))]]);
      break;
   }
      windK = new Map([[`${combinedE.size}`, combinedE.size ^ detailsA.length]]);
   for (let q = 0; q < 2; q++) {
      matches_.push(termsZ.length);
   }
   let penaltyF = progressz.length <= 8866935;
   do {
       let bellU = String.fromCharCode(97,99,114,111,110,121,109,95,108,95,49,56,0);
       let fieldd = 3;
      if ((fieldd / (Math.max(10, bellU.length))) >= 5 && (bellU.length / 5) >= 5) {
         bellU += `${2 >> (Math.min(4, Math.abs(fieldd)))}`;
      }
          let field6 = String.fromCharCode(105,108,108,105,113,97,95,98,95,54,49,0);
          let roomU = String.fromCharCode(99,111,114,114,101,99,116,105,110,103,95,119,95,52,52,0);
         fieldd -= roomU.length << (Math.min(Math.abs(2), 4));
         field6 += "3";
         roomU += `${field6.length / (Math.max(8, field6.length))}`;
         fieldd <<= Math.min(bellU.length, 2);
       let descD = 2.0;
      if ((4 | fieldd) == 5 && (descD + 4.77) == 4.26) {
          let disconnected9 = 1.0;
          let charte = true;
         descD += parseFloat(`${parseInt(`${disconnected9}`) & 3}`);
         disconnected9 *= (parseFloat(`${2 * (charte ? 3 : 2)}`));
      }
         descD += parseFloat(`${fieldd}`);
      progressz = `${indicatorC.length}`;
      if (penaltyF) {
         break;
      }
   } while ((progressz.length >= termsZ.length) && penaltyF);
      indicatorC += `${parseInt(`${bootsplashr}`)}`;
       let uploadM = String.fromCharCode(116,114,97,100,105,116,105,111,110,97,108,95,97,95,53,51,0);
       let gmailOJ = 2;
       let analyticR = 0;
      for (let g = 0; g < 3; g++) {
          let nativeA = 5.0;
          let loginb = String.fromCharCode(100,95,49,48,48,95,115,112,101,114,97,116,111,114,0);
         gmailOJ -= gmailOJ;
         nativeA /= Math.max(1, (loginb == String.fromCharCode(75,0) ? parseInt(`${nativeA}`) : loginb.length));
      }
         analyticR -= gmailOJ;
      for (let m = 0; m < 2; m++) {
          let routerk = 4.0;
          let link5 = true;
         analyticR ^= 2 >> (Math.min(4, uploadM.length));
         routerk -= parseFloat(`${parseInt(`${routerk}`) * 2}`);
         link5 = !link5;
      }
      let controls0f = 9073048 >= gmailOJ;
      do {
         gmailOJ /= Math.max(3, uploadM.length - analyticR);
         if (controls0f) {
            break;
         }
      } while ((5 > gmailOJ) && controls0f);
       let singlem: Array<any> = [701, 546, 130];
       let singaporeF: Array<any> = [456, 807, 660];
      for (let q = 0; q < 2; q++) {
         uploadM = `${analyticR}`;
      }
       let animationa = true;
       let loadingj = false;
      if (2 == uploadM.length) {
         uploadM += `${uploadM.length + gmailOJ}`;
      }
         animationa = 73 <= analyticR;
      detailsA = [matches_.length / (Math.max(uploadM.length, 8))];
      indicatorC += `${windK.size}`;
      matches_ = [parseInt(`${bootsplashr}`)];

    return (
      <VipLoginAlertOverlay
        showCondition={showBecomeVIPOverlay}
        onClose={() => {
          setShowBecomeVIPOverlay(false);
        }}
      />
    );
  };

  useEffect(() => {


    
    if (KWConstants.isGuest(userState.user) && KWConstants.isVip(userState.user)) {
      setShowBecomeVIPOverlay(true)
    }
  }, []);


  
  
  
  
  


  return (
    <>
      <View style={{ paddingTop: insets.top }}>
        {!appState.isLoginModalShown && showBecomeVIPOverlay && (
          <View
            style={{
              height: "100%",
              width: "100%",
              position: "absolute",
              zIndex: 10000,
            }}
          >
            {renderOverlay()}
          </View>
        )}
        {/* <ScreenContainer> */}
        {/* <SafeAreaView> */}
        <ScrollView
          style={{ paddingHorizontal: 15 }}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={handleRefresh}
              tintColor="#FAC33D"
            />
          }
          showsVerticalScrollIndicator={false}
        >
          <View style={{ ...styles.topNav }}>
            <Text
              style={{
                ...textVariants.bigHeader,
                color: colors.text,
                fontSize: 22,
              }}
            >
              我的
            </Text>
          </View>
          { }
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => {

              if (!KWConstants.isLogin(userState.user)) {
                dispatch(showLoginAction());
                
                
                
              } else {
                navigation.navigate("个人中心");
              }
            }}
          >
            <View
              style={{
                ...styles.btnHeader,
              }}
            >
              <View style={{ flexDirection: "row" }}>
                {!KWConstants.isLogin(userState.user) || Platform.OS === "android" ? (
                  <ProfileIcon
                    style={{ color: colors.primary, width: 18, height: 18 }}
                  />
                ) : (
                  <FastImage
                    style={{
                      height: 36,
                      width: 36,
                      marginVertical: 2,
                    }}
                    resizeMode={"contain"}
                    source={require("@static/images/actionSaveBackward.png")}
                  />
                )}
                <View
                  style={{
                    flexDirection: "column",
                    flex: 1,
                    gap: 5,
                    justifyContent: "center",
                    paddingLeft: 12,
                  }}
                >
                  {KWConstants.isGuest(userState.user) && (
                    <>
                      <Text style={{ color: "#ffffff", fontSize: 14 }}>
                        游客ID:
                      </Text>
                      <Text style={{ color: "#ffffff", fontSize: 20 }}>
                        {deviceUniqueId.slice(0, 16)}
                      </Text>
                    </>
                  )}
                  {KWConstants.isLogin(userState.user) && (
                    <>
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "flex-start",
                          alignItems: "center",
                          paddingRight: 30,
                        }}
                      >
                        <Text
                          style={{
                            color: colors.text,
                            fontSize: 20,
                          }}
                          numberOfLines={1}
                          ellipsizeMode="tail"
                        >
                          {userState.user.userName}
                        </Text>


                        {KWConstants.isVip(userState.user) && (
                          <Image
                            style={styles.iconStyle}
                            source={require("@static/images/profile/configureSettingSina.png")}
                          />
                        )}
                      </View>

                      {/* {userState.userMemberExpired == '0' && (
                      <Text style={{fontSize: 14}}>VIP会员已经到期</Text>
                    )} */}
                      {KWConstants.isVip(userState.user) &&
                        (
                          <Text style={{ color: colors.yellow, fontSize: 14 }}>
                            VIP会员有效日期至{displayedDate}
                          </Text>
                        )}
                    </>
                  )}
                </View>

                <View
                  style={{
                    justifyContent: "center",
                  }}
                >
                  {KWConstants.isLogin(userState.user) && (
                    <EditIcn width={29} height={29} color={colors.muted} />
                  )}
                </View>
              </View>
              { }
              {KWConstants.isGuest(userState.user) &&
                !KWConstants.isVip(userState.user) && (
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      paddingTop: 10,
                      alignItems: "center",
                    }}
                  >
                    <Text style={{ color: "white" }}>
                      游客您好，登录可享有更多服务{" "}
                    </Text>

                    <View
                      style={{
                        backgroundColor: colors.primary,
                        paddingHorizontal: 16,
                        paddingVertical: 5,
                        borderRadius: 10,
                      }}
                    >
                      <Text style={{ color: "#000", fontWeight: "700" }}>
                        登录{" "}
                      </Text>
                    </View>
                  </View>
                )}

              { }
              {KWConstants.isGuest(userState.user) &&
                KWConstants.isVip(userState.user) && (
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      paddingTop: 10,
                      alignItems: "center",
                    }}
                  >
                    <Text style={{ color: colors.yellow }}>
                      VIP会员有效日期至{displayedDate}
                    </Text>

                    <View
                      style={{
                        backgroundColor: colors.primary,
                        paddingHorizontal: 16,
                        paddingVertical: 5,
                        borderRadius: 10,
                      }}
                    >
                      <Text style={{ color: "#000", fontWeight: "700" }}>
                        登录{" "}
                      </Text>
                    </View>
                  </View>
                )}
            </View>
          </TouchableOpacity>

          {bannerAd &&
            bannerAd.map((ad) => {
              return (
                <BannerContainer
                  bannerAd={ad}
                  key={ad.ads_id}
                  onMount={onBannerView}
                  onPress={onBannerPress}
                />
              );
            })}

          <View style={{ marginBottom: -30, flex: 3, paddingBottom: 120 }}>
            {SHOW_ZF_CONST && (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  gap: 10,
                }}
              >
                <TouchableOpacity
                  style={{
                    ...styles.btn,
                  }}
                  onPress={() => {
                    navigation.navigate("付费VIP");
                    
                    
                    
                    
                    
                    
                  }}
                >
                  <View style={styles.left}>
                    <View style={styles.icon}>
                      <VipIcon color={colors.yellow} width={icons.sizes.l} height={icons.sizes.l} />
                    </View>
                    <View style={{ gap: 5 }}>
                      <Text
                        style={{
                          ...textVariants.body,
                        }}
                      >
                        {highlightText(
                          KLongNext.instance.showBecomeVip
                            ? "成为VIP"
                            : "付费VIP",
                          ""
                        )}
                      </Text>
                      {KLongNext.instance.tabConfig != null &&
                        KLongNext.instance.len == 5 ? (
                        <Text
                          style={{
                            ...textVariants.small,
                            color: colors.button,
                          }}
                        >
                          去广告 看体育直播
                        </Text>
                      ) : (
                        <Text
                          style={{
                            ...textVariants.small,
                            color: colors.button,
                          }}
                        >
                          去广告
                        </Text>
                      )}
                    </View>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    ...styles.btn,
                  }}
                  onPress={() => {
                    navigation.navigate("邀请");
                  }}
                >
                  <View style={styles.left}>
                    <View style={styles.icon}>
                      <AddIcon width={icons.sizes.l} height={icons.sizes.l} />
                    </View>
                    <View style={{ gap: 5 }}>
                      <Text
                        style={{
                          ...textVariants.body,
                        }}
                      >
                        {highlightText("邀请好友", "")}
                      </Text>
                      <Text
                        style={{
                          ...textVariants.small,
                          color: colors.button,
                        }}
                      >
                        VIP奖励 享更多权益
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            )}

            {!SHOW_ZF_CONST && (
              <TouchableOpacity
                style={{
                  ...styles.btn,
                  backgroundColor: "#2d2e30",
                }}
                onPress={() => {
                  navigation.navigate("邀请");
                }}
              >
                <View style={styles.left}>
                  <View style={styles.icon}>
                    <VipIcon color={colors.yellow} width={icons.sizes.l} height={icons.sizes.l} />
                  </View>

                  <Text
                    style={{
                      ...textVariants.body,
                    }}
                  >
                    {highlightText("邀请好友获得VIP奖励，享更多权益", "VIP")}
                  </Text>
                </View>

                <VipArrow
                  width={icons.sizes.l}
                  height={icons.sizes.l}
                  color={colors.muted}
                />
              </TouchableOpacity>
            )}
            {/* 
            {Platform.OS === "android" && (
              <TouchableOpacity
                style={{
                  ...styles.btn,
                  backgroundColor: "#2d2e30",
                }}
                onPress={() => {
                  navigation.navigate("邀请");
                }}
              >
                <View style={styles.left}>
                  <View style={styles.icon}>
                    <VipIcon color={colors.yellow} width={icons.sizes.l} height={icons.sizes.l} />
                  </View>

                  <Text
                    style={{
                      ...textVariants.body,
                    }}
                  >
                    {highlightText("邀请好友获得VIP奖励，享更多权益", "VIP")}
                  </Text>
                </View>

                <VipArrow
                  width={icons.sizes.l}
                  height={icons.sizes.l}
                  color={colors.muted}
                />
              </TouchableOpacity>
            )} */}
            {DOWNLOAD_FEATURE_ENABLED && <ShowMoreButton
              text="我的下载"
              leftIcon={<DownloadIcon style={{ color: colors.button }} />}
              onPress={() => navigation.navigate("我的下载")}
            />}
            <ShowMoreButton
              text="我的收藏"
              leftIcon={<CollectionIcon style={{ color: colors.button }} />}
              onPress={() => navigation.navigate("我的收藏")}
            />
            {/* <ShowMoreButton
              text="我的下载"
              leftIcon={<DownloadIcon style={{color: colors.button}} />}
              onPress={() => setIsDialogOpen(true)}
            /> */}
            <ShowMoreButton
              text="播放历史"
              leftIcon={<HistoryIcon style={{ color: colors.button }} />}
              onPress={() => navigation.navigate("播放历史")}
            />
            <ShowMoreButton
              text="我要反馈"
              leftIcon={<FeedbackIcon style={{ color: colors.button }} />}
              onPress={() => navigation.navigate("反馈")}
            />
            <ShowMoreButton
              text="设置"
              leftIcon={<SettingsIcon style={{ color: colors.button }} />}
              onPress={() => navigation.navigate("设置")}
            />
            <ShowMoreButton
              text="关于我们"
              leftIcon={<InfoIcon style={{ color: colors.button }} />}
              onPress={() => navigation.navigate("关于我们")}
            />
            {/* <TouchableOpacity
              style={{
                ...styles.btn,
                backgroundColor: '#2b271e',
              }}
              onPress={() => setIsDialogOpen(true)}>
              <View style={styles.left}>
                <View style={{...styles.icon, paddingTop: 2}}>
                  <UpgradeIcon />
                </View>

                <Text
                  style={{
                    ...textVariants.body,
                    color: colors.primary,
                  }}>
                  一键升级至影视TV Pro
                </Text>
              </View>

              <RightArrow
                width={icons.sizes.l}
                height={icons.sizes.l}
                color={colors.muted}
              />
            </TouchableOpacity> */}
            {/* <ShowMoreButton text='分享App' disabled={true} leftIcon={<ShareIcon style={{ color: colors.button }} />} /> */}
          </View>

          <NotificationModal
            onConfirm={toggleOverlay}
            isVisible={isDialogOpen}
            title="功能尚未开放"
            subtitle1=""
            subtitle2=""
            subtitle3=""
          />
        </ScrollView>
        {/* </SafeAreaView> */}
        {/* </ScreenContainer> */}
      </View>
    </>
  );
}

export default memo(Profile);

const styles = StyleSheet.create({
  topNav: {
    paddingTop: 8,
    display: "flex",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  icon: {
    marginRight: 10,
    height: 24,
    width: 24,
  },
  left: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  btn: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: 15,
    paddingLeft: 15,
    paddingTop: 15,
    paddingBottom: 15,
    width: "100%",
    borderRadius: 10,
    marginTop: 20,
    backgroundColor: "#1A1E21",
    flex: 1,
  },
  btnHeader: {
    width: "100%",
    backgroundColor: "#1A1E21",
    borderRadius: 10,
    padding: 10,
  },
  highlightColor: {
    color: "#FAC33D", 
  },
  iconStyle: {
    height: 22,
    width: 22,
    marginLeft: 5,
  },
});
