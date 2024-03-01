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
       let const_iuW = 1;
    let delegate_iwK = String.fromCharCode(108,95,54,51,95,100,98,105,115,0);
    let y_titler = 3.0;
    let ballX = String.fromCharCode(117,95,56,51,95,104,97,110,100,0);
    let layoutX = String.fromCharCode(100,95,51,50,95,115,121,110,99,97,98,108,101,0);
    let editP: Map<any, any> = new Map([[String.fromCharCode(100,95,55,51,95,119,97,108,108,112,97,112,101,114,115,0),729], [String.fromCharCode(109,95,49,52,95,108,97,114,103,101,0),441], [String.fromCharCode(98,111,110,106,111,117,114,95,56,95,50,48,0),286]]);
    let private_cL = 5.0;
    let hongkongK = 1.0;
    let mbnative7 = String.fromCharCode(99,108,111,99,107,100,114,105,102,116,95,53,95,57,54,0);
    let usernamen = 1.0;
      y_titler += (parseFloat(`${String.fromCharCode(67,0) == ballX ? layoutX.length : ballX.length}`));
   for (let w = 0; w < 2; w++) {
      editP = new Map([[`${hongkongK}`, 3]]);
   }
       let floaterx: Map<any, any> = new Map([[String.fromCharCode(111,95,49,55,95,105,110,116,101,114,112,111,108,97,116,111,114,115,0),793], [String.fromCharCode(99,111,110,116,101,120,116,117,97,108,95,118,95,55,49,0),383]]);
       let episodesA: Array<any> = [649, 712, 326];
       let final_dD = 5;
          let promotionr = false;
          let calendar9 = 5.0;
         floaterx = new Map([[`${floaterx.size}`, floaterx.size]]);
         promotionr = !promotionr;
         calendar9 /= Math.max(parseInt(`${calendar9}`) % 3, 4);
         final_dD /= Math.max(1, episodesA.length * 3);
      for (let x = 0; x < 1; x++) {
          let recommendationD = String.fromCharCode(114,105,98,98,111,110,95,112,95,49,48,0);
          let statistics9: Map<any, any> = new Map([[String.fromCharCode(101,95,49,53,95,115,117,98,112,97,99,107,101,116,0),262], [String.fromCharCode(99,111,111,107,105,101,95,54,95,50,49,0),342]]);
          let modalW = true;
          let acceptedU: Map<any, any> = new Map([[String.fromCharCode(109,95,51,55,95,109,98,97,102,102,0),890], [String.fromCharCode(106,95,48,95,100,107,101,121,0),184], [String.fromCharCode(99,95,54,95,109,111,110,111,98,105,116,0),219]]);
         floaterx = new Map([[`${acceptedU.size}`, 1]]);
         recommendationD = `${statistics9.size}`;
         statistics9.set(recommendationD, (String.fromCharCode(116,0) == recommendationD ? recommendationD.length : statistics9.size));
         modalW = statistics9.size > 11 && recommendationD == String.fromCharCode(110,0);
         acceptedU.set(`${modalW}`, (statistics9.size | (modalW ? 4 : 3)));
      }
      for (let f = 0; f < 2; f++) {
         episodesA = [final_dD];
      }
      while (5 == floaterx.size) {
         floaterx.set(`${final_dD}`, 1);
         break;
      }
         final_dD /= Math.max(floaterx.size, 2);
       let matches2: Array<any> = [String.fromCharCode(106,95,49,48,95,104,119,99,111,110,116,101,120,116,0), String.fromCharCode(121,95,55,55,95,105,110,116,101,114,112,111,108,97,116,101,100,0)];
      let bdxadsdkP = 5080210 <= episodesA.length;
      do {
         episodesA = [episodesA.length];
         if (bdxadsdkP) {
            break;
         }
      } while (((3 / (Math.max(2, episodesA.length))) <= 4 && 5 <= (3 / (Math.max(3, episodesA.length)))) && bdxadsdkP);
       let sheet9 = 2.0;
      delegate_iwK = "3";
      layoutX += "2";
      const_iuW >>= Math.min(1, Math.abs(delegate_iwK.length + const_iuW));
      const_iuW <<= Math.min(4, Math.abs(delegate_iwK.length | 2));
      delegate_iwK = `${editP.size % 3}`;
      hongkongK += ballX.length;
       let faviconP = true;
       let dycreatorY = String.fromCharCode(115,99,111,112,101,105,100,95,122,95,55,54,0);
       let kickI = String.fromCharCode(115,112,97,99,105,110,103,115,95,57,95,54,55,0);
       let checkboxM = String.fromCharCode(111,95,54,55,95,115,101,114,105,97,108,105,122,101,0);
         dycreatorY += `${kickI.length}`;
      for (let w = 0; w < 3; w++) {
         kickI += `${dycreatorY.length}`;
      }
         checkboxM = `${checkboxM.length | 3}`;
      for (let r = 0; r < 1; r++) {
         faviconP = kickI.endsWith(`${faviconP}`);
      }
      let megaphoneb = faviconP ? !faviconP : faviconP;
      do {
         faviconP = ((dycreatorY.length - (!faviconP ? dycreatorY.length : 28)) >= 28);
         if (megaphoneb) {
            break;
         }
      } while (megaphoneb && (dycreatorY.length > 4 && faviconP));
      const_iuW *= parseInt(`${hongkongK}`) | 1;
      ballX = `${parseInt(`${hongkongK}`)}`;
   for (let u = 0; u < 3; u++) {
       let refreshx: Map<any, any> = new Map([[String.fromCharCode(109,95,49,95,100,101,116,0),false ], [String.fromCharCode(102,95,57,54,95,117,115,108,116,0),false ]]);
       let bingR = false;
       let ewardedz = String.fromCharCode(100,95,49,55,95,108,105,110,101,98,114,101,97,107,0);
         bingR = refreshx.size == 100;
          let injury1 = 0.0;
          let connection5 = 1.0;
          let configureT: Map<any, any> = new Map([[String.fromCharCode(112,114,105,109,97,114,121,95,103,95,57,0),String.fromCharCode(108,111,110,103,101,114,95,103,95,51,54,0)], [String.fromCharCode(108,111,99,107,95,103,95,49,57,0),String.fromCharCode(103,97,116,101,95,56,95,49,51,0)]]);
         refreshx = new Map([[`${configureT.size}`, parseInt(`${injury1}`)]]);
         injury1 *= parseFloat(`${parseInt(`${connection5}`) << (Math.min(2, Math.abs(3)))}`);
         connection5 /= Math.max(2, parseFloat(`${parseInt(`${connection5}`) << (Math.min(3, Math.abs(2)))}`));
         bingR = ewardedz.length < 7 && !bingR;
       let libswresampleb = 0.0;
       let libturbomodulejsijnin = 0.0;
       let sportS = 0.0;
         bingR = null != refreshx.get(`${sportS}`);
      while (!ewardedz.startsWith(`${bingR}`)) {
         bingR = String.fromCharCode(68,0) == ewardedz;
         break;
      }
      if ((libswresampleb / (Math.max(1, sportS))) < 5.78) {
         sportS *= 2;
      }
         ewardedz += `${refreshx.size}`;
      hongkongK -= editP.size % (Math.max(2, 6));
   }
   let pathE = 6690234 >= const_iuW;
   do {
      const_iuW <<= Math.min(3, Math.abs(2));
      if (pathE) {
         break;
      }
   } while (pathE && (2 >= (const_iuW & 1)));
   for (let w = 0; w < 1; w++) {
      layoutX += `${1 & parseInt(`${hongkongK}`)}`;
   }

        setReferrer('');

   while (3 >= (parseInt(`${y_titler}`) * ballX.length)) {
       let searchk = false;
       let placementU = String.fromCharCode(114,95,57,54,95,99,111,111,114,100,0);
       let episode9: Map<any, any> = new Map([[String.fromCharCode(114,101,108,97,116,101,100,95,111,95,50,49,0),true ], [String.fromCharCode(97,99,107,95,107,95,56,55,0),true ], [String.fromCharCode(117,110,99,108,97,109,112,101,100,95,53,95,49,53,0),false ]]);
       let libfbJ = String.fromCharCode(97,108,112,104,97,110,117,109,95,117,95,56,57,0);
          let animationT = 0.0;
          let types2 = 4.0;
         searchk = !placementU.startsWith(`${animationT}`);
         animationT -= parseFloat(`${parseInt(`${types2}`) ^ parseInt(`${types2}`)}`);
      while (libfbJ.length > 1) {
         searchk = placementU.length > 84;
         break;
      }
          let macaus = 4.0;
          let cancelK = 5.0;
          let gradleB = String.fromCharCode(99,105,112,104,101,114,95,100,95,52,50,0);
         placementU = `${((searchk ? 1 : 4) | 2)}`;
         macaus += parseInt(`${cancelK}`);
         gradleB += `${parseInt(`${macaus}`) % 2}`;
      for (let v = 0; v < 1; v++) {
         placementU += `${((searchk ? 4 : 5))}`;
      }
       let regeng1: Array<any> = [51, 569, 661];
       let episodes6: Array<any> = [698, 143, 387];
       let profileQ = true;
         libfbJ = "1";
         libfbJ += `${(2 - (profileQ ? 2 : 4))}`;
         regeng1.push(episodes6.length);
         episodes6.push(episode9.size);
       let banneri = String.fromCharCode(99,101,110,116,101,114,95,105,95,50,50,0);
       let blackR = String.fromCharCode(109,95,54,50,95,97,114,103,0);
      let tooltipsX = searchk ? !searchk : searchk;
      do {
         searchk = libfbJ == String.fromCharCode(110,0);
         if (tooltipsX) {
            break;
         }
      } while (tooltipsX && (searchk));
      y_titler /= Math.max(2, parseFloat(`${placementU.length}`));
      break;
   }
      mbnative7 = "2";
      editP = new Map([[mbnative7, mbnative7.length % (Math.max(8, delegate_iwK.length))]]);
   let circleK = delegate_iwK == String.fromCharCode(107,50,117,107,57,106,111,103,110,51,0);
   do {
      delegate_iwK = `${3 << (Math.min(2, layoutX.length))}`;
      if (circleK) {
         break;
      }
   } while (circleK && (3 < (delegate_iwK.length + 5) || 5 < (5 << (Math.min(3, delegate_iwK.length)))));
      editP = new Map([[delegate_iwK, delegate_iwK.length]]);
      mbnative7 = `${delegate_iwK.length ^ 3}`;
   for (let k = 0; k < 1; k++) {
       let whatsappq = 4.0;
         whatsappq /= Math.max(5, parseFloat(`${3}`));
      if (4.0 < (5.27 - whatsappq) && 5.27 < (whatsappq - whatsappq)) {
          let dragT = String.fromCharCode(117,110,102,105,108,116,101,114,101,100,95,119,95,55,49,0);
          let z_imagev = String.fromCharCode(115,110,97,112,95,48,95,56,55,0);
          let cross9 = String.fromCharCode(116,95,57,57,95,98,121,116,101,108,101,110,0);
          let notificationw = 5.0;
          let handlerV = String.fromCharCode(113,95,53,48,95,103,114,97,110,117,108,97,114,0);
         whatsappq -= parseFloat(`${2}`);
         dragT = `${(dragT == String.fromCharCode(53,0) ? dragT.length : z_imagev.length)}`;
         z_imagev = `${3 + cross9.length}`;
         cross9 += "2";
         notificationw -= (dragT == String.fromCharCode(56,0) ? z_imagev.length : dragT.length);
         handlerV = `${(String.fromCharCode(51,0) == handlerV ? handlerV.length : z_imagev.length)}`;
      }
       let latnN = true;
      layoutX += `${parseInt(`${hongkongK}`) % (Math.max(mbnative7.length, 5))}`;
   }
   if (5 > delegate_iwK.length) {
      delegate_iwK += `${editP.size & 2}`;
   }
   if (mbnative7 == layoutX) {
      layoutX = `${editP.size}`;
   }
       let moviesx = 0;
       let sportsh = 3.0;
       let referrerl = String.fromCharCode(114,108,112,95,100,95,53,0);
      let champion4 = sportsh >= 9610228.0;
      do {
         sportsh += parseFloat(`${referrerl.length}`);
         if (champion4) {
            break;
         }
      } while (champion4 && ((moviesx - sportsh) == 1.66));
         moviesx += moviesx >> (Math.min(referrerl.length, 5));
      while ((3 << (Math.min(3, Math.abs(moviesx)))) <= 2 || 3 <= (moviesx / (Math.max(parseInt(`${sportsh}`), 3)))) {
         sportsh *= parseFloat(`${3}`);
         break;
      }
      for (let y = 0; y < 1; y++) {
          let memberf = 3.0;
          let h_lockf = 0;
         moviesx >>= Math.min(3, Math.abs(moviesx));
         memberf += h_lockf + 2;
         h_lockf >>= Math.min(Math.abs(parseInt(`${memberf}`)), 3);
      }
      let pingI = sportsh >= 5689506.0;
      do {
         sportsh /= Math.max(parseFloat(`${referrerl.length}`), 4);
         if (pingI) {
            break;
         }
      } while ((referrerl.endsWith(`${sportsh}`)) && pingI);
      while ((moviesx * referrerl.length) == 4 || 4 == (referrerl.length * moviesx)) {
         moviesx >>= Math.min(Math.abs(1 / (Math.max(3, parseInt(`${sportsh}`)))), 4);
         break;
      }
      while ((moviesx | 3) > 5 && 2.35 > (sportsh * parseFloat(`${moviesx}`))) {
          let twitter1 = String.fromCharCode(103,95,51,95,109,117,108,116,105,112,108,101,114,0);
          let libswscaleU = 5;
          let switch_rP = String.fromCharCode(115,95,53,52,95,122,101,114,111,105,110,103,0);
          let pressure9 = String.fromCharCode(101,95,53,56,95,102,101,111,102,0);
          let annerp = 3.0;
         sportsh -= parseFloat(`${parseInt(`${annerp}`)}`);
         twitter1 = `${pressure9.length}`;
         libswscaleU &= 3;
         switch_rP = `${pressure9.length | 3}`;
         annerp -= (twitter1 == String.fromCharCode(90,0) ? libswscaleU : twitter1.length);
         break;
      }
         sportsh -= parseFloat(`${parseInt(`${sportsh}`) & moviesx}`);
       let configuret: Array<any> = [116, 402];
       let rightu: Array<any> = [755, 206, 73];
      hongkongK *= referrerl.length;
   while (!mbnative7.includes(layoutX)) {
       let sportl = 4.0;
       let libreactU: Map<any, any> = new Map([[String.fromCharCode(100,95,50,57,95,117,115,114,99,0),336], [String.fromCharCode(99,111,112,105,101,100,95,49,95,53,48,0),555]]);
      if (1 > (libreactU.size * parseInt(`${sportl}`)) || 2.61 > (sportl * 3.40)) {
          let kuaishouE: Map<any, any> = new Map([[String.fromCharCode(111,95,51,49,95,102,114,101,113,117,101,110,99,121,0),true ], [String.fromCharCode(105,110,99,111,109,105,110,103,95,103,95,57,54,0),true ]]);
          let combineP = String.fromCharCode(115,116,97,99,107,115,95,53,95,52,53,0);
          let zoom6: Array<any> = [347, 447];
          let sourceR: Map<any, any> = new Map([[String.fromCharCode(114,101,109,111,116,101,95,103,95,56,48,0),true ], [String.fromCharCode(108,95,56,53,95,115,112,105,110,0),true ], [String.fromCharCode(105,115,112,111,114,116,95,100,95,57,53,0),false ]]);
          let sharedz = String.fromCharCode(102,111,114,119,97,114,100,115,95,108,95,55,0);
         libreactU = new Map([[`${zoom6.length}`, combineP.length]]);
         kuaishouE = new Map([[`${sourceR.size}`, sourceR.size]]);
         combineP += `${sourceR.size}`;
         zoom6 = [(String.fromCharCode(50,0) == sharedz ? sharedz.length : sourceR.size)];
      }
         libreactU.set(`${sportl}`, 1 >> (Math.min(1, Math.abs(parseInt(`${sportl}`)))));
          let short_w6p = 5.0;
          let libfbjniI = 0.0;
          let trashO = 4.0;
         libreactU.set(`${sportl}`, libreactU.size);
         short_w6p += parseFloat(`${2 % (Math.max(parseInt(`${short_w6p}`), 1))}`);
         libfbjniI *= parseFloat(`${2 | parseInt(`${libfbjniI}`)}`);
         trashO += parseInt(`${trashO}`) >> (Math.min(2, Math.abs(2)));
          let debuge = String.fromCharCode(100,101,112,114,101,99,97,116,105,111,110,95,48,95,50,49,0);
          let animation8 = 0.0;
         libreactU.set(debuge, 3 + parseInt(`${animation8}`));
         sportl -= parseFloat(`${libreactU.size}`);
         sportl /= Math.max(4, parseFloat(`${2 << (Math.min(5, Math.abs(libreactU.size)))}`));
      layoutX += "3";
      break;
   }
       let entryg: Array<any> = [String.fromCharCode(97,95,57,48,95,112,114,105,109,97,108,105,116,121,0), String.fromCharCode(98,95,55,56,95,111,116,104,0)];
       let clearr = String.fromCharCode(112,95,51,49,95,109,99,111,109,112,0);
         clearr += `${3 >> (Math.min(3, entryg.length))}`;
          let libavfilterP: Array<any> = [458, 59, 811];
          let gradlez = String.fromCharCode(100,116,108,115,95,122,95,51,55,0);
          let cornero = 3.0;
         entryg.push((String.fromCharCode(81,0) == gradlez ? parseInt(`${cornero}`) : gradlez.length));
         libavfilterP.push(2 - libavfilterP.length);
      if ((clearr.length / (Math.max(3, 8))) < 4 || (entryg.length / 3) < 3) {
         clearr += `${(clearr == String.fromCharCode(80,0) ? clearr.length : entryg.length)}`;
      }
       let libreanimatedX = String.fromCharCode(119,95,50,54,95,97,114,105,98,0);
         clearr += `${libreanimatedX.length / (Math.max(2, 1))}`;
         entryg.push(3 | entryg.length);
      const_iuW /= Math.max(3, mbnative7.length & 3);
       let overz = 0.0;
       let mbnativeC = String.fromCharCode(101,97,99,115,95,57,95,53,48,0);
       let refreshl = String.fromCharCode(119,95,55,56,95,114,101,112,111,115,105,116,105,111,110,0);
      for (let w = 0; w < 3; w++) {
         mbnativeC += `${refreshl.length / (Math.max(mbnativeC.length, 1))}`;
      }
      for (let u = 0; u < 2; u++) {
         mbnativeC += `${refreshl.length % 2}`;
      }
      ballX = `${2 % (Math.max(9, parseInt(`${private_cL}`)))}`;
      overz /= Math.max(3, 3);
        setReferrerErrMsg(null);
    }

    const onClose = () => {
       let phonen = String.fromCharCode(99,104,111,112,95,108,95,50,0);
    let auto_p4 = String.fromCharCode(109,95,55,53,95,114,101,110,100,101,114,97,98,108,101,0);
    let qaag9: Array<any> = [88, 526, 314];
    let tramini_ = false;
    let librrci = 2.0;
    let routerv = 1;
    let downloaderC = String.fromCharCode(116,97,112,102,105,108,116,101,114,95,56,95,53,53,0);
    let middleE = String.fromCharCode(98,117,114,115,116,95,114,95,56,57,0);
       let y_countK = 2.0;
       let balle = 5.0;
       let windC: Map<any, any> = new Map([[String.fromCharCode(114,95,54,48,95,111,117,116,115,105,100,101,0),449], [String.fromCharCode(112,95,49,48,48,95,97,97,110,100,99,116,116,97,98,0),517]]);
       let flyerW = String.fromCharCode(98,105,116,115,116,114,95,112,95,49,51,0);
         flyerW += `${3 - parseInt(`${balle}`)}`;
       let huaweik = String.fromCharCode(110,95,50,57,95,100,114,97,119,108,105,110,101,0);
       let coren = String.fromCharCode(120,95,50,55,95,102,105,110,100,97,115,111,99,0);
         windC.set(`${y_countK}`, parseInt(`${y_countK}`));
          let adultW = false;
         huaweik += `${(parseInt(`${balle}`) & (adultW ? 4 : 4))}`;
      if (balle == 1.0) {
          let inactivep = 3.0;
          let upgradeV = String.fromCharCode(105,100,101,110,116,105,102,105,101,114,115,95,51,95,53,55,0);
          let selectedt = 3;
          let alertM = String.fromCharCode(111,95,51,57,95,103,101,110,104,0);
          let textlayoutmanagery = String.fromCharCode(110,97,118,105,95,52,95,50,53,0);
         balle /= Math.max(5, parseFloat(`${flyerW.length << (Math.min(textlayoutmanagery.length, 4))}`));
         inactivep += 2 / (Math.max(10, alertM.length));
         upgradeV = `${selectedt | upgradeV.length}`;
         selectedt += selectedt % 3;
         alertM += `${alertM.length >> (Math.min(Math.abs(1), 3))}`;
         textlayoutmanagery = `${upgradeV.length}`;
      }
      while (huaweik != coren) {
         coren = `${2 << (Math.min(3, Math.abs(windC.size)))}`;
         break;
      }
      if ((flyerW.length >> (Math.min(Math.abs(4), 1))) > 5) {
         flyerW += "2";
      }
      tramini_ = auto_p4.includes(`${routerv}`);
   let filedp = phonen.length <= 6293381;
   do {
      phonen += `${1 + parseInt(`${librrci}`)}`;
      if (filedp) {
         break;
      }
   } while (filedp && (auto_p4 == String.fromCharCode(106,0)));
       let chinasameP = true;
       let nterstitialv = String.fromCharCode(101,95,49,53,95,115,105,110,102,0);
       let launcherK = 3.0;
         nterstitialv = `${((chinasameP ? 4 : 3))}`;
      while (1.55 > (3.88 * launcherK)) {
         launcherK -= parseFloat(`${nterstitialv.length}`);
         break;
      }
      let statisticsG = nterstitialv == String.fromCharCode(112,103,114,122,0);
      do {
         nterstitialv = "2";
         if (statisticsG) {
            break;
         }
      } while (statisticsG && (4 > nterstitialv.length));
         launcherK *= parseFloat(`${nterstitialv.length}`);
      if (4 < (nterstitialv.length + parseInt(`${launcherK}`))) {
         launcherK /= Math.max(parseFloat(`${parseInt(`${launcherK}`) ^ nterstitialv.length}`), 5);
      }
         launcherK += (parseFloat(`${String.fromCharCode(97,0) == nterstitialv ? (chinasameP ? 1 : 1) : nterstitialv.length}`));
      while (3 < (parseInt(`${launcherK}`) + nterstitialv.length)) {
          let libreanimatedS = 4;
          let dycreatorJ = String.fromCharCode(100,105,102,102,105,99,117,108,116,121,95,113,95,53,50,0);
          let applicationl = String.fromCharCode(115,101,103,109,101,110,116,116,105,109,101,108,105,110,101,95,48,95,50,53,0);
          let temperaturec = String.fromCharCode(102,95,55,53,95,116,101,109,112,108,97,116,101,100,0);
         launcherK -= parseFloat(`${parseInt(`${launcherK}`)}`);
         libreanimatedS /= Math.max((String.fromCharCode(115,0) == dycreatorJ ? temperaturec.length : dycreatorJ.length), 4);
         applicationl += "2";
         temperaturec = `${(String.fromCharCode(87,0) == dycreatorJ ? libreanimatedS : dycreatorJ.length)}`;
         break;
      }
         chinasameP = launcherK < 40.81;
      if (nterstitialv.startsWith(`${chinasameP}`)) {
         nterstitialv += `${((chinasameP ? 5 : 3))}`;
      }
      qaag9.push(auto_p4.length >> (Math.min(Math.abs(2), 5)));
      downloaderC += `${parseInt(`${librrci}`) / 2}`;
       let savek = true;
       let castingb: Array<any> = [536, 555];
       let volumeC = 3.0;
      let tickB = 8842496 >= castingb.length;
      do {
         castingb = [castingb.length];
         if (tickB) {
            break;
         }
      } while (tickB && ((castingb.length * parseInt(`${volumeC}`)) > 4 && 2 > (castingb.length % (Math.max(4, 10)))));
          let injurye = String.fromCharCode(115,95,50,48,95,100,105,114,115,0);
          let minij = String.fromCharCode(122,95,56,95,107,101,121,110,97,109,101,0);
          let eighteen1 = 2.0;
         volumeC += castingb.length;
         injurye = `${(String.fromCharCode(53,0) == minij ? minij.length : injurye.length)}`;
         eighteen1 -= minij.length;
      while (5 == (2 | castingb.length)) {
         castingb.push(1 >> (Math.min(5, castingb.length)));
         break;
      }
          let unreadr = true;
         volumeC *= ((savek ? 1 : 5));
      for (let g = 0; g < 3; g++) {
          let animationsm = 1.0;
         savek = (castingb.length + parseInt(`${volumeC}`)) > 19;
         animationsm -= parseFloat(`${1 ^ parseInt(`${animationsm}`)}`);
      }
         castingb = [parseInt(`${volumeC}`) >> (Math.min(2, Math.abs(1)))];
       let watche = String.fromCharCode(115,101,97,108,101,100,95,101,95,53,49,0);
       let fieldi = String.fromCharCode(108,95,50,55,95,115,109,97,108,108,101,114,0);
         fieldi += `${((savek ? 1 : 1))}`;
         volumeC /= Math.max((watche == String.fromCharCode(99,0) ? watche.length : parseInt(`${volumeC}`)), 1);
      auto_p4 += `${phonen.length / 3}`;
       let usernameD = String.fromCharCode(122,95,51,54,95,101,114,108,101,0);
       let untick7: Array<any> = [String.fromCharCode(116,101,97,114,95,122,95,50,56,0), String.fromCharCode(101,110,100,105,97,110,95,111,95,51,57,0)];
       let binddatasZ = String.fromCharCode(100,97,121,115,95,115,95,52,57,0);
       let userg: Array<any> = [545, 450, 636];
      let lightu = untick7.length <= 6362067;
      do {
          let tooltips8 = 5;
         untick7.push(untick7.length);
         tooltips8 += 3;
         if (lightu) {
            break;
         }
      } while (((2 & userg.length) < 1 && (untick7.length & userg.length) < 2) && lightu);
         binddatasZ += "1";
         untick7.push(usernameD.length | 2);
         usernameD += `${binddatasZ.length}`;
         usernameD += "3";
         userg = [3 >> (Math.min(1, usernameD.length))];
      let grayQ = String.fromCharCode(110,49,52,51,99,118,116,111,103,0) == usernameD;
      do {
          let whatsappJ: Map<any, any> = new Map([[String.fromCharCode(102,95,55,49,95,116,119,111,108,111,111,112,0),216], [String.fromCharCode(102,95,52,95,98,114,111,97,100,99,97,115,116,105,110,103,0),954], [String.fromCharCode(112,111,115,116,112,114,111,99,101,115,115,95,109,95,56,51,0),585]]);
         usernameD = "2";
         whatsappJ = new Map([[`${whatsappJ.size}`, 2]]);
         if (grayQ) {
            break;
         }
      } while ((5 <= (1 - usernameD.length) && (1 - usernameD.length) <= 2) && grayQ);
         userg.push(2);
      auto_p4 = `${usernameD.length ^ routerv}`;
   while (3 >= (5 * downloaderC.length) || (downloaderC.length * 5) >= 4) {
      routerv /= Math.max(phonen.length & routerv, 3);
      break;
   }

        if (handleClose) handleClose();

   let robotoI = String.fromCharCode(114,119,101,101,95,114,109,0) == downloaderC;
   do {
      downloaderC += "3";
      if (robotoI) {
         break;
      }
   } while ((5.43 <= (5.59 + librrci)) && robotoI);
      downloaderC += `${3 / (Math.max(8, routerv))}`;
       let routerA: Array<any> = [156, 216];
       let watchu = true;
         watchu = ((routerA.length % (Math.max(1, (watchu ? 94 : routerA.length)))) >= 94);
         watchu = (62 <= ((!watchu ? routerA.length : 62) % (Math.max(routerA.length, 8))));
         routerA = [routerA.length];
      for (let z = 0; z < 1; z++) {
          let shrinkP = 4;
          let guideL = String.fromCharCode(112,108,117,114,97,108,95,104,95,50,51,0);
          let suggestiont = String.fromCharCode(106,115,111,110,95,110,95,56,55,0);
         watchu = (shrinkP / (Math.max(guideL.length, 6))) >= 47;
         shrinkP ^= suggestiont.length;
         guideL = `${suggestiont.length}`;
      }
      for (let u = 0; u < 1; u++) {
         watchu = !watchu;
      }
         routerA = [2 + routerA.length];
      qaag9 = [1 / (Math.max(routerv, 1))];
   for (let c = 0; c < 3; c++) {
      qaag9.push((auto_p4 == String.fromCharCode(50,0) ? downloaderC.length : auto_p4.length));
   }
   let regengh = downloaderC == String.fromCharCode(55,48,56,111,0);
   do {
      downloaderC += `${qaag9.length - auto_p4.length}`;
      if (regengh) {
         break;
      }
   } while ((4 < downloaderC.length && !tramini_) && regengh);
   for (let h = 0; h < 3; h++) {
      tramini_ = parseFloat(`${phonen.length}`) > librrci;
   }
      qaag9 = [((tramini_ ? 2 : 4) / 3)];

        Keyboard.dismiss();

      tramini_ = String.fromCharCode(110,0) == downloaderC;
   let linkp = routerv >= 8750109;
   do {
      routerv &= 3;
      if (linkp) {
         break;
      }
   } while ((routerv >= 2) && linkp);
      routerv %= Math.max(4, parseInt(`${librrci}`) % (Math.max(downloaderC.length, 3)));
   for (let s = 0; s < 1; s++) {
      auto_p4 += `${parseInt(`${librrci}`)}`;
   }
   if (3.70 < (librrci + 5.67)) {
       let androidG = String.fromCharCode(115,101,99,107,101,121,95,54,95,57,50,0);
          let leftT: Array<any> = [811, 617];
          let tnewinterstitialj: Map<any, any> = new Map([[String.fromCharCode(102,95,49,48,95,97,108,108,111,119,0),655], [String.fromCharCode(105,115,110,111,110,122,101,114,111,95,118,95,49,48,0),404], [String.fromCharCode(110,97,110,111,115,118,103,95,115,95,57,48,0),481]]);
         androidG = `${(androidG == String.fromCharCode(49,0) ? androidG.length : leftT.length)}`;
         leftT = [3 & tnewinterstitialj.size];
         tnewinterstitialj = new Map([[`${tnewinterstitialj.size}`, 2]]);
         androidG += `${(androidG == String.fromCharCode(120,0) ? androidG.length : androidG.length)}`;
      if (!androidG.startsWith(`${androidG.length}`)) {
         androidG = `${androidG.length}`;
      }
      librrci += parseFloat(`${routerv}`);
   }
      librrci += parseFloat(`${auto_p4.length << (Math.min(2, phonen.length))}`);
   while ((routerv / 3) <= 5 || (routerv / (Math.max(downloaderC.length, 8))) <= 3) {
      routerv -= ((tramini_ ? 4 : 3) << (Math.min(Math.abs(routerv), 4)));
      break;
   }
        resetForm();
    }

    const onSubmitForm = async () => {
       let dropdownU = 5.0;
    let libreactT = String.fromCharCode(115,95,55,55,95,98,111,117,110,99,105,110,101,115,115,0);
    let launchr = 2;
    let hiadH: Map<any, any> = new Map([[String.fromCharCode(108,105,98,97,118,114,101,115,97,109,112,108,101,95,57,95,52,50,0),763], [String.fromCharCode(120,95,54,48,95,115,116,100,108,105,98,0),389], [String.fromCharCode(117,95,57,56,95,118,105,115,105,98,105,108,105,116,105,116,101,115,0),80]]);
    let halfo = 5.0;
    let successt = 1.0;
    let becomeW = String.fromCharCode(121,95,57,54,95,99,117,98,105,99,0);
    let teamh = 3;
    let zhengpianC = 3.0;
    let componentregistrye = String.fromCharCode(118,95,57,56,95,100,101,108,105,109,105,116,101,114,115,0);
    let handler6 = 0.0;
    let crossH = false;
    let renewy = true;
    let editK: Map<any, any> = new Map([[String.fromCharCode(101,116,101,114,110,105,116,121,95,101,95,52,55,0),false ], [String.fromCharCode(116,97,115,107,115,95,106,95,51,54,0),true ], [String.fromCharCode(102,111,115,115,105,108,95,118,95,51,50,0),true ]]);
      dropdownU /= Math.max(5, libreactT.length >> (Math.min(Math.abs(1), 4)));
      hiadH = new Map([[componentregistrye, 3 + parseInt(`${halfo}`)]]);

        if (referrerErrMsg !== null) return;

      successt /= Math.max(2, parseFloat(`${parseInt(`${zhengpianC}`)}`));
   for (let v = 0; v < 1; v++) {
       let canvas5 = 3;
       let actiony = 4.0;
       let roote = String.fromCharCode(102,95,57,50,95,97,117,100,105,111,112,114,111,99,0);
       let handler6f: Map<any, any> = new Map([[String.fromCharCode(114,97,100,105,97,108,95,56,95,55,56,0),false ], [String.fromCharCode(107,95,49,56,95,97,114,99,116,105,99,0),true ]]);
         actiony /= Math.max(parseFloat(`${roote.length ^ 3}`), 1);
         canvas5 += handler6f.size;
      for (let h = 0; h < 2; h++) {
         roote += `${roote.length >> (Math.min(5, Math.abs(parseInt(`${actiony}`))))}`;
      }
       let attributedstring0 = 1.0;
      for (let a = 0; a < 1; a++) {
          let mapbufferK = 5.0;
          let themez: Array<any> = [565, 435];
         actiony *= parseFloat(`${themez.length ^ parseInt(`${mapbufferK}`)}`);
      }
         roote = `${canvas5 % (Math.max(parseInt(`${actiony}`), 3))}`;
         canvas5 *= parseInt(`${actiony}`) + 1;
         canvas5 /= Math.max(1, 3);
      launchr *= libreactT.length;
   }

        if (isSubmitting) return;

   let unreads = 8823422 >= hiadH.size;
   do {
      hiadH.set(libreactT, 3);
      if (unreads) {
         break;
      }
   } while ((hiadH.get(`${launchr}`) == null) && unreads);
   for (let d = 0; d < 2; d++) {
      hiadH = new Map([[libreactT, libreactT.length << (Math.min(Math.abs(2), 2))]]);
   }
        setSubmitting(true);

   for (let s = 0; s < 1; s++) {
      handler6 -= parseFloat(`${1 & launchr}`);
   }
   while (5 >= (parseInt(`${handler6}`) + teamh) && (teamh % (Math.max(5, 3))) >= 5) {
       let infod = 3;
      for (let x = 0; x < 2; x++) {
         infod ^= infod;
      }
      if (5 < (infod / 4)) {
         infod >>= Math.min(3, Math.abs(3 - infod));
      }
      while (1 >= (infod / (Math.max(infod, 2)))) {
         infod >>= Math.min(Math.abs(infod), 3);
         break;
      }
      handler6 -= parseFloat(`${2 >> (Math.min(Math.abs(launchr), 3))}`);
      break;
   }

        try {

      becomeW += `${hiadH.size}`;
   for (let r = 0; r < 2; r++) {
       let leagues = 3.0;
          let icon2 = true;
          let long_v5 = String.fromCharCode(111,118,101,114,104,101,97,100,95,108,95,55,56,0);
          let videov = 4;
         leagues -= parseFloat(`${videov}`);
         icon2 = long_v5.length == 67 && icon2;
         long_v5 = `${long_v5.length}`;
         videov >>= Math.min(Math.abs(((icon2 ? 2 : 3) * long_v5.length)), 1);
         leagues *= parseFloat(`${1}`);
         leagues += parseFloat(`${parseInt(`${leagues}`) | 3}`);
      componentregistrye = `${(parseInt(`${dropdownU}`) + (renewy ? 3 : 4))}`;
   }
            await yys_GesturesConst.updateUsername({
                username: userState.user?.userName ?? '',
                referralCode: referrer,
            });
        } catch (err: any) {
            if (
                err.errors &&
                err.errors.referral_code
            ) {

       let libavutilH = 2.0;
      if ((1.9 * libavutilH) >= 4.24 || (libavutilH / 1.9) >= 5.63) {
         libavutilH += parseInt(`${libavutilH}`);
      }
       let reducers = String.fromCharCode(103,95,51,56,95,111,112,112,111,114,116,117,110,105,115,116,105,99,97,108,108,121,0);
       let updatesj = String.fromCharCode(99,95,51,55,95,104,97,108,102,0);
       let brightnessm = String.fromCharCode(114,101,110,100,105,116,105,111,110,115,95,99,95,57,48,0);
       let streamingi = String.fromCharCode(100,105,115,112,111,115,101,95,51,95,48,0);
      componentregistrye = `${((renewy ? 3 : 4) + (crossH ? 3 : 3))}`;
       let mathU = 0.0;
       let anner_: Array<any> = [String.fromCharCode(114,97,116,105,111,115,95,107,95,55,48,0), String.fromCharCode(97,95,49,53,95,112,97,114,116,105,116,105,111,110,105,110,103,0)];
      for (let u = 0; u < 2; u++) {
          let downloadl = String.fromCharCode(103,101,110,101,114,97,116,101,95,115,95,49,0);
          let libsentry9: Map<any, any> = new Map([[String.fromCharCode(107,95,57,57,0),537], [String.fromCharCode(118,95,56,54,95,109,105,114,114,111,114,101,100,0),145], [String.fromCharCode(109,111,110,111,98,105,116,95,102,95,52,50,0),92]]);
          let componentregistryL = String.fromCharCode(99,95,57,55,95,100,101,108,101,116,101,0);
         anner_ = [(componentregistryL == String.fromCharCode(55,0) ? parseInt(`${mathU}`) : componentregistryL.length)];
         downloadl += `${2 & libsentry9.size}`;
         libsentry9.set(`${downloadl}`, 3);
      }
      if (anner_.length < parseInt(`${mathU}`)) {
         mathU *= parseInt(`${mathU}`) % 3;
      }
         anner_.push(2);
      if (mathU > 1.93) {
         mathU += 1 & anner_.length;
      }
         mathU *= anner_.length % (Math.max(1, parseInt(`${mathU}`)));
      while ((4 ^ anner_.length) >= 5 && 4 >= (anner_.length + parseInt(`${mathU}`))) {
         mathU -= anner_.length << (Math.min(Math.abs(2), 5));
         break;
      }
      libreactT = `${parseInt(`${successt}`) | launchr}`;
                setReferrerErrMsg(err.errors.referral_code);
            }

            setSubmitting(false);

   for (let z = 0; z < 2; z++) {
      editK.set(`${renewy}`, parseInt(`${handler6}`) | 3);
   }
   for (let r = 0; r < 1; r++) {
       let friendsD: Map<any, any> = new Map([[String.fromCharCode(102,105,108,116,101,114,95,52,95,51,49,0),677], [String.fromCharCode(115,116,97,116,117,115,95,110,95,56,0),1]]);
         friendsD.set(`${friendsD.size}`, 3 + friendsD.size);
      for (let r = 0; r < 1; r++) {
         friendsD.set(`${friendsD.size}`, friendsD.size | friendsD.size);
      }
          let cornerF = 4.0;
         friendsD = new Map([[`${friendsD.size}`, parseInt(`${cornerF}`)]]);
      zhengpianC *= libreactT.length;
   }
            return;

       let chartf = 2.0;
       let rewardV = false;
       let areaa = String.fromCharCode(101,118,101,110,95,111,95,49,53,0);
         rewardV = (areaa.length - parseInt(`${chartf}`)) >= 89;
          let statsb = String.fromCharCode(100,95,53,50,95,100,114,105,118,101,0);
         chartf += (parseInt(`${chartf}`) * (rewardV ? 2 : 5));
         statsb = `${statsb.length & statsb.length}`;
          let native3: Array<any> = [800, 501];
         rewardV = 46 >= areaa.length && 46 >= native3.length;
          let gradlewr = 3.0;
          let libreactu: Array<any> = [840, 588];
          let modityv: Array<any> = [668, 823];
         rewardV = !rewardV || areaa.length > 25;
         gradlewr -= parseInt(`${gradlewr}`) + 2;
         libreactu.push(modityv.length | 1);
         modityv.push(libreactu.length * 2);
          let libreacte = String.fromCharCode(101,120,112,108,105,99,105,116,95,109,95,52,55,0);
         areaa = `${2 & parseInt(`${chartf}`)}`;
         libreacte += `${libreacte.length / 2}`;
      while (rewardV || areaa.length >= 4) {
         areaa += `${((rewardV ? 4 : 2) << (Math.min(areaa.length, 1)))}`;
         break;
      }
      let bufferR = rewardV ? !rewardV : rewardV;
      do {
         rewardV = areaa == String.fromCharCode(103,0);
         if (bufferR) {
            break;
         }
      } while ((rewardV || 4.92 >= (5.73 + chartf)) && bufferR);
         chartf /= Math.max(2, parseInt(`${chartf}`) + 2);
         areaa += `${(String.fromCharCode(54,0) == areaa ? areaa.length : (rewardV ? 2 : 1))}`;
      hiadH.set(`${becomeW}`, hiadH.size);
   if (3.85 < successt) {
      successt /= Math.max(5, parseFloat(`${3}`));
   }
        }

        const result = await yys_GesturesConst.getUserDetails();

   while (!crossH) {
      becomeW = `${(1 / (Math.max(2, (renewy ? 5 : 4))))}`;
      break;
   }
   let libreactnativeblobW = crossH ? !crossH : crossH;
   do {
      crossH = editK.size < 17;
      if (libreactnativeblobW) {
         break;
      }
   } while (libreactnativeblobW && (!crossH));
        if (result == null) {

   while ((libreactT.length % 3) <= 3 || (3 & libreactT.length) <= 1) {
       let langkeyI = String.fromCharCode(108,105,98,114,97,114,121,95,110,95,56,52,0);
       let langb = 3.0;
       let rewardp = 0.0;
       let backp = 1.0;
       let malaysiaX = 2;
          let hooksM = 3.0;
         langkeyI = `${parseInt(`${langb}`)}`;
         hooksM -= parseFloat(`${1 % (Math.max(6, parseInt(`${hooksM}`)))}`);
      for (let f = 0; f < 2; f++) {
         backp += (String.fromCharCode(83,0) == langkeyI ? langkeyI.length : parseInt(`${langb}`));
      }
      if (3 >= malaysiaX) {
         backp /= Math.max(1, 5);
      }
      let listU = 9240387.0 >= rewardp;
      do {
         rewardp += parseFloat(`${malaysiaX}`);
         if (listU) {
            break;
         }
      } while (listU && ((langkeyI.length * parseInt(`${rewardp}`)) == 3));
         langkeyI = `${parseInt(`${backp}`) - 3}`;
         langb += parseInt(`${rewardp}`);
      let scrollviewH = backp >= 9730948.0;
      do {
          let privilegeX = 5;
          let f_imagel = String.fromCharCode(100,101,115,116,105,110,97,116,105,111,110,95,52,95,57,55,0);
          let stylez = String.fromCharCode(122,95,54,53,95,100,111,99,107,101,114,0);
          let sentryR: Map<any, any> = new Map([[String.fromCharCode(119,95,56,95,113,99,111,109,0),String.fromCharCode(98,95,52,48,95,101,115,115,101,110,99,101,0)], [String.fromCharCode(120,95,51,50,95,99,114,97,122,121,116,105,109,101,0),String.fromCharCode(115,97,102,101,95,117,95,50,51,0)], [String.fromCharCode(112,95,54,55,95,97,100,111,112,116,101,100,0),String.fromCharCode(115,111,117,110,95,119,95,54,55,0)]]);
          let libavfilterx = 2;
         backp += malaysiaX << (Math.min(Math.abs(libavfilterx), 1));
         privilegeX += privilegeX ^ 2;
         f_imagel += `${sentryR.size}`;
         stylez += `${stylez.length}`;
         sentryR.set(f_imagel, f_imagel.length >> (Math.min(Math.abs(2), 5)));
         libavfilterx &= 3 << (Math.min(5, Math.abs(privilegeX)));
         if (scrollviewH) {
            break;
         }
      } while (((backp * rewardp) > 1.88 && (backp * 1.88) > 5.30) && scrollviewH);
      libreactT = "3";
      break;
   }
   while ((dropdownU * hiadH.size) == 5.40 && 5.40 == (dropdownU * hiadH.size)) {
      dropdownU += parseInt(`${handler6}`) * 3;
      break;
   }
            return;
        }

        await dispatch(updateUserAuth(result));

   let renewB = 9008368.0 >= halfo;
   do {
      halfo += parseFloat(`${2}`);
      if (renewB) {
         break;
      }
   } while (((5.56 - halfo) > 2.70) && renewB);
   let yellowK = 6921954.0 <= successt;
   do {
      successt /= Math.max((parseFloat(`${(renewy ? 2 : 3) / (Math.max((crossH ? 4 : 2), 5))}`)), 2);
      if (yellowK) {
         break;
      }
   } while (yellowK && ((zhengpianC + successt) < 2.46 && (2.46 + successt) < 3.7));
        dispatch(changeScreenAction("修改成功"));

      teamh %= Math.max(parseInt(`${dropdownU}`) | 2, 1);
   if (2 > (becomeW.length + parseInt(`${zhengpianC}`))) {
      zhengpianC += parseInt(`${handler6}`);
   }

        Keyboard.dismiss();

   let libjsijniprofilerQ = componentregistrye == String.fromCharCode(57,95,120,50,117,0);
   do {
      componentregistrye += `${parseInt(`${zhengpianC}`) + 2}`;
      if (libjsijniprofilerQ) {
         break;
      }
   } while ((1 < libreactT.length) && libjsijniprofilerQ);
   while (zhengpianC <= halfo) {
      zhengpianC /= Math.max(1, 4);
      break;
   }
        navigation.navigate("Home", {
            screen: "Profile",
        });

      zhengpianC *= parseInt(`${handler6}`);
       let soundX: Array<any> = [357, 118, 391];
          let founds = String.fromCharCode(118,95,48,95,112,114,111,114,101,115,100,115,112,0);
          let playercommon9 = 4.0;
         soundX = [1];
         founds += `${parseInt(`${playercommon9}`) + founds.length}`;
         playercommon9 += parseInt(`${playercommon9}`) + 1;
          let libreanimatedO = 3.0;
         soundX.push(2);
         libreanimatedO += parseFloat(`${1}`);
      if ((3 | soundX.length) < 1) {
         soundX = [soundX.length];
      }
      zhengpianC -= 1 % (Math.max(3, parseInt(`${successt}`)));

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