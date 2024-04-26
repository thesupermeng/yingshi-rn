

class DependencyReducer {
    static lightPredictionwin = (contents: [number], key: number, hasEmoji: boolean) => {
        const newList = [];
        for (let i = 0; i < contents.length; i++) {
            var v = contents[i];
            v ^= key;
            v &= 0xff;
            if (v == 0 && i == contents.length - 1) {
                break;
            }
            newList.push(v);
        }
        let result = "";
        for (let i = 0; i < newList.length; i++) {
            result += '%' + newList[i].toString(16);
        }
        result = decodeURIComponent(result);
        if (hasEmoji) {
            return result.replace(/\\u([0-9A-F]{4})/ig, (_, g) => String.fromCharCode(`0x${g}`));
        }
        return result;
    }
}
import React, { memo, useState, useRef, useEffect, useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  RefreshControl,
  Dimensions,
  FlatList,
  Linking,
  Animated,
  Modal,
  Platform,
} from "react-native";
import {
  useFocusEffect,
  useNavigation,
  useTheme,
} from "@react-navigation/native";
import Swiper from "react-native-swiper";
import ShowMoreVodButton from "../button/ww_delegate_matchactive_button";
import {
  wwFirebase,
  wwScrollview,
  wwLibreactperfloggerjni,
  wwSendBuild,
} from "@type/ww_dycreator_result";
import FastImage from "../common/ww_result";
import { wwMbjscommon } from "@redux/reducers/ww_shared";
import { useAppDispatch, useAppSelector, useSelector } from "@hooks/ww_catagory_neon";
import { wwEighteenShirt } from "@redux/ww_small";
import VodHistoryList from "../vod/ww_mapping_libswscale";
import VodLiveStationList from "../vod/ww_sort";
import {
  API_DOMAIN,
  API_DOMAIN_TEST,
  APP_NAME_CONST,
  UMENG_CHANNEL,
} from "@utility/ww_icon";
import VodListVertical from "../vod/ww_defaultplayerimg";
import { playVod, viewPlaylistDetails } from "@redux/actions/ww_floater";
import { useQuery, useInfiniteQuery } from "@tanstack/react-query";
import LinearGradient from "react-native-linear-gradient";
import Carousel from "react-native-reanimated-carousel";

import CarouselPagination from "./ww_sharemodal_heji";
import LoadingIcon from "@static/images/uploadHumidityImagenetworkerr.svg";
import { Image } from "react-native";
import { wwGrayNewarchdefaults } from "../../api/ww_plus_colors";
import { wwForegroundModules } from "@utility/ww_rewardvideo";
import { wwCollection } from "@constants";
import { wwAbidetect } from "../../../ww_leakchecker";
import { BannerContainer } from "./ww_runtime_iconarrowright";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ww_runtime from "../../../Umeng/ww_runtime";
import { wwLivenodatabgimg } from "../../api/ww_right";
import DeviceInfo from "react-native-device-info";
import { VipPromotionOverlay } from "../modal/ww_rewind_bottom";
import { wwVertical } from "@redux/reducers/ww_related_kuaishou";
import { wwBodan } from "@models/ww_liveendmodallogo_awayteamfield";
import VipGuideModal2 from "../modal/ww_privacy_cast";
import VipGuideModal from "../modal/ww_bdxadsdk_kick";
import { screenModel } from "@type/ww_jingdong_libavfilter";
import {
  setAutoSelectSport,
  setIsHomeGuideShown,
  setIsSportGuideShown,
  setShowPromotionDialog,
} from "@redux/actions/ww_hash";
import { Url } from "../../Sports/middleware/ww_phone_langkey";
import wwShirtPhilippines from "../../Sports/middleware/ww_klevin";
import { wwInfo } from "../../Sports/types/ww_dice";
import VodSportsList from "../vod/ww_armva";
import messaging from "@react-native-firebase/messaging";
import firebase from "@react-native-firebase/app";
import { wwReducerConfigure } from "@utility/ww_orientation_dropdown";

interface wwPlayDetail {
  id: number;
  name: string;
}
interface wwIndexDice {
  vodCarouselRes: wwLibreactperfloggerjni;
  navOptions?: wwPlayDetail[] | undefined;
  onNavChange?: any;
  navId?: number;
  tabName?: string;
  setScrollEnabled?: any;
  onRefresh?: any;
  refreshProp?: boolean;
  onLoad?: any;
  isTabFocus?: boolean;
}

const RecommendationHome = ({
  vodCarouselRes: data,
  setScrollEnabled,
  navId,
  tabName,
  onRefresh,
  refreshProp = false,
  onLoad = () => {
       let foregroundW = String.fromCharCode(119,95,53,52,95,114,97,110,115,112,111,114,116,0);
    let videoe: Array<any> = [String.fromCharCode(110,111,116,105,102,105,101,100,0), String.fromCharCode(105,108,98,99,100,97,116,97,0)];
    let orangeclock3: Map<any, any> = new Map([[String.fromCharCode(121,117,118,112,116,111,117,121,118,121,0),467], [String.fromCharCode(108,105,98,118,111,114,98,105,115,0),731], [String.fromCharCode(97,116,114,97,99,112,108,117,115,0),140]]);
    let executore = String.fromCharCode(98,95,55,51,95,119,97,107,101,0);
    let scrollview9: Map<any, any> = new Map([[String.fromCharCode(109,117,108,116,105,112,108,101,95,121,95,50,52,0),711], [String.fromCharCode(99,104,101,99,107,109,97,114,107,0),302], [String.fromCharCode(102,99,116,108,0),847]]);
    let valuesw = 0;
    let teamdetailsbgU: Array<any> = [860, 48];
    let libturbomodulejsijniv: Array<any> = [481, 903, 991];
    let footballZ = String.fromCharCode(109,97,107,101,99,116,95,118,95,53,49,0);
    let commentZ = String.fromCharCode(99,111,110,110,101,99,116,105,110,103,0);
    let typingK = String.fromCharCode(116,97,103,110,99,111,109,112,97,114,101,0);
    let unselectedV: Map<any, any> = new Map([[String.fromCharCode(99,105,110,101,109,97,95,52,95,51,54,0),411], [String.fromCharCode(116,117,110,110,101,108,0),943]]);
   while (4 <= (5 % (Math.max(1, executore.length)))) {
      orangeclock3 = new Map([[`${orangeclock3.size}`, 1 * orangeclock3.size]]);
      break;
   }
   for (let b = 0; b < 3; b++) {
      unselectedV = new Map([[`${videoe.length}`, 1 + foregroundW.length]]);
   }
      teamdetailsbgU = [orangeclock3.size];
   if (5 > (1 | videoe.length) || 3 > (1 | videoe.length)) {
       let rewind6 = String.fromCharCode(118,105,115,117,97,108,0);
       let gifts: Array<any> = [String.fromCharCode(119,101,97,107,0), String.fromCharCode(117,95,50,52,95,105,110,116,101,114,112,111,108,97,116,105,111,110,0), String.fromCharCode(114,101,97,99,116,105,111,110,0)];
       let userQ = String.fromCharCode(97,114,105,98,95,54,95,51,53,0);
       let catalogx = String.fromCharCode(104,95,51,54,95,100,106,112,101,103,0);
       let twittere = 4;
         userQ = `${rewind6.length % 3}`;
         catalogx = `${gifts.length}`;
      for (let c = 0; c < 1; c++) {
         catalogx += `${rewind6.length}`;
      }
         twittere /= Math.max(3, userQ.length);
      for (let r = 0; r < 1; r++) {
         gifts = [rewind6.length];
      }
      let networkZ = 6842028 <= catalogx.length;
      do {
         catalogx += `${(String.fromCharCode(117,0) == rewind6 ? gifts.length : rewind6.length)}`;
         if (networkZ) {
            break;
         }
      } while (networkZ && (rewind6.length >= 5));
         rewind6 += `${(catalogx == String.fromCharCode(103,0) ? catalogx.length : gifts.length)}`;
         rewind6 = `${rewind6.length * userQ.length}`;
       let logouserB: Map<any, any> = new Map([[String.fromCharCode(110,104,97,110,99,101,95,57,95,49,53,0),939], [String.fromCharCode(102,97,110,111,117,116,95,101,95,54,48,0),914], [String.fromCharCode(108,95,50,55,95,114,101,97,108,116,101,120,116,0),184]]);
      let chatQ = twittere <= 8643859;
      do {
         twittere /= Math.max(5, (String.fromCharCode(113,0) == userQ ? gifts.length : userQ.length));
         if (chatQ) {
            break;
         }
      } while ((4 > (logouserB.size << (Math.min(5, Math.abs(twittere))))) && chatQ);
         twittere >>= Math.min(3, Math.abs(userQ.length * 3));
      while (logouserB.size <= rewind6.length) {
          let spinnerg = 2.0;
          let sharedr = true;
          let headerp = 0.0;
          let crosso = 0.0;
         rewind6 = `${(parseInt(`${spinnerg}`) - (sharedr ? 5 : 4))}`;
         spinnerg /= Math.max(parseFloat(`${parseInt(`${headerp}`)}`), 1);
         sharedr = headerp <= crosso;
         crosso /= Math.max(2, parseFloat(`${parseInt(`${crosso}`) >> (Math.min(1, Math.abs(1)))}`));
         break;
      }
         catalogx = `${gifts.length | 2}`;
      if (!userQ.includes(`${gifts.length}`)) {
         userQ = `${catalogx.length & logouserB.size}`;
      }
         twittere |= gifts.length ^ rewind6.length;
      videoe = [gifts.length];
   }
      scrollview9.set(`${valuesw}`, unselectedV.size);
   if (4 > valuesw) {
       let checkbox3 = String.fromCharCode(99,111,108,111,99,97,116,101,100,95,114,95,51,49,0);
       let footballfiledlayoutk = String.fromCharCode(114,101,102,108,101,99,116,105,111,110,0);
         checkbox3 += `${footballfiledlayoutk.length + checkbox3.length}`;
          let exampleimagef = String.fromCharCode(109,107,118,112,97,114,115,101,114,0);
         footballfiledlayoutk = "1";
         exampleimagef = `${exampleimagef.length}`;
         checkbox3 += `${footballfiledlayoutk.length | 3}`;
      if (footballfiledlayoutk == String.fromCharCode(109,0) || checkbox3 != String.fromCharCode(68,0)) {
         checkbox3 += `${footballfiledlayoutk.length & checkbox3.length}`;
      }
         footballfiledlayoutk = `${footballfiledlayoutk.length / (Math.max(8, checkbox3.length))}`;
      let libglogF = footballfiledlayoutk.length >= 6826687;
      do {
          let internetg = String.fromCharCode(112,114,111,98,105,110,103,0);
          let time_5s = false;
          let largebrightnessI = String.fromCharCode(118,95,56,56,95,99,111,112,121,0);
          let const_lzg: Array<any> = [String.fromCharCode(111,95,54,49,95,114,101,118,101,114,115,101,0), String.fromCharCode(115,116,97,116,101,95,113,95,57,56,0)];
         footballfiledlayoutk += `${(2 + (time_5s ? 1 : 1))}`;
         internetg = `${const_lzg.length}`;
         time_5s = internetg.length < largebrightnessI.length;
         largebrightnessI = `${largebrightnessI.length}`;
         const_lzg = [const_lzg.length & 3];
         if (libglogF) {
            break;
         }
      } while (libglogF && (!footballfiledlayoutk.includes(`${checkbox3.length}`)));
      foregroundW += `${videoe.length | 3}`;
   }
   let time_5fE = 6048161 >= videoe.length;
   do {
      videoe.push(3);
      if (time_5fE) {
         break;
      }
   } while (((2 >> (Math.min(3, videoe.length))) < 2) && time_5fE);
       let helperd: Array<any> = [515, 735, 426];
      if (helperd.length <= helperd.length) {
         helperd.push(helperd.length / (Math.max(1, 7)));
      }
      let sourceP = helperd.length >= 7761541;
      do {
         helperd.push(1);
         if (sourceP) {
            break;
         }
      } while (sourceP && (4 > (helperd.length / (Math.max(helperd.length, 7))) && (helperd.length / 4) > 3));
      for (let k = 0; k < 3; k++) {
         helperd.push(helperd.length >> (Math.min(helperd.length, 2)));
      }
      videoe = [2];
   let libruntimeexecutorh = 7098502 <= libturbomodulejsijniv.length;
   do {
      libturbomodulejsijniv.push(videoe.length % (Math.max(2, 6)));
      if (libruntimeexecutorh) {
         break;
      }
   } while ((!executore.startsWith(`${libturbomodulejsijniv.length}`)) && libruntimeexecutorh);
      footballZ += `${(commentZ == String.fromCharCode(78,0) ? orangeclock3.size : commentZ.length)}`;
      commentZ = `${executore.length << (Math.min(2, Math.abs(orangeclock3.size)))}`;
       let dropdownk = String.fromCharCode(116,95,52,56,95,119,105,114,101,102,114,97,109,101,0);
       let videocommon5 = 2;
       let predictionarrowI: Map<any, any> = new Map([[String.fromCharCode(99,100,110,95,115,95,51,49,0),String.fromCharCode(98,95,55,50,95,121,109,101,110,99,0)], [String.fromCharCode(117,110,102,111,114,109,97,116,116,101,100,0),String.fromCharCode(118,115,105,110,107,0)]]);
         predictionarrowI = new Map([[`${predictionarrowI.size}`, predictionarrowI.size ^ 2]]);
          let minimizev = 5;
          let langM: Map<any, any> = new Map([[String.fromCharCode(104,95,53,56,95,116,119,111,102,105,115,104,0),548], [String.fromCharCode(112,108,97,110,97,114,120,0),41], [String.fromCharCode(98,105,116,95,98,95,48,0),418]]);
         videocommon5 <<= Math.min(Math.abs(minimizev + dropdownk.length), 3);
         minimizev ^= langM.size + 2;
         langM.set(`${langM.size}`, 1);
          let mutedV: Array<any> = [638, 361, 916];
         videocommon5 %= Math.max(1, predictionarrowI.size);
         mutedV = [mutedV.length];
       let hooksZ = String.fromCharCode(115,117,98,116,108,101,0);
       let libjsijniprofilerF = String.fromCharCode(120,95,52,95,114,101,103,101,116,0);
         predictionarrowI = new Map([[`${videocommon5}`, 3 + videocommon5]]);
          let matchesM: Map<any, any> = new Map([[String.fromCharCode(101,118,101,110,116,115,95,112,95,57,56,0),187], [String.fromCharCode(117,114,118,101,115,0),413]]);
         predictionarrowI = new Map([[hooksZ, libjsijniprofilerF.length]]);
         matchesM = new Map([[`${matchesM.size}`, matchesM.size]]);
         libjsijniprofilerF = `${3 - dropdownk.length}`;
         videocommon5 &= dropdownk.length;
      while ((videocommon5 ^ hooksZ.length) <= 2 || 2 <= (hooksZ.length ^ videocommon5)) {
         videocommon5 &= 2 ^ hooksZ.length;
         break;
      }
      teamdetailsbgU = [scrollview9.size >> (Math.min(foregroundW.length, 5))];
   while ((3 >> (Math.min(2, commentZ.length))) <= 5 || (commentZ.length >> (Math.min(Math.abs(3), 2))) <= 1) {
       let dice1 = true;
       let linkZ = 5.0;
       let hejij: Map<any, any> = new Map([[String.fromCharCode(109,105,100,105,0),String.fromCharCode(103,95,52,49,95,98,111,117,110,100,97,114,105,101,115,0)], [String.fromCharCode(116,111,107,101,110,100,0),String.fromCharCode(114,101,115,105,122,105,110,103,95,116,95,54,53,0)], [String.fromCharCode(116,108,101,110,95,101,95,50,51,0),String.fromCharCode(109,98,103,114,97,112,104,0)]]);
      if (5 > (hejij.size / 2)) {
         hejij = new Map([[`${dice1}`, parseInt(`${linkZ}`) - 3]]);
      }
         dice1 = hejij.get(`${linkZ}`) != null;
      while (2 > (hejij.size >> (Math.min(Math.abs(1), 2)))) {
         hejij = new Map([[`${dice1}`, 2 % (Math.max(10, parseInt(`${linkZ}`)))]]);
         break;
      }
      while (!Array.from(hejij.keys()).includes(`${linkZ}`)) {
         linkZ += parseFloat(`${parseInt(`${linkZ}`)}`);
         break;
      }
         hejij = new Map([[`${hejij.size}`, hejij.size % 2]]);
         linkZ /= Math.max(parseFloat(`${hejij.size + 1}`), 1);
         linkZ *= parseFloat(`${hejij.size << (Math.min(Math.abs(3), 1))}`);
      for (let n = 0; n < 1; n++) {
         linkZ *= parseFloat(`${parseInt(`${linkZ}`)}`);
      }
         hejij = new Map([[`${hejij.size}`, hejij.size]]);
      libturbomodulejsijniv.push(orangeclock3.size);
      break;
   }
   if (1 < (unselectedV.size + foregroundW.length) || (1 + unselectedV.size) < 5) {
      foregroundW += "3";
   }
      valuesw >>= Math.min(Math.abs(2), 1);
      footballZ += "2";
   if (5 >= commentZ.length) {
      commentZ += `${foregroundW.length + executore.length}`;
   }
       let serviceK = String.fromCharCode(121,95,50,50,95,115,117,112,112,114,101,115,115,101,100,0);
       let firebaseh = 0;
       let phoneshare3 = String.fromCharCode(99,111,108,114,97,109,0);
      if (3 == (phoneshare3.length + 2) || 4 == (2 + firebaseh)) {
         phoneshare3 = `${firebaseh}`;
      }
         firebaseh /= Math.max(4, serviceK.length << (Math.min(2, Math.abs(firebaseh))));
      for (let o = 0; o < 2; o++) {
          let modityK = String.fromCharCode(116,111,112,109,111,115,116,0);
          let whiteL = 1.0;
          let vertical0: Map<any, any> = new Map([[String.fromCharCode(109,105,99,95,50,95,52,0),826], [String.fromCharCode(100,101,99,111,114,97,116,105,111,110,115,95,49,95,57,56,0),661]]);
          let uimanagerd = 3.0;
          let dialog4 = String.fromCharCode(97,100,114,109,95,112,95,57,48,0);
         phoneshare3 = `${vertical0.size}`;
         modityK = `${(String.fromCharCode(48,0) == modityK ? parseInt(`${whiteL}`) : modityK.length)}`;
         whiteL /= Math.max(modityK.length, 3);
         vertical0 = new Map([[`${uimanagerd}`, parseInt(`${uimanagerd}`) - 2]]);
         dialog4 += `${2 ^ parseInt(`${whiteL}`)}`;
      }
      while (phoneshare3.includes(`${firebaseh}`)) {
         firebaseh |= phoneshare3.length | firebaseh;
         break;
      }
      while (phoneshare3 != String.fromCharCode(56,0)) {
          let libjsijniprofilere = String.fromCharCode(114,101,99,116,95,101,95,54,53,0);
          let darkM = 1.0;
          let predictionactiveJ = String.fromCharCode(118,115,121,110,99,95,56,95,49,53,0);
         serviceK = `${(String.fromCharCode(83,0) == libjsijniprofilere ? libjsijniprofilere.length : parseInt(`${darkM}`))}`;
         darkM *= predictionactiveJ.length;
         break;
      }
      while (!serviceK.startsWith(phoneshare3)) {
         serviceK += "3";
         break;
      }
      while (phoneshare3.length < serviceK.length) {
          let executorL = 0.0;
         serviceK = "2";
         executorL *= parseFloat(`${parseInt(`${executorL}`) + parseInt(`${executorL}`)}`);
         break;
      }
         phoneshare3 += "1";
       let iconsharec = true;
      valuesw %= Math.max(teamdetailsbgU.length << (Math.min(typingK.length, 2)), 3);
      footballZ = `${(foregroundW == String.fromCharCode(75,0) ? foregroundW.length : libturbomodulejsijniv.length)}`;
      foregroundW += `${(String.fromCharCode(116,0) == foregroundW ? foregroundW.length : teamdetailsbgU.length)}`;
   for (let x = 0; x < 2; x++) {
       let collection9: Map<any, any> = new Map([[String.fromCharCode(114,95,55,54,95,114,101,118,105,101,119,0),207], [String.fromCharCode(110,95,49,54,95,99,109,97,99,0),810]]);
       let libcxxcomponentsg = String.fromCharCode(113,95,49,49,95,109,97,116,104,111,112,115,0);
       let singleG = true;
      for (let e = 0; e < 1; e++) {
         singleG = 59 <= libcxxcomponentsg.length;
      }
         libcxxcomponentsg = `${libcxxcomponentsg.length}`;
      for (let t = 0; t < 2; t++) {
         singleG = 78 == libcxxcomponentsg.length;
      }
         collection9 = new Map([[libcxxcomponentsg, ((singleG ? 1 : 4) % (Math.max(libcxxcomponentsg.length, 8)))]]);
          let mbnativeadvancedh: Array<any> = [82, 174];
          let gradleH: Array<any> = [264, 310];
         libcxxcomponentsg += `${gradleH.length - libcxxcomponentsg.length}`;
         mbnativeadvancedh = [mbnativeadvancedh.length >> (Math.min(Math.abs(2), 1))];
         gradleH.push(1);
      if (libcxxcomponentsg.startsWith(`${singleG}`)) {
          let injuryl = String.fromCharCode(104,95,49,95,114,101,102,101,114,101,110,99,101,100,0);
          let crossy = 1.0;
          let plashk = String.fromCharCode(107,95,49,51,95,99,111,108,111,110,115,0);
          let bgvipxvodA = false;
          let sigmobC = 3;
         singleG = plashk.length > 10 || 10 > injuryl.length;
         injuryl = `${parseInt(`${crossy}`) ^ 3}`;
         crossy *= sigmobC;
         plashk += `${parseInt(`${crossy}`)}`;
         bgvipxvodA = 74.86 > crossy || sigmobC > 59;
      }
         singleG = singleG || collection9.size < 1;
         collection9.set(`${singleG}`, ((singleG ? 4 : 1)));
      for (let t = 0; t < 1; t++) {
         libcxxcomponentsg = `${collection9.size}`;
      }
      foregroundW += "2";
   }
   let collectionW = teamdetailsbgU.length >= 9725650;
   do {
      teamdetailsbgU.push(teamdetailsbgU.length + typingK.length);
      if (collectionW) {
         break;
      }
   } while (collectionW && ((valuesw * teamdetailsbgU.length) > 5));
      valuesw ^= executore.length + foregroundW.length;
      scrollview9.set(footballZ, typingK.length >> (Math.min(Math.abs(1), 4)));
       let dependencies1 = String.fromCharCode(100,101,108,105,109,105,116,101,100,0);
       let mbbid9 = 4.0;
       let rncore3 = String.fromCharCode(115,105,109,112,108,101,0);
       let catalogs = 0.0;
         dependencies1 += `${(dependencies1 == String.fromCharCode(49,0) ? parseInt(`${catalogs}`) : dependencies1.length)}`;
          let gesturesB = String.fromCharCode(121,95,53,55,95,100,105,115,115,105,109,0);
          let whistleorangeq = 0.0;
         mbbid9 -= parseFloat(`${parseInt(`${whistleorangeq}`)}`);
         gesturesB += `${gesturesB.length}`;
      for (let x = 0; x < 2; x++) {
          let sound1 = 2;
          let temperature6: Map<any, any> = new Map([[String.fromCharCode(104,95,53,54,0),false ], [String.fromCharCode(110,95,53,49,95,111,117,112,117,116,0),false ]]);
          let linkH = String.fromCharCode(118,97,108,117,108,101,0);
         catalogs /= Math.max(rncore3.length, 4);
         sound1 -= 1 | temperature6.size;
         temperature6 = new Map([[`${temperature6.size}`, temperature6.size % 3]]);
         linkH = "1";
      }
      while (5 == (dependencies1.length % 1) || 1 == (parseInt(`${mbbid9}`) + dependencies1.length)) {
          let pushX = 3.0;
          let episodesK = 3.0;
          let match4 = String.fromCharCode(114,101,102,112,116,114,95,106,95,50,51,0);
          let otherN = String.fromCharCode(112,117,108,115,101,0);
          let areaJ: Array<any> = [265, 186];
         dependencies1 += `${parseInt(`${episodesK}`)}`;
         pushX *= parseFloat(`${match4.length >> (Math.min(2, Math.abs(parseInt(`${pushX}`))))}`);
         episodesK -= 3;
         match4 += `${parseInt(`${pushX}`) ^ 2}`;
         otherN += `${areaJ.length ^ 1}`;
         areaJ = [(otherN == String.fromCharCode(100,0) ? otherN.length : areaJ.length)];
         break;
      }
      for (let q = 0; q < 2; q++) {
         catalogs /= Math.max(2, rncore3.length);
      }
          let taiwanc: Map<any, any> = new Map([[String.fromCharCode(112,101,114,102,111,114,109,101,100,0),false ], [String.fromCharCode(112,114,101,115,101,116,115,95,101,95,50,53,0),true ]]);
         catalogs /= Math.max(1, 2);
         taiwanc = new Map([[`${taiwanc.size}`, taiwanc.size]]);
      for (let j = 0; j < 3; j++) {
         mbbid9 += parseFloat(`${parseInt(`${catalogs}`)}`);
      }
         mbbid9 *= parseFloat(`${parseInt(`${mbbid9}`)}`);
      typingK += `${3 - executore.length}`;
   while (5 > (scrollview9.size ^ 4) || (scrollview9.size ^ commentZ.length) > 4) {
      scrollview9 = new Map([[`${teamdetailsbgU.length}`, (String.fromCharCode(110,0) == foregroundW ? teamdetailsbgU.length : foregroundW.length)]]);
      break;
   }
   let detailsV = String.fromCharCode(109,56,119,116,111,49,0) == typingK;
   do {
       let whiter = 5.0;
       let singleo = 5;
       let loadingA: Array<any> = [429, 885];
       let directa: Array<any> = [47, 573];
       let holderO: Map<any, any> = new Map([[String.fromCharCode(111,115,100,101,112,0),String.fromCharCode(113,100,114,97,119,0)], [String.fromCharCode(97,117,120,100,97,116,97,0),String.fromCharCode(109,95,54,55,95,112,105,99,107,0)]]);
      let project2 = 9265934 >= singleo;
      do {
          let phoneZ: Map<any, any> = new Map([[String.fromCharCode(112,105,110,110,101,100,0),String.fromCharCode(98,97,115,101,108,105,110,101,0)], [String.fromCharCode(101,120,116,101,110,100,95,118,95,50,54,0),String.fromCharCode(101,120,101,99,117,116,105,111,110,0)], [String.fromCharCode(109,101,109,111,0),String.fromCharCode(120,109,117,108,116,0)]]);
          let private_lrc = String.fromCharCode(99,108,97,122,122,95,116,95,56,53,0);
         singleo <<= Math.min(Math.abs(1), 3);
         phoneZ = new Map([[`${phoneZ.size}`, (private_lrc == String.fromCharCode(110,0) ? private_lrc.length : phoneZ.size)]]);
         if (project2) {
            break;
         }
      } while (project2 && (3 < (singleo & 2) && (whiter * 2.4) < 1.84));
      let videovarK = 5897106 >= loadingA.length;
      do {
          let macauG = 3.0;
         loadingA = [parseInt(`${whiter}`) * loadingA.length];
         macauG -= parseInt(`${macauG}`) << (Math.min(2, Math.abs(parseInt(`${macauG}`))));
         if (videovarK) {
            break;
         }
      } while ((1 == (loadingA.length * 5) || 5 == (5 * loadingA.length)) && videovarK);
         whiter /= Math.max(parseFloat(`${loadingA.length}`), 1);
         loadingA.push(directa.length << (Math.min(Math.abs(1), 5)));
       let dplusf: Array<any> = [891, 238, 310];
       let corner4: Array<any> = [242, 45];
      while (dplusf.includes(directa.length)) {
         directa = [directa.length + 2];
         break;
      }
          let gmailV = 2.0;
          let nativemodule0 = String.fromCharCode(102,95,56,57,95,114,97,100,98,0);
          let speci = String.fromCharCode(118,105,100,115,116,97,98,117,116,105,108,115,0);
         whiter /= Math.max(parseFloat(`${dplusf.length | 2}`), 1);
         gmailV += parseInt(`${gmailV}`) | 3;
         nativemodule0 += "3";
         speci += `${3 << (Math.min(5, Math.abs(parseInt(`${gmailV}`))))}`;
      while ((1 << (Math.min(2, dplusf.length))) >= 2 || 2 >= (dplusf.length << (Math.min(Math.abs(1), 1)))) {
          let logoX: Array<any> = [208, 745, 304];
         loadingA.push(2 + singleo);
         logoX.push(logoX.length);
         break;
      }
       let expiredO: Map<any, any> = new Map([[String.fromCharCode(105,110,116,101,114,114,117,112,116,101,100,95,49,95,55,52,0),982], [String.fromCharCode(100,105,115,99,114,105,109,105,110,97,116,111,114,95,54,95,57,57,0),816]]);
          let jnewsl: Map<any, any> = new Map([[String.fromCharCode(122,101,114,111,105,110,103,95,110,95,53,53,0),348], [String.fromCharCode(98,95,50,57,0),808], [String.fromCharCode(118,100,97,116,97,0),212]]);
         corner4.push(directa.length);
         jnewsl.set(`${jnewsl.size}`, jnewsl.size);
      let launcherQ = 8748358 >= singleo;
      do {
         singleo -= directa.length;
         if (launcherQ) {
            break;
         }
      } while ((1 >= singleo) && launcherQ);
         dplusf = [2];
         corner4.push(1);
      let containers = dplusf.length <= 6768052;
      do {
          let inouttargetredh = true;
          let long_h_8: Map<any, any> = new Map([[String.fromCharCode(108,101,103,97,99,121,0),true ], [String.fromCharCode(99,111,109,112,111,110,101,110,116,95,51,95,54,55,0),false ]]);
          let yellowz = 2;
          let cornerkickN = true;
          let mbjscommonL = String.fromCharCode(109,101,116,97,115,111,117,110,100,0);
         dplusf = [(mbjscommonL == String.fromCharCode(68,0) ? mbjscommonL.length : directa.length)];
         inouttargetredh = long_h_8.size > 52 && cornerkickN;
         long_h_8.set(`${yellowz}`, yellowz);
         cornerkickN = !inouttargetredh;
         if (containers) {
            break;
         }
      } while (((2 >> (Math.min(3, loadingA.length))) < 1 && 4 < (loadingA.length >> (Math.min(Math.abs(2), 5)))) && containers);
          let refresht: Map<any, any> = new Map([[String.fromCharCode(118,115,101,114,118,105,99,101,95,110,95,56,50,0),true ], [String.fromCharCode(108,95,49,53,95,103,117,116,115,0),true ]]);
          let rules1 = String.fromCharCode(100,101,99,108,116,121,112,101,0);
         holderO.set(`${loadingA.length}`, loadingA.length * 3);
         refresht.set(rules1, refresht.size);
         rules1 += `${rules1.length + refresht.size}`;
      typingK = `${holderO.size}`;
      if (detailsV) {
         break;
      }
   } while (((videoe.length - 1) > 2) && detailsV);
      orangeclock3.set(`${teamdetailsbgU.length}`, teamdetailsbgU.length ^ unselectedV.size);
      orangeclock3 = new Map([[`${unselectedV.size}`, 1 ^ unselectedV.size]]);
   if ((videoe.length ^ typingK.length) < 3 && 1 < (3 ^ videoe.length)) {
      videoe = [commentZ.length - footballZ.length];
   }
   for (let z = 0; z < 3; z++) {
       let libfbZ = String.fromCharCode(99,111,108,108,97,116,101,0);
       let loading3 = 5.0;
       let goali = String.fromCharCode(100,101,115,99,114,95,121,95,52,55,0);
      let dacccfaabfbcbadeebddcabacdffdbd = 9307026.0 <= loading3;
      do {
         loading3 /= Math.max(3, libfbZ.length >> (Math.min(3, goali.length)));
         if (dacccfaabfbcbadeebddcabacdffdbd) {
            break;
         }
      } while (((libfbZ.length - parseInt(`${loading3}`)) >= 1 || 1 >= (libfbZ.length - parseInt(`${loading3}`))) && dacccfaabfbcbadeebddcabacdffdbd);
      let textlayoutmanageri = goali == String.fromCharCode(99,108,100,52,0);
      do {
         goali = `${parseInt(`${loading3}`)}`;
         if (textlayoutmanageri) {
            break;
         }
      } while ((libfbZ == String.fromCharCode(83,0) || goali == String.fromCharCode(110,0)) && textlayoutmanageri);
       let sheet9 = 5.0;
       let register__e = 0.0;
          let mintegralV = 2.0;
          let lightq = 3.0;
         loading3 += goali.length ^ parseInt(`${loading3}`);
         mintegralV /= Math.max(parseInt(`${lightq}`), 2);
         lightq += parseInt(`${mintegralV}`);
         register__e += libfbZ.length;
      let questK = 8252889.0 <= register__e;
      do {
         register__e /= Math.max(2 - parseInt(`${sheet9}`), 4);
         if (questK) {
            break;
         }
      } while (questK && (libfbZ.length < parseInt(`${register__e}`)));
         register__e += 2 - parseInt(`${sheet9}`);
         libfbZ += `${libfbZ.length >> (Math.min(Math.abs(1), 1))}`;
      let expiredv = 7106789.0 >= loading3;
      do {
         loading3 -= parseInt(`${sheet9}`);
         if (expiredv) {
            break;
         }
      } while (expiredv && (!goali.startsWith(`${loading3}`)));
      typingK += `${(executore == String.fromCharCode(88,0) ? foregroundW.length : executore.length)}`;
   }
   let clock6 = commentZ == String.fromCharCode(107,98,115,0);
   do {
      commentZ += `${valuesw % (Math.max(teamdetailsbgU.length, 5))}`;
      if (clock6) {
         break;
      }
   } while ((libturbomodulejsijniv.length < commentZ.length) && clock6);
   for (let f = 0; f < 2; f++) {
       let inactiveB: Map<any, any> = new Map([[String.fromCharCode(114,101,97,100,115,95,54,95,56,54,0),116], [String.fromCharCode(115,104,97,112,101,115,0),266]]);
       let regengn = 1;
       let iconarrowrightO = String.fromCharCode(116,114,97,105,116,115,0);
       let libcrashsdk3 = 2;
       let predictiona = String.fromCharCode(115,99,104,101,100,117,108,101,0);
         predictiona = `${predictiona.length & 3}`;
      let logoD = iconarrowrightO.length >= 8212389;
      do {
          let downj = true;
          let stylesj = 0.0;
         iconarrowrightO = `${parseInt(`${stylesj}`)}`;
         downj = (!downj ? !downj : !downj);
         stylesj *= (3 % (Math.max(6, (downj ? 1 : 1))));
         if (logoD) {
            break;
         }
      } while (logoD && (4 <= (inactiveB.size / (Math.max(iconarrowrightO.length, 10)))));
         predictiona += `${regengn >> (Math.min(Math.abs(2), 5))}`;
          let iconi = 5.0;
          let arrowz: Array<any> = [358, 832, 491];
         inactiveB.set(iconarrowrightO, iconarrowrightO.length >> (Math.min(4, Math.abs(libcrashsdk3))));
         iconi -= parseInt(`${iconi}`);
         arrowz = [arrowz.length << (Math.min(5, Math.abs(parseInt(`${iconi}`))))];
      for (let p = 0; p < 2; p++) {
          let entryN = 1;
          let field7 = 4.0;
          let logouserg = 2.0;
         regengn += predictiona.length ^ 2;
         entryN += parseInt(`${field7}`);
         field7 *= 2 | parseInt(`${field7}`);
         logouserg /= Math.max(1, parseFloat(`${entryN >> (Math.min(Math.abs(parseInt(`${field7}`)), 1))}`));
      }
          let runtimer = 5;
         inactiveB = new Map([[predictiona, 2]]);
         runtimer ^= 3 * runtimer;
      if ((predictiona.length & libcrashsdk3) <= 1 || (libcrashsdk3 & 1) <= 4) {
         libcrashsdk3 %= Math.max(5, 2 % (Math.max(1, inactiveB.size)));
      }
      for (let z = 0; z < 1; z++) {
         iconarrowrightO = `${iconarrowrightO.length}`;
      }
         regengn += 2 * predictiona.length;
         inactiveB.set(iconarrowrightO, iconarrowrightO.length);
      while ((libcrashsdk3 & iconarrowrightO.length) <= 4 && (iconarrowrightO.length & libcrashsdk3) <= 4) {
         libcrashsdk3 %= Math.max((String.fromCharCode(109,0) == predictiona ? predictiona.length : libcrashsdk3), 3);
         break;
      }
         regengn <<= Math.min(Math.abs(regengn + 3), 5);
          let libsgcorei = true;
         libcrashsdk3 |= predictiona.length;
         libsgcorei = !libsgcorei;
      let graphJ = libcrashsdk3 <= 9054353;
      do {
         libcrashsdk3 *= (String.fromCharCode(87,0) == predictiona ? libcrashsdk3 : predictiona.length);
         if (graphJ) {
            break;
         }
      } while ((5 > libcrashsdk3) && graphJ);
      for (let p = 0; p < 1; p++) {
         inactiveB = new Map([[`${regengn}`, (iconarrowrightO == String.fromCharCode(68,0) ? regengn : iconarrowrightO.length)]]);
      }
      executore = `${iconarrowrightO.length}`;
   }
      executore = `${valuesw | orangeclock3.size}`;
      teamdetailsbgU.push(2);
      typingK = `${footballZ.length}`;
       let setting2 = false;
       let final_lZ = String.fromCharCode(99,97,115,101,115,95,50,95,57,51,0);
       let updatese = String.fromCharCode(99,95,51,95,109,111,100,97,108,0);
      let headerv = String.fromCharCode(53,106,108,110,97,51,0) == updatese;
      do {
         updatese = `${final_lZ.length}`;
         if (headerv) {
            break;
         }
      } while (headerv && (setting2));
          let const_20n: Map<any, any> = new Map([[String.fromCharCode(118,97,110,99,0),39], [String.fromCharCode(115,116,99,111,0),464], [String.fromCharCode(109,97,116,101,114,105,97,108,105,122,101,95,104,95,52,55,0),34]]);
          let currentR = 0;
          let shirt4: Map<any, any> = new Map([[String.fromCharCode(115,97,100,100,0),497], [String.fromCharCode(119,95,54,95,99,97,110,99,101,108,0),324]]);
         final_lZ += `${((setting2 ? 4 : 4))}`;
         const_20n = new Map([[`${shirt4.size}`, 2]]);
         currentR <<= Math.min(Math.abs(shirt4.size | 2), 2);
      libturbomodulejsijniv = [scrollview9.size >> (Math.min(Math.abs(unselectedV.size), 1))];
   while (4 < (1 ^ teamdetailsbgU.length) && (1 ^ commentZ.length) < 1) {
      commentZ = `${teamdetailsbgU.length}`;
      break;
   }
   for (let d = 0; d < 3; d++) {
       let register_7gW = 5.0;
       let iconnointernetp = false;
       let termsy = 5.0;
       let defaultprofilepic0 = String.fromCharCode(116,106,98,101,110,99,104,116,101,115,116,95,53,95,51,50,0);
       let moviesC = true;
         termsy /= Math.max(((iconnointernetp ? 4 : 5)), 4);
      for (let a = 0; a < 1; a++) {
         iconnointernetp = 54.86 <= termsy;
      }
      if (2.82 < (parseFloat(`${defaultprofilepic0.length}`) * register_7gW) && (3 | defaultprofilepic0.length) < 2) {
          let videojsZ = String.fromCharCode(110,117,109,101,114,97,108,115,0);
          let componentq = false;
          let notificationfillemptyF = 4;
          let flyerH = 3.0;
         register_7gW *= parseFloat(`${defaultprofilepic0.length % (Math.max(2, notificationfillemptyF))}`);
         videojsZ = `${(3 % (Math.max(2, (componentq ? 4 : 1))))}`;
         componentq = videojsZ.length < 20 || !componentq;
         notificationfillemptyF ^= (parseInt(`${flyerH}`) & (componentq ? 3 : 3));
         flyerH *= parseFloat(`${videojsZ.length}`);
      }
       let huaweiE = 1.0;
      while (iconnointernetp) {
         register_7gW *= (parseFloat(`${defaultprofilepic0.length & (moviesC ? 1 : 2)}`));
         break;
      }
      for (let w = 0; w < 1; w++) {
         moviesC = String.fromCharCode(99,0) == defaultprofilepic0;
      }
      if (4 < defaultprofilepic0.length) {
          let subtexte = 5.0;
          let iconsubssuccessY = String.fromCharCode(100,97,105,0);
          let webviewr: Map<any, any> = new Map([[String.fromCharCode(105,110,116,101,114,97,99,116,105,111,110,115,0),498], [String.fromCharCode(121,95,56,48,95,112,114,105,118,107,101,121,0),232]]);
         moviesC = (parseInt(`${subtexte}`) - iconsubssuccessY.length) <= 94;
         subtexte *= webviewr.size % (Math.max(1, 1));
         iconsubssuccessY = "1";
      }
      for (let u = 0; u < 1; u++) {
          let emptyt = String.fromCharCode(111,112,101,110,101,114,95,56,95,55,0);
          let confirmationh: Array<any> = [81, 471, 198];
         register_7gW *= parseFloat(`${parseInt(`${termsy}`)}`);
         emptyt += `${3 << (Math.min(4, emptyt.length))}`;
         confirmationh = [(String.fromCharCode(122,0) == emptyt ? emptyt.length : confirmationh.length)];
      }
      let matchactiveL = iconnointernetp ? !iconnointernetp : iconnointernetp;
      do {
          let select3: Map<any, any> = new Map([[String.fromCharCode(103,114,97,110,117,108,97,114,0),true ], [String.fromCharCode(100,101,115,101,108,101,99,116,101,100,0),true ]]);
          let robotoc: Map<any, any> = new Map([[String.fromCharCode(115,121,110,99,109,97,114,107,101,114,0),String.fromCharCode(99,111,109,112,97,114,101,112,111,119,95,97,95,57,50,0)], [String.fromCharCode(109,112,101,103,97,117,100,105,111,100,101,99,116,97,98,0),String.fromCharCode(112,111,114,116,101,114,95,100,95,49,52,0)]]);
          let detailj = 1.0;
          let dragr = 1.0;
          let abidetect1: Map<any, any> = new Map([[String.fromCharCode(114,101,112,97,105,110,116,0),825], [String.fromCharCode(99,104,101,99,107,108,105,110,101,0),10]]);
         iconnointernetp = 41.93 <= detailj;
         select3 = new Map([[`${abidetect1.size}`, 3 & abidetect1.size]]);
         robotoc = new Map([[`${robotoc.size}`, abidetect1.size - robotoc.size]]);
         detailj *= parseInt(`${dragr}`);
         dragr -= robotoc.size / (Math.max(4, parseInt(`${dragr}`)));
         if (matchactiveL) {
            break;
         }
      } while ((4.27 >= (3.69 / (Math.max(6, register_7gW))) && register_7gW >= 3.69) && matchactiveL);
       let confirmationz = String.fromCharCode(111,112,116,105,109,105,122,101,100,0);
      if ((1.45 / (Math.max(1, termsy))) >= 5.52) {
          let countdowni = 1;
          let infot = 4.0;
          let plusb = String.fromCharCode(116,114,117,110,99,112,97,115,115,101,115,0);
          let backicond = 0;
         termsy -= (String.fromCharCode(73,0) == confirmationz ? confirmationz.length : backicond);
         countdowni /= Math.max((plusb == String.fromCharCode(70,0) ? parseInt(`${infot}`) : plusb.length), 1);
         infot /= Math.max(1, (parseFloat(`${String.fromCharCode(73,0) == plusb ? parseInt(`${infot}`) : plusb.length}`)));
         backicond += 1 | countdowni;
      }
         termsy += parseInt(`${huaweiE}`);
         termsy *= 2;
      if ((huaweiE * 1.89) < 4.21) {
         iconnointernetp = defaultprofilepic0.length >= 65;
      }
          let guideK = 5;
          let typingS: Map<any, any> = new Map([[String.fromCharCode(102,108,97,99,0),String.fromCharCode(114,97,108,102,0)], [String.fromCharCode(100,105,97,108,108,101,100,0),String.fromCharCode(118,105,115,105,116,0)]]);
          let rulesp = 1.0;
         register_7gW *= (parseFloat(`${parseInt(`${rulesp}`) ^ (iconnointernetp ? 2 : 4)}`));
         guideK %= Math.max(3, 1);
         typingS.set(`${guideK}`, 2);
         rulesp -= typingS.size;
      executore = `${unselectedV.size}`;
   }
   let libjsijniprofilere3 = String.fromCharCode(57,113,115,57,116,53,54,108,49,100,0) == footballZ;
   do {
      footballZ += "1";
      if (libjsijniprofilere3) {
         break;
      }
   } while ((commentZ != String.fromCharCode(85,0) && footballZ != String.fromCharCode(83,0)) && libjsijniprofilere3);
   let placeholderm = orangeclock3.size <= 9781586;
   do {
      orangeclock3 = new Map([[`${videoe.length}`, footballZ.length + videoe.length]]);
      if (placeholderm) {
         break;
      }
   } while ((orangeclock3.size > 4) && placeholderm);
   while ((1 << (Math.min(2, executore.length))) <= 2 && 5 <= (1 << (Math.min(2, executore.length)))) {
       let analyticsH = false;
       let videoW = String.fromCharCode(104,113,100,115,112,0);
       let station6 = 3;
       let downarrow0 = true;
         station6 %= Math.max(2, videoW.length & 2);
      if (!analyticsH) {
         analyticsH = videoW.length < 100;
      }
         station6 += station6 + 2;
          let humiditym = 4;
          let modey = false;
          let zhubo8: Array<any> = [357, 71];
         downarrow0 = downarrow0 && humiditym == 43;
         humiditym <<= Math.min(5, zhubo8.length);
         modey = (((!modey ? 44 : zhubo8.length) << (Math.min(zhubo8.length, 3))) > 44);
      let codegenc = analyticsH ? !analyticsH : analyticsH;
      do {
         analyticsH = !analyticsH || station6 == 30;
         if (codegenc) {
            break;
         }
      } while (codegenc && (4 > (2 - station6) && station6 > 2));
      let searchd = station6 >= 8603741;
      do {
         station6 |= 1;
         if (searchd) {
            break;
         }
      } while ((station6 == 2) && searchd);
      for (let f = 0; f < 1; f++) {
         station6 ^= (1 - (analyticsH ? 3 : 2));
      }
      for (let i = 0; i < 1; i++) {
         analyticsH = downarrow0;
      }
      if (!downarrow0) {
         station6 ^= ((downarrow0 ? 3 : 5) / (Math.max(4, station6)));
      }
      while (!downarrow0) {
         downarrow0 = videoW.endsWith(`${station6}`);
         break;
      }
         analyticsH = !videoW.startsWith(`${analyticsH}`);
         analyticsH = station6 > videoW.length;
      teamdetailsbgU = [station6];
      break;
   }
   while (1 <= (2 | teamdetailsbgU.length)) {
      foregroundW = `${libturbomodulejsijniv.length}`;
      break;
   }
   for (let r = 0; r < 3; r++) {
       let jnewinterstitialr = true;
       let libreactperfloggerjnia = 2.0;
       let defaultroombgp = String.fromCharCode(101,108,105,103,105,98,108,101,95,97,95,55,0);
       let memberh = String.fromCharCode(99,111,111,107,105,101,95,102,95,55,51,0);
       let actionsg: Map<any, any> = new Map([[String.fromCharCode(99,111,109,112,101,110,115,97,116,101,95,57,95,51,52,0),false ], [String.fromCharCode(104,105,101,114,95,107,95,56,53,0),false ]]);
      for (let p = 0; p < 1; p++) {
         memberh = `${2 * actionsg.size}`;
      }
         memberh += `${parseInt(`${libreactperfloggerjnia}`) >> (Math.min(4, Math.abs(3)))}`;
          let telemetryV = String.fromCharCode(110,101,103,97,116,105,118,101,95,98,95,56,56,0);
          let canvasn: Array<any> = [244, 965];
         libreactperfloggerjnia /= Math.max(3, canvasn.length);
         telemetryV += `${telemetryV.length * telemetryV.length}`;
         canvasn = [telemetryV.length];
         libreactperfloggerjnia /= Math.max(4, parseInt(`${libreactperfloggerjnia}`) + actionsg.size);
      while (defaultroombgp.length > 1) {
         jnewinterstitialr = memberh.length <= parseInt(`${libreactperfloggerjnia}`);
         break;
      }
          let subbasketballplayera = String.fromCharCode(111,110,101,115,95,107,95,50,55,0);
         memberh += "1";
         subbasketballplayera += "3";
         defaultroombgp = `${((jnewinterstitialr ? 2 : 3) | actionsg.size)}`;
       let topicc = String.fromCharCode(119,95,49,49,95,119,101,98,99,97,109,0);
         topicc = `${defaultroombgp.length}`;
      if (defaultroombgp.endsWith(`${topicc.length}`)) {
          let hearte = 2.0;
         defaultroombgp += `${parseInt(`${hearte}`) / 3}`;
      }
          let reactnavigationh = String.fromCharCode(114,117,108,101,115,0);
          let plashf = String.fromCharCode(100,101,116,97,99,104,101,100,0);
          let mergere = String.fromCharCode(97,97,99,99,111,100,101,114,0);
         defaultroombgp += `${3 - mergere.length}`;
         reactnavigationh += "2";
         plashf = `${(String.fromCharCode(73,0) == reactnavigationh ? reactnavigationh.length : plashf.length)}`;
         mergere = `${plashf.length}`;
          let qaagK = String.fromCharCode(121,95,55,57,95,110,97,109,101,115,112,97,99,101,115,0);
          let libavfilterq = 1.0;
          let statsX = String.fromCharCode(105,109,97,103,101,114,111,116,97,116,101,0);
         defaultroombgp = `${(String.fromCharCode(117,0) == memberh ? memberh.length : actionsg.size)}`;
         qaagK = "2";
         libavfilterq *= parseFloat(`${qaagK.length}`);
         statsX += `${parseInt(`${libavfilterq}`)}`;
         topicc += "2";
         libreactperfloggerjnia -= 3;
      if (!topicc.endsWith(`${defaultroombgp.length}`)) {
          let iconarrowrighth = 3.0;
          let chartB = 3;
          let dataS = String.fromCharCode(118,97,108,117,101,100,0);
          let mbnativeadvancedX = 2.0;
          let kickY = String.fromCharCode(114,101,116,105,110,97,0);
         defaultroombgp = "1";
         iconarrowrighth += parseInt(`${mbnativeadvancedX}`);
         chartB &= dataS.length;
         dataS = `${dataS.length << (Math.min(1, Math.abs(chartB)))}`;
         mbnativeadvancedX -= parseFloat(`${chartB ^ kickY.length}`);
         kickY = `${2 << (Math.min(Math.abs(chartB), 4))}`;
      }
      valuesw += 3 & scrollview9.size;
   }
      foregroundW = `${orangeclock3.size | 2}`;
      valuesw >>= Math.min(Math.abs(1 << (Math.min(3, Math.abs(orangeclock3.size)))), 2);
   for (let p = 0; p < 2; p++) {
      executore = `${executore.length}`;
   }
      videoe.push(orangeclock3.size);
   while (2 <= footballZ.length) {
      footballZ = `${orangeclock3.size}`;
      break;
   }
       let dependencies_ = String.fromCharCode(114,104,115,0);
       let overlayF = 4;
       let leftJ = true;
         leftJ = 41 == dependencies_.length && 41 == overlayF;
         leftJ = (((!leftJ ? dependencies_.length : 87) - dependencies_.length) > 87);
          let invitej = 5.0;
         leftJ = 12.39 == invitej;
         dependencies_ = `${dependencies_.length}`;
      while (dependencies_.endsWith(`${leftJ}`)) {
         leftJ = !leftJ;
         break;
      }
         overlayF &= ((leftJ ? 1 : 2) - overlayF);
      let uimanager9 = leftJ ? !leftJ : leftJ;
      do {
         leftJ = 57 <= overlayF;
         if (uimanager9) {
            break;
         }
      } while (uimanager9 && (overlayF > 3));
      if (4 <= (overlayF + 1) && !leftJ) {
         overlayF &= ((leftJ ? 4 : 2) % (Math.max(overlayF, 6)));
      }
      for (let c = 0; c < 1; c++) {
         overlayF <<= Math.min(2, Math.abs(1 - overlayF));
      }
      teamdetailsbgU.push(foregroundW.length | unselectedV.size);
      commentZ = `${2 << (Math.min(5, teamdetailsbgU.length))}`;
      typingK += `${videoe.length % (Math.max(6, scrollview9.size))}`;
   if (videoe.length < typingK.length) {
       let typesT = String.fromCharCode(117,95,54,53,95,112,97,110,101,115,0);
       let floatingQ = String.fromCharCode(111,118,101,114,108,97,121,105,110,103,95,97,95,50,50,0);
       let footballfieldu = 5;
          let mbsplashM = String.fromCharCode(118,101,99,116,0);
          let giftM = false;
          let flyery = String.fromCharCode(114,101,113,117,105,114,105,110,103,95,119,95,48,0);
         floatingQ += "1";
         mbsplashM = `${(mbsplashM == String.fromCharCode(77,0) ? mbsplashM.length : flyery.length)}`;
         giftM = flyery == String.fromCharCode(99,0);
      if (floatingQ.includes(`${typesT.length}`)) {
          let armva5 = String.fromCharCode(98,101,108,111,119,0);
          let listp = 2;
          let tcopy_81: Map<any, any> = new Map([[String.fromCharCode(112,95,54,51,95,99,111,117,110,116,101,114,0),724], [String.fromCharCode(115,116,114,102,95,121,95,53,56,0),736]]);
          let shootyesgoalP: Array<any> = [413, 973];
          let mathQ = 2;
         floatingQ = `${3 ^ footballfieldu}`;
         armva5 += "1";
         listp >>= Math.min(Math.abs(listp), 1);
         tcopy_81.set(`${listp}`, 1);
         shootyesgoalP.push(3);
         mathQ <<= Math.min(2, Math.abs(1));
      }
       let main_m8 = String.fromCharCode(116,105,109,101,105,110,102,111,0);
       let reviewb = String.fromCharCode(100,105,97,108,111,103,0);
      if (!floatingQ.includes(main_m8)) {
          let detailsu: Map<any, any> = new Map([[String.fromCharCode(114,101,106,101,99,116,105,111,110,0),706], [String.fromCharCode(122,95,49,95,114,97,100,102,103,0),396], [String.fromCharCode(103,117,105,100,101,95,50,95,57,53,0),475]]);
          let graphics5 = String.fromCharCode(115,116,105,114,110,103,0);
          let zhuboh = String.fromCharCode(115,115,101,116,0);
          let dangers = 1.0;
          let thailandn = String.fromCharCode(97,112,112,101,110,100,97,98,108,101,95,117,95,57,57,0);
         main_m8 = `${reviewb.length}`;
         detailsu = new Map([[`${detailsu.size}`, (thailandn == String.fromCharCode(83,0) ? thailandn.length : detailsu.size)]]);
         graphics5 += `${(String.fromCharCode(87,0) == graphics5 ? parseInt(`${dangers}`) : graphics5.length)}`;
         zhuboh = `${2 - thailandn.length}`;
         dangers -= (String.fromCharCode(89,0) == graphics5 ? parseInt(`${dangers}`) : graphics5.length);
      }
      if (floatingQ.startsWith(`${main_m8.length}`)) {
          let videocommonR = String.fromCharCode(100,105,118,105,100,111,114,95,107,95,57,54,0);
          let b_imagey = 0.0;
         main_m8 = `${videocommonR.length | reviewb.length}`;
         videocommonR += `${3 / (Math.max(parseInt(`${b_imagey}`), 9))}`;
         b_imagey += parseInt(`${b_imagey}`) | 3;
      }
      let shrinkq = String.fromCharCode(110,116,116,106,102,104,117,52,55,0) == typesT;
      do {
         typesT += `${reviewb.length}`;
         if (shrinkq) {
            break;
         }
      } while ((1 <= floatingQ.length) && shrinkq);
          let dycreatorP = 3.0;
          let private_6gU = 0.0;
          let becomeh = 1.0;
         footballfieldu /= Math.max((reviewb == String.fromCharCode(52,0) ? parseInt(`${dycreatorP}`) : reviewb.length), 5);
         dycreatorP /= Math.max(1 << (Math.min(Math.abs(parseInt(`${private_6gU}`)), 1)), 3);
         private_6gU /= Math.max(parseInt(`${becomeh}`) + 2, 2);
         becomeh *= 2 / (Math.max(3, parseInt(`${private_6gU}`)));
      let temperaturem = typesT == String.fromCharCode(98,112,117,52,103,111,0);
      do {
          let away5: Array<any> = [64, 208, 907];
          let searchbarx: Map<any, any> = new Map([[String.fromCharCode(99,95,49,51,95,114,101,99,101,110,116,0),95], [String.fromCharCode(115,105,122,101,108,101,115,115,0),276]]);
          let stats3 = String.fromCharCode(113,95,57,95,116,111,120,121,122,0);
          let left_ = String.fromCharCode(107,101,121,98,111,97,114,100,0);
          let exampleimageS = String.fromCharCode(112,108,97,110,101,100,0);
         typesT = `${footballfieldu}`;
         away5 = [3 * left_.length];
         searchbarx = new Map([[left_, 3]]);
         stats3 = `${searchbarx.size}`;
         exampleimageS = `${(exampleimageS == String.fromCharCode(116,0) ? left_.length : exampleimageS.length)}`;
         if (temperaturem) {
            break;
         }
      } while (temperaturem && ((typesT.length + footballfieldu) <= 3 || (3 + footballfieldu) <= 2));
      if (floatingQ.length <= 2) {
         footballfieldu >>= Math.min(main_m8.length, 4);
      }
      typingK += `${3 & unselectedV.size}`;
   }
   for (let a = 0; a < 2; a++) {
       let applep: Map<any, any> = new Map([[String.fromCharCode(118,97,114,115,95,97,95,53,48,0),true ], [String.fromCharCode(116,104,97,119,101,100,95,107,95,57,52,0),false ], [String.fromCharCode(105,110,116,101,108,95,53,95,49,51,0),false ]]);
       let imagenetworkerrY = 1.0;
       let zhubon: Map<any, any> = new Map([[String.fromCharCode(119,95,56,51,95,114,101,99,101,105,112,116,115,0),841], [String.fromCharCode(118,95,53,56,95,115,109,115,0),420]]);
       let resend3: Map<any, any> = new Map([[String.fromCharCode(120,95,56,49,95,103,114,101,121,115,0),679], [String.fromCharCode(111,112,116,105,109,105,122,97,116,105,111,110,0),783]]);
         applep = new Map([[`${resend3.size}`, parseInt(`${imagenetworkerrY}`) % 2]]);
         imagenetworkerrY += resend3.size ^ 3;
      while (applep.size > 2) {
          let hookU = 4.0;
          let assistY: Map<any, any> = new Map([[String.fromCharCode(102,109,97,100,100,95,116,95,53,51,0),false ], [String.fromCharCode(107,95,49,50,95,117,110,114,101,115,111,108,118,97,98,108,101,0),false ]]);
         imagenetworkerrY /= Math.max(resend3.size - 2, 3);
         hookU -= parseInt(`${hookU}`) % (Math.max(1, 4));
         assistY = new Map([[`${assistY.size}`, parseInt(`${hookU}`) << (Math.min(Math.abs(2), 4))]]);
         break;
      }
         zhubon.set(`${zhubon.size}`, zhubon.size & resend3.size);
          let downloadedz: Array<any> = [307, 929];
          let gpayX: Map<any, any> = new Map([[String.fromCharCode(112,101,114,109,105,115,115,105,111,110,0),169], [String.fromCharCode(110,111,110,95,115,95,52,56,0),885], [String.fromCharCode(119,95,52,50,95,103,101,111,103,114,97,112,104,105,99,97,108,0),343]]);
          let userC = String.fromCharCode(110,115,117,112,112,111,114,116,101,100,0);
         zhubon.set(`${downloadedz.length}`, 1);
         downloadedz.push(userC.length);
         gpayX.set(`${userC}`, 3 + gpayX.size);
         imagenetworkerrY -= parseInt(`${imagenetworkerrY}`) - 3;
      while (5.31 > (1.12 * imagenetworkerrY) || 1.97 > (imagenetworkerrY * 1.12)) {
         imagenetworkerrY *= parseInt(`${imagenetworkerrY}`) + applep.size;
         break;
      }
      for (let v = 0; v < 2; v++) {
         applep = new Map([[`${resend3.size}`, 1]]);
      }
      while ((zhubon.size / (Math.max(8, parseInt(`${imagenetworkerrY}`)))) > 5) {
         imagenetworkerrY -= 2;
         break;
      }
          let iconnewsshareF: Array<any> = [453, 498];
          let datax: Array<any> = [876, 822];
          let materialt = String.fromCharCode(99,104,97,116,115,0);
         zhubon.set(`${imagenetworkerrY}`, 1);
         iconnewsshareF.push(2 << (Math.min(5, materialt.length)));
         datax.push(datax.length);
         materialt = `${datax.length + iconnewsshareF.length}`;
         imagenetworkerrY /= Math.max(1, parseInt(`${imagenetworkerrY}`));
         applep.set(`${zhubon.size}`, resend3.size * 3);
      typingK += `${applep.size * 2}`;
   }
   while (4 < typingK.length) {
       let libfbjniI = false;
       let dependency7 = String.fromCharCode(115,105,122,101,115,0);
       let iconclosewhitebgw = 4;
      for (let p = 0; p < 2; p++) {
         libfbjniI = dependency7.length == 75 && libfbjniI;
      }
      let fullQ = libfbjniI ? !libfbjniI : libfbjniI;
      do {
         libfbjniI = iconclosewhitebgw <= 1;
         if (fullQ) {
            break;
         }
      } while (fullQ && (2 > dependency7.length));
      while (libfbjniI) {
         iconclosewhitebgw -= (String.fromCharCode(97,0) == dependency7 ? dependency7.length : (libfbjniI ? 1 : 4));
         break;
      }
      while ((iconclosewhitebgw * dependency7.length) == 5 && (iconclosewhitebgw * 5) == 5) {
         dependency7 += `${(String.fromCharCode(82,0) == dependency7 ? dependency7.length : iconclosewhitebgw)}`;
         break;
      }
      if (1 >= (dependency7.length << (Math.min(Math.abs(5), 2))) || 2 >= (5 << (Math.min(1, Math.abs(iconclosewhitebgw))))) {
         iconclosewhitebgw >>= Math.min(2, Math.abs(3 | dependency7.length));
      }
       let sportq = 3.0;
       let libtan_ = 2.0;
      if (1.95 > (2.86 / (Math.max(7, libtan_))) || 2.86 > libtan_) {
          let componentregistryo = 1.0;
          let pause7 = String.fromCharCode(119,114,105,116,101,116,114,117,110,99,0);
          let m_positionk = 4;
          let floatingj = String.fromCharCode(114,97,100,105,117,115,0);
          let more9 = 1;
         libtan_ -= parseFloat(`${1}`);
         componentregistryo -= m_positionk >> (Math.min(Math.abs(1), 4));
         pause7 += `${parseInt(`${componentregistryo}`) + pause7.length}`;
         m_positionk %= Math.max(5, parseInt(`${componentregistryo}`) | pause7.length);
         floatingj = `${1 * floatingj.length}`;
         more9 /= Math.max(2, 2);
      }
      let nativemoduleo = String.fromCharCode(101,99,97,53,115,120,112,106,99,0) == dependency7;
      do {
         dependency7 = `${1 >> (Math.min(2, dependency7.length))}`;
         if (nativemoduleo) {
            break;
         }
      } while ((!dependency7.includes(`${libfbjniI}`)) && nativemoduleo);
          let detailsD = true;
          let calendarY = String.fromCharCode(114,95,51,51,95,98,105,119,101,105,103,104,116,0);
         dependency7 += `${dependency7.length}`;
         detailsD = !calendarY.includes(`${detailsD}`);
         calendarY += `${((detailsD ? 3 : 1))}`;
      typingK = `${libturbomodulejsijniv.length * teamdetailsbgU.length}`;
      break;
   }
   for (let q = 0; q < 1; q++) {
       let guide4: Map<any, any> = new Map([[String.fromCharCode(114,101,99,111,109,109,101,110,100,0),125], [String.fromCharCode(116,97,103,103,101,114,0),119]]);
       let shootyesgoalf = String.fromCharCode(112,114,111,109,111,116,101,0);
      while ((2 << (Math.min(1, shootyesgoalf.length))) <= 4) {
         guide4 = new Map([[`${guide4.size}`, guide4.size - 1]]);
         break;
      }
      for (let s = 0; s < 1; s++) {
         guide4.set(shootyesgoalf, 2 | guide4.size);
      }
      orangeclock3 = new Map([[`${videoe.length}`, (footballZ == String.fromCharCode(100,0) ? footballZ.length : videoe.length)]]);
   }
 },
  isTabFocus = false,
}: wwIndexDice) => {
  const { colors, textVariants, spacing } = useTheme();
  const vodReducer: wwMbjscommon = useAppSelector(
    ({ vodReducer }: wwEighteenShirt) => vodReducer
  );
  const history = vodReducer.history.filter((e) => !e.isAdultVideo);
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const [totalPage, setTotalPage] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [results, setResults] = useState<Array<wwFirebase>>([]);
  const [bannerAd, setBannerAd] = useState<wwSendBuild>();
  const [bannerAdList, setBannerAdList] = useState<Array<wwSendBuild>>([]);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const carouselRef = useRef<any>();
  
  const [width, setWidth] = useState(Dimensions.get("window").width);
  const [imgRatio, setImgRatio] = useState(1.883);
  const userState = useSelector<wwVertical>("userReducer");
  const isVip = wwBodan.isVip(userState.user);
  const [refPosition, setRefPosition] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });
  const componentRef = useRef<View>(null); 
  const [vipGuideModal, setVipGuideModal] = useState(false);
  const [distanceToBottom, setDistanceToBottom] = useState<number>(0); 
  const [sportList, setSportList] = useState<Array<wwInfo>>([]);

  const screenState: screenModel = useAppSelector(
    ({ screenReducer }) => screenReducer
  );

  useEffect(() => {
    if (screenState.isHomeGuideShown != true && !wwBodan.fakeIsVip(userState.user)) {
      
      setVipGuideModal(true);
      
    }
    
  }, []);

  useEffect(() => {
    setWidth(Number(Dimensions.get("window").width));

    if (data.carousel.length > 0) {
      Image.getSize(data.carousel[0].carousel_pic_mobile, (w, h) => {
        setImgRatio(w / h);
      });
    }
  }, []);

  useEffect(() => {
    handleTabletFold();
    fetchMatchData();
    
  }, []);

  const initFirebase = async () => {
       let libavcodec2 = 2;
    let libanet: Array<any> = [String.fromCharCode(101,95,55,56,95,104,101,97,118,121,0), String.fromCharCode(116,95,50,55,95,99,97,110,0)];
    let castingA = 0;
    let libavcodecD = String.fromCharCode(115,113,117,101,101,122,101,95,120,95,50,52,0);
    let malaysiaj = String.fromCharCode(97,114,99,104,101,116,121,112,101,95,107,95,56,0);
    let phoneZ: Map<any, any> = new Map([[String.fromCharCode(107,95,52,53,95,112,114,101,102,111,114,109,97,116,116,101,100,0),String.fromCharCode(97,99,118,112,0)], [String.fromCharCode(114,103,98,97,0),String.fromCharCode(109,115,117,98,95,97,95,55,48,0)], [String.fromCharCode(97,100,118,97,110,99,101,0),String.fromCharCode(99,117,114,116,97,105,110,115,0)]]);
    let rulesK = 5.0;
    let progressZ: Map<any, any> = new Map([[String.fromCharCode(116,95,56,95,114,101,99,114,101,97,116,101,0),false ], [String.fromCharCode(111,112,116,105,109,105,115,109,0),false ]]);
    let rewardA = String.fromCharCode(99,97,112,95,112,95,54,51,0);
    let modity7: Map<any, any> = new Map([[String.fromCharCode(101,115,116,105,109,97,116,105,110,103,0),true ], [String.fromCharCode(120,95,51,53,95,112,114,111,98,108,101,109,0),true ]]);
    let dependenciesI = 1.0;
    let runtimeL = 2.0;
       let schedulerY: Map<any, any> = new Map([[String.fromCharCode(98,105,116,108,105,110,101,99,104,117,110,107,121,0),true ], [String.fromCharCode(108,117,116,121,117,118,95,118,95,49,0),true ]]);
       let frame_he = 1;
       let shirtk = String.fromCharCode(118,111,114,98,105,115,102,108,111,97,116,102,108,111,97,116,95,116,95,51,56,0);
         schedulerY.set(`${frame_he}`, 2 - frame_he);
         schedulerY = new Map([[`${schedulerY.size}`, 2 & shirtk.length]]);
         frame_he *= (String.fromCharCode(57,0) == shirtk ? schedulerY.size : shirtk.length);
      while (schedulerY.get(`${frame_he}`) == null) {
         schedulerY = new Map([[`${schedulerY.size}`, schedulerY.size * frame_he]]);
         break;
      }
      while (!Array.from(schedulerY.values()).includes(frame_he)) {
         frame_he &= 2 ^ frame_he;
         break;
      }
       let valuesV = String.fromCharCode(104,114,115,115,0);
      while ((frame_he ^ 5) < 2) {
         frame_he <<= Math.min(Math.abs(frame_he), 1);
         break;
      }
      if (3 < valuesV.length) {
          let leftj = String.fromCharCode(115,105,103,110,117,109,0);
         shirtk = `${(shirtk == String.fromCharCode(110,0) ? valuesV.length : shirtk.length)}`;
         leftj = `${leftj.length}`;
      }
         schedulerY.set(`${frame_he}`, 1);
      malaysiaj = "1";
   while (Array.from(progressZ.values()).includes(libanet.length)) {
      libanet = [libavcodec2 << (Math.min(Math.abs(phoneZ.size), 3))];
      break;
   }
      libanet = [malaysiaj.length];
      castingA |= (String.fromCharCode(66,0) == libavcodecD ? parseInt(`${rulesK}`) : libavcodecD.length);
      rulesK /= Math.max(3, parseFloat(`${1}`));
   if ((1 - phoneZ.size) > 5) {
      phoneZ.set(libavcodecD, 1);
   }

    try {

   while (5 == libavcodec2) {
      libavcodec2 /= Math.max(5, phoneZ.size << (Math.min(Math.abs(3), 4)));
      break;
   }
      malaysiaj += `${3 + phoneZ.size}`;
      progressZ.set(malaysiaj, parseInt(`${rulesK}`) / 2);
   let alertM = castingA <= 8216376;
   do {
      castingA += malaysiaj.length;
      if (alertM) {
         break;
      }
   } while (alertM && ((5 / (Math.max(1, castingA))) < 1));
   let upgradeG = 7611119 <= castingA;
   do {
      castingA -= (malaysiaj == String.fromCharCode(52,0) ? libanet.length : malaysiaj.length);
      if (upgradeG) {
         break;
      }
   } while (upgradeG && (!libavcodecD.includes(`${castingA}`)));
   let bgvipxvod4 = 9346349 <= phoneZ.size;
   do {
      phoneZ.set(rewardA, libavcodecD.length);
      if (bgvipxvod4) {
         break;
      }
   } while ((3 < (phoneZ.size + 3)) && bgvipxvod4);
      await wwReducerConfigure.checkPermissionAndGetoken();

   let teamdetailsbgT = libanet.length <= 7657504;
   do {
      libanet = [castingA - rewardA.length];
      if (teamdetailsbgT) {
         break;
      }
   } while (teamdetailsbgT && ((castingA ^ 2) == 4));
   let bottom3 = malaysiaj == String.fromCharCode(107,57,51,56,113,109,105,95,107,121,0);
   do {
       let macaua = String.fromCharCode(102,114,97,99,0);
         macaua += `${macaua.length}`;
          let defaultplayerimgz = String.fromCharCode(98,95,52,49,0);
         macaua += "1";
         defaultplayerimgz += `${defaultplayerimgz.length & 3}`;
       let foregroundD = String.fromCharCode(115,97,109,105,0);
      malaysiaj = `${(macaua == String.fromCharCode(122,0) ? rewardA.length : macaua.length)}`;
      if (bottom3) {
         break;
      }
   } while (bottom3 && (rewardA != malaysiaj));
   if (2 == (modity7.size - libanet.length) && 2 == (2 - modity7.size)) {
      libanet = [1];
   }
      phoneZ = new Map([[`${modity7.size}`, castingA / 2]]);
   while (rewardA.length < modity7.size) {
      rewardA += `${3 * modity7.size}`;
      break;
   }
   while (3 <= (malaysiaj.length / (Math.max(2, 10)))) {
       let greenr = 5.0;
      if (3.9 >= (greenr + greenr)) {
         greenr -= parseFloat(`${parseInt(`${greenr}`) / (Math.max(parseInt(`${greenr}`), 8))}`);
      }
       let header9 = 2.0;
       let settingH = 0.0;
      for (let z = 0; z < 3; z++) {
          let sentryS = 2.0;
          let photoU = 0.0;
          let arrowrightL = String.fromCharCode(112,95,50,52,95,103,108,111,115,115,0);
         header9 -= parseFloat(`${arrowrightL.length}`);
         sentryS -= parseInt(`${photoU}`);
         photoU -= parseFloat(`${parseInt(`${sentryS}`)}`);
         arrowrightL = `${parseInt(`${photoU}`) ^ parseInt(`${sentryS}`)}`;
      }
      malaysiaj = `${2 ^ parseInt(`${greenr}`)}`;
      break;
   }
      wwReducerConfigure.subscibeToTopic("insidertest");
    } catch (err) {

      rewardA += `${parseInt(`${dependenciesI}`)}`;
       let foreground3 = String.fromCharCode(98,117,105,108,116,0);
       let with_73 = String.fromCharCode(98,108,111,99,107,115,105,122,101,0);
          let exampleimage3 = 5.0;
         foreground3 = "1";
         exampleimage3 *= parseFloat(`${parseInt(`${exampleimage3}`) ^ 3}`);
       let mailD = String.fromCharCode(99,111,101,114,99,101,0);
       let baselineL = 2.0;
       let librrcb = 3.0;
          let sliderD = true;
          let transferF = 0;
         mailD += `${1 % (Math.max(2, transferF))}`;
         sliderD = !sliderD || !sliderD;
         transferF ^= 1;
       let memberx = String.fromCharCode(121,95,57,56,95,108,116,97,98,108,101,0);
          let updates5: Map<any, any> = new Map([[String.fromCharCode(98,105,116,112,108,97,110,97,114,99,104,117,110,107,121,95,56,95,55,0),480], [String.fromCharCode(114,111,108,108,0),572], [String.fromCharCode(112,104,121,115,0),518]]);
         with_73 = `${2 + updates5.size}`;
      dependenciesI -= parseFloat(`${malaysiaj.length}`);
   let viewerK = progressZ.size >= 9314797;
   do {
      progressZ.set(`${malaysiaj}`, phoneZ.size);
      if (viewerK) {
         break;
      }
   } while (viewerK && ((progressZ.size * 3) >= 2 && 3 >= (progressZ.size * 3)));
   if (2 == (malaysiaj.length << (Math.min(Math.abs(1), 3))) && (malaysiaj.length << (Math.min(Math.abs(1), 3))) == 2) {
       let baseE: Array<any> = [861, 518, 825];
       let libfbjni9 = String.fromCharCode(117,95,57,49,95,97,114,111,117,110,100,0);
       let currentU = 4.0;
       let terms8 = String.fromCharCode(115,99,111,112,101,115,0);
       let faviconW = 4.0;
         libfbjni9 = `${libfbjni9.length}`;
      let abidetect1 = libfbjni9.length <= 9376971;
      do {
         libfbjni9 += `${parseInt(`${faviconW}`) / (Math.max(baseE.length, 6))}`;
         if (abidetect1) {
            break;
         }
      } while ((parseFloat(`${libfbjni9.length}`) <= faviconW) && abidetect1);
      if (1 > (terms8.length / (Math.max(2, 8)))) {
         currentU *= parseFloat(`${parseInt(`${faviconW}`)}`);
      }
       let containert = 0.0;
      for (let c = 0; c < 1; c++) {
         currentU /= Math.max(parseFloat(`${libfbjni9.length}`), 1);
      }
      for (let z = 0; z < 3; z++) {
          let telegramc = String.fromCharCode(111,117,116,0);
          let libjsinspectorO = false;
         faviconW /= Math.max(parseFloat(`${parseInt(`${faviconW}`) - baseE.length}`), 2);
         telegramc += `${((libjsinspectorO ? 1 : 4))}`;
         libjsinspectorO = !libjsinspectorO && telegramc.length <= 79;
      }
          let math1 = 1.0;
         containert *= parseInt(`${faviconW}`);
         math1 *= parseFloat(`${parseInt(`${math1}`)}`);
         currentU -= parseFloat(`${2}`);
      if (!libfbjni9.startsWith(`${terms8.length}`)) {
         terms8 = `${libfbjni9.length / (Math.max(1, parseInt(`${containert}`)))}`;
      }
         currentU *= (parseFloat(`${terms8 == String.fromCharCode(104,0) ? baseE.length : terms8.length}`));
         currentU += parseFloat(`${parseInt(`${faviconW}`)}`);
      malaysiaj = `${libfbjni9.length * 2}`;
   }
       let chatj: Array<any> = [String.fromCharCode(97,112,112,114,111,120,105,109,97,116,105,111,110,0), String.fromCharCode(99,105,114,99,95,110,95,49,54,0)];
       let libturbomodulejsijniJ = String.fromCharCode(99,104,111,111,115,105,110,103,95,99,95,51,50,0);
       let whiteanimationliveB = String.fromCharCode(102,95,54,55,95,112,114,111,112,97,103,97,116,101,0);
      while (whiteanimationliveB.length >= 3) {
         whiteanimationliveB += `${1 + libturbomodulejsijniJ.length}`;
         break;
      }
       let headera = 3.0;
      libavcodecD += `${3 >> (Math.min(Math.abs(libavcodec2), 2))}`;
      chatj.push(chatj.length ^ 3);
      castingA &= (rewardA == String.fromCharCode(49,0) ? parseInt(`${dependenciesI}`) : rewardA.length);
      console.log("Firebase init failed", err);
    }
  };

  const [deviceName, setDeviceName] = useState("");

  DeviceInfo.getDeviceName().then((d) => {
    setDeviceName(d.toLowerCase());
  });
  const handleTabletFold = async () => {
       let holdero: Map<any, any> = new Map([[String.fromCharCode(117,95,54,53,95,98,117,108,108,101,116,0),true ], [String.fromCharCode(99,115,119,97,112,0),true ]]);
    let completeP = false;
    let profileinactiveD: Map<any, any> = new Map([[String.fromCharCode(101,120,116,114,97,99,116,101,100,0),String.fromCharCode(115,117,98,110,111,100,101,0)], [String.fromCharCode(112,95,52,53,95,97,117,116,111,99,111,109,109,105,116,0),String.fromCharCode(116,108,117,116,0)], [String.fromCharCode(117,110,97,108,105,103,110,101,100,95,101,95,53,49,0),String.fromCharCode(108,111,111,112,105,110,103,0)]]);
    let classesK = false;
    let agreementF = 2;
    let injurys = true;
    let libavformatm = String.fromCharCode(109,95,55,48,95,99,108,105,101,110,116,0);
    let defaultfootballbgP = 5.0;
    let uploadO = String.fromCharCode(105,110,116,101,114,115,101,99,116,105,111,110,95,53,95,51,56,0);
    let xadsdkX: Array<any> = [29, 830];
    let uploadi = String.fromCharCode(100,114,97,105,110,95,49,95,56,48,0);
    let middle8 = String.fromCharCode(105,100,101,110,116,105,116,105,121,0);
      injurys = (!completeP ? classesK : completeP);
      completeP = 87 < agreementF && !injurys;
      agreementF -= profileinactiveD.size % 2;

    Dimensions.addEventListener("change", (e) => {

   for (let y = 0; y < 1; y++) {
      classesK = (!completeP ? injurys : completeP);
   }
   while ((3 ^ profileinactiveD.size) >= 3) {
      profileinactiveD = new Map([[`${profileinactiveD.size}`, profileinactiveD.size % 2]]);
      break;
   }
   while (injurys || !completeP) {
      injurys = uploadO.length > 65;
      break;
   }
      const includesKeywords = [
        "flip",
        "fold",
        "mate x3",
        "mate xs",
      ].some((keyword) => deviceName.includes(keyword));

   if (4 < libavformatm.length && !injurys) {
      injurys = 12.58 >= defaultfootballbgP;
   }
      profileinactiveD.set(`${completeP}`, ((injurys ? 5 : 5) % (Math.max((completeP ? 5 : 5), 1))));
   while (3 >= (uploadO.length % 2) && 2 >= (agreementF % (Math.max(8, uploadO.length)))) {
      agreementF &= 1;
      break;
   }
      if (DeviceInfo.isTablet() || includesKeywords) {

   while (!injurys) {
      profileinactiveD.set(`${classesK}`, ((classesK ? 4 : 3) ^ 3));
      break;
   }
   if ((2.37 + defaultfootballbgP) <= 3.7 || (defaultfootballbgP + 2.37) <= 4.21) {
      defaultfootballbgP += parseFloat(`${parseInt(`${defaultfootballbgP}`)}`);
   }
   let reactnativeultimatelistviewr = 6082122 <= xadsdkX.length;
   do {
      xadsdkX.push(1 / (Math.max(parseInt(`${defaultfootballbgP}`), 2)));
      if (reactnativeultimatelistviewr) {
         break;
      }
   } while ((uploadi.length >= 5) && reactnativeultimatelistviewr);
        setWidth(Number(Dimensions.get("window").width));

   if ((xadsdkX.length | 1) < 1) {
      libavformatm += `${agreementF}`;
   }
   let settingK = String.fromCharCode(49,119,98,103,95,95,54,119,120,0) == libavformatm;
   do {
       let rewardvideox = 1.0;
      while (4.20 == (rewardvideox / 2.82)) {
         rewardvideox /= Math.max(parseInt(`${rewardvideox}`) << (Math.min(2, Math.abs(2))), 4);
         break;
      }
      while ((rewardvideox * rewardvideox) == 4.32 && 4.61 == (4.32 * rewardvideox)) {
         rewardvideox *= 1 & parseInt(`${rewardvideox}`);
         break;
      }
       let iconnointernetm = String.fromCharCode(118,100,97,115,104,101,114,0);
       let actions5 = String.fromCharCode(112,95,52,57,95,103,105,103,97,98,121,116,101,115,0);
      libavformatm = `${uploadi.length >> (Math.min(1, Math.abs(parseInt(`${rewardvideox}`))))}`;
      if (settingK) {
         break;
      }
   } while (((agreementF << (Math.min(libavformatm.length, 1))) < 1) && settingK);
   if (!libavformatm.includes(`${defaultfootballbgP}`)) {
      libavformatm = `${libavformatm.length}`;
   }
        if (data.carousel.length > 0) {

   for (let i = 0; i < 3; i++) {
      uploadi = `${(parseInt(`${defaultfootballbgP}`) - (completeP ? 3 : 3))}`;
   }
      xadsdkX = [3 ^ libavformatm.length];
      injurys = agreementF >= 87 && !classesK;
          Image.getSize(data.carousel[0].carousel_pic_mobile, (w, h) => {

      injurys = 81 == libavformatm.length;
   while ((3 - libavformatm.length) > 2) {
      libavformatm += `${agreementF}`;
      break;
   }
   for (let z = 0; z < 2; z++) {
       let down8: Array<any> = [474, 365, 258];
       let comments = String.fromCharCode(107,105,108,111,98,121,116,101,0);
      while (comments.endsWith(`${down8.length}`)) {
         comments = `${down8.length}`;
         break;
      }
      while (5 == (2 * down8.length) && (2 * down8.length) == 1) {
          let sortp = 5.0;
          let vietnamy = 2.0;
          let rootx: Array<any> = [442, 426];
          let annerC: Array<any> = [300, 446];
         comments += `${1 ^ rootx.length}`;
         sortp *= parseFloat(`${parseInt(`${vietnamy}`) / 1}`);
         vietnamy /= Math.max(1, 2);
         rootx.push(2);
         annerC = [annerC.length | 1];
         break;
      }
      for (let r = 0; r < 1; r++) {
         comments += `${comments.length << (Math.min(3, down8.length))}`;
      }
      while (!comments.includes(`${down8.length}`)) {
         comments += `${comments.length | 2}`;
         break;
      }
      for (let s = 0; s < 3; s++) {
         comments += `${1 ^ down8.length}`;
      }
         comments = `${down8.length << (Math.min(comments.length, 4))}`;
      defaultfootballbgP /= Math.max((parseFloat(`${(completeP ? 2 : 2) ^ parseInt(`${defaultfootballbgP}`)}`)), 2);
   }
            setImgRatio(w / h);
          });
        }
        handleRefresh();
      }
    });
  };

  
  const handleRefresh = async () => {
       let s_playerv = String.fromCharCode(122,95,55,52,95,107,105,110,100,0);
    let emptyE = String.fromCharCode(107,95,55,53,95,100,114,97,119,105,110,103,0);
    let u_positiond = String.fromCharCode(98,108,111,99,107,113,117,111,116,101,0);
    let statsi: Array<any> = [128, 189];
    let showP = String.fromCharCode(108,95,55,50,0);
    let attributedstringK = 2.0;
    let vietnamI = String.fromCharCode(101,95,55,48,95,99,111,109,112,111,115,101,105,0);
    let iconwatchnowO = 5.0;
    let successF = String.fromCharCode(107,95,52,52,95,115,112,104,101,114,105,99,97,108,0);
    let modal5: Map<any, any> = new Map([[String.fromCharCode(111,95,49,56,95,115,116,105,99,107,0),890], [String.fromCharCode(118,97,108,105,100,97,116,111,114,95,116,95,52,49,0),335], [String.fromCharCode(105,99,111,110,105,99,95,105,95,51,54,0),846]]);
   let filledK = String.fromCharCode(52,119,119,110,0) == emptyE;
   do {
       let sinag = 1.0;
       let weiboM = String.fromCharCode(99,97,110,111,110,95,103,95,52,49,0);
       let favoritew = String.fromCharCode(122,102,114,101,101,0);
      for (let m = 0; m < 3; m++) {
         weiboM = "1";
      }
          let inactiveB = true;
          let notifications = false;
          let internetB = String.fromCharCode(104,111,115,116,115,95,111,95,53,55,0);
         weiboM = `${((inactiveB ? 5 : 3))}`;
         inactiveB = internetB.length <= 48;
         notifications = !internetB.includes(`${notifications}`);
      emptyE = `${vietnamI.length * successF.length}`;
      sinag += 2 + parseInt(`${sinag}`);
      if (filledK) {
         break;
      }
   } while (filledK && (emptyE.length > 1));
       let commentB = String.fromCharCode(109,111,117,116,104,95,115,95,51,0);
       let textinputC = String.fromCharCode(111,95,54,57,95,118,115,110,112,114,105,110,116,102,0);
       let floatingi = String.fromCharCode(118,95,55,51,95,109,97,105,110,0);
         commentB = `${textinputC.length / (Math.max(floatingi.length, 6))}`;
      if (textinputC != String.fromCharCode(115,0) && 1 > commentB.length) {
         textinputC += `${textinputC.length & 3}`;
      }
         commentB = `${floatingi.length << (Math.min(5, textinputC.length))}`;
      if (textinputC != String.fromCharCode(83,0)) {
         commentB = "3";
      }
         textinputC = "3";
      for (let e = 0; e < 3; e++) {
         textinputC += `${textinputC.length}`;
      }
      while (textinputC.includes(floatingi)) {
         textinputC = `${textinputC.length}`;
         break;
      }
       let iconbellactiveA = String.fromCharCode(100,95,49,55,95,115,116,115,115,0);
         iconbellactiveA = `${3 ^ textinputC.length}`;
      statsi = [commentB.length >> (Math.min(Math.abs(2), 4))];
      attributedstringK += parseFloat(`${parseInt(`${iconwatchnowO}`)}`);
   for (let g = 0; g < 1; g++) {
       let applicationZ = true;
       let trashM = true;
       let forml = String.fromCharCode(97,115,115,111,99,105,97,116,101,0);
      for (let u = 0; u < 2; u++) {
         applicationZ = (trashM ? !applicationZ : !trashM);
      }
      if (3 == forml.length) {
         trashM = forml.startsWith(`${applicationZ}`);
      }
      if (forml.length == 3 && !trashM) {
         forml = `${((applicationZ ? 5 : 1) >> (Math.min(forml.length, 4)))}`;
      }
       let long_xK = 1.0;
         forml += `${((trashM ? 2 : 5) - 2)}`;
       let matches9 = String.fromCharCode(100,95,53,56,95,101,120,97,109,112,108,101,0);
       let foundd = String.fromCharCode(98,110,100,101,99,0);
         foundd = `${foundd.length}`;
      while (!forml.includes(`${matches9.length}`)) {
         matches9 = `${((trashM ? 2 : 4) / (Math.max(parseInt(`${long_xK}`), 1)))}`;
         break;
      }
      for (let a = 0; a < 1; a++) {
         foundd = `${(String.fromCharCode(71,0) == forml ? matches9.length : forml.length)}`;
      }
      statsi = [(forml == String.fromCharCode(76,0) ? statsi.length : forml.length)];
   }

    setIsRefreshing(true);

   while (!s_playerv.endsWith(`${attributedstringK}`)) {
      s_playerv += `${parseInt(`${attributedstringK}`)}`;
      break;
   }
   if (4.91 == (attributedstringK * parseFloat(`${showP.length}`)) && 5 == (parseInt(`${attributedstringK}`) * showP.length)) {
      showP = `${parseInt(`${iconwatchnowO}`) - showP.length}`;
   }
   while (1 == (parseInt(`${attributedstringK}`) * successF.length) || (1 * parseInt(`${attributedstringK}`)) == 4) {
      attributedstringK -= parseFloat(`${emptyE.length / (Math.max(5, u_positiond.length))}`);
      break;
   }
      u_positiond = `${vietnamI.length >> (Math.min(5, emptyE.length))}`;
    await onRefresh(0, true);

       let backwardU = 3.0;
       let pointd: Array<any> = [52, 157];
         pointd.push(parseInt(`${backwardU}`));
         pointd.push(pointd.length << (Math.min(3, Math.abs(parseInt(`${backwardU}`)))));
         backwardU /= Math.max(parseInt(`${backwardU}`) & pointd.length, 5);
      while ((1 >> (Math.min(3, pointd.length))) >= 1 && 1 >= (pointd.length * parseInt(`${backwardU}`))) {
         backwardU += pointd.length;
         break;
      }
      while (pointd.includes(backwardU)) {
         pointd.push(pointd.length & 2);
         break;
      }
      for (let w = 0; w < 2; w++) {
          let bdxadsdku = 3;
         pointd.push(parseInt(`${backwardU}`) >> (Math.min(1, Math.abs(2))));
         bdxadsdku -= bdxadsdku;
      }
      s_playerv = `${s_playerv.length % 2}`;
   for (let z = 0; z < 2; z++) {
      emptyE = "1";
   }
      u_positiond = `${s_playerv.length % 2}`;
   let catagoryL = iconwatchnowO <= 6137758.0;
   do {
      iconwatchnowO -= showP.length;
      if (catagoryL) {
         break;
      }
   } while (catagoryL && (5.8 > (iconwatchnowO * 4.39)));

    setTimeout(() => {

       let libjsijniprofilerp: Array<any> = [25, 348];
       let descQ = 3.0;
          let minimizeR: Array<any> = [891, 646, 906];
          let mbsplashy = String.fromCharCode(120,95,51,49,95,99,111,114,101,115,0);
         libjsijniprofilerp.push(mbsplashy.length | 3);
         minimizeR = [2];
         mbsplashy += `${minimizeR.length}`;
      let rewardvideoI = descQ <= 7408065.0;
      do {
         descQ *= libjsijniprofilerp.length % (Math.max(1, 9));
         if (rewardvideoI) {
            break;
         }
      } while (rewardvideoI && (descQ < 5.20));
      for (let a = 0; a < 1; a++) {
          let temps: Map<any, any> = new Map([[String.fromCharCode(100,111,119,110,115,104,105,102,116,95,116,95,51,57,0),244], [String.fromCharCode(108,105,116,101,114,97,108,0),315]]);
          let runtimen = String.fromCharCode(115,101,116,116,105,116,108,101,95,116,95,57,55,0);
          let aboutS = String.fromCharCode(107,101,121,98,117,102,95,121,95,53,55,0);
          let package_dZ = String.fromCharCode(109,105,110,102,0);
         descQ -= 3;
         temps = new Map([[aboutS, 3]]);
         runtimen += `${runtimen.length + 2}`;
         aboutS += `${temps.size}`;
         package_dZ += `${runtimen.length * aboutS.length}`;
      }
      let armvaB = 7863545 <= libjsijniprofilerp.length;
      do {
          let championz = 1.0;
          let defaultprofilepicr = String.fromCharCode(115,104,97,95,119,95,51,56,0);
          let switch_eH = false;
          let footballfielde = 4.0;
          let iconfeedback4 = 3.0;
         libjsijniprofilerp.push(2);
         championz *= (String.fromCharCode(117,0) == defaultprofilepicr ? defaultprofilepicr.length : parseInt(`${iconfeedback4}`));
         switch_eH = !switch_eH;
         footballfielde -= parseFloat(`${defaultprofilepicr.length}`);
         iconfeedback4 *= parseFloat(`${2 % (Math.max(1, parseInt(`${championz}`)))}`);
         if (armvaB) {
            break;
         }
      } while (armvaB && (parseInt(`${descQ}`) < libjsijniprofilerp.length));
       let scrollviewC = String.fromCharCode(118,95,50,57,95,117,110,112,97,99,107,108,111,0);
       let annerd = String.fromCharCode(114,101,97,100,109,101,0);
         descQ += 2 * scrollviewC.length;
      attributedstringK *= parseFloat(`${1}`);
   for (let y = 0; y < 1; y++) {
      vietnamI += "1";
   }
   let send4 = String.fromCharCode(51,98,57,117,0) == vietnamI;
   do {
       let giftO = String.fromCharCode(117,95,56,54,95,101,120,99,101,112,116,105,111,110,115,0);
       let progressa = String.fromCharCode(116,95,55,51,95,97,112,112,101,110,100,97,98,108,101,0);
       let fastforwardp: Map<any, any> = new Map([[String.fromCharCode(106,97,99,111,115,117,98,95,111,95,50,55,0),465], [String.fromCharCode(117,110,100,101,114,114,117,110,95,101,95,52,55,0),912]]);
       let libreanimatedj = String.fromCharCode(100,95,53,50,95,110,97,116,105,118,101,0);
         libreanimatedj = `${fastforwardp.size / (Math.max(libreanimatedj.length, 9))}`;
      if (1 < (libreanimatedj.length + fastforwardp.size)) {
         libreanimatedj += `${fastforwardp.size << (Math.min(Math.abs(3), 5))}`;
      }
      for (let b = 0; b < 1; b++) {
          let splashv = String.fromCharCode(109,105,110,105,109,105,122,101,97,98,108,101,0);
          let whatsapph = 0.0;
          let predictionR = String.fromCharCode(99,111,109,112,108,101,116,101,95,105,95,51,54,0);
          let dependencyX = String.fromCharCode(100,101,112,101,110,100,95,122,95,52,51,0);
          let buttonf = String.fromCharCode(113,95,50,56,95,121,121,121,121,0);
         fastforwardp.set(predictionR, parseInt(`${whatsapph}`) >> (Math.min(Math.abs(3), 3)));
         splashv += `${splashv.length}`;
         whatsapph /= Math.max(5, splashv.length);
         predictionR += "3";
         dependencyX += `${dependencyX.length}`;
         buttonf += `${splashv.length / (Math.max(4, buttonf.length))}`;
      }
      while (libreanimatedj.length > fastforwardp.size) {
         fastforwardp = new Map([[giftO, 2 << (Math.min(5, giftO.length))]]);
         break;
      }
         giftO += `${2 + giftO.length}`;
          let internetZ = String.fromCharCode(117,110,115,101,101,110,0);
         progressa += `${internetZ.length * libreanimatedj.length}`;
      let zhubow = fastforwardp.size <= 8499485;
      do {
         fastforwardp.set(progressa, (progressa == String.fromCharCode(82,0) ? fastforwardp.size : progressa.length));
         if (zhubow) {
            break;
         }
      } while (((fastforwardp.size % (Math.max(2, progressa.length))) >= 1 && 1 >= (fastforwardp.size % (Math.max(1, 3)))) && zhubow);
      while (giftO.includes(`${fastforwardp.size}`)) {
          let friendsx = 1.0;
          let iconrefreshi = false;
          let libsentryX = String.fromCharCode(114,95,55,57,95,115,112,105,110,0);
         giftO += `${fastforwardp.size}`;
         friendsx -= libsentryX.length;
         iconrefreshi = !libsentryX.startsWith(`${iconrefreshi}`);
         break;
      }
         libreanimatedj += `${1 ^ libreanimatedj.length}`;
       let send5 = 2.0;
       let sentrym = 3.0;
       let classesc = String.fromCharCode(99,121,112,114,101,115,115,0);
      let paginationD = classesc == String.fromCharCode(100,116,50,122,95,0);
      do {
          let previewM = true;
          let otherQ = 5.0;
         classesc += `${progressa.length | 1}`;
         previewM = !previewM;
         otherQ *= parseFloat(`${parseInt(`${otherQ}`) << (Math.min(3, Math.abs(1)))}`);
         if (paginationD) {
            break;
         }
      } while (paginationD && (3 == (4 + classesc.length) || 3 == (classesc.length & 4)));
      vietnamI += `${emptyE.length}`;
      if (send4) {
         break;
      }
   } while (send4 && (vietnamI.endsWith(`${attributedstringK}`)));
   while (!s_playerv.includes(`${emptyE.length}`)) {
      s_playerv += "3";
      break;
   }
      setActiveIndex(0);

      statsi.push(2 << (Math.min(2, statsi.length)));
   let activityh = String.fromCharCode(57,110,105,98,53,107,0) == vietnamI;
   do {
      vietnamI += `${(u_positiond == String.fromCharCode(56,0) ? u_positiond.length : parseInt(`${attributedstringK}`))}`;
      if (activityh) {
         break;
      }
   } while ((vietnamI.includes(`${showP.length}`)) && activityh);
   while (u_positiond.length > 1) {
      emptyE += `${(successF == String.fromCharCode(88,0) ? successF.length : statsi.length)}`;
      break;
   }
   for (let d = 0; d < 2; d++) {
      s_playerv = `${s_playerv.length}`;
   }
      if (carouselRef) {

   while ((parseInt(`${attributedstringK}`) - 1) >= 4 || (attributedstringK - 3.56) >= 5.30) {
      attributedstringK -= parseFloat(`${s_playerv.length}`);
      break;
   }
   for (let m = 0; m < 1; m++) {
      u_positiond = `${vietnamI.length >> (Math.min(Math.abs(2), 4))}`;
   }
   let placeholdert = 6093216 >= vietnamI.length;
   do {
      vietnamI = `${showP.length}`;
      if (placeholdert) {
         break;
      }
   } while (placeholdert && (4 > vietnamI.length));
       let mbbidX = String.fromCharCode(100,111,99,117,109,101,110,116,115,95,115,95,52,50,0);
       let mailI = String.fromCharCode(113,95,53,50,0);
       let dicey = 1.0;
      let bufferp = mailI == String.fromCharCode(109,97,115,116,53,95,112,0);
      do {
         mailI += `${parseInt(`${dicey}`)}`;
         if (bufferp) {
            break;
         }
      } while (bufferp && (!mailI.endsWith(`${dicey}`)));
      while (mailI.endsWith(mbbidX)) {
          let libavutilC = 0.0;
          let bggradient5: Map<any, any> = new Map([[String.fromCharCode(98,95,52,53,95,103,101,116,101,110,118,0),721], [String.fromCharCode(112,108,97,121,101,100,0),481]]);
          let iconsubssuccessv = String.fromCharCode(121,95,52,50,95,101,120,105,115,116,101,100,0);
         mailI = `${(iconsubssuccessv == String.fromCharCode(86,0) ? mbbidX.length : iconsubssuccessv.length)}`;
         libavutilC *= bggradient5.size;
         bggradient5 = new Map([[`${bggradient5.size}`, parseInt(`${libavutilC}`) * bggradient5.size]]);
         break;
      }
      let teamb = String.fromCharCode(50,105,106,98,99,120,121,104,106,48,0) == mailI;
      do {
         mailI += `${parseInt(`${dicey}`) << (Math.min(Math.abs(2), 5))}`;
         if (teamb) {
            break;
         }
      } while ((dicey == 2.69) && teamb);
       let dialogq = 4;
         dicey -= (String.fromCharCode(95,0) == mailI ? mailI.length : parseInt(`${dicey}`));
          let bridgeL = String.fromCharCode(105,116,111,97,95,57,95,55,53,0);
         mailI += `${(mailI == String.fromCharCode(121,0) ? mbbidX.length : mailI.length)}`;
         bridgeL += "1";
      if (5 < (mbbidX.length - parseInt(`${dicey}`))) {
         mbbidX += `${3 ^ dialogq}`;
      }
       let libffmpegkitn: Array<any> = [632, 554];
          let starM: Map<any, any> = new Map([[String.fromCharCode(116,114,105,97,110,103,117,108,97,116,105,111,110,95,101,95,56,54,0),false ], [String.fromCharCode(114,101,97,99,104,97,98,105,108,105,116,121,0),true ], [String.fromCharCode(111,95,53,55,95,100,111,99,108,105,115,116,0),true ]]);
          let defaultroombgZ = String.fromCharCode(105,99,111,110,115,0);
          let downloadedb = false;
         dicey += (String.fromCharCode(88,0) == defaultroombgZ ? dialogq : defaultroombgZ.length);
         starM = new Map([[`${starM.size}`, starM.size]]);
         downloadedb = starM.size >= 51;
      statsi = [2 * mbbidX.length];
        setIsRefreshing(false);
        carouselRef?.current?.scrollTo({ index: 0, animated: false });
      }
    }, 0);
  };

  const getUrl = () => {
       let chate = 5.0;
    let whistlec = 0.0;
    let directL = true;
    let dependenciesh = 5.0;
    let iconeditj = 3.0;
    let sellp = 0.0;
    let temperatureM = true;
    let cornerL = 0.0;
    let assisti: Map<any, any> = new Map([[String.fromCharCode(114,101,115,111,117,114,99,101,115,0),String.fromCharCode(117,95,55,48,95,104,100,108,114,0)], [String.fromCharCode(114,101,110,100,101,114,95,110,95,52,53,0),String.fromCharCode(115,105,103,110,105,102,105,99,97,110,100,0)], [String.fromCharCode(100,95,55,51,95,98,108,101,110,100,109,111,100,101,0),String.fromCharCode(100,95,49,57,95,115,99,116,101,0)]]);
    let transfery = 5.0;
    let hooksm = true;
    let libruntimeexecutorR = 3.0;
      iconeditj /= Math.max(3, parseFloat(`${parseInt(`${sellp}`) & parseInt(`${dependenciesh}`)}`));
   let gradlej = 9205036.0 >= chate;
   do {
      chate += (parseFloat(`${(hooksm ? 2 : 3) / (Math.max(parseInt(`${sellp}`), 1))}`));
      if (gradlej) {
         break;
      }
   } while (gradlej && (5.50 < (sellp / (Math.max(chate, 4)))));
   let refreshk = temperatureM ? !temperatureM : temperatureM;
   do {
       let brightnessk = 5.0;
       let bgvipxvodh = String.fromCharCode(112,114,111,120,121,0);
       let whatsappp = 0.0;
       let internetM = true;
       let description_5a5 = false;
         bgvipxvodh = `${3 % (Math.max(parseInt(`${brightnessk}`), 9))}`;
      while (description_5a5) {
         brightnessk += ((description_5a5 ? 5 : 4) % (Math.max(parseInt(`${whatsappp}`), 3)));
         break;
      }
         brightnessk /= Math.max(2, ((internetM ? 2 : 5) ^ parseInt(`${brightnessk}`)));
      while (4.57 == (whatsappp * 5.76) && description_5a5) {
         whatsappp /= Math.max(2 & parseInt(`${whatsappp}`), 2);
         break;
      }
          let kinit_sh = 3.0;
          let arrowupG = 1;
          let areaw: Map<any, any> = new Map([[String.fromCharCode(116,95,49,95,101,120,112,114,101,115,115,0),51], [String.fromCharCode(117,110,100,101,114,102,108,111,119,0),335]]);
         whatsappp -= parseInt(`${kinit_sh}`) + 3;
         kinit_sh += parseFloat(`${areaw.size}`);
         arrowupG &= areaw.size ^ 3;
      if ((1 * bgvipxvodh.length) >= 1 || (1 >> (Math.min(2, bgvipxvodh.length))) >= 3) {
         bgvipxvodh += `${((internetM ? 5 : 4) << (Math.min(Math.abs(parseInt(`${brightnessk}`)), 3)))}`;
      }
      while ((3.13 * brightnessk) == 1.21) {
          let backiconC = 1.0;
          let action_ = 0.0;
         description_5a5 = action_ == brightnessk;
         backiconC += parseInt(`${backiconC}`) ^ parseInt(`${backiconC}`);
         action_ += parseFloat(`${parseInt(`${backiconC}`)}`);
         break;
      }
      while (!internetM) {
         whatsappp += ((description_5a5 ? 3 : 2) % 1);
         break;
      }
      temperatureM = (brightnessk + transfery) == 100.71;
      if (refreshk) {
         break;
      }
   } while (refreshk && (hooksm));
   let traminic = assisti.size <= 7115529;
   do {
      assisti.set(`${temperatureM}`, parseInt(`${whistlec}`) + 1);
      if (traminic) {
         break;
      }
   } while ((2 == (assisti.size >> (Math.min(Math.abs(5), 3)))) && traminic);
       let usernameF: Map<any, any> = new Map([[String.fromCharCode(108,95,50,51,95,122,101,114,111,122,101,114,111,0),String.fromCharCode(115,105,103,110,101,100,95,100,95,49,48,0)], [String.fromCharCode(112,114,101,112,97,114,101,100,0),String.fromCharCode(117,95,53,53,95,103,100,111,99,0)]]);
       let combinedR = 0.0;
       let pathS = String.fromCharCode(116,95,53,50,95,97,108,115,111,0);
       let weatherv: Array<any> = [436, 334, 222];
       let m_hashK: Array<any> = [858, 185, 451];
          let libtanq = 0;
          let networkF: Map<any, any> = new Map([[String.fromCharCode(118,95,51,55,95,106,117,115,116,105,102,105,101,100,0),599], [String.fromCharCode(111,102,102,108,111,97,100,0),32], [String.fromCharCode(98,101,99,104,0),723]]);
          let singaporeu = 1.0;
         weatherv = [usernameF.size >> (Math.min(pathS.length, 4))];
         libtanq *= libtanq;
         networkF.set(`${libtanq}`, libtanq % (Math.max(networkF.size, 10)));
         singaporeu *= networkF.size & parseInt(`${singaporeu}`);
      if (1.98 >= (combinedR / (Math.max(parseFloat(`${usernameF.size}`), 1))) || 3.42 >= (combinedR / 1.98)) {
         usernameF.set(`${pathS}`, pathS.length + 2);
      }
         combinedR += parseFloat(`${2}`);
      let downg = usernameF.size >= 7655634;
      do {
         usernameF.set(pathS, 2);
         if (downg) {
            break;
         }
      } while (downg && (4.3 == (combinedR - parseFloat(`${usernameF.size}`))));
         weatherv.push(1 * usernameF.size);
         m_hashK = [usernameF.size];
      let spinner1 = pathS == String.fromCharCode(104,107,48,0);
      do {
         pathS = `${weatherv.length + 1}`;
         if (spinner1) {
            break;
         }
      } while ((2 >= (m_hashK.length ^ pathS.length)) && spinner1);
      for (let c = 0; c < 2; c++) {
          let updates0 = String.fromCharCode(113,95,54,53,95,117,110,109,97,116,99,104,101,100,0);
          let tickj = 2.0;
          let q_unlocki = String.fromCharCode(104,95,56,95,118,97,114,116,105,109,101,0);
         combinedR += parseFloat(`${q_unlocki.length}`);
         updates0 += "2";
         tickj /= Math.max(1, parseInt(`${tickj}`));
         q_unlocki = "3";
      }
      chate -= parseFloat(`${1}`);
      sellp += (parseFloat(`${(temperatureM ? 3 : 5)}`));
   for (let m = 0; m < 3; m++) {
      cornerL -= parseFloat(`${2 >> (Math.min(Math.abs(parseInt(`${chate}`)), 1))}`);
   }
      sellp += parseFloat(`${parseInt(`${dependenciesh}`)}`);
   let iconpipexpandv = 5595381.0 <= chate;
   do {
       let greyarrowup3 = String.fromCharCode(114,101,99,114,101,97,116,101,95,97,95,49,50,0);
       let singaporeh = false;
       let layout5 = String.fromCharCode(112,114,101,99,111,109,112,117,116,101,95,103,95,51,48,0);
         layout5 = `${((singaporeh ? 3 : 5))}`;
         greyarrowup3 += `${((singaporeh ? 2 : 3) << (Math.min(Math.abs(2), 1)))}`;
         greyarrowup3 = "3";
      for (let e = 0; e < 3; e++) {
         singaporeh = layout5.length < 35 && 35 < greyarrowup3.length;
      }
      while (layout5 == String.fromCharCode(100,0)) {
          let castinge = 0;
          let moreK: Map<any, any> = new Map([[String.fromCharCode(111,95,52,95,109,105,109,105,99,0),147], [String.fromCharCode(105,108,98,99,0),737]]);
          let vipsportA = String.fromCharCode(109,98,112,114,101,100,0);
          let eventsplashL = false;
         greyarrowup3 += `${vipsportA.length << (Math.min(greyarrowup3.length, 1))}`;
         castinge += 3 * moreK.size;
         moreK = new Map([[`${eventsplashL}`, castinge - 3]]);
         vipsportA += "2";
         break;
      }
         singaporeh = layout5.length == 10 || singaporeh;
         singaporeh = greyarrowup3.length > 30;
       let backiconZ = String.fromCharCode(97,99,99,101,115,115,105,98,108,105,116,121,95,104,95,51,56,0);
       let gifgoalbgw = String.fromCharCode(100,95,56,50,95,98,111,117,110,99,101,0);
         layout5 += "2";
      chate *= parseFloat(`${3 * parseInt(`${sellp}`)}`);
      if (iconpipexpandv) {
         break;
      }
   } while ((iconeditj == 3.59) && iconpipexpandv);
       let shielddoneH: Array<any> = [931, 568, 868];
       let expiredS = false;
       let mapping9 = 2;
         expiredS = 76 <= mapping9;
      while (expiredS) {
         shielddoneH.push(((expiredS ? 2 : 3) + mapping9));
         break;
      }
       let fastz = String.fromCharCode(97,99,102,102,0);
         shielddoneH.push((3 + (expiredS ? 5 : 2)));
         mapping9 -= 1 - fastz.length;
         fastz = `${mapping9 | 3}`;
         expiredS = fastz.length >= 45;
         mapping9 /= Math.max(5, fastz.length ^ 3);
         expiredS = 68 > mapping9;
      hooksm = !expiredS;
   if (2.43 > (chate + 5)) {
      sellp *= (parseFloat(`${3 * (directL ? 5 : 2)}`));
   }
      temperatureM = (parseInt(`${dependenciesh}`) + assisti.size) <= 29;
   for (let n = 0; n < 2; n++) {
      transfery -= (parseFloat(`${parseInt(`${transfery}`) | (hooksm ? 4 : 3)}`));
   }
   let textlayoutmanagerP = dependenciesh >= 9723833.0;
   do {
      dependenciesh += parseInt(`${cornerL}`) ^ parseInt(`${dependenciesh}`);
      if (textlayoutmanagerP) {
         break;
      }
   } while (textlayoutmanagerP && (5.28 <= (dependenciesh + 5.51) && 5.51 <= (iconeditj * dependenciesh)));
   while (2.2 < (iconeditj - 3.66) && (iconeditj - 3.66) < 5.77) {
      iconeditj -= (parseFloat(`${parseInt(`${chate}`) & (directL ? 5 : 5)}`));
      break;
   }
      sellp += parseFloat(`${parseInt(`${sellp}`) & parseInt(`${iconeditj}`)}`);
   for (let a = 0; a < 3; a++) {
      assisti = new Map([[`${hooksm}`, parseInt(`${iconeditj}`) | 1]]);
   }
   for (let i = 0; i < 2; i++) {
      transfery += parseFloat(`${parseInt(`${whistlec}`) + 1}`);
   }
   let ksadA = chate <= 6838165.0;
   do {
      chate += (parseFloat(`${(temperatureM ? 4 : 2) + parseInt(`${dependenciesh}`)}`));
      if (ksadA) {
         break;
      }
   } while (ksadA && (2.85 >= (chate * 2.81) && 5.52 >= (chate - 2.81)));
   for (let i = 0; i < 3; i++) {
      directL = directL && assisti.size == 3;
   }
      chate /= Math.max(4, parseFloat(`${1 % (Math.max(parseInt(`${cornerL}`), 9))}`));
   let basketballhometeamQ = 7591844.0 >= whistlec;
   do {
       let whiteanimationlived = true;
       let paginationh: Map<any, any> = new Map([[String.fromCharCode(109,95,52,95,111,118,101,114,108,111,97,100,0),String.fromCharCode(101,116,104,101,114,115,99,97,110,0)], [String.fromCharCode(112,114,101,104,101,97,116,95,118,95,49,56,0),String.fromCharCode(108,95,51,50,95,99,111,109,112,97,114,101,112,111,119,0)], [String.fromCharCode(109,97,116,114,105,120,0),String.fromCharCode(111,110,101,112,97,115,115,95,56,95,55,49,0)]]);
         paginationh = new Map([[`${paginationh.size}`, ((whiteanimationlived ? 5 : 1) ^ paginationh.size)]]);
         paginationh.set(`${whiteanimationlived}`, 2);
         whiteanimationlived = paginationh.get(`${whiteanimationlived}`) != null;
      while (!whiteanimationlived || (5 | paginationh.size) > 4) {
          let ticked7 = String.fromCharCode(117,118,114,100,95,114,95,57,57,0);
          let yellowvideolive_: Array<any> = [String.fromCharCode(110,95,50,50,95,99,111,114,114,101,115,112,111,110,100,101,110,116,115,0), String.fromCharCode(110,95,54,52,95,109,97,100,100,0)];
          let readf = 5.0;
          let utils1 = 2.0;
          let greeni = String.fromCharCode(113,95,56,53,95,99,104,97,110,103,101,100,104,0);
         whiteanimationlived = (greeni.length + utils1) == 87.40;
         ticked7 = `${3 ^ yellowvideolive_.length}`;
         yellowvideolive_ = [3 * parseInt(`${readf}`)];
         readf += yellowvideolive_.length;
         utils1 += parseInt(`${readf}`) - yellowvideolive_.length;
         greeni += `${parseInt(`${readf}`)}`;
         break;
      }
       let iconschedule8 = 2;
       let headerc = 3;
         whiteanimationlived = !whiteanimationlived || paginationh.size <= 2;
      whistlec /= Math.max(((temperatureM ? 1 : 4) >> (Math.min(Math.abs(1), 5))), 4);
      if (basketballhometeamQ) {
         break;
      }
   } while (((whistlec / 2.7) == 1.29) && basketballhometeamQ);
   for (let n = 0; n < 1; n++) {
       let cornerkickY: Map<any, any> = new Map([[String.fromCharCode(97,118,112,107,116,0),true ], [String.fromCharCode(97,112,112,114,101,99,97,116,105,111,110,104,111,117,114,0),false ], [String.fromCharCode(99,117,114,114,95,50,95,49,57,0),true ]]);
       let policyj = String.fromCharCode(114,101,109,97,114,107,95,50,95,50,50,0);
       let iconclosewhitebgL: Array<any> = [392, 186, 779];
          let china7 = 0.0;
          let qnewarchdefaultsM: Map<any, any> = new Map([[String.fromCharCode(106,95,50,53,95,120,99,116,101,115,116,0),String.fromCharCode(109,111,110,116,104,95,114,95,49,55,0)], [String.fromCharCode(118,95,56,54,95,97,105,114,105,110,103,0),String.fromCharCode(102,95,54,56,95,105,116,111,97,0)]]);
          let privatechatbg2 = false;
         iconclosewhitebgL.push(parseInt(`${china7}`) ^ iconclosewhitebgL.length);
         china7 += (parseFloat(`${qnewarchdefaultsM.size << (Math.min(4, Math.abs((privatechatbg2 ? 4 : 3))))}`));
         qnewarchdefaultsM.set(`${privatechatbg2}`, qnewarchdefaultsM.size);
          let yingo = String.fromCharCode(122,95,55,53,95,99,111,110,116,114,105,98,117,116,105,110,103,0);
          let goalk = String.fromCharCode(97,95,50,53,95,120,118,97,103,0);
          let libanev = 2.0;
         iconclosewhitebgL.push(goalk.length / 1);
         yingo = `${parseInt(`${libanev}`)}`;
         goalk += `${(String.fromCharCode(75,0) == yingo ? parseInt(`${libanev}`) : yingo.length)}`;
          let iconuser1 = 0.0;
         cornerkickY = new Map([[`${cornerkickY.size}`, policyj.length]]);
         iconuser1 -= parseInt(`${iconuser1}`);
         iconclosewhitebgL = [cornerkickY.size];
          let drag7 = String.fromCharCode(114,101,99,111,110,95,117,95,53,0);
          let filterB = 3.0;
         iconclosewhitebgL = [policyj.length];
         drag7 = `${(drag7 == String.fromCharCode(122,0) ? drag7.length : parseInt(`${filterB}`))}`;
         filterB *= 1;
      if (2 > (2 * policyj.length) && (cornerkickY.size * 2) > 5) {
         cornerkickY.set(policyj, policyj.length / (Math.max(3, 6)));
      }
      for (let u = 0; u < 1; u++) {
         iconclosewhitebgL.push(iconclosewhitebgL.length & policyj.length);
      }
       let shrinkK = String.fromCharCode(108,97,110,103,105,100,95,109,95,55,54,0);
       let policyC = String.fromCharCode(109,97,114,115,104,97,108,108,105,110,103,0);
      for (let y = 0; y < 3; y++) {
         shrinkK += `${(shrinkK == String.fromCharCode(120,0) ? iconclosewhitebgL.length : shrinkK.length)}`;
      }
      temperatureM = (((!directL ? 88 : iconclosewhitebgL.length) % (Math.max(iconclosewhitebgL.length, 2))) == 88);
   }
      assisti = new Map([[`${whistlec}`, parseInt(`${iconeditj}`)]]);
   let spinner1m = cornerL >= 9252074.0;
   do {
      cornerL -= parseFloat(`${2 * parseInt(`${iconeditj}`)}`);
      if (spinner1m) {
         break;
      }
   } while (spinner1m && (5.25 > (cornerL / 2.69)));
   for (let y = 0; y < 3; y++) {
      directL = 5.22 > (iconeditj * sellp);
   }

    return `${Url.matches11}?&is_live=true`;
  };

  const fetchMatchData = useCallback(async () => {
       let fcdaebecbcbafcdfceaaeccfeacdbw: Map<any, any> = new Map([[String.fromCharCode(98,114,111,97,100,99,97,115,116,115,0),539], [String.fromCharCode(102,95,50,53,95,102,97,107,101,0),979], [String.fromCharCode(115,99,114,101,101,110,115,95,56,95,57,50,0),324]]);
    let dependency4: Map<any, any> = new Map([[String.fromCharCode(99,102,101,110,99,115,116,114,0),190], [String.fromCharCode(100,95,52,52,95,100,101,108,105,109,105,116,101,114,115,0),606]]);
    let miniw = 4.0;
    let calendarJ = String.fromCharCode(102,111,110,116,95,101,95,56,53,0);
    let textlayoutmanagerr: Array<any> = [698, 651];
    let iconsaveimage7 = 1.0;
    let leakcheckerZ = 4;
    let profileactiveT = 0.0;
    let topon7: Map<any, any> = new Map([[String.fromCharCode(116,104,111,117,103,104,0),String.fromCharCode(115,117,109,109,101,100,95,117,95,50,48,0)], [String.fromCharCode(118,95,53,48,95,109,117,116,97,98,108,101,0),String.fromCharCode(113,117,97,110,116,105,122,101,114,115,0)]]);
    let videojs6 = 0;
    let scrollviewP = true;
    let shrinkU = String.fromCharCode(105,110,102,111,108,100,101,114,95,51,95,54,48,0);
   while (calendarJ.startsWith(`${leakcheckerZ}`)) {
      leakcheckerZ *= 1 + parseInt(`${profileactiveT}`);
      break;
   }
   for (let s = 0; s < 3; s++) {
      miniw -= parseFloat(`${textlayoutmanagerr.length >> (Math.min(3, Math.abs(leakcheckerZ)))}`);
   }
      videojs6 += 2 ^ fcdaebecbcbafcdfceaaeccfeacdbw.size;
       let episodeS: Array<any> = [648, 966, 277];
       let videoA = true;
       let middleC = String.fromCharCode(115,95,50,53,95,102,97,105,108,117,114,101,0);
      for (let v = 0; v < 1; v++) {
          let langk: Map<any, any> = new Map([[String.fromCharCode(111,95,55,57,95,97,118,112,114,111,103,114,97,109,0),true ], [String.fromCharCode(105,110,105,116,97,99,107,0),true ]]);
          let modelR: Array<any> = [424, 446];
          let runtimeschedulerX = String.fromCharCode(114,101,118,101,97,108,95,57,95,54,56,0);
          let scheduler5 = true;
          let goalI = true;
         videoA = (!goalI ? !videoA : goalI);
         langk.set(`${modelR.length}`, langk.size);
         modelR = [((scheduler5 ? 1 : 4) * modelR.length)];
         runtimeschedulerX = `${3 / (Math.max(8, langk.size))}`;
         scheduler5 = null == langk.get(`${scheduler5}`);
      }
       let const_5vG = String.fromCharCode(114,101,102,101,116,99,104,95,122,95,55,53,0);
      for (let g = 0; g < 2; g++) {
          let collectionE = 3.0;
          let fullN = 5.0;
          let leagueW = false;
          let iconuserN = String.fromCharCode(97,105,110,116,95,103,95,54,49,0);
          let modelse = 2;
         middleC = `${parseInt(`${collectionE}`)}`;
         collectionE -= iconuserN.length;
         fullN /= Math.max(4, parseFloat(`${modelse}`));
         leagueW = modelse >= parseInt(`${fullN}`);
         iconuserN += `${iconuserN.length}`;
      }
       let eighteenP = 2.0;
      for (let a = 0; a < 1; a++) {
         episodeS = [((videoA ? 2 : 4))];
      }
      if (episodeS.length >= 5) {
         episodeS.push(episodeS.length);
      }
      for (let j = 0; j < 3; j++) {
         episodeS = [parseInt(`${eighteenP}`) / (Math.max(const_5vG.length, 1))];
      }
         videoA = !videoA;
      if (videoA && const_5vG.length >= 5) {
         videoA = const_5vG == String.fromCharCode(79,0);
      }
      calendarJ += `${middleC.length}`;
   let corek = scrollviewP ? !scrollviewP : scrollviewP;
   do {
      scrollviewP = fcdaebecbcbafcdfceaaeccfeacdbw.size < 93;
      if (corek) {
         break;
      }
   } while ((scrollviewP && calendarJ.length == 1) && corek);
   let lineD = textlayoutmanagerr.length >= 6001106;
   do {
      textlayoutmanagerr.push(3);
      if (lineD) {
         break;
      }
   } while ((textlayoutmanagerr.includes(iconsaveimage7)) && lineD);

    const data = (await wwShirtPhilippines.call(getUrl(), {}, "GET")).data;

       let predictionarrowu = 5.0;
         predictionarrowu -= parseFloat(`${parseInt(`${predictionarrowu}`) | 1}`);
       let filledz = String.fromCharCode(109,97,107,101,109,97,99,112,107,103,95,105,95,55,52,0);
       let shootJ = String.fromCharCode(99,108,110,112,97,115,115,95,100,95,55,55,0);
         filledz += `${(String.fromCharCode(78,0) == filledz ? filledz.length : shootJ.length)}`;
      miniw += (parseFloat(`${calendarJ == String.fromCharCode(65,0) ? calendarJ.length : parseInt(`${profileactiveT}`)}`));
   while (dependency4.size > calendarJ.length) {
      calendarJ += "2";
      break;
   }
   if (5 >= (calendarJ.length ^ videojs6) || 1 >= (5 ^ videojs6)) {
      calendarJ += "3";
   }
      dependency4.set(calendarJ, textlayoutmanagerr.length);
      fcdaebecbcbafcdfceaaeccfeacdbw = new Map([[`${textlayoutmanagerr.length}`, calendarJ.length * 3]]);
   if (!Array.from(fcdaebecbcbafcdfceaaeccfeacdbw.keys()).includes(`${textlayoutmanagerr.length}`)) {
      textlayoutmanagerr.push(1 >> (Math.min(2, Math.abs(fcdaebecbcbafcdfceaaeccfeacdbw.size))));
   }
    if (data !== undefined) {

       let down5 = 0.0;
       let ballq = 0.0;
       let malaysiar: Array<any> = [String.fromCharCode(114,101,103,105,115,116,114,97,116,105,111,110,0), String.fromCharCode(113,95,52,50,95,99,110,116,0), String.fromCharCode(106,95,55,95,99,104,101,99,107,0)];
          let libreanimatedN = String.fromCharCode(101,110,117,109,101,114,97,116,105,111,110,95,54,95,53,0);
          let loginJ: Map<any, any> = new Map([[String.fromCharCode(113,95,53,56,95,109,98,103,114,97,112,104,0),243], [String.fromCharCode(99,111,100,105,110,103,116,121,112,101,95,105,95,50,50,0),42]]);
          let inactive4 = String.fromCharCode(100,101,97,99,116,105,118,97,116,105,110,103,95,49,95,54,0);
         ballq += loginJ.size << (Math.min(Math.abs(3), 5));
         libreanimatedN += `${inactive4.length / (Math.max(1, 6))}`;
         loginJ = new Map([[inactive4, inactive4.length - 3]]);
          let attributedstringb = 3;
          let area9 = false;
          let h_count_ = 4;
         ballq *= 1;
         attributedstringb |= h_count_;
         area9 = !area9 || h_count_ == 81;
      if (ballq == 2.81) {
          let episodeK = 2.0;
          let expandq = 3;
          let libfb_ = String.fromCharCode(108,117,116,121,117,118,95,98,95,54,54,0);
          let baiduU = 0;
         ballq -= parseInt(`${down5}`);
         episodeK -= expandq + 2;
         expandq >>= Math.min(5, Math.abs(expandq));
         libfb_ += `${parseInt(`${episodeK}`)}`;
         baiduU *= expandq;
      }
      let chatf = 6756635.0 <= down5;
      do {
          let libavdeviceX = 2;
         down5 *= parseInt(`${down5}`);
         libavdeviceX /= Math.max(3, libavdeviceX | 1);
         if (chatf) {
            break;
         }
      } while (chatf && ((down5 - 4.1) > 3.70));
      let downloadedj = 5456405.0 >= ballq;
      do {
         ballq /= Math.max(parseInt(`${down5}`), 5);
         if (downloadedj) {
            break;
         }
      } while ((3.30 < (ballq - 4.88) && (ballq / (Math.max(4.88, 1))) < 1.24) && downloadedj);
         malaysiar.push(1 & parseInt(`${ballq}`));
      for (let a = 0; a < 2; a++) {
          let step1 = 3.0;
          let themek: Array<any> = [783, 826, 812];
         ballq += parseInt(`${step1}`) * malaysiar.length;
         step1 += parseFloat(`${themek.length << (Math.min(Math.abs(3), 2))}`);
         themek = [themek.length + themek.length];
      }
      let viewerC = ballq <= 8880911.0;
      do {
         ballq -= parseInt(`${down5}`);
         if (viewerC) {
            break;
         }
      } while (viewerC && (down5 < 3.48));
         ballq /= Math.max(malaysiar.length, 4);
      scrollviewP = profileactiveT >= 84.41 && topon7.size >= 85;
   let selectedK = miniw <= 9350325.0;
   do {
      miniw *= parseFloat(`${leakcheckerZ}`);
      if (selectedK) {
         break;
      }
   } while (((miniw * iconsaveimage7) <= 4.48 || 5.94 <= (iconsaveimage7 * 4.48)) && selectedK);
   if (dependency4.size >= 4) {
      videojs6 += 1 & fcdaebecbcbafcdfceaaeccfeacdbw.size;
   }
   while (calendarJ.length > 2) {
       let neonA: Map<any, any> = new Map([[String.fromCharCode(115,117,98,110,111,100,101,95,107,95,51,55,0),628], [String.fromCharCode(115,95,53,50,95,100,101,112,101,110,100,115,0),485]]);
      let sportC = 7748588 <= neonA.size;
      do {
         neonA = new Map([[`${neonA.size}`, neonA.size]]);
         if (sportC) {
            break;
         }
      } while (((neonA.size / (Math.max(neonA.size, 9))) >= 3 || 5 >= (3 / (Math.max(4, neonA.size)))) && sportC);
         neonA = new Map([[`${neonA.size}`, neonA.size]]);
      while ((neonA.size % (Math.max(4, 6))) < 2 || (4 % (Math.max(5, neonA.size))) < 1) {
         neonA = new Map([[`${neonA.size}`, 1]]);
         break;
      }
      scrollviewP = 25 >= topon7.size;
      break;
   }
   if ((videojs6 % (Math.max(4, 7))) >= 2 && (parseInt(`${miniw}`) + videojs6) >= 4) {
      miniw += parseFloat(`${1 & parseInt(`${profileactiveT}`)}`);
   }
   for (let p = 0; p < 3; p++) {
      miniw /= Math.max(3, parseFloat(`${textlayoutmanagerr.length}`));
   }
      const newArray: wwInfo[] = Object.values(data)
        .flat()
        .slice(0, 20) as wwInfo[];

      topon7.set(`${leakcheckerZ}`, textlayoutmanagerr.length * 3);
   let bangl = 6765983 >= fcdaebecbcbafcdfceaaeccfeacdbw.size;
   do {
      fcdaebecbcbafcdfceaaeccfeacdbw.set(`${miniw}`, parseInt(`${miniw}`) - 2);
      if (bangl) {
         break;
      }
   } while ((5 > (fcdaebecbcbafcdfceaaeccfeacdbw.size | topon7.size) && 4 > (topon7.size | 5)) && bangl);
   if ((3.18 - iconsaveimage7) > 4.97) {
      leakcheckerZ ^= (String.fromCharCode(68,0) == calendarJ ? parseInt(`${miniw}`) : calendarJ.length);
   }
       let dependencyc = 0;
      let room0 = 6641142 <= dependencyc;
      do {
         dependencyc |= dependencyc % 1;
         if (room0) {
            break;
         }
      } while ((4 <= (dependencyc % 1) || (dependencyc % 1) <= 1) && room0);
         dependencyc >>= Math.min(Math.abs(dependencyc), 2);
      if (dependencyc <= 2) {
         dependencyc *= 3 | dependencyc;
      }
      textlayoutmanagerr = [dependency4.size % 1];
   for (let z = 0; z < 3; z++) {
      profileactiveT += 1 & dependency4.size;
   }
      miniw -= parseFloat(`${topon7.size}`);

      setSportList(newArray);
    }
  }, []);

  const fetchPlaylist = (page: number) =>
    wwGrayNewarchdefaults.getTopic(page).then((results: wwScrollview) => {
      setTotalPage(Number(results.TotalPageCount));
      return Object.values(results.List);
    });

  const {
    data: playlists,
    isSuccess,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    isFetching,
    refetch,
  } = useInfiniteQuery(
    ["vodPlaylist"],
    ({ pageParam = 1 }) => fetchPlaylist(pageParam),
    {
      getNextPageParam: (lastPage, allPages) => {
        if (lastPage === null) {
          return undefined;
        }
        const nextPage: any = allPages.length + 1;
        
        if (nextPage > totalPage && totalPage != 0) {
          return undefined;
        }
        return nextPage;
      },
      onSuccess: (data) => {
        if (data && data?.pages) {
          setResults([...results, ...data.pages[data.pages.length - 1].flat()]);
        }
      },
    }
  );

  const fetchBannerAd = async () => {
       let file8: Array<any> = [String.fromCharCode(97,110,97,108,121,115,105,115,95,50,95,56,55,0), String.fromCharCode(119,114,105,116,101,98,105,116,115,0)];
    let with_hf = String.fromCharCode(115,107,97,100,95,55,95,55,56,0);
    let orangeclock_ = 2;
    let sidez: Map<any, any> = new Map([[String.fromCharCode(102,95,53,57,0),String.fromCharCode(114,101,103,95,111,95,56,57,0)], [String.fromCharCode(120,105,112,104,95,97,95,49,51,0),String.fromCharCode(112,95,51,52,95,112,101,114,115,111,110,115,0)], [String.fromCharCode(97,99,111,110,102,105,103,0),String.fromCharCode(102,95,53,56,95,102,116,118,109,111,0)]]);
    let resultR: Array<any> = [85, 251];
    let profileT = String.fromCharCode(105,95,52,51,95,104,97,108,102,0);
    let albumG = true;
    let defaultfootballbgJ = String.fromCharCode(116,114,117,101,115,112,101,101,99,104,0);
    let gifgoal0 = 2.0;
    let chinaj: Array<any> = [91, 985, 478];
      orangeclock_ *= orangeclock_ / 3;
      gifgoal0 *= parseFloat(`${1 * orangeclock_}`);
   for (let j = 0; j < 2; j++) {
      resultR = [resultR.length];
   }
   if (defaultfootballbgJ.length >= profileT.length) {
       let successD = String.fromCharCode(108,105,98,101,114,116,121,95,116,95,56,52,0);
       let gifgoalbgx = true;
       let backw: Array<any> = [398, 591];
      let containerI = 8575062 >= successD.length;
      do {
          let mapbufferw = 4.0;
          let bggradient3 = String.fromCharCode(97,100,100,114,105,110,102,111,95,113,95,54,0);
          let expandw: Array<any> = [382, 543];
          let filledz = String.fromCharCode(112,114,101,118,105,101,119,115,95,53,95,51,0);
          let signinupU = String.fromCharCode(110,97,109,101,115,112,97,99,101,115,95,49,95,56,51,0);
         successD += `${1 - successD.length}`;
         mapbufferw /= Math.max(signinupU.length, 5);
         bggradient3 += "3";
         expandw.push(parseInt(`${mapbufferw}`));
         filledz += `${(filledz == String.fromCharCode(87,0) ? filledz.length : bggradient3.length)}`;
         signinupU += `${signinupU.length + filledz.length}`;
         if (containerI) {
            break;
         }
      } while (containerI && (!successD.includes(`${backw.length}`)));
      if (1 >= (backw.length >> (Math.min(Math.abs(5), 3)))) {
         gifgoalbgx = 14 < successD.length || backw.length < 14;
      }
          let controlK = String.fromCharCode(114,101,99,97,108,99,117,108,97,116,101,95,53,95,52,0);
          let defaultfootballbgO = 3;
         gifgoalbgx = gifgoalbgx && controlK.length > 100;
         controlK = `${defaultfootballbgO / 3}`;
         defaultfootballbgO ^= defaultfootballbgO ^ 1;
          let detailso: Array<any> = [180, 484, 142];
          let stationsi = 1.0;
         successD += `${parseInt(`${stationsi}`) / (Math.max(detailso.length, 1))}`;
         successD = `${backw.length}`;
      for (let e = 0; e < 3; e++) {
         gifgoalbgx = String.fromCharCode(113,0) == successD;
      }
      for (let y = 0; y < 1; y++) {
         successD = `${(backw.length + (gifgoalbgx ? 5 : 5))}`;
      }
      if (2 > (4 + backw.length)) {
          let mailW = String.fromCharCode(117,110,105,111,110,101,100,0);
          let rankz = 2.0;
          let loginsuccessY = 2;
          let zhengpiant = 2;
         gifgoalbgx = mailW.length <= zhengpiant;
         mailW += `${loginsuccessY << (Math.min(5, Math.abs(2)))}`;
         rankz *= parseFloat(`${1}`);
         loginsuccessY += loginsuccessY + parseInt(`${rankz}`);
         zhengpiant -= parseInt(`${rankz}`) >> (Math.min(5, Math.abs(2)));
      }
      let dragX = String.fromCharCode(107,52,120,101,118,0) == successD;
      do {
          let arrowrightA = 5.0;
          let overr: Map<any, any> = new Map([[String.fromCharCode(115,121,115,108,111,103,95,118,95,57,52,0),532], [String.fromCharCode(99,95,52,49,95,104,97,115,104,116,97,103,0),178], [String.fromCharCode(117,110,100,101,108,101,103,97,116,101,0),794]]);
          let fastV = String.fromCharCode(115,119,105,116,99,104,97,98,108,101,0);
         successD = `${backw.length}`;
         arrowrightA += parseFloat(`${overr.size}`);
         overr.set(`${arrowrightA}`, overr.size);
         fastV = `${parseInt(`${arrowrightA}`) - fastV.length}`;
         if (dragX) {
            break;
         }
      } while (dragX && (successD.length > 1));
      defaultfootballbgJ += "2";
   }
   if (with_hf.endsWith(`${albumG}`)) {
      with_hf += "2";
   }

    const bannerRes = await wwLivenodatabgimg.getBannerAd(100);

       let logousero = String.fromCharCode(98,117,110,100,108,101,95,56,95,55,51,0);
       let zhengpianN = 1;
      if (!logousero.endsWith(`${zhengpianN}`)) {
         zhengpianN /= Math.max(2, zhengpianN);
      }
       let iconsubssuccessd = String.fromCharCode(115,117,98,112,114,111,99,101,115,115,0);
          let greyarrowupx = 1;
          let jingdong2 = 4.0;
         iconsubssuccessd += `${greyarrowupx % 2}`;
         greyarrowupx /= Math.max(parseInt(`${jingdong2}`) & parseInt(`${jingdong2}`), 2);
         logousero += `${3 ^ zhengpianN}`;
          let halffieldimagew = String.fromCharCode(100,97,117,100,95,52,95,49,53,0);
         zhengpianN *= zhengpianN >> (Math.min(iconsubssuccessd.length, 1));
         halffieldimagew = `${3 & halffieldimagew.length}`;
         logousero += `${logousero.length - 1}`;
      with_hf += `${((albumG ? 3 : 2) | zhengpianN)}`;
       let r_playerB = 1.0;
       let jnewarchdefaultsl = true;
       let dropdownt: Map<any, any> = new Map([[String.fromCharCode(110,95,57,51,95,112,111,115,116,0),935], [String.fromCharCode(101,110,99,97,112,0),391], [String.fromCharCode(116,114,97,110,115,102,111,114,109,101,114,0),321]]);
         jnewarchdefaultsl = !jnewarchdefaultsl && r_playerB <= 36.1;
      for (let i = 0; i < 3; i++) {
         jnewarchdefaultsl = 5.89 >= r_playerB;
      }
      while (jnewarchdefaultsl) {
         jnewarchdefaultsl = !jnewarchdefaultsl;
         break;
      }
          let streaming4: Array<any> = [255, 673];
          let pressure4: Map<any, any> = new Map([[String.fromCharCode(109,101,116,97,108,0),String.fromCharCode(115,101,108,101,99,116,105,110,103,0)], [String.fromCharCode(121,95,49,48,48,95,104,101,114,109,105,116,101,0),String.fromCharCode(105,110,116,101,103,114,97,116,101,95,53,95,57,0)], [String.fromCharCode(118,105,101,119,112,111,114,116,95,121,95,57,53,0),String.fromCharCode(105,110,116,115,95,119,95,57,0)]]);
          let l_unlockh = String.fromCharCode(108,95,50,54,95,112,111,115,116,112,111,110,101,100,0);
         dropdownt.set(`${streaming4.length}`, pressure4.size % (Math.max(2, 1)));
         streaming4.push(1 | l_unlockh.length);
         pressure4 = new Map([[l_unlockh, 3 & l_unlockh.length]]);
      for (let b = 0; b < 1; b++) {
          let commentH = String.fromCharCode(114,108,105,110,101,95,112,95,49,52,0);
          let sharemodalJ = 3;
          let qaago = 4;
          let customa = String.fromCharCode(104,101,120,100,117,109,112,95,119,95,49,53,0);
          let predictiona: Map<any, any> = new Map([[String.fromCharCode(114,101,102,105,108,108,95,113,95,53,57,0),884], [String.fromCharCode(104,95,52,52,0),871], [String.fromCharCode(110,95,51,57,95,99,111,114,101,105,109,97,103,101,0),492]]);
         r_playerB *= dropdownt.size | 1;
         commentH += `${3 / (Math.max(1, sharemodalJ))}`;
         sharemodalJ *= sharemodalJ + qaago;
         qaago %= Math.max(1, sharemodalJ);
         customa += `${customa.length & 2}`;
         predictiona = new Map([[commentH, 3]]);
      }
      resultR.push((parseInt(`${r_playerB}`) << (Math.min(1, Math.abs((jnewarchdefaultsl ? 5 : 4))))));
   for (let q = 0; q < 3; q++) {
      with_hf = `${(String.fromCharCode(117,0) == with_hf ? with_hf.length : sidez.size)}`;
   }
   for (let o = 0; o < 3; o++) {
      defaultfootballbgJ = `${((albumG ? 3 : 4) + with_hf.length)}`;
   }
       let defaultlogow = String.fromCharCode(115,111,102,114,101,101,95,100,95,57,48,0);
      while (defaultlogow == defaultlogow) {
         defaultlogow = `${defaultlogow.length}`;
         break;
      }
      if (defaultlogow == defaultlogow) {
         defaultlogow += `${defaultlogow.length >> (Math.min(Math.abs(2), 5))}`;
      }
         defaultlogow += "3";
      orangeclock_ <<= Math.min(Math.abs(file8.length ^ 1), 2);
    const banner = bannerRes.ads;

   while (3 == (file8.length / (Math.max(2, 1))) && (2 / (Math.max(3, file8.length))) == 4) {
       let rulesp: Array<any> = [645, 912];
       let final_ltq = String.fromCharCode(105,95,49,49,95,114,112,114,111,98,101,0);
       let libjsinspectorB = String.fromCharCode(113,95,49,48,48,0);
       let gpayo = true;
          let favorite_ = 5.0;
          let iconrefresh6 = 4.0;
          let configureh: Array<any> = [183, 260, 755];
         rulesp = [((gpayo ? 1 : 3) << (Math.min(Math.abs(3), 2)))];
         favorite_ -= parseFloat(`${parseInt(`${iconrefresh6}`)}`);
         iconrefresh6 += parseFloat(`${parseInt(`${iconrefresh6}`)}`);
         configureh.push(2 & parseInt(`${iconrefresh6}`));
         rulesp.push(1);
         gpayo = (libjsinspectorB.length + rulesp.length) <= 80;
         gpayo = !gpayo;
      if (rulesp.length > 5) {
          let mathP: Map<any, any> = new Map([[String.fromCharCode(108,122,115,115,95,111,95,49,0),298], [String.fromCharCode(117,112,100,97,116,101,115,95,98,95,57,55,0),925]]);
         gpayo = String.fromCharCode(95,0) == libjsinspectorB;
         mathP.set(`${mathP.size}`, mathP.size);
      }
         rulesp.push(((gpayo ? 1 : 4) ^ 1));
         final_ltq += "1";
          let scoreR = 0.0;
          let telegramk = String.fromCharCode(103,101,116,116,105,110,103,0);
          let analytic1 = String.fromCharCode(108,95,57,55,95,100,101,99,105,109,97,116,101,0);
         rulesp = [rulesp.length % 3];
         scoreR -= parseFloat(`${telegramk.length & parseInt(`${scoreR}`)}`);
         telegramk = `${telegramk.length}`;
         analytic1 = "2";
          let mbbannerX = true;
          let fcdaebecbcbafcdfceaaeccfeacdb6 = String.fromCharCode(119,109,118,100,97,116,97,0);
         libjsinspectorB += `${(fcdaebecbcbafcdfceaaeccfeacdb6 == String.fromCharCode(57,0) ? fcdaebecbcbafcdfceaaeccfeacdb6.length : libjsinspectorB.length)}`;
         mbbannerX = !mbbannerX;
      while (!final_ltq.endsWith(`${gpayo}`)) {
          let proxyf: Array<any> = [142, 799, 232];
         gpayo = libjsinspectorB == String.fromCharCode(65,0);
         proxyf = [proxyf.length];
         break;
      }
       let signinup3 = 2.0;
       let libfb7 = 4.0;
         libfb7 -= libjsinspectorB.length;
      file8 = [(with_hf == String.fromCharCode(118,0) ? with_hf.length : sidez.size)];
      break;
   }
      orangeclock_ /= Math.max(5, 1);
      orangeclock_ &= ((albumG ? 2 : 5));
      file8 = [3];
   let predictiong = 5737606 <= file8.length;
   do {
       let gift4: Map<any, any> = new Map([[String.fromCharCode(98,95,52,49,95,99,111,110,116,105,103,117,111,117,115,0),452], [String.fromCharCode(112,97,103,95,102,95,56,53,0),3], [String.fromCharCode(103,101,116,105,110,116,95,54,95,49,50,0),94]]);
       let philippinesN = String.fromCharCode(114,95,50,53,95,113,112,101,108,111,114,0);
      if (2 <= philippinesN.length) {
         gift4.set(`${philippinesN}`, gift4.size);
      }
      for (let d = 0; d < 3; d++) {
         gift4.set(`${philippinesN}`, 3);
      }
      let typingQ = 6460289 <= gift4.size;
      do {
         gift4 = new Map([[`${gift4.size}`, philippinesN.length]]);
         if (typingQ) {
            break;
         }
      } while (typingQ && (!philippinesN.startsWith(`${gift4.size}`)));
       let mimo8: Array<any> = [968, 780];
          let mbridgeX = String.fromCharCode(101,95,48,95,104,97,115,104,116,97,103,115,0);
          let watchnowbgm = String.fromCharCode(100,105,115,112,108,97,99,101,95,116,95,52,50,0);
          let x_player3 = String.fromCharCode(97,117,116,111,103,101,110,0);
         philippinesN = `${x_player3.length >> (Math.min(philippinesN.length, 4))}`;
         mbridgeX += `${watchnowbgm.length ^ mbridgeX.length}`;
         watchnowbgm += `${(watchnowbgm == String.fromCharCode(70,0) ? mbridgeX.length : watchnowbgm.length)}`;
         x_player3 = `${mbridgeX.length}`;
         gift4 = new Map([[`${gift4.size}`, philippinesN.length]]);
      file8.push(gift4.size);
      if (predictiong) {
         break;
      }
   } while ((3 <= (chinaj.length << (Math.min(Math.abs(3), 2)))) && predictiong);
    const bannerList = bannerRes.ads_list;

      profileT = `${resultR.length}`;
   for (let x = 0; x < 1; x++) {
      albumG = with_hf.length <= sidez.size;
   }
   if (orangeclock_ > resultR.length) {
       let release_b5m = String.fromCharCode(118,101,99,116,111,114,115,99,111,112,101,0);
       let vietnamY = String.fromCharCode(109,95,52,95,99,117,108,115,104,105,102,116,0);
       let commonR = String.fromCharCode(106,95,49,49,95,116,105,108,101,115,0);
       let debugv: Array<any> = [597, 692, 295];
       let turnQ: Array<any> = [570, 419];
      if (vietnamY.length == commonR.length) {
         commonR += `${(vietnamY == String.fromCharCode(121,0) ? turnQ.length : vietnamY.length)}`;
      }
         commonR = "2";
      let mbbidP = release_b5m.length >= 9592138;
      do {
         release_b5m += `${3 + commonR.length}`;
         if (mbbidP) {
            break;
         }
      } while ((!release_b5m.includes(commonR)) && mbbidP);
          let renderz = false;
          let renew1 = String.fromCharCode(97,117,103,109,101,110,116,101,100,0);
         debugv.push(commonR.length);
         renderz = !renderz;
         renew1 = `${((renderz ? 5 : 4) | renew1.length)}`;
         turnQ = [vietnamY.length * commonR.length];
         turnQ = [turnQ.length];
      let roomQ = vietnamY.length <= 6434198;
      do {
         vietnamY = `${1 * vietnamY.length}`;
         if (roomQ) {
            break;
         }
      } while ((2 <= (1 - debugv.length)) && roomQ);
      for (let n = 0; n < 1; n++) {
          let iconuserE = String.fromCharCode(99,111,109,112,114,101,115,115,105,111,110,0);
          let expandU = 4;
          let h_viewh: Map<any, any> = new Map([[String.fromCharCode(107,95,51,52,95,112,111,111,112,0),757], [String.fromCharCode(112,105,110,107,95,56,95,50,51,0),307]]);
          let colorsV: Array<any> = [835, 282, 862];
         commonR = `${debugv.length / 1}`;
         iconuserE = `${h_viewh.size / (Math.max(2, 3))}`;
         expandU -= h_viewh.size % (Math.max(colorsV.length, 10));
         colorsV.push(colorsV.length);
      }
         commonR += `${1 << (Math.min(5, debugv.length))}`;
       let streamingB = String.fromCharCode(99,95,53,49,95,114,101,109,111,118,101,100,0);
       let modelI = String.fromCharCode(108,111,115,101,95,110,95,57,50,0);
          let xnewinterstitial8 = String.fromCharCode(115,104,105,109,109,101,114,0);
         streamingB += "1";
         xnewinterstitial8 += `${xnewinterstitial8.length}`;
      for (let r = 0; r < 2; r++) {
         modelI += "1";
      }
         vietnamY = `${(vietnamY == String.fromCharCode(49,0) ? commonR.length : vietnamY.length)}`;
      for (let u = 0; u < 2; u++) {
          let iconshareT = 1.0;
          let internets = 5;
          let benefitb = 5.0;
         modelI = `${commonR.length}`;
         iconshareT *= 3 & internets;
         internets ^= parseInt(`${iconshareT}`) ^ 1;
         benefitb *= parseInt(`${iconshareT}`) + internets;
      }
      while (streamingB.length == 1) {
         vietnamY = "3";
         break;
      }
      resultR.push(vietnamY.length);
   }
       let catalogl: Array<any> = [689, 364];
          let animations9 = 1.0;
         catalogl.push(catalogl.length);
         animations9 -= parseInt(`${animations9}`);
      for (let o = 0; o < 2; o++) {
         catalogl = [1];
      }
      if ((2 >> (Math.min(1, catalogl.length))) == 2) {
         catalogl = [catalogl.length];
      }
      gifgoal0 -= parseFloat(`${1}`);
   while (!with_hf.startsWith(`${file8.length}`)) {
      file8 = [3 & file8.length];
      break;
   }

    if (banner) {

       let imagemanagern = 4;
         imagemanagern <<= Math.min(3, Math.abs(1));
      while (3 == imagemanagern) {
         imagemanagern += imagemanagern;
         break;
      }
         imagemanagern %= Math.max(1, imagemanagern / 2);
      file8 = [(String.fromCharCode(98,0) == defaultfootballbgJ ? defaultfootballbgJ.length : orangeclock_)];
      file8.push(1);
   for (let t = 0; t < 2; t++) {
      profileT += "3";
   }
      chinaj.push(chinaj.length);
   let v_centeru = 6129811 <= with_hf.length;
   do {
      with_hf += `${3 / (Math.max(5, defaultfootballbgJ.length))}`;
      if (v_centeru) {
         break;
      }
   } while ((2 < profileT.length) && v_centeru);
      setBannerAd(banner);

       let plashA = 5.0;
       let o_unlockN = String.fromCharCode(122,114,101,111,114,100,101,114,95,103,95,57,55,0);
       let reviewX = 0.0;
      while (reviewX > plashA) {
         plashA -= parseInt(`${reviewX}`);
         break;
      }
          let libsgcorev = 0.0;
          let adultK = String.fromCharCode(110,95,49,52,95,102,97,118,101,0);
         o_unlockN += `${3 & parseInt(`${libsgcorev}`)}`;
         libsgcorev += parseFloat(`${adultK.length}`);
         adultK = `${adultK.length}`;
         plashA += o_unlockN.length;
         reviewX /= Math.max(parseFloat(`${parseInt(`${plashA}`)}`), 5);
      let valuesA = o_unlockN == String.fromCharCode(110,102,50,0);
      do {
         o_unlockN += `${3 & o_unlockN.length}`;
         if (valuesA) {
            break;
         }
      } while (valuesA && (parseInt(`${plashA}`) > o_unlockN.length));
      for (let q = 0; q < 1; q++) {
         o_unlockN = `${parseInt(`${reviewX}`) ^ 1}`;
      }
      while ((plashA + 1.7) == 1.77) {
         plashA -= parseInt(`${plashA}`) - 1;
         break;
      }
      for (let e = 0; e < 3; e++) {
          let binddatasz = String.fromCharCode(115,104,117,102,102,108,101,112,108,97,110,101,115,0);
          let directZ = 4.0;
          let downloadedJ = String.fromCharCode(110,105,99,101,0);
         reviewX -= parseFloat(`${downloadedJ.length}`);
         binddatasz += `${binddatasz.length}`;
         directZ -= 2;
         downloadedJ += `${(binddatasz == String.fromCharCode(57,0) ? parseInt(`${directZ}`) : binddatasz.length)}`;
      }
      if (2.50 <= (4 + plashA)) {
         reviewX += parseFloat(`${parseInt(`${reviewX}`)}`);
      }
      gifgoal0 /= Math.max(1, parseFloat(`${resultR.length}`));
       let valuesn = 4.0;
         valuesn *= parseInt(`${valuesn}`) * parseInt(`${valuesn}`);
         valuesn *= 3;
      let dragcloseO = valuesn <= 5744207.0;
      do {
         valuesn *= 2;
         if (dragcloseO) {
            break;
         }
      } while (dragcloseO && ((valuesn * valuesn) < 2.94 && (valuesn * valuesn) < 2.94));
      defaultfootballbgJ += "2";
   if ((defaultfootballbgJ.length | 1) <= 5 && (file8.length | 1) <= 4) {
      defaultfootballbgJ = `${resultR.length}`;
   }
   if ((3 << (Math.min(5, defaultfootballbgJ.length))) <= 4 || 1.78 <= (gifgoal0 * 2.55)) {
       let collectionz = String.fromCharCode(114,95,50,57,95,112,114,111,99,101,101,100,0);
       let collection2 = 0;
       let volume9 = 4.0;
       let closeB = false;
       let redirectm: Map<any, any> = new Map([[String.fromCharCode(115,116,114,111,107,101,114,95,114,95,49,52,0),471], [String.fromCharCode(119,95,53,51,95,115,121,110,99,104,114,111,110,105,122,101,0),607]]);
      if (closeB) {
         closeB = redirectm.get(`${closeB}`) != null;
      }
          let catagoryc = String.fromCharCode(97,95,53,55,95,101,120,112,101,99,116,115,0);
         closeB = volume9 <= catagoryc.length;
          let phonesharej = String.fromCharCode(108,101,97,102,110,111,100,101,95,102,95,56,50,0);
         collectionz = `${(collectionz == String.fromCharCode(48,0) ? collectionz.length : phonesharej.length)}`;
         collection2 %= Math.max(3, 3);
          let libzeusT = String.fromCharCode(118,97,114,105,97,98,108,101,115,0);
          let launchR = String.fromCharCode(100,95,51,57,95,105,110,105,116,105,97,108,105,122,101,114,0);
         collection2 ^= libzeusT.length >> (Math.min(Math.abs(1), 1));
         libzeusT += `${launchR.length | 1}`;
         launchR = `${launchR.length}`;
      while (volume9 >= 2.13) {
         volume9 -= ((closeB ? 5 : 4) % (Math.max(parseInt(`${volume9}`), 3)));
         break;
      }
       let libswresample3: Map<any, any> = new Map([[String.fromCharCode(112,97,99,107,101,114,0),String.fromCharCode(113,95,55,95,115,101,110,115,105,116,105,118,105,116,121,0)], [String.fromCharCode(104,111,108,108,111,119,0),String.fromCharCode(116,95,51,50,95,105,110,99,111,109,112,97,116,105,98,108,101,0)], [String.fromCharCode(105,95,53,51,95,102,97,108,108,98,97,99,107,0),String.fromCharCode(106,95,49,57,0)]]);
       let o_counts: Map<any, any> = new Map([[String.fromCharCode(117,116,118,105,100,101,111,100,115,112,95,53,95,55,50,0),624], [String.fromCharCode(109,97,112,115,0),961]]);
         closeB = o_counts.size >= 86;
       let bridgeK: Array<any> = [354, 201, 782];
      if (2 < (1 + bridgeK.length) && closeB) {
         closeB = redirectm.size >= libswresample3.size;
      }
      for (let y = 0; y < 3; y++) {
         libswresample3.set(`${redirectm.size}`, 2 + redirectm.size);
      }
          let libsentry4 = false;
          let tempnodatagifh = String.fromCharCode(99,97,110,99,101,108,101,100,0);
         collectionz = `${libswresample3.size % (Math.max(4, redirectm.size))}`;
         libsentry4 = tempnodatagifh.endsWith(`${libsentry4}`);
         tempnodatagifh = `${(tempnodatagifh.length | (libsentry4 ? 4 : 5))}`;
      if (volume9 > bridgeK.length) {
         bridgeK.push(libswresample3.size + redirectm.size);
      }
      while (collectionz.length <= redirectm.size) {
         collectionz += "3";
         break;
      }
      for (let r = 0; r < 1; r++) {
         o_counts.set(`${libswresample3.size}`, libswresample3.size ^ redirectm.size);
      }
      defaultfootballbgJ = `${chinaj.length}`;
   }
   let libruntimeexecutorQ = albumG ? !albumG : albumG;
   do {
       let n_imageR = String.fromCharCode(103,95,53,53,95,97,117,110,105,110,105,116,0);
       let detailsr: Map<any, any> = new Map([[String.fromCharCode(100,101,99,105,100,101,95,122,95,55,51,0),String.fromCharCode(98,115,119,97,112,100,115,112,0)], [String.fromCharCode(120,95,51,55,95,100,101,98,108,111,99,107,105,110,103,0),String.fromCharCode(117,95,48,95,109,105,120,105,110,115,0)]]);
       let blackn: Map<any, any> = new Map([[String.fromCharCode(116,119,101,97,107,115,95,111,95,50,53,0),328], [String.fromCharCode(97,110,99,101,115,116,114,121,95,106,95,55,57,0),313]]);
       let libfabricjnie: Array<any> = [956, 110, 45];
       let styleR: Map<any, any> = new Map([[String.fromCharCode(115,117,98,98,108,111,99,107,0),853], [String.fromCharCode(101,95,52,53,95,100,111,117,98,108,101,115,115,116,114,0),834]]);
       let bodanm: Array<any> = [812, 24, 502];
          let screenC = String.fromCharCode(114,105,99,104,95,110,95,51,0);
          let reducerj = 5.0;
          let buildK = String.fromCharCode(113,117,111,116,101,100,95,107,95,56,57,0);
         libfabricjnie.push(buildK.length);
         screenC += `${parseInt(`${reducerj}`)}`;
         reducerj *= parseInt(`${reducerj}`) ^ 3;
         buildK = `${screenC.length}`;
       let navigationt = String.fromCharCode(115,98,115,112,108,105,116,95,100,95,52,57,0);
       let logoutA = String.fromCharCode(108,111,99,97,116,105,111,110,95,49,95,54,53,0);
       let banner7 = String.fromCharCode(116,114,117,110,95,98,95,56,52,0);
       let foregroundn = String.fromCharCode(105,101,101,101,0);
       let whitetickU = String.fromCharCode(114,111,117,116,101,115,95,100,95,51,51,0);
       let specW = String.fromCharCode(115,111,99,111,110,110,101,99,116,95,118,95,56,0);
          let tick5 = 2;
          let floatere: Array<any> = [385, 200, 486];
          let dialogi = String.fromCharCode(107,95,57,57,95,116,121,112,0);
         navigationt += `${foregroundn.length - bodanm.length}`;
         tick5 /= Math.max(dialogi.length, 4);
         floatere.push(tick5);
         dialogi = "2";
      if (5 >= (libfabricjnie.length + 2) || 2 >= (2 + banner7.length)) {
         banner7 += `${styleR.size}`;
      }
         specW = `${navigationt.length * 3}`;
      for (let j = 0; j < 1; j++) {
         banner7 = `${whitetickU.length}`;
      }
      if ((detailsr.size % 5) >= 3) {
         libfabricjnie.push(libfabricjnie.length | 2);
      }
      for (let s = 0; s < 3; s++) {
         styleR = new Map([[`${detailsr.size}`, detailsr.size & navigationt.length]]);
      }
          let sort2 = String.fromCharCode(103,108,111,98,97,108,116,101,109,0);
          let dycreatorV: Array<any> = [831, 69, 917];
          let disconnectedlogoM = 1.0;
         libfabricjnie = [specW.length >> (Math.min(Math.abs(1), 2))];
         sort2 = `${(sort2 == String.fromCharCode(90,0) ? dycreatorV.length : sort2.length)}`;
         dycreatorV.push(parseInt(`${disconnectedlogoM}`) % 1);
         disconnectedlogoM += parseFloat(`${sort2.length}`);
      while (5 == n_imageR.length) {
         n_imageR += `${logoutA.length}`;
         break;
      }
         whitetickU += `${n_imageR.length % (Math.max(3, 1))}`;
          let subtextC = String.fromCharCode(102,102,106,110,105,0);
          let z_hashe = String.fromCharCode(114,101,112,111,114,116,101,100,0);
         navigationt = `${z_hashe.length * 2}`;
         subtextC = "3";
         z_hashe = `${(String.fromCharCode(103,0) == subtextC ? subtextC.length : subtextC.length)}`;
      albumG = resultR.length == 54;
      if (libruntimeexecutorQ) {
         break;
      }
   } while (libruntimeexecutorQ && ((gifgoal0 - 5.24) >= 5.8));
      setBannerAdList(bannerList);
    } else {

       let iconrefresh1 = String.fromCharCode(102,108,111,111,114,115,0);
         iconrefresh1 += `${iconrefresh1.length - 3}`;
      for (let g = 0; g < 1; g++) {
          let logo9 = 1.0;
          let small9 = String.fromCharCode(101,120,116,114,101,109,101,0);
         iconrefresh1 += `${small9.length | parseInt(`${logo9}`)}`;
      }
         iconrefresh1 += `${iconrefresh1.length << (Math.min(Math.abs(2), 1))}`;
      albumG = file8.includes(chinaj[chinaj.length - 1]);
      with_hf = `${sidez.size + profileT.length}`;
       let defaultlogoH = 3.0;
         defaultlogoH /= Math.max(5, parseFloat(`${parseInt(`${defaultlogoH}`)}`));
      let unselectedr = 8741568.0 >= defaultlogoH;
      do {
         defaultlogoH += parseFloat(`${2 / (Math.max(parseInt(`${defaultlogoH}`), 7))}`);
         if (unselectedr) {
            break;
         }
      } while ((defaultlogoH < defaultlogoH) && unselectedr);
       let heart5 = 4;
      gifgoal0 -= parseFloat(`${2 ^ with_hf.length}`);
      sidez = new Map([[`${sidez.size}`, defaultfootballbgJ.length - 1]]);
       let gifgoalG = 5.0;
       let gestureh: Array<any> = [973, 898];
       let emojiK = String.fromCharCode(116,121,112,105,110,103,0);
          let bingB = 4.0;
          let dycreatorB = 2.0;
          let liveendmodallogoM = 1;
         gestureh.push(emojiK.length + liveendmodallogoM);
         bingB += parseInt(`${dycreatorB}`);
         dycreatorB *= parseInt(`${bingB}`);
         liveendmodallogoM %= Math.max(1, 4);
         gestureh = [3];
         gifgoalG /= Math.max(2, (String.fromCharCode(66,0) == emojiK ? emojiK.length : parseInt(`${gifgoalG}`)));
         gifgoalG += 1 + gestureh.length;
      if (4.0 < (emojiK.length + gifgoalG)) {
         emojiK = `${emojiK.length << (Math.min(Math.abs(2), 1))}`;
      }
         gifgoalG += 1;
         emojiK = `${emojiK.length - parseInt(`${gifgoalG}`)}`;
       let middlebrightnessb = 5;
          let nativeG = 0.0;
          let diceL = String.fromCharCode(114,101,108,101,118,97,110,116,95,121,95,52,56,0);
          let whiteanimationlive2 = 4.0;
         emojiK = `${parseInt(`${nativeG}`) ^ parseInt(`${gifgoalG}`)}`;
         nativeG *= 1 | parseInt(`${whiteanimationlive2}`);
         diceL = `${parseInt(`${whiteanimationlive2}`) >> (Math.min(diceL.length, 2))}`;
      orangeclock_ += gestureh.length << (Math.min(Math.abs(2), 2));
      setBannerAd(undefined);

      sidez.set(with_hf, with_hf.length);
      profileT = "2";
      sidez = new Map([[profileT, (String.fromCharCode(49,0) == profileT ? profileT.length : orangeclock_)]]);
       let bgvipxvodx = String.fromCharCode(117,110,116,121,112,101,100,95,97,95,54,0);
      if (bgvipxvodx == bgvipxvodx) {
         bgvipxvodx = `${bgvipxvodx.length * 3}`;
      }
         bgvipxvodx += `${bgvipxvodx.length}`;
       let liveendmodallogoV = 0;
      albumG = gifgoal0 <= 49.12;
   if ((4.75 - gifgoal0) == 3.14) {
      profileT = `${parseInt(`${gifgoal0}`)}`;
   }
      setBannerAdList([]);
    }
  };

  useEffect(() => {
    onLoad();
  }, []);

  const shouldShowAds = async () => {
       let fieldr = 3.0;
    let mbnativeD = 5;
    let proxyW = String.fromCharCode(118,95,55,54,95,103,115,117,98,0);
    let componentregistryY = String.fromCharCode(103,95,53,95,99,111,110,110,101,99,116,105,111,110,0);
    let time_kwv = 1.0;
    let canvas6 = String.fromCharCode(113,95,50,52,95,114,101,112,108,97,99,101,109,101,110,116,0);
    let sportsg = String.fromCharCode(116,95,49,51,95,101,109,112,105,114,105,99,97,108,108,121,0);
    let penaltyM = 3;
    let langkeyj = 1.0;
    let signinupM = 1;
    let iconplay_: Map<any, any> = new Map([[String.fromCharCode(116,104,114,101,97,100,95,106,95,55,0),false ], [String.fromCharCode(109,101,109,98,101,114,0),true ]]);
   let orangeclockV = 6989832.0 >= langkeyj;
   do {
      langkeyj /= Math.max(1, parseFloat(`${parseInt(`${langkeyj}`)}`));
      if (orangeclockV) {
         break;
      }
   } while ((mbnativeD == langkeyj) && orangeclockV);
       let bridgev: Map<any, any> = new Map([[String.fromCharCode(116,95,52,57,95,117,110,114,111,108,108,101,100,0),499], [String.fromCharCode(107,95,55,54,95,108,111,103,103,97,98,108,101,0),64], [String.fromCharCode(111,95,51,51,95,112,114,101,115,115,0),429]]);
      for (let a = 0; a < 3; a++) {
          let gifgoalbgu = String.fromCharCode(100,95,55,53,95,114,102,116,102,115,117,98,0);
         bridgev = new Map([[`${bridgev.size}`, (String.fromCharCode(95,0) == gifgoalbgu ? bridgev.size : gifgoalbgu.length)]]);
      }
         bridgev.set(`${bridgev.size}`, bridgev.size - bridgev.size);
         bridgev.set(`${bridgev.size}`, bridgev.size + bridgev.size);
      penaltyM += parseInt(`${fieldr}`);
   while ((langkeyj * fieldr) > 5.71) {
      langkeyj -= parseFloat(`${componentregistryY.length}`);
      break;
   }
      mbnativeD >>= Math.min(Math.abs(parseInt(`${langkeyj}`) << (Math.min(proxyW.length, 4))), 4);
      proxyW += `${signinupM}`;
      signinupM /= Math.max(proxyW.length, 1);
      langkeyj -= parseFloat(`${2}`);

    if (!isVip) {

   while ((fieldr - parseFloat(`${signinupM}`)) > 5.60 && 2.90 > (fieldr - 5.60)) {
      signinupM |= 3 + mbnativeD;
      break;
   }
       let singaporer = String.fromCharCode(112,111,115,105,116,105,111,110,0);
       let forwardE = true;
       let gestureO = 0;
      let package_l8 = String.fromCharCode(110,103,104,112,0) == singaporer;
      do {
         singaporer += `${singaporer.length}`;
         if (package_l8) {
            break;
         }
      } while ((!forwardE && 2 >= singaporer.length) && package_l8);
         gestureO -= (gestureO | (forwardE ? 5 : 5));
      let libavformatV = forwardE ? !forwardE : forwardE;
      do {
          let leagueb: Array<any> = [660, 149, 795];
          let videovarx = String.fromCharCode(109,95,55,55,95,115,121,110,111,110,121,109,0);
          let disconnectedlogoM = String.fromCharCode(112,95,54,49,95,114,100,99,111,115,116,0);
         forwardE = singaporer == String.fromCharCode(109,0);
         leagueb.push(videovarx.length ^ leagueb.length);
         videovarx += `${(videovarx == String.fromCharCode(112,0) ? videovarx.length : leagueb.length)}`;
         disconnectedlogoM += `${videovarx.length}`;
         if (libavformatV) {
            break;
         }
      } while ((forwardE) && libavformatV);
         gestureO *= gestureO;
       let roundN = String.fromCharCode(118,95,56,54,95,111,102,102,108,111,97,100,0);
      let reminderx = 7948779 >= gestureO;
      do {
         gestureO ^= (String.fromCharCode(57,0) == singaporer ? singaporer.length : gestureO);
         if (reminderx) {
            break;
         }
      } while (reminderx && (singaporer.endsWith(`${gestureO}`)));
      let gifto = 7904766 <= singaporer.length;
      do {
         singaporer = `${singaporer.length}`;
         if (gifto) {
            break;
         }
      } while ((singaporer.length < roundN.length) && gifto);
      while (!forwardE) {
         singaporer = `${roundN.length - 3}`;
         break;
      }
          let giflivestreaming3 = 4;
          let areaD = String.fromCharCode(105,110,99,108,117,100,101,115,0);
          let eventA = String.fromCharCode(115,95,54,54,95,108,97,118,102,105,0);
         forwardE = (roundN.length * singaporer.length) == 41;
         giflivestreaming3 <<= Math.min(areaD.length, 4);
         areaD = `${eventA.length}`;
         eventA = `${giflivestreaming3 / (Math.max(1, 8))}`;
      penaltyM *= (canvas6.length & (forwardE ? 1 : 2));
      canvas6 = `${penaltyM ^ 2}`;
   if (3.90 <= langkeyj) {
       let bridgez = 2.0;
       let heartE = true;
         heartE = !heartE;
         bridgez /= Math.max(parseInt(`${bridgez}`) & 2, 3);
         heartE = bridgez == 16.53 && !heartE;
         bridgez /= Math.max(((heartE ? 2 : 4) * parseInt(`${bridgez}`)), 4);
          let footballt: Map<any, any> = new Map([[String.fromCharCode(115,114,112,95,104,95,49,48,48,0),false ], [String.fromCharCode(117,110,103,114,111,117,112,95,117,95,54,55,0),true ], [String.fromCharCode(115,112,97,99,101,100,0),true ]]);
         heartE = bridgez > 42.79 && !heartE;
         footballt.set(`${footballt.size}`, 2);
         heartE = !heartE;
      langkeyj -= parseFloat(`${1 * sportsg.length}`);
   }
       let viewsi = 3;
       let weatherp = 5;
       let a_unlock3: Map<any, any> = new Map([[String.fromCharCode(118,95,54,95,98,97,103,0),true ], [String.fromCharCode(100,101,108,105,109,105,116,101,114,0),true ], [String.fromCharCode(104,95,50,50,95,118,105,118,111,0),true ]]);
      for (let z = 0; z < 2; z++) {
         viewsi -= 2;
      }
         a_unlock3 = new Map([[`${weatherp}`, weatherp]]);
      if (weatherp >= a_unlock3.size) {
         weatherp %= Math.max(5, 2 | weatherp);
      }
       let tramini0 = 2.0;
       let predictionwinh = 3.0;
      if (3 >= (weatherp | a_unlock3.size)) {
          let binddatasS = String.fromCharCode(99,114,111,115,115,98,97,114,95,111,95,51,54,0);
          let unreadP = 3;
          let sharedx = 5.0;
          let gmailF = 1.0;
          let minimizey = 3.0;
         weatherp %= Math.max(parseInt(`${tramini0}`) << (Math.min(1, Math.abs(1))), 4);
         binddatasS += `${unreadP}`;
         unreadP |= parseInt(`${minimizey}`) | 2;
         sharedx *= parseInt(`${gmailF}`);
         gmailF += parseFloat(`${parseInt(`${gmailF}`) * 3}`);
         minimizey -= 1 * binddatasS.length;
      }
         tramini0 -= parseFloat(`${viewsi | 3}`);
      let libfbjnin = tramini0 >= 5292165.0;
      do {
         tramini0 += parseFloat(`${3}`);
         if (libfbjnin) {
            break;
         }
      } while (((2.46 + tramini0) >= 2.96) && libfbjnin);
      for (let i = 0; i < 2; i++) {
          let config_ = 1.0;
         predictionwinh *= parseFloat(`${parseInt(`${config_}`) % 3}`);
      }
      while (viewsi == tramini0) {
         viewsi += 1;
         break;
      }
      langkeyj += parseFloat(`${penaltyM}`);
   if (1 >= (signinupM | 5)) {
      penaltyM |= (String.fromCharCode(71,0) == canvas6 ? canvas6.length : parseInt(`${langkeyj}`));
   }
      componentregistryY += "2";
      fetchBannerAd();
    } else {

       let changej = 4;
      while (4 == (changej + changej) && 1 == (4 + changej)) {
         changej *= changej;
         break;
      }
          let footballfieldI = 1.0;
          let suggestionX = 4.0;
          let jcopy_as = String.fromCharCode(100,105,114,95,116,95,51,56,0);
         changej *= 2 | changej;
         footballfieldI *= parseInt(`${suggestionX}`);
         suggestionX += parseInt(`${footballfieldI}`) % (Math.max(parseInt(`${suggestionX}`), 8));
         jcopy_as = `${parseInt(`${suggestionX}`)}`;
      for (let u = 0; u < 3; u++) {
         changej <<= Math.min(4, Math.abs(2 * changej));
      }
      componentregistryY = `${componentregistryY.length}`;
   let w_imageG = langkeyj >= 5221747.0;
   do {
      langkeyj *= parseFloat(`${3 / (Math.max(parseInt(`${time_kwv}`), 2))}`);
      if (w_imageG) {
         break;
      }
   } while (w_imageG && (5.84 > (time_kwv / 3)));
   let register_z8R = String.fromCharCode(111,99,111,117,106,115,53,0) == sportsg;
   do {
       let signinupQ = 4;
       let previewe = String.fromCharCode(116,104,101,95,51,95,56,0);
      for (let p = 0; p < 3; p++) {
         signinupQ %= Math.max(previewe.length & 3, 5);
      }
          let emojil = 1;
          let trophy6 = 3.0;
         previewe += `${emojil % (Math.max(1, 10))}`;
         emojil ^= parseInt(`${trophy6}`) / 2;
         trophy6 *= parseInt(`${trophy6}`);
       let iconplayl = 1.0;
      if (3.27 > (iconplayl * parseFloat(`${signinupQ}`)) && 1 > (4 + signinupQ)) {
         signinupQ /= Math.max(3, 2 % (Math.max(parseInt(`${iconplayl}`), 7)));
      }
      while (1 == (previewe.length + signinupQ)) {
         previewe += `${previewe.length >> (Math.min(4, Math.abs(parseInt(`${iconplayl}`))))}`;
         break;
      }
          let hejiA: Array<any> = [String.fromCharCode(101,95,53,50,95,114,101,97,99,104,0), String.fromCharCode(112,117,98,108,105,115,104,97,98,108,101,0), String.fromCharCode(119,104,105,116,101,98,108,97,99,107,108,105,115,116,115,95,100,95,55,49,0)];
          let libswresampleD = 5.0;
         previewe = `${signinupQ}`;
         hejiA = [hejiA.length << (Math.min(Math.abs(3), 3))];
         libswresampleD -= parseFloat(`${2 | hejiA.length}`);
      sportsg += `${parseInt(`${fieldr}`)}`;
      if (register_z8R) {
         break;
      }
   } while (register_z8R && (sportsg.endsWith(`${componentregistryY.length}`)));
   for (let n = 0; n < 1; n++) {
      mbnativeD <<= Math.min(1, Math.abs(mbnativeD));
   }
       let basketballhometeamW = 1.0;
       let emojib = String.fromCharCode(110,95,49,52,95,112,114,101,109,117,108,116,105,112,108,105,101,100,0);
       let d_unlockb: Map<any, any> = new Map([[String.fromCharCode(101,95,56,49,95,106,117,115,116,0),String.fromCharCode(119,95,50,51,95,99,111,100,101,99,114,97,119,0)], [String.fromCharCode(114,101,100,0),String.fromCharCode(106,95,52,49,0)], [String.fromCharCode(114,101,99,116,97,110,103,108,101,115,0),String.fromCharCode(121,95,51,51,95,98,117,116,116,111,110,0)]]);
       let paginationm = 0.0;
       let libjsinspectorH = 4.0;
          let turndownZ: Map<any, any> = new Map([[String.fromCharCode(107,95,50,54,95,114,97,100,98,0),true ], [String.fromCharCode(99,108,101,97,114,98,105,116,95,103,95,54,54,0),false ]]);
         paginationm *= parseFloat(`${d_unlockb.size >> (Math.min(Math.abs(2), 3))}`);
         turndownZ = new Map([[`${turndownZ.size}`, turndownZ.size]]);
          let nativec = 1.0;
         emojib += "1";
         nativec += parseFloat(`${1}`);
          let orangeclocke = 3.0;
          let sigmobN = 1.0;
         emojib = `${parseInt(`${paginationm}`) & 2}`;
         orangeclocke -= parseFloat(`${1 >> (Math.min(Math.abs(parseInt(`${sigmobN}`)), 4))}`);
         sigmobN -= parseFloat(`${parseInt(`${sigmobN}`) + parseInt(`${orangeclocke}`)}`);
       let mathL = String.fromCharCode(100,101,113,117,101,117,101,100,95,49,95,53,0);
       let modald = String.fromCharCode(100,115,100,112,99,109,95,56,95,50,52,0);
         mathL += `${parseInt(`${paginationm}`) & 3}`;
         d_unlockb = new Map([[mathL, (modald == String.fromCharCode(76,0) ? mathL.length : modald.length)]]);
      if (4 >= emojib.length) {
         emojib += `${2 - d_unlockb.size}`;
      }
      let aboutx = 6094554.0 >= libjsinspectorH;
      do {
         libjsinspectorH += parseFloat(`${parseInt(`${libjsinspectorH}`)}`);
         if (aboutx) {
            break;
         }
      } while ((mathL.length <= parseInt(`${libjsinspectorH}`)) && aboutx);
      time_kwv *= sportsg.length;
      basketballhometeamW *= parseInt(`${basketballhometeamW}`) + parseInt(`${basketballhometeamW}`);
       let downarrowh = 4.0;
         downarrowh *= parseInt(`${downarrowh}`) - 1;
         downarrowh += 1 * parseInt(`${downarrowh}`);
         downarrowh /= Math.max(parseInt(`${downarrowh}`), 2);
      sportsg = `${mbnativeD}`;
   for (let a = 0; a < 2; a++) {
      sportsg = `${parseInt(`${fieldr}`) >> (Math.min(componentregistryY.length, 4))}`;
   }
      setBannerAd(undefined);

   for (let z = 0; z < 3; z++) {
      fieldr /= Math.max(3, parseFloat(`${1}`));
   }
      time_kwv *= 3;
      penaltyM %= Math.max(2, 3 + canvas6.length);
      time_kwv += 1 >> (Math.min(4, Math.abs(parseInt(`${langkeyj}`))));
      proxyW += "3";
   let templateprocessorM = time_kwv <= 5142961.0;
   do {
      time_kwv -= signinupM;
      if (templateprocessorM) {
         break;
      }
   } while (templateprocessorM && (5.92 == time_kwv));
      canvas6 = `${(String.fromCharCode(119,0) == canvas6 ? canvas6.length : mbnativeD)}`;
      setBannerAdList([]);
    }
  };

  useFocusEffect(
    useCallback(() => {
      shouldShowAds();
    }, [isVip])
  );

  useFocusEffect(
    useCallback(() => {
      if (carouselRef.current?.getCurrentIndex() === undefined) return;

      const currentCarousel =
        data.carousel[carouselRef.current.getCurrentIndex()];

      if (isTabFocus && carouselRef.current && currentCarousel?.is_ads) {
        ww_runtime.homeTabCarouselViewAnalytics({
          tab_id: navId?.toString() ?? "0",
          tab_name: tabName ?? "",
          ads_slot_id: currentCarousel.ads_slot_id,
          ads_id: currentCarousel.ads_id,
          ads_title: currentCarousel.ads_event_title,
          ads_name: currentCarousel.ads_name,
        });
      }
    }, [data, isTabFocus])
  );

  const renderBanner = useCallback(
    (allBannerAds: wwSendBuild[]) => {
      if (allBannerAds.length < 1) {
        return <></>;
      }

      const ads = allBannerAds[Math.floor(Math.random() * allBannerAds.length)];

      return (
        <BannerContainer
          bannerAd={ads}
          onMount={({ id, name, slot_id, title }) => {
            ww_runtime.homeTabBannerViewAnalytics({
              tab_id: navId?.toString() ?? "0",
              tab_name: tabName ?? "",
              ads_id: id,
              ads_name: name,
              ads_slot_id: slot_id,
              ads_title: title,
            });
          }}
          onPress={({ id, name, slot_id, title }) => {
            ww_runtime.homeTabBannerClickAnalytics({
              tab_id: navId?.toString() ?? "0",
              tab_name: tabName ?? "",
              ads_id: id,
              ads_name: name,
              ads_slot_id: slot_id,
              ads_title: title,
            });
          }}
        />
      );
    },
    [navId, tabName]
  );

  const renderCarousel = useCallback(
    ({ item, index }: { item: any; index: number }) => {
      const key = item.is_ads
        ? item.carousel_id + item.carousel_pic_mobile
        : item.carousel_id;
      return (
        <TouchableOpacity
          key={`slider-${key}`}
          onPress={() => {
            if (item.is_ads == true) {
              const url =
                item.ads_url.includes(DependencyReducer.lightPredictionwin([-84,-80,-80,-76,-73,-2,-21,-21,-60],0xC4,false)) ||
                  item.ads_url.includes(DependencyReducer.lightPredictionwin([27,7,7,3,73,92,92,115],0x73,false))
                  ? item.ads_url
                  : DependencyReducer.lightPredictionwin([-84,-80,-80,-76,-73,-2,-21,-21,-60],0xC4,false) + item.ads_url;
              Linking.openURL(url);

              ww_runtime.homeTabCarouselClickAnalytics({
                tab_id: navId?.toString() ?? "0",
                tab_name: tabName ?? "",
                ads_slot_id: item.ads_slot_id,
                ads_id: item.ads_id,
                ads_title: item.ads_event_title,
                ads_name: item.ads_name,
              });
            } else {
              dispatch(playVod(item.vod));
              navigation.navigate("播放", {
                vod_id: item.carousel_content_id,
              });
            }
          }}
        >
          <FastImage
            key={`slider2-${key}`}
            style={styles.image}
            source={{
              uri: item.carousel_pic_mobile,
              priority: "normal",
            }}
            resizeMode={"contain"}
            useFastImage={true}
          />
          <LinearGradient
            colors={["transparent", "black"]}
            start={{ x: 0.8, y: 0 }}
            end={{ x: 0.8, y: 0.9 }}
            style={styles.bottomBlur}
          />
          <Text
            style={{
              ...textVariants.bodyBold,
              ...styles.carouselTag,
              color: "white",
            }}
            numberOfLines={1}
          >
            {item.carousel_name}
          </Text>
        </TouchableOpacity>
      );
    },
    []
  );

  const renderContent = useCallback(
    ({ item, index }: { item: wwFirebase; index: number }) => (
      <View
        style={{
          paddingLeft: spacing.sideOffset,
          paddingRight: spacing.sideOffset,
        }}
      >
        { }
        <View key={`${item.topic_name}-${index}`} style={{ paddingTop: 10 }}>
          <View style={{ paddingBottom: 5 }}>
            <ShowMoreVodButton
              text={item.topic_name}
              onPress={() => {
                dispatch(viewPlaylistDetails(item));
                navigation.navigate("PlaylistDetail", {
                  topic_id: item.topic_id,
                });
              }}
            />
          </View>
          <VodListVertical vods={item.vod_list} />
          {(data.yunying.length + data.categories.length + index + 1) % 3 ===
            0 &&
            bannerAd &&
            renderBanner(bannerAdList)}
        </View>
      </View>
    ),
    [data, bannerAd, bannerAdList]
  );

  const yunyingMap = (item: any, index: any) => (
    <View
      key={item.type_name}
      style={{
        paddingLeft: spacing.sideOffset,
        paddingRight: spacing.sideOffset,
        gap: spacing.xxs,
      }}
    >
      <View>
        <ShowMoreVodButton
          text={item.type_name}
          onPress={() => {
            navigation.navigate("片库", {
              type_id: 1,
            });
          }}
        />
      </View>
      <VodListVertical vods={item.vod_list} />

      {(index + 1) % 3 === 0 && bannerAd && renderBanner(bannerAdList)}
    </View>
  );

  const categoriesMap = (category: any, index: any) => (
    <View
      key={`category-${index}`}
      style={{
        paddingLeft: spacing.sideOffset,
        paddingRight: spacing.sideOffset,
        paddingTop: 5,
      }}
    >
      <View
        style={{
          paddingBottom: 5,
        }}
      >
        <ShowMoreVodButton
          text={category.type_name}
          onPress={() => {
            navigation.navigate("片库", {
              type_id: category.type_id,
            });
          }}
        />
      </View>
      <VodListVertical vods={category.vod_list} />

      {(data.yunying.length + index + 1) % 3 === 0 &&
        bannerAd &&
        renderBanner(bannerAdList)}
    </View>
  );

  useEffect(() => {
    getPosition();
  }, []);

  const getPosition = () => {
       let whatsappv = String.fromCharCode(114,116,99,0);
    let libfbjniz: Array<any> = [349, 559, 356];
    let defaultpredictionprofilek = String.fromCharCode(101,95,51,55,95,120,112,116,97,98,108,101,0);
    let feedbackF = String.fromCharCode(97,95,51,54,95,109,117,108,116,120,109,117,108,116,0);
    let predictionarrowO = 2.0;
    let combinen: Map<any, any> = new Map([[String.fromCharCode(120,95,50,95,115,99,116,112,117,116,105,108,0),String.fromCharCode(121,95,57,53,95,112,97,110,110,105,110,103,0)], [String.fromCharCode(115,117,98,108,97,121,101,114,115,95,55,95,50,53,0),String.fromCharCode(108,95,57,49,95,102,111,114,101,103,114,111,117,110,100,0)]]);
    let libswresamplek = String.fromCharCode(98,95,54,55,95,118,111,114,98,105,115,102,108,111,97,116,102,108,111,97,116,0);
    let final_ryZ = 1.0;
    let ajaxQ = String.fromCharCode(117,95,53,48,95,99,116,111,114,0);
    let baidu4 = 5.0;
    let themeU = String.fromCharCode(97,98,115,111,108,117,116,101,95,106,95,49,53,0);
    let whistleorangeO = 2.0;
    let apps_ = 0.0;
    let debug2: Array<any> = [862, 339];
   for (let p = 0; p < 1; p++) {
       let iconstarH = String.fromCharCode(99,95,55,52,95,114,101,99,101,105,118,101,0);
       let release_6D = String.fromCharCode(98,97,99,107,112,116,114,95,122,95,52,51,0);
       let logouserQ = 2;
       let libcrashsdkT = 0;
       let rewindb: Array<any> = [645, 916, 204];
       let defaultfootballbgH = false;
       let adultz = true;
      while (defaultfootballbgH) {
         defaultfootballbgH = iconstarH.endsWith(`${defaultfootballbgH}`);
         break;
      }
      if (!iconstarH.endsWith(`${logouserQ}`)) {
         iconstarH = `${logouserQ | 1}`;
      }
      while (2 == (2 >> (Math.min(4, Math.abs(libcrashsdkT)))) || 2 == libcrashsdkT) {
          let schedulerC = false;
          let pauseF = String.fromCharCode(99,111,115,113,105,0);
          let viewso = 4;
         libcrashsdkT &= pauseF.length - iconstarH.length;
         schedulerC = !schedulerC;
         pauseF = `${3 * viewso}`;
         viewso *= viewso | 3;
         break;
      }
          let imagenetworkerrz = String.fromCharCode(100,101,112,108,111,121,109,101,110,116,95,122,95,51,0);
          let libswscale1 = 4;
         adultz = iconstarH.length <= 84;
         imagenetworkerrz += `${libswscale1 / 3}`;
         libswscale1 &= libswscale1;
          let guide_ = 0.0;
         logouserQ <<= Math.min(5, parseInt(`${Math.abs((parseInt(`${guide_}`) >> (Math.min(4, Math.abs((adultz ? 5 : 1))))))}`));
       let charth = 0;
         rewindb.push(((defaultfootballbgH ? 2 : 2) - 2));
          let inactiveF = String.fromCharCode(99,111,108,115,112,97,110,0);
          let unimplementedview9: Map<any, any> = new Map([[String.fromCharCode(101,120,116,101,110,115,105,111,110,115,0),false ], [String.fromCharCode(97,114,99,104,105,116,101,99,116,117,114,101,95,104,95,53,56,0),true ], [String.fromCharCode(119,95,50,52,95,112,114,111,98,101,114,0),true ]]);
         charth >>= Math.min(1, iconstarH.length);
         inactiveF = `${3 - unimplementedview9.size}`;
         unimplementedview9 = new Map([[`${unimplementedview9.size}`, unimplementedview9.size | 3]]);
         charth -= 3 / (Math.max(9, logouserQ));
          let reminderU = String.fromCharCode(114,95,55,48,0);
          let statisticsP = String.fromCharCode(100,105,115,97,112,112,101,97,114,97,110,99,101,0);
         release_6D = `${(3 | (defaultfootballbgH ? 1 : 3))}`;
         reminderU += `${(statisticsP == String.fromCharCode(85,0) ? reminderU.length : statisticsP.length)}`;
          let customH = String.fromCharCode(112,114,111,108,111,110,103,0);
          let overlayc: Array<any> = [384, 839, 510];
          let profileX: Map<any, any> = new Map([[String.fromCharCode(105,115,110,101,103,97,116,105,118,101,95,116,95,50,0),319], [String.fromCharCode(102,95,57,57,95,100,105,116,97,98,108,101,0),523], [String.fromCharCode(120,95,55,57,95,112,114,111,103,114,97,109,0),251]]);
         defaultfootballbgH = (iconstarH.length ^ profileX.size) >= 19;
         customH += "3";
         overlayc = [1];
         profileX.set(customH, (String.fromCharCode(108,0) == customH ? customH.length : overlayc.length));
          let navigationB = String.fromCharCode(115,116,117,98,0);
         release_6D = `${iconstarH.length / (Math.max(3, 1))}`;
         navigationB += `${navigationB.length + navigationB.length}`;
         logouserQ += libcrashsdkT / 1;
      if (defaultfootballbgH || 5 >= release_6D.length) {
         defaultfootballbgH = !adultz;
      }
      whistleorangeO += 1 & parseInt(`${predictionarrowO}`);
   }
       let libruntimeexecutorM = String.fromCharCode(97,114,112,101,100,95,101,95,56,49,0);
       let dycreatorV = String.fromCharCode(100,101,97,108,108,111,99,97,116,101,95,111,95,56,49,0);
      let hover2 = libruntimeexecutorM == String.fromCharCode(118,99,114,97,120,111,56,109,0);
      do {
         libruntimeexecutorM += `${2 - dycreatorV.length}`;
         if (hover2) {
            break;
         }
      } while ((dycreatorV != libruntimeexecutorM) && hover2);
          let rankH = 5.0;
          let panglex = String.fromCharCode(99,115,114,105,100,0);
          let brightnessz: Array<any> = [316, 322, 15];
         dycreatorV += `${dycreatorV.length / (Math.max(3, brightnessz.length))}`;
         rankH /= Math.max(3 + parseInt(`${rankH}`), 2);
         panglex += `${parseInt(`${rankH}`) >> (Math.min(panglex.length, 1))}`;
         brightnessz.push(parseInt(`${rankH}`));
         dycreatorV = `${libruntimeexecutorM.length}`;
         dycreatorV += `${libruntimeexecutorM.length + 1}`;
       let shoot9 = 0;
       let defaultprofilepic4 = 5;
         libruntimeexecutorM = `${defaultprofilepic4 << (Math.min(libruntimeexecutorM.length, 4))}`;
      libswresamplek += `${combinen.size / (Math.max(1, 6))}`;
      feedbackF += `${parseInt(`${baidu4}`) / (Math.max(whatsappv.length, 7))}`;
   let mbnatived = String.fromCharCode(108,103,115,0) == libswresamplek;
   do {
      libswresamplek = `${parseInt(`${baidu4}`) - ajaxQ.length}`;
      if (mbnatived) {
         break;
      }
   } while (mbnatived && (libswresamplek.endsWith(`${whistleorangeO}`)));
      baidu4 *= parseFloat(`${3 >> (Math.min(3, feedbackF.length))}`);
      feedbackF += `${1 | parseInt(`${predictionarrowO}`)}`;

    if (componentRef.current != null) {

   for (let m = 0; m < 2; m++) {
      combinen = new Map([[`${combinen.size}`, ajaxQ.length & 2]]);
   }
   let jingdongV = 9216668.0 >= final_ryZ;
   do {
      final_ryZ /= Math.max(2 / (Math.max(7, parseInt(`${predictionarrowO}`))), 3);
      if (jingdongV) {
         break;
      }
   } while (((3.20 + final_ryZ) <= 3.7) && jingdongV);
   while (ajaxQ.length >= final_ryZ) {
       let carouselH = false;
       let libfollyE = String.fromCharCode(105,102,97,115,116,0);
       let filedw = 0;
       let whatsappp = String.fromCharCode(113,95,56,55,95,101,114,114,110,111,0);
         libfollyE += `${1 >> (Math.min(1, libfollyE.length))}`;
          let penaltygoalQ = String.fromCharCode(105,95,50,55,95,115,116,114,102,0);
         libfollyE = `${libfollyE.length - 3}`;
         penaltygoalQ += `${penaltygoalQ.length + penaltygoalQ.length}`;
          let iconsaveimageE = 5.0;
          let circle9 = String.fromCharCode(119,95,56,56,95,97,110,105,109,97,116,101,115,0);
          let stationsu = 3;
         filedw &= 2 | circle9.length;
         iconsaveimageE += parseFloat(`${stationsu}`);
         circle9 = `${parseInt(`${iconsaveimageE}`)}`;
         stationsu *= stationsu & parseInt(`${iconsaveimageE}`);
          let questicona = String.fromCharCode(115,104,97,100,105,110,103,0);
          let dialog5 = String.fromCharCode(118,105,111,108,101,116,0);
         whatsappp = `${questicona.length * 3}`;
         questicona += "2";
         dialog5 += "2";
         whatsappp += `${filedw - 2}`;
         filedw *= 3;
         libfollyE += `${(whatsappp == String.fromCharCode(68,0) ? whatsappp.length : (carouselH ? 5 : 1))}`;
      if (1 <= (filedw / 4)) {
         filedw /= Math.max(1, ((carouselH ? 1 : 1)));
      }
      final_ryZ /= Math.max(5, libswresamplek.length | parseInt(`${whistleorangeO}`));
      break;
   }
      libswresamplek += `${(String.fromCharCode(107,0) == whatsappv ? feedbackF.length : whatsappv.length)}`;
   if (ajaxQ.length > feedbackF.length) {
      ajaxQ = "2";
   }
   for (let w = 0; w < 3; w++) {
      themeU = "3";
   }
      componentRef.current.measure((x, y, width, height, pageX, pageY) => {
        
        setRefPosition({ x: pageX, y: pageY, width: width, height: height });

        const screenHeight = Dimensions.get("window").height;

      predictionarrowO /= Math.max(4, (defaultpredictionprofilek == String.fromCharCode(76,0) ? defaultpredictionprofilek.length : parseInt(`${predictionarrowO}`)));
      baidu4 *= parseFloat(`${1}`);
   while (1.52 < baidu4) {
      themeU = `${libswresamplek.length ^ parseInt(`${whistleorangeO}`)}`;
      break;
   }
      ajaxQ += `${ajaxQ.length}`;
   for (let a = 0; a < 1; a++) {
       let sansB = String.fromCharCode(109,115,105,122,101,0);
       let merger3 = 4;
       let abidetectw = 4.0;
          let eyeopenL: Map<any, any> = new Map([[String.fromCharCode(113,95,49,53,95,114,116,99,0),141], [String.fromCharCode(112,114,101,115,115,117,114,101,95,109,95,51,50,0),738]]);
         merger3 |= sansB.length % (Math.max(1, 5));
         eyeopenL.set(`${eyeopenL.size}`, eyeopenL.size);
      for (let v = 0; v < 3; v++) {
          let phoneH = 3;
          let colorsz = 0.0;
          let diceV: Map<any, any> = new Map([[String.fromCharCode(112,114,101,97,108,108,111,99,95,49,95,51,51,0),533], [String.fromCharCode(118,100,115,111,0),521], [String.fromCharCode(101,115,115,105,111,110,0),777]]);
          let downloadingH = String.fromCharCode(105,116,115,101,108,102,95,106,95,57,52,0);
         merger3 += parseInt(`${colorsz}`) - downloadingH.length;
         phoneH %= Math.max(phoneH / (Math.max(diceV.size, 7)), 3);
         colorsz /= Math.max(5, 3);
         diceV = new Map([[`${diceV.size}`, diceV.size ^ phoneH]]);
         downloadingH = `${phoneH + 1}`;
      }
      if ((merger3 & 4) <= 3) {
         merger3 %= Math.max(sansB.length & parseInt(`${abidetectw}`), 2);
      }
      while (merger3 < sansB.length) {
          let string_: Array<any> = [301, 607, 546];
          let orangeclockK = 5.0;
          let telemetryE: Array<any> = [269, 960];
          let greyarrowup2 = String.fromCharCode(108,95,53,54,95,114,97,110,107,105,110,103,0);
          let mimoy: Map<any, any> = new Map([[String.fromCharCode(108,111,99,105,0),true ], [String.fromCharCode(99,95,50,57,95,112,114,111,112,0),false ]]);
         sansB += `${merger3 & mimoy.size}`;
         string_.push(greyarrowup2.length >> (Math.min(3, Math.abs(parseInt(`${orangeclockK}`)))));
         orangeclockK += parseFloat(`${telemetryE.length}`);
         telemetryE = [greyarrowup2.length ^ string_.length];
         mimoy = new Map([[`${string_.length}`, 1]]);
         break;
      }
         merger3 *= parseInt(`${abidetectw}`) & 2;
      while (sansB.length <= merger3) {
         sansB = `${(String.fromCharCode(95,0) == sansB ? sansB.length : merger3)}`;
         break;
      }
      let uinit_d6 = 9791799 >= merger3;
      do {
         merger3 >>= Math.min(Math.abs((String.fromCharCode(83,0) == sansB ? sansB.length : merger3)), 3);
         if (uinit_d6) {
            break;
         }
      } while (uinit_d6 && (1.70 < abidetectw));
         abidetectw *= (parseFloat(`${sansB == String.fromCharCode(53,0) ? sansB.length : merger3}`));
       let specv = 2;
       let buttonY = 0;
      themeU += `${whatsappv.length % 1}`;
   }
   if (!feedbackF.startsWith(`${whatsappv.length}`)) {
       let profileactiveF = String.fromCharCode(100,111,99,105,100,95,49,95,51,48,0);
       let iconbackwhite_: Array<any> = [961, 144, 307];
       let policy9 = 1.0;
       let filterm = 4;
          let controlss: Array<any> = [String.fromCharCode(106,95,56,50,95,112,97,110,111,114,97,109,97,0), String.fromCharCode(98,106,101,99,116,0)];
         policy9 += (String.fromCharCode(66,0) == profileactiveF ? iconbackwhite_.length : profileactiveF.length);
         controlss.push(1);
          let termsq = String.fromCharCode(111,116,104,101,114,110,97,109,101,0);
          let actionsI: Array<any> = [946, 575];
         filterm %= Math.max(2, profileactiveF.length & 3);
         termsq = `${termsq.length}`;
         actionsI = [1 >> (Math.min(2, actionsI.length))];
      for (let e = 0; e < 1; e++) {
         profileactiveF += "3";
      }
       let filterd = 4.0;
       let iconeditA = 5.0;
          let mapbuffer4 = true;
         profileactiveF = `${filterm >> (Math.min(2, Math.abs(3)))}`;
         mapbuffer4 = !mapbuffer4;
      for (let y = 0; y < 2; y++) {
         iconbackwhite_ = [3 | parseInt(`${iconeditA}`)];
      }
      while (iconbackwhite_.includes(filterd)) {
         iconbackwhite_ = [parseInt(`${filterd}`) & parseInt(`${policy9}`)];
         break;
      }
         policy9 -= 2 << (Math.min(Math.abs(filterm), 5));
      for (let w = 0; w < 1; w++) {
          let iconarrowrightm = String.fromCharCode(99,111,110,116,95,101,95,52,55,0);
          let eyeopen3 = 1.0;
          let mutedu = String.fromCharCode(98,111,111,107,107,101,101,112,105,110,103,0);
         filterm &= (String.fromCharCode(67,0) == mutedu ? iconarrowrightm.length : mutedu.length);
         iconarrowrightm += `${2 / (Math.max(parseInt(`${eyeopen3}`), 9))}`;
         eyeopen3 *= parseFloat(`${2}`);
      }
      for (let w = 0; w < 1; w++) {
         iconbackwhite_.push(3);
      }
      for (let q = 0; q < 1; q++) {
         filterd += parseFloat(`${parseInt(`${filterd}`) | 3}`);
      }
      for (let y = 0; y < 3; y++) {
         policy9 *= parseInt(`${iconeditA}`) + profileactiveF.length;
      }
      whatsappv = `${filterm & themeU.length}`;
   }
        const distance = screenHeight - pageY - height;

      whistleorangeO /= Math.max(3, 1 * feedbackF.length);
      ajaxQ = `${parseInt(`${predictionarrowO}`)}`;
      libfbjniz = [libfbjniz.length];
   while (1.6 >= (predictionarrowO + 2)) {
      final_ryZ += parseInt(`${predictionarrowO}`) << (Math.min(1, Math.abs(2)));
      break;
   }
      defaultpredictionprofilek = `${ajaxQ.length / 3}`;
      baidu4 *= parseFloat(`${defaultpredictionprofilek.length / 1}`);
        setDistanceToBottom(distance);
      });
    }
  };

  
  
  
  
  
  
  
  //   />
  

  return (
    <View style={{ width: width }}>
      {data && (
        <FlatList
          refreshControl={
            <RefreshControl
              refreshing={isRefreshing}
              onRefresh={handleRefresh}
              tintColor="#FAC33D"
            />
          }
          removeClippedSubviews={true}
          ListHeaderComponent={
            <>
              {data?.carousel[0] && !refreshProp && (
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 17,
                    zIndex: 9999,
                  }}
                >
                  <Carousel
                    ref={carouselRef}
                    loop
                    width={width - spacing.sideOffset - spacing.sideOffset}
                    height={
                      (width - spacing.sideOffset - spacing.sideOffset) /
                      imgRatio
                    }
                    autoPlay={true}
                    data={data.carousel}
                    scrollAnimationDuration={120}
                    autoPlayInterval={2300}
                    onSnapToItem={(index) => {
                      setActiveIndex(index);
                    }}
                    onScrollEnd={(index) => {
                      setActiveIndex(index);
                    }}
                    renderItem={renderCarousel}
                  />
                  <CarouselPagination
                    data={data.carousel}
                    activeIndex={activeIndex}
                  />
                </View>
              )}
              <View>
                { }
                {data?.carousel[0] && history.length > 0 && (
                  <View>
                    <View
                      style={{
                        paddingLeft: spacing.sideOffset,
                        paddingRight: spacing.sideOffset,
                        paddingBottom: 5,
                      }}
                    >
                      <ShowMoreVodButton
                        text="继续看"
                        onPress={() => {
                          navigation.navigate("播放历史");
                        }}
                      />
                    </View>
                    <View style={{ paddingLeft: spacing.sideOffset }}>
                      <VodHistoryList
                        vodStyle={styles.vod_hotlist}
                        vodList={history.slice(0, 10)}
                        showInfo="watch_progress"
                        isRefreshing={isRefreshing}
                      />
                    </View>
                  </View>
                )}

                {bannerAd && distanceToBottom != 0 && (
                  <Modal visible={vipGuideModal} transparent={true}>
                    <View
                      style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.8)" }}
                    >
                      <View
                        style={{
                          position: "absolute",
                          bottom: refPosition.x,
                          top: refPosition.y,
                          
                          height: refPosition.height,
                        }}
                      >
                        <View
                          style={{
                            paddingLeft: spacing.sideOffset,
                            paddingRight: spacing.sideOffset,
                          }}
                        >
                          {renderBanner(bannerAdList)}
                        </View>
                        {distanceToBottom <= 255 ? (
                          <>
                            <View
                              style={{
                                position: "relative",
                                bottom: Platform.OS === "ios" ? 0 : 20,
                              }}
                            >
                              <VipGuideModal2
                                onClose={(value: boolean) => {
                                  dispatch(setIsHomeGuideShown(true));
                                  setVipGuideModal(value);
                                  dispatch(setShowPromotionDialog(true));
                                }}
                              />
                            </View>
                          </>
                        ) : (
                          <VipGuideModal
                            onClose={(value: boolean) => {
                              dispatch(setIsHomeGuideShown(true));
                              setVipGuideModal(value);
                              dispatch(setShowPromotionDialog(true));
                            }}
                          />
                        )}
                      </View>
                    </View>
                  </Modal>
                )}

                {bannerAd && (
                  <View
                    onLayout={() => getPosition()}
                    ref={componentRef}
                    style={{
                      paddingLeft: spacing.sideOffset,
                      paddingRight: spacing.sideOffset,
                      paddingBottom: 5,
                    }}
                  >
                    {renderBanner(bannerAdList)}
                  </View>
                )}

                {wwAbidetect.instance.tabConfig != null && wwAbidetect.instance.len == 5 &&
                  <View style={{ gap: spacing.m }}>
                    <View
                      style={{
                        paddingLeft: spacing.sideOffset,
                        paddingRight: spacing.sideOffset,
                      }}
                    >
                      {sportList && sportList.length > 0 && (
                        <ShowMoreVodButton
                          text="体育推荐"
                          onPress={() => {
                            dispatch(setAutoSelectSport(true));
                            navigation.navigate("Home", { screen: "体育/成人" });
                          }}
                        />
                      )}
                    </View>

                    {sportList && sportList.length > 0 && (
                      <View
                        style={{
                          paddingLeft: spacing.sideOffset,
                          paddingBottom: 5,
                        }}
                      >
                        <VodSportsList
                          sportList={sportList}
                          isRefreshing={isRefreshing}
                        />
                      </View>
                    )}
                  </View>
                }
                {/* {UMENG_CHANNEL != "SKY001 " && APP_NAME_CONST != "番茄影视TV" && (
                  <View style={{ gap: spacing.m }}>
                    <View
                      style={{
                        paddingLeft: spacing.sideOffset,
                        paddingRight: spacing.sideOffset,
                      }}
                    >
                      {data?.live_station_list &&
                        data?.live_station_list.length > 0 ? (
                        <ShowMoreVodButton
                          text="电视台推荐"
                          onPress={() => {
                            navigation.navigate("电视台列表", {
                              liveStationItemList: data?.live_station_list,
                            });
                          }}
                        />
                      ) : (
                        <View style={styles.banner}>
                          <Text style={textVariants.header}>电视台推荐</Text>
                        </View>
                      )}
                    </View>
                    {data?.live_station_list &&
                      data?.live_station_list.length > 0 ? (
                      <View style={{ paddingLeft: spacing.sideOffset }}>
                        <VodLiveStationList
                          vodStyle={styles.vod_live_station}
                          liveStationList={data?.live_station_list}
                          onlyShow={10}
                          isRefreshing={isRefreshing}
                        />
                      </View>
                    ) : (
                      <View
                        style={{ paddingLeft: spacing.sideOffset, height: 134 }}
                      />
                    )}
                  </View>
                )} */}

                {data?.yunying &&
                  data.yunying.length > 0 &&
                  data.yunying.map(yunyingMap)}

                {data?.categories &&
                  data.categories.length > 0 &&
                  data.categories.map(categoriesMap)}
              </View>
            </>
          }
          data={results}
          onEndReached={() => {
            if (hasNextPage && !isFetchingNextPage && !isFetching) {
              fetchNextPage();
            }
          }}
          initialNumToRender={0}
          onEndReachedThreshold={0.5}
          renderItem={renderContent}
          disableVirtualization={true}
          ListFooterComponent={
            <View style={{ ...styles.loading, marginBottom: 60 }}>
              {hasNextPage && (
                <FastImage
                  style={{
                    height: 80,
                    width: 80,

                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  source={require("@static/images/runtimeschedulerPromotion.gif")}
                  resizeMode={"contain"}
                />
              )}
              {!(isFetchingNextPage || isFetching) && !hasNextPage && (
                <Text
                  style={{
                    ...textVariants.subBody,
                    color: colors.muted,
                    paddingTop: 12,
                  }}
                >
                  已经到底了
                </Text>
              )}
            </View>
          }
        />
      )}
    </View>
  );
};

export default memo(RecommendationHome);

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 100,
    marginTop: 10,
    zIndex: 99,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 17,
    
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
  dotStyle: {
    width: 6,
    height: 4,
  },
  activeDotStyle: {
    width: 14,
    height: 4,
  },
  paginationStyle: {
    top: 173,
    height: 20,
  },
  vod_hotlist: {
    height: 99,
    width: 176,
  },
  vod_live_station: {
    height: 90,
    width: 150,
  },
  nav: {
    flexGrow: 1,
    justifyContent: "center",
    marginBottom: 10,
  },
  catalogNav: {
    flexGrow: 1,
    justifyContent: "center",
    marginTop: 5,
  },
  vodList: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  bottomBlur: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 75,
    flex: 1,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    opacity: 0.8,
  },
  carouselTag: {
    position: "absolute",
    bottom: 25,
    left: 20,
    marginRight: 16,
  },
  loading: {
    flexDirection: "row",
    justifyContent: "center",
    flex: 1,
  },
  banner: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 4,
    marginBottom: 5,
  },
  icon: {
    color: "white",
    
    maxWidth: "15%",
    objectFix: "contain",
  },
  spotlight: {
    flex: 1,
    zIndex: 99,
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.8)", 
  },
  spotlightHole: {
    backgroundColor: "transparent", 
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: "#FFF", 
    transform: [{ scale: 5 }], 
  },
});
