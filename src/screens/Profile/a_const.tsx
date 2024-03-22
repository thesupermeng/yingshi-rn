import React, { useCallback, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ActivityIndicator,
  Modal,
} from "react-native";
import ScreenContainer from "../../components/container/ypy_fast";
import { RootStackScreenProps } from "@type/vrm_thailand";
import {
  useFocusEffect,
  useNavigation,
  useTheme,
} from "@react-navigation/native";

import TitleWithBackButtonHeader from "../../components/header/cio_news_types_header";
import { Button, Dialog } from "@rneui/themed";
import ShowMoreButton from "../../components/button/c_logo_countdown_button";
import NotificationModal from "../../components/modal/fc_shoot_bodan";
import MoreArrow from "@static/images/readBingMode.svg";
import ConfirmationModal from "../../components/modal/nw_topic";
import { useAppDispatch, useAppSelector, useSelector } from "@hooks/kg_index";
import { clearStorageMemory } from "@redux/actions/h_nalytics_typing";
import NetInfo, { NetInfoState } from "@react-native-community/netinfo";

import { removeUserAuthState } from "@redux/actions/rk_filed_watch";
import { changeScreenAction } from "@redux/actions/a_switch";
import { PSmall } from "@redux/fj_prediction_thailand";

import { APP_VERSION, IS_OTHER_SKIN } from "@utility/n_subs_interstitial";
import { GBYMiniCanvas } from "@redux/reducers/t_types";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { JTumbnailMatches } from "@utility/qot_stations_station";
import { clearMinivodApiCache } from "../../utils/iue_description_form";
import { THFirebase } from "../../api/kl_sheet";
import { addUserAuthState } from "@redux/actions/rk_filed_watch";
import { HDTGesturesList } from '@redux/reducers/f_gmail';
import { KWConstants } from "@models/kl_sheet";

export default ({ navigation }: RootStackScreenProps<"设置">) => {
  const { colors, textVariants, icons, spacing, dark } = useTheme();
  const [isVersionDialogOpen, setIsVersionDialogOpen] = useState(false);
  const [isClearDialogOpen, setIsClearDialogOpen] = useState(false);

  const [isLogoutDialogOpen, setIsLogoutDialogOpen] = useState(false);

  const [subtitle1, setSubtitle1] = useState("当前已是最新版本" + APP_VERSION);
  const [isBackdropVisible, setIsBackdropVisible] = useState(false); 

  const settingsReducer: GBYMiniCanvas = useAppSelector(
    ({ settingsReducer }: PSmall) => settingsReducer
  );

  const dispatch = useAppDispatch();

  const toggleLogoutDialog = () => {
       let sportsR: Map<any, any> = new Map([[String.fromCharCode(97,99,107,0),150], [String.fromCharCode(98,111,114,100,101,114,101,100,0),570], [String.fromCharCode(115,101,116,117,112,105,110,116,114,97,114,101,99,111,110,0),853]]);
    let currentO = 5;
    let scoreD = String.fromCharCode(111,110,116,114,111,108,0);
    let eventL = 2;
    let bingE = String.fromCharCode(115,117,103,103,101,115,116,105,111,110,0);
    let pressureU = String.fromCharCode(116,100,108,115,0);
    let emptyW = 0;
   for (let h = 0; h < 2; h++) {
      sportsR.set(`${emptyW}`, bingE.length);
   }
   for (let c = 0; c < 2; c++) {
      emptyW >>= Math.min(Math.abs(1), 2);
   }
       let hookD = true;
       let temperatureK = 1;
         temperatureK <<= Math.min(3, Math.abs(temperatureK));
      if (!hookD && (1 % (Math.max(1, temperatureK))) == 3) {
          let editL = String.fromCharCode(116,101,108,108,0);
          let middlewareW = String.fromCharCode(114,101,113,117,105,114,101,100,0);
          let renewX = 5.0;
          let roboto0 = String.fromCharCode(112,105,99,107,108,112,102,0);
         hookD = 26 <= temperatureK;
         editL += `${editL.length}`;
         middlewareW = "2";
         renewX /= Math.max(5, parseFloat(`${middlewareW.length ^ 2}`));
         roboto0 = `${middlewareW.length | editL.length}`;
      }
         hookD = temperatureK == 63 && hookD;
       let nativec = false;
       let currenta = true;
         nativec = (currenta ? hookD : !currenta);
         temperatureK <<= Math.min(Math.abs(1 % (Math.max(2, temperatureK))), 3);
      pressureU += `${eventL / (Math.max(1, bingE.length))}`;
   while (5 >= (1 ^ bingE.length)) {
       let launchz = String.fromCharCode(112,114,111,112,101,114,0);
       let filedn = false;
       let lessW = String.fromCharCode(98,108,97,107,101,115,0);
       let crownp: Map<any, any> = new Map([[String.fromCharCode(115,121,110,99,97,98,108,101,0),false ], [String.fromCharCode(99,111,110,102,111,114,109,115,0),true ], [String.fromCharCode(100,101,99,105,112,104,101,114,0),true ]]);
         crownp = new Map([[`${filedn}`, ((filedn ? 3 : 2))]]);
         lessW = `${(lessW == String.fromCharCode(72,0) ? crownp.size : lessW.length)}`;
         crownp = new Map([[`${filedn}`, lessW.length << (Math.min(Math.abs(2), 5))]]);
      let selectionO = String.fromCharCode(109,121,50,57,107,52,49,114,48,101,0) == launchz;
      do {
         launchz = `${(3 & (filedn ? 4 : 1))}`;
         if (selectionO) {
            break;
         }
      } while ((!launchz.includes(`${filedn}`)) && selectionO);
         filedn = (91 > (lessW.length | (filedn ? lessW.length : 91)));
      for (let y = 0; y < 3; y++) {
         crownp = new Map([[`${filedn}`, ((filedn ? 2 : 2) + 3)]]);
      }
          let sheetN: Array<any> = [291, 197];
          let loadingk = String.fromCharCode(115,101,114,118,101,114,115,0);
         launchz += `${3 | launchz.length}`;
         sheetN.push(3 >> (Math.min(2, sheetN.length)));
         loadingk = `${sheetN.length * loadingk.length}`;
         lessW = `${((filedn ? 1 : 2))}`;
       let episodes6 = String.fromCharCode(115,115,101,114,116,0);
       let firebaseZ = String.fromCharCode(97,115,115,111,99,0);
      let skipt = episodes6 == String.fromCharCode(106,117,115,0);
      do {
          let trophyj = true;
          let gesturesE = String.fromCharCode(114,116,99,119,101,98,0);
         episodes6 += `${launchz.length}`;
         trophyj = gesturesE.length == 9;
         gesturesE = `${gesturesE.length}`;
         if (skipt) {
            break;
         }
      } while (skipt && (launchz == episodes6));
      let anytimem = 7403144 <= lessW.length;
      do {
          let dataJ = 1;
          let backW = 1.0;
         lessW += `${parseInt(`${backW}`) * 1}`;
         dataJ >>= Math.min(5, Math.abs(dataJ >> (Math.min(1, Math.abs(dataJ)))));
         backW += dataJ;
         if (anytimem) {
            break;
         }
      } while (anytimem && (crownp.size >= lessW.length));
         lessW += `${firebaseZ.length << (Math.min(5, Math.abs(crownp.size)))}`;
      currentO >>= Math.min(Math.abs(((filedn ? 5 : 1))), 3);
      break;
   }
       let containere = 3.0;
       let viewerp = String.fromCharCode(109,101,116,114,105,99,115,0);
       let fastforwardQ = String.fromCharCode(113,117,97,100,115,0);
      while (!viewerp.endsWith(`${containere}`)) {
         viewerp += `${parseInt(`${containere}`) + 1}`;
         break;
      }
      while (3 <= (1 - viewerp.length) || 5 <= (1 << (Math.min(4, viewerp.length)))) {
         viewerp = "3";
         break;
      }
         viewerp += "1";
          let register_et: Map<any, any> = new Map([[String.fromCharCode(118,105,115,117,97,108,105,122,97,116,105,111,110,0),636], [String.fromCharCode(119,105,114,101,102,114,97,109,101,0),293]]);
         viewerp += "2";
         register_et.set(`${register_et.size}`, register_et.size << (Math.min(Math.abs(2), 1)));
      if (4.77 == (3.9 / (Math.max(4, containere))) || (containere / (Math.max(parseFloat(`${viewerp.length}`), 6))) == 3.9) {
         containere /= Math.max(parseFloat(`${parseInt(`${containere}`)}`), 5);
      }
          let fillH: Map<any, any> = new Map([[String.fromCharCode(113,117,111,116,105,101,110,116,0),String.fromCharCode(105,110,102,111,114,109,97,116,105,111,110,0)], [String.fromCharCode(100,121,110,97,109,105,99,115,0),String.fromCharCode(114,101,118,101,114,115,101,0)], [String.fromCharCode(97,112,112,115,102,108,121,101,114,95,55,95,50,57,0),String.fromCharCode(114,116,112,114,101,99,101,105,118,101,114,0)]]);
          let typesS = String.fromCharCode(100,101,99,111,109,112,114,101,115,115,0);
         fastforwardQ = `${viewerp.length}`;
         fillH.set(typesS, typesS.length - fillH.size);
         containere /= Math.max(1, parseFloat(`${2 * fastforwardQ.length}`));
      while ((containere - parseFloat(`${viewerp.length}`)) == 4.61) {
          let descj = String.fromCharCode(109,107,118,119,114,105,116,101,114,0);
         containere -= parseFloat(`${fastforwardQ.length | 3}`);
         descj += `${descj.length}`;
         break;
      }
          let hejiP = 4.0;
         fastforwardQ = `${parseInt(`${containere}`)}`;
         hejiP += parseFloat(`${2}`);
      eventL |= eventL;
   for (let x = 0; x < 1; x++) {
       let renewz = String.fromCharCode(109,97,116,99,104,101,115,0);
       let trophyT = true;
       let completeT = String.fromCharCode(105,112,114,101,100,0);
       let popupv = String.fromCharCode(105,110,118,97,114,105,97,110,116,115,0);
       let schedule1 = String.fromCharCode(114,101,112,101,97,116,0);
      while (schedule1.length >= 1) {
         popupv += `${(1 & (trophyT ? 2 : 1))}`;
         break;
      }
      let lighto = 5630450 <= completeT.length;
      do {
         completeT += `${(String.fromCharCode(56,0) == completeT ? (trophyT ? 5 : 2) : completeT.length)}`;
         if (lighto) {
            break;
         }
      } while ((5 > schedule1.length && completeT != String.fromCharCode(53,0)) && lighto);
         schedule1 = "2";
          let sheet1 = false;
          let clubt = 5.0;
         popupv += `${((sheet1 ? 5 : 1) >> (Math.min(Math.abs(parseInt(`${clubt}`)), 5)))}`;
      while (popupv.endsWith(`${schedule1.length}`)) {
         popupv = `${popupv.length}`;
         break;
      }
      while (renewz != schedule1) {
         schedule1 += `${2 % (Math.max(5, popupv.length))}`;
         break;
      }
         trophyT = !trophyT;
       let topicM = 2.0;
      let configureY = 9333963.0 >= topicM;
      do {
          let signinupA = 3.0;
          let watchm = 2.0;
         topicM -= parseFloat(`${parseInt(`${watchm}`)}`);
         signinupA /= Math.max(2 * parseInt(`${signinupA}`), 4);
         if (configureY) {
            break;
         }
      } while (configureY && (schedule1.length > parseInt(`${topicM}`)));
          let full2 = 1.0;
          let settingst = false;
          let hejiZ = 5.0;
         trophyT = !settingst || 28.80 > full2;
         full2 *= parseFloat(`${parseInt(`${hejiZ}`)}`);
         settingst = hejiZ <= hejiZ;
         trophyT = topicM > parseFloat(`${schedule1.length}`);
          let long_jx = 0;
         renewz = `${parseInt(`${topicM}`)}`;
         long_jx <<= Math.min(1, Math.abs(long_jx));
         topicM /= Math.max(parseFloat(`${parseInt(`${topicM}`) - 3}`), 5);
          let found3: Array<any> = [26, 816, 348];
          let pressurew = false;
         trophyT = topicM > 45.21;
         found3 = [found3.length ^ 2];
         pressurew = found3.length < 17;
          let servicea = 0;
         popupv = "1";
         servicea %= Math.max(1, servicea & 2);
      bingE = "3";
   }
       let layoutA = String.fromCharCode(115,104,97,100,111,119,0);
       let selectedF: Map<any, any> = new Map([[String.fromCharCode(99,111,112,121,114,105,103,104,116,0),String.fromCharCode(117,110,109,97,112,102,105,108,101,0)], [String.fromCharCode(116,114,105,110,103,0),String.fromCharCode(119,95,50,95,112,97,114,109,115,0)], [String.fromCharCode(99,111,108,111,114,0),String.fromCharCode(105,97,100,115,116,120,95,114,95,57,51,0)]]);
      while (3 <= (layoutA.length - selectedF.size) || (3 - selectedF.size) <= 3) {
         selectedF = new Map([[`${selectedF.size}`, layoutA.length - selectedF.size]]);
         break;
      }
      let customo = 7941763 <= layoutA.length;
      do {
         layoutA += "2";
         if (customo) {
            break;
         }
      } while (customo && ((selectedF.size / (Math.max(6, layoutA.length))) <= 2));
         layoutA = `${2 >> (Math.min(4, layoutA.length))}`;
         selectedF.set(`${layoutA}`, selectedF.size);
       let pingb = String.fromCharCode(106,99,111,110,102,105,103,0);
       let combineq = String.fromCharCode(100,97,114,116,115,0);
      while (pingb.endsWith(`${layoutA.length}`)) {
         layoutA += "3";
         break;
      }
      eventL /= Math.max(2, eventL ^ 2);
      pressureU = `${scoreD.length}`;
      scoreD += `${scoreD.length - 1}`;
   for (let w = 0; w < 2; w++) {
       let ynewsK = true;
       let fastO = 3.0;
      let back2 = ynewsK ? !ynewsK : ynewsK;
      do {
          let logoutH: Array<any> = [String.fromCharCode(99,111,109,112,117,116,101,0), String.fromCharCode(98,111,117,110,100,0), String.fromCharCode(102,105,108,109,0)];
          let bingJ = false;
         ynewsK = 63.82 <= fastO;
         logoutH.push(((bingJ ? 2 : 3) - 2));
         bingJ = !bingJ;
         if (back2) {
            break;
         }
      } while (back2 && (!ynewsK));
         fastO -= 3 & parseInt(`${fastO}`);
          let penaltyj = String.fromCharCode(116,104,114,101,97,100,115,0);
          let expandm = true;
          let dicea = String.fromCharCode(112,97,100,0);
         fastO /= Math.max(3, 3 >> (Math.min(Math.abs(parseInt(`${fastO}`)), 2)));
         penaltyj = `${dicea.length * penaltyj.length}`;
         expandm = penaltyj.length > 45;
         dicea = `${dicea.length | 2}`;
      if (3.39 <= (3.13 - fastO)) {
         fastO /= Math.max((parseInt(`${fastO}`) - (ynewsK ? 5 : 4)), 2);
      }
         ynewsK = !ynewsK;
       let uploadL = String.fromCharCode(97,117,100,105,111,112,114,111,99,0);
      pressureU += `${bingE.length}`;
   }
   for (let i = 0; i < 2; i++) {
      bingE += `${(bingE == String.fromCharCode(88,0) ? eventL : bingE.length)}`;
   }
   if ((sportsR.size * 3) > 4 || (sportsR.size * bingE.length) > 3) {
      bingE += `${currentO}`;
   }
      eventL |= pressureU.length ^ 2;
      pressureU += `${3 ^ bingE.length}`;
   for (let l = 0; l < 3; l++) {
      sportsR.set(`${currentO}`, currentO / (Math.max(emptyW, 5)));
   }
      sportsR.set(pressureU, currentO << (Math.min(Math.abs(2), 2)));
      bingE = "2";
      emptyW /= Math.max(3, emptyW / 2);

    setIsLogoutDialogOpen(!isLogoutDialogOpen);
  };

  const toggleVersionDialog = () => {
       let confirmation5: Map<any, any> = new Map([[String.fromCharCode(98,105,116,114,101,100,117,99,116,105,111,110,0),String.fromCharCode(115,116,114,105,110,103,0)], [String.fromCharCode(104,105,103,104,98,105,116,100,101,112,116,104,0),String.fromCharCode(104,101,120,100,117,109,112,0)]]);
    let expiredJ = String.fromCharCode(108,117,104,110,0);
    let playE = false;
    let profileK: Array<any> = [8, 910, 144];
    let backc = true;
    let clubt = 1;
    let penaltyI = String.fromCharCode(118,116,97,115,107,113,117,101,117,101,0);
    let placeholderN = String.fromCharCode(101,118,101,114,121,111,110,101,0);
    let fastforwardb = String.fromCharCode(101,112,122,115,0);
    let chata = 0.0;
   while (expiredJ.length < confirmation5.size) {
      confirmation5.set(`${backc}`, 2);
      break;
   }
   let updatesL = clubt >= 9703397;
   do {
      clubt ^= fastforwardb.length;
      if (updatesL) {
         break;
      }
   } while (((clubt >> (Math.min(Math.abs(2), 4))) < 3) && updatesL);
   if (!playE) {
      profileK = [1 << (Math.min(3, placeholderN.length))];
   }
   if (backc || (confirmation5.size ^ 4) <= 5) {
       let unread0 = String.fromCharCode(100,101,109,97,110,100,0);
       let condensedH = 4.0;
       let renewN: Array<any> = [48, 89, 397];
         condensedH += parseFloat(`${2}`);
       let bellO = 1.0;
      if (2 >= (5 & unread0.length)) {
          let bodanZ = String.fromCharCode(109,101,109,111,114,121,0);
          let telegramp = true;
          let fastforward3: Array<any> = [237, 227, 293];
          let q_centerb = 5;
          let questu = 5.0;
         unread0 = `${unread0.length}`;
         bodanZ = `${q_centerb}`;
         telegramp = (fastforward3.length & q_centerb) == 25;
         fastforward3 = [3];
         questu -= (parseFloat(`${(telegramp ? 4 : 1) % (Math.max(8, q_centerb))}`));
      }
      for (let q = 0; q < 2; q++) {
         renewN.push(unread0.length);
      }
         renewN = [parseInt(`${bellO}`) | renewN.length];
          let volumeL = String.fromCharCode(100,111,99,117,109,101,110,116,0);
          let accepted7 = String.fromCharCode(101,115,115,105,111,110,0);
         renewN.push(parseInt(`${bellO}`) - accepted7.length);
         volumeL = `${volumeL.length | 1}`;
         accepted7 += `${2 ^ volumeL.length}`;
         renewN.push(1);
         renewN = [unread0.length];
       let overq = String.fromCharCode(115,116,114,101,97,109,105,110,102,111,0);
      backc = 11 >= confirmation5.size || fastforwardb.length >= 11;
   }
   for (let d = 0; d < 1; d++) {
      backc = clubt > 71;
   }
      placeholderN = `${(2 << (Math.min(1, Math.abs((playE ? 4 : 4)))))}`;
   let expand_ = clubt <= 7031326;
   do {
      clubt -= fastforwardb.length;
      if (expand_) {
         break;
      }
   } while (expand_ && (1 >= (confirmation5.size / (Math.max(3, clubt))) && 2 >= (clubt / 1)));
   if (4 > (1 >> (Math.min(4, Math.abs(confirmation5.size))))) {
      confirmation5.set(placeholderN, ((playE ? 5 : 1)));
   }
      playE = placeholderN.length == 98 && backc;
      confirmation5.set(placeholderN, 1);
   if (backc || 2 > expiredJ.length) {
       let transferP = 3.0;
       let singleo = 5;
       let baiduK = 5.0;
      while (5.58 >= (baiduK - 1.30) && 5.2 >= (baiduK - 1.30)) {
         singleo ^= 1 ^ parseInt(`${baiduK}`);
         break;
      }
      backc = !playE;
      transferP *= parseInt(`${transferP}`);
   }
      clubt |= 3 ^ confirmation5.size;
      playE = !expiredJ.includes(`${backc}`);
      fastforwardb = `${penaltyI.length}`;
       let desc7 = 2.0;
       let viewsn = true;
          let currentf = String.fromCharCode(97,97,99,100,101,99,0);
         viewsn = String.fromCharCode(50,0) == currentf;
      let sentryP = viewsn ? !viewsn : viewsn;
      do {
         viewsn = desc7 >= 71.81;
         if (sentryP) {
            break;
         }
      } while (sentryP && (3.86 >= desc7 || (desc7 + 3.86) >= 2.85));
      while ((4.81 - desc7) < 5.75 || 4.81 < desc7) {
         viewsn = desc7 > 86.41 || !viewsn;
         break;
      }
      while (4.12 <= (desc7 * 5.74)) {
         viewsn = !viewsn;
         break;
      }
       let temperaturel = 1;
         temperaturel += (parseInt(`${desc7}`) + (viewsn ? 3 : 5));
      clubt &= ((playE ? 1 : 1) & (viewsn ? 1 : 3));
   while ((2 % (Math.max(4, confirmation5.size))) > 4) {
       let paginationR = 5.0;
         paginationR /= Math.max(parseFloat(`${parseInt(`${paginationR}`)}`), 3);
         paginationR += parseFloat(`${parseInt(`${paginationR}`)}`);
         paginationR /= Math.max(parseFloat(`${2}`), 4);
      expiredJ = `${penaltyI.length}`;
      break;
   }
       let dragN: Array<any> = [177, 558, 391];
       let favoritei: Array<any> = [String.fromCharCode(115,112,97,99,105,110,103,115,0), String.fromCharCode(114,119,110,100,0), String.fromCharCode(97,110,109,114,0)];
      while (1 == (dragN.length % (Math.max(10, favoritei.length)))) {
         favoritei.push(favoritei.length);
         break;
      }
          let zhuboK: Map<any, any> = new Map([[String.fromCharCode(97,100,100,105,116,105,118,101,0),String.fromCharCode(110,101,105,103,104,98,111,114,0)], [String.fromCharCode(107,97,116,0),String.fromCharCode(112,114,101,118,105,101,119,115,0)]]);
         dragN.push(favoritei.length);
         zhuboK.set(`${zhuboK.size}`, zhuboK.size << (Math.min(2, Math.abs(zhuboK.size))));
          let flyerg: Map<any, any> = new Map([[String.fromCharCode(108,111,97,100,115,0),130], [String.fromCharCode(112,97,110,110,105,110,103,0),515]]);
         dragN.push(3);
         flyerg.set(`${flyerg.size}`, flyerg.size ^ 1);
      while (2 >= favoritei.length) {
         favoritei.push(1);
         break;
      }
       let pingd = false;
       let window_6zU = false;
       let bodanv: Array<any> = [String.fromCharCode(112,97,103,101,104,97,115,104,0), String.fromCharCode(114,104,115,0), String.fromCharCode(97,100,100,105,116,105,111,110,115,0)];
       let acceptedA: Array<any> = [560, 369];
      backc = fastforwardb == String.fromCharCode(52,0);
   let awayY = expiredJ == String.fromCharCode(108,116,56,102,54,107,103,97,0);
   do {
      expiredJ = `${3 % (Math.max(7, expiredJ.length))}`;
      if (awayY) {
         break;
      }
   } while (awayY && (penaltyI == String.fromCharCode(84,0)));
   for (let z = 0; z < 1; z++) {
      clubt *= clubt;
   }

    setIsVersionDialogOpen(!isVersionDialogOpen);
  };
  const toggleClearDialog = () => {
       let chinaZ = String.fromCharCode(101,108,115,0);
    let constantsx = String.fromCharCode(102,111,114,101,97,99,104,0);
    let halfv: Array<any> = [368, 193, 556];
    let loginv: Map<any, any> = new Map([[String.fromCharCode(115,117,98,118,105,101,119,0),true ], [String.fromCharCode(117,110,98,111,120,101,100,0),true ], [String.fromCharCode(100,105,115,116,111,114,116,105,111,110,0),true ]]);
    let indicator3: Array<any> = [865, 146];
    let nextm = 1.0;
    let shoot3: Array<any> = [230, 943, 253];
    let o_playerE = 3;
   while (5 >= (indicator3.length + 3)) {
      indicator3 = [loginv.size * 1];
      break;
   }
   while (4 >= (shoot3.length | halfv.length) || (4 | halfv.length) >= 1) {
      shoot3 = [constantsx.length + parseInt(`${nextm}`)];
      break;
   }
      chinaZ += `${indicator3.length / 1}`;
      loginv.set(`${halfv.length}`, halfv.length - 3);
   let viewerv = shoot3.length <= 6149283;
   do {
      shoot3.push(2);
      if (viewerv) {
         break;
      }
   } while ((shoot3.includes(nextm)) && viewerv);
      constantsx += `${3 | halfv.length}`;
   for (let j = 0; j < 3; j++) {
      halfv.push(loginv.size);
   }
      loginv = new Map([[`${loginv.size}`, loginv.size - 3]]);
      halfv = [shoot3.length % 1];
      nextm -= 1 / (Math.max(2, shoot3.length));
   let umengk = 7259064 <= shoot3.length;
   do {
       let homeh: Map<any, any> = new Map([[String.fromCharCode(112,97,110,111,114,97,109,97,0),String.fromCharCode(120,95,55,48,0)], [String.fromCharCode(117,110,101,100,105,116,97,98,108,101,0),String.fromCharCode(115,117,112,112,111,114,116,115,0)]]);
       let notificationu = String.fromCharCode(100,101,110,111,114,109,97,108,0);
       let subsn = String.fromCharCode(118,115,110,112,114,105,110,116,102,0);
       let componentR = String.fromCharCode(111,118,101,114,114,105,100,100,101,110,0);
       let filterB = String.fromCharCode(112,97,110,105,99,0);
      let canvasD = notificationu == String.fromCharCode(110,105,57,116,122,104,95,119,0);
      do {
         notificationu = `${subsn.length}`;
         if (canvasD) {
            break;
         }
      } while (canvasD && (3 > (homeh.size >> (Math.min(Math.abs(1), 4))) && 4 > (1 >> (Math.min(4, Math.abs(homeh.size))))));
      for (let l = 0; l < 3; l++) {
          let activeZ = 1.0;
         notificationu = `${3 - notificationu.length}`;
         activeZ += parseFloat(`${3 >> (Math.min(Math.abs(parseInt(`${activeZ}`)), 4))}`);
      }
       let modelsA = String.fromCharCode(100,101,108,111,103,111,0);
         notificationu += `${modelsA.length % (Math.max(subsn.length, 5))}`;
         modelsA += "3";
         notificationu += "2";
      if (!subsn.includes(`${componentR.length}`)) {
         componentR += `${1 & componentR.length}`;
      }
      let successX = String.fromCharCode(56,117,55,53,111,0) == componentR;
      do {
         componentR = "3";
         if (successX) {
            break;
         }
      } while (successX && (componentR.length > subsn.length));
         componentR += "2";
         homeh.set(componentR, subsn.length ^ 2);
      for (let e = 0; e < 2; e++) {
         subsn = "3";
      }
         componentR += `${componentR.length << (Math.min(Math.abs(3), 5))}`;
         homeh = new Map([[modelsA, modelsA.length & notificationu.length]]);
         homeh.set(componentR, componentR.length);
         subsn = `${componentR.length}`;
      shoot3.push((String.fromCharCode(54,0) == chinaZ ? chinaZ.length : filterB.length));
      if (umengk) {
         break;
      }
   } while (umengk && (indicator3.length < 5));
       let projectv = 0;
       let sorty = String.fromCharCode(119,114,105,116,116,101,110,95,56,95,55,49,0);
       let g_centerD = String.fromCharCode(112,97,116,99,104,115,101,116,0);
      while (2 == (projectv << (Math.min(Math.abs(1), 5)))) {
         g_centerD = `${projectv % 3}`;
         break;
      }
         projectv /= Math.max(4, 2 & g_centerD.length);
      loginv = new Map([[`${loginv.size}`, (String.fromCharCode(83,0) == chinaZ ? loginv.size : chinaZ.length)]]);
      loginv.set(`${nextm}`, indicator3.length);
      halfv = [(String.fromCharCode(121,0) == chinaZ ? chinaZ.length : indicator3.length)];
   for (let a = 0; a < 3; a++) {
      shoot3.push(halfv.length % 2);
   }
   while (shoot3.length <= parseInt(`${nextm}`)) {
      nextm *= shoot3.length;
      break;
   }
   for (let m = 0; m < 3; m++) {
       let modeA = String.fromCharCode(108,97,110,103,0);
       let containerS = String.fromCharCode(102,108,101,120,105,98,108,101,0);
       let downloadedq = String.fromCharCode(104,101,108,112,0);
       let rankO = String.fromCharCode(113,117,97,110,116,105,122,97,116,105,111,110,95,48,95,49,53,0);
      for (let u = 0; u < 3; u++) {
         containerS += `${(String.fromCharCode(79,0) == modeA ? modeA.length : rankO.length)}`;
      }
      for (let e = 0; e < 1; e++) {
         rankO = `${2 * containerS.length}`;
      }
      if (rankO.length >= modeA.length) {
         modeA += `${rankO.length / (Math.max(modeA.length, 6))}`;
      }
         downloadedq += `${downloadedq.length}`;
      if (downloadedq.length > rankO.length) {
          let dangerG: Map<any, any> = new Map([[String.fromCharCode(98,108,117,101,0),String.fromCharCode(114,101,112,111,114,116,101,100,0)], [String.fromCharCode(102,95,56,0),String.fromCharCode(109,106,112,101,103,100,101,99,0)], [String.fromCharCode(109,105,110,105,109,105,122,101,0),String.fromCharCode(98,117,102,115,0)]]);
          let dialog8: Array<any> = [70, 400, 187];
         rankO = `${modeA.length + rankO.length}`;
         dangerG.set(`${dialog8.length}`, 3);
         dialog8.push(dangerG.size / (Math.max(2, 1)));
      }
      nextm += modeA.length;
   }

    setIsClearDialogOpen(!isClearDialogOpen);
  };
  const navigator = useNavigation();
  const [isOffline, setIsOffline] = useState(false);

  useEffect(() => {
    setIsOffline(settingsReducer.isOffline);
  }, []);

  useFocusEffect(
    useCallback(() => {
      if (!settingsReducer.isOffline) {
        setIsOffline(settingsReducer.isOffline);
      } else {
        return () => {
          setIsOffline(settingsReducer.isOffline);
        };
      }
    }, [settingsReducer.isOffline])
  );

  const guestLoginInit = async () => {
       let gmaila = true;
    let w_counti = String.fromCharCode(104,105,103,104,108,105,103,104,116,105,110,103,0);
    let nextE = 0.0;
    let smallF = 2.0;
    let private_840: Array<any> = [249, 742];
    let clock1 = 0;
    let macau0 = String.fromCharCode(116,101,115,116,0);
    let matchesp: Array<any> = [37, 934, 435];
    let t_lockU = 5;
    let casting3 = String.fromCharCode(116,95,56,57,95,103,101,111,116,97,103,115,0);
    let orientationa = 1.0;
   for (let o = 0; o < 2; o++) {
       let actionsm: Map<any, any> = new Map([[String.fromCharCode(108,115,98,102,117,108,108,0),true ], [String.fromCharCode(109,105,99,0),true ], [String.fromCharCode(103,105,118,101,110,0),false ]]);
       let loginP = String.fromCharCode(111,98,117,115,0);
         loginP += `${actionsm.size}`;
         loginP += `${actionsm.size + 3}`;
      for (let n = 0; n < 2; n++) {
         loginP += `${actionsm.size - 2}`;
      }
      if ((loginP.length | 5) >= 4 || (loginP.length | actionsm.size) >= 5) {
          let window_fE = 2;
          let downloadedl = 4;
         loginP = `${window_fE % 2}`;
         window_fE &= downloadedl;
      }
      if (4 <= actionsm.size) {
         loginP = "2";
      }
      for (let e = 0; e < 3; e++) {
         loginP = `${loginP.length / 1}`;
      }
      private_840 = [2];
   }
      macau0 = `${clock1 + 3}`;
      nextE *= (macau0 == String.fromCharCode(67,0) ? macau0.length : parseInt(`${nextE}`));
   while (w_counti.length <= 1) {
      gmaila = private_840.length == 8 && clock1 == 8;
      break;
   }
      private_840.push(1);
   if (private_840.length <= 1) {
       let awayw = String.fromCharCode(97,117,116,111,0);
       let placementL: Array<any> = [496, 558, 721];
       let annere: Array<any> = [String.fromCharCode(105,109,112,111,114,116,101,100,0), String.fromCharCode(101,120,99,101,101,100,105,110,103,0)];
          let overlayV = 4.0;
          let comment0 = 5.0;
         placementL.push(1);
         overlayV += parseFloat(`${2 & parseInt(`${comment0}`)}`);
         comment0 /= Math.max(1, parseInt(`${overlayV}`));
          let albumq = 4.0;
         placementL.push(awayw.length * 3);
         albumq /= Math.max(parseInt(`${albumq}`) & parseInt(`${albumq}`), 1);
         placementL = [annere.length];
       let l_positionU = 1.0;
       let policyF = 1.0;
      if (annere.includes(policyF)) {
         annere.push(1 >> (Math.min(Math.abs(parseInt(`${policyF}`)), 5)));
      }
         policyF *= 1 << (Math.min(5, placementL.length));
          let footballM: Array<any> = [String.fromCharCode(117,110,107,101,121,101,100,0), String.fromCharCode(110,111,114,109,97,108,0)];
          let lineT = String.fromCharCode(97,117,116,111,99,97,112,105,116,97,108,105,122,97,116,105,111,110,0);
         annere = [2];
         footballM = [footballM.length];
         lineT = `${footballM.length | lineT.length}`;
      let nterstitialv = 8467213 >= annere.length;
      do {
         annere = [placementL.length];
         if (nterstitialv) {
            break;
         }
      } while (((annere.length % (Math.max(4, awayw.length))) < 4) && nterstitialv);
      if (parseInt(`${l_positionU}`) == placementL.length) {
         l_positionU /= Math.max(annere.length - 2, 4);
      }
      private_840.push(macau0.length % 3);
   }
   for (let d = 0; d < 2; d++) {
      w_counti += `${private_840.length / (Math.max(macau0.length, 2))}`;
   }
       let fieldc = 3.0;
       let circlev: Array<any> = [String.fromCharCode(112,111,115,105,116,105,111,110,0), String.fromCharCode(100,105,115,116,105,110,99,116,0), String.fromCharCode(109,105,110,105,0)];
       let gray_ = String.fromCharCode(103,114,97,100,108,101,95,98,95,57,55,0);
         gray_ += `${circlev.length >> (Math.min(gray_.length, 1))}`;
          let updatesb = 5;
          let langkeyO = 1.0;
          let grays = 3.0;
         circlev = [parseInt(`${fieldc}`) * parseInt(`${langkeyO}`)];
         updatesb %= Math.max(updatesb, 4);
         langkeyO += parseFloat(`${2}`);
         grays *= parseInt(`${grays}`) ^ updatesb;
      let tail1 = String.fromCharCode(110,103,104,54,112,117,55,56,100,111,0) == gray_;
      do {
         gray_ += `${gray_.length + 2}`;
         if (tail1) {
            break;
         }
      } while ((4 == gray_.length) && tail1);
       let modelsd = String.fromCharCode(110,117,109,0);
       let storeW = String.fromCharCode(115,99,97,110,0);
       let basketballU = String.fromCharCode(111,95,50,57,95,116,101,109,112,110,97,109,101,0);
       let stationi = String.fromCharCode(109,117,116,117,97,108,0);
         fieldc *= parseFloat(`${circlev.length + parseInt(`${fieldc}`)}`);
      while ((5 / (Math.max(6, gray_.length))) > 2) {
         circlev.push(basketballU.length);
         break;
      }
         gray_ = "1";
         circlev = [2 + circlev.length];
      smallF *= parseFloat(`${clock1}`);

    const user = await THFirebase.guestLogin();

   for (let k = 0; k < 3; k++) {
       let expandu = false;
       let bodanY = 0;
       let u_titleg = true;
       let w_imagez = String.fromCharCode(116,114,97,110,115,108,97,116,101,100,0);
       let hejif = String.fromCharCode(102,97,110,99,121,0);
      let popupW = 7074925 <= w_imagez.length;
      do {
         w_imagez = `${(hejif == String.fromCharCode(67,0) ? (u_titleg ? 1 : 4) : hejif.length)}`;
         if (popupW) {
            break;
         }
      } while (popupW && (!hejif.endsWith(w_imagez)));
         expandu = (hejif.length % (Math.max(9, bodanY))) > 2;
      for (let q = 0; q < 3; q++) {
         w_imagez = `${bodanY}`;
      }
      while (hejif == String.fromCharCode(120,0)) {
         w_imagez = `${((expandu ? 3 : 5) | bodanY)}`;
         break;
      }
         expandu = !expandu && !u_titleg;
      while (hejif.length <= 1) {
         u_titleg = (expandu ? u_titleg : expandu);
         break;
      }
         hejif += `${(w_imagez.length * (u_titleg ? 1 : 2))}`;
         hejif = `${(w_imagez == String.fromCharCode(106,0) ? (u_titleg ? 4 : 5) : w_imagez.length)}`;
      if (w_imagez != String.fromCharCode(65,0)) {
         hejif = `${bodanY % (Math.max(8, hejif.length))}`;
      }
       let update_7c = true;
       let canvasx = false;
      if (u_titleg && w_imagez.length >= 1) {
         w_imagez = `${2 + bodanY}`;
      }
          let forwardZ = 0.0;
          let configureZ = String.fromCharCode(100,101,115,101,108,101,99,116,101,100,0);
          let k_imageN = false;
         expandu = !update_7c;
         forwardZ -= 2 << (Math.min(2, configureZ.length));
         configureZ = `${configureZ.length}`;
         k_imageN = !configureZ.includes(`${k_imageN}`);
         update_7c = (((!update_7c ? hejif.length : 62) * hejif.length) == 62);
      if (update_7c) {
          let bottomK = String.fromCharCode(112,97,99,107,101,116,105,122,97,116,105,111,110,0);
          let transfera = String.fromCharCode(112,108,97,110,101,115,0);
          let whistlex = 3.0;
          let selectionD: Map<any, any> = new Map([[String.fromCharCode(112,115,101,117,100,111,0),154], [String.fromCharCode(99,111,117,110,116,100,111,119,110,0),31], [String.fromCharCode(120,112,97,116,104,0),124]]);
         update_7c = (16 >= ((!update_7c ? 16 : hejif.length) & hejif.length));
         bottomK = `${3 - parseInt(`${whistlex}`)}`;
         transfera += `${transfera.length >> (Math.min(5, Math.abs(parseInt(`${whistlex}`))))}`;
         selectionD = new Map([[`${selectionD.size}`, 3]]);
      }
          let transferB = 5.0;
          let interstitial7 = false;
          let register_bk = String.fromCharCode(112,114,111,109,105,115,101,115,0);
         update_7c = interstitial7;
         transferB *= parseFloat(`${1 >> (Math.min(5, Math.abs(parseInt(`${transferB}`))))}`);
         register_bk += `${register_bk.length * 1}`;
      gmaila = 58.14 >= nextE;
   }
      private_840 = [private_840.length / (Math.max(macau0.length, 3))];
      gmaila = (private_840.length ^ matchesp.length) < 30;
   if (clock1 <= 3) {
       let shrink0 = String.fromCharCode(112,111,114,116,101,114,0);
       let t_viewN = 5.0;
       let producta: Map<any, any> = new Map([[String.fromCharCode(114,101,99,111,110,110,101,99,116,105,110,103,0),true ], [String.fromCharCode(118,101,114,116,105,99,97,108,108,121,0),true ]]);
       let matchj = 4.0;
       let loginC: Map<any, any> = new Map([[String.fromCharCode(116,114,101,97,100,0),961], [String.fromCharCode(110,112,114,111,98,101,0),365], [String.fromCharCode(105,110,116,101,114,110,97,116,105,111,110,97,108,0),187]]);
         producta = new Map([[`${producta.size}`, parseInt(`${matchj}`) ^ producta.size]]);
      let whiteP = t_viewN <= 7593053.0;
      do {
         t_viewN += parseFloat(`${parseInt(`${matchj}`)}`);
         if (whiteP) {
            break;
         }
      } while ((t_viewN <= 1.82) && whiteP);
         matchj += parseFloat(`${1}`);
      let usernamev = matchj >= 9537264.0;
      do {
         matchj += parseFloat(`${2}`);
         if (usernamev) {
            break;
         }
      } while ((Array.from(producta.keys()).includes(`${matchj}`)) && usernamev);
      for (let h = 0; h < 1; h++) {
         matchj -= parseFloat(`${parseInt(`${t_viewN}`)}`);
      }
         t_viewN *= parseFloat(`${loginC.size ^ 3}`);
      let sheet4 = t_viewN <= 7556959.0;
      do {
         t_viewN /= Math.max(2, parseFloat(`${producta.size}`));
         if (sheet4) {
            break;
         }
      } while (sheet4 && (5.80 < (t_viewN + parseFloat(`${shrink0.length}`)) && 1 < (shrink0.length + parseInt(`${t_viewN}`))));
         matchj += parseFloat(`${3}`);
      for (let t = 0; t < 1; t++) {
         matchj -= parseFloat(`${shrink0.length % (Math.max(3, 4))}`);
      }
      for (let o = 0; o < 2; o++) {
         t_viewN /= Math.max(parseFloat(`${parseInt(`${t_viewN}`) ^ 2}`), 3);
      }
      if (1 == (parseInt(`${matchj}`) * producta.size)) {
         matchj /= Math.max(3, parseFloat(`${1}`));
      }
         producta = new Map([[`${producta.size}`, shrink0.length - 3]]);
      while ((matchj / 5.5) <= 4.58 && 5 <= (loginC.size - 2)) {
         loginC.set(`${t_viewN}`, (shrink0 == String.fromCharCode(114,0) ? shrink0.length : parseInt(`${t_viewN}`)));
         break;
      }
      let emptyx = 7978427.0 <= t_viewN;
      do {
         t_viewN *= parseFloat(`${producta.size}`);
         if (emptyx) {
            break;
         }
      } while (((3.57 + t_viewN) >= 5.46) && emptyx);
         matchj += parseFloat(`${1 << (Math.min(5, Math.abs(producta.size)))}`);
      private_840 = [parseInt(`${nextE}`)];
   }
       let privilegeV: Map<any, any> = new Map([[String.fromCharCode(97,108,105,97,115,101,115,95,105,95,55,56,0),556], [String.fromCharCode(102,117,108,108,115,99,114,101,101,110,0),552]]);
         privilegeV.set(`${privilegeV.size}`, privilegeV.size - 3);
         privilegeV.set(`${privilegeV.size}`, privilegeV.size ^ privilegeV.size);
      for (let b = 0; b < 1; b++) {
         privilegeV.set(`${privilegeV.size}`, 2 | privilegeV.size);
      }
      nextE -= w_counti.length;
   while (!gmaila) {
       let filledw = false;
       let twitter4 = String.fromCharCode(105,99,109,112,0);
       let home2 = 5;
       let membershipv = 4;
       let minivodS = String.fromCharCode(112,105,120,100,101,115,99,0);
       let whitep = 1.0;
         whitep -= parseFloat(`${minivodS.length >> (Math.min(Math.abs(1), 4))}`);
      while (twitter4.includes(`${filledw}`)) {
          let statisticsL = 3.0;
          let singleX = 4.0;
          let fastm = String.fromCharCode(112,97,114,116,105,116,105,111,110,105,110,103,0);
          let closeq = 2.0;
          let whiteu = String.fromCharCode(110,105,108,115,0);
         filledw = twitter4.length <= 9 && !filledw;
         statisticsL -= parseFloat(`${1 - parseInt(`${singleX}`)}`);
         singleX -= parseFloat(`${parseInt(`${closeq}`)}`);
         fastm = `${whiteu.length}`;
         whiteu += "2";
         break;
      }
      if ((5 << (Math.min(5, Math.abs(home2)))) >= 4) {
          let rankg = String.fromCharCode(108,105,118,101,100,0);
          let network8: Array<any> = [793, 296, 634];
          let hookN = String.fromCharCode(99,111,117,110,116,115,0);
          let whitev = String.fromCharCode(100,99,116,0);
          let sentryt = 5.0;
         membershipv -= rankg.length / (Math.max(whitev.length, 1));
         rankg = `${hookN.length % (Math.max(2, 4))}`;
         network8 = [2 ^ hookN.length];
         whitev += `${3 + parseInt(`${sentryt}`)}`;
         sentryt /= Math.max(4, parseFloat(`${hookN.length >> (Math.min(Math.abs(2), 5))}`));
      }
          let confirmationV = 2;
          let reportm = true;
          let relatedz = 3.0;
         home2 %= Math.max(3, (String.fromCharCode(107,0) == minivodS ? minivodS.length : twitter4.length));
         confirmationV *= 1;
         reportm = !reportm && 66 < confirmationV;
         relatedz -= parseFloat(`${2 % (Math.max(confirmationV, 1))}`);
       let trophyU = 4.0;
       let linkv = 2.0;
         trophyU -= parseFloat(`${twitter4.length ^ 1}`);
      for (let s = 0; s < 3; s++) {
         filledw = membershipv <= parseInt(`${linkv}`);
      }
      let homeH = 6952264.0 <= linkv;
      do {
          let bing3 = 4;
          let stepK = String.fromCharCode(97,116,116,114,97,99,116,105,111,110,0);
          let interstitial4 = false;
          let anythinkK = true;
         linkv += (parseFloat(`${(interstitial4 ? 1 : 3)}`));
         bing3 >>= Math.min(Math.abs(((anythinkK ? 2 : 3) ^ bing3)), 5);
         stepK += "1";
         interstitial4 = bing3 <= stepK.length;
         if (homeH) {
            break;
         }
      } while ((!filledw || 2.61 <= (linkv / 5.4)) && homeH);
      let whistleL = home2 <= 8662591;
      do {
          let shirtU = 2;
          let sportsd = 4;
          let rulesQ = 4;
          let filedu: Map<any, any> = new Map([[String.fromCharCode(112,114,101,109,117,108,116,105,112,108,105,101,100,0),953], [String.fromCharCode(116,105,109,101,105,110,116,101,114,118,97,108,0),734]]);
          let chinab: Array<any> = [String.fromCharCode(108,97,116,101,114,0), String.fromCharCode(111,114,100,101,114,116,121,112,101,0), String.fromCharCode(115,101,110,115,105,116,105,118,105,116,121,0)];
         home2 <<= Math.min(Math.abs(3), 5);
         shirtU -= sportsd * 3;
         sportsd %= Math.max(5, rulesQ & 2);
         rulesQ -= shirtU % 2;
         filedu = new Map([[`${chinab.length}`, sportsd]]);
         chinab = [3];
         if (whistleL) {
            break;
         }
      } while ((home2 == membershipv) && whistleL);
         minivodS = "3";
      for (let b = 0; b < 1; b++) {
         linkv *= parseFloat(`${home2}`);
      }
      let borderlessX = 7273080 >= minivodS.length;
      do {
         minivodS += "3";
         if (borderlessX) {
            break;
         }
      } while (((2 & minivodS.length) <= 2 && (minivodS.length & membershipv) <= 2) && borderlessX);
       let listL = 1.0;
          let rankz = 1.0;
          let searchv = String.fromCharCode(99,111,114,100,0);
         minivodS += `${home2 * 1}`;
         rankz /= Math.max(4, parseFloat(`${2}`));
         searchv += `${parseInt(`${rankz}`) << (Math.min(Math.abs(1), 2))}`;
      w_counti = `${parseInt(`${nextE}`)}`;
      break;
   }
   for (let q = 0; q < 1; q++) {
       let countryU = true;
       let right9 = 4.0;
       let type_mbX = 3.0;
      let adultH = right9 >= 9526585.0;
      do {
          let humidity1: Map<any, any> = new Map([[String.fromCharCode(112,114,111,120,121,95,118,95,57,52,0),157], [String.fromCharCode(110,101,97,114,101,115,116,0),391]]);
         right9 -= (parseFloat(`${parseInt(`${right9}`) + (countryU ? 5 : 5)}`));
         humidity1.set(`${humidity1.size}`, humidity1.size | humidity1.size);
         if (adultH) {
            break;
         }
      } while (adultH && ((right9 + 4.94) > 3.97 || 4.94 > right9));
         countryU = 31.60 > (type_mbX + right9);
      private_840 = [2];
   }
       let weibou = String.fromCharCode(111,98,115,101,114,118,101,114,115,0);
      let questx = 7788910 <= weibou.length;
      do {
         weibou += `${1 ^ weibou.length}`;
         if (questx) {
            break;
         }
      } while (questx && (weibou == String.fromCharCode(79,0)));
          let downloadingQ = 1.0;
          let share4 = 3.0;
          let dialogT = 3.0;
         weibou += "1";
         downloadingQ /= Math.max(1, parseFloat(`${parseInt(`${share4}`)}`));
         dialogT *= parseFloat(`${parseInt(`${downloadingQ}`) - parseInt(`${share4}`)}`);
      for (let v = 0; v < 2; v++) {
          let cornerN = String.fromCharCode(119,104,101,101,108,0);
          let downloaderX = 0.0;
         weibou += "2";
         cornerN = `${parseInt(`${downloaderX}`)}`;
         downloaderX += parseInt(`${downloaderX}`);
      }
      macau0 += `${parseInt(`${nextE}`) >> (Math.min(3, Math.abs(2)))}`;

    await dispatch(addUserAuthState(user));
  };

  
  
  
  const userState = useSelector<HDTGesturesList>('userReducer');
  return (
    <ScreenContainer>
      <View
        style={{ gap: spacing.m, justifyContent: "space-between", flex: 1 }}
      >
        <View>
          <TitleWithBackButtonHeader title="设置" />

          <NotificationModal
            onConfirm={toggleVersionDialog}
            isVisible={isVersionDialogOpen && !isOffline}
            title="检查更新"
            subtitle1={subtitle1}
            confirmationText="我知道了"
          />

          <NotificationModal
            isVisible={isVersionDialogOpen && isOffline}
            onConfirm={toggleVersionDialog}
            title="无法检测网络，请稍后再试"
          />

          <ConfirmationModal
            onConfirm={() => {
              dispatch(clearStorageMemory());
              toggleClearDialog();
            }}
            onCancel={toggleClearDialog}
            isVisible={isClearDialogOpen}
            title="空间清理"
            subtitle="清除所有的缓存"
            confirmationText="清除"
            confirmationColor={IS_OTHER_SKIN ? colors.error : undefined}
          />

          <ConfirmationModal
            onConfirm={async () => {
              

              setIsBackdropVisible(true); 
              toggleLogoutDialog();
              await AsyncStorage.removeItem("showAds");
              await dispatch(removeUserAuthState());
              clearMinivodApiCache();

              await guestLoginInit();
              setIsBackdropVisible(false); 
              navigator.navigate("Home", {
                screen: "Profile",
              });

              GoogleSignin.signOut();
            }}
            onCancel={toggleLogoutDialog}
            isVisible={isLogoutDialogOpen}
            title="退出登录"
            subtitle="您是否确定要退出登录？"
            confirmationText="确定"
          />

          { }
          <View>
            <View>
              <ShowMoreButton text="空间清理" onPress={toggleClearDialog} />
              <ShowMoreButton
                text="检查更新"
                onPress={toggleVersionDialog}
                rightIcon={
                  <View style={styles.icon}>
                    <Text
                      style={{
                        ...textVariants.small,
                        paddingBottom: 3,
                        color: colors.muted,
                      }}
                    >
                      当前版本{APP_VERSION}
                    </Text>
                    <MoreArrow
                      width={icons.sizes.l}
                      height={icons.sizes.l}
                      color={colors.muted}
                    />
                  </View>
                }
              />
            </View>
          </View>
        </View>
        {KWConstants.isLogin(userState.user) && (
          <TouchableOpacity onPress={toggleLogoutDialog}>
            <View
              style={{
                backgroundColor: dark ? "#1d2023" : '#D9D9D9',
                width: "100%",
                height: 50,
                borderRadius: 8,
                borderWidth: 0,
                justifyContent: "center",
                alignItems: "center",
                marginBottom: 30,
              }}
            >
              <Text style={{ color: "#FF3C3C" }}>退出登录</Text>
            </View>
          </TouchableOpacity>
        )}
      </View>

      { }
      <Modal
        transparent
        animationType="slide"
        visible={isBackdropVisible}
        onRequestClose={() => setIsBackdropVisible(false)}
      >
        <View style={styles.modalContainer}>
          <ActivityIndicator size="large" color="#FAC33D" />
        </View>
      </Modal>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  topNav: {
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    display: "flex",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    flexDirection: "row",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  submitBtn: {
    borderRadius: 10,
  },
  icon: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  overlay: {
    borderRadius: 14,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});
