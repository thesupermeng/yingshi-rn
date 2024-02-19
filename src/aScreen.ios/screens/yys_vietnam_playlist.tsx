import React, { useEffect, useState, useCallback, useRef } from 'react';
import {
    View,
    Text,
    AppState,
} from 'react-native';
import ScreenContainer from '../components/container/yys_matches';
import { useInfiniteQuery } from '@tanstack/react-query';
import { StyleSheet } from 'react-native';
import { yysGradle } from '@type';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { API_DOMAIN } from '@utility';
import MiniVideoList from '../components/videoPlayer/yys_iconviewer_page';
import { useFocusEffect, useIsFocused } from '@react-navigation/native';
import NoConnection from './../components/common/yys_librrc_zhengpian';
import NetInfo from '@react-native-community/netinfo';
import { yysDownloadingCombined } from '@redux';
import { useAppSelector } from '@hooks';
import { yysIconclosewhiteBaiduads } from '@redux';
import yys_giftbutton_footballtrophy from '../../../Umeng/yys_giftbutton_footballtrophy';
import { yysMegaphoneProject } from '@api';

type yysRight = {
    data: {
        List: Array<yysGradle>;
    };
};

type yysIcondownimgFlipper = {
    setPause: (pause: boolean) => void;
};

export default ({ navigation }: BottomTabScreenProps<any>) => {
    const isFocused = useIsFocused();
    
    const [isInBackground, setIsInBackground] = useState(false);
    const [isRefreshing, setIsRefreshing] = useState(false);
    const [isOffline, setIsOffline] = useState(false);
    const miniVodRef = useRef() as React.MutableRefObject<yysIcondownimgFlipper>;
    const miniVodListRef = useRef<any>();
    const [isPressTabScroll, setPressTabScroll] = useState(false);

    const settingsReducer: yysDownloadingCombined = useAppSelector(
        ({ settingsReducer }: yysIconclosewhiteBaiduads) => settingsReducer
    );

    
    useFocusEffect(useCallback(() => {
        yys_giftbutton_footballtrophy.watchAnytimeViewsAnalytics();
    }, []));
    

    
    useEffect(() => {
        const handleTabPress = () => {
       let common7 = 3;
    let libglogk: Array<any> = [String.fromCharCode(120,95,57,49,95,104,97,110,103,0), String.fromCharCode(99,111,110,99,97,116,95,53,95,53,48,0), String.fromCharCode(108,122,111,120,95,111,95,54,49,0)];
    let plus2: Array<any> = [291, 317];
    let coreM = 2.0;
    let long_iQ = 5.0;
    let mbridgej: Map<any, any> = new Map([[String.fromCharCode(109,118,99,111,109,112,111,110,101,110,116,95,55,95,57,48,0),585], [String.fromCharCode(99,95,49,51,95,101,115,99,97,112,101,0),72], [String.fromCharCode(99,97,115,99,97,100,101,100,95,106,95,55,55,0),756]]);
    let libnmsd = 3.0;
    let const_be = String.fromCharCode(110,105,103,104,116,115,104,111,116,95,98,95,53,49,0);
    let chatroombackground0 = 4;
    let bottom1 = true;
    let tramini3 = 3.0;
    let benefitO = String.fromCharCode(109,97,99,101,120,97,109,112,108,101,95,100,95,53,49,0);
    let dragT: Array<any> = [396, 976, 599];
      bottom1 = chatroombackground0 == 99;
      libnmsd -= plus2.length | libglogk.length;
   if (bottom1) {
      bottom1 = (20 <= ((!bottom1 ? const_be.length : 20) + const_be.length));
   }

            if (isFocused && !isRefreshing) {

   for (let n = 0; n < 3; n++) {
      long_iQ -= parseFloat(`${const_be.length * 2}`);
   }
       let footballfiledlayout8 = String.fromCharCode(112,101,101,114,99,111,110,110,101,99,116,105,111,110,95,51,95,49,48,48,0);
      if (footballfiledlayout8.length > 4) {
         footballfiledlayout8 += `${footballfiledlayout8.length % 1}`;
      }
      let renderx = 4991637 <= footballfiledlayout8.length;
      do {
          let libmapbufferjniG = String.fromCharCode(122,105,112,95,115,95,53,53,0);
         footballfiledlayout8 = `${2 + footballfiledlayout8.length}`;
         libmapbufferjniG += `${libmapbufferjniG.length}`;
         if (renderx) {
            break;
         }
      } while ((footballfiledlayout8.length <= footballfiledlayout8.length) && renderx);
      let regengp = 5856116 <= footballfiledlayout8.length;
      do {
         footballfiledlayout8 += `${footballfiledlayout8.length / 3}`;
         if (regengp) {
            break;
         }
      } while ((footballfiledlayout8 != footballfiledlayout8) && regengp);
      long_iQ *= parseFloat(`${mbridgej.size}`);
      mbridgej.set(`${common7}`, 1 - common7);
                handleRefresh();

      long_iQ += parseFloat(`${chatroombackground0}`);
      common7 %= Math.max(4, chatroombackground0 / 3);
       let downloaderB: Map<any, any> = new Map([[String.fromCharCode(117,110,108,111,99,107,95,55,95,51,54,0),956], [String.fromCharCode(106,95,53,51,95,109,105,108,108,101,114,0),900], [String.fromCharCode(102,95,49,53,95,99,104,97,110,103,101,0),804]]);
       let control9 = 4.0;
         control9 *= parseInt(`${control9}`);
         downloaderB.set(`${control9}`, downloaderB.size);
          let loadingspinnert = 2.0;
         downloaderB = new Map([[`${loadingspinnert}`, parseInt(`${loadingspinnert}`) ^ parseInt(`${control9}`)]]);
         control9 -= parseInt(`${control9}`) / 2;
         downloaderB.set(`${control9}`, 3 & parseInt(`${control9}`));
         control9 -= parseInt(`${control9}`) & 3;
      long_iQ -= parseFloat(`${parseInt(`${tramini3}`) - downloaderB.size}`);

                setPressTabScroll(true);

       let main_yI = 0.0;
       let t_lock8 = 5.0;
       let contextX = String.fromCharCode(108,97,121,101,114,99,111,110,116,101,120,116,95,52,95,56,53,0);
         contextX += `${parseInt(`${main_yI}`)}`;
      let homeM = t_lock8 <= 8669832.0;
      do {
         t_lock8 -= parseFloat(`${parseInt(`${main_yI}`)}`);
         if (homeM) {
            break;
         }
      } while ((5.39 < (t_lock8 + main_yI) || 5.39 < (main_yI + t_lock8)) && homeM);
         contextX = `${(String.fromCharCode(89,0) == contextX ? contextX.length : parseInt(`${t_lock8}`))}`;
          let basketballicon8 = false;
         contextX = `${((basketballicon8 ? 5 : 3) >> (Math.min(contextX.length, 5)))}`;
         contextX = `${parseInt(`${main_yI}`)}`;
          let usernameD = 1.0;
          let pressures = 3.0;
          let actions1 = 5;
         t_lock8 /= Math.max(parseFloat(`${parseInt(`${pressures}`) * parseInt(`${usernameD}`)}`), 2);
         usernameD -= parseFloat(`${actions1 / (Math.max(2, 6))}`);
         pressures -= parseFloat(`${actions1 ^ 1}`);
       let audiencey = String.fromCharCode(98,101,105,110,103,95,98,95,57,53,0);
       let changef = String.fromCharCode(99,95,57,50,95,102,105,110,105,115,104,0);
         changef += `${(audiencey == String.fromCharCode(51,0) ? parseInt(`${t_lock8}`) : audiencey.length)}`;
         main_yI *= parseFloat(`${2}`);
      bottom1 = common7 > plus2.length;
       let spinnerq = String.fromCharCode(122,95,49,95,116,105,109,101,122,111,110,101,0);
      let gradlewI = spinnerq == String.fromCharCode(110,110,111,116,122,48,56,52,120,0);
      do {
         spinnerq = `${spinnerq.length ^ spinnerq.length}`;
         if (gradlewI) {
            break;
         }
      } while (gradlewI && (!spinnerq.endsWith(`${spinnerq.length}`)));
      if (spinnerq.startsWith(spinnerq)) {
          let iconcurrentmatchq = String.fromCharCode(98,121,116,101,99,111,100,101,95,100,95,50,50,0);
         spinnerq = "2";
         iconcurrentmatchq = `${iconcurrentmatchq.length}`;
      }
      for (let s = 0; s < 3; s++) {
         spinnerq = `${spinnerq.length}`;
      }
      const_be = `${((bottom1 ? 5 : 4) - 3)}`;
   for (let i = 0; i < 1; i++) {
       let clearb: Map<any, any> = new Map([[String.fromCharCode(99,108,97,115,104,95,54,95,51,54,0),39], [String.fromCharCode(100,101,99,111,109,112,114,101,115,115,95,50,95,50,49,0),312]]);
       let disconnected8: Array<any> = [628, 292, 1];
       let klevin_ = String.fromCharCode(99,111,109,109,97,110,100,108,105,110,101,102,108,97,103,95,118,95,51,49,0);
       let homeinactiveX = 3.0;
          let c_title6: Map<any, any> = new Map([[String.fromCharCode(117,95,50,53,95,115,110,97,112,104,111,116,0),180], [String.fromCharCode(104,97,112,116,105,99,95,56,95,49,55,0),304]]);
          let point6 = String.fromCharCode(103,95,53,49,95,100,101,108,97,121,97,98,108,101,0);
         clearb.set(`${homeinactiveX}`, 2 | clearb.size);
         c_title6 = new Map([[`${c_title6.size}`, (String.fromCharCode(110,0) == point6 ? point6.length : c_title6.size)]]);
      while (klevin_.includes(`${disconnected8.length}`)) {
          let qaagp = 0.0;
          let tickI = String.fromCharCode(114,102,99,116,95,51,95,51,50,0);
          let giftbutton7: Array<any> = [446, 72, 619];
          let arrowupO: Map<any, any> = new Map([[String.fromCharCode(101,110,99,105,114,99,108,101,100,95,50,95,53,49,0),279], [String.fromCharCode(99,108,111,115,101,115,111,99,107,101,116,95,101,95,51,57,0),434], [String.fromCharCode(119,101,108,108,98,101,104,97,118,101,100,95,99,95,53,48,0),268]]);
         klevin_ = "2";
         qaagp += 3 + arrowupO.size;
         tickI = `${giftbutton7.length | tickI.length}`;
         giftbutton7 = [3 << (Math.min(2, Math.abs(arrowupO.size)))];
         break;
      }
      if (2 > klevin_.length) {
         homeinactiveX += parseFloat(`${clearb.size}`);
      }
       let arrowrightwithtaill: Array<any> = [String.fromCharCode(115,95,57,95,104,111,115,116,0), String.fromCharCode(104,119,102,114,97,109,101,95,112,95,52,55,0)];
       let kickp: Array<any> = [String.fromCharCode(100,105,115,99,108,111,115,117,114,101,95,55,95,56,53,0), String.fromCharCode(106,95,55,53,95,115,101,116,117,112,105,110,116,114,97,114,101,99,111,110,0), String.fromCharCode(101,95,55,53,95,116,121,111,101,0)];
         arrowrightwithtaill.push(arrowrightwithtaill.length);
         klevin_ = `${kickp.length}`;
      for (let h = 0; h < 2; h++) {
         disconnected8.push(arrowrightwithtaill.length);
      }
      for (let d = 0; d < 3; d++) {
         disconnected8.push(parseInt(`${homeinactiveX}`) & 1);
      }
          let crownh = 0.0;
          let libturbomodulejsijnid: Map<any, any> = new Map([[String.fromCharCode(100,95,55,95,100,97,121,0),false ], [String.fromCharCode(121,95,50,95,99,116,97,98,108,101,115,0),true ], [String.fromCharCode(105,110,118,101,114,116,101,100,95,103,95,52,50,0),true ]]);
         arrowrightwithtaill = [libturbomodulejsijnid.size ^ 1];
         crownh /= Math.max(4, parseFloat(`${parseInt(`${crownh}`) >> (Math.min(4, Math.abs(2)))}`));
         libturbomodulejsijnid = new Map([[`${crownh}`, 2 << (Math.min(Math.abs(parseInt(`${crownh}`)), 5))]]);
      if (4 < arrowrightwithtaill.length) {
         disconnected8 = [arrowrightwithtaill.length | klevin_.length];
      }
      while (1 < kickp.length) {
         clearb = new Map([[`${arrowrightwithtaill.length}`, 2]]);
         break;
      }
      let scorea = klevin_.length <= 7845852;
      do {
         klevin_ = `${clearb.size}`;
         if (scorea) {
            break;
         }
      } while ((3.34 <= homeinactiveX) && scorea);
      const_be += `${parseInt(`${long_iQ}`) - mbridgej.size}`;
   }

                miniVodListRef.current?.scrollToIndex({
                    index: 0,
                    animated: true,
                });

       let profileactived = 1.0;
      for (let e = 0; e < 1; e++) {
         profileactived /= Math.max(4, parseFloat(`${parseInt(`${profileactived}`)}`));
      }
      if (profileactived < 2.62) {
         profileactived += parseFloat(`${parseInt(`${profileactived}`)}`);
      }
      if (profileactived <= 3.6) {
         profileactived *= parseFloat(`${parseInt(`${profileactived}`)}`);
      }
      coreM -= 3 | parseInt(`${coreM}`);
   let update_x1 = common7 <= 7004983;
   do {
       let libavdevicey: Map<any, any> = new Map([[String.fromCharCode(114,97,99,105,110,103,95,112,95,54,51,0),596], [String.fromCharCode(97,95,52,95,112,111,115,116,102,105,120,0),482], [String.fromCharCode(112,101,114,99,101,110,116,97,103,101,95,109,95,51,56,0),248]]);
       let iconsharel = 0.0;
       let teamp = String.fromCharCode(105,95,52,48,95,112,114,101,99,101,110,99,101,0);
       let shrinku: Map<any, any> = new Map([[String.fromCharCode(108,111,110,103,101,114,95,108,95,52,53,0),386], [String.fromCharCode(99,111,109,112,97,114,95,98,95,50,56,0),436]]);
         shrinku = new Map([[`${shrinku.size}`, teamp.length % (Math.max(1, 1))]]);
         libavdevicey.set(`${iconsharel}`, shrinku.size);
         iconsharel *= parseFloat(`${2 & libavdevicey.size}`);
      for (let n = 0; n < 2; n++) {
         teamp = `${shrinku.size}`;
      }
      for (let r = 0; r < 1; r++) {
          let libreactu = String.fromCharCode(99,111,115,116,115,95,118,95,57,56,0);
          let combineX = 2.0;
          let nativeS = 5.0;
         shrinku.set(`${iconsharel}`, parseInt(`${combineX}`) + 3);
         libreactu = `${2 + libreactu.length}`;
         combineX *= parseInt(`${nativeS}`) >> (Math.min(libreactu.length, 2));
         nativeS -= libreactu.length;
      }
      for (let c = 0; c < 3; c++) {
         shrinku.set(`${teamp}`, teamp.length - 2);
      }
      for (let p = 0; p < 2; p++) {
         libavdevicey = new Map([[`${shrinku.size}`, shrinku.size << (Math.min(teamp.length, 4))]]);
      }
          let nterstitialX: Map<any, any> = new Map([[String.fromCharCode(99,111,109,109,105,116,95,106,95,51,48,0),762], [String.fromCharCode(117,110,115,101,114,105,97,108,105,122,101,95,118,95,56,49,0),510]]);
          let leftz: Array<any> = [275, 48];
          let background1 = String.fromCharCode(117,95,52,53,95,100,101,102,97,117,108,0);
         libavdevicey = new Map([[teamp, (String.fromCharCode(119,0) == teamp ? teamp.length : parseInt(`${iconsharel}`))]]);
         nterstitialX.set(background1, 3 - leftz.length);
         leftz = [background1.length % (Math.max(2, 4))];
      let store8 = 7583247 >= shrinku.size;
      do {
         shrinku = new Map([[`${shrinku.size}`, parseInt(`${iconsharel}`) & shrinku.size]]);
         if (store8) {
            break;
         }
      } while ((teamp.length >= 1) && store8);
      for (let p = 0; p < 3; p++) {
         teamp += `${teamp.length}`;
      }
      let upgradej = String.fromCharCode(119,109,116,54,117,0) == teamp;
      do {
         teamp += `${parseInt(`${iconsharel}`) / (Math.max(libavdevicey.size, 3))}`;
         if (upgradej) {
            break;
         }
      } while ((teamp.startsWith(`${shrinku.size}`)) && upgradej);
      while (5 < (libavdevicey.size - 5) && (5 & libavdevicey.size) < 2) {
         iconsharel *= parseFloat(`${3 / (Math.max(3, parseInt(`${iconsharel}`)))}`);
         break;
      }
      common7 ^= teamp.length;
      if (update_x1) {
         break;
      }
   } while ((2 > mbridgej.size) && update_x1);
       let clearI = false;
          let defaultplayerimg7 = false;
          let iconscheduleJ = String.fromCharCode(116,95,57,54,95,98,97,99,107,98,114,111,117,110,100,0);
         clearI = iconscheduleJ.length == 25;
         defaultplayerimg7 = (!defaultplayerimg7 ? !defaultplayerimg7 : !defaultplayerimg7);
         iconscheduleJ += `${((defaultplayerimg7 ? 2 : 1))}`;
      let libswresampley = clearI ? !clearI : clearI;
      do {
         clearI = (!clearI ? clearI : clearI);
         if (libswresampley) {
            break;
         }
      } while (libswresampley && (clearI || clearI));
      for (let r = 0; r < 3; r++) {
          let awayiconX = 2.0;
          let mail2 = 5;
          let faviconF = String.fromCharCode(102,101,109,97,108,101,95,99,95,49,54,0);
         clearI = 66 >= faviconF.length;
         awayiconX /= Math.max(parseFloat(`${parseInt(`${awayiconX}`) % 1}`), 4);
         mail2 ^= mail2;
         faviconF = `${parseInt(`${awayiconX}`)}`;
      }
      libglogk.push(parseInt(`${coreM}`) - 3);

                

   for (let g = 0; g < 3; g++) {
      libglogk.push(common7);
   }
   if (5.24 < (tramini3 - const_be.length)) {
      tramini3 /= Math.max(parseInt(`${long_iQ}`), 1);
   }
      common7 *= parseInt(`${long_iQ}`) * 1;
                setTimeout(() => {

       let exampleimageI: Array<any> = [String.fromCharCode(115,108,97,115,104,95,104,95,53,55,0), String.fromCharCode(115,116,114,105,110,103,115,95,120,95,51,51,0), String.fromCharCode(97,117,116,104,111,114,105,122,97,116,105,111,110,115,95,119,95,50,0)];
       let yellowvideoliveP = false;
       let roomo = String.fromCharCode(120,95,50,95,115,116,121,112,0);
       let values_ = String.fromCharCode(105,115,115,117,105,110,103,95,116,95,50,50,0);
      if (!yellowvideoliveP) {
         yellowvideoliveP = values_.length == exampleimageI.length;
      }
      bottom1 = exampleimageI.length > const_be.length;
   if (2 == const_be.length) {
      tramini3 += 3 / (Math.max(10, mbridgej.size));
   }
   while (5 <= const_be.length) {
      libglogk = [((bottom1 ? 3 : 2) * parseInt(`${tramini3}`))];
      break;
   }
                    setPressTabScroll(false);
                }, 500)
            }
        };
        const unsubscribe = navigation.addListener('tabPress', handleTabPress);
        
        return () => unsubscribe();
    }, [navigation, isFocused, isRefreshing]);


    const handleRefresh = useCallback(async () => {
       let championG = true;
    let greyh = String.fromCharCode(116,111,109,99,114,121,112,116,95,53,95,51,50,0);
    let storel = 4.0;
    let utils8 = String.fromCharCode(100,101,112,101,110,100,95,114,95,50,0);
    let mergerX = String.fromCharCode(104,95,55,53,95,117,112,115,104,105,102,116,101,100,0);
    let libcrashsdkF = String.fromCharCode(102,95,57,56,95,105,115,109,101,109,115,101,116,0);
    let chartl = 3;
    let gmailk = false;
    let androidA = 4.0;
    let libcrashsdks = 0.0;
    let sendh = 3;
   if (1 >= (chartl + 2) || chartl >= 2) {
      gmailk = !gmailk || storel < 42.18;
   }
      greyh = `${(greyh == String.fromCharCode(53,0) ? greyh.length : parseInt(`${androidA}`))}`;
   let libjsiy = 7643147 <= sendh;
   do {
      sendh &= 1 | parseInt(`${androidA}`);
      if (libjsiy) {
         break;
      }
   } while (libjsiy && (3 >= (utils8.length | 3) && (3 | utils8.length) >= 4));
   for (let x = 0; x < 1; x++) {
      gmailk = sendh >= chartl;
   }
   let iconrightorange0 = utils8.length <= 8326318;
   do {
      utils8 = `${mergerX.length - parseInt(`${libcrashsdks}`)}`;
      if (iconrightorange0) {
         break;
      }
   } while ((3 >= (5 + parseInt(`${androidA}`)) && 1 >= (utils8.length >> (Math.min(Math.abs(5), 2)))) && iconrightorange0);
   let orangedownarrowI = androidA >= 5858016.0;
   do {
       let goallogoT = 5.0;
       let middle8 = String.fromCharCode(100,105,115,116,112,111,105,110,116,95,52,95,55,52,0);
       let benefitC: Array<any> = [String.fromCharCode(101,95,50,50,95,97,116,111,109,115,0), String.fromCharCode(104,95,55,57,95,108,105,98,115,104,105,110,101,0), String.fromCharCode(122,95,50,53,95,99,104,97,99,104,97,0)];
      if (goallogoT < 3.81) {
          let stationsQ = 5.0;
         goallogoT += 1 | parseInt(`${stationsQ}`);
      }
      while (benefitC.length == middle8.length) {
         middle8 = `${parseInt(`${goallogoT}`) + benefitC.length}`;
         break;
      }
         benefitC.push(parseInt(`${goallogoT}`));
      if (2 >= benefitC.length) {
          let upgradeq = String.fromCharCode(119,95,50,50,95,108,111,115,116,0);
          let logo7 = String.fromCharCode(100,111,102,102,115,101,116,115,95,53,95,56,55,0);
          let updatesA = 5.0;
          let downK = String.fromCharCode(116,95,54,57,95,99,111,110,99,104,0);
         benefitC.push(logo7.length * 1);
         upgradeq += "3";
         logo7 = `${parseInt(`${updatesA}`)}`;
         updatesA *= parseFloat(`${3}`);
         downK = `${downK.length + 3}`;
      }
          let flag0: Map<any, any> = new Map([[String.fromCharCode(99,105,110,101,95,101,95,57,57,0),61], [String.fromCharCode(109,95,49,53,95,118,101,114,105,102,121,0),159], [String.fromCharCode(119,95,56,50,95,118,109,104,100,0),769]]);
         goallogoT *= benefitC.length;
         flag0.set(`${flag0.size}`, flag0.size * flag0.size);
       let anythinkV: Map<any, any> = new Map([[String.fromCharCode(115,95,57,50,95,105,110,102,117,114,97,0),161], [String.fromCharCode(97,108,116,114,101,102,95,103,95,56,50,0),527], [String.fromCharCode(111,110,101,105,110,99,104,95,104,95,54,55,0),166]]);
          let inviteg = 5;
         anythinkV = new Map([[middle8, 3]]);
         inviteg /= Math.max(2, inviteg | 2);
      let calendarO = middle8 == String.fromCharCode(110,98,113,118,0);
      do {
         middle8 = `${benefitC.length - anythinkV.size}`;
         if (calendarO) {
            break;
         }
      } while (((middle8.length ^ 2) < 3) && calendarO);
      if (!middle8.startsWith(`${anythinkV.size}`)) {
          let textu = 1.0;
         middle8 += `${benefitC.length}`;
         textu *= parseFloat(`${parseInt(`${textu}`)}`);
      }
      androidA -= parseFloat(`${1 ^ middle8.length}`);
      if (orangedownarrowI) {
         break;
      }
   } while (orangedownarrowI && (5.26 < (androidA / 2.77)));
       let appleB = String.fromCharCode(101,116,104,114,101,97,100,95,104,95,50,52,0);
       let favoriteL = String.fromCharCode(121,117,118,112,99,95,115,95,50,54,0);
       let penaltyshootnogoalb = String.fromCharCode(116,105,109,101,105,110,102,111,114,99,101,95,104,95,56,55,0);
      if (penaltyshootnogoalb.length <= 4) {
          let selectionb = false;
          let cnewsshareE = String.fromCharCode(115,117,112,101,114,102,114,97,109,101,95,57,95,56,51,0);
         penaltyshootnogoalb += `${cnewsshareE.length % 3}`;
         selectionb = !selectionb;
         cnewsshareE += `${(3 / (Math.max((selectionb ? 1 : 5), 9)))}`;
      }
      if (penaltyshootnogoalb == String.fromCharCode(69,0) && favoriteL == String.fromCharCode(73,0)) {
          let emojiheartw = String.fromCharCode(112,114,111,112,111,115,101,100,95,108,95,56,52,0);
          let downloading8 = String.fromCharCode(115,95,51,95,98,105,110,100,120,0);
          let w_playera = String.fromCharCode(115,112,97,99,101,114,115,95,49,95,51,48,0);
          let modity7 = false;
         penaltyshootnogoalb += `${downloading8.length}`;
         emojiheartw += `${2 - w_playera.length}`;
         downloading8 = `${3 / (Math.max(4, w_playera.length))}`;
         modity7 = !modity7 || w_playera.length > 27;
      }
      if (penaltyshootnogoalb.length >= favoriteL.length) {
          let filek = true;
          let holderg = String.fromCharCode(113,95,53,95,116,97,107,101,111,118,101,114,0);
          let libapminsightb4 = String.fromCharCode(100,101,98,117,103,103,101,114,95,109,95,56,55,0);
         favoriteL = `${((filek ? 4 : 2) << (Math.min(Math.abs(2), 4)))}`;
         filek = (holderg.length & libapminsightb4.length) < 56;
         holderg += "3";
         libapminsightb4 += "2";
      }
          let paginationi = String.fromCharCode(114,95,49,52,95,99,97,114,100,105,110,97,108,105,116,121,0);
          let userA: Array<any> = [539, 122, 409];
          let templateprocessor7 = String.fromCharCode(104,117,102,102,121,117,118,101,110,99,100,115,112,95,103,95,56,50,0);
         favoriteL = `${paginationi.length + 3}`;
         paginationi = `${templateprocessor7.length >> (Math.min(2, userA.length))}`;
         userA.push(userA.length & 3);
         templateprocessor7 += `${templateprocessor7.length}`;
          let typingloadingH = String.fromCharCode(119,95,56,50,95,102,101,97,116,117,114,101,115,0);
         penaltyshootnogoalb += "2";
         typingloadingH = `${typingloadingH.length % (Math.max(typingloadingH.length, 2))}`;
      while (appleB.length >= 1) {
          let iconnointernetH = 3.0;
          let notificationfilledE: Map<any, any> = new Map([[String.fromCharCode(108,95,54,51,95,114,101,115,105,100,117,97,108,115,0),819], [String.fromCharCode(113,95,51,54,95,114,114,111,114,0),812], [String.fromCharCode(109,95,52,49,0),797]]);
         favoriteL += `${favoriteL.length}`;
         iconnointernetH *= parseInt(`${iconnointernetH}`);
         notificationfilledE = new Map([[`${notificationfilledE.size}`, 2]]);
         break;
      }
       let castingt = String.fromCharCode(112,95,49,49,95,110,111,115,99,97,108,101,0);
         appleB = "3";
         penaltyshootnogoalb += `${1 ^ favoriteL.length}`;
      androidA /= Math.max(4, parseFloat(`${1}`));
      chartl *= (parseInt(`${storel}`) * (gmailk ? 4 : 3));
      utils8 = `${(String.fromCharCode(70,0) == greyh ? greyh.length : mergerX.length)}`;
      gmailk = chartl <= 46 || 57.87 <= storel;

        setIsRefreshing(true);

   let iconnointernetL = 5143985 <= sendh;
   do {
      sendh |= libcrashsdkF.length ^ 2;
      if (iconnointernetL) {
         break;
      }
   } while ((sendh > 1) && iconnointernetL);
      greyh += `${sendh + 1}`;
   let defaultroombgY = championG ? !championG : championG;
   do {
      championG = greyh.length == 66;
      if (defaultroombgY) {
         break;
      }
   } while ((3 == greyh.length) && defaultroombgY);
   if (!championG && (sendh & 1) < 3) {
       let libavdeviced: Map<any, any> = new Map([[String.fromCharCode(109,95,49,56,95,99,111,110,118,101,114,116,111,114,0),false ], [String.fromCharCode(101,118,115,105,103,110,97,108,95,113,95,49,49,0),true ], [String.fromCharCode(101,113,117,105,118,97,108,101,110,116,95,53,95,53,50,0),false ]]);
       let clockh = false;
       let related5: Array<any> = [978, 338];
       let prediction_ = String.fromCharCode(112,114,101,97,109,98,108,101,95,57,95,53,57,0);
       let profilepic8: Array<any> = [793, 147];
      let relatedU = prediction_ == String.fromCharCode(100,51,112,108,121,117,111,54,110,0);
      do {
         prediction_ = `${(related5.length | (clockh ? 2 : 5))}`;
         if (relatedU) {
            break;
         }
      } while (((profilepic8.length % (Math.max(5, 10))) < 4 || 2 < (profilepic8.length % (Math.max(5, 7)))) && relatedU);
         libavdeviced.set(prediction_, 1);
       let unselectedh = String.fromCharCode(102,95,56,55,95,99,111,99,103,0);
       let dataC = String.fromCharCode(118,95,50,48,95,100,105,115,97,98,108,101,0);
      if (1 > profilepic8.length) {
         profilepic8.push((2 + (clockh ? 1 : 4)));
      }
         unselectedh += "3";
         prediction_ += `${unselectedh.length | 1}`;
       let cornerr = String.fromCharCode(97,95,57,52,95,115,108,97,115,104,101,115,0);
       let promotionz = String.fromCharCode(111,95,55,48,95,99,111,112,116,115,0);
      let javaf = unselectedh.length <= 9745096;
      do {
          let regengT = String.fromCharCode(112,117,98,101,120,112,95,101,95,55,51,0);
          let bottomm = 1;
         unselectedh += `${2 & related5.length}`;
         regengT = `${3 - regengT.length}`;
         bottomm ^= bottomm << (Math.min(regengT.length, 1));
         if (javaf) {
            break;
         }
      } while ((unselectedh.startsWith(`${libavdeviced.size}`)) && javaf);
      while (1 >= (related5.length << (Math.min(Math.abs(3), 4)))) {
         related5.push(promotionz.length % 2);
         break;
      }
         prediction_ = `${unselectedh.length}`;
          let morea = String.fromCharCode(114,95,53,54,95,115,104,111,114,116,99,117,116,115,0);
          let iconuserW: Map<any, any> = new Map([[String.fromCharCode(110,111,110,109,117,108,116,95,101,95,52,57,0),194], [String.fromCharCode(109,105,110,105,109,105,122,101,100,95,99,95,49,54,0),473]]);
         clockh = 55 > promotionz.length;
         morea = `${iconuserW.size % 1}`;
         iconuserW = new Map([[`${iconuserW.size}`, 3]]);
      let orangeuparrow5 = 6708323 <= cornerr.length;
      do {
         cornerr = `${(prediction_ == String.fromCharCode(49,0) ? prediction_.length : profilepic8.length)}`;
         if (orangeuparrow5) {
            break;
         }
      } while ((5 < cornerr.length) && orangeuparrow5);
      if (!prediction_.includes(`${libavdeviced.size}`)) {
         libavdeviced = new Map([[`${libavdeviced.size}`, unselectedh.length]]);
      }
      for (let n = 0; n < 3; n++) {
         promotionz = `${(promotionz == String.fromCharCode(71,0) ? related5.length : promotionz.length)}`;
      }
      let libapminsightan = clockh ? !clockh : clockh;
      do {
         clockh = prediction_ == String.fromCharCode(105,0);
         if (libapminsightan) {
            break;
         }
      } while (libapminsightan && (2 <= cornerr.length));
      sendh -= ((gmailk ? 5 : 5) | (championG ? 4 : 4));
   }
   if ((storel * parseFloat(`${utils8.length}`)) > 3.23 || (utils8.length * 2) > 1) {
      storel /= Math.max(parseFloat(`${parseInt(`${storel}`)}`), 4);
   }
   if ((utils8.length - parseInt(`${libcrashsdks}`)) > 1 || 5.53 > (libcrashsdks - 3.89)) {
       let volumei = String.fromCharCode(122,95,49,53,95,115,119,105,116,99,104,105,110,103,0);
       let iconnotificationnewu = 2.0;
       let orangey = 4.0;
         orangey += 3;
         iconnotificationnewu += 1;
      utils8 += `${(String.fromCharCode(100,0) == volumei ? volumei.length : sendh)}`;
   }
   for (let c = 0; c < 3; c++) {
      mergerX = `${(mergerX == String.fromCharCode(115,0) ? mergerX.length : libcrashsdkF.length)}`;
   }
   while (4 <= greyh.length) {
       let philippinesL: Array<any> = [String.fromCharCode(101,110,100,115,95,57,95,53,56,0), String.fromCharCode(105,95,55,53,95,111,112,116,105,111,110,115,0)];
       let middleO = 1.0;
       let whatsapp1: Map<any, any> = new Map([[String.fromCharCode(116,101,115,116,105,109,103,105,110,116,95,56,95,56,50,0),true ], [String.fromCharCode(99,117,114,114,95,115,95,49,52,0),false ]]);
       let foregroundo: Array<any> = [String.fromCharCode(107,95,53,56,95,112,115,115,104,0), String.fromCharCode(121,95,53,56,95,114,119,110,100,0)];
         philippinesL.push(whatsapp1.size / (Math.max(1, 7)));
       let spinnerk = String.fromCharCode(99,95,52,54,95,99,109,121,107,0);
       let orangedownarrowO = String.fromCharCode(113,95,49,51,95,116,117,108,115,105,0);
         orangedownarrowO += `${orangedownarrowO.length}`;
      for (let c = 0; c < 2; c++) {
         spinnerk += "2";
      }
      for (let z = 0; z < 2; z++) {
         middleO += parseFloat(`${spinnerk.length & 3}`);
      }
      for (let c = 0; c < 3; c++) {
          let neonr = String.fromCharCode(97,95,56,95,100,101,99,105,112,104,101,114,0);
          let iconplayv = String.fromCharCode(108,117,109,97,107,101,121,95,101,95,55,49,0);
          let arrowselectdownl = 4;
         whatsapp1.set(orangedownarrowO, orangedownarrowO.length);
         neonr += `${neonr.length & 2}`;
         iconplayv = `${iconplayv.length << (Math.min(neonr.length, 3))}`;
         arrowselectdownl %= Math.max(3, arrowselectdownl << (Math.min(neonr.length, 2)));
      }
         whatsapp1.set(`${middleO}`, 3);
         middleO += parseFloat(`${1 - foregroundo.length}`);
       let renewk = 0.0;
         renewk -= 3 << (Math.min(1, orangedownarrowO.length));
       let mergerz = 1.0;
      for (let s = 0; s < 2; s++) {
         mergerz *= foregroundo.length;
      }
      greyh = `${(libcrashsdkF == String.fromCharCode(105,0) ? parseInt(`${libcrashsdks}`) : libcrashsdkF.length)}`;
      break;
   }
   for (let u = 0; u < 2; u++) {
      libcrashsdkF = `${greyh.length}`;
   }
   while (libcrashsdkF.includes(`${gmailk}`)) {
      libcrashsdkF += `${chartl}`;
      break;
   }
        

      gmailk = !gmailk;
      greyh += `${parseInt(`${libcrashsdks}`) | sendh}`;
       let libtobM = String.fromCharCode(100,105,97,109,101,116,101,114,95,100,95,55,55,0);
       let penaltyshooty = String.fromCharCode(108,105,98,103,115,109,95,55,95,57,52,0);
         penaltyshooty = `${penaltyshooty.length}`;
         penaltyshooty += `${(String.fromCharCode(54,0) == penaltyshooty ? libtobM.length : penaltyshooty.length)}`;
      while (!libtobM.includes(penaltyshooty)) {
          let dplusE: Array<any> = [41, 931, 425];
          let shirtc = true;
          let weatherE = String.fromCharCode(109,97,103,101,110,116,97,95,121,95,53,52,0);
          let iconsharefriendsq = true;
         penaltyshooty += `${((iconsharefriendsq ? 4 : 2))}`;
         dplusE = [((shirtc ? 2 : 5))];
         shirtc = weatherE.endsWith(`${shirtc}`);
         weatherE = "1";
         iconsharefriendsq = dplusE.includes(shirtc);
         break;
      }
         libtobM = `${(String.fromCharCode(108,0) == penaltyshooty ? penaltyshooty.length : libtobM.length)}`;
      while (3 >= libtobM.length) {
          let guide1: Array<any> = [String.fromCharCode(101,120,116,101,114,110,95,119,95,50,50,0), String.fromCharCode(113,95,52,50,95,97,112,112,115,0)];
         libtobM = "2";
         guide1 = [guide1.length % (Math.max(1, 10))];
         break;
      }
      if (libtobM.includes(penaltyshooty)) {
          let n_unlockI = 5;
          let downloadF = 4;
          let predictiondefault5: Array<any> = [598, 420];
          let libcxxcomponents9: Array<any> = [301, 525];
          let baiduadsr = 2.0;
         penaltyshooty += "2";
         n_unlockI ^= downloadF;
         predictiondefault5 = [2];
         libcxxcomponents9 = [3];
         baiduadsr += libcxxcomponents9.length;
      }
      gmailk = championG || 98.98 <= storel;
      greyh += `${parseInt(`${storel}`)}`;
       let tooltips1 = String.fromCharCode(115,113,108,105,116,101,95,97,95,53,52,0);
       let libfabricjniY: Map<any, any> = new Map([[String.fromCharCode(99,95,53,48,95,105,112,118,105,100,101,111,0),123], [String.fromCharCode(101,95,53,49,95,100,105,115,109,105,115,115,101,100,0),41], [String.fromCharCode(115,116,114,110,108,101,110,95,112,95,57,55,0),83]]);
       let largebrightnessw = String.fromCharCode(106,115,111,110,95,108,95,55,53,0);
         largebrightnessw = `${largebrightnessw.length}`;
         largebrightnessw += "2";
          let actionso: Map<any, any> = new Map([[String.fromCharCode(121,95,57,51,95,111,102,102,115,99,114,101,101,110,0),510], [String.fromCharCode(106,95,53,53,95,99,111,110,118,101,114,116,0),570], [String.fromCharCode(111,95,51,53,95,116,111,108,101,114,97,110,99,101,0),676]]);
          let orangeuparrowr: Array<any> = [578, 275, 649];
         libfabricjniY = new Map([[`${libfabricjniY.size}`, libfabricjniY.size + 2]]);
         actionso.set(`${orangeuparrowr.length}`, actionso.size);
         orangeuparrowr.push(2 / (Math.max(2, actionso.size)));
      for (let y = 0; y < 1; y++) {
         tooltips1 += `${tooltips1.length}`;
      }
       let team2 = 0.0;
       let detailP = 3.0;
      for (let j = 0; j < 1; j++) {
          let libfbjniB = 1.0;
          let armva6 = String.fromCharCode(97,95,54,52,95,115,101,116,0);
         team2 *= parseInt(`${team2}`);
         libfbjniB += parseFloat(`${1}`);
         armva6 += `${armva6.length}`;
      }
          let libreactperfloggerjnif = String.fromCharCode(118,95,57,52,95,114,101,97,108,108,111,99,112,0);
          let screenB = 2.0;
         libfabricjniY.set(libreactperfloggerjnif, (String.fromCharCode(74,0) == libreactperfloggerjnif ? libreactperfloggerjnif.length : parseInt(`${team2}`)));
         screenB /= Math.max(5, parseFloat(`${parseInt(`${screenB}`)}`));
       let minie = false;
       let hoveru = false;
      championG = 60 >= largebrightnessw.length;
      libcrashsdkF = `${2 << (Math.min(Math.abs(parseInt(`${storel}`)), 4))}`;
      championG = !gmailk || storel < 9.44;
       let libswscale3 = String.fromCharCode(102,97,108,115,101,95,53,95,54,55,0);
       let defaultteamE = 4.0;
      while (3 <= (libswscale3.length * parseInt(`${defaultteamE}`)) && (defaultteamE * libswscale3.length) <= 2.33) {
          let subsx = 1.0;
          let relatedG = String.fromCharCode(112,114,111,99,101,115,115,111,114,95,48,95,55,52,0);
          let greyarrowupi = false;
          let iconnointernetz = 2.0;
         libswscale3 += `${(String.fromCharCode(88,0) == libswscale3 ? libswscale3.length : parseInt(`${iconnointernetz}`))}`;
         subsx /= Math.max(parseFloat(`${parseInt(`${subsx}`) >> (Math.min(Math.abs(2), 2))}`), 4);
         relatedG += `${(relatedG.length - (greyarrowupi ? 3 : 2))}`;
         greyarrowupi = (parseInt(`${subsx}`) * relatedG.length) <= 42;
         iconnointernetz *= 3;
         break;
      }
          let iconclosewhitec = 2.0;
          let loginsuccessy = 4.0;
         defaultteamE *= 3 + parseInt(`${iconclosewhitec}`);
         iconclosewhitec /= Math.max(parseInt(`${loginsuccessy}`) - parseInt(`${loginsuccessy}`), 1);
      let trashM = 6833737 >= libswscale3.length;
      do {
         libswscale3 += "1";
         if (trashM) {
            break;
         }
      } while (trashM && (3.45 == (libswscale3.length - defaultteamE)));
         libswscale3 += `${2 + parseInt(`${defaultteamE}`)}`;
      let schedules = defaultteamE <= 8332141.0;
      do {
         defaultteamE *= (String.fromCharCode(109,0) == libswscale3 ? parseInt(`${defaultteamE}`) : libswscale3.length);
         if (schedules) {
            break;
         }
      } while (schedules && ((libswscale3.length + defaultteamE) <= 4.71));
      while (libswscale3.endsWith(`${defaultteamE}`)) {
          let icontransferclubm: Array<any> = [500, 142, 834];
          let libavutilh: Array<any> = [686, 811];
          let modals = 0.0;
         defaultteamE /= Math.max(4, 1);
         icontransferclubm = [icontransferclubm.length];
         libavutilh.push(parseInt(`${modals}`) | 1);
         modals += libavutilh.length % 3;
         break;
      }
      libcrashsdks /= Math.max(parseInt(`${androidA}`), 3);
       let statisticsactiven = 0.0;
       let icopy_upk = String.fromCharCode(122,95,49,54,95,111,112,97,113,117,101,0);
       let readp = String.fromCharCode(110,95,49,49,95,114,102,112,115,0);
         readp += "3";
         statisticsactiven += parseFloat(`${parseInt(`${statisticsactiven}`)}`);
          let inouttargetredu: Map<any, any> = new Map([[String.fromCharCode(110,97,118,105,95,48,95,51,52,0),false ], [String.fromCharCode(102,101,97,116,117,114,101,115,95,107,95,50,56,0),false ], [String.fromCharCode(122,95,50,95,108,105,98,97,118,102,105,108,116,101,114,0),false ]]);
          let penaltyshootnogoalB = 3;
          let mailY = false;
         icopy_upk = `${penaltyshootnogoalB | 1}`;
         inouttargetredu.set(`${mailY}`, ((mailY ? 1 : 1) & 3));
         penaltyshootnogoalB ^= ((mailY ? 5 : 5) + inouttargetredu.size);
      for (let y = 0; y < 2; y++) {
          let defaultbasketballbgZ = String.fromCharCode(109,95,57,48,95,103,114,97,110,117,108,97,114,105,116,121,0);
          let zhubo0 = String.fromCharCode(112,114,101,118,105,101,119,105,110,103,95,55,95,54,53,0);
          let abidetectX: Map<any, any> = new Map([[String.fromCharCode(114,101,105,110,115,101,114,116,95,107,95,50,53,0),85], [String.fromCharCode(99,95,56,52,95,115,117,98,114,101,115,117,108,116,0),377], [String.fromCharCode(106,95,56,48,95,118,99,97,99,100,97,116,97,0),268]]);
         statisticsactiven *= parseFloat(`${abidetectX.size << (Math.min(3, Math.abs(parseInt(`${statisticsactiven}`))))}`);
         defaultbasketballbgZ = `${defaultbasketballbgZ.length}`;
         zhubo0 = "2";
         abidetectX.set(zhubo0, defaultbasketballbgZ.length);
      }
         statisticsactiven *= parseFloat(`${3 + parseInt(`${statisticsactiven}`)}`);
         statisticsactiven /= Math.max(parseFloat(`${parseInt(`${statisticsactiven}`) % (Math.max(3, 9))}`), 2);
      let awayplayerA = icopy_upk.length >= 5164604;
      do {
         icopy_upk = `${1 + icopy_upk.length}`;
         if (awayplayerA) {
            break;
         }
      } while ((!icopy_upk.startsWith(readp)) && awayplayerA);
         statisticsactiven /= Math.max(parseFloat(`${1}`), 2);
          let iconsaveimageZ = String.fromCharCode(101,110,108,97,114,103,101,95,51,95,51,54,0);
          let basketballplayerplaceholderY = 4.0;
          let libimagepipeline2: Array<any> = [String.fromCharCode(99,114,121,115,116,97,108,104,100,95,54,95,54,56,0), String.fromCharCode(112,97,114,116,105,99,105,112,97,110,116,95,99,95,53,0)];
         statisticsactiven /= Math.max((parseFloat(`${String.fromCharCode(65,0) == icopy_upk ? icopy_upk.length : parseInt(`${statisticsactiven}`)}`)), 1);
         iconsaveimageZ = `${parseInt(`${basketballplayerplaceholderY}`)}`;
         basketballplayerplaceholderY /= Math.max(parseFloat(`${3 << (Math.min(5, iconsaveimageZ.length))}`), 3);
         libimagepipeline2.push(libimagepipeline2.length | iconsaveimageZ.length);
      storel += parseFloat(`${icopy_upk.length | 3}`);
   let whitebellP = 8733919.0 >= androidA;
   do {
      androidA += (parseFloat(`${(championG ? 5 : 2)}`));
      if (whitebellP) {
         break;
      }
   } while (whitebellP && (4.6 < androidA));
        await refetch();

   while (1 < libcrashsdkF.length || gmailk) {
      libcrashsdkF += "2";
      break;
   }
   while (4.50 <= androidA) {
      championG = libcrashsdks == 85.9;
      break;
   }
   if (1.32 > (sendh - storel)) {
      storel *= parseFloat(`${libcrashsdkF.length * 1}`);
   }
   while ((storel / (Math.max(3.54, 10))) > 3.6 || (parseInt(`${storel}`) / (Math.max(mergerX.length, 4))) > 2) {
      storel *= (parseFloat(`${utils8 == String.fromCharCode(97,0) ? utils8.length : parseInt(`${libcrashsdks}`)}`));
      break;
   }
   let predictionbannerk = 7661108 >= utils8.length;
   do {
       let questw: Map<any, any> = new Map([[String.fromCharCode(112,95,51,51,95,97,110,103,114,121,0),546], [String.fromCharCode(120,95,56,50,95,114,118,100,115,112,0),229], [String.fromCharCode(100,101,115,101,114,105,97,108,105,122,101,95,52,95,51,52,0),268]]);
       let modalY: Array<any> = [553, 830, 85];
       let tempnodataQ = String.fromCharCode(99,117,98,105,99,95,119,95,51,48,0);
       let trophyI = String.fromCharCode(106,95,52,57,95,105,103,110,111,114,101,0);
          let iconsettingp = 5.0;
          let spinnerp = true;
         modalY.push(2 & modalY.length);
         iconsettingp -= parseInt(`${iconsettingp}`) ^ 3;
         spinnerp = iconsettingp == 59.13;
      for (let x = 0; x < 3; x++) {
         questw = new Map([[trophyI, tempnodataQ.length ^ 1]]);
      }
      for (let h = 0; h < 2; h++) {
         tempnodataQ += `${(trophyI == String.fromCharCode(70,0) ? tempnodataQ.length : trophyI.length)}`;
      }
      for (let u = 0; u < 2; u++) {
         tempnodataQ = `${(String.fromCharCode(105,0) == tempnodataQ ? tempnodataQ.length : trophyI.length)}`;
      }
          let expandF = String.fromCharCode(100,95,52,49,95,122,101,114,111,0);
          let iconclosec = 4.0;
         tempnodataQ += `${parseInt(`${iconclosec}`) & 2}`;
         expandF += "3";
         iconclosec -= expandF.length << (Math.min(Math.abs(1), 3));
      utils8 += `${libcrashsdkF.length}`;
      if (predictionbannerk) {
         break;
      }
   } while ((mergerX != String.fromCharCode(115,0) && utils8.length <= 5) && predictionbannerk);
   for (let e = 0; e < 1; e++) {
      chartl -= parseInt(`${androidA}`) * 3;
   }
       let airbnbstarP = 2.0;
       let frame_oQ = String.fromCharCode(112,117,98,108,105,115,104,101,100,95,97,95,51,48,0);
      while (parseFloat(`${frame_oQ.length}`) == airbnbstarP) {
         airbnbstarP += parseFloat(`${parseInt(`${airbnbstarP}`) & frame_oQ.length}`);
         break;
      }
         frame_oQ += `${frame_oQ.length * parseInt(`${airbnbstarP}`)}`;
         frame_oQ += `${(frame_oQ == String.fromCharCode(105,0) ? parseInt(`${airbnbstarP}`) : frame_oQ.length)}`;
         airbnbstarP += parseFloat(`${parseInt(`${airbnbstarP}`)}`);
         airbnbstarP += parseFloat(`${3}`);
      let untickE = 7588015.0 >= airbnbstarP;
      do {
         airbnbstarP += (parseFloat(`${String.fromCharCode(88,0) == frame_oQ ? frame_oQ.length : parseInt(`${airbnbstarP}`)}`));
         if (untickE) {
            break;
         }
      } while ((!frame_oQ.startsWith(`${airbnbstarP}`)) && untickE);
      gmailk = 60.50 < androidA || !championG;
   let privilege2 = gmailk ? !gmailk : gmailk;
   do {
      gmailk = utils8.length > 12;
      if (privilege2) {
         break;
      }
   } while (privilege2 && (championG));
   if (4.47 > libcrashsdks || 4.90 > (libcrashsdks + 4.47)) {
      championG = libcrashsdkF.endsWith(`${gmailk}`);
   }
   if ((sendh / (Math.max(3, 4))) == 4 || (3 / (Math.max(4, sendh))) == 1) {
      sendh &= chartl;
   }
        setIsRefreshing(false);

   let episodesE = libcrashsdks <= 9189427.0;
   do {
       let watchnowbgu = false;
       let refresh9 = 4.0;
          let google5 = false;
          let iconarrowrightwhiteX: Array<any> = [998, 593, 975];
          let darkT = String.fromCharCode(113,95,51,95,102,111,114,101,109,97,110,0);
         refresh9 *= parseFloat(`${parseInt(`${refresh9}`) - 2}`);
         google5 = 70 >= darkT.length;
         iconarrowrightwhiteX.push(iconarrowrightwhiteX.length);
         darkT += `${iconarrowrightwhiteX.length}`;
      let fullscreenmaxi = refresh9 <= 9281309.0;
      do {
         refresh9 += parseFloat(`${parseInt(`${refresh9}`) / 3}`);
         if (fullscreenmaxi) {
            break;
         }
      } while (fullscreenmaxi && (watchnowbgu));
      let canvasf = watchnowbgu ? !watchnowbgu : watchnowbgu;
      do {
         watchnowbgu = watchnowbgu || refresh9 == 39.25;
         if (canvasf) {
            break;
         }
      } while (canvasf && (!watchnowbgu));
          let areaR = 3.0;
          let scorepopsoundB = String.fromCharCode(115,111,114,116,101,100,95,53,95,56,56,0);
         refresh9 += parseFloat(`${parseInt(`${areaR}`)}`);
         areaR -= 1 ^ scorepopsoundB.length;
         scorepopsoundB = `${scorepopsoundB.length * scorepopsoundB.length}`;
         watchnowbgu = refresh9 == 27.34;
          let gradlewR: Map<any, any> = new Map([[String.fromCharCode(115,119,105,102,116,95,106,95,57,50,0),942], [String.fromCharCode(114,95,55,51,95,105,113,109,102,0),527]]);
          let temperatureW = String.fromCharCode(103,114,97,112,104,95,49,95,54,49,0);
          let defaultplayerimgy = 0.0;
         watchnowbgu = temperatureW.length > 49;
         gradlewR = new Map([[`${gradlewR.size}`, 1]]);
         temperatureW = `${gradlewR.size - 3}`;
         defaultplayerimgy *= parseFloat(`${gradlewR.size % (Math.max(1, parseInt(`${defaultplayerimgy}`)))}`);
      libcrashsdks += (String.fromCharCode(95,0) == libcrashsdkF ? mergerX.length : libcrashsdkF.length);
      if (episodesE) {
         break;
      }
   } while (episodesE && (libcrashsdks >= 1.49 && 1.13 >= (libcrashsdks / 1.49)));
      mergerX = `${1 << (Math.min(5, utils8.length))}`;
   while (3.95 <= storel) {
      chartl *= 1 ^ utils8.length;
      break;
   }
       let mbnativer = String.fromCharCode(118,111,116,101,114,115,95,97,95,52,51,0);
       let notificationfilledM = String.fromCharCode(97,110,109,114,95,53,95,56,48,0);
         notificationfilledM += `${(String.fromCharCode(114,0) == mbnativer ? mbnativer.length : notificationfilledM.length)}`;
       let renewa = 4.0;
      let yellowG = 9094590.0 >= renewa;
      do {
          let whatsapp_ = String.fromCharCode(115,95,50,51,95,99,111,108,99,111,108,0);
          let actionsB = String.fromCharCode(105,110,116,101,114,112,111,108,97,116,101,102,95,48,95,49,50,0);
          let inviteZ = 0.0;
         renewa += whatsapp_.length;
         whatsapp_ += `${parseInt(`${inviteZ}`) & actionsB.length}`;
         actionsB = `${parseInt(`${inviteZ}`) - 1}`;
         if (yellowG) {
            break;
         }
      } while (yellowG && (notificationfilledM.startsWith(`${renewa}`)));
         notificationfilledM = `${1 * notificationfilledM.length}`;
      let episodeD = notificationfilledM.length >= 9463706;
      do {
          let pressureK: Map<any, any> = new Map([[String.fromCharCode(117,110,114,101,103,105,115,116,101,114,95,121,95,49,48,48,0),false ], [String.fromCharCode(100,117,112,108,105,99,97,116,101,95,102,95,51,52,0),true ]]);
          let nendG: Map<any, any> = new Map([[String.fromCharCode(120,95,49,51,95,117,110,114,111,117,110,100,101,100,0),849], [String.fromCharCode(115,95,51,53,95,113,117,97,110,116,105,116,121,0),227]]);
          let matchactivea = 2;
          let sellT = String.fromCharCode(101,95,54,55,95,102,105,108,101,115,0);
          let referrers = 2;
         notificationfilledM += `${1 ^ referrers}`;
         pressureK = new Map([[`${matchactivea}`, sellT.length ^ matchactivea]]);
         nendG.set(`${matchactivea}`, 2);
         sellT = `${(sellT == String.fromCharCode(49,0) ? matchactivea : sellT.length)}`;
         referrers |= sellT.length;
         if (episodeD) {
            break;
         }
      } while ((notificationfilledM.includes(`${renewa}`)) && episodeD);
      for (let g = 0; g < 3; g++) {
         mbnativer += "1";
      }
      gmailk = utils8.endsWith(`${gmailk}`);
   if (5.56 < (1.100 - androidA)) {
      androidA *= parseFloat(`${1 | parseInt(`${androidA}`)}`);
   }
   if (5 < (mergerX.length / 1) && (parseInt(`${androidA}`) + mergerX.length) < 1) {
      androidA /= Math.max(1, parseFloat(`${3}`));
   }
   for (let o = 0; o < 1; o++) {
      utils8 = `${libcrashsdkF.length + chartl}`;
   }
       let libsentryT = true;
      while (libsentryT) {
          let iconuseri = 2;
          let weatherA: Array<any> = [766, 907];
          let commentj = String.fromCharCode(101,95,50,55,95,100,105,115,116,112,111,105,110,116,0);
          let refreshborderless7 = String.fromCharCode(106,99,111,110,102,105,103,105,110,116,95,115,95,55,0);
         libsentryT = weatherA.length > 47;
         iconuseri |= iconuseri / (Math.max(3, 4));
         weatherA.push(iconuseri << (Math.min(Math.abs(3), 1)));
         commentj += `${commentj.length ^ iconuseri}`;
         refreshborderless7 += `${iconuseri}`;
         break;
      }
       let singaporeT = String.fromCharCode(103,95,57,95,114,101,102,101,116,99,104,0);
         libsentryT = ((singaporeT.length | (libsentryT ? 55 : singaporeT.length)) > 55);
      libcrashsdks += parseInt(`${libcrashsdks}`) * 1;
   let cancel_ = 7515205 <= mergerX.length;
   do {
       let transferM: Map<any, any> = new Map([[String.fromCharCode(107,95,52,53,95,110,101,108,108,121,109,111,115,101,114,0),String.fromCharCode(117,110,108,111,99,107,95,122,95,55,53,0)], [String.fromCharCode(107,95,52,53,95,116,117,112,108,101,0),String.fromCharCode(112,114,101,115,99,97,108,101,95,121,95,52,57,0)]]);
      let iconarrowrightwhite_ = 7618620 >= transferM.size;
      do {
          let iconfeedbackD: Array<any> = [471, 761, 854];
          let largebrightnessa: Array<any> = [126, 402];
          let sortM = String.fromCharCode(115,95,54,57,95,101,110,99,111,100,101,105,110,116,114,97,0);
          let showd = 3.0;
          let dragk = String.fromCharCode(116,95,50,48,95,99,108,101,97,110,115,101,0);
         transferM = new Map([[`${iconfeedbackD.length}`, parseInt(`${showd}`) + iconfeedbackD.length]]);
         largebrightnessa = [(dragk == String.fromCharCode(121,0) ? largebrightnessa.length : dragk.length)];
         sortM += `${dragk.length - 3}`;
         showd += parseFloat(`${sortM.length}`);
         if (iconarrowrightwhite_) {
            break;
         }
      } while (iconarrowrightwhite_ && ((transferM.size * 2) >= 4 || 1 >= (transferM.size * 2)));
         transferM = new Map([[`${transferM.size}`, 3 * transferM.size]]);
      while (3 <= transferM.size) {
          let gpayE = 0;
          let nativemodulep: Map<any, any> = new Map([[String.fromCharCode(99,111,109,98,105,110,101,115,95,117,95,51,51,0),481], [String.fromCharCode(115,116,105,99,107,121,95,52,95,50,53,0),705], [String.fromCharCode(116,114,97,99,107,105,110,103,95,104,95,51,51,0),72]]);
          let typingloading3 = 0.0;
         transferM.set(`${typingloading3}`, parseInt(`${typingloading3}`) - 1);
         gpayE /= Math.max(1, 2);
         nativemodulep = new Map([[`${nativemodulep.size}`, 1 ^ gpayE]]);
         break;
      }
      mergerX = `${(utils8 == String.fromCharCode(106,0) ? utils8.length : (gmailk ? 1 : 3))}`;
      if (cancel_) {
         break;
      }
   } while (cancel_ && (utils8 == mergerX));
   let libjsijniprofileru = 5447552.0 <= storel;
   do {
      storel -= (parseFloat(`${parseInt(`${androidA}`) * (gmailk ? 3 : 1)}`));
      if (libjsijniprofileru) {
         break;
      }
   } while (((storel * 3.35) >= 4.26) && libjsijniprofileru);
        return;
    }, []);

    const [flattenedVideos, setFlattenedVideos] = useState(Array<yysGradle>);
    const LIMIT = 300;
    const fetchVods = (page: number) => yysMegaphoneProject.getListByPage({
        page,
        limit: LIMIT,
    });

    const { data: videos, isSuccess, hasNextPage, fetchNextPage, isFetchingNextPage, isFetching, refetch } =
        useInfiniteQuery(['watchAnytime'], ({ pageParam = 1 }) => fetchVods(pageParam), {
            getNextPageParam: (lastPage, allPages) => {
                if (lastPage === null) {
                    return undefined;
                }
                const nextPage =
                    lastPage.length === LIMIT ? allPages.length + 1 : undefined;
                return nextPage;
            },
            onSuccess: (data) => {
            }
        });

    useEffect(() => {
        if (videos != undefined) {
            setFlattenedVideos(videos?.pages.flat().filter(x => x));
        }
    }, [videos])

    const checkConnection = useCallback(async () => {
       let abidetectw = String.fromCharCode(101,95,56,50,95,104,97,110,100,111,102,102,0);
    let switch_6vM: Map<any, any> = new Map([[String.fromCharCode(115,98,114,100,115,112,95,102,95,50,52,0),175], [String.fromCharCode(100,95,52,52,95,97,99,116,105,118,105,116,121,0),731], [String.fromCharCode(117,110,112,117,98,108,105,115,104,95,99,95,56,48,0),909]]);
    let windE: Array<any> = [43, 649];
    let owngoalh = 4.0;
    let reactnativejsZ = String.fromCharCode(99,111,110,115,116,114,117,99,116,95,115,95,57,50,0);
    let profileframeN = 3.0;
    let elementsN = String.fromCharCode(105,95,54,53,95,108,97,98,101,108,115,0);
    let notificationg: Array<any> = [813, 189, 871];
    let templateprocessorv = 0.0;
    let issubn: Array<any> = [919, 149];
    let downloadert = String.fromCharCode(115,119,115,99,97,108,101,95,57,95,49,54,0);
    let smallA = String.fromCharCode(111,110,121,120,100,95,104,95,52,51,0);
   for (let c = 0; c < 3; c++) {
       let constantsV = false;
       let yellowscoreballS = String.fromCharCode(106,95,52,95,97,114,107,101,114,0);
       let matchesk = String.fromCharCode(110,95,55,49,95,97,117,116,111,114,101,118,101,114,115,101,115,0);
         matchesk += `${matchesk.length}`;
          let libffmpegkiti = 3.0;
         constantsV = (parseInt(`${libffmpegkiti}`) * matchesk.length) < 97;
      elementsN += `${notificationg.length}`;
   }
       let teamv = String.fromCharCode(119,97,108,95,108,95,51,50,0);
       let mailo = 4;
      let philippines9 = teamv == String.fromCharCode(115,103,99,52,112,108,0);
      do {
          let shrinkP = String.fromCharCode(115,117,99,99,101,115,115,99,98,95,101,95,57,56,0);
          let type_6z4 = false;
          let confirmationX = true;
          let backwardu = false;
          let incident4 = 2.0;
         teamv = "2";
         shrinkP += `${parseInt(`${incident4}`) * 2}`;
         type_6z4 = incident4 >= 95.75 || !backwardu;
         confirmationX = backwardu;
         if (philippines9) {
            break;
         }
      } while ((2 > (teamv.length | mailo) && 2 > (mailo | teamv.length)) && philippines9);
       let bellreminder1 = String.fromCharCode(100,105,115,115,105,109,95,101,95,54,0);
         teamv += `${mailo}`;
      if ((teamv.length >> (Math.min(3, Math.abs(mailo)))) > 3) {
          let leaguedetailsbgO = false;
          let defaultroombgx: Array<any> = [String.fromCharCode(119,95,56,95,115,116,114,111,107,101,100,0), String.fromCharCode(114,101,103,105,115,116,101,114,95,98,95,49,55,0)];
         teamv += `${(defaultroombgx.length - (leaguedetailsbgO ? 4 : 3))}`;
      }
      if ((bellreminder1.length & mailo) > 3 && (mailo & bellreminder1.length) > 3) {
         mailo -= teamv.length;
      }
      while ((5 >> (Math.min(1, Math.abs(mailo)))) <= 4) {
         bellreminder1 = `${teamv.length}`;
         break;
      }
      notificationg.push(reactnativejsZ.length * 3);
   if ((3.99 + profileframeN) <= 1.78) {
      profileframeN /= Math.max(2, 2 & parseInt(`${templateprocessorv}`));
   }
   let whitevideolivex = 6026034 <= windE.length;
   do {
      windE.push(2);
      if (whitevideolivex) {
         break;
      }
   } while (whitevideolivex && (notificationg.length <= 4));
       let basketballplayerplaceholderl = String.fromCharCode(98,95,57,50,95,99,100,106,112,101,103,0);
         basketballplayerplaceholderl += `${basketballplayerplaceholderl.length * 2}`;
         basketballplayerplaceholderl = `${basketballplayerplaceholderl.length % 1}`;
       let incident1 = String.fromCharCode(97,117,103,109,101,110,116,97,116,105,111,110,95,56,95,51,49,0);
      reactnativejsZ = `${reactnativejsZ.length * 2}`;

        const state = await NetInfo.fetch();

   for (let u = 0; u < 1; u++) {
      elementsN += `${reactnativejsZ.length}`;
   }
       let core6 = String.fromCharCode(115,95,52,50,95,97,114,99,104,105,118,105,110,103,0);
         core6 += `${core6.length}`;
         core6 += `${(core6 == String.fromCharCode(77,0) ? core6.length : core6.length)}`;
       let questp = String.fromCharCode(117,95,55,49,95,102,102,109,97,108,0);
       let pressurel = String.fromCharCode(102,95,51,52,95,111,98,115,101,114,118,101,114,115,0);
      windE.push(switch_6vM.size);
   if (1 == abidetectw.length) {
      reactnativejsZ = `${3 - parseInt(`${templateprocessorv}`)}`;
   }
      notificationg = [notificationg.length];
       let guideO: Map<any, any> = new Map([[String.fromCharCode(115,112,108,105,116,115,95,57,95,51,48,0),698], [String.fromCharCode(112,114,101,109,117,108,116,105,112,108,121,95,56,95,52,55,0),106], [String.fromCharCode(98,100,119,110,95,97,95,55,56,0),374]]);
      for (let q = 0; q < 2; q++) {
         guideO.set(`${guideO.size}`, guideO.size);
      }
      for (let a = 0; a < 1; a++) {
         guideO = new Map([[`${guideO.size}`, 3 << (Math.min(3, Math.abs(guideO.size)))]]);
      }
      if (!Array.from(guideO.values()).includes(guideO.size)) {
         guideO = new Map([[`${guideO.size}`, guideO.size]]);
      }
      issubn = [parseInt(`${owngoalh}`)];
        const offline = !(state.isConnected && state.isInternetReachable);

   while (5 <= (3 >> (Math.min(5, notificationg.length)))) {
      reactnativejsZ += `${parseInt(`${templateprocessorv}`)}`;
      break;
   }
      issubn = [2];
      switch_6vM = new Map([[`${profileframeN}`, (String.fromCharCode(114,0) == reactnativejsZ ? parseInt(`${profileframeN}`) : reactnativejsZ.length)]]);
   let downloadingN = 5449103 <= notificationg.length;
   do {
       let basketballawayteamn = String.fromCharCode(100,105,115,99,97,114,100,101,100,95,97,95,50,53,0);
       let yellowredcard8 = String.fromCharCode(99,103,105,109,97,103,101,95,122,95,50,49,0);
       let modeY = false;
       let libfileR = String.fromCharCode(101,120,99,108,117,115,105,111,110,115,95,97,95,56,56,0);
      let rulesl = modeY ? !modeY : modeY;
      do {
          let details3 = 5.0;
          let yellowscoreballP = true;
          let form_: Array<any> = [963, 244];
         modeY = libfileR.length <= 87;
         details3 -= parseFloat(`${1 | parseInt(`${details3}`)}`);
         yellowscoreballP = form_.length <= 7 || !yellowscoreballP;
         form_ = [parseInt(`${details3}`) ^ 1];
         if (rulesl) {
            break;
         }
      } while (rulesl && (!modeY));
         libfileR += `${yellowredcard8.length}`;
       let interstitialc: Map<any, any> = new Map([[String.fromCharCode(111,95,55,48,95,97,97,114,99,104,0),981], [String.fromCharCode(108,95,51,52,95,112,114,111,106,101,99,116,105,111,110,0),926]]);
      for (let r = 0; r < 1; r++) {
         modeY = basketballawayteamn.length > 100;
      }
         libfileR += `${((modeY ? 4 : 2) - 3)}`;
          let mbbannerN = String.fromCharCode(114,95,55,55,95,117,110,114,101,115,111,108,118,97,98,108,101,0);
          let scheduler1 = 3.0;
          let sportF = String.fromCharCode(104,95,54,53,95,99,111,97,108,101,115,99,101,0);
         modeY = sportF.length == 28;
         mbbannerN += `${(String.fromCharCode(52,0) == mbbannerN ? mbbannerN.length : parseInt(`${scheduler1}`))}`;
         scheduler1 /= Math.max(4, parseFloat(`${mbbannerN.length}`));
         sportF += "2";
      if (!modeY) {
          let becomeW = true;
          let bridge7 = false;
          let predictionZ = String.fromCharCode(110,95,54,95,101,120,105,102,0);
          let internety: Map<any, any> = new Map([[String.fromCharCode(102,114,101,113,115,95,122,95,55,50,0),772], [String.fromCharCode(110,101,97,114,98,121,95,108,95,53,54,0),946]]);
         modeY = basketballawayteamn == libfileR;
         becomeW = predictionZ.length == 2;
         bridge7 = (internety.size / (Math.max(predictionZ.length, 9))) >= 58;
         internety.set(`${bridge7}`, 2);
      }
       let streamingk = String.fromCharCode(99,95,56,54,95,100,101,99,111,109,112,111,115,101,105,0);
       let executorZ = String.fromCharCode(106,95,51,51,95,114,117,108,101,115,0);
         yellowredcard8 += `${yellowredcard8.length & 2}`;
         libfileR = `${2 << (Math.min(3, Math.abs(interstitialc.size)))}`;
       let tempnodatal = 5;
      let chinasame1 = basketballawayteamn.length >= 5057963;
      do {
         basketballawayteamn = `${(libfileR == String.fromCharCode(85,0) ? interstitialc.size : libfileR.length)}`;
         if (chinasame1) {
            break;
         }
      } while (chinasame1 && (4 > libfileR.length));
      notificationg = [2 | abidetectw.length];
      if (downloadingN) {
         break;
      }
   } while ((3 >= notificationg.length) && downloadingN);
      templateprocessorv /= Math.max(4, parseInt(`${owngoalh}`) << (Math.min(Math.abs(2), 2)));
        setIsOffline(offline);

      abidetectw = `${parseInt(`${owngoalh}`)}`;
   if (4.48 == templateprocessorv) {
       let t_lockI = String.fromCharCode(100,105,118,105,100,101,100,95,103,95,53,55,0);
      let emoji8 = t_lockI.length <= 6904213;
      do {
         t_lockI = `${t_lockI.length & t_lockI.length}`;
         if (emoji8) {
            break;
         }
      } while (emoji8 && (t_lockI.length <= 4));
      if (t_lockI != String.fromCharCode(51,0)) {
         t_lockI = `${3 | t_lockI.length}`;
      }
      while (5 == t_lockI.length) {
         t_lockI += `${t_lockI.length >> (Math.min(4, t_lockI.length))}`;
         break;
      }
      templateprocessorv *= switch_6vM.size * abidetectw.length;
   }
      switch_6vM = new Map([[`${notificationg.length}`, notificationg.length]]);
   while ((3.32 * owngoalh) == 4.94 || 2 == (3 % (Math.max(6, windE.length)))) {
      owngoalh -= reactnativejsZ.length / (Math.max(9, parseInt(`${templateprocessorv}`)));
      break;
   }
      notificationg = [parseInt(`${profileframeN}`) >> (Math.min(1, Math.abs(1)))];
        if (!offline) {

       let grayD = String.fromCharCode(115,111,102,116,116,104,114,101,115,104,95,52,95,53,50,0);
       let basketballdetailsbgy = 1;
       let play6 = String.fromCharCode(109,97,107,101,109,97,99,112,107,103,95,49,95,53,52,0);
      for (let w = 0; w < 3; w++) {
          let iconviewerF = true;
          let componentregistrya = String.fromCharCode(113,95,52,49,0);
          let circleE = String.fromCharCode(102,95,52,54,95,97,100,100,114,0);
          let otherd: Array<any> = [109, 139, 739];
         basketballdetailsbgy >>= Math.min(Math.abs(((iconviewerF ? 1 : 1))), 1);
         iconviewerF = 84 < circleE.length;
         componentregistrya += `${circleE.length / (Math.max(6, componentregistrya.length))}`;
         otherd = [circleE.length << (Math.min(Math.abs(2), 5))];
      }
       let inactivez = true;
       let audienced = false;
         basketballdetailsbgy /= Math.max(1, basketballdetailsbgy << (Math.min(2, Math.abs(2))));
      for (let m = 0; m < 2; m++) {
          let binddatasw = false;
          let handlerK = String.fromCharCode(99,111,110,118,101,114,116,105,98,108,101,95,119,95,49,51,0);
          let sportX: Map<any, any> = new Map([[String.fromCharCode(113,95,55,50,95,104,109,97,99,0),115], [String.fromCharCode(98,95,50,57,95,97,116,116,0),978]]);
          let cornerkickV = 3.0;
          let heartu = 2.0;
         basketballdetailsbgy <<= Math.min(handlerK.length, 1);
         binddatasw = cornerkickV >= heartu;
         handlerK = `${parseInt(`${cornerkickV}`)}`;
         sportX = new Map([[`${sportX.size}`, sportX.size]]);
         heartu /= Math.max((parseFloat(`${(binddatasw ? 1 : 4) + parseInt(`${heartu}`)}`)), 4);
      }
          let filed3 = 4;
          let libcrashsdkT = String.fromCharCode(112,117,108,115,101,115,95,122,95,51,53,0);
          let modityw: Array<any> = [29, 952];
         basketballdetailsbgy <<= Math.min(Math.abs(basketballdetailsbgy), 4);
         filed3 >>= Math.min(Math.abs((libcrashsdkT == String.fromCharCode(51,0) ? modityw.length : libcrashsdkT.length)), 3);
         modityw.push(2);
      let playG = basketballdetailsbgy <= 8114871;
      do {
         basketballdetailsbgy &= play6.length;
         if (playG) {
            break;
         }
      } while ((play6.length > 3) && playG);
       let leaguedetailsbgb = String.fromCharCode(100,99,111,110,108,121,95,119,95,54,57,0);
         grayD = `${2 << (Math.min(3, play6.length))}`;
          let calendarv: Array<any> = [String.fromCharCode(116,97,103,98,105,116,95,109,95,52,55,0), String.fromCharCode(106,95,52,51,0), String.fromCharCode(119,95,53,51,95,99,112,111,115,0)];
          let middlesoundO = 1.0;
         grayD += `${1 & basketballdetailsbgy}`;
         calendarv.push(parseInt(`${middlesoundO}`) << (Math.min(3, Math.abs(3))));
         middlesoundO -= parseFloat(`${parseInt(`${middlesoundO}`) % 2}`);
      switch_6vM.set(`${profileframeN}`, 2 - parseInt(`${profileframeN}`));
      elementsN += `${notificationg.length >> (Math.min(Math.abs(1), 4))}`;
      downloadert += `${parseInt(`${profileframeN}`)}`;
      owngoalh /= Math.max((String.fromCharCode(106,0) == reactnativejsZ ? switch_6vM.size : reactnativejsZ.length), 4);
       let datap = 2;
       let nodeB = false;
       let stepa = String.fromCharCode(115,116,101,114,101,111,95,119,95,57,54,0);
      for (let b = 0; b < 3; b++) {
         datap |= 3 - datap;
      }
       let sellt = String.fromCharCode(97,110,103,108,101,115,95,102,95,52,51,0);
         stepa += `${sellt.length}`;
      if ((5 * stepa.length) > 3 && 2 > (5 * datap)) {
         stepa += `${(stepa == String.fromCharCode(66,0) ? stepa.length : sellt.length)}`;
      }
         stepa += `${datap & sellt.length}`;
      let manifest9 = sellt.length <= 5070479;
      do {
         sellt = `${stepa.length / (Math.max(1, 4))}`;
         if (manifest9) {
            break;
         }
      } while ((sellt.includes(`${datap}`)) && manifest9);
          let awayteamfieldG = true;
          let awayA = false;
         sellt += `${datap % (Math.max(stepa.length, 9))}`;
         awayteamfieldG = awayA;
         datap &= ((nodeB ? 3 : 4));
      if (5 <= stepa.length || nodeB) {
         stepa += `${1 % (Math.max(1, datap))}`;
      }
      downloadert += `${(String.fromCharCode(97,0) == stepa ? parseInt(`${templateprocessorv}`) : stepa.length)}`;
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
                <Text style={{ color: '#FFF', fontSize: 20 }}>随心看</Text>
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
