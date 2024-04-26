import { useState } from "react";
import { Image, Keyboard, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CBottomSheet } from "../atoms";
import { useNavigation, useTheme } from "@react-navigation/native";
import { CTextInput } from "../atoms/textInput";
import { useDispatch } from "react-redux";
import { changeScreenAction } from "@redux/actions/ww_hash";
import { updateUsernameState } from "@redux/actions/ww_libreactperfloggerjni_small";
import { wwIconscheduleColors } from "@api";


interface wwIndexDice {
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
}: wwIndexDice) => {
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
       let libjsiq: Map<any, any> = new Map([[String.fromCharCode(99,111,109,98,105,110,101,115,95,102,95,57,0),924], [String.fromCharCode(103,100,115,112,95,50,95,56,0),705], [String.fromCharCode(122,95,57,50,95,110,97,118,105,103,97,116,111,114,0),964]]);
    let playercommonU = false;
    let libavutilF = 0.0;
    let statisticsw: Array<any> = [410, 411];
    let edity: Map<any, any> = new Map([[String.fromCharCode(99,95,50,52,95,117,99,111,110,115,116,0),String.fromCharCode(100,105,121,102,112,95,97,95,57,50,0)], [String.fromCharCode(103,95,53,50,95,101,120,116,114,97,100,97,116,97,112,115,101,116,115,0),String.fromCharCode(108,95,51,55,95,112,97,115,116,101,100,0)], [String.fromCharCode(103,95,49,95,112,97,114,97,109,115,116,114,105,110,103,0),String.fromCharCode(99,95,52,55,95,116,101,120,116,98,111,120,0)]]);
    let directW = 4;
    let iconarrowrightx = true;
    let sinaz = 3;
    let gift1 = 0.0;
    let middlewarey: Map<any, any> = new Map([[String.fromCharCode(115,113,108,99,105,112,104,101,114,95,113,95,55,48,0),String.fromCharCode(99,104,97,110,110,101,108,95,110,95,56,54,0)], [String.fromCharCode(122,95,54,53,95,109,117,108,116,105,112,108,105,99,97,116,105,111,110,0),String.fromCharCode(114,101,105,110,115,101,114,116,95,52,95,53,57,0)]]);
       let shootyesgoalT = String.fromCharCode(112,95,52,52,95,116,105,108,101,115,0);
       let stepe: Array<any> = [352, 161];
      for (let d = 0; d < 2; d++) {
         stepe = [shootyesgoalT.length ^ 1];
      }
      if ((shootyesgoalT.length & 2) == 2) {
         shootyesgoalT += `${shootyesgoalT.length - stepe.length}`;
      }
         stepe = [shootyesgoalT.length];
      if (!shootyesgoalT.includes(`${stepe.length}`)) {
         shootyesgoalT = `${stepe.length}`;
      }
          let yellowp: Map<any, any> = new Map([[String.fromCharCode(97,99,107,95,48,95,55,55,0),593], [String.fromCharCode(97,116,111,98,111,111,108,95,121,95,53,48,0),655], [String.fromCharCode(109,95,55,48,95,102,105,112,115,0),229]]);
         shootyesgoalT += `${shootyesgoalT.length << (Math.min(1, stepe.length))}`;
         yellowp = new Map([[`${yellowp.size}`, yellowp.size + 1]]);
       let screenc = String.fromCharCode(98,102,115,116,109,95,109,95,51,55,0);
      directW *= parseInt(`${gift1}`) >> (Math.min(2, Math.abs(2)));
       let overlay9 = 5.0;
       let flipperL = 1.0;
       let yellowvideolivec = 5.0;
      for (let r = 0; r < 1; r++) {
         yellowvideolivec += parseInt(`${flipperL}`);
      }
         flipperL -= 3 << (Math.min(Math.abs(parseInt(`${flipperL}`)), 2));
      playercommonU = !iconarrowrightx && sinaz > 50;
      overlay9 /= Math.max(parseFloat(`${parseInt(`${overlay9}`) + 1}`), 2);
      edity = new Map([[`${statisticsw.length}`, 2]]);
   let overlay7 = libavutilF <= 8082350.0;
   do {
      libavutilF -= statisticsw.length / (Math.max(8, edity.size));
      if (overlay7) {
         break;
      }
   } while ((1 <= (statisticsw.length * 3)) && overlay7);
      libjsiq = new Map([[`${statisticsw.length}`, directW]]);
   let firebaseH = iconarrowrightx ? !iconarrowrightx : iconarrowrightx;
   do {
      iconarrowrightx = !iconarrowrightx;
      if (firebaseH) {
         break;
      }
   } while ((iconarrowrightx) && firebaseH);
   let predictionbannershareds = playercommonU ? !playercommonU : playercommonU;
   do {
      playercommonU = null != libjsiq.get(`${iconarrowrightx}`);
      if (predictionbannershareds) {
         break;
      }
   } while ((!playercommonU) && predictionbannershareds);
      libavutilF += statisticsw.length;
      libjsiq = new Map([[`${sinaz}`, parseInt(`${gift1}`) + 2]]);
       let iconnewssharee: Array<any> = [String.fromCharCode(103,111,108,100,101,110,95,103,95,49,0), String.fromCharCode(105,95,53,50,95,99,114,97,115,104,101,100,0), String.fromCharCode(104,97,115,104,101,100,95,112,95,55,51,0)];
       let episodesH = String.fromCharCode(121,95,55,48,95,111,112,101,110,115,115,108,0);
       let jingdongy = String.fromCharCode(97,118,105,115,121,110,116,104,95,121,95,56,48,0);
         iconnewssharee.push(1 ^ jingdongy.length);
          let constantsd = 4.0;
          let greyarrowupS = String.fromCharCode(102,95,55,55,95,112,97,114,97,109,101,116,114,105,122,101,100,0);
          let tickz = String.fromCharCode(102,111,117,110,100,95,107,95,54,56,0);
         jingdongy += "3";
         constantsd += tickz.length;
         greyarrowupS = `${tickz.length}`;
       let sourceb = 0;
       let dycreatorC = 0;
       let moviesx = String.fromCharCode(100,114,111,112,120,95,114,95,51,0);
          let iconclosewhitebgB = 1;
         sourceb /= Math.max(1 & jingdongy.length, 5);
         iconclosewhitebgB |= iconclosewhitebgB + iconclosewhitebgB;
         dycreatorC &= dycreatorC & 1;
         iconnewssharee = [moviesx.length];
       let private_kg: Array<any> = [90, 105, 847];
      let ksadK = sourceb <= 8979461;
      do {
         sourceb |= private_kg.length << (Math.min(jingdongy.length, 2));
         if (ksadK) {
            break;
         }
      } while (ksadK && (3 > (sourceb | 5) || 5 > (moviesx.length | sourceb)));
      directW >>= Math.min(Math.abs(1), 1);
      episodesH = "2";
      edity = new Map([[`${edity.size}`, libjsiq.size | 1]]);
      statisticsw.push(3 * sinaz);
       let viewerA = String.fromCharCode(106,95,57,57,95,114,97,116,101,0);
       let flagy = 3;
      if (2 == (viewerA.length & 5) && (5 & viewerA.length) == 3) {
          let refreshn = 1.0;
          let leftv = String.fromCharCode(114,116,109,112,101,95,48,95,51,51,0);
         flagy >>= Math.min(5, Math.abs((String.fromCharCode(90,0) == viewerA ? viewerA.length : flagy)));
         refreshn -= parseFloat(`${leftv.length & 1}`);
         leftv = `${(leftv == String.fromCharCode(52,0) ? parseInt(`${refreshn}`) : leftv.length)}`;
      }
      while (1 == (flagy >> (Math.min(viewerA.length, 5))) || 1 == (viewerA.length >> (Math.min(2, Math.abs(flagy))))) {
         flagy |= viewerA.length - flagy;
         break;
      }
         flagy %= Math.max(2, 3);
      let sportsY = flagy <= 8201103;
      do {
          let libffmpegkitZ = String.fromCharCode(102,95,54,48,95,112,111,114,116,0);
          let white6 = 0.0;
         flagy *= 1;
         libffmpegkitZ += `${libffmpegkitZ.length}`;
         white6 += 1 & libffmpegkitZ.length;
         if (sportsY) {
            break;
         }
      } while (sportsY && (4 <= (viewerA.length ^ flagy) && (viewerA.length ^ flagy) <= 4));
      for (let k = 0; k < 3; k++) {
         flagy %= Math.max(flagy ^ viewerA.length, 4);
      }
      if (!viewerA.includes(`${flagy}`)) {
         viewerA += `${flagy ^ 2}`;
      }
      statisticsw.push((middlewarey.size * (iconarrowrightx ? 2 : 2)));
      libavutilF /= Math.max(1, 3);
   for (let z = 0; z < 1; z++) {
       let x_unlockM = 3.0;
       let carouselU = String.fromCharCode(98,95,50,54,95,114,101,108,111,103,105,110,0);
       let libjsinspectorr = true;
      for (let d = 0; d < 2; d++) {
         x_unlockM /= Math.max(2 + carouselU.length, 4);
      }
      let downloadingy = 8983530 >= carouselU.length;
      do {
         carouselU = `${3 * carouselU.length}`;
         if (downloadingy) {
            break;
         }
      } while (downloadingy && (5 < (carouselU.length + 1)));
      for (let v = 0; v < 2; v++) {
         carouselU = `${((libjsinspectorr ? 3 : 5) >> (Math.min(Math.abs(parseInt(`${x_unlockM}`)), 1)))}`;
      }
      for (let k = 0; k < 2; k++) {
         carouselU = `${carouselU.length << (Math.min(2, Math.abs(parseInt(`${x_unlockM}`))))}`;
      }
          let videojsG: Map<any, any> = new Map([[String.fromCharCode(112,95,57,50,95,100,101,102,97,117,108,0),274], [String.fromCharCode(114,101,103,105,115,116,101,114,95,104,95,57,50,0),156]]);
          let tailJ = 4.0;
          let termsE = 5.0;
         x_unlockM += 2 / (Math.max(parseInt(`${termsE}`), 9));
         videojsG = new Map([[`${videojsG.size}`, videojsG.size + 2]]);
         tailJ -= parseFloat(`${parseInt(`${tailJ}`)}`);
         termsE -= parseFloat(`${parseInt(`${tailJ}`) % (Math.max(videojsG.size, 3))}`);
      if (!libjsinspectorr) {
         libjsinspectorr = !libjsinspectorr;
      }
          let s_managero = true;
          let bootsplashy = 4.0;
          let whatsappM = 1;
         carouselU = `${((libjsinspectorr ? 2 : 5) % (Math.max(carouselU.length, 1)))}`;
         s_managero = !s_managero;
         bootsplashy += whatsappM;
         whatsappM -= whatsappM;
          let greyarrowupN = 1.0;
          let basketballhometeamM: Array<any> = [862, 785, 999];
         carouselU = `${carouselU.length}`;
         greyarrowupN -= parseFloat(`${1 % (Math.max(2, parseInt(`${greyarrowupN}`)))}`);
         basketballhometeamM = [parseInt(`${greyarrowupN}`) * basketballhometeamM.length];
         x_unlockM -= (carouselU == String.fromCharCode(72,0) ? carouselU.length : parseInt(`${x_unlockM}`));
      libavutilF += 2 >> (Math.min(2, Math.abs(libjsiq.size)));
   }

        setUsername(initialUsername);

       let binddatas1 = String.fromCharCode(111,112,101,114,97,116,105,111,110,95,48,95,53,52,0);
       let recommendationl = 4.0;
       let baiduA = 0.0;
          let actiony = 3;
         baiduA -= (binddatas1 == String.fromCharCode(57,0) ? parseInt(`${baiduA}`) : binddatas1.length);
         actiony %= Math.max(1 - actiony, 3);
         recommendationl -= 3 | binddatas1.length;
         binddatas1 += `${parseInt(`${recommendationl}`)}`;
      while (recommendationl > 5.50) {
         recommendationl *= binddatas1.length - parseInt(`${recommendationl}`);
         break;
      }
          let sideg = String.fromCharCode(112,97,99,107,95,98,95,56,50,0);
          let schedulex = String.fromCharCode(102,95,53,95,114,101,109,111,118,101,0);
         recommendationl += (String.fromCharCode(74,0) == binddatas1 ? binddatas1.length : parseInt(`${recommendationl}`));
         sideg += `${schedulex.length}`;
         schedulex += "2";
         recommendationl /= Math.max((binddatas1 == String.fromCharCode(81,0) ? binddatas1.length : parseInt(`${baiduA}`)), 3);
      if ((1 + binddatas1.length) == 1) {
         binddatas1 = `${parseInt(`${baiduA}`)}`;
      }
      for (let a = 0; a < 1; a++) {
          let utilsf = String.fromCharCode(113,95,52,51,95,100,105,103,105,116,99,111,117,110,116,0);
          let libjsijniprofiler2 = 4.0;
          let annerz = String.fromCharCode(121,118,116,111,121,117,121,95,122,95,51,50,0);
         binddatas1 += "3";
         utilsf = `${utilsf.length >> (Math.min(5, Math.abs(parseInt(`${libjsijniprofiler2}`))))}`;
         libjsijniprofiler2 += parseInt(`${libjsijniprofiler2}`);
         annerz += `${parseInt(`${libjsijniprofiler2}`)}`;
      }
          let modulesv = String.fromCharCode(112,95,51,56,95,103,101,116,110,109,115,101,100,101,99,0);
         binddatas1 = `${binddatas1.length}`;
         modulesv += `${modulesv.length}`;
      sinaz *= edity.size | directW;
      directW |= parseInt(`${gift1}`);
   let nalyticsC = iconarrowrightx ? !iconarrowrightx : iconarrowrightx;
   do {
      iconarrowrightx = statisticsw.includes(libavutilF);
      if (nalyticsC) {
         break;
      }
   } while (((5.8 * libavutilF) <= 5.43) && nalyticsC);
      libjsiq = new Map([[`${libjsiq.size}`, parseInt(`${gift1}`) - libjsiq.size]]);
   while (5 <= (2 + middlewarey.size)) {
      directW &= libjsiq.size - 3;
      break;
   }
   if ((5 + directW) <= 4) {
       let topicq: Map<any, any> = new Map([[String.fromCharCode(107,95,50,57,95,97,115,115,111,99,105,97,116,101,0),881], [String.fromCharCode(97,95,49,56,95,104,100,97,116,97,0),137], [String.fromCharCode(101,95,54,55,95,105,100,101,110,116,105,116,105,101,115,0),108]]);
       let libfollyb = String.fromCharCode(113,95,52,54,95,102,117,110,99,0);
       let z_titlei = 5.0;
       let footballfiledlayoutx = String.fromCharCode(99,111,110,115,116,114,97,105,110,116,115,95,102,95,51,48,0);
       let readi = 1;
      let controlP = String.fromCharCode(48,54,99,107,52,52,0) == footballfiledlayoutx;
      do {
         footballfiledlayoutx += `${parseInt(`${z_titlei}`)}`;
         if (controlP) {
            break;
         }
      } while (controlP && (!footballfiledlayoutx.includes(`${topicq.size}`)));
      for (let s = 0; s < 2; s++) {
         readi /= Math.max(5, 1);
      }
         libfollyb = "1";
       let optionsV = String.fromCharCode(115,112,101,101,100,95,109,95,55,50,0);
       let final_y4p = String.fromCharCode(112,97,103,101,104,97,115,104,95,100,95,49,55,0);
         footballfiledlayoutx += `${readi | topicq.size}`;
         z_titlei /= Math.max(4, optionsV.length);
      if (!libfollyb.startsWith(`${topicq.size}`)) {
         libfollyb += `${(String.fromCharCode(107,0) == footballfiledlayoutx ? libfollyb.length : footballfiledlayoutx.length)}`;
      }
      let file9 = 7390785 <= topicq.size;
      do {
          let final_xv = 0.0;
          let shirtw = String.fromCharCode(120,117,118,109,118,115,95,98,95,52,53,0);
         topicq = new Map([[optionsV, optionsV.length]]);
         final_xv += parseFloat(`${1}`);
         shirtw += "3";
         if (file9) {
            break;
         }
      } while (file9 && (Array.from(topicq.keys()).includes(`${z_titlei}`)));
      if (5 == (5 - final_y4p.length)) {
          let faviconX = String.fromCharCode(122,95,50,56,95,99,111,110,97,110,102,105,108,101,0);
          let historyF = 5.0;
          let basek = 5;
         final_y4p = `${footballfiledlayoutx.length % (Math.max(5, basek))}`;
         faviconX = "1";
         historyF /= Math.max(parseInt(`${historyF}`), 4);
         basek *= faviconX.length ^ 3;
      }
         optionsV = "3";
      let iconnewssharey = 5611951 >= readi;
      do {
         readi >>= Math.min(Math.abs((String.fromCharCode(55,0) == footballfiledlayoutx ? topicq.size : footballfiledlayoutx.length)), 1);
         if (iconnewssharey) {
            break;
         }
      } while (iconnewssharey && ((readi + final_y4p.length) >= 3 || (readi + 3) >= 1));
         readi /= Math.max(2, 4);
         optionsV = `${optionsV.length}`;
      for (let a = 0; a < 3; a++) {
         topicq.set(`${z_titlei}`, parseInt(`${z_titlei}`));
      }
       let onewst = String.fromCharCode(112,111,115,116,102,105,120,95,115,95,48,0);
      iconarrowrightx = 68.72 <= z_titlei;
   }
   if (5 >= (2 << (Math.min(5, Math.abs(directW))))) {
       let libtanw = 3;
       let classesi: Map<any, any> = new Map([[String.fromCharCode(99,111,109,112,105,108,101,111,112,116,105,111,110,103,101,116,95,104,95,49,0),true ], [String.fromCharCode(115,105,103,115,108,111,116,95,107,95,56,51,0),true ]]);
       let codegenj = true;
       let weatherY = 5;
      while (!codegenj) {
          let j_lockn = String.fromCharCode(115,116,97,103,105,110,103,95,98,95,56,55,0);
         weatherY &= libtanw << (Math.min(j_lockn.length, 1));
         break;
      }
         weatherY += weatherY;
      while (1 == (libtanw & 4) || 4 == libtanw) {
          let sorti = String.fromCharCode(100,95,57,57,95,115,121,110,99,115,97,102,101,0);
         libtanw ^= libtanw ^ 3;
         sorti += `${sorti.length}`;
         break;
      }
          let iconwatchnowk: Array<any> = [188, 87];
          let notificationw = 2.0;
          let searchbarC: Array<any> = [813, 713, 863];
         weatherY >>= Math.min(Math.abs(parseInt(`${notificationw}`) % (Math.max(iconwatchnowk.length, 8))), 5);
         iconwatchnowk.push(searchbarC.length);
         notificationw += parseFloat(`${searchbarC.length / 3}`);
      while (1 > (1 / (Math.max(10, libtanw))) && 3 > (classesi.size / (Math.max(1, 10)))) {
         libtanw *= classesi.size;
         break;
      }
      for (let o = 0; o < 3; o++) {
         codegenj = !codegenj;
      }
       let completeZ = 2.0;
       let dacccfaabfbcbadeebddcabacdffdb0 = 0.0;
         libtanw /= Math.max(4, parseInt(`${completeZ}`));
      while (3 < (weatherY >> (Math.min(Math.abs(2), 3)))) {
         classesi.set(`${libtanw}`, 2 - weatherY);
         break;
      }
      let uploadH = weatherY <= 6889411;
      do {
         weatherY *= 1;
         if (uploadH) {
            break;
         }
      } while ((3 > (weatherY / (Math.max(1, parseInt(`${dacccfaabfbcbadeebddcabacdffdb0}`)))) || (dacccfaabfbcbadeebddcabacdffdb0 / 4.16) > 4.66) && uploadH);
       let bottomS = String.fromCharCode(116,97,112,115,95,104,95,52,50,0);
       let executorq = String.fromCharCode(121,95,55,50,95,114,97,100,105,97,110,115,0);
          let textlayoutmanagery = String.fromCharCode(102,101,101,95,112,95,54,0);
          let attributedstringY = String.fromCharCode(99,111,110,115,117,109,101,114,95,113,95,57,51,0);
         codegenj = 58 > weatherY;
         textlayoutmanagery += `${textlayoutmanagery.length}`;
         attributedstringY = `${(textlayoutmanagery == String.fromCharCode(117,0) ? attributedstringY.length : textlayoutmanagery.length)}`;
      libavutilF -= weatherY & sinaz;
   }
      sinaz %= Math.max(4, parseInt(`${libavutilF}`));
       let linkO = 3.0;
       let resendS = 1.0;
          let arrowupS: Array<any> = [254, 283, 86];
          let mbjscommon3 = String.fromCharCode(115,95,52,52,95,99,111,108,111,114,107,101,121,0);
         linkO *= parseFloat(`${3}`);
         arrowupS.push(1 ^ mbjscommon3.length);
         mbjscommon3 += `${arrowupS.length >> (Math.min(mbjscommon3.length, 3))}`;
         resendS -= parseFloat(`${parseInt(`${resendS}`) * parseInt(`${linkO}`)}`);
         resendS -= parseFloat(`${parseInt(`${linkO}`)}`);
         linkO += parseFloat(`${parseInt(`${linkO}`) * parseInt(`${resendS}`)}`);
         linkO += parseFloat(`${1 % (Math.max(7, parseInt(`${resendS}`)))}`);
         resendS += parseFloat(`${parseInt(`${linkO}`)}`);
      gift1 += parseFloat(`${parseInt(`${linkO}`)}`);
       let adultD: Map<any, any> = new Map([[String.fromCharCode(116,114,117,110,99,97,116,105,111,110,95,114,95,52,55,0),String.fromCharCode(106,95,55,51,95,108,111,110,103,105,116,117,100,101,0)], [String.fromCharCode(102,95,51,56,95,110,97,110,111,115,0),String.fromCharCode(111,95,54,51,95,104,101,108,100,0)], [String.fromCharCode(100,105,115,112,111,115,105,116,105,111,110,95,54,95,54,55,0),String.fromCharCode(122,95,57,49,95,115,116,114,105,107,101,116,104,114,111,117,103,104,115,0)]]);
       let with_0G = String.fromCharCode(115,95,53,48,95,118,112,114,105,110,116,102,0);
      let minimizel = adultD.size >= 6944989;
      do {
         adultD = new Map([[`${adultD.size}`, 3]]);
         if (minimizel) {
            break;
         }
      } while ((!with_0G.endsWith(`${adultD.size}`)) && minimizel);
      for (let w = 0; w < 2; w++) {
         with_0G += `${adultD.size}`;
      }
          let sheet1 = false;
         adultD.set(`${with_0G}`, 2);
         sheet1 = !sheet1;
      for (let o = 0; o < 2; o++) {
          let baidux: Map<any, any> = new Map([[String.fromCharCode(101,95,55,95,97,108,116,101,114,101,100,0),621], [String.fromCharCode(119,95,52,48,95,111,98,116,97,105,110,101,114,0),620]]);
          let tempnodatagifb: Array<any> = [445, 686, 465];
          let launcherv = String.fromCharCode(112,97,114,105,116,121,95,111,95,57,52,0);
          let cornerk = String.fromCharCode(111,100,101,114,110,95,49,95,55,48,0);
          let baselineQ = String.fromCharCode(122,95,54,52,95,115,116,97,107,105,110,103,0);
         adultD.set(launcherv, launcherv.length << (Math.min(Math.abs(1), 3)));
         baidux = new Map([[`${tempnodatagifb.length}`, 2 >> (Math.min(2, baselineQ.length))]]);
         tempnodatagifb.push(baidux.size);
         cornerk += `${tempnodatagifb.length / 2}`;
         baselineQ = `${tempnodatagifb.length >> (Math.min(Math.abs(2), 1))}`;
      }
       let filedG = String.fromCharCode(106,95,54,51,95,99,104,97,116,0);
         adultD = new Map([[filedG, filedG.length >> (Math.min(with_0G.length, 1))]]);
      edity = new Map([[`${statisticsw.length}`, statisticsw.length | parseInt(`${gift1}`)]]);
   while ((parseInt(`${gift1}`) + libjsiq.size) > 4 || (gift1 + 5.2) > 1.23) {
      libjsiq.set(`${libavutilF}`, edity.size);
      break;
   }
   let u_count9 = iconarrowrightx ? !iconarrowrightx : iconarrowrightx;
   do {
      iconarrowrightx = null == libjsiq.get(`${gift1}`);
      if (u_count9) {
         break;
      }
   } while (u_count9 && ((middlewarey.size >> (Math.min(Math.abs(3), 5))) <= 2 && middlewarey.size <= 3));
   if ((statisticsw.length | 1) < 5 && 5 < (1 | statisticsw.length)) {
      edity.set(`${directW}`, directW * 3);
   }
      middlewarey.set(`${libjsiq.size}`, 3 ^ libjsiq.size);
   for (let w = 0; w < 2; w++) {
      playercommonU = !iconarrowrightx;
   }
        setUsernameErrMsg(null);
    }

    const onClose = () => {
       let window_o3X = String.fromCharCode(99,104,97,99,104,97,95,114,95,55,51,0);
    let largef = String.fromCharCode(120,95,49,55,95,103,97,109,101,0);
    let spinnerl: Array<any> = [637, 292];
    let stringn: Array<any> = [String.fromCharCode(114,101,102,105,110,101,100,95,108,95,54,57,0), String.fromCharCode(109,95,54,56,95,105,116,117,110,101,115,0), String.fromCharCode(115,117,112,112,114,101,115,115,101,100,95,115,95,52,51,0)];
    let long_2bH = 1.0;
    let selectF = 1.0;
    let shootyesgoal5 = String.fromCharCode(102,99,102,115,95,113,95,49,53,0);
    let middleu = 1;
    let filterm = 1;
    let vipsportf = String.fromCharCode(98,97,116,116,101,114,121,95,108,95,49,53,0);
    let charth: Map<any, any> = new Map([[String.fromCharCode(100,95,56,52,95,116,114,97,110,115,112,0),true ], [String.fromCharCode(121,100,97,121,95,57,95,52,57,0),false ], [String.fromCharCode(112,95,52,57,95,105,109,112,111,114,116,101,100,0),true ]]);
       let benefitq = 3;
       let firebase5 = 5.0;
       let g_positionN: Map<any, any> = new Map([[String.fromCharCode(120,95,53,55,95,114,101,109,97,112,112,101,100,0),true ], [String.fromCharCode(106,111,121,102,117,108,95,103,95,53,0),false ], [String.fromCharCode(120,95,50,95,116,111,108,101,114,97,110,99,101,0),true ]]);
         firebase5 -= parseInt(`${firebase5}`) >> (Math.min(Math.abs(2), 1));
          let g_lockF: Array<any> = [985, 209, 900];
          let overlayk: Map<any, any> = new Map([[String.fromCharCode(105,99,111,110,105,99,95,115,95,51,54,0),321], [String.fromCharCode(103,95,50,51,95,109,105,115,115,101,100,0),538], [String.fromCharCode(100,101,108,97,117,110,97,121,95,111,95,57,51,0),948]]);
         g_positionN.set(`${benefitq}`, benefitq);
         g_lockF.push(3 * g_lockF.length);
         overlayk.set(`${g_lockF.length}`, g_lockF.length % (Math.max(2, 6)));
          let temperatureu = String.fromCharCode(105,114,99,97,109,95,50,95,56,49,0);
         firebase5 /= Math.max((String.fromCharCode(117,0) == temperatureu ? g_positionN.size : temperatureu.length), 3);
         firebase5 += 1 >> (Math.min(Math.abs(benefitq), 3));
      while ((firebase5 + benefitq) < 2.43) {
          let nterstitialV = String.fromCharCode(122,95,57,57,95,104,115,98,0);
          let downv = 1;
          let acceptedc = String.fromCharCode(117,95,52,56,95,105,112,108,105,109,97,103,101,0);
          let storeh = String.fromCharCode(117,110,108,105,109,105,116,101,100,95,105,95,54,0);
          let matchactive4 = 0.0;
         benefitq |= 1 | parseInt(`${matchactive4}`);
         nterstitialV = `${downv}`;
         downv *= downv;
         acceptedc += "2";
         storeh += `${3 & acceptedc.length}`;
         matchactive4 += parseFloat(`${downv}`);
         break;
      }
      if ((benefitq - 3) <= 2 && 1.0 <= (firebase5 - 5.5)) {
         benefitq += 3;
      }
       let theme0 = String.fromCharCode(111,95,49,51,95,100,101,102,97,117,108,116,115,0);
      let settingk = 8208956 >= benefitq;
      do {
          let topicG = true;
          let sentry2 = 5;
         benefitq %= Math.max(1, theme0.length);
         topicG = sentry2 == 88;
         sentry2 %= Math.max(2, (sentry2 + (topicG ? 4 : 1)));
         if (settingk) {
            break;
         }
      } while (settingk && ((benefitq - 5) >= 5));
      if ((benefitq >> (Math.min(Math.abs(4), 3))) < 2) {
         benefitq >>= Math.min(Math.abs(3 & theme0.length), 2);
      }
      selectF += stringn.length;
      stringn.push(largef.length);
   let material7 = largef.length >= 9693649;
   do {
      largef += `${1 + middleu}`;
      if (material7) {
         break;
      }
   } while (material7 && (2 < largef.length));
   let downL = String.fromCharCode(54,53,102,103,99,99,112,0) == window_o3X;
   do {
       let rewardx = 2;
       let tumbnailk = 2.0;
       let ajaxJ: Array<any> = [442, 665, 988];
       let reducerR: Array<any> = [851, 89, 733];
      let robotod = tumbnailk >= 5888739.0;
      do {
         tumbnailk /= Math.max(parseFloat(`${parseInt(`${tumbnailk}`) << (Math.min(1, Math.abs(rewardx)))}`), 3);
         if (robotod) {
            break;
         }
      } while (((parseInt(`${tumbnailk}`) + reducerR.length) <= 1) && robotod);
      if (3.59 < (tumbnailk / (Math.max(3, rewardx)))) {
          let vietnamY: Array<any> = [String.fromCharCode(108,95,52,51,95,99,111,108,108,105,100,101,114,0), String.fromCharCode(116,121,112,105,110,103,95,119,95,53,49,0), String.fromCharCode(112,97,103,101,114,95,122,95,52,51,0)];
         tumbnailk /= Math.max(parseFloat(`${ajaxJ.length + 1}`), 3);
         vietnamY.push(3 | vietnamY.length);
      }
      while (reducerR.length == rewardx) {
         reducerR.push(3);
         break;
      }
      for (let q = 0; q < 3; q++) {
         tumbnailk *= parseFloat(`${reducerR.length}`);
      }
         rewardx |= 2;
          let dplusM = 2;
         rewardx -= reducerR.length;
         dplusM /= Math.max(dplusM % 1, 2);
      while (!ajaxJ.includes(tumbnailk)) {
          let fastforwardQ = String.fromCharCode(120,95,49,50,95,101,110,99,0);
          let shootyesgoalC = String.fromCharCode(118,95,57,50,95,118,111,116,101,114,115,0);
          let emptyY = String.fromCharCode(108,95,51,56,95,108,111,111,107,97,115,105,100,101,0);
          let selectedX = 2;
         ajaxJ.push(reducerR.length);
         fastforwardQ = `${(shootyesgoalC == String.fromCharCode(101,0) ? shootyesgoalC.length : selectedX)}`;
         emptyY = `${(String.fromCharCode(113,0) == fastforwardQ ? emptyY.length : fastforwardQ.length)}`;
         selectedX += 2 % (Math.max(2, shootyesgoalC.length));
         break;
      }
          let liveendmodallogoM = String.fromCharCode(99,97,108,108,98,97,99,107,115,95,51,95,51,57,0);
          let textinputj = 2.0;
          let video1 = String.fromCharCode(100,101,102,97,117,108,116,115,95,116,95,51,49,0);
         tumbnailk *= parseFloat(`${parseInt(`${tumbnailk}`) >> (Math.min(reducerR.length, 2))}`);
         liveendmodallogoM += `${liveendmodallogoM.length + 2}`;
         textinputj *= (String.fromCharCode(111,0) == video1 ? video1.length : parseInt(`${textinputj}`));
         tumbnailk -= parseFloat(`${3 + reducerR.length}`);
      while ((parseFloat(`${ajaxJ.length}`) - tumbnailk) <= 1.96 && (ajaxJ.length - parseInt(`${tumbnailk}`)) <= 2) {
         ajaxJ = [reducerR.length ^ 1];
         break;
      }
      let pagee = 5771745.0 <= tumbnailk;
      do {
          let crownA: Map<any, any> = new Map([[String.fromCharCode(100,101,109,97,110,103,108,101,95,113,95,49,49,0),560], [String.fromCharCode(103,95,54,49,95,112,101,114,115,105,115,116,97,98,108,101,0),351], [String.fromCharCode(111,95,50,50,95,121,98,121,114,0),615]]);
         tumbnailk *= parseFloat(`${reducerR.length << (Math.min(1, Math.abs(crownA.size)))}`);
         if (pagee) {
            break;
         }
      } while ((parseFloat(`${reducerR.length}`) < tumbnailk) && pagee);
         reducerR = [parseInt(`${tumbnailk}`)];
      window_o3X = `${window_o3X.length}`;
      if (downL) {
         break;
      }
   } while (((selectF / (Math.max(2.4, 9))) <= 4.87) && downL);
       let carouselH = false;
          let pointP = String.fromCharCode(118,95,53,52,95,110,97,118,105,0);
         carouselH = pointP.length <= 14;
      if (!carouselH) {
         carouselH = !carouselH;
      }
      if (carouselH) {
          let libavcodecn = String.fromCharCode(98,97,115,107,101,116,98,97,108,108,95,115,95,49,0);
          let viewer9 = 5.0;
          let apps4 = false;
          let security5 = 3;
         carouselH = carouselH || 67 >= security5;
         libavcodecn += `${((apps4 ? 5 : 5) % (Math.max(parseInt(`${viewer9}`), 1)))}`;
         viewer9 += parseFloat(`${parseInt(`${viewer9}`) / 3}`);
         apps4 = !apps4;
         security5 &= (libavcodecn == String.fromCharCode(69,0) ? parseInt(`${viewer9}`) : libavcodecn.length);
      }
      long_2bH -= (String.fromCharCode(81,0) == largef ? (carouselH ? 2 : 4) : largef.length);
   for (let s = 0; s < 2; s++) {
       let bannerK = String.fromCharCode(116,105,109,101,111,117,116,101,100,95,113,95,50,49,0);
       let hookC = 3;
       let downvU = String.fromCharCode(120,95,57,57,95,109,111,100,105,102,121,0);
       let trophyt = true;
       let dependencies1: Map<any, any> = new Map([[String.fromCharCode(122,95,52,48,95,104,105,103,104,108,105,103,104,116,115,0),955], [String.fromCharCode(119,101,98,109,101,110,99,95,118,95,55,51,0),80]]);
      let reminderJ = trophyt ? !trophyt : trophyt;
      do {
          let contexte = String.fromCharCode(117,112,100,97,116,101,95,118,95,54,53,0);
          let bodanM = false;
          let overlayJ: Array<any> = [353, 168, 34];
          let templateprocessor6: Array<any> = [25, 277];
          let matchactive4o = String.fromCharCode(108,111,116,116,105,101,112,97,114,115,101,114,95,100,95,54,55,0);
         trophyt = dependencies1.size <= contexte.length;
         contexte = `${((bodanM ? 4 : 1) | overlayJ.length)}`;
         bodanM = (93 <= ((bodanM ? 93 : overlayJ.length) / (Math.max(7, overlayJ.length))));
         templateprocessor6 = [2 / (Math.max(7, templateprocessor6.length))];
         matchactive4o += `${templateprocessor6.length | matchactive4o.length}`;
         if (reminderJ) {
            break;
         }
      } while (reminderJ && (!trophyt));
      if (trophyt) {
         downvU = "3";
      }
      if (dependencies1.size >= 5) {
         bannerK += "2";
      }
          let disconnectedv: Map<any, any> = new Map([[String.fromCharCode(120,95,57,55,95,101,121,101,100,114,111,112,112,101,114,0),28], [String.fromCharCode(118,99,111,109,98,105,110,101,95,103,95,54,52,0),709]]);
          let whiteanimationlivez = String.fromCharCode(110,105,109,97,116,101,100,95,99,95,57,51,0);
         dependencies1.set(`${trophyt}`, dependencies1.size % 2);
         disconnectedv.set(whiteanimationlivez, disconnectedv.size);
         whiteanimationlivez += `${3 << (Math.min(4, Math.abs(disconnectedv.size)))}`;
         hookC &= dependencies1.size;
       let penaltygoalL = String.fromCharCode(97,114,116,105,102,97,99,116,95,102,95,53,49,0);
         dependencies1.set(`${trophyt}`, ((trophyt ? 2 : 5) << (Math.min(Math.abs(dependencies1.size), 3))));
       let expiredN = String.fromCharCode(102,111,114,119,97,114,100,101,114,95,109,95,54,55,0);
       let flipperQ = String.fromCharCode(100,105,109,101,110,115,105,111,110,95,109,95,54,53,0);
      let leakcheckerC = expiredN.length <= 8460564;
      do {
         expiredN += `${(String.fromCharCode(113,0) == downvU ? downvU.length : (trophyt ? 1 : 1))}`;
         if (leakcheckerC) {
            break;
         }
      } while (leakcheckerC && (flipperQ == expiredN));
      for (let v = 0; v < 3; v++) {
          let promotionJ = String.fromCharCode(103,95,51,50,95,99,108,105,112,112,105,110,103,0);
          let mbsplashb = 0.0;
          let gifgoalbgp = String.fromCharCode(122,95,49,57,95,97,110,111,116,104,101,114,0);
          let bdxadsdkh = String.fromCharCode(97,99,116,105,118,97,116,101,95,112,95,51,57,0);
         flipperQ += `${bannerK.length << (Math.min(Math.abs(2), 5))}`;
         promotionJ += `${promotionJ.length}`;
         mbsplashb /= Math.max(bdxadsdkh.length, 1);
         gifgoalbgp = `${(String.fromCharCode(95,0) == gifgoalbgp ? parseInt(`${mbsplashb}`) : gifgoalbgp.length)}`;
         bdxadsdkh += "3";
      }
         flipperQ += "1";
      let bootG = String.fromCharCode(49,122,118,102,0) == downvU;
      do {
          let styles0 = String.fromCharCode(99,111,100,101,99,112,114,105,118,95,104,95,51,56,0);
         downvU += `${flipperQ.length / 2}`;
         styles0 = `${styles0.length}`;
         if (bootG) {
            break;
         }
      } while ((!downvU.includes(expiredN)) && bootG);
       let questN = 3;
       let chinao = 5;
         flipperQ += `${(penaltygoalL == String.fromCharCode(95,0) ? penaltygoalL.length : dependencies1.size)}`;
      if ((3 - hookC) >= 3 && 1 >= (3 - downvU.length)) {
          let statisticsinactive1 = String.fromCharCode(106,95,51,56,95,115,121,110,99,0);
          let kick8 = 0.0;
         downvU += "2";
         statisticsinactive1 += `${parseInt(`${kick8}`)}`;
         kick8 += (parseFloat(`${statisticsinactive1 == String.fromCharCode(52,0) ? parseInt(`${kick8}`) : statisticsinactive1.length}`));
      }
      stringn = [parseInt(`${selectF}`) & 1];
   }

        if (handleClose) handleClose();

   if (4 <= middleu) {
      middleu /= Math.max(1, spinnerl.length);
   }
   for (let m = 0; m < 1; m++) {
      filterm -= 1;
   }
   while (vipsportf.length == filterm) {
      filterm >>= Math.min(Math.abs(stringn.length * largef.length), 5);
      break;
   }
   while (shootyesgoal5.includes(`${stringn.length}`)) {
      shootyesgoal5 += "1";
      break;
   }
   let whatsappA = middleu >= 8249113;
   do {
       let weatherQ = String.fromCharCode(102,95,56,54,95,115,99,111,114,101,0);
       let matchh = true;
       let libanea = String.fromCharCode(119,95,57,54,95,99,111,110,118,101,114,116,111,114,0);
       let textlayoutmanagerd: Map<any, any> = new Map([[String.fromCharCode(103,95,53,52,95,116,98,108,101,110,100,0),691], [String.fromCharCode(98,117,102,102,95,99,95,56,53,0),242]]);
       let whistles = String.fromCharCode(101,95,49,51,95,114,101,102,115,0);
         weatherQ += `${(weatherQ == String.fromCharCode(67,0) ? libanea.length : weatherQ.length)}`;
      if (2 >= libanea.length) {
          let liveK: Map<any, any> = new Map([[String.fromCharCode(100,114,97,102,116,115,95,106,95,57,55,0),469], [String.fromCharCode(99,104,97,110,103,101,95,103,95,54,54,0),575]]);
          let defaultpredictionprofiler: Map<any, any> = new Map([[String.fromCharCode(121,95,54,95,100,109,97,98,117,102,0),488], [String.fromCharCode(108,95,53,52,95,115,111,117,110,100,101,120,0),513]]);
          let dacccfaabfbcbadeebddcabacdffdbT = String.fromCharCode(116,95,49,95,100,101,112,116,104,0);
          let confirmationR: Map<any, any> = new Map([[String.fromCharCode(115,115,114,99,115,95,99,95,54,52,0),String.fromCharCode(99,104,97,114,99,111,110,118,95,118,95,55,52,0)], [String.fromCharCode(110,95,49,51,95,109,101,109,115,104,105,112,0),String.fromCharCode(105,95,54,52,95,99,108,110,112,97,115,115,0)]]);
          let expiredu = String.fromCharCode(113,115,99,97,108,101,113,112,95,49,95,57,57,0);
         libanea += `${expiredu.length}`;
         liveK = new Map([[`${liveK.size}`, 2 ^ liveK.size]]);
         defaultpredictionprofiler.set(`${confirmationR.size}`, defaultpredictionprofiler.size);
         dacccfaabfbcbadeebddcabacdffdbT += `${dacccfaabfbcbadeebddcabacdffdbT.length * defaultpredictionprofiler.size}`;
         confirmationR.set(`${dacccfaabfbcbadeebddcabacdffdbT}`, 3);
         expiredu += `${defaultpredictionprofiler.size}`;
      }
      let comment5 = whistles.length <= 9540998;
      do {
         whistles = "2";
         if (comment5) {
            break;
         }
      } while ((whistles.length <= weatherQ.length) && comment5);
       let rewardA = String.fromCharCode(122,95,49,51,95,112,114,105,111,114,0);
       let defaultroombgV = String.fromCharCode(121,118,99,111,110,102,105,103,95,50,95,52,51,0);
      let whistleJ = 5860765 <= whistles.length;
      do {
          let libfb4 = 1.0;
          let launchw: Array<any> = [605, 386, 911];
          let combineK: Array<any> = [String.fromCharCode(112,97,101,116,104,95,106,95,52,50,0), String.fromCharCode(99,97,108,108,95,121,95,54,55,0)];
          let libcrashsdk4: Map<any, any> = new Map([[String.fromCharCode(100,101,97,99,116,105,118,97,116,105,111,110,95,50,95,49,52,0),420], [String.fromCharCode(117,110,113,117,97,110,116,105,122,101,95,53,95,53,50,0),692], [String.fromCharCode(97,109,114,119,98,100,97,116,97,95,107,95,57,0),90]]);
         whistles = `${rewardA.length}`;
         libfb4 /= Math.max(4, combineK.length);
         launchw.push(3);
         combineK.push(combineK.length);
         libcrashsdk4 = new Map([[`${launchw.length}`, launchw.length << (Math.min(Math.abs(3), 4))]]);
         if (whistleJ) {
            break;
         }
      } while (whistleJ && (3 >= whistles.length));
      for (let g = 0; g < 3; g++) {
          let libreactperfloggerjnig = 2;
          let downloaderS = String.fromCharCode(99,95,55,50,95,108,105,109,105,116,115,0);
          let iconclosewhitebg5 = String.fromCharCode(110,95,54,56,95,108,97,110,103,105,100,0);
          let light6 = String.fromCharCode(114,101,102,101,114,101,110,99,101,115,95,52,95,51,55,0);
          let questiconL = 2;
         whistles += `${textlayoutmanagerd.size}`;
         libreactperfloggerjnig >>= Math.min(downloaderS.length, 3);
         downloaderS += `${light6.length}`;
         iconclosewhitebg5 = `${(iconclosewhitebg5 == String.fromCharCode(111,0) ? light6.length : iconclosewhitebg5.length)}`;
         questiconL /= Math.max(libreactperfloggerjnig << (Math.min(downloaderS.length, 3)), 4);
      }
          let iconarrowrightR: Array<any> = [375, 597, 951];
          let static_d1v = 1.0;
          let ksadG = 4.0;
         libanea += `${(weatherQ == String.fromCharCode(113,0) ? weatherQ.length : textlayoutmanagerd.size)}`;
         iconarrowrightR = [2 & parseInt(`${static_d1v}`)];
         static_d1v /= Math.max(iconarrowrightR.length * parseInt(`${ksadG}`), 5);
         ksadG *= parseFloat(`${parseInt(`${static_d1v}`) & iconarrowrightR.length}`);
      for (let p = 0; p < 2; p++) {
          let libsgcoreq = 5;
          let anytimet = String.fromCharCode(108,95,54,53,95,114,101,99,111,110,105,110,116,101,114,0);
          let fastforwardG: Map<any, any> = new Map([[String.fromCharCode(106,101,114,114,111,114,95,51,95,57,55,0),374], [String.fromCharCode(105,115,110,101,103,97,116,105,118,101,95,110,95,48,0),554]]);
          let cornerkickI = String.fromCharCode(115,117,98,112,97,121,108,111,97,100,95,50,95,49,50,0);
         rewardA = `${((matchh ? 1 : 4) * 2)}`;
         libsgcoreq -= 1 + anytimet.length;
         anytimet += `${1 * fastforwardG.size}`;
         fastforwardG = new Map([[`${fastforwardG.size}`, libsgcoreq]]);
         cornerkickI = `${libsgcoreq}`;
      }
      if (!whistles.endsWith(rewardA)) {
         whistles += `${textlayoutmanagerd.size % 1}`;
      }
      while (1 > defaultroombgV.length) {
          let sell8 = 0.0;
         defaultroombgV += `${libanea.length & 3}`;
         sell8 += 1 - parseInt(`${sell8}`);
         break;
      }
      while (!libanea.endsWith(`${matchh}`)) {
          let playlistZ = String.fromCharCode(106,95,53,53,95,99,111,110,118,101,110,105,101,110,99,101,0);
          let libreactnativejnie = String.fromCharCode(112,97,114,116,105,116,105,111,110,101,100,95,103,95,56,51,0);
          let securityL = String.fromCharCode(117,118,97,114,105,110,116,95,100,95,54,48,0);
         matchh = libreactnativejnie.length == 91;
         playlistZ += `${(securityL == String.fromCharCode(89,0) ? playlistZ.length : securityL.length)}`;
         libreactnativejnie = `${securityL.length & 1}`;
         break;
      }
      middleu <<= Math.min(Math.abs((String.fromCharCode(90,0) == window_o3X ? middleu : window_o3X.length)), 4);
      if (whatsappA) {
         break;
      }
   } while (whatsappA && (2 <= (largef.length - 5) || 4 <= (5 - largef.length)));
   let analytic9 = long_2bH >= 5371517.0;
   do {
       let benefitQ = true;
       let fastforwardC: Map<any, any> = new Map([[String.fromCharCode(102,95,50,52,95,112,114,111,103,114,101,115,115,105,118,101,0),944], [String.fromCharCode(118,95,55,49,95,115,110,97,112,112,121,0),267], [String.fromCharCode(116,95,50,50,95,113,105,110,116,102,108,111,97,116,0),659]]);
      if (benefitQ) {
         fastforwardC = new Map([[`${fastforwardC.size}`, 2]]);
      }
      for (let c = 0; c < 3; c++) {
         fastforwardC = new Map([[`${fastforwardC.size}`, fastforwardC.size]]);
      }
          let moonR = String.fromCharCode(115,108,97,115,104,105,110,103,95,106,95,57,55,0);
         fastforwardC = new Map([[`${fastforwardC.size}`, ((benefitQ ? 4 : 2) + fastforwardC.size)]]);
         moonR += `${2 & moonR.length}`;
       let middlewarei: Array<any> = [588, 241];
         fastforwardC = new Map([[`${fastforwardC.size}`, ((benefitQ ? 1 : 4) % (Math.max(fastforwardC.size, 6)))]]);
      while (2 <= (5 % (Math.max(4, middlewarei.length)))) {
         benefitQ = middlewarei.length == fastforwardC.size;
         break;
      }
      long_2bH += window_o3X.length % 3;
      if (analytic9) {
         break;
      }
   } while (analytic9 && (4.19 == (2.86 * long_2bH)));

        Keyboard.dismiss();

   if (2 == vipsportf.length) {
      stringn = [vipsportf.length];
   }
   for (let k = 0; k < 1; k++) {
      largef += `${(String.fromCharCode(75,0) == shootyesgoal5 ? shootyesgoal5.length : parseInt(`${long_2bH}`))}`;
   }
       let imagesX = String.fromCharCode(101,100,103,101,115,95,54,95,49,52,0);
       let appsI: Map<any, any> = new Map([[String.fromCharCode(102,105,108,116,95,100,95,52,57,0),458], [String.fromCharCode(100,111,103,95,49,95,50,53,0),606]]);
       let default_mT: Array<any> = [687, 471, 103];
      for (let g = 0; g < 1; g++) {
         imagesX += `${imagesX.length % 1}`;
      }
      if (2 == imagesX.length) {
          let hejiO = String.fromCharCode(119,95,51,57,95,103,97,108,108,101,114,121,0);
          let rewind3 = 5;
          let countdownK = String.fromCharCode(109,95,49,57,95,97,108,98,117,109,115,0);
          let commentz: Map<any, any> = new Map([[String.fromCharCode(97,95,53,95,100,105,115,97,98,108,101,100,0),String.fromCharCode(101,110,113,117,101,117,101,95,97,95,50,50,0)], [String.fromCharCode(100,95,51,56,95,99,109,111,118,0),String.fromCharCode(100,101,103,114,97,100,97,116,105,111,110,95,113,95,55,51,0)]]);
          let direct1 = 5.0;
         imagesX = `${hejiO.length % (Math.max(1, 9))}`;
         hejiO = `${countdownK.length}`;
         rewind3 &= rewind3 + 2;
         countdownK += `${2 ^ countdownK.length}`;
         commentz.set(`${direct1}`, commentz.size << (Math.min(Math.abs(3), 5)));
         direct1 += commentz.size | parseInt(`${direct1}`);
      }
      for (let s = 0; s < 3; s++) {
         appsI = new Map([[`${appsI.size}`, appsI.size]]);
      }
          let predictionbannersharedA = 3.0;
          let unimplementedviewk = 2.0;
          let libavfiltery = false;
         imagesX += `${1 | default_mT.length}`;
         predictionbannersharedA -= parseFloat(`${parseInt(`${unimplementedviewk}`)}`);
         libavfiltery = !libavfiltery;
      let bridges = String.fromCharCode(54,95,117,117,108,0) == imagesX;
      do {
         imagesX += `${(String.fromCharCode(103,0) == imagesX ? imagesX.length : appsI.size)}`;
         if (bridges) {
            break;
         }
      } while (bridges && (imagesX.length < appsI.size));
          let controlsf = 3.0;
         imagesX += `${default_mT.length % 1}`;
         controlsf /= Math.max(parseInt(`${controlsf}`), 3);
      let speck = 5612248 <= imagesX.length;
      do {
         imagesX += `${imagesX.length & 2}`;
         if (speck) {
            break;
         }
      } while (speck && (imagesX.startsWith(`${default_mT.length}`)));
          let kickS = String.fromCharCode(100,97,117,100,95,101,95,56,56,0);
          let vietnamA = 4.0;
          let greyarrowupk = 2.0;
         appsI.set(kickS, kickS.length);
         vietnamA += parseInt(`${greyarrowupk}`);
         greyarrowupk += parseFloat(`${parseInt(`${vietnamA}`)}`);
          let countryy = String.fromCharCode(106,115,111,110,115,95,100,95,57,53,0);
          let reactnavigationC = 5;
         default_mT.push(reactnavigationC / (Math.max(2, 2)));
         countryy = "1";
         reactnavigationC += countryy.length;
      shootyesgoal5 += `${window_o3X.length}`;
      vipsportf = `${3 / (Math.max(4, largef.length))}`;
      filterm %= Math.max(1, 1);
      spinnerl.push(window_o3X.length * 1);
        resetForm();
    }

    const onSubmitForm = async () => {
       let h_unlockF = String.fromCharCode(103,108,121,112,104,95,103,95,57,53,0);
    let flipperJ = String.fromCharCode(118,95,55,49,95,112,114,111,99,99,101,115,115,0);
    let gdtadvW: Map<any, any> = new Map([[String.fromCharCode(109,110,101,109,111,110,105,99,95,52,95,52,56,0),862], [String.fromCharCode(112,114,111,99,101,115,115,95,116,95,49,55,0),410], [String.fromCharCode(114,111,117,116,101,95,50,95,51,57,0),974]]);
    let becomes = String.fromCharCode(113,95,55,56,95,116,111,107,101,110,105,122,101,100,0);
    let greytickd = false;
    let activeD = String.fromCharCode(97,95,55,52,95,101,115,100,115,0);
    let materialT = String.fromCharCode(101,97,105,100,99,116,95,112,95,51,52,0);
    let hejih = String.fromCharCode(104,95,52,54,95,102,111,114,0);
    let thailandO = String.fromCharCode(109,105,115,109,97,116,99,104,95,103,95,49,52,0);
   while (greytickd) {
      h_unlockF += `${activeD.length + flipperJ.length}`;
      break;
   }

        if (usernameErrMsg !== null) return;

      activeD += `${materialT.length}`;

        if (isSubmitting) return;

      activeD = `${activeD.length & becomes.length}`;
        setSubmitting(true);

       let sportm: Map<any, any> = new Map([[String.fromCharCode(113,95,55,53,95,115,116,115,115,0),false ], [String.fromCharCode(116,117,110,110,101,108,101,100,95,115,95,56,54,0),true ], [String.fromCharCode(105,105,110,116,95,114,95,52,52,0),false ]]);
       let mbsplash1: Map<any, any> = new Map([[String.fromCharCode(114,101,115,105,103,110,95,106,95,54,57,0),true ], [String.fromCharCode(117,95,54,53,95,116,105,109,101,108,105,109,105,116,0),true ]]);
       let dropdownd = String.fromCharCode(114,101,99,111,114,100,97,98,108,101,95,109,95,52,56,0);
       let hooko = 1.0;
       let rewardc = 5.0;
      for (let n = 0; n < 2; n++) {
         hooko *= mbsplash1.size - 1;
      }
      while ((dropdownd.length / 1) <= 1) {
          let footballfiledlayouti = String.fromCharCode(115,119,105,102,116,99,95,105,95,49,54,0);
          let profileactive0 = String.fromCharCode(109,98,104,115,95,108,95,56,50,0);
          let page5 = 5.0;
          let hooksX: Map<any, any> = new Map([[String.fromCharCode(111,95,56,49,95,112,111,108,113,97,0),686], [String.fromCharCode(109,95,55,54,95,109,117,108,116,105,112,108,101,120,101,100,0),194]]);
          let searchbarB: Map<any, any> = new Map([[String.fromCharCode(103,95,54,48,95,115,116,97,99,107,101,100,0),String.fromCharCode(111,110,118,101,114,115,97,116,105,111,110,95,120,95,51,52,0)], [String.fromCharCode(117,110,98,111,120,101,100,95,122,95,49,52,0),String.fromCharCode(103,95,51,55,0)], [String.fromCharCode(107,95,52,56,95,104,97,110,100,108,101,0),String.fromCharCode(98,97,99,107,108,105,103,104,116,95,110,95,52,49,0)]]);
         sportm.set(`${rewardc}`, 1);
         footballfiledlayouti += `${searchbarB.size}`;
         profileactive0 += `${footballfiledlayouti.length}`;
         page5 /= Math.max(3, parseFloat(`${2}`));
         hooksX = new Map([[profileactive0, parseInt(`${page5}`) | 3]]);
         searchbarB = new Map([[`${searchbarB.size}`, 2]]);
         break;
      }
         hooko -= mbsplash1.size % 1;
         sportm = new Map([[`${sportm.size}`, mbsplash1.size * sportm.size]]);
      if ((mbsplash1.size + parseInt(`${rewardc}`)) >= 3) {
          let phoner: Array<any> = [126, 604, 339];
          let appleK: Map<any, any> = new Map([[String.fromCharCode(115,95,55,50,95,114,101,115,101,116,0),691], [String.fromCharCode(107,95,50,56,95,115,101,103,109,101,110,116,115,0),62], [String.fromCharCode(108,95,51,53,95,99,102,116,102,115,117,98,0),409]]);
          let videoR: Map<any, any> = new Map([[String.fromCharCode(119,95,52,49,95,112,114,111,112,111,115,101,0),271], [String.fromCharCode(122,95,53,50,95,115,104,105,101,108,100,0),590]]);
          let loginr = true;
         rewardc += (String.fromCharCode(51,0) == dropdownd ? dropdownd.length : appleK.size);
         phoner.push((3 ^ (loginr ? 3 : 4)));
         appleK.set(`${loginr}`, videoR.size << (Math.min(Math.abs(1), 1)));
         videoR.set(`${loginr}`, ((loginr ? 4 : 2) + 2));
      }
       let related4 = true;
       let searchX = true;
         searchX = !searchX || sportm.size > 30;
         rewardc -= parseInt(`${hooko}`);
      becomes += "3";

        try {

       let splashe = 4.0;
      while (splashe <= splashe) {
         splashe /= Math.max(5, parseFloat(`${parseInt(`${splashe}`)}`));
         break;
      }
         splashe += parseFloat(`${parseInt(`${splashe}`) / (Math.max(parseInt(`${splashe}`), 9))}`);
         splashe -= parseFloat(`${parseInt(`${splashe}`) & parseInt(`${splashe}`)}`);
      greytickd = String.fromCharCode(101,0) == materialT;
            await wwIconscheduleColors.updateUsername({
                username: username,
            });
        } catch (err: any) {
            if (
                err.errors &&
                err.errors.username
            ) {

       let window_l4 = String.fromCharCode(115,101,97,108,95,105,95,56,53,0);
       let chart8 = 4;
       let predictionbannersharede = String.fromCharCode(115,95,54,50,95,115,105,109,117,108,97,116,105,111,110,0);
      let module6 = chart8 >= 6434652;
      do {
         chart8 %= Math.max(chart8 & window_l4.length, 3);
         if (module6) {
            break;
         }
      } while (module6 && (chart8 >= 3));
      for (let c = 0; c < 1; c++) {
          let typingN = 1;
         predictionbannersharede = `${chart8 << (Math.min(Math.abs(1), 5))}`;
         typingN >>= Math.min(Math.abs(2), 2);
      }
         predictionbannersharede += `${predictionbannersharede.length | 2}`;
         predictionbannersharede = "1";
      for (let x = 0; x < 1; x++) {
          let pathK = 0;
          let traminiR = 5.0;
         predictionbannersharede += `${parseInt(`${traminiR}`) ^ window_l4.length}`;
         pathK += 1;
         traminiR *= pathK;
      }
      let attributedstringW = 7816189 >= chart8;
      do {
          let goalu = false;
          let resultc: Map<any, any> = new Map([[String.fromCharCode(98,95,53,52,95,115,112,101,101,100,111,109,101,116,101,114,0),false ], [String.fromCharCode(118,105,97,98,108,101,95,120,95,57,55,0),false ], [String.fromCharCode(115,117,98,115,101,115,115,105,111,110,95,107,95,50,52,0),true ]]);
          let temp3 = 4;
         chart8 /= Math.max(1 ^ temp3, 4);
         goalu = (87 >= (resultc.size + (!goalu ? resultc.size : 59)));
         temp3 &= ((goalu ? 4 : 2) % (Math.max(resultc.size, 5)));
         if (attributedstringW) {
            break;
         }
      } while ((chart8 <= window_l4.length) && attributedstringW);
      for (let g = 0; g < 2; g++) {
          let nativemodulek = 3.0;
          let referrert = String.fromCharCode(120,95,49,57,95,105,109,109,101,100,105,97,116,101,108,121,0);
          let iconplay7 = String.fromCharCode(115,99,104,109,95,107,95,57,55,0);
          let turnj: Array<any> = [String.fromCharCode(97,95,50,56,95,108,105,98,109,0), String.fromCharCode(102,95,53,54,95,117,112,99,97,115,101,0), String.fromCharCode(112,114,105,110,116,102,95,98,95,54,51,0)];
          let minivod7 = String.fromCharCode(109,105,110,116,95,49,95,54,57,0);
         predictionbannersharede = `${turnj.length << (Math.min(Math.abs(3), 2))}`;
         nativemodulek /= Math.max(2, (parseFloat(`${String.fromCharCode(52,0) == iconplay7 ? iconplay7.length : parseInt(`${nativemodulek}`)}`)));
         referrert += `${minivod7.length % (Math.max(iconplay7.length, 10))}`;
         turnj.push(2);
         minivod7 += `${minivod7.length ^ 1}`;
      }
      while (3 > (chart8 % (Math.max(window_l4.length, 1))) || (3 % (Math.max(2, chart8))) > 2) {
         window_l4 = "2";
         break;
      }
      let iconwechatj = 5513416 >= predictionbannersharede.length;
      do {
         predictionbannersharede += `${predictionbannersharede.length | chart8}`;
         if (iconwechatj) {
            break;
         }
      } while (((chart8 & 1) >= 4 || 1 >= (predictionbannersharede.length & 1)) && iconwechatj);
      flipperJ += `${materialT.length}`;
                setUsernameErrMsg(err.errors.username);
            }

            if (!err.errors && err.message) {

      gdtadvW = new Map([[`${gdtadvW.size}`, gdtadvW.size]]);
                setUsernameErrMsg(err.message);
            }

            setSubmitting(false);

   let webview5 = String.fromCharCode(110,100,117,121,99,109,117,113,95,0) == materialT;
   do {
      materialT += `${materialT.length}`;
      if (webview5) {
         break;
      }
   } while ((materialT.length < 1 && h_unlockF.length < 1) && webview5);
            return;
        }


        dispatch(updateUsernameState(username));

      materialT = `${hejih.length}`;
        dispatch(changeScreenAction("修改成功"));

       let assistH = 5;
       let changeQ: Array<any> = [995, 171, 989];
       let mutedo = false;
      let vietnamD = changeQ.length <= 7162743;
      do {
         changeQ = [changeQ.length];
         if (vietnamD) {
            break;
         }
      } while ((mutedo) && vietnamD);
      if (1 > changeQ.length) {
         mutedo = (assistH - changeQ.length) < 41;
      }
       let dinit_ir = true;
      if (mutedo) {
         dinit_ir = mutedo || !dinit_ir;
      }
         dinit_ir = 1 <= assistH;
          let friendsB = String.fromCharCode(119,95,54,50,95,118,101,114,105,102,105,101,114,0);
          let libfolly1 = 1.0;
          let native_ = String.fromCharCode(108,95,53,57,95,110,97,118,0);
         assistH <<= Math.min(1, parseInt(`${Math.abs(((dinit_ir ? 3 : 4) >> (Math.min(friendsB.length, 4))))}`));
         friendsB += "3";
         libfolly1 *= parseFloat(`${3}`);
         native_ = `${native_.length + parseInt(`${libfolly1}`)}`;
      while (assistH > 4) {
         mutedo = dinit_ir || !mutedo;
         break;
      }
      let telegramA = changeQ.length >= 6674485;
      do {
         changeQ = [assistH << (Math.min(changeQ.length, 1))];
         if (telegramA) {
            break;
         }
      } while (telegramA && (changeQ.length >= 3));
         mutedo = !mutedo;
      hejih += `${hejih.length}`;

        if (onSubmitSuccess) onSubmitSuccess(username);

      activeD += `${gdtadvW.size | flipperJ.length}`;

        Keyboard.dismiss();

      gdtadvW.set(h_unlockF, flipperJ.length);
        navigation.navigate("Home", {
            screen: "Profile",
        });

   while (hejih != String.fromCharCode(53,0)) {
      flipperJ = `${hejih.length}`;
      break;
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
                                source={require("@static/images/invite/countrySingaporeManager.png")}
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