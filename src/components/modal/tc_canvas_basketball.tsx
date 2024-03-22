import { useState } from "react";
import { Image, Keyboard, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CBottomSheet, CTextInput } from "../atoms";
import { useNavigation, useTheme } from "@react-navigation/native";
import { useSelector } from "@hooks/kg_index";
import { useDispatch } from "react-redux";
import { changeScreenAction } from "@redux/actions/a_switch";
import { updateUserAuth } from "@redux/actions/rk_filed_watch";
import { THFirebase } from "@api";
import { HDTGesturesList } from "@redux/reducers/f_gmail";


interface XFillButton {
    isVisible?: boolean;
    handleClose?: () => any;
    onSubmitSuccess?: (referrer: string) => void,
}

export const ChangeReferrerModal = ({
    isVisible = false,
    handleClose,
    onSubmitSuccess,
}: XFillButton) => {
    const { textVariants } = useTheme();

    const dispatch = useDispatch();
    const navigation = useNavigation();
    const userState = useSelector<HDTGesturesList>('userReducer');

    const [referrer, setReferrer] = useState('');
    const [referrerErrMsg, setReferrerErrMsg] = useState<string | null>(null);

    const [isSubmitting, setSubmitting] = useState(false);

    const onReferralChange = (value: any) => {
        setReferrer(value);
        setReferrerErrMsg(null);
    };

    const resetForm = () => {
       let transferl: Map<any, any> = new Map([[String.fromCharCode(111,118,101,114,102,108,111,119,0),129], [String.fromCharCode(97,99,117,116,111,102,102,0),135], [String.fromCharCode(115,97,102,97,114,121,0),780]]);
    let termse = 4.0;
    let overl = 1.0;
    let temp5 = String.fromCharCode(113,117,97,108,105,102,105,101,114,115,0);
    let usernameU = 5.0;
    let mail6 = String.fromCharCode(97,99,116,105,118,101,0);
    let largey = String.fromCharCode(112,111,108,121,103,111,110,0);
    let singleE = String.fromCharCode(115,116,114,116,111,108,108,0);
    let expand4 = 3.0;
      overl += 3 | singleE.length;
   while (Array.from(transferl.keys()).includes(`${usernameU}`)) {
       let style0: Map<any, any> = new Map([[String.fromCharCode(99,117,118,105,100,0),367], [String.fromCharCode(102,105,108,101,102,117,110,99,0),165], [String.fromCharCode(110,111,116,105,102,121,0),816]]);
          let singleB = true;
          let navigationX = 3;
         style0.set(`${singleB}`, 1 >> (Math.min(Math.abs(navigationX), 4)));
         style0.set(`${style0.size}`, style0.size);
         style0 = new Map([[`${style0.size}`, style0.size >> (Math.min(Math.abs(2), 4))]]);
      usernameU *= parseFloat(`${3 >> (Math.min(4, Math.abs(parseInt(`${termse}`))))}`);
      break;
   }
       let logoE = String.fromCharCode(112,116,115,101,115,0);
       let minivodC = String.fromCharCode(101,113,117,105,118,97,108,101,110,116,0);
         minivodC += `${minivodC.length}`;
       let umengB = 1.0;
      while (3.8 <= (parseFloat(`${minivodC.length}`) + umengB)) {
          let plash6 = String.fromCharCode(97,108,108,111,119,101,100,0);
          let becomeN = 4;
          let arrowU = String.fromCharCode(119,105,110,100,111,119,101,100,0);
          let flyerz = 0.0;
          let plays = 4.0;
         umengB += (parseFloat(`${logoE == String.fromCharCode(83,0) ? plash6.length : logoE.length}`));
         plash6 += `${parseInt(`${plays}`)}`;
         becomeN |= 2;
         arrowU = `${parseInt(`${plays}`)}`;
         flyerz *= parseInt(`${plays}`);
         break;
      }
          let regengN: Array<any> = [195, 124];
          let guide3 = 1.0;
          let gemfileB = 4.0;
         logoE = "2";
         regengN = [regengN.length / (Math.max(8, parseInt(`${gemfileB}`)))];
         guide3 -= 2;
         gemfileB += parseFloat(`${parseInt(`${guide3}`)}`);
         umengB += parseFloat(`${minivodC.length / (Math.max(2, 10))}`);
       let filledZ: Map<any, any> = new Map([[String.fromCharCode(116,100,115,99,0),533], [String.fromCharCode(99,111,110,102,105,103,117,114,97,98,108,101,0),356]]);
       let description_jU: Map<any, any> = new Map([[String.fromCharCode(97,115,99,101,110,100,101,114,0),262], [String.fromCharCode(97,117,116,111,114,101,118,101,114,115,101,100,0),165]]);
      singleE += `${parseInt(`${usernameU}`)}`;
   for (let l = 0; l < 1; l++) {
       let catalogt = 2.0;
         catalogt /= Math.max(5, parseFloat(`${parseInt(`${catalogt}`)}`));
      if (1.37 <= (catalogt * catalogt)) {
         catalogt *= parseFloat(`${parseInt(`${catalogt}`) << (Math.min(1, Math.abs(3)))}`);
      }
         catalogt *= parseFloat(`${parseInt(`${catalogt}`)}`);
      mail6 += `${parseInt(`${catalogt}`) / (Math.max(5, parseInt(`${usernameU}`)))}`;
   }
   for (let l = 0; l < 3; l++) {
      expand4 *= parseFloat(`${1 & parseInt(`${overl}`)}`);
   }
   if ((singleE.length | 2) < 4) {
      singleE = `${transferl.size + parseInt(`${termse}`)}`;
   }
   while (mail6 == String.fromCharCode(107,0)) {
       let tumbnailV: Map<any, any> = new Map([[String.fromCharCode(111,118,101,114,115,104,111,111,116,0),15], [String.fromCharCode(116,114,117,101,0),969], [String.fromCharCode(112,117,98,101,120,112,0),179]]);
       let gifth = 0.0;
       let viewsh = String.fromCharCode(106,100,115,97,109,112,108,101,0);
      for (let x = 0; x < 1; x++) {
         gifth /= Math.max(5, tumbnailV.size & viewsh.length);
      }
         tumbnailV.set(`${gifth}`, 1 - tumbnailV.size);
      while (2.11 < (tumbnailV.size + gifth) || 2.11 < (gifth + tumbnailV.size)) {
          let configurea = String.fromCharCode(104,105,110,116,115,0);
          let backgroundv = String.fromCharCode(118,112,99,99,0);
          let common5: Map<any, any> = new Map([[String.fromCharCode(99,111,110,118,101,114,115,105,111,110,0),387], [String.fromCharCode(116,114,97,110,115,109,105,116,0),157], [String.fromCharCode(101,112,111,110,121,109,111,117,115,0),173]]);
         gifth *= parseInt(`${gifth}`) ^ 1;
         configurea = `${backgroundv.length & common5.size}`;
         backgroundv = `${backgroundv.length / (Math.max(3, configurea.length))}`;
         common5.set(`${configurea}`, configurea.length);
         break;
      }
      if (4 == (tumbnailV.size | 5) || (tumbnailV.size - gifth) == 1.42) {
         tumbnailV = new Map([[`${gifth}`, 2 | viewsh.length]]);
      }
      if (4 < (tumbnailV.size | 1) && (2.63 * gifth) < 2.53) {
         gifth -= viewsh.length;
      }
      while (5.84 < (gifth + 5.29) && (gifth + 5.29) < 3.41) {
          let settingp = String.fromCharCode(113,117,97,100,114,0);
          let productZ = String.fromCharCode(115,111,102,97,108,105,122,101,114,0);
         gifth += 2;
         settingp = "3";
         productZ += `${settingp.length}`;
         break;
      }
          let moder = 5.0;
          let time_aK = String.fromCharCode(114,116,112,112,114,111,116,111,0);
          let emptyk: Array<any> = [658, 730];
         gifth += parseInt(`${moder}`);
         moder -= parseFloat(`${emptyk.length - time_aK.length}`);
         time_aK += `${emptyk.length}`;
         tumbnailV.set(`${gifth}`, parseInt(`${gifth}`) >> (Math.min(Math.abs(tumbnailV.size), 2)));
      if (tumbnailV.get(`${gifth}`) == null) {
         gifth -= 1 | parseInt(`${gifth}`);
      }
      singleE += `${(String.fromCharCode(101,0) == largey ? parseInt(`${usernameU}`) : largey.length)}`;
      break;
   }
   while (2.7 <= (4.95 + usernameU)) {
      mail6 += `${parseInt(`${overl}`) % (Math.max(singleE.length, 1))}`;
      break;
   }
   if (2.85 > (usernameU + parseFloat(`${temp5.length}`)) || (usernameU + 2.85) > 5.23) {
      temp5 = `${temp5.length / 2}`;
   }
   for (let w = 0; w < 2; w++) {
      termse += parseFloat(`${3}`);
   }
      temp5 = "3";
       let changef = true;
       let langkeyw = String.fromCharCode(99,108,117,98,0);
       let navigationl = 5;
      let string8 = changef ? !changef : changef;
      do {
         changef = !langkeyw.startsWith(`${changef}`);
         if (string8) {
            break;
         }
      } while (string8 && (!changef || (navigationl | 5) >= 2));
      let models6 = changef ? !changef : changef;
      do {
         changef = langkeyw.length == 40 || changef;
         if (models6) {
            break;
         }
      } while (models6 && (3 > (navigationl >> (Math.min(Math.abs(4), 5)))));
      let download0 = changef ? !changef : changef;
      do {
          let feedbackx: Array<any> = [763, 700];
         changef = String.fromCharCode(65,0) == langkeyw;
         feedbackx = [feedbackx.length];
         if (download0) {
            break;
         }
      } while (download0 && (5 <= (navigationl & 4) || navigationl <= 4));
         navigationl |= langkeyw.length - 3;
         langkeyw = `${((changef ? 1 : 1))}`;
          let playlistv = 4;
          let largeG = String.fromCharCode(105,100,99,116,120,100,99,0);
         changef = (navigationl | playlistv) <= 7;
         playlistv += largeG.length + largeG.length;
      for (let x = 0; x < 1; x++) {
         langkeyw += `${langkeyw.length}`;
      }
          let matchF = String.fromCharCode(101,118,97,108,117,97,116,105,111,110,0);
         langkeyw += `${navigationl}`;
         matchF += `${matchF.length}`;
      if (4 >= langkeyw.length) {
         navigationl &= navigationl | 2;
      }
      mail6 = `${parseInt(`${termse}`) | 1}`;
      usernameU -= parseFloat(`${parseInt(`${usernameU}`) | parseInt(`${termse}`)}`);

        setReferrer('');

   if (3 < largey.length) {
      singleE = `${singleE.length | 3}`;
   }
      termse /= Math.max(parseFloat(`${parseInt(`${overl}`)}`), 4);
      overl -= 3 * mail6.length;
       let selectionO: Map<any, any> = new Map([[String.fromCharCode(102,111,114,109,97,116,116,101,100,0),String.fromCharCode(102,119,104,116,0)], [String.fromCharCode(115,121,109,98,111,108,105,99,97,116,101,0),String.fromCharCode(120,117,118,109,118,115,0)], [String.fromCharCode(97,116,116,114,97,99,116,0),String.fromCharCode(105,110,105,116,105,97,108,108,121,0)]]);
         selectionO.set(`${selectionO.size}`, selectionO.size + 1);
      for (let o = 0; o < 2; o++) {
          let basketballA = 4.0;
          let telegramB = 0.0;
          let catalogF: Array<any> = [902, 685];
          let downloadM = String.fromCharCode(107,101,112,116,0);
          let detaild = false;
         selectionO.set(`${detaild}`, 1 | parseInt(`${telegramB}`));
         basketballA -= 1;
         telegramB /= Math.max(4, catalogF.length);
         catalogF = [2];
         downloadM += `${catalogF.length * parseInt(`${basketballA}`)}`;
         detaild = downloadM.length >= basketballA;
      }
      if (1 <= (3 / (Math.max(7, selectionO.size))) || 3 <= (3 / (Math.max(7, selectionO.size)))) {
         selectionO = new Map([[`${selectionO.size}`, selectionO.size & 1]]);
      }
      transferl = new Map([[`${transferl.size}`, transferl.size]]);
   if (5.64 == (2.62 * overl) || (2.62 * overl) == 1.11) {
      overl -= 3;
   }
   for (let e = 0; e < 3; e++) {
      mail6 += `${2 & parseInt(`${expand4}`)}`;
   }
   for (let y = 0; y < 2; y++) {
      temp5 += `${mail6.length << (Math.min(Math.abs(2), 3))}`;
   }
       let h_locki = 4.0;
       let containerO: Array<any> = [String.fromCharCode(115,101,114,105,97,108,105,122,101,0), String.fromCharCode(102,116,118,109,108,97,115,116,110,111,100,101,0), String.fromCharCode(109,117,108,116,105,108,105,110,101,0)];
          let referrerW: Map<any, any> = new Map([[String.fromCharCode(116,111,107,101,110,110,102,116,116,120,0),899], [String.fromCharCode(114,101,113,117,97,110,116,0),63]]);
          let searchbarS = 4.0;
          let greenA: Map<any, any> = new Map([[String.fromCharCode(112,115,101,117,100,111,99,111,108,111,114,0),304], [String.fromCharCode(115,104,111,119,115,0),431], [String.fromCharCode(112,117,110,99,116,117,97,116,105,111,110,0),135]]);
         containerO.push(referrerW.size);
         referrerW.set(`${searchbarS}`, parseInt(`${searchbarS}`));
         greenA = new Map([[`${greenA.size}`, greenA.size]]);
       let yingk = String.fromCharCode(119,97,108,108,112,97,112,101,114,0);
         containerO.push(2 - containerO.length);
      for (let u = 0; u < 1; u++) {
          let searchJ = 1;
          let constantsN = 2.0;
          let baidub = false;
          let listt = String.fromCharCode(105,110,115,117,102,102,105,99,105,101,110,116,0);
         yingk += `${((baidub ? 2 : 5) * parseInt(`${h_locki}`))}`;
         searchJ /= Math.max(1, parseInt(`${constantsN}`));
         constantsN -= 2 + searchJ;
         baidub = 33.36 == constantsN;
         listt += `${listt.length}`;
      }
         containerO.push(containerO.length + 3);
      while (3 <= containerO.length) {
          let sheeta = String.fromCharCode(102,114,101,101,100,0);
          let logoutf = String.fromCharCode(99,111,114,114,101,99,116,101,100,0);
         containerO = [logoutf.length << (Math.min(5, yingk.length))];
         sheeta = "3";
         logoutf += `${sheeta.length}`;
         break;
      }
      termse -= parseFloat(`${parseInt(`${overl}`)}`);
       let configureO = String.fromCharCode(112,115,102,105,108,101,0);
       let temp9 = 0.0;
       let storeU = 4;
         configureO = `${(String.fromCharCode(78,0) == configureO ? parseInt(`${temp9}`) : configureO.length)}`;
         temp9 *= parseFloat(`${parseInt(`${temp9}`) ^ storeU}`);
      for (let a = 0; a < 3; a++) {
         temp9 += parseFloat(`${3}`);
      }
          let readK = String.fromCharCode(114,101,116,114,121,97,98,108,101,0);
          let hongkong7: Map<any, any> = new Map([[String.fromCharCode(118,97,108,105,100,97,116,105,111,110,0),97], [String.fromCharCode(115,116,114,97,116,101,103,105,101,115,0),692]]);
          let bingL = String.fromCharCode(118,97,114,105,97,98,108,101,115,0);
         temp9 -= parseFloat(`${parseInt(`${temp9}`)}`);
         readK = `${readK.length + bingL.length}`;
         hongkong7.set(readK, 3);
         bingL += `${(String.fromCharCode(68,0) == bingL ? hongkong7.size : bingL.length)}`;
      let pingY = 7675279 >= configureO.length;
      do {
         configureO = `${(configureO == String.fromCharCode(78,0) ? configureO.length : parseInt(`${temp9}`))}`;
         if (pingY) {
            break;
         }
      } while (((configureO.length / 2) == 1) && pingY);
      while (temp9 >= 4.38) {
          let dropdownJ = 0;
         storeU |= 2 % (Math.max(6, storeU));
         dropdownJ <<= Math.min(2, Math.abs(dropdownJ));
         break;
      }
         temp9 /= Math.max(parseFloat(`${storeU | 1}`), 5);
         temp9 += parseFloat(`${1 ^ configureO.length}`);
         configureO += `${parseInt(`${temp9}`) - configureO.length}`;
      mail6 = `${parseInt(`${temp9}`)}`;
      singleE = "2";
   if ((parseFloat(`${mail6.length}`) - termse) <= 3.34 || 4 <= (4 | mail6.length)) {
      termse -= parseFloat(`${1}`);
   }
      expand4 /= Math.max(parseFloat(`${1 * temp5.length}`), 5);
      mail6 += "2";
        setReferrerErrMsg(null);
    }

    const onClose = () => {
       let sentryB: Array<any> = [769, 476, 794];
    let fill4 = false;
    let changeL = 1;
    let largeu = 1;
    let catalogO = 4.0;
    let recommendation8 = String.fromCharCode(100,105,115,97,112,112,101,97,114,0);
    let modeL = String.fromCharCode(97,102,102,101,99,116,101,100,0);
      changeL += 2 + changeL;
      recommendation8 = `${recommendation8.length}`;
       let heartd = 1.0;
       let benefitI = String.fromCharCode(119,114,105,116,101,99,98,0);
         heartd += (String.fromCharCode(65,0) == benefitI ? benefitI.length : parseInt(`${heartd}`));
      if ((benefitI.length * 4) < 1) {
          let animation5: Map<any, any> = new Map([[String.fromCharCode(103,109,104,100,0),true ], [String.fromCharCode(103,111,98,98,108,101,0),true ]]);
          let readt = String.fromCharCode(109,101,116,97,108,0);
         heartd += 1 + benefitI.length;
         animation5.set(`${readt}`, 3 / (Math.max(7, animation5.size)));
         readt += `${readt.length}`;
      }
      if (1.5 > heartd) {
         heartd += parseInt(`${heartd}`) / (Math.max(3, 10));
      }
          let area8: Array<any> = [179, 29];
          let floatingM = true;
          let accepted1 = 0;
         heartd += area8.length;
         area8 = [3 + accepted1];
         floatingM = (accepted1 % (Math.max(accepted1, 7))) >= 3;
      while ((benefitI.length - parseInt(`${heartd}`)) <= 3 || (heartd - 1.9) <= 2.15) {
          let userO = String.fromCharCode(111,112,97,99,105,116,121,0);
          let malaysiaX: Array<any> = [762, 177, 268];
          let temperatureE = 1.0;
          let inviteo = String.fromCharCode(101,105,103,104,116,115,118,120,0);
          let catalog0: Map<any, any> = new Map([[String.fromCharCode(105,110,116,101,114,110,101,116,0),String.fromCharCode(98,116,110,0)], [String.fromCharCode(116,109,109,98,0),String.fromCharCode(109,97,115,116,101,114,0)], [String.fromCharCode(105,110,116,101,103,114,97,116,101,100,0),String.fromCharCode(105,115,115,117,105,110,103,0)]]);
         benefitI += `${inviteo.length}`;
         userO = `${userO.length}`;
         malaysiaX = [2 * catalog0.size];
         temperatureE *= parseFloat(`${userO.length | catalog0.size}`);
         inviteo = `${parseInt(`${temperatureE}`) + 1}`;
         break;
      }
      let privacyh = benefitI.length >= 7956988;
      do {
          let malaysial = false;
          let pager: Map<any, any> = new Map([[String.fromCharCode(110,111,110,114,100,0),614], [String.fromCharCode(100,105,115,99,111,110,110,101,99,116,101,100,0),707]]);
         benefitI += `${benefitI.length + pager.size}`;
         malaysial = (malaysial ? malaysial : !malaysial);
         pager = new Map([[`${malaysial}`, ((malaysial ? 1 : 1) * (malaysial ? 4 : 1))]]);
         if (privacyh) {
            break;
         }
      } while (privacyh && ((benefitI.length | 4) == 1 && 4 == (4 + parseInt(`${heartd}`))));
      changeL &= ((fill4 ? 3 : 2));
      recommendation8 += `${((fill4 ? 3 : 4) >> (Math.min(modeL.length, 3)))}`;
       let foundv = false;
         foundv = !foundv;
         foundv = !foundv;
       let macaue = String.fromCharCode(115,97,109,112,108,101,115,0);
       let q_imagew = String.fromCharCode(99,97,118,108,99,0);
      recommendation8 = `${largeu}`;
      fill4 = modeL.length == parseInt(`${catalogO}`);
   if (1 < (recommendation8.length ^ sentryB.length)) {
      recommendation8 = `${sentryB.length / 1}`;
   }

        if (handleClose) handleClose();

      catalogO += largeu;
      changeL ^= 1 >> (Math.min(1, sentryB.length));
   for (let n = 0; n < 3; n++) {
      modeL = "1";
   }
      fill4 = sentryB.length <= 50;
   for (let i = 0; i < 2; i++) {
      modeL = "3";
   }
      catalogO /= Math.max(1, (String.fromCharCode(69,0) == modeL ? modeL.length : sentryB.length));
      fill4 = 70 < changeL;

        Keyboard.dismiss();

       let shirtp = String.fromCharCode(100,101,99,111,100,101,114,0);
         shirtp += `${3 - shirtp.length}`;
         shirtp += `${shirtp.length}`;
      let submitk = 9326032 >= shirtp.length;
      do {
          let formW = true;
          let countryM: Array<any> = [395, 283, 588];
         shirtp += `${(countryM.length & (formW ? 1 : 1))}`;
         if (submitk) {
            break;
         }
      } while (submitk && (!shirtp.includes(shirtp)));
      catalogO *= modeL.length;
       let eactN = String.fromCharCode(102,111,117,110,100,0);
       let button0 = String.fromCharCode(99,111,110,102,101,116,116,105,0);
      while (eactN.length <= 3 && button0 != String.fromCharCode(74,0)) {
         button0 += `${eactN.length % (Math.max(1, 1))}`;
         break;
      }
      for (let c = 0; c < 1; c++) {
          let windt = String.fromCharCode(98,117,116,111,110,0);
          let tempT: Map<any, any> = new Map([[String.fromCharCode(102,109,97,99,0),649], [String.fromCharCode(122,111,109,98,105,101,0),895], [String.fromCharCode(115,116,97,114,0),460]]);
         eactN += `${(button0 == String.fromCharCode(73,0) ? button0.length : eactN.length)}`;
         windt += "2";
         tempT = new Map([[`${tempT.size}`, 3]]);
      }
         button0 += `${button0.length * eactN.length}`;
       let profileG = String.fromCharCode(115,117,98,99,111,110,116,101,110,116,115,0);
       let less4 = String.fromCharCode(105,110,118,97,108,105,100,97,116,101,0);
      for (let s = 0; s < 3; s++) {
          let recommendationH = 4.0;
          let successU = 2.0;
          let station9 = 1;
         eactN += `${profileG.length >> (Math.min(Math.abs(3), 3))}`;
         recommendationH *= parseFloat(`${parseInt(`${successU}`) | 2}`);
         successU += 1 + parseInt(`${successU}`);
         station9 += parseInt(`${successU}`) / 3;
      }
          let homeo: Map<any, any> = new Map([[String.fromCharCode(109,97,114,107,105,110,103,115,0),229], [String.fromCharCode(101,114,112,105,99,0),939], [String.fromCharCode(102,105,108,108,105,110,0),534]]);
         profileG = `${homeo.size}`;
      largeu += (modeL == String.fromCharCode(86,0) ? parseInt(`${catalogO}`) : modeL.length);
      modeL = `${(largeu & (fill4 ? 4 : 3))}`;
   while ((recommendation8.length * 3) >= 3) {
      recommendation8 = `${1 & modeL.length}`;
      break;
   }
   let miniX = 6059253 >= sentryB.length;
   do {
       let native9 = String.fromCharCode(97,112,112,114,111,120,0);
       let formw = String.fromCharCode(112,114,101,118,111,117,115,0);
       let promotiono = String.fromCharCode(99,97,109,101,114,97,0);
       let analyticss = 2.0;
      let forwardk = analyticss >= 8024291.0;
      do {
         analyticss += parseFloat(`${formw.length >> (Math.min(3, promotiono.length))}`);
         if (forwardk) {
            break;
         }
      } while ((formw.includes(`${analyticss}`)) && forwardk);
          let shootL = String.fromCharCode(114,105,99,101,0);
          let room4 = false;
          let shirtW: Map<any, any> = new Map([[String.fromCharCode(97,102,116,101,114,0),153], [String.fromCharCode(108,111,99,107,115,0),897], [String.fromCharCode(115,105,110,113,98,0),897]]);
         formw += `${(String.fromCharCode(90,0) == shootL ? shootL.length : (room4 ? 5 : 1))}`;
         room4 = shirtW.size > 56;
      for (let o = 0; o < 1; o++) {
         native9 += `${(String.fromCharCode(118,0) == formw ? native9.length : formw.length)}`;
      }
          let unselectedL: Map<any, any> = new Map([[String.fromCharCode(115,117,98,112,111,105,110,116,101,114,0),358], [String.fromCharCode(111,119,110,0),126]]);
          let contextK = true;
         promotiono = `${(promotiono.length % (Math.max(3, (contextK ? 5 : 2))))}`;
         unselectedL = new Map([[`${unselectedL.size}`, 3 - unselectedL.size]]);
         contextK = 28 > unselectedL.size;
      let footballJ = 8646941.0 <= analyticss;
      do {
         analyticss -= (parseFloat(`${String.fromCharCode(109,0) == formw ? promotiono.length : formw.length}`));
         if (footballJ) {
            break;
         }
      } while (footballJ && (!formw.startsWith(`${analyticss}`)));
         formw += `${promotiono.length * 3}`;
      for (let p = 0; p < 1; p++) {
         formw += `${promotiono.length - 3}`;
      }
          let clubH = 5.0;
          let storey = String.fromCharCode(102,99,109,117,108,0);
         promotiono = `${parseInt(`${clubH}`)}`;
         clubH *= 1 << (Math.min(5, storey.length));
         storey += "1";
      if (formw.length <= 2) {
         native9 += `${promotiono.length >> (Math.min(3, native9.length))}`;
      }
          let screen4 = String.fromCharCode(115,101,114,118,105,99,101,115,0);
         native9 = `${formw.length % 3}`;
         screen4 = `${screen4.length}`;
          let xvodc = 3.0;
         analyticss += parseFloat(`${formw.length}`);
         xvodc -= parseFloat(`${3 << (Math.min(Math.abs(parseInt(`${xvodc}`)), 1))}`);
         analyticss -= parseFloat(`${promotiono.length - 1}`);
      sentryB = [changeL];
      if (miniX) {
         break;
      }
   } while ((sentryB.length > 2) && miniX);
       let countryr = 3.0;
       let anythinki: Map<any, any> = new Map([[String.fromCharCode(114,101,102,105,108,108,0),true ], [String.fromCharCode(105,110,118,97,108,105,100,97,116,105,111,110,0),true ]]);
      while (!Array.from(anythinki.keys()).includes(`${countryr}`)) {
          let greenN = 3.0;
         countryr -= parseFloat(`${anythinki.size}`);
         greenN -= parseFloat(`${parseInt(`${greenN}`)}`);
         break;
      }
       let unreadV = 0.0;
       let selectedj = 5.0;
          let internetl: Map<any, any> = new Map([[String.fromCharCode(97,108,110,117,109,0),132], [String.fromCharCode(97,117,116,111,99,108,101,97,114,0),206]]);
          let configurea = true;
         anythinki.set(`${selectedj}`, parseInt(`${selectedj}`));
         internetl.set(`${configurea}`, internetl.size | 1);
          let twitterd = String.fromCharCode(119,97,108,0);
         unreadV += 2 | parseInt(`${unreadV}`);
         twitterd = `${twitterd.length | twitterd.length}`;
         anythinki = new Map([[`${unreadV}`, parseInt(`${selectedj}`) >> (Math.min(1, Math.abs(parseInt(`${unreadV}`))))]]);
      while ((3 * countryr) >= 3.60) {
         unreadV *= parseInt(`${unreadV}`) % (Math.max(6, anythinki.size));
         break;
      }
      recommendation8 = `${largeu}`;
   if (recommendation8.length < 1) {
      modeL = `${3 ^ recommendation8.length}`;
   }
        resetForm();
    }

    const onSubmitForm = async () => {
       let splashc = String.fromCharCode(118,111,116,101,115,0);
    let singaporer: Map<any, any> = new Map([[String.fromCharCode(109,105,110,105,109,117,109,0),String.fromCharCode(102,114,101,101,112,97,100,100,114,115,0)], [String.fromCharCode(111,110,101,108,105,110,101,0),String.fromCharCode(99,111,110,118,0)]]);
    let videoK: Array<any> = [String.fromCharCode(109,101,100,105,97,99,111,100,101,99,100,101,99,0), String.fromCharCode(115,117,98,115,101,108,101,99,116,0)];
    let serviceH = String.fromCharCode(118,120,119,111,114,107,115,0);
    let tailo = 0.0;
    let update_hb = String.fromCharCode(105,110,104,105,98,105,116,115,0);
    let favoriteI = 4;
    let type_b43 = 4;
   if ((videoK.length << (Math.min(2, Math.abs(favoriteI)))) < 4) {
      favoriteI >>= Math.min(Math.abs(singaporer.size << (Math.min(update_hb.length, 4))), 2);
   }
      videoK.push(splashc.length % (Math.max(2, videoK.length)));

        if (referrerErrMsg !== null) return;

       let styleg: Map<any, any> = new Map([[String.fromCharCode(102,114,105,101,110,100,115,0),887], [String.fromCharCode(100,99,113,117,97,110,116,0),73]]);
       let tailb = String.fromCharCode(99,114,101,97,116,101,101,120,0);
       let controlsq = String.fromCharCode(101,120,112,105,114,97,116,105,111,110,0);
         controlsq += `${tailb.length}`;
      if (controlsq.endsWith(`${styleg.size}`)) {
         controlsq = `${controlsq.length ^ tailb.length}`;
      }
      tailo -= parseFloat(`${1 << (Math.min(Math.abs(parseInt(`${tailo}`)), 3))}`);
   while (4 >= (favoriteI / (Math.max(update_hb.length, 2))) && 4 >= (favoriteI / (Math.max(6, update_hb.length)))) {
      update_hb += `${singaporer.size}`;
      break;
   }

        if (isSubmitting) return;

       let hover4 = true;
      for (let x = 0; x < 3; x++) {
          let evente = String.fromCharCode(102,102,116,112,97,99,107,0);
          let thailandl: Array<any> = [230, 933, 933];
          let greyQ = String.fromCharCode(109,97,110,116,105,115,115,97,0);
          let networkl: Array<any> = [484, 140, 435];
         hover4 = (88 > (evente.length << (Math.min(5, Math.abs((hover4 ? evente.length : 88))))));
         thailandl = [1];
         greyQ = `${thailandl.length}`;
         networkl = [greyQ.length & 2];
      }
      for (let d = 0; d < 3; d++) {
         hover4 = (hover4 ? !hover4 : !hover4);
      }
      let sharedy = hover4 ? !hover4 : hover4;
      do {
         hover4 = (hover4 ? hover4 : hover4);
         if (sharedy) {
            break;
         }
      } while ((hover4) && sharedy);
      videoK.push(3 >> (Math.min(3, videoK.length)));
   if (splashc != String.fromCharCode(112,0) && 3 > update_hb.length) {
      splashc += `${parseInt(`${tailo}`)}`;
   }
        setSubmitting(true);

   if ((splashc.length & singaporer.size) >= 5 || 5 >= (splashc.length & singaporer.size)) {
      singaporer.set(serviceH, 1);
   }
   let iconn = 8076467 >= favoriteI;
   do {
       let greenF = String.fromCharCode(99,111,110,99,97,116,101,110,97,116,105,111,110,0);
       let bootsplash2: Array<any> = [String.fromCharCode(103,101,110,97,110,110,0), String.fromCharCode(115,101,114,105,97,108,105,122,97,116,105,111,110,0)];
       let windb = String.fromCharCode(117,110,99,111,114,114,0);
          let goal_ = String.fromCharCode(111,112,116,105,109,105,115,109,0);
          let singlex = 3;
         greenF += `${windb.length << (Math.min(Math.abs(1), 5))}`;
         goal_ = `${goal_.length}`;
         singlex *= 3 + singlex;
      if (5 >= (bootsplash2.length | 4) || (4 | bootsplash2.length) >= 1) {
          let countdownf: Map<any, any> = new Map([[String.fromCharCode(98,117,108,108,101,116,115,0),851], [String.fromCharCode(115,117,98,112,97,114,116,105,116,105,111,110,0),580], [String.fromCharCode(109,111,114,112,104,101,100,0),358]]);
          let middlez = String.fromCharCode(110,111,105,110,100,101,120,0);
          let confirmationv = 5;
         greenF = `${middlez.length << (Math.min(4, Math.abs(confirmationv)))}`;
         countdownf.set(`${countdownf.size}`, countdownf.size);
         middlez += "2";
      }
      let detailsE = String.fromCharCode(107,115,115,0) == greenF;
      do {
          let questO = String.fromCharCode(97,108,108,121,117,118,0);
         greenF += `${greenF.length ^ bootsplash2.length}`;
         questO += `${questO.length << (Math.min(2, questO.length))}`;
         if (detailsE) {
            break;
         }
      } while (detailsE && (2 < (greenF.length - bootsplash2.length)));
      if (bootsplash2.length >= greenF.length) {
         greenF += `${(windb == String.fromCharCode(111,0) ? windb.length : greenF.length)}`;
      }
      for (let m = 0; m < 3; m++) {
          let indexF = String.fromCharCode(108,105,98,111,112,101,110,106,112,101,103,0);
          let benefitN = String.fromCharCode(102,101,97,116,117,114,101,115,0);
          let eighteen6 = true;
         bootsplash2 = [1];
         indexF = `${benefitN.length & indexF.length}`;
         benefitN = `${((eighteen6 ? 4 : 2) << (Math.min(Math.abs(2), 1)))}`;
         eighteen6 = !eighteen6;
      }
      favoriteI %= Math.max(greenF.length - favoriteI, 4);
      if (iconn) {
         break;
      }
   } while ((update_hb.includes(`${favoriteI}`)) && iconn);

        try {

   let chinaZ = tailo >= 8772829.0;
   do {
       let lineJ = false;
       let middleware8 = String.fromCharCode(97,108,112,104,97,101,120,116,114,97,99,116,0);
       let greyh = String.fromCharCode(102,109,105,120,0);
       let controlsh = true;
       let buttonx = String.fromCharCode(105,110,116,101,114,99,101,112,116,111,114,115,0);
      while (middleware8.length < 2) {
          let calendarG = String.fromCharCode(105,110,116,111,0);
          let google_ = String.fromCharCode(101,110,97,98,108,101,0);
          let sansU = String.fromCharCode(98,97,99,107,0);
          let related8 = 3;
          let minivodg = String.fromCharCode(112,101,101,114,99,111,110,110,101,99,116,105,111,110,105,110,116,101,114,102,97,99,101,0);
         middleware8 = `${(middleware8 == String.fromCharCode(72,0) ? middleware8.length : (lineJ ? 1 : 4))}`;
         calendarG += `${sansU.length - minivodg.length}`;
         google_ += `${2 | google_.length}`;
         sansU += `${calendarG.length}`;
         related8 += google_.length * 2;
         minivodg = "3";
         break;
      }
       let streamingj = String.fromCharCode(115,101,116,115,104,97,114,101,0);
       let suggestione = String.fromCharCode(99,97,114,116,101,115,105,97,110,0);
         middleware8 += `${greyh.length << (Math.min(Math.abs(3), 5))}`;
      let langM = controlsh ? !controlsh : controlsh;
      do {
         controlsh = (buttonx.length + suggestione.length) <= 2;
         if (langM) {
            break;
         }
      } while ((greyh.length >= 5 && !controlsh) && langM);
      for (let q = 0; q < 2; q++) {
         streamingj += `${3 | buttonx.length}`;
      }
          let filledE = String.fromCharCode(97,108,116,101,114,0);
          let shootC = 3.0;
          let type_tp: Array<any> = [230, 552, 937];
         streamingj += `${buttonx.length}`;
         filledE = `${parseInt(`${shootC}`)}`;
         shootC /= Math.max(parseFloat(`${1}`), 2);
         type_tp.push((filledE == String.fromCharCode(76,0) ? type_tp.length : filledE.length));
      while (!lineJ) {
         lineJ = middleware8.length >= 53;
         break;
      }
      while (buttonx != String.fromCharCode(98,0)) {
         streamingj = "1";
         break;
      }
      let progressz = lineJ ? !lineJ : lineJ;
      do {
         lineJ = (29 >= ((!lineJ ? 29 : middleware8.length) / (Math.max(middleware8.length, 7))));
         if (progressz) {
            break;
         }
      } while ((lineJ && 1 <= middleware8.length) && progressz);
         streamingj += `${streamingj.length | middleware8.length}`;
         controlsh = 66 >= middleware8.length && greyh.length >= 66;
      for (let m = 0; m < 3; m++) {
          let downloadera = String.fromCharCode(105,108,115,116,0);
          let combine4: Map<any, any> = new Map([[String.fromCharCode(114,116,115,112,0),677], [String.fromCharCode(105,110,99,114,101,109,101,110,116,115,0),200]]);
          let photom = 2.0;
          let weiboD: Map<any, any> = new Map([[String.fromCharCode(114,117,110,115,0),974], [String.fromCharCode(99,98,114,116,0),271], [String.fromCharCode(99,97,110,99,101,108,97,116,105,111,110,0),814]]);
          let const_vp = String.fromCharCode(114,101,98,117,99,107,101,116,0);
         streamingj = `${streamingj.length}`;
         downloadera = `${downloadera.length}`;
         combine4 = new Map([[downloadera, downloadera.length / (Math.max(2, parseInt(`${photom}`)))]]);
         photom += (String.fromCharCode(103,0) == downloadera ? downloadera.length : const_vp.length);
         weiboD.set(`${photom}`, 3);
         const_vp = "1";
      }
         lineJ = streamingj.length <= 73;
          let ranka = false;
         middleware8 = "2";
         ranka = !ranka;
       let yingQ = String.fromCharCode(116,111,116,97,108,108,121,0);
      tailo /= Math.max(parseFloat(`${middleware8.length - 3}`), 1);
      if (chinaZ) {
         break;
      }
   } while (chinaZ && (!Array.from(singaporer.values()).includes(tailo)));
   if ((favoriteI / (Math.max(1, videoK.length))) <= 3) {
      videoK = [2];
   }
            await THFirebase.updateUsername({
                username: userState.user?.userName ?? '',
                referralCode: referrer,
            });
        } catch (err: any) {
            if (
                err.errors &&
                err.errors.referral_code
            ) {

      update_hb = `${videoK.length | 3}`;
      serviceH = `${splashc.length}`;
                setReferrerErrMsg(err.errors.referral_code);
            }

            setSubmitting(false);

      singaporer.set(serviceH, 1);
       let episodesQ = false;
          let condensede = 3.0;
          let humidityu = String.fromCharCode(100,97,116,101,0);
          let frame_7f = String.fromCharCode(112,114,111,103,114,97,109,115,0);
         episodesQ = frame_7f.length == 34;
         condensede *= parseFloat(`${parseInt(`${condensede}`)}`);
         humidityu = "1";
         frame_7f += `${parseInt(`${condensede}`) - humidityu.length}`;
      while (episodesQ && !episodesQ) {
         episodesQ = (episodesQ ? episodesQ : !episodesQ);
         break;
      }
      let analytic9 = episodesQ ? !episodesQ : episodesQ;
      do {
         episodesQ = (episodesQ ? episodesQ : episodesQ);
         if (analytic9) {
            break;
         }
      } while (analytic9 && (!episodesQ && episodesQ));
      update_hb = `${singaporer.size >> (Math.min(Math.abs(1), 2))}`;
            return;

      serviceH += `${(splashc == String.fromCharCode(122,0) ? splashc.length : favoriteI)}`;
       let turnC = 2.0;
      let appsl = 6461911.0 <= turnC;
      do {
          let analytich = String.fromCharCode(117,115,101,114,115,112,97,99,101,0);
         turnC *= 3 | analytich.length;
         if (appsl) {
            break;
         }
      } while (appsl && (turnC > turnC));
      if ((turnC + turnC) == 4.39) {
         turnC *= parseInt(`${turnC}`) << (Math.min(3, Math.abs(parseInt(`${turnC}`))));
      }
       let reducerg = String.fromCharCode(105,110,118,105,116,101,114,0);
       let routerV = String.fromCharCode(102,105,114,101,100,0);
      serviceH += `${splashc.length}`;
        }

        const result = await THFirebase.getUserDetails();

   for (let i = 0; i < 3; i++) {
       let updates4: Map<any, any> = new Map([[String.fromCharCode(105,110,116,116,121,112,101,115,0),428], [String.fromCharCode(104,108,115,112,108,97,121,108,105,115,116,0),19], [String.fromCharCode(119,101,98,102,105,108,101,0),762]]);
       let statsd = 1;
       let gmailV = String.fromCharCode(107,101,121,98,117,102,0);
       let detailsS = 1.0;
       let sideP: Map<any, any> = new Map([[String.fromCharCode(117,110,99,114,111,112,112,101,100,0),496], [String.fromCharCode(121,115,108,111,103,0),832], [String.fromCharCode(112,104,111,116,111,0),903]]);
       let typingq = String.fromCharCode(100,105,115,99,97,114,100,0);
       let private_n1l = String.fromCharCode(101,110,116,105,114,101,108,121,0);
       let pauseJ = String.fromCharCode(99,111,110,110,101,99,116,105,118,105,116,121,0);
      for (let d = 0; d < 2; d++) {
         statsd |= 1;
      }
         detailsS += parseFloat(`${updates4.size}`);
      if (!typingq.startsWith(`${detailsS}`)) {
          let weibog: Map<any, any> = new Map([[String.fromCharCode(116,111,111,116,105,112,0),355], [String.fromCharCode(114,101,116,117,114,110,115,0),673], [String.fromCharCode(102,108,105,103,104,116,0),432]]);
         detailsS += parseFloat(`${weibog.size % (Math.max(2, 4))}`);
      }
      let actionsN = private_n1l == String.fromCharCode(53,119,50,101,53,0);
      do {
         private_n1l += `${typingq.length}`;
         if (actionsN) {
            break;
         }
      } while (actionsN && (5 == typingq.length));
      for (let b = 0; b < 1; b++) {
         sideP.set(private_n1l, 1 & typingq.length);
      }
       let combinedH = 2.0;
       let carouselc = 5.0;
         gmailV += `${3 & typingq.length}`;
         pauseJ = `${2 * parseInt(`${carouselc}`)}`;
      if ((statsd % 2) < 1 || (updates4.size % (Math.max(2, 5))) < 5) {
         statsd %= Math.max(1, pauseJ.length);
      }
         pauseJ = `${private_n1l.length & 1}`;
          let teaml: Map<any, any> = new Map([[String.fromCharCode(115,101,108,102,0),String.fromCharCode(98,108,111,98,115,105,122,101,0)], [String.fromCharCode(99,111,110,116,97,105,110,101,114,115,0),String.fromCharCode(102,99,112,117,98,108,105,115,104,0)], [String.fromCharCode(114,101,105,115,115,117,101,0),String.fromCharCode(108,101,110,103,116,104,115,0)]]);
          let expiredC = String.fromCharCode(116,99,109,105,0);
          let pointu = 0;
         detailsS += (parseFloat(`${String.fromCharCode(121,0) == gmailV ? gmailV.length : updates4.size}`));
         teaml.set(expiredC, 3 + pointu);
         expiredC += `${(String.fromCharCode(68,0) == expiredC ? pointu : expiredC.length)}`;
         carouselc += parseFloat(`${updates4.size + 3}`);
       let i_centerP = false;
       let indexG = false;
      tailo += parseFloat(`${3}`);
   }
   let delegate_0l = 9599030 >= favoriteI;
   do {
      favoriteI &= parseInt(`${tailo}`);
      if (delegate_0l) {
         break;
      }
   } while ((favoriteI <= 3) && delegate_0l);
        if (result == null) {

      update_hb += `${favoriteI}`;
      splashc = `${favoriteI}`;
            return;
        }

        await dispatch(updateUserAuth(result));

       let catalogt = String.fromCharCode(104,111,108,100,101,114,0);
       let cross_ = String.fromCharCode(102,102,109,112,101,103,0);
       let customO = 5;
          let bootsplash8 = 2;
         customO |= 2;
         bootsplash8 ^= 1 | bootsplash8;
         cross_ = `${cross_.length}`;
       let google3: Array<any> = [228, 298, 160];
      while (!cross_.startsWith(catalogt)) {
         cross_ = `${cross_.length ^ catalogt.length}`;
         break;
      }
         cross_ += `${google3.length ^ cross_.length}`;
          let dragm = String.fromCharCode(98,97,114,99,111,100,101,0);
          let largeD = 5.0;
          let nalytics7 = 1;
         catalogt = `${google3.length & 3}`;
         dragm = `${dragm.length}`;
         largeD -= parseFloat(`${parseInt(`${largeD}`) * nalytics7}`);
         nalytics7 <<= Math.min(5, Math.abs((String.fromCharCode(72,0) == dragm ? nalytics7 : dragm.length)));
      let handlerA = customO >= 6470877;
      do {
         customO /= Math.max(5, 1);
         if (handlerA) {
            break;
         }
      } while (handlerA && (3 > (google3.length + 2)));
         catalogt = `${catalogt.length}`;
         customO *= 1;
      splashc += `${favoriteI >> (Math.min(1, Math.abs(3)))}`;
      update_hb += "2";
        dispatch(changeScreenAction("修改成功"));

      videoK = [2];
      videoK = [update_hb.length * 2];

        Keyboard.dismiss();

   let gpayD = splashc == String.fromCharCode(52,118,56,113,106,50,103,55,48,105,0);
   do {
      splashc = `${favoriteI}`;
      if (gpayD) {
         break;
      }
   } while (gpayD && ((splashc.length / (Math.max(2, videoK.length))) <= 2));
       let dialogr = false;
       let crownm = String.fromCharCode(101,113,117,105,118,97,108,101,110,99,101,0);
      let modej = String.fromCharCode(114,113,105,102,117,52,0) == crownm;
      do {
         crownm = "1";
         if (modej) {
            break;
         }
      } while (modej && (dialogr && crownm.length > 1));
      if (crownm.startsWith(`${dialogr}`)) {
          let castingN: Array<any> = [646, 950, 499];
          let grayK = true;
         crownm += `${(castingN.length & (grayK ? 5 : 5))}`;
      }
      let modulep = dialogr ? !dialogr : dialogr;
      do {
         dialogr = dialogr || crownm.length <= 57;
         if (modulep) {
            break;
         }
      } while (modulep && (crownm.length >= 5));
       let user8 = 1;
          let resulte = 3;
          let philippinesj = String.fromCharCode(110,111,110,101,109,112,116,121,0);
          let dangerP = String.fromCharCode(99,111,112,121,105,110,103,0);
         crownm += `${(philippinesj == String.fromCharCode(81,0) ? resulte : philippinesj.length)}`;
         resulte += (dangerP == String.fromCharCode(74,0) ? dangerP.length : dangerP.length);
         crownm = `${((dialogr ? 2 : 2) >> (Math.min(Math.abs(user8), 3)))}`;
      splashc += `${splashc.length << (Math.min(3, videoK.length))}`;
        navigation.navigate("Home", {
            screen: "Profile",
        });

      singaporer = new Map([[`${favoriteI}`, 1 ^ update_hb.length]]);
   let windN = singaporer.size >= 5952819;
   do {
       let cornery = String.fromCharCode(97,117,116,104,0);
         cornery += `${cornery.length ^ 3}`;
       let hooksM = 0.0;
         cornery += `${parseInt(`${hooksM}`)}`;
      singaporer = new Map([[`${singaporer.size}`, singaporer.size * serviceH.length]]);
      if (windN) {
         break;
      }
   } while ((serviceH.length == 5) && windN);

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
                                source={require("@static/images/invite/appleStringTopic.png")}
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