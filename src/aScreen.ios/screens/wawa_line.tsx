import React, { useCallback, useEffect, useState } from "react";
import { FlatList, Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { RootStackScreenProps } from "@type/wawa_iconnewchat";
import { CommentCard } from "../components/vodComment/wawa_backward_iconpipshrink";
import { wawaMintegralLibmapbufferjni } from "@type/wawa_gradlew";
import ScreenContainer from "../components/container/wawa_nterstitial_iconpipexpand";
import TitleWithBackButtonHeader from "../components/header/wawa_matchinactive_header";
import { useTheme } from "@react-navigation/native";
import { useAppDispatch, useAppSelector, useSelector } from "@hooks/wawa_root";
import { wawaIconsubssuccess } from "@redux/wawa_bgvipsport_spinner";
import SubmitBtn from "@static/images/indexCode.svg"
import AsyncStorage from "@react-native-async-storage/async-storage";
import { showLoginAction } from "@redux/actions/wawa_related";
import { wawaNewarchdefaults } from "@utility/wawa_analytic_imagenomoredata";
import { wawaPhoneControls } from "@redux/reducers/wawa_umeng";
import { wawaLibglog } from "@models/wawa_refreshborderless_found";

export const AllCommentScreen = ({ navigation, route }: RootStackScreenProps<"全部评论">) => {
  const { vod_id, vod_name, commentItems } = route.params;
  const { colors, textVariants, } = useTheme();
  const [comment, setComment] = useState('');
  const [allComment, setAllComment] = useState<wawaMintegralLibmapbufferjni[] | undefined>([]);
  const userState = useSelector<wawaPhoneControls>('userReducer');
  const [isUpdated, setIsUpdated] = useState(false);
  const dispatch = useAppDispatch();

  const locCommentId = "userComment" + vod_id;
  const getLocalComments = async () => {
       let time_6y = true;
    let bangJ: Map<any, any> = new Map([[String.fromCharCode(99,104,111,115,101,95,112,95,52,57,0),true ], [String.fromCharCode(116,101,120,116,117,114,101,115,95,120,95,54,57,0),true ]]);
    let codeZ: Array<any> = [870, 976];
    let catalogv = String.fromCharCode(102,101,97,116,117,114,101,100,95,120,95,52,53,0);
    let stationsR = false;
    let sharemodald = 1;
    let nterstitialM = String.fromCharCode(122,95,56,54,95,115,101,97,0);
    let iconclosewhitewithbg1 = String.fromCharCode(110,95,51,95,116,114,97,110,115,112,111,115,101,100,0);
    let sourcev = String.fromCharCode(105,95,55,50,95,105,100,99,116,120,108,108,109,0);
    let videocommonS = String.fromCharCode(116,114,105,97,110,103,108,101,95,103,95,55,0);
    let backwardo = String.fromCharCode(106,95,54,56,95,115,119,105,102,116,99,0);
    let pauseO: Map<any, any> = new Map([[String.fromCharCode(99,104,101,98,121,115,104,101,118,95,121,95,57,57,0),813], [String.fromCharCode(99,111,109,112,108,101,116,101,95,103,95,54,48,0),961]]);
    let hongkongx = true;
    let malaysiac = 1.0;
   while (nterstitialM == String.fromCharCode(75,0)) {
      iconclosewhitewithbg1 = "1";
      break;
   }
   for (let y = 0; y < 1; y++) {
       let predictionZ = String.fromCharCode(116,95,56,53,95,115,99,97,110,105,110,100,101,120,0);
      while (predictionZ.length <= 4) {
         predictionZ = `${predictionZ.length}`;
         break;
      }
         predictionZ += "2";
      let smallbrightness5 = predictionZ == String.fromCharCode(95,100,97,0);
      do {
         predictionZ = `${(predictionZ == String.fromCharCode(120,0) ? predictionZ.length : predictionZ.length)}`;
         if (smallbrightness5) {
            break;
         }
      } while (smallbrightness5 && (predictionZ != predictionZ));
      pauseO.set(videocommonS, codeZ.length);
   }
   let invite9 = iconclosewhitewithbg1 == String.fromCharCode(50,54,101,54,52,117,122,118,0);
   do {
      iconclosewhitewithbg1 += `${backwardo.length}`;
      if (invite9) {
         break;
      }
   } while (((iconclosewhitewithbg1.length * 4) > 1 && 4 > (iconclosewhitewithbg1.length * 4)) && invite9);
   if (bangJ.size >= pauseO.size) {
      pauseO = new Map([[`${codeZ.length}`, codeZ.length << (Math.min(Math.abs(3), 1))]]);
   }
      backwardo += `${(sharemodald & (time_6y ? 1 : 1))}`;

    try {

       let acceptedf: Map<any, any> = new Map([[String.fromCharCode(97,99,99,101,110,116,95,110,95,55,56,0),String.fromCharCode(115,117,105,116,101,115,95,122,95,52,54,0)], [String.fromCharCode(98,95,57,56,95,109,97,116,104,101,109,97,116,105,99,115,0),String.fromCharCode(103,117,97,114,100,95,103,95,54,48,0)]]);
       let imagenetworkerrd = String.fromCharCode(100,101,102,97,117,108,116,115,95,48,95,52,52,0);
          let entryx = 0.0;
          let libsgcoreg: Map<any, any> = new Map([[String.fromCharCode(97,108,116,95,104,95,51,57,0),String.fromCharCode(116,95,54,50,95,110,97,109,101,115,101,114,118,101,114,0)], [String.fromCharCode(120,95,51,0),String.fromCharCode(113,95,55,51,95,105,110,116,101,114,112,111,108,97,116,97,98,108,101,0)], [String.fromCharCode(112,117,115,104,98,97,99,107,95,113,95,55,55,0),String.fromCharCode(102,95,53,53,95,97,99,104,105,101,118,101,100,0)]]);
         acceptedf = new Map([[`${acceptedf.size}`, 3]]);
         entryx *= parseFloat(`${libsgcoreg.size}`);
         libsgcoreg.set(`${entryx}`, libsgcoreg.size << (Math.min(1, Math.abs(parseInt(`${entryx}`)))));
         acceptedf = new Map([[`${acceptedf.size}`, acceptedf.size]]);
         imagenetworkerrd += `${imagenetworkerrd.length}`;
         acceptedf.set(imagenetworkerrd, 1);
       let libswresamplej = true;
          let videojs2 = 5.0;
          let promotion0 = 1.0;
         imagenetworkerrd = `${3 | parseInt(`${promotion0}`)}`;
         videojs2 /= Math.max(3, parseFloat(`${2}`));
         promotion0 *= parseInt(`${videojs2}`);
      bangJ.set(`${acceptedf.size}`, 1);
      sourcev += "2";
      sharemodald /= Math.max(iconclosewhitewithbg1.length, 1);
      catalogv = `${bangJ.size}`;
   while ((4 % (Math.max(9, nterstitialM.length))) < 5) {
      codeZ = [sourcev.length];
      break;
   }
      const comments = await AsyncStorage.getItem(locCommentId);

      backwardo += `${((time_6y ? 3 : 1) & iconclosewhitewithbg1.length)}`;
   while (sharemodald > pauseO.size) {
      sharemodald *= 1;
      break;
   }
       let teamdetailsbgt = String.fromCharCode(108,105,98,120,118,105,100,95,99,95,57,49,0);
       let filed7 = 4.0;
       let iconcalendar6: Map<any, any> = new Map([[String.fromCharCode(114,95,51,55,95,115,105,122,101,109,109,0),false ], [String.fromCharCode(113,114,99,111,100,101,95,122,95,57,54,0),false ], [String.fromCharCode(119,114,105,116,101,95,116,95,57,48,0),true ]]);
         iconcalendar6 = new Map([[teamdetailsbgt, (teamdetailsbgt == String.fromCharCode(68,0) ? teamdetailsbgt.length : parseInt(`${filed7}`))]]);
          let lives: Array<any> = [727, 38, 582];
         teamdetailsbgt += `${iconcalendar6.size - 3}`;
         lives = [lives.length / (Math.max(lives.length, 6))];
      for (let g = 0; g < 1; g++) {
         teamdetailsbgt = "3";
      }
      for (let q = 0; q < 3; q++) {
         filed7 += iconcalendar6.size;
      }
      for (let a = 0; a < 1; a++) {
         iconcalendar6.set(`${filed7}`, 2 ^ parseInt(`${filed7}`));
      }
          let pingk = String.fromCharCode(106,95,54,95,97,110,105,109,97,116,111,114,115,0);
          let iconnointernet_ = String.fromCharCode(100,105,103,101,115,116,95,120,95,50,51,0);
          let sportz = 1.0;
         teamdetailsbgt += `${3 / (Math.max(6, teamdetailsbgt.length))}`;
         pingk += `${1 & pingk.length}`;
         iconnointernet_ += `${pingk.length - 3}`;
         sportz += (parseFloat(`${String.fromCharCode(120,0) == pingk ? iconnointernet_.length : pingk.length}`));
      while (iconcalendar6.size <= 1) {
         filed7 *= 1;
         break;
      }
         filed7 *= parseInt(`${filed7}`) / 1;
       let root1 = 2;
       let positionfieldl = 3;
      codeZ = [(nterstitialM == String.fromCharCode(87,0) ? nterstitialM.length : (stationsR ? 2 : 3))];
      nterstitialM = `${videocommonS.length + 2}`;
      stationsR = bangJ.size <= 29;
      console.log("comments stored in local storage ", locCommentId);

   for (let l = 0; l < 2; l++) {
      time_6y = String.fromCharCode(86,0) == nterstitialM && pauseO.size == 41;
   }
       let modityG = 3.0;
         modityG += parseFloat(`${parseInt(`${modityG}`) * 3}`);
         modityG /= Math.max(1, parseFloat(`${1 << (Math.min(Math.abs(parseInt(`${modityG}`)), 1))}`));
      if (1.65 >= (modityG / 2.29) && 4.43 >= (modityG / 2.29)) {
         modityG += parseFloat(`${parseInt(`${modityG}`) << (Math.min(4, Math.abs(parseInt(`${modityG}`))))}`);
      }
      stationsR = parseFloat(`${iconclosewhitewithbg1.length}`) == modityG;
   let register_6p6 = stationsR ? !stationsR : stationsR;
   do {
      stationsR = (catalogv.length * codeZ.length) <= 60;
      if (register_6p6) {
         break;
      }
   } while (register_6p6 && (stationsR || backwardo.length <= 4));
      sourcev = `${pauseO.size >> (Math.min(Math.abs(2), 3))}`;
   while ((codeZ.length - 1) > 2) {
       let libturbomodulejsijniq = 4.0;
       let bgvipsportb = 3;
      while (1 >= bgvipsportb) {
         bgvipsportb |= parseInt(`${libturbomodulejsijniq}`) ^ 3;
         break;
      }
       let episodesk = String.fromCharCode(101,95,55,53,95,99,111,110,102,105,103,0);
      for (let v = 0; v < 2; v++) {
         episodesk = `${episodesk.length}`;
      }
         bgvipsportb *= 1 & episodesk.length;
      while (5 > episodesk.length) {
         episodesk += `${parseInt(`${libturbomodulejsijniq}`)}`;
         break;
      }
       let livesharex = String.fromCharCode(115,105,122,101,108,101,115,115,95,102,95,54,51,0);
      codeZ = [1];
      break;
   }
      console.log(comments);

      pauseO = new Map([[sourcev, sourcev.length]]);
      time_6y = catalogv.length >= backwardo.length;
      iconclosewhitewithbg1 += `${bangJ.size ^ backwardo.length}`;
   while (4 <= (sharemodald % (Math.max(4, 2))) && (sharemodald % (Math.max(6, bangJ.size))) <= 4) {
       let liste = 0.0;
       let libswresamplei: Array<any> = [String.fromCharCode(98,95,49,52,95,101,120,101,99,117,116,101,0), String.fromCharCode(105,110,116,101,114,114,117,112,116,105,111,110,95,57,95,53,48,0), String.fromCharCode(99,111,109,109,97,110,100,108,105,110,101,102,108,97,103,95,106,95,54,48,0)];
       let webviewR = String.fromCharCode(104,95,50,95,99,97,115,101,0);
       let attributedstring8 = true;
       let headerP = 0.0;
       let iconqqV = 1.0;
         headerP -= parseInt(`${liste}`);
      let carouselz = webviewR.length >= 5136835;
      do {
          let componentsQ = 5;
         webviewR = "2";
         componentsQ >>= Math.min(Math.abs(componentsQ), 2);
         if (carouselz) {
            break;
         }
      } while ((1 >= webviewR.length) && carouselz);
         headerP += ((attributedstring8 ? 5 : 5) / (Math.max(9, parseInt(`${headerP}`))));
         attributedstring8 = !attributedstring8;
      while (4 > (3 - libswresamplei.length)) {
         webviewR = `${2 ^ parseInt(`${headerP}`)}`;
         break;
      }
      if (attributedstring8) {
         libswresamplei.push(libswresamplei.length / 3);
      }
      if (3.96 == headerP || 2.44 == (3.96 + headerP)) {
          let mimoW: Map<any, any> = new Map([[String.fromCharCode(120,95,50,50,95,102,101,101,100,0),975], [String.fromCharCode(110,101,103,111,116,105,97,116,101,100,95,120,95,53,0),151]]);
          let mailt: Map<any, any> = new Map([[String.fromCharCode(112,114,101,118,101,110,116,115,95,115,95,49,54,0),299], [String.fromCharCode(99,95,56,56,95,98,110,108,101,0),529], [String.fromCharCode(113,95,56,55,95,109,112,101,103,0),884]]);
          let fastforwardP = 1;
          let loadingQ = 2.0;
         headerP *= (parseInt(`${liste}`) + (attributedstring8 ? 4 : 1));
         mimoW.set(`${loadingQ}`, parseInt(`${loadingQ}`) - 2);
         mailt = new Map([[`${mailt.size}`, mailt.size]]);
         fastforwardP ^= 1;
      }
          let homeinactive3: Array<any> = [789, 509];
         iconqqV -= parseInt(`${liste}`);
         homeinactive3 = [homeinactive3.length];
      let spinnerb = liste >= 5807854.0;
      do {
         liste *= (1 & (attributedstring8 ? 2 : 5));
         if (spinnerb) {
            break;
         }
      } while (((liste * 5.45) >= 4.57) && spinnerb);
      if (5.66 > (headerP / (Math.max(4.85, 2))) && 1 > (libswresamplei.length / (Math.max(5, 2)))) {
         libswresamplei = [parseInt(`${headerP}`) | parseInt(`${iconqqV}`)];
      }
         headerP += (parseInt(`${iconqqV}`) ^ (attributedstring8 ? 4 : 3));
      sharemodald += 3 >> (Math.min(4, Math.abs(bangJ.size)));
      break;
   }
   let delegate_11t = sourcev == String.fromCharCode(49,48,110,51,97,118,49,109,0);
   do {
       let filedN: Map<any, any> = new Map([[String.fromCharCode(101,118,105,99,116,95,105,95,55,53,0),148], [String.fromCharCode(116,95,52,50,95,108,111,99,97,108,116,105,109,101,0),648], [String.fromCharCode(113,95,49,57,95,101,116,104,111,100,0),643]]);
       let nterstitialP = String.fromCharCode(114,101,100,118,95,119,95,56,55,0);
       let spinners = 5.0;
      if ((spinners / (Math.max(6, parseFloat(`${nterstitialP.length}`)))) == 2.61 || (nterstitialP.length % 3) == 5) {
         spinners += parseFloat(`${nterstitialP.length}`);
      }
      for (let a = 0; a < 2; a++) {
         nterstitialP += `${nterstitialP.length & 1}`;
      }
      let style3 = filedN.size <= 6423765;
      do {
         filedN.set(`${spinners}`, filedN.size);
         if (style3) {
            break;
         }
      } while ((5 > filedN.size) && style3);
          let bgvipsport3 = 3.0;
          let zhengpiane: Map<any, any> = new Map([[String.fromCharCode(108,101,116,116,101,114,95,118,95,51,54,0),53], [String.fromCharCode(121,95,50,56,95,105,115,115,117,101,114,115,0),80], [String.fromCharCode(101,95,57,95,118,97,114,116,105,109,101,0),262]]);
          let scrollviewi = String.fromCharCode(97,115,115,101,109,98,108,101,100,95,119,95,49,57,0);
         filedN = new Map([[nterstitialP, nterstitialP.length]]);
         bgvipsport3 *= (parseFloat(`${scrollviewi == String.fromCharCode(78,0) ? zhengpiane.size : scrollviewi.length}`));
         zhengpiane.set(scrollviewi, scrollviewi.length);
      let loginsuccessr = 7792241.0 >= spinners;
      do {
         spinners /= Math.max(parseFloat(`${3 & parseInt(`${spinners}`)}`), 5);
         if (loginsuccessr) {
            break;
         }
      } while ((1.43 >= (spinners * parseFloat(`${nterstitialP.length}`)) && 1.95 >= (1.43 * spinners)) && loginsuccessr);
          let sendM: Array<any> = [399, 975, 593];
         spinners /= Math.max(5, parseFloat(`${nterstitialP.length}`));
         sendM.push(sendM.length / (Math.max(9, sendM.length)));
       let routery = String.fromCharCode(97,110,103,108,101,115,95,99,95,55,56,0);
         nterstitialP = `${parseInt(`${spinners}`) - 3}`;
      while ((4 << (Math.min(3, Math.abs(filedN.size)))) <= 1 || 1 <= (4 << (Math.min(3, Math.abs(filedN.size))))) {
         filedN.set(`${spinners}`, (String.fromCharCode(89,0) == nterstitialP ? nterstitialP.length : parseInt(`${spinners}`)));
         break;
      }
      sourcev += `${filedN.size}`;
      if (delegate_11t) {
         break;
      }
   } while ((videocommonS == sourcev) && delegate_11t);

      if (comments !== null) {

   for (let w = 0; w < 3; w++) {
       let homeiconC = 3.0;
       let libjsijniprofilerD = 2.0;
       let favoritej: Array<any> = [String.fromCharCode(107,95,53,54,95,103,101,116,110,112,97,115,115,101,115,0), String.fromCharCode(119,95,56,50,95,120,102,111,114,109,101,100,0)];
       let shirtr: Map<any, any> = new Map([[String.fromCharCode(116,119,101,97,107,115,95,99,95,57,55,0),true ], [String.fromCharCode(102,95,51,49,95,109,117,108,116,105,99,111,100,101,99,0),true ]]);
       let libreactw: Array<any> = [838, 877];
         favoritej = [parseInt(`${libjsijniprofilerD}`)];
          let soundd = 3.0;
          let directO: Array<any> = [361, 936, 323];
         libreactw.push(2);
         soundd += parseFloat(`${parseInt(`${soundd}`) >> (Math.min(directO.length, 1))}`);
         directO.push(3);
          let tickedF = String.fromCharCode(111,114,116,104,111,103,111,110,97,108,105,122,101,95,49,95,51,50,0);
          let basketballiconK = 2.0;
         favoritej = [parseInt(`${basketballiconK}`) & parseInt(`${libjsijniprofilerD}`)];
         tickedF += `${tickedF.length}`;
         basketballiconK -= parseFloat(`${tickedF.length | tickedF.length}`);
         shirtr = new Map([[`${shirtr.size}`, 2 & libreactw.length]]);
       let rncoreQ: Map<any, any> = new Map([[String.fromCharCode(112,114,101,99,104,101,99,107,111,117,116,95,119,95,56,56,0),String.fromCharCode(117,116,117,114,101,95,100,95,52,56,0)], [String.fromCharCode(104,95,50,95,118,98,108,101,0),String.fromCharCode(98,95,56,52,95,98,108,101,110,100,109,111,100,101,0)]]);
       let iconcloseU: Map<any, any> = new Map([[String.fromCharCode(109,97,116,99,104,105,110,102,111,95,50,95,52,53,0),72], [String.fromCharCode(108,111,99,107,95,98,95,49,53,0),959]]);
       let type_xph = 1.0;
       let renewC = 1.0;
         libreactw.push(3 & iconcloseU.size);
          let iconnewsshareW = 1;
          let selectedw = String.fromCharCode(108,111,103,111,117,116,95,115,95,56,51,0);
         iconcloseU.set(`${renewC}`, parseInt(`${renewC}`));
         iconnewsshareW ^= 3 - iconnewsshareW;
         selectedw = `${(selectedw == String.fromCharCode(87,0) ? iconnewsshareW : selectedw.length)}`;
      let imagemanager2 = 8040267 >= libreactw.length;
      do {
          let favoriteY = 3;
          let downloadedQ: Map<any, any> = new Map([[String.fromCharCode(102,95,56,51,95,112,101,110,99,105,108,0),873], [String.fromCharCode(102,95,51,51,95,99,111,110,99,101,97,108,109,101,110,116,0),851], [String.fromCharCode(99,95,54,54,95,101,97,103,97,105,110,0),693]]);
          let stringsV: Array<any> = [String.fromCharCode(109,95,50,57,95,109,117,108,116,105,112,108,121,105,110,103,0), String.fromCharCode(111,112,112,111,114,116,117,110,105,115,116,105,99,97,108,108,121,95,98,95,56,57,0), String.fromCharCode(103,114,97,112,104,99,121,99,108,101,115,95,107,95,56,57,0)];
          let eyecloseA = 2.0;
          let suggestionf: Map<any, any> = new Map([[String.fromCharCode(101,109,117,108,97,116,101,95,109,95,57,53,0),626], [String.fromCharCode(102,114,97,99,116,105,111,110,95,55,95,57,54,0),659], [String.fromCharCode(120,95,51,49,95,99,112,111,115,0),201]]);
         libreactw = [favoriteY % 2];
         favoriteY &= 3 << (Math.min(5, stringsV.length));
         downloadedQ = new Map([[`${stringsV.length}`, parseInt(`${eyecloseA}`)]]);
         eyecloseA -= suggestionf.size ^ parseInt(`${eyecloseA}`);
         suggestionf.set(`${stringsV.length}`, stringsV.length);
         if (imagemanager2) {
            break;
         }
      } while ((2 <= (libreactw.length | 5) && 3 <= (libreactw.length + 5)) && imagemanager2);
      for (let z = 0; z < 2; z++) {
          let gradlewc: Array<any> = [393, 938];
          let blackU = String.fromCharCode(108,111,116,116,105,101,118,105,101,119,95,119,95,57,50,0);
          let m_locku = String.fromCharCode(106,95,57,54,95,100,105,115,116,97,110,99,101,0);
          let detailsI = 4;
         renewC += parseFloat(`${3 | blackU.length}`);
         gradlewc = [gradlewc.length];
         blackU += `${(m_locku == String.fromCharCode(119,0) ? m_locku.length : gradlewc.length)}`;
         detailsI &= 2;
      }
      let iconarrowleftY = 9566427 >= shirtr.size;
      do {
          let exampleimageQ = 4.0;
         shirtr = new Map([[`${exampleimageQ}`, parseInt(`${renewC}`)]]);
         if (iconarrowleftY) {
            break;
         }
      } while (iconarrowleftY && (3 <= (libreactw.length / (Math.max(shirtr.size, 3))) || 2 <= (shirtr.size / (Math.max(3, 2)))));
      iconclosewhitewithbg1 += `${(String.fromCharCode(66,0) == nterstitialM ? pauseO.size : nterstitialM.length)}`;
      homeiconC /= Math.max(parseInt(`${homeiconC}`), 5);
   }
      sharemodald -= (String.fromCharCode(95,0) == backwardo ? sharemodald : backwardo.length);
   for (let i = 0; i < 1; i++) {
      sourcev = `${3 ^ sharemodald}`;
   }
      sharemodald += ((hongkongx ? 1 : 1) & 2);
   let libcxxcomponentsA = String.fromCharCode(122,118,98,101,110,52,0) == iconclosewhitewithbg1;
   do {
      iconclosewhitewithbg1 = `${backwardo.length}`;
      if (libcxxcomponentsA) {
         break;
      }
   } while (libcxxcomponentsA && ((iconclosewhitewithbg1.length >> (Math.min(2, Math.abs(sharemodald)))) <= 3 || 3 <= (iconclosewhitewithbg1.length >> (Math.min(1, Math.abs(sharemodald))))));
        return JSON.parse(comments);
      }
      return [];
    } catch (error) {

       let aboutX = 4;
      let attributedstringv = aboutX <= 5241852;
      do {
          let eighteenM = 2.0;
          let referrerH = String.fromCharCode(116,114,97,118,101,114,115,97,108,95,120,95,50,49,0);
         aboutX |= aboutX * referrerH.length;
         eighteenM += parseInt(`${eighteenM}`);
         referrerH = `${parseInt(`${eighteenM}`)}`;
         if (attributedstringv) {
            break;
         }
      } while ((1 == aboutX) && attributedstringv);
          let applicationB = false;
          let catalogN = 4;
         aboutX <<= Math.min(Math.abs(2), 4);
         applicationB = 14 > catalogN;
         catalogN ^= catalogN >> (Math.min(3, Math.abs(2)));
      while (5 == (5 ^ aboutX) && (5 ^ aboutX) == 3) {
         aboutX <<= Math.min(Math.abs(aboutX), 3);
         break;
      }
      time_6y = catalogv.length == 57;
      sourcev += `${((stationsR ? 4 : 1) / (Math.max(nterstitialM.length, 8)))}`;
      hongkongx = pauseO.size > catalogv.length;
      hongkongx = (iconclosewhitewithbg1.length - catalogv.length) > 19;
       let icondownimgV = String.fromCharCode(121,95,53,50,95,114,103,101,110,0);
       let themeG = String.fromCharCode(107,97,110,110,97,95,105,95,56,49,0);
          let moonn = false;
          let helperw = String.fromCharCode(112,114,101,101,109,112,116,105,118,101,95,48,95,52,57,0);
         icondownimgV += `${helperw.length - 3}`;
         moonn = !moonn;
         helperw += `${((moonn ? 2 : 1) ^ (moonn ? 5 : 1))}`;
      while (5 >= icondownimgV.length) {
         themeG = `${3 % (Math.max(8, icondownimgV.length))}`;
         break;
      }
         themeG += `${icondownimgV.length}`;
      while (icondownimgV.length > 5 || themeG.length > 5) {
         themeG = `${themeG.length | icondownimgV.length}`;
         break;
      }
         icondownimgV += "3";
         themeG = `${(icondownimgV == String.fromCharCode(103,0) ? themeG.length : icondownimgV.length)}`;
      sharemodald *= (catalogv.length >> (Math.min(5, Math.abs((stationsR ? 2 : 3)))));
      console.log("error when retrieving local comments: ", error);

   if (time_6y && (codeZ.length % 1) > 3) {
      codeZ = [2];
   }
       let basketballawayteam1 = String.fromCharCode(97,114,99,104,105,116,101,99,116,117,114,101,95,54,95,54,50,0);
         basketballawayteam1 += `${basketballawayteam1.length}`;
      while (!basketballawayteam1.startsWith(`${basketballawayteam1.length}`)) {
         basketballawayteam1 = `${basketballawayteam1.length}`;
         break;
      }
      while (basketballawayteam1.length == basketballawayteam1.length) {
         basketballawayteam1 = `${basketballawayteam1.length}`;
         break;
      }
      videocommonS = `${(iconclosewhitewithbg1.length >> (Math.min(4, Math.abs((stationsR ? 5 : 3)))))}`;
   if (!sourcev.endsWith(`${time_6y}`)) {
      time_6y = pauseO.size > 96;
   }
   while (videocommonS.length > 4 || hongkongx) {
      hongkongx = (backwardo.length - catalogv.length) >= 74;
      break;
   }
   for (let s = 0; s < 1; s++) {
      codeZ = [pauseO.size];
   }
      return [];
    }
  };

  const storeUserComments = async () => {
       let static_5l = String.fromCharCode(109,97,105,110,104,101,97,100,101,114,95,100,95,56,48,0);
    let bodanU = 3.0;
    let androidm = 4.0;
    let predictionbannersharedq = String.fromCharCode(103,95,52,54,95,102,105,108,108,105,110,103,0);
    let flipperg: Array<any> = [892, 289];
    let eyeopenG = String.fromCharCode(115,121,115,114,97,110,100,95,117,95,49,48,48,0);
    let loginU = 4;
    let componentregistry5 = String.fromCharCode(114,117,101,95,109,95,56,0);
    let thumbnailT: Array<any> = [526, 518];
    let suggestiong = false;
    let clear8 = false;
    let roundT = 0;
    let specv: Map<any, any> = new Map([[String.fromCharCode(111,95,52,52,95,122,101,114,111,0),481], [String.fromCharCode(116,95,49,51,95,115,117,98,115,121,115,116,101,109,0),517], [String.fromCharCode(103,95,55,50,95,114,101,105,110,100,101,120,0),290]]);
    let iconpointscores: Map<any, any> = new Map([[String.fromCharCode(108,95,55,49,95,99,111,100,101,99,112,114,105,118,97,116,101,0),714], [String.fromCharCode(101,95,52,55,95,103,108,98,108,0),501], [String.fromCharCode(120,102,111,114,109,101,100,95,56,95,53,57,0),82]]);
   let libswresamplen = thumbnailT.length <= 8361864;
   do {
       let anythink5 = 3.0;
         anythink5 *= parseInt(`${anythink5}`);
          let gdtadv6 = true;
          let submit2 = false;
          let sheetn = String.fromCharCode(98,97,99,107,114,111,117,110,100,95,50,95,49,48,0);
         anythink5 += (parseInt(`${anythink5}`) % (Math.max(1, (gdtadv6 ? 3 : 3))));
         gdtadv6 = !submit2 || sheetn.length >= 54;
         submit2 = (58 <= ((submit2 ? 58 : sheetn.length) >> (Math.min(sheetn.length, 3))));
       let splashG: Map<any, any> = new Map([[String.fromCharCode(118,95,49,48,95,116,97,103,115,116,114,0),true ], [String.fromCharCode(97,115,121,110,99,95,52,95,49,0),false ], [String.fromCharCode(97,99,99,101,115,115,111,114,95,57,95,54,55,0),true ]]);
      thumbnailT = [static_5l.length | 3];
      if (libswresamplen) {
         break;
      }
   } while ((!thumbnailT.includes(androidm)) && libswresamplen);
   while ((flipperg.length ^ 1) > 1 || 1 > (flipperg.length ^ loginU)) {
      flipperg.push(loginU ^ static_5l.length);
      break;
   }

    if (!comment) {

      thumbnailT.push(parseInt(`${bodanU}`) ^ 1);
      static_5l = `${(componentregistry5 == String.fromCharCode(55,0) ? componentregistry5.length : thumbnailT.length)}`;
      return;
    }

    console.log('user comment', comment);

      predictionbannersharedq += "1";
       let redscoreballw = 0.0;
       let fullV = String.fromCharCode(114,95,54,54,95,102,108,111,97,116,0);
       let phoneT = String.fromCharCode(104,95,56,49,95,104,107,100,102,0);
       let specK = String.fromCharCode(101,95,55,51,95,100,116,108,115,0);
      while (3 == (parseInt(`${redscoreballw}`) + phoneT.length) || (parseFloat(`${phoneT.length}`) + redscoreballw) == 2.29) {
          let libzeusi = String.fromCharCode(107,95,51,55,95,98,105,116,0);
          let philippinesO: Array<any> = [String.fromCharCode(101,95,49,52,95,100,105,103,101,115,116,98,121,110,105,100,0), String.fromCharCode(103,101,110,99,102,103,115,95,97,95,54,49,0)];
          let loadingspinnerF = false;
          let greytick8: Array<any> = [String.fromCharCode(122,95,57,57,95,100,112,114,105,110,116,0), String.fromCharCode(117,95,53,57,95,114,105,102,102,0), String.fromCharCode(109,95,56,56,95,101,120,116,101,114,110,97,108,108,121,0)];
         phoneT = `${(libzeusi == String.fromCharCode(85,0) ? philippinesO.length : libzeusi.length)}`;
         philippinesO = [1 & greytick8.length];
         loadingspinnerF = greytick8.length < 57;
         break;
      }
         redscoreballw += parseFloat(`${phoneT.length}`);
      while ((3 << (Math.min(3, specK.length))) > 2) {
         redscoreballw /= Math.max(parseFloat(`${fullV.length}`), 4);
         break;
      }
      if (specK == phoneT) {
          let acceptedi: Array<any> = [541, 360, 493];
          let arrowrightg: Array<any> = [String.fromCharCode(107,95,49,52,95,115,108,97,115,104,0), String.fromCharCode(105,95,49,48,95,109,105,108,108,105,115,0), String.fromCharCode(120,95,51,49,95,119,104,101,110,0)];
          let profileJ = String.fromCharCode(115,117,98,115,101,113,117,101,110,99,101,95,111,95,53,55,0);
         phoneT += `${fullV.length}`;
         acceptedi = [acceptedi.length ^ arrowrightg.length];
         arrowrightg.push(profileJ.length / (Math.max(10, acceptedi.length)));
         profileJ = `${acceptedi.length}`;
      }
         fullV += `${phoneT.length * 3}`;
      loginU >>= Math.min(Math.abs(1 & parseInt(`${bodanU}`)), 4);
    try {

       let frame_tu = String.fromCharCode(97,100,100,120,95,114,95,50,0);
       let matchdetailbgx = 4.0;
       let mbsplashk: Array<any> = [139, 474];
      let projectY = frame_tu.length >= 8447666;
      do {
         frame_tu += `${frame_tu.length >> (Math.min(5, Math.abs(parseInt(`${matchdetailbgx}`))))}`;
         if (projectY) {
            break;
         }
      } while (projectY && (!frame_tu.startsWith(`${mbsplashk.length}`)));
         matchdetailbgx += parseFloat(`${parseInt(`${matchdetailbgx}`) % (Math.max(3, 4))}`);
          let reviewM = String.fromCharCode(108,95,56,55,95,99,111,118,101,114,101,100,0);
          let update_4n = String.fromCharCode(112,114,111,100,117,99,116,95,102,95,50,49,0);
          let saveI: Map<any, any> = new Map([[String.fromCharCode(116,117,112,108,101,95,57,95,57,57,0),true ], [String.fromCharCode(120,95,53,54,95,100,105,115,112,108,97,121,0),false ], [String.fromCharCode(108,95,56,56,95,99,101,114,116,115,0),true ]]);
         frame_tu += `${(update_4n == String.fromCharCode(108,0) ? parseInt(`${matchdetailbgx}`) : update_4n.length)}`;
         reviewM = `${reviewM.length}`;
         saveI.set(reviewM, 2);
         matchdetailbgx += parseFloat(`${2}`);
       let iconeye8 = 5;
       let libreact3 = 1;
          let flyern: Array<any> = [807, 801, 941];
          let mbbidA = String.fromCharCode(117,95,50,56,95,99,111,109,109,117,110,105,99,97,116,111,114,0);
         frame_tu += `${flyern.length << (Math.min(2, Math.abs(parseInt(`${matchdetailbgx}`))))}`;
         flyern = [2 * mbbidA.length];
         mbbidA += `${mbbidA.length | 1}`;
      let wifirouterx = frame_tu == String.fromCharCode(99,57,101,57,111,53,52,54,109,0);
      do {
          let unselectedQ: Array<any> = [274, 80, 515];
          let iconnewssharel: Array<any> = [765, 445, 80];
          let iconwatch7: Array<any> = [735, 104];
         frame_tu += `${libreact3 & 3}`;
         unselectedQ.push(iconnewssharel.length ^ unselectedQ.length);
         iconnewssharel = [1];
         iconwatch7.push(iconnewssharel.length | iconwatch7.length);
         if (wifirouterx) {
            break;
         }
      } while (wifirouterx && (2 > (3 & frame_tu.length) && 4.51 > (matchdetailbgx + 5.85)));
          let notificationfilledE = 0.0;
          let dataq: Map<any, any> = new Map([[String.fromCharCode(102,105,110,97,108,105,122,101,114,95,119,95,52,48,0),710], [String.fromCharCode(111,114,100,101,114,95,50,95,53,50,0),50], [String.fromCharCode(104,101,116,97,95,116,95,55,49,0),174]]);
          let baidub = 1.0;
         mbsplashk = [2 - iconeye8];
         notificationfilledE *= parseFloat(`${1 & dataq.size}`);
         dataq.set(`${baidub}`, parseInt(`${baidub}`) >> (Math.min(Math.abs(dataq.size), 1)));
       let materialC: Map<any, any> = new Map([[String.fromCharCode(116,114,97,110,115,108,97,116,101,95,105,95,49,53,0),String.fromCharCode(108,111,111,112,105,110,103,95,104,95,53,50,0)], [String.fromCharCode(100,97,115,104,98,111,97,114,100,95,118,95,50,49,0),String.fromCharCode(105,110,105,116,118,95,51,95,52,54,0)], [String.fromCharCode(104,95,55,50,95,99,111,110,118,101,114,116,105,98,108,101,0),String.fromCharCode(101,110,100,120,95,104,95,53,52,0)]]);
       let whitevideolivea: Map<any, any> = new Map([[String.fromCharCode(115,95,51,57,95,112,101,114,115,105,115,116,101,110,116,0),354], [String.fromCharCode(97,95,49,49,95,114,101,97,100,111,110,108,121,0),901], [String.fromCharCode(97,95,49,51,95,100,117,114,105,110,103,0),248]]);
      androidm += 1 << (Math.min(4, eyeopenG.length));
       let subouto = String.fromCharCode(117,95,53,56,95,100,101,112,114,101,99,105,97,116,101,100,104,0);
       let greenarrowupg = String.fromCharCode(119,95,52,52,95,116,114,101,101,99,111,100,101,114,0);
      for (let q = 0; q < 3; q++) {
         greenarrowupg = `${(String.fromCharCode(112,0) == greenarrowupg ? subouto.length : greenarrowupg.length)}`;
      }
         greenarrowupg = `${3 << (Math.min(2, greenarrowupg.length))}`;
      let icontransferclubz = greenarrowupg.length >= 5663200;
      do {
          let libavutill = String.fromCharCode(121,95,51,50,95,119,101,108,108,0);
          let logouserP = String.fromCharCode(108,95,49,55,95,100,117,114,98,0);
          let guideV = 1.0;
          let attributedstringQ = true;
         greenarrowupg = `${logouserP.length}`;
         libavutill += `${parseInt(`${guideV}`) ^ 3}`;
         logouserP = `${parseInt(`${guideV}`) >> (Math.min(Math.abs(3), 1))}`;
         attributedstringQ = libavutill.length <= guideV;
         if (icontransferclubz) {
            break;
         }
      } while (icontransferclubz && (greenarrowupg != String.fromCharCode(118,0) && 1 > subouto.length));
          let const_hM = String.fromCharCode(105,110,116,102,105,95,102,95,50,52,0);
         subouto += `${greenarrowupg.length & 2}`;
         const_hM = `${const_hM.length / (Math.max(1, const_hM.length))}`;
         subouto += `${3 | greenarrowupg.length}`;
      let targetx = subouto == String.fromCharCode(107,57,109,55,120,48,57,119,0);
      do {
         subouto += `${(greenarrowupg == String.fromCharCode(97,0) ? subouto.length : greenarrowupg.length)}`;
         if (targetx) {
            break;
         }
      } while (targetx && (!greenarrowupg.endsWith(subouto)));
      bodanU *= eyeopenG.length << (Math.min(2, greenarrowupg.length));
      const existingComments = await getLocalComments();

   for (let k = 0; k < 1; k++) {
       let connectionF: Array<any> = [189, 126];
       let homeG: Array<any> = [69, 753, 250];
       let greytickZ = 5;
      let basketballhometeaml = homeG.length >= 9741302;
      do {
         homeG = [3 * connectionF.length];
         if (basketballhometeaml) {
            break;
         }
      } while (((4 - homeG.length) < 2 && 4 < (greytickZ - homeG.length)) && basketballhometeaml);
      for (let p = 0; p < 1; p++) {
         connectionF.push(connectionF.length * homeG.length);
      }
         homeG.push(greytickZ);
         homeG = [3];
         connectionF.push(homeG.length);
       let othermatchdetailbgP = 0.0;
         homeG = [1 / (Math.max(2, greytickZ))];
       let scheduleN = String.fromCharCode(119,95,55,95,109,111,110,116,104,0);
       let libmapbufferjnij = String.fromCharCode(105,95,53,53,95,97,112,112,114,111,120,105,109,97,116,101,0);
          let arrowrightn = String.fromCharCode(115,119,105,102,116,99,95,56,95,51,52,0);
          let firebaseI = String.fromCharCode(118,105,115,117,97,108,108,121,95,108,95,49,52,0);
         homeG = [1];
         arrowrightn = `${arrowrightn.length * 2}`;
         firebaseI = `${firebaseI.length ^ arrowrightn.length}`;
      suggestiong = !suggestiong;
   }
       let topons = 1;
       let bdxadsdke = 3.0;
       let privacyv = true;
      for (let d = 0; d < 1; d++) {
         privacyv = bdxadsdke == 85.48 || privacyv;
      }
      for (let t = 0; t < 3; t++) {
          let libsgcoreG = String.fromCharCode(98,117,108,108,101,116,115,95,49,95,55,49,0);
         bdxadsdke += 1;
         libsgcoreG += `${2 + libsgcoreG.length}`;
      }
       let orangeclock6 = 5;
         privacyv = privacyv && orangeclock6 <= 53;
      while (!privacyv) {
         privacyv = !privacyv || 21 > topons;
         break;
      }
       let type_x_Y: Array<any> = [791, 592];
       let bingr: Array<any> = [647, 684];
          let predictione = String.fromCharCode(103,95,50,49,95,108,105,110,101,115,105,122,101,0);
         privacyv = (43 > (predictione.length & (!privacyv ? predictione.length : 43)));
          let pinit__W = String.fromCharCode(120,95,56,48,95,99,97,114,101,116,0);
         privacyv = !privacyv && type_x_Y.length <= 77;
         pinit__W += `${(pinit__W == String.fromCharCode(120,0) ? pinit__W.length : pinit__W.length)}`;
       let giflivestreamingH = String.fromCharCode(100,101,115,99,95,100,95,55,48,0);
       let iconpipexpandL = String.fromCharCode(117,115,101,99,95,97,95,52,55,0);
      loginU /= Math.max(2, 4);
      const commmentObj = {
        douban_reviews_id: existingComments.length + 1,
        user_name: userState.user?.userName ?? '',
        user_review: comment,
      }
      existingComments.unshift(commmentObj);

      componentregistry5 += `${static_5l.length}`;
       let usernameS = 4;
       let downloaderp: Array<any> = [346, 596];
       let successZ = String.fromCharCode(112,114,111,120,121,95,120,95,56,52,0);
       let sigmobt: Array<any> = [String.fromCharCode(105,115,100,105,97,99,114,105,116,105,99,95,107,95,53,55,0), String.fromCharCode(103,95,50,51,95,114,116,99,119,101,98,0)];
       let lightp: Array<any> = [300, 249, 544];
          let orangedownarrow_: Map<any, any> = new Map([[String.fromCharCode(122,95,57,52,95,100,101,110,111,109,0),false ], [String.fromCharCode(110,95,49,55,95,121,117,121,116,111,121,118,0),true ], [String.fromCharCode(109,95,56,55,95,114,101,100,117,99,116,105,111,110,115,0),true ]]);
         downloaderp = [orangedownarrow_.size];
          let miniP: Array<any> = [547, 43, 920];
          let subinK: Array<any> = [993, 209, 509];
         sigmobt = [(successZ == String.fromCharCode(76,0) ? successZ.length : lightp.length)];
         miniP = [miniP.length / (Math.max(5, subinK.length))];
         subinK.push(subinK.length / 3);
      if (sigmobt.length == lightp.length) {
         lightp.push(usernameS | downloaderp.length);
      }
      while (2 == (successZ.length - 4)) {
         sigmobt.push(3);
         break;
      }
      let playlistP = sigmobt.length <= 4968192;
      do {
         sigmobt.push(sigmobt.length >> (Math.min(Math.abs(1), 2)));
         if (playlistP) {
            break;
         }
      } while (playlistP && (sigmobt.length > downloaderp.length));
       let viewsS = String.fromCharCode(98,107,116,114,95,97,95,51,55,0);
       let specn = String.fromCharCode(107,95,56,53,95,99,111,115,113,102,0);
      while (5 <= viewsS.length) {
         specn = `${successZ.length ^ lightp.length}`;
         break;
      }
      let iconclosewhitewithbgh = 8768387 >= lightp.length;
      do {
         lightp.push(1 / (Math.max(9, specn.length)));
         if (iconclosewhitewithbgh) {
            break;
         }
      } while (iconclosewhitewithbgh && ((lightp.length & 4) < 1 && 3 < (4 & successZ.length)));
      componentregistry5 += `${((suggestiong ? 1 : 5) | usernameS)}`;
      await AsyncStorage.setItem(locCommentId, JSON.stringify(existingComments));

      flipperg.push(loginU);
   if ((bodanU / 4.81) == 5.15 || (3 / (Math.max(10, parseInt(`${bodanU}`)))) == 3) {
       let libreactperfloggerjniU: Map<any, any> = new Map([[String.fromCharCode(120,95,50,53,95,121,111,117,114,0),26], [String.fromCharCode(106,95,56,53,95,97,100,115,0),914]]);
      for (let g = 0; g < 1; g++) {
         libreactperfloggerjniU.set(`${libreactperfloggerjniU.size}`, libreactperfloggerjniU.size);
      }
       let countdownI = false;
       let saveD = true;
         countdownI = libreactperfloggerjniU.size < 28;
      bodanU -= (String.fromCharCode(114,0) == static_5l ? static_5l.length : thumbnailT.length);
   }

      commentItems.unshift(commmentObj);

   if (3.3 == (3.5 + bodanU) || (bodanU + 3.5) == 2.35) {
      androidm -= ((suggestiong ? 4 : 3) / (Math.max(thumbnailT.length, 9)));
   }
      predictionbannersharedq = `${parseInt(`${androidm}`)}`;
      setIsUpdated(!isUpdated);

       let sourcey = String.fromCharCode(112,111,115,116,102,105,108,116,101,114,95,111,95,51,54,0);
       let yellowanimationliveI = 2;
         sourcey = `${sourcey.length}`;
      let reviewF = sourcey == String.fromCharCode(107,98,100,107,120,103,97,0);
      do {
         sourcey = "1";
         if (reviewF) {
            break;
         }
      } while (reviewF && ((sourcey.length >> (Math.min(Math.abs(4), 4))) == 5 && 4 == (sourcey.length >> (Math.min(2, Math.abs(yellowanimationliveI))))));
         sourcey = `${yellowanimationliveI ^ sourcey.length}`;
         sourcey += `${sourcey.length}`;
         yellowanimationliveI -= sourcey.length;
      while (sourcey.length >= 2) {
         yellowanimationliveI <<= Math.min(1, sourcey.length);
         break;
      }
      loginU &= predictionbannersharedq.length << (Math.min(Math.abs(3), 4));
   for (let a = 0; a < 1; a++) {
      androidm *= 2;
   }
      Keyboard.dismiss();

   if (2 == flipperg.length) {
      androidm += (parseInt(`${androidm}`) | (suggestiong ? 5 : 5));
   }
      suggestiong = 83 < flipperg.length;
      wawaNewarchdefaults.showToast("提交成功，我们将在24小时内进行审核！");

    } catch (error) {

   if (4 <= thumbnailT.length) {
       let readC = 2.0;
       let righty = 3.0;
       let rankN = false;
       let kick3 = String.fromCharCode(112,111,108,121,109,101,115,104,95,56,95,57,51,0);
          let bellreminder4 = 3.0;
          let downl = 2.0;
         righty *= (parseInt(`${bellreminder4}`) << (Math.min(5, Math.abs((rankN ? 2 : 3)))));
         bellreminder4 -= 3 | parseInt(`${downl}`);
         downl *= parseFloat(`${parseInt(`${downl}`) >> (Math.min(4, Math.abs(2)))}`);
          let anythink7 = String.fromCharCode(121,95,56,51,95,110,111,110,110,117,108,108,107,101,121,99,104,97,105,110,0);
         kick3 += `${kick3.length}`;
         anythink7 += `${(String.fromCharCode(75,0) == anythink7 ? anythink7.length : anythink7.length)}`;
      if ((righty - 1.50) <= 1.17) {
         righty *= parseInt(`${righty}`) % 3;
      }
         kick3 += `${1 >> (Math.min(Math.abs(parseInt(`${righty}`)), 4))}`;
       let inouttargetyellowK: Array<any> = [String.fromCharCode(108,95,57,52,95,112,111,119,101,114,0), String.fromCharCode(117,95,53,50,95,112,114,111,99,0)];
      let homeiconm = rankN ? !rankN : rankN;
      do {
          let reactnativejss = String.fromCharCode(119,95,52,50,95,110,97,116,105,111,110,97,108,105,116,121,0);
         rankN = (kick3.length - readC) >= 76.35;
         reactnativejss += `${reactnativejss.length}`;
         if (homeiconm) {
            break;
         }
      } while (homeiconm && (!kick3.startsWith(`${rankN}`)));
      for (let j = 0; j < 2; j++) {
         rankN = 78.47 <= readC;
      }
      if (3 <= kick3.length) {
         righty /= Math.max(inouttargetyellowK.length, 3);
      }
         rankN = (readC * kick3.length) > 71.42;
      for (let d = 0; d < 1; d++) {
         inouttargetyellowK.push(parseInt(`${righty}`) - parseInt(`${readC}`));
      }
          let darkF = String.fromCharCode(117,110,112,111,105,115,111,110,95,98,95,56,0);
          let shootnogoalT = String.fromCharCode(115,112,101,101,100,95,111,95,57,51,0);
         rankN = darkF.length < 6 || inouttargetyellowK.length < 6;
         darkF = "1";
         shootnogoalT += `${shootnogoalT.length}`;
         kick3 += `${kick3.length}`;
      eyeopenG += `${parseInt(`${righty}`)}`;
   }
      bodanU += 2 + thumbnailT.length;
      console.log("error when storing the comment into local storage: ", error);
    }
  };

  const renderItem = useCallback(
    ({ item, index }: { item: wawaMintegralLibmapbufferjni, index: number }) => {
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
              placeholder={wawaLibglog.isLogin(userState.user) ? "请评论" : "请登录才进行评论"}
              editable={wawaLibglog.isLogin(userState.user)}
              placeholderTextColor={colors.muted}
              value={comment}
              maxLength={200}
              blurOnSubmit
            />

            {wawaLibglog.isLogin(userState.user) ? (
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