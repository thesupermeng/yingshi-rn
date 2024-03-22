import React, { useCallback, useEffect, useState } from "react";
import { FlatList, Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { RootStackScreenProps } from "@type/mayi_video_binddatas";
import { CommentCard } from "../components/vodComment/mayi_store";
import { mayi_StreamingSmall } from "@type/mayi_green";
import ScreenContainer from "../components/container/mayi_save";
import TitleWithBackButtonHeader from "../components/header/mayi_predictiondefault_header";
import { useTheme } from "@react-navigation/native";
import { useAppDispatch, useAppSelector, useSelector } from "@hooks/mayi_redirect";
import { mayi_Libapminsightb } from "@redux/mayi_live_tumbnail";
import SubmitBtn from "@static/images/subbasketballplayerMatches.svg"
import AsyncStorage from "@react-native-async-storage/async-storage";
import { showLoginAction } from "@redux/actions/mayi_iconorientation_chatroombackground";
import { mayi_Attributedstring } from "@utility/mayi_source";
import { mayi_Baseline } from "@redux/reducers/mayi_chatroombackground_unlock";
import { mayi_Gift } from "@models/mayi_libjsinspector";

export const AllCommentScreen = ({ navigation, route }: RootStackScreenProps<"全部评论">) => {
  const { vod_id, vod_name, commentItems } = route.params;
  const { colors, textVariants, dark } = useTheme();
  const [comment, setComment] = useState('');
  const [allComment, setAllComment] = useState<mayi_StreamingSmall[] | undefined>([]);
  const userState = useSelector<mayi_Baseline>('userReducer');
  const [isUpdated, setIsUpdated] = useState(false);
  const dispatch = useAppDispatch();

  const locCommentId = "userComment" + vod_id;
  const getLocalComments = async () => {
       let mapbufferp = String.fromCharCode(104,105,103,104,0);
    let qnewinterstitiald: Array<any> = [661, 668];
    let infoh = true;
    let awayicon6: Map<any, any> = new Map([[String.fromCharCode(116,114,97,110,115,99,111,100,101,0),181], [String.fromCharCode(115,116,121,108,101,0),205]]);
    let shootyesgoalg = String.fromCharCode(114,111,117,110,100,105,110,103,0);
    let downV = String.fromCharCode(112,101,117,107,101,114,0);
    let filledW = 1.0;
    let appleo: Array<any> = [957, 735, 15];
    let privacyh: Map<any, any> = new Map([[String.fromCharCode(102,101,116,99,104,0),String.fromCharCode(99,104,114,111,109,97,116,105,99,0)], [String.fromCharCode(101,110,116,101,114,105,110,103,0),String.fromCharCode(105,119,97,108,115,104,0)]]);
      shootyesgoalg += `${downV.length}`;
      infoh = mapbufferp.length <= 16 && 16 <= shootyesgoalg.length;
   let liveT = filledW <= 5932825.0;
   do {
      filledW += downV.length + parseInt(`${filledW}`);
      if (liveT) {
         break;
      }
   } while (((filledW - 4.67) == 1.46) && liveT);

    try {

      mapbufferp += "3";
      qnewinterstitiald.push(awayicon6.size | parseInt(`${filledW}`));
       let klevinm: Array<any> = [String.fromCharCode(104,119,97,101,115,0), String.fromCharCode(115,117,98,116,121,112,101,115,0)];
       let codegene = true;
          let iconwatchnowF = String.fromCharCode(115,97,118,101,109,101,100,105,97,0);
          let trophy9 = String.fromCharCode(97,114,111,117,110,100,0);
          let umengd = String.fromCharCode(97,110,110,117,108,97,114,0);
         codegene = umengd.length == 23;
         iconwatchnowF += `${iconwatchnowF.length << (Math.min(4, trophy9.length))}`;
         trophy9 += `${trophy9.length}`;
         umengd += `${trophy9.length * iconwatchnowF.length}`;
         klevinm = [klevinm.length];
          let specW = String.fromCharCode(103,114,97,121,102,0);
          let iconclosey: Array<any> = [130, 658, 880];
          let statisticsinactivee: Array<any> = [613, 308, 208];
         codegene = codegene && specW.length > 14;
         specW += `${statisticsinactivee.length}`;
         iconclosey.push(iconclosey.length);
         statisticsinactivee.push(iconclosey.length);
      for (let x = 0; x < 1; x++) {
          let reportK = 1;
          let profilepict = String.fromCharCode(114,101,113,117,105,114,101,109,101,110,116,115,0);
          let exampleimageT = 5.0;
          let mergerz: Map<any, any> = new Map([[String.fromCharCode(117,109,98,114,101,108,108,97,0),892], [String.fromCharCode(97,108,108,101,116,0),394]]);
         codegene = mergerz.size < 30;
         reportK -= profilepict.length;
         profilepict = `${reportK}`;
         exampleimageT *= parseInt(`${exampleimageT}`);
         mergerz.set(`${exampleimageT}`, parseInt(`${exampleimageT}`) - 3);
      }
          let eabafadfadddbafeddddeeefeaafL: Map<any, any> = new Map([[String.fromCharCode(120,95,53,95,115,112,108,105,99,101,0),345], [String.fromCharCode(105,110,116,101,114,114,117,112,116,105,111,110,0),808]]);
          let gmailO = 0;
          let f_manager7 = 4.0;
         klevinm.push(parseInt(`${f_manager7}`) | 2);
         eabafadfadddbafeddddeeefeaafL = new Map([[`${eabafadfadddbafeddddeeefeaafL.size}`, eabafadfadddbafeddddeeefeaafL.size]]);
         gmailO &= eabafadfadddbafeddddeeefeaafL.size % (Math.max(3, 8));
         f_manager7 -= parseFloat(`${eabafadfadddbafeddddeeefeaafL.size >> (Math.min(5, Math.abs(gmailO)))}`);
         codegene = !codegene;
      shootyesgoalg = `${(parseInt(`${filledW}`) | (infoh ? 1 : 3))}`;
      const comments = await AsyncStorage.getItem(locCommentId);

      infoh = filledW == qnewinterstitiald.length;
   let baselinen = 5163153 <= awayicon6.size;
   do {
       let hooksK: Array<any> = [String.fromCharCode(103,110,111,0), String.fromCharCode(109,111,110,111,98,108,97,99,107,0)];
       let libreanimatedB: Array<any> = [320, 567];
       let homeiconX = true;
      let security1 = 5681982 >= hooksK.length;
      do {
         hooksK = [3];
         if (security1) {
            break;
         }
      } while ((5 <= hooksK.length) && security1);
      while (homeiconX) {
         homeiconX = (libreanimatedB.length << (Math.min(3, hooksK.length))) >= 94;
         break;
      }
      while ((2 * libreanimatedB.length) == 4 || homeiconX) {
          let gmail3 = String.fromCharCode(109,101,109,111,106,105,0);
         homeiconX = hooksK.includes(homeiconX);
         gmail3 += `${gmail3.length}`;
         break;
      }
       let owngoalC = 1;
       let specb = 1;
      if (specb >= owngoalC) {
          let selectedd: Map<any, any> = new Map([[String.fromCharCode(112,117,108,108,117,112,0),String.fromCharCode(109,101,115,104,0)], [String.fromCharCode(102,105,108,108,101,114,0),String.fromCharCode(122,95,49,49,0)]]);
          let modelK = true;
         owngoalC |= selectedd.size % 3;
         selectedd.set(`${modelK}`, 1);
      }
         specb &= (2 | (homeiconX ? 5 : 5));
         specb >>= Math.min(Math.abs(libreanimatedB.length % (Math.max(2, 6))), 3);
      for (let h = 0; h < 2; h++) {
          let otherT = 5;
          let rootG = 3.0;
         hooksK = [specb + owngoalC];
         otherT |= 1 | otherT;
         rootG *= 2 * otherT;
      }
      while (!libreanimatedB.includes(hooksK.length)) {
         hooksK.push(owngoalC & 2);
         break;
      }
      awayicon6.set(shootyesgoalg, 1);
      if (baselinen) {
         break;
      }
   } while (((awayicon6.size + 3) == 1 && !infoh) && baselinen);
   for (let e = 0; e < 2; e++) {
       let mutedg = 0.0;
       let z_viewd: Array<any> = [175, 480];
       let paget = 3.0;
       let modelsj = false;
          let ying7 = 4.0;
          let bodanX: Map<any, any> = new Map([[String.fromCharCode(116,115,114,0),false ], [String.fromCharCode(104,111,114,110,0),false ], [String.fromCharCode(101,120,112,111,110,101,110,116,105,97,116,105,111,110,0),true ]]);
         paget /= Math.max(4, ((modelsj ? 2 : 5) % (Math.max(parseInt(`${paget}`), 4))));
         ying7 += parseFloat(`${bodanX.size}`);
         bodanX.set(`${ying7}`, 3);
         z_viewd = [z_viewd.length];
          let ewardedY = String.fromCharCode(103,97,117,103,101,0);
         z_viewd.push(3 - parseInt(`${paget}`));
         ewardedY += `${ewardedY.length | 1}`;
         mutedg -= parseInt(`${mutedg}`) & 3;
         modelsj = z_viewd.length < 35;
          let middle4 = String.fromCharCode(114,101,100,97,0);
         modelsj = (mutedg / (Math.max(8, z_viewd.length))) >= 8.48;
         middle4 += `${(middle4 == String.fromCharCode(54,0) ? middle4.length : middle4.length)}`;
       let activeP = 4.0;
       let complete1 = 3.0;
         mutedg += parseInt(`${complete1}`) * parseInt(`${paget}`);
      if (5.96 >= (1.77 + paget) || (paget + activeP) >= 1.77) {
          let downarrowC = 1.0;
         activeP /= Math.max(parseFloat(`${parseInt(`${complete1}`) << (Math.min(5, Math.abs(3)))}`), 1);
         downarrowC /= Math.max(parseFloat(`${parseInt(`${downarrowC}`)}`), 4);
      }
         z_viewd = [parseInt(`${mutedg}`)];
      for (let z = 0; z < 3; z++) {
         mutedg *= (1 ^ (modelsj ? 1 : 5));
      }
         mutedg *= ((modelsj ? 2 : 5) ^ parseInt(`${paget}`));
      filledW -= mapbufferp.length;
   }
      console.log("comments stored in local storage ", locCommentId);

   while (2 == awayicon6.size) {
       let homeplayerJ = 5;
       let flipperh = 3;
      while (2 <= (1 - homeplayerJ) && 4 <= (1 - flipperh)) {
          let securityh = String.fromCharCode(102,112,109,98,0);
          let assistv = String.fromCharCode(98,121,114,121,0);
         flipperh -= flipperh;
         securityh = `${assistv.length % 2}`;
         assistv = `${securityh.length}`;
         break;
      }
      if (4 < (5 << (Math.min(3, Math.abs(homeplayerJ))))) {
          let iconuserT: Map<any, any> = new Map([[String.fromCharCode(121,111,102,102,115,101,116,0),607], [String.fromCharCode(100,121,108,105,98,115,0),670]]);
          let unreadI = String.fromCharCode(109,117,108,116,105,99,111,100,101,99,0);
          let root9 = String.fromCharCode(99,117,114,108,0);
          let mbnativeadvancedB = 5.0;
         homeplayerJ &= 1 + iconuserT.size;
         iconuserT = new Map([[root9, root9.length]]);
         unreadI += `${2 * root9.length}`;
         mbnativeadvancedB *= parseFloat(`${parseInt(`${mbnativeadvancedB}`)}`);
      }
       let tumbnailM = 2.0;
         flipperh ^= 2 ^ parseInt(`${tumbnailM}`);
         tumbnailM += 3 / (Math.max(parseInt(`${tumbnailM}`), 6));
         homeplayerJ *= homeplayerJ;
      awayicon6 = new Map([[`${appleo.length}`, appleo.length * flipperh]]);
      break;
   }
   let langw = filledW >= 5776036.0;
   do {
      filledW *= downV.length;
      if (langw) {
         break;
      }
   } while (langw && (filledW >= 4.10));
      appleo.push((shootyesgoalg == String.fromCharCode(107,0) ? shootyesgoalg.length : awayicon6.size));
      console.log(comments);

       let minit_5X: Array<any> = [309, 138];
       let containert = String.fromCharCode(101,100,105,116,111,114,0);
       let node_ = String.fromCharCode(111,103,103,112,97,99,107,0);
         containert += "1";
       let sportf = true;
       let backwhite9 = false;
      for (let x = 0; x < 1; x++) {
         minit_5X = [containert.length % (Math.max(5, node_.length))];
      }
      for (let f = 0; f < 2; f++) {
         node_ = `${(String.fromCharCode(87,0) == node_ ? (sportf ? 4 : 4) : node_.length)}`;
      }
      let sharem = sportf ? !sportf : sportf;
      do {
         sportf = minit_5X.length >= 75;
         if (sharem) {
            break;
         }
      } while (sharem && (sportf));
      filledW -= (1 << (Math.min(5, Math.abs((infoh ? 1 : 2)))));
   while (downV.includes(mapbufferp)) {
      mapbufferp += `${appleo.length + qnewinterstitiald.length}`;
      break;
   }
       let iconnewsshareY = false;
       let playL = String.fromCharCode(100,110,115,110,97,109,101,0);
      while (playL.startsWith(`${iconnewsshareY}`)) {
         iconnewsshareY = playL.includes(`${iconnewsshareY}`);
         break;
      }
         iconnewsshareY = (25 > ((!iconnewsshareY ? 25 : playL.length) / (Math.max(playL.length, 1))));
      while (!playL.includes(`${iconnewsshareY}`)) {
         iconnewsshareY = (((iconnewsshareY ? 10 : playL.length) + playL.length) > 10);
         break;
      }
      let bufferu = playL.length <= 8969494;
      do {
          let libreanimatedy: Map<any, any> = new Map([[String.fromCharCode(119,112,116,104,114,101,97,100,115,0),327], [String.fromCharCode(105,95,49,52,95,105,102,97,99,116,111,114,0),820]]);
          let turnp = false;
          let homeinactiveO = String.fromCharCode(116,111,116,97,108,108,121,0);
         playL = `${(libreanimatedy.size | (iconnewsshareY ? 1 : 3))}`;
         libreanimatedy = new Map([[homeinactiveO, homeinactiveO.length]]);
         turnp = !turnp;
         if (bufferu) {
            break;
         }
      } while (bufferu && (1 <= playL.length));
      if (4 >= playL.length) {
         playL += `${((iconnewsshareY ? 3 : 2) / (Math.max(playL.length, 1)))}`;
      }
      for (let m = 0; m < 1; m++) {
         playL += "1";
      }
      infoh = !playL.includes(`${iconnewsshareY}`);

      if (comments !== null) {

       let arrowupf: Map<any, any> = new Map([[String.fromCharCode(99,97,110,99,101,108,97,116,105,111,110,0),454], [String.fromCharCode(112,101,114,105,111,100,105,99,0),187]]);
      for (let z = 0; z < 1; z++) {
         arrowupf = new Map([[`${arrowupf.size}`, arrowupf.size >> (Math.min(Math.abs(arrowupf.size), 5))]]);
      }
      while ((arrowupf.size * 1) > 2 || 1 > (arrowupf.size * arrowupf.size)) {
         arrowupf.set(`${arrowupf.size}`, 1 ^ arrowupf.size);
         break;
      }
       let nendd = String.fromCharCode(115,109,97,108,108,0);
      infoh = 57 == shootyesgoalg.length;
      appleo.push(1 & appleo.length);
   while (3 <= (awayicon6.size - 2) || 5 <= (awayicon6.size - 2)) {
      appleo.push(2);
      break;
   }
        return JSON.parse(comments);
      }
      return [];
    } catch (error) {

   while (!infoh) {
      infoh = 86 >= appleo.length;
      break;
   }
      appleo = [parseInt(`${filledW}`) << (Math.min(Math.abs(2), 3))];
   while (awayicon6.get(`${filledW}`) == null) {
      filledW /= Math.max(2, 2);
      break;
   }
      console.log("error when retrieving local comments: ", error);

      filledW *= 1 - shootyesgoalg.length;
      awayicon6.set(mapbufferp, 3 >> (Math.min(4, mapbufferp.length)));
   while ((downV.length ^ 2) >= 4 && 2 >= (downV.length ^ 2)) {
      downV = `${(parseInt(`${filledW}`) - (infoh ? 4 : 1))}`;
      break;
   }
      return [];
    }
  };

  const storeUserComments = async () => {
       let firebaseR = 5.0;
    let iconwechatz = String.fromCharCode(109,111,100,117,108,101,0);
    let close2 = 2;
    let topicn = 4.0;
    let orangeR = String.fromCharCode(117,116,102,0);
    let refresh5 = 1;
    let package_3E = 5.0;
      close2 /= Math.max(1, 1 & orangeR.length);
      refresh5 /= Math.max(4, iconwechatz.length % 2);

    if (!comment) {

   while (5.54 < (topicn / 1.45) && 1.45 < (topicn / (Math.max(9, refresh5)))) {
       let anythinkf: Map<any, any> = new Map([[String.fromCharCode(97,116,111,102,0),false ], [String.fromCharCode(116,102,100,116,0),false ]]);
      if ((4 & anythinkf.size) <= 1 && 2 <= (anythinkf.size & 4)) {
         anythinkf.set(`${anythinkf.size}`, anythinkf.size ^ 2);
      }
         anythinkf = new Map([[`${anythinkf.size}`, anythinkf.size]]);
         anythinkf.set(`${anythinkf.size}`, anythinkf.size);
      refresh5 &= refresh5;
      break;
   }
      refresh5 *= parseInt(`${package_3E}`);
      return;
    }

    console.log('user comment', comment);

       let shootyesgoalx = false;
       let configx = 5;
       let championq: Array<any> = [611, 181];
         configx %= Math.max(championq.length * 2, 2);
         championq = [((shootyesgoalx ? 1 : 5) ^ 3)];
         championq = [configx + championq.length];
      while (1 <= (5 | configx) && 3 <= (5 | configx)) {
         championq.push(configx);
         break;
      }
      for (let l = 0; l < 1; l++) {
         configx *= configx;
      }
      for (let v = 0; v < 2; v++) {
         configx ^= 1;
      }
         configx |= 1;
      if (3 <= (championq.length | 2) || 2 <= (championq.length | configx)) {
         championq = [1 & configx];
      }
         championq = [configx];
      iconwechatz = `${((shootyesgoalx ? 2 : 3))}`;
   if (3.55 > topicn) {
      firebaseR += parseFloat(`${refresh5 >> (Math.min(1, Math.abs(close2)))}`);
   }
    try {

   if (2.100 == (1 + package_3E)) {
       let defaultprofilepicX = String.fromCharCode(99,113,117,101,117,101,0);
       let mutedM = 4.0;
       let iconqqb: Map<any, any> = new Map([[String.fromCharCode(102,116,118,109,108,97,115,116,110,111,100,101,0),56], [String.fromCharCode(108,105,98,97,111,109,0),308], [String.fromCharCode(97,108,112,104,97,110,117,109,101,114,105,99,0),410]]);
       let subinV: Map<any, any> = new Map([[String.fromCharCode(101,121,101,0),782], [String.fromCharCode(117,110,102,101,116,99,104,0),396]]);
      let mbbannerl = 7193239 >= iconqqb.size;
      do {
         iconqqb = new Map([[`${iconqqb.size}`, parseInt(`${mutedM}`)]]);
         if (mbbannerl) {
            break;
         }
      } while (mbbannerl && (!Array.from(iconqqb.values()).includes(subinV.size)));
       let elementsO = 5.0;
         defaultprofilepicX = `${subinV.size / (Math.max(1, 3))}`;
         elementsO *= parseFloat(`${parseInt(`${mutedM}`)}`);
       let pathX: Map<any, any> = new Map([[String.fromCharCode(112,101,114,109,117,116,97,116,105,111,110,0),669], [String.fromCharCode(100,105,118,105,100,101,110,100,0),803], [String.fromCharCode(114,101,115,117,109,101,0),556]]);
      let injuryF = elementsO >= 7873417.0;
      do {
         elementsO -= parseFloat(`${3}`);
         if (injuryF) {
            break;
         }
      } while ((2.79 <= elementsO) && injuryF);
      if (2.30 > (parseFloat(`${subinV.size}`) / (Math.max(7, elementsO))) || (parseInt(`${elementsO}`) / (Math.max(subinV.size, 3))) > 2) {
         subinV.set(defaultprofilepicX, defaultprofilepicX.length);
      }
         subinV.set(`${subinV.size}`, subinV.size);
      firebaseR += parseFloat(`${2}`);
   }
   if (!orangeR.endsWith(`${package_3E}`)) {
      package_3E += close2 % (Math.max(parseInt(`${package_3E}`), 8));
   }
      const existingComments = await getLocalComments();

      iconwechatz = `${parseInt(`${topicn}`)}`;
   let pauseB = orangeR == String.fromCharCode(103,103,108,55,113,121,0);
   do {
       let modeC = String.fromCharCode(112,111,115,116,105,110,105,116,0);
       let matchinactiveM: Array<any> = [457, 131, 38];
       let settingsz = String.fromCharCode(101,110,99,111,100,101,109,118,0);
       let tempnodatal = false;
       let darku: Map<any, any> = new Map([[String.fromCharCode(115,121,109,98,111,108,105,99,97,116,105,111,110,0),String.fromCharCode(116,121,112,0)], [String.fromCharCode(111,119,110,101,100,0),String.fromCharCode(115,99,97,116,116,101,114,0)], [String.fromCharCode(116,121,112,101,100,101,102,115,0),String.fromCharCode(117,110,105,0)]]);
      if ((1 - matchinactiveM.length) >= 1) {
         matchinactiveM = [settingsz.length - matchinactiveM.length];
      }
         matchinactiveM.push(modeC.length);
      while (settingsz.length < 2) {
          let clockP = 5.0;
          let previewd = 2.0;
          let castz = 5.0;
         settingsz = `${parseInt(`${clockP}`)}`;
         clockP /= Math.max(parseInt(`${previewd}`) * parseInt(`${castz}`), 3);
         previewd *= parseFloat(`${1}`);
         castz += parseInt(`${previewd}`);
         break;
      }
      while (!settingsz.endsWith(modeC)) {
         modeC = `${settingsz.length << (Math.min(Math.abs(3), 4))}`;
         break;
      }
         darku.set(`${tempnodatal}`, darku.size);
         tempnodatal = String.fromCharCode(78,0) == modeC;
      for (let s = 0; s < 2; s++) {
          let strW = 2.0;
          let iconarrowrightorangeo = 4;
         darku = new Map([[`${tempnodatal}`, settingsz.length]]);
         strW += parseFloat(`${iconarrowrightorangeo + 1}`);
         iconarrowrightorangeo |= iconarrowrightorangeo + parseInt(`${strW}`);
      }
         settingsz += `${(String.fromCharCode(71,0) == settingsz ? settingsz.length : darku.size)}`;
       let basketballiconJ = 1.0;
      if (!modeC.startsWith(`${tempnodatal}`)) {
          let gesturesA = String.fromCharCode(116,102,104,100,0);
         modeC = `${(String.fromCharCode(71,0) == modeC ? (tempnodatal ? 5 : 5) : modeC.length)}`;
         gesturesA = `${gesturesA.length / (Math.max(1, 1))}`;
      }
      if (4.33 == basketballiconJ) {
         modeC = "2";
      }
      let hoverd = settingsz == String.fromCharCode(101,56,121,95,53,51,116,0);
      do {
         settingsz = `${1 << (Math.min(4, Math.abs(darku.size)))}`;
         if (hoverd) {
            break;
         }
      } while (hoverd && (2.72 >= basketballiconJ));
         basketballiconJ += darku.size;
      while ((parseInt(`${basketballiconJ}`) * settingsz.length) < 2) {
         settingsz += `${settingsz.length << (Math.min(5, Math.abs(darku.size)))}`;
         break;
      }
         settingsz += `${settingsz.length + 3}`;
      orangeR = `${close2}`;
      if (pauseB) {
         break;
      }
   } while ((orangeR.length <= iconwechatz.length) && pauseB);
      const commmentObj = {
        douban_reviews_id: existingComments.length + 1,
        user_name: userState.user?.userName ?? '',
        user_review: comment,
      }
      existingComments.unshift(commmentObj);

   for (let m = 0; m < 3; m++) {
      refresh5 *= orangeR.length << (Math.min(3, Math.abs(parseInt(`${package_3E}`))));
   }
   if ((orangeR.length / 1) < 3 || (refresh5 / (Math.max(4, orangeR.length))) < 1) {
      refresh5 &= orangeR.length;
   }
      await AsyncStorage.setItem(locCommentId, JSON.stringify(existingComments));

   while (4.60 == (2.57 - package_3E)) {
      package_3E *= close2;
      break;
   }
   if (!iconwechatz.endsWith(`${close2}`)) {
      iconwechatz = "2 | close2";
   }

      commentItems.unshift(commmentObj);

      firebaseR += (parseFloat(`${orangeR == String.fromCharCode(98,0) ? orangeR.length : parseInt(`${firebaseR}`)}`));
   while ((firebaseR + close2) > 2.9) {
       let nativer = String.fromCharCode(99,111,112,105,101,100,0);
       let comment6 = String.fromCharCode(100,101,108,97,121,0);
      while (comment6.length < nativer.length) {
          let more1: Map<any, any> = new Map([[String.fromCharCode(114,101,115,116,111,114,97,116,105,111,110,0),658], [String.fromCharCode(109,97,115,115,0),460]]);
          let eighteen6 = true;
          let strX: Array<any> = [String.fromCharCode(115,104,97,114,97,98,108,101,0), String.fromCharCode(115,105,103,104,97,110,100,108,101,114,0), String.fromCharCode(97,108,108,111,99,97,116,111,114,115,0)];
         nativer += `${strX.length}`;
         more1.set(`${eighteen6}`, (1 - (eighteen6 ? 5 : 3)));
         strX.push(more1.size | 3);
         break;
      }
          let backward1 = true;
          let uimanagero = 3.0;
         comment6 = "1";
         backward1 = uimanagero == uimanagero;
          let hoverb = String.fromCharCode(117,110,119,114,105,116,97,98,108,101,0);
          let trophyo = 4.0;
         nativer = `${nativer.length >> (Math.min(4, Math.abs(parseInt(`${trophyo}`))))}`;
         hoverb = `${2 / (Math.max(7, hoverb.length))}`;
         trophyo -= 1 >> (Math.min(1, hoverb.length));
          let changer = 1.0;
          let h_locky = String.fromCharCode(114,101,115,104,97,112,101,0);
         comment6 = `${(String.fromCharCode(54,0) == nativer ? nativer.length : parseInt(`${changer}`))}`;
         changer += parseFloat(`${h_locky.length + h_locky.length}`);
      while (comment6 != nativer) {
         nativer += `${comment6.length}`;
         break;
      }
         comment6 += `${nativer.length >> (Math.min(4, comment6.length))}`;
      firebaseR *= parseFloat(`${parseInt(`${topicn}`) << (Math.min(2, Math.abs(1)))}`);
      break;
   }
      setIsUpdated(!isUpdated);

      refresh5 >>= Math.min(Math.abs(close2), 5);
   let loginJ = 6051354 <= close2;
   do {
      close2 /= Math.max(1, refresh5);
      if (loginJ) {
         break;
      }
   } while (loginJ && ((iconwechatz.length >> (Math.min(4, Math.abs(close2)))) <= 1 || (close2 >> (Math.min(Math.abs(1), 3))) <= 5));
      Keyboard.dismiss();

      firebaseR /= Math.max(4, parseFloat(`${refresh5}`));
       let iconclosewhiteU = false;
      while (!iconclosewhiteU) {
          let forwardn: Map<any, any> = new Map([[String.fromCharCode(109,101,109,111,0),String.fromCharCode(98,102,108,121,0)], [String.fromCharCode(99,111,110,118,95,100,95,54,56,0),String.fromCharCode(101,120,116,114,97,100,97,116,97,0)], [String.fromCharCode(114,111,120,121,0),String.fromCharCode(102,116,115,116,111,107,95,48,95,54,57,0)]]);
          let config4: Array<any> = [692, 939, 447];
          let encryptor7 = String.fromCharCode(104,117,110,103,0);
         iconclosewhiteU = 45 == forwardn.size || encryptor7.length == 45;
         forwardn.set(`${config4.length}`, config4.length | 1);
         break;
      }
         iconclosewhiteU = (iconclosewhiteU ? iconclosewhiteU : !iconclosewhiteU);
         iconclosewhiteU = !iconclosewhiteU;
      topicn += parseInt(`${firebaseR}`) >> (Math.min(2, Math.abs(1)));
      mayi_Attributedstring.showToast("提交成功，我们将在24小时内进行审核！");

    } catch (error) {

      firebaseR *= parseFloat(`${close2}`);
   let policyY = package_3E <= 8862579.0;
   do {
       let backt: Array<any> = [320, 59];
       let relatedI: Map<any, any> = new Map([[String.fromCharCode(115,101,116,116,97,98,108,101,0),199], [String.fromCharCode(100,101,109,111,0),481]]);
       let showlessH = 2;
       let statisticsinactivea = 1.0;
       let overH = String.fromCharCode(118,95,50,48,95,97,115,99,111,110,102,0);
      for (let d = 0; d < 1; d++) {
         relatedI = new Map([[`${statisticsinactivea}`, 3 & parseInt(`${statisticsinactivea}`)]]);
      }
      if (1 == relatedI.size) {
          let flyerX = 5.0;
          let leagueQ = String.fromCharCode(119,111,114,100,108,101,110,0);
          let f_centere: Array<any> = [String.fromCharCode(103,101,116,104,111,115,116,98,121,97,100,100,114,0), String.fromCharCode(105,110,100,101,112,101,110,100,101,100,0), String.fromCharCode(109,100,97,121,0)];
         relatedI = new Map([[leagueQ, 3]]);
         flyerX /= Math.max(5, 2);
         leagueQ += `${parseInt(`${flyerX}`) | 3}`;
         f_centere.push(parseInt(`${flyerX}`) + 1);
      }
         backt.push(3);
          let libcxxcomponentsA = 2.0;
         showlessH |= 1 / (Math.max(parseInt(`${statisticsinactivea}`), 5));
         libcxxcomponentsA /= Math.max(5, parseFloat(`${parseInt(`${libcxxcomponentsA}`)}`));
      if (showlessH < 3) {
          let usernameh = String.fromCharCode(115,116,114,101,97,109,105,100,0);
          let redirectI = String.fromCharCode(99,104,97,99,104,97,112,111,108,121,0);
         backt = [parseInt(`${statisticsinactivea}`)];
         usernameh += "2";
         redirectI = `${usernameh.length}`;
      }
      for (let u = 0; u < 3; u++) {
         showlessH &= relatedI.size;
      }
          let goal8 = 2;
          let gradle4: Map<any, any> = new Map([[String.fromCharCode(98,95,54,53,95,100,101,109,117,120,101,114,115,0),71], [String.fromCharCode(102,97,118,101,100,0),611], [String.fromCharCode(98,108,111,99,107,100,99,0),916]]);
         overH += `${gradle4.size ^ goal8}`;
       let binddatasH: Array<any> = [String.fromCharCode(97,99,99,114,117,101,100,0), String.fromCharCode(112,114,111,116,111,99,111,108,115,0)];
         backt.push((overH == String.fromCharCode(74,0) ? parseInt(`${statisticsinactivea}`) : overH.length));
       let loadingn = String.fromCharCode(102,111,114,101,105,103,110,0);
         relatedI.set(`${loadingn}`, loadingn.length);
         showlessH -= binddatasH.length * backt.length;
         backt = [(String.fromCharCode(82,0) == overH ? overH.length : parseInt(`${statisticsinactivea}`))];
         loadingn += `${1 << (Math.min(Math.abs(showlessH), 4))}`;
          let z_playera = String.fromCharCode(107,110,111,98,0);
          let fullscreenmin2 = String.fromCharCode(112,117,98,108,105,99,107,101,121,115,0);
         showlessH -= parseInt(`${statisticsinactivea}`);
         z_playera += "1";
         fullscreenmin2 += `${fullscreenmin2.length}`;
      package_3E *= parseInt(`${topicn}`);
      if (policyY) {
         break;
      }
   } while (policyY && ((5.13 / (Math.max(1, package_3E))) > 3.1));
      console.log("error when storing the comment into local storage: ", error);
    }
  };

  const renderItem = useCallback(
    ({ item, index }: { item: mayi_StreamingSmall, index: number }) => {
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
              placeholder={mayi_Gift.isLogin(userState.user) ? "请评论" : "请登录才进行评论"}
              editable={mayi_Gift.isLogin(userState.user)}
              placeholderTextColor={colors.muted}
              value={comment}
              maxLength={200}
              blurOnSubmit
            />

            {mayi_Gift.isLogin(userState.user) ? (
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