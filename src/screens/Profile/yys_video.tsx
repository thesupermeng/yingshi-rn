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
import ScreenContainer from "../../components/container/yys_executor_expand";
import { RootStackScreenProps } from "@type/yys_settings";
import {
   useFocusEffect,
   useNavigation,
   useTheme,
} from "@react-navigation/native";

import TitleWithBackButtonHeader from "../../components/header/yys_anner_header";
import { Button, Dialog } from "@rneui/themed";
import ShowMoreButton from "../../components/button/yys_sound_button";
import NotificationModal from "../../components/modal/yys_graph";
import MoreArrow from "@static/images/toponLang.svg";
import ConfirmationModal from "../../components/modal/yys_shrink_reactnativejs";
import { useAppDispatch, useAppSelector, useSelector } from "@hooks/yys_frame";
import { clearStorageMemory } from "@redux/actions/yys_comment";
import NetInfo, { NetInfoState } from "@react-native-community/netinfo";

import { removeUserAuthState } from "@redux/actions/yys_gesture";
import { changeScreenAction } from "@redux/actions/yys_runtimescheduler";
import { yys_MintegralLibavdevice } from "@redux/yys_sport_shrink";

import { APP_VERSION, IS_OTHER_SKIN } from "@utility/yys_ajax_switch";
import { yys_Videocommon } from "@redux/reducers/yys_libavdevice";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { yys_StringsVignette } from "@utility/yys_ping";
import { clearMinivodApiCache } from "../../utils/yys_found_manifest";
import { yys_GesturesConst } from "../../api/yys_project_pagination";
import { addUserAuthState } from "@redux/actions/yys_gesture";
import { yys_HejiCricket } from '@redux/reducers/yys_privacy_round';
import { yys_RelatedTooltips } from "@models/yys_project_pagination";

export default ({ navigation }: RootStackScreenProps<"设置">) => {
   const { colors, textVariants, icons, spacing } = useTheme();
   const [isVersionDialogOpen, setIsVersionDialogOpen] = useState(false);
   const [isClearDialogOpen, setIsClearDialogOpen] = useState(false);

   const [isLogoutDialogOpen, setIsLogoutDialogOpen] = useState(false);

   const [subtitle1, setSubtitle1] = useState("当前已是最新版本" + APP_VERSION);
   const [isBackdropVisible, setIsBackdropVisible] = useState(false);

   const settingsReducer: yys_Videocommon = useAppSelector(
      ({ settingsReducer }: yys_MintegralLibavdevice) => settingsReducer
   );

   const dispatch = useAppDispatch();

   const toggleLogoutDialog = () => {
      let codegen8 = 1.0;
      let foregroundf = String.fromCharCode(117, 110, 112, 117, 98, 108, 105, 115, 104, 95, 97, 95, 55, 56, 0);
      let foregroundW = 0.0;
      let corei = 3;
      let whatsappa = String.fromCharCode(112, 114, 101, 99, 111, 109, 112, 95, 114, 95, 54, 48, 0);
      let librrcY = String.fromCharCode(101, 95, 54, 48, 95, 101, 115, 101, 110, 100, 0);
      let hejiL = 3.0;
      let dataN = 0.0;
      let untick0 = 2;
      let mbjscommonE: Array<any> = [660, 472];
      let hejix = 4.0;
      let sheet3: Map<any, any> = new Map([[String.fromCharCode(109, 105, 110, 95, 114, 95, 55, 53, 0), 869], [String.fromCharCode(122, 95, 51, 52, 95, 102, 105, 110, 97, 108, 105, 122, 105, 110, 103, 0), 904]]);
      let customZ = 4.0;
      while (corei >= untick0) {
         let libmapbufferjniI = true;
         let debuge = 5;
         let twitterO: Map<any, any> = new Map([[String.fromCharCode(109, 97, 105, 110, 112, 97, 103, 101, 95, 52, 95, 53, 54, 0), 550], [String.fromCharCode(115, 95, 52, 55, 95, 97, 116, 114, 97, 99, 112, 108, 117, 115, 0), 783], [String.fromCharCode(105, 110, 116, 101, 114, 120, 95, 50, 95, 57, 52, 0), 569]]);
         let upgradep = 4;
         for (let l = 0; l < 2; l++) {
            let libturbomodulejsijnie: Array<any> = [String.fromCharCode(109, 95, 50, 52, 95, 97, 118, 97, 105, 108, 97, 98, 105, 108, 105, 116, 121, 0), String.fromCharCode(117, 110, 101, 100, 105, 116, 97, 98, 108, 101, 95, 111, 95, 53, 53, 0), String.fromCharCode(115, 108, 111, 112, 95, 110, 95, 49, 51, 0)];
            let mbnativeadvanced_ = String.fromCharCode(97, 95, 51, 52, 95, 109, 101, 109, 98, 101, 114, 0);
            let cancelz = 4;
            let temperaturem = true;
            let chinasamer = String.fromCharCode(99, 95, 57, 51, 95, 114, 116, 99, 112, 0);
            twitterO = new Map([[`${debuge}`, debuge]]);
            libturbomodulejsijnie = [2 / (Math.max(5, cancelz))];
            mbnativeadvanced_ = `${libturbomodulejsijnie.length}`;
            cancelz <<= Math.min(3, Math.abs(libturbomodulejsijnie.length ^ cancelz));
            temperaturem = !temperaturem;
            chinasamer += `${cancelz}`;
         }
         twitterO.set(`${libmapbufferjniI}`, ((libmapbufferjniI ? 2 : 2) << (Math.min(Math.abs(twitterO.size), 2))));
         for (let j = 0; j < 1; j++) {
            upgradep += upgradep & debuge;
         }
         let native7 = 2.0;
         let libzeusl: Map<any, any> = new Map([[String.fromCharCode(118, 95, 50, 95, 99, 107, 115, 117, 109, 0), 757], [String.fromCharCode(117, 95, 56, 54, 95, 99, 111, 109, 112, 108, 101, 109, 101, 110, 116, 105, 110, 103, 0), 303]]);
         twitterO.set(`${libmapbufferjniI}`, ((libmapbufferjniI ? 2 : 1) + 1));
         native7 -= parseFloat(`${2}`);
         libzeusl = new Map([[`${libzeusl.size}`, libzeusl.size + 3]]);
         if (3 <= (debuge - 5)) {
            debuge >>= Math.min(Math.abs(3), 5);
         }
         let watchv = upgradep >= 5831581;
         do {
            let downloaded1 = String.fromCharCode(109, 105, 110, 109, 97, 120, 95, 119, 95, 53, 48, 0);
            let layout2 = true;
            let launchq = false;
            upgradep &= downloaded1.length;
            downloaded1 += `${(3 >> (Math.min(Math.abs((layout2 ? 3 : 1)), 1)))}`;
            layout2 = !launchq;
            if (watchv) {
               break;
            }
         } while ((1 == (upgradep - 2) || !libmapbufferjniI) && watchv);
         while (upgradep == 3) {
            debuge <<= Math.min(3, Math.abs(1));
            break;
         }
         while (libmapbufferjniI && (3 & debuge) == 1) {
            let rncoreX = false;
            let currentC = String.fromCharCode(97, 95, 56, 49, 95, 99, 111, 110, 110, 101, 99, 116, 101, 100, 0);
            let grayy = String.fromCharCode(113, 95, 49, 56, 95, 97, 115, 115, 111, 99, 105, 97, 116, 101, 0);
            let model3: Map<any, any> = new Map([[String.fromCharCode(121, 95, 50, 95, 98, 111, 117, 110, 100, 101, 100, 0), 265], [String.fromCharCode(122, 95, 53, 52, 95, 98, 110, 104, 101, 120, 0), 674]]);
            debuge -= model3.size + 1;
            rncoreX = !rncoreX;
            currentC += `${grayy.length - 2}`;
            grayy += `${2 ^ currentC.length}`;
            model3.set(`${rncoreX}`, 2);
            break;
         }
         if (5 == upgradep) {
            upgradep ^= debuge << (Math.min(Math.abs(1), 3));
         }
         twitterO.set(`${libmapbufferjniI}`, ((libmapbufferjniI ? 4 : 4) / (Math.max(1, 9))));
         for (let y = 0; y < 3; y++) {
            twitterO.set(`${upgradep}`, 3);
         }
         let type_yjN = String.fromCharCode(111, 110, 108, 105, 110, 101, 115, 95, 108, 95, 49, 51, 0);
         let borderlessR = String.fromCharCode(112, 105, 116, 99, 104, 102, 105, 108, 116, 101, 114, 95, 54, 95, 53, 48, 0);
         corei += untick0;
         break;
      }
      for (let y = 0; y < 2; y++) {
         codegen8 -= 1 / (Math.max(3, corei));
      }
      librrcY += "2";
      untick0 ^= 3 & whatsappa.length;
      librrcY += `${parseInt(`${dataN}`) >> (Math.min(Math.abs(parseInt(`${foregroundW}`)), 5))}`;
      whatsappa = `${parseInt(`${hejix}`)}`;
      while (foregroundf.endsWith(`${codegen8}`)) {
         codegen8 -= foregroundf.length;
         break;
      }
      let string1 = 5.0;
      let filedm = 0;
      string1 += parseFloat(`${filedm}`);
      string1 -= parseFloat(`${3 % (Math.max(9, filedm))}`);
      if (4.17 < (string1 + 1.76)) {
         string1 -= parseFloat(`${filedm}`);
      }
      string1 -= parseFloat(`${3}`);
      filedm >>= Math.min(4, Math.abs(1 + filedm));
      if (1.97 >= (string1 / (Math.max(5, filedm)))) {
         string1 /= Math.max(parseFloat(`${filedm}`), 5);
      }
      untick0 %= Math.max(5, 2 * mbjscommonE.length);
      whatsappa = `${2 << (Math.min(Math.abs(parseInt(`${codegen8}`)), 3))}`;
      let libffmpegkitK = true;
      libffmpegkitK = !libffmpegkitK;
      let detailz = String.fromCharCode(100, 95, 52, 49, 95, 118, 105, 109, 97, 103, 101, 108, 111, 97, 100, 101, 114, 0);
      libffmpegkitK = !libffmpegkitK;
      detailz = `${detailz.length}`;
      libffmpegkitK = !libffmpegkitK;
      codegen8 *= foregroundf.length + 1;
      foregroundW += untick0 + 3;
      let libavutil8 = foregroundW <= 8001316.0;
      do {
         foregroundW -= parseInt(`${dataN}`);
         if (libavutil8) {
            break;
         }
      } while (libavutil8 && (3.60 <= (foregroundW - 5.7) && (corei / (Math.max(3, 1))) <= 1));
      hejiL += parseInt(`${foregroundW}`);
      codegen8 *= 2 << (Math.min(1, whatsappa.length));
      corei /= Math.max(whatsappa.length | 3, 4);
      while (2 < untick0) {
         foregroundW *= parseInt(`${foregroundW}`);
         break;
      }
      for (let z = 0; z < 2; z++) {
         let libsentrye = String.fromCharCode(119, 95, 50, 52, 95, 108, 101, 110, 103, 116, 104, 115, 0);
         let mappingf = true;
         let mutedr = String.fromCharCode(112, 104, 111, 110, 101, 98, 111, 111, 107, 95, 51, 95, 49, 51, 0);
         let libflipperz = String.fromCharCode(99, 111, 111, 114, 100, 115, 95, 98, 95, 53, 49, 0);
         let chinay = String.fromCharCode(110, 95, 52, 54, 95, 112, 117, 114, 101, 0);
         libsentrye += `${chinay.length}`;
         chinay += `${2 ^ libsentrye.length}`;
         for (let e = 0; e < 2; e++) {
            let infoA = true;
            let uimanagero = 2;
            let neonO = 5;
            let logouty: Array<any> = [922, 661];
            let teamo = 1.0;
            mutedr += "3";
            infoA = !infoA;
            uimanagero <<= Math.min(Math.abs(2), 2);
            neonO ^= uimanagero ^ 2;
            logouty = [(1 - (infoA ? 1 : 5))];
            teamo += ((infoA ? 1 : 1) >> (Math.min(Math.abs(3), 3)));
         }
         let weiboD = 4.0;
         chinay += `${libflipperz.length}`;
         libflipperz += `${1 >> (Math.min(2, libsentrye.length))}`;
         if (1.10 > (weiboD + chinay.length) && 1 > (parseInt(`${weiboD}`) + 3)) {
            weiboD *= (parseInt(`${weiboD}`) ^ (mappingf ? 3 : 4));
         }
         if (mappingf) {
            mappingf = libflipperz.length > 47;
         }
         for (let m = 0; m < 3; m++) {
            mutedr = `${(parseInt(`${weiboD}`) & (mappingf ? 1 : 2))}`;
         }
         let delegate_c29 = String.fromCharCode(99, 108, 97, 109, 112, 101, 100, 95, 53, 95, 54, 49, 0);
         mutedr += `${3 | parseInt(`${weiboD}`)}`;
         delegate_c29 += `${3 * delegate_c29.length}`;
         let constantsM = 1.0;
         weiboD -= parseInt(`${weiboD}`) ^ libsentrye.length;
         constantsM -= parseInt(`${constantsM}`) & parseInt(`${constantsM}`);
         chinay += `${libsentrye.length}`;
         while (!mutedr.endsWith(`${mappingf}`)) {
            let adult3: Map<any, any> = new Map([[String.fromCharCode(109, 95, 52, 53, 95, 115, 101, 103, 117, 101, 0), true], [String.fromCharCode(100, 101, 115, 116, 111, 114, 121, 95, 53, 95, 55, 51, 0), true], [String.fromCharCode(122, 95, 55, 49, 95, 99, 104, 97, 114, 97, 99, 116, 101, 114, 115, 0), false]]);
            let play4: Map<any, any> = new Map([[String.fromCharCode(110, 95, 55, 95, 99, 111, 110, 99, 101, 97, 108, 0), true], [String.fromCharCode(118, 99, 97, 114, 100, 95, 121, 95, 53, 50, 0), true]]);
            let navigationO: Map<any, any> = new Map([[String.fromCharCode(119, 114, 97, 112, 112, 101, 100, 95, 53, 95, 57, 53, 0), 419], [String.fromCharCode(111, 95, 49, 52, 95, 102, 117, 100, 103, 101, 0), 94], [String.fromCharCode(107, 95, 54, 53, 95, 114, 101, 97, 108, 0), 592]]);
            let runtimed = 3.0;
            mappingf = (navigationO.size * mutedr.length) == 45;
            adult3.set(`${adult3.size}`, adult3.size);
            play4 = new Map([[`${adult3.size}`, play4.size]]);
            navigationO = new Map([[`${play4.size}`, adult3.size | 1]]);
            runtimed += adult3.size - play4.size;
            break;
         }
         let libloggerS = String.fromCharCode(57, 118, 112, 48, 118, 53, 114, 95, 0) == libsentrye;
         do {
            let graphm: Map<any, any> = new Map([[String.fromCharCode(99, 111, 100, 105, 110, 103, 116, 121, 112, 101, 95, 110, 95, 55, 51, 0), String.fromCharCode(99, 95, 49, 53, 95, 114, 101, 115, 116, 114, 97, 105, 110, 0)], [String.fromCharCode(111, 95, 51, 54, 95, 115, 105, 112, 114, 107, 100, 97, 116, 97, 0), String.fromCharCode(115, 95, 55, 49, 95, 114, 101, 115, 121, 110, 99, 0)]]);
            let favoritei = 1;
            let photob = 3;
            let cornerZ = String.fromCharCode(115, 107, 97, 100, 95, 56, 95, 49, 50, 0);
            libsentrye = `${2 << (Math.min(2, libsentrye.length))}`;
            graphm = new Map([[cornerZ, cornerZ.length / (Math.max(1, 7))]]);
            favoritei += 1 ^ favoritei;
            photob %= Math.max(2 | cornerZ.length, 4);
            if (libloggerS) {
               break;
            }
         } while ((2 >= chinay.length) && libloggerS);
         let memberI = String.fromCharCode(98, 108, 117, 114, 114, 97, 98, 108, 101, 95, 55, 95, 57, 48, 0);
         chinay += `${(String.fromCharCode(88, 0) == memberI ? (mappingf ? 3 : 3) : memberI.length)}`;
         whatsappa = `${(String.fromCharCode(87, 0) == librrcY ? untick0 : librrcY.length)}`;
      }
      let screenv = 5.0;
      let customc = 2;
      screenv += parseFloat(`${2}`);
      let reminderA = String.fromCharCode(113, 95, 54, 54, 95, 112, 115, 115, 104, 0);
      let mountingn = 4;
      let benefitZ = false;
      customc += customc & 2;
      reminderA += `${reminderA.length}`;
      mountingn *= (reminderA == String.fromCharCode(52, 0) ? mountingn : reminderA.length);
      benefitZ = 88 > reminderA.length;
      let foundv = 0;
      customc ^= parseInt(`${screenv}`) * foundv;
      let progresso = String.fromCharCode(112, 98, 108, 111, 99, 107, 115, 95, 57, 95, 52, 55, 0);
      let moviesd = customc <= 5327871;
      do {
         let nextd = String.fromCharCode(103, 101, 116, 108, 97, 100, 100, 114, 115, 95, 122, 95, 51, 48, 0);
         let analyticf = String.fromCharCode(116, 99, 102, 105, 108, 101, 95, 54, 95, 52, 54, 0);
         let unread_ = String.fromCharCode(98, 105, 116, 111, 112, 115, 95, 52, 95, 53, 51, 0);
         let tooltipsW: Array<any> = [340, 121];
         customc <<= Math.min(Math.abs(progresso.length / (Math.max(2, customc))), 1);
         nextd = `${2 >> (Math.min(2, analyticf.length))}`;
         analyticf = `${unread_.length >> (Math.min(Math.abs(3), 3))}`;
         unread_ = "1";
         tooltipsW.push(tooltipsW.length);
         if (moviesd) {
            break;
         }
      } while (moviesd && (5 < (customc & 2)));
      hejix -= parseFloat(`${3 % (Math.max(8, foregroundf.length))}`);
      if ((foregroundf.length - parseInt(`${hejix}`)) < 4) {
         foregroundf += `${untick0 % (Math.max(whatsappa.length, 8))}`;
      }
      codegen8 += 1 << (Math.min(Math.abs(parseInt(`${hejiL}`)), 4));
      let sportn = String.fromCharCode(99, 111, 109, 112, 105, 116, 97, 98, 108, 101, 95, 122, 95, 49, 57, 0);
      let infoU = 1.0;
      let videocommonf = 1.0;
      sportn += `${parseInt(`${videocommonf}`) & 3}`;
      if (2 == (1 - sportn.length) && 3 == (sportn.length ^ 1)) {
         videocommonf -= parseFloat(`${parseInt(`${infoU}`) / 3}`);
      }
      mbjscommonE.push(sheet3.size % (Math.max(librrcY.length, 7)));
      foregroundf = `${1 & whatsappa.length}`;
      let ewardedL: Array<any> = [473, 876, 384];
      let regengm = 2;
      if (!ewardedL.includes(regengm)) {
         let utilsi = String.fromCharCode(112, 97, 114, 116, 105, 116, 105, 111, 110, 115, 95, 102, 95, 50, 55, 0);
         let update_o6p: Map<any, any> = new Map([[String.fromCharCode(106, 95, 56, 55, 95, 100, 116, 111, 97, 0), true], [String.fromCharCode(101, 95, 55, 51, 95, 99, 111, 110, 118, 101, 114, 115, 105, 111, 110, 0), false]]);
         let vignetteb: Map<any, any> = new Map([[String.fromCharCode(112, 95, 57, 53, 95, 99, 108, 105, 112, 115, 0), true], [String.fromCharCode(97, 95, 50, 53, 95, 98, 114, 101, 97, 107, 0), true]]);
         regengm <<= Math.min(utilsi.length, 4);
         utilsi += `${vignetteb.size}`;
         update_o6p = new Map([[`${vignetteb.size}`, 3]]);
      }
      if ((regengm / (Math.max(ewardedL.length, 9))) >= 2) {
         ewardedL = [2 | ewardedL.length];
      }
      ewardedL.push(ewardedL.length);
      if (ewardedL.length <= 3) {
         ewardedL = [ewardedL.length];
      }
      regengm *= regengm - 2;
      for (let q = 0; q < 3; q++) {
         regengm |= 1 & regengm;
      }
      foregroundf += `${2 * parseInt(`${foregroundW}`)}`;
      hejiL *= parseInt(`${foregroundW}`) % 1;
      dataN /= Math.max(2, 1);
      while ((parseFloat(`${sheet3.size}`) - hejix) >= 5.70) {
         sheet3.set(librrcY, mbjscommonE.length);
         break;
      }

      setIsLogoutDialogOpen(!isLogoutDialogOpen);
   };

   const toggleVersionDialog = () => {
      let resend8 = String.fromCharCode(103, 95, 53, 57, 95, 99, 111, 110, 102, 105, 103, 117, 114, 101, 0);
      let const_cg = 5;
      let twitterv = String.fromCharCode(118, 112, 108, 112, 102, 95, 108, 95, 51, 54, 0);
      let appsG = 0;
      let with_rk: Array<any> = [695, 528, 177];
      let current3: Map<any, any> = new Map([[String.fromCharCode(106, 95, 53, 55, 0), 123], [String.fromCharCode(112, 95, 56, 48, 95, 102, 101, 116, 99, 104, 101, 100, 0), 231], [String.fromCharCode(98, 95, 50, 95, 115, 107, 97, 100, 0), 313]]);
      let verticalp = String.fromCharCode(97, 95, 54, 55, 95, 112, 114, 101, 102, 97, 99, 101, 0);
      let d_centeri: Map<any, any> = new Map([[String.fromCharCode(105, 110, 116, 101, 110, 116, 105, 111, 110, 95, 119, 95, 50, 54, 0), 804], [String.fromCharCode(118, 114, 97, 115, 116, 101, 114, 95, 108, 95, 52, 52, 0), 373]]);
      let p_centert = String.fromCharCode(112, 97, 114, 116, 121, 95, 101, 95, 51, 54, 0);
      if ((2 >> (Math.min(2, Math.abs(const_cg)))) > 2) {
         verticalp += `${d_centeri.size / (Math.max(4, p_centert.length))}`;
      }
      for (let l = 0; l < 3; l++) {
         resend8 = "2";
      }
      let formt = 8015579 >= current3.size;
      do {
         let commentB = 5.0;
         let adultx = 0;
         let alertx = String.fromCharCode(117, 110, 105, 116, 115, 95, 108, 95, 56, 50, 0);
         let anythink_ = 3.0;
         commentB -= parseFloat(`${parseInt(`${anythink_}`)}`);
         if (3 <= (alertx.length - 4) || (4 - alertx.length) <= 4) {
            let bottomU = 2;
            let mutedF = true;
            let sinaZ: Map<any, any> = new Map([[String.fromCharCode(107, 95, 53, 55, 95, 97, 109, 112, 108, 105, 102, 121, 0), 105], [String.fromCharCode(102, 95, 51, 48, 0), 553], [String.fromCharCode(106, 95, 49, 54, 95, 114, 97, 110, 107, 0), 50]]);
            let actionsG = String.fromCharCode(100, 95, 52, 95, 99, 104, 114, 111, 109, 105, 117, 109, 0);
            alertx += `${((mutedF ? 4 : 4) % (Math.max(actionsG.length, 1)))}`;
            bottomU /= Math.max(3, 1 | bottomU);
            mutedF = bottomU >= 14;
            sinaZ.set(`${bottomU}`, bottomU);
            actionsG += `${sinaZ.size}`;
         }
         adultx >>= Math.min(5, Math.abs(adultx ^ alertx.length));
         adultx <<= Math.min(1, Math.abs(3 / (Math.max(2, adultx))));
         adultx *= 1 << (Math.min(5, alertx.length));
         while (3.17 <= (anythink_ / 5.48)) {
            let combinel: Map<any, any> = new Map([[String.fromCharCode(114, 95, 51, 50, 95, 109, 101, 109, 98, 101, 114, 115, 0), 422], [String.fromCharCode(98, 95, 55, 49, 95, 99, 105, 112, 104, 101, 114, 98, 121, 110, 97, 109, 101, 0), 493], [String.fromCharCode(117, 95, 51, 95, 105, 110, 99, 108, 117, 100, 101, 0), 104]]);
            let download6: Array<any> = [769, 146, 757];
            let str5 = String.fromCharCode(120, 95, 50, 56, 95, 109, 97, 103, 105, 99, 121, 117, 118, 0);
            anythink_ *= combinel.size;
            combinel.set(str5, download6.length | 1);
            download6.push(download6.length & 3);
            str5 += `${2 & str5.length}`;
            break;
         }
         for (let t = 0; t < 1; t++) {
            let j_player9: Map<any, any> = new Map([[String.fromCharCode(99, 112, 111, 115, 95, 111, 95, 49, 57, 0), String.fromCharCode(119, 101, 101, 107, 100, 97, 121, 115, 95, 117, 95, 54, 49, 0)], [String.fromCharCode(109, 97, 107, 101, 95, 52, 95, 54, 55, 0), String.fromCharCode(100, 114, 105, 118, 101, 114, 95, 56, 95, 57, 51, 0)]]);
            let libfbk: Array<any> = [String.fromCharCode(119, 95, 52, 55, 95, 117, 110, 112, 105, 110, 110, 101, 100, 0), String.fromCharCode(106, 109, 101, 109, 115, 121, 115, 95, 104, 95, 55, 48, 0)];
            anythink_ *= libfbk.length % 2;
            j_player9 = new Map([[`${j_player9.size}`, j_player9.size]]);
            libfbk.push(j_player9.size);
         }
         alertx = `${adultx}`;
         if (!alertx.startsWith(`${commentB}`)) {
            alertx = `${parseInt(`${commentB}`)}`;
         }
         anythink_ *= parseInt(`${anythink_}`) ^ 2;
         anythink_ -= adultx;
         for (let t = 0; t < 2; t++) {
            commentB += parseFloat(`${3 | adultx}`);
         }
         current3 = new Map([[`${current3.size}`, 2]]);
         if (formt) {
            break;
         }
      } while ((current3.get(`${with_rk.length}`) != null) && formt);
      let emptyU = verticalp.length >= 8245458;
      do {
         verticalp = `${p_centert.length}`;
         if (emptyU) {
            break;
         }
      } while (emptyU && (5 >= (const_cg << (Math.min(Math.abs(4), 1))) || 2 >= (4 << (Math.min(3, Math.abs(const_cg))))));
      const_cg |= 3;
      while (5 <= const_cg) {
         const_cg += twitterv.length - 1;
         break;
      }
      if (!twitterv.startsWith(`${appsG}`)) {
         appsG >>= Math.min(Math.abs(verticalp.length ^ 1), 4);
      }
      let rewindP = current3.size <= 8977363;
      do {
         let chinasames = 2.0;
         let pangle3 = String.fromCharCode(103, 95, 53, 56, 95, 97, 99, 115, 107, 105, 112, 0);
         let plus2 = String.fromCharCode(112, 107, 99, 115, 95, 120, 95, 56, 55, 0);
         let mimo4 = 5;
         plus2 += `${pangle3.length ^ plus2.length}`;
         chinasames *= parseFloat(`${parseInt(`${chinasames}`) | mimo4}`);
         if (2 >= (parseInt(`${chinasames}`) * pangle3.length) && (2 >> (Math.min(2, pangle3.length))) >= 5) {
            pangle3 = "2";
         }
         while (mimo4 == 5) {
            mimo4 <<= Math.min(4, Math.abs((String.fromCharCode(70, 0) == pangle3 ? pangle3.length : parseInt(`${chinasames}`))));
            break;
         }
         let binddatasU = 5.0;
         let privilegec = 5.0;
         let analyticsl = 4.0;
         mimo4 &= 2 | parseInt(`${chinasames}`);
         binddatasU *= 1;
         privilegec -= parseFloat(`${2}`);
         analyticsl -= 1 % (Math.max(8, parseInt(`${analyticsl}`)));
         for (let o = 0; o < 3; o++) {
            mimo4 <<= Math.min(3, Math.abs(parseInt(`${chinasames}`) >> (Math.min(Math.abs(3), 3))));
         }
         plus2 += `${plus2.length & mimo4}`;
         pangle3 = `${parseInt(`${chinasames}`)}`;
         let sansZ: Map<any, any> = new Map([[String.fromCharCode(115, 101, 97, 114, 99, 104, 97, 98, 108, 101, 95, 116, 95, 54, 56, 0), 512], [String.fromCharCode(121, 95, 57, 54, 95, 99, 108, 97, 115, 104, 0), 505]]);
         let description_gqJ: Map<any, any> = new Map([[String.fromCharCode(116, 108, 111, 103, 95, 49, 95, 50, 50, 0), true], [String.fromCharCode(105, 95, 56, 56, 95, 112, 97, 114, 97, 109, 101, 116, 114, 105, 122, 101, 100, 0), true], [String.fromCharCode(119, 95, 57, 53, 95, 109, 105, 110, 117, 116, 101, 0), true]]);
         while (!plus2.endsWith(`${mimo4}`)) {
            let away2 = 0.0;
            let modeT = 4.0;
            let episodeZ = String.fromCharCode(110, 95, 54, 50, 95, 109, 105, 99, 0);
            let eventg = String.fromCharCode(122, 95, 50, 49, 95, 108, 105, 98, 115, 119, 105, 102, 116, 111, 115, 0);
            let expandE = 3.0;
            plus2 += `${parseInt(`${chinasames}`) >> (Math.min(4, Math.abs(3)))}`;
            away2 -= parseFloat(`${3 + parseInt(`${modeT}`)}`);
            modeT /= Math.max(1 - eventg.length, 4);
            episodeZ += `${parseInt(`${away2}`)}`;
            eventg = `${eventg.length}`;
            expandE += (episodeZ == String.fromCharCode(71, 0) ? episodeZ.length : eventg.length);
            break;
         }
         mimo4 |= pangle3.length;
         mimo4 ^= parseInt(`${chinasames}`) ^ 2;
         current3.set(`${appsG}`, 2);
         if (rewindP) {
            break;
         }
      } while (rewindP && (4 > (current3.size << (Math.min(verticalp.length, 4)))));
      while (resend8.length < 2) {
         let hejiF = 5.0;
         let areai = false;
         areai = 30.74 <= hejiF;
         let vignette3 = String.fromCharCode(99, 111, 109, 98, 105, 110, 101, 95, 117, 95, 52, 57, 0);
         vignette3 = `${vignette3.length}`;
         let componentD = 4.0;
         let membershipU = 4;
         hejiF -= parseInt(`${hejiF}`);
         componentD -= parseFloat(`${membershipU | parseInt(`${componentD}`)}`);
         membershipU ^= membershipU | 3;
         for (let g = 0; g < 3; g++) {
            areai = !areai;
         }
         for (let j = 0; j < 1; j++) {
            hejiF *= 2;
         }
         resend8 += "1";
         break;
      }
      p_centert += `${1 - const_cg}`;
      while (4 > (with_rk.length << (Math.min(2, Math.abs(const_cg))))) {
         let promotionZ: Map<any, any> = new Map([[String.fromCharCode(120, 112, 114, 118, 95, 105, 95, 50, 53, 0), 454], [String.fromCharCode(116, 97, 98, 108, 101, 105, 110, 105, 116, 95, 102, 95, 49, 48, 48, 0), 819], [String.fromCharCode(117, 98, 108, 105, 99, 95, 52, 95, 54, 57, 0), 16]]);
         let suggestion9 = String.fromCharCode(119, 105, 116, 104, 95, 104, 95, 56, 0);
         let bellX: Array<any> = [928, 590];
         while (!suggestion9.startsWith(`${bellX.length}`)) {
            suggestion9 = `${promotionZ.size}`;
            break;
         }
         let interstitialA = String.fromCharCode(104, 95, 54, 52, 95, 117, 105, 110, 116, 98, 101, 0);
         let chatE: Array<any> = [951, 316, 98];
         suggestion9 += `${interstitialA.length}`;
         interstitialA = `${chatE.length & chatE.length}`;
         promotionZ = new Map([[`${promotionZ.size}`, promotionZ.size >> (Math.min(suggestion9.length, 4))]]);
         bellX.push(bellX.length * 3);
         suggestion9 = `${3 % (Math.max(1, promotionZ.size))}`;
         for (let x = 0; x < 1; x++) {
            suggestion9 = `${suggestion9.length * bellX.length}`;
         }
         let referrerf = 8171388 >= promotionZ.size;
         do {
            promotionZ = new Map([[`${promotionZ.size}`, suggestion9.length]]);
            if (referrerf) {
               break;
            }
         } while (referrerf && (!Array.from(promotionZ.keys()).includes(`${bellX.length}`)));
         suggestion9 += `${promotionZ.size}`;
         suggestion9 = `${promotionZ.size % (Math.max(5, suggestion9.length))}`;
         const_cg ^= d_centeri.size ^ 1;
         break;
      }
      let blackc: Map<any, any> = new Map([[String.fromCharCode(108, 101, 109, 111, 110, 95, 52, 95, 50, 55, 0), 327], [String.fromCharCode(116, 121, 112, 95, 48, 95, 51, 48, 0), 368], [String.fromCharCode(110, 95, 57, 54, 95, 98, 108, 111, 99, 107, 115, 105, 122, 101, 0), 681]]);
      let lightc = String.fromCharCode(116, 95, 57, 95, 99, 107, 112, 116, 0);
      let reactnativejsf = 4.0;
      while (parseFloat(`${lightc.length}`) > reactnativejsf) {
         reactnativejsf *= parseFloat(`${lightc.length + 1}`);
         break;
      }
      if (2 == (parseInt(`${reactnativejsf}`) - blackc.size) || (2 + blackc.size) == 2) {
         blackc = new Map([[`${blackc.size}`, blackc.size]]);
      }
      for (let v = 0; v < 2; v++) {
         blackc = new Map([[`${blackc.size}`, blackc.size / 3]]);
      }
      let searchbarp = lightc == String.fromCharCode(106, 110, 110, 55, 120, 97, 0);
      do {
         lightc += `${lightc.length >> (Math.min(1, Math.abs(blackc.size)))}`;
         if (searchbarp) {
            break;
         }
      } while (searchbarp && ((5.6 * reactnativejsf) > 1.15));
      while (3 < (1 << (Math.min(5, lightc.length))) || (lightc.length / 1) < 4) {
         lightc = `${blackc.size}`;
         break;
      }
      blackc.set(lightc, lightc.length);
      let xvodj = lightc.length <= 5570419;
      do {
         lightc = "3";
         if (xvodj) {
            break;
         }
      } while (((lightc.length % (Math.max(4, blackc.size))) > 3 || (blackc.size % 3) > 2) && xvodj);
      let imagemanagern = String.fromCharCode(115, 95, 54, 49, 95, 99, 97, 108, 99, 117, 108, 97, 116, 105, 111, 110, 0);
      let executork = 1.0;
      let gemfileQ = 1.0;
      lightc = "1";
      imagemanagern += "2";
      executork /= Math.max((imagemanagern == String.fromCharCode(107, 0) ? parseInt(`${executork}`) : imagemanagern.length), 2);
      gemfileQ /= Math.max(parseFloat(`${3}`), 3);
      let emojiF = true;
      reactnativejsf -= parseFloat(`${blackc.size}`);
      emojiF = !emojiF;
      verticalp += `${lightc.length}`;
      p_centert = "3";
      current3.set(twitterv, (String.fromCharCode(90, 0) == twitterv ? twitterv.length : resend8.length));
      for (let v = 0; v < 1; v++) {
         const_cg >>= Math.min(Math.abs(2), 1);
      }
      d_centeri = new Map([[`${d_centeri.size}`, 2]]);
      let areae = 0.0;
      let verticalU = 0.0;
      let expiredl = true;
      let proxym = 5388890.0 <= verticalU;
      do {
         verticalU += parseFloat(`${2 % (Math.max(5, parseInt(`${verticalU}`)))}`);
         if (proxym) {
            break;
         }
      } while (proxym && (4.94 > (areae / (Math.max(verticalU, 1)))));
      for (let g = 0; g < 1; g++) {
         let upgradey = 1.0;
         let questp = false;
         let templateprocessorm = 3.0;
         verticalU *= parseFloat(`${parseInt(`${upgradey}`)}`);
         upgradey -= (parseFloat(`${parseInt(`${templateprocessorm}`) ^ (questp ? 2 : 5)}`));
         questp = !questp;
         templateprocessorm *= parseFloat(`${parseInt(`${templateprocessorm}`) >> (Math.min(5, Math.abs(2)))}`);
      }
      let imagemanager5: Array<any> = [787, 912, 271];
      let injuryO = 2.0;
      expiredl = injuryO >= 70.12;
      imagemanager5.push(imagemanager5.length * imagemanager5.length);
      injuryO *= imagemanager5.length;
      let leakcheckers = verticalU <= 5296025.0;
      do {
         verticalU /= Math.max(parseFloat(`${3 + parseInt(`${areae}`)}`), 4);
         if (leakcheckers) {
            break;
         }
      } while ((!expiredl && (verticalU * 1.30) <= 4.98) && leakcheckers);
      let homeY = String.fromCharCode(106, 95, 54, 55, 0);
      let incidentq = String.fromCharCode(101, 95, 48, 95, 114, 101, 99, 112, 0);
      expiredl = incidentq == homeY;
      let apps6 = String.fromCharCode(116, 95, 53, 54, 95, 100, 114, 97, 103, 0);
      expiredl = apps6.length <= 20 && !expiredl;
      let pausew = false;
      if ((verticalU / (Math.max(1.70, 7))) <= 2.77) {
         verticalU /= Math.max(parseFloat(`${parseInt(`${areae}`) % (Math.max(parseInt(`${verticalU}`), 5))}`), 2);
      }
      if (!pausew) {
         let scrollviewb = 3;
         pausew = !expiredl && 2.34 < verticalU;
         scrollviewb <<= Math.min(5, Math.abs(scrollviewb * scrollviewb));
      }
      verticalp = `${resend8.length % 1}`;
      let wind3 = String.fromCharCode(97, 103, 97, 116, 101, 95, 106, 95, 55, 56, 0);
      let statistics5: Map<any, any> = new Map([[String.fromCharCode(106, 95, 55, 53, 95, 105, 100, 99, 116, 108, 108, 109, 0), 406], [String.fromCharCode(99, 111, 110, 116, 114, 111, 108, 108, 101, 114, 115, 95, 50, 95, 50, 48, 0), 336], [String.fromCharCode(99, 102, 104, 100, 95, 103, 95, 50, 51, 0), 536]]);
      let minivodu = 8281748 >= wind3.length;
      do {
         wind3 = "2";
         if (minivodu) {
            break;
         }
      } while ((3 == (wind3.length ^ statistics5.size)) && minivodu);
      if ((4 * statistics5.size) <= 4 || (wind3.length * statistics5.size) <= 4) {
         let stationsu = false;
         let libimagepipelineR: Map<any, any> = new Map([[String.fromCharCode(107, 95, 49, 57, 95, 109, 101, 109, 115, 121, 115, 0), 483], [String.fromCharCode(118, 105, 101, 119, 95, 99, 95, 50, 53, 0), 168], [String.fromCharCode(118, 105, 98, 114, 97, 116, 105, 111, 110, 95, 100, 95, 50, 56, 0), 566]]);
         let chinasame4: Map<any, any> = new Map([[String.fromCharCode(113, 95, 54, 49, 95, 105, 110, 105, 116, 105, 97, 108, 0), 504], [String.fromCharCode(113, 95, 53, 54, 95, 115, 97, 108, 116, 115, 0), 624]]);
         let statsC = String.fromCharCode(97, 98, 103, 114, 95, 56, 95, 56, 48, 0);
         let crownJ = String.fromCharCode(112, 104, 105, 95, 104, 95, 55, 53, 0);
         statistics5 = new Map([[`${chinasame4.size}`, statsC.length]]);
         stationsu = libimagepipelineR.size < 48;
         libimagepipelineR.set(crownJ, 2);
         chinasame4 = new Map([[`${libimagepipelineR.size}`, 2 * libimagepipelineR.size]]);
         statsC += `${((stationsu ? 3 : 3) >> (Math.min(Math.abs(3), 3)))}`;
         crownJ = "3";
      }
      if ((statistics5.size | 1) == 3) {
         wind3 = `${statistics5.size % 3}`;
      }
      let constants2 = wind3 == String.fromCharCode(105, 95, 99, 0);
      do {
         wind3 = `${statistics5.size << (Math.min(Math.abs(3), 4))}`;
         if (constants2) {
            break;
         }
      } while (((statistics5.size >> (Math.min(wind3.length, 4))) >= 1 && (1 >> (Math.min(3, Math.abs(statistics5.size)))) >= 2) && constants2);
      wind3 += `${wind3.length}`;
      let chatV = 5402337 >= statistics5.size;
      do {
         let page4 = 1.0;
         let downY = String.fromCharCode(116, 95, 53, 52, 95, 114, 101, 102, 105, 110, 105, 110, 103, 0);
         statistics5.set(`${page4}`, 3 << (Math.min(5, Math.abs(parseInt(`${page4}`)))));
         downY = `${downY.length}`;
         if (chatV) {
            break;
         }
      } while (chatV && (2 <= wind3.length));
      d_centeri = new Map([[`${d_centeri.size}`, 2]]);
      let libimagepipelineo = p_centert == String.fromCharCode(111, 104, 116, 105, 115, 52, 54, 122, 99, 0);
      do {
         let modelsv: Array<any> = [151, 357];
         modelsv = [modelsv.length];
         for (let y = 0; y < 3; y++) {
            modelsv.push(modelsv.length);
         }
         for (let j = 0; j < 3; j++) {
            modelsv = [modelsv.length];
         }
         p_centert += `${twitterv.length ^ d_centeri.size}`;
         if (libimagepipelineo) {
            break;
         }
      } while (libimagepipelineo && (4 < (p_centert.length << (Math.min(Math.abs(4), 5)))));
      const_cg /= Math.max(resend8.length & with_rk.length, 4);
      verticalp = "2";
      let tickedx: Array<any> = [String.fromCharCode(114, 95, 54, 50, 95, 117, 112, 115, 97, 109, 112, 108, 101, 0), String.fromCharCode(112, 111, 115, 116, 112, 111, 110, 101, 95, 120, 95, 53, 50, 0), String.fromCharCode(100, 101, 99, 111, 100, 101, 100, 95, 55, 95, 53, 56, 0)];
      let pathk = 2.0;
      let projectT = false;
      let commentc = String.fromCharCode(105, 95, 53, 53, 95, 109, 105, 110, 113, 0);
      tickedx = [1];
      projectT = !projectT;
      commentc = `${((projectT ? 1 : 2) / (Math.max(1, 9)))}`;
      while (2 >= (parseInt(`${pathk}`) - tickedx.length)) {
         tickedx = [parseInt(`${pathk}`) * 1];
         break;
      }
      let colorst = 3;
      pathk *= parseFloat(`${tickedx.length}`);
      colorst *= colorst << (Math.min(Math.abs(1), 4));
      if (!tickedx.includes(pathk)) {
         tickedx.push(parseInt(`${pathk}`));
      }
      pathk += parseFloat(`${parseInt(`${pathk}`) | tickedx.length}`);
      let heart3 = String.fromCharCode(97, 95, 57, 53, 95, 115, 107, 101, 119, 101, 100, 0);
      let clubZ = String.fromCharCode(105, 110, 102, 108, 97, 116, 101, 95, 97, 95, 50, 56, 0);
      let huaweiq = false;
      pathk += parseFloat(`${3}`);
      heart3 += `${((huaweiq ? 3 : 2) - 1)}`;
      clubZ += `${3 - heart3.length}`;
      d_centeri = new Map([[`${d_centeri.size}`, d_centeri.size | resend8.length]]);
      let libswresample0 = String.fromCharCode(95, 50, 122, 54, 112, 0) == twitterv;
      do {
         let gemfileo: Map<any, any> = new Map([[String.fromCharCode(97, 117, 103, 109, 101, 110, 116, 97, 116, 105, 111, 110, 95, 107, 95, 50, 0), 855], [String.fromCharCode(111, 117, 114, 95, 55, 95, 57, 0), 999]]);
         let settingR = String.fromCharCode(106, 95, 53, 53, 95, 97, 99, 116, 105, 118, 97, 116, 101, 0);
         gemfileo.set(`${settingR}`, 1 ^ gemfileo.size);
         let window_zj4 = String.fromCharCode(115, 51, 120, 103, 111, 109, 0) == settingR;
         do {
            settingR += `${gemfileo.size}`;
            if (window_zj4) {
               break;
            }
         } while (window_zj4 && ((settingR.length << (Math.min(1, Math.abs(gemfileo.size)))) <= 2 && (gemfileo.size << (Math.min(Math.abs(2), 3))) <= 1));
         while (1 <= settingR.length) {
            gemfileo.set(`${settingR}`, gemfileo.size);
            break;
         }
         let storeA = gemfileo.size <= 9022851;
         do {
            let dplusm: Map<any, any> = new Map([[String.fromCharCode(99, 111, 100, 101, 99, 99, 116, 108, 95, 99, 95, 54, 52, 0), false], [String.fromCharCode(116, 95, 52, 49, 95, 110, 111, 110, 99, 111, 110, 116, 97, 99, 116, 0), true], [String.fromCharCode(109, 120, 112, 101, 103, 95, 97, 95, 55, 51, 0), true]]);
            let assistb = 4.0;
            gemfileo = new Map([[`${gemfileo.size}`, dplusm.size % 1]]);
            dplusm = new Map([[`${assistb}`, parseInt(`${assistb}`) / 1]]);
            if (storeA) {
               break;
            }
         } while (storeA && ((gemfileo.size << (Math.min(settingR.length, 2))) < 3 || 3 < (3 << (Math.min(2, Math.abs(gemfileo.size))))));
         settingR += `${settingR.length}`;
         let a_centerY = gemfileo.size >= 6553785;
         do {
            let agreementw = String.fromCharCode(97, 116, 116, 114, 97, 99, 116, 105, 110, 103, 95, 56, 95, 55, 56, 0);
            gemfileo = new Map([[agreementw, 3]]);
            if (a_centerY) {
               break;
            }
         } while ((settingR.length == 1) && a_centerY);
         twitterv = `${current3.size}`;
         if (libswresample0) {
            break;
         }
      } while ((4 > (3 | current3.size)) && libswresample0);

      setIsVersionDialogOpen(!isVersionDialogOpen);
   };
   const toggleClearDialog = () => {
      let crossV = 5.0;
      let component_: Map<any, any> = new Map([[String.fromCharCode(101, 118, 101, 114, 95, 114, 95, 54, 48, 0), false], [String.fromCharCode(116, 95, 49, 52, 95, 117, 115, 97, 103, 101, 0), true], [String.fromCharCode(110, 105, 103, 104, 116, 115, 104, 111, 116, 95, 111, 95, 50, 54, 0), true]]);
      let awayN = String.fromCharCode(116, 105, 110, 116, 101, 100, 95, 106, 95, 53, 57, 0);
      let invitep = true;
      let thailandk = String.fromCharCode(106, 95, 53, 48, 95, 97, 115, 112, 101, 99, 116, 115, 0);
      let zoom7 = 0.0;
      let pagination6: Array<any> = [String.fromCharCode(98, 97, 114, 114, 105, 101, 114, 95, 109, 95, 49, 49, 0), String.fromCharCode(106, 115, 111, 110, 114, 112, 99, 95, 105, 95, 57, 56, 0)];
      let aboutV = String.fromCharCode(99, 95, 55, 52, 0);
      let crossB = String.fromCharCode(118, 95, 51, 48, 95, 102, 105, 110, 103, 101, 114, 112, 114, 105, 110, 116, 115, 0);
      let gpayF = 3.0;
      aboutV = "2";
      component_ = new Map([[`${component_.size}`, thailandk.length / 1]]);
      while (aboutV.length <= component_.size) {
         component_ = new Map([[`${pagination6.length}`, pagination6.length]]);
         break;
      }
      let combineb = String.fromCharCode(118, 112, 105, 110, 116, 114, 97, 112, 114, 101, 100, 95, 117, 95, 50, 48, 0);
      let mbsplash1: Array<any> = [659, 129];
      let sendi = true;
      for (let s = 0; s < 3; s++) {
         sendi = combineb == String.fromCharCode(56, 0);
      }
      sendi = sendi && mbsplash1.length >= 51;
      mbsplash1 = [combineb.length * 3];
      mbsplash1 = [1];
      let moded = 4.0;
      let fastR: Array<any> = [976, 674];
      let helper_ = 8785734.0 <= moded;
      do {
         moded *= ((sendi ? 4 : 2));
         if (helper_) {
            break;
         }
      } while (helper_ && (3.4 >= (moded - 4.20) && (fastR.length % 1) >= 3));
      let nterstitiala = 2.0;
      let interstitialB = 3.0;
      if (1.79 <= (moded * 3.54) || (nterstitiala * moded) <= 3.54) {
         nterstitiala /= Math.max(4, parseInt(`${moded}`) / 3);
      }
      pagination6.push(((sendi ? 3 : 3)));
      let context4 = 7733547.0 <= crossV;
      do {
         let attributedstringK = String.fromCharCode(108, 95, 55, 50, 95, 116, 104, 101, 111, 114, 97, 0);
         let classesn = 5.0;
         let trophyy = String.fromCharCode(99, 95, 55, 57, 95, 98, 121, 116, 101, 119, 111, 114, 100, 0);
         let grayt = 0.0;
         let expired6 = true;
         let eactQ = 9692035.0 >= grayt;
         do {
            grayt *= (parseInt(`${grayt}`) << (Math.min(1, Math.abs((expired6 ? 2 : 2)))));
            if (eactQ) {
               break;
            }
         } while (eactQ && ((grayt * 3.64) >= 1.17 && (3.64 + grayt) >= 3.3));
         let liveR = String.fromCharCode(116, 95, 52, 55, 95, 99, 111, 101, 102, 102, 105, 99, 105, 101, 110, 116, 115, 0);
         attributedstringK = `${((expired6 ? 2 : 4))}`;
         liveR = `${liveR.length | 2}`;
         let sportsN: Map<any, any> = new Map([[String.fromCharCode(109, 105, 103, 104, 116, 95, 121, 95, 54, 54, 0), 852], [String.fromCharCode(99, 111, 111, 114, 100, 95, 98, 95, 53, 54, 0), 145], [String.fromCharCode(101, 110, 118, 95, 48, 95, 50, 53, 0), 160]]);
         let ajaxC: Map<any, any> = new Map([[String.fromCharCode(114, 115, 116, 114, 105, 112, 95, 112, 95, 57, 56, 0), 229], [String.fromCharCode(110, 95, 54, 95, 116, 101, 120, 116, 117, 114, 101, 100, 115, 112, 101, 110, 99, 0), 773]]);
         grayt *= (2 + (expired6 ? 3 : 1));
         for (let d = 0; d < 3; d++) {
            let mailg = 0.0;
            let binddatasI = String.fromCharCode(115, 95, 51, 53, 95, 119, 111, 114, 107, 0);
            let libreactnativejniY: Array<any> = [406, 651];
            let renderv = String.fromCharCode(103, 95, 55, 56, 95, 116, 105, 108, 116, 0);
            sportsN.set(binddatasI, 3 / (Math.max(7, attributedstringK.length)));
            mailg /= Math.max(4, renderv.length | libreactnativejniY.length);
            binddatasI += `${renderv.length % (Math.max(2, 7))}`;
            libreactnativejniY.push(parseInt(`${mailg}`) % (Math.max(libreactnativejniY.length, 1)));
         }
         for (let a = 0; a < 2; a++) {
            trophyy += `${(String.fromCharCode(67, 0) == attributedstringK ? attributedstringK.length : parseInt(`${classesn}`))}`;
         }
         if (4 >= (attributedstringK.length | sportsN.size)) {
            sportsN.set(`${grayt}`, trophyy.length / (Math.max(1, 5)));
         }
         classesn *= parseFloat(`${3}`);
         for (let a = 0; a < 3; a++) {
            expired6 = attributedstringK.length >= 21;
         }
         let libyogaq: Map<any, any> = new Map([[String.fromCharCode(104, 101, 118, 99, 95, 119, 95, 57, 53, 0), String.fromCharCode(116, 111, 115, 115, 95, 102, 95, 55, 53, 0)], [String.fromCharCode(121, 114, 121, 105, 95, 99, 95, 53, 55, 0), String.fromCharCode(103, 95, 51, 54, 95, 99, 111, 110, 115, 116, 115, 0)]]);
         let user2: Map<any, any> = new Map([[String.fromCharCode(105, 110, 116, 101, 110, 115, 105, 116, 121, 95, 105, 95, 50, 56, 0), true], [String.fromCharCode(114, 95, 54, 54, 95, 108, 103, 111, 114, 97, 110, 100, 0), true]]);
         ajaxC.set(`${attributedstringK}`, user2.size);
         let saveG = String.fromCharCode(115, 121, 110, 99, 104, 114, 111, 110, 105, 122, 101, 100, 95, 104, 95, 50, 53, 0);
         let libreanimatedk = String.fromCharCode(112, 111, 108, 121, 95, 53, 95, 54, 54, 0);
         if (Array.from(ajaxC.keys()).includes(`${grayt}`)) {
            grayt *= ajaxC.size;
         }
         classesn *= parseFloat(`${parseInt(`${classesn}`)}`);
         if ((classesn - 3.42) <= 4.88) {
            classesn -= parseFloat(`${3 % (Math.max(7, parseInt(`${grayt}`)))}`);
         }
         crossV *= parseFloat(`${attributedstringK.length << (Math.min(1, Math.abs(parseInt(`${classesn}`))))}`);
         if (context4) {
            break;
         }
      } while (context4 && (zoom7 <= crossV));
      awayN += `${2 ^ pagination6.length}`;
      zoom7 += 2;
      while ((zoom7 / (Math.max(5.16, 7))) > 2.56) {
         zoom7 += thailandk.length;
         break;
      }
      awayN += "3";
      for (let k = 0; k < 1; k++) {
         let fadfdeebbbfdabbbabdadfaaddaau = 5.0;
         let refresh_ = 3;
         let gmail5: Array<any> = [String.fromCharCode(101, 113, 117, 97, 108, 115, 95, 118, 95, 54, 50, 0), String.fromCharCode(108, 111, 103, 103, 101, 100, 95, 118, 95, 50, 55, 0), String.fromCharCode(112, 95, 54, 56, 95, 100, 105, 102, 102, 105, 110, 103, 0)];
         let pauseO: Array<any> = [String.fromCharCode(117, 95, 49, 49, 95, 115, 108, 97, 118, 101, 115, 0), String.fromCharCode(105, 110, 99, 111, 109, 112, 97, 116, 105, 98, 108, 101, 95, 105, 95, 53, 49, 0), String.fromCharCode(98, 108, 111, 99, 107, 100, 99, 95, 110, 95, 54, 56, 0)];
         let imagemanagers = String.fromCharCode(115, 95, 51, 49, 95, 102, 101, 97, 116, 117, 114, 101, 0);
         let playercommont: Map<any, any> = new Map([[String.fromCharCode(117, 95, 50, 50, 95, 100, 101, 110, 111, 109, 0), 61], [String.fromCharCode(114, 95, 51, 48, 95, 109, 101, 116, 97, 98, 111, 100, 121, 0), 629]]);
         let gradlew5: Map<any, any> = new Map([[String.fromCharCode(104, 97, 110, 100, 108, 101, 115, 95, 53, 95, 54, 48, 0), 871], [String.fromCharCode(105, 95, 50, 52, 95, 100, 99, 98, 122, 0), 478], [String.fromCharCode(97, 95, 52, 57, 95, 114, 101, 112, 108, 97, 121, 0), 663]]);
         gmail5.push(refresh_ >> (Math.min(Math.abs(2), 2)));
         for (let u = 0; u < 3; u++) {
            fadfdeebbbfdabbbabdadfaaddaau /= Math.max(3, parseFloat(`${parseInt(`${fadfdeebbbfdabbbabdadfaaddaau}`)}`));
         }
         gradlew5.set(`${refresh_}`, gmail5.length);
         let appso = String.fromCharCode(110, 95, 56, 95, 98, 105, 116, 114, 101, 118, 0);
         let controls4: Array<any> = [171, 918, 933];
         let binddatasD = 0;
         pauseO.push((imagemanagers == String.fromCharCode(52, 0) ? binddatasD : imagemanagers.length));
         appso += `${(String.fromCharCode(67, 0) == appso ? appso.length : controls4.length)}`;
         controls4 = [2];
         binddatasD /= Math.max(2, controls4.length);
         let eventE = pauseO.length >= 8701370;
         do {
            let recommendationz: Map<any, any> = new Map([[String.fromCharCode(98, 95, 55, 57, 95, 118, 101, 114, 105, 102, 105, 101, 100, 0), 436], [String.fromCharCode(110, 95, 53, 54, 95, 112, 111, 105, 110, 116, 111, 99, 116, 0), 314]]);
            let heartX = 3;
            pauseO = [recommendationz.size % (Math.max(gmail5.length, 3))];
            recommendationz.set(`${heartX}`, heartX);
            if (eventE) {
               break;
            }
         } while (eventE && ((pauseO.length % (Math.max(4, 4))) >= 3 && (pauseO.length % 4) >= 4));
         for (let y = 0; y < 1; y++) {
            imagemanagers += `${1 / (Math.max(refresh_, 9))}`;
         }
         let colors2 = 5147324 <= gmail5.length;
         do {
            let libimagepipelineK = false;
            let condensedH = 2;
            let mbnativeadvancedM = true;
            let colorsl: Array<any> = [898, 176, 851];
            let eighteenX: Map<any, any> = new Map([[String.fromCharCode(102, 108, 97, 103, 95, 49, 95, 55, 55, 0), true], [String.fromCharCode(97, 108, 112, 105, 110, 101, 95, 49, 95, 55, 55, 0), false], [String.fromCharCode(117, 115, 108, 101, 101, 112, 95, 104, 95, 55, 54, 0), true]]);
            gmail5 = [gmail5.length];
            libimagepipelineK = mbnativeadvancedM || condensedH >= 87;
            condensedH ^= 2;
            colorsl.push(((mbnativeadvancedM ? 1 : 1) << (Math.min(Math.abs((libimagepipelineK ? 3 : 2)), 2))));
            eighteenX.set(`${colorsl.length}`, 3 | colorsl.length);
            if (colors2) {
               break;
            }
         } while (colors2 && (4 <= (4 / (Math.max(8, gradlew5.size))) || (gradlew5.size / (Math.max(4, gmail5.length))) <= 4));
         let countdownV = String.fromCharCode(110, 95, 50, 55, 95, 98, 97, 115, 101, 108, 105, 110, 101, 0);
         let controlT = 5.0;
         let constantsM = 5.0;
         refresh_ /= Math.max(3 << (Math.min(Math.abs(parseInt(`${controlT}`)), 1)), 2);
         countdownV = `${countdownV.length}`;
         controlT *= parseFloat(`${parseInt(`${constantsM}`)}`);
         constantsM /= Math.max(2, parseFloat(`${2 - countdownV.length}`));
         for (let l = 0; l < 3; l++) {
            gradlew5 = new Map([[`${gmail5.length}`, gmail5.length]]);
         }
         imagemanagers += `${1 % (Math.max(parseInt(`${fadfdeebbbfdabbbabdadfaaddaau}`), 4))}`;
         let libreanimatedY: Array<any> = [499, 607];
         let cluby: Array<any> = [208, 521];
         fadfdeebbbfdabbbabdadfaaddaau *= parseFloat(`${refresh_}`);
         if (5.58 > (fadfdeebbbfdabbbabdadfaaddaau + 2.93) || (2.93 + fadfdeebbbfdabbbabdadfaaddaau) > 2.46) {
            let holderg = String.fromCharCode(107, 95, 53, 48, 95, 117, 112, 100, 97, 116, 101, 114, 0);
            let sportL = 0.0;
            let feedbackK = 0.0;
            gradlew5 = new Map([[`${refresh_}`, 2]]);
            holderg = `${parseInt(`${sportL}`)}`;
            feedbackK *= (parseFloat(`${String.fromCharCode(67, 0) == holderg ? parseInt(`${sportL}`) : holderg.length}`));
         }
         let libreactnativeblobC = String.fromCharCode(105, 95, 49, 50, 95, 115, 119, 105, 116, 99, 104, 105, 110, 103, 0);
         let streamingn = String.fromCharCode(106, 111, 121, 102, 117, 108, 95, 52, 95, 56, 53, 0);
         imagemanagers = `${streamingn.length}`;
         libreactnativeblobC = `${libreactnativeblobC.length + libreactnativeblobC.length}`;
         streamingn = `${libreactnativeblobC.length ^ libreactnativeblobC.length}`;
         zoom7 += 3 * component_.size;
      }
      invitep = 81.26 >= crossV;
      while (awayN.startsWith(`${invitep}`)) {
         let incidentr = 0.0;
         let leagueY = String.fromCharCode(109, 112, 101, 103, 95, 117, 95, 52, 48, 0);
         let notificationl = false;
         let libimagepipeline4 = 1.0;
         let incidentw = String.fromCharCode(105, 110, 99, 114, 101, 109, 101, 110, 116, 97, 108, 95, 103, 95, 56, 51, 0);
         let bufferu = String.fromCharCode(97, 114, 99, 95, 57, 95, 56, 56, 0);
         let scrollviewK = false;
         let hiadw = String.fromCharCode(115, 116, 114, 101, 115, 115, 95, 52, 95, 52, 50, 0);
         leagueY += `${leagueY.length + 1}`;
         bufferu += `${((scrollviewK ? 3 : 2) | hiadw.length)}`;
         scrollviewK = hiadw.length == bufferu.length;
         notificationl = !notificationl && 8.73 <= libimagepipeline4;
         if (4 == incidentw.length) {
            incidentw = `${1 | parseInt(`${libimagepipeline4}`)}`;
         }
         notificationl = leagueY.length == incidentw.length;
         incidentr -= parseFloat(`${1 >> (Math.min(Math.abs(parseInt(`${libimagepipeline4}`)), 5))}`);
         while (2.12 <= (5.67 + incidentr)) {
            notificationl = 37.2 < (libimagepipeline4 * incidentr);
            break;
         }
         let scores = 1.0;
         while ((libimagepipeline4 / (Math.max(7, scores))) == 3.69) {
            libimagepipeline4 *= parseFloat(`${leagueY.length - parseInt(`${libimagepipeline4}`)}`);
            break;
         }
         let libmapbufferjni1 = String.fromCharCode(115, 105, 103, 110, 95, 115, 95, 57, 50, 0);
         while (!incidentw.startsWith(libmapbufferjni1)) {
            libmapbufferjni1 = "2";
            break;
         }
         if ((scores / 3) <= 2.33) {
            libimagepipeline4 *= parseFloat(`${parseInt(`${incidentr}`) | 1}`);
         }
         leagueY = `${leagueY.length % 3}`;
         for (let b = 0; b < 1; b++) {
            scores /= Math.max(parseFloat(`${1 | parseInt(`${scores}`)}`), 1);
         }
         incidentw = `${(parseInt(`${incidentr}`) & (notificationl ? 4 : 5))}`;
         scores += parseFloat(`${1}`);
         invitep = pagination6.includes(zoom7);
         break;
      }
      let videojs7 = true;
      let overX = 0.0;
      let iconR = String.fromCharCode(115, 116, 114, 105, 100, 101, 115, 95, 50, 95, 52, 57, 0);
      let suggestionZ = String.fromCharCode(115, 101, 103, 109, 97, 112, 95, 50, 95, 55, 53, 0);
      videojs7 = !videojs7;
      overX -= parseFloat(`${2}`);
      iconR = `${iconR.length >> (Math.min(Math.abs(3), 4))}`;
      suggestionZ = `${iconR.length * suggestionZ.length}`;
      videojs7 = (videojs7 ? videojs7 : videojs7);
      videojs7 = !videojs7;
      crossV -= parseFloat(`${3 & awayN.length}`);
      for (let g = 0; g < 1; g++) {
         let loadingq = 0;
         let optionsj = String.fromCharCode(120, 95, 55, 54, 95, 110, 111, 110, 110, 117, 108, 108, 0);
         let stringsX: Array<any> = [173, 410];
         let register_oxH = String.fromCharCode(113, 95, 55, 54, 95, 100, 101, 115, 116, 114, 111, 121, 105, 110, 103, 0);
         let policyy = 0;
         stringsX.push(loadingq);
         stringsX.push(2 % (Math.max(loadingq, 2)));
         for (let q = 0; q < 2; q++) {
            let xadsdkP = String.fromCharCode(116, 95, 49, 55, 95, 112, 97, 105, 110, 116, 115, 0);
            let whistleo = String.fromCharCode(113, 95, 50, 54, 95, 116, 114, 117, 101, 115, 112, 101, 101, 99, 104, 0);
            let trashY = String.fromCharCode(118, 95, 53, 48, 95, 112, 114, 101, 102, 105, 120, 101, 115, 0);
            stringsX.push(optionsj.length);
            xadsdkP = `${2 << (Math.min(2, trashY.length))}`;
            whistleo += `${whistleo.length}`;
            trashY = `${whistleo.length ^ 2}`;
         }
         let contextz = String.fromCharCode(109, 101, 114, 103, 101, 114, 95, 99, 95, 54, 0);
         loadingq |= (register_oxH == String.fromCharCode(83, 0) ? register_oxH.length : loadingq);
         contextz += `${contextz.length}`;
         let download6 = String.fromCharCode(101, 95, 50, 56, 95, 109, 105, 110, 109, 97, 120, 0);
         stringsX.push((String.fromCharCode(65, 0) == register_oxH ? register_oxH.length : stringsX.length));
         download6 += `${download6.length}`;
         while (4 > (loadingq - optionsj.length) || (4 - optionsj.length) > 1) {
            optionsj += `${optionsj.length >> (Math.min(Math.abs(2), 3))}`;
            break;
         }
         for (let v = 0; v < 1; v++) {
            stringsX.push(2 % (Math.max(10, policyy)));
         }
         let robotoH = 4.0;
         optionsj = `${(optionsj == String.fromCharCode(77, 0) ? optionsj.length : stringsX.length)}`;
         robotoH += parseFloat(`${3}`);
         let ball_ = String.fromCharCode(97, 112, 112, 108, 105, 101, 100, 95, 51, 95, 49, 52, 0);
         let related4 = String.fromCharCode(119, 95, 52, 53, 95, 97, 112, 112, 114, 116, 99, 0);
         register_oxH += `${ball_.length >> (Math.min(4, optionsj.length))}`;
         ball_ += `${related4.length + related4.length}`;
         let penaltyp = 5.0;
         penaltyp *= parseFloat(`${optionsj.length >> (Math.min(Math.abs(2), 4))}`);
         optionsj = `${loadingq + parseInt(`${penaltyp}`)}`;
         let upgradeL: Array<any> = [382, 715, 116];
         let themeR = 0.0;
         register_oxH += `${parseInt(`${penaltyp}`)}`;
         upgradeL = [parseInt(`${themeR}`) & 3];
         themeR -= parseInt(`${themeR}`);
         if ((policyy | loadingq) >= 3 || (loadingq | 3) >= 1) {
            let pingR = true;
            loadingq -= parseInt(`${penaltyp}`) + register_oxH.length;
            pingR = !pingR;
         }
         if ((2 - loadingq) <= 4) {
            loadingq -= policyy / (Math.max(9, loadingq));
         }
         invitep = stringsX.includes(invitep);
      }
      for (let l = 0; l < 3; l++) {
         let dragL: Array<any> = [708, 318];
         let plusI: Map<any, any> = new Map([[String.fromCharCode(116, 117, 114, 98, 111, 106, 112, 101, 103, 95, 97, 95, 53, 0), 567], [String.fromCharCode(114, 95, 49, 54, 95, 115, 116, 114, 97, 116, 101, 103, 121, 0), 859]]);
         let editP = 1.0;
         let wind7 = String.fromCharCode(104, 95, 56, 52, 95, 104, 105, 110, 116, 101, 100, 0);
         let match4 = String.fromCharCode(114, 101, 111, 114, 100, 101, 114, 105, 110, 103, 95, 99, 95, 50, 53, 0);
         while (match4.length < 1) {
            wind7 = "2";
            break;
         }
         wind7 = `${parseInt(`${editP}`)}`;
         let videocommonW = String.fromCharCode(115, 117, 98, 118, 97, 108, 117, 101, 95, 48, 95, 55, 56, 0);
         if (!wind7.endsWith(`${editP}`)) {
            wind7 += `${videocommonW.length}`;
         }
         dragL.push(3);
         while (!Array.from(plusI.keys()).includes(`${dragL.length}`)) {
            dragL.push(3);
            break;
         }
         dragL = [match4.length % 2];
         let actionK = 4;
         for (let n = 0; n < 2; n++) {
            let expand6: Array<any> = [630, 21, 820];
            let videocommonb = false;
            let emoji9 = String.fromCharCode(109, 101, 116, 97, 100, 97, 116, 97, 95, 49, 95, 55, 52, 0);
            let temperaturep = true;
            dragL = [videocommonW.length];
            expand6.push(2 | expand6.length);
            videocommonb = 12 == expand6.length;
            emoji9 = "1";
            temperaturep = expand6.length <= 99;
         }
         editP += parseFloat(`${1 + videocommonW.length}`);
         let activity7 = dragL.length <= 9446692;
         do {
            dragL = [match4.length];
            if (activity7) {
               break;
            }
         } while (((dragL.length * 2) > 5 && (videocommonW.length * 2) > 4) && activity7);
         match4 = `${(String.fromCharCode(110, 0) == wind7 ? wind7.length : dragL.length)}`;
         let miniD = 1.0;
         let formh = 1.0;
         for (let w = 0; w < 2; w++) {
            editP /= Math.max(3, parseFloat(`${match4.length}`));
         }
         let indicatorf: Array<any> = [961, 38, 170];
         let libturbomodulejsijnia = true;
         miniD *= videocommonW.length * indicatorf.length;
         indicatorf.push(((libturbomodulejsijnia ? 5 : 3) << (Math.min(Math.abs((libturbomodulejsijnia ? 2 : 2)), 2))));
         aboutV = `${parseInt(`${zoom7}`)}`;
      }
      thailandk = `${component_.size % 3}`;
      aboutV += `${parseInt(`${crossV}`) ^ parseInt(`${zoom7}`)}`;
      if ((component_.size % 2) >= 1 || component_.size >= 2) {
         let mappingv = String.fromCharCode(117, 95, 57, 51, 95, 100, 105, 116, 97, 98, 108, 101, 0);
         let vignettem = String.fromCharCode(115, 95, 53, 54, 95, 97, 108, 103, 115, 0);
         let show0 = String.fromCharCode(108, 105, 98, 99, 95, 102, 95, 56, 0);
         mappingv += `${(String.fromCharCode(101, 0) == mappingv ? vignettem.length : mappingv.length)}`;
         vignettem += `${2 + show0.length}`;
         show0 = `${show0.length & 3}`;
         let emojiO = String.fromCharCode(57, 117, 115, 50, 121, 0) == mappingv;
         do {
            mappingv += "3";
            if (emojiO) {
               break;
            }
         } while (emojiO && (mappingv == String.fromCharCode(52, 0) && mappingv.length < 1));
         let s_centerg = 1.0;
         component_ = new Map([[crossB, crossB.length]]);
      }
      while (1 >= crossB.length || !invitep) {
         let recommendationS = String.fromCharCode(100, 97, 97, 108, 97, 95, 106, 95, 51, 55, 0);
         let guideD = String.fromCharCode(112, 116, 114, 95, 114, 95, 50, 56, 0);
         let reactnativejsp = String.fromCharCode(121, 98, 114, 105, 95, 99, 95, 53, 54, 0);
         let bdxadsdkz = false;
         if (!bdxadsdkz && reactnativejsp.length <= 4) {
            reactnativejsp += `${(guideD == String.fromCharCode(52, 0) ? guideD.length : reactnativejsp.length)}`;
         }
         if (reactnativejsp == String.fromCharCode(54, 0)) {
            let lightz = 0.0;
            let reacth: Map<any, any> = new Map([[String.fromCharCode(104, 121, 112, 111, 116, 104, 101, 115, 101, 115, 95, 114, 95, 49, 57, 0), String.fromCharCode(100, 95, 57, 49, 95, 105, 110, 102, 108, 105, 103, 104, 116, 0)], [String.fromCharCode(121, 95, 53, 50, 95, 115, 116, 114, 110, 100, 117, 112, 0), String.fromCharCode(118, 95, 52, 53, 95, 118, 105, 115, 117, 97, 108, 105, 122, 97, 116, 105, 111, 110, 0)]]);
            let rewardJ = 2.0;
            let recommendationG = String.fromCharCode(97, 112, 112, 114, 111, 118, 97, 108, 95, 99, 95, 51, 50, 0);
            let submitC = String.fromCharCode(103, 101, 116, 109, 95, 57, 95, 57, 0);
            recommendationS += `${(submitC.length / (Math.max(9, (bdxadsdkz ? 5 : 1))))}`;
            lightz *= parseInt(`${lightz}`) - 2;
            reacth = new Map([[`${reacth.size}`, parseInt(`${rewardJ}`)]]);
            rewardJ -= parseInt(`${rewardJ}`);
            recommendationG = `${reacth.size}`;
            submitC += `${recommendationG.length}`;
         }
         let teamB = 2;
         guideD = `${(recommendationS.length + (bdxadsdkz ? 1 : 2))}`;
         teamB /= Math.max(teamB, 4);
         reactnativejsp = `${((bdxadsdkz ? 3 : 2) / (Math.max(1, recommendationS.length)))}`;
         let brightnessR = String.fromCharCode(115, 95, 50, 50, 95, 100, 101, 108, 105, 109, 0);
         reactnativejsp += `${(brightnessR == String.fromCharCode(109, 0) ? brightnessR.length : reactnativejsp.length)}`;
         let overlay1 = bdxadsdkz ? !bdxadsdkz : bdxadsdkz;
         do {
            bdxadsdkz = recommendationS == reactnativejsp;
            if (overlay1) {
               break;
            }
         } while ((4 > reactnativejsp.length) && overlay1);
         recommendationS += "1";
         for (let x = 0; x < 2; x++) {
            let paginationO = String.fromCharCode(98, 95, 51, 55, 0);
            let completeD: Array<any> = [String.fromCharCode(107, 95, 52, 53, 95, 102, 105, 108, 108, 101, 100, 0), String.fromCharCode(112, 105, 120, 102, 109, 116, 95, 113, 95, 49, 48, 48, 0), String.fromCharCode(100, 114, 97, 103, 95, 107, 95, 49, 51, 0)];
            guideD += "1";
            paginationO += `${(String.fromCharCode(66, 0) == paginationO ? completeD.length : paginationO.length)}`;
            completeD.push(paginationO.length + 2);
         }
         if (!bdxadsdkz) {
            reactnativejsp = `${((bdxadsdkz ? 3 : 3))}`;
         }
         let corner4 = String.fromCharCode(49, 119, 121, 55, 121, 0) == recommendationS;
         do {
            let castingo = 5;
            let robotoq: Array<any> = [577, 954, 191];
            let libpangleflipped9 = 1.0;
            recommendationS += `${recommendationS.length | 3}`;
            castingo %= Math.max(3, 2);
            robotoq = [parseInt(`${libpangleflipped9}`)];
            libpangleflipped9 /= Math.max(parseFloat(`${3 ^ castingo}`), 5);
            if (corner4) {
               break;
            }
         } while (corner4 && (2 >= recommendationS.length));
         guideD = `${((bdxadsdkz ? 3 : 2))}`;
         for (let r = 0; r < 1; r++) {
            guideD += "2";
         }
         crossB = `${reactnativejsp.length}`;
         break;
      }
      pagination6 = [(1 >> (Math.min(2, Math.abs((invitep ? 3 : 2)))))];

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
      let containere = 4.0;
      let submitd = String.fromCharCode(120, 95, 50, 52, 0);
      let mbnativeadvancedC: Array<any> = [String.fromCharCode(108, 105, 98, 115, 104, 105, 110, 101, 95, 116, 95, 57, 52, 0), String.fromCharCode(109, 95, 52, 53, 95, 110, 101, 120, 116, 104, 111, 112, 0), String.fromCharCode(122, 95, 52, 52, 95, 116, 97, 107, 101, 111, 118, 101, 114, 0)];
      let injuryT = 2.0;
      let actions4 = String.fromCharCode(115, 121, 109, 101, 118, 101, 110, 95, 121, 95, 57, 55, 0);
      let sellT = true;
      let canvas9 = 5.0;
      let backwardD = String.fromCharCode(98, 95, 53, 49, 95, 118, 101, 114, 105, 102, 105, 101, 100, 0);
      for (let v = 0; v < 1; v++) {
         containere *= parseFloat(`${2}`);
      }
      actions4 = `${parseInt(`${canvas9}`)}`;
      for (let j = 0; j < 1; j++) {
         injuryT /= Math.max(submitd.length + 1, 3);
      }
      while (submitd.endsWith(`${mbnativeadvancedC.length}`)) {
         let moviesM: Map<any, any> = new Map([[String.fromCharCode(102, 105, 108, 108, 105, 110, 103, 95, 55, 95, 53, 48, 0), String.fromCharCode(103, 95, 55, 48, 95, 97, 100, 100, 102, 0)], [String.fromCharCode(114, 97, 100, 105, 117, 115, 95, 119, 95, 50, 56, 0), String.fromCharCode(120, 95, 51, 95, 106, 111, 121, 102, 117, 108, 0)], [String.fromCharCode(115, 108, 97, 115, 104, 105, 110, 103, 95, 104, 95, 51, 53, 0), String.fromCharCode(101, 95, 50, 95, 99, 111, 117, 110, 116, 100, 111, 119, 110, 0)]]);
         let backgroundm: Map<any, any> = new Map([[String.fromCharCode(108, 95, 54, 55, 95, 100, 117, 114, 97, 116, 105, 111, 110, 115, 0), 284], [String.fromCharCode(112, 95, 55, 52, 95, 101, 108, 115, 116, 0), 489]]);
         let layoutI = 3;
         for (let k = 0; k < 2; k++) {
            let mbsplashY = false;
            let episodeM = 2;
            let backgroundh = false;
            let targete: Array<any> = [168, 983, 535];
            let historyu = String.fromCharCode(117, 95, 50, 57, 95, 105, 110, 100, 101, 120, 0);
            layoutI ^= 1;
            mbsplashY = 45 <= episodeM && historyu.length <= 45;
            episodeM /= Math.max(1 | episodeM, 5);
            backgroundh = targete.includes(episodeM);
            targete.push(2);
            historyu = `${episodeM}`;
         }
         let stringz = 7855927 <= moviesM.size;
         do {
            moviesM = new Map([[`${moviesM.size}`, 3]]);
            if (stringz) {
               break;
            }
         } while ((moviesM.size <= backgroundm.size) && stringz);
         moviesM.set(`${moviesM.size}`, 2);
         let libcrashsdk7 = 5730686 >= moviesM.size;
         do {
            moviesM = new Map([[`${moviesM.size}`, layoutI]]);
            if (libcrashsdk7) {
               break;
            }
         } while (libcrashsdk7 && (1 == (backgroundm.size + moviesM.size) && (1 + moviesM.size) == 2));
         let referrer2 = backgroundm.size <= 5583927;
         do {
            backgroundm = new Map([[`${backgroundm.size}`, backgroundm.size | layoutI]]);
            if (referrer2) {
               break;
            }
         } while (referrer2 && (3 < (backgroundm.size >> (Math.min(Math.abs(5), 4))) || (backgroundm.size >> (Math.min(1, Math.abs(layoutI)))) < 5));
         let shrinkc = 1;
         let classesz = String.fromCharCode(112, 95, 49, 54, 95, 114, 101, 117, 115, 97, 98, 108, 101, 0);
         backgroundm = new Map([[`${moviesM.size}`, 1 + classesz.length]]);
         shrinkc &= shrinkc | 3;
         classesz += "2";
         let downloadw = 8488725 <= moviesM.size;
         do {
            moviesM = new Map([[`${backgroundm.size}`, 2 + backgroundm.size]]);
            if (downloadw) {
               break;
            }
         } while ((4 < backgroundm.size) && downloadw);
         let dplusl = backgroundm.size <= 8924173;
         do {
            backgroundm.set(`${layoutI}`, layoutI);
            if (dplusl) {
               break;
            }
         } while ((3 <= (2 / (Math.max(3, moviesM.size)))) && dplusl);
         moviesM = new Map([[`${backgroundm.size}`, layoutI - backgroundm.size]]);
         submitd += `${(parseInt(`${containere}`) ^ (sellT ? 3 : 2))}`;
         break;
      }
      let small3 = 4;
      small3 += 3;
      for (let z = 0; z < 1; z++) {
         let vignettec = String.fromCharCode(111, 117, 116, 111, 117, 116, 95, 102, 95, 50, 48, 0);
         let pausei = 0;
         let tumbnailO = 3.0;
         let left0 = String.fromCharCode(107, 95, 57, 49, 95, 118, 97, 114, 121, 0);
         small3 |= parseInt(`${tumbnailO}`) | 2;
         vignettec = `${left0.length | vignettec.length}`;
         pausei += left0.length >> (Math.min(4, Math.abs(pausei)));
         tumbnailO /= Math.max(left0.length + pausei, 4);
      }
      let gmailK = false;
      actions4 = `${parseInt(`${injuryT}`) | 1}`;
      let typingE = 0.0;
      let grey9 = String.fromCharCode(115, 119, 105, 122, 122, 108, 101, 100, 95, 119, 95, 55, 50, 0);
      let leakcheckerP: Array<any> = [199, 68, 195];
      let build7 = 0;
      grey9 += `${leakcheckerP.length | build7}`;
      leakcheckerP.push(parseInt(`${typingE}`));
      let friendsu = String.fromCharCode(118, 97, 97, 99, 97, 108, 99, 117, 108, 97, 116, 105, 111, 110, 95, 114, 95, 55, 55, 0);
      let modulek = friendsu.length <= 8745170;
      do {
         let tailN = String.fromCharCode(111, 95, 49, 95, 99, 111, 112, 121, 105, 110, 105, 111, 118, 0);
         let switch_fM = String.fromCharCode(99, 111, 108, 108, 101, 99, 116, 105, 111, 110, 95, 113, 95, 57, 49, 0);
         let gestureM: Map<any, any> = new Map([[String.fromCharCode(118, 100, 98, 101, 95, 98, 95, 56, 56, 0), 30], [String.fromCharCode(100, 95, 53, 50, 95, 97, 101, 115, 116, 97, 98, 0), 375], [String.fromCharCode(112, 117, 108, 108, 117, 112, 95, 114, 95, 56, 54, 0), 427]]);
         let mintegralH: Map<any, any> = new Map([[String.fromCharCode(104, 95, 55, 48, 95, 115, 116, 97, 121, 0), 162], [String.fromCharCode(114, 97, 100, 105, 111, 95, 54, 95, 49, 50, 0), 942]]);
         let humidityd: Array<any> = [413, 320, 442];
         friendsu = `${mintegralH.size % (Math.max(gestureM.size, 3))}`;
         tailN += `${humidityd.length + 1}`;
         switch_fM = `${tailN.length / (Math.max(2, 7))}`;
         gestureM.set(tailN, humidityd.length);
         mintegralH.set(tailN, tailN.length);
         if (modulek) {
            break;
         }
      } while ((2 >= (friendsu.length / 3) && (friendsu.length & 3) >= 2) && modulek);
      leakcheckerP.push(parseInt(`${typingE}`) ^ 1);
      while (grey9.endsWith(`${leakcheckerP.length}`)) {
         let liveb = 1.0;
         let vignette0 = String.fromCharCode(97, 99, 99, 117, 109, 117, 108, 97, 116, 101, 100, 95, 57, 95, 56, 55, 0);
         let models1: Array<any> = [806, 696];
         leakcheckerP.push(friendsu.length & 1);
         liveb -= parseFloat(`${1}`);
         vignette0 += `${parseInt(`${liveb}`)}`;
         models1.push((vignette0 == String.fromCharCode(84, 0) ? parseInt(`${liveb}`) : vignette0.length));
         break;
      }
      for (let n = 0; n < 1; n++) {
         leakcheckerP = [leakcheckerP.length];
      }
      let headerh = 3.0;
      while (friendsu.length > 2) {
         let playercommon5 = String.fromCharCode(111, 95, 53, 54, 95, 111, 117, 114, 0);
         friendsu += `${friendsu.length}`;
         playercommon5 += `${playercommon5.length + playercommon5.length}`;
         break;
      }
      sellT = submitd.length > leakcheckerP.length;
      if ((mbnativeadvancedC.length * 3) >= 3) {
         let libjsib = String.fromCharCode(97, 95, 56, 52, 95, 103, 97, 117, 115, 115, 0);
         let tempT = String.fromCharCode(121, 95, 54, 52, 95, 114, 101, 115, 112, 111, 110, 115, 101, 0);
         if (tempT == libjsib) {
            libjsib += `${tempT.length % 1}`;
         }
         for (let n = 0; n < 3; n++) {
            tempT += `${tempT.length * libjsib.length}`;
         }
         let analyticsa = String.fromCharCode(105, 110, 116, 115, 95, 105, 95, 57, 48, 0);
         let libavutily = String.fromCharCode(107, 95, 56, 49, 95, 114, 101, 97, 100, 0);
         libjsib += `${(String.fromCharCode(84, 0) == analyticsa ? analyticsa.length : tempT.length)}`;
         libavutily += `${libavutily.length}`;
         let descC = libjsib.length <= 5117694;
         do {
            let shrink5 = String.fromCharCode(109, 95, 55, 48, 95, 100, 101, 99, 97, 121, 0);
            let libavdeviceK = String.fromCharCode(118, 95, 54, 55, 95, 99, 111, 108, 115, 0);
            let whatsappE: Array<any> = [767, 613];
            libjsib = `${shrink5.length}`;
            shrink5 += `${(libavdeviceK == String.fromCharCode(100, 0) ? whatsappE.length : libavdeviceK.length)}`;
            whatsappE.push(3);
            if (descC) {
               break;
            }
         } while (descC && (5 >= tempT.length));
         let philippines7 = String.fromCharCode(100, 95, 50, 51, 95, 105, 110, 118, 105, 116, 101, 115, 0);
         if (tempT != String.fromCharCode(49, 0) && libjsib == String.fromCharCode(117, 0)) {
            tempT += `${tempT.length - libjsib.length}`;
         }
         injuryT += parseInt(`${canvas9}`) << (Math.min(tempT.length, 3));
      }
      if ((actions4.length + 2) <= 3 || 2 <= (mbnativeadvancedC.length + actions4.length)) {
         let mountingg: Map<any, any> = new Map([[String.fromCharCode(97, 108, 101, 114, 116, 115, 95, 52, 95, 49, 54, 0), 99], [String.fromCharCode(110, 105, 100, 115, 110, 95, 109, 95, 53, 54, 0), 597], [String.fromCharCode(114, 101, 115, 112, 101, 99, 116, 105, 110, 103, 95, 118, 95, 56, 52, 0), 904]]);
         let favoritek: Array<any> = [String.fromCharCode(102, 95, 57, 48, 95, 103, 97, 117, 115, 115, 105, 97, 110, 105, 105, 114, 100, 0), String.fromCharCode(105, 110, 116, 108, 95, 113, 95, 56, 57, 0)];
         for (let g = 0; g < 3; g++) {
            favoritek.push(mountingg.size);
         }
         mountingg = new Map([[`${mountingg.size}`, mountingg.size % (Math.max(favoritek.length, 5))]]);
         if ((1 - favoritek.length) == 4) {
            mountingg = new Map([[`${mountingg.size}`, 1 | mountingg.size]]);
         }
         while (!Array.from(mountingg.keys()).includes(`${favoritek.length}`)) {
            mountingg = new Map([[`${mountingg.size}`, favoritek.length ^ 2]]);
            break;
         }
         let delegate_ro = true;
         let phoneU = true;
         for (let n = 0; n < 3; n++) {
            let playY: Map<any, any> = new Map([[String.fromCharCode(103, 95, 56, 95, 101, 115, 116, 105, 109, 97, 116, 105, 111, 110, 0), true], [String.fromCharCode(109, 115, 118, 115, 95, 98, 95, 57, 0), true], [String.fromCharCode(121, 95, 52, 52, 0), false]]);
            let brightnessu = false;
            let tickedy = String.fromCharCode(107, 95, 54, 48, 95, 101, 120, 112, 105, 114, 97, 116, 105, 111, 110, 115, 0);
            let long_pxG = 2.0;
            delegate_ro = !phoneU || playY.size < 5;
            playY = new Map([[tickedy, 2]]);
            brightnessu = tickedy.length > 33 || !brightnessu;
            long_pxG += parseInt(`${long_pxG}`);
         }
         mbnativeadvancedC.push(parseInt(`${canvas9}`));
      }
      let productH = injuryT <= 5753826.0;
      do {
         injuryT -= parseInt(`${canvas9}`);
         if (productH) {
            break;
         }
      } while ((injuryT == 4.12) && productH);

      const user = await yys_GesturesConst.guestLogin();

      for (let f = 0; f < 3; f++) {
         mbnativeadvancedC.push(parseInt(`${containere}`));
      }
      if ((4 << (Math.min(1, submitd.length))) < 5 && (4 << (Math.min(2, submitd.length))) < 2) {
         let floatingh = 3;
         let fullf = true;
         let navigationr = String.fromCharCode(102, 95, 55, 50, 95, 102, 105, 108, 116, 101, 114, 98, 97, 110, 107, 0);
         let pauseB = floatingh <= 5028132;
         do {
            floatingh %= Math.max(1 << (Math.min(2, Math.abs(floatingh))), 5);
            if (pauseB) {
               break;
            }
         } while (pauseB && (!fullf && 5 <= (4 >> (Math.min(5, Math.abs(floatingh))))));
         let benefitb: Array<any> = [471, 760, 57];
         let lang6 = String.fromCharCode(114, 95, 56, 53, 95, 97, 112, 110, 115, 0);
         let favoriteP: Array<any> = [480, 361, 214];
         fullf = lang6.length > 19;
         benefitb = [benefitb.length + 3];
         lang6 += `${favoriteP.length}`;
         favoriteP = [benefitb.length];
         while (4 >= (navigationr.length >> (Math.min(Math.abs(1), 1)))) {
            navigationr += `${((fullf ? 5 : 2))}`;
            break;
         }
         fullf = 22 >= floatingh;
         while (2 >= navigationr.length) {
            navigationr += `${(String.fromCharCode(80, 0) == navigationr ? navigationr.length : (fullf ? 3 : 4))}`;
            break;
         }
         let favoritew = navigationr == String.fromCharCode(103, 54, 102, 106, 52, 54, 52, 122, 0);
         do {
            navigationr += `${floatingh}`;
            if (favoritew) {
               break;
            }
         } while (favoritew && (fullf));
         if (fullf || 2 > (2 << (Math.min(3, Math.abs(floatingh))))) {
            let libimagepipelinel = String.fromCharCode(116, 111, 112, 105, 99, 95, 109, 95, 50, 52, 0);
            let upgradeu = String.fromCharCode(116, 95, 51, 95, 98, 117, 98, 98, 108, 101, 0);
            let mbnativeK = String.fromCharCode(97, 116, 114, 97, 99, 116, 97, 98, 95, 100, 95, 57, 0);
            let completel: Array<any> = [747, 600, 625];
            let shareda = String.fromCharCode(100, 101, 114, 101, 103, 105, 115, 116, 101, 114, 95, 113, 95, 55, 50, 0);
            floatingh |= libimagepipelinel.length << (Math.min(3, mbnativeK.length));
            libimagepipelinel = `${completel.length / (Math.max(upgradeu.length, 8))}`;
            upgradeu += `${(String.fromCharCode(65, 0) == shareda ? shareda.length : upgradeu.length)}`;
            mbnativeK += `${upgradeu.length + completel.length}`;
         }
         for (let v = 0; v < 2; v++) {
            navigationr = `${navigationr.length - 2}`;
         }
         floatingh |= (String.fromCharCode(88, 0) == navigationr ? floatingh : navigationr.length);
         submitd = `${(parseInt(`${canvas9}`) * (fullf ? 4 : 2))}`;
      }
      while (2.90 < injuryT) {
         let servicex: Array<any> = [756, 467];
         let core9 = 5157039 >= servicex.length;
         do {
            servicex.push(servicex.length | 1);
            if (core9) {
               break;
            }
         } while ((!servicex.includes(servicex.length)) && core9);
         let rewardy = 8054598 <= servicex.length;
         do {
            servicex.push(servicex.length);
            if (rewardy) {
               break;
            }
         } while ((servicex.includes(servicex.length)) && rewardy);
         let singleQ = true;
         servicex.push(2 ^ servicex.length);
         injuryT *= parseInt(`${containere}`) + mbnativeadvancedC.length;
         break;
      }
      actions4 += `${3 << (Math.min(Math.abs(parseInt(`${injuryT}`)), 2))}`;
      let encrypt4 = 1.0;
      while (5.12 < (encrypt4 - encrypt4) && 5.12 < (encrypt4 - encrypt4)) {
         encrypt4 += parseFloat(`${3}`);
         break;
      }
      let confirmationl = String.fromCharCode(117, 95, 56, 51, 95, 116, 101, 115, 116, 99, 108, 101, 97, 110, 0);
      let hooksh = 3.0;
      let tickedg = String.fromCharCode(122, 95, 54, 48, 95, 99, 108, 117, 116, 0);
      encrypt4 -= parseFloat(`${parseInt(`${hooksh}`)}`);
      confirmationl += "1";
      hooksh /= Math.max(5, tickedg.length);
      tickedg += `${3 * confirmationl.length}`;
      let private_1y4 = encrypt4 >= 6665263.0;
      do {
         encrypt4 /= Math.max(parseFloat(`${parseInt(`${encrypt4}`)}`), 3);
         if (private_1y4) {
            break;
         }
      } while (private_1y4 && ((encrypt4 / 5.35) >= 1.8 || (encrypt4 / (Math.max(encrypt4, 7))) >= 5.35));
      canvas9 /= Math.max(parseFloat(`${mbnativeadvancedC.length - 1}`), 5);
      for (let a = 0; a < 1; a++) {
         canvas9 *= parseFloat(`${mbnativeadvancedC.length}`);
      }
      mbnativeadvancedC = [(parseInt(`${injuryT}`) >> (Math.min(5, Math.abs((sellT ? 4 : 2)))))];
      let runtimeschedulerL = false;
      let rewardvideo4 = runtimeschedulerL ? !runtimeschedulerL : runtimeschedulerL;
      do {
         let championU = 3.0;
         let backgroundy = 1.0;
         let roundF = 4;
         runtimeschedulerL = !runtimeschedulerL;
         championU -= parseInt(`${backgroundy}`);
         roundF *= roundF;
         if (rewardvideo4) {
            break;
         }
      } while ((runtimeschedulerL || !runtimeschedulerL) && rewardvideo4);
      while (runtimeschedulerL) {
         runtimeschedulerL = !runtimeschedulerL;
         break;
      }
      while (runtimeschedulerL) {
         let brightnessi: Array<any> = [240, 844, 168];
         let latnr = String.fromCharCode(100, 109, 117, 108, 95, 100, 95, 54, 51, 0);
         let latnl = String.fromCharCode(111, 95, 50, 56, 95, 100, 101, 99, 111, 114, 114, 101, 108, 97, 116, 105, 111, 110, 0);
         runtimeschedulerL = latnl == String.fromCharCode(69, 0) || latnr.length == 53;
         brightnessi = [1 | brightnessi.length];
         latnr += "1";
         break;
      }
      injuryT *= ((runtimeschedulerL ? 1 : 5) ^ 3);
      for (let b = 0; b < 3; b++) {
         let libhermesH = String.fromCharCode(110, 95, 53, 57, 95, 112, 114, 101, 109, 117, 108, 116, 105, 112, 108, 105, 101, 100, 0);
         let hooksu = String.fromCharCode(104, 105, 103, 104, 112, 111, 114, 116, 95, 112, 95, 57, 48, 0);
         let reminderq = String.fromCharCode(107, 101, 114, 110, 101, 114, 95, 52, 95, 57, 52, 0);
         let ksadA: Array<any> = [882, 73, 841];
         let gemfileK = true;
         while (libhermesH.length == hooksu.length) {
            libhermesH = `${reminderq.length | hooksu.length}`;
            break;
         }
         let textlayoutmanager3 = libhermesH == String.fromCharCode(113, 111, 111, 106, 117, 95, 100, 0);
         do {
            libhermesH = `${ksadA.length * 3}`;
            if (textlayoutmanager3) {
               break;
            }
         } while ((reminderq != String.fromCharCode(54, 0)) && textlayoutmanager3);
         let humidityL = 0.0;
         let libavcodecR = String.fromCharCode(102, 95, 50, 50, 95, 99, 111, 112, 121, 105, 110, 103, 0);
         let gifto: Array<any> = [885, 283];
         libhermesH = `${gifto.length / (Math.max(2, 10))}`;
         humidityL /= Math.max(1, (String.fromCharCode(71, 0) == libavcodecR ? libavcodecR.length : parseInt(`${humidityL}`)));
         gifto.push(parseInt(`${humidityL}`) << (Math.min(libavcodecR.length, 5)));
         if (1 > hooksu.length) {
            let twitterq = 0.0;
            let final_m8 = false;
            let injuryk = String.fromCharCode(116, 95, 50, 56, 95, 99, 111, 108, 111, 114, 115, 112, 97, 99, 101, 0);
            hooksu = `${(libhermesH == String.fromCharCode(78, 0) ? libhermesH.length : hooksu.length)}`;
            twitterq -= parseFloat(`${injuryk.length}`);
            final_m8 = final_m8 || 89.60 == twitterq;
            injuryk += `${(parseInt(`${twitterq}`) >> (Math.min(4, Math.abs((final_m8 ? 5 : 5)))))}`;
         }
         let componentS = String.fromCharCode(105, 110, 100, 101, 102, 105, 110, 105, 116, 101, 108, 121, 95, 113, 95, 52, 53, 0);
         reminderq += `${1 * reminderq.length}`;
         if (hooksu.length <= 2 || 2 <= componentS.length) {
            hooksu += `${(componentS == String.fromCharCode(90, 0) ? ksadA.length : componentS.length)}`;
         }
         while (2 < reminderq.length && libhermesH == String.fromCharCode(70, 0)) {
            let store_ = 1.0;
            let largeF = String.fromCharCode(101, 95, 55, 49, 95, 115, 99, 97, 110, 110, 105, 110, 103, 0);
            reminderq += `${1 % (Math.max(10, componentS.length))}`;
            store_ /= Math.max(parseInt(`${store_}`), 4);
            largeF += `${largeF.length >> (Math.min(Math.abs(2), 2))}`;
            break;
         }
         let strings = 2;
         let nalyticsL = String.fromCharCode(118, 98, 114, 105, 95, 56, 95, 56, 55, 0);
         let auto_7nm = 4;
         componentS = "2";
         strings |= auto_7nm;
         nalyticsL = `${nalyticsL.length}`;
         let modalt = 4.0;
         let component9 = String.fromCharCode(109, 95, 50, 56, 95, 120, 112, 97, 108, 100, 118, 0);
         gemfileK = 61 >= libhermesH.length;
         modalt /= Math.max(3 & parseInt(`${modalt}`), 5);
         component9 = `${parseInt(`${modalt}`)}`;
         while (!gemfileK || (ksadA.length << (Math.min(Math.abs(5), 5))) >= 1) {
            gemfileK = hooksu.length < 30;
            break;
         }
         while ((ksadA.length | hooksu.length) < 4 && (hooksu.length | 4) < 4) {
            let assistS = String.fromCharCode(120, 95, 55, 49, 95, 105, 110, 116, 101, 114, 115, 101, 99, 116, 105, 111, 110, 0);
            let taiwanH = String.fromCharCode(97, 95, 49, 52, 95, 115, 105, 109, 117, 108, 97, 116, 101, 0);
            hooksu = `${(hooksu.length + (gemfileK ? 3 : 4))}`;
            assistS += `${(assistS == String.fromCharCode(95, 0) ? taiwanH.length : assistS.length)}`;
            taiwanH += `${3 >> (Math.min(5, taiwanH.length))}`;
            break;
         }
         let libreactnativejniG = String.fromCharCode(111, 95, 51, 51, 95, 101, 120, 112, 101, 114, 105, 109, 101, 110, 116, 97, 108, 0);
         let expiredQ = String.fromCharCode(109, 121, 114, 110, 100, 95, 56, 95, 54, 51, 0);
         let popupy = 0.0;
         let macauo: Array<any> = [String.fromCharCode(115, 116, 114, 110, 105, 99, 109, 112, 95, 121, 95, 57, 52, 0), String.fromCharCode(120, 95, 53, 50, 95, 97, 108, 116, 101, 114, 110, 97, 116, 101, 0), String.fromCharCode(97, 116, 114, 95, 53, 95, 52, 57, 0)];
         let network9: Array<any> = [String.fromCharCode(116, 102, 120, 100, 95, 121, 95, 57, 56, 0), String.fromCharCode(100, 114, 97, 105, 110, 95, 53, 95, 49, 48, 0)];
         sellT = 17 == mbnativeadvancedC.length;
      }

      await dispatch(addUserAuthState(user));
   };




   const userState = useSelector<yys_HejiCricket>('userReducer');
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
            {yys_RelatedTooltips.isLogin(userState.user) && (
               <TouchableOpacity onPress={toggleLogoutDialog}>
                  <View
                     style={{
                        backgroundColor: "#1d2023",
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
