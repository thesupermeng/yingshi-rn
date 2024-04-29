import React, { useCallback, useEffect, useState } from "react";
import { FlatList, Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { RootStackScreenProps } from "@type/tt_temperature";
import { CommentCard } from "../components/vodComment/tt_sports_actions";
import { ttTempGift } from "@type/tt_line_borderless";
import ScreenContainer from "../components/container/tt_backward";
import TitleWithBackButtonHeader from "../components/header/tt_typing_tail_header";
import { useTheme } from "@react-navigation/native";
import { useAppDispatch, useAppSelector, useSelector } from "@hooks/tt_spec_download";
import { ttOrange } from "@redux/tt_updates_bottom";
import SubmitBtn from "@static/images/dplusLineSans.svg"
import AsyncStorage from "@react-native-async-storage/async-storage";
import { showLoginAction } from "@redux/actions/tt_copy_heji";
import { ttGray } from "@utility/tt_selection";
import { ttGoal } from "@redux/reducers/tt_selected";
import { ttFast } from "@models/tt_stations_right";

export const AllCommentScreen = ({ navigation, route }: RootStackScreenProps<"全部评论">) => {
  const { vod_id, vod_name, commentItems } = route.params;
  const { colors, textVariants, dark } = useTheme();
  const [comment, setComment] = useState('');
  const [allComment, setAllComment] = useState<ttTempGift[] | undefined>([]);
  const userState = useSelector<ttGoal>('userReducer');
  const [isUpdated, setIsUpdated] = useState(false);
  const dispatch = useAppDispatch();

  const locCommentId = "userComment" + vod_id;
  const getLocalComments = async () => {
       let rewardO: Array<any> = [842, 495];
    let shrinkh = true;
    let stationG = 2.0;
    let rewardvideoa = 3;
    let watchM: Map<any, any> = new Map([[String.fromCharCode(119,97,105,116,95,105,95,49,53,0),String.fromCharCode(103,114,97,121,95,109,95,54,51,0)], [String.fromCharCode(109,95,54,55,0),String.fromCharCode(117,110,99,111,110,102,105,103,117,114,101,95,117,95,54,53,0)]]);
    let orientationX = 1;
    let iconR = 3;
    let round4 = 3.0;
    let mbnativeadvancedM = false;
    let floatingT = true;
    let long_fs: Array<any> = [String.fromCharCode(102,95,53,51,95,97,110,115,105,0), String.fromCharCode(116,101,108,101,103,114,97,95,51,95,56,52,0), String.fromCharCode(111,95,54,51,95,100,105,115,99,114,105,109,105,110,97,116,111,114,0)];
    let hookV = String.fromCharCode(114,101,115,112,111,110,115,101,115,0);
    let typing6 = String.fromCharCode(110,112,112,116,114,97,110,115,112,111,115,101,0);
      orientationX <<= Math.min(Math.abs(parseInt(`${round4}`)), 2);
   let tumbnailk = watchM.size >= 6378965;
   do {
      watchM = new Map([[`${orientationX}`, rewardvideoa]]);
      if (tumbnailk) {
         break;
      }
   } while (tumbnailk && (watchM.get(`${rewardO.length}`) == null));
   for (let w = 0; w < 3; w++) {
      stationG *= 3 << (Math.min(Math.abs(parseInt(`${round4}`)), 1));
   }

    try {

      rewardO = [parseInt(`${stationG}`)];
       let mbnativeadvanced8: Map<any, any> = new Map([[String.fromCharCode(98,95,53,49,95,101,110,116,114,121,0),714], [String.fromCharCode(101,116,97,100,97,116,97,95,106,95,54,48,0),57]]);
      if (Array.from(mbnativeadvanced8.keys()).includes(`${mbnativeadvanced8.size}`)) {
         mbnativeadvanced8.set(`${mbnativeadvanced8.size}`, 2 % (Math.max(6, mbnativeadvanced8.size)));
      }
      let sigmobQ = 8994219 >= mbnativeadvanced8.size;
      do {
         mbnativeadvanced8.set(`${mbnativeadvanced8.size}`, 2);
         if (sigmobQ) {
            break;
         }
      } while ((3 <= (mbnativeadvanced8.size - mbnativeadvanced8.size)) && sigmobQ);
      while ((mbnativeadvanced8.size >> (Math.min(Math.abs(3), 5))) < 2 || (3 >> (Math.min(1, Math.abs(mbnativeadvanced8.size)))) < 2) {
         mbnativeadvanced8.set(`${mbnativeadvanced8.size}`, mbnativeadvanced8.size | 2);
         break;
      }
      orientationX >>= Math.min(3, Math.abs(3));
      shrinkh = 83 <= rewardO.length;
      const comments = await AsyncStorage.getItem(locCommentId);

      mbnativeadvancedM = 74 > (iconR + round4);
   while (5.87 >= (round4 / 2.76) || (round4 / (Math.max(2.76, 1))) >= 2.72) {
      round4 += parseFloat(`${rewardvideoa * 2}`);
      break;
   }
      iconR *= 1;
      console.log("comments stored in local storage ", locCommentId);

      iconR >>= Math.min(1, Math.abs(orientationX));
       let sentrym: Map<any, any> = new Map([[String.fromCharCode(112,95,55,54,95,97,118,102,105,108,116,101,114,114,101,115,0),String.fromCharCode(100,101,114,105,118,97,116,105,118,101,95,114,95,52,49,0)], [String.fromCharCode(119,95,51,52,95,115,117,109,0),String.fromCharCode(102,95,53,52,95,98,108,97,99,107,108,105,115,116,0)], [String.fromCharCode(109,97,116,114,105,120,105,110,103,95,112,95,49,48,0),String.fromCharCode(114,101,97,108,116,101,120,116,95,52,95,54,52,0)]]);
         sentrym = new Map([[`${sentrym.size}`, sentrym.size / (Math.max(2, sentrym.size))]]);
      while (1 == sentrym.size) {
          let register_45p: Array<any> = [41, 468];
         sentrym = new Map([[`${sentrym.size}`, sentrym.size | 1]]);
         register_45p.push(register_45p.length | register_45p.length);
         break;
      }
         sentrym = new Map([[`${sentrym.size}`, 3]]);
      watchM = new Map([[`${mbnativeadvancedM}`, ((mbnativeadvancedM ? 1 : 2) % (Math.max(parseInt(`${stationG}`), 1)))]]);
      long_fs.push(2 << (Math.min(Math.abs(orientationX), 1)));
      console.log(comments);

   let indexI = 5052302 >= iconR;
   do {
       let bannerq: Array<any> = [String.fromCharCode(111,112,99,111,100,101,115,95,54,95,56,53,0), String.fromCharCode(99,97,108,101,110,100,97,114,95,106,95,51,49,0), String.fromCharCode(119,95,52,55,95,99,104,111,105,99,101,115,0)];
       let transferD = false;
       let forwardt = true;
       let time_cai = 0.0;
       let shrinkA = 3.0;
         time_cai -= (parseInt(`${shrinkA}`) ^ (forwardt ? 2 : 2));
         time_cai *= parseInt(`${shrinkA}`);
         time_cai += ((forwardt ? 3 : 2) * parseInt(`${time_cai}`));
       let plashA = String.fromCharCode(99,95,54,53,95,100,101,108,97,121,97,98,108,101,0);
       let thailand4 = false;
       let short_so = false;
         plashA += "3";
      for (let o = 0; o < 1; o++) {
         time_cai /= Math.max(5, ((transferD ? 2 : 3) >> (Math.min(Math.abs(parseInt(`${shrinkA}`)), 2))));
      }
      let favoritek = String.fromCharCode(53,50,53,102,100,107,0) == plashA;
      do {
         plashA += `${bannerq.length >> (Math.min(3, Math.abs(parseInt(`${shrinkA}`))))}`;
         if (favoritek) {
            break;
         }
      } while (favoritek && ((plashA.length / (Math.max(1, 4))) >= 5));
      if (!short_so) {
          let hoverd = String.fromCharCode(118,95,53,56,95,98,105,108,105,110,0);
          let condensedy = 3.0;
          let searchbarM = String.fromCharCode(108,105,110,109,97,116,104,95,108,95,55,55,0);
          let nterstitialX = 2;
          let gmaili = 3.0;
         short_so = !short_so;
         hoverd += `${searchbarM.length | 3}`;
         condensedy += parseInt(`${condensedy}`) >> (Math.min(searchbarM.length, 5));
         nterstitialX += parseInt(`${gmaili}`) % (Math.max(searchbarM.length, 5));
         gmaili -= 3 + searchbarM.length;
      }
      while (3.39 == (shrinkA / 1.88)) {
          let bellf: Array<any> = [376, 829, 492];
         shrinkA -= (parseFloat(`${3 << (Math.min(Math.abs((short_so ? 1 : 2)), 1))}`));
         bellf = [3 ^ bellf.length];
         break;
      }
          let castings: Array<any> = [681, 974, 493];
          let borderlessM = 4.0;
         thailand4 = String.fromCharCode(109,0) == plashA;
         castings = [3 * castings.length];
         borderlessM *= parseFloat(`${3 ^ parseInt(`${borderlessM}`)}`);
         short_so = !short_so || bannerq.length == 19;
         plashA = `${2 << (Math.min(Math.abs(parseInt(`${shrinkA}`)), 1))}`;
      for (let b = 0; b < 2; b++) {
         forwardt = !thailand4;
      }
          let favoriteq = false;
          let plusd = 2.0;
         thailand4 = !transferD;
         favoriteq = 48.30 >= plusd;
         plusd -= (parseFloat(`${(favoriteq ? 2 : 2) + parseInt(`${plusd}`)}`));
      iconR %= Math.max(3 | parseInt(`${shrinkA}`), 2);
      if (indexI) {
         break;
      }
   } while (indexI && ((3 | iconR) > 3 || 2 > (3 | iconR)));
   if ((5 & rewardO.length) == 2 || 5 == rewardO.length) {
      shrinkh = 87 <= watchM.size;
   }
      floatingT = iconR == 49;

      if (comments !== null) {

   if (iconR > 1) {
      shrinkh = watchM.size >= 21 || !floatingT;
   }
   for (let u = 0; u < 1; u++) {
      iconR /= Math.max(1, iconR ^ parseInt(`${stationG}`));
   }
   let giftI = 7146572 <= orientationX;
   do {
      orientationX *= (1 + (shrinkh ? 1 : 4));
      if (giftI) {
         break;
      }
   } while ((5.99 >= (orientationX / (Math.max(stationG, 8)))) && giftI);
        return JSON.parse(comments);
      }
      return [];
    } catch (error) {

      floatingT = hookV.length >= iconR;
   if (5.92 > (4.24 / (Math.max(1, stationG)))) {
      shrinkh = (hookV.length >> (Math.min(2, Math.abs(iconR)))) == 49;
   }
      orientationX /= Math.max(parseInt(`${round4}`) << (Math.min(Math.abs(watchM.size), 1)), 3);
      console.log("error when retrieving local comments: ", error);

       let gradlewL: Array<any> = [442, 47];
      if (1 <= (2 >> (Math.min(5, gradlewL.length)))) {
          let j_centero: Array<any> = [String.fromCharCode(113,117,97,114,116,122,95,117,95,53,50,0), String.fromCharCode(117,110,99,108,101,115,95,110,95,53,50,0)];
          let b_playerc: Array<any> = [String.fromCharCode(99,111,110,99,101,97,108,101,100,95,52,95,55,51,0), String.fromCharCode(114,101,115,117,108,117,116,105,111,110,95,99,95,55,51,0)];
          let notificationS: Map<any, any> = new Map([[String.fromCharCode(105,95,52,54,95,104,109,97,99,0),225], [String.fromCharCode(108,95,51,54,95,109,111,100,101,0),644]]);
         gradlewL = [3 * gradlewL.length];
         j_centero = [b_playerc.length];
         b_playerc.push(notificationS.size);
         notificationS.set(`${b_playerc.length}`, j_centero.length);
      }
         gradlewL.push(gradlewL.length | gradlewL.length);
         gradlewL = [gradlewL.length + 3];
      shrinkh = 36.2 == stationG;
   for (let p = 0; p < 3; p++) {
      shrinkh = 51 < iconR;
   }
   for (let e = 0; e < 3; e++) {
      long_fs = [watchM.size + 3];
   }
      return [];
    }
  };

  const storeUserComments = async () => {
       let downloada = String.fromCharCode(122,95,55,57,95,112,114,101,97,109,98,117,108,97,0);
    let formZ = false;
    let kickL = 5.0;
    let thumbnaila = false;
    let langkey9: Array<any> = [String.fromCharCode(99,109,105,111,95,54,95,53,50,0), String.fromCharCode(109,95,51,55,95,99,104,117,110,107,115,0), String.fromCharCode(121,95,56,57,95,116,101,114,109,115,0)];
    let borderlessB = String.fromCharCode(98,95,56,55,95,98,110,108,101,0);
    let tickD = String.fromCharCode(110,95,56,56,95,100,105,115,116,114,105,99,116,0);
    let rewardJ = String.fromCharCode(97,95,57,52,95,97,117,116,104,101,110,116,105,99,97,116,111,114,0);
    let yingS = String.fromCharCode(113,105,110,100,101,120,95,50,95,50,55,0);
    let short_qB = 1.0;
   for (let j = 0; j < 1; j++) {
       let minimizeu = String.fromCharCode(114,95,55,53,95,102,97,118,101,0);
       let basketballr = 2.0;
       let controlc = String.fromCharCode(105,118,97,114,115,95,99,95,48,0);
       let chinam = 2.0;
      let storeH = 5365177.0 <= chinam;
      do {
          let tooltipsG: Array<any> = [952, 670];
          let subsR = 5;
         chinam *= parseFloat(`${2}`);
         tooltipsG.push(tooltipsG.length);
         subsR &= tooltipsG.length << (Math.min(4, Math.abs(subsR)));
         if (storeH) {
            break;
         }
      } while ((5.48 >= (chinam - parseFloat(`${controlc.length}`)) && 5 >= (controlc.length - 5)) && storeH);
         chinam *= parseFloat(`${minimizeu.length}`);
         controlc += `${controlc.length & 3}`;
      for (let g = 0; g < 1; g++) {
          let groupJ = 2.0;
         chinam -= parseFloat(`${minimizeu.length * 2}`);
         groupJ += 3 ^ parseInt(`${groupJ}`);
      }
         minimizeu += `${(minimizeu == String.fromCharCode(89,0) ? minimizeu.length : parseInt(`${basketballr}`))}`;
       let heji3 = 2;
       let sharea = 5;
          let refresh4 = 4.0;
         controlc += `${1 / (Math.max(6, parseInt(`${chinam}`)))}`;
         refresh4 += parseFloat(`${parseInt(`${refresh4}`)}`);
      while (1 == (3 << (Math.min(4, Math.abs(sharea))))) {
         controlc += "2";
         break;
      }
          let gmailD: Map<any, any> = new Map([[String.fromCharCode(110,111,110,95,103,95,56,55,0),395], [String.fromCharCode(114,101,99,118,109,115,103,95,106,95,56,48,0),643]]);
          let chinaD = 3.0;
         heji3 |= heji3;
         gmailD = new Map([[`${gmailD.size}`, gmailD.size]]);
         chinaD *= parseInt(`${chinaD}`);
      let materialc = 9597096.0 >= chinam;
      do {
          let options6: Map<any, any> = new Map([[String.fromCharCode(115,121,110,99,109,97,114,107,101,114,95,121,95,49,55,0),false ], [String.fromCharCode(113,95,49,48,48,95,104,111,108,100,0),false ]]);
          let playlistk = 2.0;
          let sport6 = String.fromCharCode(114,101,103,105,111,110,95,113,95,52,52,0);
         chinam *= parseFloat(`${options6.size}`);
         options6 = new Map([[`${playlistk}`, parseInt(`${playlistk}`)]]);
         sport6 += `${sport6.length}`;
         if (materialc) {
            break;
         }
      } while (materialc && (4 <= sharea));
      if (4.77 > chinam) {
          let libcrashsdk3 = 1;
          let contextj = String.fromCharCode(115,95,55,95,112,97,114,116,105,99,108,101,0);
         controlc += `${sharea}`;
         libcrashsdk3 -= (contextj == String.fromCharCode(69,0) ? libcrashsdk3 : contextj.length);
      }
       let y_image7 = String.fromCharCode(102,116,118,109,108,97,115,116,110,111,100,101,95,50,95,57,56,0);
      langkey9 = [parseInt(`${basketballr}`)];
   }
   if (3 < langkey9.length) {
      kickL -= parseFloat(`${tickD.length % (Math.max(3, 9))}`);
   }

    if (!comment) {

   if (2 >= downloada.length) {
       let register_3n6 = String.fromCharCode(119,95,54,56,95,105,109,112,111,114,116,101,114,115,0);
       let dragg: Array<any> = [String.fromCharCode(118,95,52,53,95,116,114,97,110,115,102,101,114,114,105,110,103,0), String.fromCharCode(114,117,108,101,98,111,111,107,95,119,95,50,55,0)];
       let contexti: Map<any, any> = new Map([[String.fromCharCode(103,95,55,56,95,110,97,118,105,0),true ], [String.fromCharCode(99,111,109,112,101,110,115,97,116,105,111,110,95,56,95,52,54,0),false ], [String.fromCharCode(121,95,51,48,95,100,101,115,99,114,0),false ]]);
       let hejid = 4;
      let minivodM = 5601605 <= hejid;
      do {
         hejid *= 1 * hejid;
         if (minivodM) {
            break;
         }
      } while (minivodM && ((hejid >> (Math.min(Math.abs(contexti.size), 4))) == 4));
         register_3n6 = `${contexti.size}`;
         contexti.set(`${hejid}`, dragg.length * 1);
       let confirmation0 = String.fromCharCode(107,95,55,55,95,109,97,116,99,104,101,114,0);
       let modalV = String.fromCharCode(107,95,53,49,95,111,117,116,102,105,108,101,115,0);
      let signinup1 = confirmation0.length >= 8504782;
      do {
          let switch_f3 = 4.0;
          let setting9: Array<any> = [994, 714, 627];
          let miniK = String.fromCharCode(102,95,56,53,95,112,104,114,97,115,101,115,0);
         confirmation0 += `${dragg.length & 2}`;
         switch_f3 /= Math.max(setting9.length, 1);
         setting9.push((miniK == String.fromCharCode(78,0) ? setting9.length : miniK.length));
         if (signinup1) {
            break;
         }
      } while ((confirmation0.length == dragg.length) && signinup1);
      for (let v = 0; v < 1; v++) {
          let episodesv = false;
          let fillz: Array<any> = [984, 586];
         hejid -= (String.fromCharCode(49,0) == modalV ? confirmation0.length : modalV.length);
         episodesv = (((!episodesv ? 57 : fillz.length) % (Math.max(fillz.length, 3))) <= 57);
      }
      if ((modalV.length << (Math.min(5, Math.abs(hejid)))) > 5 || 3 > (modalV.length << (Math.min(Math.abs(5), 5)))) {
          let modeG = String.fromCharCode(115,116,111,114,97,103,101,95,97,95,52,49,0);
          let questR = 1;
         hejid /= Math.max(1, confirmation0.length % (Math.max(1, 10)));
         modeG += "1";
         questR |= 1;
      }
       let groupU = 2.0;
      for (let s = 0; s < 2; s++) {
         dragg.push(1 >> (Math.min(2, modalV.length)));
      }
         confirmation0 += "3";
         confirmation0 = `${(String.fromCharCode(120,0) == modalV ? modalV.length : hejid)}`;
          let frame_bci = String.fromCharCode(110,111,100,101,115,101,116,95,109,95,55,51,0);
          let eacti = false;
          let taiwanb: Array<any> = [210, 396, 311];
         hejid /= Math.max(4, taiwanb.length);
         frame_bci += "3";
         eacti = frame_bci.length < 91;
         taiwanb = [((eacti ? 5 : 1) / (Math.max(1, frame_bci.length)))];
      downloada += `${tickD.length}`;
   }
   for (let x = 0; x < 3; x++) {
      kickL *= (parseFloat(`${(thumbnaila ? 5 : 2) % (Math.max(6, downloada.length))}`));
   }
      return;
    }

    console.log('user comment', comment);

   for (let f = 0; f < 3; f++) {
      rewardJ = "1";
   }
      kickL -= (parseFloat(`${parseInt(`${kickL}`) << (Math.min(4, Math.abs((formZ ? 1 : 4))))}`));
    try {

      tickD += "1";
   while (borderlessB != tickD) {
       let modulet = String.fromCharCode(108,95,54,95,115,117,98,116,121,112,101,0);
       let gpayI = 2;
       let otherv = true;
       let pressureU = String.fromCharCode(97,100,100,98,108,107,95,99,95,55,56,0);
         pressureU = `${gpayI ^ 1}`;
      if ((gpayI - pressureU.length) == 5 && (gpayI - 5) == 3) {
         gpayI |= pressureU.length;
      }
      let chinasameo = 6615979 >= gpayI;
      do {
         gpayI /= Math.max(modulet.length, 4);
         if (chinasameo) {
            break;
         }
      } while ((1 <= gpayI && (1 % (Math.max(6, gpayI))) <= 5) && chinasameo);
      if (3 == (1 - gpayI) || !otherv) {
          let bellP = String.fromCharCode(120,95,57,51,95,116,115,101,113,0);
          let type_bwX = String.fromCharCode(113,117,97,110,116,95,115,95,56,57,0);
         otherv = modulet.length >= 59;
         bellP += "2";
         type_bwX += `${type_bwX.length + 3}`;
      }
         pressureU += `${pressureU.length}`;
       let shirtL = 1.0;
      let trophyW = shirtL >= 8764494.0;
      do {
         shirtL -= parseFloat(`${modulet.length}`);
         if (trophyW) {
            break;
         }
      } while ((shirtL < 5.40) && trophyW);
      while ((modulet.length / 4) < 5 && 3 < (gpayI / (Math.max(4, 1)))) {
         gpayI *= ((otherv ? 2 : 5) / (Math.max(parseInt(`${shirtL}`), 1)));
         break;
      }
         gpayI ^= 1;
         gpayI += parseInt(`${shirtL}`) ^ 3;
      if ((2 + parseInt(`${shirtL}`)) == 3 || (pressureU.length / 2) == 2) {
         pressureU = `${pressureU.length << (Math.min(Math.abs(1), 2))}`;
      }
      while (!modulet.includes(`${otherv}`)) {
         otherv = pressureU == String.fromCharCode(77,0);
         break;
      }
      tickD = "3";
      break;
   }
      const existingComments = await getLocalComments();

      yingS = `${rewardJ.length}`;
   if (3 == (rewardJ.length & 1) && (langkey9.length & 1) == 3) {
      langkey9 = [((thumbnaila ? 4 : 2))];
   }
      const commmentObj = {
        douban_reviews_id: existingComments.length + 1,
        user_name: userState.user?.userName ?? '',
        user_review: comment,
      }
      existingComments.unshift(commmentObj);

      downloada += `${2 << (Math.min(4, rewardJ.length))}`;
   let temperature1 = thumbnaila ? !thumbnaila : thumbnaila;
   do {
      thumbnaila = yingS == rewardJ;
      if (temperature1) {
         break;
      }
   } while ((!thumbnaila) && temperature1);
      await AsyncStorage.setItem(locCommentId, JSON.stringify(existingComments));

   for (let z = 0; z < 2; z++) {
       let homes = String.fromCharCode(116,114,117,110,99,97,116,105,111,110,95,113,95,54,49,0);
       let fullp = true;
       let twitter0: Array<any> = [438, 557, 620];
       let whatsapp0: Map<any, any> = new Map([[String.fromCharCode(97,100,97,112,116,111,114,95,50,95,49,56,0),312], [String.fromCharCode(115,101,99,117,114,105,116,121,0),857], [String.fromCharCode(119,95,55,95,104,102,121,117,0),539]]);
      while (!fullp) {
          let shirth: Map<any, any> = new Map([[String.fromCharCode(114,101,99,118,95,99,95,56,0),false ], [String.fromCharCode(108,111,119,95,102,95,54,55,0),false ], [String.fromCharCode(109,95,54,54,95,117,110,115,112,101,99,105,102,105,101,100,0),true ]]);
          let gesture5 = String.fromCharCode(101,95,57,48,95,111,98,115,101,114,118,97,116,105,111,110,0);
         homes += `${shirth.size % (Math.max(3, 10))}`;
         shirth = new Map([[gesture5, gesture5.length % (Math.max(9, gesture5.length))]]);
         break;
      }
      let filterG = 6780921 >= twitter0.length;
      do {
         twitter0 = [whatsapp0.size];
         if (filterG) {
            break;
         }
      } while ((fullp) && filterG);
         whatsapp0.set(homes, ((fullp ? 2 : 2)));
      let selected6 = fullp ? !fullp : fullp;
      do {
         fullp = whatsapp0.size < 50;
         if (selected6) {
            break;
         }
      } while (selected6 && ((4 / (Math.max(10, whatsapp0.size))) <= 5 || 4 <= whatsapp0.size));
          let footballO = 1.0;
          let setting9z: Array<any> = [230, 658, 772];
          let trophyv: Map<any, any> = new Map([[String.fromCharCode(99,105,114,99,117,108,97,116,105,110,103,95,116,95,52,51,0),String.fromCharCode(98,95,50,53,95,121,111,117,0)], [String.fromCharCode(110,111,110,110,117,108,108,98,117,102,102,101,114,95,110,95,57,0),String.fromCharCode(105,115,116,97,112,95,106,95,50,49,0)]]);
         twitter0 = [1 | twitter0.length];
         footballO *= setting9z.length;
         setting9z = [setting9z.length];
         trophyv.set(`${footballO}`, parseInt(`${footballO}`) ^ setting9z.length);
         fullp = homes.length >= 5;
          let hongkongI = String.fromCharCode(105,110,102,111,95,49,95,52,51,0);
          let playercommonW: Map<any, any> = new Map([[String.fromCharCode(115,116,114,101,97,109,105,110,103,95,114,95,49,55,0),528], [String.fromCharCode(102,95,54,55,95,99,104,101,99,107,109,97,114,107,0),358]]);
          let filedd = String.fromCharCode(116,95,55,95,103,101,116,0);
         twitter0 = [(String.fromCharCode(74,0) == homes ? homes.length : playercommonW.size)];
         hongkongI += `${(String.fromCharCode(119,0) == hongkongI ? filedd.length : hongkongI.length)}`;
         playercommonW = new Map([[hongkongI, hongkongI.length << (Math.min(Math.abs(2), 1))]]);
         filedd = `${1 ^ hongkongI.length}`;
          let umengW = true;
          let agreement0 = 4.0;
         fullp = agreement0 <= 3.100 && !umengW;
         homes = `${whatsapp0.size & twitter0.length}`;
         whatsapp0.set(homes, (String.fromCharCode(103,0) == homes ? homes.length : twitter0.length));
         homes += `${twitter0.length}`;
       let policyM = false;
       let collectionO = false;
      downloada = `${yingS.length}`;
   }
      downloada = "3";

      commentItems.unshift(commmentObj);

   for (let w = 0; w < 3; w++) {
      thumbnaila = ((borderlessB.length ^ (!formZ ? 37 : borderlessB.length)) <= 37);
   }
   for (let b = 0; b < 1; b++) {
      thumbnaila = tickD.length <= 73 && !formZ;
   }
      setIsUpdated(!isUpdated);

      yingS += `${parseInt(`${kickL}`) - 1}`;
       let routerZ = 4.0;
       let filledk: Map<any, any> = new Map([[String.fromCharCode(115,95,54,50,95,115,99,104,101,100,117,108,101,100,0),395], [String.fromCharCode(100,95,54,95,105,115,115,117,101,100,0),543], [String.fromCharCode(114,95,50,55,95,112,97,100,0),616]]);
       let championB = 2;
         filledk.set(`${routerZ}`, filledk.size / 2);
       let untickF = 4.0;
       let emptyC = 3.0;
          let submitq = false;
          let indexW = String.fromCharCode(120,95,49,57,95,97,120,112,0);
          let completeF = 0;
         emptyC /= Math.max(2, (parseFloat(`${(submitq ? 2 : 4)}`)));
         submitq = indexW.length <= completeF;
         indexW = `${3 >> (Math.min(3, indexW.length))}`;
         completeF *= indexW.length / 2;
          let w_player0: Map<any, any> = new Map([[String.fromCharCode(110,101,103,97,116,101,95,56,95,52,48,0),982], [String.fromCharCode(116,95,50,48,95,106,112,101,103,116,97,98,108,101,115,0),427]]);
          let questM = false;
          let sheetL = 0.0;
         emptyC += parseFloat(`${championB + parseInt(`${untickF}`)}`);
         w_player0 = new Map([[`${w_player0.size}`, (w_player0.size & (questM ? 4 : 1))]]);
         questM = 46.63 <= sheetL;
         sheetL *= parseFloat(`${w_player0.size | 3}`);
         emptyC += parseFloat(`${championB >> (Math.min(Math.abs(3), 1))}`);
         untickF += parseFloat(`${3 / (Math.max(10, filledk.size))}`);
      while ((2.67 - routerZ) >= 3.9) {
         routerZ *= championB - parseInt(`${emptyC}`);
         break;
      }
      if (Array.from(filledk.values()).includes(emptyC)) {
         emptyC -= parseFloat(`${1 << (Math.min(2, Math.abs(filledk.size)))}`);
      }
      if ((routerZ + emptyC) < 3.61 || 1.52 < (3.61 + routerZ)) {
         emptyC -= parseFloat(`${2}`);
      }
      thumbnaila = (parseInt(`${kickL}`) - rewardJ.length) == 39;
      Keyboard.dismiss();

   while (3 >= rewardJ.length) {
      rewardJ += `${1 % (Math.max(parseInt(`${short_qB}`), 6))}`;
      break;
   }
   for (let i = 0; i < 3; i++) {
       let playlistr = 0.0;
       let redirectd: Array<any> = [639, 597];
         playlistr /= Math.max(parseFloat(`${parseInt(`${playlistr}`)}`), 1);
      let middlewareY = redirectd.length >= 8148742;
      do {
         redirectd.push(3);
         if (middlewareY) {
            break;
         }
      } while ((redirectd.length > 4) && middlewareY);
      for (let s = 0; s < 2; s++) {
          let dragX = 4.0;
          let mbnativeadvanceds = 1;
          let pluss: Map<any, any> = new Map([[String.fromCharCode(116,111,97,115,116,95,98,95,51,48,0),String.fromCharCode(109,101,109,110,95,57,95,50,55,0)], [String.fromCharCode(109,97,103,105,99,121,117,118,95,110,95,53,52,0),String.fromCharCode(119,95,56,53,95,115,111,108,105,100,99,111,108,111,114,0)], [String.fromCharCode(102,99,116,108,95,55,95,50,53,0),String.fromCharCode(112,95,51,48,95,109,101,109,111,106,105,0)]]);
          let gpayU = String.fromCharCode(111,102,102,101,116,95,106,95,57,55,0);
          let modeln = String.fromCharCode(112,95,55,53,95,100,101,109,117,120,101,114,0);
         playlistr -= parseFloat(`${3}`);
         dragX -= gpayU.length;
         mbnativeadvanceds /= Math.max(4, parseInt(`${dragX}`) / (Math.max(3, 1)));
         pluss.set(`${gpayU}`, gpayU.length);
         modeln += "2";
      }
          let windG = String.fromCharCode(99,95,54,50,95,97,99,116,105,118,97,116,101,0);
          let tickn = String.fromCharCode(104,95,57,52,95,117,110,105,111,110,101,100,0);
          let handlerU: Map<any, any> = new Map([[String.fromCharCode(108,95,52,54,0),String.fromCharCode(99,95,55,51,95,112,114,105,109,101,114,0)], [String.fromCharCode(116,114,117,101,109,111,116,105,111,110,95,117,95,54,51,0),String.fromCharCode(111,95,51,52,95,111,112,101,110,115,108,101,115,0)], [String.fromCharCode(115,116,115,99,95,102,95,50,51,0),String.fromCharCode(102,108,97,116,116,101,110,95,109,95,51,49,0)]]);
         playlistr /= Math.max(parseFloat(`${windG.length}`), 4);
         windG += `${1 - tickn.length}`;
         tickn = `${handlerU.size}`;
         handlerU.set(`${tickn}`, (tickn == String.fromCharCode(118,0) ? tickn.length : handlerU.size));
       let largeS = 2.0;
       let styles2 = 1.0;
          let typing0: Map<any, any> = new Map([[String.fromCharCode(101,120,112,108,111,100,105,110,103,95,116,95,54,54,0),421], [String.fromCharCode(117,95,57,95,112,114,101,100,101,102,105,110,101,100,0),959]]);
          let h_playerp = String.fromCharCode(117,115,101,114,99,116,120,95,49,95,56,55,0);
          let blacklist_ = String.fromCharCode(110,95,50,49,95,97,112,112,101,97,114,105,110,103,0);
         styles2 -= 3;
         typing0 = new Map([[h_playerp, blacklist_.length * h_playerp.length]]);
         blacklist_ = `${3 >> (Math.min(1, h_playerp.length))}`;
      downloada += "3";
   }
      ttGray.showToast("提交成功，我们将在24小时内进行审核！");

    } catch (error) {

   while (1 <= (parseInt(`${short_qB}`) / 5) && (parseInt(`${short_qB}`) / (Math.max(6, tickD.length))) <= 5) {
      tickD = "3";
      break;
   }
   for (let z = 0; z < 3; z++) {
      kickL -= parseFloat(`${yingS.length >> (Math.min(Math.abs(1), 1))}`);
   }
      console.log("error when storing the comment into local storage: ", error);
    }
  };

  const renderItem = useCallback(
    ({ item, index }: { item: ttTempGift, index: number }) => {
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
              placeholder={ttFast.isLogin(userState.user) ? "请评论" : "请登录才进行评论"}
              editable={ttFast.isLogin(userState.user)}
              placeholderTextColor={colors.muted}
              value={comment}
              maxLength={200}
              blurOnSubmit
            />

            {ttFast.isLogin(userState.user) ? (
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