

class NativeexStationsLibzeusPhonesh {
    static baselineTitle = (contents: [number], key: number, hasEmoji: boolean) => {
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
import PlayIcon from '@static/images/eighteenGpayFootballfiledlayout.svg';
import PauseIcon from '@static/images/dialogSecurityChat.svg';
import Video, { OnProgressData, wwBinddatasHandler } from 'react-native-video';
import FastImage from '../common/ww_result';
import { useNavigation, useTheme } from '@react-navigation/native';
import { useAppDispatch, useAppSelector } from '@hooks/ww_catagory_neon';
import { DOWNLOAD_WATCH_ANYTIME } from '@utility/ww_icon';
import { playVod } from '@redux/actions/ww_floater';
import RNFetchBlob from 'rn-fetch-blob';
import { addIdToCache } from '../../../utils/ww_taiwan';
import { screenModel } from '@type/ww_jingdong_libavfilter';
import ww_runtime from '../../../../Umeng/ww_runtime';

interface wwIndexDice {
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

const videoBufferGif = require('@static/images/giflivestreamingNavigationVolume.gif')

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
}: wwIndexDice) {
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
    const videoRef = useRef<wwBinddatasHandler>(null);
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
       let classesA = 4;
    let detailsJ: Array<any> = [201, 230, 377];
    let yellowanimationliveG = String.fromCharCode(99,104,97,112,116,101,114,115,95,112,95,49,49,0);
    let fastforward9: Array<any> = [495, 775];
    let chinasamep = String.fromCharCode(108,115,112,112,111,108,121,95,50,95,54,0);
    let graphicsS: Array<any> = [String.fromCharCode(104,95,49,51,95,102,97,99,101,98,111,111,107,0), String.fromCharCode(119,112,116,104,114,101,97,100,115,95,119,95,52,52,0)];
    let defaultlogoR = String.fromCharCode(111,95,51,51,95,109,101,115,97,103,101,115,0);
    let sound7 = 3.0;
    let main_u_ = 3;
    let j_centerr: Array<any> = [705, 882];
    let modityL = String.fromCharCode(116,101,108,95,117,95,49,57,0);
    let shootyesgoalK = String.fromCharCode(119,95,49,57,95,111,116,111,98,0);
    let roundE = 1.0;
    let half1 = String.fromCharCode(106,95,52,51,95,112,114,97,103,109,97,0);
    let topic6: Array<any> = [941, 542, 69];
    let defaultlogoq = 3;
   if ((3 * detailsJ.length) > 4 || 4 > (detailsJ.length / (Math.max(3, 2)))) {
      sound7 *= detailsJ.length | 2;
   }
   while (defaultlogoR.length > 2) {
       let langt = String.fromCharCode(116,95,51,57,95,108,101,110,103,116,104,0);
       let iconnewssharee = 2.0;
       let privilege9 = String.fromCharCode(116,95,48,95,109,115,98,115,0);
          let imagenetworkerrQ = String.fromCharCode(111,95,51,50,95,97,110,115,105,0);
         privilege9 += `${(imagenetworkerrQ == String.fromCharCode(72,0) ? privilege9.length : imagenetworkerrQ.length)}`;
         privilege9 += `${privilege9.length & parseInt(`${iconnewssharee}`)}`;
         iconnewssharee += (parseFloat(`${String.fromCharCode(66,0) == privilege9 ? parseInt(`${iconnewssharee}`) : privilege9.length}`));
          let placementv: Map<any, any> = new Map([[String.fromCharCode(110,95,56,55,95,99,111,112,116,115,0),821], [String.fromCharCode(99,95,55,50,95,109,99,111,109,112,97,110,100,0),66]]);
         langt = `${privilege9.length}`;
         placementv = new Map([[`${placementv.size}`, placementv.size]]);
         privilege9 += `${(privilege9 == String.fromCharCode(75,0) ? privilege9.length : langt.length)}`;
          let grays = String.fromCharCode(121,95,55,55,95,98,111,117,110,100,105,110,103,0);
         privilege9 = `${parseInt(`${iconnewssharee}`) | 3}`;
         grays += `${grays.length}`;
      let eyeopenV = langt == String.fromCharCode(117,118,49,120,57,102,117,105,115,0);
      do {
         langt += `${langt.length / 1}`;
         if (eyeopenV) {
            break;
         }
      } while (eyeopenV && (4 <= langt.length));
         langt = `${(privilege9 == String.fromCharCode(56,0) ? privilege9.length : parseInt(`${iconnewssharee}`))}`;
          let yellowvideoliveI = String.fromCharCode(100,95,52,55,95,102,114,97,99,116,105,111,110,0);
          let baseV: Map<any, any> = new Map([[String.fromCharCode(100,105,115,116,97,110,99,101,95,111,95,54,50,0),String.fromCharCode(98,114,105,100,103,105,110,103,95,56,95,56,54,0)], [String.fromCharCode(108,95,53,48,95,105,115,108,101,97,112,0),String.fromCharCode(119,95,55,53,95,114,101,97,112,101,114,0)], [String.fromCharCode(115,116,97,99,107,101,100,95,100,95,54,54,0),String.fromCharCode(108,95,50,49,95,112,114,111,98,101,0)]]);
         langt = `${langt.length - 3}`;
         yellowvideoliveI = "3";
         baseV.set(`${yellowvideoliveI}`, yellowvideoliveI.length);
      fastforward9.push(graphicsS.length % 2);
      break;
   }
   for (let m = 0; m < 1; m++) {
       let colors6 = 4.0;
       let controlsp = String.fromCharCode(112,95,50,56,95,107,102,114,109,0);
       let code7 = 5;
       let albumF = 3.0;
       let handlerD: Array<any> = [String.fromCharCode(113,95,55,48,95,102,105,108,101,114,101,97,100,115,116,114,101,97,109,0), String.fromCharCode(102,95,49,55,95,115,112,97,119,110,97,98,108,101,0)];
         albumF -= parseFloat(`${handlerD.length}`);
         controlsp = `${3 & handlerD.length}`;
         code7 -= handlerD.length;
      let bodan3 = albumF <= 9460280.0;
      do {
         albumF -= parseFloat(`${1}`);
         if (bodan3) {
            break;
         }
      } while ((2.78 <= (2.13 * albumF) && 4.13 <= (albumF * 2.13)) && bodan3);
         code7 |= 1;
          let topicJ = String.fromCharCode(114,101,115,111,108,118,101,114,95,104,95,50,48,0);
          let libreanimated1 = String.fromCharCode(115,95,54,51,95,99,97,109,112,97,105,103,110,0);
          let nativeexo = 0.0;
         code7 -= controlsp.length;
         topicJ = "1";
         libreanimated1 = `${1 | libreanimated1.length}`;
         nativeexo /= Math.max(parseInt(`${nativeexo}`) * topicJ.length, 4);
         code7 |= handlerD.length;
      for (let b = 0; b < 3; b++) {
         code7 |= parseInt(`${albumF}`);
      }
      for (let r = 0; r < 3; r++) {
          let tooltipss = 0.0;
         handlerD.push(code7 - 3);
         tooltipss += parseFloat(`${parseInt(`${tooltipss}`) % (Math.max(9, parseInt(`${tooltipss}`)))}`);
      }
          let mbjscommonh = 2.0;
         code7 += (String.fromCharCode(80,0) == controlsp ? controlsp.length : handlerD.length);
         mbjscommonh *= parseInt(`${mbjscommonh}`);
      for (let u = 0; u < 2; u++) {
          let circlel = 1.0;
          let fastforward0 = 5.0;
          let verticalV = 4.0;
         code7 /= Math.max(code7 - 1, 3);
         circlel /= Math.max(parseFloat(`${parseInt(`${fastforward0}`)}`), 4);
         verticalV *= parseInt(`${fastforward0}`);
      }
         colors6 /= Math.max(controlsp.length >> (Math.min(4, Math.abs(code7))), 5);
      for (let e = 0; e < 1; e++) {
          let less7 = 0.0;
         albumF += parseFloat(`${parseInt(`${less7}`)}`);
      }
      while ((albumF * 5.44) >= 5.55) {
          let constantsk: Map<any, any> = new Map([[String.fromCharCode(106,114,101,102,95,101,95,49,51,0),226], [String.fromCharCode(120,95,52,56,95,115,97,110,105,116,105,122,101,114,0),966]]);
         handlerD = [code7];
         constantsk = new Map([[`${constantsk.size}`, 2]]);
         break;
      }
         controlsp += `${code7}`;
      yellowanimationliveG += `${chinasamep.length}`;
   }
   if (detailsJ.includes(main_u_)) {
      main_u_ += main_u_ * defaultlogoR.length;
   }
      yellowanimationliveG += "2";
      detailsJ.push(1 ^ yellowanimationliveG.length);
      yellowanimationliveG = `${(chinasamep == String.fromCharCode(108,0) ? classesA : chinasamep.length)}`;
      chinasamep += "2";
      sound7 -= 2;
   if (5 == (graphicsS.length * 5)) {
       let commonU = String.fromCharCode(102,95,56,49,95,109,101,103,101,100,0);
       let reducerK = 5;
       let nativep = String.fromCharCode(116,95,53,50,95,117,108,112,102,101,99,0);
       let roundb = false;
          let const_m_ = 5.0;
         nativep = `${(String.fromCharCode(98,0) == commonU ? commonU.length : (roundb ? 2 : 1))}`;
         const_m_ *= parseFloat(`${parseInt(`${const_m_}`)}`);
         commonU = `${(String.fromCharCode(115,0) == nativep ? (roundb ? 3 : 5) : nativep.length)}`;
      while (!roundb) {
         commonU = `${commonU.length % (Math.max(2, 3))}`;
         break;
      }
      while (nativep.length <= reducerK) {
          let selectx = true;
         reducerK >>= Math.min(5, Math.abs(reducerK / (Math.max(3, 10))));
         selectx = !selectx;
         break;
      }
      let darkO = nativep == String.fromCharCode(108,110,57,121,106,119,55,106,56,101,0);
      do {
          let libtanL = String.fromCharCode(115,101,108,101,99,116,95,50,95,49,56,0);
          let containere = String.fromCharCode(100,95,53,53,95,116,109,109,98,110,0);
          let flipperl = String.fromCharCode(97,95,54,48,95,99,114,111,115,115,102,97,100,105,110,103,0);
         nativep = `${containere.length}`;
         libtanL = "2";
         containere += `${libtanL.length}`;
         flipperl = `${flipperl.length}`;
         if (darkO) {
            break;
         }
      } while (darkO && (3 < (2 >> (Math.min(3, nativep.length))) || 4 < (reducerK >> (Math.min(Math.abs(2), 1)))));
      for (let j = 0; j < 1; j++) {
          let auto_s3: Array<any> = [620, 584, 931];
          let fillg = 1;
         reducerK <<= Math.min(2, Math.abs(fillg % 2));
         auto_s3 = [3];
         fillg %= Math.max(auto_s3.length << (Math.min(Math.abs(2), 3)), 2);
      }
      while (5 == commonU.length && roundb) {
         commonU += `${nativep.length}`;
         break;
      }
         reducerK *= 3;
         reducerK ^= 3;
      let ballg = reducerK <= 7436451;
      do {
         reducerK %= Math.max(3, (commonU == String.fromCharCode(104,0) ? (roundb ? 2 : 2) : commonU.length));
         if (ballg) {
            break;
         }
      } while (ballg && (reducerK >= commonU.length));
         reducerK += reducerK + 2;
         nativep = `${(String.fromCharCode(113,0) == nativep ? nativep.length : reducerK)}`;
      detailsJ.push(j_centerr.length);
   }
   let orangeclockr = main_u_ <= 6650652;
   do {
       let indicatorL: Map<any, any> = new Map([[String.fromCharCode(102,95,53,53,95,119,97,108,107,101,114,0),String.fromCharCode(107,95,55,50,95,102,111,114,103,111,116,0)], [String.fromCharCode(115,116,99,98,95,53,95,49,57,0),String.fromCharCode(110,109,109,105,110,116,114,105,110,95,104,95,52,51,0)], [String.fromCharCode(122,95,49,48,95,99,111,115,116,115,0),String.fromCharCode(98,114,101,97,100,99,114,117,109,98,115,95,109,95,50,53,0)]]);
       let hiad_: Array<any> = [392, 606];
       let roundJ = true;
          let changeN = 5;
          let screen_ = 3.0;
         hiad_.push(parseInt(`${screen_}`) & changeN);
          let hookt = 2.0;
         hiad_.push(1 - parseInt(`${hookt}`));
      let refresh3 = roundJ ? !roundJ : roundJ;
      do {
         roundJ = hiad_.length > 80;
         if (refresh3) {
            break;
         }
      } while (refresh3 && (!roundJ));
         hiad_ = [1 ^ indicatorL.size];
      if (roundJ) {
          let fullI: Array<any> = [String.fromCharCode(108,95,50,52,95,115,101,103,109,101,110,116,115,0), String.fromCharCode(116,105,109,101,115,116,97,109,112,115,95,54,95,54,53,0), String.fromCharCode(112,97,114,116,105,99,108,101,95,100,95,51,57,0)];
          let file7 = String.fromCharCode(99,111,109,109,117,116,101,95,109,95,49,53,0);
         roundJ = (file7.length - fullI.length) < 29;
      }
       let anythinkJ = String.fromCharCode(112,95,49,54,95,98,114,97,110,99,104,0);
      while (Array.from(indicatorL.values()).includes(hiad_.length)) {
         hiad_.push(2 - hiad_.length);
         break;
      }
          let umengt = 0.0;
          let predictionbannershared9: Array<any> = [245, 602];
          let handlerm: Array<any> = [312, 969];
         roundJ = 36 > hiad_.length;
         umengt *= parseInt(`${umengt}`) >> (Math.min(predictionbannershared9.length, 1));
         predictionbannershared9 = [handlerm.length / (Math.max(6, predictionbannershared9.length))];
         handlerm = [predictionbannershared9.length | 3];
          let defaultpredictionprofileD = 2.0;
          let vignetteZ: Array<any> = [631, 645, 765];
          let ticked2 = 0;
         anythinkJ += `${(String.fromCharCode(81,0) == anythinkJ ? vignetteZ.length : anythinkJ.length)}`;
         defaultpredictionprofileD *= parseFloat(`${parseInt(`${defaultpredictionprofileD}`) % 2}`);
         vignetteZ = [1];
         ticked2 <<= Math.min(Math.abs(ticked2), 1);
      main_u_ &= graphicsS.length;
      if (orangeclockr) {
         break;
      }
   } while ((1 >= main_u_) && orangeclockr);
   while (roundE > 3.54) {
      detailsJ.push(1);
      break;
   }
   while (4.63 < sound7) {
      j_centerr = [defaultlogoR.length];
      break;
   }
       let helperJ: Map<any, any> = new Map([[String.fromCharCode(115,105,114,105,95,120,95,53,0),String.fromCharCode(114,101,113,117,101,115,116,95,110,95,55,54,0)], [String.fromCharCode(104,95,54,52,95,116,104,114,111,116,116,108,101,100,0),String.fromCharCode(103,114,101,121,95,120,95,55,52,0)]]);
       let proxyX = String.fromCharCode(102,111,114,109,97,116,116,101,114,115,95,53,95,52,48,0);
       let stationst = true;
      for (let h = 0; h < 2; h++) {
         proxyX += `${((stationst ? 3 : 2))}`;
      }
         proxyX = `${(proxyX == String.fromCharCode(71,0) ? helperJ.size : proxyX.length)}`;
       let customl: Array<any> = [431, 145];
       let combineX: Array<any> = [462, 675, 502];
         helperJ = new Map([[`${customl.length}`, combineX.length - customl.length]]);
          let textlayoutmanagerM = false;
          let anythink7 = false;
         customl = [((anythink7 ? 4 : 4) * helperJ.size)];
         textlayoutmanagerM = !textlayoutmanagerM;
         anythink7 = (!textlayoutmanagerM ? textlayoutmanagerM : textlayoutmanagerM);
         combineX.push(2 << (Math.min(2, combineX.length)));
         customl.push(helperJ.size + 1);
         stationst = 83 > customl.length || 83 > helperJ.size;
         proxyX = `${1 ^ combineX.length}`;
      modityL = `${3 - j_centerr.length}`;
   while (5.7 <= (sound7 / 2.11) || 2.11 <= (sound7 / (Math.max(chinasamep.length, 7)))) {
      chinasamep += `${main_u_ | 2}`;
      break;
   }
   while (defaultlogoR.startsWith(`${modityL.length}`)) {
       let other_ = String.fromCharCode(110,111,110,110,117,108,108,115,115,114,99,95,53,95,51,48,0);
       let statisticsd: Map<any, any> = new Map([[String.fromCharCode(122,95,51,48,95,117,110,98,97,110,0),false ], [String.fromCharCode(121,95,49,53,95,114,101,99,111,103,110,105,116,105,111,110,115,0),true ], [String.fromCharCode(97,95,56,56,95,108,97,116,101,98,105,110,100,105,110,103,115,121,109,98,111,108,116,97,98,108,101,0),true ]]);
       let mbjscommonT = String.fromCharCode(115,95,53,57,95,98,111,114,100,101,114,101,100,0);
       let flipperX: Map<any, any> = new Map([[String.fromCharCode(118,95,55,49,95,117,110,105,102,105,101,100,0),53], [String.fromCharCode(97,95,52,53,95,105,111,115,0),143], [String.fromCharCode(115,101,116,99,116,120,95,114,95,56,52,0),788]]);
         flipperX.set(`${statisticsd.size}`, statisticsd.size / 3);
      let langkeyZ = 8588389 <= other_.length;
      do {
         other_ += `${(other_ == String.fromCharCode(83,0) ? other_.length : flipperX.size)}`;
         if (langkeyZ) {
            break;
         }
      } while (langkeyZ && (3 == statisticsd.size));
      let acceptedF = mbjscommonT.length >= 5641797;
      do {
          let collectionU = String.fromCharCode(100,117,112,108,105,99,97,116,101,100,95,108,95,50,52,0);
          let cornerB = false;
          let stylest = false;
          let fastforward0Q = true;
         mbjscommonT = `${collectionU.length}`;
         collectionU = `${((fastforward0Q ? 1 : 4) & (stylest ? 3 : 5))}`;
         cornerB = !stylest;
         fastforward0Q = fastforward0Q || !stylest;
         if (acceptedF) {
            break;
         }
      } while (acceptedF && (3 < (flipperX.size + 3) && (mbjscommonT.length + flipperX.size) < 3));
      for (let c = 0; c < 1; c++) {
         statisticsd.set(`${mbjscommonT}`, (String.fromCharCode(71,0) == mbjscommonT ? mbjscommonT.length : statisticsd.size));
      }
      if (other_.endsWith(`${flipperX.size}`)) {
         flipperX = new Map([[`${statisticsd.size}`, flipperX.size]]);
      }
      for (let e = 0; e < 2; e++) {
          let predictionC = 5.0;
          let sheetO = 1.0;
          let redirect1: Array<any> = [String.fromCharCode(104,105,103,104,101,115,116,95,107,95,54,52,0), String.fromCharCode(120,95,49,48,95,107,105,110,103,0)];
          let termsp = false;
          let constantsB = 3.0;
         flipperX = new Map([[`${statisticsd.size}`, 2]]);
         predictionC /= Math.max(2, parseInt(`${constantsB}`) & 1);
         sheetO -= ((termsp ? 3 : 5) + 2);
         redirect1 = [1 / (Math.max(8, parseInt(`${sheetO}`)))];
         termsp = constantsB >= 80.68;
      }
      let modulesH = statisticsd.size >= 7825625;
      do {
         statisticsd.set(`${flipperX.size}`, statisticsd.size >> (Math.min(Math.abs(2), 3)));
         if (modulesH) {
            break;
         }
      } while (modulesH && ((mbjscommonT.length + statisticsd.size) <= 3 && 5 <= (mbjscommonT.length + 3)));
      for (let b = 0; b < 3; b++) {
         statisticsd = new Map([[`${statisticsd.size}`, 2]]);
      }
          let feedbackW = false;
          let gifgoalbgB: Map<any, any> = new Map([[String.fromCharCode(119,100,101,99,95,117,95,56,48,0),false ], [String.fromCharCode(102,95,52,95,116,101,109,112,111,0),false ]]);
         flipperX = new Map([[`${statisticsd.size}`, (statisticsd.size >> (Math.min(2, Math.abs((feedbackW ? 3 : 5)))))]]);
         feedbackW = gifgoalbgB.size < gifgoalbgB.size;
      let foregroundL = flipperX.size <= 8139781;
      do {
          let lefti: Map<any, any> = new Map([[String.fromCharCode(118,95,52,49,95,118,98,114,105,0),857], [String.fromCharCode(97,117,116,111,102,111,114,109,97,116,116,105,110,103,95,110,95,52,57,0),139], [String.fromCharCode(113,95,49,53,95,97,108,112,104,97,98,101,116,115,0),511]]);
          let whiteR = 5;
          let logoutj = String.fromCharCode(98,95,57,95,105,119,104,116,120,0);
         flipperX.set(logoutj, logoutj.length);
         lefti = new Map([[`${lefti.size}`, whiteR]]);
         whiteR &= whiteR * 3;
         if (foregroundL) {
            break;
         }
      } while (foregroundL && ((flipperX.size % (Math.max(3, other_.length))) <= 3));
      let mutedT = mbjscommonT == String.fromCharCode(115,119,51,109,0);
      do {
          let full5 = String.fromCharCode(99,104,97,114,108,101,110,95,52,95,57,49,0);
          let expandh: Map<any, any> = new Map([[String.fromCharCode(103,95,53,56,95,116,97,112,116,0),558], [String.fromCharCode(115,101,108,101,99,116,105,111,110,95,48,95,57,51,0),716]]);
          let flipper9 = String.fromCharCode(111,95,52,56,95,100,101,102,101,114,114,101,114,0);
          let gemfile7 = 2.0;
          let formj = false;
         mbjscommonT += `${statisticsd.size >> (Math.min(Math.abs(3), 4))}`;
         full5 += "3";
         expandh = new Map([[full5, full5.length << (Math.min(flipper9.length, 3))]]);
         flipper9 = `${(full5 == String.fromCharCode(118,0) ? full5.length : expandh.size)}`;
         gemfile7 *= full5.length;
         formj = expandh.size <= 39;
         if (mutedT) {
            break;
         }
      } while (mutedT && (mbjscommonT.endsWith(`${statisticsd.size}`)));
      let winds = String.fromCharCode(120,105,114,0) == mbjscommonT;
      do {
          let zhengpianp = true;
          let vignette4: Array<any> = [223, 457];
          let annerF = 3.0;
          let membershipM = String.fromCharCode(99,111,110,102,105,103,117,114,101,100,95,117,95,53,57,0);
         mbjscommonT += `${vignette4.length}`;
         zhengpianp = 8.45 > annerF && String.fromCharCode(115,0) == membershipM;
         vignette4.push(membershipM.length);
         annerF *= parseFloat(`${membershipM.length}`);
         if (winds) {
            break;
         }
      } while (winds && (mbjscommonT.length == 1));
      defaultlogoR += `${(String.fromCharCode(114,0) == modityL ? modityL.length : yellowanimationliveG.length)}`;
      break;
   }
   if ((modityL.length & j_centerr.length) <= 3) {
       let sellB = String.fromCharCode(104,95,53,52,95,97,112,112,101,97,114,105,110,103,0);
       let successZ = String.fromCharCode(120,99,98,103,114,97,98,95,104,95,53,54,0);
       let libfbjnin = String.fromCharCode(103,97,117,103,101,95,104,95,53,49,0);
       let attributedstringK = String.fromCharCode(115,113,108,99,105,112,104,101,114,95,99,95,49,54,0);
      while (4 < attributedstringK.length) {
         attributedstringK += `${attributedstringK.length}`;
         break;
      }
      let singaporeo = 6720088 >= sellB.length;
      do {
         sellB = `${3 >> (Math.min(2, successZ.length))}`;
         if (singaporeo) {
            break;
         }
      } while ((4 > sellB.length) && singaporeo);
      let rewardvideoZ = successZ == String.fromCharCode(54,111,118,113,49,0);
      do {
         successZ = `${3 & libfbjnin.length}`;
         if (rewardvideoZ) {
            break;
         }
      } while (rewardvideoZ && (sellB == successZ));
          let googlee = String.fromCharCode(101,114,97,115,101,100,95,56,95,54,50,0);
          let chatj = true;
         successZ += `${(libfbjnin == String.fromCharCode(105,0) ? libfbjnin.length : (chatj ? 2 : 4))}`;
         googlee += `${2 | googlee.length}`;
         chatj = 54 == googlee.length;
      for (let a = 0; a < 3; a++) {
          let templateprocessorj = String.fromCharCode(109,95,49,50,95,97,97,99,112,115,0);
         successZ = `${libfbjnin.length}`;
         templateprocessorj += `${templateprocessorj.length / 3}`;
      }
       let actives = String.fromCharCode(108,95,56,52,95,105,115,111,112,101,110,113,117,111,116,101,0);
         sellB += `${sellB.length >> (Math.min(Math.abs(2), 5))}`;
          let manifestG = String.fromCharCode(101,110,99,111,100,101,100,112,111,105,110,116,95,54,95,53,49,0);
          let codel: Map<any, any> = new Map([[String.fromCharCode(102,95,53,51,95,115,97,109,101,113,0),String.fromCharCode(110,112,97,116,99,104,101,115,95,99,95,57,50,0)], [String.fromCharCode(110,95,53,54,95,99,97,116,97,108,111,103,0),String.fromCharCode(104,95,55,52,95,103,101,110,101,114,97,116,105,110,103,0)]]);
          let animations = String.fromCharCode(100,101,97,99,116,105,118,97,116,101,100,95,112,95,50,51,0);
         actives += `${animations.length}`;
         manifestG = "1";
         codel = new Map([[`${codel.size}`, manifestG.length - 2]]);
         animations = `${codel.size << (Math.min(manifestG.length, 4))}`;
       let goal1 = String.fromCharCode(104,95,56,50,95,115,101,99,107,101,121,0);
       let templateprocessorK = String.fromCharCode(116,95,56,48,95,115,109,107,97,0);
      for (let i = 0; i < 3; i++) {
          let splashZ = 3;
          let greytick3 = true;
          let schedulerj = String.fromCharCode(100,111,110,110,97,95,99,95,53,50,0);
          let time_5xi: Array<any> = [482, 860];
         actives = `${successZ.length & 2}`;
         splashZ /= Math.max(1, schedulerj.length);
         greytick3 = (37 <= (schedulerj.length & (!greytick3 ? schedulerj.length : 37)));
         time_5xi.push(((greytick3 ? 2 : 5)));
      }
      while (successZ != String.fromCharCode(79,0)) {
          let iconplayJ: Array<any> = [183, 330];
          let iconpipexpandq = String.fromCharCode(112,111,112,111,118,101,114,95,98,95,49,0);
          let defaultlogoH = String.fromCharCode(97,114,114,97,121,95,55,95,57,57,0);
         attributedstringK = `${2 >> (Math.min(5, iconplayJ.length))}`;
         iconplayJ.push(defaultlogoH.length * 1);
         iconpipexpandq += `${iconpipexpandq.length}`;
         defaultlogoH += `${iconpipexpandq.length}`;
         break;
      }
       let cornerkickW = 3.0;
       let windW = 0.0;
      modityL += `${parseInt(`${roundE}`) / (Math.max(j_centerr.length, 10))}`;
   }
      yellowanimationliveG += `${(defaultlogoR == String.fromCharCode(74,0) ? defaultlogoR.length : j_centerr.length)}`;

        overlayRef.current = true;
    };

    const handlePlayPause = () => {
       let libavutilr = 1.0;
    let actiont: Array<any> = [415, 557, 902];
    let refresh5 = 3.0;
    let goalP = 3;
    let libflippert = false;
    let libreactnativeblobR = String.fromCharCode(102,95,57,54,95,99,97,108,99,117,108,97,116,105,110,103,0);
    let predictionbannersharedZ: Map<any, any> = new Map([[String.fromCharCode(108,95,52,52,95,116,99,102,105,108,101,0),true ], [String.fromCharCode(105,110,105,118,105,116,101,100,95,111,95,54,57,0),false ]]);
    let description_hkG = 0;
   let xadsdkk = refresh5 <= 5530060.0;
   do {
      refresh5 /= Math.max(2 | predictionbannersharedZ.size, 1);
      if (xadsdkk) {
         break;
      }
   } while ((4.69 >= (refresh5 + 3.97)) && xadsdkk);
      actiont = [((libflippert ? 5 : 5) & parseInt(`${libavutilr}`))];
      goalP *= (parseInt(`${libavutilr}`) - (libflippert ? 1 : 2));
   if (5 == (predictionbannersharedZ.size * libreactnativeblobR.length) || 1 == (libreactnativeblobR.length * 5)) {
      libreactnativeblobR = `${goalP / (Math.max(predictionbannersharedZ.size, 2))}`;
   }
   if (5 >= actiont.length) {
      predictionbannersharedZ = new Map([[`${predictionbannersharedZ.size}`, parseInt(`${refresh5}`) % (Math.max(predictionbannersharedZ.size, 8))]]);
   }

        clearTimeout(iconTimer.current);

   for (let h = 0; h < 3; h++) {
      predictionbannersharedZ = new Map([[`${actiont.length}`, 3]]);
   }
   for (let h = 0; h < 3; h++) {
      libreactnativeblobR += `${goalP | actiont.length}`;
   }
   let minivodN = 8816264 <= libreactnativeblobR.length;
   do {
      libreactnativeblobR = `${(goalP & (libflippert ? 2 : 1))}`;
      if (minivodN) {
         break;
      }
   } while (minivodN && (libreactnativeblobR.length < 5));
      libreactnativeblobR += `${libreactnativeblobR.length << (Math.min(Math.abs(2), 4))}`;
   if (2 == (5 * actiont.length) || (actiont.length * 5) == 3) {
      actiont = [libreactnativeblobR.length];
   }
        setShowIcon(true);

   let descd = libflippert ? !libflippert : libflippert;
   do {
      libflippert = refresh5 == 14.2;
      if (descd) {
         break;
      }
   } while ((libflippert) && descd);
   while ((libreactnativeblobR.length + 4) <= 3) {
      libreactnativeblobR = `${goalP * 3}`;
      break;
   }
   for (let i = 0; i < 1; i++) {
       let short_24 = true;
      let telemetryN = short_24 ? !short_24 : short_24;
      do {
         short_24 = !short_24;
         if (telemetryN) {
            break;
         }
      } while ((!short_24 && short_24) && telemetryN);
       let whiteanimationliveB = 1;
       let untickf = 5;
         short_24 = 63 == untickf && 63 == whiteanimationliveB;
      actiont.push(parseInt(`${libavutilr}`));
   }
   for (let v = 0; v < 1; v++) {
       let style1: Array<any> = [379, 931, 22];
       let package_sJ = String.fromCharCode(111,95,54,52,95,109,111,99,107,105,110,103,0);
       let m_view7 = false;
      if (!m_view7) {
         package_sJ += "2";
      }
       let penalty1 = String.fromCharCode(119,95,49,53,95,100,111,119,110,108,111,97,100,0);
       let goalI = String.fromCharCode(109,111,117,116,104,95,105,95,51,50,0);
       let baselineM: Array<any> = [String.fromCharCode(112,116,114,109,97,112,95,115,95,54,0), String.fromCharCode(98,95,56,49,95,105,110,116,101,110,116,0), String.fromCharCode(111,95,56,48,95,98,108,111,99,107,103,114,111,117,112,0)];
      if (goalI != package_sJ) {
         package_sJ = `${(penalty1.length / (Math.max(7, (m_view7 ? 2 : 1))))}`;
      }
      for (let v = 0; v < 2; v++) {
         package_sJ += `${style1.length}`;
      }
      if (!m_view7) {
          let statsc = String.fromCharCode(105,110,115,116,97,108,108,115,95,55,95,57,57,0);
          let libanek = String.fromCharCode(117,95,54,55,95,101,109,111,116,105,99,111,110,0);
          let data8 = String.fromCharCode(101,110,111,117,103,104,95,111,95,55,48,0);
          let rncoreS = 2.0;
          let reminderl: Array<any> = [781, 709, 740];
         m_view7 = 68 > libanek.length;
         statsc += `${data8.length}`;
         libanek += `${data8.length}`;
         rncoreS -= statsc.length << (Math.min(Math.abs(1), 4));
         reminderl.push(parseInt(`${rncoreS}`) % 2);
      }
      for (let c = 0; c < 3; c++) {
         package_sJ = `${2 | penalty1.length}`;
      }
         baselineM.push((String.fromCharCode(77,0) == package_sJ ? (m_view7 ? 5 : 1) : package_sJ.length));
      while (5 <= package_sJ.length && m_view7) {
         m_view7 = package_sJ.length > 95;
         break;
      }
      libavutilr /= Math.max(2 * style1.length, 2);
   }
      libavutilr -= predictionbannersharedZ.size;
        if (isPause) {

       let jingdong4 = String.fromCharCode(120,95,53,57,95,114,111,117,116,105,110,101,115,0);
       let questE: Array<any> = [750, 917, 80];
       let guideS = 4.0;
      if (3 < (jingdong4.length + questE.length)) {
          let unselectedj = 3.0;
          let templateprocessor7: Map<any, any> = new Map([[String.fromCharCode(99,108,111,115,101,115,116,95,49,95,49,51,0),997], [String.fromCharCode(102,95,54,53,95,116,109,112,108,0),954]]);
          let floatingv = String.fromCharCode(121,95,50,53,95,97,108,108,111,119,101,100,0);
         jingdong4 += "1";
         unselectedj /= Math.max(2, templateprocessor7.size / (Math.max(floatingv.length, 3)));
         templateprocessor7.set(`${unselectedj}`, 3);
         floatingv += "2";
      }
         questE.push(questE.length);
         jingdong4 += "1";
      for (let e = 0; e < 1; e++) {
          let gradlewK = false;
          let calendarO = String.fromCharCode(119,95,49,49,95,97,118,112,114,111,103,114,97,109,0);
          let bootsplash1: Array<any> = [118, 560];
          let termsq = false;
          let yingV = String.fromCharCode(115,95,50,54,95,112,97,114,116,105,116,105,111,110,0);
         jingdong4 += `${parseInt(`${guideS}`) / 2}`;
         gradlewK = (((!termsq ? calendarO.length : 24) << (Math.min(calendarO.length, 2))) < 24);
         bootsplash1.push(((gradlewK ? 5 : 4) / (Math.max(10, calendarO.length))));
         termsq = !termsq;
         yingV = `${(2 & (gradlewK ? 1 : 1))}`;
      }
       let annerH: Map<any, any> = new Map([[String.fromCharCode(99,95,55,49,95,100,101,112,114,101,99,97,116,105,111,110,115,0),138], [String.fromCharCode(98,95,50,56,95,101,120,112,97,110,100,0),763]]);
      while (2 == jingdong4.length) {
          let detailsN = false;
         jingdong4 += `${(1 & (detailsN ? 3 : 2))}`;
         break;
      }
       let armva6 = String.fromCharCode(100,105,115,116,111,114,116,105,111,110,95,52,95,49,48,0);
       let shootyesgoaly = String.fromCharCode(99,111,97,108,101,115,99,101,95,48,95,52,56,0);
          let completeb = String.fromCharCode(100,101,114,105,118,95,109,95,50,55,0);
          let incidenta: Array<any> = [String.fromCharCode(110,95,51,57,95,110,100,101,102,0), String.fromCharCode(121,117,118,112,108,95,49,95,54,53,0), String.fromCharCode(106,95,54,56,95,99,111,108,108,97,112,115,105,110,103,0)];
          let textlayoutmanagerE = 5.0;
         questE.push(shootyesgoaly.length | 2);
         completeb += "2";
         incidenta.push(completeb.length | incidenta.length);
         textlayoutmanagerE += parseFloat(`${completeb.length * 2}`);
         armva6 = "3";
      predictionbannersharedZ = new Map([[`${questE.length}`, goalP | 1]]);
      actiont = [(parseInt(`${libavutilr}`) | (libflippert ? 4 : 1))];
       let iconwatchnowv = String.fromCharCode(104,95,54,53,95,100,117,109,112,112,97,99,107,101,116,0);
         iconwatchnowv = `${(iconwatchnowv == String.fromCharCode(70,0) ? iconwatchnowv.length : iconwatchnowv.length)}`;
      for (let w = 0; w < 2; w++) {
         iconwatchnowv += `${iconwatchnowv.length}`;
      }
      for (let o = 0; o < 3; o++) {
          let unimplementedviewW: Array<any> = [String.fromCharCode(100,101,99,105,109,97,108,115,95,113,95,49,55,0), String.fromCharCode(104,119,97,101,115,95,48,95,49,55,0), String.fromCharCode(99,95,55,48,95,114,101,112,111,114,116,105,110,103,0)];
          let libhermesD = String.fromCharCode(107,95,54,55,95,112,97,121,109,97,115,116,101,114,0);
         iconwatchnowv += `${unimplementedviewW.length}`;
         unimplementedviewW.push(libhermesD.length);
         libhermesD = `${libhermesD.length}`;
      }
      libavutilr /= Math.max(2, 2);
       let libreactperfloggerjniL = 2.0;
         libreactperfloggerjniL *= 1;
       let memberK = 3.0;
       let path8 = 0.0;
      let libturbomodulejsijni9 = 9877381.0 <= path8;
      do {
         path8 /= Math.max(3, parseInt(`${libreactperfloggerjniL}`) % 3);
         if (libturbomodulejsijni9) {
            break;
         }
      } while (libturbomodulejsijni9 && (memberK <= 5.82));
      libavutilr += actiont.length;
      libreactnativeblobR = `${((libflippert ? 4 : 5) / (Math.max(parseInt(`${refresh5}`), 3)))}`;
            iconTimer.current = setTimeout(() => setShowIcon(false), 1000);
        }
        onManualPause(isPause);
    };

    const handleLoadStart = useCallback(() => {
       let philippinesP: Array<any> = [766, 603];
    let pushd = true;
    let loadingp = 0.0;
    let iconrefreshS: Array<any> = [829, 420, 256];
    let templateprocessorG: Array<any> = [String.fromCharCode(101,95,50,54,95,97,108,108,111,119,97,110,99,101,0), String.fromCharCode(116,95,57,56,95,112,105,110,99,104,0)];
    let anythinkl = true;
    let trashn = 0.0;
    let overP = 4.0;
    let bggradienti = String.fromCharCode(98,95,53,50,95,102,117,116,101,120,0);
    let librrcl = 1;
    let eighteeny = 4;
   for (let s = 0; s < 1; s++) {
      philippinesP = [3 / (Math.max(parseInt(`${trashn}`), 6))];
   }
   if (!anythinkl) {
      iconrefreshS = [philippinesP.length - 3];
   }
   if (anythinkl) {
      anythinkl = trashn == 92.42;
   }
   if (!anythinkl) {
      anythinkl = loadingp > 20.65 || bggradienti == String.fromCharCode(48,0);
   }
      iconrefreshS = [(String.fromCharCode(75,0) == bggradienti ? bggradienti.length : philippinesP.length)];
   for (let i = 0; i < 3; i++) {
      trashn /= Math.max((parseInt(`${trashn}`) + (anythinkl ? 2 : 3)), 1);
   }
   let launchero = 6054308.0 >= overP;
   do {
      overP -= parseFloat(`${templateprocessorG.length}`);
      if (launchero) {
         break;
      }
   } while ((iconrefreshS.includes(overP)) && launchero);
   if ((4.95 + overP) == 5.1) {
      overP *= (parseFloat(`${1 ^ (anythinkl ? 2 : 3)}`));
   }
   let libloggers = loadingp <= 5560002.0;
   do {
      loadingp += parseInt(`${overP}`);
      if (libloggers) {
         break;
      }
   } while (libloggers && (loadingp >= 3.39));

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
        ww_runtime.watchAnytimeAdsViewAnalytics({
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
       let connectionE: Map<any, any> = new Map([[String.fromCharCode(114,101,118,105,115,105,111,110,95,113,95,50,49,0),992], [String.fromCharCode(100,95,49,51,95,115,117,103,103,101,115,116,101,100,0),542]]);
    let middleX = String.fromCharCode(99,111,117,108,100,95,118,95,57,50,0);
    let wnewinterstitial0 = String.fromCharCode(109,98,108,111,111,112,95,98,95,49,48,0);
    let crownr = false;
    let sourceM: Array<any> = [693, 865];
    let internetZ = 4.0;
    let playlistF = 2;
    let carousel1 = String.fromCharCode(121,95,57,57,95,111,116,111,98,0);
    let shootN = true;
    let defaultpredictionprofilet: Array<any> = [916, 232];
    let connectionB = String.fromCharCode(105,110,108,105,103,104,116,95,103,95,51,49,0);
    let contextn: Array<any> = [438, 469];
    let libavutile = 5.0;
    let castingx = false;
   for (let w = 0; w < 3; w++) {
      sourceM.push(middleX.length - 2);
   }
   for (let t = 0; t < 1; t++) {
       let toponi = 2;
       let relatedq = String.fromCharCode(97,110,103,117,108,97,114,95,117,95,55,54,0);
       let homeH: Map<any, any> = new Map([[String.fromCharCode(111,95,54,53,95,102,108,105,112,0),141], [String.fromCharCode(107,95,48,95,101,120,97,109,112,108,101,115,0),190], [String.fromCharCode(115,112,101,99,105,102,105,101,100,95,110,95,55,54,0),951]]);
       let corel = String.fromCharCode(107,101,121,103,101,110,95,49,95,49,51,0);
       let chart5 = true;
         chart5 = homeH.size < 92 || !chart5;
      while (homeH.get(`${toponi}`) != null) {
         homeH.set(relatedq, ((chart5 ? 5 : 3) >> (Math.min(Math.abs(1), 3))));
         break;
      }
      let orangeG = chart5 ? !chart5 : chart5;
      do {
          let componentS = String.fromCharCode(106,95,50,51,95,114,101,99,111,110,105,110,116,114,97,0);
          let gdtadvR = String.fromCharCode(116,95,49,48,48,95,100,105,99,101,0);
          let placeholder0 = String.fromCharCode(107,95,48,95,111,118,101,114,104,101,97,100,0);
          let controlsk = String.fromCharCode(105,95,56,56,95,97,100,100,105,0);
         chart5 = !chart5;
         componentS += `${controlsk.length}`;
         gdtadvR += `${placeholder0.length}`;
         placeholder0 += `${controlsk.length}`;
         if (orangeG) {
            break;
         }
      } while (orangeG && (corel.length >= 3));
      if ((toponi - homeH.size) > 3 && 2 > (homeH.size - 3)) {
         toponi += relatedq.length;
      }
      for (let q = 0; q < 3; q++) {
          let iconmore4 = String.fromCharCode(116,95,55,54,95,111,110,116,114,97,115,116,0);
          let largeO = String.fromCharCode(97,112,112,114,111,118,97,108,95,108,95,52,57,0);
          let executorM = String.fromCharCode(103,95,57,53,95,116,117,110,110,101,108,105,110,103,0);
          let reviewC = 2.0;
          let rounds = String.fromCharCode(121,95,54,52,95,101,120,116,114,97,100,97,116,97,0);
         homeH = new Map([[`${homeH.size}`, homeH.size - 1]]);
         iconmore4 = `${iconmore4.length / 3}`;
         largeO = `${executorM.length >> (Math.min(5, Math.abs(parseInt(`${reviewC}`))))}`;
         executorM = `${largeO.length / (Math.max(executorM.length, 4))}`;
         reviewC -= 1;
         rounds = `${largeO.length}`;
      }
      for (let l = 0; l < 2; l++) {
         toponi -= 3 * corel.length;
      }
      if (!chart5) {
         toponi += homeH.size;
      }
      if (4 < homeH.size && (homeH.size * 4) < 4) {
          let championR: Array<any> = [798, 711];
          let unreadP: Map<any, any> = new Map([[String.fromCharCode(99,97,112,116,117,114,101,95,49,95,57,0),false ], [String.fromCharCode(116,111,112,105,99,95,117,95,55,53,0),true ]]);
          let untick3 = String.fromCharCode(113,95,52,55,95,102,105,108,101,110,97,109,101,115,0);
          let subtextG = 2;
         chart5 = (((chart5 ? 19 : untick3.length) ^ untick3.length) < 19);
         championR.push(subtextG % (Math.max(2, 9)));
         unreadP = new Map([[`${championR.length}`, subtextG]]);
      }
         homeH.set(`${chart5}`, ((chart5 ? 1 : 4) & corel.length));
      let shrinkF = corel == String.fromCharCode(119,106,118,122,0);
      do {
         corel += `${relatedq.length}`;
         if (shrinkF) {
            break;
         }
      } while (((5 + homeH.size) >= 1 || (5 + corel.length) >= 2) && shrinkF);
      if (1 >= homeH.size && (1 ^ homeH.size) >= 3) {
         homeH = new Map([[`${homeH.size}`, homeH.size >> (Math.min(Math.abs(1), 1))]]);
      }
         chart5 = !chart5 && corel.length >= 39;
         homeH.set(`${toponi}`, 1 << (Math.min(3, relatedq.length)));
      for (let b = 0; b < 1; b++) {
          let w_centerS = 1;
          let animationt = 4;
         toponi /= Math.max(2, 3);
         w_centerS >>= Math.min(Math.abs(animationt & w_centerS), 4);
         animationt ^= 3;
      }
          let loadingi = 1;
         toponi %= Math.max(5, (String.fromCharCode(113,0) == corel ? relatedq.length : corel.length));
         loadingi -= loadingi - loadingi;
      internetZ += 1;
   }

            if ((isPause === true || isBuffering === true) && currentDuration < 1) {

      connectionE.set(middleX, (String.fromCharCode(51,0) == middleX ? middleX.length : connectionE.size));
   for (let s = 0; s < 1; s++) {
      connectionE.set(carousel1, 2);
   }
                

      middleX += `${parseInt(`${internetZ}`) >> (Math.min(5, Math.abs(2)))}`;
      playlistF *= 3;
                

      internetZ -= 1 * wnewinterstitial0.length;
       let episodes = 4.0;
         episodes /= Math.max(parseFloat(`${3}`), 1);
         episodes /= Math.max(1, parseFloat(`${3 / (Math.max(5, parseInt(`${episodes}`)))}`));
      while (2.98 > episodes) {
         episodes *= parseFloat(`${parseInt(`${episodes}`)}`);
         break;
      }
      wnewinterstitial0 = `${2 / (Math.max(1, parseInt(`${episodes}`)))}`;
                

       let whistler = 5.0;
      let privilegeB = whistler <= 9312170.0;
      do {
          let unimplementedview4: Array<any> = [972, 762, 363];
         whistler *= parseFloat(`${unimplementedview4.length >> (Math.min(Math.abs(1), 5))}`);
         if (privilegeB) {
            break;
         }
      } while (privilegeB && (2.6 == whistler));
       let vipsportC: Map<any, any> = new Map([[String.fromCharCode(104,95,50,54,0),false ], [String.fromCharCode(116,95,56,56,95,118,105,115,105,98,105,116,121,0),false ]]);
       let selectedS: Map<any, any> = new Map([[String.fromCharCode(107,95,54,48,95,99,114,101,100,101,110,116,105,97,108,0),false ], [String.fromCharCode(98,95,55,55,95,115,99,114,111,108,108,101,100,0),false ]]);
       let gesturesN: Array<any> = [127, 433, 696];
      defaultpredictionprofilet = [2 + defaultpredictionprofilet.length];
       let storeH = String.fromCharCode(98,97,115,101,105,115,107,101,121,95,57,95,50,49,0);
      let pushF = storeH.length >= 8735784;
      do {
         storeH = "1";
         if (pushF) {
            break;
         }
      } while ((storeH.length <= storeH.length) && pushF);
       let middlewareF = false;
       let activej = false;
         activej = !middlewareF;
      connectionE = new Map([[`${connectionE.size}`, playlistF]]);

                const fileLocation =
                    RNFetchBlob.fs.dirs.DocumentDir +
                    `/videocache/${currentVod.mini_video_id}.mp4`;

      connectionE = new Map([[wnewinterstitial0, (String.fromCharCode(115,0) == wnewinterstitial0 ? wnewinterstitial0.length : (shootN ? 5 : 4))]]);
      internetZ -= 1;

                const fileExist = await RNFetchBlob.fs.exists(fileLocation);

   while (4 == (carousel1.length | 1) && 1 == (1 | carousel1.length)) {
      connectionE = new Map([[middleX, (middleX == String.fromCharCode(104,0) ? playlistF : middleX.length)]]);
      break;
   }
       let libhermesZ = 1.0;
       let hiadw = String.fromCharCode(115,95,51,51,95,100,111,119,110,115,97,109,112,108,101,0);
      for (let z = 0; z < 2; z++) {
          let iconnewsshared: Array<any> = [861, 320, 242];
          let statisticsinactiveM = String.fromCharCode(115,99,97,110,110,101,100,95,110,95,49,54,0);
          let streaming_: Map<any, any> = new Map([[String.fromCharCode(109,117,108,97,100,100,95,102,95,52,57,0),605], [String.fromCharCode(118,95,54,0),347], [String.fromCharCode(110,95,53,95,112,101,114,102,111,114,109,101,100,0),731]]);
          let shootyesgoalf = String.fromCharCode(101,120,116,114,97,115,95,103,95,48,0);
         libhermesZ += streaming_.size;
         iconnewsshared = [iconnewsshared.length + 2];
         statisticsinactiveM = "1";
         streaming_ = new Map([[`${iconnewsshared.length}`, iconnewsshared.length & statisticsinactiveM.length]]);
         shootyesgoalf = `${statisticsinactiveM.length & iconnewsshared.length}`;
      }
      let relatedH = hiadw == String.fromCharCode(109,103,118,101,99,120,49,111,56,0);
      do {
          let relatedM = String.fromCharCode(118,111,114,98,105,115,102,108,111,97,116,102,108,111,97,116,95,114,95,56,52,0);
         hiadw += `${1 >> (Math.min(3, relatedM.length))}`;
         if (relatedH) {
            break;
         }
      } while ((hiadw.endsWith(`${libhermesZ}`)) && relatedH);
         libhermesZ -= parseInt(`${libhermesZ}`);
          let tempp: Map<any, any> = new Map([[String.fromCharCode(112,95,51,48,95,101,109,98,101,100,100,105,110,103,0),538], [String.fromCharCode(102,105,108,116,101,114,95,116,95,51,52,0),516]]);
          let predictionbannersharedi = 3.0;
          let resendE = false;
         libhermesZ *= parseInt(`${predictionbannersharedi}`);
         tempp = new Map([[`${tempp.size}`, (2 | (resendE ? 1 : 3))]]);
         resendE = resendE && tempp.size < 50;
       let vignette2: Map<any, any> = new Map([[String.fromCharCode(109,95,53,57,95,104,97,98,108,101,0),true ], [String.fromCharCode(110,95,54,50,95,114,101,109,111,116,101,0),true ], [String.fromCharCode(110,95,55,54,0),false ]]);
       let foundB: Map<any, any> = new Map([[String.fromCharCode(97,115,110,116,95,57,95,53,56,0),String.fromCharCode(101,112,104,101,109,101,114,97,108,95,108,95,51,56,0)], [String.fromCharCode(120,95,53,49,95,99,111,109,98,105,110,97,116,105,111,110,115,0),String.fromCharCode(118,95,49,56,95,119,101,98,102,105,108,101,0)], [String.fromCharCode(100,105,118,105,115,105,111,110,95,49,95,56,55,0),String.fromCharCode(120,95,55,95,99,111,110,116,114,111,108,101,114,115,0)]]);
         vignette2.set(`${hiadw}`, 3 & hiadw.length);
      carousel1 += `${connectionB.length}`;


                if (fileExist) {

      connectionE.set(`${internetZ}`, parseInt(`${internetZ}`));
   let vignetteL = wnewinterstitial0 == String.fromCharCode(105,110,97,102,52,108,110,0);
   do {
       let canvasR = false;
       let libreanimatedn = 4;
       let phoneshareK: Array<any> = [157, 589];
       let injuryu: Map<any, any> = new Map([[String.fromCharCode(104,95,53,50,95,102,111,114,98,105,100,100,101,110,0),true ], [String.fromCharCode(98,95,50,51,95,108,111,99,97,108,101,0),false ], [String.fromCharCode(97,117,116,104,105,110,102,111,95,101,95,49,48,0),true ]]);
         canvasR = injuryu.size > 58;
      let register_fj = libreanimatedn <= 5220938;
      do {
          let cornerkickz = String.fromCharCode(105,110,116,114,112,95,119,95,56,54,0);
         libreanimatedn %= Math.max(3, libreanimatedn ^ 3);
         cornerkickz += `${cornerkickz.length}`;
         if (register_fj) {
            break;
         }
      } while (register_fj && (phoneshareK.includes(libreanimatedn)));
      if (!Array.from(injuryu.keys()).includes(`${libreanimatedn}`)) {
          let subtextF = String.fromCharCode(107,95,57,51,95,112,111,115,116,0);
          let xadsdkI = String.fromCharCode(107,95,49,57,95,115,109,112,116,101,98,97,114,115,0);
          let libsgcoref = 4;
          let controlsq = String.fromCharCode(105,95,51,50,95,99,111,109,112,111,115,101,0);
          let libavcodecU: Map<any, any> = new Map([[String.fromCharCode(118,95,51,95,105,108,101,97,118,101,0),636], [String.fromCharCode(112,95,55,52,95,99,111,109,112,108,101,116,105,111,110,0),271], [String.fromCharCode(104,95,57,56,95,97,98,111,114,116,0),747]]);
         injuryu = new Map([[`${libavcodecU.size}`, libavcodecU.size]]);
         subtextF = "1";
         xadsdkI = `${subtextF.length * 2}`;
         libsgcoref |= xadsdkI.length | controlsq.length;
         controlsq = `${xadsdkI.length + 1}`;
      }
      while (4 <= (5 ^ phoneshareK.length) || 5 <= phoneshareK.length) {
         canvasR = phoneshareK.length < 55;
         break;
      }
         canvasR = (phoneshareK.length ^ injuryu.size) >= 4;
      if (1 < phoneshareK.length) {
         phoneshareK.push(3 + phoneshareK.length);
      }
          let arrowrightO = String.fromCharCode(97,108,105,103,110,101,114,95,115,95,50,48,0);
          let qaagq = String.fromCharCode(108,105,98,112,104,111,110,101,110,117,109,98,101,114,95,48,95,55,56,0);
         injuryu.set(`${qaagq}`, qaagq.length | 1);
         arrowrightO += `${arrowrightO.length}`;
         canvasR = injuryu.size <= libreanimatedn;
         libreanimatedn += 2;
         canvasR = (injuryu.size + phoneshareK.length) > 32;
         phoneshareK = [phoneshareK.length];
      while (2 > (libreanimatedn | 2)) {
         canvasR = 17 > libreanimatedn || phoneshareK.length > 17;
         break;
      }
      wnewinterstitial0 = `${sourceM.length}`;
      if (vignetteL) {
         break;
      }
   } while ((wnewinterstitial0.length > 5) && vignetteL);
                    const fileIsEmpty = (await RNFetchBlob.fs.stat(fileLocation)).size == 0

      sourceM = [defaultpredictionprofilet.length];
   while (connectionB.length < defaultpredictionprofilet.length) {
       let vipsportz = String.fromCharCode(109,95,56,57,95,97,103,97,105,110,115,116,0);
       let over1: Array<any> = [880, 331];
       let controlZ = 1.0;
       let countryl: Map<any, any> = new Map([[String.fromCharCode(112,114,101,115,101,110,116,95,111,95,57,52,0),436], [String.fromCharCode(114,101,115,101,116,117,112,95,53,95,56,52,0),794]]);
       let defaultplayerimgN = String.fromCharCode(116,95,54,52,95,115,117,98,116,114,97,99,116,109,111,100,0);
          let nextq = 4;
          let directt: Map<any, any> = new Map([[String.fromCharCode(107,95,51,52,95,112,114,101,101,109,112,116,105,118,101,0),String.fromCharCode(101,108,105,115,105,111,110,95,107,95,56,49,0)], [String.fromCharCode(97,95,52,48,95,99,111,110,100,105,116,105,111,110,115,0),String.fromCharCode(116,95,51,95,105,116,113,117,101,117,101,0)], [String.fromCharCode(113,95,53,54,95,98,105,116,112,97,99,107,101,100,0),String.fromCharCode(100,105,115,97,98,108,105,110,103,95,56,95,50,54,0)]]);
          let sourceu = true;
         over1.push(directt.size & 3);
         nextq -= nextq;
         directt = new Map([[`${nextq}`, nextq >> (Math.min(Math.abs(nextq), 3))]]);
      for (let w = 0; w < 2; w++) {
         controlZ -= 1;
      }
       let refreshS: Map<any, any> = new Map([[String.fromCharCode(115,117,98,100,105,118,105,115,105,111,110,95,51,95,49,50,0),118], [String.fromCharCode(101,120,99,101,112,116,95,118,95,54,49,0),341], [String.fromCharCode(115,118,97,114,105,110,116,95,122,95,52,49,0),369]]);
      let activitya = String.fromCharCode(104,105,106,104,100,119,98,106,0) == vipsportz;
      do {
         vipsportz += `${(vipsportz == String.fromCharCode(106,0) ? vipsportz.length : parseInt(`${controlZ}`))}`;
         if (activitya) {
            break;
         }
      } while (activitya && (over1.length == vipsportz.length));
       let styles3 = String.fromCharCode(107,95,54,56,95,97,110,116,105,97,108,105,97,115,101,100,0);
       let register_ybT = String.fromCharCode(98,95,54,48,95,109,97,114,107,115,0);
         over1 = [vipsportz.length];
         over1 = [1 - over1.length];
      for (let o = 0; o < 2; o++) {
         controlZ += countryl.size % 1;
      }
       let mbbid3 = String.fromCharCode(105,109,112,117,108,115,101,95,53,95,53,56,0);
       let profilej = String.fromCharCode(98,111,117,110,100,95,114,95,56,52,0);
      while (vipsportz.length < register_ybT.length) {
         register_ybT += `${3 ^ defaultplayerimgN.length}`;
         break;
      }
         profilej = `${(profilej == String.fromCharCode(76,0) ? parseInt(`${controlZ}`) : profilej.length)}`;
      if (styles3.endsWith(register_ybT)) {
          let footballI = false;
         styles3 = `${(vipsportz == String.fromCharCode(81,0) ? vipsportz.length : register_ybT.length)}`;
         footballI = (!footballI ? !footballI : footballI);
      }
         register_ybT = `${(String.fromCharCode(73,0) == defaultplayerimgN ? defaultplayerimgN.length : countryl.size)}`;
          let zhuboB = 5;
          let storeP: Map<any, any> = new Map([[String.fromCharCode(109,95,52,48,0),String.fromCharCode(115,116,114,105,114,101,112,108,97,99,101,95,49,95,51,54,0)], [String.fromCharCode(114,95,51,51,95,108,97,98,101,108,115,0),String.fromCharCode(100,101,110,111,105,115,105,110,103,95,114,95,50,54,0)], [String.fromCharCode(117,118,114,100,95,120,95,57,51,0),String.fromCharCode(116,97,98,108,101,103,101,110,95,103,95,52,53,0)]]);
          let loading6 = String.fromCharCode(99,101,110,116,114,97,108,95,99,95,54,57,0);
         register_ybT += `${(profilej == String.fromCharCode(76,0) ? profilej.length : countryl.size)}`;
         zhuboB %= Math.max(storeP.size, 5);
         storeP = new Map([[loading6, 3 + zhuboB]]);
         loading6 = `${(loading6 == String.fromCharCode(104,0) ? loading6.length : zhuboB)}`;
         vipsportz += "3";
      defaultpredictionprofilet = [vipsportz.length];
      break;
   }
                    

      connectionB += `${connectionB.length}`;
      connectionB += `${middleX.length}`;
                    if (!fileIsEmpty) {

   if (3 == (5 * connectionE.size)) {
      connectionE.set(wnewinterstitial0, middleX.length - wnewinterstitial0.length);
   }
       let iconfeedbacks: Map<any, any> = new Map([[String.fromCharCode(105,95,57,55,0),399], [String.fromCharCode(115,101,101,107,95,99,95,50,48,0),430], [String.fromCharCode(117,110,115,101,108,101,99,116,95,48,95,56,50,0),369]]);
      while ((5 | iconfeedbacks.size) <= 3) {
         iconfeedbacks = new Map([[`${iconfeedbacks.size}`, iconfeedbacks.size >> (Math.min(Math.abs(iconfeedbacks.size), 4))]]);
         break;
      }
      let iconstarN = iconfeedbacks.size <= 6649351;
      do {
         iconfeedbacks = new Map([[`${iconfeedbacks.size}`, 1 | iconfeedbacks.size]]);
         if (iconstarN) {
            break;
         }
      } while (iconstarN && (!Array.from(iconfeedbacks.values()).includes(iconfeedbacks.size)));
         iconfeedbacks = new Map([[`${iconfeedbacks.size}`, 1 << (Math.min(4, Math.abs(iconfeedbacks.size)))]]);
      shootN = middleX == wnewinterstitial0;
                        setMiniVodUrl(`${fileLocation}`);
                    } else {

      defaultpredictionprofilet = [parseInt(`${libavutile}`) + connectionB.length];
   let pressureD = sourceM.length >= 6420490;
   do {
      sourceM = [1];
      if (pressureD) {
         break;
      }
   } while (pressureD && (5 <= (4 + playlistF)));
                        

      middleX = `${2 << (Math.min(Math.abs(parseInt(`${internetZ}`)), 2))}`;
       let greytick4 = 4;
       let chart5K = String.fromCharCode(104,95,56,49,95,114,111,117,110,100,101,100,0);
       let iconplayp = 2.0;
      if ((3 ^ greytick4) == 1) {
         iconplayp += parseFloat(`${parseInt(`${iconplayp}`)}`);
      }
         greytick4 <<= Math.min(chart5K.length, 1);
      while ((4.25 - iconplayp) == 1.18) {
          let backj = true;
          let successL = String.fromCharCode(97,115,115,101,109,98,108,101,95,53,95,55,54,0);
          let unfillX = false;
          let whiteX: Array<any> = [79, 853, 674];
          let loginsuccess1 = String.fromCharCode(113,95,53,50,95,105,100,99,116,120,0);
         chart5K += `${whiteX.length}`;
         backj = successL.length <= 39;
         successL = `${((backj ? 5 : 2))}`;
         unfillX = successL.length >= 76;
         whiteX = [successL.length * 3];
         loginsuccess1 = `${(successL == String.fromCharCode(50,0) ? (unfillX ? 2 : 4) : successL.length)}`;
         break;
      }
         chart5K = `${greytick4}`;
         chart5K = `${1 - parseInt(`${iconplayp}`)}`;
      let goalk = 7358701 <= greytick4;
      do {
          let holderM = false;
          let yellowvideoliveS: Array<any> = [615, 618];
         greytick4 <<= Math.min(chart5K.length, 3);
         holderM = yellowvideoliveS.length >= 59 && !holderM;
         yellowvideoliveS = [yellowvideoliveS.length];
         if (goalk) {
            break;
         }
      } while ((3 == (chart5K.length ^ 4) && (greytick4 ^ chart5K.length) == 4) && goalk);
         chart5K += `${chart5K.length + 1}`;
         chart5K = `${2 << (Math.min(3, Math.abs(parseInt(`${iconplayp}`))))}`;
      if (4 <= (parseInt(`${iconplayp}`) - chart5K.length) && 4 <= (parseInt(`${iconplayp}`) - chart5K.length)) {
          let untick7: Map<any, any> = new Map([[String.fromCharCode(108,95,53,56,95,99,97,116,99,104,0),String.fromCharCode(121,97,100,105,102,95,101,95,56,0)], [String.fromCharCode(104,101,97,100,114,111,111,109,95,56,95,51,48,0),String.fromCharCode(114,101,99,111,110,105,110,116,114,97,120,95,97,95,52,51,0)], [String.fromCharCode(106,95,49,50,95,119,97,116,99,104,0),String.fromCharCode(114,101,115,105,103,110,101,100,95,115,95,49,48,0)]]);
          let mbnativeadvancedm = String.fromCharCode(108,95,51,48,95,100,114,97,103,103,105,110,103,0);
          let holder2 = false;
          let acceptedw: Map<any, any> = new Map([[String.fromCharCode(115,100,112,95,57,95,53,56,0),true ], [String.fromCharCode(113,95,48,95,98,97,99,107,115,108,97,115,104,0),false ], [String.fromCharCode(100,95,51,53,95,102,108,105,103,104,116,0),false ]]);
         chart5K = `${untick7.size}`;
         untick7.set(`${holder2}`, ((holder2 ? 4 : 2) / (Math.max(4, acceptedw.size))));
         mbnativeadvancedm += `${2 ^ mbnativeadvancedm.length}`;
         acceptedw = new Map([[`${holder2}`, ((holder2 ? 4 : 3))]]);
      }
      playlistF ^= 2 ^ parseInt(`${libavutile}`);
                        setMiniVodUrl(currentVod.ads_pic)
                    }
                } else {

   if (4.0 == (3.91 + libavutile)) {
      libavutile -= (String.fromCharCode(65,0) == carousel1 ? carousel1.length : connectionE.size);
   }
      middleX += `${playlistF ^ 1}`;
                    

   if ((1 + defaultpredictionprofilet.length) < 1) {
      shootN = libavutile <= 64.12 || defaultpredictionprofilet.length <= 66;
   }
   for (let f = 0; f < 2; f++) {
      contextn = [2 * parseInt(`${libavutile}`)];
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
       let dices = String.fromCharCode(112,95,50,54,95,101,120,112,111,110,101,110,116,115,0);
    let rncored = String.fromCharCode(112,95,49,48,95,102,117,115,101,0);
    let macauG: Array<any> = [930, 28, 866];
    let shareJ = false;
    let roundE = 3.0;
    let submitK = false;
    let dependenciesl = true;
    let dependencyq = 4;
    let paginationf = 3.0;
    let inouttargetredq = 1.0;
    let whistleorangec = 5;
    let roboto7 = 1;
    let detailsd = String.fromCharCode(115,98,105,116,115,95,109,95,55,54,0);
   for (let f = 0; f < 1; f++) {
       let xvodx = 4;
       let with_8kk = true;
       let libfabricjnis = 4.0;
       let iconfeedbackX = true;
       let description_d8: Map<any, any> = new Map([[String.fromCharCode(100,95,56,55,95,115,98,117,118,0),true ], [String.fromCharCode(119,105,100,103,101,116,95,118,95,51,49,0),true ], [String.fromCharCode(100,105,115,112,111,115,101,95,98,95,50,53,0),false ]]);
      let reviewx = libfabricjnis >= 5961025.0;
      do {
          let gradlewn = 5;
         libfabricjnis -= (parseFloat(`${(iconfeedbackX ? 1 : 2) - parseInt(`${libfabricjnis}`)}`));
         gradlewn /= Math.max(4, 2 ^ gradlewn);
         if (reviewx) {
            break;
         }
      } while ((!Array.from(description_d8.keys()).includes(`${libfabricjnis}`)) && reviewx);
          let iconnewsshareg = 3;
         with_8kk = xvodx >= 64;
         iconnewsshareg %= Math.max(5, iconnewsshareg);
       let langkeyF = 3;
       let starL = 2;
      if (iconfeedbackX) {
          let notificationh = String.fromCharCode(99,97,108,99,117,108,97,116,101,95,108,95,50,54,0);
          let editR: Array<any> = [563, 831];
          let acceptedv = 3.0;
          let activityv: Map<any, any> = new Map([[String.fromCharCode(107,101,121,115,101,116,117,112,95,102,95,50,53,0),true ], [String.fromCharCode(116,95,51,54,95,108,105,110,107,105,110,103,0),false ], [String.fromCharCode(114,105,110,100,101,120,95,120,95,52,50,0),true ]]);
          let detailsC: Array<any> = [377, 816];
         xvodx -= 3 & description_d8.size;
         notificationh = `${editR.length | 2}`;
         editR.push(detailsC.length + 1);
         acceptedv += activityv.size << (Math.min(Math.abs(3), 5));
         activityv.set(notificationh, activityv.size / (Math.max(3, notificationh.length)));
         detailsC = [2];
      }
         description_d8.set(`${langkeyF}`, 1 & starL);
       let minimizeN = true;
      while (!with_8kk) {
         starL |= (parseInt(`${libfabricjnis}`) - (with_8kk ? 4 : 2));
         break;
      }
      for (let l = 0; l < 3; l++) {
         langkeyF += 1 - parseInt(`${libfabricjnis}`);
      }
         langkeyF /= Math.max(2, 5);
         description_d8 = new Map([[`${minimizeN}`, parseInt(`${libfabricjnis}`) * 2]]);
       let iconplayh = 3.0;
      if (5.45 >= (3.52 - libfabricjnis)) {
          let imagesa = true;
         with_8kk = iconfeedbackX && 58 <= xvodx;
         imagesa = imagesa || !imagesa;
      }
      let libjsinspectorM = minimizeN ? !minimizeN : minimizeN;
      do {
         minimizeN = !with_8kk;
         if (libjsinspectorM) {
            break;
         }
      } while (libjsinspectorM && (3 == xvodx));
         minimizeN = 76 == description_d8.size;
         starL >>= Math.min(4, Math.abs(1));
      submitK = 37 >= dependencyq;
   }
      inouttargetredq /= Math.max(5, dependencyq & 3);
       let theme6 = 4.0;
       let awayt = 1.0;
       let footballa = 5;
         awayt += parseInt(`${theme6}`);
      for (let o = 0; o < 3; o++) {
          let register_1so = 2.0;
          let unimplementedview1 = String.fromCharCode(107,109,101,97,110,115,95,107,95,55,57,0);
          let floatingw = true;
          let emojih: Array<any> = [835, 617, 32];
         theme6 += parseFloat(`${2 >> (Math.min(5, unimplementedview1.length))}`);
         register_1so -= parseFloat(`${2 & parseInt(`${register_1so}`)}`);
         unimplementedview1 = `${((floatingw ? 1 : 3) - parseInt(`${register_1so}`))}`;
         floatingw = floatingw && register_1so == 79.58;
         emojih.push(2 / (Math.max(parseInt(`${register_1so}`), 2)));
      }
      for (let i = 0; i < 3; i++) {
          let libtanz: Array<any> = [696, 140];
          let imagemanagerS = 3.0;
          let collectionx = 0;
          let flagM = String.fromCharCode(109,95,51,50,95,98,105,110,116,101,120,116,0);
          let reducerR: Array<any> = [723, 493];
         theme6 -= parseFloat(`${3 % (Math.max(4, reducerR.length))}`);
         libtanz = [flagM.length * 3];
         imagemanagerS /= Math.max((String.fromCharCode(68,0) == flagM ? libtanz.length : flagM.length), 3);
         collectionx /= Math.max(4, libtanz.length << (Math.min(3, Math.abs(collectionx))));
         reducerR = [flagM.length * 3];
      }
      let cancel7 = awayt <= 8339969.0;
      do {
         awayt -= parseInt(`${theme6}`);
         if (cancel7) {
            break;
         }
      } while (cancel7 && (4.36 <= (1.41 / (Math.max(7, awayt)))));
      for (let p = 0; p < 1; p++) {
          let topicf = 0;
          let libavformat5 = String.fromCharCode(104,101,120,98,121,116,101,95,55,95,50,48,0);
          let clockj: Array<any> = [599, 552];
          let libfabricjniy = String.fromCharCode(102,95,51,57,95,101,120,99,101,101,100,101,100,0);
         footballa *= topicf;
         libavformat5 = `${libavformat5.length}`;
         clockj.push(1 * libavformat5.length);
         libfabricjniy += `${libavformat5.length ^ libfabricjniy.length}`;
      }
       let downloadz = String.fromCharCode(117,95,56,49,95,101,114,114,111,114,115,0);
          let storew = String.fromCharCode(98,95,52,51,95,97,117,116,104,111,114,115,0);
          let linee: Map<any, any> = new Map([[String.fromCharCode(102,95,56,50,95,99,111,117,110,116,100,111,119,110,0),821], [String.fromCharCode(105,95,53,49,95,115,121,109,98,111,108,105,99,97,116,101,100,0),300], [String.fromCharCode(101,95,52,48,95,114,101,109,111,116,101,108,121,0),539]]);
         footballa &= 3 * storew.length;
         storew += `${linee.size}`;
         linee.set(`${linee.size}`, linee.size % (Math.max(3, 3)));
      while ((footballa - 5) <= 3) {
         footballa |= 3 % (Math.max(3, downloadz.length));
         break;
      }
      for (let c = 0; c < 1; c++) {
         footballa %= Math.max((String.fromCharCode(48,0) == downloadz ? downloadz.length : parseInt(`${awayt}`)), 1);
      }
      dices += `${(parseInt(`${paginationf}`) & (submitK ? 3 : 5))}`;
      dices += `${((shareJ ? 1 : 5) >> (Math.min(dices.length, 5)))}`;
   let unfillP = dependenciesl ? !dependenciesl : dependenciesl;
   do {
       let bggradientv = String.fromCharCode(98,95,56,48,95,97,108,112,104,97,98,101,116,115,0);
       let greyticku = false;
       let fastl = String.fromCharCode(115,115,101,114,116,95,113,95,49,55,0);
       let greeng = String.fromCharCode(109,95,53,48,95,116,111,111,108,116,105,112,115,0);
      for (let r = 0; r < 3; r++) {
         bggradientv = `${(greeng.length << (Math.min(2, Math.abs((greyticku ? 5 : 1)))))}`;
      }
         bggradientv += `${bggradientv.length >> (Math.min(Math.abs(2), 5))}`;
          let floatingK = String.fromCharCode(100,105,115,109,105,115,115,101,100,95,50,95,53,52,0);
          let nextJ: Array<any> = [String.fromCharCode(110,95,52,95,102,109,97,99,0), String.fromCharCode(106,95,55,53,95,115,105,103,115,97,102,101,0)];
          let awayj = 5;
         greyticku = floatingK == String.fromCharCode(75,0);
         floatingK += `${awayj}`;
         nextJ = [1 << (Math.min(4, nextJ.length))];
         awayj >>= Math.min(Math.abs(1 & nextJ.length), 5);
      if (!greyticku) {
         fastl = `${(bggradientv == String.fromCharCode(111,0) ? bggradientv.length : fastl.length)}`;
      }
         greyticku = 93 > fastl.length && 93 > bggradientv.length;
      while (greyticku && fastl.length <= 3) {
          let action7: Array<any> = [String.fromCharCode(118,95,53,52,95,115,117,98,115,121,115,116,101,109,0), String.fromCharCode(107,95,57,52,95,119,101,101,107,100,97,121,115,0), String.fromCharCode(101,95,51,55,95,115,117,98,112,97,99,107,101,116,0)];
          let reminder9: Array<any> = [343, 970, 34];
          let clearU = 5.0;
          let downloadedU = String.fromCharCode(116,101,115,116,114,101,115,117,108,116,95,106,95,53,55,0);
          let viewsP: Map<any, any> = new Map([[String.fromCharCode(115,101,108,95,122,95,57,53,0),515], [String.fromCharCode(108,95,52,95,115,105,122,101,114,0),713], [String.fromCharCode(113,95,56,51,95,99,111,100,101,99,117,116,105,108,115,0),204]]);
         fastl = `${reminder9.length}`;
         action7 = [action7.length + 1];
         reminder9 = [1];
         clearU += action7.length + 2;
         downloadedU += `${downloadedU.length % 3}`;
         viewsP = new Map([[`${clearU}`, (downloadedU == String.fromCharCode(113,0) ? parseInt(`${clearU}`) : downloadedU.length)]]);
         break;
      }
      let half5 = 9176809 <= fastl.length;
      do {
          let r_image0 = 4.0;
         fastl += `${(fastl == String.fromCharCode(86,0) ? bggradientv.length : fastl.length)}`;
         r_image0 *= parseFloat(`${parseInt(`${r_image0}`)}`);
         if (half5) {
            break;
         }
      } while (half5 && (bggradientv.length > 3));
         bggradientv += `${fastl.length | 3}`;
          let renewh = String.fromCharCode(98,95,50,56,95,115,109,105,108,0);
          let ewarded6: Array<any> = [639, 852];
          let libjsinspectorq = true;
         greeng += `${(ewarded6.length * (greyticku ? 4 : 1))}`;
         renewh += `${renewh.length << (Math.min(Math.abs(1), 1))}`;
         ewarded6.push(1);
          let screenm = 1.0;
          let dragY = 2;
          let graphicsq = 4.0;
         fastl = "2";
         screenm /= Math.max(parseFloat(`${2}`), 3);
         dragY -= 3 >> (Math.min(Math.abs(dragY), 1));
         graphicsq *= parseFloat(`${dragY}`);
      for (let j = 0; j < 3; j++) {
         greyticku = !greyticku;
      }
       let trashs = String.fromCharCode(105,95,56,51,95,114,116,108,0);
       let g_image8 = String.fromCharCode(97,98,115,120,95,102,95,51,55,0);
      dependenciesl = !greyticku;
      if (unfillP) {
         break;
      }
   } while ((dependencyq < 3) && unfillP);
   for (let e = 0; e < 1; e++) {
      shareJ = (13 == ((!dependenciesl ? macauG.length : 13) + macauG.length));
   }
   if (!dices.includes(`${submitK}`)) {
       let heartH = 2.0;
       let termsr = String.fromCharCode(115,104,111,119,95,55,95,49,52,0);
       let static_8kj = String.fromCharCode(108,105,98,112,111,115,116,112,114,111,99,95,56,95,55,52,0);
       let updates4 = String.fromCharCode(115,108,105,100,97,98,108,101,95,116,95,54,53,0);
          let playlistx = 2.0;
          let goalH = String.fromCharCode(109,95,55,57,95,115,121,110,99,104,114,111,110,105,122,101,0);
          let nterstitialz = 0.0;
         heartH += 1;
         playlistx += (parseFloat(`${goalH == String.fromCharCode(105,0) ? parseInt(`${nterstitialz}`) : goalH.length}`));
         nterstitialz *= parseFloat(`${parseInt(`${playlistx}`) ^ parseInt(`${nterstitialz}`)}`);
       let clubJ = String.fromCharCode(98,95,53,53,95,99,108,97,115,115,101,115,0);
         termsr = `${parseInt(`${heartH}`) | 1}`;
      for (let h = 0; h < 2; h++) {
          let klevinR: Array<any> = [767, 377];
          let redirectc = 2.0;
          let private_9e1 = String.fromCharCode(111,112,116,105,109,105,122,101,114,95,103,95,54,54,0);
          let favicond = String.fromCharCode(97,95,52,57,95,109,117,108,116,0);
          let favicon_ = String.fromCharCode(103,95,54,55,95,97,114,105,98,0);
         clubJ = `${(updates4 == String.fromCharCode(69,0) ? updates4.length : static_8kj.length)}`;
         klevinR = [3 % (Math.max(3, favicond.length))];
         redirectc *= 3 - klevinR.length;
         private_9e1 += `${parseInt(`${redirectc}`) % (Math.max(favicond.length, 4))}`;
         favicon_ = `${favicon_.length ^ klevinR.length}`;
      }
      let championX = 5448357 <= updates4.length;
      do {
         updates4 = `${parseInt(`${heartH}`) << (Math.min(Math.abs(3), 1))}`;
         if (championX) {
            break;
         }
      } while ((1 == updates4.length) && championX);
      let defaultplayerimgv = static_8kj.length >= 5273404;
      do {
         static_8kj += `${static_8kj.length % 3}`;
         if (defaultplayerimgv) {
            break;
         }
      } while ((static_8kj.length == updates4.length) && defaultplayerimgv);
          let arrowup7 = 3.0;
          let twitterR = String.fromCharCode(100,114,97,102,116,95,121,95,49,0);
         clubJ = `${static_8kj.length}`;
         arrowup7 /= Math.max(3, 2 * twitterR.length);
         twitterR = `${parseInt(`${arrowup7}`) | 3}`;
      let circleh = clubJ.length <= 5095478;
      do {
         clubJ = `${(String.fromCharCode(118,0) == updates4 ? parseInt(`${heartH}`) : updates4.length)}`;
         if (circleh) {
            break;
         }
      } while (circleh && (clubJ.startsWith(`${heartH}`)));
         updates4 = `${(String.fromCharCode(75,0) == static_8kj ? updates4.length : static_8kj.length)}`;
         heartH *= (termsr == String.fromCharCode(77,0) ? clubJ.length : termsr.length);
       let const__rb = String.fromCharCode(114,97,110,115,112,111,114,116,95,54,95,51,54,0);
          let ksad3: Map<any, any> = new Map([[String.fromCharCode(97,117,116,104,95,113,95,52,51,0),855], [String.fromCharCode(97,101,115,110,105,95,57,95,55,53,0),172], [String.fromCharCode(114,95,55,95,98,101,99,97,117,115,101,0),196]]);
         static_8kj += `${clubJ.length + 2}`;
         ksad3.set(`${ksad3.size}`, ksad3.size & 2);
      submitK = !submitK;
   }
      macauG = [parseInt(`${inouttargetredq}`)];
       let baselinen = String.fromCharCode(116,114,97,110,115,117,112,112,95,102,95,54,53,0);
       let sharemodalE = 5.0;
         baselinen += `${baselinen.length % 1}`;
         sharemodalE += parseFloat(`${parseInt(`${sharemodalE}`)}`);
      for (let m = 0; m < 3; m++) {
         sharemodalE += parseFloat(`${1 + parseInt(`${sharemodalE}`)}`);
      }
          let chaty = 1.0;
          let emptyU = 3.0;
         sharemodalE /= Math.max(parseFloat(`${parseInt(`${chaty}`)}`), 3);
         chaty *= 2;
         emptyU -= 2;
          let floatingI = String.fromCharCode(114,97,119,100,101,99,95,53,95,52,48,0);
          let referrery = String.fromCharCode(119,95,51,50,95,109,101,109,99,112,121,0);
          let defaultroombgk = 4;
         baselinen = `${parseInt(`${sharemodalE}`)}`;
         floatingI += `${floatingI.length - 3}`;
         referrery += `${floatingI.length}`;
         defaultroombgk /= Math.max(3, referrery.length);
          let statsf = String.fromCharCode(115,111,108,97,110,97,95,53,95,50,48,0);
          let sharey: Map<any, any> = new Map([[String.fromCharCode(119,97,118,114,101,97,100,101,114,95,48,95,56,51,0),451], [String.fromCharCode(103,112,109,100,95,49,95,53,52,0),551], [String.fromCharCode(100,95,51,51,95,105,110,116,101,114,108,101,97,118,101,0),464]]);
         baselinen = `${(statsf == String.fromCharCode(80,0) ? parseInt(`${sharemodalE}`) : statsf.length)}`;
         sharey.set(`${sharey.size}`, sharey.size);
      roundE -= ((shareJ ? 3 : 1));
   let heji5 = submitK ? !submitK : submitK;
   do {
       let actionu: Map<any, any> = new Map([[String.fromCharCode(112,95,49,49,95,105,110,115,116,97,108,108,115,0),402], [String.fromCharCode(99,121,99,108,101,115,95,50,95,57,53,0),886], [String.fromCharCode(115,95,50,55,95,118,111,105,99,101,115,0),92]]);
          let sharedR = true;
          let loginb = 3.0;
          let executorI = String.fromCharCode(111,95,53,49,95,109,111,118,101,112,97,103,101,0);
         actionu.set(`${loginb}`, (parseInt(`${loginb}`) >> (Math.min(3, Math.abs((sharedR ? 2 : 1))))));
         sharedR = executorI == executorI;
      let window_9W = 7610588 <= actionu.size;
      do {
          let shoot3 = 5.0;
          let libsentryw = String.fromCharCode(97,95,57,51,95,103,104,97,115,104,0);
          let holderF = String.fromCharCode(103,110,114,101,95,119,95,54,55,0);
          let runtimeschedulerR = 4;
          let unimplementedviewI = String.fromCharCode(116,114,97,110,115,108,97,116,101,100,95,50,95,51,55,0);
         actionu = new Map([[`${actionu.size}`, 1]]);
         shoot3 /= Math.max(3, libsentryw.length);
         libsentryw = `${holderF.length}`;
         holderF = `${libsentryw.length}`;
         runtimeschedulerR &= libsentryw.length | unimplementedviewI.length;
         unimplementedviewI = `${holderF.length}`;
         if (window_9W) {
            break;
         }
      } while (window_9W && (!Array.from(actionu.keys()).includes(`${actionu.size}`)));
      let windL = actionu.size >= 6260758;
      do {
          let shirt8: Map<any, any> = new Map([[String.fromCharCode(114,117,101,95,99,95,56,48,0),22], [String.fromCharCode(108,95,51,49,95,113,110,111,115,0),317], [String.fromCharCode(98,95,52,55,95,115,112,108,105,99,101,0),350]]);
          let bggradienty = 4.0;
          let linkb = 4.0;
          let f_locky = String.fromCharCode(122,95,51,51,95,105,110,115,116,97,108,108,97,116,105,111,110,0);
         actionu = new Map([[`${actionu.size}`, parseInt(`${linkb}`)]]);
         shirt8 = new Map([[`${bggradienty}`, 3]]);
         bggradienty /= Math.max(4, parseFloat(`${parseInt(`${bggradienty}`) | f_locky.length}`));
         linkb += shirt8.size & f_locky.length;
         if (windL) {
            break;
         }
      } while (((actionu.size & actionu.size) > 1 || 2 > (actionu.size & 1)) && windL);
      submitK = 40 == actionu.size && 22.38 == roundE;
      if (heji5) {
         break;
      }
   } while (heji5 && (!submitK));
      rncored += `${((shareJ ? 2 : 5) << (Math.min(Math.abs(parseInt(`${inouttargetredq}`)), 2)))}`;
      paginationf /= Math.max((parseFloat(`${dices == String.fromCharCode(115,0) ? dices.length : dependencyq}`)), 2);
   while (inouttargetredq <= 5.16) {
       let yellowredcard3 = 2;
       let dangerj = String.fromCharCode(99,114,117,110,95,97,95,57,49,0);
          let sigmobN = String.fromCharCode(109,95,51,52,95,114,101,115,105,103,110,105,110,103,0);
         dangerj += "3";
         sigmobN = `${2 * sigmobN.length}`;
      let reminder6 = yellowredcard3 >= 7431842;
      do {
         yellowredcard3 -= dangerj.length / (Math.max(1, 8));
         if (reminder6) {
            break;
         }
      } while ((dangerj.length >= 2) && reminder6);
      for (let j = 0; j < 3; j++) {
         yellowredcard3 <<= Math.min(Math.abs(yellowredcard3), 5);
      }
      if (3 > (yellowredcard3 + dangerj.length) && (yellowredcard3 + dangerj.length) > 3) {
          let libaneR: Map<any, any> = new Map([[String.fromCharCode(109,95,50,51,95,97,117,116,104,101,110,116,105,99,97,116,105,111,110,0),String.fromCharCode(104,95,56,54,95,119,105,100,101,115,99,114,101,101,110,0)], [String.fromCharCode(100,99,109,112,95,104,95,51,49,0),String.fromCharCode(116,114,97,110,115,112,111,114,116,115,95,110,95,50,49,0)], [String.fromCharCode(108,95,51,48,95,101,97,114,108,105,101,115,116,0),String.fromCharCode(113,95,49,55,0)]]);
         yellowredcard3 += (dangerj == String.fromCharCode(49,0) ? dangerj.length : libaneR.size);
      }
      while (dangerj.length > 3) {
         dangerj += `${(dangerj == String.fromCharCode(88,0) ? dangerj.length : yellowredcard3)}`;
         break;
      }
         yellowredcard3 >>= Math.min(3, Math.abs(yellowredcard3 / 1));
      dices = `${rncored.length}`;
      break;
   }
   let bdxadsdk7 = submitK ? !submitK : submitK;
   do {
       let predictionactiveP = 0.0;
       let fastforwardk: Map<any, any> = new Map([[String.fromCharCode(118,95,56,50,95,98,117,116,116,101,114,102,108,105,101,115,0),893], [String.fromCharCode(109,111,110,111,116,111,110,105,116,121,95,102,95,50,54,0),852]]);
       let thailand1 = String.fromCharCode(112,95,56,48,95,122,114,101,111,114,100,101,114,0);
      for (let i = 0; i < 2; i++) {
         predictionactiveP += parseFloat(`${fastforwardk.size << (Math.min(Math.abs(3), 1))}`);
      }
         fastforwardk.set(`${thailand1}`, thailand1.length);
         fastforwardk = new Map([[`${fastforwardk.size}`, parseInt(`${predictionactiveP}`) % 3]]);
         predictionactiveP -= parseFloat(`${1 & thailand1.length}`);
       let giftbutton3 = String.fromCharCode(108,111,103,111,117,114,108,95,105,95,54,51,0);
       let leftC = String.fromCharCode(100,95,56,57,95,99,114,108,100,112,0);
      submitK = !rncored.startsWith(`${submitK}`);
      if (bdxadsdk7) {
         break;
      }
   } while ((inouttargetredq > 4.93) && bdxadsdk7);

        setVideoReadyIos(true)

      dices += `${(parseInt(`${roundE}`) >> (Math.min(3, Math.abs((dependenciesl ? 5 : 5)))))}`;
   while ((5 & dependencyq) > 2) {
       let traminix = true;
       let analyticsX = String.fromCharCode(97,117,100,105,111,112,114,111,99,95,113,95,57,0);
       let manifesty = String.fromCharCode(111,95,55,51,95,116,104,117,110,107,0);
      for (let t = 0; t < 3; t++) {
         analyticsX += `${((traminix ? 1 : 2) * analyticsX.length)}`;
      }
      for (let d = 0; d < 2; d++) {
          let renderx: Array<any> = [836, 718];
         traminix = renderx.length <= 100;
      }
      while (!analyticsX.includes(manifesty)) {
         analyticsX = `${analyticsX.length >> (Math.min(Math.abs(1), 1))}`;
         break;
      }
         analyticsX += `${manifesty.length}`;
         manifesty += `${(manifesty.length | (traminix ? 4 : 5))}`;
         analyticsX = `${manifesty.length}`;
          let libavdeviceb: Map<any, any> = new Map([[String.fromCharCode(99,117,114,95,56,95,51,57,0),721], [String.fromCharCode(100,101,115,101,108,101,99,116,101,100,95,117,95,50,53,0),281]]);
          let minimizet = 5.0;
         traminix = manifesty.endsWith(`${traminix}`);
         libavdeviceb = new Map([[`${libavdeviceb.size}`, libavdeviceb.size * parseInt(`${minimizet}`)]]);
         minimizet *= libavdeviceb.size;
         analyticsX = "3";
          let roundT = 3;
          let eactH: Array<any> = [872, 847, 368];
         analyticsX = `${eactH.length}`;
         roundT |= roundT;
         eactH.push(roundT / (Math.max(roundT, 9)));
      roundE /= Math.max(1, (analyticsX.length ^ (submitK ? 5 : 5)));
      break;
   }
   while (shareJ && rncored.length >= 3) {
      rncored = `${(dices == String.fromCharCode(72,0) ? dices.length : (dependenciesl ? 1 : 2))}`;
      break;
   }
   while (!rncored.includes(`${macauG.length}`)) {
      macauG.push(3);
      break;
   }
      dependencyq ^= 2;
   while ((paginationf + 4.100) >= 5.47) {
      paginationf += (parseFloat(`${(submitK ? 5 : 2) / (Math.max(parseInt(`${roundE}`), 4))}`));
      break;
   }
   while ((5 + inouttargetredq) < 4.34) {
      paginationf -= (parseFloat(`${(dependenciesl ? 5 : 2) & parseInt(`${roundE}`)}`));
      break;
   }
       let questiconI = 2.0;
         questiconI *= parseInt(`${questiconI}`);
         questiconI -= parseInt(`${questiconI}`);
         questiconI += parseInt(`${questiconI}`) >> (Math.min(5, Math.abs(2)));
      roundE *= parseInt(`${questiconI}`);
   while (5 == (rncored.length >> (Math.min(Math.abs(3), 3))) || (rncored.length >> (Math.min(Math.abs(3), 3))) == 1) {
      dependencyq &= parseInt(`${roundE}`) % 2;
      break;
   }
      rncored = `${rncored.length}`;
       let backward7 = String.fromCharCode(105,95,56,53,95,114,101,108,97,117,110,99,104,0);
       let footballfieldr = 3.0;
       let gpayD: Map<any, any> = new Map([[String.fromCharCode(105,95,55,48,95,108,101,97,115,116,0),String.fromCharCode(115,116,97,114,95,105,95,57,49,0)], [String.fromCharCode(104,117,102,102,121,117,118,95,48,95,53,50,0),String.fromCharCode(97,115,99,101,110,116,95,107,95,49,50,0)], [String.fromCharCode(101,110,99,111,100,101,100,95,111,95,57,49,0),String.fromCharCode(111,110,101,111,102,95,121,95,56,57,0)]]);
          let termsf = String.fromCharCode(112,95,53,49,95,115,105,102,102,0);
          let textinputJ = true;
          let malaysiaH = true;
         gpayD.set(backward7, 3);
         termsf += `${termsf.length * 1}`;
         textinputJ = termsf.length <= 40 || textinputJ;
         malaysiaH = textinputJ;
      let gradlew5 = footballfieldr <= 6201361.0;
      do {
         footballfieldr += parseFloat(`${3 >> (Math.min(2, Math.abs(parseInt(`${footballfieldr}`))))}`);
         if (gradlew5) {
            break;
         }
      } while ((2 < (parseInt(`${footballfieldr}`) - backward7.length) || 5 < (2 & backward7.length)) && gradlew5);
         footballfieldr -= parseFloat(`${parseInt(`${footballfieldr}`) - 1}`);
         footballfieldr += parseFloat(`${backward7.length / (Math.max(7, gpayD.size))}`);
      for (let t = 0; t < 3; t++) {
          let ewardede = 1.0;
          let rncoreR = String.fromCharCode(106,95,49,50,95,105,110,116,101,114,109,105,100,105,97,116,101,0);
          let datav = String.fromCharCode(110,95,57,57,95,101,114,112,105,99,0);
         backward7 += `${1 >> (Math.min(5, Math.abs(parseInt(`${footballfieldr}`))))}`;
         ewardede += (String.fromCharCode(114,0) == rncoreR ? rncoreR.length : parseInt(`${ewardede}`));
         datav += "3";
      }
      if ((gpayD.size * 4) < 4) {
          let acceptedc = String.fromCharCode(113,95,55,56,95,108,101,97,115,116,0);
          let station7 = String.fromCharCode(119,105,112,101,95,115,95,54,57,0);
         footballfieldr += (parseFloat(`${backward7 == String.fromCharCode(105,0) ? parseInt(`${footballfieldr}`) : backward7.length}`));
         acceptedc += `${station7.length | acceptedc.length}`;
         station7 += `${acceptedc.length & station7.length}`;
      }
          let policyc = 0.0;
          let headeru = 0.0;
         backward7 = "3";
         policyc += parseFloat(`${parseInt(`${headeru}`) * 2}`);
         headeru += 3 - parseInt(`${headeru}`);
          let xvodU = 1.0;
          let pressureh: Map<any, any> = new Map([[String.fromCharCode(105,95,52,57,95,99,108,97,115,115,105,102,105,101,114,0),125], [String.fromCharCode(115,121,109,98,111,108,105,99,97,116,101,100,95,55,95,51,0),183], [String.fromCharCode(111,117,116,108,105,110,107,95,106,95,49,52,0),667]]);
          let collectionY = 0.0;
         footballfieldr *= parseFloat(`${parseInt(`${footballfieldr}`) | backward7.length}`);
         xvodU *= pressureh.size >> (Math.min(Math.abs(3), 2));
         pressureh.set(`${collectionY}`, 1 * pressureh.size);
         collectionY *= 1;
          let feedbackV = 2.0;
          let predictionwin7 = String.fromCharCode(115,95,50,51,95,112,114,111,112,111,114,116,105,111,110,0);
          let sortU = String.fromCharCode(114,95,51,53,95,109,111,118,105,101,0);
         footballfieldr /= Math.max(4, parseFloat(`${parseInt(`${footballfieldr}`)}`));
         feedbackV /= Math.max(parseFloat(`${parseInt(`${feedbackV}`) << (Math.min(Math.abs(2), 3))}`), 3);
         predictionwin7 = `${parseInt(`${feedbackV}`) | predictionwin7.length}`;
         sortU = `${parseInt(`${feedbackV}`) ^ 1}`;
      rncored = `${parseInt(`${roundE}`)}`;
   while (roboto7 >= 3) {
      roboto7 <<= Math.min(Math.abs(3), 2);
      break;
   }
      submitK = !submitK || whistleorangec >= 36;
      dependenciesl = (shareJ ? dependenciesl : !shareJ);
        setVideoReadyAndroid(true)
    }, []);

    const onAdsBtnPress = () => {
       let sheetn = String.fromCharCode(110,101,103,95,117,95,49,57,0);
    let exampleimageT = String.fromCharCode(112,111,105,110,116,95,53,95,50,54,0);
    let quest5: Map<any, any> = new Map([[String.fromCharCode(112,95,55,52,95,99,111,109,98,101,100,0),false ], [String.fromCharCode(101,110,115,117,114,101,95,112,95,53,56,0),true ]]);
    let traminiQ = String.fromCharCode(111,95,53,51,95,114,103,98,97,108,101,0);
    let castingd: Array<any> = [532, 14];
    let suggestionA = 1.0;
    let klevinz: Map<any, any> = new Map([[String.fromCharCode(97,95,50,48,95,110,111,114,109,97,108,105,122,101,0),String.fromCharCode(122,105,112,95,55,95,49,57,0)], [String.fromCharCode(115,116,105,114,110,103,95,122,95,55,48,0),String.fromCharCode(113,114,99,111,100,101,95,108,95,51,49,0)]]);
    let libfbjni3: Map<any, any> = new Map([[String.fromCharCode(106,95,53,52,95,115,108,105,100,97,98,108,101,0),false ], [String.fromCharCode(103,114,97,110,117,108,97,114,95,51,95,49,52,0),false ]]);
    let libfbd = 4.0;
    let foregroundb = String.fromCharCode(114,95,55,52,95,108,111,99,97,108,101,0);
    let entry9: Array<any> = [359, 525];
    let philippinesv = 5.0;
       let preview8 = 0.0;
       let reactnativeratings2 = String.fromCharCode(107,98,105,116,95,120,95,56,52,0);
      while (3.86 <= (preview8 / 3.42)) {
         preview8 /= Math.max((reactnativeratings2 == String.fromCharCode(50,0) ? reactnativeratings2.length : parseInt(`${preview8}`)), 5);
         break;
      }
      if ((1 / (Math.max(7, reactnativeratings2.length))) <= 3) {
         preview8 *= parseInt(`${preview8}`) ^ 1;
      }
       let routerY = 4.0;
      while (3.55 <= (preview8 / (Math.max(4.18, 10)))) {
          let mailZ = 0.0;
          let trashp = String.fromCharCode(105,110,116,101,114,112,111,108,97,116,111,114,115,95,56,95,52,56,0);
          let resendv = String.fromCharCode(118,95,51,48,95,115,99,97,108,101,102,97,99,116,111,114,115,0);
          let dropdownb = 1;
         preview8 -= 3;
         mailZ += dropdownb;
         trashp += `${resendv.length}`;
         resendv = `${dropdownb & 2}`;
         break;
      }
       let dangerC = 2;
       let whistleorangeW: Array<any> = [String.fromCharCode(111,95,53,48,95,105,110,102,111,114,109,0), String.fromCharCode(106,95,56,56,0)];
       let reviewI: Array<any> = [852, 834];
      sheetn = `${castingd.length + 1}`;
   if ((klevinz.size << (Math.min(Math.abs(3), 4))) < 4 && (parseFloat(`${klevinz.size}`) - suggestionA) < 2.48) {
      klevinz = new Map([[`${libfbjni3.size}`, libfbjni3.size]]);
   }
      sheetn += `${foregroundb.length ^ 3}`;
      klevinz.set(foregroundb, foregroundb.length);

        if (!currentVod?.ads_url) {

   if (quest5.size >= 3) {
      traminiQ += "3";
   }
   let ajaxv = castingd.length <= 9868087;
   do {
       let eventM = 5;
      if (4 > eventM) {
          let spinners = 3.0;
          let statisticsinactiveI = String.fromCharCode(111,95,51,56,95,114,97,105,116,0);
          let backwards = 4.0;
         eventM ^= eventM * parseInt(`${backwards}`);
         spinners += statisticsinactiveI.length;
         statisticsinactiveI += `${parseInt(`${spinners}`) ^ 1}`;
         backwards /= Math.max((parseFloat(`${statisticsinactiveI == String.fromCharCode(78,0) ? statisticsinactiveI.length : parseInt(`${spinners}`)}`)), 1);
      }
         eventM &= 1;
       let code4: Map<any, any> = new Map([[String.fromCharCode(111,95,55,55,95,117,112,118,112,0),947], [String.fromCharCode(111,95,54,55,95,107,101,121,112,97,116,104,0),248], [String.fromCharCode(108,111,99,97,116,101,100,95,115,95,50,54,0),246]]);
      castingd.push(traminiQ.length % 1);
      if (ajaxv) {
         break;
      }
   } while ((parseFloat(`${castingd.length}`) >= suggestionA) && ajaxv);
       let mbbid9 = 1.0;
          let cleare = String.fromCharCode(100,101,116,101,114,109,105,110,101,100,95,118,95,49,56,0);
          let uimanagerm = String.fromCharCode(108,95,55,54,95,104,109,109,116,0);
          let grayl: Map<any, any> = new Map([[String.fromCharCode(115,112,97,114,107,115,95,99,95,50,49,0),929], [String.fromCharCode(104,95,52,53,95,117,110,99,97,99,104,101,100,0),530]]);
         mbbid9 *= parseFloat(`${cleare.length}`);
         cleare = `${2 << (Math.min(3, uimanagerm.length))}`;
         uimanagerm = `${1 - grayl.size}`;
         grayl = new Map([[`${grayl.size}`, grayl.size]]);
          let temperatureX = 1;
          let cancelF = 5;
         mbbid9 -= parseFloat(`${3 >> (Math.min(Math.abs(cancelF), 3))}`);
         temperatureX /= Math.max(1, 1 % (Math.max(3, temperatureX)));
         cancelF ^= temperatureX + 3;
          let customp = false;
          let eacti = true;
          let profileframel: Array<any> = [String.fromCharCode(115,95,56,52,95,116,97,103,0), String.fromCharCode(103,95,51,49,95,109,105,115,117,115,101,0)];
         mbbid9 -= parseFloat(`${1 >> (Math.min(5, profileframel.length))}`);
         customp = (!eacti ? !customp : !eacti);
         profileframel = [((customp ? 4 : 1) & (eacti ? 3 : 1))];
      klevinz.set(exampleimageT, 2);
       let header8: Array<any> = [497, 283, 973];
       let tooltipsc = true;
       let greytickL: Map<any, any> = new Map([[String.fromCharCode(100,97,115,104,101,115,95,108,95,56,53,0),112], [String.fromCharCode(119,95,49,53,95,115,105,114,105,0),945]]);
         tooltipsc = greytickL.size <= header8.length;
         tooltipsc = (((tooltipsc ? greytickL.size : 71) >> (Math.min(Math.abs(greytickL.size), 3))) < 26);
      for (let w = 0; w < 2; w++) {
          let shirtV = String.fromCharCode(116,108,101,110,95,48,95,54,51,0);
         tooltipsc = String.fromCharCode(98,0) == shirtV;
      }
      while (greytickL.size <= 3) {
          let comment8 = String.fromCharCode(97,101,97,100,95,112,95,49,52,0);
          let showA: Array<any> = [String.fromCharCode(114,101,115,101,110,116,97,116,105,111,110,95,102,95,50,0), String.fromCharCode(105,95,53,95,112,114,101,100,105,99,116,105,111,110,115,0)];
          let iconwechatG = String.fromCharCode(99,95,53,95,117,110,112,97,99,107,104,105,0);
          let mbnativef: Map<any, any> = new Map([[String.fromCharCode(111,118,101,114,105,100,100,101,110,95,120,95,52,50,0),false ], [String.fromCharCode(109,101,109,98,101,114,115,104,105,112,95,97,95,54,57,0),true ], [String.fromCharCode(110,111,119,95,112,95,53,0),true ]]);
         greytickL = new Map([[`${mbnativef.size}`, header8.length]]);
         comment8 = `${(comment8 == String.fromCharCode(97,0) ? showA.length : comment8.length)}`;
         showA.push(1 & comment8.length);
         iconwechatG = `${showA.length}`;
         mbnativef = new Map([[`${showA.length}`, iconwechatG.length / 1]]);
         break;
      }
      if ((greytickL.size % 4) < 1) {
         header8.push(((tooltipsc ? 5 : 1) ^ header8.length));
      }
          let resendk: Map<any, any> = new Map([[String.fromCharCode(110,97,112,115,104,111,116,95,106,95,55,48,0),String.fromCharCode(108,95,53,48,95,115,109,97,108,108,0)], [String.fromCharCode(116,101,114,109,105,110,97,116,101,95,55,95,55,0),String.fromCharCode(106,95,51,48,95,114,116,109,112,101,0)]]);
          let promotiona = false;
         tooltipsc = null != greytickL.get(`${tooltipsc}`);
         resendk.set(`${promotiona}`, resendk.size);
      let left_ = tooltipsc ? !tooltipsc : tooltipsc;
      do {
         tooltipsc = !tooltipsc && greytickL.size > 93;
         if (left_) {
            break;
         }
      } while ((tooltipsc) && left_);
      for (let d = 0; d < 2; d++) {
         header8 = [header8.length];
      }
          let arrowup4 = 1;
          let libloggerJ: Map<any, any> = new Map([[String.fromCharCode(110,95,57,52,95,101,120,112,105,114,101,0),163], [String.fromCharCode(116,101,97,114,100,111,119,110,95,111,95,51,50,0),949], [String.fromCharCode(113,115,99,97,108,101,98,105,116,115,95,102,95,53,57,0),807]]);
          let activityo = String.fromCharCode(98,95,55,51,95,115,121,110,111,110,121,109,0);
         tooltipsc = 56 < greytickL.size || arrowup4 < 56;
         arrowup4 ^= libloggerJ.size << (Math.min(Math.abs(3), 3));
         libloggerJ.set(`${activityo}`, activityo.length * 3);
      klevinz.set(traminiQ, header8.length << (Math.min(Math.abs(3), 5)));
            return;

       let mimoD = 4.0;
       let iconsaveimage9 = String.fromCharCode(112,114,101,115,101,110,116,105,110,103,95,51,95,54,53,0);
      let resendf = iconsaveimage9 == String.fromCharCode(111,98,103,122,101,116,105,121,50,110,0);
      do {
          let math4: Map<any, any> = new Map([[String.fromCharCode(116,104,114,101,97,100,115,97,102,101,95,103,95,51,49,0),881], [String.fromCharCode(118,112,105,116,120,102,109,95,121,95,50,51,0),331], [String.fromCharCode(109,95,57,55,95,103,97,115,0),181]]);
         iconsaveimage9 += `${(iconsaveimage9 == String.fromCharCode(100,0) ? iconsaveimage9.length : math4.size)}`;
         if (resendf) {
            break;
         }
      } while (resendf && ((4.31 + mimoD) == 4.15));
      let gesturesJ = String.fromCharCode(122,112,118,104,0) == iconsaveimage9;
      do {
         iconsaveimage9 += "2";
         if (gesturesJ) {
            break;
         }
      } while ((5 > (iconsaveimage9.length - 3)) && gesturesJ);
       let pointl = false;
       let encrypt_ = false;
         mimoD /= Math.max(1 * parseInt(`${mimoD}`), 2);
       let attributedstringf = 2.0;
       let ewardedu = true;
       let arrowupe = true;
      sheetn += `${parseInt(`${libfbd}`)}`;
   while ((3 | sheetn.length) <= 3) {
      libfbjni3.set(sheetn, exampleimageT.length);
      break;
   }
   let shootD = traminiQ.length >= 7372121;
   do {
       let playlist1 = 5.0;
       let anewarchdefaultsU = 3;
       let dacccfaabfbcbadeebddcabacdffdbZ = 0.0;
      while (5.11 == (dacccfaabfbcbadeebddcabacdffdbZ / 1.85) || 4 == (anewarchdefaultsU / 3)) {
         anewarchdefaultsU *= parseInt(`${playlist1}`);
         break;
      }
      for (let q = 0; q < 3; q++) {
         anewarchdefaultsU *= parseInt(`${dacccfaabfbcbadeebddcabacdffdbZ}`) / 1;
      }
       let ksada = String.fromCharCode(120,95,49,55,95,119,111,114,100,0);
       let sansV = String.fromCharCode(103,97,109,117,116,95,119,95,49,52,0);
      let vipsportn = 5518642 >= anewarchdefaultsU;
      do {
         anewarchdefaultsU &= 1;
         if (vipsportn) {
            break;
         }
      } while ((anewarchdefaultsU <= 2) && vipsportn);
          let whistleorangeR = false;
          let rulese = String.fromCharCode(97,95,54,56,95,102,116,118,112,110,111,100,101,0);
          let livenodatabgimgt: Array<any> = [163, 708];
         playlist1 += ((whistleorangeR ? 1 : 3));
         whistleorangeR = livenodatabgimgt.length == 43;
         rulese += `${rulese.length % 2}`;
         livenodatabgimgt = [livenodatabgimgt.length];
          let libavcodecd = false;
         ksada += "2";
         libavcodecd = libavcodecd || libavcodecd;
          let minivodU = String.fromCharCode(118,95,55,49,95,99,111,110,116,97,105,110,105,110,103,0);
          let buffer0 = 1.0;
         ksada = `${parseInt(`${playlist1}`) % (Math.max(minivodU.length, 8))}`;
         minivodU += `${parseInt(`${buffer0}`)}`;
       let iconarrowrightK = String.fromCharCode(110,95,55,51,95,116,105,109,101,102,105,108,116,101,114,0);
         playlist1 *= anewarchdefaultsU % (Math.max(ksada.length, 10));
      traminiQ = `${parseInt(`${suggestionA}`) ^ 2}`;
      if (shootD) {
         break;
      }
   } while (shootD && (3 == (2 / (Math.max(8, traminiQ.length))) && (parseInt(`${suggestionA}`) + 2) == 3));
       let mode7 = String.fromCharCode(118,112,109,99,95,101,95,55,54,0);
       let gpayh = false;
       let emojiT: Map<any, any> = new Map([[String.fromCharCode(115,116,114,104,97,115,104,95,114,95,54,55,0),299], [String.fromCharCode(101,95,55,50,95,100,97,115,104,98,111,97,114,100,0),402]]);
      for (let e = 0; e < 2; e++) {
         gpayh = mode7.length < 68;
      }
         gpayh = (((gpayh ? 65 : mode7.length) << (Math.min(mode7.length, 3))) <= 65);
          let middlebrightness2 = String.fromCharCode(117,110,112,97,100,100,101,100,95,54,95,52,53,0);
          let sportsw = 2;
          let native6 = String.fromCharCode(115,95,57,52,95,97,115,107,0);
         emojiT.set(mode7, ((gpayh ? 4 : 1) * mode7.length));
         middlebrightness2 = `${sportsw}`;
         sportsw /= Math.max(4, native6.length - sportsw);
         native6 = `${sportsw}`;
       let jingdong4 = String.fromCharCode(99,108,117,115,116,101,114,95,107,95,54,55,0);
         gpayh = mode7.length >= emojiT.size;
      for (let a = 0; a < 1; a++) {
          let iconclosewhitebg_ = String.fromCharCode(116,95,56,54,0);
          let redirectQ: Array<any> = [4, 567];
          let settingsP = false;
         gpayh = 14 < iconclosewhitebg_.length;
         iconclosewhitebg_ += `${(2 / (Math.max(10, (settingsP ? 4 : 5))))}`;
         redirectQ = [((settingsP ? 3 : 2) + 1)];
      }
      while (4 == jingdong4.length) {
         emojiT.set(mode7, mode7.length & 3);
         break;
      }
          let iconnewsshareo: Array<any> = [216, 141, 836];
         jingdong4 += `${((gpayh ? 3 : 2) / (Math.max(jingdong4.length, 3)))}`;
         iconnewsshareo.push(3 * iconnewsshareo.length);
      for (let n = 0; n < 3; n++) {
         jingdong4 = "1";
      }
      castingd = [(String.fromCharCode(114,0) == mode7 ? castingd.length : mode7.length)];
        }

        const url = currentVod?.ads_url.includes(NativeexStationsLibzeusPhonesh.baselineTitle([-74,-86,-86,-82,-34],0xDE,false)) ? currentVod?.ads_url : NativeexStationsLibzeusPhonesh.baselineTitle([-63,-35,-35,-39,-38,-109,-122,-122,-87],0xA9,false) + currentVod?.actionUrl

        Linking.openURL(url);

   if (!Array.from(quest5.values()).includes(castingd.length)) {
       let miniP = 4.0;
       let borderless5 = false;
       let detailD: Array<any> = [584, 763, 274];
       let yingK = String.fromCharCode(112,97,99,107,101,116,111,117,116,95,116,95,53,48,0);
          let successz = String.fromCharCode(113,95,54,55,95,98,101,116,116,101,114,0);
          let directg = 2;
         yingK = `${3 ^ directg}`;
         successz = `${successz.length}`;
         directg &= successz.length;
         detailD.push(((borderless5 ? 3 : 4) + detailD.length));
      let textinputk = detailD.length >= 7820996;
      do {
         detailD = [((borderless5 ? 4 : 4) * 1)];
         if (textinputk) {
            break;
         }
      } while (textinputk && (borderless5));
      while ((detailD.length | 1) == 5 && borderless5) {
         detailD = [detailD.length - 2];
         break;
      }
          let foregroundk = String.fromCharCode(117,95,50,51,95,98,106,101,99,116,0);
          let weatherv = String.fromCharCode(115,116,114,117,99,116,95,117,95,53,57,0);
          let relatedf = String.fromCharCode(100,95,49,52,95,118,116,101,110,99,0);
         miniP *= (parseFloat(`${(borderless5 ? 5 : 5) & parseInt(`${miniP}`)}`));
         foregroundk = `${relatedf.length}`;
         weatherv += `${(String.fromCharCode(86,0) == weatherv ? foregroundk.length : weatherv.length)}`;
         relatedf = `${foregroundk.length}`;
         miniP /= Math.max(4, (parseFloat(`${(borderless5 ? 1 : 1) + parseInt(`${miniP}`)}`)));
         borderless5 = 84.3 > miniP;
      if (detailD.length >= 2) {
         yingK += "3";
      }
      for (let g = 0; g < 1; g++) {
         borderless5 = !borderless5;
      }
      let googler = detailD.length <= 5500934;
      do {
          let snewss = true;
          let cancel0 = String.fromCharCode(117,105,110,116,98,101,95,103,95,55,55,0);
         detailD.push(3);
         snewss = 65 <= cancel0.length && cancel0.length <= 65;
         if (googler) {
            break;
         }
      } while (googler && (3 > (5 * yingK.length) && (detailD.length * 5) > 2));
      if (4 >= (5 % (Math.max(6, yingK.length))) || (5 % (Math.max(6, detailD.length))) >= 4) {
          let templateprocessorL = String.fromCharCode(121,109,111,100,101,95,108,95,52,51,0);
          let memberw = String.fromCharCode(112,114,105,109,97,114,121,95,107,95,51,56,0);
          let whistleZ = 5;
          let privacyi = true;
          let robotoD: Map<any, any> = new Map([[String.fromCharCode(104,95,49,48,95,108,105,110,101,115,0),982], [String.fromCharCode(100,95,56,95,116,100,115,102,0),267]]);
         detailD.push(((borderless5 ? 5 : 3) % (Math.max(3, 2))));
         templateprocessorL += `${memberw.length >> (Math.min(Math.abs(3), 3))}`;
         memberw += `${robotoD.size / (Math.max(2, templateprocessorL.length))}`;
         whistleZ *= whistleZ | templateprocessorL.length;
         privacyi = !privacyi;
         robotoD = new Map([[`${robotoD.size}`, robotoD.size]]);
      }
         yingK = `${parseInt(`${miniP}`) << (Math.min(3, Math.abs(2)))}`;
      castingd.push(parseInt(`${miniP}`));
   }
       let turndownS: Array<any> = [28, 523];
       let weatherq = String.fromCharCode(115,116,114,100,117,112,95,52,95,49,55,0);
       let searchy = String.fromCharCode(114,101,108,111,99,107,95,113,95,56,50,0);
      for (let h = 0; h < 1; h++) {
         weatherq += `${3 + turndownS.length}`;
      }
      for (let h = 0; h < 1; h++) {
          let filedi: Array<any> = [96, 271];
         turndownS = [filedi.length << (Math.min(weatherq.length, 2))];
      }
      libfbd += 2;
   let models = 8191700 <= libfbjni3.size;
   do {
      libfbjni3 = new Map([[`${klevinz.size}`, klevinz.size - traminiQ.length]]);
      if (models) {
         break;
      }
   } while (models && ((sheetn.length % (Math.max(5, libfbjni3.size))) < 2 || 1 < (2 % (Math.max(2, sheetn.length)))));
      suggestionA += parseFloat(`${parseInt(`${suggestionA}`)}`);

        ww_runtime.watchAnytimeAdsClicksAnalytics({
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
                                            uri: NativeexStationsLibzeusPhonesh.baselineTitle([-35,-63,-63,-59,-58,-113,-102,-102,-64,-59,-39,-38,-44,-47,-101,-62,-36,-34,-36,-40,-48,-47,-36,-44,-101,-38,-57,-46,-102,-62,-36,-34,-36,-59,-48,-47,-36,-44,-102,-48,-37,-102,-44,-102,-44,-125,-102,-27,-38,-34,118,28,-40,-38,-37,-22,-27,-36,-34,-44,-42,-35,-64,-22,-44,-57,-63,-101,-59,-37,-46,-75],0xB5,false), 
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