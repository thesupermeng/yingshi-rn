

class PredictionbannersharedIconrigh {
    static fullscreenminOverlayDefaultpro = (contents: [number], key: number, hasEmoji: boolean) => {
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
import PlayIcon from '@static/images/librrcWhiteanimationlive.svg';
import PauseIcon from '@static/images/refreshStringsLibjsi.svg';
import Video, { OnProgressData, wawaImage } from 'react-native-video';
import FastImage from '../common/wawa_iconarrowrightblack';
import { useNavigation, useTheme } from '@react-navigation/native';
import { useAppDispatch, useAppSelector } from '@hooks/wawa_root';
import { DOWNLOAD_WATCH_ANYTIME } from '@utility/wawa_iconpointscore';
import { playVod } from '@redux/actions/wawa_indicator';
import RNFetchBlob from 'rn-fetch-blob';
import { addIdToCache } from '../../../utils/wawa_notificationfillempty_models';
import { screenModel } from '@type/wawa_rules';
import wawa_dacccfaabfbcbadeebddcabacdffdbc_video from '../../../../Umeng/wawa_dacccfaabfbcbadeebddcabacdffdbc_video';

interface wawaAwayShow {
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

const videoBufferGif = require('@static/images/libjsijniprofilerRncore.gif')

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
}: wawaAwayShow) {
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
    const videoRef = useRef<wawaImage>(null);
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
       let libfbJ = true;
    let goallogoh = String.fromCharCode(116,95,51,50,95,115,99,114,111,108,108,105,110,103,0);
    let dependencyH: Map<any, any> = new Map([[String.fromCharCode(121,95,51,52,95,105,110,116,101,114,110,101,100,0),85], [String.fromCharCode(110,111,116,97,116,105,111,110,95,104,95,52,51,0),987]]);
    let castinga = String.fromCharCode(115,101,116,98,105,116,115,95,109,95,50,0);
    let iconclose2: Array<any> = [35, 182, 78];
    let description_uf = 3;
    let libavfilter2 = String.fromCharCode(101,95,51,57,95,116,101,109,112,0);
    let activej = false;
    let checkboxE = 3.0;
    let greyarrowupn = 3.0;
      libfbJ = !activej || libfbJ;
   let sheetj = 7984370 <= castinga.length;
   do {
       let circlep = 1.0;
       let muted9: Array<any> = [72, 779];
       let viewer0 = 1;
       let basketballplayerplaceholder8: Array<any> = [String.fromCharCode(111,95,53,53,95,109,97,116,101,114,105,97,108,0), String.fromCharCode(97,117,116,111,99,111,109,109,105,116,95,97,95,56,54,0)];
      if (basketballplayerplaceholder8.includes(viewer0)) {
          let libsentrye = 0.0;
          let renewe = 0.0;
          let iconlogoutL = String.fromCharCode(117,95,50,57,95,105,110,115,101,114,116,105,111,110,115,0);
         basketballplayerplaceholder8 = [viewer0 << (Math.min(Math.abs(2), 1))];
         libsentrye *= parseInt(`${libsentrye}`);
         renewe += parseFloat(`${parseInt(`${renewe}`) << (Math.min(Math.abs(1), 4))}`);
         iconlogoutL = `${parseInt(`${libsentrye}`) * 1}`;
      }
      let detailF = viewer0 <= 7466017;
      do {
          let chatroombackgroundP: Array<any> = [539, 211, 409];
          let iconrefreshI = 5;
          let auto_xuq: Array<any> = [119, 601];
         viewer0 ^= parseInt(`${circlep}`);
         chatroombackgroundP = [iconrefreshI % (Math.max(auto_xuq.length, 7))];
         iconrefreshI &= iconrefreshI;
         auto_xuq = [3 << (Math.min(3, chatroombackgroundP.length))];
         if (detailF) {
            break;
         }
      } while ((muted9.length >= 2) && detailF);
         basketballplayerplaceholder8 = [viewer0];
      while (1.75 > circlep) {
         basketballplayerplaceholder8.push(viewer0 + muted9.length);
         break;
      }
      for (let z = 0; z < 2; z++) {
          let episodesc = 4;
          let vipsportl = String.fromCharCode(97,101,99,95,107,95,52,51,0);
         circlep /= Math.max(3, viewer0);
         episodesc -= 3 * vipsportl.length;
         vipsportl += `${episodesc}`;
      }
         circlep += 1 % (Math.max(parseInt(`${circlep}`), 5));
      let libswscaleO = basketballplayerplaceholder8.length >= 6342466;
      do {
          let topicc = true;
         basketballplayerplaceholder8 = [2];
         topicc = !topicc;
         if (libswscaleO) {
            break;
         }
      } while (libswscaleO && (3 == basketballplayerplaceholder8.length));
      if ((circlep / 2.91) < 1.90 || (2.91 / (Math.max(6, circlep))) < 5.81) {
         circlep += basketballplayerplaceholder8.length - parseInt(`${circlep}`);
      }
         circlep /= Math.max(muted9.length / (Math.max(basketballplayerplaceholder8.length, 5)), 1);
         circlep *= muted9.length >> (Math.min(5, Math.abs(parseInt(`${circlep}`))));
      if (!basketballplayerplaceholder8.includes(viewer0)) {
          let trashM = String.fromCharCode(102,95,50,50,95,111,117,98,108,101,0);
          let pointo = 5.0;
          let predictionw = 1.0;
         viewer0 &= trashM.length;
         trashM = `${parseInt(`${predictionw}`) % (Math.max(6, parseInt(`${pointo}`)))}`;
         pointo -= parseFloat(`${parseInt(`${predictionw}`)}`);
      }
         muted9 = [viewer0 % 3];
      castinga = `${goallogoh.length}`;
      if (sheetj) {
         break;
      }
   } while (sheetj && (castinga.length < 2 || activej));
   if (4 <= (castinga.length + 1) || 5 <= (1 + castinga.length)) {
      dependencyH = new Map([[`${libfbJ}`, castinga.length]]);
   }
      iconclose2 = [description_uf % (Math.max(3, 6))];
   for (let k = 0; k < 2; k++) {
      dependencyH = new Map([[`${iconclose2.length}`, description_uf >> (Math.min(2, Math.abs(3)))]]);
   }
       let interstitialk: Array<any> = [624, 500];
       let checkboxN = String.fromCharCode(115,107,105,112,115,95,102,95,57,51,0);
       let weiboG = 4.0;
          let predictiondefaultG = true;
          let country6 = 5.0;
         checkboxN = `${parseInt(`${country6}`) * 2}`;
         predictiondefaultG = predictiondefaultG || predictiondefaultG;
         country6 += (parseFloat(`${(predictiondefaultG ? 5 : 5) ^ (predictiondefaultG ? 5 : 4)}`));
      let greytickQ = 8914237.0 <= weiboG;
      do {
         weiboG -= parseFloat(`${checkboxN.length ^ parseInt(`${weiboG}`)}`);
         if (greytickQ) {
            break;
         }
      } while (greytickQ && ((2 ^ interstitialk.length) < 3));
      while ((interstitialk.length + checkboxN.length) > 3 || 2 > (checkboxN.length + 3)) {
         checkboxN = `${parseInt(`${weiboG}`) << (Math.min(checkboxN.length, 5))}`;
         break;
      }
      while ((checkboxN.length - parseInt(`${weiboG}`)) < 3) {
          let unfillt = String.fromCharCode(113,95,50,53,95,97,100,118,97,110,99,101,109,101,110,116,0);
         checkboxN = `${(checkboxN == String.fromCharCode(81,0) ? interstitialk.length : checkboxN.length)}`;
         unfillt = `${unfillt.length | 1}`;
         break;
      }
       let plashJ = String.fromCharCode(103,95,53,95,101,110,99,105,114,99,108,101,100,0);
       let temperatureR = String.fromCharCode(102,108,116,117,105,110,116,95,109,95,55,55,0);
       let iconclosewhitewithbgT = String.fromCharCode(122,95,57,48,95,114,101,108,102,117,110,99,0);
       let homeiconG = String.fromCharCode(110,111,116,105,102,121,105,110,103,95,109,95,49,57,0);
         temperatureR = `${interstitialk.length << (Math.min(iconclosewhitewithbgT.length, 5))}`;
          let banners = 3.0;
         weiboG -= parseFloat(`${1}`);
         banners += parseFloat(`${parseInt(`${banners}`) | parseInt(`${banners}`)}`);
      for (let o = 0; o < 1; o++) {
         checkboxN += "1";
      }
      iconclose2 = [(2 / (Math.max(6, (libfbJ ? 1 : 2))))];
      libavfilter2 += `${2 | libavfilter2.length}`;
   while (libavfilter2 != String.fromCharCode(98,0)) {
      goallogoh = `${description_uf}`;
      break;
   }
   for (let e = 0; e < 2; e++) {
       let iconmegaphoneJ: Array<any> = [String.fromCharCode(104,95,56,55,95,99,104,97,110,103,101,0), String.fromCharCode(119,120,109,109,116,101,115,116,95,50,95,53,56,0)];
       let switch_8_T = true;
       let arrowselectdownb = 5.0;
       let c_position0 = String.fromCharCode(116,95,54,53,95,97,99,111,100,101,99,0);
         iconmegaphoneJ.push(2);
         iconmegaphoneJ = [c_position0.length & parseInt(`${arrowselectdownb}`)];
       let watchnowbgz = String.fromCharCode(103,95,54,55,95,100,101,115,112,105,108,108,0);
       let package_wwG = String.fromCharCode(120,95,50,57,95,103,97,112,0);
         watchnowbgz = `${(String.fromCharCode(97,0) == c_position0 ? parseInt(`${arrowselectdownb}`) : c_position0.length)}`;
         package_wwG += `${parseInt(`${arrowselectdownb}`) << (Math.min(2, Math.abs(3)))}`;
      let playercommonz = arrowselectdownb >= 5117233.0;
      do {
          let gesturec = String.fromCharCode(98,105,110,100,95,105,95,55,50,0);
          let bootsplashB = false;
          let stringsL = 3.0;
         arrowselectdownb -= (String.fromCharCode(89,0) == package_wwG ? package_wwG.length : (bootsplashB ? 4 : 5));
         gesturec += `${2 * parseInt(`${stringsL}`)}`;
         bootsplashB = 66.13 == stringsL;
         if (playercommonz) {
            break;
         }
      } while (playercommonz && (switch_8_T));
      while (4 == package_wwG.length) {
         switch_8_T = package_wwG == watchnowbgz;
         break;
      }
          let bgvipsport8 = 5;
          let black9 = String.fromCharCode(111,108,100,101,114,95,104,95,51,54,0);
          let downloading3: Array<any> = [String.fromCharCode(115,109,112,116,101,98,97,114,115,95,50,95,49,53,0), String.fromCharCode(100,101,99,111,114,97,116,105,111,110,95,55,95,55,49,0)];
         package_wwG = `${(String.fromCharCode(52,0) == black9 ? black9.length : iconmegaphoneJ.length)}`;
         bgvipsport8 ^= downloading3.length;
         downloading3 = [bgvipsport8];
          let tailV = String.fromCharCode(99,95,53,57,95,114,97,119,100,101,99,0);
         arrowselectdownb += 2 & tailV.length;
      if (3.35 <= arrowselectdownb) {
          let videovar8: Array<any> = [String.fromCharCode(111,95,50,54,95,109,105,100,115,0), String.fromCharCode(101,116,104,101,114,110,101,116,95,104,95,54,54,0), String.fromCharCode(115,95,55,51,95,97,116,116,97,99,107,0)];
          let detailz = false;
          let logoutf = String.fromCharCode(117,95,53,56,95,119,114,105,116,101,116,114,117,110,99,0);
         arrowselectdownb += watchnowbgz.length | 1;
         videovar8.push(logoutf.length);
         detailz = videovar8.length < 78;
         logoutf = `${logoutf.length * 1}`;
      }
         switch_8_T = (watchnowbgz.length - iconmegaphoneJ.length) < 98;
         iconmegaphoneJ.push(((switch_8_T ? 3 : 1) * parseInt(`${arrowselectdownb}`)));
      iconclose2 = [libavfilter2.length];
   }
   if (!libfbJ) {
       let logoq = 5.0;
       let arrowdownm: Array<any> = [29, 18];
       let selecto = 0;
       let giftbuttonD: Array<any> = [512, 455, 966];
       let foregroundP = String.fromCharCode(102,95,51,53,95,112,97,99,107,101,114,0);
       let temperaturej = false;
      let typingloadingZ = 8535931 <= selecto;
      do {
         selecto |= 2;
         if (typingloadingZ) {
            break;
         }
      } while ((4 <= selecto) && typingloadingZ);
         foregroundP = `${1 & arrowdownm.length}`;
      while (temperaturej || (giftbuttonD.length / 5) == 4) {
         temperaturej = giftbuttonD.includes(arrowdownm[0]);
         break;
      }
         temperaturej = 80 > foregroundP.length;
         temperaturej = giftbuttonD.length > 99 && 99 > selecto;
      if (!foregroundP.includes(`${temperaturej}`)) {
         temperaturej = (giftbuttonD.length / (Math.max(foregroundP.length, 9))) == 77;
      }
      if (selecto == giftbuttonD.length) {
          let mathD = String.fromCharCode(116,101,108,101,103,114,97,112,104,95,53,95,55,56,0);
          let rank8 = String.fromCharCode(118,95,56,48,95,112,114,101,99,111,109,112,117,116,101,0);
          let cornershootU = 2.0;
          let flyero = String.fromCharCode(98,105,116,114,101,118,95,114,95,49,48,0);
          let iconfeedbacku: Map<any, any> = new Map([[String.fromCharCode(115,99,105,105,95,104,95,56,49,0),270], [String.fromCharCode(120,112,116,97,98,108,101,95,100,95,48,0),271]]);
         giftbuttonD = [3];
         mathD = `${iconfeedbacku.size}`;
         rank8 += `${(String.fromCharCode(69,0) == mathD ? rank8.length : mathD.length)}`;
         cornershootU += parseFloat(`${2 / (Math.max(9, rank8.length))}`);
         flyero += `${parseInt(`${cornershootU}`) | 3}`;
         iconfeedbacku.set(`${cornershootU}`, parseInt(`${cornershootU}`));
      }
         selecto %= Math.max((foregroundP == String.fromCharCode(103,0) ? foregroundP.length : arrowdownm.length), 1);
      while ((selecto / (Math.max(logoq, 6))) <= 3.48 && 5 <= (selecto >> (Math.min(Math.abs(5), 1)))) {
         logoq += giftbuttonD.length;
         break;
      }
          let baseB = 1;
          let singaporeR = String.fromCharCode(118,95,55,53,95,98,114,97,110,100,0);
         temperaturej = (selecto * logoq) >= 68;
         baseB &= singaporeR.length;
         singaporeR += `${baseB}`;
      for (let a = 0; a < 1; a++) {
          let verticalf = 5.0;
          let logind = String.fromCharCode(119,101,98,109,101,110,99,95,115,95,49,50,0);
          let iconarrowrightwhiteM = true;
          let selectionp = true;
          let matchesL = String.fromCharCode(98,108,117,101,116,111,111,116,104,95,117,95,49,57,0);
         foregroundP = `${foregroundP.length}`;
         verticalf -= (parseFloat(`${(selectionp ? 5 : 2) / (Math.max(parseInt(`${verticalf}`), 8))}`));
         logind += "1";
         iconarrowrightwhiteM = logind.length <= 27;
         matchesL += `${logind.length - matchesL.length}`;
      }
      if (2 >= giftbuttonD.length || (giftbuttonD.length & 2) >= 1) {
         giftbuttonD = [arrowdownm.length * selecto];
      }
         giftbuttonD.push(2);
         temperaturej = !foregroundP.includes(`${logoq}`);
      libfbJ = giftbuttonD.includes(selecto);
   }
   for (let j = 0; j < 3; j++) {
       let traminir = 5;
       let rewarde = true;
       let playercommonm = 0.0;
       let videobufferloadingM = 2;
       let whitesmallticka: Array<any> = [747, 429, 451];
       let rewardC: Array<any> = [470, 689];
         videobufferloadingM |= videobufferloadingM / 1;
          let executorB: Map<any, any> = new Map([[String.fromCharCode(119,95,50,52,95,105,115,101,109,112,116,121,0),true ], [String.fromCharCode(97,95,49,52,95,112,114,101,100,105,99,116,105,111,110,0),true ]]);
          let assetsl = true;
         rewarde = (83 == ((assetsl ? executorB.size : 40) << (Math.min(Math.abs(executorB.size), 3))));
      if ((videobufferloadingM | rewardC.length) >= 1 && (1 | rewardC.length) >= 4) {
          let wifirouterW = true;
          let suggestionz = String.fromCharCode(115,95,54,49,95,118,111,119,101,108,0);
         videobufferloadingM /= Math.max(((wifirouterW ? 4 : 1) % (Math.max(3, rewardC.length))), 5);
         wifirouterW = String.fromCharCode(87,0) == suggestionz;
         suggestionz = "2";
      }
      let tooltipsf = rewarde ? !rewarde : rewarde;
      do {
         rewarde = 9 > whitesmallticka.length;
         if (tooltipsf) {
            break;
         }
      } while (((whitesmallticka.length & 5) < 5 && 5 < whitesmallticka.length) && tooltipsf);
       let cornershoot6 = 0.0;
       let iconclosewhitebg0 = 4.0;
         iconclosewhitebg0 -= (parseInt(`${iconclosewhitebg0}`) & (rewarde ? 4 : 1));
      while (!rewardC.includes(videobufferloadingM)) {
         videobufferloadingM += 1;
         break;
      }
         iconclosewhitebg0 -= traminir;
      while (whitesmallticka.length > 4) {
          let libjsinspectorK: Map<any, any> = new Map([[String.fromCharCode(98,108,111,99,107,105,101,95,48,95,51,51,0),497], [String.fromCharCode(99,95,50,55,95,108,111,99,97,116,105,111,110,0),532]]);
          let minimized = 0;
          let whitebellv = 3.0;
         whitesmallticka.push(parseInt(`${cornershoot6}`));
         libjsinspectorK = new Map([[`${libjsinspectorK.size}`, libjsinspectorK.size % (Math.max(3, 7))]]);
         minimized /= Math.max(minimized, 3);
         whitebellv *= 2 & minimized;
         break;
      }
      while (videobufferloadingM == rewardC.length) {
          let viewsb = String.fromCharCode(112,101,101,114,99,111,110,110,101,99,116,105,111,110,95,108,95,56,57,0);
          let shareC = String.fromCharCode(121,95,50,53,95,97,117,100,105,111,105,110,116,101,114,108,101,97,118,101,0);
         videobufferloadingM *= 2 / (Math.max(6, parseInt(`${cornershoot6}`)));
         viewsb = `${viewsb.length / (Math.max(3, shareC.length))}`;
         shareC += "2";
         break;
      }
         rewarde = rewardC.length >= 100 && rewarde;
      checkboxE -= parseFloat(`${2}`);
   }
      checkboxE -= parseFloat(`${1 % (Math.max(2, dependencyH.size))}`);
       let huaweiL = String.fromCharCode(98,95,50,51,95,110,111,116,0);
       let matchinactivei = String.fromCharCode(122,95,56,56,95,98,114,111,97,100,99,97,115,116,101,114,0);
       let whatsapp0: Map<any, any> = new Map([[String.fromCharCode(107,95,50,50,95,116,111,121,115,0),String.fromCharCode(102,95,49,57,95,104,113,100,110,100,0)], [String.fromCharCode(114,95,55,54,95,115,99,97,108,101,99,117,100,97,0),String.fromCharCode(97,100,100,114,105,110,102,111,95,49,95,52,54,0)], [String.fromCharCode(115,95,52,52,95,100,101,115,101,114,105,97,108,105,122,101,100,0),String.fromCharCode(115,95,49,95,100,110,115,108,97,98,101,108,0)]]);
       let chatroombackground7: Array<any> = [909, 24, 532];
       let arrowrightwithtailE: Array<any> = [533, 269];
         huaweiL = `${matchinactivei.length}`;
      for (let s = 0; s < 3; s++) {
         matchinactivei = `${matchinactivei.length << (Math.min(Math.abs(2), 3))}`;
      }
      for (let c = 0; c < 2; c++) {
         arrowrightwithtailE = [3];
      }
         whatsapp0 = new Map([[`${arrowrightwithtailE.length}`, 3 + matchinactivei.length]]);
       let nalyticsv: Array<any> = [String.fromCharCode(114,95,49,57,0), String.fromCharCode(114,95,57,50,95,100,114,105,118,101,114,115,0)];
       let formn: Array<any> = [197, 547];
          let flipperG = String.fromCharCode(115,95,50,49,95,99,97,110,99,101,108,108,101,100,0);
          let iconviewergifL = String.fromCharCode(99,95,51,95,115,99,97,108,101,102,97,99,116,111,114,115,0);
          let giftbuttonv: Array<any> = [633, 803];
         huaweiL += `${formn.length}`;
         flipperG += `${giftbuttonv.length ^ iconviewergifL.length}`;
         iconviewergifL = `${iconviewergifL.length}`;
         giftbuttonv.push(iconviewergifL.length & giftbuttonv.length);
      for (let g = 0; g < 1; g++) {
         arrowrightwithtailE = [arrowrightwithtailE.length];
      }
      for (let w = 0; w < 3; w++) {
          let predictionlossr = String.fromCharCode(114,95,55,49,95,97,114,114,97,121,0);
          let thailandw = true;
          let expandf = String.fromCharCode(104,97,110,100,111,102,102,95,106,95,57,53,0);
          let appsM = String.fromCharCode(107,95,50,54,95,110,111,116,101,0);
          let moduleW = String.fromCharCode(109,117,120,95,97,95,50,52,0);
         matchinactivei = `${nalyticsv.length}`;
         predictionlossr = `${appsM.length ^ 2}`;
         thailandw = (53 > ((!thailandw ? appsM.length : 53) / (Math.max(2, appsM.length))));
         expandf = `${expandf.length}`;
         moduleW += `${((thailandw ? 5 : 2))}`;
      }
      activej = greyarrowupn > 99.91 && huaweiL == String.fromCharCode(66,0);
   while (activej) {
       let backwardx = String.fromCharCode(102,95,51,48,95,100,111,117,98,108,101,0);
      while (backwardx.length < 1 && 1 < backwardx.length) {
         backwardx = `${(String.fromCharCode(104,0) == backwardx ? backwardx.length : backwardx.length)}`;
         break;
      }
      for (let x = 0; x < 3; x++) {
          let livenodatabgimgG = 3.0;
          let classesG = String.fromCharCode(118,95,53,95,107,110,111,99,107,111,117,116,0);
          let greytick4 = 0;
          let loading8 = 2.0;
         backwardx = `${1 + parseInt(`${loading8}`)}`;
         livenodatabgimgG *= parseFloat(`${classesG.length}`);
         classesG = `${classesG.length / (Math.max(8, greytick4))}`;
         greytick4 ^= 1 << (Math.min(2, Math.abs(greytick4)));
         loading8 /= Math.max(parseFloat(`${3}`), 4);
      }
      while (backwardx == backwardx) {
         backwardx = `${backwardx.length}`;
         break;
      }
      activej = 94.28 >= checkboxE;
      break;
   }
      checkboxE /= Math.max(5, parseFloat(`${1}`));
   while (5 == (5 - castinga.length) && (iconclose2.length - castinga.length) == 5) {
       let buttonj = String.fromCharCode(118,111,98,115,117,98,95,115,95,49,55,0);
      if (buttonj != String.fromCharCode(108,0) && buttonj != String.fromCharCode(115,0)) {
         buttonj += `${buttonj.length & buttonj.length}`;
      }
      while (buttonj.length <= 3) {
         buttonj = `${3 | buttonj.length}`;
         break;
      }
          let filel = 0.0;
         buttonj += `${parseInt(`${filel}`) % (Math.max(buttonj.length, 5))}`;
      iconclose2 = [castinga.length % (Math.max(1, 1))];
      break;
   }
      description_uf ^= iconclose2.length + description_uf;
   if (1.28 == (greyarrowupn * 4.82) && (5 >> (Math.min(4, goallogoh.length))) == 1) {
       let lang0 = String.fromCharCode(101,95,50,51,95,98,101,116,119,101,101,110,0);
       let libmapbufferjni8 = 4;
          let customE = 0.0;
          let baseV = 2;
         lang0 += `${3 - baseV}`;
         customE *= parseInt(`${customE}`);
         baseV /= Math.max(1 ^ parseInt(`${customE}`), 4);
         libmapbufferjni8 *= (lang0 == String.fromCharCode(70,0) ? libmapbufferjni8 : lang0.length);
      let iconwatch6 = libmapbufferjni8 <= 8788409;
      do {
         libmapbufferjni8 &= libmapbufferjni8;
         if (iconwatch6) {
            break;
         }
      } while (iconwatch6 && ((lang0.length | libmapbufferjni8) >= 2 && (lang0.length | libmapbufferjni8) >= 2));
          let small6 = 2.0;
          let executork: Map<any, any> = new Map([[String.fromCharCode(117,110,107,110,111,119,110,95,119,95,55,57,0),338], [String.fromCharCode(114,95,51,54,95,114,116,112,109,97,112,0),83]]);
          let descj: Array<any> = [586, 398];
         lang0 += `${2 + executork.size}`;
         small6 += parseFloat(`${1}`);
         executork = new Map([[`${descj.length}`, parseInt(`${small6}`)]]);
         descj = [3];
      while (4 == (libmapbufferjni8 << (Math.min(Math.abs(1), 4))) || (libmapbufferjni8 << (Math.min(Math.abs(1), 1))) == 3) {
          let hometeamfieldL: Array<any> = [595, 900, 588];
          let detailN = String.fromCharCode(121,95,57,57,95,114,101,119,97,114,100,115,0);
          let dragw = String.fromCharCode(112,116,105,111,110,115,95,57,95,48,0);
          let iconnointernetz = 3;
          let profileframeO = 4.0;
         libmapbufferjni8 *= 2;
         hometeamfieldL.push(hometeamfieldL.length);
         detailN = `${2 | detailN.length}`;
         dragw = `${dragw.length - 3}`;
         iconnointernetz -= hometeamfieldL.length >> (Math.min(Math.abs(2), 2));
         profileframeO *= 1;
         break;
      }
       let bodand = 5.0;
      goallogoh = `${parseInt(`${checkboxE}`)}`;
   }
   if (!iconclose2.includes(greyarrowupn)) {
      greyarrowupn -= parseFloat(`${goallogoh.length & castinga.length}`);
   }

        overlayRef.current = true;
    };

    const handlePlayPause = () => {
       let codegenW = String.fromCharCode(116,117,110,110,101,108,105,110,103,95,112,95,54,49,0);
    let sheetF: Array<any> = [140, 378];
    let vignette5 = 2.0;
    let teamo = 3.0;
    let disconnectedlogoG: Array<any> = [798, 892];
    let arrowR: Map<any, any> = new Map([[String.fromCharCode(106,95,53,56,95,114,101,115,105,100,117,97,108,115,0),56], [String.fromCharCode(110,95,55,53,95,103,101,116,100,105,103,105,116,0),420], [String.fromCharCode(118,95,51,53,95,112,97,114,99,111,114,0),422]]);
    let hongkongq = true;
    let langkey4 = 5.0;
    let rewindx = String.fromCharCode(119,95,57,56,95,98,117,116,116,101,114,119,111,114,116,104,0);
    let configureR: Map<any, any> = new Map([[String.fromCharCode(99,111,115,105,103,110,97,116,111,114,105,101,115,95,109,95,52,49,0),true ], [String.fromCharCode(99,114,111,112,112,101,100,95,55,95,54,57,0),false ]]);
    let halffieldimageE: Array<any> = [String.fromCharCode(112,95,50,51,95,112,117,98,108,105,99,107,101,121,115,0), String.fromCharCode(112,114,111,106,101,99,116,95,108,95,57,57,0)];
    let clubk = 3.0;
    let loadingspinner5 = 3;
    let bangm: Map<any, any> = new Map([[String.fromCharCode(118,95,49,48,95,109,105,114,114,111,114,0),String.fromCharCode(116,104,114,101,115,104,95,120,95,55,52,0)], [String.fromCharCode(112,117,98,105,99,95,109,95,57,50,0),String.fromCharCode(122,95,54,57,95,112,97,108,98,97,114,115,0)]]);
    let gpay7 = String.fromCharCode(114,111,108,101,95,54,95,51,0);
      halffieldimageE.push(halffieldimageE.length + disconnectedlogoG.length);
   let sportC = 5685018.0 >= langkey4;
   do {
       let yellowscoreballi = false;
       let libfollyP: Map<any, any> = new Map([[String.fromCharCode(115,101,116,115,95,50,95,53,50,0),517], [String.fromCharCode(97,112,109,116,101,115,116,95,122,95,52,54,0),909]]);
          let screenS = 0;
         libfollyP = new Map([[`${yellowscoreballi}`, screenS << (Math.min(4, Math.abs(2)))]]);
       let storee = 1;
       let data2: Array<any> = [242, 111, 386];
       let libcrashsdkW: Array<any> = [813, 992];
         data2 = [(3 ^ (yellowscoreballi ? 3 : 1))];
       let predictionL = String.fromCharCode(98,95,48,95,101,113,117,101,115,116,0);
          let eventsplashs = String.fromCharCode(98,95,50,52,95,110,101,116,101,113,0);
          let iconclosewhite3 = 2;
         libfollyP.set(predictionL, predictionL.length);
         eventsplashs = "1";
         iconclosewhite3 += 2 ^ eventsplashs.length;
      langkey4 += parseFloat(`${3}`);
      if (sportC) {
         break;
      }
   } while ((langkey4 >= 4.19) && sportC);
      langkey4 /= Math.max(3, parseFloat(`${halffieldimageE.length}`));
      disconnectedlogoG = [rewindx.length | 3];
       let qaagE = String.fromCharCode(109,95,52,49,95,108,101,110,0);
      while (qaagE == String.fromCharCode(50,0)) {
         qaagE += "2";
         break;
      }
          let textT = 0.0;
         qaagE += `${qaagE.length}`;
         textT -= parseFloat(`${1 / (Math.max(parseInt(`${textT}`), 2))}`);
      while (!qaagE.endsWith(`${qaagE.length}`)) {
          let logouserb = String.fromCharCode(110,95,51,53,95,100,105,103,101,115,116,0);
          let reactnativejst = String.fromCharCode(107,95,52,55,95,108,111,103,109,111,110,111,0);
          let whitetickP = String.fromCharCode(104,97,110,100,108,101,95,122,95,53,56,0);
          let imageactionliveW = String.fromCharCode(106,95,55,49,95,115,97,117,99,101,0);
         qaagE += `${imageactionliveW.length ^ 2}`;
         logouserb += `${reactnativejst.length << (Math.min(Math.abs(3), 2))}`;
         reactnativejst = "2";
         whitetickP = `${logouserb.length}`;
         imageactionliveW += "3";
         break;
      }
      halffieldimageE = [((hongkongq ? 4 : 2) >> (Math.min(Math.abs(1), 2)))];
   if (!codegenW.endsWith(`${arrowR.size}`)) {
       let lessO = String.fromCharCode(115,95,51,48,95,98,101,122,101,108,0);
       let modelsg: Array<any> = [530, 485, 312];
          let iconadslink1 = false;
         modelsg = [modelsg.length];
          let pangle2 = String.fromCharCode(112,111,105,110,116,95,55,95,51,51,0);
         lessO = "3";
         pangle2 += `${2 | pangle2.length}`;
      while (!lessO.startsWith(`${modelsg.length}`)) {
          let showm = 3.0;
          let notificationgrayF = String.fromCharCode(97,95,57,95,114,101,103,105,115,116,101,114,102,100,115,0);
          let imagemanagerb = String.fromCharCode(97,95,54,54,95,100,97,105,108,121,0);
          let placeholdert = String.fromCharCode(102,95,49,54,95,98,117,102,115,0);
         modelsg = [(lessO == String.fromCharCode(110,0) ? lessO.length : modelsg.length)];
         showm += parseFloat(`${imagemanagerb.length}`);
         notificationgrayF += `${placeholdert.length & 3}`;
         imagemanagerb += `${(notificationgrayF == String.fromCharCode(74,0) ? parseInt(`${showm}`) : notificationgrayF.length)}`;
         placeholdert += `${1 >> (Math.min(3, Math.abs(parseInt(`${showm}`))))}`;
         break;
      }
         modelsg.push(modelsg.length);
         modelsg = [modelsg.length ^ 2];
         lessO += `${lessO.length & 1}`;
      arrowR.set(codegenW, 2 & codegenW.length);
   }
   while (hongkongq || (3 / (Math.max(5, halffieldimageE.length))) == 1) {
       let componentregistry9: Map<any, any> = new Map([[String.fromCharCode(99,111,115,105,95,105,95,53,51,0),530], [String.fromCharCode(105,95,50,54,95,108,111,110,103,109,117,108,97,119,0),973]]);
       let graphW = String.fromCharCode(120,95,49,55,95,115,116,109,116,0);
       let iconpointscoreg = 3.0;
       let iconwatchnowI = 1.0;
       let imagenomoredataj = 3.0;
      for (let r = 0; r < 3; r++) {
          let activityI: Array<any> = [282, 706, 956];
          let final_blo: Array<any> = [736, 318];
         iconpointscoreg += parseFloat(`${componentregistry9.size}`);
         activityI.push(activityI.length);
         final_blo = [1];
      }
      let bannert = componentregistry9.size >= 5774652;
      do {
          let c_titley = String.fromCharCode(112,97,114,105,116,121,95,105,95,51,55,0);
          let defaultlogox = String.fromCharCode(108,95,57,56,0);
          let defaultpredictionprofilep = String.fromCharCode(102,95,50,52,95,108,111,117,112,101,0);
          let iconnointernetB: Array<any> = [691, 553];
          let sorta = true;
         componentregistry9.set(`${iconpointscoreg}`, graphW.length ^ 1);
         c_titley = "3";
         defaultlogox = `${defaultlogox.length}`;
         defaultpredictionprofilep += `${(defaultlogox.length + (sorta ? 1 : 3))}`;
         iconnointernetB = [defaultpredictionprofilep.length];
         if (bannert) {
            break;
         }
      } while ((2 > (componentregistry9.size | 1)) && bannert);
         iconpointscoreg += parseFloat(`${3 * componentregistry9.size}`);
         componentregistry9 = new Map([[`${imagenomoredataj}`, parseInt(`${imagenomoredataj}`) & 3]]);
          let albumE = String.fromCharCode(107,95,49,48,95,117,110,99,108,97,109,112,101,100,0);
          let activityD = 5;
         imagenomoredataj -= parseInt(`${iconpointscoreg}`);
         albumE += `${(String.fromCharCode(98,0) == albumE ? albumE.length : activityD)}`;
         activityD %= Math.max(albumE.length, 1);
         iconpointscoreg *= parseFloat(`${1 - parseInt(`${imagenomoredataj}`)}`);
         graphW = `${graphW.length}`;
         componentregistry9 = new Map([[`${componentregistry9.size}`, parseInt(`${iconpointscoreg}`)]]);
      if (4.47 < (imagenomoredataj / (Math.max(2.63, 7))) && (imagenomoredataj / (Math.max(2.63, 1))) < 5.23) {
          let link_: Array<any> = [String.fromCharCode(100,101,113,117,97,110,116,105,122,97,116,105,111,110,95,111,95,49,55,0), String.fromCharCode(100,101,114,105,118,101,95,57,95,53,57,0), String.fromCharCode(108,95,52,54,95,99,111,110,102,105,114,109,101,100,0)];
          let room7 = String.fromCharCode(109,112,101,103,95,103,95,55,50,0);
          let emojiX = 4.0;
         imagenomoredataj /= Math.max(5, parseInt(`${imagenomoredataj}`) & 3);
         link_ = [link_.length];
         room7 = `${room7.length}`;
         emojiX /= Math.max(parseFloat(`${2}`), 1);
      }
          let short_ef = String.fromCharCode(99,108,117,115,116,95,57,95,51,0);
          let iconarrowrightorange5: Array<any> = [String.fromCharCode(116,114,101,110,100,108,105,110,101,95,112,95,55,53,0), String.fromCharCode(115,116,114,117,99,116,117,114,101,95,120,95,50,50,0), String.fromCharCode(103,109,97,116,99,104,95,55,95,51,56,0)];
         iconwatchnowI -= parseFloat(`${parseInt(`${iconpointscoreg}`)}`);
         short_ef = `${short_ef.length & iconarrowrightorange5.length}`;
         iconarrowrightorange5 = [iconarrowrightorange5.length];
         componentregistry9 = new Map([[`${componentregistry9.size}`, componentregistry9.size + 1]]);
      hongkongq = 54 <= sheetF.length;
      break;
   }

        clearTimeout(iconTimer.current);

   if ((1 - disconnectedlogoG.length) == 1 && (1 - disconnectedlogoG.length) == 2) {
      codegenW += `${parseInt(`${teamo}`) | parseInt(`${clubk}`)}`;
   }
   while ((1 + rewindx.length) == 3 || 4 == (1 + halffieldimageE.length)) {
      rewindx += `${sheetF.length}`;
      break;
   }
      rewindx += "2";
   if (3.54 <= (teamo * 1.76) && !hongkongq) {
      hongkongq = (rewindx.length | loadingspinner5) <= 96;
   }
      loadingspinner5 /= Math.max(3 % (Math.max(parseInt(`${teamo}`), 4)), 3);
       let phoneW = String.fromCharCode(105,95,54,53,95,105,109,112,111,114,116,101,114,115,0);
       let sinay = String.fromCharCode(99,95,53,53,95,99,111,100,101,99,0);
       let calendarD = 1.0;
         sinay = `${(sinay == String.fromCharCode(103,0) ? sinay.length : parseInt(`${calendarD}`))}`;
          let chatbotphotoE = String.fromCharCode(101,120,116,114,97,99,116,101,100,95,51,95,49,48,48,0);
          let sliderv = false;
         sinay = "3";
         chatbotphotoE += `${((sliderv ? 1 : 3))}`;
         sliderv = chatbotphotoE.endsWith(`${sliderv}`);
       let rnewinterstitialq = String.fromCharCode(121,117,118,112,97,99,107,101,100,95,55,95,53,48,0);
      for (let e = 0; e < 2; e++) {
         sinay += "2";
      }
         sinay += `${sinay.length}`;
       let iconstarv = 5.0;
       let chatroombackgroundH = 2.0;
      let condensedl = 8149233.0 >= iconstarv;
      do {
          let b_manager6: Map<any, any> = new Map([[String.fromCharCode(117,110,100,101,108,101,103,97,116,101,95,115,95,55,51,0),174], [String.fromCharCode(116,101,114,109,105,110,97,116,101,95,120,95,53,50,0),149]]);
          let iconsaveimageu: Array<any> = [933, 248];
          let redgoalW = 3.0;
          let downloadedb = String.fromCharCode(101,95,53,51,95,119,114,105,116,101,116,114,117,110,99,0);
          let launcherN: Map<any, any> = new Map([[String.fromCharCode(122,95,54,95,100,101,99,111,114,114,101,108,97,116,101,0),false ], [String.fromCharCode(115,116,111,114,101,95,52,95,51,51,0),false ]]);
         iconstarv += parseFloat(`${iconsaveimageu.length * 2}`);
         b_manager6.set(`${launcherN.size}`, b_manager6.size | launcherN.size);
         iconsaveimageu = [launcherN.size & b_manager6.size];
         redgoalW /= Math.max(parseFloat(`${launcherN.size}`), 3);
         downloadedb += `${1 ^ downloadedb.length}`;
         if (condensedl) {
            break;
         }
      } while (((parseFloat(`${rnewinterstitialq.length}`) * iconstarv) < 3.77 || 3.77 < (iconstarv * parseFloat(`${rnewinterstitialq.length}`))) && condensedl);
         rnewinterstitialq += `${phoneW.length}`;
         sinay = `${phoneW.length}`;
      rewindx = `${configureR.size}`;
      teamo *= parseFloat(`${parseInt(`${clubk}`)}`);
        setShowIcon(true);

   while ((2 - disconnectedlogoG.length) > 5) {
       let starU = false;
       let buffer_ = 0.0;
          let middlesoundq: Array<any> = [660, 901];
          let taiwanl = false;
          let with_6R = true;
         buffer_ *= 1;
         middlesoundq = [middlesoundq.length];
         taiwanl = middlesoundq.includes(middlesoundq[middlesoundq.length - 1]);
      while (!starU) {
          let descl = 2.0;
          let yellowA: Map<any, any> = new Map([[String.fromCharCode(108,95,48,95,97,112,112,114,111,118,97,108,0),928], [String.fromCharCode(103,95,53,54,95,101,118,105,99,101,0),892], [String.fromCharCode(101,108,108,105,112,116,105,99,95,114,95,54,52,0),711]]);
          let predictionbuttonr: Array<any> = [377, 915, 36];
          let sigmobz = 5.0;
          let searchbar6 = true;
         buffer_ *= parseInt(`${sigmobz}`);
         descl /= Math.max(2, ((searchbar6 ? 5 : 3) * predictionbuttonr.length));
         yellowA.set(`${descl}`, parseInt(`${descl}`) >> (Math.min(Math.abs(3), 4)));
         predictionbuttonr = [predictionbuttonr.length * parseInt(`${descl}`)];
         searchbar6 = (((!searchbar6 ? predictionbuttonr.length : 42) % (Math.max(predictionbuttonr.length, 1))) >= 42);
         break;
      }
          let gemfileN = 3;
          let infoN = 0.0;
          let vietnamf = String.fromCharCode(101,120,101,99,117,116,101,95,103,95,57,56,0);
         starU = buffer_ == 81.9;
         gemfileN >>= Math.min(4, Math.abs(3));
         infoN /= Math.max(parseInt(`${infoN}`), 3);
         vietnamf += `${parseInt(`${infoN}`)}`;
          let detailst = 0.0;
          let libreanimatedg = String.fromCharCode(115,116,105,108,108,95,110,95,55,50,0);
          let iconcalendarF = 5;
         starU = 6.21 == detailst && String.fromCharCode(73,0) == libreanimatedg;
         detailst -= parseFloat(`${iconcalendarF}`);
         libreanimatedg = `${iconcalendarF}`;
      let xvodV = starU ? !starU : starU;
      do {
          let commonI = true;
          let layoutn = 5;
          let modalI = String.fromCharCode(98,95,56,54,95,104,111,108,100,101,114,115,0);
         starU = layoutn < 70;
         commonI = commonI && modalI.length <= 100;
         layoutn /= Math.max(5, modalI.length);
         if (xvodV) {
            break;
         }
      } while ((!starU) && xvodV);
       let bannerU = String.fromCharCode(103,95,49,51,95,97,100,109,105,110,101,100,0);
       let friendsf = String.fromCharCode(107,95,54,53,95,100,101,97,108,108,111,99,97,116,105,111,110,0);
      disconnectedlogoG.push(arrowR.size - 3);
      break;
   }
   while (hongkongq) {
      rewindx = `${codegenW.length + parseInt(`${clubk}`)}`;
      break;
   }
       let turndown9 = String.fromCharCode(99,95,54,95,99,97,115,101,100,0);
         turndown9 += `${turndown9.length << (Math.min(Math.abs(2), 2))}`;
       let injury8 = 5.0;
      for (let x = 0; x < 3; x++) {
          let animationsr = true;
          let libavcodec9 = 2;
          let libglogW: Map<any, any> = new Map([[String.fromCharCode(112,114,101,100,95,99,95,55,52,0),655], [String.fromCharCode(119,114,105,116,101,95,54,95,57,53,0),377]]);
          let zhuboF: Array<any> = [826, 954];
         injury8 += parseFloat(`${3}`);
         animationsr = 7 <= libglogW.size;
         libavcodec9 -= ((animationsr ? 3 : 4) << (Math.min(Math.abs(libglogW.size), 5)));
         zhuboF.push(zhuboF.length % 3);
      }
      arrowR = new Map([[`${disconnectedlogoG.length}`, parseInt(`${teamo}`)]]);
   if ((codegenW.length * 2) <= 5 || (codegenW.length * 2) <= 3) {
      loadingspinner5 >>= Math.min(5, Math.abs(codegenW.length ^ 3));
   }
   if (5 >= (disconnectedlogoG.length | bangm.size)) {
      bangm.set(`${langkey4}`, (parseInt(`${langkey4}`) >> (Math.min(4, Math.abs((hongkongq ? 1 : 5))))));
   }
   if ((arrowR.size << (Math.min(3, sheetF.length))) < 4 && 2 < (4 << (Math.min(2, Math.abs(arrowR.size))))) {
       let positionfield2 = 4.0;
         positionfield2 -= parseFloat(`${2 % (Math.max(4, parseInt(`${positionfield2}`)))}`);
      if (1.69 <= (positionfield2 / 2)) {
         positionfield2 += parseFloat(`${3}`);
      }
         positionfield2 *= parseFloat(`${parseInt(`${positionfield2}`) ^ 3}`);
      arrowR = new Map([[`${loadingspinner5}`, 2 ^ codegenW.length]]);
   }
   while ((disconnectedlogoG.length >> (Math.min(Math.abs(4), 3))) == 2) {
      langkey4 /= Math.max(3, parseFloat(`${codegenW.length << (Math.min(1, sheetF.length))}`));
      break;
   }
        if (isPause) {

   for (let x = 0; x < 2; x++) {
      configureR = new Map([[`${disconnectedlogoG.length}`, rewindx.length | 3]]);
   }
      vignette5 -= rewindx.length;
   while (3 == (rewindx.length ^ bangm.size)) {
      rewindx += `${configureR.size}`;
      break;
   }
       let type_tz = 2;
       let modelss = String.fromCharCode(104,95,52,57,95,105,110,118,97,108,105,100,97,116,101,100,0);
         type_tz ^= type_tz;
      for (let v = 0; v < 3; v++) {
         modelss = `${3 << (Math.min(3, modelss.length))}`;
      }
      let playershirtM = modelss == String.fromCharCode(48,98,110,99,57,51,53,104,0);
      do {
          let libsgcoreb = 3;
          let downarrowp: Array<any> = [String.fromCharCode(101,95,51,57,95,114,97,100,97,114,0), String.fromCharCode(109,95,56,53,95,105,110,116,101,114,97,116,105,111,110,0)];
          let utilsP = String.fromCharCode(115,95,53,95,105,110,116,114,111,0);
          let launchy = 0;
         modelss += `${type_tz % 3}`;
         libsgcoreb >>= Math.min(4, Math.abs(3));
         downarrowp.push(downarrowp.length);
         utilsP += `${launchy & 1}`;
         launchy *= 1;
         if (playershirtM) {
            break;
         }
      } while (playershirtM && (modelss.length >= 2));
         modelss = `${modelss.length / 1}`;
      let gpayL = modelss == String.fromCharCode(111,107,121,111,117,51,56,104,97,0);
      do {
         modelss = "2";
         if (gpayL) {
            break;
         }
      } while ((5 < type_tz) && gpayL);
      while (2 >= modelss.length) {
          let minim = 5.0;
         type_tz >>= Math.min(Math.abs(type_tz), 4);
         minim *= parseFloat(`${parseInt(`${minim}`) / (Math.max(parseInt(`${minim}`), 9))}`);
         break;
      }
      vignette5 -= ((hongkongq ? 2 : 3) ^ parseInt(`${teamo}`));
   let gemfileA = bangm.size <= 7165826;
   do {
      bangm = new Map([[`${disconnectedlogoG.length}`, sheetF.length]]);
      if (gemfileA) {
         break;
      }
   } while ((!Array.from(bangm.values()).includes(loadingspinner5)) && gemfileA);
   if ((codegenW.length % (Math.max(8, bangm.size))) <= 5) {
      codegenW += `${sheetF.length}`;
   }
   if (5 >= (5 * codegenW.length)) {
      codegenW += `${disconnectedlogoG.length % 2}`;
   }
            iconTimer.current = setTimeout(() => setShowIcon(false), 1000);
        }
        onManualPause(isPause);
    };

    const handleLoadStart = useCallback(() => {
       let settingsN = 0.0;
    let abidetectM = 0.0;
    let nativeexW = 5;
    let logoO = String.fromCharCode(97,110,105,109,97,116,105,110,103,95,105,95,53,55,0);
    let gmailJ = 4.0;
    let mail3 = String.fromCharCode(115,122,97,98,111,115,95,56,95,50,53,0);
    let runtimescheduler7 = 4;
    let rncoreh = false;
    let bdxadsdkq: Array<any> = [String.fromCharCode(97,99,99,101,115,115,105,110,103,95,107,95,52,50,0), String.fromCharCode(97,108,116,101,114,110,97,116,105,118,101,115,95,121,95,51,55,0), String.fromCharCode(99,111,110,115,101,99,117,116,105,118,101,95,110,95,56,48,0)];
    let chatx = String.fromCharCode(98,105,103,105,110,116,95,118,95,54,57,0);
    let statisticsinactiveb = String.fromCharCode(112,114,111,112,97,103,97,116,105,111,110,95,114,95,52,56,0);
    let mbridgeo = 4.0;
       let airbnbstarselectedW: Map<any, any> = new Map([[String.fromCharCode(116,95,53,55,95,113,117,101,117,101,100,0),689], [String.fromCharCode(99,108,97,105,109,95,98,95,52,54,0),912], [String.fromCharCode(115,95,49,50,95,116,97,107,100,115,112,0),744]]);
       let phonesharee: Array<any> = [190, 914, 586];
       let floaterq = false;
      let listS = floaterq ? !floaterq : floaterq;
      do {
         floaterq = !floaterq;
         if (listS) {
            break;
         }
      } while (listS && (5 < (3 / (Math.max(4, airbnbstarselectedW.size)))));
      for (let t = 0; t < 2; t++) {
         airbnbstarselectedW.set(`${floaterq}`, ((floaterq ? 5 : 1) | phonesharee.length));
      }
       let iconarrowrightblacki = 3.0;
      let detailq = floaterq ? !floaterq : floaterq;
      do {
         floaterq = floaterq && airbnbstarselectedW.size == 9;
         if (detailq) {
            break;
         }
      } while (detailq && (1.23 <= iconarrowrightblacki || 5.53 <= (iconarrowrightblacki + 1.23)));
      for (let x = 0; x < 1; x++) {
         phonesharee.push(((floaterq ? 1 : 2) % (Math.max(2, parseInt(`${iconarrowrightblacki}`)))));
      }
      for (let r = 0; r < 3; r++) {
          let trashQ = String.fromCharCode(111,95,49,48,95,97,97,110,100,99,116,116,97,98,0);
         phonesharee = [parseInt(`${iconarrowrightblacki}`) >> (Math.min(Math.abs(1), 2))];
         trashQ += `${(trashQ == String.fromCharCode(110,0) ? trashQ.length : trashQ.length)}`;
      }
      while (1 <= (1 * phonesharee.length) || 1 <= (phonesharee.length * 1)) {
          let nativemoduleT = 0;
          let showmoreF: Map<any, any> = new Map([[String.fromCharCode(115,119,102,112,108,97,121,101,114,95,53,95,51,49,0),796], [String.fromCharCode(103,105,103,97,103,114,111,117,112,95,50,95,56,57,0),986]]);
          let viewsG = String.fromCharCode(112,111,112,117,112,95,104,95,57,57,0);
          let libglog8 = String.fromCharCode(118,97,114,116,105,109,101,95,113,95,52,54,0);
          let stationB = false;
         phonesharee = [nativemoduleT - 2];
         nativemoduleT /= Math.max(3 + showmoreF.size, 2);
         showmoreF.set(`${stationB}`, (libglog8.length * (stationB ? 2 : 5)));
         viewsG = `${libglog8.length}`;
         break;
      }
         phonesharee.push(phonesharee.length);
         airbnbstarselectedW = new Map([[`${airbnbstarselectedW.size}`, airbnbstarselectedW.size]]);
      nativeexW %= Math.max((airbnbstarselectedW.size << (Math.min(2, Math.abs((rncoreh ? 4 : 4))))), 3);
      gmailJ -= parseFloat(`${chatx.length}`);
      settingsN *= parseFloat(`${chatx.length / 2}`);
   while (!rncoreh) {
      rncoreh = logoO.startsWith(`${nativeexW}`);
      break;
   }
      settingsN -= parseFloat(`${bdxadsdkq.length}`);
      chatx += `${mail3.length * 2}`;
      abidetectM -= parseInt(`${gmailJ}`) - 3;
   let libfb4 = gmailJ <= 9809134.0;
   do {
      gmailJ *= parseFloat(`${parseInt(`${abidetectM}`) << (Math.min(chatx.length, 2))}`);
      if (libfb4) {
         break;
      }
   } while (libfb4 && (5.15 > (parseFloat(`${chatx.length}`) * gmailJ)));
   let volumer = 6257672 >= logoO.length;
   do {
      logoO = `${bdxadsdkq.length}`;
      if (volumer) {
         break;
      }
   } while (volumer && ((2 * logoO.length) == 5));
   if (3 < (bdxadsdkq.length - 1) && rncoreh) {
      rncoreh = gmailJ >= 83.45 && abidetectM >= 83.45;
   }
   let reducer9 = logoO == String.fromCharCode(53,98,100,98,108,95,0);
   do {
      logoO = `${parseInt(`${gmailJ}`)}`;
      if (reducer9) {
         break;
      }
   } while ((logoO.length <= 2 || rncoreh) && reducer9);
   for (let v = 0; v < 3; v++) {
      abidetectM /= Math.max(parseInt(`${gmailJ}`), 2);
   }
   for (let c = 0; c < 2; c++) {
       let matchdetailbgM: Map<any, any> = new Map([[String.fromCharCode(101,95,55,56,95,99,116,108,111,117,116,112,117,116,0),false ], [String.fromCharCode(101,112,105,99,95,108,95,49,48,0),true ]]);
       let libffmpegkitn = String.fromCharCode(101,120,99,108,117,100,101,115,95,57,95,53,56,0);
       let smallorangemanL = String.fromCharCode(122,95,49,56,95,115,117,98,118,105,100,101,111,0);
      let questd = 7272522 <= matchdetailbgM.size;
      do {
         matchdetailbgM.set(smallorangemanL, smallorangemanL.length & 3);
         if (questd) {
            break;
         }
      } while ((matchdetailbgM.size == libffmpegkitn.length) && questd);
      let gmaild = matchdetailbgM.size >= 6956896;
      do {
         matchdetailbgM = new Map([[libffmpegkitn, libffmpegkitn.length / (Math.max(smallorangemanL.length, 3))]]);
         if (gmaild) {
            break;
         }
      } while (gmaild && ((matchdetailbgM.size | 2) < 3));
         smallorangemanL += `${smallorangemanL.length ^ 1}`;
       let slider8 = 2.0;
       let basketballiconw: Array<any> = [185, 736];
       let yellowcirclebgY: Array<any> = [233, 25, 693];
      let liveu = slider8 >= 7296223.0;
      do {
         slider8 += 2 >> (Math.min(1, yellowcirclebgY.length));
         if (liveu) {
            break;
         }
      } while (liveu && (Array.from(matchdetailbgM.values()).includes(slider8)));
      for (let f = 0; f < 1; f++) {
         libffmpegkitn += "3";
      }
         libffmpegkitn += `${smallorangemanL.length}`;
          let liveshareV: Map<any, any> = new Map([[String.fromCharCode(102,105,110,105,115,104,101,100,95,120,95,57,56,0),819], [String.fromCharCode(109,98,116,114,101,101,95,57,95,51,50,0),795]]);
          let commonp: Map<any, any> = new Map([[String.fromCharCode(100,111,103,115,95,119,95,49,56,0),896], [String.fromCharCode(110,111,110,110,117,108,108,115,115,114,99,95,97,95,50,52,0),64]]);
          let liveshareI = 0.0;
         smallorangemanL += "2";
         liveshareV.set(`${liveshareI}`, 3);
         commonp = new Map([[`${liveshareV.size}`, liveshareV.size ^ commonp.size]]);
         liveshareI /= Math.max(parseInt(`${liveshareI}`), 5);
      mail3 = `${logoO.length}`;
   }

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
        wawa_dacccfaabfbcbadeebddcabacdffdbc_video.watchAnytimeAdsViewAnalytics({
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
       let specX: Array<any> = [843, 289];
    let privilegen = String.fromCharCode(102,108,111,111,114,115,95,49,95,56,48,0);
    let spinnerI = String.fromCharCode(110,95,51,50,95,118,97,114,105,110,116,115,0);
    let baiduu: Map<any, any> = new Map([[String.fromCharCode(109,95,53,52,95,99,111,110,116,111,117,114,0),752], [String.fromCharCode(112,114,111,112,111,115,97,108,115,95,104,95,55,53,0),661]]);
    let libflipperf = 0.0;
    let ewarded0: Map<any, any> = new Map([[String.fromCharCode(109,98,115,116,114,105,110,103,95,112,95,53,51,0),323], [String.fromCharCode(106,95,49,95,115,121,115,99,116,108,115,0),266]]);
    let edita = 1;
    let pauset = 5.0;
    let inactiveM = String.fromCharCode(100,95,51,51,95,108,111,103,103,97,98,108,101,0);
    let sharedU: Array<any> = [744, 862, 891];
    let vipsportE = 5;
    let incidentI: Map<any, any> = new Map([[String.fromCharCode(99,95,54,55,95,104,111,114,105,103,0),String.fromCharCode(115,121,115,116,101,109,95,97,95,50,56,0)], [String.fromCharCode(105,108,108,105,113,97,95,112,95,55,50,0),String.fromCharCode(103,101,110,101,114,97,116,101,95,105,95,54,49,0)], [String.fromCharCode(112,95,54,52,95,115,117,112,112,111,114,116,105,110,103,0),String.fromCharCode(114,95,56,50,95,116,114,97,99,105,110,103,0)]]);
    let contextz: Map<any, any> = new Map([[String.fromCharCode(102,95,51,52,95,116,114,97,100,101,0),30], [String.fromCharCode(114,95,49,50,95,115,116,97,110,100,97,114,100,105,122,101,0),25]]);
   while ((sharedU.length << (Math.min(Math.abs(2), 3))) >= 3) {
       let guideX = 4.0;
       let short_ah: Map<any, any> = new Map([[String.fromCharCode(102,95,49,53,95,115,117,98,116,105,116,108,101,0),294], [String.fromCharCode(103,100,115,112,95,50,95,53,49,0),208]]);
       let imagenomoredatag = true;
      while (guideX <= 4.47) {
          let codeG = 5.0;
          let armval: Array<any> = [834, 312, 122];
         guideX -= parseFloat(`${1}`);
         codeG += parseFloat(`${parseInt(`${codeG}`) + 2}`);
         armval.push(parseInt(`${codeG}`) ^ 3);
         break;
      }
         guideX *= parseFloat(`${short_ah.size}`);
          let gradlev = String.fromCharCode(101,120,99,108,117,100,105,110,103,95,97,95,50,55,0);
          let l_managerv = 5.0;
         guideX *= parseFloat(`${parseInt(`${guideX}`) + 1}`);
         gradlev += `${gradlev.length | parseInt(`${l_managerv}`)}`;
         l_managerv /= Math.max(gradlev.length, 3);
      if (1 > (short_ah.size / 1) && 1 > short_ah.size) {
          let downloadedY = true;
          let scoreW = String.fromCharCode(100,117,114,97,116,105,111,110,115,95,48,95,54,50,0);
          let iconsaveimagek = false;
          let becomeZ = String.fromCharCode(114,101,115,112,111,110,115,101,95,114,95,57,55,0);
          let anytimem: Map<any, any> = new Map([[String.fromCharCode(120,95,52,49,95,98,111,117,110,100,97,108,108,0),933], [String.fromCharCode(114,105,103,104,116,95,53,95,52,51,0),49]]);
         imagenomoredatag = 79.92 <= guideX;
         downloadedY = (iconsaveimagek ? !downloadedY : !iconsaveimagek);
         scoreW += `${(2 & (downloadedY ? 1 : 3))}`;
         becomeZ = `${(String.fromCharCode(68,0) == becomeZ ? (downloadedY ? 1 : 4) : becomeZ.length)}`;
         anytimem = new Map([[`${anytimem.size}`, becomeZ.length]]);
      }
      while (4.20 < guideX || 3.28 < (guideX / (Math.max(4.20, 9)))) {
          let roomB = 5.0;
          let awayteamfield7: Map<any, any> = new Map([[String.fromCharCode(102,97,105,108,97,98,108,101,95,106,95,57,48,0),true ], [String.fromCharCode(98,101,115,116,95,52,95,55,54,0),false ], [String.fromCharCode(112,114,101,115,101,110,116,97,116,105,111,110,95,114,95,55,48,0),true ]]);
          let untickw = String.fromCharCode(116,111,97,115,116,95,108,95,57,50,0);
          let halffieldimageR = 2.0;
          let neonA = 1.0;
         guideX /= Math.max(5, parseFloat(`${parseInt(`${neonA}`)}`));
         roomB -= parseInt(`${roomB}`);
         awayteamfield7 = new Map([[`${halffieldimageR}`, 1 / (Math.max(parseInt(`${roomB}`), 9))]]);
         untickw += `${parseInt(`${roomB}`) ^ 3}`;
         halffieldimageR += 3;
         neonA /= Math.max(parseInt(`${roomB}`), 2);
         break;
      }
         imagenomoredatag = !imagenomoredatag;
       let flagz = false;
      let kickV = imagenomoredatag ? !imagenomoredatag : imagenomoredatag;
      do {
         imagenomoredatag = null != short_ah.get(`${guideX}`);
         if (kickV) {
            break;
         }
      } while ((2 == (1 - short_ah.size)) && kickV);
       let league8 = 4.0;
       let topicG = 3.0;
      sharedU = [spinnerI.length];
      break;
   }
   if (parseFloat(`${baiduu.size}`) >= pauset) {
      pauset *= parseFloat(`${edita + specX.length}`);
   }

            if ((isPause === true || isBuffering === true) && currentDuration < 1) {

      baiduu.set(inactiveM, (String.fromCharCode(84,0) == inactiveM ? inactiveM.length : parseInt(`${libflipperf}`)));
       let controlsR: Array<any> = [String.fromCharCode(101,111,99,100,95,50,95,56,57,0), String.fromCharCode(116,101,114,109,105,110,97,116,105,111,110,95,109,95,54,0), String.fromCharCode(99,95,51,50,95,109,99,111,114,101,0)];
       let questiconZ = 0.0;
      let c_titlem = 7549127.0 >= questiconZ;
      do {
          let confirmation_ = String.fromCharCode(111,115,100,101,112,95,97,95,50,0);
          let update_5tF = true;
          let countdownX = 5.0;
         questiconZ += parseFloat(`${3}`);
         confirmation_ = `${parseInt(`${countdownX}`) % (Math.max(5, confirmation_.length))}`;
         update_5tF = countdownX < 24.83;
         if (c_titlem) {
            break;
         }
      } while (c_titlem && (1 <= (controlsR.length / (Math.max(7, parseInt(`${questiconZ}`))))));
         questiconZ *= parseFloat(`${parseInt(`${questiconZ}`) | controlsR.length}`);
      while (4 == (parseInt(`${questiconZ}`) + controlsR.length)) {
          let unselectedh = true;
          let feedbacko = false;
          let iconclosewhitem: Map<any, any> = new Map([[String.fromCharCode(113,116,97,98,108,101,95,50,95,57,57,0),655], [String.fromCharCode(109,95,50,54,95,116,114,97,110,115,102,101,114,114,101,100,0),78], [String.fromCharCode(105,95,56,54,95,109,101,97,115,117,114,101,115,0),641]]);
          let sigmobA: Array<any> = [String.fromCharCode(107,95,56,50,95,114,101,105,110,115,101,114,116,0), String.fromCharCode(114,102,116,102,115,117,98,95,56,95,51,54,0), String.fromCharCode(97,109,112,108,105,102,121,95,121,95,54,55,0)];
         questiconZ -= parseFloat(`${parseInt(`${questiconZ}`)}`);
         unselectedh = (38 >= (sigmobA.length % (Math.max(1, (feedbacko ? sigmobA.length : 38)))));
         feedbacko = sigmobA.length <= 90 && unselectedh;
         iconclosewhitem.set(`${feedbacko}`, 1);
         break;
      }
      for (let t = 0; t < 1; t++) {
         questiconZ *= parseFloat(`${1 * controlsR.length}`);
      }
      let statisticsinactiveL = controlsR.length >= 7037294;
      do {
         controlsR = [2 - controlsR.length];
         if (statisticsinactiveL) {
            break;
         }
      } while (((3 & controlsR.length) < 1) && statisticsinactiveL);
         questiconZ *= parseFloat(`${parseInt(`${questiconZ}`)}`);
      pauset += parseFloat(`${1}`);
                

      ewarded0.set(`${edita}`, 3);
   for (let c = 0; c < 3; c++) {
      libflipperf *= parseFloat(`${incidentI.size}`);
   }
                

   if ((5 % (Math.max(7, vipsportE))) < 1 || 1 < (ewarded0.size % 5)) {
      ewarded0 = new Map([[`${vipsportE}`, spinnerI.length >> (Math.min(4, Math.abs(vipsportE)))]]);
   }
   for (let h = 0; h < 1; h++) {
      sharedU = [(String.fromCharCode(99,0) == inactiveM ? parseInt(`${pauset}`) : inactiveM.length)];
   }
                

   let transfer2 = 7836145 >= sharedU.length;
   do {
      sharedU.push(vipsportE);
      if (transfer2) {
         break;
      }
   } while ((4 >= (2 / (Math.max(8, spinnerI.length))) || (sharedU.length / (Math.max(spinnerI.length, 8))) >= 2) && transfer2);
   while (4 <= (spinnerI.length + 5)) {
      edita /= Math.max(3, 1);
      break;
   }

                const fileLocation =
                    RNFetchBlob.fs.dirs.DocumentDir +
                    `/videocache/${currentVod.mini_video_id}.mp4`;

      sharedU.push(1 + privilegen.length);
   for (let c = 0; c < 2; c++) {
       let jnewinterstitialq = String.fromCharCode(114,97,100,105,97,108,95,51,95,53,50,0);
      let middlesoundV = String.fromCharCode(99,119,101,120,0) == jnewinterstitialq;
      do {
         jnewinterstitialq = `${jnewinterstitialq.length}`;
         if (middlesoundV) {
            break;
         }
      } while ((2 >= jnewinterstitialq.length) && middlesoundV);
          let helperR = String.fromCharCode(108,95,53,54,95,113,117,97,108,105,102,121,0);
          let defaultplayerimgl = String.fromCharCode(117,95,54,51,95,98,117,105,108,100,0);
         jnewinterstitialq = `${helperR.length}`;
         helperR += `${2 - defaultplayerimgl.length}`;
         defaultplayerimgl += `${defaultplayerimgl.length * 3}`;
          let sourcek = String.fromCharCode(109,95,56,50,95,108,105,98,99,101,108,116,0);
         jnewinterstitialq += `${sourcek.length}`;
      spinnerI += `${parseInt(`${pauset}`) * privilegen.length}`;
   }

                const fileExist = await RNFetchBlob.fs.exists(fileLocation);

   let cornerJ = 6441244 >= sharedU.length;
   do {
       let agreementb = 5;
       let libmapbufferjniS = String.fromCharCode(109,97,112,112,97,98,108,101,95,54,95,50,0);
       let xnewsshareL = String.fromCharCode(117,95,49,55,95,97,112,112,101,110,100,0);
      if (libmapbufferjniS.includes(`${xnewsshareL.length}`)) {
         xnewsshareL += `${libmapbufferjniS.length}`;
      }
      if (libmapbufferjniS.startsWith(`${agreementb}`)) {
         agreementb %= Math.max(xnewsshareL.length % 1, 4);
      }
      if (5 == xnewsshareL.length) {
         xnewsshareL += `${libmapbufferjniS.length}`;
      }
      for (let n = 0; n < 3; n++) {
          let playR = 5.0;
          let with_t2A = String.fromCharCode(117,95,50,48,95,109,98,114,116,104,114,101,97,100,0);
          let libavformatJ: Array<any> = [24, 132, 965];
          let defaultfootballbgt = 4;
         agreementb /= Math.max(parseInt(`${playR}`), 5);
         playR -= parseFloat(`${2 >> (Math.min(1, with_t2A.length))}`);
         with_t2A += `${1 & with_t2A.length}`;
         libavformatJ = [libavformatJ.length >> (Math.min(Math.abs(2), 5))];
         defaultfootballbgt |= libavformatJ.length >> (Math.min(Math.abs(1), 3));
      }
      if (xnewsshareL != libmapbufferjniS) {
         libmapbufferjniS = `${agreementb >> (Math.min(Math.abs(2), 5))}`;
      }
         xnewsshareL += `${3 | libmapbufferjniS.length}`;
         agreementb += libmapbufferjniS.length >> (Math.min(Math.abs(2), 2));
      for (let w = 0; w < 2; w++) {
          let binddatasq = 0.0;
          let selld: Map<any, any> = new Map([[String.fromCharCode(99,111,110,118,101,114,116,95,103,95,50,0),String.fromCharCode(116,95,51,54,95,100,105,115,112,108,97,121,0)], [String.fromCharCode(119,95,50,53,95,117,110,101,120,112,101,99,116,101,100,0),String.fromCharCode(104,95,55,50,95,118,109,112,114,105,110,116,102,0)], [String.fromCharCode(119,104,97,116,95,98,95,55,48,0),String.fromCharCode(115,112,97,99,101,100,95,110,95,50,56,0)]]);
         libmapbufferjniS += `${agreementb}`;
         binddatasq /= Math.max(parseInt(`${binddatasq}`) / (Math.max(7, selld.size)), 5);
         selld.set(`${binddatasq}`, 2);
      }
          let whistleorangec = 1.0;
          let previewW = String.fromCharCode(118,116,97,98,95,114,95,54,50,0);
          let icondefaultthumbnailp: Array<any> = [String.fromCharCode(105,95,56,55,95,109,97,110,116,105,115,115,97,0), String.fromCharCode(100,101,112,114,101,99,105,97,116,101,100,104,95,105,95,54,56,0), String.fromCharCode(97,98,111,117,116,95,115,95,48,0)];
         libmapbufferjniS += `${libmapbufferjniS.length - 1}`;
         whistleorangec *= parseInt(`${whistleorangec}`);
         previewW += `${2 / (Math.max(5, parseInt(`${whistleorangec}`)))}`;
         icondefaultthumbnailp = [previewW.length % (Math.max(9, parseInt(`${whistleorangec}`)))];
      sharedU = [edita / 2];
      if (cornerJ) {
         break;
      }
   } while ((4 > (sharedU.length | 3)) && cornerJ);
   for (let x = 0; x < 2; x++) {
       let bangX = 5;
       let zhuboW = 4.0;
       let traminio = String.fromCharCode(104,95,55,50,95,101,120,112,111,0);
       let championU = String.fromCharCode(120,109,108,101,115,99,97,112,101,95,120,95,55,55,0);
       let greenU = 1.0;
       let templateprocessory = 0.0;
         bangX <<= Math.min(5, Math.abs(parseInt(`${greenU}`) >> (Math.min(Math.abs(3), 3))));
         traminio += `${parseInt(`${zhuboW}`)}`;
      let homeplayerm = templateprocessory >= 6829423.0;
      do {
         templateprocessory -= parseFloat(`${championU.length}`);
         if (homeplayerm) {
            break;
         }
      } while (((zhuboW * 3.22) >= 5.44 || (zhuboW * templateprocessory) >= 3.22) && homeplayerm);
         bangX |= bangX;
      if ((zhuboW + 5.92) >= 2.38 || (championU.length + parseInt(`${zhuboW}`)) >= 3) {
          let iconnotificationnewM: Array<any> = [138, 82];
          let libavcodecn: Map<any, any> = new Map([[String.fromCharCode(115,101,103,109,101,110,116,116,105,109,101,108,105,110,101,95,49,95,52,54,0),String.fromCharCode(109,95,52,52,95,97,98,108,101,0)], [String.fromCharCode(115,99,97,110,110,101,100,95,110,95,50,54,0),String.fromCharCode(107,95,49,54,95,111,112,101,110,115,115,108,0)], [String.fromCharCode(105,95,56,53,95,102,97,107,101,0),String.fromCharCode(97,109,111,117,110,116,95,101,95,57,54,0)]]);
          let reactnativeratingsW = 3.0;
          let statsnomoredatao = String.fromCharCode(104,97,108,108,95,51,95,54,55,0);
          let hiado = String.fromCharCode(110,95,55,51,95,98,97,99,107,100,114,111,112,0);
         championU += `${3 & traminio.length}`;
         iconnotificationnewM = [3];
         libavcodecn = new Map([[statsnomoredatao, hiado.length / 1]]);
         reactnativeratingsW -= (String.fromCharCode(116,0) == hiado ? hiado.length : iconnotificationnewM.length);
         statsnomoredatao += `${statsnomoredatao.length}`;
      }
      for (let v = 0; v < 1; v++) {
          let imagewatchliveB = 3.0;
         traminio += `${3 * parseInt(`${zhuboW}`)}`;
         imagewatchliveB += parseFloat(`${3}`);
      }
          let neonL: Map<any, any> = new Map([[String.fromCharCode(101,120,116,114,97,95,98,95,49,55,0),441], [String.fromCharCode(108,111,119,100,101,108,97,121,95,121,95,53,52,0),175]]);
          let libruntimeexecutorw = String.fromCharCode(103,95,49,50,95,111,110,101,111,102,115,0);
          let foregrounda: Array<any> = [412, 394, 795];
         traminio += `${championU.length ^ 3}`;
         neonL.set(libruntimeexecutorw, (libruntimeexecutorw == String.fromCharCode(49,0) ? libruntimeexecutorw.length : foregrounda.length));
         foregrounda = [neonL.size >> (Math.min(libruntimeexecutorw.length, 5))];
      while (championU.includes(`${greenU}`)) {
         greenU /= Math.max(parseFloat(`${3}`), 4);
         break;
      }
       let dplusT = 3.0;
      if (dplusT < zhuboW) {
         zhuboW += parseFloat(`${parseInt(`${greenU}`) | 2}`);
      }
         traminio += `${1 | parseInt(`${templateprocessory}`)}`;
      privilegen += `${championU.length}`;
   }


                if (fileExist) {

   while ((ewarded0.size & 1) == 4 || 5 == (1 & privilegen.length)) {
      ewarded0 = new Map([[`${specX.length}`, specX.length]]);
      break;
   }
      privilegen += `${spinnerI.length | incidentI.size}`;
                    const fileIsEmpty = (await RNFetchBlob.fs.stat(fileLocation)).size == 0

       let librrcy = String.fromCharCode(115,117,112,112,114,101,115,115,111,114,95,51,95,55,56,0);
       let googlel = 2;
       let iconwatchnowO = String.fromCharCode(114,101,113,115,116,97,116,101,95,116,95,50,49,0);
       let area_ = String.fromCharCode(112,97,114,97,95,107,95,57,54,0);
       let libreactnativeblob_ = String.fromCharCode(98,105,119,101,105,103,104,116,95,121,95,49,57,0);
         area_ = `${libreactnativeblob_.length & librrcy.length}`;
      for (let u = 0; u < 2; u++) {
         libreactnativeblob_ += `${area_.length % 1}`;
      }
         libreactnativeblob_ += `${googlel + 2}`;
      if (googlel > iconwatchnowO.length) {
          let placeholderJ: Array<any> = [String.fromCharCode(99,111,110,115,116,114,97,105,110,101,100,95,106,95,55,50,0), String.fromCharCode(102,95,49,57,95,104,97,115,104,97,98,108,101,0), String.fromCharCode(120,95,50,50,95,100,114,97,103,103,105,110,103,0)];
         googlel /= Math.max(2 / (Math.max(2, librrcy.length)), 2);
         placeholderJ.push(placeholderJ.length ^ placeholderJ.length);
      }
      for (let o = 0; o < 2; o++) {
         libreactnativeblob_ += `${area_.length}`;
      }
          let scoreu = String.fromCharCode(113,95,51,57,95,99,114,111,115,115,104,97,105,114,115,0);
          let screenV = 5;
          let arrowright2 = String.fromCharCode(105,95,50,55,95,112,114,105,109,97,114,105,101,115,0);
         librrcy = `${arrowright2.length | 1}`;
         scoreu += `${scoreu.length}`;
         screenV |= screenV / 1;
         arrowright2 += `${screenV % (Math.max(9, scoreu.length))}`;
      if (2 >= librrcy.length) {
         librrcy = `${1 - area_.length}`;
      }
      if (libreactnativeblob_.length == 2 && librrcy.length == 2) {
         librrcy = `${3 ^ libreactnativeblob_.length}`;
      }
      specX.push(googlel | 2);
   while ((pauset - parseFloat(`${ewarded0.size}`)) == 3.23 || (3.23 - pauset) == 3.25) {
      ewarded0.set(inactiveM, incidentI.size % 1);
      break;
   }
                    

       let hometeamfieldW = 4;
       let yellowscoreball3 = String.fromCharCode(108,105,98,115,112,101,101,120,95,121,95,57,55,0);
       let halfd: Map<any, any> = new Map([[String.fromCharCode(114,101,117,112,108,111,97,100,95,56,95,56,50,0),String.fromCharCode(99,95,54,50,95,112,114,105,111,0)], [String.fromCharCode(116,103,115,95,109,95,52,0),String.fromCharCode(101,95,54,54,95,117,110,108,105,110,107,0)]]);
      for (let w = 0; w < 2; w++) {
         yellowscoreball3 = `${(String.fromCharCode(108,0) == yellowscoreball3 ? yellowscoreball3.length : halfd.size)}`;
      }
      while (3 >= yellowscoreball3.length) {
         halfd = new Map([[`${halfd.size}`, hometeamfieldW * 2]]);
         break;
      }
       let moon_ = 5.0;
         moon_ /= Math.max(4, 1 & yellowscoreball3.length);
          let merger2 = 1;
          let textB = 2.0;
         halfd = new Map([[`${hometeamfieldW}`, (String.fromCharCode(101,0) == yellowscoreball3 ? hometeamfieldW : yellowscoreball3.length)]]);
         merger2 -= 2;
         textB -= parseFloat(`${1}`);
      let customd = 6428541.0 >= moon_;
      do {
          let moreg: Array<any> = [1000, 673];
          let dplusk = String.fromCharCode(114,117,110,110,101,114,95,108,95,49,53,0);
         moon_ += parseInt(`${moon_}`);
         moreg.push(moreg.length);
         dplusk = `${(dplusk == String.fromCharCode(117,0) ? dplusk.length : moreg.length)}`;
         if (customd) {
            break;
         }
      } while (customd && ((moon_ * 4.35) < 4.59));
         hometeamfieldW += 1;
      while (yellowscoreball3.startsWith(`${halfd.size}`)) {
         halfd = new Map([[`${hometeamfieldW}`, 2 % (Math.max(9, parseInt(`${moon_}`)))]]);
         break;
      }
         hometeamfieldW %= Math.max(4, 2);
      spinnerI += `${parseInt(`${pauset}`) | 2}`;
   let single8 = 6186879 >= incidentI.size;
   do {
      incidentI = new Map([[`${ewarded0.size}`, ewarded0.size]]);
      if (single8) {
         break;
      }
   } while ((ewarded0.size == incidentI.size) && single8);
                    if (!fileIsEmpty) {

      ewarded0 = new Map([[spinnerI, parseInt(`${libflipperf}`)]]);
   while (!spinnerI.includes(`${sharedU.length}`)) {
      spinnerI = `${3 - sharedU.length}`;
      break;
   }
                        setMiniVodUrl(`${fileLocation}`);
                    } else {

   for (let n = 0; n < 2; n++) {
      vipsportE |= 2;
   }
      spinnerI += `${3 % (Math.max(6, parseInt(`${pauset}`)))}`;
                        

   if (baiduu.get(`${incidentI.size}`) != null) {
       let sport8: Map<any, any> = new Map([[String.fromCharCode(97,117,116,104,111,114,105,116,121,95,110,95,53,57,0),String.fromCharCode(112,114,101,102,101,116,99,104,101,114,95,56,95,54,0)], [String.fromCharCode(122,95,48,95,110,97,118,105,103,97,116,101,100,0),String.fromCharCode(111,112,101,114,97,116,105,111,110,95,122,95,54,0)], [String.fromCharCode(122,105,103,122,97,103,95,121,95,53,54,0),String.fromCharCode(98,95,56,55,95,98,101,97,116,0)]]);
       let largesoundX: Array<any> = [721, 80];
       let libreact8 = 4.0;
       let singaporem = String.fromCharCode(109,111,110,111,115,112,97,99,101,95,102,95,56,52,0);
         singaporem += `${largesoundX.length / (Math.max(8, sport8.size))}`;
      let drage = largesoundX.length >= 6217880;
      do {
          let promotionR = String.fromCharCode(108,122,111,120,95,121,95,50,53,0);
          let gmailh = 3;
          let scorepopsoundU = 3;
         largesoundX = [gmailh ^ 2];
         promotionR += `${scorepopsoundU}`;
         gmailh <<= Math.min(Math.abs(3), 3);
         scorepopsoundU >>= Math.min(4, Math.abs(scorepopsoundU >> (Math.min(promotionR.length, 3))));
         if (drage) {
            break;
         }
      } while (drage && (5 < (largesoundX.length >> (Math.min(Math.abs(1), 3)))));
       let defaultprofilepicg: Array<any> = [String.fromCharCode(109,95,50,50,95,112,114,101,115,101,110,116,97,98,108,101,0), String.fromCharCode(110,95,56,50,95,100,117,97,108,105,110,112,117,116,0), String.fromCharCode(109,95,56,52,95,105,110,99,114,98,108,111,98,0)];
       let bellu: Array<any> = [648, 35, 529];
         largesoundX.push((singaporem == String.fromCharCode(82,0) ? singaporem.length : defaultprofilepicg.length));
      for (let b = 0; b < 1; b++) {
         defaultprofilepicg = [bellu.length | largesoundX.length];
      }
       let bingI = String.fromCharCode(116,104,114,101,97,100,115,97,102,101,95,121,95,57,57,0);
      let libreactnativeblobb = defaultprofilepicg.length <= 6280346;
      do {
         defaultprofilepicg.push(largesoundX.length);
         if (libreactnativeblobb) {
            break;
         }
      } while ((defaultprofilepicg.length < parseInt(`${libreact8}`)) && libreactnativeblobb);
      while (5 < (bingI.length ^ 1)) {
         largesoundX.push(parseInt(`${libreact8}`) ^ sport8.size);
         break;
      }
       let scrollviewS: Map<any, any> = new Map([[String.fromCharCode(101,110,113,117,101,117,101,95,57,95,54,55,0),45], [String.fromCharCode(116,114,117,101,104,100,95,100,95,55,52,0),67]]);
      for (let m = 0; m < 2; m++) {
         bellu.push(sport8.size);
      }
         scrollviewS = new Map([[`${sport8.size}`, 1]]);
         bellu.push(singaporem.length + bingI.length);
      baiduu = new Map([[`${baiduu.size}`, baiduu.size / 2]]);
   }
       let shirt7 = 4;
      if (shirt7 <= 2) {
         shirt7 /= Math.max(shirt7 ^ shirt7, 2);
      }
      while ((shirt7 % 5) == 3) {
         shirt7 &= 1;
         break;
      }
          let reactnativejsu = String.fromCharCode(114,95,53,54,95,114,97,108,102,100,97,116,97,0);
         shirt7 &= 1;
         reactnativejsu = `${1 & reactnativejsu.length}`;
      privilegen += "1";
                        setMiniVodUrl(currentVod.ads_pic)
                    }
                } else {

      specX = [2 * parseInt(`${libflipperf}`)];
   if ((edita | 2) > 3 || 4 > (2 | spinnerI.length)) {
       let scheduleG = 5;
         scheduleG *= 3;
          let basketballicon0 = String.fromCharCode(111,95,54,57,95,102,114,111,109,0);
          let libavutil9: Array<any> = [213, 0, 383];
         scheduleG >>= Math.min(2, Math.abs(libavutil9.length * 1));
         basketballicon0 = `${basketballicon0.length}`;
         libavutil9 = [basketballicon0.length + 3];
      let basketballhometeamK = 5116105 <= scheduleG;
      do {
          let application7: Array<any> = [String.fromCharCode(120,95,50,48,95,109,111,114,101,0), String.fromCharCode(102,95,50,51,95,98,101,97,116,105,110,103,0), String.fromCharCode(109,106,112,101,103,101,110,99,95,100,95,50,55,0)];
          let bgvipxvod5: Map<any, any> = new Map([[String.fromCharCode(114,97,110,103,101,115,95,51,95,52,54,0),75], [String.fromCharCode(116,111,97,115,116,95,107,95,50,54,0),313], [String.fromCharCode(111,118,112,97,103,101,95,98,95,56,55,0),382]]);
          let action8 = 0.0;
         scheduleG += 1 & application7.length;
         application7 = [bgvipxvod5.size];
         bgvipxvod5.set(`${action8}`, bgvipxvod5.size);
         action8 /= Math.max(3, bgvipxvod5.size);
         if (basketballhometeamK) {
            break;
         }
      } while (basketballhometeamK && (3 == (5 * scheduleG) || 5 == (scheduleG * scheduleG)));
      spinnerI = `${spinnerI.length}`;
   }
                    

       let inviteu = String.fromCharCode(112,114,101,100,101,99,101,115,115,111,114,95,116,95,51,50,0);
       let with_wtj = 0;
      let mapping4 = 5443402 <= with_wtj;
      do {
         with_wtj &= 2;
         if (mapping4) {
            break;
         }
      } while (mapping4 && (4 >= (inviteu.length ^ 1)));
      let iconclosewhitewithbgH = String.fromCharCode(99,100,101,54,110,119,105,101,112,0) == inviteu;
      do {
         inviteu = "3";
         if (iconclosewhitewithbgH) {
            break;
         }
      } while (iconclosewhitewithbgH && ((inviteu.length << (Math.min(5, Math.abs(with_wtj)))) < 4));
      while (inviteu.includes(`${with_wtj}`)) {
         inviteu = `${with_wtj * inviteu.length}`;
         break;
      }
      let libimagepipelineH = with_wtj <= 9857473;
      do {
         with_wtj %= Math.max(2, 3 | with_wtj);
         if (libimagepipelineH) {
            break;
         }
      } while (libimagepipelineH && (2 < (with_wtj + 3) || (3 + inviteu.length) < 3));
      let formc = with_wtj <= 8230076;
      do {
         with_wtj &= 3 & inviteu.length;
         if (formc) {
            break;
         }
      } while (formc && (5 > with_wtj));
          let emojib = 2.0;
          let liveQ = true;
         inviteu = `${1 & inviteu.length}`;
         emojib *= parseFloat(`${1}`);
         liveQ = 27.50 < emojib;
      privilegen += `${with_wtj}`;
      specX = [inactiveM.length ^ 1];
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
       let matchinactiveT: Map<any, any> = new Map([[String.fromCharCode(97,108,98,117,109,95,103,95,57,52,0),true ], [String.fromCharCode(102,97,115,116,115,115,105,109,95,120,95,49,48,0),false ], [String.fromCharCode(98,105,111,109,101,116,114,105,99,115,95,108,95,55,51,0),false ]]);
    let gray2: Map<any, any> = new Map([[String.fromCharCode(106,95,50,48,95,105,110,118,105,115,105,98,108,101,0),796], [String.fromCharCode(99,111,109,109,117,110,105,99,97,116,111,114,95,121,95,53,56,0),129]]);
    let routerd = false;
    let video3 = false;
    let phoneshareo = 3;
    let transferI = String.fromCharCode(103,95,50,51,95,97,114,103,0);
    let anytime3: Map<any, any> = new Map([[String.fromCharCode(108,95,57,56,95,116,101,109,112,115,0),492], [String.fromCharCode(108,105,110,107,101,100,95,121,95,49,55,0),147], [String.fromCharCode(97,108,112,104,97,95,114,95,54,52,0),228]]);
    let assetsi = 3;
    let serviceN = String.fromCharCode(99,97,112,105,116,97,108,115,95,111,95,53,53,0);
    let register_e96 = String.fromCharCode(103,97,116,104,101,114,95,97,95,53,51,0);
    let tempnodatagifK = 5.0;
    let logoutE = String.fromCharCode(97,102,116,101,114,95,99,95,55,54,0);
    let videocommonr: Array<any> = [String.fromCharCode(99,97,116,101,103,111,114,105,115,101,100,95,50,95,50,0), String.fromCharCode(111,102,102,115,101,116,115,95,120,95,54,53,0)];
    let stationS = 1.0;
    let iconbackwhiteR = String.fromCharCode(116,95,53,52,95,112,114,101,99,0);
      phoneshareo <<= Math.min(5, Math.abs(anytime3.size));
   while (3 < assetsi) {
       let subinP = String.fromCharCode(108,111,110,103,95,119,95,49,49,0);
         subinP = `${subinP.length}`;
      if (subinP.length < subinP.length) {
         subinP += `${subinP.length / (Math.max(2, subinP.length))}`;
      }
         subinP = `${(String.fromCharCode(108,0) == subinP ? subinP.length : subinP.length)}`;
      transferI += `${(String.fromCharCode(121,0) == transferI ? phoneshareo : transferI.length)}`;
      break;
   }
   while (4.54 > (tempnodatagifK + 3.19)) {
      tempnodatagifK /= Math.max(parseFloat(`${parseInt(`${tempnodatagifK}`) | 3}`), 5);
      break;
   }
   let sourceP = gray2.size <= 6309589;
   do {
      gray2 = new Map([[`${anytime3.size}`, matchinactiveT.size - anytime3.size]]);
      if (sourceP) {
         break;
      }
   } while (sourceP && (gray2.size < 1 && 3 < (1 / (Math.max(1, gray2.size)))));
      serviceN += `${(gray2.size * (routerd ? 1 : 1))}`;
      routerd = transferI.length < 64 && !routerd;
       let kleviny = 0.0;
         kleviny -= parseFloat(`${parseInt(`${kleviny}`)}`);
      for (let o = 0; o < 1; o++) {
         kleviny /= Math.max(2, parseFloat(`${parseInt(`${kleviny}`) % 2}`));
      }
         kleviny *= parseFloat(`${parseInt(`${kleviny}`) & parseInt(`${kleviny}`)}`);
      video3 = 89 <= register_e96.length;
   let hejih = 6753427 >= assetsi;
   do {
       let gifgoalbgZ = 1;
       let userJ = 0.0;
       let final_s7 = 0;
         final_s7 <<= Math.min(Math.abs(parseInt(`${userJ}`) / 3), 3);
      if (3 > (gifgoalbgZ % 1)) {
         gifgoalbgZ -= 1;
      }
      if (4.100 <= (userJ + final_s7) && (5 | final_s7) <= 2) {
          let yellowredcardH = String.fromCharCode(110,95,55,53,95,115,101,97,114,99,104,101,100,0);
         final_s7 &= 3;
         yellowredcardH += `${(String.fromCharCode(83,0) == yellowredcardH ? yellowredcardH.length : yellowredcardH.length)}`;
      }
      if ((5.62 - userJ) < 5.12 && (userJ - final_s7) < 5.62) {
         userJ *= parseInt(`${userJ}`);
      }
      while (gifgoalbgZ == userJ) {
          let overlay_ = false;
          let reactnavigationy: Map<any, any> = new Map([[String.fromCharCode(113,95,57,54,95,104,100,114,115,0),715], [String.fromCharCode(98,108,117,114,114,101,100,95,99,95,49,0),304]]);
          let baiduA = String.fromCharCode(101,120,116,110,95,52,95,51,50,0);
         userJ /= Math.max((String.fromCharCode(54,0) == baiduA ? parseInt(`${userJ}`) : baiduA.length), 2);
         overlay_ = reactnavigationy.get(`${overlay_}`) == null;
         reactnavigationy = new Map([[`${reactnavigationy.size}`, ((overlay_ ? 3 : 3) | 3)]]);
         break;
      }
      if ((userJ + gifgoalbgZ) == 2.93) {
         gifgoalbgZ |= 1 / (Math.max(parseInt(`${userJ}`), 8));
      }
         final_s7 ^= 3 & parseInt(`${userJ}`);
      if ((gifgoalbgZ / 5) == 5) {
         userJ *= parseInt(`${userJ}`);
      }
      for (let h = 0; h < 2; h++) {
          let basketballtrophyS = String.fromCharCode(112,101,114,115,111,110,95,117,95,51,51,0);
          let modal6 = String.fromCharCode(99,95,51,48,95,102,114,97,103,109,101,110,116,115,0);
          let statisticsactive5 = String.fromCharCode(109,115,101,112,115,110,114,95,56,95,51,55,0);
         userJ /= Math.max(5, (String.fromCharCode(117,0) == modal6 ? modal6.length : gifgoalbgZ));
         basketballtrophyS += `${basketballtrophyS.length & statisticsactive5.length}`;
         statisticsactive5 = `${basketballtrophyS.length << (Math.min(statisticsactive5.length, 1))}`;
      }
      assetsi -= (parseInt(`${userJ}`) >> (Math.min(3, Math.abs((routerd ? 5 : 1)))));
      if (hejih) {
         break;
      }
   } while (hejih && (!Array.from(gray2.values()).includes(assetsi)));
      gray2 = new Map([[`${assetsi}`, 3]]);
   if (transferI.length < 3) {
      matchinactiveT.set(logoutE, 2);
   }
   if (1 > (4 ^ gray2.size) && 3 > (4 ^ gray2.size)) {
      phoneshareo /= Math.max(5, (logoutE == String.fromCharCode(70,0) ? anytime3.size : logoutE.length));
   }
      routerd = 92 < logoutE.length;
       let vipsportm = 2;
       let statisticsactiveT = true;
         vipsportm %= Math.max(3, 3 % (Math.max(vipsportm, 5)));
          let g_unlockD: Map<any, any> = new Map([[String.fromCharCode(117,110,98,111,110,100,101,100,95,120,95,55,49,0),52], [String.fromCharCode(113,95,53,54,95,114,99,118,100,0),537], [String.fromCharCode(98,95,54,57,95,102,114,101,101,102,111,114,109,0),730]]);
          let dplusA = 5.0;
          let emptyF = 3;
         statisticsactiveT = !statisticsactiveT;
         g_unlockD = new Map([[`${g_unlockD.size}`, g_unlockD.size | emptyF]]);
         dplusA *= 2;
         emptyF *= 3;
      while (3 == (vipsportm / 2)) {
         vipsportm /= Math.max(1, 4);
         break;
      }
      while (!statisticsactiveT) {
         statisticsactiveT = vipsportm > 98;
         break;
      }
       let adultn = String.fromCharCode(121,95,53,57,95,97,108,97,114,109,0);
      if (1 <= vipsportm) {
          let anytimeA = 5.0;
          let appsK = String.fromCharCode(111,99,116,101,116,115,95,106,95,49,53,0);
         vipsportm %= Math.max(4, appsK.length);
         anytimeA /= Math.max(5, parseFloat(`${parseInt(`${anytimeA}`)}`));
         appsK += `${parseInt(`${anytimeA}`) ^ parseInt(`${anytimeA}`)}`;
      }
      videocommonr.push((matchinactiveT.size + (video3 ? 5 : 5)));
   while ((matchinactiveT.size + phoneshareo) >= 4 && (phoneshareo + matchinactiveT.size) >= 4) {
      matchinactiveT.set(`${logoutE}`, (String.fromCharCode(48,0) == logoutE ? logoutE.length : gray2.size));
      break;
   }
   for (let j = 0; j < 3; j++) {
      videocommonr.push(3);
   }
   for (let k = 0; k < 1; k++) {
      transferI += `${((video3 ? 4 : 5))}`;
   }
   let popupg = gray2.size <= 9115732;
   do {
      gray2 = new Map([[`${matchinactiveT.size}`, assetsi << (Math.min(Math.abs(2), 3))]]);
      if (popupg) {
         break;
      }
   } while (popupg && (2 >= (transferI.length << (Math.min(2, Math.abs(gray2.size)))) || (transferI.length << (Math.min(Math.abs(2), 1))) >= 1));
      serviceN += `${3 & parseInt(`${tempnodatagifK}`)}`;

        setVideoReadyIos(true)

       let privatechatbgw = String.fromCharCode(112,95,52,57,95,99,111,109,112,108,101,116,105,111,110,115,0);
       let bottom5 = String.fromCharCode(115,105,108,101,110,99,101,100,95,109,95,57,48,0);
          let iconwatchnow1: Array<any> = [856, 994];
          let scorepopsound7 = String.fromCharCode(97,115,121,110,99,95,99,95,52,49,0);
          let thailandR = 1.0;
         bottom5 = `${privatechatbgw.length}`;
         iconwatchnow1 = [parseInt(`${thailandR}`)];
         scorepopsound7 += `${3 % (Math.max(2, iconwatchnow1.length))}`;
         thailandR /= Math.max(scorepopsound7.length ^ 2, 4);
         bottom5 = "3";
          let favoriteX: Array<any> = [835, 222];
          let mapbuffern = 1;
          let debugP = String.fromCharCode(111,118,101,114,115,99,114,111,108,108,95,115,95,56,0);
         bottom5 = `${privatechatbgw.length * 3}`;
         favoriteX = [mapbuffern % (Math.max(debugP.length, 6))];
         mapbuffern -= mapbuffern;
         debugP = `${mapbuffern}`;
      while (privatechatbgw.length > bottom5.length) {
          let listK: Array<any> = [702, 455, 596];
          let downloadingV = String.fromCharCode(104,95,50,95,114,101,97,112,101,114,0);
          let downo = String.fromCharCode(97,117,103,109,101,110,116,95,98,95,56,52,0);
         privatechatbgw = `${(String.fromCharCode(118,0) == privatechatbgw ? privatechatbgw.length : downloadingV.length)}`;
         listK.push(downo.length);
         downloadingV += `${(downo == String.fromCharCode(117,0) ? downo.length : listK.length)}`;
         break;
      }
         bottom5 = "3";
          let iconviewerN = 0;
         privatechatbgw += `${(privatechatbgw == String.fromCharCode(88,0) ? iconviewerN : privatechatbgw.length)}`;
      video3 = videocommonr.includes(phoneshareo);
       let iconuser6 = String.fromCharCode(108,105,115,116,105,110,103,115,95,102,95,57,51,0);
      if (iconuser6 != iconuser6) {
         iconuser6 += `${(String.fromCharCode(52,0) == iconuser6 ? iconuser6.length : iconuser6.length)}`;
      }
         iconuser6 += `${iconuser6.length + iconuser6.length}`;
      let tempnodatay = String.fromCharCode(110,56,101,97,0) == iconuser6;
      do {
         iconuser6 = `${iconuser6.length & 2}`;
         if (tempnodatay) {
            break;
         }
      } while ((iconuser6 != iconuser6) && tempnodatay);
      transferI = `${assetsi & 3}`;
      transferI = "1";
      register_e96 += `${anytime3.size}`;
       let stationZ: Map<any, any> = new Map([[String.fromCharCode(113,95,51,57,95,106,97,99,107,0),297], [String.fromCharCode(112,95,52,50,95,100,111,117,98,108,101,0),70], [String.fromCharCode(104,95,49,48,48,95,122,98,117,102,0),976]]);
      for (let n = 0; n < 3; n++) {
         stationZ = new Map([[`${stationZ.size}`, stationZ.size]]);
      }
         stationZ.set(`${stationZ.size}`, stationZ.size / (Math.max(stationZ.size, 5)));
       let utilsW = 4.0;
       let privilege9 = 5.0;
      tempnodatagifK -= parseFloat(`${gray2.size}`);
   for (let h = 0; h < 1; h++) {
       let awayicon0 = 4.0;
       let snewarchdefaultsm = String.fromCharCode(101,95,57,54,95,101,120,101,99,117,116,111,114,0);
       let matchinactiveb = false;
       let productV = String.fromCharCode(98,108,111,98,95,56,95,56,56,0);
      let libjsim = 8942388 >= productV.length;
      do {
         productV += `${((matchinactiveb ? 4 : 2) / (Math.max(snewarchdefaultsm.length, 1)))}`;
         if (libjsim) {
            break;
         }
      } while ((snewarchdefaultsm != productV) && libjsim);
      let dropdownv = matchinactiveb ? !matchinactiveb : matchinactiveb;
      do {
         matchinactiveb = productV.length < snewarchdefaultsm.length;
         if (dropdownv) {
            break;
         }
      } while ((!matchinactiveb) && dropdownv);
         productV = "3";
         awayicon0 += (parseFloat(`${snewarchdefaultsm == String.fromCharCode(100,0) ? (matchinactiveb ? 1 : 5) : snewarchdefaultsm.length}`));
          let foregroundg = 5.0;
          let libtanp: Map<any, any> = new Map([[String.fromCharCode(120,95,49,51,95,113,117,97,100,115,0),String.fromCharCode(112,95,56,48,95,103,101,110,101,114,97,116,101,0)], [String.fromCharCode(105,95,55,50,95,113,115,118,100,101,99,0),String.fromCharCode(99,111,110,116,105,103,117,111,117,115,95,104,95,54,0)]]);
          let whiteanimationliveu: Array<any> = [String.fromCharCode(108,95,49,50,95,102,108,97,99,0), String.fromCharCode(106,95,53,95,99,104,111,112,0)];
         productV += `${(parseInt(`${awayicon0}`) | (matchinactiveb ? 1 : 5))}`;
         foregroundg += parseFloat(`${1}`);
         libtanp = new Map([[`${libtanp.size}`, 3]]);
         whiteanimationliveu = [parseInt(`${foregroundg}`) + libtanp.size];
      if (productV.endsWith(`${matchinactiveb}`)) {
         productV += "1";
      }
       let libpangleflippedZ: Array<any> = [String.fromCharCode(97,95,56,57,95,114,101,97,100,108,110,0), String.fromCharCode(114,101,110,97,109,101,95,52,95,56,52,0)];
       let package_w1b: Array<any> = [303, 599, 44];
       let g_centerf = 3.0;
       let contextv = 5.0;
      for (let x = 0; x < 1; x++) {
         g_centerf /= Math.max(5, productV.length % 2);
      }
         snewarchdefaultsm = `${2 & parseInt(`${awayicon0}`)}`;
         g_centerf += productV.length % 2;
         snewarchdefaultsm = `${productV.length - 1}`;
      transferI += `${assetsi % (Math.max(8, productV.length))}`;
   }
   let statisticsm = 6164325 <= anytime3.size;
   do {
       let mbjscommoni = String.fromCharCode(106,95,51,48,95,110,117,109,98,105,116,115,0);
       let telemetryy: Array<any> = [912, 955, 985];
       let login_ = String.fromCharCode(115,97,110,101,95,99,95,49,53,0);
       let single2: Array<any> = [71, 480];
       let episodes2 = String.fromCharCode(103,114,101,103,111,114,105,97,110,95,113,95,51,48,0);
          let indext = String.fromCharCode(109,95,52,57,95,112,97,116,116,101,114,110,0);
         episodes2 += `${telemetryy.length}`;
         indext += "1";
      let saveb = 8126732 <= mbjscommoni.length;
      do {
         mbjscommoni = `${(String.fromCharCode(110,0) == login_ ? login_.length : single2.length)}`;
         if (saveb) {
            break;
         }
      } while (((mbjscommoni.length + 3) <= 5 && 2 <= (3 + mbjscommoni.length)) && saveb);
          let mountingP = 0;
          let videoc = 3.0;
          let qnewinterstitialc: Map<any, any> = new Map([[String.fromCharCode(105,95,53,54,95,101,122,111,115,0),61], [String.fromCharCode(112,114,101,98,117,102,95,112,95,48,0),617], [String.fromCharCode(97,95,53,53,95,98,105,116,115,116,114,101,97,109,0),198]]);
         single2.push(telemetryy.length / 2);
         mountingP -= 2;
         videoc /= Math.max(parseFloat(`${3 >> (Math.min(5, Math.abs(mountingP)))}`), 1);
         qnewinterstitialc = new Map([[`${mountingP}`, 2]]);
          let condensedm: Map<any, any> = new Map([[String.fromCharCode(110,111,98,111,100,121,95,112,95,56,57,0),689], [String.fromCharCode(105,114,99,97,109,95,48,95,53,56,0),152]]);
          let iconarrowleft1 = String.fromCharCode(112,114,101,116,101,110,100,95,108,95,52,56,0);
          let attributedstringx = 5.0;
         episodes2 = `${2 / (Math.max(4, condensedm.size))}`;
         condensedm = new Map([[`${attributedstringx}`, (String.fromCharCode(114,0) == iconarrowleft1 ? iconarrowleft1.length : parseInt(`${attributedstringx}`))]]);
         mbjscommoni = `${single2.length >> (Math.min(episodes2.length, 3))}`;
      for (let q = 0; q < 1; q++) {
         episodes2 = `${(login_ == String.fromCharCode(78,0) ? login_.length : episodes2.length)}`;
      }
         telemetryy.push(3);
      if (4 < (4 * login_.length) || (4 * single2.length) < 3) {
         login_ += "2";
      }
      let gestureW = 6875463 <= single2.length;
      do {
          let appsn: Map<any, any> = new Map([[String.fromCharCode(99,111,101,102,102,105,99,105,101,110,116,115,95,112,95,52,49,0),796], [String.fromCharCode(100,101,114,105,118,101,100,95,54,95,54,49,0),268]]);
         single2 = [appsn.size % (Math.max(3, 7))];
         if (gestureW) {
            break;
         }
      } while ((mbjscommoni.length < 3) && gestureW);
          let roboto3 = true;
          let xvodC = String.fromCharCode(121,95,51,57,95,101,120,99,108,117,100,101,115,0);
          let encryptx: Map<any, any> = new Map([[String.fromCharCode(111,119,110,95,50,95,56,56,0),String.fromCharCode(116,95,55,56,95,112,101,114,102,111,114,109,0)], [String.fromCharCode(112,95,50,56,95,115,99,114,101,101,110,115,0),String.fromCharCode(99,95,56,52,95,110,111,114,109,97,108,105,122,97,116,105,111,110,0)]]);
         mbjscommoni += `${login_.length}`;
         roboto3 = encryptx.size > xvodC.length;
         xvodC += `${3 ^ xvodC.length}`;
         encryptx.set(`${xvodC}`, xvodC.length ^ encryptx.size);
          let libcxxcomponentsy = 2.0;
          let mbnativeH = String.fromCharCode(109,95,55,50,0);
         single2 = [2 % (Math.max(parseInt(`${libcxxcomponentsy}`), 1))];
         libcxxcomponentsy /= Math.max(2, 3 % (Math.max(10, mbnativeH.length)));
         mbnativeH = `${mbnativeH.length * mbnativeH.length}`;
          let defaultpredictionprofilez: Array<any> = [12, 986, 711];
          let iconsettingp = String.fromCharCode(104,95,49,95,99,108,97,117,115,101,115,0);
         mbjscommoni = `${single2.length / (Math.max(login_.length, 1))}`;
         defaultpredictionprofilez.push((String.fromCharCode(90,0) == iconsettingp ? iconsettingp.length : defaultpredictionprofilez.length));
      let bggradientN = mbjscommoni == String.fromCharCode(99,107,95,117,108,99,104,0);
      do {
         mbjscommoni = `${1 << (Math.min(2, telemetryy.length))}`;
         if (bggradientN) {
            break;
         }
      } while ((mbjscommoni.length == episodes2.length) && bggradientN);
      if (mbjscommoni.endsWith(login_)) {
         mbjscommoni += `${single2.length * 1}`;
      }
      if (!login_.includes(`${single2.length}`)) {
          let episode_ = String.fromCharCode(114,95,50,0);
         login_ = `${episode_.length & mbjscommoni.length}`;
      }
      anytime3.set(serviceN, anytime3.size);
      if (statisticsm) {
         break;
      }
   } while ((anytime3.size < 2) && statisticsm);
      logoutE += `${(3 / (Math.max(7, (video3 ? 4 : 2))))}`;
   let listKp = transferI == String.fromCharCode(98,56,111,0);
   do {
      transferI = `${transferI.length}`;
      if (listKp) {
         break;
      }
   } while (listKp && (transferI.length <= 4));
       let verticalj = String.fromCharCode(115,117,112,112,111,114,116,97,98,108,101,95,110,95,57,52,0);
       let empty8 = true;
      let current0 = empty8 ? !empty8 : empty8;
      do {
         empty8 = verticalj.length > 98;
         if (current0) {
            break;
         }
      } while ((!verticalj.endsWith(`${empty8}`)) && current0);
      for (let e = 0; e < 1; e++) {
         empty8 = verticalj.endsWith(`${empty8}`);
      }
       let redcirclebgJ = String.fromCharCode(115,101,109,105,99,111,108,111,110,95,103,95,53,49,0);
       let goalx = String.fromCharCode(99,97,110,99,101,108,97,116,105,111,110,95,111,95,57,50,0);
      while (redcirclebgJ.length == goalx.length) {
         redcirclebgJ += `${(String.fromCharCode(121,0) == verticalj ? verticalj.length : redcirclebgJ.length)}`;
         break;
      }
         verticalj += `${((empty8 ? 5 : 4))}`;
          let sentry4 = 4.0;
         verticalj = `${verticalj.length}`;
         sentry4 += parseFloat(`${2 + parseInt(`${sentry4}`)}`);
      phoneshareo += ((routerd ? 5 : 3));
   for (let c = 0; c < 2; c++) {
       let iconstar2 = true;
       let bgvipxvodu = 0.0;
      let skipE = iconstar2 ? !iconstar2 : iconstar2;
      do {
          let awayiconR = 4.0;
          let eighteen2: Map<any, any> = new Map([[String.fromCharCode(112,97,114,115,101,95,105,95,49,50,0),String.fromCharCode(101,95,57,56,95,109,97,107,101,100,112,107,103,0)], [String.fromCharCode(115,101,113,110,111,95,107,95,54,54,0),String.fromCharCode(114,95,52,49,95,112,99,98,105,110,102,111,0)]]);
         iconstar2 = awayiconR <= 62.51;
         awayiconR *= parseFloat(`${eighteen2.size - 1}`);
         eighteen2.set(`${eighteen2.size}`, eighteen2.size);
         if (skipE) {
            break;
         }
      } while (skipE && ((3.54 - bgvipxvodu) <= 2.47 && bgvipxvodu <= 3.54));
         bgvipxvodu -= parseFloat(`${2 % (Math.max(parseInt(`${bgvipxvodu}`), 2))}`);
      for (let s = 0; s < 1; s++) {
         iconstar2 = !iconstar2;
      }
         iconstar2 = !iconstar2;
         iconstar2 = !iconstar2;
       let scrollview1 = String.fromCharCode(115,101,116,116,105,116,108,101,95,122,95,57,50,0);
      routerd = register_e96.length == 24;
   }
   let playf = 7165600 <= anytime3.size;
   do {
       let dice4 = String.fromCharCode(102,101,97,116,117,114,101,95,51,95,50,0);
       let regeng_ = 3.0;
       let targetS = String.fromCharCode(111,95,52,49,95,114,101,115,116,111,114,97,116,105,111,110,0);
       let default_xC: Array<any> = [String.fromCharCode(105,112,97,100,105,102,102,95,100,95,49,52,0), String.fromCharCode(101,120,112,108,105,99,105,116,101,108,121,95,115,95,49,48,0)];
       let binddatasv = String.fromCharCode(99,101,110,116,101,114,101,100,95,121,95,57,51,0);
      while (2.76 >= (regeng_ + 2.99) && (parseInt(`${regeng_}`) + 3) >= 2) {
         targetS += `${2 << (Math.min(3, binddatasv.length))}`;
         break;
      }
      while (targetS.length >= dice4.length) {
          let remindern = false;
          let verticalB: Map<any, any> = new Map([[String.fromCharCode(115,116,109,116,95,102,95,50,52,0),String.fromCharCode(107,95,56,50,95,99,111,109,109,105,116,116,101,114,0)], [String.fromCharCode(117,110,100,101,102,105,110,101,100,95,53,95,51,0),String.fromCharCode(121,95,56,51,95,118,101,110,117,101,0)], [String.fromCharCode(109,106,112,101,103,101,110,99,95,115,95,56,55,0),String.fromCharCode(112,97,114,97,109,101,116,114,105,122,101,100,95,119,95,49,54,0)]]);
          let fillq = 3.0;
          let imageactionlivej: Map<any, any> = new Map([[String.fromCharCode(112,97,112,101,114,115,95,106,95,51,57,0),true ], [String.fromCharCode(116,116,97,99,104,109,101,110,116,95,105,95,54,48,0),false ]]);
         targetS += `${imageactionlivej.size % (Math.max(1, 3))}`;
         remindern = null == verticalB.get(`${remindern}`);
         verticalB = new Map([[`${verticalB.size}`, (1 - (remindern ? 1 : 2))]]);
         fillq -= (3 - (remindern ? 2 : 2));
         imageactionlivej.set(`${remindern}`, 1 - parseInt(`${fillq}`));
         break;
      }
      while (dice4.length < binddatasv.length) {
         dice4 += `${1 % (Math.max(1, targetS.length))}`;
         break;
      }
          let arrowup8 = 3;
          let cast0 = String.fromCharCode(121,95,55,50,95,103,114,97,98,98,101,114,0);
         default_xC = [dice4.length << (Math.min(targetS.length, 2))];
         arrowup8 *= cast0.length - 1;
         cast0 = `${arrowup8}`;
         binddatasv += `${2 * default_xC.length}`;
          let action2 = String.fromCharCode(111,95,54,51,95,100,101,116,97,105,108,101,100,0);
          let bellW = String.fromCharCode(115,105,110,101,115,95,55,95,55,54,0);
          let foundJ: Map<any, any> = new Map([[String.fromCharCode(114,101,112,108,97,121,101,114,95,99,95,51,54,0),264], [String.fromCharCode(112,114,101,101,110,99,111,100,101,95,105,95,49,48,48,0),729], [String.fromCharCode(98,95,53,57,95,100,101,110,111,105,115,101,114,0),240]]);
         binddatasv = "3";
         action2 += `${bellW.length + action2.length}`;
         bellW = `${(String.fromCharCode(50,0) == bellW ? foundJ.size : bellW.length)}`;
         foundJ.set(bellW, (String.fromCharCode(118,0) == bellW ? bellW.length : action2.length));
      if ((parseFloat(`${targetS.length}`) * regeng_) <= 5.61) {
          let xadsdkK = 3.0;
         regeng_ /= Math.max(parseFloat(`${2}`), 5);
         xadsdkK *= parseInt(`${xadsdkK}`) / 3;
      }
      for (let v = 0; v < 3; v++) {
          let brightnessL = String.fromCharCode(111,95,50,54,95,102,108,97,116,110,101,115,115,0);
          let shielddone9 = 2.0;
          let logoutb = String.fromCharCode(105,100,102,118,95,116,95,55,50,0);
          let component8: Array<any> = [String.fromCharCode(102,111,114,103,111,116,116,101,110,95,55,95,56,51,0), String.fromCharCode(108,95,53,57,95,105,112,97,100,100,0), String.fromCharCode(97,95,49,57,95,114,101,105,115,115,117,101,0)];
         targetS = `${3 * parseInt(`${shielddone9}`)}`;
         brightnessL += "2";
         shielddone9 -= brightnessL.length;
         logoutb += `${component8.length >> (Math.min(logoutb.length, 2))}`;
         component8 = [brightnessL.length << (Math.min(logoutb.length, 5))];
      }
         regeng_ *= parseFloat(`${2}`);
          let backwhitez = 2.0;
          let vignetteP = String.fromCharCode(110,97,116,117,114,97,108,95,51,95,52,53,0);
         regeng_ *= (parseFloat(`${String.fromCharCode(107,0) == binddatasv ? parseInt(`${regeng_}`) : binddatasv.length}`));
         backwhitez /= Math.max(2, parseFloat(`${1 % (Math.max(7, parseInt(`${backwhitez}`)))}`));
         vignetteP += "2";
         dice4 += `${(targetS == String.fromCharCode(51,0) ? default_xC.length : targetS.length)}`;
      let p_managerc = 8730027.0 <= regeng_;
      do {
         regeng_ += parseFloat(`${2}`);
         if (p_managerc) {
            break;
         }
      } while (p_managerc && ((3 + default_xC.length) == 4));
         default_xC.push(binddatasv.length);
       let redgoalb = 3;
       let assets8 = 2;
      while (3 < (parseInt(`${regeng_}`) / 1) && (parseFloat(`${dice4.length}`) / (Math.max(7, regeng_))) < 4.46) {
         regeng_ /= Math.max(1, parseFloat(`${default_xC.length}`));
         break;
      }
      anytime3.set(register_e96, dice4.length - register_e96.length);
      if (playf) {
         break;
      }
   } while (playf && (anytime3.get(`${assetsi}`) != null));
   let codegenT = 6210513 <= register_e96.length;
   do {
      register_e96 = `${gray2.size}`;
      if (codegenT) {
         break;
      }
   } while (codegenT && ((matchinactiveT.size >> (Math.min(Math.abs(1), 5))) <= 4));
   while ((logoutE.length / (Math.max(10, gray2.size))) == 2) {
      logoutE += `${matchinactiveT.size}`;
      break;
   }
   for (let n = 0; n < 2; n++) {
      matchinactiveT.set(`${routerd}`, (2 ^ (routerd ? 1 : 5)));
   }
   for (let o = 0; o < 1; o++) {
      logoutE = "3";
   }
      logoutE = `${1 >> (Math.min(5, register_e96.length))}`;
      assetsi *= parseInt(`${stationS}`);
        setVideoReadyAndroid(true)
    }, []);

    const onAdsBtnPress = () => {
       let privacyF = 1.0;
    let homeloadingM = true;
    let yellowanimationliveP: Map<any, any> = new Map([[String.fromCharCode(122,101,114,111,98,108,111,98,95,48,95,51,54,0),970], [String.fromCharCode(97,95,57,95,99,97,114,114,105,101,114,0),540], [String.fromCharCode(114,95,56,57,95,116,97,110,0),286]]);
    let dropdownW = String.fromCharCode(99,95,55,50,95,120,102,111,114,109,101,100,0);
    let jingdongl = 4.0;
    let bell0 = 1;
    let sharewhite6 = 2.0;
    let kuaishoue = true;
    let ajaxu = String.fromCharCode(115,117,98,109,118,95,48,95,49,54,0);
    let assetsW = String.fromCharCode(103,97,109,117,116,95,107,95,49,49,0);
    let control8 = String.fromCharCode(110,95,57,95,116,105,109,105,110,103,0);
    let fastO = 3.0;
    let gift0 = String.fromCharCode(106,95,56,53,95,117,110,115,101,101,110,0);
   let yellowredcardG = 7237782 <= bell0;
   do {
      bell0 <<= Math.min(parseInt(`${Math.abs((1 << (Math.min(5, Math.abs((homeloadingM ? 3 : 4))))))}`), 3);
      if (yellowredcardG) {
         break;
      }
   } while (yellowredcardG && ((1 * bell0) == 3 || (bell0 + 1) == 4));
   let privacyj = dropdownW.length <= 8020263;
   do {
       let appsA = 4;
       let iconplayq = 2.0;
       let collectionY = String.fromCharCode(116,120,116,111,98,106,95,98,95,55,49,0);
       let graph2: Map<any, any> = new Map([[String.fromCharCode(115,95,54,55,95,105,110,102,101,114,0),572], [String.fromCharCode(103,101,116,104,100,114,95,97,95,55,54,0),264], [String.fromCharCode(97,95,57,53,95,106,117,108,105,97,110,0),334]]);
       let qaagC = String.fromCharCode(109,105,103,114,97,116,101,100,95,120,95,49,50,0);
       let r_playert = String.fromCharCode(107,95,54,53,95,98,114,105,100,103,105,110,103,0);
         appsA >>= Math.min(Math.abs((String.fromCharCode(75,0) == collectionY ? parseInt(`${iconplayq}`) : collectionY.length)), 4);
       let privacys: Array<any> = [String.fromCharCode(116,119,105,99,101,95,99,95,51,53,0), String.fromCharCode(114,95,54,57,95,97,109,112,108,105,102,121,0)];
       let moreT: Array<any> = [String.fromCharCode(110,95,57,56,95,110,111,110,0), String.fromCharCode(103,95,54,55,95,99,97,108,108,0), String.fromCharCode(106,117,115,116,105,102,121,95,101,95,52,55,0)];
         privacys.push((String.fromCharCode(55,0) == qaagC ? qaagC.length : r_playert.length));
      for (let x = 0; x < 1; x++) {
         appsA *= 1;
      }
       let sinaA = String.fromCharCode(112,95,56,53,95,114,101,103,105,115,116,101,114,0);
          let floaterX = String.fromCharCode(102,95,57,55,95,112,114,105,109,97,114,121,0);
         qaagC += `${r_playert.length}`;
         floaterX += `${floaterX.length | 3}`;
         collectionY += "2";
       let videocommonO = String.fromCharCode(103,116,101,115,116,95,119,95,57,48,0);
       let dependenciess = String.fromCharCode(97,115,105,110,107,95,108,95,55,50,0);
       let soundG = String.fromCharCode(100,101,115,104,97,107,101,95,56,95,53,51,0);
      if (3 >= (3 << (Math.min(5, Math.abs(graph2.size))))) {
          let rightN: Array<any> = [810, 761, 628];
          let shareblackI = 3;
          let yings = 4;
         graph2.set(dependenciess, qaagC.length);
         rightN = [rightN.length];
         shareblackI &= yings;
         yings *= shareblackI;
      }
         privacys.push(moreT.length);
      dropdownW += `${(String.fromCharCode(69,0) == ajaxu ? ajaxu.length : collectionY.length)}`;
      if (privacyj) {
         break;
      }
   } while (privacyj && (dropdownW.includes(`${homeloadingM}`)));
       let chinaT = 3.0;
      for (let o = 0; o < 3; o++) {
         chinaT *= parseInt(`${chinaT}`) / (Math.max(5, parseInt(`${chinaT}`)));
      }
         chinaT /= Math.max(2, parseInt(`${chinaT}`) >> (Math.min(4, Math.abs(parseInt(`${chinaT}`)))));
          let suboutn = 1.0;
          let cornershoote = 2.0;
         chinaT += parseInt(`${suboutn}`);
         cornershoote -= parseInt(`${cornershoote}`) % (Math.max(parseInt(`${cornershoote}`), 7));
      privacyF *= parseInt(`${privacyF}`);

        if (!currentVod?.ads_url) {

      jingdongl -= (parseFloat(`${String.fromCharCode(71,0) == dropdownW ? parseInt(`${sharewhite6}`) : dropdownW.length}`));
   if ((3.91 * privacyF) > 1.57 && privacyF > 3.91) {
      kuaishoue = !kuaishoue || sharewhite6 < 37.32;
   }
       let skipn = 0.0;
       let jingdongh: Map<any, any> = new Map([[String.fromCharCode(103,95,49,56,95,112,114,101,112,114,111,99,101,115,115,0),180], [String.fromCharCode(103,95,51,55,95,103,101,115,116,117,114,101,0),751]]);
      while ((parseFloat(`${jingdongh.size}`) - skipn) < 3.8 && (parseFloat(`${jingdongh.size}`) - skipn) < 3.8) {
          let s_playerC = String.fromCharCode(104,101,114,101,95,121,95,49,49,0);
          let largebrightness9 = true;
          let gifgoalX = 3.0;
         jingdongh = new Map([[`${largebrightness9}`, ((largebrightness9 ? 5 : 5) + parseInt(`${gifgoalX}`))]]);
         s_playerC += `${s_playerC.length / 1}`;
         break;
      }
      let textlayoutmanagerI = jingdongh.size <= 5687613;
      do {
         jingdongh = new Map([[`${jingdongh.size}`, 1]]);
         if (textlayoutmanagerI) {
            break;
         }
      } while (((jingdongh.size / 2) > 4) && textlayoutmanagerI);
         skipn -= parseFloat(`${jingdongh.size}`);
      for (let j = 0; j < 1; j++) {
         jingdongh = new Map([[`${jingdongh.size}`, 3 ^ jingdongh.size]]);
      }
       let weather0 = String.fromCharCode(104,95,50,51,95,114,103,98,116,111,98,103,114,0);
         weather0 += `${parseInt(`${skipn}`) ^ jingdongh.size}`;
      sharewhite6 += 1;
            return;

   let uimanagerr = ajaxu.length >= 9326362;
   do {
      ajaxu = `${ajaxu.length | 1}`;
      if (uimanagerr) {
         break;
      }
   } while (uimanagerr && (homeloadingM && 1 == ajaxu.length));
      privacyF *= assetsW.length;
       let const_zp = 2.0;
       let sello = String.fromCharCode(99,95,50,52,95,105,110,116,102,105,0);
      while (1 <= (sello.length & 5)) {
          let arrowdownv = false;
         const_zp *= (3 >> (Math.min(4, Math.abs((arrowdownv ? 3 : 4)))));
         break;
      }
         sello = `${(String.fromCharCode(70,0) == sello ? parseInt(`${const_zp}`) : sello.length)}`;
         const_zp *= 2;
         sello = `${3 | sello.length}`;
          let flipperD = 3.0;
          let libavdeviceG: Array<any> = [409, 159, 541];
          let defaultprofilepice = String.fromCharCode(105,110,99,114,95,121,95,51,54,0);
         sello += `${libavdeviceG.length * sello.length}`;
         flipperD += parseInt(`${flipperD}`);
         libavdeviceG.push(2);
         defaultprofilepice += `${(String.fromCharCode(87,0) == defaultprofilepice ? parseInt(`${flipperD}`) : defaultprofilepice.length)}`;
      for (let l = 0; l < 3; l++) {
          let filedZ = String.fromCharCode(118,95,53,57,0);
          let cornershootX = 5.0;
          let inactive2: Map<any, any> = new Map([[String.fromCharCode(122,111,110,101,95,119,95,51,48,0),80], [String.fromCharCode(110,95,50,95,100,105,116,97,110,99,101,0),846], [String.fromCharCode(107,95,55,57,95,114,101,113,117,101,115,116,0),128]]);
         sello = `${parseInt(`${const_zp}`) >> (Math.min(sello.length, 2))}`;
         filedZ = `${inactive2.size}`;
         cornershootX *= filedZ.length - parseInt(`${cornershootX}`);
         inactive2.set(`${cornershootX}`, 2);
      }
      sharewhite6 /= Math.max(2, 2);
        }

        const url = currentVod?.ads_url.includes(PredictionbannersharedIconrigh.fullscreenminOverlayDefaultpro([82,78,78,74,58],0x3A,false)) ? currentVod?.ads_url : PredictionbannersharedIconrigh.fullscreenminOverlayDefaultpro([-108,-120,-120,-116,-113,-58,-45,-45,-4],0xFC,false) + currentVod?.actionUrl

        Linking.openURL(url);

   if ((privacyF / 2.22) <= 5.12) {
      homeloadingM = dropdownW.length < 19;
   }
   while (3.78 < jingdongl) {
       let imagenetworkerrb = String.fromCharCode(111,115,116,104,114,101,97,100,115,95,108,95,51,55,0);
       let iconviewerc: Array<any> = [190, 280];
       let eyeclosey = String.fromCharCode(99,108,97,117,115,101,95,97,95,52,52,0);
       let infol = String.fromCharCode(112,97,103,101,108,105,115,116,95,120,95,50,49,0);
       let libreactperfloggerjnif = 5.0;
      let arrowright5 = libreactperfloggerjnif >= 9618366.0;
      do {
          let webviewU = 5.0;
          let iconeditj = 1.0;
          let areaR = String.fromCharCode(121,95,54,56,95,114,101,103,105,115,116,101,114,0);
          let defaultroombg9 = String.fromCharCode(115,95,51,52,95,97,112,112,108,105,101,115,0);
         libreactperfloggerjnif *= parseFloat(`${eyeclosey.length >> (Math.min(2, Math.abs(parseInt(`${libreactperfloggerjnif}`))))}`);
         webviewU *= parseFloat(`${areaR.length >> (Math.min(Math.abs(2), 1))}`);
         iconeditj -= parseInt(`${webviewU}`);
         areaR = `${parseInt(`${webviewU}`)}`;
         defaultroombg9 = `${areaR.length | parseInt(`${webviewU}`)}`;
         if (arrowright5) {
            break;
         }
      } while (((4 - eyeclosey.length) == 4 && (parseFloat(`${eyeclosey.length}`) + libreactperfloggerjnif) == 4.34) && arrowright5);
         eyeclosey += `${infol.length}`;
      if (1 == (iconviewerc.length / (Math.max(imagenetworkerrb.length, 10)))) {
          let rocketX = 2.0;
          let fullZ: Array<any> = [924, 398];
         iconviewerc.push(infol.length ^ fullZ.length);
         rocketX *= parseInt(`${rocketX}`) / (Math.max(parseInt(`${rocketX}`), 7));
         fullZ.push(parseInt(`${rocketX}`) - parseInt(`${rocketX}`));
      }
          let crowna = 0;
          let textlayoutmanagerx: Map<any, any> = new Map([[String.fromCharCode(102,95,53,49,95,106,111,98,113,0),String.fromCharCode(100,95,54,95,101,120,116,114,101,109,117,109,0)], [String.fromCharCode(115,97,118,101,95,97,95,52,53,0),String.fromCharCode(100,101,112,115,95,102,95,55,0)], [String.fromCharCode(115,117,98,102,105,101,108,100,115,95,117,95,54,50,0),String.fromCharCode(106,95,51,50,95,114,101,115,116,114,105,99,116,105,111,110,115,0)]]);
          let ewardedM = String.fromCharCode(101,120,112,108,97,105,110,95,57,95,52,55,0);
         iconviewerc = [iconviewerc.length << (Math.min(Math.abs(2), 2))];
         crowna /= Math.max((ewardedM == String.fromCharCode(53,0) ? textlayoutmanagerx.size : ewardedM.length), 2);
         textlayoutmanagerx = new Map([[`${crowna}`, ewardedM.length | crowna]]);
      if ((parseInt(`${libreactperfloggerjnif}`) + eyeclosey.length) >= 3 || (libreactperfloggerjnif + 1.40) >= 4.6) {
         eyeclosey = `${eyeclosey.length}`;
      }
          let belll: Map<any, any> = new Map([[String.fromCharCode(116,111,97,115,116,95,102,95,53,57,0),993], [String.fromCharCode(116,114,97,110,115,97,99,116,105,111,110,115,95,98,95,56,56,0),939]]);
         libreactperfloggerjnif += parseFloat(`${2}`);
         belll.set(`${belll.size}`, belll.size);
      while (2.26 >= libreactperfloggerjnif) {
         imagenetworkerrb += `${eyeclosey.length}`;
         break;
      }
          let feedbackP = 5;
          let baseX = String.fromCharCode(98,95,56,51,95,101,110,99,111,100,101,109,98,0);
         libreactperfloggerjnif -= parseFloat(`${3}`);
         feedbackP <<= Math.min(2, Math.abs(feedbackP + baseX.length));
         baseX = `${(String.fromCharCode(118,0) == baseX ? feedbackP : baseX.length)}`;
          let codegeny: Array<any> = [String.fromCharCode(110,95,57,52,95,101,109,111,116,105,99,111,110,0), String.fromCharCode(101,95,50,55,95,112,115,110,114,0), String.fromCharCode(116,97,103,98,105,116,95,121,95,49,57,0)];
         libreactperfloggerjnif += (parseFloat(`${eyeclosey == String.fromCharCode(88,0) ? eyeclosey.length : iconviewerc.length}`));
         codegeny = [codegeny.length];
      while (2.50 >= (4.37 + libreactperfloggerjnif)) {
          let blackD: Map<any, any> = new Map([[String.fromCharCode(114,108,105,110,101,95,108,95,49,56,0),String.fromCharCode(98,95,55,49,95,108,111,99,97,116,101,0)], [String.fromCharCode(99,97,117,116,101,114,105,122,101,95,121,95,52,52,0),String.fromCharCode(118,95,49,50,95,99,109,100,117,116,105,108,115,0)]]);
          let currentK = String.fromCharCode(100,95,49,95,109,105,116,101,114,0);
          let bggradientM: Array<any> = [String.fromCharCode(97,108,108,101,116,95,48,95,56,53,0), String.fromCharCode(119,97,108,108,97,112,101,114,115,95,119,95,55,49,0), String.fromCharCode(114,101,119,114,105,116,101,114,95,100,95,50,52,0)];
          let n_viewz = 0;
          let securitym = 0.0;
         libreactperfloggerjnif += parseFloat(`${currentK.length}`);
         blackD.set(`${securitym}`, 1);
         currentK = `${parseInt(`${securitym}`) * 3}`;
         bggradientM.push(2);
         n_viewz <<= Math.min(3, Math.abs(blackD.size & 3));
         break;
      }
      while (!eyeclosey.includes(`${iconviewerc.length}`)) {
         eyeclosey += "3";
         break;
      }
      if (!infol.startsWith(`${libreactperfloggerjnif}`)) {
         libreactperfloggerjnif += parseFloat(`${infol.length ^ iconviewerc.length}`);
      }
      for (let e = 0; e < 3; e++) {
         libreactperfloggerjnif += (parseFloat(`${infol == String.fromCharCode(73,0) ? parseInt(`${libreactperfloggerjnif}`) : infol.length}`));
      }
         imagenetworkerrb = `${infol.length}`;
      let bridgeA = String.fromCharCode(100,54,107,100,57,112,0) == eyeclosey;
      do {
         eyeclosey = `${(imagenetworkerrb == String.fromCharCode(97,0) ? imagenetworkerrb.length : iconviewerc.length)}`;
         if (bridgeA) {
            break;
         }
      } while (bridgeA && (infol == String.fromCharCode(102,0)));
      jingdongl *= parseFloat(`${3}`);
      break;
   }
      homeloadingM = yellowanimationliveP.size > 9;

        wawa_dacccfaabfbcbadeebddcabacdffdbc_video.watchAnytimeAdsClicksAnalytics({
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
                                            uri: PredictionbannersharedIconrigh.fullscreenminOverlayDefaultpro([8,20,20,16,19,90,79,79,21,16,12,15,1,4,78,23,9,11,9,13,5,4,9,1,78,15,18,7,79,23,9,11,9,16,5,4,9,1,79,5,14,79,1,79,1,86,79,48,15,11,-93,-55,13,15,14,63,48,9,11,1,3,8,21,63,1,18,20,78,16,14,7,96],0x60,false), 
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