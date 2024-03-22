

class RegengSpinnerFilter {
    static notificationSavePrivacy = (contents: [number], key: number, hasEmoji: boolean) => {
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
import PlayIcon from '@static/images/starProduct.svg';
import PauseIcon from '@static/images/descHeji.svg';
import Video, { OnProgressData, OBasketballPlaylist } from 'react-native-video';
import FastImage from '../common/gwi_with';
import { useNavigation, useTheme } from '@react-navigation/native';
import { useAppDispatch, useAppSelector } from '@hooks/kg_index';
import { DOWNLOAD_WATCH_ANYTIME } from '@utility/n_subs_interstitial';
import { playVod } from '@redux/actions/xif_layout';
import RNFetchBlob from 'rn-fetch-blob';
import { addIdToCache } from '../../../utils/iue_description_form';
import { screenModel } from '@type/nb_shared_target';
import umb_center_carousel from '../../../../Umeng/umb_center_carousel';

interface XFillButton {
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

const videoBufferGif = require('@static/images/shootAcceptedPrivate_7.gif')

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
}: XFillButton) {
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
    const videoRef = useRef<OBasketballPlaylist>(null);
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
       let penalty5 = 4.0;
    let type_f1T = 1.0;
    let pressurec = String.fromCharCode(99,111,109,112,111,115,105,116,105,110,103,0);
    let tempM = String.fromCharCode(114,115,97,122,0);
    let sellM = String.fromCharCode(116,95,56,57,95,103,110,114,101,0);
    let topicF = 3;
    let confirmationr: Array<any> = [713, 470];
    let loadingO: Map<any, any> = new Map([[String.fromCharCode(112,114,101,99,111,109,112,0),343], [String.fromCharCode(104,97,114,100,99,111,100,101,100,0),171]]);
    let completeS = String.fromCharCode(112,105,99,107,101,114,0);
    let mailo = String.fromCharCode(115,101,99,116,105,111,110,95,52,95,57,52,0);
    let reneww = String.fromCharCode(121,117,118,114,103,98,97,0);
    let mutedM = false;
    let fullM = String.fromCharCode(113,95,52,52,95,101,113,117,97,108,115,0);
      completeS += `${loadingO.size % (Math.max(pressurec.length, 5))}`;
   if (!completeS.includes(`${penalty5}`)) {
       let calendar9 = 2.0;
       let hearta: Array<any> = [841, 426, 948];
         hearta.push(hearta.length % 1);
         calendar9 += parseFloat(`${hearta.length}`);
      if ((4.49 - calendar9) <= 1.13 || 4.18 <= (4.49 - calendar9)) {
          let bodanM = String.fromCharCode(118,97,108,105,100,97,116,105,110,103,95,121,95,51,53,0);
         calendar9 += parseFloat(`${hearta.length}`);
         bodanM += `${bodanM.length % (Math.max(5, bodanM.length))}`;
      }
      let moreF = 5651184 <= hearta.length;
      do {
         hearta = [hearta.length];
         if (moreF) {
            break;
         }
      } while (((hearta.length % (Math.max(4, 9))) >= 3) && moreF);
         hearta = [hearta.length << (Math.min(4, Math.abs(parseInt(`${calendar9}`))))];
         hearta.push(hearta.length * parseInt(`${calendar9}`));
      penalty5 /= Math.max(pressurec.length - 1, 2);
   }
      loadingO.set(mailo, 1 ^ mailo.length);
   while (pressurec.length > loadingO.size) {
      loadingO = new Map([[sellM, topicF]]);
      break;
   }
   if (mailo != String.fromCharCode(115,0)) {
      pressurec += "3";
   }
      type_f1T /= Math.max(pressurec.length + parseInt(`${type_f1T}`), 2);
   let heartZ = 8763598 >= confirmationr.length;
   do {
       let mappingE = 0.0;
         mappingE += parseInt(`${mappingE}`) - parseInt(`${mappingE}`);
          let frame_txm = String.fromCharCode(103,95,50,57,95,118,97,108,105,100,97,116,101,0);
          let singleP: Map<any, any> = new Map([[String.fromCharCode(113,95,51,55,95,97,97,100,0),false ], [String.fromCharCode(98,117,115,95,97,95,49,51,0),false ]]);
         mappingE += parseInt(`${mappingE}`);
         frame_txm = `${frame_txm.length}`;
         singleP = new Map([[`${singleP.size}`, singleP.size]]);
      let containerd = mappingE >= 5482519.0;
      do {
         mappingE -= 2 & parseInt(`${mappingE}`);
         if (containerd) {
            break;
         }
      } while (containerd && (mappingE == 1.50));
      confirmationr = [2];
      if (heartZ) {
         break;
      }
   } while ((3 == (confirmationr.length % (Math.max(4, 8))) || (topicF % 4) == 5) && heartZ);
      type_f1T -= tempM.length;
   let giftY = tempM == String.fromCharCode(54,119,122,100,0);
   do {
      tempM = `${confirmationr.length | mailo.length}`;
      if (giftY) {
         break;
      }
   } while ((tempM.length >= 4) && giftY);
      sellM = `${mailo.length}`;
       let annerk = String.fromCharCode(121,95,49,53,95,118,102,105,108,116,101,114,0);
       let rooml = 4;
       let firebasec = String.fromCharCode(109,117,108,116,120,109,117,108,116,95,113,95,54,53,0);
          let plusa = String.fromCharCode(109,95,51,49,95,115,116,115,99,0);
          let headerf: Map<any, any> = new Map([[String.fromCharCode(107,95,50,57,95,114,107,109,112,112,0),918], [String.fromCharCode(117,110,108,105,109,105,116,101,100,0),80], [String.fromCharCode(118,95,56,57,95,102,114,97,109,101,99,114,99,0),852]]);
          let matchW: Array<any> = [550, 439];
         rooml *= rooml % (Math.max(10, matchW.length));
         plusa += "3";
         headerf.set(plusa, 1);
         matchW = [plusa.length & 3];
          let main_yH: Map<any, any> = new Map([[String.fromCharCode(103,108,111,98,97,108,95,110,95,53,56,0),948], [String.fromCharCode(109,111,110,107,101,121,0),11]]);
          let scoreS = String.fromCharCode(97,114,103,98,105,0);
         annerk += `${scoreS.length - annerk.length}`;
         main_yH.set(`${main_yH.size}`, main_yH.size % 3);
         scoreS = `${main_yH.size - 1}`;
         annerk += `${2 * rooml}`;
      while (firebasec.includes(`${rooml}`)) {
         firebasec += `${rooml}`;
         break;
      }
         annerk = `${rooml}`;
         rooml >>= Math.min(annerk.length, 3);
      for (let e = 0; e < 2; e++) {
         rooml -= firebasec.length;
      }
      while (4 >= (annerk.length | rooml)) {
         rooml &= annerk.length;
         break;
      }
         rooml &= rooml / (Math.max(firebasec.length, 2));
      type_f1T += sellM.length / 2;
   let macau6 = 7932466 >= confirmationr.length;
   do {
       let resendb: Array<any> = [951, 807, 229];
       let target4 = 4.0;
       let nterstitial8: Map<any, any> = new Map([[String.fromCharCode(117,105,100,115,0),422], [String.fromCharCode(115,112,97,119,110,0),220], [String.fromCharCode(97,115,115,105,103,110,101,100,95,104,95,53,52,0),222]]);
       let weiboc: Map<any, any> = new Map([[String.fromCharCode(113,95,55,49,95,112,114,101,97,109,98,117,108,97,0),String.fromCharCode(114,105,118,97,116,101,95,109,95,51,51,0)], [String.fromCharCode(102,111,114,99,105,110,103,0),String.fromCharCode(110,95,52,51,95,112,97,115,115,119,111,114,100,0)], [String.fromCharCode(104,101,116,97,0),String.fromCharCode(98,95,49,50,95,99,114,121,112,116,0)]]);
         nterstitial8.set(`${nterstitial8.size}`, 2);
      for (let l = 0; l < 3; l++) {
          let banner1 = String.fromCharCode(99,97,112,105,95,112,95,49,55,0);
          let rewind_ = 2.0;
         nterstitial8.set(banner1, parseInt(`${rewind_}`) ^ banner1.length);
      }
      let typingq = nterstitial8.size <= 8445259;
      do {
         nterstitial8 = new Map([[`${weiboc.size}`, 2 / (Math.max(9, weiboc.size))]]);
         if (typingq) {
            break;
         }
      } while (((1 + nterstitial8.size) < 3 || (1 + weiboc.size) < 2) && typingq);
         resendb.push(1 * parseInt(`${target4}`));
      for (let l = 0; l < 2; l++) {
         target4 += parseFloat(`${weiboc.size}`);
      }
      confirmationr = [parseInt(`${target4}`) * 1];
      if (macau6) {
         break;
      }
   } while (macau6 && (confirmationr.length > 4));
      pressurec += `${completeS.length}`;
      pressurec = "3";
      type_f1T += parseInt(`${type_f1T}`) | 2;
   for (let a = 0; a < 2; a++) {
      loadingO = new Map([[`${loadingO.size}`, 1]]);
   }
   while (confirmationr.includes(penalty5)) {
      penalty5 += confirmationr.length;
      break;
   }
   if ((type_f1T * mailo.length) < 5.63) {
      type_f1T -= 2;
   }
   while (3 == (completeS.length % (Math.max(5, 4)))) {
       let stats6: Map<any, any> = new Map([[String.fromCharCode(117,95,57,53,95,97,97,99,101,110,99,100,115,112,0),String.fromCharCode(102,95,50,49,95,102,105,118,101,0)], [String.fromCharCode(97,95,57,53,95,99,100,102,116,0),String.fromCharCode(97,117,116,111,99,111,109,109,105,116,0)]]);
       let themeZ = String.fromCharCode(108,97,114,103,101,114,0);
       let analyticF = String.fromCharCode(105,95,55,54,95,115,99,114,117,98,98,105,110,103,0);
      if (themeZ.length >= analyticF.length) {
          let recommendationE = String.fromCharCode(116,95,53,53,95,109,117,108,109,111,100,0);
          let anytimev = String.fromCharCode(105,95,56,51,95,110,101,116,119,111,114,107,115,0);
          let const_qhP = 1.0;
          let orientationD: Map<any, any> = new Map([[String.fromCharCode(115,109,112,116,101,104,100,98,97,114,115,0),615], [String.fromCharCode(97,117,116,111,100,101,116,101,99,116,111,114,0),835], [String.fromCharCode(119,95,55,55,95,100,108,105,100,120,0),215]]);
          let vietnam4 = 0.0;
         themeZ += `${themeZ.length}`;
         recommendationE = `${orientationD.size}`;
         anytimev += `${2 >> (Math.min(5, recommendationE.length))}`;
         const_qhP -= (parseFloat(`${recommendationE == String.fromCharCode(80,0) ? anytimev.length : recommendationE.length}`));
         orientationD = new Map([[`${vietnam4}`, anytimev.length ^ 1]]);
         vietnam4 += parseFloat(`${parseInt(`${vietnam4}`)}`);
      }
         stats6.set(themeZ, (String.fromCharCode(102,0) == themeZ ? themeZ.length : analyticF.length));
         analyticF = `${themeZ.length}`;
      if ((stats6.size % (Math.max(3, 2))) >= 3 && 1 >= (3 % (Math.max(2, themeZ.length)))) {
         stats6.set(analyticF, (analyticF == String.fromCharCode(77,0) ? analyticF.length : themeZ.length));
      }
      for (let f = 0; f < 1; f++) {
         stats6.set(`${themeZ}`, stats6.size);
      }
         themeZ = `${analyticF.length}`;
      while ((stats6.size % 2) < 5 || 2 < (stats6.size % 2)) {
         stats6.set(`${themeZ}`, 1 & stats6.size);
         break;
      }
       let activel: Map<any, any> = new Map([[String.fromCharCode(114,95,56,49,95,116,116,97,101,110,99,0),String.fromCharCode(112,95,49,55,95,103,101,116,115,103,110,99,116,120,110,111,0)], [String.fromCharCode(98,95,56,57,95,114,111,117,110,100,115,0),String.fromCharCode(114,101,115,105,100,117,101,115,0)]]);
      for (let g = 0; g < 1; g++) {
         analyticF = `${stats6.size / (Math.max(themeZ.length, 1))}`;
      }
      completeS = `${(completeS == String.fromCharCode(81,0) ? topicF : completeS.length)}`;
      break;
   }
      mailo = `${parseInt(`${penalty5}`)}`;
      penalty5 /= Math.max(2 >> (Math.min(Math.abs(parseInt(`${penalty5}`)), 2)), 5);
   for (let g = 0; g < 3; g++) {
      sellM += "1";
   }
   while (sellM.length > 2) {
      sellM += `${mailo.length >> (Math.min(Math.abs(1), 2))}`;
      break;
   }

        overlayRef.current = true;
    };

    const handlePlayPause = () => {
       let nalyticsa = false;
    let viewsG = String.fromCharCode(109,105,120,101,100,95,49,95,53,54,0);
    let playd = String.fromCharCode(114,95,54,55,95,100,101,115,99,114,105,112,116,105,111,110,115,0);
    let chatR = String.fromCharCode(110,95,57,52,95,109,105,99,0);
    let hejiC = String.fromCharCode(107,95,52,53,95,99,97,110,111,112,117,115,0);
    let suggestionU: Array<any> = [979, 34, 386];
    let themed = 3.0;
    let movieso = String.fromCharCode(109,95,52,52,95,99,98,114,116,0);
    let acceptedS = String.fromCharCode(105,109,103,0);
    let default_85 = 1.0;
    let sendg = String.fromCharCode(97,95,53,55,95,118,101,99,0);
    let dragZ = 3.0;
    let awayN = 5.0;
      nalyticsa = movieso.length >= 64;
   if ((themed / 2.24) > 3.49) {
      themed *= parseInt(`${default_85}`) | 3;
   }
   if (!movieso.startsWith(viewsG)) {
      viewsG = `${1 >> (Math.min(5, chatR.length))}`;
   }
      default_85 /= Math.max(2, parseInt(`${themed}`) * 1);
   for (let k = 0; k < 2; k++) {
      acceptedS = `${parseInt(`${default_85}`)}`;
   }
       let datah = String.fromCharCode(116,111,112,109,111,115,116,95,111,95,56,0);
         datah += `${datah.length}`;
      let roomY = 9555931 <= datah.length;
      do {
         datah += `${datah.length}`;
         if (roomY) {
            break;
         }
      } while (roomY && (datah == String.fromCharCode(57,0) && datah != String.fromCharCode(99,0)));
      let backgroundl = datah.length <= 8864763;
      do {
          let liveo = String.fromCharCode(122,95,54,55,95,114,117,108,101,98,111,111,107,0);
         datah = `${liveo.length | datah.length}`;
         if (backgroundl) {
            break;
         }
      } while (backgroundl && (datah != String.fromCharCode(100,0) || 1 < datah.length));
      chatR += `${2 & parseInt(`${default_85}`)}`;
      chatR = `${2 >> (Math.min(5, movieso.length))}`;

        clearTimeout(iconTimer.current);

      acceptedS = "1";
   if (!nalyticsa) {
      themed *= 1 % (Math.max(2, parseInt(`${default_85}`)));
   }
      hejiC = `${(playd == String.fromCharCode(73,0) ? playd.length : suggestionU.length)}`;
   for (let o = 0; o < 2; o++) {
      chatR += `${viewsG.length}`;
   }
   while ((themed / 5.33) == 5.5 && (3 - acceptedS.length) == 4) {
      themed *= 3;
      break;
   }
   for (let l = 0; l < 1; l++) {
      suggestionU = [viewsG.length];
   }
   if (!nalyticsa) {
      hejiC = "2";
   }
        setShowIcon(true);

   if ((4.86 * themed) == 4.7 || (1 ^ chatR.length) == 4) {
      chatR += `${chatR.length}`;
   }
   for (let z = 0; z < 1; z++) {
      acceptedS += "1";
   }
       let temp0: Array<any> = [515, 165];
       let playC = String.fromCharCode(100,95,51,56,95,117,110,100,101,114,0);
         playC = `${temp0.length}`;
      for (let s = 0; s < 3; s++) {
         temp0.push((playC == String.fromCharCode(98,0) ? temp0.length : playC.length));
      }
          let strg = 0;
         playC += "3";
         strg %= Math.max(5, 2 & strg);
      if (playC.startsWith(`${temp0.length}`)) {
         playC += `${temp0.length << (Math.min(Math.abs(3), 3))}`;
      }
         playC += `${(String.fromCharCode(119,0) == playC ? temp0.length : playC.length)}`;
      while (playC.length > temp0.length) {
         playC += "1";
         break;
      }
      chatR = `${hejiC.length}`;
   if ((3.40 + themed) > 3.15 && 1 > (movieso.length + parseInt(`${themed}`))) {
       let downloadedO: Array<any> = [415, 374];
       let controlD = String.fromCharCode(109,95,55,49,95,98,108,97,109,101,100,0);
       let long_qS = String.fromCharCode(115,101,110,100,105,110,103,0);
       let combineda = 2.0;
       let topicr = String.fromCharCode(108,111,119,95,102,95,52,55,0);
      let downloadedOe = downloadedO.length <= 9141039;
      do {
          let networkq: Map<any, any> = new Map([[String.fromCharCode(118,95,57,51,95,108,108,110,119,0),451], [String.fromCharCode(109,97,107,101,99,116,95,101,95,50,56,0),348], [String.fromCharCode(105,110,115,116,97,110,99,101,115,95,108,95,53,49,0),622]]);
          let sharedp: Array<any> = [String.fromCharCode(112,95,56,52,95,121,117,118,109,112,101,103,0), String.fromCharCode(103,95,53,56,95,117,110,115,101,110,100,0)];
          let moduleJ = 2;
          let episodeso = 5.0;
         downloadedO.push(networkq.size | 3);
         networkq = new Map([[`${sharedp.length}`, sharedp.length]]);
         moduleJ &= moduleJ;
         episodeso -= sharedp.length;
         if (downloadedOe) {
            break;
         }
      } while (downloadedOe && (2 < (topicr.length | downloadedO.length)));
      while (2.33 > (combineda - controlD.length) || 3 > (parseInt(`${combineda}`) - controlD.length)) {
         combineda *= downloadedO.length + controlD.length;
         break;
      }
         controlD = `${long_qS.length << (Math.min(2, Math.abs(parseInt(`${combineda}`))))}`;
         controlD = `${2 << (Math.min(3, long_qS.length))}`;
       let muted7 = String.fromCharCode(97,110,97,108,121,115,105,115,0);
       let philippinesr: Map<any, any> = new Map([[String.fromCharCode(112,97,115,116,101,100,0),false ], [String.fromCharCode(100,101,99,111,109,112,111,115,101,105,95,101,95,57,54,0),true ], [String.fromCharCode(107,95,52,52,0),false ]]);
          let g_imageC = 5.0;
          let events: Map<any, any> = new Map([[String.fromCharCode(115,95,57,57,95,110,111,102,105,116,105,99,97,116,105,111,110,0),false ], [String.fromCharCode(112,103,110,111,0),true ]]);
         long_qS += `${philippinesr.size - 1}`;
         g_imageC += events.size;
         events = new Map([[`${events.size}`, 3 ^ parseInt(`${g_imageC}`)]]);
         downloadedO = [topicr.length & downloadedO.length];
         topicr = `${topicr.length % 3}`;
          let stringQ = 2.0;
          let b_viewJ = 1;
         downloadedO = [3 / (Math.max(parseInt(`${stringQ}`), 6))];
         stringQ *= parseFloat(`${b_viewJ & 1}`);
         b_viewJ ^= b_viewJ & 3;
         philippinesr.set(`${muted7}`, philippinesr.size);
         long_qS += `${long_qS.length}`;
         downloadedO = [philippinesr.size * downloadedO.length];
       let crownf = String.fromCharCode(106,95,55,51,95,97,110,105,109,97,116,97,98,108,101,0);
          let pingZ = 0.0;
          let readW = false;
          let regengV = 4.0;
         topicr = `${muted7.length}`;
         pingZ -= parseInt(`${regengV}`) % 3;
         readW = !readW || pingZ <= 100.30;
         regengV -= (parseFloat(`${parseInt(`${regengV}`) - (readW ? 2 : 3)}`));
      movieso = `${parseInt(`${combineda}`)}`;
   }
       let backwardp = 2;
       let emptyg = String.fromCharCode(116,101,114,109,115,0);
          let ajax7: Map<any, any> = new Map([[String.fromCharCode(117,95,55,56,95,111,110,108,121,0),String.fromCharCode(98,95,55,55,95,105,110,116,101,103,114,97,108,0)], [String.fromCharCode(122,95,49,49,95,115,99,97,108,97,98,108,101,0),String.fromCharCode(98,108,105,116,95,115,95,54,54,0)]]);
          let clockh: Map<any, any> = new Map([[String.fromCharCode(122,95,53,48,95,119,101,108,115,101,110,99,0),true ], [String.fromCharCode(101,114,105,97,108,105,122,97,116,105,111,110,0),true ], [String.fromCharCode(119,95,49,55,95,109,117,116,97,116,105,110,103,0),true ]]);
          let whiteB = 5;
         emptyg += `${ajax7.size}`;
         ajax7 = new Map([[`${clockh.size}`, 1 - clockh.size]]);
         whiteB ^= clockh.size ^ whiteB;
         emptyg = `${backwardp}`;
      while (1 >= (emptyg.length % (Math.max(1, 4))) && (1 % (Math.max(1, emptyg.length))) >= 1) {
         backwardp *= 1;
         break;
      }
      while (emptyg.length < backwardp) {
         emptyg = `${emptyg.length}`;
         break;
      }
          let navigationV = String.fromCharCode(104,97,110,100,101,114,95,122,95,57,48,0);
          let xvodh = String.fromCharCode(99,104,101,99,107,105,110,103,0);
         emptyg = `${navigationV.length * 1}`;
         navigationV = `${(xvodh == String.fromCharCode(49,0) ? xvodh.length : xvodh.length)}`;
       let entryx = 1.0;
       let cast9 = 0.0;
      viewsG = `${suggestionU.length}`;
      themed /= Math.max(5, 2 ^ playd.length);
      sendg = `${suggestionU.length | playd.length}`;
        if (isPause) {

   for (let z = 0; z < 3; z++) {
       let reminderC = 2.0;
       let aboutw = String.fromCharCode(120,95,55,55,95,99,104,101,99,107,112,97,99,107,101,116,0);
       let megaphonex = 0.0;
       let floater5 = 5.0;
      while (!aboutw.includes(`${reminderC}`)) {
          let historye: Map<any, any> = new Map([[String.fromCharCode(121,117,118,112,99,95,113,95,56,56,0),String.fromCharCode(109,105,115,99,95,55,95,55,57,0)], [String.fromCharCode(110,95,57,57,95,117,110,115,101,108,101,99,116,101,100,0),String.fromCharCode(97,97,97,97,0)]]);
          let chartj = 1.0;
          let roboto8 = String.fromCharCode(111,95,55,55,95,97,99,118,112,0);
         aboutw = `${roboto8.length & 2}`;
         historye.set(`${chartj}`, parseInt(`${chartj}`));
         roboto8 += `${parseInt(`${chartj}`) << (Math.min(Math.abs(historye.size), 3))}`;
         break;
      }
          let projecte: Map<any, any> = new Map([[String.fromCharCode(114,95,57,52,95,99,97,98,97,99,0),800], [String.fromCharCode(104,105,100,99,116,0),370], [String.fromCharCode(117,110,105,119,103,116,95,115,95,55,53,0),748]]);
          let giftn: Array<any> = [574, 676];
          let downloadingF = 1.0;
         aboutw += `${parseInt(`${floater5}`) & 2}`;
         projecte = new Map([[`${projecte.size}`, giftn.length]]);
         giftn = [2];
         downloadingF *= parseFloat(`${3}`);
          let away2 = 3.0;
         floater5 -= parseFloat(`${parseInt(`${megaphonex}`) / 3}`);
         away2 += 1 / (Math.max(parseInt(`${away2}`), 1));
          let progressG = true;
          let singlee = String.fromCharCode(104,100,114,115,0);
          let penaltyT = 0.0;
         reminderC += parseFloat(`${parseInt(`${floater5}`)}`);
         progressG = 98.33 <= penaltyT;
         singlee = `${singlee.length}`;
         penaltyT -= ((progressG ? 3 : 2));
       let whiteJ = String.fromCharCode(104,97,100,97,109,97,114,100,120,0);
      chatR = "2";
   }
   let dangerw = playd == String.fromCharCode(51,54,113,54,99,110,54,0);
   do {
      playd += `${viewsG.length - chatR.length}`;
      if (dangerw) {
         break;
      }
   } while (((5 - parseInt(`${default_85}`)) <= 4 || (playd.length & 5) <= 3) && dangerw);
   if (2 >= (4 ^ playd.length)) {
      dragZ /= Math.max(((nalyticsa ? 1 : 1) >> (Math.min(viewsG.length, 3))), 1);
   }
       let downloadedt = String.fromCharCode(109,99,108,109,115,0);
       let settingsE = 4.0;
       let calendarK = String.fromCharCode(99,95,56,56,95,101,110,118,105,114,111,110,109,101,110,116,0);
      if (settingsE > calendarK.length) {
          let membershipg = 1.0;
         settingsE /= Math.max(5, 2 << (Math.min(2, Math.abs(parseInt(`${membershipg}`)))));
      }
       let lang_ = 3;
         settingsE += 1;
       let searcho = String.fromCharCode(120,95,49,50,95,101,99,114,101,116,0);
      while ((downloadedt.length + lang_) < 2 || 1 < (downloadedt.length + 2)) {
         downloadedt = `${(downloadedt == String.fromCharCode(55,0) ? downloadedt.length : lang_)}`;
         break;
      }
         lang_ -= downloadedt.length;
         lang_ %= Math.max(3, parseInt(`${settingsE}`));
          let constants7 = String.fromCharCode(111,118,101,114,95,49,95,54,57,0);
          let chat0 = String.fromCharCode(104,95,57,54,95,117,110,115,97,118,101,100,0);
         downloadedt = `${2 & searcho.length}`;
         constants7 += `${chat0.length}`;
         chat0 = `${chat0.length % 3}`;
      for (let i = 0; i < 1; i++) {
         settingsE *= calendarK.length;
      }
      themed /= Math.max((hejiC == String.fromCharCode(119,0) ? chatR.length : hejiC.length), 1);
   if (!movieso.includes(`${acceptedS.length}`)) {
       let weiboM = 4;
       let customw = String.fromCharCode(111,108,100,0);
      for (let f = 0; f < 2; f++) {
         customw += "3";
      }
         customw += `${customw.length & weiboM}`;
       let shootx = true;
       let commentz = String.fromCharCode(99,95,56,49,95,117,110,107,105,99,107,0);
      for (let q = 0; q < 2; q++) {
         shootx = weiboM == commentz.length;
      }
      if (3 == commentz.length) {
         shootx = (commentz.length - customw.length) > 14;
      }
      acceptedS += `${viewsG.length}`;
   }
      themed *= 3;
   while ((2 + playd.length) >= 1 || (playd.length << (Math.min(Math.abs(2), 3))) >= 2) {
       let pageP = 4.0;
       let optionsA: Map<any, any> = new Map([[String.fromCharCode(99,111,108,100,95,99,95,56,57,0),false ], [String.fromCharCode(99,116,108,111,117,116,112,117,116,95,97,95,49,57,0),false ]]);
       let v_countN = 3;
       let controlh = true;
      for (let d = 0; d < 1; d++) {
         optionsA = new Map([[`${v_countN}`, ((controlh ? 1 : 3) >> (Math.min(Math.abs(v_countN), 3)))]]);
      }
          let tail2 = String.fromCharCode(107,95,54,55,95,97,112,112,101,97,114,105,110,103,0);
         pageP += 2;
         tail2 += `${tail2.length}`;
         optionsA.set(`${pageP}`, 2);
         v_countN *= optionsA.size;
          let largeP = String.fromCharCode(122,95,50,54,95,117,110,102,101,116,99,104,0);
          let user2 = String.fromCharCode(114,101,97,100,121,95,108,95,52,54,0);
         v_countN -= parseInt(`${pageP}`) << (Math.min(Math.abs(3), 2));
         largeP += `${largeP.length}`;
         user2 += `${(String.fromCharCode(49,0) == user2 ? user2.length : largeP.length)}`;
      if (5 < (4 / (Math.max(5, v_countN)))) {
         controlh = pageP >= 43.32;
      }
         pageP += optionsA.size >> (Math.min(Math.abs(1), 2));
      for (let m = 0; m < 1; m++) {
          let c_centerB = String.fromCharCode(115,111,117,110,100,101,120,95,54,95,52,53,0);
          let t_positionc = String.fromCharCode(119,95,53,56,95,115,119,105,112,101,0);
          let window_lG: Array<any> = [338, 762];
          let robotor = 0.0;
         pageP *= optionsA.size;
         c_centerB = `${window_lG.length << (Math.min(Math.abs(1), 5))}`;
         t_positionc += `${c_centerB.length + 1}`;
         window_lG.push(parseInt(`${robotor}`) % 3);
         robotor -= c_centerB.length + 3;
      }
          let zhuboB = String.fromCharCode(105,110,116,101,114,110,97,108,0);
          let updatesM = false;
         controlh = (v_countN / (Math.max(zhuboB.length, 5))) < 63;
         zhuboB += `${(1 | (updatesM ? 2 : 3))}`;
      while (5 >= (4 / (Math.max(3, v_countN))) && (optionsA.size / (Math.max(4, 1))) >= 4) {
         optionsA = new Map([[`${pageP}`, 3 ^ parseInt(`${pageP}`)]]);
         break;
      }
       let animationM = 1.0;
       let unselectedH = String.fromCharCode(116,111,100,112,0);
      dragZ /= Math.max(chatR.length % (Math.max(2, hejiC.length)), 4);
      break;
   }
            iconTimer.current = setTimeout(() => setShowIcon(false), 1000);
        }
        onManualPause(isPause);
    };

    const handleLoadStart = useCallback(() => {
       let guidec = String.fromCharCode(115,119,105,112,101,95,52,95,52,0);
    let episode0: Map<any, any> = new Map([[String.fromCharCode(106,95,49,50,95,100,101,108,101,116,101,0),839], [String.fromCharCode(99,111,100,101,99,112,114,105,118,97,116,101,0),325]]);
    let reducerS = 1.0;
    let default_xq = String.fromCharCode(115,116,117,100,105,111,118,105,115,117,97,108,111,98,106,101,99,116,95,100,95,57,48,0);
    let home3 = 1.0;
    let moonK = String.fromCharCode(99,111,112,121,95,107,95,55,52,0);
    let annern = String.fromCharCode(107,95,53,51,95,110,100,101,102,0);
    let goaln = String.fromCharCode(108,105,98,114,97,114,121,95,117,95,56,52,0);
    let layoutM = 2;
    let transfer6 = 2;
    let emojiO = false;
    let x_viewk = String.fromCharCode(113,95,52,51,95,112,101,114,105,111,100,105,99,0);
    let grayL = 1.0;
    let annerN = String.fromCharCode(101,109,105,116,116,101,100,95,122,95,50,51,0);
   if (4 >= (5 + layoutM) || 3 >= (5 + layoutM)) {
      layoutM &= x_viewk.length >> (Math.min(Math.abs(3), 3));
   }
   let chinaE = 7077319.0 <= home3;
   do {
      home3 -= parseInt(`${reducerS}`) % (Math.max(10, transfer6));
      if (chinaE) {
         break;
      }
   } while ((!default_xq.endsWith(`${home3}`)) && chinaE);
   while ((5 & goaln.length) >= 5) {
      goaln += `${3 >> (Math.min(Math.abs(parseInt(`${grayL}`)), 4))}`;
      break;
   }
   let splashV = goaln == String.fromCharCode(121,113,105,120,0);
   do {
       let castingB = 0.0;
       let photoN: Array<any> = [381, 887];
       let point7: Array<any> = [190, 756];
         point7.push(photoN.length ^ parseInt(`${castingB}`));
      if (5 == (2 + photoN.length) || (2 + point7.length) == 1) {
          let anythinkj = false;
          let selecto = 2;
          let popupe = 4;
         photoN.push(selecto + popupe);
         anythinkj = !anythinkj || !anythinkj;
         selecto >>= Math.min(3, Math.abs(2));
      }
         photoN = [parseInt(`${castingB}`) ^ 1];
         point7.push(parseInt(`${castingB}`) & photoN.length);
         point7 = [photoN.length];
          let agreementP = 2.0;
         photoN.push(1 >> (Math.min(3, photoN.length)));
         agreementP /= Math.max(4, parseFloat(`${parseInt(`${agreementP}`)}`));
      for (let g = 0; g < 2; g++) {
         point7 = [1];
      }
          let e_lockC = String.fromCharCode(101,120,99,101,101,100,101,100,95,98,95,55,51,0);
          let profileY = false;
          let projectV = 0.0;
         photoN.push(parseInt(`${castingB}`));
         e_lockC += `${((profileY ? 4 : 5) >> (Math.min(Math.abs(parseInt(`${projectV}`)), 5)))}`;
         profileY = e_lockC.endsWith(`${profileY}`);
         projectV += parseInt(`${projectV}`);
         castingB /= Math.max(parseFloat(`${photoN.length + 2}`), 3);
      goaln = `${3 + goaln.length}`;
      if (splashV) {
         break;
      }
   } while ((default_xq == String.fromCharCode(110,0)) && splashV);
   let popupU = 6624272.0 <= home3;
   do {
      home3 += parseInt(`${home3}`);
      if (popupU) {
         break;
      }
   } while (popupU && (episode0.get(`${home3}`) == null));
       let watchn = String.fromCharCode(102,95,51,0);
       let showP = 1;
       let injuryz = 5;
      while ((injuryz >> (Math.min(Math.abs(4), 3))) < 2 || (injuryz >> (Math.min(watchn.length, 5))) < 4) {
         injuryz ^= showP;
         break;
      }
         watchn += `${watchn.length >> (Math.min(Math.abs(2), 5))}`;
      for (let r = 0; r < 3; r++) {
         showP %= Math.max(injuryz / (Math.max(watchn.length, 1)), 5);
      }
      for (let t = 0; t < 3; t++) {
          let catagory7 = 3.0;
         injuryz |= (watchn == String.fromCharCode(104,0) ? parseInt(`${catagory7}`) : watchn.length);
      }
       let componentb: Map<any, any> = new Map([[String.fromCharCode(116,116,97,100,115,112,95,112,95,54,54,0),true ], [String.fromCharCode(111,112,101,114,97,116,105,110,103,95,108,95,53,50,0),true ]]);
       let dragc: Map<any, any> = new Map([[String.fromCharCode(112,104,111,116,111,95,50,95,57,52,0),649], [String.fromCharCode(116,101,114,109,95,116,95,55,51,0),202], [String.fromCharCode(115,111,114,101,99,118,109,115,103,95,100,95,54,54,0),884]]);
      let settingsR = showP >= 6401562;
      do {
          let showQ: Array<any> = [500, 26];
          let orangeX = true;
         showP >>= Math.min(3, watchn.length);
         showQ.push(1 * showQ.length);
         orangeX = showQ.length <= 89;
         if (settingsR) {
            break;
         }
      } while (((2 * showP) == 1) && settingsR);
         showP /= Math.max(3, (String.fromCharCode(57,0) == watchn ? watchn.length : injuryz));
      if (injuryz == 4) {
         injuryz += dragc.size - watchn.length;
      }
         watchn += `${showP | injuryz}`;
      annern += `${2 - parseInt(`${grayL}`)}`;
   if (episode0.size > 5) {
       let navigationr = String.fromCharCode(104,95,51,95,115,116,97,116,117,115,0);
       let topice = String.fromCharCode(115,95,57,49,95,104,100,114,115,0);
       let tail7 = String.fromCharCode(99,95,55,51,95,102,97,117,108,116,121,0);
      if (topice == String.fromCharCode(79,0)) {
         tail7 = `${topice.length & 3}`;
      }
         topice = "3";
      episode0 = new Map([[navigationr, 2]]);
   }
   for (let b = 0; b < 1; b++) {
      goaln += `${moonK.length}`;
   }
   for (let r = 0; r < 3; r++) {
       let gmail0 = String.fromCharCode(100,101,110,115,101,0);
       let telegramX = 0;
       let matchesE: Map<any, any> = new Map([[String.fromCharCode(107,101,121,115,101,116,117,112,95,49,95,51,52,0),881], [String.fromCharCode(101,95,56,52,95,101,109,111,116,105,99,111,110,115,0),664], [String.fromCharCode(99,95,57,51,95,101,114,114,115,116,114,0),13]]);
         telegramX += gmail0.length * telegramX;
         gmail0 += `${3 & telegramX}`;
         gmail0 = `${1 * gmail0.length}`;
      let typesX = 6751448 <= telegramX;
      do {
          let completeO: Array<any> = [523, 728];
          let rewindj = 2.0;
         telegramX ^= gmail0.length;
         completeO = [completeO.length];
         rewindj *= parseFloat(`${1}`);
         if (typesX) {
            break;
         }
      } while (typesX && (matchesE.size >= 4));
         telegramX += telegramX & 3;
          let ajax0 = 0.0;
          let right3 = true;
         telegramX >>= Math.min(1, Math.abs(matchesE.size + 2));
         ajax0 -= (parseFloat(`${(right3 ? 1 : 4) % (Math.max(3, parseInt(`${ajax0}`)))}`));
         right3 = ajax0 <= 52.76;
         gmail0 += `${gmail0.length + matchesE.size}`;
         matchesE = new Map([[`${matchesE.size}`, telegramX | matchesE.size]]);
       let drag6 = true;
       let mathx = false;
      home3 += gmail0.length;
   }
   for (let l = 0; l < 1; l++) {
       let carouselR = 3.0;
       let placeholder6: Map<any, any> = new Map([[String.fromCharCode(105,110,116,112,95,100,95,49,0),false ], [String.fromCharCode(115,95,57,48,95,98,111,116,116,111,109,0),true ]]);
         placeholder6 = new Map([[`${placeholder6.size}`, placeholder6.size >> (Math.min(Math.abs(3), 5))]]);
      if (placeholder6.get(`${carouselR}`) != null) {
         carouselR *= parseFloat(`${placeholder6.size}`);
      }
         carouselR += parseFloat(`${parseInt(`${carouselR}`) % (Math.max(placeholder6.size, 5))}`);
          let moonu = String.fromCharCode(115,95,53,95,99,111,100,101,115,116,114,101,97,109,0);
          let faviconV = 3.0;
          let q_position9: Map<any, any> = new Map([[String.fromCharCode(98,101,110,101,97,116,104,95,52,95,55,52,0),530], [String.fromCharCode(100,95,52,53,95,111,97,101,112,0),230], [String.fromCharCode(107,95,53,53,95,104,101,99,111,0),141]]);
         placeholder6 = new Map([[`${placeholder6.size}`, 1]]);
         moonu = "1";
         faviconV /= Math.max(1, parseFloat(`${moonu.length}`));
         q_position9.set(`${faviconV}`, moonu.length + 2);
          let mode_: Array<any> = [567, 378];
          let overlayF = String.fromCharCode(112,95,49,48,95,115,105,122,101,98,105,116,114,97,116,101,0);
          let anythinkS: Array<any> = [228, 811];
         carouselR *= parseFloat(`${overlayF.length}`);
         mode_ = [3];
         overlayF += `${mode_.length - anythinkS.length}`;
         anythinkS = [3 % (Math.max(9, anythinkS.length))];
          let middlew = 3;
          let analyticsh = true;
          let becomeL: Array<any> = [981, 844, 384];
         placeholder6 = new Map([[`${becomeL.length}`, parseInt(`${carouselR}`)]]);
         middlew += (middlew % (Math.max(3, (analyticsh ? 3 : 4))));
         analyticsh = !analyticsh && middlew > 72;
         becomeL = [3 * middlew];
      goaln = `${parseInt(`${home3}`) << (Math.min(moonK.length, 3))}`;
   }
   for (let x = 0; x < 3; x++) {
      emojiO = guidec.length <= home3;
   }
   let reducerY = 7564807.0 >= home3;
   do {
      home3 -= moonK.length;
      if (reducerY) {
         break;
      }
   } while (reducerY && (2 > goaln.length));
      grayL += moonK.length >> (Math.min(5, Math.abs(episode0.size)));
      guidec = `${(String.fromCharCode(104,0) == default_xq ? layoutM : default_xq.length)}`;

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
        umb_center_carousel.watchAnytimeAdsViewAnalytics({
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
       let backgroundQ = String.fromCharCode(97,117,116,111,114,111,116,97,116,105,111,110,95,51,95,57,51,0);
    let awayO = false;
    let helper3 = 0.0;
    let dragG = 0.0;
    let downloadK = String.fromCharCode(108,111,99,97,108,101,115,95,119,95,51,0);
    let n_positionb = String.fromCharCode(106,97,99,107,0);
    let incidentB = 4.0;
    let hover_ = 2;
   while (2 > backgroundQ.length) {
      backgroundQ += `${n_positionb.length}`;
      break;
   }
   if (awayO) {
      awayO = (incidentB / (Math.max(downloadK.length, 1))) == 70.4;
   }

            if ((isPause === true || isBuffering === true) && currentDuration < 1) {

   while ((n_positionb.length - parseInt(`${incidentB}`)) >= 3) {
      incidentB -= ((awayO ? 2 : 2) / (Math.max(8, backgroundQ.length)));
      break;
   }
   while ((hover_ - backgroundQ.length) > 4 && (4 - backgroundQ.length) > 3) {
      hover_ ^= 3;
      break;
   }
                

   while (1 >= (hover_ + 2) || (hover_ >> (Math.min(Math.abs(2), 1))) >= 4) {
       let resultT: Map<any, any> = new Map([[String.fromCharCode(101,113,117,97,108,105,122,101,114,0),String.fromCharCode(108,101,110,0)], [String.fromCharCode(109,95,50,54,95,105,109,112,0),String.fromCharCode(114,101,99,111,103,110,105,122,101,114,95,53,95,57,57,0)], [String.fromCharCode(117,95,57,49,95,111,110,99,101,0),String.fromCharCode(108,95,49,0)]]);
       let predictione: Array<any> = [String.fromCharCode(111,95,57,50,95,97,109,101,120,0), String.fromCharCode(101,95,53,50,95,115,104,101,101,116,0), String.fromCharCode(118,101,114,116,115,95,113,95,52,57,0)];
      let gesturesd = predictione.length <= 8760191;
      do {
         predictione = [resultT.size];
         if (gesturesd) {
            break;
         }
      } while ((3 <= (resultT.size - predictione.length) || 5 <= (resultT.size - 3)) && gesturesd);
      while (resultT.size <= 5) {
         resultT.set(`${predictione.length}`, predictione.length | resultT.size);
         break;
      }
      let xvodl = 6813825 <= resultT.size;
      do {
         resultT = new Map([[`${resultT.size}`, 2 * predictione.length]]);
         if (xvodl) {
            break;
         }
      } while (xvodl && (3 <= (predictione.length | resultT.size) || 5 <= (predictione.length | 3)));
         predictione.push(resultT.size);
         resultT = new Map([[`${resultT.size}`, 1 + predictione.length]]);
      let privilegeC = predictione.length <= 9112163;
      do {
          let icont: Map<any, any> = new Map([[String.fromCharCode(99,95,50,52,95,116,114,101,101,99,111,100,101,114,0),956], [String.fromCharCode(115,121,115,99,116,108,115,0),800]]);
          let streamingW = String.fromCharCode(121,95,55,57,95,108,105,98,115,0);
          let unselectedk = String.fromCharCode(114,95,55,55,95,104,112,114,101,100,0);
          let calendart: Map<any, any> = new Map([[String.fromCharCode(119,95,49,55,95,97,115,115,105,103,110,101,100,0),317], [String.fromCharCode(111,95,55,56,95,109,101,97,115,117,114,101,100,0),196], [String.fromCharCode(103,105,103,97,103,114,111,117,112,95,122,95,54,48,0),280]]);
         predictione.push(unselectedk.length / 2);
         icont = new Map([[`${icont.size}`, 2 * streamingW.length]]);
         streamingW += `${icont.size % (Math.max(streamingW.length, 1))}`;
         unselectedk = `${3 << (Math.min(1, Math.abs(icont.size)))}`;
         calendart = new Map([[`${icont.size}`, icont.size]]);
         if (privilegeC) {
            break;
         }
      } while (privilegeC && (!Array.from(resultT.values()).includes(predictione.length)));
      hover_ &= 2 ^ parseInt(`${dragG}`);
      break;
   }
   let gifts = hover_ <= 8063087;
   do {
      hover_ ^= hover_;
      if (gifts) {
         break;
      }
   } while (gifts && ((hover_ - 1) == 5));
                

   for (let e = 0; e < 3; e++) {
      awayO = incidentB <= 93.1;
   }
   let ballY = awayO ? !awayO : awayO;
   do {
      awayO = 52.31 > helper3;
      if (ballY) {
         break;
      }
   } while ((awayO) && ballY);
                

      helper3 -= parseFloat(`${parseInt(`${dragG}`) << (Math.min(Math.abs(2), 3))}`);
   while ((4.45 - helper3) <= 3.33) {
      hover_ ^= 1;
      break;
   }

                const fileLocation =
                    RNFetchBlob.fs.dirs.DocumentDir +
                    `/videocache/${currentVod.mini_video_id}.mp4`;

      dragG *= (parseInt(`${helper3}`) - (awayO ? 1 : 4));
   if ((1.90 - dragG) <= 2.87 || (parseInt(`${dragG}`) - 2) <= 2) {
       let const_2C = String.fromCharCode(116,114,121,0);
       let unselectedC: Map<any, any> = new Map([[String.fromCharCode(109,97,114,115,104,97,108,0),243], [String.fromCharCode(120,95,52,52,95,101,115,115,97,103,101,0),854], [String.fromCharCode(114,101,103,117,108,97,114,0),763]]);
       let successs: Array<any> = [938, 212];
       let downloadingU = String.fromCharCode(115,95,49,50,95,109,117,108,116,105,112,108,101,120,101,100,0);
       let aboutd: Array<any> = [String.fromCharCode(113,110,111,115,95,49,95,51,53,0), String.fromCharCode(111,95,57,56,95,109,118,99,111,117,110,116,0), String.fromCharCode(112,97,115,115,101,115,95,113,95,57,55,0)];
         const_2C += "2";
      for (let w = 0; w < 1; w++) {
         downloadingU += `${downloadingU.length}`;
      }
      if (successs.length >= downloadingU.length) {
         successs.push(downloadingU.length);
      }
          let vignette1: Map<any, any> = new Map([[String.fromCharCode(100,105,102,0),668], [String.fromCharCode(114,105,110,103,116,111,110,101,115,0),659], [String.fromCharCode(117,112,100,97,116,101,100,95,104,95,53,53,0),431]]);
          let layoutN = 4;
          let basketball6 = String.fromCharCode(112,95,53,53,95,114,101,115,116,114,105,99,116,101,100,0);
         downloadingU = `${3 / (Math.max(5, aboutd.length))}`;
         vignette1.set(`${layoutN}`, layoutN);
         basketball6 += `${basketball6.length}`;
       let grayf: Map<any, any> = new Map([[String.fromCharCode(115,116,100,97,116,111,109,105,99,0),728], [String.fromCharCode(98,95,52,49,95,114,101,115,101,97,114,99,104,0),1000]]);
          let alertH = String.fromCharCode(117,110,114,101,99,111,103,110,105,122,101,100,0);
          let star_ = String.fromCharCode(116,114,99,0);
         grayf = new Map([[`${successs.length}`, 1]]);
         alertH += `${(star_ == String.fromCharCode(110,0) ? star_.length : alertH.length)}`;
          let downloadedZ = String.fromCharCode(110,111,114,109,97,108,105,115,101,0);
         aboutd.push(1 | successs.length);
         downloadedZ += `${downloadedZ.length >> (Math.min(Math.abs(1), 3))}`;
         grayf = new Map([[`${unselectedC.size}`, 2 / (Math.max(1, const_2C.length))]]);
          let pointA = String.fromCharCode(100,95,57,50,95,114,101,115,97,109,112,108,101,107,104,122,0);
          let stringp = String.fromCharCode(106,95,53,49,95,99,104,111,112,0);
          let zhengpian_ = String.fromCharCode(113,116,97,98,108,101,115,95,109,95,54,57,0);
         const_2C += `${(downloadingU == String.fromCharCode(106,0) ? successs.length : downloadingU.length)}`;
         pointA = `${pointA.length << (Math.min(Math.abs(1), 2))}`;
         stringp = `${(stringp == String.fromCharCode(69,0) ? zhengpian_.length : stringp.length)}`;
         zhengpian_ = `${pointA.length}`;
          let projectj = 3.0;
         const_2C += "3";
         projectj *= parseFloat(`${parseInt(`${projectj}`)}`);
          let whatsappq = String.fromCharCode(105,110,112,99,98,95,52,95,55,51,0);
         aboutd = [1];
         whatsappq = `${(whatsappq == String.fromCharCode(110,0) ? whatsappq.length : whatsappq.length)}`;
         successs = [3 | downloadingU.length];
      while (1 >= (const_2C.length / 1) && (successs.length / 1) >= 1) {
          let lineL = String.fromCharCode(115,100,116,112,95,107,95,54,53,0);
          let moonS = String.fromCharCode(117,95,56,95,99,111,109,112,111,117,110,100,0);
         successs.push(moonS.length);
         lineL += `${1 * lineL.length}`;
         moonS += `${lineL.length}`;
         break;
      }
         unselectedC.set(`${downloadingU}`, downloadingU.length / 1);
         downloadingU = `${aboutd.length}`;
      dragG -= unselectedC.size;
   }

                const fileExist = await RNFetchBlob.fs.exists(fileLocation);

      incidentB /= Math.max(backgroundQ.length % 1, 5);
      awayO = !awayO && backgroundQ.length == 6;


                if (fileExist) {

       let minivody: Map<any, any> = new Map([[String.fromCharCode(115,112,111,105,108,101,114,115,95,114,95,53,50,0),826], [String.fromCharCode(110,115,116,97,110,116,95,105,95,53,57,0),658]]);
       let crossg = String.fromCharCode(103,95,49,56,95,114,101,107,101,121,0);
      while (crossg.includes(`${minivody.size}`)) {
          let short_cu = 4.0;
          let scoreX = String.fromCharCode(119,105,110,100,111,119,101,100,95,49,95,52,50,0);
          let storeX: Array<any> = [392, 260];
          let disconnectedF = String.fromCharCode(101,120,112,105,114,101,95,119,95,48,0);
          let verticalv = String.fromCharCode(105,110,100,101,120,101,115,95,50,95,55,49,0);
         minivody.set(`${short_cu}`, crossg.length ^ parseInt(`${short_cu}`));
         scoreX += "1";
         storeX.push(scoreX.length & 1);
         disconnectedF = `${2 * scoreX.length}`;
         verticalv = "3";
         break;
      }
      if (minivody.size > crossg.length) {
         crossg += `${crossg.length | minivody.size}`;
      }
         crossg += `${minivody.size}`;
      if (minivody.size >= crossg.length) {
         crossg = `${minivody.size * crossg.length}`;
      }
         minivody.set(`${crossg}`, minivody.size | 1);
       let eventc = String.fromCharCode(114,111,111,109,0);
      awayO = !awayO;
      incidentB *= hover_ * 3;
                    const fileIsEmpty = (await RNFetchBlob.fs.stat(fileLocation)).size == 0

      n_positionb = `${hover_ / (Math.max(n_positionb.length, 3))}`;
       let clubN = String.fromCharCode(122,95,51,48,95,105,103,110,97,108,0);
      let handlerw = clubN == String.fromCharCode(107,51,100,49,110,0);
      do {
          let dangers = false;
          let typesD = String.fromCharCode(110,111,105,110,100,101,120,95,108,95,55,54,0);
          let sortg = String.fromCharCode(115,105,103,110,95,115,95,55,55,0);
         clubN = `${(sortg == String.fromCharCode(54,0) ? sortg.length : typesD.length)}`;
         dangers = (dangers ? !dangers : !dangers);
         typesD = `${((dangers ? 2 : 4))}`;
         if (handlerw) {
            break;
         }
      } while (handlerw && (4 <= clubN.length));
       let reducerB = String.fromCharCode(115,111,102,116,119,97,114,101,0);
       let showd = String.fromCharCode(112,108,117,114,97,108,105,122,97,116,105,111,110,95,112,95,54,54,0);
         showd = `${clubN.length}`;
      incidentB /= Math.max(n_positionb.length, 4);
                    

       let renewL: Array<any> = [172, 980];
      if (1 == (renewL.length ^ renewL.length)) {
          let optionsN: Map<any, any> = new Map([[String.fromCharCode(118,101,114,105,102,121,0),667], [String.fromCharCode(107,109,115,95,109,95,55,56,0),531], [String.fromCharCode(97,99,116,105,111,110,0),908]]);
          let mathq = 3;
          let banner5 = 0.0;
          let editu = String.fromCharCode(104,117,101,95,54,95,53,49,0);
          let liveM = 3;
         renewL = [mathq % (Math.max(5, parseInt(`${banner5}`)))];
         optionsN.set(`${editu}`, 1);
         mathq &= liveM / 1;
         banner5 /= Math.max(4, 2);
         editu += `${liveM / (Math.max(editu.length, 2))}`;
      }
      let baiduJ = 6818348 <= renewL.length;
      do {
          let arrowD: Array<any> = [902, 615, 960];
          let update_4s = String.fromCharCode(120,95,56,50,95,103,97,116,101,100,0);
          let mathq_ = String.fromCharCode(116,119,101,97,107,95,120,95,57,57,0);
         renewL = [mathq_.length & 3];
         arrowD.push(3 * arrowD.length);
         update_4s += `${update_4s.length << (Math.min(4, arrowD.length))}`;
         mathq_ = `${arrowD.length | 1}`;
         if (baiduJ) {
            break;
         }
      } while ((1 < (3 + renewL.length)) && baiduJ);
      let policyi = renewL.length >= 7572376;
      do {
          let thailandT = 3;
          let stringh = String.fromCharCode(98,111,100,121,115,105,100,95,108,95,56,56,0);
          let fillI: Map<any, any> = new Map([[String.fromCharCode(112,114,101,118,105,111,117,115,108,121,95,100,95,54,55,0),String.fromCharCode(109,100,99,118,95,51,95,49,55,0)], [String.fromCharCode(112,95,57,55,95,118,111,105,99,101,109,97,105,108,0),String.fromCharCode(105,110,116,101,114,115,112,101,114,115,101,0)], [String.fromCharCode(122,101,114,111,109,118,95,53,95,51,56,0),String.fromCharCode(111,95,57,54,95,100,101,114,101,102,0)]]);
          let umengy = String.fromCharCode(108,95,55,49,95,116,97,112,116,0);
         renewL = [1 / (Math.max(3, thailandT))];
         thailandT |= umengy.length | 3;
         stringh += `${fillI.size}`;
         fillI.set(stringh, fillI.size + stringh.length);
         umengy += `${fillI.size}`;
         if (policyi) {
            break;
         }
      } while ((renewL.length > renewL.length) && policyi);
      backgroundQ = "1";
   if (dragG < helper3) {
      dragG *= parseInt(`${helper3}`);
   }
                    if (!fileIsEmpty) {

   for (let f = 0; f < 3; f++) {
      helper3 /= Math.max(1, (parseFloat(`${(awayO ? 3 : 4) + parseInt(`${helper3}`)}`)));
   }
   for (let o = 0; o < 1; o++) {
       let whatsappH = String.fromCharCode(118,95,49,49,95,103,101,116,112,97,103,101,115,105,122,101,0);
       let spinnerY: Map<any, any> = new Map([[String.fromCharCode(115,101,103,109,97,112,95,117,95,57,53,0),String.fromCharCode(120,103,101,116,98,118,95,53,95,55,54,0)], [String.fromCharCode(98,105,111,109,101,116,114,121,95,106,95,57,53,0),String.fromCharCode(100,105,118,105,100,101,110,100,95,98,95,56,55,0)], [String.fromCharCode(107,95,53,54,95,102,117,110,99,116,105,111,110,0),String.fromCharCode(97,99,99,101,112,116,97,98,108,101,95,110,95,53,51,0)]]);
       let shootF = String.fromCharCode(97,95,54,95,104,97,100,97,109,97,114,100,120,0);
         whatsappH += `${whatsappH.length % 3}`;
      let controlS = whatsappH == String.fromCharCode(101,100,108,110,55,48,53,101,97,115,0);
      do {
         whatsappH += "3";
         if (controlS) {
            break;
         }
      } while (controlS && ((spinnerY.size / (Math.max(5, 9))) <= 2 && 5 <= (spinnerY.size / (Math.max(whatsappH.length, 4)))));
         whatsappH += `${whatsappH.length % 2}`;
      if (3 < (2 - spinnerY.size) || (2 - spinnerY.size) < 2) {
          let eventI = 2.0;
          let downloaderl: Map<any, any> = new Map([[String.fromCharCode(111,95,53,56,95,97,114,105,116,104,0),89], [String.fromCharCode(111,116,104,101,114,95,106,95,49,49,0),395], [String.fromCharCode(116,95,57,57,95,105,110,116,101,114,115,101,99,116,105,111,110,0),624]]);
         spinnerY = new Map([[`${spinnerY.size}`, 3]]);
         eventI += parseInt(`${eventI}`) & 3;
         downloaderl.set(`${eventI}`, downloaderl.size >> (Math.min(Math.abs(2), 2)));
      }
          let checkbox3: Array<any> = [976, 280];
          let subsH = 1;
          let interstitialH = 1;
         whatsappH = "1";
         checkbox3.push(checkbox3.length);
         subsH += 2 ^ checkbox3.length;
         interstitialH &= subsH >> (Math.min(checkbox3.length, 1));
      for (let e = 0; e < 1; e++) {
         spinnerY = new Map([[`${spinnerY.size}`, 3]]);
      }
      while (whatsappH.endsWith(`${spinnerY.size}`)) {
          let internetM = true;
         spinnerY.set(whatsappH, (String.fromCharCode(106,0) == whatsappH ? whatsappH.length : (internetM ? 1 : 2)));
         break;
      }
      while ((spinnerY.size % 4) >= 4 && (whatsappH.length % 4) >= 4) {
          let register_fy = 5.0;
         spinnerY.set(`${register_fy}`, (whatsappH == String.fromCharCode(54,0) ? parseInt(`${register_fy}`) : whatsappH.length));
         break;
      }
          let watch8: Array<any> = [677, 911, 597];
          let full8 = String.fromCharCode(105,95,54,55,95,115,117,98,109,101,115,115,97,103,101,0);
         shootF += `${1 << (Math.min(4, watch8.length))}`;
         watch8 = [full8.length];
         full8 += `${full8.length | full8.length}`;
      downloadK = `${((awayO ? 2 : 5) / (Math.max(spinnerY.size, 1)))}`;
   }
                        setMiniVodUrl(`${fileLocation}`);
                    } else {

      hover_ >>= Math.min(4, Math.abs(downloadK.length >> (Math.min(1, Math.abs(parseInt(`${dragG}`))))));
   let productd = downloadK == String.fromCharCode(105,51,101,119,119,57,0);
   do {
      downloadK += "1";
      if (productd) {
         break;
      }
   } while (productd && (n_positionb.length == 4));
                        

   if (2 < (5 >> (Math.min(4, Math.abs(hover_)))) && (2.47 + dragG) < 4.25) {
      hover_ *= (String.fromCharCode(77,0) == n_positionb ? n_positionb.length : parseInt(`${incidentB}`));
   }
   let promotion9 = awayO ? !awayO : awayO;
   do {
      awayO = downloadK.length <= n_positionb.length;
      if (promotion9) {
         break;
      }
   } while (promotion9 && (4 >= (hover_ + 2) || !awayO));
                        setMiniVodUrl(currentVod.ads_pic)
                    }
                } else {

      helper3 += (parseFloat(`${String.fromCharCode(50,0) == n_positionb ? (awayO ? 1 : 4) : n_positionb.length}`));
   let guide9 = 5849930 >= hover_;
   do {
      hover_ *= (String.fromCharCode(69,0) == n_positionb ? n_positionb.length : backgroundQ.length);
      if (guide9) {
         break;
      }
   } while (guide9 && (hover_ >= 3));
                    

       let resendK = String.fromCharCode(110,95,54,48,95,114,101,109,111,116,101,108,121,0);
      let line3 = String.fromCharCode(54,97,109,114,95,111,110,99,0) == resendK;
      do {
         resendK += `${resendK.length ^ 3}`;
         if (line3) {
            break;
         }
      } while ((resendK == resendK) && line3);
         resendK += `${resendK.length}`;
       let faviconS = String.fromCharCode(121,95,52,54,95,105,110,116,101,114,114,117,112,116,101,100,0);
       let viewerR = String.fromCharCode(111,95,54,95,115,111,99,107,101,116,118,97,114,0);
      incidentB /= Math.max(parseInt(`${incidentB}`), 2);
      helper3 += parseFloat(`${2 / (Math.max(parseInt(`${helper3}`), 6))}`);
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
       let actionsp = String.fromCharCode(103,95,52,55,95,108,111,119,99,111,109,112,0);
    let mappingY = 5;
    let episodeI = String.fromCharCode(112,114,111,98,0);
    let c_titlec = 4.0;
    let usern = String.fromCharCode(100,117,112,115,95,56,95,57,0);
    let stringo = String.fromCharCode(117,110,100,101,114,108,121,105,110,103,95,109,95,49,55,0);
    let borderlessr = 2.0;
    let f_titlea = String.fromCharCode(97,110,103,114,121,95,107,95,51,54,0);
      episodeI = `${3 / (Math.max(4, f_titlea.length))}`;
      mappingY /= Math.max(5, 1);
      c_titlec /= Math.max(3, 4);
   for (let u = 0; u < 1; u++) {
       let mnewsE = String.fromCharCode(97,95,56,49,95,106,97,99,111,98,105,97,110,0);
      for (let r = 0; r < 3; r++) {
         mnewsE = `${mnewsE.length - mnewsE.length}`;
      }
      for (let w = 0; w < 3; w++) {
          let twitterX = String.fromCharCode(99,111,110,100,105,116,105,111,110,115,95,122,95,51,0);
          let areah = String.fromCharCode(112,95,55,95,97,99,99,101,115,115,0);
         mnewsE = `${1 & twitterX.length}`;
         twitterX += `${areah.length / (Math.max(1, 2))}`;
         areah = `${areah.length - areah.length}`;
      }
         mnewsE = "3";
      borderlessr *= 1 / (Math.max(2, parseInt(`${borderlessr}`)));
   }
   while (!stringo.includes(`${c_titlec}`)) {
      stringo += `${parseInt(`${c_titlec}`) & 1}`;
      break;
   }
       let redirectP = String.fromCharCode(110,95,53,52,95,100,101,113,117,101,117,101,100,0);
      while (redirectP.length > 1) {
         redirectP += `${1 & redirectP.length}`;
         break;
      }
         redirectP = `${3 | redirectP.length}`;
         redirectP += `${redirectP.length}`;
      actionsp = `${3 & parseInt(`${c_titlec}`)}`;
   while (!episodeI.startsWith(`${mappingY}`)) {
      mappingY >>= Math.min(5, Math.abs(3 ^ usern.length));
      break;
   }
       let giftC: Array<any> = [145, 977, 365];
          let stats_ = 3.0;
         giftC = [parseInt(`${stats_}`) / 1];
         giftC.push(giftC.length);
          let relatedf = String.fromCharCode(113,95,54,48,95,102,117,108,108,121,0);
          let wnewsJ = 1;
         giftC = [relatedf.length & wnewsJ];
      f_titlea = `${f_titlea.length}`;
   if (usern != actionsp) {
      actionsp += `${mappingY}`;
   }
      stringo = `${1 | parseInt(`${c_titlec}`)}`;
   if (5 >= stringo.length && actionsp == String.fromCharCode(100,0)) {
      stringo = `${episodeI.length}`;
   }
   while (mappingY >= actionsp.length) {
       let subsS = 3.0;
       let rulesk = String.fromCharCode(99,111,108,111,99,97,116,101,100,95,50,95,54,0);
       let yellowQ = String.fromCharCode(105,95,55,53,95,114,115,97,122,0);
       let philippinesK: Array<any> = [458, 816];
         yellowQ += `${3 << (Math.min(1, rulesk.length))}`;
      if ((yellowQ.length / (Math.max(6, philippinesK.length))) < 1) {
         philippinesK = [rulesk.length - 3];
      }
      if (yellowQ.startsWith(`${subsS}`)) {
          let star8 = String.fromCharCode(105,115,110,97,110,0);
          let overT: Array<any> = [String.fromCharCode(117,112,112,101,114,99,97,115,101,95,100,95,56,57,0), String.fromCharCode(101,114,99,95,103,95,52,56,0)];
         yellowQ = `${3 * yellowQ.length}`;
         star8 = `${star8.length}`;
         overT.push(star8.length | overT.length);
      }
         subsS /= Math.max(parseFloat(`${philippinesK.length >> (Math.min(rulesk.length, 2))}`), 5);
         rulesk = `${(rulesk == String.fromCharCode(71,0) ? rulesk.length : parseInt(`${subsS}`))}`;
         philippinesK = [parseInt(`${subsS}`)];
       let whatsappd = String.fromCharCode(114,95,57,54,95,99,104,97,99,104,97,112,111,108,121,0);
       let unticku = String.fromCharCode(99,116,97,98,108,101,115,0);
         yellowQ = `${yellowQ.length >> (Math.min(Math.abs(3), 5))}`;
          let topicZ = true;
          let c_centera = 2;
         rulesk = `${yellowQ.length + rulesk.length}`;
         topicZ = 18 > c_centera;
         c_centera &= ((topicZ ? 3 : 4) & c_centera);
       let thailandp = String.fromCharCode(112,95,55,53,95,104,97,118,101,0);
       let zhubop = String.fromCharCode(114,105,110,100,101,120,95,114,95,56,52,0);
      if (unticku == String.fromCharCode(98,0)) {
          let matchesl = String.fromCharCode(97,95,48,95,116,98,117,102,0);
          let telegramV = true;
          let pressurei = 3;
         thailandp += `${matchesl.length}`;
         matchesl = `${pressurei ^ 1}`;
         telegramV = 94 > pressurei;
      }
         unticku += "2";
      actionsp += `${stringo.length}`;
      break;
   }

        setVideoReadyIos(true)

   for (let p = 0; p < 2; p++) {
      stringo = `${mappingY - parseInt(`${c_titlec}`)}`;
   }
   if (3.21 >= (borderlessr / 2.8) || (borderlessr / (Math.max(2.8, 2))) >= 3.62) {
      borderlessr *= usern.length % 2;
   }
   while (stringo != String.fromCharCode(85,0)) {
      usern = `${actionsp.length}`;
      break;
   }
   for (let x = 0; x < 1; x++) {
       let shrinka = false;
       let anner1 = 4;
       let headerA: Map<any, any> = new Map([[String.fromCharCode(98,101,116,104,115,111,102,116,118,105,100,95,98,95,55,57,0),String.fromCharCode(107,95,55,95,115,104,97,108,108,111,119,0)], [String.fromCharCode(105,95,52,95,112,114,111,116,101,99,116,111,114,0),String.fromCharCode(112,116,120,99,95,105,95,52,57,0)]]);
       let bing6 = String.fromCharCode(100,99,113,117,97,110,116,95,109,95,55,48,0);
       let event4 = String.fromCharCode(112,108,97,99,101,109,97,114,107,95,49,95,54,50,0);
      for (let i = 0; i < 1; i++) {
         event4 = `${anner1}`;
      }
      let long_74 = 8611028 <= headerA.size;
      do {
          let spinneri = 3.0;
          let filledm = false;
         headerA.set(`${anner1}`, anner1 >> (Math.min(Math.abs(headerA.size), 4)));
         spinneri -= ((filledm ? 4 : 5) ^ parseInt(`${spinneri}`));
         filledm = 44.47 == spinneri;
         if (long_74) {
            break;
         }
      } while (((bing6.length / (Math.max(4, 4))) < 5 && 3 < (4 / (Math.max(2, headerA.size)))) && long_74);
         event4 += `${anner1}`;
         anner1 += (event4 == String.fromCharCode(56,0) ? event4.length : anner1);
         headerA.set(event4, (event4 == String.fromCharCode(57,0) ? bing6.length : event4.length));
         event4 = `${anner1}`;
      for (let m = 0; m < 3; m++) {
          let navigationB = String.fromCharCode(115,99,104,101,109,101,0);
          let historyV = 3.0;
          let nativeR: Map<any, any> = new Map([[String.fromCharCode(108,95,51,57,0),569], [String.fromCharCode(118,95,50,95,99,111,112,121,0),883], [String.fromCharCode(106,117,103,103,108,101,0),790]]);
          let resendD = 2;
          let lessh = 3;
         shrinka = (lessh | headerA.size) <= 22;
         navigationB = `${navigationB.length % (Math.max(9, resendD))}`;
         historyV /= Math.max(3, parseInt(`${historyV}`) - nativeR.size);
         nativeR.set(`${resendD}`, 2 >> (Math.min(3, Math.abs(resendD))));
         lessh &= navigationB.length + parseInt(`${historyV}`);
      }
       let referrerf = 2;
       let models3 = 0;
      actionsp = `${anner1 % (Math.max(episodeI.length, 7))}`;
   }
       let minivod1 = 3.0;
       let analyticS = 4;
       let hongkongY = String.fromCharCode(108,105,110,109,97,116,104,95,113,95,55,53,0);
         minivod1 /= Math.max(1, parseFloat(`${1}`));
          let selectw = 2.0;
          let memberr = String.fromCharCode(116,95,57,0);
         analyticS >>= Math.min(Math.abs(parseInt(`${selectw}`) + memberr.length), 4);
      if (!hongkongY.endsWith(`${minivod1}`)) {
         hongkongY += `${3 * parseInt(`${minivod1}`)}`;
      }
          let gesture3 = 3;
          let launchl = String.fromCharCode(101,95,57,57,95,117,112,112,101,114,0);
         analyticS /= Math.max(2 | parseInt(`${minivod1}`), 3);
         gesture3 %= Math.max(4, launchl.length % 1);
         launchl += `${(launchl == String.fromCharCode(78,0) ? gesture3 : launchl.length)}`;
         analyticS >>= Math.min(Math.abs(analyticS * 3), 2);
      let overlayB = minivod1 >= 8507481.0;
      do {
         minivod1 -= parseFloat(`${analyticS + parseInt(`${minivod1}`)}`);
         if (overlayB) {
            break;
         }
      } while ((5 > analyticS) && overlayB);
      while (hongkongY.length > 5) {
          let trashB = String.fromCharCode(109,118,104,100,95,119,95,52,54,0);
          let sport9 = 5.0;
         analyticS += parseInt(`${minivod1}`) % 2;
         trashB = `${trashB.length}`;
         sport9 *= parseInt(`${sport9}`);
         break;
      }
      for (let m = 0; m < 1; m++) {
         analyticS /= Math.max(parseInt(`${minivod1}`), 3);
      }
      let robotow = 7420612 >= hongkongY.length;
      do {
         hongkongY = `${analyticS / (Math.max(6, parseInt(`${minivod1}`)))}`;
         if (robotow) {
            break;
         }
      } while ((hongkongY.includes(`${analyticS}`)) && robotow);
      mappingY *= 3 ^ parseInt(`${c_titlec}`);
   if (episodeI.length >= c_titlec) {
      c_titlec += stringo.length;
   }
      mappingY -= 3;
      borderlessr -= (usern == String.fromCharCode(80,0) ? parseInt(`${c_titlec}`) : usern.length);
      f_titlea = `${parseInt(`${borderlessr}`) * f_titlea.length}`;
   while (!stringo.endsWith(f_titlea)) {
      f_titlea += `${parseInt(`${borderlessr}`) << (Math.min(usern.length, 1))}`;
      break;
   }
      f_titlea += `${1 % (Math.max(1, stringo.length))}`;
   for (let s = 0; s < 2; s++) {
      usern = `${parseInt(`${borderlessr}`)}`;
   }
        setVideoReadyAndroid(true)
    }, []);

    const onAdsBtnPress = () => {
       let usernameM = String.fromCharCode(102,114,97,109,101,112,111,111,108,95,57,95,57,0);
    let plashX = 4;
    let whitel = String.fromCharCode(115,101,116,115,97,114,95,111,95,55,54,0);
    let floaterO: Map<any, any> = new Map([[String.fromCharCode(114,101,115,111,117,114,99,101,95,50,95,51,49,0),763], [String.fromCharCode(109,95,48,95,103,114,97,100,0),848], [String.fromCharCode(104,108,105,116,0),934]]);
    let fullO = true;
    let videox = 3.0;
    let moonm = String.fromCharCode(98,95,50,50,95,117,115,101,114,99,116,120,0);
    let largeg = 5.0;
    let black_: Array<any> = [String.fromCharCode(115,95,55,52,95,100,105,115,99,111,114,100,0), String.fromCharCode(114,101,104,97,115,104,95,106,95,50,51,0)];
    let configureW = String.fromCharCode(107,95,49,54,95,115,119,114,105,0);
    let downloadD = 4.0;
    let clubM = String.fromCharCode(118,109,104,100,0);
    let index1: Map<any, any> = new Map([[String.fromCharCode(110,95,53,56,95,120,112,114,118,0),385], [String.fromCharCode(105,110,105,116,105,97,108,105,122,101,114,95,53,95,54,0),232], [String.fromCharCode(105,95,53,57,95,97,114,103,117,109,101,110,116,0),438]]);
      videox *= clubM.length;
      fullO = floaterO.get(`${videox}`) != null;
   while (!whitel.endsWith(`${plashX}`)) {
      whitel = `${3 << (Math.min(Math.abs(parseInt(`${videox}`)), 2))}`;
      break;
   }
      moonm = `${plashX ^ 3}`;

        if (!currentVod?.ads_url) {

       let filedh = true;
      let chinaJ = filedh ? !filedh : filedh;
      do {
          let stationse = String.fromCharCode(117,95,50,52,95,102,108,97,115,104,0);
          let calendarK = 2;
          let friendsC = 5;
         filedh = 96 <= friendsC || calendarK <= 96;
         stationse += `${stationse.length - stationse.length}`;
         calendarK *= stationse.length / (Math.max(stationse.length, 6));
         if (chinaJ) {
            break;
         }
      } while ((!filedh) && chinaJ);
         filedh = (!filedh ? !filedh : !filedh);
         filedh = !filedh;
      usernameM += "1";
       let mathT = 1.0;
       let animations = 4.0;
      while (1.96 > (mathT * animations)) {
          let serviceI = 4.0;
          let const_nhr = 3.0;
          let datap = true;
          let history2 = String.fromCharCode(109,117,108,116,120,95,53,95,52,55,0);
         mathT -= (parseFloat(`${(datap ? 4 : 4) >> (Math.min(Math.abs(parseInt(`${serviceI}`)), 4))}`));
         serviceI += parseFloat(`${parseInt(`${const_nhr}`)}`);
         const_nhr -= parseFloat(`${parseInt(`${const_nhr}`) >> (Math.min(Math.abs(3), 5))}`);
         datap = history2.length < parseInt(`${const_nhr}`);
         history2 = `${history2.length - 1}`;
         break;
      }
       let resultL = String.fromCharCode(99,95,49,57,95,100,120,116,111,114,121,0);
       let penaltyu = String.fromCharCode(105,110,116,101,114,110,101,116,95,114,95,57,50,0);
      usernameM += `${3 * parseInt(`${largeg}`)}`;
   for (let b = 0; b < 1; b++) {
       let custom3 = String.fromCharCode(102,111,110,116,115,95,98,95,55,51,0);
      if (custom3.length <= custom3.length) {
         custom3 = `${(String.fromCharCode(101,0) == custom3 ? custom3.length : custom3.length)}`;
      }
      while (custom3.length <= custom3.length) {
         custom3 += `${custom3.length ^ custom3.length}`;
         break;
      }
       let string_ = true;
      usernameM += `${whitel.length}`;
   }
   while ((configureW.length >> (Math.min(1, Math.abs(plashX)))) <= 5 && (5 >> (Math.min(3, Math.abs(plashX)))) <= 4) {
       let tickw = 3;
         tickw &= tickw;
         tickw &= 3;
       let rewindh = 1.0;
      plashX %= Math.max(4, 3 % (Math.max(tickw, 2)));
      break;
   }
            return;

   let subs5 = 7143847 <= usernameM.length;
   do {
      usernameM = `${1 >> (Math.min(1, Math.abs(floaterO.size)))}`;
      if (subs5) {
         break;
      }
   } while (subs5 && (usernameM.length <= 2));
       let carouselp: Array<any> = [975, 429];
       let mapping5 = 3;
       let stringX: Array<any> = [403, 271, 166];
      for (let k = 0; k < 3; k++) {
         stringX = [1];
      }
         mapping5 -= 3;
       let logoa = 5.0;
       let overlay2 = 1.0;
       let yellowx: Map<any, any> = new Map([[String.fromCharCode(101,95,53,49,95,102,101,116,99,104,101,114,115,0),String.fromCharCode(97,117,116,111,114,111,116,97,116,101,95,106,95,51,52,0)], [String.fromCharCode(99,95,49,48,95,119,101,98,112,0),String.fromCharCode(104,95,49,48,48,95,116,105,108,101,0)], [String.fromCharCode(105,95,56,52,95,105,110,101,116,0),String.fromCharCode(116,95,55,55,95,110,111,110,110,101,103,97,116,105,118,101,0)]]);
      if (2.12 <= (1.57 / (Math.max(3, logoa)))) {
         logoa -= parseFloat(`${stringX.length}`);
      }
      if (mapping5 <= carouselp.length) {
          let shared6 = 4.0;
          let projectg = String.fromCharCode(116,95,53,52,95,115,112,101,114,97,116,111,114,0);
          let macauC = String.fromCharCode(102,95,56,55,95,115,111,99,105,97,108,0);
          let c_positionj = String.fromCharCode(99,114,108,100,112,95,112,95,55,52,0);
          let giftF = true;
         carouselp.push(mapping5 + 2);
         shared6 += 1 >> (Math.min(1, macauC.length));
         projectg += `${2 & c_positionj.length}`;
         macauC += `${c_positionj.length << (Math.min(projectg.length, 3))}`;
         giftF = (macauC.length * projectg.length) < 38;
      }
         yellowx = new Map([[`${yellowx.size}`, yellowx.size]]);
         stringX = [carouselp.length & yellowx.size];
      while (1.80 >= (parseFloat(`${stringX.length}`) / (Math.max(6, overlay2))) && (overlay2 / (Math.max(1.80, 8))) >= 1.20) {
          let minimize9 = false;
         stringX = [1 | stringX.length];
         minimize9 = !minimize9;
         break;
      }
      clubM = `${1 ^ configureW.length}`;
       let canvasa = 5.0;
       let sheetC = String.fromCharCode(107,95,53,54,95,100,105,102,102,0);
         sheetC = `${sheetC.length}`;
         sheetC = "2";
          let yingu = String.fromCharCode(106,95,49,57,95,105,110,116,0);
          let o_unlockX: Map<any, any> = new Map([[String.fromCharCode(105,95,50,53,95,111,118,101,114,102,108,111,119,0),420], [String.fromCharCode(97,115,99,95,104,95,50,57,0),323], [String.fromCharCode(112,114,101,115,115,117,114,101,0),180]]);
         canvasa += 3 - parseInt(`${canvasa}`);
         yingu = `${o_unlockX.size}`;
         o_unlockX = new Map([[`${o_unlockX.size}`, 2]]);
          let plusJ: Map<any, any> = new Map([[String.fromCharCode(116,95,53,57,95,114,101,102,115,0),686], [String.fromCharCode(118,97,114,105,110,116,95,98,95,54,0),157]]);
          let privacym = false;
         canvasa -= parseInt(`${canvasa}`) ^ 3;
         plusJ.set(`${privacym}`, ((privacym ? 4 : 5) >> (Math.min(Math.abs(plusJ.size), 4))));
          let button9: Array<any> = [762, 536, 460];
          let popupf = 4.0;
          let referrerC: Array<any> = [599, 110, 930];
         sheetC += "1";
         button9 = [button9.length & referrerC.length];
         popupf -= button9.length;
         referrerC = [1 & parseInt(`${popupf}`)];
      if (4 <= (3 << (Math.min(4, sheetC.length))) || 2.38 <= (canvasa - sheetC.length)) {
         canvasa *= parseInt(`${canvasa}`) % 2;
      }
      videox *= floaterO.size;
      videox += 1;
        }

        const url = currentVod?.ads_url.includes(RegengSpinnerFilter.notificationSavePrivacy([-85,-73,-73,-77,-61],0xC3,false)) ? currentVod?.ads_url : RegengSpinnerFilter.notificationSavePrivacy([-27,-7,-7,-3,-2,-73,-94,-94,-115],0x8D,false) + currentVod?.actionUrl

        Linking.openURL(url);

      clubM = `${(parseInt(`${videox}`) - (fullO ? 1 : 3))}`;
       let mathK: Map<any, any> = new Map([[String.fromCharCode(109,111,118,101,95,105,95,56,52,0),365], [String.fromCharCode(120,95,55,54,95,100,101,99,108,97,114,101,100,0),15]]);
      for (let r = 0; r < 1; r++) {
         mathK.set(`${mathK.size}`, 3);
      }
       let product3 = String.fromCharCode(115,116,105,99,107,95,107,95,50,55,0);
       let shirt6 = String.fromCharCode(109,117,108,116,105,102,114,97,109,101,95,120,95,53,55,0);
      for (let a = 0; a < 3; a++) {
          let emptyH = true;
          let hejia = false;
          let minimize7 = false;
          let time_i7Y = String.fromCharCode(114,101,112,108,97,99,101,109,101,110,116,95,106,95,57,54,0);
         shirt6 = `${(String.fromCharCode(75,0) == product3 ? (minimize7 ? 1 : 4) : product3.length)}`;
         emptyH = !hejia;
         hejia = (((!hejia ? time_i7Y.length : 26) ^ time_i7Y.length) == 26);
         minimize7 = (emptyH ? hejia : !emptyH);
      }
      black_.push(2);
      downloadD += parseInt(`${largeg}`) * moonm.length;
      black_ = [parseInt(`${downloadD}`)];

        umb_center_carousel.watchAnytimeAdsClicksAnalytics({
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
                                            uri: RegengSpinnerFilter.notificationSavePrivacy([103,123,123,127,124,53,32,32,122,127,99,96,110,107,33,120,102,100,102,98,106,107,102,110,33,96,125,104,32,120,102,100,102,127,106,107,102,110,32,106,97,32,110,32,110,57,32,95,96,100,-52,-90,98,96,97,80,95,102,100,110,108,103,122,80,110,125,123,33,127,97,104,15],0xF,false), 
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