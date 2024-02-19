import React, { useCallback, useEffect, useState, memo } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  RefreshControl,
  Platform,
} from "react-native";
import { useTheme, useFocusEffect } from "@react-navigation/native";
import { useAppDispatch, useAppSelector, useSelector } from "@hooks";
import { yysIconclosewhiteBaiduads } from "@redux";
import ShowMoreButton from "../../components/button/yys_gradle_dice_button";

import {
  CollectionSvg,
  HistorySvg,
  FeedbackSvg,
  SettingsSvg,
  InfoSvg,
  ProfileSvg,
  MoreArrowSvg,
  VipIconSvg,
  VipArrowSvg,
  AddSvg,
  EditSvg,
} from "@static";

import { useNavigation } from "@react-navigation/native";

import Orientation from "react-native-orientation-locker";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";

import {
  hideBottomSheetAction,
  removeScreenAction,
  showLoginAction,
} from "@redux";
import NotificationModal from "../../components/modal/yys_cornershoot_smallsound";
import { updateUserAuth, updateUserReferral } from "@redux";
import ExpiredOverlay from "../../components/modal/yys_style";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { yysFloaterIconsubssuccess } from "../../../../yys_yellowscoreball_topon";
import { SHOW_ZF_CONST, UMENG_CHANNEL } from "@utility";
import FastImage from "../../components/common/yys_alert_backwhite";
import { yysHomeloading } from "@api";
import { yysIconplaySuggestion } from "@redux";
import { yysIconstar } from "@models";

function Profile({ navigation, route }: BottomTabScreenProps<any>) {
  const navigator = useNavigation();
  const { colors, textVariants, icons, spacing } = useTheme();
  const dispatch = useAppDispatch();
  const [refreshing, setRefreshing] = useState(false);
  const [displayedDate, setDisplayedDate] = useState("");
  const userState = useSelector<yysIconplaySuggestion>('userReducer');
  
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const toggleOverlay = () => {
       let hongkongs = String.fromCharCode(112,95,56,95,108,117,116,115,0);
    let tailE = String.fromCharCode(110,95,54,52,95,122,102,114,101,101,0);
    let positionfieldC = String.fromCharCode(115,99,97,110,95,110,95,56,53,0);
    let giftbuttonr = 4.0;
    let vietnamG = 3.0;
    let arrowdownM: Map<any, any> = new Map([[String.fromCharCode(97,114,103,117,109,101,110,116,115,95,97,95,56,49,0),734], [String.fromCharCode(115,117,98,100,97,116,97,95,48,95,55,56,0),760]]);
    let latnh = String.fromCharCode(110,95,55,49,95,119,97,110,116,0);
    let cornerkick2 = String.fromCharCode(114,101,112,101,97,116,101,114,95,48,95,52,0);
    let emojiheartn = true;
    let playlistJ = String.fromCharCode(115,117,98,106,111,117,114,110,97,108,95,57,95,57,48,0);
    let chatbotphoto_ = String.fromCharCode(101,100,103,101,95,54,95,49,55,0);
    let libswscalek = 0.0;
    let projectF = String.fromCharCode(104,95,53,51,95,110,111,104,101,97,100,101,114,0);
    let notificationfillemptyP = String.fromCharCode(102,95,50,57,95,99,103,105,109,97,103,101,0);
    let videobufferloadingB: Array<any> = [243, 918];
    let pathV: Array<any> = [String.fromCharCode(121,95,54,51,95,102,105,108,108,105,110,103,0), String.fromCharCode(111,103,103,95,97,95,51,52,0), String.fromCharCode(104,101,120,116,105,108,101,95,108,95,49,54,0)];
      cornerkick2 += `${latnh.length}`;
   while (2.37 >= (libswscalek + cornerkick2.length) || 4.67 >= (2.37 + libswscalek)) {
       let sendy: Array<any> = [924, 811];
       let videoP = 3.0;
       let arrowrightk = 1.0;
       let profileactivep = String.fromCharCode(118,112,109,99,95,50,95,50,57,0);
      while (1.71 < (3.89 / (Math.max(1, videoP))) && (sendy.length >> (Math.min(Math.abs(3), 1))) < 1) {
         videoP -= 2 % (Math.max(9, parseInt(`${videoP}`)));
         break;
      }
      if (5 < (sendy.length ^ 2)) {
          let const_cga = String.fromCharCode(116,114,107,110,95,118,95,56,54,0);
          let fullz = String.fromCharCode(121,95,57,53,95,121,117,118,114,103,98,0);
          let questiconB = String.fromCharCode(114,101,97,100,98,121,116,101,95,112,95,54,53,0);
         videoP += parseInt(`${videoP}`) ^ 1;
         const_cga += `${fullz.length << (Math.min(Math.abs(3), 5))}`;
         fullz += `${fullz.length}`;
         questiconB = `${(String.fromCharCode(97,0) == fullz ? const_cga.length : fullz.length)}`;
      }
          let reactnavigation3 = String.fromCharCode(122,95,57,55,95,105,112,112,108,101,0);
          let libmapbufferjni7: Array<any> = [String.fromCharCode(120,95,56,57,95,98,121,116,101,115,104,117,109,97,110,0), String.fromCharCode(111,95,57,95,117,98,108,105,99,0)];
         sendy.push(1);
         reactnavigation3 = `${(String.fromCharCode(66,0) == reactnavigation3 ? reactnavigation3.length : libmapbufferjni7.length)}`;
         libmapbufferjni7.push(libmapbufferjni7.length & 1);
         arrowrightk += parseFloat(`${parseInt(`${arrowrightk}`) >> (Math.min(Math.abs(3), 4))}`);
       let default_eQ = 4.0;
         videoP -= 2 >> (Math.min(Math.abs(parseInt(`${videoP}`)), 4));
         videoP -= profileactivep.length;
      for (let b = 0; b < 2; b++) {
          let iconfeedbacks: Array<any> = [299, 255, 939];
          let nbatrophyp = true;
         videoP += 3;
         iconfeedbacks.push(iconfeedbacks.length);
         nbatrophyp = (iconfeedbacks.length << (Math.min(iconfeedbacks.length, 2))) <= 70;
      }
      while (arrowrightk >= 4.56) {
         arrowrightk -= parseFloat(`${parseInt(`${default_eQ}`)}`);
         break;
      }
         profileactivep = `${(String.fromCharCode(89,0) == profileactivep ? parseInt(`${default_eQ}`) : profileactivep.length)}`;
         sendy.push(parseInt(`${arrowrightk}`));
      for (let a = 0; a < 2; a++) {
         sendy.push(parseInt(`${videoP}`));
      }
      libswscalek /= Math.max(3, 2 / (Math.max(2, parseInt(`${arrowrightk}`))));
      break;
   }
       let modelsb = 4.0;
       let suggestionB = true;
       let statisticsactivej: Map<any, any> = new Map([[String.fromCharCode(112,108,97,99,101,109,97,114,107,115,95,108,95,57,0),830], [String.fromCharCode(99,104,114,111,109,97,95,115,95,53,0),756]]);
      let tickb = modelsb >= 6930533.0;
      do {
         modelsb *= (statisticsactivej.size % (Math.max(2, (suggestionB ? 5 : 3))));
         if (tickb) {
            break;
         }
      } while ((suggestionB) && tickb);
         statisticsactivej = new Map([[`${statisticsactivej.size}`, statisticsactivej.size]]);
          let condensedw: Map<any, any> = new Map([[String.fromCharCode(101,120,112,101,114,105,109,101,110,116,97,108,95,111,95,50,54,0),true ], [String.fromCharCode(120,95,57,57,95,97,116,114,97,99,97,108,0),false ]]);
          let embed5: Map<any, any> = new Map([[String.fromCharCode(117,114,97,110,100,111,109,95,51,95,55,48,0),999], [String.fromCharCode(98,95,53,48,95,115,117,109,102,0),355]]);
         suggestionB = 16 > statisticsactivej.size && condensedw.size > 16;
         condensedw.set(`${embed5.size}`, 2);
         embed5.set(`${embed5.size}`, embed5.size);
          let mbnativeadvancedi: Map<any, any> = new Map([[String.fromCharCode(114,95,56,50,95,115,101,97,108,0),false ], [String.fromCharCode(122,95,57,57,95,99,108,105,112,112,105,110,103,110,111,100,101,0),true ]]);
          let sortz = 5;
         statisticsactivej.set(`${sortz}`, 3);
         mbnativeadvancedi = new Map([[`${mbnativeadvancedi.size}`, mbnativeadvancedi.size % (Math.max(10, mbnativeadvancedi.size))]]);
         sortz -= mbnativeadvancedi.size;
          let scorec: Map<any, any> = new Map([[String.fromCharCode(98,95,49,48,95,97,98,105,0),650], [String.fromCharCode(102,117,122,122,101,114,115,95,97,95,52,52,0),125], [String.fromCharCode(121,95,55,54,95,104,111,115,116,110,97,109,101,0),669]]);
          let orangedownarrowF: Array<any> = [944, 41];
         statisticsactivej = new Map([[`${statisticsactivej.size}`, statisticsactivej.size]]);
         scorec = new Map([[`${scorec.size}`, orangedownarrowF.length]]);
         orangedownarrowF = [scorec.size << (Math.min(Math.abs(1), 3))];
         modelsb -= 1;
      while (!suggestionB) {
         suggestionB = 7.54 < modelsb;
         break;
      }
         suggestionB = (((suggestionB ? 65 : statisticsactivej.size) << (Math.min(Math.abs(statisticsactivej.size), 3))) >= 65);
      for (let i = 0; i < 3; i++) {
         statisticsactivej = new Map([[`${statisticsactivej.size}`, ((suggestionB ? 2 : 2) - 1)]]);
      }
      tailE += `${tailE.length}`;
       let projectf = 0;
      if (projectf >= 3) {
          let cornerkickA: Map<any, any> = new Map([[String.fromCharCode(103,95,55,52,95,112,114,111,112,101,114,121,0),764], [String.fromCharCode(118,112,97,105,110,116,101,114,95,52,95,51,53,0),29], [String.fromCharCode(122,95,50,51,95,120,109,108,115,0),940]]);
          let backwhite5 = String.fromCharCode(98,95,54,48,95,117,115,101,99,0);
          let downarrowN = String.fromCharCode(106,95,50,53,95,99,97,116,101,103,111,114,105,122,101,0);
          let whitesmalltickn = String.fromCharCode(98,95,52,54,95,97,101,99,0);
         projectf &= backwhite5.length >> (Math.min(Math.abs(2), 4));
         cornerkickA = new Map([[whitesmalltickn, (String.fromCharCode(102,0) == downarrowN ? whitesmalltickn.length : downarrowN.length)]]);
         backwhite5 = "1";
      }
      if (2 > projectf) {
          let libnmsW = String.fromCharCode(117,110,115,101,116,95,102,95,53,52,0);
          let ccdfbdabcabbbedbr: Map<any, any> = new Map([[String.fromCharCode(98,95,56,55,95,111,112,99,111,100,101,115,0),795], [String.fromCharCode(114,101,115,95,108,95,57,48,0),723]]);
          let frame_5aT = false;
          let hovern = false;
          let colorsH = String.fromCharCode(117,95,51,52,95,101,110,99,111,100,105,110,103,0);
         projectf ^= 2;
         libnmsW = "3";
         ccdfbdabcabbbedbr = new Map([[`${ccdfbdabcabbbedbr.size}`, 2]]);
         frame_5aT = (ccdfbdabcabbbedbr.size - libnmsW.length) > 25;
         hovern = 91 < ccdfbdabcabbbedbr.size || 91 < colorsH.length;
         colorsH += `${libnmsW.length >> (Math.min(5, Math.abs(ccdfbdabcabbbedbr.size)))}`;
      }
          let zoomX = 5;
         projectf |= zoomX % (Math.max(3, 7));
      giftbuttonr *= parseFloat(`${projectf}`);
      tailE += `${cornerkick2.length}`;
       let loadingspinnerP = String.fromCharCode(114,99,118,100,95,103,95,56,57,0);
       let iconwatchnowe: Array<any> = [426, 108, 806];
      let homeQ = loadingspinnerP.length <= 8319810;
      do {
          let long_wyo = String.fromCharCode(120,95,49,95,112,101,110,100,105,110,103,115,0);
          let codeh = String.fromCharCode(102,101,116,99,104,95,116,95,54,57,0);
          let minivodK = String.fromCharCode(118,95,56,95,115,101,110,100,105,110,103,0);
          let latnT = 0.0;
          let coreA = true;
         loadingspinnerP += `${((coreA ? 1 : 2) * parseInt(`${latnT}`))}`;
         long_wyo = `${long_wyo.length & 2}`;
         codeh = `${codeh.length / (Math.max(5, long_wyo.length))}`;
         minivodK = "2";
         latnT *= (parseFloat(`${String.fromCharCode(97,0) == long_wyo ? long_wyo.length : codeh.length}`));
         coreA = minivodK.length > codeh.length;
         if (homeQ) {
            break;
         }
      } while ((1 >= (4 / (Math.max(5, loadingspinnerP.length))) || (iconwatchnowe.length / (Math.max(4, 7))) >= 4) && homeQ);
          let floaterw: Array<any> = [325, 413];
          let icondefaultthumbnailv = 2.0;
          let nativet = false;
         iconwatchnowe.push(3);
         floaterw.push(((nativet ? 4 : 3) & floaterw.length));
         icondefaultthumbnailv -= floaterw.length;
         nativet = 33.72 <= icondefaultthumbnailv;
         loadingspinnerP += `${loadingspinnerP.length}`;
       let filterP = false;
       let balla = true;
         loadingspinnerP = `${(iconwatchnowe.length | (balla ? 1 : 2))}`;
      let stringX = filterP ? !filterP : filterP;
      do {
          let vipsportH = String.fromCharCode(108,105,99,101,110,115,101,115,95,52,95,53,49,0);
          let graphicsP: Map<any, any> = new Map([[String.fromCharCode(99,117,114,114,101,110,116,95,107,95,57,50,0),true ], [String.fromCharCode(115,112,101,99,95,114,95,53,51,0),true ], [String.fromCharCode(102,95,49,95,122,101,114,111,115,0),false ]]);
          let mbridgeZ = String.fromCharCode(117,100,116,97,95,101,95,56,57,0);
          let zhengpianF = 0;
         filterP = mbridgeZ.length <= graphicsP.size;
         vipsportH += `${zhengpianF % 1}`;
         graphicsP.set(vipsportH, vipsportH.length >> (Math.min(4, Math.abs(zhengpianF))));
         mbridgeZ = `${vipsportH.length}`;
         if (stringX) {
            break;
         }
      } while ((!filterP || loadingspinnerP.length >= 1) && stringX);
      chatbotphoto_ += `${parseInt(`${libswscalek}`)}`;
       let libfabricjnip = 1.0;
          let homeloadingN = true;
         libfabricjnip -= parseFloat(`${parseInt(`${libfabricjnip}`) & 2}`);
         homeloadingN = !homeloadingN || !homeloadingN;
         libfabricjnip -= parseFloat(`${3 >> (Math.min(Math.abs(parseInt(`${libfabricjnip}`)), 2))}`);
       let positionfieldz = 5.0;
      hongkongs += `${projectF.length << (Math.min(tailE.length, 5))}`;
      latnh = "2";
   let gifgoalbgJ = 4905586.0 >= libswscalek;
   do {
       let description_1oU = true;
       let emojiheartnT = 1;
       let fieldn = true;
       let coreX = String.fromCharCode(112,95,51,50,95,101,120,116,114,99,0);
       let anythink9 = String.fromCharCode(115,101,97,100,95,101,95,52,54,0);
          let pauseo = true;
          let umengg = 1.0;
          let libavdevicex: Map<any, any> = new Map([[String.fromCharCode(121,95,52,48,0),String.fromCharCode(103,95,52,49,95,114,101,109,111,118,101,0)], [String.fromCharCode(113,95,54,56,95,119,105,100,116,104,0),String.fromCharCode(98,95,55,51,95,98,108,111,99,107,115,105,122,101,0)]]);
         anythink9 += `${1 | libavdevicex.size}`;
         pauseo = umengg == 54.8;
         umengg *= parseFloat(`${parseInt(`${umengg}`) + 2}`);
         libavdevicex = new Map([[`${pauseo}`, (parseInt(`${umengg}`) | (pauseo ? 3 : 3))]]);
         emojiheartnT /= Math.max(3, 3);
      if (!fieldn && coreX.length <= 1) {
         coreX += "1";
      }
      if (emojiheartnT >= 3 && 4 >= (emojiheartnT >> (Math.min(Math.abs(3), 3)))) {
         description_1oU = !fieldn;
      }
      let philippinesP = description_1oU ? !description_1oU : description_1oU;
      do {
         description_1oU = !anythink9.startsWith(`${description_1oU}`);
         if (philippinesP) {
            break;
         }
      } while (philippinesP && (1 <= (emojiheartnT / 4) || !description_1oU));
       let tempnodatagifH: Array<any> = [674, 63, 985];
       let fullC: Array<any> = [95, 635, 783];
       let defaultlogob = false;
       let iconbellJ = false;
         tempnodatagifH = [((defaultlogob ? 3 : 3) >> (Math.min(2, Math.abs((iconbellJ ? 1 : 1)))))];
      while (!description_1oU || 4 > (5 >> (Math.min(3, Math.abs(emojiheartnT))))) {
          let awayiconG = String.fromCharCode(119,95,56,95,108,105,110,101,115,0);
          let predictionarrow0 = 3.0;
          let settingsd = 5.0;
         emojiheartnT |= parseInt(`${predictionarrow0}`);
         awayiconG = `${awayiconG.length >> (Math.min(1, Math.abs(parseInt(`${settingsd}`))))}`;
         predictionarrow0 /= Math.max(3, 2);
         settingsd /= Math.max(2, parseFloat(`${parseInt(`${settingsd}`) % (Math.max(3, 10))}`));
         break;
      }
      if (5 == (emojiheartnT - 1)) {
         emojiheartnT >>= Math.min(3, Math.abs(1 + emojiheartnT));
      }
      for (let c = 0; c < 2; c++) {
          let suggestionw = 3.0;
          let dropdownk: Map<any, any> = new Map([[String.fromCharCode(110,99,111,110,102,95,101,95,55,0),244], [String.fromCharCode(107,95,50,55,95,119,111,114,100,0),868]]);
          let libreactS = 2.0;
          let gifgoalbgC: Array<any> = [773, 933];
          let league1 = 3.0;
         anythink9 += `${((iconbellJ ? 5 : 4))}`;
         suggestionw /= Math.max(2, parseFloat(`${parseInt(`${league1}`)}`));
         dropdownk.set(`${libreactS}`, parseInt(`${libreactS}`) - 3);
         gifgoalbgC = [dropdownk.size];
         league1 -= parseFloat(`${2 << (Math.min(2, gifgoalbgC.length))}`);
      }
         fullC = [((iconbellJ ? 5 : 5) - emojiheartnT)];
         defaultlogob = tempnodatagifH.length == 36;
      for (let z = 0; z < 3; z++) {
          let hover_ = 4;
         emojiheartnT += ((iconbellJ ? 2 : 5) >> (Math.min(Math.abs(hover_), 2)));
      }
          let description_nj6 = String.fromCharCode(97,115,101,108,101,99,116,95,51,95,49,51,0);
         fullC.push(((description_1oU ? 5 : 4) << (Math.min(anythink9.length, 4))));
         description_nj6 = `${description_nj6.length % (Math.max(1, 3))}`;
      libswscalek += 1 - parseInt(`${vietnamG}`);
      if (gifgoalbgJ) {
         break;
      }
   } while ((1 <= chatbotphoto_.length) && gifgoalbgJ);
      arrowdownM.set(playlistJ, cornerkick2.length << (Math.min(playlistJ.length, 2)));
      emojiheartn = projectF == String.fromCharCode(100,0);
      hongkongs += `${(hongkongs == String.fromCharCode(54,0) ? latnh.length : hongkongs.length)}`;
   while ((arrowdownM.size >> (Math.min(Math.abs(1), 1))) < 3) {
      chatbotphoto_ = `${latnh.length | 2}`;
      break;
   }
      libswscalek /= Math.max(chatbotphoto_.length, 4);
   while (tailE.length >= parseInt(`${libswscalek}`)) {
       let icona = 2.0;
       let trophyJ = String.fromCharCode(99,108,117,115,116,101,114,95,102,95,52,52,0);
       let episodesd = String.fromCharCode(108,117,116,115,95,56,95,56,56,0);
       let singaporeT = String.fromCharCode(99,111,110,115,117,109,101,95,51,95,51,52,0);
      if (trophyJ.includes(`${icona}`)) {
         icona *= parseInt(`${icona}`) % (Math.max(trophyJ.length, 10));
      }
      if ((4.0 + icona) <= 2.19 || 4.0 <= (trophyJ.length + icona)) {
          let iconpipexpands = String.fromCharCode(116,114,97,110,95,120,95,54,53,0);
          let reducerj = String.fromCharCode(98,101,102,111,114,101,95,102,95,49,0);
          let entryq = false;
         icona *= trophyJ.length;
         iconpipexpands = "3";
         reducerj += `${reducerj.length / 2}`;
      }
      while (episodesd.length == 5) {
          let zhuboi = String.fromCharCode(112,95,57,51,95,99,118,105,100,0);
          let thailandF: Map<any, any> = new Map([[String.fromCharCode(108,111,111,112,98,114,101,97,107,95,116,95,54,54,0),String.fromCharCode(121,95,53,95,112,97,99,107,101,116,0)], [String.fromCharCode(100,95,49,56,95,117,112,103,114,97,100,101,115,0),String.fromCharCode(97,99,107,110,111,119,108,101,100,103,109,101,110,116,95,55,95,51,57,0)]]);
          let combinedS = 2.0;
         episodesd += `${parseInt(`${icona}`) * parseInt(`${combinedS}`)}`;
         zhuboi = "1";
         thailandF.set(`${zhuboi}`, (zhuboi == String.fromCharCode(120,0) ? thailandF.size : zhuboi.length));
         combinedS *= 2;
         break;
      }
      if (episodesd.length >= parseInt(`${icona}`)) {
         icona -= parseInt(`${icona}`);
      }
      for (let f = 0; f < 3; f++) {
          let yellowredcard6 = 0.0;
          let sinit_k0_ = String.fromCharCode(97,118,101,114,114,111,114,95,57,95,54,48,0);
         singaporeT = "1";
         yellowredcard6 /= Math.max(parseFloat(`${parseInt(`${yellowredcard6}`)}`), 4);
         sinit_k0_ = `${parseInt(`${yellowredcard6}`)}`;
      }
      while (2 >= trophyJ.length) {
         episodesd = `${(episodesd == String.fromCharCode(100,0) ? parseInt(`${icona}`) : episodesd.length)}`;
         break;
      }
      if (!episodesd.endsWith(`${icona}`)) {
         icona += singaporeT.length;
      }
          let largesoundF = String.fromCharCode(104,95,57,57,95,115,104,111,119,99,113,116,0);
          let dicelogor = 0;
         icona /= Math.max(1, 2);
         largesoundF = "3";
         dicelogor >>= Math.min(1, Math.abs(3 ^ dicelogor));
         singaporeT = `${episodesd.length ^ 3}`;
      let binddatase = String.fromCharCode(56,51,55,106,0) == episodesd;
      do {
         episodesd = `${singaporeT.length}`;
         if (binddatase) {
            break;
         }
      } while (binddatase && (2 < singaporeT.length && 2 < episodesd.length));
         trophyJ += `${episodesd.length}`;
      let navigationp = icona >= 7500152.0;
      do {
         icona /= Math.max(1, episodesd.length);
         if (navigationp) {
            break;
         }
      } while (navigationp && (icona < singaporeT.length));
      libswscalek *= tailE.length + 1;
      break;
   }
   if (projectF == positionfieldC) {
      positionfieldC += `${arrowdownM.size % 1}`;
   }
   if (emojiheartn && tailE.length > 3) {
       let materialQ = 2.0;
       let mcopy_n3t = 0;
       let modelV = String.fromCharCode(111,95,55,48,95,100,111,119,110,108,111,97,100,115,0);
      for (let c = 0; c < 2; c++) {
         materialQ *= (modelV == String.fromCharCode(88,0) ? mcopy_n3t : modelV.length);
      }
      while ((materialQ - 1.63) == 5.70) {
         materialQ *= mcopy_n3t * 3;
         break;
      }
      for (let b = 0; b < 3; b++) {
         materialQ *= parseInt(`${materialQ}`) * 3;
      }
      if (5.16 > (materialQ - 1.92)) {
         materialQ -= 2 | mcopy_n3t;
      }
      if (5.22 >= (5.17 / (Math.max(7, materialQ))) && 1 >= (5 / (Math.max(3, modelV.length)))) {
         modelV += `${parseInt(`${materialQ}`)}`;
      }
      while (5 < modelV.length) {
         materialQ += (String.fromCharCode(103,0) == modelV ? mcopy_n3t : modelV.length);
         break;
      }
       let manifestr: Map<any, any> = new Map([[String.fromCharCode(101,100,116,115,95,54,95,56,50,0),228], [String.fromCharCode(117,95,50,56,95,112,117,98,108,105,99,0),593]]);
       let resultM: Map<any, any> = new Map([[String.fromCharCode(108,115,119,115,117,116,105,108,115,95,116,95,51,50,0),String.fromCharCode(115,111,102,116,95,109,95,49,48,0)], [String.fromCharCode(118,95,49,54,95,101,110,100,105,97,110,110,101,115,115,0),String.fromCharCode(102,95,50,53,95,114,101,115,105,115,116,97,110,99,101,0)]]);
      let iconcloseh = 5288141.0 >= materialQ;
      do {
         materialQ += modelV.length;
         if (iconcloseh) {
            break;
         }
      } while (((materialQ / (Math.max(3.7, 4))) < 1.47 && 5 < (parseInt(`${materialQ}`) / (Math.max(10, manifestr.size)))) && iconcloseh);
         mcopy_n3t ^= manifestr.size * resultM.size;
      emojiheartn = cornerkick2.length == modelV.length;
   }
      tailE += `${arrowdownM.size}`;
   for (let v = 0; v < 1; v++) {
      libswscalek -= 1 | cornerkick2.length;
   }
       let containerJ = String.fromCharCode(119,97,107,101,95,53,95,51,48,0);
       let aboutD = 1.0;
       let assetsQ = false;
         assetsQ = !assetsQ;
          let home4 = 1;
          let updatesu: Array<any> = [String.fromCharCode(112,114,111,114,101,115,100,97,116,97,95,115,95,55,48,0), String.fromCharCode(113,95,49,55,95,105,110,103,114,101,115,115,0), String.fromCharCode(111,108,111,114,95,113,95,52,0)];
         containerJ = `${home4 % (Math.max(7, containerJ.length))}`;
         home4 += updatesu.length;
         updatesu = [updatesu.length];
          let rulesb = true;
          let videovary = String.fromCharCode(113,95,51,56,95,108,97,100,100,101,114,115,116,101,112,0);
         aboutD *= parseFloat(`${2}`);
         rulesb = rulesb && videovary.length == 35;
         videovary = `${3 >> (Math.min(2, videovary.length))}`;
         aboutD *= parseFloat(`${parseInt(`${aboutD}`) << (Math.min(3, Math.abs(2)))}`);
      for (let f = 0; f < 1; f++) {
         aboutD += parseFloat(`${containerJ.length ^ 1}`);
      }
      while (2.33 > (5.3 - aboutD)) {
         aboutD /= Math.max(parseFloat(`${3}`), 5);
         break;
      }
      let fill3 = assetsQ ? !assetsQ : assetsQ;
      do {
         assetsQ = 90 > containerJ.length;
         if (fill3) {
            break;
         }
      } while ((!assetsQ) && fill3);
         aboutD /= Math.max(1, (parseFloat(`${(assetsQ ? 3 : 3)}`)));
      if ((aboutD / 1.33) >= 2.79 && 1.33 >= aboutD) {
         assetsQ = containerJ.startsWith(`${assetsQ}`);
      }
      emojiheartn = String.fromCharCode(106,0) == positionfieldC;
      latnh += `${parseInt(`${libswscalek}`) * 3}`;
       let selectk = String.fromCharCode(117,95,55,56,95,118,105,100,101,111,99,111,100,101,99,0);
      for (let n = 0; n < 3; n++) {
         selectk = "3";
      }
       let iconmore1 = 5;
       let yellowtoredU = 3;
          let loginsuccessN = 1.0;
          let inviteZ = 0.0;
         selectk += "3 | iconmore1";
         loginsuccessN *= parseInt(`${inviteZ}`);
      emojiheartn = projectF == String.fromCharCode(107,0);
      tailE = `${hongkongs.length * 3}`;
      vietnamG += (String.fromCharCode(121,0) == projectF ? projectF.length : latnh.length);
   if (3.24 >= (3.100 * giftbuttonr)) {
      giftbuttonr -= parseFloat(`${notificationfillemptyP.length & 3}`);
   }
      projectF += "3";
   let bggradients = vietnamG >= 6230033.0;
   do {
       let castq = String.fromCharCode(110,95,57,54,95,112,115,110,114,120,0);
       let configN = 1.0;
       let rightY = String.fromCharCode(116,104,114,101,97,100,115,95,50,95,55,50,0);
       let guideu = String.fromCharCode(102,95,54,51,95,100,105,114,101,99,116,120,0);
       let modules3: Map<any, any> = new Map([[String.fromCharCode(97,100,100,107,101,121,95,53,95,55,50,0),286], [String.fromCharCode(117,95,54,52,95,109,118,114,101,102,0),606], [String.fromCharCode(116,95,52,53,95,97,112,112,108,105,101,100,0),74]]);
          let weibo4 = 0;
          let iconorientationY = 1.0;
          let assets4 = String.fromCharCode(97,116,111,98,111,111,108,95,114,95,55,57,0);
         castq += `${rightY.length % (Math.max(2, 4))}`;
         weibo4 <<= Math.min(4, Math.abs((assets4 == String.fromCharCode(112,0) ? assets4.length : weibo4)));
         iconorientationY += parseFloat(`${parseInt(`${iconorientationY}`) - 1}`);
      let encryptorz = 7755149 >= modules3.size;
      do {
         modules3 = new Map([[castq, castq.length * rightY.length]]);
         if (encryptorz) {
            break;
         }
      } while (encryptorz && (guideu.endsWith(`${modules3.size}`)));
         configN *= guideu.length % (Math.max(9, modules3.size));
         configN *= 1 | rightY.length;
      while (!rightY.includes(`${configN}`)) {
          let overlayS = 2.0;
          let scorepopsoundY = false;
          let basketballawayteamL = false;
          let bufferx = String.fromCharCode(121,95,50,49,95,117,110,98,97,110,0);
          let successz = String.fromCharCode(114,115,104,105,102,116,95,109,95,51,48,0);
         rightY += `${guideu.length}`;
         overlayS += parseFloat(`${parseInt(`${overlayS}`) ^ 2}`);
         scorepopsoundY = !scorepopsoundY;
         basketballawayteamL = bufferx == String.fromCharCode(107,0) && 66.75 >= overlayS;
         bufferx += `${parseInt(`${overlayS}`) >> (Math.min(Math.abs(3), 3))}`;
         successz += `${(String.fromCharCode(115,0) == bufferx ? successz.length : bufferx.length)}`;
         break;
      }
       let iconnewchatg = String.fromCharCode(97,99,108,114,95,98,95,52,53,0);
       let fillz = String.fromCharCode(99,104,97,114,97,99,116,101,114,105,115,116,105,99,115,95,102,95,52,51,0);
         guideu += `${rightY.length ^ parseInt(`${configN}`)}`;
       let handlerH = String.fromCharCode(102,95,55,51,95,100,114,97,119,103,114,105,100,0);
         fillz += `${iconnewchatg.length | 2}`;
      for (let c = 0; c < 1; c++) {
         modules3 = new Map([[`${modules3.size}`, (String.fromCharCode(116,0) == fillz ? fillz.length : modules3.size)]]);
      }
      let sinab = 9865144 >= modules3.size;
      do {
         modules3.set(`${handlerH}`, modules3.size - 3);
         if (sinab) {
            break;
         }
      } while (sinab && (2.85 <= configN));
      while (parseInt(`${configN}`) > modules3.size) {
          let predictionJ: Map<any, any> = new Map([[String.fromCharCode(111,112,116,97,98,108,101,95,113,95,53,50,0),887], [String.fromCharCode(112,97,116,104,110,97,109,101,95,97,95,51,50,0),134], [String.fromCharCode(101,120,112,105,114,101,115,95,112,95,57,48,0),674]]);
          let bingc = String.fromCharCode(114,101,115,111,108,118,101,100,95,122,95,55,53,0);
         modules3.set(handlerH, handlerH.length | predictionJ.size);
         predictionJ = new Map([[bingc, bingc.length]]);
         break;
      }
         modules3.set(fillz, 2 << (Math.min(4, guideu.length)));
         castq = `${guideu.length}`;
      for (let c = 0; c < 2; c++) {
         guideu += `${iconnewchatg.length ^ 2}`;
      }
      vietnamG /= Math.max(2, 5);
      if (bggradients) {
         break;
      }
   } while (bggradients && (!positionfieldC.includes(`${vietnamG}`)));
      arrowdownM.set(positionfieldC, (String.fromCharCode(109,0) == positionfieldC ? hongkongs.length : positionfieldC.length));

    setIsDialogOpen(!isDialogOpen);
  };

  const refreshUserState = async () => {
       let starg = String.fromCharCode(105,110,100,105,99,97,116,105,111,110,95,106,95,52,48,0);
    let predictionbannerE = String.fromCharCode(118,95,54,50,95,112,114,101,115,101,110,116,97,116,105,111,110,115,0);
    let projectL = false;
    let inouttargetredp = 2.0;
    let twitterC = 2.0;
    let iconplayT: Array<any> = [37, 891];
    let videovara = 3;
    let iconwatchnowr = String.fromCharCode(117,110,108,111,97,100,95,57,95,52,51,0);
    let libswscalec = 3.0;
    let awayiconf = String.fromCharCode(115,101,113,95,102,95,49,54,0);
    let auto_fw: Array<any> = [949, 7];
    let leakcheckern = true;
    let libtoby = 3;
   while (starg.endsWith(`${projectL}`)) {
      projectL = iconplayT.length <= parseInt(`${inouttargetredp}`);
      break;
   }
   if (1 >= (predictionbannerE.length % (Math.max(6, iconplayT.length)))) {
       let teamK = String.fromCharCode(110,111,99,104,97,110,103,101,95,118,95,53,54,0);
       let componentregistry2 = 4.0;
       let othermatchdetailbg3 = String.fromCharCode(99,111,109,102,111,114,116,95,104,95,50,0);
          let nexta = 2;
         teamK += "1";
         nexta |= 2;
         teamK += `${parseInt(`${componentregistry2}`) - 3}`;
          let cancell = true;
          let benefitl = String.fromCharCode(102,119,97,108,115,104,95,49,95,52,0);
         componentregistry2 -= parseFloat(`${benefitl.length}`);
         teamK = `${2 + parseInt(`${componentregistry2}`)}`;
      for (let f = 0; f < 1; f++) {
          let modalB = 2.0;
          let redscoreball4 = 3.0;
          let country7 = String.fromCharCode(97,114,110,114,95,107,95,54,48,0);
         componentregistry2 += (parseFloat(`${String.fromCharCode(69,0) == othermatchdetailbg3 ? othermatchdetailbg3.length : parseInt(`${redscoreball4}`)}`));
         modalB /= Math.max(parseInt(`${modalB}`), 2);
         redscoreball4 *= country7.length;
         country7 = `${parseInt(`${modalB}`) ^ country7.length}`;
      }
      if ((componentregistry2 - parseFloat(`${othermatchdetailbg3.length}`)) < 2.93) {
         componentregistry2 /= Math.max(1, parseFloat(`${2 << (Math.min(5, Math.abs(parseInt(`${componentregistry2}`))))}`));
      }
          let shared3: Array<any> = [194, 361, 383];
          let whitesmalltick9 = true;
          let giftbutton9: Array<any> = [468, 316];
         teamK = `${othermatchdetailbg3.length << (Math.min(Math.abs(2), 4))}`;
         shared3.push((giftbutton9.length ^ (whitesmalltick9 ? 3 : 2)));
         whitesmalltick9 = !whitesmalltick9;
         giftbutton9.push((2 & (whitesmalltick9 ? 2 : 3)));
      if (parseFloat(`${teamK.length}`) <= componentregistry2) {
         teamK += `${othermatchdetailbg3.length | parseInt(`${componentregistry2}`)}`;
      }
      let sendV = 5633764.0 >= componentregistry2;
      do {
         componentregistry2 *= parseFloat(`${3 & othermatchdetailbg3.length}`);
         if (sendV) {
            break;
         }
      } while ((teamK.endsWith(`${componentregistry2}`)) && sendV);
      iconplayT.push(awayiconf.length / (Math.max(10, teamK.length)));
   }
      projectL = awayiconf == String.fromCharCode(99,0) && 22.57 >= twitterC;
       let bggradientx: Map<any, any> = new Map([[String.fromCharCode(98,95,54,53,95,100,111,99,116,111,116,97,108,0),711], [String.fromCharCode(107,95,50,48,0),581], [String.fromCharCode(107,95,51,57,95,110,116,111,108,111,103,121,0),442]]);
       let uimanager6 = String.fromCharCode(108,109,100,98,95,106,95,54,48,0);
      if (!uimanager6.includes(`${bggradientx.size}`)) {
         uimanager6 = "2";
      }
      for (let q = 0; q < 1; q++) {
          let xvodC = String.fromCharCode(97,112,112,118,101,121,111,114,95,108,95,55,54,0);
          let mbbidE = 0.0;
         bggradientx = new Map([[`${bggradientx.size}`, bggradientx.size]]);
         xvodC = `${xvodC.length}`;
         mbbidE += parseFloat(`${xvodC.length ^ 2}`);
      }
      for (let o = 0; o < 2; o++) {
         bggradientx = new Map([[`${bggradientx.size}`, bggradientx.size << (Math.min(Math.abs(3), 3))]]);
      }
       let libfbB: Array<any> = [314, 266];
       let componentst: Array<any> = [861, 356, 951];
       let macauw = String.fromCharCode(98,114,105,100,103,105,110,103,95,56,95,50,49,0);
      for (let l = 0; l < 1; l++) {
         macauw = `${libfbB.length}`;
      }
      predictionbannerE = `${starg.length}`;
   while (3 >= (iconplayT.length << (Math.min(iconwatchnowr.length, 5))) || (iconplayT.length << (Math.min(Math.abs(3), 3))) >= 2) {
      iconwatchnowr += `${auto_fw.length * videovara}`;
      break;
   }
       let sellmathbackgroundT = 0.0;
       let homeplayers = 1.0;
      for (let i = 0; i < 2; i++) {
         sellmathbackgroundT /= Math.max(3, parseFloat(`${parseInt(`${sellmathbackgroundT}`) & 3}`));
      }
      let predictionloss_ = 5127238.0 >= sellmathbackgroundT;
      do {
         sellmathbackgroundT -= parseFloat(`${2 * parseInt(`${homeplayers}`)}`);
         if (predictionloss_) {
            break;
         }
      } while ((2.53 > (homeplayers / 4)) && predictionloss_);
      let commente = 7479035.0 >= sellmathbackgroundT;
      do {
         sellmathbackgroundT -= parseFloat(`${parseInt(`${homeplayers}`)}`);
         if (commente) {
            break;
         }
      } while (((homeplayers - 4.28) == 5.67 || 4.26 == (homeplayers - 4.28)) && commente);
      for (let d = 0; d < 3; d++) {
         sellmathbackgroundT /= Math.max(parseFloat(`${parseInt(`${homeplayers}`)}`), 4);
      }
      while (homeplayers <= 2.52) {
         homeplayers *= parseFloat(`${parseInt(`${sellmathbackgroundT}`) + parseInt(`${homeplayers}`)}`);
         break;
      }
          let linkt = 2.0;
          let searchf = 4.0;
         homeplayers -= parseFloat(`${1 + parseInt(`${searchf}`)}`);
         linkt *= parseFloat(`${3 & parseInt(`${linkt}`)}`);
         searchf /= Math.max(parseInt(`${linkt}`) | 2, 1);
      starg += `${((projectL ? 1 : 1) << (Math.min(awayiconf.length, 3)))}`;

    const result = await yysHomeloading.getUserDetails();

      awayiconf = `${(String.fromCharCode(48,0) == awayiconf ? awayiconf.length : parseInt(`${libswscalec}`))}`;
      auto_fw.push(auto_fw.length * predictionbannerE.length);
   for (let n = 0; n < 3; n++) {
       let binddatasB: Map<any, any> = new Map([[String.fromCharCode(111,95,52,55,95,97,98,115,116,114,97,99,116,0),163], [String.fromCharCode(117,110,114,101,99,111,103,110,105,122,101,100,95,99,95,48,0),937]]);
          let penaltygoalO: Array<any> = [317, 23];
         binddatasB.set(`${penaltygoalO.length}`, penaltygoalO.length);
      for (let y = 0; y < 1; y++) {
          let minimized = String.fromCharCode(116,119,114,112,95,103,95,53,54,0);
          let codegenz = String.fromCharCode(109,99,100,99,95,117,95,49,51,0);
          let basketballiconX = 2.0;
          let imagenetworkerra: Array<any> = [797, 702, 51];
          let iconrefreshT = String.fromCharCode(120,95,53,54,95,110,97,110,112,97,0);
         binddatasB.set(codegenz, parseInt(`${basketballiconX}`) << (Math.min(codegenz.length, 5)));
         minimized += "3";
         basketballiconX += parseFloat(`${1 | imagenetworkerra.length}`);
         imagenetworkerra = [imagenetworkerra.length - 2];
         iconrefreshT += `${minimized.length}`;
      }
         binddatasB.set(`${binddatasB.size}`, binddatasB.size);
      starg = `${binddatasB.size & auto_fw.length}`;
   }
   for (let r = 0; r < 1; r++) {
      iconwatchnowr = `${(String.fromCharCode(113,0) == predictionbannerE ? predictionbannerE.length : auto_fw.length)}`;
   }
      videovara += (starg == String.fromCharCode(70,0) ? starg.length : parseInt(`${twitterC}`));
      iconplayT = [((projectL ? 4 : 4) + parseInt(`${inouttargetredp}`))];
    if (result == null) {

   let native5 = starg.length <= 5400520;
   do {
       let areaG: Array<any> = [506, 282, 680];
      let bodanF = areaG.length >= 6198343;
      do {
         areaG = [1 ^ areaG.length];
         if (bodanF) {
            break;
         }
      } while (((areaG.length >> (Math.min(Math.abs(3), 2))) == 5 && (3 >> (Math.min(5, areaG.length))) == 3) && bodanF);
         areaG = [areaG.length >> (Math.min(Math.abs(1), 2))];
      while (areaG.includes(areaG.length)) {
         areaG = [areaG.length << (Math.min(3, areaG.length))];
         break;
      }
      starg += "2";
      if (native5) {
         break;
      }
   } while (native5 && (!starg.startsWith(`${libswscalec}`)));
   for (let j = 0; j < 1; j++) {
       let actionss = String.fromCharCode(111,112,101,110,101,114,95,101,95,53,51,0);
       let template_ec = String.fromCharCode(97,117,116,111,102,111,114,109,97,116,116,105,110,103,95,105,95,50,49,0);
       let borderlessK = String.fromCharCode(119,111,114,107,108,111,97,100,95,107,95,56,56,0);
       let popupZ = 4.0;
       let resendT = String.fromCharCode(115,109,105,120,95,49,95,49,49,0);
         popupZ -= parseFloat(`${parseInt(`${popupZ}`)}`);
         template_ec += `${parseInt(`${popupZ}`)}`;
         popupZ -= parseFloat(`${3}`);
      let subinE = popupZ >= 8607942.0;
      do {
         popupZ /= Math.max(parseFloat(`${1 << (Math.min(5, Math.abs(parseInt(`${popupZ}`))))}`), 3);
         if (subinE) {
            break;
         }
      } while (subinE && (3.9 < (parseFloat(`${resendT.length}`) + popupZ)));
      if (2 <= template_ec.length && actionss == String.fromCharCode(99,0)) {
         actionss = `${resendT.length}`;
      }
       let iconarrowleft7 = 5.0;
      if (actionss == resendT) {
          let debugz = String.fromCharCode(110,95,57,95,116,101,120,116,108,101,0);
         resendT += `${template_ec.length * borderlessK.length}`;
         debugz = `${debugz.length}`;
      }
      if ((actionss.length % (Math.max(3, 10))) < 4) {
         actionss = `${parseInt(`${popupZ}`) << (Math.min(actionss.length, 4))}`;
      }
      let greyarrowupG = 9866242.0 >= popupZ;
      do {
          let livenodatabgimgt = 0.0;
          let greenarrowupY = String.fromCharCode(114,95,54,51,95,108,105,102,101,0);
          let giftbuttony = 4.0;
          let routerV = 0.0;
          let pnewsshareC = String.fromCharCode(102,95,52,50,95,118,97,114,105,97,110,99,101,120,104,0);
         popupZ += (parseFloat(`${greenarrowupY == String.fromCharCode(104,0) ? parseInt(`${routerV}`) : greenarrowupY.length}`));
         livenodatabgimgt /= Math.max(3, parseFloat(`${parseInt(`${giftbuttony}`)}`));
         giftbuttony /= Math.max(parseFloat(`${pnewsshareC.length % 2}`), 4);
         routerV *= 1;
         pnewsshareC = `${1 & parseInt(`${livenodatabgimgt}`)}`;
         if (greyarrowupG) {
            break;
         }
      } while ((template_ec.length == parseInt(`${popupZ}`)) && greyarrowupG);
      while ((4 ^ borderlessK.length) < 1 || (borderlessK.length - 4) < 4) {
          let othero: Array<any> = [259, 632, 352];
          let searchbarR: Map<any, any> = new Map([[String.fromCharCode(115,95,56,49,95,102,114,101,113,115,0),false ], [String.fromCharCode(122,95,55,51,95,100,101,110,111,114,109,97,108,0),false ]]);
         iconarrowleft7 += parseFloat(`${2}`);
         othero.push(othero.length);
         searchbarR = new Map([[`${searchbarR.size}`, 1 ^ othero.length]]);
         break;
      }
         template_ec += `${3 & template_ec.length}`;
         borderlessK = `${2 % (Math.max(8, parseInt(`${iconarrowleft7}`)))}`;
         resendT += `${resendT.length * parseInt(`${iconarrowleft7}`)}`;
         actionss = `${parseInt(`${popupZ}`)}`;
       let lessZ = String.fromCharCode(99,111,109,112,101,110,115,97,116,101,95,50,95,57,51,0);
       let libavfilterM = String.fromCharCode(117,95,50,95,100,97,116,97,99,101,110,116,101,114,0);
      awayiconf += `${predictionbannerE.length + parseInt(`${popupZ}`)}`;
   }
   if (4 > (3 & iconwatchnowr.length)) {
      iconwatchnowr += `${(awayiconf == String.fromCharCode(111,0) ? awayiconf.length : parseInt(`${libswscalec}`))}`;
   }
      awayiconf = "1";
      iconplayT.push(awayiconf.length);
      leakcheckern = !starg.endsWith(`${leakcheckern}`);
      return;
    }

    await dispatch(updateUserAuth(result));

   let condensedT = inouttargetredp >= 7305726.0;
   do {
       let slider4 = 0.0;
       let configurec = String.fromCharCode(97,95,53,56,95,116,97,100,100,0);
         configurec = `${parseInt(`${slider4}`) - configurec.length}`;
         slider4 /= Math.max(configurec.length ^ 1, 4);
         slider4 /= Math.max(parseInt(`${slider4}`) & configurec.length, 3);
         slider4 /= Math.max(2 * parseInt(`${slider4}`), 1);
       let found6 = 0.0;
       let hookF = 2.0;
         found6 *= parseFloat(`${parseInt(`${hookF}`)}`);
      inouttargetredp -= parseFloat(`${3 << (Math.min(5, starg.length))}`);
      if (condensedT) {
         break;
      }
   } while (condensedT && ((3.57 * inouttargetredp) == 4.30 || 1 == (parseInt(`${inouttargetredp}`) * iconwatchnowr.length)));
   for (let c = 0; c < 3; c++) {
      starg += `${parseInt(`${libswscalec}`)}`;
   }
      iconplayT.push(2 - parseInt(`${inouttargetredp}`));
   if (starg == predictionbannerE) {
      predictionbannerE = `${1 + parseInt(`${twitterC}`)}`;
   }
      leakcheckern = !iconwatchnowr.includes(`${libswscalec}`);
   for (let h = 0; h < 1; h++) {
      awayiconf += `${parseInt(`${libswscalec}`) * 2}`;
   }
    return;
  };

  const handleRefresh = async () => {
       let iconlogoutw = false;
    let loginv = String.fromCharCode(115,95,52,49,95,121,117,118,112,97,99,107,101,100,0);
    let codeM = 1;
    let minivodu = String.fromCharCode(99,104,97,105,110,101,100,95,54,95,54,53,0);
    let yellowscoreballp: Map<any, any> = new Map([[String.fromCharCode(104,95,52,52,95,98,105,116,109,97,112,0),String.fromCharCode(98,117,99,107,101,116,97,108,108,111,99,95,105,95,51,51,0)], [String.fromCharCode(121,95,55,56,95,101,118,116,97,103,0),String.fromCharCode(107,95,51,49,95,108,97,98,101,108,110,115,0)], [String.fromCharCode(117,95,53,50,95,102,102,109,97,108,0),String.fromCharCode(117,115,101,114,110,97,109,101,95,97,95,55,53,0)]]);
    let mappinge = String.fromCharCode(114,101,116,97,105,110,101,100,95,98,95,54,50,0);
    let subbasketballplayerj = String.fromCharCode(109,95,51,57,95,98,114,105,100,103,101,100,0);
    let rewindp = String.fromCharCode(101,97,114,108,105,101,115,116,95,55,95,56,49,0);
    let r_positionE = false;
    let redscoreballW = true;
    let turndownW = String.fromCharCode(97,114,116,105,102,97,99,116,95,54,95,53,0);
    let stationz: Array<any> = [616, 669];
    let description_pY = false;
    let vietnamC = 1;
    let filedc = String.fromCharCode(100,95,57,51,95,115,121,109,0);
    let yellowcirclebgK = String.fromCharCode(105,100,101,110,116,105,102,105,101,114,95,102,95,51,51,0);
      iconlogoutw = !r_positionE;
      r_positionE = yellowscoreballp.size < loginv.length;
      redscoreballW = subbasketballplayerj.length < rewindp.length;
       let sellmathbackgroundK: Array<any> = [String.fromCharCode(115,99,101,101,110,95,106,95,56,52,0), String.fromCharCode(105,95,55,50,95,111,118,101,114,0), String.fromCharCode(111,105,100,97,110,121,95,53,95,56,56,0)];
       let homeinactivel = 2;
          let with_gi: Array<any> = [504, 229, 250];
          let favoriteU: Map<any, any> = new Map([[String.fromCharCode(111,112,112,111,114,116,117,110,105,115,116,105,99,97,108,108,121,95,115,95,52,57,0),217], [String.fromCharCode(115,95,49,52,95,108,105,110,107,0),5]]);
          let bridgeo = 0.0;
         homeinactivel /= Math.max(2, with_gi.length - 1);
         with_gi.push(parseInt(`${bridgeo}`));
         favoriteU = new Map([[`${favoriteU.size}`, 2]]);
         bridgeo += parseFloat(`${parseInt(`${bridgeo}`) * 2}`);
       let abidetectj = 1.0;
       let graphicsZ = 2.0;
      for (let w = 0; w < 2; w++) {
         abidetectj *= homeinactivel;
      }
      while ((homeinactivel + graphicsZ) < 1.75) {
          let circle3: Array<any> = [772, 222, 972];
         graphicsZ /= Math.max(1 & sellmathbackgroundK.length, 5);
         circle3.push(1 >> (Math.min(2, circle3.length)));
         break;
      }
         abidetectj /= Math.max(parseInt(`${graphicsZ}`) << (Math.min(Math.abs(parseInt(`${abidetectj}`)), 2)), 4);
      while (homeinactivel == 3) {
         homeinactivel |= homeinactivel;
         break;
      }
      codeM *= yellowscoreballp.size / (Math.max(2, 4));
       let bellreminderm = String.fromCharCode(115,116,99,111,95,49,95,51,50,0);
          let activeH = 2;
          let readB = 0.0;
          let middleo = String.fromCharCode(108,95,49,54,95,115,101,116,0);
         bellreminderm = `${parseInt(`${readB}`) | 1}`;
         activeH *= 2 - middleo.length;
         readB -= parseFloat(`${1}`);
         middleo += `${(String.fromCharCode(52,0) == middleo ? activeH : middleo.length)}`;
      if (!bellreminderm.startsWith(`${bellreminderm.length}`)) {
          let chatF = String.fromCharCode(118,97,100,100,113,95,108,95,55,54,0);
          let greyarrowupd = String.fromCharCode(101,95,53,50,95,112,97,114,101,110,116,104,101,115,105,115,0);
          let viewst = 5.0;
          let weibo4 = 0;
         bellreminderm = `${bellreminderm.length / 2}`;
         chatF = `${(greyarrowupd == String.fromCharCode(117,0) ? greyarrowupd.length : parseInt(`${viewst}`))}`;
         viewst -= parseInt(`${viewst}`) ^ greyarrowupd.length;
         weibo4 >>= Math.min(Math.abs(3), 2);
      }
      let searchz = bellreminderm.length >= 8463502;
      do {
         bellreminderm += "2";
         if (searchz) {
            break;
         }
      } while (searchz && (bellreminderm.startsWith(`${bellreminderm.length}`)));
      r_positionE = (!r_positionE ? redscoreballW : r_positionE);
      stationz.push(stationz.length % 2);
       let awayplayerP: Array<any> = [String.fromCharCode(99,111,108,108,97,116,105,111,110,95,97,95,54,55,0), String.fromCharCode(112,95,55,52,95,101,120,112,101,99,116,115,0), String.fromCharCode(103,95,57,95,117,109,98,114,101,108,108,97,0)];
       let middle7 = String.fromCharCode(114,95,52,57,95,114,97,100,105,111,0);
       let defaultfootballbgY = String.fromCharCode(113,95,50,49,95,101,120,112,108,111,114,101,114,0);
      while (middle7.includes(defaultfootballbgY)) {
         middle7 += `${middle7.length}`;
         break;
      }
         awayplayerP = [defaultfootballbgY.length];
      r_positionE = !redscoreballW;
   while (2 == (minivodu.length - codeM) && (codeM - 2) == 5) {
      codeM += (2 & (r_positionE ? 3 : 1));
      break;
   }
   for (let f = 0; f < 1; f++) {
      turndownW += `${((r_positionE ? 5 : 1) & 1)}`;
   }
      iconlogoutw = subbasketballplayerj.includes(`${r_positionE}`);
   while (1 < (1 << (Math.min(3, stationz.length))) && (rewindp.length << (Math.min(Math.abs(1), 4))) < 4) {
      rewindp += `${subbasketballplayerj.length | rewindp.length}`;
      break;
   }
   let borderless1 = 6394207 <= rewindp.length;
   do {
      rewindp += `${(mappinge == String.fromCharCode(82,0) ? minivodu.length : mappinge.length)}`;
      if (borderless1) {
         break;
      }
   } while (borderless1 && (minivodu != String.fromCharCode(90,0)));
      minivodu = `${minivodu.length}`;

    setRefreshing(true);

   let overlay0 = minivodu == String.fromCharCode(111,115,103,0);
   do {
      minivodu = `${turndownW.length << (Math.min(minivodu.length, 4))}`;
      if (overlay0) {
         break;
      }
   } while (((codeM & 5) == 1) && overlay0);
       let foundE = 3.0;
         foundE += parseInt(`${foundE}`);
         foundE -= parseInt(`${foundE}`) >> (Math.min(Math.abs(parseInt(`${foundE}`)), 5));
         foundE -= 1;
      subbasketballplayerj = `${parseInt(`${foundE}`) << (Math.min(2, Math.abs(1)))}`;
   let refreshborderlessJ = 9289238 <= yellowscoreballp.size;
   do {
      yellowscoreballp.set(minivodu, 3 * minivodu.length);
      if (refreshborderlessJ) {
         break;
      }
   } while (refreshborderlessJ && (yellowscoreballp.size > 4));
   while (loginv != mappinge) {
      mappinge = `${codeM}`;
      break;
   }
      iconlogoutw = turndownW == String.fromCharCode(107,0);
      r_positionE = (((!redscoreballW ? 66 : mappinge.length) << (Math.min(mappinge.length, 3))) >= 66);
   for (let b = 0; b < 2; b++) {
      redscoreballW = rewindp.length >= 33;
   }
      yellowscoreballp.set(minivodu, (minivodu == String.fromCharCode(48,0) ? (redscoreballW ? 1 : 4) : minivodu.length));
   for (let m = 0; m < 1; m++) {
      redscoreballW = 23 <= codeM || yellowscoreballp.size <= 23;
   }
   while (loginv != String.fromCharCode(78,0)) {
      turndownW = `${((redscoreballW ? 1 : 1) - (r_positionE ? 2 : 3))}`;
      break;
   }
   while (yellowscoreballp.size <= 3) {
       let main_rm: Map<any, any> = new Map([[String.fromCharCode(117,95,57,53,95,102,97,99,116,111,114,0),152], [String.fromCharCode(117,95,55,95,115,109,117,115,104,0),302]]);
         main_rm = new Map([[`${main_rm.size}`, main_rm.size & 3]]);
         main_rm = new Map([[`${main_rm.size}`, 2 >> (Math.min(1, Math.abs(main_rm.size)))]]);
          let googler = String.fromCharCode(108,95,50,95,100,101,112,114,101,99,105,97,116,101,100,104,0);
         main_rm = new Map([[`${main_rm.size}`, 2]]);
         googler += `${googler.length | 3}`;
      yellowscoreballp.set(turndownW, 1 | subbasketballplayerj.length);
      break;
   }
   while (stationz.length < 1 || 5 < (1 | stationz.length)) {
       let bellreminderq = String.fromCharCode(97,110,111,110,121,109,111,117,115,95,122,95,54,48,0);
       let mutedL: Array<any> = [371, 358];
       let distm = 4.0;
       let currentu = 4.0;
       let videovarg: Array<any> = [851, 270, 506];
          let iconviewergif1 = String.fromCharCode(114,101,116,117,114,110,115,95,55,95,56,50,0);
          let point6 = 4.0;
         mutedL.push((bellreminderq == String.fromCharCode(86,0) ? iconviewergif1.length : bellreminderq.length));
         iconviewergif1 = `${parseInt(`${point6}`)}`;
      if ((mutedL.length % (Math.max(3, 8))) > 4 && (3 % (Math.max(5, bellreminderq.length))) > 3) {
          let catalogE: Array<any> = [16, 830, 734];
          let typing3 = 2;
          let sliderv: Map<any, any> = new Map([[String.fromCharCode(115,101,110,100,101,114,115,95,113,95,52,53,0),458], [String.fromCharCode(98,95,52,56,95,114,101,97,108,105,102,121,0),903], [String.fromCharCode(101,118,105,99,101,95,114,95,56,0),234]]);
         mutedL = [1];
         catalogE = [1 >> (Math.min(4, Math.abs(sliderv.size)))];
         typing3 |= 3 << (Math.min(2, Math.abs(typing3)));
         sliderv.set(`${typing3}`, 2 - catalogE.length);
      }
         bellreminderq += `${bellreminderq.length - mutedL.length}`;
          let cnewsm = String.fromCharCode(97,95,57,49,95,103,114,111,117,110,100,0);
          let shirt5 = String.fromCharCode(108,95,53,52,95,99,108,111,115,117,114,101,0);
         videovarg.push(1);
         cnewsm = `${(String.fromCharCode(87,0) == shirt5 ? cnewsm.length : shirt5.length)}`;
         distm *= 3;
         mutedL = [3];
         currentu *= parseFloat(`${mutedL.length}`);
      for (let d = 0; d < 2; d++) {
          let iconstarH: Map<any, any> = new Map([[String.fromCharCode(104,105,103,104,108,105,103,104,116,97,98,108,101,95,100,95,49,53,0),true ], [String.fromCharCode(101,95,50,56,95,99,116,105,109,101,115,116,97,109,112,0),false ]]);
         mutedL.push(parseInt(`${distm}`) - 2);
         iconstarH = new Map([[`${iconstarH.size}`, iconstarH.size % 3]]);
      }
         currentu -= parseFloat(`${mutedL.length * 1}`);
      for (let h = 0; h < 2; h++) {
         mutedL = [videovarg.length];
      }
         bellreminderq += "2";
      let upgradeb = mutedL.length >= 6331958;
      do {
         mutedL = [mutedL.length];
         if (upgradeb) {
            break;
         }
      } while ((4 > (bellreminderq.length >> (Math.min(Math.abs(1), 2))) && (mutedL.length >> (Math.min(bellreminderq.length, 3))) > 1) && upgradeb);
         distm *= (bellreminderq == String.fromCharCode(53,0) ? parseInt(`${currentu}`) : bellreminderq.length);
         mutedL.push(videovarg.length);
      while ((currentu + distm) > 5.67 || (5.67 + currentu) > 3.34) {
          let stylec = String.fromCharCode(105,95,49,51,95,116,101,108,101,109,101,116,114,121,0);
          let imagenomoredataF = 3;
          let headerz = 3;
         currentu += parseFloat(`${videovarg.length}`);
         stylec = `${(stylec == String.fromCharCode(116,0) ? headerz : stylec.length)}`;
         imagenomoredataF >>= Math.min(Math.abs((String.fromCharCode(55,0) == stylec ? stylec.length : imagenomoredataF)), 3);
         headerz *= imagenomoredataF & 1;
         break;
      }
      stationz.push(videovarg.length);
      break;
   }
      codeM *= 1 + rewindp.length;
    await refreshUserState();

      redscoreballW = rewindp.length >= 26;
   if (2 >= rewindp.length) {
      rewindp = `${((iconlogoutw ? 3 : 1) >> (Math.min(Math.abs(1), 2)))}`;
   }
      stationz.push(3);
       let build0 = String.fromCharCode(112,95,49,95,108,109,100,98,0);
       let disconnected_ = 2.0;
       let arrowupQ: Array<any> = [11, 488];
      let mbbidq = disconnected_ <= 7395807.0;
      do {
         disconnected_ /= Math.max(5, 1);
         if (mbbidq) {
            break;
         }
      } while (mbbidq && (build0.length >= 1));
         arrowupQ.push(parseInt(`${disconnected_}`));
      let giflivestreamingy = arrowupQ.length <= 5184309;
      do {
         arrowupQ = [arrowupQ.length];
         if (giflivestreamingy) {
            break;
         }
      } while (giflivestreamingy && ((arrowupQ.length * build0.length) < 3 && 3 < (build0.length * arrowupQ.length)));
          let scrollview_ = 1.0;
         disconnected_ *= parseInt(`${scrollview_}`);
      for (let u = 0; u < 3; u++) {
         disconnected_ *= arrowupQ.length;
      }
         disconnected_ -= arrowupQ.length;
      if (!arrowupQ.includes(disconnected_)) {
          let statisticsinactiveO = 1.0;
          let greye: Map<any, any> = new Map([[String.fromCharCode(111,119,110,101,100,95,56,95,56,56,0),true ], [String.fromCharCode(97,115,115,105,103,110,101,100,95,109,95,54,48,0),false ], [String.fromCharCode(115,101,99,116,111,114,95,52,95,51,50,0),false ]]);
         disconnected_ -= 2;
         statisticsinactiveO -= parseInt(`${statisticsinactiveO}`);
         greye.set(`${statisticsinactiveO}`, greye.size * 3);
      }
         arrowupQ.push(build0.length & parseInt(`${disconnected_}`));
      let graphicsl = arrowupQ.length <= 9148857;
      do {
          let sliderF = 5.0;
          let videocommonV: Array<any> = [17, 202];
          let topicx = String.fromCharCode(117,95,54,55,95,114,101,103,105,115,116,101,114,101,114,0);
          let styles6 = 2;
         arrowupQ = [2];
         sliderF /= Math.max(3, parseInt(`${sliderF}`) & videocommonV.length);
         videocommonV.push(styles6);
         topicx += `${topicx.length}`;
         styles6 /= Math.max(1, parseInt(`${sliderF}`));
         if (graphicsl) {
            break;
         }
      } while ((4.51 <= (disconnected_ * arrowupQ.length) || (1 + arrowupQ.length) <= 3) && graphicsl);
      yellowscoreballp.set(turndownW, 2 & turndownW.length);
   if (!r_positionE) {
       let collectiony = String.fromCharCode(105,109,112,108,105,99,105,116,95,118,95,48,0);
       let dropdownJ = 0;
       let libturbomodulejsijnit = 3.0;
       let shareblacka = String.fromCharCode(110,111,110,110,117,108,108,115,99,104,101,109,101,115,95,115,95,51,53,0);
       let path6 = false;
         libturbomodulejsijnit -= 3 ^ shareblacka.length;
          let mimoR = false;
         libturbomodulejsijnit /= Math.max(3, (collectiony.length >> (Math.min(3, Math.abs((path6 ? 5 : 5))))));
         mimoR = (!mimoR ? mimoR : !mimoR);
      if (1 > dropdownJ) {
         dropdownJ ^= shareblacka.length >> (Math.min(Math.abs(1), 3));
      }
          let animationsz = 2.0;
         path6 = !path6;
         animationsz *= parseFloat(`${parseInt(`${animationsz}`)}`);
         shareblacka = `${collectiony.length | 3}`;
      if ((libturbomodulejsijnit + 1.23) == 2.80) {
         libturbomodulejsijnit -= collectiony.length | dropdownJ;
      }
      let l_lock5 = collectiony.length >= 5248350;
      do {
         collectiony += `${parseInt(`${libturbomodulejsijnit}`)}`;
         if (l_lock5) {
            break;
         }
      } while (l_lock5 && (collectiony.startsWith(shareblacka)));
      if ((dropdownJ % (Math.max(shareblacka.length, 10))) > 4 || 4 > (4 % (Math.max(9, dropdownJ)))) {
         dropdownJ <<= Math.min(parseInt(`${Math.abs(((path6 ? 1 : 4) << (Math.min(Math.abs(1), 2))))}`), 5);
      }
      if ((dropdownJ * libturbomodulejsijnit) < 5.44) {
          let yellow_ = String.fromCharCode(100,101,102,97,117,108,116,95,121,95,50,50,0);
          let sportv = String.fromCharCode(111,99,116,112,111,105,110,116,95,104,95,53,0);
          let qaag5 = 3.0;
          let m_viewf = 2.0;
          let gifgoal9 = 3.0;
         libturbomodulejsijnit *= parseInt(`${libturbomodulejsijnit}`);
         yellow_ = `${1 + parseInt(`${m_viewf}`)}`;
         sportv += `${yellow_.length}`;
         qaag5 -= parseInt(`${m_viewf}`);
         gifgoal9 /= Math.max(4, parseInt(`${qaag5}`));
      }
         collectiony += "3";
          let gradle6: Map<any, any> = new Map([[String.fromCharCode(100,95,55,53,95,109,105,110,117,116,101,0),false ], [String.fromCharCode(98,95,55,54,95,117,109,98,101,114,0),false ]]);
         shareblacka = `${dropdownJ + 3}`;
         gradle6 = new Map([[`${gradle6.size}`, 3 ^ gradle6.size]]);
      let readQ = path6 ? !path6 : path6;
      do {
         path6 = dropdownJ <= shareblacka.length;
         if (readQ) {
            break;
         }
      } while (((2 | dropdownJ) >= 1) && readQ);
      let videovarB = dropdownJ >= 8944377;
      do {
         dropdownJ ^= collectiony.length;
         if (videovarB) {
            break;
         }
      } while ((dropdownJ > 2) && videovarB);
         libturbomodulejsijnit *= parseInt(`${libturbomodulejsijnit}`);
      for (let g = 0; g < 2; g++) {
          let dangerR = 0.0;
          let gradlewc = String.fromCharCode(106,95,50,54,95,112,114,111,99,101,115,115,111,114,0);
          let code8 = 1.0;
         libturbomodulejsijnit *= 1 + parseInt(`${code8}`);
         dangerR += gradlewc.length;
         gradlewc = `${(gradlewc == String.fromCharCode(54,0) ? gradlewc.length : parseInt(`${dangerR}`))}`;
         code8 *= 2;
      }
      minivodu += `${subbasketballplayerj.length << (Math.min(Math.abs(2), 3))}`;
   }
   for (let p = 0; p < 1; p++) {
      mappinge = `${minivodu.length / 3}`;
   }
       let dependencyN = String.fromCharCode(106,118,101,114,115,105,111,110,95,98,95,57,51,0);
       let libavcodecG = 0.0;
         dependencyN = `${dependencyN.length}`;
      let membership7 = dependencyN == String.fromCharCode(98,105,116,56,54,118,52,101,0);
      do {
         dependencyN += `${dependencyN.length | 1}`;
         if (membership7) {
            break;
         }
      } while ((3.79 == (4.85 - libavcodecG)) && membership7);
      let routerI = 9883155 >= dependencyN.length;
      do {
          let mountingP = String.fromCharCode(98,97,115,101,100,95,116,95,55,55,0);
         dependencyN = "2";
         mountingP += `${1 << (Math.min(2, mountingP.length))}`;
         if (routerI) {
            break;
         }
      } while (routerI && ((2 >> (Math.min(1, dependencyN.length))) == 2 && (2 / (Math.max(7, parseInt(`${libavcodecG}`)))) == 4));
         dependencyN += `${parseInt(`${libavcodecG}`) + dependencyN.length}`;
      if (parseInt(`${libavcodecG}`) <= dependencyN.length) {
          let penaltyshoot1 = String.fromCharCode(115,95,56,48,95,102,101,116,99,104,105,110,103,0);
         libavcodecG += parseFloat(`${penaltyshoot1.length}`);
      }
         libavcodecG /= Math.max(2, parseFloat(`${dependencyN.length}`));
      loginv = `${3 ^ vietnamC}`;
      subbasketballplayerj = "2";
   let club5 = String.fromCharCode(54,113,52,0) == minivodu;
   do {
       let inviteX = 3.0;
       let whatsappP = 4;
      if (whatsappP == 5) {
         inviteX -= parseFloat(`${3 & whatsappP}`);
      }
      let attributedstringR = 6437951.0 <= inviteX;
      do {
          let p_viewh: Map<any, any> = new Map([[String.fromCharCode(101,120,104,97,117,115,116,101,100,95,49,95,50,54,0),false ], [String.fromCharCode(112,108,97,121,97,98,108,101,95,118,95,52,57,0),false ], [String.fromCharCode(108,95,50,95,103,108,111,98,97,108,115,0),false ]]);
          let rootJ = 5.0;
          let teamR = String.fromCharCode(121,95,52,52,95,105,110,105,116,105,97,108,105,122,105,110,103,0);
          let exampleimageH = String.fromCharCode(108,105,98,115,119,115,99,97,108,101,95,98,95,56,56,0);
          let pointa = String.fromCharCode(115,95,56,54,95,114,97,105,115,101,0);
         inviteX += parseFloat(`${1 - pointa.length}`);
         p_viewh.set(`${rootJ}`, 3 | parseInt(`${rootJ}`));
         teamR += "1";
         exampleimageH += `${teamR.length * p_viewh.size}`;
         pointa = `${p_viewh.size & 2}`;
         if (attributedstringR) {
            break;
         }
      } while ((whatsappP >= 3) && attributedstringR);
      if (2.85 < inviteX) {
          let configu = String.fromCharCode(122,95,49,54,95,117,109,98,114,101,108,108,97,0);
         inviteX /= Math.max(2, parseFloat(`${3}`));
         configu += `${configu.length}`;
      }
       let basketballplayerplaceholderJ = String.fromCharCode(115,121,110,116,104,101,115,105,115,95,106,95,51,55,0);
          let filedW = String.fromCharCode(105,109,112,111,114,116,97,110,116,95,49,95,49,56,0);
         whatsappP %= Math.max(whatsappP >> (Math.min(1, Math.abs(2))), 1);
         filedW += `${filedW.length}`;
      for (let t = 0; t < 1; t++) {
         whatsappP >>= Math.min(4, Math.abs(basketballplayerplaceholderJ.length << (Math.min(Math.abs(2), 3))));
      }
      minivodu = `${((r_positionE ? 5 : 3) << (Math.min(Math.abs((iconlogoutw ? 5 : 2)), 2)))}`;
      if (club5) {
         break;
      }
   } while (club5 && (!iconlogoutw));
       let downloadedr = 4.0;
          let dplusL = 4;
          let const_6f = false;
          let telemetryS = 1.0;
         downloadedr -= 2 * parseInt(`${telemetryS}`);
         dplusL |= ((const_6f ? 5 : 2) % (Math.max(dplusL, 2)));
         const_6f = !const_6f;
         telemetryS *= 1;
         downloadedr += 3 - parseInt(`${downloadedr}`);
      while (4.60 == (downloadedr + 5.10)) {
         downloadedr *= 3;
         break;
      }
      yellowscoreballp = new Map([[loginv, loginv.length]]);
   for (let i = 0; i < 3; i++) {
      r_positionE = rewindp == String.fromCharCode(71,0);
   }
      codeM *= rewindp.length << (Math.min(Math.abs(3), 4));
       let awayt = String.fromCharCode(114,101,99,101,105,112,116,115,95,53,95,57,49,0);
      for (let k = 0; k < 1; k++) {
          let typingw = 5;
          let themeu = 1.0;
          let backiconmasky = String.fromCharCode(115,95,52,49,95,100,101,99,111,109,112,0);
          let nalyticsj: Map<any, any> = new Map([[String.fromCharCode(108,95,53,54,95,115,116,105,99,107,101,114,115,0),String.fromCharCode(108,95,54,95,100,101,99,111,100,101,114,116,104,114,101,97,100,105,110,103,0)], [String.fromCharCode(108,111,116,116,105,101,107,101,121,112,97,116,104,95,117,95,52,51,0),String.fromCharCode(120,95,56,49,95,103,114,101,101,116,105,110,103,0)], [String.fromCharCode(107,95,50,95,102,97,116,101,0),String.fromCharCode(108,97,116,101,114,95,54,95,57,51,0)]]);
          let middlez = 2.0;
         awayt = `${awayt.length}`;
         typingw <<= Math.min(Math.abs(typingw * 1), 4);
         themeu += typingw | nalyticsj.size;
         backiconmasky += "3";
         nalyticsj = new Map([[`${themeu}`, parseInt(`${themeu}`)]]);
         middlez -= parseInt(`${middlez}`);
      }
      let sort5 = awayt == String.fromCharCode(105,53,115,114,53,55,53,101,120,0);
      do {
         awayt = `${awayt.length}`;
         if (sort5) {
            break;
         }
      } while ((awayt.length >= awayt.length) && sort5);
      while (awayt == String.fromCharCode(84,0)) {
         awayt = `${3 / (Math.max(1, awayt.length))}`;
         break;
      }
      iconlogoutw = turndownW.length == loginv.length;
    setRefreshing(false);
  };

  const insets = useSafeAreaInsets();

  useEffect(() => {
    const unsubscribe = navigation.addListener("blur", () => {
      
      dispatch(hideBottomSheetAction());
    });
    return unsubscribe;
  }, [navigator]);

  useFocusEffect(
    useCallback(() => {
      Orientation.lockToPortrait();
      return () => {
        
      };
    }, [])
  );

  
  
  
  
  const escapeRegExp = (string: string) => {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  };
  const highlightText = (text: string, keyword: string) => {
    
    const escapedKeyword = escapeRegExp(keyword);
    const parts = text.split(new RegExp(`(${escapedKeyword})`, "gi"));
    return parts.map((part, index) =>
      part.toLowerCase() === keyword.toLowerCase() ? (
        <Text
          key={index}
          style={{ ...textVariants.body, color: colors.primary, fontSize: 15 }}
        >
          {part}
        </Text>
      ) : (
        <Text
          key={index}
          style={{ ...textVariants.body, color: "#FFF0CA", fontSize: 15 }}
        >
          {part}
        </Text>
      )
    );
  };

  useEffect(() => {
    let date = new Date(Number(userState.user?.userMemberExpired ?? '0') * 1000); 
    
    let year = date.getFullYear();
    let month = date.getMonth() + 1; 
    let day = date.getDate();
    setDisplayedDate(`${year}年${month}月${day}日`);
  }, [userState.user?.userMemberExpired]);

  return (
    <>
      <View style={{ paddingTop: insets.top }}>
        {/* <ScreenContainer> */}
        {/* <SafeAreaView> */}
        <ScrollView
          style={{ paddingHorizontal: 15 }}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={handleRefresh}
              tintColor="#FAC33D"
            />
          }
        >
          <View style={{ ...styles.topNav }}>
            <Text
              style={{
                ...textVariants.bigHeader,
                color: colors.text,
                fontSize: 22,
              }}
            >
              我的
            </Text>
            {/* <TouchableOpacity onPress={() => dispatch(toggleTheme(!themeReducer.theme))}>
                      {
                          themeReducer.theme
                              ? <LightMode color={icons.iconColor} height={26} width={26} />
                              : <DarkMode color={icons.iconColor}  height={26} width={26} />

                      }
                  </TouchableOpacity> */}
          </View>
          { }
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => {
              if (!yysIconstar.isLogin(userState.user)) {
                dispatch(showLoginAction());
                
                
                
              } else {
                navigation.navigate("个人中心");
              }
            }}
          >
            <View
              style={{
                paddingTop: 20,
                paddingBottom: 10,
                flexDirection: "row",
              }}
            >
              {!yysIconstar.isLogin(userState.user) ? (
                <ProfileSvg
                  style={{ color: colors.button, width: 18, height: 18 }}
                />
              ) : (
                <FastImage
                  style={{
                    height: 60,
                    width: 60,
                    marginVertical: 2,
                  }}
                  resizeMode={"contain"}
                  source={require("../../../../static/images/loadingspinnerPlaylist.png")}
                />
              )}
              <View
                style={{
                  flexDirection: "column",
                  flex: 1,
                  gap: 5,
                  justifyContent: "center",
                  paddingLeft: 12,
                }}
              >
                {!yysIconstar.isLogin(userState.user) && (
                  <>
                    <Text style={{ color: "#ffffff", fontSize: 20 }}>
                      游客您好！
                    </Text>
                    <Text style={{ color: "#ffffff", fontSize: 14 }}>
                      登录可享更多服务
                    </Text>
                  </>
                )}
                {!yysIconstar.isLogin(userState.user) && (
                  <>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        paddingRight: 30,
                      }}
                    >
                      <Text
                        style={{
                          color: "#ffffff",
                          fontSize: 20,
                        }}
                        numberOfLines={1}
                        ellipsizeMode="tail"
                      >
                        {userState.user?.userName}
                      </Text>
                      {yysIconstar.isVip(userState.user) && (
                        <Image
                          style={styles.iconStyle}
                          source={require("../../../../static/images/profile/flipperHomeloadingShared.png")}
                        />
                      )}
                    </View>

                    {/* {userState.userMemberExpired == '0' && (
                      <Text style={{fontSize: 14}}>VIP会员已经到期</Text>
                    )} */}
                    {/* {userState.userMemberExpired >=
                      userState.userCurrentTimestamp && (
                        <Text style={{ color: colors.primary, fontSize: 14 }}>
                          VIP会员有效日期至{displayedDate}
                        </Text>
                      )} */}
                  </>
                )}
              </View>

              <View
                style={{
                  justifyContent: "center",
                }}
              >
                {!yysIconstar.isLogin(userState.user) && (
                  <MoreArrowSvg
                    width={icons.sizes.l}
                    height={icons.sizes.l}
                    color={colors.muted}
                  />
                )}

                {yysIconstar.isLogin(userState.user) && (
                  <EditIcn width={29} height={29} color={colors.muted} />
                )}
              </View>
            </View>
          </TouchableOpacity>

          <View style={{ marginBottom: -30, flex: 3, paddingBottom: 120 }}>
            {Platform.OS === "ios" ||
              (SHOW_ZF_CONST && (
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-evenly",
                    gap: 10,
                  }}
                >
                  <TouchableOpacity
                    style={{
                      ...styles.btn,
                      backgroundColor: "#2d2e30",
                      flex: 1,
                    }}
                    onPress={() => {
                      navigation.navigate("付费VIP");
                      
                      
                      
                      
                      
                      
                      
                    }}
                  >
                    <View style={styles.left}>
                      <View style={styles.icon}>
                        <VipIconSvg width={icons.sizes.l} height={icons.sizes.l} />
                      </View>
                      <View style={{ gap: 5 }}>
                        <Text
                          style={{
                            ...textVariants.body,
                          }}
                        >
                          {highlightText(
                            yysFloaterIconsubssuccess.instance.showBecomeVip
                              ? "成为VIP"
                              : "付费VIP",
                            ""
                          )}
                        </Text>

                        {yysFloaterIconsubssuccess.instance.tabConfig != null &&
                          yysFloaterIconsubssuccess.instance.len == 5 ? (
                          <Text
                            style={{
                              ...textVariants.small,
                              color: colors.button,
                            }}
                          >
                            去广告 看体育直播
                          </Text>
                        ) : (
                          <Text
                            style={{
                              ...textVariants.small,
                              color: colors.button,
                            }}
                          >
                            去广告
                          </Text>
                        )}
                      </View>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      ...styles.btn,
                      backgroundColor: "#2d2e30",
                      flex: 1,
                    }}
                    onPress={() => {
                      navigation.navigate("邀请");
                    }}
                  >
                    <View style={styles.left}>
                      <View style={styles.icon}>
                        <AddSvg width={icons.sizes.l} height={icons.sizes.l} />
                      </View>
                      <View style={{ gap: 5 }}>
                        <Text
                          style={{
                            ...textVariants.body,
                          }}
                        >
                          {highlightText("邀请好友", "")}
                        </Text>
                        <Text
                          style={{
                            ...textVariants.small,
                            color: colors.button,
                          }}
                        >
                          VIP奖励 享更多权益
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              ))}

            {Platform.OS === "android" && !SHOW_ZF_CONST && (
              <TouchableOpacity
                style={{
                  ...styles.btn,
                  backgroundColor: "#2d2e30",
                }}
                onPress={() => {
                  navigation.navigate("邀请");
                }}
              >
                <View style={styles.left}>
                  <View style={styles.icon}>
                    <VipIconSvg width={icons.sizes.l} height={icons.sizes.l} />
                  </View>

                  <Text
                    style={{
                      ...textVariants.body,
                    }}
                  >
                    {highlightText("邀请好友获得VIP奖励，享更多权益", "VIP")}
                  </Text>
                </View>

                <VipArrowSvg
                  width={icons.sizes.l}
                  height={icons.sizes.l}
                  color={colors.muted}
                />
              </TouchableOpacity>
            )}

            <ShowMoreButton
              text="我的收藏"
              leftIcon={<CollectionSvg style={{ color: colors.button }} />}
              onPress={() => navigation.navigate("我的收藏")}
            />
            {/* <ShowMoreButton
              text="我的下载"
              leftIcon={<DownloadIcon style={{color: colors.button}} />}
              onPress={() => setIsDialogOpen(true)}
            /> */}
            {/* <ShowMoreButton
              text="播放历史"
              leftIcon={<HistoryIcon style={{ color: colors.button }} />}
              onPress={() => navigation.navigate("播放历史")}
            /> */}
            <ShowMoreButton
              text="我要反馈"
              leftIcon={<FeedbackSvg style={{ color: colors.button }} />}
              onPress={() => navigation.navigate("反馈")}
            />
            <ShowMoreButton
              text="设置"
              leftIcon={<SettingsSvg style={{ color: colors.button }} />}
              onPress={() => navigation.navigate("设置")}
            />
            <ShowMoreButton
              text="关于我们"
              leftIcon={<InfoSvg style={{ color: colors.button }} />}
              onPress={() => navigation.navigate("关于我们")}
            />
            {/* <TouchableOpacity
              style={{
                ...styles.btn,
                backgroundColor: '#2b271e',
              }}
              onPress={() => setIsDialogOpen(true)}>
              <View style={styles.left}>
                <View style={{...styles.icon, paddingTop: 2}}>
                  <UpgradeIcon />
                </View>

                <Text
                  style={{
                    ...textVariants.body,
                    color: colors.primary,
                  }}>
                  一键升级至影视TV Pro
                </Text>
              </View>

              <RightArrow
                width={icons.sizes.l}
                height={icons.sizes.l}
                color={colors.muted}
              />
            </TouchableOpacity> */}
            {/* <ShowMoreButton text='分享App' disabled={true} leftIcon={<ShareIcon style={{ color: colors.button }} />} /> */}
          </View>

          <NotificationModal
            onConfirm={toggleOverlay}
            isVisible={isDialogOpen}
            title="功能尚未开放"
            subtitle1=""
            subtitle2=""
            subtitle3=""
          />
        </ScrollView>
        {/* </SafeAreaView> */}
        {/* </ScreenContainer> */}
      </View>
    </>
  );
}

export default memo(Profile);

const styles = StyleSheet.create({
  topNav: {
    paddingTop: 8,
    display: "flex",
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  icon: {
    marginRight: 10,
    height: 24,
    width: 24,
  },
  left: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  btn: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: 15,
    paddingLeft: 15,
    paddingTop: 15,
    paddingBottom: 15,
    width: "100%",
    borderRadius: 10,
    marginTop: 20,
  },
  highlightColor: {
    color: "#FAC33D", 
  },
  iconStyle: {
    height: 22,
    width: 22,
    marginLeft: 5,
  },
});
