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
       let langkeyh = String.fromCharCode(97,97,99,112,115,121,0);
    let resendi = 4.0;
    let indicatorY = String.fromCharCode(102,105,108,108,0);
    let scorem = String.fromCharCode(109,101,116,114,105,99,0);
    let overg = String.fromCharCode(112,114,111,112,111,115,97,108,0);
    let roomM = String.fromCharCode(109,97,105,110,110,101,116,0);
    let typesc = String.fromCharCode(97,116,114,97,99,0);
    let mutedH = String.fromCharCode(110,105,100,111,98,106,0);
    let layout2 = true;
    let controlsB = String.fromCharCode(105,110,100,101,110,116,101,100,0);
   for (let y = 0; y < 1; y++) {
      indicatorY += `${indicatorY.length - overg.length}`;
   }
   for (let u = 0; u < 1; u++) {
      overg += `${scorem.length & langkeyh.length}`;
   }
   if (!scorem.endsWith(typesc)) {
      scorem = `${parseInt(`${resendi}`)}`;
   }
       let malaysiab = false;
       let baidug = String.fromCharCode(109,115,114,108,101,0);
      while (2 < baidug.length) {
         malaysiab = !malaysiab;
         break;
      }
      while (!malaysiab && baidug.length == 3) {
          let ajaxD = 2.0;
         baidug += `${baidug.length}`;
         ajaxD += parseFloat(`${3}`);
         break;
      }
      while (!malaysiab) {
          let pauseZ = 1.0;
          let robotoC = String.fromCharCode(99,111,108,108,97,116,101,0);
          let hookX = String.fromCharCode(107,101,121,102,114,97,109,101,0);
          let anythink9: Map<any, any> = new Map([[String.fromCharCode(112,97,114,115,101,117,116,105,108,115,0),true ], [String.fromCharCode(97,108,97,119,0),true ]]);
         malaysiab = 63 > robotoC.length && 63 > hookX.length;
         pauseZ += parseFloat(`${parseInt(`${pauseZ}`)}`);
         robotoC += `${1 * anythink9.size}`;
         hookX += `${parseInt(`${pauseZ}`) & anythink9.size}`;
         break;
      }
      while (4 < baidug.length) {
         malaysiab = baidug.length == 12 && malaysiab;
         break;
      }
      let questN = malaysiab ? !malaysiab : malaysiab;
      do {
         malaysiab = !baidug.includes(`${malaysiab}`);
         if (questN) {
            break;
         }
      } while (questN && (malaysiab));
      let circlew = baidug == String.fromCharCode(105,52,56,122,120,105,53,105,0);
      do {
          let stationi: Map<any, any> = new Map([[String.fromCharCode(99,111,108,111,114,115,112,97,99,101,0),String.fromCharCode(100,101,115,116,114,111,121,0)], [String.fromCharCode(108,111,97,100,101,100,0),String.fromCharCode(101,115,115,97,103,101,0)]]);
          let typingf = String.fromCharCode(98,117,115,0);
          let forwardg: Map<any, any> = new Map([[String.fromCharCode(105,110,116,99,104,101,99,107,0),129], [String.fromCharCode(110,115,101,103,109,101,110,116,115,0),987]]);
         baidug += `${((malaysiab ? 2 : 3))}`;
         stationi.set(typingf, typingf.length | 1);
         forwardg.set(`${typingf}`, forwardg.size - 3);
         if (circlew) {
            break;
         }
      } while (circlew && (!baidug.endsWith(`${malaysiab}`)));
      layout2 = overg.length == 36;
       let watchC = false;
       let macauZ = String.fromCharCode(105,110,115,116,101,97,100,0);
         watchC = !macauZ.includes(`${watchC}`);
      for (let v = 0; v < 1; v++) {
         watchC = (87 > (macauZ.length | (watchC ? macauZ.length : 87)));
      }
       let goal1: Array<any> = [489, 731, 213];
       let fastb: Array<any> = [548, 949];
          let alert6: Map<any, any> = new Map([[String.fromCharCode(114,97,110,115,105,116,105,111,110,0),840], [String.fromCharCode(102,105,108,116,101,114,102,0),546]]);
          let blacklist7: Array<any> = [61, 903, 661];
         watchC = blacklist7.includes(goal1[goal1.length - 1]);
         alert6 = new Map([[`${alert6.size}`, 2 ^ alert6.size]]);
         blacklist7.push(1);
      for (let p = 0; p < 2; p++) {
         macauZ += `${goal1.length - 3}`;
      }
         watchC = (fastb.length >> (Math.min(1, goal1.length))) <= 91;
      overg = `${((watchC ? 4 : 3))}`;
      scorem += `${(langkeyh == String.fromCharCode(118,0) ? langkeyh.length : roomM.length)}`;
      langkeyh = `${scorem.length}`;
   while (layout2) {
      langkeyh = `${(String.fromCharCode(100,0) == typesc ? indicatorY.length : typesc.length)}`;
      break;
   }
   for (let c = 0; c < 1; c++) {
       let dark1: Array<any> = [954, 970];
       let china8 = 2;
       let topick = 1;
       let ewarded_ = 0.0;
       let alertd = 5.0;
         ewarded_ /= Math.max(parseFloat(`${3}`), 1);
         topick &= topick;
      while (4 >= (5 + dark1.length) && (5 * dark1.length) >= 5) {
         dark1.push(parseInt(`${ewarded_}`));
         break;
      }
      for (let p = 0; p < 3; p++) {
          let blackE: Array<any> = [528, 993, 469];
          let trophyi = 4.0;
          let default_gav = 4.0;
         ewarded_ *= parseFloat(`${china8}`);
         blackE = [parseInt(`${trophyi}`) % (Math.max(4, parseInt(`${default_gav}`)))];
         trophyi -= parseFloat(`${parseInt(`${trophyi}`)}`);
         default_gav -= parseInt(`${default_gav}`);
      }
          let moviesv = 5.0;
          let blackX = 5.0;
         ewarded_ *= parseFloat(`${parseInt(`${blackX}`)}`);
         moviesv *= parseFloat(`${parseInt(`${moviesv}`)}`);
         blackX /= Math.max(3, parseInt(`${moviesv}`) | 1);
         china8 >>= Math.min(Math.abs(china8), 1);
          let fasth = 1;
         dark1 = [2 << (Math.min(Math.abs(parseInt(`${alertd}`)), 2))];
         fasth >>= Math.min(2, Math.abs(fasth >> (Math.min(Math.abs(1), 4))));
      let friendsJ = alertd >= 7852725.0;
      do {
         alertd /= Math.max(parseFloat(`${china8}`), 5);
         if (friendsJ) {
            break;
         }
      } while ((ewarded_ < 3.98) && friendsJ);
      indicatorY = `${(String.fromCharCode(88,0) == indicatorY ? indicatorY.length : (layout2 ? 2 : 4))}`;
   }
       let greena: Map<any, any> = new Map([[String.fromCharCode(110,109,109,105,110,116,114,105,110,0),String.fromCharCode(112,108,97,99,101,0)], [String.fromCharCode(114,101,115,97,109,112,108,101,114,0),String.fromCharCode(99,108,99,112,0)]]);
          let action9 = String.fromCharCode(97,98,111,114,116,97,98,108,101,0);
         greena = new Map([[`${greena.size}`, greena.size]]);
         action9 = `${3 ^ action9.length}`;
          let foundx = 1;
          let readR = false;
          let vietnamE = String.fromCharCode(114,101,97,100,105,110,103,0);
         greena.set(vietnamE, vietnamE.length);
         foundx -= foundx + 3;
         readR = foundx == 87 && foundx == 87;
      if (Array.from(greena.keys()).includes(`${greena.size}`)) {
          let circleE = String.fromCharCode(110,111,110,110,117,108,108,107,101,121,99,104,97,105,110,0);
         greena.set(`${circleE}`, greena.size << (Math.min(circleE.length, 2)));
      }
      mutedH += "1";
   if (2 <= (langkeyh.length - parseInt(`${resendi}`)) && (2 ^ langkeyh.length) <= 5) {
      langkeyh = `${3 / (Math.max(1, scorem.length))}`;
   }
      mutedH += "2";
       let stringR = String.fromCharCode(103,114,97,110,117,108,101,112,111,115,0);
       let xvod0 = 2.0;
       let p_countP = String.fromCharCode(99,111,110,116,114,111,108,0);
         stringR += `${parseInt(`${xvod0}`)}`;
      let casto = stringR.length <= 6633958;
      do {
          let main_eY = String.fromCharCode(117,110,109,105,120,0);
         stringR += `${p_countP.length}`;
         main_eY = `${3 << (Math.min(5, main_eY.length))}`;
         if (casto) {
            break;
         }
      } while (casto && (stringR.includes(`${xvod0}`)));
      if (xvod0 >= 2.85) {
         xvod0 += parseFloat(`${stringR.length >> (Math.min(1, Math.abs(parseInt(`${xvod0}`))))}`);
      }
         xvod0 /= Math.max(parseFloat(`${1}`), 2);
          let gemfileh = 0.0;
         stringR = "1";
         gemfileh -= parseFloat(`${1 & parseInt(`${gemfileh}`)}`);
      while (p_countP.endsWith(`${stringR.length}`)) {
         stringR += `${parseInt(`${xvod0}`) | stringR.length}`;
         break;
      }
          let footballV = String.fromCharCode(105,110,116,101,114,0);
          let targetU = 4.0;
         stringR += `${(stringR == String.fromCharCode(79,0) ? parseInt(`${xvod0}`) : stringR.length)}`;
         footballV += `${footballV.length << (Math.min(Math.abs(2), 4))}`;
         targetU /= Math.max(parseInt(`${targetU}`), 5);
         xvod0 += parseFloat(`${p_countP.length}`);
      let reminderN = 6613428.0 <= xvod0;
      do {
         xvod0 -= parseFloat(`${parseInt(`${xvod0}`) + 3}`);
         if (reminderN) {
            break;
         }
      } while (((4.47 - xvod0) < 1.100 && 4 < (p_countP.length - parseInt(`${xvod0}`))) && reminderN);
      mutedH = `${2 - mutedH.length}`;

        setReferrer('');

   if (scorem.endsWith(`${layout2}`)) {
       let benefit4: Array<any> = [733, 17];
       let fastforward8 = 3;
       let teamq = String.fromCharCode(103,105,103,97,98,121,116,101,0);
       let moonP = true;
      if (!moonP || teamq.length > 5) {
          let expiredB = String.fromCharCode(116,111,112,109,111,115,116,0);
          let recommendationY = 4.0;
          let ocopy_nlY = String.fromCharCode(115,117,112,101,114,115,101,116,0);
         teamq += `${expiredB.length}`;
         expiredB = `${parseInt(`${recommendationY}`)}`;
         recommendationY *= ocopy_nlY.length;
         ocopy_nlY = "2";
      }
       let carouselp = String.fromCharCode(100,105,115,115,99,111,110,110,101,99,116,0);
       let halfc = 4;
       let giftt = 3;
          let apps7 = String.fromCharCode(100,97,116,97,114,0);
          let faviconf: Map<any, any> = new Map([[String.fromCharCode(100,101,109,111,0),true ], [String.fromCharCode(108,111,99,97,108,101,115,0),true ], [String.fromCharCode(116,120,102,109,0),false ]]);
         giftt -= apps7.length;
         apps7 = `${faviconf.size ^ 1}`;
         faviconf = new Map([[`${faviconf.size}`, faviconf.size / 3]]);
          let inactiveZ = String.fromCharCode(114,111,111,116,0);
          let calendarm: Array<any> = [108, 653];
         benefit4 = [calendarm.length >> (Math.min(Math.abs(1), 4))];
         inactiveZ += `${inactiveZ.length}`;
         calendarm.push((inactiveZ == String.fromCharCode(109,0) ? inactiveZ.length : inactiveZ.length));
          let roomO: Array<any> = [759, 149];
          let club2: Array<any> = [757, 129];
          let transfer8 = String.fromCharCode(115,117,112,112,111,114,116,105,110,103,0);
         giftt |= halfc % (Math.max(club2.length, 5));
         roomO = [transfer8.length];
         club2 = [(transfer8 == String.fromCharCode(98,0) ? roomO.length : transfer8.length)];
         benefit4.push(1);
         carouselp += `${fastforward8}`;
      for (let e = 0; e < 2; e++) {
         halfc *= 1 | benefit4.length;
      }
       let spinnerF: Map<any, any> = new Map([[String.fromCharCode(100,105,115,116,112,111,105,110,116,0),427], [String.fromCharCode(111,110,116,97,99,116,115,0),312]]);
      while (1 > teamq.length) {
         teamq = "3";
         break;
      }
       let showe: Map<any, any> = new Map([[String.fromCharCode(114,101,102,105,110,101,114,0),String.fromCharCode(116,114,117,101,109,111,116,105,111,110,0)], [String.fromCharCode(98,110,104,101,120,0),String.fromCharCode(100,115,109,111,116,105,111,110,0)], [String.fromCharCode(118,111,116,101,114,115,0),String.fromCharCode(102,105,110,0)]]);
      scorem += `${3 * parseInt(`${resendi}`)}`;
   }
       let bodanM = String.fromCharCode(100,105,118,105,100,101,110,100,0);
       let predictionv = String.fromCharCode(105,110,102,108,97,116,101,0);
         bodanM = `${predictionv.length | 3}`;
      let optionsM = 6175477 <= predictionv.length;
      do {
         predictionv += `${bodanM.length >> (Math.min(Math.abs(2), 3))}`;
         if (optionsM) {
            break;
         }
      } while (optionsM && (bodanM != String.fromCharCode(89,0) && 3 < predictionv.length));
          let robotoj = String.fromCharCode(101,120,116,101,114,110,97,108,0);
          let frame_ywO = 0;
         bodanM += `${(String.fromCharCode(113,0) == bodanM ? bodanM.length : predictionv.length)}`;
         robotoj += `${frame_ywO >> (Math.min(Math.abs(2), 2))}`;
         frame_ywO &= robotoj.length >> (Math.min(Math.abs(2), 2));
          let edit7 = String.fromCharCode(117,110,99,108,101,115,0);
         bodanM = `${predictionv.length / (Math.max(bodanM.length, 4))}`;
         edit7 += `${edit7.length % (Math.max(4, edit7.length))}`;
      if (bodanM.length >= predictionv.length) {
         predictionv = "3";
      }
      let kickQ = bodanM.length <= 9833934;
      do {
         bodanM = `${predictionv.length * bodanM.length}`;
         if (kickQ) {
            break;
         }
      } while (kickQ && (predictionv != bodanM));
      scorem += `${typesc.length - langkeyh.length}`;
   if (!overg.startsWith(typesc)) {
       let balla = 1.0;
       let disconnectedv = String.fromCharCode(116,114,97,110,115,102,111,114,109,97,116,105,111,110,0);
       let setting9: Array<any> = [String.fromCharCode(101,110,99,111,100,101,100,102,114,97,109,101,0), String.fromCharCode(97,108,105,118,101,0), String.fromCharCode(105,109,109,101,100,105,97,116,101,115,105,103,110,97,108,0)];
       let datap = String.fromCharCode(115,104,117,102,102,108,101,112,108,97,110,101,115,0);
       let logoutz = String.fromCharCode(116,114,97,105,116,115,0);
      if (!datap.includes(`${logoutz.length}`)) {
         logoutz += `${parseInt(`${balla}`) << (Math.min(setting9.length, 1))}`;
      }
         datap += `${datap.length * 1}`;
          let catagoryq = String.fromCharCode(97,119,97,114,101,0);
          let plusP: Array<any> = [String.fromCharCode(108,119,115,115,112,110,0), String.fromCharCode(112,116,114,109,97,112,0)];
         disconnectedv += "2";
         catagoryq += "2";
         plusP.push(2);
      if (4.26 == (balla * 3.98)) {
         balla += disconnectedv.length ^ 1;
      }
      let lessF = setting9.length >= 8639210;
      do {
         setting9.push(parseInt(`${balla}`) << (Math.min(Math.abs(3), 5)));
         if (lessF) {
            break;
         }
      } while (((logoutz.length << (Math.min(Math.abs(1), 1))) < 4 || (setting9.length << (Math.min(Math.abs(1), 3))) < 4) && lessF);
      while (3.6 >= (balla - 4.33)) {
         balla /= Math.max((String.fromCharCode(102,0) == disconnectedv ? setting9.length : disconnectedv.length), 2);
         break;
      }
      if (3 >= (parseInt(`${balla}`) / (Math.max(datap.length, 5)))) {
          let bottomE = 4;
         datap += `${1 / (Math.max(8, datap.length))}`;
         bottomE &= 2;
      }
      let anytimey = 7155821 <= datap.length;
      do {
          let background1 = 4.0;
          let becomeB: Array<any> = [34, 538, 460];
         datap = `${logoutz.length + 3}`;
         background1 /= Math.max(parseFloat(`${becomeB.length}`), 4);
         becomeB = [parseInt(`${background1}`)];
         if (anytimey) {
            break;
         }
      } while ((3 == (setting9.length - 2)) && anytimey);
      for (let c = 0; c < 3; c++) {
         datap += `${3 | logoutz.length}`;
      }
      if ((disconnectedv.length * 4) >= 1) {
          let room0 = String.fromCharCode(100,111,119,110,108,111,97,100,101,100,0);
          let closeI = 0.0;
          let downZ = 5.0;
         disconnectedv += `${2 << (Math.min(4, logoutz.length))}`;
         room0 = `${(String.fromCharCode(89,0) == room0 ? room0.length : parseInt(`${closeI}`))}`;
         closeI += parseFloat(`${parseInt(`${downZ}`) ^ 2}`);
         downZ *= parseFloat(`${parseInt(`${downZ}`)}`);
      }
      let disconnected_ = String.fromCharCode(107,99,103,105,50,52,101,56,0) == datap;
      do {
         datap = `${parseInt(`${balla}`)}`;
         if (disconnected_) {
            break;
         }
      } while (disconnected_ && ((datap.length & 4) < 3));
      for (let f = 0; f < 2; f++) {
          let scheduleP = 5.0;
          let gestureF = String.fromCharCode(110,101,101,100,115,0);
         datap += `${parseInt(`${balla}`) / (Math.max(6, datap.length))}`;
         scheduleP /= Math.max(4, parseFloat(`${gestureF.length}`));
         gestureF = `${3 & parseInt(`${scheduleP}`)}`;
      }
         disconnectedv = `${(logoutz == String.fromCharCode(95,0) ? logoutz.length : setting9.length)}`;
          let shoote: Map<any, any> = new Map([[String.fromCharCode(114,108,118,108,99,0),true ], [String.fromCharCode(100,101,99,111,114,97,116,111,114,115,0),false ]]);
         disconnectedv = `${parseInt(`${balla}`) / (Math.max(disconnectedv.length, 6))}`;
         shoote = new Map([[`${shoote.size}`, shoote.size]]);
      for (let m = 0; m < 2; m++) {
          let placeholderG = true;
          let typesw = String.fromCharCode(100,99,116,120,0);
          let humidityA = 0.0;
          let animationH = String.fromCharCode(112,97,114,109,115,0);
         logoutz += `${setting9.length}`;
         placeholderG = String.fromCharCode(76,0) == typesw || humidityA > 64.61;
         typesw += "3";
         humidityA -= parseFloat(`${2 >> (Math.min(4, Math.abs(parseInt(`${humidityA}`))))}`);
         animationH = `${2 >> (Math.min(Math.abs(parseInt(`${humidityA}`)), 3))}`;
      }
      overg += `${2 | roomM.length}`;
   }
   for (let n = 0; n < 1; n++) {
       let typingJ: Array<any> = [String.fromCharCode(115,117,98,112,97,116,104,115,0), String.fromCharCode(115,116,114,105,110,103,101,110,99,111,100,101,0), String.fromCharCode(98,105,116,105,122,101,110,0)];
       let resendA: Map<any, any> = new Map([[String.fromCharCode(109,97,106,111,114,0),494], [String.fromCharCode(109,106,112,101,103,0),396], [String.fromCharCode(102,109,116,115,0),501]]);
      while (2 == (resendA.size | 5)) {
          let recommendationQ = 3.0;
         typingJ = [parseInt(`${recommendationQ}`) % 1];
         break;
      }
      for (let y = 0; y < 1; y++) {
         typingJ = [typingJ.length];
      }
          let untickZ = 2.0;
         typingJ.push(typingJ.length + resendA.size);
         untickZ /= Math.max(parseInt(`${untickZ}`) >> (Math.min(Math.abs(parseInt(`${untickZ}`)), 5)), 3);
          let sellx = String.fromCharCode(99,111,110,115,101,110,116,0);
         typingJ = [sellx.length >> (Math.min(3, Math.abs(resendA.size)))];
      for (let r = 0; r < 3; r++) {
         typingJ.push(typingJ.length | resendA.size);
      }
      while (Array.from(resendA.keys()).includes(`${typingJ.length}`)) {
         resendA.set(`${typingJ.length}`, 2);
         break;
      }
      roomM = `${(overg == String.fromCharCode(74,0) ? parseInt(`${resendi}`) : overg.length)}`;
   }
      mutedH += "1";
   while ((scorem.length / 4) == 2) {
       let penaltyg = String.fromCharCode(115,117,98,106,101,99,116,105,118,101,115,0);
       let downloadingK = String.fromCharCode(119,111,114,100,108,101,110,0);
       let trophyG: Map<any, any> = new Map([[String.fromCharCode(117,110,99,97,99,104,101,100,0),true ], [String.fromCharCode(117,112,108,111,97,100,101,114,0),false ]]);
       let countdownf = 3;
      if (!Array.from(trophyG.values()).includes(countdownf)) {
          let routerT = String.fromCharCode(120,98,105,110,0);
         countdownf *= 1;
         routerT = `${routerT.length}`;
      }
         trophyG = new Map([[`${trophyG.size}`, 3]]);
      let s_unlockT = penaltyg == String.fromCharCode(114,121,56,0);
      do {
         penaltyg = `${downloadingK.length}`;
         if (s_unlockT) {
            break;
         }
      } while (((trophyG.size ^ penaltyg.length) == 2) && s_unlockT);
       let macauG = 1;
      let middleware3 = 7189221 <= countdownf;
      do {
         countdownf += macauG;
         if (middleware3) {
            break;
         }
      } while (middleware3 && (downloadingK.length >= countdownf));
       let unselectedv: Map<any, any> = new Map([[String.fromCharCode(100,98,115,105,122,101,0),String.fromCharCode(110,97,110,111,98,101,110,99,104,109,97,114,107,0)], [String.fromCharCode(117,110,97,114,99,104,105,118,101,0),String.fromCharCode(115,98,114,101,115,101,114,118,101,0)]]);
      for (let t = 0; t < 3; t++) {
         unselectedv = new Map([[`${unselectedv.size}`, macauG]]);
      }
          let linei: Map<any, any> = new Map([[String.fromCharCode(100,101,98,108,111,99,107,0),275], [String.fromCharCode(99,111,114,114,101,108,97,116,101,0),1000], [String.fromCharCode(105,110,116,101,114,108,101,97,118,105,110,103,0),963]]);
         countdownf >>= Math.min(Math.abs(trophyG.size), 5);
         linei = new Map([[`${linei.size}`, 1]]);
          let nextb = String.fromCharCode(100,120,116,121,0);
         macauG ^= countdownf | downloadingK.length;
         nextb = `${(String.fromCharCode(54,0) == nextb ? nextb.length : nextb.length)}`;
      for (let b = 0; b < 3; b++) {
         trophyG.set(penaltyg, (penaltyg == String.fromCharCode(108,0) ? downloadingK.length : penaltyg.length));
      }
         penaltyg += "2";
      for (let y = 0; y < 1; y++) {
         countdownf -= 2 * trophyG.size;
      }
      scorem += `${mutedH.length >> (Math.min(Math.abs(2), 4))}`;
      break;
   }
      typesc += "2";
   for (let d = 0; d < 3; d++) {
      roomM += `${2 << (Math.min(4, indicatorY.length))}`;
   }
   for (let c = 0; c < 1; c++) {
      layout2 = roomM.length > typesc.length;
   }
       let cluby = 2.0;
       let watchO: Array<any> = [463, 583, 638];
       let closeA = 3.0;
      while (watchO.length <= 4) {
         watchO.push(1 - parseInt(`${closeA}`));
         break;
      }
         watchO.push(watchO.length);
      for (let g = 0; g < 3; g++) {
         watchO.push(parseInt(`${closeA}`) * 1);
      }
      let humidityQ = closeA <= 6743929.0;
      do {
          let matchesq = String.fromCharCode(108,111,119,98,105,116,115,0);
          let tailh = String.fromCharCode(114,101,115,101,116,98,117,102,0);
          let q_center8 = String.fromCharCode(97,120,105,115,0);
         closeA -= parseFloat(`${q_center8.length & parseInt(`${closeA}`)}`);
         matchesq = `${matchesq.length | 1}`;
         tailh = `${tailh.length ^ matchesq.length}`;
         q_center8 = `${matchesq.length}`;
         if (humidityQ) {
            break;
         }
      } while ((4.48 <= (closeA / (Math.max(parseFloat(`${watchO.length}`), 8))) && (4 | watchO.length) <= 3) && humidityQ);
      for (let m = 0; m < 2; m++) {
         watchO = [watchO.length ^ 2];
      }
      if (3 > watchO.length) {
         watchO.push(parseInt(`${closeA}`));
      }
      if ((parseFloat(`${watchO.length}`) / (Math.max(2, closeA))) >= 3.79) {
         watchO.push(parseInt(`${cluby}`) ^ watchO.length);
      }
      for (let z = 0; z < 2; z++) {
          let videoi = String.fromCharCode(97,112,101,114,0);
          let submitl = String.fromCharCode(99,109,121,107,0);
          let otherU: Map<any, any> = new Map([[String.fromCharCode(116,105,109,105,110,103,115,0),218], [String.fromCharCode(98,101,99,97,109,101,0),875]]);
          let expiredE = String.fromCharCode(104,105,101,114,0);
         closeA /= Math.max(parseFloat(`${3}`), 2);
         videoi = `${(String.fromCharCode(120,0) == submitl ? otherU.size : submitl.length)}`;
         otherU = new Map([[videoi, (String.fromCharCode(70,0) == expiredE ? expiredE.length : videoi.length)]]);
      }
      if ((watchO.length / 3) >= 3) {
          let l_imagef = 2.0;
          let dropdowng = String.fromCharCode(99,111,109,112,97,116,105,98,108,101,0);
          let background2 = String.fromCharCode(114,116,97,100,100,114,115,0);
         cluby *= parseFloat(`${2}`);
         l_imagef += background2.length;
         dropdowng = "1";
         background2 = `${background2.length}`;
      }
      overg = `${typesc.length | roomM.length}`;
   if (layout2) {
      layout2 = String.fromCharCode(103,0) == typesc;
   }
      mutedH += `${typesc.length | 3}`;
   let righty = String.fromCharCode(112,49,102,116,97,99,49,50,113,104,0) == indicatorY;
   do {
      indicatorY += `${scorem.length}`;
      if (righty) {
         break;
      }
   } while (((3.96 / (Math.max(8, resendi))) >= 2.11 || (resendi / 3.96) >= 5.26) && righty);
        setReferrerErrMsg(null);
    }

    const onClose = () => {
       let rankb = 4.0;
    let greenr = String.fromCharCode(101,103,97,99,121,0);
    let tailO = true;
    let modelR = 2;
    let buffer8 = String.fromCharCode(115,121,110,99,112,111,105,110,116,0);
    let privacyf: Array<any> = [536, 234, 117];
    let modeN = 2.0;
    let mathn: Map<any, any> = new Map([[String.fromCharCode(115,117,98,115,116,105,116,117,116,101,0),646], [String.fromCharCode(105,112,97,100,0),187]]);
    let clearI = 0.0;
    let store8: Map<any, any> = new Map([[String.fromCharCode(108,101,118,97,114,105,110,116,0),670], [String.fromCharCode(116,114,97,110,115,112,97,114,101,110,99,121,0),103], [String.fromCharCode(117,110,116,114,117,115,116,101,100,0),369]]);
    let completeu = 3.0;
    let acceptedB = String.fromCharCode(103,114,97,112,104,113,108,0);
    let transferP: Array<any> = [882, 503];
    let darkG: Array<any> = [991, 576, 143];
   for (let r = 0; r < 3; r++) {
       let loading9 = 2;
      for (let m = 0; m < 3; m++) {
          let downloadingq: Map<any, any> = new Map([[String.fromCharCode(108,97,98,101,108,0),true ], [String.fromCharCode(112,97,105,114,105,110,103,0),false ]]);
          let phone4 = 3.0;
          let smallT = 2.0;
          let buttonW = true;
          let logoF = String.fromCharCode(109,98,112,114,101,100,0);
         loading9 >>= Math.min(4, Math.abs(parseInt(`${smallT}`) * logoF.length));
         downloadingq.set(`${phone4}`, downloadingq.size);
         phone4 += parseFloat(`${parseInt(`${phone4}`) % (Math.max(3, 4))}`);
         smallT /= Math.max(parseInt(`${phone4}`) * downloadingq.size, 2);
         buttonW = phone4 > 67.17 && !buttonW;
         logoF += `${(parseInt(`${phone4}`) * (buttonW ? 3 : 1))}`;
      }
      for (let b = 0; b < 1; b++) {
         loading9 *= loading9 >> (Math.min(Math.abs(1), 3));
      }
         loading9 /= Math.max(4, 2);
      modelR |= buffer8.length;
   }
       let member6 = String.fromCharCode(115,116,97,114,115,0);
      for (let x = 0; x < 1; x++) {
         member6 = `${member6.length * member6.length}`;
      }
         member6 = `${member6.length % (Math.max(2, 7))}`;
         member6 = `${(member6 == String.fromCharCode(57,0) ? member6.length : member6.length)}`;
      store8 = new Map([[`${store8.size}`, store8.size]]);
      modeN /= Math.max(parseFloat(`${3}`), 4);
   while (2.24 == (2.51 * rankb) || !tailO) {
      rankb *= parseFloat(`${parseInt(`${rankb}`) - 1}`);
      break;
   }
      completeu *= 1 % (Math.max(parseInt(`${completeu}`), 3));
   if (1 == (modelR ^ 5) && (5 | modelR) == 3) {
      modelR %= Math.max(modelR, 4);
   }
      modeN += parseFloat(`${parseInt(`${clearI}`) | store8.size}`);
   if ((mathn.size | 2) == 1 && mathn.size == 2) {
       let promotionL = 0;
       let memberB = 4;
       let greenro: Map<any, any> = new Map([[String.fromCharCode(99,111,110,115,117,109,112,116,105,111,110,0),false ], [String.fromCharCode(101,120,101,99,117,116,101,0),false ]]);
       let downw = String.fromCharCode(112,114,101,100,105,99,116,111,114,115,98,0);
       let appsP = String.fromCharCode(97,108,103,0);
      if (1 == (1 << (Math.min(5, Math.abs(greenro.size))))) {
         greenro.set(`${appsP}`, 3);
      }
       let reminderl = 2.0;
      for (let z = 0; z < 3; z++) {
         memberB += 1;
      }
         downw += "2";
      for (let k = 0; k < 1; k++) {
         appsP = `${parseInt(`${reminderl}`)}`;
      }
         greenro.set(`${reminderl}`, downw.length);
         reminderl -= appsP.length + promotionL;
       let castp = 0.0;
       let skipO = 2.0;
      mathn = new Map([[`${promotionL}`, promotionL * 2]]);
   }
   while (2.78 == (1.85 * completeu) && 1.85 == (completeu + modeN)) {
       let gpayz = true;
       let step2 = false;
       let flyerT = 2.0;
      for (let y = 0; y < 2; y++) {
          let castingG = String.fromCharCode(114,105,110,100,101,120,0);
          let modityE = String.fromCharCode(98,111,120,101,100,0);
          let verticale = true;
         step2 = gpayz && !step2;
         castingG = `${modityE.length}`;
         modityE = `${(castingG == String.fromCharCode(75,0) ? castingG.length : modityE.length)}`;
         verticale = !modityE.endsWith(`${verticale}`);
      }
         gpayz = flyerT >= 86.17 || !gpayz;
          let update_o06 = 4.0;
          let emptyz = String.fromCharCode(105,114,97,110,100,0);
         step2 = !step2;
         update_o06 /= Math.max(parseFloat(`${emptyz.length}`), 4);
         emptyz += `${parseInt(`${update_o06}`) % (Math.max(emptyz.length, 5))}`;
      while (flyerT <= 4.53) {
          let vignette6: Array<any> = [312, 970];
          let area7 = String.fromCharCode(115,99,117,98,98,101,114,0);
          let sheetA: Map<any, any> = new Map([[String.fromCharCode(98,105,111,0),String.fromCharCode(99,111,108,114,97,109,0)], [String.fromCharCode(114,108,109,0),String.fromCharCode(98,101,104,97,118,105,111,117,114,0)]]);
          let downloadingZ = false;
         step2 = (downloadingZ ? step2 : downloadingZ);
         vignette6.push(area7.length / 3);
         area7 = "1";
         sheetA = new Map([[`${sheetA.size}`, vignette6.length]]);
         break;
      }
      while (4.38 >= (flyerT + 3.47)) {
          let foundj = String.fromCharCode(115,116,105,99,107,101,114,101,100,0);
         step2 = 26.57 <= flyerT || !gpayz;
         foundj += `${foundj.length}`;
         break;
      }
      for (let k = 0; k < 1; k++) {
         flyerT *= ((step2 ? 4 : 2));
      }
       let singapore2 = 4.0;
         gpayz = !step2 || 10.85 == flyerT;
       let connectionU: Array<any> = [764, 929, 197];
       let description_1qM: Array<any> = [String.fromCharCode(110,101,118,101,114,0), String.fromCharCode(112,105,110,115,0)];
      completeu += parseInt(`${clearI}`) * parseInt(`${rankb}`);
      break;
   }
   for (let z = 0; z < 2; z++) {
      completeu *= (String.fromCharCode(71,0) == greenr ? greenr.length : store8.size);
   }

        if (handleClose) handleClose();

      store8 = new Map([[buffer8, (buffer8 == String.fromCharCode(104,0) ? parseInt(`${modeN}`) : buffer8.length)]]);
      tailO = String.fromCharCode(111,0) == buffer8;
   let viewerd = tailO ? !tailO : tailO;
   do {
      tailO = ((store8.size >> (Math.min(2, Math.abs((tailO ? store8.size : 74))))) <= 11);
      if (viewerd) {
         break;
      }
   } while ((3.66 > (1.19 * modeN)) && viewerd);
   if ((5.2 + clearI) <= 3.94 && (completeu * clearI) <= 5.2) {
      clearI -= parseFloat(`${parseInt(`${completeu}`) | parseInt(`${modeN}`)}`);
   }
      greenr += `${parseInt(`${clearI}`)}`;
   for (let g = 0; g < 2; g++) {
      store8.set(`${completeu}`, modelR ^ 2);
   }
   while (3 >= greenr.length) {
       let zhengpian5 = 3;
       let taiwanp: Map<any, any> = new Map([[String.fromCharCode(108,105,98,114,115,118,103,0),384], [String.fromCharCode(99,112,112,108,105,110,116,0),278], [String.fromCharCode(120,102,105,120,101,115,0),181]]);
         zhengpian5 *= zhengpian5;
         zhengpian5 ^= zhengpian5 >> (Math.min(Math.abs(taiwanp.size), 5));
      if (3 >= (taiwanp.size << (Math.min(Math.abs(2), 1)))) {
          let connection5 = String.fromCharCode(104,97,114,101,0);
          let gmailf = false;
          let interstitialu = false;
         taiwanp.set(`${zhengpian5}`, zhengpian5 + connection5.length);
         connection5 = `${((interstitialu ? 1 : 3))}`;
         gmailf = interstitialu;
      }
      for (let c = 0; c < 1; c++) {
         zhengpian5 |= zhengpian5 >> (Math.min(Math.abs(taiwanp.size), 5));
      }
          let settingsS: Array<any> = [732, 263];
          let tickH = String.fromCharCode(101,116,104,101,114,0);
          let watchI = 1.0;
         taiwanp.set(`${watchI}`, zhengpian5);
         settingsS.push(tickH.length);
         tickH = "1";
         watchI -= parseFloat(`${tickH.length << (Math.min(1, settingsS.length))}`);
      let matchesL = zhengpian5 >= 6579972;
      do {
          let injury6: Map<any, any> = new Map([[String.fromCharCode(100,119,111,114,100,0),534], [String.fromCharCode(105,111,115,98,117,105,108,100,0),448], [String.fromCharCode(100,111,103,0),547]]);
          let matchesI = true;
          let login3 = 5.0;
          let chartE = String.fromCharCode(105,110,116,101,103,101,114,0);
          let splashq = String.fromCharCode(110,101,105,103,104,98,111,114,115,0);
         zhengpian5 |= taiwanp.size;
         injury6 = new Map([[`${injury6.size}`, 2 ^ injury6.size]]);
         matchesI = !chartE.includes(`${matchesI}`);
         login3 /= Math.max(3, 3);
         chartE = `${injury6.size - 1}`;
         splashq = `${parseInt(`${login3}`) * 3}`;
         if (matchesL) {
            break;
         }
      } while ((Array.from(taiwanp.keys()).includes(`${zhengpian5}`)) && matchesL);
      greenr = `${greenr.length}`;
      break;
   }
   for (let d = 0; d < 1; d++) {
      privacyf = [1];
   }
   for (let m = 0; m < 3; m++) {
      modelR &= mathn.size / 3;
   }
      store8 = new Map([[`${rankb}`, modelR - parseInt(`${rankb}`)]]);

        Keyboard.dismiss();

       let actionz = 4.0;
       let analyticsd = String.fromCharCode(97,117,116,111,114,101,102,114,101,115,104,0);
       let logino = String.fromCharCode(109,115,103,0);
      if (2 >= (3 & analyticsd.length) && (parseInt(`${actionz}`) - analyticsd.length) >= 3) {
         analyticsd = `${analyticsd.length / (Math.max(1, 4))}`;
      }
          let thailandQ = 5.0;
         actionz -= parseFloat(`${2}`);
         thailandQ -= 3 * parseInt(`${thailandQ}`);
      let long_nm = actionz >= 8744126.0;
      do {
         actionz /= Math.max(parseFloat(`${analyticsd.length << (Math.min(logino.length, 4))}`), 4);
         if (long_nm) {
            break;
         }
      } while (long_nm && ((actionz / (Math.max(parseFloat(`${analyticsd.length}`), 3))) == 3.80 || (parseInt(`${actionz}`) / 3) == 5));
      for (let c = 0; c < 1; c++) {
          let report3 = 2.0;
          let forwardX = 5.0;
         analyticsd += `${(analyticsd == String.fromCharCode(48,0) ? parseInt(`${actionz}`) : analyticsd.length)}`;
         report3 /= Math.max(3, 1);
         forwardX *= parseInt(`${report3}`) % (Math.max(parseInt(`${forwardX}`), 2));
      }
      for (let a = 0; a < 3; a++) {
         actionz /= Math.max(parseFloat(`${logino.length}`), 1);
      }
      if (logino.endsWith(analyticsd)) {
         analyticsd += `${(String.fromCharCode(114,0) == analyticsd ? parseInt(`${actionz}`) : analyticsd.length)}`;
      }
          let matchZ = 3.0;
          let yingV = true;
         actionz += (parseFloat(`${logino == String.fromCharCode(69,0) ? parseInt(`${actionz}`) : logino.length}`));
         matchZ /= Math.max(4, parseFloat(`${parseInt(`${matchZ}`) >> (Math.min(3, Math.abs(3)))}`));
         yingV = yingV || matchZ == 49.40;
      let fastforwardK = 6736532 >= analyticsd.length;
      do {
         analyticsd += `${logino.length}`;
         if (fastforwardK) {
            break;
         }
      } while (fastforwardK && (analyticsd.length < logino.length));
      if (!logino.endsWith(analyticsd)) {
         logino += `${logino.length >> (Math.min(Math.abs(2), 5))}`;
      }
      buffer8 += "2";
      modeN += parseFloat(`${2 ^ buffer8.length}`);
   if (buffer8.length < parseInt(`${rankb}`)) {
      rankb -= (parseFloat(`${String.fromCharCode(69,0) == buffer8 ? buffer8.length : mathn.size}`));
   }
       let firebaseX = 5.0;
       let dialogO = 3;
      for (let x = 0; x < 3; x++) {
         dialogO ^= parseInt(`${firebaseX}`) + 1;
      }
      while (3.83 > (firebaseX + dialogO)) {
         dialogO >>= Math.min(Math.abs(parseInt(`${firebaseX}`)), 5);
         break;
      }
      for (let w = 0; w < 1; w++) {
         dialogO &= dialogO;
      }
      if (4.5 >= (5.100 * firebaseX)) {
          let downloadb = true;
          let incidentb = String.fromCharCode(109,111,99,107,101,100,0);
          let weiboq = 3;
          let settingsI: Map<any, any> = new Map([[String.fromCharCode(118,112,120,101,110,99,0),String.fromCharCode(112,97,114,116,105,99,108,101,115,0)], [String.fromCharCode(99,97,110,111,110,105,99,97,108,105,122,101,100,0),String.fromCharCode(100,117,112,108,105,99,97,116,111,114,0)]]);
         firebaseX -= (String.fromCharCode(102,0) == incidentb ? incidentb.length : (downloadb ? 1 : 2));
         downloadb = null != settingsI.get(`${weiboq}`);
         weiboq += weiboq;
         settingsI.set(`${weiboq}`, weiboq);
      }
      while ((1.92 * firebaseX) == 2.82) {
          let info0 = 5.0;
         dialogO -= parseInt(`${info0}`);
         break;
      }
      if ((firebaseX / (Math.max(1.58, 6))) < 1.70 && 2.67 < (firebaseX / 1.58)) {
         dialogO ^= 3;
      }
      mathn = new Map([[`${dialogO}`, parseInt(`${firebaseX}`)]]);
      modeN += parseFloat(`${parseInt(`${clearI}`) >> (Math.min(Math.abs(1), 1))}`);
   if (4.100 > (completeu / (Math.max(2.45, 8)))) {
      completeu /= Math.max(3, parseInt(`${modeN}`) << (Math.min(3, Math.abs(2))));
   }
      acceptedB += `${greenr.length}`;
   if ((rankb - 4.34) > 4.42 && (rankb + 4.34) > 2.79) {
       let analyticsf = 3.0;
       let clubT = 3.0;
       let leftv = String.fromCharCode(100,101,110,111,105,115,105,110,103,0);
       let inactiveJ = String.fromCharCode(109,101,110,117,0);
      while (5.7 < (3.22 - analyticsf)) {
          let giftC = String.fromCharCode(118,109,115,108,0);
          let module1: Map<any, any> = new Map([[String.fromCharCode(108,111,103,105,115,116,105,99,0),953], [String.fromCharCode(109,101,109,98,101,114,115,104,105,112,0),365]]);
          let textG = 1.0;
          let circleL = String.fromCharCode(114,101,102,101,114,101,110,99,101,115,0);
         analyticsf *= parseFloat(`${circleL.length}`);
         giftC = `${(giftC == String.fromCharCode(119,0) ? module1.size : giftC.length)}`;
         module1.set(`${textG}`, module1.size ^ 2);
         textG -= parseFloat(`${module1.size}`);
         circleL += `${module1.size | giftC.length}`;
         break;
      }
       let injuryA = 1.0;
         inactiveJ += `${parseInt(`${clubT}`)}`;
          let with_iF = true;
          let placeholdern: Map<any, any> = new Map([[String.fromCharCode(118,105,115,105,98,105,108,105,116,121,0),50], [String.fromCharCode(99,117,114,0),260]]);
          let scheduleq = false;
         inactiveJ += `${(placeholdern.size * (scheduleq ? 3 : 1))}`;
         with_iF = (with_iF ? with_iF : !with_iF);
         placeholdern = new Map([[`${with_iF}`, ((with_iF ? 3 : 5) / (Math.max((with_iF ? 1 : 5), 5)))]]);
         leftv += `${1 / (Math.max(1, parseInt(`${analyticsf}`)))}`;
         inactiveJ += "1";
         injuryA -= parseInt(`${injuryA}`) & 1;
          let collectione = String.fromCharCode(99,97,112,116,117,114,101,116,101,115,116,118,105,100,101,111,0);
         clubT += 2;
         collectione = `${collectione.length << (Math.min(Math.abs(2), 1))}`;
          let sellW = String.fromCharCode(101,110,118,101,108,111,112,101,0);
         inactiveJ = `${parseInt(`${injuryA}`)}`;
         sellW += "1";
         clubT -= 3 & inactiveJ.length;
          let policyp = 3.0;
          let sendj = String.fromCharCode(100,111,99,108,105,115,116,0);
          let greenu = String.fromCharCode(97,112,112,0);
         analyticsf -= parseFloat(`${parseInt(`${analyticsf}`) + 2}`);
         policyp *= sendj.length;
         sendj = `${greenu.length}`;
         greenu = `${(String.fromCharCode(56,0) == greenu ? sendj.length : greenu.length)}`;
      while (1.84 == (4.48 - injuryA) || (injuryA / 4.48) == 2.68) {
         injuryA *= (String.fromCharCode(57,0) == leftv ? leftv.length : parseInt(`${injuryA}`));
         break;
      }
      rankb += parseFloat(`${modelR % (Math.max(9, privacyf.length))}`);
   }
       let catalogi = true;
       let questQ = 3.0;
       let renewr = String.fromCharCode(116,116,97,100,115,112,0);
         questQ /= Math.max(1 - parseInt(`${questQ}`), 3);
      if ((3.33 - questQ) >= 3.12) {
          let vignetteI = String.fromCharCode(100,101,113,117,101,117,101,0);
         catalogi = String.fromCharCode(76,0) == renewr;
         vignetteI += `${(vignetteI == String.fromCharCode(76,0) ? vignetteI.length : vignetteI.length)}`;
      }
      while (1 >= renewr.length) {
         catalogi = (((catalogi ? renewr.length : 16) / (Math.max(4, renewr.length))) == 16);
         break;
      }
      while ((questQ * 5.38) >= 5.76) {
          let lineZ = 5;
          let resend0: Array<any> = [827, 904, 374];
         renewr = `${renewr.length}`;
         lineZ >>= Math.min(2, Math.abs(3));
         resend0.push(lineZ);
         break;
      }
       let unselectedo = 1;
          let sportc = String.fromCharCode(97,118,120,115,121,110,116,104,0);
          let catagoryF = true;
          let screenP = 3.0;
         questQ -= renewr.length / 1;
         sportc = `${(String.fromCharCode(80,0) == sportc ? parseInt(`${screenP}`) : sportc.length)}`;
         catagoryF = 88.24 == screenP || 12 == sportc.length;
      while (5 >= unselectedo) {
         unselectedo <<= Math.min(1, renewr.length);
         break;
      }
       let renewv = 3.0;
       let tickedj = 3.0;
       let disconnectedK = false;
      modelR *= renewr.length << (Math.min(3, Math.abs(parseInt(`${modeN}`))));
   while (modelR >= 4) {
      modelR /= Math.max(4, parseInt(`${completeu}`) - 3);
      break;
   }
        resetForm();
    }

    const onSubmitForm = async () => {
       let hooksI = 5.0;
    let sliderG = true;
    let basketballw = String.fromCharCode(105,109,97,103,101,0);
    let calendaro = String.fromCharCode(109,105,110,0);
    let pointJ = false;
    let reducer2: Map<any, any> = new Map([[String.fromCharCode(109,111,100,105,102,105,99,97,116,105,111,110,115,0),143], [String.fromCharCode(113,122,98,105,110,0),494]]);
    let reminderN = String.fromCharCode(99,111,109,112,105,108,101,111,112,116,105,111,110,103,101,116,0);
    let feedbackB = false;
    let championY = String.fromCharCode(110,111,99,104,101,99,107,0);
    let fastI = 0;
    let successb: Array<any> = [157, 825, 224];
    let inviteJ = 3;
    let modalR = String.fromCharCode(116,114,117,116,104,0);
    let matchF: Array<any> = [868, 271];
    let groupw = true;
    let unselectedG: Map<any, any> = new Map([[String.fromCharCode(97,118,112,105,99,116,117,114,101,0),752], [String.fromCharCode(113,117,97,110,116,105,122,97,116,105,111,110,0),749], [String.fromCharCode(112,114,101,97,108,108,111,99,97,116,101,0),422]]);
       let telegram2 = 3;
       let sound5: Array<any> = [230, 333, 67];
      for (let c = 0; c < 2; c++) {
         telegram2 |= 1;
      }
          let fullN = String.fromCharCode(99,104,97,110,103,101,100,104,0);
         telegram2 <<= Math.min(fullN.length, 4);
         telegram2 %= Math.max(2, telegram2 % 1);
      if (sound5.length == telegram2) {
          let moviesl = 3.0;
          let auto_0d = String.fromCharCode(108,101,103,101,110,100,0);
          let megaphoneh = 1.0;
         sound5 = [telegram2 * 3];
         moviesl *= parseFloat(`${3 + parseInt(`${moviesl}`)}`);
         auto_0d = `${parseInt(`${megaphoneh}`) | parseInt(`${moviesl}`)}`;
         megaphoneh *= parseFloat(`${2 ^ parseInt(`${megaphoneh}`)}`);
      }
       let anytimea: Array<any> = [202, 118, 981];
      let splashS = sound5.length <= 7728093;
      do {
         sound5.push(3 / (Math.max(10, telegram2)));
         if (splashS) {
            break;
         }
      } while (splashS && (5 == (telegram2 >> (Math.min(Math.abs(3), 4)))));
      championY += `${((pointJ ? 5 : 4) % (Math.max(reminderN.length, 1)))}`;
       let feedbackM = 4.0;
         feedbackM -= parseInt(`${feedbackM}`);
      let volumeZ = feedbackM >= 7657268.0;
      do {
         feedbackM *= parseInt(`${feedbackM}`) | 1;
         if (volumeZ) {
            break;
         }
      } while ((4.77 > (feedbackM * 5)) && volumeZ);
      let product8 = feedbackM >= 9726401.0;
      do {
         feedbackM /= Math.max(2 + parseInt(`${feedbackM}`), 2);
         if (product8) {
            break;
         }
      } while ((feedbackM < feedbackM) && product8);
      feedbackB = reminderN.length > 52;

        if (referrerErrMsg !== null) return;

      hooksI /= Math.max(parseFloat(`${3 ^ reminderN.length}`), 1);
   if (!championY.includes(reminderN)) {
       let mappingo = 2.0;
       let episodesX = String.fromCharCode(116,114,97,110,115,102,101,114,114,105,110,103,0);
       let recommendationM = String.fromCharCode(97,108,108,111,99,122,0);
       let thumbnailY: Array<any> = [572, 724];
       let castingp = 4.0;
          let register_pa = String.fromCharCode(115,117,98,105,109,97,103,101,0);
          let gcopy_bD = false;
          let usernamei = String.fromCharCode(99,111,110,118,101,114,116,111,114,0);
         castingp += parseInt(`${mappingo}`);
         register_pa += `${((gcopy_bD ? 5 : 5))}`;
         gcopy_bD = usernamei.length <= 20;
         usernamei += `${(register_pa == String.fromCharCode(56,0) ? (gcopy_bD ? 4 : 2) : register_pa.length)}`;
      for (let o = 0; o < 1; o++) {
          let searchbarg = true;
          let i_titleB = String.fromCharCode(115,99,114,101,101,110,99,97,115,116,0);
          let logoutA: Array<any> = [372, 7, 152];
          let philippinesA = String.fromCharCode(100,111,109,97,105,110,115,0);
         thumbnailY.push(i_titleB.length);
         searchbarg = logoutA.includes(searchbarg);
         i_titleB = `${(philippinesA == String.fromCharCode(116,0) ? philippinesA.length : logoutA.length)}`;
      }
       let taiwan8 = 4.0;
       let anytimeu = 3.0;
         recommendationM = `${recommendationM.length + thumbnailY.length}`;
         recommendationM = `${episodesX.length * thumbnailY.length}`;
      while (castingp < taiwan8) {
         castingp -= parseInt(`${mappingo}`);
         break;
      }
         anytimeu /= Math.max(parseFloat(`${3 | episodesX.length}`), 1);
         recommendationM = `${parseInt(`${castingp}`) / (Math.max(parseInt(`${mappingo}`), 2))}`;
         episodesX = `${2 >> (Math.min(Math.abs(parseInt(`${taiwan8}`)), 3))}`;
      while ((thumbnailY.length / (Math.max(9, recommendationM.length))) > 2 && 1 > (recommendationM.length / (Math.max(2, 4)))) {
         recommendationM += `${episodesX.length}`;
         break;
      }
      let playlistv = 6337247 <= recommendationM.length;
      do {
          let expiredE = 4.0;
          let sheetu = String.fromCharCode(115,112,101,97,107,101,114,115,0);
          let eighteenJ = String.fromCharCode(100,111,116,116,101,100,0);
          let rankV = String.fromCharCode(102,119,104,116,120,0);
          let faviconX = false;
         recommendationM += `${thumbnailY.length}`;
         expiredE -= 1 << (Math.min(3, rankV.length));
         sheetu = "2";
         eighteenJ = `${sheetu.length}`;
         rankV += `${1 / (Math.max(parseInt(`${expiredE}`), 9))}`;
         faviconX = sheetu.length >= 73;
         if (playlistv) {
            break;
         }
      } while (playlistv && (5 >= (parseInt(`${mappingo}`) + recommendationM.length) && 5 >= (recommendationM.length + parseInt(`${mappingo}`))));
      for (let w = 0; w < 1; w++) {
         anytimeu -= parseFloat(`${parseInt(`${mappingo}`) % 1}`);
      }
          let u_unlockQ = false;
         recommendationM += "2";
         u_unlockQ = (u_unlockQ ? u_unlockQ : !u_unlockQ);
      let fastJ = thumbnailY.length <= 5185474;
      do {
         thumbnailY.push(episodesX.length / (Math.max(3, 1)));
         if (fastJ) {
            break;
         }
      } while ((!thumbnailY.includes(taiwan8)) && fastJ);
      if (5 == (parseInt(`${castingp}`) - thumbnailY.length) || 1.67 == (4.27 - castingp)) {
          let catagory0 = true;
         castingp *= 3;
         catagory0 = (catagory0 ? !catagory0 : !catagory0);
      }
      reminderN = `${(calendaro == String.fromCharCode(84,0) ? thumbnailY.length : calendaro.length)}`;
   }

        if (isSubmitting) return;

      championY = `${((feedbackB ? 1 : 4) % (Math.max(3, 5)))}`;
      calendaro += `${reminderN.length}`;
        setSubmitting(true);

      championY = `${basketballw.length}`;
   if (!feedbackB) {
      championY += `${((pointJ ? 2 : 1))}`;
   }

        try {

      hooksI *= parseFloat(`${reducer2.size}`);
      basketballw += `${((pointJ ? 5 : 3) - calendaro.length)}`;
            await THFirebase.updateUsername({
                username: userState.user?.userName ?? '',
                referralCode: referrer,
            });
        } catch (err: any) {
            if (
                err.errors &&
                err.errors.referral_code
            ) {

       let floatinga = 1.0;
      while (floatinga == 1.51) {
         floatinga += parseInt(`${floatinga}`);
         break;
      }
      while (1.86 >= floatinga) {
         floatinga *= 3 / (Math.max(6, parseInt(`${floatinga}`)));
         break;
      }
      for (let k = 0; k < 2; k++) {
         floatinga /= Math.max(2, 3);
      }
      hooksI -= parseFloat(`${1 >> (Math.min(5, successb.length))}`);
   if ((2 * reducer2.size) == 4) {
      championY += `${(reminderN == String.fromCharCode(66,0) ? inviteJ : reminderN.length)}`;
   }
                setReferrerErrMsg(err.errors.referral_code);
            }

            setSubmitting(false);

      fastI /= Math.max(4, championY.length + parseInt(`${hooksI}`));
   let termsg = hooksI >= 8352351.0;
   do {
       let playliste: Map<any, any> = new Map([[String.fromCharCode(109,101,115,115,97,103,105,110,103,0),true ], [String.fromCharCode(117,112,115,97,109,112,108,101,0),true ]]);
       let fillV = String.fromCharCode(115,116,114,105,99,116,0);
       let hooks7 = 0.0;
       let tailp: Array<any> = [438, 154, 847];
       let service7 = 3.0;
      for (let j = 0; j < 1; j++) {
         service7 -= playliste.size;
      }
      while (playliste.get(`${hooks7}`) == null) {
         hooks7 *= tailp.length;
         break;
      }
      let options2 = service7 >= 6589143.0;
      do {
          let viewsc = 1;
          let changed = 5;
         service7 -= viewsc;
         changed -= changed;
         if (options2) {
            break;
         }
      } while (options2 && (5 > fillV.length));
      let friendsG = 6583146 >= fillV.length;
      do {
         fillV = `${playliste.size}`;
         if (friendsG) {
            break;
         }
      } while (((fillV.length * 5) >= 5) && friendsG);
      let preview7 = 9390220.0 >= service7;
      do {
          let hongkongp = 4.0;
          let filterS = 3.0;
          let vignette2: Map<any, any> = new Map([[String.fromCharCode(105,116,101,114,97,116,105,118,101,0),107], [String.fromCharCode(115,104,97,100,105,110,103,0),392]]);
          let mappingK = String.fromCharCode(104,97,108,102,108,116,117,105,110,116,0);
          let tempx = 1.0;
         service7 *= parseInt(`${filterS}`);
         hongkongp -= parseFloat(`${mappingK.length}`);
         filterS += parseInt(`${hongkongp}`) ^ 2;
         vignette2 = new Map([[`${vignette2.size}`, parseInt(`${hongkongp}`)]]);
         mappingK = "3";
         tempx /= Math.max(1, parseFloat(`${vignette2.size}`));
         if (preview7) {
            break;
         }
      } while (preview7 && ((1 | playliste.size) == 3 && (parseInt(`${service7}`) / (Math.max(playliste.size, 6))) == 1));
       let subsh: Map<any, any> = new Map([[String.fromCharCode(115,105,109,105,108,97,114,0),0], [String.fromCharCode(121,118,99,111,110,102,105,103,0),625]]);
       let anner5: Map<any, any> = new Map([[String.fromCharCode(100,117,112,101,100,0),671], [String.fromCharCode(122,105,109,103,0),549], [String.fromCharCode(115,117,98,112,114,111,99,101,115,115,0),368]]);
         fillV += `${anner5.size / (Math.max(subsh.size, 2))}`;
      while (!Array.from(subsh.values()).includes(service7)) {
         service7 -= tailp.length;
         break;
      }
          let f_countr = String.fromCharCode(115,113,108,105,116,101,112,97,103,101,114,0);
          let chartO: Map<any, any> = new Map([[String.fromCharCode(100,118,97,117,100,105,111,0),114], [String.fromCharCode(102,105,108,101,116,105,109,101,0),848]]);
          let with_8N = String.fromCharCode(103,109,116,105,109,101,0);
         playliste = new Map([[fillV, 2 % (Math.max(5, fillV.length))]]);
         f_countr = `${chartO.size}`;
         chartO = new Map([[`${chartO.size}`, (f_countr == String.fromCharCode(83,0) ? f_countr.length : chartO.size)]]);
         with_8N += `${3 >> (Math.min(1, Math.abs(chartO.size)))}`;
         hooks7 -= 1;
      let iconH = subsh.size <= 6394920;
      do {
         subsh.set(`${hooks7}`, fillV.length);
         if (iconH) {
            break;
         }
      } while ((2 >= (tailp.length + 1) && 1 >= (tailp.length + subsh.size)) && iconH);
         hooks7 -= 2;
         fillV += "3";
      while (tailp.length >= 5) {
          let castingu = false;
          let handlerM = 1.0;
          let footballH: Array<any> = [561, 242];
         tailp = [1 / (Math.max(2, parseInt(`${hooks7}`)))];
         castingu = footballH.length > 78;
         handlerM *= (parseFloat(`${(castingu ? 4 : 2) + footballH.length}`));
         break;
      }
          let nalyticss = 3.0;
         tailp = [playliste.size];
         nalyticss -= parseInt(`${nalyticss}`) & 3;
      hooksI -= parseFloat(`${parseInt(`${service7}`) | 3}`);
      if (termsg) {
         break;
      }
   } while (termsg && ((1 ^ reminderN.length) == 3 && 1 == (reminderN.length * parseInt(`${hooksI}`))));
            return;

       let lineb = 2.0;
       let componentp = false;
       let action9 = false;
       let helperD = 4.0;
      let crossC = action9 ? !action9 : action9;
      do {
          let incident_ = 3.0;
          let downF = String.fromCharCode(116,97,103,99,111,109,112,97,114,101,0);
          let awayP = 5.0;
          let infol = String.fromCharCode(99,108,97,117,115,101,0);
          let eighteenk = 5;
         action9 = 51.8 > helperD;
         incident_ *= parseFloat(`${eighteenk}`);
         downF += "3";
         awayP /= Math.max(3, (parseFloat(`${String.fromCharCode(77,0) == downF ? downF.length : eighteenk}`)));
         infol += `${1 << (Math.min(1, Math.abs(eighteenk)))}`;
         if (crossC) {
            break;
         }
      } while ((helperD < 4.23 || (helperD + 4.23) < 1.8) && crossC);
      feedbackB = (pointJ ? feedbackB : !pointJ);
      lineb /= Math.max(parseInt(`${lineb}`) + parseInt(`${lineb}`), 2);
       let zhuboY = String.fromCharCode(115,104,97,107,101,0);
       let emojin: Map<any, any> = new Map([[String.fromCharCode(117,116,120,111,0),269], [String.fromCharCode(115,101,109,97,110,116,105,99,0),817], [String.fromCharCode(116,97,107,101,111,118,101,114,0),536]]);
      if ((zhuboY.length << (Math.min(Math.abs(1), 5))) == 4) {
          let searchI = String.fromCharCode(112,111,115,116,112,111,110,101,100,0);
          let launch1 = true;
          let commonq: Array<any> = [645, 406];
          let prediction0 = false;
          let gesturev = String.fromCharCode(99,121,117,118,0);
         zhuboY += `${commonq.length}`;
         searchI += `${gesturev.length & searchI.length}`;
         launch1 = !launch1;
         commonq.push((searchI == String.fromCharCode(48,0) ? (launch1 ? 1 : 4) : searchI.length));
         prediction0 = searchI.length <= gesturev.length;
      }
          let moduleZ = String.fromCharCode(99,111,110,116,114,97,105,110,101,100,0);
          let loadingx = String.fromCharCode(98,101,102,111,114,101,0);
         emojin.set(`${loadingx}`, loadingx.length + 3);
         moduleZ += `${moduleZ.length}`;
          let completeB = 2.0;
          let verticalz = String.fromCharCode(101,120,99,108,117,100,101,115,0);
          let bottomn = String.fromCharCode(103,114,97,110,117,108,97,114,105,116,121,0);
         zhuboY = "2";
         completeB /= Math.max(1, parseFloat(`${verticalz.length * 2}`));
         verticalz += `${parseInt(`${completeB}`)}`;
         bottomn = `${bottomn.length}`;
       let sendh = String.fromCharCode(101,120,101,99,117,116,97,98,108,101,0);
       let bufferX = String.fromCharCode(100,111,101,115,0);
          let upgrades = true;
          let serviceX = String.fromCharCode(115,105,109,117,108,116,97,110,101,111,117,115,0);
          let googles = String.fromCharCode(112,99,97,112,0);
         sendh = `${(String.fromCharCode(121,0) == googles ? googles.length : (upgrades ? 4 : 1))}`;
         upgrades = serviceX.length >= serviceX.length;
       let interstitiall = true;
      calendaro = "2";
        }

        const result = await THFirebase.getUserDetails();

      reminderN += `${3 + fastI}`;
       let usernameY = 3;
       let canvasy: Array<any> = [480, 113];
         usernameY |= canvasy.length;
      let pausey = usernameY >= 5478291;
      do {
          let bufferf = 1;
         usernameY |= bufferf;
         if (pausey) {
            break;
         }
      } while (pausey && ((4 & usernameY) < 2 || 4 < (4 & usernameY)));
      reminderN = `${((pointJ ? 3 : 4))}`;

        if (result == null) {

   while (!feedbackB) {
       let countdownt: Map<any, any> = new Map([[String.fromCharCode(110,101,108,108,121,109,111,115,101,114,0),847], [String.fromCharCode(112,97,116,104,115,0),689]]);
      if (!Array.from(countdownt.values()).includes(countdownt.size)) {
         countdownt.set(`${countdownt.size}`, countdownt.size);
      }
      if (!Array.from(countdownt.keys()).includes(`${countdownt.size}`)) {
         countdownt = new Map([[`${countdownt.size}`, countdownt.size]]);
      }
         countdownt.set(`${countdownt.size}`, countdownt.size);
      feedbackB = reducer2.size < 48 && 48 < inviteJ;
      break;
   }
   for (let v = 0; v < 2; v++) {
       let reminder0 = 0.0;
       let langv = String.fromCharCode(102,105,120,116,117,114,101,0);
       let confirmationf = String.fromCharCode(100,110,115,0);
          let adultQ: Map<any, any> = new Map([[String.fromCharCode(100,105,100,0),715], [String.fromCharCode(114,103,98,120,0),492]]);
          let selecty = true;
         confirmationf += `${adultQ.size / (Math.max(3, 7))}`;
      while (3.6 <= (reminder0 / (Math.max(parseFloat(`${langv.length}`), 2)))) {
         reminder0 += parseFloat(`${parseInt(`${reminder0}`)}`);
         break;
      }
      for (let r = 0; r < 3; r++) {
         langv += `${1 | parseInt(`${reminder0}`)}`;
      }
         confirmationf += `${parseInt(`${reminder0}`) % (Math.max(10, langv.length))}`;
         confirmationf = `${(String.fromCharCode(100,0) == langv ? langv.length : confirmationf.length)}`;
      pointJ = successb.length < 20;
   }
            return;
        }

        await dispatch(updateUserAuth(result));

      sliderG = !sliderG;
   let whiteq = 5302123.0 >= hooksI;
   do {
       let suggestionJ = 0.0;
       let history1 = String.fromCharCode(99,105,116,121,0);
      while ((history1.length - parseInt(`${suggestionJ}`)) > 3) {
         suggestionJ += parseFloat(`${parseInt(`${suggestionJ}`)}`);
         break;
      }
      for (let p = 0; p < 3; p++) {
          let navigationI = String.fromCharCode(97,110,116,105,97,108,105,97,115,101,100,0);
          let ballv = String.fromCharCode(113,119,111,114,100,0);
          let umenga = 3.0;
          let pingZ = String.fromCharCode(99,117,114,118,101,115,0);
         history1 += `${navigationI.length - 3}`;
         navigationI += `${parseInt(`${umenga}`) | 1}`;
         ballv = `${parseInt(`${umenga}`) % (Math.max(2, 1))}`;
         pingZ = `${pingZ.length << (Math.min(2, ballv.length))}`;
      }
         suggestionJ += parseFloat(`${parseInt(`${suggestionJ}`)}`);
      for (let d = 0; d < 3; d++) {
         suggestionJ /= Math.max(parseFloat(`${parseInt(`${suggestionJ}`)}`), 3);
      }
         suggestionJ += parseFloat(`${parseInt(`${suggestionJ}`)}`);
         suggestionJ -= (parseFloat(`${String.fromCharCode(99,0) == history1 ? history1.length : parseInt(`${suggestionJ}`)}`));
      hooksI -= (parseFloat(`${String.fromCharCode(77,0) == championY ? (sliderG ? 3 : 3) : championY.length}`));
      if (whiteq) {
         break;
      }
   } while (((calendaro.length | 5) == 4 && (calendaro.length * 5) == 4) && whiteq);
        dispatch(changeScreenAction("修改成功"));

   let clock6 = reminderN.length >= 5576788;
   do {
       let sendG = String.fromCharCode(100,101,115,116,114,117,99,116,111,114,0);
      for (let y = 0; y < 3; y++) {
         sendG += `${(String.fromCharCode(79,0) == sendG ? sendG.length : sendG.length)}`;
      }
         sendG += `${sendG.length % 1}`;
          let recommendationD = 1.0;
          let controlsa: Map<any, any> = new Map([[String.fromCharCode(112,111,119,116,97,98,108,101,0),295], [String.fromCharCode(109,105,100,105,0),81], [String.fromCharCode(101,99,100,115,97,0),787]]);
          let settingsc = 5.0;
         sendG += `${sendG.length}`;
         recommendationD += parseFloat(`${controlsa.size}`);
         controlsa.set(`${settingsc}`, parseInt(`${settingsc}`));
      reminderN += `${championY.length}`;
      if (clock6) {
         break;
      }
   } while (clock6 && (reminderN.length < 1));
       let upgradef = String.fromCharCode(117,110,119,105,110,100,0);
      if (3 >= upgradef.length) {
         upgradef = `${upgradef.length}`;
      }
       let zhengpianW: Map<any, any> = new Map([[String.fromCharCode(105,110,115,116,97,110,116,0),265], [String.fromCharCode(110,117,109,101,114,111,0),955]]);
       let heart1: Map<any, any> = new Map([[String.fromCharCode(98,111,117,110,99,105,110,103,0),9], [String.fromCharCode(115,117,98,115,99,114,105,98,97,98,108,101,0),373], [String.fromCharCode(117,110,115,101,101,110,0),178]]);
          let unselectedX = String.fromCharCode(110,111,110,98,108,111,99,107,0);
         heart1.set(unselectedX, 2 % (Math.max(4, heart1.size)));
      pointJ = reducer2.size < basketballw.length;

        Keyboard.dismiss();

       let networkW = String.fromCharCode(103,101,116,120,118,97,114,0);
         networkW += `${networkW.length % (Math.max(5, networkW.length))}`;
      while (networkW.length > networkW.length) {
         networkW = `${networkW.length}`;
         break;
      }
       let sharedJ = String.fromCharCode(109,97,112,0);
      calendaro = `${((pointJ ? 3 : 1))}`;
       let floaterK = 1.0;
       let navigationU = String.fromCharCode(99,104,97,110,103,101,0);
      let combineZ = navigationU.length >= 9032735;
      do {
         navigationU += `${parseInt(`${floaterK}`)}`;
         if (combineZ) {
            break;
         }
      } while (combineZ && (parseFloat(`${navigationU.length}`) == floaterK));
       let floatern = 4;
       let thumbnailr = 4;
      for (let h = 0; h < 2; h++) {
          let baiduf = true;
          let singleH = String.fromCharCode(112,97,103,101,111,117,116,0);
         navigationU = `${parseInt(`${floaterK}`) / 1}`;
         baiduf = singleH.length == 8 || !baiduf;
         singleH += `${(singleH.length | (baiduf ? 2 : 3))}`;
      }
         thumbnailr >>= Math.min(Math.abs(2), 2);
         navigationU = `${(navigationU == String.fromCharCode(122,0) ? navigationU.length : parseInt(`${floaterK}`))}`;
      if ((floatern / 3) < 1) {
          let termsi = String.fromCharCode(98,97,99,107,98,114,111,117,110,100,0);
          let desck = String.fromCharCode(112,104,114,97,115,101,115,0);
          let paginationA = 3.0;
          let inactiveT = String.fromCharCode(105,100,101,110,116,105,102,105,101,100,0);
         floatern ^= termsi.length & navigationU.length;
         termsi = `${2 * desck.length}`;
         desck += `${(inactiveT == String.fromCharCode(95,0) ? inactiveT.length : parseInt(`${paginationA}`))}`;
         paginationA -= parseFloat(`${inactiveT.length % (Math.max(8, desck.length))}`);
      }
      reminderN += `${parseInt(`${floaterK}`)}`;
        navigation.navigate("Home", {
            screen: "Profile",
        });

       let viewero: Array<any> = [104, 262];
       let flyerd = String.fromCharCode(112,111,119,0);
       let signinupv = 3;
       let gpayJ = String.fromCharCode(114,101,110,100,101,114,105,110,103,0);
       let philippinesv = String.fromCharCode(116,111,112,105,99,115,0);
       let langkeys = 2;
       let balli = String.fromCharCode(108,105,110,107,101,100,0);
       let moonA = String.fromCharCode(115,117,112,101,114,103,114,111,117,112,0);
      if (1 < (4 ^ flyerd.length) || 4 < (4 ^ flyerd.length)) {
         flyerd = `${signinupv % (Math.max(viewero.length, 7))}`;
      }
      if (3 >= viewero.length) {
          let tooltipsc = false;
          let stringf: Map<any, any> = new Map([[String.fromCharCode(100,111,119,110,115,97,109,112,108,105,110,103,0),String.fromCharCode(112,105,120,102,109,116,0)], [String.fromCharCode(97,118,102,102,116,0),String.fromCharCode(108,97,116,105,116,117,100,101,0)]]);
          let middlewaree = String.fromCharCode(99,108,111,115,101,0);
          let product9 = String.fromCharCode(108,111,103,115,116,101,114,101,111,0);
          let play2 = 1;
         flyerd += `${stringf.size}`;
         tooltipsc = !tooltipsc;
         stringf.set(product9, product9.length - middlewaree.length);
         middlewaree += `${play2 / 3}`;
         play2 -= (String.fromCharCode(73,0) == product9 ? play2 : product9.length);
      }
          let anytimeY = 2;
          let teamZ = 4;
         balli = "3";
         anytimeY /= Math.max(teamZ << (Math.min(Math.abs(anytimeY), 4)), 3);
         teamZ *= 3 << (Math.min(5, Math.abs(anytimeY)));
      for (let j = 0; j < 2; j++) {
         viewero = [3];
      }
         balli += `${balli.length ^ 3}`;
      if ((flyerd.length << (Math.min(Math.abs(3), 5))) >= 1) {
         viewero = [balli.length + signinupv];
      }
      pointJ = inviteJ > 38 || 38 > fastI;
      hooksI *= parseFloat(`${3}`);

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