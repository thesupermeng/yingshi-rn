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
import ScreenContainer from "../../components/container/ww_collection";
import { RootStackScreenProps } from "@type/ww_tempnodatagif_description";
import {
  useFocusEffect,
  useNavigation,
  useTheme,
} from "@react-navigation/native";

import TitleWithBackButtonHeader from "../../components/header/ww_react_predictionwin_header";
import { Button, Dialog } from "@rneui/themed";
import ShowMoreButton from "../../components/button/ww_libjsijniprofiler_button";
import NotificationModal from "../../components/modal/ww_countdown_ksad";
import MoreArrow from "@static/images/libcxxcomponentsPrivilege.svg";
import ConfirmationModal from "../../components/modal/ww_upgrade";
import { useAppDispatch, useAppSelector, useSelector } from "@hooks/ww_catagory_neon";
import { clearStorageMemory } from "@redux/actions/ww_dialog";
import NetInfo, { NetInfoState } from "@react-native-community/netinfo";

import { removeUserAuthState } from "@redux/actions/ww_libreactperfloggerjni_small";
import { changeScreenAction } from "@redux/actions/ww_hash";
import { wwEighteenShirt } from "@redux/ww_small";

import { APP_VERSION, IS_OTHER_SKIN } from "@utility/ww_icon";
import { wwShielddoneAlbum } from "@redux/reducers/ww_detail_mbsplash";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { wwForegroundModules } from "@utility/ww_rewardvideo";
import { clearMinivodApiCache } from "../../utils/ww_taiwan";
import { wwIconscheduleColors } from "../../api/ww_liveendmodallogo_awayteamfield";
import { addUserAuthState } from "@redux/actions/ww_libreactperfloggerjni_small";
import { wwVertical } from '@redux/reducers/ww_related_kuaishou';
import { wwBodan } from "@models/ww_liveendmodallogo_awayteamfield";

export default ({ navigation }: RootStackScreenProps<"设置">) => {
  const { colors, textVariants, icons, spacing } = useTheme();
  const [isVersionDialogOpen, setIsVersionDialogOpen] = useState(false);
  const [isClearDialogOpen, setIsClearDialogOpen] = useState(false);

  const [isLogoutDialogOpen, setIsLogoutDialogOpen] = useState(false);

  const [subtitle1, setSubtitle1] = useState("当前已是最新版本" + APP_VERSION);
  const [isBackdropVisible, setIsBackdropVisible] = useState(false); 

  const settingsReducer: wwShielddoneAlbum = useAppSelector(
    ({ settingsReducer }: wwEighteenShirt) => settingsReducer
  );

  const dispatch = useAppDispatch();

  const toggleLogoutDialog = () => {
       let mutedV = 5.0;
    let subtextL = false;
    let router_ = 0;
    let reactnativeultimatelistview7 = String.fromCharCode(115,95,52,54,95,98,108,111,99,107,105,110,101,115,115,0);
    let sliderB = String.fromCharCode(99,111,108,117,109,110,95,120,95,57,53,0);
    let encryptp = String.fromCharCode(114,95,50,95,115,111,117,110,100,115,0);
    let libimagepipelineH = String.fromCharCode(116,101,120,105,112,111,100,95,115,95,57,52,0);
    let matchl = true;
    let dependenciesA = true;
    let libreactnativeblobj = String.fromCharCode(112,95,55,95,116,106,117,116,105,108,0);
    let notificationfillemptyZ = 1.0;
    let container1 = 1;
    let vietnam_: Map<any, any> = new Map([[String.fromCharCode(109,95,56,53,95,100,105,115,101,109,118,111,119,101,108,101,100,0),37], [String.fromCharCode(115,111,114,101,115,101,114,118,101,95,51,95,49,57,0),758]]);
   while ((notificationfillemptyZ * parseFloat(`${encryptp.length}`)) <= 3.12 || 2 <= (5 - encryptp.length)) {
      notificationfillemptyZ *= parseFloat(`${3}`);
      break;
   }
   let searchb = router_ >= 9890468;
   do {
      router_ ^= (String.fromCharCode(51,0) == sliderB ? sliderB.length : libimagepipelineH.length);
      if (searchb) {
         break;
      }
   } while ((subtextL) && searchb);
      router_ <<= Math.min(3, Math.abs(libimagepipelineH.length * 1));
      dependenciesA = subtextL || libreactnativeblobj.length <= 69;
   let uploadv = dependenciesA ? !dependenciesA : dependenciesA;
   do {
      dependenciesA = subtextL || !dependenciesA;
      if (uploadv) {
         break;
      }
   } while (((router_ >> (Math.min(Math.abs(2), 3))) > 3 && 2 > router_) && uploadv);
      router_ &= libreactnativeblobj.length;
   let schedulerS = 5934580 <= reactnativeultimatelistview7.length;
   do {
       let countdown8 = 5.0;
       let commonc: Map<any, any> = new Map([[String.fromCharCode(110,95,56,49,95,105,103,110,112,111,115,116,0),45], [String.fromCharCode(106,95,50,54,95,116,114,97,110,115,112,111,110,101,100,0),44], [String.fromCharCode(109,98,115,116,114,105,110,103,95,120,95,53,55,0),398]]);
       let whiter = 3;
      if (!Array.from(commonc.values()).includes(whiter)) {
          let indexg: Map<any, any> = new Map([[String.fromCharCode(98,108,97,107,101,115,95,100,95,50,57,0),435], [String.fromCharCode(99,104,97,114,97,99,116,101,114,95,54,95,51,51,0),139]]);
          let bodanK = 0.0;
          let usernameo = 1;
         whiter -= 2 % (Math.max(parseInt(`${bodanK}`), 7));
         indexg = new Map([[`${indexg.size}`, usernameo]]);
         bodanK /= Math.max(parseFloat(`${usernameo}`), 2);
      }
          let friendsA = 1.0;
          let streamingZ = false;
         whiter |= commonc.size;
         friendsA *= parseInt(`${friendsA}`) & 1;
         streamingZ = !streamingZ;
      for (let f = 0; f < 1; f++) {
         whiter *= whiter - commonc.size;
      }
       let sansp = String.fromCharCode(117,110,100,101,114,108,121,105,110,103,95,122,95,51,55,0);
       let sportsB = String.fromCharCode(120,95,56,48,95,100,114,111,112,115,0);
      let matchesN = 6472135.0 <= countdown8;
      do {
         countdown8 += 2;
         if (matchesN) {
            break;
         }
      } while ((4 < (sportsB.length % (Math.max(4, 6))) || 3 < (sportsB.length % 4)) && matchesN);
         countdown8 *= parseInt(`${countdown8}`);
       let tooltipsu = 2.0;
       let iconplay0 = 1.0;
          let libreactj = String.fromCharCode(105,109,112,111,114,116,95,106,95,55,52,0);
          let iconrefreshP = String.fromCharCode(109,95,55,54,95,102,97,99,116,111,114,0);
         whiter |= parseInt(`${tooltipsu}`);
         libreactj += `${(libreactj == String.fromCharCode(72,0) ? libreactj.length : iconrefreshP.length)}`;
         iconrefreshP = `${libreactj.length}`;
      while (2 < (commonc.size | 5)) {
         sportsB = `${parseInt(`${countdown8}`)}`;
         break;
      }
      reactnativeultimatelistview7 += `${router_}`;
      if (schedulerS) {
         break;
      }
   } while (schedulerS && (encryptp.length > 2));
   while (4.30 < (1.40 * notificationfillemptyZ) && 4.33 < (mutedV / 1.40)) {
      mutedV *= (parseFloat(`${(matchl ? 1 : 3) - encryptp.length}`));
      break;
   }
   let source_ = notificationfillemptyZ >= 7431119.0;
   do {
      notificationfillemptyZ -= (parseFloat(`${String.fromCharCode(97,0) == reactnativeultimatelistview7 ? encryptp.length : reactnativeultimatelistview7.length}`));
      if (source_) {
         break;
      }
   } while (source_ && (1.69 <= (notificationfillemptyZ * 2.86)));
       let confirmationL = 5.0;
       let defaultplayerimgq = 1.0;
      if (2.47 == (confirmationL * defaultplayerimgq)) {
         confirmationL += parseInt(`${defaultplayerimgq}`);
      }
         confirmationL *= 3;
          let save6: Array<any> = [String.fromCharCode(103,95,50,49,95,98,114,105,110,103,0), String.fromCharCode(97,114,114,97,110,103,101,100,95,111,95,51,49,0), String.fromCharCode(119,95,54,57,95,115,117,99,104,0)];
          let cancelR = 1.0;
          let stationr = String.fromCharCode(103,114,97,112,104,95,101,95,56,57,0);
         defaultplayerimgq -= parseFloat(`${parseInt(`${cancelR}`) / 2}`);
         save6 = [save6.length & stationr.length];
         cancelR -= 2 * stationr.length;
      for (let a = 0; a < 1; a++) {
          let logoutD = String.fromCharCode(98,95,57,50,95,115,109,105,108,0);
          let overlayx: Array<any> = [581, 770, 973];
          let tickedM = String.fromCharCode(105,95,54,52,95,107,101,121,118,97,108,0);
         defaultplayerimgq += parseFloat(`${parseInt(`${confirmationL}`) | 3}`);
         logoutD = `${(tickedM == String.fromCharCode(109,0) ? overlayx.length : tickedM.length)}`;
         overlayx.push(tickedM.length);
      }
         defaultplayerimgq -= parseFloat(`${parseInt(`${confirmationL}`)}`);
          let graphP = 5.0;
          let schedulem = String.fromCharCode(98,105,110,100,105,110,103,115,95,56,95,54,53,0);
         defaultplayerimgq -= parseFloat(`${1}`);
         graphP /= Math.max(4, parseFloat(`${schedulem.length}`));
         schedulem = `${parseInt(`${graphP}`) ^ schedulem.length}`;
      libimagepipelineH += "3";
   if ((2 * container1) <= 3 && 5.27 <= (mutedV / (Math.max(2.16, 4)))) {
       let unread4: Array<any> = [414, 416, 269];
       let directK = true;
       let dialogu = String.fromCharCode(109,98,99,115,95,111,95,57,52,0);
       let baseA = false;
       let yellowredcardO = 0;
          let rewardvideoI = String.fromCharCode(119,95,52,55,95,112,101,115,113,0);
          let mountingl: Array<any> = [626, 280, 502];
         yellowredcardO &= ((directK ? 4 : 3) / (Math.max(dialogu.length, 1)));
         rewardvideoI = `${3 & rewardvideoI.length}`;
         mountingl = [3];
          let matchesg = String.fromCharCode(101,118,101,114,121,95,119,95,54,56,0);
          let scheduleX = String.fromCharCode(99,111,108,111,114,102,117,108,95,118,95,53,56,0);
          let launcher_ = String.fromCharCode(119,95,51,49,95,109,116,105,109,101,0);
         unread4.push(1 + scheduleX.length);
         matchesg = `${launcher_.length}`;
         scheduleX += `${matchesg.length / (Math.max(launcher_.length, 5))}`;
          let linkO: Map<any, any> = new Map([[String.fromCharCode(119,95,49,50,95,116,114,101,97,100,0),588], [String.fromCharCode(109,115,109,112,101,103,100,97,116,97,95,52,95,50,55,0),357], [String.fromCharCode(111,95,56,57,95,101,110,100,105,110,103,0),135]]);
          let rewardt = 2;
         unread4 = [((baseA ? 5 : 2) ^ dialogu.length)];
         linkO.set(`${rewardt}`, linkO.size * rewardt);
      let friendsN = 7476394 <= unread4.length;
      do {
          let headerK = String.fromCharCode(118,95,52,95,103,101,110,101,114,105,99,0);
          let graphics0: Array<any> = [String.fromCharCode(118,95,50,56,95,115,99,97,110,120,0), String.fromCharCode(115,95,50,57,95,108,111,99,97,108,105,122,101,100,0), String.fromCharCode(118,95,53,49,95,115,105,120,116,97,112,0)];
          let whiteanimationlivey = String.fromCharCode(98,102,114,97,99,116,105,111,110,95,55,95,51,56,0);
          let ping0 = String.fromCharCode(100,105,115,99,117,115,115,95,122,95,57,56,0);
          let libcxxcomponentsZ: Map<any, any> = new Map([[String.fromCharCode(114,101,97,115,115,101,109,98,108,101,114,95,104,95,54,50,0),String.fromCharCode(116,114,101,101,115,95,121,95,53,56,0)], [String.fromCharCode(107,95,55,50,95,114,101,115,111,108,118,101,114,115,0),String.fromCharCode(113,95,54,57,95,109,107,118,109,117,120,101,114,116,121,112,101,115,0)]]);
         unread4 = [libcxxcomponentsZ.size << (Math.min(5, Math.abs(yellowredcardO)))];
         headerK += `${3 << (Math.min(5, ping0.length))}`;
         graphics0 = [2];
         whiteanimationlivey = `${whiteanimationlivey.length}`;
         ping0 += `${graphics0.length}`;
         libcxxcomponentsZ = new Map([[`${graphics0.length}`, graphics0.length ^ headerK.length]]);
         if (friendsN) {
            break;
         }
      } while ((2 >= (4 % (Math.max(6, unread4.length))) && !directK) && friendsN);
      let loadingD = dialogu == String.fromCharCode(57,119,119,56,0);
      do {
          let flyer9 = String.fromCharCode(98,117,99,107,101,116,97,108,108,111,99,95,100,95,57,48,0);
         dialogu = `${1 + unread4.length}`;
         flyer9 = `${flyer9.length}`;
         if (loadingD) {
            break;
         }
      } while ((dialogu.length == 3) && loadingD);
          let flyerd = 4.0;
          let mbjscommonG = String.fromCharCode(118,95,54,50,95,110,111,109,105,110,97,108,0);
          let infoL = String.fromCharCode(122,95,55,56,95,115,101,99,116,105,110,115,0);
         yellowredcardO /= Math.max(4, 2);
         flyerd -= parseFloat(`${parseInt(`${flyerd}`) >> (Math.min(infoL.length, 3))}`);
         mbjscommonG += `${mbjscommonG.length}`;
         infoL += `${parseInt(`${flyerd}`) * 2}`;
       let attributedstringl: Array<any> = [408, 794];
      while (!baseA) {
         attributedstringl = [unread4.length];
         break;
      }
         unread4.push(((baseA ? 5 : 2)));
       let huaweiz = String.fromCharCode(106,95,53,49,95,97,100,106,117,115,116,0);
       let downP = String.fromCharCode(100,95,50,53,95,100,105,115,115,111,108,118,101,0);
          let libsgcorea: Map<any, any> = new Map([[String.fromCharCode(114,101,97,108,108,111,99,112,95,50,95,57,55,0),820], [String.fromCharCode(112,95,50,51,95,116,111,110,103,117,101,0),530]]);
          let latng = String.fromCharCode(100,95,54,51,95,117,112,108,111,97,100,97,98,108,101,0);
          let cornerkickO = String.fromCharCode(122,95,55,95,116,104,101,109,101,115,0);
         huaweiz = `${(String.fromCharCode(50,0) == downP ? downP.length : unread4.length)}`;
         libsgcorea = new Map([[cornerkickO, cornerkickO.length | 1]]);
         latng += `${1 << (Math.min(4, cornerkickO.length))}`;
       let telemetryu = String.fromCharCode(104,95,50,48,95,98,117,108,108,101,116,0);
       let privacyX = String.fromCharCode(107,95,52,51,95,120,109,117,108,116,105,112,108,101,0);
      while (privacyX.startsWith(`${dialogu.length}`)) {
         dialogu += `${1 << (Math.min(4, unread4.length))}`;
         break;
      }
          let v_positionU = false;
         unread4 = [1];
         v_positionU = (!v_positionU ? !v_positionU : !v_positionU);
          let statisticsinactived: Map<any, any> = new Map([[String.fromCharCode(104,95,55,49,95,115,99,114,101,101,110,99,97,115,116,0),String.fromCharCode(112,101,114,99,95,102,95,55,56,0)], [String.fromCharCode(115,101,103,102,101,97,116,117,114,101,115,95,114,95,57,50,0),String.fromCharCode(100,97,116,97,104,97,115,104,95,55,95,56,51,0)], [String.fromCharCode(97,114,114,105,118,97,108,95,112,95,49,50,0),String.fromCharCode(109,95,49,48,48,95,115,116,100,105,110,116,0)]]);
          let plusx = String.fromCharCode(105,99,111,110,115,95,122,95,50,0);
         telemetryu += `${unread4.length}`;
         statisticsinactived = new Map([[`${statisticsinactived.size}`, plusx.length]]);
         plusx = `${3 + statisticsinactived.size}`;
      container1 &= 2;
   }
       let usernameX: Array<any> = [69, 368];
       let with_opC = String.fromCharCode(117,110,115,97,118,101,100,95,50,95,49,54,0);
       let yellowvideolivea = String.fromCharCode(103,95,54,48,95,105,110,116,101,114,118,97,108,115,0);
         usernameX = [(yellowvideolivea == String.fromCharCode(97,0) ? usernameX.length : yellowvideolivea.length)];
      while (yellowvideolivea.length >= 1) {
         with_opC += `${(with_opC == String.fromCharCode(68,0) ? with_opC.length : usernameX.length)}`;
         break;
      }
         usernameX = [(String.fromCharCode(104,0) == with_opC ? with_opC.length : yellowvideolivea.length)];
       let settingsY = true;
      if (with_opC.length > 2) {
          let tempnodatagifh = String.fromCharCode(117,115,100,95,100,95,54,55,0);
         settingsY = yellowvideolivea.length < 50;
         tempnodatagifh += `${tempnodatagifh.length | tempnodatagifh.length}`;
      }
         settingsY = settingsY && yellowvideolivea.length == 79;
       let countdowny = String.fromCharCode(117,110,114,101,115,111,108,118,97,98,108,101,95,57,95,55,0);
         with_opC += `${(1 % (Math.max(1, (settingsY ? 5 : 5))))}`;
         yellowvideolivea += `${3 ^ usernameX.length}`;
      encryptp += `${((matchl ? 4 : 1))}`;
   for (let v = 0; v < 3; v++) {
      notificationfillemptyZ -= parseFloat(`${parseInt(`${mutedV}`)}`);
   }
      matchl = matchl || dependenciesA;
   if (!sliderB.includes(`${mutedV}`)) {
       let nalytics3: Map<any, any> = new Map([[String.fromCharCode(115,95,53,55,0),false ], [String.fromCharCode(98,101,114,114,105,101,115,95,48,95,50,55,0),true ], [String.fromCharCode(99,108,97,115,115,105,102,115,95,119,95,50,49,0),true ]]);
       let carouselg = 5;
      while (2 <= nalytics3.size) {
         carouselg *= 1;
         break;
      }
      for (let o = 0; o < 2; o++) {
         nalytics3 = new Map([[`${nalytics3.size}`, 1]]);
      }
          let mintegral5 = String.fromCharCode(103,117,101,115,115,95,121,95,55,56,0);
          let mbbidP = false;
         nalytics3.set(`${carouselg}`, mintegral5.length);
         mintegral5 = `${((mbbidP ? 1 : 1))}`;
          let webview8 = 5.0;
          let update_qtd: Map<any, any> = new Map([[String.fromCharCode(116,95,57,95,105,112,102,115,0),true ], [String.fromCharCode(99,111,110,99,97,116,101,110,97,116,101,100,95,57,95,57,49,0),false ], [String.fromCharCode(99,95,52,95,99,97,112,0),true ]]);
         carouselg %= Math.max(carouselg, 4);
         webview8 /= Math.max(4, update_qtd.size);
         update_qtd = new Map([[`${update_qtd.size}`, update_qtd.size]]);
         carouselg += 3;
       let predictionarrowv: Map<any, any> = new Map([[String.fromCharCode(118,99,100,97,116,97,95,118,95,55,57,0),417], [String.fromCharCode(110,95,54,52,95,117,110,115,101,116,0),366]]);
      sliderB = `${libreactnativeblobj.length + 1}`;
   }
   while (4 < (3 * router_) || router_ < 3) {
       let g_hash0 = String.fromCharCode(113,95,55,57,95,112,97,116,116,101,114,110,0);
       let telegramx = 5.0;
       let eighteenh: Map<any, any> = new Map([[String.fromCharCode(120,95,52,51,95,115,119,105,116,99,104,98,97,115,101,0),961], [String.fromCharCode(102,116,118,112,108,97,115,116,110,111,100,101,95,111,95,51,48,0),855]]);
       let vipsportG = 0.0;
       let utilsG = 1.0;
      let moduleT = eighteenh.size <= 8373956;
      do {
          let jingdongv: Map<any, any> = new Map([[String.fromCharCode(114,101,110,100,101,114,101,114,115,95,51,95,50,57,0),false ], [String.fromCharCode(115,101,109,97,110,116,105,99,95,108,95,50,55,0),false ]]);
          let iconrefreshH: Array<any> = [812, 31];
         eighteenh = new Map([[`${eighteenh.size}`, parseInt(`${vipsportG}`) >> (Math.min(Math.abs(eighteenh.size), 4))]]);
         jingdongv.set(`${iconrefreshH.length}`, 3 ^ jingdongv.size);
         iconrefreshH.push(jingdongv.size | 2);
         if (moduleT) {
            break;
         }
      } while (moduleT && (Array.from(eighteenh.keys()).includes(`${telegramx}`)));
      let predictionarrowq = 5272925 <= g_hash0.length;
      do {
         g_hash0 = `${g_hash0.length + 3}`;
         if (predictionarrowq) {
            break;
         }
      } while (predictionarrowq && (3.53 > (g_hash0.length * utilsG) || (g_hash0.length * parseInt(`${utilsG}`)) > 2));
      let pushk = String.fromCharCode(97,111,118,114,98,121,55,100,56,55,0) == g_hash0;
      do {
         g_hash0 = `${eighteenh.size / 2}`;
         if (pushk) {
            break;
         }
      } while (pushk && (g_hash0.length <= utilsG));
      while (1.15 == (telegramx * utilsG)) {
          let unreadU = String.fromCharCode(115,97,118,105,110,103,115,95,113,95,50,0);
          let internetL = String.fromCharCode(118,95,54,52,95,112,101,114,115,112,0);
          let searchbarD = true;
         utilsG *= eighteenh.size;
         unreadU += `${3 - unreadU.length}`;
         internetL = `${unreadU.length}`;
         searchbarD = !searchbarD;
         break;
      }
         g_hash0 = `${(g_hash0 == String.fromCharCode(109,0) ? g_hash0.length : parseInt(`${vipsportG}`))}`;
          let dependencyA = 4.0;
         vipsportG /= Math.max(4, g_hash0.length / 2);
         dependencyA -= parseInt(`${dependencyA}`);
          let currentl = 3.0;
         eighteenh = new Map([[`${eighteenh.size}`, eighteenh.size * 2]]);
         currentl /= Math.max(1, parseFloat(`${parseInt(`${currentl}`) & 2}`));
       let iconnointernetO = String.fromCharCode(118,111,105,99,101,109,97,105,108,95,111,95,55,56,0);
      while (3.77 <= (1.48 / (Math.max(5, vipsportG))) || (vipsportG / 1.48) <= 3.6) {
         g_hash0 = `${parseInt(`${utilsG}`)}`;
         break;
      }
         iconnointernetO += `${iconnointernetO.length}`;
         telegramx *= iconnointernetO.length;
       let sendc = String.fromCharCode(99,109,100,117,116,105,108,115,95,106,95,56,57,0);
          let streamingU = String.fromCharCode(118,111,114,100,105,112,108,111,109,95,52,95,53,56,0);
          let mounting5 = true;
         iconnointernetO += `${g_hash0.length << (Math.min(3, Math.abs(parseInt(`${telegramx}`))))}`;
         streamingU = `${((mounting5 ? 3 : 4))}`;
         mounting5 = streamingU.startsWith(`${mounting5}`);
          let stylej = true;
         utilsG += g_hash0.length | sendc.length;
         stylej = (!stylej ? !stylej : stylej);
         iconnointernetO = `${iconnointernetO.length}`;
      router_ ^= container1 % 1;
      break;
   }
   for (let y = 0; y < 3; y++) {
      matchl = !subtextL;
   }
      notificationfillemptyZ += parseFloat(`${1 & parseInt(`${mutedV}`)}`);
   if (3.33 <= (mutedV / 4.55) || (parseInt(`${mutedV}`) / (Math.max(1, encryptp.length))) <= 1) {
      mutedV *= (parseFloat(`${reactnativeultimatelistview7.length * (matchl ? 5 : 5)}`));
   }
   let liveendmodallogoL = String.fromCharCode(115,103,111,51,49,102,0) == libimagepipelineH;
   do {
       let emptyT: Array<any> = [String.fromCharCode(106,112,101,103,99,111,109,112,95,104,95,48,0), String.fromCharCode(118,97,108,105,100,97,116,101,95,105,95,57,51,0), String.fromCharCode(117,95,50,57,95,112,114,101,112,101,110,100,0)];
       let reward8: Array<any> = [String.fromCharCode(100,101,99,98,110,95,115,95,56,55,0), String.fromCharCode(110,100,101,120,95,56,95,52,50,0), String.fromCharCode(102,105,102,97,95,118,95,57,57,0)];
          let awayl: Array<any> = [590, 210];
          let moviesO = 1.0;
          let wind5 = 3.0;
         reward8 = [parseInt(`${wind5}`) + emptyT.length];
         awayl = [2 / (Math.max(9, awayl.length))];
         moviesO -= parseFloat(`${awayl.length + 2}`);
         wind5 /= Math.max(2, 3);
         emptyT = [emptyT.length - 1];
       let countdownb = 1.0;
       let away6 = 0.0;
       let tempu = 3.0;
         emptyT = [parseInt(`${away6}`) * 3];
      while (4 >= (reward8.length % 3) || 2 >= (emptyT.length % (Math.max(3, 5)))) {
         reward8 = [parseInt(`${away6}`) & parseInt(`${tempu}`)];
         break;
      }
      libimagepipelineH += `${encryptp.length | libimagepipelineH.length}`;
      if (liveendmodallogoL) {
         break;
      }
   } while (liveendmodallogoL && (libimagepipelineH.endsWith(`${dependenciesA}`)));
   if (sliderB != libimagepipelineH) {
       let photom: Array<any> = [263, 225];
       let activity7: Array<any> = [35, 328, 375];
       let langkeyn: Array<any> = [713, 183];
      if (2 == langkeyn.length) {
          let animationsh = String.fromCharCode(105,95,51,49,95,98,111,117,110,100,97,114,105,101,115,0);
          let shootC: Map<any, any> = new Map([[String.fromCharCode(114,95,49,55,95,101,120,112,97,110,100,0),String.fromCharCode(115,105,112,104,97,115,104,95,105,95,52,52,0)], [String.fromCharCode(121,117,118,121,117,118,95,106,95,50,54,0),String.fromCharCode(97,118,102,111,117,110,100,97,116,105,111,110,95,105,95,50,0)], [String.fromCharCode(109,95,57,48,95,121,97,100,105,102,0),String.fromCharCode(118,101,114,105,102,121,105,110,103,95,53,95,53,57,0)]]);
          let buildI = 1.0;
          let inactiveN = 2.0;
         photom.push(2);
         animationsh += `${shootC.size & 1}`;
         shootC = new Map([[`${shootC.size}`, shootC.size ^ parseInt(`${buildI}`)]]);
         buildI -= parseFloat(`${3 ^ parseInt(`${buildI}`)}`);
         inactiveN -= 1;
      }
      let logo4 = 7831939 <= langkeyn.length;
      do {
         langkeyn = [activity7.length + 1];
         if (logo4) {
            break;
         }
      } while (logo4 && ((activity7.length | 5) >= 5));
      libimagepipelineH += `${libreactnativeblobj.length | 3}`;
   }
   for (let s = 0; s < 3; s++) {
      sliderB = `${container1}`;
   }
   let greyF = subtextL ? !subtextL : subtextL;
   do {
       let checkboxi = String.fromCharCode(112,97,114,97,109,101,116,114,105,122,101,100,95,120,95,55,0);
       let dialogk = 5.0;
       let settingN = 3.0;
       let gray9 = String.fromCharCode(105,95,55,95,114,101,102,0);
       let iconnointerneto: Map<any, any> = new Map([[String.fromCharCode(119,95,51,52,95,119,111,114,107,97,114,111,117,110,100,0),String.fromCharCode(101,118,97,108,95,118,95,57,53,0)], [String.fromCharCode(97,114,99,104,105,116,101,99,116,117,114,101,95,111,95,57,51,0),String.fromCharCode(121,95,49,57,95,98,121,116,101,108,101,110,0)], [String.fromCharCode(113,95,54,50,95,105,110,116,101,114,110,101,100,0),String.fromCharCode(111,95,53,51,95,99,116,114,108,0)]]);
      for (let n = 0; n < 1; n++) {
          let datax = String.fromCharCode(117,95,56,49,95,112,111,112,0);
         dialogk -= 3 << (Math.min(1, checkboxi.length));
         datax = `${(datax == String.fromCharCode(72,0) ? datax.length : datax.length)}`;
      }
         gray9 = "3";
      if (1 <= gray9.length) {
         gray9 = `${gray9.length}`;
      }
      if ((parseInt(`${settingN}`) + 2) > 2 && 4 > (gray9.length % 2)) {
          let libswscaler = String.fromCharCode(116,105,109,101,115,116,97,109,112,115,95,119,95,50,52,0);
          let temperatured: Map<any, any> = new Map([[String.fromCharCode(107,95,51,49,95,99,97,110,116,111,112,101,110,0),92], [String.fromCharCode(102,105,110,97,108,105,115,101,114,95,110,95,50,48,0),937], [String.fromCharCode(116,95,52,95,100,111,101,115,0),878]]);
         gray9 += `${checkboxi.length * parseInt(`${dialogk}`)}`;
         libswscaler += `${(String.fromCharCode(118,0) == libswscaler ? temperatured.size : libswscaler.length)}`;
         temperatured.set(libswscaler, temperatured.size);
      }
          let frame_nn_ = String.fromCharCode(117,95,50,54,95,105,110,116,101,114,112,111,108,97,116,111,114,0);
          let collection4 = String.fromCharCode(112,114,111,120,121,95,98,95,55,57,0);
          let leakcheckeru = 3.0;
         settingN += gray9.length | 2;
         frame_nn_ = `${parseInt(`${leakcheckeru}`)}`;
         collection4 += `${frame_nn_.length | collection4.length}`;
         leakcheckeru -= parseFloat(`${parseInt(`${leakcheckeru}`) / (Math.max(3, 3))}`);
       let stringe = String.fromCharCode(106,100,109,97,115,116,101,114,95,117,95,50,54,0);
       let frame_xih = String.fromCharCode(100,95,53,53,95,109,97,115,107,113,0);
       let playlistR = false;
       let handlerm = String.fromCharCode(107,95,55,50,95,112,114,111,99,101,100,117,114,101,115,0);
       let privatechatbgk = String.fromCharCode(109,105,108,108,101,114,95,100,95,55,57,0);
          let loadingU = false;
         frame_xih += `${((loadingU ? 4 : 4))}`;
      for (let g = 0; g < 3; g++) {
         stringe = "2";
      }
         settingN *= (String.fromCharCode(98,0) == privatechatbgk ? privatechatbgk.length : iconnointerneto.size);
      for (let r = 0; r < 2; r++) {
          let description_s6 = 2.0;
         privatechatbgk += `${parseInt(`${dialogk}`) + 2}`;
         description_s6 /= Math.max(parseFloat(`${parseInt(`${description_s6}`) + parseInt(`${description_s6}`)}`), 5);
      }
          let agreementx = String.fromCharCode(115,116,100,105,110,116,95,50,95,52,52,0);
          let tumbnailC = String.fromCharCode(122,95,49,51,95,121,97,108,101,0);
         checkboxi += `${handlerm.length & 2}`;
         agreementx += `${2 & tumbnailC.length}`;
         tumbnailC = `${tumbnailC.length / (Math.max(9, agreementx.length))}`;
      if (handlerm.length <= 4) {
         handlerm = `${parseInt(`${settingN}`)}`;
      }
       let scrollviewl: Map<any, any> = new Map([[String.fromCharCode(122,97,108,108,111,99,95,104,95,55,0),955], [String.fromCharCode(105,110,116,101,114,115,101,99,116,105,111,110,95,113,95,51,51,0),357]]);
      subtextL = 95.77 > mutedV || !matchl;
      if (greyF) {
         break;
      }
   } while (greyF && ((mutedV + 1.84) == 5.85 || 1.84 == mutedV));
       let kuaishou_ = 5.0;
         kuaishou_ += parseFloat(`${1 + parseInt(`${kuaishou_}`)}`);
          let awayteamfielde: Array<any> = [529, 40];
          let predictionwinv = String.fromCharCode(115,111,114,101,115,101,114,118,101,95,113,95,52,57,0);
         kuaishou_ *= parseFloat(`${awayteamfielde.length & 3}`);
         awayteamfielde.push((predictionwinv == String.fromCharCode(97,0) ? predictionwinv.length : predictionwinv.length));
         kuaishou_ -= parseFloat(`${parseInt(`${kuaishou_}`)}`);
      reactnativeultimatelistview7 = `${2 >> (Math.min(Math.abs(parseInt(`${mutedV}`)), 5))}`;
      subtextL = router_ == 60;

    setIsLogoutDialogOpen(!isLogoutDialogOpen);
  };

  const toggleVersionDialog = () => {
       let clockt = 4.0;
    let componentregistryd = true;
    let yingF = String.fromCharCode(102,95,56,53,95,116,111,107,101,0);
    let borderlessa: Array<any> = [String.fromCharCode(103,95,53,57,95,97,100,97,112,116,101,114,0), String.fromCharCode(99,111,109,112,97,114,95,100,95,57,48,0), String.fromCharCode(98,105,116,114,97,116,101,95,105,95,51,53,0)];
    let libswscalem: Array<any> = [343, 952, 600];
    let applew = String.fromCharCode(114,101,97,100,98,121,116,101,95,104,95,50,54,0);
    let skipP: Array<any> = [String.fromCharCode(115,112,101,97,107,101,114,95,118,95,52,53,0), String.fromCharCode(112,99,109,98,95,51,95,52,55,0)];
    let dataT = 4.0;
    let private_sv: Map<any, any> = new Map([[String.fromCharCode(113,95,50,51,95,115,118,97,114,105,110,116,0),375], [String.fromCharCode(103,114,97,116,105,99,117,108,101,95,56,95,50,54,0),958], [String.fromCharCode(109,98,118,115,95,56,95,50,48,0),765]]);
   for (let w = 0; w < 2; w++) {
      applew += "2";
   }
   let membership_ = componentregistryd ? !componentregistryd : componentregistryd;
   do {
      componentregistryd = yingF.length > 68 || clockt > 55.40;
      if (membership_) {
         break;
      }
   } while ((yingF.endsWith(`${componentregistryd}`)) && membership_);
      componentregistryd = skipP.length >= 11 && !componentregistryd;
       let completet: Map<any, any> = new Map([[String.fromCharCode(97,108,103,111,114,95,118,95,51,53,0),false ], [String.fromCharCode(108,95,49,48,48,95,114,101,105,110,115,101,114,116,0),false ], [String.fromCharCode(113,95,56,57,95,99,114,111,115,115,0),true ]]);
       let scoreZ = String.fromCharCode(111,95,52,53,95,112,101,114,115,105,115,116,101,110,99,101,0);
       let fullj: Array<any> = [996, 455];
          let hovero = 5.0;
          let analyticsH = 4.0;
          let overlayE: Map<any, any> = new Map([[String.fromCharCode(99,111,108,108,97,112,115,101,95,52,95,56,48,0),false ], [String.fromCharCode(99,108,111,110,101,95,115,95,48,0),false ], [String.fromCharCode(119,114,105,116,101,95,56,95,49,53,0),false ]]);
         scoreZ += `${parseInt(`${hovero}`) & fullj.length}`;
         hovero -= overlayE.size;
         analyticsH *= parseFloat(`${parseInt(`${analyticsH}`)}`);
         overlayE.set(`${analyticsH}`, 1 | overlayE.size);
         scoreZ += `${scoreZ.length}`;
       let ajaxn = 0.0;
      for (let r = 0; r < 1; r++) {
         fullj.push(completet.size - scoreZ.length);
      }
          let refreshM = 2;
          let codegeny: Array<any> = [260, 221];
         scoreZ += `${refreshM << (Math.min(3, Math.abs(3)))}`;
         refreshM %= Math.max(4, codegeny.length);
         codegeny.push(3 ^ codegeny.length);
         ajaxn *= parseFloat(`${completet.size + fullj.length}`);
      while (Array.from(completet.keys()).includes(`${fullj.length}`)) {
         completet.set(scoreZ, completet.size % (Math.max(scoreZ.length, 3)));
         break;
      }
         fullj.push(fullj.length);
         scoreZ += `${parseInt(`${ajaxn}`) << (Math.min(2, Math.abs(3)))}`;
      clockt += scoreZ.length;
      skipP.push(applew.length | libswscalem.length);
   if ((skipP.length * yingF.length) < 4 && 4 < (skipP.length * yingF.length)) {
      skipP.push(applew.length);
   }
   while (skipP.includes(libswscalem.length)) {
      libswscalem = [parseInt(`${clockt}`)];
      break;
   }
       let containerw = String.fromCharCode(112,114,101,104,101,97,116,95,106,95,53,54,0);
         containerw += `${2 ^ containerw.length}`;
         containerw = `${containerw.length}`;
          let loginsuccessr = true;
          let renewT: Array<any> = [318, 212, 960];
          let executor7 = 1;
         containerw += `${renewT.length}`;
         loginsuccessr = executor7 == 6 || 6 == executor7;
         renewT.push(executor7);
      applew = `${(applew == String.fromCharCode(85,0) ? applew.length : borderlessa.length)}`;
   let reviewU = String.fromCharCode(103,99,110,95,115,48,113,109,118,0) == applew;
   do {
       let starF = 5.0;
       let reducer1: Array<any> = [996, 319];
       let floatingN = 5.0;
      if ((4.8 * starF) > 1.62) {
         reducer1.push(parseInt(`${starF}`) + 1);
      }
         starF += parseInt(`${floatingN}`);
       let progressT: Array<any> = [242, 652];
       let memberg: Array<any> = [String.fromCharCode(97,112,112,101,97,114,115,95,120,95,56,52,0), String.fromCharCode(105,110,116,101,114,105,111,114,95,52,95,51,55,0)];
      while (parseInt(`${starF}`) < reducer1.length) {
         starF /= Math.max(2, 4);
         break;
      }
      for (let p = 0; p < 2; p++) {
         progressT.push(1);
      }
       let statsW = 5.0;
         progressT = [progressT.length];
       let next0: Array<any> = [915, 786];
       let cancelO: Array<any> = [644, 328];
         starF /= Math.max(2, memberg.length >> (Math.min(5, Math.abs(parseInt(`${floatingN}`)))));
      applew += `${((componentregistryd ? 4 : 3) + parseInt(`${starF}`))}`;
      if (reviewU) {
         break;
      }
   } while (reviewU && (2 <= (1 & applew.length) || 2 <= (1 & libswscalem.length)));
   if (3 == borderlessa.length) {
      yingF = `${libswscalem.length / (Math.max(yingF.length, 7))}`;
   }
      skipP.push(skipP.length % (Math.max(6, applew.length)));
   while (yingF.length <= borderlessa.length) {
      borderlessa.push(parseInt(`${clockt}`) << (Math.min(skipP.length, 5)));
      break;
   }
   let dialogM = 7197732 <= libswscalem.length;
   do {
       let reads = String.fromCharCode(122,95,57,51,95,112,114,101,118,118,101,99,0);
      for (let b = 0; b < 1; b++) {
         reads += `${reads.length / (Math.max(6, reads.length))}`;
      }
      let storeQ = reads.length >= 6756241;
      do {
         reads += `${reads.length}`;
         if (storeQ) {
            break;
         }
      } while ((reads == String.fromCharCode(71,0)) && storeQ);
      for (let n = 0; n < 1; n++) {
          let nalyticsp = 5.0;
          let libzeuss = 3.0;
          let style2: Map<any, any> = new Map([[String.fromCharCode(121,95,49,51,95,116,114,97,110,115,112,0),607], [String.fromCharCode(99,114,101,97,116,105,111,110,95,57,95,54,48,0),965], [String.fromCharCode(100,117,109,112,112,97,99,107,101,116,95,57,95,50,56,0),634]]);
          let turng = String.fromCharCode(115,110,97,107,101,95,115,95,50,56,0);
          let chinasameP = String.fromCharCode(100,105,97,109,111,110,100,95,118,95,52,52,0);
         reads = `${turng.length | chinasameP.length}`;
         nalyticsp -= parseFloat(`${3 / (Math.max(7, parseInt(`${libzeuss}`)))}`);
         libzeuss *= 3;
         style2 = new Map([[`${nalyticsp}`, 2 + parseInt(`${nalyticsp}`)]]);
         turng += `${3 - style2.size}`;
         chinasameP = `${style2.size + 3}`;
      }
      libswscalem.push(2);
      if (dialogM) {
         break;
      }
   } while (((libswscalem.length / (Math.max(7, applew.length))) <= 2 && 2 <= (libswscalem.length / (Math.max(applew.length, 4)))) && dialogM);
   let showy = skipP.length >= 5201746;
   do {
      skipP = [2];
      if (showy) {
         break;
      }
   } while (showy && (5 == (applew.length & skipP.length)));
   for (let k = 0; k < 3; k++) {
      applew = `${2 | skipP.length}`;
   }
   if (3 <= (skipP.length % 5)) {
      skipP.push(skipP.length);
   }

    setIsVersionDialogOpen(!isVersionDialogOpen);
  };
  const toggleClearDialog = () => {
       let otherq = String.fromCharCode(112,95,53,53,95,119,105,114,101,108,101,115,115,0);
    let dragcloseK = String.fromCharCode(118,95,49,55,95,115,108,111,112,101,0);
    let minimizeD = 2.0;
    let emptyE = String.fromCharCode(109,95,49,50,95,110,111,110,108,105,110,101,97,114,0);
    let gmailJ: Map<any, any> = new Map([[String.fromCharCode(115,116,97,109,112,115,95,108,95,55,52,0),500], [String.fromCharCode(103,95,53,54,95,105,110,116,101,114,115,101,99,116,0),70], [String.fromCharCode(116,101,108,101,116,101,120,116,95,114,95,52,57,0),773]]);
    let reactnativejsH: Array<any> = [String.fromCharCode(97,95,49,57,95,110,111,110,99,101,0), String.fromCharCode(118,95,57,55,95,118,105,100,115,116,97,98,117,116,105,108,115,0), String.fromCharCode(103,114,97,109,115,95,50,95,57,48,0)];
    let d_titleV: Map<any, any> = new Map([[String.fromCharCode(110,99,98,99,95,102,95,54,54,0),34], [String.fromCharCode(114,95,49,50,95,116,111,117,99,104,101,100,0),818], [String.fromCharCode(107,95,51,56,95,117,110,102,108,97,116,116,101,110,101,100,0),120]]);
    let kuaishour = 1.0;
    let temperatures: Array<any> = [String.fromCharCode(111,95,56,51,95,100,105,115,112,108,97,99,101,109,101,110,116,0), String.fromCharCode(100,95,53,95,110,116,101,114,110,97,108,0)];
    let bootsplashZ = String.fromCharCode(103,95,49,54,95,112,111,114,116,115,0);
    let gesturesB = String.fromCharCode(99,111,108,115,95,121,95,54,0);
    let goalS = String.fromCharCode(104,97,114,100,116,104,114,101,115,104,95,113,95,53,55,0);
    let mnewsshareh = String.fromCharCode(112,95,51,55,95,99,97,114,114,121,0);
    let qaag3 = true;
      kuaishour /= Math.max(2, parseInt(`${minimizeD}`));
      temperatures = [3];
      temperatures = [otherq.length ^ parseInt(`${minimizeD}`)];
      dragcloseK = `${parseInt(`${minimizeD}`) / (Math.max(3, 6))}`;
   while (4 <= (emptyE.length * parseInt(`${minimizeD}`)) && 4 <= (emptyE.length * parseInt(`${minimizeD}`))) {
      emptyE = `${1 - parseInt(`${kuaishour}`)}`;
      break;
   }
      otherq += `${reactnativejsH.length >> (Math.min(Math.abs(1), 3))}`;
       let libreactL: Array<any> = [758, 334, 218];
       let suggestionK: Array<any> = [742, 95, 727];
          let greenP = true;
          let modalj = 4.0;
          let runtimeschedulerg: Map<any, any> = new Map([[String.fromCharCode(113,95,55,95,100,101,112,101,110,100,101,110,99,121,0),6], [String.fromCharCode(99,111,109,112,111,115,101,100,95,99,95,54,48,0),770]]);
         libreactL.push(parseInt(`${modalj}`));
         greenP = (((!greenP ? 27 : runtimeschedulerg.size) / (Math.max(runtimeschedulerg.size, 6))) > 27);
         modalj += 1;
      let mergerf = suggestionK.length <= 5124347;
      do {
         suggestionK.push(libreactL.length);
         if (mergerf) {
            break;
         }
      } while (mergerf && (libreactL.length < suggestionK.length));
       let twitterH: Map<any, any> = new Map([[String.fromCharCode(97,115,98,100,95,108,95,51,53,0),String.fromCharCode(114,95,50,55,95,114,101,99,116,115,0)], [String.fromCharCode(103,95,56,56,95,100,101,99,111,114,97,116,111,114,115,0),String.fromCharCode(105,110,111,117,116,115,95,51,95,49,53,0)]]);
       let libflipperQ: Map<any, any> = new Map([[String.fromCharCode(108,105,98,112,104,111,110,101,110,117,109,98,101,114,95,115,95,53,54,0),874], [String.fromCharCode(105,95,56,48,95,109,97,107,101,99,116,0),288], [String.fromCharCode(108,105,98,115,109,98,99,95,122,95,57,0),296]]);
      let mimo_ = suggestionK.length <= 5495772;
      do {
         suggestionK = [2];
         if (mimo_) {
            break;
         }
      } while (mimo_ && (4 >= (suggestionK.length % (Math.max(1, 1))) || 2 >= (1 % (Math.max(2, suggestionK.length)))));
          let middlewaref: Array<any> = [645, 867, 31];
          let chato = 3;
         libreactL.push(libflipperQ.size / 2);
         middlewaref = [1 | middlewaref.length];
         chato /= Math.max(chato + 1, 5);
       let codegenv = 2;
      emptyE += `${otherq.length & 3}`;
   for (let r = 0; r < 3; r++) {
       let routerP: Map<any, any> = new Map([[String.fromCharCode(99,95,54,55,95,119,105,101,110,101,114,0),768], [String.fromCharCode(119,101,98,115,111,99,107,101,116,95,51,95,57,49,0),760]]);
       let routere = 0.0;
       let heartG = true;
       let mbsplash6 = String.fromCharCode(118,95,56,56,95,108,111,99,107,97,98,108,101,0);
       let arrowupf: Map<any, any> = new Map([[String.fromCharCode(102,95,49,48,48,95,97,110,105,109,97,116,101,0),String.fromCharCode(114,101,97,100,113,95,114,95,52,54,0)], [String.fromCharCode(107,95,56,51,95,112,117,108,115,101,0),String.fromCharCode(98,95,54,53,95,97,108,112,97,0)], [String.fromCharCode(104,97,108,102,102,108,111,97,116,95,104,95,57,49,0),String.fromCharCode(106,95,54,50,95,98,105,119,101,105,103,104,116,0)]]);
          let subsE = false;
         mbsplash6 += `${mbsplash6.length}`;
         subsE = !subsE || !subsE;
      while (!Array.from(arrowupf.values()).includes(routerP.size)) {
          let unreadG = String.fromCharCode(112,97,114,97,109,101,116,101,114,115,95,118,95,55,53,0);
          let telemetrys = String.fromCharCode(100,102,99,116,95,98,95,53,48,0);
          let favicon3: Array<any> = [659, 355];
          let flyer7: Array<any> = [726, 773, 195];
          let directu = String.fromCharCode(99,108,111,115,101,115,111,99,107,101,116,95,120,95,55,52,0);
         arrowupf.set(`${telemetrys}`, 1);
         unreadG += `${unreadG.length}`;
         telemetrys = `${(String.fromCharCode(56,0) == unreadG ? flyer7.length : unreadG.length)}`;
         favicon3.push(3 - unreadG.length);
         flyer7 = [2];
         directu += `${flyer7.length | 1}`;
         break;
      }
      for (let e = 0; e < 3; e++) {
          let hejiH = 3.0;
         heartG = arrowupf.size == 1 && routere == 11.94;
         hejiH *= parseInt(`${hejiH}`);
      }
          let roundN = String.fromCharCode(115,95,52,48,95,115,117,109,120,0);
          let basketballhometeamR: Array<any> = [455, 527, 14];
         routere -= parseFloat(`${2 * roundN.length}`);
         roundN = `${basketballhometeamR.length}`;
         basketballhometeamR.push(2);
      let countryw = arrowupf.size <= 6608028;
      do {
         arrowupf.set(`${heartG}`, (parseInt(`${routere}`) ^ (heartG ? 5 : 4)));
         if (countryw) {
            break;
         }
      } while ((1.89 >= (routere * 1.69) && 3 >= (arrowupf.size - 4)) && countryw);
          let rewindG = false;
          let proxyJ = String.fromCharCode(108,115,102,108,115,112,100,95,56,95,51,49,0);
          let defaultprofilepic6 = String.fromCharCode(117,95,49,54,95,109,111,100,117,108,101,115,0);
         routere /= Math.max(3, parseFloat(`${parseInt(`${routere}`) * 2}`));
         rewindG = (12 == ((rewindG ? 12 : defaultprofilepic6.length) << (Math.min(defaultprofilepic6.length, 3))));
         proxyJ = `${defaultprofilepic6.length}`;
       let fieldT: Array<any> = [996, 911, 199];
       let videojsZ: Array<any> = [935, 534];
      if ((1 >> (Math.min(3, Math.abs(arrowupf.size)))) == 5 && (1 >> (Math.min(3, Math.abs(arrowupf.size)))) == 5) {
          let philippinesD: Array<any> = [54, 755];
          let notificationfillemptyK = true;
          let iconsettingT: Map<any, any> = new Map([[String.fromCharCode(108,95,53,51,95,111,99,97,116,105,111,110,0),true ], [String.fromCharCode(105,95,52,95,114,101,103,105,115,116,101,114,101,114,0),false ], [String.fromCharCode(116,95,49,49,95,117,110,97,108,105,103,110,0),false ]]);
         arrowupf.set(`${fieldT.length}`, routerP.size & 2);
         philippinesD = [iconsettingT.size | 2];
         notificationfillemptyK = (philippinesD.length % (Math.max(iconsettingT.size, 2))) <= 82;
      }
       let configT = true;
         configT = 71.31 > routere;
      for (let n = 0; n < 2; n++) {
         arrowupf.set(`${heartG}`, ((heartG ? 3 : 4)));
      }
      if (!heartG) {
          let pushO: Array<any> = [816, 472];
          let frame_lf = String.fromCharCode(115,105,112,114,95,54,95,56,48,0);
          let downa = 0.0;
          let ewardedh = String.fromCharCode(102,105,108,101,110,97,109,101,115,95,104,95,49,54,0);
          let anneri = String.fromCharCode(115,118,97,114,105,110,116,95,104,95,51,0);
         videojsZ.push(parseInt(`${downa}`) | 1);
         pushO.push(ewardedh.length);
         frame_lf = `${(frame_lf == String.fromCharCode(111,0) ? ewardedh.length : frame_lf.length)}`;
         downa += ewardedh.length;
         anneri += `${2 | ewardedh.length}`;
      }
      while (routere > 1.8) {
          let signinupb: Array<any> = [434, 633, 812];
          let carouselw = String.fromCharCode(111,95,51,95,105,110,99,108,117,115,105,111,110,0);
         configT = configT && mbsplash6.length == 68;
         signinupb.push(1 % (Math.max(6, signinupb.length)));
         carouselw += `${2 << (Math.min(1, signinupb.length))}`;
         break;
      }
      let moreS = videojsZ.length >= 6066656;
      do {
         videojsZ = [mbsplash6.length << (Math.min(1, fieldT.length))];
         if (moreS) {
            break;
         }
      } while (moreS && (1 < (videojsZ.length + 3) || videojsZ.length < 3));
          let blackI = 0.0;
          let grayG = false;
          let inviteS = 1.0;
         heartG = (blackI * fieldT.length) >= 41.87;
         blackI += (parseInt(`${inviteS}`) ^ (grayG ? 1 : 2));
         grayG = !grayG;
         inviteS /= Math.max(2, parseInt(`${inviteS}`) >> (Math.min(4, Math.abs(3))));
      otherq += `${parseInt(`${minimizeD}`) % (Math.max(arrowupf.size, 5))}`;
   }
       let defaultfootballbgk = 3.0;
       let predictionc = 0.0;
          let countdown8 = String.fromCharCode(100,105,118,105,100,101,100,95,100,95,52,53,0);
         predictionc /= Math.max(parseFloat(`${parseInt(`${predictionc}`)}`), 5);
         countdown8 += "3";
         defaultfootballbgk -= parseFloat(`${parseInt(`${defaultfootballbgk}`) ^ 1}`);
      let livenodatabgimgk = predictionc <= 8320161.0;
      do {
         predictionc += parseFloat(`${parseInt(`${defaultfootballbgk}`)}`);
         if (livenodatabgimgk) {
            break;
         }
      } while (livenodatabgimgk && ((predictionc + 4.91) < 1.78 && (defaultfootballbgk + predictionc) < 4.91));
       let liveendmodallogoh = 4;
      if (defaultfootballbgk <= 4.53) {
          let binddatasV = String.fromCharCode(121,95,52,54,95,118,97,99,117,117,109,0);
         defaultfootballbgk /= Math.max((parseFloat(`${String.fromCharCode(99,0) == binddatasV ? liveendmodallogoh : binddatasV.length}`)), 3);
      }
      while (5 > (4 << (Math.min(2, Math.abs(liveendmodallogoh)))) || (liveendmodallogoh | 4) > 4) {
         liveendmodallogoh >>= Math.min(2, Math.abs(parseInt(`${defaultfootballbgk}`) / 1));
         break;
      }
      reactnativejsH.push(temperatures.length % 1);
   let halffieldimage0 = d_titleV.size <= 8868983;
   do {
      d_titleV.set(`${emptyE}`, 1 % (Math.max(8, gmailJ.size)));
      if (halffieldimage0) {
         break;
      }
   } while ((!Array.from(d_titleV.values()).includes(reactnativejsH.length)) && halffieldimage0);
       let alertq: Map<any, any> = new Map([[String.fromCharCode(102,95,51,56,95,115,116,114,117,99,116,0),String.fromCharCode(116,111,112,115,95,111,95,54,53,0)], [String.fromCharCode(110,114,101,102,95,103,95,54,50,0),String.fromCharCode(114,101,115,105,103,110,105,110,103,95,121,95,52,55,0)]]);
       let checkboxD: Map<any, any> = new Map([[String.fromCharCode(108,95,55,52,95,97,116,111,109,115,0),451], [String.fromCharCode(97,95,54,52,95,115,116,101,110,99,105,108,0),12]]);
       let updatesu: Array<any> = [482, 653, 333];
         updatesu.push(updatesu.length - 3);
         checkboxD.set(`${updatesu.length}`, checkboxD.size);
       let sheeth = 2.0;
       let product8 = 5.0;
      for (let n = 0; n < 3; n++) {
         alertq.set(`${updatesu.length}`, updatesu.length);
      }
      for (let a = 0; a < 1; a++) {
         sheeth /= Math.max(checkboxD.size % 2, 3);
      }
         alertq.set(`${checkboxD.size}`, alertq.size | checkboxD.size);
      while ((updatesu.length << (Math.min(Math.abs(alertq.size), 3))) < 3) {
         alertq = new Map([[`${sheeth}`, parseInt(`${product8}`)]]);
         break;
      }
       let historyu = String.fromCharCode(114,101,112,108,97,121,103,97,105,110,95,106,95,57,51,0);
      let containerP = 7440303 <= checkboxD.size;
      do {
         checkboxD = new Map([[`${checkboxD.size}`, checkboxD.size]]);
         if (containerP) {
            break;
         }
      } while (((historyu.length | 1) < 1 && 5 < (checkboxD.size | 1)) && containerP);
      reactnativejsH.push(2 ^ gmailJ.size);
       let stepk = 1.0;
       let watchA = String.fromCharCode(98,95,49,95,99,111,100,101,99,115,0);
       let libreactperfloggerjnik: Map<any, any> = new Map([[String.fromCharCode(115,117,98,116,114,101,101,115,95,102,95,49,0),String.fromCharCode(120,95,56,95,103,114,97,100,0)], [String.fromCharCode(119,95,54,53,95,99,111,110,110,101,99,116,111,114,0),String.fromCharCode(115,95,51,55,95,99,111,108,108,105,115,116,0)], [String.fromCharCode(121,95,53,49,0),String.fromCharCode(109,95,52,56,95,115,112,101,99,105,97,108,0)]]);
          let uimanagerN = String.fromCharCode(115,111,97,98,111,114,116,95,50,95,57,54,0);
          let nterstitialW = 2;
          let whistleorangeK = String.fromCharCode(115,104,97,100,101,95,122,95,53,52,0);
         libreactperfloggerjnik.set(uimanagerN, 1 >> (Math.min(4, Math.abs(nterstitialW))));
         uimanagerN += `${whistleorangeK.length ^ whistleorangeK.length}`;
         nterstitialW ^= 3;
      for (let g = 0; g < 3; g++) {
          let incidentC = String.fromCharCode(109,95,49,53,95,115,105,103,118,101,114,0);
         watchA = `${(String.fromCharCode(49,0) == watchA ? libreactperfloggerjnik.size : watchA.length)}`;
         incidentC += `${2 - incidentC.length}`;
      }
       let buttonh = String.fromCharCode(99,102,109,116,95,55,95,50,57,0);
       let neona = String.fromCharCode(112,108,117,114,97,108,95,120,95,57,54,0);
         stepk /= Math.max((parseFloat(`${watchA == String.fromCharCode(109,0) ? watchA.length : parseInt(`${stepk}`)}`)), 1);
      if (!watchA.startsWith(`${buttonh.length}`)) {
         watchA += `${(String.fromCharCode(68,0) == watchA ? watchA.length : neona.length)}`;
      }
         libreactperfloggerjnik = new Map([[`${libreactperfloggerjnik.size}`, parseInt(`${stepk}`) << (Math.min(Math.abs(1), 2))]]);
      let selectiono = 5417355 >= buttonh.length;
      do {
         buttonh = `${watchA.length / 1}`;
         if (selectiono) {
            break;
         }
      } while (selectiono && (5 >= (libreactperfloggerjnik.size % (Math.max(2, 4)))));
         buttonh = `${libreactperfloggerjnik.size}`;
      for (let h = 0; h < 3; h++) {
          let macauL = false;
         stepk -= parseFloat(`${parseInt(`${stepk}`) / 3}`);
         macauL = (macauL ? macauL : !macauL);
      }
      gmailJ = new Map([[`${temperatures.length}`, 3 % (Math.max(3, temperatures.length))]]);
       let weatherd = true;
       let overlayg = 0;
      let videovarq = weatherd ? !weatherd : weatherd;
      do {
          let lightN: Array<any> = [String.fromCharCode(110,95,52,55,95,99,105,112,104,101,114,0), String.fromCharCode(100,101,109,111,100,117,108,97,116,101,95,122,95,54,54,0)];
          let componentsb = 4.0;
          let homeE = String.fromCharCode(98,105,116,114,118,95,115,95,51,51,0);
          let teamdetailsbg8 = String.fromCharCode(102,117,110,110,121,95,53,95,49,53,0);
          let paginationl: Map<any, any> = new Map([[String.fromCharCode(117,116,112,117,116,95,107,95,49,50,0),String.fromCharCode(120,95,53,51,95,99,101,108,116,0)], [String.fromCharCode(100,99,97,100,115,112,95,110,95,54,57,0),String.fromCharCode(112,95,52,51,95,99,97,114,101,116,0)], [String.fromCharCode(115,95,49,53,95,97,118,97,116,97,114,0),String.fromCharCode(115,105,109,117,108,99,97,115,116,95,56,95,55,48,0)]]);
         weatherd = 74 < overlayg;
         lightN = [homeE.length];
         componentsb -= paginationl.size;
         homeE += "2";
         teamdetailsbg8 = `${teamdetailsbg8.length >> (Math.min(Math.abs(3), 3))}`;
         paginationl = new Map([[`${componentsb}`, homeE.length]]);
         if (videovarq) {
            break;
         }
      } while (((overlayg / (Math.max(2, 10))) <= 2) && videovarq);
       let sansn = 4.0;
       let hejib = 3.0;
      for (let a = 0; a < 3; a++) {
         sansn *= parseFloat(`${overlayg}`);
      }
         hejib /= Math.max(parseFloat(`${2 | parseInt(`${sansn}`)}`), 2);
         hejib -= (parseFloat(`${parseInt(`${hejib}`) & (weatherd ? 2 : 3)}`));
         weatherd = 87.16 > hejib && sansn > 87.16;
      bootsplashZ += `${(dragcloseK.length & (weatherd ? 1 : 4))}`;
   let hoverV = 7206491.0 >= minimizeD;
   do {
       let dialogK = 5.0;
       let fcdaebecbcbafcdfceaaeccfeacdbd: Map<any, any> = new Map([[String.fromCharCode(99,104,115,99,97,108,101,95,114,95,52,54,0),972], [String.fromCharCode(105,110,118,111,107,101,114,95,104,95,49,48,0),894]]);
       let feedbacks = String.fromCharCode(105,95,55,50,95,108,111,116,116,105,101,105,116,101,109,0);
       let styleG = 3.0;
       let stationse = 1.0;
      while (dialogK == stationse) {
          let minivod_ = String.fromCharCode(97,100,100,105,116,105,118,101,95,119,95,50,53,0);
         stationse -= parseInt(`${styleG}`);
         minivod_ += `${minivod_.length}`;
         break;
      }
          let selectR = 3.0;
         feedbacks += `${1 | parseInt(`${styleG}`)}`;
         selectR += parseInt(`${selectR}`);
          let mintegrald = true;
          let dialog1 = String.fromCharCode(121,109,101,110,99,95,112,95,56,52,0);
         dialogK += parseFloat(`${feedbacks.length}`);
         mintegrald = !mintegrald && dialog1.length <= 21;
         dialog1 = `${(String.fromCharCode(83,0) == dialog1 ? dialog1.length : (mintegrald ? 2 : 3))}`;
      let chat7 = stationse <= 8554202.0;
      do {
         stationse += parseInt(`${dialogK}`);
         if (chat7) {
            break;
         }
      } while (chat7 && (3.96 <= stationse));
      let subss = 6554113 <= feedbacks.length;
      do {
          let reactnavigationA = String.fromCharCode(115,121,115,99,116,108,115,95,110,95,49,56,0);
          let footballfiledlayoutK = 4.0;
          let progressm = 4.0;
          let defaultroombgY = true;
          let sina1 = 3.0;
         feedbacks += `${1 & reactnavigationA.length}`;
         reactnavigationA += `${((defaultroombgY ? 1 : 5) / (Math.max(parseInt(`${progressm}`), 8)))}`;
         footballfiledlayoutK += parseFloat(`${1 * parseInt(`${sina1}`)}`);
         progressm /= Math.max(5, 3 / (Math.max(parseInt(`${sina1}`), 8)));
         defaultroombgY = footballfiledlayoutK >= progressm;
         if (subss) {
            break;
         }
      } while ((!feedbacks.includes(`${fcdaebecbcbafcdfceaaeccfeacdbd.size}`)) && subss);
      if (2 <= feedbacks.length) {
         fcdaebecbcbafcdfceaaeccfeacdbd = new Map([[`${fcdaebecbcbafcdfceaaeccfeacdbd.size}`, parseInt(`${stationse}`) | 1]]);
      }
      if (5 >= fcdaebecbcbafcdfceaaeccfeacdbd.size) {
         fcdaebecbcbafcdfceaaeccfeacdbd = new Map([[`${dialogK}`, parseInt(`${stationse}`) | parseInt(`${dialogK}`)]]);
      }
      for (let o = 0; o < 3; o++) {
          let vipsport_ = 3.0;
          let goalJ = false;
         styleG *= parseFloat(`${parseInt(`${styleG}`) / (Math.max(3, parseInt(`${stationse}`)))}`);
         vipsport_ += (parseFloat(`${(goalJ ? 4 : 4) + parseInt(`${vipsport_}`)}`));
         goalJ = !goalJ;
      }
       let mintegralk = String.fromCharCode(112,114,111,109,105,115,101,115,95,98,95,55,0);
      let areax = 8760252 <= mintegralk.length;
      do {
          let submito: Map<any, any> = new Map([[String.fromCharCode(115,116,97,116,105,111,110,97,114,105,116,121,95,118,95,55,57,0),513], [String.fromCharCode(108,97,112,110,100,122,95,104,95,54,57,0),158]]);
          let chinaA = 5.0;
         mintegralk += `${parseInt(`${chinaA}`)}`;
         submito = new Map([[`${submito.size}`, submito.size + submito.size]]);
         chinaA -= submito.size;
         if (areax) {
            break;
         }
      } while ((3 < (mintegralk.length | fcdaebecbcbafcdfceaaeccfeacdbd.size) || 5 < (3 | fcdaebecbcbafcdfceaaeccfeacdbd.size)) && areax);
         dialogK += parseFloat(`${parseInt(`${stationse}`)}`);
         dialogK += parseFloat(`${parseInt(`${dialogK}`)}`);
         styleG *= parseFloat(`${parseInt(`${styleG}`)}`);
         fcdaebecbcbafcdfceaaeccfeacdbd = new Map([[`${stationse}`, 1]]);
         fcdaebecbcbafcdfceaaeccfeacdbd.set(`${dialogK}`, mintegralk.length);
      minimizeD -= 3;
      if (hoverV) {
         break;
      }
   } while (hoverV && (minimizeD < 2.68));
   if ((3 % (Math.max(2, gmailJ.size))) > 1 || 4.14 > (gmailJ.size / (Math.max(8, minimizeD)))) {
      minimizeD += bootsplashZ.length;
   }
      kuaishour += parseInt(`${minimizeD}`) * 1;
      otherq += `${bootsplashZ.length}`;
   for (let a = 0; a < 1; a++) {
      bootsplashZ = `${3 & bootsplashZ.length}`;
   }
   while (5 == (gmailJ.size & 5) || 2 == (gmailJ.size & 5)) {
      otherq += `${d_titleV.size}`;
      break;
   }
      reactnativejsH = [parseInt(`${minimizeD}`)];
      gmailJ = new Map([[bootsplashZ, 3 & gesturesB.length]]);
   while (emptyE.length <= 4) {
      bootsplashZ = `${d_titleV.size}`;
      break;
   }
      reactnativejsH = [gesturesB.length];

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
       let defaultplayerimgF = String.fromCharCode(115,95,57,55,95,105,110,102,0);
    let championl: Array<any> = [String.fromCharCode(103,101,110,101,114,97,116,101,95,113,95,51,54,0), String.fromCharCode(108,101,116,116,101,114,95,110,95,57,48,0)];
    let components3 = true;
    let countdownY = 0.0;
    let libavdevicer = String.fromCharCode(97,95,50,51,95,118,111,105,99,101,109,97,105,108,0);
    let thumbnailf: Map<any, any> = new Map([[String.fromCharCode(100,95,52,54,95,115,111,100,101,97,108,108,111,99,0),807], [String.fromCharCode(112,95,55,56,95,105,100,97,116,0),903]]);
    let videocommonA = 1.0;
    let libcrashsdkK = 3.0;
    let predictionbannersharedS = String.fromCharCode(102,114,97,99,116,105,111,110,97,108,95,114,95,54,52,0);
    let librrcG: Map<any, any> = new Map([[String.fromCharCode(109,95,49,53,95,109,117,108,116,105,112,108,121,105,110,103,0),356], [String.fromCharCode(105,110,116,101,114,105,111,114,95,53,95,50,56,0),62], [String.fromCharCode(100,95,51,56,95,99,105,112,104,101,114,115,0),736]]);
    let topicZ = String.fromCharCode(100,95,52,57,95,97,109,101,120,0);
    let textinputF = String.fromCharCode(112,114,101,109,105,117,109,95,117,95,49,51,0);
    let x_managerl: Array<any> = [969, 543, 242];
   if (!components3) {
      components3 = 39.62 < libcrashsdkK;
   }
   if (thumbnailf.size == 2) {
      thumbnailf.set(`${components3}`, parseInt(`${countdownY}`) ^ 2);
   }
   while (!components3) {
       let pauses = String.fromCharCode(122,95,54,57,95,99,97,115,99,97,100,101,100,0);
       let targetU: Array<any> = [String.fromCharCode(114,101,110,100,101,114,97,98,108,101,95,107,95,57,51,0), String.fromCharCode(114,101,111,114,100,101,114,105,110,103,95,99,95,52,49,0)];
       let umeng8 = 1.0;
       let mintegralg = String.fromCharCode(119,101,108,99,111,109,101,95,119,95,52,52,0);
      for (let x = 0; x < 1; x++) {
          let preview5: Array<any> = [952, 364];
          let backwardV = String.fromCharCode(101,95,56,50,95,115,101,97,114,99,104,0);
          let baselineW = String.fromCharCode(97,100,115,103,97,115,95,122,95,50,51,0);
         mintegralg = `${(String.fromCharCode(121,0) == mintegralg ? mintegralg.length : pauses.length)}`;
         preview5.push(backwardV.length >> (Math.min(5, preview5.length)));
         backwardV = `${2 & preview5.length}`;
         baselineW += `${preview5.length % (Math.max(1, 4))}`;
      }
          let detailsU = String.fromCharCode(108,105,98,118,112,120,95,118,95,54,48,0);
         umeng8 *= (parseFloat(`${String.fromCharCode(118,0) == mintegralg ? detailsU.length : mintegralg.length}`));
       let dplusn: Map<any, any> = new Map([[String.fromCharCode(109,95,49,50,95,98,108,105,116,0),String.fromCharCode(105,110,116,114,97,120,98,108,111,99,107,95,106,95,55,49,0)], [String.fromCharCode(103,114,101,103,95,119,95,49,49,0),String.fromCharCode(101,97,114,108,105,101,114,95,120,95,49,48,0)], [String.fromCharCode(106,95,54,48,95,104,101,120,105,110,116,0),String.fromCharCode(122,95,52,57,95,99,111,110,102,111,114,109,97,110,99,101,0)]]);
      while (dplusn.get(`${umeng8}`) == null) {
          let championx = 5.0;
         umeng8 -= parseFloat(`${3}`);
         championx *= 2 * parseInt(`${championx}`);
         break;
      }
      if (targetU.length <= mintegralg.length) {
         mintegralg = `${dplusn.size ^ pauses.length}`;
      }
      for (let v = 0; v < 3; v++) {
         mintegralg = `${pauses.length}`;
      }
         pauses += `${mintegralg.length | parseInt(`${umeng8}`)}`;
          let imagenetworkerrM = String.fromCharCode(99,101,110,116,101,114,95,118,95,52,50,0);
          let telegram0 = 5;
         targetU.push(mintegralg.length + dplusn.size);
         imagenetworkerrM += `${telegram0 ^ 1}`;
         telegram0 &= imagenetworkerrM.length;
      for (let b = 0; b < 2; b++) {
         dplusn.set(`${targetU.length}`, 3);
      }
          let phoneshare9 = String.fromCharCode(115,97,109,112,108,101,100,95,119,95,51,54,0);
          let profileframeU = String.fromCharCode(100,101,98,117,103,98,111,120,95,104,95,52,57,0);
         targetU = [3];
         phoneshare9 += `${(phoneshare9 == String.fromCharCode(53,0) ? phoneshare9.length : profileframeU.length)}`;
         profileframeU += `${(String.fromCharCode(97,0) == profileframeU ? profileframeU.length : phoneshare9.length)}`;
         targetU.push((String.fromCharCode(76,0) == mintegralg ? mintegralg.length : dplusn.size));
      for (let b = 0; b < 3; b++) {
         mintegralg = "1";
      }
      championl = [thumbnailf.size];
      break;
   }
      thumbnailf.set(`${videocommonA}`, championl.length & parseInt(`${videocommonA}`));
       let circleS = String.fromCharCode(112,97,105,110,116,95,121,95,52,57,0);
         circleS = `${circleS.length | 2}`;
      let bingS = circleS.length <= 8288574;
      do {
          let annerN = 1.0;
         circleS += `${parseInt(`${annerN}`)}`;
         if (bingS) {
            break;
         }
      } while ((circleS == circleS) && bingS);
      if (5 >= circleS.length) {
         circleS += `${1 >> (Math.min(4, circleS.length))}`;
      }
      libcrashsdkK += parseInt(`${videocommonA}`) ^ libavdevicer.length;
   let libreanimatedf = 9662816.0 <= countdownY;
   do {
      countdownY /= Math.max(1, predictionbannersharedS.length * 2);
      if (libreanimatedf) {
         break;
      }
   } while (libreanimatedf && ((libavdevicer.length * 1) <= 5 || 4.37 <= (countdownY * libavdevicer.length)));
   let iconsaveimage4 = 6186944.0 >= videocommonA;
   do {
       let mbsplashB = String.fromCharCode(122,95,57,51,95,108,105,98,0);
       let predictionarrowl = true;
       let hookZ = 4;
       let videocommonT = true;
          let orangeG = 4.0;
          let gifgoalt = String.fromCharCode(114,101,108,111,97,100,105,110,103,95,119,95,57,48,0);
          let subbasketballplayerW: Map<any, any> = new Map([[String.fromCharCode(109,97,120,98,117,114,115,116,95,106,95,57,53,0),113], [String.fromCharCode(112,114,101,112,95,116,95,49,51,0),751]]);
         predictionarrowl = (((!videocommonT ? 31 : subbasketballplayerW.size) % (Math.max(subbasketballplayerW.size, 5))) <= 31);
         orangeG -= (String.fromCharCode(111,0) == gifgoalt ? gifgoalt.length : parseInt(`${orangeG}`));
      while (1 < hookZ) {
          let mintegraly: Map<any, any> = new Map([[String.fromCharCode(99,111,110,115,116,116,105,109,101,95,97,95,53,55,0),689], [String.fromCharCode(115,117,98,116,114,97,99,116,105,110,103,95,111,95,54,0),794], [String.fromCharCode(103,95,51,95,109,101,116,97,100,97,116,97,115,0),946]]);
          let upgrade5 = true;
         predictionarrowl = !predictionarrowl;
         mintegraly.set(`${upgrade5}`, mintegraly.size + 2);
         break;
      }
          let unfilly = String.fromCharCode(118,95,52,51,95,115,101,116,116,105,103,110,115,0);
         hookZ -= 2;
         unfilly = `${unfilly.length % (Math.max(unfilly.length, 4))}`;
         hookZ >>= Math.min(4, parseInt(`${Math.abs(((predictionarrowl ? 1 : 4) >> (Math.min(Math.abs(hookZ), 4))))}`));
         videocommonT = !videocommonT;
      let topic0 = 8143166 >= hookZ;
      do {
         hookZ &= hookZ;
         if (topic0) {
            break;
         }
      } while (topic0 && (hookZ < 5));
      while (predictionarrowl && mbsplashB.length > 3) {
         predictionarrowl = videocommonT || 93 < hookZ;
         break;
      }
      for (let o = 0; o < 3; o++) {
         predictionarrowl = !predictionarrowl;
      }
          let securityq = 4.0;
         mbsplashB = `${(parseInt(`${securityq}`) ^ (videocommonT ? 2 : 1))}`;
         mbsplashB += `${mbsplashB.length & 3}`;
         hookZ -= (mbsplashB.length << (Math.min(1, Math.abs((videocommonT ? 5 : 3)))));
      if (!mbsplashB.endsWith(`${videocommonT}`)) {
         videocommonT = 59 <= hookZ && !videocommonT;
      }
      videocommonA += hookZ;
      if (iconsaveimage4) {
         break;
      }
   } while ((1.27 < (videocommonA * 2.83)) && iconsaveimage4);
      topicZ += `${1 >> (Math.min(3, Math.abs(parseInt(`${videocommonA}`))))}`;
      countdownY *= 2;
      championl = [librrcG.size];
       let p_lockB = String.fromCharCode(101,120,112,111,110,101,110,116,115,95,53,95,53,50,0);
       let referrerx = 0.0;
       let roundc: Map<any, any> = new Map([[String.fromCharCode(99,95,54,95,116,104,97,119,101,100,0),968], [String.fromCharCode(111,117,116,101,114,95,119,95,51,49,0),429]]);
      for (let d = 0; d < 2; d++) {
          let annert = String.fromCharCode(101,95,55,56,95,115,119,97,112,0);
          let mintegralf = String.fromCharCode(109,115,118,115,95,48,95,55,51,0);
          let bannerV = String.fromCharCode(105,110,116,101,103,101,114,115,95,107,95,57,0);
          let alertQ = String.fromCharCode(112,95,52,55,95,103,111,111,103,0);
          let final_ejJ: Map<any, any> = new Map([[String.fromCharCode(119,95,54,52,95,108,97,117,110,99,104,101,100,0),33], [String.fromCharCode(116,114,97,110,115,102,111,114,109,101,114,95,100,95,52,52,0),106]]);
         referrerx /= Math.max(3 << (Math.min(1, bannerV.length)), 5);
         annert = `${mintegralf.length}`;
         mintegralf += `${(annert == String.fromCharCode(118,0) ? annert.length : mintegralf.length)}`;
         bannerV += "1";
         alertQ += `${mintegralf.length}`;
         final_ejJ = new Map([[annert, 3 & annert.length]]);
      }
      countdownY += p_lockB.length - 3;
       let libsgcorei = String.fromCharCode(105,110,116,102,108,111,97,116,95,103,95,52,49,0);
       let actionI: Map<any, any> = new Map([[String.fromCharCode(101,95,50,49,95,112,97,114,101,110,116,0),85], [String.fromCharCode(115,116,117,100,105,111,95,52,95,55,50,0),655]]);
       let fasta = String.fromCharCode(109,95,50,0);
         libsgcorei += `${(libsgcorei == String.fromCharCode(119,0) ? actionI.size : libsgcorei.length)}`;
         actionI.set(fasta, actionI.size);
         actionI = new Map([[`${actionI.size}`, libsgcorei.length & 2]]);
      let defaultpredictionprofileP = fasta.length >= 9454702;
      do {
         fasta += `${actionI.size & libsgcorei.length}`;
         if (defaultpredictionprofileP) {
            break;
         }
      } while (defaultpredictionprofileP && (!fasta.endsWith(`${actionI.size}`)));
          let dangerF = 4.0;
         actionI = new Map([[`${actionI.size}`, fasta.length]]);
         dangerF /= Math.max(5, parseInt(`${dangerF}`) & 3);
       let holderY = 4.0;
          let catalogQ = String.fromCharCode(100,101,112,114,101,99,97,116,105,111,110,95,119,95,57,56,0);
          let servicet = false;
          let langkeyU = String.fromCharCode(102,97,108,115,101,95,51,95,54,55,0);
         actionI.set(`${servicet}`, ((servicet ? 3 : 3) ^ parseInt(`${holderY}`)));
         catalogQ = `${(langkeyU == String.fromCharCode(54,0) ? catalogQ.length : langkeyU.length)}`;
         libsgcorei = `${2 - fasta.length}`;
         actionI.set(fasta, 3);
      libavdevicer = `${predictionbannersharedS.length}`;
      championl = [2 - libavdevicer.length];

    const user = await wwIconscheduleColors.guestLogin();

   if (4 > textinputF.length || components3) {
      textinputF += `${predictionbannersharedS.length | 3}`;
   }
   while (videocommonA < libcrashsdkK) {
      libcrashsdkK *= topicZ.length - parseInt(`${countdownY}`);
      break;
   }
   let downloadedc = thumbnailf.size <= 9183796;
   do {
       let statsz = 0;
       let auto_feH = String.fromCharCode(97,95,54,48,95,101,111,109,101,116,114,121,0);
       let orangeclockQ = 5.0;
      if ((orangeclockQ + auto_feH.length) < 5.29) {
         auto_feH += `${parseInt(`${orangeclockQ}`) / (Math.max(5, auto_feH.length))}`;
      }
         statsz ^= statsz + parseInt(`${orangeclockQ}`);
          let banga: Map<any, any> = new Map([[String.fromCharCode(114,101,115,112,101,99,116,105,110,103,95,50,95,49,49,0),966], [String.fromCharCode(110,95,55,53,95,101,110,99,97,112,115,117,108,97,116,101,100,0),784]]);
         statsz -= banga.size;
          let nativemoduleX = String.fromCharCode(106,95,53,55,95,110,109,104,100,0);
          let footballfieldl = String.fromCharCode(114,95,57,49,95,117,112,100,97,116,101,0);
          let bodanY = String.fromCharCode(114,95,53,48,95,103,111,112,104,101,114,0);
         orangeclockQ /= Math.max(4, (bodanY == String.fromCharCode(79,0) ? statsz : bodanY.length));
         nativemoduleX = "1";
         footballfieldl += `${nativemoduleX.length}`;
      let league4 = 5152155.0 <= orangeclockQ;
      do {
         orangeclockQ -= auto_feH.length / 2;
         if (league4) {
            break;
         }
      } while (league4 && (orangeclockQ < 3.48));
         orangeclockQ *= parseInt(`${orangeclockQ}`) - 2;
      if (1 >= (2 - parseInt(`${orangeclockQ}`)) || (auto_feH.length - orangeclockQ) >= 4.8) {
         orangeclockQ /= Math.max(parseInt(`${orangeclockQ}`) % 3, 1);
      }
      let confirmation4 = 8827717 <= statsz;
      do {
         statsz -= auto_feH.length - parseInt(`${orangeclockQ}`);
         if (confirmation4) {
            break;
         }
      } while (confirmation4 && ((statsz >> (Math.min(Math.abs(4), 4))) == 3 && (statsz - orangeclockQ) == 4.65));
      for (let y = 0; y < 2; y++) {
         auto_feH = `${statsz}`;
      }
      thumbnailf.set(`${countdownY}`, parseInt(`${countdownY}`) >> (Math.min(5, Math.abs(parseInt(`${videocommonA}`)))));
      if (downloadedc) {
         break;
      }
   } while ((thumbnailf.size == topicZ.length) && downloadedc);
       let source_ = 2;
       let libfabricjniB = 4;
         source_ %= Math.max(2, libfabricjniB);
      let orange2 = libfabricjniB <= 5546369;
      do {
         libfabricjniB /= Math.max(source_ >> (Math.min(Math.abs(2), 5)), 4);
         if (orange2) {
            break;
         }
      } while (orange2 && (1 == (3 | libfabricjniB)));
         libfabricjniB += 3 * libfabricjniB;
         libfabricjniB <<= Math.min(Math.abs(source_ << (Math.min(Math.abs(1), 3))), 4);
          let fieldJ = String.fromCharCode(105,110,105,116,97,108,105,122,101,95,118,95,49,54,0);
          let defaultplayerimgx = String.fromCharCode(104,95,51,53,95,114,101,103,101,110,101,114,97,116,101,0);
         source_ /= Math.max(fieldJ.length | defaultplayerimgx.length, 4);
          let mailz: Map<any, any> = new Map([[String.fromCharCode(113,95,53,51,95,101,108,101,109,101,110,116,115,0),157], [String.fromCharCode(118,95,56,56,95,112,114,101,102,105,120,101,100,0),969]]);
          let c_position_ = false;
         libfabricjniB /= Math.max(5, 3);
         mailz.set(`${mailz.size}`, mailz.size | 2);
         c_position_ = 89 >= mailz.size && mailz.size >= 89;
      libavdevicer = "3";
   for (let u = 0; u < 1; u++) {
      videocommonA /= Math.max((championl.length << (Math.min(1, Math.abs((components3 ? 2 : 4))))), 4);
   }
      librrcG.set(`${videocommonA}`, thumbnailf.size);
   let largebrightness4 = components3 ? !components3 : components3;
   do {
      components3 = (videocommonA - thumbnailf.size) < 57.50;
      if (largebrightness4) {
         break;
      }
   } while ((components3 || 3.19 > (5.62 / (Math.max(5, libcrashsdkK)))) && largebrightness4);
      libavdevicer += `${(String.fromCharCode(57,0) == libavdevicer ? libavdevicer.length : defaultplayerimgF.length)}`;
       let full7 = String.fromCharCode(101,120,112,101,99,116,115,95,51,95,49,51,0);
         full7 = `${full7.length}`;
      for (let g = 0; g < 2; g++) {
         full7 += `${full7.length}`;
      }
          let injuryo = 1;
         full7 = `${injuryo}`;
      thumbnailf = new Map([[textinputF, full7.length]]);
      libcrashsdkK *= x_managerl.length;
   while ((x_managerl.length | 2) == 2 || (x_managerl.length | 2) == 5) {
      predictionbannersharedS += "1";
      break;
   }
       let orangeI: Array<any> = [288, 648];
      if (2 == (orangeI.length * orangeI.length) && 4 == (orangeI.length * 2)) {
          let catagoryc: Array<any> = [String.fromCharCode(109,111,118,101,116,111,95,99,95,57,51,0), String.fromCharCode(97,95,57,55,95,98,105,116,101,120,97,99,116,0), String.fromCharCode(100,97,121,115,95,114,95,53,53,0)];
          let basketballO = 0;
         orangeI.push(catagoryc.length);
         catagoryc = [basketballO];
      }
      for (let o = 0; o < 3; o++) {
         orangeI.push(orangeI.length % (Math.max(10, orangeI.length)));
      }
      if (2 > (1 * orangeI.length) && 1 > (orangeI.length * orangeI.length)) {
         orangeI = [orangeI.length];
      }
      thumbnailf = new Map([[`${librrcG.size}`, (defaultplayerimgF == String.fromCharCode(75,0) ? librrcG.size : defaultplayerimgF.length)]]);
      defaultplayerimgF += `${librrcG.size}`;

    await dispatch(addUserAuthState(user));
  };

  
  
  
  const userState = useSelector<wwVertical>('userReducer');
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
        {wwBodan.isLogin(userState.user) && (
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
