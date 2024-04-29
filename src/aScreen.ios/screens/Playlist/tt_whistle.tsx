import React, { useCallback, useEffect, useState, memo } from 'react';
import { StyleSheet, View, Text, RefreshControl, FlatList } from 'react-native';
import { useQueryClient } from '@tanstack/react-query';
import ScreenContainer from '../../components/container/tt_backward';
import MainHeader from '../../components/header/tt_inactive_strings_header';
import { useFocusEffect, useNavigation, useTheme } from '@react-navigation/native';
import { useInfiniteQuery } from '@tanstack/react-query';
import { ttProject, ttSport } from '@type/tt_line_borderless';
import VodPlaylist from '../../components/playlist/tt_button';
import { BottomTabScreenProps, useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { API_DOMAIN } from '@utility/tt_trophy_cross';
import FastImage from "../../components/common/tt_connection"
import { useIsFocused } from '@react-navigation/native';
import NoConnection from './../../components/common/tt_fast';
import NetInfo, { NetInfoState } from '@react-native-community/netinfo';
import { ttBaiduNewinterstitial } from '@redux/reducers/tt_center';
import { ttOrange } from '@redux/tt_updates_bottom';
import { useAppSelector } from '@hooks/tt_spec_download';
import tt_humidity_guide from '../../../../Umeng/tt_humidity_guide';
import { ttMbbannerMore } from '@api';

type ttBing = {
  item: ttSport;
  index: number;
};

function Topic() {
       let pangleG: Map<any, any> = new Map([[String.fromCharCode(102,105,120,115,116,114,105,100,101,95,104,95,49,56,0),992], [String.fromCharCode(120,95,53,54,95,118,97,110,99,0),249], [String.fromCharCode(120,95,55,52,95,99,97,116,99,104,105,110,103,0),80]]);
    let cornerg = false;
    let crossu = String.fromCharCode(115,116,114,101,97,109,105,110,103,95,122,95,48,0);
    let basketballZ = 1.0;
    let watchC: Map<any, any> = new Map([[String.fromCharCode(99,95,49,52,95,115,109,106,112,101,103,0),499], [String.fromCharCode(121,117,118,97,121,117,118,108,101,95,99,95,55,0),650]]);
    let downH = true;
    let downloadingO = String.fromCharCode(114,101,102,114,101,115,104,95,110,95,51,55,0);
    let entryb = String.fromCharCode(117,110,115,101,114,105,97,108,105,122,101,95,106,95,53,49,0);
    let volume4 = false;
    let nterstitialr: Array<any> = [73, 483, 307];
    let transferw: Map<any, any> = new Map([[String.fromCharCode(105,95,50,57,95,116,105,99,107,101,114,115,0),String.fromCharCode(121,95,55,53,95,114,105,99,104,0)], [String.fromCharCode(121,95,54,51,95,114,118,100,97,116,97,0),String.fromCharCode(99,108,111,115,117,114,101,95,106,95,54,52,0)], [String.fromCharCode(103,95,55,51,95,115,113,117,97,114,101,100,0),String.fromCharCode(98,117,108,107,95,103,95,49,48,48,0)]]);
   let handlerH = cornerg ? !cornerg : cornerg;
   do {
      cornerg = null != watchC.get(`${volume4}`);
      if (handlerH) {
         break;
      }
   } while (handlerH && (pangleG.size == 3));

  const navigation = useNavigation();

       let ajax_ = 3;
       let completen = 5.0;
      if (3.89 <= completen) {
          let logoutQ = String.fromCharCode(117,110,114,101,99,111,103,110,105,122,101,100,95,50,95,51,56,0);
          let verticalY = 2;
          let dangerz = 3;
          let launcherF = String.fromCharCode(112,97,115,116,101,98,111,97,114,100,95,51,95,55,54,0);
          let actionH = String.fromCharCode(103,95,49,54,95,112,97,108,98,97,114,115,0);
         completen += logoutQ.length;
         logoutQ += `${actionH.length % 2}`;
         verticalY &= (String.fromCharCode(77,0) == launcherF ? dangerz : launcherF.length);
         dangerz ^= verticalY << (Math.min(Math.abs(dangerz), 1));
         actionH += `${dangerz}`;
      }
       let step4 = 3.0;
       let sourcek = 3;
       let nextR = 0;
          let pingR: Array<any> = [String.fromCharCode(106,95,51,50,95,97,100,100,98,108,107,0), String.fromCharCode(105,110,100,101,112,101,110,100,101,110,116,95,107,95,50,55,0), String.fromCharCode(116,109,105,120,95,114,95,53,48,0)];
          let matchesf = String.fromCharCode(115,116,97,110,100,97,114,100,115,95,119,95,50,51,0);
          let internetd = String.fromCharCode(109,95,54,48,95,101,110,116,114,105,101,115,0);
         sourcek += matchesf.length;
         pingR = [pingR.length];
         matchesf += `${pingR.length << (Math.min(internetd.length, 2))}`;
         internetd = `${pingR.length & internetd.length}`;
      for (let j = 0; j < 3; j++) {
         sourcek |= 3;
      }
         step4 *= 3 >> (Math.min(2, Math.abs(sourcek)));
      crossu += "2";
      ajax_ >>= Math.min(Math.abs(1), 2);
  const { textVariants, colors, spacing } = useTheme();

   for (let d = 0; d < 3; d++) {
       let promotionE: Map<any, any> = new Map([[String.fromCharCode(115,95,52,54,95,111,118,101,114,104,101,97,100,0),880], [String.fromCharCode(118,120,119,111,114,107,115,95,109,95,57,54,0),832], [String.fromCharCode(109,105,115,115,105,110,103,95,54,95,57,53,0),140]]);
       let tickL = 4.0;
      if ((promotionE.size | 3) >= 3) {
          let unread9 = 2.0;
          let yellowD = 2.0;
         promotionE.set(`${yellowD}`, parseInt(`${unread9}`) << (Math.min(Math.abs(parseInt(`${yellowD}`)), 1)));
      }
       let dicee = String.fromCharCode(117,110,101,120,112,101,99,116,101,100,95,55,95,55,48,0);
       let progressV = String.fromCharCode(100,114,105,118,101,95,109,95,49,54,0);
         progressV += `${promotionE.size}`;
         progressV = `${(String.fromCharCode(110,0) == progressV ? dicee.length : progressV.length)}`;
         dicee = `${progressV.length ^ 1}`;
      for (let e = 0; e < 3; e++) {
         tickL += parseFloat(`${parseInt(`${tickL}`) - promotionE.size}`);
      }
      nterstitialr.push(((volume4 ? 3 : 3) + 3));
   }
  const LIMIT_PER_PAGE = 10;

      downH = transferw.size == 32;

  const [totalPage, setTotalPage] = useState(0);

   if (3.33 > basketballZ) {
       let gradleX = 3.0;
       let episode6 = String.fromCharCode(115,95,49,57,95,116,114,97,118,101,108,0);
       let related3 = 3.0;
         episode6 += `${episode6.length & 2}`;
         related3 += parseFloat(`${2}`);
      for (let l = 0; l < 2; l++) {
          let rewarde = String.fromCharCode(98,97,116,99,104,95,120,95,52,0);
          let accepted8 = false;
          let mbnative7: Array<any> = [392, 306];
          let trashj = 0.0;
          let mintegralr = 4;
         gradleX *= parseFloat(`${parseInt(`${trashj}`) << (Math.min(2, Math.abs(1)))}`);
         rewarde += `${mintegralr}`;
         accepted8 = mbnative7.length < mintegralr;
         mbnative7.push(1);
         trashj /= Math.max(1, parseFloat(`${mbnative7.length - 2}`));
      }
      while (related3 >= gradleX) {
         gradleX /= Math.max(parseFloat(`${3}`), 4);
         break;
      }
         related3 -= parseFloat(`${episode6.length}`);
      basketballZ *= parseFloat(`${3}`);
   }

  const isFocused = useIsFocused();

      downH = 7 < downloadingO.length || 7 < nterstitialr.length;
  const [isOffline, setIsOffline] = useState(false);

   if (!downH || crossu.length > 3) {
      downH = 22 > downloadingO.length;
   }

  const [isLoading, setIsLoading] = useState(false);

      downloadingO += `${2 / (Math.max(3, transferw.size))}`;

  const settingsReducer: ttBaiduNewinterstitial = useAppSelector(
    ({ settingsReducer }: ttOrange) => settingsReducer
  );

   let sendr = downH ? !downH : downH;
   do {
      downH = !cornerg;
      if (sendr) {
         break;
      }
   } while ((downH || 4 >= (watchC.size / 5)) && sendr);

  

      nterstitialr.push(nterstitialr.length % (Math.max(2, 2)));
  useFocusEffect(useCallback(() => {

   if (crossu.length == transferw.size) {
      crossu = `${((volume4 ? 5 : 4))}`;
   }

    tt_humidity_guide.playlistViewsAnalytics();

   if (entryb != String.fromCharCode(98,0)) {
      crossu += "3";
   }
  }, []));

       let reduceri = String.fromCharCode(104,95,57,50,95,116,104,97,119,0);
       let reportY: Map<any, any> = new Map([[String.fromCharCode(100,95,54,53,95,119,111,114,107,108,111,97,100,0),String.fromCharCode(100,101,112,108,111,121,95,103,95,55,50,0)], [String.fromCharCode(109,97,110,117,97,108,108,121,95,122,95,55,54,0),String.fromCharCode(117,95,49,57,95,101,112,105,99,0)]]);
       let brightnessb = String.fromCharCode(108,105,98,97,118,100,101,118,105,99,101,95,111,95,53,56,0);
      if (reduceri != String.fromCharCode(120,0) || brightnessb != String.fromCharCode(85,0)) {
         brightnessb += `${reduceri.length - reportY.size}`;
      }
          let ballp = 3;
         reduceri += `${(brightnessb == String.fromCharCode(100,0) ? brightnessb.length : reduceri.length)}`;
         ballp %= Math.max(1, 1);
      while ((reportY.size + reduceri.length) == 4 && 5 == (4 + reportY.size)) {
         reportY = new Map([[`${reportY.size}`, 1 << (Math.min(4, Math.abs(reportY.size)))]]);
         break;
      }
      if ((3 + reduceri.length) > 4) {
         reportY.set(reduceri, reportY.size);
      }
          let hejiL = String.fromCharCode(116,101,108,101,112,104,111,116,111,95,51,95,52,48,0);
          let unselected7: Array<any> = [6, 890, 906];
          let scheduleM = false;
         reportY = new Map([[`${unselected7.length}`, ((scheduleM ? 2 : 3) & unselected7.length)]]);
         hejiL = "1";
      for (let a = 0; a < 3; a++) {
         reportY = new Map([[`${reportY.size}`, reduceri.length]]);
      }
      if ((reportY.size * 1) > 5 && 1 > (reportY.size * brightnessb.length)) {
         brightnessb += `${reportY.size}`;
      }
      for (let x = 0; x < 3; x++) {
         reportY = new Map([[reduceri, brightnessb.length << (Math.min(4, reduceri.length))]]);
      }
      let streamingE = reportY.size <= 7576333;
      do {
         reportY.set(brightnessb, 1);
         if (streamingE) {
            break;
         }
      } while ((5 == reportY.size) && streamingE);
      downloadingO = `${reduceri.length | 3}`;
  

   for (let i = 0; i < 1; i++) {
      transferw = new Map([[`${pangleG.size}`, 3 - parseInt(`${basketballZ}`)]]);
   }

  

       let reactj = String.fromCharCode(115,116,97,99,107,95,113,95,55,50,0);
          let gesturesA = String.fromCharCode(105,95,52,54,95,108,97,115,116,0);
         reactj = `${gesturesA.length ^ 2}`;
      if (!reactj.includes(reactj)) {
         reactj += `${(String.fromCharCode(117,0) == reactj ? reactj.length : reactj.length)}`;
      }
      while (!reactj.includes(`${reactj.length}`)) {
         reactj += `${reactj.length * reactj.length}`;
         break;
      }
      downH = crossu == String.fromCharCode(71,0) || reactj.length <= 10;
  const handleTabPress = () => {

       let plusj = 2;
       let eventR = 1;
       let submitr: Map<any, any> = new Map([[String.fromCharCode(105,108,98,99,95,101,95,54,57,0),String.fromCharCode(121,95,56,53,95,115,107,105,112,112,97,98,108,101,0)], [String.fromCharCode(115,101,103,109,101,110,116,116,105,109,101,108,105,110,101,95,51,95,55,53,0),String.fromCharCode(103,95,56,49,95,105,100,102,118,0)]]);
      for (let w = 0; w < 2; w++) {
          let entryT = String.fromCharCode(97,100,106,117,115,116,105,110,103,95,48,95,56,48,0);
          let commentM = 4.0;
         submitr.set(entryT, entryT.length);
         commentM += 1;
      }
      for (let w = 0; w < 3; w++) {
         plusj -= 1;
      }
      for (let z = 0; z < 1; z++) {
          let clocki: Map<any, any> = new Map([[String.fromCharCode(116,95,56,56,95,101,109,112,105,114,105,99,97,108,108,121,0),false ], [String.fromCharCode(108,95,49,49,95,117,110,122,105,112,0),false ], [String.fromCharCode(105,110,115,116,97,108,108,101,100,95,117,95,51,54,0),false ]]);
          let appsD = 0.0;
          let thailandt = 1;
         plusj += thailandt;
         clocki = new Map([[`${clocki.size}`, clocki.size >> (Math.min(2, Math.abs(parseInt(`${appsD}`))))]]);
         appsD *= parseInt(`${appsD}`);
         thailandt += 1 ^ clocki.size;
      }
          let heartP = String.fromCharCode(114,95,54,95,121,101,115,110,111,0);
          let component7 = 3.0;
          let searchv = 2.0;
         eventR += 2;
         heartP += `${parseInt(`${component7}`)}`;
         searchv += 1;
         plusj /= Math.max(1, eventR);
         submitr.set(`${eventR}`, submitr.size);
      let langkey2 = 7956643 <= plusj;
      do {
          let backgroundO: Map<any, any> = new Map([[String.fromCharCode(97,118,112,107,116,95,109,95,55,52,0),true ], [String.fromCharCode(100,95,50,52,95,102,101,101,0),true ], [String.fromCharCode(107,95,50,57,95,112,108,97,99,101,109,101,110,116,0),false ]]);
         plusj ^= 2;
         backgroundO = new Map([[`${backgroundO.size}`, 1 << (Math.min(3, Math.abs(backgroundO.size)))]]);
         if (langkey2) {
            break;
         }
      } while (langkey2 && (2 == plusj));
         eventR |= submitr.size | eventR;
         plusj /= Math.max(2 ^ eventR, 4);
      volume4 = 86 < downloadingO.length;
    if (isFocused) {

   while ((basketballZ / (Math.max(parseFloat(`${entryb.length}`), 5))) <= 4.37) {
      basketballZ += parseFloat(`${transferw.size}`);
      break;
   }
      handleRefresh();

   let videocommon3 = transferw.size >= 7682554;
   do {
      transferw.set(`${basketballZ}`, 3 / (Math.max(2, crossu.length)));
      if (videocommon3) {
         break;
      }
   } while (videocommon3 && (2 < downloadingO.length));
    }
  };

   for (let r = 0; r < 3; r++) {
      transferw = new Map([[`${transferw.size}`, (crossu == String.fromCharCode(121,0) ? transferw.size : crossu.length)]]);
   }

  const checkConnection = useCallback(async () => {

   if (crossu.length <= 5) {
      basketballZ /= Math.max(2, (parseFloat(`${(volume4 ? 3 : 3) ^ crossu.length}`)));
   }
    const state = await NetInfo.fetch();

      crossu = `${(crossu == String.fromCharCode(71,0) ? crossu.length : watchC.size)}`;
    const offline = !(state.isConnected && state.isInternetReachable);

      transferw = new Map([[`${transferw.size}`, transferw.size]]);
    setIsOffline(offline);

   for (let c = 0; c < 3; c++) {
       let sigmobf = false;
       let pageg = String.fromCharCode(101,114,114,99,111,100,101,95,102,95,56,48,0);
      while (pageg.length == 2) {
         pageg = `${((sigmobf ? 2 : 5) / 2)}`;
         break;
      }
      while (pageg.length > 4) {
          let live4 = String.fromCharCode(115,95,53,57,95,111,117,114,0);
          let small0 = String.fromCharCode(100,95,49,95,115,117,112,112,114,101,115,115,0);
          let specD = 4.0;
         pageg += `${pageg.length}`;
         live4 = `${(small0 == String.fromCharCode(53,0) ? live4.length : small0.length)}`;
         specD /= Math.max(5, 3);
         break;
      }
      for (let u = 0; u < 2; u++) {
         sigmobf = pageg.endsWith(`${sigmobf}`);
      }
         pageg += `${(2 ^ (sigmobf ? 2 : 5))}`;
          let shirtt: Map<any, any> = new Map([[String.fromCharCode(112,108,97,116,102,111,114,109,115,95,122,95,50,57,0),874], [String.fromCharCode(106,95,53,50,95,114,116,102,0),29]]);
         sigmobf = !pageg.endsWith(`${sigmobf}`);
         shirtt.set(`${shirtt.size}`, 2);
      for (let l = 0; l < 1; l++) {
         sigmobf = !sigmobf && pageg.length < 12;
      }
      cornerg = watchC.size <= parseInt(`${basketballZ}`);
   }
    if (!offline) {

       let expired6 = 4;
         expired6 %= Math.max(3 - expired6, 4);
      while (3 <= (expired6 * 3) && (3 * expired6) <= 4) {
         expired6 &= expired6 + expired6;
         break;
      }
      for (let j = 0; j < 1; j++) {
          let progressD: Map<any, any> = new Map([[String.fromCharCode(112,95,52,52,95,99,108,117,116,115,0),true ], [String.fromCharCode(101,95,52,53,95,99,114,111,112,112,101,100,0),false ]]);
          let nextW = false;
          let wind9 = 1.0;
          let hejig = String.fromCharCode(108,95,56,50,95,105,110,112,117,116,116,101,109,0);
          let inactiveI: Array<any> = [String.fromCharCode(97,114,114,97,121,115,105,122,101,95,49,95,52,54,0), String.fromCharCode(97,95,57,51,95,112,105,110,110,101,114,0), String.fromCharCode(109,97,105,108,95,107,95,55,50,0)];
         expired6 ^= 2;
         progressD.set(`${wind9}`, progressD.size);
         nextW = inactiveI.length >= 14 || progressD.size >= 14;
         wind9 *= parseFloat(`${3}`);
         hejig += `${progressD.size % (Math.max(6, hejig.length))}`;
         inactiveI.push(progressD.size);
      }
      volume4 = (downH ? cornerg : downH);
      handleRefresh();
    }
  }, []);

      downH = basketballZ >= 77.61 && !cornerg;

  useEffect(() => {

   if ((transferw.size + 4) <= 4) {
      transferw.set(`${cornerg}`, transferw.size / (Math.max(2, 8)));
   }
    setIsOffline(settingsReducer.isOffline);

   if ((crossu.length + 3) == 4 || 3 == (watchC.size + crossu.length)) {
      crossu += `${parseInt(`${basketballZ}`)}`;
   }
    console.log('topic ')

       let stationsN: Map<any, any> = new Map([[String.fromCharCode(109,97,103,110,105,116,117,100,101,95,53,95,49,0),true ], [String.fromCharCode(120,95,55,57,95,115,116,114,105,115,116,97,114,116,0),true ], [String.fromCharCode(121,95,55,50,95,97,100,100,107,101,121,0),false ]]);
      while ((stationsN.size + stationsN.size) == 5) {
         stationsN = new Map([[`${stationsN.size}`, stationsN.size]]);
         break;
      }
       let over7 = String.fromCharCode(115,95,54,52,0);
         over7 += `${(String.fromCharCode(77,0) == over7 ? stationsN.size : over7.length)}`;
      basketballZ /= Math.max(parseFloat(`${nterstitialr.length}`), 1);
    handleRefresh();

  }, []);

   while (5 <= (transferw.size + 3) && 3 <= (transferw.size + pangleG.size)) {
      transferw.set(crossu, watchC.size);
      break;
   }

  useFocusEffect(useCallback(() => {

      entryb = "2";
    if (!settingsReducer.isOffline && settingsReducer.isOffline !== isOffline) {

      cornerg = null != pangleG.get(`${downH}`);
      setIsOffline(settingsReducer.isOffline);

   for (let o = 0; o < 2; o++) {
      crossu += `${crossu.length}`;
   }
      handleRefresh();
    } else if (settingsReducer.isOffline) {

   while (cornerg) {
      cornerg = nterstitialr.length < 15 || cornerg;
      break;
   }
      return () => {

   for (let r = 0; r < 1; r++) {
      watchC.set(`${downloadingO}`, watchC.size / (Math.max(1, downloadingO.length)));
   }
        setIsOffline(settingsReducer.isOffline);
      }
    }
  }, [settingsReducer.isOffline]));

   while (cornerg) {
      downH = entryb == String.fromCharCode(50,0) || 96 > nterstitialr.length;
      break;
   }

  

   for (let g = 0; g < 3; g++) {
      volume4 = 18.86 > basketballZ;
   }
  useEffect(() => {

   for (let j = 0; j < 3; j++) {
       let robotoM = String.fromCharCode(115,105,110,103,108,101,116,97,98,108,101,95,48,95,53,56,0);
       let moonH = String.fromCharCode(108,95,57,52,95,112,114,101,112,97,114,101,100,0);
       let firebase7 = 4.0;
       let layoutC = 4.0;
       let auto_gw = 4.0;
          let toponO = String.fromCharCode(100,95,53,49,95,101,110,97,98,108,101,100,0);
         robotoM += "2";
         toponO += `${2 * toponO.length}`;
         robotoM += `${(String.fromCharCode(87,0) == robotoM ? parseInt(`${auto_gw}`) : robotoM.length)}`;
      for (let o = 0; o < 3; o++) {
         auto_gw -= parseFloat(`${1}`);
      }
      let bodanz = 8671358.0 >= firebase7;
      do {
         firebase7 -= robotoM.length;
         if (bodanz) {
            break;
         }
      } while (bodanz && (auto_gw <= 4.73));
         moonH = `${robotoM.length}`;
      for (let e = 0; e < 3; e++) {
         firebase7 *= 3;
      }
          let m_imageo = 3.0;
         robotoM += `${parseInt(`${m_imageo}`)}`;
      if ((3.8 * firebase7) < 5.23 && (robotoM.length & 3) < 4) {
         firebase7 /= Math.max(5, (robotoM == String.fromCharCode(122,0) ? robotoM.length : parseInt(`${auto_gw}`)));
      }
         layoutC *= parseFloat(`${1}`);
         auto_gw += parseFloat(`${2 | parseInt(`${auto_gw}`)}`);
      for (let v = 0; v < 2; v++) {
         auto_gw += parseFloat(`${3}`);
      }
         auto_gw *= parseFloat(`${3}`);
      if ((layoutC - 4.93) < 2.99) {
         layoutC += parseFloat(`${2}`);
      }
      while (2.88 >= (1.52 / (Math.max(1, layoutC)))) {
         moonH = `${parseInt(`${firebase7}`)}`;
         break;
      }
      while (1.16 == (layoutC / (Math.max(3, auto_gw)))) {
          let trash6 = String.fromCharCode(103,95,55,50,95,116,105,102,102,0);
          let reminderV = 4.0;
          let applicationf: Map<any, any> = new Map([[String.fromCharCode(118,101,99,115,95,109,95,49,53,0),497], [String.fromCharCode(115,108,111,112,95,107,95,54,52,0),801]]);
          let changet = String.fromCharCode(115,95,49,52,95,108,101,114,112,102,0);
         auto_gw += parseFloat(`${robotoM.length | parseInt(`${layoutC}`)}`);
         trash6 = `${changet.length}`;
         reminderV *= trash6.length >> (Math.min(2, Math.abs(parseInt(`${reminderV}`))));
         applicationf.set(changet, changet.length << (Math.min(Math.abs(3), 2)));
         break;
      }
      nterstitialr.push(entryb.length * downloadingO.length);
   }
    const unsubscribe = navigation.addListener('tabPress', handleTabPress);

      downloadingO += "2";

    

      nterstitialr = [watchC.size];
    return () => unsubscribe();
  }, [navigation, isFocused]);

  const fetchPlaylist = useCallback((page: number) =>
    ttMbbannerMore.getTopicIosTmp()
      .then((json: ttProject) => {
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

  const renderItem = ({ item }: ttBing) => (
    <VodPlaylist playlist={item} titleStyle={{ color: colors.text }} />
  );

  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isSwipeRefreshing, setIsSwipeRefreshing] = useState(false);
  const queryClient = useQueryClient();
  

  const handleRefresh = useCallback(async (isSwipe: boolean = false) => {
    if (isSwipe) {
      setIsSwipeRefreshing(true);
    } else {
      setIsRefreshing(true);
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
    <View style={{     flex: 1,  paddingTop:20}}>

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
                source={require('@static/images/toponTerms.gif')}
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
                      source={require('@static/images/toponTerms.gif')}
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

      {isOffline && <NoConnection onClickRetry={checkConnection} />}
    </View>
  );
};

export default memo(Topic);

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
