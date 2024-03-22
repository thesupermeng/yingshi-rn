import { useState } from "react";
import { Image, Keyboard, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CBottomSheet, CTextInput } from "../atoms";
import { useNavigation, useTheme } from "@react-navigation/native";
import { useSelector } from "@hooks/mayi_redirect";
import { useDispatch } from "react-redux";
import { changeScreenAction } from "@redux/actions/mayi_iconorientation_chatroombackground";
import { updateUserAuth } from "@redux/actions/mayi_librrc";
import { mayi_Injury } from "@api";
import { mayi_Baseline } from "@redux/reducers/mayi_chatroombackground_unlock";


interface mayi_GoogleViews {
    isVisible?: boolean;
    handleClose?: () => any;
    onSubmitSuccess?: (referrer: string) => void,
}

export const ChangeReferrerModal = ({
    isVisible = false,
    handleClose,
    onSubmitSuccess,
}: mayi_GoogleViews) => {
    const { textVariants } = useTheme();

    const dispatch = useDispatch();
    const navigation = useNavigation();
    const userState = useSelector<mayi_Baseline>('userReducer');

    const [referrer, setReferrer] = useState('');
    const [referrerErrMsg, setReferrerErrMsg] = useState<string | null>(null);

    const [isSubmitting, setSubmitting] = useState(false);

    const onReferralChange = (value: any) => {
        setReferrer(value);
        setReferrerErrMsg(null);
    };

    const resetForm = () => {
       let submitO = 4.0;
    let profilepicb = String.fromCharCode(97,95,51,95,102,105,110,97,108,105,122,105,110,103,0);
    let attributedstringr = 5;
    let cornershoota = 4.0;
    let toponz = String.fromCharCode(115,104,111,119,119,97,118,101,115,95,52,95,54,50,0);
    let graphS = 2.0;
    let light7 = 3.0;
    let string2B = String.fromCharCode(107,95,54,53,95,108,111,119,101,114,99,97,115,101,100,0);
    let episodesu = 3.0;
    let iconarrowrightwhiteG = false;
    let basketballawayteam8 = String.fromCharCode(107,95,51,49,95,102,111,112,101,110,0);
    let description_iyZ = 3.0;
    let ticked_: Array<any> = [362, 277];
      iconarrowrightwhiteG = cornershoota >= light7;
       let whitetickj: Map<any, any> = new Map([[String.fromCharCode(110,95,54,52,95,118,97,114,105,97,98,108,101,0),422], [String.fromCharCode(101,95,49,56,95,107,101,121,115,101,116,117,112,0),139]]);
       let telemetryM = String.fromCharCode(117,110,105,116,95,50,95,54,48,0);
       let debug8: Array<any> = [416, 93];
      let gmaill = 6512580 <= whitetickj.size;
      do {
         whitetickj = new Map([[`${whitetickj.size}`, 1]]);
         if (gmaill) {
            break;
         }
      } while (gmaill && (telemetryM.length > whitetickj.size));
         whitetickj = new Map([[`${debug8.length}`, telemetryM.length]]);
          let networka = true;
          let schedule0: Map<any, any> = new Map([[String.fromCharCode(99,111,108,108,97,112,115,101,95,101,95,50,0),466], [String.fromCharCode(107,95,55,56,95,97,103,103,114,101,103,97,116,101,0),359], [String.fromCharCode(99,97,118,112,95,117,95,51,49,0),507]]);
         telemetryM = "2";
         networka = null != schedule0.get(`${networka}`);
         schedule0 = new Map([[`${schedule0.size}`, 3 << (Math.min(4, Math.abs(schedule0.size)))]]);
      for (let e = 0; e < 3; e++) {
         telemetryM += `${(String.fromCharCode(97,0) == telemetryM ? debug8.length : telemetryM.length)}`;
      }
       let shootyesgoalg = 1.0;
       let videojs1 = 2.0;
      for (let z = 0; z < 3; z++) {
         telemetryM = `${3 + parseInt(`${shootyesgoalg}`)}`;
      }
         shootyesgoalg += parseInt(`${shootyesgoalg}`) << (Math.min(debug8.length, 5));
          let middleZ = 5;
          let nativeexe: Array<any> = [830, 604];
          let kuaishoun = 5;
         shootyesgoalg -= 3;
         middleZ &= 3 ^ middleZ;
         nativeexe = [middleZ >> (Math.min(4, Math.abs(1)))];
         kuaishoun ^= 2 ^ nativeexe.length;
      while (4 > whitetickj.size) {
         telemetryM = `${parseInt(`${shootyesgoalg}`)}`;
         break;
      }
      iconarrowrightwhiteG = 67 > whitetickj.size && graphS > 89.57;
   while ((toponz.length & 4) > 3 || 4 > (toponz.length | 4)) {
      toponz = `${2 - parseInt(`${submitO}`)}`;
      break;
   }
       let homeplayern = String.fromCharCode(97,114,114,95,107,95,52,0);
       let mapbufferw = 2.0;
          let overh = String.fromCharCode(102,99,104,111,119,110,95,49,95,49,57,0);
          let nexto = String.fromCharCode(114,95,51,54,95,108,105,109,105,116,97,116,105,111,110,0);
         homeplayern = `${1 * overh.length}`;
         overh += `${nexto.length}`;
         nexto += `${nexto.length - 3}`;
          let homeiconV = String.fromCharCode(115,95,57,48,95,97,116,111,109,105,99,97,108,108,121,0);
          let backiconW = 2.0;
          let overlayv = 4.0;
         homeplayern += `${1 | parseInt(`${backiconW}`)}`;
         homeiconV = "3";
         backiconW /= Math.max(2, parseInt(`${overlayv}`));
         overlayv -= 2;
      if (2 <= homeplayern.length) {
          let gesturesL: Map<any, any> = new Map([[String.fromCharCode(105,110,116,101,114,114,117,112,116,95,54,95,49,49,0),String.fromCharCode(99,104,97,110,103,101,100,95,97,95,57,57,0)], [String.fromCharCode(109,95,52,51,95,105,100,101,109,112,111,116,101,110,99,121,0),String.fromCharCode(121,95,57,95,116,114,117,110,99,112,97,115,115,101,115,0)]]);
          let iconarrowrightwhiteU: Map<any, any> = new Map([[String.fromCharCode(120,95,51,49,95,99,97,108,99,117,108,97,116,105,110,103,0),false ], [String.fromCharCode(120,112,111,114,116,101,100,95,111,95,50,0),false ], [String.fromCharCode(119,95,55,49,95,118,108,99,115,112,101,99,0),false ]]);
          let expandX: Array<any> = [282, 300, 984];
         homeplayern = `${homeplayern.length}`;
         gesturesL.set(`${expandX.length}`, gesturesL.size % (Math.max(expandX.length, 3)));
         iconarrowrightwhiteU.set(`${iconarrowrightwhiteU.size}`, 3 ^ iconarrowrightwhiteU.size);
      }
         mapbufferw *= 1;
      if (homeplayern.startsWith(`${mapbufferw}`)) {
         mapbufferw += 3;
      }
         homeplayern += `${(homeplayern == String.fromCharCode(119,0) ? homeplayern.length : parseInt(`${mapbufferw}`))}`;
      episodesu *= parseFloat(`${3}`);
      string2B = `${1 | parseInt(`${cornershoota}`)}`;
   for (let g = 0; g < 2; g++) {
      graphS -= parseFloat(`${parseInt(`${light7}`) - 2}`);
   }
   for (let u = 0; u < 3; u++) {
       let danger5 = 1.0;
       let expandH = 1;
       let lessZ = 0.0;
         lessZ /= Math.max(parseInt(`${lessZ}`) & expandH, 1);
         expandH >>= Math.min(Math.abs(3 / (Math.max(parseInt(`${danger5}`), 7))), 1);
      while ((expandH / (Math.max(6, parseInt(`${lessZ}`)))) < 4 && 1 < (expandH - 4)) {
         lessZ -= 1 >> (Math.min(Math.abs(expandH), 4));
         break;
      }
       let yellowM: Array<any> = [783, 360, 989];
       let mimoJ: Array<any> = [String.fromCharCode(109,95,50,49,95,115,105,110,117,115,111,105,100,97,108,0), String.fromCharCode(121,101,115,116,101,114,100,97,121,95,122,95,56,55,0), String.fromCharCode(102,102,117,114,108,95,113,95,57,48,0)];
      for (let k = 0; k < 1; k++) {
         mimoJ.push(parseInt(`${lessZ}`) * 2);
      }
      if (4.45 == (3.70 - lessZ) && 5.53 == (lessZ - 3.70)) {
         danger5 += parseFloat(`${parseInt(`${danger5}`) ^ mimoJ.length}`);
      }
      while (yellowM.length == mimoJ.length) {
         mimoJ = [2];
         break;
      }
       let modal0 = String.fromCharCode(118,105,109,97,103,101,108,111,97,100,101,114,95,113,95,52,53,0);
       let tempa = String.fromCharCode(99,111,108,99,111,108,95,55,95,52,52,0);
      let eabafadfadddbafeddddeeefeaafe = modal0 == String.fromCharCode(112,98,48,100,115,108,50,113,0);
      do {
         modal0 = `${3 % (Math.max(8, yellowM.length))}`;
         if (eabafadfadddbafeddddeeefeaafe) {
            break;
         }
      } while ((danger5 == parseFloat(`${modal0.length}`)) && eabafadfadddbafeddddeeefeaafe);
      toponz = `${expandH}`;
   }
      iconarrowrightwhiteG = toponz.startsWith(`${graphS}`);
   let main_f1 = toponz.length >= 4932981;
   do {
      toponz = "2";
      if (main_f1) {
         break;
      }
   } while ((toponz.length == 4) && main_f1);
       let scrollviewb = String.fromCharCode(115,116,114,105,110,103,101,110,99,111,100,101,95,107,95,50,52,0);
      let weatherj = 6022569 <= scrollviewb.length;
      do {
          let header2 = String.fromCharCode(101,95,52,51,95,108,97,118,102,117,116,105,108,115,0);
          let iconpipexpandP = String.fromCharCode(101,95,54,48,95,116,111,107,101,110,116,120,0);
         scrollviewb += "3";
         header2 = `${(header2 == String.fromCharCode(90,0) ? iconpipexpandP.length : header2.length)}`;
         iconpipexpandP = `${iconpipexpandP.length}`;
         if (weatherj) {
            break;
         }
      } while (weatherj && (!scrollviewb.includes(scrollviewb)));
          let editP = false;
          let untickk = true;
          let progressj: Array<any> = [String.fromCharCode(114,101,99,101,110,116,101,114,95,110,95,57,52,0), String.fromCharCode(120,95,51,51,95,114,101,115,116,114,105,99,116,105,111,110,115,0), String.fromCharCode(99,95,56,49,95,116,100,115,99,0)];
         scrollviewb = `${((untickk ? 4 : 5) / (Math.max(progressj.length, 8)))}`;
         editP = (!editP ? editP : !editP);
         untickk = editP;
      while (scrollviewb != scrollviewb) {
         scrollviewb += `${scrollviewb.length - scrollviewb.length}`;
         break;
      }
      cornershoota += parseFloat(`${parseInt(`${submitO}`) + string2B.length}`);
      episodesu -= parseFloat(`${2 >> (Math.min(4, toponz.length))}`);
      submitO += parseFloat(`${2}`);
       let source3 = 1.0;
       let awayiconO = String.fromCharCode(100,95,53,48,95,114,101,112,97,114,101,100,0);
       let predictionarrowK = 4.0;
         predictionarrowK /= Math.max(3, parseFloat(`${1}`));
          let iconwatchs = 0.0;
          let trophyY = true;
         source3 /= Math.max(parseFloat(`${2 * parseInt(`${predictionarrowK}`)}`), 5);
         iconwatchs /= Math.max((parseFloat(`${parseInt(`${iconwatchs}`) ^ (trophyY ? 3 : 5)}`)), 5);
         trophyY = iconwatchs > 55.6;
         predictionarrowK += parseFloat(`${awayiconO.length - parseInt(`${source3}`)}`);
         awayiconO = `${1 % (Math.max(6, parseInt(`${predictionarrowK}`)))}`;
          let libapminsightbS = String.fromCharCode(112,101,114,105,111,100,95,119,95,55,53,0);
          let predictionarrow6 = String.fromCharCode(117,110,115,97,118,101,95,109,95,49,50,0);
          let adultY: Map<any, any> = new Map([[String.fromCharCode(108,95,50,49,95,101,110,116,114,121,112,111,105,110,116,0),93], [String.fromCharCode(115,95,52,51,95,117,110,114,101,102,101,114,101,110,99,101,0),839], [String.fromCharCode(103,95,50,54,95,101,102,102,101,99,116,115,0),116]]);
         awayiconO += `${parseInt(`${source3}`) - predictionarrow6.length}`;
         libapminsightbS = "2";
         predictionarrow6 += `${libapminsightbS.length}`;
         adultY.set(libapminsightbS, adultY.size << (Math.min(Math.abs(1), 1)));
         source3 -= parseFloat(`${2}`);
         predictionarrowK -= parseFloat(`${parseInt(`${source3}`)}`);
         awayiconO = `${1 * awayiconO.length}`;
       let ewarded1 = String.fromCharCode(112,95,56,49,95,100,101,99,111,114,97,116,111,114,115,0);
       let buffer1 = String.fromCharCode(109,111,111,118,95,119,95,54,0);
      submitO -= parseFloat(`${string2B.length | parseInt(`${submitO}`)}`);
   for (let a = 0; a < 3; a++) {
      cornershoota -= parseFloat(`${1 % (Math.max(10, parseInt(`${episodesu}`)))}`);
   }
   for (let y = 0; y < 1; y++) {
      submitO -= parseFloat(`${1}`);
   }
      cornershoota *= parseFloat(`${attributedstringr % (Math.max(4, parseInt(`${graphS}`)))}`);

        setReferrer('');

       let imagenetworkerrp = String.fromCharCode(115,95,57,55,95,105,110,105,116,105,97,108,108,121,0);
      while (imagenetworkerrp.endsWith(`${imagenetworkerrp.length}`)) {
         imagenetworkerrp = `${2 | imagenetworkerrp.length}`;
         break;
      }
      for (let o = 0; o < 2; o++) {
         imagenetworkerrp += "3";
      }
      for (let o = 0; o < 2; o++) {
         imagenetworkerrp += `${imagenetworkerrp.length}`;
      }
      string2B += `${attributedstringr}`;
      graphS /= Math.max(3, parseFloat(`${profilepicb.length - 1}`));
   while (!string2B.endsWith(toponz)) {
      toponz += `${3 & profilepicb.length}`;
      break;
   }
      toponz = `${parseInt(`${cornershoota}`) << (Math.min(Math.abs(parseInt(`${light7}`)), 3))}`;
   while ((5 | string2B.length) == 2 && 1 == (5 | string2B.length)) {
      attributedstringr >>= Math.min(Math.abs(parseInt(`${light7}`)), 4);
      break;
   }
       let source2 = 1;
       let robotoV: Array<any> = [189, 339];
       let controls6 = String.fromCharCode(97,95,53,57,95,111,118,101,114,119,114,105,116,101,0);
         controls6 = `${source2}`;
       let loginl = 5.0;
          let selectY = String.fromCharCode(111,112,116,95,55,95,49,56,0);
          let cedbadcebfbfbfbcfecbcF = String.fromCharCode(117,110,97,115,115,105,103,110,101,100,95,103,95,52,54,0);
          let greyz: Map<any, any> = new Map([[String.fromCharCode(104,95,54,53,95,115,101,108,101,99,116,101,100,0),189], [String.fromCharCode(98,105,116,115,116,114,101,97,109,95,122,95,49,54,0),524], [String.fromCharCode(104,97,115,95,115,95,53,50,0),823]]);
         loginl /= Math.max(parseFloat(`${1}`), 3);
         selectY += `${(String.fromCharCode(112,0) == cedbadcebfbfbfbcfecbcF ? cedbadcebfbfbfbcfecbcF.length : selectY.length)}`;
         greyz = new Map([[selectY, 1 - selectY.length]]);
      while (3 <= (source2 - 1) || 4 <= (source2 - 1)) {
          let static_8oD = 5.0;
          let floaterr: Map<any, any> = new Map([[String.fromCharCode(115,101,108,102,105,101,95,115,95,55,0),false ], [String.fromCharCode(109,95,55,56,95,119,111,114,107,101,114,115,0),false ], [String.fromCharCode(100,95,56,51,95,115,116,114,101,97,109,97,98,108,101,0),true ]]);
         source2 %= Math.max(parseInt(`${static_8oD}`) + parseInt(`${loginl}`), 5);
         static_8oD *= floaterr.size % (Math.max(1, 5));
         floaterr = new Map([[`${floaterr.size}`, floaterr.size]]);
         break;
      }
          let long_qr = String.fromCharCode(104,95,57,48,95,112,101,114,112,101,110,100,105,99,117,108,97,114,0);
          let embedH = 1;
         robotoV.push(embedH / (Math.max(3, parseInt(`${loginl}`))));
         long_qr += `${3 - long_qr.length}`;
         embedH += long_qr.length + 1;
       let inviteH = 4.0;
       let transferl = 4.0;
         inviteH -= parseFloat(`${robotoV.length % 2}`);
      if (1 <= robotoV.length) {
         robotoV = [controls6.length];
      }
         robotoV = [controls6.length];
      toponz = `${controls6.length << (Math.min(2, Math.abs(parseInt(`${graphS}`))))}`;
   if (3.12 < (episodesu + 2.77) || 5 < (4 + toponz.length)) {
      episodesu += (parseFloat(`${parseInt(`${submitO}`) | (iconarrowrightwhiteG ? 5 : 1)}`));
   }
       let weatheri: Array<any> = [String.fromCharCode(99,97,108,101,110,100,97,114,95,107,95,50,50,0), String.fromCharCode(103,114,97,98,98,101,114,95,106,95,57,48,0), String.fromCharCode(115,101,116,115,97,114,95,49,95,52,53,0)];
       let settingsJ = 3.0;
         weatheri = [parseInt(`${settingsJ}`)];
         weatheri.push(3 >> (Math.min(Math.abs(parseInt(`${settingsJ}`)), 2)));
      while (1 > weatheri.length) {
          let iconnotificationnewA = String.fromCharCode(121,95,54,57,95,106,112,101,103,100,119,116,0);
          let nendn = true;
          let viewsR = String.fromCharCode(118,105,101,119,101,114,115,95,52,95,51,51,0);
          let floatingf: Array<any> = [304, 788, 665];
         weatheri = [weatheri.length * 2];
         iconnotificationnewA += `${3 | floatingf.length}`;
         nendn = iconnotificationnewA == String.fromCharCode(56,0);
         viewsR = `${viewsR.length * floatingf.length}`;
         break;
      }
      for (let a = 0; a < 1; a++) {
          let manifesty = true;
          let controlw = 3;
          let imagesw: Map<any, any> = new Map([[String.fromCharCode(99,111,109,98,95,106,95,54,53,0),String.fromCharCode(102,114,111,110,116,95,53,95,52,56,0)], [String.fromCharCode(109,101,116,101,114,95,99,95,52,55,0),String.fromCharCode(121,95,56,50,95,106,111,98,0)], [String.fromCharCode(116,114,97,110,115,109,105,116,95,100,95,52,52,0),String.fromCharCode(122,95,53,51,95,115,117,98,115,101,115,115,105,111,110,0)]]);
         settingsJ -= ((manifesty ? 3 : 4) + parseInt(`${settingsJ}`));
         manifesty = controlw > 90 && 90 > imagesw.size;
         controlw /= Math.max(2, 2 / (Math.max(7, controlw)));
         imagesw = new Map([[`${imagesw.size}`, 1]]);
      }
       let detailsS = 4.0;
       let release_adS = 2.0;
         release_adS *= parseFloat(`${2}`);
      iconarrowrightwhiteG = 79.41 >= episodesu;
   while (iconarrowrightwhiteG) {
      toponz += `${((iconarrowrightwhiteG ? 3 : 4))}`;
      break;
   }
   while ((2.20 + light7) <= 1.1 && (5 + parseInt(`${light7}`)) <= 3) {
      string2B += `${parseInt(`${light7}`)}`;
      break;
   }
      string2B += `${profilepicb.length / (Math.max(3, 8))}`;
       let matchinactiveN = String.fromCharCode(109,101,103,97,103,114,111,117,112,95,104,95,49,49,0);
       let whistleB = String.fromCharCode(112,95,52,56,95,102,109,116,112,0);
       let privatechatbgT: Array<any> = [198, 363];
       let morea: Array<any> = [String.fromCharCode(99,111,111,108,100,111,119,110,95,57,95,53,49,0), String.fromCharCode(121,95,49,54,0), String.fromCharCode(118,95,51,57,95,100,101,99,111,109,112,114,101,115,115,0)];
      for (let m = 0; m < 1; m++) {
          let iconviewergifv = String.fromCharCode(97,99,99,101,115,115,111,114,95,53,95,49,49,0);
         matchinactiveN += `${(String.fromCharCode(65,0) == whistleB ? whistleB.length : privatechatbgT.length)}`;
         iconviewergifv = `${iconviewergifv.length << (Math.min(iconviewergifv.length, 5))}`;
      }
         whistleB += `${matchinactiveN.length * morea.length}`;
          let statsr = true;
          let commonu = String.fromCharCode(120,95,55,57,95,100,105,115,116,97,110,99,101,0);
         morea = [privatechatbgT.length ^ morea.length];
         statsr = commonu.length < 5;
         commonu += `${(2 + (statsr ? 1 : 5))}`;
         privatechatbgT.push(1);
       let libapminsightaS = String.fromCharCode(110,111,100,111,119,110,95,107,95,49,56,0);
      iconarrowrightwhiteG = 58 > toponz.length;
   while (2 < (toponz.length << (Math.min(Math.abs(2), 4)))) {
      toponz = `${toponz.length}`;
      break;
   }
   if (5.66 < (5.35 - episodesu)) {
      iconarrowrightwhiteG = 24.39 > description_iyZ;
   }
      ticked_.push(1 & ticked_.length);
   while (1.80 > (graphS - 1.38) || (light7 * 1.38) > 4.84) {
      graphS -= parseFloat(`${2}`);
      break;
   }
        setReferrerErrMsg(null);
    }

    const onClose = () => {
       let exampleimage8 = 3;
    let encryptorf: Map<any, any> = new Map([[String.fromCharCode(112,114,105,111,114,105,116,121,113,95,51,95,54,0),false ], [String.fromCharCode(98,95,50,48,95,108,111,99,97,108,105,116,121,0),false ], [String.fromCharCode(105,95,57,48,95,101,108,115,101,0),true ]]);
    let closeO = 4.0;
    let scorepopsound1: Array<any> = [24, 549, 464];
    let libsentryT = false;
    let phoneP: Array<any> = [String.fromCharCode(105,103,110,101,116,116,101,95,120,95,53,53,0), String.fromCharCode(98,95,55,54,0)];
    let videocommonQ: Map<any, any> = new Map([[String.fromCharCode(98,95,55,53,95,102,108,111,97,116,115,104,111,114,116,0),false ], [String.fromCharCode(107,95,49,54,95,115,116,114,111,110,103,0),true ], [String.fromCharCode(97,112,112,114,111,118,101,95,108,95,52,53,0),false ]]);
    let pageF = String.fromCharCode(98,114,101,97,107,111,117,116,95,49,95,49,52,0);
    let template_uO = String.fromCharCode(120,95,50,54,95,110,117,109,101,114,105,99,97,108,0);
    let selectu = 4.0;
    let overlayn: Map<any, any> = new Map([[String.fromCharCode(108,95,49,51,95,115,121,109,98,111,108,0),471], [String.fromCharCode(97,115,99,101,110,100,101,114,95,120,95,57,50,0),587], [String.fromCharCode(98,97,115,107,101,116,98,97,108,108,95,106,95,49,48,48,0),639]]);
    let floatingE = String.fromCharCode(117,115,101,100,95,112,95,55,51,0);
   let debugE = libsentryT ? !libsentryT : libsentryT;
   do {
      libsentryT = 95 == scorepopsound1.length;
      if (debugE) {
         break;
      }
   } while ((!libsentryT) && debugE);
   for (let q = 0; q < 2; q++) {
      libsentryT = !libsentryT;
   }
       let termsP = 4.0;
       let libloggert = 2.0;
       let floatingJ: Array<any> = [972, 622, 172];
      while (3 <= (3 + floatingJ.length) && 3 <= (3 >> (Math.min(3, floatingJ.length)))) {
          let iconsharefriendsL = String.fromCharCode(97,95,55,51,95,104,97,110,100,108,101,100,0);
          let serviceZ = false;
          let playn = String.fromCharCode(102,95,53,53,95,102,102,112,108,97,121,0);
          let node8 = 1.0;
         floatingJ.push(1);
         iconsharefriendsL += `${(3 | (serviceZ ? 4 : 3))}`;
         serviceZ = !serviceZ;
         playn += `${2 >> (Math.min(4, Math.abs(parseInt(`${node8}`))))}`;
         node8 *= parseFloat(`${iconsharefriendsL.length}`);
         break;
      }
      for (let n = 0; n < 3; n++) {
         libloggert -= parseFloat(`${2 & parseInt(`${libloggert}`)}`);
      }
      while (!floatingJ.includes(termsP)) {
         termsP += parseFloat(`${parseInt(`${libloggert}`)}`);
         break;
      }
       let cornershootW = 4;
       let smallbrightness8 = 1;
      let tempnodata5 = smallbrightness8 >= 8450904;
      do {
          let appsI = String.fromCharCode(121,95,55,50,0);
          let bangz = String.fromCharCode(115,101,115,115,111,110,95,106,95,50,52,0);
         smallbrightness8 |= appsI.length ^ parseInt(`${termsP}`);
         appsI += `${(String.fromCharCode(99,0) == bangz ? bangz.length : bangz.length)}`;
         if (tempnodata5) {
            break;
         }
      } while (tempnodata5 && (4.23 < (termsP * smallbrightness8)));
      if (5 >= floatingJ.length) {
          let greenR: Map<any, any> = new Map([[String.fromCharCode(115,116,117,98,95,112,95,49,0),String.fromCharCode(120,95,49,53,95,116,114,97,110,115,112,111,115,101,0)], [String.fromCharCode(104,95,57,56,95,115,117,98,98,97,110,100,0),String.fromCharCode(100,117,112,108,105,99,97,116,101,95,51,95,50,52,0)], [String.fromCharCode(102,95,52,50,95,108,111,99,97,108,108,121,0),String.fromCharCode(114,105,99,104,95,121,95,52,50,0)]]);
          let eabafadfadddbafeddddeeefeaaf9 = 0.0;
         smallbrightness8 += parseInt(`${libloggert}`);
         greenR.set(`${eabafadfadddbafeddddeeefeaaf9}`, parseInt(`${eabafadfadddbafeddddeeefeaaf9}`) & 3);
      }
      if ((parseInt(`${libloggert}`) - floatingJ.length) > 1) {
         libloggert += parseFloat(`${cornershootW ^ parseInt(`${libloggert}`)}`);
      }
         termsP -= parseFloat(`${cornershootW}`);
         floatingJ.push(parseInt(`${termsP}`) | 1);
      pageF += `${2 - pageF.length}`;
      pageF = `${exampleimage8 << (Math.min(Math.abs(3), 5))}`;
       let release_oyQ = 5;
       let roomF = String.fromCharCode(121,118,116,111,121,117,121,95,103,95,55,0);
         roomF = `${roomF.length}`;
      let playlistj = String.fromCharCode(51,97,52,109,119,117,52,110,0) == roomF;
      do {
          let baselineK = 0.0;
          let plashW = String.fromCharCode(102,95,50,53,95,99,111,109,112,108,105,99,97,116,105,111,110,0);
          let reddownarrowU = String.fromCharCode(100,101,99,111,109,112,111,115,101,95,110,95,57,56,0);
          let whatsappk = 2.0;
          let iconfeedbackt: Map<any, any> = new Map([[String.fromCharCode(98,95,56,49,95,107,98,100,119,105,110,0),String.fromCharCode(115,95,52,54,95,99,111,110,110,101,99,116,101,100,0)], [String.fromCharCode(104,111,117,114,108,121,95,119,95,49,48,48,0),String.fromCharCode(113,95,49,53,95,99,98,99,114,0)], [String.fromCharCode(105,100,99,116,120,95,113,95,50,54,0),String.fromCharCode(108,105,115,116,101,110,101,114,115,95,51,95,53,49,0)]]);
         roomF = `${reddownarrowU.length}`;
         baselineK += parseFloat(`${3 / (Math.max(4, parseInt(`${whatsappk}`)))}`);
         plashW = `${parseInt(`${baselineK}`)}`;
         reddownarrowU = "2";
         whatsappk -= 2 / (Math.max(7, plashW.length));
         iconfeedbackt.set(plashW, plashW.length << (Math.min(5, Math.abs(iconfeedbackt.size))));
         if (playlistj) {
            break;
         }
      } while (playlistj && ((4 * release_oyQ) < 2));
          let subinf = String.fromCharCode(108,95,56,49,95,109,115,115,100,115,112,0);
         roomF = `${roomF.length}`;
         subinf = `${subinf.length & subinf.length}`;
       let whiteO: Array<any> = [String.fromCharCode(100,99,116,101,108,101,109,95,113,95,57,53,0), String.fromCharCode(100,101,108,105,109,105,116,101,114,115,95,118,95,56,54,0)];
       let main_pg: Array<any> = [887, 967, 454];
          let redirecti = String.fromCharCode(109,95,51,57,95,105,108,108,101,103,97,108,0);
          let awayiconw = 5;
          let modeX = 1.0;
         release_oyQ %= Math.max(2, 1);
         redirecti += "1";
         awayiconw |= redirecti.length >> (Math.min(3, Math.abs(awayiconw)));
         modeX *= parseFloat(`${awayiconw % (Math.max(parseInt(`${modeX}`), 7))}`);
      let blacklistW = whiteO.length <= 7151857;
      do {
         whiteO.push(main_pg.length | 1);
         if (blacklistW) {
            break;
         }
      } while (blacklistW && ((2 * whiteO.length) >= 3 || (2 * roomF.length) >= 2));
      scorepopsound1.push(encryptorf.size >> (Math.min(Math.abs(1), 4)));
       let policyb: Array<any> = [388, 691, 178];
      while ((policyb.length ^ 4) >= 3 || 4 >= (policyb.length ^ policyb.length)) {
         policyb = [policyb.length];
         break;
      }
      for (let r = 0; r < 1; r++) {
         policyb.push(policyb.length);
      }
       let pingQ = String.fromCharCode(100,101,113,117,101,117,101,95,115,95,54,53,0);
       let episoder = String.fromCharCode(105,95,52,56,95,109,107,118,119,114,105,116,101,114,0);
      videocommonQ.set(`${libsentryT}`, ((libsentryT ? 5 : 5) ^ phoneP.length));
   for (let t = 0; t < 1; t++) {
      exampleimage8 /= Math.max(1, scorepopsound1.length | encryptorf.size);
   }
      videocommonQ.set(`${libsentryT}`, scorepopsound1.length + 3);

        if (handleClose) handleClose();

      libsentryT = (pageF.length >> (Math.min(5, Math.abs(videocommonQ.size)))) <= 38;
   for (let c = 0; c < 1; c++) {
       let penaltyshootV = String.fromCharCode(105,110,116,101,103,114,97,108,95,106,95,56,0);
          let main_pU = false;
          let libjsiK: Array<any> = [10, 435, 532];
         penaltyshootV += "3";
         main_pU = libjsiK.length >= 25;
         libjsiK.push(libjsiK.length % 3);
      for (let o = 0; o < 2; o++) {
          let become4 = String.fromCharCode(104,95,57,53,0);
          let iconsharefriendsQ: Map<any, any> = new Map([[String.fromCharCode(113,101,120,112,110,101,103,95,104,95,51,53,0),121], [String.fromCharCode(116,114,101,110,100,108,105,110,101,95,99,95,54,48,0),497], [String.fromCharCode(105,110,108,105,103,104,116,95,101,95,54,52,0),940]]);
          let anythinkB: Map<any, any> = new Map([[String.fromCharCode(98,95,55,48,95,118,101,114,105,102,121,0),String.fromCharCode(107,95,57,56,95,110,111,97,108,108,111,99,0)], [String.fromCharCode(113,95,49,57,95,114,101,115,117,109,101,100,0),String.fromCharCode(99,111,112,121,114,105,103,104,116,95,48,95,53,51,0)], [String.fromCharCode(103,110,111,115,105,115,95,109,95,50,54,0),String.fromCharCode(117,95,51,53,95,104,101,97,100,0)]]);
          let starW = 1;
         penaltyshootV += `${penaltyshootV.length * 2}`;
         become4 = `${anythinkB.size}`;
         iconsharefriendsQ = new Map([[`${iconsharefriendsQ.size}`, starW]]);
         anythinkB = new Map([[`${anythinkB.size}`, starW % (Math.max(anythinkB.size, 2))]]);
      }
      let calendara = penaltyshootV == String.fromCharCode(103,52,117,118,119,120,115,55,51,119,0);
      do {
          let dragz = String.fromCharCode(100,95,57,56,95,115,116,105,99,107,101,114,115,101,116,0);
          let sellmathbackground_: Array<any> = [159, 310];
          let faviconK = String.fromCharCode(112,105,112,101,108,105,110,105,110,103,95,120,95,52,48,0);
          let teamdetailsbgs = 1.0;
         penaltyshootV = `${sellmathbackground_.length << (Math.min(Math.abs(2), 1))}`;
         dragz = "3";
         sellmathbackground_.push(3);
         faviconK = "3";
         teamdetailsbgs -= parseFloat(`${parseInt(`${teamdetailsbgs}`) ^ 1}`);
         if (calendara) {
            break;
         }
      } while ((!penaltyshootV.endsWith(`${penaltyshootV.length}`)) && calendara);
      encryptorf.set(penaltyshootV, penaltyshootV.length + 2);
   }
       let moduleW = String.fromCharCode(113,95,49,55,95,116,111,107,104,122,0);
       let forme = 4;
       let bingD = false;
         moduleW += `${moduleW.length ^ 2}`;
       let viewsf: Array<any> = [865, 322, 514];
         forme >>= Math.min(Math.abs(forme), 5);
       let dice8 = String.fromCharCode(115,101,115,115,105,111,110,95,116,95,49,57,0);
       let leaguedetailsbgt = String.fromCharCode(107,95,53,50,95,108,122,111,120,0);
         leaguedetailsbgt = `${(String.fromCharCode(85,0) == moduleW ? viewsf.length : moduleW.length)}`;
      if (moduleW.length > dice8.length) {
         moduleW += `${(moduleW == String.fromCharCode(77,0) ? moduleW.length : viewsf.length)}`;
      }
      if (bingD || moduleW.length > 4) {
         moduleW += `${2 - forme}`;
      }
      for (let k = 0; k < 1; k++) {
         forme &= (String.fromCharCode(53,0) == moduleW ? dice8.length : moduleW.length);
      }
         leaguedetailsbgt = "2";
      encryptorf.set(moduleW, (moduleW.length - (bingD ? 1 : 3)));
   for (let v = 0; v < 1; v++) {
      encryptorf = new Map([[`${phoneP.length}`, 1]]);
   }
      selectu *= (parseFloat(`${String.fromCharCode(103,0) == pageF ? pageF.length : parseInt(`${selectu}`)}`));
      libsentryT = 82 > encryptorf.size || template_uO == String.fromCharCode(74,0);
   for (let s = 0; s < 2; s++) {
      closeO -= parseFloat(`${1}`);
   }
   let countryz = selectu <= 6466436.0;
   do {
      selectu -= (parseFloat(`${String.fromCharCode(118,0) == pageF ? videocommonQ.size : pageF.length}`));
      if (countryz) {
         break;
      }
   } while ((1.54 >= (selectu * 2.77) || (selectu * 2.77) >= 4.96) && countryz);

        Keyboard.dismiss();

      scorepopsound1 = [2];
   while (1 == pageF.length) {
      template_uO += `${template_uO.length}`;
      break;
   }
   let refreshborderlesst = String.fromCharCode(105,101,100,52,49,103,0) == template_uO;
   do {
      template_uO = `${2 << (Math.min(3, Math.abs(parseInt(`${closeO}`))))}`;
      if (refreshborderlesst) {
         break;
      }
   } while ((2 < (template_uO.length / (Math.max(4, videocommonQ.size)))) && refreshborderlesst);
   if (1 == (phoneP.length << (Math.min(Math.abs(2), 5))) && (phoneP.length << (Math.min(Math.abs(2), 3))) == 2) {
      videocommonQ = new Map([[`${videocommonQ.size}`, 3]]);
   }
      overlayn = new Map([[`${scorepopsound1.length}`, 2 - scorepopsound1.length]]);
      closeO += parseFloat(`${2 % (Math.max(2, phoneP.length))}`);
      overlayn = new Map([[`${videocommonQ.size}`, phoneP.length % 1]]);
      pageF += `${1 << (Math.min(2, Math.abs(overlayn.size)))}`;
        resetForm();
    }

    const onSubmitForm = async () => {
       let nextw = String.fromCharCode(105,95,51,52,95,100,98,115,116,97,116,0);
    let telegramX: Array<any> = [String.fromCharCode(114,101,100,117,99,101,100,95,102,95,57,54,0), String.fromCharCode(97,95,51,54,95,109,105,120,105,110,0)];
    let crossC = 5;
    let selectS: Array<any> = [726, 434];
    let application_: Array<any> = [854, 368];
    let controlsf = String.fromCharCode(114,101,99,105,112,95,55,95,56,51,0);
    let zoomP = 2;
    let securityf = String.fromCharCode(117,112,99,97,108,108,95,122,95,50,55,0);
    let inactivec = String.fromCharCode(107,95,52,95,102,105,108,116,101,114,105,110,103,0);
    let moonu = 3;
    let searcha = 4.0;
    let taiwanm = true;
    let tailp = 0;
    let collectionw = String.fromCharCode(109,95,50,55,95,118,105,97,98,108,101,0);
      crossC /= Math.max(4, moonu ^ selectS.length);
      searcha -= parseFloat(`${crossC % (Math.max(telegramX.length, 9))}`);

        if (referrerErrMsg !== null) return;

   while (2 < (securityf.length << (Math.min(Math.abs(1), 1)))) {
      selectS.push(parseInt(`${searcha}`));
      break;
   }
       let orangedownarrowJ = String.fromCharCode(108,105,110,101,97,114,95,119,95,57,54,0);
       let resultz: Map<any, any> = new Map([[String.fromCharCode(110,95,50,48,95,101,120,112,111,110,101,110,116,105,97,108,0),697], [String.fromCharCode(117,95,55,53,95,115,121,109,98,111,108,105,122,101,0),376], [String.fromCharCode(110,95,52,56,95,97,100,106,117,115,116,0),853]]);
       let halffieldimageh: Map<any, any> = new Map([[String.fromCharCode(116,101,108,101,103,114,97,95,52,95,53,51,0),928], [String.fromCharCode(103,100,112,114,95,97,95,54,56,0),331], [String.fromCharCode(122,95,50,52,95,112,97,114,101,110,0),834]]);
          let homeplayerq = true;
         resultz.set(orangedownarrowJ, halffieldimageh.size);
         homeplayerq = !homeplayerq;
      while ((orangedownarrowJ.length * halffieldimageh.size) < 2) {
          let videocommonu = String.fromCharCode(109,95,51,53,95,106,100,109,97,115,116,101,114,0);
          let hooks6 = true;
          let livesharec = 4.0;
          let redirectq: Array<any> = [936, 876, 339];
         halffieldimageh.set(`${livesharec}`, 1);
         videocommonu = `${((hooks6 ? 3 : 2) + 1)}`;
         hooks6 = videocommonu.startsWith(`${hooks6}`);
         livesharec /= Math.max((parseFloat(`${String.fromCharCode(84,0) == videocommonu ? videocommonu.length : (hooks6 ? 4 : 3)}`)), 4);
         redirectq.push(((hooks6 ? 5 : 3) / (Math.max(videocommonu.length, 7))));
         break;
      }
      zoomP <<= Math.min(Math.abs(2 / (Math.max(2, controlsf.length))), 2);

        if (isSubmitting) return;

      taiwanm = inactivec.length < 60;
   while (5 < (crossC | moonu) && 1 < (5 | crossC)) {
       let mergert = 4;
       let videobufferloading6 = 3;
       let typesf = 0;
       let textlayoutmanagern: Map<any, any> = new Map([[String.fromCharCode(114,116,108,95,103,95,53,48,0),928], [String.fromCharCode(116,111,100,97,121,115,95,100,95,51,50,0),227], [String.fromCharCode(112,97,115,115,101,100,95,99,95,54,48,0),893]]);
      let productz = 7898695 >= typesf;
      do {
         typesf <<= Math.min(2, Math.abs(mergert & textlayoutmanagern.size));
         if (productz) {
            break;
         }
      } while (productz && ((textlayoutmanagern.size ^ typesf) < 4));
         mergert /= Math.max(3, 4);
         typesf %= Math.max(textlayoutmanagern.size % (Math.max(9, mergert)), 2);
         mergert &= typesf;
      while (3 > (videobufferloading6 | typesf)) {
          let coreq = 1.0;
          let googlew = String.fromCharCode(101,122,111,115,95,51,95,49,57,0);
          let predictionarrowA = String.fromCharCode(121,95,57,50,95,121,101,116,0);
          let yellowtoredS = String.fromCharCode(114,101,103,105,111,110,115,95,112,95,49,53,0);
          let iconfeedbackv = 5.0;
         videobufferloading6 &= videobufferloading6 / (Math.max(5, predictionarrowA.length));
         coreq += (parseFloat(`${yellowtoredS == String.fromCharCode(85,0) ? parseInt(`${coreq}`) : yellowtoredS.length}`));
         googlew += `${parseInt(`${iconfeedbackv}`)}`;
         predictionarrowA = `${yellowtoredS.length % (Math.max(8, parseInt(`${iconfeedbackv}`)))}`;
         break;
      }
       let downQ = 3;
       let pnewinterstitialu = 0;
          let contextf = String.fromCharCode(120,95,51,51,95,115,104,97,114,101,100,0);
         typesf >>= Math.min(1, Math.abs(downQ));
         contextf = "1";
      if (5 > (5 - mergert) || 5 > (videobufferloading6 - mergert)) {
         mergert += videobufferloading6 << (Math.min(5, Math.abs(typesf)));
      }
      for (let v = 0; v < 3; v++) {
          let textinputr = 4;
          let cancelS = true;
          let j_position_ = 0.0;
          let stringsF = 4;
         textlayoutmanagern = new Map([[`${pnewinterstitialu}`, stringsF * 2]]);
         textinputr -= 1;
         cancelS = 74 < textinputr;
         j_position_ += (parseFloat(`${(cancelS ? 5 : 2) * parseInt(`${j_position_}`)}`));
         stringsF %= Math.max(2, ((cancelS ? 4 : 1) / (Math.max(textinputr, 3))));
      }
      let show3 = pnewinterstitialu >= 5536523;
      do {
          let incidentP: Map<any, any> = new Map([[String.fromCharCode(97,117,116,104,111,114,105,122,101,100,95,103,95,50,49,0),218], [String.fromCharCode(100,97,97,108,97,95,55,95,55,53,0),473]]);
          let handlerl = 5;
         pnewinterstitialu >>= Math.min(3, Math.abs(downQ));
         incidentP.set(`${handlerl}`, handlerl);
         if (show3) {
            break;
         }
      } while (show3 && (4 <= (textlayoutmanagern.size * 1) && (pnewinterstitialu * textlayoutmanagern.size) <= 1));
       let smallbrightness5 = String.fromCharCode(118,95,54,54,95,115,97,118,101,0);
         mergert &= 3 ^ pnewinterstitialu;
      moonu += 1 ^ inactivec.length;
      break;
   }
        setSubmitting(true);

       let saveH = false;
       let weatherW = 5.0;
         saveH = 57.85 < weatherW;
      while (saveH || 4.65 >= (weatherW - 5.2)) {
         saveH = !saveH;
         break;
      }
      for (let c = 0; c < 1; c++) {
         weatherW -= (parseInt(`${weatherW}`) << (Math.min(4, Math.abs((saveH ? 4 : 2)))));
      }
       let iconbackwhiteh: Map<any, any> = new Map([[String.fromCharCode(118,95,49,0),String.fromCharCode(99,112,120,95,57,95,54,55,0)], [String.fromCharCode(110,95,56,48,95,112,117,114,101,0),String.fromCharCode(110,95,56,49,95,115,112,101,101,100,0)]]);
       let o_player7: Map<any, any> = new Map([[String.fromCharCode(110,95,51,56,95,97,114,105,98,0),211], [String.fromCharCode(98,95,50,55,95,115,97,102,101,0),851]]);
      let subinu = 9712911.0 >= weatherW;
      do {
         weatherW /= Math.max(((saveH ? 1 : 3) % (Math.max(parseInt(`${weatherW}`), 10))), 1);
         if (subinu) {
            break;
         }
      } while ((!saveH) && subinu);
      let hometeamfieldM = weatherW >= 5692528.0;
      do {
          let layoutp = String.fromCharCode(110,97,109,101,100,95,121,95,53,55,0);
          let alerte = 3;
          let runtimer: Map<any, any> = new Map([[String.fromCharCode(100,101,102,97,117,108,116,95,97,95,49,57,0),623], [String.fromCharCode(107,95,52,51,0),243]]);
          let watchu: Map<any, any> = new Map([[String.fromCharCode(109,95,54,52,95,122,111,109,98,105,101,0),958], [String.fromCharCode(112,95,51,52,95,115,104,117,116,100,111,119,110,0),311]]);
         weatherW *= runtimer.size + alerte;
         layoutp += `${1 >> (Math.min(1, Math.abs(watchu.size)))}`;
         alerte *= layoutp.length;
         runtimer = new Map([[`${watchu.size}`, layoutp.length]]);
         if (hometeamfieldM) {
            break;
         }
      } while (hometeamfieldM && (3.39 <= (2.95 + weatherW)));
      zoomP *= securityf.length;
   let referrerG = 6118504 <= selectS.length;
   do {
      selectS = [moonu * telegramX.length];
      if (referrerG) {
         break;
      }
   } while (referrerG && (selectS.includes(zoomP)));

        try {

   let securityQ = telegramX.length >= 9032805;
   do {
      telegramX = [telegramX.length * 1];
      if (securityQ) {
         break;
      }
   } while (securityQ && (!nextw.includes(`${telegramX.length}`)));
       let paginationv = String.fromCharCode(114,111,119,95,121,95,56,55,0);
       let audienceF = String.fromCharCode(102,112,117,116,115,95,121,95,56,56,0);
       let basketballplayerplaceholderQ = true;
       let mailv = String.fromCharCode(101,95,56,50,95,117,110,119,114,97,112,112,101,100,0);
       let episodesK = String.fromCharCode(111,95,54,95,104,121,115,116,101,114,101,115,105,115,0);
       let nextY = 3;
      let inactive3 = audienceF.length >= 9067911;
      do {
         audienceF += `${nextY}`;
         if (inactive3) {
            break;
         }
      } while (inactive3 && (3 == episodesK.length));
       let colorsf = false;
       let libflipperf = false;
         episodesK += `${((libflipperf ? 5 : 2))}`;
          let mappinge: Map<any, any> = new Map([[String.fromCharCode(109,95,53,55,95,109,97,112,108,105,109,105,116,0),String.fromCharCode(118,95,52,51,95,114,101,99,121,99,108,101,0)], [String.fromCharCode(100,101,108,101,103,97,116,101,95,104,95,50,48,0),String.fromCharCode(112,114,101,100,101,99,111,100,101,95,122,95,52,0)]]);
          let defaultlogo0 = 3.0;
          let icondefaultthumbnailV = true;
         mailv += `${mailv.length}`;
         mappinge = new Map([[`${icondefaultthumbnailV}`, 2 * parseInt(`${defaultlogo0}`)]]);
         defaultlogo0 -= parseFloat(`${3}`);
         icondefaultthumbnailV = !icondefaultthumbnailV;
       let cornerc: Array<any> = [667, 702, 684];
       let libavdevicer: Array<any> = [429, 317];
       let fully = String.fromCharCode(103,95,50,49,95,100,101,115,116,114,111,121,101,100,0);
      while (paginationv.length == 1) {
         paginationv = "1";
         break;
      }
      telegramX.push(inactivec.length);
            await mayi_Injury.updateUsername({
                username: userState.user?.userName ?? '',
                referralCode: referrer,
            });
        } catch (err: any) {
            if (
                err.errors &&
                err.errors.referral_code
            ) {

   if (inactivec.length == 2 || securityf.length == 2) {
      securityf += "2";
   }
       let loginy: Map<any, any> = new Map([[String.fromCharCode(111,117,116,95,56,95,53,0),false ], [String.fromCharCode(107,95,57,95,112,114,101,112,101,110,100,0),true ], [String.fromCharCode(119,105,101,110,101,114,95,110,95,52,52,0),false ]]);
         loginy.set(`${loginy.size}`, loginy.size);
         loginy.set(`${loginy.size}`, loginy.size << (Math.min(Math.abs(1), 5)));
      let updates0 = loginy.size <= 8858751;
      do {
         loginy = new Map([[`${loginy.size}`, 2 | loginy.size]]);
         if (updates0) {
            break;
         }
      } while ((Array.from(loginy.values()).includes(loginy.size)) && updates0);
      crossC |= loginy.size;
                setReferrerErrMsg(err.errors.referral_code);
            }

            setSubmitting(false);

   let time_rJ = application_.length <= 5758425;
   do {
      application_ = [1];
      if (time_rJ) {
         break;
      }
   } while ((application_.length >= zoomP) && time_rJ);
      securityf = `${moonu}`;
            return;

   for (let e = 0; e < 1; e++) {
      searcha *= parseFloat(`${application_.length - 2}`);
   }
   if (zoomP < 1) {
      moonu <<= Math.min(1, Math.abs(((taiwanm ? 5 : 5) + telegramX.length)));
   }
        }

        const result = await mayi_Injury.getUserDetails();

   while (taiwanm) {
      controlsf = "1";
      break;
   }
      moonu >>= Math.min(parseInt(`${Math.abs(((taiwanm ? 3 : 5) / (Math.max(application_.length, 5))))}`), 3);
        if (result == null) {

       let pathi = String.fromCharCode(100,95,53,55,95,108,108,118,105,100,100,115,112,101,110,99,0);
       let orientationz = 5.0;
       let utils5 = 2;
      let right4 = 7001236 >= utils5;
      do {
          let goal3 = String.fromCharCode(97,103,103,105,110,102,111,95,54,95,52,52,0);
          let statsnomoredatah = String.fromCharCode(102,95,51,49,95,105,112,111,108,0);
          let untickO = String.fromCharCode(115,104,111,119,95,120,95,55,49,0);
         utils5 /= Math.max(4, untickO.length / (Math.max(2, 6)));
         goal3 = `${statsnomoredatah.length}`;
         statsnomoredatah += `${3 & statsnomoredatah.length}`;
         untickO = `${statsnomoredatah.length * 1}`;
         if (right4) {
            break;
         }
      } while (right4 && (5 > utils5));
      if (!pathi.endsWith(`${orientationz}`)) {
          let gradlewI = String.fromCharCode(98,95,52,57,95,116,111,121,115,0);
          let screenB: Map<any, any> = new Map([[String.fromCharCode(122,95,57,95,111,98,115,101,114,118,101,114,115,0),true ], [String.fromCharCode(115,95,50,52,95,117,110,100,101,114,108,121,105,110,103,0),false ]]);
         pathi += "2";
         gradlewI += `${screenB.size ^ 2}`;
         screenB = new Map([[`${screenB.size}`, (gradlewI == String.fromCharCode(71,0) ? gradlewI.length : screenB.size)]]);
      }
         pathi += `${parseInt(`${orientationz}`)}`;
      while (1 <= pathi.length) {
         orientationz /= Math.max(1, parseFloat(`${2}`));
         break;
      }
       let manifestZ: Array<any> = [754, 852];
       let textz: Array<any> = [778, 893];
         utils5 /= Math.max(2, parseInt(`${orientationz}`) ^ textz.length);
      for (let b = 0; b < 2; b++) {
         orientationz -= parseFloat(`${2 | pathi.length}`);
      }
         orientationz *= parseFloat(`${textz.length & manifestZ.length}`);
      if (2 < (utils5 + parseInt(`${orientationz}`)) || (parseFloat(`${utils5}`) + orientationz) < 1.67) {
         utils5 ^= manifestZ.length;
      }
      telegramX = [utils5];
      nextw += `${selectS.length >> (Math.min(Math.abs(2), 4))}`;
            return;
        }

        await dispatch(updateUserAuth(result));

   while (3 < (zoomP >> (Math.min(Math.abs(2), 4)))) {
       let graphb = String.fromCharCode(99,105,112,104,101,114,98,121,110,97,109,101,95,100,95,56,50,0);
       let viewsG = 2;
       let informationY = 4.0;
       let comment_ = 5;
       let codea: Map<any, any> = new Map([[String.fromCharCode(109,95,53,49,95,98,114,101,97,100,99,114,117,109,98,115,0),891], [String.fromCharCode(117,95,55,57,95,105,110,116,101,114,114,117,112,116,0),124], [String.fromCharCode(115,95,51,49,95,99,100,101,114,114,111,114,0),994]]);
       let specq: Map<any, any> = new Map([[String.fromCharCode(102,111,99,117,115,95,119,95,57,53,0),621], [String.fromCharCode(110,95,52,52,95,116,101,115,116,111,114,105,103,0),427], [String.fromCharCode(101,120,97,99,116,108,121,95,103,95,57,50,0),186]]);
      if (informationY == 1.24) {
         informationY += parseFloat(`${2 / (Math.max(comment_, 3))}`);
      }
       let floaterm: Array<any> = [87, 296];
      for (let e = 0; e < 1; e++) {
         informationY += parseFloat(`${graphb.length | specq.size}`);
      }
         viewsG /= Math.max(5, 1);
         codea = new Map([[`${specq.size}`, 1]]);
      if (!floaterm.includes(viewsG)) {
         floaterm = [2 % (Math.max(9, viewsG))];
      }
          let flipperI = String.fromCharCode(111,117,116,103,111,105,110,103,95,108,95,50,54,0);
          let activityD: Map<any, any> = new Map([[String.fromCharCode(104,95,55,48,95,98,101,116,104,115,111,102,116,118,105,100,0),true ], [String.fromCharCode(120,95,49,54,95,114,101,100,100,105,116,0),false ]]);
          let changeD: Array<any> = [82, 776, 269];
         comment_ ^= (graphb == String.fromCharCode(110,0) ? graphb.length : comment_);
         flipperI = `${3 + activityD.size}`;
         activityD = new Map([[`${changeD.length}`, changeD.length % 3]]);
       let shielddonet = 0.0;
          let vipsportu = true;
         graphb = `${(3 * (vipsportu ? 5 : 1))}`;
          let gemfilem = 0.0;
         codea = new Map([[`${viewsG}`, graphb.length % (Math.max(2, 4))]]);
         gemfilem -= parseFloat(`${1 | parseInt(`${gemfilem}`)}`);
       let policyA: Map<any, any> = new Map([[String.fromCharCode(108,95,56,53,95,103,114,101,101,100,121,0),331], [String.fromCharCode(109,97,110,100,101,108,98,114,111,116,95,104,95,56,50,0),818]]);
      zoomP += crossC / (Math.max(5, zoomP));
      break;
   }
      moonu %= Math.max(2, selectS.length | securityf.length);
        dispatch(changeScreenAction("修改成功"));

      nextw = `${telegramX.length}`;
   while ((1 * controlsf.length) == 4) {
      controlsf = "2";
      break;
   }

        Keyboard.dismiss();

       let imagenetworkerr6: Map<any, any> = new Map([[String.fromCharCode(108,95,53,53,95,98,97,115,101,108,105,110,101,0),163], [String.fromCharCode(122,95,52,52,95,102,108,97,99,100,115,112,0),329], [String.fromCharCode(112,114,101,99,111,109,112,111,115,101,100,95,120,95,55,55,0),271]]);
       let floater_ = String.fromCharCode(99,97,108,108,105,115,116,111,95,110,95,54,55,0);
       let x_unlockJ = String.fromCharCode(110,95,49,51,95,115,97,109,112,108,101,0);
      for (let x = 0; x < 3; x++) {
         floater_ = `${imagenetworkerr6.size << (Math.min(Math.abs(1), 2))}`;
      }
      for (let c = 0; c < 1; c++) {
         x_unlockJ += `${floater_.length + 2}`;
      }
      if (floater_.length <= imagenetworkerr6.size) {
          let layoutW = String.fromCharCode(98,95,49,48,95,102,108,111,97,116,105,110,103,0);
          let mappingI = String.fromCharCode(101,95,49,54,95,111,117,116,0);
         imagenetworkerr6 = new Map([[`${imagenetworkerr6.size}`, mappingI.length]]);
         layoutW = `${2 % (Math.max(3, layoutW.length))}`;
         mappingI = `${1 + layoutW.length}`;
      }
         x_unlockJ = `${imagenetworkerr6.size}`;
      let defaultteamr = 6238822 >= floater_.length;
      do {
         floater_ = `${1 - floater_.length}`;
         if (defaultteamr) {
            break;
         }
      } while ((floater_.endsWith(`${imagenetworkerr6.size}`)) && defaultteamr);
          let castingE = 2;
         imagenetworkerr6.set(floater_, x_unlockJ.length + floater_.length);
         castingE /= Math.max(5, castingE);
      let signinupQ = floater_ == String.fromCharCode(119,48,121,108,113,116,48,57,121,102,0);
      do {
         floater_ += `${imagenetworkerr6.size}`;
         if (signinupQ) {
            break;
         }
      } while ((x_unlockJ.length < 5 || floater_.length < 5) && signinupQ);
      if (4 == (imagenetworkerr6.size - x_unlockJ.length) && (4 - imagenetworkerr6.size) == 4) {
         x_unlockJ += `${2 * floater_.length}`;
      }
      let borderless8 = 8989445 >= imagenetworkerr6.size;
      do {
         imagenetworkerr6.set(floater_, x_unlockJ.length | floater_.length);
         if (borderless8) {
            break;
         }
      } while (borderless8 && ((x_unlockJ.length ^ 2) > 2));
      taiwanm = controlsf == String.fromCharCode(118,0);
       let linkW = String.fromCharCode(102,100,99,116,95,101,95,56,50,0);
       let moduleg: Array<any> = [32, 435];
         moduleg = [2 * linkW.length];
         linkW = `${(linkW == String.fromCharCode(112,0) ? moduleg.length : linkW.length)}`;
          let gradlewO: Map<any, any> = new Map([[String.fromCharCode(108,95,54,50,95,99,121,99,108,101,0),String.fromCharCode(103,95,53,55,95,109,97,110,97,103,101,115,0)], [String.fromCharCode(114,101,102,99,111,117,110,116,95,121,95,53,49,0),String.fromCharCode(116,95,55,49,95,97,108,112,104,97,108,101,115,115,0)]]);
          let styleE = String.fromCharCode(115,117,99,104,95,120,95,51,57,0);
          let arrowk: Array<any> = [String.fromCharCode(108,95,56,55,95,100,98,105,0), String.fromCharCode(102,117,115,101,95,107,95,49,49,0), String.fromCharCode(109,105,99,114,111,112,104,111,110,101,95,55,95,49,52,0)];
         moduleg.push(1 >> (Math.min(1, moduleg.length)));
         gradlewO = new Map([[`${gradlewO.size}`, 1]]);
         styleE = `${gradlewO.size}`;
         arrowk = [arrowk.length ^ 3];
       let topicr: Array<any> = [493, 702, 396];
         linkW = `${linkW.length}`;
          let acceptedk: Map<any, any> = new Map([[String.fromCharCode(117,110,114,101,103,105,115,116,101,114,95,117,95,53,51,0),String.fromCharCode(105,110,116,101,114,112,111,108,97,116,105,111,110,95,109,95,54,51,0)], [String.fromCharCode(111,95,49,54,95,102,111,111,116,101,114,0),String.fromCharCode(102,114,97,103,109,101,110,116,115,95,103,95,48,0)], [String.fromCharCode(98,95,53,52,95,116,115,120,0),String.fromCharCode(104,95,54,55,95,102,116,118,109,110,111,100,101,0)]]);
          let whatsappb = String.fromCharCode(120,95,50,54,95,98,105,116,114,118,0);
          let nextJ: Map<any, any> = new Map([[String.fromCharCode(103,95,55,55,95,115,121,110,99,109,97,114,107,101,114,0),17], [String.fromCharCode(97,95,51,55,95,115,101,115,115,105,111,110,105,100,0),474]]);
         linkW += "1";
         acceptedk.set(`${nextJ.size}`, 1 ^ nextJ.size);
         whatsappb += `${whatsappb.length / 1}`;
      controlsf += `${inactivec.length >> (Math.min(1, linkW.length))}`;
        navigation.navigate("Home", {
            screen: "Profile",
        });

   if ((1 ^ nextw.length) > 3 || 2 > (zoomP ^ 1)) {
       let reactnavigation8 = 3.0;
       let playercommonR = 3;
       let predictionbannershared2 = String.fromCharCode(118,95,55,55,95,101,110,116,105,114,101,108,121,0);
       let arrowrightwithtailm = 4;
      if (2 >= (playercommonR >> (Math.min(Math.abs(1), 3)))) {
          let short_hoE = String.fromCharCode(105,110,116,101,114,97,99,116,105,118,101,108,108,121,95,119,95,50,53,0);
          let imagenomoredataz = String.fromCharCode(114,95,48,0);
          let emojiX = 1.0;
         playercommonR >>= Math.min(short_hoE.length, 4);
         short_hoE += `${imagenomoredataz.length}`;
         imagenomoredataz += "3";
         emojiX += (parseFloat(`${imagenomoredataz == String.fromCharCode(54,0) ? imagenomoredataz.length : parseInt(`${emojiX}`)}`));
      }
       let informatione: Array<any> = [486, 887, 952];
       let tailG: Array<any> = [679, 676, 431];
      let text1 = informatione.length <= 7257953;
      do {
         informatione.push(informatione.length ^ 2);
         if (text1) {
            break;
         }
      } while (text1 && (2 > (2 >> (Math.min(1, tailG.length))) || (informatione.length >> (Math.min(tailG.length, 5))) > 2));
       let catalogR = String.fromCharCode(98,108,97,109,101,100,95,108,95,57,54,0);
      let bgvipsport1 = 6546177 <= playercommonR;
      do {
         playercommonR *= parseInt(`${reactnavigation8}`) * playercommonR;
         if (bgvipsport1) {
            break;
         }
      } while ((5 == (predictionbannershared2.length | 3) || (3 | predictionbannershared2.length) == 4) && bgvipsport1);
         playercommonR *= catalogR.length ^ 1;
         playercommonR -= 2 - arrowrightwithtailm;
      let iconclosewhitewithbgO = 6786033 <= playercommonR;
      do {
         playercommonR <<= Math.min(3, Math.abs(playercommonR));
         if (iconclosewhitewithbgO) {
            break;
         }
      } while (((5 % (Math.max(8, playercommonR))) > 3 || 5.37 > (playercommonR * reactnavigation8)) && iconclosewhitewithbgO);
      for (let j = 0; j < 2; j++) {
          let defaultprofilepicI = String.fromCharCode(100,95,51,49,0);
          let rootU = false;
          let sentryb = 4.0;
          let trashL: Map<any, any> = new Map([[String.fromCharCode(118,95,57,52,95,115,105,109,105,108,97,114,105,116,121,0),149], [String.fromCharCode(99,117,114,114,95,50,95,51,52,0),578], [String.fromCharCode(100,95,49,48,95,108,105,98,114,97,114,121,0),674]]);
          let watchW: Map<any, any> = new Map([[String.fromCharCode(100,97,116,97,115,95,111,95,53,57,0),488], [String.fromCharCode(120,95,54,51,95,99,111,108,111,114,115,112,97,99,101,0),563], [String.fromCharCode(104,101,97,114,116,98,101,97,116,95,108,95,49,57,0),533]]);
         informatione = [catalogR.length];
         defaultprofilepicI += `${parseInt(`${sentryb}`)}`;
         rootU = trashL.size > 81;
         sentryb *= (defaultprofilepicI == String.fromCharCode(114,0) ? trashL.size : defaultprofilepicI.length);
         watchW = new Map([[`${rootU}`, (String.fromCharCode(95,0) == defaultprofilepicI ? defaultprofilepicI.length : (rootU ? 1 : 1))]]);
      }
      if (2 > (catalogR.length & tailG.length)) {
         tailG = [1];
      }
          let indicatorJ = String.fromCharCode(113,95,56,52,95,116,114,97,110,115,102,101,114,114,105,110,103,0);
          let rncoreY = String.fromCharCode(106,95,52,53,95,100,99,97,100,101,99,0);
         arrowrightwithtailm += predictionbannershared2.length;
         indicatorJ = `${rncoreY.length}`;
         rncoreY = `${rncoreY.length}`;
      for (let u = 0; u < 1; u++) {
         tailG.push(informatione.length % (Math.max(1, 10)));
      }
      nextw += `${arrowrightwithtailm}`;
   }
   for (let v = 0; v < 2; v++) {
      telegramX = [1];
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
                                source={require("@static/images/invite/assistTextinputHook.png")}
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