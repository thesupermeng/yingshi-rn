import { useState } from "react";
import { Image, Keyboard, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CBottomSheet, CTextInput } from "../atoms";
import { useNavigation, useTheme } from "@react-navigation/native";
import { useSelector } from "@hooks/tt_spec_download";
import { useDispatch } from "react-redux";
import { changeScreenAction } from "@redux/actions/tt_copy_heji";
import { updateUserAuth } from "@redux/actions/tt_topon";
import { ttTramini } from "@api";
import { ttGoal } from "@redux/reducers/tt_selected";


interface ttSmall {
    isVisible?: boolean;
    handleClose?: () => any;
    onSubmitSuccess?: (referrer: string) => void,
}

export const ChangeReferrerModal = ({
    isVisible = false,
    handleClose,
    onSubmitSuccess,
}: ttSmall) => {
    const { textVariants } = useTheme();

    const dispatch = useDispatch();
    const navigation = useNavigation();
    const userState = useSelector<ttGoal>('userReducer');

    const [referrer, setReferrer] = useState('');
    const [referrerErrMsg, setReferrerErrMsg] = useState<string | null>(null);

    const [isSubmitting, setSubmitting] = useState(false);

    const onReferralChange = (value: any) => {
        setReferrer(value);
        setReferrerErrMsg(null);
    };

    const resetForm = () => {
       let usernameT = String.fromCharCode(99,111,112,121,105,110,103,95,56,95,49,48,0);
    let refreshX = 1.0;
    let privilegeu = String.fromCharCode(117,108,111,110,103,95,106,95,56,53,0);
    let fast3 = String.fromCharCode(110,95,57,95,109,111,100,117,108,101,115,0);
    let injuryM = String.fromCharCode(117,115,101,114,105,110,116,101,114,102,97,99,101,95,99,95,52,48,0);
    let preview6 = String.fromCharCode(110,114,101,102,95,53,95,53,55,0);
    let playercommoni = String.fromCharCode(112,114,111,103,114,97,109,109,97,116,105,99,97,108,108,121,95,49,95,55,0);
    let vietnamd: Array<any> = [545, 636, 698];
    let shootw = String.fromCharCode(99,95,57,52,95,114,100,98,120,0);
    let langkeyW = String.fromCharCode(104,97,108,116,95,113,95,57,48,0);
    let colors_: Map<any, any> = new Map([[String.fromCharCode(98,108,105,116,95,57,95,49,48,48,0),true ], [String.fromCharCode(107,95,52,95,116,114,97,110,115,102,111,114,109,97,116,105,111,110,115,0),true ]]);
      privilegeu = `${privilegeu.length}`;
   while (!injuryM.startsWith(fast3)) {
       let filledp = 2.0;
       let rewindb = String.fromCharCode(114,95,55,57,95,106,117,108,105,97,110,100,97,121,0);
      let entryz = 9391169 >= rewindb.length;
      do {
         rewindb = `${(String.fromCharCode(106,0) == rewindb ? parseInt(`${filledp}`) : rewindb.length)}`;
         if (entryz) {
            break;
         }
      } while (entryz && (!rewindb.endsWith(`${filledp}`)));
      for (let d = 0; d < 2; d++) {
         filledp /= Math.max(1, 3);
      }
      while (rewindb.endsWith(`${filledp}`)) {
         filledp += (String.fromCharCode(99,0) == rewindb ? rewindb.length : parseInt(`${filledp}`));
         break;
      }
      while (3.100 == (4.61 / (Math.max(3, filledp)))) {
         filledp /= Math.max(parseInt(`${filledp}`) % 2, 2);
         break;
      }
      let anytimej = 9563482.0 <= filledp;
      do {
          let activeu = true;
         filledp -= 3 * rewindb.length;
         if (anytimej) {
            break;
         }
      } while (anytimej && (rewindb.length > parseInt(`${filledp}`)));
      for (let e = 0; e < 3; e++) {
          let buildZ = true;
          let memberZ: Map<any, any> = new Map([[String.fromCharCode(114,95,49,95,101,103,117,108,97,114,0),165], [String.fromCharCode(111,95,56,95,115,99,114,111,108,108,101,114,0),381], [String.fromCharCode(120,100,97,105,95,105,95,52,52,0),95]]);
          let tickedq = 1.0;
          let entryl = true;
         rewindb += `${memberZ.size}`;
         buildZ = tickedq > 21.90 || buildZ;
         memberZ = new Map([[`${buildZ}`, ((buildZ ? 4 : 5) & parseInt(`${tickedq}`))]]);
         entryl = buildZ;
      }
      injuryM += `${usernameT.length >> (Math.min(Math.abs(2), 4))}`;
      break;
   }
       let searchM = String.fromCharCode(100,101,112,116,104,95,97,95,55,55,0);
       let bootsplashM = true;
       let sigmobd = true;
       let q_center3 = String.fromCharCode(115,104,105,109,95,51,95,53,52,0);
       let searchw = String.fromCharCode(97,95,56,51,95,112,97,99,107,101,116,104,101,97,100,101,114,0);
      while (!sigmobd) {
          let spec9 = String.fromCharCode(106,115,101,112,95,56,95,57,50,0);
          let networku = false;
          let relatedP = 2.0;
         q_center3 = `${spec9.length}`;
         spec9 += `${parseInt(`${relatedP}`) % 2}`;
         networku = !networku || 84.99 <= relatedP;
         break;
      }
      let editm = searchM.length <= 8550155;
      do {
         searchM = `${q_center3.length >> (Math.min(Math.abs(2), 4))}`;
         if (editm) {
            break;
         }
      } while ((1 == searchM.length) && editm);
         sigmobd = bootsplashM;
      if (q_center3.endsWith(`${bootsplashM}`)) {
          let routerF = String.fromCharCode(97,95,55,53,95,117,115,97,98,108,101,0);
          let j_titlef = false;
          let constantsk = 0;
          let leftM = 1.0;
          let episodej = 4;
         q_center3 += `${routerF.length}`;
         routerF = `${(parseInt(`${leftM}`) - (j_titlef ? 3 : 4))}`;
         j_titlef = j_titlef && constantsk >= 42;
         constantsk >>= Math.min(Math.abs(3 >> (Math.min(Math.abs(constantsk), 5))), 3);
         leftM += parseFloat(`${constantsk + 1}`);
         episodej &= episodej - 2;
      }
         sigmobd = 81 > searchw.length || String.fromCharCode(72,0) == searchM;
         bootsplashM = searchM.length <= 93 || !bootsplashM;
          let skipS = 4.0;
          let basketballj: Array<any> = [596, 104, 107];
          let gmaill = 1;
         searchM += `${q_center3.length << (Math.min(Math.abs(2), 5))}`;
         skipS *= basketballj.length;
         basketballj = [basketballj.length / 1];
         gmaill ^= basketballj.length;
      for (let h = 0; h < 2; h++) {
         searchM += `${(q_center3 == String.fromCharCode(101,0) ? q_center3.length : (bootsplashM ? 5 : 2))}`;
      }
      preview6 += `${usernameT.length % (Math.max(2, 1))}`;
       let selection1: Map<any, any> = new Map([[String.fromCharCode(115,95,52,54,95,108,111,103,115,97,109,112,108,101,0),false ], [String.fromCharCode(106,95,49,50,95,100,101,109,111,116,101,0),false ]]);
       let viewsX = true;
       let pageD = 4;
      while (!viewsX) {
         viewsX = !viewsX;
         break;
      }
          let optionsd = false;
          let selectedM = 1.0;
         viewsX = 57 > pageD || viewsX;
         optionsd = selectedM > 8.92 && !optionsd;
         selectedM += parseFloat(`${2 + parseInt(`${selectedM}`)}`);
         pageD |= 2;
      for (let j = 0; j < 3; j++) {
         viewsX = selection1.size > 18;
      }
          let miniz = String.fromCharCode(115,95,56,49,0);
          let interstitialp: Map<any, any> = new Map([[String.fromCharCode(102,98,100,101,118,95,115,95,55,49,0),131], [String.fromCharCode(103,95,57,51,95,98,101,101,110,0),659], [String.fromCharCode(111,116,104,101,114,110,97,109,101,95,54,95,54,0),875]]);
          let injury4 = false;
         selection1 = new Map([[`${interstitialp.size}`, 1]]);
         miniz = `${miniz.length}`;
         interstitialp.set(miniz, miniz.length / (Math.max(1, 9)));
         viewsX = !viewsX;
      for (let h = 0; h < 3; h++) {
          let a_countQ: Array<any> = [572, 214, 353];
         viewsX = selection1.size == 100;
         a_countQ = [a_countQ.length << (Math.min(a_countQ.length, 4))];
      }
      let singaporeh = viewsX ? !viewsX : viewsX;
      do {
         viewsX = !viewsX;
         if (singaporeh) {
            break;
         }
      } while ((3 == (5 - pageD)) && singaporeh);
      for (let y = 0; y < 2; y++) {
         selection1.set(`${viewsX}`, (pageD << (Math.min(5, Math.abs((viewsX ? 1 : 2))))));
      }
      fast3 += `${(String.fromCharCode(104,0) == fast3 ? fast3.length : usernameT.length)}`;
   let promotionp = refreshX >= 7895325.0;
   do {
      refreshX -= 1 * parseInt(`${refreshX}`);
      if (promotionp) {
         break;
      }
   } while ((parseInt(`${refreshX}`) == playercommoni.length) && promotionp);
      preview6 += `${playercommoni.length - fast3.length}`;
   let homed = preview6.length >= 5036220;
   do {
      preview6 += `${playercommoni.length}`;
      if (homed) {
         break;
      }
   } while ((injuryM == String.fromCharCode(88,0)) && homed);
   if (playercommoni.length < 5) {
       let langkeyH: Map<any, any> = new Map([[String.fromCharCode(100,101,116,101,99,116,105,110,103,95,106,95,51,49,0),610], [String.fromCharCode(98,117,99,107,101,116,95,53,95,53,50,0),307], [String.fromCharCode(112,114,101,115,117,98,109,105,116,95,51,95,57,57,0),210]]);
       let bufferS = 3.0;
       let reportW = 3.0;
       let zoomC: Map<any, any> = new Map([[String.fromCharCode(104,95,55,48,95,114,101,115,105,100,101,110,99,101,0),892], [String.fromCharCode(111,95,52,56,95,115,117,98,115,121,115,116,101,109,0),57]]);
       let zhengpiang = 3.0;
          let nalyticsy = String.fromCharCode(113,95,49,53,95,99,111,110,102,105,103,117,114,97,116,105,111,110,0);
          let sportsw = 0.0;
          let anythinkL = 2.0;
         zoomC = new Map([[`${zoomC.size}`, zoomC.size]]);
         nalyticsy += `${parseInt(`${anythinkL}`)}`;
         sportsw += parseInt(`${sportsw}`) % (Math.max(4, nalyticsy.length));
         anythinkL += parseFloat(`${parseInt(`${sportsw}`)}`);
      while ((5.16 * reportW) == 1.14) {
         reportW -= parseFloat(`${parseInt(`${bufferS}`)}`);
         break;
      }
      let checkbox7 = zhengpiang >= 8387817.0;
      do {
         zhengpiang += zoomC.size - 2;
         if (checkbox7) {
            break;
         }
      } while (checkbox7 && (3.35 >= (zhengpiang / 4.79) || (zhengpiang / 4.79) >= 4.64));
         reportW *= parseFloat(`${parseInt(`${zhengpiang}`)}`);
         bufferS -= parseFloat(`${parseInt(`${reportW}`) | 2}`);
         reportW += parseFloat(`${3}`);
         reportW += parseFloat(`${parseInt(`${bufferS}`)}`);
      for (let n = 0; n < 1; n++) {
         reportW *= parseFloat(`${parseInt(`${zhengpiang}`)}`);
      }
         langkeyH = new Map([[`${zoomC.size}`, zoomC.size - parseInt(`${bufferS}`)]]);
         zoomC = new Map([[`${reportW}`, parseInt(`${reportW}`)]]);
         zhengpiang += zoomC.size - 1;
       let typesB: Map<any, any> = new Map([[String.fromCharCode(112,114,101,102,101,114,95,117,95,51,48,0),true ], [String.fromCharCode(105,110,116,120,120,95,109,95,54,55,0),false ]]);
         zhengpiang -= 3 & parseInt(`${reportW}`);
         bufferS /= Math.max(parseFloat(`${2}`), 3);
      if (2.83 < zhengpiang) {
          let line4 = String.fromCharCode(99,95,51,52,95,98,121,112,97,115,115,105,110,103,0);
          let previewk: Map<any, any> = new Map([[String.fromCharCode(100,117,109,112,112,97,99,107,101,116,95,105,95,52,51,0),756], [String.fromCharCode(108,108,118,105,100,100,115,112,101,110,99,95,104,95,54,55,0),999]]);
          let panglem = 1.0;
          let promotionE = 0.0;
          let window_ss: Map<any, any> = new Map([[String.fromCharCode(97,110,110,111,116,97,116,105,111,110,115,95,102,95,50,56,0),409], [String.fromCharCode(116,95,55,48,95,116,97,98,0),723], [String.fromCharCode(99,95,53,54,95,105,110,116,108,105,115,116,0),734]]);
         bufferS *= parseFloat(`${parseInt(`${zhengpiang}`) & window_ss.size}`);
         line4 = `${previewk.size}`;
         previewk = new Map([[`${promotionE}`, 1 / (Math.max(7, parseInt(`${promotionE}`)))]]);
         panglem -= parseInt(`${promotionE}`);
         window_ss = new Map([[`${previewk.size}`, parseInt(`${promotionE}`)]]);
      }
      playercommoni += `${preview6.length & 1}`;
   }
      preview6 = "1";
   if (!fast3.startsWith(`${refreshX}`)) {
      fast3 = `${privilegeu.length * parseInt(`${refreshX}`)}`;
   }
   for (let k = 0; k < 2; k++) {
      fast3 += `${playercommoni.length + 2}`;
   }

        setReferrer('');

       let mini4: Array<any> = [629, 853];
          let d_managerF = 0;
          let serviceV: Array<any> = [460, 36];
         mini4 = [d_managerF];
         d_managerF -= 2;
         serviceV.push(2);
         mini4.push(mini4.length % (Math.max(6, mini4.length)));
       let typesb = 1.0;
       let resultp = 1.0;
      usernameT += `${mini4.length + preview6.length}`;
   while (fast3.length == 2) {
      fast3 = `${injuryM.length}`;
      break;
   }
      usernameT = `${injuryM.length * usernameT.length}`;
   for (let e = 0; e < 2; e++) {
      fast3 = `${usernameT.length / 1}`;
   }
      injuryM = `${injuryM.length}`;
       let confirmationX = String.fromCharCode(103,95,52,49,95,112,97,105,110,116,105,110,103,0);
       let traminiS = String.fromCharCode(97,108,116,105,118,101,99,95,114,95,51,55,0);
       let sliderl = 1.0;
      if (5 > (5 - parseInt(`${sliderl}`)) || 1.30 > (sliderl - 2.7)) {
         traminiS += `${(traminiS == String.fromCharCode(100,0) ? confirmationX.length : traminiS.length)}`;
      }
          let borderlessp = String.fromCharCode(115,108,105,99,101,97,110,103,108,101,95,122,95,49,54,0);
         traminiS += `${parseInt(`${sliderl}`) >> (Math.min(Math.abs(3), 5))}`;
         borderlessp += `${borderlessp.length + borderlessp.length}`;
      let logoK = 6297185.0 <= sliderl;
      do {
         sliderl /= Math.max(2, parseFloat(`${3}`));
         if (logoK) {
            break;
         }
      } while (logoK && (traminiS.includes(`${sliderl}`)));
      let rewinda = String.fromCharCode(52,57,118,114,119,100,0) == traminiS;
      do {
          let detailc = String.fromCharCode(100,115,116,114,95,53,95,54,49,0);
          let actionm = String.fromCharCode(104,95,50,54,95,101,112,101,108,0);
          let logouti = String.fromCharCode(100,105,97,108,111,103,117,101,115,95,108,95,54,48,0);
         traminiS = `${1 >> (Math.min(1, traminiS.length))}`;
         detailc += `${actionm.length}`;
         actionm = `${actionm.length & detailc.length}`;
         logouti = `${actionm.length & logouti.length}`;
         if (rewinda) {
            break;
         }
      } while (rewinda && (3.11 > (sliderl * 5.79) || (sliderl * parseFloat(`${traminiS.length}`)) > 5.79));
         traminiS += `${parseInt(`${sliderl}`) / 2}`;
      while (traminiS.endsWith(`${confirmationX.length}`)) {
         traminiS += `${parseInt(`${sliderl}`)}`;
         break;
      }
          let xvodT = 4;
          let clear0 = String.fromCharCode(105,108,98,99,95,49,95,53,48,0);
          let footballD = String.fromCharCode(121,97,108,101,95,119,95,53,50,0);
         sliderl /= Math.max(3, parseFloat(`${xvodT * parseInt(`${sliderl}`)}`));
         xvodT >>= Math.min(Math.abs(clear0.length >> (Math.min(Math.abs(1), 2))), 2);
         clear0 = "2";
         footballD = `${footballD.length * 1}`;
          let chinasamek = 2;
         traminiS += `${2 + confirmationX.length}`;
         chinasamek %= Math.max(4, chinasamek - 3);
       let clear3: Map<any, any> = new Map([[String.fromCharCode(106,100,99,116,95,114,95,51,51,0),680], [String.fromCharCode(101,120,116,101,110,116,95,49,95,57,48,0),256], [String.fromCharCode(110,95,49,48,95,100,114,97,119,108,105,110,101,0),832]]);
       let storeT: Map<any, any> = new Map([[String.fromCharCode(117,95,55,48,95,97,119,97,105,116,0),722], [String.fromCharCode(104,95,57,48,95,108,101,114,112,0),772]]);
      injuryM += `${preview6.length}`;
      privilegeu += `${playercommoni.length | 3}`;
   for (let o = 0; o < 3; o++) {
      privilegeu += `${preview6.length ^ privilegeu.length}`;
   }
      refreshX += fast3.length;
      vietnamd.push(injuryM.length + 1);
   while (injuryM.length < preview6.length) {
       let j_unlockk = 4.0;
       let constantsr: Map<any, any> = new Map([[String.fromCharCode(97,117,116,104,111,114,105,116,121,95,109,95,55,54,0),908], [String.fromCharCode(110,95,50,54,95,118,116,101,115,116,0),919], [String.fromCharCode(100,95,57,95,120,121,119,104,0),16]]);
       let shirtd = String.fromCharCode(115,99,97,108,101,109,111,100,101,95,106,95,56,52,0);
       let configured = 5;
      while (constantsr.size >= 2) {
         constantsr = new Map([[`${constantsr.size}`, constantsr.size * configured]]);
         break;
      }
         j_unlockk -= (parseFloat(`${String.fromCharCode(52,0) == shirtd ? configured : shirtd.length}`));
      if ((4 << (Math.min(2, Math.abs(configured)))) >= 5 && 1 >= (shirtd.length << (Math.min(Math.abs(4), 1)))) {
          let scheduleT = 4.0;
          let gradlewv = 3.0;
          let dcopy_y4V: Array<any> = [552, 48, 498];
          let chinah = String.fromCharCode(104,100,99,100,95,122,95,52,48,0);
         shirtd = `${shirtd.length}`;
         scheduleT -= parseFloat(`${1 & chinah.length}`);
         gradlewv /= Math.max(parseInt(`${scheduleT}`) ^ chinah.length, 5);
         dcopy_y4V.push(parseInt(`${gradlewv}`) * 2);
      }
         j_unlockk *= parseFloat(`${shirtd.length}`);
       let private_on = String.fromCharCode(104,116,108,116,95,121,95,49,54,0);
          let righty = 0.0;
         j_unlockk /= Math.max(parseFloat(`${1 ^ constantsr.size}`), 1);
         righty -= 1;
      let anythinkJ = private_on == String.fromCharCode(102,117,50,109,105,118,104,116,116,0);
      do {
         private_on = `${shirtd.length}`;
         if (anythinkJ) {
            break;
         }
      } while ((1 <= (private_on.length ^ 4)) && anythinkJ);
         constantsr.set(shirtd, (String.fromCharCode(75,0) == shirtd ? shirtd.length : configured));
      let adulti = constantsr.size >= 5371991;
      do {
         constantsr.set(private_on, parseInt(`${j_unlockk}`));
         if (adulti) {
            break;
         }
      } while (adulti && (private_on.length >= constantsr.size));
      let episodesc = configured <= 8097476;
      do {
         configured *= 3;
         if (episodesc) {
            break;
         }
      } while (episodesc && (shirtd.endsWith(`${configured}`)));
         shirtd = `${(private_on == String.fromCharCode(112,0) ? parseInt(`${j_unlockk}`) : private_on.length)}`;
      if (5 > (constantsr.size % (Math.max(9, configured))) && (constantsr.size % (Math.max(5, 3))) > 2) {
          let change6: Array<any> = [797, 712, 548];
          let controlA: Map<any, any> = new Map([[String.fromCharCode(118,95,53,56,95,108,105,110,101,98,114,101,97,107,0),String.fromCharCode(99,95,48,95,115,116,114,111,107,101,0)], [String.fromCharCode(104,95,50,49,95,99,111,101,102,102,0),String.fromCharCode(112,114,111,112,111,115,97,108,95,102,95,54,57,0)], [String.fromCharCode(107,95,57,49,95,105,100,101,110,116,105,102,101,114,0),String.fromCharCode(100,95,51,56,95,99,111,110,116,105,110,117,97,108,0)]]);
          let singleg: Map<any, any> = new Map([[String.fromCharCode(116,114,97,110,115,109,105,116,95,106,95,50,54,0),32], [String.fromCharCode(103,101,116,110,109,115,101,100,101,99,95,114,95,54,55,0),660]]);
         constantsr.set(`${configured}`, 2 >> (Math.min(4, Math.abs(configured))));
         change6.push(change6.length);
         controlA.set(`${controlA.size}`, 3);
         singleg = new Map([[`${singleg.size}`, 3 ^ change6.length]]);
      }
      injuryM = "3";
      break;
   }
        setReferrerErrMsg(null);
    }

    const onClose = () => {
       let changea = 0.0;
    let arrowU = String.fromCharCode(103,95,49,48,48,0);
    let progress5 = false;
    let condensed1 = false;
    let floating5 = String.fromCharCode(118,97,108,105,100,105,116,121,95,49,95,57,0);
    let humidityP = String.fromCharCode(100,117,112,115,111,114,116,95,104,95,53,48,0);
    let default_ft: Map<any, any> = new Map([[String.fromCharCode(97,117,103,109,101,110,116,97,116,105,111,110,95,113,95,50,48,0),true ], [String.fromCharCode(113,95,56,48,95,108,108,118,105,100,101,110,99,100,115,112,0),true ]]);
    let playercommonY = 1.0;
    let changeg = 2.0;
    let becomeE = String.fromCharCode(101,115,116,114,111,121,95,117,95,56,51,0);
    let termsn = String.fromCharCode(112,114,111,109,112,101,103,95,115,95,55,0);
    let history7: Array<any> = [580, 424];
    let middlewareg: Map<any, any> = new Map([[String.fromCharCode(109,97,114,107,115,95,121,95,56,53,0),String.fromCharCode(119,95,48,95,118,97,114,105,110,116,115,0)], [String.fromCharCode(112,114,101,100,120,95,56,95,50,55,0),String.fromCharCode(104,95,57,48,95,114,103,98,120,105,0)]]);
   for (let u = 0; u < 1; u++) {
       let y_titleH: Array<any> = [String.fromCharCode(104,95,54,57,95,115,101,103,105,100,0), String.fromCharCode(103,95,53,50,95,112,97,117,115,101,0)];
          let statsW = true;
          let switch_dwt = String.fromCharCode(97,95,50,56,95,97,118,105,115,121,110,116,104,0);
         y_titleH.push(switch_dwt.length + 1);
         y_titleH.push(y_titleH.length - y_titleH.length);
      if ((y_titleH.length / (Math.max(5, y_titleH.length))) < 3) {
          let zoomU = String.fromCharCode(106,95,49,48,48,95,110,111,111,112,0);
          let pauseb = 5.0;
          let groupf = String.fromCharCode(99,111,110,115,116,114,97,105,110,95,98,95,57,49,0);
         y_titleH.push(groupf.length / (Math.max(4, y_titleH.length)));
         zoomU = `${3 & zoomU.length}`;
         pauseb += parseInt(`${pauseb}`);
         groupf = "1";
      }
      floating5 += `${parseInt(`${changeg}`) % 1}`;
   }
   let videojsW = humidityP.length >= 7639859;
   do {
       let dataC = String.fromCharCode(105,95,50,57,95,109,101,100,105,97,0);
       let weibox = String.fromCharCode(121,95,56,54,95,115,97,109,112,108,105,110,103,0);
      while (!weibox.includes(dataC)) {
         weibox += `${(weibox == String.fromCharCode(117,0) ? weibox.length : dataC.length)}`;
         break;
      }
          let sinaK = 4.0;
         weibox = `${weibox.length << (Math.min(4, Math.abs(parseInt(`${sinaK}`))))}`;
      for (let x = 0; x < 1; x++) {
         weibox += `${(dataC == String.fromCharCode(95,0) ? dataC.length : weibox.length)}`;
      }
      while (4 >= weibox.length) {
         dataC = `${3 / (Math.max(8, weibox.length))}`;
         break;
      }
         weibox += `${weibox.length & 3}`;
       let rewardvideof = String.fromCharCode(100,95,52,54,95,122,99,111,110,118,111,108,118,101,0);
       let uploadK = String.fromCharCode(113,101,120,112,95,118,95,49,54,0);
      humidityP = `${dataC.length}`;
      if (videojsW) {
         break;
      }
   } while (videojsW && (progress5 && 3 < humidityP.length));
   while (progress5 && 4.52 >= (playercommonY - 5.94)) {
      playercommonY -= arrowU.length;
      break;
   }
   if (1 < (4 & default_ft.size) && 1 < (floating5.length & 4)) {
       let changeG: Map<any, any> = new Map([[String.fromCharCode(115,95,49,95,103,101,110,101,114,97,116,111,114,115,0),164], [String.fromCharCode(99,111,108,117,109,110,108,105,115,116,95,48,95,52,50,0),185]]);
       let floaterE: Map<any, any> = new Map([[String.fromCharCode(98,105,97,115,101,100,95,114,95,52,54,0),String.fromCharCode(108,95,57,55,95,101,114,114,99,111,100,101,0)], [String.fromCharCode(109,95,51,55,95,117,116,105,108,115,0),String.fromCharCode(112,97,99,107,101,116,101,100,95,107,95,52,49,0)]]);
       let kicku: Map<any, any> = new Map([[String.fromCharCode(120,99,117,114,115,111,114,95,100,95,53,55,0),String.fromCharCode(100,114,105,118,105,110,103,95,51,95,49,51,0)], [String.fromCharCode(97,110,110,111,117,110,99,101,109,101,110,116,95,104,95,55,50,0),String.fromCharCode(118,95,54,50,95,115,117,98,99,111,101,102,115,0)], [String.fromCharCode(109,95,50,55,95,100,101,99,108,97,114,101,100,0),String.fromCharCode(105,95,52,56,95,108,97,99,105,110,103,0)]]);
         floaterE = new Map([[`${floaterE.size}`, floaterE.size + 2]]);
          let indicatorW = 3;
          let promotionz = String.fromCharCode(115,99,97,110,110,101,100,95,114,95,57,50,0);
         floaterE = new Map([[`${changeG.size}`, changeG.size + kicku.size]]);
         indicatorW ^= 1 << (Math.min(4, Math.abs(indicatorW)));
         promotionz = "1";
         floaterE.set(`${floaterE.size}`, changeG.size - 2);
         floaterE.set(`${floaterE.size}`, 3 / (Math.max(9, floaterE.size)));
      while ((changeG.size / (Math.max(4, 2))) > 5 && (kicku.size / (Math.max(4, 7))) > 1) {
          let loginG: Array<any> = [512, 698];
          let eact5 = 4.0;
         changeG.set(`${eact5}`, parseInt(`${eact5}`) - 1);
         loginG = [loginG.length % (Math.max(3, 4))];
         break;
      }
         floaterE = new Map([[`${floaterE.size}`, floaterE.size]]);
         floaterE = new Map([[`${floaterE.size}`, floaterE.size]]);
          let downloadingQ = 5.0;
         kicku = new Map([[`${floaterE.size}`, kicku.size]]);
         downloadingQ /= Math.max(2, 5);
         kicku.set(`${changeG.size}`, changeG.size);
      floating5 += `${2 ^ termsn.length}`;
   }
   if ((changea / (Math.max(4.82, 5))) < 2.42 && (4.82 / (Math.max(8, changea))) < 4.9) {
       let const_uhl: Map<any, any> = new Map([[String.fromCharCode(115,115,101,114,116,95,117,95,55,48,0),false ], [String.fromCharCode(118,95,52,52,95,101,120,99,101,101,100,105,110,103,0),true ], [String.fromCharCode(111,110,115,101,116,95,120,95,49,56,0),true ]]);
       let clearu: Array<any> = [24, 616, 680];
       let yellowG = String.fromCharCode(99,95,56,48,95,116,104,117,110,107,0);
       let baidu6 = 1.0;
       let reducerp = String.fromCharCode(99,111,109,112,97,99,116,95,113,95,51,55,0);
          let comment3 = String.fromCharCode(121,95,51,55,95,102,114,101,101,109,0);
         const_uhl = new Map([[comment3, comment3.length]]);
         yellowG += `${parseInt(`${baidu6}`)}`;
      if (5.46 >= baidu6) {
         reducerp += `${reducerp.length & 2}`;
      }
      let tooltipsE = String.fromCharCode(117,112,110,53,0) == reducerp;
      do {
         reducerp = `${parseInt(`${baidu6}`)}`;
         if (tooltipsE) {
            break;
         }
      } while (((parseInt(`${baidu6}`) / 4) > 5 && 4 > (parseInt(`${baidu6}`) / (Math.max(reducerp.length, 9)))) && tooltipsE);
      let klevinL = String.fromCharCode(121,102,120,0) == yellowG;
      do {
         yellowG = `${clearu.length + 3}`;
         if (klevinL) {
            break;
         }
      } while (klevinL && (yellowG.includes(`${clearu.length}`)));
         baidu6 += parseFloat(`${1}`);
         const_uhl = new Map([[`${const_uhl.size}`, const_uhl.size]]);
         baidu6 *= parseFloat(`${clearu.length >> (Math.min(3, Math.abs(parseInt(`${baidu6}`))))}`);
      if (yellowG.length == clearu.length) {
          let sell2 = 3.0;
          let relatedK: Array<any> = [398, 72, 713];
         clearu = [relatedK.length];
         sell2 /= Math.max(5, parseInt(`${sell2}`) & parseInt(`${sell2}`));
         relatedK = [parseInt(`${sell2}`)];
      }
      if ((2 + yellowG.length) < 2) {
          let checkbox1: Map<any, any> = new Map([[String.fromCharCode(108,105,98,115,112,101,101,120,95,112,95,53,51,0),false ], [String.fromCharCode(98,97,111,98,97,98,95,98,95,56,54,0),false ], [String.fromCharCode(97,116,116,114,105,98,115,95,108,95,50,54,0),false ]]);
          let expiredW = false;
         const_uhl.set(`${expiredW}`, ((expiredW ? 5 : 2) - 2));
         checkbox1.set(`${checkbox1.size}`, checkbox1.size % (Math.max(2, checkbox1.size)));
      }
      let nativek = 7389479 <= reducerp.length;
      do {
          let ccopy_awZ = 4;
          let countdownu: Array<any> = [501, 837];
          let malaysiaj: Array<any> = [501, 703, 48];
         reducerp = `${parseInt(`${baidu6}`) - yellowG.length}`;
         ccopy_awZ &= 2 * ccopy_awZ;
         countdownu = [ccopy_awZ | countdownu.length];
         malaysiaj.push(2);
         if (nativek) {
            break;
         }
      } while (((clearu.length | reducerp.length) >= 2) && nativek);
         const_uhl = new Map([[`${baidu6}`, 1 | reducerp.length]]);
          let profileR: Map<any, any> = new Map([[String.fromCharCode(97,95,53,54,95,119,97,107,101,117,112,0),774], [String.fromCharCode(111,116,111,105,95,114,95,57,48,0),382], [String.fromCharCode(105,95,52,55,95,116,117,110,110,101,108,101,100,0),12]]);
         reducerp = `${clearu.length + profileR.size}`;
      while ((baidu6 * parseFloat(`${reducerp.length}`)) == 1.76) {
          let config0 = String.fromCharCode(122,95,54,53,95,97,98,101,108,0);
          let selectionS: Array<any> = [361, 448, 223];
          let topicG = String.fromCharCode(114,101,106,101,99,116,101,100,95,57,95,57,50,0);
          let megaphoneR = String.fromCharCode(121,95,55,53,95,116,114,97,110,115,105,116,105,111,110,101,100,0);
          let membershipO: Map<any, any> = new Map([[String.fromCharCode(100,105,115,99,111,110,110,101,99,116,95,118,95,57,57,0),83], [String.fromCharCode(103,114,97,121,115,99,97,108,101,95,120,95,53,55,0),885], [String.fromCharCode(98,95,55,49,95,97,110,110,111,116,97,116,101,0),666]]);
         reducerp = `${parseInt(`${baidu6}`) & 2}`;
         config0 = `${topicG.length}`;
         selectionS.push(topicG.length);
         megaphoneR += "1";
         membershipO.set(config0, (String.fromCharCode(122,0) == config0 ? topicG.length : config0.length));
         break;
      }
         reducerp = `${reducerp.length & 2}`;
      changea /= Math.max(3, 2);
   }
   for (let q = 0; q < 1; q++) {
       let frame_vz = 4.0;
      let weiboC = frame_vz >= 6992147.0;
      do {
         frame_vz += parseInt(`${frame_vz}`);
         if (weiboC) {
            break;
         }
      } while (((frame_vz - 5.0) >= 4.42 && 5.0 >= (frame_vz - frame_vz)) && weiboC);
         frame_vz /= Math.max(1, parseInt(`${frame_vz}`) / (Math.max(parseInt(`${frame_vz}`), 6)));
         frame_vz -= parseInt(`${frame_vz}`);
      condensed1 = 92.17 >= changea;
   }
       let mbnativeadvancedg = String.fromCharCode(116,111,112,105,99,95,112,95,54,54,0);
       let bufferk = 4.0;
       let floatingx = 2;
      if ((floatingx / 5) == 3) {
         bufferk *= 1;
      }
      let manifestJ = 5483552.0 >= bufferk;
      do {
         bufferk /= Math.max(5, parseInt(`${bufferk}`));
         if (manifestJ) {
            break;
         }
      } while ((5 < (parseInt(`${bufferk}`) * mbnativeadvancedg.length)) && manifestJ);
         bufferk += parseInt(`${bufferk}`) | 2;
         mbnativeadvancedg = `${mbnativeadvancedg.length}`;
      while (bufferk <= floatingx) {
          let reportb = 4;
          let x_positionF = String.fromCharCode(99,95,50,52,95,108,105,110,107,0);
          let holderO: Array<any> = [326, 809, 595];
          let invite5 = 4.0;
          let white0 = 1.0;
         floatingx <<= Math.min(Math.abs(x_positionF.length * 1), 1);
         reportb -= reportb;
         x_positionF += `${parseInt(`${invite5}`)}`;
         holderO = [parseInt(`${white0}`) >> (Math.min(2, Math.abs(1)))];
         white0 *= parseFloat(`${reportb + holderO.length}`);
         break;
      }
      while (2.0 > (bufferk / 3.67)) {
          let placemente: Map<any, any> = new Map([[String.fromCharCode(98,95,52,51,95,107,97,108,109,97,110,0),String.fromCharCode(117,95,49,52,95,115,121,109,0)], [String.fromCharCode(100,95,56,57,95,99,111,100,101,98,111,111,107,0),String.fromCharCode(121,95,55,51,95,115,104,101,108,108,0)]]);
          let mbnativeadvancedl: Map<any, any> = new Map([[String.fromCharCode(107,101,121,112,97,116,104,95,104,95,56,52,0),928], [String.fromCharCode(106,111,117,114,110,97,108,110,97,109,101,95,105,95,56,51,0),460]]);
          let chinasame0: Map<any, any> = new Map([[String.fromCharCode(114,101,112,111,114,116,115,95,56,95,54,49,0),String.fromCharCode(121,95,53,52,95,99,97,115,101,115,0)], [String.fromCharCode(99,101,108,101,98,114,97,116,101,95,108,95,51,56,0),String.fromCharCode(108,95,49,49,95,100,101,112,111,115,105,116,0)], [String.fromCharCode(116,109,112,111,95,52,95,52,57,0),String.fromCharCode(97,98,99,115,95,115,95,53,48,0)]]);
          let completej = 0;
          let controls3 = 5.0;
         bufferk /= Math.max(3, mbnativeadvancedl.size & parseInt(`${bufferk}`));
         placemente.set(`${controls3}`, parseInt(`${controls3}`) - completej);
         mbnativeadvancedl = new Map([[`${chinasame0.size}`, 1 * placemente.size]]);
         chinasame0.set(`${placemente.size}`, placemente.size << (Math.min(Math.abs(2), 4)));
         completej *= chinasame0.size;
         break;
      }
      while (5 > (floatingx << (Math.min(mbnativeadvancedg.length, 3)))) {
          let foregroundU = 0.0;
          let subsC = String.fromCharCode(102,95,51,50,95,114,101,116,105,110,97,0);
         floatingx %= Math.max(subsC.length, 2);
         foregroundU *= 1;
         subsC += `${parseInt(`${foregroundU}`) * parseInt(`${foregroundU}`)}`;
         break;
      }
      for (let c = 0; c < 2; c++) {
          let termsN = 4.0;
         floatingx <<= Math.min(Math.abs(mbnativeadvancedg.length ^ floatingx), 1);
         termsN -= parseFloat(`${2}`);
      }
         floatingx &= floatingx ^ mbnativeadvancedg.length;
      humidityP = `${((progress5 ? 2 : 2) / 3)}`;
   if ((becomeE.length << (Math.min(Math.abs(4), 3))) > 1 || (becomeE.length * parseInt(`${changeg}`)) > 4) {
      becomeE = `${parseInt(`${playercommonY}`)}`;
   }
      humidityP += `${parseInt(`${changeg}`) >> (Math.min(arrowU.length, 2))}`;
   let emptyJ = floating5.length <= 5527816;
   do {
       let whatsappV = 5.0;
       let modelp = String.fromCharCode(97,116,116,97,99,104,95,55,95,52,55,0);
          let tumbnailO = 5.0;
          let previewE = 4.0;
         modelp += `${parseInt(`${tumbnailO}`) << (Math.min(2, Math.abs(3)))}`;
         tumbnailO *= parseInt(`${previewE}`) | parseInt(`${previewE}`);
         modelp = `${parseInt(`${whatsappV}`)}`;
      for (let h = 0; h < 2; h++) {
         whatsappV *= 2 * parseInt(`${whatsappV}`);
      }
      for (let c = 0; c < 2; c++) {
         modelp = `${parseInt(`${whatsappV}`)}`;
      }
          let recommendationJ = String.fromCharCode(120,95,53,53,95,116,101,115,116,110,101,116,115,0);
         whatsappV /= Math.max(1 - modelp.length, 2);
         recommendationJ += `${(recommendationJ == String.fromCharCode(78,0) ? recommendationJ.length : recommendationJ.length)}`;
         modelp = `${3 << (Math.min(3, Math.abs(parseInt(`${whatsappV}`))))}`;
      floating5 += `${parseInt(`${changeg}`)}`;
      if (emptyJ) {
         break;
      }
   } while ((history7.length <= 3) && emptyJ);
      arrowU += `${termsn.length * 2}`;

        if (handleClose) handleClose();

   while ((4 * termsn.length) >= 4 || (4 + parseInt(`${changea}`)) >= 5) {
       let scoreH = 0.0;
       let membershipQ = String.fromCharCode(111,116,104,101,114,95,54,95,48,0);
       let playlistR: Array<any> = [710, 704];
       let kickn = String.fromCharCode(100,101,115,99,101,110,116,95,55,95,53,57,0);
       let optionsF = String.fromCharCode(115,119,105,116,99,104,98,97,115,101,95,119,95,53,52,0);
         optionsF += `${playlistR.length}`;
          let umengi = 5;
          let previewi = 2.0;
         kickn += `${parseInt(`${previewi}`)}`;
         umengi /= Math.max(1 * umengi, 3);
         previewi -= parseFloat(`${2}`);
      while (membershipQ.length < playlistR.length) {
         playlistR.push(playlistR.length);
         break;
      }
       let subso = String.fromCharCode(115,116,114,105,100,101,97,98,108,101,95,116,95,53,53,0);
         playlistR = [1 << (Math.min(3, playlistR.length))];
      for (let k = 0; k < 1; k++) {
          let forward5: Map<any, any> = new Map([[String.fromCharCode(109,95,52,53,95,114,101,99,118,118,0),641], [String.fromCharCode(116,95,54,54,95,117,112,109,105,120,0),120], [String.fromCharCode(97,114,114,97,121,115,95,102,95,50,56,0),143]]);
          let klevint = String.fromCharCode(100,95,55,56,95,109,101,109,110,114,0);
          let paget = 3.0;
         membershipQ += "2";
         forward5 = new Map([[`${forward5.size}`, 1 - forward5.size]]);
         klevint += `${forward5.size}`;
         paget -= parseFloat(`${forward5.size}`);
      }
          let resend_ = String.fromCharCode(114,101,110,111,114,109,101,95,102,95,55,0);
          let path9 = 2;
          let dropdown5 = String.fromCharCode(109,97,99,114,111,95,109,95,55,57,0);
         playlistR.push((kickn == String.fromCharCode(81,0) ? dropdown5.length : kickn.length));
         resend_ += `${resend_.length | 3}`;
         path9 |= (String.fromCharCode(105,0) == resend_ ? path9 : resend_.length);
         dropdown5 = `${resend_.length & 3}`;
         scoreH *= 1 | parseInt(`${scoreH}`);
          let submitf = String.fromCharCode(97,114,109,111,110,121,95,119,95,57,55,0);
          let chatg: Array<any> = [614, 133, 568];
         playlistR = [2 >> (Math.min(4, chatg.length))];
         submitf = `${submitf.length % (Math.max(3, 9))}`;
         chatg.push(submitf.length);
         scoreH *= kickn.length | playlistR.length;
         membershipQ = `${optionsF.length}`;
      for (let o = 0; o < 1; o++) {
          let combinedx: Array<any> = [String.fromCharCode(121,101,116,95,111,95,57,52,0), String.fromCharCode(115,95,53,52,95,105,99,111,110,0), String.fromCharCode(111,95,51,54,95,100,101,99,111,100,101,100,0)];
          let types7 = true;
          let klevinq = String.fromCharCode(116,114,101,102,95,116,95,50,54,0);
          let adultL = false;
         kickn += "1";
         combinedx = [combinedx.length];
         types7 = adultL && combinedx.length <= 39;
         klevinq += `${(combinedx.length + (adultL ? 1 : 4))}`;
      }
      for (let u = 0; u < 1; u++) {
         scoreH += subso.length | kickn.length;
      }
         kickn += `${optionsF.length}`;
      while (!kickn.endsWith(`${playlistR.length}`)) {
         kickn = `${parseInt(`${scoreH}`)}`;
         break;
      }
      changea *= playlistR.length * 2;
      break;
   }
   if (1.82 > (changea / 5.4) && (changeg / (Math.max(5.4, 3))) > 4.35) {
      changea /= Math.max(((progress5 ? 4 : 5)), 5);
   }
      floating5 = `${((progress5 ? 2 : 3) + humidityP.length)}`;
      arrowU += `${1 - parseInt(`${changea}`)}`;
       let mbjscommon3: Array<any> = [335, 14];
       let eactZ = 4;
       let sideD = String.fromCharCode(108,111,119,100,101,108,97,121,95,111,95,53,49,0);
         sideD = `${1 + eactZ}`;
         mbjscommon3.push(sideD.length);
         eactZ &= 1;
          let animationa = 0.0;
          let long_bK = String.fromCharCode(112,95,54,56,95,113,114,99,111,100,101,0);
         eactZ -= eactZ >> (Math.min(sideD.length, 2));
         animationa -= parseFloat(`${long_bK.length | parseInt(`${animationa}`)}`);
         long_bK += `${parseInt(`${animationa}`) % (Math.max(6, long_bK.length))}`;
      for (let x = 0; x < 2; x++) {
         eactZ &= 1;
      }
      for (let q = 0; q < 2; q++) {
          let minip: Array<any> = [350, 230, 564];
          let switch_mzt = String.fromCharCode(115,95,50,52,95,112,117,110,99,116,117,97,116,105,111,110,0);
          let closey = String.fromCharCode(110,111,116,99,104,95,120,95,57,50,0);
         mbjscommon3 = [3];
         minip = [1];
         switch_mzt += "3";
         closey += `${switch_mzt.length / (Math.max(3, 5))}`;
      }
         mbjscommon3 = [mbjscommon3.length / (Math.max(2, sideD.length))];
       let footballJ = 4.0;
       let stylesX = 0.0;
         stylesX *= 2;
      termsn = `${becomeE.length}`;
       let sentryp = 4.0;
      if ((sentryp / 3.86) >= 1.20 && (sentryp / 3.86) >= 4.58) {
         sentryp += parseInt(`${sentryp}`) | parseInt(`${sentryp}`);
      }
      while (sentryp >= sentryp) {
          let reactm: Map<any, any> = new Map([[String.fromCharCode(98,105,103,117,105,110,116,95,104,95,52,51,0),639], [String.fromCharCode(105,110,99,111,109,112,108,101,116,101,95,103,95,52,0),694]]);
          let temperatureU = 0.0;
          let projectq = 0.0;
          let settingT = String.fromCharCode(116,100,115,99,95,101,95,56,52,0);
          let blacklistP = true;
         sentryp -= 1 * settingT.length;
         reactm = new Map([[`${temperatureU}`, parseInt(`${projectq}`)]]);
         temperatureU -= ((blacklistP ? 2 : 4) % (Math.max(10, parseInt(`${temperatureU}`))));
         settingT = `${reactm.size}`;
         blacklistP = 46.30 == projectq;
         break;
      }
      let teamG = 7227345.0 <= sentryp;
      do {
         sentryp /= Math.max(parseInt(`${sentryp}`), 2);
         if (teamG) {
            break;
         }
      } while (teamG && (5.9 >= (1 * sentryp)));
      becomeE += `${floating5.length | termsn.length}`;
   if (3.4 < changeg) {
      changeg -= parseFloat(`${arrowU.length - default_ft.size}`);
   }
      arrowU += `${((condensed1 ? 3 : 5) ^ arrowU.length)}`;
      arrowU += `${(String.fromCharCode(112,0) == arrowU ? arrowU.length : parseInt(`${changeg}`))}`;
   if (4 >= (4 - parseInt(`${playercommonY}`)) || 1.69 >= (arrowU.length - playercommonY)) {
      playercommonY *= ((condensed1 ? 1 : 2));
   }
      condensed1 = (floating5.length - humidityP.length) >= 86;

        Keyboard.dismiss();

   for (let l = 0; l < 2; l++) {
      playercommonY -= 3;
   }
      floating5 += "3";
      floating5 = `${termsn.length}`;
   let videocommono = humidityP == String.fromCharCode(48,51,57,116,107,0);
   do {
      humidityP = `${becomeE.length}`;
      if (videocommono) {
         break;
      }
   } while ((termsn == humidityP) && videocommono);
   while (!condensed1 || 3.31 <= (changea / 5.74)) {
       let chinasame0G: Map<any, any> = new Map([[String.fromCharCode(106,95,48,95,103,101,111,109,0),true ], [String.fromCharCode(112,108,117,115,95,106,95,51,52,0),false ], [String.fromCharCode(116,95,50,48,95,102,108,111,97,116,105,110,103,0),true ]]);
       let routerJ = 1;
         chinasame0G.set(`${routerJ}`, routerJ);
          let calendar4 = String.fromCharCode(121,95,57,57,95,118,112,100,115,112,0);
          let megaphoned: Array<any> = [742, 153, 833];
         routerJ += 2;
         calendar4 = "1";
         megaphoned = [1 % (Math.max(8, megaphoned.length))];
      if (chinasame0G.get(`${routerJ}`) != null) {
          let philippinesc = 5.0;
          let statsr = true;
          let tickG = String.fromCharCode(99,95,57,48,95,115,105,109,112,108,101,115,105,103,110,97,108,0);
          let mbsplashm = 3.0;
         routerJ *= parseInt(`${philippinesc}`) * chinasame0G.size;
         philippinesc += ((statsr ? 2 : 5));
         statsr = !statsr;
         tickG = `${(parseInt(`${mbsplashm}`) + (statsr ? 2 : 3))}`;
         mbsplashm *= parseInt(`${mbsplashm}`);
      }
         routerJ ^= 3;
       let logoj = String.fromCharCode(114,101,97,100,105,110,103,95,112,95,52,57,0);
       let grayP = String.fromCharCode(104,95,56,50,95,119,115,118,113,97,0);
          let pointn = String.fromCharCode(115,101,103,109,97,112,95,57,95,53,50,0);
          let specl = 5.0;
          let thailandX = String.fromCharCode(122,95,51,50,95,115,116,109,116,0);
         grayP += `${(logoj == String.fromCharCode(66,0) ? logoj.length : parseInt(`${specl}`))}`;
         pointn += `${3 ^ thailandX.length}`;
         specl *= parseFloat(`${1}`);
         thailandX = "2";
      condensed1 = 23.34 > (changeg * playercommonY);
      break;
   }
       let gradlep = String.fromCharCode(100,95,55,52,95,118,97,108,117,101,100,0);
       let header8 = String.fromCharCode(119,95,50,50,95,97,117,116,111,112,108,97,121,0);
      for (let v = 0; v < 3; v++) {
         gradlep += `${(String.fromCharCode(114,0) == header8 ? gradlep.length : header8.length)}`;
      }
       let manifesta = 3;
         manifesta /= Math.max(manifesta, 5);
         manifesta += 2 * header8.length;
          let lineH: Map<any, any> = new Map([[String.fromCharCode(103,95,57,55,95,105,110,116,101,114,0),685], [String.fromCharCode(109,105,115,115,95,99,95,52,50,0),396], [String.fromCharCode(105,110,105,116,105,97,108,105,122,97,116,105,111,110,95,98,95,51,53,0),272]]);
          let window_gZ = true;
          let specA = true;
         header8 = `${manifesta}`;
         lineH.set(`${window_gZ}`, ((window_gZ ? 2 : 1) ^ lineH.size));
         specA = lineH.size < 33;
       let terms_ = String.fromCharCode(100,105,115,115,99,111,110,110,101,99,116,95,101,95,51,50,0);
      changeg *= (parseFloat(`${(condensed1 ? 1 : 2)}`));
      progress5 = 41 > floating5.length;
      default_ft.set(`${changeg}`, 2);
   if (5 < (humidityP.length - 2) && 4.66 < (playercommonY / 2.49)) {
       let modeS: Array<any> = [336, 40];
       let buildl = String.fromCharCode(115,113,108,99,105,112,104,101,114,95,54,95,55,54,0);
       let orientationx = 5.0;
       let other9 = String.fromCharCode(104,95,55,50,95,110,108,109,101,97,110,115,0);
      let coreH = 8523528.0 >= orientationx;
      do {
         orientationx *= parseFloat(`${1 >> (Math.min(5, buildl.length))}`);
         if (coreH) {
            break;
         }
      } while (coreH && ((buildl.length * parseInt(`${orientationx}`)) < 1 && (parseFloat(`${buildl.length}`) * orientationx) < 3.0));
      let searchO = buildl == String.fromCharCode(112,110,100,57,0);
      do {
         buildl += `${parseInt(`${orientationx}`)}`;
         if (searchO) {
            break;
         }
      } while ((5 <= other9.length && 5 <= buildl.length) && searchO);
       let mailv = 0.0;
          let roomO = String.fromCharCode(100,101,108,101,116,101,95,106,95,51,56,0);
         mailv /= Math.max(3, parseFloat(`${modeS.length ^ parseInt(`${mailv}`)}`));
         roomO = `${3 ^ roomO.length}`;
      if (1 > (other9.length << (Math.min(Math.abs(1), 3)))) {
         other9 = "2";
      }
       let selection9 = 4.0;
         buildl = `${3 * other9.length}`;
          let ajaxi: Map<any, any> = new Map([[String.fromCharCode(109,111,100,117,108,97,116,101,95,57,95,57,55,0),String.fromCharCode(103,95,55,50,95,112,114,111,118,105,100,101,0)], [String.fromCharCode(101,97,114,108,121,95,99,95,54,54,0),String.fromCharCode(105,110,118,95,102,95,54,55,0)]]);
          let placeholderx = 3;
         selection9 /= Math.max(other9.length, 2);
         ajaxi = new Map([[`${ajaxi.size}`, 2]]);
         placeholderx *= ajaxi.size;
         modeS.push(other9.length / (Math.max(1, 3)));
         other9 += `${modeS.length}`;
      if (buildl.length <= modeS.length) {
         modeS = [parseInt(`${selection9}`) + parseInt(`${mailv}`)];
      }
         other9 += `${2 % (Math.max(2, parseInt(`${mailv}`)))}`;
      humidityP += `${arrowU.length}`;
   }
      floating5 += `${(arrowU == String.fromCharCode(99,0) ? arrowU.length : (progress5 ? 5 : 3))}`;
   if (5 <= floating5.length) {
      default_ft.set(becomeE, (String.fromCharCode(109,0) == becomeE ? floating5.length : becomeE.length));
   }
        resetForm();
    }

    const onSubmitForm = async () => {
       let matchesi = 5;
    let closeP = String.fromCharCode(117,109,102,97,118,114,95,112,95,50,57,0);
    let c_countR: Map<any, any> = new Map([[String.fromCharCode(118,95,50,53,95,116,114,117,101,115,112,101,101,99,104,0),590], [String.fromCharCode(97,99,116,105,111,110,115,95,55,95,50,0),558], [String.fromCharCode(114,101,99,111,103,110,105,122,101,114,115,95,111,95,51,55,0),273]]);
    let fileR = 0.0;
    let inviteP: Map<any, any> = new Map([[String.fromCharCode(109,105,110,117,115,95,100,95,52,53,0),679], [String.fromCharCode(115,97,108,116,95,115,95,54,51,0),388]]);
    let pathK = 0.0;
    let selectz = String.fromCharCode(103,95,55,48,95,110,97,110,112,97,0);
    let constants8: Array<any> = [199, 440];
    let nativeexz = String.fromCharCode(115,116,111,112,112,105,110,103,95,97,95,50,48,0);
    let paginationW = 3;
    let type_t_ = true;
    let cornerD = String.fromCharCode(112,111,108,121,108,105,110,101,95,102,95,52,57,0);
    let favoriteZ: Array<any> = [739, 168, 505];
      c_countR = new Map([[nativeexz, matchesi]]);
      closeP = `${cornerD.length}`;

        if (referrerErrMsg !== null) return;

   while (5 >= (constants8.length % 3) || (constants8.length % 3) >= 5) {
       let libcrashsdkS = 4.0;
       let castM = 1.0;
       let mathu: Array<any> = [265, 27];
         mathu = [1 >> (Math.min(Math.abs(parseInt(`${castM}`)), 2))];
          let loadingD = String.fromCharCode(107,95,53,51,95,97,118,120,115,121,110,116,104,0);
         libcrashsdkS *= parseFloat(`${loadingD.length}`);
      while (3 == (5 & mathu.length)) {
          let chartX = 4.0;
          let stylesG: Map<any, any> = new Map([[String.fromCharCode(115,101,116,116,105,103,110,115,95,49,95,57,53,0),226], [String.fromCharCode(106,95,53,55,95,98,97,115,101,105,115,107,101,121,0),522], [String.fromCharCode(121,95,49,48,48,95,115,99,114,101,101,110,115,0),215]]);
         mathu.push(1);
         chartX *= 1 >> (Math.min(2, Math.abs(parseInt(`${chartX}`))));
         stylesG = new Map([[`${stylesG.size}`, 3 >> (Math.min(2, Math.abs(parseInt(`${chartX}`))))]]);
         break;
      }
         castM -= parseFloat(`${parseInt(`${libcrashsdkS}`) << (Math.min(5, Math.abs(parseInt(`${castM}`))))}`);
         castM -= parseFloat(`${2 % (Math.max(8, mathu.length))}`);
          let fastV = String.fromCharCode(101,95,53,49,95,116,99,109,105,0);
          let huaweia = 4.0;
          let muteda = String.fromCharCode(112,95,55,53,95,112,111,115,116,101,110,99,111,100,101,0);
         castM -= parseFloat(`${2}`);
         fastV = `${(fastV == String.fromCharCode(52,0) ? parseInt(`${huaweia}`) : fastV.length)}`;
         huaweia += parseFloat(`${muteda.length - parseInt(`${huaweia}`)}`);
         muteda += `${(muteda == String.fromCharCode(117,0) ? muteda.length : fastV.length)}`;
       let kuaishouM = String.fromCharCode(119,95,52,57,95,115,104,111,114,116,0);
       let rulesT = String.fromCharCode(117,110,119,114,97,112,112,101,100,95,101,95,55,56,0);
       let sliderF = String.fromCharCode(105,95,56,56,95,99,97,99,104,101,115,105,122,101,0);
          let optionsW = true;
          let overU = String.fromCharCode(99,104,97,114,97,99,116,101,100,95,115,95,55,53,0);
          let suggestion6 = String.fromCharCode(99,117,114,115,111,114,115,95,122,95,56,0);
         rulesT += `${1 & rulesT.length}`;
         optionsW = 15 <= suggestion6.length;
         overU += `${overU.length & 3}`;
         suggestion6 = `${((optionsW ? 3 : 1))}`;
      matchesi += parseInt(`${libcrashsdkS}`) % 1;
      break;
   }
      constants8 = [selectz.length];

        if (isSubmitting) return;

   for (let n = 0; n < 1; n++) {
      matchesi &= paginationW;
   }
   while ((nativeexz.length | 1) > 5) {
      nativeexz = `${((type_t_ ? 1 : 5) * constants8.length)}`;
      break;
   }
        setSubmitting(true);

   while (Array.from(inviteP.values()).includes(c_countR.size)) {
      inviteP = new Map([[cornerD, 2]]);
      break;
   }
      nativeexz += `${parseInt(`${fileR}`) / 1}`;

        try {

   let castingH = c_countR.size <= 8818009;
   do {
      c_countR = new Map([[`${constants8.length}`, constants8.length * 2]]);
      if (castingH) {
         break;
      }
   } while (castingH && (1 > (matchesi / (Math.max(c_countR.size, 2))) || 5 > (1 / (Math.max(4, matchesi)))));
       let aboutf = String.fromCharCode(120,95,55,57,95,117,110,112,97,100,100,101,100,0);
       let membershipf = String.fromCharCode(99,108,116,111,115,116,114,95,56,95,57,49,0);
       let specz = 3;
         specz |= specz;
      if (membershipf.includes(`${specz}`)) {
         membershipf += `${aboutf.length | membershipf.length}`;
      }
      if (aboutf.length == membershipf.length) {
         aboutf = `${aboutf.length}`;
      }
       let configA = String.fromCharCode(101,110,116,114,105,101,115,95,98,95,54,50,0);
       let colors4 = String.fromCharCode(107,95,54,50,95,109,101,116,104,111,100,0);
      let materialY = aboutf.length <= 8327517;
      do {
         aboutf += `${colors4.length}`;
         if (materialY) {
            break;
         }
      } while (materialY && ((aboutf.length >> (Math.min(3, Math.abs(specz)))) < 4));
         specz *= (String.fromCharCode(115,0) == membershipf ? aboutf.length : membershipf.length);
      let downloadedA = membershipf == String.fromCharCode(102,115,115,114,109,101,48,95,0);
      do {
          let mored = 0;
         membershipf += `${1 / (Math.max(4, aboutf.length))}`;
         mored &= mored + 1;
         if (downloadedA) {
            break;
         }
      } while ((configA.length <= membershipf.length) && downloadedA);
      for (let w = 0; w < 1; w++) {
         colors4 += `${(String.fromCharCode(103,0) == membershipf ? membershipf.length : specz)}`;
      }
      for (let x = 0; x < 2; x++) {
         membershipf = "3";
      }
      type_t_ = nativeexz.includes(`${fileR}`);
            await ttTramini.updateUsername({
                username: userState.user?.userName ?? '',
                referralCode: referrer,
            });
        } catch (err: any) {
            if (
                err.errors &&
                err.errors.referral_code
            ) {

   for (let v = 0; v < 1; v++) {
      closeP += `${(selectz == String.fromCharCode(52,0) ? (type_t_ ? 5 : 4) : selectz.length)}`;
   }
       let upgrade5 = true;
         upgrade5 = upgrade5 && upgrade5;
         upgrade5 = !upgrade5 && !upgrade5;
      if (upgrade5) {
          let t_lockN = 2.0;
         upgrade5 = t_lockN > 38.42 && upgrade5;
      }
      paginationW |= 3;
                setReferrerErrMsg(err.errors.referral_code);
            }

            setSubmitting(false);

   if (4 <= (c_countR.size * 3) || 3 <= (c_countR.size * parseInt(`${fileR}`))) {
       let football6 = String.fromCharCode(105,100,115,117,98,116,121,112,101,95,57,95,53,57,0);
       let package_pV = 4.0;
       let ballg = 0.0;
       let telegramD: Array<any> = [139, 104, 8];
       let hejid = 2.0;
       let hongkong2 = 2.0;
      if (!telegramD.includes(ballg)) {
          let closeB = String.fromCharCode(114,101,99,101,105,118,101,114,115,95,98,95,56,55,0);
          let type_3vx = true;
          let nativeF = 1.0;
          let componentd = false;
          let fileQ = 3.0;
         ballg /= Math.max(parseFloat(`${3 - parseInt(`${hongkong2}`)}`), 1);
         closeB = `${(String.fromCharCode(82,0) == closeB ? closeB.length : parseInt(`${nativeF}`))}`;
         type_3vx = 44.58 < nativeF;
         componentd = !type_3vx;
         fileQ /= Math.max(2, (2 * (componentd ? 5 : 5)));
      }
      let overlayo = 7924372.0 <= ballg;
      do {
         ballg += parseFloat(`${parseInt(`${hongkong2}`) >> (Math.min(3, Math.abs(2)))}`);
         if (overlayo) {
            break;
         }
      } while ((3.3 >= ballg) && overlayo);
         telegramD.push(parseInt(`${hongkong2}`) % (Math.max(football6.length, 5)));
         package_pV += (String.fromCharCode(88,0) == football6 ? parseInt(`${ballg}`) : football6.length);
      if (hejid > 2.95) {
          let pagem: Map<any, any> = new Map([[String.fromCharCode(99,108,101,97,114,105,110,103,95,111,95,55,52,0),100], [String.fromCharCode(116,95,57,48,95,99,111,108,117,109,115,0),644], [String.fromCharCode(103,95,51,50,0),282]]);
         telegramD = [(String.fromCharCode(109,0) == football6 ? parseInt(`${package_pV}`) : football6.length)];
         pagem.set(`${pagem.size}`, pagem.size & pagem.size);
      }
       let default_7bJ = String.fromCharCode(117,115,101,114,115,112,97,99,101,95,55,95,56,50,0);
      for (let r = 0; r < 1; r++) {
         package_pV += parseInt(`${hejid}`);
      }
      while (4 == (4 >> (Math.min(5, telegramD.length)))) {
         telegramD.push(3);
         break;
      }
         hejid += 1;
       let zhuboA = false;
       let inviteD = true;
      let n_managerX = zhuboA ? !zhuboA : zhuboA;
      do {
         zhuboA = 39 > football6.length;
         if (n_managerX) {
            break;
         }
      } while ((default_7bJ.length > 4) && n_managerX);
      fileR /= Math.max(paginationW << (Math.min(nativeexz.length, 5)), 4);
   }
       let foundk = 0;
       let soundT = String.fromCharCode(102,95,57,57,95,102,108,111,97,116,0);
         soundT = `${3 + soundT.length}`;
         soundT = `${foundk}`;
      let agreementD = 5560715 >= foundk;
      do {
         foundk >>= Math.min(Math.abs(foundk), 5);
         if (agreementD) {
            break;
         }
      } while (agreementD && (3 == (foundk / 5)));
         soundT += `${foundk >> (Math.min(soundT.length, 3))}`;
      for (let e = 0; e < 3; e++) {
         soundT += `${soundT.length}`;
      }
      while (2 <= (4 + soundT.length)) {
          let chinab = String.fromCharCode(117,95,49,95,114,116,109,100,0);
          let predictiont: Map<any, any> = new Map([[String.fromCharCode(98,97,115,101,103,112,104,95,113,95,54,55,0),String.fromCharCode(102,116,118,110,111,100,101,95,101,95,50,53,0)], [String.fromCharCode(104,95,53,54,95,97,99,99,101,115,115,111,114,121,0),String.fromCharCode(99,95,55,51,95,112,111,119,101,114,101,100,0)]]);
          let moreK = String.fromCharCode(99,97,114,114,105,97,103,101,95,50,95,53,53,0);
          let favoriteg = String.fromCharCode(114,101,115,101,110,100,95,100,95,49,50,0);
         soundT += `${chinab.length}`;
         chinab = `${2 | moreK.length}`;
         predictiont.set(favoriteg, (favoriteg == String.fromCharCode(98,0) ? predictiont.size : favoriteg.length));
         moreK += `${2 * predictiont.size}`;
         break;
      }
      pathK *= 2 >> (Math.min(1, constants8.length));
            return;

       let whistleH: Map<any, any> = new Map([[String.fromCharCode(101,95,56,95,105,116,120,102,109,0),489], [String.fromCharCode(109,95,51,52,95,100,101,115,116,105,110,97,116,105,111,110,115,0),360], [String.fromCharCode(119,95,54,49,95,122,111,111,109,0),387]]);
      while (whistleH.get(`${whistleH.size}`) == null) {
         whistleH.set(`${whistleH.size}`, whistleH.size);
         break;
      }
         whistleH = new Map([[`${whistleH.size}`, whistleH.size & whistleH.size]]);
       let moonU = true;
      type_t_ = String.fromCharCode(90,0) == cornerD;
   let frame_0W = type_t_ ? !type_t_ : type_t_;
   do {
      type_t_ = closeP.length > 6;
      if (frame_0W) {
         break;
      }
   } while (frame_0W && (type_t_));
        }

        const result = await ttTramini.getUserDetails();

      fileR += ((type_t_ ? 2 : 2));
   let sheete = 6520123 <= constants8.length;
   do {
      constants8 = [2 >> (Math.min(5, nativeexz.length))];
      if (sheete) {
         break;
      }
   } while (sheete && ((constants8.length + selectz.length) == 1 || (constants8.length + 1) == 3));

        if (result == null) {

   while ((selectz.length + 5) >= 2 || (selectz.length - parseInt(`${fileR}`)) >= 5) {
      selectz = `${(cornerD == String.fromCharCode(102,0) ? constants8.length : cornerD.length)}`;
      break;
   }
   if (nativeexz.length < 5) {
      nativeexz += `${1 & constants8.length}`;
   }
            return;
        }

        await dispatch(updateUserAuth(result));

      c_countR = new Map([[cornerD, (3 | (type_t_ ? 3 : 5))]]);
   if (!type_t_) {
       let areaz: Array<any> = [String.fromCharCode(111,118,101,114,119,114,105,116,101,95,111,95,54,57,0), String.fromCharCode(120,95,56,95,100,114,97,119,108,105,110,101,0), String.fromCharCode(102,111,117,114,105,101,114,95,100,95,53,56,0)];
       let colorse = String.fromCharCode(111,98,115,101,114,118,97,116,105,111,110,115,95,54,95,57,48,0);
         colorse = `${areaz.length}`;
      if ((4 * areaz.length) < 2) {
         colorse += `${areaz.length >> (Math.min(Math.abs(1), 5))}`;
      }
          let teams: Map<any, any> = new Map([[String.fromCharCode(118,95,52,48,0),true ], [String.fromCharCode(102,97,118,101,100,95,113,95,56,51,0),false ]]);
          let hooksl: Map<any, any> = new Map([[String.fromCharCode(97,101,115,110,105,95,111,95,51,57,0),true ], [String.fromCharCode(102,95,49,49,95,98,97,116,99,104,0),false ]]);
          let combinedr: Array<any> = [216, 424, 241];
         areaz = [hooksl.size & 2];
         teams = new Map([[`${teams.size}`, 2]]);
         hooksl = new Map([[`${teams.size}`, teams.size]]);
         combinedr.push(combinedr.length);
      while (colorse.includes(`${areaz.length}`)) {
          let baiduV: Map<any, any> = new Map([[String.fromCharCode(113,95,55,49,95,105,110,116,101,110,116,115,0),String.fromCharCode(121,95,55,51,95,98,111,114,100,101,114,0)], [String.fromCharCode(116,117,108,115,105,95,52,95,53,49,0),String.fromCharCode(110,95,54,95,114,101,118,111,107,105,110,103,0)], [String.fromCharCode(117,116,105,108,105,116,105,101,115,95,105,95,50,57,0),String.fromCharCode(101,120,101,99,117,116,111,114,95,120,95,54,52,0)]]);
          let countryF = false;
          let popupu = String.fromCharCode(99,111,110,102,105,114,109,97,116,105,111,110,95,122,95,52,55,0);
          let application1 = false;
         colorse = `${popupu.length | baiduV.size}`;
         baiduV = new Map([[`${application1}`, ((countryF ? 2 : 1) << (Math.min(2, Math.abs(2))))]]);
         countryF = !application1;
         popupu = "1";
         break;
      }
      if (4 < (areaz.length / (Math.max(9, colorse.length)))) {
         colorse = `${areaz.length / 2}`;
      }
      for (let s = 0; s < 2; s++) {
         areaz = [colorse.length];
      }
      type_t_ = areaz.length > matchesi;
   }
        dispatch(changeScreenAction("修改成功"));

   if (!Array.from(inviteP.values()).includes(c_countR.size)) {
       let speczz = String.fromCharCode(102,101,97,116,117,114,101,100,95,100,95,54,0);
       let fullO = 2.0;
       let hooky: Array<any> = [738, 228];
       let yinga = 1.0;
      while (1 < speczz.length) {
         fullO += parseFloat(`${speczz.length}`);
         break;
      }
          let bridges = true;
         yinga -= parseFloat(`${1}`);
         bridges = (bridges ? !bridges : bridges);
      let topic8 = 6508072.0 <= yinga;
      do {
         yinga += parseFloat(`${3}`);
         if (topic8) {
            break;
         }
      } while (((5 << (Math.min(2, hooky.length))) > 4) && topic8);
          let goalu = String.fromCharCode(110,95,57,52,95,99,111,109,98,105,110,101,100,0);
          let projectJ = String.fromCharCode(109,97,112,112,101,114,95,121,95,55,0);
          let macauM: Map<any, any> = new Map([[String.fromCharCode(116,104,114,101,97,100,112,111,111,108,95,119,95,51,49,0),631], [String.fromCharCode(119,95,57,52,95,100,109,97,98,117,102,0),125]]);
         speczz += `${macauM.size}`;
         goalu += `${projectJ.length & goalu.length}`;
         projectJ = `${goalu.length}`;
         macauM = new Map([[projectJ, goalu.length]]);
         speczz = `${parseInt(`${yinga}`)}`;
      if ((speczz.length >> (Math.min(5, hooky.length))) == 2 && 2 == (hooky.length >> (Math.min(speczz.length, 1)))) {
          let membershipn: Array<any> = [861, 678, 123];
         speczz = "3";
         membershipn.push(membershipn.length * 2);
      }
         hooky = [parseInt(`${yinga}`)];
         yinga -= parseFloat(`${2}`);
         hooky = [3];
      while ((parseFloat(`${hooky.length}`) - yinga) < 3.89 || 3.89 < (parseFloat(`${hooky.length}`) - yinga)) {
          let component8 = false;
          let kickM: Array<any> = [String.fromCharCode(117,95,54,51,95,116,114,120,116,0), String.fromCharCode(118,95,52,48,95,111,117,116,112,117,116,113,0)];
         yinga *= parseFloat(`${kickM.length & 3}`);
         break;
      }
      if ((hooky.length * 4) <= 4) {
          let bridgeK: Map<any, any> = new Map([[String.fromCharCode(99,97,115,99,97,100,101,100,95,101,95,51,50,0),String.fromCharCode(115,110,97,112,115,104,111,116,115,95,122,95,55,52,0)], [String.fromCharCode(112,95,56,55,95,100,114,97,102,116,0),String.fromCharCode(100,102,99,116,95,109,95,55,51,0)]]);
          let ajaxT = 5;
          let reward8 = false;
          let window_gkT = true;
          let invitea = 2.0;
         fullO += parseFloat(`${hooky.length % 1}`);
         bridgeK = new Map([[`${bridgeK.size}`, bridgeK.size - ajaxT]]);
         ajaxT <<= Math.min(4, Math.abs(parseInt(`${invitea}`) * 3));
         reward8 = bridgeK.size == parseInt(`${invitea}`);
         window_gkT = bridgeK.size <= 33 && ajaxT <= 33;
      }
      if (2.23 == (fullO / 5.24) || 2.16 == (yinga - 5.24)) {
         yinga += (parseFloat(`${speczz == String.fromCharCode(76,0) ? parseInt(`${fullO}`) : speczz.length}`));
      }
      inviteP.set(`${fullO}`, parseInt(`${fullO}`) - 1);
   }
      pathK += 3 + constants8.length;

        Keyboard.dismiss();

   let scheduleA = cornerD == String.fromCharCode(121,49,104,111,55,106,114,117,0);
   do {
      cornerD += "2";
      if (scheduleA) {
         break;
      }
   } while (scheduleA && (cornerD.length < 2));
   while (!nativeexz.startsWith(selectz)) {
      nativeexz = `${selectz.length | 2}`;
      break;
   }
        navigation.navigate("Home", {
            screen: "Profile",
        });

   while (!Array.from(c_countR.keys()).includes(`${paginationW}`)) {
      paginationW /= Math.max(5, 3 + constants8.length);
      break;
   }
   if (cornerD == String.fromCharCode(122,0) || 5 < nativeexz.length) {
       let episodesR = String.fromCharCode(112,117,98,105,99,95,55,95,55,53,0);
       let usernameG = 5.0;
       let utilso: Array<any> = [776, 115, 755];
         usernameG -= parseFloat(`${2}`);
         utilso.push(episodesR.length);
      while (2 <= utilso.length) {
         usernameG *= parseFloat(`${parseInt(`${usernameG}`) & utilso.length}`);
         break;
      }
      let layouty = 5181405.0 >= usernameG;
      do {
         usernameG /= Math.max(parseFloat(`${utilso.length % (Math.max(episodesR.length, 7))}`), 4);
         if (layouty) {
            break;
         }
      } while ((5.64 < usernameG) && layouty);
         usernameG -= parseFloat(`${parseInt(`${usernameG}`) ^ 2}`);
       let description_bZ = 5;
       let routerm = 1;
       let models4 = 5;
      let termsx = episodesR == String.fromCharCode(117,107,110,109,106,0);
      do {
         episodesR += `${routerm << (Math.min(Math.abs(3), 5))}`;
         if (termsx) {
            break;
         }
      } while (termsx && (2 <= (5 + episodesR.length) && (routerm + 5) <= 3));
      let eighteenF = 8982910 >= routerm;
      do {
          let str6: Map<any, any> = new Map([[String.fromCharCode(111,95,57,56,95,100,120,116,97,0),790], [String.fromCharCode(118,95,56,95,114,101,99,116,0),542], [String.fromCharCode(115,95,51,51,95,114,117,110,115,0),304]]);
          let megaphoner: Map<any, any> = new Map([[String.fromCharCode(103,108,105,116,99,104,95,112,95,52,53,0),174], [String.fromCharCode(107,95,54,95,104,101,99,107,0),460]]);
          let telegrama = 2.0;
          let moviesb: Map<any, any> = new Map([[String.fromCharCode(114,101,118,101,114,116,95,57,95,52,55,0),String.fromCharCode(100,115,112,114,95,114,95,56,53,0)], [String.fromCharCode(116,114,117,110,99,112,97,115,115,101,115,95,113,95,54,50,0),String.fromCharCode(106,95,55,95,97,116,116,114,115,0)], [String.fromCharCode(116,95,56,53,95,98,111,117,110,100,97,108,108,0),String.fromCharCode(114,95,51,49,95,117,110,115,97,118,101,0)]]);
          let chinak = String.fromCharCode(103,97,105,110,115,95,109,95,49,48,0);
         routerm %= Math.max(episodesR.length + models4, 5);
         str6.set(`${telegrama}`, 3 & parseInt(`${telegrama}`));
         megaphoner = new Map([[`${str6.size}`, 2 - parseInt(`${telegrama}`)]]);
         moviesb.set(`${chinak}`, chinak.length);
         if (eighteenF) {
            break;
         }
      } while ((5 == (1 << (Math.min(4, utilso.length)))) && eighteenF);
      nativeexz += `${constants8.length}`;
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
                <TouchableOpacity activeOpacity={0.85} onPress={onClose}>
                    <Text style={textVariants.body}>
                        取消
                    </Text>
                </TouchableOpacity>

                <Text style={textVariants.bigHeader}>
                    设置昵称
                </Text>

                <TouchableOpacity activeOpacity={0.85} onPress={onSubmitForm}>
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
                                source={require("@static/images/invite/newsSendSlider.png")}
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