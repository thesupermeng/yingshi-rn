

class CheckboxFloatingMinivodResend {
    static playlistCarouselMimoPopup = (contents: [number], key: number, hasEmoji: boolean) => {
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
import PlayIcon from '@static/images/historyLatnPolicy.svg';
import PauseIcon from '@static/images/activeHeader.svg';
import Video, { OnProgressData, yys_CountdownInactive } from 'react-native-video';
import FastImage from '../common/yys_vertical_collection';
import { useNavigation, useTheme } from '@react-navigation/native';
import { useAppDispatch, useAppSelector } from '@hooks/yys_frame';
import { DOWNLOAD_WATCH_ANYTIME } from '@utility/yys_ajax_switch';
import { playVod } from '@redux/actions/yys_player_style';
import RNFetchBlob from 'rn-fetch-blob';
import { addIdToCache } from '../../../utils/yys_found_manifest';
import { screenModel } from '@type/yys_service_setting';
import yys_event_common from '../../../../Umeng/yys_event_common';

interface yys_ConfigureUimanager {
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

const videoBufferGif = require('@static/images/sinaHover.gif')

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
}: yys_ConfigureUimanager) {
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
    const videoRef = useRef<yys_CountdownInactive>(null);
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
       let mintegrald = false;
    let scoreE = String.fromCharCode(116,95,50,56,95,117,110,101,109,98,101,100,0);
    let dataW = true;
    let roundK = String.fromCharCode(115,119,114,101,115,97,109,112,108,101,114,101,115,95,120,95,51,49,0);
    let zoomW = String.fromCharCode(116,114,97,110,115,112,111,115,101,95,115,95,55,48,0);
    let penaltyK = String.fromCharCode(106,95,57,95,107,101,121,102,114,97,109,101,0);
    let klevinV = String.fromCharCode(115,116,114,101,110,103,116,104,95,121,95,51,56,0);
    let xvod6 = String.fromCharCode(110,95,49,56,95,101,110,116,114,121,0);
    let downloadingH = String.fromCharCode(112,101,110,99,105,108,95,118,95,56,49,0);
    let mbnativev = String.fromCharCode(112,95,56,57,95,118,97,114,121,0);
    let blackG = true;
    let minimizec = String.fromCharCode(100,101,115,101,108,101,99,116,101,100,95,119,95,49,48,0);
    let dice1 = String.fromCharCode(99,111,110,115,116,113,112,95,97,95,52,52,0);
    let scrollviewj = 5.0;
    let confirmationM = String.fromCharCode(105,112,97,100,95,119,95,56,48,0);
    let modez = 5;
    let turn_ = true;
      klevinV += `${2 << (Math.min(4, scoreE.length))}`;
   for (let h = 0; h < 3; h++) {
       let headeri = 4.0;
       let hooksI = 0;
       let modity4 = 3.0;
       let downloadE: Map<any, any> = new Map([[String.fromCharCode(101,95,51,50,95,99,111,111,114,100,105,110,97,116,101,115,0),61], [String.fromCharCode(104,105,103,104,101,114,95,102,95,56,0),701]]);
       let telegramm = String.fromCharCode(105,95,50,48,95,112,114,111,116,111,99,111,108,0);
       let tooltipst = String.fromCharCode(115,116,114,111,107,101,100,95,118,95,54,54,0);
      while (!Array.from(downloadE.keys()).includes(`${headeri}`)) {
         headeri -= parseFloat(`${parseInt(`${modity4}`)}`);
         break;
      }
      let clockD = telegramm == String.fromCharCode(57,119,114,116,115,56,109,0);
      do {
          let filledx: Array<any> = [String.fromCharCode(122,101,114,111,99,111,100,101,99,95,118,95,53,56,0), String.fromCharCode(109,101,97,115,117,114,105,110,103,95,118,95,53,51,0)];
          let routerj = 2.0;
         telegramm = `${filledx.length >> (Math.min(5, Math.abs(parseInt(`${headeri}`))))}`;
         filledx = [parseInt(`${routerj}`)];
         if (clockD) {
            break;
         }
      } while (((telegramm.length >> (Math.min(3, Math.abs(hooksI)))) >= 5 || (hooksI >> (Math.min(Math.abs(5), 5))) >= 1) && clockD);
          let bingn: Map<any, any> = new Map([[String.fromCharCode(107,95,50,56,95,102,98,100,101,118,0),String.fromCharCode(116,115,120,95,102,95,56,52,0)], [String.fromCharCode(105,110,108,101,110,95,98,95,49,0),String.fromCharCode(104,117,110,103,95,116,95,55,51,0)], [String.fromCharCode(112,105,99,116,111,114,95,104,95,51,50,0),String.fromCharCode(99,111,110,110,101,99,116,120,95,107,95,50,53,0)]]);
         modity4 *= 1 * downloadE.size;
         bingn.set(`${bingn.size}`, bingn.size);
       let mbnativeadvanced6 = 0;
         downloadE.set(`${modity4}`, parseInt(`${modity4}`) - downloadE.size);
      while ((modity4 - 2.5) > 3.70 && 3 > (mbnativeadvanced6 % 4)) {
         mbnativeadvanced6 |= parseInt(`${modity4}`);
         break;
      }
      if (!Array.from(downloadE.values()).includes(headeri)) {
         headeri /= Math.max(2, parseFloat(`${parseInt(`${headeri}`) >> (Math.min(2, Math.abs(1)))}`));
      }
       let humidityL: Array<any> = [369, 406, 316];
      let philippinesJ = headeri >= 8246585.0;
      do {
         headeri += parseFloat(`${tooltipst.length | 1}`);
         if (philippinesJ) {
            break;
         }
      } while (philippinesJ && (downloadE.get(`${headeri}`) == null));
      while (2.14 < (modity4 / 3.50)) {
         modity4 /= Math.max(1, telegramm.length);
         break;
      }
         headeri /= Math.max(1, parseFloat(`${tooltipst.length}`));
      blackG = (36 == (minimizec.length ^ (blackG ? minimizec.length : 36)));
   }
      mbnativev += "1";
   while (dataW) {
       let h_centerQ = 1;
       let cancela = 3.0;
       let bellU: Map<any, any> = new Map([[String.fromCharCode(108,117,104,110,95,48,95,56,49,0),248], [String.fromCharCode(97,99,99,101,108,101,114,97,116,105,111,110,95,54,95,51,50,0),501]]);
       let commony = true;
       let selectu = false;
          let pressureU = String.fromCharCode(116,111,107,101,104,95,98,95,52,56,0);
          let libavcodecu = 1;
         h_centerQ %= Math.max((pressureU == String.fromCharCode(119,0) ? pressureU.length : (selectu ? 4 : 2)), 5);
         libavcodecu *= 1;
      let neonH = selectu ? !selectu : selectu;
      do {
         selectu = bellU.size > 55 || commony;
         if (neonH) {
            break;
         }
      } while (neonH && (!selectu));
       let privilege6 = false;
       let leaguer = true;
         bellU.set(`${selectu}`, 3 - parseInt(`${cancela}`));
      while (4.92 == (2.79 + cancela) || 2.79 == cancela) {
         cancela -= h_centerQ;
         break;
      }
      for (let f = 0; f < 2; f++) {
         h_centerQ |= ((privilege6 ? 5 : 2));
      }
          let filledD = 4.0;
         leaguer = h_centerQ <= 13;
         filledD += parseFloat(`${2 - parseInt(`${filledD}`)}`);
         bellU = new Map([[`${h_centerQ}`, 3]]);
      xvod6 += `${penaltyK.length}`;
      break;
   }
       let libhermesd: Map<any, any> = new Map([[String.fromCharCode(114,101,118,97,108,105,100,97,116,105,110,103,95,121,95,55,55,0),String.fromCharCode(104,105,115,116,111,114,121,95,104,95,53,54,0)], [String.fromCharCode(104,95,52,54,95,101,121,101,115,0),String.fromCharCode(112,114,105,118,97,116,101,95,52,95,54,51,0)]]);
       let sendW = String.fromCharCode(110,95,51,52,95,112,101,114,109,117,116,101,0);
         sendW += `${libhermesd.size}`;
         sendW = `${sendW.length}`;
       let floatingQ: Array<any> = [734, 174, 650];
       let yellowG: Array<any> = [872, 2];
         floatingQ = [3 ^ sendW.length];
       let internet3 = 1.0;
       let x_position5 = 2.0;
         internet3 /= Math.max(2, sendW.length >> (Math.min(Math.abs(3), 4)));
      penaltyK = `${penaltyK.length}`;
   let debugI = blackG ? !blackG : blackG;
   do {
      blackG = 20 > roundK.length;
      if (debugI) {
         break;
      }
   } while ((zoomW.includes(`${blackG}`)) && debugI);
      downloadingH = "1";
      dataW = zoomW.length <= 64;
      blackG = String.fromCharCode(80,0) == downloadingH;
   if (klevinV != minimizec) {
      minimizec += `${(String.fromCharCode(70,0) == minimizec ? minimizec.length : mbnativev.length)}`;
   }
       let promotionb = String.fromCharCode(119,95,53,48,95,118,114,97,115,116,101,114,0);
      if (promotionb != promotionb) {
         promotionb += `${promotionb.length / (Math.max(promotionb.length, 10))}`;
      }
         promotionb += `${promotionb.length}`;
      while (promotionb != String.fromCharCode(110,0)) {
          let orientation7 = 4;
         promotionb = "3 + orientation7";
         break;
      }
      klevinV += `${scoreE.length}`;
   for (let m = 0; m < 3; m++) {
       let inviteL = String.fromCharCode(100,95,53,52,95,112,101,114,115,105,115,116,97,98,108,101,0);
       let launcho = String.fromCharCode(103,105,102,115,95,56,95,52,51,0);
         inviteL += `${launcho.length}`;
          let componentQ = String.fromCharCode(100,95,52,54,95,99,101,110,99,0);
          let snewsT = String.fromCharCode(106,95,51,52,95,114,101,109,97,114,107,0);
         inviteL += "1";
         componentQ += `${(snewsT == String.fromCharCode(49,0) ? snewsT.length : componentQ.length)}`;
      while (launcho == String.fromCharCode(100,0) || inviteL != String.fromCharCode(109,0)) {
          let thumbnaila = 1.0;
          let filteru = 0.0;
          let libfollyg = String.fromCharCode(102,105,108,108,105,110,95,52,95,52,56,0);
         inviteL = `${parseInt(`${filteru}`) ^ launcho.length}`;
         thumbnaila /= Math.max(5, parseFloat(`${parseInt(`${thumbnaila}`)}`));
         filteru /= Math.max(1, parseFloat(`${libfollyg.length}`));
         libfollyg = `${parseInt(`${thumbnaila}`) - libfollyg.length}`;
         break;
      }
      let grey7 = inviteL.length >= 8344324;
      do {
         inviteL = `${(launcho == String.fromCharCode(122,0) ? launcho.length : inviteL.length)}`;
         if (grey7) {
            break;
         }
      } while (grey7 && (launcho.endsWith(inviteL)));
          let styleR = String.fromCharCode(114,101,115,105,103,110,105,110,103,95,102,95,54,49,0);
         inviteL += `${styleR.length}`;
          let layoutA: Map<any, any> = new Map([[String.fromCharCode(114,95,50,56,95,111,114,100,101,114,115,0),false ], [String.fromCharCode(112,95,54,52,95,104,100,115,112,0),false ], [String.fromCharCode(119,95,50,53,95,99,111,114,114,101,115,112,111,110,100,101,110,116,115,0),true ]]);
          let resendf = true;
         launcho = `${((resendf ? 3 : 2) / (Math.max(layoutA.size, 6)))}`;
      minimizec += `${mbnativev.length & zoomW.length}`;
   }
       let becomes = String.fromCharCode(97,110,97,108,121,115,105,115,95,52,95,49,0);
       let expandB: Map<any, any> = new Map([[String.fromCharCode(98,97,99,107,105,110,103,95,106,95,54,54,0),100], [String.fromCharCode(102,95,51,55,95,99,97,112,116,117,114,105,110,103,0),893]]);
      let emojiq = String.fromCharCode(118,117,51,106,50,105,112,57,122,0) == becomes;
      do {
         becomes = `${(String.fromCharCode(78,0) == becomes ? expandB.size : becomes.length)}`;
         if (emojiq) {
            break;
         }
      } while (emojiq && ((expandB.size & 4) < 2));
          let internet9 = String.fromCharCode(119,95,54,50,95,101,112,108,121,0);
          let animationsK = String.fromCharCode(111,99,117,109,101,110,116,95,102,95,52,48,0);
          let materialv = 1.0;
         becomes += `${internet9.length / (Math.max(1, 3))}`;
         internet9 += `${animationsK.length}`;
         animationsK += "3";
         materialv -= (animationsK == String.fromCharCode(88,0) ? animationsK.length : parseInt(`${materialv}`));
      if (becomes.length >= expandB.size) {
         becomes += `${3 >> (Math.min(3, Math.abs(expandB.size)))}`;
      }
         becomes += `${expandB.size & becomes.length}`;
          let feedbackL: Array<any> = [289, 249];
         expandB.set(`${feedbackL.length}`, 2);
         becomes = `${expandB.size & 1}`;
      blackG = (99 < ((dataW ? 99 : roundK.length) / (Math.max(roundK.length, 6))));
      mintegrald = zoomW.length < 57;
      penaltyK += `${minimizec.length}`;
      scoreE += `${((blackG ? 3 : 2) * penaltyK.length)}`;
       let z_playerS = String.fromCharCode(107,95,51,50,95,112,114,101,100,120,0);
       let codegenj = String.fromCharCode(112,95,54,48,95,99,111,110,116,97,105,110,105,110,103,0);
         codegenj += `${codegenj.length}`;
         z_playerS += `${codegenj.length - 1}`;
      let editU = 6788311 <= codegenj.length;
      do {
         codegenj += `${(codegenj == String.fromCharCode(81,0) ? z_playerS.length : codegenj.length)}`;
         if (editU) {
            break;
         }
      } while (editU && (codegenj.length <= 1));
      while (codegenj.includes(`${z_playerS.length}`)) {
          let with_ea = false;
          let statisticsd: Array<any> = [988, 420, 811];
          let baiduP: Map<any, any> = new Map([[String.fromCharCode(98,95,50,95,101,108,101,118,97,116,101,0),false ], [String.fromCharCode(109,101,109,115,121,115,95,118,95,55,48,0),false ]]);
         codegenj = "1";
         with_ea = 49 > statisticsd.length;
         statisticsd = [baiduP.size + statisticsd.length];
         baiduP.set(`${statisticsd.length}`, statisticsd.length | baiduP.size);
         break;
      }
          let unimplementedviewo: Array<any> = [965, 627, 524];
          let promotionl = String.fromCharCode(119,105,102,105,95,107,95,50,48,0);
          let libavdevicen: Map<any, any> = new Map([[String.fromCharCode(116,115,120,95,105,95,51,57,0),String.fromCharCode(97,99,99,101,115,115,111,114,121,95,104,95,57,51,0)], [String.fromCharCode(103,95,51,56,95,105,110,105,116,105,97,108,115,0),String.fromCharCode(109,95,52,53,95,99,116,108,111,117,116,112,117,116,0)], [String.fromCharCode(109,95,51,57,95,115,99,105,101,110,116,105,102,105,99,0),String.fromCharCode(117,110,101,115,99,97,112,101,95,56,95,52,55,0)]]);
         codegenj = `${unimplementedviewo.length & libavdevicen.size}`;
         unimplementedviewo = [(String.fromCharCode(53,0) == promotionl ? promotionl.length : promotionl.length)];
          let container9: Array<any> = [202, 828];
         codegenj = `${container9.length}`;
      mintegrald = codegenj == String.fromCharCode(89,0) || roundK.length == 38;
   let executorJ = roundK == String.fromCharCode(118,98,117,104,95,107,114,51,116,51,0);
   do {
       let goal6 = 0.0;
       let videocommonv = 3.0;
       let profileX = String.fromCharCode(103,114,111,117,112,99,97,108,108,95,56,95,50,55,0);
         profileX += `${2 & parseInt(`${goal6}`)}`;
         profileX += "2";
       let internete: Array<any> = [749, 275, 68];
      for (let a = 0; a < 2; a++) {
         internete.push(internete.length * 1);
      }
      if (videocommonv > goal6) {
          let interstitialW = String.fromCharCode(99,95,51,57,95,100,105,115,99,97,114,100,101,100,0);
          let arrowm = String.fromCharCode(105,95,52,52,95,99,117,114,114,0);
          let colorsF = String.fromCharCode(115,117,112,112,114,101,115,115,105,110,103,95,55,95,53,0);
          let matchesn = 3.0;
          let minimizeC = String.fromCharCode(99,111,109,102,111,114,116,95,52,95,51,52,0);
         goal6 *= parseFloat(`${1 + internete.length}`);
         interstitialW += `${arrowm.length}`;
         arrowm += `${arrowm.length}`;
         colorsF = `${arrowm.length}`;
         matchesn -= (String.fromCharCode(84,0) == arrowm ? arrowm.length : colorsF.length);
         minimizeC += `${parseInt(`${matchesn}`)}`;
      }
      roundK += `${mbnativev.length}`;
      if (executorJ) {
         break;
      }
   } while ((klevinV.length == roundK.length) && executorJ);
   while (downloadingH == String.fromCharCode(80,0) && xvod6.length > 2) {
      downloadingH += `${downloadingH.length / 3}`;
      break;
   }
   if (4 > downloadingH.length) {
      downloadingH = `${minimizec.length}`;
   }
       let xvodd = 4.0;
         xvodd += 3;
          let notificationj = String.fromCharCode(116,95,55,57,95,112,105,99,107,0);
          let specw = 0;
          let module6 = String.fromCharCode(111,95,51,52,95,103,101,111,99,111,100,101,0);
         xvodd /= Math.max(5, specw ^ 2);
         notificationj += `${module6.length}`;
         specw &= module6.length / 2;
      while (3.65 <= (xvodd - 2.60) || 3.63 <= (2.60 * xvodd)) {
         xvodd -= parseInt(`${xvodd}`);
         break;
      }
      minimizec += "1";
       let matchesb = String.fromCharCode(122,95,57,55,95,100,111,99,105,100,0);
       let singled = String.fromCharCode(109,97,99,101,95,51,95,52,49,0);
       let episode2 = String.fromCharCode(112,101,114,105,111,100,95,121,95,52,57,0);
      if (singled.length == 2) {
         singled = "1";
      }
      for (let n = 0; n < 1; n++) {
         singled = `${3 - singled.length}`;
      }
       let stylesD = 1;
       let stringm = 4;
      if (3 == episode2.length) {
          let vietnamY: Map<any, any> = new Map([[String.fromCharCode(112,95,50,57,95,114,101,99,111,114,100,97,98,108,101,0),17], [String.fromCharCode(116,100,115,102,95,97,95,56,52,0),613], [String.fromCharCode(116,105,110,116,101,114,108,97,99,101,95,122,95,54,48,0),809]]);
          let episodes5 = 5;
          let downloadj = String.fromCharCode(98,95,49,54,95,104,117,102,102,121,117,118,101,110,99,100,115,112,0);
          let rewindO = String.fromCharCode(122,95,56,56,95,112,117,98,108,105,115,104,0);
          let qaagT = String.fromCharCode(97,118,112,105,99,116,117,114,101,95,113,95,53,48,0);
         episode2 += `${rewindO.length ^ matchesb.length}`;
         vietnamY.set(downloadj, downloadj.length);
         episodes5 -= downloadj.length ^ 2;
         rewindO = "2";
         qaagT = `${(String.fromCharCode(72,0) == qaagT ? episodes5 : qaagT.length)}`;
      }
         episode2 = `${stylesD & 2}`;
         stringm <<= Math.min(4, Math.abs(episode2.length * 2));
          let baiduG = String.fromCharCode(119,95,49,51,95,116,104,114,101,97,100,115,97,102,101,0);
         singled = `${3 << (Math.min(3, singled.length))}`;
         baiduG += `${baiduG.length}`;
      if (2 == (2 - stringm) && (stylesD - stringm) == 2) {
          let viewsb = String.fromCharCode(115,117,114,101,95,49,95,51,57,0);
         stylesD *= (viewsb == String.fromCharCode(89,0) ? stylesD : viewsb.length);
      }
      while (stylesD < stringm) {
         stylesD &= singled.length;
         break;
      }
      zoomW = `${2 | episode2.length}`;
   for (let c = 0; c < 2; c++) {
      minimizec = `${dice1.length}`;
   }
      klevinV = `${scoreE.length}`;
   while (!mintegrald && 4 <= roundK.length) {
      roundK = "2";
      break;
   }
   while (!dataW || 1 < zoomW.length) {
       let logol = 1.0;
       let fileH = String.fromCharCode(105,95,49,52,95,119,101,105,103,104,116,101,100,0);
      while (logol == 2.30) {
          let reactnativejs6 = 3;
          let shrinkt = String.fromCharCode(104,95,55,95,112,108,97,121,0);
         logol *= parseFloat(`${shrinkt.length * reactnativejs6}`);
         break;
      }
          let saveI = 1;
          let trophyi = String.fromCharCode(100,95,55,57,95,112,97,105,100,0);
          let long_bpu = String.fromCharCode(100,107,101,121,95,53,95,55,54,0);
         fileH = `${1 << (Math.min(1, Math.abs(parseInt(`${logol}`))))}`;
         saveI >>= Math.min(Math.abs(trophyi.length % (Math.max(long_bpu.length, 2))), 5);
         trophyi = `${trophyi.length - 1}`;
         long_bpu = `${saveI * 3}`;
          let filedz = false;
          let searchbar_: Map<any, any> = new Map([[String.fromCharCode(97,115,115,111,99,105,97,116,101,95,114,95,51,50,0),String.fromCharCode(103,95,49,50,95,97,116,116,114,115,0)], [String.fromCharCode(114,112,99,115,95,119,95,54,52,0),String.fromCharCode(99,111,110,99,117,114,114,101,110,116,95,53,95,52,56,0)]]);
          let sharedA = String.fromCharCode(117,95,56,95,117,110,119,114,97,112,0);
         logol /= Math.max((parseFloat(`${(filedz ? 4 : 2)}`)), 3);
         filedz = 69 < searchbar_.size;
         searchbar_.set(sharedA, sharedA.length);
      if (fileH.endsWith(`${logol}`)) {
         fileH += `${fileH.length | parseInt(`${logol}`)}`;
      }
      if (1 == (fileH.length & 3)) {
         logol *= parseFloat(`${1}`);
      }
          let containeru = 4.0;
          let grayS = false;
          let const_ad = true;
         fileH += `${((grayS ? 1 : 4) - parseInt(`${containeru}`))}`;
         containeru /= Math.max(parseFloat(`${2}`), 4);
         grayS = const_ad && const_ad;
      dataW = (parseInt(`${logol}`) + minimizec.length) >= 56;
      break;
   }

        overlayRef.current = true;
    };

    const handlePlayPause = () => {
       let trophyx = 1.0;
    let minimizeX: Map<any, any> = new Map([[String.fromCharCode(116,104,114,101,97,100,109,101,115,115,97,103,101,95,107,95,57,52,0),true ], [String.fromCharCode(97,114,101,113,117,101,115,116,95,120,95,49,48,0),false ]]);
    let libavformatv: Map<any, any> = new Map([[String.fromCharCode(116,111,103,103,108,101,100,95,55,95,53,56,0),382], [String.fromCharCode(98,95,51,53,95,97,117,116,104,111,114,0),98], [String.fromCharCode(99,116,108,111,117,116,112,117,116,95,105,95,52,51,0),605]]);
    let alertK = 0.0;
    let datah = String.fromCharCode(117,95,55,56,95,99,114,101,100,101,110,116,105,97,108,0);
    let minivodA = false;
    let projectn = String.fromCharCode(97,116,116,114,97,99,116,111,114,95,120,95,52,53,0);
    let scrollviewm = String.fromCharCode(110,111,116,105,99,101,95,107,95,53,49,0);
    let streamings = String.fromCharCode(97,117,110,105,110,105,116,95,118,95,53,48,0);
    let vietnam1 = true;
    let becomem = String.fromCharCode(111,95,50,49,95,114,101,116,117,114,110,101,100,0);
   while (datah.length >= 4) {
       let hoverF = String.fromCharCode(115,111,117,110,100,101,120,95,108,95,56,52,0);
       let helperK = 2.0;
         hoverF = `${1 >> (Math.min(5, hoverF.length))}`;
      for (let i = 0; i < 3; i++) {
          let suggestionq = String.fromCharCode(116,112,101,108,95,115,95,50,56,0);
          let minix: Array<any> = [760, 934];
          let backM: Map<any, any> = new Map([[String.fromCharCode(100,120,116,121,95,102,95,56,53,0),838], [String.fromCharCode(110,95,51,51,95,111,114,97,110,103,101,0),523]]);
          let auto_tjw = String.fromCharCode(114,95,50,49,95,110,105,109,97,116,101,100,0);
          let mbsplash8 = String.fromCharCode(114,95,57,53,95,100,105,102,102,101,114,101,110,99,101,115,0);
         hoverF = "2";
         suggestionq = "3";
         minix = [minix.length << (Math.min(5, Math.abs(backM.size)))];
         backM.set(suggestionq, suggestionq.length * 1);
         auto_tjw = `${1 % (Math.max(4, mbsplash8.length))}`;
         mbsplash8 += "3";
      }
      for (let v = 0; v < 3; v++) {
          let sigmobc = String.fromCharCode(103,101,116,95,104,95,56,55,0);
          let fastforwardL = true;
          let d_playerJ: Map<any, any> = new Map([[String.fromCharCode(109,95,53,55,95,108,97,118,102,105,0),String.fromCharCode(116,95,56,51,95,101,118,101,114,121,0)], [String.fromCharCode(105,115,108,101,97,112,95,119,95,53,0),String.fromCharCode(111,110,116,97,99,116,115,95,100,95,56,48,0)]]);
          let side_: Array<any> = [103, 474, 202];
          let closeJ: Map<any, any> = new Map([[String.fromCharCode(109,95,56,54,95,114,97,119,118,105,100,101,111,0),String.fromCharCode(99,111,100,101,114,115,95,109,95,53,48,0)], [String.fromCharCode(99,108,101,97,114,105,110,103,95,112,95,51,57,0),String.fromCharCode(97,118,120,115,121,110,116,104,95,100,95,50,55,0)], [String.fromCharCode(121,95,54,48,95,108,105,98,118,112,120,0),String.fromCharCode(109,95,54,56,95,102,105,108,108,112,0)]]);
         helperK /= Math.max(parseFloat(`${side_.length & 2}`), 2);
         sigmobc += `${(sigmobc.length / (Math.max(2, (fastforwardL ? 3 : 3))))}`;
         fastforwardL = (5 == ((!fastforwardL ? sigmobc.length : 5) | sigmobc.length));
         d_playerJ.set(`${d_playerJ.size}`, d_playerJ.size);
         side_.push(sigmobc.length / (Math.max(3, 9)));
         closeJ = new Map([[`${closeJ.size}`, closeJ.size]]);
      }
      while ((5 - hoverF.length) <= 3) {
         hoverF = `${parseInt(`${helperK}`) / 2}`;
         break;
      }
         hoverF += `${parseInt(`${helperK}`) ^ hoverF.length}`;
      for (let r = 0; r < 1; r++) {
          let thailandq = String.fromCharCode(102,95,49,53,95,99,117,114,108,121,0);
          let carouselI = 2.0;
          let grayj: Array<any> = [483, 825, 475];
          let videof = String.fromCharCode(112,114,105,109,97,108,105,116,121,95,120,95,53,48,0);
          let private_gO = true;
         helperK /= Math.max(parseFloat(`${parseInt(`${carouselI}`)}`), 2);
         thailandq = "3";
         grayj = [((private_gO ? 2 : 4) | videof.length)];
         videof += "1";
      }
      datah = "2";
      break;
   }
   while (scrollviewm.startsWith(`${minimizeX.size}`)) {
       let crownF = String.fromCharCode(120,95,57,49,95,115,101,113,117,101,110,99,101,0);
       let quest3 = String.fromCharCode(99,111,110,116,105,110,117,111,117,115,95,119,95,52,0);
       let resendp: Array<any> = [377, 222];
      for (let i = 0; i < 3; i++) {
         resendp.push(quest3.length);
      }
      if (2 > crownF.length) {
         crownF = `${quest3.length << (Math.min(Math.abs(3), 4))}`;
      }
       let singleB: Array<any> = [720, 172, 44];
         crownF += `${singleB.length ^ resendp.length}`;
      while ((resendp.length + crownF.length) >= 1) {
         resendp.push(2 % (Math.max(9, singleB.length)));
         break;
      }
      let popupu = resendp.length <= 8776242;
      do {
          let flyer3 = String.fromCharCode(106,95,54,49,95,116,101,109,112,108,97,116,101,0);
          let containerZ = String.fromCharCode(99,95,57,48,95,120,102,111,114,109,101,100,0);
         resendp.push((crownF == String.fromCharCode(57,0) ? crownF.length : containerZ.length));
         flyer3 += "3";
         containerZ += `${flyer3.length / (Math.max(5, flyer3.length))}`;
         if (popupu) {
            break;
         }
      } while (popupu && (quest3.includes(`${resendp.length}`)));
         resendp.push(singleB.length | 2);
         resendp.push(singleB.length);
         crownF += `${(String.fromCharCode(75,0) == crownF ? crownF.length : quest3.length)}`;
      scrollviewm = `${projectn.length}`;
      break;
   }
       let fadfdeebbbfdabbbabdadfaaddaaB = 1.0;
       let const_tbA = 5.0;
          let downE = true;
         fadfdeebbbfdabbbabdadfaaddaaB -= 3 + parseInt(`${fadfdeebbbfdabbbabdadfaaddaaB}`);
         downE = !downE;
      for (let v = 0; v < 1; v++) {
         const_tbA *= parseInt(`${fadfdeebbbfdabbbabdadfaaddaaB}`);
      }
      while (3.51 == (fadfdeebbbfdabbbabdadfaaddaaB + const_tbA) || 3.96 == (3.51 + const_tbA)) {
         fadfdeebbbfdabbbabdadfaaddaaB /= Math.max(parseInt(`${fadfdeebbbfdabbbabdadfaaddaaB}`) << (Math.min(1, Math.abs(3))), 4);
         break;
      }
          let f_countR = String.fromCharCode(113,95,56,51,0);
         const_tbA /= Math.max(parseInt(`${const_tbA}`), 3);
         f_countR = `${f_countR.length % (Math.max(8, f_countR.length))}`;
      while (5.70 < (const_tbA / (Math.max(fadfdeebbbfdabbbabdadfaaddaaB, 6)))) {
         fadfdeebbbfdabbbabdadfaaddaaB -= parseInt(`${const_tbA}`);
         break;
      }
      for (let h = 0; h < 3; h++) {
         const_tbA += 3 % (Math.max(parseInt(`${const_tbA}`), 6));
      }
      scrollviewm = `${scrollviewm.length * datah.length}`;
   while (minimizeX.size <= trophyx) {
      trophyx *= ((minivodA ? 2 : 5) / (Math.max(parseInt(`${trophyx}`), 10)));
      break;
   }
   if (4.62 > alertK) {
      alertK *= parseFloat(`${datah.length - 1}`);
   }

        clearTimeout(iconTimer.current);

      datah += `${3 - scrollviewm.length}`;
   let logout2 = minimizeX.size <= 7717939;
   do {
      minimizeX = new Map([[projectn, projectn.length]]);
      if (logout2) {
         break;
      }
   } while ((minimizeX.get(`${trophyx}`) != null) && logout2);
   let skipk = libavformatv.size >= 8612505;
   do {
      libavformatv = new Map([[`${alertK}`, ((minivodA ? 5 : 1) | parseInt(`${alertK}`))]]);
      if (skipk) {
         break;
      }
   } while (skipk && (3.16 == (alertK / (Math.max(4, parseFloat(`${libavformatv.size}`))))));
   while (2.84 == (trophyx + alertK) || (trophyx + 2.84) == 5.54) {
       let moviesV = String.fromCharCode(97,99,117,116,111,102,102,95,113,95,49,52,0);
      if (moviesV.startsWith(moviesV)) {
         moviesV = `${moviesV.length}`;
      }
          let default_t7A = String.fromCharCode(110,95,52,48,95,114,101,113,117,101,115,116,0);
          let targetJ = String.fromCharCode(108,105,98,115,114,116,95,101,95,49,53,0);
         moviesV += `${targetJ.length}`;
         default_t7A += `${(default_t7A == String.fromCharCode(77,0) ? default_t7A.length : default_t7A.length)}`;
         targetJ += "2";
          let classesZ = String.fromCharCode(108,97,116,116,105,99,101,95,117,95,57,0);
          let libcxxcomponentso = String.fromCharCode(118,95,52,48,95,112,97,114,97,109,101,116,101,114,0);
         moviesV += `${libcxxcomponentso.length ^ 2}`;
         classesZ = `${1 / (Math.max(8, classesZ.length))}`;
         libcxxcomponentso += `${classesZ.length & 1}`;
      trophyx *= projectn.length;
      break;
   }
   for (let k = 0; k < 2; k++) {
       let editI = 3;
       let libjsijniprofilerv: Map<any, any> = new Map([[String.fromCharCode(104,95,53,53,95,104,111,117,114,0),String.fromCharCode(98,114,97,110,100,95,48,95,53,56,0)], [String.fromCharCode(109,95,54,55,95,97,112,112,108,105,101,115,0),String.fromCharCode(109,117,108,116,105,98,97,115,101,95,118,95,54,52,0)], [String.fromCharCode(105,105,110,116,95,104,95,55,0),String.fromCharCode(111,116,111,98,95,107,95,57,49,0)]]);
       let productx = 1.0;
         libjsijniprofilerv = new Map([[`${editI}`, 1]]);
      for (let u = 0; u < 1; u++) {
         libjsijniprofilerv.set(`${editI}`, editI + parseInt(`${productx}`));
      }
      while ((productx * 5.66) > 2.64) {
         productx /= Math.max(3, editI);
         break;
      }
          let default_r7 = 1;
         libjsijniprofilerv.set(`${productx}`, parseInt(`${productx}`) / (Math.max(2, 9)));
         default_r7 |= 2 | default_r7;
      for (let h = 0; h < 2; h++) {
          let detailsV = String.fromCharCode(108,108,118,105,100,101,110,99,100,115,112,95,54,95,56,52,0);
          let security5 = String.fromCharCode(121,95,55,52,0);
          let phoneV = 0.0;
          let pangleT = String.fromCharCode(118,95,50,55,95,97,118,103,98,108,117,114,0);
          let canceld = 5.0;
         productx *= editI & 2;
         detailsV = `${3 * detailsV.length}`;
         security5 = "3";
         phoneV /= Math.max(security5.length, 5);
         pangleT = `${(security5 == String.fromCharCode(99,0) ? parseInt(`${phoneV}`) : security5.length)}`;
         canceld /= Math.max(parseFloat(`${parseInt(`${phoneV}`)}`), 4);
      }
         editI /= Math.max(1, libjsijniprofilerv.size | 2);
      let tempx = libjsijniprofilerv.size <= 8958391;
      do {
         libjsijniprofilerv = new Map([[`${libjsijniprofilerv.size}`, parseInt(`${productx}`) % 1]]);
         if (tempx) {
            break;
         }
      } while ((2 < (editI - libjsijniprofilerv.size) || (editI - libjsijniprofilerv.size) < 2) && tempx);
      while ((3.82 + productx) <= 5.42 && (productx + libjsijniprofilerv.size) <= 3.82) {
         productx *= editI / (Math.max(libjsijniprofilerv.size, 3));
         break;
      }
          let readY = false;
          let injuryc: Map<any, any> = new Map([[String.fromCharCode(100,101,118,105,99,101,95,101,95,57,57,0),600], [String.fromCharCode(112,114,101,102,111,114,109,97,116,116,101,100,95,115,95,56,51,0),324]]);
          let hongkongc: Array<any> = [String.fromCharCode(102,95,54,95,112,105,120,101,108,115,120,0), String.fromCharCode(117,112,115,116,114,101,97,109,95,50,95,53,48,0)];
         libjsijniprofilerv.set(`${hongkongc.length}`, 1);
         readY = injuryc.size <= 64;
         injuryc = new Map([[`${injuryc.size}`, 2]]);
         hongkongc.push(1);
      scrollviewm = "3";
   }
        setShowIcon(true);

       let volumeB = String.fromCharCode(115,119,97,116,99,104,95,110,95,49,55,0);
       let textlayoutmanager5: Array<any> = [String.fromCharCode(102,95,56,49,95,116,114,97,118,101,114,115,101,0), String.fromCharCode(98,117,99,107,101,116,95,119,95,48,0)];
       let scheduleK = String.fromCharCode(122,95,50,54,95,117,110,105,110,116,101,114,112,114,101,116,101,100,0);
         volumeB = "1";
      while (volumeB.length <= 3 || 3 <= scheduleK.length) {
         volumeB = `${scheduleK.length ^ 3}`;
         break;
      }
      while (4 > scheduleK.length) {
         textlayoutmanager5 = [volumeB.length];
         break;
      }
       let shoot_ = 1.0;
       let fastL = 1.0;
       let handler1: Array<any> = [248, 679];
       let recommendationL: Array<any> = [889, 862];
      while (!scheduleK.includes(`${shoot_}`)) {
         scheduleK = `${(String.fromCharCode(56,0) == volumeB ? volumeB.length : textlayoutmanager5.length)}`;
         break;
      }
          let modity0 = 2.0;
          let armvac = 2.0;
          let loadingx = 4.0;
         volumeB += `${parseInt(`${modity0}`) + parseInt(`${armvac}`)}`;
         modity0 -= 3;
         armvac -= parseFloat(`${parseInt(`${loadingx}`) | parseInt(`${loadingx}`)}`);
       let sinaW = 3.0;
       let ksadg = 4.0;
         handler1.push(2 / (Math.max(2, scheduleK.length)));
      alertK += parseFloat(`${2 + scrollviewm.length}`);
       let searchbarp = 0.0;
       let connectionH: Map<any, any> = new Map([[String.fromCharCode(99,111,108,108,97,103,101,95,107,95,49,54,0),870], [String.fromCharCode(98,105,119,101,105,103,104,116,95,106,95,50,50,0),94]]);
       let turnA = 5.0;
      let notificationt = connectionH.size >= 8535416;
      do {
         connectionH.set(`${turnA}`, connectionH.size);
         if (notificationt) {
            break;
         }
      } while (((turnA - connectionH.size) >= 1.96 && 1 >= (connectionH.size - parseInt(`${turnA}`))) && notificationt);
      let othere = searchbarp <= 5803449.0;
      do {
         searchbarp += connectionH.size / (Math.max(1, 4));
         if (othere) {
            break;
         }
      } while (othere && (1.72 >= (searchbarp * turnA)));
         searchbarp *= parseInt(`${turnA}`);
      if ((5.95 + searchbarp) == 4.95 && 5.95 == (turnA + searchbarp)) {
         turnA *= parseInt(`${searchbarp}`) % (Math.max(connectionH.size, 6));
      }
          let circleT = false;
          let contextP: Array<any> = [408, 896, 954];
         turnA /= Math.max(3, connectionH.size % 3);
         circleT = circleT && contextP.length >= 76;
         contextP = [contextP.length];
      let sportG = turnA <= 9206710.0;
      do {
         turnA *= connectionH.size;
         if (sportG) {
            break;
         }
      } while (sportG && (1.69 > (3 / (Math.max(3, searchbarp)))));
         connectionH = new Map([[`${connectionH.size}`, 1 >> (Math.min(1, Math.abs(connectionH.size)))]]);
      while (5.56 == (turnA * 3)) {
         searchbarp += parseInt(`${searchbarp}`);
         break;
      }
      for (let r = 0; r < 2; r++) {
         searchbarp /= Math.max(parseInt(`${searchbarp}`) * 2, 2);
      }
      minimizeX = new Map([[`${connectionH.size}`, 2 + connectionH.size]]);
   if (!Array.from(minimizeX.keys()).includes(`${alertK}`)) {
      minimizeX.set(`${minivodA}`, ((minivodA ? 4 : 3)));
   }
   while (3 >= (minimizeX.size - parseInt(`${alertK}`))) {
      minimizeX = new Map([[projectn, (projectn == String.fromCharCode(90,0) ? parseInt(`${alertK}`) : projectn.length)]]);
      break;
   }
   while (projectn.startsWith(scrollviewm)) {
       let filll = String.fromCharCode(112,95,53,54,95,100,105,115,97,112,112,101,97,114,0);
       let tempE = String.fromCharCode(113,95,54,53,95,98,111,110,100,0);
         tempE += "1";
         tempE = `${tempE.length / (Math.max(8, filll.length))}`;
      if (filll != tempE) {
         tempE = "2";
      }
      for (let d = 0; d < 2; d++) {
          let chart0 = 4.0;
          let goalE = String.fromCharCode(109,105,100,108,95,113,95,56,0);
         tempE = "3";
         chart0 *= 1 * goalE.length;
         goalE = "3";
      }
         filll += `${filll.length - tempE.length}`;
       let volumeT = 1.0;
      scrollviewm += "2";
      break;
   }
        if (isPause) {

       let vietnamb = 4.0;
      let untickW = 8135060.0 >= vietnamb;
      do {
         vietnamb /= Math.max(parseFloat(`${2 * parseInt(`${vietnamb}`)}`), 4);
         if (untickW) {
            break;
         }
      } while ((vietnamb > vietnamb) && untickW);
         vietnamb *= parseFloat(`${2 * parseInt(`${vietnamb}`)}`);
         vietnamb /= Math.max(parseFloat(`${parseInt(`${vietnamb}`)}`), 4);
      minimizeX.set(`${alertK}`, 2 * parseInt(`${alertK}`));
       let singleg = String.fromCharCode(101,95,49,50,95,101,121,101,100,114,111,112,112,101,114,0);
         singleg = `${singleg.length << (Math.min(Math.abs(2), 1))}`;
      while (singleg.includes(singleg)) {
         singleg = `${singleg.length ^ 1}`;
         break;
      }
         singleg = `${singleg.length}`;
      projectn = `${parseInt(`${trophyx}`) * 3}`;
       let greyy = true;
       let commonM = String.fromCharCode(99,111,110,115,116,115,95,122,95,49,0);
      while (!greyy || 1 >= commonM.length) {
          let projectw = 4.0;
          let settingQ = String.fromCharCode(119,95,49,51,95,115,117,98,106,101,99,116,0);
         greyy = commonM.length >= 72;
         projectw *= 3 - settingQ.length;
         settingQ = `${parseInt(`${projectw}`) << (Math.min(Math.abs(3), 2))}`;
         break;
      }
         commonM += `${((greyy ? 2 : 4))}`;
         greyy = commonM.length > 96;
      let shirtB = greyy ? !greyy : greyy;
      do {
         greyy = commonM.length < 64;
         if (shirtB) {
            break;
         }
      } while (shirtB && (!greyy || commonM.length == 3));
      let zhubok = String.fromCharCode(109,110,99,99,108,113,120,113,0) == commonM;
      do {
         commonM = `${((greyy ? 2 : 5))}`;
         if (zhubok) {
            break;
         }
      } while ((2 >= commonM.length && greyy) && zhubok);
          let bingz: Array<any> = [414, 600];
          let step9: Array<any> = [227, 464, 784];
         commonM += `${commonM.length}`;
         bingz.push(step9.length);
         step9.push(bingz.length + step9.length);
      minivodA = !projectn.startsWith(`${alertK}`);
      datah += `${(scrollviewm == String.fromCharCode(87,0) ? scrollviewm.length : (minivodA ? 1 : 5))}`;
       let delegate_qiO = 5;
       let volumen: Array<any> = [String.fromCharCode(120,105,110,103,95,101,95,50,48,0), String.fromCharCode(108,95,50,53,95,115,117,110,112,111,115,0), String.fromCharCode(102,105,103,117,114,101,95,121,95,49,51,0)];
       let orientationD = String.fromCharCode(111,102,102,101,114,95,112,95,54,50,0);
          let routera = true;
          let predictionQ = 0.0;
          let serviceX = 2.0;
         orientationD = `${1 - parseInt(`${predictionQ}`)}`;
         routera = !routera;
         predictionQ /= Math.max(4, parseInt(`${serviceX}`) - 1);
         serviceX /= Math.max(5, parseFloat(`${2 * parseInt(`${serviceX}`)}`));
      for (let p = 0; p < 1; p++) {
          let popupl = 0.0;
          let bdxadsdkx = String.fromCharCode(111,95,56,55,95,100,101,118,101,108,111,112,109,101,110,116,0);
         orientationD += `${2 << (Math.min(Math.abs(parseInt(`${popupl}`)), 2))}`;
         popupl *= parseFloat(`${bdxadsdkx.length & bdxadsdkx.length}`);
      }
         delegate_qiO <<= Math.min(Math.abs(3), 3);
         volumen = [delegate_qiO % (Math.max(5, volumen.length))];
      while ((volumen.length + 3) >= 1) {
          let projectq = 4.0;
          let nativeexS = String.fromCharCode(114,101,109,105,120,95,117,95,50,0);
         orientationD += "1";
         projectq /= Math.max(5, 2 * nativeexS.length);
         nativeexS += `${nativeexS.length >> (Math.min(2, Math.abs(parseInt(`${projectq}`))))}`;
         break;
      }
         volumen.push((String.fromCharCode(82,0) == orientationD ? orientationD.length : delegate_qiO));
         orientationD += `${delegate_qiO * 1}`;
      while ((delegate_qiO - orientationD.length) == 4 && (orientationD.length - delegate_qiO) == 4) {
          let codegenB = String.fromCharCode(121,95,53,52,95,116,105,109,101,115,0);
         delegate_qiO &= delegate_qiO;
         codegenB = "2";
         break;
      }
      while ((orientationD.length ^ volumen.length) == 2 && 1 == (2 ^ orientationD.length)) {
          let foregroundY = String.fromCharCode(116,104,114,101,101,115,116,97,116,101,95,120,95,54,55,0);
          let inactivey = String.fromCharCode(97,101,115,111,112,116,95,49,95,51,56,0);
          let sortJ = String.fromCharCode(109,101,101,116,117,112,95,119,95,55,48,0);
          let f_lock4 = false;
         orientationD += "3";
         foregroundY += `${((f_lock4 ? 3 : 5) >> (Math.min(sortJ.length, 5)))}`;
         inactivey += `${sortJ.length}`;
         f_lock4 = !f_lock4;
         break;
      }
      alertK /= Math.max(5, (parseFloat(`${String.fromCharCode(81,0) == orientationD ? projectn.length : orientationD.length}`)));
            iconTimer.current = setTimeout(() => setShowIcon(false), 1000);
        }
        onManualPause(isPause);
    };

    const handleLoadStart = useCallback(() => {
       let activeW = 2;
    let cores = String.fromCharCode(116,97,110,103,101,110,116,95,107,95,50,53,0);
    let ping2 = false;
    let settingsI: Map<any, any> = new Map([[String.fromCharCode(112,105,99,107,105,110,103,95,114,95,51,55,0),249], [String.fromCharCode(102,111,114,109,97,116,117,95,107,95,54,57,0),147]]);
    let configurew = 2.0;
    let klevind: Map<any, any> = new Map([[String.fromCharCode(113,95,53,55,95,113,109,97,116,0),760], [String.fromCharCode(114,101,97,108,109,95,57,95,51,53,0),958]]);
    let robotoB: Map<any, any> = new Map([[String.fromCharCode(107,95,54,51,95,99,104,101,99,107,115,117,109,109,101,100,0),false ], [String.fromCharCode(98,97,110,100,119,105,100,116,104,95,120,95,56,57,0),true ]]);
    let bufferY: Map<any, any> = new Map([[String.fromCharCode(117,95,56,54,95,99,111,110,115,116,114,97,105,110,101,100,0),17], [String.fromCharCode(100,101,99,101,108,101,114,97,116,105,110,103,95,51,95,54,53,0),174], [String.fromCharCode(108,95,55,51,95,114,109,117,108,116,105,112,108,105,99,97,116,105,111,110,0),604]]);
    let private_2xG: Array<any> = [6, 881];
    let favorite6: Array<any> = [133, 297, 603];
    let grayz: Array<any> = [505, 183];
       let executorW: Array<any> = [488, 679, 578];
       let private___ = String.fromCharCode(102,111,114,119,97,114,100,101,114,95,101,95,51,52,0);
       let google4 = 3.0;
      while ((private___.length >> (Math.min(3, executorW.length))) == 5) {
          let downloadingv = 1;
          let googleX: Map<any, any> = new Map([[String.fromCharCode(112,95,53,54,95,99,111,114,100,122,0),141], [String.fromCharCode(120,95,56,50,95,99,111,109,112,97,114,97,116,111,114,0),61], [String.fromCharCode(102,95,50,52,95,104,119,114,97,110,100,0),97]]);
          let reducero = 5;
          let libturbomodulejsijnib = 4.0;
          let libmapbufferjnia = false;
         private___ += `${(private___ == String.fromCharCode(112,0) ? googleX.size : private___.length)}`;
         downloadingv &= parseInt(`${libturbomodulejsijnib}`);
         googleX.set(`${libmapbufferjnia}`, 3);
         reducero %= Math.max(downloadingv % (Math.max(3, 7)), 4);
         libturbomodulejsijnib += parseFloat(`${parseInt(`${libturbomodulejsijnib}`)}`);
         libmapbufferjnia = !libmapbufferjnia;
         break;
      }
      let hongkong9 = 6031487.0 <= google4;
      do {
         google4 /= Math.max(5, 1 & private___.length);
         if (hongkong9) {
            break;
         }
      } while ((private___.includes(`${google4}`)) && hongkong9);
          let bufferT = String.fromCharCode(117,110,97,115,115,105,103,110,101,100,95,101,95,49,48,48,0);
          let indicatorD: Array<any> = [635, 502];
         executorW.push(executorW.length * parseInt(`${google4}`));
         bufferT = `${bufferT.length | indicatorD.length}`;
         indicatorD.push(2);
         private___ = `${parseInt(`${google4}`) % (Math.max(private___.length, 9))}`;
      let default_adh = 5048400 >= executorW.length;
      do {
          let homen = 1;
          let macauF = String.fromCharCode(108,95,52,48,95,120,114,101,115,0);
          let appleC = String.fromCharCode(115,95,57,51,95,115,101,116,102,100,0);
         executorW.push((String.fromCharCode(103,0) == macauF ? homen : macauF.length));
         homen ^= 3;
         if (default_adh) {
            break;
         }
      } while ((executorW.length >= private___.length) && default_adh);
         private___ = `${parseInt(`${google4}`)}`;
      let mbbannero = 6504225 >= private___.length;
      do {
          let videocommonS = 3;
         private___ = `${parseInt(`${google4}`)}`;
         videocommonS <<= Math.min(1, Math.abs(videocommonS >> (Math.min(Math.abs(2), 2))));
         if (mbbannero) {
            break;
         }
      } while (((5 << (Math.min(3, private___.length))) >= 5 || 1 >= (5 << (Math.min(2, executorW.length)))) && mbbannero);
          let countdownZ: Map<any, any> = new Map([[String.fromCharCode(115,95,50,51,95,101,110,116,101,114,0),286], [String.fromCharCode(112,97,114,116,105,99,105,112,97,110,116,115,95,110,95,53,52,0),685], [String.fromCharCode(114,101,97,100,101,114,95,53,95,57,54,0),508]]);
          let logoutp = 0.0;
         google4 -= 2;
         countdownZ = new Map([[`${countdownZ.size}`, countdownZ.size]]);
         logoutp -= countdownZ.size;
      for (let j = 0; j < 3; j++) {
         private___ += `${3 & private___.length}`;
      }
      cores += `${robotoB.size - 1}`;
   if (cores.length >= 3) {
       let gnewarchdefaults2 = String.fromCharCode(118,97,108,117,108,101,95,57,95,51,57,0);
       let libreactnativejniV: Map<any, any> = new Map([[String.fromCharCode(121,95,51,54,95,118,97,114,121,105,110,103,0),String.fromCharCode(109,97,116,114,105,120,102,95,122,95,49,52,0)], [String.fromCharCode(103,95,54,54,95,111,112,101,110,0),String.fromCharCode(118,95,56,53,95,114,101,118,105,101,119,115,0)]]);
       let borderlessf = String.fromCharCode(108,111,99,107,95,102,95,55,54,0);
         libreactnativejniV.set(gnewarchdefaults2, 3 ^ libreactnativejniV.size);
      while (libreactnativejniV.size > borderlessf.length) {
         borderlessf = `${gnewarchdefaults2.length + libreactnativejniV.size}`;
         break;
      }
      while ((gnewarchdefaults2.length + libreactnativejniV.size) == 2 || (libreactnativejniV.size + 2) == 4) {
         gnewarchdefaults2 = `${borderlessf.length >> (Math.min(Math.abs(3), 2))}`;
         break;
      }
          let trophyZ = 4.0;
          let tailF = 1.0;
         borderlessf = `${parseInt(`${trophyZ}`) / (Math.max(parseInt(`${tailF}`), 10))}`;
      let flipperP = 9608854 <= libreactnativejniV.size;
      do {
          let core5 = 1;
          let aboutF = 5.0;
          let libyogan = String.fromCharCode(122,95,57,53,95,113,117,97,100,114,97,116,105,99,0);
         libreactnativejniV.set(borderlessf, borderlessf.length);
         core5 >>= Math.min(1, Math.abs(core5 * 2));
         aboutF /= Math.max(parseFloat(`${libyogan.length}`), 2);
         libyogan += `${libyogan.length ^ core5}`;
         if (flipperP) {
            break;
         }
      } while (flipperP && (gnewarchdefaults2.includes(`${libreactnativejniV.size}`)));
         libreactnativejniV = new Map([[`${libreactnativejniV.size}`, 3 / (Math.max(7, borderlessf.length))]]);
      let container5 = 7784096 >= libreactnativejniV.size;
      do {
         libreactnativejniV = new Map([[`${libreactnativejniV.size}`, 1]]);
         if (container5) {
            break;
         }
      } while ((borderlessf.includes(`${libreactnativejniV.size}`)) && container5);
       let telemetryO = true;
         borderlessf = `${libreactnativejniV.size * 1}`;
      settingsI = new Map([[`${activeW}`, borderlessf.length]]);
   }
   let bufferH = 8309712.0 <= configurew;
   do {
      configurew -= parseFloat(`${1}`);
      if (bufferH) {
         break;
      }
   } while ((configurew < 2.99) && bufferH);
   if (2 < (robotoB.size | bufferY.size)) {
      bufferY = new Map([[`${activeW}`, ((ping2 ? 5 : 2) & activeW)]]);
   }
      klevind = new Map([[`${robotoB.size}`, (cores == String.fromCharCode(55,0) ? cores.length : robotoB.size)]]);
       let modalW: Map<any, any> = new Map([[String.fromCharCode(103,95,49,52,95,116,105,108,101,0),317], [String.fromCharCode(115,95,50,54,95,110,111,110,98,108,111,99,107,105,110,103,0),889], [String.fromCharCode(113,95,56,48,95,116,101,115,116,0),935]]);
       let humidityD = false;
      let dialogo = modalW.size >= 7031318;
      do {
          let downloaderh = 2.0;
          let current9 = 4.0;
          let downloading_ = String.fromCharCode(109,97,116,99,104,105,110,102,111,95,99,95,52,55,0);
          let calendarM: Map<any, any> = new Map([[String.fromCharCode(98,95,53,49,95,100,111,119,110,114,105,103,104,116,0),true ], [String.fromCharCode(106,95,49,95,101,107,121,0),true ]]);
         modalW = new Map([[`${downloaderh}`, parseInt(`${downloaderh}`) / 3]]);
         current9 *= parseFloat(`${calendarM.size}`);
         downloading_ += "2";
         calendarM = new Map([[`${calendarM.size}`, 1]]);
         if (dialogo) {
            break;
         }
      } while (dialogo && (humidityD));
         modalW.set(`${humidityD}`, (modalW.size + (humidityD ? 3 : 2)));
          let fieldC = String.fromCharCode(108,105,109,105,116,95,109,95,49,48,48,0);
          let signinupD = 4.0;
          let recommendationW: Array<any> = [260, 447, 50];
         modalW.set(`${signinupD}`, (String.fromCharCode(83,0) == fieldC ? fieldC.length : parseInt(`${signinupD}`)));
      let selectionJ = humidityD ? !humidityD : humidityD;
      do {
         humidityD = modalW.get(`${humidityD}`) == null;
         if (selectionJ) {
            break;
         }
      } while ((humidityD) && selectionJ);
      while (humidityD) {
         humidityD = (57 < ((humidityD ? 57 : modalW.size) | modalW.size));
         break;
      }
       let appsP = false;
      settingsI.set(`${klevind.size}`, klevind.size % (Math.max(3, bufferY.size)));
   for (let u = 0; u < 1; u++) {
       let baseb: Map<any, any> = new Map([[String.fromCharCode(110,95,55,48,95,97,108,108,111,119,0),String.fromCharCode(105,95,57,54,95,101,110,116,114,105,101,115,0)], [String.fromCharCode(102,101,109,97,108,101,95,113,95,50,56,0),String.fromCharCode(112,95,53,52,95,109,117,108,116,105,102,114,97,109,101,0)], [String.fromCharCode(106,95,57,95,117,99,111,110,115,116,0),String.fromCharCode(98,108,97,107,101,98,95,115,95,57,54,0)]]);
       let plashe = 3.0;
       let qaagP = 0.0;
         qaagP += parseFloat(`${parseInt(`${plashe}`) * 3}`);
         qaagP += parseFloat(`${parseInt(`${plashe}`) / 3}`);
      for (let x = 0; x < 2; x++) {
          let libflipperz = 4.0;
          let flipper1 = String.fromCharCode(117,112,100,97,116,101,95,119,95,53,53,0);
          let smallD = String.fromCharCode(97,118,117,116,105,108,95,118,95,57,49,0);
         plashe /= Math.max((parseFloat(`${smallD == String.fromCharCode(89,0) ? flipper1.length : smallD.length}`)), 5);
         libflipperz += parseInt(`${libflipperz}`);
         flipper1 = `${parseInt(`${libflipperz}`) + 2}`;
      }
          let update_up: Array<any> = [207, 346];
          let controlsX = 3.0;
         baseb.set(`${controlsX}`, parseInt(`${controlsX}`));
         update_up = [update_up.length];
         baseb.set(`${qaagP}`, 2);
      if ((plashe * qaagP) == 1.90 && (qaagP * plashe) == 1.90) {
         qaagP -= parseFloat(`${baseb.size & parseInt(`${qaagP}`)}`);
      }
         qaagP -= parseFloat(`${3 & parseInt(`${plashe}`)}`);
      let robotom = 6398322 >= baseb.size;
      do {
          let onewinterstitialv = false;
          let awayq = String.fromCharCode(97,117,116,111,97,114,99,104,105,118,101,95,103,95,56,52,0);
          let linkH = String.fromCharCode(99,111,110,115,117,109,101,100,95,122,95,49,49,0);
          let overlayc = true;
         baseb = new Map([[`${onewinterstitialv}`, ((onewinterstitialv ? 3 : 2) % (Math.max((overlayc ? 3 : 4), 1)))]]);
         awayq = "2";
         linkH = `${(String.fromCharCode(118,0) == linkH ? awayq.length : linkH.length)}`;
         overlayc = awayq == String.fromCharCode(105,0);
         if (robotom) {
            break;
         }
      } while (robotom && ((parseFloat(`${baseb.size}`) - qaagP) > 3.70 || (baseb.size - parseInt(`${qaagP}`)) > 2));
          let leagueQ = String.fromCharCode(111,95,49,95,115,101,113,117,101,110,116,105,97,108,0);
          let storel = String.fromCharCode(108,111,103,115,116,101,114,101,111,95,116,95,56,48,0);
          let package_vf = 4.0;
         plashe += parseFloat(`${baseb.size}`);
         leagueQ = `${(String.fromCharCode(122,0) == storel ? leagueQ.length : storel.length)}`;
         package_vf += parseFloat(`${parseInt(`${package_vf}`)}`);
      robotoB = new Map([[`${settingsI.size}`, 3]]);
   }
   let taiwanc = klevind.size <= 9180151;
   do {
       let grayP: Array<any> = [193, 874];
       let gdtadvg = 3;
       let modele = 2;
       let pageu = true;
      for (let q = 0; q < 3; q++) {
         modele |= grayP.length ^ 3;
      }
      for (let y = 0; y < 2; y++) {
         modele ^= 2;
      }
      let ksadB = 7394940 >= grayP.length;
      do {
         grayP.push(gdtadvg);
         if (ksadB) {
            break;
         }
      } while (ksadB && (gdtadvg == grayP.length));
       let mbridgeG = 2.0;
       let modal1 = 3.0;
      if (1 > (modele - gdtadvg)) {
         gdtadvg <<= Math.min(Math.abs(3 ^ parseInt(`${modal1}`)), 3);
      }
      while (1.27 == (modal1 * 4.68) && modal1 == 4.68) {
         pageu = 30 == modele || modal1 == 74.12;
         break;
      }
         grayP.push(1 << (Math.min(Math.abs(parseInt(`${modal1}`)), 4)));
          let libflipperl = 3.0;
          let sidea = 4.0;
         pageu = pageu && sidea > 11.77;
         libflipperl -= parseFloat(`${1}`);
         sidea += 1 ^ parseInt(`${libflipperl}`);
         gdtadvg %= Math.max(1, parseInt(`${modal1}`) / 3);
      let themeV = gdtadvg >= 5760387;
      do {
          let math4 = 4;
          let libreactnativejnib = 1.0;
          let orangez = 4.0;
          let memberH: Map<any, any> = new Map([[String.fromCharCode(99,114,101,97,116,105,111,110,95,120,95,54,50,0),701], [String.fromCharCode(99,95,53,55,95,120,102,101,114,0),264], [String.fromCharCode(106,95,52,50,95,114,117,110,116,105,109,101,0),316]]);
          let singaporei = String.fromCharCode(122,95,49,56,95,112,97,114,101,110,0);
         gdtadvg /= Math.max(2, 1);
         math4 %= Math.max(memberH.size, 2);
         libreactnativejnib -= parseFloat(`${parseInt(`${orangez}`) * singaporei.length}`);
         orangez += memberH.size % 3;
         singaporei += `${memberH.size % (Math.max(3, 6))}`;
         if (themeV) {
            break;
         }
      } while ((5.32 < mbridgeG) && themeV);
      let resultX = 8370072.0 >= modal1;
      do {
          let routerU = String.fromCharCode(105,110,116,101,114,97,99,116,105,111,110,115,95,53,95,51,56,0);
          let animationsO = String.fromCharCode(98,95,53,55,95,109,97,120,113,0);
          let interstitial0: Map<any, any> = new Map([[String.fromCharCode(112,95,52,57,95,116,109,112,108,0),839], [String.fromCharCode(105,110,100,101,112,101,110,100,101,100,95,100,95,53,49,0),962]]);
          let helperW = String.fromCharCode(108,95,57,49,95,101,114,114,108,111,103,0);
          let kickM: Map<any, any> = new Map([[String.fromCharCode(115,101,109,105,98,111,108,100,95,121,95,51,49,0),782], [String.fromCharCode(113,95,53,55,95,98,108,111,98,0),98]]);
         modal1 *= parseFloat(`${1}`);
         routerU += `${interstitial0.size}`;
         animationsO += `${1 >> (Math.min(3, Math.abs(kickM.size)))}`;
         interstitial0.set(routerU, routerU.length ^ 2);
         helperW += `${1 - animationsO.length}`;
         kickM.set(`${routerU}`, routerU.length);
         if (resultX) {
            break;
         }
      } while ((modal1 >= 1.86) && resultX);
      let matchesG = pageu ? !pageu : pageu;
      do {
         pageu = 7.92 <= modal1;
         if (matchesG) {
            break;
         }
      } while (matchesG && ((mbridgeG * 1.60) == 1.0 && mbridgeG == 1.60));
      klevind = new Map([[`${settingsI.size}`, settingsI.size >> (Math.min(Math.abs(1), 1))]]);
      if (taiwanc) {
         break;
      }
   } while ((!ping2) && taiwanc);
   while (!cores.startsWith(`${ping2}`)) {
      cores += `${activeW}`;
      break;
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
        yys_event_common.watchAnytimeAdsViewAnalytics({
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
       let backk = 5;
    let popupr: Map<any, any> = new Map([[String.fromCharCode(118,105,98,114,97,116,101,95,112,95,49,49,0),String.fromCharCode(117,110,114,101,108,105,97,98,108,101,95,99,95,52,54,0)], [String.fromCharCode(114,101,113,117,105,114,101,109,101,110,116,95,103,95,55,52,0),String.fromCharCode(103,95,57,57,95,101,108,101,109,115,0)], [String.fromCharCode(117,95,50,52,95,100,105,115,99,111,110,110,101,99,116,0),String.fromCharCode(115,95,50,50,0)]]);
    let sheet2 = true;
    let dycreator_: Array<any> = [906, 935];
    let classesq: Map<any, any> = new Map([[String.fromCharCode(101,112,122,115,95,97,95,52,57,0),838], [String.fromCharCode(100,114,97,119,116,101,120,116,95,104,95,50,48,0),457]]);
    let expandD = 2;
    let colorsv = String.fromCharCode(98,95,50,57,95,102,112,99,0);
    let playercommonF: Map<any, any> = new Map([[String.fromCharCode(103,95,54,54,95,115,109,97,108,108,101,114,0),String.fromCharCode(97,95,52,48,95,98,97,115,101,112,111,105,110,116,0)], [String.fromCharCode(114,95,51,50,95,114,101,118,97,108,105,100,97,116,101,100,0),String.fromCharCode(97,99,116,105,118,97,116,101,95,119,95,53,51,0)]]);
   let emojiJ = sheet2 ? !sheet2 : sheet2;
   do {
       let update_r9k = 0;
       let sidef = String.fromCharCode(116,95,51,52,95,99,111,100,101,115,0);
      if (3 > update_r9k) {
         sidef = `${sidef.length << (Math.min(Math.abs(1), 1))}`;
      }
      while (update_r9k > 5) {
         sidef += `${sidef.length ^ 3}`;
         break;
      }
      while (sidef.length > update_r9k) {
         sidef += `${sidef.length - 1}`;
         break;
      }
      if ((update_r9k ^ sidef.length) >= 1) {
         update_r9k *= (String.fromCharCode(103,0) == sidef ? update_r9k : sidef.length);
      }
         update_r9k <<= Math.min(3, Math.abs(sidef.length & 2));
      if (sidef.endsWith(`${update_r9k}`)) {
         sidef += "1";
      }
      sheet2 = String.fromCharCode(75,0) == colorsv;
      if (emojiJ) {
         break;
      }
   } while ((4 < (2 - dycreator_.length) || sheet2) && emojiJ);
   if ((5 >> (Math.min(3, dycreator_.length))) <= 3 && (dycreator_.length >> (Math.min(Math.abs(5), 1))) <= 4) {
      dycreator_.push(popupr.size >> (Math.min(Math.abs(1), 1)));
   }

            if ((isPause === true || isBuffering === true) && currentDuration < 1) {

      expandD &= (String.fromCharCode(48,0) == colorsv ? colorsv.length : (sheet2 ? 1 : 5));
       let mbjscommon3 = 5.0;
      if ((1.12 + mbjscommon3) == 5.72 || (1.12 + mbjscommon3) == 1.49) {
         mbjscommon3 *= parseFloat(`${parseInt(`${mbjscommon3}`) | 3}`);
      }
      if ((mbjscommon3 / 3.82) >= 4.13 || (mbjscommon3 / (Math.max(4, mbjscommon3))) >= 3.82) {
         mbjscommon3 += parseFloat(`${1 / (Math.max(10, parseInt(`${mbjscommon3}`)))}`);
      }
          let favoriter = String.fromCharCode(101,113,117,97,108,115,95,114,95,56,55,0);
          let libfabricjni7: Array<any> = [801, 681];
          let heartv: Map<any, any> = new Map([[String.fromCharCode(99,97,108,99,119,95,105,95,54,52,0),449], [String.fromCharCode(114,101,99,111,103,110,105,116,105,111,110,95,54,95,52,55,0),893], [String.fromCharCode(114,95,57,53,95,100,101,97,100,105,110,101,0),414]]);
         mbjscommon3 /= Math.max(parseFloat(`${parseInt(`${mbjscommon3}`)}`), 4);
         favoriter = `${libfabricjni7.length | heartv.size}`;
         libfabricjni7.push(3);
         heartv.set(favoriter, favoriter.length);
      expandD -= popupr.size;
                

   let disconnected0 = 6211121 >= popupr.size;
   do {
      popupr = new Map([[`${popupr.size}`, colorsv.length]]);
      if (disconnected0) {
         break;
      }
   } while ((popupr.get(`${dycreator_.length}`) == null) && disconnected0);
      expandD *= classesq.size;
                

       let launcheru = 4.0;
       let tumbnail7 = String.fromCharCode(109,105,115,115,105,110,103,95,121,95,49,48,0);
       let updates6 = true;
      let clubc = tumbnail7 == String.fromCharCode(48,112,113,95,103,55,122,120,105,117,0);
      do {
         tumbnail7 = `${((updates6 ? 3 : 4))}`;
         if (clubc) {
            break;
         }
      } while ((5.56 > (launcheru * 3.47)) && clubc);
      for (let p = 0; p < 1; p++) {
         tumbnail7 += `${tumbnail7.length * 3}`;
      }
         launcheru /= Math.max(3, (parseFloat(`${parseInt(`${launcheru}`) & (updates6 ? 2 : 1)}`)));
       let blackR = 3;
      while (2 <= (tumbnail7.length + parseInt(`${launcheru}`)) || (2 * tumbnail7.length) <= 4) {
          let nativemodulez = 0.0;
          let tickC = 5.0;
          let videoB = String.fromCharCode(113,95,49,56,95,97,108,116,101,114,0);
         launcheru *= parseFloat(`${videoB.length}`);
         nativemodulez += parseInt(`${tickC}`);
         tickC /= Math.max(5, parseFloat(`${2 ^ parseInt(`${nativemodulez}`)}`));
         videoB = `${parseInt(`${nativemodulez}`)}`;
         break;
      }
      for (let d = 0; d < 1; d++) {
         updates6 = !updates6;
      }
          let volumeh = String.fromCharCode(106,95,57,95,100,101,102,105,110,105,116,105,111,110,0);
         tumbnail7 += `${volumeh.length % 1}`;
      while (3 == tumbnail7.length) {
         tumbnail7 = `${(3 << (Math.min(1, Math.abs((updates6 ? 1 : 3)))))}`;
         break;
      }
      if (2 < blackR && (blackR % (Math.max(2, 4))) < 5) {
         updates6 = blackR <= 18;
      }
      backk -= (String.fromCharCode(55,0) == colorsv ? classesq.size : colorsv.length);
       let resendy = 2.0;
       let libhermesr = 0.0;
      while ((libhermesr * resendy) > 3.62 && 4.100 > (resendy * 3.62)) {
          let acceptedp = String.fromCharCode(104,95,50,54,95,109,110,101,109,111,110,105,99,0);
          let auto_k0N = 4.0;
         resendy /= Math.max(2, 5);
         acceptedp = `${acceptedp.length}`;
         auto_k0N -= acceptedp.length;
         break;
      }
       let nalyticsE: Map<any, any> = new Map([[String.fromCharCode(100,101,99,111,109,112,114,101,115,115,105,111,110,95,121,95,53,54,0),410], [String.fromCharCode(115,105,110,107,115,95,51,95,50,50,0),521]]);
      if (nalyticsE.size > resendy) {
         resendy += parseInt(`${resendy}`);
      }
       let giftL = String.fromCharCode(104,119,116,105,109,101,95,49,95,49,49,0);
         nalyticsE = new Map([[`${nalyticsE.size}`, 1]]);
          let turn1: Array<any> = [String.fromCharCode(97,95,57,48,95,118,116,97,115,107,113,117,101,117,101,0), String.fromCharCode(116,101,115,116,105,109,103,105,110,116,95,108,95,51,0)];
          let membershipH = String.fromCharCode(108,95,55,95,116,121,112,101,99,111,100,101,0);
          let nterstitialE: Map<any, any> = new Map([[String.fromCharCode(102,95,53,56,95,118,100,101,98,117,103,0),765], [String.fromCharCode(100,105,114,101,99,116,108,121,95,56,95,52,53,0),846]]);
         libhermesr *= turn1.length >> (Math.min(3, Math.abs(nterstitialE.size)));
         turn1 = [membershipH.length - membershipH.length];
      backk <<= Math.min(1, Math.abs(colorsv.length >> (Math.min(5, Math.abs(expandD)))));
                

   let renewr = expandD <= 9887265;
   do {
      expandD += 1;
      if (renewr) {
         break;
      }
   } while (renewr && ((expandD + colorsv.length) >= 2 || (2 + colorsv.length) >= 4));
      popupr = new Map([[`${dycreator_.length}`, dycreator_.length]]);

                const fileLocation =
                    RNFetchBlob.fs.dirs.DocumentDir +
                    `/videocache/${currentVod.mini_video_id}.mp4`;

   for (let a = 0; a < 3; a++) {
       let hongkongk = 0;
       let emptyl: Array<any> = [456, 395, 661];
       let libcrashsdkY = String.fromCharCode(115,95,57,53,95,105,110,116,101,110,116,115,0);
       let fasth = false;
       let bellc = 5.0;
      for (let b = 0; b < 2; b++) {
         fasth = !fasth;
      }
      let weibo_ = fasth ? !fasth : fasth;
      do {
          let xnewsy = 2.0;
         fasth = 55.0 == xnewsy && String.fromCharCode(49,0) == libcrashsdkY;
         if (weibo_) {
            break;
         }
      } while (weibo_ && (!fasth));
       let p_viewR = String.fromCharCode(119,95,52,55,95,114,101,98,117,105,108,100,0);
       let commonE = String.fromCharCode(98,117,102,102,101,114,115,105,110,107,95,101,95,49,54,0);
      for (let z = 0; z < 2; z++) {
         commonE = `${(libcrashsdkY == String.fromCharCode(71,0) ? libcrashsdkY.length : emptyl.length)}`;
      }
      for (let w = 0; w < 2; w++) {
         libcrashsdkY += "3";
      }
      if (commonE == p_viewR) {
          let friendsN = String.fromCharCode(100,105,103,101,115,116,98,121,110,105,100,95,101,95,56,50,0);
          let commentK = 3.0;
          let activityC = String.fromCharCode(110,111,116,104,105,110,103,95,118,95,49,49,0);
          let disconnectedQ = String.fromCharCode(102,95,57,49,95,107,101,121,102,114,97,109,101,115,0);
          let sansa = String.fromCharCode(114,105,100,95,119,95,50,0);
         p_viewR += `${(disconnectedQ == String.fromCharCode(103,0) ? emptyl.length : disconnectedQ.length)}`;
         friendsN = `${parseInt(`${commentK}`) | friendsN.length}`;
         commentK -= (parseFloat(`${String.fromCharCode(66,0) == activityC ? parseInt(`${commentK}`) : activityC.length}`));
         sansa += `${parseInt(`${commentK}`)}`;
      }
          let commonA: Array<any> = [122, 73, 702];
         commonE = `${hongkongk}`;
         commonA.push(commonA.length);
         fasth = ((emptyl.length | (!fasth ? 14 : emptyl.length)) < 14);
         bellc += (parseFloat(`${1 + (fasth ? 3 : 1)}`));
         p_viewR += "3";
      if ((bellc + 4.78) > 3.39) {
          let progressE = 2.0;
         fasth = (emptyl.length ^ hongkongk) >= 20;
         progressE += parseFloat(`${parseInt(`${progressE}`) - 3}`);
      }
       let dropdownc = String.fromCharCode(116,95,57,52,95,112,117,116,115,0);
         fasth = p_viewR.length < hongkongk;
      for (let a = 0; a < 1; a++) {
          let minivodA = 3.0;
          let refreshn = 1.0;
          let guideY = 2;
         libcrashsdkY = `${parseInt(`${minivodA}`) & 1}`;
         minivodA /= Math.max(5, 1);
         refreshn -= parseFloat(`${parseInt(`${refreshn}`) >> (Math.min(2, Math.abs(guideY)))}`);
         guideY %= Math.max(1, parseInt(`${refreshn}`) % (Math.max(2, guideY)));
      }
      for (let i = 0; i < 3; i++) {
         bellc *= parseFloat(`${emptyl.length}`);
      }
      expandD |= 3 - classesq.size;
   }
       let g_titleV: Map<any, any> = new Map([[String.fromCharCode(120,95,50,48,95,114,101,97,114,114,97,110,103,101,0),33], [String.fromCharCode(116,120,105,100,95,100,95,56,56,0),342]]);
       let overlayf = 3.0;
       let gradlew8 = String.fromCharCode(121,95,56,56,95,115,111,110,111,0);
         overlayf -= parseFloat(`${parseInt(`${overlayf}`)}`);
         gradlew8 += `${parseInt(`${overlayf}`) - 1}`;
          let forwardQ = String.fromCharCode(115,99,116,112,95,99,95,50,0);
         overlayf *= parseFloat(`${parseInt(`${overlayf}`) % (Math.max(1, gradlew8.length))}`);
         forwardQ = `${3 << (Math.min(1, forwardQ.length))}`;
          let orientationt = 4.0;
          let libcxxcomponentsN: Array<any> = [592, 724, 484];
         overlayf *= parseFloat(`${g_titleV.size ^ 2}`);
         orientationt /= Math.max(3 | libcxxcomponentsN.length, 4);
         libcxxcomponentsN.push(parseInt(`${orientationt}`));
         gradlew8 = `${3 << (Math.min(1, Math.abs(g_titleV.size)))}`;
         gradlew8 += `${g_titleV.size}`;
      let with_4d = 7163741.0 <= overlayf;
      do {
          let progressc = String.fromCharCode(107,95,56,53,95,103,117,105,100,0);
         overlayf += parseFloat(`${g_titleV.size}`);
         progressc += `${progressc.length}`;
         if (with_4d) {
            break;
         }
      } while (with_4d && (5 > (g_titleV.size * parseInt(`${overlayf}`)) && (overlayf * parseFloat(`${g_titleV.size}`)) > 1.10));
         overlayf *= parseFloat(`${1 + parseInt(`${overlayf}`)}`);
      let handler_ = 8399412.0 >= overlayf;
      do {
         overlayf *= parseFloat(`${1}`);
         if (handler_) {
            break;
         }
      } while ((4.92 < overlayf) && handler_);
      dycreator_ = [3];

                const fileExist = await RNFetchBlob.fs.exists(fileLocation);

   let matchesX = expandD >= 8688044;
   do {
      expandD += 3;
      if (matchesX) {
         break;
      }
   } while (((expandD << (Math.min(colorsv.length, 2))) == 4) && matchesX);
      dycreator_.push(popupr.size * 1);


                if (fileExist) {

      classesq.set(`${backk}`, 2);
      backk += classesq.size / (Math.max(7, backk));
                    const fileIsEmpty = (await RNFetchBlob.fs.stat(fileLocation)).size == 0

       let relatedK = 1.0;
         relatedK += parseFloat(`${parseInt(`${relatedK}`) * parseInt(`${relatedK}`)}`);
         relatedK += parseFloat(`${parseInt(`${relatedK}`)}`);
         relatedK -= parseFloat(`${3 / (Math.max(5, parseInt(`${relatedK}`)))}`);
      expandD += ((sheet2 ? 3 : 4));
      dycreator_ = [(String.fromCharCode(105,0) == colorsv ? colorsv.length : dycreator_.length)];
                    

      sheet2 = (backk / (Math.max(popupr.size, 4))) >= 5;
      classesq.set(`${dycreator_.length}`, dycreator_.length - classesq.size);
                    if (!fileIsEmpty) {

   while (!colorsv.startsWith(`${popupr.size}`)) {
      popupr.set(`${expandD}`, 1);
      break;
   }
      expandD *= ((sheet2 ? 5 : 4));
                        setMiniVodUrl(`${fileLocation}`);
                    } else {

   if (4 == dycreator_.length) {
       let leftO = false;
       let overO = String.fromCharCode(101,110,117,109,115,95,99,95,53,57,0);
      while (!leftO) {
         leftO = leftO && overO.length >= 26;
         break;
      }
      while (leftO) {
         leftO = ((overO.length | (!leftO ? 41 : overO.length)) == 41);
         break;
      }
          let detailsr = String.fromCharCode(103,95,51,51,0);
         leftO = overO.startsWith(`${leftO}`);
         detailsr += `${(String.fromCharCode(66,0) == detailsr ? detailsr.length : detailsr.length)}`;
      if (!overO.startsWith(`${leftO}`)) {
         overO += `${overO.length << (Math.min(Math.abs(2), 1))}`;
      }
         overO = `${(String.fromCharCode(70,0) == overO ? overO.length : (leftO ? 3 : 3))}`;
         leftO = (15 >= (overO.length & (leftO ? 15 : overO.length)));
      sheet2 = 48 < playercommonF.size;
   }
   while (3 == (1 - expandD)) {
       let readA = 1.0;
       let playercommoni = String.fromCharCode(115,97,110,105,116,105,122,101,114,95,102,95,54,49,0);
      if (playercommoni.length <= parseInt(`${readA}`)) {
          let halft = 4.0;
         playercommoni = `${parseInt(`${readA}`) * 2}`;
         halft += parseFloat(`${parseInt(`${halft}`)}`);
      }
      let mbbidw = playercommoni.length <= 5734687;
      do {
         playercommoni = `${(playercommoni == String.fromCharCode(84,0) ? parseInt(`${readA}`) : playercommoni.length)}`;
         if (mbbidw) {
            break;
         }
      } while (mbbidw && (readA == 4.45));
      let membershipb = 9645481 <= playercommoni.length;
      do {
         playercommoni = `${parseInt(`${readA}`) >> (Math.min(Math.abs(2), 4))}`;
         if (membershipb) {
            break;
         }
      } while (membershipb && (playercommoni.length <= parseInt(`${readA}`)));
         readA += parseFloat(`${playercommoni.length}`);
         playercommoni = `${(playercommoni == String.fromCharCode(49,0) ? parseInt(`${readA}`) : playercommoni.length)}`;
      for (let u = 0; u < 1; u++) {
         playercommoni += "3";
      }
      expandD &= playercommonF.size | 1;
      break;
   }
                        

      sheet2 = 89 <= expandD || sheet2;
   if (1 <= (classesq.size ^ colorsv.length)) {
      colorsv = `${popupr.size}`;
   }
                        setMiniVodUrl(currentVod.ads_pic)
                    }
                } else {

   while ((popupr.size + 2) <= 2 && !sheet2) {
      sheet2 = (dycreator_.length - playercommonF.size) < 30;
      break;
   }
   while ((popupr.size / (Math.max(5, expandD))) >= 3 && (3 / (Math.max(10, expandD))) >= 5) {
       let fill7 = false;
       let containerK = true;
         containerK = fill7 && !containerK;
         containerK = containerK || fill7;
          let styleK = 3.0;
         containerK = styleK > 27.62;
      if (fill7) {
          let long_9X = String.fromCharCode(115,105,122,101,108,101,115,115,95,97,95,52,54,0);
          let googleq = 1.0;
          let privilege_: Map<any, any> = new Map([[String.fromCharCode(101,120,101,99,117,116,105,110,103,95,117,95,49,57,0),String.fromCharCode(118,97,114,105,97,100,105,99,95,122,95,53,50,0)], [String.fromCharCode(97,95,55,95,115,116,114,105,112,101,0),String.fromCharCode(111,95,51,53,95,112,114,111,118,105,115,105,111,110,0)]]);
          let mbridgeF = String.fromCharCode(108,95,56,48,95,112,114,101,115,101,110,116,0);
          let refresh_ = String.fromCharCode(122,95,56,51,95,104,101,97,112,0);
         fill7 = refresh_.length == 48;
         long_9X += `${parseInt(`${googleq}`) | 3}`;
         googleq -= 2;
         privilege_ = new Map([[`${googleq}`, mbridgeF.length]]);
         mbridgeF += `${parseInt(`${googleq}`)}`;
         refresh_ += `${mbridgeF.length + 2}`;
      }
       let activeb = String.fromCharCode(106,95,57,95,100,105,115,112,108,97,99,101,0);
      for (let v = 0; v < 1; v++) {
         activeb = `${(String.fromCharCode(49,0) == activeb ? (containerK ? 2 : 3) : activeb.length)}`;
      }
      expandD ^= 1;
      break;
   }
                    

   while (backk >= popupr.size) {
      popupr = new Map([[`${playercommonF.size}`, backk | 1]]);
      break;
   }
       let combinedc: Array<any> = [930, 385, 924];
       let whitef = 0.0;
      let mbridges = 7729781 >= combinedc.length;
      do {
         combinedc.push(parseInt(`${whitef}`) << (Math.min(combinedc.length, 4)));
         if (mbridges) {
            break;
         }
      } while (mbridges && (!combinedc.includes(whitef)));
      for (let z = 0; z < 2; z++) {
          let ticked0 = true;
          let abidetectD = 4.0;
          let rewardu: Map<any, any> = new Map([[String.fromCharCode(108,95,54,53,95,118,105,101,119,0),173], [String.fromCharCode(115,95,57,54,95,112,97,121,109,97,115,116,101,114,0),209]]);
          let overlay6 = 1.0;
          let signinupI = 5.0;
         whitef -= combinedc.length;
         ticked0 = (parseInt(`${signinupI}`) + rewardu.size) > 91;
         abidetectD -= parseFloat(`${2 >> (Math.min(Math.abs(parseInt(`${signinupI}`)), 2))}`);
         rewardu = new Map([[`${ticked0}`, 3 - parseInt(`${signinupI}`)]]);
         overlay6 += rewardu.size - parseInt(`${abidetectD}`);
      }
         whitef /= Math.max(combinedc.length, 4);
      if ((5 / (Math.max(8, combinedc.length))) > 1) {
          let stringsn: Array<any> = [295, 437, 158];
          let colorsu: Map<any, any> = new Map([[String.fromCharCode(104,95,55,55,95,99,97,110,111,110,105,99,97,108,105,122,101,100,0),670], [String.fromCharCode(110,95,49,48,48,95,114,101,115,0),396]]);
         whitef *= 3;
         stringsn = [colorsu.size];
         colorsu = new Map([[`${colorsu.size}`, colorsu.size % (Math.max(stringsn.length, 3))]]);
      }
      let quest0 = 6104413 >= combinedc.length;
      do {
         combinedc.push(1 - combinedc.length);
         if (quest0) {
            break;
         }
      } while ((4 < (combinedc.length & 2)) && quest0);
      for (let n = 0; n < 2; n++) {
         combinedc.push(parseInt(`${whitef}`) / 1);
      }
      colorsv += "3";
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
       let rulesf = String.fromCharCode(115,95,55,56,95,111,108,100,101,115,116,0);
    let awayc = 3;
    let pagez = String.fromCharCode(98,111,97,116,95,53,95,53,56,0);
    let dangerG: Array<any> = [468, 548];
    let successC = String.fromCharCode(115,97,109,112,108,101,99,112,121,95,99,95,55,51,0);
    let foreground7 = String.fromCharCode(100,101,115,99,114,105,112,116,111,114,95,114,95,51,48,0);
    let membershipm = 0.0;
    let starq: Map<any, any> = new Map([[String.fromCharCode(118,95,54,57,95,109,97,116,99,104,105,110,102,111,0),434], [String.fromCharCode(116,97,103,99,111,109,112,97,114,101,95,106,95,50,56,0),203], [String.fromCharCode(100,101,108,116,97,95,55,95,49,55,0),670]]);
    let small4 = String.fromCharCode(113,117,105,99,107,99,111,109,112,114,101,115,115,95,109,95,50,51,0);
    let malaysiaQ = String.fromCharCode(98,95,53,50,95,111,119,110,101,114,115,104,105,112,0);
   for (let d = 0; d < 3; d++) {
      awayc *= (rulesf == String.fromCharCode(116,0) ? rulesf.length : awayc);
   }
   for (let u = 0; u < 1; u++) {
      successC += `${starq.size + rulesf.length}`;
   }
   while (foreground7.includes(`${small4.length}`)) {
      small4 = `${foreground7.length}`;
      break;
   }
   let recommendationO = 5210975 >= dangerG.length;
   do {
      dangerG = [(small4 == String.fromCharCode(79,0) ? rulesf.length : small4.length)];
      if (recommendationO) {
         break;
      }
   } while (recommendationO && (successC.length <= 2));
   while (2 >= (dangerG.length >> (Math.min(Math.abs(5), 4)))) {
      rulesf = `${dangerG.length / 2}`;
      break;
   }
   if (2 < (3 << (Math.min(5, dangerG.length)))) {
      rulesf = `${3 * small4.length}`;
   }
   while (small4 == foreground7) {
       let filter6 = false;
       let baiduG = String.fromCharCode(114,110,103,95,117,95,52,51,0);
       let mbjscommon6: Array<any> = [541, 541];
         baiduG += "3";
      while (filter6 || baiduG.length == 2) {
         baiduG = "2";
         break;
      }
         baiduG += `${baiduG.length}`;
      if (baiduG.length <= mbjscommon6.length) {
          let entryM = String.fromCharCode(99,117,114,114,101,110,116,95,100,95,56,52,0);
         baiduG = `${(entryM == String.fromCharCode(77,0) ? entryM.length : mbjscommon6.length)}`;
      }
      while ((4 & mbjscommon6.length) >= 3 || (mbjscommon6.length & 4) >= 4) {
         baiduG += `${(String.fromCharCode(79,0) == baiduG ? mbjscommon6.length : baiduG.length)}`;
         break;
      }
      if ((mbjscommon6.length << (Math.min(Math.abs(1), 2))) <= 5 || 1 <= mbjscommon6.length) {
         filter6 = baiduG.length >= 27 && filter6;
      }
         filter6 = !filter6;
      if (3 >= baiduG.length) {
          let mbsplashj = String.fromCharCode(97,117,116,104,101,110,116,105,99,97,116,101,95,102,95,57,0);
         mbjscommon6 = [3 % (Math.max(10, baiduG.length))];
         mbsplashj += `${mbsplashj.length & mbsplashj.length}`;
      }
      let telegramh = 8797804 >= baiduG.length;
      do {
          let linkj = 1.0;
         baiduG += `${((filter6 ? 3 : 1))}`;
         linkj -= parseInt(`${linkj}`);
         if (telegramh) {
            break;
         }
      } while ((4 < (baiduG.length ^ 3)) && telegramh);
      foreground7 += "3";
      break;
   }
   let pagination6 = awayc >= 8259361;
   do {
       let sheetW = false;
       let libimagepipelineB = 1.0;
      for (let h = 0; h < 3; h++) {
         libimagepipelineB -= ((sheetW ? 5 : 3) / (Math.max(parseInt(`${libimagepipelineB}`), 10)));
      }
      for (let z = 0; z < 1; z++) {
         sheetW = 18.74 == libimagepipelineB && !sheetW;
      }
         libimagepipelineB *= ((sheetW ? 4 : 2) ^ parseInt(`${libimagepipelineB}`));
      let giftq = sheetW ? !sheetW : sheetW;
      do {
          let lessp = String.fromCharCode(98,97,115,105,99,95,54,95,53,49,0);
          let collectioni = String.fromCharCode(107,95,56,49,95,118,99,114,101,97,116,101,0);
          let grayt: Map<any, any> = new Map([[String.fromCharCode(111,118,101,114,95,105,95,57,55,0),false ], [String.fromCharCode(108,97,115,114,95,117,95,50,52,0),false ], [String.fromCharCode(100,95,53,50,95,108,111,99,107,115,99,114,101,101,110,0),false ]]);
         sheetW = String.fromCharCode(117,0) == lessp && 27.20 >= libimagepipelineB;
         lessp += `${collectioni.length | grayt.size}`;
         collectioni = `${grayt.size}`;
         if (giftq) {
            break;
         }
      } while ((2.25 < libimagepipelineB) && giftq);
      if (sheetW) {
         libimagepipelineB += ((sheetW ? 5 : 1) % (Math.max(parseInt(`${libimagepipelineB}`), 3)));
      }
      while (!sheetW && 3.27 == (2.66 + libimagepipelineB)) {
         libimagepipelineB *= ((sheetW ? 3 : 4) % (Math.max(parseInt(`${libimagepipelineB}`), 6)));
         break;
      }
      awayc >>= Math.min(Math.abs(dangerG.length + 3), 4);
      if (pagination6) {
         break;
      }
   } while (pagination6 && (4 < (starq.size | awayc) && (4 | starq.size) < 2));
      starq.set(rulesf, (rulesf == String.fromCharCode(49,0) ? dangerG.length : rulesf.length));
   for (let d = 0; d < 1; d++) {
       let recommendationY = String.fromCharCode(102,95,57,51,95,101,110,118,0);
       let entryw = 0.0;
      for (let d = 0; d < 2; d++) {
         entryw *= recommendationY.length << (Math.min(Math.abs(2), 5));
      }
          let fileL = false;
          let uimanagerd = String.fromCharCode(115,95,57,54,95,115,121,110,116,104,101,115,105,122,101,114,0);
          let greyq: Array<any> = [535, 881];
         entryw /= Math.max(5, parseInt(`${entryw}`));
         fileL = greyq.includes(fileL);
         uimanagerd = `${2 + greyq.length}`;
          let optionsl: Map<any, any> = new Map([[String.fromCharCode(115,95,57,50,95,99,104,97,114,97,99,116,101,114,105,115,116,105,99,115,0),String.fromCharCode(100,95,52,56,95,99,97,99,104,101,0)], [String.fromCharCode(116,114,105,112,108,101,95,99,95,53,49,0),String.fromCharCode(114,101,112,114,101,115,101,110,116,97,116,105,118,101,95,116,95,56,0)], [String.fromCharCode(102,105,108,101,104,101,97,100,101,114,95,116,95,50,48,0),String.fromCharCode(120,95,49,48,95,110,99,98,99,0)]]);
          let textinputM = String.fromCharCode(108,105,110,103,101,114,95,122,95,52,57,0);
         recommendationY = `${(recommendationY == String.fromCharCode(95,0) ? optionsl.size : recommendationY.length)}`;
         optionsl = new Map([[textinputM, textinputM.length]]);
       let history_ = String.fromCharCode(104,101,105,103,104,116,115,95,99,95,50,54,0);
      for (let s = 0; s < 2; s++) {
         recommendationY += `${parseInt(`${entryw}`) % (Math.max(recommendationY.length, 4))}`;
      }
      let sheets = entryw <= 7408046.0;
      do {
          let h_player8 = String.fromCharCode(108,95,57,54,95,97,112,112,114,111,118,101,0);
          let mbnativeX = 2.0;
          let linee = 3;
          let klevinB = String.fromCharCode(100,95,52,50,95,115,116,114,108,101,110,0);
         entryw += 1;
         h_player8 += `${klevinB.length - parseInt(`${mbnativeX}`)}`;
         mbnativeX *= 1;
         linee *= 3;
         klevinB += "3";
         if (sheets) {
            break;
         }
      } while (sheets && (recommendationY.startsWith(`${entryw}`)));
      foreground7 += `${awayc | parseInt(`${membershipm}`)}`;
   }
   let user1 = dangerG.length <= 5936915;
   do {
      dangerG.push(1);
      if (user1) {
         break;
      }
   } while (user1 && (starq.get(`${dangerG.length}`) == null));
      pagez = `${3 + starq.size}`;
   let expandS = 7340845 >= pagez.length;
   do {
       let scoreA = String.fromCharCode(122,95,55,49,95,100,97,116,101,115,0);
       let statsC = String.fromCharCode(116,95,49,56,95,109,101,116,114,105,99,115,0);
       let submit4: Array<any> = [966, 367];
       let containerr = 4;
       let sentryX: Array<any> = [String.fromCharCode(110,95,57,50,95,100,114,101,102,0), String.fromCharCode(122,95,50,54,95,100,97,116,97,104,97,115,104,0)];
       let sourceG = String.fromCharCode(105,95,49,48,95,99,114,101,97,116,101,0);
       let componentD = String.fromCharCode(97,95,56,56,95,105,110,97,99,116,105,118,101,0);
       let libavdeviceR = String.fromCharCode(97,118,97,108,97,110,99,104,101,95,105,95,50,52,0);
      if (4 == scoreA.length) {
          let libfbT = 0;
          let shareA = 0.0;
          let xadsdkU = String.fromCharCode(98,114,105,100,103,101,100,95,120,95,54,53,0);
          let dplusg = 1.0;
          let searchm = 2.0;
         scoreA += "1";
         libfbT ^= 1 - parseInt(`${shareA}`);
         shareA -= parseFloat(`${libfbT}`);
         xadsdkU += `${libfbT}`;
         dplusg += parseFloat(`${3}`);
         searchm /= Math.max(1, parseFloat(`${libfbT}`));
      }
      while (libavdeviceR.length > 2) {
          let membershipd = String.fromCharCode(100,116,108,115,95,107,95,50,50,0);
          let libswscaleg = String.fromCharCode(112,97,103,101,110,111,95,99,95,52,54,0);
          let ewardedY = false;
          let ksadP = String.fromCharCode(107,95,54,49,95,114,101,108,97,117,110,99,104,0);
          let streamingI = 1.0;
         containerr &= (membershipd == String.fromCharCode(85,0) ? componentD.length : membershipd.length);
         libswscaleg += `${parseInt(`${streamingI}`) - ksadP.length}`;
         ewardedY = 55 == ksadP.length;
         streamingI -= (libswscaleg == String.fromCharCode(68,0) ? libswscaleg.length : parseInt(`${streamingI}`));
         break;
      }
      while (componentD != sourceG) {
         sourceG = `${componentD.length}`;
         break;
      }
      let qaagL = submit4.length >= 9224967;
      do {
         submit4.push(containerr);
         if (qaagL) {
            break;
         }
      } while (qaagL && (3 >= (submit4.length - 1) || (1 - sourceG.length) >= 2));
      while (2 > (3 / (Math.max(9, submit4.length))) && 3 > (3 / (Math.max(6, submit4.length)))) {
         scoreA = "2";
         break;
      }
         statsC = "2";
      while (containerr < sourceG.length) {
          let textlayoutmanager0 = 0;
          let commentr = false;
          let whitex = true;
          let kick5 = 0.0;
         containerr ^= 2 + sentryX.length;
         textlayoutmanager0 ^= textlayoutmanager0;
         commentr = textlayoutmanager0 > 93 || kick5 > 61.30;
         whitex = whitex || !commentr;
         kick5 /= Math.max((parseFloat(`${parseInt(`${kick5}`) + (commentr ? 2 : 4)}`)), 5);
         break;
      }
         scoreA += `${1 >> (Math.min(4, libavdeviceR.length))}`;
         componentD += `${2 - submit4.length}`;
      let configR = 6054616 <= containerr;
      do {
         containerr /= Math.max(2, (String.fromCharCode(121,0) == statsC ? submit4.length : statsC.length));
         if (configR) {
            break;
         }
      } while ((4 == sentryX.length) && configR);
       let away3 = false;
       let gemfile3 = true;
      let play0 = sentryX.length >= 8124626;
      do {
          let disconnected_ = 5;
          let promotion2: Array<any> = [239, 823, 209];
          let sinak = String.fromCharCode(115,121,115,99,116,108,95,53,95,49,54,0);
          let filedd = String.fromCharCode(101,95,54,95,115,97,109,112,108,101,114,0);
          let humidityv = 1.0;
         sentryX.push(filedd.length);
         disconnected_ <<= Math.min(Math.abs(1), 3);
         promotion2 = [1];
         sinak = "2";
         filedd += `${disconnected_ % 2}`;
         humidityv /= Math.max(1, 3);
         if (play0) {
            break;
         }
      } while ((away3) && play0);
       let promotionM = String.fromCharCode(98,95,51,51,95,112,97,105,114,115,0);
      pagez += `${scoreA.length}`;
      if (expandS) {
         break;
      }
   } while (expandS && (pagez.length >= 1));

        setVideoReadyIos(true)

      pagez += `${awayc >> (Math.min(rulesf.length, 4))}`;
   let expiredR = 4927661 <= rulesf.length;
   do {
       let utilsF = String.fromCharCode(110,112,114,111,98,101,95,57,95,49,53,0);
       let descZ = String.fromCharCode(102,95,57,55,95,100,111,116,0);
      while (utilsF.length == descZ.length) {
         descZ = `${1 | descZ.length}`;
         break;
      }
         descZ = `${(descZ == String.fromCharCode(78,0) ? descZ.length : utilsF.length)}`;
      let alertm = utilsF == String.fromCharCode(106,114,113,105,0);
      do {
          let mbbidB = String.fromCharCode(104,95,56,95,115,117,99,99,101,101,100,101,100,0);
          let mbbannerI = String.fromCharCode(103,95,52,53,95,99,111,112,121,120,110,0);
          let tickedq = String.fromCharCode(119,95,55,49,95,99,97,110,99,101,108,108,101,114,0);
         utilsF = `${utilsF.length}`;
         mbbidB += `${mbbidB.length}`;
         mbbannerI += `${(tickedq == String.fromCharCode(106,0) ? mbbannerI.length : tickedq.length)}`;
         if (alertm) {
            break;
         }
      } while (alertm && (!utilsF.includes(descZ)));
      for (let e = 0; e < 2; e++) {
         descZ = `${descZ.length}`;
      }
      for (let p = 0; p < 1; p++) {
         utilsF += `${(descZ == String.fromCharCode(79,0) ? descZ.length : utilsF.length)}`;
      }
      if (utilsF.length > descZ.length) {
         utilsF += `${descZ.length}`;
      }
      rulesf = `${(String.fromCharCode(89,0) == utilsF ? utilsF.length : dangerG.length)}`;
      if (expiredR) {
         break;
      }
   } while (expiredR && (rulesf.includes(`${small4.length}`)));
       let roott = 1;
       let unread2 = 0.0;
      let zhuboD = 8792451.0 >= unread2;
      do {
         unread2 -= parseInt(`${unread2}`);
         if (zhuboD) {
            break;
         }
      } while (zhuboD && (unread2 <= 1.95));
       let mintegrall = 4.0;
      for (let d = 0; d < 2; d++) {
         unread2 /= Math.max(2, 2);
      }
         mintegrall += parseFloat(`${parseInt(`${unread2}`)}`);
         mintegrall -= parseFloat(`${parseInt(`${unread2}`) % 2}`);
      let dark1 = unread2 >= 9825638.0;
      do {
         unread2 += 1 + parseInt(`${unread2}`);
         if (dark1) {
            break;
         }
      } while (dark1 && (5.45 == (mintegrall + 3)));
      membershipm -= parseFloat(`${dangerG.length / 3}`);
      roott &= roott >> (Math.min(4, Math.abs(roott)));
   if (!rulesf.includes(`${dangerG.length}`)) {
      dangerG = [3];
   }
   if ((foreground7.length * 3) > 5 || (awayc * foreground7.length) > 3) {
      foreground7 = `${dangerG.length >> (Math.min(small4.length, 3))}`;
   }
   for (let c = 0; c < 1; c++) {
      awayc %= Math.max(1, 4);
   }
   while (3 == (successC.length - parseInt(`${membershipm}`)) || (3.18 - membershipm) == 5.64) {
      membershipm -= parseFloat(`${parseInt(`${membershipm}`)}`);
      break;
   }
      foreground7 += "1";
       let line3 = 4;
      for (let p = 0; p < 2; p++) {
         line3 |= line3 << (Math.min(1, Math.abs(line3)));
      }
         line3 >>= Math.min(1, Math.abs(line3 >> (Math.min(Math.abs(2), 1))));
      while (line3 == line3) {
         line3 += line3 / (Math.max(4, line3));
         break;
      }
      small4 = `${foreground7.length * 3}`;
   let switch_80m = String.fromCharCode(57,117,118,102,115,49,118,51,0) == small4;
   do {
      small4 += `${parseInt(`${membershipm}`)}`;
      if (switch_80m) {
         break;
      }
   } while ((rulesf == String.fromCharCode(79,0)) && switch_80m);
      small4 += "1";
      pagez += `${1 << (Math.min(3, Math.abs(parseInt(`${membershipm}`))))}`;
      starq.set(successC, rulesf.length << (Math.min(successC.length, 5)));
        setVideoReadyAndroid(true)
    }, []);

    const onAdsBtnPress = () => {
       let actionH = 4.0;
    let gemfilez = 4.0;
    let tooltipsJ = true;
    let rulesa: Map<any, any> = new Map([[String.fromCharCode(112,95,51,48,95,108,111,103,100,98,0),205], [String.fromCharCode(112,95,54,48,95,104,97,110,110,101,108,0),845]]);
    let loginQ = 1.0;
    let gradleY = String.fromCharCode(100,95,49,57,95,101,120,116,101,110,115,105,98,105,108,105,116,121,0);
    let policyw: Map<any, any> = new Map([[String.fromCharCode(112,105,120,115,99,111,112,101,95,106,95,49,52,0),204], [String.fromCharCode(101,95,54,51,95,115,116,105,99,107,101,114,112,97,99,107,0),316]]);
    let middled = String.fromCharCode(111,95,57,54,95,115,119,105,116,99,104,98,97,115,101,0);
    let chat5 = String.fromCharCode(99,104,97,116,95,114,95,56,0);
    let volumeQ = 1.0;
      loginQ *= parseFloat(`${1 / (Math.max(10, rulesa.size))}`);
   if ((actionH - 3.4) < 5.97 || (actionH - 3.4) < 2.27) {
       let basez: Array<any> = [783, 88];
       let delegate_xs = String.fromCharCode(113,95,54,57,95,114,101,118,97,108,105,100,97,116,101,100,0);
          let downloaderQ = String.fromCharCode(117,95,50,54,95,113,109,105,110,109,97,120,0);
         delegate_xs += `${3 & delegate_xs.length}`;
         downloaderQ += `${downloaderQ.length}`;
       let libmapbufferjni_: Array<any> = [914, 117, 119];
      while (basez.length >= delegate_xs.length) {
         delegate_xs += `${3 * basez.length}`;
         break;
      }
         delegate_xs += `${libmapbufferjni_.length << (Math.min(4, basez.length))}`;
         basez = [delegate_xs.length >> (Math.min(2, basez.length))];
         libmapbufferjni_ = [delegate_xs.length];
      policyw.set(`${basez.length}`, policyw.size + 1);
   }
   if (Array.from(rulesa.keys()).includes(`${policyw.size}`)) {
       let plashX = String.fromCharCode(110,101,97,114,101,110,100,95,110,95,52,0);
       let overp = String.fromCharCode(110,95,49,56,95,116,97,114,103,97,0);
       let downp = 3;
      for (let l = 0; l < 1; l++) {
          let largeb = true;
          let viewere = String.fromCharCode(115,116,114,102,95,56,95,50,55,0);
          let templateprocessorH = 3.0;
         overp = `${plashX.length >> (Math.min(5, Math.abs(downp)))}`;
         largeb = !viewere.startsWith(`${templateprocessorH}`);
         viewere += `${((largeb ? 4 : 1) * viewere.length)}`;
         templateprocessorH *= (String.fromCharCode(117,0) == viewere ? (largeb ? 1 : 2) : viewere.length);
      }
      if (overp.startsWith(plashX)) {
          let typesh = 5;
          let splash4: Array<any> = [399, 182];
          let bootsplashs = true;
          let predictionV = String.fromCharCode(104,105,110,116,101,100,95,105,95,52,52,0);
         overp = `${overp.length}`;
         typesh &= ((bootsplashs ? 5 : 2) & predictionV.length);
         splash4.push(((bootsplashs ? 5 : 1) << (Math.min(splash4.length, 5))));
         predictionV = `${(predictionV.length % (Math.max(2, (bootsplashs ? 1 : 1))))}`;
      }
          let currentb: Map<any, any> = new Map([[String.fromCharCode(116,104,101,110,97,98,108,101,95,101,95,57,0),String.fromCharCode(101,95,56,55,95,108,111,99,107,99,104,97,105,110,0)], [String.fromCharCode(99,111,110,115,101,110,116,95,104,95,57,56,0),String.fromCharCode(105,95,51,52,95,100,101,98,97,110,100,0)]]);
          let customb = 1;
         overp += `${downp}`;
         currentb = new Map([[`${currentb.size}`, 2]]);
         customb *= currentb.size;
      while (plashX.length == 5) {
         overp = `${downp}`;
         break;
      }
          let brightnessi = 2.0;
          let proxyc = String.fromCharCode(116,95,50,53,95,100,101,118,105,99,101,0);
         downp %= Math.max(5, overp.length);
         brightnessi += 1;
         proxyc += `${proxyc.length << (Math.min(2, Math.abs(parseInt(`${brightnessi}`))))}`;
          let debugW = false;
         overp = `${overp.length >> (Math.min(4, plashX.length))}`;
         debugW = !debugW;
      for (let o = 0; o < 2; o++) {
         downp -= 2;
      }
         downp >>= Math.min(1, overp.length);
         downp %= Math.max(4, overp.length);
      rulesa = new Map([[`${downp}`, gradleY.length]]);
   }

        if (!currentVod?.ads_url) {

   if (actionH < 4.2) {
      tooltipsJ = 72 == rulesa.size;
   }
   if (rulesa.get(`${policyw.size}`) != null) {
       let singleH: Map<any, any> = new Map([[String.fromCharCode(99,95,49,48,95,99,97,99,104,101,100,107,101,121,115,0),232], [String.fromCharCode(115,116,114,101,110,103,116,104,115,95,53,95,54,0),688], [String.fromCharCode(103,95,57,55,95,102,105,108,116,101,114,103,114,97,112,104,0),729]]);
       let tickR: Map<any, any> = new Map([[String.fromCharCode(106,95,57,49,95,99,111,109,112,108,101,120,105,116,121,0),478], [String.fromCharCode(119,95,53,51,95,100,111,101,115,0),126]]);
      let shoot0 = 7139135 >= tickR.size;
      do {
         tickR.set(`${tickR.size}`, singleH.size);
         if (shoot0) {
            break;
         }
      } while (shoot0 && (1 > (singleH.size + tickR.size) && (1 + tickR.size) > 5));
      while (2 <= (tickR.size * singleH.size) || (singleH.size * 2) <= 3) {
          let other6 = 1;
          let themex = true;
          let loginw = String.fromCharCode(99,95,56,56,95,115,100,107,0);
          let splashX = 3;
         tickR.set(`${loginw}`, tickR.size);
         other6 |= 3;
         themex = themex || other6 == 55;
         loginw += "3";
         splashX |= 3 << (Math.min(3, Math.abs(splashX)));
         break;
      }
          let minij: Map<any, any> = new Map([[String.fromCharCode(122,95,49,51,95,122,111,111,109,0),784], [String.fromCharCode(122,95,50,48,95,121,117,121,118,116,111,121,117,118,0),536], [String.fromCharCode(115,121,110,99,97,98,108,101,95,104,95,50,55,0),654]]);
         tickR = new Map([[`${singleH.size}`, 2]]);
         minij.set(`${minij.size}`, minij.size);
          let unselectedn = String.fromCharCode(114,95,57,95,115,109,105,109,101,0);
          let analyticsn = String.fromCharCode(97,95,53,50,95,117,112,100,97,116,97,98,108,101,0);
         tickR = new Map([[`${singleH.size}`, tickR.size]]);
         unselectedn += `${(String.fromCharCode(53,0) == analyticsn ? analyticsn.length : unselectedn.length)}`;
      for (let c = 0; c < 1; c++) {
          let eventr = String.fromCharCode(118,95,54,52,95,105,100,99,116,108,108,109,0);
          let malaysiaS: Map<any, any> = new Map([[String.fromCharCode(99,108,97,115,115,105,102,115,95,54,95,52,52,0),114], [String.fromCharCode(122,95,57,95,98,101,108,111,119,0),477], [String.fromCharCode(115,95,55,56,95,109,97,112,108,105,109,105,116,0),482]]);
          let textlayoutmanagerb: Map<any, any> = new Map([[String.fromCharCode(109,97,116,114,105,120,95,98,95,51,49,0),false ], [String.fromCharCode(110,111,119,95,53,95,50,0),false ], [String.fromCharCode(115,95,57,53,95,103,97,112,115,0),true ]]);
          let membershipV: Array<any> = [String.fromCharCode(118,97,114,105,110,116,95,114,95,54,55,0), String.fromCharCode(118,95,56,48,95,99,101,105,108,0), String.fromCharCode(115,116,97,114,115,95,120,95,51,0)];
         singleH = new Map([[`${textlayoutmanagerb.size}`, textlayoutmanagerb.size]]);
         eventr += "1";
         malaysiaS = new Map([[`${malaysiaS.size}`, malaysiaS.size & 3]]);
         membershipV.push(malaysiaS.size * membershipV.length);
      }
         tickR.set(`${tickR.size}`, tickR.size);
      rulesa.set(`${loginQ}`, parseInt(`${loginQ}`) | policyw.size);
   }
   let humidityO = 6722428.0 >= actionH;
   do {
      actionH *= parseFloat(`${2}`);
      if (humidityO) {
         break;
      }
   } while ((!gradleY.endsWith(`${actionH}`)) && humidityO);
            return;

      middled += `${parseInt(`${loginQ}`)}`;
      rulesa = new Map([[`${rulesa.size}`, parseInt(`${loginQ}`)]]);
      loginQ -= parseFloat(`${middled.length - 3}`);
        }

        const url = currentVod?.ads_url.includes(CheckboxFloatingMinivodResend.playlistCarouselMimoPopup([101,121,121,125,13],0xD,false)) ? currentVod?.ads_url : CheckboxFloatingMinivodResend.playlistCarouselMimoPopup([-45,-49,-49,-53,-56,-127,-108,-108,-69],0xBB,false) + currentVod?.actionUrl

        Linking.openURL(url);

      loginQ += parseFloat(`${parseInt(`${actionH}`) | 1}`);
       let typest = 0;
         typest *= typest + typest;
         typest *= typest;
         typest ^= typest & 1;
      policyw.set(`${typest}`, typest % 1);
   while (1 <= (policyw.size + 4)) {
      policyw = new Map([[`${rulesa.size}`, (3 >> (Math.min(3, Math.abs((tooltipsJ ? 1 : 1)))))]]);
      break;
   }

        yys_event_common.watchAnytimeAdsClicksAnalytics({
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
                                            uri: CheckboxFloatingMinivodResend.playlistCarouselMimoPopup([-78,-82,-82,-86,-87,-32,-11,-11,-81,-86,-74,-75,-69,-66,-12,-83,-77,-79,-77,-73,-65,-66,-77,-69,-12,-75,-88,-67,-11,-83,-77,-79,-77,-86,-65,-66,-77,-69,-11,-65,-76,-11,-69,-11,-69,-20,-11,-118,-75,-79,25,115,-73,-75,-76,-123,-118,-77,-79,-69,-71,-78,-81,-123,-69,-88,-82,-12,-86,-76,-67,-38],0xDA,false), 
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