import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  RefreshControl,
  ScrollView,
} from "react-native";
import ScreenContainer from "../../components/container/tt_backward";
import { RootStackScreenProps } from "@type/tt_temperature";
import { useTheme } from "@react-navigation/native";
import { ttOrange } from "@redux/tt_updates_bottom";

import TitleWithBackButtonHeader from "../../components/header/tt_typing_tail_header";
import axios from "axios";
import { Keyboard } from "react-native";
import {
  API_DOMAIN,
  API_DOMAIN_TEST,
  API_DOMAIN_LOCAL,
} from "@utility/tt_trophy_cross";
import NetInfo, { NetInfoState } from "@react-native-community/netinfo";

import InviteStep from "./../../components/invite/tt_description_theme";
import InviteCard from "./../../components/invite/tt_suggestion_black";

import InviteHeader from "./../../components/invite/tt_champion_privilege_header";
import { useAppDispatch, useAppSelector, useSelector } from "@hooks/tt_spec_download";
import { TouchableOpacity } from "@gorhom/bottom-sheet";
import { updateUserAuth } from "@redux/actions/tt_topon";
import tt_humidity_guide from "../../../../Umeng/tt_humidity_guide";
import { ttTramini } from "@api";
import { ttGoal } from "@redux/reducers/tt_selected";


export default ({ navigation }: RootStackScreenProps<"邀请">) => {
  const { colors, textVariants, icons, spacing } = useTheme();

  const userState = useSelector<ttGoal>('userReducer');

  const [refreshing, setRefreshing] = useState(false);
  const dispatch = useAppDispatch();

  
  useEffect(() => {
    tt_humidity_guide.userCenterVipInviteViewsAnalytics();
  }, []);
  

  const handleRefresh = async () => {
       let helperp = String.fromCharCode(102,95,57,54,95,100,111,99,0);
    let rewardvideoY: Map<any, any> = new Map([[String.fromCharCode(97,115,115,101,114,116,95,103,95,52,49,0),true ], [String.fromCharCode(108,122,111,120,95,51,95,51,53,0),true ], [String.fromCharCode(107,95,56,56,95,108,105,103,104,116,0),true ]]);
    let settingD = 1.0;
    let loginL = String.fromCharCode(105,110,115,116,97,110,99,101,115,95,118,95,49,52,0);
    let topicj = String.fromCharCode(99,95,55,50,95,98,108,117,114,114,101,100,0);
    let policy7: Array<any> = [237, 938];
    let yinge = 3;
    let textB = String.fromCharCode(113,95,50,53,95,112,104,111,110,101,0);
    let mbnativeO: Map<any, any> = new Map([[String.fromCharCode(103,95,54,53,95,114,97,110,115,112,111,114,116,0),315], [String.fromCharCode(115,112,97,99,101,100,95,52,95,57,51,0),74], [String.fromCharCode(105,115,100,105,103,105,116,95,119,95,48,0),338]]);
    let sansT: Array<any> = [161, 738, 328];
    let shirto = 1.0;
    let cornerv = 3.0;
    let gemfilex = 1.0;
    let smallw = String.fromCharCode(114,97,116,101,99,111,110,116,114,111,108,95,53,95,55,57,0);
    let whatsapp_ = 3.0;
   while ((3 << (Math.min(2, Math.abs(rewardvideoY.size)))) >= 3 || 5 >= (rewardvideoY.size - 3)) {
       let store7 = String.fromCharCode(118,95,54,49,95,99,117,114,108,121,0);
       let pauseT: Array<any> = [722, 121, 32];
       let zoomW = String.fromCharCode(122,95,56,53,95,102,105,108,109,0);
         store7 = `${(String.fromCharCode(79,0) == zoomW ? zoomW.length : pauseT.length)}`;
         zoomW = `${store7.length ^ 1}`;
         zoomW += `${zoomW.length ^ pauseT.length}`;
      if (4 <= (4 * pauseT.length) && 4 <= (pauseT.length * store7.length)) {
          let areaN = String.fromCharCode(103,95,55,53,95,111,98,109,99,0);
          let videoM = 5.0;
          let brightnessi = String.fromCharCode(105,95,50,50,95,108,111,110,103,98,105,103,0);
          let gesture5 = String.fromCharCode(97,112,112,114,111,120,105,109,97,116,111,114,95,107,95,48,0);
          let invite6 = 5;
         pauseT.push(zoomW.length);
         areaN += "2 & invite6";
         videoM -= brightnessi.length | 3;
         brightnessi = `${areaN.length << (Math.min(Math.abs(2), 2))}`;
         gesture5 += `${areaN.length | invite6}`;
      }
      if (5 < (1 >> (Math.min(1, zoomW.length)))) {
         zoomW += `${pauseT.length}`;
      }
      settingD /= Math.max(4, parseFloat(`${parseInt(`${settingD}`) >> (Math.min(4, Math.abs(1)))}`));
      break;
   }
   for (let s = 0; s < 1; s++) {
      loginL += "3";
   }
   while (shirto >= topicj.length) {
      shirto /= Math.max(3 / (Math.max(4, parseInt(`${cornerv}`))), 2);
      break;
   }
       let type_kgE: Map<any, any> = new Map([[String.fromCharCode(100,102,115,116,95,120,95,57,52,0),String.fromCharCode(117,95,51,56,95,97,102,105,114,0)], [String.fromCharCode(101,109,111,116,105,99,111,110,95,109,95,54,57,0),String.fromCharCode(104,95,52,95,115,116,97,116,105,111,110,97,114,105,116,121,0)], [String.fromCharCode(116,95,50,50,95,102,105,110,105,115,104,101,100,0),String.fromCharCode(115,101,103,95,118,95,52,52,0)]]);
       let reactnativejs9: Array<any> = [String.fromCharCode(114,101,112,101,97,116,101,100,108,121,95,99,95,57,54,0), String.fromCharCode(117,95,51,49,95,116,105,109,101,108,105,110,101,0), String.fromCharCode(112,114,101,100,120,108,95,100,95,55,52,0)];
      if ((reactnativejs9.length / (Math.max(5, type_kgE.size))) == 4 && (reactnativejs9.length / 4) == 5) {
          let subsh = 4.0;
          let placementa = String.fromCharCode(97,95,52,53,95,108,97,117,110,99,104,101,100,0);
         type_kgE = new Map([[`${type_kgE.size}`, type_kgE.size / (Math.max(3, 6))]]);
         subsh -= parseFloat(`${placementa.length}`);
         placementa = `${parseInt(`${subsh}`)}`;
      }
         type_kgE.set(`${reactnativejs9.length}`, 3);
      if (2 == type_kgE.size) {
         reactnativejs9 = [1];
      }
      if (3 == (type_kgE.size % 3)) {
          let pressureA = String.fromCharCode(99,95,56,50,95,109,105,100,101,113,117,97,108,105,122,101,114,0);
          let mimo3 = 4;
          let giftZ = true;
         reactnativejs9.push(1 % (Math.max(5, type_kgE.size)));
         pressureA += `${1 << (Math.min(Math.abs(mimo3), 5))}`;
         mimo3 |= mimo3;
         giftZ = pressureA.length > 68;
      }
      for (let v = 0; v < 2; v++) {
         reactnativejs9.push(reactnativejs9.length);
      }
       let dropdownw: Map<any, any> = new Map([[String.fromCharCode(106,95,52,49,95,120,99,98,103,114,97,98,0),921], [String.fromCharCode(120,95,57,57,95,108,97,116,0),731]]);
       let matchz: Map<any, any> = new Map([[String.fromCharCode(99,108,110,112,97,115,115,95,106,95,50,0),490], [String.fromCharCode(110,111,116,101,115,95,107,95,53,52,0),542]]);
      rewardvideoY.set(helperp, helperp.length - 3);
   if (2.92 > (settingD / 5)) {
      cornerv += mbnativeO.size;
   }
      rewardvideoY = new Map([[`${sansT.length}`, 1]]);
      shirto -= topicj.length ^ mbnativeO.size;
   while (!loginL.startsWith(`${settingD}`)) {
      loginL += `${parseInt(`${cornerv}`)}`;
      break;
   }
   while (!sansT.includes(cornerv)) {
      sansT.push(textB.length - sansT.length);
      break;
   }
      cornerv += 1 | mbnativeO.size;
   while (4 < (policy7.length - 2) && (5.37 + cornerv) < 2.52) {
       let injuryf = String.fromCharCode(102,111,108,108,111,119,101,114,115,95,115,95,55,49,0);
       let circlel = String.fromCharCode(110,95,55,54,95,112,97,114,116,105,99,105,112,97,110,116,0);
      if (circlel.length <= injuryf.length) {
          let eventZ = 4;
         injuryf += `${circlel.length}`;
         eventZ ^= eventZ;
      }
      for (let k = 0; k < 1; k++) {
         circlel += `${(String.fromCharCode(80,0) == injuryf ? circlel.length : injuryf.length)}`;
      }
         injuryf = `${(circlel == String.fromCharCode(49,0) ? circlel.length : injuryf.length)}`;
      if (injuryf.length > 4) {
         injuryf += `${1 ^ circlel.length}`;
      }
       let fastforwardE = 4;
      for (let j = 0; j < 3; j++) {
         fastforwardE += 3;
      }
      cornerv *= injuryf.length;
      break;
   }
   if (1.98 <= (gemfilex + 2.0) || 2.0 <= (gemfilex + textB.length)) {
      textB = `${textB.length ^ 3}`;
   }
      rewardvideoY = new Map([[`${rewardvideoY.size}`, yinge << (Math.min(Math.abs(rewardvideoY.size), 4))]]);
      policy7.push(1 & parseInt(`${settingD}`));
       let traminic = 5.0;
      let helpert = traminic >= 7735849.0;
      do {
         traminic *= 1 - parseInt(`${traminic}`);
         if (helpert) {
            break;
         }
      } while (helpert && ((traminic / 4.74) < 3.44 && 4.74 < (traminic / (Math.max(traminic, 6)))));
         traminic += parseInt(`${traminic}`) + 3;
         traminic -= 2;
      shirto += parseInt(`${traminic}`);

    setRefreshing(true);

   if (4.3 > (settingD * parseFloat(`${sansT.length}`)) || (sansT.length + 2) > 3) {
      settingD *= parseFloat(`${helperp.length >> (Math.min(Math.abs(2), 5))}`);
   }
   while ((mbnativeO.size / 4) > 3) {
      mbnativeO.set(`${topicj}`, 1 + topicj.length);
      break;
   }
   for (let x = 0; x < 2; x++) {
       let faviconW = String.fromCharCode(114,95,50,95,112,114,105,110,116,99,111,109,112,0);
       let darky = String.fromCharCode(113,95,50,95,100,114,97,102,116,115,0);
       let lessT: Array<any> = [104, 8, 510];
       let basketball1 = 3;
       let manifest6: Array<any> = [781, 483];
          let entryR = String.fromCharCode(105,110,99,108,117,100,101,100,95,108,95,53,50,0);
         faviconW += "1";
         entryR += `${1 >> (Math.min(1, entryR.length))}`;
          let type_ei = String.fromCharCode(121,95,49,50,95,102,105,108,116,0);
          let playE: Map<any, any> = new Map([[String.fromCharCode(106,95,52,49,95,111,112,101,114,97,116,105,110,103,0),956], [String.fromCharCode(100,101,99,111,117,112,108,101,95,104,95,52,53,0),975]]);
          let gestureso = 2;
         basketball1 *= 2 << (Math.min(4, manifest6.length));
         type_ei += `${2 / (Math.max(5, playE.size))}`;
         playE.set(`${gestureso}`, gestureso & 1);
      let kuaishou0 = manifest6.length >= 9460366;
      do {
         manifest6 = [manifest6.length << (Math.min(1, Math.abs(basketball1)))];
         if (kuaishou0) {
            break;
         }
      } while (kuaishou0 && (1 <= (1 * basketball1) || (basketball1 * 1) <= 2));
       let readH = 0;
         faviconW += `${darky.length}`;
       let zoom2 = String.fromCharCode(98,95,49,51,95,97,109,111,117,110,116,115,0);
       let androidU = String.fromCharCode(102,95,56,95,97,116,116,114,105,98,115,0);
         lessT.push(faviconW.length | 3);
          let u_managerY: Array<any> = [538, 370];
          let orientationo = false;
          let d_playerF: Map<any, any> = new Map([[String.fromCharCode(97,95,50,56,95,112,97,103,101,99,111,117,110,116,0),String.fromCharCode(103,95,49,51,95,99,104,97,110,110,101,108,115,0)], [String.fromCharCode(122,95,56,55,95,115,101,114,118,101,114,115,0),String.fromCharCode(116,116,97,101,110,99,100,115,112,95,121,95,54,52,0)]]);
         zoom2 += `${zoom2.length}`;
         u_managerY = [1];
         orientationo = u_managerY.length == 31 && !orientationo;
         d_playerF = new Map([[`${u_managerY.length}`, u_managerY.length]]);
         zoom2 = `${manifest6.length}`;
          let settingY = true;
          let megaphoneK = String.fromCharCode(117,95,50,54,95,110,111,110,110,117,108,108,99,111,110,116,101,110,116,115,0);
         basketball1 -= megaphoneK.length / 2;
         settingY = !settingY;
         megaphoneK += "3";
          let greena = String.fromCharCode(112,111,119,101,114,102,117,108,95,98,95,52,51,0);
          let backa = 3.0;
          let data8 = 0.0;
         lessT = [faviconW.length >> (Math.min(1, Math.abs(basketball1)))];
         greena += "1";
         backa *= greena.length | 1;
         data8 += parseFloat(`${2}`);
         zoom2 += `${lessT.length}`;
      for (let b = 0; b < 3; b++) {
         androidU = `${readH}`;
      }
      for (let w = 0; w < 2; w++) {
          let module7 = String.fromCharCode(99,108,101,97,114,105,95,109,95,55,55,0);
          let models = String.fromCharCode(115,104,97,108,108,111,119,95,117,95,54,56,0);
         androidU += `${androidU.length}`;
         module7 = `${module7.length}`;
         models = `${module7.length | models.length}`;
      }
      for (let i = 0; i < 3; i++) {
         manifest6 = [3];
      }
      gemfilex /= Math.max(parseInt(`${settingD}`) * sansT.length, 4);
   }
   for (let z = 0; z < 3; z++) {
       let cluby = 5;
      for (let x = 0; x < 3; x++) {
         cluby %= Math.max(3, 4);
      }
         cluby ^= 1;
          let soundV = true;
          let fillf = 3;
          let colorsw = 5.0;
         cluby <<= Math.min(4, parseInt(`${Math.abs(((soundV ? 2 : 2) << (Math.min(Math.abs(parseInt(`${colorsw}`)), 5))))}`));
         soundV = fillf > fillf;
      cornerv *= 1;
   }
      helperp = `${policy7.length}`;
   if (topicj.includes(`${cornerv}`)) {
      topicj += `${sansT.length}`;
   }
   while (2.43 < (cornerv / 2)) {
       let time_1s = String.fromCharCode(103,95,56,49,95,97,116,116,101,109,112,116,115,0);
       let half7: Array<any> = [225, 540];
       let bodan9 = 3.0;
       let agreementr = 5.0;
      if ((agreementr - 5.85) == 2.28 || (bodan9 / (Math.max(6, agreementr))) == 5.85) {
          let colors3 = String.fromCharCode(115,111,108,105,100,105,116,121,95,57,95,51,57,0);
          let applicationC = 2.0;
          let description_4d = String.fromCharCode(102,95,54,49,95,117,110,105,120,0);
          let less5 = String.fromCharCode(104,105,116,115,95,118,95,52,0);
         agreementr -= parseInt(`${agreementr}`) & 2;
         colors3 += "3";
         applicationC /= Math.max(parseFloat(`${less5.length}`), 5);
         description_4d += `${(String.fromCharCode(106,0) == less5 ? parseInt(`${applicationC}`) : less5.length)}`;
      }
         half7 = [parseInt(`${bodan9}`)];
         half7 = [half7.length];
          let buildy = String.fromCharCode(115,97,110,105,116,121,95,102,95,57,50,0);
         half7 = [parseInt(`${agreementr}`) & buildy.length];
         time_1s += `${parseInt(`${bodan9}`)}`;
      gemfilex += (textB == String.fromCharCode(115,0) ? parseInt(`${settingD}`) : textB.length);
      break;
   }
   if (5 == (parseInt(`${gemfilex}`) + helperp.length)) {
       let closep = String.fromCharCode(112,97,114,116,115,95,122,95,49,57,0);
       let tailR = String.fromCharCode(118,95,56,55,95,115,105,109,112,108,101,119,114,105,116,101,0);
       let logod = 5.0;
       let countryw = true;
       let changei = String.fromCharCode(115,95,52,53,95,109,97,103,110,105,102,105,101,114,0);
         changei += "2";
          let indexD: Array<any> = [733, 211];
          let bannerh = 3;
         tailR += "3";
         indexD.push(indexD.length);
         bannerh >>= Math.min(Math.abs(bannerh), 1);
      if (4 == closep.length) {
         tailR = `${tailR.length / (Math.max(3, 3))}`;
      }
      while (closep.length > tailR.length) {
         closep += "3";
         break;
      }
      let flyer9 = 7426158 <= changei.length;
      do {
         changei += `${(tailR.length - (countryw ? 2 : 2))}`;
         if (flyer9) {
            break;
         }
      } while (flyer9 && (tailR != changei));
       let productd = String.fromCharCode(107,95,52,57,95,109,111,100,105,102,121,0);
         changei = `${((countryw ? 5 : 3) & tailR.length)}`;
      let backQ = logod >= 8924134.0;
      do {
          let remindert = 2;
         logod /= Math.max(remindert, 2);
         if (backQ) {
            break;
         }
      } while ((4 >= productd.length) && backQ);
       let nativeex_ = 2.0;
      for (let w = 0; w < 3; w++) {
         productd = `${parseInt(`${nativeex_}`) ^ 3}`;
      }
      while (tailR.startsWith(`${productd.length}`)) {
         tailR = `${3 ^ tailR.length}`;
         break;
      }
       let questY: Map<any, any> = new Map([[String.fromCharCode(105,109,112,111,114,116,95,120,95,49,48,0),676], [String.fromCharCode(115,97,118,101,105,95,50,95,49,53,0),643], [String.fromCharCode(114,117,110,116,101,115,116,115,95,53,95,49,51,0),926]]);
       let upgradeT: Map<any, any> = new Map([[String.fromCharCode(109,105,112,115,102,112,117,95,52,95,51,0),String.fromCharCode(109,95,52,51,95,105,109,112,97,99,116,0)], [String.fromCharCode(102,95,57,52,95,120,109,117,108,116,105,112,108,101,0),String.fromCharCode(100,114,97,105,110,95,117,95,53,53,0)]]);
       let register_p3j = String.fromCharCode(111,118,101,114,114,105,100,100,101,110,95,116,95,49,57,0);
         upgradeT = new Map([[`${questY.size}`, questY.size & tailR.length]]);
      for (let w = 0; w < 1; w++) {
         upgradeT.set(tailR, upgradeT.size - 2);
      }
      helperp += `${1 & yinge}`;
   }
       let detailQ = String.fromCharCode(107,95,50,57,95,99,108,111,115,101,99,98,0);
       let backgroundD = false;
       let agreementS = 4;
       let matchesy = true;
       let previewg = false;
         previewg = !backgroundD;
      while (!previewg && matchesy) {
         previewg = (!previewg ? !matchesy : !previewg);
         break;
      }
      if (!matchesy) {
         matchesy = backgroundD;
      }
       let teama = String.fromCharCode(105,95,53,53,95,110,97,110,0);
       let ewardedv = String.fromCharCode(121,95,50,50,95,119,105,100,116,104,0);
         ewardedv += `${2 << (Math.min(Math.abs(agreementS), 3))}`;
      while (!previewg && !matchesy) {
         matchesy = (((!previewg ? ewardedv.length : 100) ^ ewardedv.length) <= 100);
         break;
      }
         teama += `${((previewg ? 2 : 5))}`;
          let with_j8 = 5.0;
         detailQ += `${((matchesy ? 4 : 2) + 1)}`;
         with_j8 *= parseFloat(`${3 << (Math.min(Math.abs(parseInt(`${with_j8}`)), 4))}`);
      sansT.push(topicj.length);
   let inactivei = 8344249 <= mbnativeO.size;
   do {
      mbnativeO = new Map([[topicj, 1 ^ helperp.length]]);
      if (inactivei) {
         break;
      }
   } while (inactivei && (2 < (4 + helperp.length) && 4 < (mbnativeO.size + helperp.length)));
      textB += `${policy7.length & 2}`;
      policy7.push(rewardvideoY.size % 3);
   if (settingD > 3.76) {
       let regengT = String.fromCharCode(102,116,118,112,110,111,100,101,95,105,95,49,57,0);
       let saveI = false;
       let qcopy_pyd = String.fromCharCode(121,95,50,52,95,101,115,99,97,112,101,115,0);
       let anytimeg: Map<any, any> = new Map([[String.fromCharCode(119,111,114,107,105,110,103,95,99,95,53,56,0),String.fromCharCode(114,101,99,101,105,118,101,100,95,121,95,50,51,0)], [String.fromCharCode(115,117,109,109,101,100,95,97,95,50,54,0),String.fromCharCode(104,95,52,50,95,99,111,112,116,115,0)]]);
       let firebasel = String.fromCharCode(109,101,115,115,97,103,101,115,95,112,95,50,49,0);
      while (firebasel == qcopy_pyd) {
         qcopy_pyd = "1";
         break;
      }
       let fillY = true;
      for (let b = 0; b < 3; b++) {
          let nterstitialo = String.fromCharCode(97,108,109,111,115,116,95,119,95,50,50,0);
          let constants9 = String.fromCharCode(115,116,114,115,116,97,114,116,95,99,95,56,48,0);
          let viewsV = String.fromCharCode(99,108,101,97,114,97,108,108,95,108,95,54,54,0);
          let indexy = 0;
         regengT = `${3 | anytimeg.size}`;
         nterstitialo = `${viewsV.length ^ indexy}`;
         constants9 = "1";
         viewsV += `${constants9.length}`;
         indexy <<= Math.min(5, Math.abs(3));
      }
         saveI = fillY;
      while (4 < (anytimeg.size % 3) && anytimeg.size < 3) {
         fillY = (62 > ((!fillY ? anytimeg.size : 28) + anytimeg.size));
         break;
      }
      for (let t = 0; t < 3; t++) {
          let minid = String.fromCharCode(119,95,55,51,95,109,97,99,114,111,98,108,111,99,107,0);
         regengT += `${(minid.length % (Math.max(3, (fillY ? 1 : 5))))}`;
      }
         regengT = `${(String.fromCharCode(68,0) == qcopy_pyd ? qcopy_pyd.length : (saveI ? 3 : 4))}`;
         qcopy_pyd = `${((saveI ? 5 : 5))}`;
      let lessI = saveI ? !saveI : saveI;
      do {
          let minih = 4.0;
         saveI = firebasel == String.fromCharCode(67,0);
         minih += 2 - parseInt(`${minih}`);
         if (lessI) {
            break;
         }
      } while (lessI && (!saveI));
         firebasel = `${((fillY ? 1 : 1) >> (Math.min(Math.abs(3), 5)))}`;
          let mbridget = String.fromCharCode(99,95,54,95,114,97,110,115,105,116,105,111,110,0);
         qcopy_pyd += `${3 * firebasel.length}`;
         mbridget = `${mbridget.length}`;
       let launcherh = String.fromCharCode(105,109,112,108,105,99,105,116,101,108,121,95,111,95,55,0);
      for (let x = 0; x < 3; x++) {
         regengT = `${(2 + (fillY ? 5 : 1))}`;
      }
      let long_2F = saveI ? !saveI : saveI;
      do {
          let filterU = 0;
          let line4 = 1.0;
          let linet: Array<any> = [669, 803];
         saveI = (fillY ? saveI : !fillY);
         filterU /= Math.max(3, 2);
         line4 += linet.length % (Math.max(1, 2));
         linet.push(linet.length >> (Math.min(4, Math.abs(filterU))));
         if (long_2F) {
            break;
         }
      } while (long_2F && (!saveI));
         launcherh = `${(launcherh.length + (fillY ? 5 : 3))}`;
      yinge <<= Math.min(3, Math.abs(textB.length >> (Math.min(Math.abs(3), 2))));
   }
      yinge %= Math.max(3, 3 << (Math.min(5, policy7.length)));
      yinge -= mbnativeO.size;
    await refreshUserState();

   if ((rewardvideoY.size - 2) <= 1 || 2 <= (rewardvideoY.size >> (Math.min(Math.abs(2), 4)))) {
      rewardvideoY = new Map([[`${rewardvideoY.size}`, textB.length / (Math.max(2, 10))]]);
   }
      topicj += `${textB.length}`;
   let gestured = String.fromCharCode(55,119,118,107,105,56,50,99,119,0) == helperp;
   do {
      helperp += `${topicj.length * 2}`;
      if (gestured) {
         break;
      }
   } while (gestured && (helperp.length >= 1));
   while (yinge > 3) {
      yinge <<= Math.min(policy7.length, 2);
      break;
   }
   for (let c = 0; c < 1; c++) {
      helperp = `${(textB == String.fromCharCode(66,0) ? parseInt(`${gemfilex}`) : textB.length)}`;
   }
      topicj = `${3 ^ parseInt(`${cornerv}`)}`;
       let reactnativejsW = String.fromCharCode(104,97,118,105,110,103,95,121,95,50,57,0);
      let custom2 = reactnativejsW == String.fromCharCode(55,112,49,0);
      do {
          let skipD = String.fromCharCode(122,95,52,95,102,105,110,100,97,115,115,111,99,0);
          let slider2 = String.fromCharCode(101,95,51,55,95,115,117,98,106,0);
         reactnativejsW += `${slider2.length}`;
         skipD = `${skipD.length / (Math.max(2, 10))}`;
         slider2 += "1";
         if (custom2) {
            break;
         }
      } while (custom2 && (reactnativejsW != String.fromCharCode(101,0) && 3 == reactnativejsW.length));
      let point2 = 9766198 >= reactnativejsW.length;
      do {
         reactnativejsW += `${reactnativejsW.length >> (Math.min(Math.abs(3), 1))}`;
         if (point2) {
            break;
         }
      } while (point2 && (!reactnativejsW.endsWith(`${reactnativejsW.length}`)));
         reactnativejsW = `${reactnativejsW.length}`;
      shirto *= policy7.length;
       let updatesC = String.fromCharCode(103,114,111,119,116,104,95,51,95,53,48,0);
       let launcher9 = false;
      let greyD = launcher9 ? !launcher9 : launcher9;
      do {
         launcher9 = updatesC.length < 44;
         if (greyD) {
            break;
         }
      } while ((!launcher9) && greyD);
         updatesC += "3";
         launcher9 = updatesC.length < 91;
          let str2 = String.fromCharCode(118,95,53,54,95,99,111,109,112,111,115,101,105,0);
         updatesC += `${str2.length}`;
         updatesC = `${(updatesC.length - (launcher9 ? 5 : 3))}`;
      for (let f = 0; f < 1; f++) {
         launcher9 = !launcher9;
      }
      shirto -= (updatesC == String.fromCharCode(86,0) ? yinge : updatesC.length);
       let updatesM: Map<any, any> = new Map([[String.fromCharCode(109,95,51,52,95,102,111,114,0),33], [String.fromCharCode(104,95,55,56,95,97,99,104,101,0),627]]);
       let injuryQ: Array<any> = [610, 784];
         injuryQ = [1];
         injuryQ = [updatesM.size];
          let gmail8 = 4.0;
         updatesM = new Map([[`${updatesM.size}`, 1]]);
         gmail8 += parseFloat(`${1 & parseInt(`${gmail8}`)}`);
      while (3 <= (injuryQ.length - 4) || (4 - updatesM.size) <= 4) {
         updatesM.set(`${injuryQ.length}`, injuryQ.length >> (Math.min(Math.abs(3), 2)));
         break;
      }
      for (let c = 0; c < 1; c++) {
          let mbnativeu = true;
          let componentf = 2.0;
         updatesM = new Map([[`${mbnativeu}`, 3 | parseInt(`${componentf}`)]]);
      }
      let humidityt = updatesM.size >= 6660512;
      do {
         updatesM = new Map([[`${updatesM.size}`, injuryQ.length]]);
         if (humidityt) {
            break;
         }
      } while (((updatesM.size >> (Math.min(1, injuryQ.length))) > 3) && humidityt);
      mbnativeO = new Map([[`${mbnativeO.size}`, parseInt(`${gemfilex}`) - mbnativeO.size]]);
   let scheduleD = cornerv >= 6503891.0;
   do {
      cornerv *= loginL.length;
      if (scheduleD) {
         break;
      }
   } while (((3.12 + cornerv) > 2.53 && 3.12 > (cornerv + gemfilex)) && scheduleD);
       let switch_i_: Array<any> = [395, 947];
       let otherV = String.fromCharCode(114,97,116,105,111,115,95,97,95,50,52,0);
      if ((switch_i_.length * otherV.length) < 3) {
          let page0 = String.fromCharCode(97,114,101,113,117,101,115,116,95,105,95,53,49,0);
          let modal9 = 4.0;
          let clockT: Map<any, any> = new Map([[String.fromCharCode(110,111,115,99,97,108,101,95,103,95,49,50,0),845], [String.fromCharCode(119,95,55,49,95,115,111,119,97,107,101,117,112,0),742], [String.fromCharCode(115,101,99,117,114,105,116,121,95,109,95,52,52,0),811]]);
         otherV += `${2 / (Math.max(6, clockT.size))}`;
         page0 = "3";
         modal9 *= parseInt(`${modal9}`) % (Math.max(4, page0.length));
         clockT = new Map([[`${modal9}`, page0.length]]);
      }
       let page5 = String.fromCharCode(110,95,53,52,95,116,101,115,116,101,114,0);
       let sliderd = String.fromCharCode(114,95,54,54,95,104,111,110,101,121,115,119,97,112,0);
      while ((switch_i_.length / (Math.max(4, 7))) <= 4 || 1 <= (4 / (Math.max(5, switch_i_.length)))) {
         sliderd = `${(otherV == String.fromCharCode(111,0) ? switch_i_.length : otherV.length)}`;
         break;
      }
          let toponF = String.fromCharCode(108,122,111,120,95,99,95,49,0);
          let rewarda = 4.0;
         sliderd = `${sliderd.length - page5.length}`;
         toponF = `${toponF.length ^ parseInt(`${rewarda}`)}`;
         rewarda /= Math.max(3, 2);
      if (otherV.length > page5.length) {
         page5 = `${page5.length >> (Math.min(Math.abs(2), 3))}`;
      }
      while (page5 == String.fromCharCode(82,0)) {
         sliderd = `${sliderd.length % 2}`;
         break;
      }
      yinge <<= Math.min(4, Math.abs(mbnativeO.size));
   for (let g = 0; g < 2; g++) {
      textB = `${2 | topicj.length}`;
   }
   for (let f = 0; f < 1; f++) {
      helperp = `${topicj.length}`;
   }
       let unreadZ = String.fromCharCode(121,95,57,55,95,115,99,97,108,101,100,0);
      for (let t = 0; t < 3; t++) {
          let product_ = 4.0;
          let photoq = true;
          let sigmobS = false;
          let stationn = false;
          let mbbanneru = String.fromCharCode(99,95,48,95,114,101,99,111,103,110,105,116,105,111,110,115,0);
         unreadZ = `${((photoq ? 3 : 2))}`;
         product_ += parseFloat(`${2 + parseInt(`${product_}`)}`);
         photoq = sigmobS;
         stationn = mbbanneru.length == 28 || product_ == 50.77;
         mbbanneru += `${((sigmobS ? 5 : 4))}`;
      }
         unreadZ += `${(String.fromCharCode(76,0) == unreadZ ? unreadZ.length : unreadZ.length)}`;
      for (let o = 0; o < 1; o++) {
         unreadZ = `${unreadZ.length % (Math.max(4, unreadZ.length))}`;
      }
      cornerv *= 1 + loginL.length;
      rewardvideoY = new Map([[`${yinge}`, (String.fromCharCode(101,0) == textB ? yinge : textB.length)]]);
    setRefreshing(false);
  };

  const refreshUserState = async () => {
       let flyerh = 5.0;
    let firebasen = String.fromCharCode(109,95,57,55,95,110,111,116,99,104,101,100,0);
    let tooltipsp = 3.0;
    let detail1: Map<any, any> = new Map([[String.fromCharCode(109,98,102,105,108,116,101,114,95,121,95,55,52,0),352], [String.fromCharCode(111,105,100,97,110,121,95,113,95,57,52,0),849]]);
    let resenda = 4;
    let incidentB: Map<any, any> = new Map([[String.fromCharCode(107,95,57,54,95,100,111,119,110,108,111,97,100,0),false ], [String.fromCharCode(98,114,105,100,103,101,100,95,102,95,52,51,0),false ], [String.fromCharCode(110,111,105,115,101,95,103,95,57,51,0),true ]]);
    let anythinkU = false;
    let darkV = String.fromCharCode(104,119,100,101,118,105,99,101,95,117,95,57,57,0);
    let soundD: Array<any> = [21, 721];
    let subsJ = String.fromCharCode(117,95,51,55,95,97,112,112,114,116,99,0);
    let verticalS: Array<any> = [898, 740, 104];
    let forwardX: Map<any, any> = new Map([[String.fromCharCode(100,105,103,101,115,116,95,55,95,55,53,0),861], [String.fromCharCode(102,95,57,52,95,117,105,100,115,0),30]]);
    let back1: Map<any, any> = new Map([[String.fromCharCode(106,95,52,53,95,114,116,99,99,0),String.fromCharCode(97,95,57,95,97,100,106,117,115,116,105,110,103,0)], [String.fromCharCode(117,95,56,51,95,112,105,120,100,101,115,99,0),String.fromCharCode(100,95,56,51,95,109,112,101,103,97,117,100,105,111,0)], [String.fromCharCode(119,95,52,95,99,108,111,117,100,0),String.fromCharCode(119,95,52,51,95,112,105,110,99,104,0)]]);
    let rewardvideoH = String.fromCharCode(116,101,109,112,115,95,113,95,50,0);
    let upgradeS = 5.0;
      tooltipsp += parseFloat(`${parseInt(`${tooltipsp}`)}`);
      verticalS.push(1);
   while ((flyerh / (Math.max(tooltipsp, 10))) > 2.23 || (2.23 / (Math.max(1, flyerh))) > 5.33) {
      tooltipsp += (parseFloat(`${2 | (anythinkU ? 1 : 4)}`));
      break;
   }
   if (!Array.from(incidentB.values()).includes(resenda)) {
       let singlec: Map<any, any> = new Map([[String.fromCharCode(105,95,57,52,95,115,116,105,108,108,0),false ], [String.fromCharCode(100,115,104,111,119,95,50,95,50,50,0),true ], [String.fromCharCode(114,95,53,55,95,102,105,108,116,101,114,115,0),false ]]);
       let viewsW = String.fromCharCode(111,95,57,54,95,112,117,98,101,120,112,0);
          let launcher0: Map<any, any> = new Map([[String.fromCharCode(120,95,50,50,95,99,108,117,115,116,101,114,115,0),83], [String.fromCharCode(107,95,57,56,95,99,104,117,110,107,0),848], [String.fromCharCode(107,95,53,57,95,111,117,116,112,117,116,0),597]]);
          let sourceA = String.fromCharCode(109,95,53,56,95,108,111,103,115,116,101,114,101,111,0);
         viewsW = `${(sourceA == String.fromCharCode(112,0) ? viewsW.length : sourceA.length)}`;
         launcher0 = new Map([[`${launcher0.size}`, 1 + launcher0.size]]);
         viewsW += `${(String.fromCharCode(89,0) == viewsW ? singlec.size : viewsW.length)}`;
       let transferH = 2.0;
      if ((viewsW.length | singlec.size) <= 4 && (singlec.size | 4) <= 5) {
         singlec.set(viewsW, viewsW.length);
      }
      while (2 > (singlec.size >> (Math.min(Math.abs(2), 2)))) {
          let znewsa: Array<any> = [969, 8, 934];
          let yellowo: Map<any, any> = new Map([[String.fromCharCode(105,95,55,55,95,99,109,121,107,0),536], [String.fromCharCode(116,102,117,101,108,95,55,95,51,49,0),651], [String.fromCharCode(122,95,57,49,95,102,105,118,101,0),424]]);
          let formZ = 2.0;
         singlec = new Map([[`${znewsa.length}`, znewsa.length / (Math.max(viewsW.length, 8))]]);
         yellowo.set(`${formZ}`, parseInt(`${formZ}`));
         break;
      }
      for (let o = 0; o < 3; o++) {
          let gemfileI = 3;
          let suggestionJ = 1.0;
          let kicks = 2.0;
          let mintegralV = String.fromCharCode(110,111,111,112,95,98,95,56,0);
         viewsW = `${mintegralV.length}`;
         gemfileI >>= Math.min(1, Math.abs(gemfileI - parseInt(`${suggestionJ}`)));
         suggestionJ += parseFloat(`${1 - parseInt(`${suggestionJ}`)}`);
         kicks /= Math.max(parseInt(`${suggestionJ}`), 4);
         mintegralV += `${parseInt(`${suggestionJ}`)}`;
      }
      resenda %= Math.max(verticalS.length, 4);
   }
       let reportX = 2.0;
      for (let a = 0; a < 3; a++) {
          let linkw = String.fromCharCode(120,95,56,52,95,115,117,105,116,101,98,0);
          let plusC: Array<any> = [421, 413, 384];
          let pageX = String.fromCharCode(119,95,57,48,95,108,111,115,115,121,0);
          let buildF = String.fromCharCode(107,95,49,53,95,102,111,117,110,100,97,116,105,111,110,0);
          let blacka = false;
         reportX /= Math.max(4, (String.fromCharCode(89,0) == pageX ? parseInt(`${reportX}`) : pageX.length));
         linkw += `${linkw.length * plusC.length}`;
         plusC.push(buildF.length + linkw.length);
         buildF += `${(buildF == String.fromCharCode(109,0) ? (blacka ? 4 : 5) : buildF.length)}`;
         blacka = linkw.length <= 91 && 91 <= plusC.length;
      }
          let wind7: Map<any, any> = new Map([[String.fromCharCode(115,116,97,114,116,95,48,95,51,49,0),990], [String.fromCharCode(108,95,52,56,95,118,100,101,99,0),878], [String.fromCharCode(114,95,57,49,95,100,114,101,102,0),234]]);
          let hejik: Array<any> = [114, 516, 731];
          let topon3 = String.fromCharCode(105,100,102,118,95,48,95,53,48,0);
         reportX += parseInt(`${reportX}`);
         wind7 = new Map([[`${wind7.size}`, topon3.length]]);
         hejik = [1];
         topon3 += `${wind7.size % 3}`;
          let mintegralv = String.fromCharCode(103,101,116,100,105,103,105,116,95,114,95,52,52,0);
          let recommendationb = true;
         reportX /= Math.max((String.fromCharCode(80,0) == mintegralv ? parseInt(`${reportX}`) : mintegralv.length), 2);
         recommendationb = !recommendationb;
      resenda -= 1;
       let over4: Array<any> = [298, 797];
       let trashW = String.fromCharCode(109,101,109,115,121,115,95,122,95,53,49,0);
       let sigmobo = 0.0;
       let refreshV = 4.0;
      while (1.66 <= sigmobo) {
          let borderlessC = false;
          let ballP = String.fromCharCode(115,101,99,115,95,115,95,49,57,0);
          let sportsr = String.fromCharCode(102,95,50,49,95,101,120,116,101,114,110,0);
         trashW += `${(ballP == String.fromCharCode(56,0) ? ballP.length : parseInt(`${sigmobo}`))}`;
         borderlessC = sportsr.length == 43;
         sportsr = "1";
         break;
      }
      let screenp = trashW == String.fromCharCode(119,122,101,117,109,50,100,110,115,53,0);
      do {
          let descx = false;
          let playlisti = 5.0;
         trashW = `${1 | parseInt(`${playlisti}`)}`;
         descx = (descx ? !descx : !descx);
         playlisti -= ((descx ? 2 : 1));
         if (screenp) {
            break;
         }
      } while (((3 << (Math.min(1, trashW.length))) > 5 && (3 + parseInt(`${refreshV}`)) > 5) && screenp);
         trashW = `${over4.length}`;
       let moviesQ = String.fromCharCode(99,111,108,105,110,101,97,114,95,100,95,53,53,0);
         over4.push(moviesQ.length | 3);
      soundD.push(1 >> (Math.min(1, trashW.length)));
   while (5.17 < (5.99 * flyerh)) {
       let album7: Array<any> = [734, 955, 649];
       let time_bc = String.fromCharCode(115,95,50,52,95,99,98,112,104,105,0);
       let custom8 = false;
         album7 = [((custom8 ? 3 : 5))];
      for (let n = 0; n < 3; n++) {
         time_bc = "2";
      }
         album7 = [time_bc.length];
      while (4 < time_bc.length) {
         time_bc += `${album7.length}`;
         break;
      }
         time_bc += `${(time_bc.length << (Math.min(2, Math.abs((custom8 ? 4 : 3)))))}`;
          let search5 = String.fromCharCode(113,95,53,55,95,97,116,116,101,109,112,116,0);
          let backwardH: Array<any> = [393, 562, 769];
          let trashd = 1.0;
         time_bc += "1";
         search5 = `${parseInt(`${trashd}`) << (Math.min(Math.abs(1), 5))}`;
         backwardH.push(search5.length >> (Math.min(3, backwardH.length)));
         trashd -= 3 + search5.length;
         time_bc += `${album7.length * 1}`;
          let windi = String.fromCharCode(115,112,101,101,100,117,112,95,118,95,49,0);
          let singlea = 3.0;
         album7 = [time_bc.length];
         windi = "3";
         singlea += parseFloat(`${2 << (Math.min(4, windi.length))}`);
          let readG = 5.0;
         custom8 = readG == parseFloat(`${album7.length}`);
      flyerh *= parseFloat(`${2}`);
      break;
   }

    const result = await ttTramini.getUserDetails();

   while (incidentB.get(`${soundD.length}`) != null) {
      incidentB.set(`${anythinkU}`, forwardX.size);
      break;
   }
      firebasen = `${detail1.size}`;
   let fastR = forwardX.size >= 9454892;
   do {
      forwardX.set(`${resenda}`, resenda * 3);
      if (fastR) {
         break;
      }
   } while ((verticalS.length <= 1) && fastR);
   if (1.87 > (1.10 - tooltipsp)) {
       let with_mfn = String.fromCharCode(109,109,99,116,120,95,117,95,54,57,0);
       let canvasC = false;
       let emptyt = String.fromCharCode(99,111,110,115,105,115,116,101,110,99,121,95,99,95,57,49,0);
         canvasC = !with_mfn.startsWith(`${canvasC}`);
      for (let i = 0; i < 2; i++) {
         emptyt = `${with_mfn.length * 2}`;
      }
         canvasC = with_mfn.length < emptyt.length;
         with_mfn += `${emptyt.length ^ 2}`;
         with_mfn = `${((canvasC ? 4 : 1))}`;
      let sportso = canvasC ? !canvasC : canvasC;
      do {
         canvasC = with_mfn.length > 61;
         if (sportso) {
            break;
         }
      } while ((2 < emptyt.length) && sportso);
      while (!canvasC) {
         canvasC = !with_mfn.startsWith(`${canvasC}`);
         break;
      }
      if (with_mfn.length >= 4) {
         canvasC = !with_mfn.endsWith(`${canvasC}`);
      }
      let source7 = with_mfn.length <= 6067179;
      do {
         with_mfn = "2";
         if (source7) {
            break;
         }
      } while (source7 && (canvasC));
      tooltipsp += parseFloat(`${2}`);
   }
   if ((resenda * 2) >= 3) {
      resenda %= Math.max(parseInt(`${tooltipsp}`), 5);
   }
      firebasen = `${back1.size}`;
   let auto_8u = incidentB.size <= 4921081;
   do {
       let entryv = String.fromCharCode(103,99,109,95,120,95,55,51,0);
       let launchb = 4.0;
         launchb *= parseFloat(`${parseInt(`${launchb}`)}`);
       let mbbannert = 5;
       let shootS = 1;
         shootS /= Math.max(2, 4);
          let trashQ = String.fromCharCode(113,95,50,55,95,117,110,108,105,110,107,0);
          let transfer2 = 2.0;
         launchb -= parseFloat(`${parseInt(`${launchb}`)}`);
         trashQ = `${(trashQ == String.fromCharCode(72,0) ? parseInt(`${transfer2}`) : trashQ.length)}`;
         transfer2 -= (parseFloat(`${trashQ == String.fromCharCode(56,0) ? trashQ.length : parseInt(`${transfer2}`)}`));
          let assist8 = 2.0;
         shootS >>= Math.min(Math.abs(mbbannert), 5);
         assist8 += parseFloat(`${parseInt(`${assist8}`)}`);
      for (let u = 0; u < 3; u++) {
         launchb *= parseFloat(`${3}`);
      }
      incidentB.set(`${detail1.size}`, detail1.size % (Math.max(3, incidentB.size)));
      entryv += `${entryv.length}`;
      if (auto_8u) {
         break;
      }
   } while ((Array.from(incidentB.values()).includes(detail1.size)) && auto_8u);
    if (result == null) {

   for (let b = 0; b < 3; b++) {
      resenda <<= Math.min(4, Math.abs(forwardX.size ^ incidentB.size));
   }
   let activityi = back1.size >= 8700551;
   do {
      back1 = new Map([[firebasen, parseInt(`${flyerh}`) - firebasen.length]]);
      if (activityi) {
         break;
      }
   } while ((1 <= subsJ.length) && activityi);
   while (5 < (2 % (Math.max(9, forwardX.size))) || 4 < (2 % (Math.max(10, resenda)))) {
       let t_locks: Array<any> = [867, 206, 957];
       let episodesZ = String.fromCharCode(100,101,112,101,110,100,101,110,99,121,95,103,95,56,57,0);
       let membershipX = 0.0;
       let rightb = 1.0;
       let backgroundB = String.fromCharCode(112,101,114,99,101,110,116,97,103,101,95,105,95,53,51,0);
         episodesZ += `${1 * parseInt(`${membershipX}`)}`;
      if (backgroundB.endsWith(`${t_locks.length}`)) {
         t_locks.push(1 & parseInt(`${rightb}`));
      }
      for (let j = 0; j < 3; j++) {
         rightb -= parseFloat(`${parseInt(`${membershipX}`)}`);
      }
      if ((membershipX + 3.41) == 4.9 && (backgroundB.length / 5) == 3) {
          let incidentk: Array<any> = [711, 12, 81];
          let coreA = 2;
          let renewl = String.fromCharCode(120,95,51,48,95,98,115,116,114,97,99,116,0);
          let settingsu = 2;
         membershipX *= parseFloat(`${t_locks.length}`);
         incidentk.push(1 & incidentk.length);
         coreA ^= coreA;
         renewl += `${1 * renewl.length}`;
         settingsu -= coreA;
      }
      if ((episodesZ.length & 5) >= 3 && 5 >= (5 & episodesZ.length)) {
         t_locks = [2];
      }
      for (let o = 0; o < 2; o++) {
          let internetf: Map<any, any> = new Map([[String.fromCharCode(109,95,50,56,95,109,118,99,111,110,116,101,120,116,115,0),83], [String.fromCharCode(101,120,116,114,97,99,116,105,111,110,95,56,95,54,50,0),726], [String.fromCharCode(108,105,98,112,104,111,110,101,110,117,109,98,101,114,95,110,95,54,0),331]]);
          let actions8 = 2.0;
          let closeh = false;
         rightb -= parseFloat(`${parseInt(`${rightb}`) + 2}`);
         internetf.set(`${closeh}`, (parseInt(`${actions8}`) - (closeh ? 1 : 2)));
         actions8 += parseFloat(`${3 / (Math.max(parseInt(`${actions8}`), 4))}`);
      }
      for (let h = 0; h < 3; h++) {
         episodesZ = `${episodesZ.length | backgroundB.length}`;
      }
      resenda *= parseInt(`${flyerh}`) + 3;
      break;
   }
      incidentB.set(`${anythinkU}`, (3 << (Math.min(3, Math.abs((anythinkU ? 4 : 2))))));
       let accepted0 = false;
         accepted0 = !accepted0;
       let fasts = String.fromCharCode(110,116,101,114,102,97,99,101,95,118,95,49,48,48,0);
       let internetU = String.fromCharCode(114,95,57,54,95,104,102,108,105,112,0);
         accepted0 = (26 <= (internetU.length * (accepted0 ? internetU.length : 26)));
      back1 = new Map([[`${flyerh}`, subsJ.length]]);
   if (firebasen.includes(`${soundD.length}`)) {
      soundD.push(firebasen.length % 1);
   }
   while ((parseFloat(`${forwardX.size}`) + flyerh) == 1.5 && 5.23 == (1.5 + flyerh)) {
      flyerh += parseFloat(`${soundD.length / 3}`);
      break;
   }
      return;
    }

    await dispatch(updateUserAuth(result));

   for (let s = 0; s < 2; s++) {
      tooltipsp += parseFloat(`${2 - parseInt(`${tooltipsp}`)}`);
   }
      tooltipsp *= parseFloat(`${2 * soundD.length}`);
   if (subsJ.includes(`${flyerh}`)) {
      flyerh *= parseFloat(`${back1.size}`);
   }
   for (let x = 0; x < 2; x++) {
      subsJ += `${incidentB.size}`;
   }
   if (2 <= (rewardvideoH.length & 3) && (rewardvideoH.length & 3) <= 2) {
      rewardvideoH = `${verticalS.length}`;
   }
       let screenW = String.fromCharCode(102,105,110,101,95,110,95,56,48,0);
      for (let m = 0; m < 1; m++) {
         screenW = "3";
      }
         screenW += "1";
         screenW += `${screenW.length % (Math.max(6, screenW.length))}`;
      soundD.push(soundD.length);
   for (let b = 0; b < 3; b++) {
      forwardX = new Map([[`${verticalS.length}`, (verticalS.length << (Math.min(3, Math.abs((anythinkU ? 2 : 1)))))]]);
   }
    return;
  };

  return (
    <ScreenContainer>
      <TitleWithBackButtonHeader title="邀请好友奖励" />
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} tintColor="#FAC33D" />
        }
      >
        {/* <TitleWithBackButtonHeader title="邀请好友奖励" /> */}
        <View style={{ paddingHorizontal: 0 }}>
          { }
          <InviteHeader />
          { }
          <InviteCard userState={userState.user!} />
          { }

          <TouchableOpacity activeOpacity={0.85}
            onPress={() => {
              navigation.navigate("活动规则");
            }}
          >
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                paddingVertical: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  textDecorationLine: "underline",
                  color: "#ffffff",
                }}
              >
                活动规则
              </Text>
            </View>
          </TouchableOpacity>
          { }
        </View>
        <InviteStep />
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({});
