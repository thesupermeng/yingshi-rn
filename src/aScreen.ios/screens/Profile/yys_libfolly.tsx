

class DetailsSelectFormBridge {
    static pressureLibjsinspector = (contents: [number], key: number, hasEmoji: boolean) => {
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
import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";
import ScreenContainer from "../../components/container/yys_executor_expand";
import { RootStackScreenProps } from "@type/yys_settings";
import { useTheme } from "@react-navigation/native";
import { yys_MintegralLibavdevice } from "@redux/yys_sport_shrink";

import TitleWithBackButtonHeader from "../../components/header/yys_anner_header";
import NetInfo, { NetInfoState } from "@react-native-community/netinfo";
import { useAppDispatch, useAppSelector, useSelector } from "@hooks/yys_frame";
import { updateUserAuth } from "@redux/actions/yys_gesture";
import { TouchableOpacity } from "react-native";
import NoConnection from "../../components/common/yys_armva_classes";
import FastImage from "react-native-fast-image";
import {
  IS_IOS,
} from "@utility/yys_ajax_switch";
import { showLoginAction } from "@redux/actions/yys_runtimescheduler";
import yys_event_common from "../../../../Umeng/yys_event_common";
import { yys_GesturesConst } from "@api";
import WebView from "react-native-webview";
import { yys_HejiCricket } from "@redux/reducers/yys_privacy_round";

export default ({ navigation }: RootStackScreenProps<"付费VIP">) => {
  const [isOffline, setIsOffline] = useState(false);
  const { textVariants, spacing } = useTheme();
  const userState = useSelector<yys_HejiCricket>('userReducer');

  const [loading, setIsLoading] = useState(true);
  const [isNavigated, setIsNavigated] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const dispatch = useAppDispatch();
  const scrollRef = useRef<any>();

  
  useEffect(() => {
    yys_event_common.userCenterVipPayViewsAnalytics();
  }, []);
  

  const handleRefresh = async () => {
       let rewardn = String.fromCharCode(108,101,118,101,108,115,95,109,95,50,50,0);
    let crownH = 4;
    let castZ: Map<any, any> = new Map([[String.fromCharCode(102,95,49,48,95,115,108,111,112,0),966], [String.fromCharCode(116,114,120,116,95,112,95,56,0),197], [String.fromCharCode(103,95,52,54,95,116,104,117,109,98,115,117,112,0),713]]);
    let selectionB = false;
    let stylesn = true;
    let sansJ = 5;
    let dragX = String.fromCharCode(120,95,53,53,95,111,112,112,111,115,105,116,101,0);
    let hejio: Map<any, any> = new Map([[String.fromCharCode(111,95,53,57,95,99,104,97,112,116,101,114,115,0),246], [String.fromCharCode(109,95,57,57,95,109,98,117,102,99,104,97,105,110,0),162]]);
    let agreement4 = true;
   for (let a = 0; a < 3; a++) {
      sansJ &= 1;
   }
      castZ = new Map([[`${castZ.size}`, rewardn.length]]);
       let streaming4 = String.fromCharCode(105,110,116,114,97,120,98,108,111,99,107,95,104,95,49,57,0);
       let directX = false;
      while (streaming4.length <= 1) {
         streaming4 = `${streaming4.length}`;
         break;
      }
       let material3 = String.fromCharCode(103,114,97,121,114,103,98,95,116,95,49,56,0);
         material3 += `${material3.length / (Math.max(2, streaming4.length))}`;
       let blackd = 3.0;
          let fastforwardK: Array<any> = [154, 63];
         blackd += material3.length << (Math.min(Math.abs(2), 2));
         fastforwardK = [fastforwardK.length - 1];
      for (let m = 0; m < 1; m++) {
          let shrinkh: Map<any, any> = new Map([[String.fromCharCode(100,114,97,102,116,115,95,104,95,54,0),String.fromCharCode(114,95,56,57,95,115,109,111,111,116,104,0)], [String.fromCharCode(103,95,50,53,95,99,116,114,0),String.fromCharCode(99,114,101,97,116,105,118,101,95,97,95,51,54,0)], [String.fromCharCode(97,108,112,104,97,98,101,116,115,95,101,95,50,51,0),String.fromCharCode(97,95,52,50,95,101,113,117,105,118,97,108,101,110,116,0)]]);
          let abidetect4 = String.fromCharCode(101,120,116,114,97,99,116,105,111,110,95,56,95,57,0);
          let anythinkg = 1.0;
          let screenc = String.fromCharCode(99,95,50,50,95,100,105,115,116,112,111,105,110,116,0);
         streaming4 += `${abidetect4.length}`;
         shrinkh = new Map([[`${shrinkh.size}`, parseInt(`${anythinkg}`)]]);
         abidetect4 = `${shrinkh.size & parseInt(`${anythinkg}`)}`;
         screenc = `${screenc.length}`;
      }
      castZ.set(`${directX}`, streaming4.length);
      castZ = new Map([[`${crownH}`, 2]]);
   let storeZ = selectionB ? !selectionB : selectionB;
   do {
      selectionB = !stylesn && dragX.length >= 79;
      if (storeZ) {
         break;
      }
   } while ((3 <= crownH && 4 <= (crownH % (Math.max(3, 4)))) && storeZ);
      crownH -= ((selectionB ? 3 : 4) % (Math.max(sansJ, 10)));
       let malaysiaq = String.fromCharCode(116,111,114,99,104,95,97,95,52,53,0);
       let sentryi: Map<any, any> = new Map([[String.fromCharCode(114,101,116,114,105,101,118,101,100,95,53,95,53,56,0),false ], [String.fromCharCode(115,99,114,111,108,108,101,100,95,55,95,49,56,0),true ], [String.fromCharCode(97,99,118,112,95,115,95,54,50,0),false ]]);
       let whatsappM = 5;
         sentryi.set(`${whatsappM}`, whatsappM << (Math.min(Math.abs(sentryi.size), 1)));
      while (malaysiaq.length > 2) {
          let proxyR = 3;
          let n_managerM = String.fromCharCode(117,116,117,114,101,95,48,95,52,54,0);
         malaysiaq += `${malaysiaq.length}`;
         proxyR += proxyR;
         n_managerM = `${proxyR}`;
         break;
      }
         sentryi = new Map([[malaysiaq, malaysiaq.length]]);
      if (5 > malaysiaq.length) {
         whatsappM >>= Math.min(Math.abs(sentryi.size % 3), 2);
      }
      for (let v = 0; v < 2; v++) {
         whatsappM &= sentryi.size % (Math.max(1, 7));
      }
         whatsappM &= malaysiaq.length & whatsappM;
      if (Array.from(sentryi.keys()).includes(`${whatsappM}`)) {
         whatsappM /= Math.max(2, 2);
      }
          let libavformatU = String.fromCharCode(100,105,116,104,101,114,105,110,103,95,117,95,48,0);
          let with_vg = String.fromCharCode(107,95,54,95,101,109,105,116,0);
          let transfero = 3.0;
         whatsappM += 2 ^ with_vg.length;
         libavformatU += `${libavformatU.length}`;
         with_vg = `${libavformatU.length}`;
         transfero /= Math.max(4, parseFloat(`${libavformatU.length}`));
          let libloggerq = String.fromCharCode(111,109,101,103,97,95,104,95,54,51,0);
         malaysiaq = "2";
         libloggerq = `${libloggerq.length}`;
      rewardn = `${(dragX == String.fromCharCode(73,0) ? dragX.length : castZ.size)}`;

    setRefreshing(true);

   let foregroundo = dragX == String.fromCharCode(104,122,107,95,97,99,49,57,0);
   do {
      dragX = "2";
      if (foregroundo) {
         break;
      }
   } while ((5 > dragX.length) && foregroundo);
      castZ = new Map([[`${selectionB}`, 2]]);
   let stept = castZ.size >= 8651961;
   do {
      castZ = new Map([[rewardn, (rewardn.length - (selectionB ? 3 : 4))]]);
      if (stept) {
         break;
      }
   } while (stept && ((castZ.size << (Math.min(Math.abs(3), 5))) == 4));
   for (let c = 0; c < 1; c++) {
      sansJ += crownH;
   }
   if (stylesn) {
       let aboutE: Map<any, any> = new Map([[String.fromCharCode(98,105,116,115,113,112,95,54,95,57,52,0),662], [String.fromCharCode(101,95,49,51,95,108,97,116,105,110,0),299], [String.fromCharCode(117,115,101,114,115,112,97,99,101,95,120,95,49,57,0),300]]);
       let m_centerZ: Map<any, any> = new Map([[String.fromCharCode(115,109,112,116,101,98,97,114,115,95,100,95,52,0),878], [String.fromCharCode(97,95,56,55,95,104,101,97,114,116,115,0),967]]);
       let graphics5 = 3.0;
          let useru: Array<any> = [590, 803, 486];
         aboutE.set(`${useru.length}`, aboutE.size);
         aboutE.set(`${m_centerZ.size}`, m_centerZ.size);
         graphics5 *= parseFloat(`${parseInt(`${graphics5}`) / (Math.max(1, 9))}`);
         graphics5 *= parseFloat(`${parseInt(`${graphics5}`) - 1}`);
       let pressure9 = 0.0;
         pressure9 *= 2;
         graphics5 /= Math.max(3, parseFloat(`${parseInt(`${graphics5}`) & 1}`));
         graphics5 *= parseFloat(`${parseInt(`${graphics5}`) << (Math.min(4, Math.abs(3)))}`);
      for (let i = 0; i < 2; i++) {
         m_centerZ = new Map([[`${m_centerZ.size}`, parseInt(`${pressure9}`) % (Math.max(m_centerZ.size, 7))]]);
      }
      stylesn = 43 < rewardn.length && sansJ < 43;
   }
   if ((sansJ << (Math.min(dragX.length, 2))) > 1 && 4 > (1 << (Math.min(2, dragX.length)))) {
       let policyA: Array<any> = [483, 345, 23];
       let sourceY = String.fromCharCode(101,120,116,101,110,100,101,101,95,111,95,51,55,0);
      for (let u = 0; u < 2; u++) {
         policyA = [sourceY.length | 1];
      }
      while (sourceY.endsWith(`${policyA.length}`)) {
         policyA = [policyA.length / (Math.max(sourceY.length, 6))];
         break;
      }
      if (!sourceY.includes(`${policyA.length}`)) {
         sourceY = `${policyA.length}`;
      }
      while (4 >= (5 + sourceY.length) || 1 >= (5 + sourceY.length)) {
         sourceY += `${sourceY.length}`;
         break;
      }
      if (2 > sourceY.length) {
          let video0: Array<any> = [126, 65];
          let mbbidq = String.fromCharCode(117,95,53,56,95,99,117,116,111,102,102,0);
         policyA.push(3 % (Math.max(8, video0.length)));
         video0 = [mbbidq.length];
         mbbidq += `${(mbbidq == String.fromCharCode(69,0) ? mbbidq.length : mbbidq.length)}`;
      }
         policyA.push((String.fromCharCode(98,0) == sourceY ? sourceY.length : policyA.length));
      sansJ |= (sourceY == String.fromCharCode(116,0) ? sourceY.length : castZ.size);
   }
      crownH <<= Math.min(1, Math.abs(crownH));
    await refreshUserState();

       let minivodT = String.fromCharCode(112,95,49,48,95,111,102,102,115,101,116,0);
       let flipperM = 0;
      let renewm = minivodT.length <= 7438415;
      do {
         minivodT += `${flipperM}`;
         if (renewm) {
            break;
         }
      } while (renewm && ((minivodT.length + flipperM) == 2 && (2 + flipperM) == 1));
      let currentE = 8790020 >= flipperM;
      do {
         flipperM += 3;
         if (currentE) {
            break;
         }
      } while (currentE && (minivodT.length < flipperM));
         flipperM |= (minivodT == String.fromCharCode(119,0) ? minivodT.length : flipperM);
         flipperM <<= Math.min(Math.abs(minivodT.length / 1), 1);
       let tickR = String.fromCharCode(112,95,54,49,95,97,108,105,97,115,0);
      if (2 == tickR.length) {
          let dialogy = String.fromCharCode(97,117,116,104,107,101,121,95,53,95,54,55,0);
          let nalyticsW = 1.0;
         tickR = `${tickR.length ^ parseInt(`${nalyticsW}`)}`;
         dialogy = "3";
         nalyticsW += dialogy.length;
      }
      hejio.set(`${sansJ}`, sansJ);
   let desc6 = selectionB ? !selectionB : selectionB;
   do {
      selectionB = 88 <= crownH;
      if (desc6) {
         break;
      }
   } while ((castZ.size > 3 || 2 > (castZ.size % (Math.max(3, 8)))) && desc6);
      hejio = new Map([[`${castZ.size}`, 3 << (Math.min(4, Math.abs(castZ.size)))]]);
   if (5 < (3 ^ rewardn.length)) {
       let libcxxcomponentsN: Array<any> = [565, 230];
       let stringh: Array<any> = [819, 11];
       let long_4k = 0.0;
       let penaltyv = String.fromCharCode(115,95,52,95,103,101,116,108,97,100,100,114,115,0);
         long_4k += parseFloat(`${1}`);
       let videojsr = false;
       let agreementE = true;
      if (videojsr) {
          let componentregistrye = String.fromCharCode(117,110,99,111,114,114,95,99,95,53,55,0);
          let stations_ = false;
         agreementE = libcxxcomponentsN.includes(long_4k);
         componentregistrye = `${((stations_ ? 1 : 1) ^ 3)}`;
         stations_ = componentregistrye.length <= 86;
      }
      let desc0 = penaltyv.length >= 6180498;
      do {
          let comments = String.fromCharCode(98,95,56,56,95,98,97,115,101,100,0);
          let libjsinspectorJ = 3.0;
          let crownP = String.fromCharCode(97,117,116,104,111,114,95,121,95,54,51,0);
          let libglogK = 3;
         penaltyv = `${parseInt(`${libjsinspectorJ}`) - 1}`;
         comments += `${libglogK ^ 2}`;
         libjsinspectorJ += parseFloat(`${3}`);
         crownP += `${comments.length}`;
         libglogK &= comments.length << (Math.min(Math.abs(2), 2));
         if (desc0) {
            break;
         }
      } while (desc0 && (2 < (4 << (Math.min(3, penaltyv.length))) || 3 < (4 << (Math.min(4, penaltyv.length)))));
         agreementE = penaltyv.length < 65;
         videojsr = (parseFloat(`${libcxxcomponentsN.length}`) - long_4k) < 84.56;
      if (libcxxcomponentsN.length >= 3) {
          let bingn = 3.0;
          let stationse = String.fromCharCode(109,118,101,99,95,118,95,51,48,0);
          let unselectedG: Map<any, any> = new Map([[String.fromCharCode(114,111,98,117,115,116,95,98,95,52,48,0),457], [String.fromCharCode(116,101,108,101,103,114,97,109,95,52,95,55,56,0),116], [String.fromCharCode(103,95,52,57,95,98,101,99,104,0),925]]);
          let assistx = true;
          let gradlewu = String.fromCharCode(107,95,52,49,95,100,101,112,101,110,100,0);
         libcxxcomponentsN = [(parseInt(`${bingn}`) | (agreementE ? 5 : 3))];
         bingn /= Math.max(gradlewu.length, 2);
         stationse += `${gradlewu.length | 3}`;
         unselectedG = new Map([[`${unselectedG.size}`, ((assistx ? 5 : 2) / (Math.max(1, 10)))]]);
      }
          let privacy7 = 5.0;
          let libhermesE: Array<any> = [567, 146];
         videojsr = ((penaltyv.length >> (Math.min(1, Math.abs((videojsr ? penaltyv.length : 22))))) >= 22);
         privacy7 += parseFloat(`${parseInt(`${privacy7}`) << (Math.min(2, Math.abs(3)))}`);
         libhermesE = [libhermesE.length | parseInt(`${privacy7}`)];
      while (stringh.length >= 2) {
          let libavformatg = String.fromCharCode(103,114,111,117,110,100,95,118,95,54,53,0);
          let product7 = String.fromCharCode(121,95,55,53,95,99,114,101,97,116,101,0);
         agreementE = !videojsr;
         libavformatg = `${product7.length}`;
         product7 += `${libavformatg.length << (Math.min(1, product7.length))}`;
         break;
      }
         stringh.push(libcxxcomponentsN.length % 2);
         penaltyv = `${parseInt(`${long_4k}`) / 3}`;
      let plus2 = videojsr ? !videojsr : videojsr;
      do {
         videojsr = penaltyv == String.fromCharCode(83,0);
         if (plus2) {
            break;
         }
      } while (plus2 && ((4 * stringh.length) > 1 || stringh.length > 4));
      crownH /= Math.max(1, dragX.length >> (Math.min(1, Math.abs(sansJ))));
   }
   if ((crownH | dragX.length) <= 2) {
      crownH += dragX.length - 2;
   }
   if (2 < (2 & castZ.size) || castZ.size < 2) {
      stylesn = 81 >= rewardn.length;
   }
   for (let i = 0; i < 3; i++) {
       let libjsix = true;
       let huaweiA = 1.0;
       let starq = String.fromCharCode(120,95,52,53,0);
       let showG: Map<any, any> = new Map([[String.fromCharCode(111,95,55,56,95,110,101,119,115,108,101,116,116,101,114,0),String.fromCharCode(99,95,57,57,95,99,111,110,110,101,99,116,105,111,110,99,98,0)], [String.fromCharCode(117,110,97,118,97,105,108,97,98,101,95,117,95,54,56,0),String.fromCharCode(109,97,99,104,95,104,95,54,50,0)], [String.fromCharCode(122,95,56,50,95,108,97,121,111,117,116,115,0),String.fromCharCode(119,95,56,57,95,112,105,99,116,121,112,101,0)]]);
      while ((5.13 + huaweiA) < 1.57) {
         starq = `${(parseInt(`${huaweiA}`) % (Math.max(7, (libjsix ? 3 : 1))))}`;
         break;
      }
         starq += `${showG.size}`;
         huaweiA += parseFloat(`${3}`);
      let zhuboa = String.fromCharCode(119,108,115,53,114,97,52,50,0) == starq;
      do {
         starq = `${(starq == String.fromCharCode(81,0) ? starq.length : showG.size)}`;
         if (zhuboa) {
            break;
         }
      } while (zhuboa && ((starq.length / (Math.max(2, 6))) < 2 || (starq.length % 2) < 3));
      let whistlee = libjsix ? !libjsix : libjsix;
      do {
         libjsix = !libjsix;
         if (whistlee) {
            break;
         }
      } while (whistlee && (libjsix && 4 <= starq.length));
      while (!starq.startsWith(`${libjsix}`)) {
         starq = `${parseInt(`${huaweiA}`) | 1}`;
         break;
      }
         starq += `${starq.length}`;
       let confirmationK = 3;
       let pause6 = 3;
         starq += `${pause6 / (Math.max(1, 10))}`;
         showG = new Map([[`${showG.size}`, 3 - showG.size]]);
         starq += `${(parseInt(`${huaweiA}`) / (Math.max(7, (libjsix ? 5 : 1))))}`;
         starq = `${starq.length / (Math.max(1, 3))}`;
      selectionB = !stylesn;
   }
    setRefreshing(false);
    scrollRef.current.scrollTo({ index: 0, animated: false });
  };

  const refreshUserState = async () => {
       let termsH = String.fromCharCode(118,97,116,97,114,95,50,95,56,54,0);
    let encryptl = 5;
    let downj: Map<any, any> = new Map([[String.fromCharCode(112,95,50,50,95,115,105,108,107,0),882], [String.fromCharCode(105,110,105,116,105,97,108,108,121,95,49,95,54,48,0),322]]);
    let directs = String.fromCharCode(118,95,54,49,95,97,116,114,0);
    let vietnams: Map<any, any> = new Map([[String.fromCharCode(117,95,56,95,102,111,114,119,97,114,100,105,110,103,0),false ], [String.fromCharCode(115,111,114,116,101,114,95,115,95,49,50,0),true ]]);
    let armvaY = 5.0;
    let ajaxf = 4.0;
    let commonG = String.fromCharCode(116,95,57,48,95,105,110,100,101,120,105,110,103,0);
    let y_titleO = 1.0;
    let dataT = 3;
    let currentk = String.fromCharCode(116,95,50,56,95,115,117,110,114,97,115,116,0);
   for (let g = 0; g < 1; g++) {
      armvaY /= Math.max(termsH.length * encryptl, 1);
   }
   for (let x = 0; x < 2; x++) {
      termsH += `${vietnams.size << (Math.min(2, Math.abs(parseInt(`${ajaxf}`))))}`;
   }
       let twittery = String.fromCharCode(114,95,54,51,95,99,114,101,97,116,111,114,115,0);
       let mbjscommon_ = String.fromCharCode(116,114,97,110,115,108,97,116,101,95,107,95,50,55,0);
       let ballV = 5;
          let xvodQ = 0;
          let klevinN = 4.0;
          let rewindA = false;
         twittery += `${twittery.length}`;
         xvodQ /= Math.max(2, xvodQ);
         klevinN *= xvodQ >> (Math.min(Math.abs(parseInt(`${klevinN}`)), 1));
         rewindA = xvodQ >= 41;
         mbjscommon_ = `${twittery.length}`;
      for (let a = 0; a < 3; a++) {
         twittery += `${twittery.length}`;
      }
      for (let b = 0; b < 2; b++) {
         mbjscommon_ += `${(String.fromCharCode(85,0) == mbjscommon_ ? mbjscommon_.length : twittery.length)}`;
      }
      for (let c = 0; c < 3; c++) {
          let moviesP = false;
         twittery += `${(String.fromCharCode(76,0) == mbjscommon_ ? ballV : mbjscommon_.length)}`;
         moviesP = moviesP || moviesP;
      }
      if (mbjscommon_.endsWith(`${ballV}`)) {
         ballV <<= Math.min(Math.abs((twittery == String.fromCharCode(106,0) ? twittery.length : mbjscommon_.length)), 5);
      }
         twittery += `${ballV % (Math.max(twittery.length, 5))}`;
      let animations5 = mbjscommon_.length <= 7565756;
      do {
         mbjscommon_ += `${(mbjscommon_ == String.fromCharCode(50,0) ? mbjscommon_.length : ballV)}`;
         if (animations5) {
            break;
         }
      } while (animations5 && (mbjscommon_.length < twittery.length));
         twittery += `${3 >> (Math.min(1, mbjscommon_.length))}`;
      directs = `${commonG.length / (Math.max(mbjscommon_.length, 4))}`;
   if ((2 << (Math.min(4, commonG.length))) > 4 || 4.69 > (commonG.length + ajaxf)) {
      commonG += `${downj.size}`;
   }
      termsH += `${downj.size - 3}`;

    const result = await yys_GesturesConst.getUserDetails();

   while ((commonG.length + 4) == 2) {
      commonG = "2";
      break;
   }
       let memberx = 2;
       let mbsplash_ = String.fromCharCode(115,101,116,116,101,114,95,105,95,48,0);
       let logoutS = 3.0;
       let uimanagerS = String.fromCharCode(114,101,102,100,117,112,101,95,109,95,53,54,0);
       let redirectI = String.fromCharCode(117,95,52,49,95,97,100,100,120,0);
      let const_lX = memberx >= 8915078;
      do {
         memberx &= 3 >> (Math.min(5, Math.abs(memberx)));
         if (const_lX) {
            break;
         }
      } while (const_lX && (5 > mbsplash_.length));
      let dycreatorn = 5992015 >= memberx;
      do {
         memberx >>= Math.min(Math.abs(3 + mbsplash_.length), 5);
         if (dycreatorn) {
            break;
         }
      } while ((1 > (memberx << (Math.min(Math.abs(4), 3))) && 4 > (uimanagerS.length << (Math.min(2, Math.abs(memberx))))) && dycreatorn);
      if ((mbsplash_.length * 4) < 2 || 4 < (mbsplash_.length * memberx)) {
          let borderlessk = 3;
          let roundl = false;
         mbsplash_ += `${uimanagerS.length | 2}`;
         borderlessk &= 1 / (Math.max(borderlessk, 3));
         roundl = 57 <= borderlessk;
      }
      if (redirectI.endsWith(mbsplash_)) {
          let submitu = String.fromCharCode(105,95,50,50,95,98,101,110,101,97,116,104,0);
          let whatsappY = 1;
          let readA = 5.0;
         mbsplash_ = "2";
         submitu += `${submitu.length - 2}`;
         whatsappY &= parseInt(`${readA}`) | whatsappY;
         readA -= parseFloat(`${whatsappY * submitu.length}`);
      }
      while (2 < uimanagerS.length) {
          let moviesx: Array<any> = [String.fromCharCode(115,112,101,101,120,95,99,95,49,52,0), String.fromCharCode(99,114,101,97,116,111,114,95,113,95,52,49,0), String.fromCharCode(117,100,112,108,105,116,101,95,56,95,57,49,0)];
          let popupg = 5;
          let agreementE = 1;
         uimanagerS += `${uimanagerS.length}`;
         moviesx = [popupg - 3];
         popupg <<= Math.min(2, moviesx.length);
         agreementE /= Math.max(4, 1 - moviesx.length);
         break;
      }
          let googlej = String.fromCharCode(115,95,53,54,95,99,111,110,115,116,97,110,116,0);
          let runtimeschedulerx: Array<any> = [String.fromCharCode(100,98,105,115,95,116,95,51,0), String.fromCharCode(113,95,56,49,95,112,116,114,109,97,112,0)];
         uimanagerS += `${(uimanagerS == String.fromCharCode(118,0) ? uimanagerS.length : mbsplash_.length)}`;
         googlej = `${(googlej == String.fromCharCode(70,0) ? googlej.length : runtimeschedulerx.length)}`;
         runtimeschedulerx.push(runtimeschedulerx.length);
         memberx |= mbsplash_.length;
      if ((3.82 - logoutS) > 4.94) {
          let rightO: Array<any> = [523, 388];
          let dangera = String.fromCharCode(99,111,114,101,105,109,97,103,101,95,120,95,51,57,0);
         memberx += mbsplash_.length ^ 2;
         rightO = [rightO.length ^ 2];
         dangera = `${2 ^ dangera.length}`;
      }
      downj = new Map([[commonG, 1 << (Math.min(4, commonG.length))]]);
      downj.set(`${encryptl}`, encryptl);
      armvaY /= Math.max(1, 4);
      directs = "1";
    if (result == null) {

   let playercommonS = 8686811.0 >= armvaY;
   do {
      armvaY /= Math.max(2, termsH.length >> (Math.min(2, Math.abs(parseInt(`${ajaxf}`)))));
      if (playercommonS) {
         break;
      }
   } while (playercommonS && (2.68 >= (5.76 - armvaY) && (dataT - armvaY) >= 5.76));
   if ((y_titleO / 3.0) == 1.31 || (parseInt(`${y_titleO}`) / 1) == 5) {
      y_titleO -= 2 >> (Math.min(1, directs.length));
   }
   while (2 < (termsH.length / (Math.max(2, 7))) || 1.94 < (ajaxf - 3.36)) {
      ajaxf -= dataT % 3;
      break;
   }
      termsH += `${(String.fromCharCode(76,0) == commonG ? commonG.length : vietnams.size)}`;
   while ((3 ^ dataT) < 4) {
      encryptl <<= Math.min(1, Math.abs(2 << (Math.min(5, Math.abs(parseInt(`${y_titleO}`))))));
      break;
   }
      return;
    }

    await dispatch(updateUserAuth(result));

       let specS = String.fromCharCode(110,101,115,116,101,100,95,104,95,53,57,0);
      if (specS == String.fromCharCode(85,0) && 5 >= specS.length) {
         specS += `${(String.fromCharCode(82,0) == specS ? specS.length : specS.length)}`;
      }
      if (specS != String.fromCharCode(89,0)) {
         specS = `${specS.length << (Math.min(4, specS.length))}`;
      }
          let bellM = 1;
          let tooltipsa = 5;
         specS = `${specS.length}`;
         bellM &= tooltipsa / (Math.max(bellM, 5));
         tooltipsa *= 2 * bellM;
      encryptl <<= Math.min(Math.abs(2), 5);
      armvaY *= 2;
      downj.set(`${directs}`, 3 + directs.length);
       let cornere = String.fromCharCode(100,101,99,105,109,97,116,111,114,95,117,95,57,57,0);
       let streamingS = String.fromCharCode(107,101,121,105,100,95,121,95,56,49,0);
      if (cornere != streamingS) {
          let episodesD: Map<any, any> = new Map([[String.fromCharCode(99,104,97,114,116,115,95,102,95,53,50,0),String.fromCharCode(99,95,55,52,95,115,108,101,101,112,0)], [String.fromCharCode(112,95,50,95,104,97,115,104,97,98,108,101,0),String.fromCharCode(115,111,110,105,99,95,111,95,52,0)]]);
          let libturbomodulejsijnil = String.fromCharCode(112,97,110,110,105,110,103,95,99,95,54,56,0);
          let emptyw = 3.0;
         streamingS += `${parseInt(`${emptyw}`)}`;
         episodesD.set(libturbomodulejsijnil, (String.fromCharCode(88,0) == libturbomodulejsijnil ? episodesD.size : libturbomodulejsijnil.length));
         emptyw -= episodesD.size / (Math.max(1, 5));
      }
         cornere += `${(streamingS == String.fromCharCode(65,0) ? cornere.length : streamingS.length)}`;
         cornere = "1";
      let libsgcoreD = cornere.length <= 6393576;
      do {
         cornere = `${streamingS.length}`;
         if (libsgcoreD) {
            break;
         }
      } while ((cornere.length > 2 && streamingS != String.fromCharCode(84,0)) && libsgcoreD);
         streamingS = `${streamingS.length}`;
         cornere += `${(cornere == String.fromCharCode(89,0) ? streamingS.length : cornere.length)}`;
      y_titleO += vietnams.size;
       let forwardD = String.fromCharCode(114,111,111,109,95,115,95,52,53,0);
       let package_bm = String.fromCharCode(111,112,116,105,109,105,122,101,95,106,95,50,53,0);
       let libavutilD = String.fromCharCode(115,95,49,56,0);
      if (libavutilD == String.fromCharCode(87,0)) {
          let mbridgeB = 5.0;
          let backgroundZ = true;
          let libreanimated2 = 5.0;
          let stationY = String.fromCharCode(99,95,49,95,101,113,117,105,118,97,108,101,110,116,0);
          let bottoma = 0;
         package_bm += `${3 ^ package_bm.length}`;
         mbridgeB -= parseFloat(`${bottoma & parseInt(`${mbridgeB}`)}`);
         backgroundZ = mbridgeB > 51.39;
         libreanimated2 += 1;
         stationY += "1";
         bottoma %= Math.max(((backgroundZ ? 2 : 3) / (Math.max(parseInt(`${mbridgeB}`), 1))), 1);
      }
         libavutilD += "2";
      y_titleO += parseInt(`${armvaY}`) + 3;
      forwardD = `${forwardD.length % 2}`;
    return;
  };

  const checkConnection = async () => {
       let notificationE = 4.0;
    let loading6 = String.fromCharCode(100,95,54,48,95,102,111,114,119,97,114,100,115,0);
    let libjsijniprofilerV = 4;
    let hoverP = 0.0;
    let targete: Array<any> = [167, 168];
    let untickl = String.fromCharCode(115,101,114,105,102,95,118,95,57,49,0);
    let episodesa = 0.0;
    let h_titlem = 4.0;
    let banner8 = 3;
    let gnewarchdefaultsZ = 1;
    let morep = 2.0;
    let full_: Map<any, any> = new Map([[String.fromCharCode(122,95,57,51,95,99,104,97,114,103,101,0),76], [String.fromCharCode(118,95,54,53,95,102,114,101,113,117,101,110,99,121,0),16]]);
    let mbsplash2 = String.fromCharCode(109,95,49,53,95,115,119,105,116,99,104,98,97,115,101,0);
    let statistics6 = String.fromCharCode(107,95,57,55,95,115,121,110,99,104,114,111,110,105,115,101,100,0);
    let libreanimatedL = 2.0;
   while ((hoverP / 1.63) == 1.97 && 4.40 == (hoverP / 1.63)) {
      full_ = new Map([[`${targete.length}`, 1 & targete.length]]);
      break;
   }
      hoverP -= gnewarchdefaultsZ;
       let sortg = String.fromCharCode(115,112,104,101,114,105,99,97,108,95,105,95,53,48,0);
       let savet = String.fromCharCode(115,121,115,116,101,109,95,121,95,50,52,0);
       let reducerd = String.fromCharCode(109,97,116,99,104,101,115,95,100,95,53,48,0);
       let scoree: Array<any> = [String.fromCharCode(108,111,103,116,97,110,95,54,95,56,50,0), String.fromCharCode(117,115,101,97,103,101,95,112,95,56,0), String.fromCharCode(100,101,112,114,101,99,97,116,101,100,95,115,95,50,54,0)];
          let shirtv: Array<any> = [414, 251];
          let fully = String.fromCharCode(110,95,52,51,95,114,111,111,116,0);
         scoree = [1];
         shirtv = [(fully == String.fromCharCode(67,0) ? fully.length : shirtv.length)];
      if (reducerd == savet) {
         savet = `${1 + reducerd.length}`;
      }
          let privilegeO = 4;
          let windU = 1.0;
          let minivodx = 2;
         reducerd = "1";
         privilegeO -= parseInt(`${windU}`) % (Math.max(7, privilegeO));
         windU *= parseFloat(`${1 | privilegeO}`);
         minivodx /= Math.max(1, 5);
         savet += `${2 ^ sortg.length}`;
      if (savet != reducerd) {
          let schedulerE = 4.0;
          let reducer8 = String.fromCharCode(114,111,119,105,100,95,100,95,51,55,0);
         reducerd += `${savet.length}`;
         schedulerE += (parseFloat(`${String.fromCharCode(111,0) == reducer8 ? reducer8.length : parseInt(`${schedulerE}`)}`));
      }
      if (sortg.startsWith(reducerd)) {
         sortg = `${1 - savet.length}`;
      }
         scoree.push(sortg.length);
      if (reducerd == sortg) {
          let temp2 = String.fromCharCode(112,97,115,116,101,100,95,107,95,51,48,0);
          let volumeU = 4.0;
          let ball2 = 4.0;
         sortg = `${sortg.length}`;
         temp2 += "1";
         volumeU /= Math.max(5, parseFloat(`${2 + parseInt(`${ball2}`)}`));
         ball2 -= parseFloat(`${parseInt(`${volumeU}`)}`);
      }
      gnewarchdefaultsZ ^= 1;
      notificationE *= 2 >> (Math.min(4, loading6.length));
      full_ = new Map([[`${full_.size}`, full_.size]]);
   for (let g = 0; g < 3; g++) {
      full_.set(untickl, targete.length);
   }
   for (let o = 0; o < 2; o++) {
       let cancel4 = 0.0;
       let qaagw = 5.0;
      if (qaagw > 4.98) {
         cancel4 -= parseInt(`${qaagw}`) / 3;
      }
       let latnl = String.fromCharCode(111,110,101,95,56,95,52,48,0);
       let default_x_d = String.fromCharCode(121,95,52,95,105,115,116,115,0);
          let matches1 = String.fromCharCode(121,95,54,57,95,116,114,105,101,115,0);
         qaagw -= 2 - default_x_d.length;
         matches1 += `${matches1.length}`;
          let vietnam3: Array<any> = [String.fromCharCode(104,119,97,101,115,95,119,95,49,49,0), String.fromCharCode(98,108,111,99,107,115,99,97,110,95,97,95,56,48,0)];
          let upgradeB = 4;
          let libcxxcomponentsW = 5;
         default_x_d += `${2 + libcxxcomponentsW}`;
         vietnam3 = [upgradeB];
         upgradeB |= upgradeB;
         libcxxcomponentsW <<= Math.min(Math.abs(upgradeB), 2);
         default_x_d = `${parseInt(`${cancel4}`)}`;
         latnl = `${(String.fromCharCode(103,0) == default_x_d ? parseInt(`${cancel4}`) : default_x_d.length)}`;
      full_.set(`${notificationE}`, parseInt(`${notificationE}`));
   }
       let gdtadv7 = String.fromCharCode(109,95,56,54,95,102,101,116,99,104,105,110,103,0);
       let libavutilN = 3;
       let acceptedD = String.fromCharCode(109,95,54,51,95,102,105,108,116,101,114,115,0);
       let librrcn = String.fromCharCode(102,95,57,54,95,112,114,111,116,111,0);
          let lightW = 3.0;
          let videocommonD = String.fromCharCode(117,95,56,50,95,103,111,100,101,112,115,0);
         acceptedD += `${acceptedD.length}`;
         lightW -= (parseFloat(`${String.fromCharCode(98,0) == videocommonD ? videocommonD.length : parseInt(`${lightW}`)}`));
         gdtadv7 += `${acceptedD.length}`;
      if (acceptedD.length < gdtadv7.length) {
          let sendy = String.fromCharCode(99,111,109,112,114,101,115,115,101,100,95,111,95,53,57,0);
          let goalT = 3;
          let hooksr: Map<any, any> = new Map([[String.fromCharCode(111,95,53,51,95,116,101,114,109,105,110,97,116,101,0),String.fromCharCode(115,101,114,105,97,108,105,122,97,116,105,111,110,95,104,95,57,48,0)], [String.fromCharCode(108,95,49,55,95,98,101,105,110,103,0),String.fromCharCode(104,115,99,97,108,101,114,95,114,95,55,57,0)], [String.fromCharCode(110,95,53,54,95,102,105,114,101,98,97,115,101,0),String.fromCharCode(112,104,112,95,103,95,49,49,0)]]);
          let textlayoutmanagerY = 2.0;
          let libavfilterP = 0;
         gdtadv7 = `${3 / (Math.max(6, goalT))}`;
         sendy = `${hooksr.size}`;
         goalT <<= Math.min(Math.abs(1 >> (Math.min(Math.abs(libavfilterP), 1))), 2);
         hooksr = new Map([[`${hooksr.size}`, 3 - sendy.length]]);
         textlayoutmanagerY *= parseFloat(`${libavfilterP / (Math.max(parseInt(`${textlayoutmanagerY}`), 3))}`);
      }
         acceptedD = `${(String.fromCharCode(117,0) == acceptedD ? acceptedD.length : libavutilN)}`;
         libavutilN &= 3 - librrcn.length;
      h_titlem -= parseFloat(`${parseInt(`${h_titlem}`) / 1}`);

    const state = await NetInfo.fetch();

      gnewarchdefaultsZ -= 3 ^ parseInt(`${episodesa}`);
   if (loading6.length >= parseInt(`${morep}`)) {
      loading6 += `${banner8}`;
   }
       let schedulerv = String.fromCharCode(115,116,97,108,108,95,104,95,54,53,0);
       let target4 = String.fromCharCode(110,98,112,112,95,110,95,49,0);
         schedulerv += `${schedulerv.length}`;
         schedulerv += `${(target4 == String.fromCharCode(65,0) ? schedulerv.length : target4.length)}`;
          let user6: Array<any> = [String.fromCharCode(97,117,100,105,116,105,110,103,95,110,95,54,48,0), String.fromCharCode(100,113,117,111,116,101,95,115,95,57,54,0)];
          let libpangleflipped1 = 1.0;
         target4 += `${schedulerv.length + 2}`;
         user6 = [1 << (Math.min(Math.abs(parseInt(`${libpangleflipped1}`)), 3))];
         libpangleflipped1 += 2;
       let libreactperfloggerjniE = String.fromCharCode(103,95,53,49,95,115,97,100,100,0);
         schedulerv = `${target4.length}`;
      let line6 = libreactperfloggerjniE.length >= 7739268;
      do {
         libreactperfloggerjniE += `${2 << (Math.min(3, schedulerv.length))}`;
         if (line6) {
            break;
         }
      } while ((1 == libreactperfloggerjniE.length) && line6);
      h_titlem *= parseFloat(`${2}`);
      banner8 /= Math.max(1, libjsijniprofilerV % 3);
   if ((loading6.length << (Math.min(Math.abs(4), 4))) == 2 && (4 << (Math.min(1, loading6.length))) == 1) {
       let sheet8 = 2;
       let shrinkg = String.fromCharCode(99,102,116,115,116,95,121,95,54,52,0);
          let sporti = String.fromCharCode(121,95,49,50,95,102,114,97,103,109,101,110,116,0);
         sheet8 *= 1;
         sporti += `${sporti.length}`;
          let entryQ = String.fromCharCode(110,95,50,51,95,114,101,118,101,114,115,101,0);
         shrinkg += `${2 - shrinkg.length}`;
         entryQ = `${1 * entryQ.length}`;
      for (let i = 0; i < 2; i++) {
         sheet8 >>= Math.min(2, Math.abs((shrinkg == String.fromCharCode(109,0) ? sheet8 : shrinkg.length)));
      }
      for (let b = 0; b < 3; b++) {
         shrinkg += `${(String.fromCharCode(50,0) == shrinkg ? shrinkg.length : sheet8)}`;
      }
          let bufferh: Map<any, any> = new Map([[String.fromCharCode(117,95,53,52,95,115,117,98,112,97,121,108,111,97,100,0),196], [String.fromCharCode(100,95,55,51,95,115,99,101,110,101,0),751]]);
          let videojs_ = 3;
         shrinkg += `${sheet8 & 3}`;
         bufferh.set(`${videojs_}`, bufferh.size * videojs_);
          let refreshF = 1.0;
         sheet8 *= 2;
         refreshF -= 1;
      loading6 += `${(String.fromCharCode(83,0) == shrinkg ? parseInt(`${morep}`) : shrinkg.length)}`;
   }
       let nativemoduleY = String.fromCharCode(116,116,116,95,97,95,57,49,0);
       let gray8 = 3;
       let libyogas = false;
      let hejiO = libyogas ? !libyogas : libyogas;
      do {
         libyogas = nativemoduleY.length > gray8;
         if (hejiO) {
            break;
         }
      } while (hejiO && (2 >= nativemoduleY.length && libyogas));
          let privilegep = 5.0;
         gray8 &= (gray8 - (libyogas ? 4 : 5));
         privilegep *= parseFloat(`${parseInt(`${privilegep}`)}`);
      while (nativemoduleY.startsWith(`${gray8}`)) {
         gray8 += gray8 * 3;
         break;
      }
      for (let i = 0; i < 1; i++) {
          let detailI: Map<any, any> = new Map([[String.fromCharCode(113,95,54,53,95,100,109,105,120,0),626], [String.fromCharCode(106,95,51,48,95,108,97,118,102,117,116,105,108,115,0),552], [String.fromCharCode(114,95,57,49,95,116,111,107,101,104,0),194]]);
         nativemoduleY = `${gray8}`;
         detailI.set(`${detailI.size}`, detailI.size);
      }
      if (nativemoduleY.startsWith(`${libyogas}`)) {
         libyogas = (gray8 | nativemoduleY.length) == 73;
      }
      let mbjscommonM = libyogas ? !libyogas : libyogas;
      do {
          let animationg = String.fromCharCode(122,95,49,57,95,102,105,120,116,117,114,101,0);
         libyogas = 70 <= gray8;
         animationg += `${animationg.length >> (Math.min(Math.abs(1), 1))}`;
         if (mbjscommonM) {
            break;
         }
      } while ((!libyogas) && mbjscommonM);
         gray8 |= ((libyogas ? 3 : 4) * gray8);
          let grayX = String.fromCharCode(109,112,101,103,118,105,100,101,111,100,97,116,97,95,98,95,54,54,0);
         gray8 /= Math.max(3, (nativemoduleY == String.fromCharCode(89,0) ? nativemoduleY.length : grayX.length));
      let r_centerT = nativemoduleY == String.fromCharCode(113,105,121,100,54,114,106,55,97,119,0);
      do {
          let short_yr_ = String.fromCharCode(98,101,99,111,109,101,95,50,95,57,55,0);
          let paginationj: Array<any> = [80, 513];
         nativemoduleY += `${(nativemoduleY == String.fromCharCode(52,0) ? short_yr_.length : nativemoduleY.length)}`;
         short_yr_ += "1";
         paginationj.push(3);
         if (r_centerT) {
            break;
         }
      } while (r_centerT && ((gray8 % (Math.max(nativemoduleY.length, 8))) <= 2));
      morep -= parseFloat(`${3 - parseInt(`${morep}`)}`);
   for (let f = 0; f < 2; f++) {
      libjsijniprofilerV -= parseInt(`${h_titlem}`) | 2;
   }
   while (notificationE > untickl.length) {
      untickl += `${parseInt(`${notificationE}`) >> (Math.min(4, Math.abs(2)))}`;
      break;
   }
    const offline = !(state.isConnected && state.isInternetReachable);

   let final_is = 7392371.0 >= morep;
   do {
      morep /= Math.max(4, parseFloat(`${parseInt(`${hoverP}`)}`));
      if (final_is) {
         break;
      }
   } while (final_is && (!untickl.endsWith(`${morep}`)));
   if (3.52 <= (h_titlem + 1.77) && (1.77 + morep) <= 1.3) {
      morep /= Math.max(1, parseFloat(`${targete.length ^ 1}`));
   }
      morep -= parseFloat(`${full_.size / (Math.max(3, libjsijniprofilerV))}`);
      libjsijniprofilerV |= untickl.length;
   let buttonq = 8946277 >= loading6.length;
   do {
      loading6 += `${gnewarchdefaultsZ * 2}`;
      if (buttonq) {
         break;
      }
   } while (((loading6.length - full_.size) <= 1) && buttonq);
      h_titlem *= parseFloat(`${1}`);
       let kickJ: Array<any> = [999, 203, 145];
       let v_managerH = 2.0;
      let mbjscommonD = 6346787 <= kickJ.length;
      do {
         kickJ = [3 % (Math.max(6, parseInt(`${v_managerH}`)))];
         if (mbjscommonD) {
            break;
         }
      } while ((4.3 > (kickJ.length - v_managerH)) && mbjscommonD);
         v_managerH *= parseInt(`${v_managerH}`);
      while (v_managerH <= 4.18) {
          let xnewinterstitialx = String.fromCharCode(112,95,55,54,95,98,97,99,107,103,114,111,117,110,100,115,0);
         v_managerH -= parseInt(`${v_managerH}`) * 3;
         xnewinterstitialx = `${xnewinterstitialx.length * xnewinterstitialx.length}`;
         break;
      }
      let sharea = 7820587 >= kickJ.length;
      do {
         kickJ.push(kickJ.length ^ 1);
         if (sharea) {
            break;
         }
      } while ((1 == (parseInt(`${v_managerH}`) + kickJ.length) && 1 == (kickJ.length + parseInt(`${v_managerH}`))) && sharea);
      for (let n = 0; n < 1; n++) {
          let u_imageS = String.fromCharCode(98,95,57,51,95,99,97,110,99,101,108,108,97,116,105,111,110,0);
          let bingj = true;
          let downloadingM = 5;
         kickJ.push(1 + u_imageS.length);
         u_imageS = `${3 ^ downloadingM}`;
         bingj = bingj || downloadingM > 50;
      }
         v_managerH -= kickJ.length | parseInt(`${v_managerH}`);
      untickl += "2";
      h_titlem /= Math.max(3, parseFloat(`${parseInt(`${morep}`) ^ 1}`));
    setIsOffline(offline);

   for (let g = 0; g < 1; g++) {
      banner8 -= parseInt(`${episodesa}`);
   }
      hoverP /= Math.max(2, parseInt(`${hoverP}`) + libjsijniprofilerV);
      episodesa /= Math.max(1, 3 / (Math.max(parseInt(`${episodesa}`), 10)));
       let selectionr = String.fromCharCode(108,95,53,50,95,108,105,109,105,116,97,116,105,111,110,0);
       let forwardy: Map<any, any> = new Map([[String.fromCharCode(114,101,115,117,108,116,95,50,95,53,52,0),808], [String.fromCharCode(110,95,50,52,95,104,111,117,114,115,0),666]]);
      for (let d = 0; d < 2; d++) {
         selectionr = `${1 & forwardy.size}`;
      }
         forwardy = new Map([[`${forwardy.size}`, 1 - forwardy.size]]);
         selectionr += `${2 * selectionr.length}`;
      for (let g = 0; g < 2; g++) {
         selectionr = `${forwardy.size}`;
      }
          let sheetT: Array<any> = [714, 491, 167];
          let canvasl = String.fromCharCode(115,95,49,54,95,117,110,112,114,101,109,117,108,116,105,112,108,121,111,102,102,115,101,116,0);
         forwardy.set(canvasl, 2);
         sheetT.push(sheetT.length);
         canvasl += `${sheetT.length}`;
         forwardy.set(selectionr, (selectionr == String.fromCharCode(65,0) ? forwardy.size : selectionr.length));
      hoverP /= Math.max(3, targete.length);
   while (untickl == loading6) {
      loading6 = `${parseInt(`${morep}`) | 3}`;
      break;
   }
   if (1 > (statistics6.length << (Math.min(Math.abs(5), 3))) || 2.1 > (h_titlem / (Math.max(5, parseFloat(`${statistics6.length}`))))) {
       let layoutO = String.fromCharCode(112,95,55,57,95,111,109,105,116,116,105,110,103,0);
      while (layoutO.length >= layoutO.length) {
          let connectionW = 1.0;
         layoutO = `${parseInt(`${connectionW}`) % (Math.max(3, 4))}`;
         break;
      }
      if (!layoutO.endsWith(layoutO)) {
          let armvaE = 0.0;
          let malaysiad = true;
         layoutO = `${parseInt(`${armvaE}`) ^ layoutO.length}`;
         armvaE += 1;
      }
         layoutO += `${layoutO.length}`;
      statistics6 += `${parseInt(`${episodesa}`)}`;
   }
      statistics6 = "2";
   while ((3 | loading6.length) == 5 || (notificationE * loading6.length) == 4.97) {
      notificationE *= untickl.length;
      break;
   }
    if (!offline) {

      banner8 += 2 * banner8;
   let mimol = 7026016 <= libjsijniprofilerV;
   do {
       let handlerf = 5.0;
       let containerz = 1.0;
       let roomR = String.fromCharCode(112,95,56,56,95,106,109,108,105,115,116,0);
       let philippinesW = String.fromCharCode(106,95,53,53,95,116,105,110,116,101,114,108,97,99,101,0);
       let ksade = String.fromCharCode(122,95,52,57,95,105,110,112,117,116,120,0);
         ksade += `${3 | ksade.length}`;
          let stationh = 3.0;
          let auto_gP: Map<any, any> = new Map([[String.fromCharCode(99,101,108,108,115,95,119,95,57,53,0),251], [String.fromCharCode(116,95,50,95,109,97,116,101,114,105,97,108,0),471]]);
          let iconX = String.fromCharCode(99,114,101,97,116,111,114,115,95,113,95,57,56,0);
         containerz -= parseFloat(`${parseInt(`${containerz}`) * parseInt(`${stationh}`)}`);
         stationh += parseFloat(`${auto_gP.size}`);
         auto_gP = new Map([[`${auto_gP.size}`, (iconX == String.fromCharCode(69,0) ? iconX.length : auto_gP.size)]]);
         containerz += parseFloat(`${roomR.length * parseInt(`${containerz}`)}`);
      for (let b = 0; b < 1; b++) {
          let libfbjniU = String.fromCharCode(101,120,115,115,95,49,95,53,55,0);
          let unreadd: Map<any, any> = new Map([[String.fromCharCode(100,101,99,111,100,101,114,95,110,95,53,52,0),335], [String.fromCharCode(109,95,57,57,95,109,117,108,114,101,115,0),546]]);
          let sell2 = String.fromCharCode(99,108,97,122,122,95,113,95,50,49,0);
         philippinesW = `${sell2.length << (Math.min(libfbjniU.length, 2))}`;
         libfbjniU = `${unreadd.size << (Math.min(5, Math.abs(unreadd.size)))}`;
      }
      while (1.2 >= (containerz + handlerf) && 2.0 >= (1.2 + handlerf)) {
         containerz += parseFloat(`${1}`);
         break;
      }
      while (handlerf > 4.31) {
         ksade = `${1 >> (Math.min(4, Math.abs(parseInt(`${handlerf}`))))}`;
         break;
      }
      if (1.47 <= (containerz - handlerf)) {
         containerz *= parseFloat(`${parseInt(`${handlerf}`) / (Math.max(1, ksade.length))}`);
      }
         roomR = `${(String.fromCharCode(90,0) == philippinesW ? philippinesW.length : roomR.length)}`;
      while (ksade.endsWith(`${handlerf}`)) {
         ksade += `${roomR.length}`;
         break;
      }
      let invitee = 5603265.0 >= handlerf;
      do {
          let windy = String.fromCharCode(116,105,109,101,115,116,97,109,112,101,100,95,106,95,53,54,0);
          let infoz: Array<any> = [175, 458];
         handlerf += parseFloat(`${3}`);
         windy = `${1 << (Math.min(3, infoz.length))}`;
         infoz = [2 * infoz.length];
         if (invitee) {
            break;
         }
      } while ((philippinesW.length > 1) && invitee);
      let gemfile1 = handlerf <= 5603687.0;
      do {
         handlerf -= parseFloat(`${philippinesW.length | parseInt(`${handlerf}`)}`);
         if (gemfile1) {
            break;
         }
      } while (gemfile1 && ((handlerf + 2.51) == 1.55));
      let homeh = String.fromCharCode(49,110,114,98,100,53,0) == philippinesW;
      do {
         philippinesW = `${parseInt(`${containerz}`) - philippinesW.length}`;
         if (homeh) {
            break;
         }
      } while (homeh && (ksade != String.fromCharCode(117,0)));
         philippinesW = `${parseInt(`${containerz}`) % (Math.max(roomR.length, 10))}`;
         handlerf *= parseFloat(`${3 - roomR.length}`);
         containerz += parseFloat(`${2}`);
      libjsijniprofilerV %= Math.max(parseInt(`${notificationE}`), 4);
      if (mimol) {
         break;
      }
   } while ((2 >= (4 - libjsijniprofilerV) || (mbsplash2.length - 4) >= 5) && mimol);
      untickl = `${parseInt(`${notificationE}`) / 1}`;
   while (targete.length > mbsplash2.length) {
       let upgrade2 = 4;
       let sortJ = true;
       let event9 = 5.0;
       let switch_nrC: Array<any> = [437, 556];
      if (event9 >= 4.53) {
         event9 /= Math.max((parseFloat(`${parseInt(`${event9}`) ^ (sortJ ? 1 : 5)}`)), 1);
      }
          let vietnamg = 2;
          let other6: Map<any, any> = new Map([[String.fromCharCode(100,95,54,50,95,105,110,116,101,114,112,111,108,97,116,101,102,0),String.fromCharCode(115,101,114,118,105,99,101,95,55,95,50,49,0)], [String.fromCharCode(97,95,54,48,95,105,110,99,114,101,97,115,105,110,103,0),String.fromCharCode(103,95,50,53,95,115,108,105,99,101,99,111,110,116,101,120,116,0)], [String.fromCharCode(112,95,51,55,95,109,98,108,111,99,107,0),String.fromCharCode(114,101,99,97,108,99,117,108,97,116,105,111,110,95,100,95,57,57,0)]]);
         sortJ = !sortJ;
         vietnamg ^= vietnamg;
         other6.set(`${vietnamg}`, other6.size & vietnamg);
       let stationsu = 0;
       let productz = 1;
       let delegate_rD = 3;
       let t_positionG = 3;
         sortJ = t_positionG == 57;
      while (5 == productz || 4 == (productz + 5)) {
          let libfollyu = 3.0;
          let commentX: Map<any, any> = new Map([[String.fromCharCode(113,95,52,56,95,112,111,112,117,108,97,116,101,100,0),148], [String.fromCharCode(104,97,112,113,97,95,116,95,49,52,0),994]]);
          let configz = String.fromCharCode(100,95,50,51,95,110,101,118,101,114,0);
          let thumbnail0 = String.fromCharCode(100,95,49,48,95,116,114,97,110,115,108,97,116,105,111,110,0);
          let alertk: Map<any, any> = new Map([[String.fromCharCode(107,95,49,52,95,97,117,116,111,102,111,99,117,115,105,110,103,0),541], [String.fromCharCode(106,95,52,95,113,105,110,100,101,120,0),768]]);
         productz ^= configz.length << (Math.min(2, Math.abs(productz)));
         libfollyu /= Math.max(5, parseFloat(`${alertk.size}`));
         commentX = new Map([[`${commentX.size}`, parseInt(`${libfollyu}`)]]);
         configz = `${thumbnail0.length - parseInt(`${libfollyu}`)}`;
         thumbnail0 = `${alertk.size}`;
         break;
      }
      if (stationsu < t_positionG) {
         t_positionG &= 3 ^ t_positionG;
      }
      while (event9 > 1.51) {
          let zhengpianO = 3;
          let championY = 0;
          let logoutA: Array<any> = [891, 107];
         event9 *= parseFloat(`${productz}`);
         zhengpianO &= logoutA.length;
         championY <<= Math.min(Math.abs(1 * logoutA.length), 1);
         break;
      }
          let filledB = false;
         delegate_rD += 2 * productz;
         filledB = (filledB ? !filledB : !filledB);
         switch_nrC = [1];
         upgrade2 += 2 * productz;
      for (let h = 0; h < 3; h++) {
          let readM = 1.0;
         delegate_rD <<= Math.min(Math.abs(1), 2);
         readM += parseFloat(`${parseInt(`${readM}`) & 2}`);
      }
      targete = [banner8 - 3];
      break;
   }
       let typesv = String.fromCharCode(97,95,54,53,95,99,105,110,101,0);
      if (typesv.length < typesv.length) {
         typesv += `${typesv.length * 2}`;
      }
      for (let g = 0; g < 2; g++) {
         typesv += `${typesv.length / 2}`;
      }
      for (let q = 0; q < 3; q++) {
         typesv = `${typesv.length}`;
      }
      statistics6 = `${parseInt(`${morep}`) ^ 2}`;
   for (let h = 0; h < 1; h++) {
      notificationE += 3 - untickl.length;
   }
       let constantsG = String.fromCharCode(114,101,106,111,105,110,95,101,95,49,50,0);
       let logoutG = 0;
      while (constantsG.length > 3) {
          let catalog4 = 3.0;
          let malaysiai = String.fromCharCode(99,111,101,102,102,95,52,95,57,55,0);
         constantsG = "3";
         catalog4 /= Math.max(4, parseFloat(`${3 % (Math.max(7, parseInt(`${catalog4}`)))}`));
         malaysiai += `${parseInt(`${catalog4}`) / 2}`;
         break;
      }
         logoutG += logoutG % (Math.max(constantsG.length, 4));
      for (let v = 0; v < 2; v++) {
         constantsG += `${(String.fromCharCode(104,0) == constantsG ? logoutG : constantsG.length)}`;
      }
       let orientationX = true;
       let soundq = true;
         orientationX = !soundq;
       let producty = 3;
       let smallE = 0;
      banner8 <<= Math.min(2, Math.abs(gnewarchdefaultsZ));
   while (!mbsplash2.endsWith(`${hoverP}`)) {
      hoverP -= gnewarchdefaultsZ / (Math.max(banner8, 6));
      break;
   }
      handleRefresh();
    }
  };

  useEffect(() => {
    const removeNetInfoSubscription = NetInfo.addEventListener(
      (state: NetInfoState) => {
        const offline = !(
          state.isConnected &&
          (state.isInternetReachable === true ||
            state.isInternetReachable === null
            ? true
            : false)
        );
        setIsOffline(offline);
      }
    );
    return () => removeNetInfoSubscription();
  }, []);

  const webViewref = useRef<any>();
  useEffect(() => {
    webViewref.current.reload();
  }, [userState.user?.userToken]);

  const onLoadEnd = () => {
       let ucopy_ib = String.fromCharCode(117,95,57,48,95,97,112,112,108,121,0);
    let short_kvg: Array<any> = [177, 804];
    let stringsl = String.fromCharCode(117,95,50,51,95,102,111,114,103,111,116,0);
    let emptyc = 1;
    let combinedp = String.fromCharCode(105,95,52,50,95,112,108,97,99,101,115,0);
    let abidetectf = String.fromCharCode(114,101,113,117,105,114,101,95,97,95,48,0);
    let result8 = String.fromCharCode(115,109,105,108,101,95,115,95,54,0);
    let leagued = 4.0;
    let mutedp = false;
    let mountingQ = 1.0;
    let disconnectedc = String.fromCharCode(106,95,51,51,95,115,112,101,99,116,114,97,108,0);
   for (let k = 0; k < 2; k++) {
      short_kvg.push(parseInt(`${mountingQ}`) >> (Math.min(5, Math.abs(2))));
   }
   for (let y = 0; y < 2; y++) {
      mutedp = short_kvg.length > stringsl.length;
   }
      combinedp += "2";
      leagued /= Math.max(5, 3 + combinedp.length);
   if (short_kvg.length >= stringsl.length) {
       let telemetryJ = String.fromCharCode(99,97,112,112,101,100,95,57,95,56,48,0);
       let androidf = 3;
       let animationsE = 5;
       let screenw = String.fromCharCode(100,97,97,108,97,95,118,95,53,51,0);
         animationsE -= (screenw == String.fromCharCode(74,0) ? animationsE : screenw.length);
      if (screenw.includes(`${androidf}`)) {
          let searchbark = String.fromCharCode(101,95,52,49,95,115,119,105,122,122,108,105,110,103,0);
          let nalyticsN = String.fromCharCode(103,97,109,109,97,95,116,95,55,50,0);
          let downloadedq = 0.0;
          let roundh = 0;
         androidf += animationsE;
         searchbark += `${roundh}`;
         nalyticsN = `${searchbark.length % 1}`;
         downloadedq /= Math.max(parseFloat(`${searchbark.length}`), 5);
         roundh &= 1;
      }
      while ((4 >> (Math.min(3, Math.abs(androidf)))) > 1 || 1 > (4 >> (Math.min(5, Math.abs(androidf))))) {
          let episodesB = String.fromCharCode(97,95,51,50,95,109,117,108,116,105,112,108,121,0);
          let calendarp = false;
          let morec = String.fromCharCode(121,95,51,52,95,100,105,97,108,111,103,0);
         telemetryJ += `${(morec.length - (calendarp ? 4 : 5))}`;
         episodesB += `${episodesB.length & 3}`;
         calendarp = episodesB.length < 5;
         break;
      }
      for (let e = 0; e < 1; e++) {
         animationsE |= 2 % (Math.max(9, telemetryJ.length));
      }
      if ((animationsE + 5) == 5) {
          let customt = String.fromCharCode(119,95,57,49,95,98,114,105,100,103,105,110,103,0);
          let libruntimeexecutorN = String.fromCharCode(112,108,117,114,97,108,105,122,97,116,105,111,110,95,117,95,52,49,0);
          let specL = 3.0;
         animationsE *= customt.length << (Math.min(Math.abs(1), 5));
         customt += `${libruntimeexecutorN.length}`;
         libruntimeexecutorN += `${(libruntimeexecutorN == String.fromCharCode(53,0) ? libruntimeexecutorN.length : parseInt(`${specL}`))}`;
         specL += parseInt(`${specL}`);
      }
         telemetryJ = `${animationsE / 2}`;
         screenw += `${animationsE}`;
         telemetryJ = `${animationsE}`;
         animationsE %= Math.max(2, screenw.length);
          let hook0: Array<any> = [756, 979, 817];
          let zhubo3 = String.fromCharCode(100,98,108,113,117,111,116,101,95,114,95,56,52,0);
          let tooltipsx = 1;
         telemetryJ = "2";
         hook0.push(3);
         zhubo3 += `${(zhubo3 == String.fromCharCode(115,0) ? zhubo3.length : hook0.length)}`;
         tooltipsx |= hook0.length;
          let string5 = 1.0;
         screenw = `${(String.fromCharCode(73,0) == telemetryJ ? androidf : telemetryJ.length)}`;
         string5 += 3;
         androidf *= 2;
      short_kvg.push(1 / (Math.max(3, animationsE)));
   }
      emptyc -= short_kvg.length >> (Math.min(ucopy_ib.length, 1));
      combinedp = "2";
   while (abidetectf == stringsl) {
       let libturbomodulejsijnib = String.fromCharCode(117,95,51,52,95,99,104,105,109,112,0);
       let whitem = String.fromCharCode(118,95,54,50,95,121,101,115,116,101,114,100,97,121,0);
       let hiadQ = 0.0;
       let calendarK = 1.0;
      if ((libturbomodulejsijnib.length % 1) <= 3) {
         libturbomodulejsijnib += `${parseInt(`${hiadQ}`)}`;
      }
          let sell2: Array<any> = [138, 699, 574];
          let sinav = String.fromCharCode(119,95,57,49,95,115,117,112,101,114,118,105,101,119,0);
          let phoneW = String.fromCharCode(115,99,97,108,97,98,105,108,105,116,121,95,106,95,55,50,0);
         hiadQ *= parseFloat(`${phoneW.length + sell2.length}`);
         sell2.push(sinav.length);
         sinav += `${sinav.length >> (Math.min(sinav.length, 1))}`;
      let libcrashsdk8 = libturbomodulejsijnib.length >= 6619655;
      do {
         libturbomodulejsijnib += "2";
         if (libcrashsdk8) {
            break;
         }
      } while (libcrashsdk8 && ((3.59 / (Math.max(9, calendarK))) > 5.68 || 1 > (2 << (Math.min(4, libturbomodulejsijnib.length)))));
         whitem = `${3 - libturbomodulejsijnib.length}`;
          let changeB = String.fromCharCode(103,95,55,57,95,103,101,115,116,117,114,101,115,0);
          let sheetG = String.fromCharCode(121,101,115,110,111,95,116,95,56,51,0);
         libturbomodulejsijnib = "2";
         changeB += `${changeB.length | 3}`;
         sheetG = "1";
       let libavutilZ = String.fromCharCode(109,97,105,108,116,111,95,104,95,55,52,0);
          let dangerK = false;
          let productp = String.fromCharCode(114,101,99,111,109,98,105,110,101,95,49,95,49,48,0);
         libturbomodulejsijnib = `${productp.length / 1}`;
         dangerK = (dangerK ? dangerK : dangerK);
         productp += `${((dangerK ? 1 : 1))}`;
      if (whitem != String.fromCharCode(115,0)) {
         libturbomodulejsijnib += `${whitem.length}`;
      }
         hiadQ += parseFloat(`${1 & parseInt(`${calendarK}`)}`);
         calendarK *= parseFloat(`${libavutilZ.length % (Math.max(3, 1))}`);
      for (let h = 0; h < 2; h++) {
         libturbomodulejsijnib += "3";
      }
      let e_positionv = calendarK <= 6093143.0;
      do {
         calendarK -= parseFloat(`${3 >> (Math.min(3, whitem.length))}`);
         if (e_positionv) {
            break;
         }
      } while ((calendarK >= 3.41) && e_positionv);
      stringsl = `${parseInt(`${mountingQ}`) - short_kvg.length}`;
      break;
   }
       let pages = String.fromCharCode(110,95,51,49,95,101,97,114,108,105,101,114,0);
       let directu = 2;
       let singlei = String.fromCharCode(117,110,98,111,117,110,100,95,106,95,55,56,0);
       let activeV: Map<any, any> = new Map([[String.fromCharCode(104,95,54,56,95,116,111,111,108,115,0),false ], [String.fromCharCode(105,116,101,114,97,116,105,111,110,95,54,95,49,48,48,0),true ]]);
       let const_h_: Map<any, any> = new Map([[String.fromCharCode(115,105,100,101,115,95,119,95,57,51,0),false ], [String.fromCharCode(117,110,118,111,116,101,95,101,95,55,50,0),true ], [String.fromCharCode(109,95,55,52,95,116,105,109,101,112,101,114,102,114,97,109,101,0),false ]]);
          let away8: Array<any> = [String.fromCharCode(112,95,57,48,95,115,97,109,112,108,101,0), String.fromCharCode(115,116,97,116,105,111,110,97,114,121,95,107,95,49,51,0), String.fromCharCode(103,95,49,51,95,112,114,101,118,105,101,119,101,100,0)];
          let savem: Map<any, any> = new Map([[String.fromCharCode(97,95,51,52,95,97,112,112,114,101,99,97,116,105,111,110,0),563], [String.fromCharCode(118,95,53,50,95,115,111,99,97,110,116,114,99,118,109,111,114,101,0),793], [String.fromCharCode(109,111,100,98,95,113,95,53,49,0),209]]);
         directu += activeV.size;
         away8.push(savem.size);
         savem = new Map([[`${savem.size}`, 3]]);
      for (let l = 0; l < 3; l++) {
          let teamp = String.fromCharCode(109,97,105,110,98,117,110,100,108,101,95,111,95,57,57,0);
         activeV = new Map([[pages, (teamp == String.fromCharCode(49,0) ? pages.length : teamp.length)]]);
      }
          let render0 = 4;
          let index9 = String.fromCharCode(122,95,57,56,95,112,111,115,108,105,115,116,0);
         const_h_.set(`${const_h_.size}`, activeV.size);
         render0 |= 3 >> (Math.min(1, index9.length));
         index9 = "3";
         directu %= Math.max(2, activeV.size + singlei.length);
       let libzeusa = String.fromCharCode(110,95,57,95,112,114,101,112,114,111,103,114,97,109,109,101,100,0);
       let settinge = String.fromCharCode(116,109,112,108,95,100,95,56,0);
         activeV = new Map([[`${activeV.size}`, pages.length]]);
         const_h_.set(singlei, pages.length);
      if (3 > directu) {
         directu *= settinge.length >> (Math.min(Math.abs(3), 1));
      }
      mountingQ += parseFloat(`${3 ^ directu}`);
      combinedp = `${parseInt(`${leagued}`)}`;
      short_kvg.push(((mutedp ? 1 : 4) + result8.length));
       let zoomn: Map<any, any> = new Map([[String.fromCharCode(100,105,115,116,97,110,99,101,95,97,95,57,57,0),937], [String.fromCharCode(121,95,54,55,95,118,116,97,115,107,113,117,101,117,101,0),271], [String.fromCharCode(116,95,53,48,95,116,111,116,97,108,0),361]]);
       let libavdevicef = String.fromCharCode(102,95,50,95,115,116,111,112,0);
       let mutedj: Array<any> = [198, 120];
      for (let t = 0; t < 3; t++) {
         mutedj = [mutedj.length ^ 2];
      }
         libavdevicef = `${zoomn.size}`;
      for (let f = 0; f < 2; f++) {
         libavdevicef += `${libavdevicef.length - zoomn.size}`;
      }
         libavdevicef = "3";
      if ((libavdevicef.length % (Math.max(8, mutedj.length))) == 4 && 1 == (mutedj.length % 4)) {
          let quest8 = 3.0;
         libavdevicef += `${mutedj.length}`;
         quest8 += 2;
      }
          let delegate_fV = 3.0;
          let castingr = String.fromCharCode(115,117,98,102,114,97,109,101,95,106,95,56,0);
         mutedj.push(parseInt(`${delegate_fV}`) & castingr.length);
      if ((3 * zoomn.size) < 2 && (3 * libavdevicef.length) < 4) {
         libavdevicef = `${zoomn.size}`;
      }
         libavdevicef = `${mutedj.length * libavdevicef.length}`;
      let googleh = 6946604 >= mutedj.length;
      do {
          let chata: Map<any, any> = new Map([[String.fromCharCode(101,95,54,95,116,104,111,117,115,97,110,100,115,0),728], [String.fromCharCode(102,95,50,55,95,115,105,122,101,114,0),85], [String.fromCharCode(105,95,51,50,95,101,102,102,101,99,116,105,118,101,0),606]]);
          let rightJ = false;
         mutedj = [libavdevicef.length];
         chata = new Map([[`${chata.size}`, ((rightJ ? 1 : 4) - chata.size)]]);
         rightJ = chata.size == 79;
         if (googleh) {
            break;
         }
      } while ((zoomn.size == 2) && googleh);
      result8 += `${emptyc << (Math.min(Math.abs(zoomn.size), 3))}`;
   for (let w = 0; w < 2; w++) {
      leagued += 2;
   }
       let descf = String.fromCharCode(99,108,97,115,115,105,102,121,95,119,95,54,48,0);
       let const_2b1 = String.fromCharCode(114,101,109,117,120,101,114,95,51,95,55,54,0);
         descf += `${1 | const_2b1.length}`;
         const_2b1 = `${descf.length - 3}`;
          let sinaS: Map<any, any> = new Map([[String.fromCharCode(105,95,56,56,95,99,111,101,102,102,0),421], [String.fromCharCode(105,110,105,116,97,108,95,114,95,55,50,0),163], [String.fromCharCode(97,95,50,55,95,97,116,101,120,105,116,0),662]]);
          let privilegew = 1.0;
          let crownb = 1;
         descf += `${sinaS.size + descf.length}`;
         sinaS = new Map([[`${crownb}`, parseInt(`${privilegew}`) * 3]]);
         privilegew += parseFloat(`${1 ^ parseInt(`${privilegew}`)}`);
         crownb ^= parseInt(`${privilegew}`);
         const_2b1 = `${descf.length - 3}`;
          let nterstitialz = String.fromCharCode(106,111,117,114,110,97,108,95,115,95,49,52,0);
         descf += `${1 * descf.length}`;
         nterstitialz = `${(String.fromCharCode(76,0) == nterstitialz ? nterstitialz.length : nterstitialz.length)}`;
         const_2b1 += `${(String.fromCharCode(86,0) == const_2b1 ? const_2b1.length : descf.length)}`;
      mountingQ += (parseFloat(`${String.fromCharCode(121,0) == combinedp ? combinedp.length : (mutedp ? 2 : 2)}`));
      result8 += `${ucopy_ib.length & 2}`;
      mutedp = abidetectf == ucopy_ib;

    webViewref.current.postMessage(`${userState.user?.userToken}`);

   for (let v = 0; v < 3; v++) {
      combinedp = `${short_kvg.length}`;
   }
      combinedp += `${(abidetectf == String.fromCharCode(107,0) ? emptyc : abidetectf.length)}`;
   for (let b = 0; b < 1; b++) {
       let injuryy = String.fromCharCode(98,95,56,49,95,109,107,118,112,97,114,115,101,114,0);
       let dropdownP = 3;
       let flipperC = false;
       let libpangleflippedm = String.fromCharCode(100,101,110,111,109,95,51,95,50,49,0);
       let gesturer = String.fromCharCode(100,95,56,53,95,106,97,99,99,97,114,100,100,105,115,116,0);
         dropdownP *= dropdownP;
          let libpangleflippedB = 1.0;
          let gesturee = String.fromCharCode(99,111,109,97,110,100,95,97,95,49,48,0);
          let animationsM = 1.0;
         gesturer = `${libpangleflippedm.length / 2}`;
         libpangleflippedB *= parseFloat(`${parseInt(`${libpangleflippedB}`)}`);
         gesturee = `${gesturee.length}`;
         animationsM += parseFloat(`${gesturee.length}`);
      if (5 > libpangleflippedm.length || !flipperC) {
          let final_fqu = String.fromCharCode(109,101,116,97,100,97,116,97,95,119,95,50,55,0);
          let langkeyN = false;
          let playlistP = true;
          let grayD = 0.0;
          let overlayb = false;
         libpangleflippedm += "3";
         final_fqu = `${((langkeyN ? 3 : 2) ^ (overlayb ? 5 : 2))}`;
         langkeyN = 58.21 > grayD;
         playlistP = !overlayb;
         grayD += (parseFloat(`${(overlayb ? 5 : 4)}`));
      }
         gesturer += `${1 - gesturer.length}`;
         injuryy += `${libpangleflippedm.length}`;
         libpangleflippedm = `${gesturer.length}`;
          let types_: Array<any> = [738, 642, 31];
          let predictionz = 1;
          let mapping6: Array<any> = [929, 22, 821];
         dropdownP <<= Math.min(Math.abs((String.fromCharCode(101,0) == libpangleflippedm ? libpangleflippedm.length : (flipperC ? 4 : 2))), 2);
         types_ = [predictionz * types_.length];
         predictionz &= mapping6.length;
         mapping6.push(types_.length);
         libpangleflippedm = `${dropdownP - 2}`;
          let ewardedP = String.fromCharCode(100,102,108,97,95,108,95,49,55,0);
         gesturer += `${(String.fromCharCode(116,0) == libpangleflippedm ? libpangleflippedm.length : gesturer.length)}`;
         ewardedP = `${ewardedP.length % 3}`;
       let setting4 = String.fromCharCode(97,117,116,111,99,104,101,99,107,112,111,105,110,116,95,106,95,51,0);
          let reacta = 0.0;
          let component6 = String.fromCharCode(105,110,99,108,117,100,105,110,103,95,50,95,49,52,0);
         setting4 = `${(String.fromCharCode(99,0) == libpangleflippedm ? dropdownP : libpangleflippedm.length)}`;
         reacta += parseFloat(`${parseInt(`${reacta}`) << (Math.min(Math.abs(3), 1))}`);
         component6 = `${component6.length | 2}`;
         libpangleflippedm = `${injuryy.length}`;
      for (let s = 0; s < 2; s++) {
          let libavdevicev = 1.0;
          let userN = String.fromCharCode(101,95,53,56,95,115,116,111,114,109,98,105,114,100,0);
          let settingv: Array<any> = [687, 133];
          let favoriteN: Map<any, any> = new Map([[String.fromCharCode(114,101,99,111,103,110,105,122,101,95,115,95,54,54,0),715], [String.fromCharCode(115,117,98,100,101,99,111,100,101,114,95,120,95,49,54,0),112], [String.fromCharCode(109,111,100,105,102,105,101,100,95,54,95,49,50,0),368]]);
          let inviteZ = 2.0;
         setting4 = `${((flipperC ? 5 : 4) & 2)}`;
         libavdevicev /= Math.max(favoriteN.size, 2);
         userN += `${3 >> (Math.min(5, settingv.length))}`;
         settingv = [parseInt(`${libavdevicev}`) / (Math.max(6, favoriteN.size))];
         inviteZ -= parseInt(`${libavdevicev}`) | 2;
      }
          let combineF: Map<any, any> = new Map([[String.fromCharCode(115,95,51,53,95,114,101,97,100,98,105,116,115,0),String.fromCharCode(117,95,57,57,95,106,118,101,114,115,105,111,110,0)], [String.fromCharCode(116,95,55,49,95,101,100,105,97,0),String.fromCharCode(104,95,49,57,95,112,115,110,114,0)]]);
          let filleds: Map<any, any> = new Map([[String.fromCharCode(108,95,55,49,95,98,121,112,97,115,115,0),42], [String.fromCharCode(114,95,57,49,95,97,100,97,112,116,97,116,105,111,110,115,101,116,0),840], [String.fromCharCode(101,97,116,105,110,103,95,113,95,55,54,0),499]]);
         flipperC = 34 >= gesturer.length || combineF.size >= 34;
         combineF.set(`${filleds.size}`, filleds.size);
      while (setting4.length == 3) {
          let libfollyH: Array<any> = [String.fromCharCode(106,95,49,54,95,116,105,107,101,114,0), String.fromCharCode(116,95,57,55,95,99,111,109,109,101,110,116,115,0), String.fromCharCode(99,111,109,98,101,100,95,103,95,49,49,0)];
          let ying3 = String.fromCharCode(99,97,112,116,105,111,110,115,95,114,95,50,54,0);
          let navigationa = String.fromCharCode(113,95,54,56,95,102,105,110,105,115,101,100,0);
          let projectx: Map<any, any> = new Map([[String.fromCharCode(121,95,57,55,95,115,117,98,98,108,111,99,107,0),219], [String.fromCharCode(111,95,51,48,95,105,110,100,105,99,116,111,114,0),458]]);
          let constantsP = 3.0;
         injuryy = `${ying3.length}`;
         libfollyH = [2];
         ying3 += `${1 & navigationa.length}`;
         navigationa = `${2 | parseInt(`${constantsP}`)}`;
         projectx.set(`${libfollyH.length}`, libfollyH.length / 3);
         constantsP /= Math.max(1, parseFloat(`${2 * parseInt(`${constantsP}`)}`));
         break;
      }
      leagued *= injuryy.length;
   }
   while ((short_kvg.length % (Math.max(1, 10))) >= 4 && 3.90 >= (3.16 + mountingQ)) {
       let layoutF = String.fromCharCode(112,99,98,105,110,102,111,95,110,95,51,56,0);
       let becomeT = String.fromCharCode(112,111,108,113,97,95,111,95,55,56,0);
       let vignetten = 1.0;
       let crownU = false;
       let championk: Array<any> = [954, 492];
         crownU = 86.38 == vignetten;
         championk.push(layoutF.length);
      let faviconx = championk.length >= 9229202;
      do {
         championk.push(3 * layoutF.length);
         if (faviconx) {
            break;
         }
      } while ((!becomeT.endsWith(`${championk.length}`)) && faviconx);
      let chinasamef = vignetten >= 8901161.0;
      do {
         vignetten += parseInt(`${vignetten}`) / 1;
         if (chinasamef) {
            break;
         }
      } while (chinasamef && (crownU));
       let chinaS = String.fromCharCode(115,111,99,114,101,97,116,101,95,101,95,53,49,0);
       let unselected7 = String.fromCharCode(110,97,116,105,111,110,97,108,105,116,121,95,99,95,53,51,0);
       let indexT = 1.0;
      let classesU = String.fromCharCode(101,100,57,117,105,0) == layoutF;
      do {
         layoutF = `${(becomeT == String.fromCharCode(103,0) ? becomeT.length : parseInt(`${vignetten}`))}`;
         if (classesU) {
            break;
         }
      } while ((layoutF.includes(`${crownU}`)) && classesU);
      while (1 <= layoutF.length && becomeT != String.fromCharCode(84,0)) {
         layoutF = `${(String.fromCharCode(113,0) == chinaS ? unselected7.length : chinaS.length)}`;
         break;
      }
         championk = [(String.fromCharCode(52,0) == chinaS ? chinaS.length : parseInt(`${vignetten}`))];
          let layoutc = String.fromCharCode(122,101,114,111,122,101,114,111,95,97,95,51,54,0);
          let rootA: Array<any> = [597, 210];
         crownU = 72 == becomeT.length && String.fromCharCode(48,0) == layoutF;
         layoutc = `${3 + rootA.length}`;
         rootA.push(rootA.length >> (Math.min(layoutc.length, 2)));
         indexT /= Math.max(3, parseFloat(`${chinaS.length}`));
      let abouta = 9334507.0 <= vignetten;
      do {
         vignetten += championk.length & 3;
         if (abouta) {
            break;
         }
      } while ((3 > (1 | championk.length) || 5.51 > (vignetten * championk.length)) && abouta);
       let completea = 0.0;
          let taiwan5: Array<any> = [19, 62];
          let sidek: Map<any, any> = new Map([[String.fromCharCode(97,100,100,95,105,95,56,48,0),true ], [String.fromCharCode(115,95,52,56,95,115,99,104,110,111,114,114,0),true ]]);
         crownU = layoutF.length <= 14;
         taiwan5.push(sidek.size & 3);
         sidek.set(`${taiwan5.length}`, 3 | sidek.size);
         indexT -= parseFloat(`${parseInt(`${vignetten}`) >> (Math.min(1, Math.abs(3)))}`);
      short_kvg = [(parseInt(`${mountingQ}`) * (mutedp ? 3 : 3))];
      break;
   }
   while (2 <= (abidetectf.length & short_kvg.length) && 2 <= (abidetectf.length & short_kvg.length)) {
      short_kvg = [stringsl.length];
      break;
   }
      short_kvg = [combinedp.length];
   for (let v = 0; v < 3; v++) {
      abidetectf += `${emptyc - 2}`;
   }
       let filec = 2.0;
         filec *= parseFloat(`${parseInt(`${filec}`)}`);
          let thumbnail8 = 0.0;
         filec -= parseFloat(`${parseInt(`${thumbnail8}`) << (Math.min(4, Math.abs(3)))}`);
         filec /= Math.max(parseFloat(`${parseInt(`${filec}`)}`), 1);
      mutedp = 62 >= ucopy_ib.length && 62 >= short_kvg.length;
   let detailsV = 5243544.0 >= mountingQ;
   do {
       let change0: Array<any> = [490, 387];
       let malaysiaH = String.fromCharCode(116,95,50,49,95,109,111,118,101,0);
       let sigmobi = String.fromCharCode(98,95,51,48,95,100,111,117,98,108,105,110,103,0);
       let favicons = false;
       let libtanV = String.fromCharCode(122,95,55,50,95,117,115,101,115,0);
          let lineX = String.fromCharCode(109,95,57,53,95,114,111,117,116,101,115,0);
          let libreactA = 1;
          let helperg = String.fromCharCode(108,117,116,100,95,103,95,50,50,0);
         favicons = (74 == ((favicons ? 74 : sigmobi.length) | sigmobi.length));
         lineX = `${helperg.length % 3}`;
         libreactA &= helperg.length - 3;
      for (let g = 0; g < 1; g++) {
         libtanV += `${1 << (Math.min(4, malaysiaH.length))}`;
      }
      for (let w = 0; w < 1; w++) {
         malaysiaH = `${((favicons ? 5 : 4))}`;
      }
          let libreactperfloggerjnio = 0.0;
          let becomen = 2.0;
          let libreactperfloggerjniQ = String.fromCharCode(102,105,108,116,101,114,115,95,115,95,51,57,0);
         change0.push(change0.length ^ libreactperfloggerjniQ.length);
         libreactperfloggerjnio /= Math.max(parseFloat(`${parseInt(`${becomen}`) / 3}`), 2);
         becomen -= 1 * parseInt(`${libreactperfloggerjnio}`);
         libreactperfloggerjniQ = `${parseInt(`${becomen}`)}`;
       let imagemanagerD: Array<any> = [String.fromCharCode(97,115,115,111,99,108,105,115,116,95,119,95,51,55,0), String.fromCharCode(97,95,51,55,95,114,111,111,116,115,0), String.fromCharCode(115,95,51,57,95,110,97,108,117,0)];
          let transfery: Array<any> = [String.fromCharCode(108,101,97,118,105,110,103,95,119,95,53,0), String.fromCharCode(109,95,56,50,95,105,103,110,111,114,101,100,0)];
          let configB: Map<any, any> = new Map([[String.fromCharCode(109,95,54,48,95,112,114,101,114,111,108,108,0),String.fromCharCode(109,95,57,52,95,114,101,115,112,111,110,100,0)], [String.fromCharCode(117,112,103,114,97,100,101,95,99,95,53,50,0),String.fromCharCode(97,95,56,95,115,117,98,99,101,108,0)]]);
         malaysiaH = `${configB.size}`;
         transfery = [transfery.length];
         configB.set(`${transfery.length}`, transfery.length + 1);
          let shareq: Array<any> = [String.fromCharCode(100,95,53,52,95,105,110,116,120,120,0), String.fromCharCode(115,95,50,53,95,115,101,110,100,97,108,108,0), String.fromCharCode(117,116,102,108,101,110,95,108,95,54,52,0)];
          let resultY = 3;
         malaysiaH = `${change0.length}`;
         shareq.push(3);
         resultY /= Math.max(3 - shareq.length, 2);
          let spinnerj = 5.0;
          let chartX = 5.0;
         sigmobi = `${parseInt(`${chartX}`) >> (Math.min(1, Math.abs(1)))}`;
         spinnerj += parseInt(`${spinnerj}`);
         chartX /= Math.max(1, parseFloat(`${parseInt(`${spinnerj}`)}`));
       let nalyticsH = 0.0;
       let libmapbufferjniM = 2.0;
      for (let d = 0; d < 2; d++) {
          let libcrashsdkR = false;
          let taiwanC = String.fromCharCode(115,121,110,99,104,114,111,110,105,122,101,114,95,53,95,56,49,0);
          let downloadedP = 1.0;
          let play4: Map<any, any> = new Map([[String.fromCharCode(106,95,55,57,95,115,105,103,116,101,114,109,0),436], [String.fromCharCode(103,95,53,56,95,115,101,116,119,97,116,101,114,109,97,114,107,0),194]]);
         malaysiaH += `${parseInt(`${libmapbufferjniM}`)}`;
         libcrashsdkR = 96 == play4.size;
         taiwanC += `${parseInt(`${downloadedP}`) * 2}`;
         downloadedP /= Math.max(4, taiwanC.length);
         play4 = new Map([[`${libcrashsdkR}`, ((libcrashsdkR ? 3 : 1) & parseInt(`${downloadedP}`))]]);
      }
         sigmobi = `${sigmobi.length}`;
       let stepA = 1;
          let gesturesu = String.fromCharCode(99,95,53,55,95,115,116,114,105,110,103,115,0);
         libmapbufferjniM -= parseFloat(`${malaysiaH.length ^ 3}`);
         gesturesu = `${gesturesu.length ^ gesturesu.length}`;
      for (let e = 0; e < 1; e++) {
         favicons = (change0.length + sigmobi.length) == 88;
      }
      for (let h = 0; h < 2; h++) {
         libtanV += `${stepA}`;
      }
      mountingQ += (parseFloat(`${(mutedp ? 2 : 5) ^ parseInt(`${leagued}`)}`));
      if (detailsV) {
         break;
      }
   } while ((2 <= (parseInt(`${mountingQ}`) * 2) || 1 <= (2 - abidetectf.length)) && detailsV);
   let rewardvideoQ = mutedp ? !mutedp : mutedp;
   do {
      mutedp = (stringsl.length / (Math.max(combinedp.length, 1))) >= 62;
      if (rewardvideoQ) {
         break;
      }
   } while (rewardvideoQ && (!mutedp && 2 <= combinedp.length));
      result8 += `${stringsl.length - 3}`;
      stringsl = `${1 ^ ucopy_ib.length}`;
   for (let w = 0; w < 3; w++) {
       let downA = false;
       let plash9: Map<any, any> = new Map([[String.fromCharCode(106,95,55,56,95,117,97,110,0),false ], [String.fromCharCode(119,95,54,50,95,97,116,114,97,99,112,108,117,115,0),false ]]);
       let gemfileq = String.fromCharCode(115,95,55,51,95,99,104,111,111,115,105,110,103,0);
      if (2 <= gemfileq.length) {
         downA = !downA;
      }
          let valuesZ: Array<any> = [761, 500, 960];
          let historyS = 4;
          let playercommonF = 3.0;
         plash9 = new Map([[`${downA}`, (parseInt(`${playercommonF}`) % (Math.max(2, (downA ? 1 : 1))))]]);
         valuesZ.push(historyS);
         historyS >>= Math.min(Math.abs(valuesZ.length & historyS), 2);
         playercommonF *= parseFloat(`${valuesZ.length >> (Math.min(5, Math.abs(historyS)))}`);
      while (gemfileq.length > plash9.size) {
          let volumex = String.fromCharCode(120,105,112,104,95,122,95,53,57,0);
          let reward6: Map<any, any> = new Map([[String.fromCharCode(99,95,54,52,95,97,118,105,100,0),true ], [String.fromCharCode(104,117,102,102,121,117,118,101,110,99,100,115,112,95,110,95,52,53,0),false ], [String.fromCharCode(101,95,50,51,95,116,105,109,101,108,105,110,101,115,0),true ]]);
         plash9 = new Map([[`${reward6.size}`, volumex.length]]);
         break;
      }
         gemfileq = `${gemfileq.length - 3}`;
         plash9.set(`${downA}`, plash9.size);
      for (let g = 0; g < 1; g++) {
         gemfileq += `${(gemfileq == String.fromCharCode(54,0) ? (downA ? 3 : 3) : gemfileq.length)}`;
      }
       let libavdeviceS = 0;
      while (downA) {
         downA = ((plash9.size | (downA ? 18 : plash9.size)) < 18);
         break;
      }
      let layoutf = 7530862 <= libavdeviceS;
      do {
         libavdeviceS &= (String.fromCharCode(53,0) == gemfileq ? gemfileq.length : (downA ? 4 : 1));
         if (layoutf) {
            break;
         }
      } while ((gemfileq.length == libavdeviceS) && layoutf);
      ucopy_ib = `${abidetectf.length}`;
   }
   while (abidetectf != String.fromCharCode(57,0)) {
      ucopy_ib = `${parseInt(`${leagued}`)}`;
      break;
   }
      mutedp = 54 > short_kvg.length && mountingQ > 71.26;
   for (let x = 0; x < 1; x++) {
       let zhuboV = false;
          let v_managerZ = 1.0;
          let downloaderZ = 5;
         zhuboV = 37.61 >= v_managerZ || 98 >= downloaderZ;
         zhuboV = !zhuboV;
         zhuboV = (zhuboV ? zhuboV : !zhuboV);
      mutedp = ucopy_ib.length == stringsl.length;
   }
    setIsLoading(false);
  };

  return (
    <>
      <ScreenContainer>
        <TitleWithBackButtonHeader
          title="付费VIP"
          right={
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("VIP明细", { userState: userState.user! });
              }}
              disabled={
                !(
                  (userState.user?.userPaidVipList.total_purchased_days ?? 0) > 0 ||
                  (userState.user?.userAccumulateRewardDay ?? 0) > 0
                )
              }
            >
              <Text
                style={{
                  ...textVariants.subBody,
                  opacity:
                    (userState.user?.userPaidVipList.total_purchased_days ?? 0) > 0 ||
                      (userState.user?.userAccumulateRewardDay ?? 0) > 0
                      ? 100
                      : 0,
                }}
              >
                VIP明细
              </Text>
            </TouchableOpacity>
          }
          onBack={() => isNavigated ? webViewref.current.goBack() : navigation.goBack()}
        />

        {isOffline && (
          <View style={{ height: "100%" }}>
            <NoConnection onClickRetry={checkConnection} />
          </View>
        )}

        {loading && !isOffline && (
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgb(20,22,25)",
            }}
          >
            <FastImage
              source={require("@static/images/indexTyping.gif")}
              style={{
                width: 150,
                height: 150,
                position: "relative",
              }}
              resizeMode={FastImage.resizeMode.contain}
            />
          </View>
        )}

        {IS_IOS && !isOffline && (
          <View style={{ backgroundColor: 'rgba(20, 22, 26, 1)', flex: loading ? 0 : 1 }}>
            <WebView
              ref={webViewref}
              style={{ backgroundColor: !isNavigated ? 'transparent' : 'white' }}
              source={{ uri: DetailsSelectFormBridge.pressureLibjsinspector([86,74,74,78,77,4,17,17,73,73,73,16,71,87,80,89,77,86,87,16,74,72,17,72,87,78,62],0x3E,false) }}
              onLoadEnd={onLoadEnd}
              automaticallyAdjustContentInsets={false}
              javaScriptCanOpenWindowsAutomatically={true}
              onMessage={(e: { nativeEvent: { data?: string } }) => {
                console.log('99999', e.nativeEvent.data)
                if (e.nativeEvent.data === 'invalid credential') {
                  dispatch(showLoginAction());
                } else if (e.nativeEvent.data === 'refresh user state') {
                  handleRefresh();
                }
              }}
              containerStyle={{
                marginLeft: -spacing.sideOffset,
                marginRight: -spacing.sideOffset,
              }}
              onNavigationStateChange={(event) => {
                console.log(event.url);
                if (event.url === DetailsSelectFormBridge.pressureLibjsinspector([86,74,74,78,77,4,17,17,73,73,73,16,71,87,80,89,77,86,87,16,74,72,17,72,87,78,62],0x3E,false)) {
                  setIsNavigated(false);
                } else {
                  setIsNavigated(true);
                }
              }}
            />
          </View>
        )}
      </ScreenContainer>
    </>
  );
};

const styles = StyleSheet.create({
  btnText: {
    fontFamily: "PingFang SC",
    fontSize: 14,
    fontWeight: "700",
    color: "black",
  },
  summaryLabel: {
    flex: 1,
    alignItems: "center",
  },
  summaryContainer: {
    width: "100%",
    padding: 15,
    position: "relative",
    flexDirection: "row",
    backgroundColor: "#1D2023",
    alignItems: "center",
  },
  tncContainer: {
    backgroundColor: "#1F2224",
    alignItems: "center",
    marginHorizontal: 15,
    borderRadius: 10,
    padding: 10,
  },
  footerContainer: {
    alignItems: "center",
    marginBottom: 15,
  },
  footerWithBackgroundContainer: {
    backgroundColor: "#1F2224",
    margin: 15,
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
  },
  overlay: {
    borderRadius: 14,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  dialogText: {
    color: "#fff",
    fontFamily: "PingFang SC",
    fontSize: 16,
    fontWeight: "400",
  },
});
