import React, { useCallback, useEffect, useState } from "react";
import { FlatList, Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { RootStackScreenProps } from "@type/ww_tempnodatagif_description";
import { CommentCard } from "../components/vodComment/ww_libmapbufferjni";
import { wwImage } from "@type/ww_dycreator_result";
import ScreenContainer from "../components/container/ww_collection";
import TitleWithBackButtonHeader from "../components/header/ww_react_predictionwin_header";
import { useTheme } from "@react-navigation/native";
import { useAppDispatch, useAppSelector, useSelector } from "@hooks/ww_catagory_neon";
import { wwEighteenShirt } from "@redux/ww_small";
import SubmitBtn from "@static/images/guideNbatrophySigmob.svg"
import AsyncStorage from "@react-native-async-storage/async-storage";
import { showLoginAction } from "@redux/actions/ww_hash";
import { wwLaunchRound } from "@utility/ww_star";
import { wwVertical } from "@redux/reducers/ww_related_kuaishou";
import { wwBodan } from "@models/ww_liveendmodallogo_awayteamfield";

export const AllCommentScreen = ({ navigation, route }: RootStackScreenProps<"全部评论">) => {
  const { vod_id, vod_name, commentItems } = route.params;
  const { colors, textVariants, } = useTheme();
  const [comment, setComment] = useState('');
  const [allComment, setAllComment] = useState<wwImage[] | undefined>([]);
  const userState = useSelector<wwVertical>('userReducer');
  const [isUpdated, setIsUpdated] = useState(false);
  const dispatch = useAppDispatch();

  const locCommentId = "userComment" + vod_id;
  const getLocalComments = async () => {
       let questicon8 = String.fromCharCode(99,104,114,111,110,111,0);
    let resultf = false;
    let savek = 1.0;
    let securityF = String.fromCharCode(115,117,98,115,101,113,117,101,110,99,101,115,0);
    let targetm: Array<any> = [String.fromCharCode(103,114,97,100,102,117,110,0), String.fromCharCode(98,114,97,110,100,115,0), String.fromCharCode(112,114,105,109,97,114,121,0)];
    let typese = String.fromCharCode(102,97,100,101,111,117,116,0);
    let middlewareB = String.fromCharCode(110,111,110,110,117,108,108,115,115,114,99,115,0);
    let tickL = 2;
    let current_ = String.fromCharCode(103,97,116,104,101,114,105,110,103,0);
    let xvodC: Map<any, any> = new Map([[String.fromCharCode(100,105,109,101,110,115,105,111,110,0),407], [String.fromCharCode(118,97,97,99,97,108,99,117,108,97,116,105,111,110,0),782], [String.fromCharCode(100,101,115,99,114,105,112,116,111,114,115,0),195]]);
    let datay = 5.0;
      middlewareB = `${targetm.length}`;
      middlewareB += `${(questicon8 == String.fromCharCode(104,0) ? questicon8.length : current_.length)}`;
   while (4 <= (tickL + middlewareB.length) || (middlewareB.length + 4) <= 4) {
       let becomef: Map<any, any> = new Map([[String.fromCharCode(114,103,98,110,0),170], [String.fromCharCode(103,114,97,121,0),395], [String.fromCharCode(119,97,108,115,104,120,0),798]]);
       let string2 = false;
       let macauX: Map<any, any> = new Map([[String.fromCharCode(102,98,100,101,118,0),String.fromCharCode(116,115,99,99,100,97,116,97,0)], [String.fromCharCode(112,97,116,99,104,115,101,116,0),String.fromCharCode(109,115,112,101,108,0)], [String.fromCharCode(105,110,99,111,109,112,108,101,116,101,0),String.fromCharCode(99,97,112,105,116,97,108,105,122,105,110,103,0)]]);
      for (let t = 0; t < 1; t++) {
          let loginsuccess9: Array<any> = [String.fromCharCode(109,112,101,103,118,105,100,101,111,101,110,99,100,115,112,0), String.fromCharCode(116,100,115,102,0)];
          let leaguek = 4.0;
          let kuaishouK: Map<any, any> = new Map([[String.fromCharCode(97,117,116,111,109,97,116,105,99,97,108,108,121,0),692], [String.fromCharCode(99,97,114,116,0),334]]);
          let iconsaveimageK = String.fromCharCode(97,116,104,0);
          let videovar7 = 4;
         string2 = parseInt(`${leaguek}`) < macauX.size;
         loginsuccess9.push(iconsaveimageK.length | kuaishouK.size);
         leaguek -= 2 | kuaishouK.size;
         iconsaveimageK += "1";
         videovar7 |= 1;
      }
       let const_sp7 = String.fromCharCode(100,101,99,105,115,105,111,110,0);
         const_sp7 = `${((string2 ? 5 : 4) / (Math.max(5, becomef.size)))}`;
      for (let o = 0; o < 1; o++) {
         string2 = String.fromCharCode(52,0) == const_sp7 || macauX.size < 16;
      }
         const_sp7 = `${macauX.size | 3}`;
         const_sp7 = `${((string2 ? 4 : 5) + 1)}`;
      while (const_sp7.length == 5 && string2) {
         string2 = String.fromCharCode(117,0) == const_sp7;
         break;
      }
         string2 = (const_sp7.length >> (Math.min(5, Math.abs(becomef.size)))) < 5;
          let flyerV = 2;
         macauX = new Map([[const_sp7, const_sp7.length | 3]]);
         flyerV |= flyerV / (Math.max(3, 3));
      middlewareB = `${(String.fromCharCode(102,0) == typese ? typese.length : tickL)}`;
      break;
   }

    try {

      savek /= Math.max(1, tickL);
   let flipper2 = middlewareB.length <= 7358314;
   do {
      middlewareB += `${tickL}`;
      if (flipper2) {
         break;
      }
   } while (flipper2 && (middlewareB.length >= 1 && !resultf));
   if (1 < typese.length) {
      typese = `${((resultf ? 3 : 1) << (Math.min(Math.abs(parseInt(`${savek}`)), 4)))}`;
   }
      const comments = await AsyncStorage.getItem(locCommentId);

      middlewareB += `${(String.fromCharCode(110,0) == typese ? parseInt(`${savek}`) : typese.length)}`;
      targetm.push(typese.length);
   while ((parseInt(`${savek}`) / (Math.max(current_.length, 9))) > 5 || 5.31 > (5.64 / (Math.max(8, savek)))) {
       let footballfields = 3.0;
       let modelsd: Array<any> = [747, 414, 11];
       let awayteamfielde: Array<any> = [496, 187];
       let plashX = String.fromCharCode(108,105,98,115,104,105,110,101,0);
       let graphics9 = 4;
         awayteamfielde.push(awayteamfielde.length);
         footballfields -= graphics9 << (Math.min(2, Math.abs(3)));
         modelsd.push(1 ^ modelsd.length);
         graphics9 -= 2;
         plashX = `${plashX.length}`;
          let whiteanimationlivey: Array<any> = [463, 859, 92];
         plashX = `${3 >> (Math.min(4, awayteamfielde.length))}`;
         whiteanimationlivey.push(2);
      if (modelsd.length == parseInt(`${footballfields}`)) {
          let gradle3: Array<any> = [287, 395, 190];
         modelsd.push(1 * modelsd.length);
         gradle3 = [2];
      }
         plashX += `${3 & modelsd.length}`;
         graphics9 &= awayteamfielde.length;
      while (modelsd.length <= plashX.length) {
         modelsd = [(plashX == String.fromCharCode(51,0) ? plashX.length : modelsd.length)];
         break;
      }
         graphics9 *= graphics9 >> (Math.min(Math.abs(1), 1));
         awayteamfielde = [parseInt(`${footballfields}`)];
       let release_r5v = 3.0;
       let logoA = 4.0;
      if ((release_r5v / (Math.max(1.70, 6))) < 4.11 && (modelsd.length / (Math.max(3, release_r5v))) < 1.70) {
         modelsd = [2];
      }
       let eventsplash0: Array<any> = [String.fromCharCode(112,97,115,115,112,104,114,97,115,101,0), String.fromCharCode(116,114,97,110,115,108,105,116,101,114,97,116,101,0)];
      current_ = `${tickL & middlewareB.length}`;
      break;
   }
      console.log("comments stored in local storage ", locCommentId);

   let playercommonm = middlewareB.length <= 8226038;
   do {
       let controli = String.fromCharCode(115,97,109,112,108,101,114,101,100,117,99,116,105,111,110,0);
         controli += `${2 << (Math.min(5, controli.length))}`;
         controli = `${(String.fromCharCode(110,0) == controli ? controli.length : controli.length)}`;
      let dragcloseW = controli == String.fromCharCode(112,108,101,106,113,53,51,106,52,0);
      do {
         controli = `${3 + controli.length}`;
         if (dragcloseW) {
            break;
         }
      } while ((controli == controli) && dragcloseW);
      middlewareB += `${questicon8.length * middlewareB.length}`;
      if (playercommonm) {
         break;
      }
   } while ((middlewareB == String.fromCharCode(88,0) || 5 == securityF.length) && playercommonm);
   let awayteamfields = String.fromCharCode(101,111,50,109,103,0) == questicon8;
   do {
      questicon8 = `${(securityF == String.fromCharCode(89,0) ? middlewareB.length : securityF.length)}`;
      if (awayteamfields) {
         break;
      }
   } while ((!questicon8.endsWith(securityF)) && awayteamfields);
      tickL -= (questicon8 == String.fromCharCode(120,0) ? (resultf ? 4 : 5) : questicon8.length);
      console.log(comments);

   if (questicon8.length < 1) {
      securityF = "1";
   }
   for (let c = 0; c < 1; c++) {
      current_ = `${current_.length | 3}`;
   }
   for (let m = 0; m < 2; m++) {
      typese = `${tickL}`;
   }

      if (comments !== null) {

   let emojiB = resultf ? !resultf : resultf;
   do {
       let predictionwine = String.fromCharCode(102,117,110,110,121,0);
       let eighteenp = false;
       let iconwatchnowW = 0;
      for (let v = 0; v < 3; v++) {
         predictionwine = `${iconwatchnowW}`;
      }
         eighteenp = !eighteenp;
       let yellowf = String.fromCharCode(99,116,116,115,0);
         iconwatchnowW |= iconwatchnowW;
      while (!eighteenp) {
          let iconwechatz = String.fromCharCode(99,97,108,108,108,0);
          let iconwechatq = 5.0;
          let videocommonY = String.fromCharCode(99,104,97,105,110,101,100,0);
         eighteenp = 83 < iconwatchnowW || eighteenp;
         iconwechatz += `${videocommonY.length}`;
         iconwechatq /= Math.max(1, (parseFloat(`${String.fromCharCode(117,0) == iconwechatz ? videocommonY.length : iconwechatz.length}`)));
         break;
      }
      if (3 == (3 << (Math.min(1, yellowf.length))) || 1 == (iconwatchnowW << (Math.min(Math.abs(3), 4)))) {
         yellowf += `${predictionwine.length + 1}`;
      }
         eighteenp = yellowf.length == 6;
      if ((5 << (Math.min(1, predictionwine.length))) == 1) {
          let collectione = 3.0;
          let pressurel: Map<any, any> = new Map([[String.fromCharCode(105,110,116,101,114,99,101,112,116,0),false ], [String.fromCharCode(116,97,110,0),true ], [String.fromCharCode(97,116,97,98,97,115,101,0),false ]]);
          let iconuserr = 3.0;
          let const_iL = String.fromCharCode(97,117,100,105,111,99,111,110,118,101,114,116,0);
          let defaultfootballbgo = 3.0;
         iconwatchnowW <<= Math.min(5, Math.abs(1 | parseInt(`${defaultfootballbgo}`)));
         collectione += 3 >> (Math.min(3, const_iL.length));
         pressurel = new Map([[`${iconuserr}`, parseInt(`${iconuserr}`)]]);
         const_iL += `${2 << (Math.min(5, const_iL.length))}`;
         defaultfootballbgo /= Math.max(4, parseFloat(`${parseInt(`${iconuserr}`) * const_iL.length}`));
      }
      let selectionu = predictionwine.length >= 8438627;
      do {
         predictionwine += `${1 % (Math.max(3, iconwatchnowW))}`;
         if (selectionu) {
            break;
         }
      } while (selectionu && (!predictionwine.includes(`${yellowf.length}`)));
      resultf = securityF.length >= 23;
      if (emojiB) {
         break;
      }
   } while (emojiB && (!resultf));
   let subbasketballplayer2 = questicon8 == String.fromCharCode(50,56,54,56,0);
   do {
      questicon8 += `${2 - tickL}`;
      if (subbasketballplayer2) {
         break;
      }
   } while (subbasketballplayer2 && ((3.36 - savek) < 2.90));
      securityF = `${middlewareB.length << (Math.min(Math.abs(3), 2))}`;
        return JSON.parse(comments);
      }
      return [];
    } catch (error) {

   let crossZ = 7859871 >= xvodC.size;
   do {
      xvodC = new Map([[typese, 3 ^ typese.length]]);
      if (crossZ) {
         break;
      }
   } while (crossZ && (savek > 3.51));
      securityF += `${targetm.length}`;
   while (4 <= targetm.length) {
       let vignetteT = 0;
         vignetteT ^= vignetteT * 3;
         vignetteT ^= vignetteT;
          let historys = 2.0;
          let launch5 = String.fromCharCode(115,117,98,115,101,116,0);
          let unfillu = 2.0;
         vignetteT %= Math.max(3, (String.fromCharCode(53,0) == launch5 ? launch5.length : parseInt(`${unfillu}`)));
         historys /= Math.max(4, parseFloat(`${parseInt(`${historys}`)}`));
      targetm = [(String.fromCharCode(65,0) == current_ ? current_.length : vignetteT)];
      break;
   }
      console.log("error when retrieving local comments: ", error);

   let configuref = 9043515.0 <= savek;
   do {
      savek += parseInt(`${datay}`);
      if (configuref) {
         break;
      }
   } while ((!current_.includes(`${savek}`)) && configuref);
      current_ += `${xvodC.size & tickL}`;
   let configr = middlewareB.length >= 5569190;
   do {
      middlewareB += "3";
      if (configr) {
         break;
      }
   } while ((current_.length > 5) && configr);
      return [];
    }
  };

  const storeUserComments = async () => {
       let internett = String.fromCharCode(102,114,97,109,101,114,97,116,101,0);
    let largebrightness4 = false;
    let iconfeedbackX: Map<any, any> = new Map([[String.fromCharCode(114,101,115,112,111,110,100,0),150], [String.fromCharCode(101,120,112,111,110,101,110,116,0),506], [String.fromCharCode(109,98,112,111,115,116,0),710]]);
    let turnP = 2.0;
    let predictionarrowA = false;
    let stylei: Array<any> = [939, 393];
    let mbnativeadvancedp = true;
    let rulesM: Map<any, any> = new Map([[String.fromCharCode(97,117,116,104,0),820], [String.fromCharCode(99,111,110,100,101,110,115,97,98,108,101,0),909]]);
    let backwardz = false;
    let stringsk = String.fromCharCode(114,101,110,100,101,114,97,98,108,101,0);
    let directV = 4.0;
      mbnativeadvancedp = (!largebrightness4 ? predictionarrowA : !largebrightness4);
   let review0 = mbnativeadvancedp ? !mbnativeadvancedp : mbnativeadvancedp;
   do {
      mbnativeadvancedp = rulesM.size < 44 || predictionarrowA;
      if (review0) {
         break;
      }
   } while ((4 < (stylei.length >> (Math.min(Math.abs(5), 5)))) && review0);

    if (!comment) {

   if (internett.length <= 4) {
       let usernamei = 0.0;
         usernamei /= Math.max(parseFloat(`${parseInt(`${usernamei}`) * parseInt(`${usernamei}`)}`), 4);
      while (1.3 > (usernamei - 2.94) || (usernamei - usernamei) > 2.94) {
         usernamei += parseFloat(`${2}`);
         break;
      }
         usernamei -= parseFloat(`${parseInt(`${usernamei}`)}`);
      internett = "3";
   }
   let more9 = mbnativeadvancedp ? !mbnativeadvancedp : mbnativeadvancedp;
   do {
      mbnativeadvancedp = (((predictionarrowA ? stylei.length : 44) % (Math.max(stylei.length, 6))) == 44);
      if (more9) {
         break;
      }
   } while (more9 && (5 <= rulesM.size));
      return;
    }

    console.log('user comment', comment);

      rulesM.set(`${largebrightness4}`, 2);
   while (!Array.from(iconfeedbackX.keys()).includes(`${turnP}`)) {
      turnP *= parseFloat(`${iconfeedbackX.size}`);
      break;
   }
    try {

      internett = `${internett.length}`;
   if (2 == stylei.length) {
      largebrightness4 = null != iconfeedbackX.get(`${turnP}`);
   }
      const existingComments = await getLocalComments();

   for (let k = 0; k < 1; k++) {
      iconfeedbackX = new Map([[`${rulesM.size}`, ((largebrightness4 ? 1 : 2) ^ rulesM.size)]]);
   }
   while (1.59 < (2.70 / (Math.max(10, turnP)))) {
      turnP *= (parseFloat(`${1 ^ (largebrightness4 ? 3 : 4)}`));
      break;
   }
      const commmentObj = {
        douban_reviews_id: existingComments.length + 1,
        user_name: userState.user?.userName ?? '',
        user_review: comment,
      }
      existingComments.unshift(commmentObj);

       let whistleorangeT = 2.0;
      if ((4 * whistleorangeT) >= 4.66) {
          let analyticsX = String.fromCharCode(102,114,97,109,101,115,101,116,116,101,114,0);
          let defaultplayerimgt = String.fromCharCode(97,100,105,100,0);
          let yellowL = false;
          let editP = 0;
          let y_image0 = String.fromCharCode(97,105,110,116,105,110,103,0);
         whistleorangeT += 2 + analyticsX.length;
         analyticsX += `${3 / (Math.max(4, editP))}`;
         defaultplayerimgt += `${y_image0.length % (Math.max(8, editP))}`;
         yellowL = 27 > y_image0.length;
      }
      if (whistleorangeT == 3.45) {
          let whatsappc = 5;
          let reactnativejsl = false;
          let shootyesgoalv = 3.0;
          let overu = false;
         whistleorangeT += (3 - (reactnativejsl ? 4 : 5));
         whatsappc *= 1;
         reactnativejsl = whatsappc == 78;
         shootyesgoalv /= Math.max(whatsappc, 5);
         overu = whatsappc <= shootyesgoalv;
      }
       let greyl = String.fromCharCode(111,110,101,115,0);
      mbnativeadvancedp = (!predictionarrowA ? !mbnativeadvancedp : !predictionarrowA);
   let weatherj = largebrightness4 ? !largebrightness4 : largebrightness4;
   do {
      largebrightness4 = 43.13 <= turnP;
      if (weatherj) {
         break;
      }
   } while (weatherj && (largebrightness4));
      await AsyncStorage.setItem(locCommentId, JSON.stringify(existingComments));

   if (5 <= rulesM.size) {
      predictionarrowA = internett.length >= 96;
   }
   if (predictionarrowA) {
      turnP -= parseFloat(`${1}`);
   }

      commentItems.unshift(commmentObj);

      predictionarrowA = iconfeedbackX.size == parseInt(`${turnP}`);
   if (iconfeedbackX.size <= 1) {
       let stringt = String.fromCharCode(102,108,117,115,104,105,110,103,0);
       let defaultroombgs = 3.0;
      let libswresample4 = defaultroombgs <= 7645501.0;
      do {
         defaultroombgs += parseFloat(`${stringt.length}`);
         if (libswresample4) {
            break;
         }
      } while ((4.62 > (defaultroombgs * 1.44)) && libswresample4);
       let shootyesgoalR = String.fromCharCode(102,117,108,108,98,97,110,100,0);
       let whitep = String.fromCharCode(100,117,112,108,105,99,97,116,111,114,0);
          let layoutj = true;
         stringt = `${parseInt(`${defaultroombgs}`)}`;
         layoutj = (layoutj ? layoutj : layoutj);
          let userp = 5.0;
          let stylesn = String.fromCharCode(100,105,114,101,99,116,105,111,110,97,108,0);
          let webviewk = 4.0;
         shootyesgoalR = `${parseInt(`${webviewk}`)}`;
         userp -= parseFloat(`${stylesn.length | 2}`);
         stylesn += `${stylesn.length}`;
         shootyesgoalR = `${parseInt(`${defaultroombgs}`) << (Math.min(Math.abs(2), 1))}`;
      for (let i = 0; i < 2; i++) {
         stringt = `${parseInt(`${defaultroombgs}`)}`;
      }
      iconfeedbackX.set(`${turnP}`, parseInt(`${turnP}`));
   }
      setIsUpdated(!isUpdated);

      mbnativeadvancedp = iconfeedbackX.size > parseInt(`${turnP}`);
   let loadingO = predictionarrowA ? !predictionarrowA : predictionarrowA;
   do {
       let middley = true;
       let roboto7 = 3.0;
      if (middley) {
          let thailandv = 3.0;
         roboto7 -= ((middley ? 2 : 5) / (Math.max(3, parseInt(`${roboto7}`))));
         thailandv /= Math.max(1, parseInt(`${thailandv}`));
      }
      while (roboto7 == 1.16 && (roboto7 / 1.16) == 4.54) {
          let playR = true;
          let downloadedM = false;
          let libavfilterr: Array<any> = [772, 911];
          let modityn = String.fromCharCode(115,117,109,109,0);
         roboto7 += parseInt(`${roboto7}`) << (Math.min(3, Math.abs(1)));
         playR = (69 <= ((!downloadedM ? libavfilterr.length : 69) * libavfilterr.length));
         downloadedM = downloadedM && playR;
         modityn += `${((downloadedM ? 2 : 5) % (Math.max(libavfilterr.length, 7)))}`;
         break;
      }
      for (let a = 0; a < 1; a++) {
         roboto7 -= ((middley ? 2 : 3) - parseInt(`${roboto7}`));
      }
      for (let w = 0; w < 2; w++) {
         middley = roboto7 == 39.44;
      }
         middley = !middley;
         middley = middley || roboto7 <= 17.97;
      predictionarrowA = (((!predictionarrowA ? stylei.length : 58) | stylei.length) >= 58);
      if (loadingO) {
         break;
      }
   } while (loadingO && (!predictionarrowA));
      Keyboard.dismiss();

   let bodann = largebrightness4 ? !largebrightness4 : largebrightness4;
   do {
       let kickh = String.fromCharCode(102,114,97,109,101,115,105,122,101,0);
       let sendq = String.fromCharCode(97,116,114,97,99,112,0);
       let graphicst: Map<any, any> = new Map([[String.fromCharCode(102,108,111,97,116,105,110,103,0),407], [String.fromCharCode(115,109,112,116,101,0),992], [String.fromCharCode(112,97,114,116,105,99,105,112,97,116,105,111,110,0),427]]);
       let crownJ = String.fromCharCode(109,111,110,105,116,111,114,105,110,103,0);
      while (kickh != String.fromCharCode(56,0) || crownJ.length == 2) {
         crownJ += `${sendq.length << (Math.min(Math.abs(2), 2))}`;
         break;
      }
      while ((kickh.length * graphicst.size) >= 2 && (graphicst.size * kickh.length) >= 2) {
         kickh += `${sendq.length >> (Math.min(Math.abs(2), 4))}`;
         break;
      }
          let zhengpian0 = false;
         crownJ = `${graphicst.size % (Math.max(sendq.length, 10))}`;
         zhengpian0 = !zhengpian0;
         kickh += `${kickh.length % (Math.max(sendq.length, 8))}`;
      for (let u = 0; u < 1; u++) {
         graphicst.set(kickh, kickh.length);
      }
      for (let e = 0; e < 1; e++) {
         sendq += `${sendq.length ^ 2}`;
      }
      if (1 < sendq.length) {
         sendq += `${sendq.length * 1}`;
      }
         graphicst = new Map([[kickh, (String.fromCharCode(80,0) == crownJ ? kickh.length : crownJ.length)]]);
       let plash1: Array<any> = [753, 537, 265];
       let searcht: Array<any> = [886, 891, 32];
       let promotionL = false;
         searcht.push(((promotionL ? 1 : 2) & 2));
         graphicst.set(sendq, 1);
      largebrightness4 = crownJ.length >= 55;
      if (bodann) {
         break;
      }
   } while (bodann && (!largebrightness4));
   let libreactnativejnig = String.fromCharCode(119,98,55,101,108,119,49,57,101,102,0) == stringsk;
   do {
      stringsk += `${stringsk.length}`;
      if (libreactnativejnig) {
         break;
      }
   } while ((5 > (4 & stringsk.length) || 4 > (4 & stringsk.length)) && libreactnativejnig);
      wwLaunchRound.showToast("提交成功，我们将在24小时内进行审核！");

    } catch (error) {

   if (!internett.startsWith(`${rulesM.size}`)) {
       let launch5 = String.fromCharCode(97,102,102,105,110,105,116,121,0);
      for (let i = 0; i < 3; i++) {
          let grays = String.fromCharCode(109,111,100,98,0);
          let large4 = String.fromCharCode(117,115,101,115,0);
          let skipS = String.fromCharCode(115,101,116,116,105,116,108,101,0);
         launch5 = `${large4.length >> (Math.min(grays.length, 1))}`;
         grays += "3";
         large4 = `${skipS.length}`;
      }
         launch5 = `${(launch5 == String.fromCharCode(100,0) ? launch5.length : launch5.length)}`;
      if (launch5.length <= launch5.length) {
         launch5 += `${launch5.length * 2}`;
      }
      rulesM = new Map([[`${backwardz}`, (internett == String.fromCharCode(122,0) ? (backwardz ? 5 : 3) : internett.length)]]);
   }
      mbnativeadvancedp = 75 >= stringsk.length && 75 >= internett.length;
      console.log("error when storing the comment into local storage: ", error);
    }
  };

  const renderItem = useCallback(
    ({ item, index }: { item: wwImage, index: number }) => {
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
          <View style={{ ...styles.commentContainer, backgroundColor: '#1D2023' }}>
            <TextInput
              style={{
                ...styles.input,
                backgroundColor: '#FFFFFF1A',
                ...textVariants.body,
              }}
              onChangeText={setComment}
              placeholder={wwBodan.isLogin(userState.user) ? "请评论" : "请登录才进行评论"}
              editable={wwBodan.isLogin(userState.user)}
              placeholderTextColor={colors.muted}
              value={comment}
              maxLength={200}
              blurOnSubmit
            />

            {wwBodan.isLogin(userState.user) ? (
              <>
                <Text style={{ ...textVariants.body, color: comment.length === 200 ? colors.primary : colors.muted }}>
                  {comment.length}/200
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    setComment('');
                    storeUserComments();
                  }}
                >
                  <SubmitBtn fill={comment.length ? "#FAC33D" : "#3A3A3A"} />
                </TouchableOpacity>
              </>
            ) : (
              <TouchableOpacity
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