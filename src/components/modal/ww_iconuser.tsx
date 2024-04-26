import { useState } from "react";
import { Image, Keyboard, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CBottomSheet } from "../atoms";
import { useNavigation, useTheme } from "@react-navigation/native";
import { CTextInput } from "../atoms/textInput";
import { useSelector } from "@hooks/ww_catagory_neon";
import { useDispatch } from "react-redux";
import { changeScreenAction } from "@redux/actions/ww_hash";
import { updateUsernameState } from "@redux/actions/ww_libreactperfloggerjni_small";
import SpinnerOverlay from "./ww_inactive_resend";
import { wwIconscheduleColors } from "@api";


interface wwIndexDice {
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
}: wwIndexDice) => {
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
       let root0 = 0;
    let untickh = String.fromCharCode(107,95,55,56,95,109,101,109,106,114,110,108,0);
    let lnewinterstitial_ = 0.0;
    let launch6 = String.fromCharCode(99,111,110,116,111,117,114,115,95,105,95,52,48,0);
    let utilsw = 2.0;
    let layoutz = 1.0;
    let subsD = false;
    let bodanL = String.fromCharCode(109,95,54,53,95,99,114,101,100,101,110,116,105,97,108,0);
    let rewardl = String.fromCharCode(106,95,56,50,95,114,101,99,101,112,116,105,111,110,0);
      lnewinterstitial_ += (parseFloat(`${parseInt(`${layoutz}`) - (subsD ? 3 : 3)}`));
   if ((5.9 + utilsw) >= 4.26 || (parseInt(`${utilsw}`) + launch6.length) >= 2) {
      utilsw *= bodanL.length;
   }
      lnewinterstitial_ *= parseFloat(`${parseInt(`${layoutz}`)}`);
   let aboutW = 8711214 >= root0;
   do {
      root0 *= 2 + parseInt(`${layoutz}`);
      if (aboutW) {
         break;
      }
   } while (((lnewinterstitial_ + 1.87) <= 4.73 || 1 <= (parseInt(`${lnewinterstitial_}`) + root0)) && aboutW);
   while (launch6.endsWith(`${subsD}`)) {
      launch6 = `${bodanL.length}`;
      break;
   }
       let pingm = String.fromCharCode(112,108,97,121,95,54,95,54,49,0);
       let r_managerb = 4;
      let save1 = r_managerb >= 7090458;
      do {
          let hooksy = 4.0;
          let whistleorangeq = 2.0;
          let middlewareR = false;
          let optionsv = String.fromCharCode(117,95,56,52,95,117,110,105,111,110,101,100,0);
          let libavutilM: Map<any, any> = new Map([[String.fromCharCode(104,95,53,55,95,112,114,101,108,111,97,100,0),664], [String.fromCharCode(115,105,112,114,95,51,95,51,55,0),424]]);
         r_managerb /= Math.max(pingm.length & parseInt(`${whistleorangeq}`), 2);
         hooksy /= Math.max((1 << (Math.min(2, Math.abs((middlewareR ? 5 : 2))))), 3);
         whistleorangeq -= (parseInt(`${hooksy}`) | (middlewareR ? 4 : 5));
         optionsv = `${(String.fromCharCode(69,0) == optionsv ? libavutilM.size : optionsv.length)}`;
         libavutilM = new Map([[`${middlewareR}`, 2 << (Math.min(Math.abs(parseInt(`${hooksy}`)), 1))]]);
         if (save1) {
            break;
         }
      } while (save1 && (2 >= (pingm.length + r_managerb)));
      if ((pingm.length ^ 5) <= 3 || 3 <= (5 ^ pingm.length)) {
         pingm += `${r_managerb / (Math.max(3, pingm.length))}`;
      }
      while ((pingm.length & r_managerb) > 5 || 5 > (pingm.length & r_managerb)) {
         r_managerb += r_managerb;
         break;
      }
      while (2 == pingm.length) {
          let entryo = String.fromCharCode(97,102,116,101,114,108,105,102,101,95,53,95,50,52,0);
         pingm += `${r_managerb}`;
         entryo += `${(String.fromCharCode(55,0) == entryo ? entryo.length : entryo.length)}`;
         break;
      }
      for (let z = 0; z < 2; z++) {
         r_managerb /= Math.max((String.fromCharCode(103,0) == pingm ? r_managerb : pingm.length), 4);
      }
      while (3 == pingm.length) {
          let actionsT = 1.0;
          let comment9 = 0;
          let sourceG = String.fromCharCode(120,95,55,51,95,115,98,103,112,0);
          let annerY = 0.0;
         r_managerb *= comment9;
         actionsT -= parseFloat(`${parseInt(`${annerY}`) / (Math.max(sourceG.length, 6))}`);
         comment9 /= Math.max((String.fromCharCode(109,0) == sourceG ? sourceG.length : parseInt(`${annerY}`)), 5);
         break;
      }
      subsD = !subsD;
   while (5 <= bodanL.length || subsD) {
      bodanL = `${parseInt(`${utilsw}`)}`;
      break;
   }
   for (let f = 0; f < 3; f++) {
      layoutz *= launch6.length;
   }
      layoutz -= parseInt(`${layoutz}`);
   while (1.72 == (root0 - lnewinterstitial_)) {
       let policyz = 3.0;
       let currentk: Array<any> = [817, 497];
       let upload5: Array<any> = [119, 869, 593];
       let giflivestreamingO: Map<any, any> = new Map([[String.fromCharCode(107,95,53,56,95,114,101,115,97,109,112,108,101,107,104,122,0),621], [String.fromCharCode(99,108,111,115,101,112,95,50,95,50,48,0),580], [String.fromCharCode(112,104,112,95,101,95,57,54,0),45]]);
       let templateprocessorK = 0;
          let sporta = 3;
         giflivestreamingO = new Map([[`${giflivestreamingO.size}`, giflivestreamingO.size]]);
         sporta <<= Math.min(3, Math.abs(sporta * sporta));
         giflivestreamingO.set(`${templateprocessorK}`, giflivestreamingO.size | 1);
       let modules: Array<any> = [826, 132];
      let mbridgeq = 7904775 >= giflivestreamingO.size;
      do {
         giflivestreamingO.set(`${policyz}`, parseInt(`${policyz}`));
         if (mbridgeq) {
            break;
         }
      } while (mbridgeq && (giflivestreamingO.get(`${modules.length}`) != null));
      while ((upload5.length - templateprocessorK) == 5 || 4 == (5 - templateprocessorK)) {
         templateprocessorK >>= Math.min(Math.abs(3), 3);
         break;
      }
         giflivestreamingO.set(`${modules.length}`, 2);
      while (currentk.includes(policyz)) {
         currentk.push(upload5.length | templateprocessorK);
         break;
      }
      for (let k = 0; k < 3; k++) {
         currentk.push(1 | currentk.length);
      }
         giflivestreamingO = new Map([[`${giflivestreamingO.size}`, 3 - giflivestreamingO.size]]);
         giflivestreamingO = new Map([[`${upload5.length}`, 2 + upload5.length]]);
       let circleF = String.fromCharCode(108,95,54,52,95,110,105,98,98,108,101,0);
       let arrowrightE = false;
      let eactU = 5088154 <= upload5.length;
      do {
         upload5.push(giflivestreamingO.size & 3);
         if (eactU) {
            break;
         }
      } while ((5 < (upload5.length % (Math.max(3, 9)))) && eactU);
          let disconnectedR = 0.0;
          let binddatasm = String.fromCharCode(98,111,100,101,114,95,109,95,49,55,0);
         upload5.push(giflivestreamingO.size);
         disconnectedR -= 1 * parseInt(`${disconnectedR}`);
         binddatasm = "2";
      for (let x = 0; x < 1; x++) {
         giflivestreamingO = new Map([[`${giflivestreamingO.size}`, giflivestreamingO.size]]);
      }
      root0 %= Math.max(2, currentk.length);
      break;
   }
      bodanL += `${2 & untickh.length}`;

        setUsername(initialUsername);

      untickh += "2";
      root0 -= 3 | launch6.length;
   let rank7 = layoutz <= 7959017.0;
   do {
       let fullf = 5.0;
       let awayT = String.fromCharCode(104,101,108,112,95,119,95,54,50,0);
       let statistics6 = 4.0;
       let activityb = 3;
      while (3 > awayT.length) {
          let defaultprofilepicJ = String.fromCharCode(105,110,115,101,116,95,106,95,55,0);
          let defaultprofilepicy = 4;
          let iconsaveimagen = String.fromCharCode(114,105,110,103,98,117,102,102,101,114,95,112,95,50,57,0);
          let crossg = true;
         awayT += `${(parseInt(`${statistics6}`) ^ (crossg ? 4 : 2))}`;
         defaultprofilepicJ = `${defaultprofilepicy & iconsaveimagen.length}`;
         defaultprofilepicy += defaultprofilepicy;
         iconsaveimagen = `${iconsaveimagen.length}`;
         crossg = 27 < iconsaveimagen.length;
         break;
      }
          let middleW = 1.0;
          let selecti = String.fromCharCode(110,95,53,49,95,99,111,110,116,114,97,115,116,0);
          let formW = String.fromCharCode(105,95,57,95,117,110,105,110,116,101,114,112,114,101,116,101,100,0);
         awayT = `${parseInt(`${middleW}`)}`;
         selecti = `${formW.length + selecti.length}`;
         formW = `${selecti.length}`;
         fullf += parseInt(`${fullf}`);
       let footballfieldk = String.fromCharCode(102,114,111,110,116,115,105,100,101,95,48,95,50,48,0);
       let mbjscommonZ = String.fromCharCode(106,95,49,54,95,114,101,115,104,97,112,101,0);
      let internetg = footballfieldk == String.fromCharCode(49,95,112,0);
      do {
          let dycreator6 = 3.0;
          let tickedE = String.fromCharCode(102,117,122,122,101,114,95,50,95,56,50,0);
          let predictionarrowm: Array<any> = [554, 639];
          let light8: Map<any, any> = new Map([[String.fromCharCode(121,95,55,48,95,111,118,101,114,114,105,100,101,115,0),106], [String.fromCharCode(102,95,57,57,95,100,105,115,112,108,97,121,101,100,0),525], [String.fromCharCode(112,114,105,110,116,102,95,115,95,52,56,0),959]]);
          let review8 = true;
         footballfieldk += `${parseInt(`${dycreator6}`) >> (Math.min(4, Math.abs(2)))}`;
         dycreator6 -= (parseFloat(`${(review8 ? 4 : 2) + 1}`));
         tickedE = `${3 & light8.size}`;
         predictionarrowm.push(light8.size);
         if (internetg) {
            break;
         }
      } while (internetg && (statistics6 > 3.33));
      if (statistics6 < fullf) {
         statistics6 += mbjscommonZ.length ^ awayT.length;
      }
         statistics6 /= Math.max(parseInt(`${fullf}`) >> (Math.min(5, Math.abs(1))), 4);
      while (5 > (2 & footballfieldk.length)) {
         footballfieldk += `${parseInt(`${fullf}`) | 3}`;
         break;
      }
         awayT += `${footballfieldk.length}`;
      while (footballfieldk.length > awayT.length) {
         awayT += `${awayT.length}`;
         break;
      }
         activityb += parseInt(`${fullf}`);
      for (let y = 0; y < 2; y++) {
         fullf /= Math.max(activityb % (Math.max(3, 4)), 3);
      }
      layoutz /= Math.max(3 * activityb, 3);
      if (rank7) {
         break;
      }
   } while (rank7 && (3 < (untickh.length / (Math.max(2, 1))) || 2 < (parseInt(`${layoutz}`) * untickh.length)));
      untickh += `${parseInt(`${lnewinterstitial_}`)}`;
   while ((utilsw / (Math.max(5.80, 3))) < 2.30 || 2 < (untickh.length / (Math.max(2, parseInt(`${utilsw}`))))) {
      utilsw -= parseInt(`${lnewinterstitial_}`);
      break;
   }
      bodanL += `${bodanL.length}`;
   let backe = 6729932.0 >= lnewinterstitial_;
   do {
       let remindera = 2.0;
       let defaultpredictionprofileD = 3.0;
       let livenodatabgimgo = false;
          let optionss: Array<any> = [251, 391, 92];
          let footballfield1: Map<any, any> = new Map([[String.fromCharCode(103,101,111,107,101,121,95,113,95,56,54,0),true ], [String.fromCharCode(104,95,52,51,95,115,116,115,99,0),true ], [String.fromCharCode(99,104,97,116,115,95,103,95,56,51,0),false ]]);
          let gemfiles = 0.0;
         remindera -= footballfield1.size >> (Math.min(3, Math.abs(parseInt(`${gemfiles}`))));
         optionss = [optionss.length];
         footballfield1 = new Map([[`${optionss.length}`, optionss.length / 3]]);
      for (let m = 0; m < 2; m++) {
         remindera /= Math.max(3 / (Math.max(parseInt(`${remindera}`), 9)), 5);
      }
         livenodatabgimgo = remindera > defaultpredictionprofileD;
      let bannerD = livenodatabgimgo ? !livenodatabgimgo : livenodatabgimgo;
      do {
         livenodatabgimgo = defaultpredictionprofileD <= 21.50;
         if (bannerD) {
            break;
         }
      } while (bannerD && (defaultpredictionprofileD < 4.29));
         remindera /= Math.max(parseInt(`${remindera}`) + parseInt(`${defaultpredictionprofileD}`), 3);
      if (remindera <= 1.74) {
         defaultpredictionprofileD += ((livenodatabgimgo ? 4 : 3) / (Math.max(parseInt(`${remindera}`), 2)));
      }
       let ksadD = String.fromCharCode(114,101,100,117,99,101,95,115,95,55,49,0);
      while ((4.32 - remindera) > 5.31 && !livenodatabgimgo) {
         remindera /= Math.max(2, 3);
         break;
      }
         remindera /= Math.max(parseInt(`${defaultpredictionprofileD}`), 1);
      lnewinterstitial_ *= parseFloat(`${parseInt(`${remindera}`)}`);
      if (backe) {
         break;
      }
   } while ((2.33 >= (5 - layoutz)) && backe);
       let internets = 0.0;
       let flipperE = 3.0;
       let defaultpredictionprofile6 = String.fromCharCode(111,118,101,114,118,105,101,119,95,105,95,57,55,0);
       let logo3 = String.fromCharCode(100,97,109,112,105,110,103,95,118,95,49,51,0);
       let memberU = String.fromCharCode(114,117,110,108,111,111,112,95,51,95,52,52,0);
      while (!defaultpredictionprofile6.startsWith(`${internets}`)) {
         defaultpredictionprofile6 = `${parseInt(`${internets}`)}`;
         break;
      }
       let clearQ: Array<any> = [String.fromCharCode(108,95,57,54,95,115,117,98,112,97,114,116,0), String.fromCharCode(111,95,50,48,95,117,110,103,114,111,117,112,0), String.fromCharCode(106,95,55,55,95,112,101,114,102,111,114,109,101,100,0)];
       let defaultprofilepicY: Array<any> = [918, 759, 901];
         memberU = `${defaultpredictionprofile6.length}`;
      for (let f = 0; f < 3; f++) {
         clearQ.push((String.fromCharCode(103,0) == logo3 ? logo3.length : parseInt(`${flipperE}`)));
      }
      for (let y = 0; y < 1; y++) {
         memberU = "1";
      }
         clearQ = [2 ^ clearQ.length];
      let playercommond = 5091150.0 <= flipperE;
      do {
          let modalT = String.fromCharCode(98,95,49,51,95,99,97,109,101,108,0);
          let cornerkickH = 5.0;
          let history9 = 5.0;
          let filledW = 4;
          let runtimeschedulerM = 1;
         flipperE *= (defaultpredictionprofile6 == String.fromCharCode(51,0) ? parseInt(`${internets}`) : defaultpredictionprofile6.length);
         modalT = `${modalT.length}`;
         cornerkickH /= Math.max(4, 3);
         history9 -= 2 ^ modalT.length;
         filledW /= Math.max(5, filledW);
         runtimeschedulerM -= 1;
         if (playercommond) {
            break;
         }
      } while (((1 >> (Math.min(5, clearQ.length))) == 1 || 1 == (clearQ.length ^ 1)) && playercommond);
      while (defaultprofilepicY.length >= 4) {
         defaultprofilepicY = [1];
         break;
      }
      untickh += `${3 << (Math.min(5, defaultpredictionprofile6.length))}`;
   for (let k = 0; k < 3; k++) {
      bodanL = "2";
   }
   if (3 < (root0 & 2) || (untickh.length & root0) < 2) {
      untickh = `${3 ^ bodanL.length}`;
   }
      utilsw += 2;
        setUsernameErrMsg(null);
    }

    const onClose = () => {
       let statisticsA = 5.0;
    let roomD = 1;
    let canvasv = 1.0;
    let privileged: Map<any, any> = new Map([[String.fromCharCode(114,95,53,54,95,109,117,108,116,105,100,101,115,99,114,105,112,116,111,114,0),816], [String.fromCharCode(118,95,54,48,95,105,97,100,115,116,120,0),443]]);
    let whatsappP = false;
    let footballfieldX = String.fromCharCode(105,95,51,53,95,102,105,110,105,115,101,100,0);
    let gradlewL: Map<any, any> = new Map([[String.fromCharCode(117,95,49,54,95,115,105,103,110,97,98,108,101,0),true ], [String.fromCharCode(111,110,116,111,95,120,95,55,49,0),true ], [String.fromCharCode(98,97,114,101,95,113,95,50,56,0),true ]]);
      roomD &= roomD | 2;
       let stepL = 1.0;
       let eacth: Array<any> = [String.fromCharCode(100,101,99,98,110,95,57,95,57,57,0), String.fromCharCode(98,105,116,109,97,112,95,54,95,52,0)];
      let redirecto = 7158314 <= eacth.length;
      do {
         eacth = [parseInt(`${stepL}`) - 3];
         if (redirecto) {
            break;
         }
      } while ((!eacth.includes(stepL)) && redirecto);
      while ((3.87 + stepL) == 4.1 || (eacth.length + parseInt(`${stepL}`)) == 1) {
          let predictionactiveP: Array<any> = [String.fromCharCode(115,104,111,119,95,107,95,53,49,0), String.fromCharCode(110,95,56,48,95,118,105,115,117,97,108,108,121,0)];
          let iconsaveimage5 = String.fromCharCode(112,95,56,48,95,97,102,102,105,110,105,116,105,101,115,0);
         eacth = [parseInt(`${stepL}`) / (Math.max(iconsaveimage5.length, 5))];
         predictionactiveP.push(predictionactiveP.length / 2);
         iconsaveimage5 += `${3 / (Math.max(2, predictionactiveP.length))}`;
         break;
      }
       let rootw = String.fromCharCode(120,95,50,55,95,115,109,117,115,104,0);
       let settingG = String.fromCharCode(119,95,54,56,95,112,101,114,102,111,114,109,101,100,0);
          let armva5 = 2;
          let flipperR = String.fromCharCode(114,101,99,111,103,110,105,116,105,111,110,115,95,117,95,57,50,0);
         settingG = "2";
         armva5 += (String.fromCharCode(50,0) == flipperR ? armva5 : flipperR.length);
          let viewsM = String.fromCharCode(108,105,115,116,101,110,101,114,115,95,53,95,51,48,0);
          let gesturess = String.fromCharCode(99,114,111,110,111,115,95,55,95,54,57,0);
          let footballfieldR = 2.0;
         eacth.push(rootw.length);
         viewsM = `${parseInt(`${footballfieldR}`) / (Math.max(viewsM.length, 9))}`;
         gesturess = `${(gesturess == String.fromCharCode(79,0) ? gesturess.length : parseInt(`${footballfieldR}`))}`;
      privileged.set(`${canvasv}`, parseInt(`${canvasv}`));
      footballfieldX += `${roomD}`;
   while (2 < (3 + footballfieldX.length) && (3 + gradlewL.size) < 4) {
      gradlewL = new Map([[`${gradlewL.size}`, gradlewL.size & 1]]);
      break;
   }
   while (!Array.from(gradlewL.keys()).includes(`${statisticsA}`)) {
      statisticsA *= gradlewL.size;
      break;
   }
   let combinedv = 6468980 >= privileged.size;
   do {
       let predictionarrowE = String.fromCharCode(118,95,56,51,95,116,114,105,103,103,101,114,0);
       let animationsb: Array<any> = [776, 651, 308];
       let activeN = String.fromCharCode(106,95,49,51,95,110,101,97,114,101,115,116,0);
      let statsI = activeN.length <= 9576774;
      do {
         activeN += `${animationsb.length >> (Math.min(predictionarrowE.length, 5))}`;
         if (statsI) {
            break;
         }
      } while (statsI && (predictionarrowE.includes(activeN)));
      let anewarchdefaultsz = String.fromCharCode(101,116,95,51,0) == predictionarrowE;
      do {
         predictionarrowE = `${activeN.length & animationsb.length}`;
         if (anewarchdefaultsz) {
            break;
         }
      } while (anewarchdefaultsz && (activeN != String.fromCharCode(107,0)));
         predictionarrowE = `${activeN.length}`;
         predictionarrowE = `${predictionarrowE.length % (Math.max(3, 10))}`;
       let dragcloseC = String.fromCharCode(108,95,57,55,95,97,114,103,117,109,101,110,116,0);
         predictionarrowE += `${animationsb.length >> (Math.min(predictionarrowE.length, 4))}`;
         animationsb = [activeN.length << (Math.min(Math.abs(2), 5))];
         predictionarrowE = `${1 ^ animationsb.length}`;
      while (predictionarrowE.includes(`${dragcloseC.length}`)) {
         dragcloseC += `${animationsb.length | 1}`;
         break;
      }
      privileged.set(predictionarrowE, predictionarrowE.length << (Math.min(Math.abs(3), 4)));
      if (combinedv) {
         break;
      }
   } while (combinedv && ((footballfieldX.length % (Math.max(4, 7))) >= 2 && 1 >= (privileged.size % (Math.max(4, 8)))));
       let networkQ: Array<any> = [881, 71, 775];
      while (networkQ.includes(networkQ.length)) {
         networkQ = [networkQ.length];
         break;
      }
      for (let n = 0; n < 3; n++) {
         networkQ = [2];
      }
       let overlayq = false;
       let videocommonO = true;
      canvasv -= parseFloat(`${networkQ.length / (Math.max(1, 1))}`);

        if (handleClose) handleClose();

   while (2 == gradlewL.size) {
      whatsappP = String.fromCharCode(106,0) == footballfieldX;
      break;
   }
      canvasv *= parseFloat(`${1 - privileged.size}`);
       let loginW = 2.0;
       let ynews2 = 2;
       let targetZ: Array<any> = [698, 773, 572];
      while (4 == ynews2) {
         loginW -= parseFloat(`${2 % (Math.max(7, parseInt(`${loginW}`)))}`);
         break;
      }
         loginW += parseFloat(`${ynews2 ^ parseInt(`${loginW}`)}`);
         ynews2 %= Math.max(1 - ynews2, 4);
         targetZ.push(parseInt(`${loginW}`));
      if (!targetZ.includes(ynews2)) {
         targetZ = [targetZ.length / 3];
      }
         ynews2 &= 3 * ynews2;
         ynews2 &= targetZ.length;
      for (let q = 0; q < 3; q++) {
         ynews2 |= 1 + targetZ.length;
      }
         targetZ = [2];
      statisticsA -= (1 & (whatsappP ? 5 : 4));
   let philippinesq = roomD <= 6381737;
   do {
      roomD %= Math.max(2, 3);
      if (philippinesq) {
         break;
      }
   } while (philippinesq && (roomD > 2));
      privileged.set(`${statisticsA}`, parseInt(`${statisticsA}`) ^ gradlewL.size);
   for (let d = 0; d < 3; d++) {
       let mintegrals = true;
       let plusx = String.fromCharCode(108,98,108,95,111,95,52,48,0);
       let emojiJ: Map<any, any> = new Map([[String.fromCharCode(110,95,51,56,95,115,112,108,105,116,116,101,114,0),921], [String.fromCharCode(109,95,51,57,95,115,117,112,112,108,101,109,101,110,116,97,114,121,0),446], [String.fromCharCode(119,95,54,53,95,97,118,120,115,121,110,116,104,0),18]]);
         plusx += `${plusx.length ^ 2}`;
      if (plusx.includes(`${mintegrals}`)) {
         plusx += `${(plusx == String.fromCharCode(66,0) ? (mintegrals ? 4 : 3) : plusx.length)}`;
      }
      for (let r = 0; r < 1; r++) {
         emojiJ = new Map([[plusx, ((mintegrals ? 2 : 1) % (Math.max(plusx.length, 4)))]]);
      }
          let forwardi: Map<any, any> = new Map([[String.fromCharCode(107,95,53,57,95,100,114,98,103,0),516], [String.fromCharCode(116,104,114,111,117,103,104,112,117,116,95,104,95,57,49,0),324], [String.fromCharCode(105,95,50,56,95,97,115,105,115,0),362]]);
          let detailsl = 0.0;
          let settings: Array<any> = [707, 421];
         mintegrals = settings.includes(detailsl);
         forwardi = new Map([[`${forwardi.size}`, forwardi.size]]);
         detailsl *= parseFloat(`${forwardi.size + 3}`);
         plusx = `${plusx.length * emojiJ.size}`;
         mintegrals = mintegrals && plusx.length == 64;
      let buffer3 = plusx == String.fromCharCode(48,121,114,0);
      do {
         plusx += "1";
         if (buffer3) {
            break;
         }
      } while (buffer3 && (mintegrals));
         emojiJ.set(plusx, ((mintegrals ? 5 : 1) & plusx.length));
      while (4 > plusx.length || mintegrals) {
         plusx = "1";
         break;
      }
      footballfieldX = `${parseInt(`${statisticsA}`) / (Math.max(plusx.length, 4))}`;
   }
      roomD ^= 2;

        Keyboard.dismiss();

   if ((footballfieldX.length % (Math.max(3, roomD))) > 4) {
       let defaultlogoc = String.fromCharCode(103,95,51,95,112,107,101,121,0);
       let gpay9 = 3;
       let bridge_ = false;
       let canvase = true;
       let update_8uh = true;
      if (defaultlogoc.length == gpay9) {
         gpay9 &= ((update_8uh ? 5 : 1) ^ defaultlogoc.length);
      }
       let bdxadsdke = 2.0;
       let dialog0 = 2.0;
          let with_uvS = 4;
          let hongkonga = String.fromCharCode(112,101,114,115,111,110,95,120,95,54,50,0);
          let textinput_ = 4.0;
         canvase = defaultlogoc.length == 86;
         with_uvS += parseInt(`${textinput_}`) << (Math.min(hongkonga.length, 3));
         hongkonga = `${with_uvS}`;
         textinput_ += (String.fromCharCode(97,0) == hongkonga ? hongkonga.length : with_uvS);
      for (let y = 0; y < 3; y++) {
          let indexN = String.fromCharCode(98,108,111,99,107,101,114,95,120,95,53,56,0);
          let singaporeI: Array<any> = [String.fromCharCode(108,95,50,49,95,112,114,101,118,101,110,116,0), String.fromCharCode(114,101,102,108,95,99,95,54,57,0), String.fromCharCode(99,95,56,53,95,102,114,97,109,101,115,101,116,116,101,114,0)];
         bdxadsdke *= ((bridge_ ? 1 : 5) + defaultlogoc.length);
         indexN = `${(String.fromCharCode(56,0) == indexN ? indexN.length : singaporeI.length)}`;
         singaporeI = [1 >> (Math.min(5, singaporeI.length))];
      }
         defaultlogoc += `${defaultlogoc.length}`;
         bdxadsdke -= 3 - defaultlogoc.length;
      while (!defaultlogoc.startsWith(`${dialog0}`)) {
         defaultlogoc += `${gpay9 >> (Math.min(2, Math.abs(1)))}`;
         break;
      }
      while (update_8uh) {
         update_8uh = dialog0 >= 35.40;
         break;
      }
      let pushj = bridge_ ? !bridge_ : bridge_;
      do {
         bridge_ = !update_8uh || bdxadsdke == 41.96;
         if (pushj) {
            break;
         }
      } while ((defaultlogoc.length < 5 || !bridge_) && pushj);
      if (2.52 < (gpay9 / (Math.max(dialog0, 8)))) {
          let m_imageS = 2.0;
         gpay9 %= Math.max(1, ((update_8uh ? 5 : 2) & parseInt(`${bdxadsdke}`)));
         m_imageS *= parseInt(`${m_imageS}`) >> (Math.min(2, Math.abs(1)));
      }
       let rewardw = true;
      while (2.16 < dialog0) {
          let lessK = String.fromCharCode(100,101,112,116,104,95,99,95,50,50,0);
          let floatingl = 2;
         dialog0 *= ((rewardw ? 1 : 2) * defaultlogoc.length);
         lessK = `${lessK.length}`;
         floatingl *= floatingl;
         break;
      }
      if (!rewardw) {
          let yellowredcardf: Array<any> = [973, 456, 243];
          let interstitialh = String.fromCharCode(114,95,52,95,112,97,115,115,112,104,114,97,115,101,0);
         rewardw = yellowredcardf.length <= 51;
         yellowredcardf.push(2);
         interstitialh += "3";
      }
      if (5 < defaultlogoc.length || bridge_) {
         bridge_ = (!rewardw ? canvase : !rewardw);
      }
       let orangeG = false;
      roomD -= ((canvase ? 3 : 4) + parseInt(`${statisticsA}`));
   }
      footballfieldX = `${gradlewL.size}`;
   while (2.91 >= canvasv) {
      roomD >>= Math.min(4, Math.abs(gradlewL.size + 2));
      break;
   }
   let foundt = 8812179 <= gradlewL.size;
   do {
       let basketballp = String.fromCharCode(120,95,57,95,99,117,114,108,121,0);
       let exampleimagez = true;
       let profileinactive5 = 0.0;
       let emojiS = 3;
         exampleimagez = 10.73 == profileinactive5;
       let helperH = false;
       let runtimeB = true;
          let unselectedY: Map<any, any> = new Map([[String.fromCharCode(105,116,108,101,95,102,95,49,50,0),String.fromCharCode(120,95,56,56,95,102,115,105,122,101,0)], [String.fromCharCode(113,95,52,49,95,99,104,114,111,109,97,109,99,0),String.fromCharCode(100,95,50,50,95,115,112,97,99,101,114,115,0)], [String.fromCharCode(101,108,105,115,116,95,122,95,51,54,0),String.fromCharCode(104,95,56,51,95,99,111,114,101,105,109,97,103,101,0)]]);
          let favoritek = String.fromCharCode(122,101,116,97,95,50,95,52,53,0);
          let libruntimeexecutorr: Map<any, any> = new Map([[String.fromCharCode(108,95,56,55,95,97,118,97,105,108,0),false ], [String.fromCharCode(118,95,50,53,95,98,103,114,97,0),false ], [String.fromCharCode(119,101,108,115,95,109,95,49,55,0),true ]]);
         profileinactive5 /= Math.max(parseFloat(`${parseInt(`${profileinactive5}`)}`), 4);
         unselectedY.set(`${favoritek}`, libruntimeexecutorr.size << (Math.min(favoritek.length, 1)));
         libruntimeexecutorr = new Map([[`${libruntimeexecutorr.size}`, (favoritek == String.fromCharCode(75,0) ? favoritek.length : libruntimeexecutorr.size)]]);
         exampleimagez = emojiS > 67;
          let zhuboR: Array<any> = [String.fromCharCode(115,116,97,107,101,95,113,95,55,48,0), String.fromCharCode(105,110,116,114,112,95,107,95,56,48,0), String.fromCharCode(121,95,51,54,95,102,115,121,110,99,0)];
          let foreground8 = String.fromCharCode(98,95,53,57,95,118,105,110,116,101,114,112,111,108,97,116,111,114,0);
         exampleimagez = basketballp == String.fromCharCode(73,0);
         zhuboR.push(3 ^ foreground8.length);
         foreground8 += `${zhuboR.length % (Math.max(foreground8.length, 2))}`;
         helperH = 21.29 < profileinactive5;
         helperH = !helperH && emojiS == 89;
       let largebrightnessQ: Map<any, any> = new Map([[String.fromCharCode(120,95,49,95,112,114,111,99,101,115,115,0),String.fromCharCode(108,95,53,54,95,100,114,97,119,0)], [String.fromCharCode(100,95,51,50,0),String.fromCharCode(99,101,108,108,97,117,116,111,95,49,95,50,56,0)], [String.fromCharCode(99,114,97,115,104,108,121,116,105,99,115,95,121,95,55,49,0),String.fromCharCode(120,95,53,50,95,114,101,109,111,116,101,0)]]);
         exampleimagez = largebrightnessQ.get(`${runtimeB}`) == null;
       let nextE = String.fromCharCode(101,112,111,110,121,109,111,117,115,95,100,95,55,51,0);
      if (exampleimagez) {
         exampleimagez = largebrightnessQ.size == 70;
      }
      let upload7 = helperH ? !helperH : helperH;
      do {
         helperH = nextE.length == 26;
         if (upload7) {
            break;
         }
      } while (upload7 && (emojiS > 2 && 4 > (emojiS | 2)));
      gradlewL.set(`${emojiS}`, emojiS);
      if (foundt) {
         break;
      }
   } while ((1 <= (1 * gradlewL.size) || 1 <= gradlewL.size) && foundt);
   for (let t = 0; t < 2; t++) {
       let libjsinspectorw: Array<any> = [String.fromCharCode(114,101,108,102,117,110,99,95,56,95,52,56,0), String.fromCharCode(110,95,50,54,95,102,101,97,116,117,114,101,0), String.fromCharCode(114,95,52,53,95,115,101,108,101,99,116,105,111,110,0)];
      if (3 < (libjsinspectorw.length | libjsinspectorw.length) || (libjsinspectorw.length | 3) < 2) {
         libjsinspectorw = [1];
      }
       let emojiK = 5;
       let liveendmodallogoc = 1;
         liveendmodallogoc |= libjsinspectorw.length / 2;
      privileged.set(`${roomD}`, roomD);
   }
      canvasv /= Math.max(3, parseFloat(`${parseInt(`${statisticsA}`) + 3}`));
   if (Array.from(privileged.keys()).includes(`${canvasv}`)) {
       let homeC = String.fromCharCode(104,95,53,50,95,104,97,118,105,110,103,0);
       let libjsijniprofilerI = String.fromCharCode(98,101,97,116,95,100,95,51,55,0);
      while (5 >= libjsijniprofilerI.length) {
         libjsijniprofilerI += `${homeC.length}`;
         break;
      }
      while (!libjsijniprofilerI.endsWith(`${homeC.length}`)) {
          let eventU: Map<any, any> = new Map([[String.fromCharCode(116,95,57,57,95,100,101,116,101,99,116,111,114,0),true ], [String.fromCharCode(109,95,50,56,95,118,97,114,105,97,98,105,108,105,116,121,0),true ]]);
          let spinner_ = 5;
          let imagemanager4: Map<any, any> = new Map([[String.fromCharCode(106,95,50,49,95,115,99,114,101,101,110,112,114,101,115,115,111,0),56], [String.fromCharCode(103,95,51,52,95,102,102,109,97,116,104,0),669], [String.fromCharCode(113,95,54,54,95,117,112,103,114,97,100,101,100,0),967]]);
          let bannerk: Map<any, any> = new Map([[String.fromCharCode(97,99,107,110,111,119,108,101,100,103,101,109,101,110,116,95,53,95,50,50,0),910], [String.fromCharCode(121,95,57,53,95,114,116,112,109,97,112,0),72]]);
         homeC += "2";
         eventU.set(`${eventU.size}`, imagemanager4.size);
         spinner_ |= spinner_;
         imagemanager4 = new Map([[`${eventU.size}`, 1]]);
         bannerk = new Map([[`${eventU.size}`, 2]]);
         break;
      }
      canvasv += parseFloat(`${parseInt(`${canvasv}`)}`);
   }
        resetForm();
    }

    const onSubmitForm = async () => {
       let productZ = String.fromCharCode(109,97,106,95,121,95,54,55,0);
    let stringsB: Map<any, any> = new Map([[String.fromCharCode(97,99,116,105,118,97,116,101,95,119,95,51,0),645], [String.fromCharCode(116,95,54,53,95,112,114,111,112,111,115,101,0),458], [String.fromCharCode(118,108,102,102,95,108,95,56,51,0),905]]);
    let filedV = 3;
    let rewinda = 5.0;
    let aboutZ = 4;
    let kuaishoum: Map<any, any> = new Map([[String.fromCharCode(116,95,53,57,95,116,114,105,109,109,105,110,103,0),628], [String.fromCharCode(104,95,54,50,95,114,103,98,112,108,117,115,0),656]]);
    let datat = String.fromCharCode(114,101,115,101,97,114,99,104,95,50,95,56,57,0);
    let predictionwin_ = 4.0;
    let tempnodatagifI = 4;
    let greytickG = String.fromCharCode(105,109,103,95,51,95,56,57,0);
    let membershipi = String.fromCharCode(99,111,110,110,101,99,116,105,111,110,99,98,95,57,95,53,53,0);
       let whiteanimationliveW = 5.0;
       let cleara: Array<any> = [String.fromCharCode(100,95,51,53,95,99,97,108,99,117,108,97,116,105,111,110,0), String.fromCharCode(100,101,99,111,100,105,110,103,95,112,95,57,48,0), String.fromCharCode(118,95,56,50,95,101,120,105,115,116,105,110,103,0)];
       let rewardG = String.fromCharCode(116,114,105,97,110,103,108,101,95,107,95,51,50,0);
       let leakcheckerx = 2.0;
       let fillJ = 3.0;
      for (let s = 0; s < 2; s++) {
          let desc6 = false;
         rewardG += `${3 - parseInt(`${leakcheckerx}`)}`;
         desc6 = !desc6;
      }
       let leaguen = false;
       let libturbomodulejsijnig = false;
         cleara.push(1 * parseInt(`${leakcheckerx}`));
      if (!cleara.includes(fillJ)) {
          let f_hasho = String.fromCharCode(102,95,52,57,95,115,119,105,116,99,104,98,97,115,101,0);
          let untick7 = String.fromCharCode(115,95,49,51,95,100,119,97,114,102,0);
          let customo = 2;
         fillJ /= Math.max(parseInt(`${whiteanimationliveW}`) | 2, 5);
         f_hasho = `${untick7.length}`;
         untick7 = `${(untick7 == String.fromCharCode(53,0) ? customo : untick7.length)}`;
         customo -= 2 % (Math.max(7, f_hasho.length));
      }
         whiteanimationliveW *= parseInt(`${whiteanimationliveW}`) / 2;
      if ((fillJ * 5.31) > 4.4 || 1.46 > (5.31 * fillJ)) {
         fillJ += ((libturbomodulejsijnig ? 3 : 1) | 2);
      }
         cleara.push((parseInt(`${fillJ}`) * (libturbomodulejsijnig ? 4 : 1)));
       let leftJ = 3;
       let controls_ = 4;
      kuaishoum = new Map([[productZ, filedV - productZ.length]]);
   for (let j = 0; j < 3; j++) {
      aboutZ >>= Math.min(1, Math.abs(3 + parseInt(`${rewinda}`)));
   }

        if (usernameErrMsg !== null) return;

   for (let u = 0; u < 1; u++) {
       let pangleo = String.fromCharCode(105,109,112,111,114,116,97,110,99,101,95,49,95,57,53,0);
       let suggestionW = String.fromCharCode(98,108,105,110,100,105,110,103,95,114,95,56,52,0);
       let singaporeK = 1.0;
       let iconwatchnowv: Map<any, any> = new Map([[String.fromCharCode(99,95,57,51,95,97,99,100,115,112,0),179], [String.fromCharCode(111,95,57,53,95,102,97,118,101,0),330]]);
          let graphicsi = String.fromCharCode(116,95,54,48,0);
          let uploadU = 3.0;
         iconwatchnowv.set(graphicsi, 3);
         graphicsi = `${parseInt(`${uploadU}`) % (Math.max(4, parseInt(`${uploadU}`)))}`;
      while (pangleo.endsWith(`${singaporeK}`)) {
          let mbnativeadvancedu = String.fromCharCode(122,95,57,54,0);
          let actiong = String.fromCharCode(111,95,57,95,116,121,112,105,110,103,0);
          let profileframeJ = false;
          let termsK: Array<any> = [556, 22];
          let expiredZ = String.fromCharCode(97,118,99,105,110,116,114,97,95,121,95,49,54,0);
         pangleo += `${3 | parseInt(`${singaporeK}`)}`;
         mbnativeadvancedu = `${(expiredZ == String.fromCharCode(66,0) ? expiredZ.length : termsK.length)}`;
         actiong = `${actiong.length}`;
         profileframeJ = mbnativeadvancedu == String.fromCharCode(117,0);
         termsK.push(termsK.length);
         break;
      }
      let download3 = String.fromCharCode(119,121,101,99,110,116,114,113,50,0) == pangleo;
      do {
         pangleo = `${iconwatchnowv.size & parseInt(`${singaporeK}`)}`;
         if (download3) {
            break;
         }
      } while (download3 && (suggestionW == String.fromCharCode(51,0)));
      let resultI = String.fromCharCode(121,48,57,55,0) == pangleo;
      do {
         pangleo = `${suggestionW.length}`;
         if (resultI) {
            break;
         }
      } while (resultI && ((singaporeK / (Math.max(parseFloat(`${pangleo.length}`), 8))) > 4.44 || 4.44 > (singaporeK / (Math.max(parseFloat(`${pangleo.length}`), 10)))));
      while ((1.45 - singaporeK) < 1.2 || 3 < (iconwatchnowv.size - 3)) {
          let sheetG = 5.0;
          let filled0 = 3.0;
          let countryc = String.fromCharCode(102,111,117,114,99,99,115,95,121,95,57,55,0);
          let homeQ: Map<any, any> = new Map([[String.fromCharCode(99,97,112,97,98,105,108,105,116,105,101,115,95,103,95,56,51,0),820], [String.fromCharCode(100,114,105,118,101,110,95,97,95,56,56,0),13], [String.fromCharCode(114,101,97,100,111,110,108,121,95,110,95,57,49,0),177]]);
          let graphics5 = String.fromCharCode(115,110,97,112,115,104,111,116,115,95,51,95,53,51,0);
         singaporeK *= parseFloat(`${3 % (Math.max(6, suggestionW.length))}`);
         sheetG += parseFloat(`${1}`);
         filled0 /= Math.max(4, 1);
         countryc += `${parseInt(`${filled0}`)}`;
         homeQ = new Map([[`${homeQ.size}`, countryc.length]]);
         graphics5 = `${1 % (Math.max(4, homeQ.size))}`;
         break;
      }
         pangleo += `${iconwatchnowv.size % (Math.max(1, 8))}`;
         suggestionW = "1";
      while (pangleo.length < 4) {
         suggestionW += `${iconwatchnowv.size - parseInt(`${singaporeK}`)}`;
         break;
      }
         suggestionW += `${parseInt(`${singaporeK}`)}`;
          let lightF = 0;
          let const_c2w = 0.0;
         iconwatchnowv.set(`${pangleo}`, pangleo.length * iconwatchnowv.size);
         lightF |= lightF * 2;
         const_c2w -= parseFloat(`${lightF}`);
         suggestionW += "2";
       let qaagf: Map<any, any> = new Map([[String.fromCharCode(115,117,98,115,121,115,116,101,109,95,107,95,50,0),502], [String.fromCharCode(105,97,116,95,54,95,53,48,0),624]]);
       let dependency4: Map<any, any> = new Map([[String.fromCharCode(110,95,49,49,95,100,117,97,108,0),2], [String.fromCharCode(101,95,55,55,95,101,110,118,105,114,111,110,109,101,110,116,0),625], [String.fromCharCode(113,95,54,56,95,102,97,116,97,108,0),522]]);
      datat = `${pangleo.length}`;
   }
      tempnodatagifI ^= 1;

        if (isSubmitting) return;

       let anytimeu: Map<any, any> = new Map([[String.fromCharCode(99,101,110,116,101,114,105,110,103,95,110,95,49,53,0),524], [String.fromCharCode(100,95,55,95,98,108,101,110,100,0),3]]);
       let iconmoree = String.fromCharCode(105,95,56,56,95,99,97,108,99,108,117,108,97,116,101,0);
      while (5 <= (iconmoree.length * anytimeu.size)) {
         iconmoree = `${1 + iconmoree.length}`;
         break;
      }
      for (let b = 0; b < 3; b++) {
          let macau7 = String.fromCharCode(103,110,114,101,95,120,95,53,57,0);
          let casti = String.fromCharCode(116,97,105,108,115,95,102,95,53,0);
          let stylesv: Array<any> = [920, 913];
         iconmoree += `${casti.length}`;
         macau7 = `${(macau7 == String.fromCharCode(48,0) ? stylesv.length : macau7.length)}`;
         casti = "2";
         stylesv = [stylesv.length % (Math.max(macau7.length, 4))];
      }
         anytimeu.set(iconmoree, 3);
      let launchr = iconmoree.length >= 6574069;
      do {
         iconmoree += `${iconmoree.length}`;
         if (launchr) {
            break;
         }
      } while ((anytimeu.size <= iconmoree.length) && launchr);
       let controlsJ = String.fromCharCode(105,110,115,116,114,117,99,116,105,111,110,115,95,119,95,54,50,0);
       let hiadT = String.fromCharCode(102,97,99,116,111,114,115,95,115,95,55,49,0);
      while (hiadT.length <= 1) {
         controlsJ = `${hiadT.length ^ controlsJ.length}`;
         break;
      }
      datat += `${iconmoree.length % (Math.max(datat.length, 10))}`;
       let middleware0 = 3.0;
       let commentJ: Array<any> = [521, 403];
       let libswscale6 = String.fromCharCode(114,101,103,105,115,116,101,114,101,114,95,99,95,50,56,0);
      while ((middleware0 - 5.14) < 5.2) {
         middleware0 *= 2;
         break;
      }
         commentJ = [1 | libswscale6.length];
      if (!libswscale6.endsWith(`${commentJ.length}`)) {
          let modew = String.fromCharCode(117,108,112,105,110,102,111,95,112,95,56,49,0);
          let zoomL = String.fromCharCode(101,120,112,105,114,97,116,105,111,110,95,113,95,54,54,0);
         libswscale6 += "2";
         modew += `${1 ^ zoomL.length}`;
         zoomL += `${zoomL.length}`;
      }
          let defaultplayerimg8 = String.fromCharCode(117,95,57,56,95,112,97,114,97,109,0);
         middleware0 -= (libswscale6 == String.fromCharCode(122,0) ? libswscale6.length : defaultplayerimg8.length);
      let reactnavigationD = libswscale6.length <= 5796933;
      do {
         libswscale6 = `${commentJ.length >> (Math.min(Math.abs(2), 2))}`;
         if (reactnavigationD) {
            break;
         }
      } while (reactnavigationD && (5 >= (libswscale6.length + commentJ.length) || (commentJ.length + libswscale6.length) >= 5));
          let iconmoreJ = String.fromCharCode(112,111,114,116,101,114,95,56,95,50,0);
         commentJ = [parseInt(`${middleware0}`)];
         iconmoreJ = "1";
       let uimanagerl: Array<any> = [797, 843, 297];
      if (5 <= (1 | libswscale6.length)) {
          let login2 = true;
          let penaltyb = String.fromCharCode(111,95,56,50,95,102,108,111,97,116,115,104,111,114,116,0);
         commentJ = [(parseInt(`${middleware0}`) << (Math.min(5, Math.abs((login2 ? 5 : 4)))))];
         login2 = 47 >= penaltyb.length;
         penaltyb = `${2 << (Math.min(2, penaltyb.length))}`;
      }
         commentJ = [uimanagerl.length];
      kuaishoum = new Map([[`${kuaishoum.size}`, 1]]);
        setSubmitting(true);

      rewinda /= Math.max((parseFloat(`${productZ == String.fromCharCode(48,0) ? stringsB.size : productZ.length}`)), 4);
   if (stringsB.get(`${rewinda}`) != null) {
       let penaltygoaly = String.fromCharCode(115,105,109,105,108,97,114,95,97,95,53,54,0);
       let holderm = 4.0;
       let neonN = 2;
       let sharemodal_ = 1.0;
       let libavfilterb = String.fromCharCode(100,95,51,53,95,117,110,112,105,110,110,101,100,0);
          let frame_y5 = String.fromCharCode(109,95,49,55,95,109,116,97,102,0);
          let confirmation0 = String.fromCharCode(105,110,118,105,115,105,98,108,101,95,54,95,52,54,0);
          let pingI = 0.0;
         penaltygoaly = `${3 | parseInt(`${holderm}`)}`;
         frame_y5 += `${frame_y5.length / 1}`;
         confirmation0 += "1";
         pingI -= confirmation0.length << (Math.min(2, Math.abs(parseInt(`${pingI}`))));
          let webviewZ = String.fromCharCode(114,103,116,99,117,95,112,95,57,48,0);
         sharemodal_ *= parseInt(`${sharemodal_}`) * 2;
         webviewZ = `${2 + webviewZ.length}`;
         sharemodal_ -= (String.fromCharCode(89,0) == penaltygoaly ? neonN : penaltygoaly.length);
          let colorsW = String.fromCharCode(109,97,103,105,99,95,108,95,53,55,0);
          let castF: Array<any> = [568, 767];
         neonN >>= Math.min(Math.abs(1 | colorsW.length), 5);
         colorsW = `${castF.length}`;
         castF.push(3);
      let constantsL = sharemodal_ <= 5293544.0;
      do {
         sharemodal_ += penaltygoaly.length % (Math.max(2, 10));
         if (constantsL) {
            break;
         }
      } while (((sharemodal_ - holderm) <= 3.69 && 1.95 <= (sharemodal_ - 3.69)) && constantsL);
       let bing9: Map<any, any> = new Map([[String.fromCharCode(105,95,53,48,95,115,117,98,108,101,110,103,116,104,0),String.fromCharCode(110,95,54,55,95,117,118,114,100,0)], [String.fromCharCode(101,95,56,52,95,101,102,102,101,99,116,115,0),String.fromCharCode(101,95,51,53,95,114,101,109,111,118,105,110,103,0)], [String.fromCharCode(115,104,117,116,116,101,114,95,48,95,49,53,0),String.fromCharCode(122,95,51,49,95,105,110,116,101,114,102,97,99,101,115,0)]]);
       let videojsU: Map<any, any> = new Map([[String.fromCharCode(100,95,53,51,95,111,117,114,0),47], [String.fromCharCode(102,95,51,48,95,104,111,108,100,101,114,0),530]]);
         libavfilterb = "3";
         sharemodal_ /= Math.max(3, bing9.size);
          let downloadedF: Array<any> = [String.fromCharCode(103,95,49,48,0), String.fromCharCode(97,95,50,52,95,97,100,106,117,115,116,0)];
          let kuaishou1 = String.fromCharCode(117,95,52,56,95,105,114,114,101,108,118,97,110,116,0);
         holderm += parseFloat(`${libavfilterb.length}`);
         downloadedF = [downloadedF.length / (Math.max(9, kuaishou1.length))];
         kuaishou1 = "1";
      for (let w = 0; w < 2; w++) {
         sharemodal_ *= (libavfilterb == String.fromCharCode(80,0) ? parseInt(`${sharemodal_}`) : libavfilterb.length);
      }
       let successs: Map<any, any> = new Map([[String.fromCharCode(101,109,111,106,105,115,95,49,95,57,53,0),563], [String.fromCharCode(104,101,120,95,104,95,54,49,0),176], [String.fromCharCode(116,114,97,105,108,101,114,95,120,95,54,53,0),425]]);
       let libffmpegkitI: Map<any, any> = new Map([[String.fromCharCode(112,95,57,52,95,107,101,99,99,97,107,0),String.fromCharCode(109,95,54,53,95,115,104,97,100,101,114,0)], [String.fromCharCode(118,95,53,57,0),String.fromCharCode(116,114,97,110,115,105,116,95,114,95,57,48,0)], [String.fromCharCode(109,95,51,53,95,105,110,115,112,101,99,116,0),String.fromCharCode(112,117,98,108,105,115,104,101,114,115,95,51,95,51,57,0)]]);
      while (1 >= (parseInt(`${sharemodal_}`) - libavfilterb.length) || (parseInt(`${sharemodal_}`) - libavfilterb.length) >= 1) {
          let downloadingb = false;
         libavfilterb += `${successs.size << (Math.min(Math.abs(1), 3))}`;
         downloadingb = (!downloadingb ? !downloadingb : downloadingb);
         break;
      }
       let loginsuccessJ = String.fromCharCode(100,95,51,55,95,108,97,116,101,110,99,121,0);
         libavfilterb = `${parseInt(`${sharemodal_}`) / (Math.max(libffmpegkitI.size, 7))}`;
         loginsuccessJ = `${loginsuccessJ.length >> (Math.min(4, Math.abs(parseInt(`${holderm}`))))}`;
      rewinda *= (parseFloat(`${String.fromCharCode(100,0) == penaltygoaly ? penaltygoaly.length : aboutZ}`));
   }

        try {

      filedV %= Math.max(aboutZ, 3);
      rewinda *= parseFloat(`${1}`);
            await wwIconscheduleColors.updateUsername({
                username: username,
            });
        } catch (err: any) {
            if (
                err.errors &&
                err.errors.username
            ) {

      predictionwin_ /= Math.max(5, productZ.length);
   for (let y = 0; y < 2; y++) {
       let clubI = String.fromCharCode(103,101,110,102,105,108,101,115,95,117,95,51,53,0);
       let sideH = 0;
       let network_ = 1.0;
       let helperN = 1;
       let path2: Map<any, any> = new Map([[String.fromCharCode(102,105,108,101,114,101,97,100,115,116,114,101,97,109,95,55,95,53,53,0),true ], [String.fromCharCode(105,111,115,95,111,95,55,48,0),true ]]);
         network_ /= Math.max(3, 1 ^ sideH);
         clubI += "1";
         helperN &= parseInt(`${network_}`) & path2.size;
         sideH &= helperN;
          let executorw: Map<any, any> = new Map([[String.fromCharCode(109,97,110,117,97,108,108,121,95,112,95,49,48,48,0),false ], [String.fromCharCode(103,114,97,121,115,99,97,108,101,95,109,95,49,54,0),false ], [String.fromCharCode(117,95,54,95,117,116,102,116,111,0),false ]]);
          let langkey3 = String.fromCharCode(109,95,51,51,95,115,116,101,110,99,105,108,0);
         sideH |= parseInt(`${network_}`) ^ 2;
         executorw.set(langkey3, (langkey3 == String.fromCharCode(86,0) ? langkey3.length : executorw.size));
      for (let h = 0; h < 3; h++) {
         helperN >>= Math.min(1, Math.abs(2 - sideH));
      }
      let downR = sideH >= 9130697;
      do {
         sideH |= 2 << (Math.min(5, Math.abs(sideH)));
         if (downR) {
            break;
         }
      } while (downR && ((network_ - 1.84) < 1.31));
      for (let g = 0; g < 1; g++) {
         network_ *= path2.size;
      }
      if (5 >= (1 ^ helperN) || 3 >= (clubI.length ^ 1)) {
          let annerV = 4.0;
          let rewind_ = 5;
          let backgroundV: Map<any, any> = new Map([[String.fromCharCode(122,95,50,57,95,116,97,103,103,105,110,103,0),false ], [String.fromCharCode(100,101,108,101,116,105,110,103,95,52,95,55,57,0),false ]]);
          let foregroundv = String.fromCharCode(99,121,99,108,101,100,95,106,95,52,57,0);
         clubI += `${foregroundv.length}`;
         annerV -= 2 + rewind_;
         rewind_ -= rewind_ << (Math.min(4, Math.abs(2)));
         backgroundV = new Map([[`${backgroundV.size}`, 2 << (Math.min(5, Math.abs(parseInt(`${annerV}`))))]]);
         foregroundv = `${backgroundV.size}`;
      }
      for (let f = 0; f < 3; f++) {
          let popupP = String.fromCharCode(97,110,99,104,111,114,95,54,95,54,0);
          let videocommonP = true;
         helperN += parseInt(`${network_}`);
         popupP += `${((videocommonP ? 4 : 2) - 2)}`;
         videocommonP = !videocommonP;
      }
       let zcopy_eC: Array<any> = [292, 911];
       let executorj: Array<any> = [String.fromCharCode(98,108,111,98,115,95,97,95,55,48,0), String.fromCharCode(120,95,57,48,95,115,99,104,101,100,0)];
         sideH /= Math.max(4, helperN);
         sideH <<= Math.min(4, Math.abs(3 * helperN));
      if (path2.size < 1) {
         path2 = new Map([[`${zcopy_eC.length}`, executorj.length]]);
      }
         zcopy_eC.push(executorj.length - helperN);
      predictionwin_ /= Math.max(stringsB.size, 2);
   }
                setUsernameErrMsg(err.errors.username);
            }

            if (!err.errors && err.message) {

       let frame_9ie: Array<any> = [String.fromCharCode(111,95,56,49,95,100,105,115,116,114,105,98,117,116,105,111,110,115,0), String.fromCharCode(121,95,55,55,95,109,117,116,97,116,105,110,103,0)];
         frame_9ie.push(frame_9ie.length | frame_9ie.length);
         frame_9ie = [3 & frame_9ie.length];
      if (2 > (frame_9ie.length - 2)) {
          let scheduler9 = String.fromCharCode(103,95,54,53,95,105,115,108,101,97,112,0);
          let downloadt = String.fromCharCode(118,95,56,56,95,100,101,116,97,105,108,0);
          let window_drn = 1;
         frame_9ie.push(downloadt.length);
         scheduler9 = `${window_drn}`;
         downloadt += `${window_drn % (Math.max(scheduler9.length, 7))}`;
      }
      predictionwin_ -= kuaishoum.size + datat.length;
      aboutZ <<= Math.min(4, Math.abs(filedV));
                setUsernameErrMsg(err.message);
            }

            setSubmitting(false);

   if ((datat.length ^ kuaishoum.size) >= 3) {
       let annera = String.fromCharCode(99,95,57,53,95,97,97,100,0);
       let friends7 = 1.0;
       let analyticx = 0;
       let heartI: Map<any, any> = new Map([[String.fromCharCode(114,95,51,54,95,116,116,97,100,115,112,0),false ], [String.fromCharCode(119,101,98,114,116,99,95,97,95,51,53,0),true ], [String.fromCharCode(107,95,53,49,95,118,101,114,115,105,111,110,115,0),true ]]);
       let componentregistryC: Map<any, any> = new Map([[String.fromCharCode(102,111,114,109,97,116,117,95,97,95,53,55,0),false ], [String.fromCharCode(104,95,55,50,95,107,101,121,105,100,0),false ], [String.fromCharCode(118,95,52,49,95,115,115,116,104,114,101,115,104,0),false ]]);
       let shirtp = 4.0;
      let singaporer = componentregistryC.size >= 6704489;
      do {
         componentregistryC.set(`${analyticx}`, analyticx);
         if (singaporer) {
            break;
         }
      } while ((5 <= analyticx) && singaporer);
      while (Array.from(componentregistryC.values()).includes(analyticx)) {
         analyticx >>= Math.min(Math.abs(componentregistryC.size), 4);
         break;
      }
      let rewardS = 4975118.0 >= shirtp;
      do {
          let abidetectd: Array<any> = [339, 163];
          let libreactnativeblobo = String.fromCharCode(99,111,108,108,105,100,105,110,103,95,107,95,50,57,0);
          let floaterK: Map<any, any> = new Map([[String.fromCharCode(97,95,51,48,95,114,101,116,114,97,110,115,0),false ], [String.fromCharCode(109,95,53,52,95,105,110,115,116,97,108,108,97,116,105,111,110,0),false ], [String.fromCharCode(115,116,114,117,99,116,117,114,101,95,120,95,51,51,0),true ]]);
          let cornerkickJ = 1;
          let mintegralR = String.fromCharCode(112,114,111,118,105,115,105,111,110,95,110,95,50,51,0);
         shirtp *= parseFloat(`${1}`);
         abidetectd = [mintegralR.length];
         libreactnativeblobo = `${3 << (Math.min(5, Math.abs(cornerkickJ)))}`;
         floaterK = new Map([[`${cornerkickJ}`, cornerkickJ - 1]]);
         mintegralR += `${mintegralR.length}`;
         if (rewardS) {
            break;
         }
      } while (rewardS && (2 <= (heartI.size % (Math.max(4, 5)))));
         analyticx %= Math.max(1, analyticx);
      let policyy = 8662306 <= componentregistryC.size;
      do {
          let buttonm: Map<any, any> = new Map([[String.fromCharCode(99,116,105,111,110,95,101,95,50,49,0),995], [String.fromCharCode(101,118,101,110,116,115,95,52,95,53,52,0),24], [String.fromCharCode(111,95,51,50,95,106,115,105,109,100,99,112,117,0),380]]);
          let libreactnativejniq = String.fromCharCode(105,95,54,53,95,97,100,100,107,101,121,0);
         componentregistryC = new Map([[`${componentregistryC.size}`, componentregistryC.size ^ parseInt(`${friends7}`)]]);
         buttonm = new Map([[`${buttonm.size}`, buttonm.size]]);
         libreactnativejniq += `${libreactnativejniq.length}`;
         if (policyy) {
            break;
         }
      } while (policyy && (3 < heartI.size));
       let coreO = 0;
         friends7 -= heartI.size & analyticx;
       let textinputG = 4.0;
      if (4 > componentregistryC.size) {
          let armval: Map<any, any> = new Map([[String.fromCharCode(107,95,49,95,103,101,116,120,118,97,114,0),String.fromCharCode(116,95,50,48,95,99,111,110,116,105,110,117,101,0)], [String.fromCharCode(97,95,54,55,95,101,120,112,111,110,101,110,116,0),String.fromCharCode(114,101,118,101,97,108,95,107,95,55,51,0)], [String.fromCharCode(98,95,55,51,95,110,111,110,101,0),String.fromCharCode(105,110,112,111,115,95,105,95,51,56,0)]]);
          let usernameH = String.fromCharCode(121,95,51,55,95,107,101,121,100,105,114,0);
          let gemfiler = 2;
          let matchesT = String.fromCharCode(102,105,110,100,110,101,116,95,112,95,49,50,0);
          let iconuserE: Map<any, any> = new Map([[String.fromCharCode(100,101,102,108,97,116,101,95,98,95,55,51,0),953], [String.fromCharCode(97,114,99,104,105,118,101,95,100,95,52,0),58], [String.fromCharCode(109,97,120,106,95,112,95,51,57,0),620]]);
         componentregistryC = new Map([[`${armval.size}`, armval.size]]);
         usernameH += "3";
         gemfiler *= iconuserE.size << (Math.min(Math.abs(1), 5));
         matchesT = `${(matchesT == String.fromCharCode(67,0) ? iconuserE.size : matchesT.length)}`;
      }
       let mathK = true;
      for (let d = 0; d < 1; d++) {
         friends7 *= 3;
      }
      while ((analyticx / (Math.max(8, componentregistryC.size))) < 1 || 1 < (componentregistryC.size / (Math.max(7, analyticx)))) {
         componentregistryC.set(`${analyticx}`, 2);
         break;
      }
      let animations6 = analyticx >= 7968830;
      do {
         analyticx <<= Math.min(Math.abs(coreO & 1), 4);
         if (animations6) {
            break;
         }
      } while (animations6 && (1 > analyticx));
         analyticx ^= parseInt(`${friends7}`);
      kuaishoum = new Map([[datat, (String.fromCharCode(95,0) == datat ? datat.length : parseInt(`${predictionwin_}`))]]);
      annera = `${(String.fromCharCode(87,0) == annera ? annera.length : annera.length)}`;
   }
   let bufferz = predictionwin_ <= 7192627.0;
   do {
      predictionwin_ += 3;
      if (bufferz) {
         break;
      }
   } while (bufferz && ((tempnodatagifI << (Math.min(Math.abs(2), 3))) >= 5));
            return;
        }


        dispatch(updateUsernameState(username));

      aboutZ |= filedV;
   for (let m = 0; m < 2; m++) {
       let nbatrophy7 = 0;
       let libtanS = String.fromCharCode(115,101,112,105,97,95,101,95,53,55,0);
      if (3 >= libtanS.length) {
          let qaagH = 4.0;
          let main_ak = 1.0;
         libtanS += `${parseInt(`${qaagH}`)}`;
         qaagH -= parseInt(`${main_ak}`);
      }
         nbatrophy7 += (libtanS == String.fromCharCode(78,0) ? nbatrophy7 : libtanS.length);
      while (libtanS.startsWith(`${nbatrophy7}`)) {
         libtanS += `${libtanS.length}`;
         break;
      }
         nbatrophy7 *= nbatrophy7;
      while (1 > (libtanS.length & nbatrophy7)) {
          let analyticsq: Array<any> = [851, 484];
          let applicationl = String.fromCharCode(115,95,51,55,95,115,108,105,99,101,97,110,103,108,101,0);
          let turnx = String.fromCharCode(115,97,116,105,115,102,105,101,100,95,51,95,54,55,0);
          let bottomE = String.fromCharCode(112,95,56,51,95,101,120,99,108,117,100,101,115,0);
          let release_9Y = false;
         libtanS += `${turnx.length * bottomE.length}`;
         analyticsq.push(2);
         applicationl += `${2 >> (Math.min(5, analyticsq.length))}`;
         turnx = "2";
         bottomE = `${((release_9Y ? 5 : 5) | 1)}`;
         break;
      }
      if (libtanS.length > nbatrophy7) {
          let exampleimageT = 3;
          let profilem = false;
         nbatrophy7 -= 3;
         exampleimageT %= Math.max(4, 2 >> (Math.min(Math.abs(exampleimageT), 4)));
         profilem = profilem || exampleimageT >= 12;
      }
      datat += `${parseInt(`${predictionwin_}`) << (Math.min(2, Math.abs(3)))}`;
   }
        dispatch(changeScreenAction("修改成功"));

      productZ = `${1 >> (Math.min(2, productZ.length))}`;
      rewinda /= Math.max(1, parseFloat(`${2 * productZ.length}`));

        if (onSubmitSuccess) onSubmitSuccess(username);

      datat = `${aboutZ}`;
   for (let f = 0; f < 1; f++) {
       let stepL: Array<any> = [String.fromCharCode(109,95,56,95,108,111,99,97,108,105,122,97,98,108,101,0), String.fromCharCode(100,105,115,99,97,114,100,95,117,95,49,55,0), String.fromCharCode(109,95,53,51,95,117,110,112,111,105,115,111,110,0)];
       let interstitialM = String.fromCharCode(118,95,50,49,95,112,108,97,99,101,115,0);
      if (1 >= (stepL.length / (Math.max(interstitialM.length, 6)))) {
          let colorsg: Map<any, any> = new Map([[String.fromCharCode(118,95,57,54,95,115,116,114,102,117,110,99,0),String.fromCharCode(100,95,50,51,95,117,110,98,108,111,99,107,105,110,103,0)], [String.fromCharCode(110,95,48,95,97,115,99,0),String.fromCharCode(104,95,50,55,95,117,110,114,101,115,101,114,118,101,100,0)]]);
          let eventz: Map<any, any> = new Map([[String.fromCharCode(118,105,101,119,95,117,95,55,49,0),String.fromCharCode(114,95,53,51,95,99,111,108,117,109,115,0)], [String.fromCharCode(108,95,54,95,100,101,116,97,105,108,0),String.fromCharCode(117,95,55,50,95,117,110,119,105,110,100,0)]]);
         interstitialM += `${eventz.size >> (Math.min(Math.abs(3), 3))}`;
         colorsg.set(`${colorsg.size}`, colorsg.size);
         eventz = new Map([[`${colorsg.size}`, colorsg.size]]);
      }
      while (interstitialM.endsWith(`${stepL.length}`)) {
         stepL = [interstitialM.length * 1];
         break;
      }
         stepL.push(3);
      let yellowredcardW = String.fromCharCode(119,49,57,113,0) == interstitialM;
      do {
         interstitialM += "2";
         if (yellowredcardW) {
            break;
         }
      } while ((5 < (interstitialM.length + 1) && 3 < (1 + interstitialM.length)) && yellowredcardW);
         stepL.push(stepL.length % (Math.max(3, interstitialM.length)));
         interstitialM = "3";
      predictionwin_ /= Math.max(1 | datat.length, 4);
   }

        Keyboard.dismiss();

      stringsB = new Map([[productZ, 1 + datat.length]]);
       let borderlessO: Array<any> = [165, 262, 182];
       let eyeopenh = 5.0;
       let liveendmodallogoV = 4;
          let unreadm = String.fromCharCode(99,108,117,115,116,101,114,115,95,54,95,51,52,0);
         borderlessO = [liveendmodallogoV];
         unreadm += `${unreadm.length}`;
      let temperatureF = 9618323.0 >= eyeopenh;
      do {
          let rulesg: Array<any> = [104, 656, 503];
          let coden = 5.0;
          let sharemodals = String.fromCharCode(119,97,108,107,101,114,95,105,95,55,53,0);
          let sports9 = 1.0;
         eyeopenh *= parseFloat(`${sharemodals.length}`);
         rulesg = [parseInt(`${sports9}`) / (Math.max(parseInt(`${coden}`), 5))];
         coden -= 2;
         sharemodals = `${parseInt(`${coden}`)}`;
         sports9 -= 3;
         if (temperatureF) {
            break;
         }
      } while (((parseInt(`${eyeopenh}`) + borderlessO.length) < 3) && temperatureF);
         liveendmodallogoV |= liveendmodallogoV & 2;
         borderlessO = [borderlessO.length];
       let componentsQ = String.fromCharCode(116,97,103,103,105,110,103,95,121,95,57,51,0);
       let hoverx = String.fromCharCode(115,97,109,112,108,101,102,109,116,95,102,95,54,50,0);
      for (let q = 0; q < 3; q++) {
         borderlessO.push(parseInt(`${eyeopenh}`) >> (Math.min(borderlessO.length, 1)));
      }
      while (5.94 <= eyeopenh) {
         eyeopenh -= parseFloat(`${3 >> (Math.min(1, componentsQ.length))}`);
         break;
      }
         componentsQ += `${borderlessO.length + 1}`;
         borderlessO = [(componentsQ == String.fromCharCode(111,0) ? componentsQ.length : parseInt(`${eyeopenh}`))];
      rewinda *= parseFloat(`${borderlessO.length | greytickG.length}`);
        navigation.navigate("Home", {
            screen: "Profile",
        });

       let review1 = 0;
       let rncorel: Array<any> = [671, 440];
       let eighteeno: Array<any> = [730, 127, 287];
      for (let f = 0; f < 1; f++) {
         rncorel = [review1 ^ rncorel.length];
      }
         rncorel = [eighteeno.length];
      kuaishoum.set(`${predictionwin_}`, aboutZ);
      rewinda /= Math.max(parseFloat(`${datat.length}`), 1);

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
                                source={require("@static/images/invite/countrySingaporeManager.png")}
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
                    {username?.replace(/\s+/g, "").length}/18
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