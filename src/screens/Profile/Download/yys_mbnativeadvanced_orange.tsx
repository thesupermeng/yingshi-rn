import { RootStackScreenProps } from "@type/yys_settings"
import ScreenContainer from "../../../components/container/yys_executor_expand"
import TitleWithBackButtonHeader from "../../../components/header/yys_anner_header"
import { FlatList, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { useCallback, useState } from "react"
import { useTheme } from "@react-navigation/native"
import { useAppDispatch, useAppSelector } from "@hooks/yys_frame"
import { yys_MintegralLibavdevice } from "@redux/yys_sport_shrink"
import { yys_LibsgcorePath } from "@type/yys_fast"
import EmptyList from "../../../components/common/yys_goal_utils"
import DownloadVodCard from "../../../components/download/yys_dark"
import CheckBoxSelected from "@static/images/progressChina.svg";
import CheckBoxUnselected from "@static/images/targetFeedback.svg";
import { yys_Bing } from "@type/yys_libzeus"
import ConfirmationModal from "../../../components/modal/yys_shrink_reactnativejs"
import { Button } from "@rneui/themed"
import { removeVodFromDownloadThunk } from "@redux/actions/yys_root_models"

const DownloadCatalog = ({ navigation }: RootStackScreenProps<"我的下载">) => {
  const { colors, textVariants, icons, spacing } = useTheme();
  const [isEditing, setIsEditing] = useState(false);
  const [removeHistory, setRemoveHistory] = useState<yys_Bing[]>([]);
  const allDownloads = useAppSelector(({downloadVideoReducer}: yys_MintegralLibavdevice) => downloadVideoReducer.downloads)
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const dispatch = useAppDispatch();


  const toggleHistory = (vod: yys_Bing) => {
    const filtered = removeHistory.filter((x) => x.vod_id !== vod.vod_id);
    if (filtered.length === removeHistory.length) {
      setRemoveHistory([vod, ...removeHistory]);
    } else {
      setRemoveHistory(filtered);
    }
  };

  const toggleOverlay = useCallback(() => {
       let tooltipsD = 0.0;
    let v_lockH = String.fromCharCode(116,104,114,101,115,104,111,108,100,101,100,95,51,95,52,57,0);
    let default_d5l = String.fromCharCode(99,95,52,95,116,101,120,116,117,114,101,100,115,112,0);
    let notificationH = String.fromCharCode(116,114,97,105,108,95,98,95,57,49,0);
    let privacyd = 3.0;
    let sortE = 3.0;
    let textlayoutmanagerp = 5;
    let tickz = 5.0;
    let selectionk = 4.0;
    let dicee = false;
    let optionsY = String.fromCharCode(101,95,51,57,95,115,112,97,110,115,0);
    let libcrashsdk7 = String.fromCharCode(104,95,54,48,95,107,105,116,116,121,0);
    let zoomH = 3.0;
    let debugW = 1.0;
    let latnP = String.fromCharCode(118,97,114,105,97,98,108,101,115,95,110,95,52,54,0);
    let blackK = String.fromCharCode(109,112,101,103,118,105,100,101,111,100,97,116,97,95,112,95,56,53,0);
   for (let w = 0; w < 3; w++) {
       let stringL: Map<any, any> = new Map([[String.fromCharCode(105,100,115,95,52,95,49,48,0),true ], [String.fromCharCode(106,95,55,48,95,102,97,116,97,108,0),false ], [String.fromCharCode(97,109,112,108,105,102,121,95,105,95,53,50,0),false ]]);
       let stationC = false;
       let screenS = 0.0;
       let actionz = 4.0;
      for (let z = 0; z < 1; z++) {
         screenS += ((stationC ? 2 : 2) + parseInt(`${screenS}`));
      }
      for (let g = 0; g < 2; g++) {
          let main_zd = String.fromCharCode(100,95,51,53,95,109,97,106,0);
          let reactnativejs2 = 1.0;
          let nativemodulea: Array<any> = [789, 932, 375];
          let listE: Map<any, any> = new Map([[String.fromCharCode(106,95,48,95,112,97,114,116,105,99,108,101,115,0),569], [String.fromCharCode(97,95,55,52,95,115,116,114,105,107,101,116,104,114,111,117,103,104,0),270]]);
          let configuren = 5.0;
         actionz /= Math.max(3, parseFloat(`${stringL.size >> (Math.min(Math.abs(2), 1))}`));
         main_zd += "1";
         reactnativejs2 *= parseFloat(`${main_zd.length / (Math.max(2, parseInt(`${configuren}`)))}`);
         nativemodulea = [nativemodulea.length % (Math.max(3, 7))];
         listE.set(`${reactnativejs2}`, 1 + parseInt(`${reactnativejs2}`));
         configuren *= parseFloat(`${parseInt(`${configuren}`) % 3}`);
      }
      let libyogaF = stringL.size <= 9031038;
      do {
         stringL = new Map([[`${stringL.size}`, stringL.size]]);
         if (libyogaF) {
            break;
         }
      } while ((1.15 > (parseFloat(`${stringL.size}`) * actionz) && 1.15 > (actionz * parseFloat(`${stringL.size}`))) && libyogaF);
      if (5.31 >= actionz) {
         screenS *= 3 % (Math.max(parseInt(`${screenS}`), 4));
      }
          let reactnativejsF = 1;
          let time_kw: Array<any> = [String.fromCharCode(112,111,115,116,115,99,97,108,101,95,110,95,53,54,0), String.fromCharCode(101,103,119,105,116,95,57,95,50,0), String.fromCharCode(97,103,103,114,101,103,97,116,101,115,95,115,95,56,48,0)];
          let corey: Map<any, any> = new Map([[String.fromCharCode(114,101,99,111,109,112,117,116,101,95,117,95,53,53,0),true ], [String.fromCharCode(119,101,105,95,109,95,50,55,0),true ]]);
         stringL = new Map([[`${stationC}`, (parseInt(`${screenS}`) + (stationC ? 3 : 1))]]);
         reactnativejsF %= Math.max(3, reactnativejsF & corey.size);
         time_kw.push(3);
         corey.set(`${reactnativejsF}`, time_kw.length / 3);
         screenS *= parseInt(`${actionz}`);
      if ((screenS / (Math.max(5.41, 2))) <= 3.23) {
          let rewindc = String.fromCharCode(118,116,97,115,107,113,117,101,117,101,95,97,95,53,49,0);
          let humidityw = String.fromCharCode(114,95,53,49,95,97,112,112,114,101,99,105,97,116,101,100,104,0);
          let shootJ = 5.0;
         screenS += humidityw.length;
         rewindc += `${(rewindc == String.fromCharCode(48,0) ? rewindc.length : parseInt(`${shootJ}`))}`;
         humidityw += `${rewindc.length}`;
         shootJ -= rewindc.length | parseInt(`${shootJ}`);
      }
         stringL = new Map([[`${screenS}`, parseInt(`${actionz}`)]]);
          let buildT = false;
          let holderl = 5;
          let historyp = 1.0;
         screenS /= Math.max(2, 3 / (Math.max(parseInt(`${screenS}`), 9)));
         buildT = 44.35 <= historyp && !buildT;
         holderl >>= Math.min(5, parseInt(`${Math.abs(((buildT ? 3 : 5) / (Math.max(holderl, 5))))}`));
         historyp /= Math.max((parseFloat(`${(buildT ? 4 : 3) | parseInt(`${historyp}`)}`)), 3);
         stationC = stringL.size >= 40;
      if ((actionz * 4.13) <= 1.13 || 3.21 <= (actionz * 4.13)) {
         stringL.set(`${stationC}`, 1 >> (Math.min(Math.abs(parseInt(`${actionz}`)), 1)));
      }
      while (4.47 >= (screenS / 4.56) || 5.34 >= (4.56 / (Math.max(1, screenS)))) {
         actionz += parseFloat(`${2}`);
         break;
      }
      privacyd -= parseFloat(`${1}`);
   }
       let videoh = String.fromCharCode(97,108,108,111,99,97,116,111,114,95,50,95,54,49,0);
       let libturbomodulejsijniy: Map<any, any> = new Map([[String.fromCharCode(98,95,57,55,95,112,114,111,100,117,99,116,115,0),395], [String.fromCharCode(112,97,115,112,95,54,95,49,49,0),77], [String.fromCharCode(118,95,55,55,95,114,101,112,97,105,110,116,0),341]]);
      for (let z = 0; z < 1; z++) {
         libturbomodulejsijniy = new Map([[`${libturbomodulejsijniy.size}`, (String.fromCharCode(90,0) == videoh ? videoh.length : libturbomodulejsijniy.size)]]);
      }
      if ((libturbomodulejsijniy.size | 1) < 1 || (videoh.length | 1) < 1) {
          let less4 = false;
          let graphE = String.fromCharCode(109,111,99,107,105,110,103,95,108,95,54,51,0);
          let soundx = 4.0;
          let temperatureA = true;
         videoh += "1";
         less4 = !temperatureA && graphE.length <= 54;
         graphE += `${(graphE == String.fromCharCode(103,0) ? graphE.length : parseInt(`${soundx}`))}`;
         soundx *= parseFloat(`${graphE.length}`);
      }
         libturbomodulejsijniy = new Map([[`${libturbomodulejsijniy.size}`, libturbomodulejsijniy.size / 3]]);
      for (let i = 0; i < 1; i++) {
         libturbomodulejsijniy.set(`${videoh}`, libturbomodulejsijniy.size);
      }
          let n_managero: Array<any> = [360, 264];
          let themea = String.fromCharCode(117,116,102,95,48,95,49,55,0);
         videoh += `${libturbomodulejsijniy.size % (Math.max(3, 10))}`;
         n_managero = [n_managero.length ^ themea.length];
         themea += `${n_managero.length % (Math.max(themea.length, 5))}`;
         videoh = `${videoh.length | 3}`;
      v_lockH += `${parseInt(`${tickz}`) << (Math.min(Math.abs(2), 2))}`;
   for (let c = 0; c < 3; c++) {
       let expiredd = true;
       let matchesl = String.fromCharCode(101,118,97,115,97,112,112,95,100,95,55,57,0);
       let fastforwardz = String.fromCharCode(109,95,57,57,95,119,105,108,100,99,97,114,100,0);
      if (fastforwardz.startsWith(`${expiredd}`)) {
         expiredd = fastforwardz.length >= 7;
      }
         matchesl = "2";
          let mimoI = 4.0;
          let submitH: Array<any> = [482, 688];
         matchesl = `${(fastforwardz == String.fromCharCode(54,0) ? submitH.length : fastforwardz.length)}`;
         mimoI *= parseInt(`${mimoI}`);
         submitH = [1 / (Math.max(parseInt(`${mimoI}`), 6))];
         expiredd = !expiredd;
         fastforwardz += `${1 / (Math.max(8, fastforwardz.length))}`;
          let updatesA = 0.0;
          let pangleK = String.fromCharCode(113,95,52,52,95,108,105,102,101,0);
          let carouselC = 1.0;
         matchesl += `${3 & pangleK.length}`;
         updatesA -= parseFloat(`${parseInt(`${carouselC}`)}`);
         pangleK += `${parseInt(`${carouselC}`) / 2}`;
      let strd = fastforwardz == String.fromCharCode(107,116,122,56,99,51,121,0);
      do {
         fastforwardz = `${(matchesl == String.fromCharCode(55,0) ? fastforwardz.length : matchesl.length)}`;
         if (strd) {
            break;
         }
      } while ((!matchesl.startsWith(`${fastforwardz.length}`)) && strd);
         fastforwardz = `${(String.fromCharCode(52,0) == fastforwardz ? matchesl.length : fastforwardz.length)}`;
          let libpangleflipped3: Array<any> = [337, 147, 699];
          let materialC = String.fromCharCode(104,112,105,99,95,51,95,54,48,0);
         expiredd = (materialC.length >> (Math.min(1, libpangleflipped3.length))) <= 46;
      default_d5l = `${3 << (Math.min(3, v_lockH.length))}`;
   }
   if ((notificationH.length + tooltipsD) <= 2.64 && (notificationH.length + tooltipsD) <= 2.64) {
      tooltipsD -= parseInt(`${privacyd}`);
   }
   if (libcrashsdk7.length < 5) {
      privacyd += parseFloat(`${1}`);
   }
      privacyd += parseFloat(`${2}`);
   while (5 > (notificationH.length / (Math.max(4, parseInt(`${selectionk}`)))) || 5 > (notificationH.length - 5)) {
      notificationH += `${parseInt(`${tooltipsD}`) ^ 1}`;
      break;
   }
   for (let l = 0; l < 1; l++) {
       let graphN = String.fromCharCode(100,95,51,50,95,114,101,110,100,101,114,0);
      if (graphN != graphN) {
         graphN += `${graphN.length}`;
      }
          let constantse = 2.0;
          let placeholderT: Array<any> = [488, 171, 133];
         graphN += `${2 / (Math.max(3, parseInt(`${constantse}`)))}`;
         constantse -= parseFloat(`${placeholderT.length >> (Math.min(1, placeholderT.length))}`);
         graphN = `${graphN.length}`;
      dicee = !dicee && 9.42 <= selectionk;
   }
       let emoji1: Array<any> = [877, 84];
       let sortk = 1;
      let modityO = sortk >= 6581508;
      do {
         sortk |= sortk / 1;
         if (modityO) {
            break;
         }
      } while (((sortk % (Math.max(5, emoji1.length))) == 2 && 2 == (sortk % (Math.max(5, emoji1.length)))) && modityO);
          let gradlewu: Map<any, any> = new Map([[String.fromCharCode(100,95,53,48,95,112,101,114,115,112,0),false ], [String.fromCharCode(106,95,50,95,116,97,99,107,0),false ]]);
          let moreh = 2.0;
          let bing9 = String.fromCharCode(98,105,116,114,101,97,100,101,114,95,120,95,50,48,0);
         sortk ^= bing9.length * emoji1.length;
         gradlewu.set(`${moreh}`, 3 >> (Math.min(5, Math.abs(parseInt(`${moreh}`)))));
         bing9 += `${parseInt(`${moreh}`)}`;
      while (4 < (sortk * 3) || (sortk * emoji1.length) < 3) {
         sortk -= sortk & 3;
         break;
      }
      let transferU = 6336046 <= sortk;
      do {
          let mini7 = 5;
          let internetq = String.fromCharCode(99,95,51,52,95,104,111,116,105,122,111,110,116,108,0);
          let eighteenr = String.fromCharCode(107,95,52,49,95,107,109,115,0);
          let clubP: Array<any> = [591, 639, 853];
         sortk <<= Math.min(emoji1.length, 5);
         mini7 -= mini7;
         internetq = `${2 % (Math.max(5, internetq.length))}`;
         eighteenr = "1";
         clubP = [1];
         if (transferU) {
            break;
         }
      } while (((emoji1.length << (Math.min(1, Math.abs(sortk)))) <= 1 && 3 <= (emoji1.length << (Math.min(Math.abs(1), 3)))) && transferU);
      let final_k_ = emoji1.length <= 6502502;
      do {
          let combinedy = false;
          let sinas = true;
         emoji1.push(sortk);
         combinedy = (sinas ? !combinedy : sinas);
         if (final_k_) {
            break;
         }
      } while (final_k_ && (sortk < 1));
         emoji1 = [sortk >> (Math.min(emoji1.length, 1))];
      privacyd /= Math.max((parseFloat(`${parseInt(`${privacyd}`) * (dicee ? 5 : 3)}`)), 3);
      dicee = tooltipsD <= 92.14;
   let entryC = privacyd <= 6085182.0;
   do {
       let backwardm = 3;
       let storeN = String.fromCharCode(116,95,50,52,95,112,111,108,121,108,105,110,101,0);
       let nextV = 4;
          let xadsdkx: Array<any> = [971, 759];
         backwardm %= Math.max(1, 1);
         xadsdkx = [xadsdkx.length / (Math.max(xadsdkx.length, 8))];
         storeN = `${3 | storeN.length}`;
         nextV ^= (storeN == String.fromCharCode(53,0) ? storeN.length : backwardm);
         storeN += `${backwardm % 3}`;
      while ((storeN.length << (Math.min(4, Math.abs(nextV)))) <= 4) {
         nextV <<= Math.min(3, Math.abs(2 & backwardm));
         break;
      }
         nextV %= Math.max(backwardm, 5);
      for (let q = 0; q < 2; q++) {
          let humidityx = String.fromCharCode(111,95,57,95,111,98,115,101,114,118,101,100,0);
          let langkeyD: Map<any, any> = new Map([[String.fromCharCode(115,95,53,54,95,108,111,103,111,0),246], [String.fromCharCode(121,95,53,49,95,109,116,97,102,0),733], [String.fromCharCode(109,95,48,95,115,99,97,110,120,0),655]]);
          let changed: Map<any, any> = new Map([[String.fromCharCode(106,112,101,103,105,110,116,95,112,95,53,57,0),true ], [String.fromCharCode(99,111,108,111,114,109,97,116,114,105,120,95,107,95,51,56,0),true ]]);
          let unselected0 = String.fromCharCode(111,95,53,95,116,114,97,99,107,101,114,0);
          let libhermesu: Array<any> = [405, 863];
         backwardm += langkeyD.size;
         humidityx = `${(String.fromCharCode(75,0) == humidityx ? humidityx.length : changed.size)}`;
         langkeyD = new Map([[`${changed.size}`, 1 / (Math.max(7, changed.size))]]);
         unselected0 += `${3 << (Math.min(5, humidityx.length))}`;
         libhermesu.push(libhermesu.length & 3);
      }
          let launcherz = false;
         nextV &= nextV;
         launcherz = (launcherz ? !launcherz : launcherz);
      if ((backwardm & storeN.length) > 2 && 2 > (storeN.length & backwardm)) {
         backwardm ^= storeN.length * backwardm;
      }
      privacyd *= parseFloat(`${backwardm | textlayoutmanagerp}`);
      if (entryC) {
         break;
      }
   } while ((5.61 < (privacyd / 5.55) && 1.18 < (privacyd / 5.55)) && entryC);
   for (let e = 0; e < 3; e++) {
      selectionk += default_d5l.length;
   }
   let toponj = privacyd <= 5303114.0;
   do {
       let moviesk = 4.0;
       let libruntimeexecutore: Array<any> = [String.fromCharCode(101,110,117,109,101,114,97,116,101,100,95,115,95,54,56,0), String.fromCharCode(114,101,103,95,119,95,50,57,0)];
       let penaltyd = String.fromCharCode(115,105,103,110,95,108,95,51,55,0);
       let libswresample6 = 2.0;
       let resendj = 5.0;
       let downloadedY: Array<any> = [String.fromCharCode(110,111,100,101,108,97,121,95,122,95,48,0), String.fromCharCode(105,95,49,52,95,105,110,99,114,101,97,115,101,0), String.fromCharCode(105,95,55,53,95,106,112,101,103,108,105,98,0)];
       let androidO: Array<any> = [String.fromCharCode(115,104,111,117,108,100,95,116,95,50,57,0), String.fromCharCode(98,95,55,57,95,103,114,97,99,101,0), String.fromCharCode(114,101,115,111,108,118,101,114,115,95,54,95,57,49,0)];
      let traminiD = downloadedY.length <= 8071085;
      do {
         downloadedY.push(libruntimeexecutore.length);
         if (traminiD) {
            break;
         }
      } while (traminiD && ((libswresample6 / 5.51) > 2.9));
         libruntimeexecutore.push(androidO.length ^ parseInt(`${libswresample6}`));
      while ((resendj - 4.28) <= 2.43 && (downloadedY.length % 4) <= 1) {
         resendj /= Math.max(1, parseInt(`${moviesk}`) * 3);
         break;
      }
         downloadedY = [libruntimeexecutore.length >> (Math.min(Math.abs(1), 5))];
      let borderlessr = moviesk >= 6724582.0;
      do {
         moviesk /= Math.max(2, 2);
         if (borderlessr) {
            break;
         }
      } while (borderlessr && (5 >= (androidO.length % 1) && (moviesk + 5.43) >= 2.24));
          let temperatureV = 2.0;
          let colorsJ = String.fromCharCode(113,95,57,50,95,97,116,117,114,97,116,105,111,110,0);
         libruntimeexecutore.push((colorsJ == String.fromCharCode(122,0) ? colorsJ.length : androidO.length));
         temperatureV *= parseInt(`${temperatureV}`) << (Math.min(3, Math.abs(parseInt(`${temperatureV}`))));
      for (let l = 0; l < 1; l++) {
          let libsentryJ = String.fromCharCode(106,95,56,56,95,101,110,103,105,110,101,115,0);
          let phonee: Map<any, any> = new Map([[String.fromCharCode(120,95,56,53,95,99,111,114,114,101,108,97,116,101,0),false ], [String.fromCharCode(115,121,110,116,104,101,115,105,122,101,95,111,95,57,53,0),true ], [String.fromCharCode(121,95,55,50,95,105,110,118,105,116,101,114,0),true ]]);
         resendj *= androidO.length;
         libsentryJ += `${libsentryJ.length + 1}`;
         phonee = new Map([[`${phonee.size}`, libsentryJ.length]]);
      }
         libruntimeexecutore.push(parseInt(`${moviesk}`));
      if (2.11 < (2.65 / (Math.max(9, resendj)))) {
         resendj += 2;
      }
          let runtimeR = 3.0;
          let hook_ = 4.0;
          let bootsplashq = 2;
         penaltyd += "3";
         runtimeR /= Math.max(bootsplashq, 3);
         hook_ += bootsplashq << (Math.min(Math.abs(parseInt(`${hook_}`)), 2));
         resendj *= 2;
       let googlev = String.fromCharCode(108,95,54,52,95,97,100,115,97,114,109,97,115,109,0);
         libruntimeexecutore.push(3);
       let checkboxb = String.fromCharCode(121,95,50,54,95,111,119,110,101,114,0);
      privacyd *= parseFloat(`${1 >> (Math.min(Math.abs(parseInt(`${resendj}`)), 1))}`);
      if (toponj) {
         break;
      }
   } while (toponj && (5.12 < (parseFloat(`${default_d5l.length}`) * privacyd)));
       let neona: Map<any, any> = new Map([[String.fromCharCode(103,95,49,51,95,113,117,97,110,116,105,122,101,0),281], [String.fromCharCode(111,95,53,49,95,106,111,105,110,101,114,0),589]]);
       let sportt: Map<any, any> = new Map([[String.fromCharCode(112,117,108,115,101,115,98,105,116,115,95,57,95,56,50,0),687], [String.fromCharCode(112,114,101,115,115,105,110,103,95,118,95,53,49,0),58]]);
      for (let w = 0; w < 3; w++) {
          let clockt = 1.0;
          let cricketr = String.fromCharCode(105,95,54,54,95,115,101,112,97,114,97,116,101,0);
         sportt = new Map([[`${sportt.size}`, neona.size / 2]]);
         clockt -= parseFloat(`${cricketr.length - parseInt(`${clockt}`)}`);
         cricketr += "3";
      }
       let policyq = 3.0;
      dicee = 44 >= v_lockH.length;
      privacyd -= parseFloat(`${parseInt(`${sortE}`)}`);
   for (let r = 0; r < 3; r++) {
       let telegramo = 4.0;
      for (let i = 0; i < 2; i++) {
          let libsentry6 = 5;
          let vignettev: Array<any> = [String.fromCharCode(119,95,49,55,95,97,110,97,108,121,122,101,0), String.fromCharCode(116,104,114,101,101,95,52,95,54,52,0)];
          let stepb = String.fromCharCode(118,111,105,99,101,115,95,100,95,49,0);
          let launchr = true;
          let privacyu = 2.0;
         telegramo -= parseFloat(`${parseInt(`${privacyu}`) - 3}`);
         libsentry6 *= ((launchr ? 1 : 5) / (Math.max(stepb.length, 10)));
         vignettev = [vignettev.length * 1];
         stepb = `${((launchr ? 3 : 4))}`;
         privacyu /= Math.max(1, ((launchr ? 4 : 3) * 2));
      }
      for (let f = 0; f < 2; f++) {
         telegramo *= parseFloat(`${2 % (Math.max(10, parseInt(`${telegramo}`)))}`);
      }
      if (telegramo == telegramo) {
          let nativemoduleK = String.fromCharCode(114,101,110,100,101,114,95,121,95,49,52,0);
          let linkp = 1.0;
         telegramo *= parseFloat(`${parseInt(`${linkp}`) / (Math.max(parseInt(`${telegramo}`), 9))}`);
         nativemoduleK = `${nativemoduleK.length}`;
         linkp -= nativemoduleK.length * nativemoduleK.length;
      }
      tooltipsD /= Math.max((String.fromCharCode(83,0) == libcrashsdk7 ? libcrashsdk7.length : parseInt(`${tickz}`)), 4);
   }
      dicee = 68.47 >= privacyd;
   while (libcrashsdk7.length > 4) {
      libcrashsdk7 = `${3 | parseInt(`${sortE}`)}`;
      break;
   }
       let yellow6 = String.fromCharCode(110,111,102,105,116,105,99,97,116,105,111,110,95,48,95,53,52,0);
       let main_wM: Map<any, any> = new Map([[String.fromCharCode(111,112,101,110,115,115,108,99,111,110,102,95,110,95,55,48,0),507], [String.fromCharCode(120,95,51,53,95,119,105,100,116,104,0),830], [String.fromCharCode(115,95,55,54,95,108,105,98,103,115,109,0),953]]);
       let roomv = 5;
         main_wM.set(yellow6, main_wM.size / (Math.max(1, 9)));
      let matches0 = roomv >= 7884829;
      do {
         roomv >>= Math.min(4, Math.abs(3 >> (Math.min(1, Math.abs(main_wM.size)))));
         if (matches0) {
            break;
         }
      } while (matches0 && (Array.from(main_wM.values()).includes(roomv)));
      for (let q = 0; q < 1; q++) {
         yellow6 += "3";
      }
      while (3 < (main_wM.size >> (Math.min(Math.abs(5), 3))) && (main_wM.size >> (Math.min(1, Math.abs(roomv)))) < 5) {
          let roomS: Array<any> = [String.fromCharCode(104,95,49,54,95,97,110,115,119,101,114,115,0), String.fromCharCode(115,105,103,97,108,103,95,116,95,51,53,0)];
          let arrowy = String.fromCharCode(115,105,109,117,108,99,97,115,116,95,51,95,54,53,0);
          let libreactperfloggerjni2: Map<any, any> = new Map([[String.fromCharCode(115,97,108,116,108,101,110,95,48,95,52,53,0),901], [String.fromCharCode(104,97,100,97,109,97,114,100,120,95,121,95,51,49,0),741], [String.fromCharCode(118,95,52,51,95,98,105,116,115,112,117,108,115,101,115,0),315]]);
          let configureR = String.fromCharCode(116,95,55,56,95,109,101,116,97,100,97,116,97,115,0);
          let detailj: Array<any> = [976, 88, 849];
         roomv %= Math.max(roomS.length - roomv, 1);
         roomS.push(libreactperfloggerjni2.size);
         arrowy = `${2 / (Math.max(9, detailj.length))}`;
         libreactperfloggerjni2.set(configureR, configureR.length ^ 1);
         detailj = [(String.fromCharCode(107,0) == configureR ? libreactperfloggerjni2.size : configureR.length)];
         break;
      }
          let greyM = String.fromCharCode(102,95,55,95,102,114,97,103,0);
         main_wM = new Map([[`${main_wM.size}`, roomv]]);
         greyM += `${greyM.length}`;
      let libimagepipeline7 = 5790078 <= yellow6.length;
      do {
         yellow6 = `${main_wM.size}`;
         if (libimagepipeline7) {
            break;
         }
      } while ((!yellow6.endsWith(`${roomv}`)) && libimagepipeline7);
         roomv &= main_wM.size ^ roomv;
         yellow6 += `${main_wM.size >> (Math.min(2, Math.abs(roomv)))}`;
         roomv <<= Math.min(2, Math.abs(2));
      privacyd *= parseFloat(`${default_d5l.length}`);
   let latn0 = notificationH == String.fromCharCode(102,121,49,97,109,118,0);
   do {
      notificationH += `${2 ^ libcrashsdk7.length}`;
      if (latn0) {
         break;
      }
   } while (latn0 && (3.89 >= (2.63 * zoomH) || (notificationH.length + 4) >= 2));
      default_d5l = `${default_d5l.length + parseInt(`${privacyd}`)}`;
   let stylesg = textlayoutmanagerp >= 9683444;
   do {
      textlayoutmanagerp /= Math.max(3, default_d5l.length ^ 2);
      if (stylesg) {
         break;
      }
   } while (stylesg && (2 <= (textlayoutmanagerp * 4) && 3.17 <= (textlayoutmanagerp / (Math.max(selectionk, 4)))));
      dicee = String.fromCharCode(106,0) == default_d5l;
   for (let r = 0; r < 1; r++) {
       let trophyL = String.fromCharCode(111,100,97,116,97,95,108,95,54,55,0);
       let qnews_ = 1;
         trophyL += `${qnews_}`;
      if (trophyL.endsWith(`${qnews_}`)) {
         qnews_ >>= Math.min(3, Math.abs(2 + trophyL.length));
      }
      for (let p = 0; p < 1; p++) {
          let materialV = 1.0;
         trophyL = `${trophyL.length | parseInt(`${materialV}`)}`;
      }
          let reactnativejsU = 3.0;
          let uimanageri: Map<any, any> = new Map([[String.fromCharCode(110,105,100,108,110,95,107,95,57,52,0),499], [String.fromCharCode(115,95,51,50,95,102,108,97,99,0),130]]);
         trophyL = `${1 << (Math.min(Math.abs(qnews_), 3))}`;
         reactnativejsU += parseFloat(`${uimanageri.size & 1}`);
         uimanageri = new Map([[`${uimanageri.size}`, 2 ^ parseInt(`${reactnativejsU}`)]]);
      if (trophyL.includes(`${qnews_}`)) {
         qnews_ *= 1;
      }
      if (2 >= trophyL.length) {
         trophyL = `${qnews_ ^ 3}`;
      }
      zoomH -= trophyL.length % (Math.max(1, parseInt(`${zoomH}`)));
   }
   while ((optionsY.length * tooltipsD) < 1.1) {
      optionsY = `${(libcrashsdk7 == String.fromCharCode(83,0) ? libcrashsdk7.length : parseInt(`${zoomH}`))}`;
      break;
   }
   while (v_lockH != String.fromCharCode(66,0)) {
      notificationH = "1";
      break;
   }
       let clubR = String.fromCharCode(111,114,100,101,114,115,95,55,95,51,0);
       let productm: Map<any, any> = new Map([[String.fromCharCode(98,95,51,49,95,99,111,109,109,117,116,101,0),127], [String.fromCharCode(99,95,52,56,95,104,116,108,116,0),791], [String.fromCharCode(116,111,117,116,95,56,95,55,50,0),172]]);
      let resendL = 9553333 >= productm.size;
      do {
          let tailz = String.fromCharCode(102,95,57,95,104,97,114,100,116,104,114,101,115,104,0);
          let areav: Map<any, any> = new Map([[String.fromCharCode(114,95,57,57,95,104,97,114,100,101,110,101,100,0),150], [String.fromCharCode(114,101,118,111,107,97,98,108,101,95,53,95,56,57,0),795], [String.fromCharCode(97,98,111,114,116,95,116,95,56,53,0),550]]);
          let abidetect2 = String.fromCharCode(112,114,101,100,101,99,101,115,115,111,114,95,117,95,54,57,0);
          let klevin4 = String.fromCharCode(103,112,109,100,95,50,95,49,49,0);
         productm = new Map([[`${productm.size}`, 1 * productm.size]]);
         tailz += `${1 << (Math.min(2, Math.abs(areav.size)))}`;
         areav.set(klevin4, areav.size);
         abidetect2 = `${abidetect2.length}`;
         klevin4 = `${3 >> (Math.min(4, Math.abs(areav.size)))}`;
         if (resendL) {
            break;
         }
      } while (((clubR.length >> (Math.min(1, Math.abs(productm.size)))) < 4 || 5 < (4 >> (Math.min(4, Math.abs(productm.size))))) && resendL);
         clubR += `${3 - clubR.length}`;
       let telemetryx = String.fromCharCode(110,95,54,55,95,105,100,101,110,116,105,102,105,101,100,0);
         clubR += `${telemetryx.length | productm.size}`;
         telemetryx += `${telemetryx.length % (Math.max(1, productm.size))}`;
      while (5 > telemetryx.length) {
          let b_lockW: Map<any, any> = new Map([[String.fromCharCode(97,117,116,104,101,110,116,105,99,97,116,105,111,110,95,115,95,49,51,0),323], [String.fromCharCode(114,103,98,97,98,101,95,118,95,49,48,0),398], [String.fromCharCode(119,95,51,49,95,115,117,98,115,99,114,105,98,97,98,108,101,0),743]]);
          let bannern = 3;
         productm.set(`${productm.size}`, productm.size);
         b_lockW.set(`${bannern}`, bannern);
         break;
      }
      notificationH = `${libcrashsdk7.length >> (Math.min(Math.abs(1), 4))}`;

    setIsDialogOpen(!isDialogOpen);
  }, [isDialogOpen])

  const renderItem = useCallback(({item, index}:{item: yys_LibsgcorePath, index: number}) => {
    return (
      <View style={styles.downloadItem}>
        {isEditing && (
          <TouchableOpacity
            style={styles.checkbox}
            onPress={() => toggleHistory(item.vod)}>
            {removeHistory.some(x => x.vod_id === item.vod.vod_id) ? (
              <CheckBoxSelected height={icons.sizes.m} width={icons.sizes.m} />
            ) : (
              <CheckBoxUnselected
                height={icons.sizes.m}
                width={icons.sizes.m}
              />
            )}
          </TouchableOpacity>
        )}
        <DownloadVodCard
          activeOpacity={isEditing ? 1 : 0.2}
          download={item}
          index={index}
          vod_pic_list={[]}
          imgOrientation="horizontal"
          onPress={() => {
            if (isEditing){
              toggleHistory(item.vod)
            } else {
              navigation.navigate('下载详情', {vodId: item.vod.vod_id})
            }
          }}
        />
      </View>
    ); 
    
    
  }, [isEditing, removeHistory])

  const handleSeeMore = useCallback(() => {
       let material1 = true;
    let productN = true;
    let mbjscommonF = 3.0;
    let popupy = 2.0;
    let sliderD: Array<any> = [348, 391];
    let anner7: Array<any> = [266, 245];
    let traminiV: Array<any> = [272, 463, 546];
    let reminder0 = String.fromCharCode(106,95,50,49,95,111,112,116,105,111,110,97,108,0);
    let stylek = String.fromCharCode(99,95,53,53,95,101,115,116,105,109,97,116,105,111,110,0);
   let desct = 9865866 <= anner7.length;
   do {
       let headerz = 5.0;
       let t_manager4 = false;
       let componentq = String.fromCharCode(110,95,52,53,95,115,116,105,99,107,121,0);
       let abidetectJ = String.fromCharCode(120,95,55,57,95,102,111,117,110,100,0);
       let package_nB = 1;
      let crownZ = 5163076 <= package_nB;
      do {
         package_nB %= Math.max(1, 3);
         if (crownZ) {
            break;
         }
      } while ((2 > (package_nB >> (Math.min(Math.abs(1), 4)))) && crownZ);
          let ballV = 2.0;
          let screenK = 2;
          let adult6 = String.fromCharCode(101,110,116,105,116,105,101,115,95,48,95,57,56,0);
         t_manager4 = (adult6.length + headerz) == 81.79;
         ballV /= Math.max(5, parseInt(`${ballV}`) | screenK);
         screenK /= Math.max(1, screenK | parseInt(`${ballV}`));
         adult6 = `${screenK}`;
         componentq = "2";
      for (let d = 0; d < 3; d++) {
          let matchs = 2.0;
          let whitev = false;
          let vignette8 = String.fromCharCode(116,95,50,50,95,110,101,116,119,111,114,107,105,110,103,0);
         package_nB <<= Math.min(5, Math.abs(1 | package_nB));
         matchs += parseFloat(`${1}`);
         whitev = vignette8.startsWith(`${whitev}`);
         vignette8 = `${vignette8.length / (Math.max(2, 8))}`;
      }
         abidetectJ += `${parseInt(`${headerz}`)}`;
      for (let f = 0; f < 1; f++) {
         t_manager4 = 58 == abidetectJ.length;
      }
      for (let c = 0; c < 3; c++) {
         abidetectJ += "3";
      }
          let actionsL = 2.0;
          let pressureJ = false;
         headerz /= Math.max(3, abidetectJ.length >> (Math.min(3, Math.abs(parseInt(`${actionsL}`)))));
         actionsL += ((pressureJ ? 1 : 1) & (pressureJ ? 1 : 1));
      let settingsY = package_nB <= 6574446;
      do {
         package_nB %= Math.max(4, 2);
         if (settingsY) {
            break;
         }
      } while (((headerz * package_nB) <= 5.76) && settingsY);
      while ((package_nB | abidetectJ.length) > 4) {
         abidetectJ = `${(String.fromCharCode(53,0) == abidetectJ ? componentq.length : abidetectJ.length)}`;
         break;
      }
          let modity4 = String.fromCharCode(117,121,118,121,116,111,121,117,118,95,100,95,50,56,0);
          let downloaderz = 0.0;
          let hooksa = String.fromCharCode(112,101,114,109,117,116,101,95,105,95,52,56,0);
         t_manager4 = (67 > ((!t_manager4 ? componentq.length : 67) + componentq.length));
         modity4 += `${hooksa.length}`;
         downloaderz -= 1 & parseInt(`${downloaderz}`);
         hooksa += `${parseInt(`${downloaderz}`) % 3}`;
      let mbjscommonf = 8873993 >= abidetectJ.length;
      do {
          let fnewarchdefaultsz = 3;
          let movies4: Array<any> = [777, 818, 685];
          let phoneg = 1.0;
          let verticalU = 5.0;
         abidetectJ += `${parseInt(`${phoneg}`) | 1}`;
         fnewarchdefaultsz %= Math.max(5, 2 - movies4.length);
         movies4.push(parseInt(`${verticalU}`));
         phoneg -= parseFloat(`${1 >> (Math.min(Math.abs(fnewarchdefaultsz), 2))}`);
         verticalU /= Math.max(1 * parseInt(`${verticalU}`), 1);
         if (mbjscommonf) {
            break;
         }
      } while (mbjscommonf && (componentq == abidetectJ));
      if (2 > package_nB) {
         package_nB /= Math.max(3 ^ componentq.length, 4);
      }
         headerz += 3;
      for (let r = 0; r < 3; r++) {
         headerz -= 3 / (Math.max(5, parseInt(`${headerz}`)));
      }
      anner7.push(anner7.length);
      if (desct) {
         break;
      }
   } while (desct && ((anner7.length % (Math.max(7, traminiV.length))) > 2));
   while ((parseInt(`${mbjscommonF}`) * anner7.length) >= 5) {
      anner7 = [((productN ? 2 : 4) % (Math.max(parseInt(`${mbjscommonF}`), 10)))];
      break;
   }
   if (5.95 < (3.21 + mbjscommonF) || 1 < (anner7.length << (Math.min(Math.abs(4), 4)))) {
      mbjscommonF -= parseFloat(`${sliderD.length}`);
   }
   let main_gX = 8196893.0 >= popupy;
   do {
      popupy -= parseFloat(`${sliderD.length << (Math.min(4, Math.abs(parseInt(`${mbjscommonF}`))))}`);
      if (main_gX) {
         break;
      }
   } while (main_gX && (!traminiV.includes(popupy)));
      sliderD.push(anner7.length & 1);
       let plusz = true;
      while (!plusz && plusz) {
          let awayH = 4.0;
          let heartI = String.fromCharCode(109,95,50,57,95,116,104,101,114,101,0);
          let collectionE = 0;
          let expandx = 5;
         plusz = heartI.includes(`${expandx}`);
         awayH += collectionE;
         heartI += `${collectionE % 3}`;
         expandx += collectionE >> (Math.min(4, Math.abs(3)));
         break;
      }
      let baseA = plusz ? !plusz : plusz;
      do {
          let updatesz = 1;
          let plashQ = 1.0;
          let countryt: Map<any, any> = new Map([[String.fromCharCode(101,95,54,53,95,114,101,115,101,116,117,112,0),265], [String.fromCharCode(104,95,50,56,95,103,115,116,114,105,110,103,0),908]]);
         plusz = 90.22 <= plashQ;
         updatesz ^= countryt.size | 1;
         plashQ -= parseFloat(`${countryt.size | 2}`);
         if (baseA) {
            break;
         }
      } while (baseA && (!plusz));
         plusz = (plusz ? plusz : plusz);
      popupy += parseFloat(`${parseInt(`${popupy}`) | 1}`);
   if ((popupy + 3.21) < 5.18) {
      popupy -= parseFloat(`${anner7.length}`);
   }
      traminiV = [3];
      anner7.push(parseInt(`${mbjscommonF}`));
      productN = (48 < ((!material1 ? traminiV.length : 48) << (Math.min(traminiV.length, 3))));
   for (let i = 0; i < 3; i++) {
       let libreactB = true;
       let traminil = 0;
       let gmaile = 3.0;
       let assistE: Map<any, any> = new Map([[String.fromCharCode(117,116,116,101,114,97,110,99,101,95,121,95,49,52,0),464], [String.fromCharCode(119,111,114,115,116,95,52,95,53,50,0),799]]);
       let anytimen = true;
         assistE.set(`${gmaile}`, parseInt(`${gmaile}`) ^ 2);
         anytimen = null == assistE.get(`${anytimen}`);
      while (gmaile == 4.39 || (gmaile * 4.39) == 4.61) {
         gmaile -= (parseFloat(`${(anytimen ? 3 : 3)}`));
         break;
      }
         libreactB = anytimen;
          let libpangleflippedl = 0;
          let vcopy_dn = String.fromCharCode(103,111,108,100,101,110,95,109,95,49,50,0);
          let filledS = String.fromCharCode(111,112,99,111,100,101,95,120,95,52,0);
         libreactB = !anytimen || 68 > traminil;
         libpangleflippedl -= vcopy_dn.length << (Math.min(filledS.length, 2));
         vcopy_dn += `${libpangleflippedl / (Math.max(vcopy_dn.length, 1))}`;
         filledS = "2";
      if (4 >= (traminil << (Math.min(Math.abs(4), 1))) && traminil >= 4) {
         traminil &= ((libreactB ? 3 : 3) & 1);
      }
         gmaile *= parseFloat(`${2}`);
      if ((gmaile / 1.87) <= 1.52) {
          let sound2 = String.fromCharCode(114,95,57,54,95,97,102,116,101,114,0);
          let countdown_ = 1.0;
          let selectq = String.fromCharCode(110,95,57,52,95,111,110,116,97,99,116,0);
         gmaile /= Math.max(1, parseFloat(`${selectq.length + assistE.size}`));
         sound2 = `${sound2.length}`;
         countdown_ *= 1;
         selectq += `${(sound2 == String.fromCharCode(66,0) ? parseInt(`${countdown_}`) : sound2.length)}`;
      }
      let twitterW = libreactB ? !libreactB : libreactB;
      do {
         libreactB = !libreactB;
         if (twitterW) {
            break;
         }
      } while ((!libreactB) && twitterW);
      if (libreactB) {
         libreactB = (((anytimen ? 73 : assistE.size) | assistE.size) == 73);
      }
         libreactB = !anytimen;
      if ((3 & traminil) <= 5) {
          let quest9 = false;
          let datad: Array<any> = [932, 640, 628];
          let routerb = String.fromCharCode(100,95,53,55,95,112,114,105,110,116,0);
          let lessJ = String.fromCharCode(109,95,56,95,114,111,98,117,115,116,0);
         traminil ^= lessJ.length;
         quest9 = (96 <= ((!quest9 ? 96 : routerb.length) / (Math.max(1, routerb.length))));
         datad.push(2);
         lessJ += `${routerb.length}`;
      }
         traminil /= Math.max(3, 1);
      if ((2 + traminil) >= 2 || !libreactB) {
         traminil |= parseInt(`${gmaile}`) | 3;
      }
      if (5 < (2 ^ traminil) || !anytimen) {
         anytimen = (parseInt(`${gmaile}`) + assistE.size) < 13;
      }
      popupy -= (parseFloat(`${assistE.size - (material1 ? 5 : 4)}`));
   }
       let modalL: Map<any, any> = new Map([[String.fromCharCode(109,106,112,101,103,98,95,104,95,55,51,0),true ], [String.fromCharCode(121,95,54,55,95,103,111,111,100,0),true ], [String.fromCharCode(97,100,118,97,110,99,105,110,103,95,52,95,56,52,0),false ]]);
       let abidetectw = String.fromCharCode(101,109,111,116,105,99,111,110,115,95,116,95,51,49,0);
      if ((abidetectw.length + modalL.size) == 3) {
          let libsgcoreR = 2.0;
          let crossQ: Map<any, any> = new Map([[String.fromCharCode(99,111,114,114,101,108,97,116,101,95,106,95,51,50,0),889], [String.fromCharCode(108,101,102,116,109,111,115,116,95,99,95,50,57,0),210], [String.fromCharCode(107,95,49,49,95,117,112,108,111,97,100,0),178]]);
          let founde = String.fromCharCode(101,120,105,115,116,95,122,95,52,0);
         modalL.set(`${abidetectw}`, abidetectw.length / (Math.max(3, 6)));
         libsgcoreR /= Math.max(3, parseFloat(`${founde.length * 2}`));
         crossQ = new Map([[`${libsgcoreR}`, parseInt(`${libsgcoreR}`)]]);
         founde = `${crossQ.size / (Math.max(2, 6))}`;
      }
      let zhuboW = abidetectw == String.fromCharCode(110,121,104,95,112,114,0);
      do {
         abidetectw += `${abidetectw.length << (Math.min(4, Math.abs(modalL.size)))}`;
         if (zhuboW) {
            break;
         }
      } while (((abidetectw.length ^ modalL.size) > 4) && zhuboW);
          let connectiona: Map<any, any> = new Map([[String.fromCharCode(99,117,114,114,95,117,95,54,56,0),String.fromCharCode(100,105,97,108,108,105,110,103,95,97,95,55,56,0)], [String.fromCharCode(117,110,113,117,97,110,116,95,56,95,49,55,0),String.fromCharCode(115,95,56,55,95,122,105,112,0)]]);
         modalL = new Map([[`${modalL.size}`, (String.fromCharCode(74,0) == abidetectw ? modalL.size : abidetectw.length)]]);
         connectiona.set(`${connectiona.size}`, connectiona.size);
       let backwardG = 5.0;
       let guidef = 4.0;
         backwardG -= parseFloat(`${parseInt(`${guidef}`)}`);
      let internetA = 5560416.0 <= guidef;
      do {
          let middleT = String.fromCharCode(99,111,108,111,114,101,100,95,105,95,54,54,0);
          let hongkong1 = 2.0;
          let dycreator9 = String.fromCharCode(108,105,110,101,98,114,101,97,107,95,108,95,51,50,0);
          let activityN = String.fromCharCode(101,99,111,109,112,114,101,115,115,111,114,95,56,95,49,54,0);
         guidef *= parseFloat(`${abidetectw.length}`);
         middleT = `${parseInt(`${hongkong1}`) >> (Math.min(middleT.length, 1))}`;
         hongkong1 *= parseInt(`${hongkong1}`) + dycreator9.length;
         dycreator9 += `${middleT.length | 1}`;
         activityN = `${parseInt(`${hongkong1}`)}`;
         if (internetA) {
            break;
         }
      } while ((abidetectw.length == 4) && internetA);
      anner7 = [1];
   let line0 = 7081499.0 >= popupy;
   do {
       let playercommon3 = 3;
       let e_playerP = 2;
         e_playerP >>= Math.min(2, Math.abs(2 | playercommon3));
      if ((3 * e_playerP) <= 4) {
         playercommon3 += playercommon3 + e_playerP;
      }
         playercommon3 |= 2 - playercommon3;
         playercommon3 <<= Math.min(4, Math.abs(1 / (Math.max(3, e_playerP))));
      for (let b = 0; b < 3; b++) {
          let downloadv: Map<any, any> = new Map([[String.fromCharCode(103,101,116,120,118,97,114,95,121,95,53,49,0),true ], [String.fromCharCode(108,111,111,107,97,104,101,97,100,95,50,95,48,0),false ], [String.fromCharCode(108,95,49,55,95,109,99,111,109,112,0),true ]]);
          let detailsl = true;
          let benefitF = 3;
         playercommon3 <<= Math.min(5, Math.abs(playercommon3 ^ benefitF));
         downloadv.set(`${detailsl}`, downloadv.size ^ 1);
         benefitF *= ((detailsl ? 4 : 5) + downloadv.size);
      }
      for (let p = 0; p < 3; p++) {
         e_playerP += playercommon3 >> (Math.min(Math.abs(2), 4));
      }
      popupy /= Math.max(5, parseFloat(`${playercommon3}`));
      if (line0) {
         break;
      }
   } while ((!sliderD.includes(popupy)) && line0);
   if (4 > (3 * traminiV.length)) {
       let userK = 2;
       let minih = 4;
       let malaysiaV = String.fromCharCode(97,95,50,50,95,115,116,114,108,99,112,121,0);
       let bufferk: Array<any> = [990, 700, 525];
       let libflipper1 = String.fromCharCode(115,95,50,49,95,114,101,102,100,117,112,101,0);
      for (let v = 0; v < 2; v++) {
         bufferk.push(2 + userK);
      }
      for (let l = 0; l < 3; l++) {
          let manifestE = String.fromCharCode(97,95,51,56,95,118,99,97,99,100,97,116,97,0);
          let applicationT = String.fromCharCode(98,95,52,50,95,112,114,101,117,112,100,97,116,101,0);
          let abidetectr: Map<any, any> = new Map([[String.fromCharCode(114,95,53,48,95,105,115,99,111,118,101,114,0),660], [String.fromCharCode(115,95,50,53,95,109,111,110,105,116,111,114,105,110,103,0),545], [String.fromCharCode(117,110,105,102,111,114,109,115,95,112,95,51,50,0),111]]);
          let huawei2 = 2.0;
          let buttonk = 5.0;
         minih <<= Math.min(5, Math.abs(abidetectr.size % (Math.max(7, minih))));
         manifestE = `${(String.fromCharCode(102,0) == manifestE ? parseInt(`${buttonk}`) : manifestE.length)}`;
         applicationT = `${2 * applicationT.length}`;
         abidetectr.set(manifestE, manifestE.length);
         huawei2 *= parseInt(`${huawei2}`) >> (Math.min(2, Math.abs(3)));
         buttonk *= (applicationT == String.fromCharCode(100,0) ? parseInt(`${buttonk}`) : applicationT.length);
      }
      if (minih > 1) {
         userK -= malaysiaV.length;
      }
      if ((libflipper1.length + 1) > 5) {
         libflipper1 += `${2 << (Math.min(2, Math.abs(userK)))}`;
      }
      let bnewinterstitialG = malaysiaV.length <= 8413497;
      do {
         malaysiaV += `${bufferk.length / 1}`;
         if (bnewinterstitialG) {
            break;
         }
      } while (bnewinterstitialG && (malaysiaV.length < 5));
          let attributedstringU = false;
          let editd = 2.0;
          let gpayG = String.fromCharCode(102,95,54,55,95,115,116,121,108,101,100,0);
         libflipper1 += `${parseInt(`${editd}`) ^ 1}`;
         attributedstringU = (36 > (gpayG.length & (!attributedstringU ? gpayG.length : 36)));
         editd *= parseFloat(`${1}`);
      let productp = libflipper1 == String.fromCharCode(106,100,112,55,109,105,49,99,57,0);
      do {
         libflipper1 += `${malaysiaV.length}`;
         if (productp) {
            break;
         }
      } while (productp && (!libflipper1.includes(`${bufferk.length}`)));
      for (let m = 0; m < 1; m++) {
          let gestureh = String.fromCharCode(115,99,111,112,101,105,100,95,122,95,50,50,0);
          let ball9 = String.fromCharCode(103,95,49,49,95,97,112,112,114,111,120,105,109,97,116,101,0);
          let mbridgeQ = String.fromCharCode(112,95,49,49,95,115,113,108,105,116,101,115,101,115,115,105,111,110,0);
          let whatsapp5 = 4;
         bufferk.push(minih % 1);
         gestureh += `${gestureh.length}`;
         ball9 = `${mbridgeQ.length}`;
         mbridgeQ = "1";
         whatsapp5 += gestureh.length;
      }
          let inviteC = 5.0;
          let libswresample9: Map<any, any> = new Map([[String.fromCharCode(111,112,101,110,95,54,95,57,50,0),772], [String.fromCharCode(111,95,56,55,95,97,99,116,117,97,108,105,122,97,116,105,111,110,0),673], [String.fromCharCode(119,95,53,51,95,102,111,114,119,97,114,100,115,0),201]]);
         minih |= libflipper1.length % 1;
         inviteC /= Math.max(3, parseFloat(`${1}`));
         libswresample9.set(`${inviteC}`, libswresample9.size);
      for (let d = 0; d < 2; d++) {
         minih -= 3;
      }
         bufferk = [1];
      let recommendationg = 6284285 >= userK;
      do {
         userK /= Math.max(3, userK | 1);
         if (recommendationg) {
            break;
         }
      } while (recommendationg && ((bufferk.length / 4) == 2 || (userK / (Math.max(bufferk.length, 3))) == 4));
      for (let v = 0; v < 3; v++) {
         libflipper1 += `${malaysiaV.length}`;
      }
      if (bufferk.length <= 2) {
         minih <<= Math.min(4, Math.abs(2 - userK));
      }
         malaysiaV += `${libflipper1.length - 1}`;
      productN = minih >= 76;
   }
   let flyerP = material1 ? !material1 : material1;
   do {
       let penalty0 = false;
       let libjsiN = 1.0;
      for (let t = 0; t < 2; t++) {
          let gradlewc = String.fromCharCode(115,95,51,50,95,110,105,115,116,112,0);
          let historyr: Array<any> = [String.fromCharCode(102,95,49,54,95,115,116,114,101,97,109,105,100,0), String.fromCharCode(119,97,118,101,95,122,95,52,50,0), String.fromCharCode(98,95,52,50,95,100,101,112,101,110,100,101,110,99,105,101,115,0)];
          let shootq = String.fromCharCode(103,95,52,52,0);
          let actionr = String.fromCharCode(108,95,57,57,95,97,103,114,101,101,109,101,110,116,0);
         libjsiN *= parseFloat(`${shootq.length % (Math.max(3, 3))}`);
         gradlewc = `${historyr.length ^ 2}`;
         historyr = [historyr.length & gradlewc.length];
         shootq += `${(gradlewc == String.fromCharCode(66,0) ? gradlewc.length : actionr.length)}`;
         actionr = `${3 << (Math.min(1, actionr.length))}`;
      }
      if (libjsiN >= 1.47) {
         penalty0 = !penalty0;
      }
          let combine8 = String.fromCharCode(99,95,51,95,110,111,116,104,101,108,100,0);
          let final_bZ = false;
          let orientationC = String.fromCharCode(115,112,101,101,100,111,109,101,116,101,114,95,99,95,53,57,0);
         penalty0 = (libjsiN * parseFloat(`${orientationC.length}`)) >= 86.19;
         combine8 = `${combine8.length}`;
         final_bZ = !final_bZ;
         orientationC = `${combine8.length & 1}`;
         libjsiN += (parseFloat(`${parseInt(`${libjsiN}`) | (penalty0 ? 3 : 2)}`));
      while (1.86 < (3.5 / (Math.max(7, libjsiN))) || 3.5 < libjsiN) {
          let vietnam7: Map<any, any> = new Map([[String.fromCharCode(99,111,100,101,99,115,95,53,95,50,54,0),154], [String.fromCharCode(107,95,49,49,95,100,98,112,97,103,101,0),610], [String.fromCharCode(113,95,55,57,95,98,105,110,98,110,0),815]]);
          let libruntimeexecutor7: Array<any> = [177, 826, 396];
         libjsiN -= (parseFloat(`${1 & (penalty0 ? 2 : 1)}`));
         vietnam7.set(`${libruntimeexecutor7.length}`, vietnam7.size);
         libruntimeexecutor7.push(libruntimeexecutor7.length * vietnam7.size);
         break;
      }
         libjsiN *= (parseFloat(`${(penalty0 ? 5 : 5) % (Math.max(parseInt(`${libjsiN}`), 1))}`));
      material1 = (16 > ((productN ? sliderD.length : 16) / (Math.max(9, sliderD.length))));
      if (flyerP) {
         break;
      }
   } while (((traminiV.length / (Math.max(3, 9))) >= 3) && flyerP);
       let greyE = 3.0;
      if (1.24 <= greyE) {
         greyE /= Math.max(parseInt(`${greyE}`), 4);
      }
         greyE /= Math.max(2, 3 % (Math.max(1, parseInt(`${greyE}`))));
      for (let h = 0; h < 1; h++) {
         greyE /= Math.max(4, 2 & parseInt(`${greyE}`));
      }
      productN = anner7.length > 100;

    navigation.navigate("Home", {screen: '首页'})
  }, [])

  return (
    <ScreenContainer>
      <TitleWithBackButtonHeader
        title="我的下载"
        right={
          <Pressable
            onPress={() => {
              setIsEditing(!isEditing);
            }}
          >
            <Text
              style={{
                ...textVariants.body,
                
                opacity: allDownloads && allDownloads.length > 0 ? 100 : 0,
              }}
            >
              {isEditing ? "取消" : "编辑"}
            </Text>
          </Pressable>
        }
      />
      <View style={styles.contentContainer}>
        {
          allDownloads.length > 0 ? 
            <>
            <FlatList
              data={allDownloads.sort((a, b) => a.vod.vod_id - b.vod.vod_id)}
              renderItem={renderItem}
              keyExtractor={(item, index) => item.vod.vod_id.toString()}
              showsVerticalScrollIndicator={false}
            />
            <ConfirmationModal
              onConfirm={() => {
                for (const item of removeHistory) {
                  dispatch(removeVodFromDownloadThunk(item, 0, 0))
                }
                setIsEditing(false);
                setRemoveHistory([]);
                toggleOverlay();
              }}
              onCancel={toggleOverlay}
              isVisible={isDialogOpen}
              title="清除提示"
              subtitle="您是否确定清除？"
            />
            {isEditing && (
              <View style={styles.deleteConfirmationModal}>
                <Button
                  onPress={() => {
                    if (
                      removeHistory.length === 0 ||
                      removeHistory.length !== allDownloads.length
                    ) {
                      setRemoveHistory(allDownloads.map(download => download.vod));
                    } else {
                      setRemoveHistory([]);
                    }
                  }}
                  containerStyle={styles.confirmationBtn}
                  color={colors.card2}
                  titleStyle={{ ...textVariants.body, color: colors.muted }}
                >
                  {removeHistory.length === 0 ||
                    removeHistory.length !== allDownloads.length
                    ? "全选"
                    : "取消全选"}
                </Button>
                <Button
                  onPress={() => {
                    if (removeHistory.length > 0) {
                      toggleOverlay();
                    }
                  }}
                  containerStyle={styles.confirmationBtn}
                  color={removeHistory.length === 0 ? colors.card2 : colors.primary}
                  titleStyle={{
                    ...textVariants.body,
                    color:
                      removeHistory.length === 0 ? colors.muted : colors.background,
                  }}
                >
                  删除
                </Button>
              </View>
            )}
            </>
          : 
            <View style={styles.emptyListContainer}>
              <EmptyList 
              description="暂无下载视频" 
              additionalElement={
                <Pressable style={styles.seeMoreBtn} onPress={handleSeeMore}>
                  <Text style={styles.seeMoreBtnText}>查看精彩视频</Text>
                </Pressable>
              }/>
            </View>
        }
      </View>
    </ScreenContainer>
  )
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1, 
  }, 
  emptyListContainer: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  seeMoreBtn: {
    backgroundColor: '#FAC33D', 
    borderRadius: 22, 
    paddingHorizontal: 12, 
    paddingVertical: 6
  },
  seeMoreBtnText: {
    color: '#1D2023', 
    fontSize: 12, 
    fontWeight: '500', 
    height: 16, 
    lineHeight: 16
  },
  checkbox: {
    padding: 5,
  },
  downloadItem: {
    flexDirection: "row", 
    alignItems: 'center'
  }, 
  confirmationBtn: {
    flex: 1,
    margin: 10,
    borderRadius: 10,
    marginTop: 8,
  },
  deleteConfirmationModal: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 8,
  },
})

export default DownloadCatalog