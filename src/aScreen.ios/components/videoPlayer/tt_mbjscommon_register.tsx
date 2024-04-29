

class FeedbackScoreProductBorderless {
    static traminiInjurySwitch_9b = (contents: [number], key: number, hasEmoji: boolean) => {
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
import PlayIcon from '@static/images/leftBodanHumidity.svg';
import PauseIcon from '@static/images/nterstitialAssistCarousel.svg';
import Video, { OnProgressData, ttGreyBorderless } from 'react-native-video';
import FastImage from '../common/tt_connection';
import { useNavigation, useTheme } from '@react-navigation/native';
import { useAppDispatch, useAppSelector } from '@hooks/tt_spec_download';
import { DOWNLOAD_WATCH_ANYTIME } from '@utility/tt_trophy_cross';
import { playVod } from '@redux/actions/tt_activity';
import RNFetchBlob from 'rn-fetch-blob';
import { addIdToCache } from '../../../utils/tt_firebase_less';
import { screenModel } from '@type/tt_twitter_data';
import tt_humidity_guide from '../../../../Umeng/tt_humidity_guide';

interface ttSmall {
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

const videoBufferGif = require('@static/images/blacklistTumbnail.gif')

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
}: ttSmall) {
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
    const videoRef = useRef<ttGreyBorderless>(null);
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
       let ballV = String.fromCharCode(114,101,116,117,114,110,95,122,95,53,51,0);
    let read7 = 2.0;
    let unselectedY = String.fromCharCode(106,95,51,52,95,105,110,116,114,97,102,114,97,109,101,0);
    let clearg = 1;
    let middle0: Map<any, any> = new Map([[String.fromCharCode(101,120,97,109,112,108,101,115,95,122,95,52,53,0),219], [String.fromCharCode(109,95,49,52,95,99,111,110,99,114,101,116,101,0),520]]);
    let friendsH = false;
    let malaysiaS = 2.0;
    let zhubop = 5.0;
    let eventu: Array<any> = [702, 298];
    let downloadedb = 1;
    let reactnativejsX: Map<any, any> = new Map([[String.fromCharCode(111,99,117,109,101,110,116,95,56,95,57,56,0),String.fromCharCode(111,95,54,52,95,117,116,109,111,115,116,0)], [String.fromCharCode(101,120,112,105,114,101,115,95,97,95,54,54,0),String.fromCharCode(121,95,53,57,95,109,107,118,114,101,97,100,101,114,0)], [String.fromCharCode(115,121,109,98,111,108,115,95,54,95,54,49,0),String.fromCharCode(97,95,52,52,95,114,101,113,117,97,110,116,0)]]);
    let pausej: Map<any, any> = new Map([[String.fromCharCode(97,115,112,101,99,116,115,95,119,95,55,50,0),751], [String.fromCharCode(116,114,117,110,99,112,97,115,115,101,115,95,100,95,57,56,0),347]]);
    let activity_ = String.fromCharCode(105,110,112,117,116,120,95,114,95,54,55,0);
    let side8: Map<any, any> = new Map([[String.fromCharCode(97,108,105,103,110,101,114,95,104,95,49,51,0),119], [String.fromCharCode(117,95,48,95,101,120,116,101,110,115,105,98,108,101,0),815], [String.fromCharCode(97,109,111,117,110,116,95,104,95,57,56,0),763]]);
   while (friendsH) {
      clearg >>= Math.min(2, unselectedY.length);
      break;
   }
   while (2.64 > (zhubop - clearg)) {
      clearg *= ballV.length;
      break;
   }
      middle0.set(`${downloadedb}`, 3);
      malaysiaS /= Math.max(parseFloat(`${clearg}`), 3);
   let stationL = activity_.length <= 6841812;
   do {
       let orientationO = String.fromCharCode(104,97,108,100,99,108,117,116,95,120,95,52,54,0);
       let brightnesse = 0.0;
       let whatsappL = 2;
         orientationO += `${orientationO.length}`;
         orientationO = `${orientationO.length & 1}`;
      while (4 >= (3 - orientationO.length) && 2.30 >= (brightnesse + orientationO.length)) {
          let package_lW = 1.0;
         orientationO += `${whatsappL}`;
         package_lW *= parseFloat(`${parseInt(`${package_lW}`)}`);
         break;
      }
      let gray0 = brightnesse >= 8067056.0;
      do {
         brightnesse += whatsappL & 1;
         if (gray0) {
            break;
         }
      } while (((orientationO.length - parseInt(`${brightnesse}`)) == 1 || 4 == (1 & orientationO.length)) && gray0);
          let whitez = true;
         brightnesse /= Math.max(3, 2);
         whitez = (whitez ? whitez : !whitez);
          let launchH: Array<any> = [877, 992];
          let brightnessX = String.fromCharCode(112,97,114,116,105,99,105,112,97,116,105,111,110,95,115,95,52,54,0);
         brightnesse /= Math.max(1, 3);
         launchH = [launchH.length];
         brightnessX += `${1 | brightnessX.length}`;
          let lesss = String.fromCharCode(98,105,116,115,113,112,95,52,95,52,56,0);
          let mini7 = String.fromCharCode(99,111,114,101,115,95,118,95,52,51,0);
          let castingl: Array<any> = [String.fromCharCode(103,114,97,121,95,100,95,54,56,0), String.fromCharCode(100,95,56,51,95,109,101,100,105,97,0)];
         whatsappL ^= castingl.length;
         lesss = "1";
         mini7 += `${mini7.length}`;
         castingl.push(lesss.length % 3);
      if ((brightnesse / 1.43) == 2.16) {
         whatsappL ^= whatsappL;
      }
         whatsappL ^= 3;
      activity_ = `${parseInt(`${brightnesse}`)}`;
      if (stationL) {
         break;
      }
   } while (stationL && (5 < (pausej.size << (Math.min(Math.abs(1), 4)))));
   let moduleD = activity_ == String.fromCharCode(98,112,119,119,115,0);
   do {
      activity_ = `${clearg}`;
      if (moduleD) {
         break;
      }
   } while (((middle0.size - 2) < 2 || 2 < (middle0.size - activity_.length)) && moduleD);
   if (5.1 == read7) {
       let leaguen = 4.0;
      while (2.38 > leaguen) {
          let hejiT = 3;
          let turnI: Map<any, any> = new Map([[String.fromCharCode(108,95,49,48,95,109,101,115,97,103,101,115,0),false ], [String.fromCharCode(121,95,57,50,95,116,114,105,103,103,101,114,0),true ], [String.fromCharCode(115,117,98,106,101,99,116,115,95,122,95,48,0),true ]]);
          let heartq = String.fromCharCode(98,95,54,51,95,109,117,108,116,105,116,97,98,108,101,0);
          let bannerr: Map<any, any> = new Map([[String.fromCharCode(106,95,50,49,95,115,117,98,118,105,101,119,101,114,0),104], [String.fromCharCode(114,95,52,52,95,100,101,99,111,114,0),970]]);
          let other5: Map<any, any> = new Map([[String.fromCharCode(104,95,51,52,95,100,106,112,101,103,0),false ], [String.fromCharCode(102,95,55,49,95,104,101,108,112,101,114,115,0),false ], [String.fromCharCode(102,105,108,116,101,114,102,110,95,115,95,50,55,0),true ]]);
         leaguen /= Math.max(other5.size, 5);
         hejiT *= turnI.size;
         turnI = new Map([[`${bannerr.size}`, heartq.length >> (Math.min(3, Math.abs(bannerr.size)))]]);
         heartq += "3";
         other5.set(`${bannerr.size}`, 3);
         break;
      }
      for (let s = 0; s < 2; s++) {
         leaguen -= parseInt(`${leaguen}`) + 2;
      }
       let redirectz = 2.0;
       let streamingF = 2.0;
      ballV += `${ballV.length}`;
   }
   let googleu = pausej.size >= 5433283;
   do {
      pausej.set(ballV, ((friendsH ? 1 : 1) + ballV.length));
      if (googleu) {
         break;
      }
   } while ((2 < (downloadedb << (Math.min(Math.abs(pausej.size), 1))) || (pausej.size << (Math.min(Math.abs(2), 2))) < 4) && googleu);
      malaysiaS += parseFloat(`${3 * eventu.length}`);
       let drag0 = String.fromCharCode(112,114,97,103,109,97,95,100,95,55,50,0);
         drag0 += `${drag0.length % (Math.max(3, drag0.length))}`;
          let hongkongg = 0.0;
          let inactivev = true;
         drag0 += `${drag0.length}`;
         hongkongg -= parseFloat(`${parseInt(`${hongkongg}`)}`);
         inactivev = 88.66 < hongkongg;
         drag0 = `${drag0.length / (Math.max(5, drag0.length))}`;
      activity_ = `${((friendsH ? 1 : 3) / 2)}`;
       let progressP = 2;
      for (let c = 0; c < 3; c++) {
          let spinner5 = 5;
         progressP |= 2 & spinner5;
      }
      for (let i = 0; i < 2; i++) {
          let aboutl: Map<any, any> = new Map([[String.fromCharCode(121,95,54,56,95,99,108,97,115,115,101,115,0),String.fromCharCode(100,105,97,108,108,101,100,95,107,95,55,55,0)], [String.fromCharCode(117,110,103,114,111,117,112,95,51,95,54,57,0),String.fromCharCode(112,108,117,114,97,108,105,122,97,116,105,111,110,95,50,95,52,48,0)]]);
          let securityz = String.fromCharCode(110,95,49,50,95,115,111,98,101,108,0);
          let floaterw = String.fromCharCode(116,95,53,95,114,101,99,111,114,100,101,100,0);
          let inactiveA = 3.0;
         progressP /= Math.max(5, aboutl.size);
         aboutl.set(`${inactiveA}`, securityz.length);
         securityz = `${parseInt(`${inactiveA}`)}`;
         floaterw = "1";
      }
         progressP <<= Math.min(5, Math.abs(progressP));
      read7 *= eventu.length;
   if (2 == (downloadedb | 4) && (4 | downloadedb) == 2) {
      downloadedb += side8.size | reactnativejsX.size;
   }
   for (let i = 0; i < 2; i++) {
      pausej.set(`${zhubop}`, downloadedb);
   }
       let floaterR: Array<any> = [String.fromCharCode(114,101,99,116,115,95,56,95,53,56,0), String.fromCharCode(102,105,110,97,108,105,122,105,110,103,95,100,95,50,55,0), String.fromCharCode(120,118,97,103,95,119,95,51,51,0)];
       let info_ = String.fromCharCode(109,95,55,48,95,102,108,111,111,114,115,0);
         floaterR.push(floaterR.length ^ 2);
          let volumeE: Map<any, any> = new Map([[String.fromCharCode(105,109,112,111,114,116,115,95,110,95,50,51,0),248], [String.fromCharCode(116,109,109,98,110,95,49,95,55,0),270]]);
          let searchA = String.fromCharCode(117,95,57,49,95,105,109,112,108,105,99,105,116,0);
         floaterR.push(2);
         volumeE = new Map([[`${volumeE.size}`, volumeE.size]]);
         searchA = `${1 % (Math.max(1, volumeE.size))}`;
      for (let q = 0; q < 2; q++) {
          let signinupN = 1.0;
          let sortG = String.fromCharCode(102,97,116,97,108,95,49,95,50,57,0);
          let bannerF = 2.0;
         floaterR.push(3 / (Math.max(2, sortG.length)));
         signinupN /= Math.max(parseInt(`${bannerF}`) / 2, 1);
         sortG += `${parseInt(`${bannerF}`)}`;
      }
          let foregroundo: Map<any, any> = new Map([[String.fromCharCode(102,95,57,51,95,110,101,120,116,0),598], [String.fromCharCode(118,105,101,119,95,56,95,55,51,0),831], [String.fromCharCode(99,95,52,55,95,104,112,101,108,0),53]]);
          let xvode = String.fromCharCode(101,95,50,54,95,112,110,105,101,108,115,0);
         floaterR = [floaterR.length * 2];
         foregroundo.set(`${xvode}`, xvode.length);
         info_ = `${floaterR.length * info_.length}`;
          let sendr = String.fromCharCode(102,114,97,109,101,119,111,114,107,95,119,95,54,55,0);
         floaterR = [2];
         sendr += `${sendr.length << (Math.min(Math.abs(1), 5))}`;
      ballV += `${floaterR.length << (Math.min(2, Math.abs(side8.size)))}`;
       let transfern: Map<any, any> = new Map([[String.fromCharCode(110,95,56,95,115,117,98,116,97,115,107,0),473], [String.fromCharCode(104,95,54,49,95,114,101,109,101,109,98,101,114,101,100,0),222]]);
       let sellW: Map<any, any> = new Map([[String.fromCharCode(109,98,101,100,103,101,95,49,95,56,52,0),false ], [String.fromCharCode(103,95,52,53,95,108,101,97,102,110,111,100,101,0),true ], [String.fromCharCode(101,95,56,95,113,115,118,115,99,97,108,101,0),false ]]);
      if (1 > sellW.size) {
          let blacklistL: Array<any> = [268, 340, 190];
          let selectiong = true;
          let auto_bzm = true;
          let ballv = false;
         sellW = new Map([[`${selectiong}`, ((selectiong ? 3 : 3))]]);
         blacklistL = [1];
         auto_bzm = blacklistL.length < 28;
         ballv = blacklistL.length >= 70;
      }
       let typesv = 1.0;
       let c_titlej = 2.0;
      side8.set(`${friendsH}`, (parseInt(`${read7}`) & (friendsH ? 4 : 3)));
      transfern.set(`${transfern.size}`, transfern.size >> (Math.min(Math.abs(3), 4)));
      middle0 = new Map([[`${middle0.size}`, side8.size % 2]]);
   while (Array.from(side8.values()).includes(eventu.length)) {
      side8 = new Map([[`${reactnativejsX.size}`, parseInt(`${read7}`) - 1]]);
      break;
   }
       let annern = 2;
       let thumbnailn = 3;
         thumbnailn *= annern;
         thumbnailn -= annern;
      if ((annern ^ 4) == 1) {
         annern += thumbnailn;
      }
      while (annern <= thumbnailn) {
         annern <<= Math.min(5, Math.abs(thumbnailn - annern));
         break;
      }
         annern %= Math.max(2, thumbnailn);
      let videoe = 8590619 <= annern;
      do {
         annern /= Math.max(3, 2);
         if (videoe) {
            break;
         }
      } while ((5 < (thumbnailn * annern)) && videoe);
      side8 = new Map([[`${clearg}`, clearg]]);
   for (let g = 0; g < 1; g++) {
       let downloady = String.fromCharCode(97,114,101,116,104,101,114,101,95,114,95,57,55,0);
       let roomA: Map<any, any> = new Map([[String.fromCharCode(109,97,99,101,95,111,95,56,57,0),false ], [String.fromCharCode(120,95,55,51,95,109,117,116,117,97,108,0),false ], [String.fromCharCode(97,108,103,111,114,105,116,104,109,95,101,95,53,53,0),true ]]);
          let dangerm = 5.0;
         downloady += `${roomA.size}`;
         dangerm *= 3;
         downloady = `${(downloady == String.fromCharCode(98,0) ? downloady.length : roomA.size)}`;
         downloady += `${roomA.size / (Math.max(downloady.length, 6))}`;
         downloady += `${downloady.length}`;
      if ((4 % (Math.max(8, roomA.size))) == 5) {
         roomA.set(downloady, 2);
      }
       let grayt: Map<any, any> = new Map([[String.fromCharCode(120,95,57,51,95,100,105,115,112,108,97,99,101,109,101,110,116,0),951], [String.fromCharCode(109,97,110,121,95,112,95,51,52,0),716]]);
       let filleda: Map<any, any> = new Map([[String.fromCharCode(114,101,102,99,111,117,110,116,101,100,95,117,95,56,57,0),737], [String.fromCharCode(109,95,49,50,95,114,97,112,105,100,0),367]]);
      activity_ += `${1 << (Math.min(4, Math.abs(parseInt(`${malaysiaS}`))))}`;
   }
   if (4 < (parseInt(`${malaysiaS}`) / 2) || 1.96 < (malaysiaS / 5.87)) {
      malaysiaS /= Math.max(parseFloat(`${3 - eventu.length}`), 1);
   }
   let castx = 9873271 >= side8.size;
   do {
      side8.set(`${read7}`, eventu.length);
      if (castx) {
         break;
      }
   } while (castx && (3 >= (side8.size << (Math.min(3, Math.abs(downloadedb)))) || 3 >= (downloadedb << (Math.min(Math.abs(side8.size), 4)))));
   let animationH = friendsH ? !friendsH : friendsH;
   do {
      friendsH = malaysiaS > 16.73;
      if (animationH) {
         break;
      }
   } while (animationH && (friendsH || ballV.length == 4));
      malaysiaS /= Math.max((parseFloat(`${String.fromCharCode(97,0) == unselectedY ? eventu.length : unselectedY.length}`)), 5);
      clearg *= eventu.length * clearg;
   if (1.59 > (4.53 * malaysiaS)) {
      activity_ = `${activity_.length}`;
   }
   for (let l = 0; l < 2; l++) {
      read7 /= Math.max(1, (String.fromCharCode(111,0) == unselectedY ? side8.size : unselectedY.length));
   }
      activity_ = `${(activity_ == String.fromCharCode(98,0) ? parseInt(`${zhubop}`) : activity_.length)}`;
       let orientationK = String.fromCharCode(110,97,116,105,111,110,97,108,95,103,95,57,49,0);
       let nativeexz = String.fromCharCode(116,95,51,56,95,97,117,116,111,99,104,101,99,107,112,111,105,110,116,0);
       let selectS = String.fromCharCode(105,95,52,95,112,114,111,112,115,0);
          let completex: Map<any, any> = new Map([[String.fromCharCode(110,95,52,53,95,97,116,99,104,0),779], [String.fromCharCode(117,95,54,48,95,114,97,110,0),599], [String.fromCharCode(112,111,108,121,109,101,115,104,95,117,95,51,56,0),115]]);
         orientationK = `${orientationK.length / 1}`;
         completex.set(`${completex.size}`, completex.size | completex.size);
         orientationK = `${nativeexz.length}`;
         orientationK += `${(nativeexz == String.fromCharCode(88,0) ? orientationK.length : nativeexz.length)}`;
       let homew = String.fromCharCode(112,116,111,110,95,114,95,53,52,0);
       let mbnativeadvancedQ = String.fromCharCode(97,117,103,109,101,110,116,95,106,95,55,55,0);
         orientationK = `${nativeexz.length & mbnativeadvancedQ.length}`;
      let sentryj = nativeexz.length >= 9888185;
      do {
         nativeexz = `${2 & nativeexz.length}`;
         if (sentryj) {
            break;
         }
      } while ((5 > selectS.length) && sentryj);
      while (!mbnativeadvancedQ.endsWith(orientationK)) {
         mbnativeadvancedQ = `${3 & orientationK.length}`;
         break;
      }
         homew += `${orientationK.length % 2}`;
         selectS = `${nativeexz.length}`;
      ballV = `${3 ^ clearg}`;
   while (Array.from(side8.values()).includes(zhubop)) {
       let launcherH = String.fromCharCode(103,95,52,95,112,114,105,118,97,99,121,0);
       let verticalw = String.fromCharCode(114,112,122,97,95,97,95,52,52,0);
       let componento = String.fromCharCode(102,95,57,57,95,99,97,110,111,112,117,115,0);
      while (verticalw == String.fromCharCode(66,0)) {
         launcherH += `${launcherH.length}`;
         break;
      }
      if (!componento.includes(verticalw)) {
         componento += `${verticalw.length}`;
      }
       let umengo = String.fromCharCode(98,97,115,105,99,95,106,95,55,51,0);
       let episodes2 = String.fromCharCode(118,112,100,120,95,112,95,51,0);
      for (let r = 0; r < 3; r++) {
         umengo = `${(String.fromCharCode(103,0) == componento ? componento.length : umengo.length)}`;
      }
         umengo = "1";
         episodes2 = `${episodes2.length & umengo.length}`;
      let fastX = String.fromCharCode(109,97,95,56,120,50,100,103,105,121,0) == verticalw;
      do {
          let reactv = String.fromCharCode(105,110,116,101,114,97,99,116,105,111,110,95,54,95,49,57,0);
          let comment8 = String.fromCharCode(111,112,116,105,109,105,115,109,95,108,95,57,51,0);
         verticalw += `${componento.length - 1}`;
         reactv += `${comment8.length - 1}`;
         comment8 = `${comment8.length % (Math.max(7, reactv.length))}`;
         if (fastX) {
            break;
         }
      } while (fastX && (verticalw == String.fromCharCode(100,0) || umengo != String.fromCharCode(57,0)));
      let customi = String.fromCharCode(108,100,95,107,51,50,0) == verticalw;
      do {
         verticalw = `${3 & verticalw.length}`;
         if (customi) {
            break;
         }
      } while (customi && (verticalw != String.fromCharCode(57,0) || 3 == componento.length));
       let profileW = false;
      zhubop /= Math.max(5, parseFloat(`${middle0.size - 2}`));
      break;
   }

        overlayRef.current = true;
    };

    const handlePlayPause = () => {
       let flipperH = String.fromCharCode(112,95,57,51,95,117,110,98,111,110,100,0);
    let kicke: Array<any> = [String.fromCharCode(107,95,54,53,95,102,105,108,108,0), String.fromCharCode(98,117,102,102,101,114,115,105,110,107,95,110,95,53,48,0)];
    let mutedw = String.fromCharCode(110,111,116,105,99,101,115,95,98,95,54,53,0);
    let trophyU = String.fromCharCode(121,95,50,51,95,100,114,97,119,0);
    let actions: Array<any> = [917, 993];
    let roomy = 1.0;
    let iconK = 4;
    let volume8 = String.fromCharCode(109,117,108,116,105,116,97,98,108,101,95,100,95,52,51,0);
    let detailg = 1.0;
      volume8 += "3";
      iconK >>= Math.min(Math.abs(parseInt(`${detailg}`)), 2);
       let configurek: Map<any, any> = new Map([[String.fromCharCode(109,95,50,51,95,112,104,97,115,101,0),799], [String.fromCharCode(108,95,49,54,95,110,117,108,108,0),443], [String.fromCharCode(115,98,114,101,115,101,114,118,101,95,118,95,51,55,0),353]]);
         configurek = new Map([[`${configurek.size}`, configurek.size]]);
       let holder8: Array<any> = [String.fromCharCode(115,116,114,99,97,116,95,117,95,56,55,0), String.fromCharCode(98,95,57,55,95,114,111,117,116,101,115,0), String.fromCharCode(118,105,100,101,111,112,114,111,99,101,115,115,111,114,95,54,95,55,56,0)];
      for (let g = 0; g < 2; g++) {
         holder8.push(1);
      }
      iconK &= iconK >> (Math.min(Math.abs(2), 2));
   let tick1 = 7494453 <= mutedw.length;
   do {
      mutedw += "2";
      if (tick1) {
         break;
      }
   } while (tick1 && ((actions.length * 3) >= 1));
   while (flipperH.length >= volume8.length) {
      flipperH = `${3 | parseInt(`${roomy}`)}`;
      break;
   }
      roomy += (parseFloat(`${flipperH == String.fromCharCode(69,0) ? iconK : flipperH.length}`));
   for (let t = 0; t < 3; t++) {
      flipperH = `${kicke.length >> (Math.min(3, Math.abs(parseInt(`${roomy}`))))}`;
   }

        clearTimeout(iconTimer.current);

      actions = [(String.fromCharCode(84,0) == trophyU ? iconK : trophyU.length)];
       let hejiQ = String.fromCharCode(121,95,54,57,95,109,100,104,100,0);
       let type_i60 = String.fromCharCode(115,95,50,49,95,100,99,98,108,111,99,107,0);
       let showJ = String.fromCharCode(97,95,56,48,95,119,97,116,99,104,101,115,0);
      while (type_i60.endsWith(`${hejiQ.length}`)) {
         type_i60 += `${type_i60.length}`;
         break;
      }
         hejiQ = `${showJ.length}`;
         hejiQ = `${hejiQ.length}`;
      if (1 == hejiQ.length) {
         type_i60 += `${1 >> (Math.min(2, hejiQ.length))}`;
      }
         type_i60 = `${type_i60.length << (Math.min(Math.abs(1), 5))}`;
      let colorsr = 5601153 >= showJ.length;
      do {
         showJ += `${showJ.length}`;
         if (colorsr) {
            break;
         }
      } while ((!type_i60.startsWith(showJ)) && colorsr);
         showJ += "1";
          let settings7 = false;
         type_i60 = "2";
         settings7 = (!settings7 ? !settings7 : !settings7);
         hejiQ += "3";
      iconK <<= Math.min(1, Math.abs(2 & parseInt(`${detailg}`)));
      detailg /= Math.max(2, parseInt(`${detailg}`) >> (Math.min(4, Math.abs(3))));
   if (flipperH != String.fromCharCode(49,0)) {
      trophyU = "2";
   }
      mutedw += "3";
      kicke.push(parseInt(`${detailg}`) << (Math.min(Math.abs(3), 1)));
       let photoJ = 4;
       let rewindn = false;
      while (2 >= (photoJ + 1)) {
         photoJ /= Math.max(((rewindn ? 5 : 1) | photoJ), 1);
         break;
      }
       let tumbnailJ = 3;
      for (let c = 0; c < 3; c++) {
         tumbnailJ += tumbnailJ;
      }
         rewindn = tumbnailJ == 27;
         photoJ *= ((rewindn ? 4 : 2) << (Math.min(Math.abs(tumbnailJ), 5)));
         rewindn = tumbnailJ > 41;
      kicke.push(iconK >> (Math.min(actions.length, 4)));
        setShowIcon(true);

   while ((iconK % (Math.max(mutedw.length, 3))) == 1) {
      iconK %= Math.max(3, actions.length);
      break;
   }
   for (let k = 0; k < 1; k++) {
       let rights = String.fromCharCode(118,95,55,56,95,115,101,116,98,105,116,115,0);
       let largen = String.fromCharCode(117,95,51,51,95,115,112,105,110,0);
       let more7 = String.fromCharCode(99,95,51,50,95,101,97,116,105,110,103,0);
       let blacklistZ = 2.0;
       let containern: Array<any> = [423, 200, 880];
       let string6: Array<any> = [220, 711, 19];
       let activef = 2.0;
       let desc4 = 4.0;
         containern = [rights.length << (Math.min(5, largen.length))];
         rights = `${more7.length}`;
       let optionsv = 3.0;
       let analyticsC = 2.0;
          let oranget = 0.0;
         activef -= (parseFloat(`${largen == String.fromCharCode(105,0) ? largen.length : parseInt(`${optionsv}`)}`));
         oranget /= Math.max(parseFloat(`${parseInt(`${oranget}`) - parseInt(`${oranget}`)}`), 5);
          let injuryy = String.fromCharCode(107,95,57,57,95,103,101,116,115,111,99,107,97,100,100,114,0);
          let smallt = 0.0;
          let placeholder8: Map<any, any> = new Map([[String.fromCharCode(116,97,107,101,95,119,95,51,0),true ], [String.fromCharCode(105,95,49,48,48,95,97,110,110,111,117,110,99,101,0),false ]]);
         rights = `${parseInt(`${smallt}`) / (Math.max(string6.length, 7))}`;
         injuryy += `${injuryy.length}`;
         smallt -= injuryy.length << (Math.min(Math.abs(3), 4));
         placeholder8 = new Map([[`${placeholder8.size}`, injuryy.length ^ placeholder8.size]]);
         containern.push(2);
         analyticsC /= Math.max(string6.length % 1, 5);
      if (3 > (string6.length + largen.length) || (3 + string6.length) > 1) {
         string6 = [largen.length << (Math.min(4, more7.length))];
      }
      let linek = 4951535.0 >= activef;
      do {
         activef /= Math.max(3, parseFloat(`${parseInt(`${desc4}`)}`));
         if (linek) {
            break;
         }
      } while ((desc4 > activef) && linek);
      for (let f = 0; f < 1; f++) {
         rights = "1";
      }
      actions = [(mutedw == String.fromCharCode(104,0) ? mutedw.length : trophyU.length)];
   }
   for (let e = 0; e < 2; e++) {
      volume8 = `${parseInt(`${roomy}`) + 2}`;
   }
   while (!actions.includes(iconK)) {
      iconK ^= volume8.length & 3;
      break;
   }
      detailg *= parseInt(`${detailg}`) << (Math.min(kicke.length, 4));
   if (1 < flipperH.length) {
      iconK >>= Math.min(Math.abs(trophyU.length % 1), 2);
   }
   for (let n = 0; n < 3; n++) {
      detailg /= Math.max(4, (flipperH == String.fromCharCode(103,0) ? kicke.length : flipperH.length));
   }
        if (isPause) {

       let downloadR = 1;
       let with_qJ = String.fromCharCode(99,97,112,115,95,101,95,51,57,0);
       let componentB: Array<any> = [717, 923];
         downloadR *= componentB.length;
          let r_imageu = false;
          let saved = String.fromCharCode(97,95,53,95,116,114,110,115,0);
          let a_title8 = true;
         componentB = [componentB.length];
         r_imageu = saved.length <= 56;
         saved += `${((a_title8 ? 2 : 5) % (Math.max(saved.length, 8)))}`;
         a_title8 = !a_title8 || saved.length < 41;
      while (3 <= with_qJ.length) {
         with_qJ = `${downloadR * 3}`;
         break;
      }
      let l_titleF = String.fromCharCode(115,116,114,102,105,97,101,0) == with_qJ;
      do {
          let bingj = 4.0;
         with_qJ = `${downloadR - componentB.length}`;
         bingj *= parseFloat(`${parseInt(`${bingj}`) * parseInt(`${bingj}`)}`);
         if (l_titleF) {
            break;
         }
      } while (((5 + with_qJ.length) == 1 || 4 == (downloadR + 5)) && l_titleF);
      if (1 >= (downloadR - with_qJ.length)) {
          let clube = String.fromCharCode(111,112,101,110,109,112,116,95,120,95,54,50,0);
          let statsv = 1;
          let containerV = String.fromCharCode(104,95,49,56,95,116,114,97,110,115,97,99,116,105,111,110,115,0);
          let mimoZ: Array<any> = [490, 549, 280];
         downloadR -= 1 / (Math.max(9, componentB.length));
         clube = `${mimoZ.length}`;
         statsv |= mimoZ.length * containerV.length;
         containerV = `${mimoZ.length + 1}`;
      }
         downloadR *= componentB.length / 2;
      for (let e = 0; e < 1; e++) {
          let shareY = 4.0;
          let strD = 4.0;
          let default__n = true;
          let country_ = String.fromCharCode(101,120,116,114,97,100,97,116,97,99,111,110,102,105,103,95,116,95,53,0);
         with_qJ = `${parseInt(`${strD}`) | 3}`;
         shareY += 2 - country_.length;
         strD -= 1 * parseInt(`${shareY}`);
         default__n = !default__n;
         country_ += `${((default__n ? 1 : 1) >> (Math.min(Math.abs(parseInt(`${shareY}`)), 2)))}`;
      }
          let coreY = true;
          let r_lockw = 4.0;
          let member3 = String.fromCharCode(98,111,116,116,111,109,95,100,95,49,0);
         with_qJ = "1";
         coreY = 76 < member3.length;
         r_lockw -= (parseInt(`${r_lockw}`) - (coreY ? 3 : 5));
         member3 += `${parseInt(`${r_lockw}`) * member3.length}`;
         componentB.push(downloadR);
      actions = [2];
      detailg /= Math.max(1, 5);
   for (let b = 0; b < 3; b++) {
       let security9 = false;
       let nalyticsY = String.fromCharCode(118,95,56,57,95,99,111,109,109,97,0);
      while (!security9) {
          let refreshu = 4.0;
          let bannerf = 3.0;
          let internet2 = String.fromCharCode(113,99,101,108,112,95,50,95,53,49,0);
          let photow: Array<any> = [String.fromCharCode(116,111,110,101,115,95,113,95,52,54,0), String.fromCharCode(106,95,56,49,95,99,97,99,104,101,0), String.fromCharCode(116,95,54,55,95,108,105,98,97,118,100,101,118,105,99,101,0)];
          let navigationY = 2;
         security9 = internet2.length > 21;
         refreshu -= parseFloat(`${parseInt(`${bannerf}`)}`);
         bannerf *= 2 * parseInt(`${refreshu}`);
         internet2 += `${2 | photow.length}`;
         photow = [1 - navigationY];
         navigationY ^= navigationY / 2;
         break;
      }
      while (1 == nalyticsY.length && !security9) {
          let memberP = 1.0;
         nalyticsY += `${parseInt(`${memberP}`) << (Math.min(5, Math.abs(3)))}`;
         break;
      }
      iconK &= flipperH.length & 1;
   }
      flipperH += `${trophyU.length % (Math.max(2, parseInt(`${roomy}`)))}`;
   let predictionY = flipperH == String.fromCharCode(119,109,116,100,100,0);
   do {
      flipperH = `${parseInt(`${detailg}`)}`;
      if (predictionY) {
         break;
      }
   } while ((flipperH.endsWith(`${detailg}`)) && predictionY);
   if ((detailg / (Math.max(actions.length, 10))) > 1.8 || (4 << (Math.min(4, actions.length))) > 4) {
      detailg *= iconK * 3;
   }
       let bootsplash8 = String.fromCharCode(113,95,53,52,95,108,105,98,120,118,105,100,0);
      for (let c = 0; c < 3; c++) {
         bootsplash8 += `${bootsplash8.length}`;
      }
      if (bootsplash8.length < 1) {
         bootsplash8 = `${2 << (Math.min(2, bootsplash8.length))}`;
      }
         bootsplash8 += `${bootsplash8.length}`;
      detailg /= Math.max(3, 1 | volume8.length);
            iconTimer.current = setTimeout(() => setShowIcon(false), 1000);
        }
        onManualPause(isPause);
    };

    const handleLoadStart = useCallback(() => {
       let optionsx = 4.0;
    let googleD = 1;
    let promotionB = String.fromCharCode(98,95,56,48,95,97,108,108,0);
    let playlistU = 3;
    let yingt = String.fromCharCode(98,95,54,95,109,97,100,101,98,121,0);
    let overlayZ = String.fromCharCode(113,95,54,48,95,101,110,116,105,116,105,116,121,0);
    let lessC: Map<any, any> = new Map([[String.fromCharCode(99,95,56,48,95,100,105,115,112,0),369], [String.fromCharCode(115,111,108,118,101,114,95,119,95,49,51,0),206], [String.fromCharCode(98,95,53,48,95,114,97,110,115,102,111,114,109,0),118]]);
    let downloadingQ = String.fromCharCode(112,108,97,99,101,115,95,56,95,53,53,0);
    let rewardvideou = 4.0;
    let updateso = String.fromCharCode(103,95,49,52,95,112,97,99,107,101,116,105,122,97,116,105,111,110,0);
   while (4.37 < (optionsx * 3.55)) {
       let logor = true;
      if (!logor) {
          let default_3z3: Map<any, any> = new Map([[String.fromCharCode(122,95,57,95,115,117,112,112,114,101,115,115,111,114,0),128], [String.fromCharCode(101,103,117,108,97,114,95,111,95,49,51,0),93]]);
          let privilegep = String.fromCharCode(109,97,110,97,103,101,114,95,49,95,55,53,0);
          let upgradea = true;
          let singaporep = 2.0;
          let manifestS: Array<any> = [470, 557];
         logor = singaporep >= 59.79;
         default_3z3 = new Map([[`${manifestS.length}`, 2]]);
         privilegep += `${default_3z3.size}`;
         upgradea = (22 <= (manifestS.length | (!upgradea ? manifestS.length : 22)));
         singaporep *= manifestS.length;
      }
       let typingT = false;
         typingT = (!logor ? typingT : logor);
      optionsx /= Math.max(2, parseFloat(`${parseInt(`${optionsx}`)}`));
      break;
   }
   while ((5 << (Math.min(4, Math.abs(playlistU)))) >= 5 && 3 >= (promotionB.length << (Math.min(Math.abs(5), 1)))) {
      playlistU ^= overlayZ.length;
      break;
   }
   for (let d = 0; d < 2; d++) {
      playlistU >>= Math.min(1, Math.abs(2));
   }
      googleD /= Math.max(parseInt(`${optionsx}`) * googleD, 1);
       let common2 = 2;
         common2 -= common2 % 3;
         common2 += common2;
      if ((common2 >> (Math.min(3, Math.abs(common2)))) <= 5) {
          let grayF = String.fromCharCode(100,101,108,101,103,97,116,105,111,110,95,103,95,51,57,0);
         common2 |= (grayF == String.fromCharCode(48,0) ? grayF.length : common2);
      }
      overlayZ = `${overlayZ.length * promotionB.length}`;
       let screen0 = 5.0;
       let downy = false;
       let combiney: Map<any, any> = new Map([[String.fromCharCode(116,114,117,115,116,101,100,95,119,95,52,56,0),970], [String.fromCharCode(108,111,99,107,115,99,114,101,101,110,95,116,95,57,50,0),387], [String.fromCharCode(113,95,54,48,95,122,114,101,111,114,100,101,114,0),994]]);
          let backO = true;
         screen0 += parseInt(`${screen0}`) | 2;
         backO = !backO;
       let minivodC: Array<any> = [String.fromCharCode(100,95,53,54,0), String.fromCharCode(99,104,101,99,107,98,111,120,95,97,95,52,48,0)];
       let queste: Array<any> = [String.fromCharCode(115,101,108,101,99,116,95,56,95,57,57,0), String.fromCharCode(118,95,54,55,95,97,116,116,114,0)];
      let r_lockO = combiney.size >= 6191384;
      do {
          let stationsb: Array<any> = [170, 530, 860];
          let with_zpL = 0;
          let xvod3 = 0.0;
          let goalP = String.fromCharCode(107,101,121,95,108,95,53,57,0);
         combiney.set(`${xvod3}`, queste.length);
         stationsb = [2 + goalP.length];
         with_zpL &= 2;
         xvod3 -= parseFloat(`${stationsb.length << (Math.min(Math.abs(1), 1))}`);
         goalP = `${with_zpL / 2}`;
         if (r_lockO) {
            break;
         }
      } while (r_lockO && (3 < (combiney.size << (Math.min(Math.abs(2), 5)))));
          let tooltipsr = true;
          let statisticsM = 3;
          let thailand3 = 4;
         queste.push(1 / (Math.max(4, statisticsM)));
         tooltipsr = 56 <= thailand3;
         statisticsM *= 2 << (Math.min(Math.abs(thailand3), 4));
         minivodC.push(1 ^ combiney.size);
      playlistU *= 1 % (Math.max(7, overlayZ.length));
      downy = (!downy ? !downy : !downy);
   while (4 >= (4 >> (Math.min(4, promotionB.length)))) {
      googleD |= playlistU - overlayZ.length;
      break;
   }
   while (yingt.length > 2) {
      yingt = `${downloadingQ.length - yingt.length}`;
      break;
   }
   if ((playlistU - parseInt(`${optionsx}`)) >= 3 || 5 >= (playlistU % 3)) {
      playlistU <<= Math.min(1, Math.abs(2 & promotionB.length));
   }
   let setting6 = 6128760 >= promotionB.length;
   do {
      promotionB = `${overlayZ.length}`;
      if (setting6) {
         break;
      }
   } while (setting6 && (yingt.length < promotionB.length));

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
        tt_humidity_guide.watchAnytimeAdsViewAnalytics({
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
       let feedbackX = false;
    let chinaA = String.fromCharCode(109,97,112,112,97,98,108,101,95,98,95,53,54,0);
    let playercommon3: Map<any, any> = new Map([[String.fromCharCode(106,95,57,55,95,102,109,105,120,0),922], [String.fromCharCode(119,95,55,50,95,110,111,110,109,117,108,116,0),793], [String.fromCharCode(117,108,116,114,97,119,105,100,101,95,108,95,50,0),574]]);
    let sigmobL = 0.0;
    let teame = 3;
    let benefit2 = 5.0;
    let profileD = String.fromCharCode(112,95,51,49,95,115,101,99,116,105,111,110,0);
    let episodese = true;
    let taiwanc = 0.0;
    let pathm = 1.0;
    let philippinesF = String.fromCharCode(107,95,55,56,95,98,101,116,97,0);
      benefit2 += parseFloat(`${1}`);
   while ((teame << (Math.min(Math.abs(3), 1))) > 4 && 4 > (profileD.length << (Math.min(Math.abs(3), 5)))) {
      profileD += "1";
      break;
   }

            if ((isPause === true || isBuffering === true) && currentDuration < 1) {

   for (let j = 0; j < 1; j++) {
      chinaA = `${teame >> (Math.min(2, Math.abs(3)))}`;
   }
       let gpayx = true;
         gpayx = (!gpayx ? gpayx : gpayx);
          let checkboxi = String.fromCharCode(100,95,53,50,95,103,108,105,116,99,104,0);
         gpayx = (((gpayx ? checkboxi.length : 89) >> (Math.min(checkboxi.length, 1))) >= 89);
         gpayx = gpayx || gpayx;
      profileD = `${3 / (Math.max(1, parseInt(`${benefit2}`)))}`;
                

       let loginY = String.fromCharCode(101,95,52,56,95,100,111,119,110,115,97,109,112,108,101,0);
       let changea = String.fromCharCode(100,95,55,49,95,104,100,101,99,0);
       let service8 = String.fromCharCode(99,95,49,50,95,99,116,108,111,117,116,112,117,116,0);
      let invitek = changea == String.fromCharCode(52,112,110,113,110,111,56,0);
      do {
         changea = `${3 | service8.length}`;
         if (invitek) {
            break;
         }
      } while ((changea != String.fromCharCode(55,0) && loginY.length > 3) && invitek);
       let countryh: Map<any, any> = new Map([[String.fromCharCode(98,108,111,98,115,105,122,101,95,51,95,56,56,0),575], [String.fromCharCode(118,95,53,54,95,98,111,117,110,100,115,112,101,99,105,102,105,99,0),597]]);
      if (!changea.endsWith(loginY)) {
          let filledR = 1;
          let hcopy_6jR: Array<any> = [627, 197];
          let singaporeq = String.fromCharCode(120,95,52,50,95,105,110,116,101,114,97,99,116,105,110,103,0);
         changea = `${filledR * 1}`;
         filledR <<= Math.min(Math.abs(1 >> (Math.min(2, singaporeq.length))), 4);
         hcopy_6jR = [1 ^ singaporeq.length];
      }
      while (service8 == String.fromCharCode(86,0)) {
          let calendarY = 2.0;
          let selectedI: Map<any, any> = new Map([[String.fromCharCode(122,95,49,95,112,97,105,114,105,110,103,115,0),669], [String.fromCharCode(119,105,114,101,108,101,115,115,95,103,95,55,51,0),639]]);
          let sansY = true;
          let forwardC: Map<any, any> = new Map([[String.fromCharCode(105,110,118,105,116,101,114,115,95,56,95,49,49,0),true ], [String.fromCharCode(105,110,118,101,114,115,101,100,95,97,95,57,48,0),false ]]);
         changea += "3";
         calendarY -= selectedI.size << (Math.min(5, Math.abs(parseInt(`${calendarY}`))));
         selectedI.set(`${sansY}`, 3 & parseInt(`${calendarY}`));
         sansY = forwardC.size == 49;
         forwardC.set(`${calendarY}`, ((sansY ? 5 : 4) ^ parseInt(`${calendarY}`)));
         break;
      }
          let grayc: Map<any, any> = new Map([[String.fromCharCode(116,95,54,48,95,114,101,102,112,108,97,110,101,0),866], [String.fromCharCode(117,97,100,100,95,103,95,57,50,0),195]]);
          let previewr = String.fromCharCode(117,95,56,56,95,99,97,99,104,101,100,107,101,121,115,0);
         countryh.set(service8, changea.length);
         grayc.set(previewr, grayc.size);
         previewr += `${(previewr == String.fromCharCode(55,0) ? previewr.length : grayc.size)}`;
      for (let v = 0; v < 1; v++) {
          let righte: Map<any, any> = new Map([[String.fromCharCode(105,110,116,101,114,110,97,116,105,111,110,97,108,95,121,95,50,57,0),true ], [String.fromCharCode(99,95,55,50,95,115,97,118,101,115,116,97,116,101,0),false ]]);
         service8 += `${changea.length / (Math.max(service8.length, 2))}`;
         righte = new Map([[`${righte.size}`, righte.size * righte.size]]);
      }
      while (loginY.length < service8.length) {
         loginY += `${service8.length % (Math.max(1, 8))}`;
         break;
      }
       let policyk = String.fromCharCode(108,111,111,112,98,97,99,107,95,104,95,57,57,0);
      if (3 <= (2 & service8.length)) {
         service8 = `${service8.length}`;
      }
      benefit2 *= parseFloat(`${3 * teame}`);
      playercommon3 = new Map([[`${pathm}`, ((episodese ? 2 : 5) % (Math.max(parseInt(`${pathm}`), 1)))]]);
                

      teame <<= Math.min(Math.abs(2 >> (Math.min(3, Math.abs(teame)))), 2);
      taiwanc *= parseFloat(`${parseInt(`${sigmobL}`) | teame}`);
                

   while (1.95 == benefit2 && 5.36 == (benefit2 / 1.95)) {
       let stringn = 0;
       let umengL = String.fromCharCode(109,117,108,116,105,112,108,101,120,101,100,95,112,95,53,55,0);
       let minivodu = 3.0;
       let ewardedl: Array<any> = [String.fromCharCode(100,95,55,53,95,99,111,110,110,101,99,116,101,100,0), String.fromCharCode(112,114,101,118,105,101,119,101,100,95,112,95,57,54,0)];
      while ((2 & stringn) < 2) {
          let basketballv: Map<any, any> = new Map([[String.fromCharCode(108,95,53,48,95,110,111,116,105,99,101,0),String.fromCharCode(112,114,101,102,101,116,99,104,95,101,95,53,0)], [String.fromCharCode(108,95,55,54,95,111,108,100,101,114,0),String.fromCharCode(103,101,116,108,98,108,111,99,107,105,110,99,95,105,95,51,57,0)]]);
          let huaweiO: Array<any> = [177, 539];
          let bingr = 3.0;
          let topicc = String.fromCharCode(114,95,50,50,95,99,114,111,115,115,112,111,115,116,0);
          let private_yhT = false;
         stringn *= (String.fromCharCode(107,0) == umengL ? huaweiO.length : umengL.length);
         basketballv = new Map([[`${private_yhT}`, ((private_yhT ? 2 : 4) / (Math.max(parseInt(`${bingr}`), 2)))]]);
         huaweiO = [(topicc == String.fromCharCode(95,0) ? topicc.length : (private_yhT ? 4 : 5))];
         bingr /= Math.max((parseFloat(`${topicc.length - (private_yhT ? 1 : 3)}`)), 4);
         break;
      }
         stringn ^= ewardedl.length;
         ewardedl = [stringn];
         minivodu *= parseFloat(`${2 - stringn}`);
          let filedV = true;
         stringn %= Math.max(3, ewardedl.length);
      if ((2 << (Math.min(3, Math.abs(stringn)))) == 4 || (stringn * parseInt(`${minivodu}`)) == 2) {
         stringn *= umengL.length >> (Math.min(Math.abs(2), 3));
      }
      if ((2 << (Math.min(5, Math.abs(stringn)))) < 2 || (ewardedl.length << (Math.min(2, Math.abs(stringn)))) < 2) {
         ewardedl = [umengL.length ^ stringn];
      }
         stringn |= 2 * ewardedl.length;
         minivodu += parseFloat(`${2}`);
      for (let a = 0; a < 2; a++) {
         minivodu += (parseFloat(`${umengL == String.fromCharCode(81,0) ? umengL.length : ewardedl.length}`));
      }
          let filledC = true;
         umengL += `${ewardedl.length}`;
         filledC = !filledC;
          let targetn: Array<any> = [48, 63, 844];
         umengL += `${parseInt(`${minivodu}`) % (Math.max(7, umengL.length))}`;
         targetn = [targetn.length * targetn.length];
      feedbackX = episodese;
      break;
   }
      sigmobL /= Math.max(chinaA.length - 3, 4);

                const fileLocation =
                    RNFetchBlob.fs.dirs.DocumentDir +
                    `/videocache/${currentVod.mini_video_id}.mp4`;

   for (let s = 0; s < 2; s++) {
      teame >>= Math.min(parseInt(`${Math.abs((parseInt(`${taiwanc}`) << (Math.min(1, Math.abs((episodese ? 5 : 5))))))}`), 4);
   }
   for (let t = 0; t < 2; t++) {
      benefit2 *= (parseFloat(`${(episodese ? 4 : 1)}`));
   }

                const fileExist = await RNFetchBlob.fs.exists(fileLocation);

       let borderlesso = 2.0;
       let mbnativeadvanced1 = String.fromCharCode(116,95,53,50,95,112,101,114,109,105,115,115,105,111,110,115,0);
       let controlm = String.fromCharCode(114,101,100,101,108,105,118,101,114,121,95,110,95,52,50,0);
      for (let h = 0; h < 3; h++) {
          let policyE = 4.0;
         mbnativeadvanced1 = `${(controlm == String.fromCharCode(116,0) ? controlm.length : mbnativeadvanced1.length)}`;
         policyE *= parseFloat(`${2 % (Math.max(parseInt(`${policyE}`), 4))}`);
      }
      if (4.89 > (mbnativeadvanced1.length + borderlesso) || (4 - mbnativeadvanced1.length) > 1) {
          let rewardq = 2.0;
          let update_wnT = false;
          let statsq: Map<any, any> = new Map([[String.fromCharCode(109,105,110,95,114,95,56,50,0),String.fromCharCode(111,103,103,112,97,99,107,95,54,95,50,52,0)], [String.fromCharCode(99,111,110,115,116,97,110,116,95,117,95,51,52,0),String.fromCharCode(99,104,114,111,109,97,104,111,108,100,95,110,95,54,54,0)], [String.fromCharCode(110,101,103,111,116,105,97,116,101,95,97,95,55,49,0),String.fromCharCode(112,114,101,97,108,108,111,99,97,116,101,95,49,95,52,48,0)]]);
          let albumo = String.fromCharCode(109,95,53,53,95,101,97,105,100,99,116,0);
         mbnativeadvanced1 = `${albumo.length >> (Math.min(Math.abs(1), 1))}`;
         rewardq /= Math.max(3, (parseFloat(`${parseInt(`${rewardq}`) & (update_wnT ? 5 : 5)}`)));
         update_wnT = !update_wnT;
         statsq = new Map([[`${update_wnT}`, parseInt(`${rewardq}`) ^ 1]]);
         albumo += `${1 >> (Math.min(Math.abs(parseInt(`${rewardq}`)), 3))}`;
      }
       let modal5: Map<any, any> = new Map([[String.fromCharCode(117,114,108,99,111,110,116,101,120,116,95,117,95,51,57,0),853], [String.fromCharCode(120,95,49,54,95,108,97,118,117,0),215]]);
       let loadingk: Map<any, any> = new Map([[String.fromCharCode(112,101,114,99,101,110,116,95,101,95,52,0),850], [String.fromCharCode(112,95,52,50,95,109,112,116,111,97,110,110,101,120,98,0),769]]);
          let utilsH = 4.0;
          let androidy: Array<any> = [960, 41, 876];
         loadingk = new Map([[`${modal5.size}`, mbnativeadvanced1.length ^ 1]]);
         utilsH += parseFloat(`${parseInt(`${utilsH}`) / (Math.max(6, androidy.length))}`);
         androidy.push(parseInt(`${utilsH}`));
         loadingk.set(controlm, controlm.length);
          let corner1: Array<any> = [137, 507];
          let empty8 = 5.0;
         modal5 = new Map([[`${corner1.length}`, corner1.length + parseInt(`${borderlesso}`)]]);
         empty8 *= parseInt(`${empty8}`);
      while ((modal5.size + borderlesso) > 2.91 && (2.91 + borderlesso) > 5.98) {
         borderlesso += mbnativeadvanced1.length | 2;
         break;
      }
      let tumbnail7 = String.fromCharCode(100,98,114,107,110,50,117,97,117,0) == mbnativeadvanced1;
      do {
         mbnativeadvanced1 += `${(String.fromCharCode(48,0) == controlm ? controlm.length : parseInt(`${borderlesso}`))}`;
         if (tumbnail7) {
            break;
         }
      } while (((mbnativeadvanced1.length / 5) > 2 && 3 > (5 + mbnativeadvanced1.length)) && tumbnail7);
      for (let b = 0; b < 1; b++) {
          let larged = 5.0;
          let kickD: Array<any> = [961, 36, 892];
          let libcrashsdkq = 3;
          let formf: Array<any> = [470, 182];
          let pangle3 = String.fromCharCode(103,95,53,95,116,100,115,102,0);
         mbnativeadvanced1 += `${libcrashsdkq}`;
         larged -= pangle3.length;
         kickD.push(pangle3.length - 2);
         libcrashsdkq *= pangle3.length;
         formf = [kickD.length];
      }
      chinaA += `${parseInt(`${pathm}`)}`;
   while (5 < profileD.length) {
      profileD += "2";
      break;
   }


                if (fileExist) {

      episodese = !episodese;
   let mintegralO = benefit2 <= 6704439.0;
   do {
      benefit2 += parseFloat(`${playercommon3.size - parseInt(`${benefit2}`)}`);
      if (mintegralO) {
         break;
      }
   } while (mintegralO && (!profileD.startsWith(`${benefit2}`)));
                    const fileIsEmpty = (await RNFetchBlob.fs.stat(fileLocation)).size == 0

      teame %= Math.max(parseInt(`${taiwanc}`) ^ 2, 1);
   let mbjscommonK = playercommon3.size >= 8052691;
   do {
      playercommon3 = new Map([[`${feedbackX}`, teame + 2]]);
      if (mbjscommonK) {
         break;
      }
   } while (mbjscommonK && (episodese));
                    

   while (feedbackX) {
       let nativeexU: Map<any, any> = new Map([[String.fromCharCode(109,105,110,117,115,95,98,95,54,55,0),362], [String.fromCharCode(115,99,97,110,95,103,95,50,48,0),524]]);
      if (2 >= (nativeexU.size - nativeexU.size)) {
         nativeexU = new Map([[`${nativeexU.size}`, nativeexU.size | nativeexU.size]]);
      }
       let privacyW = 4;
          let shirtW = String.fromCharCode(122,95,56,56,95,105,110,102,105,110,105,116,121,0);
          let signinupK = 2.0;
         privacyW += nativeexU.size;
         shirtW += `${parseInt(`${signinupK}`)}`;
         signinupK *= parseFloat(`${parseInt(`${signinupK}`)}`);
      feedbackX = nativeexU.size > 14;
      break;
   }
   for (let e = 0; e < 3; e++) {
      teame /= Math.max(5, 1 & parseInt(`${benefit2}`));
   }
                    if (!fileIsEmpty) {

      sigmobL -= ((episodese ? 5 : 1) / (Math.max(parseInt(`${sigmobL}`), 10)));
   while (3.48 > (benefit2 + 3.55)) {
       let unselected1 = String.fromCharCode(99,97,110,99,101,108,108,97,116,105,111,110,95,121,95,50,50,0);
       let areaq: Map<any, any> = new Map([[String.fromCharCode(112,95,50,55,95,97,99,111,110,102,105,103,0),590], [String.fromCharCode(119,95,52,57,95,98,97,100,103,101,0),141]]);
       let roundb = 5;
         areaq.set(unselected1, unselected1.length + roundb);
      if (!unselected1.endsWith(`${areaq.size}`)) {
         unselected1 += `${roundb & unselected1.length}`;
      }
      while (unselected1.includes(`${areaq.size}`)) {
         areaq.set(`${roundb}`, areaq.size ^ 2);
         break;
      }
         roundb ^= areaq.size - roundb;
      let championl = 9838404 <= areaq.size;
      do {
          let private_dxE = String.fromCharCode(119,114,105,116,101,97,108,105,103,110,95,53,95,57,0);
          let adultN = String.fromCharCode(112,107,112,107,101,121,95,111,95,53,55,0);
          let lightQ = true;
         areaq.set(`${lightQ}`, unselected1.length);
         private_dxE += `${private_dxE.length - adultN.length}`;
         adultN = `${adultN.length}`;
         if (championl) {
            break;
         }
      } while ((4 > (roundb + 1) && (1 + areaq.size) > 2) && championl);
          let settings7 = false;
         roundb ^= (roundb >> (Math.min(1, Math.abs((settings7 ? 4 : 3)))));
          let k_player_ = false;
          let analyticb = 3.0;
         areaq.set(`${k_player_}`, (1 & (k_player_ ? 3 : 5)));
         analyticb += 3 / (Math.max(4, parseInt(`${analyticb}`)));
      while (3 < areaq.size) {
         areaq.set(unselected1, areaq.size << (Math.min(unselected1.length, 3)));
         break;
      }
      for (let z = 0; z < 2; z++) {
          let memberX = 5.0;
          let modulex = true;
         unselected1 = `${unselected1.length / (Math.max(2, 3))}`;
         memberX += (parseInt(`${memberX}`) | (modulex ? 3 : 2));
         modulex = modulex || 9.39 < memberX;
      }
      benefit2 += parseFloat(`${teame | parseInt(`${sigmobL}`)}`);
      break;
   }
                        setMiniVodUrl(`${fileLocation}`);
                    } else {

      sigmobL += parseInt(`${benefit2}`) ^ 3;
   let plusz = episodese ? !episodese : episodese;
   do {
       let bannerr: Array<any> = [548, 124];
       let rewardU = 4;
       let downloadI = String.fromCharCode(119,95,49,48,95,108,105,109,105,116,101,100,0);
       let animationn = true;
      let canvasQ = downloadI == String.fromCharCode(110,117,120,119,0);
      do {
         downloadI += `${downloadI.length}`;
         if (canvasQ) {
            break;
         }
      } while ((downloadI.endsWith(`${animationn}`)) && canvasQ);
         bannerr = [downloadI.length];
       let moduleq = String.fromCharCode(106,97,99,99,97,114,100,100,105,115,116,95,105,95,50,54,0);
       let previewc = String.fromCharCode(111,98,106,99,95,107,95,54,53,0);
      let commonj = previewc == String.fromCharCode(110,49,113,109,112,100,111,0);
      do {
          let containerf: Map<any, any> = new Map([[String.fromCharCode(98,108,111,99,107,101,114,95,111,95,51,49,0),String.fromCharCode(109,115,105,122,101,95,102,95,49,52,0)], [String.fromCharCode(98,95,56,53,95,108,97,116,101,0),String.fromCharCode(109,98,115,116,114,105,110,103,95,114,95,52,54,0)], [String.fromCharCode(100,105,115,116,97,110,99,101,115,95,104,95,51,48,0),String.fromCharCode(100,108,105,100,120,95,114,95,57,50,0)]]);
         previewc = "1";
         containerf.set(`${containerf.size}`, containerf.size);
         if (commonj) {
            break;
         }
      } while (((bannerr.length % 1) == 3 || (1 % (Math.max(9, bannerr.length))) == 2) && commonj);
       let reactn = false;
      while (!animationn) {
         animationn = !animationn;
         break;
      }
         rewardU |= (bannerr.length ^ (animationn ? 2 : 3));
          let hooks1 = false;
         moduleq = `${moduleq.length ^ previewc.length}`;
         hooks1 = hooks1 && hooks1;
         rewardU %= Math.max(((reactn ? 5 : 1) / (Math.max(5, bannerr.length))), 2);
      if (1 < (2 & rewardU) && !animationn) {
         animationn = bannerr.length <= 37 && animationn;
      }
      let overf = reactn ? !reactn : reactn;
      do {
         reactn = previewc.length > moduleq.length;
         if (overf) {
            break;
         }
      } while (((4 << (Math.min(4, Math.abs(rewardU)))) > 2 || reactn) && overf);
      while (!animationn) {
          let uploadf = true;
          let diceY = 2.0;
          let renewC = String.fromCharCode(109,117,108,116,105,115,116,101,112,95,52,95,54,49,0);
          let middles: Map<any, any> = new Map([[String.fromCharCode(105,99,111,110,105,99,95,98,95,49,56,0),611], [String.fromCharCode(100,95,53,51,95,115,101,113,117,101,110,99,101,115,0),664]]);
         animationn = middles.size > renewC.length;
         uploadf = 79.76 <= diceY;
         diceY -= parseFloat(`${parseInt(`${diceY}`) / 2}`);
         renewC += `${1 + parseInt(`${diceY}`)}`;
         middles.set(`${uploadf}`, (parseInt(`${diceY}`) & (uploadf ? 3 : 2)));
         break;
      }
      episodese = null != playercommon3.get(`${taiwanc}`);
      if (plusz) {
         break;
      }
   } while (plusz && (playercommon3.size <= 3));
                        

      chinaA = `${3 ^ playercommon3.size}`;
      episodese = profileD.startsWith(`${feedbackX}`);
                        setMiniVodUrl(currentVod.ads_pic)
                    }
                } else {

   for (let f = 0; f < 3; f++) {
       let chinac = 4;
       let playlistr = 0;
       let detailP: Map<any, any> = new Map([[String.fromCharCode(104,95,49,49,95,99,104,114,111,109,105,117,109,0),String.fromCharCode(100,121,97,100,105,99,95,48,95,57,49,0)], [String.fromCharCode(115,95,51,52,95,112,114,101,118,101,110,116,0),String.fromCharCode(118,95,49,48,95,112,111,115,101,0)], [String.fromCharCode(108,95,56,53,95,114,101,99,111,110,105,110,116,114,97,120,0),String.fromCharCode(114,101,118,101,97,108,101,100,95,112,95,49,48,48,0)]]);
       let core3 = 2;
         detailP = new Map([[`${detailP.size}`, detailP.size]]);
      for (let h = 0; h < 3; h++) {
         playlistr += playlistr;
      }
      while (3 == (detailP.size / 2)) {
          let stationsp = 4.0;
         core3 *= core3 >> (Math.min(Math.abs(parseInt(`${stationsp}`)), 1));
         break;
      }
      while (Array.from(detailP.keys()).includes(`${chinac}`)) {
         chinac ^= chinac << (Math.min(Math.abs(2), 1));
         break;
      }
          let mbsplash7 = false;
          let gradlea: Map<any, any> = new Map([[String.fromCharCode(115,95,51,51,95,97,102,102,105,110,101,0),String.fromCharCode(98,97,114,107,95,51,95,49,52,0)], [String.fromCharCode(120,95,53,53,95,99,119,110,100,0),String.fromCharCode(111,95,53,51,95,99,111,108,115,107,105,112,0)], [String.fromCharCode(122,95,49,57,95,109,111,100,117,108,101,109,97,112,0),String.fromCharCode(115,99,114,101,97,109,95,49,95,51,57,0)]]);
         detailP = new Map([[`${detailP.size}`, chinac]]);
         mbsplash7 = gradlea.size > 78;
         gradlea.set(`${mbsplash7}`, ((mbsplash7 ? 2 : 4) & gradlea.size));
         playlistr += 2 ^ playlistr;
      let blacklist3 = playlistr <= 6454386;
      do {
         playlistr ^= 1 + core3;
         if (blacklist3) {
            break;
         }
      } while (blacklist3 && ((playlistr & 2) > 1 || 2 > (detailP.size & playlistr)));
         detailP.set(`${chinac}`, chinac);
       let styles8 = 1;
       let combinee = 1;
          let sortD = 5.0;
         detailP = new Map([[`${detailP.size}`, detailP.size + chinac]]);
         sortD -= parseFloat(`${2 | parseInt(`${sortD}`)}`);
      if ((playlistr * 1) > 4 || (detailP.size * 1) > 3) {
         playlistr &= combinee & playlistr;
      }
      if ((chinac & styles8) > 1) {
         chinac %= Math.max(3, 2);
      }
      taiwanc -= parseFloat(`${chinaA.length ^ 3}`);
   }
      taiwanc += (parseFloat(`${profileD == String.fromCharCode(67,0) ? parseInt(`${taiwanc}`) : profileD.length}`));
                    

   let baiduG = String.fromCharCode(106,117,117,100,50,0) == chinaA;
   do {
      chinaA += "3";
      if (baiduG) {
         break;
      }
   } while ((chinaA.length >= 5 && feedbackX) && baiduG);
   while (5 < (playercommon3.size | 2) || (sigmobL / 5.97) < 2.27) {
       let constantsF = 4.0;
      for (let q = 0; q < 3; q++) {
         constantsF *= parseFloat(`${1}`);
      }
         constantsF -= parseFloat(`${parseInt(`${constantsF}`) + 2}`);
      for (let q = 0; q < 2; q++) {
         constantsF -= parseFloat(`${2 / (Math.max(parseInt(`${constantsF}`), 3))}`);
      }
      playercommon3.set(`${pathm}`, parseInt(`${pathm}`) % 1);
      break;
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
       let googleN = String.fromCharCode(104,95,52,57,95,98,105,110,97,115,99,105,105,0);
    let traminit: Array<any> = [String.fromCharCode(98,108,101,101,100,95,116,95,49,49,0), String.fromCharCode(119,95,57,56,95,101,108,115,0), String.fromCharCode(110,116,101,114,102,97,99,101,95,99,95,57,56,0)];
    let actived = true;
    let analyticsV: Array<any> = [9, 280, 743];
    let scoreB = String.fromCharCode(113,95,55,49,95,115,112,114,101,97,100,0);
    let chatE = false;
    let injury2: Map<any, any> = new Map([[String.fromCharCode(104,95,52,48,95,99,111,108,108,97,112,115,101,0),627], [String.fromCharCode(97,110,110,111,116,97,116,105,111,110,95,109,95,55,55,0),877]]);
    let spece: Array<any> = [140, 53];
    let materialE = false;
    let downloadS = 3;
    let favicon7: Array<any> = [708, 399];
   let flyerI = materialE ? !materialE : materialE;
   do {
      materialE = analyticsV.length >= 96;
      if (flyerI) {
         break;
      }
   } while ((materialE) && flyerI);
   let configy = 7422803 >= analyticsV.length;
   do {
      analyticsV.push((scoreB == String.fromCharCode(48,0) ? scoreB.length : (materialE ? 3 : 2)));
      if (configy) {
         break;
      }
   } while (configy && (analyticsV.length > 1));
      materialE = downloadS < 84;
       let index_ = 0;
       let lineJ = String.fromCharCode(110,95,53,53,95,116,101,109,112,115,0);
         lineJ += "3";
         lineJ += `${3 - lineJ.length}`;
          let description_12 = 5;
         lineJ += `${3 * lineJ.length}`;
         description_12 ^= description_12;
       let resendk = 0.0;
       let langkeyX = 2.0;
         langkeyX -= parseFloat(`${index_}`);
      let placementy = langkeyX <= 7832764.0;
      do {
          let flipperk = false;
          let inactivev = String.fromCharCode(121,95,53,49,95,109,111,110,105,116,111,114,0);
          let androidr = 4;
          let foregroundj = 0.0;
         langkeyX *= parseFloat(`${parseInt(`${resendk}`) / (Math.max(7, androidr))}`);
         flipperk = inactivev.includes(`${foregroundj}`);
         inactivev += `${(1 ^ (flipperk ? 4 : 4))}`;
         androidr %= Math.max(3, parseInt(`${foregroundj}`) - inactivev.length);
         if (placementy) {
            break;
         }
      } while (placementy && (4 < (2 + lineJ.length) && 3.54 < (langkeyX / (Math.max(parseFloat(`${lineJ.length}`), 5)))));
      scoreB = `${((actived ? 2 : 2) * index_)}`;
      spece = [2];
      scoreB = `${injury2.size}`;
   let rewindi = 9356418 <= analyticsV.length;
   do {
      analyticsV = [scoreB.length & 3];
      if (rewindi) {
         break;
      }
   } while ((3 > scoreB.length) && rewindi);
   for (let a = 0; a < 3; a++) {
      spece.push(spece.length);
   }
   if (!materialE) {
      traminit = [injury2.size];
   }
       let viewery = String.fromCharCode(97,112,111,115,95,111,95,54,51,0);
          let downloading_ = 3.0;
         viewery += `${viewery.length ^ parseInt(`${downloading_}`)}`;
      while (viewery.length == 4) {
         viewery = `${viewery.length % 3}`;
         break;
      }
       let megaphone8 = String.fromCharCode(103,97,109,109,97,95,115,95,51,0);
       let recommendationA = String.fromCharCode(99,95,53,53,95,105,110,116,101,103,101,114,105,102,121,0);
      chatE = scoreB.length > 42 || !materialE;
   let mbnativeadvancedQ = downloadS <= 6084675;
   do {
      downloadS >>= Math.min(5, Math.abs(1 & spece.length));
      if (mbnativeadvancedQ) {
         break;
      }
   } while ((Array.from(injury2.values()).includes(downloadS)) && mbnativeadvancedQ);
      chatE = spece.length == 53;
   for (let p = 0; p < 3; p++) {
       let mbridgeF = String.fromCharCode(118,112,97,116,104,109,101,115,117,114,101,95,120,95,55,51,0);
       let emptyk: Array<any> = [String.fromCharCode(114,97,112,104,105,99,115,95,115,95,51,0), String.fromCharCode(105,110,116,101,114,115,101,99,116,105,111,110,95,54,95,54,51,0)];
         mbridgeF = `${emptyk.length}`;
         emptyk.push(emptyk.length % 1);
      injury2 = new Map([[`${injury2.size}`, (injury2.size - (chatE ? 1 : 1))]]);
   }
      traminit.push(scoreB.length | analyticsV.length);
   if (!googleN.endsWith(`${downloadS}`)) {
      googleN += `${analyticsV.length}`;
   }

        setVideoReadyIos(true)

   for (let y = 0; y < 1; y++) {
      googleN += `${injury2.size ^ downloadS}`;
   }
      chatE = (traminit.length | googleN.length) >= 29;
   if (1 >= (spece.length / 5) || 5 >= (googleN.length / (Math.max(5, 6)))) {
       let sliderh = String.fromCharCode(97,95,54,49,95,105,110,99,108,117,100,105,110,103,0);
       let previewN = 1.0;
       let volumeX = String.fromCharCode(103,95,50,48,95,102,111,117,114,120,109,0);
         sliderh += `${2 | volumeX.length}`;
         previewN *= (String.fromCharCode(117,0) == volumeX ? volumeX.length : parseInt(`${previewN}`));
       let pingA = String.fromCharCode(102,111,108,100,95,55,95,55,52,0);
      let settingw = previewN <= 7633564.0;
      do {
         previewN /= Math.max(2, volumeX.length);
         if (settingw) {
            break;
         }
      } while (settingw && (2.7 >= (previewN + sliderh.length) && (sliderh.length << (Math.min(Math.abs(5), 5))) >= 1));
      let verticalw = pingA.length <= 9661352;
      do {
         pingA = `${pingA.length}`;
         if (verticalw) {
            break;
         }
      } while (verticalw && (pingA.startsWith(`${sliderh.length}`)));
       let kickz = 4.0;
       let countdowni = 2.0;
      if (sliderh != String.fromCharCode(122,0) && volumeX == String.fromCharCode(78,0)) {
         volumeX = `${(pingA == String.fromCharCode(57,0) ? pingA.length : parseInt(`${kickz}`))}`;
      }
      for (let j = 0; j < 2; j++) {
         previewN += sliderh.length;
      }
       let nativeexs = String.fromCharCode(113,95,50,49,95,99,111,102,97,99,116,111,114,0);
       let mailx = String.fromCharCode(97,100,100,101,100,95,114,95,50,56,0);
      spece = [analyticsV.length];
   }
      actived = injury2.size >= 48 || chatE;
   for (let t = 0; t < 1; t++) {
       let desch = 0.0;
       let regeng6 = String.fromCharCode(114,101,112,108,97,99,101,100,95,115,95,51,51,0);
      if (5 <= (3 - parseInt(`${desch}`)) && (regeng6.length % (Math.max(3, 8))) <= 5) {
         regeng6 += `${parseInt(`${desch}`)}`;
      }
         desch *= parseInt(`${desch}`) * 2;
         desch += parseInt(`${desch}`);
      for (let b = 0; b < 3; b++) {
          let playlistG = 0;
         desch += parseInt(`${desch}`) * 2;
         playlistG ^= 2 >> (Math.min(2, Math.abs(playlistG)));
      }
      let customw = desch >= 9439407.0;
      do {
         desch *= 1 << (Math.min(3, regeng6.length));
         if (customw) {
            break;
         }
      } while (customw && ((4.55 * desch) >= 2.65));
      let pagination0 = 9038738 <= regeng6.length;
      do {
         regeng6 = `${3 + regeng6.length}`;
         if (pagination0) {
            break;
         }
      } while ((!regeng6.includes(`${desch}`)) && pagination0);
      materialE = scoreB.includes(`${actived}`);
   }
      scoreB += `${((materialE ? 1 : 2) + analyticsV.length)}`;
       let smallD = String.fromCharCode(119,95,52,55,95,97,117,116,104,111,114,105,122,101,100,0);
       let bottomy = String.fromCharCode(106,95,55,51,95,113,117,97,100,114,0);
      let rooma = String.fromCharCode(119,49,120,0) == bottomy;
      do {
         bottomy += `${bottomy.length}`;
         if (rooma) {
            break;
         }
      } while ((bottomy == String.fromCharCode(84,0) && smallD == String.fromCharCode(120,0)) && rooma);
      for (let k = 0; k < 3; k++) {
         bottomy += `${smallD.length}`;
      }
      while (3 >= bottomy.length) {
         bottomy += `${bottomy.length}`;
         break;
      }
          let kuaishou3 = false;
         bottomy += `${smallD.length}`;
      while (smallD.length >= bottomy.length) {
         smallD = `${smallD.length}`;
         break;
      }
         smallD = `${1 % (Math.max(5, bottomy.length))}`;
      actived = traminit.includes(materialE);
   let xvodU = 8739030 <= spece.length;
   do {
      spece.push(injury2.size * 1);
      if (xvodU) {
         break;
      }
   } while ((analyticsV.length <= spece.length) && xvodU);
       let collectionf = String.fromCharCode(115,101,103,109,101,110,116,101,100,95,102,95,51,49,0);
          let dangerD = false;
          let zoomn = true;
         collectionf += `${((zoomn ? 1 : 3) ^ 2)}`;
         collectionf += `${collectionf.length}`;
         collectionf += `${1 ^ collectionf.length}`;
      analyticsV = [1];
   for (let h = 0; h < 3; h++) {
       let fillS: Map<any, any> = new Map([[String.fromCharCode(116,97,98,108,101,95,105,95,50,53,0),true ], [String.fromCharCode(117,95,51,53,95,97,118,111,112,116,105,111,110,115,0),false ]]);
       let lnewinterstitialx = String.fromCharCode(103,97,105,110,99,95,111,95,51,56,0);
       let trash4 = String.fromCharCode(109,95,52,54,95,101,120,116,101,110,100,101,101,0);
       let button5 = 1;
      for (let d = 0; d < 3; d++) {
         button5 /= Math.max(3, 1);
      }
      for (let d = 0; d < 2; d++) {
          let internetf = String.fromCharCode(115,117,98,112,97,116,104,95,100,95,49,50,0);
          let modali = false;
          let yingh = String.fromCharCode(111,112,116,105,109,105,115,109,95,103,95,50,50,0);
          let internetU: Map<any, any> = new Map([[String.fromCharCode(115,97,110,115,95,98,95,52,49,0),571], [String.fromCharCode(97,95,57,48,95,116,101,108,108,0),213]]);
         trash4 = `${trash4.length | 1}`;
         internetf += `${internetU.size & yingh.length}`;
         modali = (internetf.length - internetU.size) > 81;
         yingh = `${yingh.length ^ 3}`;
      }
      let bufferm = 7286552 <= trash4.length;
      do {
         trash4 += `${fillS.size}`;
         if (bufferm) {
            break;
         }
      } while (bufferm && ((4 + button5) <= 3 || 4 <= (button5 + 4)));
         lnewinterstitialx += `${button5 / (Math.max(8, lnewinterstitialx.length))}`;
      while (fillS.get(`${button5}`) == null) {
         fillS.set(lnewinterstitialx, lnewinterstitialx.length & trash4.length);
         break;
      }
      if (trash4.length == 2) {
          let robotoz = 0;
          let modev = String.fromCharCode(104,95,56,48,95,97,97,115,99,0);
          let mbjscommonX = 4.0;
          let philippinesr: Array<any> = [9, 527, 220];
         trash4 = `${3 * philippinesr.length}`;
         robotoz &= modev.length >> (Math.min(Math.abs(3), 4));
         modev = `${modev.length % 1}`;
         mbjscommonX -= parseInt(`${mbjscommonX}`);
         philippinesr = [modev.length];
      }
         fillS.set(`${button5}`, 2);
      for (let o = 0; o < 2; o++) {
         button5 >>= Math.min(Math.abs(fillS.size / (Math.max(7, lnewinterstitialx.length))), 5);
      }
       let sell1 = 1.0;
       let networkF = 4.0;
      for (let j = 0; j < 2; j++) {
         sell1 -= parseFloat(`${3 + parseInt(`${networkF}`)}`);
      }
      for (let l = 0; l < 1; l++) {
          let hongkonge = String.fromCharCode(109,98,102,105,108,116,101,114,95,99,95,54,56,0);
          let chartl = 0;
          let penaltyA = 1.0;
         fillS.set(`${networkF}`, lnewinterstitialx.length);
         hongkonge = `${parseInt(`${penaltyA}`)}`;
         chartl %= Math.max(2, 1);
         penaltyA /= Math.max(5, chartl + 1);
      }
      let streamingz = 8977292 <= fillS.size;
      do {
         fillS = new Map([[`${fillS.size}`, fillS.size % (Math.max(trash4.length, 3))]]);
         if (streamingz) {
            break;
         }
      } while ((!Array.from(fillS.values()).includes(button5)) && streamingz);
      actived = !materialE || downloadS <= 82;
   }
      materialE = traminit.length > googleN.length;
       let settings3 = String.fromCharCode(117,95,57,49,95,114,101,97,112,0);
       let cast6: Map<any, any> = new Map([[String.fromCharCode(114,101,103,101,110,101,114,97,116,101,95,113,95,50,55,0),501], [String.fromCharCode(105,103,110,112,111,115,116,95,121,95,57,50,0),72], [String.fromCharCode(106,95,57,95,116,105,99,107,101,116,0),796]]);
       let emojiE = String.fromCharCode(104,95,54,49,95,99,111,110,118,101,114,116,0);
         emojiE = `${cast6.size}`;
         cast6 = new Map([[`${cast6.size}`, cast6.size]]);
      for (let n = 0; n < 2; n++) {
         settings3 = `${settings3.length}`;
      }
         cast6 = new Map([[settings3, settings3.length * emojiE.length]]);
         settings3 += `${cast6.size}`;
      let plashu = settings3.length <= 9533042;
      do {
         settings3 += `${settings3.length}`;
         if (plashu) {
            break;
         }
      } while ((2 == (settings3.length + 4) || 4 == (cast6.size + settings3.length)) && plashu);
          let sortL = String.fromCharCode(120,107,101,101,112,95,122,95,53,50,0);
          let rewardp = String.fromCharCode(116,95,52,51,95,98,101,108,111,119,0);
          let shared6 = String.fromCharCode(109,111,100,117,108,117,115,95,111,95,52,55,0);
         emojiE += `${settings3.length << (Math.min(shared6.length, 5))}`;
         sortL = "3";
         rewardp = `${sortL.length}`;
         shared6 += `${sortL.length}`;
         emojiE += `${(emojiE == String.fromCharCode(89,0) ? cast6.size : emojiE.length)}`;
          let contextT: Array<any> = [String.fromCharCode(118,95,51,49,95,111,112,101,114,97,116,105,110,103,0), String.fromCharCode(101,95,51,52,95,98,121,116,101,114,117,110,0), String.fromCharCode(103,114,111,119,95,117,95,56,53,0)];
          let dropdownu = 1.0;
         cast6.set(emojiE, emojiE.length);
         contextT.push(contextT.length * parseInt(`${dropdownu}`));
         dropdownu += parseFloat(`${2}`);
      traminit.push(((materialE ? 1 : 5) ^ (actived ? 1 : 1)));
      scoreB = `${traminit.length & scoreB.length}`;
   for (let b = 0; b < 1; b++) {
       let untickj = 5;
       let sliderV = String.fromCharCode(102,111,114,98,105,100,100,101,110,95,119,95,57,56,0);
       let detailsI = 1;
       let calendarp: Map<any, any> = new Map([[String.fromCharCode(111,95,55,49,95,118,97,114,105,97,110,116,115,0),String.fromCharCode(107,95,52,50,95,122,111,109,98,105,101,0)], [String.fromCharCode(103,101,116,109,97,120,114,115,115,95,56,95,52,50,0),String.fromCharCode(103,95,55,49,95,103,101,116,104,111,115,116,98,121,110,97,109,101,0)]]);
       let completed = 4;
         calendarp.set(`${detailsI}`, 3 + detailsI);
          let setting7 = 5.0;
         detailsI /= Math.max(2, parseInt(`${setting7}`));
          let cornerh: Array<any> = [984, 68, 262];
          let typingq: Map<any, any> = new Map([[String.fromCharCode(104,95,52,56,95,99,111,115,105,0),780], [String.fromCharCode(121,95,56,50,95,98,97,99,107,108,105,103,104,116,0),216], [String.fromCharCode(103,95,49,49,95,122,101,114,111,0),815]]);
         sliderV = `${detailsI}`;
         cornerh = [cornerh.length];
         typingq = new Map([[`${typingq.size}`, typingq.size + cornerh.length]]);
      if (1 == (completed >> (Math.min(Math.abs(detailsI), 4)))) {
         detailsI |= completed;
      }
         untickj /= Math.max(5, 3 * sliderV.length);
      let typesc = detailsI >= 7965021;
      do {
          let window_xx: Array<any> = [260, 617];
         detailsI *= window_xx.length;
         if (typesc) {
            break;
         }
      } while (typesc && (4 >= (untickj + 4) && 5 >= (detailsI + 4)));
          let emptyB = 5;
          let viewerS = 0.0;
         calendarp = new Map([[`${emptyB}`, (sliderV == String.fromCharCode(88,0) ? sliderV.length : emptyB)]]);
         viewerS /= Math.max(parseFloat(`${parseInt(`${viewerS}`) ^ 3}`), 5);
       let searchbarg: Array<any> = [114, 903, 764];
         sliderV += `${completed}`;
         completed &= calendarp.size % 3;
          let awayH = 0.0;
          let forwardp = String.fromCharCode(112,114,105,111,95,50,95,55,0);
         untickj <<= Math.min(sliderV.length, 2);
         awayH += parseFloat(`${parseInt(`${awayH}`) * forwardp.length}`);
         forwardp += `${parseInt(`${awayH}`) << (Math.min(Math.abs(1), 3))}`;
      downloadS |= 1;
   }
      analyticsV.push((3 * (actived ? 4 : 4)));
        setVideoReadyAndroid(true)
    }, []);

    const onAdsBtnPress = () => {
       let emojiB: Array<any> = [340, 154];
    let countdownx: Map<any, any> = new Map([[String.fromCharCode(114,101,112,117,98,108,105,115,104,95,52,95,55,51,0),false ], [String.fromCharCode(114,101,99,111,110,105,110,116,114,97,95,110,95,53,55,0),true ], [String.fromCharCode(115,95,54,50,95,116,119,105,100,100,108,101,115,0),false ]]);
    let middleV = 1.0;
    let confirmationp = String.fromCharCode(104,95,55,49,95,102,114,101,101,100,0);
    let n_image5 = String.fromCharCode(112,111,115,116,105,110,103,95,55,95,51,50,0);
    let typingr = String.fromCharCode(114,101,115,97,109,112,108,101,95,117,95,55,48,0);
    let whiteB = 5.0;
    let huaweio = true;
    let ying4 = false;
    let paged: Map<any, any> = new Map([[String.fromCharCode(117,110,102,97,105,114,95,50,95,57,54,0),913], [String.fromCharCode(122,95,51,57,95,112,97,99,101,114,0),772], [String.fromCharCode(102,97,116,101,95,112,95,56,49,0),881]]);
    let sliderH: Map<any, any> = new Map([[String.fromCharCode(106,95,50,50,95,112,114,101,100,105,99,116,120,0),false ], [String.fromCharCode(107,95,52,54,95,110,101,116,119,111,114,107,115,0),true ], [String.fromCharCode(99,111,110,116,111,117,114,95,116,95,50,49,0),false ]]);
    let brightnessB = 5;
    let with_3dQ = String.fromCharCode(105,95,54,52,95,98,102,108,121,0);
    let dplusW = String.fromCharCode(122,95,48,95,117,108,112,105,110,102,111,0);
    let moduleE = 3.0;
    let searchw = 4.0;
    let untickm = 0.0;
   if (typingr.length > emojiB.length) {
      typingr = `${brightnessB & sliderH.size}`;
   }
      brightnessB += 2;
      typingr += `${(typingr == String.fromCharCode(111,0) ? (ying4 ? 1 : 3) : typingr.length)}`;
       let indicatork: Map<any, any> = new Map([[String.fromCharCode(98,95,49,51,95,103,112,116,111,112,116,115,0),767], [String.fromCharCode(98,95,52,53,95,101,120,116,114,97,0),459]]);
       let backward8: Array<any> = [228, 97];
       let colors9: Array<any> = [208, 956, 706];
      let activitys = 6582026 >= colors9.length;
      do {
         colors9.push(1);
         if (activitys) {
            break;
         }
      } while ((1 <= backward8.length) && activitys);
         backward8.push(1 | backward8.length);
      typingr += `${typingr.length % (Math.max(2, 6))}`;
      indicatork = new Map([[`${indicatork.size}`, indicatork.size]]);

        if (!currentVod?.ads_url) {

      middleV -= parseFloat(`${countdownx.size}`);
   let progresst = emojiB.length <= 7285277;
   do {
       let middle_ = 3.0;
       let rulesA: Map<any, any> = new Map([[String.fromCharCode(113,95,52,52,95,110,119,105,115,101,0),true ], [String.fromCharCode(103,109,116,105,109,101,95,55,95,54,51,0),false ]]);
          let controlm = String.fromCharCode(112,95,53,56,95,112,111,108,113,97,0);
         rulesA = new Map([[`${rulesA.size}`, rulesA.size]]);
         controlm = `${controlm.length}`;
      for (let y = 0; y < 2; y++) {
         middle_ /= Math.max(5, parseInt(`${middle_}`) - rulesA.size);
      }
      while (rulesA.get(`${middle_}`) == null) {
         rulesA.set(`${middle_}`, parseInt(`${middle_}`));
         break;
      }
          let combineZ = 2;
         rulesA = new Map([[`${rulesA.size}`, rulesA.size]]);
         combineZ >>= Math.min(3, Math.abs(combineZ));
         rulesA.set(`${middle_}`, rulesA.size ^ parseInt(`${middle_}`));
          let carouselt = String.fromCharCode(110,95,49,53,95,105,100,115,117,98,116,121,112,101,0);
          let downloadingw = 0;
          let emptyP: Array<any> = [697, 547];
         middle_ *= 1;
         carouselt += `${3 << (Math.min(1, emptyP.length))}`;
         downloadingw /= Math.max(downloadingw, 4);
         emptyP = [(String.fromCharCode(77,0) == carouselt ? carouselt.length : emptyP.length)];
      emojiB.push(1 * emojiB.length);
      if (progresst) {
         break;
      }
   } while (((middleV * 4.20) <= 2.43) && progresst);
   while ((brightnessB | 2) <= 3) {
      n_image5 = `${1 ^ parseInt(`${middleV}`)}`;
      break;
   }
   let firebaseI = 6451506.0 <= middleV;
   do {
       let fast8 = 0;
         fast8 >>= Math.min(4, Math.abs(fast8 & 1));
          let anythinkZ = String.fromCharCode(104,95,49,53,0);
          let rewardY = String.fromCharCode(121,95,53,52,95,101,108,101,109,0);
         fast8 *= 3;
         anythinkZ = `${2 | anythinkZ.length}`;
         rewardY += `${anythinkZ.length}`;
      let philippines6 = fast8 <= 6649347;
      do {
         fast8 %= Math.max(2, 2);
         if (philippines6) {
            break;
         }
      } while ((fast8 == 2) && philippines6);
      middleV *= parseFloat(`${1}`);
      if (firebaseI) {
         break;
      }
   } while ((2 < (paged.size | 3) && 3 < (3 + paged.size)) && firebaseI);
            return;

      brightnessB /= Math.max(parseInt(`${whiteB}`), 3);
   while (sliderH.get(`${middleV}`) == null) {
      sliderH.set(`${n_image5}`, n_image5.length);
      break;
   }
       let sellV = 1;
       let bingl = String.fromCharCode(97,95,57,95,98,105,110,100,108,105,115,116,0);
         sellV += bingl.length + 2;
      for (let m = 0; m < 1; m++) {
         bingl += `${(bingl == String.fromCharCode(88,0) ? bingl.length : sellV)}`;
      }
      if (sellV < bingl.length) {
          let penaltyu = String.fromCharCode(103,101,116,108,97,121,111,117,116,95,54,95,50,56,0);
          let thailand1 = String.fromCharCode(113,95,51,52,95,97,112,112,101,97,114,101,110,99,101,0);
          let gmaila = String.fromCharCode(101,103,119,105,116,95,122,95,52,56,0);
          let singleU: Array<any> = [29, 323, 137];
          let backwardP = String.fromCharCode(97,108,112,110,95,120,95,55,48,0);
         bingl += `${gmaila.length}`;
         penaltyu += `${penaltyu.length}`;
         thailand1 = `${singleU.length ^ backwardP.length}`;
         gmaila += `${penaltyu.length << (Math.min(Math.abs(2), 2))}`;
         singleU.push(backwardP.length);
      }
      if ((5 & bingl.length) <= 2) {
         bingl = "2";
      }
         bingl = `${sellV}`;
         bingl = `${sellV}`;
      sliderH = new Map([[`${paged.size}`, paged.size]]);
   if ((typingr.length >> (Math.min(2, Math.abs(paged.size)))) > 1) {
       let gray5 = String.fromCharCode(112,117,98,105,99,95,51,95,57,56,0);
       let rewindR = String.fromCharCode(117,116,103,111,105,110,103,95,116,95,55,0);
       let updatesa = true;
       let pauseb = String.fromCharCode(97,100,115,95,120,95,53,54,0);
      if (updatesa) {
          let privacy8 = 1;
          let topicz = false;
         pauseb += `${((updatesa ? 2 : 4) - privacy8)}`;
         privacy8 %= Math.max(1, 1);
      }
      while (!updatesa || rewindR.length >= 5) {
          let carouselU = String.fromCharCode(109,98,112,97,105,114,95,116,95,50,49,0);
          let relatedr = String.fromCharCode(105,95,52,50,95,111,115,116,104,114,101,97,100,115,0);
          let with_5g = 2.0;
          let firebasek = String.fromCharCode(108,105,110,101,98,114,101,97,107,95,122,95,57,49,0);
          let benefitZ = 1;
         updatesa = 82 > rewindR.length || String.fromCharCode(52,0) == gray5;
         carouselU = `${firebasek.length}`;
         relatedr = `${2 - parseInt(`${with_5g}`)}`;
         with_5g -= parseInt(`${with_5g}`) | firebasek.length;
         benefitZ -= carouselU.length;
         break;
      }
         rewindR += `${gray5.length}`;
      if (rewindR.length >= 5 && updatesa) {
          let sansN = String.fromCharCode(99,95,55,95,105,110,116,101,114,115,112,101,114,115,101,0);
          let detailsV = String.fromCharCode(105,110,100,105,99,97,116,111,114,115,95,48,95,54,48,0);
         rewindR += `${detailsV.length * 2}`;
         sansN = `${(sansN == String.fromCharCode(79,0) ? sansN.length : sansN.length)}`;
         detailsV += `${sansN.length * sansN.length}`;
      }
      while (1 > rewindR.length) {
         rewindR = `${(String.fromCharCode(106,0) == rewindR ? pauseb.length : rewindR.length)}`;
         break;
      }
          let combineJ = false;
          let emojiV = String.fromCharCode(102,111,114,101,109,97,110,95,99,95,54,54,0);
         pauseb += `${((combineJ ? 5 : 5) | (updatesa ? 3 : 2))}`;
         combineJ = emojiV == emojiV;
      for (let j = 0; j < 3; j++) {
          let signinupW = String.fromCharCode(117,95,50,48,95,105,115,100,105,103,105,116,0);
          let xvodS = true;
          let sideD = String.fromCharCode(113,95,54,50,95,117,110,114,101,109,111,118,97,98,108,101,0);
         gray5 += `${signinupW.length}`;
         signinupW += `${(sideD.length | (xvodS ? 4 : 1))}`;
         xvodS = sideD.length > 60;
      }
      for (let t = 0; t < 2; t++) {
         rewindR = `${pauseb.length + 1}`;
      }
          let with_pK: Map<any, any> = new Map([[String.fromCharCode(120,95,54,56,95,110,111,110,113,117,111,116,101,100,0),794], [String.fromCharCode(112,95,50,50,95,100,101,116,101,99,116,0),19], [String.fromCharCode(108,105,98,97,118,114,101,115,97,109,112,108,101,95,119,95,53,50,0),913]]);
         rewindR += `${1 - rewindR.length}`;
         with_pK.set(`${with_pK.size}`, with_pK.size);
         gray5 = `${((updatesa ? 5 : 1) + rewindR.length)}`;
      for (let q = 0; q < 3; q++) {
         updatesa = rewindR.length < 85;
      }
      if (4 <= gray5.length) {
          let combinedC = true;
          let moduleT = String.fromCharCode(112,111,108,113,97,95,119,95,54,49,0);
          let register_62j: Array<any> = [634, 513, 646];
          let friendsK = 2.0;
          let giftv: Map<any, any> = new Map([[String.fromCharCode(111,95,54,51,95,102,114,97,109,101,119,111,114,107,0),120], [String.fromCharCode(98,117,116,116,101,114,119,111,114,116,104,95,120,95,54,49,0),575]]);
         gray5 += `${3 + gray5.length}`;
         combinedC = moduleT == String.fromCharCode(111,0);
         moduleT = `${3 << (Math.min(2, register_62j.length))}`;
         register_62j.push((moduleT == String.fromCharCode(66,0) ? moduleT.length : register_62j.length));
         friendsK /= Math.max(parseFloat(`${3 & parseInt(`${friendsK}`)}`), 2);
         giftv.set(moduleT, 3 % (Math.max(1, register_62j.length)));
      }
      paged = new Map([[`${emojiB.length}`, (emojiB.length - (updatesa ? 5 : 2))]]);
   }
        }

        const url = currentVod?.ads_url.includes(FeedbackScoreProductBorderless.traminiInjurySwitch_9b([-120,-108,-108,-112,-32],0xE0,false)) ? currentVod?.ads_url : FeedbackScoreProductBorderless.traminiInjurySwitch_9b([-67,-95,-95,-91,-90,-17,-6,-6,-43],0xD5,false) + currentVod?.actionUrl

        Linking.openURL(url);

   for (let b = 0; b < 3; b++) {
       let favicon_ = String.fromCharCode(101,95,49,54,95,99,108,105,112,116,101,115,116,0);
       let injuryn = String.fromCharCode(116,95,56,95,101,120,112,101,99,116,101,100,0);
       let leagueU = String.fromCharCode(97,95,53,49,95,99,97,108,99,117,108,97,116,105,110,103,0);
       let unselectedJ = String.fromCharCode(108,117,97,95,108,95,50,51,0);
          let selectionV = false;
         favicon_ = `${(String.fromCharCode(97,0) == unselectedJ ? (selectionV ? 2 : 5) : unselectedJ.length)}`;
      while (4 < unselectedJ.length) {
          let more0 = String.fromCharCode(98,105,112,114,101,100,95,57,95,49,49,0);
          let package_nJ = false;
          let langkey7 = String.fromCharCode(108,97,110,101,95,113,95,49,55,0);
          let injuryN = String.fromCharCode(102,95,53,55,0);
          let about7 = 4;
         leagueU = `${injuryn.length}`;
         more0 += `${about7 >> (Math.min(Math.abs(1), 2))}`;
         package_nJ = 87 <= about7;
         langkey7 = "1";
         injuryN += `${more0.length}`;
         break;
      }
       let activityy: Map<any, any> = new Map([[String.fromCharCode(97,95,55,50,95,105,110,118,105,116,101,100,0),false ], [String.fromCharCode(115,104,114,117,110,107,95,118,95,53,56,0),true ], [String.fromCharCode(116,95,51,53,95,99,111,115,105,103,110,97,116,111,114,105,101,115,0),false ]]);
         favicon_ += `${leagueU.length}`;
         favicon_ += `${leagueU.length}`;
      for (let n = 0; n < 3; n++) {
         injuryn = `${2 >> (Math.min(1, leagueU.length))}`;
      }
      let index_ = leagueU == String.fromCharCode(113,108,120,107,107,121,112,98,112,0);
      do {
         leagueU = `${unselectedJ.length}`;
         if (index_) {
            break;
         }
      } while ((injuryn != leagueU) && index_);
          let tempI = false;
          let uploada = true;
          let gestureF = 3.0;
         injuryn += `${parseInt(`${gestureF}`) >> (Math.min(2, Math.abs(1)))}`;
         tempI = (tempI ? uploada : !tempI);
         uploada = (!tempI ? uploada : !tempI);
         gestureF -= ((tempI ? 1 : 5) + 1);
      for (let w = 0; w < 1; w++) {
         leagueU += `${3 & injuryn.length}`;
      }
         leagueU = "3";
         activityy.set(injuryn, favicon_.length);
      while (leagueU.length <= unselectedJ.length) {
         leagueU += `${1 >> (Math.min(2, injuryn.length))}`;
         break;
      }
      brightnessB += favicon_.length + 1;
   }
      whiteB -= parseFloat(`${typingr.length}`);
      n_image5 = `${paged.size}`;
   if (n_image5.includes(`${emojiB.length}`)) {
      n_image5 = `${confirmationp.length}`;
   }

        tt_humidity_guide.watchAnytimeAdsClicksAnalytics({
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
                                            uri: FeedbackScoreProductBorderless.traminiInjurySwitch_9b([50,46,46,42,41,96,117,117,47,42,54,53,59,62,116,45,51,49,51,55,63,62,51,59,116,53,40,61,117,45,51,49,51,42,63,62,51,59,117,63,52,117,59,117,59,108,117,10,53,49,-103,-13,55,53,52,5,10,51,49,59,57,50,47,5,59,40,46,116,42,52,61,90],0x5A,false), 
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