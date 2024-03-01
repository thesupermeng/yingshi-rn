import React, { useCallback, useEffect, useState, memo } from 'react';
import { StyleSheet, View, Text, RefreshControl, FlatList } from 'react-native';
import { useQueryClient } from '@tanstack/react-query';
import ScreenContainer from '../../components/container/yys_executor_expand';
import MainHeader from '../../components/header/yys_classes_count_header';
import { useFocusEffect, useTheme } from '@react-navigation/native';
import { useInfiniteQuery } from '@tanstack/react-query';
import { yys_Anythink, yys_BrightnessCopy } from '@type/yys_libzeus';
import VodPlaylist from '../../components/playlist/yys_reminder_gift';
import { BottomTabScreenProps, useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { API_DOMAIN } from '@utility/yys_ajax_switch';
import FastImage from "../../components/common/yys_vertical_collection"
import { useIsFocused } from '@react-navigation/native';
import NoConnection from './../../components/common/yys_armva_classes';
import NetInfo, { NetInfoState } from '@react-native-community/netinfo';
import { yys_Videocommon } from '@redux/reducers/yys_libavdevice';
import { yys_MintegralLibavdevice } from '@redux/yys_sport_shrink';
import { useAppSelector } from '@hooks/yys_frame';
import yys_event_common from '../../../../Umeng/yys_event_common';
import { yys_MaterialModal } from '@api';

type yys_Mbsplash = {
  item: yys_BrightnessCopy;
  index: number;
};

function Playlist({ navigation }: BottomTabScreenProps<any>) {
  
  const { textVariants, colors, spacing } = useTheme();
  const LIMIT_PER_PAGE = 10;
  // const [results, setResults] = useState<Array<yys_BrightnessCopy>>([])
  const [totalPage, setTotalPage] = useState(0);

  const isFocused = useIsFocused();
  const [isOffline, setIsOffline] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const settingsReducer: yys_Videocommon = useAppSelector(
    ({ settingsReducer }: yys_MintegralLibavdevice) => settingsReducer
  );

  
  useFocusEffect(useCallback(() => {
    yys_event_common.playlistViewsAnalytics();
  }, []));
  

  
  const handleTabPress = () => {
       let privacyN: Map<any, any> = new Map([[String.fromCharCode(106,95,49,56,95,109,117,116,97,116,105,110,103,0),false ], [String.fromCharCode(110,99,104,117,110,107,95,118,95,56,52,0),true ]]);
    let gmailC = false;
    let switch_10S = 5.0;
    let clearg: Map<any, any> = new Map([[String.fromCharCode(97,99,101,110,99,95,121,95,52,50,0),646], [String.fromCharCode(115,108,111,119,109,111,100,101,95,49,95,49,56,0),546]]);
    let sourcef = 1.0;
    let rncorek = String.fromCharCode(122,101,114,111,101,100,95,106,95,51,0);
    let telemetry1 = String.fromCharCode(99,95,55,95,97,110,97,110,100,97,110,0);
    let rightP = String.fromCharCode(105,95,56,49,95,116,114,117,101,109,111,116,105,111,110,0);
    let flipperR = true;
    let checkboxD = 1.0;
    let modalK = String.fromCharCode(99,111,110,116,97,105,110,101,114,95,113,95,53,54,0);
    let ballT: Array<any> = [616, 754];
    let libreactnativejni1 = 1.0;
    let greyD: Array<any> = [800, 606, 377];
    let fnewsz = 0;
    let nativeexB = String.fromCharCode(111,95,49,49,95,108,97,118,117,0);
    let libavcodecC: Array<any> = [998, 512];
    let attributedstringx = String.fromCharCode(97,114,103,117,109,101,110,116,115,95,117,95,51,50,0);
      sourcef -= (parseInt(`${switch_10S}`) * (gmailC ? 5 : 5));
      switch_10S -= privacyN.size + 1;
   if (clearg.size > 2 || 5 > (2 - clearg.size)) {
       let unreadK = 3;
         unreadK &= unreadK;
         unreadK += unreadK / (Math.max(6, unreadK));
         unreadK >>= Math.min(Math.abs(2), 2);
      clearg.set(rncorek, (rncorek == String.fromCharCode(76,0) ? rightP.length : rncorek.length));
   }
      modalK = `${modalK.length >> (Math.min(1, Math.abs(parseInt(`${switch_10S}`))))}`;
   let basketballY = 8199438.0 >= switch_10S;
   do {
      switch_10S /= Math.max(4, modalK.length / 3);
      if (basketballY) {
         break;
      }
   } while (basketballY && ((rightP.length * parseInt(`${switch_10S}`)) <= 4));
   for (let m = 0; m < 3; m++) {
       let umengM = 2.0;
      if (umengM == 1.98) {
          let fastforwardx = 4.0;
          let telemetryP = String.fromCharCode(110,95,49,49,95,100,111,117,98,108,105,110,103,0);
         umengM -= parseInt(`${umengM}`) * 1;
         fastforwardx -= parseFloat(`${telemetryP.length / (Math.max(3, 3))}`);
         telemetryP += `${(String.fromCharCode(81,0) == telemetryP ? telemetryP.length : parseInt(`${fastforwardx}`))}`;
      }
          let update_ntq = String.fromCharCode(109,95,56,54,95,101,110,100,115,0);
         umengM += parseInt(`${umengM}`) * 1;
         update_ntq += "2";
      for (let q = 0; q < 3; q++) {
         umengM /= Math.max(2 << (Math.min(Math.abs(parseInt(`${umengM}`)), 5)), 2);
      }
      rncorek = `${parseInt(`${checkboxD}`) & 2}`;
   }
   let mbridgel = 5907408 <= privacyN.size;
   do {
      privacyN.set(`${switch_10S}`, 3 - parseInt(`${switch_10S}`));
      if (mbridgel) {
         break;
      }
   } while (mbridgel && ((privacyN.size % 1) == 1 || 1 == privacyN.size));
   for (let f = 0; f < 1; f++) {
       let register_y1 = String.fromCharCode(104,101,97,112,95,50,95,51,51,0);
         register_y1 += `${register_y1.length / (Math.max(1, 9))}`;
      if (register_y1.startsWith(`${register_y1.length}`)) {
         register_y1 = `${register_y1.length}`;
      }
      while (register_y1 != register_y1) {
          let white3 = 4;
         register_y1 += "2";
         white3 |= white3;
         break;
      }
      clearg = new Map([[`${flipperR}`, 2 >> (Math.min(Math.abs(parseInt(`${switch_10S}`)), 1))]]);
   }
   if ((modalK.length >> (Math.min(4, Math.abs(clearg.size)))) > 1) {
       let completeR = 0;
       let blackP = String.fromCharCode(110,95,49,50,95,114,101,103,117,108,97,116,101,0);
       let inactivep = 3;
       let single9 = String.fromCharCode(109,106,112,101,103,106,112,101,103,95,51,95,50,50,0);
       let incidentx = 2;
         single9 += "3";
      while ((blackP.length & 2) <= 1) {
         blackP += `${1 >> (Math.min(1, single9.length))}`;
         break;
      }
      for (let j = 0; j < 1; j++) {
         single9 = "3";
      }
          let gradleI = String.fromCharCode(100,118,100,115,117,98,95,105,95,49,57,0);
         inactivep -= single9.length & blackP.length;
         gradleI = `${gradleI.length & 1}`;
      while (!single9.startsWith(`${incidentx}`)) {
         incidentx *= blackP.length;
         break;
      }
      if ((inactivep ^ 4) == 2 || (inactivep ^ 4) == 4) {
          let datah = 0.0;
          let data_: Map<any, any> = new Map([[String.fromCharCode(114,101,97,116,116,97,99,104,95,51,95,54,0),String.fromCharCode(115,95,52,49,95,101,120,116,0)], [String.fromCharCode(105,95,51,55,95,115,121,110,99,104,114,111,110,105,122,101,0),String.fromCharCode(117,110,105,110,116,101,114,112,114,101,116,101,100,95,115,95,53,54,0)]]);
         blackP += "2";
         datah += 1 & data_.size;
         data_.set(`${datah}`, parseInt(`${datah}`));
      }
      if (4 < (single9.length & 5) && (single9.length & 5) < 1) {
         incidentx -= 3 + incidentx;
      }
          let weibow: Map<any, any> = new Map([[String.fromCharCode(102,95,55,95,104,97,115,104,97,98,108,101,0),114], [String.fromCharCode(107,95,52,53,95,100,105,103,105,116,0),698]]);
         single9 += `${(single9 == String.fromCharCode(84,0) ? incidentx : single9.length)}`;
         weibow.set(`${weibow.size}`, 1);
      while (5 < (3 >> (Math.min(5, single9.length))) && (single9.length >> (Math.min(Math.abs(3), 5))) < 3) {
         single9 = `${blackP.length}`;
         break;
      }
      while (2 == (single9.length * 4)) {
         incidentx &= 2;
         break;
      }
          let membership2 = true;
          let mathw = String.fromCharCode(98,108,117,101,95,56,95,51,53,0);
          let save8: Map<any, any> = new Map([[String.fromCharCode(109,98,117,102,95,115,95,52,52,0),594], [String.fromCharCode(108,97,121,111,117,116,115,95,117,95,52,50,0),107], [String.fromCharCode(99,97,109,112,97,105,103,110,95,52,95,54,52,0),889]]);
         blackP = `${blackP.length << (Math.min(Math.abs(2), 5))}`;
         membership2 = mathw.length >= 78;
         mathw = `${1 - save8.size}`;
         save8.set(`${membership2}`, (mathw == String.fromCharCode(116,0) ? mathw.length : (membership2 ? 3 : 5)));
      let mathD = inactivep >= 8533898;
      do {
         inactivep <<= Math.min(3, Math.abs(1 << (Math.min(5, Math.abs(incidentx)))));
         if (mathD) {
            break;
         }
      } while ((completeR > 1) && mathD);
         single9 = `${single9.length | 2}`;
      if (3 == blackP.length) {
         single9 = `${(blackP == String.fromCharCode(116,0) ? inactivep : blackP.length)}`;
      }
         incidentx -= 1 & single9.length;
      modalK = `${(clearg.size + (gmailC ? 4 : 5))}`;
   }
   let serviced = 9118642.0 <= sourcef;
   do {
      sourcef /= Math.max(3, 2);
      if (serviced) {
         break;
      }
   } while ((1 >= (telemetry1.length * parseInt(`${sourcef}`))) && serviced);
   for (let w = 0; w < 1; w++) {
      gmailC = 56 >= clearg.size;
   }

    if (isFocused) {

      switch_10S += modalK.length % 3;
      clearg = new Map([[rncorek, parseInt(`${libreactnativejni1}`) * 3]]);
   if (5.29 < (checkboxD / (Math.max(6, ballT.length)))) {
      ballT.push(parseInt(`${switch_10S}`) / (Math.max(greyD.length, 4)));
   }
       let themeB = String.fromCharCode(101,115,115,97,103,101,95,54,95,51,52,0);
       let animationsU: Array<any> = [384, 878];
       let successu: Array<any> = [String.fromCharCode(118,95,52,54,95,104,111,114,105,122,111,110,116,97,108,0), String.fromCharCode(115,95,56,53,95,105,110,99,108,117,100,101,115,0)];
         themeB += `${animationsU.length}`;
         animationsU = [animationsU.length - themeB.length];
       let a_images = String.fromCharCode(112,108,97,105,110,116,101,120,116,95,53,95,50,0);
       let detailsk = String.fromCharCode(114,95,54,51,95,117,110,107,110,111,119,110,0);
          let suggestionZ = String.fromCharCode(114,116,114,105,109,95,105,95,53,49,0);
          let armva5 = 2.0;
         themeB = `${detailsk.length}`;
         suggestionZ = `${parseInt(`${armva5}`) | suggestionZ.length}`;
         armva5 /= Math.max(1, (String.fromCharCode(72,0) == suggestionZ ? suggestionZ.length : parseInt(`${armva5}`)));
      for (let v = 0; v < 3; v++) {
         successu.push(animationsU.length | themeB.length);
      }
         a_images = `${animationsU.length & successu.length}`;
         detailsk += `${a_images.length}`;
      while (!detailsk.includes(a_images)) {
         a_images = `${1 & a_images.length}`;
         break;
      }
      while (4 >= a_images.length) {
          let rewardvideoK = 3.0;
          let rncoreA = false;
          let encryptM = String.fromCharCode(117,110,102,97,105,114,95,110,95,49,51,0);
          let largeV = 5.0;
         themeB = `${detailsk.length}`;
         rewardvideoK *= parseInt(`${largeV}`) << (Math.min(Math.abs(3), 5));
         rncoreA = !rncoreA;
         encryptM += `${parseInt(`${rewardvideoK}`) ^ 2}`;
         largeV += parseFloat(`${2 / (Math.max(parseInt(`${largeV}`), 3))}`);
         break;
      }
      greyD.push(2);
       let megaphonex = String.fromCharCode(102,95,57,56,95,105,112,102,115,0);
       let gpaya = String.fromCharCode(117,110,115,101,110,100,95,56,95,54,57,0);
      let otherd = megaphonex == String.fromCharCode(109,114,122,99,107,101,109,0);
      do {
         megaphonex += `${(String.fromCharCode(111,0) == megaphonex ? gpaya.length : megaphonex.length)}`;
         if (otherd) {
            break;
         }
      } while (otherd && (!gpaya.startsWith(`${megaphonex.length}`)));
         gpaya = `${2 | megaphonex.length}`;
          let livey = 4;
         megaphonex += `${3 ^ gpaya.length}`;
         livey &= livey >> (Math.min(3, Math.abs(livey)));
      if (gpaya == String.fromCharCode(90,0)) {
         megaphonex += `${(String.fromCharCode(102,0) == gpaya ? megaphonex.length : gpaya.length)}`;
      }
       let splashL = true;
         megaphonex = `${3 % (Math.max(7, gpaya.length))}`;
      telemetry1 = `${gpaya.length >> (Math.min(1, Math.abs(clearg.size)))}`;
       let foregrounds = String.fromCharCode(109,101,110,117,115,95,97,95,55,56,0);
       let searchn = false;
      let codegenB = searchn ? !searchn : searchn;
      do {
         searchn = foregrounds.length <= 75;
         if (codegenB) {
            break;
         }
      } while (codegenB && (foregrounds.endsWith(`${searchn}`)));
         foregrounds = `${foregrounds.length & 3}`;
      for (let l = 0; l < 3; l++) {
         searchn = foregrounds.length > 3 || searchn;
      }
      while (searchn || foregrounds.length <= 5) {
         searchn = ((foregrounds.length - (searchn ? 4 : foregrounds.length)) >= 4);
         break;
      }
      if (searchn) {
          let lightY = false;
          let chart4 = 0;
         foregrounds += "1";
         lightY = !lightY;
         chart4 /= Math.max(((lightY ? 2 : 2) | chart4), 4);
      }
      let anner4 = searchn ? !searchn : searchn;
      do {
          let match_ = String.fromCharCode(114,101,113,115,116,97,116,101,95,57,95,50,48,0);
          let refreshX = String.fromCharCode(100,116,115,104,100,95,104,95,50,50,0);
         searchn = foregrounds.length > 75;
         match_ = `${2 - refreshX.length}`;
         refreshX += `${refreshX.length << (Math.min(Math.abs(1), 2))}`;
         if (anner4) {
            break;
         }
      } while (anner4 && (searchn));
      flipperR = 35 >= foregrounds.length;
   for (let v = 0; v < 2; v++) {
       let libfbjnib = String.fromCharCode(114,101,115,116,95,97,95,55,49,0);
       let settingsM = 2;
       let private_rY = String.fromCharCode(111,95,52,95,100,101,108,101,116,105,111,110,0);
         settingsM /= Math.max(settingsM & 2, 4);
         settingsM <<= Math.min(Math.abs(private_rY.length - 2), 2);
         settingsM ^= libfbjnib.length | 1;
      if (libfbjnib.length >= 3) {
          let commentw = String.fromCharCode(108,105,118,101,95,52,95,56,52,0);
         settingsM >>= Math.min(Math.abs((libfbjnib == String.fromCharCode(109,0) ? commentw.length : libfbjnib.length)), 5);
      }
      if (private_rY.length == libfbjnib.length) {
         libfbjnib += "3";
      }
         private_rY = `${settingsM << (Math.min(Math.abs(1), 3))}`;
          let reactH = String.fromCharCode(104,97,110,100,115,104,97,107,101,95,110,95,52,48,0);
          let halfD: Array<any> = [823, 64, 826];
          let logina = 4.0;
         settingsM <<= Math.min(2, Math.abs(parseInt(`${logina}`)));
         reactH = `${halfD.length / (Math.max(4, reactH.length))}`;
         halfD = [reactH.length];
         logina += (reactH == String.fromCharCode(102,0) ? reactH.length : halfD.length);
         libfbjnib = `${(libfbjnib == String.fromCharCode(106,0) ? libfbjnib.length : private_rY.length)}`;
         settingsM <<= Math.min(3, Math.abs(1 >> (Math.min(5, libfbjnib.length))));
      greyD = [(parseInt(`${switch_10S}`) | (gmailC ? 3 : 5))];
   }
       let settingR = 0;
       let trophy8: Array<any> = [203, 176];
      if (trophy8.length < settingR) {
         trophy8 = [trophy8.length << (Math.min(1, Math.abs(settingR)))];
      }
      if (2 == settingR) {
         trophy8.push(3);
      }
      while ((settingR << (Math.min(trophy8.length, 1))) == 2 || 3 == (2 << (Math.min(2, Math.abs(settingR))))) {
         settingR ^= settingR;
         break;
      }
         trophy8 = [settingR * 1];
      let libglogV = 7640576 <= settingR;
      do {
         settingR >>= Math.min(3, Math.abs(trophy8.length / 3));
         if (libglogV) {
            break;
         }
      } while ((1 < (settingR - trophy8.length) && 2 < (trophy8.length - 1)) && libglogV);
         trophy8 = [1];
      checkboxD /= Math.max(2, rncorek.length);
   if (4.12 <= (5.29 + libreactnativejni1) && libreactnativejni1 <= 5.29) {
      libreactnativejni1 += clearg.size;
   }
   while (rightP.endsWith(`${flipperR}`)) {
      flipperR = rncorek.length <= 52;
      break;
   }
   if ((parseInt(`${sourcef}`) + modalK.length) < 3 || 1.87 < (modalK.length + sourcef)) {
      modalK += `${rightP.length - telemetry1.length}`;
   }
      handleRefresh();
    }
  };

  const checkConnection = useCallback(async () => {
       let gdtadv7 = String.fromCharCode(97,112,105,115,95,50,95,54,55,0);
    let liveR: Map<any, any> = new Map([[String.fromCharCode(118,95,53,49,0),988], [String.fromCharCode(112,97,103,101,104,97,115,104,95,120,95,54,52,0),820], [String.fromCharCode(116,117,114,98,117,108,101,110,99,101,95,55,95,53,55,0),232]]);
    let corer = String.fromCharCode(105,116,97,108,105,97,110,95,105,95,56,0);
    let tooltipsh = 4.0;
    let projectL = 5.0;
    let logoc: Map<any, any> = new Map([[String.fromCharCode(118,95,52,53,95,102,114,97,109,101,115,105,122,101,0),619], [String.fromCharCode(118,111,105,99,101,109,97,105,108,95,109,95,50,54,0),121], [String.fromCharCode(102,111,114,109,97,116,116,105,110,103,95,114,95,51,52,0),581]]);
    let m_managerm = String.fromCharCode(116,114,101,101,95,109,95,50,53,0);
    let eighteen6 = String.fromCharCode(99,111,110,115,117,109,101,114,95,119,95,54,48,0);
    let statisticsZ = String.fromCharCode(117,95,49,52,95,115,101,110,115,111,114,0);
    let toponL: Map<any, any> = new Map([[String.fromCharCode(101,110,99,114,121,112,116,95,118,95,55,0),false ], [String.fromCharCode(101,120,105,115,116,105,110,103,95,57,95,49,57,0),true ], [String.fromCharCode(105,110,116,101,114,97,99,116,105,118,101,95,49,95,49,53,0),true ]]);
    let libturbomodulejsijnio = String.fromCharCode(114,117,115,115,105,97,110,95,51,95,56,53,0);
    let zhuboD: Map<any, any> = new Map([[String.fromCharCode(111,95,53,49,95,108,105,110,107,105,110,103,0),true ], [String.fromCharCode(101,110,116,105,116,121,95,55,95,53,48,0),false ]]);
    let codegen7 = 2.0;
    let guideN = String.fromCharCode(101,95,52,48,95,99,108,99,112,0);
   let forwardg = toponL.size >= 8815002;
   do {
      toponL = new Map([[`${zhuboD.size}`, zhuboD.size + m_managerm.length]]);
      if (forwardg) {
         break;
      }
   } while ((!Array.from(toponL.values()).includes(zhuboD.size)) && forwardg);
      logoc.set(m_managerm, parseInt(`${tooltipsh}`));
      logoc.set(`${libturbomodulejsijnio}`, toponL.size ^ libturbomodulejsijnio.length);
   if (5 == gdtadv7.length) {
      corer = `${libturbomodulejsijnio.length >> (Math.min(Math.abs(1), 2))}`;
   }
   while (3 > libturbomodulejsijnio.length || 3 > gdtadv7.length) {
       let b_viewf = String.fromCharCode(101,95,56,49,95,115,99,97,108,105,110,103,0);
       let animations_: Map<any, any> = new Map([[String.fromCharCode(99,97,116,101,103,111,114,105,115,101,100,95,57,95,49,57,0),586], [String.fromCharCode(114,101,99,111,110,102,105,103,95,50,95,55,54,0),695], [String.fromCharCode(112,95,51,95,120,114,101,115,0),711]]);
       let episodeP = 0.0;
       let expandj = 5;
       let incidentD = String.fromCharCode(113,95,54,57,95,102,108,111,97,116,0);
      if (animations_.size > b_viewf.length) {
          let become5 = 1.0;
          let reada: Map<any, any> = new Map([[String.fromCharCode(98,95,53,56,95,115,116,97,114,116,115,0),32], [String.fromCharCode(115,116,114,101,97,109,102,111,117,114,99,99,95,101,95,50,49,0),868]]);
          let diceZ = 5.0;
         animations_ = new Map([[`${reada.size}`, 1 / (Math.max(5, reada.size))]]);
         become5 *= parseInt(`${diceZ}`);
      }
      let analyticsH = 6610155 >= expandj;
      do {
         expandj %= Math.max(1, (String.fromCharCode(55,0) == incidentD ? incidentD.length : animations_.size));
         if (analyticsH) {
            break;
         }
      } while ((3.17 <= (episodeP * expandj)) && analyticsH);
      if (4 < incidentD.length || 4 < b_viewf.length) {
         b_viewf += `${expandj + 3}`;
      }
       let libfabricjnip = String.fromCharCode(112,97,110,100,105,110,103,95,117,95,51,0);
       let temp5 = String.fromCharCode(99,95,51,53,95,119,101,105,103,104,116,105,110,103,0);
      for (let i = 0; i < 1; i++) {
          let rewindW = String.fromCharCode(101,95,50,49,95,106,115,101,112,0);
          let footballK: Map<any, any> = new Map([[String.fromCharCode(120,112,114,118,95,108,95,51,0),990], [String.fromCharCode(115,107,105,112,95,122,95,54,54,0),779]]);
          let mapping4 = false;
          let signinupp = String.fromCharCode(110,95,57,95,113,115,118,100,101,105,110,116,0);
          let catalogY = 4.0;
         temp5 += `${expandj}`;
         rewindW = `${rewindW.length}`;
         footballK = new Map([[`${footballK.size}`, footballK.size - rewindW.length]]);
         mapping4 = signinupp.length >= 96;
         signinupp = `${footballK.size}`;
         catalogY /= Math.max(parseInt(`${catalogY}`), 5);
      }
      let plashx = b_viewf == String.fromCharCode(51,56,101,118,109,102,105,120,51,0);
      do {
         b_viewf += `${1 % (Math.max(8, incidentD.length))}`;
         if (plashx) {
            break;
         }
      } while (plashx && (animations_.size <= 5));
      if ((5 >> (Math.min(3, Math.abs(animations_.size)))) < 4) {
         b_viewf = `${(String.fromCharCode(66,0) == incidentD ? parseInt(`${episodeP}`) : incidentD.length)}`;
      }
      let liveC = 9508112 >= expandj;
      do {
         expandj ^= expandj - 3;
         if (liveC) {
            break;
         }
      } while (liveC && (episodeP >= expandj));
         temp5 += `${1 | libfabricjnip.length}`;
      let entryM = 7910336 >= animations_.size;
      do {
         animations_.set(incidentD, (String.fromCharCode(52,0) == incidentD ? incidentD.length : expandj));
         if (entryM) {
            break;
         }
      } while ((b_viewf.length < 4) && entryM);
          let mbnativeA = String.fromCharCode(118,95,50,53,0);
          let floating6 = String.fromCharCode(114,95,56,0);
         animations_ = new Map([[floating6, (floating6 == String.fromCharCode(78,0) ? floating6.length : expandj)]]);
         mbnativeA += `${1 / (Math.max(2, mbnativeA.length))}`;
      if ((episodeP / 2.14) <= 2.8) {
          let homeL = 5;
          let applicationG = 3.0;
          let relatedw = String.fromCharCode(102,105,110,103,101,114,115,95,100,95,57,50,0);
          let assistH: Array<any> = [206, 738];
          let pressureu: Array<any> = [930, 182];
         incidentD = `${(incidentD == String.fromCharCode(51,0) ? incidentD.length : parseInt(`${applicationG}`))}`;
         homeL &= pressureu.length - assistH.length;
         applicationG *= parseFloat(`${assistH.length}`);
         relatedw += `${homeL}`;
         pressureu.push(assistH.length ^ 2);
      }
      if ((1 * b_viewf.length) > 2 || (b_viewf.length << (Math.min(Math.abs(1), 1))) > 5) {
          let p_image8 = String.fromCharCode(118,97,114,105,110,116,115,95,110,95,56,54,0);
          let footballd = String.fromCharCode(112,103,109,121,117,118,95,100,95,56,51,0);
          let a_titleL = String.fromCharCode(103,95,54,53,95,108,111,119,101,114,99,97,115,101,100,0);
          let hooksD = 0.0;
         b_viewf = "2";
         p_image8 = `${p_image8.length}`;
         footballd += `${footballd.length}`;
         a_titleL = `${a_titleL.length}`;
         hooksD /= Math.max(1, parseFloat(`${2}`));
      }
      let calendarN = libfabricjnip.length >= 5486094;
      do {
         libfabricjnip += `${temp5.length}`;
         if (calendarN) {
            break;
         }
      } while (((libfabricjnip.length * expandj) <= 2) && calendarN);
          let whistleE = 0.0;
          let latnD = String.fromCharCode(119,95,54,57,95,112,114,117,110,105,110,103,0);
         temp5 = `${(String.fromCharCode(107,0) == incidentD ? parseInt(`${whistleE}`) : incidentD.length)}`;
         whistleE -= parseFloat(`${1}`);
         latnD += `${latnD.length & latnD.length}`;
      libturbomodulejsijnio = `${zhuboD.size}`;
      break;
   }
      eighteen6 = `${3 + toponL.size}`;
       let privilegeV = 0;
         privilegeV *= privilegeV;
          let lessn = String.fromCharCode(122,95,54,57,95,110,112,111,105,110,116,115,0);
         privilegeV >>= Math.min(Math.abs(1 % (Math.max(8, privilegeV))), 1);
         lessn += `${lessn.length}`;
         privilegeV += privilegeV << (Math.min(Math.abs(1), 1));
      projectL += logoc.size << (Math.min(5, Math.abs(liveR.size)));
   let scrollviewl = 9111658.0 <= projectL;
   do {
      projectL *= 3;
      if (scrollviewl) {
         break;
      }
   } while (((projectL + 1.8) <= 5.47 || 4.50 <= (projectL + 1.8)) && scrollviewl);
      projectL += 3;

    const state = await NetInfo.fetch();

   for (let a = 0; a < 3; a++) {
      logoc.set(corer, 1);
   }
   while ((liveR.size - statisticsZ.length) <= 1) {
      statisticsZ += `${logoc.size}`;
      break;
   }
       let sigmobm = 4;
         sigmobm *= 3 + sigmobm;
         sigmobm -= sigmobm;
       let completeM = String.fromCharCode(120,95,56,56,95,115,105,103,115,108,111,116,0);
       let time_86 = String.fromCharCode(103,95,54,54,95,112,108,117,115,0);
      projectL += libturbomodulejsijnio.length * zhuboD.size;
   if (statisticsZ != String.fromCharCode(97,0)) {
       let teamv: Array<any> = [String.fromCharCode(112,108,97,99,101,115,95,103,95,51,56,0), String.fromCharCode(100,105,115,109,105,115,115,95,118,95,55,51,0), String.fromCharCode(112,97,99,101,114,95,109,95,54,0)];
       let watch5 = String.fromCharCode(116,95,54,52,95,99,111,110,102,0);
       let internetT = 0.0;
       let zhubou = String.fromCharCode(111,109,112,111,115,101,95,117,95,52,0);
       let yellowH = String.fromCharCode(115,112,105,110,110,105,110,103,95,111,95,53,51,0);
         zhubou = `${watch5.length | 1}`;
         internetT += parseFloat(`${zhubou.length}`);
       let megaphoneq = String.fromCharCode(115,116,114,114,101,115,101,116,95,49,95,57,56,0);
       let team0 = String.fromCharCode(97,114,116,105,102,97,99,116,95,53,95,52,48,0);
      while (1 >= (watch5.length % 3) || (4.64 + internetT) >= 5.51) {
         internetT -= parseFloat(`${3 - watch5.length}`);
         break;
      }
      let rightQ = String.fromCharCode(113,120,117,55,56,109,103,103,49,51,0) == watch5;
      do {
          let checkboxY = String.fromCharCode(112,112,107,104,95,115,95,57,52,0);
          let mountingh = true;
          let readY = 0;
          let singaporeQ = String.fromCharCode(121,95,51,95,100,100,114,97,110,103,101,0);
          let league0: Map<any, any> = new Map([[String.fromCharCode(104,121,115,116,101,114,101,115,105,115,95,119,95,49,55,0),441], [String.fromCharCode(108,95,52,55,95,100,121,110,108,105,110,107,0),392]]);
         watch5 = `${team0.length}`;
         checkboxY = "2";
         mountingh = singaporeQ.length == league0.size;
         readY >>= Math.min(Math.abs(league0.size % (Math.max(singaporeQ.length, 8))), 4);
         if (rightQ) {
            break;
         }
      } while ((yellowH.length <= watch5.length) && rightQ);
         teamv = [teamv.length];
      while (watch5.includes(`${megaphoneq.length}`)) {
         megaphoneq = `${teamv.length >> (Math.min(Math.abs(2), 3))}`;
         break;
      }
         internetT /= Math.max(5, parseFloat(`${watch5.length / (Math.max(yellowH.length, 8))}`));
          let selectedj = String.fromCharCode(104,116,109,108,109,97,114,107,117,112,95,56,95,54,56,0);
          let aboutz: Map<any, any> = new Map([[String.fromCharCode(113,95,50,48,95,108,105,98,111,112,117,115,0),966], [String.fromCharCode(98,95,57,50,95,117,110,105,102,105,101,100,0),909]]);
          let transferD: Array<any> = [548, 529, 489];
         megaphoneq += "2";
         selectedj += `${aboutz.size / (Math.max(9, transferD.length))}`;
         aboutz.set(`${transferD.length}`, 1);
      for (let p = 0; p < 2; p++) {
         megaphoneq = `${zhubou.length}`;
      }
         teamv = [megaphoneq.length];
       let description__df = String.fromCharCode(114,97,105,115,101,95,53,95,50,48,0);
       let buildw = String.fromCharCode(115,95,53,50,95,112,114,101,112,97,114,105,110,103,0);
      while (team0 != String.fromCharCode(120,0) && description__df == String.fromCharCode(108,0)) {
         description__df += `${team0.length}`;
         break;
      }
         yellowH = `${buildw.length & 3}`;
       let configureN = String.fromCharCode(116,105,109,101,112,101,114,102,114,97,109,101,95,101,95,54,55,0);
      corer += `${liveR.size}`;
   }
   for (let a = 0; a < 3; a++) {
       let aboutm = 3.0;
         aboutm += parseInt(`${aboutm}`) % (Math.max(1, parseInt(`${aboutm}`)));
       let malaysia7 = 0.0;
       let libfbjnif = 1.0;
         aboutm *= 3;
      corer += `${2 / (Math.max(7, liveR.size))}`;
   }
   for (let v = 0; v < 1; v++) {
      m_managerm += `${1 & parseInt(`${projectL}`)}`;
   }
   for (let f = 0; f < 2; f++) {
      tooltipsh -= 1 >> (Math.min(Math.abs(parseInt(`${tooltipsh}`)), 5));
   }
   if (5 < statisticsZ.length && gdtadv7 == String.fromCharCode(112,0)) {
       let time__w8 = String.fromCharCode(102,116,118,99,108,95,122,95,56,48,0);
       let analyticC = String.fromCharCode(97,95,53,95,107,116,111,112,0);
       let subs1: Array<any> = [String.fromCharCode(119,105,114,101,108,101,115,115,95,116,95,52,52,0), String.fromCharCode(109,111,117,116,104,95,50,95,52,57,0), String.fromCharCode(112,101,114,109,105,115,115,105,111,110,115,95,107,95,54,56,0)];
       let libruntimeexecutorg = String.fromCharCode(120,95,49,48,95,104,111,114,105,122,0);
       let emojiS = 3.0;
       let placementk: Array<any> = [308, 48, 196];
       let floating5: Array<any> = [String.fromCharCode(114,105,100,95,118,95,50,55,0), String.fromCharCode(109,95,54,56,95,114,101,119,114,105,116,101,0)];
      let frame_9N = analyticC.length >= 8879267;
      do {
         analyticC += `${(String.fromCharCode(114,0) == analyticC ? analyticC.length : subs1.length)}`;
         if (frame_9N) {
            break;
         }
      } while ((analyticC.endsWith(`${floating5.length}`)) && frame_9N);
      let libswscaleI = subs1.length <= 6385356;
      do {
          let referrer9 = true;
          let toponN: Array<any> = [234, 12];
          let verticalA = 2;
          let stats2 = String.fromCharCode(121,95,57,56,95,100,101,112,97,114,116,109,101,110,116,0);
         subs1 = [libruntimeexecutorg.length];
         referrer9 = stats2.endsWith(`${referrer9}`);
         toponN = [verticalA & 3];
         verticalA >>= Math.min(parseInt(`${Math.abs((1 >> (Math.min(1, Math.abs((referrer9 ? 1 : 4))))))}`), 1);
         stats2 = `${verticalA << (Math.min(5, Math.abs(2)))}`;
         if (libswscaleI) {
            break;
         }
      } while (libswscaleI && (!placementk.includes(subs1.length)));
      if (2 <= (libruntimeexecutorg.length & subs1.length) && (libruntimeexecutorg.length & 2) <= 1) {
          let championa = 5.0;
         subs1.push(3 << (Math.min(1, time__w8.length)));
         championa += parseFloat(`${2}`);
      }
       let modelsS = 5;
      for (let y = 0; y < 3; y++) {
          let others: Array<any> = [825, 659];
          let clubj: Array<any> = [227, 665, 169];
          let chinasamee = String.fromCharCode(111,98,106,110,105,100,95,104,95,57,48,0);
          let editD: Array<any> = [751, 3, 89];
          let agreementw = String.fromCharCode(108,111,116,116,105,101,109,111,100,101,108,95,100,95,49,50,0);
         floating5 = [floating5.length >> (Math.min(clubj.length, 4))];
         others.push(2 | agreementw.length);
         clubj = [1];
         chinasamee += "1";
         editD.push(others.length * agreementw.length);
      }
         floating5 = [modelsS >> (Math.min(libruntimeexecutorg.length, 2))];
          let redirecti = String.fromCharCode(112,114,105,110,116,95,121,95,50,49,0);
          let nalyticsZ = String.fromCharCode(108,95,56,54,95,110,97,109,101,115,0);
          let questD = String.fromCharCode(108,95,57,50,95,109,118,100,97,116,97,0);
         emojiS += time__w8.length * questD.length;
         redirecti = `${nalyticsZ.length % (Math.max(redirecti.length, 5))}`;
         nalyticsZ += `${redirecti.length}`;
         questD = `${nalyticsZ.length}`;
      let ewardedy = time__w8 == String.fromCharCode(121,120,119,119,119,105,114,99,121,55,0);
      do {
         time__w8 += `${modelsS}`;
         if (ewardedy) {
            break;
         }
      } while ((!time__w8.startsWith(`${emojiS}`)) && ewardedy);
      let manifestc = time__w8 == String.fromCharCode(98,108,121,52,115,111,0);
      do {
         time__w8 = `${analyticC.length}`;
         if (manifestc) {
            break;
         }
      } while (manifestc && (time__w8.length <= emojiS));
         subs1 = [2 << (Math.min(4, Math.abs(parseInt(`${emojiS}`))))];
         subs1 = [3];
         modelsS -= 2 >> (Math.min(Math.abs(modelsS), 5));
         emojiS -= parseInt(`${emojiS}`);
      while (placementk.length > 5) {
          let footballs: Array<any> = [String.fromCharCode(113,95,55,57,95,105,100,101,97,108,0), String.fromCharCode(102,95,52,56,95,98,108,111,98,0), String.fromCharCode(117,95,53,95,97,103,101,0)];
          let taiwanC: Map<any, any> = new Map([[String.fromCharCode(119,101,98,118,105,101,119,95,99,95,50,0),893], [String.fromCharCode(118,116,97,98,95,103,95,54,48,0),542]]);
         placementk.push(1);
         footballs.push(footballs.length % (Math.max(2, 4)));
         taiwanC.set(`${footballs.length}`, 3 / (Math.max(9, taiwanC.size)));
         break;
      }
      statisticsZ += `${2 / (Math.max(7, parseInt(`${tooltipsh}`)))}`;
   }
      liveR = new Map([[`${toponL.size}`, (libturbomodulejsijnio == String.fromCharCode(117,0) ? toponL.size : libturbomodulejsijnio.length)]]);
    const offline = !(state.isConnected && state.isInternetReachable);

   while (5 < (3 - libturbomodulejsijnio.length) || 2 < (3 - zhuboD.size)) {
      libturbomodulejsijnio += `${libturbomodulejsijnio.length / (Math.max(1, 6))}`;
      break;
   }
   while (libturbomodulejsijnio.endsWith(m_managerm)) {
       let checkboxE = true;
       let matchesm = 1;
       let sliderw = 0;
       let nativeexA = String.fromCharCode(111,112,116,105,111,110,115,95,50,95,51,0);
      let libfabricjniO = checkboxE ? !checkboxE : checkboxE;
      do {
          let sendB = true;
          let foundA = String.fromCharCode(102,95,50,57,95,115,112,114,105,116,101,0);
          let telegramp = 5.0;
          let holderT = 0.0;
         checkboxE = (99 < ((checkboxE ? nativeexA.length : 99) ^ nativeexA.length));
         sendB = (foundA.length - parseInt(`${holderT}`)) == 53;
         foundA += `${parseInt(`${holderT}`)}`;
         telegramp *= 1;
         if (libfabricjniO) {
            break;
         }
      } while (libfabricjniO && (matchesm < 3));
      while (sliderw <= 5) {
         nativeexA += `${matchesm}`;
         break;
      }
         nativeexA += `${((checkboxE ? 1 : 1) - sliderw)}`;
      let libloggerp = 5657020 <= sliderw;
      do {
         sliderw -= 1 + matchesm;
         if (libloggerp) {
            break;
         }
      } while ((1 > (2 - nativeexA.length) || 2 > (sliderw - nativeexA.length)) && libloggerp);
         nativeexA += `${matchesm}`;
      let filter8 = matchesm <= 8974726;
      do {
         matchesm <<= Math.min(2, Math.abs(matchesm + 3));
         if (filter8) {
            break;
         }
      } while (filter8 && ((matchesm >> (Math.min(Math.abs(4), 2))) < 5 || (sliderw >> (Math.min(Math.abs(4), 1))) < 4));
         sliderw &= 1;
      while (4 <= matchesm) {
         checkboxE = nativeexA == String.fromCharCode(101,0);
         break;
      }
         sliderw += 2 | sliderw;
      while (matchesm == 5) {
         matchesm ^= ((checkboxE ? 1 : 2) << (Math.min(Math.abs(matchesm), 1)));
         break;
      }
          let brightnessX = String.fromCharCode(109,111,100,105,116,121,95,112,95,54,49,0);
          let placementY = String.fromCharCode(122,95,52,57,95,98,108,111,99,107,100,0);
         matchesm %= Math.max(3, brightnessX.length & 3);
         brightnessX = `${(placementY == String.fromCharCode(110,0) ? placementY.length : placementY.length)}`;
      while (3 >= (nativeexA.length / (Math.max(4, 8))) || 1 >= (4 / (Math.max(4, nativeexA.length)))) {
          let ewardedK = 1.0;
          let chinac = true;
          let next8 = String.fromCharCode(119,95,56,95,97,100,114,109,0);
          let anner1 = String.fromCharCode(118,115,121,110,99,95,110,95,49,53,0);
          let rewindi = 0.0;
         nativeexA = `${(parseInt(`${rewindi}`) ^ (chinac ? 3 : 3))}`;
         ewardedK += parseFloat(`${anner1.length % 2}`);
         chinac = anner1.length > next8.length;
         next8 = `${3 & parseInt(`${ewardedK}`)}`;
         rewindi += parseFloat(`${1 / (Math.max(2, anner1.length))}`);
         break;
      }
      libturbomodulejsijnio = `${parseInt(`${projectL}`) >> (Math.min(Math.abs(3), 1))}`;
      break;
   }
   while ((4 >> (Math.min(5, Math.abs(toponL.size)))) > 2) {
      toponL = new Map([[`${toponL.size}`, gdtadv7.length & toponL.size]]);
      break;
   }
   for (let q = 0; q < 3; q++) {
       let upgradei: Array<any> = [769, 855];
       let membership6: Map<any, any> = new Map([[String.fromCharCode(98,95,51,48,95,115,111,100,101,97,108,108,111,99,0),232], [String.fromCharCode(107,95,49,54,95,110,111,100,101,115,0),681], [String.fromCharCode(104,105,98,105,116,95,120,95,55,57,0),896]]);
       let templateprocessorO: Array<any> = [369, 145];
       let liveG = 3.0;
          let ewardedh = String.fromCharCode(97,115,121,110,99,104,114,111,110,111,117,115,108,121,95,49,95,57,55,0);
         upgradei.push(parseInt(`${liveG}`));
         ewardedh += `${2 << (Math.min(5, ewardedh.length))}`;
         templateprocessorO = [templateprocessorO.length & 2];
         templateprocessorO = [membership6.size * 1];
       let crownD: Map<any, any> = new Map([[String.fromCharCode(105,103,110,97,108,95,117,95,53,50,0),410], [String.fromCharCode(121,95,50,52,95,97,99,102,102,0),923]]);
      for (let y = 0; y < 2; y++) {
         liveG /= Math.max(parseFloat(`${templateprocessorO.length}`), 2);
      }
         crownD = new Map([[`${crownD.size}`, parseInt(`${liveG}`) / (Math.max(crownD.size, 7))]]);
      if (3 <= (2 - crownD.size) && 4 <= (2 - crownD.size)) {
         crownD = new Map([[`${upgradei.length}`, 1 << (Math.min(Math.abs(parseInt(`${liveG}`)), 3))]]);
      }
      if (2 < (upgradei.length >> (Math.min(Math.abs(2), 1)))) {
         liveG *= parseFloat(`${crownD.size}`);
      }
         liveG += parseFloat(`${crownD.size}`);
         liveG += parseFloat(`${upgradei.length}`);
          let thailandT = 1.0;
         crownD.set(`${templateprocessorO.length}`, membership6.size % (Math.max(2, 2)));
         thailandT -= parseFloat(`${1}`);
      if (1 <= (crownD.size >> (Math.min(Math.abs(5), 4))) || (liveG / 4.34) <= 2.20) {
          let libturbomodulejsijniC = String.fromCharCode(117,95,55,55,95,104,97,115,104,100,101,115,116,114,111,121,0);
         crownD = new Map([[`${upgradei.length}`, upgradei.length & 1]]);
         libturbomodulejsijniC += "1";
      }
      statisticsZ += `${membership6.size}`;
   }
      tooltipsh /= Math.max(5, 3 + libturbomodulejsijnio.length);
      zhuboD = new Map([[`${logoc.size}`, parseInt(`${codegen7}`)]]);
      statisticsZ = `${gdtadv7.length % (Math.max(2, 6))}`;
   for (let f = 0; f < 1; f++) {
       let nativeexv: Map<any, any> = new Map([[String.fromCharCode(116,111,114,101,100,95,50,95,51,50,0),415], [String.fromCharCode(115,109,111,111,116,104,95,99,95,50,52,0),600]]);
       let nterstitial4: Map<any, any> = new Map([[String.fromCharCode(112,111,108,121,95,103,95,51,48,0),String.fromCharCode(116,111,111,108,99,104,97,105,110,95,54,95,52,57,0)], [String.fromCharCode(119,105,110,97,114,109,95,55,95,52,53,0),String.fromCharCode(120,95,56,50,95,112,108,97,105,110,116,101,120,116,0)], [String.fromCharCode(112,114,101,101,120,105,115,116,105,110,103,95,49,95,54,48,0),String.fromCharCode(111,112,116,105,109,105,122,97,116,105,111,110,95,119,95,57,53,0)]]);
       let club4 = String.fromCharCode(108,95,57,48,95,97,112,115,0);
       let watchd: Map<any, any> = new Map([[String.fromCharCode(109,97,110,97,103,101,114,95,104,95,49,56,0),String.fromCharCode(104,95,55,48,95,100,101,116,101,99,116,105,111,110,0)], [String.fromCharCode(115,111,99,97,110,116,114,99,118,109,111,114,101,95,117,95,50,56,0),String.fromCharCode(97,97,99,115,98,114,100,97,116,97,95,51,95,50,51,0)], [String.fromCharCode(118,95,55,53,95,115,117,112,101,114,103,114,111,117,112,0),String.fromCharCode(97,116,117,114,97,116,105,111,110,95,109,95,48,0)]]);
      if ((nativeexv.size + watchd.size) >= 4 || (4 + watchd.size) >= 3) {
          let countryq = 2.0;
          let textF = String.fromCharCode(117,95,53,49,95,115,117,98,99,101,108,0);
          let stepE = String.fromCharCode(112,95,49,54,95,105,118,102,101,110,99,0);
          let attributedstringg = 4.0;
         nativeexv.set(`${attributedstringg}`, watchd.size);
         countryq -= parseFloat(`${stepE.length}`);
         textF = `${stepE.length}`;
         attributedstringg -= parseFloat(`${textF.length}`);
      }
          let lessk: Array<any> = [418, 57];
         club4 += `${lessk.length >> (Math.min(Math.abs(3), 4))}`;
         club4 = `${nterstitial4.size}`;
          let hejil = false;
          let searchbar5: Map<any, any> = new Map([[String.fromCharCode(98,95,50,54,0),false ], [String.fromCharCode(99,111,109,112,101,110,115,97,116,101,95,116,95,56,51,0),true ], [String.fromCharCode(121,95,56,57,95,114,101,112,114,101,115,101,110,116,97,116,105,111,110,115,0),false ]]);
          let telegramd = String.fromCharCode(118,95,57,49,95,116,105,109,101,115,99,97,108,101,0);
         club4 += `${searchbar5.size << (Math.min(Math.abs(1), 3))}`;
         hejil = telegramd.length > telegramd.length;
         searchbar5 = new Map([[telegramd, telegramd.length | 2]]);
         watchd.set(`${nterstitial4.size}`, 3);
       let membere = String.fromCharCode(122,95,53,53,95,98,101,114,114,105,101,115,0);
         membere = `${membere.length}`;
         nterstitial4.set(`${nativeexv.size}`, nterstitial4.size);
         nativeexv.set(club4, club4.length);
      for (let i = 0; i < 1; i++) {
         nterstitial4 = new Map([[`${watchd.size}`, nterstitial4.size >> (Math.min(Math.abs(watchd.size), 1))]]);
      }
       let basketballt = String.fromCharCode(113,115,118,115,99,97,108,101,95,118,95,49,52,0);
       let recommendationU = String.fromCharCode(117,110,122,116,101,108,108,95,108,95,57,50,0);
         membere += `${nterstitial4.size}`;
      toponL.set(`${corer}`, logoc.size / (Math.max(9, corer.length)));
   }
   for (let l = 0; l < 3; l++) {
      corer += `${1 ^ logoc.size}`;
   }
    setIsOffline(offline);

      logoc = new Map([[`${codegen7}`, (gdtadv7 == String.fromCharCode(73,0) ? gdtadv7.length : parseInt(`${codegen7}`))]]);
   let r_centerQ = tooltipsh >= 5254788.0;
   do {
      tooltipsh *= corer.length / (Math.max(libturbomodulejsijnio.length, 4));
      if (r_centerQ) {
         break;
      }
   } while (r_centerQ && ((1.86 - tooltipsh) < 5.42));
      codegen7 *= parseFloat(`${logoc.size & 1}`);
   while (3 == (eighteen6.length << (Math.min(4, Math.abs(toponL.size))))) {
      toponL.set(`${libturbomodulejsijnio}`, (String.fromCharCode(77,0) == libturbomodulejsijnio ? logoc.size : libturbomodulejsijnio.length));
      break;
   }
      libturbomodulejsijnio = `${(String.fromCharCode(54,0) == corer ? parseInt(`${tooltipsh}`) : corer.length)}`;
   for (let v = 0; v < 3; v++) {
       let loadingD = String.fromCharCode(114,95,55,95,114,101,110,100,105,116,105,111,110,0);
       let libswresamples = 4.0;
       let filterV = 0.0;
      for (let q = 0; q < 3; q++) {
         libswresamples -= (loadingD == String.fromCharCode(89,0) ? parseInt(`${libswresamples}`) : loadingD.length);
      }
      if ((filterV - 3.21) >= 1.25) {
          let analyticG = 5.0;
          let catalog0: Array<any> = [993, 826];
          let controlsO: Map<any, any> = new Map([[String.fromCharCode(116,104,101,110,95,121,95,51,50,0),false ], [String.fromCharCode(109,97,116,116,101,95,50,95,55,0),true ], [String.fromCharCode(97,95,54,54,95,116,114,97,110,115,117,112,112,0),false ]]);
         filterV *= parseFloat(`${catalog0.length & 1}`);
         analyticG += controlsO.size;
         catalog0.push(controlsO.size % 1);
      }
      if ((libswresamples / 2) <= 1.43) {
          let xadsdkQ = 3.0;
          let sigmobP = String.fromCharCode(98,95,53,52,95,115,115,105,109,118,0);
         filterV *= parseFloat(`${parseInt(`${libswresamples}`) + 3}`);
         xadsdkQ *= sigmobP.length & 2;
         sigmobP = `${sigmobP.length}`;
      }
         filterV /= Math.max(parseFloat(`${parseInt(`${libswresamples}`)}`), 3);
         filterV += parseFloat(`${parseInt(`${filterV}`)}`);
      while (2.69 >= (2.58 * libswresamples)) {
         libswresamples += loadingD.length;
         break;
      }
          let selectionb: Array<any> = [597, 526];
         libswresamples /= Math.max(3, 1 << (Math.min(3, Math.abs(parseInt(`${filterV}`)))));
         selectionb = [selectionb.length];
         libswresamples += parseInt(`${libswresamples}`) ^ loadingD.length;
         loadingD = `${loadingD.length}`;
      codegen7 *= parseFloat(`${liveR.size}`);
   }
      toponL.set(`${tooltipsh}`, parseInt(`${tooltipsh}`));
      toponL = new Map([[`${toponL.size}`, toponL.size]]);
      toponL = new Map([[`${zhuboD.size}`, 2 * zhuboD.size]]);
    if (!offline) {

   while (statisticsZ.length >= 5) {
      statisticsZ = `${libturbomodulejsijnio.length}`;
      break;
   }
      statisticsZ = `${2 % (Math.max(2, liveR.size))}`;
       let giftN = String.fromCharCode(110,100,111,116,115,95,122,95,51,0);
       let pauseK = String.fromCharCode(117,95,52,49,95,112,107,103,99,111,110,102,105,103,0);
      for (let j = 0; j < 2; j++) {
         giftN = "1";
      }
         giftN = `${pauseK.length}`;
      if (2 <= pauseK.length || 2 <= giftN.length) {
         pauseK = "2";
      }
         giftN = `${giftN.length}`;
      for (let a = 0; a < 3; a++) {
         pauseK += `${pauseK.length * 1}`;
      }
      if (pauseK.length == 3 || giftN.length == 3) {
         pauseK += "2";
      }
      statisticsZ = `${corer.length}`;
   if (liveR.size < libturbomodulejsijnio.length) {
      libturbomodulejsijnio = `${corer.length}`;
   }
   for (let p = 0; p < 1; p++) {
       let mintegral5: Map<any, any> = new Map([[String.fromCharCode(116,95,50,48,95,115,104,111,114,116,99,117,116,115,0),true ], [String.fromCharCode(100,113,117,97,110,116,95,57,95,50,0),false ]]);
      while ((3 - mintegral5.size) < 3 || (3 - mintegral5.size) < 2) {
          let reactA = 2;
          let promotionn = String.fromCharCode(99,111,108,114,97,109,95,101,95,56,53,0);
          let libtan7 = true;
         mintegral5.set(`${libtan7}`, (String.fromCharCode(109,0) == promotionn ? promotionn.length : (libtan7 ? 2 : 4)));
         reactA ^= 1 * reactA;
         break;
      }
         mintegral5 = new Map([[`${mintegral5.size}`, 1 << (Math.min(5, Math.abs(mintegral5.size)))]]);
      if (2 < (mintegral5.size + mintegral5.size)) {
         mintegral5 = new Map([[`${mintegral5.size}`, mintegral5.size >> (Math.min(Math.abs(3), 2))]]);
      }
      codegen7 -= parseFloat(`${m_managerm.length - 2}`);
   }
   while (libturbomodulejsijnio != String.fromCharCode(103,0) || guideN != String.fromCharCode(72,0)) {
      libturbomodulejsijnio = `${libturbomodulejsijnio.length * 2}`;
      break;
   }
   for (let t = 0; t < 3; t++) {
       let libjsiH: Array<any> = [185, 129, 179];
       let singlea = 0;
       let windP: Map<any, any> = new Map([[String.fromCharCode(101,110,118,101,108,111,112,101,100,95,57,95,54,0),false ], [String.fromCharCode(115,117,98,116,105,116,108,101,95,105,95,57,56,0),false ]]);
       let invitei = String.fromCharCode(122,95,52,95,115,117,98,105,116,101,109,115,0);
         windP = new Map([[`${windP.size}`, windP.size % (Math.max(3, 1))]]);
         singlea %= Math.max(windP.size | libjsiH.length, 2);
      let private_h8S = 8361764 >= invitei.length;
      do {
         invitei += "1";
         if (private_h8S) {
            break;
         }
      } while ((4 <= windP.size) && private_h8S);
         invitei += "1";
       let dangerK: Array<any> = [725, 70];
       let mimo9: Array<any> = [586, 305];
      while (!dangerK.includes(mimo9.length)) {
         mimo9.push(windP.size % (Math.max(invitei.length, 5)));
         break;
      }
          let mountingz: Array<any> = [219, 193, 690];
          let u_centery = 3;
          let topicn = true;
         dangerK = [(invitei == String.fromCharCode(67,0) ? dangerK.length : invitei.length)];
         mountingz.push(u_centery);
         u_centery *= mountingz.length ^ 2;
         topicn = mountingz.includes(topicn);
      for (let j = 0; j < 2; j++) {
          let placeholderP = 2.0;
          let combinek = 0;
          let dicet: Map<any, any> = new Map([[String.fromCharCode(117,110,100,101,102,105,110,101,100,95,98,95,50,56,0),451], [String.fromCharCode(102,105,108,108,101,114,95,116,95,51,53,0),381], [String.fromCharCode(99,111,108,108,95,106,95,50,54,0),799]]);
          let dataZ = String.fromCharCode(114,95,50,95,108,116,97,98,108,101,0);
          let philippinesp: Map<any, any> = new Map([[String.fromCharCode(112,101,114,109,95,110,95,57,57,0),444], [String.fromCharCode(118,108,111,103,95,55,95,56,57,0),166]]);
         windP = new Map([[`${windP.size}`, windP.size & 1]]);
         placeholderP *= parseFloat(`${3 >> (Math.min(5, Math.abs(philippinesp.size)))}`);
         combinek >>= Math.min(Math.abs(3), 4);
         dicet = new Map([[dataZ, 1 / (Math.max(4, combinek))]]);
         dataZ = `${(String.fromCharCode(117,0) == dataZ ? dicet.size : dataZ.length)}`;
         philippinesp = new Map([[`${dicet.size}`, combinek & dicet.size]]);
      }
         singlea &= 2;
          let twitterK: Array<any> = [956, 960];
         dangerK.push(libjsiH.length << (Math.min(Math.abs(2), 3)));
         twitterK.push(twitterK.length);
      for (let x = 0; x < 2; x++) {
         mimo9.push(mimo9.length);
      }
       let malaysiaG: Map<any, any> = new Map([[String.fromCharCode(108,95,57,50,95,102,105,108,108,112,0),String.fromCharCode(97,100,100,95,105,95,49,52,0)], [String.fromCharCode(99,95,49,53,95,122,108,105,98,112,114,105,109,101,0),String.fromCharCode(119,95,57,57,95,109,100,99,118,0)], [String.fromCharCode(101,95,51,54,95,119,111,114,100,115,0),String.fromCharCode(116,95,53,50,95,105,110,115,101,114,116,0)]]);
       let typingY: Map<any, any> = new Map([[String.fromCharCode(111,95,49,51,95,113,117,101,117,101,100,0),64], [String.fromCharCode(97,117,116,111,99,111,114,114,101,108,97,116,105,111,110,95,121,95,52,54,0),331]]);
      libturbomodulejsijnio += "2";
   }
   while (5 < guideN.length) {
      liveR = new Map([[`${zhuboD.size}`, zhuboD.size << (Math.min(libturbomodulejsijnio.length, 5))]]);
      break;
   }
   if (5 < (5 & guideN.length) && 5 < (zhuboD.size & guideN.length)) {
      zhuboD.set(corer, corer.length);
   }
      handleRefresh();
    }
  }, []);

  useEffect(() => {
    setIsOffline(settingsReducer.isOffline);
  }, []);

  useFocusEffect(useCallback(() => {
    if (!settingsReducer.isOffline && settingsReducer.isOffline !== isOffline) {
      setIsOffline(settingsReducer.isOffline);
      handleRefresh();
    } else if (settingsReducer.isOffline) {
      return () => {
        setIsOffline(settingsReducer.isOffline);
      }
    }
  }, [settingsReducer.isOffline]));

  
  useEffect(() => {
    const unsubscribe = navigation.addListener('tabPress', handleTabPress);

    
    return () => unsubscribe();
  }, [navigation, isFocused]);

  const fetchPlaylist = useCallback((page: number) =>
    yys_MaterialModal.getTopicIosTmp()
      .then((json: yys_Anythink) => {
        setTotalPage(Number(json.TotalPageCount));
        return Object.values(json);
      }), []);

  const {
    data: playlists,
    isSuccess,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    isFetching,
  } = useInfiniteQuery(
    ['vodPlaylist'],
    ({ pageParam = 1 }) => fetchPlaylist(pageParam),
    {
      getNextPageParam: (lastPage, allPages) => {
        if (lastPage === null) {
          return undefined;
        }
        const nextPage = allPages.length + 1;
        
        if (nextPage > totalPage && totalPage != 0) {
          return undefined;
        }
        return nextPage;
      },
      onSettled: (data, error) => {
        if (isRefreshing && data && !error) {
          setIsRefreshing(false);
        }

        if (isSwipeRefreshing && data && !error) {
          setIsSwipeRefreshing(false);
        }
      },
      
      
      
      
      
    },
  );

  const renderItem = ({ item }: yys_Mbsplash) => (
    <VodPlaylist playlist={item} titleStyle={{ color: colors.text }} />
  );

  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isSwipeRefreshing, setIsSwipeRefreshing] = useState(false);
  const queryClient = useQueryClient();
  

  const handleRefresh = useCallback(async (isSwipe: boolean = false) => {
       let statisticsU = String.fromCharCode(111,112,101,114,97,116,105,110,103,95,98,95,53,54,0);
    let filem = 1.0;
    let showK = 0;
    let libflipper0 = String.fromCharCode(119,95,49,55,95,111,112,116,0);
    let mappingJ = 2;
    let interstitialf: Map<any, any> = new Map([[String.fromCharCode(101,95,56,95,109,111,110,111,98,105,116,0),933], [String.fromCharCode(114,101,113,117,115,116,101,114,95,50,95,52,57,0),289], [String.fromCharCode(122,95,52,52,95,115,117,98,116,114,97,99,116,109,111,100,0),469]]);
    let libimagepipelineN: Map<any, any> = new Map([[String.fromCharCode(108,95,52,50,95,99,116,114,0),true ], [String.fromCharCode(115,95,54,52,95,110,117,108,108,115,114,99,0),true ], [String.fromCharCode(121,111,102,102,115,101,116,95,117,95,51,48,0),true ]]);
    let clubU = true;
    let currentc = String.fromCharCode(110,95,54,55,95,112,111,108,121,107,101,121,0);
    let flyerJ = 4.0;
    let plusD = true;
    let catagoryT = 4;
    let halfo = true;
    let dangero = String.fromCharCode(99,95,52,50,95,99,116,120,0);
    let viewsh = String.fromCharCode(108,111,111,115,101,95,112,95,55,50,0);
    let ynewinterstitial2 = String.fromCharCode(121,95,56,52,95,98,108,111,99,107,105,110,103,0);
      libimagepipelineN = new Map([[`${interstitialf.size}`, interstitialf.size]]);
   if (showK < 5) {
      currentc += `${3 << (Math.min(1, Math.abs(mappingJ)))}`;
   }
   for (let b = 0; b < 1; b++) {
       let searchx = 0.0;
       let entryR = 5.0;
       let injuryV: Map<any, any> = new Map([[String.fromCharCode(116,101,115,116,114,101,115,117,108,116,95,116,95,50,51,0),String.fromCharCode(103,95,57,54,95,109,98,108,111,111,112,0)], [String.fromCharCode(100,95,52,50,95,113,117,97,110,116,105,108,101,0),String.fromCharCode(104,95,57,50,95,102,108,97,116,116,101,110,0)], [String.fromCharCode(114,101,116,114,97,110,115,109,105,116,115,95,102,95,50,54,0),String.fromCharCode(121,95,53,51,95,120,110,97,115,109,0)]]);
       let libmapbufferjnic = String.fromCharCode(112,95,54,55,95,100,105,115,116,111,114,116,105,111,110,0);
       let mbnativeadvanced6 = 1;
      while (!libmapbufferjnic.includes(`${mbnativeadvanced6}`)) {
         mbnativeadvanced6 &= injuryV.size | libmapbufferjnic.length;
         break;
      }
       let thumbnailE = true;
       let componentf = false;
      if (!componentf) {
         searchx *= (parseFloat(`${2 >> (Math.min(Math.abs((componentf ? 3 : 1)), 3))}`));
      }
      let bella = 5782461.0 >= searchx;
      do {
         searchx /= Math.max(parseFloat(`${injuryV.size / (Math.max(2, 3))}`), 2);
         if (bella) {
            break;
         }
      } while (bella && (!Array.from(injuryV.keys()).includes(`${searchx}`)));
      let default_x4h = searchx >= 6030293.0;
      do {
          let actionsx = String.fromCharCode(115,95,52,55,95,111,119,110,101,114,115,0);
         searchx += parseFloat(`${2 - actionsx.length}`);
         if (default_x4h) {
            break;
         }
      } while (default_x4h && (!componentf));
         libmapbufferjnic += `${parseInt(`${entryR}`) * 1}`;
          let update_4h: Array<any> = [888, 132, 202];
         thumbnailE = 6 > update_4h.length;
      if ((libmapbufferjnic.length ^ 1) >= 5 || (1 ^ libmapbufferjnic.length) >= 2) {
         libmapbufferjnic = `${parseInt(`${searchx}`) >> (Math.min(4, Math.abs(2)))}`;
      }
         mbnativeadvanced6 ^= 1 | mbnativeadvanced6;
      for (let v = 0; v < 2; v++) {
         searchx -= parseFloat(`${1}`);
      }
      for (let q = 0; q < 3; q++) {
         entryR += parseFloat(`${3}`);
      }
         mbnativeadvanced6 >>= Math.min(5, Math.abs(((thumbnailE ? 5 : 4))));
      while (!componentf || (4 / (Math.max(5, mbnativeadvanced6))) > 4) {
         mbnativeadvanced6 <<= Math.min(1, libmapbufferjnic.length);
         break;
      }
         entryR += parseFloat(`${2}`);
      let annera = 9456687 >= injuryV.size;
      do {
         injuryV.set(`${libmapbufferjnic}`, 3);
         if (annera) {
            break;
         }
      } while (annera && (injuryV.size == libmapbufferjnic.length));
      interstitialf.set(`${libmapbufferjnic}`, libmapbufferjnic.length - 2);
   }

    if (isSwipe) {

       let foregroundC = false;
       let searchO = String.fromCharCode(107,95,50,57,95,101,109,111,114,121,0);
      for (let o = 0; o < 2; o++) {
         foregroundC = (31 == ((!foregroundC ? 31 : searchO.length) / (Math.max(6, searchO.length))));
      }
      if (foregroundC && searchO.length <= 2) {
          let readE: Array<any> = [844, 414, 732];
          let info0 = 0.0;
          let mapbufferX = 3.0;
         foregroundC = info0 < 71.53 && !foregroundC;
         readE.push(2);
         info0 += parseFloat(`${2}`);
         mapbufferX -= parseFloat(`${readE.length}`);
      }
         searchO += `${((foregroundC ? 5 : 4) % 3)}`;
      while (2 == searchO.length || !foregroundC) {
         foregroundC = !foregroundC;
         break;
      }
      let vietnamU = foregroundC ? !foregroundC : foregroundC;
      do {
         foregroundC = searchO.length <= 21 && !foregroundC;
         if (vietnamU) {
            break;
         }
      } while (vietnamU && (5 == searchO.length));
      for (let y = 0; y < 2; y++) {
          let eactl = true;
          let entry7 = true;
         foregroundC = searchO.length < 77;
         eactl = !entry7;
         entry7 = !entry7 && eactl;
      }
      clubU = 76 == interstitialf.size;
   let splashR = 8553387 <= libimagepipelineN.size;
   do {
       let launchs = 2.0;
         launchs -= parseFloat(`${parseInt(`${launchs}`)}`);
         launchs *= parseFloat(`${3 / (Math.max(3, parseInt(`${launchs}`)))}`);
         launchs -= parseFloat(`${parseInt(`${launchs}`) ^ 3}`);
      libimagepipelineN.set(`${mappingJ}`, interstitialf.size);
      if (splashR) {
         break;
      }
   } while ((3 <= libimagepipelineN.size) && splashR);
       let becomeo = String.fromCharCode(100,115,116,115,117,98,95,118,95,49,50,0);
          let placeholder7 = false;
         becomeo += `${(becomeo == String.fromCharCode(102,0) ? becomeo.length : (placeholder7 ? 1 : 5))}`;
         becomeo = `${becomeo.length | 3}`;
       let combinedS = String.fromCharCode(116,95,49,54,95,102,105,111,0);
       let alerta = String.fromCharCode(115,117,112,112,114,101,115,115,95,117,95,53,49,0);
      clubU = libimagepipelineN.size >= libflipper0.length;
      setIsSwipeRefreshing(true);
    } else {

       let subsE = false;
      let librrc_ = subsE ? !subsE : subsE;
      do {
         subsE = !subsE;
         if (librrc_) {
            break;
         }
      } while ((!subsE) && librrc_);
       let emptyd = 2.0;
         emptyd -= parseInt(`${emptyd}`) % 3;
      libimagepipelineN.set(`${currentc}`, currentc.length);
   if (mappingJ < interstitialf.size) {
       let regengt: Map<any, any> = new Map([[String.fromCharCode(111,95,53,55,95,99,112,108,115,99,97,108,101,115,0),909], [String.fromCharCode(114,95,49,48,48,95,114,111,116,97,116,105,111,110,97,110,103,108,101,0),316]]);
       let successf = 1.0;
       let package_2M = 5.0;
       let modelsN = String.fromCharCode(121,95,49,48,48,95,100,101,97,108,108,111,99,97,116,101,0);
       let zhengpianC: Map<any, any> = new Map([[String.fromCharCode(115,95,51,55,95,97,115,99,0),true ], [String.fromCharCode(115,104,117,116,100,111,119,110,95,113,95,53,57,0),false ], [String.fromCharCode(113,95,52,51,95,112,114,101,114,111,108,108,0),true ]]);
      for (let v = 0; v < 2; v++) {
         zhengpianC.set(`${successf}`, parseInt(`${successf}`));
      }
          let umengd = String.fromCharCode(109,97,103,101,95,102,95,53,57,0);
          let libturbomodulejsijnim = 4.0;
         successf -= parseFloat(`${parseInt(`${successf}`)}`);
         umengd += `${parseInt(`${libturbomodulejsijnim}`)}`;
         libturbomodulejsijnim /= Math.max(2, umengd.length * parseInt(`${libturbomodulejsijnim}`));
      let football8 = regengt.size >= 8431763;
      do {
          let bdxadsdkn = true;
          let graphicsQ = true;
          let zhengpianU = String.fromCharCode(111,118,101,114,108,97,112,112,101,100,95,101,95,49,51,0);
          let team2 = 2.0;
          let z_manager9 = 0;
         regengt.set(`${successf}`, 3 * parseInt(`${successf}`));
         bdxadsdkn = !graphicsQ;
         zhengpianU = `${parseInt(`${team2}`)}`;
         team2 /= Math.max(parseFloat(`${zhengpianU.length ^ 3}`), 5);
         z_manager9 |= 2 + parseInt(`${team2}`);
         if (football8) {
            break;
         }
      } while (football8 && (Array.from(regengt.keys()).includes(`${package_2M}`)));
      if (regengt.get(`${successf}`) == null) {
         regengt.set(`${modelsN}`, modelsN.length & regengt.size);
      }
      for (let k = 0; k < 2; k++) {
          let shirtI = String.fromCharCode(121,95,53,56,95,100,111,99,107,101,114,0);
          let graphh = true;
         package_2M *= parseFloat(`${parseInt(`${successf}`)}`);
         shirtI += `${((graphh ? 2 : 2) / (Math.max(shirtI.length, 1)))}`;
         graphh = !graphh || shirtI.length <= 95;
      }
          let recommendationY = String.fromCharCode(108,95,54,57,95,99,97,110,0);
          let xadsdk1 = false;
         modelsN += `${parseInt(`${successf}`)}`;
         recommendationY = "3";
         xadsdk1 = (27 >= (recommendationY.length >> (Math.min(5, Math.abs((xadsdk1 ? 27 : recommendationY.length))))));
         zhengpianC.set(`${successf}`, regengt.size);
       let hoverl = String.fromCharCode(109,109,99,111,115,95,113,95,57,56,0);
       let currentA = String.fromCharCode(118,95,53,51,95,114,101,100,105,114,101,99,116,105,111,110,97,108,0);
       let router_: Map<any, any> = new Map([[String.fromCharCode(97,117,116,111,99,111,109,109,105,116,95,119,95,48,0),538], [String.fromCharCode(117,110,115,99,104,101,100,117,108,101,95,110,95,51,48,0),674]]);
         successf /= Math.max(4, parseFloat(`${3 + regengt.size}`));
         zhengpianC.set(`${hoverl}`, (String.fromCharCode(108,0) == hoverl ? hoverl.length : zhengpianC.size));
      mappingJ -= modelsN.length;
   }
   let penaltyX = 6678531.0 <= filem;
   do {
      filem -= 3;
      if (penaltyX) {
         break;
      }
   } while ((3 > statisticsU.length) && penaltyX);
      setIsRefreshing(true);
    }
    

   let favoriteB = mappingJ <= 6201064;
   do {
       let librrc3 = true;
       let penalty4 = String.fromCharCode(101,95,52,52,95,99,111,110,116,105,110,117,101,0);
       let editp = String.fromCharCode(97,118,115,116,114,105,110,103,95,99,95,50,0);
       let handlerq: Map<any, any> = new Map([[String.fromCharCode(100,117,114,97,116,105,111,110,95,116,95,51,0),550], [String.fromCharCode(116,114,105,99,107,108,101,95,48,95,54,56,0),480], [String.fromCharCode(98,105,100,105,114,95,102,95,53,49,0),187]]);
       let current0 = 3;
      if (penalty4.startsWith(`${editp.length}`)) {
         penalty4 += `${(2 + (librrc3 ? 3 : 4))}`;
      }
      if (3 == (handlerq.size ^ editp.length) && (3 ^ editp.length) == 5) {
         editp += `${editp.length}`;
      }
      while (3 >= (current0 & 5) || 5 >= (current0 & editp.length)) {
         current0 <<= Math.min(Math.abs(editp.length * 3), 5);
         break;
      }
       let sharedD = false;
       let reducerG = true;
      for (let w = 0; w < 1; w++) {
         editp = `${2 - penalty4.length}`;
      }
         sharedD = (penalty4.length / (Math.max(2, handlerq.size))) >= 59;
      if (sharedD && 4 == penalty4.length) {
         sharedD = librrc3 && reducerG;
      }
         reducerG = !librrc3 || current0 <= 30;
         reducerG = (editp.length * current0) == 63;
         editp += `${((reducerG ? 2 : 5))}`;
      while (editp.startsWith(`${current0}`)) {
          let telegram1 = 2;
          let bridgeN = 0.0;
          let live_ = 1;
         editp = `${((sharedD ? 2 : 5) - parseInt(`${bridgeN}`))}`;
         telegram1 -= live_ * telegram1;
         bridgeN /= Math.max(3, live_);
         break;
      }
       let refreshH = 4.0;
       let eventD = 2.0;
      while (sharedD) {
          let videocommonz = String.fromCharCode(116,114,97,110,115,108,97,116,111,110,95,120,95,53,52,0);
         refreshH -= parseFloat(`${3}`);
         videocommonz += `${videocommonz.length}`;
         break;
      }
          let logoO: Array<any> = [672, 92];
         eventD += parseFloat(`${3 * handlerq.size}`);
         logoO.push(logoO.length + logoO.length);
      if (handlerq.get(`${eventD}`) != null) {
          let launcher4 = String.fromCharCode(110,116,112,95,116,95,57,50,0);
          let tailI: Map<any, any> = new Map([[String.fromCharCode(120,95,49,49,95,99,97,108,108,105,110,103,0),true ], [String.fromCharCode(102,95,54,53,95,109,97,105,110,112,97,103,101,0),true ], [String.fromCharCode(104,95,57,95,117,110,114,101,102,101,114,101,110,99,101,0),true ]]);
         eventD /= Math.max(2, parseFloat(`${current0}`));
         launcher4 += `${launcher4.length}`;
         tailI.set(launcher4, launcher4.length);
      }
      mappingJ += parseInt(`${filem}`) & libimagepipelineN.size;
      if (favoriteB) {
         break;
      }
   } while (((mappingJ >> (Math.min(Math.abs(3), 2))) >= 3) && favoriteB);
      currentc += `${((clubU ? 4 : 5) / 3)}`;
   for (let e = 0; e < 1; e++) {
      flyerJ /= Math.max(parseFloat(`${parseInt(`${filem}`)}`), 4);
   }
    

      flyerJ *= parseFloat(`${interstitialf.size % 1}`);
      libimagepipelineN = new Map([[`${showK}`, statisticsU.length | showK]]);
   for (let n = 0; n < 2; n++) {
      mappingJ /= Math.max(5, (interstitialf.size << (Math.min(4, Math.abs((plusD ? 4 : 5))))));
   }

    

   if (3 <= (interstitialf.size + 1) || clubU) {
      clubU = filem == 84.87 || clubU;
   }
       let langkeyH: Map<any, any> = new Map([[String.fromCharCode(121,95,56,48,95,101,120,112,0),String.fromCharCode(117,95,53,95,105,110,116,114,110,108,0)], [String.fromCharCode(116,101,115,116,114,97,110,115,95,120,95,53,48,0),String.fromCharCode(110,95,54,56,95,104,101,105,103,104,116,0)], [String.fromCharCode(102,95,55,95,100,101,109,111,116,101,0),String.fromCharCode(120,95,54,52,95,110,111,110,110,117,108,108,105,110,99,111,109,105,110,103,0)]]);
       let crownu = 1.0;
      let mbridgev = 8934979 <= langkeyH.size;
      do {
         langkeyH.set(`${crownu}`, parseInt(`${crownu}`) % (Math.max(langkeyH.size, 8)));
         if (mbridgev) {
            break;
         }
      } while ((!Array.from(langkeyH.values()).includes(crownu)) && mbridgev);
       let sport5 = String.fromCharCode(101,95,57,53,95,112,101,114,115,112,101,99,116,105,118,101,0);
       let soundF = String.fromCharCode(113,117,97,100,116,114,101,101,95,53,95,54,52,0);
         sport5 = `${(String.fromCharCode(51,0) == soundF ? sport5.length : soundF.length)}`;
         crownu *= langkeyH.size * 3;
         langkeyH = new Map([[`${langkeyH.size}`, parseInt(`${crownu}`)]]);
      while (langkeyH.size < parseInt(`${crownu}`)) {
         crownu /= Math.max(4, parseInt(`${crownu}`) % 2);
         break;
      }
      flyerJ -= parseFloat(`${parseInt(`${flyerJ}`)}`);
   while (1 == (catagoryT % (Math.max(8, mappingJ))) || 4 == (1 % (Math.max(6, catagoryT)))) {
       let stepQ = 1.0;
          let internetw = true;
          let friendsv = String.fromCharCode(104,95,55,56,95,99,115,114,105,100,0);
         stepQ /= Math.max(((internetw ? 1 : 4)), 2);
         internetw = friendsv.length == 13;
         friendsv = `${friendsv.length}`;
         stepQ -= parseInt(`${stepQ}`) - parseInt(`${stepQ}`);
       let episodesh = String.fromCharCode(115,101,116,116,108,101,95,119,95,55,51,0);
      catagoryT ^= 2;
      break;
   }
    await queryClient.resetQueries(['vodPlaylist']); 

    
  }, []);

  useEffect(() => {
    
    
    setIsRefreshing(true)

    
    
    

    
    setTimeout(() => {
      
      
      setIsRefreshing(false)
    }, 2000); 
  }, []);

  
  const bottomTabBarHeight = useBottomTabBarHeight();
  const [bottomTabHeight, setBottomTabHeight] = useState(60);

  return (
    <>
      <ScreenContainer containerStyle={{ paddingLeft: 0, paddingRight: 0 }}>
        <MainHeader
          headerStyle={{
            marginBottom: spacing.m,
            paddingLeft: spacing.sideOffset,
            paddingRight: spacing.sideOffset,
          }}
          logo={
            <Text
              style={{
                ...textVariants.bigHeader,
                color: colors.text,
                fontSize: 22,
              }}>
              播单
            </Text>
          }
          navigator={navigation}
        />
        {isRefreshing && !isOffline && (
          <View
            style={{
              ...styles.loading,
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {
              <FastImage
                style={{ height: 80, width: 80 }}
                source={require('@static/images/cancelSigmobLibzeus.gif')}
                resizeMode={"contain"}
              />
            }
          </View>
        )}
        {!isOffline && (
          <>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={playlists?.pages.flat()}
              onEndReached={() => {
                if (hasNextPage) {
                  fetchNextPage();
                }
              }}
              onEndReachedThreshold={0.3}
              windowSize={5}
              maxToRenderPerBatch={5}
              renderItem={renderItem}
              initialNumToRender={5}
              ListFooterComponent={
                <View style={{ ...styles.loading, marginBottom: spacing.xl }}>
                  {hasNextPage && (
                    <FastImage
                      style={{ height: 80, width: 80 }}
                      source={require('@static/images/cancelSigmobLibzeus.gif')}
                      resizeMode={"contain"}
                    />
                  )}
                  {!(isFetchingNextPage || isFetching) && !hasNextPage && (
                    <Text style={{ ...textVariants.body, color: colors.muted }}>
                      没有更多了
                    </Text>
                  )}
                </View>
              }
              refreshControl={
                <RefreshControl
                  refreshing={isSwipeRefreshing}
                  onRefresh={() => handleRefresh(true)}
                  tintColor="#FAC33D" 
                />
              }
            />
          </>
        )}
      </ScreenContainer>
      {isOffline && <NoConnection onClickRetry={checkConnection} />}
    </>
  );
};

export default memo(Playlist);

const styles = StyleSheet.create({
  header: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  loading: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
  },
});
