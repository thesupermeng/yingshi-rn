import React, { useEffect, useState, useCallback, useRef } from 'react';
import {
    View,
    Text,
    AppState,
} from 'react-native';
import ScreenContainer from '../components/container/tt_backward';
import { useInfiniteQuery } from '@tanstack/react-query';
import { StyleSheet } from 'react-native';
import { ttAnimationSource } from '@type/tt_line_borderless';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { API_DOMAIN } from '@utility/tt_trophy_cross';
import MiniVideoList from '../components/videoPlayer/tt_preview_typing';
import { useFocusEffect, useIsFocused, useTheme } from '@react-navigation/native';
import NoConnection from './../components/common/tt_fast';
import NetInfo from '@react-native-community/netinfo';
import { ttBaiduNewinterstitial } from '@redux/reducers/tt_center';
import { useAppSelector } from '@hooks/tt_spec_download';
import { ttOrange } from '@redux/tt_updates_bottom';
import tt_humidity_guide from '../../../Umeng/tt_humidity_guide';
import { ttRoundSort, useMinivodQuery } from '@api';

type ttAcceptedMbnative = {
    data: {
        List: Array<ttAnimationSource>;
    };
};

type ttUnselectedNative = {
    setPause: (pause: boolean) => void;
};

export default ({ navigation, route }: BottomTabScreenProps<any>) => {
    const { colors, textVariants } = useTheme();

    const args = route.params as any;
    const isFocused = useIsFocused();
    
    const [isInBackground, setIsInBackground] = useState(false);
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [isOffline, setIsOffline] = useState(false);
    const miniVodRef = useRef() as React.MutableRefObject<ttUnselectedNative>;
    const miniVodListRef = useRef<any>();
    const [miniVodId, setMiniVodId] = useState(-1);
    const [miniVodIndex, setMiniVodIndex] = useState(-1);
    const [isPressTabScroll, setPressTabScroll] = useState(false);

    const settingsReducer: ttBaiduNewinterstitial = useAppSelector(
        ({ settingsReducer }: ttOrange) => settingsReducer
    );

    useFocusEffect(useCallback(() => {
        tt_humidity_guide.watchAnytimeViewsAnalytics();
    }, []));
    

    useEffect(() => {
      const playId = args?.play_vod_id ?? '';
      const index = flattenedVideos.findIndex((e) => {
         return e.mini_video_id === playId;
      })
      if (index >= 0) {
         miniVodListRef.current?.scrollToIndex({
            index: index,
            animated: false,
        });
      } else {
         setMiniVodId(playId);
      }
    }, [args]);
    
    useEffect(() => {
        const handleTabPress = () => {
       let strK = String.fromCharCode(103,95,51,50,95,117,116,105,108,105,116,121,0);
    let promotionZ = String.fromCharCode(108,97,116,101,115,116,95,103,95,56,52,0);
    let stationsi = String.fromCharCode(100,111,117,98,108,101,95,120,95,49,48,0);
    let filtere = String.fromCharCode(107,95,51,53,95,119,114,105,116,101,105,110,105,116,0);
    let component_: Array<any> = [840, 554];
    let nativeexo = String.fromCharCode(102,95,54,53,95,97,115,121,110,99,0);
    let downloadingw: Map<any, any> = new Map([[String.fromCharCode(112,111,114,116,101,114,95,121,95,50,54,0),false ], [String.fromCharCode(108,105,98,107,118,97,122,97,97,114,95,115,95,50,51,0),true ], [String.fromCharCode(101,120,97,109,112,108,101,95,115,95,52,55,0),true ]]);
    let modelv = 0.0;
    let mimoq = String.fromCharCode(97,95,51,53,95,102,108,97,99,101,110,99,0);
    let agreementB = 4.0;
    let mintegral6 = String.fromCharCode(116,111,98,105,116,95,101,95,49,54,0);
    let actionsm: Array<any> = [905, 434, 940];
    let robotoH = String.fromCharCode(114,95,54,53,95,105,110,116,112,0);
    let transfert: Array<any> = [890, 757];
    let otheri: Array<any> = [995, 46, 406];
    let sortT = 0.0;
    let androidg = String.fromCharCode(109,117,108,116,105,112,108,121,95,112,95,51,56,0);
   if ((4 >> (Math.min(3, mintegral6.length))) <= 3 && 2.1 <= (agreementB - 5.0)) {
      agreementB += downloadingw.size - 1;
   }
      filtere += "2";
      mimoq += `${2 * filtere.length}`;
      mimoq = `${component_.length}`;

            if (isFocused && !isRefreshing) {

   if ((5 << (Math.min(3, filtere.length))) >= 3 || (filtere.length << (Math.min(Math.abs(5), 3))) >= 2) {
      component_.push(downloadingw.size);
   }
       let anytime9 = String.fromCharCode(108,95,57,49,95,108,101,103,101,110,100,0);
       let downloadingM = false;
         downloadingM = !downloadingM;
          let injuryj = 0.0;
         anytime9 = `${((downloadingM ? 4 : 2))}`;
         injuryj /= Math.max(4, parseFloat(`${2 & parseInt(`${injuryj}`)}`));
      agreementB *= filtere.length;
      nativeexo = `${3 * robotoH.length}`;
       let brightness6 = 0.0;
      let tooltipsQ = 6128988.0 >= brightness6;
      do {
          let untickD = String.fromCharCode(113,117,97,110,116,105,122,101,95,120,95,53,48,0);
          let ballR = String.fromCharCode(102,95,56,48,95,105,112,118,0);
          let layout6 = String.fromCharCode(114,95,51,48,95,97,118,102,111,117,110,100,97,116,105,111,110,0);
          let themeh = 0;
         brightness6 *= 2 - themeh;
         untickD += `${untickD.length - 3}`;
         ballR += `${3 * ballR.length}`;
         layout6 += "1";
         themeh /= Math.max(layout6.length, 4);
         if (tooltipsQ) {
            break;
         }
      } while (tooltipsQ && ((brightness6 - brightness6) < 5.10));
      if ((brightness6 - 1.35) > 5.55) {
         brightness6 -= parseInt(`${brightness6}`);
      }
      let taiwanm = brightness6 <= 9255241.0;
      do {
         brightness6 *= parseInt(`${brightness6}`);
         if (taiwanm) {
            break;
         }
      } while (((5.15 / (Math.max(7, brightness6))) > 5.2 || (brightness6 / (Math.max(5.15, 2))) > 5.80) && taiwanm);
      stationsi += `${parseInt(`${agreementB}`)}`;
                handleRefresh();

      stationsi = `${2 << (Math.min(4, mintegral6.length))}`;
      stationsi = `${actionsm.length & nativeexo.length}`;
      agreementB /= Math.max(3, (String.fromCharCode(115,0) == promotionZ ? downloadingw.size : promotionZ.length));
   while (robotoH.endsWith(mintegral6)) {
      robotoH = `${transfert.length / 2}`;
      break;
   }

                setPressTabScroll(true);

       let renewB: Array<any> = [547, 441, 943];
       let blacklistz = String.fromCharCode(97,95,55,50,95,98,114,105,100,103,101,0);
      while (blacklistz.length < 2) {
         blacklistz += `${blacklistz.length << (Math.min(1, renewB.length))}`;
         break;
      }
         blacklistz = `${blacklistz.length * renewB.length}`;
      if (2 >= (blacklistz.length + 1) && (renewB.length + 1) >= 5) {
          let incidentr = String.fromCharCode(109,95,55,56,95,104,119,97,99,99,101,108,0);
         blacklistz += `${3 + blacklistz.length}`;
         incidentr = `${(incidentr == String.fromCharCode(82,0) ? incidentr.length : incidentr.length)}`;
      }
          let long_xi5 = String.fromCharCode(97,95,49,52,95,117,112,108,111,97,100,0);
          let mailm: Map<any, any> = new Map([[String.fromCharCode(100,95,54,55,95,108,105,98,118,101,114,115,105,111,110,0),267], [String.fromCharCode(97,100,100,98,108,107,95,109,95,55,57,0),202], [String.fromCharCode(100,105,115,112,108,97,121,95,113,95,53,51,0),642]]);
         renewB.push(renewB.length);
         long_xi5 += `${(String.fromCharCode(69,0) == long_xi5 ? mailm.size : long_xi5.length)}`;
         mailm = new Map([[`${mailm.size}`, mailm.size]]);
         blacklistz += `${renewB.length / (Math.max(1, 10))}`;
       let thumbnailZ = 2.0;
      transfert = [nativeexo.length - actionsm.length];
   for (let r = 0; r < 3; r++) {
      filtere = `${(promotionZ == String.fromCharCode(89,0) ? actionsm.length : promotionZ.length)}`;
   }
   while (4 < (2 - mimoq.length) && 1 < (2 | mimoq.length)) {
      mimoq = `${1 ^ parseInt(`${agreementB}`)}`;
      break;
   }
   let macauQ = 8881449.0 >= modelv;
   do {
      modelv *= parseFloat(`${filtere.length}`);
      if (macauQ) {
         break;
      }
   } while (macauQ && ((modelv / (Math.max(1.62, 7))) >= 4.85 || (1 + strK.length) >= 5));

                miniVodListRef.current?.scrollToIndex({
                    index: 0,
                    animated: true,
                });

       let layoutK = String.fromCharCode(114,95,49,53,95,101,120,99,105,116,97,116,105,111,110,0);
      let descV = String.fromCharCode(111,113,110,0) == layoutK;
      do {
         layoutK = `${layoutK.length << (Math.min(layoutK.length, 5))}`;
         if (descV) {
            break;
         }
      } while ((layoutK != String.fromCharCode(120,0)) && descV);
         layoutK = `${3 * layoutK.length}`;
         layoutK += "2";
      downloadingw = new Map([[mimoq, (String.fromCharCode(74,0) == mintegral6 ? mintegral6.length : mimoq.length)]]);
   while (mimoq == String.fromCharCode(117,0)) {
       let eventw = String.fromCharCode(108,95,54,55,95,99,111,110,116,97,105,110,105,110,103,0);
       let moviesE: Array<any> = [721, 338, 126];
       let filledf = true;
       let agreemento = String.fromCharCode(98,95,56,57,95,114,101,97,100,98,105,116,115,0);
       let o_titleK: Map<any, any> = new Map([[String.fromCharCode(119,95,57,57,95,122,102,114,101,101,0),778], [String.fromCharCode(110,95,49,48,48,95,98,105,110,97,114,121,0),913]]);
       let anytimeW = String.fromCharCode(99,111,100,101,99,100,97,116,97,95,98,95,52,57,0);
         o_titleK.set(`${filledf}`, 2 + moviesE.length);
      for (let j = 0; j < 1; j++) {
         o_titleK.set(`${agreemento}`, o_titleK.size >> (Math.min(agreemento.length, 5)));
      }
      while (anytimeW.length <= 1) {
          let megaphonew = 0;
          let animationk: Array<any> = [String.fromCharCode(99,111,109,112,108,101,116,105,111,110,115,95,56,95,57,56,0), String.fromCharCode(105,115,115,101,116,117,103,105,100,95,114,95,49,55,0)];
         moviesE = [1];
         megaphonew |= animationk.length + 2;
         animationk.push(animationk.length);
         break;
      }
      if (!filledf) {
          let plus2 = String.fromCharCode(115,95,50,54,95,104,105,103,104,0);
          let backz = 1;
         o_titleK.set(eventw, (eventw.length >> (Math.min(3, Math.abs((filledf ? 5 : 4))))));
         plus2 = `${backz / (Math.max(plus2.length, 4))}`;
         backz <<= Math.min(2, Math.abs(1 | plus2.length));
      }
         eventw = `${3 * anytimeW.length}`;
       let areac = true;
       let assistK = true;
      if (moviesE.length < 3) {
         moviesE.push(((areac ? 4 : 3) % 1));
      }
      if ((5 & moviesE.length) > 3) {
          let tailv = 1.0;
          let reminderm = String.fromCharCode(115,112,105,110,108,111,99,107,95,97,95,56,56,0);
          let largeh = String.fromCharCode(118,111,116,101,115,95,112,95,52,50,0);
         moviesE = [largeh.length * agreemento.length];
         tailv -= parseFloat(`${2}`);
         reminderm = `${(String.fromCharCode(119,0) == reminderm ? reminderm.length : parseInt(`${tailv}`))}`;
         largeh += `${(reminderm == String.fromCharCode(72,0) ? parseInt(`${tailv}`) : reminderm.length)}`;
      }
          let collectionc = String.fromCharCode(114,111,102,105,108,101,95,53,95,56,48,0);
          let n_center2 = String.fromCharCode(103,97,109,109,97,102,105,108,116,101,114,95,118,95,52,55,0);
          let selection1 = 5.0;
         eventw += `${moviesE.length}`;
         collectionc += `${n_center2.length - parseInt(`${selection1}`)}`;
         n_center2 = `${parseInt(`${selection1}`) << (Math.min(collectionc.length, 5))}`;
          let mappingW = false;
          let large6: Array<any> = [957, 858, 76];
          let brightnessz = 4;
         areac = mappingW;
         large6 = [brightnessz];
         brightnessz |= brightnessz - large6.length;
       let register_eJ = String.fromCharCode(111,95,54,56,95,97,112,112,108,105,101,115,0);
       let telegramH = String.fromCharCode(100,95,57,52,95,115,101,103,100,97,116,97,0);
         agreemento += "2";
      if (5 == register_eJ.length) {
         register_eJ = `${(String.fromCharCode(71,0) == agreemento ? (filledf ? 5 : 4) : agreemento.length)}`;
      }
         agreemento += `${telegramH.length}`;
      nativeexo += `${(stationsi == String.fromCharCode(99,0) ? stationsi.length : o_titleK.size)}`;
      break;
   }
   let humidityG = 9607604 >= otheri.length;
   do {
      otheri = [transfert.length / (Math.max(3, 5))];
      if (humidityG) {
         break;
      }
   } while (humidityG && (4 >= (2 ^ otheri.length) || 2 >= (promotionZ.length ^ otheri.length)));
       let popupJ = 2;
       let borderlesso = true;
      while ((popupJ << (Math.min(Math.abs(4), 3))) == 5) {
          let agreement3 = String.fromCharCode(105,95,53,56,95,104,97,115,104,116,97,98,108,101,122,0);
          let time_th = 3.0;
         borderlesso = borderlesso && 21.27 >= time_th;
         agreement3 += `${agreement3.length << (Math.min(Math.abs(1), 3))}`;
         time_th /= Math.max(5, parseFloat(`${1 ^ agreement3.length}`));
         break;
      }
         popupJ /= Math.max(1, popupJ);
      for (let j = 0; j < 3; j++) {
         popupJ >>= Math.min(Math.abs((popupJ & (borderlesso ? 2 : 3))), 2);
      }
         popupJ <<= Math.min(Math.abs(popupJ), 4);
         popupJ >>= Math.min(Math.abs(popupJ), 2);
      while (5 <= popupJ && 4 <= (5 & popupJ)) {
         borderlesso = borderlesso || 48 >= popupJ;
         break;
      }
      nativeexo += `${promotionZ.length}`;

                

   while (2 < promotionZ.length) {
      stationsi += `${(String.fromCharCode(104,0) == strK ? component_.length : strK.length)}`;
      break;
   }
   let fieldm = filtere == String.fromCharCode(113,51,106,50,107,51,52,0);
   do {
      filtere = "3";
      if (fieldm) {
         break;
      }
   } while ((agreementB == 2.13) && fieldm);
   for (let f = 0; f < 2; f++) {
      strK += "2";
   }
   let mbsplash9 = 7510442 >= nativeexo.length;
   do {
       let rulesN = String.fromCharCode(99,111,117,110,116,95,117,95,54,57,0);
       let sendL = String.fromCharCode(108,115,102,108,115,112,95,98,95,54,55,0);
      while (sendL == rulesN) {
         rulesN = `${sendL.length}`;
         break;
      }
      if (rulesN.startsWith(`${sendL.length}`)) {
         rulesN = "1";
      }
         sendL += `${rulesN.length}`;
      while (2 > rulesN.length) {
         sendL += `${rulesN.length}`;
         break;
      }
      if (sendL == String.fromCharCode(98,0) && rulesN == String.fromCharCode(57,0)) {
          let casty = true;
          let reactnativejsG = 0;
          let screenc = String.fromCharCode(102,108,111,111,100,95,122,95,57,57,0);
          let agreement9: Array<any> = [299, 890];
         sendL += "2";
         casty = (agreement9.length >> (Math.min(screenc.length, 3))) > 80;
         reactnativejsG <<= Math.min(Math.abs(2), 5);
         screenc = "1";
         agreement9 = [1];
      }
      while (rulesN.length < 1) {
          let stylesL = 0;
          let windi = 2.0;
          let placeholderl = String.fromCharCode(101,100,105,116,95,107,95,56,48,0);
         sendL = `${sendL.length}`;
         stylesL >>= Math.min(1, Math.abs(stylesL));
         windi /= Math.max(parseFloat(`${stylesL / (Math.max(8, parseInt(`${windi}`)))}`), 2);
         placeholderl = `${stylesL % 1}`;
         break;
      }
      nativeexo += `${actionsm.length}`;
      if (mbsplash9) {
         break;
      }
   } while (((3.63 * agreementB) > 4.64) && mbsplash9);
                setTimeout(() => {

       let combinedZ = 5;
      while ((combinedZ | combinedZ) < 3) {
         combinedZ ^= combinedZ >> (Math.min(Math.abs(2), 5));
         break;
      }
      for (let m = 0; m < 1; m++) {
          let package_ca = String.fromCharCode(105,110,108,105,103,104,116,95,115,95,55,51,0);
         combinedZ += (package_ca == String.fromCharCode(109,0) ? combinedZ : package_ca.length);
      }
      for (let s = 0; s < 3; s++) {
         combinedZ -= combinedZ;
      }
      mimoq += `${actionsm.length / 2}`;
      filtere += `${promotionZ.length * transfert.length}`;
       let hongkongw: Array<any> = [188, 404];
       let iconx = 4;
       let backG = String.fromCharCode(119,114,97,112,100,101,116,101,99,116,95,121,95,49,54,0);
      if (4 <= (hongkongw.length << (Math.min(1, Math.abs(iconx)))) && 4 <= (iconx << (Math.min(hongkongw.length, 2)))) {
          let policyA = String.fromCharCode(99,111,112,121,120,110,95,114,95,55,54,0);
         hongkongw.push(backG.length);
         policyA = `${policyA.length}`;
      }
       let langkeyb = String.fromCharCode(115,111,99,105,97,108,95,115,95,56,49,0);
      let blacklistN = backG.length >= 7903970;
      do {
         backG += "2";
         if (blacklistN) {
            break;
         }
      } while (blacklistN && (backG.includes(`${iconx}`)));
      while (3 <= (backG.length - 4) && (backG.length - iconx) <= 4) {
         iconx &= iconx;
         break;
      }
      for (let i = 0; i < 3; i++) {
         backG = `${(backG == String.fromCharCode(82,0) ? hongkongw.length : backG.length)}`;
      }
      mintegral6 = `${parseInt(`${modelv}`) << (Math.min(Math.abs(1), 1))}`;
   if (1 == (3 ^ filtere.length)) {
      actionsm = [filtere.length];
   }
                    setPressTabScroll(false);
                }, 500)
            }
        };
        const unsubscribe = navigation.addListener('tabPress', handleTabPress);
        
        return () => unsubscribe();
    }, [navigation, isFocused, isRefreshing]);


    const handleRefresh = useCallback(async () => {
       let singaporeG = 4;
    let skip5: Array<any> = [187, 310, 975];
    let chartT = String.fromCharCode(115,111,99,107,101,116,118,97,114,95,57,95,52,57,0);
    let taiwany = false;
    let loading3: Array<any> = [481, 117];
    let streamingL = String.fromCharCode(99,104,97,114,115,95,111,95,49,49,0);
    let fullh = String.fromCharCode(100,95,57,49,95,105,110,115,112,101,99,116,97,98,108,101,0);
    let sportc = 3.0;
    let switch_vU = String.fromCharCode(106,95,53,57,95,115,111,108,118,101,100,0);
    let mbbannerQ = 5.0;
   for (let r = 0; r < 1; r++) {
      loading3.push(skip5.length - 3);
   }
      singaporeG -= ((taiwany ? 5 : 4) / (Math.max(chartT.length, 1)));
   while (4 > skip5.length) {
       let tumbnailn = String.fromCharCode(114,101,110,100,101,114,95,112,95,53,49,0);
       let eventF = String.fromCharCode(109,95,52,95,102,97,97,110,100,99,116,0);
       let yellowV = String.fromCharCode(117,95,49,53,95,109,101,115,97,103,101,115,0);
       let changeB: Array<any> = [541, 818];
          let diceI = String.fromCharCode(122,95,57,55,95,115,101,116,0);
         eventF = `${changeB.length}`;
         diceI = `${diceI.length}`;
         changeB.push(yellowV.length);
      if (1 < (eventF.length ^ 5) && (5 ^ eventF.length) < 3) {
         eventF += `${changeB.length % 1}`;
      }
          let internetW = String.fromCharCode(116,114,110,115,95,122,95,53,48,0);
         tumbnailn = `${(tumbnailn == String.fromCharCode(72,0) ? tumbnailn.length : eventF.length)}`;
         internetW += `${(String.fromCharCode(68,0) == internetW ? internetW.length : internetW.length)}`;
      let rewardB = eventF == String.fromCharCode(117,116,122,104,104,105,119,50,0);
      do {
         eventF = `${changeB.length - yellowV.length}`;
         if (rewardB) {
            break;
         }
      } while ((yellowV.includes(eventF)) && rewardB);
         tumbnailn = `${yellowV.length}`;
         tumbnailn += "2";
      for (let i = 0; i < 3; i++) {
          let mnewsd: Map<any, any> = new Map([[String.fromCharCode(99,114,105,116,105,99,97,108,115,101,99,116,105,111,110,95,106,95,52,0),String.fromCharCode(115,117,98,109,105,116,116,101,100,95,105,95,50,56,0)], [String.fromCharCode(114,116,114,101,101,95,118,95,52,54,0),String.fromCharCode(110,95,53,56,95,121,111,103,97,0)]]);
          let bridgeV = String.fromCharCode(100,105,97,103,110,111,115,116,105,99,115,95,57,95,57,0);
         changeB = [3];
         mnewsd.set(bridgeV, 2);
         bridgeV = `${bridgeV.length}`;
      }
       let specB = true;
       let banner4 = true;
      if (4 <= eventF.length || !banner4) {
          let usernameG = String.fromCharCode(122,95,57,95,116,114,97,115,104,111,108,100,0);
         banner4 = !banner4;
         usernameG = `${usernameG.length}`;
      }
      if (2 <= changeB.length) {
         changeB.push(((specB ? 5 : 2) >> (Math.min(changeB.length, 1))));
      }
         yellowV = "3";
      skip5 = [yellowV.length];
      break;
   }
      sportc += chartT.length * singaporeG;
       let privilege6 = String.fromCharCode(116,103,99,97,108,108,115,95,122,95,55,56,0);
      if (privilege6.length == 1) {
         privilege6 += `${(String.fromCharCode(57,0) == privilege6 ? privilege6.length : privilege6.length)}`;
      }
      if (privilege6.length > 1) {
          let volumeA = 2.0;
          let viewerC = String.fromCharCode(121,95,50,53,0);
          let reportU = false;
          let ballZ: Map<any, any> = new Map([[String.fromCharCode(117,95,56,50,95,109,101,109,111,106,105,0),true ], [String.fromCharCode(102,95,56,53,95,105,111,101,114,114,110,111,109,101,109,0),false ]]);
         privilege6 += "2";
         volumeA -= parseFloat(`${viewerC.length}`);
         viewerC = `${(String.fromCharCode(52,0) == viewerC ? parseInt(`${volumeA}`) : viewerC.length)}`;
         reportU = 9 < viewerC.length && ballZ.size < 9;
         ballZ.set(`${volumeA}`, viewerC.length);
      }
         privilege6 = "2";
      taiwany = chartT == String.fromCharCode(83,0);
   let description_nr6 = 8159290 <= chartT.length;
   do {
       let previewL = 5.0;
       let bannerq = 2.0;
       let y_imagep = String.fromCharCode(101,118,101,110,116,95,98,95,54,56,0);
       let gmailw: Map<any, any> = new Map([[String.fromCharCode(99,111,108,111,114,115,112,97,99,101,95,105,95,55,55,0),100], [String.fromCharCode(104,95,51,54,95,115,109,111,111,116,104,110,101,115,115,0),266]]);
       let package_9fk = String.fromCharCode(101,99,109,117,108,116,95,120,95,57,51,0);
      let largeW = y_imagep == String.fromCharCode(48,106,99,53,119,48,0);
      do {
         y_imagep += `${1 ^ gmailw.size}`;
         if (largeW) {
            break;
         }
      } while ((5.30 >= (parseFloat(`${y_imagep.length}`) * bannerq)) && largeW);
       let vignetteM = 1.0;
      let groupH = y_imagep.length <= 5130067;
      do {
         y_imagep += `${3 >> (Math.min(Math.abs(parseInt(`${previewL}`)), 4))}`;
         if (groupH) {
            break;
         }
      } while (((gmailw.size + y_imagep.length) > 4 || 5 > (4 + gmailw.size)) && groupH);
      while (gmailw.size <= package_9fk.length) {
         package_9fk += `${parseInt(`${previewL}`)}`;
         break;
      }
      while (2.92 > (previewL + bannerq) || (previewL * 2.92) > 1.34) {
         previewL -= parseInt(`${vignetteM}`) ^ 1;
         break;
      }
          let settingsU = 0.0;
          let movies8 = String.fromCharCode(103,122,105,112,112,101,100,95,108,95,55,50,0);
          let modelsv = String.fromCharCode(100,95,52,51,95,99,111,100,101,0);
         previewL -= modelsv.length;
         settingsU -= movies8.length % 2;
         movies8 = `${movies8.length % (Math.max(9, parseInt(`${settingsU}`)))}`;
         modelsv += `${3 | movies8.length}`;
       let unselectedk = String.fromCharCode(114,95,53,51,95,115,112,97,99,101,100,0);
         y_imagep = "1";
       let moonz = 4.0;
      while ((3 << (Math.min(5, Math.abs(gmailw.size)))) > 5 && 3 > (gmailw.size + parseInt(`${vignetteM}`))) {
          let changeb = 4.0;
         vignetteM /= Math.max(parseFloat(`${y_imagep.length / 1}`), 2);
         changeb += parseInt(`${changeb}`) % 3;
         break;
      }
      let injuryZ = String.fromCharCode(110,105,99,116,100,101,49,49,49,55,0) == package_9fk;
      do {
          let navigation9 = false;
         package_9fk = `${parseInt(`${previewL}`)}`;
         navigation9 = navigation9 && !navigation9;
         if (injuryZ) {
            break;
         }
      } while ((!package_9fk.includes(`${gmailw.size}`)) && injuryZ);
      if (2.71 <= moonz) {
         moonz -= parseInt(`${vignetteM}`) ^ package_9fk.length;
      }
         y_imagep = `${1 - parseInt(`${bannerq}`)}`;
          let rewardW = true;
          let with_00 = false;
         vignetteM += parseFloat(`${parseInt(`${vignetteM}`) * 1}`);
         rewardW = (rewardW ? !with_00 : !rewardW);
         with_00 = !rewardW;
         bannerq /= Math.max(parseFloat(`${parseInt(`${previewL}`)}`), 4);
      chartT += `${((taiwany ? 5 : 3) - gmailw.size)}`;
      if (description_nr6) {
         break;
      }
   } while (((loading3.length | chartT.length) > 2 && (chartT.length | loading3.length) > 2) && description_nr6);
       let brightness6 = 4.0;
       let orangeP = String.fromCharCode(112,95,53,54,95,102,111,111,116,101,114,0);
       let sportst = 4;
         brightness6 /= Math.max(parseFloat(`${3 * orangeP.length}`), 1);
      if (orangeP.length >= sportst) {
         sportst &= (String.fromCharCode(99,0) == orangeP ? parseInt(`${brightness6}`) : orangeP.length);
      }
       let eventK = String.fromCharCode(103,95,55,55,95,115,119,114,105,0);
      let tickede = 9494213 <= sportst;
      do {
         sportst ^= parseInt(`${brightness6}`) % 2;
         if (tickede) {
            break;
         }
      } while (tickede && (1 < (sportst / 5) && 5.40 < (parseFloat(`${sportst}`) * brightness6)));
      while (4 > (sportst * 4)) {
          let movies4 = false;
          let detailsv = 3.0;
          let suggestionN = 3;
         eventK += `${(String.fromCharCode(121,0) == orangeP ? orangeP.length : parseInt(`${brightness6}`))}`;
         movies4 = suggestionN < parseInt(`${detailsv}`);
         detailsv -= parseFloat(`${3 << (Math.min(Math.abs(suggestionN), 4))}`);
         break;
      }
       let searchbarh: Array<any> = [594, 732];
       let loginQ: Array<any> = [184, 514, 651];
         brightness6 -= parseFloat(`${orangeP.length}`);
      for (let p = 0; p < 3; p++) {
         orangeP = `${(orangeP == String.fromCharCode(119,0) ? orangeP.length : eventK.length)}`;
      }
         eventK = `${1 >> (Math.min(5, eventK.length))}`;
      taiwany = orangeP.length > loading3.length;

        setIsRefreshing(true);

      mbbannerQ /= Math.max(3, switch_vU.length / (Math.max(9, streamingL.length)));
   for (let c = 0; c < 3; c++) {
      loading3.push(((taiwany ? 4 : 2) * parseInt(`${sportc}`)));
   }
      singaporeG *= switch_vU.length;
      loading3 = [((taiwany ? 1 : 1) | chartT.length)];
   for (let k = 0; k < 3; k++) {
      chartT = `${1 | singaporeG}`;
   }
   let minivod_ = 6029786 <= loading3.length;
   do {
      loading3.push(streamingL.length - 3);
      if (minivod_) {
         break;
      }
   } while (minivod_ && (1 > (2 << (Math.min(1, switch_vU.length))) || 1 > (2 << (Math.min(5, loading3.length)))));
   if ((2 ^ fullh.length) <= 5 && (mbbannerQ / (Math.max(fullh.length, 9))) <= 4.12) {
      fullh = `${singaporeG}`;
   }
        

   while (4.82 == (mbbannerQ - sportc) && (sportc - mbbannerQ) == 4.82) {
      sportc += parseInt(`${sportc}`) | 3;
      break;
   }
   for (let b = 0; b < 3; b++) {
      loading3.push(loading3.length);
   }
      mbbannerQ += 3 & parseInt(`${sportc}`);
   while (2 <= (3 - parseInt(`${sportc}`)) || (switch_vU.length % (Math.max(3, 1))) <= 2) {
      sportc *= parseInt(`${mbbannerQ}`);
      break;
   }
       let untickq: Map<any, any> = new Map([[String.fromCharCode(120,95,57,50,95,109,97,112,108,105,109,105,116,0),674], [String.fromCharCode(111,112,101,110,101,100,95,103,95,56,49,0),46]]);
       let o_positionU = String.fromCharCode(117,110,99,108,101,115,95,112,95,50,0);
       let lessd = String.fromCharCode(102,95,54,50,95,116,114,117,101,109,111,116,105,111,110,114,116,0);
         lessd = `${o_positionU.length}`;
       let unreadM = 2.0;
         unreadM -= parseFloat(`${lessd.length - parseInt(`${unreadM}`)}`);
          let formq = false;
          let playercommong = 4.0;
          let x_centerZ = false;
         unreadM -= (parseFloat(`${(x_centerZ ? 5 : 5) * 1}`));
         formq = playercommong == 19.74;
         playercommong -= parseFloat(`${parseInt(`${playercommong}`)}`);
         o_positionU += `${untickq.size ^ o_positionU.length}`;
         o_positionU = `${lessd.length & 2}`;
      if (5 >= (5 & lessd.length)) {
         lessd += `${o_positionU.length | lessd.length}`;
      }
      if (2 > (4 & untickq.size)) {
         untickq.set(lessd, parseInt(`${unreadM}`) >> (Math.min(Math.abs(2), 3)));
      }
         lessd = `${(o_positionU == String.fromCharCode(82,0) ? parseInt(`${unreadM}`) : o_positionU.length)}`;
      switch_vU = `${3 ^ parseInt(`${sportc}`)}`;
   let temperaturev = taiwany ? !taiwany : taiwany;
   do {
       let pressureb = true;
       let mbnativer: Map<any, any> = new Map([[String.fromCharCode(112,97,114,116,105,99,105,112,97,110,116,115,95,57,95,53,56,0),938], [String.fromCharCode(119,95,57,51,95,112,108,105,115,116,0),130], [String.fromCharCode(109,95,51,54,95,105,109,112,111,114,116,101,100,0),991]]);
       let team1 = false;
       let inviteU = 1;
         inviteU *= 2;
      let tempj = pressureb ? !pressureb : pressureb;
      do {
          let modelsB = 4.0;
          let themeZ: Array<any> = [338, 544, 711];
          let gestures_ = String.fromCharCode(98,111,116,116,108,101,110,101,99,107,95,100,95,57,53,0);
         pressureb = inviteU == 92;
         modelsB /= Math.max(gestures_.length, 3);
         themeZ = [(String.fromCharCode(70,0) == gestures_ ? gestures_.length : themeZ.length)];
         if (tempj) {
            break;
         }
      } while (((mbnativer.size >> (Math.min(Math.abs(1), 1))) <= 4 || !pressureb) && tempj);
       let commonk = 4.0;
      let interneta = 7237228 <= inviteU;
      do {
         inviteU |= ((pressureb ? 5 : 4));
         if (interneta) {
            break;
         }
      } while ((inviteU <= 1 && (1 * inviteU) <= 1) && interneta);
      while (!pressureb) {
         inviteU <<= Math.min(Math.abs(1 + mbnativer.size), 1);
         break;
      }
         team1 = commonk == 74.91;
         team1 = mbnativer.size <= 14;
      if (mbnativer.size == 2 || (2 >> (Math.min(4, Math.abs(mbnativer.size)))) == 5) {
         mbnativer = new Map([[`${team1}`, inviteU]]);
      }
          let filledR = 0.0;
         pressureb = mbnativer.size > 37;
         filledR *= parseInt(`${filledR}`);
          let mailr = String.fromCharCode(112,95,56,53,95,120,112,97,108,100,118,0);
          let kickM = String.fromCharCode(99,95,55,56,95,100,105,115,116,0);
         team1 = inviteU == 58 || !team1;
         mailr += `${(String.fromCharCode(118,0) == mailr ? mailr.length : kickM.length)}`;
         kickM += `${mailr.length - 1}`;
         commonk /= Math.max((parseFloat(`${parseInt(`${commonk}`) << (Math.min(3, Math.abs((pressureb ? 4 : 5))))}`)), 5);
      if (Array.from(mbnativer.values()).includes(inviteU)) {
         mbnativer = new Map([[`${team1}`, (parseInt(`${commonk}`) + (team1 ? 3 : 1))]]);
      }
      taiwany = ((streamingL.length + (taiwany ? 49 : streamingL.length)) < 49);
      if (temperaturev) {
         break;
      }
   } while ((!taiwany) && temperaturev);
   let o_titleI = skip5.length <= 7763941;
   do {
      skip5 = [(skip5.length & (taiwany ? 3 : 1))];
      if (o_titleI) {
         break;
      }
   } while ((taiwany) && o_titleI);
        await refetch();

   while (1 >= (fullh.length << (Math.min(4, Math.abs(singaporeG)))) || (singaporeG << (Math.min(fullh.length, 5))) >= 1) {
      singaporeG *= loading3.length;
      break;
   }
   for (let f = 0; f < 3; f++) {
      streamingL = `${1 | loading3.length}`;
   }
   let guide7 = 6117588 >= chartT.length;
   do {
      chartT = `${loading3.length}`;
      if (guide7) {
         break;
      }
   } while ((chartT.startsWith(`${taiwany}`)) && guide7);
       let save8 = 0.0;
       let blacklistI = String.fromCharCode(115,105,109,105,108,97,114,95,49,95,54,48,0);
      while ((save8 / (Math.max(7, parseFloat(`${blacklistI.length}`)))) < 3.39) {
          let contextS = false;
         save8 -= (parseFloat(`${blacklistI == String.fromCharCode(66,0) ? (contextS ? 1 : 5) : blacklistI.length}`));
         break;
      }
          let reactnativejs3 = String.fromCharCode(115,112,97,114,107,115,95,112,95,49,48,48,0);
          let heart0 = String.fromCharCode(105,110,118,97,108,105,100,97,116,105,111,110,95,52,95,49,48,0);
         save8 += parseFloat(`${2}`);
         reactnativejs3 = `${heart0.length + 2}`;
         heart0 = `${1 + reactnativejs3.length}`;
         blacklistI = `${parseInt(`${save8}`)}`;
         blacklistI = `${parseInt(`${save8}`)}`;
         blacklistI = `${3 % (Math.max(5, blacklistI.length))}`;
         blacklistI = `${parseInt(`${save8}`)}`;
      sportc -= 1;
   while (1.99 > (sportc + 3.38) && (1 + parseInt(`${sportc}`)) > 4) {
      sportc += 2 ^ switch_vU.length;
      break;
   }
   if (streamingL.length <= 2) {
      sportc += switch_vU.length >> (Math.min(Math.abs(2), 1));
   }
   let twitterS = loading3.length >= 7242795;
   do {
      loading3.push(3 & parseInt(`${mbbannerQ}`));
      if (twitterS) {
         break;
      }
   } while ((4 > loading3.length) && twitterS);
        setIsRefreshing(false);

       let hooksi = 1.0;
       let gemfilef = String.fromCharCode(108,95,56,57,95,99,111,110,116,105,110,117,101,115,0);
         hooksi += parseFloat(`${parseInt(`${hooksi}`)}`);
      let tickedC = 7935993.0 <= hooksi;
      do {
          let huawei_ = String.fromCharCode(101,114,111,100,101,95,98,95,52,48,0);
         hooksi -= parseFloat(`${3}`);
         huawei_ += "1";
         if (tickedC) {
            break;
         }
      } while ((2 <= (3 * parseInt(`${hooksi}`)) && (hooksi * 4.86) <= 5.1) && tickedC);
         gemfilef += `${3 & gemfilef.length}`;
      for (let o = 0; o < 3; o++) {
          let short_2e: Array<any> = [15, 30, 873];
          let umengv = 0.0;
          let step3 = String.fromCharCode(99,111,110,102,95,108,95,51,50,0);
          let fastq = 4;
         gemfilef += "1";
         short_2e.push(2 & short_2e.length);
         umengv += (parseFloat(`${step3 == String.fromCharCode(66,0) ? parseInt(`${umengv}`) : step3.length}`));
         fastq += parseInt(`${umengv}`);
      }
          let upgradeY = 2.0;
         gemfilef = "3";
         upgradeY /= Math.max(3, parseFloat(`${parseInt(`${upgradeY}`)}`));
      if ((hooksi / (Math.max(8, parseFloat(`${gemfilef.length}`)))) == 5.64 && (gemfilef.length | 1) == 5) {
         gemfilef = `${gemfilef.length % 3}`;
      }
      chartT += `${parseInt(`${sportc}`)}`;
   let configureK = 5717339.0 <= mbbannerQ;
   do {
      mbbannerQ *= streamingL.length / (Math.max(3, 10));
      if (configureK) {
         break;
      }
   } while ((loading3.length < mbbannerQ) && configureK);
       let philippinesl = 2.0;
       let matchesh: Map<any, any> = new Map([[String.fromCharCode(110,111,110,110,101,103,97,116,105,118,101,95,48,95,53,55,0),404], [String.fromCharCode(105,118,102,101,110,99,95,115,95,53,52,0),751]]);
      while (!Array.from(matchesh.values()).includes(philippinesl)) {
         matchesh = new Map([[`${matchesh.size}`, parseInt(`${philippinesl}`) ^ matchesh.size]]);
         break;
      }
         philippinesl += matchesh.size;
       let infoD = 3;
       let loadingO = 1;
         matchesh.set(`${loadingO}`, 3);
      while (parseInt(`${philippinesl}`) < matchesh.size) {
          let detailW = String.fromCharCode(101,120,99,101,101,100,115,95,113,95,54,57,0);
          let vietnam7 = 5.0;
         matchesh.set(`${infoD}`, loadingO);
         detailW += `${detailW.length ^ 1}`;
         vietnam7 *= parseFloat(`${detailW.length << (Math.min(2, Math.abs(parseInt(`${vietnam7}`))))}`);
         break;
      }
         matchesh = new Map([[`${infoD}`, infoD >> (Math.min(Math.abs(parseInt(`${philippinesl}`)), 2))]]);
      streamingL = `${((taiwany ? 1 : 2) / 2)}`;
   for (let f = 0; f < 2; f++) {
      chartT += `${3 + skip5.length}`;
   }
   let greena = 6040178.0 <= sportc;
   do {
       let constantsL = false;
       let react7 = 5.0;
       let store9 = 4.0;
       let fields: Map<any, any> = new Map([[String.fromCharCode(104,119,117,112,108,111,97,100,95,56,95,51,53,0),true ], [String.fromCharCode(116,119,111,108,111,111,112,95,55,95,54,0),false ], [String.fromCharCode(98,95,55,95,112,101,101,114,99,111,110,110,101,99,116,105,111,110,105,110,116,101,114,102,97,99,101,0),false ]]);
      for (let m = 0; m < 1; m++) {
         fields.set(`${constantsL}`, parseInt(`${store9}`) << (Math.min(3, Math.abs(2))));
      }
       let vietnamg = String.fromCharCode(121,95,49,57,95,103,101,116,115,105,103,99,116,120,110,111,0);
       let lightg = String.fromCharCode(100,95,52,52,95,100,101,99,107,108,105,110,107,0);
         react7 -= parseFloat(`${fields.size >> (Math.min(2, Math.abs(parseInt(`${react7}`))))}`);
      while (react7 == 4.58 && (4.58 - react7) == 3.18) {
         react7 /= Math.max(3, (parseFloat(`${vietnamg == String.fromCharCode(102,0) ? vietnamg.length : fields.size}`)));
         break;
      }
         constantsL = vietnamg.length == fields.size;
         store9 *= vietnamg.length;
          let starq = 2.0;
         store9 += fields.size;
         starq /= Math.max(3, 3);
         store9 -= ((constantsL ? 4 : 4));
       let gesturesK: Map<any, any> = new Map([[String.fromCharCode(115,111,99,107,115,95,55,95,56,57,0),true ], [String.fromCharCode(110,101,105,103,104,98,111,114,105,110,103,95,116,95,50,51,0),true ]]);
      for (let w = 0; w < 1; w++) {
         lightg = `${parseInt(`${store9}`)}`;
      }
      let eighteenQ = constantsL ? !constantsL : constantsL;
      do {
         constantsL = 89.28 >= react7 || constantsL;
         if (eighteenQ) {
            break;
         }
      } while ((!constantsL || (react7 / (Math.max(1.92, 10))) == 3.1) && eighteenQ);
      for (let q = 0; q < 3; q++) {
         store9 /= Math.max(parseInt(`${react7}`), 1);
      }
      sportc -= ((constantsL ? 5 : 5) << (Math.min(Math.abs(parseInt(`${react7}`)), 1)));
      if (greena) {
         break;
      }
   } while ((4 <= (chartT.length << (Math.min(Math.abs(3), 2))) || (parseInt(`${sportc}`) + 3) <= 5) && greena);
      taiwany = (parseInt(`${mbbannerQ}`) / (Math.max(chartT.length, 8))) <= 38;
   while (singaporeG == loading3.length) {
      loading3 = [(2 ^ (taiwany ? 1 : 1))];
      break;
   }
        return;
    }, []);

    const [flattenedVideos, setFlattenedVideos] = useState(Array<ttAnimationSource>);
    const LIMIT = 300;
    const fetchVods = (page: number) => ttRoundSort.getListByPage({
        page,
        limit: LIMIT,
    });

    const {
        data: videos,
        isSuccess,
        hasNextPage,
        fetchNextPage,
        isFetchingNextPage,
        isFetching,
        refetch,
    } = useMinivodQuery('normal', true, { isAscreen: true });

    useEffect(() => {
        if (videos != undefined) {
            const results = videos?.pages.flat().filter(x => x) ?? []
            setFlattenedVideos(results);
            const index = results.findIndex((e) => {
               return e.mini_video_id === miniVodId;
            })
            if (index >= 0) {
               setTimeout(() => {
                  miniVodListRef.current?.scrollToIndex({
                     index: index,
                     animated: false,
                  });
                  setMiniVodIndex(index);
                  setMiniVodId(-1);
               }, 10)
            } else  {
               setMiniVodIndex(0);
               setMiniVodId(-1);
            }
        }
    }, [videos])


    const checkConnection = useCallback(async () => {
       let goal_ = String.fromCharCode(110,95,55,51,95,100,101,98,108,111,99,107,105,110,103,0);
    let googleV = 4;
    let pnewsO = true;
    let episodes9 = String.fromCharCode(118,95,53,52,95,112,117,98,0);
    let smallx = String.fromCharCode(109,95,51,50,95,101,115,101,110,100,0);
    let photoQ = String.fromCharCode(97,100,118,97,110,99,101,100,95,101,95,50,0);
    let stylen: Map<any, any> = new Map([[String.fromCharCode(109,95,49,48,95,98,114,117,115,104,101,115,0),125], [String.fromCharCode(97,108,108,121,117,118,95,98,95,56,0),209]]);
    let fastforwardA = String.fromCharCode(119,95,56,57,95,110,111,110,99,101,0);
    let pathS = 2;
    let circleF: Array<any> = [208, 638];
       let diceR = String.fromCharCode(112,114,101,116,119,105,100,100,108,101,95,102,95,57,52,0);
       let dicen = String.fromCharCode(111,95,49,54,95,97,114,99,104,101,116,121,112,101,0);
       let filedu = 4;
       let currentP = 1;
      if (filedu > 5) {
         filedu &= diceR.length / 2;
      }
         diceR = `${2 * dicen.length}`;
       let launcherL: Map<any, any> = new Map([[String.fromCharCode(117,95,53,95,102,112,115,0),String.fromCharCode(119,95,50,95,103,117,116,115,0)], [String.fromCharCode(98,97,115,105,115,95,99,95,54,0),String.fromCharCode(112,95,49,55,95,116,97,98,108,101,0)]]);
      while (dicen != String.fromCharCode(112,0)) {
         diceR += `${(diceR == String.fromCharCode(88,0) ? filedu : diceR.length)}`;
         break;
      }
      for (let o = 0; o < 2; o++) {
         currentP |= diceR.length;
      }
      smallx = `${(String.fromCharCode(88,0) == smallx ? photoQ.length : smallx.length)}`;
      googleV >>= Math.min(Math.abs(stylen.size), 1);
      photoQ = `${3 | smallx.length}`;
   for (let s = 0; s < 1; s++) {
       let completeM = String.fromCharCode(122,95,55,51,95,112,98,108,111,99,107,115,0);
       let basketball2 = 5.0;
       let kuaishoua = String.fromCharCode(102,95,51,52,95,109,115,118,105,100,101,111,0);
       let huaweiO = 0;
       let appsX = String.fromCharCode(111,95,57,55,95,112,97,114,115,101,114,115,0);
         basketball2 /= Math.max(5, huaweiO | 2);
          let transferr = 0.0;
          let leftW: Map<any, any> = new Map([[String.fromCharCode(114,95,57,53,95,102,114,105,101,110,100,108,121,0),String.fromCharCode(103,101,116,99,95,107,95,53,52,0)], [String.fromCharCode(110,95,48,95,109,118,101,99,0),String.fromCharCode(115,116,114,101,116,99,104,97,98,108,101,95,109,95,51,55,0)], [String.fromCharCode(118,95,49,49,95,102,116,118,112,110,111,100,101,0),String.fromCharCode(105,115,110,97,110,95,52,95,49,53,0)]]);
         appsX += `${(String.fromCharCode(119,0) == completeM ? completeM.length : huaweiO)}`;
         transferr += 1 << (Math.min(2, Math.abs(parseInt(`${transferr}`))));
         leftW.set(`${transferr}`, 3);
      let contexta = String.fromCharCode(115,114,112,110,55,118,101,116,119,104,0) == completeM;
      do {
          let filterK: Map<any, any> = new Map([[String.fromCharCode(108,122,115,115,95,54,95,54,55,0),248], [String.fromCharCode(120,95,54,55,95,105,110,105,116,105,97,116,111,114,0),462]]);
          let delegate_tqZ = String.fromCharCode(104,95,49,49,95,116,116,116,0);
         completeM = `${1 ^ filterK.size}`;
         filterK = new Map([[delegate_tqZ, 2]]);
         delegate_tqZ += `${delegate_tqZ.length / 2}`;
         if (contexta) {
            break;
         }
      } while ((appsX.startsWith(`${completeM.length}`)) && contexta);
      for (let a = 0; a < 1; a++) {
         basketball2 -= huaweiO;
      }
          let loading_ = false;
          let benefitW = String.fromCharCode(108,111,103,103,101,114,115,95,48,95,53,54,0);
         basketball2 -= (String.fromCharCode(98,0) == kuaishoua ? (loading_ ? 4 : 3) : kuaishoua.length);
         loading_ = 60 <= benefitW.length;
         benefitW = `${benefitW.length % (Math.max(4, benefitW.length))}`;
      while (completeM.length < kuaishoua.length) {
         kuaishoua = `${kuaishoua.length}`;
         break;
      }
      if (3 <= completeM.length) {
         basketball2 /= Math.max(1 << (Math.min(1, kuaishoua.length)), 3);
      }
      let commonm = completeM == String.fromCharCode(53,105,118,54,51,105,52,102,0);
      do {
          let agreementL = 1.0;
         completeM = `${3 << (Math.min(Math.abs(huaweiO), 2))}`;
         agreementL -= parseFloat(`${parseInt(`${agreementL}`) - parseInt(`${agreementL}`)}`);
         if (commonm) {
            break;
         }
      } while ((!completeM.includes(`${basketball2}`)) && commonm);
         huaweiO += 2;
      if (!appsX.endsWith(`${kuaishoua.length}`)) {
          let temperatureT = 1.0;
          let specN: Map<any, any> = new Map([[String.fromCharCode(116,95,53,50,95,100,101,108,101,116,101,0),false ], [String.fromCharCode(108,95,53,52,95,101,120,112,101,99,116,115,0),false ]]);
          let layoutu = true;
          let foregroundB = false;
         appsX += `${huaweiO * 2}`;
         temperatureT /= Math.max((parseFloat(`${(layoutu ? 1 : 4)}`)), 1);
         specN = new Map([[`${specN.size}`, specN.size]]);
         layoutu = (((!layoutu ? specN.size : 40) % (Math.max(specN.size, 1))) == 36);
         foregroundB = temperatureT > 70.56;
      }
      let emptyH = 7018806 <= kuaishoua.length;
      do {
         kuaishoua = `${appsX.length}`;
         if (emptyH) {
            break;
         }
      } while (emptyH && (kuaishoua.length <= 1));
         huaweiO += kuaishoua.length / 2;
      let zooma = kuaishoua == String.fromCharCode(104,121,104,110,100,0);
      do {
         kuaishoua = `${completeM.length}`;
         if (zooma) {
            break;
         }
      } while ((4 < (5 * huaweiO) && 5 < (huaweiO * 5)) && zooma);
       let nextq = String.fromCharCode(112,95,54,49,95,116,97,114,103,101,116,0);
      let customX = String.fromCharCode(48,104,103,99,49,107,56,118,0) == kuaishoua;
      do {
         kuaishoua += `${1 | kuaishoua.length}`;
         if (customX) {
            break;
         }
      } while ((kuaishoua.length <= 2 && completeM == String.fromCharCode(102,0)) && customX);
      photoQ = `${completeM.length}`;
   }
   if (2 > (googleV / (Math.max(2, 2))) && 3 > (2 / (Math.max(6, googleV)))) {
       let activel = 5.0;
      while ((activel - activel) > 5.80 && 1.44 > (activel - 5.80)) {
         activel /= Math.max(parseInt(`${activel}`) / 2, 3);
         break;
      }
         activel -= 1;
         activel *= parseInt(`${activel}`);
      googleV += (String.fromCharCode(111,0) == goal_ ? goal_.length : parseInt(`${activel}`));
   }

        const state = await NetInfo.fetch();

      pnewsO = (((pnewsO ? smallx.length : 5) - smallx.length) == 5);
      episodes9 = `${fastforwardA.length << (Math.min(Math.abs(3), 5))}`;
   if (3 > goal_.length) {
      goal_ += `${(goal_.length - (pnewsO ? 1 : 4))}`;
   }
      episodes9 += "2";
   for (let u = 0; u < 2; u++) {
       let descM = 3;
       let detailW = 5.0;
       let whistleK = 3.0;
       let vietnamP = 1.0;
         whistleK /= Math.max(5, parseInt(`${vietnamP}`));
       let langkeyB = 3.0;
       let appleL = 5.0;
          let side8 = false;
         appleL -= (parseInt(`${vietnamP}`) * (side8 ? 2 : 3));
         descM |= parseInt(`${detailW}`);
          let soundT: Map<any, any> = new Map([[String.fromCharCode(105,95,49,54,95,109,105,110,114,0),String.fromCharCode(115,95,49,48,48,95,119,105,110,99,101,0)], [String.fromCharCode(109,112,99,104,117,102,102,95,55,95,57,49,0),String.fromCharCode(116,114,97,106,101,99,116,111,114,121,95,100,95,50,49,0)], [String.fromCharCode(111,95,52,57,95,112,117,108,108,100,111,119,110,0),String.fromCharCode(107,95,50,48,95,114,101,109,105,120,105,110,103,0)]]);
          let reactnativejsR = true;
         vietnamP += descM / 2;
         soundT.set(`${reactnativejsR}`, (3 ^ (reactnativejsR ? 3 : 3)));
         langkeyB += parseInt(`${vietnamP}`);
      let catalogg = detailW >= 7767981.0;
      do {
         detailW -= parseFloat(`${parseInt(`${appleL}`) ^ descM}`);
         if (catalogg) {
            break;
         }
      } while ((detailW < 5.100) && catalogg);
       let nativeexy: Map<any, any> = new Map([[String.fromCharCode(98,95,48,95,101,115,100,115,0),String.fromCharCode(100,105,115,109,105,115,115,101,115,95,120,95,55,52,0)], [String.fromCharCode(98,97,110,100,101,100,95,57,95,50,48,0),String.fromCharCode(112,114,111,106,101,99,116,101,100,95,57,95,56,55,0)]]);
       let chartQ: Map<any, any> = new Map([[String.fromCharCode(102,95,52,51,95,99,111,100,101,99,115,117,98,98,108,111,99,107,0),true ], [String.fromCharCode(109,95,57,50,95,118,120,119,111,114,107,115,0),true ]]);
      if (nativeexy.size == vietnamP) {
         vietnamP -= 2 / (Math.max(6, parseInt(`${appleL}`)));
      }
      for (let s = 0; s < 1; s++) {
         nativeexy.set(`${detailW}`, parseInt(`${detailW}`) ^ 3);
      }
         chartQ = new Map([[`${nativeexy.size}`, 3]]);
          let manifesth = 3.0;
         descM -= 2;
         manifesth -= 1;
      photoQ = `${pathS}`;
   }
        const offline = !(state.isConnected && state.isInternetReachable);

       let popupC = 5.0;
      for (let q = 0; q < 3; q++) {
         popupC += parseInt(`${popupC}`) + parseInt(`${popupC}`);
      }
      let mbsplash_ = 8646412.0 <= popupC;
      do {
         popupC += parseInt(`${popupC}`);
         if (mbsplash_) {
            break;
         }
      } while (mbsplash_ && (4.3 <= (popupC + 1)));
      let downloadedJ = popupC >= 9732786.0;
      do {
         popupC /= Math.max(5, parseInt(`${popupC}`) ^ parseInt(`${popupC}`));
         if (downloadedJ) {
            break;
         }
      } while (downloadedJ && (3.52 <= (popupC + 4.30)));
      goal_ = `${photoQ.length * smallx.length}`;
      googleV %= Math.max(2, 5);
      goal_ = `${1 * goal_.length}`;
   for (let y = 0; y < 3; y++) {
       let detailf: Map<any, any> = new Map([[String.fromCharCode(111,95,52,50,95,118,112,105,116,120,102,109,0),true ], [String.fromCharCode(113,95,56,54,95,116,101,109,112,115,0),true ], [String.fromCharCode(121,95,56,51,95,118,108,98,117,102,0),true ]]);
       let blackL = false;
       let stringD = 3.0;
       let contextz = String.fromCharCode(99,95,51,95,99,111,110,115,117,109,97,98,108,101,0);
       let whatsappj: Array<any> = [9, 74, 796];
         whatsappj = [contextz.length - whatsappj.length];
      let router_ = blackL ? !blackL : blackL;
      do {
         blackL = contextz.length > 67;
         if (router_) {
            break;
         }
      } while ((!blackL) && router_);
      let whatsappW = 5733055 <= contextz.length;
      do {
          let annerM = String.fromCharCode(115,95,53,54,95,101,120,105,115,116,0);
          let videojsh = 4.0;
          let signinupY: Array<any> = [268, 992, 256];
          let clockk = String.fromCharCode(110,95,55,52,95,115,104,97,114,101,0);
         contextz += `${parseInt(`${videojsh}`) ^ 3}`;
         annerM += `${signinupY.length}`;
         videojsh += parseFloat(`${3}`);
         signinupY.push(annerM.length);
         clockk += "2";
         if (whatsappW) {
            break;
         }
      } while (whatsappW && ((stringD + 1.36) >= 1.27));
         whatsappj.push(3 - parseInt(`${stringD}`));
      while ((whatsappj.length % (Math.max(5, 4))) < 4 && blackL) {
         blackL = contextz.length < 84;
         break;
      }
          let malaysiae: Map<any, any> = new Map([[String.fromCharCode(108,95,53,53,95,105,110,103,101,110,105,101,110,116,0),600], [String.fromCharCode(115,95,50,95,102,105,110,100,97,115,115,111,99,105,97,116,105,111,110,0),356], [String.fromCharCode(120,95,52,51,95,101,110,100,112,111,105,110,116,115,0),258]]);
          let videoi = 5.0;
         stringD *= parseInt(`${videoi}`) + 1;
         malaysiae = new Map([[`${malaysiae.size}`, malaysiae.size * 3]]);
         videoi += malaysiae.size / (Math.max(3, 10));
          let expiredZ = 5.0;
          let championj = 2;
          let videocommonf = String.fromCharCode(100,111,117,98,108,101,105,110,116,115,116,114,95,114,95,49,51,0);
         contextz = `${3 & parseInt(`${expiredZ}`)}`;
         expiredZ *= (videocommonf == String.fromCharCode(78,0) ? videocommonf.length : championj);
         championj ^= videocommonf.length - championj;
      while (!contextz.startsWith(`${whatsappj.length}`)) {
          let bottomn: Map<any, any> = new Map([[String.fromCharCode(98,95,49,95,99,107,115,117,109,0),String.fromCharCode(104,97,110,100,95,100,95,50,56,0)], [String.fromCharCode(114,108,105,110,101,95,50,95,51,56,0),String.fromCharCode(115,95,49,95,113,117,97,100,0)], [String.fromCharCode(114,97,116,101,99,116,114,108,95,55,95,57,50,0),String.fromCharCode(100,117,112,108,105,99,97,116,101,95,53,95,54,0)]]);
          let guidet = String.fromCharCode(99,95,49,54,95,99,114,117,110,0);
          let analyticv = 0;
          let green1: Array<any> = [310, 782, 134];
          let crownG = false;
         whatsappj.push((guidet == String.fromCharCode(101,0) ? guidet.length : green1.length));
         bottomn = new Map([[`${bottomn.size}`, 2]]);
         analyticv -= ((crownG ? 5 : 4) + analyticv);
         green1.push(bottomn.size);
         break;
      }
      while (!contextz.startsWith(`${stringD}`)) {
         contextz += `${2 % (Math.max(3, contextz.length))}`;
         break;
      }
         contextz = `${(2 * (blackL ? 2 : 2))}`;
         detailf = new Map([[contextz, contextz.length * 1]]);
      for (let g = 0; g < 1; g++) {
         contextz += `${((blackL ? 4 : 1) / 1)}`;
      }
         blackL = detailf.size > 92;
      while (2 <= (3 / (Math.max(8, detailf.size)))) {
         detailf.set(`${stringD}`, 3 << (Math.min(5, contextz.length)));
         break;
      }
      let tempB = blackL ? !blackL : blackL;
      do {
         blackL = (((!blackL ? 33 : whatsappj.length) << (Math.min(whatsappj.length, 3))) >= 33);
         if (tempB) {
            break;
         }
      } while (tempB && (!blackL));
      smallx += `${googleV}`;
   }
       let middleG = String.fromCharCode(115,95,49,51,95,113,117,105,122,0);
       let userk = false;
       let goalK = String.fromCharCode(105,100,101,110,116,105,102,105,101,114,95,49,95,54,57,0);
      while (middleG.length >= 2) {
         middleG += `${((userk ? 5 : 4))}`;
         break;
      }
         userk = !goalK.startsWith(`${userk}`);
       let rightv = 1.0;
      while ((parseInt(`${rightv}`) * goalK.length) >= 5 && 5 >= (parseInt(`${rightv}`) * goalK.length)) {
         rightv /= Math.max(1, parseInt(`${rightv}`));
         break;
      }
         rightv += (goalK.length % (Math.max(4, (userk ? 1 : 2))));
      if (userk) {
         middleG += `${parseInt(`${rightv}`)}`;
      }
         userk = (3 > ((userk ? 3 : goalK.length) / (Math.max(goalK.length, 6))));
         rightv -= middleG.length << (Math.min(Math.abs(2), 4));
      if ((goalK.length / (Math.max(5, 10))) >= 3) {
         goalK = `${2 << (Math.min(2, middleG.length))}`;
      }
      pathS *= 1;
        setIsOffline(offline);

   let description_5f = 9471676 >= googleV;
   do {
       let referrerE = 4.0;
       let mbsplash6 = 0.0;
       let castu = true;
      if ((2.74 - mbsplash6) > 5.38 && castu) {
          let b_lockI: Map<any, any> = new Map([[String.fromCharCode(102,95,51,57,95,116,111,114,101,100,0),626], [String.fromCharCode(114,101,108,97,116,105,118,101,95,97,95,50,51,0),265], [String.fromCharCode(109,111,110,111,115,112,97,99,101,95,102,95,57,53,0),950]]);
          let mappingr = 3;
          let episodesV = 3.0;
         castu = 56 < (episodesV * mappingr);
         b_lockI.set(`${b_lockI.size}`, b_lockI.size >> (Math.min(Math.abs(b_lockI.size), 5)));
         mappingr &= b_lockI.size;
      }
          let groupw: Array<any> = [String.fromCharCode(119,95,55,52,0), String.fromCharCode(114,101,99,121,99,108,101,95,50,95,57,53,0), String.fromCharCode(113,95,52,50,95,117,110,101,110,99,114,121,112,116,101,100,0)];
          let androidT = String.fromCharCode(119,109,118,100,115,112,95,118,95,51,53,0);
          let placeholder0 = false;
         referrerE += androidT.length;
         groupw = [1];
         androidT = `${((placeholder0 ? 3 : 2) >> (Math.min(Math.abs(3), 5)))}`;
         referrerE /= Math.max(3, parseInt(`${referrerE}`) - 1);
          let downloadN: Array<any> = [141, 238, 642];
          let backgroundR = String.fromCharCode(105,110,116,101,114,118,97,108,115,95,100,95,56,48,0);
         castu = referrerE >= 60.23;
         downloadN = [downloadN.length + 2];
         backgroundR = "2";
      if (mbsplash6 > referrerE) {
          let q_lock5 = String.fromCharCode(114,101,102,101,114,95,97,95,49,53,0);
          let refreshT = String.fromCharCode(101,95,57,48,95,99,111,110,99,97,116,101,110,97,116,105,111,110,0);
         referrerE /= Math.max(3, q_lock5.length >> (Math.min(Math.abs(3), 5)));
         q_lock5 = `${refreshT.length << (Math.min(refreshT.length, 2))}`;
      }
          let castp: Array<any> = [367, 847, 432];
          let logoutI: Map<any, any> = new Map([[String.fromCharCode(114,101,109,105,120,105,110,103,95,114,95,57,48,0),370], [String.fromCharCode(115,101,103,109,101,110,116,115,95,53,95,49,48,0),272]]);
          let i_unlockL = 5.0;
         referrerE -= ((castu ? 3 : 2) / (Math.max(parseInt(`${i_unlockL}`), 7)));
         castp = [logoutI.size << (Math.min(Math.abs(3), 5))];
         logoutI.set(`${castp.length}`, logoutI.size & castp.length);
         i_unlockL += parseFloat(`${2}`);
         castu = !castu && 72.78 < mbsplash6;
         referrerE /= Math.max(3, parseInt(`${mbsplash6}`));
          let editW: Map<any, any> = new Map([[String.fromCharCode(115,116,114,99,97,115,101,99,109,112,95,114,95,54,0),true ], [String.fromCharCode(112,97,117,115,101,95,117,95,56,54,0),true ]]);
         castu = !castu;
         editW.set(`${editW.size}`, 2);
      googleV *= goal_.length + pathS;
      if (description_5f) {
         break;
      }
   } while ((goal_.length == 2) && description_5f);
   if (pnewsO || episodes9.length > 4) {
      episodes9 += `${episodes9.length}`;
   }
   if ((pathS - stylen.size) > 2) {
      pathS *= stylen.size >> (Math.min(photoQ.length, 4));
   }
   if (!fastforwardA.includes(`${googleV}`)) {
       let reportU: Map<any, any> = new Map([[String.fromCharCode(108,95,54,50,95,114,101,111,114,100,101,114,105,110,103,0),true ], [String.fromCharCode(100,95,55,95,101,109,117,108,97,116,101,100,0),false ]]);
       let viewerH = 2;
       let volume7 = 0.0;
       let robotoO = false;
       let g_unlock1 = String.fromCharCode(97,99,114,111,115,115,102,97,100,101,95,50,95,56,54,0);
      while (reportU.size > viewerH) {
         reportU.set(g_unlock1, (g_unlock1 == String.fromCharCode(116,0) ? g_unlock1.length : reportU.size));
         break;
      }
         viewerH ^= 3;
         robotoO = 31 <= viewerH && !robotoO;
      for (let e = 0; e < 1; e++) {
         robotoO = g_unlock1.includes(`${robotoO}`);
      }
         reportU.set(`${robotoO}`, g_unlock1.length);
       let sheetu: Array<any> = [653, 430];
      if (5 > (parseInt(`${volume7}`) / (Math.max(g_unlock1.length, 3)))) {
          let profiled = 2.0;
          let matchF = String.fromCharCode(117,112,99,97,115,101,95,108,95,52,54,0);
          let arrowe = String.fromCharCode(116,95,57,52,95,100,111,117,98,108,101,115,0);
         volume7 += matchF.length >> (Math.min(Math.abs(3), 3));
         profiled *= parseInt(`${profiled}`);
         matchF = `${parseInt(`${profiled}`) * arrowe.length}`;
         arrowe += `${parseInt(`${profiled}`)}`;
      }
       let closeP = 2.0;
       let logoh = 4.0;
      if (!g_unlock1.includes(`${sheetu.length}`)) {
         g_unlock1 = `${g_unlock1.length}`;
      }
      for (let v = 0; v < 2; v++) {
         sheetu.push(1 | sheetu.length);
      }
      for (let v = 0; v < 3; v++) {
         logoh /= Math.max(sheetu.length * 1, 1);
      }
          let commentG = 3.0;
          let bannerw = String.fromCharCode(108,95,52,53,95,115,105,109,112,108,101,114,101,97,100,0);
         logoh *= (2 | (robotoO ? 5 : 5));
         commentG *= bannerw.length & parseInt(`${commentG}`);
         bannerw = `${3 << (Math.min(1, bannerw.length))}`;
      let goal1 = logoh <= 9328315.0;
      do {
         logoh += parseInt(`${volume7}`);
         if (goal1) {
            break;
         }
      } while ((5.17 >= (closeP * logoh)) && goal1);
         reportU = new Map([[g_unlock1, g_unlock1.length]]);
         g_unlock1 = "3";
      fastforwardA = `${smallx.length}`;
   }
      goal_ += `${1 | fastforwardA.length}`;
        if (!offline) {

   let pathV = goal_.length >= 5858260;
   do {
      goal_ = `${fastforwardA.length}`;
      if (pathV) {
         break;
      }
   } while ((photoQ == String.fromCharCode(90,0)) && pathV);
   while (smallx.length < 5) {
      pnewsO = smallx.includes(`${googleV}`);
      break;
   }
      pnewsO = (91 <= ((pnewsO ? fastforwardA.length : 91) + fastforwardA.length));
      googleV |= ((pnewsO ? 2 : 5) ^ pathS);
      photoQ = "2";
            handleRefresh();
        }
    }, []);

    useFocusEffect(useCallback(() => {
        if (!settingsReducer.isOffline && settingsReducer.isOffline !== isOffline) {
            setIsOffline(settingsReducer.isOffline);
            handleRefresh();
        } else if (settingsReducer.isOffline) {
            return () => {
                miniVodRef.current?.setPause(true);
                setIsOffline(settingsReducer.isOffline);
            }
        }
    }, [settingsReducer.isOffline]));

    useEffect(() => {
        const subscription = AppState.addEventListener(
            "change",
            handleAppStateChange
        );

        return () => {
            subscription.remove();
        };
    }, [])

    
    const handleAppStateChange = (nextAppState: any) => {
        setIsInBackground(nextAppState !== "active");
    };

    return (
        <ScreenContainer containerStyle={{ paddingLeft: 0, paddingRight: 0, paddingBottom: 10 }}>
            <View style={{ position: 'absolute', top: 0, left: 0, padding: 20, zIndex: 50, width: '100%', flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ ...textVariants.bigHeader, color: colors.text, fontSize: 20 }}>解说</Text>
            </View>
            {!isOffline &&
                <MiniVideoList
                    ref={miniVodRef}
                    miniVodListRef={miniVodListRef}
                    videos={flattenedVideos}
                    fetchNextPage={fetchNextPage}
                    hasNextPage={hasNextPage}
                    isFetching={isFetching}
                    isFetchingNextPage={isFetchingNextPage}
                    isActive={isFocused && !isInBackground}
                    isHidden={miniVodIndex < 0}
                    setCollectionEpisode={(index: number) => { }}
                    handleRefreshMiniVod={handleRefresh}
                    isRefreshing={isRefreshing}
                    isPressTabScroll={isPressTabScroll}
                />
            }
            {isOffline && <NoConnection onClickRetry={checkConnection} />}
        </ScreenContainer>
    )
}

const styles = StyleSheet.create({

})
