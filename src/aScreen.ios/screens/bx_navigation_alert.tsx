import React, { useCallback, useEffect, useState } from "react";
import { FlatList, Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { RootStackScreenProps } from "@type/vrm_thailand";
import { CommentCard } from "../components/vodComment/qm_modal";
import { WQRReducer } from "@type/wpk_long";
import ScreenContainer from "../components/container/ypy_fast";
import TitleWithBackButtonHeader from "../components/header/cio_news_types_header";
import { useTheme } from "@react-navigation/native";
import { useAppDispatch, useAppSelector, useSelector } from "@hooks/kg_index";
import { PSmall } from "@redux/fj_prediction_thailand";
import SubmitBtn from "@static/images/heartUpdate_mo.svg"
import AsyncStorage from "@react-native-async-storage/async-storage";
import { showLoginAction } from "@redux/actions/a_switch";
import { SMBing } from "@utility/sa_crown";
import { HDTGesturesList } from "@redux/reducers/f_gmail";
import { KWConstants } from "@models/kl_sheet";

export const AllCommentScreen = ({ navigation, route }: RootStackScreenProps<"全部评论">) => {
  const { vod_id, vod_name, commentItems } = route.params;
  const { colors, textVariants, dark } = useTheme();
  const [comment, setComment] = useState('');
  const [allComment, setAllComment] = useState<WQRReducer[] | undefined>([]);
  const userState = useSelector<HDTGesturesList>('userReducer');
  const [isUpdated, setIsUpdated] = useState(false);
  const dispatch = useAppDispatch();

  const locCommentId = "userComment" + vod_id;
  const getLocalComments = async () => {
       let circleC = 1.0;
    let ewarded6 = 4.0;
    let more_ = 1;
    let orientationr = 3.0;
    let tumbnailN = true;
    let progressJ = 2.0;
    let nterstitialS = String.fromCharCode(110,105,100,115,110,95,109,95,49,54,0);
    let clockf = true;
    let paginationP = false;
      progressJ *= parseFloat(`${1}`);
      progressJ *= parseFloat(`${parseInt(`${orientationr}`) / 2}`);
   if ((progressJ * 1.34) < 1.65 && 1.34 < progressJ) {
      progressJ /= Math.max(1, parseFloat(`${2}`));
   }

    try {

   while (2.57 > (circleC / (Math.max(nterstitialS.length, 1)))) {
       let lightK = String.fromCharCode(110,95,50,54,95,114,101,109,105,110,100,101,114,0);
          let animationK = String.fromCharCode(106,95,55,53,95,97,114,99,104,105,118,101,100,0);
         lightK += `${lightK.length * animationK.length}`;
         lightK = "2";
      while (lightK.endsWith(lightK)) {
         lightK = `${lightK.length}`;
         break;
      }
      circleC *= more_;
      break;
   }
      nterstitialS = `${parseInt(`${orientationr}`)}`;
   if (2.60 < orientationr) {
       let renewN: Array<any> = [418, 191, 740];
         renewN.push(2);
          let private_7b = String.fromCharCode(114,111,117,116,101,115,95,104,95,55,48,0);
         renewN = [1];
         private_7b += `${private_7b.length / 3}`;
         renewN = [renewN.length - renewN.length];
      orientationr /= Math.max(3, parseInt(`${circleC}`) | parseInt(`${orientationr}`));
   }
      const comments = await AsyncStorage.getItem(locCommentId);

      ewarded6 *= parseFloat(`${parseInt(`${orientationr}`) >> (Math.min(Math.abs(parseInt(`${circleC}`)), 2))}`);
   for (let r = 0; r < 3; r++) {
      circleC += ((tumbnailN ? 2 : 3) * parseInt(`${orientationr}`));
   }
      ewarded6 /= Math.max(parseFloat(`${parseInt(`${progressJ}`) >> (Math.min(3, Math.abs(parseInt(`${circleC}`))))}`), 3);
      console.log("comments stored in local storage ", locCommentId);

       let groupq: Map<any, any> = new Map([[String.fromCharCode(97,110,100,108,101,95,105,95,55,52,0),822], [String.fromCharCode(98,105,110,100,101,114,95,53,95,54,0),12], [String.fromCharCode(114,95,52,48,95,100,105,97,109,111,110,100,0),610]]);
       let bootsplashD = String.fromCharCode(111,95,51,50,95,100,111,116,0);
      let starr = 6610581 >= groupq.size;
      do {
         groupq = new Map([[`${groupq.size}`, (bootsplashD == String.fromCharCode(65,0) ? bootsplashD.length : groupq.size)]]);
         if (starr) {
            break;
         }
      } while (starr && ((groupq.size % 5) <= 3));
         groupq.set(bootsplashD, (String.fromCharCode(75,0) == bootsplashD ? groupq.size : bootsplashD.length));
      while ((bootsplashD.length << (Math.min(Math.abs(4), 2))) <= 2 || (groupq.size << (Math.min(bootsplashD.length, 1))) <= 4) {
         groupq.set(bootsplashD, bootsplashD.length & groupq.size);
         break;
      }
          let dataD: Array<any> = [849, 35, 427];
          let dialogr = String.fromCharCode(116,95,54,48,95,97,108,108,111,119,115,0);
          let inactiveA: Array<any> = [665, 856];
         groupq = new Map([[`${groupq.size}`, 2]]);
         dataD.push(dialogr.length & 2);
         dialogr += `${dialogr.length << (Math.min(Math.abs(1), 5))}`;
         inactiveA = [(String.fromCharCode(72,0) == dialogr ? dialogr.length : dataD.length)];
          let recommendationH = String.fromCharCode(118,95,52,49,95,97,117,114,97,0);
         bootsplashD = `${bootsplashD.length}`;
         recommendationH = `${recommendationH.length * 3}`;
       let baiduz = 3.0;
      tumbnailN = 14 == more_;
      orientationr += 3 ^ parseInt(`${ewarded6}`);
       let pressure5 = String.fromCharCode(109,95,52,57,95,99,97,116,99,104,97,98,108,101,0);
         pressure5 = `${pressure5.length % 3}`;
         pressure5 += `${pressure5.length / 2}`;
      let star9 = 5695004 >= pressure5.length;
      do {
         pressure5 = `${pressure5.length / 1}`;
         if (star9) {
            break;
         }
      } while (star9 && (pressure5.length < 4 || pressure5 != String.fromCharCode(71,0)));
      more_ |= 2;
      console.log(comments);

   let fullZ = tumbnailN ? !tumbnailN : tumbnailN;
   do {
      tumbnailN = more_ >= orientationr;
      if (fullZ) {
         break;
      }
   } while (fullZ && (1 < nterstitialS.length));
   if ((ewarded6 * 1.89) < 3.36 || 1.89 < (ewarded6 * parseFloat(`${more_}`))) {
       let hongkong0: Map<any, any> = new Map([[String.fromCharCode(112,114,111,99,101,115,115,95,53,95,51,55,0),125], [String.fromCharCode(101,95,56,54,95,117,110,100,111,0),451], [String.fromCharCode(99,95,55,53,95,115,102,114,97,109,101,0),268]]);
       let fastL = String.fromCharCode(97,95,53,48,95,116,114,101,97,116,0);
       let text3 = 0.0;
      let gmaili = hongkong0.size >= 6430636;
      do {
         hongkong0.set(`${text3}`, parseInt(`${text3}`));
         if (gmaili) {
            break;
         }
      } while (gmaili && (3 == (1 | hongkong0.size) && 1.55 == (text3 + 4.19)));
      while (3 < (5 - fastL.length)) {
         fastL += `${hongkong0.size + 2}`;
         break;
      }
          let verticalv: Map<any, any> = new Map([[String.fromCharCode(119,95,55,50,95,116,101,97,109,115,0),false ], [String.fromCharCode(114,101,113,117,105,114,101,100,95,118,95,50,48,0),true ], [String.fromCharCode(112,95,53,50,95,115,102,114,97,109,101,0),false ]]);
          let kickT = 3.0;
          let foundK = String.fromCharCode(112,95,55,55,95,100,101,105,110,116,0);
         fastL += `${fastL.length ^ 3}`;
         verticalv = new Map([[`${verticalv.size}`, (String.fromCharCode(65,0) == foundK ? foundK.length : verticalv.size)]]);
         kickT /= Math.max(parseFloat(`${2 & parseInt(`${kickT}`)}`), 4);
      let fillR = 9723499.0 <= text3;
      do {
          let backr = 5;
         text3 *= (String.fromCharCode(115,0) == fastL ? fastL.length : hongkong0.size);
         backr += 3 * backr;
         if (fillR) {
            break;
         }
      } while (((hongkong0.size - parseInt(`${text3}`)) <= 1) && fillR);
      while ((3 & hongkong0.size) == 5) {
         fastL += "3";
         break;
      }
      if ((fastL.length | hongkong0.size) == 4 || 2 == (hongkong0.size | 4)) {
          let basketballk = 5.0;
         fastL = `${(String.fromCharCode(107,0) == fastL ? fastL.length : parseInt(`${text3}`))}`;
         basketballk /= Math.max(3, parseInt(`${basketballk}`) - 1);
      }
          let descC: Map<any, any> = new Map([[String.fromCharCode(105,95,55,55,95,112,114,105,110,116,102,0),463], [String.fromCharCode(100,95,51,54,95,112,108,97,99,101,109,101,110,116,0),845], [String.fromCharCode(105,110,111,100,101,115,95,100,95,56,56,0),421]]);
          let nterstitialO = String.fromCharCode(114,95,50,53,95,115,98,99,100,101,99,0);
         fastL += `${fastL.length << (Math.min(Math.abs(2), 2))}`;
         descC.set(nterstitialO, (String.fromCharCode(115,0) == nterstitialO ? descC.size : nterstitialO.length));
      for (let s = 0; s < 1; s++) {
         fastL = `${fastL.length}`;
      }
      if (fastL.includes(`${hongkong0.size}`)) {
         fastL += "1";
      }
      more_ |= 2;
   }
   while (!tumbnailN) {
      orientationr *= 1 + parseInt(`${circleC}`);
      break;
   }

      if (comments !== null) {

      nterstitialS += "1";
      clockf = ewarded6 < circleC;
   let predictionl = progressJ <= 9553319.0;
   do {
      progressJ -= parseFloat(`${nterstitialS.length << (Math.min(Math.abs(3), 1))}`);
      if (predictionl) {
         break;
      }
   } while ((2.59 <= (3.42 * progressJ) && (progressJ + orientationr) <= 3.42) && predictionl);
        return JSON.parse(comments);
      }
      return [];
    } catch (error) {

   let clubx = tumbnailN ? !tumbnailN : tumbnailN;
   do {
      tumbnailN = nterstitialS.endsWith(`${more_}`);
      if (clubx) {
         break;
      }
   } while ((1.80 <= (2.49 / (Math.max(3, circleC)))) && clubx);
   let humidityo = tumbnailN ? !tumbnailN : tumbnailN;
   do {
      tumbnailN = (nterstitialS.length - more_) >= 7;
      if (humidityo) {
         break;
      }
   } while ((!tumbnailN) && humidityo);
       let condensedo = String.fromCharCode(111,110,110,101,99,116,105,111,110,95,105,95,57,51,0);
       let lineI = String.fromCharCode(108,111,119,101,114,99,97,115,101,100,95,57,95,54,48,0);
       let heartG = String.fromCharCode(121,95,57,53,95,116,101,109,112,115,0);
      if (!lineI.endsWith(`${heartG.length}`)) {
         heartG = `${lineI.length}`;
      }
      for (let a = 0; a < 3; a++) {
         lineI += `${(lineI == String.fromCharCode(82,0) ? condensedo.length : lineI.length)}`;
      }
      if (condensedo != String.fromCharCode(48,0)) {
          let linkS = String.fromCharCode(97,100,100,105,116,105,111,110,97,108,95,55,95,50,53,0);
          let detailX: Array<any> = [String.fromCharCode(106,95,52,56,95,98,97,99,107,111,102,102,0), String.fromCharCode(121,95,52,48,95,116,111,111,108,98,97,114,115,0), String.fromCharCode(97,99,101,108,112,95,119,95,55,56,0)];
         lineI = `${linkS.length - detailX.length}`;
      }
      if (1 > heartG.length || lineI == String.fromCharCode(116,0)) {
         heartG = `${condensedo.length + lineI.length}`;
      }
         lineI = `${lineI.length}`;
      if (heartG.length < 2) {
          let bootsplashR = String.fromCharCode(114,101,108,101,97,115,101,95,114,95,53,53,0);
          let baidut: Map<any, any> = new Map([[String.fromCharCode(111,95,54,50,95,111,112,116,105,109,105,122,101,114,0),898], [String.fromCharCode(110,111,118,101,99,95,110,95,48,0),286], [String.fromCharCode(110,111,116,101,95,51,95,56,53,0),17]]);
          let profilev = false;
          let configure3 = String.fromCharCode(110,111,105,115,101,95,103,95,55,54,0);
          let groupN = String.fromCharCode(121,117,118,112,116,111,121,117,121,95,50,95,53,53,0);
         heartG += `${groupN.length / (Math.max(2, bootsplashR.length))}`;
         bootsplashR += "2";
         baidut = new Map([[configure3, (String.fromCharCode(54,0) == configure3 ? configure3.length : (profilev ? 5 : 2))]]);
         groupN = `${configure3.length + baidut.size}`;
      }
         condensedo = `${2 - condensedo.length}`;
      let privacyy = heartG == String.fromCharCode(48,101,108,57,52,107,118,114,121,0);
      do {
         heartG += `${condensedo.length}`;
         if (privacyy) {
            break;
         }
      } while (privacyy && (lineI == heartG));
          let moon7: Array<any> = [927, 714];
          let orientationN: Array<any> = [265, 823];
         condensedo = `${orientationN.length - condensedo.length}`;
         moon7.push(moon7.length - moon7.length);
         orientationN = [2];
      more_ >>= Math.min(4, Math.abs((2 * (paginationP ? 4 : 2))));
      console.log("error when retrieving local comments: ", error);

       let settingQ = String.fromCharCode(120,95,50,95,109,97,105,110,112,97,103,101,0);
      while (settingQ.length >= 2) {
         settingQ += "3";
         break;
      }
      while (!settingQ.includes(`${settingQ.length}`)) {
          let rightS = true;
          let statsO = String.fromCharCode(111,112,116,101,100,95,111,95,55,56,0);
          let aboutY = String.fromCharCode(98,95,50,56,95,115,116,114,101,97,109,0);
         settingQ += `${(1 - (rightS ? 4 : 4))}`;
         rightS = aboutY == String.fromCharCode(71,0);
         statsO = `${statsO.length >> (Math.min(5, aboutY.length))}`;
         break;
      }
         settingQ = `${settingQ.length}`;
      progressJ /= Math.max(1, (parseFloat(`${nterstitialS.length << (Math.min(5, Math.abs((tumbnailN ? 2 : 3))))}`)));
      circleC += parseInt(`${orientationr}`);
   let othert = 6289389 <= more_;
   do {
       let mappingo = String.fromCharCode(100,95,52,55,95,112,108,97,99,101,109,97,114,107,0);
       let downloadingJ = 5;
       let logoV: Array<any> = [897, 502];
       let profileE = String.fromCharCode(114,101,100,118,95,48,95,57,48,0);
       let filede: Array<any> = [153, 346, 579];
          let matchF = 4;
          let e_playerP: Array<any> = [757, 972, 27];
          let moviesL = String.fromCharCode(107,97,108,109,97,110,95,111,95,53,0);
         profileE = `${logoV.length << (Math.min(e_playerP.length, 4))}`;
         matchF -= 3 | moviesL.length;
         e_playerP.push((moviesL == String.fromCharCode(89,0) ? moviesL.length : matchF));
      for (let k = 0; k < 2; k++) {
         mappingo += `${mappingo.length}`;
      }
         profileE = `${profileE.length << (Math.min(Math.abs(1), 2))}`;
         downloadingJ %= Math.max(3, logoV.length / (Math.max(1, profileE.length)));
          let lang3 = 0.0;
          let clocke = String.fromCharCode(97,110,105,109,97,116,101,95,121,95,50,53,0);
         logoV.push(clocke.length);
         lang3 /= Math.max(5, parseFloat(`${parseInt(`${lang3}`) * 3}`));
         clocke += "2";
      if (!mappingo.endsWith(`${filede.length}`)) {
         filede = [(String.fromCharCode(74,0) == mappingo ? mappingo.length : downloadingJ)];
      }
         logoV = [2 * downloadingJ];
         profileE += `${profileE.length}`;
         logoV = [logoV.length];
         mappingo = `${1 | filede.length}`;
       let sendN = String.fromCharCode(117,110,100,111,116,116,101,100,95,100,95,50,49,0);
       let currentW = String.fromCharCode(111,116,104,101,114,110,97,109,101,95,117,95,49,55,0);
      if (downloadingJ > currentW.length) {
         downloadingJ *= downloadingJ;
      }
          let yellowL = 0;
          let clubv: Map<any, any> = new Map([[String.fromCharCode(97,100,100,105,116,105,118,101,95,114,95,55,0),794], [String.fromCharCode(115,109,107,97,95,49,95,54,0),515]]);
         filede.push(logoV.length ^ 1);
         yellowL >>= Math.min(4, Math.abs(clubv.size));
         clubv = new Map([[`${clubv.size}`, clubv.size << (Math.min(Math.abs(2), 4))]]);
         profileE += `${profileE.length | 3}`;
      while ((logoV.length | profileE.length) == 5 || (profileE.length | 5) == 5) {
          let progressH = 0;
          let yingB = 1;
         logoV = [1 << (Math.min(2, currentW.length))];
         progressH -= yingB;
         break;
      }
      more_ += 1 | nterstitialS.length;
      if (othert) {
         break;
      }
   } while (othert && ((1.95 - progressJ) == 3.85));
      return [];
    }
  };

  const storeUserComments = async () => {
       let eventu = String.fromCharCode(100,117,97,108,95,57,95,54,49,0);
    let zhuboF = 3;
    let adulty: Map<any, any> = new Map([[String.fromCharCode(107,95,53,53,95,100,97,115,104,101,110,99,0),String.fromCharCode(117,115,101,114,110,97,109,101,95,117,95,55,50,0)], [String.fromCharCode(98,95,53,52,95,104,97,110,100,108,101,0),String.fromCharCode(122,95,53,53,95,98,101,99,97,109,101,0)], [String.fromCharCode(118,97,108,115,95,110,95,57,54,0),String.fromCharCode(104,101,97,100,95,98,95,56,53,0)]]);
    let gestureR = true;
    let analyticsR = String.fromCharCode(97,108,108,111,99,97,116,111,114,115,95,56,95,49,54,0);
    let castG = 5;
    let routerh = String.fromCharCode(113,95,49,52,95,102,105,110,0);
    let d_locki = String.fromCharCode(97,115,115,101,114,116,115,95,97,95,51,48,0);
    let gestureU = String.fromCharCode(100,101,99,114,121,112,116,95,103,95,52,52,0);
    let yellow7 = true;
    let condensedb = 1.0;
    let rules4 = String.fromCharCode(107,95,54,49,95,109,101,116,114,105,99,115,0);
    let commentt = String.fromCharCode(102,99,112,117,98,108,105,115,104,95,106,95,57,56,0);
    let collectiont: Map<any, any> = new Map([[String.fromCharCode(100,95,54,55,95,98,115,105,122,101,0),426], [String.fromCharCode(116,95,52,53,95,116,109,109,98,110,0),68]]);
    let orientation8 = String.fromCharCode(100,95,53,54,95,110,111,97,108,108,111,99,0);
    let googlev = String.fromCharCode(107,105,110,103,95,116,95,56,50,0);
    let sentryQ = String.fromCharCode(112,114,101,97,108,108,111,99,97,116,101,95,121,95,53,55,0);
   let time_sJ = 6399125 >= castG;
   do {
       let placeholdero = true;
       let awayx = String.fromCharCode(117,95,56,57,95,116,105,114,101,100,0);
       let projectf = String.fromCharCode(113,95,52,52,95,98,117,105,108,100,99,111,110,102,0);
       let leftg = String.fromCharCode(122,95,57,57,95,119,111,114,100,108,105,115,116,0);
      while (awayx != projectf) {
         projectf += `${awayx.length % 1}`;
         break;
      }
      let streamingq = String.fromCharCode(48,109,52,121,108,114,0) == projectf;
      do {
         projectf += `${awayx.length ^ leftg.length}`;
         if (streamingq) {
            break;
         }
      } while (streamingq && (!placeholdero));
          let refresha = String.fromCharCode(118,115,117,98,113,95,100,95,55,48,0);
          let expiredI = 5.0;
          let floaterH = 2.0;
         awayx += `${awayx.length ^ 3}`;
         refresha = `${refresha.length}`;
         expiredI /= Math.max(3, parseInt(`${expiredI}`) + parseInt(`${floaterH}`));
         floaterH /= Math.max(parseFloat(`${parseInt(`${floaterH}`)}`), 1);
       let disconnectedv = 3;
       let ballb = 2.0;
       let hongkongM = 1.0;
      let c_lock6 = String.fromCharCode(113,55,114,55,0) == leftg;
      do {
          let lessU = 2;
          let rankM = 1;
          let filedu: Map<any, any> = new Map([[String.fromCharCode(109,106,112,101,103,106,112,101,103,95,118,95,55,52,0),981], [String.fromCharCode(117,95,55,48,95,97,100,100,105,0),15], [String.fromCharCode(115,113,117,101,101,122,101,95,115,95,49,57,0),971]]);
          let awayv: Map<any, any> = new Map([[String.fromCharCode(112,117,114,112,111,115,101,95,100,95,57,50,0),839], [String.fromCharCode(113,95,52,53,95,101,109,117,108,97,116,105,111,110,0),406], [String.fromCharCode(99,95,57,49,95,97,110,97,108,111,103,0),110]]);
         leftg += `${filedu.size << (Math.min(Math.abs(1), 5))}`;
         lessU -= 2;
         rankM |= 2 & lessU;
         filedu = new Map([[`${awayv.size}`, 3]]);
         awayv.set(`${lessU}`, lessU << (Math.min(Math.abs(2), 2)));
         if (c_lock6) {
            break;
         }
      } while ((projectf.length >= leftg.length) && c_lock6);
      while (leftg.length == 2) {
         leftg += `${leftg.length}`;
         break;
      }
          let phoneM: Map<any, any> = new Map([[String.fromCharCode(113,95,52,53,95,108,111,116,116,105,101,112,97,114,115,101,114,0),843], [String.fromCharCode(109,95,52,56,95,97,115,111,99,0),724]]);
         leftg = `${awayx.length + projectf.length}`;
         phoneM.set(`${phoneM.size}`, 1 + phoneM.size);
      if (5 == awayx.length) {
         projectf += `${awayx.length | 2}`;
      }
         placeholdero = String.fromCharCode(50,0) == projectf;
         projectf += "2";
         awayx = "3";
      castG ^= 2 * adulty.size;
      if (time_sJ) {
         break;
      }
   } while ((1 == castG) && time_sJ);
       let internetJ = 5;
       let condensed8 = true;
         condensed8 = internetJ < 6 && !condensed8;
         condensed8 = 21 < internetJ;
      let catalogo = internetJ >= 8853747;
      do {
         internetJ &= internetJ;
         if (catalogo) {
            break;
         }
      } while (catalogo && (internetJ >= 2 || 4 >= (2 ^ internetJ)));
         internetJ <<= Math.min(2, Math.abs(internetJ - 2));
       let delegate_w4W: Array<any> = [1, 529, 491];
          let const__4 = String.fromCharCode(117,95,55,54,95,105,110,116,108,101,0);
         condensed8 = const__4.length <= 1;
      gestureR = String.fromCharCode(66,0) == gestureU;

    if (!comment) {

      analyticsR += `${parseInt(`${condensedb}`) ^ 3}`;
   while (eventu.length >= zhuboF) {
      zhuboF -= 2 >> (Math.min(4, Math.abs(castG)));
      break;
   }
      return;
    }

    console.log('user comment', comment);

   while (4 == (3 >> (Math.min(4, Math.abs(castG)))) || 4 == (3 >> (Math.min(2, routerh.length)))) {
       let gmailw = String.fromCharCode(100,95,50,57,95,109,97,107,101,114,112,109,0);
         gmailw = `${gmailw.length | 2}`;
         gmailw = `${3 << (Math.min(5, gmailw.length))}`;
      let alertS = gmailw == String.fromCharCode(117,108,103,108,109,102,121,0);
      do {
          let selectj = 4;
          let greyV: Array<any> = [String.fromCharCode(116,111,116,97,108,115,95,105,95,53,57,0), String.fromCharCode(122,95,51,57,95,112,115,100,115,112,0), String.fromCharCode(118,95,53,56,95,109,111,110,105,116,111,114,105,110,103,0)];
         gmailw = `${(gmailw == String.fromCharCode(97,0) ? selectj : gmailw.length)}`;
         selectj &= greyV.length;
         greyV.push(greyV.length);
         if (alertS) {
            break;
         }
      } while (alertS && (3 >= gmailw.length));
      routerh += "1";
      break;
   }
   for (let s = 0; s < 2; s++) {
      gestureU += "3";
   }
    try {

   for (let r = 0; r < 3; r++) {
      condensedb -= 1 & d_locki.length;
   }
   if (routerh == rules4) {
       let sound6 = String.fromCharCode(98,95,50,51,95,102,105,102,97,0);
       let googleH = 5.0;
       let connectionc: Map<any, any> = new Map([[String.fromCharCode(110,111,110,108,105,110,101,97,114,95,115,95,55,52,0),949], [String.fromCharCode(97,95,53,57,95,102,97,116,101,0),635]]);
         connectionc.set(`${googleH}`, 1);
         googleH -= parseFloat(`${connectionc.size | parseInt(`${googleH}`)}`);
      let settingsM = String.fromCharCode(118,53,108,0) == sound6;
      do {
          let castGs = String.fromCharCode(108,111,119,95,115,95,52,55,0);
          let plusz = String.fromCharCode(116,95,52,49,95,119,97,105,116,0);
          let options2: Array<any> = [286, 489];
          let countrya = 4.0;
         sound6 += `${parseInt(`${countrya}`) | sound6.length}`;
         castGs = `${(String.fromCharCode(119,0) == plusz ? castGs.length : plusz.length)}`;
         options2 = [plusz.length * 1];
         countrya -= 1;
         if (settingsM) {
            break;
         }
      } while ((5 < (connectionc.size >> (Math.min(sound6.length, 4))) && 4 < (connectionc.size >> (Math.min(Math.abs(5), 1)))) && settingsM);
      let stepW = 8839913.0 >= googleH;
      do {
          let splashE = 0.0;
         googleH *= parseFloat(`${sound6.length - parseInt(`${googleH}`)}`);
         splashE /= Math.max(parseFloat(`${parseInt(`${splashE}`)}`), 3);
         if (stepW) {
            break;
         }
      } while (stepW && (sound6.length >= parseInt(`${googleH}`)));
      while ((sound6.length ^ connectionc.size) >= 2 && 3 >= (2 ^ sound6.length)) {
          let loginX = 1;
          let sansy = 0.0;
          let thumbnailH = 5.0;
          let orientationq = String.fromCharCode(105,118,97,114,95,50,95,57,54,0);
          let faviconD = String.fromCharCode(99,111,110,99,101,97,108,101,100,95,48,95,56,50,0);
         sound6 += `${loginX * 3}`;
         loginX /= Math.max(3, orientationq.length);
         sansy *= parseFloat(`${parseInt(`${thumbnailH}`)}`);
         thumbnailH /= Math.max(parseFloat(`${orientationq.length}`), 2);
         faviconD = `${parseInt(`${sansy}`)}`;
         break;
      }
          let adultJ = 0.0;
          let dialogm = 5;
         sound6 += `${dialogm}`;
         adultJ += parseFloat(`${parseInt(`${adultJ}`)}`);
         dialogm -= 1 >> (Math.min(Math.abs(parseInt(`${adultJ}`)), 2));
         sound6 = `${parseInt(`${googleH}`)}`;
      let apple0 = googleH >= 5119944.0;
      do {
         googleH -= parseFloat(`${parseInt(`${googleH}`) / (Math.max(connectionc.size, 4))}`);
         if (apple0) {
            break;
         }
      } while (apple0 && (googleH >= parseFloat(`${connectionc.size}`)));
      while ((3 + sound6.length) <= 4) {
         googleH /= Math.max(3, parseFloat(`${3}`));
         break;
      }
      rules4 += `${connectionc.size}`;
   }
      const existingComments = await getLocalComments();

       let const_ykL = String.fromCharCode(111,116,111,98,95,111,95,55,48,0);
         const_ykL += `${const_ykL.length}`;
         const_ykL = `${const_ykL.length}`;
         const_ykL += `${const_ykL.length}`;
      condensedb *= 3;
   while (analyticsR.length <= 4 && !gestureR) {
      gestureR = 19 <= routerh.length;
      break;
   }
      const commmentObj = {
        douban_reviews_id: existingComments.length + 1,
        user_name: userState.user?.userName ?? '',
        user_review: comment,
      }
      existingComments.unshift(commmentObj);

   for (let r = 0; r < 1; r++) {
      routerh += `${((yellow7 ? 3 : 4) / 1)}`;
   }
      d_locki = `${(routerh == String.fromCharCode(87,0) ? routerh.length : parseInt(`${condensedb}`))}`;
      await AsyncStorage.setItem(locCommentId, JSON.stringify(existingComments));

       let kickH: Array<any> = [441, 654, 679];
       let yingA = String.fromCharCode(103,95,49,95,99,111,99,103,0);
      while (3 <= (3 - yingA.length)) {
         yingA += `${yingA.length >> (Math.min(Math.abs(1), 5))}`;
         break;
      }
         kickH.push(1);
          let becomeE: Array<any> = [941, 410];
          let bottomd: Map<any, any> = new Map([[String.fromCharCode(99,105,114,99,117,108,97,116,105,110,103,95,110,95,56,0),939], [String.fromCharCode(122,95,52,57,95,99,111,108,108,97,112,115,105,110,103,0),976]]);
         kickH.push(yingA.length & 3);
         becomeE = [1 & becomeE.length];
         bottomd.set(`${becomeE.length}`, 1);
          let stationsQ = 3.0;
          let select1 = String.fromCharCode(100,95,56,52,95,104,101,108,112,0);
         yingA = `${yingA.length - 3}`;
         stationsQ -= select1.length;
         select1 = `${parseInt(`${stationsQ}`)}`;
         kickH.push(yingA.length * kickH.length);
         kickH = [(String.fromCharCode(120,0) == yingA ? yingA.length : kickH.length)];
      condensedb -= (String.fromCharCode(106,0) == rules4 ? rules4.length : yingA.length);
      commentt = `${1 >> (Math.min(5, rules4.length))}`;

      commentItems.unshift(commmentObj);

       let tempH = 0.0;
       let pingC = false;
       let l_view3 = String.fromCharCode(114,95,53,57,95,98,114,101,97,107,115,0);
      let filln = pingC ? !pingC : pingC;
      do {
         pingC = !pingC;
         if (filln) {
            break;
         }
      } while (filln && (!pingC));
      while ((tempH - 5.0) > 2.32 || 5.0 > tempH) {
         tempH *= parseInt(`${tempH}`) << (Math.min(1, Math.abs(1)));
         break;
      }
      while (1.90 >= (tempH * 2.77)) {
         pingC = 57.15 < tempH;
         break;
      }
      let actionj = l_view3 == String.fromCharCode(54,106,103,119,95,0);
      do {
          let friendsi = 1.0;
          let mappingF = 4.0;
          let condensedh = String.fromCharCode(102,105,120,116,117,114,101,95,112,95,54,0);
         l_view3 += "2";
         friendsi -= parseFloat(`${parseInt(`${friendsi}`) * 3}`);
         mappingF += parseFloat(`${parseInt(`${friendsi}`) ^ condensedh.length}`);
         condensedh += `${condensedh.length}`;
         if (actionj) {
            break;
         }
      } while (actionj && (5 == l_view3.length || !pingC));
         l_view3 += `${2 * l_view3.length}`;
       let modalR = 2.0;
       let vietnami = 5.0;
      for (let j = 0; j < 1; j++) {
          let arrowI = String.fromCharCode(99,104,101,99,107,105,110,103,95,108,95,51,56,0);
          let switch_bn = String.fromCharCode(106,95,53,54,95,110,97,118,105,103,97,116,111,114,0);
          let sinaH = String.fromCharCode(109,105,112,115,100,115,112,95,115,95,50,50,0);
          let window_bz8 = 2;
          let t_countM = 2;
         l_view3 = `${parseInt(`${modalR}`)}`;
         arrowI += `${(arrowI == String.fromCharCode(117,0) ? window_bz8 : arrowI.length)}`;
         switch_bn = `${window_bz8}`;
         sinaH = `${switch_bn.length}`;
         t_countM &= window_bz8 << (Math.min(Math.abs(3), 3));
      }
      let upgradec = pingC ? !pingC : pingC;
      do {
          let button9 = 3;
          let trophy3 = 4.0;
          let rewindy = 5.0;
         pingC = tempH >= 81.13;
         button9 -= button9;
         trophy3 -= parseInt(`${rewindy}`) | button9;
         rewindy -= parseFloat(`${3 >> (Math.min(Math.abs(parseInt(`${trophy3}`)), 1))}`);
         if (upgradec) {
            break;
         }
      } while ((pingC && 4.66 < (vietnami / 5.71)) && upgradec);
          let lessM = 5.0;
          let lightF: Array<any> = [573, 967];
          let link2 = String.fromCharCode(115,95,49,50,95,109,105,110,116,0);
         modalR -= parseFloat(`${1}`);
         lessM *= parseFloat(`${parseInt(`${lessM}`)}`);
         lightF = [1 * lightF.length];
         link2 = `${lightF.length << (Math.min(1, Math.abs(parseInt(`${lessM}`))))}`;
      commentt = `${rules4.length}`;
   for (let l = 0; l < 3; l++) {
      routerh = `${(parseInt(`${condensedb}`) * (yellow7 ? 2 : 3))}`;
   }
      setIsUpdated(!isUpdated);

      adulty = new Map([[`${castG}`, castG]]);
      zhuboF /= Math.max(3, parseInt(`${condensedb}`) << (Math.min(Math.abs(2), 4)));
      Keyboard.dismiss();

   while (4.67 < condensedb) {
      condensedb += ((yellow7 ? 4 : 4) >> (Math.min(Math.abs(parseInt(`${condensedb}`)), 4)));
      break;
   }
   let moon5 = commentt.length >= 6759902;
   do {
      commentt = `${3 & gestureU.length}`;
      if (moon5) {
         break;
      }
   } while (moon5 && (1 <= commentt.length));
      SMBing.showToast("提交成功，我们将在24小时内进行审核！");

    } catch (error) {

       let mode9 = String.fromCharCode(113,117,101,117,101,115,95,48,95,55,57,0);
         mode9 = `${mode9.length}`;
          let dataQ: Array<any> = [String.fromCharCode(116,111,97,115,116,115,95,121,95,50,53,0), String.fromCharCode(105,95,49,48,95,109,97,110,100,101,108,98,114,111,116,0), String.fromCharCode(100,95,53,57,95,101,120,116,101,114,110,97,108,108,121,0)];
          let turnt = String.fromCharCode(103,101,110,101,114,97,108,105,122,101,100,116,105,109,101,95,48,95,55,55,0);
          let circle6: Array<any> = [428, 703];
         mode9 = `${mode9.length << (Math.min(Math.abs(3), 2))}`;
         dataQ.push(turnt.length);
         turnt = "2";
         circle6.push(turnt.length ^ dataQ.length);
         mode9 = `${mode9.length ^ 2}`;
      adulty = new Map([[`${condensedb}`, (String.fromCharCode(113,0) == rules4 ? parseInt(`${condensedb}`) : rules4.length)]]);
   if (!gestureU.startsWith(`${collectiont.size}`)) {
      gestureU = "3";
   }
      console.log("error when storing the comment into local storage: ", error);
    }
  };

  const renderItem = useCallback(
    ({ item, index }: { item: WQRReducer, index: number }) => {
      return (
        <CommentCard
          key={index}
          commentItem={item}
        />
      );
    },
    [],
  );

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
      <ScreenContainer
        footer={
          <View style={{
            ...styles.commentContainer,
            backgroundColor: dark ? "#1d2023" : 'white',
            shadowColor: '#000000',
            shadowOpacity: 0.1,
            shadowRadius: 3,
          }}>
            <TextInput
              style={{
                ...styles.input,
                backgroundColor: dark ? "#FFFFFF1A" : '#D9D9D9',
                ...textVariants.body,
              }}
              onChangeText={setComment}
              placeholder={KWConstants.isLogin(userState.user) ? "请评论" : "请登录才进行评论"}
              editable={KWConstants.isLogin(userState.user)}
              placeholderTextColor={colors.muted}
              value={comment}
              maxLength={200}
              blurOnSubmit
            />

            {KWConstants.isLogin(userState.user) ? (
              <>
                <Text style={{ ...textVariants.body, color: comment.length === 200 ? colors.primary : colors.muted }}>
                  {comment.length}/200
                </Text>
                <TouchableOpacity activeOpacity={0.85}
                  onPress={() => {
                    setComment('');
                    storeUserComments();
                  }}
                >
                  <SubmitBtn fill={comment.length ? "#FAC33D" : "#3A3A3A"} />
                </TouchableOpacity>
              </>
            ) : (
              <TouchableOpacity activeOpacity={0.85}
                onPress={() => dispatch(showLoginAction())}
              >
                <Text style={{ ...textVariants.body, color: colors.primary }}>
                  立即登录
                </Text>
              </TouchableOpacity>
            )}
          </View>
        }
      >
        <TitleWithBackButtonHeader
          title={vod_name + " - 全部评论 (" + commentItems.length + ")"}
          backBtnStyle={{
            left: 30,
          }}
        />

        <FlatList
          extraData={isUpdated}
          data={commentItems}
          showsVerticalScrollIndicator={false}
          maxToRenderPerBatch={10}
          initialNumToRender={10}
          removeClippedSubviews
          renderItem={renderItem}
        />
      </ScreenContainer>
    </KeyboardAvoidingView>

  );
}

const styles = StyleSheet.create({
  commentContainer: {
    paddingHorizontal: 20,
    paddingTop: 15,
    paddingBottom: 25,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  input: {
    paddingHorizontal: 10,
    paddingTop: 12,
    paddingBottom: 12,
    borderRadius: 10,
    flex: 3,
  },

});