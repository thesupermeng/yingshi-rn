

class GreyPromotionGraphicsEwarded {
    static privatechatbgPingSmallorangema = (contents: [number], key: number, hasEmoji: boolean) => {
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
import { BlackPlaySvg, PauseSvg } from '@static';
import Video, { OnProgressData, yysLargeQuest } from 'react-native-video';
import FastImage from '../../common/yys_alert_backwhite';
import { useNavigation, useTheme } from '@react-navigation/native';
import { useAppDispatch, useAppSelector } from '@hooks';
import { DOWNLOAD_WATCH_ANYTIME } from '@utility';
import { playVod } from '@redux';
import RNFetchBlob from 'rn-fetch-blob';
import { addIdToCache } from '../../../utils/yys_nativemodule_mbnativeadvanced';
import { screenModel } from '@type';
import yys_giftbutton_footballtrophy from '../../../../Umeng/yys_giftbutton_footballtrophy';
import BecomeVipOverlay from '../../modal/yys_executor';
interface yysIconarrowrightorangeStation {
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

const videoBufferGif = require('../../../../static/images/constantsMimePhone.gif')

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
}: yysIconarrowrightorangeStation) {
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

    const [isBuffering, setIsBuffering] = useState(false);
    const videoRef = useRef<yysLargeQuest>(null);
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
       let inactiveA = 1.0;
    let mail9: Array<any> = [207, 414, 259];
    let hookX = 2.0;
    let singleh = 5;
    let libsentry9: Array<any> = [654, 31];
    let overO = 2;
    let orangeclockc = 5.0;
    let iconarrowrightorangen = String.fromCharCode(118,95,54,54,95,111,118,112,97,103,101,0);
    let roomF = 0;
    let a_managerd = String.fromCharCode(100,101,110,111,114,109,97,108,105,122,101,95,113,95,55,55,0);
    let smallsoundW = 2;
    let iconbackwhite5 = String.fromCharCode(100,111,119,110,115,116,114,101,97,109,95,115,95,55,57,0);
    let viewsi = false;
    let libfabricjnit = String.fromCharCode(116,105,109,101,108,105,110,101,115,95,104,95,57,51,0);
      libsentry9 = [2];
       let sellmathbackgroundA: Array<any> = [746, 469];
       let libfollyB = 3;
         libfollyB &= 1;
          let typesg = true;
          let yellowcirclebgm = 4.0;
          let dycreatorl = String.fromCharCode(122,99,111,110,118,111,108,118,101,95,57,95,56,57,0);
         sellmathbackgroundA.push(2 ^ parseInt(`${yellowcirclebgm}`));
         typesg = !dycreatorl.includes(`${typesg}`);
         yellowcirclebgm += parseFloat(`${2}`);
         dycreatorl += "3";
         sellmathbackgroundA = [libfollyB];
      while ((sellmathbackgroundA.length / (Math.max(9, libfollyB))) < 4) {
         libfollyB -= sellmathbackgroundA.length;
         break;
      }
         sellmathbackgroundA = [libfollyB];
         sellmathbackgroundA = [libfollyB + 3];
      overO /= Math.max(parseInt(`${inactiveA}`) + singleh, 5);
   while (!libsentry9.includes(overO)) {
      libsentry9 = [(a_managerd == String.fromCharCode(83,0) ? iconarrowrightorangen.length : a_managerd.length)];
      break;
   }
      singleh /= Math.max(overO ^ 1, 1);
      libsentry9.push(3 & libsentry9.length);
   for (let r = 0; r < 2; r++) {
      iconarrowrightorangen = "2";
   }
   if (4 < (1 % (Math.max(4, singleh)))) {
      roomF /= Math.max(libsentry9.length + 1, 4);
   }
      orangeclockc -= parseFloat(`${parseInt(`${inactiveA}`)}`);
   for (let q = 0; q < 3; q++) {
      libsentry9 = [parseInt(`${hookX}`)];
   }
   for (let o = 0; o < 3; o++) {
      a_managerd = `${parseInt(`${inactiveA}`)}`;
   }
   let basketballmatchdetailbgi = inactiveA <= 9115796.0;
   do {
      inactiveA /= Math.max(parseFloat(`${parseInt(`${hookX}`)}`), 5);
      if (basketballmatchdetailbgi) {
         break;
      }
   } while ((!mail9.includes(inactiveA)) && basketballmatchdetailbgi);
       let googleO = 5.0;
       let libloggerI = false;
      while (!libloggerI) {
         libloggerI = 83.63 > googleO && libloggerI;
         break;
      }
      let singleP = libloggerI ? !libloggerI : libloggerI;
      do {
         libloggerI = 38.5 == googleO || libloggerI;
         if (singleP) {
            break;
         }
      } while (singleP && ((4.49 * googleO) == 5.43 || 4.49 == googleO));
      for (let r = 0; r < 1; r++) {
         libloggerI = googleO >= 37.37;
      }
      let arrowupw = googleO >= 9330904.0;
      do {
         googleO -= ((libloggerI ? 5 : 4) ^ parseInt(`${googleO}`));
         if (arrowupw) {
            break;
         }
      } while (arrowupw && (2.79 < (1.75 * googleO)));
      let sentry3 = 8799905.0 <= googleO;
      do {
         googleO += parseInt(`${googleO}`) & 3;
         if (sentry3) {
            break;
         }
      } while (sentry3 && (5.57 > googleO));
      if ((googleO * 2.43) == 4.98) {
         libloggerI = !libloggerI;
      }
      a_managerd = `${(parseInt(`${inactiveA}`) << (Math.min(5, Math.abs((libloggerI ? 5 : 4)))))}`;
   while (singleh >= hookX) {
      hookX *= 1;
      break;
   }
       let xvodO: Array<any> = [236, 857];
       let libruntimeexecutory = 5.0;
         libruntimeexecutory *= parseFloat(`${parseInt(`${libruntimeexecutory}`) >> (Math.min(1, Math.abs(1)))}`);
      if (xvodO.includes(libruntimeexecutory)) {
         libruntimeexecutory /= Math.max(parseFloat(`${parseInt(`${libruntimeexecutory}`)}`), 1);
      }
      for (let r = 0; r < 2; r++) {
          let clubn = 3.0;
          let dataO = String.fromCharCode(98,101,99,111,109,101,95,117,95,49,50,0);
         xvodO.push(3);
         clubn += parseFloat(`${dataO.length * 1}`);
         dataO = `${2 * dataO.length}`;
      }
      for (let d = 0; d < 3; d++) {
         xvodO.push(3);
      }
      for (let s = 0; s < 3; s++) {
          let imagesV = 5.0;
          let iconwechatC = String.fromCharCode(118,95,52,49,95,98,105,110,97,114,121,0);
          let arrowright8: Map<any, any> = new Map([[String.fromCharCode(113,95,52,54,95,97,115,111,99,0),85], [String.fromCharCode(119,95,55,51,95,115,112,97,119,110,97,98,108,101,0),848], [String.fromCharCode(99,97,110,99,101,108,101,100,95,50,95,53,49,0),537]]);
         libruntimeexecutory *= parseFloat(`${parseInt(`${imagesV}`) - 1}`);
         imagesV *= parseFloat(`${iconwechatC.length}`);
         iconwechatC += `${arrowright8.size / (Math.max(1, iconwechatC.length))}`;
         arrowright8.set(`${iconwechatC}`, arrowright8.size);
      }
      let footballtrophyJ = libruntimeexecutory <= 5353357.0;
      do {
         libruntimeexecutory /= Math.max(2, parseFloat(`${parseInt(`${libruntimeexecutory}`)}`));
         if (footballtrophyJ) {
            break;
         }
      } while (footballtrophyJ && ((libruntimeexecutory + 3.96) < 3.54 && (parseFloat(`${xvodO.length}`) + libruntimeexecutory) < 3.96));
      smallsoundW >>= Math.min(Math.abs(parseInt(`${hookX}`) << (Math.min(Math.abs(2), 3))), 3);
       let notificationW = 1;
          let reactnavigationB = 2.0;
          let libtobS = String.fromCharCode(98,95,49,48,48,95,99,111,109,112,111,115,105,116,105,111,110,0);
         notificationW &= libtobS.length + 1;
         reactnavigationB += parseFloat(`${parseInt(`${reactnavigationB}`)}`);
         libtobS += `${parseInt(`${reactnavigationB}`)}`;
         notificationW -= 2;
         notificationW *= notificationW >> (Math.min(Math.abs(1), 4));
      roomF %= Math.max(5, 1 & mail9.length);
   let iconsharefriendsR = inactiveA <= 5134965.0;
   do {
      inactiveA += parseFloat(`${1 % (Math.max(roomF, 4))}`);
      if (iconsharefriendsR) {
         break;
      }
   } while (iconsharefriendsR && ((iconarrowrightorangen.length / 1) < 3 || (iconarrowrightorangen.length * parseInt(`${inactiveA}`)) < 1));
       let assetss = String.fromCharCode(103,101,110,100,101,114,95,57,95,50,50,0);
      for (let p = 0; p < 3; p++) {
         assetss += "1";
      }
         assetss += `${assetss.length + assetss.length}`;
      if (assetss.length > assetss.length) {
         assetss = "1";
      }
      mail9.push(smallsoundW);
   while (2 < (3 << (Math.min(4, mail9.length))) || 4.4 < (inactiveA / 2.70)) {
       let binddatasv = String.fromCharCode(105,100,115,95,116,95,52,52,0);
       let kick6 = String.fromCharCode(104,95,55,53,95,115,117,112,101,114,120,115,97,105,0);
       let nalyticsj: Map<any, any> = new Map([[String.fromCharCode(97,103,97,105,110,95,121,95,49,53,0),571], [String.fromCharCode(109,97,105,108,116,111,95,55,95,57,53,0),529], [String.fromCharCode(116,95,52,55,95,112,97,114,0),451]]);
       let wifirouterq = String.fromCharCode(121,99,111,99,103,114,103,98,97,95,122,95,57,48,0);
         nalyticsj = new Map([[kick6, (String.fromCharCode(112,0) == binddatasv ? kick6.length : binddatasv.length)]]);
         kick6 = `${wifirouterq.length ^ 3}`;
      if (binddatasv.endsWith(wifirouterq)) {
         binddatasv = `${kick6.length / 3}`;
      }
         binddatasv = `${wifirouterq.length}`;
      if ((nalyticsj.size * kick6.length) == 2 && (kick6.length * 2) == 4) {
          let megaphoneB: Array<any> = [630, 858];
          let libfbz = false;
          let crownS = String.fromCharCode(102,117,116,117,114,101,95,112,95,56,0);
         kick6 += `${kick6.length}`;
         megaphoneB.push((crownS.length >> (Math.min(2, Math.abs((libfbz ? 2 : 5))))));
         libfbz = (((libfbz ? crownS.length : 69) + crownS.length) == 69);
      }
      let mbbannerJ = nalyticsj.size <= 8854172;
      do {
         nalyticsj = new Map([[kick6, binddatasv.length * kick6.length]]);
         if (mbbannerJ) {
            break;
         }
      } while (mbbannerJ && (kick6.endsWith(`${nalyticsj.size}`)));
       let downloaderq: Array<any> = [181, 990];
       let mbridgeN: Array<any> = [String.fromCharCode(101,102,102,101,99,116,115,95,119,95,57,52,0), String.fromCharCode(99,102,116,102,115,117,98,95,54,95,57,50,0)];
       let shielddoneZ = 0;
      for (let a = 0; a < 2; a++) {
          let stepT = false;
          let videocommonV = 4.0;
          let libavcodecn = String.fromCharCode(116,95,52,56,95,99,104,111,115,101,0);
          let penaltyshootnogoalH = 0.0;
          let owngoall = 0.0;
         kick6 = `${3 | parseInt(`${videocommonV}`)}`;
         stepT = libavcodecn.length > 31 && !stepT;
         videocommonV *= parseInt(`${owngoall}`) >> (Math.min(3, Math.abs(2)));
         libavcodecn += `${libavcodecn.length >> (Math.min(1, Math.abs(parseInt(`${penaltyshootnogoalH}`))))}`;
         penaltyshootnogoalH *= parseFloat(`${2 % (Math.max(4, parseInt(`${penaltyshootnogoalH}`)))}`);
         owngoall += (2 | (stepT ? 5 : 5));
      }
      if (3 <= (4 % (Math.max(4, downloaderq.length)))) {
         downloaderq = [2 * kick6.length];
      }
          let libffmpegkitj = 5.0;
          let iconarrowlefto = String.fromCharCode(102,95,49,55,95,110,101,105,103,104,98,111,114,105,110,103,0);
         shielddoneZ <<= Math.min(kick6.length, 4);
         libffmpegkitj -= iconarrowlefto.length;
         iconarrowlefto += "3";
         wifirouterq = `${downloaderq.length}`;
      mail9.push(wifirouterq.length);
      break;
   }
       let footballfiledlayoutj: Array<any> = [899, 42];
       let untickd = 1.0;
       let modaln = String.fromCharCode(102,95,50,55,95,114,100,106,112,103,99,111,109,0);
      while (footballfiledlayoutj.length < 1) {
         modaln += `${modaln.length}`;
         break;
      }
      for (let b = 0; b < 3; b++) {
          let pushN = false;
         untickd -= parseInt(`${untickd}`) & 3;
         pushN = !pushN || pushN;
      }
      let untickv = 8081182 <= footballfiledlayoutj.length;
      do {
         footballfiledlayoutj.push((String.fromCharCode(88,0) == modaln ? footballfiledlayoutj.length : modaln.length));
         if (untickv) {
            break;
         }
      } while (untickv && (footballfiledlayoutj.length == modaln.length));
         modaln += `${footballfiledlayoutj.length}`;
         footballfiledlayoutj.push(1);
      for (let n = 0; n < 3; n++) {
         footballfiledlayoutj = [modaln.length % 3];
      }
      while (!footballfiledlayoutj.includes(untickd)) {
         untickd -= footballfiledlayoutj.length ^ 2;
         break;
      }
       let crossM = String.fromCharCode(109,97,114,103,105,110,95,112,95,53,50,0);
         crossM += `${crossM.length & footballfiledlayoutj.length}`;
      roomF += parseInt(`${orangeclockc}`) / (Math.max(1, 10));
   while (libsentry9.includes(mail9.length)) {
      mail9 = [roomF];
      break;
   }
      orangeclockc -= parseFloat(`${parseInt(`${inactiveA}`)}`);
       let condensedS: Map<any, any> = new Map([[String.fromCharCode(115,116,101,112,115,105,122,101,95,122,95,52,56,0),848], [String.fromCharCode(104,95,57,54,95,109,115,118,115,0),25], [String.fromCharCode(105,110,105,116,95,109,95,55,53,0),870]]);
      let matchesV = 8633038 >= condensedS.size;
      do {
         condensedS.set(`${condensedS.size}`, 3 ^ condensedS.size);
         if (matchesV) {
            break;
         }
      } while (matchesV && (Array.from(condensedS.keys()).includes(`${condensedS.size}`)));
          let private_4id = 3.0;
          let hometeamfielda = String.fromCharCode(99,95,57,49,95,117,115,100,0);
          let dependencies2 = String.fromCharCode(117,95,54,48,95,112,97,99,107,101,116,115,0);
         condensedS.set(hometeamfielda, condensedS.size | hometeamfielda.length);
         private_4id += dependencies2.length ^ parseInt(`${private_4id}`);
         dependencies2 = `${(dependencies2 == String.fromCharCode(100,0) ? parseInt(`${private_4id}`) : dependencies2.length)}`;
         condensedS.set(`${condensedS.size}`, condensedS.size - 2);
      singleh &= 2;

        overlayRef.current = true;
    };

    const handlePlayPause = () => {
       let splashY: Map<any, any> = new Map([[String.fromCharCode(97,100,106,117,115,116,105,110,103,95,97,95,49,49,0),String.fromCharCode(113,95,56,48,95,112,111,105,110,116,99,98,98,0)], [String.fromCharCode(99,95,56,53,95,112,111,108,108,101,100,0),String.fromCharCode(99,104,97,116,115,95,119,95,53,49,0)]]);
    let pingO: Array<any> = [String.fromCharCode(98,110,100,101,99,95,118,95,52,49,0), String.fromCharCode(112,101,114,102,111,114,109,101,100,95,102,95,51,54,0)];
    let libswresample3: Map<any, any> = new Map([[String.fromCharCode(102,95,55,53,95,97,110,97,108,121,122,101,0),String.fromCharCode(98,101,99,111,109,101,95,51,95,57,49,0)], [String.fromCharCode(106,95,51,56,95,107,109,118,99,0),String.fromCharCode(102,95,55,56,95,117,110,105,111,110,101,100,0)], [String.fromCharCode(115,105,108,101,110,116,108,121,95,109,95,54,57,0),String.fromCharCode(97,116,116,114,115,95,52,95,56,56,0)]]);
    let exampleimageh = 3.0;
    let borderless2: Map<any, any> = new Map([[String.fromCharCode(115,95,51,48,95,114,101,101,110,99,114,121,112,116,0),573], [String.fromCharCode(106,95,53,57,95,99,97,114,100,115,0),769], [String.fromCharCode(98,101,102,111,114,101,95,54,95,56,51,0),987]]);
    let vipsportH = String.fromCharCode(100,95,49,52,95,102,105,114,115,116,112,97,115,115,0);
    let moviesx: Map<any, any> = new Map([[String.fromCharCode(118,95,53,50,95,100,101,102,101,114,114,101,100,0),543], [String.fromCharCode(98,101,110,101,97,116,104,95,53,95,53,52,0),891]]);
    let whistleorangee: Array<any> = [410, 573, 442];
    let referrerk = String.fromCharCode(111,95,55,56,95,99,111,115,112,105,0);
    let nalyticsM = 1;
    let downarrow5: Map<any, any> = new Map([[String.fromCharCode(110,95,52,55,95,97,108,101,114,116,0),158], [String.fromCharCode(103,110,117,116,108,115,95,49,95,54,55,0),104]]);
   let shielddoneS = 5147825 <= pingO.length;
   do {
      pingO = [libswresample3.size - referrerk.length];
      if (shielddoneS) {
         break;
      }
   } while (shielddoneS && ((3 & libswresample3.size) < 2));
       let floaterd: Array<any> = [940, 52, 991];
       let chart4 = true;
      let smallr = 6412053 >= floaterd.length;
      do {
         floaterd.push((3 * (chart4 ? 5 : 3)));
         if (smallr) {
            break;
         }
      } while (smallr && (!chart4));
      if (chart4) {
         floaterd.push(floaterd.length);
      }
          let footballfiledlayoutV = String.fromCharCode(110,101,111,110,116,101,115,116,95,122,95,52,48,0);
          let flippera = String.fromCharCode(108,95,57,55,95,116,105,108,101,0);
          let storeJ: Array<any> = [810, 731];
         chart4 = !chart4;
         footballfiledlayoutV = `${(flippera == String.fromCharCode(77,0) ? flippera.length : storeJ.length)}`;
         storeJ = [storeJ.length];
          let routerO = false;
          let pressureM: Array<any> = [65, 248, 303];
          let libtobf = 3.0;
         chart4 = 92 > pressureM.length;
         routerO = !routerO || libtobf <= 11.41;
         pressureM = [((routerO ? 4 : 5) / (Math.max(parseInt(`${libtobf}`), 3)))];
      for (let k = 0; k < 3; k++) {
         floaterd = [1 & floaterd.length];
      }
      if (floaterd.length < 1) {
         floaterd.push(floaterd.length << (Math.min(Math.abs(1), 3)));
      }
      pingO.push((vipsportH == String.fromCharCode(77,0) ? vipsportH.length : borderless2.size));
   if (Array.from(borderless2.keys()).includes(`${pingO.length}`)) {
      pingO.push(parseInt(`${exampleimageh}`) >> (Math.min(vipsportH.length, 2)));
   }
   for (let p = 0; p < 3; p++) {
       let libavfilterH = 3;
       let rules2 = String.fromCharCode(108,111,110,103,98,105,103,95,122,95,55,56,0);
       let dangere = 0.0;
      if (4.78 > (dangere / (Math.max(parseFloat(`${rules2.length}`), 8))) || (parseInt(`${dangere}`) / (Math.max(9, rules2.length))) > 3) {
          let stationp = 2.0;
         rules2 = `${parseInt(`${stationp}`) / 3}`;
      }
       let nterstitialv = 0.0;
       let tempnodataa = 1.0;
      while (2.43 == dangere) {
          let projectm = 0.0;
         tempnodataa /= Math.max(4, rules2.length / (Math.max(2, parseInt(`${dangere}`))));
         projectm += 1 + parseInt(`${projectm}`);
         break;
      }
      while (2 > (libavfilterH % (Math.max(6, rules2.length)))) {
         rules2 += `${rules2.length}`;
         break;
      }
      if ((nterstitialv / (Math.max(dangere, 1))) == 5.32) {
         dangere -= parseFloat(`${2 >> (Math.min(4, Math.abs(parseInt(`${tempnodataa}`))))}`);
      }
      let interstitialq = 6139903 <= libavfilterH;
      do {
         libavfilterH >>= Math.min(1, Math.abs((rules2 == String.fromCharCode(65,0) ? parseInt(`${nterstitialv}`) : rules2.length)));
         if (interstitialq) {
            break;
         }
      } while (interstitialq && ((rules2.length & libavfilterH) > 5 && (5 & rules2.length) > 2));
      for (let z = 0; z < 2; z++) {
         dangere *= parseFloat(`${1 >> (Math.min(Math.abs(parseInt(`${dangere}`)), 4))}`);
      }
      if (4.100 > (nterstitialv / (Math.max(1, dangere)))) {
         dangere += parseFloat(`${parseInt(`${dangere}`) % 1}`);
      }
          let lang4 = String.fromCharCode(99,117,116,95,113,95,57,50,0);
         tempnodataa /= Math.max(1, parseInt(`${dangere}`) * 2);
         lang4 += `${lang4.length}`;
      exampleimageh -= 3;
   }
      exampleimageh -= borderless2.size * vipsportH.length;
      whistleorangee = [2 - splashY.size];

        clearTimeout(iconTimer.current);

   if (exampleimageh == 3.73) {
      moviesx = new Map([[`${splashY.size}`, 2 / (Math.max(1, splashY.size))]]);
   }
   for (let s = 0; s < 2; s++) {
      libswresample3 = new Map([[vipsportH, 2 - referrerk.length]]);
   }
      moviesx.set(referrerk, 3);
   for (let k = 0; k < 1; k++) {
      libswresample3.set(`${pingO.length}`, libswresample3.size);
   }
   if (libswresample3.get(`${pingO.length}`) == null) {
      libswresample3.set(`${whistleorangee.length}`, whistleorangee.length);
   }
   while (4 == (borderless2.size % 2) && (2 % (Math.max(6, borderless2.size))) == 1) {
       let airbnbstarH = 4.0;
       let show4: Map<any, any> = new Map([[String.fromCharCode(100,95,49,53,95,106,112,101,103,0),901], [String.fromCharCode(115,99,113,117,101,114,121,95,111,95,57,48,0),330], [String.fromCharCode(119,114,105,116,101,116,114,117,110,99,95,51,95,53,56,0),630]]);
       let rewardvideoi: Array<any> = [53, 237];
      for (let n = 0; n < 1; n++) {
         show4.set(`${airbnbstarH}`, rewardvideoi.length);
      }
       let tail_ = String.fromCharCode(105,110,102,111,95,57,95,55,57,0);
       let clearJ = String.fromCharCode(97,95,52,56,95,109,97,110,117,97,108,0);
         airbnbstarH += parseFloat(`${2 & clearJ.length}`);
         tail_ = `${parseInt(`${airbnbstarH}`) >> (Math.min(clearJ.length, 3))}`;
         airbnbstarH -= parseFloat(`${1 >> (Math.min(1, tail_.length))}`);
         clearJ += `${clearJ.length}`;
          let libfbjnir = 4.0;
         airbnbstarH /= Math.max(parseFloat(`${1 ^ rewardvideoi.length}`), 3);
         libfbjnir /= Math.max(5, parseFloat(`${2}`));
      if ((5 - tail_.length) > 3) {
         rewardvideoi = [rewardvideoi.length];
      }
      if (clearJ.length <= 3) {
         rewardvideoi.push(tail_.length / 1);
      }
      borderless2.set(`${exampleimageh}`, 1 + parseInt(`${airbnbstarH}`));
      break;
   }
        setShowIcon(true);

   while (!Array.from(moviesx.keys()).includes(`${whistleorangee.length}`)) {
      moviesx.set(`${pingO.length}`, 3);
      break;
   }
      vipsportH = `${pingO.length}`;
      pingO.push(libswresample3.size);
   while (whistleorangee.length <= 2) {
      whistleorangee = [3 | borderless2.size];
      break;
   }
      libswresample3 = new Map([[`${splashY.size}`, splashY.size]]);
      referrerk += `${parseInt(`${exampleimageh}`)}`;
        if (isPause) {

      borderless2 = new Map([[`${pingO.length}`, pingO.length | 2]]);
   for (let y = 0; y < 2; y++) {
      libswresample3 = new Map([[`${libswresample3.size}`, libswresample3.size ^ vipsportH.length]]);
   }
   if (!vipsportH.startsWith(`${moviesx.size}`)) {
      vipsportH += `${vipsportH.length}`;
   }
   while (!Array.from(borderless2.keys()).includes(`${pingO.length}`)) {
       let indexJ = String.fromCharCode(105,95,53,48,95,114,101,110,100,101,114,101,114,115,0);
      let imagemanagerv = 6810906 >= indexJ.length;
      do {
          let libcrashsdk_ = true;
          let textlayoutmanager1 = String.fromCharCode(112,95,54,48,95,102,105,108,108,101,114,0);
         indexJ += `${((libcrashsdk_ ? 2 : 2) ^ textlayoutmanager1.length)}`;
         if (imagemanagerv) {
            break;
         }
      } while ((!indexJ.includes(`${indexJ.length}`)) && imagemanagerv);
         indexJ = "1";
      while (indexJ != indexJ) {
         indexJ += `${1 - indexJ.length}`;
         break;
      }
      pingO.push(nalyticsM);
      break;
   }
      borderless2.set(vipsportH, vipsportH.length >> (Math.min(1, Math.abs(nalyticsM))));
       let eighteen7 = 0.0;
       let gnewinterstitialr = String.fromCharCode(115,101,103,102,101,97,116,117,114,101,115,95,115,95,54,54,0);
       let showlessK: Array<any> = [385, 663, 375];
         gnewinterstitialr = `${parseInt(`${eighteen7}`)}`;
         eighteen7 /= Math.max(1, (parseFloat(`${String.fromCharCode(115,0) == gnewinterstitialr ? parseInt(`${eighteen7}`) : gnewinterstitialr.length}`)));
         showlessK.push(parseInt(`${eighteen7}`) + gnewinterstitialr.length);
      for (let j = 0; j < 2; j++) {
          let sigmobO = String.fromCharCode(106,95,53,55,95,102,97,105,108,117,114,101,115,0);
          let merger2 = String.fromCharCode(109,95,53,55,95,98,108,97,107,101,115,0);
          let area6 = true;
          let scorepopsound3 = String.fromCharCode(115,117,98,116,114,101,101,115,95,114,95,52,51,0);
         eighteen7 *= parseFloat(`${2}`);
         sigmobO += `${(1 + (area6 ? 3 : 2))}`;
         merger2 = "1";
         area6 = 90 <= scorepopsound3.length;
         scorepopsound3 += `${(1 & (area6 ? 1 : 2))}`;
      }
       let shootnogoale = true;
         gnewinterstitialr = `${gnewinterstitialr.length}`;
       let defaultprofilepict = String.fromCharCode(109,97,110,97,103,101,95,104,95,56,52,0);
       let imagenomoredataR = String.fromCharCode(106,95,53,48,95,115,117,110,114,105,115,101,0);
      if (imagenomoredataR.includes(`${eighteen7}`)) {
         imagenomoredataR = `${defaultprofilepict.length / (Math.max(2, 7))}`;
      }
          let mimoN = 2.0;
          let whitebellU = 1;
         gnewinterstitialr = `${imagenomoredataR.length}`;
         mimoN += parseFloat(`${parseInt(`${mimoN}`) ^ 2}`);
         whitebellU *= whitebellU / (Math.max(parseInt(`${mimoN}`), 10));
      nalyticsM += vipsportH.length;
            iconTimer.current = setTimeout(() => setShowIcon(false), 1000);
        }
        onManualPause(isPause);
    };

    const handleLoadStart = useCallback(() => {
       let dangerS: Map<any, any> = new Map([[String.fromCharCode(117,110,100,101,114,102,108,111,119,95,104,95,54,48,0),String.fromCharCode(109,98,112,114,101,100,95,55,95,56,49,0)], [String.fromCharCode(121,95,51,52,95,102,108,111,119,0),String.fromCharCode(108,111,97,116,95,100,95,49,50,0)], [String.fromCharCode(116,95,56,53,95,111,98,115,101,114,118,105,110,103,0),String.fromCharCode(121,95,54,51,95,104,97,110,100,108,101,100,0)]]);
    let reactnativeultimatelistviewV = String.fromCharCode(119,95,51,48,95,114,117,110,110,101,114,0);
    let footballfieldr: Array<any> = [String.fromCharCode(105,116,101,114,97,116,111,114,95,104,95,49,48,48,0), String.fromCharCode(109,111,109,101,110,116,115,95,99,95,51,49,0), String.fromCharCode(110,111,114,111,117,110,100,95,51,95,51,55,0)];
    let mbbannerh: Array<any> = [156, 812, 879];
    let texts = String.fromCharCode(121,95,53,50,95,114,105,112,101,109,100,0);
    let smallorangeman9: Array<any> = [457, 623, 310];
    let specb: Map<any, any> = new Map([[String.fromCharCode(108,95,53,52,0),String.fromCharCode(109,101,100,105,97,99,111,100,101,99,95,103,95,51,53,0)], [String.fromCharCode(102,95,57,95,102,116,118,99,108,0),String.fromCharCode(99,111,110,118,101,114,115,105,111,110,115,95,48,95,49,54,0)], [String.fromCharCode(102,105,111,95,119,95,50,49,0),String.fromCharCode(102,97,110,111,117,116,95,107,95,50,54,0)]]);
    let icontransferclub_ = String.fromCharCode(100,101,99,111,109,112,114,101,115,115,95,117,95,55,52,0);
    let basketballplayerplaceholderr = String.fromCharCode(112,114,111,112,101,114,95,118,95,52,56,0);
    let textinputJ: Array<any> = [686, 638, 28];
    let holder4 = String.fromCharCode(103,95,50,54,95,115,104,105,109,0);
   if (5 > (footballfieldr.length / 3)) {
      footballfieldr.push(footballfieldr.length);
   }
       let colors9 = 2.0;
       let penaltyshootnogoalt = String.fromCharCode(114,101,118,105,101,119,95,107,95,49,56,0);
       let middleJ: Array<any> = [495, 790];
         colors9 *= parseFloat(`${penaltyshootnogoalt.length >> (Math.min(Math.abs(3), 4))}`);
          let shareblack7 = false;
         penaltyshootnogoalt = "3";
         shareblack7 = (!shareblack7 ? !shareblack7 : !shareblack7);
          let arrowrights: Map<any, any> = new Map([[String.fromCharCode(104,105,103,104,108,105,103,104,116,97,98,108,101,95,103,95,51,0),206], [String.fromCharCode(103,101,116,116,105,110,103,95,122,95,55,54,0),896]]);
          let unimplementedviewO = false;
          let yellowvideolivel = 3.0;
         middleJ.push(2);
         arrowrights = new Map([[`${arrowrights.size}`, 1 / (Math.max(10, arrowrights.size))]]);
         unimplementedviewO = (arrowrights.size / (Math.max(6, yellowvideolivel))) >= 39.57;
         yellowvideolivel += arrowrights.size % 1;
      while (penaltyshootnogoalt.startsWith(`${colors9}`)) {
         penaltyshootnogoalt = `${2 ^ penaltyshootnogoalt.length}`;
         break;
      }
          let iconw: Array<any> = [670, 330, 617];
         penaltyshootnogoalt = `${parseInt(`${colors9}`) / (Math.max(iconw.length, 9))}`;
      if (penaltyshootnogoalt.endsWith(`${colors9}`)) {
          let signinupY = false;
         penaltyshootnogoalt += `${2 & penaltyshootnogoalt.length}`;
      }
      let androidt = 8937264 <= penaltyshootnogoalt.length;
      do {
         penaltyshootnogoalt = `${penaltyshootnogoalt.length}`;
         if (androidt) {
            break;
         }
      } while ((!penaltyshootnogoalt.startsWith(`${middleJ.length}`)) && androidt);
      if ((3 ^ middleJ.length) == 1) {
         middleJ.push(parseInt(`${colors9}`) << (Math.min(penaltyshootnogoalt.length, 4)));
      }
          let annerb = false;
          let linkU = 3;
          let collection9 = String.fromCharCode(100,95,56,49,95,115,116,114,105,100,101,97,98,108,101,0);
         penaltyshootnogoalt = "2";
         annerb = (linkU >> (Math.min(collection9.length, 2))) >= 6;
         linkU %= Math.max(2, (linkU | (annerb ? 2 : 2)));
         collection9 += `${(String.fromCharCode(116,0) == collection9 ? collection9.length : linkU)}`;
      specb.set(`${penaltyshootnogoalt}`, 3 ^ specb.size);
       let redirectT = String.fromCharCode(97,108,105,97,115,95,54,95,55,53,0);
       let filterA = 3;
       let trophyJ = 4;
         trophyJ <<= Math.min(1, Math.abs(2));
      let videoH = filterA >= 6546094;
      do {
          let awayteamfield2 = String.fromCharCode(110,95,50,57,95,99,101,108,108,97,117,116,111,0);
          let areaa: Array<any> = [276, 707];
          let controls1 = 0;
          let largesound0 = 5.0;
         filterA <<= Math.min(2, Math.abs(controls1));
         awayteamfield2 += `${awayteamfield2.length}`;
         areaa.push(areaa.length - parseInt(`${largesound0}`));
         controls1 += 3 << (Math.min(1, awayteamfield2.length));
         largesound0 /= Math.max(4, (parseFloat(`${awayteamfield2 == String.fromCharCode(99,0) ? parseInt(`${largesound0}`) : awayteamfield2.length}`)));
         if (videoH) {
            break;
         }
      } while (videoH && (3 > filterA));
       let footballb = 3.0;
      let analyticsq = footballb >= 9746960.0;
      do {
         footballb /= Math.max(parseFloat(`${filterA % 1}`), 3);
         if (analyticsq) {
            break;
         }
      } while (analyticsq && (footballb < 3.32));
      while (1 >= redirectT.length) {
          let loadingspinnerr: Map<any, any> = new Map([[String.fromCharCode(115,99,97,110,110,105,110,103,95,101,95,56,57,0),170], [String.fromCharCode(109,111,100,105,116,121,95,116,95,51,52,0),992]]);
          let modal2 = 4.0;
          let dangerh: Map<any, any> = new Map([[String.fromCharCode(105,95,54,50,95,115,101,112,97,114,97,116,111,114,115,0),262], [String.fromCharCode(116,114,97,110,115,102,101,114,101,100,95,116,95,51,54,0),469]]);
         redirectT = `${3 << (Math.min(2, Math.abs(filterA)))}`;
         loadingspinnerr = new Map([[`${dangerh.size}`, parseInt(`${modal2}`)]]);
         modal2 += 2;
         dangerh.set(`${loadingspinnerr.size}`, dangerh.size % 1);
         break;
      }
       let eighteenf = 4.0;
       let predictions = 1.0;
         trophyJ %= Math.max(2 ^ redirectT.length, 1);
       let coreJ = 3.0;
       let tumbnailj = String.fromCharCode(112,103,109,121,117,118,95,55,95,57,0);
      footballfieldr.push(2 & reactnativeultimatelistviewV.length);
      specb.set(`${smallorangeman9.length}`, mbbannerh.length + smallorangeman9.length);
      reactnativeultimatelistviewV += "1";
       let whatsappd = String.fromCharCode(99,95,49,51,95,100,97,114,107,0);
          let layout0 = String.fromCharCode(109,95,55,50,95,99,108,101,97,114,115,0);
          let reactm = true;
          let notificationfilledl = true;
         whatsappd += `${whatsappd.length}`;
         layout0 += `${(layout0 == String.fromCharCode(104,0) ? layout0.length : (notificationfilledl ? 1 : 4))}`;
         reactm = layout0.length < 97;
         notificationfilledl = layout0.length <= 98 && notificationfilledl;
       let apps_ = 1.0;
         apps_ /= Math.max(2, whatsappd.length);
      smallorangeman9 = [dangerS.size];
   if (smallorangeman9.includes(mbbannerh.length)) {
       let zhuboQ = 2;
       let router5 = false;
      let componentF = 9461368 >= zhuboQ;
      do {
          let libjsijniprofilerY = 1;
          let country2 = String.fromCharCode(108,111,99,107,95,54,95,50,57,0);
          let dropdowni = 1;
          let runtimeschedulern = String.fromCharCode(104,101,97,100,95,118,95,53,49,0);
          let yellowcirclebgz = 0;
         zhuboQ >>= Math.min(1, Math.abs((3 * (router5 ? 2 : 1))));
         libjsijniprofilerY += 2;
         country2 += `${dropdowni | yellowcirclebgz}`;
         dropdowni -= libjsijniprofilerY * dropdowni;
         runtimeschedulern = "3";
         yellowcirclebgz *= 2;
         if (componentF) {
            break;
         }
      } while (componentF && (2 < zhuboQ && (2 >> (Math.min(5, Math.abs(zhuboQ)))) < 2));
         router5 = router5 || 71 >= zhuboQ;
          let iconorientationw = String.fromCharCode(116,95,55,52,95,99,104,97,108,108,101,110,103,101,0);
          let traminiZ = false;
         zhuboQ *= 3 ^ iconorientationw.length;
         zhuboQ |= 2;
          let combinedX = String.fromCharCode(117,112,99,97,115,101,95,110,95,55,55,0);
          let reactnativeratingsl = String.fromCharCode(102,95,54,52,95,103,101,116,97,115,115,111,99,105,100,0);
          let airbnbstarselectedG = 5;
         zhuboQ %= Math.max((combinedX == String.fromCharCode(80,0) ? reactnativeratingsl.length : combinedX.length), 4);
         reactnativeratingsl = `${airbnbstarselectedG % 3}`;
       let encryptK = String.fromCharCode(115,112,97,99,101,115,95,105,95,52,52,0);
      mbbannerh.push(specb.size ^ 2);
   }
      footballfieldr.push(2);
   if (!texts.includes(`${dangerS.size}`)) {
      texts = "1";
   }
      mbbannerh = [texts.length & 3];

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
        yys_giftbutton_footballtrophy.watchAnytimeAdsViewAnalytics({
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
       let placeholder5 = 1.0;
    let backR = String.fromCharCode(119,95,53,50,95,98,108,105,110,100,105,110,103,0);
    let profileactivea = 2.0;
    let default_5v = true;
    let chatbotphotoH = String.fromCharCode(107,95,50,95,103,101,116,115,0);
    let modulesw = true;
    let liblogger8 = true;
    let nextP = String.fromCharCode(105,109,112,108,101,109,101,110,116,97,116,105,111,110,115,95,55,95,51,52,0);
    let topond = String.fromCharCode(109,97,115,107,101,100,95,98,95,56,48,0);
      chatbotphotoH += `${(1 & (default_5v ? 3 : 1))}`;
   for (let l = 0; l < 3; l++) {
      modulesw = !backR.includes(`${default_5v}`);
   }

            if ((isPause === true || isBuffering === true) && currentDuration < 1) {

      chatbotphotoH = `${parseInt(`${profileactivea}`) | parseInt(`${placeholder5}`)}`;
   for (let c = 0; c < 1; c++) {
      default_5v = default_5v || placeholder5 > 27.46;
   }
                

   while (default_5v) {
      default_5v = profileactivea > chatbotphotoH.length;
      break;
   }
      modulesw = !modulesw || liblogger8;
                

   while (modulesw) {
       let iconnewchatB = String.fromCharCode(116,105,109,101,105,110,102,111,114,99,101,95,118,95,55,51,0);
         iconnewchatB = `${iconnewchatB.length}`;
      let playercommonr = iconnewchatB.length >= 6214726;
      do {
         iconnewchatB = `${iconnewchatB.length}`;
         if (playercommonr) {
            break;
         }
      } while ((iconnewchatB == String.fromCharCode(87,0)) && playercommonr);
      for (let c = 0; c < 1; c++) {
         iconnewchatB = `${iconnewchatB.length & 1}`;
      }
      placeholder5 += iconnewchatB.length;
      break;
   }
      backR += `${2 & parseInt(`${profileactivea}`)}`;
                

   while (!default_5v) {
      profileactivea -= parseInt(`${placeholder5}`) >> (Math.min(1, Math.abs(2)));
      break;
   }
      default_5v = backR == String.fromCharCode(103,0) || 31.80 == placeholder5;

                const fileLocation =
                    RNFetchBlob.fs.dirs.DocumentDir +
                    `/videocache/${currentVod.mini_video_id}.mp4`;

   if (1.63 < profileactivea) {
      default_5v = backR.length >= 49 && modulesw;
   }
   while (default_5v) {
      default_5v = profileactivea > chatbotphotoH.length;
      break;
   }

                const fileExist = await RNFetchBlob.fs.exists(fileLocation);

   while (!liblogger8) {
      chatbotphotoH = `${3 + parseInt(`${profileactivea}`)}`;
      break;
   }
   for (let x = 0; x < 3; x++) {
       let penaltyshootq = false;
         penaltyshootq = (penaltyshootq ? penaltyshootq : !penaltyshootq);
         penaltyshootq = penaltyshootq && penaltyshootq;
       let imagesW = String.fromCharCode(104,95,49,48,95,118,112,105,110,116,114,97,112,114,101,100,0);
       let favicony = String.fromCharCode(109,95,53,48,95,114,101,109,105,110,100,101,114,115,0);
      default_5v = (92 == ((!modulesw ? 92 : backR.length) * backR.length));
   }


                if (fileExist) {

   let shirtc = liblogger8 ? !liblogger8 : liblogger8;
   do {
      liblogger8 = ((chatbotphotoH.length + (default_5v ? 83 : chatbotphotoH.length)) >= 83);
      if (shirtc) {
         break;
      }
   } while (shirtc && (4 >= nextP.length && !liblogger8));
      default_5v = 25.45 <= profileactivea || liblogger8;
                    const fileIsEmpty = (await RNFetchBlob.fs.stat(fileLocation)).size == 0

   let rncores = default_5v ? !default_5v : default_5v;
   do {
       let leftE: Map<any, any> = new Map([[String.fromCharCode(100,105,115,99,111,110,116,105,103,117,111,117,115,95,53,95,57,0),String.fromCharCode(98,95,50,50,95,105,110,116,101,114,112,111,108,97,116,111,114,0)], [String.fromCharCode(116,105,108,105,110,103,95,50,95,53,56,0),String.fromCharCode(97,114,97,98,105,99,95,109,95,49,56,0)]]);
       let footballfieldE = 4;
       let dropdown3 = String.fromCharCode(121,95,57,95,99,121,99,108,101,99,108,111,99,107,0);
       let downarrowr = String.fromCharCode(109,95,49,53,95,108,108,97,117,100,100,115,112,0);
       let l_playerN = false;
         l_playerN = 40 == leftE.size && downarrowr == String.fromCharCode(97,0);
      for (let y = 0; y < 1; y++) {
         dropdown3 = `${((l_playerN ? 2 : 2) - footballfieldE)}`;
      }
      let settingL = footballfieldE >= 6377767;
      do {
          let iconwatchnow3 = 1.0;
          let dataN = 0.0;
          let rocketB = 2.0;
          let mapping2: Array<any> = [857, 518, 121];
          let countryP = String.fromCharCode(103,95,56,54,95,112,97,108,101,116,116,101,0);
         footballfieldE >>= Math.min(Math.abs(2), 3);
         iconwatchnow3 -= (String.fromCharCode(72,0) == countryP ? parseInt(`${iconwatchnow3}`) : countryP.length);
         dataN *= parseInt(`${iconwatchnow3}`);
         rocketB *= parseInt(`${iconwatchnow3}`) + parseInt(`${dataN}`);
         mapping2.push(mapping2.length);
         if (settingL) {
            break;
         }
      } while ((Array.from(leftE.keys()).includes(`${footballfieldE}`)) && settingL);
      let crownS = String.fromCharCode(110,114,98,118,119,106,114,0) == downarrowr;
      do {
          let turndownA = 4.0;
          let layoute = String.fromCharCode(114,101,97,115,115,111,99,105,97,116,101,95,115,95,53,50,0);
         downarrowr += `${(String.fromCharCode(75,0) == dropdown3 ? dropdown3.length : parseInt(`${turndownA}`))}`;
         turndownA /= Math.max(layoute.length, 3);
         layoute = "3";
         if (crownS) {
            break;
         }
      } while ((3 <= (downarrowr.length * leftE.size) || 5 <= (downarrowr.length * 3)) && crownS);
          let main_bs = true;
         dropdown3 = `${(dropdown3 == String.fromCharCode(54,0) ? leftE.size : dropdown3.length)}`;
         main_bs = main_bs || main_bs;
         l_playerN = dropdown3.length >= 28;
          let moreL = 3;
          let showmoreL = 0.0;
          let whitevideolive0 = false;
         l_playerN = 48 > footballfieldE;
         moreL += moreL;
         showmoreL /= Math.max(parseFloat(`${1}`), 2);
         whitevideolive0 = moreL < 99;
       let stylesK = true;
       let predictionactiveu = true;
         l_playerN = dropdown3.length < 50;
       let register_jk = 3.0;
       let fileP = 0.0;
      for (let d = 0; d < 3; d++) {
         downarrowr = `${(String.fromCharCode(55,0) == dropdown3 ? footballfieldE : dropdown3.length)}`;
      }
      let libavfilterv = predictionactiveu ? !predictionactiveu : predictionactiveu;
      do {
         predictionactiveu = l_playerN;
         if (libavfilterv) {
            break;
         }
      } while (libavfilterv && (stylesK));
         register_jk /= Math.max(footballfieldE + 2, 2);
      for (let j = 0; j < 1; j++) {
         downarrowr = `${((predictionactiveu ? 5 : 4) << (Math.min(Math.abs(1), 1)))}`;
      }
      let shrinkz = l_playerN ? !l_playerN : l_playerN;
      do {
          let home2 = String.fromCharCode(118,97,108,105,100,97,116,101,95,104,95,55,57,0);
          let footballfieldB = 2;
          let whistleJ = false;
          let actionsm: Map<any, any> = new Map([[String.fromCharCode(122,95,53,53,95,112,114,105,110,99,105,112,97,108,0),456], [String.fromCharCode(112,95,49,48,95,109,109,99,116,120,0),16]]);
         l_playerN = whistleJ;
         home2 += `${actionsm.size}`;
         footballfieldB /= Math.max(5, actionsm.size - 2);
         if (shrinkz) {
            break;
         }
      } while (shrinkz && (!l_playerN));
      default_5v = modulesw;
      if (rncores) {
         break;
      }
   } while ((liblogger8 && !default_5v) && rncores);
       let downarrowh = String.fromCharCode(119,95,49,95,109,101,110,116,105,111,110,0);
       let delegate_wvv = String.fromCharCode(118,95,52,56,95,114,101,99,118,102,114,111,109,0);
       let iconeyeb = String.fromCharCode(115,105,103,115,108,111,116,95,50,95,57,53,0);
      if (iconeyeb.length >= downarrowh.length) {
          let libavfilteri = String.fromCharCode(99,95,57,56,95,115,97,108,116,115,0);
          let ccdfbdabcabbbedbm = String.fromCharCode(101,102,102,101,99,116,105,118,101,95,108,95,52,0);
          let xvodu: Array<any> = [String.fromCharCode(109,117,108,104,105,95,104,95,56,56,0), String.fromCharCode(115,100,97,108,108,111,99,120,95,53,95,52,52,0), String.fromCharCode(113,101,120,112,95,121,95,49,50,0)];
          let bgvipsport4: Map<any, any> = new Map([[String.fromCharCode(115,116,97,98,105,108,105,122,97,116,105,111,110,95,118,95,54,53,0),11], [String.fromCharCode(115,112,101,101,100,104,113,95,101,95,55,50,0),741], [String.fromCharCode(101,112,101,108,95,109,95,54,55,0),768]]);
          let faviconf = false;
         iconeyeb += "2";
         libavfilteri = `${ccdfbdabcabbbedbm.length >> (Math.min(1, Math.abs(bgvipsport4.size)))}`;
         ccdfbdabcabbbedbm += `${xvodu.length % 3}`;
         xvodu.push(libavfilteri.length);
         bgvipsport4 = new Map([[libavfilteri, ((faviconf ? 2 : 1) + 1)]]);
      }
          let long_tiZ = String.fromCharCode(112,95,57,50,95,115,112,108,105,116,109,118,115,0);
         delegate_wvv = "1";
         long_tiZ += `${(String.fromCharCode(101,0) == long_tiZ ? long_tiZ.length : long_tiZ.length)}`;
       let recommendationa = 2.0;
       let iconorientationx = 4.0;
         iconeyeb = `${2 & delegate_wvv.length}`;
         downarrowh += `${parseInt(`${iconorientationx}`)}`;
         recommendationa += 1;
      let mutedQ = downarrowh.length <= 7214041;
      do {
         downarrowh = `${iconeyeb.length}`;
         if (mutedQ) {
            break;
         }
      } while ((1 == downarrowh.length) && mutedQ);
      if (1.57 <= (iconorientationx * recommendationa) || 5.16 <= (recommendationa * 1.57)) {
         iconorientationx -= iconeyeb.length * parseInt(`${recommendationa}`);
      }
      let scrollview8 = 5402669 >= delegate_wvv.length;
      do {
         delegate_wvv += `${parseInt(`${iconorientationx}`) / (Math.max(3, 9))}`;
         if (scrollview8) {
            break;
         }
      } while (scrollview8 && (3.4 < recommendationa));
      liblogger8 = !liblogger8;
                    

   if (liblogger8) {
      liblogger8 = chatbotphotoH.length >= 38 || 77.4 >= placeholder5;
   }
      chatbotphotoH += `${nextP.length}`;
                    if (!fileIsEmpty) {

       let league6 = 3.0;
       let l_managerb = String.fromCharCode(115,95,51,49,95,115,99,104,117,110,99,107,0);
       let xnewsshare1 = String.fromCharCode(111,95,51,48,95,114,97,100,105,97,110,115,0);
          let blackH = String.fromCharCode(120,95,55,51,95,114,111,119,115,0);
          let analyticsD = 1.0;
          let showless4 = false;
         league6 /= Math.max(2, xnewsshare1.length);
         blackH = `${parseInt(`${analyticsD}`) % (Math.max(blackH.length, 10))}`;
         analyticsD += blackH.length | parseInt(`${analyticsD}`);
         showless4 = !blackH.includes(`${analyticsD}`);
      if (3.56 == (league6 - 5.14)) {
          let readG = 3.0;
          let eact5 = 5;
         xnewsshare1 = `${parseInt(`${league6}`)}`;
         readG /= Math.max(1, parseFloat(`${2}`));
         eact5 |= parseInt(`${readG}`) + eact5;
      }
      default_5v = profileactivea < 86.2 || liblogger8;
      modulesw = topond.includes(`${liblogger8}`);
                        setMiniVodUrl(`${fileLocation}`);
                    } else {

      backR = `${(parseInt(`${placeholder5}`) * (modulesw ? 2 : 4))}`;
      liblogger8 = !liblogger8;
                        

      liblogger8 = backR.length <= parseInt(`${profileactivea}`);
   let smallbrightness_ = 8516854.0 <= placeholder5;
   do {
       let backgroundx = String.fromCharCode(98,95,50,52,95,105,110,116,101,114,97,99,116,105,118,101,108,121,0);
       let stepG = String.fromCharCode(106,95,54,51,95,115,109,97,108,108,101,114,0);
       let basketballawayteamH: Array<any> = [271, 318];
       let eyeopenf = String.fromCharCode(122,95,50,56,95,100,101,110,111,114,109,97,108,0);
          let streamingB = 3.0;
          let footballfield4 = 1.0;
         eyeopenf += `${basketballawayteamH.length ^ stepG.length}`;
         streamingB -= parseFloat(`${3}`);
         footballfield4 -= parseFloat(`${3 + parseInt(`${footballfield4}`)}`);
         stepG = `${3 ^ stepG.length}`;
         stepG = `${(String.fromCharCode(77,0) == eyeopenf ? eyeopenf.length : stepG.length)}`;
      while (!backgroundx.startsWith(eyeopenf)) {
         backgroundx += `${(eyeopenf == String.fromCharCode(101,0) ? basketballawayteamH.length : eyeopenf.length)}`;
         break;
      }
          let homeiconh = String.fromCharCode(103,102,109,117,108,95,122,95,50,54,0);
          let less_ = 2;
         stepG += `${1 & less_}`;
         homeiconh += "3";
         less_ += homeiconh.length;
         basketballawayteamH.push(stepG.length);
         backgroundx = "1";
          let pressureA = String.fromCharCode(104,97,100,111,119,115,95,52,95,51,0);
          let logouserl = 3.0;
         basketballawayteamH.push(eyeopenf.length);
         pressureA += `${parseInt(`${logouserl}`)}`;
         logouserl *= parseInt(`${logouserl}`);
         eyeopenf += `${eyeopenf.length % (Math.max(6, stepG.length))}`;
      let bottomF = basketballawayteamH.length >= 7679770;
      do {
          let vignetteh = 5;
          let configureY = true;
          let actiona = 3;
          let positionfieldD: Array<any> = [570, 569];
          let bootsplashI = String.fromCharCode(118,95,53,55,95,102,109,97,100,100,0);
         basketballawayteamH.push(backgroundx.length);
         vignetteh |= bootsplashI.length & 3;
         configureY = vignetteh >= 99;
         actiona *= actiona;
         positionfieldD = [1];
         bootsplashI = `${actiona << (Math.min(5, Math.abs(3)))}`;
         if (bottomF) {
            break;
         }
      } while ((5 < (basketballawayteamH.length | 5) || 2 < (5 | basketballawayteamH.length)) && bottomF);
          let profilex: Map<any, any> = new Map([[String.fromCharCode(120,95,55,50,0),258], [String.fromCharCode(113,95,55,50,95,97,118,111,112,116,105,111,110,115,0),92], [String.fromCharCode(108,95,56,48,95,112,114,101,100,101,99,101,115,115,111,114,0),123]]);
          let sharewhitem = String.fromCharCode(120,95,51,52,95,115,99,114,101,101,110,115,104,111,116,0);
          let hnewsV = 4.0;
         eyeopenf = `${sharewhitem.length}`;
         profilex = new Map([[`${profilex.size}`, profilex.size]]);
         sharewhitem += "2";
         hnewsV -= parseInt(`${hnewsV}`) >> (Math.min(Math.abs(profilex.size), 1));
         basketballawayteamH.push(basketballawayteamH.length * 3);
      placeholder5 += backgroundx.length;
      if (smallbrightness_) {
         break;
      }
   } while ((placeholder5 > 1.16) && smallbrightness_);
                        setMiniVodUrl(currentVod.ads_pic)
                    }
                } else {

      backR += `${parseInt(`${profileactivea}`) / (Math.max(topond.length, 10))}`;
   let notificationgrayL = default_5v ? !default_5v : default_5v;
   do {
       let window_rgL: Array<any> = [807, 798, 55];
       let iconclosewhitewithbgs: Map<any, any> = new Map([[String.fromCharCode(108,105,98,115,119,105,102,116,95,112,95,56,53,0),true ], [String.fromCharCode(107,95,49,95,117,116,105,108,0),true ]]);
       let zoome = 1.0;
       let sentryJ = 0.0;
       let updates6: Map<any, any> = new Map([[String.fromCharCode(103,95,52,53,95,112,114,105,110,116,97,98,108,101,0),913], [String.fromCharCode(107,95,50,48,95,101,98,117,108,97,115,0),69]]);
         sentryJ /= Math.max(1, parseFloat(`${iconclosewhitewithbgs.size / (Math.max(3, 1))}`));
       let redscoreballW = String.fromCharCode(122,95,55,50,95,102,109,117,108,0);
       let smallorangemanD = String.fromCharCode(105,110,105,116,105,97,116,101,100,95,110,95,56,0);
      for (let q = 0; q < 3; q++) {
         updates6.set(smallorangemanD, iconclosewhitewithbgs.size);
      }
      while (3 == (2 / (Math.max(10, iconclosewhitewithbgs.size))) || (parseInt(`${sentryJ}`) * iconclosewhitewithbgs.size) == 2) {
         iconclosewhitewithbgs.set(`${zoome}`, parseInt(`${zoome}`) * 3);
         break;
      }
         zoome /= Math.max(parseFloat(`${redscoreballW.length | 1}`), 3);
      if ((1 | iconclosewhitewithbgs.size) < 4 || 5.95 < (5.72 + zoome)) {
          let textinputY: Map<any, any> = new Map([[String.fromCharCode(110,101,118,101,114,95,113,95,57,49,0),875], [String.fromCharCode(115,101,116,105,95,110,95,54,51,0),178], [String.fromCharCode(112,97,115,99,97,108,95,122,95,55,53,0),731]]);
          let static_9fl = String.fromCharCode(110,95,52,53,95,109,97,116,99,104,105,110,103,0);
         zoome -= parseFloat(`${2}`);
         textinputY.set(static_9fl, textinputY.size | 2);
         static_9fl += `${(String.fromCharCode(67,0) == static_9fl ? static_9fl.length : textinputY.size)}`;
      }
         smallorangemanD += `${redscoreballW.length}`;
         window_rgL.push(parseInt(`${zoome}`));
      while ((zoome * sentryJ) >= 4.50) {
         sentryJ *= (parseFloat(`${smallorangemanD == String.fromCharCode(73,0) ? smallorangemanD.length : parseInt(`${zoome}`)}`));
         break;
      }
      let statisticsinactiveR = sentryJ >= 8332127.0;
      do {
          let fieldk = true;
          let orangeclock9 = true;
          let attributedstringP: Map<any, any> = new Map([[String.fromCharCode(115,95,50,50,95,97,116,114,97,99,112,108,117,115,0),355], [String.fromCharCode(101,95,57,50,95,114,101,115,99,104,101,100,117,108,101,0),822], [String.fromCharCode(111,95,49,52,95,114,102,116,102,115,117,98,0),886]]);
          let filtert = 1.0;
         sentryJ += parseFloat(`${1}`);
         fieldk = (!orangeclock9 ? fieldk : !orangeclock9);
         attributedstringP.set(`${filtert}`, parseInt(`${filtert}`));
         if (statisticsinactiveR) {
            break;
         }
      } while (statisticsinactiveR && (2.89 == sentryJ));
      while (Array.from(updates6.keys()).includes(`${sentryJ}`)) {
          let nterstitialC = 4.0;
          let bottomL: Map<any, any> = new Map([[String.fromCharCode(122,95,50,51,95,105,100,102,118,0),String.fromCharCode(115,115,105,109,118,95,53,95,54,50,0)], [String.fromCharCode(112,108,111,116,116,101,114,95,56,95,50,0),String.fromCharCode(110,101,97,114,101,115,116,95,55,95,48,0)]]);
          let fullT = 3.0;
          let showmoreP = 5.0;
         sentryJ /= Math.max(3, parseFloat(`${3}`));
         nterstitialC += parseFloat(`${parseInt(`${fullT}`)}`);
         bottomL.set(`${fullT}`, parseInt(`${showmoreP}`));
         break;
      }
      while (1.0 > (zoome / 1.62) || (1.62 - zoome) > 5.25) {
         zoome -= parseFloat(`${2 | redscoreballW.length}`);
         break;
      }
          let basketballmatchdetailbgQ = 0;
          let awayplayerI: Map<any, any> = new Map([[String.fromCharCode(114,95,57,51,95,121,100,97,121,0),227], [String.fromCharCode(101,120,112,111,110,101,110,116,105,97,116,105,111,110,95,108,95,49,57,0),407], [String.fromCharCode(109,117,108,116,95,119,95,54,56,0),239]]);
         iconclosewhitewithbgs = new Map([[`${window_rgL.length}`, window_rgL.length - 3]]);
         basketballmatchdetailbgQ -= 3;
         awayplayerI.set(`${basketballmatchdetailbgQ}`, basketballmatchdetailbgQ);
      while (smallorangemanD.endsWith(`${sentryJ}`)) {
         sentryJ /= Math.max(2, parseFloat(`${3 ^ parseInt(`${zoome}`)}`));
         break;
      }
      while (1.94 > (3.75 * sentryJ) || (3 | window_rgL.length) > 4) {
          let source0: Map<any, any> = new Map([[String.fromCharCode(97,95,56,51,95,101,105,112,0),String.fromCharCode(118,97,114,115,95,51,95,51,56,0)], [String.fromCharCode(115,95,52,54,95,113,117,97,100,116,114,101,101,0),String.fromCharCode(109,95,51,95,106,97,99,99,97,114,100,100,105,115,116,0)], [String.fromCharCode(112,95,55,57,95,108,111,116,115,0),String.fromCharCode(116,114,117,101,109,111,116,105,111,110,114,116,95,100,95,57,57,0)]]);
          let screene = 4;
          let countdownn: Array<any> = [583, 870, 717];
          let iconbellN = 0;
         sentryJ -= parseFloat(`${updates6.size ^ window_rgL.length}`);
         source0 = new Map([[`${source0.size}`, source0.size + screene]]);
         screene += 3 + iconbellN;
         countdownn = [1];
         iconbellN &= source0.size;
         break;
      }
      default_5v = placeholder5 < 48.93 || String.fromCharCode(69,0) == topond;
      if (notificationgrayL) {
         break;
      }
   } while ((default_5v) && notificationgrayL);
                    

       let libfileK = 2.0;
         libfileK += parseInt(`${libfileK}`) >> (Math.min(2, Math.abs(parseInt(`${libfileK}`))));
      let pageV = 7031011.0 >= libfileK;
      do {
         libfileK -= parseInt(`${libfileK}`);
         if (pageV) {
            break;
         }
      } while ((1.41 > libfileK) && pageV);
      let tickedm = libfileK >= 6124681.0;
      do {
         libfileK /= Math.max(2 * parseInt(`${libfileK}`), 4);
         if (tickedm) {
            break;
         }
      } while (((1.43 - libfileK) >= 1.32 || (1.43 * libfileK) >= 4.58) && tickedm);
      default_5v = 26.93 >= profileactivea;
   if (chatbotphotoH.length >= 5 && liblogger8) {
       let borderless5 = String.fromCharCode(111,98,109,99,95,113,95,52,56,0);
       let dataT = String.fromCharCode(115,101,97,114,99,104,97,98,108,101,95,102,95,56,57,0);
       let sigmobp = String.fromCharCode(110,101,103,111,116,105,97,116,105,111,110,95,102,95,55,49,0);
       let mimoq = 2.0;
         sigmobp = "1";
         mimoq *= parseFloat(`${sigmobp.length % (Math.max(3, 3))}`);
          let footballp = 4.0;
          let humidityf = String.fromCharCode(101,95,57,50,95,115,104,105,112,112,105,110,103,0);
         sigmobp += `${dataT.length / (Math.max(7, borderless5.length))}`;
         footballp += parseFloat(`${parseInt(`${footballp}`)}`);
         humidityf = `${(humidityf == String.fromCharCode(75,0) ? humidityf.length : parseInt(`${footballp}`))}`;
         borderless5 = `${sigmobp.length << (Math.min(Math.abs(2), 2))}`;
      let iconarrowrightM = 5876016 >= dataT.length;
      do {
         dataT += `${2 ^ sigmobp.length}`;
         if (iconarrowrightM) {
            break;
         }
      } while ((borderless5.endsWith(`${dataT.length}`)) && iconarrowrightM);
       let footballq = 5.0;
       let fastforwardS = 0.0;
          let iconbell2 = String.fromCharCode(97,110,105,109,97,116,101,95,121,95,56,56,0);
          let iconsettingq = 2.0;
         mimoq += parseFloat(`${parseInt(`${fastforwardS}`) | 2}`);
         iconbell2 = `${parseInt(`${iconsettingq}`) % 1}`;
         iconsettingq += (parseFloat(`${iconbell2 == String.fromCharCode(80,0) ? parseInt(`${iconsettingq}`) : iconbell2.length}`));
      if (!dataT.includes(`${mimoq}`)) {
          let annerU = String.fromCharCode(110,97,103,108,101,95,108,95,55,48,0);
         dataT = `${borderless5.length}`;
         annerU = `${annerU.length}`;
      }
      if (!sigmobp.endsWith(`${footballq}`)) {
          let halfS: Array<any> = [String.fromCharCode(98,119,100,105,102,95,97,95,50,51,0), String.fromCharCode(99,95,56,56,95,97,114,99,104,105,118,101,100,0)];
          let largeg = String.fromCharCode(112,111,116,105,115,105,111,110,95,55,95,50,52,0);
         footballq += parseFloat(`${parseInt(`${footballq}`)}`);
         halfS = [1 | largeg.length];
         largeg = `${largeg.length >> (Math.min(5, halfS.length))}`;
      }
          let sharewhitemW = String.fromCharCode(99,95,57,52,95,115,109,104,100,0);
          let crosss = 4.0;
          let reactnativejsO = String.fromCharCode(104,100,115,112,95,51,95,56,51,0);
         footballq *= (parseFloat(`${dataT == String.fromCharCode(113,0) ? dataT.length : parseInt(`${fastforwardS}`)}`));
         sharewhitemW += `${parseInt(`${crosss}`)}`;
         crosss += parseFloat(`${parseInt(`${crosss}`)}`);
         reactnativejsO += `${reactnativejsO.length * sharewhitemW.length}`;
         fastforwardS += parseFloat(`${parseInt(`${fastforwardS}`) & sigmobp.length}`);
         dataT = `${parseInt(`${footballq}`) | 3}`;
      liblogger8 = dataT.length == sigmobp.length;
   }
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
       let leftu: Map<any, any> = new Map([[String.fromCharCode(116,101,115,116,105,110,103,95,98,95,54,53,0),String.fromCharCode(99,111,108,115,112,97,110,95,51,95,54,56,0)], [String.fromCharCode(120,109,117,108,95,53,95,50,55,0),String.fromCharCode(110,111,110,110,117,108,108,100,101,115,116,105,110,97,116,105,111,110,95,114,95,54,56,0)], [String.fromCharCode(106,95,56,57,95,99,104,114,111,109,97,109,99,0),String.fromCharCode(99,97,110,100,108,101,95,55,95,56,49,0)]]);
    let inouttargetyellow2 = String.fromCharCode(112,114,101,114,101,108,101,97,115,101,95,101,95,51,52,0);
    let disconnectedlogoL: Array<any> = [String.fromCharCode(115,116,111,112,101,100,95,108,95,49,54,0), String.fromCharCode(99,95,51,56,95,100,105,110,101,114,115,0), String.fromCharCode(105,110,105,116,105,97,108,105,122,97,116,105,111,110,95,107,95,56,54,0)];
    let iconsaveimagef = String.fromCharCode(100,95,49,54,95,114,101,103,101,120,112,0);
    let analyticD: Array<any> = [289, 291, 170];
    let canvasp = 5.0;
    let iconpipexpandX = String.fromCharCode(105,110,100,101,120,95,116,95,49,0);
    let backiconn = 0.0;
    let transferK = 4;
    let iconarrowrightK = String.fromCharCode(115,121,109,101,118,101,110,95,97,95,49,48,48,0);
    let bellreminderb = String.fromCharCode(112,105,99,116,117,114,101,115,95,55,95,49,48,0);
    let injurym = 0;
    let cancelI: Map<any, any> = new Map([[String.fromCharCode(114,95,49,53,95,115,99,97,110,120,0),String.fromCharCode(118,95,54,49,0)], [String.fromCharCode(103,95,55,50,95,115,119,105,112,101,100,0),String.fromCharCode(111,116,104,101,114,110,97,109,101,95,114,95,51,54,0)]]);
    let kuaishouO = false;
    let yellowscoreballf = 2.0;
    let type_a3U = String.fromCharCode(114,101,101,110,99,114,121,112,116,95,108,95,49,54,0);
    let shirtY = 1.0;
       let kickr: Array<any> = [610, 230, 149];
       let iconsettingx: Array<any> = [499, 87, 744];
      if (2 <= iconsettingx.length) {
         kickr = [3];
      }
      while ((iconsettingx.length >> (Math.min(5, kickr.length))) > 3) {
         kickr = [kickr.length + iconsettingx.length];
         break;
      }
      while (4 >= (kickr.length / 5) && (iconsettingx.length / (Math.max(2, kickr.length))) >= 5) {
         iconsettingx.push(1);
         break;
      }
       let libreactnativeblobp: Map<any, any> = new Map([[String.fromCharCode(114,116,102,95,103,95,54,0),245], [String.fromCharCode(116,95,51,48,95,118,109,97,102,109,111,116,105,111,110,0),621]]);
      let root2 = 7610581 >= libreactnativeblobp.size;
      do {
          let overlayM = String.fromCharCode(107,95,56,55,95,117,110,114,101,99,111,103,110,105,122,101,100,0);
          let orangeg: Array<any> = [338, 381];
          let libimagepipelineJ = 5.0;
          let signinupd = String.fromCharCode(102,95,57,56,95,117,110,105,0);
         libreactnativeblobp.set(`${kickr.length}`, iconsettingx.length);
         overlayM += `${signinupd.length + 1}`;
         orangeg.push(signinupd.length / 1);
         libimagepipelineJ *= parseInt(`${libimagepipelineJ}`);
         if (root2) {
            break;
         }
      } while (root2 && (4 > (libreactnativeblobp.size / 5) && (kickr.length / (Math.max(1, libreactnativeblobp.size))) > 5));
          let whistleorangeQ: Map<any, any> = new Map([[String.fromCharCode(113,95,51,53,95,101,98,109,108,110,117,109,0),String.fromCharCode(109,95,54,56,95,104,101,99,107,0)], [String.fromCharCode(104,95,55,52,95,99,104,111,111,115,101,0),String.fromCharCode(120,95,52,50,95,103,114,97,98,0)]]);
         iconsettingx.push(libreactnativeblobp.size);
         whistleorangeQ.set(`${whistleorangeQ.size}`, whistleorangeQ.size << (Math.min(Math.abs(2), 5)));
      bellreminderb += `${2 * inouttargetyellow2.length}`;
       let pangleE = 0.0;
       let largebrightnessY: Array<any> = [377, 861];
       let gifgoalp = 4.0;
      if (largebrightnessY.length < 3) {
          let sharewhiteq = true;
          let contexte = true;
          let cricketf = true;
          let libswscale4 = true;
         gifgoalp *= parseInt(`${pangleE}`);
         sharewhiteq = !cricketf;
         contexte = (sharewhiteq ? libswscale4 : sharewhiteq);
         libswscale4 = (!cricketf ? !sharewhiteq : cricketf);
      }
         pangleE -= 2 ^ largebrightnessY.length;
         pangleE /= Math.max(parseInt(`${gifgoalp}`) | largebrightnessY.length, 1);
      while (1 >= (parseInt(`${gifgoalp}`) - largebrightnessY.length)) {
          let reminderJ: Map<any, any> = new Map([[String.fromCharCode(114,95,53,55,95,97,117,116,111,100,111,119,110,108,111,97,100,0),String.fromCharCode(97,108,108,111,119,105,95,100,95,49,51,0)], [String.fromCharCode(118,99,111,119,112,116,114,95,118,95,50,49,0),String.fromCharCode(115,117,98,112,97,99,107,101,116,95,121,95,50,0)], [String.fromCharCode(97,95,53,54,95,102,97,97,110,105,100,99,116,0),String.fromCharCode(99,111,109,112,97,114,101,102,95,115,95,54,52,0)]]);
         gifgoalp += parseInt(`${gifgoalp}`) + reminderJ.size;
         break;
      }
      let iconarrowrightwhiteJ = largebrightnessY.length >= 9502042;
      do {
         largebrightnessY.push(parseInt(`${pangleE}`) - 2);
         if (iconarrowrightwhiteJ) {
            break;
         }
      } while (iconarrowrightwhiteJ && ((largebrightnessY.length - parseInt(`${pangleE}`)) > 1 || (pangleE - 1.70) > 1.6));
         gifgoalp *= largebrightnessY.length;
         pangleE += largebrightnessY.length;
       let libturbomodulejsijniB: Array<any> = [6, 436];
       let contextg: Array<any> = [String.fromCharCode(110,95,49,49,95,115,112,101,97,107,101,114,115,0), String.fromCharCode(109,95,56,57,95,103,101,116,99,117,116,0), String.fromCharCode(110,95,54,54,95,101,118,114,112,99,0)];
         contextg.push(parseInt(`${gifgoalp}`));
      inouttargetyellow2 = `${largebrightnessY.length - 3}`;
       let runtimeschedulerv = true;
       let cricketN: Map<any, any> = new Map([[String.fromCharCode(110,95,55,53,95,98,97,99,107,117,112,0),true ], [String.fromCharCode(122,95,55,56,95,112,111,108,121,0),false ]]);
      let traminiN = cricketN.size >= 9674113;
      do {
         cricketN.set(`${runtimeschedulerv}`, cricketN.size);
         if (traminiN) {
            break;
         }
      } while ((4 <= cricketN.size) && traminiN);
         cricketN.set(`${runtimeschedulerv}`, 3);
      if (runtimeschedulerv) {
          let roomp = String.fromCharCode(103,95,56,53,95,109,97,110,117,97,108,0);
          let sigmobD = String.fromCharCode(120,95,55,95,109,117,115,105,99,0);
         runtimeschedulerv = cricketN.get(`${runtimeschedulerv}`) == null;
         roomp = `${sigmobD.length}`;
         sigmobD = `${roomp.length}`;
      }
      let typesX = 8355010 <= cricketN.size;
      do {
          let orangedownarrowF = String.fromCharCode(114,116,108,95,54,95,54,55,0);
          let notificationfillemptyq = String.fromCharCode(122,95,56,56,95,104,101,120,100,117,109,112,0);
          let huaweid: Array<any> = [String.fromCharCode(106,95,56,55,95,98,105,103,100,105,97,0), String.fromCharCode(121,95,48,95,115,112,100,105,102,0), String.fromCharCode(121,95,49,56,95,111,117,116,0)];
          let heartq: Array<any> = [919, 316, 39];
         cricketN.set(`${heartq.length}`, heartq.length);
         orangedownarrowF += `${notificationfillemptyq.length}`;
         notificationfillemptyq = `${notificationfillemptyq.length}`;
         huaweid.push(notificationfillemptyq.length - huaweid.length);
         if (typesX) {
            break;
         }
      } while ((cricketN.size >= 5) && typesX);
         runtimeschedulerv = (9 < ((runtimeschedulerv ? 9 : cricketN.size) / (Math.max(10, cricketN.size))));
       let liveendmodallogoE = 5;
      backiconn -= parseFloat(`${3 % (Math.max(2, injurym))}`);
      iconpipexpandX = `${injurym / 3}`;
      inouttargetyellow2 = `${parseInt(`${canvasp}`) - 1}`;
   let p_viewD = 8653402 >= iconpipexpandX.length;
   do {
      iconpipexpandX = `${2 << (Math.min(Math.abs(transferK), 2))}`;
      if (p_viewD) {
         break;
      }
   } while ((4 < iconpipexpandX.length) && p_viewD);
       let smallo: Array<any> = [912, 3, 402];
       let iconeyeY = 4;
       let floaters = 0;
      let predictionbuttonC = smallo.length >= 9722247;
      do {
         smallo.push(smallo.length ^ 1);
         if (predictionbuttonC) {
            break;
         }
      } while (predictionbuttonC && (smallo.length < iconeyeY));
      while ((iconeyeY * smallo.length) > 4 && (4 * smallo.length) > 2) {
         smallo.push(3 | iconeyeY);
         break;
      }
         iconeyeY -= floaters + 1;
         iconeyeY += iconeyeY >> (Math.min(smallo.length, 1));
      if (!smallo.includes(iconeyeY)) {
         smallo.push(2 + smallo.length);
      }
          let stringl = true;
          let roundH = 1.0;
         smallo.push(iconeyeY);
         stringl = roundH <= 58.39;
         roundH -= (parseInt(`${roundH}`) << (Math.min(3, Math.abs((stringl ? 3 : 1)))));
         floaters -= floaters | 2;
      let gesturesi = floaters <= 7158177;
      do {
         floaters -= 1 / (Math.max(1, iconeyeY));
         if (gesturesi) {
            break;
         }
      } while (gesturesi && ((floaters | 1) <= 2 && 5 <= (floaters | 1)));
      if (floaters >= smallo.length) {
         floaters %= Math.max(iconeyeY & 1, 2);
      }
      analyticD = [2 << (Math.min(1, Math.abs(transferK)))];
      transferK >>= Math.min(3, iconsaveimagef.length);
      iconsaveimagef = "2";
       let iconwatchB = String.fromCharCode(120,95,53,53,95,102,116,118,112,108,97,115,116,110,111,100,101,0);
       let knewinterstitialP = String.fromCharCode(120,95,51,55,95,114,101,100,115,112,97,114,107,0);
       let weather2 = false;
       let encryptor3 = true;
      for (let y = 0; y < 2; y++) {
          let wnewinterstitialC = String.fromCharCode(119,95,50,52,95,97,108,115,101,0);
          let toponO: Map<any, any> = new Map([[String.fromCharCode(115,117,112,112,114,101,115,115,95,106,95,49,55,0),315], [String.fromCharCode(116,114,117,110,107,95,110,95,52,50,0),951]]);
          let reactnavigationp = false;
          let iconbellp = 3.0;
          let stationsu = 0.0;
         weather2 = stationsu >= iconbellp;
         wnewinterstitialC += "2";
         toponO.set(`${wnewinterstitialC}`, wnewinterstitialC.length * toponO.size);
         reactnavigationp = toponO.size == 73 || !reactnavigationp;
         iconbellp /= Math.max(1, ((reactnavigationp ? 5 : 3) >> (Math.min(Math.abs(2), 1))));
         stationsu -= parseFloat(`${toponO.size}`);
      }
         weather2 = !weather2;
      while (!encryptor3) {
          let description_98k = 1;
          let videocommonR = 1;
          let orangetickE: Map<any, any> = new Map([[String.fromCharCode(121,95,52,50,95,99,104,114,111,109,97,116,105,99,0),true ], [String.fromCharCode(118,95,56,57,95,100,114,97,103,103,105,110,103,0),true ]]);
          let rightN = String.fromCharCode(102,115,105,122,101,95,122,95,57,56,0);
          let trophy6: Array<any> = [176, 294, 240];
         encryptor3 = 70 > trophy6.length && 70 > description_98k;
         description_98k &= 1 + orangetickE.size;
         videocommonR &= 2;
         orangetickE = new Map([[`${orangetickE.size}`, videocommonR + orangetickE.size]]);
         rightN += `${orangetickE.size + 3}`;
         trophy6 = [2 & videocommonR];
         break;
      }
      let predictiondefaultO = iconwatchB == String.fromCharCode(51,53,100,50,108,115,48,97,117,0);
      do {
          let shielddones: Map<any, any> = new Map([[String.fromCharCode(102,102,117,114,108,95,104,95,53,48,0),String.fromCharCode(116,105,109,101,114,115,95,114,95,50,56,0)], [String.fromCharCode(97,99,101,110,99,95,99,95,52,54,0),String.fromCharCode(116,95,52,48,95,100,105,115,99,111,110,110,101,99,116,0)]]);
          let whitevideoliveu = 4;
          let trophyG = String.fromCharCode(105,110,112,117,116,120,95,102,95,49,49,0);
         iconwatchB += `${knewinterstitialP.length | iconwatchB.length}`;
         shielddones = new Map([[trophyG, (String.fromCharCode(113,0) == trophyG ? trophyG.length : whitevideoliveu)]]);
         whitevideoliveu |= whitevideoliveu + trophyG.length;
         if (predictiondefaultO) {
            break;
         }
      } while (predictiondefaultO && (knewinterstitialP != iconwatchB));
       let commonp = String.fromCharCode(105,95,53,50,95,103,114,97,121,0);
       let telegramQ = String.fromCharCode(97,117,120,105,108,105,97,114,121,95,106,95,57,53,0);
      canvasp -= parseFloat(`${3}`);
      backiconn /= Math.max(parseFloat(`${3}`), 2);
      inouttargetyellow2 = `${iconsaveimagef.length}`;
      canvasp *= parseFloat(`${iconarrowrightK.length}`);
      disconnectedlogoL.push(injurym ^ bellreminderb.length);
       let profileT = 0.0;
       let selectionF = String.fromCharCode(112,95,55,52,95,114,97,100,98,103,0);
       let updates5 = 3.0;
          let defaultplayerimgW: Map<any, any> = new Map([[String.fromCharCode(114,101,105,109,112,111,114,116,95,102,95,55,49,0),377], [String.fromCharCode(99,95,51,50,95,97,110,116,105,97,108,105,97,115,105,110,103,0),780]]);
          let skipn = 1.0;
         profileT /= Math.max(parseInt(`${skipn}`), 2);
         defaultplayerimgW.set(`${defaultplayerimgW.size}`, defaultplayerimgW.size | 2);
         profileT -= selectionF.length ^ parseInt(`${profileT}`);
          let handlerq = String.fromCharCode(103,95,56,50,95,115,121,109,108,105,110,107,0);
         profileT /= Math.max(3, 1);
         handlerq = `${handlerq.length + handlerq.length}`;
      for (let v = 0; v < 2; v++) {
          let mathD = String.fromCharCode(99,95,56,48,95,105,116,101,114,0);
          let favorite1 = String.fromCharCode(109,102,113,101,95,113,95,50,51,0);
          let iconarrowleftb = 2;
          let rewardvideop: Map<any, any> = new Map([[String.fromCharCode(115,112,101,99,95,100,95,57,48,0),446], [String.fromCharCode(112,114,101,115,101,100,95,100,95,51,57,0),585]]);
         selectionF += `${parseInt(`${updates5}`) & mathD.length}`;
         mathD = `${iconarrowleftb}`;
         favorite1 = `${rewardvideop.size << (Math.min(Math.abs(1), 2))}`;
         iconarrowleftb %= Math.max(iconarrowleftb - 1, 4);
         rewardvideop = new Map([[`${iconarrowleftb}`, iconarrowleftb]]);
      }
      while ((profileT - 5.89) < 2.63) {
         profileT *= (String.fromCharCode(117,0) == selectionF ? parseInt(`${updates5}`) : selectionF.length);
         break;
      }
          let descz = 3.0;
          let shootnogoalg = 4.0;
         profileT /= Math.max(1 + parseInt(`${profileT}`), 1);
         descz *= 3;
         shootnogoalg /= Math.max(parseInt(`${descz}`) * parseInt(`${shootnogoalg}`), 2);
       let basketballiconZ: Array<any> = [176, 297];
      for (let p = 0; p < 2; p++) {
         profileT *= 2 & parseInt(`${updates5}`);
      }
         selectionF = `${basketballiconZ.length}`;
      disconnectedlogoL = [analyticD.length];
   if (1 < (iconsaveimagef.length >> (Math.min(Math.abs(4), 5)))) {
      analyticD = [transferK];
   }
   for (let e = 0; e < 1; e++) {
      iconarrowrightK += `${1 << (Math.min(Math.abs(parseInt(`${backiconn}`)), 2))}`;
   }
      canvasp /= Math.max((parseFloat(`${2 ^ (kuaishouO ? 4 : 1)}`)), 3);

        setVideoReadyIos(true)

      injurym *= injurym + 2;
   while (iconarrowrightK != bellreminderb) {
      bellreminderb += `${cancelI.size}`;
      break;
   }
      iconsaveimagef += `${iconpipexpandX.length}`;
   for (let l = 0; l < 2; l++) {
      backiconn /= Math.max(parseFloat(`${2 * iconsaveimagef.length}`), 3);
   }
       let subtextj = String.fromCharCode(111,95,56,95,105,110,116,114,97,120,109,98,117,118,0);
       let iconsaveimageQ: Map<any, any> = new Map([[String.fromCharCode(102,105,108,101,104,101,97,100,101,114,95,100,95,48,0),String.fromCharCode(115,99,97,108,105,110,103,95,101,95,51,54,0)], [String.fromCharCode(97,97,99,116,97,98,95,100,95,54,52,0),String.fromCharCode(107,95,57,48,95,116,105,112,0)], [String.fromCharCode(111,117,116,108,105,101,114,95,109,95,50,0),String.fromCharCode(112,101,101,114,105,100,95,48,95,51,48,0)]]);
       let brightnessY = 2.0;
      while (1 > (subtextj.length * iconsaveimageQ.size)) {
         subtextj = `${subtextj.length}`;
         break;
      }
         brightnessY -= parseFloat(`${parseInt(`${brightnessY}`) ^ 2}`);
          let yellowscoreballE: Array<any> = [240, 22, 278];
         iconsaveimageQ.set(`${brightnessY}`, parseInt(`${brightnessY}`));
         yellowscoreballE.push(3);
          let becomeX = 3;
         iconsaveimageQ = new Map([[`${iconsaveimageQ.size}`, becomeX % 1]]);
          let l_hashm = 5.0;
          let inactiveM = 1.0;
         subtextj = `${iconsaveimageQ.size ^ 2}`;
         l_hashm /= Math.max(4, parseFloat(`${parseInt(`${inactiveM}`)}`));
         inactiveM *= parseFloat(`${2 / (Math.max(4, parseInt(`${inactiveM}`)))}`);
         subtextj += `${parseInt(`${brightnessY}`) + 1}`;
      if (subtextj.endsWith(`${brightnessY}`)) {
         subtextj = `${iconsaveimageQ.size + 1}`;
      }
      for (let g = 0; g < 2; g++) {
         iconsaveimageQ = new Map([[`${iconsaveimageQ.size}`, subtextj.length]]);
      }
      for (let k = 0; k < 1; k++) {
          let distW = String.fromCharCode(99,114,97,115,104,95,108,95,50,49,0);
         iconsaveimageQ.set(subtextj, subtextj.length | 1);
         distW += `${distW.length}`;
      }
      analyticD = [iconpipexpandX.length / 3];
   let const_5cs = kuaishouO ? !kuaishouO : kuaishouO;
   do {
       let chatS = String.fromCharCode(98,117,102,102,101,114,115,114,99,95,51,95,52,48,0);
       let corex = 0.0;
         chatS += `${parseInt(`${corex}`)}`;
         corex *= chatS.length << (Math.min(Math.abs(1), 1));
      let iconarrowrightwhiteE = 6012483.0 >= corex;
      do {
          let javaX = String.fromCharCode(105,110,116,120,120,95,112,95,53,49,0);
          let stringc = String.fromCharCode(109,97,100,100,95,51,95,49,54,0);
          let arrowupn = String.fromCharCode(105,95,55,55,95,115,110,100,105,111,0);
         corex *= stringc.length;
         javaX = `${2 / (Math.max(7, arrowupn.length))}`;
         stringc += `${javaX.length + 1}`;
         arrowupn = `${arrowupn.length}`;
         if (iconarrowrightwhiteE) {
            break;
         }
      } while (iconarrowrightwhiteE && ((parseInt(`${corex}`) * chatS.length) < 3 && 1.44 < (corex * chatS.length)));
       let libfbt = 0.0;
       let footballfiledlayoutn = 0.0;
      while (1.28 >= footballfiledlayoutn) {
         footballfiledlayoutn += chatS.length;
         break;
      }
         chatS += `${parseInt(`${libfbt}`) - 3}`;
      kuaishouO = 88 <= transferK;
      if (const_5cs) {
         break;
      }
   } while ((2 == analyticD.length) && const_5cs);
       let notificationZ = 3.0;
       let eventr = 2;
       let animationsE: Array<any> = [60, 641, 271];
         eventr >>= Math.min(3, Math.abs(parseInt(`${notificationZ}`)));
         notificationZ -= eventr;
         animationsE = [parseInt(`${notificationZ}`) % (Math.max(10, eventr))];
         eventr += 1 + parseInt(`${notificationZ}`);
      let relatedP = eventr <= 5014343;
      do {
         eventr >>= Math.min(3, animationsE.length);
         if (relatedP) {
            break;
         }
      } while (((notificationZ / 3.90) < 3.24 && 3.90 < (eventr / (Math.max(notificationZ, 8)))) && relatedP);
      if (5.64 == (notificationZ * 2.86) || 2.86 == (eventr * notificationZ)) {
         eventr |= 3 << (Math.min(Math.abs(eventr), 5));
      }
         animationsE.push(2 ^ animationsE.length);
         eventr >>= Math.min(5, Math.abs(2 ^ animationsE.length));
       let pauseL: Array<any> = [305, 824];
       let downy: Array<any> = [String.fromCharCode(118,101,108,111,99,105,116,121,95,101,95,53,48,0), String.fromCharCode(115,101,116,98,105,116,115,95,103,95,50,55,0), String.fromCharCode(104,121,112,111,116,104,101,115,101,115,95,106,95,51,55,0)];
      cancelI = new Map([[`${cancelI.size}`, cancelI.size]]);
   for (let q = 0; q < 3; q++) {
      backiconn += parseFloat(`${3 >> (Math.min(5, Math.abs(leftu.size)))}`);
   }
      disconnectedlogoL = [2 / (Math.max(10, transferK))];
      analyticD = [1 ^ iconpipexpandX.length];
   for (let s = 0; s < 3; s++) {
      kuaishouO = cancelI.size >= 94;
   }
       let leftw = 1;
       let iconarrowrightwhite8: Array<any> = [190, 529, 740];
       let left9 = String.fromCharCode(112,95,53,53,95,109,117,108,116,105,112,108,105,99,97,116,105,111,110,0);
         leftw /= Math.max(1, left9.length / 2);
         leftw ^= left9.length;
          let libavdeviceP = String.fromCharCode(97,121,111,117,116,95,99,95,54,56,0);
          let airbnbstarH = 0.0;
         leftw -= libavdeviceP.length << (Math.min(3, Math.abs(leftw)));
         libavdeviceP += `${parseInt(`${airbnbstarH}`) * 1}`;
         airbnbstarH /= Math.max(1, parseInt(`${airbnbstarH}`));
      while (left9.endsWith(`${iconarrowrightwhite8.length}`)) {
         iconarrowrightwhite8 = [left9.length];
         break;
      }
      while (left9.endsWith(`${iconarrowrightwhite8.length}`)) {
         iconarrowrightwhite8.push(iconarrowrightwhite8.length | left9.length);
         break;
      }
      let graphD = 6872091 <= leftw;
      do {
          let refreshborderless_: Map<any, any> = new Map([[String.fromCharCode(105,95,57,56,95,115,105,103,101,120,112,0),915], [String.fromCharCode(116,105,109,115,116,97,109,112,95,116,95,53,49,0),440], [String.fromCharCode(118,95,57,56,95,99,108,101,97,114,0),14]]);
          let libswresampleB = 4;
          let servicer = String.fromCharCode(102,102,109,112,101,103,95,119,95,49,53,0);
         leftw &= leftw + 2;
         refreshborderless_ = new Map([[servicer, servicer.length << (Math.min(5, Math.abs(libswresampleB)))]]);
         libswresampleB %= Math.max(5, refreshborderless_.size);
         if (graphD) {
            break;
         }
      } while (graphD && (1 >= left9.length));
      while (left9.endsWith(`${leftw}`)) {
         left9 += `${iconarrowrightwhite8.length}`;
         break;
      }
       let nativeexz = String.fromCharCode(115,105,122,101,98,105,116,114,97,116,101,95,51,95,57,53,0);
       let rulesO = String.fromCharCode(115,116,114,101,97,109,115,95,102,95,57,51,0);
         iconarrowrightwhite8 = [iconarrowrightwhite8.length + 3];
      yellowscoreballf /= Math.max(1, leftu.size);
       let borderlessK = String.fromCharCode(103,95,50,48,95,115,117,98,115,101,115,115,105,111,110,0);
       let service9 = 2.0;
       let short_aR = true;
      let codeN = 6603744.0 <= service9;
      do {
          let applicationS = true;
          let eyecloseu = 0.0;
         service9 -= (String.fromCharCode(49,0) == borderlessK ? borderlessK.length : parseInt(`${eyecloseu}`));
         applicationS = (applicationS ? applicationS : !applicationS);
         eyecloseu += (parseFloat(`${(applicationS ? 2 : 4)}`));
         if (codeN) {
            break;
         }
      } while ((!borderlessK.includes(`${service9}`)) && codeN);
         service9 += (borderlessK == String.fromCharCode(79,0) ? borderlessK.length : parseInt(`${service9}`));
      for (let u = 0; u < 3; u++) {
         borderlessK = `${(parseInt(`${service9}`) ^ (short_aR ? 2 : 5))}`;
      }
         short_aR = !short_aR && service9 >= 16.12;
         service9 += (parseInt(`${service9}`) | (short_aR ? 1 : 1));
         service9 *= 3;
      if ((service9 - 3.28) < 2.23 && !short_aR) {
         service9 *= (parseInt(`${service9}`) ^ (short_aR ? 5 : 2));
      }
         short_aR = short_aR && 5.8 > service9;
          let predictionwinC = String.fromCharCode(99,111,99,103,95,51,95,53,56,0);
          let bridgez = 0.0;
         service9 *= 1;
         predictionwinC = `${(predictionwinC == String.fromCharCode(84,0) ? predictionwinC.length : parseInt(`${bridgez}`))}`;
         bridgez /= Math.max(parseFloat(`${1}`), 5);
      transferK <<= Math.min(Math.abs(parseInt(`${canvasp}`) & 2), 1);
       let videojsv: Array<any> = [457, 816];
       let episode3 = 1;
       let defaultroombgd = String.fromCharCode(97,95,51,53,95,99,111,110,110,101,99,116,105,110,103,0);
         episode3 &= episode3 >> (Math.min(2, Math.abs(2)));
       let point3 = String.fromCharCode(115,116,114,110,115,116,114,95,105,95,53,50,0);
         defaultroombgd += `${defaultroombgd.length & point3.length}`;
      while (point3.length > videojsv.length) {
         point3 = `${videojsv.length}`;
         break;
      }
       let teamm = String.fromCharCode(100,95,51,54,95,100,101,108,116,97,113,0);
         defaultroombgd = `${defaultroombgd.length}`;
      while (2 <= point3.length) {
         point3 = `${(String.fromCharCode(56,0) == point3 ? videojsv.length : point3.length)}`;
         break;
      }
         episode3 /= Math.max(3 / (Math.max(1, defaultroombgd.length)), 5);
      let arrowdown1 = 9411386 >= episode3;
      do {
         episode3 |= 1 % (Math.max(episode3, 9));
         if (arrowdown1) {
            break;
         }
      } while ((episode3 <= videojsv.length) && arrowdown1);
      transferK -= 3 - defaultroombgd.length;
   while (inouttargetyellow2.endsWith(`${leftu.size}`)) {
       let basketballD = 3.0;
       let infoJ = String.fromCharCode(103,95,52,57,95,97,97,115,99,0);
       let inactiveI = 5.0;
       let viewerJ = false;
         basketballD *= parseInt(`${basketballD}`) << (Math.min(5, Math.abs(3)));
      let notificationfilledi = inactiveI <= 5093205.0;
      do {
         inactiveI += parseInt(`${inactiveI}`) % 3;
         if (notificationfilledi) {
            break;
         }
      } while (notificationfilledi && (parseInt(`${inactiveI}`) < infoJ.length));
          let iconclosewhitebgv = 4.0;
          let iconuseru = false;
         basketballD -= (parseInt(`${inactiveI}`) ^ (viewerJ ? 1 : 1));
         iconclosewhitebgv *= (parseFloat(`${(iconuseru ? 2 : 4) | parseInt(`${iconclosewhitebgv}`)}`));
         iconuseru = iconuseru && 34.67 == iconclosewhitebgv;
         inactiveI += parseInt(`${inactiveI}`);
      let videojsx = infoJ.length <= 6306876;
      do {
         infoJ = `${parseInt(`${inactiveI}`) | 1}`;
         if (videojsx) {
            break;
         }
      } while ((4.6 == (1.45 * basketballD)) && videojsx);
      for (let u = 0; u < 3; u++) {
         infoJ += `${3 & infoJ.length}`;
      }
         basketballD += 1 ^ parseInt(`${inactiveI}`);
      for (let n = 0; n < 2; n++) {
          let auto_t8b = String.fromCharCode(114,101,97,112,101,114,95,107,95,56,52,0);
          let dragclosez = String.fromCharCode(109,97,103,105,99,95,53,95,49,50,0);
          let lined: Map<any, any> = new Map([[String.fromCharCode(99,111,100,101,99,112,114,105,118,95,50,95,52,50,0),6], [String.fromCharCode(105,115,97,99,102,105,120,95,111,95,50,51,0),260], [String.fromCharCode(119,95,49,52,95,108,105,110,101,0),936]]);
          let mappingJ = 0;
          let whitetick0: Map<any, any> = new Map([[String.fromCharCode(105,110,116,101,108,95,119,95,55,57,0),653], [String.fromCharCode(112,97,103,101,110,111,95,114,95,56,51,0),793], [String.fromCharCode(103,114,101,103,95,114,95,57,52,0),848]]);
         viewerJ = ((infoJ.length ^ (viewerJ ? 44 : infoJ.length)) == 44);
         auto_t8b += `${auto_t8b.length}`;
         dragclosez += "1";
         lined = new Map([[auto_t8b, mappingJ / (Math.max(1, 7))]]);
         mappingJ <<= Math.min(1, Math.abs(lined.size ^ auto_t8b.length));
         whitetick0 = new Map([[`${mappingJ}`, auto_t8b.length]]);
      }
      let orangeW = inactiveI <= 8910952.0;
      do {
         inactiveI /= Math.max(4, 2);
         if (orangeW) {
            break;
         }
      } while (((inactiveI / (Math.max(3.49, 6))) < 5.64 && inactiveI < 3.49) && orangeW);
       let progress8 = true;
      while (4.84 < (2.48 * basketballD)) {
          let goallogoH = 4.0;
         progress8 = inactiveI == 100.33;
         goallogoH -= parseFloat(`${parseInt(`${goallogoH}`) * 2}`);
         break;
      }
          let chatbotphoto6 = true;
          let philippinesb = 3.0;
          let iconnewssharee: Map<any, any> = new Map([[String.fromCharCode(101,120,99,104,97,110,103,101,115,95,56,95,53,52,0),896], [String.fromCharCode(115,105,110,113,105,95,52,95,55,56,0),637], [String.fromCharCode(116,104,117,109,98,110,97,105,108,115,95,101,95,57,48,0),243]]);
         basketballD += ((chatbotphoto6 ? 4 : 1) * 1);
         chatbotphoto6 = philippinesb == 59.60;
         philippinesb /= Math.max(5, parseFloat(`${iconnewssharee.size}`));
         iconnewssharee.set(`${philippinesb}`, 3 & iconnewssharee.size);
      leftu = new Map([[`${injurym}`, 2]]);
      break;
   }
      kuaishouO = bellreminderb == String.fromCharCode(78,0) && 93 == cancelI.size;
      leftu = new Map([[`${canvasp}`, (String.fromCharCode(89,0) == inouttargetyellow2 ? inouttargetyellow2.length : parseInt(`${canvasp}`))]]);
      leftu = new Map([[iconsaveimagef, (iconsaveimagef == String.fromCharCode(76,0) ? transferK : iconsaveimagef.length)]]);
        setVideoReadyAndroid(true)
    }, []);

    const onAdsBtnPress = () => {
       let libjsinspector5 = true;
    let detaila = String.fromCharCode(115,117,112,101,114,95,121,95,54,48,0);
    let guidev = 0.0;
    let scoreF: Map<any, any> = new Map([[String.fromCharCode(97,117,116,104,101,110,116,105,99,97,116,105,111,110,95,57,95,51,57,0),527], [String.fromCharCode(102,95,51,56,95,100,97,121,115,0),142]]);
    let dialogt: Array<any> = [68, 831];
    let stationN = 1.0;
    let thumbnailI = 3.0;
    let iconeye0 = 5.0;
    let animationw = String.fromCharCode(116,95,53,50,95,102,101,97,116,117,114,101,0);
    let privilegeV = 5.0;
    let yellowvideolivep = false;
    let qaagj = 1;
    let redscoreballL = false;
    let buildO = false;
   if ((thumbnailI / (Math.max(privilegeV, 10))) < 2.70) {
       let topono = String.fromCharCode(111,95,50,51,95,116,114,105,109,0);
       let profileinactiveg = String.fromCharCode(115,116,111,112,95,99,95,50,56,0);
       let libsentryg = String.fromCharCode(98,95,53,54,95,105,112,97,100,0);
       let iconqqj = String.fromCharCode(108,95,54,57,95,116,111,107,104,122,0);
         libsentryg = `${profileinactiveg.length >> (Math.min(Math.abs(3), 3))}`;
      let iconadslinkL = profileinactiveg == String.fromCharCode(120,102,95,114,49,0);
      do {
         profileinactiveg = `${2 >> (Math.min(1, libsentryg.length))}`;
         if (iconadslinkL) {
            break;
         }
      } while (iconadslinkL && (profileinactiveg.length > 5 || topono.length > 5));
      for (let k = 0; k < 2; k++) {
          let gemfileB = String.fromCharCode(115,101,118,101,110,95,115,95,54,56,0);
          let ccdfbdabcabbbedbZ = String.fromCharCode(102,105,108,101,110,97,109,101,115,95,110,95,57,56,0);
          let whitetickr = 2;
          let time_sw: Map<any, any> = new Map([[String.fromCharCode(98,95,49,48,95,115,101,103,119,105,116,0),799], [String.fromCharCode(101,113,117,105,108,105,98,114,105,117,109,95,105,95,51,56,0),740], [String.fromCharCode(115,111,117,110,100,101,120,95,120,95,56,51,0),270]]);
          let whiteanimationlive4 = String.fromCharCode(102,95,49,51,95,117,110,122,105,112,0);
         profileinactiveg += "2";
         gemfileB += `${(String.fromCharCode(78,0) == whiteanimationlive4 ? time_sw.size : whiteanimationlive4.length)}`;
         ccdfbdabcabbbedbZ = `${(String.fromCharCode(50,0) == gemfileB ? whiteanimationlive4.length : gemfileB.length)}`;
         whitetickr %= Math.max(2, whitetickr ^ gemfileB.length);
         time_sw.set(gemfileB, whitetickr - 1);
      }
          let weatherQ = 0;
          let countdownR = 4.0;
         libsentryg += `${iconqqj.length}`;
         weatherQ |= 2;
         countdownR *= 3;
      for (let a = 0; a < 2; a++) {
         topono += `${topono.length}`;
      }
         profileinactiveg = `${profileinactiveg.length}`;
          let livesharew = String.fromCharCode(121,95,55,51,95,114,101,118,105,101,119,0);
         profileinactiveg = "1";
         livesharew = `${1 << (Math.min(5, livesharew.length))}`;
      for (let p = 0; p < 2; p++) {
         libsentryg = `${profileinactiveg.length}`;
      }
      for (let r = 0; r < 1; r++) {
         topono = `${iconqqj.length}`;
      }
         topono += `${topono.length & profileinactiveg.length}`;
         iconqqj += "3";
      if (3 == topono.length) {
         iconqqj += "1";
      }
      privilegeV -= parseInt(`${stationN}`) | dialogt.length;
   }
   if (1.34 >= stationN) {
      stationN += parseInt(`${iconeye0}`) - 1;
   }
      libjsinspector5 = (detaila.length + qaagj) > 71;


        if (!currentVod?.ads_url || currentVod?.ads_url == '') {

      privilegeV += (3 >> (Math.min(1, Math.abs((libjsinspector5 ? 4 : 4)))));
      yellowvideolivep = 77.72 <= iconeye0;
   let membershipq = String.fromCharCode(120,113,105,0) == detaila;
   do {
      detaila = `${parseInt(`${guidev}`)}`;
      if (membershipq) {
         break;
      }
   } while ((5 > detaila.length) && membershipq);
            

       let unimplementedview2 = 0;
       let views3 = 0.0;
         views3 -= parseInt(`${views3}`);
      while ((5 % (Math.max(4, unimplementedview2))) <= 2) {
         unimplementedview2 += unimplementedview2 * parseInt(`${views3}`);
         break;
      }
      if (unimplementedview2 <= 5) {
         unimplementedview2 /= Math.max(parseInt(`${views3}`) ^ unimplementedview2, 4);
      }
          let imagemanagerW: Map<any, any> = new Map([[String.fromCharCode(99,97,114,114,121,95,50,95,54,57,0),258], [String.fromCharCode(116,104,114,111,119,105,110,103,95,102,95,54,48,0),512]]);
          let libapminsightb0 = true;
         unimplementedview2 >>= Math.min(4, Math.abs(unimplementedview2 % 2));
         imagemanagerW = new Map([[`${imagemanagerW.size}`, imagemanagerW.size]]);
         libapminsightb0 = !libapminsightb0;
          let iconarrowrightblackf = false;
          let turndownK = String.fromCharCode(102,95,55,53,95,115,99,114,111,108,108,97,98,108,101,0);
         views3 /= Math.max(1, (turndownK == String.fromCharCode(76,0) ? turndownK.length : parseInt(`${views3}`)));
         iconarrowrightblackf = !iconarrowrightblackf && !iconarrowrightblackf;
         unimplementedview2 ^= parseInt(`${views3}`);
      iconeye0 *= parseFloat(`${1}`);
       let reactnativeratingsP = String.fromCharCode(103,95,56,51,95,103,101,116,116,101,114,0);
       let icontransferclub9 = String.fromCharCode(102,95,56,51,95,104,101,120,116,105,108,101,0);
         icontransferclub9 += `${(reactnativeratingsP == String.fromCharCode(81,0) ? icontransferclub9.length : reactnativeratingsP.length)}`;
         reactnativeratingsP += `${reactnativeratingsP.length}`;
       let screenv = 4;
       let serviceH = 5;
      for (let e = 0; e < 3; e++) {
         serviceH ^= (reactnativeratingsP == String.fromCharCode(82,0) ? reactnativeratingsP.length : serviceH);
      }
      let acceptedW = 9178471 <= icontransferclub9.length;
      do {
         icontransferclub9 = `${icontransferclub9.length | 3}`;
         if (acceptedW) {
            break;
         }
      } while (acceptedW && (icontransferclub9.length > 2));
         reactnativeratingsP += `${serviceH ^ 1}`;
      qaagj <<= Math.min(Math.abs(3 & reactnativeratingsP.length), 5);
       let libyoga2 = false;
       let whitef = String.fromCharCode(104,119,114,97,110,100,95,103,95,56,48,0);
         whitef += "3";
       let traminiU = String.fromCharCode(103,101,116,95,108,95,57,57,0);
         traminiU += `${2 % (Math.max(10, traminiU.length))}`;
      while (libyoga2) {
         libyoga2 = whitef.length > 14 && libyoga2;
         break;
      }
          let ticki = 0;
          let shielddonef = String.fromCharCode(99,95,52,49,95,99,112,117,105,110,102,111,0);
          let orangedownarrow4 = String.fromCharCode(115,99,97,108,101,102,97,99,116,111,114,115,95,121,95,54,0);
         libyoga2 = orangedownarrow4.length > 5;
         ticki >>= Math.min(5, Math.abs(3 % (Math.max(7, ticki))));
         shielddonef = `${ticki}`;
         orangedownarrow4 = `${(shielddonef == String.fromCharCode(102,0) ? ticki : shielddonef.length)}`;
       let target1 = String.fromCharCode(110,95,56,55,95,101,115,112,111,110,100,101,114,0);
      privilegeV *= whitef.length;
            onManualPause(true);

   while (2.67 > (scoreF.size - thumbnailI) || 2.8 > (2.67 - thumbnailI)) {
      thumbnailI *= animationw.length * parseInt(`${stationN}`);
      break;
   }
   while (yellowvideolivep) {
       let type_zi = String.fromCharCode(116,101,109,112,108,97,116,101,95,51,95,56,49,0);
       let stringF = 0;
      if (type_zi.endsWith(`${stringF}`)) {
         stringF /= Math.max(3, 1 | stringF);
      }
         stringF <<= Math.min(3, Math.abs(stringF));
         stringF %= Math.max(3, stringF - type_zi.length);
          let casti = true;
         type_zi = "1";
         casti = casti || casti;
       let countdownA: Map<any, any> = new Map([[String.fromCharCode(103,95,50,49,95,97,110,115,105,0),245], [String.fromCharCode(99,111,101,102,102,95,120,95,53,48,0),918], [String.fromCharCode(115,99,114,111,108,108,105,110,103,95,104,95,51,48,0),790]]);
       let orangetickF: Map<any, any> = new Map([[String.fromCharCode(119,95,53,57,95,110,116,112,0),481], [String.fromCharCode(119,95,53,54,95,117,110,114,101,97,100,0),62], [String.fromCharCode(98,105,110,100,95,114,95,51,52,0),372]]);
          let libfbj: Map<any, any> = new Map([[String.fromCharCode(101,115,116,114,111,121,95,101,95,52,53,0),233], [String.fromCharCode(105,100,99,116,95,56,95,51,54,0),116], [String.fromCharCode(122,95,50,51,95,105,110,99,108,117,100,105,110,103,0),200]]);
          let rewardB: Map<any, any> = new Map([[String.fromCharCode(114,101,103,105,115,116,101,114,115,95,56,95,57,53,0),507], [String.fromCharCode(118,97,114,105,110,116,95,53,95,49,48,0),795]]);
          let tumbnailh = String.fromCharCode(106,95,55,49,95,111,112,117,115,101,110,99,0);
         type_zi += `${tumbnailh.length - rewardB.size}`;
         libfbj.set(`${libfbj.size}`, 1);
         rewardB = new Map([[`${libfbj.size}`, 2]]);
      privilegeV += 1 | stringF;
      break;
   }
      thumbnailI *= detaila.length;
            setShowAdOverlay(true);

      qaagj >>= Math.min(3, Math.abs(2 >> (Math.min(4, Math.abs(qaagj)))));
      libjsinspector5 = 16.88 < privilegeV && !yellowvideolivep;
   let cricketb = scoreF.size <= 6051620;
   do {
      scoreF.set(`${stationN}`, qaagj + 2);
      if (cricketb) {
         break;
      }
   } while (cricketb && ((privilegeV / (Math.max(2, scoreF.size))) >= 3.10 && 2 >= (scoreF.size % 4)));
            return;

       let librrcU: Array<any> = [74, 790, 23];
       let baseQ = String.fromCharCode(119,95,50,48,95,118,97,99,97,110,116,0);
       let watchU = String.fromCharCode(115,111,108,97,110,97,95,53,95,51,0);
      let formw = librrcU.length <= 7081502;
      do {
         librrcU = [librrcU.length];
         if (formw) {
            break;
         }
      } while (((5 * watchU.length) >= 3 && 2 >= (librrcU.length * 5)) && formw);
      while ((2 ^ librrcU.length) >= 3 || 3 >= (librrcU.length ^ 2)) {
         baseQ = `${librrcU.length & watchU.length}`;
         break;
      }
          let z_count8 = true;
         baseQ = `${librrcU.length << (Math.min(Math.abs(2), 2))}`;
         z_count8 = !z_count8;
          let crossu = 5.0;
         watchU = `${1 + watchU.length}`;
         crossu += 3 / (Math.max(3, parseInt(`${crossu}`)));
      let libfileX = 8993887 >= baseQ.length;
      do {
         baseQ += `${baseQ.length}`;
         if (libfileX) {
            break;
         }
      } while ((4 >= (librrcU.length | 5) && (librrcU.length | baseQ.length) >= 5) && libfileX);
         baseQ += `${baseQ.length}`;
         baseQ = "3";
      for (let i = 0; i < 3; i++) {
         librrcU = [2 << (Math.min(3, watchU.length))];
      }
      for (let p = 0; p < 1; p++) {
         watchU += "3";
      }
      privilegeV /= Math.max((String.fromCharCode(108,0) == detaila ? detaila.length : parseInt(`${stationN}`)), 4);
   let sourcez = animationw == String.fromCharCode(121,97,56,55,48,0);
   do {
      animationw = "2";
      if (sourcez) {
         break;
      }
   } while (sourcez && ((animationw.length + thumbnailI) <= 3.10 && (5 + parseInt(`${thumbnailI}`)) <= 2));
   let appleq = qaagj >= 9218646;
   do {
       let areaX = String.fromCharCode(119,95,55,53,95,109,100,97,116,0);
       let tempnodataX = 3.0;
      for (let f = 0; f < 3; f++) {
         tempnodataX -= parseFloat(`${3 - areaX.length}`);
      }
          let imageactionliveT = String.fromCharCode(102,95,54,52,95,101,110,100,97,0);
          let confirmationi: Array<any> = [479, 144];
          let iconqqg = String.fromCharCode(108,95,49,55,95,108,105,98,106,112,101,103,116,117,114,98,111,0);
         tempnodataX += parseFloat(`${1}`);
         imageactionliveT = `${iconqqg.length}`;
         confirmationi = [iconqqg.length + imageactionliveT.length];
      for (let e = 0; e < 2; e++) {
         tempnodataX -= parseFloat(`${2 + areaX.length}`);
      }
      if (areaX.length < 4) {
         areaX = "1";
      }
         tempnodataX += parseFloat(`${3}`);
         tempnodataX *= parseFloat(`${areaX.length ^ 3}`);
      qaagj <<= Math.min(Math.abs(2), 2);
      if (appleq) {
         break;
      }
   } while ((qaagj >= 5) && appleq);
        }

        const url = currentVod?.ads_url.includes(GreyPromotionGraphicsEwarded.privatechatbgPingSmallorangema([121,101,101,97,17],0x11,false)) ? currentVod?.ads_url : GreyPromotionGraphicsEwarded.privatechatbgPingSmallorangema([30,2,2,6,5,76,89,89,118],0x76,false) + currentVod?.actionUrl

        Linking.openURL(url);

   if (4 >= scoreF.size || 5 >= (scoreF.size + 4)) {
      libjsinspector5 = dialogt.length <= 63;
   }
   if ((privilegeV * 2.22) <= 5.74) {
       let animationww = String.fromCharCode(119,109,97,118,111,105,99,101,95,56,95,55,55,0);
       let telemetryN = 4.0;
       let showlessB = 3;
       let airbnbstarR = 3.0;
       let libswresample_ = false;
      while (5 == animationww.length) {
         animationww = `${3 | animationww.length}`;
         break;
      }
      let shareblack3 = 7588347 <= showlessB;
      do {
         showlessB >>= Math.min(3, Math.abs(parseInt(`${telemetryN}`) >> (Math.min(3, Math.abs(1)))));
         if (shareblack3) {
            break;
         }
      } while ((showlessB < telemetryN) && shareblack3);
         animationww += "3";
      for (let g = 0; g < 1; g++) {
         libswresample_ = 56.67 > airbnbstarR && !libswresample_;
      }
       let floaterv = String.fromCharCode(100,110,115,110,97,109,101,95,118,95,57,53,0);
       let lessL = String.fromCharCode(116,95,51,51,95,97,99,116,117,97,108,105,122,97,116,105,111,110,0);
         showlessB *= 3;
      for (let v = 0; v < 2; v++) {
          let armvaV: Map<any, any> = new Map([[String.fromCharCode(102,95,52,51,95,105,110,105,116,105,97,108,105,122,105,110,103,0),String.fromCharCode(97,116,111,109,95,105,95,52,54,0)], [String.fromCharCode(113,95,56,54,95,114,116,109,112,112,107,116,0),String.fromCharCode(111,119,110,101,114,95,99,95,55,54,0)]]);
          let submitW = 5.0;
         telemetryN *= animationww.length * 2;
         armvaV.set(`${submitW}`, 1);
         submitW -= parseFloat(`${3 + parseInt(`${submitW}`)}`);
      }
      for (let s = 0; s < 3; s++) {
         libswresample_ = showlessB == 79 && 79 == floaterv.length;
      }
      if ((telemetryN - 3.28) == 4.85 || 1.26 == (telemetryN - 3.28)) {
         animationww = `${lessL.length % 1}`;
      }
         animationww = `${(showlessB ^ (libswresample_ ? 4 : 2))}`;
         showlessB <<= Math.min(Math.abs(1), 2);
      if (4 == (showlessB / (Math.max(2, lessL.length))) && (4 / (Math.max(1, lessL.length))) == 1) {
         showlessB += (floaterv == String.fromCharCode(52,0) ? floaterv.length : showlessB);
      }
      for (let x = 0; x < 3; x++) {
          let roomp = String.fromCharCode(110,111,115,99,97,108,101,95,111,95,56,57,0);
          let internetX = String.fromCharCode(114,95,56,57,95,118,101,114,98,111,115,101,0);
          let disconnected9 = 1.0;
          let subtextC = 2.0;
         showlessB ^= parseInt(`${telemetryN}`);
         roomp += `${(roomp == String.fromCharCode(118,0) ? parseInt(`${disconnected9}`) : roomp.length)}`;
         internetX = `${roomp.length ^ 3}`;
         disconnected9 -= parseInt(`${subtextC}`);
         subtextC *= parseFloat(`${parseInt(`${disconnected9}`) << (Math.min(Math.abs(3), 5))}`);
      }
         airbnbstarR /= Math.max(5, (parseFloat(`${String.fromCharCode(115,0) == floaterv ? floaterv.length : (libswresample_ ? 1 : 1)}`)));
         airbnbstarR += parseFloat(`${parseInt(`${telemetryN}`)}`);
      detaila += `${(scoreF.size / (Math.max(5, (libswresample_ ? 5 : 3))))}`;
   }
      scoreF.set(`${iconeye0}`, scoreF.size);

        yys_giftbutton_footballtrophy.watchAnytimeAdsClicksAnalytics({
            ads_slot_id: currentVod.ads_slot_id,
            ads_id: currentVod.ads_id,
            ads_title: currentVod.ads_event_title,
            ads_name: currentVod.ads_name,
        });
    }

    const [isShowAdOverlay, setShowAdOverlay] = useState(false);
    const onCloseAdOverlay = () => {
       let sentryg = String.fromCharCode(98,115,119,97,112,100,115,112,95,108,95,54,53,0);
    let tooltipsX: Array<any> = [456, 783, 240];
    let disconnectedlogoZ = 5.0;
    let cornershoot2 = 5.0;
    let privatechatbg7: Map<any, any> = new Map([[String.fromCharCode(104,97,110,100,111,102,102,95,56,95,54,48,0),427], [String.fromCharCode(102,95,50,48,95,117,116,99,116,105,109,101,0),535], [String.fromCharCode(97,100,116,115,95,101,95,50,55,0),802]]);
    let predictionbuttonN = 0.0;
    let footballfiledlayout8 = String.fromCharCode(107,95,56,95,98,117,110,100,108,101,115,0);
    let zhuboM = 2.0;
    let backb = String.fromCharCode(101,100,103,101,115,95,103,95,50,54,0);
    let telemetryh = 3.0;
    let rightW = String.fromCharCode(108,95,49,49,95,99,108,103,101,116,0);
    let iconarrowleftA = String.fromCharCode(117,110,109,97,110,97,103,101,100,95,103,95,57,56,0);
    let issubH = 3;
    let index6: Array<any> = [100, 193, 589];
    let login7: Array<any> = [String.fromCharCode(102,95,49,48,48,95,108,105,98,99,101,108,116,0), String.fromCharCode(116,95,55,56,95,115,119,102,104,97,115,104,0)];
    let bggradientN = String.fromCharCode(105,110,118,97,108,105,100,97,116,101,95,109,95,51,57,0);
   if ((4.10 * cornershoot2) >= 2.33) {
       let libjsinspectorJ = false;
       let chatbotphotop = 4.0;
       let countryX = String.fromCharCode(116,95,54,48,95,97,117,116,111,114,101,102,114,101,115,104,0);
          let related1 = String.fromCharCode(102,105,103,104,116,101,114,115,95,56,95,56,49,0);
         libjsinspectorJ = !libjsinspectorJ || related1.length < 90;
      let awayh = String.fromCharCode(122,48,102,51,0) == countryX;
      do {
         countryX += `${countryX.length}`;
         if (awayh) {
            break;
         }
      } while ((5 >= (2 << (Math.min(3, countryX.length)))) && awayh);
      if (2.100 < (4.90 * chatbotphotop) || !libjsinspectorJ) {
         libjsinspectorJ = chatbotphotop >= 89.34;
      }
          let iconarrowrightorange8 = String.fromCharCode(118,101,108,111,99,105,116,121,95,102,95,57,49,0);
          let pcopy_src = String.fromCharCode(110,111,110,110,111,114,109,97,116,105,118,101,95,49,95,53,51,0);
         libjsinspectorJ = chatbotphotop == 60.71;
         iconarrowrightorange8 += `${(String.fromCharCode(75,0) == pcopy_src ? iconarrowrightorange8.length : pcopy_src.length)}`;
       let bgvipxvodr: Array<any> = [922, 481];
       let audienceq: Array<any> = [671, 581];
         libjsinspectorJ = bgvipxvodr.length > 53;
          let goalk = 4.0;
          let awayiconc = 4.0;
         bgvipxvodr.push(3);
         goalk -= parseFloat(`${2}`);
         awayiconc -= 3;
         libjsinspectorJ = chatbotphotop > 94.79;
      for (let a = 0; a < 1; a++) {
          let libreanimatedM: Map<any, any> = new Map([[String.fromCharCode(121,95,52,95,120,97,109,112,108,101,0),8], [String.fromCharCode(114,95,49,52,95,97,116,116,114,105,98,117,116,101,0),268]]);
          let privatechatbgD = true;
          let cancel0 = String.fromCharCode(104,95,48,95,115,99,114,101,101,110,115,104,97,114,101,0);
         countryX += `${countryX.length | libreanimatedM.size}`;
         libreanimatedM = new Map([[`${privatechatbgD}`, ((privatechatbgD ? 3 : 1) | cancel0.length)]]);
         cancel0 = `${(1 & (privatechatbgD ? 2 : 2))}`;
      }
      cornershoot2 /= Math.max(3, 1);
   }
       let iconfeedbackI: Array<any> = [880, 482];
       let about2: Map<any, any> = new Map([[String.fromCharCode(122,95,53,54,95,115,110,105,112,112,101,116,0),854], [String.fromCharCode(115,95,53,53,95,100,101,99,105,109,97,108,115,0),815], [String.fromCharCode(106,95,55,56,95,98,108,97,110,107,0),625]]);
      for (let c = 0; c < 2; c++) {
         iconfeedbackI.push(about2.size);
      }
      if (Array.from(about2.values()).includes(iconfeedbackI.length)) {
          let owngoalW = true;
          let ynewarchdefaultsh = 2;
          let iconmegaphoneY = false;
         about2.set(`${ynewarchdefaultsh}`, ynewarchdefaultsh);
         owngoalW = (!iconmegaphoneY ? !owngoalW : iconmegaphoneY);
      }
      for (let f = 0; f < 3; f++) {
          let annerH = 2.0;
          let rncoreR = String.fromCharCode(103,95,57,51,95,99,107,112,116,0);
          let commons = String.fromCharCode(112,105,99,107,95,108,95,52,49,0);
          let gestureU: Map<any, any> = new Map([[String.fromCharCode(112,111,112,117,108,97,114,95,108,95,57,52,0),175], [String.fromCharCode(101,95,56,48,95,115,101,116,105,0),302]]);
          let modelsY = true;
         about2 = new Map([[`${gestureU.size}`, 2]]);
         annerH -= parseFloat(`${commons.length}`);
         rncoreR = `${commons.length}`;
         gestureU.set(`${modelsY}`, 1 >> (Math.min(4, commons.length)));
      }
         about2.set(`${iconfeedbackI.length}`, about2.size << (Math.min(iconfeedbackI.length, 2)));
       let overn = String.fromCharCode(115,95,53,95,120,112,116,97,98,108,101,0);
       let privatechatbg_ = String.fromCharCode(97,110,100,108,101,95,48,95,53,57,0);
      if (4 < (privatechatbg_.length << (Math.min(Math.abs(2), 2))) || 1 < (privatechatbg_.length << (Math.min(Math.abs(2), 4)))) {
         about2.set(privatechatbg_, overn.length);
      }
      disconnectedlogoZ -= parseFloat(`${footballfiledlayout8.length}`);
       let libfbj = String.fromCharCode(105,110,116,101,114,97,99,116,105,118,101,108,121,95,121,95,56,54,0);
       let exampleimageo = 5;
          let pointe = 3.0;
          let basketballmatchdetailbgG: Array<any> = [118, 631, 303];
         exampleimageo ^= (String.fromCharCode(73,0) == libfbj ? basketballmatchdetailbgG.length : libfbj.length);
         pointe *= 3 + parseInt(`${pointe}`);
         basketballmatchdetailbgG = [3 * parseInt(`${pointe}`)];
       let mapbufferI: Map<any, any> = new Map([[String.fromCharCode(104,95,55,51,95,110,105,108,0),755], [String.fromCharCode(101,95,49,50,95,111,112,116,105,111,110,97,108,108,121,0),955]]);
       let uimanager1: Map<any, any> = new Map([[String.fromCharCode(99,101,114,116,95,103,95,53,51,0),String.fromCharCode(104,95,49,56,95,109,101,116,97,115,111,117,110,100,0)], [String.fromCharCode(115,99,97,110,105,110,100,101,120,95,114,95,53,48,0),String.fromCharCode(104,101,118,99,100,115,112,95,57,95,57,50,0)], [String.fromCharCode(110,101,105,103,104,98,111,114,105,110,103,95,50,95,52,50,0),String.fromCharCode(103,101,110,104,95,48,95,51,50,0)]]);
      while ((libfbj.length ^ 5) >= 1 && 2 >= (5 ^ libfbj.length)) {
         mapbufferI.set(libfbj, libfbj.length % 1);
         break;
      }
         uimanager1.set(`${libfbj}`, 3);
       let download7 = 2.0;
         uimanager1.set(`${exampleimageo}`, uimanager1.size);
      footballfiledlayout8 += `${libfbj.length}`;
      disconnectedlogoZ *= parseFloat(`${1}`);
   if (2.43 > (zhuboM - parseFloat(`${backb.length}`)) && (zhuboM - parseFloat(`${backb.length}`)) > 2.43) {
      backb = `${parseInt(`${zhuboM}`) ^ parseInt(`${telemetryh}`)}`;
   }
       let mbjscommonA = 4.0;
          let bufferT = 3.0;
         mbjscommonA *= parseInt(`${bufferT}`);
         mbjscommonA += parseInt(`${mbjscommonA}`);
         mbjscommonA += 3 % (Math.max(5, parseInt(`${mbjscommonA}`)));
      footballfiledlayout8 = `${parseInt(`${disconnectedlogoZ}`)}`;
      tooltipsX.push(3);
      backb = "1";
      sentryg += "3";
   if (backb.length == 1) {
       let rightD = String.fromCharCode(116,95,49,53,95,114,97,103,103,97,98,108,101,0);
      let vipsportW = String.fromCharCode(55,95,53,102,102,54,51,55,116,112,0) == rightD;
      do {
         rightD = `${rightD.length}`;
         if (vipsportW) {
            break;
         }
      } while (vipsportW && (rightD.length <= rightD.length));
      let watchZ = rightD.length >= 8340415;
      do {
         rightD = `${(rightD == String.fromCharCode(75,0) ? rightD.length : rightD.length)}`;
         if (watchZ) {
            break;
         }
      } while (watchZ && (rightD != String.fromCharCode(66,0)));
         rightD = `${rightD.length << (Math.min(Math.abs(1), 4))}`;
      zhuboM -= parseFloat(`${2 ^ parseInt(`${disconnectedlogoZ}`)}`);
   }
      tooltipsX = [3];
      footballfiledlayout8 += `${parseInt(`${predictionbuttonN}`) + 1}`;

        onManualPause(true);

      rightW = `${parseInt(`${telemetryh}`) << (Math.min(tooltipsX.length, 2))}`;
       let calendarx = true;
       let mbnative7 = 1.0;
       let optionsi = 3.0;
      if (3.62 == mbnative7) {
         calendarx = 70.91 < mbnative7 || !calendarx;
      }
       let sellR = 2.0;
      if (sellR <= 3.26) {
          let showless6 = String.fromCharCode(97,110,97,108,111,103,95,119,95,53,48,0);
          let notificationfillemptyG = 0;
          let unreadL: Array<any> = [436, 259, 784];
         sellR += parseInt(`${sellR}`);
         showless6 += "3";
         notificationfillemptyG %= Math.max(5, showless6.length | unreadL.length);
         unreadL.push(2 ^ notificationfillemptyG);
      }
      if (4.86 == (4.18 * mbnative7)) {
         mbnative7 -= parseInt(`${mbnative7}`) / 3;
      }
          let bannerD = String.fromCharCode(120,95,51,48,95,108,105,98,97,118,99,111,100,101,99,0);
         sellR += (parseInt(`${sellR}`) << (Math.min(1, Math.abs((calendarx ? 5 : 3)))));
         bannerD = `${(String.fromCharCode(104,0) == bannerD ? bannerD.length : bannerD.length)}`;
          let arrowrightwithtaild = 1.0;
          let iconarrowleftS = String.fromCharCode(102,95,51,51,95,120,112,117,98,0);
          let ewardedZ: Map<any, any> = new Map([[String.fromCharCode(110,95,57,52,95,99,111,108,108,101,99,116,101,100,0),true ], [String.fromCharCode(117,95,57,53,95,115,104,97,114,101,103,114,111,117,112,0),false ]]);
         calendarx = !calendarx;
         arrowrightwithtaild += ewardedZ.size;
         iconarrowleftS = `${(iconarrowleftS == String.fromCharCode(98,0) ? ewardedZ.size : iconarrowleftS.length)}`;
       let constants5 = String.fromCharCode(121,111,103,97,95,106,95,49,52,0);
       let handlerM = String.fromCharCode(105,95,56,57,95,104,97,118,105,110,103,0);
       let countdown6 = 4;
         optionsi -= constants5.length;
      telemetryh *= 3 >> (Math.min(2, tooltipsX.length));
       let libswscalep: Array<any> = [557, 846];
       let whitetickp: Array<any> = [254, 603, 941];
       let libfile8: Array<any> = [947, 745];
      while ((4 ^ libfile8.length) < 3 || 2 < (4 ^ whitetickp.length)) {
         whitetickp = [1];
         break;
      }
      while ((whitetickp.length << (Math.min(Math.abs(2), 4))) < 4) {
          let iconbelln = String.fromCharCode(110,95,53,54,95,100,113,117,111,116,101,0);
         whitetickp.push(libswscalep.length & 2);
         iconbelln += `${iconbelln.length}`;
         break;
      }
      while (!whitetickp.includes(libfile8.length)) {
         libfile8 = [libfile8.length + 1];
         break;
      }
         libswscalep = [libswscalep.length];
       let mbsplashP = false;
      if ((libswscalep.length / (Math.max(4, 5))) > 4 || !mbsplashP) {
          let heartA = true;
         libswscalep = [(2 << (Math.min(1, Math.abs((heartA ? 3 : 2)))))];
      }
      if (!mbsplashP && (2 >> (Math.min(2, whitetickp.length))) == 4) {
         mbsplashP = libfile8.includes(mbsplashP);
      }
          let privatechatbg9 = String.fromCharCode(99,95,55,53,95,117,110,115,105,103,110,101,100,0);
         libfile8 = [(libswscalep.length - (mbsplashP ? 2 : 1))];
         privatechatbg9 = `${privatechatbg9.length}`;
      let show6 = 6845553 >= libfile8.length;
      do {
          let minimizez = 5.0;
         libfile8.push(1 ^ libswscalep.length);
         minimizez -= parseFloat(`${parseInt(`${minimizez}`) % 1}`);
         if (show6) {
            break;
         }
      } while ((libswscalep.includes(libfile8.length)) && show6);
      rightW += `${privatechatbg7.size << (Math.min(Math.abs(2), 1))}`;
   for (let b = 0; b < 2; b++) {
      telemetryh *= rightW.length & 3;
   }
      issubH >>= Math.min(footballfiledlayout8.length, 2);
      telemetryh += footballfiledlayout8.length;
      privatechatbg7 = new Map([[iconarrowleftA, 2 | sentryg.length]]);
      telemetryh /= Math.max(3, parseInt(`${cornershoot2}`) / (Math.max(privatechatbg7.size, 5)));
      tooltipsX.push(index6.length);
       let bottomr: Array<any> = [107, 574, 864];
       let turndownn: Array<any> = [852, 757];
         turndownn.push(bottomr.length);
       let pauseK = 1;
       let inouttargetyellowa = 4;
         inouttargetyellowa ^= 3;
      while ((pauseK + 5) < 1) {
         pauseK >>= Math.min(Math.abs(bottomr.length / 1), 5);
         break;
      }
      for (let l = 0; l < 3; l++) {
         turndownn.push(pauseK);
      }
      for (let e = 0; e < 2; e++) {
          let greyd = String.fromCharCode(119,95,55,51,95,110,101,103,97,116,101,0);
          let condensed0: Map<any, any> = new Map([[String.fromCharCode(105,110,115,116,97,110,116,95,112,95,53,54,0),915], [String.fromCharCode(109,115,103,95,100,95,53,53,0),297], [String.fromCharCode(119,101,98,109,100,101,99,95,117,95,52,56,0),777]]);
          let predictionbuttonG = String.fromCharCode(100,95,57,51,95,112,103,115,122,0);
         turndownn.push(3 % (Math.max(pauseK, 8)));
         greyd += `${condensed0.size / (Math.max(greyd.length, 2))}`;
         condensed0.set(greyd, predictionbuttonG.length | greyd.length);
         predictionbuttonG += `${2 << (Math.min(5, greyd.length))}`;
      }
      privatechatbg7.set(`${disconnectedlogoZ}`, parseInt(`${disconnectedlogoZ}`));
   if ((sentryg.length - parseInt(`${predictionbuttonN}`)) == 2 || (predictionbuttonN - sentryg.length) == 4.44) {
       let gifgoalG: Array<any> = [624, 704];
       let modelsI = 0.0;
       let sendc = 4.0;
      for (let z = 0; z < 1; z++) {
          let statsnomoredata9 = 4.0;
          let turnP = 0.0;
          let watchK = String.fromCharCode(111,95,52,54,95,99,97,110,0);
          let searchx: Map<any, any> = new Map([[String.fromCharCode(121,95,54,54,95,100,114,105,118,101,114,0),366], [String.fromCharCode(103,101,116,111,112,116,95,53,95,57,48,0),30], [String.fromCharCode(97,117,100,105,111,100,115,112,95,51,95,52,0),949]]);
          let c_countO = 0.0;
         modelsI += parseFloat(`${parseInt(`${turnP}`) % 3}`);
         statsnomoredata9 -= parseFloat(`${1 << (Math.min(4, Math.abs(searchx.size)))}`);
         turnP *= (watchK == String.fromCharCode(57,0) ? watchK.length : searchx.size);
         c_countO += searchx.size | 3;
      }
      if (2.15 >= (3.6 / (Math.max(2, sendc))) && (sendc / 3.6) >= 5.4) {
          let weiboA: Map<any, any> = new Map([[String.fromCharCode(100,97,116,97,100,105,114,95,103,95,52,57,0),false ], [String.fromCharCode(97,95,54,53,95,116,101,115,115,101,108,97,116,111,114,0),false ], [String.fromCharCode(105,110,116,114,97,120,109,98,121,95,98,95,54,53,0),true ]]);
          let dragcloses = String.fromCharCode(111,95,52,49,95,109,100,104,100,0);
          let editZ: Map<any, any> = new Map([[String.fromCharCode(102,111,110,116,115,95,55,95,52,0),String.fromCharCode(115,95,51,50,95,111,110,116,97,99,116,0)], [String.fromCharCode(100,116,115,95,51,95,52,53,0),String.fromCharCode(120,95,52,56,95,115,117,98,109,111,100,101,108,0)]]);
          let valuesl: Map<any, any> = new Map([[String.fromCharCode(117,110,105,110,115,116,97,108,108,95,118,95,49,53,0),257], [String.fromCharCode(97,108,115,97,95,116,95,54,51,0),75]]);
         modelsI -= parseFloat(`${parseInt(`${modelsI}`) << (Math.min(Math.abs(editZ.size), 3))}`);
         weiboA = new Map([[`${valuesl.size}`, valuesl.size]]);
         dragcloses += `${1 & dragcloses.length}`;
         editZ.set(dragcloses, weiboA.size);
      }
      let abouto = modelsI >= 5596395.0;
      do {
         modelsI *= parseFloat(`${2}`);
         if (abouto) {
            break;
         }
      } while ((1.1 == (2.57 + modelsI) && (parseInt(`${modelsI}`) + gifgoalG.length) == 1) && abouto);
          let dragcloseW = String.fromCharCode(116,95,56,49,95,105,110,116,0);
          let typingloadingz = String.fromCharCode(112,108,97,121,95,112,95,54,54,0);
          let bellremindery: Map<any, any> = new Map([[String.fromCharCode(115,95,51,95,103,114,111,117,112,110,97,109,101,115,0),679], [String.fromCharCode(122,95,50,49,95,112,111,115,116,0),827], [String.fromCharCode(120,95,57,53,95,118,105,115,105,98,108,101,0),873]]);
         modelsI *= parseFloat(`${gifgoalG.length * 2}`);
         dragcloseW = `${bellremindery.size / (Math.max(8, dragcloseW.length))}`;
         typingloadingz = `${2 - dragcloseW.length}`;
         bellremindery.set(typingloadingz, bellremindery.size / (Math.max(typingloadingz.length, 2)));
      let homeicon7 = sendc <= 7295062.0;
      do {
         sendc *= 2 - parseInt(`${modelsI}`);
         if (homeicon7) {
            break;
         }
      } while (homeicon7 && (1 < (parseInt(`${sendc}`) + gifgoalG.length) || 2.55 < (sendc + 4.4)));
      let videoO = 9705010.0 >= sendc;
      do {
         sendc /= Math.max(gifgoalG.length & 2, 5);
         if (videoO) {
            break;
         }
      } while (videoO && (1.82 < sendc));
          let greyarrowupK = 3.0;
          let circlel = 0;
          let typesw = String.fromCharCode(104,95,51,57,95,100,114,97,119,105,110,103,0);
         modelsI -= parseFloat(`${circlel % (Math.max(2, typesw.length))}`);
         greyarrowupK -= parseFloat(`${1}`);
         circlel /= Math.max(parseInt(`${greyarrowupK}`), 2);
          let predictionlossL = 1;
          let closeC = true;
         sendc -= parseInt(`${modelsI}`) ^ 3;
         predictionlossL &= predictionlossL;
         closeC = predictionlossL <= 51;
      if ((sendc / 1.95) > 4.45) {
          let mergerj = String.fromCharCode(122,95,51,50,95,108,111,110,103,116,101,114,109,0);
          let orangetickV = 2.0;
          let libswscale3 = String.fromCharCode(119,95,54,54,95,101,113,117,105,108,105,98,114,105,117,109,0);
         gifgoalG.push(1);
         mergerj += `${(String.fromCharCode(114,0) == libswscale3 ? parseInt(`${orangetickV}`) : libswscale3.length)}`;
         orangetickV -= parseInt(`${orangetickV}`) - 1;
      }
      predictionbuttonN *= privatechatbg7.size;
   }
      zhuboM -= (parseFloat(`${String.fromCharCode(80,0) == footballfiledlayout8 ? footballfiledlayout8.length : issubH}`));
        

      rightW += `${parseInt(`${telemetryh}`) << (Math.min(2, Math.abs(parseInt(`${predictionbuttonN}`))))}`;
      footballfiledlayout8 += `${parseInt(`${predictionbuttonN}`) / (Math.max(backb.length, 6))}`;
      iconarrowleftA += `${rightW.length}`;
   for (let g = 0; g < 2; g++) {
      sentryg = `${(String.fromCharCode(85,0) == footballfiledlayout8 ? parseInt(`${zhuboM}`) : footballfiledlayout8.length)}`;
   }
      telemetryh /= Math.max(iconarrowleftA.length, 2);
   while (3.70 >= (zhuboM / 5.37) && 4.41 >= (disconnectedlogoZ - 5.37)) {
      zhuboM /= Math.max(parseFloat(`${parseInt(`${telemetryh}`)}`), 3);
      break;
   }
   while (1.96 > (disconnectedlogoZ / (Math.max(3, telemetryh)))) {
      disconnectedlogoZ *= parseFloat(`${1 + footballfiledlayout8.length}`);
      break;
   }
      issubH += login7.length;
       let philippinesQ = String.fromCharCode(115,104,111,114,116,101,114,95,101,95,54,54,0);
       let logink = String.fromCharCode(117,95,50,56,95,116,97,110,0);
      for (let s = 0; s < 2; s++) {
          let yellowredcardw = 0;
          let pause1 = String.fromCharCode(114,101,103,105,115,116,114,97,116,105,111,110,95,99,95,56,50,0);
          let yellowcirclebgU = false;
         logink += `${1 | pause1.length}`;
         yellowredcardw -= yellowredcardw;
         pause1 = `${2 * yellowredcardw}`;
      }
       let iconeyeH = String.fromCharCode(112,114,105,110,116,118,97,108,95,111,95,49,48,0);
       let fieldd = String.fromCharCode(112,95,57,57,95,104,101,118,99,112,114,101,100,0);
      while (logink == String.fromCharCode(86,0) || iconeyeH != String.fromCharCode(55,0)) {
         logink = `${3 ^ fieldd.length}`;
         break;
      }
      for (let i = 0; i < 2; i++) {
         philippinesQ = `${logink.length << (Math.min(Math.abs(2), 2))}`;
      }
         philippinesQ += `${3 - iconeyeH.length}`;
       let iconadslink2: Array<any> = [824, 19, 3];
      predictionbuttonN *= parseInt(`${telemetryh}`);
   let iconclosewhitebgG = 9193239.0 <= zhuboM;
   do {
      zhuboM *= (parseFloat(`${backb == String.fromCharCode(80,0) ? backb.length : parseInt(`${disconnectedlogoZ}`)}`));
      if (iconclosewhitebgG) {
         break;
      }
   } while ((1.50 == (2.8 + zhuboM) || 2.8 == (parseFloat(`${privatechatbg7.size}`) + zhuboM)) && iconclosewhitebgG);
       let mbnativeB = String.fromCharCode(113,95,49,48,95,100,101,97,99,116,105,118,97,116,105,111,110,0);
       let calendarC: Map<any, any> = new Map([[String.fromCharCode(102,95,57,50,95,110,117,108,108,115,0),String.fromCharCode(97,95,53,56,95,97,110,111,116,104,101,114,0)], [String.fromCharCode(117,110,98,105,110,100,95,105,95,49,54,0),String.fromCharCode(112,105,99,107,101,114,115,95,111,95,51,54,0)]]);
          let castingK = String.fromCharCode(116,95,53,57,95,101,99,104,111,0);
         mbnativeB += `${calendarC.size}`;
         castingK += `${castingK.length}`;
          let memberH = String.fromCharCode(112,101,114,112,105,120,101,108,95,104,95,50,51,0);
         calendarC.set(`${mbnativeB}`, (mbnativeB == String.fromCharCode(112,0) ? mbnativeB.length : calendarC.size));
         memberH += `${memberH.length}`;
         calendarC.set(mbnativeB, (mbnativeB == String.fromCharCode(97,0) ? mbnativeB.length : calendarC.size));
         calendarC = new Map([[`${calendarC.size}`, 3]]);
         calendarC.set(`${mbnativeB}`, calendarC.size * 2);
         calendarC.set(mbnativeB, (mbnativeB == String.fromCharCode(66,0) ? mbnativeB.length : calendarC.size));
      sentryg = `${parseInt(`${cornershoot2}`)}`;
   while (rightW.length > parseInt(`${telemetryh}`)) {
      rightW = "2";
      break;
   }
        setShowAdOverlay(false);
    };

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
                                            uri: GreyPromotionGraphicsEwarded.privatechatbgPingSmallorangema([-90,-70,-70,-66,-67,-12,-31,-31,-69,-66,-94,-95,-81,-86,-32,-71,-89,-91,-89,-93,-85,-86,-89,-81,-32,-95,-68,-87,-31,-71,-89,-91,-89,-66,-85,-86,-89,-81,-31,-85,-96,-31,-81,-31,-81,-8,-31,-98,-95,-91,13,103,-93,-95,-96,-111,-98,-89,-91,-81,-83,-90,-69,-111,-81,-68,-70,-32,-66,-96,-87,-50],0xCE,false), 
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
                                    {showIcon && (isPause ? <BlackPlaySvg /> : <PauseSvg />)}
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

                        <TouchableOpacity
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

            <BecomeVipOverlay
                setShowBecomeVIPOverlay={setShowAdOverlay}
                showBecomeVIPOverlay={isShowAdOverlay}
                isJustClose={true}
                selectedTab="common"
                onClose={onCloseAdOverlay}
            />
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
        padding: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    adsBtnText: {
        fontSize: 18,
        fontWeight: '900',
        color: '#000000'
    }
});