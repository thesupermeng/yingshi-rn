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
import { useAppDispatch, useAppSelector, useSelector } from "@hooks/tt_spec_download";
import { ttOrange } from "@redux/tt_updates_bottom";
import ShowMoreButton from "../../components/button/tt_hongkong_button";

import CollectionIcon from "@static/images/listUserGesture.svg";
import HistoryIcon from "@static/images/hoverInterstitial.svg";
import FeedbackIcon from "@static/images/redirectInfo.svg";
import SettingsIcon from "@static/images/expiredThumbnail.svg";
import InfoIcon from "@static/images/detailsConfigEighteen.svg";
import { useNavigation } from "@react-navigation/native";

import Orientation from "react-native-orientation-locker";
import ProfileIcon from "@static/images/viewsLink.svg";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import MoreArrow from "@static/images/privilegeQuestCountry.svg";
import EditIcn from "@static/images/profile/teamNavigationMinimize.svg";

import VipIcon from "@static/images/halfAjax.svg";
import VipArrow from "@static/images/trophyDataActive.svg";
import AddIcon from "@static/images/vip/interstitialStore.svg";

import {
  hideBottomSheetAction,
  removeScreenAction,
  showLoginAction,
} from "@redux/actions/tt_copy_heji";
import NotificationModal from "../../components/modal/tt_countdown";
import { updateUserAuth, updateUserReferral } from "@redux/actions/tt_topon";
import ExpiredOverlay from "../../components/modal/tt_actions";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ttConfigRecommendation } from "../../../../tt_copy_floater";
import { SHOW_ZF_CONST, UMENG_CHANNEL } from "@utility/tt_trophy_cross";
import FastImage from "../../components/common/tt_connection";
import { ttTramini } from "@api";
import { ttGoal } from "@redux/reducers/tt_selected";
import { ttFast } from "@models/tt_stations_right";

function Profile({ navigation, route }: BottomTabScreenProps<any>) {
  const navigator = useNavigation();
  const { colors, textVariants, icons, spacing } = useTheme();
  const dispatch = useAppDispatch();
  const [refreshing, setRefreshing] = useState(false);
  const [displayedDate, setDisplayedDate] = useState("");
  const userState = useSelector<ttGoal>('userReducer');
  
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const toggleOverlay = () => {
       let fastforwardT = String.fromCharCode(112,97,114,116,0);
    let refreshq = 4.0;
    let mbbidl: Array<any> = [847, 9, 933];
    let b_locku = 0;
    let androidt = false;
    let dialog1 = 3.0;
    let taiwan3: Array<any> = [517, 961];
    let verticalO: Array<any> = [212, 290, 10];
    let favoriteM: Array<any> = [String.fromCharCode(112,101,114,109,117,116,97,116,105,111,110,0), String.fromCharCode(115,116,97,121,0), String.fromCharCode(98,108,105,110,100,101,100,0)];
    let optionsb = String.fromCharCode(112,111,105,110,116,101,114,0);
    let linkL = 0.0;
    let leftu = String.fromCharCode(121,117,118,114,103,98,97,0);
    let hook4 = false;
      androidt = linkL > 89.60 && optionsb.length > 53;
      taiwan3.push(verticalO.length);
      refreshq -= (fastforwardT == String.fromCharCode(117,0) ? fastforwardT.length : (androidt ? 5 : 3));
      fastforwardT += `${verticalO.length}`;
       let tailS = String.fromCharCode(97,110,105,109,97,116,105,110,103,0);
      if (tailS.includes(`${tailS.length}`)) {
          let time_mwi = 4;
          let shrinkC: Map<any, any> = new Map([[String.fromCharCode(118,97,108,105,100,97,116,105,111,110,115,0),264], [String.fromCharCode(115,108,105,100,0),729]]);
          let projectD: Array<any> = [5, 385, 446];
         tailS = "2";
         time_mwi += 1 - time_mwi;
         shrinkC = new Map([[`${shrinkC.size}`, 2]]);
         projectD.push(projectD.length % 1);
      }
       let albumq = String.fromCharCode(105,100,105,111,109,0);
       let ticked2 = String.fromCharCode(114,100,111,112,116,0);
      for (let n = 0; n < 3; n++) {
         albumq += `${ticked2.length >> (Math.min(Math.abs(2), 1))}`;
      }
      verticalO = [b_locku + 1];
   if (!mbbidl.includes(dialog1)) {
       let hovert: Array<any> = [615, 690, 468];
       let downloaderx = true;
       let statistics4: Array<any> = [401, 790];
       let tickedN = 0.0;
       let actionA: Map<any, any> = new Map([[String.fromCharCode(114,101,115,97,109,112,0),113], [String.fromCharCode(97,107,97,114,111,115,0),345], [String.fromCharCode(97,99,111,109,112,114,101,115,115,111,114,0),252]]);
      let unewinterstitialJ = tickedN >= 8142809.0;
      do {
         tickedN *= 2 % (Math.max(2, hovert.length));
         if (unewinterstitialJ) {
            break;
         }
      } while ((actionA.size == 2) && unewinterstitialJ);
         tickedN -= 2;
      while (!downloaderx) {
          let security4 = String.fromCharCode(104,97,114,101,0);
         downloaderx = actionA.size == 48;
         security4 += `${security4.length + security4.length}`;
         break;
      }
          let verticalw = true;
          let championb = String.fromCharCode(114,105,110,103,98,117,102,102,101,114,0);
         hovert.push(2 * parseInt(`${tickedN}`));
         verticalw = !verticalw && championb.length > 99;
         championb += `${((verticalw ? 5 : 1) >> (Math.min(championb.length, 2)))}`;
         hovert = [parseInt(`${tickedN}`)];
      while (5 > (statistics4.length / 2) || !downloaderx) {
          let updatesT: Map<any, any> = new Map([[String.fromCharCode(100,101,102,105,110,101,100,0),String.fromCharCode(115,111,108,97,110,97,0)], [String.fromCharCode(115,101,114,105,97,108,0),String.fromCharCode(102,114,97,110,100,111,109,0)]]);
          let membero = 3.0;
          let unselected8 = String.fromCharCode(105,110,105,116,105,97,108,105,122,105,110,103,0);
          let settingsl = String.fromCharCode(115,99,97,108,97,98,105,108,105,116,121,0);
         statistics4 = [parseInt(`${tickedN}`) | 2];
         updatesT.set(unselected8, unselected8.length - updatesT.size);
         membero /= Math.max(parseFloat(`${updatesT.size}`), 2);
         settingsl = `${3 - settingsl.length}`;
         break;
      }
          let package_zrr = String.fromCharCode(115,105,103,101,120,112,0);
         statistics4.push(statistics4.length << (Math.min(Math.abs(1), 2)));
         package_zrr += `${package_zrr.length << (Math.min(package_zrr.length, 5))}`;
         statistics4 = [2 << (Math.min(2, statistics4.length))];
          let transferD = String.fromCharCode(99,102,102,116,98,0);
          let homeo: Array<any> = [318, 132];
         downloaderx = actionA.size > 42;
         transferD = `${1 << (Math.min(4, homeo.length))}`;
         homeo.push(2 | homeo.length);
          let mappingD = 0.0;
          let combine_ = false;
          let grayC = true;
         actionA.set(`${mappingD}`, parseInt(`${mappingD}`));
         combine_ = (combine_ ? grayC : combine_);
         grayC = !combine_ && !grayC;
          let hoverN = String.fromCharCode(115,99,97,108,101,99,117,100,97,0);
          let muteds = 2.0;
         statistics4.push(2 << (Math.min(5, Math.abs(actionA.size))));
         hoverN = `${2 - hoverN.length}`;
         muteds *= parseFloat(`${parseInt(`${muteds}`)}`);
      let material3 = actionA.size <= 9773736;
      do {
         actionA = new Map([[`${hovert.length}`, hovert.length]]);
         if (material3) {
            break;
         }
      } while (material3 && (!downloaderx));
      while (2 >= (statistics4.length >> (Math.min(Math.abs(actionA.size), 1))) && (statistics4.length >> (Math.min(Math.abs(actionA.size), 2))) >= 2) {
         actionA.set(`${tickedN}`, 2);
         break;
      }
         actionA = new Map([[`${hovert.length}`, 3]]);
         actionA.set(`${tickedN}`, 3 + statistics4.length);
      dialog1 /= Math.max(3, 1);
   }
   for (let c = 0; c < 3; c++) {
      refreshq -= 2;
   }
   let sourceu = 9058862 <= mbbidl.length;
   do {
       let rankg = String.fromCharCode(99,104,97,114,0);
       let castingV = String.fromCharCode(101,120,112,0);
       let streamingM = String.fromCharCode(108,97,98,101,108,110,115,0);
       let sortP: Map<any, any> = new Map([[String.fromCharCode(107,101,121,118,97,108,0),String.fromCharCode(101,105,112,118,0)], [String.fromCharCode(112,111,115,108,105,115,116,115,0),String.fromCharCode(116,105,108,101,104,100,114,0)]]);
         streamingM = `${(rankg == String.fromCharCode(103,0) ? sortP.size : rankg.length)}`;
         castingV = `${rankg.length}`;
          let edite = String.fromCharCode(115,119,105,112,101,0);
          let catalogF = String.fromCharCode(110,101,97,114,101,110,100,0);
         rankg += `${1 >> (Math.min(5, Math.abs(sortP.size)))}`;
         edite = `${edite.length << (Math.min(Math.abs(2), 1))}`;
         catalogF = `${edite.length << (Math.min(1, catalogF.length))}`;
      let photo2 = streamingM == String.fromCharCode(98,116,102,98,115,108,121,104,57,95,0);
      do {
          let description_bkg = 0;
          let selectD = 1.0;
          let actionj = 5.0;
          let canvasU: Map<any, any> = new Map([[String.fromCharCode(99,111,108,115,107,105,112,0),713], [String.fromCharCode(112,111,115,116,112,114,111,99,0),543], [String.fromCharCode(109,118,112,114,111,98,115,0),881]]);
          let submit7 = String.fromCharCode(116,97,98,108,101,103,101,110,0);
         streamingM += `${(streamingM == String.fromCharCode(121,0) ? submit7.length : streamingM.length)}`;
         description_bkg &= parseInt(`${selectD}`);
         selectD += parseFloat(`${3}`);
         actionj -= 2;
         canvasU.set(`${description_bkg}`, 3);
         submit7 = `${3 % (Math.max(4, description_bkg))}`;
         if (photo2) {
            break;
         }
      } while (photo2 && (streamingM.length > sortP.size));
      while (!rankg.endsWith(castingV)) {
         castingV += `${castingV.length}`;
         break;
      }
      if (streamingM.startsWith(`${castingV.length}`)) {
          let linkc = 1.0;
         streamingM = `${rankg.length}`;
         linkc *= parseInt(`${linkc}`) % 2;
      }
         streamingM += `${rankg.length * castingV.length}`;
          let subsQ = 4;
          let fileda = 2;
         castingV += "2";
         subsQ %= Math.max(fileda ^ subsQ, 2);
         fileda ^= subsQ;
      while (rankg.endsWith(`${streamingM.length}`)) {
         rankg += `${2 * streamingM.length}`;
         break;
      }
       let androidF = String.fromCharCode(105,115,119,104,105,116,101,115,112,97,99,101,0);
       let buttono = String.fromCharCode(112,114,101,112,101,110,100,0);
         sortP = new Map([[buttono, (String.fromCharCode(49,0) == castingV ? castingV.length : buttono.length)]]);
         androidF += `${2 % (Math.max(5, sortP.size))}`;
      mbbidl = [taiwan3.length];
      if (sourceu) {
         break;
      }
   } while ((2.44 >= (2.45 * dialog1) && 1 >= (parseInt(`${dialog1}`) * mbbidl.length)) && sourceu);
       let const_b9: Map<any, any> = new Map([[String.fromCharCode(108,111,117,100,115,112,101,97,107,101,114,0),true ], [String.fromCharCode(111,110,97,118,99,0),true ], [String.fromCharCode(108,105,110,101,115,105,122,101,0),true ]]);
       let componentq = false;
       let update_21J = 5.0;
          let scheduleq = true;
          let borderlessv = String.fromCharCode(97,116,97,98,108,101,115,0);
          let styleB = String.fromCharCode(104,101,120,98,115,0);
         componentq = borderlessv == styleB;
         scheduleq = (!scheduleq ? !scheduleq : scheduleq);
         borderlessv = `${((scheduleq ? 4 : 4) / (Math.max(7, (scheduleq ? 1 : 3))))}`;
      if (4.49 == update_21J && (update_21J - 4.49) == 3.66) {
         componentq = update_21J == parseFloat(`${const_b9.size}`);
      }
      while (5 >= (const_b9.size / (Math.max(5, 9))) && (update_21J + parseFloat(`${const_b9.size}`)) >= 3.49) {
          let temperatureJ = String.fromCharCode(100,101,112,114,101,99,97,116,105,111,110,0);
          let roundm = 3;
          let anytimeF: Map<any, any> = new Map([[String.fromCharCode(117,110,115,111,108,118,101,100,0),String.fromCharCode(97,108,98,117,109,115,0)], [String.fromCharCode(111,105,100,97,110,121,0),String.fromCharCode(114,101,116,97,105,110,115,0)], [String.fromCharCode(100,97,117,100,0),String.fromCharCode(98,112,114,105,110,116,0)]]);
          let nalytics3 = 4.0;
          let zhengpianU: Map<any, any> = new Map([[String.fromCharCode(97,116,114,97,99,97,108,0),706], [String.fromCharCode(100,97,105,0),373]]);
         const_b9.set(`${roundm}`, roundm);
         temperatureJ += `${anytimeF.size >> (Math.min(temperatureJ.length, 1))}`;
         anytimeF.set(`${temperatureJ}`, temperatureJ.length >> (Math.min(Math.abs(2), 1)));
         nalytics3 *= parseFloat(`${parseInt(`${nalytics3}`) + 3}`);
         zhengpianU = new Map([[temperatureJ, temperatureJ.length ^ 1]]);
         break;
      }
      let flyerQ = const_b9.size >= 9736512;
      do {
         const_b9.set(`${componentq}`, 2 / (Math.max(8, const_b9.size)));
         if (flyerQ) {
            break;
         }
      } while (((4.81 - update_21J) >= 2.90 && 4.81 >= (parseFloat(`${const_b9.size}`) - update_21J)) && flyerQ);
      let ewardedW = componentq ? !componentq : componentq;
      do {
         componentq = !componentq;
         if (ewardedW) {
            break;
         }
      } while (ewardedW && (!componentq && 5.39 >= (5.93 + update_21J)));
         componentq = update_21J > 12.80;
       let blacklist4 = 1.0;
       let tickx = 4.0;
         const_b9 = new Map([[`${componentq}`, (parseInt(`${update_21J}`) & (componentq ? 2 : 5))]]);
      while (5.78 <= update_21J) {
         update_21J /= Math.max(4, parseFloat(`${parseInt(`${tickx}`) * parseInt(`${blacklist4}`)}`));
         break;
      }
      favoriteM.push(parseInt(`${dialog1}`) & 3);
      androidt = 35 >= verticalO.length && fastforwardT == String.fromCharCode(73,0);
   if ((refreshq * 2.1) == 2.25) {
      refreshq /= Math.max(2 ^ taiwan3.length, 2);
   }
   while (2.15 > (linkL * b_locku)) {
       let notificationR: Map<any, any> = new Map([[String.fromCharCode(109,97,110,97,103,101,114,0),56], [String.fromCharCode(102,111,114,101,103,114,111,117,110,100,0),630], [String.fromCharCode(109,100,116,97,0),584]]);
       let previewq = 0.0;
      if (!Array.from(notificationR.keys()).includes(`${previewq}`)) {
         notificationR.set(`${previewq}`, 1);
      }
          let thailandp = String.fromCharCode(101,120,112,97,110,100,101,100,0);
          let sharer = 3.0;
         notificationR = new Map([[`${notificationR.size}`, parseInt(`${sharer}`) - 1]]);
         thailandp += `${thailandp.length >> (Math.min(Math.abs(1), 2))}`;
         sharer *= thailandp.length;
      for (let q = 0; q < 2; q++) {
          let manifestl = String.fromCharCode(116,101,115,116,99,108,101,97,110,0);
          let searchQ = String.fromCharCode(97,118,115,115,0);
          let launcher7 = false;
          let optionsh = String.fromCharCode(119,101,98,118,105,101,119,0);
         previewq -= (parseFloat(`${(launcher7 ? 4 : 4) | 2}`));
         manifestl = `${searchQ.length / 3}`;
         searchQ = `${manifestl.length >> (Math.min(optionsh.length, 1))}`;
         launcher7 = 68 == searchQ.length;
         optionsh += `${manifestl.length / 1}`;
      }
          let zhuboM = true;
          let analyticsR: Map<any, any> = new Map([[String.fromCharCode(109,106,112,101,103,97,0),938], [String.fromCharCode(99,117,114,115,111,114,115,0),816]]);
         notificationR = new Map([[`${zhuboM}`, ((zhuboM ? 4 : 4) | parseInt(`${previewq}`))]]);
         analyticsR = new Map([[`${analyticsR.size}`, analyticsR.size & analyticsR.size]]);
         previewq += parseFloat(`${1}`);
      if (Array.from(notificationR.values()).includes(previewq)) {
         previewq /= Math.max(parseFloat(`${parseInt(`${previewq}`) << (Math.min(Math.abs(1), 3))}`), 2);
      }
      b_locku /= Math.max(1, (String.fromCharCode(74,0) == leftu ? notificationR.size : leftu.length));
      break;
   }
      dialog1 -= 3 / (Math.max(7, mbbidl.length));
       let found6 = 3.0;
       let placeholderY = String.fromCharCode(105,110,102,111,114,109,97,116,105,111,110,0);
      let auto_k7 = found6 >= 8233545.0;
      do {
         found6 += parseInt(`${found6}`) / (Math.max(placeholderY.length, 3));
         if (auto_k7) {
            break;
         }
      } while (auto_k7 && ((5.62 / (Math.max(8, found6))) <= 1.21));
      while (!placeholderY.endsWith(`${found6}`)) {
          let suggestionS = false;
          let starq = 3.0;
          let thailandH = String.fromCharCode(102,104,116,120,0);
         placeholderY += `${3 - parseInt(`${starq}`)}`;
         suggestionS = (((!suggestionS ? thailandH.length : 93) % (Math.max(5, thailandH.length))) > 93);
         starq += ((suggestionS ? 5 : 2) - thailandH.length);
         break;
      }
       let crowne = true;
      while (placeholderY.length <= 5) {
         placeholderY += `${((crowne ? 2 : 3))}`;
         break;
      }
      if (!placeholderY.endsWith(`${found6}`)) {
         found6 -= 1 & placeholderY.length;
      }
      for (let s = 0; s < 3; s++) {
         crowne = !crowne;
      }
      refreshq += placeholderY.length;
   for (let m = 0; m < 2; m++) {
      favoriteM = [verticalO.length | favoriteM.length];
   }
      optionsb += "2";
   while (androidt) {
      androidt = b_locku >= 19;
      break;
   }
   for (let j = 0; j < 2; j++) {
      linkL *= leftu.length;
   }
   if (4.11 >= (linkL + 4)) {
      dialog1 -= (optionsb == String.fromCharCode(66,0) ? taiwan3.length : optionsb.length);
   }
       let homeX = false;
          let green5 = 3;
          let carouselt = String.fromCharCode(99,111,109,109,105,115,115,105,111,110,0);
          let playercommony: Map<any, any> = new Map([[String.fromCharCode(102,105,108,116,101,114,98,97,110,107,0),326], [String.fromCharCode(99,111,108,108,97,116,101,0),698]]);
         homeX = !carouselt.endsWith(`${homeX}`);
         green5 ^= playercommony.size;
         carouselt = "2";
         playercommony = new Map([[`${playercommony.size}`, 1]]);
      while (!homeX || !homeX) {
         homeX = !homeX;
         break;
      }
          let sentryb = true;
          let floaterj = String.fromCharCode(112,114,111,116,101,99,116,101,100,0);
          let chat0 = String.fromCharCode(112,97,115,115,112,104,114,97,115,101,0);
         homeX = (88 <= ((homeX ? 88 : chat0.length) | chat0.length));
         sentryb = floaterj.includes(`${sentryb}`);
         floaterj = `${((sentryb ? 1 : 4) & floaterj.length)}`;
      mbbidl.push(((androidt ? 2 : 1) / (Math.max(8, parseInt(`${refreshq}`)))));
   for (let f = 0; f < 1; f++) {
      androidt = refreshq <= dialog1;
   }
   let robotoN = 6331057.0 >= refreshq;
   do {
      refreshq += b_locku;
      if (robotoN) {
         break;
      }
   } while (robotoN && (1 > (fastforwardT.length + parseInt(`${refreshq}`)) || (refreshq + 4.67) > 4.68));
      optionsb += `${leftu.length % 2}`;
       let hookQ = String.fromCharCode(101,120,116,101,116,110,100,101,100,0);
       let profileh: Array<any> = [744, 225];
          let singaporey = false;
          let historyu = 0.0;
          let bootsplash_ = true;
         hookQ = "1";
         singaporey = 18.52 < historyu;
         historyu -= parseFloat(`${1 >> (Math.min(Math.abs(parseInt(`${historyu}`)), 3))}`);
         bootsplash_ = historyu <= 92.91;
      while (hookQ.includes(`${profileh.length}`)) {
         profileh = [profileh.length ^ 3];
         break;
      }
          let hooksy = String.fromCharCode(99,111,100,101,99,115,0);
          let macau8 = String.fromCharCode(109,97,115,107,0);
          let becomey = String.fromCharCode(110,101,105,103,104,98,111,114,0);
         hookQ += `${profileh.length + 1}`;
         hooksy = `${becomey.length >> (Math.min(Math.abs(2), 3))}`;
         macau8 += `${macau8.length | hooksy.length}`;
         becomey += "3";
         hookQ = `${profileh.length | hookQ.length}`;
      for (let j = 0; j < 3; j++) {
         profileh.push(profileh.length);
      }
          let x_titleV: Array<any> = [String.fromCharCode(111,117,116,98,111,117,110,100,0), String.fromCharCode(101,118,101,110,97,118,103,0), String.fromCharCode(106,115,116,114,105,110,103,0)];
          let tramini7 = String.fromCharCode(99,117,114,114,101,110,116,108,121,0);
         hookQ = `${(hookQ == String.fromCharCode(112,0) ? hookQ.length : profileh.length)}`;
         x_titleV = [3 ^ x_titleV.length];
         tramini7 = "3";
      refreshq -= 1 - verticalO.length;

    setIsDialogOpen(!isDialogOpen);
  };

  const refreshUserState = async () => {
       let downloadB = 1;
    let phoneL = 4.0;
    let shareX: Map<any, any> = new Map([[String.fromCharCode(102,97,115,116,0),true ], [String.fromCharCode(110,115,101,103,109,101,110,116,115,0),false ], [String.fromCharCode(99,111,112,121,0),false ]]);
    let downloadingk = 2.0;
    let circled = 1.0;
    let inactiveP = String.fromCharCode(115,108,105,100,101,114,0);
    let interstitialH = true;
    let largeT = String.fromCharCode(99,111,110,110,101,99,116,0);
    let twitterG = 3.0;
    let configurej = String.fromCharCode(112,114,111,120,105,101,115,0);
    let utilsZ = String.fromCharCode(102,108,97,115,104,115,118,0);
    let vignetteQ = String.fromCharCode(99,104,111,115,101,110,0);
    let v_managerB = true;
    let analyticsz = String.fromCharCode(105,109,109,101,100,105,97,116,101,115,105,103,110,97,108,0);
   for (let e = 0; e < 3; e++) {
       let fastO: Map<any, any> = new Map([[String.fromCharCode(115,99,104,117,110,99,107,0),true ], [String.fromCharCode(115,113,108,105,116,101,112,97,103,101,114,0),false ]]);
       let incidentU: Array<any> = [182, 13];
       let confirmationE = 5.0;
       let gestures2 = String.fromCharCode(119,104,105,116,101,115,112,97,99,101,0);
       let eventL = String.fromCharCode(115,107,101,119,101,100,0);
      if (gestures2.length >= eventL.length) {
         gestures2 += `${2 >> (Math.min(4, gestures2.length))}`;
      }
      for (let v = 0; v < 3; v++) {
          let floatingJ = String.fromCharCode(114,97,100,98,103,0);
          let hoverG = String.fromCharCode(115,99,97,108,97,114,112,114,111,100,117,99,116,0);
          let feedback8 = 5.0;
          let spinnerw = String.fromCharCode(110,111,110,110,117,108,108,115,115,114,99,0);
         gestures2 = `${parseInt(`${confirmationE}`)}`;
         floatingJ += `${floatingJ.length | 2}`;
         hoverG = `${hoverG.length}`;
         feedback8 *= floatingJ.length | spinnerw.length;
         spinnerw = `${hoverG.length}`;
      }
          let pauseK = 3.0;
          let filedD = String.fromCharCode(115,117,98,115,116,97,116,101,0);
         eventL += `${eventL.length}`;
         pauseK -= filedD.length;
         filedD += "1";
         confirmationE *= parseFloat(`${1 | eventL.length}`);
      while (fastO.size >= 3) {
         fastO.set(`${confirmationE}`, 1 * incidentU.length);
         break;
      }
         fastO = new Map([[`${incidentU.length}`, 3]]);
         confirmationE += parseFloat(`${fastO.size | 1}`);
         incidentU.push(gestures2.length);
         incidentU.push(eventL.length);
       let carouselE = 4;
          let selectede = 5;
          let pangleP = true;
          let update_ga = 5;
         incidentU.push(((pangleP ? 2 : 2) % (Math.max(update_ga, 1))));
         selectede ^= selectede;
         pangleP = selectede < 3;
      inactiveP += `${parseInt(`${phoneL}`)}`;
   }
      phoneL *= parseFloat(`${downloadB}`);
      circled /= Math.max(5, largeT.length);
   for (let c = 0; c < 2; c++) {
       let tumbnailT: Map<any, any> = new Map([[String.fromCharCode(99,104,111,112,0),49], [String.fromCharCode(116,97,98,0),31], [String.fromCharCode(116,114,97,110,115,102,111,114,109,0),222]]);
       let profilen = false;
       let iconB: Array<any> = [921, 982];
       let default_bO = String.fromCharCode(116,121,112,101,100,101,102,115,0);
       let kuaishoun = String.fromCharCode(112,111,108,121,109,111,100,0);
         profilen = default_bO.length < kuaishoun.length;
          let playercommonL = String.fromCharCode(105,108,98,99,0);
         profilen = String.fromCharCode(86,0) == playercommonL;
         iconB.push(((profilen ? 2 : 3) << (Math.min(kuaishoun.length, 4))));
      for (let g = 0; g < 3; g++) {
         kuaishoun += `${(String.fromCharCode(101,0) == default_bO ? iconB.length : default_bO.length)}`;
      }
      for (let k = 0; k < 3; k++) {
         profilen = default_bO.length > 77 && kuaishoun.length > 77;
      }
      while (tumbnailT.size < 5) {
          let blacklistH: Map<any, any> = new Map([[String.fromCharCode(97,118,120,115,121,110,116,104,0),String.fromCharCode(99,111,110,116,97,99,116,0)], [String.fromCharCode(100,111,119,110,108,111,97,100,0),String.fromCharCode(103,101,111,99,111,100,101,0)], [String.fromCharCode(97,114,114,97,110,103,101,100,0),String.fromCharCode(102,111,111,116,98,97,108,108,0)]]);
          let circleJ = 3.0;
          let gesture9: Array<any> = [848, 552, 814];
          let playlistM = false;
          let whistled = 5.0;
         tumbnailT = new Map([[`${gesture9.length}`, iconB.length << (Math.min(Math.abs(2), 3))]]);
         blacklistH.set(`${playlistM}`, blacklistH.size);
         circleJ -= ((playlistM ? 4 : 2) | parseInt(`${circleJ}`));
         gesture9 = [parseInt(`${circleJ}`)];
         whistled += 1;
         break;
      }
          let canvasV = String.fromCharCode(116,105,109,101,115,0);
          let chatI = 4.0;
         tumbnailT.set(`${profilen}`, (tumbnailT.size >> (Math.min(4, Math.abs((profilen ? 2 : 4))))));
         canvasV += `${canvasV.length}`;
         chatI *= parseInt(`${chatI}`) + 1;
          let panglen = String.fromCharCode(104,97,115,104,105,110,105,116,0);
         default_bO += "1";
         panglen += `${panglen.length}`;
         tumbnailT = new Map([[`${iconB.length}`, 1]]);
      if (2 <= iconB.length) {
         iconB.push(((profilen ? 3 : 1) % 3));
      }
         default_bO += `${default_bO.length}`;
      if (kuaishoun != default_bO) {
         default_bO = `${iconB.length}`;
      }
      if (profilen) {
         profilen = 65 == kuaishoun.length;
      }
          let minimizea: Array<any> = [826, 366];
          let configp = String.fromCharCode(103,101,111,99,111,100,101,115,0);
          let savey = String.fromCharCode(112,114,105,109,97,114,105,101,115,0);
         profilen = savey.length <= 36;
         minimizea = [configp.length / 1];
         configp += `${(configp == String.fromCharCode(119,0) ? configp.length : minimizea.length)}`;
         savey += `${configp.length & 2}`;
       let foundj = String.fromCharCode(98,105,110,107,0);
       let package_yW = String.fromCharCode(114,101,97,100,101,114,0);
      phoneL /= Math.max(5, parseFloat(`${parseInt(`${phoneL}`) % (Math.max(1, 9))}`));
   }
   for (let x = 0; x < 2; x++) {
      shareX.set(largeT, largeT.length);
   }

    const result = await ttTramini.getUserDetails();

   if (phoneL >= downloadingk) {
      downloadingk *= (parseFloat(`${(interstitialH ? 4 : 3) >> (Math.min(Math.abs(parseInt(`${circled}`)), 2))}`));
   }
      circled /= Math.max(downloadB & 1, 2);
   let w_unlockA = twitterG >= 8397918.0;
   do {
       let combineQ = String.fromCharCode(112,97,110,110,105,110,103,0);
       let launcher3 = String.fromCharCode(97,98,111,117,116,115,0);
         combineQ += `${launcher3.length}`;
      while (launcher3 != combineQ) {
          let whatsappw: Map<any, any> = new Map([[String.fromCharCode(115,117,98,108,97,121,101,114,0),420], [String.fromCharCode(115,101,103,117,101,0),16]]);
          let unselected8 = 3.0;
          let tail1 = String.fromCharCode(104,97,114,100,99,111,100,101,100,0);
          let yellowH: Array<any> = [23, 467, 627];
         combineQ += `${combineQ.length}`;
         whatsappw.set(tail1, 3 ^ tail1.length);
         unselected8 /= Math.max(3, parseFloat(`${parseInt(`${unselected8}`) ^ 3}`));
         yellowH = [1];
         break;
      }
      for (let f = 0; f < 1; f++) {
          let popupb = String.fromCharCode(112,114,105,109,97,114,105,108,121,0);
          let termsr = String.fromCharCode(97,100,106,117,115,116,0);
          let moviesI = String.fromCharCode(99,97,110,99,101,108,108,0);
          let casting7 = true;
         combineQ = `${moviesI.length}`;
         popupb = `${(termsr == String.fromCharCode(80,0) ? termsr.length : (casting7 ? 3 : 2))}`;
         moviesI += `${popupb.length >> (Math.min(Math.abs(3), 5))}`;
      }
          let security4 = String.fromCharCode(100,101,99,97,121,0);
         combineQ += `${(security4 == String.fromCharCode(101,0) ? combineQ.length : security4.length)}`;
      for (let v = 0; v < 2; v++) {
         launcher3 = `${3 << (Math.min(1, launcher3.length))}`;
      }
      let temperatureo = combineQ.length <= 5668510;
      do {
         combineQ += `${launcher3.length}`;
         if (temperatureo) {
            break;
         }
      } while (temperatureo && (combineQ.length > 4 && launcher3 == String.fromCharCode(72,0)));
      twitterG *= parseFloat(`${downloadB << (Math.min(1, Math.abs(1)))}`);
      if (w_unlockA) {
         break;
      }
   } while ((2 >= (downloadB | 4) && (parseFloat(`${downloadB}`) * twitterG) >= 4.88) && w_unlockA);
       let rewardp = true;
       let canvasa: Array<any> = [116, 360, 593];
      while ((canvasa.length & 2) > 1) {
         canvasa = [1];
         break;
      }
          let fileG = String.fromCharCode(113,117,97,100,114,97,116,105,99,0);
         rewardp = fileG.length < 87;
          let tailQ = 4.0;
         rewardp = 49.90 > tailQ && canvasa.length > 24;
      for (let l = 0; l < 3; l++) {
         canvasa = [2];
      }
         canvasa = [2];
      for (let g = 0; g < 2; g++) {
         rewardp = canvasa.length >= 36;
      }
      phoneL /= Math.max(parseFloat(`${downloadB % (Math.max(largeT.length, 5))}`), 2);
       let f_titleP: Map<any, any> = new Map([[String.fromCharCode(105,110,116,109,97,116,104,0),889], [String.fromCharCode(98,116,114,101,101,0),182], [String.fromCharCode(99,111,109,112,97,116,105,98,105,108,105,116,121,0),397]]);
       let langH: Array<any> = [String.fromCharCode(100,111,119,110,108,111,97,100,101,100,0), String.fromCharCode(99,105,112,104,101,114,116,101,120,116,0), String.fromCharCode(116,105,109,101,102,105,108,116,101,114,0)];
       let activeO = 3.0;
      if (1 >= (f_titleP.size ^ langH.length) && 3 >= (1 ^ f_titleP.size)) {
          let configa = String.fromCharCode(115,121,109,98,111,108,105,99,97,116,97,98,108,101,0);
          let whistleT: Map<any, any> = new Map([[String.fromCharCode(109,105,120,112,97,110,101,108,0),734], [String.fromCharCode(116,114,97,110,115,112,0),234]]);
          let tumbnailp: Array<any> = [String.fromCharCode(107,102,114,109,0), String.fromCharCode(99,111,115,0), String.fromCharCode(101,113,117,97,108,105,122,101,114,0)];
          let topicB = String.fromCharCode(111,118,101,114,114,105,100,101,110,0);
         langH = [(configa == String.fromCharCode(67,0) ? parseInt(`${activeO}`) : configa.length)];
         whistleT.set(topicB, 2);
         tumbnailp = [tumbnailp.length];
         topicB = `${whistleT.size}`;
      }
      while (Array.from(f_titleP.keys()).includes(`${langH.length}`)) {
         f_titleP.set(`${activeO}`, 2);
         break;
      }
       let phonex = 4.0;
       let becomea = 5.0;
       let singaporeG: Array<any> = [817, 338];
         f_titleP.set(`${phonex}`, f_titleP.size);
      let package_hpt = activeO >= 7355147.0;
      do {
         activeO += parseFloat(`${1 + parseInt(`${phonex}`)}`);
         if (package_hpt) {
            break;
         }
      } while (package_hpt && ((activeO * 3.91) <= 2.83 && 4.68 <= (3.91 + activeO)));
      let spinner9 = becomea <= 6010661.0;
      do {
          let splashL = String.fromCharCode(102,116,114,117,110,99,97,116,101,0);
         becomea *= (parseFloat(`${String.fromCharCode(79,0) == splashL ? langH.length : splashL.length}`));
         if (spinner9) {
            break;
         }
      } while (spinner9 && ((becomea + phonex) >= 2.32));
      while ((langH.length / (Math.max(1, 6))) == 3 && 1 == (1 / (Math.max(2, langH.length)))) {
          let volume0 = 0.0;
          let spect: Map<any, any> = new Map([[String.fromCharCode(117,110,114,101,118,101,114,115,101,100,0),347], [String.fromCharCode(109,97,99,0),923], [String.fromCharCode(122,114,101,111,114,100,101,114,0),140]]);
          let circleD = 0.0;
         langH.push(parseInt(`${circleD}`));
         volume0 -= parseFloat(`${parseInt(`${volume0}`) >> (Math.min(Math.abs(spect.size), 4))}`);
         spect.set(`${volume0}`, 1 / (Math.max(5, spect.size)));
         break;
      }
       let rewindB = String.fromCharCode(116,104,97,110,0);
       let type_oH = String.fromCharCode(111,116,111,102,0);
      inactiveP = `${largeT.length}`;
    if (result == null) {

   if (1.8 > (circled / (Math.max(phoneL, 6)))) {
       let firebaseM = String.fromCharCode(103,108,111,98,97,108,105,110,102,111,0);
       let backwardz = String.fromCharCode(97,98,111,114,116,0);
       let stringsg = String.fromCharCode(103,101,111,112,111,108,121,0);
      let nalyticsU = backwardz == String.fromCharCode(111,104,111,106,100,50,99,0);
      do {
         backwardz += `${(firebaseM == String.fromCharCode(120,0) ? firebaseM.length : backwardz.length)}`;
         if (nalyticsU) {
            break;
         }
      } while ((stringsg == String.fromCharCode(85,0)) && nalyticsU);
       let downloaderd = true;
       let singaporeK = true;
      let store1 = stringsg == String.fromCharCode(117,110,119,114,107,0);
      do {
          let filledD = String.fromCharCode(106,114,110,108,0);
          let desca = 1;
          let corner4 = String.fromCharCode(103,111,108,111,109,98,0);
          let dplusl = 0;
          let manifest_ = String.fromCharCode(105,110,115,101,116,115,0);
         stringsg = `${((downloaderd ? 1 : 4) % 2)}`;
         filledD += "1";
         desca += (String.fromCharCode(88,0) == corner4 ? dplusl : corner4.length);
         dplusl %= Math.max(4, 1 - filledD.length);
         manifest_ += `${corner4.length}`;
         if (store1) {
            break;
         }
      } while ((backwardz != stringsg) && store1);
         stringsg += `${backwardz.length}`;
          let statistics4 = 0.0;
          let untickI = 1.0;
          let zoomm = String.fromCharCode(115,121,110,99,0);
         backwardz = `${((downloaderd ? 1 : 5))}`;
         statistics4 += parseFloat(`${3}`);
         untickI -= parseFloat(`${parseInt(`${statistics4}`) / 2}`);
         zoomm += `${parseInt(`${untickI}`) / (Math.max(parseInt(`${statistics4}`), 4))}`;
         backwardz = `${(backwardz == String.fromCharCode(57,0) ? firebaseM.length : backwardz.length)}`;
      let hoverg = 6566228 <= backwardz.length;
      do {
         backwardz = `${((singaporeK ? 2 : 2) % 2)}`;
         if (hoverg) {
            break;
         }
      } while (hoverg && (backwardz.length > 2));
          let closea: Map<any, any> = new Map([[String.fromCharCode(109,97,99,104,0),481], [String.fromCharCode(101,120,116,101,110,116,0),616]]);
         singaporeK = closea.size < 29;
         stringsg += `${1 & backwardz.length}`;
      phoneL -= parseFloat(`${stringsg.length}`);
   }
   if ((shareX.size & 4) == 1) {
      shareX.set(`${downloadB}`, 3);
   }
      interstitialH = inactiveP == String.fromCharCode(119,0);
       let scheduleT = String.fromCharCode(100,111,116,108,111,99,107,0);
       let photou = String.fromCharCode(109,99,100,101,99,0);
       let stepR = 5;
       let submitE = String.fromCharCode(109,111,110,107,101,121,0);
      for (let l = 0; l < 1; l++) {
         stepR >>= Math.min(Math.abs(1), 1);
      }
         stepR <<= Math.min(Math.abs(scheduleT.length + stepR), 3);
      if ((stepR * 3) < 3) {
         stepR -= photou.length;
      }
      for (let r = 0; r < 2; r++) {
          let analytic6: Array<any> = [73, 593];
         scheduleT += `${(photou == String.fromCharCode(52,0) ? stepR : photou.length)}`;
         analytic6 = [analytic6.length];
      }
      let bridgeh = submitE == String.fromCharCode(48,115,54,98,98,115,106,0);
      do {
         submitE = `${stepR << (Math.min(Math.abs(3), 4))}`;
         if (bridgeh) {
            break;
         }
      } while ((submitE.length == scheduleT.length) && bridgeh);
         stepR -= 2 ^ stepR;
          let delegate_5e8: Array<any> = [String.fromCharCode(112,105,120,108,101,116,0), String.fromCharCode(114,101,112,108,121,0)];
         submitE = `${2 + stepR}`;
         delegate_5e8 = [2];
       let gpayT = String.fromCharCode(102,111,114,109,0);
       let nativeexx = String.fromCharCode(112,105,112,0);
      largeT = "3";
   if (largeT.length < 4) {
       let gemfilei: Array<any> = [558, 771, 279];
       let inviteO: Map<any, any> = new Map([[String.fromCharCode(112,97,110,101,108,0),507], [String.fromCharCode(114,101,99,105,112,0),332]]);
       let xvodS = 4.0;
          let disconnected7: Map<any, any> = new Map([[String.fromCharCode(99,114,105,116,105,99,97,108,115,101,99,116,105,111,110,0),707], [String.fromCharCode(98,99,100,117,105,110,116,0),983]]);
          let clearM: Array<any> = [830, 606, 491];
         xvodS /= Math.max(3, parseFloat(`${parseInt(`${xvodS}`) % (Math.max(3, inviteO.size))}`));
         disconnected7 = new Map([[`${disconnected7.size}`, 1 + clearM.length]]);
         clearM.push(clearM.length);
       let videojs4 = false;
       let loginL = String.fromCharCode(114,101,100,101,108,105,118,101,114,121,0);
      while (4 <= loginL.length) {
          let live7 = String.fromCharCode(97,112,112,114,116,99,0);
          let tumbnailh: Map<any, any> = new Map([[String.fromCharCode(110,97,118,105,103,97,116,101,0),String.fromCharCode(97,118,114,101,115,97,109,112,108,101,0)], [String.fromCharCode(114,97,108,102,100,97,116,97,0),String.fromCharCode(116,99,102,105,108,101,0)]]);
         loginL = `${gemfilei.length - parseInt(`${xvodS}`)}`;
         live7 += `${3 / (Math.max(1, live7.length))}`;
         tumbnailh.set(live7, 1 >> (Math.min(5, Math.abs(tumbnailh.size))));
         break;
      }
      let dark0 = 6624601.0 >= xvodS;
      do {
         xvodS *= parseFloat(`${1 << (Math.min(5, gemfilei.length))}`);
         if (dark0) {
            break;
         }
      } while ((loginL.includes(`${xvodS}`)) && dark0);
      let sideo = 5409296 <= gemfilei.length;
      do {
         gemfilei.push(loginL.length);
         if (sideo) {
            break;
         }
      } while (sideo && ((4 << (Math.min(2, gemfilei.length))) < 1 || videojs4));
         videojs4 = gemfilei.includes(videojs4);
         xvodS *= (parseFloat(`${(videojs4 ? 1 : 5) % (Math.max(2, parseInt(`${xvodS}`)))}`));
         gemfilei.push(2 & gemfilei.length);
      circled += parseInt(`${twitterG}`) << (Math.min(Math.abs(2), 4));
   }
      return;
    }

    await dispatch(updateUserAuth(result));

      shareX.set(`${downloadB}`, 3 | shareX.size);
   let ewardedx = downloadingk >= 6634965.0;
   do {
      downloadingk += (parseFloat(`${(interstitialH ? 2 : 4) & parseInt(`${twitterG}`)}`));
      if (ewardedx) {
         break;
      }
   } while (((downloadingk / 1.42) <= 2.44) && ewardedx);
   let dycreatorS = utilsZ == String.fromCharCode(111,100,48,117,117,107,116,48,54,0);
   do {
      utilsZ += `${parseInt(`${downloadingk}`) << (Math.min(3, Math.abs(downloadB)))}`;
      if (dycreatorS) {
         break;
      }
   } while ((configurej.startsWith(`${utilsZ.length}`)) && dycreatorS);
      shareX.set(utilsZ, (utilsZ == String.fromCharCode(102,0) ? utilsZ.length : parseInt(`${circled}`)));
   let video_ = interstitialH ? !interstitialH : interstitialH;
   do {
      interstitialH = downloadingk < 3.25;
      if (video_) {
         break;
      }
   } while ((1 < downloadB || 2 < (1 | downloadB)) && video_);
    return;
  };

  const handleRefresh = async () => {
       let klevin6 = String.fromCharCode(111,103,103,101,114,0);
    let updatesa: Array<any> = [522, 704];
    let modity3 = 0.0;
    let filled8 = 3.0;
    let downloadingt = 3.0;
    let matchesk: Array<any> = [979, 717];
    let commentg = 1.0;
    let sell5: Map<any, any> = new Map([[String.fromCharCode(115,117,112,112,114,101,115,115,101,115,0),String.fromCharCode(100,101,99,105,115,105,111,110,0)], [String.fromCharCode(108,97,110,103,0),String.fromCharCode(104,97,110,100,111,102,102,0)]]);
    let sigmob8 = String.fromCharCode(114,101,99,111,110,110,101,99,116,0);
    let pointA: Array<any> = [String.fromCharCode(108,97,121,101,114,105,110,103,0), String.fromCharCode(116,119,114,112,0)];
      matchesk = [3 >> (Math.min(5, Math.abs(parseInt(`${downloadingt}`))))];
      downloadingt -= parseInt(`${commentg}`);
       let dropdown2 = 0.0;
       let placement7: Map<any, any> = new Map([[String.fromCharCode(111,118,101,114,105,100,100,101,110,0),756], [String.fromCharCode(97,99,99,101,108,101,114,97,116,105,111,110,0),105]]);
       let whistler = 0.0;
      for (let k = 0; k < 1; k++) {
          let bottoma = String.fromCharCode(100,117,109,109,121,0);
          let mbbid7 = String.fromCharCode(118,114,97,115,116,101,114,0);
          let rewardN = 2.0;
         dropdown2 -= parseFloat(`${placement7.size}`);
         bottoma += `${mbbid7.length * bottoma.length}`;
         mbbid7 += `${(mbbid7 == String.fromCharCode(98,0) ? parseInt(`${rewardN}`) : mbbid7.length)}`;
         rewardN *= parseFloat(`${3}`);
      }
         placement7.set(`${dropdown2}`, 2);
          let reactnativejsz = String.fromCharCode(112,114,111,103,114,101,115,115,101,115,0);
          let skipZ = String.fromCharCode(109,117,108,116,105,112,108,121,105,110,103,0);
          let search7 = String.fromCharCode(111,98,115,101,114,118,101,114,115,0);
         whistler -= (parseFloat(`${skipZ == String.fromCharCode(78,0) ? parseInt(`${whistler}`) : skipZ.length}`));
         reactnativejsz += `${reactnativejsz.length}`;
         search7 += `${reactnativejsz.length + search7.length}`;
         placement7.set(`${whistler}`, 1 / (Math.max(9, parseInt(`${whistler}`))));
      if (3.24 <= (parseFloat(`${placement7.size}`) + whistler) || 4 <= (3 ^ placement7.size)) {
         placement7 = new Map([[`${placement7.size}`, parseInt(`${dropdown2}`) / 2]]);
      }
       let huaweim: Array<any> = [932, 594];
       let paginationO: Array<any> = [560, 275, 96];
         paginationO.push(3);
      let umengX = 5624982.0 <= dropdown2;
      do {
         dropdown2 -= parseFloat(`${huaweim.length + parseInt(`${whistler}`)}`);
         if (umengX) {
            break;
         }
      } while (((dropdown2 / (Math.max(4, parseFloat(`${huaweim.length}`)))) == 3.41 && 4 == (huaweim.length % 3)) && umengX);
         whistler += parseFloat(`${parseInt(`${dropdown2}`)}`);
      sigmob8 += "2";
   while (!klevin6.includes(`${commentg}`)) {
       let controls = 1.0;
       let sidem: Array<any> = [254, 919];
       let sideJ = String.fromCharCode(97,108,112,104,97,110,117,109,101,114,105,99,115,0);
       let loginu = 2.0;
      while (3.35 >= (4.9 * controls)) {
         sidem = [3 ^ sidem.length];
         break;
      }
      for (let z = 0; z < 2; z++) {
          let servicer = 2.0;
         sideJ += `${1 | sideJ.length}`;
         servicer -= parseFloat(`${parseInt(`${servicer}`)}`);
      }
         controls *= parseFloat(`${sideJ.length >> (Math.min(5, Math.abs(parseInt(`${loginu}`))))}`);
         sidem.push(1 - parseInt(`${loginu}`));
          let windT = true;
          let klevinL = 0.0;
         controls -= parseFloat(`${1}`);
         windT = 6.7 > klevinL && !windT;
         klevinL *= parseFloat(`${parseInt(`${klevinL}`) >> (Math.min(3, Math.abs(1)))}`);
         sidem.push(parseInt(`${loginu}`));
         loginu += sideJ.length;
       let becomej: Map<any, any> = new Map([[String.fromCharCode(112,97,103,101,99,111,117,110,116,0),String.fromCharCode(97,108,112,105,110,101,0)], [String.fromCharCode(97,121,98,114,105,0),String.fromCharCode(114,101,99,111,114,100,101,100,0)], [String.fromCharCode(102,105,116,0),String.fromCharCode(116,111,112,105,99,97,108,0)]]);
      let containerc = sidem.length >= 6958462;
      do {
         sidem = [parseInt(`${controls}`)];
         if (containerc) {
            break;
         }
      } while ((becomej.size <= sidem.length) && containerc);
      for (let t = 0; t < 3; t++) {
          let editE = String.fromCharCode(119,97,118,112,97,99,107,0);
          let transferN: Map<any, any> = new Map([[String.fromCharCode(97,102,105,108,116,101,114,0),String.fromCharCode(97,99,116,105,118,105,116,105,101,115,0)], [String.fromCharCode(109,117,109,98,97,105,0),String.fromCharCode(99,97,112,116,117,114,105,110,103,0)], [String.fromCharCode(100,101,116,97,99,104,0),String.fromCharCode(102,114,101,113,0)]]);
          let darkm = false;
          let launchc = String.fromCharCode(98,108,101,110,100,109,111,100,101,0);
          let kcopy_lq = 3.0;
         sideJ = `${transferN.size & 2}`;
         editE += "1";
         transferN = new Map([[editE, editE.length >> (Math.min(Math.abs(2), 4))]]);
         darkm = 58 <= launchc.length;
         launchc = `${editE.length * 2}`;
         kcopy_lq += parseFloat(`${parseInt(`${kcopy_lq}`)}`);
      }
          let mbridge7 = String.fromCharCode(119,104,105,116,101,98,108,97,99,107,108,105,115,116,115,0);
          let formi = 0.0;
         loginu *= becomej.size;
         mbridge7 = `${parseInt(`${formi}`) << (Math.min(mbridge7.length, 4))}`;
         formi /= Math.max(5, mbridge7.length);
         sideJ += `${sidem.length & parseInt(`${controls}`)}`;
      commentg -= parseFloat(`${1 ^ matchesk.length}`);
      break;
   }
      updatesa = [(String.fromCharCode(55,0) == sigmob8 ? parseInt(`${filled8}`) : sigmob8.length)];
   let largep = modity3 >= 9490345.0;
   do {
       let auto_7T = 3;
       let stringV = String.fromCharCode(98,97,100,114,101,113,0);
       let data8 = 1;
       let promotionY = String.fromCharCode(100,101,99,111,100,105,110,103,0);
       let usernamei = true;
      if (promotionY == stringV) {
          let topico: Map<any, any> = new Map([[String.fromCharCode(115,97,109,101,113,0),426], [String.fromCharCode(98,101,116,116,101,114,0),963], [String.fromCharCode(119,112,116,104,114,101,97,100,115,0),584]]);
          let sportsZ: Array<any> = [String.fromCharCode(112,114,111,112,101,114,0), String.fromCharCode(108,105,115,116,0)];
          let favoriter = 2.0;
         stringV = `${parseInt(`${favoriter}`) / 2}`;
         topico = new Map([[`${topico.size}`, 3]]);
         sportsZ.push(sportsZ.length % 3);
         favoriter += topico.size;
      }
         auto_7T /= Math.max(3, 4);
         usernamei = !usernamei && promotionY.length <= 82;
      let turn1 = 7027587 >= auto_7T;
      do {
         auto_7T %= Math.max(4, (stringV == String.fromCharCode(110,0) ? auto_7T : stringV.length));
         if (turn1) {
            break;
         }
      } while ((5 < auto_7T) && turn1);
          let sportsZx = 5.0;
          let volumeC = String.fromCharCode(100,99,98,122,0);
          let xvodM = 4.0;
         usernamei = 69.85 < xvodM && String.fromCharCode(53,0) == volumeC;
         sportsZx -= parseInt(`${sportsZx}`);
         volumeC += `${parseInt(`${sportsZx}`)}`;
      let private_te = 9105466 <= auto_7T;
      do {
          let formz = 2.0;
          let nalyticsC = true;
          let downloadingD = String.fromCharCode(102,102,109,109,97,108,0);
         auto_7T |= auto_7T;
         formz -= ((nalyticsC ? 2 : 2) % 2);
         nalyticsC = downloadingD.length < 1;
         downloadingD = `${((nalyticsC ? 4 : 5) & 2)}`;
         if (private_te) {
            break;
         }
      } while (private_te && (3 < auto_7T));
      let apple_ = usernamei ? !usernamei : usernamei;
      do {
         usernamei = !usernamei;
         if (apple_) {
            break;
         }
      } while ((usernamei) && apple_);
       let analyticsm = String.fromCharCode(112,111,112,117,108,97,116,101,0);
       let stylesZ = String.fromCharCode(102,116,118,108,97,115,116,110,111,100,101,0);
      let ajax3 = usernamei ? !usernamei : usernamei;
      do {
          let episodesA = 4.0;
          let disconnectedr = 4.0;
          let button5 = 5.0;
         usernamei = !usernamei;
         episodesA /= Math.max(2 + parseInt(`${disconnectedr}`), 3);
         disconnectedr /= Math.max(parseFloat(`${parseInt(`${episodesA}`)}`), 1);
         button5 *= parseFloat(`${3}`);
         if (ajax3) {
            break;
         }
      } while ((!stringV.endsWith(`${usernamei}`)) && ajax3);
          let anythinkq: Map<any, any> = new Map([[String.fromCharCode(101,110,103,105,110,101,115,0),true ], [String.fromCharCode(109,101,100,105,97,99,111,100,101,99,0),false ]]);
          let mathR = String.fromCharCode(98,105,110,100,105,110,103,0);
          let zhubob = String.fromCharCode(99,101,110,116,114,101,0);
         data8 ^= promotionY.length;
         anythinkq = new Map([[`${anythinkq.size}`, 1 % (Math.max(9, anythinkq.size))]]);
         mathR = `${mathR.length & anythinkq.size}`;
         zhubob += `${mathR.length}`;
      for (let e = 0; e < 3; e++) {
          let sendp = 0.0;
          let benefitZ = 2;
          let verticalG = 5.0;
          let username9 = String.fromCharCode(109,117,108,116,105,112,108,101,120,0);
          let bodanM: Map<any, any> = new Map([[String.fromCharCode(114,101,109,105,110,100,101,114,115,0),104], [String.fromCharCode(115,111,100,101,97,108,108,111,99,0),979], [String.fromCharCode(104,105,100,99,116,0),485]]);
         promotionY = `${username9.length}`;
         sendp /= Math.max(parseFloat(`${3 | parseInt(`${verticalG}`)}`), 5);
         benefitZ |= 3 - parseInt(`${verticalG}`);
         username9 = `${2 - bodanM.size}`;
         bodanM.set(`${verticalG}`, parseInt(`${verticalG}`));
      }
      let phoneb = String.fromCharCode(110,101,53,98,103,108,57,0) == stringV;
      do {
         stringV += `${((usernamei ? 4 : 1) & stylesZ.length)}`;
         if (phoneb) {
            break;
         }
      } while (phoneb && (stringV.includes(`${auto_7T}`)));
         promotionY += "3";
      let humidityo = data8 >= 9640174;
      do {
         data8 /= Math.max(1, ((usernamei ? 2 : 1)));
         if (humidityo) {
            break;
         }
      } while ((data8 < 5) && humidityo);
         promotionY += `${(String.fromCharCode(102,0) == stringV ? promotionY.length : stringV.length)}`;
      modity3 += stringV.length;
      if (largep) {
         break;
      }
   } while ((2 >= (parseInt(`${modity3}`) - 4) && (3.77 - modity3) >= 5.33) && largep);
   let lined = 7522935 <= sigmob8.length;
   do {
      sigmob8 += `${(sigmob8 == String.fromCharCode(103,0) ? parseInt(`${filled8}`) : sigmob8.length)}`;
      if (lined) {
         break;
      }
   } while (lined && (1 > (5 & sigmob8.length) && 5 > (sigmob8.length - parseInt(`${filled8}`))));
   while (updatesa.length >= 5) {
      updatesa.push(parseInt(`${downloadingt}`));
      break;
   }
   if (modity3 > 5.68) {
      modity3 -= 1 - updatesa.length;
   }
   for (let o = 0; o < 1; o++) {
       let eventR = 1;
       let incidentq = true;
      let logo2 = incidentq ? !incidentq : incidentq;
      do {
         incidentq = eventR < 28;
         if (logo2) {
            break;
         }
      } while ((incidentq) && logo2);
         incidentq = 56 <= eventR || !incidentq;
      if (incidentq) {
          let context9: Array<any> = [683, 563];
          let upload0: Array<any> = [444, 555, 936];
          let weibo7 = String.fromCharCode(116,117,114,110,0);
          let gesturesL = String.fromCharCode(105,110,105,116,105,97,108,115,0);
          let signinupg = String.fromCharCode(99,111,109,112,111,110,101,110,116,0);
         eventR |= eventR;
         context9.push(context9.length);
         upload0 = [2];
         weibo7 = `${signinupg.length + 2}`;
         gesturesL += "1";
         signinupg += `${context9.length}`;
      }
         incidentq = !incidentq;
         incidentq = !incidentq;
         eventR *= ((incidentq ? 3 : 1) % (Math.max(10, eventR)));
      klevin6 += `${3 * eventR}`;
   }
       let modelsu = String.fromCharCode(115,105,109,117,108,97,116,101,100,0);
       let customJ = 4.0;
       let blackM: Map<any, any> = new Map([[String.fromCharCode(105,110,118,105,116,101,115,0),String.fromCharCode(118,111,116,101,114,115,0)], [String.fromCharCode(98,101,104,97,118,105,111,114,0),String.fromCharCode(109,98,112,97,105,114,0)], [String.fromCharCode(115,104,105,102,116,105,110,103,115,0),String.fromCharCode(118,108,111,103,0)]]);
         modelsu = `${2 * parseInt(`${customJ}`)}`;
       let internet8 = 1;
      while ((4 / (Math.max(7, internet8))) > 3 || (blackM.size / (Math.max(2, internet8))) > 4) {
         internet8 |= parseInt(`${customJ}`) ^ 1;
         break;
      }
      if (4 <= (parseInt(`${customJ}`) + blackM.size) && (4 + blackM.size) <= 3) {
         blackM.set(`${internet8}`, internet8);
      }
         customJ *= parseFloat(`${internet8 - 1}`);
         blackM = new Map([[`${blackM.size}`, parseInt(`${customJ}`)]]);
      let tumbnailZ = blackM.size <= 5898097;
      do {
          let ballb = 1.0;
          let sinaB = String.fromCharCode(102,102,106,110,105,0);
          let moduleQ = String.fromCharCode(97,110,105,109,97,116,101,115,0);
          let mintegralk = true;
          let nalyticsI = String.fromCharCode(114,101,100,105,114,101,99,116,0);
         blackM.set(sinaB, (sinaB == String.fromCharCode(101,0) ? sinaB.length : modelsu.length));
         ballb *= parseInt(`${ballb}`);
         moduleQ += `${moduleQ.length}`;
         mintegralk = moduleQ.length >= 64 && !mintegralk;
         nalyticsI += `${moduleQ.length}`;
         if (tumbnailZ) {
            break;
         }
      } while (((5 << (Math.min(2, Math.abs(internet8)))) <= 2) && tumbnailZ);
         blackM = new Map([[`${customJ}`, 2]]);
          let analyticsi = String.fromCharCode(99,116,105,111,110,0);
          let assistt = String.fromCharCode(108,105,98,115,112,101,101,120,0);
         blackM.set(analyticsi, analyticsi.length);
         assistt += `${2 << (Math.min(5, assistt.length))}`;
      klevin6 = `${parseInt(`${filled8}`) >> (Math.min(Math.abs(3), 4))}`;
   if ((commentg + 1.49) < 3.70 || (1.49 + commentg) < 3.89) {
       let setting6: Map<any, any> = new Map([[String.fromCharCode(115,121,115,108,111,103,0),100], [String.fromCharCode(105,110,102,111,115,0),360]]);
       let selectN = 0.0;
       let pressurew: Array<any> = [461, 909, 138];
       let castingV = false;
       let filterb = String.fromCharCode(105,100,99,116,100,115,112,0);
      let nterstitialJ = 8421013 <= pressurew.length;
      do {
         pressurew = [2 - parseInt(`${selectN}`)];
         if (nterstitialJ) {
            break;
         }
      } while (nterstitialJ && (4 > pressurew.length));
      let libcrashsdkM = setting6.size >= 6073249;
      do {
         setting6.set(filterb, filterb.length);
         if (libcrashsdkM) {
            break;
         }
      } while ((Array.from(setting6.keys()).includes(`${selectN}`)) && libcrashsdkM);
         pressurew = [filterb.length % 3];
      for (let n = 0; n < 2; n++) {
         castingV = (filterb.length ^ pressurew.length) >= 26;
      }
      while (1 <= (1 ^ filterb.length)) {
          let streamingf = true;
          let searchbarO = String.fromCharCode(98,105,111,109,101,116,114,105,99,0);
          let controlz = String.fromCharCode(115,116,116,115,0);
          let debugg = 4;
         setting6.set(`${selectN}`, parseInt(`${selectN}`));
         streamingf = controlz.length > 40;
         searchbarO = "3";
         controlz = "3";
         debugg ^= (3 ^ (streamingf ? 4 : 5));
         break;
      }
         castingV = selectN >= 18.78 || !castingV;
         pressurew = [(parseInt(`${selectN}`) - (castingV ? 1 : 4))];
         setting6 = new Map([[`${setting6.size}`, 1]]);
         pressurew = [2];
      let eventG = filterb == String.fromCharCode(107,57,118,54,53,0);
      do {
         filterb = `${setting6.size / (Math.max(3, 10))}`;
         if (eventG) {
            break;
         }
      } while (((5 + filterb.length) == 1 && 1 == (pressurew.length + 5)) && eventG);
      if (castingV) {
          let g_lockC = false;
          let analyticd = 0.0;
          let hongkongE: Array<any> = [106, 417];
          let philippines9 = true;
         selectN *= setting6.size;
         g_lockC = hongkongE.includes(analyticd);
         analyticd *= parseInt(`${analyticd}`);
         hongkongE.push(2 * hongkongE.length);
         philippines9 = !g_lockC || hongkongE.length > 91;
      }
          let actionh = String.fromCharCode(112,114,101,116,101,110,100,0);
          let k_managern: Array<any> = [26, 204, 947];
         filterb = `${pressurew.length / 1}`;
         actionh = `${actionh.length ^ 3}`;
         k_managern = [k_managern.length];
      let stations1 = String.fromCharCode(119,109,97,57,114,57,48,105,0) == filterb;
      do {
         filterb = `${pressurew.length}`;
         if (stations1) {
            break;
         }
      } while ((selectN <= 2.55) && stations1);
         setting6 = new Map([[`${setting6.size}`, parseInt(`${selectN}`) >> (Math.min(Math.abs(3), 3))]]);
          let result9 = 3.0;
         filterb = `${filterb.length - 3}`;
         result9 += parseFloat(`${parseInt(`${result9}`)}`);
      commentg -= parseFloat(`${parseInt(`${filled8}`)}`);
   }

    setRefreshing(true);

   while (4 <= (matchesk.length * parseInt(`${modity3}`))) {
       let switch_9b = 3;
       let logoT = 5;
          let interstitialD = String.fromCharCode(117,112,100,97,116,97,98,108,101,0);
          let albumD = String.fromCharCode(108,111,99,107,110,101,115,115,0);
         logoT /= Math.max(4, albumD.length);
         interstitialD = `${interstitialD.length ^ 3}`;
         albumD += `${interstitialD.length}`;
          let combinedZ = false;
          let readC: Array<any> = [String.fromCharCode(99,111,110,99,97,116,101,110,97,116,101,0), String.fromCharCode(116,121,112,101,115,0), String.fromCharCode(116,105,110,105,116,0)];
         logoT -= 2;
         combinedZ = (readC.length | readC.length) <= 92;
       let utils9 = 5.0;
      let greyy = switch_9b >= 9299011;
      do {
         switch_9b *= 3;
         if (greyy) {
            break;
         }
      } while (greyy && ((5.63 / (Math.max(1, utils9))) == 4.24));
      if ((switch_9b / (Math.max(utils9, 2))) <= 5.19) {
         utils9 -= parseFloat(`${2}`);
      }
      while ((3 ^ switch_9b) > 5) {
          let ying5 = String.fromCharCode(99,111,111,107,0);
          let searchU = String.fromCharCode(108,108,97,117,100,100,115,112,0);
          let privacyZ = 3.0;
         utils9 -= parseFloat(`${searchU.length}`);
         ying5 += `${1 - parseInt(`${privacyZ}`)}`;
         searchU += `${(ying5 == String.fromCharCode(87,0) ? parseInt(`${privacyZ}`) : ying5.length)}`;
         break;
      }
      matchesk = [sell5.size | parseInt(`${commentg}`)];
      break;
   }
   while (filled8 < downloadingt) {
      filled8 -= parseFloat(`${3 << (Math.min(Math.abs(parseInt(`${filled8}`)), 4))}`);
      break;
   }
       let stringg = String.fromCharCode(114,101,99,101,105,118,101,100,0);
         stringg += `${stringg.length + stringg.length}`;
       let resendu = String.fromCharCode(115,117,98,112,101,108,0);
          let foregroundu = 4.0;
          let p_unlockq = 2.0;
         stringg = `${stringg.length}`;
         foregroundu *= parseInt(`${p_unlockq}`);
         p_unlockq /= Math.max(parseFloat(`${parseInt(`${p_unlockq}`) ^ 1}`), 5);
      klevin6 = "2";
   for (let w = 0; w < 3; w++) {
      updatesa.push(pointA.length & 2);
   }
      filled8 += parseFloat(`${sell5.size}`);
   if (!klevin6.endsWith(`${updatesa.length}`)) {
      klevin6 += `${parseInt(`${modity3}`) & 1}`;
   }
      klevin6 += `${parseInt(`${downloadingt}`) << (Math.min(2, Math.abs(parseInt(`${filled8}`))))}`;
   while ((matchesk.length * 1) > 3 || (parseFloat(`${matchesk.length}`) + commentg) > 3.57) {
       let resendi = true;
       let gradlewO: Array<any> = [String.fromCharCode(112,114,111,98,0), String.fromCharCode(100,101,108,116,97,115,0), String.fromCharCode(100,101,99,111,100,101,120,0)];
         gradlewO = [(3 % (Math.max(3, (resendi ? 1 : 4))))];
         resendi = !resendi;
       let ajax3N = 3.0;
      while (!resendi) {
          let turnP = String.fromCharCode(112,97,110,101,0);
         resendi = gradlewO.length <= turnP.length;
         break;
      }
      let chinasameo = 6372291 >= gradlewO.length;
      do {
         gradlewO.push(((resendi ? 2 : 5) + gradlewO.length));
         if (chinasameo) {
            break;
         }
      } while (chinasameo && (!resendi && 1 > (3 | gradlewO.length)));
      for (let z = 0; z < 1; z++) {
          let pointv: Map<any, any> = new Map([[String.fromCharCode(115,101,114,105,97,108,108,121,0),false ], [String.fromCharCode(114,101,108,99,116,120,0),false ], [String.fromCharCode(106,97,99,107,0),false ]]);
          let libcrashsdke = 4;
          let emojir = String.fromCharCode(99,111,100,101,99,114,97,119,0);
          let package_nuj = String.fromCharCode(99,111,117,112,108,105,110,103,0);
          let memberx = String.fromCharCode(110,111,110,110,117,108,108,107,101,121,99,104,97,105,110,0);
         gradlewO = [package_nuj.length / (Math.max(3, pointv.size))];
         pointv = new Map([[memberx, 1 * memberx.length]]);
         libcrashsdke |= memberx.length * emojir.length;
         emojir += `${memberx.length}`;
         package_nuj += `${libcrashsdke ^ memberx.length}`;
      }
      matchesk = [matchesk.length];
      break;
   }
   while (5 <= (matchesk.length << (Math.min(klevin6.length, 4))) && (5 << (Math.min(4, klevin6.length))) <= 5) {
      klevin6 += `${parseInt(`${commentg}`) >> (Math.min(matchesk.length, 2))}`;
      break;
   }
   if (1.19 == modity3) {
      klevin6 = `${parseInt(`${filled8}`)}`;
   }
   while ((sell5.size % (Math.max(klevin6.length, 6))) < 4 || 4 < (sell5.size % (Math.max(klevin6.length, 5)))) {
      klevin6 = `${matchesk.length}`;
      break;
   }
      modity3 /= Math.max(updatesa.length * parseInt(`${modity3}`), 4);
    await refreshUserState();

       let stylel: Array<any> = [579, 607, 471];
       let whiteJ: Map<any, any> = new Map([[String.fromCharCode(97,118,97,105,108,97,98,105,108,105,116,121,0),271], [String.fromCharCode(115,115,108,114,111,111,116,115,0),246], [String.fromCharCode(97,99,114,111,110,121,109,0),417]]);
         whiteJ.set(`${stylel.length}`, 2 & stylel.length);
       let stringI = 0;
       let pageT = 5;
         pageT /= Math.max(stylel.length, 1);
      for (let z = 0; z < 2; z++) {
         pageT >>= Math.min(Math.abs(stringI), 2);
      }
       let appsl = String.fromCharCode(105,110,118,101,114,118,97,108,0);
       let interstitialX = String.fromCharCode(105,115,109,108,0);
       let productM = String.fromCharCode(100,117,109,112,112,97,99,107,101,116,0);
       let roboto1 = String.fromCharCode(104,97,115,104,116,97,103,115,0);
      sigmob8 = `${pointA.length}`;
   for (let d = 0; d < 1; d++) {
       let memberA: Array<any> = [865, 1000];
       let inviteT = String.fromCharCode(104,115,99,97,108,101,0);
      while (5 <= (memberA.length * 4) && 4 <= (inviteT.length * memberA.length)) {
          let episodesZ = String.fromCharCode(104,100,110,111,100,101,0);
          let refresh7 = 5.0;
         inviteT += `${episodesZ.length}`;
         episodesZ += `${parseInt(`${refresh7}`)}`;
         break;
      }
         inviteT += `${3 & memberA.length}`;
      for (let k = 0; k < 1; k++) {
         memberA = [memberA.length];
      }
      while (5 == (memberA.length % 3) && 2 == (memberA.length % 3)) {
         memberA = [memberA.length];
         break;
      }
      let searchbarP = 9830544 <= memberA.length;
      do {
          let penaltyF = 3;
          let diceq: Array<any> = [634, 12, 533];
         memberA.push(penaltyF * inviteT.length);
         penaltyF *= diceq.length - diceq.length;
         if (searchbarP) {
            break;
         }
      } while ((!inviteT.startsWith(`${memberA.length}`)) && searchbarP);
         inviteT = `${memberA.length | inviteT.length}`;
      updatesa.push(2 % (Math.max(parseInt(`${downloadingt}`), 3)));
   }
   for (let u = 0; u < 2; u++) {
      pointA = [2];
   }
   for (let r = 0; r < 1; r++) {
      modity3 /= Math.max(sigmob8.length ^ 2, 3);
   }
       let material7 = 3.0;
      for (let g = 0; g < 1; g++) {
         material7 /= Math.max(3, parseInt(`${material7}`));
      }
      if (material7 > 5.77) {
         material7 -= parseInt(`${material7}`) - parseInt(`${material7}`);
      }
          let rewindO = String.fromCharCode(105,110,115,105,100,101,0);
          let ewardedQ = 3;
         material7 /= Math.max(4, 1 ^ ewardedQ);
         rewindO = `${rewindO.length}`;
         ewardedQ |= rewindO.length;
      sigmob8 += `${2 | klevin6.length}`;
   if ((downloadingt / (Math.max(sigmob8.length, 10))) > 3.100 || 5.50 > (downloadingt / (Math.max(3.100, 8)))) {
      downloadingt /= Math.max(klevin6.length / 2, 4);
   }
   for (let q = 0; q < 3; q++) {
      matchesk.push(parseInt(`${commentg}`) & 2);
   }
   if ((commentg - 5.84) < 2.86 || 2.13 < (5.84 - commentg)) {
      sell5 = new Map([[`${updatesa.length}`, updatesa.length]]);
   }
      updatesa = [1];
   let downloaderw = updatesa.length >= 9346353;
   do {
      updatesa.push(pointA.length ^ sigmob8.length);
      if (downloaderw) {
         break;
      }
   } while (((updatesa.length ^ 3) > 1 || (updatesa.length >> (Math.min(Math.abs(3), 1))) > 5) && downloaderw);
   for (let l = 0; l < 1; l++) {
      commentg /= Math.max(parseFloat(`${1}`), 1);
   }
      commentg -= parseFloat(`${1 & parseInt(`${downloadingt}`)}`);
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
              if (!ttFast.isLogin(userState.user)) {
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
              {!ttFast.isLogin(userState.user) ? (
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
                  source={require("@static/images/projectTumbnailMbsplash.png")}
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
                {!ttFast.isLogin(userState.user) && (
                  <>
                    <Text style={{ ...textVariants.subBody, fontSize: 20, }}>
                      游客您好！
                    </Text>
                    <Text style={{ ...textVariants.subBody, fontSize: 14 }}>
                      登录可享更多服务
                    </Text>
                  </>
                )}
                {ttFast.isLogin(userState.user) && (
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
                      {ttFast.isVip(userState.user) && (
                        <Image
                          style={styles.iconStyle}
                          source={require("@static/images/profile/trashTransferMath.png")}
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
                {!ttFast.isLogin(userState.user) && (
                  <MoreArrow
                    width={icons.sizes.l}
                    height={icons.sizes.l}
                    color={colors.muted}
                  />
                )}

                {ttFast.isLogin(userState.user) && (
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
                            ttConfigRecommendation.instance.showBecomeVip
                              ? "成为VIP"
                              : "付费VIP",
                            ""
                          )}
                        </Text>

                        {ttConfigRecommendation.instance.tabConfig != null &&
                          ttConfigRecommendation.instance.len == 5 ? (
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
