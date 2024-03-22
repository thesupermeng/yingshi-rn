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
       let backwhite8 = String.fromCharCode(107,95,54,54,95,100,105,105,110,0);
    let predictionactiveo = 2;
    let sidey = 4;
    let selectr = String.fromCharCode(104,97,115,104,105,110,105,116,95,111,95,53,54,0);
    let showG = 5;
    let defaultlogoC = String.fromCharCode(116,104,114,101,97,100,110,97,109,101,95,113,95,56,49,0);
    let tooltipsL = String.fromCharCode(101,95,55,52,95,116,114,97,110,115,108,105,116,101,114,97,116,105,111,110,0);
    let placeholderg: Array<any> = [152, 639, 424];
    let halfl: Array<any> = [872, 943, 335];
    let privacyG = 3.0;
    let rankm = 5;
    let penaltymatchiconw = String.fromCharCode(104,105,103,104,112,97,115,115,95,52,95,57,51,0);
      showG %= Math.max(2, (String.fromCharCode(50,0) == backwhite8 ? sidey : backwhite8.length));
       let prediction6 = String.fromCharCode(112,104,112,95,102,95,52,50,0);
         prediction6 += `${prediction6.length}`;
       let bgvipsportm = String.fromCharCode(115,104,111,114,116,101,115,116,95,114,95,49,48,0);
      if (bgvipsportm.endsWith(prediction6)) {
         prediction6 += `${3 << (Math.min(3, prediction6.length))}`;
      }
      predictionactiveo += placeholderg.length;
      predictionactiveo -= halfl.length;
      tooltipsL += `${tooltipsL.length}`;
       let splasht = String.fromCharCode(101,95,54,52,95,97,117,110,105,110,105,116,0);
       let thailandN = String.fromCharCode(116,95,48,95,101,112,115,105,108,111,110,0);
       let fieldG = String.fromCharCode(99,104,117,110,107,115,95,56,95,52,52,0);
          let guide0 = String.fromCharCode(113,117,97,110,116,95,52,95,51,51,0);
         splasht += `${splasht.length}`;
         guide0 += "3";
      while (thailandN.length > fieldG.length) {
         thailandN = `${2 & thailandN.length}`;
         break;
      }
      predictionactiveo &= predictionactiveo + backwhite8.length;
      backwhite8 += `${defaultlogoC.length}`;
   while (sidey >= predictionactiveo) {
      sidey &= 1 ^ halfl.length;
      break;
   }
      predictionactiveo %= Math.max(placeholderg.length << (Math.min(Math.abs(2), 4)), 2);
      placeholderg.push(placeholderg.length);
      tooltipsL = "1";
   for (let z = 0; z < 3; z++) {
       let dependenciesn: Map<any, any> = new Map([[String.fromCharCode(116,104,114,101,115,104,111,108,100,101,100,95,113,95,51,49,0),true ], [String.fromCharCode(102,114,111,109,98,121,116,101,97,114,114,97,121,95,115,95,54,49,0),false ]]);
       let statsL: Map<any, any> = new Map([[String.fromCharCode(110,117,109,98,101,114,115,95,118,95,57,48,0),String.fromCharCode(119,95,54,54,95,100,105,115,99,0)], [String.fromCharCode(115,95,52,55,95,97,108,103,115,0),String.fromCharCode(115,101,109,97,112,104,111,114,101,95,101,95,49,49,0)]]);
       let foregroundY = 2.0;
       let skip5 = String.fromCharCode(121,95,54,53,95,102,97,99,101,115,0);
          let loginp: Map<any, any> = new Map([[String.fromCharCode(108,95,53,52,95,115,101,101,107,105,110,103,0),String.fromCharCode(97,115,115,111,99,105,97,116,105,111,110,95,115,95,52,52,0)], [String.fromCharCode(107,95,53,52,95,111,98,116,97,105,110,101,114,0),String.fromCharCode(98,101,99,97,109,101,95,104,95,57,53,0)], [String.fromCharCode(102,105,110,103,101,114,112,114,105,110,116,115,95,122,95,51,49,0),String.fromCharCode(112,114,101,115,101,110,99,101,115,95,55,95,57,49,0)]]);
         skip5 += `${dependenciesn.size << (Math.min(Math.abs(statsL.size), 1))}`;
         loginp = new Map([[`${loginp.size}`, loginp.size]]);
          let commentc = String.fromCharCode(119,97,118,101,108,101,116,95,111,95,57,0);
          let eighteenU = 1.0;
          let liveshareg = String.fromCharCode(104,95,56,51,95,108,105,110,101,0);
         statsL.set(liveshareg, 2 - skip5.length);
         commentc += `${commentc.length}`;
         eighteenU /= Math.max(3, commentc.length - parseInt(`${eighteenU}`));
         liveshareg = `${2 ^ commentc.length}`;
       let iconsubssuccessn = 0.0;
          let chinasamea = String.fromCharCode(114,101,115,111,108,118,101,95,49,95,54,52,0);
          let textlayoutmanagerr = 5.0;
          let gifgoal0 = 2.0;
         statsL = new Map([[`${gifgoal0}`, parseInt(`${gifgoal0}`) << (Math.min(Math.abs(3), 2))]]);
         chinasamea = `${3 ^ chinasamea.length}`;
         textlayoutmanagerr += parseFloat(`${parseInt(`${textlayoutmanagerr}`)}`);
         foregroundY *= parseFloat(`${parseInt(`${iconsubssuccessn}`) * dependenciesn.size}`);
          let libimagepipelineR = String.fromCharCode(111,95,56,53,95,109,97,120,106,0);
          let cornershooto: Array<any> = [String.fromCharCode(115,116,97,110,100,97,114,100,115,95,121,95,56,0), String.fromCharCode(105,100,108,101,95,53,95,56,48,0)];
         iconsubssuccessn /= Math.max(parseFloat(`${skip5.length}`), 3);
         libimagepipelineR = `${libimagepipelineR.length}`;
         cornershooto = [cornershooto.length];
         skip5 += `${3 & parseInt(`${iconsubssuccessn}`)}`;
      for (let z = 0; z < 1; z++) {
          let whitevideolivef: Map<any, any> = new Map([[String.fromCharCode(115,116,97,121,95,51,95,51,55,0),640], [String.fromCharCode(101,95,56,49,95,105,110,100,101,102,105,110,105,116,101,0),714], [String.fromCharCode(108,111,103,105,115,116,105,99,95,48,95,51,53,0),483]]);
          let nbatrophyb = 4;
          let placementa = String.fromCharCode(100,116,115,95,105,95,51,55,0);
          let handler5 = 1.0;
          let feedbackV = String.fromCharCode(105,95,49,52,95,112,111,119,0);
         skip5 += `${statsL.size / 1}`;
         whitevideolivef = new Map([[`${handler5}`, feedbackV.length]]);
         nbatrophyb ^= parseInt(`${handler5}`) / (Math.max(placementa.length, 4));
         placementa = `${nbatrophyb << (Math.min(Math.abs(whitevideolivef.size), 2))}`;
         feedbackV = `${placementa.length}`;
      }
      for (let f = 0; f < 1; f++) {
         iconsubssuccessn *= parseFloat(`${2}`);
      }
      for (let g = 0; g < 1; g++) {
          let appsZ: Map<any, any> = new Map([[String.fromCharCode(119,104,105,116,101,108,105,115,116,95,99,95,55,52,0),449], [String.fromCharCode(102,114,101,113,117,101,110,99,121,95,49,95,57,49,0),299]]);
          let release_dux = 5.0;
         statsL.set(`${release_dux}`, statsL.size << (Math.min(Math.abs(3), 5)));
         appsZ = new Map([[`${appsZ.size}`, appsZ.size]]);
         release_dux -= 2 + appsZ.size;
      }
       let tempnodatagifE = 5.0;
          let half_ = String.fromCharCode(102,99,116,108,95,106,95,52,55,0);
         statsL.set(`${half_}`, 3);
      privacyG += selectr.length >> (Math.min(2, Math.abs(dependenciesn.size)));
   }
   let largesoundt = 9396801 >= predictionactiveo;
   do {
      predictionactiveo &= sidey / (Math.max(parseInt(`${privacyG}`), 3));
      if (largesoundt) {
         break;
      }
   } while (largesoundt && (2 < (backwhite8.length + 5) || (predictionactiveo + backwhite8.length) < 5));
      tooltipsL = "1";

        setReferrer('');

      predictionactiveo <<= Math.min(3, Math.abs(3));
   if ((placeholderg.length >> (Math.min(Math.abs(5), 2))) < 3 || (placeholderg.length >> (Math.min(Math.abs(5), 2))) < 1) {
       let tumbnailH = true;
         tumbnailH = (tumbnailH ? !tumbnailH : tumbnailH);
         tumbnailH = !tumbnailH || !tumbnailH;
       let znewsg: Map<any, any> = new Map([[String.fromCharCode(116,114,105,97,110,103,117,108,97,116,105,111,110,95,104,95,52,57,0),560], [String.fromCharCode(119,101,108,99,104,95,110,95,54,54,0),577], [String.fromCharCode(100,95,57,52,95,99,112,117,117,115,101,100,0),237]]);
       let emoji9: Map<any, any> = new Map([[String.fromCharCode(97,99,108,114,95,108,95,51,50,0),String.fromCharCode(111,119,110,101,114,95,101,95,57,57,0)], [String.fromCharCode(97,114,114,105,118,97,108,95,100,95,49,49,0),String.fromCharCode(99,95,49,49,95,97,118,102,105,108,116,101,114,0)], [String.fromCharCode(97,95,50,49,95,99,116,120,112,0),String.fromCharCode(108,105,98,101,114,116,121,95,52,95,49,51,0)]]);
      placeholderg.push(tooltipsL.length);
   }
   while (!selectr.includes(`${showG}`)) {
       let iconnotificationnewN = 1.0;
       let forwardE = 2;
      while (iconnotificationnewN <= 1.68) {
         iconnotificationnewN += parseFloat(`${1 ^ forwardE}`);
         break;
      }
      let interstitialb = 7615798 >= forwardE;
      do {
          let related9 = 2;
          let stylesU = String.fromCharCode(122,95,56,57,95,117,110,105,102,105,101,100,0);
          let mbjscommon2 = 0.0;
          let mbjscommong = 0.0;
          let moonG = 3;
         forwardE %= Math.max(related9, 4);
         stylesU += `${parseInt(`${mbjscommong}`) & 1}`;
         mbjscommon2 -= parseFloat(`${stylesU.length}`);
         mbjscommong /= Math.max(1, parseFloat(`${1}`));
         moonG *= parseInt(`${mbjscommon2}`) & parseInt(`${mbjscommong}`);
         if (interstitialb) {
            break;
         }
      } while ((forwardE < iconnotificationnewN) && interstitialb);
      for (let d = 0; d < 3; d++) {
         iconnotificationnewN /= Math.max(2, parseFloat(`${parseInt(`${iconnotificationnewN}`) << (Math.min(1, Math.abs(forwardE)))}`));
      }
      while (2.96 > (1.6 * iconnotificationnewN) && (iconnotificationnewN * parseFloat(`${forwardE}`)) > 1.6) {
          let sheetL = String.fromCharCode(102,116,118,98,108,97,110,107,95,50,95,54,0);
          let analyticN = String.fromCharCode(115,95,54,52,95,101,110,117,109,115,0);
          let iconviewergifV = 0.0;
          let styleV = String.fromCharCode(99,114,117,110,95,103,95,50,55,0);
          let phone7 = 5;
         forwardE ^= parseInt(`${iconviewergifV}`) % 1;
         sheetL += `${phone7 + 1}`;
         analyticN += `${(sheetL == String.fromCharCode(108,0) ? sheetL.length : phone7)}`;
         iconviewergifV -= parseFloat(`${1 % (Math.max(1, phone7))}`);
         styleV = `${3 << (Math.min(2, Math.abs(phone7)))}`;
         break;
      }
      while (3.69 > (5.95 * iconnotificationnewN) && 5.95 > (iconnotificationnewN * parseFloat(`${forwardE}`))) {
          let homeiconl = String.fromCharCode(107,95,57,57,95,100,99,109,112,0);
          let entry_ = 2.0;
          let reportN: Map<any, any> = new Map([[String.fromCharCode(119,95,54,57,95,112,114,111,103,114,97,109,0),449], [String.fromCharCode(109,101,116,97,100,97,116,97,115,101,116,95,57,95,49,56,0),836]]);
          let private_z9i = 0;
         iconnotificationnewN *= parseFloat(`${parseInt(`${entry_}`)}`);
         homeiconl = "3";
         entry_ += reportN.size | homeiconl.length;
         reportN = new Map([[`${reportN.size}`, 3]]);
         private_z9i &= homeiconl.length;
         break;
      }
      let form9 = 9516557.0 >= iconnotificationnewN;
      do {
          let viewerO: Map<any, any> = new Map([[String.fromCharCode(116,105,108,101,95,53,95,55,49,0),String.fromCharCode(116,95,49,57,95,114,101,99,101,105,118,101,0)], [String.fromCharCode(104,95,56,53,95,102,97,109,105,108,121,0),String.fromCharCode(122,95,50,49,95,118,105,115,98,108,101,0)]]);
          let r_hashC = String.fromCharCode(98,95,54,55,95,101,110,99,111,100,105,110,103,115,0);
          let valuesU = 4.0;
         iconnotificationnewN /= Math.max(2, parseFloat(`${viewerO.size | 2}`));
         viewerO.set(`${valuesU}`, parseInt(`${valuesU}`));
         r_hashC += `${r_hashC.length}`;
         if (form9) {
            break;
         }
      } while (form9 && ((forwardE - iconnotificationnewN) < 4.72));
      selectr = `${2 & backwhite8.length}`;
      break;
   }
      selectr += `${selectr.length}`;
   for (let e = 0; e < 1; e++) {
      halfl = [2];
   }
   for (let v = 0; v < 3; v++) {
      predictionactiveo <<= Math.min(5, selectr.length);
   }
   while (!defaultlogoC.includes(`${privacyG}`)) {
      privacyG /= Math.max(2, tooltipsL.length % 2);
      break;
   }
   while (5 >= (showG + selectr.length) || (selectr.length + showG) >= 5) {
      showG &= 3 << (Math.min(4, backwhite8.length));
      break;
   }
   let strings0 = predictionactiveo <= 7087327;
   do {
      predictionactiveo %= Math.max(3, halfl.length | sidey);
      if (strings0) {
         break;
      }
   } while (strings0 && (5 < (predictionactiveo / (Math.max(selectr.length, 8))) || 5 < (selectr.length / (Math.max(6, predictionactiveo)))));
       let uploadf = false;
       let backwhitez: Array<any> = [840, 903, 639];
       let circlee = 1;
      while (!uploadf) {
         uploadf = 31 < circlee && uploadf;
         break;
      }
         backwhitez.push(2);
          let reactnativeratingsP = String.fromCharCode(102,102,105,111,95,106,95,50,51,0);
          let iconscheduleg: Array<any> = [112, 710];
          let relatedO = String.fromCharCode(115,95,49,54,95,119,101,108,99,104,0);
         circlee -= ((uploadf ? 1 : 1));
         reactnativeratingsP += `${reactnativeratingsP.length}`;
         iconscheduleg.push(iconscheduleg.length);
         relatedO += `${iconscheduleg.length - 2}`;
          let orangel: Array<any> = [String.fromCharCode(104,95,54,57,95,102,114,105,101,110,100,0), String.fromCharCode(117,105,110,116,108,101,95,115,95,51,0), String.fromCharCode(97,116,116,97,99,104,109,101,110,116,95,49,95,53,57,0)];
         uploadf = !uploadf;
         orangel = [orangel.length - 2];
      if (uploadf) {
          let cornershootP: Array<any> = [876, 895, 887];
         circlee += ((uploadf ? 5 : 4) % 2);
         cornershootP.push(cornershootP.length << (Math.min(2, cornershootP.length)));
      }
      for (let z = 0; z < 2; z++) {
         circlee >>= Math.min(1, backwhitez.length);
      }
      while (!uploadf) {
         backwhitez = [((uploadf ? 1 : 2) * backwhitez.length)];
         break;
      }
      for (let i = 0; i < 2; i++) {
         uploadf = ((backwhitez.length ^ (uploadf ? 69 : backwhitez.length)) == 69);
      }
      for (let c = 0; c < 3; c++) {
         backwhitez = [backwhitez.length];
      }
      backwhite8 = `${placeholderg.length}`;
      halfl.push(1 << (Math.min(3, selectr.length)));
       let modulesV = 2;
       let winde = String.fromCharCode(114,95,53,54,95,105,110,116,116,121,112,101,115,0);
         modulesV >>= Math.min(5, Math.abs(2));
       let grey1 = 0.0;
      if (winde.length > 3) {
         winde = `${(String.fromCharCode(117,0) == winde ? parseInt(`${grey1}`) : winde.length)}`;
      }
      for (let e = 0; e < 2; e++) {
         winde += `${winde.length & 1}`;
      }
         winde = `${winde.length ^ 2}`;
      let sansU = winde == String.fromCharCode(95,113,51,100,51,0);
      do {
         winde = `${winde.length % 3}`;
         if (sansU) {
            break;
         }
      } while (sansU && (4 > modulesV));
      backwhite8 += "3";
      selectr = `${selectr.length & defaultlogoC.length}`;
        setReferrerErrMsg(null);
    }

    const onClose = () => {
       let backB = 5.0;
    let downloaderO = String.fromCharCode(112,97,114,97,108,108,97,120,95,120,95,49,50,0);
    let pangleD = String.fromCharCode(97,115,121,109,95,121,95,56,0);
    let dependenciesL = 3;
    let downloadingv = String.fromCharCode(116,115,120,95,51,95,52,48,0);
    let darkg = 0.0;
    let iconclosewhitebgG = 4.0;
    let videovarU: Map<any, any> = new Map([[String.fromCharCode(108,95,50,95,97,97,115,99,0),469], [String.fromCharCode(112,98,108,111,99,107,115,95,100,95,53,48,0),337]]);
    let crownE = 3;
    let footballfieldH = 0;
    let shootp = String.fromCharCode(101,95,52,54,0);
    let hongkongi: Array<any> = [678, 169];
    let crossn = 0.0;
    let bottomj = String.fromCharCode(109,97,112,112,105,110,103,95,120,95,54,56,0);
   for (let f = 0; f < 1; f++) {
      dependenciesL >>= Math.min(3, downloaderO.length);
   }
       let logoutq = String.fromCharCode(114,101,112,101,97,116,101,100,95,105,95,50,48,0);
       let sidew: Array<any> = [394, 838];
       let traminir = String.fromCharCode(104,95,51,49,95,98,97,107,101,0);
         sidew = [sidew.length & traminir.length];
         sidew = [logoutq.length];
          let bootsplashx: Array<any> = [624, 516, 444];
          let pause7 = 3.0;
          let empty8 = 1;
         sidew = [parseInt(`${pause7}`) >> (Math.min(logoutq.length, 5))];
         bootsplashx.push(bootsplashx.length);
         pause7 *= 1;
         empty8 %= Math.max(2, 2);
          let homeiconu = false;
          let exampleimagej: Map<any, any> = new Map([[String.fromCharCode(115,116,105,108,108,95,119,95,50,57,0),221], [String.fromCharCode(116,95,55,54,95,103,97,117,115,115,0),50], [String.fromCharCode(101,110,99,111,100,97,98,108,101,115,95,102,95,56,51,0),11]]);
         logoutq = "2";
         homeiconu = !homeiconu;
         exampleimagej = new Map([[`${exampleimagej.size}`, 2]]);
      if ((sidew.length % 5) > 4) {
          let reddownarrow_ = 4.0;
          let gifgoaly = String.fromCharCode(107,95,50,50,95,102,117,115,101,0);
          let entryc = 4;
          let whistleQ = String.fromCharCode(106,117,115,116,105,102,105,99,97,116,105,111,110,95,118,95,55,57,0);
         sidew = [1];
         reddownarrow_ /= Math.max(parseFloat(`${entryc}`), 1);
         gifgoaly += `${1 % (Math.max(parseInt(`${reddownarrow_}`), 2))}`;
         entryc |= 1 & whistleQ.length;
         whistleQ += `${gifgoaly.length / 1}`;
      }
      for (let b = 0; b < 1; b++) {
          let gifgoalX = String.fromCharCode(115,95,53,52,95,111,117,116,113,0);
          let libhermesW = 1.0;
         sidew = [parseInt(`${libhermesW}`) + traminir.length];
         gifgoalX = `${(gifgoalX == String.fromCharCode(75,0) ? gifgoalX.length : gifgoalX.length)}`;
         libhermesW *= parseFloat(`${1 << (Math.min(1, gifgoalX.length))}`);
      }
      let type_cR = 6241872 >= sidew.length;
      do {
          let overL = 1;
          let eact8 = 5.0;
          let fileo = String.fromCharCode(99,117,101,115,95,52,95,55,48,0);
          let sellmathbackground9 = 0.0;
         sidew = [parseInt(`${eact8}`)];
         overL /= Math.max(4, overL);
         eact8 *= parseInt(`${sellmathbackground9}`);
         fileo = `${(fileo == String.fromCharCode(98,0) ? fileo.length : overL)}`;
         sellmathbackground9 /= Math.max(5, 2);
         if (type_cR) {
            break;
         }
      } while (type_cR && ((sidew.length % 3) >= 2 || 5 >= (sidew.length % 3)));
      if ((sidew.length % (Math.max(6, logoutq.length))) <= 1 && (logoutq.length % 1) <= 3) {
          let runtimeschedulerl: Map<any, any> = new Map([[String.fromCharCode(98,95,53,55,95,103,101,116,112,0),717], [String.fromCharCode(114,95,51,50,95,105,110,105,116,105,97,108,115,0),198]]);
         logoutq = `${logoutq.length}`;
         runtimeschedulerl = new Map([[`${runtimeschedulerl.size}`, 2 ^ runtimeschedulerl.size]]);
      }
       let crownt = String.fromCharCode(111,95,55,51,95,100,111,116,108,111,99,107,0);
      footballfieldH <<= Math.min(sidew.length, 5);
       let libffmpegkitP: Array<any> = [983, 457, 405];
         libffmpegkitP.push(libffmpegkitP.length);
      for (let a = 0; a < 2; a++) {
         libffmpegkitP.push(libffmpegkitP.length);
      }
      while (libffmpegkitP.length == 4) {
         libffmpegkitP = [2 << (Math.min(3, libffmpegkitP.length))];
         break;
      }
      dependenciesL *= parseInt(`${darkg}`);
      backB /= Math.max(parseInt(`${iconclosewhitebgG}`) + 1, 4);
   for (let h = 0; h < 2; h++) {
      crownE /= Math.max(1 << (Math.min(4, Math.abs(dependenciesL))), 3);
   }
   while (1 >= (downloadingv.length | videovarU.size)) {
      videovarU.set(`${iconclosewhitebgG}`, parseInt(`${iconclosewhitebgG}`));
      break;
   }
      footballfieldH *= 1 << (Math.min(3, Math.abs(parseInt(`${backB}`))));
      footballfieldH ^= 3;
      videovarU = new Map([[downloadingv, crownE]]);
   for (let o = 0; o < 2; o++) {
       let controld: Map<any, any> = new Map([[String.fromCharCode(100,105,109,101,110,115,95,50,95,51,56,0),688], [String.fromCharCode(118,105,109,97,103,101,108,111,97,100,101,114,95,120,95,50,48,0),127], [String.fromCharCode(105,110,115,112,101,99,116,95,103,95,53,53,0),54]]);
       let gradlewh = 1.0;
       let volumeg: Map<any, any> = new Map([[String.fromCharCode(108,95,57,56,95,117,115,101,114,105,110,116,101,114,102,97,99,101,0),43], [String.fromCharCode(111,95,57,56,95,115,112,101,99,115,0),817]]);
         volumeg.set(`${gradlewh}`, parseInt(`${gradlewh}`));
      let transferF = 6082550 <= volumeg.size;
      do {
         volumeg.set(`${volumeg.size}`, controld.size >> (Math.min(3, Math.abs(volumeg.size))));
         if (transferF) {
            break;
         }
      } while ((!Array.from(volumeg.keys()).includes(`${controld.size}`)) && transferF);
         gradlewh *= controld.size;
      let privatechatbgv = 7448719.0 >= gradlewh;
      do {
         gradlewh /= Math.max(2 ^ controld.size, 3);
         if (privatechatbgv) {
            break;
         }
      } while (privatechatbgv && (controld.get(`${gradlewh}`) != null));
         controld.set(`${volumeg.size}`, 1 - controld.size);
      for (let v = 0; v < 3; v++) {
          let topicP = 0;
         volumeg.set(`${volumeg.size}`, 3);
         topicP |= topicP;
      }
         gradlewh *= controld.size % (Math.max(volumeg.size, 2));
      for (let x = 0; x < 3; x++) {
          let bang5 = 3.0;
          let defaultprofilepic0: Map<any, any> = new Map([[String.fromCharCode(115,95,49,49,95,109,117,108,104,105,0),true ], [String.fromCharCode(106,107,101,110,99,95,117,95,56,52,0),false ]]);
          let yingM = String.fromCharCode(118,95,52,57,95,109,105,103,114,97,116,101,0);
         gradlewh -= volumeg.size - parseInt(`${bang5}`);
         bang5 *= defaultprofilepic0.size % (Math.max(2, yingM.length));
         defaultprofilepic0 = new Map([[`${defaultprofilepic0.size}`, yingM.length & 3]]);
      }
      while (4 >= volumeg.size) {
         controld.set(`${controld.size}`, 3);
         break;
      }
      shootp = `${volumeg.size - 3}`;
   }

        if (handleClose) handleClose();

       let pathn = 1.0;
       let hoverR = String.fromCharCode(112,95,53,95,115,117,98,116,101,114,109,0);
       let exampleimageY = String.fromCharCode(111,95,52,49,95,99,104,97,110,103,101,114,0);
      while (pathn == 3.52) {
         hoverR += "3";
         break;
      }
      let holder1 = pathn <= 6610986.0;
      do {
          let ball_ = String.fromCharCode(118,97,114,105,97,110,99,101,120,104,95,97,95,56,55,0);
          let stationsH = 2.0;
          let materialb = String.fromCharCode(105,95,50,52,95,109,112,99,104,117,102,102,0);
          let subinL = 5.0;
          let modelsI = String.fromCharCode(109,97,115,116,101,114,95,53,95,54,50,0);
         pathn -= materialb.length;
         ball_ = `${modelsI.length}`;
         stationsH += parseInt(`${subinL}`);
         materialb = `${2 & parseInt(`${subinL}`)}`;
         modelsI += `${parseInt(`${subinL}`) | modelsI.length}`;
         if (holder1) {
            break;
         }
      } while (holder1 && ((pathn / 4.46) > 5.11));
      for (let p = 0; p < 3; p++) {
         exampleimageY += `${3 << (Math.min(5, Math.abs(parseInt(`${pathn}`))))}`;
      }
      let agreementA = 8733065 <= exampleimageY.length;
      do {
         exampleimageY += `${1 | exampleimageY.length}`;
         if (agreementA) {
            break;
         }
      } while (agreementA && (hoverR.length > exampleimageY.length));
      for (let w = 0; w < 2; w++) {
         pathn *= hoverR.length + parseInt(`${pathn}`);
      }
      iconclosewhitebgG -= footballfieldH >> (Math.min(Math.abs(parseInt(`${pathn}`)), 4));
   if ((4.100 - darkg) > 1.42 || (darkg - 4.100) > 3.55) {
      downloadingv = `${videovarU.size ^ parseInt(`${iconclosewhitebgG}`)}`;
   }
   for (let p = 0; p < 2; p++) {
       let savep: Array<any> = [126, 471];
       let update_2C = String.fromCharCode(97,95,52,53,95,111,118,112,97,103,101,0);
       let phoneshareU = 5.0;
       let volumeP = String.fromCharCode(118,103,108,111,98,97,108,95,105,95,50,49,0);
       let brightnesso = String.fromCharCode(111,95,56,95,98,111,117,110,100,115,112,101,99,105,102,105,99,0);
      while ((5 & volumeP.length) == 5 && 5.16 == (phoneshareU / (Math.max(parseFloat(`${volumeP.length}`), 9)))) {
         volumeP = `${update_2C.length % (Math.max(2, parseInt(`${phoneshareU}`)))}`;
         break;
      }
      if (volumeP.includes(`${savep.length}`)) {
         savep = [3 >> (Math.min(1, savep.length))];
      }
      for (let y = 0; y < 1; y++) {
          let kickJ = String.fromCharCode(115,116,97,114,116,117,112,95,107,95,53,48,0);
         update_2C += `${3 - parseInt(`${phoneshareU}`)}`;
         kickJ = `${kickJ.length}`;
      }
      for (let w = 0; w < 1; w++) {
         phoneshareU += (parseFloat(`${String.fromCharCode(54,0) == update_2C ? update_2C.length : parseInt(`${phoneshareU}`)}`));
      }
      if (2 >= savep.length) {
          let matchdetailbg6 = true;
          let homeP = 1;
         savep = [((matchdetailbg6 ? 1 : 5) * 1)];
         matchdetailbg6 = 40 == homeP;
         homeP *= homeP & 1;
      }
      if (brightnesso.length == update_2C.length) {
         update_2C += "3";
      }
      let default_pm = update_2C.length <= 7595059;
      do {
          let predictionbannerr: Map<any, any> = new Map([[String.fromCharCode(114,95,50,51,95,110,97,118,105,103,97,116,101,100,0),true ], [String.fromCharCode(115,117,114,102,97,99,101,95,111,95,52,55,0),false ]]);
          let scoreG = 3.0;
          let overY = false;
          let libreactnativeblobJ: Array<any> = [584, 330];
         update_2C = `${(update_2C == String.fromCharCode(109,0) ? parseInt(`${phoneshareU}`) : update_2C.length)}`;
         predictionbannerr.set(`${overY}`, (3 >> (Math.min(5, Math.abs((overY ? 3 : 5))))));
         scoreG += 2;
         libreactnativeblobJ = [libreactnativeblobJ.length];
         if (default_pm) {
            break;
         }
      } while ((update_2C.includes(`${savep.length}`)) && default_pm);
       let relatedE = String.fromCharCode(107,95,54,50,95,97,114,114,105,118,97,108,0);
       let skipy = String.fromCharCode(102,95,51,54,95,115,109,100,109,0);
         brightnesso = "3";
          let libfollyo = String.fromCharCode(114,103,98,114,103,98,95,115,95,54,53,0);
          let downloadedI: Array<any> = [986, 110];
         brightnesso = `${parseInt(`${phoneshareU}`) % (Math.max(3, update_2C.length))}`;
         libfollyo += `${(libfollyo == String.fromCharCode(109,0) ? libfollyo.length : downloadedI.length)}`;
         downloadedI = [2];
       let downloadedW = 2;
         phoneshareU -= parseFloat(`${3 * skipy.length}`);
      if (brightnesso == String.fromCharCode(103,0) && relatedE != String.fromCharCode(103,0)) {
          let commentX = 4.0;
          let libjsiN = 2.0;
         relatedE = `${parseInt(`${phoneshareU}`)}`;
         commentX += parseFloat(`${parseInt(`${libjsiN}`) - parseInt(`${commentX}`)}`);
         libjsiN += parseInt(`${commentX}`) | parseInt(`${libjsiN}`);
      }
          let rocketA = String.fromCharCode(100,114,97,119,116,101,120,116,95,50,95,48,0);
         volumeP = `${brightnesso.length}`;
         rocketA = "2";
          let assist9: Array<any> = [606, 697];
          let libreanimatedN = String.fromCharCode(116,95,50,54,95,99,104,111,105,99,101,0);
          let routers = 1;
         savep = [skipy.length];
         assist9.push(3);
         libreanimatedN = `${libreanimatedN.length}`;
         routers >>= Math.min(3, Math.abs(3 ^ routers));
      footballfieldH /= Math.max(5, (String.fromCharCode(100,0) == shootp ? shootp.length : downloaderO.length));
   }
   if (downloadingv != String.fromCharCode(104,0)) {
      pangleD += `${(String.fromCharCode(80,0) == pangleD ? parseInt(`${darkg}`) : pangleD.length)}`;
   }
      downloaderO = `${downloadingv.length}`;
   if ((backB / (Math.max(3, pangleD.length))) > 4.74 && 4 > (pangleD.length - 3)) {
       let libmapbufferjniI = 1.0;
       let dplus8 = String.fromCharCode(98,95,57,55,95,112,101,114,109,97,110,101,110,116,0);
          let specD = String.fromCharCode(119,105,114,101,102,114,97,109,101,95,109,95,56,52,0);
         dplus8 += `${specD.length}`;
         dplus8 = `${parseInt(`${libmapbufferjniI}`) / 2}`;
      let episodeV = 8203760 <= dplus8.length;
      do {
         dplus8 += `${2 * parseInt(`${libmapbufferjniI}`)}`;
         if (episodeV) {
            break;
         }
      } while (((2.8 / (Math.max(8, libmapbufferjniI))) >= 2.65 || 4 >= (dplus8.length / (Math.max(3, 3)))) && episodeV);
      while (!dplus8.endsWith(`${libmapbufferjniI}`)) {
          let nterstitialF = 1;
          let profileF: Array<any> = [String.fromCharCode(116,111,111,108,98,111,120,95,51,95,55,53,0), String.fromCharCode(112,97,115,112,95,99,95,50,57,0)];
          let episodes_ = String.fromCharCode(109,95,55,53,95,97,97,100,0);
         libmapbufferjniI *= (parseFloat(`${dplus8 == String.fromCharCode(68,0) ? parseInt(`${libmapbufferjniI}`) : dplus8.length}`));
         nterstitialF *= (episodes_ == String.fromCharCode(101,0) ? episodes_.length : profileF.length);
         profileF.push(episodes_.length + profileF.length);
         break;
      }
          let bangb = String.fromCharCode(97,115,107,95,105,95,50,51,0);
         dplus8 = `${parseInt(`${libmapbufferjniI}`) % (Math.max(3, 9))}`;
         bangb += `${bangb.length / (Math.max(5, bangb.length))}`;
          let dataO = String.fromCharCode(115,105,103,109,97,95,56,95,55,48,0);
          let pressure1 = String.fromCharCode(99,111,109,112,108,101,120,105,116,121,95,99,95,53,52,0);
          let codeC: Array<any> = [185, 617, 195];
         libmapbufferjniI /= Math.max(parseFloat(`${parseInt(`${libmapbufferjniI}`)}`), 4);
         dataO = `${codeC.length ^ 3}`;
         pressure1 = `${(pressure1 == String.fromCharCode(89,0) ? pressure1.length : codeC.length)}`;
      pangleD = "2";
   }
   for (let v = 0; v < 2; v++) {
      iconclosewhitebgG *= footballfieldH / 3;
   }
   if (2 >= (footballfieldH / (Math.max(2, crownE))) && (footballfieldH / 2) >= 4) {
      footballfieldH &= crownE;
   }
       let uploadw = String.fromCharCode(97,95,53,57,95,117,109,102,97,118,114,0);
       let s_lockG = 3;
       let cornershootC: Map<any, any> = new Map([[String.fromCharCode(100,95,57,56,95,119,97,118,101,108,101,116,0),160], [String.fromCharCode(113,95,53,95,115,108,105,112,112,97,103,101,115,0),811]]);
      for (let g = 0; g < 2; g++) {
         s_lockG /= Math.max(cornershootC.size >> (Math.min(Math.abs(1), 1)), 3);
      }
         uploadw = `${cornershootC.size}`;
      while (s_lockG <= 2) {
         cornershootC = new Map([[`${cornershootC.size}`, s_lockG ^ 3]]);
         break;
      }
         s_lockG >>= Math.min(Math.abs(s_lockG % (Math.max(cornershootC.size, 6))), 2);
         uploadw += `${s_lockG << (Math.min(Math.abs(cornershootC.size), 4))}`;
          let popupx = String.fromCharCode(106,95,49,48,95,105,110,116,101,114,105,111,114,0);
          let libswresampleT = 2.0;
         cornershootC.set(`${s_lockG}`, cornershootC.size << (Math.min(Math.abs(3), 3)));
         popupx = `${(popupx == String.fromCharCode(88,0) ? parseInt(`${libswresampleT}`) : popupx.length)}`;
         libswresampleT += popupx.length + parseInt(`${libswresampleT}`);
          let footballfieldS = 1.0;
          let cnewsn = 0;
         s_lockG &= s_lockG;
         footballfieldS -= parseInt(`${footballfieldS}`);
         cnewsn *= 2;
         s_lockG <<= Math.min(Math.abs(s_lockG << (Math.min(uploadw.length, 3))), 4);
          let middlewareJ = String.fromCharCode(122,95,51,57,95,111,109,105,116,116,105,110,103,0);
         s_lockG += s_lockG * 3;
         middlewareJ = `${1 ^ middlewareJ.length}`;
      iconclosewhitebgG /= Math.max(uploadw.length * s_lockG, 5);
      crownE |= parseInt(`${iconclosewhitebgG}`) % 3;

        Keyboard.dismiss();

   while (downloaderO != String.fromCharCode(52,0)) {
      pangleD = "2";
      break;
   }
      pangleD = `${shootp.length << (Math.min(2, Math.abs(crownE)))}`;
   if (5 <= (5 >> (Math.min(1, Math.abs(dependenciesL)))) && (5 >> (Math.min(3, Math.abs(footballfieldH)))) <= 3) {
      footballfieldH *= crownE << (Math.min(Math.abs(3), 5));
   }
   let anytimel = 8549621.0 >= iconclosewhitebgG;
   do {
      iconclosewhitebgG += videovarU.size + parseInt(`${darkg}`);
      if (anytimel) {
         break;
      }
   } while (anytimel && (2.18 > (iconclosewhitebgG * 5.5)));
   if (3.34 >= (backB / 2.12) && (dependenciesL >> (Math.min(Math.abs(1), 1))) >= 4) {
       let roundP: Array<any> = [970, 425, 941];
          let china1 = 3.0;
          let usern: Array<any> = [889, 341, 884];
          let aboutE = String.fromCharCode(115,97,118,101,112,111,105,110,116,95,48,95,53,57,0);
         roundP.push(usern.length);
         china1 /= Math.max(parseInt(`${china1}`) | aboutE.length, 1);
         usern = [3 | parseInt(`${china1}`)];
         aboutE += `${parseInt(`${china1}`)}`;
       let signinupy = String.fromCharCode(102,95,51,55,95,117,102,102,101,114,0);
       let nendT = String.fromCharCode(103,101,110,101,114,97,116,111,114,95,56,95,56,54,0);
         nendT = `${signinupy.length}`;
      backB -= 1;
   }
      downloadingv = `${downloadingv.length & 2}`;
      backB += parseInt(`${darkg}`);
   for (let l = 0; l < 3; l++) {
      videovarU = new Map([[`${footballfieldH}`, (downloaderO == String.fromCharCode(106,0) ? footballfieldH : downloaderO.length)]]);
   }
   while (2 < (2 + footballfieldH)) {
      crownE ^= parseInt(`${darkg}`);
      break;
   }
      downloadingv = `${dependenciesL % (Math.max(1, 8))}`;
        resetForm();
    }

    const onSubmitForm = async () => {
       let downloadingY: Array<any> = [270, 655, 445];
    let libyogae: Array<any> = [576, 416, 861];
    let reducerp: Array<any> = [219, 769, 424];
    let orientationk = String.fromCharCode(97,95,54,53,95,115,116,97,116,0);
    let videocommond = 1.0;
    let areag = String.fromCharCode(118,95,49,54,95,97,114,109,118,116,101,0);
    let refreshc = false;
    let tick5 = String.fromCharCode(99,95,57,57,95,105,105,114,102,105,108,116,101,114,0);
    let stationv = String.fromCharCode(111,95,57,57,95,100,114,105,118,101,0);
      areag += "2";

        if (referrerErrMsg !== null) return;

   let orangeuparrowb = orientationk == String.fromCharCode(103,122,110,95,105,111,121,0);
   do {
      orientationk += `${reducerp.length + libyogae.length}`;
      if (orangeuparrowb) {
         break;
      }
   } while ((reducerp.length < orientationk.length) && orangeuparrowb);

        if (isSubmitting) return;

   let carousely = String.fromCharCode(121,111,49,116,0) == tick5;
   do {
       let feedbacko = 2.0;
       let shrinkh: Array<any> = [91, 588];
       let overu = true;
       let splash8: Array<any> = [String.fromCharCode(104,95,57,50,95,117,110,108,105,110,107,0), String.fromCharCode(114,95,50,95,100,101,99,105,109,97,108,0), String.fromCharCode(109,101,109,95,110,95,51,52,0)];
       let score7 = String.fromCharCode(115,97,110,105,116,121,95,120,95,53,56,0);
          let dragG = 5.0;
          let layoutX: Array<any> = [891, 157];
         shrinkh = [parseInt(`${dragG}`)];
         dragG += parseFloat(`${layoutX.length}`);
         layoutX = [layoutX.length >> (Math.min(layoutX.length, 2))];
      for (let k = 0; k < 1; k++) {
          let iconadslinkV = String.fromCharCode(117,95,55,49,95,104,114,116,102,0);
          let umeng5 = 5.0;
         feedbacko -= parseFloat(`${parseInt(`${umeng5}`) / (Math.max(shrinkh.length, 10))}`);
         iconadslinkV += `${1 * iconadslinkV.length}`;
         umeng5 -= parseFloat(`${1 - iconadslinkV.length}`);
      }
          let combinedE = 4;
          let clubm: Array<any> = [36, 638];
          let mapbufferx = true;
         shrinkh.push(2);
         combinedE <<= Math.min(Math.abs(combinedE), 4);
         clubm.push(3 - combinedE);
         mapbufferx = combinedE == 79;
          let profilepicV = 0;
          let currentB = String.fromCharCode(121,95,53,50,95,100,101,118,101,108,111,112,109,101,110,116,0);
          let orientation1 = true;
         feedbacko *= parseFloat(`${currentB.length}`);
         profilepicV -= 3;
         currentB += `${(profilepicV + (orientation1 ? 3 : 5))}`;
         orientation1 = profilepicV <= 33;
         shrinkh.push(2);
      for (let e = 0; e < 3; e++) {
         splash8.push((String.fromCharCode(78,0) == score7 ? shrinkh.length : score7.length));
      }
      while ((5 - splash8.length) <= 2 || 4 <= (shrinkh.length - 5)) {
         shrinkh.push((splash8.length << (Math.min(3, Math.abs((overu ? 1 : 2))))));
         break;
      }
       let sportn: Array<any> = [349, 974, 701];
         splash8 = [((overu ? 3 : 2) - parseInt(`${feedbacko}`))];
       let elementsd = 3.0;
       let shrinkJ = 2.0;
      let reactnativejs_ = 9064646 <= sportn.length;
      do {
          let footballtrophyg: Map<any, any> = new Map([[String.fromCharCode(99,108,117,115,116,95,50,95,49,53,0),155], [String.fromCharCode(99,104,97,110,103,105,110,103,95,52,95,56,57,0),42]]);
          let foregroundx: Array<any> = [String.fromCharCode(117,110,105,100,101,110,116,105,102,105,101,100,95,110,95,54,53,0), String.fromCharCode(116,104,111,117,103,104,95,112,95,54,50,0)];
         sportn = [2];
         footballtrophyg = new Map([[`${footballtrophyg.size}`, 3]]);
         foregroundx.push(foregroundx.length | 1);
         if (reactnativejs_) {
            break;
         }
      } while ((5.45 >= (feedbacko + 1.19)) && reactnativejs_);
      if (3.96 <= (shrinkJ + elementsd) && 2.64 <= (shrinkJ + 3.96)) {
         elementsd += parseFloat(`${score7.length ^ parseInt(`${shrinkJ}`)}`);
      }
      while (2 > (score7.length / 2) && 2 > (score7.length / (Math.max(8, splash8.length)))) {
          let matchinactive9 = String.fromCharCode(112,95,51,51,95,115,117,98,112,105,120,101,108,0);
         score7 = `${sportn.length}`;
         matchinactive9 = `${matchinactive9.length}`;
         break;
      }
         feedbacko += parseFloat(`${2}`);
      while ((splash8.length << (Math.min(Math.abs(3), 1))) > 1 || (splash8.length * 3) > 2) {
         feedbacko *= parseFloat(`${parseInt(`${feedbacko}`) + 1}`);
         break;
      }
      tick5 = `${orientationk.length}`;
      if (carousely) {
         break;
      }
   } while (carousely && (refreshc && tick5.length == 3));
        setSubmitting(true);

      orientationk = `${libyogae.length}`;

        try {

      tick5 += `${areag.length & parseInt(`${videocommond}`)}`;
            await mayi_Injury.updateUsername({
                username: userState.user?.userName ?? '',
                referralCode: referrer,
            });
        } catch (err: any) {
            if (
                err.errors &&
                err.errors.referral_code
            ) {

      refreshc = tick5 == String.fromCharCode(110,0);
                setReferrerErrMsg(err.errors.referral_code);
            }

            setSubmitting(false);

   for (let j = 0; j < 1; j++) {
      libyogae = [areag.length];
   }
            return;

      tick5 += "3";
        }

        const result = await mayi_Injury.getUserDetails();

       let privacyb = 4.0;
      let incidente = 6257948.0 <= privacyb;
      do {
         privacyb -= parseFloat(`${2 % (Math.max(parseInt(`${privacyb}`), 6))}`);
         if (incidente) {
            break;
         }
      } while (incidente && (2.66 < (privacyb - 5.24)));
          let phonesharea: Map<any, any> = new Map([[String.fromCharCode(115,121,110,99,104,114,111,110,105,122,97,116,105,111,110,95,112,95,54,51,0),243], [String.fromCharCode(100,101,108,105,109,105,116,101,114,95,103,95,57,57,0),397]]);
          let imagemanagerk = String.fromCharCode(104,95,53,49,95,115,112,104,101,114,105,99,97,108,0);
          let cornerP: Array<any> = [717, 425, 878];
         privacyb -= parseFloat(`${cornerP.length % (Math.max(imagemanagerk.length, 6))}`);
         phonesharea.set(`${phonesharea.size}`, 1);
         imagemanagerk += `${2 & phonesharea.size}`;
          let unselecteds = true;
          let builds: Map<any, any> = new Map([[String.fromCharCode(115,95,51,95,51,95,53,48,0),false ], [String.fromCharCode(100,95,49,50,95,115,117,98,115,101,108,101,99,116,0),false ], [String.fromCharCode(113,95,55,49,95,103,101,116,112,105,120,0),false ]]);
         privacyb *= (parseFloat(`${(unselecteds ? 3 : 1) & builds.size}`));
      areag = `${((refreshc ? 2 : 2) * stationv.length)}`;

        if (result == null) {

   while (stationv.length > libyogae.length) {
       let downloadP = 5.0;
      for (let r = 0; r < 1; r++) {
         downloadP -= parseFloat(`${parseInt(`${downloadP}`)}`);
      }
         downloadP *= parseFloat(`${parseInt(`${downloadP}`)}`);
         downloadP -= parseFloat(`${1 & parseInt(`${downloadP}`)}`);
      libyogae.push(parseInt(`${videocommond}`) >> (Math.min(1, Math.abs(3))));
      break;
   }
            return;
        }

        await dispatch(updateUserAuth(result));

      refreshc = 81 == areag.length;
        dispatch(changeScreenAction("修改成功"));

      libyogae = [2];

        Keyboard.dismiss();

   if (5 >= (areag.length << (Math.min(5, libyogae.length))) || (libyogae.length << (Math.min(areag.length, 5))) >= 5) {
      areag += `${reducerp.length}`;
   }
        navigation.navigate("Home", {
            screen: "Profile",
        });

       let combinedZ: Map<any, any> = new Map([[String.fromCharCode(107,95,52,55,95,99,111,118,101,114,0),379], [String.fromCharCode(97,112,101,116,97,103,95,48,95,54,48,0),380], [String.fromCharCode(98,95,54,50,95,115,117,98,100,101,99,111,100,101,114,0),380]]);
         combinedZ.set(`${combinedZ.size}`, combinedZ.size | combinedZ.size);
         combinedZ.set(`${combinedZ.size}`, 2 / (Math.max(4, combinedZ.size)));
         combinedZ = new Map([[`${combinedZ.size}`, 2]]);
      stationv += `${1 * downloadingY.length}`;

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