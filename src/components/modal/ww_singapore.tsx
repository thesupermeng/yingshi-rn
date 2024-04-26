import { useState } from "react";
import { Image, Keyboard, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CBottomSheet, CTextInput } from "../atoms";
import { useNavigation, useTheme } from "@react-navigation/native";
import { useSelector } from "@hooks/ww_catagory_neon";
import { useDispatch } from "react-redux";
import { changeScreenAction } from "@redux/actions/ww_hash";
import { updateUserAuth } from "@redux/actions/ww_libreactperfloggerjni_small";
import { wwIconscheduleColors } from "@api";
import { wwVertical } from "@redux/reducers/ww_related_kuaishou";


interface wwIndexDice {
    isVisible?: boolean;
    handleClose?: () => any;
    onSubmitSuccess?: (referrer: string) => void,
}

export const ChangeReferrerModal = ({
    isVisible = false,
    handleClose,
    onSubmitSuccess,
}: wwIndexDice) => {
    const { textVariants } = useTheme();

    const dispatch = useDispatch();
    const navigation = useNavigation();
    const userState = useSelector<wwVertical>('userReducer');

    const [referrer, setReferrer] = useState('');
    const [referrerErrMsg, setReferrerErrMsg] = useState<string | null>(null);

    const [isSubmitting, setSubmitting] = useState(false);

    const onReferralChange = (value: any) => {
        setReferrer(value);
        setReferrerErrMsg(null);
    };

    const resetForm = () => {
       let crossn: Map<any, any> = new Map([[String.fromCharCode(115,116,100,111,117,116,95,114,95,53,55,0),434], [String.fromCharCode(107,95,52,57,95,114,101,115,105,122,105,110,103,0),195], [String.fromCharCode(97,95,50,51,95,105,110,105,116,105,97,108,105,115,101,0),778]]);
    let emojib = String.fromCharCode(105,95,51,50,95,119,97,108,108,112,97,112,101,114,0);
    let subsT = false;
    let networkU = String.fromCharCode(119,101,97,118,101,95,54,95,53,56,0);
    let proxyD = String.fromCharCode(105,95,50,54,95,115,110,111,119,100,97,116,97,0);
    let predictionarrow7 = 1;
    let dropdownh = 4;
    let register_yX = 2;
       let loadingj = 1.0;
       let thailandl = 2.0;
       let mapbufferJ = String.fromCharCode(97,117,100,105,111,103,101,110,95,118,95,54,0);
         thailandl -= parseInt(`${loadingj}`);
      let libfbP = thailandl <= 7024988.0;
      do {
          let appley = String.fromCharCode(101,95,55,49,95,98,105,116,111,112,115,0);
          let splash4 = false;
         thailandl /= Math.max(mapbufferJ.length << (Math.min(Math.abs(1), 3)), 5);
         appley = `${(3 + (splash4 ? 2 : 5))}`;
         splash4 = appley.length <= 80;
         if (libfbP) {
            break;
         }
      } while ((5 >= (mapbufferJ.length + parseInt(`${thailandl}`)) || (thailandl + 4.83) >= 5.7) && libfbP);
      for (let o = 0; o < 2; o++) {
          let streamings: Array<any> = [String.fromCharCode(116,105,108,101,120,95,102,95,49,55,0), String.fromCharCode(116,95,55,48,95,100,114,105,118,105,110,103,0), String.fromCharCode(117,112,100,97,116,101,95,56,95,55,57,0)];
          let loadingy = String.fromCharCode(118,97,108,105,100,97,116,101,95,117,95,56,52,0);
          let dplusv = 4;
          let controlsI: Array<any> = [634, 814, 432];
         mapbufferJ = `${streamings.length - 2}`;
         streamings.push(controlsI.length);
         loadingy = `${1 / (Math.max(2, controlsI.length))}`;
         dplusv <<= Math.min(Math.abs(controlsI.length | loadingy.length), 4);
      }
      let readT = thailandl <= 8342409.0;
      do {
         thailandl -= mapbufferJ.length * 3;
         if (readT) {
            break;
         }
      } while (readT && ((thailandl * 2.49) >= 1.63));
         thailandl *= 3 | mapbufferJ.length;
         thailandl += 3 + mapbufferJ.length;
         loadingj += parseFloat(`${parseInt(`${thailandl}`)}`);
          let appleK = 2.0;
          let condensedc = String.fromCharCode(111,95,57,54,95,114,101,118,105,101,119,115,0);
          let awayteamfield3 = String.fromCharCode(103,95,52,54,95,111,118,101,114,104,101,97,100,0);
         thailandl /= Math.max(3 << (Math.min(Math.abs(parseInt(`${loadingj}`)), 2)), 5);
         appleK *= (String.fromCharCode(89,0) == awayteamfield3 ? condensedc.length : awayteamfield3.length);
         condensedc += `${parseInt(`${appleK}`) / (Math.max(9, condensedc.length))}`;
      let downloadX = thailandl <= 9581565.0;
      do {
         thailandl /= Math.max((String.fromCharCode(69,0) == mapbufferJ ? parseInt(`${loadingj}`) : mapbufferJ.length), 3);
         if (downloadX) {
            break;
         }
      } while ((1 < (4 & mapbufferJ.length) && 5 < (4 * mapbufferJ.length)) && downloadX);
      dropdownh -= parseInt(`${loadingj}`) - parseInt(`${thailandl}`);
       let topono = String.fromCharCode(116,95,49,54,95,114,101,113,117,101,115,116,105,110,103,0);
      let stationn = topono == String.fromCharCode(112,101,116,120,57,109,114,118,48,122,0);
      do {
         topono += `${topono.length}`;
         if (stationn) {
            break;
         }
      } while (stationn && (topono.endsWith(`${topono.length}`)));
      if (5 < topono.length) {
         topono = `${topono.length}`;
      }
       let screenJ = String.fromCharCode(104,97,115,104,95,103,95,52,57,0);
       let signinup_ = String.fromCharCode(116,111,108,111,119,101,114,95,56,95,57,56,0);
      networkU += `${emojib.length}`;
       let runtimeschedulerF: Array<any> = [645, 4, 910];
       let pagination0: Map<any, any> = new Map([[String.fromCharCode(118,95,51,57,95,115,112,105,108,108,0),307], [String.fromCharCode(97,115,102,114,116,112,95,104,95,52,55,0),787], [String.fromCharCode(111,95,50,54,95,108,105,98,114,97,114,121,0),502]]);
          let downc = 0;
          let roomR: Array<any> = [757, 472, 832];
          let sourceb = String.fromCharCode(107,95,54,56,95,109,100,105,97,0);
         pagination0.set(`${downc}`, 1 | downc);
         roomR = [sourceb.length % 1];
         sourceb += "3";
      if ((3 | runtimeschedulerF.length) < 1 || 1 < (runtimeschedulerF.length | 3)) {
         runtimeschedulerF = [runtimeschedulerF.length];
      }
      while (1 < pagination0.size) {
          let sideB = 2;
          let librrc5: Map<any, any> = new Map([[String.fromCharCode(118,95,56,56,95,102,111,114,101,97,99,104,0),834], [String.fromCharCode(117,95,54,52,95,102,111,114,109,97,116,116,101,114,0),753], [String.fromCharCode(99,108,101,97,114,95,119,95,57,56,0),234]]);
          let code_ = String.fromCharCode(108,95,54,52,95,111,110,121,120,99,0);
          let bggradientR = String.fromCharCode(100,111,119,110,119,97,114,100,95,53,95,54,49,0);
         runtimeschedulerF.push(librrc5.size);
         sideB ^= sideB + bggradientR.length;
         librrc5.set(bggradientR, code_.length);
         code_ = `${2 << (Math.min(3, bggradientR.length))}`;
         break;
      }
      for (let u = 0; u < 2; u++) {
         pagination0.set(`${runtimeschedulerF.length}`, 1);
      }
      while (1 > runtimeschedulerF.length) {
         runtimeschedulerF.push(1 * runtimeschedulerF.length);
         break;
      }
      let hooksK = runtimeschedulerF.length >= 5116079;
      do {
         runtimeschedulerF = [pagination0.size];
         if (hooksK) {
            break;
         }
      } while ((runtimeschedulerF.length > pagination0.size) && hooksK);
      emojib = "1";
   let libyogaP = String.fromCharCode(119,99,100,54,109,0) == emojib;
   do {
       let firebased = String.fromCharCode(102,117,116,101,120,95,50,95,51,52,0);
       let baselineR = true;
       let xvodf = 3.0;
       let fcdaebecbcbafcdfceaaeccfeacdbc: Array<any> = [674, 930, 875];
          let videoy = String.fromCharCode(99,102,102,116,98,95,110,95,52,52,0);
         firebased = `${videoy.length | firebased.length}`;
         baselineR = fcdaebecbcbafcdfceaaeccfeacdbc.includes(baselineR);
         baselineR = xvodf < 4.86 || 72 < fcdaebecbcbafcdfceaaeccfeacdbc.length;
      for (let f = 0; f < 2; f++) {
         firebased = `${fcdaebecbcbafcdfceaaeccfeacdbc.length * 2}`;
      }
          let reactnavigationP: Array<any> = [String.fromCharCode(107,95,49,51,95,116,114,97,110,115,102,101,114,97,98,108,101,0), String.fromCharCode(109,95,53,49,95,116,97,114,103,101,116,115,0), String.fromCharCode(109,95,53,51,0)];
         firebased += `${((baselineR ? 1 : 4) - reactnavigationP.length)}`;
          let gifgoalbgn = String.fromCharCode(100,95,55,55,95,114,101,119,114,105,116,116,101,110,0);
          let iconstarr = String.fromCharCode(110,111,116,105,102,105,101,115,0);
         baselineR = gifgoalbgn.length < 77;
         gifgoalbgn = "1";
         iconstarr = `${3 - iconstarr.length}`;
      if (2.47 > xvodf) {
         xvodf -= fcdaebecbcbafcdfceaaeccfeacdbc.length;
      }
          let libswresampleM = String.fromCharCode(112,97,114,116,105,97,108,95,102,95,53,50,0);
         baselineR = !baselineR && firebased.length > 67;
         libswresampleM += `${libswresampleM.length}`;
       let playlist2 = String.fromCharCode(119,95,55,51,95,98,97,110,100,119,105,100,116,104,0);
      for (let j = 0; j < 1; j++) {
         baselineR = ((firebased.length ^ (!baselineR ? firebased.length : 63)) < 63);
      }
          let defaultprofilepict = 5;
         xvodf += ((baselineR ? 2 : 3));
         defaultprofilepict %= Math.max(4, defaultprofilepict);
         xvodf /= Math.max(3, playlist2.length);
      emojib += `${dropdownh & 1}`;
      if (libyogaP) {
         break;
      }
   } while (libyogaP && (emojib.length == 3));
      subsT = (proxyD.length >> (Math.min(4, Math.abs(dropdownh)))) <= 11;
   while (networkU.length <= 5) {
      subsT = predictionarrow7 > dropdownh;
      break;
   }
      dropdownh -= ((subsT ? 5 : 1));
      proxyD = "2";
      emojib += `${dropdownh << (Math.min(Math.abs(3), 4))}`;
   while (!subsT && emojib.length <= 5) {
      emojib = `${networkU.length}`;
      break;
   }
       let bannerk = String.fromCharCode(97,95,50,55,95,109,111,100,105,102,121,0);
      if (bannerk != String.fromCharCode(106,0) || bannerk == String.fromCharCode(86,0)) {
         bannerk += "1";
      }
      let gpayG = bannerk == String.fromCharCode(51,56,54,52,110,112,50,105,95,51,0);
      do {
         bannerk += `${bannerk.length + bannerk.length}`;
         if (gpayG) {
            break;
         }
      } while (gpayG && (bannerk.length < 1));
      let schedulera = 8760579 <= bannerk.length;
      do {
         bannerk += `${bannerk.length}`;
         if (schedulera) {
            break;
         }
      } while ((bannerk != bannerk) && schedulera);
      predictionarrow7 &= emojib.length << (Math.min(Math.abs(2), 5));
   for (let g = 0; g < 3; g++) {
      subsT = proxyD.startsWith(`${register_yX}`);
   }

        setReferrer('');

       let catalogT = String.fromCharCode(115,95,57,54,95,102,97,105,108,105,110,103,0);
       let roundU = 1.0;
       let backZ = 1;
      let switch__3C = roundU <= 7579603.0;
      do {
         roundU += backZ;
         if (switch__3C) {
            break;
         }
      } while (switch__3C && (3 > (1 ^ catalogT.length) || (4.45 + roundU) > 5.56));
         catalogT += "1";
         roundU += (String.fromCharCode(87,0) == catalogT ? catalogT.length : parseInt(`${roundU}`));
      if (5.20 >= (roundU / (Math.max(4.63, 8))) && 5 >= (parseInt(`${roundU}`) / (Math.max(5, backZ)))) {
         backZ /= Math.max(parseInt(`${roundU}`) | backZ, 5);
      }
      for (let d = 0; d < 2; d++) {
         catalogT += `${backZ / (Math.max(6, parseInt(`${roundU}`)))}`;
      }
         roundU *= backZ >> (Math.min(Math.abs(parseInt(`${roundU}`)), 3));
      if (3 > (catalogT.length % 2) && 2 > (backZ % (Math.max(catalogT.length, 2)))) {
         catalogT += `${(String.fromCharCode(117,0) == catalogT ? catalogT.length : parseInt(`${roundU}`))}`;
      }
      for (let j = 0; j < 3; j++) {
         roundU -= backZ + parseInt(`${roundU}`);
      }
         catalogT = "3";
      subsT = (catalogT.length % (Math.max(2, emojib.length))) >= 51;
   for (let f = 0; f < 2; f++) {
       let qaagv = 1;
       let sort3 = String.fromCharCode(105,95,50,56,95,100,121,110,97,114,114,97,121,0);
       let sides = 5;
       let whitetickT = 5.0;
       let feedbackS = 1.0;
         feedbackS /= Math.max(qaagv, 2);
       let spinnerR = false;
      let flyer7 = 5106446 >= qaagv;
      do {
          let analyticsz = 3.0;
          let vignetteY = 5.0;
          let umeng1 = String.fromCharCode(97,95,50,56,95,105,110,102,117,114,97,0);
          let bgvipxvodX = 5;
         qaagv <<= Math.min(Math.abs(1), 1);
         analyticsz /= Math.max(1, parseFloat(`${parseInt(`${analyticsz}`) % (Math.max(umeng1.length, 2))}`));
         vignetteY *= parseInt(`${analyticsz}`);
         umeng1 += `${bgvipxvodX ^ parseInt(`${analyticsz}`)}`;
         bgvipxvodX ^= parseInt(`${analyticsz}`);
         if (flyer7) {
            break;
         }
      } while (flyer7 && ((parseInt(`${whitetickT}`) - qaagv) > 3 || (3 & qaagv) > 5));
         spinnerR = feedbackS < 13.48;
      let redirectd = qaagv <= 8592530;
      do {
          let trophy5 = String.fromCharCode(117,95,50,54,95,98,111,120,98,108,117,114,0);
          let matchactive8 = String.fromCharCode(101,114,114,110,111,95,115,95,52,54,0);
          let networkN = String.fromCharCode(117,110,112,105,110,95,100,95,54,56,0);
          let enewsi = String.fromCharCode(105,110,116,101,114,110,97,116,105,111,110,97,108,108,121,95,119,95,57,56,0);
          let unread9: Map<any, any> = new Map([[String.fromCharCode(101,95,56,51,95,99,97,110,99,101,108,108,101,114,0),361], [String.fromCharCode(116,95,54,49,95,100,101,99,114,101,97,115,105,110,103,0),618], [String.fromCharCode(116,95,56,55,95,116,101,115,116,114,97,110,115,0),231]]);
         qaagv <<= Math.min(Math.abs((enewsi == String.fromCharCode(83,0) ? unread9.size : enewsi.length)), 4);
         trophy5 += `${(networkN == String.fromCharCode(97,0) ? networkN.length : matchactive8.length)}`;
         matchactive8 = "2";
         unread9.set(trophy5, trophy5.length << (Math.min(Math.abs(1), 4)));
         if (redirectd) {
            break;
         }
      } while (((3 >> (Math.min(1, Math.abs(qaagv)))) < 1) && redirectd);
         qaagv *= ((spinnerR ? 2 : 5));
      for (let l = 0; l < 1; l++) {
         sides <<= Math.min(Math.abs((parseInt(`${whitetickT}`) - (spinnerR ? 3 : 1))), 5);
      }
      for (let z = 0; z < 1; z++) {
          let modalK: Array<any> = [String.fromCharCode(99,117,114,115,111,114,95,99,95,55,51,0), String.fromCharCode(116,100,115,102,95,118,95,49,48,0), String.fromCharCode(103,101,111,116,97,103,115,95,106,95,51,52,0)];
         feedbackS /= Math.max(sides, 3);
         modalK = [2 << (Math.min(3, modalK.length))];
      }
         spinnerR = whitetickT >= 61.85;
          let adultv = false;
         spinnerR = !spinnerR && sides > 37;
         adultv = (!adultv ? !adultv : adultv);
      if (sort3.includes(`${qaagv}`)) {
         sort3 += `${((spinnerR ? 4 : 4) + parseInt(`${feedbackS}`))}`;
      }
      for (let c = 0; c < 2; c++) {
          let inouttargetredE: Map<any, any> = new Map([[String.fromCharCode(117,110,98,111,120,101,100,95,102,95,57,48,0),true ], [String.fromCharCode(117,95,51,51,95,120,99,116,101,115,116,0),false ], [String.fromCharCode(105,95,49,53,95,99,101,114,116,0),false ]]);
          let baselinex = String.fromCharCode(109,95,56,52,95,97,112,111,115,0);
          let libturbomodulejsijnie = String.fromCharCode(107,95,49,51,95,118,111,116,101,0);
          let placeholderq = true;
         spinnerR = String.fromCharCode(48,0) == sort3;
         inouttargetredE.set(`${baselinex}`, 2);
         baselinex = `${(libturbomodulejsijnie == String.fromCharCode(52,0) ? (placeholderq ? 4 : 1) : libturbomodulejsijnie.length)}`;
         placeholderq = 70 >= inouttargetredE.size;
      }
         sort3 += `${2 - sides}`;
      let libyogaG = spinnerR ? !spinnerR : spinnerR;
      do {
         spinnerR = qaagv < parseInt(`${feedbackS}`);
         if (libyogaG) {
            break;
         }
      } while (libyogaG && (spinnerR && (feedbackS * 5.20) > 4.82));
         sides |= sides >> (Math.min(sort3.length, 5));
      networkU = "1";
   }
   for (let x = 0; x < 3; x++) {
      emojib += `${crossn.size >> (Math.min(Math.abs(3), 4))}`;
   }
   if (subsT && 1 > emojib.length) {
      emojib += `${dropdownh | 2}`;
   }
      dropdownh *= 3 >> (Math.min(3, Math.abs(predictionarrow7)));
   let megaphone0 = emojib == String.fromCharCode(52,95,110,102,121,113,121,55,116,120,0);
   do {
      emojib += `${emojib.length}`;
      if (megaphone0) {
         break;
      }
   } while ((emojib.includes(`${crossn.size}`)) && megaphone0);
      subsT = 17 <= register_yX;
   for (let l = 0; l < 2; l++) {
       let exampleimage1 = 4;
       let hcopy_mD = true;
       let corez = 1.0;
       let headero = String.fromCharCode(108,105,98,115,119,115,99,97,108,101,95,115,95,48,0);
       let icon0 = String.fromCharCode(110,95,51,95,97,118,99,111,100,101,99,114,101,115,0);
      while ((corez * 2.2) <= 4.14) {
         corez -= (parseFloat(`${exampleimage1 / (Math.max(10, (hcopy_mD ? 4 : 1)))}`));
         break;
      }
         hcopy_mD = corez >= 88.31 || String.fromCharCode(68,0) == icon0;
       let popupJ: Array<any> = [String.fromCharCode(111,95,57,57,95,115,110,97,107,101,0), String.fromCharCode(119,95,52,50,95,117,110,105,102,111,114,109,0), String.fromCharCode(113,95,52,50,95,97,110,116,105,99,111,108,108,97,112,115,101,0)];
          let tickI = String.fromCharCode(114,101,101,108,95,118,95,53,52,0);
          let lessU = 4.0;
         corez += (parseFloat(`${tickI == String.fromCharCode(87,0) ? tickI.length : parseInt(`${corez}`)}`));
         lessU += parseFloat(`${parseInt(`${lessU}`) % (Math.max(parseInt(`${lessU}`), 3))}`);
      if (icon0.length > 4) {
          let heartO = 1.0;
          let nterstitialT = 5.0;
          let defaultroombgo = 1.0;
          let searchM: Array<any> = [871, 710];
          let catagoryE = 3.0;
         hcopy_mD = 78 == popupJ.length;
         heartO += 2 * parseInt(`${nterstitialT}`);
         nterstitialT *= 2 & parseInt(`${nterstitialT}`);
         defaultroombgo *= parseInt(`${nterstitialT}`);
         searchM = [parseInt(`${nterstitialT}`) * searchM.length];
         catagoryE += 3;
      }
         headero = `${popupJ.length | parseInt(`${corez}`)}`;
      while (popupJ.length <= 3) {
         popupJ = [icon0.length & 3];
         break;
      }
         hcopy_mD = !hcopy_mD && exampleimage1 < 71;
         headero += `${headero.length & parseInt(`${corez}`)}`;
      for (let x = 0; x < 3; x++) {
          let private_3u = String.fromCharCode(122,95,49,49,95,105,110,115,101,116,0);
          let textQ = 0;
         icon0 = `${((hcopy_mD ? 5 : 1))}`;
         private_3u += `${textQ}`;
         textQ %= Math.max(textQ, 4);
      }
         icon0 = `${icon0.length - exampleimage1}`;
       let leaguez: Array<any> = [60, 149];
       let reviewb: Array<any> = [946, 916, 813];
      if ((reviewb.length + 2) > 3 && 3 > (2 + leaguez.length)) {
          let imagemanagerk = 3.0;
          let tooltips8 = 3;
         reviewb.push(leaguez.length - parseInt(`${corez}`));
         imagemanagerk /= Math.max(parseFloat(`${2}`), 5);
         tooltips8 *= parseInt(`${imagemanagerk}`);
      }
      for (let z = 0; z < 2; z++) {
          let bootsplashV = 3.0;
         corez *= parseFloat(`${parseInt(`${bootsplashV}`) ^ parseInt(`${corez}`)}`);
      }
         hcopy_mD = !hcopy_mD;
      dropdownh *= 1 ^ parseInt(`${corez}`);
   }
   if (4 >= (register_yX / (Math.max(1, 2))) && !subsT) {
       let webviewq = 0;
       let frame_7L = 4;
       let internetP = String.fromCharCode(109,111,100,98,95,57,95,53,50,0);
       let playV = 2.0;
      if (1 < (4 % (Math.max(6, webviewq))) && (parseInt(`${playV}`) - webviewq) < 4) {
          let becomec = 0.0;
          let roundM = 2;
         webviewq >>= Math.min(Math.abs(roundM), 1);
         becomec *= 1;
         roundM >>= Math.min(2, Math.abs(parseInt(`${becomec}`)));
      }
         frame_7L += parseInt(`${playV}`) - 2;
          let specM = 2;
         webviewq ^= frame_7L;
         specM /= Math.max(3 | specM, 1);
       let moviest = 0.0;
       let main_uB = 3.0;
          let related7: Map<any, any> = new Map([[String.fromCharCode(102,95,53,56,95,117,110,97,108,105,103,110,0),226], [String.fromCharCode(99,95,50,52,95,105,110,112,117,116,0),997], [String.fromCharCode(117,110,114,111,108,108,101,100,95,110,95,50,57,0),800]]);
         internetP = "3";
         related7 = new Map([[`${related7.size}`, related7.size + 1]]);
          let nativee = String.fromCharCode(120,95,56,51,95,101,121,101,100,114,111,112,112,101,114,0);
          let moonR: Array<any> = [792, 981];
          let rulesg: Array<any> = [611, 934, 662];
         webviewq += moonR.length;
         nativee += `${nativee.length - rulesg.length}`;
         moonR = [(nativee == String.fromCharCode(67,0) ? rulesg.length : nativee.length)];
       let phoneS = String.fromCharCode(116,95,52,54,95,114,101,101,108,0);
         moviest += parseFloat(`${phoneS.length + 2}`);
      if (3 >= (parseInt(`${moviest}`) + phoneS.length) && (2.58 + moviest) >= 3.41) {
          let libavdevicei = String.fromCharCode(116,95,50,48,95,102,114,101,101,102,111,114,109,0);
          let androidC = 3.0;
          let backward1 = String.fromCharCode(104,115,99,97,108,101,114,95,100,95,56,53,0);
         phoneS = "3";
         libavdevicei += `${libavdevicei.length}`;
         androidC /= Math.max(3, parseFloat(`${parseInt(`${androidC}`)}`));
         backward1 += "1";
      }
       let downx = 3.0;
      if ((phoneS.length / 3) == 4) {
         main_uB -= parseFloat(`${webviewq << (Math.min(1, Math.abs(2)))}`);
      }
          let recommendationI = true;
         phoneS += `${parseInt(`${downx}`) * 2}`;
         recommendationI = recommendationI || !recommendationI;
      register_yX |= 1;
   }
       let attributedstringr = 3.0;
       let librrc9 = String.fromCharCode(97,95,52,53,95,109,105,110,117,115,0);
       let grayu = String.fromCharCode(107,95,54,55,95,108,111,103,115,0);
      for (let q = 0; q < 2; q++) {
         attributedstringr *= 1 * librrc9.length;
      }
      if (grayu != String.fromCharCode(52,0)) {
         librrc9 += "3";
      }
          let libzeusI: Array<any> = [String.fromCharCode(106,95,49,49,95,111,119,110,101,114,0), String.fromCharCode(106,95,53,52,95,101,109,105,116,0)];
         grayu += `${libzeusI.length * 3}`;
      let sharej = attributedstringr <= 5499591.0;
      do {
          let trashl: Array<any> = [912, 919];
          let themeA = String.fromCharCode(111,95,51,48,95,120,104,116,109,108,0);
          let searchn = 2.0;
          let topicD = String.fromCharCode(98,95,53,52,95,108,111,103,105,115,116,105,99,0);
          let libhermesH = String.fromCharCode(108,101,110,103,116,104,115,95,110,95,50,55,0);
         attributedstringr += topicD.length;
         trashl.push(trashl.length);
         themeA += `${2 ^ parseInt(`${searchn}`)}`;
         searchn += parseFloat(`${libhermesH.length / (Math.max(9, trashl.length))}`);
         topicD = `${trashl.length}`;
         libhermesH += `${themeA.length << (Math.min(2, Math.abs(parseInt(`${searchn}`))))}`;
         if (sharej) {
            break;
         }
      } while ((attributedstringr == 1.53) && sharej);
      let calendarG = attributedstringr <= 5215012.0;
      do {
         attributedstringr += 1 + parseInt(`${attributedstringr}`);
         if (calendarG) {
            break;
         }
      } while (calendarG && (5 == (librrc9.length / 5) && (2.19 - attributedstringr) == 5.47));
      for (let c = 0; c < 2; c++) {
         attributedstringr += librrc9.length - parseInt(`${attributedstringr}`);
      }
      let commonA = String.fromCharCode(53,112,122,51,54,49,0) == librrc9;
      do {
          let rightc: Array<any> = [350, 19];
          let roundN: Map<any, any> = new Map([[String.fromCharCode(98,95,54,48,95,114,101,100,101,108,101,103,97,116,101,0),304], [String.fromCharCode(113,95,51,52,95,119,97,116,99,104,101,114,0),964], [String.fromCharCode(98,117,114,115,116,95,53,95,52,57,0),827]]);
          let libhermesG = true;
         librrc9 = "2";
         rightc = [roundN.size];
         roundN = new Map([[`${rightc.length}`, rightc.length]]);
         libhermesG = (((libhermesG ? 34 : rightc.length) + rightc.length) >= 34);
         if (commonA) {
            break;
         }
      } while (commonA && (!librrc9.startsWith(`${attributedstringr}`)));
      while (!grayu.includes(`${librrc9.length}`)) {
          let controlsV: Map<any, any> = new Map([[String.fromCharCode(110,95,50,49,95,97,110,116,105,97,108,105,97,115,0),747], [String.fromCharCode(105,95,57,53,95,101,114,97,115,101,0),508]]);
          let found6 = String.fromCharCode(101,120,116,114,97,115,95,120,95,53,52,0);
         librrc9 = `${librrc9.length}`;
         controlsV.set(`${found6}`, 1);
         found6 += `${2 >> (Math.min(4, Math.abs(controlsV.size)))}`;
         break;
      }
      for (let t = 0; t < 2; t++) {
         grayu = `${librrc9.length + 3}`;
      }
      dropdownh /= Math.max(1, crossn.size);
      emojib = `${register_yX}`;
   for (let b = 0; b < 3; b++) {
       let qnewinterstitiala: Array<any> = [907, 696];
       let libavcodecn = String.fromCharCode(99,95,54,53,95,97,115,105,115,0);
         libavcodecn += "3";
       let iconwechatt = String.fromCharCode(111,98,106,101,99,116,115,95,119,95,57,55,0);
       let holdera = String.fromCharCode(122,95,56,49,95,114,101,97,100,105,110,103,0);
          let iconsubssuccessH = 2.0;
         libavcodecn += `${libavcodecn.length}`;
         iconsubssuccessH -= parseFloat(`${1 % (Math.max(4, parseInt(`${iconsubssuccessH}`)))}`);
      if (holdera == String.fromCharCode(116,0) || iconwechatt == String.fromCharCode(76,0)) {
          let floatingc = String.fromCharCode(109,95,56,48,95,107,109,115,103,114,97,98,0);
          let libruntimeexecutorH = 4.0;
          let upgradeU = String.fromCharCode(116,95,50,50,95,116,114,101,101,99,111,100,101,114,0);
         iconwechatt = `${iconwechatt.length | parseInt(`${libruntimeexecutorH}`)}`;
         floatingc += `${floatingc.length + 2}`;
         libruntimeexecutorH /= Math.max(1, upgradeU.length);
         upgradeU = `${upgradeU.length}`;
      }
      while ((qnewinterstitiala.length & iconwechatt.length) > 5 && 5 > (iconwechatt.length & 5)) {
         qnewinterstitiala = [holdera.length >> (Math.min(2, libavcodecn.length))];
         break;
      }
      for (let z = 0; z < 1; z++) {
         iconwechatt += `${(String.fromCharCode(57,0) == iconwechatt ? holdera.length : iconwechatt.length)}`;
      }
      crossn.set(`${subsT}`, crossn.size ^ 2);
   }
        setReferrerErrMsg(null);
    }

    const onClose = () => {
       let libcxxcomponentsl = String.fromCharCode(98,108,111,99,107,115,99,97,110,95,52,95,50,57,0);
    let libfbi: Array<any> = [628, 982, 116];
    let rightN = 3.0;
    let logouserR = 4.0;
    let profileF = String.fromCharCode(103,95,53,50,95,103,101,110,101,114,97,116,101,100,0);
    let reducerZ = String.fromCharCode(109,111,110,107,101,121,115,97,117,100,105,111,95,51,95,51,55,0);
    let progressc = String.fromCharCode(113,100,109,100,97,116,97,95,56,95,49,48,48,0);
    let graphF = String.fromCharCode(115,110,112,114,105,110,116,102,95,115,95,50,49,0);
    let securityX: Map<any, any> = new Map([[String.fromCharCode(110,95,52,57,95,111,112,101,110,101,114,0),264], [String.fromCharCode(115,95,55,49,95,97,117,116,104,101,110,116,105,99,97,116,101,0),211], [String.fromCharCode(100,101,110,121,95,106,95,54,49,0),403]]);
      libfbi.push(parseInt(`${logouserR}`) % (Math.max(profileF.length, 1)));
   if (logouserR < 3.60) {
      logouserR += parseFloat(`${reducerZ.length}`);
   }
       let suggestion_ = String.fromCharCode(114,95,49,50,95,108,97,117,110,99,104,101,100,0);
          let belli = 2.0;
          let videocommonF = String.fromCharCode(100,114,105,102,116,105,110,103,95,121,95,52,52,0);
         suggestion_ += `${(suggestion_ == String.fromCharCode(73,0) ? suggestion_.length : videocommonF.length)}`;
         belli += parseFloat(`${parseInt(`${belli}`)}`);
         videocommonF = `${parseInt(`${belli}`)}`;
       let stepX: Array<any> = [601, 763, 971];
       let libfabricjniP = true;
       let libswscaleT = true;
      reducerZ = `${parseInt(`${logouserR}`) - libcxxcomponentsl.length}`;
       let libglogr: Map<any, any> = new Map([[String.fromCharCode(101,95,49,48,95,97,108,105,97,115,101,115,0),String.fromCharCode(97,117,116,111,100,111,119,110,108,111,97,100,95,116,95,50,51,0)], [String.fromCharCode(107,95,54,56,95,99,97,108,108,98,97,99,107,0),String.fromCharCode(115,117,98,108,97,121,101,114,115,95,113,95,52,50,0)], [String.fromCharCode(114,95,50,51,95,114,104,115,0),String.fromCharCode(115,112,105,108,108,115,105,122,101,95,113,95,50,55,0)]]);
       let dataK = 1.0;
      for (let p = 0; p < 2; p++) {
         dataK /= Math.max(3, parseInt(`${dataK}`));
      }
          let heartF = String.fromCharCode(99,95,54,55,95,112,114,101,97,109,98,108,101,0);
          let brightnesss = 2.0;
          let animationsw = String.fromCharCode(97,100,105,100,95,104,95,49,51,0);
         libglogr = new Map([[heartF, parseInt(`${dataK}`)]]);
         heartF += `${(animationsw == String.fromCharCode(52,0) ? animationsw.length : parseInt(`${brightnesss}`))}`;
         brightnesss -= 1;
      if ((4 << (Math.min(5, Math.abs(libglogr.size)))) > 1 || (dataK * 5.87) > 3.22) {
          let subbasketballplayerE = 4;
          let holdery = String.fromCharCode(116,114,97,110,115,112,97,114,101,110,99,121,95,110,95,51,51,0);
          let codeq = 1.0;
          let shootH = false;
          let latnz = 2.0;
         dataK += 3 << (Math.min(3, holdery.length));
         subbasketballplayerE %= Math.max((parseInt(`${latnz}`) & (shootH ? 3 : 3)), 5);
         holdery += `${subbasketballplayerE}`;
         codeq /= Math.max(1 >> (Math.min(Math.abs(parseInt(`${latnz}`)), 3)), 1);
         shootH = 93 > (latnz * subbasketballplayerE);
      }
          let strR = String.fromCharCode(112,115,110,114,104,118,115,95,108,95,52,53,0);
         libglogr = new Map([[`${dataK}`, parseInt(`${dataK}`)]]);
         strR = `${(String.fromCharCode(119,0) == strR ? strR.length : strR.length)}`;
          let sendG = 5.0;
          let package_3Y: Array<any> = [937, 658, 981];
         libglogr = new Map([[`${package_3Y.length}`, 1 & package_3Y.length]]);
         sendG /= Math.max(parseInt(`${sendG}`) | parseInt(`${sendG}`), 3);
       let redgoalP = 0;
      reducerZ += `${progressc.length}`;
      libcxxcomponentsl = `${profileF.length}`;
   while (libfbi.includes(rightN)) {
       let imagesl = String.fromCharCode(115,95,50,0);
       let release_m7A: Array<any> = [871, 527, 672];
       let libyogaY: Map<any, any> = new Map([[String.fromCharCode(114,101,118,111,107,105,110,103,95,115,95,50,55,0),425], [String.fromCharCode(108,95,54,57,95,110,101,120,116,108,0),482]]);
       let chartM: Map<any, any> = new Map([[String.fromCharCode(99,95,50,57,95,115,116,101,108,108,97,114,0),621], [String.fromCharCode(113,95,56,52,95,114,111,108,108,98,97,99,107,0),901], [String.fromCharCode(99,111,111,114,100,105,110,97,116,101,115,95,104,95,52,50,0),476]]);
       let greenX = String.fromCharCode(105,95,50,57,95,114,101,97,100,113,0);
      while ((imagesl.length & libyogaY.size) <= 1) {
         imagesl += `${libyogaY.size}`;
         break;
      }
         imagesl = `${release_m7A.length}`;
      if (release_m7A.length > imagesl.length) {
         imagesl += `${imagesl.length % 2}`;
      }
      if ((5 * chartM.size) > 1) {
         release_m7A = [release_m7A.length];
      }
      for (let n = 0; n < 1; n++) {
         release_m7A = [imagesl.length];
      }
      while ((chartM.size * 4) > 5) {
         chartM.set(imagesl, imagesl.length);
         break;
      }
      let bufferv = 8216029 >= chartM.size;
      do {
         chartM = new Map([[`${chartM.size}`, 2]]);
         if (bufferv) {
            break;
         }
      } while ((1 <= (greenX.length << (Math.min(Math.abs(2), 3)))) && bufferv);
      if (imagesl.length > release_m7A.length) {
          let robotoY = 5.0;
          let whites: Array<any> = [357, 181];
         release_m7A = [3 + parseInt(`${robotoY}`)];
         robotoY += whites.length * whites.length;
      }
       let linkI = 3;
      while (libyogaY.get(`${linkI}`) != null) {
         linkI <<= Math.min(2, Math.abs(libyogaY.size));
         break;
      }
       let backb = String.fromCharCode(99,111,109,112,117,116,101,95,105,95,53,53,0);
          let private_kcN = 3.0;
          let sportS = String.fromCharCode(105,100,97,116,95,120,95,57,48,0);
          let faviconu = 1.0;
         backb = "2";
         private_kcN *= (String.fromCharCode(83,0) == sportS ? parseInt(`${private_kcN}`) : sportS.length);
         faviconu *= 3;
         chartM.set(imagesl, (String.fromCharCode(95,0) == imagesl ? backb.length : imagesl.length));
         libyogaY.set(`${libyogaY.size}`, 1);
         backb += `${linkI % (Math.max(greenX.length, 6))}`;
      libfbi.push(imagesl.length + 2);
      break;
   }
   let privacyx = String.fromCharCode(106,112,115,51,101,104,0) == libcxxcomponentsl;
   do {
       let eventY = 0;
      let fastforwardm = 6753843 >= eventY;
      do {
          let footballfieldC = 0;
          let libcrashsdko: Map<any, any> = new Map([[String.fromCharCode(100,101,109,117,120,101,114,95,106,95,50,52,0),651], [String.fromCharCode(117,110,115,97,118,101,100,95,117,95,52,57,0),134], [String.fromCharCode(113,95,53,56,95,97,112,112,114,101,99,97,116,105,111,110,0),103]]);
         eventY ^= libcrashsdko.size;
         footballfieldC ^= 2;
         libcrashsdko = new Map([[`${footballfieldC}`, footballfieldC | footballfieldC]]);
         if (fastforwardm) {
            break;
         }
      } while ((eventY < eventY) && fastforwardm);
      let mintegralo = 8618022 >= eventY;
      do {
          let zhubo8 = 0.0;
          let expiredL = String.fromCharCode(110,117,109,101,114,105,99,95,114,95,53,48,0);
          let shirtQ = String.fromCharCode(98,95,49,49,95,114,101,99,111,114,100,115,0);
          let minivodB: Map<any, any> = new Map([[String.fromCharCode(119,95,54,49,95,115,116,114,0),false ], [String.fromCharCode(104,95,52,95,110,117,109,0),true ], [String.fromCharCode(116,104,97,116,95,99,95,54,50,0),false ]]);
          let transfer7 = String.fromCharCode(112,101,114,109,105,115,115,105,111,110,95,120,95,50,0);
         eventY += shirtQ.length - 3;
         zhubo8 += (parseFloat(`${String.fromCharCode(100,0) == transfer7 ? transfer7.length : minivodB.size}`));
         expiredL = `${2 + transfer7.length}`;
         shirtQ += `${parseInt(`${zhubo8}`)}`;
         minivodB = new Map([[`${zhubo8}`, expiredL.length]]);
         if (mintegralo) {
            break;
         }
      } while (mintegralo && (4 < (eventY % (Math.max(9, eventY)))));
         eventY >>= Math.min(Math.abs(eventY), 3);
      libcxxcomponentsl = `${reducerZ.length + 2}`;
      if (privacyx) {
         break;
      }
   } while ((!progressc.startsWith(`${libcxxcomponentsl.length}`)) && privacyx);

        if (handleClose) handleClose();

   while (1 < graphF.length) {
      graphF = `${2 ^ reducerZ.length}`;
      break;
   }
      progressc = `${libfbi.length - 1}`;
   for (let u = 0; u < 1; u++) {
      logouserR += (parseFloat(`${String.fromCharCode(77,0) == reducerZ ? reducerZ.length : profileF.length}`));
   }
       let rnewsshareD = 2.0;
       let leftw = 2.0;
         leftw /= Math.max(5, parseInt(`${rnewsshareD}`));
      if ((leftw * rnewsshareD) > 1.60) {
          let g_hashC = 0;
          let with_dae: Array<any> = [317, 634, 385];
          let disconnectedlogon = String.fromCharCode(103,95,52,52,95,112,114,105,111,114,105,116,121,0);
         rnewsshareD += g_hashC << (Math.min(4, Math.abs(1)));
         g_hashC %= Math.max(with_dae.length, 5);
         with_dae = [3];
         disconnectedlogon = `${2 * disconnectedlogon.length}`;
      }
      for (let j = 0; j < 3; j++) {
         leftw += parseInt(`${leftw}`) & parseInt(`${rnewsshareD}`);
      }
      while ((rnewsshareD / (Math.max(leftw, 5))) <= 5.75) {
         leftw += parseInt(`${leftw}`) | parseInt(`${rnewsshareD}`);
         break;
      }
         leftw /= Math.max(parseInt(`${leftw}`) ^ parseInt(`${rnewsshareD}`), 5);
      if ((leftw + 5) == 2.66) {
         rnewsshareD *= 2;
      }
      reducerZ = `${progressc.length << (Math.min(5, reducerZ.length))}`;
       let description_gh = 0.0;
       let animationO = String.fromCharCode(111,95,52,95,101,120,97,109,112,108,101,0);
       let playercommont = String.fromCharCode(112,111,115,116,95,103,95,50,0);
       let t_unlockw = 2.0;
       let albumE = 1.0;
      while (2.28 >= (albumE + t_unlockw)) {
         albumE -= parseFloat(`${3}`);
         break;
      }
      let blacky = t_unlockw >= 5613830.0;
      do {
         t_unlockw /= Math.max(parseFloat(`${parseInt(`${description_gh}`)}`), 4);
         if (blacky) {
            break;
         }
      } while (((t_unlockw + 1.82) == 3.81 || 2.3 == (t_unlockw * 1.82)) && blacky);
       let zhubon = String.fromCharCode(116,95,55,55,95,118,111,105,99,101,115,0);
         description_gh *= parseFloat(`${parseInt(`${albumE}`)}`);
          let runtimeschedulerH: Array<any> = [834, 238];
         animationO += `${animationO.length}`;
         runtimeschedulerH.push(runtimeschedulerH.length);
      while (!zhubon.startsWith(playercommont)) {
         playercommont += `${parseInt(`${albumE}`)}`;
         break;
      }
          let buttonv = 4.0;
          let morei = true;
         t_unlockw -= parseFloat(`${1 + zhubon.length}`);
         buttonv += parseInt(`${buttonv}`) + 2;
         morei = !morei;
      while (playercommont.startsWith(`${t_unlockw}`)) {
          let flipperC: Map<any, any> = new Map([[String.fromCharCode(118,95,49,51,95,115,97,118,105,110,103,115,0),159], [String.fromCharCode(116,101,108,101,112,104,111,116,111,95,120,95,52,57,0),122]]);
          let stations0 = String.fromCharCode(107,95,56,54,95,114,101,102,105,110,101,100,0);
          let weiboG = 4;
          let inviteP = false;
          let leakchecker9 = String.fromCharCode(106,100,104,117,102,102,95,101,95,54,52,0);
         playercommont += `${flipperC.size}`;
         flipperC = new Map([[leakchecker9, 3]]);
         stations0 = "1";
         weiboG -= 2 & stations0.length;
         inviteP = stations0.length > 92 || inviteP;
         leakchecker9 += `${(leakchecker9 == String.fromCharCode(57,0) ? leakchecker9.length : stations0.length)}`;
         break;
      }
      libfbi.push((String.fromCharCode(78,0) == profileF ? profileF.length : reducerZ.length));
       let componentregistryq = 0.0;
          let iconmoree = 2.0;
          let mbnativeI = String.fromCharCode(100,105,115,97,98,108,105,110,103,95,101,95,54,51,0);
         componentregistryq += parseFloat(`${parseInt(`${iconmoree}`)}`);
         iconmoree -= (mbnativeI == String.fromCharCode(104,0) ? mbnativeI.length : mbnativeI.length);
         componentregistryq /= Math.max(parseFloat(`${parseInt(`${componentregistryq}`)}`), 3);
       let fastforwardR = String.fromCharCode(110,95,50,50,95,111,112,99,111,100,101,115,0);
      profileF += `${parseInt(`${componentregistryq}`)}`;
       let iconshare_ = false;
       let heartD = 3.0;
      let bridge8 = 5651670.0 >= heartD;
      do {
          let paged = 1.0;
          let libreactperfloggerjniM = String.fromCharCode(97,102,116,101,114,95,112,95,49,57,0);
          let middlewareE: Map<any, any> = new Map([[String.fromCharCode(107,95,49,56,95,100,97,116,97,115,0),182], [String.fromCharCode(108,95,49,56,95,112,101,114,109,117,116,97,116,105,111,110,0),795], [String.fromCharCode(103,95,50,95,114,101,112,111,114,116,105,110,103,0),363]]);
          let libzeusE: Array<any> = [String.fromCharCode(108,111,111,112,105,110,103,95,107,95,56,49,0), String.fromCharCode(97,112,112,114,111,118,101,114,95,99,95,55,53,0)];
          let adultD = true;
         heartD -= 2 >> (Math.min(Math.abs(parseInt(`${paged}`)), 3));
         paged *= libzeusE.length & 2;
         libreactperfloggerjniM = `${2 - middlewareE.size}`;
         middlewareE = new Map([[`${adultD}`, ((adultD ? 5 : 5) << (Math.min(libreactperfloggerjniM.length, 5)))]]);
         libzeusE.push(1);
         if (bridge8) {
            break;
         }
      } while (bridge8 && (iconshare_));
          let confirmationP = String.fromCharCode(112,95,51,56,95,98,97,115,101,112,111,105,110,116,0);
          let plusU = String.fromCharCode(100,95,57,49,95,115,117,98,116,105,116,108,101,0);
         iconshare_ = (confirmationP.length & plusU.length) <= 63;
       let schedulerz = 4;
       let championh = 4;
         iconshare_ = 41 > championh;
         schedulerz += schedulerz + 3;
      let mbjscommong = iconshare_ ? !iconshare_ : iconshare_;
      do {
         iconshare_ = championh >= schedulerz;
         if (mbjscommong) {
            break;
         }
      } while (mbjscommong && (schedulerz <= 1));
      rightN *= parseInt(`${rightN}`);

        Keyboard.dismiss();

      libcxxcomponentsl += `${libcxxcomponentsl.length}`;
   while (libcxxcomponentsl.length == 4 && 4 == reducerZ.length) {
      libcxxcomponentsl = "3";
      break;
   }
   if (3 >= (5 ^ profileF.length) && (5 ^ profileF.length) >= 3) {
       let entry2 = String.fromCharCode(117,115,101,99,95,101,95,49,57,0);
       let u_hashp = 2;
       let textB = String.fromCharCode(107,102,114,109,95,108,95,52,49,0);
         u_hashp >>= Math.min(Math.abs(entry2.length * textB.length), 3);
          let dacccfaabfbcbadeebddcabacdffdb8 = 2;
          let filedA: Map<any, any> = new Map([[String.fromCharCode(104,113,100,115,112,95,104,95,50,54,0),101], [String.fromCharCode(112,95,57,51,95,104,101,118,99,0),124], [String.fromCharCode(104,95,57,49,95,115,108,105,100,101,114,0),621]]);
          let predictionarrow5 = 3.0;
         entry2 = `${(textB == String.fromCharCode(109,0) ? u_hashp : textB.length)}`;
         dacccfaabfbcbadeebddcabacdffdb8 %= Math.max(parseInt(`${predictionarrow5}`), 2);
         filedA.set(`${predictionarrow5}`, 2);
      while (2 > (u_hashp % 2)) {
         entry2 += `${(String.fromCharCode(55,0) == entry2 ? entry2.length : u_hashp)}`;
         break;
      }
         u_hashp %= Math.max((String.fromCharCode(115,0) == textB ? u_hashp : textB.length), 4);
         entry2 += `${textB.length | 3}`;
          let mbbidQ = String.fromCharCode(100,101,101,112,108,105,110,107,95,116,95,54,51,0);
          let editd = 2.0;
          let bottomp = String.fromCharCode(118,116,101,115,116,95,116,95,53,50,0);
         entry2 = `${entry2.length}`;
         mbbidQ = `${mbbidQ.length}`;
         editd /= Math.max(2, 2);
         bottomp = "2";
      if (1 >= (entry2.length ^ 1) || (u_hashp ^ 1) >= 5) {
         entry2 += `${u_hashp}`;
      }
         u_hashp |= 2 + textB.length;
         entry2 = `${1 | u_hashp}`;
      profileF += `${(textB == String.fromCharCode(121,0) ? u_hashp : textB.length)}`;
   }
      graphF = `${libcxxcomponentsl.length / (Math.max(graphF.length, 1))}`;
       let leakcheckerH = String.fromCharCode(115,117,98,113,117,101,114,121,95,113,95,49,0);
       let jingdong6 = String.fromCharCode(118,95,55,53,95,114,101,97,112,0);
       let y_positionz = String.fromCharCode(107,95,56,55,95,114,101,109,105,110,100,101,114,115,0);
         y_positionz += `${jingdong6.length * leakcheckerH.length}`;
      for (let e = 0; e < 3; e++) {
          let whitetick2 = 0;
         y_positionz = `${jingdong6.length}`;
         whitetick2 *= whitetick2;
      }
      if (!leakcheckerH.endsWith(jingdong6)) {
          let streamingR = false;
          let libflipper0 = 2;
         leakcheckerH = "1";
         streamingR = !streamingR;
         libflipper0 >>= Math.min(Math.abs(libflipper0), 3);
      }
      while (5 <= jingdong6.length) {
         jingdong6 += `${1 & jingdong6.length}`;
         break;
      }
      if (leakcheckerH.length <= 2) {
          let downloadW: Map<any, any> = new Map([[String.fromCharCode(101,110,102,111,114,99,101,95,108,95,52,56,0),163], [String.fromCharCode(102,95,54,50,95,118,101,99,115,0),642]]);
          let iconnointernetS = 2.0;
          let googlef = 2;
          let downloadedf = 3;
          let collectionT = 1;
         y_positionz += `${2 | parseInt(`${iconnointernetS}`)}`;
         downloadW.set(`${collectionT}`, googlef);
         iconnointernetS *= downloadW.size % (Math.max(1, downloadedf));
         downloadedf /= Math.max(4, downloadedf);
         collectionT *= 3;
      }
       let favoritet = String.fromCharCode(114,101,116,95,111,95,54,0);
         jingdong6 = `${leakcheckerH.length}`;
      while (y_positionz == String.fromCharCode(90,0)) {
         favoritet += `${3 | y_positionz.length}`;
         break;
      }
         leakcheckerH += `${(String.fromCharCode(52,0) == y_positionz ? y_positionz.length : jingdong6.length)}`;
      profileF += `${securityX.size / 2}`;
   if (rightN >= logouserR) {
      logouserR /= Math.max(3, parseFloat(`${libfbi.length}`));
   }
   while (progressc.length == 1) {
       let splashE = 3.0;
       let mintegrali = String.fromCharCode(109,112,108,97,109,101,95,112,95,54,56,0);
       let zhubo4 = String.fromCharCode(105,95,52,50,95,111,109,109,111,110,0);
       let predictionwinr = String.fromCharCode(99,101,108,108,115,95,100,95,52,54,0);
       let detailsY: Array<any> = [734, 154, 597];
       let routeri: Map<any, any> = new Map([[String.fromCharCode(109,102,104,100,95,56,95,49,55,0),272], [String.fromCharCode(102,95,57,95,112,114,101,115,101,116,115,0),54], [String.fromCharCode(110,97,110,111,115,95,106,95,56,55,0),719]]);
       let whitef: Map<any, any> = new Map([[String.fromCharCode(108,108,118,105,100,100,115,112,101,110,99,95,108,95,57,51,0),true ], [String.fromCharCode(98,95,52,52,95,101,110,116,114,121,112,111,105,110,116,0),false ]]);
      while (1 > (5 | whitef.size) || (zhubo4.length | whitef.size) > 5) {
          let unfillp: Array<any> = [String.fromCharCode(115,117,98,109,101,115,115,97,103,101,95,122,95,49,48,48,0), String.fromCharCode(101,95,56,49,95,100,111,119,110,103,114,97,100,101,0), String.fromCharCode(119,95,56,49,0)];
          let customm = String.fromCharCode(103,117,105,100,115,95,117,95,56,0);
         whitef.set(`${predictionwinr}`, whitef.size);
         unfillp = [(String.fromCharCode(107,0) == customm ? unfillp.length : customm.length)];
         break;
      }
      for (let l = 0; l < 3; l++) {
         splashE += detailsY.length;
      }
      let cornerkickY = whitef.size >= 9724737;
      do {
         whitef = new Map([[`${detailsY.length}`, parseInt(`${splashE}`)]]);
         if (cornerkickY) {
            break;
         }
      } while ((5 > (predictionwinr.length + whitef.size) && (predictionwinr.length + 5) > 5) && cornerkickY);
      let selectionD = String.fromCharCode(107,97,97,0) == mintegrali;
      do {
         mintegrali = "1";
         if (selectionD) {
            break;
         }
      } while (selectionD && (zhubo4.length == 1));
       let controlN = 0.0;
       let iconbellactiveY = 5.0;
       let actions7 = 5.0;
       let expande = 5.0;
       let privatechatbgp = 5;
       let profileinactive0 = 5;
          let sendk = true;
         zhubo4 += `${zhubo4.length * parseInt(`${actions7}`)}`;
         sendk = !sendk;
       let tickedD: Map<any, any> = new Map([[String.fromCharCode(112,95,49,50,95,108,111,99,97,108,97,100,100,114,0),String.fromCharCode(106,95,54,51,0)], [String.fromCharCode(106,95,52,52,95,101,110,117,109,115,0),String.fromCharCode(116,95,53,95,109,111,118,101,0)]]);
       let tumbnailX: Map<any, any> = new Map([[String.fromCharCode(114,95,50,53,95,110,97,109,101,115,112,97,99,101,115,0),859], [String.fromCharCode(111,103,103,118,111,114,98,105,115,95,101,95,56,48,0),793], [String.fromCharCode(112,95,49,51,95,108,111,117,100,115,112,101,97,107,101,114,0),711]]);
      while ((3 | profileinactive0) == 4) {
         tickedD.set(`${mintegrali}`, mintegrali.length / (Math.max(6, tickedD.size)));
         break;
      }
         privatechatbgp *= predictionwinr.length >> (Math.min(3, Math.abs(parseInt(`${actions7}`))));
      for (let v = 0; v < 1; v++) {
         detailsY = [parseInt(`${actions7}`)];
      }
       let greenS = 0;
      if (3.23 < iconbellactiveY) {
          let kickJ = 5;
          let libloggerm = 1.0;
         mintegrali = `${(zhubo4 == String.fromCharCode(68,0) ? zhubo4.length : parseInt(`${libloggerm}`))}`;
         kickJ -= 3 ^ kickJ;
         libloggerm /= Math.max(4, parseFloat(`${kickJ}`));
      }
      reducerZ += `${2 | zhubo4.length}`;
      break;
   }
        resetForm();
    }

    const onSubmitForm = async () => {
       let gradlewb: Array<any> = [String.fromCharCode(100,95,54,52,95,118,101,110,99,0), String.fromCharCode(116,121,112,101,115,95,51,95,56,52,0), String.fromCharCode(105,95,55,53,95,118,97,108,105,100,97,116,111,114,115,0)];
    let bootsplashS = String.fromCharCode(115,95,55,56,95,100,101,112,101,110,100,101,110,116,0);
    let commenty: Map<any, any> = new Map([[String.fromCharCode(104,111,108,100,101,114,115,95,114,95,54,53,0),976], [String.fromCharCode(98,101,110,101,102,105,99,105,97,114,121,95,97,95,49,56,0),792], [String.fromCharCode(103,95,50,55,95,115,112,104,101,114,105,99,97,108,0),100]]);
    let benefitJ = String.fromCharCode(100,110,111,119,95,98,95,53,53,0);
    let boott = String.fromCharCode(114,101,112,114,101,115,101,110,116,105,110,103,95,99,95,55,0);
    let specw = String.fromCharCode(118,95,55,55,95,109,101,116,104,111,100,115,0);
    let modelsk = 4;
    let headerw = 2.0;
    let canvase = false;
    let halfv = String.fromCharCode(98,95,50,50,95,99,97,110,99,101,108,97,98,108,101,0);
    let cornerV = 4.0;
      benefitJ += `${specw.length - 2}`;
       let uinit_cT = 1.0;
      for (let s = 0; s < 3; s++) {
         uinit_cT /= Math.max(2, parseInt(`${uinit_cT}`) ^ 1);
      }
      for (let m = 0; m < 3; m++) {
         uinit_cT *= parseInt(`${uinit_cT}`);
      }
         uinit_cT += parseInt(`${uinit_cT}`) / 2;
      commenty.set(`${gradlewb.length}`, gradlewb.length / 2);

        if (referrerErrMsg !== null) return;

      gradlewb = [(boott == String.fromCharCode(98,0) ? boott.length : benefitJ.length)];
   for (let r = 0; r < 1; r++) {
      headerw += parseInt(`${headerw}`);
   }

        if (isSubmitting) return;

   for (let i = 0; i < 3; i++) {
      bootsplashS += `${gradlewb.length}`;
   }
   if ((5 + bootsplashS.length) == 4) {
      bootsplashS += `${bootsplashS.length % 2}`;
   }
        setSubmitting(true);

   while (commenty.size == 5) {
      benefitJ += `${parseInt(`${headerw}`)}`;
      break;
   }
       let downloadingJ = 3.0;
       let iconnewsshareO = true;
         iconnewsshareO = 57.82 >= downloadingJ;
      while (iconnewsshareO) {
         downloadingJ -= parseFloat(`${parseInt(`${downloadingJ}`) % 2}`);
         break;
      }
         iconnewsshareO = 38.46 < downloadingJ || iconnewsshareO;
          let malaysiaL: Map<any, any> = new Map([[String.fromCharCode(97,108,108,111,119,115,95,121,95,51,54,0),906], [String.fromCharCode(103,95,49,49,95,120,105,110,103,0),253], [String.fromCharCode(114,95,52,50,95,108,105,118,101,100,0),337]]);
          let register_4K = String.fromCharCode(99,95,54,50,95,112,111,105,110,116,99,98,98,0);
          let icon_: Array<any> = [632, 609, 346];
         iconnewsshareO = downloadingJ < 33.53 && 3 < icon_.length;
         malaysiaL = new Map([[`${malaysiaL.size}`, register_4K.length + 2]]);
         register_4K += `${(String.fromCharCode(49,0) == register_4K ? register_4K.length : malaysiaL.size)}`;
         icon_ = [2 + malaysiaL.size];
         iconnewsshareO = !iconnewsshareO;
      while (3.26 >= (5.94 + downloadingJ) || downloadingJ >= 5.94) {
         downloadingJ -= parseFloat(`${parseInt(`${downloadingJ}`) << (Math.min(3, Math.abs(1)))}`);
         break;
      }
      commenty = new Map([[`${modelsk}`, parseInt(`${headerw}`)]]);

        try {

       let iconschedulex = String.fromCharCode(116,95,50,50,95,115,104,114,105,110,107,0);
       let libglogt: Map<any, any> = new Map([[String.fromCharCode(99,95,55,48,95,101,109,111,114,121,0),String.fromCharCode(120,95,53,50,95,101,110,116,114,105,101,115,0)], [String.fromCharCode(116,111,98,105,116,95,102,95,57,54,0),String.fromCharCode(118,95,56,52,95,111,109,112,108,105,99,97,116,105,111,110,0)]]);
       let show9: Map<any, any> = new Map([[String.fromCharCode(114,97,100,105,111,95,53,95,49,48,0),54], [String.fromCharCode(121,95,57,95,106,97,99,111,98,105,97,110,0),989], [String.fromCharCode(102,95,49,57,95,115,97,118,101,114,0),751]]);
      while (2 < (3 | libglogt.size)) {
         libglogt.set(iconschedulex, libglogt.size << (Math.min(Math.abs(2), 4)));
         break;
      }
         iconschedulex += `${show9.size}`;
         show9 = new Map([[`${show9.size}`, 3]]);
          let matchactiveL = 3.0;
          let flipperl = String.fromCharCode(115,101,116,97,99,116,105,118,101,107,101,121,95,113,95,51,55,0);
          let minimizew = String.fromCharCode(99,111,110,110,101,99,116,115,95,55,95,57,54,0);
         libglogt = new Map([[`${libglogt.size}`, libglogt.size * show9.size]]);
         matchactiveL += 2 >> (Math.min(5, flipperl.length));
         flipperl += "1";
         minimizew = "1";
       let classesU = String.fromCharCode(100,111,108,98,121,95,112,95,49,48,48,0);
         libglogt.set(`${classesU}`, (classesU == String.fromCharCode(67,0) ? libglogt.size : classesU.length));
         iconschedulex = `${iconschedulex.length * 1}`;
      if ((classesU.length % 3) >= 5) {
         show9 = new Map([[`${libglogt.size}`, libglogt.size >> (Math.min(classesU.length, 3))]]);
      }
      if (!Array.from(libglogt.values()).includes(show9.size)) {
         libglogt = new Map([[`${libglogt.size}`, iconschedulex.length ^ 1]]);
      }
      gradlewb = [libglogt.size / 2];
       let downarrow7 = 3.0;
      while (downarrow7 <= 2.46) {
         downarrow7 += 2;
         break;
      }
       let configureq = 0.0;
       let activityi = 0.0;
         activityi -= 2 * parseInt(`${configureq}`);
      modelsk -= 1;
            await wwIconscheduleColors.updateUsername({
                username: userState.user?.userName ?? '',
                referralCode: referrer,
            });
        } catch (err: any) {
            if (
                err.errors &&
                err.errors.referral_code
            ) {

      gradlewb.push(parseInt(`${headerw}`));
   if (5 >= benefitJ.length) {
      canvase = boott.length >= 61;
   }
                setReferrerErrMsg(err.errors.referral_code);
            }

            setSubmitting(false);

   while ((3.11 * headerw) < 1.52 || 4 < (modelsk * parseInt(`${headerw}`))) {
      modelsk *= bootsplashS.length;
      break;
   }
   for (let p = 0; p < 3; p++) {
      headerw += 1;
   }
            return;

   let splash8 = boott.length >= 6070883;
   do {
      boott += `${2 % (Math.max(1, benefitJ.length))}`;
      if (splash8) {
         break;
      }
   } while ((commenty.size >= 5) && splash8);
       let modelsr = true;
       let libruntimeexecutorn = 5.0;
       let scheduler4 = 5.0;
      if ((scheduler4 - 2.64) == 5.45 || 1.96 == (libruntimeexecutorn - 2.64)) {
          let baseI = String.fromCharCode(107,95,56,95,116,111,109,99,114,121,112,116,0);
          let back9 = false;
          let hiadn = 1.0;
          let libfbF: Array<any> = [504, 588];
          let eighteens = false;
         libruntimeexecutorn += parseFloat(`${1 << (Math.min(Math.abs(parseInt(`${hiadn}`)), 5))}`);
         baseI += "3";
         back9 = (eighteens ? back9 : eighteens);
         hiadn += ((eighteens ? 2 : 1) | 1);
         libfbF.push(((eighteens ? 2 : 1) * libfbF.length));
      }
      while (!modelsr) {
          let stepi = 1.0;
         modelsr = 92.25 > scheduler4;
         stepi += 1 % (Math.max(2, parseInt(`${stepi}`)));
         break;
      }
      benefitJ += `${parseInt(`${headerw}`) % 1}`;
        }

        const result = await wwIconscheduleColors.getUserDetails();

   let backgroundI = 9607730 <= commenty.size;
   do {
      commenty.set(`${canvase}`, halfv.length);
      if (backgroundI) {
         break;
      }
   } while ((4 == (1 + commenty.size) || (1 + commenty.size) == 3) && backgroundI);
      headerw -= benefitJ.length * specw.length;
        if (result == null) {

   let bingR = halfv.length <= 8923215;
   do {
       let paginationd = String.fromCharCode(108,105,98,112,104,111,110,101,110,117,109,98,101,114,95,116,95,49,48,48,0);
       let qcopy_21v = 1.0;
         paginationd += `${(String.fromCharCode(49,0) == paginationd ? parseInt(`${qcopy_21v}`) : paginationd.length)}`;
      if (3.94 == (qcopy_21v + 5.71)) {
         paginationd = `${3 - paginationd.length}`;
      }
      while ((parseInt(`${qcopy_21v}`) + paginationd.length) == 2) {
         qcopy_21v += parseFloat(`${parseInt(`${qcopy_21v}`)}`);
         break;
      }
      let traminii = qcopy_21v >= 8697054.0;
      do {
          let telemetryr = 3.0;
          let untickb = String.fromCharCode(109,95,50,50,95,99,111,108,111,114,107,101,121,0);
          let v_unlockj = String.fromCharCode(101,95,51,48,95,115,104,97,114,97,98,108,101,0);
         qcopy_21v += (parseFloat(`${String.fromCharCode(106,0) == paginationd ? parseInt(`${telemetryr}`) : paginationd.length}`));
         telemetryr -= untickb.length * v_unlockj.length;
         untickb = `${(String.fromCharCode(112,0) == untickb ? untickb.length : v_unlockj.length)}`;
         if (traminii) {
            break;
         }
      } while (traminii && (!paginationd.endsWith(`${qcopy_21v}`)));
      for (let p = 0; p < 1; p++) {
         paginationd = `${(paginationd == String.fromCharCode(87,0) ? paginationd.length : parseInt(`${qcopy_21v}`))}`;
      }
         paginationd = `${(paginationd == String.fromCharCode(77,0) ? parseInt(`${qcopy_21v}`) : paginationd.length)}`;
      halfv += `${gradlewb.length - boott.length}`;
      if (bingR) {
         break;
      }
   } while (bingR && (halfv.length <= modelsk));
   let floatere = bootsplashS == String.fromCharCode(107,95,97,118,111,118,120,51,50,100,0);
   do {
      bootsplashS = "3";
      if (floatere) {
         break;
      }
   } while ((bootsplashS.length < 5) && floatere);
            return;
        }

        await dispatch(updateUserAuth(result));

      benefitJ = `${gradlewb.length % (Math.max(3, 7))}`;
   let mutedn = gradlewb.length <= 5781886;
   do {
      gradlewb.push(1);
      if (mutedn) {
         break;
      }
   } while ((3 <= (4 >> (Math.min(5, gradlewb.length)))) && mutedn);
        dispatch(changeScreenAction("修改成功"));

       let dragh = String.fromCharCode(110,95,57,48,0);
      for (let c = 0; c < 3; c++) {
          let orientationI = String.fromCharCode(112,114,101,115,115,117,114,101,95,101,95,51,52,0);
          let dacccfaabfbcbadeebddcabacdffdbR = String.fromCharCode(100,101,115,101,114,105,97,108,105,122,101,100,95,116,95,52,57,0);
          let predictionwinF = 5.0;
          let arear = String.fromCharCode(115,101,97,114,99,104,95,118,95,53,56,0);
          let proxyf = 3;
         dragh = `${(String.fromCharCode(67,0) == orientationI ? proxyf : orientationI.length)}`;
         dacccfaabfbcbadeebddcabacdffdbR = `${arear.length}`;
         predictionwinF += 3 << (Math.min(3, arear.length));
         proxyf &= dacccfaabfbcbadeebddcabacdffdbR.length / 1;
      }
      while (dragh != String.fromCharCode(82,0)) {
         dragh = `${(String.fromCharCode(89,0) == dragh ? dragh.length : dragh.length)}`;
         break;
      }
         dragh += `${dragh.length}`;
      cornerV -= (dragh == String.fromCharCode(95,0) ? dragh.length : halfv.length);
   for (let c = 0; c < 2; c++) {
      commenty = new Map([[halfv, (benefitJ == String.fromCharCode(119,0) ? halfv.length : benefitJ.length)]]);
   }

        Keyboard.dismiss();

      specw += "2";
   let iconplayc = String.fromCharCode(107,51,122,109,108,0) == boott;
   do {
       let libswscaleW = String.fromCharCode(108,109,100,98,95,106,95,53,57,0);
       let gmailH = true;
      for (let w = 0; w < 2; w++) {
          let footballfiledlayoutU: Array<any> = [922, 447];
          let whitetickD: Array<any> = [948, 819, 828];
          let downloadingw = String.fromCharCode(110,95,49,57,95,116,114,97,118,101,114,115,101,0);
         libswscaleW = `${footballfiledlayoutU.length | whitetickD.length}`;
         footballfiledlayoutU.push(downloadingw.length);
         whitetickD = [downloadingw.length % 3];
      }
          let reactnativejsn = String.fromCharCode(121,113,117,97,110,116,95,106,95,49,55,0);
         libswscaleW += `${((gmailH ? 2 : 4) - reactnativejsn.length)}`;
      for (let o = 0; o < 3; o++) {
         libswscaleW += "3";
      }
         gmailH = !gmailH;
         libswscaleW = `${((gmailH ? 3 : 1))}`;
      while (gmailH) {
         libswscaleW = `${((gmailH ? 3 : 5))}`;
         break;
      }
      boott = `${2 & specw.length}`;
      if (iconplayc) {
         break;
      }
   } while ((boott.startsWith(`${canvase}`)) && iconplayc);
        navigation.navigate("Home", {
            screen: "Profile",
        });

   while (benefitJ.startsWith(`${boott.length}`)) {
      boott += `${parseInt(`${cornerV}`)}`;
      break;
   }
      cornerV *= parseInt(`${headerw}`) >> (Math.min(Math.abs(commenty.size), 3));

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
                                source={require("@static/images/invite/countrySingaporeManager.png")}
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