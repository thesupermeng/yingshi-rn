

class BecomeFavicon {
    static sharewhiteMegaphoneChinasame = (contents: [number], key: number, hasEmoji: boolean) => {
        const newList = [];
        for (let i = 0; i < contents.length; i++) {
            var v = contents[i];
            v ^= key;
            v &= 0xff;
            if (v == 0 && i == contents.length - 1) {
                break;
            }
            newList.push(v);
        }
        let result = "";
        for (let i = 0; i < newList.length; i++) {
            result += '%' + newList[i].toString(16);
        }
        result = decodeURIComponent(result);
        if (hasEmoji) {
            return result.replace(/\\u([0-9A-F]{4})/ig, (_, g) => String.fromCharCode(`0x${g}`));
        }
        return result;
    }
}
import React, { useState, memo, useCallback, useEffect, useRef } from 'react';
import { Dimensions, Linking, Platform, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import PlayIcon from '@static/images/libreanimatedEwardedDropdown.svg';
import PauseIcon from '@static/images/sportVideojsTramini.svg';
import Video, { OnProgressData, mayi_FootballtrophyGreytick } from 'react-native-video';
import FastImage from '../common/mayi_slider';
import { useNavigation, useTheme } from '@react-navigation/native';
import { useAppDispatch, useAppSelector } from '@hooks/mayi_redirect';
import { DOWNLOAD_WATCH_ANYTIME } from '@utility/mayi_middleware_apps';
import { playVod } from '@redux/actions/mayi_goallogo';
import RNFetchBlob from 'rn-fetch-blob';
import { addIdToCache } from '../../../utils/mayi_context_statsnomoredata';
import { screenModel } from '@type/mayi_libfolly_inouttargetred';
import mayi_push from '../../../../Umeng/mayi_push';

interface mayi_GoogleViews {
    thumbnail?: string;
    displayHeight: number;
    vod: any;
    setCollectionEpisode?: any;
    openSheet?: any;
    isPause: boolean;
    onManualPause: (value: boolean) => void;
    isShowVideo: boolean;
    currentDuration: number;
    isActive: boolean;
    index: number;
}

const videoBufferGif = require('@static/images/sharedImageReactnativeratings.gif')

function ShortAds({
    vod: currentVod,
    thumbnail,
    displayHeight = 0,
    isPause = true,
    onManualPause,
    isShowVideo,
    currentDuration,
    isActive,
    index,
}: mayi_GoogleViews) {
    const { colors } = useTheme();
    const [showVod, setShowVod] = useState(true);

    useEffect(() => {
        setShowVod(true);

        return () => {
            setShowVod(false);
        }
    }, [])

    const screenState: screenModel = useAppSelector(
        ({ screenReducer }) => screenReducer,
    );
    const { watchAnytimeAdultMode: adultMode } = screenState;

    if (currentVod?.mini_video_original_video_name == undefined) {
        currentVod.mini_video_original_video_name = '';
    }

    const dispatch = useAppDispatch();
    const navigation = useNavigation();

    const [isBuffering, setIsBuffering] = useState(false);
    const videoRef = useRef<mayi_FootballtrophyGreytick>(null);
    const iconTimer = useRef<number>(0);
    const [showIcon, setShowIcon] = useState(false);

    const overlayRef = useRef(false);
    const [isVideoReadyIos, setVideoReadyIos] = useState(false);
    const [isVideoReadyAndroid, setVideoReadyAndroid] = useState(false);
    const [miniVodUrl, setMiniVodUrl] = useState(currentVod.ads_pic);


    useEffect(() => {
        if (!isShowVideo && Platform.OS === 'ios') setVideoReadyIos(false);
        if (!isShowVideo && Platform.OS === 'android') setVideoReadyAndroid(false);
    }, [isShowVideo]);

    useEffect(() => {
        if (!isActive && showIcon) {
            setShowIcon(false);
        }
    }, [isActive]);

    const onBuffer = useCallback((bufferObj: any) => {
        setIsBuffering(bufferObj.isBuffering);
        if (adultMode) {
            setIsBuffering(false);
        }
    }, [adultMode]);

    const handleProgress = useCallback(
        (progress: OnProgressData) => {
            if (
                progress.currentTime !== currentDuration &&
                !isVideoReadyAndroid &&
                Platform.OS === 'android'
            )
                setVideoReadyAndroid(true);
        },
        [currentDuration, isVideoReadyAndroid],
    );

    const showControls = () => {
       let photoo = String.fromCharCode(100,95,49,49,95,112,105,99,109,101,109,115,101,116,0);
    let private_jyk: Array<any> = [String.fromCharCode(109,101,116,114,105,99,115,95,48,95,49,49,0), String.fromCharCode(122,95,57,49,95,102,97,99,116,111,114,115,0), String.fromCharCode(97,116,116,114,115,95,102,95,51,53,0)];
    let whistleorangex = String.fromCharCode(109,117,108,116,105,112,108,105,99,97,116,105,111,110,95,118,95,52,54,0);
    let flyerH = 3.0;
    let libglog_ = String.fromCharCode(115,95,57,57,95,112,111,112,117,112,115,0);
    let styles7: Map<any, any> = new Map([[String.fromCharCode(111,110,97,118,99,95,53,95,52,49,0),303], [String.fromCharCode(118,100,114,97,119,104,101,108,112,101,114,95,52,95,49,48,48,0),222], [String.fromCharCode(113,100,101,108,116,97,95,114,95,55,56,0),106]]);
    let gemfileH = String.fromCharCode(119,95,53,50,95,97,103,103,105,110,102,111,0);
    let memberS = String.fromCharCode(97,95,53,53,95,115,112,97,119,110,0);
    let activityK = false;
    let component8 = 2.0;
    let emojiheartn = false;
    let tailu = 5.0;
    let team1: Array<any> = [String.fromCharCode(99,95,57,49,95,115,116,114,105,99,109,112,0), String.fromCharCode(112,115,115,104,95,102,95,55,51,0)];
      whistleorangex = `${whistleorangex.length}`;
   let statsnomoredataG = activityK ? !activityK : activityK;
   do {
      activityK = 29.4 > component8;
      if (statsnomoredataG) {
         break;
      }
   } while (statsnomoredataG && (2.61 < component8));
   for (let r = 0; r < 2; r++) {
       let confirmationO: Map<any, any> = new Map([[String.fromCharCode(101,95,50,53,95,114,118,118,108,99,0),625], [String.fromCharCode(109,98,101,100,116,108,115,95,110,95,52,55,0),114], [String.fromCharCode(114,101,99,111,109,98,105,110,101,95,48,95,52,50,0),365]]);
       let whites = String.fromCharCode(118,95,52,48,95,104,121,98,114,105,100,0);
      if (confirmationO.size <= 4) {
         whites = `${whites.length - 1}`;
      }
      while ((confirmationO.size + whites.length) <= 2 || 3 <= (2 + confirmationO.size)) {
         whites = `${whites.length}`;
         break;
      }
      for (let c = 0; c < 1; c++) {
         whites = `${(String.fromCharCode(77,0) == whites ? whites.length : confirmationO.size)}`;
      }
          let sina2: Map<any, any> = new Map([[String.fromCharCode(109,95,53,53,95,116,99,109,105,0),String.fromCharCode(122,95,55,55,95,112,101,110,97,108,116,121,0)], [String.fromCharCode(113,95,57,52,95,115,116,115,100,0),String.fromCharCode(100,99,116,115,117,98,95,52,95,56,0)]]);
          let showe: Array<any> = [654, 761];
         whites = "2";
         sina2 = new Map([[`${sina2.size}`, sina2.size]]);
         showe = [showe.length * 2];
      while (whites.length >= confirmationO.size) {
         confirmationO = new Map([[`${confirmationO.size}`, whites.length % (Math.max(2, 7))]]);
         break;
      }
      while ((confirmationO.size & whites.length) < 2 && 5 < (confirmationO.size & 2)) {
          let stationR: Array<any> = [89, 440, 426];
          let fileds = false;
          let scorepopsoundj = String.fromCharCode(101,95,55,54,95,114,102,102,116,105,0);
         whites = `${confirmationO.size / 2}`;
         stationR.push(scorepopsoundj.length ^ 3);
         fileds = stationR.length < 7 || scorepopsoundj.length < 7;
         break;
      }
      gemfileH = `${2 >> (Math.min(Math.abs(parseInt(`${component8}`)), 4))}`;
   }
   if (activityK && emojiheartn) {
      activityK = !activityK;
   }
   if (libglog_ != String.fromCharCode(113,0)) {
      gemfileH += `${(1 - (activityK ? 3 : 1))}`;
   }
      component8 -= parseFloat(`${parseInt(`${flyerH}`) / 3}`);
       let iconsettingE = String.fromCharCode(112,111,105,110,116,99,98,98,95,116,95,54,0);
       let embed9 = 1.0;
      if (iconsettingE.length < 4) {
         embed9 /= Math.max(parseFloat(`${parseInt(`${embed9}`) >> (Math.min(iconsettingE.length, 2))}`), 2);
      }
          let championQ = 3.0;
          let tooltipsv = 0.0;
         iconsettingE = `${3 & parseInt(`${tooltipsv}`)}`;
         championQ *= parseFloat(`${parseInt(`${championQ}`) | parseInt(`${championQ}`)}`);
         tooltipsv -= parseFloat(`${parseInt(`${championQ}`) | parseInt(`${championQ}`)}`);
      styles7 = new Map([[`${private_jyk.length}`, private_jyk.length]]);
   while ((flyerH - 4.48) <= 5.58) {
      flyerH /= Math.max(2, parseInt(`${component8}`) + private_jyk.length);
      break;
   }
      styles7 = new Map([[`${private_jyk.length}`, ((activityK ? 3 : 2) >> (Math.min(private_jyk.length, 3)))]]);
   let overQ = 8297506.0 >= flyerH;
   do {
      flyerH += photoo.length;
      if (overQ) {
         break;
      }
   } while (overQ && ((4 + private_jyk.length) <= 2));
   if (whistleorangex.length > 4) {
      whistleorangex = `${(1 >> (Math.min(2, Math.abs((emojiheartn ? 1 : 5)))))}`;
   }
   for (let p = 0; p < 3; p++) {
      component8 -= parseFloat(`${2}`);
   }
       let frame_vw: Map<any, any> = new Map([[String.fromCharCode(106,114,101,102,95,99,95,55,0),84], [String.fromCharCode(111,117,116,102,105,108,101,95,106,95,57,53,0),140], [String.fromCharCode(97,115,115,101,116,115,95,54,95,49,52,0),218]]);
      let libsentryu = 6469202 >= frame_vw.size;
      do {
         frame_vw = new Map([[`${frame_vw.size}`, frame_vw.size | 2]]);
         if (libsentryu) {
            break;
         }
      } while (libsentryu && (4 <= (frame_vw.size >> (Math.min(Math.abs(4), 2))) && (frame_vw.size >> (Math.min(4, Math.abs(frame_vw.size)))) <= 4));
      for (let z = 0; z < 3; z++) {
         frame_vw.set(`${frame_vw.size}`, frame_vw.size);
      }
       let analytic7 = String.fromCharCode(99,111,101,114,99,101,95,103,95,52,52,0);
       let clockH = String.fromCharCode(98,121,116,101,99,111,100,101,118,116,97,98,95,99,95,50,55,0);
      whistleorangex = "1";
   let over_ = String.fromCharCode(106,117,101,112,104,113,53,55,115,121,0) == memberS;
   do {
      memberS += `${parseInt(`${flyerH}`)}`;
      if (over_) {
         break;
      }
   } while ((5 >= (2 + memberS.length)) && over_);
   for (let i = 0; i < 2; i++) {
       let lineo: Map<any, any> = new Map([[String.fromCharCode(114,101,103,105,115,116,114,121,95,99,95,57,50,0),356], [String.fromCharCode(114,101,105,115,115,117,101,95,112,95,53,0),330], [String.fromCharCode(117,95,57,57,95,98,105,111,109,101,116,114,121,0),252]]);
       let iconclosewhitebg1 = false;
       let langkeyz = String.fromCharCode(104,95,52,49,95,102,102,109,109,97,108,0);
       let const_tK = false;
       let modalS = String.fromCharCode(99,111,112,121,98,97,99,107,95,100,95,50,0);
         const_tK = modalS == langkeyz;
         lineo = new Map([[modalS, (langkeyz == String.fromCharCode(114,0) ? modalS.length : langkeyz.length)]]);
          let transferd = true;
         lineo.set(`${const_tK}`, ((const_tK ? 4 : 5) + (transferd ? 2 : 3)));
       let cancelh = String.fromCharCode(119,95,56,52,95,110,101,116,0);
       let tempB = String.fromCharCode(99,95,51,48,95,98,114,105,100,103,105,110,103,0);
      while (modalS.length < 4) {
         modalS += `${langkeyz.length - tempB.length}`;
         break;
      }
      for (let z = 0; z < 3; z++) {
         lineo.set(cancelh, 1 - cancelh.length);
      }
         iconclosewhitebg1 = (iconclosewhitebg1 ? !const_tK : iconclosewhitebg1);
         const_tK = !iconclosewhitebg1;
      while (!iconclosewhitebg1) {
         tempB = `${tempB.length}`;
         break;
      }
      while (tempB.length > cancelh.length) {
         tempB = `${(1 >> (Math.min(4, Math.abs((const_tK ? 4 : 4)))))}`;
         break;
      }
       let defaultplayerimgL = String.fromCharCode(109,117,108,116,105,99,97,115,116,101,100,95,105,95,55,0);
      for (let f = 0; f < 3; f++) {
          let libjsijniprofilerz = 4.0;
          let goallogo1 = 0.0;
          let librrcm = String.fromCharCode(109,101,109,98,101,114,115,95,52,95,51,57,0);
          let memberN = 2.0;
         const_tK = 89.100 == memberN || !iconclosewhitebg1;
         libjsijniprofilerz += parseFloat(`${parseInt(`${goallogo1}`)}`);
         goallogo1 /= Math.max(5, parseFloat(`${parseInt(`${libjsijniprofilerz}`)}`));
         librrcm += `${parseInt(`${goallogo1}`) * librrcm.length}`;
         memberN *= parseInt(`${goallogo1}`);
      }
      let release_man = 9247669 <= modalS.length;
      do {
         modalS += `${modalS.length}`;
         if (release_man) {
            break;
         }
      } while ((cancelh.length > 5 || modalS == String.fromCharCode(100,0)) && release_man);
          let gifgoalD: Array<any> = [668, 704, 708];
         iconclosewhitebg1 = (14 <= (modalS.length << (Math.min(3, Math.abs((iconclosewhitebg1 ? 14 : modalS.length))))));
         gifgoalD.push(gifgoalD.length + gifgoalD.length);
       let shootw = String.fromCharCode(98,117,116,116,101,114,119,111,114,116,104,95,56,95,52,0);
       let actionsj = String.fromCharCode(105,110,116,101,110,115,105,116,121,95,56,95,56,0);
      libglog_ = `${styles7.size}`;
   }
   while (5 > whistleorangex.length) {
      whistleorangex += `${(gemfileH == String.fromCharCode(100,0) ? styles7.size : gemfileH.length)}`;
      break;
   }
   if (photoo.length >= 4) {
      photoo += `${styles7.size / (Math.max(photoo.length, 3))}`;
   }
   while (whistleorangex != String.fromCharCode(52,0) && gemfileH != String.fromCharCode(50,0)) {
      whistleorangex = `${(gemfileH == String.fromCharCode(85,0) ? gemfileH.length : styles7.size)}`;
      break;
   }
   let homeplayerk = String.fromCharCode(107,106,48,0) == whistleorangex;
   do {
      whistleorangex += `${photoo.length}`;
      if (homeplayerk) {
         break;
      }
   } while ((whistleorangex.includes(`${emojiheartn}`)) && homeplayerk);
      gemfileH += `${(photoo == String.fromCharCode(67,0) ? gemfileH.length : photoo.length)}`;
   for (let m = 0; m < 1; m++) {
       let type_nY = String.fromCharCode(107,101,121,98,111,97,114,100,95,103,95,56,52,0);
       let nterstitialt = false;
         type_nY = "3";
         type_nY += `${type_nY.length}`;
       let vignetteD = 2;
         nterstitialt = 74 == vignetteD;
      if (nterstitialt || 2 < (2 * vignetteD)) {
         nterstitialt = !nterstitialt;
      }
         nterstitialt = !nterstitialt;
      libglog_ += `${(photoo == String.fromCharCode(112,0) ? (activityK ? 4 : 2) : photoo.length)}`;
   }
   for (let y = 0; y < 3; y++) {
      activityK = photoo.endsWith(`${component8}`);
   }
      photoo += `${whistleorangex.length + 1}`;

        overlayRef.current = true;
    };

    const handlePlayPause = () => {
       let projectG: Map<any, any> = new Map([[String.fromCharCode(117,116,99,95,122,95,52,52,0),328], [String.fromCharCode(117,95,52,52,95,100,105,115,97,98,108,101,100,0),204]]);
    let giftbuttono = 3;
    let formJ = 5.0;
    let chinat = String.fromCharCode(98,117,108,108,101,116,115,95,118,95,56,52,0);
    let minimizeK: Map<any, any> = new Map([[String.fromCharCode(106,95,54,49,95,115,117,98,112,101,108,0),516], [String.fromCharCode(113,95,50,95,112,115,102,105,108,101,0),380]]);
    let gemfile9 = String.fromCharCode(119,95,55,55,95,100,114,97,119,117,116,105,108,115,0);
    let leaguedetailsbg_ = 1.0;
    let mergerl: Map<any, any> = new Map([[String.fromCharCode(103,95,56,50,95,100,105,97,103,114,97,109,0),162], [String.fromCharCode(117,110,100,101,114,108,105,110,101,95,113,95,51,55,0),563]]);
    let screen9 = 3.0;
    let videoV = 3.0;
   if (leaguedetailsbg_ < formJ) {
      leaguedetailsbg_ *= giftbuttono;
   }
       let defaultprofilepicS = 1.0;
       let mergerV = String.fromCharCode(121,95,54,48,95,108,111,116,116,105,101,105,116,101,109,0);
       let adults = 0;
      while (1.82 == (parseFloat(`${mergerV.length}`) - defaultprofilepicS) && (1 - parseInt(`${defaultprofilepicS}`)) == 4) {
         defaultprofilepicS *= parseFloat(`${adults}`);
         break;
      }
         adults *= parseInt(`${defaultprofilepicS}`);
      while (mergerV.length > adults) {
         adults >>= Math.min(Math.abs(parseInt(`${defaultprofilepicS}`) * mergerV.length), 3);
         break;
      }
      for (let r = 0; r < 2; r++) {
         defaultprofilepicS -= parseFloat(`${2}`);
      }
         mergerV = "1";
       let currentk = 0;
          let modalm = String.fromCharCode(98,114,101,110,100,101,114,95,100,95,49,55,0);
         adults &= parseInt(`${defaultprofilepicS}`);
         modalm = `${modalm.length >> (Math.min(Math.abs(3), 1))}`;
         mergerV += `${currentk}`;
      while ((1 >> (Math.min(5, Math.abs(currentk)))) < 1) {
         currentk -= adults;
         break;
      }
      mergerl = new Map([[`${defaultprofilepicS}`, parseInt(`${defaultprofilepicS}`)]]);
       let iconwechatl = String.fromCharCode(100,105,108,97,116,101,95,48,95,49,49,0);
       let stationsG = String.fromCharCode(115,117,98,116,121,112,101,115,95,116,95,56,50,0);
       let windO = String.fromCharCode(115,95,54,49,95,106,112,103,0);
      for (let b = 0; b < 2; b++) {
          let controli = 0;
          let rncore9: Array<any> = [288, 966, 589];
          let buttonb = 5.0;
          let fullscreenminE = String.fromCharCode(112,114,111,120,105,109,105,116,121,95,50,95,49,57,0);
         iconwechatl = `${parseInt(`${buttonb}`)}`;
         controli &= 3 | fullscreenminE.length;
         rncore9 = [fullscreenminE.length];
         buttonb += rncore9.length;
      }
         stationsG = `${1 + stationsG.length}`;
         stationsG = "2";
      while (iconwechatl.endsWith(windO)) {
         windO += `${1 - stationsG.length}`;
         break;
      }
      let libtobG = iconwechatl == String.fromCharCode(104,51,103,48,114,0);
      do {
          let spinnerH = 4.0;
          let pangleA: Map<any, any> = new Map([[String.fromCharCode(104,95,53,95,115,105,103,110,117,109,0),190], [String.fromCharCode(113,95,49,48,48,95,102,97,105,108,105,110,103,0),15]]);
          let renderF = 3.0;
          let androidU = true;
          let inactiveM = 1.0;
         iconwechatl += `${stationsG.length - windO.length}`;
         spinnerH += parseFloat(`${pangleA.size}`);
         pangleA.set(`${spinnerH}`, 1 ^ parseInt(`${spinnerH}`));
         renderF /= Math.max(2, parseFloat(`${1 * parseInt(`${spinnerH}`)}`));
         androidU = pangleA.get(`${spinnerH}`) != null;
         inactiveM += ((androidU ? 2 : 1) % (Math.max(parseInt(`${renderF}`), 7)));
         if (libtobG) {
            break;
         }
      } while (libtobG && (stationsG != String.fromCharCode(119,0)));
      while (iconwechatl != String.fromCharCode(56,0)) {
         windO = `${1 | stationsG.length}`;
         break;
      }
      for (let d = 0; d < 3; d++) {
          let smallorangeman3 = String.fromCharCode(107,95,54,48,95,97,108,105,97,115,101,115,0);
         stationsG = `${smallorangeman3.length & 1}`;
      }
      for (let j = 0; j < 3; j++) {
         windO = `${stationsG.length}`;
      }
      for (let t = 0; t < 3; t++) {
         windO = "3";
      }
      minimizeK.set(`${leaguedetailsbg_}`, parseInt(`${leaguedetailsbg_}`));
      giftbuttono -= 1;
      minimizeK = new Map([[`${formJ}`, parseInt(`${formJ}`)]]);
   if ((1 >> (Math.min(1, chinat.length))) > 1) {
       let cricket6 = String.fromCharCode(99,111,108,108,97,112,115,105,110,103,95,57,95,52,50,0);
      if (cricket6.includes(`${cricket6.length}`)) {
          let condensedP = 4.0;
          let arrowrightwithtail3 = String.fromCharCode(111,112,116,105,109,117,109,95,54,95,55,54,0);
         cricket6 = `${cricket6.length % (Math.max(1, 6))}`;
         condensedP /= Math.max(5, arrowrightwithtail3.length);
         arrowrightwithtail3 = "1";
      }
      for (let b = 0; b < 1; b++) {
          let history5 = 5.0;
          let targetS = String.fromCharCode(98,95,55,50,95,103,115,117,98,0);
          let zoomO = true;
          let rncoreL = 1.0;
          let plash8: Map<any, any> = new Map([[String.fromCharCode(99,95,57,53,95,112,97,100,100,101,100,0),748], [String.fromCharCode(104,95,51,95,97,110,110,111,116,97,116,105,111,110,0),792]]);
         cricket6 += `${parseInt(`${rncoreL}`)}`;
         history5 /= Math.max(2 ^ targetS.length, 5);
         targetS = `${(1 ^ (zoomO ? 2 : 4))}`;
         rncoreL *= parseFloat(`${3 * parseInt(`${history5}`)}`);
         plash8 = new Map([[`${history5}`, targetS.length]]);
      }
         cricket6 += `${cricket6.length}`;
      chinat = `${(String.fromCharCode(116,0) == gemfile9 ? gemfile9.length : minimizeK.size)}`;
   }

        clearTimeout(iconTimer.current);

      leaguedetailsbg_ -= projectG.size - 3;
   for (let t = 0; t < 2; t++) {
      formJ -= 1 | mergerl.size;
   }
   if (4 > minimizeK.size) {
      minimizeK = new Map([[`${projectG.size}`, projectG.size << (Math.min(4, Math.abs(parseInt(`${formJ}`))))]]);
   }
       let iconuserU = String.fromCharCode(103,95,55,51,95,112,105,101,99,101,119,105,115,101,0);
       let libfileN = String.fromCharCode(97,95,57,49,95,100,101,97,108,108,111,99,0);
         libfileN += `${(iconuserU == String.fromCharCode(74,0) ? iconuserU.length : libfileN.length)}`;
          let nativeexf = true;
          let plusL = String.fromCharCode(107,109,115,95,113,95,52,57,0);
          let tickedv: Map<any, any> = new Map([[String.fromCharCode(100,98,115,116,97,116,95,51,95,57,55,0),786], [String.fromCharCode(98,95,56,55,95,102,114,97,103,0),931], [String.fromCharCode(100,97,121,115,95,105,95,55,56,0),525]]);
         libfileN += `${3 + tickedv.size}`;
         nativeexf = plusL.length <= 7;
         plusL += `${((nativeexf ? 4 : 2))}`;
         tickedv.set(plusL, (plusL.length >> (Math.min(4, Math.abs((nativeexf ? 1 : 3))))));
         libfileN += `${iconuserU.length % 1}`;
      while (libfileN.startsWith(iconuserU)) {
         iconuserU += `${libfileN.length}`;
         break;
      }
          let over_: Map<any, any> = new Map([[String.fromCharCode(109,111,99,107,105,110,103,95,116,95,50,50,0),780], [String.fromCharCode(99,111,110,115,116,116,105,109,101,95,56,95,55,54,0),561]]);
          let play4 = String.fromCharCode(115,95,49,54,95,104,101,97,112,0);
          let rewardJ = 5;
         iconuserU = "2";
         over_ = new Map([[`${over_.size}`, 3 << (Math.min(3, play4.length))]]);
         play4 = `${play4.length << (Math.min(Math.abs(3), 3))}`;
         rewardJ >>= Math.min(Math.abs(2), 3);
         iconuserU += "1";
      leaguedetailsbg_ -= 3;
      chinat += `${giftbuttono / 3}`;
      minimizeK.set(`${screen9}`, mergerl.size);
        setShowIcon(true);

   for (let v = 0; v < 2; v++) {
      formJ /= Math.max(parseInt(`${screen9}`), 4);
   }
   if (1 < mergerl.size) {
      minimizeK.set(`${screen9}`, parseInt(`${screen9}`) << (Math.min(Math.abs(minimizeK.size), 5)));
   }
   for (let u = 0; u < 3; u++) {
      minimizeK.set(`${leaguedetailsbg_}`, 1 % (Math.max(7, parseInt(`${leaguedetailsbg_}`))));
   }
      leaguedetailsbg_ -= gemfile9.length & chinat.length;
   if ((mergerl.size >> (Math.min(Math.abs(1), 4))) == 5) {
       let dycreator7 = String.fromCharCode(99,111,100,97,98,108,101,95,117,95,49,48,48,0);
       let alertD = false;
       let mergerT = String.fromCharCode(115,116,111,119,95,51,95,56,0);
       let videocommonV = String.fromCharCode(118,95,55,95,115,99,104,109,0);
      while (dycreator7.endsWith(`${videocommonV.length}`)) {
         dycreator7 += `${dycreator7.length * videocommonV.length}`;
         break;
      }
       let static_tw = false;
       let matchesG = false;
      for (let z = 0; z < 2; z++) {
          let klevins = 3;
          let m_playerk = String.fromCharCode(97,95,54,55,95,114,101,110,100,101,114,101,114,115,0);
         dycreator7 += `${((matchesG ? 5 : 5) ^ 2)}`;
         klevins ^= (m_playerk == String.fromCharCode(106,0) ? klevins : m_playerk.length);
      }
         alertD = videocommonV.length <= 89;
         mergerT = `${((alertD ? 5 : 4))}`;
      for (let j = 0; j < 2; j++) {
         matchesG = ((dycreator7.length * (!alertD ? 51 : dycreator7.length)) < 51);
      }
       let yellowcirclebgo = String.fromCharCode(111,95,53,51,0);
       let vietnam7 = String.fromCharCode(100,105,110,102,95,50,95,51,57,0);
         static_tw = String.fromCharCode(51,0) == mergerT;
         vietnam7 += `${(vietnam7 == String.fromCharCode(106,0) ? (matchesG ? 4 : 2) : vietnam7.length)}`;
          let baselineL = 1.0;
          let referrern = 2.0;
          let type_gi = 3;
         videocommonV += `${(String.fromCharCode(111,0) == dycreator7 ? dycreator7.length : (matchesG ? 5 : 5))}`;
         baselineL -= parseFloat(`${1}`);
         referrern *= parseInt(`${referrern}`) | parseInt(`${baselineL}`);
         type_gi ^= parseInt(`${baselineL}`);
          let submitl = String.fromCharCode(109,105,100,116,111,110,101,115,95,114,95,55,57,0);
          let package_0I: Array<any> = [128, 771, 140];
          let libreanimateds = false;
         videocommonV = "3";
         submitl += `${(String.fromCharCode(95,0) == submitl ? package_0I.length : submitl.length)}`;
         package_0I = [1 - submitl.length];
         libreanimateds = (package_0I.length - submitl.length) >= 43;
      if (dycreator7.startsWith(`${alertD}`)) {
         dycreator7 += `${((static_tw ? 1 : 4) * 3)}`;
      }
      minimizeK = new Map([[`${projectG.size}`, projectG.size]]);
   }
       let homeiconG = String.fromCharCode(112,95,56,50,95,120,102,97,99,101,0);
       let save3 = 5.0;
       let middle2 = false;
      for (let u = 0; u < 3; u++) {
          let libreactnativejni4 = true;
          let matchb = 1.0;
          let searchbarA = String.fromCharCode(122,95,52,57,95,99,111,109,102,111,114,116,0);
         save3 *= parseFloat(`${3}`);
         libreactnativejni4 = 84.8 > matchb;
         matchb /= Math.max(2, 3);
         searchbarA = `${parseInt(`${matchb}`) / (Math.max(1, searchbarA.length))}`;
      }
          let inouttargetredo = String.fromCharCode(107,95,52,57,95,100,101,113,117,97,110,116,105,122,97,116,105,111,110,0);
          let playX: Map<any, any> = new Map([[String.fromCharCode(113,95,55,54,0),true ], [String.fromCharCode(109,95,55,53,95,101,110,99,111,100,101,100,0),false ], [String.fromCharCode(101,95,55,49,95,100,105,115,99,111,110,110,101,99,116,101,100,0),true ]]);
         middle2 = playX.get(`${save3}`) == null;
         inouttargetredo += `${inouttargetredo.length}`;
         playX = new Map([[inouttargetredo, inouttargetredo.length]]);
          let baselineX = 1;
         middle2 = !middle2;
         baselineX /= Math.max(2, baselineX);
         homeiconG += `${((middle2 ? 3 : 2) >> (Math.min(Math.abs(parseInt(`${save3}`)), 4)))}`;
         homeiconG = "1";
          let basketballtrophyY = 3.0;
          let single6 = true;
          let statisticsv = String.fromCharCode(119,95,56,56,95,109,97,103,101,110,116,97,0);
         homeiconG += `${statisticsv.length ^ 3}`;
         basketballtrophyY /= Math.max(1, parseInt(`${basketballtrophyY}`) * 3);
         single6 = basketballtrophyY <= 36.73;
         statisticsv = `${((single6 ? 2 : 1) & parseInt(`${basketballtrophyY}`))}`;
          let football3: Array<any> = [62, 331, 292];
          let libffmpegkitm = String.fromCharCode(109,97,112,112,105,110,103,115,95,50,95,51,51,0);
         save3 -= (parseFloat(`${(middle2 ? 4 : 1)}`));
         football3 = [football3.length];
         libffmpegkitm += `${football3.length ^ 3}`;
          let profileY: Map<any, any> = new Map([[String.fromCharCode(98,101,110,99,104,109,97,114,107,95,50,95,53,48,0),644], [String.fromCharCode(110,117,109,95,54,95,51,52,0),978], [String.fromCharCode(107,95,49,52,95,105,110,118,111,108,118,101,100,0),400]]);
          let componentI = String.fromCharCode(116,95,55,95,120,99,108,105,0);
          let halffieldimagew: Array<any> = [894, 901];
         middle2 = (componentI.length / (Math.max(6, homeiconG.length))) > 71;
         profileY.set(`${halffieldimagew.length}`, profileY.size >> (Math.min(Math.abs(3), 2)));
         componentI = "3";
         halffieldimagew.push(profileY.size);
         homeiconG = `${2 ^ homeiconG.length}`;
      minimizeK.set(`${leaguedetailsbg_}`, 2 >> (Math.min(Math.abs(parseInt(`${leaguedetailsbg_}`)), 2)));
        if (isPause) {

   for (let x = 0; x < 2; x++) {
      formJ -= 3 - chinat.length;
   }
   let libimagepipelinev = leaguedetailsbg_ >= 8261336.0;
   do {
       let xvodH = 4;
      while (xvodH < xvodH) {
          let iconarrowrightwhitew: Array<any> = [712, 459];
          let checkboxx = 0.0;
         xvodH &= xvodH;
         iconarrowrightwhitew = [iconarrowrightwhitew.length | parseInt(`${checkboxx}`)];
         checkboxx -= iconarrowrightwhitew.length;
         break;
      }
      let libavutilh = xvodH >= 5088285;
      do {
          let iconarrowrightwhiteT = true;
          let imagesQ = String.fromCharCode(100,101,108,116,97,113,95,99,95,51,56,0);
          let skipS: Array<any> = [537, 430, 672];
         xvodH &= 1;
         iconarrowrightwhiteT = skipS.length < imagesQ.length;
         imagesQ = `${1 & skipS.length}`;
         if (libavutilh) {
            break;
         }
      } while ((4 >= (1 << (Math.min(4, Math.abs(xvodH)))) && (xvodH << (Math.min(Math.abs(1), 1))) >= 4) && libavutilh);
      if (4 > (xvodH ^ xvodH) || (xvodH ^ 4) > 4) {
         xvodH += 3;
      }
      leaguedetailsbg_ -= minimizeK.size;
      if (libimagepipelinev) {
         break;
      }
   } while (libimagepipelinev && ((minimizeK.size | 2) >= 2 && 3.49 >= (leaguedetailsbg_ / (Math.max(minimizeK.size, 5)))));
   let predictionbanner1 = formJ <= 8649744.0;
   do {
       let m_titlex = 5.0;
       let floater7: Map<any, any> = new Map([[String.fromCharCode(112,97,114,116,105,116,105,111,110,101,100,95,102,95,49,52,0),709], [String.fromCharCode(115,95,52,52,95,101,120,116,101,110,115,105,111,110,0),142], [String.fromCharCode(97,95,51,49,95,102,116,115,105,115,115,112,97,99,101,0),804]]);
       let subtextX: Map<any, any> = new Map([[String.fromCharCode(107,95,56,55,95,101,120,112,111,110,101,110,116,0),String.fromCharCode(115,116,114,105,112,112,101,100,95,54,95,57,53,0)], [String.fromCharCode(100,114,97,103,95,121,95,56,53,0),String.fromCharCode(112,95,53,56,95,101,114,114,111,114,118,0)]]);
       let umengz: Map<any, any> = new Map([[String.fromCharCode(121,95,55,50,95,118,108,105,110,101,0),219], [String.fromCharCode(112,95,50,48,95,105,110,102,105,110,105,116,121,0),451], [String.fromCharCode(121,95,52,54,95,108,111,111,107,117,112,0),456]]);
      let upgradeg = 8887886 >= umengz.size;
      do {
          let loading1 = 3.0;
          let confige = 4.0;
          let listO = String.fromCharCode(117,95,50,55,95,97,114,114,97,121,0);
          let iconcalendarY: Array<any> = [624, 459];
          let kick7: Map<any, any> = new Map([[String.fromCharCode(101,95,57,52,95,103,97,109,101,115,0),169], [String.fromCharCode(113,95,49,54,95,99,111,110,116,97,99,116,115,0),423], [String.fromCharCode(105,110,105,116,105,97,116,101,100,95,100,95,57,0),648]]);
         umengz.set(`${umengz.size}`, subtextX.size);
         loading1 *= parseFloat(`${parseInt(`${loading1}`) / (Math.max(kick7.size, 5))}`);
         confige += parseFloat(`${1}`);
         listO += `${iconcalendarY.length}`;
         iconcalendarY.push((listO == String.fromCharCode(51,0) ? parseInt(`${confige}`) : listO.length));
         kick7.set(`${confige}`, iconcalendarY.length);
         if (upgradeg) {
            break;
         }
      } while (upgradeg && (!Array.from(umengz.keys()).includes(`${floater7.size}`)));
       let eighteenY: Map<any, any> = new Map([[String.fromCharCode(109,95,49,54,95,98,108,97,99,107,111,117,116,0),31], [String.fromCharCode(108,95,50,55,95,112,105,120,109,102,116,115,0),571], [String.fromCharCode(107,95,50,51,95,112,114,101,102,101,116,99,104,0),188]]);
      if (1.13 <= (m_titlex - floater7.size)) {
          let stringw = String.fromCharCode(99,111,109,98,95,102,95,49,48,48,0);
          let targetv: Array<any> = [126, 734];
          let actionr = 0.0;
          let turnY = String.fromCharCode(103,117,105,100,95,105,95,56,57,0);
         m_titlex /= Math.max(eighteenY.size, 5);
         stringw = `${stringw.length & 1}`;
         targetv.push((stringw == String.fromCharCode(116,0) ? parseInt(`${actionr}`) : stringw.length));
         actionr *= parseFloat(`${targetv.length}`);
         turnY += `${turnY.length}`;
      }
      while (umengz.get(`${m_titlex}`) == null) {
          let tick2 = String.fromCharCode(110,95,50,95,99,104,97,105,110,115,0);
         umengz.set(`${m_titlex}`, floater7.size);
         tick2 += `${tick2.length ^ 1}`;
         break;
      }
          let list2 = String.fromCharCode(114,101,102,108,101,99,116,95,110,95,52,51,0);
         floater7 = new Map([[`${umengz.size}`, umengz.size << (Math.min(Math.abs(3), 3))]]);
         list2 = `${list2.length}`;
      formJ += chinat.length;
      if (predictionbanner1) {
         break;
      }
   } while ((4.72 < (formJ - 2.37) || 5.5 < (formJ - 2.37)) && predictionbanner1);
      formJ -= 3 * minimizeK.size;
       let subtext5 = 4;
       let thumbnail7 = String.fromCharCode(99,111,100,101,99,100,97,116,97,95,106,95,54,0);
       let footballtrophyi = 4;
      let watchj = String.fromCharCode(114,57,106,116,103,52,0) == thumbnail7;
      do {
          let weibo0 = 4.0;
          let imagenomoredataC = String.fromCharCode(107,95,56,51,95,115,105,116,101,0);
         thumbnail7 += `${footballtrophyi}`;
         weibo0 += parseInt(`${weibo0}`);
         imagenomoredataC = `${imagenomoredataC.length}`;
         if (watchj) {
            break;
         }
      } while (watchj && ((thumbnail7.length >> (Math.min(5, Math.abs(footballtrophyi)))) > 4));
      let chat0 = String.fromCharCode(48,48,104,0) == thumbnail7;
      do {
         thumbnail7 = `${(thumbnail7 == String.fromCharCode(52,0) ? thumbnail7.length : subtext5)}`;
         if (chat0) {
            break;
         }
      } while (chat0 && (thumbnail7.length < subtext5));
      let launchF = 8802423 >= thumbnail7.length;
      do {
          let acceptedg = false;
         thumbnail7 = `${1 << (Math.min(3, Math.abs(footballtrophyi)))}`;
         acceptedg = !acceptedg;
         if (launchF) {
            break;
         }
      } while ((thumbnail7.endsWith(`${footballtrophyi}`)) && launchF);
      let malaysia4 = 6215393 <= subtext5;
      do {
         subtext5 &= footballtrophyi >> (Math.min(Math.abs(subtext5), 3));
         if (malaysia4) {
            break;
         }
      } while ((subtext5 < thumbnail7.length) && malaysia4);
          let videovarc = String.fromCharCode(100,101,99,111,100,101,102,95,54,95,54,51,0);
          let iconpointscorek = 4.0;
         thumbnail7 += `${(thumbnail7 == String.fromCharCode(71,0) ? footballtrophyi : thumbnail7.length)}`;
         videovarc += `${1 - parseInt(`${iconpointscorek}`)}`;
         iconpointscorek += (parseFloat(`${String.fromCharCode(69,0) == videovarc ? videovarc.length : parseInt(`${iconpointscorek}`)}`));
      for (let s = 0; s < 2; s++) {
          let libreanimatedm = 3.0;
          let codez = String.fromCharCode(99,111,100,101,102,95,115,95,54,54,0);
          let window_4xA = String.fromCharCode(113,95,57,53,95,114,101,109,111,118,101,103,114,97,105,110,0);
         thumbnail7 = `${2 >> (Math.min(Math.abs(parseInt(`${libreanimatedm}`)), 2))}`;
         libreanimatedm *= parseFloat(`${1}`);
         codez = `${(window_4xA == String.fromCharCode(107,0) ? codez.length : window_4xA.length)}`;
      }
          let shielddoneC = String.fromCharCode(100,95,54,51,95,109,97,110,116,105,115,115,97,115,0);
          let pointl = String.fromCharCode(113,101,120,112,110,101,103,95,49,95,49,56,0);
          let zoomq = String.fromCharCode(97,99,107,110,111,119,108,101,100,103,109,101,110,116,95,105,95,56,49,0);
         subtext5 ^= 1;
         shielddoneC = `${shielddoneC.length - 2}`;
         pointl += `${pointl.length / (Math.max(6, shielddoneC.length))}`;
         zoomq = "3";
      let loginE = thumbnail7.length <= 9300477;
      do {
         thumbnail7 += `${1 | thumbnail7.length}`;
         if (loginE) {
            break;
         }
      } while ((4 >= (thumbnail7.length & subtext5) || 4 >= (subtext5 & thumbnail7.length)) && loginE);
      while (thumbnail7.length == 3) {
         thumbnail7 = `${(String.fromCharCode(74,0) == thumbnail7 ? thumbnail7.length : footballtrophyi)}`;
         break;
      }
      chinat += `${3 & parseInt(`${formJ}`)}`;
      giftbuttono &= parseInt(`${videoV}`) % (Math.max(1, minimizeK.size));
            iconTimer.current = setTimeout(() => setShowIcon(false), 1000);
        }
        onManualPause(isPause);
    };

    const handleLoadStart = useCallback(() => {
       let targetd: Map<any, any> = new Map([[String.fromCharCode(116,114,117,110,107,95,119,95,52,54,0),916], [String.fromCharCode(122,95,55,54,95,97,118,99,111,100,101,99,0),842], [String.fromCharCode(115,97,116,117,114,97,116,105,111,110,95,109,95,51,50,0),948]]);
    let suggestiona = String.fromCharCode(100,95,56,53,95,109,97,120,107,101,121,115,105,122,101,0);
    let shootyesgoalP = false;
    let homeiconD = String.fromCharCode(99,111,110,102,105,103,117,114,101,95,57,95,52,51,0);
    let invitev = true;
    let pressure_: Map<any, any> = new Map([[String.fromCharCode(117,114,97,110,100,111,109,95,53,95,49,56,0),true ], [String.fromCharCode(99,104,97,110,103,101,103,114,111,117,112,95,107,95,51,51,0),true ], [String.fromCharCode(97,95,55,57,95,99,111,110,100,105,116,105,111,110,97,108,0),true ]]);
    let bgvipsport_ = String.fromCharCode(101,95,54,49,95,114,101,102,105,110,101,109,101,110,116,0);
    let tumbnailn = String.fromCharCode(112,114,101,115,101,110,116,101,100,95,53,95,50,54,0);
    let footballtrophyt = String.fromCharCode(103,95,54,52,95,112,111,105,110,116,101,114,0);
    let phoneshareB = 5;
    let spinnerJ: Array<any> = [471, 873];
    let yellowcirclebgq = String.fromCharCode(108,95,50,50,95,104,113,97,100,115,112,0);
   while (homeiconD.length > 1) {
      homeiconD += `${targetd.size / (Math.max(suggestiona.length, 10))}`;
      break;
   }
   for (let z = 0; z < 2; z++) {
      suggestiona = `${tumbnailn.length}`;
   }
   if (homeiconD.length > 2) {
      footballtrophyt = `${footballtrophyt.length}`;
   }
   if (pressure_.size >= targetd.size) {
       let defaultprofilepicm = String.fromCharCode(109,105,115,115,101,100,95,102,95,55,54,0);
       let backiconW = 3.0;
       let spinnerW = 0.0;
       let inactive4 = String.fromCharCode(111,95,54,49,95,115,117,112,112,114,101,115,115,111,114,0);
       let basketball3: Array<any> = [832, 149, 266];
       let homeloadinga: Array<any> = [91, 683, 29];
      for (let d = 0; d < 2; d++) {
         homeloadinga.push(parseInt(`${spinnerW}`));
      }
         basketball3.push(3);
         homeloadinga = [inactive4.length];
      if ((spinnerW + defaultprofilepicm.length) < 5.0 || (2 + parseInt(`${spinnerW}`)) < 5) {
         defaultprofilepicm += `${defaultprofilepicm.length / 1}`;
      }
      let k_hashi = backiconW <= 9856975.0;
      do {
         backiconW += 1;
         if (k_hashi) {
            break;
         }
      } while (k_hashi && ((homeloadinga.length / 4) >= 1));
      while (5 <= (defaultprofilepicm.length * 4) || 2 <= (4 ^ defaultprofilepicm.length)) {
          let phonez = 5.0;
          let libreactq = 0.0;
          let icondefaultthumbnaily = String.fromCharCode(105,95,51,52,95,105,110,100,105,99,97,116,101,100,0);
          let relatedU = String.fromCharCode(112,95,49,56,95,99,114,108,105,115,115,117,101,114,0);
         defaultprofilepicm = `${(inactive4 == String.fromCharCode(121,0) ? parseInt(`${backiconW}`) : inactive4.length)}`;
         phonez += (parseFloat(`${icondefaultthumbnaily == String.fromCharCode(107,0) ? parseInt(`${libreactq}`) : icondefaultthumbnaily.length}`));
         libreactq += (relatedU == String.fromCharCode(54,0) ? parseInt(`${libreactq}`) : relatedU.length);
         break;
      }
       let nativeexX = String.fromCharCode(116,109,109,98,95,97,95,52,53,0);
       let imagenetworkerrQ = String.fromCharCode(108,111,99,97,116,101,100,95,107,95,53,53,0);
      while (nativeexX.includes(`${homeloadinga.length}`)) {
         homeloadinga = [(String.fromCharCode(98,0) == inactive4 ? basketball3.length : inactive4.length)];
         break;
      }
         defaultprofilepicm += `${imagenetworkerrQ.length}`;
         imagenetworkerrQ = `${nativeexX.length}`;
      let history9 = inactive4.length >= 5558793;
      do {
         inactive4 += `${nativeexX.length + 1}`;
         if (history9) {
            break;
         }
      } while (history9 && (imagenetworkerrQ != inactive4));
      pressure_ = new Map([[`${spinnerW}`, 3 & suggestiona.length]]);
   }
   let spinner7 = tumbnailn == String.fromCharCode(56,106,111,107,116,103,49,0);
   do {
      tumbnailn += `${targetd.size}`;
      if (spinner7) {
         break;
      }
   } while (spinner7 && (2 <= tumbnailn.length));
   if (footballtrophyt == suggestiona) {
      suggestiona += `${(String.fromCharCode(67,0) == bgvipsport_ ? pressure_.size : bgvipsport_.length)}`;
   }
       let shielddoneb = 1.0;
       let suggestiono = 2;
       let resend_ = 0;
      if (5 <= suggestiono) {
          let pausev = false;
          let right6 = String.fromCharCode(105,95,50,52,95,99,111,109,112,111,115,105,116,105,110,103,0);
          let defaultprofilepicv = String.fromCharCode(115,95,52,95,101,116,104,111,100,0);
          let cataloga = 2;
         suggestiono *= 3 / (Math.max(5, right6.length));
         pausev = pausev || defaultprofilepicv.length >= 32;
         right6 = `${defaultprofilepicv.length | cataloga}`;
         cataloga *= cataloga;
      }
         resend_ += resend_ + 3;
       let libapminsightaB = String.fromCharCode(120,95,55,48,95,112,108,97,110,97,114,120,0);
      let modityP = String.fromCharCode(115,118,119,119,0) == libapminsightaB;
      do {
         libapminsightaB = `${suggestiono}`;
         if (modityP) {
            break;
         }
      } while (((libapminsightaB.length / 1) <= 4) && modityP);
      let klevinY = 7318858.0 >= shielddoneb;
      do {
          let footballtrophyR = String.fromCharCode(99,101,108,108,95,106,95,50,56,0);
          let stringj = String.fromCharCode(100,95,54,56,0);
          let renewt = 5;
          let mbridgez = String.fromCharCode(112,104,111,116,111,115,95,99,95,50,56,0);
         shielddoneb *= 2 & resend_;
         footballtrophyR = `${stringj.length + renewt}`;
         stringj = `${(stringj == String.fromCharCode(78,0) ? renewt : stringj.length)}`;
         mbridgez = "3";
         if (klevinY) {
            break;
         }
      } while ((5 == (libapminsightaB.length - 1)) && klevinY);
       let countdown4: Map<any, any> = new Map([[String.fromCharCode(99,111,109,112,101,110,115,97,116,105,111,110,95,101,95,54,51,0),String.fromCharCode(105,95,57,57,95,105,112,97,100,105,102,102,0)], [String.fromCharCode(112,102,114,97,109,101,95,112,95,54,53,0),String.fromCharCode(116,95,54,95,98,105,97,115,101,100,0)]]);
       let mailS: Map<any, any> = new Map([[String.fromCharCode(99,95,57,51,95,99,97,110,99,101,108,0),true ], [String.fromCharCode(98,105,103,100,105,97,95,104,95,51,55,0),true ], [String.fromCharCode(114,95,52,52,0),true ]]);
      while (!Array.from(mailS.values()).includes(resend_)) {
          let gpayr: Array<any> = [542, 774];
          let ping1 = 4;
          let hoverd = 1.0;
          let file_ = String.fromCharCode(110,111,116,105,102,121,105,110,103,95,55,95,51,52,0);
          let anythinkR = String.fromCharCode(111,95,53,95,99,101,114,116,0);
         resend_ ^= suggestiono;
         gpayr.push(1);
         ping1 += gpayr.length + parseInt(`${hoverd}`);
         hoverd /= Math.max(parseFloat(`${ping1}`), 1);
         file_ = "2";
         anythinkR += `${anythinkR.length % 3}`;
         break;
      }
      for (let i = 0; i < 3; i++) {
          let sheeto = 4.0;
          let moreZ: Map<any, any> = new Map([[String.fromCharCode(105,112,111,108,95,104,95,51,52,0),512], [String.fromCharCode(103,100,115,112,95,118,95,57,53,0),501]]);
          let giftbuttond: Map<any, any> = new Map([[String.fromCharCode(100,110,115,95,121,95,54,56,0),false ], [String.fromCharCode(99,113,117,101,117,101,95,49,95,50,51,0),true ]]);
          let mintegralJ = String.fromCharCode(102,95,55,57,95,98,111,100,121,0);
         countdown4.set(`${suggestiono}`, libapminsightaB.length << (Math.min(5, Math.abs(suggestiono))));
         sheeto += parseFloat(`${moreZ.size >> (Math.min(4, Math.abs(giftbuttond.size)))}`);
         moreZ.set(`${moreZ.size}`, moreZ.size / 1);
         giftbuttond.set(`${sheeto}`, parseInt(`${sheeto}`) | giftbuttond.size);
         mintegralJ = `${giftbuttond.size}`;
      }
         suggestiono |= resend_ - libapminsightaB.length;
      bgvipsport_ += `${1 >> (Math.min(4, homeiconD.length))}`;
   let star9 = String.fromCharCode(103,102,52,55,111,0) == bgvipsport_;
   do {
       let topicq = String.fromCharCode(106,95,52,55,95,97,116,116,114,97,99,116,105,110,103,0);
       let cornershoot5 = 1.0;
       let hearta = 2.0;
       let libreanimatedd = false;
       let countdownh = String.fromCharCode(115,95,57,48,95,99,104,97,112,0);
      if (!libreanimatedd) {
         countdownh = `${parseInt(`${cornershoot5}`) & countdownh.length}`;
      }
          let notificationfillemptyH = 2;
          let iconrightorangeo = true;
          let homeiconN = String.fromCharCode(107,95,53,54,95,112,114,111,98,108,101,109,0);
         countdownh = `${notificationfillemptyH + 3}`;
         notificationfillemptyH ^= (homeiconN == String.fromCharCode(97,0) ? homeiconN.length : (iconrightorangeo ? 3 : 4));
         iconrightorangeo = !homeiconN.startsWith(`${iconrightorangeo}`);
         cornershoot5 *= parseFloat(`${countdownh.length}`);
      let iconwechatM = topicq.length <= 8468386;
      do {
         topicq = "3";
         if (iconwechatM) {
            break;
         }
      } while (iconwechatM && (topicq.startsWith(`${hearta}`)));
         hearta *= parseFloat(`${3 >> (Math.min(3, countdownh.length))}`);
       let service6 = 0;
          let corner_ = String.fromCharCode(109,106,112,101,103,100,101,99,95,120,95,54,48,0);
         cornershoot5 -= parseFloat(`${topicq.length}`);
         corner_ = `${corner_.length}`;
      for (let v = 0; v < 3; v++) {
         cornershoot5 += parseFloat(`${2 | countdownh.length}`);
      }
      let type_4o = 5061565.0 >= cornershoot5;
      do {
         cornershoot5 /= Math.max(2, parseFloat(`${parseInt(`${hearta}`)}`));
         if (type_4o) {
            break;
         }
      } while ((topicq.includes(`${cornershoot5}`)) && type_4o);
         libreanimatedd = hearta < 31.13;
         libreanimatedd = 34.24 >= cornershoot5;
      if ((4 | service6) >= 4) {
         service6 /= Math.max(3, 5);
      }
      for (let g = 0; g < 1; g++) {
         countdownh += "3";
      }
         libreanimatedd = hearta <= 90.3 && cornershoot5 <= 90.3;
          let reminder0: Map<any, any> = new Map([[String.fromCharCode(121,95,49,51,95,102,97,99,116,111,114,115,0),String.fromCharCode(100,106,112,101,103,95,53,95,56,50,0)], [String.fromCharCode(104,111,109,101,95,49,95,52,48,0),String.fromCharCode(114,101,119,114,105,116,101,95,101,95,51,55,0)]]);
          let debugs = String.fromCharCode(115,116,97,98,108,101,95,115,95,53,0);
         topicq += `${countdownh.length}`;
         reminder0 = new Map([[`${reminder0.size}`, 2]]);
         debugs += `${debugs.length}`;
      bgvipsport_ = "1";
      if (star9) {
         break;
      }
   } while (star9 && (bgvipsport_.length >= 2 || suggestiona != String.fromCharCode(66,0)));
       let membershipC = true;
       let switch_7C = 5.0;
      for (let b = 0; b < 2; b++) {
         switch_7C *= (parseInt(`${switch_7C}`) ^ (membershipC ? 4 : 2));
      }
         membershipC = !membershipC;
         switch_7C *= parseInt(`${switch_7C}`) >> (Math.min(5, Math.abs(3)));
         switch_7C -= 1 - parseInt(`${switch_7C}`);
      while (membershipC) {
         switch_7C *= 1 & parseInt(`${switch_7C}`);
         break;
      }
         membershipC = switch_7C == 91.0;
      pressure_.set(`${invitev}`, ((invitev ? 2 : 2) | (shootyesgoalP ? 2 : 4)));
      invitev = !homeiconD.startsWith(`${invitev}`);

        if (videoRef.current) {
            videoRef.current.seek(isNaN(currentDuration) ? 0 : currentDuration);
        }
    }, [currentDuration])

    useEffect(() => {
        if (isPause === false) {
            setIsBuffering(false);
        }
    }, [isPause]);

    useEffect(() => {
        mayi_push.watchAnytimeAdsViewAnalytics({
            ads_slot_id: currentVod.ads_slot_id,
            ads_id: currentVod.ads_id,
            ads_title: currentVod.ads_event_title,
            ads_name: currentVod.ads_name,
        });

        return () => {
            
            const id = currentVod?.mini_video_id
            if (id) addIdToCache(id)
        }
    }, [])

    useEffect(() => {
        const fn = async () => {
       let config_ = false;
    let window_1M: Array<any> = [555, 951];
    let gray4: Map<any, any> = new Map([[String.fromCharCode(118,95,53,53,95,115,105,103,110,105,102,105,99,97,110,100,0),194], [String.fromCharCode(109,105,103,114,97,116,105,111,110,95,119,95,57,57,0),545]]);
    let nativemoduleG = 2.0;
    let layoutE = 3.0;
    let turndownH: Array<any> = [1000, 706, 903];
    let container4 = true;
    let buildo: Array<any> = [290, 141, 235];
    let traminiR: Map<any, any> = new Map([[String.fromCharCode(101,120,112,101,99,116,101,100,95,104,95,52,49,0),true ], [String.fromCharCode(99,102,102,116,98,95,103,95,49,0),true ]]);
   if (!config_) {
      nativemoduleG -= (window_1M.length + (container4 ? 5 : 1));
   }
   for (let t = 0; t < 3; t++) {
      config_ = (69 > ((config_ ? window_1M.length : 69) | window_1M.length));
   }

            if ((isPause === true || isBuffering === true) && currentDuration < 1) {

   while (4 == (2 & turndownH.length) && (buildo.length & turndownH.length) == 2) {
      buildo = [window_1M.length];
      break;
   }
      config_ = 25.68 > layoutE;
                

   let rewardvideoG = 9699941.0 <= nativemoduleG;
   do {
      nativemoduleG -= ((container4 ? 4 : 3) - buildo.length);
      if (rewardvideoG) {
         break;
      }
   } while ((2.91 >= (1.56 + nativemoduleG)) && rewardvideoG);
   for (let i = 0; i < 3; i++) {
      layoutE *= parseFloat(`${window_1M.length * 1}`);
   }
                

   while (!config_) {
      turndownH.push(1);
      break;
   }
      gray4 = new Map([[`${gray4.size}`, 2]]);
                

   if (config_) {
       let uimanagerG: Map<any, any> = new Map([[String.fromCharCode(115,121,109,95,111,95,52,52,0),String.fromCharCode(100,95,55,56,0)], [String.fromCharCode(122,95,50,55,95,98,108,99,107,0),String.fromCharCode(118,95,53,50,95,99,111,108,111,114,107,101,121,0)]]);
       let langkey9 = String.fromCharCode(102,95,52,49,95,114,101,102,0);
       let awayq = 4.0;
       let whatsappO = true;
      for (let b = 0; b < 1; b++) {
         uimanagerG.set(`${awayq}`, 3 - parseInt(`${awayq}`));
      }
         awayq += ((whatsappO ? 2 : 3) / (Math.max(parseInt(`${awayq}`), 8)));
      let gpay3 = 6024998 >= uimanagerG.size;
      do {
          let homeactiveF = 3.0;
          let sharewhitel = false;
          let template__T = 2;
          let successL: Map<any, any> = new Map([[String.fromCharCode(121,95,56,57,95,102,114,97,103,109,101,110,116,115,0),876], [String.fromCharCode(119,111,114,107,115,95,56,95,53,49,0),896]]);
         uimanagerG.set(`${template__T}`, 1);
         homeactiveF -= (parseFloat(`${(sharewhitel ? 1 : 4) | parseInt(`${homeactiveF}`)}`));
         sharewhitel = !sharewhitel;
         template__T *= parseInt(`${homeactiveF}`) + 1;
         successL.set(`${sharewhitel}`, (successL.size - (sharewhitel ? 2 : 2)));
         if (gpay3) {
            break;
         }
      } while (gpay3 && (1 >= uimanagerG.size));
      if (parseInt(`${awayq}`) > langkey9.length) {
         awayq += parseInt(`${awayq}`) << (Math.min(Math.abs(uimanagerG.size), 5));
      }
      for (let i = 0; i < 3; i++) {
         awayq -= langkey9.length;
      }
         uimanagerG.set(`${awayq}`, parseInt(`${awayq}`));
         langkey9 += `${((whatsappO ? 4 : 4) - 3)}`;
      let awayteamfieldl = 5939204.0 >= awayq;
      do {
          let whitevideoliveW = String.fromCharCode(115,116,114,105,100,101,97,98,108,101,95,49,95,51,51,0);
          let sellmathbackground9 = 4.0;
         awayq /= Math.max(1 | langkey9.length, 3);
         whitevideoliveW += `${whitevideoliveW.length + parseInt(`${sellmathbackground9}`)}`;
         sellmathbackground9 += 2 - whitevideoliveW.length;
         if (awayteamfieldl) {
            break;
         }
      } while (awayteamfieldl && ((parseInt(`${awayq}`) - uimanagerG.size) == 4 && (awayq - uimanagerG.size) == 2.95));
      for (let r = 0; r < 3; r++) {
          let buildo7 = 1.0;
         awayq /= Math.max((langkey9 == String.fromCharCode(83,0) ? parseInt(`${awayq}`) : langkey9.length), 2);
         buildo7 += 1 | parseInt(`${buildo7}`);
      }
          let defaultroombgH = true;
          let subinn = String.fromCharCode(113,95,54,54,95,109,97,99,101,0);
         uimanagerG = new Map([[langkey9, langkey9.length]]);
         defaultroombgH = !defaultroombgH;
         subinn += `${(String.fromCharCode(98,0) == subinn ? subinn.length : (defaultroombgH ? 3 : 4))}`;
          let mimep = 1.0;
          let libimagepipelineV = 3.0;
          let stationsR = String.fromCharCode(100,101,108,101,103,97,116,111,114,95,52,95,50,56,0);
         uimanagerG = new Map([[`${libimagepipelineV}`, stationsR.length]]);
         mimep += parseInt(`${mimep}`) >> (Math.min(3, Math.abs(1)));
         libimagepipelineV /= Math.max(parseFloat(`${3}`), 1);
       let blacklistD = false;
       let fasto = true;
      layoutE -= parseFloat(`${turndownH.length % (Math.max(window_1M.length, 4))}`);
   }
      gray4 = new Map([[`${window_1M.length}`, 2]]);

                const fileLocation =
                    RNFetchBlob.fs.dirs.DocumentDir +
                    `/videocache/${currentVod.mini_video_id}.mp4`;

   for (let h = 0; h < 1; h++) {
      buildo = [gray4.size << (Math.min(Math.abs(2), 2))];
   }
      buildo.push(((container4 ? 2 : 2) / (Math.max(5, (config_ ? 4 : 3)))));

                const fileExist = await RNFetchBlob.fs.exists(fileLocation);

   if (window_1M.length <= parseInt(`${nativemoduleG}`)) {
      nativemoduleG /= Math.max(5, parseInt(`${nativemoduleG}`) % 2);
   }
   let roomG = 5982647 <= gray4.size;
   do {
       let iconclosewhiteh = String.fromCharCode(108,95,57,54,95,111,98,115,101,114,118,101,0);
       let filledo = 2.0;
       let encryptors: Array<any> = [869, 9, 631];
       let listV = String.fromCharCode(114,105,110,102,95,111,95,55,56,0);
       let eighteenT: Array<any> = [String.fromCharCode(119,95,57,95,99,111,109,112,0), String.fromCharCode(100,95,49,95,99,111,110,115,116,114,97,105,110,0), String.fromCharCode(97,108,108,95,111,95,54,57,0)];
      let subbasketballplayerj = String.fromCharCode(55,110,102,52,0) == listV;
      do {
         listV += `${(String.fromCharCode(115,0) == iconclosewhiteh ? iconclosewhiteh.length : parseInt(`${filledo}`))}`;
         if (subbasketballplayerj) {
            break;
         }
      } while (subbasketballplayerj && (!listV.startsWith(`${eighteenT.length}`)));
          let iconqqD = 0;
          let interstitialN = 1;
          let tinit_hlv = String.fromCharCode(99,97,112,105,116,97,108,115,95,106,95,49,54,0);
         listV = `${encryptors.length ^ parseInt(`${filledo}`)}`;
         iconqqD += tinit_hlv.length ^ interstitialN;
         interstitialN *= interstitialN / (Math.max(8, iconqqD));
         tinit_hlv += `${iconqqD % (Math.max(9, interstitialN))}`;
       let k_centerO = String.fromCharCode(103,105,116,104,117,98,95,55,95,51,49,0);
      let modalo = eighteenT.length <= 8776627;
      do {
         eighteenT.push(parseInt(`${filledo}`) % 3);
         if (modalo) {
            break;
         }
      } while ((2 == eighteenT.length) && modalo);
      for (let i = 0; i < 2; i++) {
         eighteenT = [eighteenT.length];
      }
      let diceG = String.fromCharCode(56,100,50,54,0) == k_centerO;
      do {
         k_centerO = `${encryptors.length - 2}`;
         if (diceG) {
            break;
         }
      } while (diceG && (!k_centerO.startsWith(`${eighteenT.length}`)));
      while (4.0 >= (filledo + parseFloat(`${iconclosewhiteh.length}`)) || (parseInt(`${filledo}`) + iconclosewhiteh.length) >= 4) {
          let libjsiX = String.fromCharCode(114,101,109,111,118,97,108,115,95,112,95,55,48,0);
          let rooth = String.fromCharCode(99,97,108,101,110,100,97,114,95,56,95,52,57,0);
          let defaultfootballbgj = String.fromCharCode(100,105,102,102,101,114,101,110,99,101,115,95,106,95,49,57,0);
         filledo += parseFloat(`${3 & rooth.length}`);
         libjsiX += `${3 * defaultfootballbgj.length}`;
         rooth = `${defaultfootballbgj.length}`;
         break;
      }
         iconclosewhiteh = `${3 ^ encryptors.length}`;
         encryptors = [eighteenT.length];
         filledo /= Math.max(parseFloat(`${k_centerO.length}`), 2);
      for (let x = 0; x < 2; x++) {
         listV = `${3 * eighteenT.length}`;
      }
          let abidetectx: Map<any, any> = new Map([[String.fromCharCode(107,95,55,52,95,97,99,116,105,111,110,115,0),false ], [String.fromCharCode(102,101,109,97,108,101,95,103,95,49,57,0),false ]]);
         k_centerO += `${abidetectx.size >> (Math.min(Math.abs(2), 4))}`;
      for (let i = 0; i < 3; i++) {
          let navigationc = String.fromCharCode(112,97,114,101,110,116,104,101,115,101,115,95,111,95,54,50,0);
         iconclosewhiteh += `${(iconclosewhiteh == String.fromCharCode(108,0) ? listV.length : iconclosewhiteh.length)}`;
         navigationc = `${(navigationc == String.fromCharCode(83,0) ? navigationc.length : navigationc.length)}`;
      }
         iconclosewhiteh += `${eighteenT.length / 3}`;
       let tempnodataC: Map<any, any> = new Map([[String.fromCharCode(109,97,116,104,101,115,95,100,95,56,57,0),457], [String.fromCharCode(112,114,101,97,109,98,108,101,95,98,95,49,56,0),681], [String.fromCharCode(115,121,109,111,100,100,95,117,95,52,57,0),18]]);
       let resulty: Map<any, any> = new Map([[String.fromCharCode(97,99,99,101,115,115,105,98,105,108,105,116,121,95,99,95,53,52,0),String.fromCharCode(112,95,55,0)], [String.fromCharCode(112,97,115,115,112,111,114,116,95,57,95,53,49,0),String.fromCharCode(118,95,53,51,95,105,110,116,101,114,118,97,108,115,0)]]);
      gray4 = new Map([[`${turndownH.length}`, turndownH.length % (Math.max(listV.length, 10))]]);
      if (roomG) {
         break;
      }
   } while ((gray4.get(`${buildo.length}`) != null) && roomG);


                if (fileExist) {

   let eact_ = 9630310 >= turndownH.length;
   do {
       let mappingr = 1;
       let selectionf = 3;
         selectionf &= 3 | selectionf;
      let time_r0 = mappingr >= 7591231;
      do {
          let armvar = String.fromCharCode(109,117,108,116,105,101,110,100,95,54,95,50,56,0);
          let faviconO: Map<any, any> = new Map([[String.fromCharCode(112,97,114,116,105,97,108,95,52,95,57,55,0),998], [String.fromCharCode(101,121,98,111,97,114,100,95,118,95,53,55,0),581], [String.fromCharCode(115,95,56,56,95,115,117,105,116,101,115,0),861]]);
          let tramini2: Map<any, any> = new Map([[String.fromCharCode(109,111,99,107,105,110,103,95,111,95,51,52,0),String.fromCharCode(118,102,108,97,103,95,107,95,53,0)], [String.fromCharCode(113,95,52,57,95,99,101,114,116,105,102,105,99,97,116,101,115,0),String.fromCharCode(119,95,51,51,95,117,112,108,111,97,100,115,0)]]);
          let runtimeschedulerk: Map<any, any> = new Map([[String.fromCharCode(109,97,105,110,100,98,95,49,95,54,55,0),713], [String.fromCharCode(105,95,50,55,95,115,104,114,117,110,107,0),455]]);
         mappingr >>= Math.min(3, Math.abs(mappingr & 2));
         armvar += "2";
         faviconO.set(`${armvar}`, armvar.length + faviconO.size);
         tramini2 = new Map([[`${runtimeschedulerk.size}`, tramini2.size]]);
         runtimeschedulerk = new Map([[`${runtimeschedulerk.size}`, runtimeschedulerk.size]]);
         if (time_r0) {
            break;
         }
      } while (time_r0 && (2 > (selectionf + 1) && 1 > (mappingr + selectionf)));
         mappingr ^= selectionf;
      for (let j = 0; j < 1; j++) {
         mappingr <<= Math.min(1, Math.abs(2));
      }
      let modelB = selectionf >= 5127374;
      do {
          let predictionbannerM = 3;
          let baseline9 = String.fromCharCode(102,117,110,103,105,98,108,101,95,105,95,49,56,0);
          let manifesta = 1.0;
         selectionf &= 3;
         predictionbannerM &= predictionbannerM;
         baseline9 = `${baseline9.length}`;
         manifesta += predictionbannerM;
         if (modelB) {
            break;
         }
      } while ((3 < mappingr) && modelB);
         mappingr += selectionf;
      turndownH = [turndownH.length / (Math.max(2, 5))];
      if (eact_) {
         break;
      }
   } while ((!container4) && eact_);
   if (5.18 < (4.61 * layoutE) || (layoutE * 4.61) < 3.74) {
      buildo = [1];
   }
                    const fileIsEmpty = (await RNFetchBlob.fs.stat(fileLocation)).size == 0

       let modelq = 5;
       let debugZ: Array<any> = [80, 644, 231];
         debugZ.push(1 >> (Math.min(Math.abs(modelq), 3)));
          let pangleD = String.fromCharCode(109,95,49,57,95,117,97,110,0);
          let popupy = 3.0;
         modelq >>= Math.min(Math.abs(debugZ.length ^ 2), 1);
         pangleD = `${(pangleD == String.fromCharCode(82,0) ? parseInt(`${popupy}`) : pangleD.length)}`;
         popupy /= Math.max(2, parseInt(`${popupy}`) / (Math.max(pangleD.length, 6)));
      for (let b = 0; b < 3; b++) {
         modelq <<= Math.min(3, Math.abs(3));
      }
          let whiteanimationlivex = false;
          let favoriteu = String.fromCharCode(99,111,108,108,101,99,116,105,111,110,95,122,95,52,54,0);
         debugZ.push(modelq << (Math.min(3, Math.abs(3))));
         whiteanimationlivex = !whiteanimationlivex && favoriteu.length < 61;
         favoriteu += `${(favoriteu.length ^ (whiteanimationlivex ? 5 : 3))}`;
         debugZ = [3];
      for (let q = 0; q < 1; q++) {
          let downK = true;
          let moonP = String.fromCharCode(116,98,117,102,95,108,95,52,50,0);
          let blackr = String.fromCharCode(116,95,56,50,95,106,100,109,97,105,110,99,116,0);
          let yellowE: Array<any> = [172, 295, 489];
          let pressurea = String.fromCharCode(114,95,56,95,104,112,101,108,100,115,112,0);
         modelq += ((downK ? 3 : 3) & 1);
         downK = 19 == moonP.length && 19 == blackr.length;
         moonP = `${moonP.length}`;
         blackr = `${blackr.length & 2}`;
         yellowE.push(pressurea.length ^ yellowE.length);
         pressurea += `${moonP.length | pressurea.length}`;
      }
      turndownH.push(turndownH.length / (Math.max(1, 10)));
      nativemoduleG -= 1;
                    

   let untickH = 6402365 >= turndownH.length;
   do {
       let const_66S = String.fromCharCode(112,114,101,112,114,111,103,114,97,109,109,101,100,95,54,95,57,52,0);
       let sliderE = 0.0;
       let whistlee = false;
       let navigationl: Map<any, any> = new Map([[String.fromCharCode(108,111,111,112,98,97,99,107,95,108,95,49,54,0),621], [String.fromCharCode(120,95,50,51,95,105,115,99,111,118,101,114,0),744]]);
       let baidu3 = true;
      if (!const_66S.startsWith(`${whistlee}`)) {
          let video1 = String.fromCharCode(102,108,101,120,95,122,95,51,55,0);
          let stylesj: Array<any> = [930, 469, 661];
          let pauseD: Array<any> = [849, 736];
          let actionT = 0.0;
          let mbnativeE = String.fromCharCode(101,120,101,99,117,116,105,111,110,95,98,95,49,48,0);
         const_66S = "2";
         video1 = "3";
         stylesj = [mbnativeE.length * 2];
         pauseD = [1];
         actionT += parseFloat(`${pauseD.length}`);
         mbnativeE = `${pauseD.length / 1}`;
      }
      for (let q = 0; q < 3; q++) {
         sliderE *= parseFloat(`${navigationl.size & const_66S.length}`);
      }
         navigationl.set(`${baidu3}`, 2);
       let yellowcirclebgh = 4.0;
         sliderE -= parseFloat(`${3}`);
         sliderE += (parseFloat(`${(baidu3 ? 4 : 2) & 3}`));
      if (baidu3) {
         sliderE -= parseFloat(`${2 & parseInt(`${yellowcirclebgh}`)}`);
      }
         const_66S = `${const_66S.length}`;
          let giftbuttonc = String.fromCharCode(107,95,54,52,95,100,105,103,101,115,116,98,121,110,105,100,0);
         yellowcirclebgh -= (String.fromCharCode(78,0) == giftbuttonc ? parseInt(`${yellowcirclebgh}`) : giftbuttonc.length);
          let issub1 = String.fromCharCode(108,97,121,115,95,120,95,51,52,0);
          let countdowne: Array<any> = [28, 389, 804];
         yellowcirclebgh /= Math.max(2, parseInt(`${sliderE}`));
         issub1 += `${countdowne.length - issub1.length}`;
         countdowne.push(countdowne.length - 3);
         baidu3 = String.fromCharCode(116,0) == const_66S;
      for (let s = 0; s < 3; s++) {
         baidu3 = const_66S.length < 35;
      }
      while (!const_66S.startsWith(`${whistlee}`)) {
          let regengB = 2.0;
          let circle0 = true;
         const_66S += `${((circle0 ? 3 : 5) >> (Math.min(Math.abs(navigationl.size), 3)))}`;
         regengB /= Math.max(5, parseInt(`${regengB}`) * parseInt(`${regengB}`));
         circle0 = 82.33 < (regengB + regengB);
         break;
      }
         const_66S = `${const_66S.length}`;
      if (3 <= (navigationl.size | 1) && 1 <= navigationl.size) {
         navigationl.set(`${yellowcirclebgh}`, ((baidu3 ? 1 : 2) / (Math.max(parseInt(`${yellowcirclebgh}`), 8))));
      }
      turndownH = [2];
      if (untickH) {
         break;
      }
   } while (untickH && (1 > (turndownH.length & 5) && !config_));
   let unselectedl = container4 ? !container4 : container4;
   do {
      container4 = buildo.length >= gray4.size;
      if (unselectedl) {
         break;
      }
   } while (unselectedl && ((3.79 + nativemoduleG) < 3.53));
                    if (!fileIsEmpty) {

       let linkj = String.fromCharCode(114,95,51,57,95,100,101,116,97,99,104,101,100,0);
       let libjsijniprofilerO = 4.0;
         libjsijniprofilerO -= 1;
         libjsijniprofilerO += linkj.length | 2;
          let bootsplashY: Array<any> = [245, 667];
          let nativeexi: Map<any, any> = new Map([[String.fromCharCode(110,95,51,54,95,114,105,99,101,0),888], [String.fromCharCode(113,95,51,95,105,102,114,97,109,101,0),315]]);
          let mbbidW = 4.0;
         libjsijniprofilerO /= Math.max(4, nativeexi.size);
         bootsplashY.push(bootsplashY.length);
         nativeexi = new Map([[`${bootsplashY.length}`, 3 % (Math.max(7, parseInt(`${mbbidW}`)))]]);
         mbbidW -= bootsplashY.length % (Math.max(9, parseInt(`${mbbidW}`)));
          let backw = false;
         libjsijniprofilerO += ((backw ? 1 : 2) + parseInt(`${libjsijniprofilerO}`));
      for (let u = 0; u < 1; u++) {
         linkj += `${linkj.length}`;
      }
         linkj = `${2 << (Math.min(4, Math.abs(parseInt(`${libjsijniprofilerO}`))))}`;
      turndownH = [buildo.length];
      config_ = 1 <= traminiR.size;
                        setMiniVodUrl(`${fileLocation}`);
                    } else {

      layoutE /= Math.max(parseFloat(`${2}`), 1);
       let assist5 = String.fromCharCode(105,108,111,103,95,55,95,57,55,0);
      for (let y = 0; y < 1; y++) {
         assist5 = `${(assist5 == String.fromCharCode(103,0) ? assist5.length : assist5.length)}`;
      }
      let sendj = assist5.length >= 8359914;
      do {
          let cornerkicky = String.fromCharCode(108,105,98,115,112,101,101,120,95,106,95,51,48,0);
          let sinaO = 1;
          let penaltyshootnogoalR = 0;
         assist5 = `${sinaO}`;
         cornerkicky += `${cornerkicky.length & 3}`;
         sinaO <<= Math.min(Math.abs(cornerkicky.length / 3), 4);
         penaltyshootnogoalR /= Math.max(penaltyshootnogoalR & 3, 4);
         if (sendj) {
            break;
         }
      } while ((assist5.includes(assist5)) && sendj);
          let slider_ = String.fromCharCode(100,101,110,111,105,115,101,95,102,95,57,52,0);
          let settingJ: Map<any, any> = new Map([[String.fromCharCode(105,95,49,48,95,102,102,112,114,111,98,101,0),667], [String.fromCharCode(116,95,50,95,115,101,109,97,110,116,105,99,0),57], [String.fromCharCode(109,97,112,102,105,108,101,95,107,95,50,0),156]]);
         assist5 = `${settingJ.size & slider_.length}`;
      nativemoduleG *= parseInt(`${layoutE}`);
                        

      gray4 = new Map([[`${window_1M.length}`, 1 * window_1M.length]]);
      window_1M.push((1 ^ (config_ ? 5 : 2)));
                        setMiniVodUrl(currentVod.ads_pic)
                    }
                } else {

       let full4 = String.fromCharCode(109,97,116,114,105,99,101,115,95,119,95,53,0);
         full4 = `${full4.length}`;
       let renewV: Array<any> = [556, 44];
       let dplusP: Array<any> = [770, 386, 513];
      if (5 == (renewV.length ^ dplusP.length) || 4 == (renewV.length ^ 5)) {
         dplusP.push(full4.length << (Math.min(Math.abs(2), 2)));
      }
      config_ = 56.8 == layoutE || traminiR.size == 64;
   for (let f = 0; f < 3; f++) {
       let baseg = 1.0;
      for (let v = 0; v < 2; v++) {
         baseg *= parseInt(`${baseg}`);
      }
          let entry7 = true;
          let roomc = 5.0;
          let inouttargetredD: Array<any> = [403, 60, 381];
         baseg /= Math.max(2 & inouttargetredD.length, 5);
         entry7 = !entry7;
         roomc += parseFloat(`${2 & parseInt(`${roomc}`)}`);
         inouttargetredD = [1 - parseInt(`${roomc}`)];
      for (let b = 0; b < 2; b++) {
          let basketballawayteamy = 0;
          let internet0 = String.fromCharCode(101,112,122,115,95,102,95,51,54,0);
         baseg /= Math.max(basketballawayteamy, 2);
         basketballawayteamy &= internet0.length;
         internet0 = `${(String.fromCharCode(83,0) == internet0 ? internet0.length : internet0.length)}`;
      }
      layoutE /= Math.max(1, parseFloat(`${window_1M.length}`));
   }
                    

   for (let p = 0; p < 3; p++) {
      turndownH.push(2 - parseInt(`${layoutE}`));
   }
   let libapminsightbP = config_ ? !config_ : config_;
   do {
      config_ = (layoutE * nativemoduleG) > 79.7;
      if (libapminsightbP) {
         break;
      }
   } while ((5 == (gray4.size & 3) || config_) && libapminsightbP);
                    setMiniVodUrl(currentVod.ads_pic)
                }
            }
        };
        if (DOWNLOAD_WATCH_ANYTIME === true) {
            
            fn();
        }
    }, [isBuffering, isPause]);

    useEffect(() => {
        setMiniVodUrl(currentVod.ads_pic);
    }, [currentVod]);

    const handleOnReadyForDisplay = useCallback(() => {
       let libavfilterF: Map<any, any> = new Map([[String.fromCharCode(116,95,53,57,95,114,119,103,116,0),1000], [String.fromCharCode(120,95,55,53,95,101,113,117,97,108,105,122,101,114,0),397]]);
    let largeb = 1.0;
    let release_5qX = String.fromCharCode(116,104,101,95,52,95,54,56,0);
    let mbbannero = 2;
    let over8 = String.fromCharCode(97,98,111,114,116,95,102,95,55,56,0);
    let imagemanagerc = 3.0;
    let iconlogoutX = String.fromCharCode(107,95,49,53,95,100,101,114,105,118,101,0);
    let backwhite_ = String.fromCharCode(111,110,115,101,116,95,115,95,55,48,0);
    let mintegrala = 1;
    let suggestion8: Array<any> = [300, 694];
    let booti = true;
    let long_cl: Map<any, any> = new Map([[String.fromCharCode(104,95,50,95,102,99,111,100,101,0),String.fromCharCode(114,101,102,115,95,115,95,56,54,0)], [String.fromCharCode(101,112,111,108,108,95,98,95,51,48,0),String.fromCharCode(100,97,116,101,115,95,116,95,57,51,0)], [String.fromCharCode(120,114,117,110,95,105,95,54,55,0),String.fromCharCode(109,95,56,48,95,110,115,116,97,110,116,0)]]);
      release_5qX = `${parseInt(`${imagemanagerc}`) ^ release_5qX.length}`;
       let predictionbanner8: Array<any> = [357, 231];
          let with_4R = 0;
          let area5 = String.fromCharCode(115,95,50,56,0);
          let moduleZ = String.fromCharCode(108,95,51,56,95,112,97,99,107,101,116,104,101,97,100,101,114,0);
         predictionbanner8 = [with_4R];
         with_4R <<= Math.min(2, area5.length);
         area5 += "1";
         moduleZ += `${(area5 == String.fromCharCode(65,0) ? moduleZ.length : area5.length)}`;
      while ((predictionbanner8.length & 1) <= 5 && (predictionbanner8.length & predictionbanner8.length) <= 1) {
         predictionbanner8 = [predictionbanner8.length | 2];
         break;
      }
      for (let h = 0; h < 3; h++) {
         predictionbanner8 = [predictionbanner8.length];
      }
      mbbannero &= mbbannero * parseInt(`${imagemanagerc}`);
       let iconarrowrightorangeV = 2.0;
       let arrowP = 0;
          let buffer0 = String.fromCharCode(122,101,114,111,99,111,100,101,99,95,48,95,55,57,0);
          let oranget = String.fromCharCode(111,95,56,57,95,115,116,114,105,112,115,0);
         iconarrowrightorangeV += buffer0.length | oranget.length;
      let flipperH = 8939549.0 <= iconarrowrightorangeV;
      do {
         iconarrowrightorangeV /= Math.max(5, parseInt(`${iconarrowrightorangeV}`));
         if (flipperH) {
            break;
         }
      } while ((arrowP == iconarrowrightorangeV) && flipperH);
      let mimoq = 6761576.0 <= iconarrowrightorangeV;
      do {
         iconarrowrightorangeV /= Math.max(3, arrowP);
         if (mimoq) {
            break;
         }
      } while ((3.36 >= iconarrowrightorangeV) && mimoq);
      let indicatorX = iconarrowrightorangeV <= 8538128.0;
      do {
          let iconeditK: Map<any, any> = new Map([[String.fromCharCode(101,95,49,56,95,109,112,101,103,118,105,100,101,111,100,97,116,97,0),String.fromCharCode(113,95,56,54,95,115,118,97,114,105,110,116,0)], [String.fromCharCode(114,101,98,117,105,108,100,95,112,95,52,54,0),String.fromCharCode(119,95,53,48,95,108,117,116,100,0)]]);
          let emojiheartK: Map<any, any> = new Map([[String.fromCharCode(97,95,50,55,95,98,108,117,114,114,97,98,108,101,0),561], [String.fromCharCode(101,95,53,57,95,100,105,115,112,111,115,101,0),456], [String.fromCharCode(120,95,52,56,95,118,116,101,115,116,0),237]]);
          let private_db = 0;
          let stationsS = String.fromCharCode(115,108,97,115,104,95,97,95,54,0);
          let modulesi = 3.0;
         iconarrowrightorangeV *= parseInt(`${modulesi}`);
         iconeditK = new Map([[`${iconeditK.size}`, stationsS.length * 2]]);
         emojiheartK.set(`${private_db}`, 3 - private_db);
         stationsS += `${1 | iconeditK.size}`;
         modulesi -= parseFloat(`${stationsS.length}`);
         if (indicatorX) {
            break;
         }
      } while (indicatorX && (4.32 > (arrowP / (Math.max(iconarrowrightorangeV, 2)))));
         iconarrowrightorangeV += parseInt(`${iconarrowrightorangeV}`) >> (Math.min(4, Math.abs(arrowP)));
         iconarrowrightorangeV /= Math.max(arrowP, 5);
      largeb /= Math.max(2, parseFloat(`${iconlogoutX.length}`));
   while ((largeb / 2.18) == 5.89 && (mintegrala - 4) == 4) {
       let commentg = String.fromCharCode(114,101,108,111,99,107,95,53,95,54,57,0);
         commentg += `${commentg.length + commentg.length}`;
      while (commentg.endsWith(`${commentg.length}`)) {
         commentg = `${commentg.length % 3}`;
         break;
      }
      while (commentg.length < 2) {
         commentg += `${(String.fromCharCode(106,0) == commentg ? commentg.length : commentg.length)}`;
         break;
      }
      mintegrala ^= mbbannero;
      break;
   }
   if ((mbbannero / 3) > 3 && 5 > (backwhite_.length / 3)) {
      mbbannero /= Math.max(libavfilterF.size & mbbannero, 2);
   }
      over8 += `${3 >> (Math.min(3, Math.abs(mintegrala)))}`;
       let blacklistq = 4.0;
      if ((blacklistq / (Math.max(5.45, 9))) >= 3.52) {
          let defaultroombgg = String.fromCharCode(114,105,100,103,101,95,52,95,50,50,0);
          let giftC = String.fromCharCode(108,111,99,97,108,104,111,115,116,95,103,95,50,50,0);
          let temp7 = String.fromCharCode(108,95,57,49,95,99,111,108,108,97,116,105,110,103,0);
         blacklistq -= parseInt(`${blacklistq}`) ^ 2;
         defaultroombgg += `${giftC.length}`;
         giftC = `${temp7.length >> (Math.min(Math.abs(3), 1))}`;
         temp7 += `${temp7.length << (Math.min(4, giftC.length))}`;
      }
      let chinaS = 7682645.0 >= blacklistq;
      do {
         blacklistq += 2 ^ parseInt(`${blacklistq}`);
         if (chinaS) {
            break;
         }
      } while ((1.9 >= (blacklistq / (Math.max(3.74, 9)))) && chinaS);
         blacklistq *= parseInt(`${blacklistq}`);
      imagemanagerc += parseFloat(`${backwhite_.length}`);
      mbbannero &= mintegrala;
       let indicatorF = String.fromCharCode(110,95,51,57,95,115,104,111,114,116,116,101,114,109,0);
      while (indicatorF.length > 3 && indicatorF == String.fromCharCode(73,0)) {
         indicatorF += `${indicatorF.length % 3}`;
         break;
      }
      let mbbannerg = 6520428 <= indicatorF.length;
      do {
         indicatorF = `${indicatorF.length ^ indicatorF.length}`;
         if (mbbannerg) {
            break;
         }
      } while (mbbannerg && (3 < indicatorF.length));
      while (indicatorF.includes(indicatorF)) {
         indicatorF = `${(indicatorF == String.fromCharCode(65,0) ? indicatorF.length : indicatorF.length)}`;
         break;
      }
      suggestion8 = [over8.length / 2];
   for (let h = 0; h < 1; h++) {
       let dragh = 5;
       let iconfeedbackS = String.fromCharCode(117,116,117,114,101,95,49,95,57,52,0);
      for (let b = 0; b < 2; b++) {
         iconfeedbackS = "2";
      }
      while ((dragh * 4) >= 1) {
         dragh &= iconfeedbackS.length;
         break;
      }
      if ((dragh / 4) == 5 && 4 == (dragh / (Math.max(iconfeedbackS.length, 9)))) {
         iconfeedbackS = `${(iconfeedbackS == String.fromCharCode(81,0) ? dragh : iconfeedbackS.length)}`;
      }
      let pauses = iconfeedbackS.length >= 4940116;
      do {
          let uploadQ = true;
          let launch5 = 2;
          let basketballplayerplaceholderK: Array<any> = [315, 920, 106];
          let scrollviews: Array<any> = [776, 214, 656];
         iconfeedbackS += "3";
         uploadQ = !uploadQ;
         launch5 ^= 3;
         basketballplayerplaceholderK = [basketballplayerplaceholderK.length];
         scrollviews = [((uploadQ ? 4 : 1) % (Math.max(launch5, 3)))];
         if (pauses) {
            break;
         }
      } while (pauses && (iconfeedbackS.length >= dragh));
          let upgrade2 = 1;
          let sharewhite1: Map<any, any> = new Map([[String.fromCharCode(108,111,103,103,101,114,95,49,95,51,53,0),811], [String.fromCharCode(108,95,53,52,95,118,105,101,119,101,114,0),276]]);
         dragh |= upgrade2 / (Math.max(1, dragh));
         upgrade2 *= 2 * sharewhite1.size;
         sharewhite1 = new Map([[`${sharewhite1.size}`, sharewhite1.size]]);
      for (let x = 0; x < 3; x++) {
         iconfeedbackS = `${(iconfeedbackS == String.fromCharCode(87,0) ? iconfeedbackS.length : dragh)}`;
      }
      backwhite_ += `${release_5qX.length + 2}`;
   }
   while (5 < (mintegrala & suggestion8.length)) {
      suggestion8.push((release_5qX == String.fromCharCode(56,0) ? suggestion8.length : release_5qX.length));
      break;
   }
      iconlogoutX = `${iconlogoutX.length}`;
   if (libavfilterF.size <= 3) {
      over8 += `${mbbannero % (Math.max(3, 2))}`;
   }
      backwhite_ = `${(String.fromCharCode(70,0) == backwhite_ ? backwhite_.length : parseInt(`${largeb}`))}`;

        setVideoReadyIos(true)

      backwhite_ += "2";
      backwhite_ = `${parseInt(`${imagemanagerc}`)}`;
       let issubj = false;
      if (!issubj) {
         issubj = (!issubj ? !issubj : !issubj);
      }
          let roundb: Array<any> = [837, 726, 883];
          let unreadc = String.fromCharCode(115,95,53,52,95,115,105,109,117,108,97,116,101,0);
         issubj = !issubj;
         roundb = [unreadc.length];
         unreadc += `${roundb.length}`;
      let controlw = issubj ? !issubj : issubj;
      do {
         issubj = !issubj;
         if (controlw) {
            break;
         }
      } while (controlw && (issubj));
      imagemanagerc /= Math.max(parseFloat(`${mintegrala & 1}`), 2);
       let mappingC = 1;
       let shrinkN: Map<any, any> = new Map([[String.fromCharCode(106,95,52,95,114,101,109,105,110,100,0),333], [String.fromCharCode(100,95,55,48,95,115,116,115,122,0),477], [String.fromCharCode(107,95,55,48,95,119,105,116,104,100,114,97,119,0),888]]);
      if (Array.from(shrinkN.values()).includes(mappingC)) {
         mappingC &= mappingC;
      }
          let circleQ = true;
         shrinkN.set(`${circleQ}`, 3 >> (Math.min(4, Math.abs(shrinkN.size))));
      if (shrinkN.get(`${mappingC}`) != null) {
          let libbufferH = true;
          let libfb0 = String.fromCharCode(112,117,108,115,101,95,118,95,52,56,0);
          let orientationH = String.fromCharCode(115,112,114,105,116,101,115,95,50,95,57,0);
          let mergerd = 2.0;
          let airbnbstarA = 4.0;
         shrinkN.set(libfb0, 3);
         libbufferH = !libbufferH;
         libfb0 += `${(orientationH == String.fromCharCode(121,0) ? orientationH.length : (libbufferH ? 2 : 1))}`;
         mergerd -= (parseFloat(`${orientationH == String.fromCharCode(116,0) ? orientationH.length : parseInt(`${airbnbstarA}`)}`));
         airbnbstarA *= 3 * parseInt(`${airbnbstarA}`);
      }
      while (shrinkN.size == mappingC) {
          let collectionA = 0.0;
          let dicer: Map<any, any> = new Map([[String.fromCharCode(102,95,57,54,95,104,97,115,104,116,97,103,115,0),false ], [String.fromCharCode(109,100,99,116,95,108,95,52,48,0),false ]]);
          let gradlewm = 4.0;
          let anytimeh = String.fromCharCode(117,110,114,111,108,108,101,100,95,50,95,50,48,0);
          let gestureo = 1.0;
         shrinkN = new Map([[anytimeh, 1 & anytimeh.length]]);
         collectionA /= Math.max(parseInt(`${collectionA}`), 4);
         dicer.set(`${gradlewm}`, parseInt(`${gradlewm}`));
         gestureo *= parseFloat(`${parseInt(`${collectionA}`) << (Math.min(4, Math.abs(1)))}`);
         break;
      }
      while (!Array.from(shrinkN.keys()).includes(`${mappingC}`)) {
         mappingC <<= Math.min(3, Math.abs(mappingC));
         break;
      }
      if (Array.from(shrinkN.values()).includes(mappingC)) {
         mappingC += mappingC;
      }
      backwhite_ = `${release_5qX.length ^ 2}`;
       let logod = true;
       let shootyesgoalY = true;
       let airbnbstar2: Map<any, any> = new Map([[String.fromCharCode(100,105,109,109,101,100,95,105,95,50,51,0),String.fromCharCode(98,95,53,50,95,120,109,117,108,116,105,112,108,101,0)], [String.fromCharCode(106,95,54,57,95,101,109,98,101,100,100,105,110,103,0),String.fromCharCode(100,105,118,105,115,105,111,110,95,122,95,50,56,0)], [String.fromCharCode(99,111,110,103,101,115,116,105,111,110,95,115,95,55,49,0),String.fromCharCode(100,95,49,52,95,99,104,111,105,99,101,115,0)]]);
         shootyesgoalY = airbnbstar2.size >= 4 || !logod;
      while ((airbnbstar2.size >> (Math.min(Math.abs(4), 1))) < 1 || airbnbstar2.size < 4) {
         logod = !shootyesgoalY;
         break;
      }
       let matchdetailbgh = true;
      for (let s = 0; s < 1; s++) {
          let containerv: Map<any, any> = new Map([[String.fromCharCode(112,108,97,121,95,55,95,50,0),21], [String.fromCharCode(101,95,57,55,95,116,114,97,110,115,117,112,112,0),359], [String.fromCharCode(102,95,53,52,95,115,116,97,107,101,100,0),103]]);
          let shielddone_ = String.fromCharCode(108,111,103,102,117,110,99,95,97,95,55,50,0);
          let mimey = String.fromCharCode(112,95,50,57,95,107,101,101,112,105,110,103,0);
         shootyesgoalY = 59 == shielddone_.length || mimey == String.fromCharCode(73,0);
         containerv = new Map([[`${containerv.size}`, 3]]);
         shielddone_ = `${containerv.size}`;
      }
      let left5 = logod ? !logod : logod;
      do {
         logod = shootyesgoalY;
         if (left5) {
            break;
         }
      } while (((airbnbstar2.size | 1) >= 3) && left5);
      while ((airbnbstar2.size | 1) > 3) {
         airbnbstar2.set(`${logod}`, ((shootyesgoalY ? 3 : 1)));
         break;
      }
         airbnbstar2 = new Map([[`${matchdetailbgh}`, ((matchdetailbgh ? 1 : 2))]]);
         logod = shootyesgoalY;
      while (!matchdetailbgh) {
         matchdetailbgh = (shootyesgoalY ? logod : !shootyesgoalY);
         break;
      }
      over8 += `${mintegrala + mbbannero}`;
      mintegrala <<= Math.min(5, Math.abs(parseInt(`${imagemanagerc}`) >> (Math.min(Math.abs(2), 4))));
       let megaphoneJ = String.fromCharCode(114,95,52,52,95,109,98,98,108,111,99,107,0);
       let bellX = true;
         bellX = megaphoneJ.length == 97 && bellX;
      if (4 > megaphoneJ.length) {
          let sheetC = 5.0;
          let result5 = String.fromCharCode(110,97,114,114,111,119,95,100,95,49,48,48,0);
          let combinedl = String.fromCharCode(97,108,108,112,97,115,115,95,102,95,50,0);
         megaphoneJ = `${(combinedl == String.fromCharCode(65,0) ? combinedl.length : megaphoneJ.length)}`;
         sheetC /= Math.max(result5.length, 2);
         result5 += `${3 + result5.length}`;
      }
      libavfilterF.set(release_5qX, (release_5qX == String.fromCharCode(99,0) ? suggestion8.length : release_5qX.length));
       let buildQ = 5.0;
       let zoomE: Map<any, any> = new Map([[String.fromCharCode(111,112,101,114,97,116,105,111,110,115,95,56,95,57,56,0),847], [String.fromCharCode(114,101,97,99,116,95,57,95,56,0),89]]);
      for (let y = 0; y < 3; y++) {
         buildQ -= parseInt(`${buildQ}`);
      }
      if (!Array.from(zoomE.keys()).includes(`${buildQ}`)) {
         zoomE = new Map([[`${zoomE.size}`, 3 << (Math.min(2, Math.abs(zoomE.size)))]]);
      }
          let sheeta = String.fromCharCode(115,95,53,55,95,115,101,113,118,105,100,101,111,0);
         zoomE = new Map([[`${buildQ}`, 2 & sheeta.length]]);
      if (5.32 < (5.8 + buildQ) && 3 < (2 << (Math.min(4, Math.abs(zoomE.size))))) {
          let robotoz = false;
         buildQ *= 3;
      }
       let mergerK = true;
       let iconviewergifB = false;
      if (buildQ >= zoomE.size) {
         zoomE = new Map([[`${zoomE.size}`, 3 >> (Math.min(2, Math.abs(zoomE.size)))]]);
      }
      iconlogoutX = `${iconlogoutX.length}`;
      backwhite_ = `${1 << (Math.min(Math.abs(parseInt(`${largeb}`)), 1))}`;
       let circlee = String.fromCharCode(108,106,112,101,103,95,114,95,54,53,0);
      while (circlee.startsWith(`${circlee.length}`)) {
          let libreactG = 0.0;
          let header3 = String.fromCharCode(116,114,117,110,99,97,116,101,100,95,107,95,50,53,0);
          let dragw = String.fromCharCode(108,95,53,48,95,112,97,121,108,111,97,100,115,0);
         circlee = "1";
         libreactG *= parseFloat(`${1 | dragw.length}`);
         header3 += "1";
         dragw += "1";
         break;
      }
      let appsZ = 8475540 >= circlee.length;
      do {
          let k_centerH = String.fromCharCode(115,121,110,99,104,114,111,110,105,115,101,100,95,119,95,51,55,0);
          let libyogaB = 2.0;
          let activity2 = 2.0;
          let footballfiledlayout_ = String.fromCharCode(112,114,111,109,112,116,95,107,95,53,51,0);
         circlee = `${parseInt(`${libyogaB}`)}`;
         k_centerH += `${k_centerH.length}`;
         activity2 += parseFloat(`${k_centerH.length * 2}`);
         footballfiledlayout_ = `${3 * parseInt(`${activity2}`)}`;
         if (appsZ) {
            break;
         }
      } while ((circlee != circlee) && appsZ);
         circlee = `${circlee.length}`;
      iconlogoutX += `${2 + parseInt(`${largeb}`)}`;
   while (over8.length < 4 && booti) {
      booti = 47 >= iconlogoutX.length;
      break;
   }
       let malaysiap = String.fromCharCode(115,117,98,98,97,110,100,95,110,95,50,54,0);
      let auto_8cU = 8538076 <= malaysiap.length;
      do {
         malaysiap = `${malaysiap.length}`;
         if (auto_8cU) {
            break;
         }
      } while (auto_8cU && (!malaysiap.startsWith(malaysiap)));
          let expandy: Array<any> = [981, 480];
          let baseZ = 0;
          let policyd = 2.0;
         malaysiap += `${baseZ ^ 3}`;
         expandy.push(1);
         baseZ *= expandy.length ^ parseInt(`${policyd}`);
         policyd *= parseFloat(`${parseInt(`${policyd}`)}`);
      if (malaysiap != String.fromCharCode(82,0)) {
         malaysiap = `${malaysiap.length}`;
      }
      suggestion8.push(2 * backwhite_.length);
   if (backwhite_.length < mintegrala) {
      mintegrala /= Math.max(3, parseInt(`${largeb}`));
   }
      over8 += `${2 & parseInt(`${imagemanagerc}`)}`;
        setVideoReadyAndroid(true)
    }, []);

    const onAdsBtnPress = () => {
       let langO = String.fromCharCode(104,95,57,52,95,105,110,112,117,116,121,0);
    let stepH: Array<any> = [363, 751, 142];
    let starR: Map<any, any> = new Map([[String.fromCharCode(107,95,51,51,95,109,109,99,111,115,0),438], [String.fromCharCode(107,95,52,52,95,115,99,97,110,0),841], [String.fromCharCode(102,95,50,52,95,97,99,116,117,97,108,0),619]]);
    let abidetectW = 0.0;
    let static_81 = 0.0;
    let cornershoot5: Map<any, any> = new Map([[String.fromCharCode(98,95,54,48,95,116,99,112,0),String.fromCharCode(97,99,99,101,108,101,114,97,116,105,111,110,95,56,95,50,55,0)], [String.fromCharCode(97,109,111,117,110,116,115,95,52,95,52,51,0),String.fromCharCode(113,95,53,54,95,118,111,119,101,108,0)], [String.fromCharCode(115,116,97,108,101,95,51,95,55,0),String.fromCharCode(99,108,97,105,109,101,100,95,57,95,53,50,0)]]);
    let libtobk = String.fromCharCode(104,95,53,52,95,108,111,99,107,110,101,115,115,0);
    let episodesL = false;
    let shrinkk: Map<any, any> = new Map([[String.fromCharCode(114,95,55,56,95,99,111,109,112,114,101,115,115,105,111,110,0),623], [String.fromCharCode(115,95,57,51,95,100,105,115,115,105,109,105,108,97,114,105,116,121,0),974], [String.fromCharCode(106,95,57,51,95,103,97,117,115,115,0),878]]);
    let yellowcirclebgF = String.fromCharCode(121,95,55,55,95,115,97,118,101,112,111,105,110,116,115,0);
    let libfbf: Array<any> = [340, 657, 426];
    let turndownh = String.fromCharCode(97,95,57,54,95,99,104,117,110,107,121,99,104,117,110,107,121,0);
    let ajaxw = String.fromCharCode(112,101,114,109,101,97,116,101,95,117,95,54,57,0);
    let yellowZ = 4.0;
    let defaultteam7: Map<any, any> = new Map([[String.fromCharCode(101,115,116,105,109,97,116,111,114,95,101,95,49,49,0),String.fromCharCode(101,120,99,104,97,110,103,101,115,95,122,95,52,53,0)], [String.fromCharCode(114,101,115,105,100,117,101,95,102,95,51,0),String.fromCharCode(98,101,110,101,97,116,104,95,121,95,52,51,0)]]);
    let cancelo = 1.0;
    let homeg = String.fromCharCode(100,105,118,105,115,105,111,110,95,103,95,52,50,0);
    let singaporeC = String.fromCharCode(108,95,51,52,95,108,97,98,101,108,101,100,0);
   let selectJ = 9884735 >= starR.size;
   do {
      starR = new Map([[`${starR.size}`, starR.size ^ 3]]);
      if (selectJ) {
         break;
      }
   } while ((starR.get(`${cornershoot5.size}`) == null) && selectJ);
      turndownh = `${stepH.length ^ yellowcirclebgF.length}`;
      episodesL = langO.length == 3 || 3 == yellowcirclebgF.length;
      langO = `${libfbf.length / 3}`;

        if (!currentVod?.ads_url) {

       let episode4 = false;
       let mbsplashE = String.fromCharCode(105,95,57,56,95,100,98,105,0);
         mbsplashE += `${mbsplashE.length}`;
          let profilepick = true;
         episode4 = !mbsplashE.endsWith(`${episode4}`);
         profilepick = !profilepick;
      for (let t = 0; t < 1; t++) {
          let homeiconV: Array<any> = [681, 317, 364];
          let tickedW = String.fromCharCode(103,95,50,48,0);
         episode4 = 72 >= mbsplashE.length;
         homeiconV.push(homeiconV.length);
         tickedW += `${1 + tickedW.length}`;
      }
      if (mbsplashE.endsWith(`${episode4}`)) {
         mbsplashE += `${((episode4 ? 4 : 2) + 3)}`;
      }
         episode4 = mbsplashE.startsWith(`${episode4}`);
       let scrollview7 = String.fromCharCode(109,101,109,110,114,95,48,95,54,53,0);
      starR = new Map([[libtobk, (libtobk == String.fromCharCode(67,0) ? (episode4 ? 5 : 4) : libtobk.length)]]);
       let expandb = String.fromCharCode(115,95,52,49,95,115,101,103,109,101,110,116,97,116,105,111,110,0);
      let full2 = 7933340 <= expandb.length;
      do {
         expandb = `${1 / (Math.max(1, expandb.length))}`;
         if (full2) {
            break;
         }
      } while (full2 && (expandb == String.fromCharCode(114,0)));
      while (expandb.startsWith(`${expandb.length}`)) {
          let stationsV = String.fromCharCode(115,99,97,110,110,101,100,95,119,95,51,55,0);
          let r_titlen = String.fromCharCode(101,95,52,54,95,116,119,105,99,101,0);
          let libsentryH = 5.0;
          let mimej = String.fromCharCode(99,111,110,102,105,100,101,110,116,105,97,108,95,107,95,50,0);
         expandb = "3";
         stationsV += `${r_titlen.length + 2}`;
         r_titlen = `${r_titlen.length + parseInt(`${libsentryH}`)}`;
         libsentryH += stationsV.length;
         mimej += `${mimej.length}`;
         break;
      }
      while (expandb.length <= expandb.length) {
          let iconadslinkS: Map<any, any> = new Map([[String.fromCharCode(117,95,52,57,95,103,105,103,97,98,121,116,101,115,0),116], [String.fromCharCode(100,115,104,111,119,95,56,95,50,57,0),426], [String.fromCharCode(108,95,55,55,95,116,101,97,114,0),699]]);
          let spinnerP: Array<any> = [654, 379];
          let penaltyshootnogoalP = 2.0;
          let abidetects = 1.0;
         expandb += `${iconadslinkS.size}`;
         iconadslinkS.set(`${abidetects}`, parseInt(`${abidetects}`));
         spinnerP = [parseInt(`${penaltyshootnogoalP}`) << (Math.min(Math.abs(parseInt(`${abidetects}`)), 3))];
         penaltyshootnogoalP *= 3 ^ parseInt(`${penaltyshootnogoalP}`);
         break;
      }
      langO = `${(turndownh == String.fromCharCode(82,0) ? turndownh.length : parseInt(`${static_81}`))}`;
       let kicka: Array<any> = [219, 0, 169];
          let iconarrowrightorange5 = 3.0;
          let mutedL = String.fromCharCode(103,117,101,115,115,95,100,95,50,54,0);
         kicka = [1];
         iconarrowrightorange5 *= mutedL.length;
         mutedL += `${(String.fromCharCode(104,0) == mutedL ? mutedL.length : parseInt(`${iconarrowrightorange5}`))}`;
         kicka.push(kicka.length * kicka.length);
         kicka = [kicka.length | 1];
      libtobk += `${yellowcirclebgF.length / (Math.max(10, libfbf.length))}`;
   let terms6 = yellowcirclebgF == String.fromCharCode(105,50,115,114,56,0);
   do {
      yellowcirclebgF += `${(String.fromCharCode(83,0) == langO ? langO.length : starR.size)}`;
      if (terms6) {
         break;
      }
   } while (terms6 && (parseInt(`${static_81}`) >= yellowcirclebgF.length));
            return;

      static_81 += parseFloat(`${cornershoot5.size}`);
      cornershoot5.set(turndownh, 2);
      episodesL = 65 == cornershoot5.size;
   for (let n = 0; n < 1; n++) {
      turndownh = `${3 & langO.length}`;
   }
        }

        const url = currentVod?.ads_url.includes(BecomeFavicon.sharewhiteMegaphoneChinasame([89,69,69,65,49],0x31,false)) ? currentVod?.ads_url : BecomeFavicon.sharewhiteMegaphoneChinasame([-80,-84,-84,-88,-85,-30,-9,-9,-40],0xD8,false) + currentVod?.actionUrl

        Linking.openURL(url);

   while (turndownh == String.fromCharCode(78,0) || ajaxw == String.fromCharCode(66,0)) {
      turndownh = `${starR.size}`;
      break;
   }
   let template_6cl = 8621270 <= stepH.length;
   do {
      stepH.push(libfbf.length << (Math.min(Math.abs(3), 1)));
      if (template_6cl) {
         break;
      }
   } while (template_6cl && (stepH.includes(abidetectW)));
   for (let i = 0; i < 1; i++) {
       let texty: Map<any, any> = new Map([[String.fromCharCode(119,95,57,53,95,100,114,98,103,0),767], [String.fromCharCode(97,117,116,111,109,97,116,105,99,95,56,95,53,0),349]]);
       let back7 = String.fromCharCode(97,115,115,105,103,110,95,121,95,49,48,0);
       let libnmsA = String.fromCharCode(102,117,108,108,121,95,102,95,50,53,0);
          let config4 = 3.0;
          let activityb = 4.0;
         back7 = `${texty.size ^ 3}`;
         config4 /= Math.max(2, parseFloat(`${parseInt(`${config4}`) * parseInt(`${activityb}`)}`));
         activityb += parseFloat(`${parseInt(`${config4}`)}`);
      if (!libnmsA.includes(`${texty.size}`)) {
         libnmsA = `${texty.size / (Math.max(back7.length, 7))}`;
      }
      if (5 <= (back7.length >> (Math.min(5, Math.abs(texty.size)))) && (5 >> (Math.min(4, Math.abs(texty.size)))) <= 1) {
         back7 += `${(String.fromCharCode(55,0) == libnmsA ? libnmsA.length : back7.length)}`;
      }
      for (let h = 0; h < 3; h++) {
         libnmsA = `${libnmsA.length + 3}`;
      }
       let textlayoutmanagerf = 5.0;
         texty.set(`${back7}`, back7.length * texty.size);
      for (let q = 0; q < 2; q++) {
          let blacklistj: Array<any> = [84, 592];
          let backwhiteE = 3.0;
          let awayteamfieldi = false;
         libnmsA += `${((awayteamfieldi ? 5 : 4) + texty.size)}`;
         blacklistj.push(blacklistj.length);
         backwhiteE -= 2;
         awayteamfieldi = parseInt(`${backwhiteE}`) == blacklistj.length;
      }
      let chatroombackgroundh = 8652882 >= libnmsA.length;
      do {
          let codeS = 0.0;
          let privacyK = 0;
          let sideI = 0.0;
         libnmsA = `${privacyK * 2}`;
         codeS -= parseFloat(`${parseInt(`${codeS}`) + parseInt(`${sideI}`)}`);
         privacyK -= 2 - parseInt(`${sideI}`);
         if (chatroombackgroundh) {
            break;
         }
      } while ((!libnmsA.includes(`${texty.size}`)) && chatroombackgroundh);
      if (2 >= (libnmsA.length ^ 5)) {
         textlayoutmanagerf *= texty.size;
      }
      libtobk = `${shrinkk.size}`;
   }
   let backicong = abidetectW <= 7369887.0;
   do {
      abidetectW /= Math.max(1, parseFloat(`${yellowcirclebgF.length}`));
      if (backicong) {
         break;
      }
   } while (((5 & libfbf.length) == 2 && 5 == (libfbf.length * parseInt(`${abidetectW}`))) && backicong);

        mayi_push.watchAnytimeAdsClicksAnalytics({
            ads_slot_id: currentVod.ads_slot_id,
            ads_id: currentVod.ads_id,
            ads_title: currentVod.ads_event_title,
            ads_name: currentVod.ads_name,
        });
    }

    return (
        <>
            {showVod && (
                <>
                    <TouchableWithoutFeedback
                        onPress={() => {
                            showControls();
                            if (overlayRef.current) {
                                handlePlayPause();
                            }
                        }}>
                        <View>
                            <View style={[styles.container, { height: displayHeight }]}>
                                {(isBuffering ||
                                    (Platform.OS === 'ios'
                                        ? !isVideoReadyIos
                                        : !isVideoReadyAndroid)) && (
                                        <View style={styles.buffering}>
                                            <FastImage
                                                source={videoBufferGif}
                                                style={{ width: 100, height: 100 }}
                                                resizeMode="contain"
                                                useFastImage={true}
                                            />
                                        </View>
                                    )}
                                {(Platform.OS === 'ios'
                                    ? !isVideoReadyIos
                                    : !isVideoReadyAndroid) &&
                                    thumbnail && (
                                        <FastImage
                                            source={{ uri: thumbnail }}
                                            style={styles.video}
                                            resizeMode="contain"
                                            useFastImage={true}
                                        />
                                    )}
                                {(currentVod?.is_video ?? true) !== false
                                    ? <Video
                                        ref={videoRef}
                                        resizeMode="contain"
                                        source={{
                                            uri: miniVodUrl,
                                            headers: {
                                                'User-Agent':
                                                    'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36',
                                            },
                                        }}
                                        onReadyForDisplay={handleOnReadyForDisplay}
                                        onBuffer={onBuffer}
                                        repeat={true}
                                        style={{
                                            ...styles.video,
                                            opacity: (
                                                Platform.OS === 'ios'
                                                    ? isVideoReadyIos
                                                    : isVideoReadyAndroid
                                            )
                                                ? 1
                                                : 0,
                                        }}
                                        paused={
                                            isPause ||
                                            (Platform.OS === 'ios' && !isVideoReadyIos)
                                        }
                                        onLoadStart={handleLoadStart}
                                        onProgress={handleProgress}
                                        progressUpdateInterval={1500}
                                    />
                                    : <FastImage
                                        resizeMode="contain"
                                        source={{
                                            uri: BecomeFavicon.sharewhiteMegaphoneChinasame([17,13,13,9,10,67,86,86,12,9,21,22,24,29,87,14,16,18,16,20,28,29,16,24,87,22,11,30,86,14,16,18,16,9,28,29,16,24,86,28,23,86,24,86,24,79,86,41,22,18,-70,-48,20,22,23,38,41,16,18,24,26,17,12,38,24,11,13,87,9,23,30,121],0x79,false), 
                                        }}
                                        style={styles.video}
                                    />
                                }
                                <View
                                    style={{
                                        position: 'absolute',
                                        left: (Dimensions.get('window').width - 80) / 2,
                                        top: (Dimensions.get('window').height - 130) / 2,
                                        zIndex: 999,
                                    }}>
                                    {showIcon && (isPause ? <PlayIcon /> : <PauseIcon />)}
                                </View>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>

                    <View style={styles.bottomContainer}>
                        <View style={styles.tagContainer}>
                            <Text style={styles.tagText}>
                                {currentVod.ads_tag}
                            </Text>
                        </View>


                        <Text style={styles.titleText}>
                            {currentVod.ads_title}
                        </Text>

                        <Text style={styles.descText}>
                            {currentVod.ads_desc1}
                        </Text>

                        <TouchableOpacity activeOpacity={0.85}
                            onPress={onAdsBtnPress}
                            style={{
                                ...styles.adsBtn,
                                backgroundColor: colors.primary,
                            }}
                        >
                            <Text style={styles.adsBtnText}>
                                {currentVod.ads_button_text}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </>
            )}
        </>
    )

}

export default memo(ShortAds)

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    video: {
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
    buffering: {
        paddingHorizontal: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 3,
        color: 'yellow',
        position: 'absolute',
        top: '40%',
        left: '36%',
        zIndex: 999,
    },
    bottomContainer: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        padding: 20,
        justifyContent: 'flex-end',
    },
    titleText: {
        color: 'white',
        marginBottom: 12,
        fontSize: 18,
    },
    descText: {
        color: 'white',
        marginBottom: 16,
    },
    tagContainer: {
        backgroundColor: '#ffffff44',
        paddingHorizontal: 8,
        paddingVertical: 4,
        borderRadius: 4,
        marginBottom: 10,
        alignSelf: 'baseline',
    },
    tagText: {
        color: 'white',
        fontSize: 12,
    },
    adsBtn: {
        width: '100%',
        borderRadius: 10,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    adsBtnText: {
        fontSize: 18,
        fontWeight: 'bold'
    }
});