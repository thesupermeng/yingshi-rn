import { useState } from "react";
import { Image, Keyboard, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CBottomSheet } from "../atoms";
import { useNavigation, useTheme } from "@react-navigation/native";
import { CTextInput } from "../atoms/textInput";
import { useDispatch } from "react-redux";
import { changeScreenAction } from "@redux/actions/yys_runtimescheduler";
import { updateUsernameState } from "@redux/actions/yys_gesture";
import { yys_GesturesConst } from "@api";


interface yys_ConfigureUimanager {
    isVisible?: boolean;
    handleClose?: () => any;
    initialUsername: string,
    onSubmitSuccess?: (username: string) => void,
}

export const ChangeUsernameModal = ({
    isVisible = false,
    handleClose,
    initialUsername,
    onSubmitSuccess,
}: yys_ConfigureUimanager) => {
    const { textVariants } = useTheme();

    const dispatch = useDispatch();
    const navigation = useNavigation();

    const [username, setUsername] = useState(initialUsername);
    const [usernameErrMsg, setUsernameErrMsg] = useState<string | null>(null);

    const [isSubmitting, setSubmitting] = useState(false);

    const onUsernameChange = (value: any) => {
        setUsername(value);
        validateUsername(value.replace(/\s+/g, ""));
    };

    const validateUsername = (username: string): boolean => {
        if (2 <= username.length && username.length <= 18) {
            setUsernameErrMsg(null);
            return true;
        } else {
            setUsernameErrMsg("昵称必须介于2-18个字");
            return false;
        }
    }

    const resetForm = () => {
       let descE: Map<any, any> = new Map([[String.fromCharCode(111,95,49,54,95,102,105,101,108,0),true ], [String.fromCharCode(98,95,53,49,95,97,100,105,100,0),false ], [String.fromCharCode(115,101,103,102,101,97,116,117,114,101,95,107,95,52,49,0),true ]]);
    let corej: Array<any> = [String.fromCharCode(112,117,108,115,101,97,117,100,105,111,115,121,109,98,111,108,116,97,98,108,101,95,119,95,51,48,0), String.fromCharCode(111,95,54,56,95,107,101,121,105,100,0), String.fromCharCode(109,95,56,51,95,100,111,119,110,115,116,114,101,97,109,0)];
    let activityG = String.fromCharCode(115,101,110,100,101,114,95,110,95,50,54,0);
    let moon0 = 0;
    let hookN: Array<any> = [109, 492];
    let androidO = String.fromCharCode(108,95,51,51,95,114,101,105,110,105,116,0);
    let station5: Array<any> = [399, 469, 24];
    let nativemodule_: Array<any> = [String.fromCharCode(101,95,51,56,95,119,114,105,116,101,108,111,99,107,0), String.fromCharCode(122,101,114,111,99,111,100,101,99,95,53,95,50,54,0), String.fromCharCode(120,95,49,51,95,117,110,105,110,105,116,0)];
    let line6 = 1.0;
    let combinedc = String.fromCharCode(106,95,54,56,95,99,104,97,110,110,101,108,109,97,112,0);
    let trophyH = false;
    let catagoryH = String.fromCharCode(115,101,109,97,110,116,105,99,97,108,108,121,95,107,95,50,54,0);
    let mbjscommonO = String.fromCharCode(108,105,110,101,97,114,95,55,95,56,0);
    let fastforwardm = 1.0;
    let stepE = String.fromCharCode(101,120,116,114,97,102,105,101,108,100,95,110,95,56,54,0);
    let stringj = false;
      descE.set(`${line6}`, parseInt(`${line6}`));
       let modelsV = String.fromCharCode(122,95,57,95,117,110,100,101,114,0);
       let eactt = 1.0;
         eactt -= parseInt(`${eactt}`);
      if ((eactt / (Math.max(1.16, 10))) == 5.50) {
          let selectR = String.fromCharCode(113,95,51,57,95,120,106,112,101,103,0);
          let step2 = 5.0;
          let binddatasS = false;
         modelsV = `${((binddatasS ? 4 : 4) * parseInt(`${step2}`))}`;
         selectR = `${selectR.length / 3}`;
         step2 -= parseFloat(`${selectR.length << (Math.min(Math.abs(3), 2))}`);
      }
      for (let w = 0; w < 3; w++) {
         eactt *= 1 << (Math.min(5, Math.abs(parseInt(`${eactt}`))));
      }
         modelsV += "2";
          let refreshR = 3.0;
          let vignetteB = true;
         eactt -= parseInt(`${refreshR}`) - 3;
         refreshR *= ((vignetteB ? 5 : 1));
         eactt -= parseInt(`${eactt}`) * modelsV.length;
      station5.push(station5.length & activityG.length);
   for (let y = 0; y < 3; y++) {
      combinedc = `${combinedc.length}`;
   }
   let bodanM = 8313451 <= moon0;
   do {
      moon0 ^= 2 / (Math.max(parseInt(`${line6}`), 3));
      if (bodanM) {
         break;
      }
   } while ((3 >= (4 % (Math.max(7, station5.length))) && (station5.length % 4) >= 4) && bodanM);
   while (1 >= moon0) {
      moon0 |= 3 & activityG.length;
      break;
   }
   let nnewinterstitialK = activityG == String.fromCharCode(111,119,121,116,111,55,112,121,107,0);
   do {
       let videojsF = 5;
          let referrerz = String.fromCharCode(110,117,109,98,101,114,95,100,95,56,53,0);
          let connectionW = String.fromCharCode(113,95,52,95,102,111,114,109,97,116,115,0);
          let libavformatI = String.fromCharCode(104,95,52,50,95,101,100,105,116,105,110,103,0);
         videojsF |= libavformatI.length * 2;
         referrerz = `${1 ^ connectionW.length}`;
         connectionW = `${connectionW.length}`;
         libavformatI += `${referrerz.length * connectionW.length}`;
      while (1 == (videojsF | 4)) {
         videojsF += videojsF >> (Math.min(Math.abs(2), 2));
         break;
      }
          let nterstitial4: Map<any, any> = new Map([[String.fromCharCode(108,95,51,54,95,115,111,117,114,99,101,105,100,0),333], [String.fromCharCode(116,120,116,95,102,95,57,54,0),612]]);
         videojsF <<= Math.min(Math.abs(1 * videojsF), 2);
         nterstitial4.set(`${nterstitial4.size}`, nterstitial4.size);
      activityG += "2";
      if (nnewinterstitialK) {
         break;
      }
   } while ((combinedc.endsWith(activityG)) && nnewinterstitialK);
   while (!combinedc.endsWith(`${station5.length}`)) {
       let executorg = 5.0;
       let animationsP = 5.0;
          let sentryV = String.fromCharCode(101,95,56,49,95,99,104,97,110,103,105,110,103,0);
          let k_unlock8 = String.fromCharCode(115,112,111,116,95,114,95,56,55,0);
          let langkeyH = 0.0;
         animationsP *= parseInt(`${langkeyH}`) << (Math.min(2, Math.abs(1)));
         sentryV = `${2 ^ k_unlock8.length}`;
         k_unlock8 += `${1 | sentryV.length}`;
         langkeyH -= (sentryV == String.fromCharCode(109,0) ? k_unlock8.length : sentryV.length);
         animationsP *= parseInt(`${executorg}`);
         animationsP *= parseInt(`${animationsP}`) % (Math.max(parseInt(`${executorg}`), 7));
      for (let m = 0; m < 2; m++) {
         animationsP *= parseInt(`${animationsP}`) ^ 3;
      }
      let mutedY = 5021924.0 <= animationsP;
      do {
         animationsP /= Math.max(2, 5);
         if (mutedY) {
            break;
         }
      } while ((3.68 <= executorg) && mutedY);
         animationsP += 3 & parseInt(`${executorg}`);
      station5 = [3];
      break;
   }
   let info9 = 7993718 >= nativemodule_.length;
   do {
      nativemodule_.push(1 + descE.size);
      if (info9) {
         break;
      }
   } while ((nativemodule_.length < 4) && info9);
      moon0 &= androidO.length % (Math.max(3, 9));
   for (let y = 0; y < 1; y++) {
      activityG = `${hookN.length}`;
   }
   for (let n = 0; n < 1; n++) {
      nativemodule_.push(nativemodule_.length / (Math.max(combinedc.length, 5)));
   }
   let downloadO = 5084940 <= corej.length;
   do {
      corej.push(combinedc.length / 3);
      if (downloadO) {
         break;
      }
   } while (downloadO && (activityG.length > corej.length));
   let chinasameu = 5913013 <= mbjscommonO.length;
   do {
      mbjscommonO = `${(activityG == String.fromCharCode(101,0) ? station5.length : activityG.length)}`;
      if (chinasameu) {
         break;
      }
   } while (chinasameu && (activityG.length < mbjscommonO.length));
      hookN.push(activityG.length ^ nativemodule_.length);
      line6 -= parseFloat(`${1}`);

        setUsername(initialUsername);

   while (3 > mbjscommonO.length && trophyH) {
      trophyH = hookN.length <= moon0;
      break;
   }
   while (4 >= (hookN.length >> (Math.min(Math.abs(2), 5))) || (hookN.length * 2) >= 3) {
      line6 += parseFloat(`${2}`);
      break;
   }
      line6 -= parseFloat(`${station5.length - catagoryH.length}`);
   let catalogb = fastforwardm <= 6458204.0;
   do {
       let roomg = false;
       let selectedw = true;
       let schedulere = String.fromCharCode(107,95,57,54,95,112,114,111,112,111,115,101,0);
      while (selectedw) {
         schedulere = `${((selectedw ? 3 : 2) + 3)}`;
         break;
      }
      while (roomg && !selectedw) {
          let bodane = true;
          let station_ = 1.0;
          let libturbomodulejsijnix = String.fromCharCode(117,95,57,48,95,112,97,114,116,105,116,105,111,110,115,0);
         selectedw = !selectedw && roomg;
         bodane = libturbomodulejsijnix.endsWith(`${station_}`);
         station_ -= parseFloat(`${parseInt(`${station_}`) / 3}`);
         libturbomodulejsijnix += `${parseInt(`${station_}`) - libturbomodulejsijnix.length}`;
         break;
      }
      if (!selectedw || !roomg) {
          let libhermesY = String.fromCharCode(114,101,115,111,108,118,101,95,112,95,51,53,0);
          let watchj: Array<any> = [String.fromCharCode(97,112,112,95,97,95,49,52,0), String.fromCharCode(110,115,115,101,95,120,95,55,57,0)];
         selectedw = !selectedw;
         libhermesY = `${(String.fromCharCode(105,0) == libhermesY ? watchj.length : libhermesY.length)}`;
         watchj = [libhermesY.length];
      }
      if (1 <= schedulere.length) {
         schedulere = "3";
      }
         schedulere += `${(String.fromCharCode(56,0) == schedulere ? schedulere.length : (selectedw ? 2 : 1))}`;
       let sigmobp = true;
         roomg = (roomg ? selectedw : roomg);
       let malaysiah = String.fromCharCode(121,95,53,53,95,100,98,108,113,117,111,116,101,0);
          let default_7w = 0.0;
         selectedw = selectedw && 55.99 == default_7w;
      fastforwardm -= parseFloat(`${androidO.length / 2}`);
      if (catalogb) {
         break;
      }
   } while (((hookN.length << (Math.min(Math.abs(4), 5))) >= 3 || (parseFloat(`${hookN.length}`) - fastforwardm) >= 3.38) && catalogb);
       let confirmation9 = 4;
       let sportd = 3;
       let selectede = String.fromCharCode(101,95,50,57,95,99,104,107,108,105,115,116,0);
      for (let o = 0; o < 2; o++) {
          let circle1 = String.fromCharCode(115,95,52,48,95,108,105,109,105,116,0);
          let backgroundR = String.fromCharCode(105,95,57,50,95,97,105,109,100,0);
          let libavformatl = String.fromCharCode(99,117,114,114,114,101,110,116,95,50,95,55,0);
          let mbbidN = String.fromCharCode(107,95,49,53,0);
          let topicz: Array<any> = [739, 64, 896];
         sportd *= topicz.length;
         circle1 = `${1 << (Math.min(3, backgroundR.length))}`;
         backgroundR = `${libavformatl.length >> (Math.min(backgroundR.length, 3))}`;
         libavformatl += `${backgroundR.length | mbbidN.length}`;
         mbbidN = `${(String.fromCharCode(50,0) == mbbidN ? mbbidN.length : circle1.length)}`;
         topicz.push(mbbidN.length + backgroundR.length);
      }
          let agreementT = 5.0;
         sportd += parseInt(`${agreementT}`);
         sportd /= Math.max(confirmation9, 1);
         confirmation9 /= Math.max(3, 1);
      if (5 == confirmation9) {
         confirmation9 -= (String.fromCharCode(69,0) == selectede ? selectede.length : sportd);
      }
         selectede = `${sportd}`;
         selectede = `${sportd % 3}`;
      let readz = selectede == String.fromCharCode(98,105,50,111,95,0);
      do {
          let sigmobJ: Array<any> = [272, 73, 994];
          let privilege0: Map<any, any> = new Map([[String.fromCharCode(97,97,99,112,115,121,95,51,95,48,0),String.fromCharCode(109,97,110,105,112,117,108,97,116,101,95,107,95,53,51,0)], [String.fromCharCode(98,95,52,57,95,97,99,107,110,111,119,108,101,100,103,101,0),String.fromCharCode(104,95,52,52,95,117,110,98,108,117,114,0)], [String.fromCharCode(114,95,53,95,108,111,103,103,101,114,115,0),String.fromCharCode(113,95,53,56,95,99,115,104,97,114,112,0)]]);
         selectede += `${3 >> (Math.min(3, Math.abs(privilege0.size)))}`;
         sigmobJ = [sigmobJ.length >> (Math.min(sigmobJ.length, 1))];
         privilege0.set(`${sigmobJ.length}`, 2 + sigmobJ.length);
         if (readz) {
            break;
         }
      } while ((sportd >= 1) && readz);
         confirmation9 += 2;
      nativemodule_.push(corej.length / (Math.max(1, 9)));
      trophyH = station5.length <= 86;
   if ((nativemodule_.length ^ 4) >= 3 || 3 >= (4 ^ nativemodule_.length)) {
      nativemodule_ = [3];
   }
      trophyH = androidO == String.fromCharCode(53,0);
      line6 *= parseFloat(`${station5.length << (Math.min(catagoryH.length, 5))}`);
       let successr = false;
          let combineO = 3;
          let routerT = String.fromCharCode(106,95,53,56,95,102,105,110,103,101,114,112,114,105,110,116,115,0);
          let confirmationO = String.fromCharCode(97,99,100,101,99,95,122,95,52,50,0);
         successr = !successr;
         combineO &= combineO;
         routerT = `${3 ^ routerT.length}`;
         confirmationO += `${routerT.length}`;
      while (!successr) {
         successr = (successr ? successr : successr);
         break;
      }
      for (let y = 0; y < 2; y++) {
         successr = !successr;
      }
      trophyH = !successr;
   let megaphone8 = descE.size >= 5361576;
   do {
       let belln = String.fromCharCode(120,95,52,56,95,100,111,119,110,108,111,97,100,105,110,103,0);
       let shirtX = 5.0;
       let layoutB = 2.0;
       let fieldC = 4;
          let splash2 = String.fromCharCode(98,95,57,50,95,115,112,101,99,105,97,108,0);
          let filterw = true;
         belln += `${belln.length}`;
         splash2 = `${2 >> (Math.min(1, splash2.length))}`;
         filterw = splash2.startsWith(`${filterw}`);
      descE = new Map([[`${station5.length}`, moon0 * station5.length]]);
      if (megaphone8) {
         break;
      }
   } while (megaphone8 && (3 == (descE.size << (Math.min(Math.abs(2), 2))) || (descE.size << (Math.min(Math.abs(2), 2))) == 2));
      line6 += (parseFloat(`${(trophyH ? 5 : 3)}`));
   if ((combinedc.length | 4) < 2) {
      combinedc = `${station5.length}`;
   }
   let untickL = 5355934 <= station5.length;
   do {
      station5 = [corej.length << (Math.min(4, Math.abs(parseInt(`${fastforwardm}`))))];
      if (untickL) {
         break;
      }
   } while (untickL && ((stepE.length | station5.length) > 3 || (3 | station5.length) > 3));
      stepE += "1";
        setUsernameErrMsg(null);
    }

    const onClose = () => {
       let target2 = false;
    let applicationc = String.fromCharCode(109,107,118,109,117,120,101,114,95,116,95,57,48,0);
    let screenG = 3.0;
    let bridge6: Map<any, any> = new Map([[String.fromCharCode(116,105,108,101,115,95,110,95,54,0),470], [String.fromCharCode(119,95,56,56,95,117,99,111,110,115,116,0),698]]);
    let servicep = String.fromCharCode(103,95,49,57,95,104,105,116,115,0);
    let promotion1 = 1;
    let google3: Array<any> = [954, 195, 790];
    let profile0 = 2.0;
    let hooks1: Array<any> = [854, 692, 865];
    let arear: Array<any> = [529, 224];
    let watch8: Map<any, any> = new Map([[String.fromCharCode(107,110,111,119,110,95,106,95,49,54,0),192], [String.fromCharCode(103,95,52,48,95,117,110,115,112,101,99,105,102,105,101,100,0),400], [String.fromCharCode(117,110,108,105,109,105,116,101,100,95,50,95,53,50,0),672]]);
    let cancel8 = String.fromCharCode(105,110,115,116,114,117,99,116,105,111,110,95,120,95,53,49,0);
    let utilsd = true;
    let fastB = true;
    let resendt: Map<any, any> = new Map([[String.fromCharCode(114,95,53,51,95,115,121,109,98,111,108,105,99,97,116,97,98,108,101,0),164], [String.fromCharCode(100,95,48,95,111,112,116,105,109,117,109,0),577]]);
      applicationc += "3";
      profile0 /= Math.max(3, hooks1.length);
   if ((applicationc.length + 4) < 5) {
      screenG -= parseFloat(`${arear.length ^ 2}`);
   }
   if (target2) {
      promotion1 &= parseInt(`${profile0}`);
   }
      bridge6.set(`${promotion1}`, google3.length);
      applicationc += `${hooks1.length << (Math.min(3, Math.abs(parseInt(`${profile0}`))))}`;
   for (let c = 0; c < 2; c++) {
       let favoritev = String.fromCharCode(97,108,116,95,56,95,51,56,0);
       let umeng8 = String.fromCharCode(101,120,99,101,112,116,105,111,110,115,95,52,95,55,54,0);
       let moduleB = 3.0;
       let circleO: Map<any, any> = new Map([[String.fromCharCode(97,108,97,98,97,115,116,101,114,95,118,95,55,53,0),false ], [String.fromCharCode(110,95,57,51,95,106,111,98,113,0),true ]]);
       let libglogx = 0;
       let contextq: Map<any, any> = new Map([[String.fromCharCode(122,95,50,53,95,103,101,116,104,111,115,116,98,121,97,100,100,114,0),String.fromCharCode(108,95,49,48,95,115,117,114,102,97,99,101,115,0)], [String.fromCharCode(103,100,105,103,114,97,98,95,106,95,53,51,0),String.fromCharCode(114,101,108,97,116,105,118,101,95,48,95,53,56,0)]]);
       let executorS: Map<any, any> = new Map([[String.fromCharCode(120,95,52,95,112,114,101,97,108,108,111,99,97,116,101,0),579], [String.fromCharCode(115,95,52,51,95,113,99,97,110,0),747]]);
      while (3 <= umeng8.length) {
          let minimizeG = 2.0;
         contextq.set(`${libglogx}`, libglogx);
         minimizeG += parseFloat(`${parseInt(`${minimizeG}`) & 2}`);
         break;
      }
      if (3.1 == (moduleB / (Math.max(parseFloat(`${circleO.size}`), 1))) || (moduleB / (Math.max(3.1, 9))) == 2.87) {
         circleO.set(`${favoritev}`, favoritev.length >> (Math.min(Math.abs(1), 4)));
      }
      let progressf = circleO.size <= 6024032;
      do {
         circleO.set(`${circleO.size}`, contextq.size >> (Math.min(Math.abs(1), 2)));
         if (progressf) {
            break;
         }
      } while ((circleO.get(`${moduleB}`) != null) && progressf);
      while (4 == (executorS.size / 3)) {
         executorS = new Map([[`${contextq.size}`, contextq.size >> (Math.min(Math.abs(1), 3))]]);
         break;
      }
      while ((4 << (Math.min(4, favoritev.length))) <= 2 || 4 <= (favoritev.length << (Math.min(4, Math.abs(libglogx))))) {
         libglogx &= favoritev.length;
         break;
      }
         moduleB -= parseFloat(`${2}`);
         libglogx -= executorS.size;
      let bellY = libglogx <= 7861372;
      do {
          let policy1: Map<any, any> = new Map([[String.fromCharCode(109,117,108,116,105,115,116,101,112,95,118,95,51,49,0),816], [String.fromCharCode(105,95,56,50,95,115,112,97,99,101,114,0),677], [String.fromCharCode(103,108,111,98,97,108,116,101,109,95,104,95,57,50,0),583]]);
          let bootsplashQ: Array<any> = [672, 286, 815];
          let logout3: Map<any, any> = new Map([[String.fromCharCode(102,95,55,49,95,100,101,106,117,100,100,101,114,0),true ], [String.fromCharCode(120,95,53,55,95,119,114,105,116,101,97,98,108,101,0),false ], [String.fromCharCode(99,104,97,114,103,101,95,54,95,54,52,0),false ]]);
          let countryV: Array<any> = [614, 174, 25];
         libglogx <<= Math.min(Math.abs(umeng8.length >> (Math.min(5, Math.abs(policy1.size)))), 1);
         policy1.set(`${bootsplashQ.length}`, logout3.size & 1);
         bootsplashQ.push(countryV.length);
         logout3.set(`${countryV.length}`, countryV.length);
         if (bellY) {
            break;
         }
      } while (((4 + favoritev.length) >= 2) && bellY);
         circleO.set(`${libglogx}`, libglogx ^ 2);
         umeng8 += `${executorS.size ^ umeng8.length}`;
         favoritev += "2";
      let whatsappd = umeng8 == String.fromCharCode(110,117,105,110,55,52,0);
      do {
          let liveA = 0.0;
          let show9: Array<any> = [23, 567, 255];
         umeng8 = `${libglogx / (Math.max(parseInt(`${liveA}`), 2))}`;
         liveA -= parseFloat(`${3 ^ show9.length}`);
         show9.push(show9.length * 1);
         if (whatsappd) {
            break;
         }
      } while (whatsappd && (umeng8 != String.fromCharCode(56,0) || favoritev.length > 1));
          let chartA = String.fromCharCode(115,119,97,112,112,101,114,95,107,95,56,53,0);
          let bingo = 2.0;
         moduleB += parseFloat(`${circleO.size}`);
         chartA += `${(String.fromCharCode(87,0) == chartA ? parseInt(`${bingo}`) : chartA.length)}`;
         bingo += parseFloat(`${2 >> (Math.min(5, chartA.length))}`);
      let popup4 = 5475603 >= umeng8.length;
      do {
         umeng8 = `${(umeng8 == String.fromCharCode(87,0) ? umeng8.length : parseInt(`${moduleB}`))}`;
         if (popup4) {
            break;
         }
      } while ((parseFloat(`${umeng8.length}`) == moduleB) && popup4);
      hooks1 = [parseInt(`${profile0}`)];
   }
   for (let l = 0; l < 1; l++) {
      screenG /= Math.max(parseFloat(`${3}`), 1);
   }
   if (applicationc.includes(`${target2}`)) {
      target2 = hooks1.includes(google3[0]);
   }

        if (handleClose) handleClose();

   let injuryQ = screenG >= 6752714.0;
   do {
      screenG *= parseFloat(`${promotion1 << (Math.min(Math.abs(1), 3))}`);
      if (injuryQ) {
         break;
      }
   } while ((arear.includes(screenG)) && injuryQ);
   while (2 < bridge6.size) {
      bridge6 = new Map([[`${hooks1.length}`, hooks1.length << (Math.min(Math.abs(3), 1))]]);
      break;
   }
      profile0 -= applicationc.length << (Math.min(2, arear.length));
      profile0 /= Math.max(3, 3);
   if ((applicationc.length << (Math.min(1, hooks1.length))) < 3) {
      applicationc += "3";
   }
   let long_aiS = screenG <= 6858628.0;
   do {
       let soundp = 0.0;
      if ((soundp - 1.22) >= 2.62 && 1.91 >= (1.22 / (Math.max(7, soundp)))) {
         soundp += parseInt(`${soundp}`) * parseInt(`${soundp}`);
      }
         soundp -= parseInt(`${soundp}`);
      for (let o = 0; o < 1; o++) {
         soundp *= parseInt(`${soundp}`) / (Math.max(parseInt(`${soundp}`), 1));
      }
      screenG -= (parseFloat(`${(target2 ? 5 : 1) | 2}`));
      if (long_aiS) {
         break;
      }
   } while (long_aiS && ((parseInt(`${screenG}`) + applicationc.length) == 5));
   if (3 <= promotion1) {
      hooks1 = [promotion1];
   }
      bridge6.set(applicationc, (applicationc == String.fromCharCode(120,0) ? google3.length : applicationc.length));
   while (4 <= (applicationc.length % (Math.max(5, 3))) || (google3.length % (Math.max(3, applicationc.length))) <= 5) {
      applicationc += `${servicep.length | 2}`;
      break;
   }

        Keyboard.dismiss();

       let infoE = 3.0;
         infoE += 1;
      while (5.24 <= (infoE - infoE)) {
         infoE /= Math.max(1, parseInt(`${infoE}`));
         break;
      }
      while (5.81 < infoE) {
          let catagory1 = String.fromCharCode(98,95,52,48,95,99,117,114,108,121,0);
          let related2 = 5.0;
          let whistleB: Array<any> = [String.fromCharCode(100,101,105,110,105,116,95,106,95,51,48,0), String.fromCharCode(110,95,49,48,48,95,99,111,100,101,98,111,111,107,0)];
          let short_3cQ = 1.0;
          let mail_ = String.fromCharCode(99,114,111,108,108,95,109,95,56,0);
         infoE -= parseInt(`${short_3cQ}`) % (Math.max(3, mail_.length));
         catagory1 += `${2 | catagory1.length}`;
         related2 -= parseFloat(`${whistleB.length}`);
         whistleB.push(3);
         short_3cQ /= Math.max(parseFloat(`${whistleB.length}`), 4);
         mail_ = `${whistleB.length ^ catagory1.length}`;
         break;
      }
      profile0 -= 2;
      google3 = [arear.length ^ 1];
   let modulex = 5904835 <= google3.length;
   do {
      google3 = [parseInt(`${screenG}`) >> (Math.min(Math.abs(bridge6.size), 4))];
      if (modulex) {
         break;
      }
   } while (modulex && (3 == (3 | google3.length) || (4.83 - screenG) == 5.87));
       let r_image3 = String.fromCharCode(99,95,49,51,95,109,105,116,101,114,0);
       let zhuboD = false;
      if (r_image3.length >= 5) {
         r_image3 = `${r_image3.length}`;
      }
          let inviteA = 3;
         zhuboD = !zhuboD;
         inviteA |= 1 % (Math.max(9, inviteA));
         r_image3 += `${((zhuboD ? 2 : 2))}`;
       let skipY = String.fromCharCode(99,111,109,112,111,115,105,116,105,110,103,95,51,95,57,56,0);
       let videocommonQ = String.fromCharCode(118,95,53,95,97,105,116,101,114,0);
         videocommonQ += `${r_image3.length}`;
      for (let j = 0; j < 1; j++) {
         zhuboD = zhuboD && r_image3.length <= 62;
      }
      target2 = profile0 <= 50.31;
       let ballT = 2.0;
      for (let s = 0; s < 3; s++) {
          let sellG = String.fromCharCode(102,97,100,101,100,95,55,95,48,0);
          let libavdevice9 = 5.0;
         ballT -= parseInt(`${libavdevice9}`) >> (Math.min(sellG.length, 3));
      }
      for (let t = 0; t < 2; t++) {
         ballT += 1 & parseInt(`${ballT}`);
      }
      for (let q = 0; q < 3; q++) {
          let sharede = 4.0;
          let largef = 5;
          let ruless = 2;
          let langkeyx = 4.0;
         ballT -= 2;
         sharede += parseFloat(`${parseInt(`${langkeyx}`)}`);
         largef -= parseInt(`${langkeyx}`);
         ruless ^= parseInt(`${sharede}`);
      }
      hooks1.push(2 << (Math.min(Math.abs(parseInt(`${screenG}`)), 1)));
   for (let l = 0; l < 3; l++) {
      screenG -= parseFloat(`${arear.length % 2}`);
   }
   while (1 == (3 & arear.length)) {
       let loginw: Map<any, any> = new Map([[String.fromCharCode(105,100,108,105,115,116,95,114,95,55,0),976], [String.fromCharCode(105,95,50,48,95,114,101,102,101,114,101,110,99,101,0),33]]);
       let specA = 3.0;
       let unreadc: Array<any> = [923, 648, 679];
       let tails = 1;
       let down7 = 1.0;
         down7 -= parseInt(`${down7}`);
      if ((3.6 + down7) >= 3.27 && 2 >= (loginw.size + parseInt(`${down7}`))) {
         down7 += loginw.size;
      }
      while (tails >= down7) {
          let signinupC = 5;
         tails /= Math.max(3, loginw.size % 3);
         signinupC |= 3 << (Math.min(5, Math.abs(signinupC)));
         break;
      }
         specA /= Math.max(parseFloat(`${parseInt(`${down7}`) * tails}`), 2);
          let armva6 = 0;
         loginw = new Map([[`${unreadc.length}`, 1]]);
         armva6 %= Math.max(1, 3);
      let sortU = tails >= 7525434;
      do {
         tails &= parseInt(`${specA}`) | 3;
         if (sortU) {
            break;
         }
      } while (sortU && (2 <= (unreadc.length ^ 5) || 3 <= (5 ^ unreadc.length)));
          let klevin3 = String.fromCharCode(109,95,54,50,95,112,114,101,109,117,108,116,105,112,108,105,101,100,0);
         specA /= Math.max(parseFloat(`${3}`), 4);
         klevin3 += "2";
          let overl = String.fromCharCode(99,104,114,111,109,97,116,105,99,95,48,95,49,56,0);
         loginw.set(`${down7}`, 2 * parseInt(`${down7}`));
         overl = `${2 ^ overl.length}`;
         unreadc = [parseInt(`${specA}`)];
          let stepn = 0.0;
          let nalyticso = String.fromCharCode(115,101,116,105,95,111,95,53,52,0);
          let emojid: Map<any, any> = new Map([[String.fromCharCode(99,111,109,109,117,110,105,99,97,116,105,111,110,95,113,95,57,53,0),true ], [String.fromCharCode(109,108,111,99,107,95,48,95,49,49,0),true ], [String.fromCharCode(115,95,49,53,95,107,108,97,115,115,0),true ]]);
         tails |= tails;
         stepn /= Math.max(3, (parseFloat(`${nalyticso == String.fromCharCode(54,0) ? nalyticso.length : emojid.size}`)));
         emojid.set(`${nalyticso}`, 3 * nalyticso.length);
         specA *= parseFloat(`${2}`);
          let executorw = 1.0;
          let sourceY = String.fromCharCode(114,95,57,48,95,118,114,101,99,116,0);
         specA += parseFloat(`${1}`);
         executorw -= (parseFloat(`${String.fromCharCode(107,0) == sourceY ? parseInt(`${executorw}`) : sourceY.length}`));
         tails <<= Math.min(Math.abs(2), 1);
         specA -= parseFloat(`${unreadc.length}`);
      while (2.67 >= (down7 - 5.1) || (down7 - 5.1) >= 3.77) {
         tails /= Math.max(1, 1);
         break;
      }
      profile0 *= parseInt(`${down7}`) * 3;
      break;
   }
      bridge6 = new Map([[`${watch8.size}`, watch8.size]]);
      google3.push(arear.length);
        resetForm();
    }

    const onSubmitForm = async () => {
       let detailP = false;
    let e_managerT: Map<any, any> = new Map([[String.fromCharCode(100,95,55,53,95,109,114,122,0),String.fromCharCode(116,105,109,101,114,95,51,95,55,52,0)], [String.fromCharCode(106,95,50,57,95,122,111,111,109,105,110,103,0),String.fromCharCode(117,95,57,48,95,104,97,114,101,0)], [String.fromCharCode(98,95,50,50,95,102,99,110,116,108,0),String.fromCharCode(108,95,49,51,95,114,105,110,103,105,110,103,0)]]);
    let moviesh = String.fromCharCode(101,95,51,53,95,104,97,108,102,0);
    let xvodj = String.fromCharCode(112,95,57,52,0);
    let bufferF = String.fromCharCode(100,95,49,95,101,103,97,99,121,0);
    let teamI = String.fromCharCode(113,95,50,54,95,119,101,98,114,116,99,0);
    let refreshG = 4;
    let type_ql = 5.0;
    let watchc = false;
    let gradleN: Map<any, any> = new Map([[String.fromCharCode(104,101,97,100,95,55,95,54,50,0),730], [String.fromCharCode(98,95,50,53,95,109,97,108,101,0),560]]);
    let directS = 2.0;
    let awayZ = String.fromCharCode(118,95,57,56,95,115,116,114,111,107,101,115,0);
    let sinax: Map<any, any> = new Map([[String.fromCharCode(110,95,49,53,95,98,97,99,107,117,112,0),String.fromCharCode(115,97,118,105,110,103,115,95,114,95,50,49,0)], [String.fromCharCode(105,95,51,51,95,102,111,114,107,0),String.fromCharCode(108,111,110,103,101,115,116,95,53,95,50,53,0)], [String.fromCharCode(102,95,55,54,95,102,105,110,105,115,101,100,0),String.fromCharCode(114,101,115,105,122,101,95,119,95,56,53,0)]]);
    let hejij = String.fromCharCode(117,95,54,51,95,100,116,115,104,100,0);
    let filedM = true;
       let kicks: Array<any> = [343, 510];
       let lessL = String.fromCharCode(104,95,55,55,95,100,120,118,97,0);
       let sliderV = 1;
         sliderV >>= Math.min(4, Math.abs(kicks.length + lessL.length));
      for (let c = 0; c < 3; c++) {
         kicks = [kicks.length];
      }
      if (3 > (lessL.length % (Math.max(4, kicks.length))) || 3 > (kicks.length % (Math.max(lessL.length, 4)))) {
          let vnewarchdefaults4 = true;
         lessL = `${sliderV}`;
         vnewarchdefaults4 = (vnewarchdefaults4 ? !vnewarchdefaults4 : !vnewarchdefaults4);
      }
      while (5 >= (3 % (Math.max(5, lessL.length))) && 1 >= (lessL.length % 3)) {
         lessL += `${(lessL == String.fromCharCode(116,0) ? sliderV : lessL.length)}`;
         break;
      }
       let q_countv = 5.0;
          let libreactperfloggerjniI = String.fromCharCode(114,95,56,55,95,116,101,115,101,100,103,101,0);
          let rulesu = String.fromCharCode(105,95,50,51,95,97,116,97,99,101,110,116,101,114,0);
          let libmapbufferjnik = String.fromCharCode(112,108,97,110,97,114,120,95,119,95,49,50,0);
         kicks.push(kicks.length);
         libreactperfloggerjniI = `${rulesu.length - libmapbufferjnik.length}`;
         rulesu = `${libmapbufferjnik.length}`;
         sliderV -= sliderV;
      for (let o = 0; o < 3; o++) {
         kicks.push(3);
      }
      for (let h = 0; h < 3; h++) {
         kicks = [2 | parseInt(`${q_countv}`)];
      }
      gradleN.set(`${lessL}`, e_managerT.size);
      teamI = `${bufferF.length / (Math.max(4, teamI.length))}`;

        if (usernameErrMsg !== null) return;

       let friendsq: Array<any> = [594, 19, 265];
       let combinedr: Array<any> = [645, 134];
      if (friendsq.length >= combinedr.length) {
          let videocommon0 = 2;
          let libflipperE = 0;
         friendsq = [libflipperE];
         videocommon0 |= videocommon0 * videocommon0;
         libflipperE /= Math.max(2, videocommon0 << (Math.min(Math.abs(2), 4)));
      }
      if (2 < (4 % (Math.max(3, combinedr.length)))) {
         combinedr.push(2 / (Math.max(8, combinedr.length)));
      }
      while (1 == combinedr.length) {
         combinedr.push(combinedr.length | friendsq.length);
         break;
      }
         combinedr.push(friendsq.length - combinedr.length);
      while (!combinedr.includes(friendsq.length)) {
          let whistleB = 4;
         friendsq = [whistleB + combinedr.length];
         break;
      }
         friendsq.push(combinedr.length % 3);
      directS *= (parseFloat(`${String.fromCharCode(83,0) == xvodj ? xvodj.length : bufferF.length}`));
       let editD = String.fromCharCode(112,95,55,54,95,112,108,117,103,105,110,115,0);
       let backwardg = 4.0;
         editD += `${parseInt(`${backwardg}`)}`;
      let sellX = 6144291.0 <= backwardg;
      do {
         backwardg -= parseFloat(`${editD.length}`);
         if (sellX) {
            break;
         }
      } while (sellX && (parseInt(`${backwardg}`) <= editD.length));
       let libavcodecJ: Map<any, any> = new Map([[String.fromCharCode(100,95,52,50,95,115,109,107,97,0),747], [String.fromCharCode(115,121,110,99,104,114,111,110,105,122,101,97,98,108,101,95,115,95,53,53,0),483], [String.fromCharCode(103,111,108,100,101,110,95,110,95,54,57,0),815]]);
      if (3.74 >= (backwardg - parseFloat(`${libavcodecJ.size}`))) {
         backwardg += parseFloat(`${2}`);
      }
      while (parseFloat(`${libavcodecJ.size}`) > backwardg) {
         libavcodecJ.set(`${backwardg}`, libavcodecJ.size | 2);
         break;
      }
      for (let v = 0; v < 2; v++) {
         editD += `${(String.fromCharCode(115,0) == editD ? parseInt(`${backwardg}`) : editD.length)}`;
      }
      detailP = 79 > refreshG;

        if (isSubmitting) return;

   let main_xQ = moviesh.length >= 6679797;
   do {
      moviesh += "3";
      if (main_xQ) {
         break;
      }
   } while ((bufferF == String.fromCharCode(112,0)) && main_xQ);
      awayZ += `${moviesh.length}`;
        setSubmitting(true);

   let search5 = String.fromCharCode(102,118,112,48,53,98,112,97,120,55,0) == moviesh;
   do {
      moviesh += `${gradleN.size + refreshG}`;
      if (search5) {
         break;
      }
   } while ((bufferF.length <= 1) && search5);
   for (let r = 0; r < 3; r++) {
      detailP = teamI.length >= 77 && detailP;
   }

        try {

   let typingr = watchc ? !watchc : watchc;
   do {
       let scrollviewE = String.fromCharCode(104,95,52,53,95,109,101,115,104,101,115,0);
       let mbridge7 = String.fromCharCode(100,111,120,121,103,101,110,95,48,95,56,51,0);
      let googlec = scrollviewE == String.fromCharCode(48,107,51,117,104,101,99,102,117,0);
      do {
          let forwardt: Array<any> = [783, 258, 307];
          let componentregistryg = String.fromCharCode(117,114,118,101,95,114,95,56,50,0);
          let mapbufferx: Map<any, any> = new Map([[String.fromCharCode(101,97,115,101,95,118,95,55,51,0),492], [String.fromCharCode(111,95,53,55,95,117,110,100,101,114,0),848], [String.fromCharCode(112,95,52,57,95,113,117,111,116,105,101,110,116,0),271]]);
          let goala = true;
          let panglej = String.fromCharCode(121,95,56,50,95,97,115,99,0);
         scrollviewE = `${mapbufferx.size}`;
         forwardt.push((String.fromCharCode(102,0) == componentregistryg ? panglej.length : componentregistryg.length));
         mapbufferx = new Map([[`${forwardt.length}`, forwardt.length]]);
         goala = panglej.length <= 40 || String.fromCharCode(75,0) == componentregistryg;
         if (googlec) {
            break;
         }
      } while ((mbridge7 == String.fromCharCode(54,0)) && googlec);
         mbridge7 = `${scrollviewE.length * 3}`;
      while (scrollviewE != String.fromCharCode(97,0)) {
         mbridge7 += `${scrollviewE.length % (Math.max(mbridge7.length, 6))}`;
         break;
      }
      let leagueP = 9119241 <= mbridge7.length;
      do {
         mbridge7 = `${scrollviewE.length - mbridge7.length}`;
         if (leagueP) {
            break;
         }
      } while (leagueP && (mbridge7.length <= scrollviewE.length));
      let bridgeC = 9158295 <= mbridge7.length;
      do {
          let hooks1 = 3.0;
          let type_2_: Array<any> = [586, 316];
         mbridge7 += `${mbridge7.length - type_2_.length}`;
         hooks1 -= parseInt(`${hooks1}`) % (Math.max(4, parseInt(`${hooks1}`)));
         type_2_ = [parseInt(`${hooks1}`) & 3];
         if (bridgeC) {
            break;
         }
      } while (bridgeC && (4 > mbridge7.length));
      for (let j = 0; j < 2; j++) {
         scrollviewE = "1";
      }
      watchc = String.fromCharCode(68,0) == moviesh || awayZ.length >= 41;
      if (typingr) {
         break;
      }
   } while ((4 == xvodj.length || watchc) && typingr);
       let securityN = String.fromCharCode(121,95,50,51,95,99,111,112,121,114,105,103,104,116,0);
       let whatsappb = 2;
      let largee = String.fromCharCode(101,117,117,111,0) == securityN;
      do {
          let analyticsx = 4;
         securityN += "1";
         analyticsx ^= analyticsx;
         if (largee) {
            break;
         }
      } while (largee && (whatsappb < securityN.length));
      let attributedstringE = whatsappb >= 8390550;
      do {
          let libfbI = String.fromCharCode(103,95,55,53,95,116,97,98,108,101,116,0);
          let dycreators = 5.0;
          let faviconz: Array<any> = [435, 93, 627];
          let hiadX = false;
         whatsappb *= libfbI.length / (Math.max(8, securityN.length));
         libfbI = `${3 << (Math.min(Math.abs(parseInt(`${dycreators}`)), 2))}`;
         dycreators -= (faviconz.length >> (Math.min(1, Math.abs((hiadX ? 3 : 3)))));
         faviconz.push(1);
         hiadX = hiadX || 5.10 < dycreators;
         if (attributedstringE) {
            break;
         }
      } while ((securityN.length < whatsappb) && attributedstringE);
         securityN = `${whatsappb % (Math.max(securityN.length, 9))}`;
         whatsappb ^= whatsappb;
      for (let y = 0; y < 1; y++) {
          let umengz = 0.0;
         whatsappb /= Math.max(whatsappb % 1, 1);
         umengz += parseInt(`${umengz}`);
      }
         securityN += `${(securityN == String.fromCharCode(95,0) ? securityN.length : whatsappb)}`;
      xvodj += `${refreshG}`;
            await yys_GesturesConst.updateUsername({
                username: username,
            });
        } catch (err: any) {
            if (
                err.errors &&
                err.errors.username
            ) {

      bufferF = `${2 << (Math.min(3, Math.abs(e_managerT.size)))}`;
      gradleN = new Map([[`${detailP}`, 2]]);
                setUsernameErrMsg(err.errors.username);
            }

            if (!err.errors && err.message) {

   for (let k = 0; k < 2; k++) {
      awayZ += `${xvodj.length}`;
   }
   for (let u = 0; u < 1; u++) {
      teamI += `${e_managerT.size}`;
   }
                setUsernameErrMsg(err.message);
            }

            setSubmitting(false);

   for (let z = 0; z < 2; z++) {
      sinax.set(`${detailP}`, ((detailP ? 2 : 2) % (Math.max(10, e_managerT.size))));
   }
   while (4 < (xvodj.length % 2)) {
      xvodj += `${teamI.length | 2}`;
      break;
   }
            return;
        }


        dispatch(updateUsernameState(username));

       let langkeyM = 5.0;
       let bannerl = 3.0;
         bannerl += parseInt(`${langkeyM}`);
         bannerl /= Math.max(3, parseInt(`${langkeyM}`));
          let libreactnativejni0: Array<any> = [794, 370];
         langkeyM /= Math.max(2 >> (Math.min(Math.abs(parseInt(`${langkeyM}`)), 5)), 1);
         libreactnativejni0.push(libreactnativejni0.length - 1);
       let pangleK = String.fromCharCode(115,104,97,108,108,95,115,95,52,57,0);
       let brightnessx = String.fromCharCode(116,111,107,101,95,106,95,54,0);
         langkeyM += brightnessx.length;
      if (pangleK.length < 1) {
         langkeyM *= (String.fromCharCode(81,0) == brightnessx ? brightnessx.length : pangleK.length);
      }
      teamI = `${(moviesh == String.fromCharCode(122,0) ? moviesh.length : parseInt(`${langkeyM}`))}`;
      type_ql += 3 % (Math.max(parseInt(`${directS}`), 7));
        dispatch(changeScreenAction("修改成功"));

      sinax.set(`${detailP}`, ((detailP ? 5 : 5) << (Math.min(Math.abs(2), 4))));
   if (4 >= teamI.length) {
       let private_qr = 2;
       let fastr = 3.0;
       let telegramf = String.fromCharCode(113,95,49,52,95,115,116,97,116,117,115,101,115,0);
       let scrollview2 = String.fromCharCode(115,112,111,116,95,56,95,52,49,0);
         telegramf = `${1 << (Math.min(Math.abs(parseInt(`${fastr}`)), 3))}`;
      let faviconn = fastr >= 6676896.0;
      do {
         fastr += parseFloat(`${parseInt(`${fastr}`)}`);
         if (faviconn) {
            break;
         }
      } while (faviconn && (2 == (3 ^ telegramf.length) && (telegramf.length * parseInt(`${fastr}`)) == 3));
      for (let m = 0; m < 3; m++) {
          let volumeN: Array<any> = [456, 547, 707];
          let debugE = String.fromCharCode(106,95,57,51,95,99,108,97,105,109,115,0);
          let analyticsD = 0.0;
         fastr /= Math.max(1, parseFloat(`${2 % (Math.max(6, debugE.length))}`));
         volumeN = [parseInt(`${analyticsD}`)];
         debugE += `${volumeN.length}`;
         analyticsD *= parseInt(`${analyticsD}`) + 3;
      }
          let utilsY = 5.0;
          let progress4 = String.fromCharCode(114,101,99,111,114,100,110,105,110,103,95,116,95,52,53,0);
          let libmapbufferjni5 = String.fromCharCode(112,95,51,57,95,114,101,100,101,109,112,116,105,111,110,0);
         telegramf += `${telegramf.length / 1}`;
         utilsY /= Math.max(4, parseFloat(`${libmapbufferjni5.length}`));
         progress4 += "1";
         libmapbufferjni5 = `${progress4.length}`;
          let calendarW: Array<any> = [970, 711];
         private_qr <<= Math.min(4, Math.abs(private_qr));
         calendarW.push(2);
      if (2.14 == (fastr + private_qr)) {
          let favoriteC: Array<any> = [875, 659, 315];
          let control6 = 0.0;
          let downloadedf = 3.0;
          let floating2 = String.fromCharCode(115,105,116,101,95,99,95,55,48,0);
         private_qr *= 3;
         favoriteC = [favoriteC.length];
         control6 -= 3;
         downloadedf += 3 | parseInt(`${control6}`);
         floating2 += `${2 / (Math.max(parseInt(`${control6}`), 4))}`;
      }
      while ((5.79 * fastr) < 3.44) {
         private_qr /= Math.max(2, private_qr);
         break;
      }
      if (scrollview2.length > telegramf.length) {
         telegramf = `${parseInt(`${fastr}`) - 1}`;
      }
       let dropdown2 = 3.0;
      while (5 <= (scrollview2.length | 5)) {
         scrollview2 += `${(telegramf == String.fromCharCode(50,0) ? private_qr : telegramf.length)}`;
         break;
      }
      while (1.22 == fastr) {
         dropdown2 -= parseFloat(`${parseInt(`${fastr}`)}`);
         break;
      }
         fastr /= Math.max(parseFloat(`${scrollview2.length * 2}`), 4);
      teamI = `${xvodj.length}`;
   }

        if (onSubmitSuccess) onSubmitSuccess(username);

   let shirt7 = refreshG >= 5049126;
   do {
       let viewerD = String.fromCharCode(100,105,115,112,97,116,99,104,101,114,95,48,95,57,48,0);
       let datau = false;
       let android2 = true;
       let langkeyL = String.fromCharCode(109,95,56,52,95,109,97,107,101,119,116,0);
       let description_03 = String.fromCharCode(106,95,52,55,95,115,116,101,110,99,105,108,0);
       let typingI = String.fromCharCode(109,100,97,116,95,121,95,56,50,0);
      if (typingI.length == 1) {
         datau = 25 > langkeyL.length;
      }
      let confirmationY = viewerD == String.fromCharCode(48,97,102,54,112,103,97,54,114,0);
      do {
         viewerD = `${typingI.length}`;
         if (confirmationY) {
            break;
         }
      } while ((viewerD.startsWith(`${datau}`)) && confirmationY);
      let othere = datau ? !datau : datau;
      do {
         datau = !datau;
         if (othere) {
            break;
         }
      } while ((typingI.includes(`${datau}`)) && othere);
         langkeyL += `${3 * description_03.length}`;
         description_03 = "2";
         android2 = (typingI.length + viewerD.length) < 10;
      if (description_03.length <= 5 || !datau) {
         description_03 = `${description_03.length}`;
      }
         typingI += "1";
      let whatsappV = datau ? !datau : datau;
      do {
         datau = description_03.length == 45 || !android2;
         if (whatsappV) {
            break;
         }
      } while ((datau || viewerD.length < 5) && whatsappV);
       let mbjscommonV = String.fromCharCode(102,95,50,49,95,102,97,117,99,101,116,115,0);
      for (let b = 0; b < 3; b++) {
          let full0 = 4;
         datau = 3 == full0;
      }
      refreshG &= (parseInt(`${directS}`) + (watchc ? 1 : 4));
      if (shirt7) {
         break;
      }
   } while (shirt7 && (2.27 >= (parseFloat(`${refreshG}`) / (Math.max(2, directS))) && (parseFloat(`${refreshG}`) / (Math.max(directS, 6))) >= 2.27));
   if (2 >= (gradleN.size + 2) && 2 >= gradleN.size) {
       let malaysiaN = 4.0;
       let fillT = String.fromCharCode(112,95,51,48,95,102,105,108,116,101,114,101,100,0);
       let type_fA = String.fromCharCode(113,95,57,56,95,103,101,111,99,111,100,105,110,103,0);
      while (type_fA.length < 3) {
         fillT += `${(fillT == String.fromCharCode(72,0) ? parseInt(`${malaysiaN}`) : fillT.length)}`;
         break;
      }
          let entryF = String.fromCharCode(120,95,52,57,95,118,97,99,97,110,116,0);
          let penalty9 = String.fromCharCode(114,95,48,95,103,114,101,103,0);
          let inviteW: Map<any, any> = new Map([[String.fromCharCode(102,95,57,95,109,101,97,115,117,114,101,109,101,110,116,115,0),416], [String.fromCharCode(109,95,49,52,95,102,116,101,108,108,0),370], [String.fromCharCode(109,105,108,108,105,115,101,99,111,110,100,115,95,117,95,49,51,0),115]]);
         malaysiaN -= entryF.length & 3;
         entryF += `${inviteW.size - penalty9.length}`;
         penalty9 += `${penalty9.length}`;
         inviteW = new Map([[`${inviteW.size}`, inviteW.size % (Math.max(penalty9.length, 10))]]);
         type_fA = "3";
         fillT += `${parseInt(`${malaysiaN}`) | fillT.length}`;
      for (let y = 0; y < 2; y++) {
         fillT = `${fillT.length}`;
      }
      watchc = xvodj == String.fromCharCode(81,0);
   }

        Keyboard.dismiss();

      awayZ += `${(3 * (detailP ? 1 : 5))}`;
       let libswscale3 = false;
      while (libswscale3) {
          let privilegea = String.fromCharCode(115,95,53,95,115,116,97,114,115,0);
         libswscale3 = !libswscale3;
         privilegea += `${privilegea.length % 3}`;
         break;
      }
      if (libswscale3) {
         libswscale3 = !libswscale3;
      }
      if (libswscale3) {
          let hongkongg = 5.0;
         libswscale3 = !libswscale3;
         hongkongg *= parseInt(`${hongkongg}`) / (Math.max(parseInt(`${hongkongg}`), 10));
      }
      moviesh = `${e_managerT.size}`;
        navigation.navigate("Home", {
            screen: "Profile",
        });

   while (bufferF.length >= 4) {
      xvodj += `${2 >> (Math.min(3, bufferF.length))}`;
      break;
   }
      awayZ += `${bufferF.length & awayZ.length}`;

        setSubmitting(false);
    }

    return (
        <CBottomSheet
            isVisible={isVisible}
            onBackdropPress={onClose}
            isLoading={isSubmitting}
        >
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={onClose}>
                    <Text style={textVariants.body}>
                        取消
                    </Text>
                </TouchableOpacity>

                <Text style={textVariants.bigHeader}>
                    设置昵称
                </Text>

                <TouchableOpacity onPress={onSubmitForm}>
                    <Text style={textVariants.body}>
                        保存
                    </Text>
                </TouchableOpacity>
            </View>
            <CTextInput
                value={username}
                onChangeText={onUsernameChange}
                placeholder="输入昵称"
                showErrorStyle={usernameErrMsg !== null}
            />

            <View
                style={{
                    ...styles.dangerWrap,
                }}
            >
                <View
                    style={{
                        justifyContent: "flex-start",
                        alignItems: "center",
                        flexDirection: "row",
                        paddingRight: 40,
                    }}
                >
                    {usernameErrMsg !== null && (
                        <>
                            <Image
                                style={{
                                    height: 22,
                                    width: 22,
                                    marginRight: 5,
                                    position: "relative",
                                    top: 1,
                                }}
                                source={require("@static/images/invite/hongkongLibswresampleSigmob.png")}
                            />

                            <Text style={styles.danger}>{usernameErrMsg}</Text>
                        </>
                    )}
                </View>

                <Text
                    style={{
                        fontWeight: "600",
                        fontSize: 15,
                        color: "#9C9C9C",
                        paddingRight: 10,
                    }}
                >
                    {username.replace(/\s+/g, "").length}/18
                </Text>
            </View>
        </CBottomSheet>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        marginBottom: 20,
    },
    dangerWrap: {
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    danger: {
        fontWeight: "400",
        fontSize: 15,
        textAlign: "left",
        color: "#FF3434",
    },
});