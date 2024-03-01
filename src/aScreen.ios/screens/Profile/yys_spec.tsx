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
import ScreenContainer from "../../components/container/yys_executor_expand";
import { RootStackScreenProps } from "@type/yys_settings";
import { useTheme } from "@react-navigation/native";
import { yys_MintegralLibavdevice } from "@redux/yys_sport_shrink";

import TitleWithBackButtonHeader from "../../components/header/yys_anner_header";
import axios from "axios";
import { Keyboard } from "react-native";
import {
  API_DOMAIN,
  API_DOMAIN_TEST,
  API_DOMAIN_LOCAL,
} from "@utility/yys_ajax_switch";
import NetInfo, { NetInfoState } from "@react-native-community/netinfo";

import InviteStep from "./../../components/invite/yys_gradle_libreanimated";
import InviteCard from "./../../components/invite/yys_temp";

import InviteHeader from "./../../components/invite/yys_catalog_textlayoutmanager_header";
import { useAppDispatch, useAppSelector, useSelector } from "@hooks/yys_frame";
import { TouchableOpacity } from "@gorhom/bottom-sheet";
import { updateUserAuth } from "@redux/actions/yys_gesture";
import yys_event_common from "../../../../Umeng/yys_event_common";
import { yys_GesturesConst } from "@api";
import { yys_HejiCricket } from "@redux/reducers/yys_privacy_round";


export default ({ navigation }: RootStackScreenProps<"邀请">) => {
  const { colors, textVariants, icons, spacing } = useTheme();

  const userState = useSelector<yys_HejiCricket>('userReducer');

  const [refreshing, setRefreshing] = useState(false);
  const dispatch = useAppDispatch();

  
  useEffect(() => {
    yys_event_common.userCenterVipInviteViewsAnalytics();
  }, []);
  

  const handleRefresh = async () => {
       let brightnessC = 0.0;
    let dycreatoru = false;
    let send2: Array<any> = [String.fromCharCode(111,103,103,108,101,95,49,95,50,55,0), String.fromCharCode(102,95,56,50,95,104,111,108,100,105,110,103,0), String.fromCharCode(109,95,56,53,95,97,100,100,105,116,105,111,110,0)];
    let iconI = 5;
    let event1 = String.fromCharCode(115,116,114,115,101,112,95,112,95,51,55,0);
    let combineU: Array<any> = [String.fromCharCode(99,95,54,54,95,106,117,109,112,0), String.fromCharCode(102,95,51,56,95,102,97,97,110,100,99,116,0), String.fromCharCode(102,111,117,114,99,99,115,95,115,95,51,57,0)];
    let plashu = String.fromCharCode(100,95,56,51,95,114,101,99,116,0);
    let favicond = 4.0;
    let arrow0 = 5;
   for (let t = 0; t < 1; t++) {
      send2 = [event1.length];
   }
      dycreatoru = send2.includes(iconI);
   let libreactn = 6760619.0 <= brightnessC;
   do {
      brightnessC /= Math.max(parseFloat(`${3 | send2.length}`), 4);
      if (libreactn) {
         break;
      }
   } while (libreactn && (2.90 <= (brightnessC / 4.59)));
   for (let t = 0; t < 2; t++) {
      combineU.push(send2.length * 1);
   }
      send2 = [(parseInt(`${brightnessC}`) & (dycreatoru ? 5 : 1))];
   while (1 > (event1.length - parseInt(`${brightnessC}`)) && (brightnessC - parseFloat(`${event1.length}`)) > 2.83) {
      brightnessC /= Math.max(2, parseFloat(`${3 & event1.length}`));
      break;
   }
      send2.push(2);
   if (4 <= (send2.length ^ iconI)) {
       let nterstitialD = String.fromCharCode(116,95,54,54,95,110,99,114,121,112,116,105,111,110,0);
          let floaterQ = false;
         nterstitialD += `${((floaterQ ? 1 : 2) & nterstitialD.length)}`;
         nterstitialD += `${3 << (Math.min(2, nterstitialD.length))}`;
      while (nterstitialD != String.fromCharCode(109,0)) {
          let networkm: Array<any> = [187, 360];
          let viewerO = String.fromCharCode(105,95,49,95,115,117,98,100,97,116,97,0);
          let modalA = 0.0;
         nterstitialD = `${3 << (Math.min(5, nterstitialD.length))}`;
         networkm.push(viewerO.length / (Math.max(1, 7)));
         viewerO += `${2 << (Math.min(2, viewerO.length))}`;
         modalA += parseFloat(`${viewerO.length - 3}`);
         break;
      }
      send2 = [event1.length % 1];
   }
       let libavfilterg = String.fromCharCode(117,95,57,54,0);
       let reducerd = String.fromCharCode(108,95,54,48,95,107,101,121,112,97,116,104,115,0);
       let results: Array<any> = [320, 399, 443];
         libavfilterg += `${(String.fromCharCode(56,0) == reducerd ? reducerd.length : results.length)}`;
         results.push(results.length << (Math.min(Math.abs(3), 4)));
         reducerd += `${results.length ^ reducerd.length}`;
      let alertI = 5929614 >= results.length;
      do {
         results = [3 + reducerd.length];
         if (alertI) {
            break;
         }
      } while (alertI && ((libavfilterg.length << (Math.min(1, results.length))) >= 4));
          let uimanagerZ: Map<any, any> = new Map([[String.fromCharCode(116,111,97,115,116,95,53,95,54,51,0),true ], [String.fromCharCode(117,95,52,54,95,117,116,118,105,100,101,111,100,115,112,0),false ]]);
          let ajaxD = String.fromCharCode(106,95,51,57,95,99,97,98,97,99,0);
          let become6 = false;
         libavfilterg = `${(libavfilterg == String.fromCharCode(98,0) ? uimanagerZ.size : libavfilterg.length)}`;
         uimanagerZ.set(`${become6}`, ((become6 ? 3 : 3)));
         ajaxD += `${3 + ajaxD.length}`;
         reducerd += `${results.length}`;
         results.push(1 | reducerd.length);
      if (5 >= (reducerd.length / (Math.max(6, results.length))) && (results.length / (Math.max(reducerd.length, 10))) >= 5) {
         results = [(reducerd == String.fromCharCode(79,0) ? results.length : reducerd.length)];
      }
      let countryE = results.length >= 8063771;
      do {
          let gpayC = 3.0;
          let incident8 = 0.0;
          let emptym = String.fromCharCode(113,95,55,49,95,109,101,109,110,0);
          let singler = String.fromCharCode(112,114,105,109,105,116,105,118,101,95,120,95,50,51,0);
         results.push(libavfilterg.length | 3);
         gpayC *= parseInt(`${incident8}`);
         emptym += `${parseInt(`${gpayC}`)}`;
         singler += `${2 ^ parseInt(`${incident8}`)}`;
         if (countryE) {
            break;
         }
      } while ((1 > reducerd.length) && countryE);
      iconI /= Math.max((String.fromCharCode(80,0) == reducerd ? libavfilterg.length : reducerd.length), 4);

    setRefreshing(true);

      event1 += `${send2.length}`;
      favicond -= iconI;
   let sentryz = 6021741 <= iconI;
   do {
      iconI -= (2 << (Math.min(4, Math.abs((dycreatoru ? 3 : 1)))));
      if (sentryz) {
         break;
      }
   } while (sentryz && (4 <= iconI));
       let memberC = String.fromCharCode(107,95,51,48,95,104,101,97,114,116,98,101,97,116,0);
       let chinar = String.fromCharCode(118,95,57,54,95,100,99,97,100,99,116,0);
      while (3 <= chinar.length) {
          let searchbar2 = 2.0;
         memberC = `${chinar.length ^ 3}`;
         searchbar2 += parseFloat(`${parseInt(`${searchbar2}`) / (Math.max(parseInt(`${searchbar2}`), 10))}`);
         break;
      }
       let sorta = String.fromCharCode(122,95,53,53,0);
       let otherq = String.fromCharCode(117,114,105,95,118,95,55,48,0);
          let commonq = 3;
          let libsgcore_ = 5.0;
         otherq = `${sorta.length}`;
         commonq |= 1;
         libsgcore_ *= parseFloat(`${3 + parseInt(`${libsgcore_}`)}`);
      let xvodq = chinar.length <= 5168987;
      do {
          let analyticsm: Map<any, any> = new Map([[String.fromCharCode(109,97,110,97,103,101,109,101,110,116,95,101,95,50,52,0),534], [String.fromCharCode(102,116,118,108,97,115,116,110,111,100,101,95,106,95,53,48,0),432], [String.fromCharCode(110,95,55,56,95,115,117,98,116,101,120,116,0),305]]);
          let p_positionc = 1.0;
          let championP = String.fromCharCode(97,95,53,49,95,108,111,115,116,0);
         chinar += `${championP.length >> (Math.min(Math.abs(2), 1))}`;
         analyticsm = new Map([[`${analyticsm.size}`, parseInt(`${p_positionc}`)]]);
         p_positionc /= Math.max(4, parseInt(`${p_positionc}`));
         championP += `${parseInt(`${p_positionc}`)}`;
         if (xvodq) {
            break;
         }
      } while ((sorta != chinar) && xvodq);
      if (otherq.endsWith(memberC)) {
         memberC += `${(otherq == String.fromCharCode(83,0) ? sorta.length : otherq.length)}`;
      }
         memberC = `${otherq.length}`;
      brightnessC += parseFloat(`${3}`);
      brightnessC += parseFloat(`${2}`);
      iconI %= Math.max(4, parseInt(`${favicond}`) / (Math.max(combineU.length, 4)));
   let shootq = send2.length <= 6000483;
   do {
       let pingo = 5;
       let faviconR = 3;
      for (let l = 0; l < 3; l++) {
          let huaweiE = String.fromCharCode(112,114,101,108,105,109,105,110,97,114,121,95,115,95,55,51,0);
          let libsentryd = 4;
          let becomeM: Array<any> = [213, 164, 273];
          let spinnerY = String.fromCharCode(109,117,116,97,98,105,108,105,116,121,95,113,95,56,49,0);
         pingo %= Math.max(2, faviconR);
         huaweiE += `${libsentryd * 2}`;
         libsentryd |= 2;
         becomeM.push(becomeM.length);
         spinnerY += `${becomeM.length << (Math.min(spinnerY.length, 4))}`;
      }
          let cornerx = String.fromCharCode(116,95,50,50,95,97,103,103,114,101,103,97,116,101,115,0);
          let read7 = 4.0;
          let filterb: Array<any> = [432, 163, 882];
         pingo >>= Math.min(1, Math.abs(parseInt(`${read7}`) >> (Math.min(4, Math.abs(faviconR)))));
         cornerx = `${filterb.length}`;
         read7 -= parseFloat(`${2}`);
         filterb = [3 + filterb.length];
       let ticka = String.fromCharCode(103,95,57,51,95,115,112,108,105,116,115,0);
         ticka += `${faviconR}`;
          let hookQ = 2;
          let anythinkX = 4.0;
         faviconR /= Math.max(1, hookQ);
         anythinkX -= parseInt(`${anythinkX}`) << (Math.min(5, Math.abs(parseInt(`${anythinkX}`))));
      let benefitu = 9110835 >= faviconR;
      do {
          let hookg = 1.0;
         faviconR %= Math.max(1, parseInt(`${hookg}`));
         if (benefitu) {
            break;
         }
      } while ((!ticka.startsWith(`${faviconR}`)) && benefitu);
      send2.push(2);
      if (shootq) {
         break;
      }
   } while (shootq && (send2.length < 4 && (4 / (Math.max(3, send2.length))) < 3));
      plashu += `${(parseInt(`${brightnessC}`) + (dycreatoru ? 3 : 2))}`;
      arrow0 += 3 * parseInt(`${brightnessC}`);
    await refreshUserState();

      dycreatoru = 97 <= iconI;
   let gdtadvf = arrow0 <= 6413099;
   do {
      arrow0 &= iconI;
      if (gdtadvf) {
         break;
      }
   } while ((arrow0 == event1.length) && gdtadvf);
   while (1.71 <= favicond) {
      arrow0 %= Math.max(1, 3);
      break;
   }
       let kickB = String.fromCharCode(115,101,114,105,102,95,111,95,55,55,0);
       let projectl = 0.0;
       let homea: Map<any, any> = new Map([[String.fromCharCode(108,111,110,103,110,111,105,115,101,95,120,95,57,55,0),882], [String.fromCharCode(105,95,53,57,95,101,115,99,97,112,101,0),764]]);
         projectl -= parseFloat(`${parseInt(`${projectl}`)}`);
       let interstitiale = 0.0;
       let fulli = 2.0;
      while (1.37 == (1.52 * projectl)) {
          let datag = 3.0;
          let viewerd = 1;
          let index9 = 5;
          let ticked5 = 1.0;
         projectl /= Math.max(1, parseFloat(`${2 << (Math.min(Math.abs(parseInt(`${datag}`)), 4))}`));
         datag *= parseInt(`${ticked5}`);
         viewerd += index9;
         index9 &= parseInt(`${ticked5}`);
         break;
      }
       let statisticsh = String.fromCharCode(99,117,114,114,101,110,100,95,55,95,54,56,0);
      let statistics1 = 8110589 >= homea.size;
      do {
         homea.set(`${projectl}`, parseInt(`${fulli}`));
         if (statistics1) {
            break;
         }
      } while ((5 == (homea.size - parseInt(`${interstitiale}`)) || 4.89 == (interstitiale - 5.54)) && statistics1);
      while ((1.13 / (Math.max(1, interstitiale))) >= 3.55 && 5.91 >= (interstitiale / 1.13)) {
         interstitiale *= parseInt(`${projectl}`) & parseInt(`${interstitiale}`);
         break;
      }
         interstitiale /= Math.max(2, 1);
          let o_unlockt = 1.0;
          let eighteen1 = 2.0;
         fulli -= parseInt(`${fulli}`);
         o_unlockt -= 3 >> (Math.min(Math.abs(parseInt(`${o_unlockt}`)), 5));
         eighteen1 *= parseInt(`${o_unlockt}`);
         interstitiale -= parseInt(`${interstitiale}`);
      send2.push(plashu.length / (Math.max(8, combineU.length)));
      kickB = `${kickB.length - 2}`;
   for (let n = 0; n < 2; n++) {
       let graph_ = 4.0;
       let taiwanm = String.fromCharCode(112,102,105,108,116,101,114,95,97,95,57,54,0);
         graph_ += parseFloat(`${taiwanm.length}`);
      let favoritev = graph_ <= 6408828.0;
      do {
          let gesturet = 5;
          let crossu = 0.0;
          let binddatasi: Map<any, any> = new Map([[String.fromCharCode(113,95,57,50,95,116,119,111,0),407], [String.fromCharCode(115,95,49,54,95,114,101,97,99,116,105,111,110,115,0),382], [String.fromCharCode(119,97,115,95,113,95,55,55,0),694]]);
          let subsq = true;
          let zhengpianp = String.fromCharCode(102,117,108,108,98,97,110,100,95,116,95,56,57,0);
         graph_ /= Math.max(parseFloat(`${3}`), 2);
         gesturet ^= zhengpianp.length / (Math.max(1, 4));
         crossu /= Math.max(parseFloat(`${1 | zhengpianp.length}`), 2);
         binddatasi = new Map([[`${binddatasi.size}`, gesturet & binddatasi.size]]);
         subsq = gesturet >= parseInt(`${crossu}`);
         if (favoritev) {
            break;
         }
      } while (favoritev && (4.94 > (graph_ + 5.75) || 2 > (2 >> (Math.min(1, taiwanm.length)))));
      let mbbannerS = 9360817 >= taiwanm.length;
      do {
         taiwanm += `${taiwanm.length}`;
         if (mbbannerS) {
            break;
         }
      } while (mbbannerS && (4.75 >= (graph_ / 2.4) && 4 >= (taiwanm.length * 1)));
         graph_ *= parseFloat(`${parseInt(`${graph_}`)}`);
      let foundk = String.fromCharCode(97,106,95,98,56,0) == taiwanm;
      do {
         taiwanm = `${taiwanm.length}`;
         if (foundk) {
            break;
         }
      } while (((taiwanm.length + 1) == 5 || 4.90 == (3.56 * graph_)) && foundk);
         taiwanm += `${parseInt(`${graph_}`)}`;
      send2 = [3];
   }
      plashu += `${arrow0 ^ combineU.length}`;
      dycreatoru = send2.includes(brightnessC);
   while (5 == (3 ^ iconI)) {
       let half9 = 0.0;
       let pausel = String.fromCharCode(107,95,49,54,95,119,101,97,118,101,0);
      for (let j = 0; j < 3; j++) {
         pausel = `${pausel.length}`;
      }
      for (let n = 0; n < 1; n++) {
          let componentX = String.fromCharCode(109,105,110,115,95,101,95,55,55,0);
          let time_oZ = String.fromCharCode(112,95,49,57,0);
          let commentL = 2.0;
          let time_hx4 = String.fromCharCode(99,105,114,99,108,101,95,101,95,53,50,0);
         half9 /= Math.max(parseFloat(`${2}`), 5);
         componentX += `${time_oZ.length}`;
         time_oZ += `${3 | componentX.length}`;
         commentL /= Math.max(4, 1);
         time_hx4 = `${(String.fromCharCode(118,0) == time_oZ ? time_oZ.length : componentX.length)}`;
      }
          let libavformata = 4;
          let showH = 3;
          let product0 = 5.0;
         pausel = `${3 + parseInt(`${product0}`)}`;
         libavformata -= showH * libavformata;
         showH &= libavformata & showH;
         product0 -= parseFloat(`${libavformata | showH}`);
         half9 -= parseFloat(`${pausel.length}`);
       let heartO = 5.0;
      let toponR = heartO <= 6173782.0;
      do {
         heartO /= Math.max(parseFloat(`${1 | parseInt(`${heartO}`)}`), 4);
         if (toponR) {
            break;
         }
      } while ((heartO <= 4.17) && toponR);
      iconI += 1;
      break;
   }
   while ((5 >> (Math.min(5, plashu.length))) <= 1) {
      combineU.push(parseInt(`${favicond}`));
      break;
   }
    setRefreshing(false);
  };

  const refreshUserState = async () => {
       let confirmation4 = false;
    let proxyE = 1.0;
    let volumea: Map<any, any> = new Map([[String.fromCharCode(102,114,105,101,110,100,108,121,95,49,95,50,53,0),332], [String.fromCharCode(112,114,105,109,101,95,57,95,55,50,0),381]]);
    let notificationa = 4;
    let playercommonS = true;
    let orangeT: Map<any, any> = new Map([[String.fromCharCode(118,115,99,97,108,101,95,104,95,52,57,0),636], [String.fromCharCode(100,95,52,53,95,100,99,115,116,114,0),462], [String.fromCharCode(116,95,57,48,95,114,101,118,97,108,105,100,97,116,101,100,0),853]]);
    let currentT = true;
    let frame_o9 = String.fromCharCode(116,105,112,95,102,95,49,48,0);
    let langkeyk = 2.0;
    let home6 = false;
    let episodes9 = String.fromCharCode(101,120,99,101,101,100,115,95,115,95,57,51,0);
    let actions0 = 0.0;
      playercommonS = (orangeT.size - notificationa) < 91;
       let datar = 4.0;
      for (let p = 0; p < 1; p++) {
         datar -= 3;
      }
         datar += parseInt(`${datar}`) ^ 1;
          let active4 = 1.0;
          let serviceP = 2;
         datar *= serviceP;
         active4 *= parseFloat(`${1 & parseInt(`${active4}`)}`);
         serviceP -= 2 | parseInt(`${active4}`);
      orangeT.set(`${langkeyk}`, parseInt(`${langkeyk}`) / (Math.max(volumea.size, 7)));
   if ((4 & volumea.size) < 2 && (orangeT.size & 4) < 2) {
      orangeT = new Map([[`${volumea.size}`, ((confirmation4 ? 3 : 3) << (Math.min(Math.abs(2), 2)))]]);
   }
       let anythinkv: Array<any> = [526, 507, 119];
          let blackV = String.fromCharCode(105,95,52,55,95,99,104,111,111,115,101,114,0);
          let register__l = 0.0;
         anythinkv = [blackV.length >> (Math.min(Math.abs(3), 2))];
         blackV = `${parseInt(`${register__l}`) << (Math.min(2, Math.abs(2)))}`;
         register__l /= Math.max(3, parseFloat(`${2 / (Math.max(parseInt(`${register__l}`), 10))}`));
       let q_titleg: Map<any, any> = new Map([[String.fromCharCode(114,95,50,53,95,109,117,110,108,111,99,107,0),43], [String.fromCharCode(118,97,108,105,100,97,116,101,100,95,103,95,51,57,0),634]]);
       let calendarI: Map<any, any> = new Map([[String.fromCharCode(98,95,52,56,95,116,97,112,112,101,100,0),860], [String.fromCharCode(106,95,56,95,108,111,115,101,0),454], [String.fromCharCode(99,95,57,53,95,100,101,110,111,105,115,101,114,0),505]]);
      while ((5 ^ anythinkv.length) <= 2 || (anythinkv.length ^ q_titleg.size) <= 5) {
          let refreshX: Map<any, any> = new Map([[String.fromCharCode(99,105,114,99,95,111,95,54,50,0),false ], [String.fromCharCode(108,105,109,105,116,101,100,95,49,95,51,0),false ]]);
         q_titleg = new Map([[`${calendarI.size}`, calendarI.size]]);
         refreshX.set(`${refreshX.size}`, 2 ^ refreshX.size);
         break;
      }
      frame_o9 = `${orangeT.size >> (Math.min(Math.abs(1), 5))}`;
   if (!playercommonS) {
       let rulesV = false;
       let overP = String.fromCharCode(116,117,114,98,111,106,112,101,103,95,50,95,52,53,0);
       let mbjscommonk: Map<any, any> = new Map([[String.fromCharCode(117,95,53,51,95,105,105,114,102,105,108,116,101,114,0),462], [String.fromCharCode(98,105,116,111,112,115,95,106,95,50,48,0),597]]);
       let bdxadsdk7 = 2.0;
      while (3 > overP.length) {
         rulesV = (overP.length + parseInt(`${bdxadsdk7}`)) < 65;
         break;
      }
         overP += `${1 | overP.length}`;
      let sideh = bdxadsdk7 >= 5838643.0;
      do {
          let orangel = String.fromCharCode(100,97,116,97,115,116,111,114,101,95,105,95,52,54,0);
          let pangleC = 3.0;
         bdxadsdk7 -= parseFloat(`${1}`);
         orangel = "1";
         pangleC += orangel.length;
         if (sideh) {
            break;
         }
      } while ((4.84 > (bdxadsdk7 / (Math.max(7, parseFloat(`${mbjscommonk.size}`))))) && sideh);
         bdxadsdk7 /= Math.max(4, (parseFloat(`${overP == String.fromCharCode(86,0) ? overP.length : mbjscommonk.size}`)));
      for (let n = 0; n < 2; n++) {
         overP += `${mbjscommonk.size % (Math.max(10, overP.length))}`;
      }
      while (3 < (overP.length + mbjscommonk.size) && (3 + mbjscommonk.size) < 3) {
         mbjscommonk.set(overP, 2 * mbjscommonk.size);
         break;
      }
       let stepT = 4;
       let privilegem = 5;
       let editQ: Array<any> = [683, 505];
       let plusU: Array<any> = [476, 973];
          let greenS: Map<any, any> = new Map([[String.fromCharCode(98,111,111,115,116,101,100,95,97,95,53,55,0),true ], [String.fromCharCode(116,101,109,112,102,105,108,101,95,109,95,55,56,0),false ], [String.fromCharCode(100,99,97,97,100,112,99,109,95,105,95,55,53,0),false ]]);
         bdxadsdk7 *= parseFloat(`${1 + privilegem}`);
         greenS.set(`${greenS.size}`, 1);
      for (let a = 0; a < 2; a++) {
         mbjscommonk = new Map([[`${mbjscommonk.size}`, parseInt(`${bdxadsdk7}`) >> (Math.min(Math.abs(mbjscommonk.size), 3))]]);
      }
       let renderQ = 2.0;
       let ballW = 3.0;
      let castingq = 6764477.0 >= renderQ;
      do {
         renderQ += parseFloat(`${overP.length - 3}`);
         if (castingq) {
            break;
         }
      } while (castingq && (rulesV));
      volumea = new Map([[`${langkeyk}`, 3 % (Math.max(8, parseInt(`${bdxadsdk7}`)))]]);
   }
   while (!home6 && 2 > frame_o9.length) {
      home6 = !home6;
      break;
   }

    const result = await yys_GesturesConst.getUserDetails();

       let cricketx = 4;
       let long_7G = String.fromCharCode(112,95,51,50,95,118,105,101,119,101,114,0);
         cricketx += 1;
      while (long_7G.startsWith(`${cricketx}`)) {
          let xvodF = String.fromCharCode(114,95,54,48,95,115,112,105,110,110,105,110,103,0);
         cricketx -= 1 - cricketx;
         xvodF = `${(String.fromCharCode(54,0) == xvodF ? xvodF.length : xvodF.length)}`;
         break;
      }
      if ((cricketx - 2) < 2) {
         cricketx += cricketx ^ 3;
      }
          let humidityf = String.fromCharCode(111,112,97,100,95,97,95,51,54,0);
          let episodesC: Array<any> = [297, 440];
          let temp5: Map<any, any> = new Map([[String.fromCharCode(108,115,112,102,108,112,99,95,53,95,51,53,0),268], [String.fromCharCode(99,95,57,48,95,101,120,112,0),953]]);
         cricketx &= 1 * episodesC.length;
         humidityf = `${humidityf.length}`;
         episodesC.push(temp5.size % (Math.max(2, 4)));
         temp5.set(humidityf, 1);
         cricketx >>= Math.min(5, Math.abs(cricketx * long_7G.length));
         cricketx |= cricketx - 3;
      frame_o9 += `${2 / (Math.max(parseInt(`${proxyE}`), 1))}`;
   while (5 <= frame_o9.length) {
      frame_o9 = `${episodes9.length}`;
      break;
   }
   for (let z = 0; z < 3; z++) {
      proxyE /= Math.max(volumea.size & 2, 4);
   }
   let phoneC = 6808709.0 >= proxyE;
   do {
       let currentk: Map<any, any> = new Map([[String.fromCharCode(100,105,97,103,110,111,115,116,105,99,115,95,99,95,55,48,0),String.fromCharCode(109,97,116,99,104,105,110,103,95,114,95,52,55,0)], [String.fromCharCode(101,108,108,105,112,115,101,95,118,95,51,51,0),String.fromCharCode(114,101,97,100,102,117,108,108,95,105,95,49,55,0)], [String.fromCharCode(110,95,54,52,95,115,105,103,110,0),String.fromCharCode(107,101,121,112,97,116,104,95,120,95,50,54,0)]]);
       let materialI = String.fromCharCode(122,101,114,111,122,101,114,111,95,121,95,54,52,0);
      if (currentk.size > materialI.length) {
         materialI = `${materialI.length}`;
      }
      let libavutilV = String.fromCharCode(106,105,101,102,101,104,120,0) == materialI;
      do {
          let androidY = String.fromCharCode(119,95,52,56,95,99,111,110,100,105,116,105,111,110,115,0);
          let networkw: Map<any, any> = new Map([[String.fromCharCode(105,110,118,111,107,101,95,106,95,52,55,0),857], [String.fromCharCode(98,95,57,53,95,111,108,100,101,115,116,0),552], [String.fromCharCode(99,97,115,101,95,115,95,57,53,0),959]]);
          let libfb3 = 5;
         materialI = `${androidY.length}`;
         androidY += `${networkw.size}`;
         networkw = new Map([[`${networkw.size}`, libfb3 / (Math.max(3, 2))]]);
         libfb3 ^= 3 * libfb3;
         if (libavutilV) {
            break;
         }
      } while ((3 >= (currentk.size & materialI.length) || 3 >= (currentk.size & 3)) && libavutilV);
         materialI = `${2 % (Math.max(5, currentk.size))}`;
      if (materialI.endsWith(`${currentk.size}`)) {
          let history8 = String.fromCharCode(107,95,53,50,95,111,118,101,114,114,105,100,100,101,110,0);
          let termsb = true;
          let libavcodecu = String.fromCharCode(108,95,56,48,95,98,117,116,116,101,114,102,108,105,101,115,0);
          let cornerG = 0;
          let gesturesR = String.fromCharCode(108,101,114,116,95,122,95,56,49,0);
         currentk.set(`${cornerG}`, 1 ^ libavcodecu.length);
         history8 += `${((termsb ? 3 : 5) - 2)}`;
         termsb = !termsb;
         libavcodecu = `${gesturesR.length % 2}`;
         cornerG >>= Math.min(3, Math.abs(history8.length ^ 2));
         gesturesR += `${history8.length}`;
      }
      if ((currentk.size >> (Math.min(materialI.length, 1))) == 2) {
         materialI += "1";
      }
      while (!materialI.endsWith(`${currentk.size}`)) {
         currentk.set(`${materialI}`, materialI.length & currentk.size);
         break;
      }
      proxyE -= notificationa;
      if (phoneC) {
         break;
      }
   } while ((1.46 > (notificationa + proxyE) && (1.46 + proxyE) > 1.59) && phoneC);
      frame_o9 = `${parseInt(`${langkeyk}`) << (Math.min(2, Math.abs(2)))}`;
      confirmation4 = playercommonS;
    if (result == null) {

      episodes9 += `${(2 & (playercommonS ? 5 : 4))}`;
      notificationa /= Math.max(3, ((home6 ? 2 : 4)));
       let texta = String.fromCharCode(100,101,118,101,108,111,112,109,101,110,116,95,56,95,54,48,0);
      for (let n = 0; n < 2; n++) {
         texta += `${texta.length}`;
      }
      for (let f = 0; f < 1; f++) {
          let actionZ = 4.0;
          let guiden = 5.0;
          let favoritev = 5.0;
          let gradleE = 0.0;
         texta += `${parseInt(`${actionZ}`)}`;
         guiden -= parseFloat(`${2 / (Math.max(parseInt(`${favoritev}`), 1))}`);
         favoritev /= Math.max(parseFloat(`${2 | parseInt(`${favoritev}`)}`), 4);
         gradleE /= Math.max(1, 1);
      }
         texta = `${texta.length % (Math.max(texta.length, 8))}`;
      frame_o9 = `${orangeT.size | frame_o9.length}`;
   if (!episodes9.endsWith(`${volumea.size}`)) {
      episodes9 += `${(1 - (confirmation4 ? 2 : 3))}`;
   }
       let schedulerk = 0.0;
       let mbridgeU = String.fromCharCode(97,95,50,52,95,116,114,97,118,101,108,0);
         schedulerk *= parseFloat(`${mbridgeU.length + parseInt(`${schedulerk}`)}`);
          let roomS: Map<any, any> = new Map([[String.fromCharCode(115,114,116,112,95,48,95,56,48,0),372], [String.fromCharCode(112,114,101,112,95,117,95,57,0),598]]);
          let vignetteP = String.fromCharCode(112,111,107,101,114,95,112,95,54,0);
          let collectionb = String.fromCharCode(118,95,55,52,95,108,111,99,97,108,0);
         mbridgeU = "2";
         roomS = new Map([[vignetteP, vignetteP.length & 2]]);
         collectionb += "1";
       let colors6: Array<any> = [490, 379];
      let overZ = schedulerk <= 6449829.0;
      do {
         schedulerk += parseFloat(`${parseInt(`${schedulerk}`) - 1}`);
         if (overZ) {
            break;
         }
      } while (overZ && (1 == (colors6.length * parseInt(`${schedulerk}`))));
      let single0 = mbridgeU.length <= 6403859;
      do {
          let downloaderv = 1.0;
          let specI = String.fromCharCode(97,116,117,114,97,116,105,111,110,95,105,95,51,48,0);
         mbridgeU += "3";
         downloaderv += parseFloat(`${parseInt(`${downloaderv}`) - specI.length}`);
         specI += `${parseInt(`${downloaderv}`) | specI.length}`;
         if (single0) {
            break;
         }
      } while (single0 && (!mbridgeU.endsWith(`${colors6.length}`)));
      let materialb = 6429101 >= mbridgeU.length;
      do {
          let f_centerK = String.fromCharCode(115,99,101,101,110,95,114,95,56,53,0);
          let dropdown1 = true;
         mbridgeU = "2";
         f_centerK += `${((dropdown1 ? 4 : 1) - f_centerK.length)}`;
         dropdown1 = !f_centerK.startsWith(`${dropdown1}`);
         if (materialb) {
            break;
         }
      } while (materialb && ((mbridgeU.length >> (Math.min(4, colors6.length))) > 5 && (colors6.length >> (Math.min(Math.abs(5), 1))) > 2));
      langkeyk -= parseFloat(`${1}`);
      frame_o9 = `${((home6 ? 2 : 3) | notificationa)}`;
      return;
    }

    await dispatch(updateUserAuth(result));

   for (let s = 0; s < 2; s++) {
      currentT = home6;
   }
      orangeT = new Map([[`${confirmation4}`, 3 * parseInt(`${proxyE}`)]]);
       let componente: Map<any, any> = new Map([[String.fromCharCode(99,111,108,111,114,102,117,108,95,53,95,49,48,0),78], [String.fromCharCode(99,95,56,48,95,112,114,105,118,97,116,101,0),580]]);
          let whistleW = 5.0;
         componente.set(`${whistleW}`, componente.size % (Math.max(7, parseInt(`${whistleW}`))));
         componente = new Map([[`${componente.size}`, componente.size ^ 2]]);
         componente = new Map([[`${componente.size}`, componente.size]]);
      proxyE -= orangeT.size;
   if (1 < (parseInt(`${proxyE}`) + volumea.size) || (volumea.size >> (Math.min(Math.abs(1), 4))) < 5) {
       let commentd = String.fromCharCode(97,95,52,57,95,116,114,97,110,115,112,111,115,101,120,0);
      if (commentd.length < commentd.length) {
          let projectb: Array<any> = [String.fromCharCode(100,111,119,110,109,105,120,95,118,95,54,53,0), String.fromCharCode(106,95,50,50,95,108,97,116,0)];
          let untickb = 2.0;
         commentd += `${parseInt(`${untickb}`) % 2}`;
         projectb = [projectb.length - projectb.length];
         untickb += 3 << (Math.min(5, projectb.length));
      }
      let libjsit = String.fromCharCode(112,119,104,110,105,51,110,101,0) == commentd;
      do {
         commentd = `${commentd.length + commentd.length}`;
         if (libjsit) {
            break;
         }
      } while (libjsit && (commentd.endsWith(commentd)));
          let profileD: Array<any> = [String.fromCharCode(114,101,99,116,115,95,97,95,55,52,0), String.fromCharCode(102,95,53,53,95,113,117,97,110,116,105,122,101,114,115,0)];
          let canvasD = 2;
          let selection0 = String.fromCharCode(116,114,97,110,115,102,101,114,114,97,98,108,101,95,100,95,54,48,0);
         commentd = `${profileD.length}`;
         profileD.push(2 / (Math.max(2, canvasD)));
         canvasD |= (String.fromCharCode(114,0) == selection0 ? canvasD : selection0.length);
      volumea.set(`${currentT}`, 3);
   }
      proxyE /= Math.max(3 - frame_o9.length, 2);
   let catalogp = home6 ? !home6 : home6;
   do {
      home6 = (59 >= ((playercommonS ? 59 : frame_o9.length) % (Math.max(frame_o9.length, 2))));
      if (catalogp) {
         break;
      }
   } while (catalogp && (home6 && 1 <= frame_o9.length));
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

          <TouchableOpacity
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
