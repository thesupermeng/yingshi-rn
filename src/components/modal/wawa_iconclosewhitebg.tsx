import { useState } from "react";
import { Image, Keyboard, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CBottomSheet } from "../atoms";
import { useNavigation, useTheme } from "@react-navigation/native";
import { CTextInput } from "../atoms/textInput";
import { useSelector } from "@hooks/wawa_root";
import { useDispatch } from "react-redux";
import { changeScreenAction } from "@redux/actions/wawa_related";
import { updateUsernameState } from "@redux/actions/wawa_loginsuccess";
import SpinnerOverlay from "./wawa_telegram_watch";
import { wawaEvent } from "@api";


interface wawaAwayShow {
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
}: wawaAwayShow) => {
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
       let modelsH = false;
    let favicone = false;
    let minimize8 = false;
    let homeiconK = String.fromCharCode(115,116,97,121,95,50,95,52,55,0);
    let close8: Map<any, any> = new Map([[String.fromCharCode(100,105,115,112,97,116,99,104,105,110,103,95,97,95,57,49,0),true ], [String.fromCharCode(105,110,100,105,114,101,99,116,95,54,95,51,56,0),false ], [String.fromCharCode(115,95,54,49,95,112,101,114,115,105,115,116,101,100,0),false ]]);
    let smallbrightnessv = 0.0;
    let yellowscoreballm = String.fromCharCode(115,95,57,52,95,115,108,97,118,101,0);
    let arrowupF = 5;
    let views7 = String.fromCharCode(112,114,101,112,114,111,99,101,115,115,95,109,95,49,51,0);
    let libzeusg: Array<any> = [74, 591];
   while (4 >= homeiconK.length || !minimize8) {
       let activity5 = 4;
       let previewJ = 2.0;
       let playershirt3: Array<any> = [576, 939, 904];
       let profilepicH = 1.0;
      let smallbrightnesss = 9520610 <= activity5;
      do {
          let yellowvideolive5 = 1;
         activity5 >>= Math.min(Math.abs(parseInt(`${profilepicH}`)), 4);
         yellowvideolive5 <<= Math.min(1, Math.abs(yellowvideolive5 % (Math.max(yellowvideolive5, 4))));
         if (smallbrightnesss) {
            break;
         }
      } while (smallbrightnesss && (5.51 < (activity5 - previewJ)));
      while (profilepicH > 2.48) {
         activity5 |= 1;
         break;
      }
          let webview9 = 4.0;
          let showlesss = String.fromCharCode(105,95,52,95,112,101,114,115,105,115,116,101,110,116,0);
          let profileframeu: Map<any, any> = new Map([[String.fromCharCode(97,95,57,54,95,100,101,99,108,105,110,101,0),false ], [String.fromCharCode(99,111,109,112,97,114,105,115,111,110,95,54,95,50,57,0),false ], [String.fromCharCode(102,111,114,107,95,115,95,49,49,0),false ]]);
         playershirt3 = [playershirt3.length | 3];
         webview9 += 2 * showlesss.length;
         showlesss += `${showlesss.length | 2}`;
         profileframeu = new Map([[`${profileframeu.size}`, parseInt(`${webview9}`)]]);
         playershirt3 = [parseInt(`${previewJ}`)];
       let phoneshareY = 1;
         phoneshareY ^= activity5 * 3;
          let circleN = 2;
          let changeV = String.fromCharCode(116,95,53,51,95,118,101,99,115,0);
         phoneshareY &= 3;
         circleN %= Math.max((changeV == String.fromCharCode(105,0) ? changeV.length : circleN), 5);
      for (let g = 0; g < 3; g++) {
         activity5 /= Math.max(5, playershirt3.length & parseInt(`${profilepicH}`));
      }
      for (let g = 0; g < 1; g++) {
         previewJ -= 1 >> (Math.min(Math.abs(phoneshareY), 2));
      }
      for (let i = 0; i < 3; i++) {
         previewJ += playershirt3.length % 3;
      }
      if (3 < (phoneshareY | playershirt3.length)) {
          let type_hdR = 0.0;
          let largeT: Array<any> = [182, 750, 374];
          let predictionbannerU = String.fromCharCode(109,97,112,115,95,101,95,55,49,0);
          let jnewarchdefaultsS: Array<any> = [364, 657, 383];
         phoneshareY ^= jnewarchdefaultsS.length | 2;
         type_hdR /= Math.max(1 + parseInt(`${type_hdR}`), 5);
         largeT = [(predictionbannerU == String.fromCharCode(97,0) ? predictionbannerU.length : parseInt(`${type_hdR}`))];
         jnewarchdefaultsS = [predictionbannerU.length + 2];
      }
      if (4 >= (parseInt(`${previewJ}`) * activity5) || 5.41 >= (2.42 * previewJ)) {
         activity5 &= activity5;
      }
      minimize8 = 19 < playershirt3.length;
      break;
   }
   while (!modelsH) {
      minimize8 = !favicone;
      break;
   }
   while ((yellowscoreballm.length / (Math.max(2, 4))) < 4 && (smallbrightnessv * 2.12) < 4.24) {
       let downloadert = 1.0;
       let sendN: Map<any, any> = new Map([[String.fromCharCode(100,95,52,49,95,114,101,99,112,0),58], [String.fromCharCode(97,95,52,49,95,103,101,110,101,114,97,116,101,100,0),328], [String.fromCharCode(102,102,109,101,116,97,95,99,95,56,52,0),335]]);
       let security8 = 3.0;
       let tumbnail4 = String.fromCharCode(119,95,53,54,95,102,105,110,100,97,115,111,99,0);
       let package_4q = String.fromCharCode(112,95,49,57,95,105,110,116,101,110,116,0);
      if (package_4q.length > sendN.size) {
          let page5 = String.fromCharCode(97,110,99,101,115,116,114,121,95,101,95,55,50,0);
          let downloadinga = false;
          let downU = String.fromCharCode(109,95,57,56,95,103,101,110,101,114,97,116,105,111,110,0);
          let halfb = String.fromCharCode(105,95,54,56,95,116,119,105,116,99,104,0);
          let gnews4 = 1;
         package_4q = "1";
         page5 = "1";
         downloadinga = (halfb.length * gnews4) == 28;
         downU = `${gnews4}`;
         halfb += `${gnews4 << (Math.min(Math.abs(3), 4))}`;
      }
         security8 /= Math.max(4, 2);
      let baselineN = String.fromCharCode(111,100,115,102,122,0) == tumbnail4;
      do {
         tumbnail4 += `${(String.fromCharCode(78,0) == tumbnail4 ? sendN.size : tumbnail4.length)}`;
         if (baselineN) {
            break;
         }
      } while ((package_4q != tumbnail4) && baselineN);
      for (let q = 0; q < 2; q++) {
         security8 /= Math.max(1, parseInt(`${downloadert}`));
      }
         downloadert -= parseFloat(`${parseInt(`${downloadert}`)}`);
         security8 += 1 << (Math.min(Math.abs(parseInt(`${security8}`)), 3));
       let final_qS: Array<any> = [275, 473, 492];
       let positionfieldI: Array<any> = [625, 820, 573];
         sendN.set(tumbnail4, 2 << (Math.min(4, tumbnail4.length)));
         tumbnail4 = `${(tumbnail4 == String.fromCharCode(97,0) ? parseInt(`${security8}`) : tumbnail4.length)}`;
       let icono = String.fromCharCode(118,95,54,55,95,117,110,105,116,116,101,115,116,0);
       let moduleW = 3;
      if ((5 * moduleW) >= 5) {
          let sliderT = 0;
          let predictionv = String.fromCharCode(116,117,112,108,101,115,95,101,95,57,51,0);
         icono = "2";
         sliderT -= sliderT ^ predictionv.length;
         predictionv = `${predictionv.length - sliderT}`;
      }
         sendN.set(`${moduleW}`, positionfieldI.length - 1);
         final_qS.push(parseInt(`${security8}`));
          let coreu: Array<any> = [406, 314, 566];
          let firebasef = 2.0;
          let greenarrowupc: Map<any, any> = new Map([[String.fromCharCode(104,95,53,54,95,114,101,115,101,101,107,0),723], [String.fromCharCode(98,97,122,101,108,95,100,95,49,50,0),639]]);
         package_4q = "3";
         coreu.push(coreu.length);
         firebasef /= Math.max(2, parseFloat(`${1}`));
         greenarrowupc.set(`${firebasef}`, coreu.length);
      yellowscoreballm += `${close8.size}`;
      break;
   }
       let pressurec = 5.0;
       let codeM: Array<any> = [253, 827, 291];
       let componentsU: Map<any, any> = new Map([[String.fromCharCode(99,95,53,95,99,111,110,116,97,105,110,115,0),String.fromCharCode(115,95,53,54,95,97,98,103,114,0)], [String.fromCharCode(101,95,50,52,95,114,101,116,114,121,97,98,108,101,0),String.fromCharCode(103,95,54,53,95,100,105,115,112,115,97,98,108,101,0)], [String.fromCharCode(102,111,114,99,101,95,122,95,50,49,0),String.fromCharCode(110,111,114,109,95,52,95,49,55,0)]]);
      let libffmpegkitA = 9824528 >= componentsU.size;
      do {
         componentsU = new Map([[`${codeM.length}`, 2 << (Math.min(4, codeM.length))]]);
         if (libffmpegkitA) {
            break;
         }
      } while (libffmpegkitA && (componentsU.size > 1));
      if (codeM.includes(pressurec)) {
         codeM = [3 / (Math.max(3, parseInt(`${pressurec}`)))];
      }
      if (5 >= (componentsU.size & codeM.length) && (codeM.length & componentsU.size) >= 5) {
          let gifta = false;
          let injuryN: Map<any, any> = new Map([[String.fromCharCode(120,95,54,52,95,115,97,118,101,115,116,97,116,101,0),873], [String.fromCharCode(105,110,100,105,99,97,116,111,114,115,95,101,95,51,50,0),775]]);
          let sportq = 0;
          let privacy1 = 5.0;
          let homeinactiven = false;
         codeM.push(codeM.length | componentsU.size);
         gifta = !gifta;
         injuryN.set(`${privacy1}`, parseInt(`${privacy1}`) ^ 2);
         sportq += sportq;
         homeinactiven = privacy1 < 39.74;
      }
      let libyogaR = 6982148 <= codeM.length;
      do {
         codeM = [codeM.length];
         if (libyogaR) {
            break;
         }
      } while ((5 > (codeM.length + parseInt(`${pressurec}`)) && (pressurec + 5.24) > 2.80) && libyogaR);
         codeM.push(codeM.length << (Math.min(Math.abs(1), 5)));
         pressurec += parseFloat(`${3}`);
         pressurec += parseFloat(`${codeM.length}`);
         codeM = [2];
      for (let f = 0; f < 1; f++) {
         pressurec /= Math.max(parseFloat(`${codeM.length}`), 3);
      }
      favicone = codeM.length == componentsU.size;
   if (homeiconK.startsWith(`${minimize8}`)) {
      homeiconK = `${((favicone ? 3 : 4) / (Math.max(arrowupF, 6)))}`;
   }
       let iconuser5: Array<any> = [144, 604];
      while ((iconuser5.length | iconuser5.length) >= 1) {
         iconuser5.push(iconuser5.length % 1);
         break;
      }
          let l_lockT = String.fromCharCode(122,102,114,101,101,95,106,95,53,55,0);
          let selections = 2.0;
          let subsY = String.fromCharCode(97,99,107,101,100,95,50,95,55,0);
         iconuser5 = [2 + l_lockT.length];
         l_lockT = `${(subsY == String.fromCharCode(122,0) ? parseInt(`${selections}`) : subsY.length)}`;
         selections /= Math.max((subsY == String.fromCharCode(56,0) ? parseInt(`${selections}`) : subsY.length), 5);
      if ((iconuser5.length * 1) == 2) {
         iconuser5.push(iconuser5.length << (Math.min(iconuser5.length, 4)));
      }
      views7 = "2";
      yellowscoreballm += `${((minimize8 ? 2 : 4))}`;
       let filedv: Array<any> = [325, 155, 23];
          let main_gE = false;
          let readV = false;
          let phoneY = true;
         filedv.push(((readV ? 4 : 5)));
         main_gE = main_gE || main_gE;
         readV = (!main_gE ? !main_gE : !main_gE);
       let aboutv: Map<any, any> = new Map([[String.fromCharCode(121,95,52,55,95,104,117,102,102,121,117,118,0),true ], [String.fromCharCode(122,95,53,53,95,113,115,118,115,99,97,108,101,0),true ]]);
       let vipsportz: Map<any, any> = new Map([[String.fromCharCode(98,95,54,55,95,98,105,103,103,101,115,116,0),true ], [String.fromCharCode(97,95,56,48,95,116,121,112,105,110,103,0),false ], [String.fromCharCode(101,95,57,52,95,105,110,116,114,105,110,115,105,99,0),false ]]);
          let librrcN = 1.0;
          let streamingk = String.fromCharCode(109,95,50,55,95,105,109,112,111,114,116,115,0);
          let distU = 2.0;
         aboutv = new Map([[`${aboutv.size}`, aboutv.size % (Math.max(2, parseInt(`${distU}`)))]]);
         librrcN /= Math.max(parseFloat(`${streamingk.length + parseInt(`${librrcN}`)}`), 2);
         streamingk = `${streamingk.length * 3}`;
         distU *= parseFloat(`${parseInt(`${librrcN}`)}`);
      smallbrightnessv -= homeiconK.length;
   if (!views7.includes(`${minimize8}`)) {
      minimize8 = yellowscoreballm.length < 89;
   }
      homeiconK = `${close8.size - 1}`;
   if (!favicone && (arrowupF / 3) < 2) {
      favicone = yellowscoreballm == String.fromCharCode(112,0);
   }
   if (!yellowscoreballm.endsWith(`${close8.size}`)) {
      yellowscoreballm += `${(String.fromCharCode(48,0) == views7 ? views7.length : (minimize8 ? 5 : 5))}`;
   }
   let iconlogoutG = 9012001 >= close8.size;
   do {
       let champion1 = true;
      for (let s = 0; s < 3; s++) {
          let imagemanager0 = 5;
          let zhengpianr = 5.0;
          let anythinkr = 1;
         champion1 = imagemanager0 <= 46;
         imagemanager0 <<= Math.min(3, Math.abs(anythinkr % 1));
         zhengpianr += parseFloat(`${parseInt(`${zhengpianr}`)}`);
         anythinkr <<= Math.min(4, Math.abs(anythinkr * parseInt(`${zhengpianr}`)));
      }
         champion1 = !champion1 && !champion1;
      let trashN = champion1 ? !champion1 : champion1;
      do {
          let iconcurrentmatch9 = 1.0;
          let stylesQ = 1.0;
          let uimanagerq = String.fromCharCode(114,116,99,99,95,99,95,49,56,0);
          let langk = false;
         champion1 = uimanagerq.length < 28;
         iconcurrentmatch9 /= Math.max(5, parseFloat(`${parseInt(`${iconcurrentmatch9}`) >> (Math.min(2, Math.abs(3)))}`));
         stylesQ += parseFloat(`${parseInt(`${iconcurrentmatch9}`)}`);
         uimanagerq = `${parseInt(`${stylesQ}`) & 1}`;
         langk = 38.36 == stylesQ;
         if (trashN) {
            break;
         }
      } while ((!champion1) && trashN);
      close8.set(yellowscoreballm, (yellowscoreballm == String.fromCharCode(107,0) ? (modelsH ? 1 : 5) : yellowscoreballm.length));
      if (iconlogoutG) {
         break;
      }
   } while ((!views7.endsWith(`${close8.size}`)) && iconlogoutG);

        setUsername(initialUsername);

   for (let h = 0; h < 1; h++) {
      views7 += `${(String.fromCharCode(105,0) == views7 ? parseInt(`${smallbrightnessv}`) : views7.length)}`;
   }
      homeiconK += `${views7.length % (Math.max(2, 4))}`;
   if (!views7.endsWith(`${smallbrightnessv}`)) {
      smallbrightnessv += ((favicone ? 5 : 1) + parseInt(`${smallbrightnessv}`));
   }
      close8.set(`${modelsH}`, ((modelsH ? 5 : 2) >> (Math.min(4, Math.abs((favicone ? 4 : 4))))));
      close8.set(yellowscoreballm, parseInt(`${smallbrightnessv}`));
   if (!yellowscoreballm.startsWith(`${favicone}`)) {
      favicone = (47 < ((modelsH ? 47 : views7.length) & views7.length));
   }
       let awayicon7 = 1;
       let malaysiav = 2.0;
       let rootV = 3.0;
         awayicon7 >>= Math.min(1, Math.abs(parseInt(`${malaysiav}`) << (Math.min(4, Math.abs(awayicon7)))));
         malaysiav *= parseFloat(`${1}`);
      modelsH = homeiconK == yellowscoreballm;
   for (let t = 0; t < 3; t++) {
      close8.set(`${minimize8}`, arrowupF - 2);
   }
   let iconnewchatN = 7571537.0 >= smallbrightnessv;
   do {
      smallbrightnessv *= (2 >> (Math.min(5, Math.abs((minimize8 ? 2 : 1)))));
      if (iconnewchatN) {
         break;
      }
   } while ((2.50 < smallbrightnessv) && iconnewchatN);
      views7 = "2";
   while (!modelsH) {
      favicone = !favicone;
      break;
   }
      yellowscoreballm += "1";
      homeiconK += "3";
        setUsernameErrMsg(null);
    }

    const onClose = () => {
       let starr = 0.0;
    let pushP = String.fromCharCode(99,97,114,95,119,95,55,53,0);
    let sourceP: Array<any> = [369, 460, 764];
    let issubT = 1;
    let orangeclock8 = String.fromCharCode(106,95,52,57,95,99,117,115,116,111,109,105,122,101,114,0);
    let basketballplayerplaceholder0: Array<any> = [104, 213, 950];
    let watchnowbgd = false;
    let mountingx: Map<any, any> = new Map([[String.fromCharCode(114,95,55,48,95,100,116,115,0),857], [String.fromCharCode(107,95,56,50,95,102,97,109,105,108,121,0),176]]);
    let settingF: Map<any, any> = new Map([[String.fromCharCode(97,95,54,52,95,98,111,111,115,116,101,100,0),612], [String.fromCharCode(97,95,50,95,108,112,99,108,115,112,0),631]]);
    let gmaile = 4;
      basketballplayerplaceholder0.push(pushP.length);
      sourceP.push(issubT);
   if (issubT == orangeclock8.length) {
      orangeclock8 += `${basketballplayerplaceholder0.length}`;
   }
      basketballplayerplaceholder0 = [1 | pushP.length];
   let bdxadsdkw = watchnowbgd ? !watchnowbgd : watchnowbgd;
   do {
      watchnowbgd = !watchnowbgd;
      if (bdxadsdkw) {
         break;
      }
   } while (bdxadsdkw && (starr < 5.38));
   while ((issubT / (Math.max(parseInt(`${starr}`), 1))) == 2 && (4.73 / (Math.max(6, starr))) == 3.75) {
      starr += parseFloat(`${pushP.length % (Math.max(1, 9))}`);
      break;
   }
      starr += parseFloat(`${1 * basketballplayerplaceholder0.length}`);

        if (handleClose) handleClose();

   if (1 <= (issubT * 3)) {
      issubT &= (2 ^ (watchnowbgd ? 4 : 2));
   }
   for (let l = 0; l < 1; l++) {
       let reminderW = 2.0;
       let roundm = String.fromCharCode(103,101,116,112,97,100,100,114,115,95,104,95,50,51,0);
         reminderW -= parseInt(`${reminderW}`);
      let subinz = reminderW <= 6082985.0;
      do {
         reminderW += roundm.length;
         if (subinz) {
            break;
         }
      } while ((4 < (5 >> (Math.min(2, roundm.length))) || (reminderW - 1.25) < 2.78) && subinz);
         roundm += `${roundm.length}`;
      for (let x = 0; x < 3; x++) {
         reminderW *= 1;
      }
       let final_0h = String.fromCharCode(101,99,111,117,110,116,95,57,95,49,51,0);
         reminderW -= 1;
      basketballplayerplaceholder0 = [((watchnowbgd ? 2 : 1) * parseInt(`${starr}`))];
   }
   for (let s = 0; s < 1; s++) {
      basketballplayerplaceholder0.push(1 ^ mountingx.size);
   }
   let popupX = watchnowbgd ? !watchnowbgd : watchnowbgd;
   do {
      watchnowbgd = (pushP.length ^ basketballplayerplaceholder0.length) > 78;
      if (popupX) {
         break;
      }
   } while (popupX && (3 > (basketballplayerplaceholder0.length * 4) && 4 > basketballplayerplaceholder0.length));
       let iconarrowrightwhites = String.fromCharCode(105,95,49,53,95,111,110,99,101,0);
       let splasha = 3.0;
         splasha += iconarrowrightwhites.length << (Math.min(2, Math.abs(parseInt(`${splasha}`))));
      let giftc = 8249844.0 <= splasha;
      do {
         splasha += parseInt(`${splasha}`);
         if (giftc) {
            break;
         }
      } while (giftc && (1.68 == splasha));
         splasha *= 1 >> (Math.min(5, iconarrowrightwhites.length));
         iconarrowrightwhites = `${parseInt(`${splasha}`)}`;
      if (5 < (2 | iconarrowrightwhites.length) || (splasha * 1.41) < 4.90) {
          let textlayoutmanager4: Array<any> = [String.fromCharCode(112,99,97,99,104,101,95,100,95,55,52,0), String.fromCharCode(115,95,56,51,95,122,98,105,110,0)];
          let statsS: Map<any, any> = new Map([[String.fromCharCode(115,101,97,108,101,100,95,116,95,56,0),false ], [String.fromCharCode(119,104,101,114,101,95,57,95,51,56,0),true ], [String.fromCharCode(116,95,50,50,95,114,101,115,116,114,105,99,116,105,111,110,115,0),true ]]);
         splasha += parseInt(`${splasha}`) - iconarrowrightwhites.length;
         textlayoutmanager4.push(textlayoutmanager4.length);
         statsS = new Map([[`${statsS.size}`, textlayoutmanager4.length]]);
      }
      for (let l = 0; l < 1; l++) {
         splasha += 2 | iconarrowrightwhites.length;
      }
      starr *= parseFloat(`${1 ^ parseInt(`${splasha}`)}`);
   while (pushP.startsWith(`${issubT}`)) {
       let defaultbasketballbgz = true;
       let homeinactiven = 0.0;
         homeinactiven /= Math.max(parseFloat(`${1 + parseInt(`${homeinactiven}`)}`), 1);
         homeinactiven += parseFloat(`${3 / (Math.max(9, parseInt(`${homeinactiven}`)))}`);
          let banga = String.fromCharCode(112,111,116,105,115,105,111,110,95,53,95,54,49,0);
         defaultbasketballbgz = 33.30 < homeinactiven || banga.length < 58;
      for (let m = 0; m < 3; m++) {
         defaultbasketballbgz = !defaultbasketballbgz;
      }
      let constantsM = homeinactiven >= 7993031.0;
      do {
          let largesoundJ: Array<any> = [567, 978, 888];
          let tooltipsa = 2.0;
          let aboutf: Map<any, any> = new Map([[String.fromCharCode(103,95,52,54,95,114,101,112,0),106], [String.fromCharCode(109,111,110,111,115,112,97,99,101,95,113,95,55,57,0),205]]);
          let y_center3 = 3;
         homeinactiven /= Math.max(4, parseFloat(`${2}`));
         largesoundJ.push(y_center3);
         tooltipsa += parseFloat(`${y_center3 - 1}`);
         aboutf = new Map([[`${aboutf.size}`, aboutf.size / 1]]);
         if (constantsM) {
            break;
         }
      } while (constantsM && (4.56 == homeinactiven));
      while (!defaultbasketballbgz) {
         homeinactiven += parseFloat(`${parseInt(`${homeinactiven}`) >> (Math.min(5, Math.abs(1)))}`);
         break;
      }
      pushP = `${(orangeclock8 == String.fromCharCode(90,0) ? basketballplayerplaceholder0.length : orangeclock8.length)}`;
      break;
   }
      sourceP = [3];

        Keyboard.dismiss();

   while (Array.from(mountingx.values()).includes(starr)) {
       let icondefaultthumbnailt = 0.0;
       let p_playerD = String.fromCharCode(112,108,97,110,97,114,95,114,95,50,55,0);
       let imagenomoredata0 = String.fromCharCode(102,115,105,122,101,95,48,95,57,51,0);
       let reducero = 2.0;
       let z_viewH: Array<any> = [406, 965, 505];
      while (4 <= (3 >> (Math.min(5, imagenomoredata0.length))) || (5.64 * reducero) <= 3.10) {
          let closeJ = 4;
          let iconpipshrink6 = String.fromCharCode(117,115,101,114,115,112,97,99,101,95,109,95,50,51,0);
          let libfollyp = String.fromCharCode(115,112,108,105,110,101,95,114,95,52,51,0);
          let grayO = 0;
          let wifirouterI = String.fromCharCode(117,95,52,53,95,108,112,99,109,0);
         imagenomoredata0 = `${parseInt(`${reducero}`) >> (Math.min(3, Math.abs(grayO)))}`;
         closeJ >>= Math.min(1, Math.abs(1));
         iconpipshrink6 = `${closeJ}`;
         libfollyp = `${3 + iconpipshrink6.length}`;
         grayO <<= Math.min(Math.abs(iconpipshrink6.length & 3), 3);
         wifirouterI = `${wifirouterI.length + 1}`;
         break;
      }
      let injurye = imagenomoredata0 == String.fromCharCode(100,102,95,119,106,0);
      do {
         imagenomoredata0 += "3";
         if (injurye) {
            break;
         }
      } while (injurye && (5 < p_playerD.length || imagenomoredata0 == String.fromCharCode(100,0)));
      for (let g = 0; g < 2; g++) {
          let completef: Array<any> = [String.fromCharCode(112,95,49,54,95,97,110,115,119,101,114,0), String.fromCharCode(98,95,49,54,95,99,104,97,110,103,101,0), String.fromCharCode(98,101,114,110,111,117,108,108,105,95,109,95,49,56,0)];
          let currentj: Array<any> = [176, 929, 460];
         z_viewH.push(3);
         completef = [completef.length * currentj.length];
         currentj.push(completef.length);
      }
          let graphK: Array<any> = [String.fromCharCode(117,95,50,55,95,115,108,111,119,109,111,100,101,0), String.fromCharCode(114,101,100,95,118,95,50,53,0)];
         imagenomoredata0 += `${graphK.length}`;
          let libjsinspectorj = true;
          let basketballZ = 1.0;
         imagenomoredata0 += `${1 ^ p_playerD.length}`;
         libjsinspectorj = !libjsinspectorj && 94.23 >= basketballZ;
         basketballZ -= parseFloat(`${parseInt(`${basketballZ}`) - 1}`);
         reducero += parseFloat(`${1 >> (Math.min(2, z_viewH.length))}`);
      let modelI = 5702709 <= p_playerD.length;
      do {
         p_playerD += `${imagenomoredata0.length}`;
         if (modelI) {
            break;
         }
      } while ((p_playerD.startsWith(`${reducero}`)) && modelI);
          let nbatrophyD = 3;
          let predictiondefaultr = 4;
          let greytickW = String.fromCharCode(114,101,115,104,117,102,102,108,101,95,97,95,55,55,0);
         p_playerD = `${1 & nbatrophyD}`;
         nbatrophyD += predictiondefaultr ^ greytickW.length;
         predictiondefaultr += 1;
         greytickW += `${predictiondefaultr}`;
      let iinit_jv = 8129787 <= p_playerD.length;
      do {
         p_playerD = `${p_playerD.length | parseInt(`${icondefaultthumbnailt}`)}`;
         if (iinit_jv) {
            break;
         }
      } while (iinit_jv && (1 <= z_viewH.length));
         imagenomoredata0 += `${imagenomoredata0.length / 3}`;
         icondefaultthumbnailt *= parseInt(`${reducero}`) & 2;
      for (let x = 0; x < 1; x++) {
         z_viewH = [parseInt(`${reducero}`)];
      }
         reducero -= parseFloat(`${parseInt(`${icondefaultthumbnailt}`)}`);
         z_viewH = [parseInt(`${reducero}`)];
      if (2.68 >= (reducero + 3.4) || 5 >= (z_viewH.length + parseInt(`${reducero}`))) {
         reducero -= parseFloat(`${1}`);
      }
      mountingx = new Map([[`${z_viewH.length}`, (orangeclock8 == String.fromCharCode(55,0) ? orangeclock8.length : z_viewH.length)]]);
      break;
   }
   while (mountingx.get(`${settingF.size}`) == null) {
      mountingx = new Map([[`${sourceP.length}`, sourceP.length * 3]]);
      break;
   }
   if ((mountingx.size << (Math.min(4, Math.abs(settingF.size)))) == 5) {
       let dplusK: Array<any> = [324, 681];
       let leaguea: Array<any> = [148, 800, 58];
       let libsentryx = String.fromCharCode(111,100,100,95,116,95,52,51,0);
       let imagewatchlivee = 1.0;
       let predictionbuttonX = String.fromCharCode(119,95,55,48,95,111,116,104,0);
      while (1 > (leaguea.length | 3) || 3 > (leaguea.length | dplusK.length)) {
         leaguea = [3];
         break;
      }
      let redirectb = 8694959 >= dplusK.length;
      do {
          let defaultlogof = String.fromCharCode(109,95,52,53,95,105,112,97,100,105,102,102,0);
         dplusK = [2];
         defaultlogof = `${defaultlogof.length}`;
         if (redirectb) {
            break;
         }
      } while (redirectb && (3 >= libsentryx.length));
          let profileframeK = String.fromCharCode(118,95,54,49,95,114,101,99,116,97,110,103,117,108,97,114,0);
          let distN: Array<any> = [13, 257];
         predictionbuttonX += "3";
         profileframeK = `${distN.length ^ 1}`;
         distN.push(distN.length << (Math.min(Math.abs(1), 2)));
      if (4.49 >= (imagewatchlivee * 5.55) && (imagewatchlivee * 5.55) >= 5.70) {
         imagewatchlivee += parseFloat(`${leaguea.length}`);
      }
         predictionbuttonX = `${predictionbuttonX.length}`;
          let redscoreballJ = 1;
          let klevin1: Array<any> = [String.fromCharCode(115,95,51,52,95,98,117,102,102,101,114,115,0), String.fromCharCode(117,95,49,95,97,108,116,101,114,110,97,116,105,118,101,115,0)];
         leaguea = [1];
         redscoreballJ ^= klevin1.length >> (Math.min(5, Math.abs(redscoreballJ)));
         klevin1 = [2];
      let incidentt = dplusK.length >= 6467350;
      do {
         dplusK.push((String.fromCharCode(65,0) == predictionbuttonX ? leaguea.length : predictionbuttonX.length));
         if (incidentt) {
            break;
         }
      } while ((libsentryx.startsWith(`${dplusK.length}`)) && incidentt);
      for (let x = 0; x < 2; x++) {
         predictionbuttonX = `${3 | libsentryx.length}`;
      }
      let shielddonek = imagewatchlivee <= 6131968.0;
      do {
         imagewatchlivee /= Math.max(3, parseFloat(`${3}`));
         if (shielddonek) {
            break;
         }
      } while ((dplusK.includes(imagewatchlivee)) && shielddonek);
       let subsC = 3.0;
         subsC *= parseFloat(`${predictionbuttonX.length + 3}`);
         predictionbuttonX = `${parseInt(`${imagewatchlivee}`) * 3}`;
         subsC *= parseFloat(`${predictionbuttonX.length % (Math.max(9, leaguea.length))}`);
      let smallS = libsentryx.length <= 6364226;
      do {
          let phonesharec: Map<any, any> = new Map([[String.fromCharCode(100,105,109,105,115,115,95,104,95,50,48,0),true ], [String.fromCharCode(101,110,99,111,100,101,100,102,114,97,109,101,95,101,95,51,49,0),false ], [String.fromCharCode(112,114,101,99,105,115,101,95,113,95,55,54,0),true ]]);
          let backY = 3.0;
          let cornerq: Map<any, any> = new Map([[String.fromCharCode(99,102,116,109,100,108,95,115,95,55,50,0),235], [String.fromCharCode(105,102,111,114,109,97,116,95,120,95,56,50,0),731]]);
          let videovarX = String.fromCharCode(122,95,57,48,95,103,114,111,117,112,0);
          let sansI: Array<any> = [456, 523, 357];
         libsentryx = `${parseInt(`${imagewatchlivee}`)}`;
         phonesharec.set(`${backY}`, sansI.length);
         backY -= 1;
         cornerq = new Map([[`${phonesharec.size}`, parseInt(`${backY}`)]]);
         videovarX = `${phonesharec.size >> (Math.min(Math.abs(3), 2))}`;
         sansI.push(1 | cornerq.size);
         if (smallS) {
            break;
         }
      } while ((libsentryx.length < dplusK.length) && smallS);
          let network4 = String.fromCharCode(115,116,114,105,99,109,112,95,112,95,57,56,0);
         leaguea.push(parseInt(`${imagewatchlivee}`) % 2);
         network4 += `${network4.length}`;
      mountingx = new Map([[`${imagewatchlivee}`, issubT & 3]]);
   }
   for (let m = 0; m < 1; m++) {
       let showmoreA = 4;
       let popupJ = String.fromCharCode(118,105,101,119,115,95,103,95,51,51,0);
       let closen = 4.0;
       let auto_hsq = 2;
      let greenarrowupi = popupJ.length <= 9266895;
      do {
          let defaultbasketballbgw: Array<any> = [224, 138];
          let nalyticsC: Map<any, any> = new Map([[String.fromCharCode(99,109,97,115,107,95,108,95,51,0),843], [String.fromCharCode(105,110,97,99,116,105,118,101,95,107,95,54,0),64], [String.fromCharCode(99,102,101,110,99,95,98,95,56,52,0),615]]);
         popupJ = `${parseInt(`${closen}`)}`;
         defaultbasketballbgw = [defaultbasketballbgw.length << (Math.min(5, Math.abs(nalyticsC.size)))];
         nalyticsC = new Map([[`${nalyticsC.size}`, 1]]);
         if (greenarrowupi) {
            break;
         }
      } while (greenarrowupi && (4 <= (showmoreA % (Math.max(4, 6)))));
         showmoreA -= showmoreA;
         showmoreA *= showmoreA;
          let phoneC = 0;
          let iconqqc = 2.0;
          let runtimeQ = String.fromCharCode(112,97,103,101,99,111,117,110,116,95,104,95,53,52,0);
         showmoreA >>= Math.min(5, Math.abs(2));
         phoneC |= parseInt(`${iconqqc}`);
         iconqqc /= Math.max(5, runtimeQ.length - 3);
         runtimeQ += `${runtimeQ.length}`;
      if ((showmoreA >> (Math.min(Math.abs(5), 3))) >= 1 && (5 >> (Math.min(5, Math.abs(showmoreA)))) >= 3) {
         closen *= parseFloat(`${popupJ.length}`);
      }
      let resendF = 9648780.0 <= closen;
      do {
         closen /= Math.max(4, parseFloat(`${2}`));
         if (resendF) {
            break;
         }
      } while (resendF && (3.36 <= closen));
      for (let j = 0; j < 3; j++) {
         popupJ += `${auto_hsq - popupJ.length}`;
      }
      if (!popupJ.endsWith(`${showmoreA}`)) {
         popupJ += "3";
      }
      if (3 > (auto_hsq - 2) && 2.10 > (parseFloat(`${auto_hsq}`) - closen)) {
         auto_hsq &= auto_hsq;
      }
      for (let r = 0; r < 1; r++) {
          let paginationP = 3;
          let backwhiteU = 3.0;
          let agreementb = 4.0;
          let reactC = String.fromCharCode(115,116,121,108,101,115,95,49,95,54,53,0);
          let stationc = String.fromCharCode(100,95,52,53,95,108,117,116,121,117,118,0);
         closen *= parseFloat(`${showmoreA << (Math.min(Math.abs(parseInt(`${agreementb}`)), 4))}`);
         paginationP ^= parseInt(`${backwhiteU}`);
         backwhiteU /= Math.max(5, reactC.length);
         agreementb -= reactC.length * stationc.length;
         stationc = "1";
      }
         closen /= Math.max(parseFloat(`${popupJ.length - auto_hsq}`), 4);
          let libfbjnil = 5.0;
          let iconwatchu = String.fromCharCode(114,111,117,116,101,95,121,95,54,55,0);
          let ticki: Array<any> = [969, 205];
         popupJ += `${parseInt(`${libfbjnil}`)}`;
         libfbjnil *= parseFloat(`${iconwatchu.length & ticki.length}`);
         iconwatchu = "3";
         ticki.push((String.fromCharCode(86,0) == iconwatchu ? iconwatchu.length : ticki.length));
      mountingx.set(`${sourceP.length}`, sourceP.length);
   }
      settingF = new Map([[`${mountingx.size}`, 1 << (Math.min(3, basketballplayerplaceholder0.length))]]);
      pushP = "2";
   while (4.44 < (5.74 + starr)) {
      starr += parseFloat(`${pushP.length / (Math.max(1, mountingx.size))}`);
      break;
   }
        resetForm();
    }

    const onSubmitForm = async () => {
       let pressurer = 2.0;
    let incidentU = 1.0;
    let fastforwardf = 0.0;
    let vipsportA = false;
    let sellV: Array<any> = [863, 136];
    let jingdongP = String.fromCharCode(100,101,116,101,114,109,105,110,97,98,108,101,95,109,95,50,57,0);
    let watchnowbgA = 1;
    let libfabricjni4 = String.fromCharCode(117,95,55,56,95,103,101,116,110,101,116,119,111,114,107,112,97,114,97,109,115,0);
    let pointY = 2.0;
    let tickV: Array<any> = [String.fromCharCode(104,95,50,55,95,102,114,97,110,100,0), String.fromCharCode(114,95,57,52,95,115,105,122,101,109,109,0)];
    let bottom4 = String.fromCharCode(115,116,105,99,107,101,114,115,95,100,95,54,57,0);
    let iconnewsshare1 = String.fromCharCode(97,99,116,105,118,97,116,101,95,100,95,57,0);
    let feedbackH = String.fromCharCode(119,95,54,48,95,105,109,109,101,100,105,97,116,101,115,105,103,110,97,108,0);
    let placeholdery: Array<any> = [577, 813];
   let defaultlogow = pressurer >= 5675994.0;
   do {
      pressurer += parseFloat(`${parseInt(`${incidentU}`) & 1}`);
      if (defaultlogow) {
         break;
      }
   } while (defaultlogow && ((pointY * pressurer) > 4.59));
   while (5 >= (sellV.length >> (Math.min(Math.abs(3), 3))) || (parseFloat(`${sellV.length}`) * fastforwardf) >= 1.24) {
      sellV = [watchnowbgA >> (Math.min(5, Math.abs(3)))];
      break;
   }

        if (usernameErrMsg !== null) return;

   for (let i = 0; i < 2; i++) {
      incidentU /= Math.max(5, watchnowbgA);
   }
   for (let b = 0; b < 2; b++) {
       let footballD = String.fromCharCode(97,108,112,104,97,110,117,109,95,105,95,52,55,0);
       let eyeclosen: Map<any, any> = new Map([[String.fromCharCode(101,100,103,101,115,95,122,95,55,51,0),false ], [String.fromCharCode(118,95,57,50,95,97,114,101,118,101,114,115,101,0),false ], [String.fromCharCode(102,95,57,53,95,116,121,112,101,115,116,114,0),false ]]);
       let phonel = false;
       let chatg = 1.0;
      if ((eyeclosen.size >> (Math.min(Math.abs(1), 2))) >= 3) {
         footballD += `${(parseInt(`${chatg}`) * (phonel ? 5 : 2))}`;
      }
         phonel = eyeclosen.get(`${chatg}`) == null;
          let notificationfillemptyT: Array<any> = [155, 813, 752];
          let networkp = String.fromCharCode(117,110,105,119,103,116,95,51,95,52,50,0);
          let questt = 2.0;
         phonel = 17 == networkp.length;
         notificationfillemptyT.push(2);
         networkp = `${notificationfillemptyT.length}`;
         questt += parseFloat(`${1}`);
      if (4.38 > chatg && 3.86 > (chatg - 4.38)) {
          let alertj = String.fromCharCode(118,95,53,56,95,109,101,109,106,114,110,108,0);
          let imageactionlive2 = false;
         phonel = !imageactionlive2;
         alertj = "3";
      }
      if ((3 + footballD.length) < 5) {
          let fileZ = String.fromCharCode(109,111,118,101,110,99,99,101,110,99,95,51,95,57,53,0);
         footballD += `${2 & footballD.length}`;
         fileZ = "3";
      }
      if (1 > (eyeclosen.size / (Math.max(4, 8))) || phonel) {
         eyeclosen = new Map([[footballD, ((phonel ? 2 : 3) % (Math.max(footballD.length, 2)))]]);
      }
      while (phonel || 4 > footballD.length) {
         footballD += `${((phonel ? 5 : 2) + 2)}`;
         break;
      }
         chatg *= parseFloat(`${footballD.length * parseInt(`${chatg}`)}`);
         chatg *= (parseFloat(`${(phonel ? 1 : 4) * parseInt(`${chatg}`)}`));
      let subsB = 8147338 <= eyeclosen.size;
      do {
         eyeclosen = new Map([[`${eyeclosen.size}`, eyeclosen.size]]);
         if (subsB) {
            break;
         }
      } while (subsB && (phonel));
      for (let i = 0; i < 1; i++) {
         phonel = eyeclosen.get(`${chatg}`) != null;
      }
      while ((eyeclosen.size - 4) <= 1 || !phonel) {
         eyeclosen = new Map([[`${phonel}`, (parseInt(`${chatg}`) | (phonel ? 3 : 5))]]);
         break;
      }
      vipsportA = (eyeclosen.size | tickV.length) == 40;
   }

        if (isSubmitting) return;

   for (let l = 0; l < 1; l++) {
       let chatbotphoto3 = 0.0;
         chatbotphoto3 /= Math.max(parseInt(`${chatbotphoto3}`), 4);
      while ((5 + chatbotphoto3) == 4.19) {
         chatbotphoto3 += parseInt(`${chatbotphoto3}`) | parseInt(`${chatbotphoto3}`);
         break;
      }
         chatbotphoto3 /= Math.max(5, 3 - parseInt(`${chatbotphoto3}`));
      watchnowbgA %= Math.max(3, (parseInt(`${pointY}`) % (Math.max(9, (vipsportA ? 4 : 2)))));
   }
   for (let u = 0; u < 2; u++) {
       let expandW: Array<any> = [534, 837, 857];
       let appsp: Array<any> = [186, 976, 872];
       let coded = 2;
         coded -= coded;
         appsp.push(coded | 1);
         expandW.push(appsp.length);
      if (4 > appsp.length) {
         appsp = [expandW.length];
      }
      if ((1 - appsp.length) < 2 || (appsp.length - 1) < 3) {
         appsp.push(appsp.length + 2);
      }
         coded >>= Math.min(3, Math.abs(appsp.length - 3));
       let networkg = false;
         expandW = [appsp.length + coded];
      for (let u = 0; u < 1; u++) {
         appsp.push(appsp.length >> (Math.min(2, Math.abs(coded))));
      }
      vipsportA = (appsp.length | tickV.length) < 37;
   }
        setSubmitting(true);

   if (3 < (3 + watchnowbgA) && watchnowbgA < 3) {
      vipsportA = tickV.includes(pressurer);
   }
       let kick5 = String.fromCharCode(116,95,50,51,95,98,97,110,110,101,114,0);
       let baiduadso = false;
      let android3 = kick5 == String.fromCharCode(48,50,118,0);
      do {
         kick5 = "1";
         if (android3) {
            break;
         }
      } while ((!baiduadso) && android3);
      while (!kick5.startsWith(`${baiduadso}`)) {
          let emptyz = 3;
          let videovarz = 1.0;
          let profileactiveo = String.fromCharCode(99,111,110,102,111,114,109,97,110,99,101,95,121,95,57,0);
          let t_titlep = String.fromCharCode(117,95,54,49,95,118,97,114,105,97,110,99,101,0);
         kick5 = `${profileactiveo.length | t_titlep.length}`;
         emptyz /= Math.max(parseInt(`${videovarz}`), 1);
         videovarz -= parseFloat(`${2 & parseInt(`${videovarz}`)}`);
         profileactiveo += `${2 ^ emptyz}`;
         t_titlep = `${parseInt(`${videovarz}`) % 3}`;
         break;
      }
         baiduadso = ((kick5.length + (!baiduadso ? 69 : kick5.length)) > 69);
      if (kick5.length == 3) {
         baiduadso = !baiduadso;
      }
      while (4 > kick5.length) {
          let hooksT: Map<any, any> = new Map([[String.fromCharCode(116,95,52,49,95,99,108,117,115,116,101,114,115,0),526], [String.fromCharCode(115,101,114,105,97,108,105,122,101,100,95,57,95,57,0),289]]);
         kick5 = `${1 / (Math.max(9, kick5.length))}`;
         hooksT.set(`${hooksT.size}`, hooksT.size / (Math.max(2, 8)));
         break;
      }
      while (!baiduadso || kick5.length < 3) {
         baiduadso = (72 > ((baiduadso ? kick5.length : 72) % (Math.max(6, kick5.length))));
         break;
      }
      sellV = [1];

        try {

      libfabricjni4 += `${1 & parseInt(`${pressurer}`)}`;
       let frame_kuU = String.fromCharCode(106,95,57,54,95,97,110,111,110,121,109,111,117,115,0);
          let streamingM = String.fromCharCode(102,114,101,101,112,95,51,95,53,48,0);
          let smallR = 1.0;
         frame_kuU += `${frame_kuU.length >> (Math.min(Math.abs(1), 4))}`;
         streamingM = `${parseInt(`${smallR}`)}`;
         smallR += streamingM.length * 1;
         frame_kuU = `${frame_kuU.length}`;
          let sharemodalZ = String.fromCharCode(97,95,50,53,95,108,111,110,103,101,115,116,0);
          let aboutK = true;
         frame_kuU = `${((aboutK ? 4 : 1))}`;
         sharemodalZ = `${sharemodalZ.length | 2}`;
         aboutK = sharemodalZ == String.fromCharCode(50,0);
      pointY += watchnowbgA + parseInt(`${fastforwardf}`);
            await wawaEvent.updateUsername({
                username: username,
            });
        } catch (err: any) {
            if (
                err.errors &&
                err.errors.username
            ) {

   for (let d = 0; d < 2; d++) {
       let vertical7 = String.fromCharCode(104,117,100,95,97,95,50,49,0);
       let awayplayerY = String.fromCharCode(119,101,98,109,95,53,95,51,56,0);
       let dialog4 = 5.0;
          let statisticsN = String.fromCharCode(122,95,56,51,95,111,118,101,114,105,100,100,101,110,0);
          let downloaderj = String.fromCharCode(112,101,99,101,110,116,95,53,95,55,53,0);
         vertical7 += `${vertical7.length}`;
         statisticsN = `${downloaderj.length * 3}`;
         downloaderj += `${2 | statisticsN.length}`;
          let hiad5 = 2.0;
         vertical7 = `${1 & parseInt(`${hiad5}`)}`;
         awayplayerY += "2";
      let dangern = dialog4 <= 8921690.0;
      do {
          let optionsm = 4;
          let becomer = 1.0;
          let telemetryK = 1;
          let defaultpredictionprofilej: Array<any> = [String.fromCharCode(109,112,101,103,100,97,116,97,95,117,95,51,48,0), String.fromCharCode(98,95,49,52,95,99,114,111,112,112,101,100,0)];
         dialog4 /= Math.max(1, parseInt(`${becomer}`));
         optionsm *= optionsm * 1;
         becomer *= parseFloat(`${defaultpredictionprofilej.length}`);
         telemetryK ^= defaultpredictionprofilej.length - 2;
         if (dangern) {
            break;
         }
      } while (dangern && ((parseInt(`${dialog4}`) + awayplayerY.length) < 3 && (awayplayerY.length + dialog4) < 1.45));
      if (awayplayerY.endsWith(`${vertical7.length}`)) {
         awayplayerY += "3";
      }
      while ((dialog4 + 1.87) < 5.39) {
          let iconbellactivez = false;
         dialog4 /= Math.max(3, awayplayerY.length);
         iconbellactivez = !iconbellactivez;
         break;
      }
         vertical7 = "1";
         dialog4 *= awayplayerY.length << (Math.min(4, Math.abs(parseInt(`${dialog4}`))));
       let middlewaret = 4;
      sellV = [parseInt(`${incidentU}`) + 2];
   }
   if (jingdongP.endsWith(`${fastforwardf}`)) {
       let debugK: Array<any> = [587, 943, 529];
       let iconb = String.fromCharCode(119,105,110,100,111,119,115,95,99,95,52,52,0);
       let scheduler = String.fromCharCode(117,110,109,111,118,101,100,95,55,95,49,56,0);
         debugK.push(iconb.length);
       let shirtq = String.fromCharCode(116,95,50,57,95,111,112,117,115,108,97,99,105,110,103,0);
       let teamdetailsbgF = String.fromCharCode(115,116,114,117,99,116,117,114,101,95,97,95,53,57,0);
      if (iconb.endsWith(`${scheduler.length}`)) {
         scheduler = `${(shirtq == String.fromCharCode(112,0) ? iconb.length : shirtq.length)}`;
      }
      let tailD = shirtq.length <= 5620624;
      do {
          let floating3 = String.fromCharCode(105,103,110,111,114,101,100,95,112,95,57,52,0);
         shirtq = `${shirtq.length >> (Math.min(scheduler.length, 2))}`;
         floating3 += `${floating3.length}`;
         if (tailD) {
            break;
         }
      } while (tailD && (shirtq.length < iconb.length));
      if (scheduler == String.fromCharCode(76,0)) {
          let megaphone4 = String.fromCharCode(100,101,102,97,117,108,95,97,95,55,52,0);
          let middlesoundk = String.fromCharCode(117,95,50,55,95,99,111,97,114,115,101,0);
          let whistleh = String.fromCharCode(114,95,49,50,95,110,116,115,99,0);
          let roundV: Map<any, any> = new Map([[String.fromCharCode(108,95,55,49,95,103,114,101,121,0),578], [String.fromCharCode(115,116,112,115,95,122,95,54,57,0),806]]);
         shirtq += `${whistleh.length}`;
         megaphone4 = `${1 & roundV.size}`;
         middlesoundk = "2";
         whistleh = `${3 & megaphone4.length}`;
         roundV = new Map([[middlesoundk, middlesoundk.length]]);
      }
         teamdetailsbgF = "2";
         iconb = "1";
      let securitye = shirtq == String.fromCharCode(112,103,112,0);
      do {
         shirtq += "2";
         if (securitye) {
            break;
         }
      } while ((iconb == shirtq) && securitye);
         iconb += `${iconb.length}`;
      fastforwardf += parseFloat(`${1 * parseInt(`${pointY}`)}`);
   }
                setUsernameErrMsg(err.errors.username);
            }

            if (!err.errors && err.message) {

      jingdongP += "1";
      incidentU += tickV.length;
                setUsernameErrMsg(err.message);
            }

            setSubmitting(false);

   let executor6 = 5963645.0 <= incidentU;
   do {
      incidentU /= Math.max(2, parseInt(`${pressurer}`));
      if (executor6) {
         break;
      }
   } while ((1 <= (3 | watchnowbgA) && 5.51 <= (1.52 - incidentU)) && executor6);
   if (5.10 >= (3.58 * pointY)) {
      pointY *= parseInt(`${incidentU}`) + 2;
   }
            return;
        }


        dispatch(updateUsernameState(username));

   for (let p = 0; p < 2; p++) {
       let whitebellt = 2.0;
       let whiter: Map<any, any> = new Map([[String.fromCharCode(114,101,113,117,97,110,116,95,112,95,57,48,0),String.fromCharCode(105,110,102,105,110,105,116,121,95,116,95,54,49,0)], [String.fromCharCode(115,111,114,101,115,101,114,118,101,95,104,95,51,54,0),String.fromCharCode(119,95,56,48,95,97,114,97,98,105,99,0)]]);
       let transferp = String.fromCharCode(112,114,111,98,97,98,105,108,105,116,121,95,114,95,54,50,0);
       let iconmegaphones = false;
       let rewindg = String.fromCharCode(108,101,118,97,114,105,110,116,95,49,95,51,56,0);
         transferp += `${parseInt(`${whitebellt}`) % 2}`;
         whiter.set(`${transferp}`, transferp.length);
      while (transferp != String.fromCharCode(71,0) || 5 >= rewindg.length) {
         rewindg += `${whiter.size * transferp.length}`;
         break;
      }
         whiter = new Map([[`${whiter.size}`, 3]]);
      for (let m = 0; m < 1; m++) {
         whitebellt -= parseFloat(`${3}`);
      }
         rewindg = `${1 / (Math.max(10, transferp.length))}`;
          let gifgoalP: Array<any> = [890, 385, 973];
          let switch_twv = String.fromCharCode(117,95,55,52,95,109,112,101,103,116,115,0);
          let launcherX: Array<any> = [872, 131];
         transferp = `${1 * rewindg.length}`;
         gifgoalP = [(switch_twv == String.fromCharCode(118,0) ? switch_twv.length : launcherX.length)];
         launcherX = [2];
       let stringB = false;
       let emojij = true;
      for (let c = 0; c < 1; c++) {
         iconmegaphones = stringB;
      }
         transferp += `${((emojij ? 3 : 4) - parseInt(`${whitebellt}`))}`;
      while (rewindg == String.fromCharCode(76,0) || transferp == String.fromCharCode(70,0)) {
         transferp = `${whiter.size}`;
         break;
      }
         iconmegaphones = whiter.get(`${whitebellt}`) == null;
      let sheetl = 8458144 >= whiter.size;
      do {
         whiter = new Map([[transferp, rewindg.length]]);
         if (sheetl) {
            break;
         }
      } while (((5 & whiter.size) < 3 || (5 & whiter.size) < 3) && sheetl);
      if (iconmegaphones) {
         emojij = !stringB && 47.2 == whitebellt;
      }
       let libhermesu = 5.0;
      tickV = [whiter.size];
   }
   for (let a = 0; a < 1; a++) {
       let langv = false;
       let icontransferclub1: Array<any> = [String.fromCharCode(115,95,49,56,95,115,119,105,116,99,104,98,97,115,101,0), String.fromCharCode(101,110,97,98,108,101,115,95,112,95,54,55,0), String.fromCharCode(97,98,117,115,101,95,117,95,51,57,0)];
      if ((icontransferclub1.length * 2) < 4) {
         langv = icontransferclub1.includes(langv);
      }
         langv = icontransferclub1.length <= 40 || langv;
      while (langv) {
         icontransferclub1 = [icontransferclub1.length];
         break;
      }
       let gradlex: Array<any> = [891, 693, 51];
      for (let g = 0; g < 3; g++) {
          let popup0 = 3.0;
          let liveB = 2.0;
          let fcdaebecbcbafcdfceaaeccfeacdbi: Map<any, any> = new Map([[String.fromCharCode(102,111,114,101,109,97,110,95,100,95,53,51,0),229], [String.fromCharCode(106,95,50,53,95,101,120,112,108,111,100,105,110,103,0),280]]);
          let searchbarh = 3.0;
         gradlex = [1];
         popup0 -= parseInt(`${liveB}`) ^ 1;
         liveB += fcdaebecbcbafcdfceaaeccfeacdbi.size - parseInt(`${popup0}`);
         fcdaebecbcbafcdfceaaeccfeacdbi.set(`${searchbarh}`, 3);
         searchbarh -= parseFloat(`${1}`);
      }
      let dplusP = langv ? !langv : langv;
      do {
         langv = !langv;
         if (dplusP) {
            break;
         }
      } while (dplusP && (gradlex.length <= 3));
      pressurer *= parseFloat(`${1 - parseInt(`${fastforwardf}`)}`);
   }
        dispatch(changeScreenAction("修改成功"));

   let awayteamfield5 = vipsportA ? !vipsportA : vipsportA;
   do {
       let unfillU = 2.0;
       let libreactperfloggerjniy = String.fromCharCode(107,95,56,95,100,101,116,101,99,116,105,110,103,0);
       let bellK: Map<any, any> = new Map([[String.fromCharCode(105,105,110,116,95,98,95,54,50,0),46], [String.fromCharCode(112,97,99,101,114,95,99,95,49,48,0),335]]);
       let binge = String.fromCharCode(106,95,52,50,0);
          let malaysiaA = String.fromCharCode(112,105,110,95,109,95,56,57,0);
         binge += `${3 | bellK.size}`;
         malaysiaA += `${malaysiaA.length}`;
          let gradleR = 0.0;
         unfillU /= Math.max(2, 5);
         gradleR += parseFloat(`${parseInt(`${gradleR}`) << (Math.min(2, Math.abs(1)))}`);
         bellK = new Map([[`${bellK.size}`, 2]]);
         unfillU -= bellK.size & 1;
         bellK.set(`${binge}`, bellK.size % 1);
         binge = `${binge.length & libreactperfloggerjniy.length}`;
      let i_positions = unfillU <= 7039085.0;
      do {
          let gpayV = String.fromCharCode(112,105,110,95,108,95,49,49,0);
          let time_f7l = 1.0;
          let rulesc = String.fromCharCode(115,95,55,51,95,97,114,110,114,0);
          let root1: Array<any> = [998, 429];
         unfillU += rulesc.length << (Math.min(3, Math.abs(parseInt(`${time_f7l}`))));
         gpayV += `${gpayV.length + root1.length}`;
         time_f7l -= parseFloat(`${gpayV.length / 2}`);
         rulesc = "2";
         root1 = [2 / (Math.max(3, gpayV.length))];
         if (i_positions) {
            break;
         }
      } while (i_positions && ((4 * binge.length) > 4 && (4 % (Math.max(4, binge.length))) > 2));
          let sourceo: Map<any, any> = new Map([[String.fromCharCode(105,95,55,54,95,105,110,105,116,105,97,108,115,0),String.fromCharCode(108,97,110,103,105,100,95,56,95,56,48,0)], [String.fromCharCode(111,95,51,95,116,111,107,101,110,115,0),String.fromCharCode(118,95,50,57,95,98,97,114,101,0)], [String.fromCharCode(99,97,108,108,101,100,95,110,95,51,54,0),String.fromCharCode(112,95,54,48,95,99,111,109,109,97,0)]]);
          let gesturesf = 3;
         unfillU /= Math.max(3, sourceo.size % 3);
         sourceo = new Map([[`${gesturesf}`, gesturesf]]);
      if (2 > (binge.length - 2) || (binge.length + unfillU) > 2.58) {
          let filter7 = String.fromCharCode(116,95,51,49,95,109,111,111,102,0);
         unfillU /= Math.max(5, libreactperfloggerjniy.length ^ 1);
         filter7 += `${filter7.length - filter7.length}`;
      }
         libreactperfloggerjniy = "2";
         bellK.set(binge, bellK.size / 1);
      if (5 < (bellK.size >> (Math.min(Math.abs(2), 2)))) {
         bellK = new Map([[`${bellK.size}`, parseInt(`${unfillU}`)]]);
      }
      vipsportA = (binge.length - parseInt(`${fastforwardf}`)) == 79;
      if (awayteamfield5) {
         break;
      }
   } while ((!vipsportA) && awayteamfield5);
       let club1: Array<any> = [171, 429, 100];
       let defaultroombgN = String.fromCharCode(118,95,53,51,95,114,101,113,117,105,114,101,0);
       let dycreatorG = 5.0;
      for (let e = 0; e < 3; e++) {
          let tickedr = 3;
         club1 = [(defaultroombgN == String.fromCharCode(102,0) ? tickedr : defaultroombgN.length)];
      }
         defaultroombgN += `${1 >> (Math.min(4, defaultroombgN.length))}`;
      if ((defaultroombgN.length | 4) <= 2 && (club1.length | 4) <= 1) {
          let penaltyshootnogoala = 4.0;
          let e_manager4 = 4.0;
         club1.push(1);
         penaltyshootnogoala *= parseFloat(`${parseInt(`${penaltyshootnogoala}`) | parseInt(`${e_manager4}`)}`);
         e_manager4 *= 1;
      }
       let dice_ = false;
         defaultroombgN += `${(defaultroombgN == String.fromCharCode(114,0) ? defaultroombgN.length : club1.length)}`;
      while ((defaultroombgN.length + 3) <= 1 || 3 <= (defaultroombgN.length + club1.length)) {
          let adultB: Array<any> = [410, 261];
         club1.push(adultB.length & 1);
         break;
      }
       let sellR = 3.0;
       let pagem: Array<any> = [String.fromCharCode(99,111,110,102,105,114,109,101,100,95,50,95,50,49,0), String.fromCharCode(108,95,55,50,95,97,99,99,117,114,97,99,121,0), String.fromCharCode(113,95,56,57,95,99,110,111,110,99,101,0)];
      while (pagem.length > 3 && 1 > (pagem.length << (Math.min(Math.abs(3), 4)))) {
          let abidetectp: Map<any, any> = new Map([[String.fromCharCode(105,115,102,105,110,105,116,101,95,99,95,54,52,0),591], [String.fromCharCode(100,101,106,117,100,100,101,114,95,117,95,56,49,0),431], [String.fromCharCode(113,115,118,101,110,99,95,56,95,52,56,0),391]]);
          let commonH = false;
         pagem.push(abidetectp.size);
         abidetectp.set(`${commonH}`, ((commonH ? 4 : 4) >> (Math.min(Math.abs((commonH ? 3 : 2)), 2))));
         break;
      }
      sellV.push(jingdongP.length % (Math.max(10, libfabricjni4.length)));

        if (onSubmitSuccess) onSubmitSuccess(username);

   for (let b = 0; b < 1; b++) {
      sellV.push(parseInt(`${pointY}`) | watchnowbgA);
   }
   for (let h = 0; h < 3; h++) {
      pressurer += parseFloat(`${3}`);
   }

        Keyboard.dismiss();

   for (let y = 0; y < 1; y++) {
       let libreactperfloggerjniV = String.fromCharCode(112,111,114,116,97,105,116,95,104,95,53,57,0);
       let exampleimaged: Array<any> = [610, 524];
         exampleimaged = [libreactperfloggerjniV.length];
         libreactperfloggerjniV = `${(libreactperfloggerjniV == String.fromCharCode(113,0) ? libreactperfloggerjniV.length : exampleimaged.length)}`;
          let sideP = String.fromCharCode(97,95,51,57,95,115,101,110,100,109,98,117,102,0);
         exampleimaged = [(String.fromCharCode(110,0) == libreactperfloggerjniV ? exampleimaged.length : libreactperfloggerjniV.length)];
         sideP = `${sideP.length / (Math.max(8, sideP.length))}`;
         exampleimaged.push(libreactperfloggerjniV.length);
          let expiredK = true;
         libreactperfloggerjniV = `${(libreactperfloggerjniV == String.fromCharCode(85,0) ? libreactperfloggerjniV.length : (expiredK ? 5 : 2))}`;
         exampleimaged = [(String.fromCharCode(109,0) == libreactperfloggerjniV ? libreactperfloggerjniV.length : exampleimaged.length)];
      fastforwardf -= parseFloat(`${parseInt(`${pointY}`)}`);
   }
      vipsportA = fastforwardf == pressurer;
        navigation.navigate("Home", {
            screen: "Profile",
        });

       let controlsl = 1.0;
       let configureJ: Map<any, any> = new Map([[String.fromCharCode(105,95,57,49,95,119,111,114,107,105,110,103,0),171], [String.fromCharCode(97,95,50,50,95,100,97,116,97,104,97,115,104,0),689], [String.fromCharCode(114,101,99,111,114,100,105,110,103,99,111,110,110,95,122,95,53,51,0),548]]);
       let modalO = 3.0;
          let actionT = 2.0;
          let vipsportr = 4.0;
          let flagJ = 5;
         configureJ = new Map([[`${controlsl}`, parseInt(`${controlsl}`) / 1]]);
         actionT -= 2 % (Math.max(flagJ, 9));
         vipsportr *= parseInt(`${actionT}`);
         flagJ &= 1 % (Math.max(parseInt(`${vipsportr}`), 2));
      let airbnbstar_ = 5119067.0 <= controlsl;
      do {
         controlsl -= parseInt(`${controlsl}`);
         if (airbnbstar_) {
            break;
         }
      } while (airbnbstar_ && ((4 + modalO) >= 4.26));
      for (let w = 0; w < 2; w++) {
         configureJ.set(`${controlsl}`, 1 & parseInt(`${controlsl}`));
      }
      if (configureJ.get(`${controlsl}`) == null) {
          let liveshare7 = String.fromCharCode(112,95,54,50,95,115,111,108,105,115,116,101,110,0);
          let orangetickt = String.fromCharCode(122,95,56,51,95,112,114,101,112,97,114,105,110,103,0);
          let componentsf: Map<any, any> = new Map([[String.fromCharCode(109,112,101,103,118,105,100,101,111,100,97,116,97,95,108,95,57,53,0),126], [String.fromCharCode(103,95,54,56,95,98,117,108,108,101,116,0),642]]);
          let basketballhometeamm: Array<any> = [62, 275, 539];
          let file3 = String.fromCharCode(118,95,52,57,95,115,117,98,116,108,101,0);
         controlsl *= liveshare7.length;
         liveshare7 += "2";
         orangetickt += `${(file3 == String.fromCharCode(118,0) ? basketballhometeamm.length : file3.length)}`;
         componentsf.set(file3, 2);
         basketballhometeamm = [3];
      }
         controlsl *= configureJ.size;
      sellV.push(2);
       let largesoundJ = 4;
       let streamingP = 4;
       let submitl: Array<any> = [String.fromCharCode(117,110,98,111,117,110,100,95,120,95,52,53,0), String.fromCharCode(108,111,99,97,116,105,111,110,95,54,95,52,51,0), String.fromCharCode(115,105,110,102,95,108,95,55,52,0)];
         largesoundJ *= 2;
         streamingP %= Math.max(submitl.length - 2, 3);
          let materialL: Map<any, any> = new Map([[String.fromCharCode(104,111,115,116,112,111,114,116,102,105,108,101,95,54,95,49,50,0),680], [String.fromCharCode(97,95,52,48,95,112,105,110,103,0),881], [String.fromCharCode(114,101,115,105,122,97,98,108,101,95,100,95,53,52,0),749]]);
          let trashn = 0.0;
          let baidua = 4.0;
         largesoundJ /= Math.max(3, 3);
         materialL.set(`${trashn}`, parseInt(`${trashn}`));
         baidua /= Math.max(1, 2);
          let expiredd = 3.0;
          let inewarchdefaultsh = String.fromCharCode(99,95,51,50,95,104,111,108,108,111,119,0);
          let weatheru = String.fromCharCode(117,95,49,52,95,99,97,114,116,101,115,105,97,110,0);
         streamingP ^= inewarchdefaultsh.length | 1;
         expiredd += parseFloat(`${2}`);
         inewarchdefaultsh += `${parseInt(`${expiredd}`) << (Math.min(weatheru.length, 3))}`;
         weatheru = `${weatheru.length}`;
      for (let w = 0; w < 2; w++) {
          let calendarT = 3.0;
          let airbnbstarF = String.fromCharCode(117,121,118,121,116,111,121,117,118,95,115,95,53,55,0);
          let mbnativeL = String.fromCharCode(110,101,101,100,108,101,95,57,95,52,56,0);
          let renderC = 2.0;
          let iconnotificationnewd = 1;
         streamingP += (mbnativeL == String.fromCharCode(117,0) ? parseInt(`${renderC}`) : mbnativeL.length);
         calendarT -= (String.fromCharCode(79,0) == airbnbstarF ? airbnbstarF.length : parseInt(`${calendarT}`));
         renderC += (parseFloat(`${String.fromCharCode(101,0) == airbnbstarF ? airbnbstarF.length : iconnotificationnewd}`));
         iconnotificationnewd %= Math.max(3 | iconnotificationnewd, 2);
      }
      while (streamingP >= 1) {
          let colorsE: Map<any, any> = new Map([[String.fromCharCode(110,95,49,52,95,112,105,99,107,105,110,116,101,114,0),474], [String.fromCharCode(108,95,53,50,95,109,111,116,99,111,109,112,0),646], [String.fromCharCode(114,101,102,101,114,101,110,101,95,52,95,49,51,0),644]]);
          let foundy = String.fromCharCode(115,116,97,116,105,99,95,55,95,52,52,0);
          let filedd = String.fromCharCode(99,95,53,51,0);
          let iconclosewhitec = 2.0;
          let stylesR = true;
         largesoundJ ^= (largesoundJ ^ (stylesR ? 4 : 3));
         colorsE = new Map([[foundy, parseInt(`${iconclosewhitec}`) % (Math.max(foundy.length, 8))]]);
         filedd += `${3 >> (Math.min(2, Math.abs(colorsE.size)))}`;
         iconclosewhitec -= parseInt(`${iconclosewhitec}`);
         stylesR = 47.53 >= iconclosewhitec || foundy == String.fromCharCode(98,0);
         break;
      }
      if (5 > (streamingP - 2)) {
         largesoundJ ^= streamingP % (Math.max(4, submitl.length));
      }
      for (let l = 0; l < 3; l++) {
         streamingP >>= Math.min(Math.abs(largesoundJ), 2);
      }
         streamingP >>= Math.min(4, Math.abs(3));
      pointY -= 3;

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
                                source={require("@static/images/invite/volumeOrangeclock.png")}
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