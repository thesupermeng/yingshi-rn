import { useState } from "react";
import { Image, Keyboard, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CBottomSheet, CTextInput } from "../atoms";
import { useNavigation, useTheme } from "@react-navigation/native";
import { useSelector } from "@hooks/yys_frame";
import { useDispatch } from "react-redux";
import { changeScreenAction } from "@redux/actions/yys_runtimescheduler";
import { updateUserAuth } from "@redux/actions/yys_gesture";
import { yys_GesturesConst } from "@api";
import { yys_HejiCricket } from "@redux/reducers/yys_privacy_round";


interface yys_ConfigureUimanager {
    isVisible?: boolean;
    handleClose?: () => any;
    onSubmitSuccess?: (referrer: string) => void,
}

export const ChangeReferrerModal = ({
    isVisible = false,
    handleClose,
    onSubmitSuccess,
}: yys_ConfigureUimanager) => {
    const { textVariants } = useTheme();

    const dispatch = useDispatch();
    const navigation = useNavigation();
    const userState = useSelector<yys_HejiCricket>('userReducer');

    const [referrer, setReferrer] = useState('');
    const [referrerErrMsg, setReferrerErrMsg] = useState<string | null>(null);

    const [isSubmitting, setSubmitting] = useState(false);

    const onReferralChange = (value: any) => {
        setReferrer(value);
        setReferrerErrMsg(null);
    };

    const resetForm = () => {
       let dnewarchdefaultsI = String.fromCharCode(116,95,52,56,95,111,110,108,105,110,101,115,0);
    let analytic0 = 0.0;
    let backgroundZ = 0.0;
    let trophyH = String.fromCharCode(97,108,98,117,109,115,95,107,95,54,57,0);
    let indicatorh = String.fromCharCode(117,95,53,50,95,98,101,99,97,109,101,0);
    let dropdownW = 5.0;
    let rightw = 1.0;
    let buildr = String.fromCharCode(104,95,54,95,110,97,118,105,103,97,116,101,100,0);
    let jinit_8n0 = 4.0;
    let teamT = 2.0;
    let datay = 2.0;
    let crossW = 4.0;
    let topice = String.fromCharCode(97,110,99,104,111,114,115,95,109,95,57,56,0);
       let libreanimatedB = true;
      let pressure3 = libreanimatedB ? !libreanimatedB : libreanimatedB;
      do {
         libreanimatedB = (libreanimatedB ? !libreanimatedB : !libreanimatedB);
         if (pressure3) {
            break;
         }
      } while (pressure3 && (!libreanimatedB && libreanimatedB));
      let gesturesP = libreanimatedB ? !libreanimatedB : libreanimatedB;
      do {
         libreanimatedB = !libreanimatedB;
         if (gesturesP) {
            break;
         }
      } while ((!libreanimatedB) && gesturesP);
       let tickK = true;
       let imagemanagerE = true;
      backgroundZ -= parseFloat(`${parseInt(`${jinit_8n0}`) & 1}`);
   if (3 > (parseInt(`${backgroundZ}`) * 1) || 2 > (buildr.length << (Math.min(Math.abs(1), 1)))) {
      backgroundZ += parseFloat(`${1 + trophyH.length}`);
   }
   if (analytic0 > 4.85) {
      analytic0 += parseFloat(`${2 + parseInt(`${dropdownW}`)}`);
   }
       let mbbannern: Array<any> = [280, 235];
       let fieldL: Array<any> = [269, 642];
       let wind7: Array<any> = [496, 270];
      while ((wind7.length - 4) == 4 || (fieldL.length - 4) == 2) {
          let backC = String.fromCharCode(100,101,99,101,108,101,114,97,116,105,110,103,95,118,95,50,56,0);
          let mbridgeU = String.fromCharCode(106,115,116,114,105,110,103,95,121,95,50,49,0);
          let goal8 = 2.0;
         fieldL.push(backC.length);
         backC = `${parseInt(`${goal8}`)}`;
         mbridgeU = `${(String.fromCharCode(53,0) == mbridgeU ? mbridgeU.length : parseInt(`${goal8}`))}`;
         break;
      }
      if (mbbannern.includes(fieldL.length)) {
         fieldL = [mbbannern.length % (Math.max(fieldL.length, 2))];
      }
      dnewarchdefaultsI = `${indicatorh.length}`;
      dropdownW -= parseFloat(`${parseInt(`${backgroundZ}`)}`);
      jinit_8n0 -= parseFloat(`${trophyH.length}`);
   for (let c = 0; c < 3; c++) {
      backgroundZ += parseFloat(`${parseInt(`${teamT}`)}`);
   }
       let vietnamn = String.fromCharCode(109,112,101,103,112,105,99,116,117,114,101,95,55,95,56,53,0);
       let matches6 = 2.0;
      while (3 <= (parseInt(`${matches6}`) + vietnamn.length) || 4.41 <= (2.62 + matches6)) {
         matches6 /= Math.max(parseFloat(`${vietnamn.length << (Math.min(5, Math.abs(parseInt(`${matches6}`))))}`), 4);
         break;
      }
          let libsentryz = true;
         vietnamn += `${3 >> (Math.min(Math.abs(parseInt(`${matches6}`)), 4))}`;
         libsentryz = !libsentryz;
          let countdownF: Array<any> = [104, 93];
          let circleo = String.fromCharCode(103,95,57,53,95,109,97,110,117,97,108,108,121,0);
          let networkf = String.fromCharCode(103,95,51,52,95,122,114,101,111,114,100,101,114,0);
         vietnamn += `${2 / (Math.max(8, circleo.length))}`;
         countdownF.push(2 << (Math.min(2, countdownF.length)));
         circleo += "3";
         networkf += `${networkf.length}`;
          let loadingK = false;
          let accepted1 = String.fromCharCode(114,116,112,101,110,99,95,57,95,49,56,0);
         matches6 -= parseFloat(`${accepted1.length ^ parseInt(`${matches6}`)}`);
         loadingK = !loadingK;
         accepted1 += `${((loadingK ? 4 : 5) - 1)}`;
      let condensedE = 9508764.0 <= matches6;
      do {
          let ksadP = String.fromCharCode(99,97,116,99,104,95,112,95,52,49,0);
          let comment8 = false;
          let placeholdero = String.fromCharCode(107,95,56,51,95,115,116,114,116,121,112,101,0);
         matches6 /= Math.max(parseFloat(`${2}`), 4);
         ksadP += "1";
         comment8 = ksadP.length > 70 && comment8;
         placeholdero = `${((comment8 ? 5 : 3))}`;
         if (condensedE) {
            break;
         }
      } while ((3.1 > matches6) && condensedE);
      for (let l = 0; l < 2; l++) {
         vietnamn += `${2 << (Math.min(1, vietnamn.length))}`;
      }
      buildr = `${vietnamn.length >> (Math.min(Math.abs(3), 1))}`;
   if (4.35 > rightw) {
      rightw += buildr.length;
   }
      rightw -= 2 * indicatorh.length;
   if ((4 + crossW) > 2.81) {
      rightw *= parseInt(`${backgroundZ}`);
   }
      backgroundZ *= parseFloat(`${3}`);
       let unimplementedviewa = String.fromCharCode(108,105,98,120,118,105,100,95,115,95,50,54,0);
       let gmailw = 0.0;
       let userO = 4.0;
         unimplementedviewa += `${1 / (Math.max(parseInt(`${userO}`), 8))}`;
         unimplementedviewa += "2";
      let downloadj = 9870457.0 >= gmailw;
      do {
          let inactiveP: Array<any> = [String.fromCharCode(111,102,102,115,101,116,115,95,51,95,53,55,0), String.fromCharCode(98,108,117,114,95,111,95,57,51,0), String.fromCharCode(119,111,114,107,101,114,115,95,55,95,51,48,0)];
          let constantsQ: Array<any> = [String.fromCharCode(98,97,115,101,108,105,110,101,95,108,95,50,52,0), String.fromCharCode(109,95,57,57,95,111,112,101,110,99,108,0)];
          let librrcz = 4.0;
          let hooks0 = String.fromCharCode(102,95,53,50,95,109,97,116,99,104,101,0);
         gmailw -= 2 & parseInt(`${librrcz}`);
         inactiveP = [1];
         constantsQ = [(hooks0 == String.fromCharCode(99,0) ? hooks0.length : inactiveP.length)];
         librrcz += 2 * inactiveP.length;
         if (downloadj) {
            break;
         }
      } while ((gmailw == unimplementedviewa.length) && downloadj);
      while (unimplementedviewa.startsWith(`${gmailw}`)) {
         unimplementedviewa += `${parseInt(`${gmailw}`) | unimplementedviewa.length}`;
         break;
      }
      let borderlessK = unimplementedviewa.length <= 8940086;
      do {
         unimplementedviewa += `${parseInt(`${userO}`) + 1}`;
         if (borderlessK) {
            break;
         }
      } while (((1.61 - gmailw) <= 4.57 || 3 <= (unimplementedviewa.length - parseInt(`${gmailw}`))) && borderlessK);
         gmailw *= parseInt(`${userO}`);
      while (2.84 < gmailw) {
         unimplementedviewa = "1";
         break;
      }
      while ((5.75 + userO) < 2.43 || (userO + 5.75) < 2.48) {
         gmailw *= parseInt(`${gmailw}`) >> (Math.min(Math.abs(parseInt(`${userO}`)), 5));
         break;
      }
       let linkq: Array<any> = [String.fromCharCode(118,97,108,105,100,97,116,111,114,95,98,95,49,51,0), String.fromCharCode(119,97,105,116,95,119,95,50,0), String.fromCharCode(112,95,51,51,95,99,108,99,112,0)];
      analytic0 += parseFloat(`${parseInt(`${userO}`)}`);
       let teamP = true;
      let clockx = teamP ? !teamP : teamP;
      do {
          let trophyz = String.fromCharCode(100,95,51,51,95,115,109,118,106,112,101,103,0);
          let libavfilterL: Map<any, any> = new Map([[String.fromCharCode(99,111,109,112,114,101,115,115,95,53,95,53,57,0),true ], [String.fromCharCode(110,95,53,57,95,108,97,110,103,117,97,103,101,0),true ]]);
          let telemetryO = String.fromCharCode(107,95,56,54,95,104,105,103,104,108,105,103,104,116,105,110,103,0);
          let header1 = 4;
         teamP = libavfilterL.size == 54;
         trophyz += `${trophyz.length | header1}`;
         libavfilterL = new Map([[telemetryO, trophyz.length | 3]]);
         telemetryO += `${(String.fromCharCode(76,0) == trophyz ? trophyz.length : telemetryO.length)}`;
         header1 &= header1;
         if (clockx) {
            break;
         }
      } while ((teamP) && clockx);
      for (let n = 0; n < 2; n++) {
         teamP = !teamP;
      }
         teamP = !teamP;
      rightw *= dnewarchdefaultsI.length;
      datay += parseInt(`${crossW}`);
   for (let f = 0; f < 2; f++) {
      rightw -= 3 % (Math.max(5, parseInt(`${crossW}`)));
   }

        setReferrer('');

   let streamingh = jinit_8n0 >= 6882065.0;
   do {
      jinit_8n0 -= parseFloat(`${1 & indicatorh.length}`);
      if (streamingh) {
         break;
      }
   } while (streamingh && ((3.80 * backgroundZ) <= 4.7 && 1.76 <= (3.80 * backgroundZ)));
   for (let v = 0; v < 2; v++) {
      indicatorh += `${2 ^ parseInt(`${teamT}`)}`;
   }
   while (analytic0 == 4.20) {
      analytic0 /= Math.max(parseFloat(`${indicatorh.length}`), 4);
      break;
   }
   if ((parseFloat(`${trophyH.length}`) * backgroundZ) < 2.14) {
      backgroundZ -= parseFloat(`${parseInt(`${rightw}`)}`);
   }
       let historyF = 1.0;
         historyF *= parseFloat(`${2 % (Math.max(6, parseInt(`${historyF}`)))}`);
       let emptyC = 1.0;
      let clockf = 6246808.0 <= emptyC;
      do {
         emptyC -= parseFloat(`${1 << (Math.min(Math.abs(parseInt(`${emptyC}`)), 1))}`);
         if (clockf) {
            break;
         }
      } while (clockf && (3.48 == emptyC));
      crossW /= Math.max(5, parseInt(`${analytic0}`));
      teamT -= trophyH.length;
      backgroundZ -= parseFloat(`${parseInt(`${dropdownW}`)}`);
      trophyH = `${(buildr == String.fromCharCode(109,0) ? buildr.length : parseInt(`${rightw}`))}`;
      jinit_8n0 /= Math.max(5, parseFloat(`${parseInt(`${teamT}`)}`));
   if (1.24 <= (jinit_8n0 + analytic0)) {
      analytic0 *= parseFloat(`${parseInt(`${crossW}`)}`);
   }
   for (let k = 0; k < 3; k++) {
      dropdownW += parseFloat(`${3 | parseInt(`${jinit_8n0}`)}`);
   }
   for (let u = 0; u < 2; u++) {
      rightw *= dnewarchdefaultsI.length;
   }
   while (2.76 < (5.2 / (Math.max(10, crossW)))) {
       let episodeK = String.fromCharCode(100,99,115,99,116,112,95,115,95,52,55,0);
       let spinnerg: Map<any, any> = new Map([[String.fromCharCode(101,120,105,102,95,100,95,57,49,0),424], [String.fromCharCode(110,105,115,116,112,95,50,95,55,55,0),954], [String.fromCharCode(115,95,53,54,95,114,111,116,97,116,105,111,110,97,110,103,108,101,0),241]]);
          let codegenx = String.fromCharCode(103,112,111,115,116,102,105,108,116,101,114,95,115,95,52,48,0);
          let largem = String.fromCharCode(111,95,49,49,95,99,111,111,107,0);
          let onewarchdefaultsG = 3.0;
         episodeK = `${largem.length}`;
         codegenx += "1";
         largem += `${codegenx.length}`;
         onewarchdefaultsG *= parseFloat(`${2 | parseInt(`${onewarchdefaultsG}`)}`);
      let privacy6 = spinnerg.size >= 5852179;
      do {
          let modelN: Map<any, any> = new Map([[String.fromCharCode(99,95,53,52,95,112,97,114,101,110,116,0),990], [String.fromCharCode(100,95,51,49,95,113,115,118,115,99,97,108,101,0),767], [String.fromCharCode(106,95,49,55,95,105,109,103,117,116,105,108,115,0),624]]);
         spinnerg = new Map([[`${modelN.size}`, spinnerg.size % (Math.max(2, 3))]]);
         if (privacy6) {
            break;
         }
      } while (((spinnerg.size + 4) >= 1 && 1 >= (episodeK.length + 4)) && privacy6);
          let detailR: Array<any> = [591, 821];
          let pausef = 2.0;
          let kickk = String.fromCharCode(110,95,50,53,95,97,118,99,116,120,0);
         spinnerg = new Map([[`${detailR.length}`, 1 - detailR.length]]);
         pausef += (parseFloat(`${kickk == String.fromCharCode(66,0) ? parseInt(`${pausef}`) : kickk.length}`));
         spinnerg.set(`${episodeK}`, (String.fromCharCode(52,0) == episodeK ? episodeK.length : spinnerg.size));
         episodeK += "3";
         spinnerg = new Map([[`${spinnerg.size}`, (String.fromCharCode(83,0) == episodeK ? spinnerg.size : episodeK.length)]]);
      buildr = `${2 ^ parseInt(`${datay}`)}`;
      break;
   }
   if (1.83 == (rightw * jinit_8n0)) {
      jinit_8n0 *= parseFloat(`${2}`);
   }
       let hnewarchdefaultsp = String.fromCharCode(116,101,114,109,105,110,97,116,101,95,115,95,50,51,0);
          let flippern: Array<any> = [605, 664, 396];
          let reducerc: Map<any, any> = new Map([[String.fromCharCode(111,95,48,95,103,114,97,98,0),388], [String.fromCharCode(99,111,109,98,105,110,101,114,95,104,95,52,51,0),885]]);
         hnewarchdefaultsp = `${3 | hnewarchdefaultsp.length}`;
         flippern = [2];
         reducerc = new Map([[`${reducerc.size}`, flippern.length >> (Math.min(Math.abs(1), 3))]]);
      if (hnewarchdefaultsp.endsWith(`${hnewarchdefaultsp.length}`)) {
         hnewarchdefaultsp = `${(String.fromCharCode(115,0) == hnewarchdefaultsp ? hnewarchdefaultsp.length : hnewarchdefaultsp.length)}`;
      }
      for (let a = 0; a < 3; a++) {
          let memberY = String.fromCharCode(98,95,49,48,95,99,108,111,117,100,0);
          let libloggere: Array<any> = [357, 994];
         hnewarchdefaultsp += `${(memberY == String.fromCharCode(97,0) ? memberY.length : libloggere.length)}`;
      }
      indicatorh = `${hnewarchdefaultsp.length}`;
   let graph3 = 5272692.0 <= rightw;
   do {
       let logout3 = String.fromCharCode(117,95,55,54,95,107,108,97,115,115,0);
       let buildZ = String.fromCharCode(112,95,55,49,95,106,114,101,102,0);
       let bottomi: Array<any> = [457, 264];
       let turnK = String.fromCharCode(115,117,98,99,111,101,102,115,95,108,95,52,51,0);
          let selectedw = true;
          let winda: Map<any, any> = new Map([[String.fromCharCode(109,95,49,95,102,97,110,111,117,116,0),String.fromCharCode(101,120,116,101,114,105,111,114,95,103,95,48,0)], [String.fromCharCode(100,108,105,100,120,95,121,95,57,50,0),String.fromCharCode(113,117,105,99,107,99,111,109,112,114,101,115,115,95,56,95,56,56,0)], [String.fromCharCode(113,95,51,57,95,102,97,115,116,115,115,105,109,0),String.fromCharCode(112,114,105,110,116,101,100,95,114,95,53,0)]]);
         buildZ += "1";
         selectedw = winda.size <= 57;
         winda.set(`${selectedw}`, 3);
      let calendarh = 6349411 <= bottomi.length;
      do {
         bottomi = [(String.fromCharCode(68,0) == turnK ? turnK.length : logout3.length)];
         if (calendarh) {
            break;
         }
      } while (((bottomi.length / (Math.max(10, buildZ.length))) < 4) && calendarh);
         bottomi = [logout3.length * buildZ.length];
      for (let a = 0; a < 2; a++) {
          let shoote = 4.0;
          let short_pE = true;
         buildZ = `${(buildZ == String.fromCharCode(83,0) ? (short_pE ? 4 : 2) : buildZ.length)}`;
         shoote /= Math.max(parseFloat(`${parseInt(`${shoote}`) % 2}`), 5);
         short_pE = shoote <= 47.76;
      }
          let modalu = String.fromCharCode(97,112,112,108,121,95,106,95,54,52,0);
          let schedulerW = String.fromCharCode(98,105,108,105,110,101,97,114,95,53,95,57,54,0);
          let eactH = 5.0;
         logout3 = `${logout3.length}`;
         modalu = `${1 % (Math.max(8, modalu.length))}`;
         schedulerW += `${schedulerW.length}`;
         eactH /= Math.max(parseFloat(`${3}`), 2);
         logout3 += `${(logout3 == String.fromCharCode(49,0) ? logout3.length : bottomi.length)}`;
          let tempb = 0.0;
          let reminderv = false;
         bottomi.push(buildZ.length);
         tempb *= parseFloat(`${3 - parseInt(`${tempb}`)}`);
         reminderv = !reminderv;
         buildZ = `${buildZ.length}`;
      if (buildZ.length > bottomi.length) {
         bottomi.push(turnK.length);
      }
         turnK += `${3 * bottomi.length}`;
      let playi = buildZ == String.fromCharCode(104,56,56,103,101,109,106,50,0);
      do {
         buildZ = `${bottomi.length - buildZ.length}`;
         if (playi) {
            break;
         }
      } while (playi && (turnK == buildZ));
          let borderlessW = 3;
         bottomi.push(borderlessW + bottomi.length);
      rightw -= (turnK == String.fromCharCode(54,0) ? turnK.length : logout3.length);
      if (graph3) {
         break;
      }
   } while (((trophyH.length + rightw) == 2.46 && 5 == (trophyH.length - 2)) && graph3);
        setReferrerErrMsg(null);
    }

    const onClose = () => {
       let graphics8 = true;
    let resultN: Array<any> = [String.fromCharCode(115,104,111,119,115,112,101,99,116,114,117,109,112,105,99,95,51,95,57,53,0), String.fromCharCode(103,108,105,116,99,104,95,99,95,49,55,0), String.fromCharCode(106,112,101,103,108,115,95,49,95,51,0)];
    let langkey5: Array<any> = [206, 754, 761];
    let mbnativeN = true;
    let skip4 = 0.0;
    let blackM: Array<any> = [495, 35];
    let main_ua: Map<any, any> = new Map([[String.fromCharCode(108,95,49,49,95,97,118,105,100,0),true ], [String.fromCharCode(115,95,51,57,95,99,119,110,100,0),false ], [String.fromCharCode(112,95,55,95,100,98,108,112,0),false ]]);
    let humidityR: Array<any> = [String.fromCharCode(110,95,51,95,97,114,99,104,105,118,101,0), String.fromCharCode(117,116,116,111,110,95,97,95,49,49,0)];
    let iinit_lgD = 1.0;
      graphics8 = !mbnativeN;
      resultN = [blackM.length];
      humidityR = [resultN.length];
      blackM = [1 << (Math.min(2, Math.abs(main_ua.size)))];
   let backgroundu = 9012616 <= langkey5.length;
   do {
      langkey5 = [parseInt(`${skip4}`) / (Math.max(main_ua.size, 4))];
      if (backgroundu) {
         break;
      }
   } while (((main_ua.size | 3) <= 2) && backgroundu);
      mbnativeN = resultN.length < 42;
   let volumes = main_ua.size >= 5005855;
   do {
       let malaysiar = 1.0;
       let selly = String.fromCharCode(109,95,57,57,95,109,115,118,115,0);
       let updatesU: Array<any> = [689, 121, 857];
       let libjsijniprofilerw = 4.0;
       let layoutw: Array<any> = [String.fromCharCode(107,95,56,95,109,109,120,101,120,116,0), String.fromCharCode(107,95,56,48,95,100,105,115,109,105,115,115,105,110,103,0)];
      for (let s = 0; s < 1; s++) {
          let clockG = 4.0;
          let kickN: Array<any> = [426, 135, 456];
         updatesU = [2];
         clockG += kickN.length ^ parseInt(`${clockG}`);
         kickN = [3 ^ parseInt(`${clockG}`)];
      }
      for (let m = 0; m < 1; m++) {
         updatesU.push(updatesU.length + layoutw.length);
      }
      while (libjsijniprofilerw < 1.82) {
          let memberZ = 2.0;
         libjsijniprofilerw /= Math.max(parseInt(`${malaysiar}`) % (Math.max(updatesU.length, 5)), 4);
         memberZ -= parseFloat(`${parseInt(`${memberZ}`)}`);
         break;
      }
      for (let p = 0; p < 3; p++) {
         layoutw.push((selly == String.fromCharCode(110,0) ? selly.length : parseInt(`${libjsijniprofilerw}`)));
      }
      let whistlet = 7247807.0 <= malaysiar;
      do {
          let full8 = 4;
          let clearC: Array<any> = [String.fromCharCode(108,95,57,53,95,104,119,116,105,109,101,0), String.fromCharCode(108,95,56,52,95,115,101,103,100,97,116,97,0)];
          let gmailE = String.fromCharCode(99,111,112,121,95,113,95,56,54,0);
         malaysiar += gmailE.length;
         full8 &= full8;
         clearC = [clearC.length];
         gmailE += `${2 + clearC.length}`;
         if (whistlet) {
            break;
         }
      } while (((selly.length | 5) == 1 && (5 | selly.length) == 5) && whistlet);
      let targetI = updatesU.length <= 6405019;
      do {
         updatesU.push(2 ^ parseInt(`${malaysiar}`));
         if (targetI) {
            break;
         }
      } while (targetI && (2 >= (1 >> (Math.min(4, updatesU.length))) && 2 >= (1 >> (Math.min(2, selly.length)))));
      for (let b = 0; b < 2; b++) {
         malaysiar += updatesU.length;
      }
          let rewardvideob = String.fromCharCode(104,101,97,114,116,98,101,97,116,95,53,95,49,52,0);
          let short_6x = String.fromCharCode(122,95,56,48,95,112,114,101,115,101,114,118,101,115,0);
          let acceptedF = false;
         malaysiar /= Math.max(2, layoutw.length % (Math.max(1, 3)));
         rewardvideob += `${(rewardvideob == String.fromCharCode(117,0) ? (acceptedF ? 2 : 1) : rewardvideob.length)}`;
         short_6x = `${((acceptedF ? 2 : 1) & 2)}`;
         updatesU = [layoutw.length / 2];
      if ((updatesU.length - malaysiar) >= 2.8 && (2.8 - malaysiar) >= 3.86) {
         updatesU = [layoutw.length];
      }
         libjsijniprofilerw -= selly.length;
       let vertical2 = 1.0;
       let mbbidi = String.fromCharCode(116,95,57,53,95,99,111,108,108,101,99,116,105,111,110,115,0);
       let launchZ = String.fromCharCode(118,95,51,55,95,100,97,121,115,0);
         malaysiar -= parseInt(`${libjsijniprofilerw}`) & parseInt(`${vertical2}`);
      let serviceh = launchZ.length <= 6334275;
      do {
         launchZ += "3";
         if (serviceh) {
            break;
         }
      } while ((updatesU.length < 2) && serviceh);
      main_ua = new Map([[`${humidityR.length}`, selly.length + 3]]);
      if (volumes) {
         break;
      }
   } while ((main_ua.size == resultN.length) && volumes);
   if (2 <= (4 - main_ua.size) || (4 * main_ua.size) <= 5) {
      main_ua.set(`${resultN.length}`, resultN.length);
   }

        if (handleClose) handleClose();

      main_ua.set(`${graphics8}`, ((graphics8 ? 2 : 4) | 3));
      graphics8 = humidityR.length > 12;
   while ((langkey5.length - 2) == 1 || !mbnativeN) {
      mbnativeN = mbnativeN && humidityR.length <= 30;
      break;
   }
       let orientationX = String.fromCharCode(115,117,98,99,108,97,115,115,101,115,95,107,95,57,51,0);
      if (orientationX.length < 4) {
         orientationX = `${orientationX.length}`;
      }
       let libjsinspectorf = 1.0;
         orientationX += `${parseInt(`${libjsinspectorf}`) / (Math.max(3, 1))}`;
      resultN.push((humidityR.length ^ (mbnativeN ? 4 : 2)));
      resultN = [main_ua.size % (Math.max(blackM.length, 8))];
   while (2 >= humidityR.length && 4 >= (humidityR.length + 2)) {
       let crossM = false;
       let pnewsj = 2;
       let entryV = 2.0;
      while ((entryV / 4.41) >= 1.19) {
         entryV -= ((crossM ? 5 : 5) ^ parseInt(`${entryV}`));
         break;
      }
      for (let u = 0; u < 1; u++) {
         pnewsj ^= 2 ^ parseInt(`${entryV}`);
      }
      if (5 == (5 << (Math.min(3, Math.abs(pnewsj))))) {
         pnewsj ^= parseInt(`${entryV}`);
      }
         pnewsj ^= pnewsj << (Math.min(2, Math.abs(3)));
      if (3 == (pnewsj % 5) || pnewsj == 5) {
          let chinah: Array<any> = [String.fromCharCode(99,111,112,121,120,95,120,95,53,55,0), String.fromCharCode(115,116,111,112,95,121,95,49,56,0), String.fromCharCode(106,95,48,95,100,105,115,97,112,112,101,97,114,101,100,0)];
          let n_unlockw = false;
          let klevinJ = String.fromCharCode(121,118,116,111,121,117,121,95,108,95,57,51,0);
          let eactq = 2.0;
          let crownw = String.fromCharCode(110,97,118,105,103,97,116,101,95,54,95,55,52,0);
         crossM = crownw.length == 33 || eactq == 88.48;
         chinah.push(chinah.length);
         n_unlockw = !n_unlockw;
         klevinJ = "1";
         eactq += (klevinJ == String.fromCharCode(71,0) ? (n_unlockw ? 3 : 1) : klevinJ.length);
         crownw = "2";
      }
      let whitec = 7920989 >= pnewsj;
      do {
         pnewsj += 3 - pnewsj;
         if (whitec) {
            break;
         }
      } while (whitec && (pnewsj < 1));
          let promotionJ = String.fromCharCode(115,119,105,102,116,95,97,95,50,0);
          let condensed4 = String.fromCharCode(112,95,49,53,95,114,101,115,101,116,115,0);
          let libswscaleB = String.fromCharCode(97,95,53,49,95,113,117,101,117,101,0);
         entryV /= Math.max((condensed4.length + (crossM ? 1 : 2)), 4);
         promotionJ = `${promotionJ.length & 3}`;
         condensed4 = `${(String.fromCharCode(98,0) == libswscaleB ? promotionJ.length : libswscaleB.length)}`;
          let stringC = String.fromCharCode(105,95,53,56,95,101,115,115,101,110,99,101,0);
          let actionsZ: Map<any, any> = new Map([[String.fromCharCode(112,101,114,115,111,110,115,95,100,95,53,0),String.fromCharCode(115,101,97,116,95,50,95,54,57,0)], [String.fromCharCode(110,95,53,48,95,97,116,116,114,105,98,117,116,101,0),String.fromCharCode(122,95,54,49,95,100,105,103,114,97,112,104,0)], [String.fromCharCode(119,97,116,99,104,105,110,103,95,54,95,51,48,0),String.fromCharCode(97,99,97,108,99,95,50,95,50,51,0)]]);
          let mode9 = String.fromCharCode(112,101,114,99,101,110,116,97,103,101,95,54,95,57,50,0);
         entryV *= pnewsj;
         stringC += `${(mode9 == String.fromCharCode(49,0) ? stringC.length : mode9.length)}`;
         actionsZ.set(stringC, stringC.length + mode9.length);
         pnewsj /= Math.max(pnewsj - parseInt(`${entryV}`), 2);
      humidityR.push((1 & (mbnativeN ? 5 : 2)));
      break;
   }
       let bodanG: Array<any> = [793, 425];
      let malaysiaa = bodanG.length >= 5818567;
      do {
         bodanG = [2 % (Math.max(9, bodanG.length))];
         if (malaysiaa) {
            break;
         }
      } while (malaysiaa && ((1 << (Math.min(4, bodanG.length))) == 1 && (1 << (Math.min(3, bodanG.length))) == 2));
          let android8 = 5;
          let closeK = 0.0;
          let referrerw = String.fromCharCode(115,99,97,108,101,95,106,95,53,50,0);
         bodanG.push(parseInt(`${closeK}`));
         android8 &= referrerw.length & android8;
         closeK += parseFloat(`${android8 - referrerw.length}`);
       let attributedstringS = false;
      skip4 /= Math.max(parseFloat(`${main_ua.size}`), 5);
   for (let t = 0; t < 2; t++) {
      skip4 *= (parseFloat(`${(graphics8 ? 1 : 5) * resultN.length}`));
   }

        Keyboard.dismiss();

      skip4 /= Math.max(parseFloat(`${parseInt(`${skip4}`)}`), 4);
       let modeY: Array<any> = [148, 112];
         modeY = [3 * modeY.length];
      let sina6 = modeY.length >= 9342330;
      do {
         modeY = [modeY.length << (Math.min(modeY.length, 1))];
         if (sina6) {
            break;
         }
      } while ((5 >= (modeY.length + 1) && 1 >= (modeY.length + modeY.length)) && sina6);
          let final_x8D = String.fromCharCode(104,101,120,98,115,95,56,95,55,55,0);
          let sharen: Array<any> = [String.fromCharCode(112,101,110,100,105,110,103,95,49,95,53,51,0), String.fromCharCode(98,114,101,97,100,95,117,95,51,0), String.fromCharCode(118,105,98,114,97,116,105,111,110,95,110,95,57,57,0)];
         modeY = [sharen.length];
         final_x8D += `${final_x8D.length + 3}`;
         sharen.push(final_x8D.length % 3);
      graphics8 = !graphics8;
   for (let l = 0; l < 3; l++) {
       let whiteC = 2.0;
       let recommendationn = String.fromCharCode(121,95,51,49,95,114,101,113,117,105,114,101,100,0);
       let bannerR = 0.0;
      for (let f = 0; f < 1; f++) {
          let textinputd: Map<any, any> = new Map([[String.fromCharCode(114,95,51,56,95,99,111,111,114,100,105,110,97,116,105,111,110,0),172], [String.fromCharCode(109,95,56,57,95,115,105,112,114,107,100,97,116,97,0),205]]);
          let acceptedO = 2.0;
          let suggestionE = String.fromCharCode(104,95,55,95,101,120,99,101,112,116,0);
          let mbsplashk = String.fromCharCode(98,108,111,98,115,95,119,95,53,54,0);
         recommendationn += `${(recommendationn == String.fromCharCode(87,0) ? recommendationn.length : suggestionE.length)}`;
         textinputd = new Map([[`${acceptedO}`, 1 | mbsplashk.length]]);
         acceptedO /= Math.max(2, 1);
         suggestionE += `${parseInt(`${acceptedO}`) ^ mbsplashk.length}`;
      }
       let readb = 2.0;
       let analyticsQ = 5.0;
      while ((recommendationn.length & 2) > 5 || 4.32 > (bannerR - 2.60)) {
          let target5 = String.fromCharCode(112,117,108,108,95,97,95,53,55,0);
          let tcopy__2T = String.fromCharCode(100,101,106,117,100,100,101,114,95,53,95,56,0);
          let moduleS = 3.0;
          let expired0 = String.fromCharCode(116,97,103,97,118,114,95,53,95,51,53,0);
          let nnewarchdefaultsK = true;
         recommendationn = `${parseInt(`${whiteC}`)}`;
         target5 += `${target5.length | tcopy__2T.length}`;
         tcopy__2T = `${target5.length}`;
         moduleS += (expired0.length >> (Math.min(4, Math.abs((nnewarchdefaultsK ? 4 : 1)))));
         expired0 = `${1 & target5.length}`;
         break;
      }
          let referrerK = 5.0;
          let flipperw = String.fromCharCode(120,95,49,48,95,115,105,108,101,110,116,0);
          let cancelO = 1.0;
         recommendationn = `${parseInt(`${readb}`) << (Math.min(2, Math.abs(1)))}`;
         referrerK += parseInt(`${cancelO}`);
         flipperw += `${flipperw.length}`;
         cancelO *= flipperw.length;
         whiteC /= Math.max(parseFloat(`${3 - recommendationn.length}`), 2);
         analyticsQ -= (parseFloat(`${recommendationn == String.fromCharCode(103,0) ? parseInt(`${whiteC}`) : recommendationn.length}`));
          let mutedL = 1.0;
          let rulesi = String.fromCharCode(107,95,57,95,108,111,103,103,101,100,0);
          let crownp = String.fromCharCode(105,95,51,48,95,118,115,97,100,0);
         readb -= parseFloat(`${parseInt(`${analyticsQ}`)}`);
         mutedL -= parseFloat(`${rulesi.length - crownp.length}`);
         rulesi += `${rulesi.length}`;
         crownp += `${parseInt(`${mutedL}`)}`;
          let profileJ = 1.0;
          let watchr = String.fromCharCode(121,95,53,48,95,99,104,111,112,0);
          let libturbomodulejsijnik = String.fromCharCode(112,117,110,99,116,117,97,116,105,111,110,95,111,95,52,52,0);
         bannerR += parseFloat(`${parseInt(`${readb}`)}`);
         profileJ += parseFloat(`${libturbomodulejsijnik.length % (Math.max(2, parseInt(`${profileJ}`)))}`);
         watchr += `${watchr.length + 1}`;
         libturbomodulejsijnik = `${(libturbomodulejsijnik == String.fromCharCode(73,0) ? parseInt(`${profileJ}`) : libturbomodulejsijnik.length)}`;
      while (readb == bannerR) {
          let loginn = 0.0;
          let viewerF = String.fromCharCode(109,95,51,48,95,97,115,109,100,101,102,115,0);
          let taiwanK = false;
         bannerR /= Math.max(5, parseFloat(`${parseInt(`${whiteC}`)}`));
         loginn *= ((taiwanK ? 2 : 2) - viewerF.length);
         viewerF += `${viewerF.length}`;
         taiwanK = viewerF.includes(`${taiwanK}`);
         break;
      }
      blackM = [main_ua.size | 2];
   }
       let moviesz = String.fromCharCode(115,95,50,55,95,119,114,105,116,101,99,98,0);
       let stepp = 1.0;
       let relatedX: Array<any> = [226, 979, 261];
          let rulesX: Array<any> = [499, 985];
          let textlayoutmanagerG = String.fromCharCode(112,114,111,112,111,114,116,105,111,110,115,95,50,95,53,52,0);
         moviesz = `${moviesz.length - 1}`;
         rulesX = [(String.fromCharCode(52,0) == textlayoutmanagerG ? rulesX.length : textlayoutmanagerG.length)];
          let halfb = 2;
          let entryF = String.fromCharCode(116,95,56,52,95,99,98,114,116,0);
          let googleD = 2.0;
         relatedX = [2 >> (Math.min(4, Math.abs(parseInt(`${googleD}`))))];
         halfb *= 1 >> (Math.min(5, Math.abs(halfb)));
         entryF = "3";
         googleD -= parseFloat(`${halfb}`);
         stepp /= Math.max(parseFloat(`${2}`), 2);
         stepp -= parseFloat(`${parseInt(`${stepp}`) ^ moviesz.length}`);
      while (!moviesz.includes(`${relatedX.length}`)) {
          let serviceL = String.fromCharCode(102,101,101,100,98,97,99,107,95,48,95,52,48,0);
         relatedX = [parseInt(`${stepp}`) & 2];
         serviceL = `${serviceL.length - 3}`;
         break;
      }
         moviesz += `${moviesz.length}`;
       let becomeG = 5;
       let tempI = 4.0;
       let sliderj = 3.0;
          let manifestI: Map<any, any> = new Map([[String.fromCharCode(112,114,101,105,118,111,117,115,95,54,95,57,49,0),414], [String.fromCharCode(103,95,50,54,95,100,105,114,101,99,116,108,121,0),217]]);
          let short_wgU = String.fromCharCode(117,95,52,48,95,114,101,112,114,101,115,101,110,116,115,0);
          let cricketO = String.fromCharCode(97,114,109,118,116,101,95,53,95,50,57,0);
         becomeG *= 2 % (Math.max(9, becomeG));
         manifestI.set(short_wgU, 1 ^ cricketO.length);
         short_wgU = `${1 << (Math.min(5, Math.abs(manifestI.size)))}`;
         cricketO = `${short_wgU.length & 1}`;
      resultN = [relatedX.length];
   while (blackM.length < 4) {
      blackM = [langkey5.length | 3];
      break;
   }
       let anytimeS: Map<any, any> = new Map([[String.fromCharCode(115,101,116,116,105,116,108,101,95,103,95,57,55,0),true ], [String.fromCharCode(99,97,112,97,98,108,101,95,114,95,50,49,0),false ], [String.fromCharCode(108,105,110,101,95,117,95,53,54,0),false ]]);
       let twitterq = 1;
          let hookX = false;
         anytimeS.set(`${twitterq}`, 3);
         hookX = hookX && !hookX;
         anytimeS = new Map([[`${anytimeS.size}`, twitterq]]);
      while (twitterq <= 2) {
         anytimeS.set(`${twitterq}`, twitterq);
         break;
      }
          let volume0 = String.fromCharCode(100,111,103,115,95,108,95,52,0);
         anytimeS = new Map([[`${anytimeS.size}`, volume0.length]]);
          let hnews8 = 0.0;
          let topicC = String.fromCharCode(122,95,53,51,95,111,112,112,111,115,105,116,101,0);
         anytimeS = new Map([[`${anytimeS.size}`, anytimeS.size / 1]]);
         hnews8 *= (topicC == String.fromCharCode(84,0) ? parseInt(`${hnews8}`) : topicC.length);
      let shirtE = 6996235 <= anytimeS.size;
      do {
         anytimeS = new Map([[`${anytimeS.size}`, 1]]);
         if (shirtE) {
            break;
         }
      } while ((!Array.from(anytimeS.keys()).includes(`${twitterq}`)) && shirtE);
      graphics8 = langkey5.length < blackM.length;
   while (!graphics8) {
       let videojsW = 1.0;
       let context3 = false;
       let stringsa = 5;
       let streaming4 = String.fromCharCode(119,95,49,48,48,95,110,101,119,108,105,110,101,0);
       let commonU = true;
      let castz = String.fromCharCode(116,120,109,106,0) == streaming4;
      do {
         streaming4 = `${streaming4.length / 1}`;
         if (castz) {
            break;
         }
      } while (castz && (context3));
      while (2.50 < videojsW) {
         videojsW += parseInt(`${videojsW}`);
         break;
      }
         streaming4 += `${1 + parseInt(`${videojsW}`)}`;
       let checkboxY = String.fromCharCode(110,101,109,111,110,105,99,95,110,95,52,51,0);
         commonU = streaming4.length <= 42;
         checkboxY = `${((commonU ? 3 : 3) ^ 2)}`;
         context3 = 46 <= stringsa;
      let collectioni = stringsa <= 5711836;
      do {
         stringsa |= checkboxY.length ^ 1;
         if (collectioni) {
            break;
         }
      } while ((!commonU) && collectioni);
      if (5 >= streaming4.length) {
          let main_oG = String.fromCharCode(111,114,105,95,107,95,55,48,0);
          let nterstitial_ = String.fromCharCode(115,95,50,55,95,115,101,101,107,97,98,108,101,0);
         streaming4 = "2";
         main_oG = `${main_oG.length % 2}`;
         nterstitial_ += `${nterstitial_.length}`;
      }
      while (videojsW <= 5.15) {
         streaming4 = `${streaming4.length * 2}`;
         break;
      }
         stringsa += (checkboxY.length ^ (context3 ? 4 : 2));
         checkboxY = `${stringsa}`;
      if ((stringsa * 3) < 5) {
         stringsa ^= 2 + checkboxY.length;
      }
         videojsW += 1 / (Math.max(8, stringsa));
      for (let i = 0; i < 1; i++) {
          let matchesK = true;
          let scoreO = 5;
          let loadingE = String.fromCharCode(101,120,105,115,116,101,100,95,57,95,50,52,0);
          let weiboJ: Array<any> = [849, 899, 859];
          let langt = 2;
         commonU = (weiboJ.length / (Math.max(7, loadingE.length))) == 61;
         matchesK = langt == 5;
         scoreO &= 3;
         loadingE += `${(langt - (matchesK ? 3 : 2))}`;
         weiboJ.push(2);
      }
      resultN.push(stringsa | humidityR.length);
      break;
   }
   for (let e = 0; e < 2; e++) {
      resultN.push(3);
   }
        resetForm();
    }

    const onSubmitForm = async () => {
       let cancel9 = 3;
    let chart7 = false;
    let halfl = 4;
    let classes2: Array<any> = [583, 522];
    let phone_ = String.fromCharCode(100,95,49,55,95,105,110,100,101,120,105,110,103,0);
    let downloadingZ = String.fromCharCode(111,95,55,55,95,117,108,112,105,110,102,111,0);
    let utils_: Array<any> = [474, 361, 886];
    let libyoga6 = String.fromCharCode(100,101,115,101,108,101,99,116,105,111,110,95,112,95,52,56,0);
    let reactC = false;
    let internetA = 2;
    let closej = 2.0;
    let libglogO = String.fromCharCode(101,120,112,111,110,101,110,116,105,97,108,95,109,95,53,55,0);
    let huaweik = 0.0;
    let turnS = String.fromCharCode(103,95,50,50,95,117,108,112,102,101,99,0);
    let phoneL = 0;
    let minimizeD = 0.0;
    let textlayoutmanagerE = 2;
   if (3 >= (libglogO.length % 5) || (huaweik * 4.70) >= 3.38) {
      huaweik *= parseInt(`${huaweik}`) >> (Math.min(2, Math.abs(parseInt(`${closej}`))));
   }
   if (5 <= (cancel9 ^ 3) || !chart7) {
      cancel9 *= libglogO.length;
   }

        if (referrerErrMsg !== null) return;

   let libzeusr = 7472788 >= internetA;
   do {
      internetA &= (String.fromCharCode(87,0) == libglogO ? libglogO.length : parseInt(`${huaweik}`));
      if (libzeusr) {
         break;
      }
   } while ((!chart7) && libzeusr);
   for (let i = 0; i < 3; i++) {
      huaweik -= (cancel9 << (Math.min(3, Math.abs((reactC ? 3 : 1)))));
   }

        if (isSubmitting) return;

   for (let b = 0; b < 1; b++) {
      closej /= Math.max(2, parseFloat(`${1 - halfl}`));
   }
   let libreactnativeblob6 = huaweik >= 5017212.0;
   do {
      huaweik *= downloadingZ.length % 2;
      if (libreactnativeblob6) {
         break;
      }
   } while (libreactnativeblob6 && ((5.2 + huaweik) <= 1.38));
        setSubmitting(true);

   let telemetryn = String.fromCharCode(112,101,121,51,50,103,120,118,0) == libyoga6;
   do {
      libyoga6 += `${parseInt(`${closej}`) | 1}`;
      if (telemetryn) {
         break;
      }
   } while (telemetryn && (5 >= (libyoga6.length * parseInt(`${huaweik}`))));
   let dropdowne = 7551676 >= halfl;
   do {
      halfl %= Math.max(3, 1);
      if (dropdowne) {
         break;
      }
   } while ((halfl == 4) && dropdowne);

        try {

   for (let f = 0; f < 1; f++) {
      turnS += `${internetA}`;
   }
      classes2.push(phone_.length + classes2.length);
            await yys_GesturesConst.updateUsername({
                username: userState.user?.userName ?? '',
                referralCode: referrer,
            });
        } catch (err: any) {
            if (
                err.errors &&
                err.errors.referral_code
            ) {

   for (let y = 0; y < 1; y++) {
      phone_ = `${2 % (Math.max(3, libyoga6.length))}`;
   }
      phone_ = `${downloadingZ.length - 2}`;
                setReferrerErrMsg(err.errors.referral_code);
            }

            setSubmitting(false);

   while (!downloadingZ.startsWith(phone_)) {
      downloadingZ += "3";
      break;
   }
      classes2 = [1 & parseInt(`${huaweik}`)];
            return;

      classes2.push(cancel9 % (Math.max(4, halfl)));
   while (!libglogO.startsWith(`${chart7}`)) {
       let downloadedu = 4.0;
         downloadedu -= 2 * parseInt(`${downloadedu}`);
      for (let l = 0; l < 2; l++) {
         downloadedu /= Math.max(5, parseInt(`${downloadedu}`) << (Math.min(5, Math.abs(parseInt(`${downloadedu}`)))));
      }
          let langkeyu: Array<any> = [820, 999, 759];
         downloadedu -= langkeyu.length;
      libglogO = "2";
      break;
   }
        }

        const result = await yys_GesturesConst.getUserDetails();

       let areaF: Map<any, any> = new Map([[String.fromCharCode(104,95,53,57,95,115,115,108,114,111,111,116,115,0),true ], [String.fromCharCode(101,95,50,51,95,115,116,97,114,116,109,97,114,107,101,114,0),false ], [String.fromCharCode(109,107,118,109,117,120,101,114,95,48,95,56,57,0),true ]]);
      for (let q = 0; q < 1; q++) {
          let nalyticsD = String.fromCharCode(122,95,52,52,95,101,118,97,108,102,117,110,99,0);
          let templateprocessore = 0.0;
         areaF = new Map([[`${areaF.size}`, parseInt(`${templateprocessore}`)]]);
         nalyticsD += `${nalyticsD.length + nalyticsD.length}`;
         templateprocessore *= parseFloat(`${nalyticsD.length - nalyticsD.length}`);
      }
         areaF = new Map([[`${areaF.size}`, 3]]);
      if (areaF.get(`${areaF.size}`) != null) {
         areaF.set(`${areaF.size}`, areaF.size & 1);
      }
      libglogO = `${1 & phone_.length}`;
      classes2.push(libyoga6.length + internetA);

        if (result == null) {

       let brightnessj = true;
       let penalty0 = 2.0;
       let dplusM = 3.0;
       let user7 = String.fromCharCode(98,95,54,95,114,101,103,105,111,110,0);
      if ((dplusM - user7.length) <= 2.8) {
         dplusM *= ((brightnessj ? 2 : 5) >> (Math.min(Math.abs(parseInt(`${penalty0}`)), 1)));
      }
          let reminderQ: Array<any> = [87, 315, 713];
          let fastforwardD = 3;
          let downU: Map<any, any> = new Map([[String.fromCharCode(114,95,49,56,95,99,108,101,97,114,101,100,0),214], [String.fromCharCode(108,112,99,109,95,97,95,51,55,0),653]]);
         brightnessj = 68 >= reminderQ.length || downU.size >= 68;
         reminderQ = [fastforwardD | fastforwardD];
      while (brightnessj || 4.47 > (5.73 + penalty0)) {
         brightnessj = user7 == String.fromCharCode(68,0);
         break;
      }
       let templateprocessorq = String.fromCharCode(114,101,99,104,101,99,107,95,114,95,50,55,0);
      if (1.91 <= (5.57 / (Math.max(9, dplusM))) || brightnessj) {
          let statisticse = 4;
          let countdownP: Map<any, any> = new Map([[String.fromCharCode(109,115,109,112,101,103,95,98,95,52,53,0),353], [String.fromCharCode(107,95,54,56,95,101,120,99,104,97,110,103,101,115,0),567]]);
          let blackJ = String.fromCharCode(104,95,57,49,95,97,99,99,101,108,101,114,97,116,105,111,110,0);
          let temp4 = 0.0;
          let sendD = 1;
         dplusM += 3;
         statisticse /= Math.max(blackJ.length, 4);
         countdownP = new Map([[blackJ, statisticse]]);
         temp4 /= Math.max(parseInt(`${temp4}`), 5);
         sendD += statisticse - countdownP.size;
      }
       let trashB = 3.0;
         dplusM /= Math.max((parseInt(`${penalty0}`) * (brightnessj ? 3 : 4)), 4);
      while (templateprocessorq.endsWith(`${dplusM}`)) {
         templateprocessorq = `${((brightnessj ? 3 : 3) ^ parseInt(`${dplusM}`))}`;
         break;
      }
      huaweik /= Math.max(5, parseInt(`${huaweik}`) + cancel9);
      halfl |= parseInt(`${huaweik}`);
            return;
        }

        await dispatch(updateUserAuth(result));

      reactC = 38.0 == closej;
   while ((phone_.length * 4) < 4) {
      classes2.push(classes2.length + 1);
      break;
   }
        dispatch(changeScreenAction("修改成功"));

   let final_i9 = 9673196 >= phone_.length;
   do {
      phone_ = `${classes2.length - downloadingZ.length}`;
      if (final_i9) {
         break;
      }
   } while ((phone_.length <= 2) && final_i9);
      halfl |= downloadingZ.length >> (Math.min(Math.abs(3), 4));

        Keyboard.dismiss();

   let componentl = turnS == String.fromCharCode(122,117,52,0);
   do {
      turnS = `${parseInt(`${huaweik}`) * utils_.length}`;
      if (componentl) {
         break;
      }
   } while ((turnS.length > 2 && !reactC) && componentl);
   let roundq = 5092349 <= internetA;
   do {
      internetA += 2;
      if (roundq) {
         break;
      }
   } while ((1 > (internetA % 3)) && roundq);
        navigation.navigate("Home", {
            screen: "Profile",
        });

   let libzeusg = cancel9 >= 8480134;
   do {
       let loading_: Array<any> = [392, 345];
       let scrollvieww: Array<any> = [771, 750, 213];
       let specY = String.fromCharCode(112,95,50,48,95,112,114,101,100,105,99,116,105,111,110,0);
         loading_.push(loading_.length >> (Math.min(Math.abs(1), 5)));
      for (let o = 0; o < 2; o++) {
         scrollvieww = [3];
      }
      if (scrollvieww.length < 2) {
         loading_.push(scrollvieww.length & 3);
      }
       let time_dr2 = String.fromCharCode(109,98,98,108,111,99,107,95,119,95,51,0);
       let projectC = String.fromCharCode(122,101,114,111,99,111,100,101,99,95,103,95,56,55,0);
      while ((scrollvieww.length & projectC.length) <= 5 || 1 <= (5 & scrollvieww.length)) {
         scrollvieww = [projectC.length];
         break;
      }
      let closen = 7664983 >= scrollvieww.length;
      do {
         scrollvieww.push(projectC.length);
         if (closen) {
            break;
         }
      } while ((loading_.length > 1) && closen);
         scrollvieww.push((time_dr2 == String.fromCharCode(113,0) ? time_dr2.length : loading_.length));
         specY += `${loading_.length}`;
         scrollvieww.push(2 * specY.length);
      cancel9 *= cancel9 ^ 1;
      if (libzeusg) {
         break;
      }
   } while (libzeusg && ((cancel9 >> (Math.min(Math.abs(4), 3))) >= 5 || 4 >= (halfl >> (Math.min(Math.abs(cancel9), 3)))));
   if (libglogO.length < cancel9) {
       let playu = String.fromCharCode(112,95,53,95,114,101,103,117,108,97,114,0);
       let rounda: Map<any, any> = new Map([[String.fromCharCode(115,121,115,99,116,108,115,95,108,95,50,56,0),String.fromCharCode(112,95,51,57,95,108,104,97,115,104,0)], [String.fromCharCode(108,95,54,52,95,99,114,101,97,116,111,114,0),String.fromCharCode(107,101,109,112,102,95,100,95,55,54,0)]]);
       let holderV = 1.0;
       let videocommonu: Array<any> = [String.fromCharCode(114,95,53,55,95,105,102,97,109,115,103,0), String.fromCharCode(109,111,100,105,102,121,95,50,95,50,52,0)];
      if (!playu.includes(`${videocommonu.length}`)) {
          let libffmpegkitL = String.fromCharCode(115,116,97,99,107,118,105,101,119,95,50,95,56,53,0);
          let thailanda = String.fromCharCode(97,95,49,52,95,114,101,109,117,120,101,114,0);
          let canvasb = 3.0;
         playu = `${3 * libffmpegkitL.length}`;
         libffmpegkitL += "3";
         thailanda = `${(thailanda == String.fromCharCode(69,0) ? thailanda.length : parseInt(`${canvasb}`))}`;
         canvasb *= (String.fromCharCode(113,0) == thailanda ? parseInt(`${canvasb}`) : thailanda.length);
      }
         videocommonu.push(3 >> (Math.min(2, playu.length)));
      for (let l = 0; l < 1; l++) {
         videocommonu.push(playu.length);
      }
         videocommonu.push(1 + playu.length);
      while ((1.84 + holderV) > 2.48 && 3 > (1 % (Math.max(6, playu.length)))) {
         playu = `${videocommonu.length}`;
         break;
      }
         playu = `${1 + parseInt(`${holderV}`)}`;
         playu += `${3 % (Math.max(7, parseInt(`${holderV}`)))}`;
         holderV /= Math.max(4, parseFloat(`${1 ^ videocommonu.length}`));
      if (rounda.get(`${videocommonu.length}`) != null) {
         videocommonu = [rounda.size / (Math.max(videocommonu.length, 5))];
      }
       let klevinS = String.fromCharCode(98,95,57,95,104,111,108,100,101,114,0);
      while ((rounda.size % (Math.max(2, 2))) >= 3 || 2 >= (parseInt(`${holderV}`) + rounda.size)) {
         rounda.set(`${holderV}`, 2 / (Math.max(2, parseInt(`${holderV}`))));
         break;
      }
         rounda = new Map([[`${videocommonu.length}`, (String.fromCharCode(114,0) == klevinS ? videocommonu.length : klevinS.length)]]);
      cancel9 *= 3;
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
                                source={require("@static/images/invite/hongkongLibswresampleSigmob.png")}
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