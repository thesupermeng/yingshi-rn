import React, { useState, useMemo, memo, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  FlatList,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import { wwKsadStore } from "@type/ww_dycreator_result";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import SortAscIcon from "@static/images/overlayMatch.svg";
import SortDescIcon from "@static/images/binddatasRight.svg";
import BottomSheet from "../bottomSheet/ww_questicon_shielddone";
import { wwYellowredcardRelease } from "@redux/reducers/ww_shared";

interface wwIndexDice {
  onConfirm: any;
  onCancel: any;
  episodes?: wwKsadStore;
  activeEpisode?: number;
  rangeSize?: number;
  isVisible: boolean;
  handleClose: any;
  vodId?: number;
}
function VodEpisodeSelectionModal({
  onConfirm,
  onCancel,
  episodes,
  isVisible,
  handleClose,
  activeEpisode = 0,
  rangeSize = 50,
  vodId,
}: wwIndexDice) {
  const { colors, textVariants, spacing } = useTheme();
  const EPISODE_RANGE_SIZE = rangeSize;
  const insets = useSafeAreaInsets();
  const [sortBy, setSortBy] = useState("asc");
  const ranges = [
    ...Array(
      episodes?.url_count === undefined
        ? 0
        : Math.ceil(episodes.url_count / EPISODE_RANGE_SIZE)
    ).keys(),
  ].map(
    (x) =>
      `${x * EPISODE_RANGE_SIZE + 1}-${Math.min(
        (x + 1) * EPISODE_RANGE_SIZE,
        episodes?.url_count === undefined
          ? (x + 1) * EPISODE_RANGE_SIZE - 1
          : episodes?.url_count
      )}`
  );

  const [currentIndex, setCurrentIndex] = useState(
    Math.floor(activeEpisode / EPISODE_RANGE_SIZE)
  );
  const showEpisodeRangeStart = useMemo(
    () => currentIndex * EPISODE_RANGE_SIZE,
    [activeEpisode, currentIndex]
  );
  const showEpisodeRangeEnd = useMemo(
    () =>
      Math.min(
        showEpisodeRangeStart + EPISODE_RANGE_SIZE,
        episodes
          ? episodes.url_count
          : showEpisodeRangeStart + EPISODE_RANGE_SIZE
      ),
    [episodes, showEpisodeRangeStart]
  );
  const displayEpisodes = useMemo(() => {
       let whistleb = String.fromCharCode(97,102,116,101,114,101,102,102,101,99,116,115,107,101,121,112,97,116,104,95,112,95,56,50,0);
    let langkey2 = String.fromCharCode(97,95,51,57,95,112,114,101,0);
    let bellj = String.fromCharCode(106,95,51,49,95,111,110,97,118,99,100,97,116,97,0);
    let sideF = String.fromCharCode(102,108,111,119,95,117,95,51,48,0);
    let mimoH = 0;
    let untickJ = String.fromCharCode(101,120,99,108,117,100,101,100,95,112,95,49,49,0);
    let movies5 = String.fromCharCode(97,97,99,116,97,98,95,53,95,57,53,0);
    let videocommonI = true;
    let stationsz = 0.0;
    let uimanagerG = String.fromCharCode(115,112,101,97,107,105,110,103,95,54,95,50,52,0);
    let qaag6 = 3.0;
    let subtext1 = false;
   while (whistleb.length > 1 && !videocommonI) {
      whistleb += `${sideF.length}`;
      break;
   }
   while (stationsz <= 3.88) {
      stationsz *= (parseFloat(`${sideF == String.fromCharCode(82,0) ? sideF.length : parseInt(`${qaag6}`)}`));
      break;
   }
      qaag6 += parseFloat(`${mimoH | 2}`);
      qaag6 += parseFloat(`${parseInt(`${qaag6}`)}`);
   for (let l = 0; l < 1; l++) {
      uimanagerG = `${mimoH / (Math.max(3, 2))}`;
   }
      uimanagerG += `${(String.fromCharCode(116,0) == sideF ? mimoH : sideF.length)}`;

    const eps = episodes?.urls?.slice(
      showEpisodeRangeStart,
      showEpisodeRangeEnd
    );

   if (mimoH <= 4) {
       let main_gK = 3.0;
       let colorsT = String.fromCharCode(115,95,49,95,105,112,99,0);
       let teamw: Array<any> = [String.fromCharCode(116,104,111,117,115,97,110,100,115,95,55,95,51,51,0), String.fromCharCode(97,95,50,50,95,115,105,103,105,108,108,0), String.fromCharCode(104,95,53,57,95,100,101,109,111,0)];
      let middlebrightnessz = String.fromCharCode(111,50,49,103,48,118,0) == colorsT;
      do {
         colorsT += `${colorsT.length >> (Math.min(1, teamw.length))}`;
         if (middlebrightnessz) {
            break;
         }
      } while ((3 > (colorsT.length * 1) && 1 > (colorsT.length * teamw.length)) && middlebrightnessz);
       let buildT = 2.0;
       let completeB = 0.0;
          let bggradientI = String.fromCharCode(105,95,49,57,95,108,108,97,117,100,100,115,112,0);
          let buttonJ = String.fromCharCode(121,95,52,95,115,116,97,114,116,109,97,114,107,101,114,0);
          let proxy8 = String.fromCharCode(112,95,50,48,95,112,114,111,99,101,115,115,105,110,103,0);
         colorsT = `${parseInt(`${main_gK}`)}`;
         bggradientI = `${1 * bggradientI.length}`;
         buttonJ = `${(buttonJ == String.fromCharCode(99,0) ? bggradientI.length : buttonJ.length)}`;
         proxy8 = `${proxy8.length}`;
       let notificationfillemptym = 4.0;
       let nbatrophyn = 3.0;
      let hiadY = nbatrophyn >= 8004977.0;
      do {
         nbatrophyn += parseInt(`${notificationfillemptym}`);
         if (hiadY) {
            break;
         }
      } while (hiadY && (4.93 >= (buildT * 2)));
      if (1.100 <= (nbatrophyn - 1)) {
         main_gK /= Math.max(2, parseInt(`${notificationfillemptym}`));
      }
       let policyV = 5.0;
          let modules8 = true;
         main_gK /= Math.max(3, 1 * parseInt(`${notificationfillemptym}`));
         modules8 = modules8 && !modules8;
       let combineJ: Map<any, any> = new Map([[String.fromCharCode(121,95,57,95,105,109,112,108,0),180], [String.fromCharCode(119,101,98,109,101,110,99,95,113,95,49,50,0),181], [String.fromCharCode(99,104,97,110,110,101,108,95,103,95,49,53,0),479]]);
       let castingf: Map<any, any> = new Map([[String.fromCharCode(118,112,100,97,116,97,95,118,95,53,53,0),false ], [String.fromCharCode(103,114,111,117,112,99,97,108,108,95,107,95,53,49,0),true ], [String.fromCharCode(117,110,99,108,101,115,95,48,95,50,49,0),false ]]);
      mimoH <<= Math.min(Math.abs(langkey2.length << (Math.min(bellj.length, 3))), 5);
   }
   let nativeO = 8565056 <= untickJ.length;
   do {
      untickJ += "3";
      if (nativeO) {
         break;
      }
   } while (nativeO && (untickJ.includes(`${stationsz}`)));
      bellj = `${(String.fromCharCode(86,0) == movies5 ? (videocommonI ? 2 : 3) : movies5.length)}`;
   while (sideF.length <= mimoH) {
       let largebrightness0 = false;
       let libswscaleC = false;
       let fieldZ: Array<any> = [654, 425];
       let codegend = 5.0;
       let playq: Map<any, any> = new Map([[String.fromCharCode(113,95,57,48,95,103,101,116,100,105,103,105,116,0),892], [String.fromCharCode(116,101,115,101,100,103,101,95,49,95,57,57,0),598]]);
      for (let e = 0; e < 1; e++) {
          let serviceC = 5;
         fieldZ.push(3 >> (Math.min(Math.abs(serviceC), 3)));
      }
      if (libswscaleC) {
         largebrightness0 = fieldZ.length < 75 && 50.36 < codegend;
      }
          let libswresamplen = 4.0;
          let classesA = String.fromCharCode(106,95,56,51,95,97,117,103,109,101,110,116,97,116,105,111,110,0);
          let setting0 = String.fromCharCode(108,95,54,49,95,103,108,111,98,97,108,105,110,102,111,0);
         fieldZ = [2];
         libswresamplen *= parseFloat(`${1 * setting0.length}`);
         classesA = "3";
         setting0 += `${1 >> (Math.min(2, classesA.length))}`;
      if ((3 + fieldZ.length) >= 1 || 3 >= (playq.size + fieldZ.length)) {
         playq = new Map([[`${fieldZ.length}`, ((libswscaleC ? 4 : 2) >> (Math.min(Math.abs(2), 5)))]]);
      }
          let mathU: Map<any, any> = new Map([[String.fromCharCode(117,95,54,57,0),585], [String.fromCharCode(105,95,49,48,48,95,116,105,116,110,116,0),944], [String.fromCharCode(118,95,50,49,95,98,97,99,107,98,114,111,117,110,100,0),282]]);
          let cleara: Array<any> = [66, 641, 824];
         fieldZ.push(playq.size);
         mathU = new Map([[`${mathU.size}`, 2]]);
         cleara.push(mathU.size);
         largebrightness0 = fieldZ.length == parseInt(`${codegend}`);
      while (!Array.from(playq.keys()).includes(`${codegend}`)) {
         playq = new Map([[`${codegend}`, 1 * parseInt(`${codegend}`)]]);
         break;
      }
       let arrowupc = String.fromCharCode(97,99,114,111,115,115,102,97,100,101,95,100,95,49,52,0);
         arrowupc = "3";
          let crossQ: Array<any> = [145, 218];
          let halft = 1.0;
          let qaagJ = 5.0;
         libswscaleC = (!largebrightness0 ? libswscaleC : largebrightness0);
         crossQ.push(parseInt(`${qaagJ}`) * 2);
         halft += parseFloat(`${parseInt(`${qaagJ}`)}`);
       let holder5 = String.fromCharCode(114,101,112,108,97,99,101,115,95,106,95,50,56,0);
       let bottom1 = String.fromCharCode(120,95,51,54,95,106,111,117,114,110,97,108,110,97,109,101,0);
      if (2 < fieldZ.length) {
          let confirmationA = 4;
          let bangN = String.fromCharCode(112,111,115,116,105,110,105,116,95,98,95,51,54,0);
          let areal = 2.0;
          let moonO = String.fromCharCode(100,108,114,114,95,107,95,56,51,0);
         arrowupc += `${1 & bangN.length}`;
         confirmationA += 2 % (Math.max(10, moonO.length));
         bangN = `${moonO.length & 2}`;
         areal /= Math.max(parseInt(`${areal}`), 1);
      }
      if (libswscaleC) {
          let runtimeschedulerF = 0.0;
          let private_e0c = String.fromCharCode(101,99,107,101,121,95,102,95,53,52,0);
          let dragF = false;
          let stru = 2;
         playq = new Map([[`${fieldZ.length}`, (3 | (dragF ? 2 : 5))]]);
         runtimeschedulerF += parseFloat(`${parseInt(`${runtimeschedulerF}`) << (Math.min(Math.abs(1), 2))}`);
         private_e0c += `${(private_e0c == String.fromCharCode(86,0) ? private_e0c.length : parseInt(`${runtimeschedulerF}`))}`;
         dragF = 47 < private_e0c.length;
         stru ^= private_e0c.length << (Math.min(5, Math.abs(parseInt(`${runtimeschedulerF}`))));
      }
         largebrightness0 = arrowupc.length <= 83;
      while (fieldZ.length >= 3) {
          let floatingr = String.fromCharCode(104,95,52,52,95,115,110,105,112,112,101,116,0);
          let signinupM: Array<any> = [504, 533, 607];
          let arrowup0: Map<any, any> = new Map([[String.fromCharCode(112,95,53,52,95,97,102,102,105,110,101,0),26], [String.fromCharCode(98,95,57,56,95,97,112,112,108,101,0),156]]);
          let iconrefresht: Array<any> = [983, 683];
          let libavcodec5 = 3;
         bottom1 += `${holder5.length - 1}`;
         floatingr += `${signinupM.length - libavcodec5}`;
         signinupM.push(1);
         arrowup0 = new Map([[`${signinupM.length}`, 3]]);
         iconrefresht = [iconrefresht.length];
         libavcodec5 %= Math.max(4, libavcodec5);
         break;
      }
      sideF = `${3 + parseInt(`${qaag6}`)}`;
      break;
   }
      uimanagerG = `${(String.fromCharCode(76,0) == bellj ? whistleb.length : bellj.length)}`;
   for (let f = 0; f < 3; f++) {
       let typingj = String.fromCharCode(114,101,97,100,95,110,95,55,54,0);
       let w_centerj = 3.0;
      if (!typingj.endsWith(`${w_centerj}`)) {
          let typings = 5;
          let servicei = String.fromCharCode(115,116,114,111,107,101,100,95,102,95,54,52,0);
          let countdownZ: Map<any, any> = new Map([[String.fromCharCode(108,97,121,115,95,121,95,55,55,0),495], [String.fromCharCode(101,95,50,48,95,112,114,101,100,105,99,116,105,111,110,0),221], [String.fromCharCode(98,115,111,110,95,106,95,54,49,0),874]]);
          let questu = true;
         typingj += `${(servicei == String.fromCharCode(72,0) ? (questu ? 2 : 1) : servicei.length)}`;
         typings /= Math.max(2 & countdownZ.size, 3);
         countdownZ = new Map([[`${countdownZ.size}`, typings % (Math.max(countdownZ.size, 6))]]);
         questu = 47 > typings;
      }
      let stepF = String.fromCharCode(98,52,98,115,119,106,0) == typingj;
      do {
         typingj = `${typingj.length}`;
         if (stepF) {
            break;
         }
      } while (stepF && (4.79 >= (typingj.length + w_centerj) && (typingj.length / 1) >= 3));
      let windl = 7784681.0 <= w_centerj;
      do {
         w_centerj += parseInt(`${w_centerj}`);
         if (windl) {
            break;
         }
      } while ((2 <= (parseInt(`${w_centerj}`) * 4) || (typingj.length - 4) <= 5) && windl);
      let setting2 = typingj.length >= 5669120;
      do {
         typingj = `${parseInt(`${w_centerj}`) / (Math.max(5, typingj.length))}`;
         if (setting2) {
            break;
         }
      } while (setting2 && (typingj.endsWith(`${w_centerj}`)));
         typingj += `${(typingj == String.fromCharCode(121,0) ? typingj.length : parseInt(`${w_centerj}`))}`;
          let rewardW = String.fromCharCode(99,97,110,111,110,105,99,97,108,95,98,95,55,52,0);
          let rulesR = 5.0;
         w_centerj *= (typingj == String.fromCharCode(105,0) ? typingj.length : parseInt(`${rulesR}`));
         rewardW += `${rewardW.length}`;
         rulesR += rewardW.length;
      qaag6 += parseFloat(`${mimoH}`);
   }
    if (sortBy === "desc") {

   let iconfeedback9 = videocommonI ? !videocommonI : videocommonI;
   do {
       let sortP = 0;
       let saved = String.fromCharCode(115,117,103,103,101,115,116,101,100,95,108,95,55,49,0);
       let roundN: Map<any, any> = new Map([[String.fromCharCode(111,95,53,57,95,113,115,118,100,101,105,110,116,0),726], [String.fromCharCode(101,118,115,105,103,110,97,108,95,111,95,53,49,0),342], [String.fromCharCode(97,95,51,55,95,101,101,112,0),604]]);
       let sportsf = String.fromCharCode(110,97,116,105,111,110,97,108,105,116,121,95,52,95,52,52,0);
      let mintegralQ = sortP <= 5521131;
      do {
         sortP *= roundN.size;
         if (mintegralQ) {
            break;
         }
      } while (mintegralQ && (3 < (saved.length ^ 5) || (saved.length ^ 5) < 3));
      let rules7 = sortP >= 4979469;
      do {
          let final_we = 0.0;
          let libloggerF: Array<any> = [485, 535, 58];
          let configc = String.fromCharCode(100,105,115,112,108,97,121,95,107,95,51,54,0);
          let clear8 = 5.0;
          let footballm = String.fromCharCode(110,111,110,110,117,108,108,115,115,114,99,115,95,116,95,52,53,0);
         sortP &= configc.length ^ parseInt(`${clear8}`);
         final_we += parseFloat(`${footballm.length}`);
         libloggerF.push(parseInt(`${final_we}`) & 1);
         configc += `${(String.fromCharCode(110,0) == footballm ? footballm.length : parseInt(`${final_we}`))}`;
         clear8 *= libloggerF.length;
         if (rules7) {
            break;
         }
      } while (rules7 && (sortP < 4));
      while (5 > (roundN.size & saved.length) && (roundN.size & saved.length) > 5) {
         roundN = new Map([[saved, sportsf.length]]);
         break;
      }
       let pressure6: Map<any, any> = new Map([[String.fromCharCode(98,105,116,114,97,116,101,95,54,95,56,54,0),737], [String.fromCharCode(109,97,116,99,104,101,115,95,108,95,51,55,0),970]]);
       let collectionO: Map<any, any> = new Map([[String.fromCharCode(99,97,114,114,105,97,103,101,95,57,95,57,54,0),true ], [String.fromCharCode(115,117,112,101,114,98,108,111,99,107,115,95,52,95,51,54,0),true ]]);
      if (1 <= (5 & collectionO.size)) {
         sortP %= Math.max(collectionO.size, 2);
      }
      while (sportsf.length <= 3) {
         sportsf = `${(String.fromCharCode(121,0) == sportsf ? sportsf.length : roundN.size)}`;
         break;
      }
       let type_c6c = 4.0;
      while (sportsf.length > collectionO.size) {
         sportsf = `${3 >> (Math.min(2, sportsf.length))}`;
         break;
      }
       let uploadc = String.fromCharCode(105,110,116,101,114,97,99,116,95,116,95,52,50,0);
         type_c6c += (parseFloat(`${sportsf == String.fromCharCode(83,0) ? uploadc.length : sportsf.length}`));
      let predictionY = 9138377 <= sortP;
      do {
         sortP |= pressure6.size * 3;
         if (predictionY) {
            break;
         }
      } while (predictionY && (5 > (sortP & 3) && 3 > (3 & pressure6.size)));
      let arrowrightf = uploadc == String.fromCharCode(57,56,56,55,52,121,48,106,97,57,0);
      do {
         uploadc = `${1 + parseInt(`${type_c6c}`)}`;
         if (arrowrightf) {
            break;
         }
      } while (arrowrightf && (sortP == 5));
      videocommonI = !whistleb.includes(`${qaag6}`);
      if (iconfeedback9) {
         break;
      }
   } while (iconfeedback9 && (!videocommonI));
   for (let z = 0; z < 2; z++) {
      bellj += "3";
   }
      whistleb = `${whistleb.length << (Math.min(3, langkey2.length))}`;
   while (langkey2.length >= 5) {
      videocommonI = (movies5.length ^ whistleb.length) < 4;
      break;
   }
       let hiad6 = 1.0;
       let redgoalA = 2;
      for (let n = 0; n < 2; n++) {
         hiad6 -= parseFloat(`${redgoalA}`);
      }
      let hoverL = 8906845 <= redgoalA;
      do {
         redgoalA >>= Math.min(3, Math.abs(redgoalA));
         if (hoverL) {
            break;
         }
      } while (hoverL && (5 > (parseInt(`${hiad6}`) * redgoalA) && (hiad6 * 4.22) > 1.65));
          let overU = false;
          let indexa = String.fromCharCode(115,105,100,101,100,97,116,97,95,97,95,49,57,0);
          let albumT: Map<any, any> = new Map([[String.fromCharCode(100,114,97,119,105,110,103,95,103,95,49,48,0),367], [String.fromCharCode(115,95,51,95,116,120,116,110,105,100,0),98], [String.fromCharCode(97,108,114,101,97,100,121,95,120,95,49,54,0),771]]);
         hiad6 *= parseFloat(`${3}`);
         overU = indexa.length > 97 || 97 > albumT.size;
         indexa = `${2 + indexa.length}`;
         albumT.set(`${indexa}`, albumT.size);
         redgoalA |= redgoalA / (Math.max(10, parseInt(`${hiad6}`)));
      while (4 >= (redgoalA * 1)) {
         redgoalA += redgoalA;
         break;
      }
      if (5 < (5 * redgoalA)) {
          let borderless2 = 1.0;
          let yellowq = true;
          let referrerT: Map<any, any> = new Map([[String.fromCharCode(119,95,50,55,95,102,97,115,116,101,115,116,0),993], [String.fromCharCode(120,95,57,50,95,99,105,112,104,101,114,115,0),823], [String.fromCharCode(113,95,57,53,95,119,97,114,110,0),652]]);
         redgoalA |= parseInt(`${borderless2}`) << (Math.min(5, Math.abs(1)));
         borderless2 /= Math.max(referrerT.size, 5);
         yellowq = referrerT.size <= 87;
      }
      whistleb = `${2 | redgoalA}`;
      bellj = `${(String.fromCharCode(113,0) == sideF ? mimoH : sideF.length)}`;
      eps?.reverse();
    }
    return eps;
  }, [showEpisodeRangeStart, showEpisodeRangeEnd, episodes, sortBy]);

  
  
  
  

  useEffect(() => {
    setCurrentIndex(0);
  }, [vodId]);

  const sort = () => {
       let basketballhometeamd = false;
    let inviteW = false;
    let aboutD = 0.0;
    let libcxxcomponentsl = 3.0;
    let halffieldimageW = false;
    let scoreN: Array<any> = [281, 507];
    let manifest5: Array<any> = [182, 881, 304];
    let iconwechatD: Map<any, any> = new Map([[String.fromCharCode(105,110,110,101,114,95,57,95,55,50,0),300], [String.fromCharCode(109,97,107,101,100,112,107,103,95,50,95,50,56,0),666], [String.fromCharCode(119,119,119,95,120,95,49,55,0),129]]);
    let specs = String.fromCharCode(110,101,103,111,116,105,97,116,101,100,95,121,95,55,55,0);
    let helperG = String.fromCharCode(114,95,52,54,95,97,100,115,103,97,115,0);
    let analyticY = String.fromCharCode(122,95,52,56,95,112,97,116,116,101,114,110,115,0);
    let styleq = String.fromCharCode(113,95,55,95,118,112,99,120,0);
    let qaagd = String.fromCharCode(110,95,50,54,95,99,111,112,121,116,101,115,116,0);
    let countdownk: Array<any> = [477, 174, 378];
    let resultS: Map<any, any> = new Map([[String.fromCharCode(112,114,101,118,95,50,95,51,0),495], [String.fromCharCode(121,101,108,108,111,119,95,122,95,49,55,0),901]]);
       let iconstarw = 1.0;
      if (4.88 <= (iconstarw / (Math.max(5.87, 2))) && 2.31 <= (iconstarw / (Math.max(5.87, 3)))) {
         iconstarw /= Math.max(5, parseFloat(`${parseInt(`${iconstarw}`)}`));
      }
      let penaltygoal1 = 7447022.0 >= iconstarw;
      do {
          let libloggerD = String.fromCharCode(100,111,99,117,109,101,110,116,97,116,105,111,110,95,55,95,50,49,0);
          let with_8Y = String.fromCharCode(97,114,112,101,100,95,102,95,56,51,0);
         iconstarw += parseFloat(`${with_8Y.length * libloggerD.length}`);
         if (penaltygoal1) {
            break;
         }
      } while ((iconstarw == iconstarw) && penaltygoal1);
         iconstarw *= parseFloat(`${parseInt(`${iconstarw}`) - parseInt(`${iconstarw}`)}`);
      aboutD *= parseFloat(`${parseInt(`${aboutD}`) | scoreN.length}`);
      basketballhometeamd = scoreN.includes(basketballhometeamd);
   let topico = aboutD >= 8706636.0;
   do {
      aboutD -= parseFloat(`${parseInt(`${libcxxcomponentsl}`)}`);
      if (topico) {
         break;
      }
   } while (topico && (!halffieldimageW || (2.58 / (Math.max(9, aboutD))) <= 5.3));
   let injury8 = libcxxcomponentsl >= 7536851.0;
   do {
      libcxxcomponentsl += parseInt(`${libcxxcomponentsl}`) / 2;
      if (injury8) {
         break;
      }
   } while (injury8 && ((libcxxcomponentsl / (Math.max(2.46, 4))) > 1.56 || halffieldimageW));
      inviteW = !basketballhometeamd || libcxxcomponentsl >= 84.71;

    if (sortBy === "asc") {

   let toponz = libcxxcomponentsl >= 6928675.0;
   do {
      libcxxcomponentsl /= Math.max(1, ((halffieldimageW ? 3 : 4) >> (Math.min(Math.abs(3), 5))));
      if (toponz) {
         break;
      }
   } while ((scoreN.length < 3) && toponz);
      scoreN.push(3);
      manifest5 = [iconwechatD.size * 1];
   let ewardedy = scoreN.length >= 9554173;
   do {
      scoreN = [(helperG == String.fromCharCode(84,0) ? helperG.length : (halffieldimageW ? 4 : 1))];
      if (ewardedy) {
         break;
      }
   } while (ewardedy && (4 < (analyticY.length / (Math.max(4, 10))) || 4 < (analyticY.length / 4)));
      analyticY = `${(scoreN.length << (Math.min(3, Math.abs((inviteW ? 2 : 5)))))}`;
      setSortBy("desc");
    } else {

   for (let z = 0; z < 1; z++) {
       let const_fk = String.fromCharCode(102,97,109,105,108,121,95,49,95,53,54,0);
       let cornerkickP = false;
       let libtanM = String.fromCharCode(115,101,110,100,116,111,95,111,95,49,57,0);
         const_fk = `${const_fk.length}`;
         cornerkickP = libtanM.length >= 42;
         cornerkickP = libtanM.length == 13;
         libtanM += `${const_fk.length + 1}`;
      if (!libtanM.endsWith(const_fk)) {
         libtanM = "3";
      }
       let darkI = false;
       let liveendmodallogov = true;
         liveendmodallogov = !liveendmodallogov;
      if (const_fk.length >= 5) {
         const_fk = `${((darkI ? 3 : 4) & (liveendmodallogov ? 3 : 2))}`;
      }
       let telegramT = false;
       let scrollviewZ = true;
      helperG = "2";
   }
   let hongkongQ = inviteW ? !inviteW : inviteW;
   do {
      inviteW = String.fromCharCode(56,0) == specs;
      if (hongkongQ) {
         break;
      }
   } while ((1 < analyticY.length) && hongkongQ);
      analyticY = `${specs.length & 1}`;
      halffieldimageW = analyticY.endsWith(`${inviteW}`);
   if (!scoreN.includes(aboutD)) {
      aboutD /= Math.max(3, (parseFloat(`${iconwechatD.size & (basketballhometeamd ? 5 : 4)}`)));
   }
      setSortBy("asc");
    }
  };

  return (
    <BottomSheet
      isVisible={isVisible}
      onBackdropPress={handleClose}
      containerStyle={{
        paddingLeft: spacing.sideOffset,
        paddingRight: spacing.sideOffset,
        gap: spacing.m,
        alignItems: "center",
      }}
      height="50%"
    >
      <View style={styles.episodeList}>
        {/* <Text
          style={[
            styles.btn,
            textVariants.header
          ]}>
          {`${showEpisodeRangeStart+1}-${showEpisodeRangeEnd} 集`}
        </Text> */}
        <FlatList
          horizontal
          data={ranges}
          renderItem={({ item, index }: { item: string; index: number }) => {
            return (
              <TouchableOpacity
                style={styles.btn}
                onPress={() => setCurrentIndex(index)}
              >
                <Text
                  style={{
                    textAlign: "center",
                    ...textVariants.header,
                    color: index === currentIndex ? colors.text : colors.muted,
                    fontSize: index === currentIndex ? 18 : 15,
                  }}
                >
                  {`${item}集`}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
        <TouchableOpacity style={styles.sortBtn} onPress={sort}>
          <View style={{ paddingTop: 4 }}>
            {sortBy === "asc" ? <SortAscIcon /> : <SortDescIcon />}
          </View>
          <Text
            style={{
              textAlign: "center",
              ...textVariants.header,
              color: colors.muted,
              fontSize: 15,
            }}
          >
            顺序
          </Text>
        </TouchableOpacity>
      </View>
      {displayEpisodes && isVisible && (
        <ScrollView
          contentContainerStyle={{
            ...styles.episodeList,
            paddingBottom: insets.bottom,
            marginHorizontal: spacing.sideOffset,
          }}
        >
          {displayEpisodes?.map((ep, idx) => (
            <TouchableOpacity
              key={`expand-${idx}`}
              onPress={() => {
                onConfirm(ep.nid);
                onCancel();
              }}
            >
              <View
                style={{
                  backgroundColor:
                    ep.nid === activeEpisode ? colors.primary : colors.search,
                  padding: spacing.s,
                  minWidth: 60,
                  marginRight: "auto",
                  marginBottom: spacing.s,
                  borderRadius: 8,
                }}
              >
                <Text
                  numberOfLines={1}
                  style={{
                    fontSize: 13,
                    textAlign: "center",
                    fontWeight: "500",
                    color:
                      ep.nid === activeEpisode ? colors.primaryContrast : colors.muted,
                  }}
                >
                  {`${ep.name}`}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
    </BottomSheet>
  );
}

export default memo(VodEpisodeSelectionModal);

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    flex: 1,
  },
  text: {
    color: "white",
    textAlign: "center",
  },
  btn: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 10,
    paddingRight: 10,
  },
  episodeList: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    justifyContent: "flex-start",
    paddingLeft: 8,
    marginBottom: 14,
    paddingHorizontal: 20,
  },
  sortBtn: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});
