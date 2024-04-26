import { useState } from "react";
import { Image, Keyboard, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CBottomSheet, CTextInput } from "../atoms";
import { useNavigation, useTheme } from "@react-navigation/native";
import { useSelector } from "@hooks/wawa_root";
import { useDispatch } from "react-redux";
import { changeScreenAction } from "@redux/actions/wawa_related";
import { updateUserAuth } from "@redux/actions/wawa_loginsuccess";
import { wawaEvent } from "@api";
import { wawaPhoneControls } from "@redux/reducers/wawa_umeng";


interface wawaAwayShow {
    isVisible?: boolean;
    handleClose?: () => any;
    onSubmitSuccess?: (referrer: string) => void,
}

export const ChangeReferrerModal = ({
    isVisible = false,
    handleClose,
    onSubmitSuccess,
}: wawaAwayShow) => {
    const { textVariants } = useTheme();

    const dispatch = useDispatch();
    const navigation = useNavigation();
    const userState = useSelector<wawaPhoneControls>('userReducer');

    const [referrer, setReferrer] = useState('');
    const [referrerErrMsg, setReferrerErrMsg] = useState<string | null>(null);

    const [isSubmitting, setSubmitting] = useState(false);

    const onReferralChange = (value: any) => {
        setReferrer(value);
        setReferrerErrMsg(null);
    };

    const resetForm = () => {
       let iconarrowrightblackK: Array<any> = [String.fromCharCode(102,95,50,52,95,100,101,97,99,116,105,118,97,116,101,0), String.fromCharCode(102,97,120,99,111,109,112,114,95,106,95,54,56,0), String.fromCharCode(105,110,103,114,101,115,115,95,117,95,54,55,0)];
    let snewsshareM = 0;
    let playershirtG = 3.0;
    let statsh = 3.0;
    let notificationgrayF = String.fromCharCode(113,95,49,95,102,97,115,116,0);
    let logouserh = String.fromCharCode(101,114,97,115,101,100,95,57,95,49,55,0);
    let smallorangemanD = false;
    let materialM = String.fromCharCode(117,95,52,49,95,99,97,110,99,101,108,108,105,110,103,0);
   if (5 == notificationgrayF.length) {
       let searchbarv: Map<any, any> = new Map([[String.fromCharCode(112,114,101,115,99,97,108,101,95,121,95,50,53,0),373], [String.fromCharCode(110,95,56,57,95,112,97,114,116,105,99,105,112,97,116,105,111,110,0),19]]);
       let baselineB = 3;
       let watchnowbgz = 5;
       let emptyk = 5;
       let webview3 = 3.0;
       let delegate_nrS = 3.0;
      notificationgrayF = `${parseInt(`${statsh}`)}`;
      searchbarv.set(`${searchbarv.size}`, 3);
   }
   while (materialM.length > 1 || notificationgrayF.length > 1) {
       let mailH = String.fromCharCode(97,99,99,101,115,115,111,114,105,101,115,95,99,95,49,51,0);
       let combinedF = String.fromCharCode(102,99,102,115,95,109,95,51,0);
       let becomed = true;
          let libane9 = 5.0;
          let benefit2: Map<any, any> = new Map([[String.fromCharCode(114,95,54,56,95,99,111,112,121,105,110,105,111,118,0),false ], [String.fromCharCode(120,95,51,54,95,98,117,105,108,116,0),true ]]);
          let targete: Map<any, any> = new Map([[String.fromCharCode(111,95,55,48,95,103,101,116,112,105,120,0),84], [String.fromCharCode(114,95,49,52,95,105,111,115,116,114,101,97,109,0),73], [String.fromCharCode(112,105,99,107,101,114,95,120,95,53,55,0),921]]);
         mailH += "1";
         libane9 += parseInt(`${libane9}`);
         benefit2 = new Map([[`${targete.size}`, targete.size + 1]]);
         combinedF = "1";
          let overs = 4.0;
          let orangeclockg: Array<any> = [String.fromCharCode(118,115,116,97,116,115,95,55,95,52,54,0), String.fromCharCode(109,111,118,105,101,95,109,95,57,55,0), String.fromCharCode(98,105,116,115,113,112,95,118,95,53,55,0)];
          let upgradeX = 1.0;
         combinedF += `${(String.fromCharCode(107,0) == mailH ? mailH.length : parseInt(`${overs}`))}`;
         overs -= parseInt(`${upgradeX}`);
         orangeclockg = [orangeclockg.length / 1];
         upgradeX += parseInt(`${upgradeX}`);
      while (4 < combinedF.length) {
          let giftN = 4.0;
          let listq: Map<any, any> = new Map([[String.fromCharCode(119,95,51,95,114,101,109,97,112,112,101,100,0),913], [String.fromCharCode(97,112,112,114,101,99,97,116,105,111,110,95,99,95,49,54,0),746]]);
         combinedF += `${2 | listq.size}`;
         giftN += parseInt(`${giftN}`);
         listq.set(`${giftN}`, 1);
         break;
      }
      for (let c = 0; c < 1; c++) {
         mailH += `${((becomed ? 2 : 2) >> (Math.min(combinedF.length, 3)))}`;
      }
       let libjsinspector8 = 5.0;
       let arrowselectdownY = 1.0;
       let streamings = String.fromCharCode(99,108,105,112,112,105,110,103,110,111,100,101,95,100,95,56,57,0);
         becomed = mailH.length < 50;
      for (let w = 0; w < 3; w++) {
          let mbbid1 = String.fromCharCode(97,95,57,50,95,106,117,115,116,105,102,105,101,100,0);
          let nextt = String.fromCharCode(99,111,112,121,120,110,95,122,95,56,48,0);
          let mappingi = 0.0;
          let helperK = String.fromCharCode(119,114,111,110,103,95,105,95,53,53,0);
         combinedF = `${(String.fromCharCode(74,0) == combinedF ? parseInt(`${mappingi}`) : combinedF.length)}`;
         mbbid1 += `${nextt.length}`;
         nextt = `${nextt.length}`;
         mappingi -= parseFloat(`${helperK.length ^ 1}`);
         helperK += `${mbbid1.length}`;
      }
      materialM = `${mailH.length - 1}`;
      break;
   }
   while (4.99 >= (playershirtG * statsh)) {
      playershirtG += 1;
      break;
   }
      snewsshareM >>= Math.min(Math.abs((String.fromCharCode(48,0) == logouserh ? iconarrowrightblackK.length : logouserh.length)), 1);
   while ((statsh - 4.24) < 4.21 && 1 < (1 * notificationgrayF.length)) {
      notificationgrayF = "3";
      break;
   }
       let nterstitiald = 5.0;
       let inouttargetyellowY: Map<any, any> = new Map([[String.fromCharCode(98,95,54,54,95,115,105,110,101,119,105,110,0),918], [String.fromCharCode(121,95,51,95,102,108,97,116,110,101,115,115,0),984]]);
       let selectP: Map<any, any> = new Map([[String.fromCharCode(99,111,108,117,109,110,115,95,120,95,51,54,0),902], [String.fromCharCode(114,95,56,95,98,105,110,116,114,101,101,0),579], [String.fromCharCode(103,95,53,55,95,97,117,120,0),249]]);
      if ((2 * selectP.size) >= 4) {
         selectP.set(`${nterstitiald}`, 1 % (Math.max(6, parseInt(`${nterstitiald}`))));
      }
      while (!Array.from(selectP.keys()).includes(`${inouttargetyellowY.size}`)) {
         selectP.set(`${selectP.size}`, selectP.size - inouttargetyellowY.size);
         break;
      }
      let dependenciesF = 7211767 >= inouttargetyellowY.size;
      do {
         inouttargetyellowY = new Map([[`${selectP.size}`, 1]]);
         if (dependenciesF) {
            break;
         }
      } while ((selectP.size >= 2) && dependenciesF);
         nterstitiald += parseFloat(`${selectP.size & 1}`);
      while (selectP.get(`${inouttargetyellowY.size}`) != null) {
         selectP.set(`${nterstitiald}`, 1);
         break;
      }
      if (inouttargetyellowY.size >= selectP.size) {
         inouttargetyellowY.set(`${selectP.size}`, inouttargetyellowY.size);
      }
          let overlayF = false;
          let filej = true;
          let basketballdetailsbgI = 4.0;
         selectP = new Map([[`${overlayF}`, ((filej ? 5 : 4) / 1)]]);
         filej = 9.8 < basketballdetailsbgI;
      for (let e = 0; e < 3; e++) {
          let backf = String.fromCharCode(115,117,98,115,116,114,105,110,103,95,115,95,50,56,0);
          let actionsA = 4.0;
          let typingk = 1.0;
          let gesturej = String.fromCharCode(101,95,54,50,95,106,111,98,0);
          let predictiondefaultl = true;
         inouttargetyellowY = new Map([[backf, gesturej.length << (Math.min(2, backf.length))]]);
         actionsA *= parseInt(`${typingk}`) - 1;
         typingk /= Math.max(3, parseFloat(`${parseInt(`${typingk}`) | parseInt(`${actionsA}`)}`));
         gesturej += `${((predictiondefaultl ? 5 : 5) / (Math.max(parseInt(`${actionsA}`), 10)))}`;
         predictiondefaultl = 37.79 <= typingk;
      }
         nterstitiald += parseFloat(`${parseInt(`${nterstitiald}`)}`);
      logouserh += `${notificationgrayF.length + selectP.size}`;
   while (snewsshareM > statsh) {
      statsh += (parseFloat(`${(smallorangemanD ? 4 : 4) << (Math.min(materialM.length, 4))}`));
      break;
   }
   while ((notificationgrayF.length / (Math.max(7, playershirtG))) >= 3.91 && (parseInt(`${playershirtG}`) / (Math.max(notificationgrayF.length, 5))) >= 2) {
      playershirtG -= parseInt(`${statsh}`);
      break;
   }
      logouserh = `${iconarrowrightblackK.length * 2}`;
   let coreQ = statsh >= 7327860.0;
   do {
      statsh -= parseFloat(`${1 * parseInt(`${playershirtG}`)}`);
      if (coreQ) {
         break;
      }
   } while (((playershirtG + statsh) == 3.9) && coreQ);
   let plashD = playershirtG <= 5304014.0;
   do {
      playershirtG *= 1 >> (Math.min(1, notificationgrayF.length));
      if (plashD) {
         break;
      }
   } while (plashD && (2.52 < (5.57 + playershirtG)));
   for (let r = 0; r < 2; r++) {
      snewsshareM -= (logouserh == String.fromCharCode(88,0) ? (smallorangemanD ? 5 : 3) : logouserh.length);
   }
   while (1 >= iconarrowrightblackK.length) {
       let profileactivei = String.fromCharCode(122,95,56,48,95,115,97,110,115,0);
       let robotop: Map<any, any> = new Map([[String.fromCharCode(109,95,51,50,95,111,117,116,103,111,105,110,103,0),166], [String.fromCharCode(104,95,51,53,95,111,102,102,115,0),467], [String.fromCharCode(110,95,50,49,95,110,97,109,101,100,0),962]]);
       let mountingc = String.fromCharCode(117,95,51,95,104,97,110,100,108,101,115,0);
       let textinputF = false;
      if (mountingc.length < 5) {
         robotop.set(mountingc, 2);
      }
         mountingc += `${profileactivei.length}`;
      let subsW = textinputF ? !textinputF : textinputF;
      do {
          let iconarrowrightwhiteL = String.fromCharCode(97,110,97,103,108,121,112,104,95,56,95,49,55,0);
          let condensedm: Map<any, any> = new Map([[String.fromCharCode(116,114,97,110,115,113,117,97,110,116,95,115,95,57,48,0),88], [String.fromCharCode(99,104,97,114,99,111,110,118,95,109,95,54,51,0),713], [String.fromCharCode(114,95,55,95,118,97,108,105,100,97,116,97,98,108,101,0),794]]);
         textinputF = 38 < robotop.size;
         iconarrowrightwhiteL += `${condensedm.size >> (Math.min(Math.abs(3), 1))}`;
         condensedm = new Map([[`${condensedm.size}`, condensedm.size]]);
         if (subsW) {
            break;
         }
      } while (subsW && (!textinputF));
       let long_i6 = String.fromCharCode(112,101,101,114,99,111,110,110,101,99,116,105,111,110,105,110,116,101,114,102,97,99,101,95,103,95,57,55,0);
          let bggradientx = 4;
         mountingc += `${((textinputF ? 3 : 2) + 3)}`;
         bggradientx |= bggradientx >> (Math.min(Math.abs(2), 4));
      while (profileactivei.length > 2) {
          let runtimescheduler8 = 0.0;
          let whitevideolivej = String.fromCharCode(110,95,49,54,95,100,113,117,97,110,116,0);
          let selection1 = 4;
          let smallorangeman0 = String.fromCharCode(101,114,114,115,116,114,95,107,95,55,49,0);
         textinputF = (robotop.size + selection1) < 95;
         runtimescheduler8 += whitevideolivej.length + parseInt(`${runtimescheduler8}`);
         whitevideolivej = `${smallorangeman0.length & whitevideolivej.length}`;
         selection1 &= whitevideolivej.length;
         smallorangeman0 += `${(smallorangeman0 == String.fromCharCode(122,0) ? parseInt(`${runtimescheduler8}`) : smallorangeman0.length)}`;
         break;
      }
         profileactivei += `${long_i6.length}`;
      for (let d = 0; d < 2; d++) {
         mountingc += `${profileactivei.length}`;
      }
      for (let v = 0; v < 2; v++) {
         mountingc = `${profileactivei.length}`;
      }
      for (let g = 0; g < 2; g++) {
         textinputF = String.fromCharCode(119,0) == mountingc;
      }
      let orangeclockS = mountingc == String.fromCharCode(49,56,112,51,115,118,121,107,52,0);
      do {
          let promotionl = String.fromCharCode(103,95,49,51,95,97,99,108,114,0);
         mountingc += `${2 & robotop.size}`;
         promotionl += `${promotionl.length}`;
         if (orangeclockS) {
            break;
         }
      } while ((mountingc.endsWith(`${long_i6.length}`)) && orangeclockS);
         textinputF = long_i6.startsWith(`${textinputF}`);
      iconarrowrightblackK.push(robotop.size);
      break;
   }
      logouserh += `${1 >> (Math.min(3, logouserh.length))}`;

        setReferrer('');

       let submit6 = String.fromCharCode(117,95,57,48,95,112,108,97,116,102,111,114,109,0);
      for (let m = 0; m < 3; m++) {
         submit6 += `${1 + submit6.length}`;
      }
         submit6 += "3";
         submit6 = `${submit6.length * 2}`;
      smallorangemanD = materialM.startsWith(`${statsh}`);
       let reduceri = 1;
       let gmailu = String.fromCharCode(115,105,109,112,108,101,116,105,109,101,111,117,116,95,100,95,52,48,0);
          let libjsijniprofilerO: Map<any, any> = new Map([[String.fromCharCode(98,95,51,57,95,112,105,99,116,121,112,101,0),223], [String.fromCharCode(118,95,51,95,100,99,97,100,101,99,0),226], [String.fromCharCode(105,116,101,114,97,116,111,114,95,99,95,49,0),696]]);
         gmailu = `${gmailu.length - reduceri}`;
         libjsijniprofilerO = new Map([[`${libjsijniprofilerO.size}`, libjsijniprofilerO.size]]);
      for (let f = 0; f < 3; f++) {
          let tempnodatagifc: Map<any, any> = new Map([[String.fromCharCode(108,95,57,95,112,105,112,101,108,105,110,105,110,103,0),155], [String.fromCharCode(115,95,52,54,95,115,104,97,114,97,98,108,101,0),170]]);
          let becomeN = String.fromCharCode(102,95,50,55,95,98,105,108,97,116,101,114,97,108,0);
          let lang_ = 3;
         gmailu += `${(becomeN == String.fromCharCode(118,0) ? becomeN.length : reduceri)}`;
         tempnodatagifc.set(`${lang_}`, lang_ / 2);
      }
          let fillS = String.fromCharCode(110,111,114,109,97,108,105,122,97,116,105,111,110,95,110,95,54,55,0);
         gmailu += "3";
         fillS = `${fillS.length & fillS.length}`;
       let mailz = 5;
       let over4 = 2;
         gmailu = `${reduceri}`;
      if (4 < (gmailu.length << (Math.min(4, Math.abs(mailz)))) && 3 < (gmailu.length << (Math.min(Math.abs(4), 2)))) {
         gmailu = "1";
      }
      iconarrowrightblackK.push(2);
      materialM += `${parseInt(`${statsh}`) | 2}`;
       let homeiconS: Map<any, any> = new Map([[String.fromCharCode(105,95,55,48,95,99,111,110,116,105,110,117,101,100,0),690], [String.fromCharCode(112,114,101,115,101,116,115,95,55,95,53,49,0),219]]);
       let codeP = true;
          let playercommonK = String.fromCharCode(108,95,56,56,95,115,115,115,101,0);
          let jingdongQ = String.fromCharCode(106,95,54,50,95,113,117,97,110,116,105,116,121,0);
         homeiconS = new Map([[`${homeiconS.size}`, 3]]);
         playercommonK = `${(jingdongQ == String.fromCharCode(108,0) ? jingdongQ.length : playercommonK.length)}`;
          let bnewarchdefaultsL = 0.0;
          let iconbell0 = String.fromCharCode(119,95,57,95,97,105,102,102,0);
         homeiconS.set(iconbell0, 2 * iconbell0.length);
         bnewarchdefaultsL -= parseInt(`${bnewarchdefaultsL}`) - parseInt(`${bnewarchdefaultsL}`);
      for (let p = 0; p < 2; p++) {
         codeP = homeiconS.size == 91 && !codeP;
      }
      let backwhiteo = codeP ? !codeP : codeP;
      do {
         codeP = homeiconS.size > 86;
         if (backwhiteo) {
            break;
         }
      } while (backwhiteo && (!codeP));
         codeP = !codeP;
         homeiconS = new Map([[`${homeiconS.size}`, homeiconS.size & 1]]);
      materialM += `${parseInt(`${playershirtG}`) - 3}`;
      smallorangemanD = 37 < materialM.length;
   for (let k = 0; k < 2; k++) {
       let penaltyshootf: Array<any> = [708, 839, 352];
       let greytickM: Array<any> = [267, 355, 449];
       let p_titleT = String.fromCharCode(100,121,110,97,114,114,97,121,95,112,95,56,56,0);
      for (let e = 0; e < 1; e++) {
          let hongkongN = String.fromCharCode(115,119,105,116,99,104,101,114,95,104,95,49,49,0);
         p_titleT += `${greytickM.length}`;
         hongkongN += `${hongkongN.length % (Math.max(hongkongN.length, 6))}`;
      }
         p_titleT = `${1 % (Math.max(2, penaltyshootf.length))}`;
      for (let h = 0; h < 2; h++) {
         greytickM = [penaltyshootf.length % (Math.max(greytickM.length, 6))];
      }
      if (!p_titleT.endsWith(`${greytickM.length}`)) {
         greytickM.push(penaltyshootf.length - 1);
      }
      if (!penaltyshootf.includes(greytickM.length)) {
         greytickM = [3];
      }
      for (let m = 0; m < 1; m++) {
         p_titleT += `${penaltyshootf.length - p_titleT.length}`;
      }
      if (1 < (greytickM.length % (Math.max(p_titleT.length, 6)))) {
          let libruntimeexecutorz: Map<any, any> = new Map([[String.fromCharCode(114,100,98,120,95,113,95,54,55,0),945], [String.fromCharCode(99,111,101,102,102,105,99,105,101,110,116,115,95,100,95,54,53,0),412], [String.fromCharCode(118,105,98,114,97,116,105,111,110,95,99,95,49,50,0),266]]);
          let kickN = String.fromCharCode(99,111,110,118,101,114,116,111,114,95,102,95,54,0);
          let bgvipsportr = String.fromCharCode(122,95,49,48,95,110,100,111,116,115,0);
          let loadingspinnern = 3.0;
          let configureN = String.fromCharCode(101,104,105,103,104,95,100,95,55,53,0);
         p_titleT = `${2 ^ parseInt(`${loadingspinnern}`)}`;
         libruntimeexecutorz.set(`${bgvipsportr}`, libruntimeexecutorz.size);
         kickN += "1";
         bgvipsportr += `${configureN.length}`;
         loadingspinnern -= 2 - bgvipsportr.length;
         configureN += `${libruntimeexecutorz.size - 2}`;
      }
         greytickM.push(penaltyshootf.length);
       let tramini3 = String.fromCharCode(115,105,122,101,115,95,57,95,52,48,0);
      notificationgrayF += "3";
   }
   let mimoL = 7956536.0 >= playershirtG;
   do {
      playershirtG *= (String.fromCharCode(110,0) == notificationgrayF ? snewsshareM : notificationgrayF.length);
      if (mimoL) {
         break;
      }
   } while (mimoL && ((playershirtG * 3.39) > 5.20 && (playershirtG + 3.39) > 1.91));
      statsh -= parseFloat(`${2 - iconarrowrightblackK.length}`);
       let gcopy_31f: Array<any> = [365, 147];
         gcopy_31f.push(gcopy_31f.length * gcopy_31f.length);
         gcopy_31f = [gcopy_31f.length + 3];
      let middlesoundM = gcopy_31f.length <= 7892132;
      do {
         gcopy_31f = [gcopy_31f.length];
         if (middlesoundM) {
            break;
         }
      } while (middlesoundM && (4 < (gcopy_31f.length << (Math.min(Math.abs(1), 5)))));
      iconarrowrightblackK.push(((smallorangemanD ? 3 : 1) - snewsshareM));
   if (materialM.includes(`${smallorangemanD}`)) {
      smallorangemanD = statsh >= 7.38 && String.fromCharCode(75,0) == notificationgrayF;
   }
      iconarrowrightblackK = [parseInt(`${playershirtG}`) >> (Math.min(4, Math.abs(2)))];
   for (let a = 0; a < 2; a++) {
      logouserh = `${3 << (Math.min(4, materialM.length))}`;
   }
   if ((1.81 * playershirtG) > 4.57 || (materialM.length + 2) > 2) {
      materialM += `${(String.fromCharCode(118,0) == materialM ? notificationgrayF.length : materialM.length)}`;
   }
      playershirtG -= iconarrowrightblackK.length >> (Math.min(materialM.length, 4));
        setReferrerErrMsg(null);
    }

    const onClose = () => {
       let orangedownarrowV: Map<any, any> = new Map([[String.fromCharCode(114,101,115,116,114,105,99,116,105,111,110,115,95,108,95,53,49,0),506], [String.fromCharCode(113,117,97,110,116,120,95,115,95,56,52,0),655], [String.fromCharCode(112,95,50,48,95,97,100,106,117,115,116,101,114,0),178]]);
    let manifestE = 0.0;
    let photoM = 2.0;
    let arrowselectdownA: Array<any> = [627, 977, 824];
    let bottomU = String.fromCharCode(115,95,54,51,95,115,101,97,108,97,110,116,0);
    let cornerv = String.fromCharCode(112,114,101,115,99,97,108,105,110,103,95,48,95,53,56,0);
    let renewa = 1;
    let benefitB: Array<any> = [String.fromCharCode(113,95,53,54,95,118,100,112,97,117,0), String.fromCharCode(97,114,109,118,116,101,95,112,95,54,55,0)];
    let imageactionlive4 = String.fromCharCode(105,95,56,48,95,108,101,100,103,101,114,0);
    let applications = String.fromCharCode(105,95,51,54,95,112,105,112,0);
    let detailsL = 1.0;
    let libloggerk = 3.0;
    let expandO = String.fromCharCode(105,95,51,95,99,97,110,99,101,108,108,101,100,0);
    let middlewareB = String.fromCharCode(111,108,111,114,95,113,95,49,51,0);
   while (renewa <= 1) {
      renewa /= Math.max(renewa % (Math.max(4, cornerv.length)), 4);
      break;
   }
   for (let z = 0; z < 3; z++) {
      orangedownarrowV.set(applications, applications.length);
   }
      arrowselectdownA.push(benefitB.length);
      renewa -= 2 * cornerv.length;
      detailsL /= Math.max((imageactionlive4 == String.fromCharCode(86,0) ? imageactionlive4.length : renewa), 3);
       let release_l2l = String.fromCharCode(100,117,114,103,101,114,107,105,110,103,95,99,95,53,52,0);
      if (4 < release_l2l.length || release_l2l == String.fromCharCode(100,0)) {
         release_l2l = `${release_l2l.length | release_l2l.length}`;
      }
         release_l2l += `${(String.fromCharCode(75,0) == release_l2l ? release_l2l.length : release_l2l.length)}`;
          let chinaA = false;
          let executore = String.fromCharCode(111,95,49,56,95,115,105,103,110,97,108,105,110,103,0);
         release_l2l += `${(String.fromCharCode(67,0) == executore ? executore.length : (chinaA ? 4 : 3))}`;
      arrowselectdownA = [bottomU.length];
      bottomU = `${renewa / (Math.max(cornerv.length, 10))}`;
      benefitB = [benefitB.length];
      libloggerk /= Math.max(1, parseFloat(`${middlewareB.length >> (Math.min(cornerv.length, 1))}`));
       let detail8 = 2.0;
       let statsnomoredataj: Array<any> = [872, 382, 662];
      let liveendmodallogoh = 6723402 >= statsnomoredataj.length;
      do {
          let armva8 = 5.0;
          let libsgcorep = String.fromCharCode(120,95,50,50,95,100,105,115,112,108,97,121,0);
          let moduleR: Map<any, any> = new Map([[String.fromCharCode(114,95,56,54,95,111,112,101,110,105,110,103,0),String.fromCharCode(99,95,54,51,95,97,117,120,0)], [String.fromCharCode(112,114,101,102,102,101,114,101,100,95,120,95,50,55,0),String.fromCharCode(119,95,50,49,95,97,118,102,102,116,0)], [String.fromCharCode(111,118,101,114,115,99,114,111,108,108,105,110,103,95,111,95,51,50,0),String.fromCharCode(116,114,117,110,99,95,110,95,57,55,0)]]);
          let videobufferloadingx = String.fromCharCode(112,95,53,51,95,97,110,116,105,97,108,105,97,115,0);
          let ewarded9: Array<any> = [741, 669, 742];
         statsnomoredataj.push(libsgcorep.length);
         armva8 -= parseFloat(`${1 << (Math.min(4, Math.abs(moduleR.size)))}`);
         libsgcorep = `${videobufferloadingx.length / (Math.max(9, moduleR.size))}`;
         videobufferloadingx += `${2 << (Math.min(3, ewarded9.length))}`;
         ewarded9 = [ewarded9.length];
         if (liveendmodallogoh) {
            break;
         }
      } while ((4 > (3 + statsnomoredataj.length)) && liveendmodallogoh);
         statsnomoredataj = [3];
      expandO = "1";
      detail8 += parseFloat(`${parseInt(`${detail8}`)}`);
   for (let k = 0; k < 2; k++) {
      photoM -= parseFloat(`${cornerv.length}`);
   }

        if (handleClose) handleClose();

       let package_w3 = String.fromCharCode(111,115,109,111,115,95,120,95,55,55,0);
       let buttonI: Array<any> = [17, 257];
         buttonI.push(buttonI.length * package_w3.length);
      for (let v = 0; v < 2; v++) {
          let eyeclosep = 4.0;
          let vignettea: Array<any> = [91, 995];
          let fillj = 1.0;
         package_w3 = `${vignettea.length}`;
         eyeclosep -= parseFloat(`${parseInt(`${eyeclosep}`) ^ 3}`);
         vignettea.push(parseInt(`${fillj}`) << (Math.min(5, Math.abs(parseInt(`${eyeclosep}`)))));
         fillj += 1;
      }
         buttonI.push(2);
      if (package_w3.length == 4) {
         package_w3 += "3";
      }
          let langkeyL = String.fromCharCode(100,109,117,108,95,104,95,55,49,0);
          let bdxadsdke = 3.0;
         buttonI.push(parseInt(`${bdxadsdke}`) ^ 1);
         langkeyL = `${langkeyL.length - 1}`;
         bdxadsdke -= langkeyL.length;
      for (let b = 0; b < 3; b++) {
         buttonI.push(3 | package_w3.length);
      }
      cornerv += `${middlewareB.length}`;
   while (bottomU.length > parseInt(`${libloggerk}`)) {
       let largex: Array<any> = [960, 886];
      if (largex.includes(largex.length)) {
          let banner_ = 0;
          let iconsaveimage7: Array<any> = [456, 220, 220];
          let matchactiveD = 0;
          let switch_nS = 4;
         largex = [matchactiveD ^ 1];
         banner_ %= Math.max(3, banner_ + 1);
         iconsaveimage7 = [banner_];
         matchactiveD /= Math.max(1, banner_);
         switch_nS >>= Math.min(iconsaveimage7.length, 5);
      }
         largex.push(largex.length);
      for (let s = 0; s < 2; s++) {
          let handlerl: Map<any, any> = new Map([[String.fromCharCode(99,95,53,95,104,117,100,0),828], [String.fromCharCode(117,95,50,51,95,104,97,110,100,108,101,0),524]]);
          let projectw = String.fromCharCode(114,95,57,55,95,119,104,105,116,101,0);
          let crownx = true;
          let checkboxN = 3.0;
          let predictionbannerr: Map<any, any> = new Map([[String.fromCharCode(114,101,115,111,108,118,95,57,95,56,56,0),91], [String.fromCharCode(116,111,108,101,114,97,110,99,101,95,102,95,56,51,0),688]]);
         largex.push(predictionbannerr.size);
         handlerl = new Map([[projectw, (projectw.length - (crownx ? 4 : 4))]]);
         crownx = (3 >= ((crownx ? 3 : handlerl.size) | handlerl.size));
         checkboxN *= parseFloat(`${parseInt(`${checkboxN}`) >> (Math.min(projectw.length, 2))}`);
         predictionbannerr.set(`${checkboxN}`, parseInt(`${checkboxN}`) ^ handlerl.size);
      }
      libloggerk += parseFloat(`${1}`);
      break;
   }
   let guideY = imageactionlive4.length >= 6785592;
   do {
       let macauM = 3.0;
      if (macauM <= 2.3) {
         macauM *= parseInt(`${macauM}`) + 3;
      }
         macauM *= parseInt(`${macauM}`) | 3;
      if (2.73 < (macauM * macauM)) {
         macauM += parseInt(`${macauM}`);
      }
      imageactionlive4 = `${orangedownarrowV.size ^ parseInt(`${manifestE}`)}`;
      if (guideY) {
         break;
      }
   } while ((3 >= imageactionlive4.length) && guideY);
      manifestE /= Math.max(parseFloat(`${2}`), 5);
      detailsL -= bottomU.length | cornerv.length;
   if (2 <= (orangedownarrowV.size / 3) && (benefitB.length / 3) <= 3) {
       let zhengpianE = 0.0;
         zhengpianE -= parseFloat(`${3}`);
      while ((4.64 * zhengpianE) <= 2.13 && 4.64 <= (zhengpianE * zhengpianE)) {
         zhengpianE += parseFloat(`${parseInt(`${zhengpianE}`) + 3}`);
         break;
      }
          let floatern: Array<any> = [807, 841];
          let subinS: Array<any> = [331, 559];
         zhengpianE += parseFloat(`${3 & subinS.length}`);
         floatern.push(floatern.length);
         subinS.push(floatern.length);
      benefitB.push(benefitB.length >> (Math.min(applications.length, 2)));
   }
      detailsL -= (String.fromCharCode(108,0) == cornerv ? cornerv.length : parseInt(`${photoM}`));
      manifestE /= Math.max(3, (parseFloat(`${imageactionlive4 == String.fromCharCode(117,0) ? parseInt(`${manifestE}`) : imageactionlive4.length}`)));
   let viewsu = 6434585.0 >= libloggerk;
   do {
      libloggerk /= Math.max(parseFloat(`${2}`), 1);
      if (viewsu) {
         break;
      }
   } while (((bottomU.length >> (Math.min(Math.abs(1), 1))) >= 2) && viewsu);
      arrowselectdownA = [parseInt(`${detailsL}`) >> (Math.min(5, Math.abs(3)))];
   let type_ptS = expandO.length <= 8750251;
   do {
       let phoneshare4 = 0.0;
         phoneshare4 /= Math.max(parseInt(`${phoneshare4}`) & parseInt(`${phoneshare4}`), 4);
      while ((phoneshare4 / (Math.max(2, 3))) <= 4.4) {
          let zhengpianr = true;
          let templateprocessorJ: Array<any> = [89, 104, 48];
          let homeiconq: Array<any> = [337, 563];
         phoneshare4 /= Math.max(templateprocessorJ.length | 1, 2);
         zhengpianr = !zhengpianr;
         templateprocessorJ.push(2 / (Math.max(5, homeiconq.length)));
         homeiconq = [homeiconq.length];
         break;
      }
      let hongkongk = 9663826.0 >= phoneshare4;
      do {
         phoneshare4 /= Math.max(1, 1);
         if (hongkongk) {
            break;
         }
      } while ((3.98 < phoneshare4) && hongkongk);
      expandO += `${parseInt(`${photoM}`)}`;
      if (type_ptS) {
         break;
      }
   } while (type_ptS && (4 > (3 + orangedownarrowV.size) && (orangedownarrowV.size + expandO.length) > 3));

        Keyboard.dismiss();

   for (let d = 0; d < 3; d++) {
      arrowselectdownA = [arrowselectdownA.length - applications.length];
   }
      imageactionlive4 = `${parseInt(`${detailsL}`) >> (Math.min(3, Math.abs(renewa)))}`;
       let pathT: Map<any, any> = new Map([[String.fromCharCode(104,101,120,98,105,110,95,111,95,49,0),543], [String.fromCharCode(107,95,54,56,95,116,97,98,108,101,116,0),683], [String.fromCharCode(115,95,50,95,117,110,101,115,99,97,112,105,110,103,0),995]]);
       let feedbackR = String.fromCharCode(101,120,112,97,110,100,97,98,108,101,95,103,95,50,54,0);
          let roboto0 = 4.0;
          let description_7K = String.fromCharCode(98,117,102,115,112,97,99,101,95,109,95,57,51,0);
         feedbackR += `${parseInt(`${roboto0}`)}`;
         roboto0 /= Math.max(3, (description_7K == String.fromCharCode(48,0) ? description_7K.length : description_7K.length));
       let modald = String.fromCharCode(102,95,55,57,95,101,99,109,117,108,116,0);
       let orangeY = String.fromCharCode(102,108,116,117,105,110,116,95,110,95,56,53,0);
         orangeY += `${orangeY.length >> (Math.min(Math.abs(2), 2))}`;
          let productk = String.fromCharCode(116,95,49,48,48,95,112,108,97,121,101,114,0);
          let neonP: Map<any, any> = new Map([[String.fromCharCode(98,117,102,102,101,114,101,118,101,110,116,95,53,95,52,54,0),String.fromCharCode(118,95,50,52,0)], [String.fromCharCode(105,95,55,53,95,102,108,105,103,104,116,0),String.fromCharCode(112,97,114,101,110,116,104,101,115,105,115,95,101,95,51,56,0)]]);
          let roundF: Map<any, any> = new Map([[String.fromCharCode(112,115,102,105,108,101,95,102,95,50,50,0),true ], [String.fromCharCode(99,97,108,108,95,111,95,51,56,0),false ]]);
         orangeY += "1";
         productk = "1";
         neonP = new Map([[`${neonP.size}`, 3]]);
         roundF.set(productk, 1 & neonP.size);
      while (orangeY.length < 2) {
         modald += `${pathT.size ^ feedbackR.length}`;
         break;
      }
      if ((3 & pathT.size) == 4) {
          let eventsplashZ = 2.0;
          let viewsF: Map<any, any> = new Map([[String.fromCharCode(115,101,116,116,105,110,103,95,103,95,51,57,0),97], [String.fromCharCode(99,95,54,48,95,97,114,114,97,121,115,0),889], [String.fromCharCode(122,95,55,95,114,101,99,101,105,118,101,0),868]]);
         feedbackR = `${feedbackR.length << (Math.min(4, modald.length))}`;
         eventsplashZ /= Math.max(4, parseFloat(`${parseInt(`${eventsplashZ}`) << (Math.min(Math.abs(viewsF.size), 1))}`));
         viewsF.set(`${eventsplashZ}`, 2 - viewsF.size);
      }
      bottomU += `${middlewareB.length}`;
   while ((3 ^ middlewareB.length) > 1) {
      libloggerk -= parseFloat(`${2}`);
      break;
   }
       let baselinet: Array<any> = [927, 544, 763];
       let taiwanz = false;
         taiwanz = baselinet.includes(taiwanz);
      let buttonN = taiwanz ? !taiwanz : taiwanz;
      do {
         taiwanz = (((!taiwanz ? 4 : baselinet.length) - baselinet.length) > 4);
         if (buttonN) {
            break;
         }
      } while ((5 >= baselinet.length) && buttonN);
         taiwanz = (((taiwanz ? 42 : baselinet.length) * baselinet.length) < 42);
          let predictionbannerL = 3.0;
          let langkeyH = String.fromCharCode(118,97,108,95,122,95,53,54,0);
          let smallorangemanT = 5;
         baselinet.push(langkeyH.length + smallorangemanT);
         predictionbannerL -= 1;
         langkeyH = `${1 / (Math.max(3, parseInt(`${predictionbannerL}`)))}`;
      if (taiwanz) {
          let mbbid4 = 5.0;
         taiwanz = 52.69 == mbbid4 || taiwanz;
      }
         baselinet = [baselinet.length & 3];
      photoM /= Math.max(parseFloat(`${3}`), 4);
   if (!bottomU.startsWith(expandO)) {
      bottomU = "1";
   }
      expandO = `${parseInt(`${libloggerk}`) * applications.length}`;
       let whitesmalltickC = String.fromCharCode(99,95,52,49,95,97,110,116,105,97,108,105,97,115,101,100,0);
      for (let i = 0; i < 3; i++) {
         whitesmalltickC = `${whitesmalltickC.length * 3}`;
      }
      while (1 > whitesmalltickC.length) {
          let mappingi = String.fromCharCode(117,110,97,108,105,103,110,101,100,95,100,95,50,56,0);
          let libhermesB = 2.0;
         whitesmalltickC = `${1 >> (Math.min(4, Math.abs(parseInt(`${libhermesB}`))))}`;
         mappingi = "1";
         libhermesB /= Math.max(1, 2);
         break;
      }
         whitesmalltickC = `${whitesmalltickC.length}`;
      imageactionlive4 += `${arrowselectdownA.length}`;
   let questiconC = cornerv == String.fromCharCode(97,52,121,0);
   do {
      cornerv += `${parseInt(`${libloggerk}`)}`;
      if (questiconC) {
         break;
      }
   } while (questiconC && (imageactionlive4.length > 1));
       let placeholder8 = false;
       let iconnotificationnewm: Array<any> = [471, 372, 611];
       let playershirt3: Array<any> = [266, 913];
         playershirt3 = [playershirt3.length >> (Math.min(Math.abs(2), 5))];
       let infoy = String.fromCharCode(112,111,112,117,108,97,116,101,100,95,52,95,51,55,0);
      bottomU += `${(3 ^ (placeholder8 ? 4 : 5))}`;
   if ((orangedownarrowV.size ^ 5) >= 1 || 4 >= (5 ^ arrowselectdownA.length)) {
      arrowselectdownA.push(middlewareB.length >> (Math.min(1, Math.abs(renewa))));
   }
        resetForm();
    }

    const onSubmitForm = async () => {
       let rewindn = String.fromCharCode(113,95,56,57,95,115,117,112,112,114,101,115,115,105,111,110,0);
    let libruntimeexecutorF = true;
    let penaltymatchicon4 = String.fromCharCode(105,110,100,105,99,97,116,105,111,110,95,51,95,51,51,0);
    let cornershootE: Map<any, any> = new Map([[String.fromCharCode(99,111,111,114,100,105,110,97,116,111,114,115,95,112,95,50,50,0),432], [String.fromCharCode(105,95,54,95,99,111,109,112,97,114,105,115,111,110,0),985]]);
    let awayicono = String.fromCharCode(120,95,52,57,95,119,114,105,116,101,99,111,112,121,0);
    let exampleimageX = 4.0;
    let sideM = true;
    let privatechatbg4 = 2.0;
    let tramini2 = String.fromCharCode(103,95,51,55,95,100,105,115,112,97,116,99,104,0);
    let orangeuparrowS = String.fromCharCode(99,95,53,55,0);
    let schedulerG = String.fromCharCode(107,95,52,48,95,100,121,110,108,111,99,107,0);
    let whatsappf: Array<any> = [453, 480, 842];
       let styleI = String.fromCharCode(101,95,52,51,95,99,111,108,108,101,99,116,111,114,0);
       let iconsaveimagea = 1.0;
       let watchnowbgj = String.fromCharCode(100,101,99,111,100,101,95,56,95,53,48,0);
      if (2 == (3 << (Math.min(3, watchnowbgj.length))) && (iconsaveimagea - 5.64) == 1.86) {
         watchnowbgj = `${(watchnowbgj == String.fromCharCode(48,0) ? parseInt(`${iconsaveimagea}`) : watchnowbgj.length)}`;
      }
      if (4.23 <= (iconsaveimagea - 1.97) || 2 <= (5 ^ watchnowbgj.length)) {
          let dropdownV = String.fromCharCode(109,97,116,114,111,115,107,97,95,113,95,49,51,0);
          let shoot9: Map<any, any> = new Map([[String.fromCharCode(115,116,115,99,95,56,95,53,48,0),String.fromCharCode(120,95,49,49,95,109,97,120,98,117,114,115,116,0)], [String.fromCharCode(99,95,49,95,114,101,115,116,114,105,99,116,105,111,110,0),String.fromCharCode(119,95,51,49,95,100,117,112,115,111,114,116,0)]]);
          let ajaxd = String.fromCharCode(112,105,120,109,102,116,115,95,101,95,51,50,0);
          let pathf = 5.0;
          let circlen = 1;
         watchnowbgj += `${watchnowbgj.length}`;
         dropdownV += `${(String.fromCharCode(81,0) == dropdownV ? shoot9.size : dropdownV.length)}`;
         shoot9 = new Map([[`${shoot9.size}`, ajaxd.length]]);
         ajaxd = `${3 >> (Math.min(3, ajaxd.length))}`;
         pathf *= ajaxd.length;
         circlen -= ajaxd.length >> (Math.min(Math.abs(1), 5));
      }
      for (let h = 0; h < 3; h++) {
         iconsaveimagea -= 2;
      }
      let moonF = 5418901 >= styleI.length;
      do {
         styleI += `${2 | watchnowbgj.length}`;
         if (moonF) {
            break;
         }
      } while ((!watchnowbgj.startsWith(`${styleI.length}`)) && moonF);
      for (let q = 0; q < 3; q++) {
          let images3 = 5.0;
          let promotionA: Array<any> = [806, 801];
          let iconpipexpandz = String.fromCharCode(100,95,55,95,109,109,99,111,0);
          let codegenZ = String.fromCharCode(99,95,57,53,95,97,115,115,101,114,116,115,0);
         styleI = "3";
         images3 *= parseFloat(`${promotionA.length}`);
         promotionA = [1 | codegenZ.length];
         iconpipexpandz = `${codegenZ.length | parseInt(`${images3}`)}`;
      }
      let templateprocessorC = 6827461 >= styleI.length;
      do {
          let ajaxo = true;
          let iconviewerf = 0.0;
          let iconplayr = String.fromCharCode(99,111,110,116,101,110,116,105,111,110,95,56,95,55,0);
          let loadingspinnerq = String.fromCharCode(114,101,99,101,110,116,101,114,95,97,95,51,51,0);
          let bdxadsdkK = 1.0;
         styleI += `${watchnowbgj.length}`;
         ajaxo = (bdxadsdkK / (Math.max(iconviewerf, 5))) >= 65.98;
         iconviewerf /= Math.max(parseInt(`${iconviewerf}`) | 2, 3);
         iconplayr = `${loadingspinnerq.length % (Math.max(10, parseInt(`${iconviewerf}`)))}`;
         loadingspinnerq += `${1 ^ iconplayr.length}`;
         bdxadsdkK += parseFloat(`${parseInt(`${bdxadsdkK}`)}`);
         if (templateprocessorC) {
            break;
         }
      } while (templateprocessorC && (watchnowbgj != String.fromCharCode(54,0)));
       let crownP = 2.0;
         watchnowbgj += `${1 / (Math.max(7, parseInt(`${iconsaveimagea}`)))}`;
       let footballfieldZ: Map<any, any> = new Map([[String.fromCharCode(111,95,52,56,95,116,108,101,110,0),String.fromCharCode(115,95,56,49,95,99,104,97,114,97,99,116,101,114,105,115,116,105,99,115,0)], [String.fromCharCode(110,117,109,101,114,105,102,121,95,113,95,49,48,48,0),String.fromCharCode(109,105,112,115,102,112,117,95,102,95,49,0)], [String.fromCharCode(97,95,52,52,95,97,108,101,114,116,0),String.fromCharCode(101,95,57,53,95,122,101,114,111,118,0)]]);
      exampleimageX /= Math.max(1, 2 % (Math.max(6, cornershootE.size)));
   while (1 < rewindn.length) {
       let loadingspinner0 = false;
       let streamingE: Array<any> = [String.fromCharCode(99,111,110,116,111,108,108,101,114,95,100,95,55,51,0), String.fromCharCode(110,95,52,51,95,115,99,101,110,101,99,117,116,0)];
       let directh: Map<any, any> = new Map([[String.fromCharCode(119,95,56,52,95,115,112,105,110,110,105,110,103,0),String.fromCharCode(102,97,108,108,98,97,99,107,95,97,95,49,53,0)], [String.fromCharCode(107,95,55,49,95,115,116,114,101,97,109,102,111,117,114,99,99,0),String.fromCharCode(97,95,53,55,95,110,105,100,111,98,106,0)]]);
       let componentss = String.fromCharCode(119,95,55,95,117,116,105,108,105,116,121,0);
         loadingspinner0 = 32 > directh.size && componentss.length > 32;
       let hooksA = 0.0;
       let analytict = 3.0;
         directh.set(componentss, streamingE.length);
         hooksA += parseFloat(`${2}`);
      for (let x = 0; x < 1; x++) {
          let downloadings = 2.0;
          let editi = String.fromCharCode(99,111,114,114,101,115,112,111,110,100,101,110,116,115,95,99,95,56,57,0);
          let elementsA = String.fromCharCode(98,95,54,55,95,114,101,109,111,118,101,114,0);
          let privilegew = false;
         directh = new Map([[`${privilegew}`, (editi == String.fromCharCode(107,0) ? (privilegew ? 4 : 1) : editi.length)]]);
         downloadings *= parseFloat(`${elementsA.length}`);
         elementsA = `${(elementsA == String.fromCharCode(71,0) ? parseInt(`${downloadings}`) : elementsA.length)}`;
      }
         componentss = "2";
          let orangeclocks = 0.0;
          let drag5 = String.fromCharCode(105,95,57,55,95,99,111,109,109,97,110,100,115,0);
         directh = new Map([[`${directh.size}`, directh.size]]);
         orangeclocks /= Math.max(parseInt(`${orangeclocks}`) - drag5.length, 5);
         drag5 += "2";
         loadingspinner0 = parseInt(`${hooksA}`) < streamingE.length;
      penaltymatchicon4 += `${streamingE.length}`;
      break;
   }

        if (referrerErrMsg !== null) return;

   let security8 = String.fromCharCode(53,102,56,116,99,114,101,0) == rewindn;
   do {
       let defaultfootballbg2 = 5.0;
      for (let e = 0; e < 2; e++) {
         defaultfootballbg2 /= Math.max(2 % (Math.max(parseInt(`${defaultfootballbg2}`), 10)), 5);
      }
      let register_7O = defaultfootballbg2 >= 7705052.0;
      do {
         defaultfootballbg2 /= Math.max(parseInt(`${defaultfootballbg2}`) - parseInt(`${defaultfootballbg2}`), 5);
         if (register_7O) {
            break;
         }
      } while ((1.54 >= (defaultfootballbg2 / (Math.max(10, defaultfootballbg2))) && 4.86 >= (1.54 * defaultfootballbg2)) && register_7O);
         defaultfootballbg2 += parseInt(`${defaultfootballbg2}`);
      rewindn = `${rewindn.length}`;
      if (security8) {
         break;
      }
   } while (security8 && (!sideM));
   if (sideM || !libruntimeexecutorF) {
       let otherI = 3;
       let confirmationu = 3;
         otherI %= Math.max(confirmationu & 1, 3);
         otherI >>= Math.min(Math.abs(confirmationu), 3);
       let const_uO = 0.0;
       let modeV = 2.0;
      for (let f = 0; f < 1; f++) {
          let loginsuccessf = String.fromCharCode(106,95,49,51,95,115,117,98,115,116,105,116,117,116,101,0);
          let interstitialu = String.fromCharCode(105,95,56,95,115,105,103,110,97,116,117,114,101,0);
          let iconplayE = String.fromCharCode(98,108,97,107,101,115,95,100,95,57,48,0);
          let bufferQ = 1;
         const_uO += (loginsuccessf == String.fromCharCode(112,0) ? iconplayE.length : loginsuccessf.length);
         interstitialu += `${bufferQ}`;
         iconplayE += `${interstitialu.length - bufferQ}`;
      }
          let downarrowk = false;
          let leftS = 0;
          let ksadh = 0.0;
         const_uO /= Math.max(2, 2 % (Math.max(9, otherI)));
         downarrowk = ksadh >= 77.19;
         leftS |= ((downarrowk ? 4 : 4) >> (Math.min(Math.abs(parseInt(`${ksadh}`)), 2)));
          let libreanimatedJ = 0.0;
         modeV += 2 ^ parseInt(`${modeV}`);
         libreanimatedJ += 3;
      libruntimeexecutorF = null == cornershootE.get(`${exampleimageX}`);
   }

        if (isSubmitting) return;

       let kickB: Array<any> = [450, 947];
       let armvaQ: Array<any> = [18, 907, 395];
      while (kickB.length < 5) {
         armvaQ = [armvaQ.length];
         break;
      }
         kickB = [1];
          let penaltyshootnogoalJ: Array<any> = [95, 65, 64];
          let connection3 = 2;
          let overL: Array<any> = [602, 935];
         armvaQ = [connection3 >> (Math.min(3, Math.abs(2)))];
         penaltyshootnogoalJ.push(penaltyshootnogoalJ.length - 2);
         connection3 |= penaltyshootnogoalJ.length;
         overL.push(1 * overL.length);
          let untickY = 1.0;
         armvaQ.push(3 - armvaQ.length);
         untickY /= Math.max(parseFloat(`${parseInt(`${untickY}`) | parseInt(`${untickY}`)}`), 3);
         armvaQ.push(kickB.length);
      let libsgcore9 = armvaQ.length <= 8766348;
      do {
         armvaQ.push(1);
         if (libsgcore9) {
            break;
         }
      } while (libsgcore9 && ((armvaQ.length | kickB.length) == 4));
      exampleimageX -= (awayicono.length | (sideM ? 5 : 2));
   for (let u = 0; u < 3; u++) {
      exampleimageX -= 3 * orangeuparrowS.length;
   }
        setSubmitting(true);

      cornershootE = new Map([[penaltymatchicon4, 3 >> (Math.min(3, penaltymatchicon4.length))]]);
   let android9 = schedulerG.length >= 5240847;
   do {
       let streamingJ: Map<any, any> = new Map([[String.fromCharCode(115,121,109,98,111,108,105,99,97,116,105,111,110,95,120,95,52,54,0),false ], [String.fromCharCode(114,101,99,116,97,110,103,108,101,115,95,105,95,52,53,0),true ], [String.fromCharCode(103,95,54,50,95,104,97,110,100,108,101,115,0),false ]]);
         streamingJ = new Map([[`${streamingJ.size}`, streamingJ.size]]);
      while (3 > (streamingJ.size ^ 5)) {
         streamingJ = new Map([[`${streamingJ.size}`, streamingJ.size]]);
         break;
      }
      let favoriteX = 8902745 >= streamingJ.size;
      do {
          let whistleoranget: Map<any, any> = new Map([[String.fromCharCode(115,112,108,97,115,104,95,105,95,52,55,0),String.fromCharCode(114,101,99,101,105,118,101,95,119,95,53,49,0)], [String.fromCharCode(97,95,54,55,95,101,97,114,108,121,0),String.fromCharCode(117,110,112,97,100,100,101,100,95,52,95,53,55,0)], [String.fromCharCode(99,95,49,56,95,112,114,101,114,101,108,101,97,115,101,0),String.fromCharCode(99,95,50,51,95,109,112,101,103,119,97,118,101,102,111,114,109,97,116,101,120,0)]]);
          let xvodq = String.fromCharCode(111,95,52,95,115,121,110,99,104,114,111,110,105,122,101,0);
          let submitU = String.fromCharCode(115,95,51,95,115,104,101,108,108,0);
         streamingJ = new Map([[xvodq, submitU.length]]);
         whistleoranget = new Map([[`${whistleoranget.size}`, whistleoranget.size - 1]]);
         xvodq = `${1 + whistleoranget.size}`;
         if (favoriteX) {
            break;
         }
      } while (favoriteX && (1 >= (streamingJ.size * streamingJ.size)));
      schedulerG += `${parseInt(`${privatechatbg4}`) << (Math.min(Math.abs(3), 2))}`;
      if (android9) {
         break;
      }
   } while (android9 && ((4 % (Math.max(2, schedulerG.length))) >= 5 && 2.43 >= (privatechatbg4 * schedulerG.length)));

        try {

      penaltymatchicon4 = `${awayicono.length}`;
   let emojiheartv = sideM ? !sideM : sideM;
   do {
      sideM = penaltymatchicon4.length >= 81;
      if (emojiheartv) {
         break;
      }
   } while (emojiheartv && (privatechatbg4 <= 3.66));
            await wawaEvent.updateUsername({
                username: userState.user?.userName ?? '',
                referralCode: referrer,
            });
        } catch (err: any) {
            if (
                err.errors &&
                err.errors.referral_code
            ) {

   if (4 >= schedulerG.length) {
       let langV = String.fromCharCode(113,95,53,54,95,106,111,98,113,0);
      let reducer2 = langV == String.fromCharCode(113,108,99,113,117,119,55,0);
      do {
          let modulew: Array<any> = [673, 78, 488];
          let footballfieldd: Array<any> = [895, 79];
          let notificationfillempty3 = false;
         langV += `${langV.length & 3}`;
         modulew = [footballfieldd.length | 2];
         footballfieldd.push(3);
         notificationfillempty3 = modulew.includes(footballfieldd[0]);
         if (reducer2) {
            break;
         }
      } while (reducer2 && (langV != String.fromCharCode(80,0)));
       let adulta = String.fromCharCode(103,95,49,50,95,116,114,101,101,116,111,107,0);
       let volumeU = String.fromCharCode(104,95,50,57,95,97,112,112,101,97,114,105,110,103,0);
      for (let g = 0; g < 3; g++) {
          let reactnativeultimatelistviewj = String.fromCharCode(114,97,116,101,99,111,110,116,114,111,108,95,98,95,57,51,0);
          let paginationo = 1.0;
          let routerE = String.fromCharCode(108,95,52,54,95,102,105,110,97,108,105,122,101,114,0);
          let rncoreM = 0.0;
          let iconmoreH = String.fromCharCode(107,101,121,119,111,114,100,95,97,95,54,57,0);
         adulta += `${(String.fromCharCode(72,0) == reactnativeultimatelistviewj ? parseInt(`${paginationo}`) : reactnativeultimatelistviewj.length)}`;
         paginationo *= 2;
         routerE += "2";
         rncoreM *= parseInt(`${rncoreM}`) % 1;
         iconmoreH += `${2 * iconmoreH.length}`;
      }
      tramini2 = "3";
   }
   if (!libruntimeexecutorF) {
       let awayplayer0 = String.fromCharCode(102,111,110,116,95,102,95,56,54,0);
       let libavcodecz = 1.0;
       let promotion2 = String.fromCharCode(115,95,56,56,95,114,101,97,108,108,111,99,112,0);
          let langkeyV = 5;
         libavcodecz /= Math.max(1, parseFloat(`${langkeyV}`));
         promotion2 = `${awayplayer0.length}`;
      while (!awayplayer0.endsWith(`${libavcodecz}`)) {
         awayplayer0 += `${parseInt(`${libavcodecz}`) / 1}`;
         break;
      }
      if (4.4 <= (4.69 * libavcodecz)) {
         awayplayer0 += "3";
      }
      for (let o = 0; o < 1; o++) {
          let minivodT = 2;
          let pressureh = 5;
          let reactnavigationc = String.fromCharCode(113,95,54,50,95,119,104,105,116,101,98,108,97,99,107,108,105,115,116,115,0);
         awayplayer0 = `${2 * promotion2.length}`;
         minivodT ^= pressureh;
         pressureh ^= minivodT;
         reactnavigationc += `${minivodT / (Math.max(2, pressureh))}`;
      }
      if ((awayplayer0.length & 2) == 2) {
         libavcodecz /= Math.max(3, (parseFloat(`${promotion2 == String.fromCharCode(57,0) ? parseInt(`${libavcodecz}`) : promotion2.length}`)));
      }
          let episodesv = String.fromCharCode(98,97,115,101,110,97,109,101,95,54,95,55,50,0);
         awayplayer0 = "3";
         episodesv += `${episodesv.length}`;
      let homeplayerd = 6907492.0 >= libavcodecz;
      do {
          let stepJ = 4.0;
          let gestureh = 1.0;
          let nbatrophyU = false;
          let iconcalendarr = true;
          let runtimeschedulerq = 4.0;
         libavcodecz -= (parseFloat(`${(nbatrophyU ? 1 : 4) % 1}`));
         stepJ += parseFloat(`${parseInt(`${runtimeschedulerq}`)}`);
         gestureh += parseFloat(`${parseInt(`${stepJ}`)}`);
         nbatrophyU = iconcalendarr;
         if (homeplayerd) {
            break;
         }
      } while ((promotion2.startsWith(`${libavcodecz}`)) && homeplayerd);
         promotion2 = `${awayplayer0.length}`;
      schedulerG = `${schedulerG.length}`;
   }
                setReferrerErrMsg(err.errors.referral_code);
            }

            setSubmitting(false);

   if (!libruntimeexecutorF || 1 == rewindn.length) {
       let phoneshares: Map<any, any> = new Map([[String.fromCharCode(112,95,52,53,95,100,105,115,99,111,118,101,114,121,0),String.fromCharCode(105,95,48,95,117,108,116,105,0)], [String.fromCharCode(115,109,105,108,105,101,115,95,100,95,50,52,0),String.fromCharCode(119,95,52,56,95,100,101,109,111,100,117,108,97,116,101,0)], [String.fromCharCode(102,95,53,54,0),String.fromCharCode(121,97,108,101,95,119,95,57,0)]]);
          let teamdetailsbgm = String.fromCharCode(116,114,110,115,95,117,95,57,57,0);
         phoneshares = new Map([[`${phoneshares.size}`, teamdetailsbgm.length]]);
          let actionsS = 3;
         phoneshares = new Map([[`${phoneshares.size}`, phoneshares.size >> (Math.min(5, Math.abs(actionsS)))]]);
         phoneshares = new Map([[`${phoneshares.size}`, phoneshares.size]]);
      libruntimeexecutorF = 17.26 < privatechatbg4;
   }
      penaltymatchicon4 = `${cornershootE.size >> (Math.min(penaltymatchicon4.length, 3))}`;
            return;

   for (let x = 0; x < 3; x++) {
      cornershootE = new Map([[`${cornershootE.size}`, penaltymatchicon4.length % (Math.max(3, 9))]]);
   }
   while ((3.7 * privatechatbg4) < 3.80 && 3 < (cornershootE.size + 1)) {
      privatechatbg4 *= parseInt(`${exampleimageX}`);
      break;
   }
        }

        const result = await wawaEvent.getUserDetails();

   if (tramini2.length <= 1) {
       let iconpointscoreC = 0.0;
       let lang_ = true;
         iconpointscoreC *= parseFloat(`${parseInt(`${iconpointscoreC}`) - 3}`);
         lang_ = iconpointscoreC == 52.20;
      if (1.40 <= iconpointscoreC && (1.40 + iconpointscoreC) <= 1.34) {
         iconpointscoreC /= Math.max((parseFloat(`${(lang_ ? 5 : 3) + parseInt(`${iconpointscoreC}`)}`)), 5);
      }
      while (5.64 >= (iconpointscoreC / (Math.max(5.89, 8)))) {
         iconpointscoreC *= parseFloat(`${parseInt(`${iconpointscoreC}`) - 1}`);
         break;
      }
      let foregroundx = iconpointscoreC <= 9630507.0;
      do {
          let submitA = false;
          let frame_4v = 4.0;
          let becomec = true;
         iconpointscoreC /= Math.max(parseFloat(`${3 ^ parseInt(`${iconpointscoreC}`)}`), 3);
         submitA = !submitA;
         frame_4v += (parseInt(`${frame_4v}`) & (becomec ? 4 : 3));
         becomec = !submitA;
         if (foregroundx) {
            break;
         }
      } while (foregroundx && (5.41 >= (1.21 - iconpointscoreC) || !lang_));
         lang_ = !lang_;
      tramini2 += "1";
   }
      tramini2 = `${((libruntimeexecutorF ? 4 : 2) * penaltymatchicon4.length)}`;
        if (result == null) {

   while (3 > orangeuparrowS.length) {
      orangeuparrowS = `${parseInt(`${privatechatbg4}`) ^ 1}`;
      break;
   }
   for (let g = 0; g < 2; g++) {
      rewindn = `${(1 ^ (sideM ? 4 : 1))}`;
   }
            return;
        }

        await dispatch(updateUserAuth(result));

       let libjsip = String.fromCharCode(99,111,109,112,108,101,116,101,115,95,117,95,52,49,0);
       let watchL = 0;
       let sendd = 3.0;
         watchL <<= Math.min(Math.abs(libjsip.length - 3), 1);
       let langf = false;
      while (1 > libjsip.length) {
         sendd *= 1 - watchL;
         break;
      }
         sendd += 3 * libjsip.length;
          let greytickE = String.fromCharCode(120,95,51,95,110,101,119,108,121,0);
          let accepted2 = String.fromCharCode(108,95,54,57,95,97,98,115,111,108,117,116,101,0);
         langf = accepted2.startsWith(`${watchL}`);
         greytickE += "1";
         accepted2 = "1";
          let libhermes6 = String.fromCharCode(119,95,56,48,0);
          let tooltipsH = String.fromCharCode(103,101,110,101,114,97,116,111,114,115,95,57,95,56,57,0);
         libjsip = `${libhermes6.length}`;
         libhermes6 = `${3 & tooltipsH.length}`;
         tooltipsH += `${2 ^ tooltipsH.length}`;
       let package_neU: Array<any> = [274, 363, 972];
      for (let u = 0; u < 3; u++) {
         watchL >>= Math.min(1, Math.abs(parseInt(`${sendd}`) | 1));
      }
      for (let x = 0; x < 1; x++) {
          let tempnodatagifY = String.fromCharCode(99,95,54,95,112,97,110,101,108,0);
          let foundp: Array<any> = [787, 952];
          let pingq = String.fromCharCode(116,95,56,56,95,119,116,118,102,105,108,101,0);
          let submito = 0.0;
         libjsip += `${parseInt(`${sendd}`) / 1}`;
         tempnodatagifY += `${(tempnodatagifY == String.fromCharCode(66,0) ? tempnodatagifY.length : pingq.length)}`;
         foundp = [tempnodatagifY.length | foundp.length];
         pingq += `${3 - parseInt(`${submito}`)}`;
         submito *= parseFloat(`${foundp.length}`);
      }
      tramini2 += `${awayicono.length}`;
      exampleimageX += parseInt(`${exampleimageX}`) ^ awayicono.length;
        dispatch(changeScreenAction("修改成功"));

   while (schedulerG.length >= 5 || penaltymatchicon4 != String.fromCharCode(83,0)) {
      penaltymatchicon4 = `${orangeuparrowS.length | 2}`;
      break;
   }
       let libavutilD = 0.0;
       let acceptedD = String.fromCharCode(110,95,57,95,97,114,99,104,105,118,101,0);
       let statisticsactivew = String.fromCharCode(116,105,109,101,112,101,114,102,114,97,109,101,95,111,95,55,56,0);
      let sharede = 9252428 <= statisticsactivew.length;
      do {
         statisticsactivew += `${acceptedD.length}`;
         if (sharede) {
            break;
         }
      } while (sharede && (!acceptedD.startsWith(`${statisticsactivew.length}`)));
       let shirtt: Map<any, any> = new Map([[String.fromCharCode(109,95,49,53,95,97,118,102,102,116,0),true ], [String.fromCharCode(101,95,57,49,95,109,97,112,115,105,122,101,0),true ], [String.fromCharCode(99,95,51,54,95,109,97,110,100,97,116,111,114,121,0),false ]]);
       let defaultplayerimgJ: Map<any, any> = new Map([[String.fromCharCode(115,117,98,115,99,114,105,98,97,98,108,101,115,95,113,95,53,54,0),String.fromCharCode(97,95,53,52,95,100,101,99,111,100,97,98,108,101,0)], [String.fromCharCode(98,95,53,95,99,100,99,105,0),String.fromCharCode(110,95,50,48,95,105,112,104,111,110,101,0)], [String.fromCharCode(110,95,52,55,95,111,110,108,121,0),String.fromCharCode(114,111,119,107,101,121,95,99,95,55,52,0)]]);
         statisticsactivew += `${3 + parseInt(`${libavutilD}`)}`;
         libavutilD += parseFloat(`${acceptedD.length + statisticsactivew.length}`);
      if (acceptedD.startsWith(`${shirtt.size}`)) {
         shirtt = new Map([[acceptedD, statisticsactivew.length & acceptedD.length]]);
      }
      if ((5 / (Math.max(9, statisticsactivew.length))) <= 1) {
          let libmapbufferjnix: Array<any> = [741, 787, 349];
          let basketballplayerplaceholderl: Map<any, any> = new Map([[String.fromCharCode(115,101,114,105,97,108,105,122,105,110,103,95,50,95,57,50,0),String.fromCharCode(100,117,112,115,111,114,116,95,101,95,53,48,0)], [String.fromCharCode(108,111,103,102,117,110,99,95,117,95,56,54,0),String.fromCharCode(111,95,57,57,95,105,110,116,114,105,110,115,105,99,0)]]);
          let bggradientE = 5.0;
          let release_pK = false;
          let castingI: Map<any, any> = new Map([[String.fromCharCode(111,112,117,115,95,50,95,54,53,0),String.fromCharCode(112,95,49,57,95,118,105,115,105,116,0)], [String.fromCharCode(102,108,97,115,104,105,110,103,95,121,95,57,0),String.fromCharCode(111,95,51,55,95,115,101,116,105,118,0)], [String.fromCharCode(121,95,49,48,95,105,110,116,101,114,108,97,99,101,0),String.fromCharCode(101,95,54,54,95,111,110,103,111,105,110,103,0)]]);
         shirtt.set(`${castingI.size}`, basketballplayerplaceholderl.size);
         libmapbufferjnix = [3];
         basketballplayerplaceholderl.set(`${release_pK}`, (parseInt(`${bggradientE}`) | (release_pK ? 5 : 2)));
         bggradientE -= libmapbufferjnix.length >> (Math.min(Math.abs(1), 1));
         castingI = new Map([[`${bggradientE}`, ((release_pK ? 4 : 2) ^ parseInt(`${bggradientE}`))]]);
      }
      let modec = defaultplayerimgJ.size <= 8647483;
      do {
         defaultplayerimgJ.set(acceptedD, 1);
         if (modec) {
            break;
         }
      } while ((defaultplayerimgJ.get(`${shirtt.size}`) == null) && modec);
         defaultplayerimgJ = new Map([[`${shirtt.size}`, shirtt.size]]);
      while ((4 * defaultplayerimgJ.size) > 3 || 3 > (4 * acceptedD.length)) {
         acceptedD += `${(acceptedD == String.fromCharCode(108,0) ? acceptedD.length : statisticsactivew.length)}`;
         break;
      }
      whatsappf = [cornershootE.size];

        Keyboard.dismiss();

       let indicatorG = String.fromCharCode(115,104,101,101,116,95,109,95,55,0);
       let eventsplashe = 0.0;
       let strings3: Array<any> = [String.fromCharCode(119,105,112,101,95,114,95,49,49,0), String.fromCharCode(104,95,57,57,95,109,107,118,112,97,114,115,101,114,0), String.fromCharCode(97,109,114,110,98,100,97,116,97,95,118,95,52,53,0)];
      if (indicatorG.endsWith(`${eventsplashe}`)) {
         indicatorG += "3";
      }
       let foreground4 = String.fromCharCode(108,97,116,101,110,99,121,95,54,95,51,48,0);
         foreground4 = `${indicatorG.length}`;
         indicatorG = `${2 + strings3.length}`;
       let sheetv = 0.0;
          let bodan8 = String.fromCharCode(98,95,48,95,99,104,101,99,107,115,117,109,109,101,100,0);
          let listH = String.fromCharCode(103,95,51,53,95,111,99,107,105,110,103,0);
          let signinupR = 0.0;
         eventsplashe /= Math.max(3, parseFloat(`${parseInt(`${signinupR}`)}`));
         bodan8 = "3";
         listH = `${bodan8.length / (Math.max(listH.length, 6))}`;
         signinupR -= parseFloat(`${bodan8.length}`);
         indicatorG = `${foreground4.length / (Math.max(3, 10))}`;
      if (eventsplashe < parseFloat(`${foreground4.length}`)) {
         foreground4 = `${parseInt(`${eventsplashe}`)}`;
      }
      if (indicatorG.length == foreground4.length) {
          let forwardh = false;
          let incidenth = 5;
          let clubp = String.fromCharCode(97,118,97,108,97,110,99,104,101,95,106,95,52,52,0);
          let iconarrowrightq = String.fromCharCode(108,95,54,52,95,101,120,116,114,97,100,97,116,97,0);
          let activeL = 4.0;
         indicatorG = `${strings3.length >> (Math.min(Math.abs(3), 2))}`;
         forwardh = iconarrowrightq.endsWith(`${incidenth}`);
         incidenth >>= Math.min(2, Math.abs((incidenth ^ (forwardh ? 4 : 1))));
         clubp += `${incidenth - 2}`;
         iconarrowrightq = `${parseInt(`${activeL}`) + 2}`;
         activeL += parseFloat(`${parseInt(`${activeL}`) & 1}`);
      }
      sideM = orangeuparrowS.length <= 52;
       let loadingQ = String.fromCharCode(114,95,51,54,95,112,111,111,108,115,0);
       let strd = true;
       let iconbell6 = 0.0;
         strd = loadingQ.length > parseInt(`${iconbell6}`);
      while (!strd) {
         iconbell6 /= Math.max(4, 2 * parseInt(`${iconbell6}`));
         break;
      }
      while ((iconbell6 / 1.99) == 2.100 || 1.99 == iconbell6) {
         iconbell6 *= 1 ^ parseInt(`${iconbell6}`);
         break;
      }
         strd = !strd;
          let short_79k = String.fromCharCode(112,108,117,103,105,110,95,99,95,57,54,0);
          let iconeyeC: Map<any, any> = new Map([[String.fromCharCode(112,111,115,105,116,105,118,101,95,53,95,53,50,0),String.fromCharCode(121,95,51,52,0)], [String.fromCharCode(109,101,97,115,117,114,101,95,49,95,51,54,0),String.fromCharCode(105,95,52,57,95,116,121,112,101,110,97,109,101,0)]]);
         strd = short_79k == String.fromCharCode(121,0);
         short_79k += `${2 / (Math.max(8, iconeyeC.size))}`;
         iconeyeC.set(`${iconeyeC.size}`, iconeyeC.size);
      while ((iconbell6 - 4.44) == 5.20) {
         iconbell6 *= 2 + parseInt(`${iconbell6}`);
         break;
      }
          let agreementD: Array<any> = [158, 624, 709];
         loadingQ = `${(agreementD.length >> (Math.min(4, Math.abs((strd ? 2 : 4)))))}`;
          let suggestionx = String.fromCharCode(114,101,115,105,122,105,110,103,95,117,95,54,51,0);
          let reddownarrowX = 4.0;
          let nbatrophyE = String.fromCharCode(109,107,100,105,114,95,113,95,56,50,0);
         strd = parseInt(`${iconbell6}`) >= loadingQ.length;
         suggestionx = `${suggestionx.length}`;
         reddownarrowX *= parseFloat(`${2}`);
         nbatrophyE = `${(suggestionx == String.fromCharCode(72,0) ? nbatrophyE.length : suggestionx.length)}`;
         strd = (parseInt(`${iconbell6}`) / (Math.max(10, loadingQ.length))) <= 12;
      awayicono += `${tramini2.length / (Math.max(2, 4))}`;
        navigation.navigate("Home", {
            screen: "Profile",
        });

       let anytimeu = 0;
       let shootyesgoalm = 0;
         shootyesgoalm |= 3 << (Math.min(2, Math.abs(shootyesgoalm)));
          let libcrashsdkL = String.fromCharCode(97,95,49,56,95,112,108,117,114,97,108,105,122,101,100,0);
          let lessp = String.fromCharCode(118,105,101,119,101,114,115,95,102,95,50,55,0);
         shootyesgoalm <<= Math.min(Math.abs(lessp.length + libcrashsdkL.length), 4);
      orangeuparrowS = `${whatsappf.length >> (Math.min(3, Math.abs(cornershootE.size)))}`;
      anytimeu += anytimeu / (Math.max(3, anytimeu));
   for (let b = 0; b < 3; b++) {
       let appleL = String.fromCharCode(106,115,116,114,105,110,103,95,117,95,53,48,0);
       let shootnogoalA = String.fromCharCode(120,95,49,55,95,97,115,104,105,110,103,0);
       let sentryU: Array<any> = [453, 558];
      while (appleL != shootnogoalA) {
         shootnogoalA = `${appleL.length - 1}`;
         break;
      }
      while ((shootnogoalA.length / 4) >= 4 && 3 >= (shootnogoalA.length / 4)) {
          let sportsH: Map<any, any> = new Map([[String.fromCharCode(112,95,54,51,95,99,117,98,101,100,0),568], [String.fromCharCode(98,108,111,99,107,101,114,95,100,95,57,54,0),434]]);
          let librrcz = 5.0;
         sentryU.push(sportsH.size);
         sportsH.set(`${librrcz}`, parseInt(`${librrcz}`) >> (Math.min(Math.abs(parseInt(`${librrcz}`)), 3)));
         break;
      }
          let privacyo: Map<any, any> = new Map([[String.fromCharCode(105,95,55,49,95,99,111,109,112,105,108,101,111,112,116,105,111,110,117,115,101,100,0),String.fromCharCode(122,95,51,54,95,112,97,114,97,0)], [String.fromCharCode(101,95,52,54,95,101,120,112,108,105,99,105,116,0),String.fromCharCode(112,95,49,48,95,97,100,100,105,0)], [String.fromCharCode(116,119,105,100,100,108,101,95,49,95,50,49,0),String.fromCharCode(110,95,54,57,95,108,111,111,107,117,112,0)]]);
          let save0 = true;
          let defaultfootballbgc = 5.0;
         appleL += `${privacyo.size << (Math.min(Math.abs(3), 5))}`;
         privacyo = new Map([[`${defaultfootballbgc}`, parseInt(`${defaultfootballbgc}`) % 3]]);
         save0 = defaultfootballbgc < 97.4;
      if (2 <= (sentryU.length % 1) && (sentryU.length % (Math.max(1, 2))) <= 5) {
         shootnogoalA += `${appleL.length >> (Math.min(5, sentryU.length))}`;
      }
      while (2 > (appleL.length << (Math.min(Math.abs(2), 2)))) {
          let reducerc = String.fromCharCode(104,95,50,0);
          let arrowz = true;
         appleL = `${3 ^ appleL.length}`;
         reducerc += "3";
         arrowz = !arrowz;
         break;
      }
      let reactnavigationa = shootnogoalA == String.fromCharCode(119,119,100,103,114,102,98,0);
      do {
         shootnogoalA = "2";
         if (reactnavigationa) {
            break;
         }
      } while ((shootnogoalA.startsWith(`${sentryU.length}`)) && reactnavigationa);
      let giflivestreaming5 = 6950848 <= shootnogoalA.length;
      do {
         shootnogoalA = `${(String.fromCharCode(67,0) == appleL ? shootnogoalA.length : appleL.length)}`;
         if (giflivestreaming5) {
            break;
         }
      } while (giflivestreaming5 && (sentryU.length > 1));
      while (4 == appleL.length) {
         shootnogoalA = `${(String.fromCharCode(51,0) == appleL ? appleL.length : shootnogoalA.length)}`;
         break;
      }
          let gesturesV = 0.0;
         sentryU = [parseInt(`${gesturesV}`)];
      awayicono += `${(3 << (Math.min(1, Math.abs((sideM ? 4 : 4)))))}`;
   }

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
                value={referrer}
                onChangeText={onReferralChange}
                placeholder="补填邀请码 (只能填写一次)"
                showErrorStyle={referrerErrMsg !== null}
                maxLength={18}
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
                    }}
                >
                    {referrerErrMsg !== null && (
                        <>
                            <Image
                                style={{
                                    height: 22,
                                    width: 22,
                                    marginRight: 5,
                                    position: "relative",
                                    top: 1,
                                }}
                                source={require("@static/images/invite/volumeOrangeclock.png")}
                            />

                            <Text style={styles.danger}>{referrerErrMsg}</Text>
                        </>
                    )}
                </View>
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