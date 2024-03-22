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
import { useAppDispatch, useAppSelector, useSelector } from "@hooks/mayi_redirect";
import { mayi_Libapminsightb } from "@redux/mayi_live_tumbnail";
import ShowMoreButton from "../../components/button/mayi_push_bodan_button";

import CollectionIcon from "@static/images/chatroombackgroundLauncher.svg";
import HistoryIcon from "@static/images/backMore.svg";
import FeedbackIcon from "@static/images/ballDefaultroombg.svg";
import SettingsIcon from "@static/images/mbsplashDescription_v.svg";
import InfoIcon from "@static/images/downloaderLibavdevice.svg";
import { useNavigation } from "@react-navigation/native";

import Orientation from "react-native-orientation-locker";
import ProfileIcon from "@static/images/dependencyAgreementWhatsapp.svg";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import MoreArrow from "@static/images/scorepopsoundDefaultprofilepicDycreator.svg";
import EditIcn from "@static/images/profile/eighteenLineSlider.svg";

import VipIcon from "@static/images/episodeModuleEmbed.svg";
import VipArrow from "@static/images/downloadNetworkPlaceholder.svg";
import AddIcon from "@static/images/vip/textlayoutmanagerInouttargetred.svg";

import {
  hideBottomSheetAction,
  removeScreenAction,
  showLoginAction,
} from "@redux/actions/mayi_iconorientation_chatroombackground";
import NotificationModal from "../../components/modal/mayi_muted_edit";
import { updateUserAuth, updateUserReferral } from "@redux/actions/mayi_librrc";
import ExpiredOverlay from "../../components/modal/mayi_ball_canvas";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { mayi_Librrc } from "../../../../mayi_gift";
import { SHOW_ZF_CONST, UMENG_CHANNEL } from "@utility/mayi_middleware_apps";
import FastImage from "../../components/common/mayi_slider";
import { mayi_Injury } from "@api";
import { mayi_Baseline } from "@redux/reducers/mayi_chatroombackground_unlock";
import { mayi_Gift } from "@models/mayi_libjsinspector";

function Profile({ navigation, route }: BottomTabScreenProps<any>) {
  const navigator = useNavigation();
  const { colors, textVariants, icons, spacing } = useTheme();
  const dispatch = useAppDispatch();
  const [refreshing, setRefreshing] = useState(false);
  const [displayedDate, setDisplayedDate] = useState("");
  const userState = useSelector<mayi_Baseline>('userReducer');
  
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const toggleOverlay = () => {
       let iconclosewhiteC: Map<any, any> = new Map([[String.fromCharCode(101,120,116,101,114,110,97,108,108,121,95,122,95,50,53,0),899], [String.fromCharCode(100,111,112,115,95,50,95,52,48,0),684], [String.fromCharCode(99,116,105,111,110,95,116,95,49,50,0),326]]);
    let leftx = String.fromCharCode(108,111,119,101,114,95,116,95,52,50,0);
    let selectedl: Array<any> = [396, 886];
    let enewarchdefaultsO = false;
    let componentregistryp = String.fromCharCode(99,111,110,102,105,103,117,114,97,116,111,114,95,99,95,56,52,0);
    let predictionbannersharedA = 1.0;
    let projectu = 4;
       let agreementb = String.fromCharCode(100,111,119,110,95,49,95,50,51,0);
       let report7 = String.fromCharCode(99,97,110,111,110,105,99,97,108,105,122,101,100,95,51,95,54,54,0);
      let maili = String.fromCharCode(113,55,103,111,116,55,113,52,98,52,0) == report7;
      do {
         report7 += "1";
         if (maili) {
            break;
         }
      } while (maili && (report7.length < 5));
       let matchinactive8 = String.fromCharCode(113,95,53,49,95,99,97,112,116,117,114,101,112,97,114,109,115,0);
         matchinactive8 = `${matchinactive8.length}`;
      for (let h = 0; h < 1; h++) {
         agreementb += `${report7.length}`;
      }
         report7 = `${matchinactive8.length}`;
      let middleX = 8605169 <= agreementb.length;
      do {
         agreementb += `${3 & matchinactive8.length}`;
         if (middleX) {
            break;
         }
      } while (middleX && (!agreementb.endsWith(matchinactive8)));
      componentregistryp += `${(componentregistryp == String.fromCharCode(107,0) ? componentregistryp.length : iconclosewhiteC.size)}`;
      leftx += `${1 + parseInt(`${predictionbannersharedA}`)}`;
   for (let q = 0; q < 1; q++) {
       let sharedk = 4;
       let iconarrowleftj = String.fromCharCode(99,111,110,115,117,109,101,114,95,122,95,53,48,0);
      for (let d = 0; d < 2; d++) {
         iconarrowleftj += `${iconarrowleftj.length}`;
      }
       let tumbnailz = false;
         iconarrowleftj += "3";
         iconarrowleftj += `${(String.fromCharCode(104,0) == iconarrowleftj ? iconarrowleftj.length : sharedk)}`;
          let weiboe: Array<any> = [String.fromCharCode(122,95,52,51,95,99,111,114,101,105,109,97,103,101,0), String.fromCharCode(116,95,51,55,95,115,107,101,119,101,100,0)];
         iconarrowleftj = `${3 / (Math.max(2, sharedk))}`;
         weiboe = [weiboe.length];
      for (let j = 0; j < 3; j++) {
          let combinedo = String.fromCharCode(111,95,56,50,0);
          let gradleB: Map<any, any> = new Map([[String.fromCharCode(98,108,97,99,107,108,105,115,116,95,122,95,50,48,0),957], [String.fromCharCode(114,95,56,53,95,100,101,112,101,110,100,0),464]]);
         tumbnailz = !tumbnailz;
         combinedo = `${gradleB.size / (Math.max(3, 2))}`;
         gradleB.set(`${combinedo}`, gradleB.size & 2);
      }
      projectu >>= Math.min(2, Math.abs(componentregistryp.length * 2));
   }
   if ((selectedl.length / (Math.max(1, 2))) >= 1) {
      selectedl.push(componentregistryp.length ^ 2);
   }
   if (enewarchdefaultsO || 1 == componentregistryp.length) {
      componentregistryp = `${componentregistryp.length}`;
   }
   let libturbomodulejsijnia = enewarchdefaultsO ? !enewarchdefaultsO : enewarchdefaultsO;
   do {
      enewarchdefaultsO = (selectedl.length >> (Math.min(2, Math.abs(projectu)))) > 99;
      if (libturbomodulejsijnia) {
         break;
      }
   } while (libturbomodulejsijnia && ((projectu ^ 3) <= 3));
      projectu ^= ((enewarchdefaultsO ? 4 : 5) + selectedl.length);
      predictionbannersharedA += 2 * componentregistryp.length;
   while ((projectu / (Math.max(5, selectedl.length))) <= 2 && 2 <= (projectu / (Math.max(selectedl.length, 9)))) {
       let annerB = 0.0;
       let armvam = 4;
       let countryV = String.fromCharCode(98,95,51,49,95,97,98,111,114,116,0);
       let reactS = String.fromCharCode(108,95,50,52,95,112,104,121,115,0);
       let statsnomoredata1 = true;
      while ((reactS.length / 4) >= 5 || (4 / (Math.max(1, reactS.length))) >= 4) {
         armvam >>= Math.min(Math.abs(parseInt(`${annerB}`)), 4);
         break;
      }
      for (let h = 0; h < 3; h++) {
          let bgvipxvodX = String.fromCharCode(109,95,52,50,95,100,111,99,0);
         reactS += `${bgvipxvodX.length}`;
      }
      while (4 >= (armvam ^ 2) && (armvam - annerB) >= 5.97) {
          let downw = false;
          let delegate_gxp = 1.0;
          let showJ: Map<any, any> = new Map([[String.fromCharCode(100,95,54,56,95,111,114,100,101,114,115,0),true ], [String.fromCharCode(110,95,55,53,95,116,114,105,112,0),true ]]);
          let xvodI = 2.0;
         armvam /= Math.max(3, showJ.size);
         downw = downw || delegate_gxp > 70.9;
         delegate_gxp -= 2;
         showJ = new Map([[`${delegate_gxp}`, parseInt(`${xvodI}`)]]);
         break;
      }
      if (1.98 >= annerB) {
          let whatsappW = String.fromCharCode(114,101,99,104,101,99,107,95,113,95,53,54,0);
         annerB *= ((statsnomoredata1 ? 5 : 5) % (Math.max(parseInt(`${annerB}`), 9)));
         whatsappW = `${whatsappW.length}`;
      }
          let catagoryf = 4;
          let libcxxcomponentsQ = 4;
          let expandX: Map<any, any> = new Map([[String.fromCharCode(97,95,50,57,95,110,111,100,101,115,0),204], [String.fromCharCode(115,116,97,116,95,110,95,55,50,0),20]]);
         countryV += `${armvam}`;
         catagoryf >>= Math.min(Math.abs(libcxxcomponentsQ >> (Math.min(Math.abs(1), 3))), 5);
         libcxxcomponentsQ /= Math.max(catagoryf * 3, 2);
         expandX = new Map([[`${libcxxcomponentsQ}`, libcxxcomponentsQ]]);
         armvam += ((statsnomoredata1 ? 1 : 4));
          let home7 = false;
          let static_08W = String.fromCharCode(117,110,108,111,99,107,101,100,95,101,95,50,56,0);
          let predictionwinZ: Array<any> = [784, 290, 395];
         annerB -= 3 * parseInt(`${annerB}`);
         home7 = !home7 || static_08W.length == 20;
         static_08W += `${(static_08W == String.fromCharCode(55,0) ? static_08W.length : (home7 ? 3 : 5))}`;
         predictionwinZ.push(predictionwinZ.length);
      while (!statsnomoredata1) {
         armvam -= 2;
         break;
      }
      if (statsnomoredata1) {
         annerB += 2;
      }
      for (let z = 0; z < 3; z++) {
         countryV += `${3 ^ countryV.length}`;
      }
       let carousel2 = String.fromCharCode(109,117,115,120,95,118,95,56,55,0);
          let libfbe = 2;
         statsnomoredata1 = countryV.startsWith(`${libfbe}`);
      while (!countryV.includes(`${annerB}`)) {
         countryV += `${((statsnomoredata1 ? 4 : 4) | 3)}`;
         break;
      }
      while (reactS.length <= annerB) {
         annerB /= Math.max(parseInt(`${annerB}`), 5);
         break;
      }
      for (let p = 0; p < 3; p++) {
         carousel2 += `${carousel2.length}`;
      }
      projectu += 2;
      break;
   }
      iconclosewhiteC = new Map([[`${enewarchdefaultsO}`, componentregistryp.length]]);
   let listN = projectu >= 5352288;
   do {
       let scoreI: Map<any, any> = new Map([[String.fromCharCode(103,95,57,56,95,97,99,107,115,0),860], [String.fromCharCode(118,95,49,57,95,99,111,109,112,111,115,101,105,0),450]]);
         scoreI.set(`${scoreI.size}`, 3 << (Math.min(3, Math.abs(scoreI.size))));
      for (let e = 0; e < 3; e++) {
         scoreI = new Map([[`${scoreI.size}`, scoreI.size]]);
      }
      for (let u = 0; u < 1; u++) {
         scoreI = new Map([[`${scoreI.size}`, 2]]);
      }
      projectu <<= Math.min(3, parseInt(`${Math.abs((projectu << (Math.min(3, Math.abs((enewarchdefaultsO ? 5 : 4))))))}`));
      if (listN) {
         break;
      }
   } while ((1 <= projectu) && listN);
   while ((projectu >> (Math.min(Math.abs(5), 4))) <= 3) {
      projectu |= (String.fromCharCode(118,0) == componentregistryp ? iconclosewhiteC.size : componentregistryp.length);
      break;
   }
      enewarchdefaultsO = projectu < parseInt(`${predictionbannersharedA}`);
      iconclosewhiteC = new Map([[`${selectedl.length}`, 2 | selectedl.length]]);
   for (let i = 0; i < 1; i++) {
      componentregistryp += `${((enewarchdefaultsO ? 5 : 5) | iconclosewhiteC.size)}`;
   }
      enewarchdefaultsO = iconclosewhiteC.size >= 91;
   for (let o = 0; o < 2; o++) {
       let heart8: Array<any> = [857, 662];
       let libjsinspectorE = true;
       let videoJ = String.fromCharCode(109,111,115,97,105,99,95,112,95,52,57,0);
       let armvaB: Array<any> = [147, 272];
         heart8.push((String.fromCharCode(100,0) == videoJ ? armvaB.length : videoJ.length));
      for (let j = 0; j < 2; j++) {
          let championz = String.fromCharCode(109,111,100,101,109,95,119,95,57,54,0);
          let verticalq = 5;
         heart8 = [3 % (Math.max(10, videoJ.length))];
         championz = `${2 - championz.length}`;
         verticalq >>= Math.min(4, Math.abs(verticalq ^ championz.length));
      }
       let yellow2: Map<any, any> = new Map([[String.fromCharCode(118,97,114,105,110,116,95,100,95,52,57,0),577], [String.fromCharCode(115,116,114,101,101,116,95,50,95,55,0),682]]);
       let audienceU: Map<any, any> = new Map([[String.fromCharCode(111,95,57,51,95,102,111,114,109,97,116,116,101,100,0),451], [String.fromCharCode(121,95,51,56,95,119,104,101,114,101,0),253], [String.fromCharCode(107,95,52,55,95,116,114,97,110,115,112,111,114,116,115,0),90]]);
       let dycreatorM = String.fromCharCode(114,101,115,101,101,107,95,51,95,50,50,0);
       let adult8 = String.fromCharCode(99,116,105,109,101,95,49,95,56,52,0);
         libjsinspectorE = !libjsinspectorE;
         armvaB.push(yellow2.size);
      if (!dycreatorM.endsWith(`${yellow2.size}`)) {
          let airbnbstarW = String.fromCharCode(98,95,50,55,95,115,115,101,116,0);
          let iconsaveimages: Map<any, any> = new Map([[String.fromCharCode(102,95,48,95,100,111,116,116,101,100,0),String.fromCharCode(116,114,97,110,115,109,105,115,115,105,111,110,95,102,95,50,53,0)], [String.fromCharCode(121,95,53,56,95,109,117,116,101,120,0),String.fromCharCode(99,108,103,101,116,95,109,95,53,55,0)], [String.fromCharCode(100,101,102,105,110,101,100,95,50,95,51,0),String.fromCharCode(115,101,101,107,97,98,108,101,95,103,95,52,0)]]);
          let giftH = String.fromCharCode(97,95,53,49,95,116,114,117,110,99,97,116,101,0);
          let preview7 = true;
          let nterstitialt = String.fromCharCode(112,95,49,56,95,115,104,111,117,121,97,99,104,111,0);
         dycreatorM += `${giftH.length}`;
         airbnbstarW += `${(String.fromCharCode(121,0) == nterstitialt ? (preview7 ? 2 : 4) : nterstitialt.length)}`;
         iconsaveimages.set(nterstitialt, ((preview7 ? 2 : 4) % (Math.max(nterstitialt.length, 8))));
         giftH = `${nterstitialt.length}`;
      }
         audienceU = new Map([[videoJ, adult8.length]]);
       let iconsharefriendsa = String.fromCharCode(113,112,102,105,108,101,95,120,95,55,57,0);
      for (let a = 0; a < 2; a++) {
          let ewardedf: Array<any> = [281, 135, 772];
          let subin1: Map<any, any> = new Map([[String.fromCharCode(121,95,57,53,95,118,112,100,120,0),true ], [String.fromCharCode(114,95,55,54,95,120,99,104,97,99,104,97,0),true ], [String.fromCharCode(118,95,50,52,95,114,111,116,97,116,101,0),false ]]);
          let verticalX = 4.0;
          let mountingE = false;
         audienceU.set(`${verticalX}`, armvaB.length ^ parseInt(`${verticalX}`));
         ewardedf = [3];
         subin1.set(`${ewardedf.length}`, 1);
         mountingE = subin1.size == ewardedf.length;
      }
          let refreshx = String.fromCharCode(121,95,50,51,95,98,111,114,100,101,114,0);
         heart8.push(heart8.length / (Math.max(2, 3)));
         refreshx += `${refreshx.length % (Math.max(2, refreshx.length))}`;
      for (let l = 0; l < 2; l++) {
          let modei = 0.0;
          let currentM: Map<any, any> = new Map([[String.fromCharCode(100,95,51,52,95,104,119,109,97,112,0),308], [String.fromCharCode(121,95,51,95,115,105,102,116,0),45], [String.fromCharCode(109,117,116,97,98,105,108,105,116,121,95,98,95,56,48,0),379]]);
          let awayicon5 = 2;
          let c_viewZ = String.fromCharCode(112,95,53,49,95,114,101,115,0);
         libjsinspectorE = currentM.size == 26 || c_viewZ == String.fromCharCode(111,0);
         modei /= Math.max(parseFloat(`${parseInt(`${modei}`) ^ 1}`), 3);
         currentM.set(`${modei}`, parseInt(`${modei}`) | awayicon5);
         awayicon5 |= awayicon5;
         c_viewZ = `${awayicon5 % 2}`;
      }
      componentregistryp = "3";
   }

    setIsDialogOpen(!isDialogOpen);
  };

  const refreshUserState = async () => {
       let finit_tR = true;
    let strO = String.fromCharCode(98,95,51,57,95,112,111,115,105,116,105,118,101,0);
    let rankk: Map<any, any> = new Map([[String.fromCharCode(122,105,112,112,101,100,95,118,95,53,50,0),String.fromCharCode(99,111,110,115,111,108,101,95,119,95,54,54,0)], [String.fromCharCode(115,95,56,49,95,112,114,101,115,99,97,108,105,110,103,0),String.fromCharCode(119,114,97,112,95,100,95,55,56,0)]]);
    let mathV = true;
    let indicator4: Map<any, any> = new Map([[String.fromCharCode(112,95,50,95,115,112,101,99,116,114,97,108,0),638], [String.fromCharCode(103,95,51,57,95,104,101,105,99,0),258]]);
    let libloggerT = 4.0;
    let philippinesP = 5.0;
    let sharewhitea: Array<any> = [353, 934];
    let mbbanner6: Map<any, any> = new Map([[String.fromCharCode(116,95,52,54,95,99,111,109,98,105,110,101,115,0),String.fromCharCode(114,99,118,100,95,56,95,49,53,0)], [String.fromCharCode(120,95,52,49,95,100,101,99,111,114,97,116,111,114,115,0),String.fromCharCode(122,95,49,56,95,100,101,109,97,110,100,0)], [String.fromCharCode(112,95,49,50,95,98,97,115,105,115,0),String.fromCharCode(107,101,121,118,97,108,95,55,95,57,53,0)]]);
    let found_ = 5.0;
    let storek = 4.0;
    let textinputZ = String.fromCharCode(116,95,53,52,95,99,111,109,112,114,101,115,115,0);
      finit_tR = storek <= 15.43;
   while (Array.from(indicator4.keys()).includes(`${philippinesP}`)) {
      philippinesP *= parseFloat(`${2 >> (Math.min(4, strO.length))}`);
      break;
   }
      finit_tR = !finit_tR;
      mbbanner6.set(`${storek}`, 2);
   if (strO.endsWith(`${philippinesP}`)) {
      philippinesP *= parseFloat(`${indicator4.size << (Math.min(Math.abs(2), 3))}`);
   }
      finit_tR = storek == 14.1;
   if (3.90 < (3.30 / (Math.max(7, libloggerT))) && (libloggerT / (Math.max(7, philippinesP))) < 3.30) {
       let backwhitei: Array<any> = [31, 946];
       let renderv = 1;
       let temperatureC = true;
       let cedbadcebfbfbfbcfecbcL = String.fromCharCode(120,95,50,49,95,108,105,110,107,101,100,0);
       let listt = String.fromCharCode(118,95,54,50,0);
         cedbadcebfbfbfbcfecbcL += `${backwhitei.length << (Math.min(cedbadcebfbfbfbcfecbcL.length, 5))}`;
         temperatureC = (cedbadcebfbfbfbcfecbcL.length - listt.length) <= 83;
      for (let f = 0; f < 2; f++) {
         backwhitei.push(listt.length);
      }
         temperatureC = temperatureC && cedbadcebfbfbfbcfecbcL.length >= 97;
         listt = `${backwhitei.length}`;
         cedbadcebfbfbfbcfecbcL = `${2 * backwhitei.length}`;
          let nendg = 2;
          let pagination_: Array<any> = [665, 970, 406];
          let videobufferloadingB = String.fromCharCode(114,95,54,56,95,113,110,111,115,0);
         temperatureC = renderv <= nendg;
         nendg |= pagination_.length / (Math.max(videobufferloadingB.length, 1));
         pagination_ = [3];
         videobufferloadingB = `${(videobufferloadingB == String.fromCharCode(81,0) ? pagination_.length : videobufferloadingB.length)}`;
      for (let g = 0; g < 2; g++) {
         renderv *= 2;
      }
      let yellowd = 6450969 >= cedbadcebfbfbfbcfecbcL.length;
      do {
         cedbadcebfbfbfbcfecbcL += `${(String.fromCharCode(50,0) == cedbadcebfbfbfbcfecbcL ? cedbadcebfbfbfbcfecbcL.length : (temperatureC ? 4 : 4))}`;
         if (yellowd) {
            break;
         }
      } while (yellowd && (listt.length > 2));
      let hnewarchdefaultsE = temperatureC ? !temperatureC : temperatureC;
      do {
          let grayz = String.fromCharCode(100,105,114,101,99,116,105,111,110,97,108,95,121,95,52,49,0);
          let dependencyu = String.fromCharCode(110,95,49,57,95,109,101,115,115,97,103,105,110,103,0);
          let main_rJ = String.fromCharCode(105,105,114,102,105,108,116,101,114,95,117,95,56,0);
          let mime6 = String.fromCharCode(102,109,116,112,95,56,95,49,54,0);
          let dycreatorZ = String.fromCharCode(104,95,50,53,95,101,120,116,101,110,100,101,100,0);
         temperatureC = dycreatorZ == String.fromCharCode(100,0);
         grayz = `${mime6.length}`;
         dependencyu = `${dependencyu.length}`;
         main_rJ = `${dependencyu.length}`;
         mime6 += `${(main_rJ == String.fromCharCode(74,0) ? mime6.length : main_rJ.length)}`;
         dycreatorZ = `${dependencyu.length}`;
         if (hnewarchdefaultsE) {
            break;
         }
      } while (hnewarchdefaultsE && (cedbadcebfbfbfbcfecbcL.length == 1));
      while ((listt.length / 4) < 4) {
         renderv &= cedbadcebfbfbfbcfecbcL.length & 2;
         break;
      }
       let videojsa = false;
      while (backwhitei.length < 2) {
          let terms7 = String.fromCharCode(105,95,49,48,95,110,101,101,100,101,100,0);
         backwhitei = [listt.length];
         terms7 = `${terms7.length}`;
         break;
      }
         backwhitei.push((renderv >> (Math.min(4, Math.abs((temperatureC ? 4 : 2))))));
      let fillG = String.fromCharCode(118,52,51,54,54,49,0) == cedbadcebfbfbfbcfecbcL;
      do {
         cedbadcebfbfbfbcfecbcL = `${renderv | 2}`;
         if (fillG) {
            break;
         }
      } while ((listt.length <= 1) && fillG);
      libloggerT += cedbadcebfbfbfbcfecbcL.length * parseInt(`${found_}`);
   }

    const result = await mayi_Injury.getUserDetails();

   if (4 == (rankk.size >> (Math.min(strO.length, 4)))) {
       let faviconh = true;
       let iconsubssuccessn: Map<any, any> = new Map([[String.fromCharCode(99,111,108,100,95,49,95,52,49,0),String.fromCharCode(110,95,50,57,95,98,111,117,110,99,105,110,103,0)], [String.fromCharCode(105,110,115,116,97,110,99,101,115,95,48,95,55,48,0),String.fromCharCode(104,95,52,95,97,118,101,114,97,103,101,0)], [String.fromCharCode(100,95,55,55,95,97,109,116,0),String.fromCharCode(99,108,111,115,101,95,104,95,50,55,0)]]);
       let questJ = String.fromCharCode(108,95,52,95,114,101,105,115,115,117,101,0);
         iconsubssuccessn.set(`${faviconh}`, questJ.length);
      while (questJ.endsWith(`${iconsubssuccessn.size}`)) {
         questJ += `${((faviconh ? 5 : 1))}`;
         break;
      }
      let liveS = iconsubssuccessn.size <= 7998121;
      do {
         iconsubssuccessn.set(`${faviconh}`, 3);
         if (liveS) {
            break;
         }
      } while (liveS && (iconsubssuccessn.size <= 2 || 1 <= (iconsubssuccessn.size - 2)));
         iconsubssuccessn.set(`${questJ}`, iconsubssuccessn.size);
         faviconh = !questJ.includes(`${faviconh}`);
      let blacky = 6911928 >= iconsubssuccessn.size;
      do {
         iconsubssuccessn = new Map([[`${iconsubssuccessn.size}`, ((faviconh ? 3 : 1) * iconsubssuccessn.size)]]);
         if (blacky) {
            break;
         }
      } while (((5 * iconsubssuccessn.size) < 3) && blacky);
      for (let k = 0; k < 2; k++) {
         iconsubssuccessn = new Map([[`${iconsubssuccessn.size}`, 3 << (Math.min(3, Math.abs(iconsubssuccessn.size)))]]);
      }
          let sounds = 0.0;
         iconsubssuccessn = new Map([[questJ, questJ.length]]);
         sounds /= Math.max(3 ^ parseInt(`${sounds}`), 2);
         faviconh = 74 >= iconsubssuccessn.size;
      strO += `${((finit_tR ? 4 : 4) + parseInt(`${found_}`))}`;
   }
   let memberD = 5266949.0 >= found_;
   do {
       let changeD = 0;
       let config1 = 4.0;
       let grayu: Array<any> = [816, 818, 432];
         grayu.push(grayu.length % (Math.max(9, parseInt(`${config1}`))));
      let expiredZ = 8417452.0 <= config1;
      do {
         config1 /= Math.max(2, parseFloat(`${changeD}`));
         if (expiredZ) {
            break;
         }
      } while ((2.30 > (2.6 / (Math.max(1, config1))) || 4 > (grayu.length - 2)) && expiredZ);
         config1 += parseFloat(`${3 % (Math.max(parseInt(`${config1}`), 4))}`);
      if ((changeD >> (Math.min(Math.abs(4), 4))) <= 1) {
         grayu = [changeD];
      }
      for (let t = 0; t < 2; t++) {
          let libglogJ = 2.0;
          let checkboxf: Array<any> = [473, 453, 494];
          let mbbid9 = String.fromCharCode(102,111,115,115,105,108,95,107,95,51,57,0);
          let containerT: Map<any, any> = new Map([[String.fromCharCode(100,95,52,56,95,99,111,108,108,101,99,116,101,100,0),583], [String.fromCharCode(106,95,51,49,95,105,110,100,101,110,116,0),90], [String.fromCharCode(98,95,54,50,95,108,111,111,107,115,0),940]]);
          let libswresample4 = false;
         changeD += grayu.length + checkboxf.length;
         libglogJ *= parseFloat(`${mbbid9.length}`);
         checkboxf.push((String.fromCharCode(50,0) == mbbid9 ? parseInt(`${libglogJ}`) : mbbid9.length));
         containerT.set(`${libglogJ}`, mbbid9.length);
         libswresample4 = 17 == containerT.size || libglogJ == 27.54;
      }
         grayu.push(1);
      for (let j = 0; j < 1; j++) {
         changeD += grayu.length;
      }
      let episode5 = config1 <= 6761291.0;
      do {
          let predictionbannerA = String.fromCharCode(121,95,55,52,95,102,105,110,103,101,114,112,114,105,110,116,0);
         config1 /= Math.max(parseFloat(`${changeD}`), 4);
         predictionbannerA = `${1 | predictionbannerA.length}`;
         if (episode5) {
            break;
         }
      } while ((1.8 < (config1 - 3.53)) && episode5);
          let analyticsZ = 5.0;
          let sportsM: Map<any, any> = new Map([[String.fromCharCode(112,111,114,116,114,97,105,116,95,105,95,53,54,0),113], [String.fromCharCode(110,95,55,56,95,116,114,97,99,107,115,0),959]]);
         changeD %= Math.max(1, parseInt(`${analyticsZ}`) % 2);
         analyticsZ += parseFloat(`${sportsM.size}`);
         sportsM = new Map([[`${sportsM.size}`, sportsM.size / 3]]);
      found_ /= Math.max(3, parseFloat(`${parseInt(`${found_}`) - parseInt(`${storek}`)}`));
      if (memberD) {
         break;
      }
   } while (((storek - found_) == 1.82) && memberD);
      sharewhitea.push((2 << (Math.min(4, Math.abs((finit_tR ? 4 : 5))))));
      finit_tR = strO.length < indicator4.size;
   let halff = 9347733 >= rankk.size;
   do {
      rankk.set(`${storek}`, 3 | parseInt(`${found_}`));
      if (halff) {
         break;
      }
   } while (((5 << (Math.min(3, Math.abs(rankk.size)))) <= 4 && (found_ / 3.53) <= 2.12) && halff);
      finit_tR = philippinesP > libloggerT;
   if (3.93 < (found_ - 2.16) || (storek - found_) < 2.16) {
      found_ -= parseFloat(`${mbbanner6.size}`);
   }
    if (result == null) {

      mbbanner6 = new Map([[`${storek}`, 2]]);
       let stationsb: Array<any> = [702, 193];
       let mbbanneri: Array<any> = [252, 749];
          let componentD = String.fromCharCode(113,95,50,48,95,105,111,115,116,114,101,97,109,0);
         mbbanneri.push(3 * mbbanneri.length);
         componentD = `${componentD.length}`;
      while (5 >= mbbanneri.length) {
         mbbanneri.push(stationsb.length);
         break;
      }
       let hongkong_ = String.fromCharCode(111,100,109,108,95,108,95,50,56,0);
         mbbanneri = [hongkong_.length];
         hongkong_ = `${2 & hongkong_.length}`;
      let predictionbannersharedb = String.fromCharCode(48,116,115,105,97,0) == hongkong_;
      do {
         hongkong_ += `${hongkong_.length}`;
         if (predictionbannersharedb) {
            break;
         }
      } while ((4 > (mbbanneri.length * hongkong_.length) || (4 * mbbanneri.length) > 1) && predictionbannersharedb);
      mbbanner6.set(`${philippinesP}`, sharewhitea.length);
   for (let d = 0; d < 2; d++) {
      rankk.set(`${storek}`, parseInt(`${storek}`) ^ 3);
   }
   while ((2 + mbbanner6.size) < 5 || !mathV) {
      mbbanner6 = new Map([[`${indicator4.size}`, indicator4.size]]);
      break;
   }
   let filledS = mathV ? !mathV : mathV;
   do {
       let hover9: Map<any, any> = new Map([[String.fromCharCode(99,111,110,103,101,115,116,105,111,110,95,116,95,52,51,0),false ], [String.fromCharCode(101,95,52,52,95,114,111,108,108,105,110,103,0),true ]]);
       let launcherw = String.fromCharCode(100,114,111,112,95,107,95,54,52,0);
      let circleW = hover9.size <= 9358184;
      do {
          let clubl = String.fromCharCode(100,111,119,110,109,105,120,95,51,95,49,48,0);
          let nodeH: Array<any> = [String.fromCharCode(107,95,56,48,95,108,117,109,98,101,114,106,97,99,107,0), String.fromCharCode(120,95,49,54,0)];
          let halffieldimageq: Map<any, any> = new Map([[String.fromCharCode(116,95,49,48,48,95,100,105,97,108,108,105,110,103,0),String.fromCharCode(105,100,101,109,112,111,116,101,110,99,121,95,48,95,53,57,0)], [String.fromCharCode(117,95,53,57,95,101,109,111,106,105,0),String.fromCharCode(101,118,97,115,97,112,112,95,100,95,52,53,0)], [String.fromCharCode(98,111,117,110,100,97,108,108,95,111,95,53,55,0),String.fromCharCode(105,95,54,95,102,105,108,116,101,114,117,118,0)]]);
          let trashf = 5;
         hover9 = new Map([[`${nodeH.length}`, 3]]);
         clubl = `${1 * clubl.length}`;
         nodeH.push(halffieldimageq.size);
         halffieldimageq = new Map([[`${halffieldimageq.size}`, 1 + clubl.length]]);
         trashf &= halffieldimageq.size / (Math.max(clubl.length, 10));
         if (circleW) {
            break;
         }
      } while (circleW && (!launcherw.startsWith(`${hover9.size}`)));
      if (5 > (hover9.size | 1)) {
         launcherw = `${(launcherw == String.fromCharCode(90,0) ? hover9.size : launcherw.length)}`;
      }
      while (1 > (launcherw.length * 4) || (4 * launcherw.length) > 4) {
         hover9 = new Map([[`${hover9.size}`, 1 << (Math.min(2, Math.abs(hover9.size)))]]);
         break;
      }
         launcherw += `${hover9.size}`;
         hover9.set(`${launcherw}`, 2 / (Math.max(1, hover9.size)));
      while (1 == (hover9.size / 3) && (3 / (Math.max(3, hover9.size))) == 1) {
         launcherw = `${(launcherw == String.fromCharCode(83,0) ? launcherw.length : hover9.size)}`;
         break;
      }
      mathV = 48.60 >= libloggerT;
      if (filledS) {
         break;
      }
   } while ((rankk.size == 5) && filledS);
   let logoutM = 6169346 >= sharewhitea.length;
   do {
       let statsnomoredatai = 3;
       let benefitW = String.fromCharCode(119,101,105,103,104,116,105,110,103,95,118,95,57,53,0);
       let upgradeu = true;
       let footballtrophyA: Array<any> = [452, 747];
      while (1 > (benefitW.length << (Math.min(4, footballtrophyA.length))) || 2 > (benefitW.length << (Math.min(Math.abs(1), 4)))) {
          let whatsappi: Array<any> = [627, 156, 718];
         footballtrophyA.push(benefitW.length);
         whatsappi.push(whatsappi.length);
         break;
      }
         footballtrophyA.push(footballtrophyA.length);
         footballtrophyA = [benefitW.length * footballtrophyA.length];
         statsnomoredatai += (String.fromCharCode(49,0) == benefitW ? statsnomoredatai : benefitW.length);
      while ((footballtrophyA.length % 5) > 5) {
          let sharewhitex: Array<any> = [666, 138, 369];
         upgradeu = 47 == sharewhitex.length;
         break;
      }
      for (let p = 0; p < 1; p++) {
         statsnomoredatai += footballtrophyA.length % 2;
      }
         footballtrophyA.push(statsnomoredatai);
         statsnomoredatai -= ((upgradeu ? 3 : 3) * footballtrophyA.length);
      let predictionbuttonR = upgradeu ? !upgradeu : upgradeu;
      do {
          let elementsf: Array<any> = [714, 804];
          let libjsi1 = String.fromCharCode(114,95,53,57,95,97,118,105,100,0);
          let iconarrowleftq = String.fromCharCode(103,105,103,97,103,114,111,117,112,95,115,95,54,55,0);
          let showlessB = 3.0;
          let stepN: Array<any> = [889, 629, 624];
         upgradeu = benefitW == String.fromCharCode(71,0);
         elementsf.push(stepN.length ^ iconarrowleftq.length);
         libjsi1 += `${1 | libjsi1.length}`;
         iconarrowleftq = `${libjsi1.length | 2}`;
         showlessB -= parseFloat(`${iconarrowleftq.length - 1}`);
         stepN.push((iconarrowleftq == String.fromCharCode(110,0) ? stepN.length : iconarrowleftq.length));
         if (predictionbuttonR) {
            break;
         }
      } while ((benefitW.includes(`${upgradeu}`)) && predictionbuttonR);
         benefitW += `${(benefitW == String.fromCharCode(85,0) ? benefitW.length : statsnomoredatai)}`;
         benefitW += `${(benefitW == String.fromCharCode(100,0) ? statsnomoredatai : benefitW.length)}`;
      if ((benefitW.length / 3) > 1) {
         statsnomoredatai %= Math.max(2, 1);
      }
      sharewhitea = [strO.length | 1];
      if (logoutM) {
         break;
      }
   } while ((2.20 == storek) && logoutM);
      libloggerT /= Math.max(2, sharewhitea.length + 2);
      return;
    }

    await dispatch(updateUserAuth(result));

       let mutedQ: Array<any> = [String.fromCharCode(121,95,51,50,95,112,111,115,116,112,111,110,101,0), String.fromCharCode(102,111,117,114,116,104,95,119,95,49,50,0)];
       let redscoreballO: Map<any, any> = new Map([[String.fromCharCode(107,105,108,108,95,110,95,53,54,0),735], [String.fromCharCode(109,111,110,111,115,112,97,99,101,95,101,95,56,54,0),133]]);
         redscoreballO.set(`${mutedQ.length}`, redscoreballO.size);
         mutedQ.push(mutedQ.length);
      if (mutedQ.length <= 1) {
         mutedQ.push(redscoreballO.size);
      }
      if (Array.from(redscoreballO.values()).includes(mutedQ.length)) {
         mutedQ.push(mutedQ.length);
      }
       let readM: Array<any> = [93, 587, 246];
      let libfolly7 = redscoreballO.size >= 7355639;
      do {
          let iconbackwhite7 = String.fromCharCode(109,101,109,111,114,121,115,116,114,101,97,109,95,114,95,53,52,0);
          let gpayO = String.fromCharCode(99,95,53,57,95,118,97,108,105,100,97,116,101,100,0);
          let filedn = true;
         redscoreballO.set(gpayO, 2);
         iconbackwhite7 = `${(iconbackwhite7.length & (filedn ? 4 : 4))}`;
         gpayO += `${(1 % (Math.max(3, (filedn ? 3 : 4))))}`;
         if (libfolly7) {
            break;
         }
      } while (libfolly7 && ((5 >> (Math.min(2, Math.abs(redscoreballO.size)))) >= 2 && 5 >= (mutedQ.length >> (Math.min(Math.abs(redscoreballO.size), 5)))));
      rankk.set(`${mathV}`, ((mathV ? 4 : 3) * 2));
   if (mbbanner6.size == 3) {
      mbbanner6.set(`${philippinesP}`, parseInt(`${philippinesP}`));
   }
       let twittere = String.fromCharCode(105,110,99,108,117,115,105,111,110,115,95,101,95,55,48,0);
       let filledJ = true;
       let codegenH = false;
         filledJ = !twittere.includes(`${filledJ}`);
         filledJ = filledJ || twittere.length == 34;
      let yellowanimationliveG = filledJ ? !filledJ : filledJ;
      do {
          let tumbnailN = 1;
          let settingsD = String.fromCharCode(107,95,49,54,95,115,117,98,100,101,109,117,120,101,114,0);
         filledJ = twittere == String.fromCharCode(67,0) && tumbnailN < 9;
         tumbnailN += settingsD.length;
         settingsD += "3";
         if (yellowanimationliveG) {
            break;
         }
      } while ((!filledJ) && yellowanimationliveG);
      let notificationZ = twittere.length >= 7449272;
      do {
         twittere += `${twittere.length}`;
         if (notificationZ) {
            break;
         }
      } while (notificationZ && (codegenH));
       let componentregistry2 = String.fromCharCode(118,97,105,108,97,98,105,108,105,116,121,95,107,95,57,48,0);
       let footballfieldm = String.fromCharCode(111,95,54,95,105,110,115,116,97,110,116,105,97,116,105,111,110,0);
          let fnewinterstitialL = String.fromCharCode(101,120,116,101,110,100,105,110,103,95,107,95,53,53,0);
         componentregistry2 += `${((codegenH ? 2 : 5) ^ (filledJ ? 5 : 5))}`;
         fnewinterstitialL += `${fnewinterstitialL.length & fnewinterstitialL.length}`;
          let attributedstringv = 4.0;
          let sans0 = 1.0;
         twittere = `${(String.fromCharCode(50,0) == twittere ? (filledJ ? 3 : 2) : twittere.length)}`;
         attributedstringv /= Math.max(parseFloat(`${2}`), 4);
         sans0 -= parseFloat(`${parseInt(`${attributedstringv}`)}`);
      if (!filledJ) {
         componentregistry2 = `${footballfieldm.length / 3}`;
      }
      let entrya = twittere.length >= 9547720;
      do {
          let appsQ = String.fromCharCode(115,105,108,101,110,116,95,49,95,53,49,0);
         twittere += `${componentregistry2.length}`;
         appsQ = `${appsQ.length}`;
         if (entrya) {
            break;
         }
      } while (entrya && (footballfieldm == String.fromCharCode(66,0)));
      sharewhitea.push(1 & rankk.size);
   let mergerM = sharewhitea.length >= 7969180;
   do {
      sharewhitea.push(1 ^ parseInt(`${found_}`));
      if (mergerM) {
         break;
      }
   } while (((4.1 - storek) > 1.93 && (sharewhitea.length - storek) > 4.1) && mergerM);
   for (let x = 0; x < 1; x++) {
      strO = "1";
   }
      mathV = 28 < mbbanner6.size && philippinesP < 17.67;
   if (found_ < storek) {
       let libfilen = String.fromCharCode(113,95,55,48,95,117,110,101,115,99,97,112,105,110,103,0);
       let philippinesY = 2;
       let infoK = String.fromCharCode(117,95,56,48,95,109,101,97,115,117,114,101,0);
       let blackJ: Array<any> = [943, 252, 615];
       let iconarrowrightorangef = String.fromCharCode(107,95,49,95,112,97,105,110,116,115,0);
          let plusD = false;
         blackJ.push(libfilen.length | 2);
         plusD = !plusD && plusD;
      if ((philippinesY % 1) <= 4) {
          let sendA: Map<any, any> = new Map([[String.fromCharCode(109,112,106,112,101,103,95,122,95,51,51,0),false ], [String.fromCharCode(100,95,50,51,95,102,114,101,101,102,111,114,109,0),true ], [String.fromCharCode(116,95,49,50,0),false ]]);
          let gpayM = 2;
          let champion7 = 4;
          let tempnodatagift = 0.0;
          let nativeP = String.fromCharCode(117,95,56,50,95,99,97,116,101,103,111,114,105,115,101,100,0);
         philippinesY ^= parseInt(`${tempnodatagift}`) - iconarrowrightorangef.length;
         sendA = new Map([[`${sendA.size}`, champion7]]);
         gpayM &= sendA.size >> (Math.min(Math.abs(2), 5));
         champion7 <<= Math.min(1, Math.abs(3));
         tempnodatagift -= parseFloat(`${1}`);
         nativeP = `${sendA.size % (Math.max(3, 3))}`;
      }
      let containerTs = infoK.length >= 7813379;
      do {
          let fastg = String.fromCharCode(115,117,114,102,97,99,101,115,95,110,95,56,52,0);
          let nalyticsO = String.fromCharCode(112,95,56,48,95,115,101,99,116,105,111,110,115,0);
          let nativeexT = String.fromCharCode(105,95,55,53,95,115,112,101,99,115,0);
          let gnewarchdefaultsW = String.fromCharCode(117,95,51,52,95,104,97,115,104,105,110,105,116,0);
          let statsnomoredata3 = String.fromCharCode(102,105,114,115,116,112,97,115,115,95,102,95,54,0);
         infoK += `${(statsnomoredata3 == String.fromCharCode(114,0) ? gnewarchdefaultsW.length : statsnomoredata3.length)}`;
         fastg += `${2 ^ nalyticsO.length}`;
         nalyticsO = `${nativeexT.length - 1}`;
         nativeexT = `${(String.fromCharCode(67,0) == fastg ? nativeexT.length : fastg.length)}`;
         gnewarchdefaultsW += `${(String.fromCharCode(48,0) == nativeexT ? nativeexT.length : nalyticsO.length)}`;
         if (containerTs) {
            break;
         }
      } while ((infoK.length == libfilen.length) && containerTs);
       let neonS: Array<any> = [218, 924];
         iconarrowrightorangef += `${(infoK == String.fromCharCode(116,0) ? philippinesY : infoK.length)}`;
         philippinesY ^= 3 >> (Math.min(2, infoK.length));
          let attributedstringZ = 0;
         philippinesY ^= neonS.length | 3;
         attributedstringZ += attributedstringZ + 1;
         philippinesY |= neonS.length;
          let dragI: Array<any> = [433, 42, 494];
          let modals = String.fromCharCode(106,95,51,56,95,100,101,115,116,111,114,121,0);
         libfilen = `${modals.length}`;
         dragI = [dragI.length - dragI.length];
         modals += `${dragI.length | dragI.length}`;
       let downloader1 = false;
          let whitetickE = 0;
          let logoF = 0;
          let attributedstringz: Map<any, any> = new Map([[String.fromCharCode(113,95,49,51,95,121,113,117,97,110,116,0),621], [String.fromCharCode(118,95,55,50,95,100,101,99,111,100,97,98,108,101,0),171]]);
         infoK += `${blackJ.length}`;
         whitetickE |= attributedstringz.size;
         logoF += whitetickE;
         attributedstringz = new Map([[`${logoF}`, whitetickE >> (Math.min(Math.abs(logoF), 5))]]);
         philippinesY %= Math.max(4, libfilen.length);
          let sortl = String.fromCharCode(98,95,54,54,95,112,97,112,101,114,115,0);
          let countryD = String.fromCharCode(110,100,111,116,115,95,111,95,53,54,0);
         downloader1 = libfilen == infoK;
         sortl = "1";
         countryD = `${countryD.length % (Math.max(2, sortl.length))}`;
       let analyticsh = 2;
          let backv = String.fromCharCode(100,95,53,57,95,99,117,108,115,104,105,102,116,0);
         blackJ.push(philippinesY / (Math.max(2, libfilen.length)));
         backv += `${backv.length}`;
      found_ -= parseFloat(`${mbbanner6.size - parseInt(`${found_}`)}`);
   }
    return;
  };

  const handleRefresh = async () => {
       let roundc = 2.0;
    let form_ = false;
    let iconscheduleL = String.fromCharCode(106,95,50,53,95,98,97,115,101,105,115,107,101,121,0);
    let reactnativeratings4 = 1;
    let alertb: Array<any> = [572, 783, 696];
    let orientationI: Map<any, any> = new Map([[String.fromCharCode(103,95,57,48,95,115,105,110,107,115,0),928], [String.fromCharCode(116,114,97,110,115,108,97,116,111,110,95,116,95,57,55,0),553], [String.fromCharCode(99,95,55,53,95,119,105,108,100,99,97,114,100,0),521]]);
    let textinputv = false;
      roundc *= parseFloat(`${alertb.length}`);
       let downn = String.fromCharCode(119,101,98,112,97,103,101,115,95,53,95,55,50,0);
       let holderV = String.fromCharCode(101,95,55,51,95,103,109,111,99,107,0);
       let basketballtrophyZ: Array<any> = [171, 822];
      for (let c = 0; c < 3; c++) {
         holderV += `${1 << (Math.min(1, basketballtrophyZ.length))}`;
      }
      while (downn == String.fromCharCode(100,0)) {
         holderV = `${holderV.length | 1}`;
         break;
      }
       let iconarrowrightI = true;
      for (let x = 0; x < 1; x++) {
          let gestureq = String.fromCharCode(110,95,49,53,95,113,99,111,109,0);
         holderV = `${holderV.length}`;
         gestureq = `${gestureq.length}`;
      }
       let scorepopsoundA = 3;
         iconarrowrightI = 7 == scorepopsoundA || !iconarrowrightI;
      if ((basketballtrophyZ.length * downn.length) < 3 || 2 < (basketballtrophyZ.length * 3)) {
         downn = `${(2 >> (Math.min(3, Math.abs((iconarrowrightI ? 3 : 5)))))}`;
      }
      let iconmore0 = 7965415 >= holderV.length;
      do {
         holderV += `${holderV.length}`;
         if (iconmore0) {
            break;
         }
      } while ((4 >= holderV.length) && iconmore0);
      if (iconarrowrightI) {
          let rightX: Map<any, any> = new Map([[String.fromCharCode(117,95,55,53,95,99,111,110,110,101,99,116,120,0),220], [String.fromCharCode(122,95,52,51,95,112,97,110,101,108,115,0),144], [String.fromCharCode(97,95,55,53,95,100,99,113,117,97,110,116,0),334]]);
          let livesharea = true;
          let subtexts = 0.0;
          let robotoG = 4;
         holderV = `${((iconarrowrightI ? 1 : 4) << (Math.min(Math.abs(2), 1)))}`;
         rightX.set(`${robotoG}`, 2);
         livesharea = (robotoG + subtexts) <= 89;
         subtexts += rightX.size;
      }
      reactnativeratings4 &= 1;
   for (let q = 0; q < 2; q++) {
      roundc += parseFloat(`${iconscheduleL.length - alertb.length}`);
   }
       let predictionarrowR = String.fromCharCode(117,95,57,56,95,114,101,102,114,101,115,104,0);
         predictionarrowR += `${predictionarrowR.length}`;
          let moduleT = 0.0;
          let bufferE = 0.0;
         predictionarrowR += "3";
         moduleT *= parseFloat(`${2}`);
         bufferE += parseInt(`${moduleT}`) & parseInt(`${bufferE}`);
          let page5 = 3.0;
         predictionarrowR = `${predictionarrowR.length * 3}`;
         page5 /= Math.max(5, 2 - parseInt(`${page5}`));
      orientationI = new Map([[`${roundc}`, predictionarrowR.length + 3]]);
   if (parseFloat(`${iconscheduleL.length}`) > roundc) {
      iconscheduleL = "2";
   }
      alertb = [2 ^ alertb.length];
      textinputv = iconscheduleL.length == 79;
      iconscheduleL = `${1 & orientationI.size}`;
   for (let j = 0; j < 3; j++) {
       let paginationa = String.fromCharCode(119,95,55,95,112,114,101,112,114,111,99,101,115,115,0);
          let mbnativeadvancedJ = String.fromCharCode(104,95,53,50,95,101,115,115,105,111,110,0);
         paginationa = `${mbnativeadvancedJ.length * paginationa.length}`;
       let long_1z = String.fromCharCode(106,95,50,50,95,105,115,111,112,101,110,113,117,111,116,101,0);
       let livesharep: Map<any, any> = new Map([[String.fromCharCode(108,111,111,112,105,110,103,95,115,95,51,51,0),432], [String.fromCharCode(120,95,54,50,95,97,100,100,105,110,103,0),891]]);
      form_ = paginationa.length <= 6 && textinputv;
   }

    setRefreshing(true);

   for (let v = 0; v < 3; v++) {
      alertb = [parseInt(`${roundc}`) << (Math.min(2, Math.abs(1)))];
   }
      roundc += parseFloat(`${1}`);
   for (let t = 0; t < 3; t++) {
      reactnativeratings4 *= reactnativeratings4;
   }
      reactnativeratings4 /= Math.max(2, 5);
       let banner3 = String.fromCharCode(107,105,110,100,115,95,101,95,52,55,0);
         banner3 = `${(String.fromCharCode(111,0) == banner3 ? banner3.length : banner3.length)}`;
      if (banner3.length < banner3.length) {
          let penaltyV = true;
          let aboutW: Map<any, any> = new Map([[String.fromCharCode(111,115,100,101,112,95,122,95,53,56,0),String.fromCharCode(100,105,97,99,114,105,116,105,99,95,118,95,55,54,0)], [String.fromCharCode(97,110,100,108,101,95,106,95,57,56,0),String.fromCharCode(118,95,49,53,95,97,112,112,114,111,120,105,109,97,116,105,111,110,0)]]);
          let libreactnativebloby = 3.0;
          let animationsy = String.fromCharCode(97,100,106,101,99,116,105,118,101,115,95,53,95,49,54,0);
         banner3 += `${(String.fromCharCode(86,0) == animationsy ? aboutW.size : animationsy.length)}`;
         penaltyV = penaltyV || 22.71 == libreactnativebloby;
         aboutW.set(`${penaltyV}`, ((penaltyV ? 5 : 3) >> (Math.min(Math.abs(parseInt(`${libreactnativebloby}`)), 3))));
      }
         banner3 += `${banner3.length}`;
      iconscheduleL = "3";
       let incident6 = 3.0;
       let sortm: Map<any, any> = new Map([[String.fromCharCode(119,95,56,53,95,100,101,112,97,99,107,101,116,105,122,101,114,0),656], [String.fromCharCode(116,95,53,50,95,116,114,120,116,0),584], [String.fromCharCode(118,95,56,48,95,115,112,101,97,107,0),435]]);
       let targetV = String.fromCharCode(112,95,56,57,95,114,101,118,111,107,101,100,0);
      let redirect4 = 9878082 >= sortm.size;
      do {
         sortm = new Map([[targetV, parseInt(`${incident6}`)]]);
         if (redirect4) {
            break;
         }
      } while ((4.18 == (incident6 + 1.27) && (incident6 + 1.27) == 5.41) && redirect4);
      if (incident6 >= 3.21) {
         incident6 *= targetV.length | sortm.size;
      }
      if ((5.97 + incident6) <= 5.33 && (4 & targetV.length) <= 3) {
         incident6 /= Math.max(5, targetV.length / 3);
      }
         incident6 += 1;
       let calendarg = 2;
       let adultz = 1;
      for (let a = 0; a < 1; a++) {
          let photo3 = String.fromCharCode(98,100,119,110,95,109,95,55,52,0);
          let time_9na = String.fromCharCode(122,95,56,95,99,115,119,97,112,0);
         incident6 *= parseInt(`${incident6}`);
         photo3 += "3";
         time_9na += `${(time_9na == String.fromCharCode(95,0) ? time_9na.length : photo3.length)}`;
      }
      if ((1 & sortm.size) >= 2 || (1 ^ sortm.size) >= 1) {
         sortm.set(targetV, parseInt(`${incident6}`) ^ targetV.length);
      }
       let rewardvideol = 0.0;
       let kickz = 0.0;
         incident6 -= sortm.size + parseInt(`${kickz}`);
      alertb = [parseInt(`${roundc}`)];
      form_ = textinputv;
       let kickq = 4.0;
      for (let t = 0; t < 2; t++) {
          let reactf = 4.0;
          let qaagX = false;
          let firebaseB = 4.0;
         kickq -= parseInt(`${firebaseB}`);
         reactf += (parseFloat(`${parseInt(`${reactf}`) * (qaagX ? 5 : 3)}`));
         qaagX = !qaagX && 49.18 <= reactf;
         firebaseB -= (parseFloat(`${parseInt(`${reactf}`) & (qaagX ? 4 : 3)}`));
      }
          let pointI = 3.0;
          let cornerkick8 = String.fromCharCode(116,105,109,101,117,116,105,108,115,95,50,95,57,48,0);
          let notificationfillemptyr = 4;
         kickq -= parseInt(`${kickq}`) / (Math.max(5, parseInt(`${pointI}`)));
         pointI *= parseFloat(`${cornerkick8.length - 1}`);
         cornerkick8 += `${notificationfillemptyr}`;
         notificationfillemptyr -= cornerkick8.length >> (Math.min(5, Math.abs(notificationfillemptyr)));
          let robotoo = 0;
          let goallogo_ = 4.0;
         kickq /= Math.max(5, parseInt(`${goallogo_}`) - 3);
         robotoo >>= Math.min(5, Math.abs(robotoo));
         goallogo_ += robotoo;
      reactnativeratings4 %= Math.max(((form_ ? 1 : 4) * 2), 1);
   while (Array.from(orientationI.keys()).includes(`${alertb.length}`)) {
      alertb.push(orientationI.size);
      break;
   }
    await refreshUserState();

      form_ = alertb.length >= reactnativeratings4;
       let reactnativeratingsG = 2.0;
       let tailO = 3;
         tailO *= 1;
         reactnativeratingsG *= parseFloat(`${tailO}`);
      alertb.push(((form_ ? 1 : 5)));
      form_ = (92 == ((!textinputv ? alertb.length : 92) | alertb.length));
   let libfileV = roundc >= 9250426.0;
   do {
       let floatingA = 2;
       let rootB = true;
       let switch_lz: Map<any, any> = new Map([[String.fromCharCode(100,95,55,49,95,105,99,99,112,0),261], [String.fromCharCode(114,101,112,111,115,105,116,105,111,110,95,102,95,52,52,0),788], [String.fromCharCode(121,95,56,56,95,115,116,114,105,115,116,97,114,116,0),787]]);
       let typings = String.fromCharCode(105,115,112,108,97,121,95,48,95,57,50,0);
       let iconclosewhitebgf = 4;
      let singleW = 6940761 <= iconclosewhitebgf;
      do {
          let videojsz = 3.0;
          let chinaE = 5.0;
          let hookG = String.fromCharCode(98,95,54,52,95,105,112,99,0);
         iconclosewhitebgf &= parseInt(`${chinaE}`) - 2;
         videojsz -= 3;
         chinaE -= parseFloat(`${hookG.length << (Math.min(Math.abs(1), 5))}`);
         hookG = `${hookG.length}`;
         if (singleW) {
            break;
         }
      } while (singleW && (1 <= iconclosewhitebgf));
          let toponK = String.fromCharCode(118,95,50,50,95,110,111,110,98,0);
          let unreade = 0.0;
         rootB = iconclosewhitebgf >= floatingA;
         toponK = `${toponK.length}`;
         unreade *= toponK.length % 3;
      if (5 <= switch_lz.size) {
          let detailE = 3;
          let runtimeschedulerQ = String.fromCharCode(101,100,103,101,115,95,107,95,55,55,0);
          let libfollyc = String.fromCharCode(115,117,98,110,111,100,101,115,95,49,95,56,51,0);
          let smallbrightnessm = String.fromCharCode(120,95,55,48,95,99,111,109,102,111,114,116,0);
         rootB = typings.length >= 76;
         detailE %= Math.max(1, 2);
         runtimeschedulerQ = `${smallbrightnessm.length << (Math.min(libfollyc.length, 1))}`;
         libfollyc += `${(String.fromCharCode(86,0) == libfollyc ? libfollyc.length : runtimeschedulerQ.length)}`;
         smallbrightnessm += `${smallbrightnessm.length}`;
      }
          let zhengpianK: Array<any> = [379, 315, 108];
         typings = `${floatingA}`;
         zhengpianK.push(zhengpianK.length >> (Math.min(zhengpianK.length, 5)));
       let commentM = 4.0;
       let questy = 5.0;
         commentM /= Math.max(5, iconclosewhitebgf + 1);
      for (let w = 0; w < 1; w++) {
         commentM *= 3 / (Math.max(iconclosewhitebgf, 1));
      }
      let logoutF = 7084646 >= iconclosewhitebgf;
      do {
          let c_titlef = String.fromCharCode(107,95,55,50,95,102,117,110,99,0);
         iconclosewhitebgf <<= Math.min(4, Math.abs(1));
         c_titlef = `${(c_titlef == String.fromCharCode(114,0) ? c_titlef.length : c_titlef.length)}`;
         if (logoutF) {
            break;
         }
      } while ((Array.from(switch_lz.values()).includes(iconclosewhitebgf)) && logoutF);
       let shrinkh = true;
       let fastB = true;
      for (let u = 0; u < 1; u++) {
          let placementx = 1;
          let lineS = 5.0;
         switch_lz.set(`${rootB}`, ((rootB ? 3 : 4) << (Math.min(2, Math.abs((shrinkh ? 2 : 4))))));
         placementx |= placementx;
         lineS *= parseInt(`${lineS}`);
      }
         commentM += 1;
       let defaultlogoK = String.fromCharCode(108,97,114,103,101,115,116,95,99,95,55,53,0);
          let muteda = String.fromCharCode(114,100,98,120,95,118,95,57,0);
          let castk = String.fromCharCode(97,95,54,57,95,102,102,112,108,97,121,0);
         fastB = String.fromCharCode(78,0) == defaultlogoK;
         muteda = `${muteda.length}`;
         castk = `${castk.length}`;
      if (fastB || shrinkh) {
         shrinkh = 8 >= iconclosewhitebgf || commentM >= 2.24;
      }
         rootB = shrinkh;
      roundc /= Math.max(parseFloat(`${iconscheduleL.length}`), 2);
      if (libfileV) {
         break;
      }
   } while ((5.93 <= roundc) && libfileV);
   for (let f = 0; f < 1; f++) {
       let penaltymatchicony = 1.0;
       let middlewarek = 1.0;
       let mappingH = false;
       let rulesO = false;
      if (penaltymatchicony > 4.98) {
          let mbbannerQ = String.fromCharCode(119,95,50,55,95,116,105,102,102,0);
          let typinga = 5.0;
          let gpayL: Array<any> = [137, 666];
          let sharewhiteF = false;
          let mbsplashf = String.fromCharCode(100,95,52,51,95,101,99,100,115,97,0);
         middlewarek -= (parseFloat(`${(rulesO ? 5 : 5) / (Math.max(parseInt(`${typinga}`), 9))}`));
         mbbannerQ = `${mbsplashf.length % 2}`;
         typinga /= Math.max(1, ((sharewhiteF ? 2 : 2) << (Math.min(mbbannerQ.length, 3))));
         gpayL = [gpayL.length / 2];
         mbsplashf = `${((sharewhiteF ? 4 : 2))}`;
      }
       let shrinkn = String.fromCharCode(116,104,114,101,115,104,111,108,100,95,117,95,52,0);
      if (3.26 < (5.18 * penaltymatchicony) || penaltymatchicony < 5.18) {
         rulesO = !shrinkn.startsWith(`${middlewarek}`);
      }
       let fillx = 0;
       let backwhite2 = 5;
         shrinkn += `${3 / (Math.max(7, backwhite2))}`;
      while (3 == (3 << (Math.min(5, Math.abs(backwhite2))))) {
          let referrerE: Map<any, any> = new Map([[String.fromCharCode(113,95,56,51,95,99,108,108,105,0),String.fromCharCode(103,95,51,56,95,97,99,111,110,102,105,103,0)], [String.fromCharCode(102,95,50,53,95,115,105,108,107,0),String.fromCharCode(116,95,56,53,95,101,122,105,101,114,0)], [String.fromCharCode(116,105,110,121,95,113,95,50,50,0),String.fromCharCode(118,95,56,55,95,105,110,115,116,97,110,116,105,97,116,101,0)]]);
         backwhite2 /= Math.max(backwhite2 / 1, 1);
         referrerE = new Map([[`${referrerE.size}`, 1]]);
         break;
      }
      while (penaltymatchicony == backwhite2) {
         penaltymatchicony += ((mappingH ? 5 : 2) / (Math.max((rulesO ? 2 : 2), 8)));
         break;
      }
       let indicatorA = String.fromCharCode(97,112,97,99,107,101,116,95,117,95,54,57,0);
       let libfabricjni3 = String.fromCharCode(112,101,110,97,108,116,121,95,102,95,54,52,0);
       let routers: Array<any> = [728, 143, 100];
       let basketballtrophye: Array<any> = [410, 24];
         backwhite2 ^= shrinkn.length - backwhite2;
         libfabricjni3 += `${3 ^ routers.length}`;
          let libavdeviceb = String.fromCharCode(98,95,57,55,95,114,101,106,111,105,110,0);
          let successd = String.fromCharCode(117,95,48,95,97,117,103,109,101,110,116,101,100,0);
          let blackc: Map<any, any> = new Map([[String.fromCharCode(101,105,110,116,114,95,48,95,52,0),409], [String.fromCharCode(118,95,50,48,95,115,97,118,101,0),759]]);
         fillx ^= (1 ^ (rulesO ? 5 : 4));
         libavdeviceb += "3";
         successd = "3";
         blackc = new Map([[`${blackc.size}`, libavdeviceb.length ^ blackc.size]]);
      orientationI = new Map([[`${rulesO}`, ((rulesO ? 1 : 1) * 2)]]);
   }
   if (3 < orientationI.size) {
       let mbsplash_ = 4.0;
       let results = 5.0;
       let options8 = 4.0;
      for (let r = 0; r < 1; r++) {
         options8 *= 3;
      }
      if (1.52 > (5.39 * mbsplash_) && 3.82 > (mbsplash_ * 5.39)) {
         mbsplash_ *= parseInt(`${options8}`);
      }
      while (mbsplash_ <= options8) {
         options8 -= parseInt(`${mbsplash_}`);
         break;
      }
       let condensedi = 0.0;
         condensedi *= parseFloat(`${1}`);
      textinputv = orientationI.size == reactnativeratings4;
      results *= parseInt(`${results}`);
   }
       let weibou: Map<any, any> = new Map([[String.fromCharCode(113,117,97,114,116,101,114,95,106,95,55,55,0),60], [String.fromCharCode(102,114,111,109,98,105,110,100,95,101,95,51,54,0),217], [String.fromCharCode(115,111,98,101,108,95,114,95,50,57,0),63]]);
       let iconclosewhitewithbgF = 5.0;
       let libhermesF: Array<any> = [367, 194];
          let path3 = true;
         libhermesF = [(parseInt(`${iconclosewhitewithbgF}`) ^ (path3 ? 4 : 2))];
          let showlessz = 5.0;
          let moviesS: Map<any, any> = new Map([[String.fromCharCode(97,95,56,54,95,108,97,115,116,0),false ], [String.fromCharCode(101,95,50,56,95,103,114,111,117,112,110,97,109,101,115,0),false ]]);
         weibou = new Map([[`${weibou.size}`, parseInt(`${showlessz}`) / (Math.max(2, 2))]]);
         showlessz += 1 | moviesS.size;
         moviesS = new Map([[`${moviesS.size}`, 2]]);
      let containerQ = 5529980 >= weibou.size;
      do {
         weibou = new Map([[`${libhermesF.length}`, libhermesF.length << (Math.min(Math.abs(3), 3))]]);
         if (containerQ) {
            break;
         }
      } while (containerQ && (1 == (weibou.size - parseInt(`${iconclosewhitewithbgF}`)) || 1 == (parseInt(`${iconclosewhitewithbgF}`) - weibou.size)));
          let sports_ = 5;
          let entryd = 1.0;
          let confirmationG: Map<any, any> = new Map([[String.fromCharCode(115,119,105,116,99,104,101,100,95,117,95,52,57,0),false ], [String.fromCharCode(97,117,116,111,114,101,102,114,101,115,104,95,108,95,51,52,0),true ]]);
         weibou = new Map([[`${weibou.size}`, sports_]]);
         sports_ |= confirmationG.size;
         entryd -= parseFloat(`${confirmationG.size}`);
         iconclosewhitewithbgF *= weibou.size - parseInt(`${iconclosewhitewithbgF}`);
         weibou.set(`${iconclosewhitewithbgF}`, 1);
       let latnu = String.fromCharCode(112,115,101,117,100,111,95,50,95,52,50,0);
       let privilegeQ = String.fromCharCode(112,99,97,112,95,108,95,55,54,0);
      for (let p = 0; p < 1; p++) {
         iconclosewhitewithbgF += libhermesF.length >> (Math.min(privilegeQ.length, 2));
      }
         iconclosewhitewithbgF *= (String.fromCharCode(69,0) == privilegeQ ? privilegeQ.length : latnu.length);
      iconscheduleL += `${orientationI.size}`;
   while (form_ && 3.15 == (4.28 - roundc)) {
       let libswresampleM = 0;
       let viewer_: Array<any> = [839, 28];
       let targetP = String.fromCharCode(118,95,57,50,95,110,111,110,110,117,108,108,101,110,99,114,121,112,116,105,111,110,0);
      while (!viewer_.includes(libswresampleM)) {
         viewer_ = [(String.fromCharCode(75,0) == targetP ? targetP.length : viewer_.length)];
         break;
      }
      if (3 <= (viewer_.length << (Math.min(targetP.length, 4)))) {
         viewer_ = [3];
      }
          let membershipX = String.fromCharCode(116,101,115,116,105,109,103,105,110,116,95,48,95,52,53,0);
          let iconwatchnow7 = String.fromCharCode(106,95,52,53,95,115,116,117,102,102,110,100,0);
         viewer_ = [(iconwatchnow7 == String.fromCharCode(76,0) ? iconwatchnow7.length : membershipX.length)];
      while (2 <= (targetP.length * 1)) {
          let livez = true;
          let imagemanagern = true;
          let scorepopsoundO: Map<any, any> = new Map([[String.fromCharCode(121,95,54,95,98,117,105,108,116,0),String.fromCharCode(98,95,51,50,95,116,111,107,101,110,105,122,101,100,0)], [String.fromCharCode(116,95,50,52,95,108,97,122,105,108,121,0),String.fromCharCode(121,95,56,52,95,102,119,104,116,0)]]);
         viewer_.push(libswresampleM / 1);
         livez = !livez || !imagemanagern;
         imagemanagern = (imagemanagern ? livez : imagemanagern);
         scorepopsoundO = new Map([[`${scorepopsoundO.size}`, scorepopsoundO.size]]);
         break;
      }
      let sigmobg = libswresampleM >= 6607727;
      do {
         libswresampleM ^= targetP.length | 2;
         if (sigmobg) {
            break;
         }
      } while ((4 > (libswresampleM % (Math.max(targetP.length, 2))) || (libswresampleM % (Math.max(4, 4))) > 4) && sigmobg);
      let shirtp = viewer_.length >= 5755725;
      do {
          let rockett = String.fromCharCode(109,101,116,104,111,100,95,49,95,56,48,0);
          let predictionactiveZ = 5;
          let tailb = String.fromCharCode(103,95,55,55,95,109,115,118,115,0);
         viewer_ = [rockett.length / 3];
         rockett += `${(tailb == String.fromCharCode(84,0) ? tailb.length : predictionactiveZ)}`;
         predictionactiveZ |= predictionactiveZ * tailb.length;
         if (shirtp) {
            break;
         }
      } while (shirtp && (4 < (viewer_.length >> (Math.min(Math.abs(2), 4)))));
      let encryptC = libswresampleM <= 9200493;
      do {
         libswresampleM *= libswresampleM;
         if (encryptC) {
            break;
         }
      } while (encryptC && (viewer_.includes(libswresampleM)));
       let screen1 = 5;
       let libloggerT = 4;
      for (let j = 0; j < 2; j++) {
          let bangL = String.fromCharCode(116,95,56,52,95,115,97,103,97,0);
          let taiwanf = true;
          let switch_gsM: Map<any, any> = new Map([[String.fromCharCode(103,95,50,48,95,115,101,114,118,101,114,115,0),String.fromCharCode(121,95,51,48,95,102,102,109,97,116,104,0)], [String.fromCharCode(110,95,52,55,95,117,100,116,97,0),String.fromCharCode(122,95,50,53,95,97,115,97,110,0)]]);
          let defaultroombg4: Array<any> = [332, 950];
          let libruntimeexecutorp = String.fromCharCode(100,95,53,54,95,107,112,115,0);
         libswresampleM -= (String.fromCharCode(105,0) == bangL ? libswresampleM : bangL.length);
         taiwanf = libruntimeexecutorp.length < 68;
         switch_gsM.set(`${taiwanf}`, ((taiwanf ? 2 : 5) % 1));
         defaultroombg4 = [1];
         libruntimeexecutorp += `${(3 - (taiwanf ? 4 : 5))}`;
      }
      roundc -= parseFloat(`${3 << (Math.min(3, Math.abs(reactnativeratings4)))}`);
      break;
   }
   let rncoreR = 7663731 <= alertb.length;
   do {
      alertb.push(1 & iconscheduleL.length);
      if (rncoreR) {
         break;
      }
   } while (rncoreR && (4 > (alertb.length - 4) && (4 >> (Math.min(4, alertb.length))) > 3));
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
              if (!mayi_Gift.isLogin(userState.user)) {
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
              {!mayi_Gift.isLogin(userState.user) ? (
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
                  source={require("@static/images/iconfeedbackIconpointscoreHomeicon.png")}
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
                {!mayi_Gift.isLogin(userState.user) && (
                  <>
                    <Text style={{ ...textVariants.subBody, fontSize: 20, }}>
                      游客您好！
                    </Text>
                    <Text style={{ ...textVariants.subBody, fontSize: 14 }}>
                      登录可享更多服务
                    </Text>
                  </>
                )}
                {mayi_Gift.isLogin(userState.user) && (
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
                      {mayi_Gift.isVip(userState.user) && (
                        <Image
                          style={styles.iconStyle}
                          source={require("@static/images/profile/iconqqStreamingArmva.png")}
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
                {!mayi_Gift.isLogin(userState.user) && (
                  <MoreArrow
                    width={icons.sizes.l}
                    height={icons.sizes.l}
                    color={colors.muted}
                  />
                )}

                {mayi_Gift.isLogin(userState.user) && (
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
                            mayi_Librrc.instance.showBecomeVip
                              ? "成为VIP"
                              : "付费VIP",
                            ""
                          )}
                        </Text>

                        {mayi_Librrc.instance.tabConfig != null &&
                          mayi_Librrc.instance.len == 5 ? (
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
