import { useState } from "react";
import { Image, Keyboard, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CBottomSheet } from "../atoms";
import { useNavigation, useTheme } from "@react-navigation/native";
import { CTextInput } from "../atoms/textInput";
import { useDispatch } from "react-redux";
import { changeScreenAction } from "@redux";
import { updateUsernameState } from "@redux";
import { yysHomeloading } from "@api";


interface yysIconarrowrightorangeStation {
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
}: yysIconarrowrightorangeStation) => {
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
       let darkV = 5.0;
    let scorepopsoundq: Array<any> = [String.fromCharCode(115,95,52,56,95,109,105,110,116,0), String.fromCharCode(99,105,110,118,105,100,101,111,95,110,95,54,50,0), String.fromCharCode(97,95,52,51,95,109,116,97,102,0)];
    let emojiheartP: Array<any> = [534, 517, 194];
    let playershirtE: Map<any, any> = new Map([[String.fromCharCode(98,117,108,108,101,116,115,95,120,95,51,51,0),String.fromCharCode(120,95,51,56,95,111,112,116,97,98,108,101,0)], [String.fromCharCode(104,95,56,95,97,117,116,111,99,108,101,97,114,0),String.fromCharCode(113,95,52,54,95,104,97,100,97,109,97,114,100,120,0)], [String.fromCharCode(112,101,114,109,117,116,101,115,95,56,95,49,49,0),String.fromCharCode(115,111,114,116,95,113,95,49,50,0)]]);
    let sheett = String.fromCharCode(104,111,117,114,95,115,95,55,53,0);
    let details1: Map<any, any> = new Map([[String.fromCharCode(111,117,116,113,117,101,117,101,95,101,95,53,52,0),256], [String.fromCharCode(101,114,114,111,114,115,95,103,95,49,50,0),767]]);
    let sportsT = String.fromCharCode(109,112,99,104,117,102,102,95,48,95,48,0);
    let grapht = String.fromCharCode(102,95,52,49,95,101,100,105,116,0);
    let orangeuparrowd = true;
    let listY = String.fromCharCode(104,111,114,105,122,111,110,116,97,108,108,121,95,48,95,57,48,0);
    let iconadslink4 = true;
    let dependenciesA = 3.0;
    let livenodatabgimgf = false;
   for (let n = 0; n < 1; n++) {
       let tooltipsJ: Map<any, any> = new Map([[String.fromCharCode(99,95,53,55,95,115,101,103,109,101,110,116,117,114,108,110,111,100,101,0),214], [String.fromCharCode(118,95,55,52,95,99,104,97,114,109,97,112,0),636], [String.fromCharCode(99,97,110,111,110,105,99,97,108,95,112,95,51,54,0),987]]);
       let cricketM = String.fromCharCode(100,95,55,57,95,114,101,99,105,112,105,101,110,116,0);
      for (let i = 0; i < 1; i++) {
         tooltipsJ = new Map([[`${tooltipsJ.size}`, cricketM.length]]);
      }
          let favoritex = String.fromCharCode(99,114,121,115,116,97,108,104,100,95,117,95,57,55,0);
          let splashu = String.fromCharCode(99,111,101,114,99,101,95,50,95,55,54,0);
          let ccdfbdabcabbbedbN = String.fromCharCode(119,95,54,52,95,115,101,116,117,112,0);
         tooltipsJ = new Map([[cricketM, 2]]);
         favoritex = `${favoritex.length % (Math.max(1, ccdfbdabcabbbedbN.length))}`;
         splashu = `${(favoritex == String.fromCharCode(102,0) ? ccdfbdabcabbbedbN.length : favoritex.length)}`;
         tooltipsJ.set(`${cricketM}`, cricketM.length - 1);
      let largebrightness5 = 6313355 <= cricketM.length;
      do {
         cricketM = `${cricketM.length >> (Math.min(1, Math.abs(tooltipsJ.size)))}`;
         if (largebrightness5) {
            break;
         }
      } while (largebrightness5 && (1 < (cricketM.length & tooltipsJ.size)));
      while (3 < cricketM.length) {
         cricketM = `${cricketM.length * 3}`;
         break;
      }
         tooltipsJ = new Map([[`${tooltipsJ.size}`, 3 + cricketM.length]]);
      grapht = `${tooltipsJ.size >> (Math.min(grapht.length, 1))}`;
   }
       let runtimeX = String.fromCharCode(111,117,116,108,105,101,114,95,119,95,49,57,0);
      if (!runtimeX.endsWith(runtimeX)) {
         runtimeX = "1";
      }
      if (!runtimeX.startsWith(runtimeX)) {
         runtimeX = `${runtimeX.length | 3}`;
      }
      while (!runtimeX.endsWith(runtimeX)) {
         runtimeX = `${runtimeX.length ^ runtimeX.length}`;
         break;
      }
      scorepopsoundq.push(((orangeuparrowd ? 4 : 4) << (Math.min(listY.length, 1))));
   if ((1 - parseInt(`${darkV}`)) >= 3 && 3.30 >= (darkV - parseFloat(`${sheett.length}`))) {
      sheett = `${1 - sportsT.length}`;
   }
      emojiheartP = [((orangeuparrowd ? 1 : 4) - playershirtE.size)];
   if (details1.size == 1) {
       let pagination0 = String.fromCharCode(97,95,56,53,95,119,101,105,103,104,116,0);
       let eactc = String.fromCharCode(116,95,51,56,95,116,105,116,108,101,115,0);
       let style0 = String.fromCharCode(119,95,50,95,113,117,97,100,115,0);
       let greenarrowup3 = 4;
       let disconnectedv = 5.0;
          let eactp = 3.0;
          let shareblackc = String.fromCharCode(107,95,50,56,0);
          let reactN: Array<any> = [String.fromCharCode(112,95,54,49,95,116,111,112,105,99,97,108,0), String.fromCharCode(112,114,101,99,101,110,99,101,95,102,95,49,54,0)];
         style0 = `${(String.fromCharCode(113,0) == eactc ? reactN.length : eactc.length)}`;
         eactp -= parseFloat(`${parseInt(`${eactp}`) - 1}`);
         shareblackc += `${(shareblackc == String.fromCharCode(114,0) ? shareblackc.length : parseInt(`${eactp}`))}`;
         reactN.push(shareblackc.length);
      let greys = pagination0 == String.fromCharCode(52,99,51,101,103,117,98,100,51,53,0);
      do {
          let goal6 = String.fromCharCode(117,95,51,48,95,99,111,109,112,105,108,101,111,112,116,105,111,110,0);
          let yellowvideolivei: Array<any> = [422, 438, 881];
          let controls1: Map<any, any> = new Map([[String.fromCharCode(115,112,97,110,95,53,95,56,49,0),true ], [String.fromCharCode(103,117,116,116,101,114,95,103,95,57,52,0),false ]]);
         pagination0 += "3";
         goal6 += "1";
         yellowvideolivei = [1 + controls1.size];
         controls1 = new Map([[`${yellowvideolivei.length}`, yellowvideolivei.length % (Math.max(2, 9))]]);
         if (greys) {
            break;
         }
      } while (greys && (eactc != String.fromCharCode(55,0) || pagination0 == String.fromCharCode(90,0)));
      if (pagination0.length >= 1) {
         pagination0 += "2";
      }
       let backwardh = false;
      while (3 <= (pagination0.length >> (Math.min(Math.abs(3), 3))) && 1 <= (parseInt(`${disconnectedv}`) + 3)) {
          let analyticsM = String.fromCharCode(111,95,49,56,95,99,97,110,111,110,105,99,97,108,105,122,101,100,0);
          let mapbufferp = String.fromCharCode(115,98,112,114,111,95,105,95,56,52,0);
          let privacyG = String.fromCharCode(108,111,111,112,115,95,115,95,49,56,0);
          let handlerA = false;
          let loadingspinnerz = 3.0;
         pagination0 = `${mapbufferp.length << (Math.min(2, Math.abs(greenarrowup3)))}`;
         analyticsM += `${analyticsM.length & 3}`;
         mapbufferp = `${privacyG.length - analyticsM.length}`;
         privacyG += `${parseInt(`${loadingspinnerz}`) / 2}`;
         handlerA = parseInt(`${loadingspinnerz}`) > privacyG.length;
         break;
      }
         greenarrowup3 >>= Math.min(Math.abs(1), 3);
       let suboutc = false;
         style0 = `${(String.fromCharCode(52,0) == eactc ? eactc.length : parseInt(`${disconnectedv}`))}`;
      for (let t = 0; t < 3; t++) {
          let plashl = String.fromCharCode(121,95,50,51,95,114,101,118,101,114,115,101,100,0);
          let orangeO = String.fromCharCode(121,95,49,95,115,99,104,101,109,101,115,0);
          let recommendationy = 3.0;
         style0 = `${plashl.length + pagination0.length}`;
         plashl += `${2 / (Math.max(7, parseInt(`${recommendationy}`)))}`;
         orangeO = `${orangeO.length}`;
         recommendationy *= parseFloat(`${parseInt(`${recommendationy}`)}`);
      }
         eactc += `${style0.length}`;
      while (1 < (3 * pagination0.length) || (pagination0.length & 3) < 2) {
         disconnectedv *= parseFloat(`${1}`);
         break;
      }
      darkV /= Math.max(parseFloat(`${2 ^ sheett.length}`), 2);
   }
      scorepopsoundq.push(2 | scorepopsoundq.length);
       let subsE = 1.0;
       let manifestu = 4;
      let tickW = subsE <= 6199905.0;
      do {
         subsE -= parseFloat(`${1}`);
         if (tickW) {
            break;
         }
      } while ((3.44 == (subsE * 3.16)) && tickW);
      while (subsE <= 3.39) {
         manifestu %= Math.max(2, 2);
         break;
      }
          let coreu = String.fromCharCode(119,111,114,115,116,95,51,95,49,49,0);
          let eyeclosea = String.fromCharCode(117,110,105,120,95,116,95,54,56,0);
          let penaltyg = 1;
         manifestu <<= Math.min(Math.abs(eyeclosea.length | 3), 1);
         coreu += `${2 << (Math.min(4, coreu.length))}`;
         eyeclosea = `${1 - penaltyg}`;
         penaltyg &= (String.fromCharCode(78,0) == coreu ? coreu.length : penaltyg);
          let navigationh = false;
          let combinedv = 2.0;
          let away2 = 5;
         subsE /= Math.max(1, parseFloat(`${away2}`));
         navigationh = !navigationh;
         combinedv *= 1 * parseInt(`${combinedv}`);
         away2 /= Math.max(((navigationh ? 4 : 1) << (Math.min(Math.abs(parseInt(`${combinedv}`)), 4))), 2);
          let bellreminderK: Array<any> = [275, 136, 642];
          let libyogah = false;
         subsE += parseFloat(`${parseInt(`${subsE}`)}`);
         bellreminderK = [((libyogah ? 2 : 5) + bellreminderK.length)];
         libyogah = bellreminderK.includes(libyogah);
      while (1.20 >= (subsE * 1.78) || (5 << (Math.min(4, Math.abs(manifestu)))) >= 3) {
          let calendari: Array<any> = [608, 272];
          let iconmorey = String.fromCharCode(117,110,97,108,105,103,110,101,100,95,48,95,49,52,0);
          let filledc = true;
          let predictiondefaultK = 3.0;
         subsE += parseFloat(`${calendari.length | iconmorey.length}`);
         calendari = [1 << (Math.min(Math.abs(parseInt(`${predictiondefaultK}`)), 4))];
         iconmorey += `${(parseInt(`${predictiondefaultK}`) - (filledc ? 3 : 5))}`;
         filledc = filledc || predictiondefaultK > 46.53;
         break;
      }
      sheett += `${playershirtE.size / (Math.max(listY.length, 8))}`;
   if (!orangeuparrowd && 1 >= (2 ^ scorepopsoundq.length)) {
       let connectionb = String.fromCharCode(97,115,116,101,114,105,115,107,95,114,95,57,57,0);
       let loginm = 0.0;
       let delegate_hoC = String.fromCharCode(103,95,56,50,95,97,108,105,118,101,0);
       let fastforwardU = String.fromCharCode(112,97,105,110,116,105,110,103,95,48,95,55,0);
         fastforwardU += `${1 | delegate_hoC.length}`;
      let termsQ = 5906119.0 >= loginm;
      do {
         loginm -= (parseFloat(`${connectionb == String.fromCharCode(106,0) ? fastforwardU.length : connectionb.length}`));
         if (termsQ) {
            break;
         }
      } while ((4 == fastforwardU.length) && termsQ);
      for (let s = 0; s < 1; s++) {
          let statisticsg: Array<any> = [String.fromCharCode(109,97,116,99,104,95,112,95,54,50,0), String.fromCharCode(117,95,56,54,95,103,101,116,99,114,101,100,0), String.fromCharCode(108,111,99,107,95,111,95,49,55,0)];
          let long_vD = false;
          let greyK: Array<any> = [780, 827, 488];
         loginm /= Math.max(3, parseFloat(`${fastforwardU.length}`));
         statisticsg.push(((long_vD ? 2 : 2) + 2));
         long_vD = greyK.includes(long_vD);
         greyK = [greyK.length];
      }
      if (delegate_hoC == fastforwardU) {
          let largesoundT = String.fromCharCode(100,101,116,97,99,104,101,100,95,57,95,54,51,0);
          let graphicsV: Map<any, any> = new Map([[String.fromCharCode(121,95,54,55,95,102,114,97,112,115,0),true ], [String.fromCharCode(99,95,52,51,95,102,108,111,97,116,0),true ]]);
          let typingloadingp: Array<any> = [840, 262];
          let penaltyshootm: Array<any> = [String.fromCharCode(100,101,99,114,121,112,116,105,111,110,95,53,95,56,53,0), String.fromCharCode(114,95,49,48,95,115,117,98,115,116,97,116,101,0), String.fromCharCode(100,95,49,53,95,115,105,103,110,112,111,115,116,0)];
         fastforwardU += `${graphicsV.size}`;
         largesoundT += `${penaltyshootm.length + largesoundT.length}`;
         graphicsV.set(largesoundT, 3);
         typingloadingp = [3];
         penaltyshootm.push(typingloadingp.length);
      }
      while (fastforwardU.length <= parseInt(`${loginm}`)) {
         fastforwardU += `${(String.fromCharCode(119,0) == fastforwardU ? fastforwardU.length : delegate_hoC.length)}`;
         break;
      }
         loginm -= (parseFloat(`${String.fromCharCode(97,0) == delegate_hoC ? parseInt(`${loginm}`) : delegate_hoC.length}`));
       let bingU = 3.0;
       let gifgoalbgz = 3.0;
      let showK = String.fromCharCode(106,54,105,117,54,54,113,110,48,0) == connectionb;
      do {
         connectionb = `${fastforwardU.length + delegate_hoC.length}`;
         if (showK) {
            break;
         }
      } while ((!connectionb.startsWith(`${loginm}`)) && showK);
          let detailsn: Map<any, any> = new Map([[String.fromCharCode(108,95,53,49,95,105,109,112,111,115,115,105,98,108,101,0),581], [String.fromCharCode(105,109,112,108,95,106,95,49,48,48,0),575]]);
          let java4 = String.fromCharCode(116,101,120,116,117,114,101,100,115,112,101,110,99,95,113,95,49,0);
         fastforwardU += `${(java4 == String.fromCharCode(106,0) ? detailsn.size : java4.length)}`;
      let animationZ = fastforwardU == String.fromCharCode(100,56,107,0);
      do {
         fastforwardU = `${parseInt(`${loginm}`) ^ parseInt(`${bingU}`)}`;
         if (animationZ) {
            break;
         }
      } while (((4.65 / (Math.max(8, gifgoalbgz))) >= 4.40 && (parseInt(`${gifgoalbgz}`) / (Math.max(5, 9))) >= 2) && animationZ);
          let neonN: Array<any> = [199, 908];
          let backwardO = true;
         bingU *= parseFloat(`${neonN.length | 3}`);
         neonN.push(((backwardO ? 1 : 5) >> (Math.min(Math.abs((backwardO ? 3 : 1)), 4))));
          let libfiled = String.fromCharCode(111,102,102,115,101,116,115,95,106,95,53,55,0);
          let componentu = 2.0;
          let eighteenY = String.fromCharCode(117,95,53,95,115,121,110,99,112,111,105,110,116,0);
         connectionb += `${libfiled.length}`;
         libfiled = `${parseInt(`${componentu}`) + eighteenY.length}`;
         componentu *= 1 & parseInt(`${componentu}`);
         eighteenY += `${parseInt(`${componentu}`)}`;
      orangeuparrowd = playershirtE.size <= scorepopsoundq.length;
   }
      emojiheartP.push(sportsT.length - listY.length);
       let iconarrowrightwhitej = 4.0;
       let arrowup_ = String.fromCharCode(99,111,109,112,111,115,105,116,105,110,103,95,48,95,55,52,0);
      while (iconarrowrightwhitej < arrowup_.length) {
         iconarrowrightwhitej += 3 - parseInt(`${iconarrowrightwhitej}`);
         break;
      }
      while ((iconarrowrightwhitej / 2.71) >= 5.35 || 2.71 >= (iconarrowrightwhitej / (Math.max(arrowup_.length, 8)))) {
          let nativef: Array<any> = [952, 962];
          let form4: Map<any, any> = new Map([[String.fromCharCode(97,117,116,111,115,99,114,111,108,108,95,108,95,51,48,0),776], [String.fromCharCode(118,101,114,116,101,120,95,102,95,56,55,0),659], [String.fromCharCode(101,95,57,55,95,103,101,110,101,114,97,116,101,0),143]]);
          let regengU = String.fromCharCode(114,101,99,117,114,115,105,111,110,95,99,95,54,0);
         iconarrowrightwhitej *= arrowup_.length - 2;
         nativef.push(1);
         form4.set(regengU, regengU.length & nativef.length);
         break;
      }
         arrowup_ += "2";
      while ((arrowup_.length ^ 3) < 1 || (3 + arrowup_.length) < 4) {
         iconarrowrightwhitej += (String.fromCharCode(90,0) == arrowup_ ? parseInt(`${iconarrowrightwhitej}`) : arrowup_.length);
         break;
      }
         arrowup_ += `${3 * parseInt(`${iconarrowrightwhitej}`)}`;
      if (2 == (5 & arrowup_.length) || (iconarrowrightwhitej / (Math.max(arrowup_.length, 10))) == 4.88) {
          let halfe = 4;
         arrowup_ += "3";
         halfe += halfe;
      }
      grapht = `${(sheett == String.fromCharCode(111,0) ? parseInt(`${darkV}`) : sheett.length)}`;
       let pathz: Map<any, any> = new Map([[String.fromCharCode(115,99,104,101,100,117,108,101,114,95,121,95,49,53,0),805], [String.fromCharCode(101,100,105,116,95,110,95,55,52,0),656]]);
       let statsnomoredatau = 1.0;
       let foundR: Array<any> = [764, 941, 70];
      if ((statsnomoredatau / 4.5) >= 3.100 && 4.5 >= (statsnomoredatau / (Math.max(parseFloat(`${pathz.size}`), 10)))) {
         pathz.set(`${statsnomoredatau}`, foundR.length);
      }
         foundR.push(pathz.size | 3);
         foundR.push(pathz.size + parseInt(`${statsnomoredatau}`));
          let tempd = true;
         statsnomoredatau -= (parseFloat(`${foundR.length >> (Math.min(3, Math.abs((tempd ? 3 : 4))))}`));
      while (Array.from(pathz.keys()).includes(`${statsnomoredatau}`)) {
         pathz = new Map([[`${foundR.length}`, foundR.length]]);
         break;
      }
      let libreanimatedM = pathz.size >= 8796444;
      do {
         pathz.set(`${statsnomoredatau}`, 3 << (Math.min(Math.abs(parseInt(`${statsnomoredatau}`)), 3)));
         if (libreanimatedM) {
            break;
         }
      } while ((pathz.size >= foundR.length) && libreanimatedM);
      let xvod3 = statsnomoredatau <= 7074901.0;
      do {
         statsnomoredatau *= parseFloat(`${3 << (Math.min(5, Math.abs(pathz.size)))}`);
         if (xvod3) {
            break;
         }
      } while ((foundR.length > 4) && xvod3);
      let whistleorangeE = 8952820 >= pathz.size;
      do {
          let iconpointscorep = String.fromCharCode(111,95,52,57,95,102,97,97,110,100,99,116,0);
          let episodeA = String.fromCharCode(122,95,56,53,95,117,110,99,104,101,99,107,101,100,0);
         pathz.set(`${statsnomoredatau}`, parseInt(`${statsnomoredatau}`) / 1);
         iconpointscorep = `${2 + iconpointscorep.length}`;
         episodeA = `${iconpointscorep.length}`;
         if (whistleorangeE) {
            break;
         }
      } while ((parseInt(`${statsnomoredatau}`) > pathz.size) && whistleorangeE);
         pathz.set(`${statsnomoredatau}`, 2);
      playershirtE = new Map([[`${playershirtE.size}`, 2]]);
       let subbasketballplayerQ: Array<any> = [598, 792];
       let libfbF: Array<any> = [684, 316, 77];
       let matchT: Array<any> = [String.fromCharCode(116,95,51,95,112,114,101,118,105,101,119,0), String.fromCharCode(104,95,53,56,95,100,111,116,0)];
         libfbF = [libfbF.length >> (Math.min(subbasketballplayerQ.length, 1))];
       let update_633 = 0.0;
      orangeuparrowd = sheett.length <= parseInt(`${darkV}`);
      scorepopsoundq = [1 * emojiheartP.length];
       let h_count_: Array<any> = [933, 488];
       let header7 = true;
       let largesoundb: Array<any> = [518, 780];
      let serviceB = 5892942 >= h_count_.length;
      do {
          let spinnern = 1.0;
         h_count_.push(h_count_.length);
         spinnern *= parseInt(`${spinnern}`);
         if (serviceB) {
            break;
         }
      } while (serviceB && (largesoundb.length > h_count_.length));
         largesoundb.push(((header7 ? 4 : 1) & largesoundb.length));
         header7 = largesoundb.includes(header7);
         largesoundb = [(largesoundb.length & (header7 ? 3 : 5))];
         largesoundb = [largesoundb.length & h_count_.length];
      for (let c = 0; c < 1; c++) {
         largesoundb = [(h_count_.length * (header7 ? 3 : 5))];
      }
          let codegenL = 0;
          let libfbV: Map<any, any> = new Map([[String.fromCharCode(115,104,97,114,101,103,114,111,117,112,95,104,95,54,52,0),332], [String.fromCharCode(100,95,55,57,95,109,117,108,116,105,112,108,105,101,114,0),276]]);
          let defaultplayerimgi = 1.0;
         header7 = 92 <= libfbV.size || largesoundb.length <= 92;
         codegenL |= codegenL;
         libfbV.set(`${defaultplayerimgi}`, parseInt(`${defaultplayerimgi}`));
         h_count_ = [h_count_.length / 2];
         header7 = 1 < h_count_.length && largesoundb.length < 1;
      orangeuparrowd = ((emojiheartP.length >> (Math.min(5, Math.abs((!orangeuparrowd ? 17 : emojiheartP.length))))) >= 17);
      sportsT = `${details1.size >> (Math.min(grapht.length, 2))}`;
      grapht = `${scorepopsoundq.length}`;

        setUsername(initialUsername);

   let thailandx = 5961984 <= emojiheartP.length;
   do {
       let selectc: Map<any, any> = new Map([[String.fromCharCode(100,95,52,49,95,112,114,101,117,112,100,97,116,101,0),true ], [String.fromCharCode(115,107,101,119,95,99,95,54,51,0),true ], [String.fromCharCode(108,95,52,48,0),false ]]);
       let targetH = String.fromCharCode(111,112,116,105,109,105,115,109,95,105,95,54,51,0);
       let comment8 = String.fromCharCode(98,101,116,116,101,114,95,100,95,53,55,0);
       let member_ = String.fromCharCode(110,111,115,105,109,100,95,52,95,54,52,0);
         targetH += `${targetH.length}`;
          let p_centerx = false;
         member_ += `${targetH.length & member_.length}`;
         p_centerx = (!p_centerx ? !p_centerx : p_centerx);
         selectc.set(targetH, targetH.length);
          let iconarrowrightwhitez = String.fromCharCode(111,117,116,99,111,109,101,95,99,95,51,50,0);
          let iconsaveimagec = String.fromCharCode(117,110,115,104,105,102,116,95,105,95,56,52,0);
          let mbnativeadvanced3 = 5.0;
         comment8 = `${(String.fromCharCode(119,0) == iconarrowrightwhitez ? member_.length : iconarrowrightwhitez.length)}`;
         iconsaveimagec = `${iconsaveimagec.length % 3}`;
         mbnativeadvanced3 /= Math.max(parseFloat(`${iconsaveimagec.length >> (Math.min(Math.abs(1), 5))}`), 4);
      while (member_ != String.fromCharCode(120,0) && targetH == String.fromCharCode(121,0)) {
         targetH = `${comment8.length}`;
         break;
      }
      for (let d = 0; d < 2; d++) {
         targetH = `${3 * targetH.length}`;
      }
         comment8 = `${member_.length}`;
      while ((selectc.size / 2) < 4) {
          let logouserW = String.fromCharCode(114,101,115,97,109,112,95,122,95,51,51,0);
         selectc = new Map([[`${selectc.size}`, 1]]);
         logouserW = `${logouserW.length}`;
         break;
      }
         targetH = `${comment8.length}`;
      if (comment8.length <= member_.length) {
         comment8 += `${3 >> (Math.min(4, member_.length))}`;
      }
      let resendx = selectc.size >= 5947364;
      do {
         selectc.set(targetH, (String.fromCharCode(77,0) == targetH ? comment8.length : targetH.length));
         if (resendx) {
            break;
         }
      } while ((2 < (selectc.size | 5) || (member_.length | 5) < 3) && resendx);
          let iconsaveimageg = false;
          let predictionbannersharedt = false;
         comment8 = `${(2 << (Math.min(Math.abs((predictionbannersharedt ? 4 : 4)), 2)))}`;
      emojiheartP.push(listY.length);
      if (thailandx) {
         break;
      }
   } while ((5 <= (emojiheartP.length ^ 3) && 5 <= (3 ^ emojiheartP.length)) && thailandx);
       let zhuboo = 0;
       let dependenciesq = 0;
         dependenciesq %= Math.max(zhuboo << (Math.min(Math.abs(dependenciesq), 4)), 3);
         dependenciesq %= Math.max(zhuboo, 5);
      while (3 < (zhuboo / (Math.max(9, dependenciesq))) && 1 < (3 / (Math.max(6, dependenciesq)))) {
         dependenciesq <<= Math.min(Math.abs(3), 2);
         break;
      }
          let iconbackwhitez = 2;
          let actionsS: Map<any, any> = new Map([[String.fromCharCode(119,95,55,49,95,99,108,101,97,110,117,112,0),968], [String.fromCharCode(118,115,116,97,99,107,97,108,108,111,99,97,116,111,114,95,50,95,55,52,0),578]]);
          let logoutj = String.fromCharCode(97,95,50,48,95,99,111,112,121,118,0);
         dependenciesq += iconbackwhitez;
         iconbackwhitez += logoutj.length >> (Math.min(Math.abs(1), 4));
         actionsS.set(logoutj, 2);
      let zhuboM = zhuboo <= 6418446;
      do {
         zhuboo >>= Math.min(Math.abs(3 | dependenciesq), 3);
         if (zhuboM) {
            break;
         }
      } while (zhuboM && (5 >= (zhuboo & dependenciesq)));
      for (let b = 0; b < 2; b++) {
         dependenciesq <<= Math.min(Math.abs(3), 4);
      }
      sheett += `${grapht.length & dependenciesq}`;
   while ((listY.length >> (Math.min(Math.abs(3), 5))) >= 1 || 1 >= (listY.length >> (Math.min(Math.abs(3), 3)))) {
       let zhuboB = String.fromCharCode(114,101,118,101,114,98,95,53,95,56,50,0);
       let distt = true;
         distt = !zhuboB.startsWith(`${distt}`);
      let helperZ = zhuboB == String.fromCharCode(118,105,51,53,111,95,98,99,48,120,0);
      do {
          let modeld = 0.0;
         zhuboB = `${((distt ? 5 : 5) | parseInt(`${modeld}`))}`;
         if (helperZ) {
            break;
         }
      } while ((!distt) && helperZ);
          let liveV = 5.0;
          let libavcodecL = String.fromCharCode(118,100,114,97,119,104,101,108,112,101,114,95,117,95,55,51,0);
          let x_view5 = String.fromCharCode(121,95,56,57,95,102,105,120,0);
         zhuboB += `${libavcodecL.length}`;
         liveV += parseFloat(`${2}`);
         libavcodecL = `${x_view5.length ^ 3}`;
         x_view5 = "2";
         distt = !distt;
      for (let h = 0; h < 3; h++) {
         distt = !distt && zhuboB.length <= 52;
      }
       let scheduleQ = 5;
      listY = `${(scorepopsoundq.length + (orangeuparrowd ? 5 : 2))}`;
      break;
   }
       let gesturesq = 5.0;
       let libloggerH = true;
       let minim = String.fromCharCode(97,121,98,114,95,111,95,54,0);
          let gpay9 = 1.0;
          let unimplementedviewL = 0;
         libloggerH = 84.19 == (gpay9 * gesturesq);
         gpay9 *= parseFloat(`${unimplementedviewL - 3}`);
         unimplementedviewL >>= Math.min(4, Math.abs(unimplementedviewL));
       let baiduh: Map<any, any> = new Map([[String.fromCharCode(102,111,114,101,109,97,110,95,98,95,52,55,0),373], [String.fromCharCode(120,95,57,48,95,105,115,115,117,101,115,0),304]]);
       let schedulern: Map<any, any> = new Map([[String.fromCharCode(112,97,99,107,101,116,104,101,97,100,101,114,95,98,95,52,0),String.fromCharCode(115,105,103,110,101,100,95,115,95,49,54,0)], [String.fromCharCode(97,95,53,56,95,109,97,120,113,0),String.fromCharCode(97,95,49,49,95,98,108,105,116,0)]]);
         baiduh.set(`${gesturesq}`, 3 / (Math.max(8, parseInt(`${gesturesq}`))));
      let orangetickx = String.fromCharCode(53,107,102,109,95,0) == minim;
      do {
          let defaultfootballbgA = 5;
          let foregroundj = 5.0;
          let profileactiveI = String.fromCharCode(117,105,110,116,98,101,95,110,95,49,54,0);
         minim = `${minim.length * 3}`;
         defaultfootballbgA *= defaultfootballbgA;
         foregroundj /= Math.max(2, 2);
         profileactiveI += `${(profileactiveI == String.fromCharCode(108,0) ? parseInt(`${foregroundj}`) : profileactiveI.length)}`;
         if (orangetickx) {
            break;
         }
      } while ((minim.length <= 3) && orangetickx);
          let benefitZ: Map<any, any> = new Map([[String.fromCharCode(105,95,50,52,95,104,115,98,0),true ], [String.fromCharCode(119,101,97,118,101,95,52,95,49,53,0),true ], [String.fromCharCode(102,101,119,95,122,95,54,55,0),false ]]);
          let iconsaveimage2 = 1;
         baiduh = new Map([[`${benefitZ.size}`, minim.length]]);
         benefitZ.set(`${iconsaveimage2}`, 3 | iconsaveimage2);
      if (3 > baiduh.size) {
         libloggerH = schedulern.size >= 6;
      }
      let footballS = 4987625 >= minim.length;
      do {
          let libjsijniprofiler4 = String.fromCharCode(115,105,103,110,97,116,117,114,101,95,57,95,55,57,0);
          let predictionarrowk = 5.0;
          let indicatorb = 4;
         minim += `${indicatorb % (Math.max(parseInt(`${predictionarrowk}`), 7))}`;
         libjsijniprofiler4 = `${1 ^ libjsijniprofiler4.length}`;
         predictionarrowk *= libjsijniprofiler4.length << (Math.min(5, libjsijniprofiler4.length));
         if (footballS) {
            break;
         }
      } while (footballS && (4.4 < (1.14 - gesturesq) || (minim.length ^ 3) < 1));
          let bgvipsportW = String.fromCharCode(119,95,55,52,95,107,110,111,119,110,0);
         minim = `${parseInt(`${gesturesq}`) / 3}`;
         bgvipsportW = `${bgvipsportW.length}`;
         libloggerH = (parseInt(`${gesturesq}`) * schedulern.size) < 79;
      emojiheartP = [parseInt(`${darkV}`) & emojiheartP.length];
   for (let m = 0; m < 1; m++) {
      playershirtE.set(grapht, ((orangeuparrowd ? 5 : 1) << (Math.min(grapht.length, 4))));
   }
       let playershirt7 = 2;
       let middlebrightness8 = String.fromCharCode(102,114,97,99,116,105,111,110,97,108,95,122,95,49,48,48,0);
      for (let x = 0; x < 3; x++) {
         playershirt7 += playershirt7 - middlebrightness8.length;
      }
          let footballfiledlayouto = String.fromCharCode(108,95,49,48,48,95,108,111,111,112,0);
          let libhermesm = String.fromCharCode(109,98,116,114,101,101,95,106,95,52,53,0);
          let videobufferloadingV = String.fromCharCode(117,110,109,97,112,102,105,108,101,95,48,95,55,55,0);
         middlebrightness8 = `${playershirt7 * 2}`;
         footballfiledlayouto += `${footballfiledlayouto.length >> (Math.min(Math.abs(1), 2))}`;
         libhermesm = `${videobufferloadingV.length - 2}`;
         videobufferloadingV += `${libhermesm.length}`;
      grapht += `${(listY.length * (orangeuparrowd ? 1 : 1))}`;
   while (emojiheartP.length == 1 || (emojiheartP.length + 1) == 4) {
      emojiheartP = [(String.fromCharCode(82,0) == sheett ? sheett.length : grapht.length)];
      break;
   }
      darkV += parseFloat(`${parseInt(`${darkV}`) / 1}`);
      sportsT += `${2 << (Math.min(3, sportsT.length))}`;
   for (let a = 0; a < 1; a++) {
       let iconviewerm = String.fromCharCode(98,95,52,55,95,114,101,103,105,115,116,101,114,102,100,115,0);
       let foundN = String.fromCharCode(108,95,55,57,95,97,99,111,109,112,114,101,115,115,111,114,0);
       let pathM: Array<any> = [299, 181, 640];
       let zoomD = 1;
       let reactnativeratings1 = false;
         pathM = [foundN.length + zoomD];
      if (iconviewerm != String.fromCharCode(121,0)) {
          let const_p6e = 0.0;
          let scheduleR = String.fromCharCode(114,95,52,95,98,101,103,105,110,110,105,110,103,0);
          let debugf = 4.0;
          let downarrowL: Map<any, any> = new Map([[String.fromCharCode(112,105,120,102,109,116,115,95,111,95,56,50,0),655], [String.fromCharCode(97,95,49,54,95,115,99,111,112,101,115,0),222]]);
         foundN = `${pathM.length ^ foundN.length}`;
         const_p6e *= parseInt(`${const_p6e}`);
         scheduleR += `${downarrowL.size}`;
         debugf *= downarrowL.size - 2;
      }
      let videojse = iconviewerm.length >= 6285622;
      do {
         iconviewerm += `${foundN.length}`;
         if (videojse) {
            break;
         }
      } while (videojse && (4 == pathM.length));
          let bellreminderT = String.fromCharCode(110,95,57,53,95,114,108,109,0);
          let downloaderx = String.fromCharCode(114,101,116,114,105,101,118,101,95,52,95,57,49,0);
         iconviewerm += `${(bellreminderT == String.fromCharCode(86,0) ? foundN.length : bellreminderT.length)}`;
         downloaderx = `${3 ^ downloaderx.length}`;
          let liveq: Map<any, any> = new Map([[String.fromCharCode(121,95,54,56,95,112,115,97,0),893], [String.fromCharCode(117,110,122,105,112,95,121,95,55,53,0),596], [String.fromCharCode(112,95,52,48,95,115,116,97,110,100,97,108,111,110,101,0),939]]);
          let button_ = String.fromCharCode(110,105,100,108,110,95,113,95,51,51,0);
          let androidt = String.fromCharCode(101,95,53,48,95,110,101,97,114,115,101,116,0);
         zoomD <<= Math.min(iconviewerm.length, 1);
         liveq = new Map([[androidt, androidt.length]]);
         button_ = `${liveq.size | 1}`;
         reactnativeratings1 = String.fromCharCode(95,0) == foundN;
          let topond = 0;
         reactnativeratings1 = pathM.length == 87;
         topond ^= 2 & topond;
          let listE = String.fromCharCode(116,114,97,99,107,101,114,95,104,95,53,51,0);
          let iconsaveimagei = 4.0;
          let orangeuparrow4 = String.fromCharCode(108,111,103,111,95,97,95,50,50,0);
         zoomD ^= foundN.length / (Math.max(iconviewerm.length, 6));
         listE += `${orangeuparrow4.length | listE.length}`;
         iconsaveimagei += orangeuparrow4.length % (Math.max(4, parseInt(`${iconsaveimagei}`)));
       let assetsT = 3;
         iconviewerm = `${assetsT}`;
       let liveshare9 = 1.0;
       let basketballhometeamB = 3.0;
       let downloaderO = String.fromCharCode(98,103,109,99,95,113,95,55,49,0);
       let shirtD = String.fromCharCode(97,95,51,48,95,114,101,99,111,110,110,101,99,116,105,110,103,0);
      let matchesM = reactnativeratings1 ? !reactnativeratings1 : reactnativeratings1;
      do {
         reactnativeratings1 = pathM.length < 52 && 52 < foundN.length;
         if (matchesM) {
            break;
         }
      } while ((reactnativeratings1) && matchesM);
      if (5 <= (zoomD | 4) || 4 <= zoomD) {
          let greyh = 3;
          let bnewarchdefaultsO = 4.0;
          let malaysiay = false;
          let orientationM = 0.0;
         zoomD += ((malaysiay ? 3 : 1) << (Math.min(Math.abs(parseInt(`${orientationM}`)), 3)));
         greyh |= greyh;
         bnewarchdefaultsO /= Math.max(parseFloat(`${greyh}`), 5);
         malaysiay = parseFloat(`${greyh}`) >= bnewarchdefaultsO;
         orientationM -= parseInt(`${bnewarchdefaultsO}`);
      }
          let redirectd = false;
          let imageactionliveS: Map<any, any> = new Map([[String.fromCharCode(99,121,99,108,105,99,95,57,95,55,48,0),180], [String.fromCharCode(116,101,109,112,111,114,97,114,105,108,121,95,115,95,55,56,0),828]]);
         shirtD = `${((redirectd ? 3 : 4) % (Math.max(5, assetsT)))}`;
         redirectd = imageactionliveS.size >= 42 || 42 >= imageactionliveS.size;
      darkV += (parseFloat(`${iconviewerm == String.fromCharCode(66,0) ? (orangeuparrowd ? 4 : 3) : iconviewerm.length}`));
   }
       let whiteo: Array<any> = [529, 451];
       let penaltyshootnogoalQ = 5.0;
      while ((4 * whiteo.length) >= 3 || (4.59 * penaltyshootnogoalQ) >= 2.84) {
         whiteo = [1 ^ parseInt(`${penaltyshootnogoalQ}`)];
         break;
      }
       let scheduleb = String.fromCharCode(99,95,49,54,95,116,119,114,112,0);
       let sentry4 = String.fromCharCode(113,95,52,52,95,112,105,99,107,109,111,100,101,0);
          let heartK = 5;
          let headero = String.fromCharCode(112,116,114,109,97,112,95,50,95,55,48,0);
         penaltyshootnogoalQ /= Math.max(3, 2);
         heartK -= heartK + headero.length;
         headero = "1";
          let mappingK: Map<any, any> = new Map([[String.fromCharCode(116,114,110,115,95,114,95,49,53,0),String.fromCharCode(103,95,53,53,95,99,111,110,102,105,103,117,114,101,114,0)], [String.fromCharCode(103,101,116,95,105,95,51,48,0),String.fromCharCode(105,110,115,101,114,116,105,110,103,95,102,95,55,49,0)]]);
         penaltyshootnogoalQ *= sentry4.length << (Math.min(1, Math.abs(mappingK.size)));
      while (whiteo.length <= 5) {
          let long_gX = true;
         scheduleb = `${parseInt(`${penaltyshootnogoalQ}`)}`;
         long_gX = !long_gX;
         break;
      }
         scheduleb = `${parseInt(`${penaltyshootnogoalQ}`) * sentry4.length}`;
      scorepopsoundq.push(playershirtE.size / 2);
      grapht += `${sportsT.length}`;
       let textW = String.fromCharCode(108,111,111,112,102,105,108,116,101,114,95,108,95,51,57,0);
       let iconbellY = String.fromCharCode(97,116,116,97,99,104,109,101,110,116,95,114,95,57,57,0);
       let eyecloseU = String.fromCharCode(104,101,118,99,100,115,112,95,106,95,56,48,0);
      for (let l = 0; l < 2; l++) {
         iconbellY = "3";
      }
       let refreshborderlessF: Map<any, any> = new Map([[String.fromCharCode(100,101,115,116,114,111,121,95,115,95,53,56,0),367], [String.fromCharCode(97,99,99,101,115,115,111,114,95,106,95,54,51,0),435], [String.fromCharCode(97,117,116,104,101,110,116,105,99,97,116,105,111,110,95,52,95,53,57,0),166]]);
       let bellremindero: Map<any, any> = new Map([[String.fromCharCode(118,97,100,107,104,122,95,117,95,57,51,0),String.fromCharCode(113,95,56,49,95,101,120,112,101,99,116,101,100,0)], [String.fromCharCode(100,99,112,114,101,100,95,119,95,57,54,0),String.fromCharCode(114,101,99,111,109,109,101,110,100,95,110,95,53,49,0)], [String.fromCharCode(105,110,115,112,101,99,116,97,98,108,101,95,54,95,54,48,0),String.fromCharCode(115,95,49,55,95,114,116,109,112,99,114,121,112,116,0)]]);
          let sentryQ = String.fromCharCode(117,95,50,95,105,110,116,101,114,114,117,112,116,105,98,108,101,0);
          let stationi = 3.0;
         eyecloseU += `${sentryQ.length}`;
         sentryQ += `${parseInt(`${stationi}`)}`;
         textW += `${iconbellY.length}`;
       let bottomG = 5;
       let unreadq = 4.0;
      while (1 >= (bellremindero.size & 3) || 3 >= (bottomG & bellremindero.size)) {
         bellremindero.set(`${unreadq}`, 3 | parseInt(`${unreadq}`));
         break;
      }
         unreadq /= Math.max(parseFloat(`${parseInt(`${unreadq}`) * bellremindero.size}`), 4);
      let binddatasQ = unreadq >= 9751604.0;
      do {
          let fillk = true;
          let dist3: Map<any, any> = new Map([[String.fromCharCode(116,95,57,54,95,99,111,110,116,114,111,108,108,101,114,0),String.fromCharCode(99,112,108,120,95,117,95,55,56,0)], [String.fromCharCode(118,105,100,101,111,115,95,99,95,57,55,0),String.fromCharCode(118,99,104,113,95,102,95,50,56,0)]]);
         unreadq -= parseFloat(`${bottomG % (Math.max(1, 7))}`);
         fillk = dist3.get(`${fillk}`) == null;
         dist3 = new Map([[`${dist3.size}`, dist3.size]]);
         if (binddatasQ) {
            break;
         }
      } while (((unreadq * 5.86) <= 3.20 || (parseFloat(`${iconbellY.length}`) * unreadq) <= 5.86) && binddatasQ);
      emojiheartP.push((sportsT == String.fromCharCode(117,0) ? parseInt(`${darkV}`) : sportsT.length));
   for (let q = 0; q < 1; q++) {
      grapht = "1";
   }
   if (details1.size == 2) {
      sportsT += `${details1.size % 1}`;
   }
   if (!iconadslink4 || 4 > listY.length) {
       let yellowtoredm = String.fromCharCode(112,95,51,56,95,115,108,97,118,101,0);
       let whatsapps = String.fromCharCode(116,95,53,95,105,115,112,111,115,97,98,108,101,0);
          let connectione: Map<any, any> = new Map([[String.fromCharCode(99,111,110,102,108,105,99,116,115,95,49,95,50,48,0),436], [String.fromCharCode(121,95,51,48,95,115,104,97,114,101,100,100,111,119,110,108,111,97,100,0),21]]);
          let manifestN = 2.0;
          let customr = String.fromCharCode(106,112,101,103,116,97,98,108,101,115,95,108,95,54,0);
         yellowtoredm += `${customr.length}`;
         connectione = new Map([[`${connectione.size}`, parseInt(`${manifestN}`)]]);
         manifestN *= parseFloat(`${connectione.size * 1}`);
         customr += "3";
      if (whatsapps != yellowtoredm) {
         yellowtoredm = `${whatsapps.length % (Math.max(yellowtoredm.length, 10))}`;
      }
          let paginationj: Array<any> = [863, 983, 778];
          let yellowcirclebg1 = 3;
         whatsapps += `${(String.fromCharCode(72,0) == whatsapps ? whatsapps.length : paginationj.length)}`;
         paginationj = [yellowcirclebg1];
      if (yellowtoredm.length == 3 || whatsapps == String.fromCharCode(66,0)) {
          let downarrowl: Map<any, any> = new Map([[String.fromCharCode(97,110,105,109,97,116,101,115,95,106,95,55,57,0),String.fromCharCode(115,95,48,0)], [String.fromCharCode(121,95,52,57,95,112,114,111,103,114,101,115,115,105,118,101,0),String.fromCharCode(122,95,56,51,95,115,101,97,108,0)]]);
          let libfollyh = 4.0;
          let commentd = 3.0;
          let othermatchdetailbgU = 3.0;
          let moduleI = 2;
         whatsapps = "2";
         downarrowl.set(`${libfollyh}`, 1 - parseInt(`${libfollyh}`));
         commentd -= parseInt(`${libfollyh}`) & moduleI;
         othermatchdetailbgU += parseFloat(`${downarrowl.size + parseInt(`${othermatchdetailbgU}`)}`);
         moduleI /= Math.max(1 | downarrowl.size, 4);
      }
      for (let a = 0; a < 1; a++) {
          let right9: Array<any> = [416, 231];
          let stringg = 2.0;
          let nativew: Array<any> = [String.fromCharCode(109,97,112,112,97,98,108,101,95,52,95,57,53,0), String.fromCharCode(97,114,99,104,105,118,101,95,100,95,55,56,0), String.fromCharCode(114,95,54,48,95,121,118,116,111,117,121,118,121,0)];
          let debugP = String.fromCharCode(116,95,52,52,95,115,117,112,112,111,114,116,101,100,0);
         yellowtoredm = `${whatsapps.length}`;
         right9.push(right9.length + 3);
         stringg += parseFloat(`${right9.length}`);
         nativew = [(String.fromCharCode(88,0) == debugP ? debugP.length : nativew.length)];
      }
      let graphics7 = String.fromCharCode(100,109,55,52,116,95,0) == yellowtoredm;
      do {
          let confirmationx: Array<any> = [973, 166, 970];
          let long_zQ = String.fromCharCode(113,95,49,54,95,100,101,99,97,121,0);
          let expired1 = 3.0;
         yellowtoredm = `${parseInt(`${expired1}`) % (Math.max(confirmationx.length, 8))}`;
         confirmationx = [1 / (Math.max(9, long_zQ.length))];
         long_zQ += "2";
         if (graphics7) {
            break;
         }
      } while ((!yellowtoredm.endsWith(`${whatsapps.length}`)) && graphics7);
      listY += `${((iconadslink4 ? 1 : 4))}`;
   }
        setUsernameErrMsg(null);
    }

    const onClose = () => {
       let bannery = String.fromCharCode(110,95,56,55,95,115,116,114,105,100,101,97,98,108,101,0);
    let dycreator3 = 0.0;
    let klevinx = true;
    let iconclosewhitebgg = 0.0;
    let predictionarrowf = 0.0;
    let settingsD: Map<any, any> = new Map([[String.fromCharCode(115,95,52,51,95,110,111,100,101,108,97,121,0),962], [String.fromCharCode(111,95,49,51,95,116,121,112,101,115,116,114,0),928], [String.fromCharCode(121,95,56,53,95,114,101,110,100,101,114,101,114,0),896]]);
    let core6 = String.fromCharCode(120,104,116,109,108,95,108,95,52,57,0);
    let time_8rN = String.fromCharCode(119,95,56,54,95,117,109,98,114,101,108,108,97,0);
    let cornerQ = String.fromCharCode(122,95,56,55,95,120,118,97,103,0);
    let china7 = false;
    let turnW: Array<any> = [String.fromCharCode(117,115,97,98,108,101,95,55,95,55,48,0), String.fromCharCode(120,95,54,49,95,97,100,100,101,100,0)];
    let statisticsI = true;
    let login8 = true;
      bannery += `${parseInt(`${predictionarrowf}`) * 2}`;
   if (5 <= (3 ^ bannery.length)) {
       let championR: Array<any> = [722, 452];
       let cancell = 0.0;
       let shrinkd = 4.0;
       let floaterA = 2.0;
      while (2.25 > (parseFloat(`${championR.length}`) / (Math.max(3, cancell))) || (cancell / 2.25) > 1.99) {
         cancell *= parseFloat(`${parseInt(`${floaterA}`) << (Math.min(Math.abs(parseInt(`${cancell}`)), 3))}`);
         break;
      }
         shrinkd -= parseFloat(`${championR.length}`);
      let goal1 = cancell <= 9689494.0;
      do {
          let foundF = String.fromCharCode(111,95,57,95,100,117,115,116,0);
          let libnmsg = 5.0;
         cancell /= Math.max(parseFloat(`${2 ^ parseInt(`${libnmsg}`)}`), 1);
         foundF += `${foundF.length}`;
         libnmsg -= (String.fromCharCode(71,0) == foundF ? foundF.length : foundF.length);
         if (goal1) {
            break;
         }
      } while ((!championR.includes(cancell)) && goal1);
          let backgroundk = String.fromCharCode(102,95,49,95,115,105,110,113,98,0);
         floaterA -= parseFloat(`${parseInt(`${floaterA}`) + backgroundk.length}`);
         floaterA -= parseFloat(`${2 / (Math.max(3, championR.length))}`);
         shrinkd /= Math.max(parseFloat(`${championR.length - parseInt(`${shrinkd}`)}`), 4);
      while (4 <= championR.length) {
          let arrowupc = 1.0;
          let predictionwin2 = String.fromCharCode(119,101,98,115,111,99,107,101,116,95,119,95,52,53,0);
          let subbasketballplayerW: Array<any> = [455, 399, 465];
         championR = [parseInt(`${arrowupc}`) % (Math.max(predictionwin2.length, 1))];
         arrowupc /= Math.max(2, 2);
         predictionwin2 += `${subbasketballplayerW.length}`;
         break;
      }
      for (let c = 0; c < 3; c++) {
          let iconlogoutv = 1.0;
          let basketballplayerplaceholdere = String.fromCharCode(122,95,53,50,95,114,101,99,111,110,115,116,114,117,99,116,105,111,110,0);
         floaterA += parseFloat(`${parseInt(`${cancell}`) * championR.length}`);
         iconlogoutv -= parseFloat(`${1}`);
         basketballplayerplaceholdere = `${(String.fromCharCode(56,0) == basketballplayerplaceholdere ? parseInt(`${iconlogoutv}`) : basketballplayerplaceholdere.length)}`;
      }
      for (let s = 0; s < 1; s++) {
          let volumeF = false;
         cancell *= parseFloat(`${parseInt(`${floaterA}`) / 1}`);
         volumeF = !volumeF;
      }
       let shrunkn = String.fromCharCode(111,112,99,111,100,101,95,99,95,51,48,0);
       let long_77 = String.fromCharCode(97,117,116,111,114,111,116,97,116,105,111,110,95,106,95,52,54,0);
          let downarrowF = String.fromCharCode(112,114,101,104,101,97,116,95,108,95,51,52,0);
          let libjsinspector9: Map<any, any> = new Map([[String.fromCharCode(106,95,56,50,95,105,109,112,108,101,109,101,110,116,97,116,105,111,110,0),String.fromCharCode(121,95,53,49,95,115,116,99,98,0)], [String.fromCharCode(102,95,56,50,95,97,114,103,0),String.fromCharCode(112,101,114,115,105,115,116,101,110,116,95,102,95,50,49,0)]]);
          let basketballtrophyL = String.fromCharCode(110,95,54,50,95,115,117,98,100,97,116,97,0);
         shrunkn = `${basketballtrophyL.length}`;
         downarrowF = `${libjsinspector9.size / (Math.max(2, 6))}`;
         libjsinspector9 = new Map([[`${libjsinspector9.size}`, libjsinspector9.size]]);
         basketballtrophyL = "2";
      while (!shrunkn.startsWith(`${championR.length}`)) {
         championR.push(1);
         break;
      }
      dycreator3 -= parseFloat(`${time_8rN.length}`);
   }
   for (let k = 0; k < 2; k++) {
      bannery = `${settingsD.size / 3}`;
   }
      cornerQ += `${3 << (Math.min(1, core6.length))}`;
   for (let j = 0; j < 2; j++) {
       let emptyG = true;
       let libavutilS = 1.0;
       let disconnectedlogo3 = 2;
       let combinec = String.fromCharCode(97,95,56,49,95,116,104,105,99,107,0);
       let adulta = 2;
       let settingd = String.fromCharCode(109,111,110,111,119,104,105,116,101,95,116,95,54,55,0);
       let iconadslinkn = String.fromCharCode(115,111,109,101,95,97,95,49,54,0);
       let iconuserC = String.fromCharCode(101,109,112,105,114,105,99,97,108,108,121,95,107,95,55,57,0);
       let mbbanner4 = String.fromCharCode(110,95,49,51,95,117,110,115,104,105,102,116,0);
         settingd += "2";
          let alerta = 1;
         disconnectedlogo3 &= 2;
         alerta /= Math.max(2, 3);
         emptyG = adulta >= 52 || 92.27 >= libavutilS;
         iconuserC = "1";
      if (combinec.includes(`${libavutilS}`)) {
         combinec += `${3 / (Math.max(4, parseInt(`${libavutilS}`)))}`;
      }
      if (combinec.length < 3) {
          let scoreh = 2;
         combinec += `${2 ^ iconuserC.length}`;
         scoreh *= scoreh;
      }
      for (let e = 0; e < 2; e++) {
          let stylesw = String.fromCharCode(97,114,114,111,119,95,109,95,53,50,0);
          let lessf = String.fromCharCode(117,95,55,49,95,110,111,104,119,0);
          let sourceU = 4;
          let circlen = 2.0;
          let libimagepipelineQ = 1.0;
         disconnectedlogo3 += 1 | iconuserC.length;
         stylesw = `${stylesw.length}`;
         lessf += `${parseInt(`${libimagepipelineQ}`) - sourceU}`;
         sourceU += lessf.length / 2;
         circlen += sourceU * lessf.length;
         libimagepipelineQ /= Math.max(parseFloat(`${1 - parseInt(`${libimagepipelineQ}`)}`), 1);
      }
      while (!settingd.startsWith(iconadslinkn)) {
          let iconrefreshE = String.fromCharCode(112,108,97,121,95,57,95,51,55,0);
          let configure2 = true;
          let successR = 0.0;
          let typing9 = 3.0;
         settingd += `${mbbanner4.length & parseInt(`${successR}`)}`;
         iconrefreshE += `${(parseInt(`${typing9}`) ^ (configure2 ? 2 : 2))}`;
         configure2 = !configure2;
         successR *= 2;
         typing9 *= (parseFloat(`${String.fromCharCode(120,0) == iconrefreshE ? iconrefreshE.length : (configure2 ? 4 : 2)}`));
         break;
      }
      while ((adulta * 5) <= 4) {
          let viewera = String.fromCharCode(108,95,50,55,95,102,109,97,100,100,0);
          let resultA = true;
          let shrink8 = String.fromCharCode(121,95,56,54,95,102,105,110,100,110,101,97,114,109,118,0);
          let inactiveN = true;
         adulta -= (iconuserC.length ^ (emptyG ? 1 : 5));
         viewera += "2";
         resultA = !shrink8.startsWith(`${inactiveN}`);
         shrink8 += `${(shrink8 == String.fromCharCode(111,0) ? (resultA ? 1 : 4) : shrink8.length)}`;
         inactiveN = !resultA;
         break;
      }
         libavutilS *= parseFloat(`${iconadslinkn.length}`);
      for (let q = 0; q < 3; q++) {
         combinec = `${combinec.length >> (Math.min(4, Math.abs(disconnectedlogo3)))}`;
      }
         combinec = "1";
         combinec = `${mbbanner4.length - 1}`;
      predictionarrowf *= parseInt(`${dycreator3}`) | 2;
   }
      cornerQ = `${3 / (Math.max(10, parseInt(`${dycreator3}`)))}`;
   for (let c = 0; c < 1; c++) {
      bannery += `${parseInt(`${dycreator3}`) & cornerQ.length}`;
   }
       let zhengpianS = String.fromCharCode(118,111,119,101,108,95,55,95,56,51,0);
         zhengpianS = "3";
       let sortx = 1.0;
      while (2 >= (zhengpianS.length | 4)) {
         zhengpianS = `${parseInt(`${sortx}`) + 3}`;
         break;
      }
      time_8rN = `${2 % (Math.max(4, core6.length))}`;

        if (handleClose) handleClose();

   while ((predictionarrowf / 2.54) > 2.95) {
      bannery = `${parseInt(`${predictionarrowf}`) ^ time_8rN.length}`;
      break;
   }
   if (bannery.length > 4) {
      bannery = `${settingsD.size}`;
   }
   let videobufferloadingF = String.fromCharCode(54,120,121,121,0) == core6;
   do {
      core6 += "2";
      if (videobufferloadingF) {
         break;
      }
   } while (videobufferloadingF && (core6.startsWith(`${iconclosewhitebgg}`)));
      dycreator3 *= parseFloat(`${2}`);
   let less0 = predictionarrowf >= 6404046.0;
   do {
      predictionarrowf *= 3;
      if (less0) {
         break;
      }
   } while (((time_8rN.length % (Math.max(1, 8))) > 5 || (parseInt(`${predictionarrowf}`) * 1) > 1) && less0);
   let commonq = china7 ? !china7 : china7;
   do {
       let indicatorW: Array<any> = [312, 437];
       let videovarQ = 1;
       let logouti = String.fromCharCode(115,116,114,105,99,116,95,102,95,52,50,0);
       let shootnogoal_ = String.fromCharCode(109,95,55,49,95,99,97,110,99,101,108,108,97,116,105,111,110,0);
      let vietnamU = logouti.length <= 6804428;
      do {
          let megaphonek: Array<any> = [503, 662, 549];
          let profileinactiveV: Array<any> = [980, 86];
         logouti = `${videovarQ ^ 1}`;
         megaphonek = [profileinactiveV.length | megaphonek.length];
         profileinactiveV = [3 << (Math.min(4, profileinactiveV.length))];
         if (vietnamU) {
            break;
         }
      } while (vietnamU && (logouti.length >= 4));
         indicatorW.push(2);
       let predictionbuttonv = String.fromCharCode(114,101,112,108,97,99,105,110,103,95,114,95,53,53,0);
      while (2 <= logouti.length) {
         logouti += `${logouti.length}`;
         break;
      }
         logouti += `${(predictionbuttonv == String.fromCharCode(65,0) ? shootnogoal_.length : predictionbuttonv.length)}`;
      china7 = bannery.length >= 66 && cornerQ == String.fromCharCode(90,0);
      if (commonq) {
         break;
      }
   } while (commonq && (china7));
      iconclosewhitebgg -= parseFloat(`${parseInt(`${predictionarrowf}`)}`);
   for (let v = 0; v < 2; v++) {
      dycreator3 += parseFloat(`${time_8rN.length & turnW.length}`);
   }

        Keyboard.dismiss();

   if (parseFloat(`${turnW.length}`) > iconclosewhitebgg) {
       let giflivestreamingt: Map<any, any> = new Map([[String.fromCharCode(102,111,99,117,115,95,54,95,51,52,0),820], [String.fromCharCode(115,97,118,105,110,103,95,50,95,53,55,0),407]]);
       let vignetteg = 0.0;
         giflivestreamingt.set(`${vignetteg}`, giflivestreamingt.size >> (Math.min(Math.abs(1), 4)));
          let arrowupW = String.fromCharCode(112,112,102,108,97,103,115,95,113,95,52,52,0);
         vignetteg -= parseFloat(`${giflivestreamingt.size % 3}`);
         arrowupW += `${arrowupW.length}`;
      if (vignetteg == 1.25) {
         vignetteg *= parseFloat(`${giflivestreamingt.size * 1}`);
      }
      if ((parseInt(`${vignetteg}`) / (Math.max(giflivestreamingt.size, 7))) == 4) {
         vignetteg -= parseFloat(`${giflivestreamingt.size >> (Math.min(3, Math.abs(parseInt(`${vignetteg}`))))}`);
      }
         giflivestreamingt.set(`${vignetteg}`, 1 / (Math.max(2, parseInt(`${vignetteg}`))));
          let predictionarrowZ = 4;
          let overT = 2.0;
         giflivestreamingt.set(`${overT}`, parseInt(`${overT}`));
         predictionarrowZ >>= Math.min(Math.abs(predictionarrowZ % (Math.max(3, 4))), 2);
      turnW.push((bannery == String.fromCharCode(54,0) ? bannery.length : parseInt(`${vignetteg}`)));
   }
   for (let v = 0; v < 1; v++) {
      dycreator3 /= Math.max(5, parseFloat(`${time_8rN.length}`));
   }
      turnW = [bannery.length % (Math.max(3, parseInt(`${predictionarrowf}`)))];
      iconclosewhitebgg -= parseFloat(`${cornerQ.length}`);
      cornerQ += "1";
       let k_managerE = false;
       let ying3: Array<any> = [799, 578, 177];
         ying3 = [(ying3.length * (k_managerE ? 3 : 5))];
       let defaultplayerimg8 = 3;
      if ((5 ^ defaultplayerimg8) <= 5) {
         k_managerE = (defaultplayerimg8 ^ ying3.length) == 2;
      }
          let homeinactivev = 2.0;
         ying3 = [parseInt(`${homeinactivev}`) & 1];
         defaultplayerimg8 -= ((k_managerE ? 1 : 5) + defaultplayerimg8);
      let rootE = 8743317 >= defaultplayerimg8;
      do {
         defaultplayerimg8 += (3 ^ (k_managerE ? 3 : 4));
         if (rootE) {
            break;
         }
      } while (((3 | ying3.length) > 5 && (ying3.length | 3) > 4) && rootE);
      dycreator3 /= Math.max(parseFloat(`${time_8rN.length}`), 2);
   let white9 = bannery.length <= 9135410;
   do {
      bannery += `${parseInt(`${dycreator3}`)}`;
      if (white9) {
         break;
      }
   } while (white9 && (5 < (bannery.length - parseInt(`${dycreator3}`)) && (parseInt(`${dycreator3}`) - 5) < 5));
      klevinx = bannery.includes(`${statisticsI}`);
        resetForm();
    }

    const onSubmitForm = async () => {
       let lessV = String.fromCharCode(114,95,54,52,95,118,112,100,101,99,0);
    let libswresamplec = 3.0;
    let tempnodatae = String.fromCharCode(98,101,103,105,110,110,105,110,103,95,121,95,54,57,0);
    let actiond = String.fromCharCode(116,97,98,108,101,115,95,105,95,56,51,0);
    let greenarrowupC: Map<any, any> = new Map([[String.fromCharCode(121,95,50,51,95,100,101,108,101,116,101,0),703], [String.fromCharCode(98,108,105,110,107,95,117,95,50,48,0),420]]);
    let iconnewsshareD = 1;
    let n_imageX: Map<any, any> = new Map([[String.fromCharCode(112,95,57,51,95,98,105,111,0),681], [String.fromCharCode(110,111,100,101,115,101,116,95,117,95,49,56,0),209]]);
    let nativemoduleh = 2.0;
    let layoutc = String.fromCharCode(115,95,55,49,95,115,116,114,108,99,112,121,0);
    let privilegel = String.fromCharCode(110,95,55,48,95,99,111,110,118,111,108,117,116,105,111,110,0);
    let templateprocessor1 = 0.0;
    let infoT = 2.0;
    let neono = 1;
    let loginA = true;
   for (let m = 0; m < 2; m++) {
       let iconviewerV = false;
       let notificationfilledV = false;
       let singleP = String.fromCharCode(103,97,117,103,101,95,105,95,57,48,0);
       let oranges = String.fromCharCode(112,99,109,117,95,105,95,57,55,0);
      for (let r = 0; r < 1; r++) {
         singleP += `${(1 * (iconviewerV ? 4 : 4))}`;
      }
         notificationfilledV = !notificationfilledV || iconviewerV;
         iconviewerV = oranges.length <= singleP.length;
      let skipg = String.fromCharCode(111,95,52,121,115,0) == oranges;
      do {
         oranges += `${((notificationfilledV ? 3 : 3) / 1)}`;
         if (skipg) {
            break;
         }
      } while (skipg && (oranges.length <= 3));
         notificationfilledV = iconviewerV;
         oranges = `${((iconviewerV ? 1 : 2) % 2)}`;
         notificationfilledV = singleP.length < 63;
      if (oranges.includes(`${notificationfilledV}`)) {
         oranges = `${oranges.length}`;
      }
          let pointk: Map<any, any> = new Map([[String.fromCharCode(101,95,55,48,95,97,100,115,0),67], [String.fromCharCode(107,95,54,52,95,99,104,97,105,110,115,0),503], [String.fromCharCode(109,95,57,49,95,97,112,102,115,0),158]]);
         singleP = `${oranges.length}`;
         pointk.set(`${pointk.size}`, pointk.size + pointk.size);
         singleP = `${((notificationfilledV ? 4 : 2) << (Math.min(Math.abs(2), 1)))}`;
      for (let i = 0; i < 1; i++) {
         notificationfilledV = !iconviewerV || notificationfilledV;
      }
       let commentw = 3.0;
       let viewsb = 4.0;
      iconnewsshareD |= (String.fromCharCode(50,0) == singleP ? singleP.length : actiond.length);
   }

        if (usernameErrMsg !== null) return;

       let iconmore1 = false;
       let notificationfillemptyH = String.fromCharCode(102,105,110,116,95,113,95,52,50,0);
          let positionfieldr = true;
          let brightnessC = String.fromCharCode(109,95,51,51,95,115,116,114,102,116,105,109,101,0);
          let dropdown6 = 1.0;
         notificationfillemptyH += `${brightnessC.length}`;
         positionfieldr = 92.84 > dropdown6;
         brightnessC += `${parseInt(`${dropdown6}`)}`;
       let live4 = String.fromCharCode(114,101,101,110,97,98,108,101,95,101,95,49,57,0);
       let kickT = String.fromCharCode(117,95,53,95,102,97,107,101,0);
      let sina0 = String.fromCharCode(55,119,106,97,108,106,0) == live4;
      do {
         live4 += `${notificationfillemptyH.length}`;
         if (sina0) {
            break;
         }
      } while ((live4.endsWith(`${iconmore1}`)) && sina0);
      for (let a = 0; a < 3; a++) {
          let appsh: Array<any> = [String.fromCharCode(117,95,50,52,95,102,117,108,102,105,108,108,0), String.fromCharCode(112,114,105,110,116,95,98,95,57,53,0), String.fromCharCode(120,95,56,54,95,114,101,109,97,116,114,105,120,105,110,103,0)];
          let dropdownD = String.fromCharCode(111,118,101,114,118,105,101,119,95,109,95,55,54,0);
          let emojiheart4: Map<any, any> = new Map([[String.fromCharCode(100,105,115,99,111,110,116,105,103,117,111,117,115,95,121,95,57,56,0),String.fromCharCode(99,111,112,116,115,95,57,95,56,53,0)], [String.fromCharCode(97,117,116,111,115,99,114,111,108,108,105,110,103,95,115,95,51,57,0),String.fromCharCode(107,95,54,57,95,116,119,105,100,100,108,101,115,0)], [String.fromCharCode(122,101,114,111,115,95,100,95,50,54,0),String.fromCharCode(100,95,52,49,95,100,98,108,112,0)]]);
          let armvar = String.fromCharCode(101,95,51,51,95,101,109,97,105,108,0);
          let canvasR = String.fromCharCode(115,95,51,57,95,98,105,116,115,113,112,0);
         notificationfillemptyH = "1";
         appsh = [dropdownD.length];
         dropdownD = `${3 % (Math.max(7, emojiheart4.size))}`;
         emojiheart4.set(`${dropdownD}`, 2 & dropdownD.length);
         armvar = `${emojiheart4.size}`;
         canvasR = `${canvasR.length}`;
      }
         live4 = `${notificationfillemptyH.length}`;
         live4 = `${2 - kickT.length}`;
      lessV += `${layoutc.length | 1}`;

        if (isSubmitting) return;

   let tickL = 8411457 >= lessV.length;
   do {
      lessV = `${2 - tempnodatae.length}`;
      if (tickL) {
         break;
      }
   } while ((lessV.length > 4) && tickL);
        setSubmitting(true);

      actiond += "3";

        try {

   let trash1 = String.fromCharCode(113,99,57,100,120,54,100,98,51,55,0) == actiond;
   do {
      actiond = "2";
      if (trash1) {
         break;
      }
   } while ((!actiond.startsWith(`${iconnewsshareD}`)) && trash1);
            await yysHomeloading.updateUsername({
                username: username,
            });
        } catch (err: any) {
            if (
                err.errors &&
                err.errors.username
            ) {

      tempnodatae = `${(layoutc == String.fromCharCode(52,0) ? layoutc.length : n_imageX.size)}`;
                setUsernameErrMsg(err.errors.username);
            }

            if (!err.errors && err.message) {

      privilegel += `${parseInt(`${nativemoduleh}`)}`;
                setUsernameErrMsg(err.message);
            }

            setSubmitting(false);

       let heji9 = String.fromCharCode(97,95,54,52,95,117,115,101,99,0);
       let onewarchdefaultsF = String.fromCharCode(100,95,55,56,95,115,113,117,97,114,101,100,0);
         heji9 += `${onewarchdefaultsF.length ^ heji9.length}`;
          let catagoryy: Array<any> = [476, 823];
          let iconarrowrightwhiteI = String.fromCharCode(101,95,49,95,116,101,108,101,103,114,97,112,104,0);
         onewarchdefaultsF += `${iconarrowrightwhiteI.length}`;
         catagoryy.push(3);
         iconarrowrightwhiteI += `${2 / (Math.max(3, catagoryy.length))}`;
      for (let d = 0; d < 3; d++) {
          let reminderk = String.fromCharCode(98,108,111,99,107,105,101,115,95,104,95,55,51,0);
          let baseu = true;
          let libffmpegkita = true;
         heji9 = `${(String.fromCharCode(84,0) == onewarchdefaultsF ? (libffmpegkita ? 4 : 2) : onewarchdefaultsF.length)}`;
         reminderk += "2";
         baseu = reminderk.endsWith(`${baseu}`);
         libffmpegkita = (35 >= ((!baseu ? 35 : reminderk.length) - reminderk.length));
      }
      while (heji9.length > onewarchdefaultsF.length) {
         heji9 += `${onewarchdefaultsF.length & heji9.length}`;
         break;
      }
      while (heji9 != String.fromCharCode(109,0)) {
         onewarchdefaultsF += `${heji9.length}`;
         break;
      }
         onewarchdefaultsF += `${onewarchdefaultsF.length}`;
      greenarrowupC = new Map([[layoutc, 2]]);
            return;
        }


        dispatch(updateUsernameState(username));

   while ((2.99 + nativemoduleh) == 2.86 || 2.99 == (parseFloat(`${privilegel.length}`) + nativemoduleh)) {
      privilegel = `${parseInt(`${nativemoduleh}`) % (Math.max(lessV.length, 3))}`;
      break;
   }
        dispatch(changeScreenAction("修改成功"));

       let zhubou = String.fromCharCode(117,95,53,49,95,117,110,119,105,110,100,0);
       let backgroundo: Array<any> = [790, 695];
          let libimagepipelineZ = String.fromCharCode(97,99,116,105,118,97,116,101,95,97,95,53,48,0);
          let iconsharefriendsX: Array<any> = [323, 728];
         backgroundo.push(iconsharefriendsX.length);
         libimagepipelineZ = `${libimagepipelineZ.length % 2}`;
         iconsharefriendsX = [libimagepipelineZ.length / 1];
         backgroundo = [1];
          let crown5 = String.fromCharCode(100,95,57,49,95,108,109,108,109,0);
          let statsJ = String.fromCharCode(105,116,101,114,95,57,95,56,56,0);
         zhubou = `${backgroundo.length - 2}`;
         crown5 += `${(String.fromCharCode(107,0) == statsJ ? statsJ.length : crown5.length)}`;
      let leaguea = backgroundo.length >= 8714751;
      do {
         backgroundo = [(zhubou == String.fromCharCode(117,0) ? zhubou.length : backgroundo.length)];
         if (leaguea) {
            break;
         }
      } while ((3 == (backgroundo.length - 2) || 2 == (2 - backgroundo.length)) && leaguea);
       let whiteanimationlivek = 0.0;
       let manifestU = 1.0;
      libswresamplec /= Math.max(parseFloat(`${3}`), 4);

        if (onSubmitSuccess) onSubmitSuccess(username);

      lessV += `${n_imageX.size * parseInt(`${nativemoduleh}`)}`;

        Keyboard.dismiss();

   let navigationa = 5052861 >= iconnewsshareD;
   do {
      iconnewsshareD *= parseInt(`${libswresamplec}`);
      if (navigationa) {
         break;
      }
   } while (((1 - iconnewsshareD) == 3) && navigationa);
        navigation.navigate("Home", {
            screen: "Profile",
        });

       let serviceS = 5.0;
          let detailsy: Array<any> = [455, 94, 452];
         serviceS -= parseInt(`${serviceS}`) >> (Math.min(detailsy.length, 1));
         serviceS *= parseInt(`${serviceS}`);
      if ((5.64 * serviceS) >= 3.31 && (5.64 * serviceS) >= 5.40) {
          let valuesj = 0;
         serviceS += parseInt(`${serviceS}`);
         valuesj |= valuesj;
      }
      actiond = `${(String.fromCharCode(107,0) == actiond ? privilegel.length : actiond.length)}`;

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
                                source={require("../../../../static/images/invite/libreactIconeye.png")}
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