import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";
import ScreenContainer from "../../components/container/tt_backward";
import { RootStackScreenProps } from "@type/tt_temperature";
import { useTheme } from "@react-navigation/native";
import { useAppDispatch, useAppSelector } from "@hooks/tt_spec_download";
import { ttOrange } from "@redux/tt_updates_bottom";

import TitleWithBackButtonHeader from "../../components/header/tt_typing_tail_header";
import {
  ttExpired,
  ttStreaming,
} from "@redux/reducers/tt_configure_injury";
import { removeVodsFromHistory, playVod } from "@redux/actions/tt_activity";
import VodHistoryCard from "../../components/vod/tt_country";
import CheckBoxSelected from "@static/images/historyPlayerFloater.svg";
import CheckBoxUnselected from "@static/images/foundWindRecommendation.svg";
import { ttAppsOther } from "@type/tt_line_borderless";
import { Button } from "@rneui/themed";
import ConfirmationModal from "../../components/modal/tt_styles";
import EmptyList from "../../components/common/tt_logo_desc";
import { disableAdultMode, enableAdultMode } from "@redux/actions/tt_copy_heji";

type ttBing = {
  item: ttExpired;
};

export default ({ navigation }: RootStackScreenProps<"播放历史">) => {
  const { colors, textVariants, icons, spacing } = useTheme();
  const dispatch = useAppDispatch();
  const vodReducer: ttStreaming = useAppSelector(
    ({ vodReducer }: ttOrange) => vodReducer
  );
  const history = vodReducer.history;
  const [isEditing, setIsEditing] = useState(false);
  const [removeHistory, setRemoveHistory] = useState<Array<ttAppsOther>>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const textStyles = isEditing
    ? [styles.text, textVariants.body, { marginLeft: 30 }]
    : [styles.text, textVariants.body];
  const toggleOverlay = () => {
       let downloadingB: Array<any> = [313, 892, 691];
    let scheduleQ = String.fromCharCode(110,101,111,110,95,116,95,51,49,0);
    let commonT = true;
    let injuryw = String.fromCharCode(99,97,112,116,117,114,101,116,101,115,116,118,105,100,101,111,95,117,95,57,56,0);
    let dataw = 5.0;
    let clearc: Map<any, any> = new Map([[String.fromCharCode(109,95,57,53,95,103,114,97,110,112,111,115,0),992], [String.fromCharCode(121,95,55,95,100,101,116,101,114,109,105,110,101,0),260], [String.fromCharCode(109,95,54,95,113,100,101,108,116,97,0),114]]);
    let fastforwardV = 3.0;
    let kickQ = 4.0;
    let internet2: Array<any> = [182, 117];
    let homef: Map<any, any> = new Map([[String.fromCharCode(99,116,120,95,55,95,49,56,0),236], [String.fromCharCode(109,95,55,52,95,117,110,105,102,111,114,109,0),59]]);
    let stringsy: Map<any, any> = new Map([[String.fromCharCode(112,95,51,51,95,111,110,116,111,0),true ], [String.fromCharCode(101,100,103,101,95,99,95,50,48,0),false ], [String.fromCharCode(105,110,116,101,114,115,112,101,114,115,101,95,50,95,55,54,0),false ]]);
    let topicM = String.fromCharCode(116,95,53,52,95,120,102,111,114,109,0);
    let bridgel = false;
    let mbsplashF = true;
    let mbnativeadvanced0 = String.fromCharCode(115,116,100,111,117,116,95,48,95,53,52,0);
      stringsy.set(`${fastforwardV}`, parseInt(`${fastforwardV}`));
   if (2.74 < dataw) {
       let shrinkf: Map<any, any> = new Map([[String.fromCharCode(105,110,116,101,114,112,111,108,97,116,101,102,95,113,95,51,56,0),false ], [String.fromCharCode(113,95,50,95,111,114,100,101,114,0),false ], [String.fromCharCode(103,109,104,100,0),true ]]);
       let upgradeC = String.fromCharCode(98,110,109,112,105,95,52,95,53,55,0);
       let default_83k = 0.0;
       let mathB = 1.0;
      while ((shrinkf.size >> (Math.min(Math.abs(5), 2))) == 2 || 3.48 == (default_83k + shrinkf.size)) {
          let share7 = String.fromCharCode(114,95,56,55,95,112,114,111,109,112,101,103,0);
          let sportv = 2;
          let areai = 1.0;
          let tooltipsO = 5;
          let notificationJ = 2.0;
         default_83k /= Math.max(4, share7.length & tooltipsO);
         share7 += `${sportv & parseInt(`${areai}`)}`;
         sportv %= Math.max(4, parseInt(`${areai}`) + sportv);
         tooltipsO -= parseInt(`${notificationJ}`) & 1;
         notificationJ *= parseFloat(`${3}`);
         break;
      }
         upgradeC = "2";
          let expiredf = String.fromCharCode(98,95,53,54,95,116,101,108,101,112,104,111,116,111,0);
          let giftF: Map<any, any> = new Map([[String.fromCharCode(115,101,108,101,99,116,95,109,95,52,53,0),378], [String.fromCharCode(115,97,102,101,115,116,97,99,107,95,53,95,51,49,0),430]]);
          let linea = 3.0;
         mathB += parseInt(`${linea}`);
         expiredf = `${(expiredf == String.fromCharCode(68,0) ? giftF.size : expiredf.length)}`;
         giftF.set(expiredf, 2 + giftF.size);
         linea -= parseFloat(`${giftF.size / (Math.max(5, expiredf.length))}`);
      for (let h = 0; h < 3; h++) {
         upgradeC += `${parseInt(`${default_83k}`) / 3}`;
      }
      for (let j = 0; j < 2; j++) {
         default_83k *= (upgradeC == String.fromCharCode(68,0) ? shrinkf.size : upgradeC.length);
      }
      let clockd = 9081776.0 <= default_83k;
      do {
         default_83k *= upgradeC.length;
         if (clockd) {
            break;
         }
      } while ((upgradeC.endsWith(`${default_83k}`)) && clockd);
         shrinkf.set(`${mathB}`, parseInt(`${mathB}`) ^ shrinkf.size);
      if (3.43 < (4.22 - mathB) && (4.22 - mathB) < 1.98) {
          let interneti = 5.0;
          let private__wj = 4;
          let dnewinterstitialo = false;
          let gifta = false;
          let shrinkP = false;
         shrinkf = new Map([[`${shrinkf.size}`, 2]]);
         interneti += 2;
         private__wj /= Math.max(4, (parseInt(`${interneti}`) | (dnewinterstitialo ? 3 : 5)));
         gifta = dnewinterstitialo;
         shrinkP = gifta;
      }
      for (let j = 0; j < 1; j++) {
          let borderlessc = String.fromCharCode(116,95,57,52,95,102,108,101,120,105,98,108,101,0);
          let emptyS = String.fromCharCode(109,95,57,56,95,112,114,111,114,101,115,100,97,116,97,0);
          let nalyticsS = String.fromCharCode(108,95,54,53,95,110,118,99,0);
         default_83k *= parseInt(`${default_83k}`);
         borderlessc += "1";
         emptyS += `${emptyS.length * 2}`;
         nalyticsS = `${nalyticsS.length << (Math.min(Math.abs(3), 5))}`;
      }
         shrinkf = new Map([[`${shrinkf.size}`, parseInt(`${mathB}`)]]);
      if (default_83k <= upgradeC.length) {
         default_83k += upgradeC.length | shrinkf.size;
      }
         upgradeC = `${parseInt(`${default_83k}`) << (Math.min(3, Math.abs(parseInt(`${mathB}`))))}`;
      kickQ /= Math.max(3, internet2.length << (Math.min(Math.abs(1), 5)));
   }
   let bottomM = fastforwardV <= 6688522.0;
   do {
       let rewardvideo2: Array<any> = [257, 200];
       let robotoF = 4;
       let zoom2: Map<any, any> = new Map([[String.fromCharCode(109,95,57,55,95,100,111,119,110,119,97,114,100,0),489], [String.fromCharCode(118,101,99,116,111,114,115,99,111,112,101,95,103,95,50,51,0),727], [String.fromCharCode(117,95,56,50,95,118,97,114,105,97,110,99,101,120,0),295]]);
      while ((zoom2.size - rewardvideo2.length) == 1 && 5 == (rewardvideo2.length - 1)) {
         zoom2 = new Map([[`${zoom2.size}`, 3]]);
         break;
      }
       let wnewinterstitial6 = String.fromCharCode(108,105,98,119,101,98,112,101,110,99,95,54,95,51,57,0);
       let layoutn = String.fromCharCode(114,101,113,117,101,115,116,95,110,95,49,54,0);
         robotoF %= Math.max(2, layoutn.length);
          let brightnessr = 2.0;
         robotoF += layoutn.length;
         brightnessr *= 2;
      if (wnewinterstitial6.length > layoutn.length) {
         layoutn = `${robotoF / (Math.max(layoutn.length, 7))}`;
      }
      if (5 <= (zoom2.size & robotoF)) {
          let confirmationm = true;
          let ewardedd = 0;
         robotoF ^= (layoutn == String.fromCharCode(97,0) ? layoutn.length : ewardedd);
         confirmationm = !confirmationm || !confirmationm;
         ewardedd *= ((confirmationm ? 2 : 1));
      }
          let singlep = String.fromCharCode(97,95,49,48,95,111,102,102,108,111,97,100,0);
          let with_yvS = 4.0;
         zoom2 = new Map([[`${zoom2.size}`, wnewinterstitial6.length & zoom2.size]]);
         singlep += `${(String.fromCharCode(88,0) == singlep ? singlep.length : parseInt(`${with_yvS}`))}`;
         with_yvS *= parseFloat(`${singlep.length}`);
      for (let v = 0; v < 3; v++) {
         rewardvideo2 = [zoom2.size * layoutn.length];
      }
       let singleF = String.fromCharCode(102,111,108,108,111,119,101,114,95,55,95,56,54,0);
       let robotoM = String.fromCharCode(114,101,113,117,105,114,105,110,103,0);
      fastforwardV /= Math.max(1, 2 & internet2.length);
      if (bottomM) {
         break;
      }
   } while ((!injuryw.endsWith(`${fastforwardV}`)) && bottomM);
      clearc = new Map([[injuryw, injuryw.length]]);
   let canvas_ = kickQ >= 9887302.0;
   do {
      kickQ /= Math.max(3, 3);
      if (canvas_) {
         break;
      }
   } while (canvas_ && ((dataw / (Math.max(5, kickQ))) >= 1.63 || (dataw / (Math.max(1.63, 7))) >= 1.97));
       let overD = true;
         overD = !overD;
         overD = overD || !overD;
      let formh = overD ? !overD : overD;
      do {
         overD = !overD || !overD;
         if (formh) {
            break;
         }
      } while (formh && (!overD && !overD));
      scheduleQ += `${stringsy.size % (Math.max(2, 4))}`;
      scheduleQ += `${internet2.length * injuryw.length}`;
   let expand8 = 9573041.0 <= fastforwardV;
   do {
       let middlev = String.fromCharCode(97,116,114,97,99,95,110,95,53,50,0);
       let downloadere = 0.0;
          let constants4 = 3.0;
          let fill9 = 3.0;
          let stringL = String.fromCharCode(109,118,115,97,100,95,116,95,57,48,0);
         middlev = `${middlev.length}`;
         constants4 += stringL.length;
         fill9 *= 3 ^ parseInt(`${fill9}`);
         stringL += `${parseInt(`${fill9}`) + parseInt(`${constants4}`)}`;
       let configureS = 3.0;
       let checkboxq = 3.0;
      while (5.2 >= (configureS / (Math.max(8, downloadere)))) {
         configureS += parseFloat(`${parseInt(`${downloadere}`)}`);
         break;
      }
      let analyticsa = 8227519 <= middlev.length;
      do {
          let minivodH = false;
          let saveU: Map<any, any> = new Map([[String.fromCharCode(100,95,51,56,95,117,110,114,101,109,111,118,97,98,108,101,0),404], [String.fromCharCode(122,95,50,57,95,97,108,112,104,97,110,117,109,101,114,105,99,115,0),937]]);
          let selectT = 0;
          let t_viewH = String.fromCharCode(97,112,112,114,111,120,105,109,97,116,111,114,95,50,95,53,51,0);
         middlev += `${parseInt(`${downloadere}`) / (Math.max(1, 2))}`;
         minivodH = saveU.size == 96 || !minivodH;
         saveU = new Map([[`${saveU.size}`, 2 * saveU.size]]);
         selectT |= 3;
         t_viewH = "2";
         if (analyticsa) {
            break;
         }
      } while (analyticsa && ((parseInt(`${checkboxq}`) * middlev.length) == 3 && 3 == (parseInt(`${checkboxq}`) * middlev.length)));
          let twitters = 3;
          let verticalB = 0.0;
         configureS -= parseFloat(`${parseInt(`${configureS}`) & 2}`);
         twitters %= Math.max(twitters, 4);
         verticalB /= Math.max(parseFloat(`${twitters % 1}`), 4);
      let routerH = configureS >= 6379475.0;
      do {
          let telegramk = 1.0;
          let borderlessb = 1.0;
          let mbridger: Array<any> = [457, 276];
          let hover4 = false;
         configureS -= parseFloat(`${3}`);
         telegramk /= Math.max(2, parseInt(`${telegramk}`) | 1);
         borderlessb -= parseInt(`${telegramk}`) + 1;
         mbridger.push((parseInt(`${borderlessb}`) ^ (hover4 ? 4 : 3)));
         hover4 = !hover4;
         if (routerH) {
            break;
         }
      } while ((5.34 < (downloadere / 4)) && routerH);
      fastforwardV *= 3;
      if (expand8) {
         break;
      }
   } while ((5 == (1 + parseInt(`${fastforwardV}`)) && 2.35 == (3.50 + fastforwardV)) && expand8);
   while (clearc.size < 1) {
      clearc.set(`${fastforwardV}`, homef.size / 1);
      break;
   }
   for (let z = 0; z < 2; z++) {
       let anner9: Map<any, any> = new Map([[String.fromCharCode(99,95,49,55,95,103,101,116,112,101,101,114,97,100,100,114,0),155], [String.fromCharCode(98,97,115,105,115,95,116,95,49,50,0),919], [String.fromCharCode(114,101,115,116,97,107,101,95,122,95,55,57,0),862]]);
       let brightnessR = 2.0;
       let temperature_: Map<any, any> = new Map([[String.fromCharCode(106,111,105,110,101,114,0),true ], [String.fromCharCode(102,114,97,99,116,105,111,110,97,108,95,122,95,56,57,0),true ]]);
       let liveN = false;
      for (let h = 0; h < 2; h++) {
          let d_managerj = 3.0;
          let spinnerk: Map<any, any> = new Map([[String.fromCharCode(120,95,50,56,95,105,108,98,99,0),992], [String.fromCharCode(114,101,99,111,114,100,95,105,95,57,51,0),561], [String.fromCharCode(109,97,114,103,105,110,95,102,95,50,51,0),687]]);
          let leagueU = 4;
         anner9.set(`${leagueU}`, 1 + parseInt(`${brightnessR}`));
         d_managerj -= parseFloat(`${spinnerk.size}`);
         spinnerk = new Map([[`${spinnerk.size}`, spinnerk.size]]);
         leagueU <<= Math.min(Math.abs(2 / (Math.max(5, spinnerk.size))), 4);
      }
      while ((4 ^ anner9.size) > 5) {
         brightnessR *= parseFloat(`${parseInt(`${brightnessR}`) * 2}`);
         break;
      }
      if (liveN) {
          let updates8 = 4.0;
          let crossR: Array<any> = [555, 197, 601];
         liveN = crossR.length <= 3 || 3 <= temperature_.size;
         updates8 *= 1 | parseInt(`${updates8}`);
         crossR.push(parseInt(`${updates8}`) | 3);
      }
         temperature_ = new Map([[`${temperature_.size}`, anner9.size]]);
      if (!liveN) {
         liveN = anner9.size <= 17;
      }
         liveN = brightnessR < 98.63 && 71 < temperature_.size;
      let brightnessn = 8661393.0 <= brightnessR;
      do {
          let type__gZ = String.fromCharCode(104,95,56,95,115,117,112,112,111,114,116,101,100,0);
          let editV = String.fromCharCode(97,99,111,109,112,114,101,115,115,111,114,95,52,95,53,0);
         brightnessR += parseFloat(`${temperature_.size - 2}`);
         type__gZ = `${(String.fromCharCode(49,0) == editV ? type__gZ.length : editV.length)}`;
         if (brightnessn) {
            break;
         }
      } while ((brightnessR == parseFloat(`${temperature_.size}`)) && brightnessn);
      for (let n = 0; n < 3; n++) {
         brightnessR /= Math.max(1, parseFloat(`${anner9.size << (Math.min(Math.abs(3), 3))}`));
      }
      homef = new Map([[`${anner9.size}`, 3]]);
   }
   let dplusD = stringsy.size >= 6274033;
   do {
      stringsy = new Map([[injuryw, 2]]);
      if (dplusD) {
         break;
      }
   } while (dplusD && (Array.from(stringsy.values()).includes(fastforwardV)));
      scheduleQ += `${(String.fromCharCode(118,0) == scheduleQ ? clearc.size : scheduleQ.length)}`;
   while (Array.from(clearc.values()).includes(stringsy.size)) {
       let clearY: Map<any, any> = new Map([[String.fromCharCode(115,99,97,110,105,110,100,101,120,95,109,95,55,53,0),601], [String.fromCharCode(112,115,110,114,120,95,56,95,56,50,0),829]]);
       let formM = 4.0;
       let anner3 = true;
       let downloadingw = String.fromCharCode(118,95,55,53,95,109,117,108,116,105,101,110,100,0);
       let change5 = String.fromCharCode(97,107,105,100,95,98,95,53,0);
         clearY = new Map([[change5, downloadingw.length]]);
         clearY = new Map([[`${clearY.size}`, (change5 == String.fromCharCode(72,0) ? clearY.size : change5.length)]]);
          let redirectG: Map<any, any> = new Map([[String.fromCharCode(120,95,56,50,95,109,98,108,111,99,107,0),String.fromCharCode(103,101,116,112,101,101,114,97,100,100,114,95,122,95,53,53,0)], [String.fromCharCode(102,95,50,95,100,117,109,0),String.fromCharCode(122,95,50,55,95,105,109,103,117,116,105,108,115,0)], [String.fromCharCode(108,111,103,115,116,101,114,101,111,95,121,95,50,50,0),String.fromCharCode(111,95,50,52,95,116,101,120,105,112,111,100,0)]]);
          let combinedk = String.fromCharCode(115,117,109,102,95,50,95,57,55,0);
          let filedr = 5.0;
         clearY = new Map([[combinedk, combinedk.length]]);
         redirectG = new Map([[`${redirectG.size}`, parseInt(`${filedr}`) << (Math.min(Math.abs(redirectG.size), 3))]]);
         filedr -= parseInt(`${filedr}`) + redirectG.size;
      for (let z = 0; z < 1; z++) {
         formM += 2 & parseInt(`${formM}`);
      }
         downloadingw = `${(parseInt(`${formM}`) ^ (anner3 ? 2 : 1))}`;
      let progressF = String.fromCharCode(121,56,119,48,98,102,101,121,0) == downloadingw;
      do {
         downloadingw = `${3 >> (Math.min(3, downloadingw.length))}`;
         if (progressF) {
            break;
         }
      } while (progressF && (!anner3));
         downloadingw += `${clearY.size}`;
         downloadingw += "1";
         clearY.set(`${anner3}`, clearY.size - 2);
      if (3 > downloadingw.length || !anner3) {
         downloadingw += `${3 >> (Math.min(4, change5.length))}`;
      }
      let buildr = formM <= 6256505.0;
      do {
         formM /= Math.max(3, change5.length);
         if (buildr) {
            break;
         }
      } while (buildr && (3 < clearY.size));
         anner3 = (clearY.size & downloadingw.length) <= 48;
         formM -= downloadingw.length;
         anner3 = downloadingw.length >= clearY.size;
       let type_n1: Map<any, any> = new Map([[String.fromCharCode(116,105,112,95,116,95,55,49,0),false ], [String.fromCharCode(119,101,105,103,104,116,95,114,95,49,56,0),true ]]);
       let settings1: Map<any, any> = new Map([[String.fromCharCode(103,95,51,56,95,97,117,116,111,99,108,101,97,114,0),String.fromCharCode(122,95,50,54,95,104,121,115,116,101,114,101,115,105,115,0)], [String.fromCharCode(114,101,115,111,117,114,99,101,95,103,95,51,54,0),String.fromCharCode(110,111,110,110,117,108,108,107,101,121,99,104,97,105,110,95,110,95,50,52,0)], [String.fromCharCode(101,95,54,51,95,115,97,109,112,108,101,114,97,116,101,115,0),String.fromCharCode(106,95,50,55,95,99,111,108,120,0)]]);
      clearc = new Map([[`${clearY.size}`, parseInt(`${fastforwardV}`) + clearY.size]]);
      break;
   }
   let bufferm = 6185356.0 >= kickQ;
   do {
      kickQ += parseInt(`${fastforwardV}`) & injuryw.length;
      if (bufferm) {
         break;
      }
   } while (bufferm && ((4 * scheduleQ.length) <= 1));
   for (let n = 0; n < 1; n++) {
      stringsy = new Map([[`${stringsy.size}`, stringsy.size]]);
   }
      stringsy = new Map([[`${homef.size}`, homef.size | parseInt(`${fastforwardV}`)]]);
   while ((clearc.size % (Math.max(injuryw.length, 1))) == 3) {
       let applicationE = 0;
       let telegram1 = true;
       let actionsI = true;
       let refreshz = 4;
       let sportc = 0.0;
          let confirmation2 = 3.0;
         refreshz %= Math.max(5, 3);
         confirmation2 += parseInt(`${confirmation2}`);
         refreshz &= ((actionsI ? 4 : 5));
         refreshz *= parseInt(`${sportc}`) & 2;
      while ((4 - applicationE) <= 1) {
          let untickk = 1;
          let awayx = String.fromCharCode(97,98,98,114,0);
         applicationE += (refreshz & (actionsI ? 2 : 5));
         untickk -= awayx.length;
         awayx += `${untickk}`;
         break;
      }
      if ((applicationE * 2) == 1) {
          let statsK: Map<any, any> = new Map([[String.fromCharCode(98,95,55,51,95,102,116,118,110,111,100,101,0),String.fromCharCode(111,95,56,54,95,114,101,100,100,105,116,0)], [String.fromCharCode(112,95,57,49,95,97,115,107,0),String.fromCharCode(109,95,54,95,121,117,118,112,108,0)], [String.fromCharCode(116,97,103,110,99,111,109,112,97,114,101,95,107,95,54,51,0),String.fromCharCode(112,111,115,116,95,114,95,50,52,0)]]);
          let heartr = 2;
          let hoverC: Map<any, any> = new Map([[String.fromCharCode(113,95,51,54,95,111,98,117,115,0),120], [String.fromCharCode(107,95,56,53,95,114,101,108,97,121,115,0),851]]);
          let tumbnail_ = String.fromCharCode(99,108,111,115,101,95,110,95,57,50,0);
         applicationE -= heartr;
         statsK.set(`${hoverC.size}`, 1);
         heartr += tumbnail_.length;
         hoverC.set(`${statsK.size}`, hoverC.size / (Math.max(2, 6)));
         tumbnail_ += "3";
      }
          let nalyticsN = String.fromCharCode(99,95,56,54,95,115,119,97,112,0);
         telegram1 = sportc < 31.69 || String.fromCharCode(77,0) == nalyticsN;
         refreshz >>= Math.min(Math.abs(applicationE), 3);
      if (actionsI) {
          let stationg = 5;
          let listp = String.fromCharCode(121,95,53,49,95,98,114,97,99,107,101,116,0);
          let backq = String.fromCharCode(118,95,50,53,95,105,110,110,100,101,114,0);
          let expand0: Array<any> = [975, 690];
         telegram1 = !actionsI || 98 > refreshz;
         stationg <<= Math.min(3, Math.abs(expand0.length / 3));
         listp += `${backq.length / (Math.max(3, 7))}`;
         backq += `${(String.fromCharCode(76,0) == listp ? listp.length : expand0.length)}`;
      }
         applicationE += refreshz;
         telegram1 = actionsI;
         applicationE += (applicationE % (Math.max(8, (telegram1 ? 4 : 1))));
      let splashm = telegram1 ? !telegram1 : telegram1;
      do {
         telegram1 = 97.54 < sportc;
         if (splashm) {
            break;
         }
      } while ((1 >= (4 | refreshz)) && splashm);
      let plus2 = 6290674 <= applicationE;
      do {
          let sentrye = String.fromCharCode(114,95,53,53,95,118,99,120,112,114,111,106,0);
          let currentV: Map<any, any> = new Map([[String.fromCharCode(111,95,56,57,95,108,105,116,116,108,101,0),490], [String.fromCharCode(102,105,114,101,119,97,108,108,95,49,95,49,52,0),269]]);
          let combined7 = String.fromCharCode(118,97,108,117,101,115,95,120,95,51,52,0);
          let layout0 = String.fromCharCode(112,114,101,100,114,97,119,110,0);
         applicationE <<= Math.min(Math.abs((applicationE ^ (telegram1 ? 3 : 5))), 5);
         sentrye = `${(String.fromCharCode(118,0) == combined7 ? layout0.length : combined7.length)}`;
         currentV = new Map([[sentrye, 2]]);
         layout0 += `${1 ^ combined7.length}`;
         if (plus2) {
            break;
         }
      } while ((!telegram1) && plus2);
      while ((sportc / (Math.max(1.80, 10))) == 1.82 && !telegram1) {
         telegram1 = refreshz < 37;
         break;
      }
         telegram1 = !telegram1;
      injuryw += `${(parseInt(`${sportc}`) << (Math.min(5, Math.abs((actionsI ? 4 : 5)))))}`;
      break;
   }
   while ((5 - internet2.length) >= 4 && 5 >= (internet2.length - 5)) {
      homef.set(`${commonT}`, ((commonT ? 5 : 3) ^ injuryw.length));
      break;
   }
      kickQ -= parseInt(`${fastforwardV}`);
      injuryw += `${(internet2.length ^ (commonT ? 3 : 2))}`;
   if (3.52 <= (fastforwardV - stringsy.size)) {
      stringsy = new Map([[`${stringsy.size}`, 1]]);
   }
   while (downloadingB.includes(kickQ)) {
      downloadingB.push(3 << (Math.min(Math.abs(parseInt(`${kickQ}`)), 3)));
      break;
   }
       let referrerw = String.fromCharCode(122,95,57,50,0);
       let time_6t1: Array<any> = [String.fromCharCode(112,108,117,115,0), String.fromCharCode(112,111,115,116,101,114,115,95,112,95,53,0)];
      if (2 >= (3 ^ time_6t1.length) && 4 >= (referrerw.length ^ 3)) {
         referrerw = `${time_6t1.length - referrerw.length}`;
      }
       let orientation3 = 3.0;
      clearc.set(scheduleQ, downloadingB.length / (Math.max(scheduleQ.length, 4)));
       let ewardedl = String.fromCharCode(114,119,103,116,95,115,95,49,0);
       let blacklistP = String.fromCharCode(111,119,110,101,114,115,0);
       let untickm = String.fromCharCode(117,112,103,114,97,100,101,115,95,52,95,53,55,0);
       let settingsq: Array<any> = [720, 258, 269];
          let match9 = true;
         blacklistP = `${((match9 ? 2 : 1) + settingsq.length)}`;
         blacklistP = `${ewardedl.length + 3}`;
      let container9 = String.fromCharCode(111,112,56,107,118,49,51,97,103,0) == blacklistP;
      do {
         blacklistP = `${blacklistP.length}`;
         if (container9) {
            break;
         }
      } while (container9 && (ewardedl != blacklistP));
       let disconnectedq = String.fromCharCode(100,105,114,101,99,116,105,111,110,97,108,95,51,95,51,52,0);
       let langkeyq = String.fromCharCode(99,111,110,116,114,111,108,108,101,114,115,0);
          let tickQ = String.fromCharCode(115,118,113,101,110,99,95,106,95,50,53,0);
          let i_imageb = String.fromCharCode(110,111,116,105,99,101,115,95,122,95,52,55,0);
         ewardedl = `${langkeyq.length}`;
         tickQ = `${tickQ.length}`;
         i_imageb += `${i_imageb.length}`;
         untickm += `${disconnectedq.length | 3}`;
       let rightz = String.fromCharCode(97,95,53,57,95,97,118,103,120,0);
      for (let o = 0; o < 1; o++) {
          let langH = String.fromCharCode(113,112,113,115,99,97,108,101,95,111,95,51,52,0);
          let combinel = 3;
         rightz = `${rightz.length}`;
         langH += `${combinel % (Math.max(3, 3))}`;
         combinel >>= Math.min(Math.abs((String.fromCharCode(109,0) == langH ? combinel : langH.length)), 3);
      }
      clearc = new Map([[`${homef.size}`, 1 - homef.size]]);
   while (2.45 > (fastforwardV * 3.56)) {
      commonT = injuryw.length < kickQ;
      break;
   }

    setIsDialogOpen(!isDialogOpen);
  };

  const toggleHistory = (vod: ttAppsOther) => {
    const filtered = removeHistory.filter((x) => x.vod_id !== vod.vod_id);
    if (filtered.length === removeHistory.length) {
      setRemoveHistory([vod, ...removeHistory]);
    } else {
      setRemoveHistory(filtered);
    }
  };
  let data = history;

  const today = new Date(); 

  let customHistoryToday: any = [];
  let customHistoryEarly: any = [];

  data.forEach((item) => {
    const recordedAt = new Date(item.recordedAt);
    if (
      recordedAt.toISOString().split("T")[0] ===
      today.toISOString().split("T")[0]
    ) {
      customHistoryToday.push(item);
    } else {
      customHistoryEarly.push(item);
    }
  });

  
  

  
  
  return (
    <ScreenContainer>
      <TitleWithBackButtonHeader
        title="播放历史"
        right={
          <TouchableOpacity
            onPress={() => {
              setIsEditing(!isEditing);
              setRemoveHistory([]);
            }}
          >
            <Text
              style={{
                ...textVariants.body,
                
                opacity: history && history.length > 0 ? 100 : 0,
              }}
            >
              {isEditing ? "取消" : "编辑"}
            </Text>
          </TouchableOpacity>
        }
        
      />
      {history && history.length > 0 ? (
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          {customHistoryToday.length > 0 && (
            <>
              <View style={{ marginBottom: 10 }}>
                <Text style={textStyles}>今日</Text>
                {customHistoryToday.map(
                  (item: ttExpired, index: number) => (
                    <View style={styles.card} key={index}>
                      {isEditing && (
                        <TouchableOpacity
                          style={styles.checkbox}
                          onPress={() => toggleHistory(item)}
                        >
                          {removeHistory.some(
                            (x) => x.vod_id === item.vod_id
                          ) ? (
                            <CheckBoxSelected
                              height={icons.sizes.m}
                              width={icons.sizes.m}
                            />
                          ) : (
                            <CheckBoxUnselected
                              height={icons.sizes.m}
                              width={icons.sizes.m}
                            />
                          )}
                        </TouchableOpacity>
                      )}
                      <VodHistoryCard
                        activeOpacity={isEditing ? 1 : 0.2}
                        vod={item}
                        onPress={() => {
                          if (isEditing) {
                            toggleHistory(item);
                          } else {
                            if (item.isAdultVideo){
                              dispatch(playVod(item));
                              navigation.navigate("播放", {
                                vod_id: item.vod_id,
                                player_mode: 'adult'
                              });
                              dispatch(enableAdultMode())
                            }
                            else {
                              dispatch(playVod(item));
                              navigation.navigate("播放", {
                                vod_id: item.vod_id,
                              });
                              dispatch(disableAdultMode())
                            }
                          }
                        }}
                      />
                    </View>
                  )
                )}
              </View>
            </>
          )}

          {customHistoryEarly.length > 0 && (
            <>
              <Text style={textStyles}>更早</Text>
              {customHistoryEarly.map((item: ttExpired, index: number) => (
                <View style={styles.card} key={index}>
                  {isEditing && (
                    <TouchableOpacity
                      style={styles.checkbox}
                      onPress={() => toggleHistory(item)}
                    >
                      {removeHistory.some((x) => x.vod_id === item.vod_id) ? (
                        <CheckBoxSelected
                          height={icons.sizes.m}
                          width={icons.sizes.m}
                        />
                      ) : (
                        <CheckBoxUnselected
                          height={icons.sizes.m}
                          width={icons.sizes.m}
                        />
                      )}
                    </TouchableOpacity>
                  )}
                  <VodHistoryCard
                    activeOpacity={isEditing ? 1 : 0.2}
                    vod={item}
                    onPress={() => {
                      if (isEditing) {
                        toggleHistory(item);
                      } else {
                        if (item.isAdultVideo){
                          dispatch(playVod(item));
                          navigation.navigate("播放", {
                            vod_id: item.vod_id,
                            player_mode: 'adult'
                          });
                          dispatch(enableAdultMode())
                        }
                        else {
                          dispatch(playVod(item));
                          navigation.navigate("播放", {
                            vod_id: item.vod_id,
                          });
                          dispatch(disableAdultMode())
                        }
                      }
                    }}
                  />
                </View>
              ))}
            </>
          )}
        </ScrollView>
      ) : (
        <EmptyList description="暂无播放历史" />
      )}
      <ConfirmationModal
        onConfirm={() => {
          dispatch(removeVodsFromHistory(removeHistory));
          setIsEditing(false);
          setRemoveHistory([]);
          toggleOverlay();
        }}
        onCancel={toggleOverlay}
        isVisible={isDialogOpen}
        title="清除提示"
        subtitle="您是否确定清除播放历史吗？"
      />
      {isEditing && (
        <View style={styles.deleteConfirmationModal}>
          <Button
            onPress={() => {
              if (
                removeHistory.length === 0 ||
                removeHistory.length !== history.length
              ) {
                setRemoveHistory(vodReducer.history);
              } else {
                setRemoveHistory([]);
              }
            }}
            containerStyle={styles.confirmationBtn}
            color={colors.card2}
            titleStyle={{ ...textVariants.body, color: colors.muted }}
          >
            {removeHistory.length === 0 ||
            removeHistory.length !== history.length
              ? "全选"
              : "取消全选"}
          </Button>
          <Button
            onPress={() => {
              if (removeHistory.length > 0) {
                toggleOverlay();
              }
            }}
            containerStyle={styles.confirmationBtn}
            color={removeHistory.length === 0 ? colors.card2 : colors.primary}
            titleStyle={{
              ...textVariants.body,
              color:
                removeHistory.length === 0 ? colors.muted : colors.background,
            }}
          >
            删除
          </Button>
        </View>
      )}
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    paddingBottom: 30,
  },
  card: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  checkbox: {
    padding: 5,
  },
  deleteConfirmationModal: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 8,
  },
  confirmationBtn: {
    flex: 1,
    margin: 10,
    borderRadius: 10,
    marginTop: 8,
  },
  text: {
    flexShrink: 1,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 3,
    paddingBottom: 10,
  },
});
