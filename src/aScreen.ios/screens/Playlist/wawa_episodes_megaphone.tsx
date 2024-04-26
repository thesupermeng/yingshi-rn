import React, { useCallback, useEffect, useState, memo } from 'react';
import { StyleSheet, View, Text, RefreshControl, FlatList } from 'react-native';
import { useQueryClient } from '@tanstack/react-query';
import ScreenContainer from '../../components/container/wawa_nterstitial_iconpipexpand';
import MainHeader from '../../components/header/wawa_favorite_header';
import { useFocusEffect, useTheme } from '@react-navigation/native';
import { useInfiniteQuery } from '@tanstack/react-query';
import { wawaQuestIconsubssuccess, wawaWithCrown } from '@type/wawa_gradlew';
import VodPlaylist from '../../components/playlist/wawa_arrowright';
import { BottomTabScreenProps, useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { API_DOMAIN } from '@utility/wawa_iconpointscore';
import FastImage from "../../components/common/wawa_iconarrowrightblack"
import { useIsFocused } from '@react-navigation/native';
import NoConnection from './../../components/common/wawa_filed_privacy';
import NetInfo, { NetInfoState } from '@react-native-community/netinfo';
import { wawaBackground } from '@redux/reducers/wawa_comment';
import { wawaIconsubssuccess } from '@redux/wawa_bgvipsport_spinner';
import { useAppSelector } from '@hooks/wawa_root';
import wawa_dacccfaabfbcbadeebddcabacdffdbc_video from '../../../../Umeng/wawa_dacccfaabfbcbadeebddcabacdffdbc_video';
import { wawaWhitetickAway } from '@api';

type wawaBellreminderDisconnected = {
  item: wawaWithCrown;
  index: number;
};

function Playlist({ navigation }: BottomTabScreenProps<any>) {
  
  const { textVariants, colors, spacing } = useTheme();
  const LIMIT_PER_PAGE = 10;
  // const [results, setResults] = useState<Array<wawaWithCrown>>([])
  const [totalPage, setTotalPage] = useState(0);

  const isFocused = useIsFocused();
  const [isOffline, setIsOffline] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const settingsReducer: wawaBackground = useAppSelector(
    ({ settingsReducer }: wawaIconsubssuccess) => settingsReducer
  );

  
  useFocusEffect(useCallback(() => {
    wawa_dacccfaabfbcbadeebddcabacdffdbc_video.playlistViewsAnalytics();
  }, []));
  

  
  const handleTabPress = () => {
       let libcrashsdkl: Map<any, any> = new Map([[String.fromCharCode(112,95,56,56,95,100,101,115,114,111,121,0),false ], [String.fromCharCode(121,95,52,51,95,109,98,115,116,114,105,110,103,0),true ], [String.fromCharCode(112,114,111,116,101,99,116,105,111,110,95,57,95,50,54,0),true ]]);
    let fcdaebecbcbafcdfceaaeccfeacdb9 = String.fromCharCode(99,118,105,100,95,103,95,51,0);
    let fastforwardV = false;
    let emojii = 3;
    let shareZ: Array<any> = [295, 413, 912];
    let arrowselectdown2 = String.fromCharCode(102,99,112,117,98,108,105,115,104,95,121,95,56,56,0);
    let smallF: Array<any> = [882, 430];
    let positionfieldV = true;
    let filledJ = String.fromCharCode(102,95,50,51,95,112,97,115,99,97,108,0);
    let topong = true;
    let promotionU = String.fromCharCode(109,101,109,95,119,95,49,53,0);
    let giftd = 3.0;
    let main_mf = String.fromCharCode(116,114,97,110,115,102,101,114,114,101,100,95,104,95,55,50,0);
   let manifestE = String.fromCharCode(54,97,113,113,110,110,0) == fcdaebecbcbafcdfceaaeccfeacdb9;
   do {
       let rocketw: Map<any, any> = new Map([[String.fromCharCode(117,110,107,105,99,107,95,100,95,56,51,0),77], [String.fromCharCode(98,95,49,49,95,118,97,108,105,100,97,116,101,100,0),818]]);
       let turnK = 0;
       let gesturesM = 1;
         turnK /= Math.max(turnK * 1, 1);
      if ((turnK - 4) < 4 || (4 - turnK) < 2) {
         gesturesM -= 3 ^ turnK;
      }
      if (!Array.from(rocketw.keys()).includes(`${turnK}`)) {
         turnK >>= Math.min(1, Math.abs(gesturesM & 2));
      }
         turnK &= rocketw.size;
      let searchbarM = gesturesM >= 7573521;
      do {
         gesturesM -= 3 + turnK;
         if (searchbarM) {
            break;
         }
      } while (searchbarM && ((gesturesM >> (Math.min(Math.abs(4), 2))) >= 5 && (gesturesM >> (Math.min(Math.abs(rocketw.size), 2))) >= 4));
         turnK %= Math.max(2, gesturesM);
          let libfbjnil = String.fromCharCode(104,95,55,52,95,100,101,118,101,108,111,112,101,114,0);
          let wifirouterU = String.fromCharCode(112,95,49,57,95,100,101,110,111,105,115,105,110,103,0);
          let iconschedule7 = String.fromCharCode(119,101,108,108,95,122,95,53,56,0);
         rocketw.set(libfbjnil, 1 + libfbjnil.length);
         wifirouterU = `${1 - wifirouterU.length}`;
         iconschedule7 = `${iconschedule7.length + wifirouterU.length}`;
      for (let m = 0; m < 3; m++) {
          let arroww = 0.0;
          let bingu: Array<any> = [681, 791, 430];
          let nextP = String.fromCharCode(108,111,103,103,101,114,95,98,95,49,55,0);
         rocketw.set(`${gesturesM}`, 2);
         arroww += parseFloat(`${nextP.length + parseInt(`${arroww}`)}`);
         bingu.push(parseInt(`${arroww}`) << (Math.min(4, Math.abs(2))));
         nextP = `${(nextP == String.fromCharCode(110,0) ? nextP.length : parseInt(`${arroww}`))}`;
      }
          let wifirouter1: Map<any, any> = new Map([[String.fromCharCode(108,95,52,52,95,115,112,101,97,107,0),String.fromCharCode(99,104,97,108,108,101,110,103,101,95,104,95,55,50,0)], [String.fromCharCode(111,95,49,95,114,101,110,100,101,114,98,117,102,102,101,114,0),String.fromCharCode(115,118,113,101,110,99,95,105,95,54,53,0)]]);
          let combineds = 1.0;
          let playlistR = 5.0;
         turnK *= wifirouter1.size;
         wifirouter1.set(`${playlistR}`, parseInt(`${combineds}`));
         playlistR += parseFloat(`${parseInt(`${playlistR}`) - 3}`);
      fcdaebecbcbafcdfceaaeccfeacdb9 = `${(filledJ.length & (fastforwardV ? 2 : 3))}`;
      if (manifestE) {
         break;
      }
   } while ((fcdaebecbcbafcdfceaaeccfeacdb9.length >= 5 || topong) && manifestE);
   if ((shareZ.length - 3) > 5) {
      shareZ.push((filledJ.length * (positionfieldV ? 5 : 4)));
   }
   if (libcrashsdkl.size <= 4 || 1 <= (4 << (Math.min(3, Math.abs(libcrashsdkl.size))))) {
       let catalogA = String.fromCharCode(105,100,101,110,116,105,102,105,101,114,115,95,102,95,53,53,0);
       let mbnativeadvancedQ = 2.0;
       let hookh = 2.0;
       let playershirth = String.fromCharCode(116,95,54,53,95,113,117,97,110,116,0);
       let whitef = String.fromCharCode(99,95,52,50,95,100,121,110,108,111,99,107,0);
      while (3 > (catalogA.length - parseInt(`${mbnativeadvancedQ}`))) {
         catalogA += `${1 << (Math.min(Math.abs(parseInt(`${hookh}`)), 5))}`;
         break;
      }
      for (let n = 0; n < 3; n++) {
         mbnativeadvancedQ *= (parseFloat(`${String.fromCharCode(51,0) == playershirth ? parseInt(`${mbnativeadvancedQ}`) : playershirth.length}`));
      }
         whitef += `${parseInt(`${hookh}`) | catalogA.length}`;
      while (catalogA != String.fromCharCode(108,0)) {
          let iconmoreU: Map<any, any> = new Map([[String.fromCharCode(109,106,112,101,103,100,101,99,95,117,95,56,50,0),false ], [String.fromCharCode(117,110,114,101,102,99,111,117,110,116,95,54,95,50,57,0),true ]]);
          let videovara = 5.0;
          let iconpipshrinkH = false;
          let baiduw = String.fromCharCode(109,101,110,117,95,103,95,56,57,0);
          let qcopy_a6r = 5.0;
         whitef = `${parseInt(`${hookh}`)}`;
         iconmoreU.set(`${videovara}`, 1);
         videovara /= Math.max((baiduw == String.fromCharCode(50,0) ? iconmoreU.size : baiduw.length), 5);
         iconpipshrinkH = 86 > iconmoreU.size;
         qcopy_a6r *= parseFloat(`${parseInt(`${qcopy_a6r}`) | baiduw.length}`);
         break;
      }
         hookh /= Math.max(parseFloat(`${parseInt(`${mbnativeadvancedQ}`)}`), 3);
      while (1.63 > hookh) {
         mbnativeadvancedQ /= Math.max(3, parseFloat(`${catalogA.length}`));
         break;
      }
         mbnativeadvancedQ += parseFloat(`${2}`);
       let event_ = String.fromCharCode(119,95,56,49,95,115,112,111,116,0);
      libcrashsdkl = new Map([[fcdaebecbcbafcdfceaaeccfeacdb9, ((fastforwardV ? 3 : 4) / 3)]]);
   }
   for (let v = 0; v < 3; v++) {
      fcdaebecbcbafcdfceaaeccfeacdb9 += `${smallF.length / (Math.max(arrowselectdown2.length, 5))}`;
   }
   let shootnogoalV = 5690079 <= emojii;
   do {
       let chatroombackgroundE = String.fromCharCode(97,99,116,105,118,97,116,111,114,95,111,95,52,57,0);
       let styless = 3.0;
       let whatsappv = String.fromCharCode(102,95,50,53,95,100,97,115,104,101,110,99,0);
      let sellmathbackgroundl = whatsappv.length >= 6552311;
      do {
         whatsappv = `${parseInt(`${styless}`)}`;
         if (sellmathbackgroundl) {
            break;
         }
      } while (sellmathbackgroundl && (chatroombackgroundE.length == whatsappv.length));
      while (chatroombackgroundE == whatsappv) {
         whatsappv += `${parseInt(`${styless}`) >> (Math.min(Math.abs(1), 1))}`;
         break;
      }
       let hoverG = String.fromCharCode(98,97,99,107,101,110,100,95,117,95,55,56,0);
       let componentF = String.fromCharCode(101,110,99,105,114,99,108,101,100,95,111,95,56,56,0);
         hoverG += `${(whatsappv == String.fromCharCode(84,0) ? whatsappv.length : parseInt(`${styless}`))}`;
         hoverG += `${chatroombackgroundE.length | parseInt(`${styless}`)}`;
      for (let h = 0; h < 2; h++) {
         hoverG = `${componentF.length & parseInt(`${styless}`)}`;
      }
      while (hoverG == String.fromCharCode(81,0)) {
         whatsappv = `${chatroombackgroundE.length * 2}`;
         break;
      }
          let homeloading2 = true;
         whatsappv = "3";
         hoverG += `${whatsappv.length}`;
      emojii *= chatroombackgroundE.length;
      if (shootnogoalV) {
         break;
      }
   } while (shootnogoalV && (topong));
       let yellowtoredD = true;
       let iconbellactiveZ: Map<any, any> = new Map([[String.fromCharCode(121,95,57,53,95,115,116,114,114,101,115,101,116,0),796], [String.fromCharCode(97,117,116,111,109,97,116,105,99,97,108,108,121,95,108,95,53,55,0),984], [String.fromCharCode(120,95,56,48,95,118,109,97,102,109,111,116,105,111,110,0),610]]);
      while (!yellowtoredD) {
         yellowtoredD = !yellowtoredD;
         break;
      }
       let interstitialW = 1.0;
       let favoritei = 1.0;
         interstitialW += (parseInt(`${interstitialW}`) ^ (yellowtoredD ? 2 : 3));
       let fillj = 3.0;
          let minivodl = String.fromCharCode(99,104,111,115,101,95,98,95,55,54,0);
          let user6: Map<any, any> = new Map([[String.fromCharCode(100,101,115,99,112,114,105,112,116,105,111,110,95,122,95,57,53,0),false ], [String.fromCharCode(97,95,57,48,95,103,115,109,100,101,99,0),false ]]);
         iconbellactiveZ.set(`${favoritei}`, iconbellactiveZ.size);
         minivodl = `${minivodl.length}`;
         user6 = new Map([[`${user6.size}`, 2 | user6.size]]);
      let awayplayerb = 7046391.0 >= interstitialW;
      do {
         interstitialW *= (3 >> (Math.min(1, Math.abs((yellowtoredD ? 4 : 3)))));
         if (awayplayerb) {
            break;
         }
      } while ((2.16 > (5.100 + interstitialW) || yellowtoredD) && awayplayerb);
      topong = !arrowselectdown2.endsWith(`${positionfieldV}`);
   let countryq = 9278677 <= shareZ.length;
   do {
       let libfollyW: Map<any, any> = new Map([[String.fromCharCode(119,95,53,56,95,98,114,97,99,107,101,116,0),false ], [String.fromCharCode(107,95,56,95,115,117,112,112,114,101,115,115,101,115,0),false ], [String.fromCharCode(114,95,56,48,95,108,105,110,107,101,100,0),false ]]);
       let graphicsT = String.fromCharCode(112,114,101,115,101,110,116,97,116,105,111,110,115,95,116,95,57,48,0);
       let feedbackk = String.fromCharCode(114,103,98,105,95,97,95,51,52,0);
       let dragcloseY = true;
         feedbackk += `${graphicsT.length >> (Math.min(1, Math.abs(libfollyW.size)))}`;
      if (feedbackk.length > 3) {
         graphicsT = `${graphicsT.length}`;
      }
       let arrowrightP = false;
       let clockf = false;
         graphicsT = "1";
          let playx = false;
          let catalogV: Map<any, any> = new Map([[String.fromCharCode(108,105,98,97,118,102,111,114,109,97,116,95,49,95,54,50,0),864], [String.fromCharCode(100,101,99,111,114,97,116,101,95,104,95,49,0),692], [String.fromCharCode(109,97,110,105,102,101,115,116,95,115,95,51,50,0),131]]);
         graphicsT += `${catalogV.size}`;
         playx = (!playx ? playx : !playx);
         catalogV = new Map([[`${playx}`, ((playx ? 5 : 2) / (Math.max(6, (playx ? 2 : 4))))]]);
         arrowrightP = libfollyW.size >= 36;
      if (!dragcloseY) {
         dragcloseY = !dragcloseY;
      }
      for (let w = 0; w < 1; w++) {
         graphicsT = `${((clockf ? 5 : 2) & 3)}`;
      }
       let libreanimateda = String.fromCharCode(99,109,100,117,116,105,108,115,95,54,95,52,54,0);
         feedbackk += `${libfollyW.size}`;
       let videocommonL = 4;
       let orangeuparrowr = 2;
      let questicong = 9851144 <= feedbackk.length;
      do {
         feedbackk = `${libfollyW.size}`;
         if (questicong) {
            break;
         }
      } while (questicong && (2 <= feedbackk.length));
      shareZ = [((fastforwardV ? 5 : 2) ^ 3)];
      if (countryq) {
         break;
      }
   } while (countryq && (2 <= (arrowselectdown2.length / 1) && (shareZ.length / (Math.max(1, 6))) <= 2));
      smallF.push(3);
      libcrashsdkl.set(`${emojii}`, (arrowselectdown2 == String.fromCharCode(82,0) ? emojii : arrowselectdown2.length));
      fastforwardV = 9 > fcdaebecbcbafcdfceaaeccfeacdb9.length;
   let refreshi = String.fromCharCode(48,52,97,97,0) == arrowselectdown2;
   do {
      arrowselectdown2 = `${libcrashsdkl.size}`;
      if (refreshi) {
         break;
      }
   } while (refreshi && (fcdaebecbcbafcdfceaaeccfeacdb9 == arrowselectdown2));
      fastforwardV = (libcrashsdkl.size | arrowselectdown2.length) > 58;

    if (isFocused) {

      positionfieldV = !fastforwardV;
      topong = (38 < ((!positionfieldV ? 38 : promotionU.length) - promotionU.length));
   while (emojii <= smallF.length) {
      emojii <<= Math.min(Math.abs(((topong ? 4 : 2) + filledJ.length)), 2);
      break;
   }
   while (emojii >= filledJ.length) {
      emojii /= Math.max(3, arrowselectdown2.length);
      break;
   }
   if (!arrowselectdown2.startsWith(`${positionfieldV}`)) {
      positionfieldV = null != libcrashsdkl.get(`${fastforwardV}`);
   }
      smallF = [3];
       let playercommonK = 4;
       let showD = 4;
       let faviconA = 2;
       let predictiona = 4;
       let nalyticsE = 5;
      if (2 < (predictiona * 1)) {
         predictiona -= 3;
      }
         faviconA >>= Math.min(4, Math.abs(3 * showD));
         faviconA += faviconA & predictiona;
          let awayK: Map<any, any> = new Map([[String.fromCharCode(118,95,52,51,95,104,105,103,104,108,105,103,104,116,105,110,103,0),775], [String.fromCharCode(115,104,111,114,116,101,115,116,95,56,95,53,0),453]]);
          let componentregistryR = 5.0;
          let editQ = 3;
         playercommonK %= Math.max(1, 4);
         awayK.set(`${editQ}`, editQ - 3);
         componentregistryR += parseFloat(`${2 % (Math.max(7, parseInt(`${componentregistryR}`)))}`);
         predictiona |= playercommonK;
         predictiona /= Math.max(1, 3);
         playercommonK *= 3 ^ predictiona;
      for (let p = 0; p < 3; p++) {
         showD &= predictiona | nalyticsE;
      }
      topong = fastforwardV;
      smallF = [3];
   let libzeusY = topong ? !topong : topong;
   do {
      topong = (85 > ((!fastforwardV ? 85 : fcdaebecbcbafcdfceaaeccfeacdb9.length) + fcdaebecbcbafcdfceaaeccfeacdb9.length));
      if (libzeusY) {
         break;
      }
   } while ((topong || filledJ.length > 5) && libzeusY);
       let awayM = 4.0;
       let nalyticsa = 0.0;
          let short_u6O = false;
          let textlayoutmanagerv = 2.0;
         nalyticsa *= parseFloat(`${parseInt(`${textlayoutmanagerv}`) - 1}`);
         short_u6O = !short_u6O;
         textlayoutmanagerv *= 3;
      let otherA = 9009463.0 >= awayM;
      do {
         awayM /= Math.max(parseFloat(`${2 - parseInt(`${awayM}`)}`), 4);
         if (otherA) {
            break;
         }
      } while ((4.26 < (awayM + nalyticsa) && (nalyticsa + 4.26) < 1.32) && otherA);
      if (awayM >= nalyticsa) {
          let interneti: Array<any> = [String.fromCharCode(115,117,98,118,105,101,119,95,49,95,49,0), String.fromCharCode(100,114,105,118,101,95,113,95,52,55,0), String.fromCharCode(116,95,57,51,95,116,105,103,103,108,101,0)];
          let configure3: Map<any, any> = new Map([[String.fromCharCode(97,98,115,95,120,95,50,56,0),221], [String.fromCharCode(104,111,110,101,121,95,56,95,52,55,0),498], [String.fromCharCode(105,100,99,116,95,106,95,54,56,0),716]]);
         nalyticsa -= parseFloat(`${1 | parseInt(`${awayM}`)}`);
         interneti = [2 >> (Math.min(1, Math.abs(configure3.size)))];
         configure3.set(`${interneti.length}`, 3);
      }
         awayM /= Math.max(4, parseFloat(`${parseInt(`${awayM}`) << (Math.min(3, Math.abs(2)))}`));
      let fillu = awayM >= 8183956.0;
      do {
         awayM += parseFloat(`${parseInt(`${nalyticsa}`) * 2}`);
         if (fillu) {
            break;
         }
      } while ((nalyticsa > 3.62) && fillu);
         nalyticsa += parseFloat(`${parseInt(`${awayM}`) << (Math.min(3, Math.abs(parseInt(`${nalyticsa}`))))}`);
      filledJ = `${emojii << (Math.min(Math.abs(parseInt(`${awayM}`)), 1))}`;
       let runtimeS = 4.0;
         runtimeS -= parseInt(`${runtimeS}`);
      for (let h = 0; h < 3; h++) {
         runtimeS *= parseInt(`${runtimeS}`);
      }
         runtimeS /= Math.max(4, parseInt(`${runtimeS}`));
      libcrashsdkl = new Map([[`${smallF.length}`, arrowselectdown2.length | smallF.length]]);
   while (2 > (3 << (Math.min(3, shareZ.length))) && (3 << (Math.min(3, shareZ.length))) > 5) {
      smallF.push((String.fromCharCode(68,0) == filledJ ? filledJ.length : shareZ.length));
      break;
   }
      handleRefresh();
    }
  };

  const checkConnection = useCallback(async () => {
       let iconqqk = String.fromCharCode(112,95,57,57,95,97,115,99,105,105,0);
    let rankR = 0.0;
    let sportF = 1;
    let whatsappe = String.fromCharCode(114,101,108,97,121,115,95,111,95,52,50,0);
    let a_lockH = String.fromCharCode(101,120,110,111,100,101,95,112,95,49,52,0);
    let iconarrowrightO: Array<any> = [String.fromCharCode(105,112,109,111,118,105,101,95,109,95,51,57,0), String.fromCharCode(107,95,53,54,95,115,116,121,108,101,0), String.fromCharCode(116,119,111,112,111,105,110,116,95,110,95,56,56,0)];
    let phonex = String.fromCharCode(99,111,109,112,97,114,97,116,111,114,95,117,95,54,50,0);
    let overlayq = 4;
    let notificationgrayV = 5;
    let templateprocessorM: Array<any> = [818, 594];
       let phoneshared = String.fromCharCode(101,115,99,97,112,101,100,95,117,95,51,56,0);
       let indexl = String.fromCharCode(122,95,52,53,95,116,114,97,102,0);
       let f_hashY = String.fromCharCode(102,95,57,55,95,112,114,101,115,99,97,108,101,0);
         f_hashY += "1";
         indexl = `${indexl.length ^ phoneshared.length}`;
      while (phoneshared != String.fromCharCode(86,0)) {
          let memberk = 0.0;
          let libjsih = true;
          let eyeclosek = String.fromCharCode(110,95,57,53,95,110,108,115,116,0);
          let down6 = 0.0;
         indexl += `${eyeclosek.length ^ 2}`;
         memberk -= parseInt(`${memberk}`) ^ 3;
         libjsih = 34.94 <= memberk && 34.94 <= down6;
         eyeclosek = `${2 >> (Math.min(Math.abs(parseInt(`${down6}`)), 4))}`;
         break;
      }
         indexl += `${f_hashY.length / (Math.max(indexl.length, 8))}`;
          let savec = String.fromCharCode(101,115,116,105,109,97,116,111,114,95,52,95,54,53,0);
          let refreshborderlessG = String.fromCharCode(111,110,121,120,100,95,54,95,57,50,0);
          let iconarrowrightblack6 = 1;
         indexl = `${refreshborderlessG.length << (Math.min(1, savec.length))}`;
         savec = `${iconarrowrightblack6 >> (Math.min(Math.abs(3), 4))}`;
         refreshborderlessG = `${iconarrowrightblack6 / 2}`;
      for (let c = 0; c < 3; c++) {
         indexl += `${f_hashY.length & 3}`;
      }
      while (f_hashY == indexl) {
         indexl = `${f_hashY.length}`;
         break;
      }
         phoneshared += "1";
         indexl = `${1 + indexl.length}`;
      sportF /= Math.max(5, phonex.length + parseInt(`${rankR}`));
      a_lockH += `${phonex.length}`;
      rankR *= parseFloat(`${3 / (Math.max(4, iconarrowrightO.length))}`);
      overlayq *= overlayq;
   let reminderc = 6906253 <= sportF;
   do {
       let icong = String.fromCharCode(107,95,51,55,95,97,117,116,111,114,101,102,114,101,115,104,0);
       let homeactivey = String.fromCharCode(110,95,54,57,95,115,104,105,102,116,101,100,0);
       let orangeclockg = String.fromCharCode(100,111,99,115,105,122,101,95,121,95,55,50,0);
       let pushT = 4.0;
      if (orangeclockg.length < 5) {
          let leakcheckerX = String.fromCharCode(119,101,98,102,105,108,101,95,117,95,51,51,0);
          let whistleorangeq: Map<any, any> = new Map([[String.fromCharCode(105,115,115,95,56,95,48,0),true ], [String.fromCharCode(112,114,101,114,111,108,108,95,97,95,49,56,0),true ], [String.fromCharCode(101,99,100,115,97,95,121,95,55,49,0),false ]]);
          let eactY: Array<any> = [254, 92, 558];
          let iconwatchnowk: Map<any, any> = new Map([[String.fromCharCode(99,97,112,116,117,114,105,110,103,95,99,95,52,55,0),218], [String.fromCharCode(115,121,109,98,111,108,105,122,101,95,121,95,53,50,0),752]]);
          let phone5 = 2.0;
         homeactivey += `${icong.length}`;
         leakcheckerX += `${leakcheckerX.length + 1}`;
         whistleorangeq = new Map([[`${whistleorangeq.size}`, whistleorangeq.size]]);
         eactY.push(whistleorangeq.size & 3);
         iconwatchnowk = new Map([[`${whistleorangeq.size}`, 1]]);
         phone5 += parseInt(`${phone5}`);
      }
         orangeclockg += `${parseInt(`${pushT}`)}`;
      if (icong.endsWith(`${homeactivey.length}`)) {
          let stringso: Map<any, any> = new Map([[String.fromCharCode(99,108,101,97,114,95,52,95,57,55,0),false ], [String.fromCharCode(117,95,49,49,95,101,120,99,108,0),false ], [String.fromCharCode(99,103,117,95,109,95,51,50,0),false ]]);
          let liveshareb: Map<any, any> = new Map([[String.fromCharCode(114,105,112,101,109,100,95,104,95,56,55,0),838], [String.fromCharCode(102,95,52,55,95,109,101,114,103,101,100,0),736], [String.fromCharCode(100,95,51,53,95,117,112,116,105,109,101,0),0]]);
          let iconpipshrink1 = String.fromCharCode(104,95,50,55,95,109,97,110,116,105,115,115,97,115,0);
          let cornershootH = String.fromCharCode(115,113,117,97,114,101,115,95,114,95,50,51,0);
          let textlayoutmanagerB: Array<any> = [String.fromCharCode(99,95,55,53,95,99,111,110,115,116,113,112,0), String.fromCharCode(101,108,115,116,95,102,95,57,55,0), String.fromCharCode(108,97,114,103,101,114,95,98,95,49,57,0)];
         homeactivey += `${icong.length}`;
         stringso.set(`${iconpipshrink1}`, 2);
         liveshareb = new Map([[`${stringso.size}`, stringso.size % (Math.max(2, 10))]]);
         iconpipshrink1 = `${textlayoutmanagerB.length}`;
         cornershootH = `${stringso.size}`;
         textlayoutmanagerB = [3];
      }
         homeactivey = `${3 - orangeclockg.length}`;
         homeactivey = `${parseInt(`${pushT}`) + 2}`;
          let less5 = String.fromCharCode(111,95,49,55,95,116,115,97,110,0);
         icong += `${parseInt(`${pushT}`) * 2}`;
         less5 += `${less5.length >> (Math.min(Math.abs(2), 1))}`;
         homeactivey += `${homeactivey.length / (Math.max(1, 8))}`;
      let penaltymatchicon_ = icong.length >= 5011077;
      do {
         icong = `${(String.fromCharCode(90,0) == homeactivey ? homeactivey.length : icong.length)}`;
         if (penaltymatchicon_) {
            break;
         }
      } while (penaltymatchicon_ && (homeactivey != icong));
         icong = `${homeactivey.length}`;
      let whistleorangeqX = 5734184.0 >= pushT;
      do {
          let libjsiX = String.fromCharCode(106,95,54,53,95,116,97,103,0);
          let subbasketballplayerN = String.fromCharCode(122,95,52,57,95,98,101,110,105,103,110,0);
          let executorC = String.fromCharCode(102,100,111,112,101,110,95,100,95,53,48,0);
          let tempnodatad = String.fromCharCode(109,97,114,107,101,116,95,121,95,50,50,0);
          let logouserS: Array<any> = [205, 461];
         pushT -= parseFloat(`${homeactivey.length >> (Math.min(Math.abs(3), 3))}`);
         libjsiX = `${(String.fromCharCode(55,0) == subbasketballplayerN ? libjsiX.length : subbasketballplayerN.length)}`;
         executorC += `${libjsiX.length}`;
         tempnodatad += "3";
         logouserS.push(subbasketballplayerN.length >> (Math.min(Math.abs(1), 3)));
         if (whistleorangeqX) {
            break;
         }
      } while ((5.37 <= (pushT * 5.86) || (parseFloat(`${orangeclockg.length}`) * pushT) <= 5.86) && whistleorangeqX);
         homeactivey += `${orangeclockg.length << (Math.min(homeactivey.length, 5))}`;
      while (homeactivey.length == icong.length) {
         homeactivey = `${orangeclockg.length / 3}`;
         break;
      }
      sportF |= phonex.length;
      if (reminderc) {
         break;
      }
   } while ((sportF <= rankR) && reminderc);

    const state = await NetInfo.fetch();

       let assistG = String.fromCharCode(115,109,105,108,105,110,103,95,113,95,49,48,48,0);
       let eyecloseY = 4.0;
       let basketballplayerplaceholderS = 3.0;
         assistG += `${2 << (Math.min(4, assistG.length))}`;
      let playershirt0 = assistG.length <= 6347372;
      do {
         assistG = `${parseInt(`${basketballplayerplaceholderS}`)}`;
         if (playershirt0) {
            break;
         }
      } while ((3.58 == (assistG.length - eyecloseY) && 1.92 == (eyecloseY - 3.58)) && playershirt0);
         eyecloseY *= (String.fromCharCode(119,0) == assistG ? parseInt(`${basketballplayerplaceholderS}`) : assistG.length);
       let smallbrightnessO = String.fromCharCode(103,95,55,48,0);
         eyecloseY += assistG.length;
      for (let n = 0; n < 2; n++) {
         smallbrightnessO += `${parseInt(`${eyecloseY}`) + assistG.length}`;
      }
         basketballplayerplaceholderS /= Math.max(parseInt(`${basketballplayerplaceholderS}`) & parseInt(`${eyecloseY}`), 3);
      while (4 >= (1 + parseInt(`${eyecloseY}`)) || 4.76 >= (eyecloseY + assistG.length)) {
          let hooksQ = false;
         eyecloseY *= 1 ^ parseInt(`${basketballplayerplaceholderS}`);
         hooksQ = !hooksQ;
         break;
      }
         assistG = `${(String.fromCharCode(116,0) == smallbrightnessO ? smallbrightnessO.length : parseInt(`${basketballplayerplaceholderS}`))}`;
      iconarrowrightO = [1 << (Math.min(4, iconqqk.length))];
      whatsappe += "1";
   for (let u = 0; u < 3; u++) {
       let pressurec: Map<any, any> = new Map([[String.fromCharCode(122,95,53,51,95,112,114,101,112,114,111,99,101,115,115,0),String.fromCharCode(111,110,99,101,95,119,95,51,57,0)], [String.fromCharCode(100,105,115,112,108,97,121,105,110,103,95,113,95,49,56,0),String.fromCharCode(97,95,55,57,95,99,111,115,105,103,110,97,116,111,114,105,101,115,0)]]);
       let forwardF = 3.0;
       let dicelogo4 = 4;
       let navigationm = false;
      while (pressurec.get(`${forwardF}`) != null) {
          let basketballicons: Map<any, any> = new Map([[String.fromCharCode(105,95,49,57,95,101,110,117,109,101,114,97,116,111,114,0),700], [String.fromCharCode(114,95,54,50,95,99,111,110,116,97,105,110,115,0),17], [String.fromCharCode(110,95,56,52,95,121,99,98,99,114,0),200]]);
         pressurec.set(`${dicelogo4}`, dicelogo4 / 1);
         basketballicons = new Map([[`${basketballicons.size}`, basketballicons.size]]);
         break;
      }
      while (navigationm) {
         navigationm = dicelogo4 <= 64;
         break;
      }
         dicelogo4 /= Math.max(4, parseInt(`${forwardF}`));
         dicelogo4 <<= Math.min(Math.abs(((navigationm ? 1 : 2) - parseInt(`${forwardF}`))), 1);
         forwardF /= Math.max(parseFloat(`${2}`), 5);
       let darkr = 5.0;
       let iconcurrentmatchS = 3.0;
          let iconuserQ: Map<any, any> = new Map([[String.fromCharCode(111,95,49,52,0),83], [String.fromCharCode(100,105,115,97,98,108,101,115,95,116,95,52,55,0),951]]);
         darkr *= parseFloat(`${dicelogo4}`);
         iconuserQ = new Map([[`${iconuserQ.size}`, iconuserQ.size]]);
          let reactnativeultimatelistviewo = 0.0;
          let materialf = String.fromCharCode(114,112,99,95,57,95,52,56,0);
         pressurec = new Map([[`${darkr}`, dicelogo4]]);
         reactnativeultimatelistviewo *= (parseFloat(`${String.fromCharCode(102,0) == materialf ? parseInt(`${reactnativeultimatelistviewo}`) : materialf.length}`));
          let goalQ = 0.0;
          let vignetteF = String.fromCharCode(99,109,115,103,115,95,108,95,57,54,0);
         dicelogo4 <<= Math.min(4, vignetteF.length);
         goalQ -= parseFloat(`${parseInt(`${goalQ}`)}`);
         vignetteF = `${parseInt(`${goalQ}`) << (Math.min(3, Math.abs(parseInt(`${goalQ}`))))}`;
         darkr -= parseFloat(`${pressurec.size + 2}`);
          let resend_: Map<any, any> = new Map([[String.fromCharCode(108,95,51,55,95,99,97,108,108,98,97,99,107,0),false ], [String.fromCharCode(109,95,56,55,95,102,114,97,103,0),true ], [String.fromCharCode(119,95,53,95,98,117,98,98,108,101,115,0),false ]]);
          let smallbrightnessX = String.fromCharCode(118,100,114,97,119,104,101,108,112,101,114,95,98,95,49,48,48,0);
          let jinit_c9e = String.fromCharCode(103,95,57,52,95,102,111,117,114,99,99,0);
         navigationm = String.fromCharCode(106,0) == jinit_c9e;
         resend_ = new Map([[`${resend_.size}`, (smallbrightnessX == String.fromCharCode(122,0) ? smallbrightnessX.length : resend_.size)]]);
         jinit_c9e = `${smallbrightnessX.length}`;
      if ((parseInt(`${darkr}`) * pressurec.size) == 4 && 4 == (pressurec.size * parseInt(`${darkr}`))) {
         darkr -= parseFloat(`${pressurec.size ^ 3}`);
      }
      whatsappe += "3";
   }
   while (4 <= (1 >> (Math.min(3, iconqqk.length)))) {
      rankR /= Math.max(parseFloat(`${3 | phonex.length}`), 4);
      break;
   }
   let componentregistry3 = 7747365 >= iconarrowrightO.length;
   do {
      iconarrowrightO.push(notificationgrayV);
      if (componentregistry3) {
         break;
      }
   } while ((3 >= (3 | iconqqk.length) && (3 | iconarrowrightO.length) >= 3) && componentregistry3);
    const offline = !(state.isConnected && state.isInternetReachable);

      phonex = `${2 | sportF}`;
   for (let y = 0; y < 2; y++) {
      whatsappe += `${a_lockH.length}`;
   }
       let kuaishouK = false;
       let cancelp = String.fromCharCode(112,97,114,116,95,104,95,55,55,0);
      while (!kuaishouK) {
         kuaishouK = !cancelp.endsWith(`${kuaishouK}`);
         break;
      }
      if (cancelp.startsWith(`${kuaishouK}`)) {
          let iconsubssuccessV = 3.0;
          let unimplementedview9 = true;
          let abidetectm = String.fromCharCode(120,95,54,51,95,99,111,100,101,114,115,0);
          let infoV = String.fromCharCode(102,95,51,95,98,105,116,119,114,105,116,101,114,0);
         cancelp = `${parseInt(`${iconsubssuccessV}`) * 1}`;
         iconsubssuccessV *= infoV.length / (Math.max(5, abidetectm.length));
         unimplementedview9 = !abidetectm.startsWith(`${unimplementedview9}`);
         infoV = `${abidetectm.length}`;
      }
      let nbatrophyj = cancelp.length <= 6567212;
      do {
         cancelp += `${cancelp.length}`;
         if (nbatrophyj) {
            break;
         }
      } while ((kuaishouK) && nbatrophyj);
          let leftT = 4;
          let push9 = String.fromCharCode(120,95,55,53,95,99,108,97,117,115,101,0);
          let teamO = 4;
         kuaishouK = leftT == 36 || cancelp == String.fromCharCode(115,0);
         leftT += teamO | push9.length;
         push9 = `${3 - push9.length}`;
         teamO &= 3 + push9.length;
      let sportsz = kuaishouK ? !kuaishouK : kuaishouK;
      do {
          let acceptedK: Array<any> = [809, 767, 320];
         kuaishouK = acceptedK.length <= 30;
         if (sportsz) {
            break;
         }
      } while ((kuaishouK || 2 > cancelp.length) && sportsz);
          let reactnativejs3 = 2.0;
          let iconscheduleC = 0.0;
          let imagemanager6 = String.fromCharCode(107,95,52,48,95,100,117,109,109,121,0);
         cancelp = `${parseInt(`${reactnativejs3}`)}`;
         iconscheduleC += imagemanager6.length;
         imagemanager6 += `${imagemanager6.length << (Math.min(2, Math.abs(parseInt(`${iconscheduleC}`))))}`;
      iconqqk += "1";
      iconarrowrightO.push(iconqqk.length);
   if ((iconarrowrightO.length & 5) == 1 && (parseFloat(`${iconarrowrightO.length}`) / (Math.max(9, rankR))) == 3.0) {
      rankR -= parseFloat(`${phonex.length ^ 2}`);
   }
    setIsOffline(offline);

      a_lockH += "2";
      iconqqk = `${parseInt(`${rankR}`) + 1}`;
   if ((1 >> (Math.min(2, Math.abs(notificationgrayV)))) >= 4 || 1 >= (overlayq >> (Math.min(4, Math.abs(notificationgrayV))))) {
      overlayq -= 1 | parseInt(`${rankR}`);
   }
      iconqqk = `${sportF}`;
      rankR *= parseFloat(`${parseInt(`${rankR}`)}`);
    if (!offline) {

   if (2 > (3 << (Math.min(4, Math.abs(sportF)))) && 5 > (3 << (Math.min(5, Math.abs(notificationgrayV))))) {
      notificationgrayV += sportF;
   }
      templateprocessorM.push(templateprocessorM.length * notificationgrayV);
      iconqqk += `${templateprocessorM.length}`;
   for (let f = 0; f < 3; f++) {
      notificationgrayV %= Math.max(a_lockH.length % 2, 5);
   }
   while ((templateprocessorM.length - 2) >= 2 || 4 >= (2 - templateprocessorM.length)) {
      notificationgrayV *= whatsappe.length;
      break;
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
    wawaWhitetickAway.getTopicIosTmp()
      .then((json: wawaQuestIconsubssuccess) => {
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

  const renderItem = ({ item }: wawaBellreminderDisconnected) => (
    <VodPlaylist playlist={item} titleStyle={{ color: colors.text }} />
  );

  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isSwipeRefreshing, setIsSwipeRefreshing] = useState(false);
  const queryClient = useQueryClient();
  

  const handleRefresh = useCallback(async (isSwipe: boolean = false) => {
       let vignetteD: Map<any, any> = new Map([[String.fromCharCode(105,95,52,56,95,99,97,108,108,105,115,116,111,0),true ], [String.fromCharCode(105,95,51,95,98,117,108,108,101,116,0),true ], [String.fromCharCode(100,95,57,95,115,111,100,101,97,108,108,111,99,0),true ]]);
    let iconpipexpandD: Array<any> = [70, 143];
    let livenodatabgimg7 = String.fromCharCode(115,111,117,114,99,101,105,100,95,110,95,50,49,0);
    let grayJ = 0.0;
    let reactnativeultimatelistviewx = String.fromCharCode(100,114,105,118,101,110,95,105,95,51,52,0);
    let xvodE: Map<any, any> = new Map([[String.fromCharCode(100,99,97,100,115,112,95,116,95,50,49,0),162], [String.fromCharCode(101,120,112,97,110,100,95,112,95,55,55,0),476]]);
    let mbsplashM = 1;
    let fullscreenminm: Array<any> = [422, 622, 684];
    let cornershoot0 = String.fromCharCode(122,95,56,50,95,111,118,101,114,114,105,100,100,101,110,0);
    let related3 = String.fromCharCode(116,95,56,49,95,112,105,99,116,111,114,0);
    let telemetryo: Map<any, any> = new Map([[String.fromCharCode(104,95,53,56,95,105,110,116,101,114,108,101,97,118,101,100,0),String.fromCharCode(109,111,110,116,104,95,113,95,53,49,0)], [String.fromCharCode(116,101,120,116,117,114,101,95,112,95,55,50,0),String.fromCharCode(120,105,110,103,95,54,95,56,49,0)]]);
    let liveendmodallogo7 = 1.0;
       let libswresampleU = String.fromCharCode(114,111,116,97,116,105,111,110,95,105,95,49,48,48,0);
       let anytimet = 3;
       let reactnativeultimatelistviewR: Map<any, any> = new Map([[String.fromCharCode(100,95,55,54,95,112,111,112,117,112,0),438], [String.fromCharCode(98,95,52,55,95,102,108,97,116,116,101,110,101,100,0),640], [String.fromCharCode(106,95,56,52,95,108,97,114,103,101,115,116,0),56]]);
          let redcirclebgb = String.fromCharCode(112,115,110,114,104,118,115,95,101,95,50,56,0);
         libswresampleU += `${anytimet ^ reactnativeultimatelistviewR.size}`;
         redcirclebgb = `${redcirclebgb.length}`;
         anytimet &= libswresampleU.length;
      if (2 == (1 + reactnativeultimatelistviewR.size) && (reactnativeultimatelistviewR.size + 1) == 4) {
         anytimet += anytimet % (Math.max(3, 2));
      }
      while (3 < (libswresampleU.length % 2) && 2 < (libswresampleU.length % 2)) {
         libswresampleU = `${libswresampleU.length - anytimet}`;
         break;
      }
         libswresampleU += `${reactnativeultimatelistviewR.size * anytimet}`;
      if (!Array.from(reactnativeultimatelistviewR.values()).includes(anytimet)) {
         reactnativeultimatelistviewR.set(libswresampleU, anytimet >> (Math.min(libswresampleU.length, 3)));
      }
      for (let a = 0; a < 2; a++) {
          let backm = String.fromCharCode(116,95,54,48,95,103,101,116,0);
          let adultx: Map<any, any> = new Map([[String.fromCharCode(99,95,55,52,95,101,113,117,97,108,105,122,101,114,0),true ], [String.fromCharCode(97,95,52,50,95,97,115,100,107,0),true ]]);
         reactnativeultimatelistviewR.set(`${libswresampleU}`, libswresampleU.length);
         backm = `${adultx.size + 2}`;
         adultx = new Map([[`${adultx.size}`, 3]]);
      }
         reactnativeultimatelistviewR.set(`${anytimet}`, anytimet ^ 3);
       let penaltyr = String.fromCharCode(102,109,117,108,95,107,95,56,0);
      iconpipexpandD = [1];
       let update_dO: Array<any> = [658, 245];
      while ((2 >> (Math.min(2, update_dO.length))) > 1 || (update_dO.length >> (Math.min(3, update_dO.length))) > 2) {
         update_dO = [3];
         break;
      }
      while (update_dO.length < update_dO.length) {
         update_dO = [update_dO.length % 3];
         break;
      }
      if (update_dO.includes(update_dO.length)) {
          let expiredk = false;
         update_dO = [((expiredk ? 1 : 1) * 3)];
      }
      iconpipexpandD = [parseInt(`${grayJ}`) % (Math.max(reactnativeultimatelistviewx.length, 2))];
   while (!cornershoot0.endsWith(`${reactnativeultimatelistviewx.length}`)) {
      reactnativeultimatelistviewx = `${reactnativeultimatelistviewx.length / (Math.max(1, 1))}`;
      break;
   }
      fullscreenminm.push(iconpipexpandD.length);

    if (isSwipe) {

       let iconmegaphone2 = String.fromCharCode(106,95,52,57,95,101,122,105,101,114,0);
       let profileactiveq = 0.0;
      for (let t = 0; t < 1; t++) {
          let inactivej = 4;
          let selectU: Map<any, any> = new Map([[String.fromCharCode(117,95,57,95,115,101,113,117,101,110,99,101,0),String.fromCharCode(116,95,49,50,95,116,114,97,99,101,114,0)], [String.fromCharCode(117,95,57,55,95,99,111,109,112,97,114,0),String.fromCharCode(105,95,54,49,95,111,112,101,110,101,114,0)]]);
          let guideV = String.fromCharCode(115,119,105,116,99,104,97,98,108,101,95,102,95,51,48,0);
          let iconlogoutC: Array<any> = [609, 837, 90];
          let progress4 = String.fromCharCode(99,111,101,102,102,105,99,105,101,110,116,95,122,95,49,48,48,0);
         profileactiveq /= Math.max(1, inactivej);
         inactivej <<= Math.min(Math.abs(iconlogoutC.length / (Math.max(guideV.length, 2))), 2);
         selectU = new Map([[`${iconlogoutC.length}`, iconlogoutC.length]]);
         guideV += `${1 + guideV.length}`;
         progress4 += "1";
      }
       let baiduadsv = String.fromCharCode(115,99,104,101,100,117,108,101,95,108,95,49,54,0);
       let mbridgeN = String.fromCharCode(102,95,50,48,95,99,111,108,111,117,114,0);
         mbridgeN += `${(iconmegaphone2 == String.fromCharCode(88,0) ? mbridgeN.length : iconmegaphone2.length)}`;
      for (let s = 0; s < 3; s++) {
          let leaguedetailsbgb = String.fromCharCode(114,117,110,116,101,114,109,95,117,95,52,52,0);
          let chinaY = 0;
          let bdxadsdke = false;
          let appsG = false;
          let dplus5: Array<any> = [156, 858];
         baiduadsv += `${parseInt(`${profileactiveq}`)}`;
         leaguedetailsbgb += `${leaguedetailsbgb.length >> (Math.min(Math.abs(3), 2))}`;
         chinaY <<= Math.min(2, Math.abs(1));
         bdxadsdke = !bdxadsdke;
         appsG = 58 < leaguedetailsbgb.length;
         dplus5 = [2];
      }
      while (4.66 == (profileactiveq / (Math.max(5.28, 4))) && 1 == (iconmegaphone2.length | 2)) {
         iconmegaphone2 = "2";
         break;
      }
      while (parseInt(`${profileactiveq}`) > baiduadsv.length) {
         baiduadsv += `${mbridgeN.length}`;
         break;
      }
      fullscreenminm = [reactnativeultimatelistviewx.length];
      grayJ += 2 ^ mbsplashM;
   while ((2 - iconpipexpandD.length) == 5) {
      iconpipexpandD.push(parseInt(`${grayJ}`));
      break;
   }
      reactnativeultimatelistviewx = `${parseInt(`${grayJ}`)}`;
      setIsSwipeRefreshing(true);
    } else {

   if (1 < (mbsplashM + livenodatabgimg7.length) || 2 < (mbsplashM + 1)) {
      mbsplashM ^= xvodE.size;
   }
   while (5 >= (xvodE.size % (Math.max(livenodatabgimg7.length, 8))) && (5 % (Math.max(1, xvodE.size))) >= 4) {
      xvodE = new Map([[`${vignetteD.size}`, parseInt(`${grayJ}`) | 1]]);
      break;
   }
       let redcirclebgv: Map<any, any> = new Map([[String.fromCharCode(98,102,115,116,109,95,109,95,49,49,0),String.fromCharCode(103,114,111,101,115,116,108,95,97,95,53,55,0)], [String.fromCharCode(121,95,54,52,95,112,114,101,115,101,110,99,101,115,0),String.fromCharCode(115,119,105,116,99,104,101,114,95,98,95,57,51,0)], [String.fromCharCode(114,95,54,48,95,99,111,108,111,114,0),String.fromCharCode(117,110,108,111,97,100,95,106,95,53,57,0)]]);
       let mergerG: Array<any> = [353, 658, 441];
       let forward7 = String.fromCharCode(109,111,122,106,112,101,103,95,115,95,56,52,0);
         redcirclebgv.set(`${mergerG.length}`, mergerG.length - 1);
          let greytickM = 3.0;
          let librrc7 = 0.0;
         redcirclebgv = new Map([[`${greytickM}`, parseInt(`${greytickM}`)]]);
         librrc7 *= 1;
      if ((mergerG.length & 3) <= 1 && (3 & forward7.length) <= 3) {
         forward7 += `${mergerG.length}`;
      }
         mergerG.push(3 - redcirclebgv.size);
      while (forward7.includes(`${mergerG.length}`)) {
         forward7 += `${1 & redcirclebgv.size}`;
         break;
      }
      for (let d = 0; d < 1; d++) {
         forward7 = `${mergerG.length & 1}`;
      }
       let libanej = String.fromCharCode(112,114,110,103,95,116,95,57,57,0);
          let gemfile3: Array<any> = [773, 196, 717];
          let rewardvideoa: Map<any, any> = new Map([[String.fromCharCode(101,95,51,48,95,112,114,111,116,111,98,117,102,0),669], [String.fromCharCode(119,95,50,56,95,102,112,115,0),837], [String.fromCharCode(101,108,101,118,97,116,101,100,95,105,95,53,55,0),524]]);
         redcirclebgv = new Map([[`${gemfile3.length}`, gemfile3.length + 1]]);
         rewardvideoa.set(`${rewardvideoa.size}`, rewardvideoa.size);
      while (redcirclebgv.size > mergerG.length) {
         redcirclebgv.set(libanej, 1);
         break;
      }
      iconpipexpandD.push(3);
   while (xvodE.get(`${vignetteD.size}`) != null) {
      xvodE = new Map([[`${vignetteD.size}`, 2 | vignetteD.size]]);
      break;
   }
      setIsRefreshing(true);
    }
    

   if ((4.72 / (Math.max(6, grayJ))) > 4.58 || 5 > (reactnativeultimatelistviewx.length / (Math.max(7, parseInt(`${grayJ}`))))) {
      grayJ *= 3 >> (Math.min(4, Math.abs(vignetteD.size)));
   }
   if (cornershoot0.length < xvodE.size) {
       let confirmation8 = 2.0;
       let preview_ = true;
       let libflipperp = String.fromCharCode(102,95,54,49,95,105,110,116,114,111,100,117,99,116,105,111,110,0);
       let team7 = 0.0;
      let libavfilterL = preview_ ? !preview_ : preview_;
      do {
         preview_ = preview_ || 10.2 > confirmation8;
         if (libavfilterL) {
            break;
         }
      } while ((libflipperp.length <= 2 || !preview_) && libavfilterL);
      while ((confirmation8 + 3.82) > 5.0 || (confirmation8 + team7) > 3.82) {
         confirmation8 -= parseFloat(`${parseInt(`${team7}`) - 3}`);
         break;
      }
       let leagueV = 1;
         preview_ = libflipperp.startsWith(`${leagueV}`);
         leagueV *= libflipperp.length % 2;
          let libfabricjniv = String.fromCharCode(98,111,116,116,108,101,110,101,99,107,95,110,95,56,48,0);
         team7 *= parseFloat(`${parseInt(`${confirmation8}`) % 2}`);
         libfabricjniv = `${(libfabricjniv == String.fromCharCode(79,0) ? libfabricjniv.length : libfabricjniv.length)}`;
         libflipperp = `${parseInt(`${team7}`) / (Math.max(libflipperp.length, 5))}`;
       let dangerk: Map<any, any> = new Map([[String.fromCharCode(114,116,99,115,116,97,116,115,95,110,95,55,53,0),false ], [String.fromCharCode(101,95,54,57,95,114,101,115,111,108,118,101,0),true ]]);
      let ewardedY = String.fromCharCode(48,106,55,113,53,104,121,52,119,117,0) == libflipperp;
      do {
         libflipperp = `${1 >> (Math.min(Math.abs(parseInt(`${team7}`)), 4))}`;
         if (ewardedY) {
            break;
         }
      } while (ewardedY && (libflipperp.includes(`${preview_}`)));
      if (!preview_) {
          let injuryV = 5.0;
          let libsentryQ: Map<any, any> = new Map([[String.fromCharCode(109,97,99,104,105,110,101,95,105,95,49,49,0),true ], [String.fromCharCode(114,101,99,111,118,101,114,101,100,95,56,95,56,53,0),false ]]);
          let toponT = String.fromCharCode(114,103,98,116,111,121,118,95,99,95,52,0);
          let viewerl = 2.0;
         preview_ = 20 < libflipperp.length || 2.83 < team7;
         injuryV += libsentryQ.size >> (Math.min(3, Math.abs(parseInt(`${injuryV}`))));
         libsentryQ = new Map([[`${viewerl}`, parseInt(`${injuryV}`)]]);
         toponT = `${(toponT == String.fromCharCode(101,0) ? toponT.length : libsentryQ.size)}`;
         viewerl *= (String.fromCharCode(57,0) == toponT ? toponT.length : libsentryQ.size);
      }
       let filedE = 2;
      if (1.56 >= confirmation8) {
          let brightnessB = String.fromCharCode(112,114,111,100,117,99,116,115,95,109,95,57,48,0);
          let redgoalG = String.fromCharCode(114,95,49,55,95,111,119,110,101,100,0);
         leagueV <<= Math.min(Math.abs((String.fromCharCode(76,0) == redgoalG ? redgoalG.length : parseInt(`${team7}`))), 2);
         brightnessB = `${brightnessB.length}`;
      }
      xvodE.set(livenodatabgimg7, iconpipexpandD.length);
   }
   for (let w = 0; w < 3; w++) {
       let full7: Array<any> = [717, 885];
       let gmailO: Array<any> = [String.fromCharCode(108,105,110,101,98,114,101,97,107,95,50,95,53,0), String.fromCharCode(108,114,111,110,100,95,102,95,52,57,0), String.fromCharCode(111,95,57,48,0)];
       let redgoalU = 2;
       let storee = 5.0;
         redgoalU <<= Math.min(gmailO.length, 1);
      let albumE = 7443793 <= gmailO.length;
      do {
          let volumek: Array<any> = [880, 615];
          let libreactnativeblobm = false;
          let favorite_ = String.fromCharCode(98,95,56,53,95,102,102,109,109,97,108,0);
          let refresh_ = 4;
          let privacyY = String.fromCharCode(104,114,112,95,121,95,49,56,0);
         gmailO = [refresh_];
         volumek = [((libreactnativeblobm ? 3 : 3) << (Math.min(Math.abs(1), 3)))];
         libreactnativeblobm = !libreactnativeblobm && privacyY.length <= 60;
         favorite_ = `${volumek.length}`;
         refresh_ %= Math.max(5, volumek.length | 3);
         privacyY = `${((libreactnativeblobm ? 5 : 4))}`;
         if (albumE) {
            break;
         }
      } while (albumE && (2 > (gmailO.length / (Math.max(full7.length, 5)))));
      if (4.43 > (storee + parseFloat(`${full7.length}`)) && 3.2 > (4.43 + storee)) {
          let icontransferclubf = true;
         storee += parseFloat(`${1}`);
         icontransferclubf = !icontransferclubf;
      }
      while (5 <= (full7.length + redgoalU)) {
          let libloggerV = String.fromCharCode(108,95,54,54,95,109,97,105,108,0);
          let basketballmatchdetailbgA = 3.0;
          let defaultfootballbg4 = String.fromCharCode(113,95,51,51,95,108,103,111,114,97,110,100,0);
          let fullscreenmaxo = 3.0;
         full7.push((String.fromCharCode(73,0) == libloggerV ? parseInt(`${basketballmatchdetailbgA}`) : libloggerV.length));
         basketballmatchdetailbgA -= parseInt(`${fullscreenmaxo}`) ^ 3;
         defaultfootballbg4 += `${3 + parseInt(`${fullscreenmaxo}`)}`;
         break;
      }
      for (let d = 0; d < 2; d++) {
         redgoalU &= full7.length;
      }
      if (3 == (3 >> (Math.min(5, gmailO.length))) || 2 == (gmailO.length >> (Math.min(Math.abs(3), 5)))) {
         gmailO.push(full7.length << (Math.min(gmailO.length, 3)));
      }
         storee -= parseFloat(`${gmailO.length << (Math.min(Math.abs(2), 3))}`);
      if (gmailO.length >= 4) {
         gmailO = [2];
      }
         gmailO.push(gmailO.length);
      let notificationgrayk = gmailO.length >= 7004611;
      do {
         gmailO.push(parseInt(`${storee}`));
         if (notificationgrayk) {
            break;
         }
      } while ((4 < full7.length) && notificationgrayk);
      let project_ = redgoalU <= 6959728;
      do {
         redgoalU += gmailO.length;
         if (project_) {
            break;
         }
      } while (((2.96 + storee) <= 5.83 && (redgoalU / (Math.max(4, 6))) <= 3) && project_);
       let predictionactivey: Array<any> = [627, 891, 137];
      fullscreenminm.push(3);
   }
       let yellowanimationlivev: Array<any> = [327, 549];
      for (let a = 0; a < 1; a++) {
         yellowanimationlivev = [yellowanimationlivev.length];
      }
      let arrowselectdownk = 6244345 >= yellowanimationlivev.length;
      do {
          let storet = String.fromCharCode(108,97,116,101,98,105,110,100,105,110,103,115,121,109,98,111,108,116,97,98,108,101,95,121,95,57,49,0);
          let iconarrowrightwhiteI = 5;
          let icondownimgA = 4;
          let nalyticsH = String.fromCharCode(101,95,49,54,95,115,111,102,97,108,105,122,101,114,0);
         yellowanimationlivev = [iconarrowrightwhiteI - icondownimgA];
         storet += `${nalyticsH.length}`;
         iconarrowrightwhiteI &= (storet == String.fromCharCode(52,0) ? nalyticsH.length : storet.length);
         icondownimgA /= Math.max(4, 2 % (Math.max(10, storet.length)));
         if (arrowselectdownk) {
            break;
         }
      } while (((yellowanimationlivev.length >> (Math.min(yellowanimationlivev.length, 5))) >= 4 && (yellowanimationlivev.length >> (Math.min(Math.abs(4), 2))) >= 2) && arrowselectdownk);
      let scorepopsoundD = yellowanimationlivev.length >= 6607123;
      do {
          let knewsN = String.fromCharCode(105,95,55,51,95,121,117,118,109,112,101,103,0);
          let zhengpianr = 3;
          let m_unlockC = 3.0;
         yellowanimationlivev.push(parseInt(`${m_unlockC}`) / (Math.max(1, 5)));
         knewsN += `${knewsN.length}`;
         zhengpianr /= Math.max(knewsN.length, 3);
         m_unlockC /= Math.max(4, parseFloat(`${1 | zhengpianr}`));
         if (scorepopsoundD) {
            break;
         }
      } while ((4 == yellowanimationlivev.length) && scorepopsoundD);
      grayJ -= mbsplashM * 2;
    

      mbsplashM |= 2 % (Math.max(5, xvodE.size));
   if (1 < (vignetteD.size + 3) && 5 < (3 + fullscreenminm.length)) {
      fullscreenminm = [3];
   }
   while (cornershoot0.length <= related3.length) {
       let forma = String.fromCharCode(101,95,57,56,95,102,101,116,99,104,105,110,103,0);
       let materialj = String.fromCharCode(118,95,49,48,48,95,105,118,115,101,116,117,112,0);
      let base0 = 5191302 >= forma.length;
      do {
          let uploadP = 4.0;
          let mutedK = String.fromCharCode(114,95,54,57,95,115,121,110,99,104,114,111,110,105,115,101,100,0);
         forma += `${materialj.length}`;
         uploadP -= parseFloat(`${parseInt(`${uploadP}`)}`);
         mutedK = `${(mutedK == String.fromCharCode(82,0) ? parseInt(`${uploadP}`) : mutedK.length)}`;
         if (base0) {
            break;
         }
      } while ((materialj != forma) && base0);
      if (!materialj.endsWith(forma)) {
         forma += `${forma.length / 3}`;
      }
          let fcdaebecbcbafcdfceaaeccfeacdbw: Map<any, any> = new Map([[String.fromCharCode(102,111,115,115,105,108,95,114,95,52,50,0),false ], [String.fromCharCode(104,95,53,55,95,107,101,121,98,111,97,114,100,0),true ]]);
         materialj += `${fcdaebecbcbafcdfceaaeccfeacdbw.size << (Math.min(Math.abs(3), 1))}`;
         materialj = `${(String.fromCharCode(53,0) == forma ? forma.length : materialj.length)}`;
         materialj = `${forma.length}`;
         materialj = "2";
      cornershoot0 = "2";
      break;
   }
   let dragclose3 = 6865119 <= mbsplashM;
   do {
      mbsplashM >>= Math.min(4, Math.abs(2 << (Math.min(2, Math.abs(xvodE.size)))));
      if (dragclose3) {
         break;
      }
   } while (dragclose3 && ((4 + xvodE.size) > 3 && 1 > (4 + mbsplashM)));

    

   let suboutX = String.fromCharCode(122,114,97,54,97,49,101,0) == reactnativeultimatelistviewx;
   do {
      reactnativeultimatelistviewx = `${related3.length}`;
      if (suboutX) {
         break;
      }
   } while ((iconpipexpandD.length < reactnativeultimatelistviewx.length) && suboutX);
   while (reactnativeultimatelistviewx.endsWith(`${iconpipexpandD.length}`)) {
      iconpipexpandD = [(String.fromCharCode(90,0) == livenodatabgimg7 ? xvodE.size : livenodatabgimg7.length)];
      break;
   }
      vignetteD.set(`${reactnativeultimatelistviewx}`, reactnativeultimatelistviewx.length);
   while (3 >= (mbsplashM << (Math.min(fullscreenminm.length, 5)))) {
      fullscreenminm = [3];
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
                source={require('@static/images/iconnewsshareDist.gif')}
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
                      source={require('@static/images/iconnewsshareDist.gif')}
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
