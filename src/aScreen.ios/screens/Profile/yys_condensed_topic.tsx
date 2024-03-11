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
import { useAppDispatch, useAppSelector, useSelector } from "@hooks/yys_frame";
import { yys_MintegralLibavdevice } from "@redux/yys_sport_shrink";
import ShowMoreButton from "../../components/button/yys_sound_button";

import CollectionIcon from "@static/images/langValuesConfigure.svg";
import HistoryIcon from "@static/images/toponCross.svg";
import FeedbackIcon from "@static/images/yys_statistics.svg";
import SettingsIcon from "@static/images/gradleThailand.svg";
import InfoIcon from "@static/images/copy_uMacauFloater.svg";
import { useNavigation } from "@react-navigation/native";

import Orientation from "react-native-orientation-locker";
import ProfileIcon from "@static/images/rewardUnimplementedviewRight.svg";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import MoreArrow from "@static/images/toponLang.svg";
import EditIcn from "@static/images/profile/managerPhotoMbnativeadvanced.svg";

import VipIcon from "@static/images/feedbackComment.svg";
import VipArrow from "@static/images/gmailActivity.svg";
import AddIcon from "@static/images/vip/langMovies.svg";
import AddVideoIcon from "@static/images/add.svg";

import {
   hideBottomSheetAction,
   removeScreenAction,
   showLoginAction,
} from "@redux/actions/yys_runtimescheduler";
import NotificationModal from "../../components/modal/yys_graph";
import { updateUserAuth, updateUserReferral } from "@redux/actions/yys_gesture";
import ExpiredOverlay from "../../components/modal/yys_proxy_singapore";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { yys_MinivodPangle } from "../../../../yys_mimo_vignette";
import { SHOW_ZF_CONST, UMENG_CHANNEL } from "@utility/yys_ajax_switch";
import FastImage from "../../components/common/yys_vertical_collection";
import { yys_GesturesConst } from "@api";
import { yys_HejiCricket } from "@redux/reducers/yys_privacy_round";
import { yys_RelatedTooltips } from "@models/yys_project_pagination";
import { yys_DetailWhistle } from "../../../routes/yys_become_bootsplash";

function Profile({ navigation, route }: BottomTabScreenProps<any>) {
   const navigator = useNavigation();
   const { colors, textVariants, icons, spacing } = useTheme();
   const dispatch = useAppDispatch();
   const [refreshing, setRefreshing] = useState(false);
   const [displayedDate, setDisplayedDate] = useState("");
   const userState = useSelector<yys_HejiCricket>('userReducer');

   const [isDialogOpen, setIsDialogOpen] = useState(false);

   const toggleOverlay = () => {
      let promotionm = String.fromCharCode(111, 95, 55, 52, 95, 105, 110, 116, 101, 114, 120, 0);
      let disconnectedp: Map<any, any> = new Map([[String.fromCharCode(109, 100, 112, 114, 95, 101, 95, 53, 0), 118], [String.fromCharCode(110, 95, 57, 52, 95, 115, 104, 111, 119, 0), 665]]);
      let security4 = String.fromCharCode(103, 95, 49, 52, 95, 118, 99, 104, 113, 0);
      let pangle3 = String.fromCharCode(109, 95, 54, 55, 95, 115, 99, 116, 112, 0);
      let attributedstringM: Array<any> = [String.fromCharCode(109, 108, 115, 100, 95, 57, 95, 57, 56, 0), String.fromCharCode(103, 95, 51, 49, 95, 115, 116, 97, 116, 105, 115, 116, 105, 99, 0), String.fromCharCode(108, 111, 103, 115, 97, 109, 112, 108, 101, 95, 106, 95, 57, 51, 0)];
      let transfere = true;
      let selectr = String.fromCharCode(118, 95, 55, 57, 95, 121, 117, 118, 116, 101, 115, 116, 0);
      let tooltipsU = String.fromCharCode(100, 95, 50, 57, 95, 115, 105, 100, 101, 0);
      let libglogV = String.fromCharCode(113, 95, 56, 51, 95, 102, 108, 111, 111, 100, 0);
      let league4: Map<any, any> = new Map([[String.fromCharCode(100, 115, 109, 111, 116, 105, 111, 110, 95, 113, 95, 53, 52, 0), 849], [String.fromCharCode(115, 95, 49, 53, 95, 115, 105, 100, 101, 115, 0), 928], [String.fromCharCode(112, 111, 119, 116, 97, 98, 108, 101, 95, 122, 95, 57, 56, 0), 260]]);
      let away8 = String.fromCharCode(111, 98, 106, 95, 116, 95, 50, 52, 0);
      let regengO = 4.0;
      libglogV += `${promotionm.length >> (Math.min(Math.abs(1), 5))}`;
      for (let n = 0; n < 3; n++) {
         promotionm = "3";
      }
      pangle3 += `${selectr.length + security4.length}`;
      let humidityB = 7759804 >= promotionm.length;
      do {
         promotionm = "3";
         if (humidityB) {
            break;
         }
      } while (humidityB && (security4.length >= 1));
      pangle3 = `${(tooltipsU == String.fromCharCode(104, 0) ? tooltipsU.length : disconnectedp.size)}`;
      while (4 == libglogV.length) {
         libglogV = `${selectr.length}`;
         break;
      }
      let hongkongr = security4 == String.fromCharCode(120, 98, 101, 118, 0);
      do {
         let telegram0 = String.fromCharCode(106, 95, 56, 56, 95, 102, 111, 108, 100, 101, 114, 0);
         let configuret = false;
         let reminder1: Map<any, any> = new Map([[String.fromCharCode(115, 119, 97, 112, 121, 118, 98, 117, 102, 102, 101, 114, 95, 54, 95, 55, 49, 0), false], [String.fromCharCode(99, 111, 110, 116, 114, 111, 108, 108, 101, 100, 95, 103, 95, 51, 55, 0), false], [String.fromCharCode(113, 95, 57, 51, 95, 115, 105, 108, 101, 110, 116, 0), true]]);
         configuret = !configuret;
         configuret = telegram0.length == 26;
         for (let j = 0; j < 3; j++) {
            configuret = !configuret;
         }
         for (let t = 0; t < 1; t++) {
            reminder1 = new Map([[`${reminder1.size}`, (1 | (configuret ? 4 : 1))]]);
         }
         let footballF = String.fromCharCode(99, 97, 108, 99, 95, 100, 95, 54, 53, 0);
         let untick8 = String.fromCharCode(108, 95, 56, 51, 95, 105, 103, 110, 111, 114, 101, 115, 0);
         let leftv = String.fromCharCode(103, 95, 54, 54, 95, 111, 108, 100, 101, 115, 116, 0);
         let proxym = String.fromCharCode(114, 115, 104, 105, 102, 116, 95, 52, 95, 55, 52, 0);
         leftv += `${telegram0.length}`;
         proxym = "3";
         while (4 == (reminder1.size << (Math.min(Math.abs(5), 5))) && (leftv.length << (Math.min(Math.abs(5), 3))) == 1) {
            reminder1 = new Map([[untick8, untick8.length & leftv.length]]);
            break;
         }
         if (untick8.endsWith(`${configuret}`)) {
            let expired0: Array<any> = [429, 740, 190];
            let mbbidq = String.fromCharCode(112, 114, 101, 115, 101, 110, 116, 97, 116, 105, 111, 110, 95, 98, 95, 56, 55, 0);
            let becomec: Map<any, any> = new Map([[String.fromCharCode(102, 114, 101, 105, 114, 95, 50, 95, 53, 49, 0), 220], [String.fromCharCode(109, 95, 54, 55, 95, 99, 97, 115, 116, 115, 0), 376]]);
            configuret = mbbidq.length <= 67 && telegram0.length <= 67;
            expired0 = [2 - expired0.length];
            mbbidq = `${1 & becomec.size}`;
            becomec.set(`${expired0.length}`, becomec.size);
         }
         security4 += `${tooltipsU.length & 1}`;
         if (hongkongr) {
            break;
         }
      } while ((!security4.includes(`${attributedstringM.length}`)) && hongkongr);
      let borderlessr: Array<any> = [726, 620];
      let heartc = 4.0;
      let inviteo = false;
      let videocommonN = true;
      borderlessr.push(parseInt(`${heartc}`) % 3);
      videocommonN = !videocommonN;
      borderlessr.push((parseInt(`${heartc}`) | (inviteo ? 3 : 2)));
      inviteo = 53.19 == heartc || inviteo;
      for (let s = 0; s < 2; s++) {
         borderlessr = [1 - parseInt(`${heartc}`)];
      }
      heartc /= Math.max(3, (parseFloat(`${parseInt(`${heartc}`) + (inviteo ? 4 : 3)}`)));
      libglogV += `${attributedstringM.length}`;
      pangle3 = `${selectr.length | pangle3.length}`;
      while (!security4.startsWith(`${pangle3.length}`)) {
         security4 += `${3 | attributedstringM.length}`;
         break;
      }
      let lang7 = league4.size <= 9139635;
      do {
         league4.set(security4, 2);
         if (lang7) {
            break;
         }
      } while ((!selectr.includes(`${league4.size}`)) && lang7);
      transfere = promotionm == String.fromCharCode(90, 0);
      away8 += `${2 * tooltipsU.length}`;
      promotionm = "1";
      let darku = String.fromCharCode(109, 97, 105, 110, 112, 97, 103, 101, 95, 99, 95, 57, 55, 0);
      let libjsi_ = 0.0;
      let directF = true;
      let navigationk = String.fromCharCode(100, 95, 57, 51, 95, 110, 109, 109, 105, 110, 116, 114, 105, 110, 0);
      directF = darku.includes(`${directF}`);
      navigationk += `${navigationk.length}`;
      let scheduler2 = 5.0;
      let nativeexv = 3.0;
      let gmail6: Map<any, any> = new Map([[String.fromCharCode(101, 108, 101, 109, 95, 118, 95, 55, 56, 0), 969], [String.fromCharCode(97, 95, 52, 50, 95, 109, 97, 114, 107, 100, 111, 119, 110, 0), 251], [String.fromCharCode(100, 101, 105, 110, 116, 101, 114, 108, 101, 97, 118, 101, 100, 95, 55, 95, 49, 0), 107]]);
      libjsi_ += parseInt(`${libjsi_}`) | darku.length;
      scheduler2 /= Math.max(4, 1);
      nativeexv /= Math.max(parseFloat(`${3 >> (Math.min(1, Math.abs(gmail6.size)))}`), 4);
      gmail6 = new Map([[`${gmail6.size}`, gmail6.size]]);
      while (1 <= darku.length && !directF) {
         let stationg = 0.0;
         let leakcheckerP = 2;
         let mimoy = String.fromCharCode(113, 95, 51, 49, 95, 110, 111, 116, 105, 102, 105, 99, 97, 116, 105, 111, 110, 115, 0);
         let libavutilE: Array<any> = [309, 271, 958];
         darku += `${parseInt(`${stationg}`)}`;
         stationg += leakcheckerP;
         leakcheckerP -= mimoy.length << (Math.min(Math.abs(1), 2));
         mimoy = `${libavutilE.length << (Math.min(3, Math.abs(leakcheckerP)))}`;
         libavutilE = [1 / (Math.max(9, libavutilE.length))];
         break;
      }
      directF = libjsi_ <= 55.82;
      if (4.30 <= libjsi_ || (libjsi_ * 4.30) <= 2.95) {
         directF = (90 == (darku.length << (Math.min(4, Math.abs((!directF ? darku.length : 90))))));
      }
      darku += `${darku.length}`;
      for (let q = 0; q < 3; q++) {
         darku += `${darku.length >> (Math.min(Math.abs(3), 4))}`;
      }
      darku += `${(parseInt(`${libjsi_}`) >> (Math.min(5, Math.abs((directF ? 3 : 4)))))}`;
      for (let g = 0; g < 3; g++) {
         libjsi_ /= Math.max(3, ((directF ? 2 : 4) << (Math.min(Math.abs(parseInt(`${libjsi_}`)), 5))));
      }
      league4 = new Map([[`${disconnectedp.size}`, promotionm.length + 2]]);
      league4.set(libglogV, league4.size / 1);
      let entry7 = String.fromCharCode(101, 95, 51, 48, 95, 97, 116, 114, 97, 99, 112, 0);
      let libfolly4 = 4;
      let libreanimatedr = 2.0;
      libreanimatedr -= parseFloat(`${libfolly4}`);
      libfolly4 ^= 2;
      let stylesA = 5.0;
      let launcherf = 0.0;
      libreanimatedr += parseFloat(`${3 | parseInt(`${libreanimatedr}`)}`);
      stylesA /= Math.max(parseFloat(`${parseInt(`${launcherf}`) + parseInt(`${stylesA}`)}`), 4);
      launcherf -= parseInt(`${launcherf}`) % (Math.max(10, parseInt(`${stylesA}`)));
      for (let d = 0; d < 3; d++) {
         libreanimatedr *= parseFloat(`${3}`);
      }
      for (let t = 0; t < 2; t++) {
         libreanimatedr *= parseFloat(`${libfolly4}`);
      }
      libfolly4 <<= Math.min(Math.abs(libfolly4 % (Math.max(entry7.length, 8))), 5);
      while (3.91 >= (libreanimatedr + libfolly4)) {
         let tooltipsN = 4.0;
         let langT = 5.0;
         let containerA: Array<any> = [743, 169, 705];
         let usernamen: Map<any, any> = new Map([[String.fromCharCode(112, 95, 57, 56, 95, 109, 117, 108, 120, 0), 609], [String.fromCharCode(112, 114, 101, 102, 101, 114, 114, 101, 100, 95, 54, 95, 51, 50, 0), 15]]);
         libreanimatedr += parseFloat(`${parseInt(`${tooltipsN}`)}`);
         tooltipsN -= parseInt(`${langT}`) + usernamen.size;
         langT += parseFloat(`${containerA.length / (Math.max(9, parseInt(`${langT}`)))}`);
         containerA = [2];
         usernamen = new Map([[`${usernamen.size}`, containerA.length]]);
         break;
      }
      libfolly4 &= (String.fromCharCode(83, 0) == entry7 ? entry7.length : libfolly4);
      let transferP = libfolly4 >= 6242628;
      do {
         libfolly4 %= Math.max(1, (String.fromCharCode(82, 0) == entry7 ? libfolly4 : entry7.length));
         if (transferP) {
            break;
         }
      } while (transferP && ((libfolly4 % 4) == 3 && (libreanimatedr / (Math.max(1.43, 6))) == 2.81));
      attributedstringM = [tooltipsU.length + league4.size];
      let episodeb: Array<any> = [308, 558];
      let minimizeA: Map<any, any> = new Map([[String.fromCharCode(114, 101, 97, 114, 114, 97, 110, 103, 101, 95, 122, 95, 50, 50, 0), true], [String.fromCharCode(112, 95, 55, 55, 95, 105, 116, 115, 101, 108, 102, 0), true]]);
      for (let g = 0; g < 2; g++) {
         let package_2J = false;
         let bannerE = String.fromCharCode(101, 120, 97, 109, 112, 108, 101, 95, 112, 95, 51, 48, 0);
         let stara = 4;
         let mathd = String.fromCharCode(118, 95, 55, 54, 95, 115, 116, 114, 115, 101, 112, 0);
         minimizeA = new Map([[`${minimizeA.size}`, 3 * mathd.length]]);
         package_2J = !package_2J;
         bannerE = `${bannerE.length}`;
         stara /= Math.max(4, (String.fromCharCode(95, 0) == bannerE ? bannerE.length : stara));
         mathd += `${bannerE.length >> (Math.min(Math.abs(1), 2))}`;
      }
      let ajaxi = episodeb.length <= 8123489;
      do {
         let gradleb = true;
         episodeb = [episodeb.length & 3];
         if (ajaxi) {
            break;
         }
      } while ((1 == (minimizeA.size << (Math.min(3, episodeb.length)))) && ajaxi);
      minimizeA = new Map([[`${minimizeA.size}`, minimizeA.size & 3]]);
      let volumeH = 7656087 <= minimizeA.size;
      do {
         let hover7 = String.fromCharCode(112, 114, 101, 104, 101, 97, 116, 95, 114, 95, 49, 52, 0);
         let flipper9 = 3.0;
         let linkY = String.fromCharCode(107, 95, 56, 56, 95, 102, 111, 114, 103, 101, 116, 0);
         let tailp = 1.0;
         minimizeA = new Map([[`${tailp}`, parseInt(`${tailp}`) % (Math.max(linkY.length, 5))]]);
         hover7 = `${parseInt(`${flipper9}`)}`;
         flipper9 /= Math.max(parseFloat(`${parseInt(`${flipper9}`) / (Math.max(1, 3))}`), 1);
         linkY = `${hover7.length}`;
         if (volumeH) {
            break;
         }
      } while (volumeH && ((1 / (Math.max(3, minimizeA.size))) < 2 && 4 < (1 / (Math.max(9, episodeb.length)))));
      if (minimizeA.get(`${episodeb.length}`) != null) {
         episodeb.push(episodeb.length - 2);
      }
      for (let j = 0; j < 3; j++) {
         minimizeA = new Map([[`${minimizeA.size}`, minimizeA.size >> (Math.min(Math.abs(3), 5))]]);
      }
      libglogV = `${selectr.length ^ 1}`;
      security4 += `${security4.length ^ 1}`;
      libglogV += `${pangle3.length ^ selectr.length}`;
      for (let g = 0; g < 3; g++) {
         attributedstringM.push(2 & tooltipsU.length);
      }
      for (let g = 0; g < 3; g++) {
         let filed = String.fromCharCode(105, 116, 101, 114, 97, 116, 111, 114, 95, 112, 95, 56, 54, 0);
         let roundW = String.fromCharCode(99, 111, 108, 111, 110, 95, 117, 95, 56, 0);
         let acceptedA = false;
         let brightnessu: Map<any, any> = new Map([[String.fromCharCode(115, 101, 110, 100, 109, 115, 103, 95, 51, 95, 49, 53, 0), String.fromCharCode(116, 97, 98, 115, 95, 119, 95, 54, 0)], [String.fromCharCode(101, 95, 56, 53, 95, 116, 111, 121, 115, 0), String.fromCharCode(97, 114, 109, 118, 116, 101, 95, 115, 95, 52, 57, 0)], [String.fromCharCode(114, 101, 115, 101, 110, 100, 95, 101, 95, 56, 55, 0), String.fromCharCode(119, 97, 108, 108, 95, 57, 95, 52, 0)]]);
         let libglogQ = String.fromCharCode(117, 95, 57, 55, 95, 116, 102, 114, 102, 0);
         filed += `${(String.fromCharCode(65, 0) == roundW ? roundW.length : (acceptedA ? 3 : 5))}`;
         brightnessu.set(libglogQ, brightnessu.size);
         libglogQ += `${brightnessu.size}`;
         let phonef = 2.0;
         let dice9 = 5.0;
         let libavutil7 = String.fromCharCode(103, 95, 50, 53, 95, 99, 111, 110, 110, 101, 99, 116, 101, 100, 0);
         roundW = `${2 & libavutil7.length}`;
         phonef /= Math.max(3, 3);
         dice9 += parseFloat(`${parseInt(`${phonef}`)}`);
         libavutil7 += `${parseInt(`${phonef}`) | 1}`;
         for (let y = 0; y < 1; y++) {
            roundW = `${roundW.length << (Math.min(Math.abs(2), 3))}`;
         }
         let componentregistryc = String.fromCharCode(107, 100, 105, 49, 113, 51, 0) == roundW;
         do {
            roundW += `${filed.length * 3}`;
            if (componentregistryc) {
               break;
            }
         } while (componentregistryc && (5 == filed.length));
         filed = `${(String.fromCharCode(108, 0) == filed ? filed.length : (acceptedA ? 1 : 1))}`;
         let debugo = 2.0;
         roundW += `${roundW.length + 1}`;
         debugo += parseFloat(`${parseInt(`${debugo}`)}`);
         if (1 >= roundW.length && acceptedA) {
            roundW = `${roundW.length & filed.length}`;
         }
         if (!roundW.includes(`${acceptedA}`)) {
            roundW = `${(roundW.length * (acceptedA ? 4 : 2))}`;
         }
         acceptedA = (filed.length + roundW.length) >= 70;
         transfere = promotionm.length >= 85;
      }

      setIsDialogOpen(!isDialogOpen);
   };

   const refreshUserState = async () => {
      let bootsplash0: Array<any> = [266, 525, 748];
      let pathW = 4;
      let ajaxS: Array<any> = [969, 112, 53];
      let libreactK = String.fromCharCode(99, 101, 114, 116, 105, 102, 105, 99, 97, 116, 101, 115, 95, 118, 95, 51, 54, 0);
      let lessc = 1.0;
      let libloggerk = 3.0;
      let indicatorK = String.fromCharCode(105, 110, 116, 101, 114, 112, 111, 108, 97, 116, 101, 95, 98, 95, 49, 50, 0);
      let shoot2 = false;
      let libfb1 = String.fromCharCode(103, 95, 55, 49, 95, 115, 98, 119, 97, 105, 116, 0);
      let streaming3 = String.fromCharCode(105, 95, 51, 57, 95, 114, 101, 109, 97, 112, 112, 101, 100, 0);
      let minivodh = String.fromCharCode(51, 52, 52, 0) == libreactK;
      do {
         let textp: Map<any, any> = new Map([[String.fromCharCode(105, 95, 57, 48, 95, 100, 117, 114, 97, 116, 105, 111, 110, 115, 0), 524], [String.fromCharCode(104, 97, 115, 104, 101, 115, 95, 121, 95, 52, 53, 0), 803]]);
         let countrys: Array<any> = [434, 927];
         let const_v9 = false;
         let time_0rM = countrys.length >= 5538750;
         do {
            countrys.push(((const_v9 ? 5 : 1) / (Math.max(2, 9))));
            if (time_0rM) {
               break;
            }
         } while (((1 + countrys.length) <= 1) && time_0rM);
         while (4 <= (textp.size & 2)) {
            countrys.push(countrys.length);
            break;
         }
         const_v9 = null != textp.get(`${const_v9}`);
         let graph_ = String.fromCharCode(100, 95, 49, 54, 95, 105, 100, 108, 101, 0);
         let libflipperK = String.fromCharCode(109, 111, 118, 101, 100, 95, 116, 95, 50, 51, 0);
         let libswscalea = true;
         let updatesT: Map<any, any> = new Map([[String.fromCharCode(111, 99, 107, 105, 110, 103, 95, 57, 95, 50, 49, 0), 709], [String.fromCharCode(104, 121, 98, 114, 105, 100, 95, 55, 95, 50, 52, 0), 859]]);
         let roboto_ = String.fromCharCode(105, 116, 101, 114, 97, 116, 101, 95, 97, 95, 56, 49, 0);
         textp = new Map([[roboto_, 3]]);
         libswscalea = updatesT.get(`${libswscalea}`) != null;
         updatesT.set(`${libswscalea}`, 3);
         roboto_ += `${updatesT.size << (Math.min(Math.abs(3), 3))}`;
         libflipperK += `${(graph_.length * (const_v9 ? 3 : 1))}`;
         let statss = 1;
         let enewarchdefaultsX = false;
         libflipperK += `${1 >> (Math.min(Math.abs(statss), 5))}`;
         statss -= 2;
         while (4 < (textp.size ^ 2) || (2 ^ textp.size) < 1) {
            let predictiono = String.fromCharCode(107, 95, 57, 53, 95, 102, 116, 115, 105, 115, 115, 112, 97, 99, 101, 0);
            let resultN = 3.0;
            let floatingD = String.fromCharCode(114, 100, 109, 117, 108, 116, 95, 98, 95, 57, 55, 0);
            let tailD: Map<any, any> = new Map([[String.fromCharCode(115, 104, 111, 119, 95, 103, 95, 55, 48, 0), 400], [String.fromCharCode(115, 100, 101, 115, 95, 55, 95, 54, 49, 0), 976]]);
            textp.set(`${const_v9}`, 2);
            predictiono += `${predictiono.length | parseInt(`${resultN}`)}`;
            resultN /= Math.max(predictiono.length >> (Math.min(Math.abs(2), 1)), 1);
            floatingD = `${predictiono.length}`;
            tailD = new Map([[predictiono, predictiono.length]]);
            break;
         }
         while ((countrys.length - 1) < 4) {
            countrys = [((const_v9 ? 4 : 4))];
            break;
         }
         libreactK = `${(ajaxS.length << (Math.min(1, Math.abs((const_v9 ? 1 : 2)))))}`;
         if (minivodh) {
            break;
         }
      } while (minivodh && ((4 + libreactK.length) < 4 && (1.38 * lessc) < 2.80));
      while (1 > bootsplash0.length) {
         bootsplash0 = [bootsplash0.length >> (Math.min(indicatorK.length, 5))];
         break;
      }
      while ((parseFloat(`${pathW}`) / (Math.max(8, lessc))) <= 3.26 && (lessc / 3.26) <= 3.77) {
         let graph8 = String.fromCharCode(98, 95, 50, 55, 95, 105, 110, 102, 105, 110, 105, 116, 121, 0);
         let foundq = 1.0;
         for (let x = 0; x < 1; x++) {
            let librrcQ: Map<any, any> = new Map([[String.fromCharCode(122, 95, 49, 57, 95, 107, 110, 111, 98, 0), 318], [String.fromCharCode(99, 111, 108, 117, 109, 115, 95, 118, 95, 54, 50, 0), 970], [String.fromCharCode(101, 120, 116, 101, 110, 116, 95, 116, 95, 54, 53, 0), 525]]);
            let delegate_rr = true;
            let thumbnailc = 0.0;
            let penaltyK = 3;
            let libyogau: Array<any> = [String.fromCharCode(114, 95, 55, 55, 95, 114, 101, 99, 117, 114, 115, 101, 0), String.fromCharCode(117, 95, 50, 57, 95, 106, 99, 111, 110, 102, 105, 103, 105, 110, 116, 0)];
            foundq *= parseFloat(`${1 * parseInt(`${foundq}`)}`);
            librrcQ.set(`${thumbnailc}`, parseInt(`${thumbnailc}`) ^ 3);
            delegate_rr = thumbnailc < 18.21 || librrcQ.size < 9;
            penaltyK /= Math.max(4, librrcQ.size | 3);
            libyogau.push(penaltyK);
         }
         for (let z = 0; z < 1; z++) {
            graph8 += "2";
         }
         let privacy8 = true;
         let leagueY = 2.0;
         graph8 = `${parseInt(`${foundq}`)}`;
         privacy8 = !privacy8;
         leagueY += 2 % (Math.max(2, parseInt(`${leagueY}`)));
         if (1 > graph8.length) {
            let holderb = String.fromCharCode(103, 95, 55, 57, 95, 98, 97, 116, 99, 104, 105, 110, 103, 0);
            let selectiono = String.fromCharCode(122, 95, 52, 57, 95, 115, 117, 98, 115, 116, 114, 105, 110, 103, 0);
            let editd: Map<any, any> = new Map([[String.fromCharCode(119, 114, 105, 116, 97, 98, 108, 101, 95, 118, 95, 52, 50, 0), 364], [String.fromCharCode(110, 95, 51, 48, 95, 114, 101, 99, 111, 103, 110, 105, 116, 105, 111, 110, 115, 0), 302]]);
            graph8 += `${(holderb == String.fromCharCode(114, 0) ? editd.size : holderb.length)}`;
            selectiono += `${selectiono.length}`;
         }
         let minimizey = String.fromCharCode(106, 115, 116, 114, 105, 110, 103, 95, 53, 95, 56, 49, 0);
         let mergerR = 1.0;
         foundq /= Math.max(parseFloat(`${parseInt(`${mergerR}`)}`), 1);
         minimizey += `${minimizey.length >> (Math.min(minimizey.length, 5))}`;
         mergerR *= minimizey.length * minimizey.length;
         let chinay = 0.0;
         let actionsi = 5.0;
         lessc += (parseFloat(`${indicatorK == String.fromCharCode(56, 0) ? indicatorK.length : ajaxS.length}`));
         break;
      }
      if ((5 - ajaxS.length) < 3 && 5 < (bootsplash0.length - ajaxS.length)) {
         let privilegeS = String.fromCharCode(97, 100, 97, 112, 116, 101, 114, 115, 95, 54, 95, 52, 0);
         let linkL = false;
         let nativeex2 = 1.0;
         let filed_ = 1.0;
         let commentk = 0;
         let interstitialk = linkL ? !linkL : linkL;
         do {
            linkL = filed_ <= 53.1;
            if (interstitialk) {
               break;
            }
         } while (interstitialk && (!linkL));
         let clearX = String.fromCharCode(104, 97, 110, 100, 111, 102, 102, 95, 104, 95, 51, 53, 0);
         let types_ = String.fromCharCode(116, 95, 52, 51, 95, 105, 99, 99, 112, 0);
         let fieldF: Map<any, any> = new Map([[String.fromCharCode(108, 111, 116, 116, 105, 101, 109, 111, 100, 101, 108, 95, 116, 95, 56, 0), 504], [String.fromCharCode(97, 95, 54, 51, 95, 97, 105, 116, 101, 114, 0), 829], [String.fromCharCode(122, 108, 105, 98, 95, 119, 95, 57, 50, 0), 120]]);
         filed_ -= 1 << (Math.min(5, types_.length));
         clearX += `${(clearX == String.fromCharCode(119, 0) ? fieldF.size : clearX.length)}`;
         types_ += `${fieldF.size - clearX.length}`;
         let watchj = 4.0;
         let hooksI = true;
         let sendn: Map<any, any> = new Map([[String.fromCharCode(115, 95, 51, 51, 95, 116, 114, 101, 110, 100, 108, 105, 110, 101, 0), String.fromCharCode(111, 99, 116, 101, 116, 95, 116, 95, 51, 0)], [String.fromCharCode(110, 111, 102, 105, 116, 105, 99, 97, 116, 105, 111, 110, 95, 97, 95, 54, 55, 0), String.fromCharCode(115, 101, 99, 111, 110, 100, 115, 95, 100, 95, 57, 54, 0)]]);
         filed_ += 1 | parseInt(`${filed_}`);
         watchj *= parseFloat(`${sendn.size}`);
         hooksI = watchj > 16.68;
         sendn.set(`${hooksI}`, (parseInt(`${watchj}`) | (hooksI ? 1 : 1)));
         let layoutD = 5;
         let combined7 = 2.0;
         let private_qc = 3;
         privilegeS += `${1 * commentk}`;
         layoutD &= private_qc;
         combined7 -= parseInt(`${combined7}`) / 1;
         private_qc += private_qc;
         let result5 = String.fromCharCode(116, 95, 54, 54, 95, 118, 105, 101, 119, 0);
         let delegate_dj5 = 1.0;
         let toponp: Array<any> = [243, 284, 889];
         privilegeS = `${((linkL ? 4 : 5))}`;
         result5 = `${parseInt(`${delegate_dj5}`)}`;
         delegate_dj5 /= Math.max(parseFloat(`${toponp.length}`), 1);
         toponp = [parseInt(`${delegate_dj5}`)];
         for (let q = 0; q < 3; q++) {
            let active9 = String.fromCharCode(116, 95, 57, 54, 95, 115, 117, 98, 115, 101, 103, 109, 101, 110, 116, 0);
            let commonT: Map<any, any> = new Map([[String.fromCharCode(97, 108, 112, 104, 97, 98, 101, 116, 95, 103, 95, 57, 57, 0), String.fromCharCode(102, 97, 114, 109, 101, 95, 105, 95, 54, 0)], [String.fromCharCode(116, 114, 117, 110, 95, 52, 95, 50, 49, 0), String.fromCharCode(113, 95, 54, 52, 95, 109, 97, 103, 105, 99, 0)], [String.fromCharCode(108, 111, 116, 116, 105, 101, 118, 105, 101, 119, 95, 57, 95, 57, 0), String.fromCharCode(114, 101, 115, 104, 117, 102, 102, 108, 101, 95, 119, 95, 54, 56, 0)]]);
            nativeex2 -= parseInt(`${filed_}`);
            active9 = `${3 | commonT.size}`;
            commonT = new Map([[`${commonT.size}`, commonT.size / (Math.max(2, 10))]]);
         }
         let mbbidc = 3;
         let renderp = mbbidc >= 6211505;
         do {
            let greenv = String.fromCharCode(106, 95, 56, 55, 95, 104, 101, 97, 100, 108, 105, 110, 101, 0);
            let proxyI = 0.0;
            let bodanj = true;
            let chinasameu = false;
            mbbidc &= parseInt(`${nativeex2}`) - 3;
            greenv = `${parseInt(`${proxyI}`) * 2}`;
            proxyI -= parseFloat(`${1}`);
            bodanj = !bodanj;
            chinasameu = !bodanj || 11.10 > proxyI;
            if (renderp) {
               break;
            }
         } while (renderp && (5.45 <= (filed_ - 2.66)));
         nativeex2 -= privilegeS.length << (Math.min(5, Math.abs(parseInt(`${nativeex2}`))));
         let hiadH = 1.0;
         filed_ += mbbidc;
         hiadH *= parseInt(`${hiadH}`);
         let resendK = filed_ <= 6469905.0;
         do {
            let dropdownC = String.fromCharCode(111, 95, 57, 48, 95, 103, 101, 116, 116, 105, 109, 101, 111, 102, 100, 97, 121, 0);
            filed_ -= parseInt(`${nativeex2}`) ^ commentk;
            dropdownC = `${dropdownC.length & 2}`;
            if (resendK) {
               break;
            }
         } while (resendK && ((filed_ - nativeex2) == 2.56));
         for (let u = 0; u < 3; u++) {
            let userW: Map<any, any> = new Map([[String.fromCharCode(116, 104, 114, 101, 101, 115, 116, 97, 116, 101, 95, 56, 95, 49, 48, 48, 0), 114], [String.fromCharCode(109, 95, 56, 51, 95, 100, 105, 115, 109, 105, 115, 115, 101, 115, 0), 760], [String.fromCharCode(115, 108, 111, 112, 95, 105, 95, 54, 57, 0), 427]]);
            let favoriteC = String.fromCharCode(101, 109, 111, 106, 105, 95, 118, 95, 50, 0);
            let combinedV = String.fromCharCode(102, 105, 110, 110, 101, 121, 95, 99, 95, 49, 55, 0);
            let zhengpiani = 5.0;
            mbbidc -= 2 << (Math.min(Math.abs(commentk), 5));
            userW = new Map([[`${userW.size}`, userW.size + 1]]);
            favoriteC = `${userW.size | favoriteC.length}`;
            combinedV = `${parseInt(`${zhengpiani}`)}`;
            zhengpiani += 2;
         }
         if ((1.18 - nativeex2) > 3.35 || (nativeex2 + filed_) > 1.18) {
            let friendsK = 3;
            nativeex2 += (privilegeS == String.fromCharCode(53, 0) ? privilegeS.length : parseInt(`${nativeex2}`));
            friendsK += friendsK;
         }
         while (5.10 == (5.100 - filed_)) {
            commentk *= 3;
            break;
         }
         let holder6 = 3;
         let with_0hn = String.fromCharCode(113, 95, 52, 95, 98, 105, 114, 116, 104, 100, 97, 116, 101, 0);
         nativeex2 /= Math.max(privilegeS.length, 5);
         holder6 += holder6;
         with_0hn += `${with_0hn.length / 3}`;
         ajaxS = [parseInt(`${nativeex2}`) >> (Math.min(2, Math.abs(2)))];
      }

      const result = await yys_GesturesConst.getUserDetails();

      for (let q = 0; q < 2; q++) {
         libreactK = `${indicatorK.length}`;
      }
      while ((pathW / 2) == 4 || (pathW / 2) == 5) {
         pathW ^= parseInt(`${lessc}`) - 1;
         break;
      }
      for (let x = 0; x < 3; x++) {
         let less5 = 0.0;
         let libfbm = String.fromCharCode(108, 100, 105, 115, 116, 95, 116, 95, 51, 49, 0);
         let smalle = String.fromCharCode(112, 114, 97, 112, 97, 114, 101, 95, 97, 95, 56, 48, 0);
         for (let g = 0; g < 2; g++) {
            less5 += parseInt(`${less5}`) % (Math.max(libfbm.length, 8));
         }
         smalle = `${parseInt(`${less5}`)}`;
         let whistle1 = String.fromCharCode(105, 95, 51, 56, 95, 100, 114, 97, 102, 116, 0);
         libfbm = `${smalle.length}`;
         whistle1 += `${whistle1.length / 2}`;
         let rewindf = String.fromCharCode(101, 110, 99, 111, 100, 97, 98, 108, 101, 115, 95, 119, 95, 51, 52, 0);
         let dicec = String.fromCharCode(99, 104, 111, 115, 101, 110, 95, 49, 95, 52, 0);
         libfbm += `${(String.fromCharCode(97, 0) == libfbm ? parseInt(`${less5}`) : libfbm.length)}`;
         rewindf += `${(String.fromCharCode(86, 0) == dicec ? rewindf.length : dicec.length)}`;
         while ((libfbm.length / 3) > 1) {
            let libhermes0 = String.fromCharCode(115, 121, 110, 99, 95, 55, 95, 54, 57, 0);
            let libtanB = String.fromCharCode(99, 104, 97, 114, 115, 101, 116, 95, 122, 95, 55, 57, 0);
            let vieweru = String.fromCharCode(97, 107, 105, 100, 95, 109, 95, 49, 48, 48, 0);
            let arrowS = false;
            let statisticsN = 1.0;
            less5 /= Math.max(4, 2);
            libhermes0 += `${libtanB.length}`;
            libtanB += `${2 << (Math.min(2, libtanB.length))}`;
            vieweru += `${vieweru.length & 3}`;
            arrowS = 24.21 == statisticsN;
            statisticsN += 3;
            break;
         }
         less5 -= parseInt(`${less5}`) + smalle.length;
         libfbm = `${smalle.length >> (Math.min(Math.abs(2), 5))}`;
         let component7 = 0.0;
         smalle = "2";
         component7 += parseFloat(`${1 / (Math.max(parseInt(`${component7}`), 1))}`);
         while (4.90 >= less5) {
            smalle += "1";
            break;
         }
         indicatorK += `${indicatorK.length}`;
      }
      libreactK += `${pathW << (Math.min(Math.abs(parseInt(`${lessc}`)), 3))}`;
      if (result == null) {

         libloggerk /= Math.max(2, libreactK.length / 3);
         while (1.93 >= (pathW / (Math.max(lessc, 2)))) {
            let indicatorX = String.fromCharCode(101, 95, 52, 54, 95, 116, 97, 99, 107, 0);
            let customm = String.fromCharCode(111, 95, 52, 57, 95, 111, 99, 97, 108, 0);
            indicatorX = `${customm.length | indicatorX.length}`;
            indicatorX = `${customm.length}`;
            for (let e = 0; e < 3; e++) {
               let graphm: Array<any> = [536, 592, 545];
               let suggestionX = 2.0;
               customm += `${2 | customm.length}`;
               graphm = [3];
               suggestionX += 3 ^ parseInt(`${suggestionX}`);
            }
            customm = "3";
            let footballG = 2.0;
            let matchc = String.fromCharCode(115, 95, 54, 95, 117, 115, 108, 116, 0);
            customm += `${parseInt(`${footballG}`) | 3}`;
            footballG += matchc.length;
            matchc += "2";
            customm = "3";
            lessc *= parseFloat(`${bootsplash0.length & 3}`);
            break;
         }
         indicatorK = "3";
         for (let x = 0; x < 2; x++) {
            let t_position_ = 5.0;
            let orangey = 4.0;
            let attributedstringh = 1.0;
            let xvodM = 0.0;
            t_position_ /= Math.max(3, 2);
            let basketballF = String.fromCharCode(115, 95, 56, 56, 95, 99, 108, 105, 112, 116, 101, 115, 116, 0);
            let libfabricjnis = String.fromCharCode(115, 104, 101, 101, 116, 95, 98, 95, 53, 53, 0);
            let checkboxh = String.fromCharCode(100, 101, 98, 108, 111, 99, 107, 95, 110, 95, 56, 56, 0);
            xvodM -= 2;
            basketballF = `${basketballF.length ^ 1}`;
            libfabricjnis = `${(checkboxh == String.fromCharCode(112, 0) ? libfabricjnis.length : checkboxh.length)}`;
            while (orangey == 4.3) {
               let mbnativeadvanced9 = String.fromCharCode(105, 95, 49, 57, 95, 119, 97, 116, 99, 104, 101, 114, 0);
               let filterY = String.fromCharCode(109, 95, 52, 51, 95, 116, 105, 109, 101, 112, 101, 114, 102, 114, 97, 109, 101, 0);
               let area6 = 5.0;
               let dangerN = String.fromCharCode(106, 95, 53, 51, 95, 98, 97, 115, 101, 100, 0);
               let configureR = true;
               attributedstringh += 2 << (Math.min(Math.abs(parseInt(`${xvodM}`)), 5));
               mbnativeadvanced9 = `${1 - dangerN.length}`;
               filterY += `${(mbnativeadvanced9 == String.fromCharCode(54, 0) ? parseInt(`${area6}`) : mbnativeadvanced9.length)}`;
               area6 -= filterY.length * 3;
               dangerN += `${dangerN.length | 2}`;
               configureR = !configureR;
               break;
            }
            let libswresampleP = 3;
            let logoutx = 4.0;
            let modelsH = String.fromCharCode(104, 95, 53, 52, 95, 110, 111, 110, 110, 117, 108, 108, 111, 117, 116, 0);
            attributedstringh -= 3;
            libswresampleP &= modelsH.length;
            logoutx *= parseInt(`${logoutx}`);
            modelsH = `${parseInt(`${logoutx}`)}`;
            if ((t_position_ - xvodM) <= 4.4 && (4.4 - xvodM) <= 3.71) {
               let trashd = 4.0;
               t_position_ *= 2;
               trashd -= parseInt(`${trashd}`);
            }
            attributedstringh += parseInt(`${xvodM}`);
            let light7 = true;
            let currentt: Map<any, any> = new Map([[String.fromCharCode(101, 118, 97, 108, 117, 97, 116, 101, 95, 122, 95, 52, 57, 0), String.fromCharCode(98, 105, 116, 115, 104, 105, 102, 116, 95, 103, 95, 49, 48, 48, 0)], [String.fromCharCode(121, 95, 55, 57, 95, 103, 101, 116, 110, 101, 116, 119, 111, 114, 107, 112, 97, 114, 97, 109, 115, 0), String.fromCharCode(102, 97, 107, 101, 95, 115, 95, 49, 48, 0)], [String.fromCharCode(114, 101, 97, 115, 115, 109, 95, 116, 95, 49, 48, 0), String.fromCharCode(120, 95, 52, 54, 95, 98, 111, 117, 110, 100, 97, 108, 108, 0)]]);
            attributedstringh *= parseInt(`${xvodM}`) + 2;
            light7 = currentt.get(`${light7}`) == null;
            currentt = new Map([[`${currentt.size}`, currentt.size]]);
            if ((5.48 - t_position_) == 1.67 && 5.48 == (orangey - t_position_)) {
               let indexF = 1.0;
               let promotion9: Array<any> = [863, 589];
               orangey += parseFloat(`${3}`);
               indexF *= promotion9.length;
               promotion9.push(promotion9.length);
            }
            orangey += parseFloat(`${2 | parseInt(`${xvodM}`)}`);
            attributedstringh += parseInt(`${t_position_}`);
            while ((orangey + 1.100) >= 2.84 || 5.0 >= (1.100 - orangey)) {
               let libavdevice3 = 1;
               let sheetn: Map<any, any> = new Map([[String.fromCharCode(114, 103, 116, 99, 117, 95, 101, 95, 51, 57, 0), false], [String.fromCharCode(107, 95, 56, 50, 95, 106, 112, 101, 103, 108, 115, 100, 101, 99, 0), false]]);
               let materialK: Map<any, any> = new Map([[String.fromCharCode(109, 111, 100, 101, 120, 112, 95, 115, 95, 50, 57, 0), 318], [String.fromCharCode(112, 103, 109, 121, 117, 118, 95, 104, 95, 53, 57, 0), 335], [String.fromCharCode(99, 108, 105, 112, 98, 111, 97, 114, 100, 95, 110, 95, 54, 50, 0), 934]]);
               let smalld = 4.0;
               orangey /= Math.max(5, parseFloat(`${parseInt(`${t_position_}`)}`));
               libavdevice3 ^= sheetn.size * 3;
               sheetn = new Map([[`${materialK.size}`, materialK.size * parseInt(`${smalld}`)]]);
               smalld += 3;
               break;
            }
            attributedstringh /= Math.max(2 ^ parseInt(`${attributedstringh}`), 5);
            libreactK += `${ajaxS.length * libreactK.length}`;
         }
         return;
      }

      await dispatch(updateUserAuth(result));

      let nalyticsO = 7535132.0 <= libloggerk;
      do {
         libloggerk *= indicatorK.length;
         if (nalyticsO) {
            break;
         }
      } while (nalyticsO && (3.75 == (5.24 * libloggerk)));
      lessc += parseFloat(`${3}`);
      lessc += parseFloat(`${libreactK.length}`);
      if (libreactK.length > 1) {
         indicatorK = `${parseInt(`${libloggerk}`)}`;
      }
      return;
   };

   const handleRefresh = async () => {
      let moviesZ: Array<any> = [String.fromCharCode(115, 99, 104, 101, 100, 117, 108, 105, 110, 103, 95, 109, 95, 52, 57, 0), String.fromCharCode(99, 95, 51, 48, 95, 115, 115, 101, 100, 105, 102, 102, 0)];
      let libcrashsdkR = 4;
      let librrcu = 5.0;
      let screenO = 2.0;
      let calendar5 = String.fromCharCode(120, 95, 55, 55, 95, 119, 114, 97, 112, 0);
      let leakcheckerc: Map<any, any> = new Map([[String.fromCharCode(111, 95, 55, 48, 95, 109, 97, 103, 101, 110, 116, 97, 0), String.fromCharCode(105, 100, 101, 110, 116, 105, 102, 105, 97, 98, 108, 101, 95, 112, 95, 57, 0)], [String.fromCharCode(98, 95, 55, 54, 95, 104, 97, 110, 100, 108, 101, 0), String.fromCharCode(100, 101, 99, 111, 100, 101, 114, 95, 102, 95, 53, 48, 0)], [String.fromCharCode(98, 95, 55, 49, 95, 98, 101, 116, 104, 115, 111, 102, 116, 118, 105, 100, 0), String.fromCharCode(115, 121, 110, 116, 104, 101, 115, 105, 122, 101, 95, 109, 95, 53, 49, 0)]]);
      let pangle_ = String.fromCharCode(109, 121, 113, 114, 95, 56, 95, 52, 55, 0);
      let settingsz: Map<any, any> = new Map([[String.fromCharCode(112, 95, 51, 52, 95, 117, 110, 115, 111, 108, 118, 101, 100, 0), 168], [String.fromCharCode(115, 117, 98, 105, 116, 101, 109, 115, 95, 100, 95, 53, 56, 0), 1000]]);
      let toponA = 5.0;
      let smallE = String.fromCharCode(100, 101, 115, 99, 101, 110, 116, 95, 115, 95, 56, 57, 0);
      let thailand_ = false;
      let downloada = 1.0;
      let templateprocessorI = 5;
      let thumbnailc = true;
      let scheduleM: Array<any> = [126, 5];
      while (moviesZ.length < 1) {
         moviesZ.push((calendar5 == String.fromCharCode(112, 0) ? calendar5.length : parseInt(`${librrcu}`)));
         break;
      }
      for (let m = 0; m < 1; m++) {
         toponA *= parseInt(`${toponA}`);
      }
      let fast_ = String.fromCharCode(98, 95, 51, 50, 95, 109, 97, 112, 0);
      let directW = String.fromCharCode(115, 116, 100, 108, 105, 98, 95, 49, 95, 55, 52, 0);
      let moditya = String.fromCharCode(100, 101, 97, 100, 105, 110, 101, 95, 104, 95, 50, 50, 0);
      let placeholderD = true;
      let colorsw = false;
      let libglogG: Map<any, any> = new Map([[String.fromCharCode(99, 111, 110, 102, 101, 116, 116, 105, 95, 107, 95, 55, 56, 0), 473], [String.fromCharCode(99, 111, 110, 102, 105, 103, 117, 114, 101, 95, 105, 95, 51, 51, 0), 751], [String.fromCharCode(98, 117, 99, 107, 101, 116, 97, 108, 108, 111, 99, 95, 118, 95, 55, 53, 0), 855]]);
      let specW = 5;
      placeholderD = colorsw;
      libglogG = new Map([[`${libglogG.size}`, 3]]);
      specW += specW % 2;
      while (moditya.startsWith(`${directW.length}`)) {
         directW += `${moditya.length / 3}`;
         break;
      }
      let typingI = String.fromCharCode(102, 95, 57, 55, 95, 119, 104, 105, 116, 101, 115, 112, 97, 99, 101, 0);
      let mountingK = String.fromCharCode(111, 110, 101, 119, 97, 121, 95, 57, 95, 57, 51, 0);
      let bufferw = String.fromCharCode(103, 95, 49, 51, 95, 115, 116, 101, 97, 108, 0);
      moditya = `${(String.fromCharCode(121, 0) == typingI ? typingI.length : directW.length)}`;
      mountingK = "1";
      bufferw = "1";
      let playercommonU = String.fromCharCode(112, 95, 53, 50, 95, 103, 111, 112, 115, 0);
      placeholderD = directW.length < 52;
      playercommonU += `${playercommonU.length + playercommonU.length}`;
      let yellowB = false;
      let xvodL = false;
      while (1 > directW.length) {
         placeholderD = !fast_.includes(`${xvodL}`);
         break;
      }
      let blackv = 5.0;
      yellowB = moditya == String.fromCharCode(79, 0) || fast_.length < 76;
      settingsz = new Map([[`${moviesZ.length}`, (directW == String.fromCharCode(95, 0) ? directW.length : moviesZ.length)]]);
      while ((2 * calendar5.length) == 1 && (5.4 - screenO) == 1.69) {
         screenO += parseFloat(`${settingsz.size ^ 3}`);
         break;
      }
      calendar5 += `${parseInt(`${screenO}`) * 1}`;
      for (let n = 0; n < 3; n++) {
         libcrashsdkR |= parseInt(`${toponA}`) & 3;
      }
      if ((2 - calendar5.length) == 4) {
         settingsz = new Map([[`${toponA}`, parseInt(`${toponA}`)]]);
      }
      let flyerM: Array<any> = [837, 32, 887];
      let whiteZ = 0.0;
      let ballH = false;
      let nativeexd: Array<any> = [543, 651];
      let mbridgeq = false;
      whiteZ += parseFloat(`${parseInt(`${whiteZ}`) - 3}`);
      ballH = nativeexd.length > 83 || !ballH;
      nativeexd = [2];
      mbridgeq = nativeexd.includes(ballH);
      whiteZ *= parseFloat(`${parseInt(`${whiteZ}`) + flyerM.length}`);
      for (let a = 0; a < 2; a++) {
         whiteZ /= Math.max(4, parseFloat(`${parseInt(`${whiteZ}`) - 1}`));
      }
      let dataz = true;
      let pauseq = 0;
      whiteZ *= parseFloat(`${flyerM.length}`);
      dataz = 12 < pauseq;
      pauseq &= pauseq;
      flyerM.push(3 | flyerM.length);
      let type_wV = whiteZ <= 5386748.0;
      do {
         whiteZ += parseFloat(`${2 >> (Math.min(1, flyerM.length))}`);
         if (type_wV) {
            break;
         }
      } while ((4 > (3 - flyerM.length) && 2 > (3 | flyerM.length)) && type_wV);
      calendar5 += `${leakcheckerc.size / (Math.max(pangle_.length, 6))}`;
      for (let w = 0; w < 3; w++) {
         let moonS = String.fromCharCode(113, 95, 49, 51, 95, 100, 101, 99, 111, 100, 101, 112, 108, 97, 110, 101, 0);
         moonS += `${moonS.length / 2}`;
         while (moonS != String.fromCharCode(108, 0) && moonS != String.fromCharCode(51, 0)) {
            moonS = `${moonS.length << (Math.min(5, moonS.length))}`;
            break;
         }
         moonS = `${moonS.length & 3}`;
         toponA /= Math.max(moonS.length, 4);
      }
      for (let w = 0; w < 1; w++) {
         libcrashsdkR ^= 1;
      }

      setRefreshing(true);

      let lefty = 3;
      for (let j = 0; j < 2; j++) {
         let floating6 = String.fromCharCode(115, 111, 114, 116, 101, 100, 95, 108, 95, 52, 50, 0);
         lefty *= floating6.length;
      }
      for (let d = 0; d < 3; d++) {
         lefty %= Math.max(5, lefty * 2);
      }
      lefty /= Math.max(lefty & 2, 5);
      librrcu /= Math.max(parseFloat(`${1}`), 3);
      let chatr = moviesZ.length <= 6046743;
      do {
         moviesZ.push(parseInt(`${toponA}`) * leakcheckerc.size);
         if (chatr) {
            break;
         }
      } while ((5 <= (moviesZ.length << (Math.min(Math.abs(5), 1)))) && chatr);
      let analyticg = leakcheckerc.size <= 4957578;
      do {
         leakcheckerc.set(`${librrcu}`, moviesZ.length / (Math.max(3, 9)));
         if (analyticg) {
            break;
         }
      } while ((Array.from(leakcheckerc.values()).includes(toponA)) && analyticg);
      for (let u = 0; u < 1; u++) {
         moviesZ.push(2);
      }
      for (let g = 0; g < 2; g++) {
         let selected2 = String.fromCharCode(114, 95, 54, 53, 95, 109, 97, 108, 101, 0);
         let sansr = String.fromCharCode(119, 95, 56, 57, 95, 112, 101, 110, 100, 105, 110, 103, 0);
         let tooltipsj = String.fromCharCode(108, 95, 50, 50, 95, 110, 117, 109, 101, 114, 105, 99, 0);
         let successQ = true;
         if (sansr.length == 5 && tooltipsj.length == 5) {
            tooltipsj += `${((successQ ? 5 : 2) & 3)}`;
         }
         while (!tooltipsj.includes(`${successQ}`)) {
            let ping3: Map<any, any> = new Map([[String.fromCharCode(99, 114, 101, 97, 116, 101, 95, 109, 95, 51, 53, 0), 1], [String.fromCharCode(109, 101, 97, 115, 117, 114, 101, 115, 95, 57, 95, 50, 52, 0), 793]]);
            let filez = 1.0;
            successQ = String.fromCharCode(87, 0) == sansr && filez == 77.71;
            ping3.set(`${ping3.size}`, 2 << (Math.min(5, Math.abs(ping3.size))));
            filez /= Math.max(parseFloat(`${2}`), 3);
            break;
         }
         sansr += `${sansr.length}`;
         let modalV = String.fromCharCode(99, 95, 50, 53, 95, 99, 111, 102, 97, 99, 116, 111, 114, 0);
         let rooml = String.fromCharCode(104, 95, 52, 55, 95, 99, 105, 110, 101, 109, 97, 0);
         let shrinkc = 3;
         selected2 += `${selected2.length + 2}`;
         modalV += `${(rooml == String.fromCharCode(107, 0) ? rooml.length : shrinkc)}`;
         shrinkc += 3;
         for (let h = 0; h < 3; h++) {
            let stepR = true;
            let libavcodec0 = 5;
            tooltipsj = `${tooltipsj.length ^ sansr.length}`;
            stepR = stepR && 4 <= libavcodec0;
            libavcodec0 ^= (libavcodec0 + (stepR ? 2 : 4));
         }
         let bannerS = 7359636 <= sansr.length;
         do {
            let recommendation8 = String.fromCharCode(115, 117, 98, 115, 121, 115, 116, 101, 109, 95, 53, 95, 52, 56, 0);
            let manifestR = 0;
            let mbridgeQ = String.fromCharCode(102, 95, 49, 57, 95, 116, 114, 97, 110, 115, 112, 0);
            let m_manager9 = String.fromCharCode(103, 95, 50, 48, 0);
            let mutedb = 4.0;
            sansr += "3";
            recommendation8 = `${m_manager9.length}`;
            manifestR &= 3;
            mbridgeQ += `${manifestR}`;
            m_manager9 += `${(String.fromCharCode(110, 0) == mbridgeQ ? mbridgeQ.length : manifestR)}`;
            mutedb += parseFloat(`${recommendation8.length}`);
            if (bannerS) {
               break;
            }
         } while ((selected2.includes(sansr)) && bannerS);
         let c_title1 = 2.0;
         let closen = tooltipsj == String.fromCharCode(107, 112, 111, 51, 53, 97, 119, 99, 105, 0);
         do {
            tooltipsj = "3";
            if (closen) {
               break;
            }
         } while (closen && ((c_title1 / (Math.max(4, parseFloat(`${tooltipsj.length}`)))) < 2.27 || (3 - tooltipsj.length) < 4));
         successQ = selected2 == String.fromCharCode(49, 0);
         let logint = 0.0;
         let libmapbufferjnih = String.fromCharCode(97, 100, 97, 112, 116, 105, 118, 101, 95, 57, 95, 54, 51, 0);
         let countdowni = 3.0;
         successQ = 54.28 < countdowni;
         logint *= libmapbufferjnih.length;
         libmapbufferjnih += "2";
         countdowni *= parseInt(`${logint}`);
         successQ = selected2 == String.fromCharCode(105, 0);
         for (let e = 0; e < 2; e++) {
            c_title1 += parseFloat(`${selected2.length}`);
         }
         settingsz.set(`${settingsz.size}`, leakcheckerc.size);
      }
      let reactz = 1.0;
      let libruntimeexecutorg: Array<any> = [106, 714, 417];
      let canvase = true;
      let klevinJ = String.fromCharCode(114, 95, 57, 95, 114, 101, 99, 111, 110, 105, 110, 116, 101, 114, 0);
      let analyticsD = String.fromCharCode(113, 112, 98, 105, 116, 115, 95, 105, 95, 52, 51, 0);
      let condensedA = String.fromCharCode(115, 99, 97, 110, 110, 101, 100, 95, 115, 95, 56, 55, 0);
      canvase = (93 == ((canvase ? klevinJ.length : 93) | klevinJ.length));
      analyticsD += `${analyticsD.length}`;
      condensedA += `${condensedA.length}`;
      libruntimeexecutorg = [((canvase ? 2 : 4) | parseInt(`${reactz}`))];
      libruntimeexecutorg.push(3);
      let charto = String.fromCharCode(104, 117, 109, 97, 110, 95, 48, 95, 50, 57, 0);
      let libavdevice_ = 4.0;
      let mbsplashs = 3;
      reactz += parseFloat(`${2 | parseInt(`${libavdevice_}`)}`);
      charto += `${mbsplashs * 2}`;
      libavdevice_ -= parseFloat(`${mbsplashs}`);
      let tumbnailN = canvase ? !canvase : canvase;
      do {
         let favoriteS = 2.0;
         let fieldF = 2;
         let bottomO = String.fromCharCode(103, 101, 116, 112, 97, 100, 100, 114, 115, 95, 118, 95, 56, 56, 0);
         let g_positionL: Map<any, any> = new Map([[String.fromCharCode(121, 95, 53, 49, 95, 97, 98, 111, 114, 116, 97, 98, 108, 101, 0), String.fromCharCode(104, 95, 50, 55, 95, 111, 98, 115, 101, 114, 118, 101, 114, 115, 0)], [String.fromCharCode(118, 95, 50, 56, 95, 105, 110, 116, 101, 114, 112, 114, 101, 116, 0), String.fromCharCode(115, 116, 115, 99, 95, 105, 95, 57, 51, 0)]]);
         canvase = 81 == fieldF;
         favoriteS *= (parseFloat(`${bottomO == String.fromCharCode(87, 0) ? bottomO.length : parseInt(`${favoriteS}`)}`));
         fieldF &= parseInt(`${favoriteS}`) % 3;
         g_positionL = new Map([[`${g_positionL.size}`, parseInt(`${favoriteS}`) + 3]]);
         if (tumbnailN) {
            break;
         }
      } while (tumbnailN && (!canvase));
      libruntimeexecutorg = [(libruntimeexecutorg.length * (canvase ? 4 : 4))];
      let notificationA = canvase ? !canvase : canvase;
      do {
         let nativeexQ = String.fromCharCode(113, 95, 53, 95, 100, 101, 108, 97, 121, 0);
         canvase = (69 == (nativeexQ.length - (canvase ? 69 : nativeexQ.length)));
         if (notificationA) {
            break;
         }
      } while ((!canvase) && notificationA);
      canvase = reactz > 64.41;
      let filtera = canvase ? !canvase : canvase;
      do {
         canvase = libruntimeexecutorg.length <= 93;
         if (filtera) {
            break;
         }
      } while ((2.11 <= reactz) && filtera);
      thailand_ = 28 < libcrashsdkR;
      screenO /= Math.max(parseFloat(`${calendar5.length / 3}`), 3);
      for (let q = 0; q < 2; q++) {
         smallE += "2";
      }
      while (1.76 < (4.7 * screenO) || 3.81 < (screenO * 4.7)) {
         screenO *= (parseFloat(`${String.fromCharCode(106, 0) == pangle_ ? pangle_.length : moviesZ.length}`));
         break;
      }
      leakcheckerc.set(`${thailand_}`, moviesZ.length);
      await refreshUserState();

      let frame_vw = 6539584 <= leakcheckerc.size;
      do {
         leakcheckerc.set(calendar5, calendar5.length | settingsz.size);
         if (frame_vw) {
            break;
         }
      } while (((2 ^ moviesZ.length) == 5 && (leakcheckerc.size ^ moviesZ.length) == 2) && frame_vw);
      moviesZ.push(smallE.length);
      calendar5 += `${3 - parseInt(`${downloada}`)}`;
      while ((smallE.length * parseInt(`${librrcu}`)) <= 1 && 4 <= (1 | smallE.length)) {
         smallE = "3";
         break;
      }
      let sourceV = toponA >= 7470719.0;
      do {
         toponA -= smallE.length;
         if (sourceV) {
            break;
         }
      } while (sourceV && (calendar5.includes(`${toponA}`)));
      smallE = `${moviesZ.length}`;
      thailand_ = !thailand_ && calendar5.length >= 37;
      templateprocessorI |= leakcheckerc.size;
      let crownb = String.fromCharCode(115, 111, 98, 105, 110, 100, 95, 105, 95, 52, 51, 0);
      let flyerg = true;
      let progressd = flyerg ? !flyerg : flyerg;
      do {
         flyerg = crownb.length > 59 || !flyerg;
         if (progressd) {
            break;
         }
      } while ((!flyerg || 1 <= crownb.length) && progressd);
      crownb = `${(3 & (flyerg ? 3 : 3))}`;
      libcrashsdkR <<= Math.min(Math.abs(calendar5.length << (Math.min(Math.abs(3), 1))), 4);
      let actionsq = String.fromCharCode(121, 95, 57, 95, 99, 116, 116, 115, 0);
      actionsq = `${actionsq.length << (Math.min(actionsq.length, 4))}`;
      for (let l = 0; l < 3; l++) {
         actionsq += `${actionsq.length}`;
      }
      for (let b = 0; b < 3; b++) {
         let pangleA = 5.0;
         let renderT: Array<any> = [860, 670];
         let chatB = String.fromCharCode(109, 95, 53, 95, 97, 115, 115, 105, 103, 110, 101, 100, 0);
         let dangerB = String.fromCharCode(103, 95, 52, 54, 95, 100, 101, 114, 105, 118, 101, 100, 0);
         let member0: Map<any, any> = new Map([[String.fromCharCode(106, 95, 50, 52, 95, 115, 119, 115, 99, 97, 108, 101, 0), 737], [String.fromCharCode(108, 95, 52, 51, 95, 108, 105, 110, 117, 120, 0), 409]]);
         actionsq += `${dangerB.length ^ 2}`;
         pangleA /= Math.max(chatB.length, 3);
         renderT = [3];
         chatB += `${renderT.length}`;
         dangerB += `${chatB.length - renderT.length}`;
         member0 = new Map([[`${pangleA}`, chatB.length]]);
      }
      librrcu -= (parseFloat(`${smallE == String.fromCharCode(120, 0) ? parseInt(`${screenO}`) : smallE.length}`));
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
               style={{ ...textVariants.body, color: colors.primary, fontSize: 15 }}
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

   console.log('11111')
   console.log(userState.user)

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
                  {/* <TouchableOpacity onPress={() => dispatch(toggleTheme(!themeReducer.theme))}>
                      {
                          themeReducer.theme
                              ? <LightMode color={icons.iconColor} height={26} width={26} />
                              : <DarkMode color={icons.iconColor}  height={26} width={26} />

                      }
                  </TouchableOpacity> */}
               </View>
               { }
               <TouchableOpacity
                  activeOpacity={1}
                  onPress={() => {
                     if (!yys_RelatedTooltips.isLogin(userState.user)) {
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
                     {!yys_RelatedTooltips.isLogin(userState.user) ? (
                        <ProfileIcon
                           style={{ color: colors.button, width: 18, height: 18 }}
                        />
                     ) : (
                        <FastImage
                           style={{
                              height: 60,
                              width: 60,
                              marginVertical: 2,
                           }}
                           resizeMode={"contain"}
                           source={require("@static/images/tempBasketballHooks.png")}
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
                        {!yys_RelatedTooltips.isLogin(userState.user) && (
                           <>
                              <Text style={{ color: "#ffffff", fontSize: 20 }}>
                                 游客您好！
                              </Text>
                              <Text style={{ color: "#ffffff", fontSize: 14 }}>
                                 登录可享更多服务
                              </Text>
                           </>
                        )}
                        {yys_RelatedTooltips.isLogin(userState.user) && (
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
                                       color: "#ffffff",
                                       fontSize: 20,
                                    }}
                                    numberOfLines={1}
                                    ellipsizeMode="tail"
                                 >
                                    {userState.user?.userName}
                                 </Text>
                                 {yys_RelatedTooltips.isVip(userState.user) && (
                                    <Image
                                       style={styles.iconStyle}
                                       source={require("@static/images/profile/downloaderVideocommon.png")}
                                    />
                                 )}
                              </View>

                              {/* {userState.userMemberExpired == '0' && (
                      <Text style={{fontSize: 14}}>VIP会员已经到期</Text>
                    )} */}
                              {/* {userState.userMemberExpired >=
                      userState.userCurrentTimestamp && (
                        <Text style={{ color: colors.primary, fontSize: 14 }}>
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
                        {!yys_RelatedTooltips.isLogin(userState.user) && (
                           <MoreArrow
                              width={icons.sizes.l}
                              height={icons.sizes.l}
                              color={colors.muted}
                           />
                        )}

                        {yys_RelatedTooltips.isLogin(userState.user) && (
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
                           <TouchableOpacity
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
                                    <VipIcon width={icons.sizes.l} height={icons.sizes.l} />
                                 </View>
                                 <View style={{ gap: 5 }}>
                                    <Text
                                       style={{
                                          ...textVariants.body,
                                       }}
                                    >
                                       {highlightText(
                                          yys_MinivodPangle.instance.showBecomeVip
                                             ? "成为VIP"
                                             : "付费VIP",
                                          ""
                                       )}
                                    </Text>

                                    {yys_MinivodPangle.instance.tabConfig != null &&
                                       yys_MinivodPangle.instance.len == 5 ? (
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
                              <VipIcon width={icons.sizes.l} height={icons.sizes.l} />
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
                     text="上传视频"
                     leftIcon={<AddVideoIcon style={{ color: colors.button }} />}
                     onPress={() => {
                        // yys_DetailWhistle.toName('uploadVideo')
                        navigation.navigate("uploadVideo")
                     }
                  
                  }
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
