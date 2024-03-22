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
import { useNavigation } from "@react-navigation/native";

import Orientation from "react-native-orientation-locker";
import ProfileIcon from "@static/images/leaguePrivate_l.svg";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import MoreArrow from "@static/images/readBingMode.svg";
import EditIcn from "@static/images/profile/roomStreaming.svg";

import VipIcon from "@static/images/playlistInjury.svg";
import VipArrow from "@static/images/modalUserReminder.svg";
import AddIcon from "@static/images/vip/thailandApple.svg";

import {
  hideBottomSheetAction,
  removeScreenAction,
  showLoginAction,
} from "@redux/actions/a_switch";
import NotificationModal from "../../components/modal/fc_shoot_bodan";
import { updateUserAuth, updateUserReferral } from "@redux/actions/rk_filed_watch";
import ExpiredOverlay from "../../components/modal/rv_borderless";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { KLongNext } from "../../../../z_search";
import { SHOW_ZF_CONST, UMENG_CHANNEL } from "@utility/n_subs_interstitial";
import FastImage from "../../components/common/gwi_with";
import { THFirebase } from "@api";
import { HDTGesturesList } from "@redux/reducers/f_gmail";
import { KWConstants } from "@models/kl_sheet";

function Profile({ navigation, route }: BottomTabScreenProps<any>) {
  const navigator = useNavigation();
  const { colors, textVariants, icons, spacing } = useTheme();
  const dispatch = useAppDispatch();
  const [refreshing, setRefreshing] = useState(false);
  const [displayedDate, setDisplayedDate] = useState("");
  const userState = useSelector<HDTGesturesList>('userReducer');
  
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const toggleOverlay = () => {
       let assisty = String.fromCharCode(116,112,105,100,95,97,95,52,50,0);
    let actionsy = String.fromCharCode(97,112,112,114,101,99,97,116,105,111,110,95,102,95,53,52,0);
    let changeC = 0.0;
    let jcopy_mx: Array<any> = [285, 655, 55];
    let commonP = 0.0;
    let eighteenG = false;
    let hookM = 5.0;
    let whiteE: Map<any, any> = new Map([[String.fromCharCode(111,112,101,110,115,101,97,95,98,95,52,51,0),true ], [String.fromCharCode(121,95,52,49,95,99,97,116,99,104,0),true ], [String.fromCharCode(109,97,110,105,102,101,115,116,95,116,95,54,55,0),true ]]);
    let container1 = 5.0;
    let shrinkx = String.fromCharCode(101,95,52,49,95,110,111,97,115,109,0);
    let iconY = String.fromCharCode(101,95,50,57,95,98,110,109,112,105,0);
    let bottomv: Array<any> = [46, 820, 876];
    let giftI = String.fromCharCode(114,100,102,116,95,101,95,49,57,0);
      eighteenG = assisty.length < actionsy.length;
      hookM /= Math.max(2, parseInt(`${commonP}`));
      iconY += `${jcopy_mx.length + parseInt(`${hookM}`)}`;
   if ((actionsy.length & 2) >= 2) {
      container1 += parseInt(`${container1}`) << (Math.min(Math.abs(3), 5));
   }
   let filledi = commonP >= 5244946.0;
   do {
      commonP += (parseFloat(`${String.fromCharCode(117,0) == assisty ? parseInt(`${commonP}`) : assisty.length}`));
      if (filledi) {
         break;
      }
   } while ((3.25 <= (5.46 * commonP) || 1 <= (parseInt(`${commonP}`) * 3)) && filledi);
   let thumbnailR = whiteE.size <= 8946950;
   do {
      whiteE = new Map([[`${bottomv.length}`, parseInt(`${container1}`) << (Math.min(bottomv.length, 3))]]);
      if (thumbnailR) {
         break;
      }
   } while (thumbnailR && ((2 - whiteE.size) > 3));
      hookM /= Math.max((assisty == String.fromCharCode(48,0) ? assisty.length : jcopy_mx.length), 3);
   while ((commonP * 4.29) <= 5.79 || commonP <= 4.29) {
      commonP *= parseFloat(`${parseInt(`${changeC}`)}`);
      break;
   }
      shrinkx = `${bottomv.length >> (Math.min(iconY.length, 5))}`;
   while ((bottomv.length * shrinkx.length) > 3 || 2 > (3 * shrinkx.length)) {
      bottomv = [jcopy_mx.length];
      break;
   }
      whiteE = new Map([[iconY, iconY.length % (Math.max(shrinkx.length, 2))]]);
       let type_h1d: Array<any> = [842, 434];
      while (type_h1d.includes(type_h1d.length)) {
         type_h1d.push(type_h1d.length);
         break;
      }
      for (let w = 0; w < 2; w++) {
          let typesA = true;
          let reportg = 2.0;
          let faviconT = String.fromCharCode(98,95,54,57,95,104,101,97,118,121,0);
          let robotoi: Map<any, any> = new Map([[String.fromCharCode(97,95,49,56,95,104,105,115,116,111,103,114,97,109,0),714], [String.fromCharCode(114,97,110,115,105,116,105,111,110,95,114,95,55,56,0),619]]);
          let optionsN = String.fromCharCode(98,105,110,100,108,105,115,116,95,119,95,56,48,0);
         type_h1d.push((parseInt(`${reportg}`) ^ (typesA ? 1 : 1)));
         typesA = faviconT == String.fromCharCode(69,0);
         reportg += robotoi.size >> (Math.min(optionsN.length, 1));
         faviconT += `${optionsN.length}`;
         robotoi.set(`${faviconT}`, faviconT.length);
      }
      while ((3 | type_h1d.length) >= 3) {
          let modalQ: Array<any> = [620, 4, 406];
          let scheduleg = String.fromCharCode(97,99,113,117,97,110,116,95,57,95,54,57,0);
          let analytics8 = true;
          let adulth = String.fromCharCode(112,111,119,95,112,95,57,57,0);
         type_h1d.push((scheduleg == String.fromCharCode(66,0) ? (analytics8 ? 4 : 2) : scheduleg.length));
         modalQ = [1];
         analytics8 = adulth == String.fromCharCode(106,0);
         adulth += "1";
         break;
      }
      assisty += `${jcopy_mx.length ^ 3}`;
      hookM *= parseInt(`${changeC}`) % 3;
   let overlayg = assisty == String.fromCharCode(102,115,119,55,0);
   do {
      assisty = `${bottomv.length}`;
      if (overlayg) {
         break;
      }
   } while (overlayg && (assisty.length == 2));
      eighteenG = 8 <= jcopy_mx.length;
       let favoriteX: Array<any> = [729, 429, 590];
       let dropdownX = String.fromCharCode(115,116,114,116,111,108,108,95,118,95,54,48,0);
       let areaQ = String.fromCharCode(113,95,55,52,95,98,111,117,110,100,105,110,103,0);
         favoriteX = [1 << (Math.min(5, dropdownX.length))];
         dropdownX += `${1 + favoriteX.length}`;
      while (areaQ == String.fromCharCode(82,0)) {
         dropdownX = `${areaQ.length * favoriteX.length}`;
         break;
      }
      for (let h = 0; h < 1; h++) {
         favoriteX = [3];
      }
          let emptya: Map<any, any> = new Map([[String.fromCharCode(115,95,55,57,95,115,101,101,100,0),586], [String.fromCharCode(107,95,57,56,95,112,114,101,115,117,109,101,0),107], [String.fromCharCode(102,95,50,55,95,103,119,101,105,0),743]]);
         dropdownX = `${dropdownX.length}`;
         emptya.set(`${emptya.size}`, emptya.size);
      let brightnessR = 6711622 <= favoriteX.length;
      do {
         favoriteX.push(areaQ.length);
         if (brightnessR) {
            break;
         }
      } while (((dropdownX.length ^ 3) < 5) && brightnessR);
      let arrowL = 5469859 <= favoriteX.length;
      do {
          let actionsa: Map<any, any> = new Map([[String.fromCharCode(99,104,97,114,103,101,95,98,95,52,54,0),375], [String.fromCharCode(98,95,53,53,95,115,121,110,116,104,101,115,105,122,101,100,0),62]]);
          let switch_46v = 1.0;
         favoriteX = [parseInt(`${switch_46v}`) ^ 2];
         actionsa.set(`${actionsa.size}`, actionsa.size);
         switch_46v /= Math.max(actionsa.size ^ actionsa.size, 1);
         if (arrowL) {
            break;
         }
      } while ((favoriteX.length >= areaQ.length) && arrowL);
         favoriteX.push(dropdownX.length >> (Math.min(2, areaQ.length)));
         dropdownX += `${favoriteX.length - areaQ.length}`;
      commonP += parseFloat(`${giftI.length - 2}`);
   if (hookM <= assisty.length) {
       let updatesT = String.fromCharCode(111,95,56,95,114,101,112,114,101,115,101,110,116,97,116,105,111,110,115,0);
       let const_f6 = 4;
       let taiwanb = String.fromCharCode(109,115,115,100,115,112,95,57,95,54,57,0);
       let xnewsJ = 0.0;
          let fastforwardW = 1;
          let h_imageE: Map<any, any> = new Map([[String.fromCharCode(114,103,98,114,103,98,95,53,95,50,56,0),805], [String.fromCharCode(109,111,100,101,95,52,95,57,57,0),191]]);
         const_f6 *= const_f6 & taiwanb.length;
         fastforwardW -= fastforwardW;
         h_imageE = new Map([[`${h_imageE.size}`, fastforwardW * h_imageE.size]]);
          let photoY = String.fromCharCode(118,95,57,55,95,102,111,108,108,111,119,0);
          let episodesX = 0.0;
         const_f6 /= Math.max(taiwanb.length, 2);
         photoY += "3";
         episodesX *= 2;
      let countdowne = 7435848 <= const_f6;
      do {
          let chatv = String.fromCharCode(112,114,111,99,99,101,115,115,95,118,95,51,49,0);
         const_f6 |= (chatv == String.fromCharCode(67,0) ? taiwanb.length : chatv.length);
         if (countdowne) {
            break;
         }
      } while ((const_f6 >= 2) && countdowne);
         const_f6 /= Math.max(parseInt(`${xnewsJ}`) | taiwanb.length, 4);
      let x_playerV = updatesT == String.fromCharCode(101,56,117,0);
      do {
         updatesT += `${updatesT.length / (Math.max(taiwanb.length, 9))}`;
         if (x_playerV) {
            break;
         }
      } while ((1 >= (updatesT.length | 2) || 2.59 >= (xnewsJ / (Math.max(1.42, 8)))) && x_playerV);
         const_f6 /= Math.max(1, (String.fromCharCode(74,0) == taiwanb ? parseInt(`${xnewsJ}`) : taiwanb.length));
      for (let q = 0; q < 1; q++) {
         xnewsJ -= updatesT.length;
      }
         const_f6 *= taiwanb.length;
         taiwanb = `${const_f6}`;
      while (xnewsJ >= const_f6) {
         xnewsJ += updatesT.length * const_f6;
         break;
      }
       let sinaq = String.fromCharCode(110,95,54,55,95,97,114,114,97,121,115,105,122,101,0);
       let soundi = String.fromCharCode(99,95,52,57,95,109,112,106,112,101,103,0);
       let gmail0 = String.fromCharCode(98,95,50,49,95,99,111,114,114,101,99,116,101,100,0);
      assisty += `${2 | parseInt(`${commonP}`)}`;
   }
      whiteE.set(`${eighteenG}`, 1 - parseInt(`${commonP}`));
   if (2 == shrinkx.length) {
       let album_ = String.fromCharCode(109,118,100,97,116,97,95,103,95,52,49,0);
      while (album_.length == 4) {
         album_ += `${album_.length}`;
         break;
      }
         album_ += `${album_.length}`;
      for (let o = 0; o < 1; o++) {
          let middlewareo: Array<any> = [143, 949, 646];
          let style_ = String.fromCharCode(118,95,56,53,95,101,120,116,114,97,112,111,108,97,116,101,0);
          let filled7: Array<any> = [String.fromCharCode(121,95,50,48,95,118,101,114,116,101,120,0), String.fromCharCode(116,95,51,49,95,102,97,100,101,100,0)];
          let nextO = 0.0;
         album_ = `${3 * album_.length}`;
         middlewareo.push((String.fromCharCode(71,0) == style_ ? style_.length : middlewareo.length));
         filled7 = [filled7.length];
         nextO *= parseFloat(`${1}`);
      }
      commonP += parseFloat(`${album_.length}`);
   }
   let chinar = 6279117 >= giftI.length;
   do {
       let collectionJ = true;
       let episodey = String.fromCharCode(115,111,117,114,99,101,115,95,101,95,55,57,0);
       let yellowt = false;
       let countdownV = String.fromCharCode(111,117,98,108,101,95,107,95,54,52,0);
      let analytic2 = yellowt ? !yellowt : yellowt;
      do {
          let predictionX = 2;
         yellowt = countdownV.startsWith(`${predictionX}`);
         if (analytic2) {
            break;
         }
      } while ((yellowt) && analytic2);
       let miniy: Array<any> = [812, 238];
      for (let b = 0; b < 1; b++) {
          let hookss = 4.0;
          let h_lockN = 1.0;
         miniy.push(3);
         hookss += parseInt(`${h_lockN}`);
      }
      let shirt1 = countdownV.length <= 9727462;
      do {
         countdownV += "3";
         if (shirt1) {
            break;
         }
      } while ((episodey == String.fromCharCode(56,0) || countdownV != String.fromCharCode(116,0)) && shirt1);
       let sentryi = String.fromCharCode(106,95,52,50,95,103,97,105,110,115,0);
      for (let q = 0; q < 3; q++) {
          let forwardP = 0;
          let calendaru = 4;
          let long_90v = 4;
         sentryi += `${calendaru / (Math.max(4, episodey.length))}`;
         forwardP /= Math.max(forwardP << (Math.min(Math.abs(long_90v), 5)), 4);
         calendaru += long_90v - 1;
      }
      for (let n = 0; n < 2; n++) {
         miniy.push((sentryi.length >> (Math.min(1, Math.abs((yellowt ? 3 : 3))))));
      }
         episodey = "1";
          let twitteru: Map<any, any> = new Map([[String.fromCharCode(104,95,55,52,95,104,117,101,115,0),675], [String.fromCharCode(115,100,107,95,101,95,52,54,0),943]]);
          let alerta: Array<any> = [709, 484];
          let videop = String.fromCharCode(115,116,114,112,116,105,109,101,95,110,95,51,53,0);
         sentryi += `${alerta.length}`;
         twitteru = new Map([[`${twitteru.size}`, (videop == String.fromCharCode(72,0) ? videop.length : twitteru.size)]]);
         alerta.push(2);
      for (let o = 0; o < 3; o++) {
          let updatesg = 3;
          let emojig: Map<any, any> = new Map([[String.fromCharCode(106,95,54,48,95,109,97,114,107,101,116,0),708], [String.fromCharCode(119,97,114,110,95,117,95,51,48,0),565], [String.fromCharCode(115,101,101,107,105,110,103,95,57,95,49,53,0),836]]);
          let fastforwardJ: Array<any> = [193, 39, 110];
          let footballo = String.fromCharCode(122,95,54,50,95,117,118,114,100,0);
         episodey += `${(String.fromCharCode(72,0) == episodey ? episodey.length : fastforwardJ.length)}`;
         updatesg >>= Math.min(3, Math.abs(emojig.size));
         emojig.set(footballo, 2);
         fastforwardJ = [1];
         footballo = `${1 ^ updatesg}`;
      }
      let unselectedW = sentryi == String.fromCharCode(116,121,101,116,111,116,110,104,0);
      do {
          let tooltipsc: Map<any, any> = new Map([[String.fromCharCode(109,111,100,105,102,121,95,116,95,52,53,0),330], [String.fromCharCode(115,95,53,55,95,119,101,108,115,100,101,99,100,101,109,111,0),815], [String.fromCharCode(111,95,53,50,95,114,101,99,101,112,116,105,111,110,0),354]]);
          let unreadb: Map<any, any> = new Map([[String.fromCharCode(121,95,51,49,95,119,97,108,108,112,97,112,101,114,115,0),213], [String.fromCharCode(106,114,110,108,95,55,95,57,56,0),168], [String.fromCharCode(116,121,112,101,115,95,109,95,50,52,0),948]]);
          let middlewarey: Array<any> = [String.fromCharCode(115,116,97,108,101,95,51,95,49,48,0), String.fromCharCode(114,95,52,95,114,101,115,97,109,112,108,101,107,104,122,0), String.fromCharCode(109,105,115,115,101,100,95,121,95,49,52,0)];
          let castingi = 3.0;
          let reminderA: Array<any> = [923, 866, 665];
         sentryi = `${miniy.length & countdownV.length}`;
         tooltipsc = new Map([[`${reminderA.length}`, parseInt(`${castingi}`)]]);
         unreadb = new Map([[`${middlewarey.length}`, 3 | middlewarey.length]]);
         castingi *= parseFloat(`${unreadb.size | 3}`);
         reminderA = [tooltipsc.size];
         if (unselectedW) {
            break;
         }
      } while ((collectionJ || 4 < sentryi.length) && unselectedW);
      if (!countdownV.includes(`${episodey.length}`)) {
          let cornerv = 5;
         episodey = "2";
         cornerv /= Math.max(3, 1);
      }
      giftI += `${parseInt(`${commonP}`)}`;
      if (chinar) {
         break;
      }
   } while ((giftI.length <= shrinkx.length) && chinar);
   if (5 > jcopy_mx.length) {
      bottomv.push((String.fromCharCode(99,0) == iconY ? iconY.length : giftI.length));
   }
   for (let z = 0; z < 1; z++) {
      changeC += parseInt(`${hookM}`);
   }
   for (let f = 0; f < 2; f++) {
      iconY += `${2 << (Math.min(4, bottomv.length))}`;
   }
   while (3.93 < (2.51 + changeC)) {
       let videoh = String.fromCharCode(121,95,51,48,95,113,99,101,108,112,100,97,116,97,0);
          let handlery = 3.0;
          let leagueQ: Map<any, any> = new Map([[String.fromCharCode(99,95,51,53,95,112,114,111,98,108,101,109,0),18], [String.fromCharCode(116,105,109,115,116,97,109,112,95,114,95,50,51,0),646]]);
         videoh += `${parseInt(`${handlery}`)}`;
         handlery /= Math.max(4, leagueQ.size);
         leagueQ = new Map([[`${leagueQ.size}`, 1 + leagueQ.size]]);
      let phoneg = videoh.length >= 5317098;
      do {
         videoh = "2";
         if (phoneg) {
            break;
         }
      } while (phoneg && (!videoh.endsWith(videoh)));
      for (let r = 0; r < 1; r++) {
          let sheetZ = 1.0;
          let plus8 = String.fromCharCode(101,95,52,52,95,109,111,109,101,110,116,115,0);
          let delegate_d7A = true;
         videoh += `${videoh.length}`;
         sheetZ *= parseInt(`${sheetZ}`) & plus8.length;
         plus8 = `${plus8.length}`;
         delegate_d7A = 95.66 > sheetZ;
      }
      changeC += 1;
      break;
   }
   let networkE = eighteenG ? !eighteenG : eighteenG;
   do {
       let basketballB = 3;
       let shoot4 = String.fromCharCode(113,95,54,53,95,99,104,101,99,107,108,105,110,101,0);
         shoot4 += `${shoot4.length}`;
         basketballB |= shoot4.length;
      while (basketballB <= shoot4.length) {
         basketballB >>= Math.min(5, Math.abs(shoot4.length - 3));
         break;
      }
      let starS = 6612564 >= basketballB;
      do {
         basketballB >>= Math.min(Math.abs(3), 5);
         if (starS) {
            break;
         }
      } while ((shoot4.length >= 4) && starS);
         shoot4 += "2";
      for (let o = 0; o < 2; o++) {
         shoot4 += `${(String.fromCharCode(54,0) == shoot4 ? shoot4.length : basketballB)}`;
      }
      eighteenG = 30 >= whiteE.size;
      if (networkE) {
         break;
      }
   } while (networkE && (hookM > 3.20));
   let filterR = 8540137.0 <= changeC;
   do {
      changeC /= Math.max(5, (String.fromCharCode(103,0) == shrinkx ? shrinkx.length : giftI.length));
      if (filterR) {
         break;
      }
   } while (((changeC - 2.93) <= 2.20 || (actionsy.length - parseInt(`${changeC}`)) <= 5) && filterR);
   let logoutK = hookM <= 5017411.0;
   do {
      hookM -= 1;
      if (logoutK) {
         break;
      }
   } while ((3 == (giftI.length % (Math.max(5, 5))) && 5 == (giftI.length & 5)) && logoutK);
      shrinkx = `${actionsy.length - 3}`;

    setIsDialogOpen(!isDialogOpen);
  };

  const refreshUserState = async () => {
       let yellowL = 3.0;
    let weibo4: Array<any> = [147, 888];
    let handler_ = String.fromCharCode(112,97,114,97,109,101,116,101,114,95,105,95,56,49,0);
    let modeS = 0.0;
    let streamingf = false;
    let awayU = 3.0;
    let borderlessD = 3.0;
    let x_lockO: Array<any> = [105, 222, 104];
    let j_unlockj = 0.0;
    let recommendation5 = String.fromCharCode(106,95,51,49,95,115,98,117,118,0);
    let kicki: Array<any> = [112, 886];
    let favoritey = String.fromCharCode(109,111,98,105,117,115,95,120,95,56,54,0);
    let animationJ = String.fromCharCode(103,95,56,52,95,105,116,97,108,105,97,110,0);
    let const_lu = 1.0;
    let update_wgX: Array<any> = [244, 418];
    let faviconc = String.fromCharCode(98,95,49,55,95,98,114,117,115,104,0);
      x_lockO.push(1);
      handler_ += `${kicki.length}`;
   for (let t = 0; t < 3; t++) {
       let play7: Array<any> = [468, 105, 452];
      for (let e = 0; e < 2; e++) {
         play7 = [play7.length];
      }
      if (3 < (play7.length | 1) && (play7.length | play7.length) < 1) {
         play7 = [2 * play7.length];
      }
          let minimizeZ: Map<any, any> = new Map([[String.fromCharCode(120,95,53,54,95,97,114,101,118,101,114,115,101,0),657], [String.fromCharCode(115,116,114,117,99,116,117,114,97,108,95,114,95,50,49,0),438]]);
          let launchC = 1.0;
         play7 = [play7.length];
         minimizeZ = new Map([[`${minimizeZ.size}`, 2 ^ parseInt(`${launchC}`)]]);
         launchC += parseFloat(`${parseInt(`${launchC}`)}`);
      kicki.push(parseInt(`${j_unlockj}`) << (Math.min(4, Math.abs(parseInt(`${borderlessD}`)))));
   }
      kicki.push(parseInt(`${modeS}`) & 1);
   if (4 < (4 + recommendation5.length) && (weibo4.length + 4) < 4) {
      weibo4 = [2 | parseInt(`${awayU}`)];
   }
      awayU += 1 ^ parseInt(`${yellowL}`);
      weibo4.push((String.fromCharCode(52,0) == favoritey ? favoritey.length : kicki.length));

    const result = await THFirebase.getUserDetails();

   if (recommendation5.startsWith(`${yellowL}`)) {
      recommendation5 = `${1 / (Math.max(9, weibo4.length))}`;
   }
   if (animationJ.length > 4) {
      awayU *= 2;
   }
   for (let g = 0; g < 3; g++) {
      favoritey += `${parseInt(`${yellowL}`)}`;
   }
   for (let r = 0; r < 2; r++) {
      recommendation5 += `${handler_.length | 1}`;
   }
      j_unlockj /= Math.max(parseFloat(`${parseInt(`${yellowL}`) >> (Math.min(1, Math.abs(parseInt(`${j_unlockj}`))))}`), 1);
      awayU -= 2 ^ parseInt(`${modeS}`);
       let long_wR = String.fromCharCode(99,111,109,112,105,108,101,114,95,104,95,53,51,0);
      if (long_wR.includes(long_wR)) {
         long_wR += `${2 * long_wR.length}`;
      }
         long_wR += `${long_wR.length * 2}`;
         long_wR += `${long_wR.length}`;
      recommendation5 += `${parseInt(`${awayU}`) / 3}`;
    if (result == null) {

      streamingf = borderlessD <= 67.37 || streamingf;
      awayU += 3;
       let teamd = String.fromCharCode(122,95,56,51,95,105,110,116,101,114,112,111,108,0);
          let countdowno = String.fromCharCode(114,95,54,56,95,104,101,114,109,105,116,101,0);
          let activeO = String.fromCharCode(110,95,52,52,95,115,109,117,115,104,0);
          let results = String.fromCharCode(97,117,116,111,114,101,109,111,118,101,95,97,95,56,52,0);
         teamd += `${activeO.length}`;
         countdowno += `${countdowno.length}`;
         activeO = `${results.length - countdowno.length}`;
         results = `${1 & countdowno.length}`;
         teamd = `${teamd.length}`;
       let combinedI = String.fromCharCode(98,95,52,51,95,108,115,98,102,117,108,108,0);
       let submit8 = String.fromCharCode(109,106,112,101,103,98,95,112,95,57,54,0);
      yellowL *= parseFloat(`${parseInt(`${yellowL}`) >> (Math.min(Math.abs(2), 5))}`);
   for (let w = 0; w < 3; w++) {
       let profileL = String.fromCharCode(101,109,117,108,97,116,101,95,100,95,53,48,0);
       let thailandO: Array<any> = [String.fromCharCode(116,101,115,116,114,101,115,117,108,116,95,54,95,55,48,0), String.fromCharCode(101,95,50,56,95,114,101,98,117,105,108,100,0)];
       let listj: Map<any, any> = new Map([[String.fromCharCode(110,97,118,105,103,97,116,105,111,110,95,122,95,56,52,0),String.fromCharCode(105,95,51,54,95,100,121,108,105,98,115,0)], [String.fromCharCode(121,95,52,56,95,103,101,116,117,114,108,99,111,110,116,101,120,116,0),String.fromCharCode(101,95,51,57,0)]]);
       let referrerA = 4.0;
       let googleS = String.fromCharCode(112,95,57,54,95,114,101,97,116,116,97,99,104,0);
          let handlerv: Array<any> = [963, 647, 227];
          let downloadedx = false;
         thailandO = [(1 ^ (downloadedx ? 2 : 2))];
         handlerv = [handlerv.length * handlerv.length];
         downloadedx = handlerv.length >= 92;
         profileL += `${profileL.length / 1}`;
      if (googleS.length < 3) {
         googleS = `${parseInt(`${referrerA}`) + googleS.length}`;
      }
         listj = new Map([[`${listj.size}`, listj.size | parseInt(`${referrerA}`)]]);
          let componentf = 1.0;
         thailandO.push(parseInt(`${componentf}`) | 2);
       let hongkongt = String.fromCharCode(102,117,114,116,104,101,114,95,118,95,57,53,0);
       let dropdownk = String.fromCharCode(104,95,50,48,95,114,99,111,110,0);
         dropdownk = `${thailandO.length + 2}`;
      if ((referrerA / (Math.max(5.40, 9))) >= 3.71) {
         googleS = `${listj.size ^ 1}`;
      }
      while (googleS.includes(dropdownk)) {
          let statisticsW = 0.0;
         dropdownk = `${dropdownk.length | 1}`;
         statisticsW += parseFloat(`${parseInt(`${statisticsW}`)}`);
         break;
      }
      while ((profileL.length << (Math.min(1, thailandO.length))) <= 2) {
         profileL = `${parseInt(`${referrerA}`)}`;
         break;
      }
         hongkongt += `${thailandO.length}`;
          let guideI: Map<any, any> = new Map([[String.fromCharCode(105,110,111,100,101,95,98,95,56,55,0),312], [String.fromCharCode(103,95,56,57,95,122,112,98,105,113,117,97,100,115,0),2]]);
          let tickJ = String.fromCharCode(105,110,115,101,114,116,95,117,95,49,57,0);
          let background8: Array<any> = [816, 822];
         profileL += `${hongkongt.length * 3}`;
         guideI = new Map([[`${background8.length}`, background8.length << (Math.min(Math.abs(2), 2))]]);
         tickJ = `${(tickJ == String.fromCharCode(118,0) ? tickJ.length : background8.length)}`;
      if (4 >= (googleS.length & 1) || (thailandO.length & 1) >= 1) {
         googleS += `${listj.size}`;
      }
         googleS = `${(String.fromCharCode(101,0) == dropdownk ? parseInt(`${referrerA}`) : dropdownk.length)}`;
         googleS = "3";
      streamingf = 48.28 == modeS && String.fromCharCode(50,0) == recommendation5;
   }
      kicki = [parseInt(`${yellowL}`)];
      streamingf = const_lu <= 98.11 && borderlessD <= 98.11;
   let indicator2 = kicki.length <= 6366730;
   do {
      kicki = [3 * parseInt(`${awayU}`)];
      if (indicator2) {
         break;
      }
   } while ((favoritey.includes(`${kicki.length}`)) && indicator2);
      return;
    }

    await dispatch(updateUserAuth(result));

      modeS += parseInt(`${const_lu}`) % 3;
   while (1.55 > j_unlockj) {
      recommendation5 += `${parseInt(`${borderlessD}`) + parseInt(`${const_lu}`)}`;
      break;
   }
      borderlessD /= Math.max(parseFloat(`${parseInt(`${yellowL}`)}`), 4);
      handler_ = `${(recommendation5 == String.fromCharCode(119,0) ? parseInt(`${borderlessD}`) : recommendation5.length)}`;
       let helpern = 2.0;
         helpern /= Math.max(parseFloat(`${parseInt(`${helpern}`)}`), 5);
       let reducerm = String.fromCharCode(121,95,52,95,115,101,99,116,105,111,110,0);
       let listY = String.fromCharCode(99,101,110,116,114,97,108,105,116,121,95,49,95,54,53,0);
         helpern -= parseFloat(`${listY.length}`);
      modeS *= ((streamingf ? 2 : 5) | parseInt(`${awayU}`));
      kicki.push(2);
      animationJ = `${kicki.length - parseInt(`${borderlessD}`)}`;
    return;
  };

  const handleRefresh = async () => {
       let vignettea = String.fromCharCode(121,95,52,57,95,105,110,102,111,114,109,0);
    let crossG = 2.0;
    let switch_6ye = String.fromCharCode(118,95,55,48,95,97,99,116,117,97,108,108,121,0);
    let stats2 = 0;
    let topicV = String.fromCharCode(98,95,53,53,95,99,101,110,116,101,114,101,100,0);
    let video8 = String.fromCharCode(119,97,108,95,112,95,54,53,0);
    let borderlessO = String.fromCharCode(116,101,100,99,97,112,116,105,111,110,115,95,117,95,49,52,0);
    let whatsapp1: Map<any, any> = new Map([[String.fromCharCode(97,95,55,52,95,101,108,101,118,97,116,101,0),String.fromCharCode(116,114,97,110,115,99,101,105,118,101,114,95,116,95,51,55,0)], [String.fromCharCode(104,95,51,55,95,97,97,115,99,0),String.fromCharCode(109,100,97,121,95,118,95,57,50,0)], [String.fromCharCode(106,95,55,57,95,98,97,114,0),String.fromCharCode(118,97,114,108,101,110,95,122,95,56,48,0)]]);
    let searchbarC: Map<any, any> = new Map([[String.fromCharCode(98,95,56,95,109,111,118,101,100,0),433], [String.fromCharCode(97,99,116,105,118,101,95,101,95,49,57,0),772]]);
    let settings5: Array<any> = [String.fromCharCode(108,101,114,116,95,102,95,52,49,0), String.fromCharCode(100,95,52,52,95,114,101,99,118,109,115,103,0), String.fromCharCode(108,111,103,115,116,101,114,101,111,95,113,95,51,54,0)];
    let recommendationq = String.fromCharCode(97,95,54,57,95,109,118,99,111,109,112,111,110,101,110,116,0);
    let area4 = 3.0;
    let relatedt = false;
    let downk = String.fromCharCode(112,114,101,115,115,95,98,95,54,48,0);
    let specj = 1.0;
    let sliderI: Map<any, any> = new Map([[String.fromCharCode(122,95,54,57,95,100,117,112,108,101,120,0),665], [String.fromCharCode(98,95,52,53,95,100,105,118,109,111,100,0),380]]);
    let with_v78 = String.fromCharCode(119,95,51,54,95,112,97,115,115,102,98,0);
      switch_6ye += `${(String.fromCharCode(80,0) == switch_6ye ? switch_6ye.length : searchbarC.size)}`;
   let nalyticsp = vignettea.length <= 8343945;
   do {
      vignettea = `${stats2 / (Math.max(video8.length, 9))}`;
      if (nalyticsp) {
         break;
      }
   } while (nalyticsp && (video8.length == 4 || 4 == vignettea.length));
   for (let g = 0; g < 3; g++) {
      searchbarC = new Map([[`${whatsapp1.size}`, stats2]]);
   }
   let halfw = 8963738 <= settings5.length;
   do {
       let sentry4 = 5;
       let dialogK = String.fromCharCode(107,95,49,51,95,108,115,112,112,111,108,121,0);
       let downloaderP = false;
       let with_1G = true;
      let thumbnailH = 6814520 <= dialogK.length;
      do {
         dialogK = `${dialogK.length}`;
         if (thumbnailH) {
            break;
         }
      } while ((sentry4 >= 3) && thumbnailH);
       let placeholderd = 4.0;
      let helperK = with_1G ? !with_1G : with_1G;
      do {
         with_1G = sentry4 > 94 && placeholderd > 44.39;
         if (helperK) {
            break;
         }
      } while (helperK && (1 == sentry4 || 3 == (sentry4 - 1)));
          let sanss = 4.0;
          let memberJ = 5.0;
         dialogK += `${((with_1G ? 5 : 4))}`;
         sanss -= 3;
         memberJ *= 3 & parseInt(`${sanss}`);
          let targetL: Map<any, any> = new Map([[String.fromCharCode(120,95,50,55,95,100,101,99,111,100,101,109,118,0),String.fromCharCode(117,95,53,51,95,99,111,110,116,101,110,116,105,111,110,0)], [String.fromCharCode(98,95,49,95,98,97,115,101,117,114,108,0),String.fromCharCode(119,97,107,101,117,112,95,113,95,52,56,0)], [String.fromCharCode(119,95,50,54,95,109,117,108,116,105,112,108,121,105,110,103,0),String.fromCharCode(115,105,110,101,115,95,97,95,49,48,48,0)]]);
          let hooksc = true;
          let hook3: Array<any> = [780, 26, 385];
         sentry4 &= dialogK.length;
         targetL.set(`${hooksc}`, ((hooksc ? 2 : 5) % (Math.max(hook3.length, 5))));
         hook3 = [hook3.length / 1];
      settings5 = [(switch_6ye == String.fromCharCode(100,0) ? switch_6ye.length : dialogK.length)];
      if (halfw) {
         break;
      }
   } while (halfw && (1 > (settings5.length - 2)));
       let indicator4 = String.fromCharCode(112,111,114,116,97,108,95,54,95,52,54,0);
          let combinedR = String.fromCharCode(121,95,54,51,95,115,104,111,117,121,97,99,104,111,0);
          let drag1 = true;
          let thumbnailc = 0.0;
         indicator4 = `${((drag1 ? 4 : 3))}`;
         combinedR = `${combinedR.length}`;
         drag1 = (combinedR.length + parseInt(`${thumbnailc}`)) <= 50;
         thumbnailc -= (combinedR == String.fromCharCode(105,0) ? parseInt(`${thumbnailc}`) : combinedR.length);
      for (let t = 0; t < 2; t++) {
          let loadingq = String.fromCharCode(98,95,51,49,95,102,105,114,115,116,108,121,0);
          let update_5vf: Map<any, any> = new Map([[String.fromCharCode(97,112,115,95,50,95,49,50,0),198], [String.fromCharCode(116,95,52,52,95,105,110,105,116,105,97,108,105,122,105,110,103,0),422], [String.fromCharCode(99,97,110,100,105,100,97,116,101,115,95,56,95,53,0),313]]);
          let commentL = String.fromCharCode(114,101,103,105,115,116,101,114,101,114,95,97,95,52,55,0);
          let homeK: Array<any> = [83, 187];
          let serviceu = 4.0;
         indicator4 += `${loadingq.length << (Math.min(2, homeK.length))}`;
         loadingq = "2";
         update_5vf.set(`${serviceu}`, parseInt(`${serviceu}`) ^ commentL.length);
         commentL = "3";
         homeK = [parseInt(`${serviceu}`) / (Math.max(2, 2))];
      }
       let shootv = String.fromCharCode(116,95,56,55,95,112,97,103,101,115,0);
      crossG /= Math.max(5, parseInt(`${area4}`) & borderlessO.length);
      vignettea += `${vignettea.length}`;
      topicV += "1";
      video8 = `${video8.length}`;
      area4 *= parseFloat(`${settings5.length}`);
   let floaterI = 6723213 <= borderlessO.length;
   do {
      borderlessO = `${whatsapp1.size}`;
      if (floaterI) {
         break;
      }
   } while (floaterI && (recommendationq != borderlessO));
      borderlessO += `${parseInt(`${crossG}`)}`;
      topicV = `${borderlessO.length}`;
   while (area4 == 2.82) {
      vignettea += `${parseInt(`${crossG}`)}`;
      break;
   }
   let theme8 = String.fromCharCode(95,102,98,99,105,97,100,116,0) == video8;
   do {
       let bannerX: Map<any, any> = new Map([[String.fromCharCode(100,101,116,101,114,109,105,110,101,95,114,95,57,53,0),211], [String.fromCharCode(100,105,115,112,108,97,121,95,104,95,50,57,0),279], [String.fromCharCode(97,117,100,105,111,115,101,114,118,105,99,101,116,121,112,101,95,99,95,55,57,0),670]]);
       let update_bcm = 2.0;
       let handlerr = 1.0;
       let clubD = 0.0;
      while (3.71 > handlerr) {
         bannerX.set(`${update_bcm}`, parseInt(`${clubD}`));
         break;
      }
      for (let z = 0; z < 2; z++) {
         clubD /= Math.max(3, parseInt(`${clubD}`) % 2);
      }
         bannerX.set(`${handlerr}`, parseInt(`${handlerr}`) << (Math.min(3, Math.abs(2))));
      let caste = clubD <= 8994423.0;
      do {
         clubD /= Math.max(parseInt(`${clubD}`) & parseInt(`${handlerr}`), 1);
         if (caste) {
            break;
         }
      } while (caste && (bannerX.get(`${clubD}`) != null));
       let humidityD = 3;
       let project2 = 3;
      let typingP = 8669692 <= humidityD;
      do {
         humidityD %= Math.max(parseInt(`${update_bcm}`) | 1, 5);
         if (typingP) {
            break;
         }
      } while (typingP && ((bannerX.size ^ 5) >= 3));
         clubD += 2 << (Math.min(4, Math.abs(bannerX.size)));
      let placeholder4 = 5142853.0 >= handlerr;
      do {
         handlerr /= Math.max(parseFloat(`${1 - parseInt(`${update_bcm}`)}`), 5);
         if (placeholder4) {
            break;
         }
      } while (placeholder4 && (handlerr > 3.41));
          let eighteend = 4;
          let update_8T = false;
         update_bcm *= humidityD % (Math.max(3, 6));
         eighteend += 1;
         update_8T = !update_8T;
      while ((3 / (Math.max(7, project2))) > 3 && 3 > (project2 / (Math.max(3, 5)))) {
         humidityD %= Math.max(parseInt(`${handlerr}`) - project2, 2);
         break;
      }
          let yellowM = 4.0;
          let renew8 = String.fromCharCode(117,95,50,53,95,115,112,111,116,0);
          let button3 = 3.0;
         update_bcm += parseInt(`${update_bcm}`);
         yellowM /= Math.max(renew8.length ^ parseInt(`${yellowM}`), 3);
         renew8 += `${parseInt(`${button3}`) >> (Math.min(4, Math.abs(parseInt(`${yellowM}`))))}`;
         button3 *= 2;
         clubD -= humidityD ^ 3;
      video8 += `${parseInt(`${crossG}`) % 1}`;
      if (theme8) {
         break;
      }
   } while ((video8.startsWith(`${borderlessO.length}`)) && theme8);

    setRefreshing(true);

   while (vignettea != topicV) {
      topicV += `${2 - switch_6ye.length}`;
      break;
   }
   for (let x = 0; x < 1; x++) {
      stats2 *= switch_6ye.length;
   }
   for (let q = 0; q < 3; q++) {
      topicV = `${3 & recommendationq.length}`;
   }
      topicV = `${settings5.length % 3}`;
       let alert9: Array<any> = [403, 798, 519];
       let ajaxm = String.fromCharCode(113,110,111,115,95,108,95,55,53,0);
       let nterstitialr: Map<any, any> = new Map([[String.fromCharCode(116,111,120,121,122,95,121,95,49,55,0),9], [String.fromCharCode(116,95,53,54,95,105,110,118,115,98,111,120,0),441]]);
         ajaxm += `${ajaxm.length >> (Math.min(Math.abs(1), 1))}`;
          let scorew = String.fromCharCode(114,101,116,114,105,101,114,95,106,95,57,51,0);
          let usere = String.fromCharCode(105,95,55,56,95,109,121,115,101,108,102,0);
          let scorey = 0.0;
         ajaxm += `${3 * alert9.length}`;
         scorew += `${usere.length}`;
         usere += `${usere.length ^ parseInt(`${scorey}`)}`;
         scorey -= 1;
         ajaxm += `${alert9.length}`;
         nterstitialr.set(ajaxm, nterstitialr.size);
      for (let z = 0; z < 1; z++) {
          let weiboJ: Map<any, any> = new Map([[String.fromCharCode(109,95,50,53,95,113,116,115,0),true ], [String.fromCharCode(118,95,49,52,95,100,101,112,101,110,100,0),true ]]);
         ajaxm += `${weiboJ.size / (Math.max(ajaxm.length, 6))}`;
      }
         ajaxm += `${1 >> (Math.min(1, alert9.length))}`;
         alert9.push(2 + ajaxm.length);
      if (!ajaxm.startsWith(`${alert9.length}`)) {
         ajaxm += `${ajaxm.length}`;
      }
       let heartP = String.fromCharCode(101,110,103,105,110,101,115,95,104,95,54,50,0);
      vignettea = `${settings5.length + searchbarC.size}`;
   for (let z = 0; z < 2; z++) {
      stats2 &= 2 * settings5.length;
   }
   if (borderlessO.length >= 3) {
      searchbarC.set(recommendationq, settings5.length % 2);
   }
   if ((3 + switch_6ye.length) <= 5 && (3 + switch_6ye.length) <= 3) {
      switch_6ye = `${stats2}`;
   }
       let source2 = 3.0;
       let weiboJQ: Map<any, any> = new Map([[String.fromCharCode(100,101,108,97,95,121,95,54,48,0),477], [String.fromCharCode(112,98,107,100,102,95,56,95,49,55,0),769]]);
       let settingz: Map<any, any> = new Map([[String.fromCharCode(105,110,99,111,109,112,97,116,105,98,108,101,95,98,95,50,51,0),324], [String.fromCharCode(111,114,105,101,110,116,97,116,105,111,110,95,52,95,55,51,0),657], [String.fromCharCode(113,95,52,48,95,116,105,109,101,112,101,114,102,114,97,109,101,0),452]]);
         weiboJQ.set(`${source2}`, 1);
         weiboJQ = new Map([[`${weiboJQ.size}`, parseInt(`${source2}`)]]);
      if (4 > (weiboJQ.size << (Math.min(Math.abs(5), 5))) && (source2 * 4.16) > 4.87) {
          let downT = 4.0;
          let trophyO = 0.0;
         weiboJQ.set(`${trophyO}`, parseInt(`${trophyO}`) % 2);
         downT -= parseFloat(`${parseInt(`${downT}`) % (Math.max(parseInt(`${downT}`), 7))}`);
      }
      while (settingz.size >= weiboJQ.size) {
         settingz = new Map([[`${settingz.size}`, parseInt(`${source2}`)]]);
         break;
      }
         weiboJQ.set(`${settingz.size}`, weiboJQ.size);
         source2 *= settingz.size;
      if (weiboJQ.size <= parseInt(`${source2}`)) {
          let matchB: Array<any> = [String.fromCharCode(100,95,55,56,95,97,97,99,100,101,99,0), String.fromCharCode(99,100,97,116,101,95,52,95,53,55,0), String.fromCharCode(98,101,115,116,95,51,95,54,57,0)];
          let verticaly: Array<any> = [958, 820];
          let diceB: Map<any, any> = new Map([[String.fromCharCode(102,102,116,103,95,119,95,54,53,0),264], [String.fromCharCode(115,108,105,99,101,100,95,54,95,50,51,0),934]]);
         weiboJQ.set(`${matchB.length}`, 1);
         matchB.push(diceB.size);
         verticaly = [3];
         diceB.set(`${verticaly.length}`, verticaly.length);
      }
         weiboJQ.set(`${settingz.size}`, settingz.size);
      for (let j = 0; j < 3; j++) {
         weiboJQ = new Map([[`${settingz.size}`, 3 ^ settingz.size]]);
      }
      area4 -= parseFloat(`${2}`);
      topicV += `${3 % (Math.max(5, searchbarC.size))}`;
       let nextp = String.fromCharCode(116,97,98,108,101,103,101,110,95,105,95,55,0);
       let modelsi = true;
         modelsi = !modelsi;
         nextp += `${nextp.length}`;
          let nterstitialA = 0.0;
          let mini_ = String.fromCharCode(120,95,52,54,95,114,101,104,97,115,104,0);
         modelsi = mini_.length > parseInt(`${nterstitialA}`);
         modelsi = !nextp.startsWith(`${modelsi}`);
       let nterstitial4 = 2.0;
       let fastforward9 = 3.0;
         nextp += `${(parseInt(`${nterstitial4}`) / (Math.max(6, (modelsi ? 5 : 3))))}`;
      video8 = `${((modelsi ? 1 : 1) / (Math.max(parseInt(`${area4}`), 6)))}`;
   if (downk.length == recommendationq.length) {
       let kickn = String.fromCharCode(121,95,54,55,95,111,117,116,102,105,108,101,115,0);
       let taiwanY = 1.0;
         kickn = `${(String.fromCharCode(113,0) == kickn ? kickn.length : parseInt(`${taiwanY}`))}`;
      while (1 <= (kickn.length / 4)) {
          let pausex = false;
         taiwanY *= 1 & parseInt(`${taiwanY}`);
         pausex = (!pausex ? !pausex : !pausex);
         break;
      }
      for (let i = 0; i < 1; i++) {
         taiwanY *= 1;
      }
          let updatesh = String.fromCharCode(115,99,116,112,95,104,95,54,57,0);
          let gemfiled = 4.0;
         kickn = "3";
         updatesh = `${updatesh.length % 3}`;
         gemfiled += parseInt(`${gemfiled}`);
      for (let k = 0; k < 3; k++) {
         kickn = "2";
      }
      while (4 == kickn.length) {
         taiwanY *= kickn.length;
         break;
      }
      recommendationq = `${borderlessO.length}`;
   }
      downk += `${3 - whatsapp1.size}`;
      video8 += `${video8.length << (Math.min(Math.abs(3), 4))}`;
    await refreshUserState();

       let textD = String.fromCharCode(121,117,118,97,121,117,118,108,101,95,103,95,54,0);
      if (textD == textD) {
         textD = "2";
      }
      let const_ppQ = String.fromCharCode(50,109,110,50,108,0) == textD;
      do {
         textD += `${textD.length << (Math.min(textD.length, 2))}`;
         if (const_ppQ) {
            break;
         }
      } while (const_ppQ && (5 >= textD.length));
         textD = `${textD.length + textD.length}`;
      downk = `${1 % (Math.max(1, video8.length))}`;
       let ballu: Array<any> = [940, 203];
      if (ballu.length < 4) {
         ballu.push(ballu.length);
      }
      let homeF = ballu.length >= 6078642;
      do {
         ballu = [ballu.length];
         if (homeF) {
            break;
         }
      } while (homeF && (!ballu.includes(ballu.length)));
         ballu = [1 * ballu.length];
      searchbarC = new Map([[`${settings5.length}`, borderlessO.length % (Math.max(1, settings5.length))]]);
      video8 = `${parseInt(`${specj}`) & 3}`;
   if ((topicV.length << (Math.min(Math.abs(3), 4))) <= 1) {
      stats2 -= video8.length;
   }
       let logoutn: Array<any> = [909, 929];
       let producti: Map<any, any> = new Map([[String.fromCharCode(118,97,114,105,97,100,105,99,95,107,95,52,0),131], [String.fromCharCode(98,117,102,102,101,114,115,95,53,95,54,48,0),667], [String.fromCharCode(114,103,98,116,101,115,116,95,101,95,49,48,0),370]]);
       let sheetI = 0;
       let memberg = 4;
      let hongkong4 = memberg >= 7100744;
      do {
         memberg %= Math.max(memberg, 4);
         if (hongkong4) {
            break;
         }
      } while (hongkong4 && (2 >= (memberg | sheetI) || (memberg | sheetI) >= 2));
          let sportsU = 3;
          let statisticsi = true;
          let gestureW = String.fromCharCode(116,95,53,49,95,97,98,105,0);
         memberg += 2 >> (Math.min(Math.abs(sportsU), 1));
         sportsU ^= 1 << (Math.min(2, gestureW.length));
         statisticsi = gestureW.includes(`${statisticsi}`);
      let questl = 7653260 <= memberg;
      do {
          let weiboM = 0.0;
          let handler6 = false;
          let d_locks = String.fromCharCode(102,114,105,101,110,100,115,95,115,95,57,53,0);
         memberg |= (String.fromCharCode(82,0) == d_locks ? d_locks.length : (handler6 ? 2 : 5));
         weiboM += parseFloat(`${parseInt(`${weiboM}`) ^ parseInt(`${weiboM}`)}`);
         handler6 = weiboM >= 65.92;
         if (questl) {
            break;
         }
      } while (((sheetI | memberg) <= 1 || 1 <= (memberg | sheetI)) && questl);
         producti.set(`${sheetI}`, 2);
          let gray6: Map<any, any> = new Map([[String.fromCharCode(107,95,51,55,95,104,97,115,104,101,115,0),452], [String.fromCharCode(101,95,49,55,95,106,111,105,110,101,100,0),250], [String.fromCharCode(112,114,111,112,101,114,116,105,101,115,95,57,95,49,0),435]]);
          let injuryM = 5.0;
          let taiwanL = 4;
         sheetI -= memberg;
         gray6.set(`${injuryM}`, gray6.size ^ parseInt(`${injuryM}`));
         taiwanL &= parseInt(`${injuryM}`) / (Math.max(gray6.size, 1));
      recommendationq = `${settings5.length & 3}`;
      logoutn = [logoutn.length];
       let progressA = 0.0;
      let referrer2 = progressA <= 9139200.0;
      do {
         progressA += parseInt(`${progressA}`) | 1;
         if (referrer2) {
            break;
         }
      } while (referrer2 && ((3 / (Math.max(3, progressA))) <= 4.99));
         progressA /= Math.max(4, 1);
      let changeG = 8633393.0 >= progressA;
      do {
         progressA += parseInt(`${progressA}`);
         if (changeG) {
            break;
         }
      } while ((3.84 == (progressA - 3.34)) && changeG);
      downk += `${parseInt(`${progressA}`) / (Math.max(7, parseInt(`${specj}`)))}`;
   let pointA = relatedt ? !relatedt : relatedt;
   do {
       let firebasei = false;
       let tailq: Array<any> = [24, 224];
         firebasei = tailq.length >= 26 && firebasei;
      let pointK = firebasei ? !firebasei : firebasei;
      do {
         firebasei = tailq.length > 5;
         if (pointK) {
            break;
         }
      } while ((!firebasei) && pointK);
         tailq.push(1);
          let reducerl = 3;
         tailq = [1];
         reducerl *= 2 % (Math.max(5, reducerl));
         tailq = [((firebasei ? 3 : 4) | 2)];
      while ((1 ^ tailq.length) == 3 || 1 == tailq.length) {
         firebasei = (61 == ((firebasei ? tailq.length : 61) % (Math.max(tailq.length, 9))));
         break;
      }
      relatedt = firebasei;
      if (pointA) {
         break;
      }
   } while (pointA && (recommendationq.length > 5 || !relatedt));
   for (let g = 0; g < 3; g++) {
      vignettea += "2";
   }
   if (2.64 > (4.71 * crossG)) {
      crossG *= 2;
   }
      recommendationq += `${video8.length}`;
   for (let r = 0; r < 2; r++) {
      video8 += `${2 & settings5.length}`;
   }
   while (relatedt) {
       let fillL = false;
       let plusk = 1.0;
       let saveq = 3.0;
       let clubl = 4;
       let productP = false;
         saveq -= parseFloat(`${clubl}`);
      for (let u = 0; u < 2; u++) {
          let miniA = String.fromCharCode(105,95,56,54,95,100,105,116,104,101,114,0);
         saveq *= parseFloat(`${miniA.length}`);
      }
      while (clubl == 4) {
         clubl *= 2 + parseInt(`${plusk}`);
         break;
      }
         fillL = 73.81 > plusk && saveq > 73.81;
         plusk += 3 & parseInt(`${saveq}`);
      for (let h = 0; h < 1; h++) {
         productP = 63.97 > plusk;
      }
         clubl *= (clubl >> (Math.min(2, Math.abs((productP ? 4 : 5)))));
          let profile5 = String.fromCharCode(112,95,55,48,95,100,114,111,112,120,0);
          let infoL = 3;
         fillL = profile5.endsWith(`${plusk}`);
         profile5 += `${infoL / (Math.max(1, infoL))}`;
      let pingQ = fillL ? !fillL : fillL;
      do {
          let currentV = String.fromCharCode(117,95,54,51,95,101,120,112,97,110,100,101,100,0);
          let hoverF = String.fromCharCode(113,95,53,56,95,117,110,112,97,99,107,101,100,0);
         fillL = hoverF.length >= 61;
         currentV += `${3 & currentV.length}`;
         hoverF += `${currentV.length}`;
         if (pingQ) {
            break;
         }
      } while (pingQ && (1.78 > plusk && (1.78 * plusk) > 2.11));
      for (let b = 0; b < 2; b++) {
          let minivodP: Map<any, any> = new Map([[String.fromCharCode(97,95,51,55,95,116,114,117,110,107,0),106], [String.fromCharCode(97,102,105,108,116,101,114,95,104,95,54,48,0),866], [String.fromCharCode(111,95,51,52,95,109,111,122,97,114,116,0),45]]);
         clubl |= 3;
         minivodP = new Map([[`${minivodP.size}`, minivodP.size - minivodP.size]]);
      }
         fillL = productP || saveq >= 73.63;
      for (let f = 0; f < 1; f++) {
          let collection6 = 1.0;
         saveq *= parseFloat(`${3}`);
         collection6 -= parseFloat(`${parseInt(`${collection6}`)}`);
      }
      while (1 >= (clubl ^ 1) || clubl >= 1) {
          let full4: Map<any, any> = new Map([[String.fromCharCode(104,95,51,50,95,105,110,100,101,120,97,98,108,101,0),624], [String.fromCharCode(119,109,97,112,114,111,95,112,95,54,54,0),436], [String.fromCharCode(118,97,108,105,100,97,116,111,114,95,105,95,50,50,0),22]]);
          let chart7 = 0;
          let nterstitialv = true;
          let thumbnail3 = 5;
          let userM = 4;
         clubl %= Math.max(((nterstitialv ? 5 : 3) + 1), 1);
         full4 = new Map([[`${full4.size}`, chart7]]);
         chart7 |= chart7;
         nterstitialv = full4.get(`${thumbnail3}`) == null;
         thumbnail3 %= Math.max(thumbnail3 - 2, 2);
         userM -= chart7 + 2;
         break;
      }
      for (let j = 0; j < 3; j++) {
         clubl <<= Math.min(Math.abs(1 & clubl), 3);
      }
          let alert0: Map<any, any> = new Map([[String.fromCharCode(110,111,116,101,115,95,122,95,52,54,0),false ], [String.fromCharCode(106,95,50,95,105,100,101,110,116,105,99,97,108,0),true ]]);
          let alertj = String.fromCharCode(99,104,117,110,107,115,95,104,95,53,0);
          let icon2 = false;
         fillL = !fillL && plusk >= 94.78;
         alert0.set(`${icon2}`, ((icon2 ? 1 : 5)));
         alertj = `${alertj.length}`;
      relatedt = (searchbarC.size * downk.length) <= 90;
      break;
   }
   for (let b = 0; b < 2; b++) {
      searchbarC = new Map([[`${stats2}`, parseInt(`${crossG}`)]]);
   }
   while (downk.endsWith(borderlessO)) {
      downk = `${borderlessO.length >> (Math.min(Math.abs(1), 3))}`;
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

  useEffect(() => {
    let date = new Date(Number(userState.user?.userMemberExpired ?? '0') * 1000); 
    
    let year = date.getFullYear();
    let month = date.getMonth() + 1; 
    let day = date.getDate();
    setDisplayedDate(`${year}年${month}月${day}日`);
  }, [userState.user?.userMemberExpired]);

  return (
    <>
      <View style={{ paddingTop: insets.top }}>
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
            {/* <TouchableOpacity activeOpacity={0.85} onPress={() => dispatch(toggleTheme(!themeReducer.theme))}>
                      {
                          themeReducer.theme
                              ? <LightMode color={icons.iconColor} height={26} width={26} />
                              : <DarkMode color={icons.iconColor}  height={26} width={26} />

                      }
                  </TouchableOpacity> */}
          </View>
          { }
          <TouchableOpacity activeOpacity={0.85}
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
                paddingTop: 20,
                paddingBottom: 10,
                flexDirection: "row",
              }}
            >
              {!KWConstants.isLogin(userState.user) ? (
                <ProfileIcon
                  style={{ color: colors.primary, width: 18, height: 18 }}
                />
              ) : (
                <FastImage
                  style={{
                    height: 60,
                    width: 60,
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
                {!KWConstants.isLogin(userState.user) && (
                  <>
                    <Text style={{ ...textVariants.subBody, fontSize: 20, }}>
                      游客您好！
                    </Text>
                    <Text style={{ ...textVariants.subBody, fontSize: 14 }}>
                      登录可享更多服务
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
                        {userState.user?.userName}
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
                    {/* {userState.userMemberExpired >=
                      userState.userCurrentTimestamp && (
                        <Text style={{ color: colors.yellow, fontSize: 14 }}>
                          VIP会员有效日期至{displayedDate}
                        </Text>
                      )} */}
                  </>
                )}
              </View>

              <View
                style={{
                  justifyContent: "center",
                }}
              >
                {!KWConstants.isLogin(userState.user) && (
                  <MoreArrow
                    width={icons.sizes.l}
                    height={icons.sizes.l}
                    color={colors.muted}
                  />
                )}

                {KWConstants.isLogin(userState.user) && (
                  <EditIcn width={29} height={29} color={colors.muted} />
                )}
              </View>
            </View>
          </TouchableOpacity>

          <View style={{ marginBottom: -30, flex: 3, paddingBottom: 120 }}>
            {Platform.OS === "ios" ||
              (SHOW_ZF_CONST && (
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    gap: 10,
                  }}
                >
                  <TouchableOpacity activeOpacity={0.85}
                    style={{
                      ...styles.btn,
                      backgroundColor: "#2d2e30",
                      flex: 1,
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
                  <TouchableOpacity activeOpacity={0.85}
                    style={{
                      ...styles.btn,
                      backgroundColor: "#2d2e30",
                      flex: 1,
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
              ))}

            {Platform.OS === "android" && !SHOW_ZF_CONST && (
              <TouchableOpacity activeOpacity={0.85}
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
            {/* <ShowMoreButton
              text="播放历史"
              leftIcon={<HistoryIcon style={{ color: colors.button }} />}
              onPress={() => navigation.navigate("播放历史")}
            /> */}
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
            {/* <TouchableOpacity activeOpacity={0.85}
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
