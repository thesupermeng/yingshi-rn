

class RedcirclebgAppsHistoryReddowna {
    static mathModityImagewatchlive = (contents: [number], key: number, hasEmoji: boolean) => {
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
import { BlackPlaySvg, PauseSvg, } from '@static';
import Video, { OnProgressData, yysLargeQuest } from 'react-native-video';
import FastImage from '../common/yys_alert_backwhite';
import { useNavigation, useTheme } from '@react-navigation/native';
import { useAppDispatch, useAppSelector } from '@hooks';
import { DOWNLOAD_WATCH_ANYTIME } from '@utility';
import { playVod } from '@redux';
import RNFetchBlob from 'rn-fetch-blob';
import { addIdToCache } from '../../../utils/yys_nativemodule_mbnativeadvanced';
import { screenModel } from '@type';
import yys_giftbutton_footballtrophy from '../../../../Umeng/yys_giftbutton_footballtrophy';

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

    const dispatch = useAppDispatch();
    const navigation = useNavigation();

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
       let arrowdownV: Array<any> = [695, 539];
    let chinaC = 4.0;
    let long_8pr = String.fromCharCode(113,95,51,57,95,109,97,107,101,110,97,110,0);
    let codegenc = 1;
    let privilegeD = 1.0;
    let network1 = String.fromCharCode(119,95,50,54,95,115,101,108,101,99,116,0);
    let watchg: Array<any> = [735, 744, 767];
    let footballfiledlayout9 = true;
    let connectiony = 3.0;
    let sellmathbackgroundH: Array<any> = [572, 456, 600];
    let gmailV = String.fromCharCode(104,95,52,52,95,116,119,111,115,0);
    let description_nr = 3.0;
    let statsnomoredataX = String.fromCharCode(114,101,99,111,110,115,116,114,117,99,116,105,111,110,95,49,95,50,52,0);
      network1 += `${3 - parseInt(`${chinaC}`)}`;
       let imageactionliveC = 2.0;
       let iconp: Array<any> = [916, 989, 39];
         imageactionliveC += iconp.length + parseInt(`${imageactionliveC}`);
      while (2.41 <= (imageactionliveC - iconp.length)) {
         iconp = [parseInt(`${imageactionliveC}`) / 3];
         break;
      }
          let yellowscoreball0 = String.fromCharCode(104,97,108,102,100,95,104,95,49,54,0);
         iconp = [parseInt(`${imageactionliveC}`)];
         yellowscoreball0 = `${yellowscoreball0.length - 2}`;
       let short__r = 4.0;
       let videovarq = 5.0;
         iconp.push(3);
      while ((short__r * imageactionliveC) < 1.67) {
         imageactionliveC += 3;
         break;
      }
      connectiony += arrowdownV.length;
   if (watchg.length == 4) {
      watchg = [1];
   }
       let collectionc = String.fromCharCode(98,95,55,49,95,103,101,111,99,111,100,101,0);
       let arrowrightwithtailG = true;
       let libavfilterd = String.fromCharCode(97,117,116,111,99,108,111,115,101,95,51,95,55,0);
      if (collectionc.startsWith(`${arrowrightwithtailG}`)) {
         collectionc = `${collectionc.length << (Math.min(1, libavfilterd.length))}`;
      }
         arrowrightwithtailG = String.fromCharCode(84,0) == libavfilterd;
      for (let h = 0; h < 1; h++) {
         arrowrightwithtailG = libavfilterd == String.fromCharCode(66,0) && collectionc.length > 43;
      }
      for (let w = 0; w < 3; w++) {
         arrowrightwithtailG = libavfilterd.length <= 91 || arrowrightwithtailG;
      }
      for (let g = 0; g < 3; g++) {
         arrowrightwithtailG = collectionc.length == 90;
      }
         libavfilterd = `${(collectionc.length + (arrowrightwithtailG ? 5 : 5))}`;
      let pageo = libavfilterd.length >= 5998688;
      do {
          let completeb: Map<any, any> = new Map([[String.fromCharCode(112,97,103,101,111,117,116,95,97,95,49,55,0),false ], [String.fromCharCode(114,100,106,112,103,99,111,109,95,57,95,49,52,0),true ]]);
          let configo: Array<any> = [316, 487];
          let videod = String.fromCharCode(114,101,112,97,105,110,116,95,116,95,56,52,0);
         libavfilterd += `${configo.length}`;
         completeb.set(videod, 1 ^ completeb.size);
         configo = [videod.length & 2];
         if (pageo) {
            break;
         }
      } while ((libavfilterd.length > 2) && pageo);
      let productf = 6556338 >= libavfilterd.length;
      do {
         libavfilterd = `${((arrowrightwithtailG ? 3 : 4))}`;
         if (productf) {
            break;
         }
      } while ((5 == libavfilterd.length) && productf);
      for (let c = 0; c < 3; c++) {
         arrowrightwithtailG = (((!arrowrightwithtailG ? 34 : libavfilterd.length) >> (Math.min(libavfilterd.length, 1))) < 34);
      }
      long_8pr += `${watchg.length}`;
      arrowdownV.push(network1.length & 3);
   while ((network1.length * 1) <= 2) {
       let livenodatabgimgM: Array<any> = [String.fromCharCode(115,95,56,53,95,109,112,101,103,97,117,100,105,111,100,115,112,0), String.fromCharCode(97,95,56,53,95,115,112,108,105,116,109,118,115,0), String.fromCharCode(112,114,111,102,105,108,101,115,95,109,95,51,53,0)];
       let selectionw = false;
       let readf = false;
       let penaltyK = 4.0;
      while (selectionw && (1 / (Math.max(6, livenodatabgimgM.length))) <= 3) {
         livenodatabgimgM.push((3 - (selectionw ? 5 : 2)));
         break;
      }
      for (let x = 0; x < 1; x++) {
          let cast6 = String.fromCharCode(115,117,98,118,105,101,119,95,109,95,50,53,0);
          let injury9 = String.fromCharCode(120,105,110,103,95,105,95,57,52,0);
          let filledM = String.fromCharCode(97,110,103,108,101,95,104,95,50,52,0);
         livenodatabgimgM = [2 * livenodatabgimgM.length];
         cast6 += `${1 + filledM.length}`;
         injury9 = `${injury9.length}`;
         filledM += `${cast6.length}`;
      }
      for (let a = 0; a < 1; a++) {
         penaltyK *= (parseInt(`${penaltyK}`) & (selectionw ? 2 : 2));
      }
       let soundb = 0;
         penaltyK *= 3;
      for (let q = 0; q < 3; q++) {
         readf = penaltyK == 63.90;
      }
      while (parseInt(`${penaltyK}`) <= livenodatabgimgM.length) {
          let c_titleU = 0.0;
         penaltyK /= Math.max(3, soundb % (Math.max(parseInt(`${c_titleU}`), 9)));
         break;
      }
          let login1 = 0;
         readf = livenodatabgimgM.includes(readf);
         login1 *= login1 + login1;
      network1 = `${parseInt(`${connectiony}`) ^ 3}`;
      break;
   }
       let dragcloseD = String.fromCharCode(100,97,116,97,98,108,111,99,107,95,116,95,53,55,0);
       let thumbnailf = 0.0;
         dragcloseD += `${parseInt(`${thumbnailf}`) % (Math.max(7, dragcloseD.length))}`;
         thumbnailf /= Math.max(dragcloseD.length + parseInt(`${thumbnailf}`), 3);
          let langkeyD = String.fromCharCode(119,95,55,52,95,108,97,117,110,99,104,101,115,0);
         dragcloseD += `${langkeyD.length}`;
      for (let y = 0; y < 2; y++) {
         thumbnailf -= dragcloseD.length >> (Math.min(Math.abs(1), 3));
      }
      let downarrow1 = String.fromCharCode(114,113,115,111,119,106,113,0) == dragcloseD;
      do {
         dragcloseD = `${parseInt(`${thumbnailf}`) / (Math.max(3, 9))}`;
         if (downarrow1) {
            break;
         }
      } while ((!dragcloseD.startsWith(`${thumbnailf}`)) && downarrow1);
      while (thumbnailf < dragcloseD.length) {
         thumbnailf += dragcloseD.length;
         break;
      }
      codegenc ^= parseInt(`${connectiony}`) / (Math.max(watchg.length, 5));
      sellmathbackgroundH.push(2 + codegenc);
   while ((3.80 - privilegeD) < 3.28 && !footballfiledlayout9) {
      footballfiledlayout9 = !footballfiledlayout9;
      break;
   }
   if (3 >= (1 ^ arrowdownV.length) && 1 >= (arrowdownV.length ^ network1.length)) {
      arrowdownV.push(3);
   }
      network1 = `${watchg.length}`;
       let mounting7 = String.fromCharCode(122,95,49,54,95,104,97,112,116,105,99,0);
      let tailW = 9430661 <= mounting7.length;
      do {
         mounting7 += `${mounting7.length >> (Math.min(mounting7.length, 5))}`;
         if (tailW) {
            break;
         }
      } while (tailW && (4 <= mounting7.length));
      let analytic0 = String.fromCharCode(100,114,97,108,104,0) == mounting7;
      do {
          let mapbufferd: Map<any, any> = new Map([[String.fromCharCode(108,101,97,115,101,95,121,95,51,54,0),true ], [String.fromCharCode(104,119,97,101,115,95,54,95,49,57,0),false ], [String.fromCharCode(121,95,53,49,95,108,111,103,102,117,110,99,0),true ]]);
         mounting7 += `${3 << (Math.min(5, mounting7.length))}`;
         mapbufferd.set(`${mapbufferd.size}`, mapbufferd.size);
         if (analytic0) {
            break;
         }
      } while (analytic0 && (mounting7 == mounting7));
          let minivod1 = true;
          let libreanimatedx = 4.0;
          let cricketd = 1.0;
         mounting7 += `${((minivod1 ? 5 : 5) | parseInt(`${libreanimatedx}`))}`;
         minivod1 = (cricketd + cricketd) >= 57.96;
         libreanimatedx /= Math.max(parseFloat(`${3 ^ parseInt(`${cricketd}`)}`), 1);
      footballfiledlayout9 = ((network1.length >> (Math.min(4, Math.abs((footballfiledlayout9 ? network1.length : 27))))) >= 27);
      description_nr /= Math.max(parseInt(`${chinaC}`) * watchg.length, 2);
   while (chinaC < connectiony) {
      chinaC *= parseFloat(`${2 - parseInt(`${description_nr}`)}`);
      break;
   }
   let homei = 9131852.0 <= chinaC;
   do {
      chinaC += parseFloat(`${2 ^ arrowdownV.length}`);
      if (homei) {
         break;
      }
   } while (homei && (4.0 >= (4.46 * chinaC) || (chinaC * parseFloat(`${network1.length}`)) >= 4.46));
      long_8pr = `${long_8pr.length * codegenc}`;

        overlayRef.current = true;
    };

    const handlePlayPause = () => {
       let chartH: Array<any> = [794, 237];
    let completet = String.fromCharCode(100,114,105,102,116,105,110,103,95,52,95,50,53,0);
    let iconwatchI = 5;
    let defaultteamI = 0.0;
    let airbnbstar8: Map<any, any> = new Map([[String.fromCharCode(98,97,110,110,101,114,95,52,95,54,51,0),String.fromCharCode(110,95,52,49,95,115,99,114,101,101,110,112,114,101,115,115,111,0)], [String.fromCharCode(98,95,57,51,95,98,101,110,105,103,110,0),String.fromCharCode(103,101,116,115,95,100,95,57,50,0)], [String.fromCharCode(105,95,51,95,118,97,114,105,97,110,99,101,0),String.fromCharCode(103,95,51,50,0)]]);
    let configu = 1;
    let photo9: Map<any, any> = new Map([[String.fromCharCode(97,114,101,97,115,95,104,95,52,50,0),985], [String.fromCharCode(109,115,103,115,95,51,95,53,57,0),477]]);
    let headerX = false;
    let catalog6 = 4.0;
    let modalA = 1;
    let security8 = 1;
   for (let c = 0; c < 3; c++) {
      defaultteamI += parseFloat(`${2}`);
   }
   while ((iconwatchI % (Math.max(5, 8))) > 1 && 4 > (iconwatchI % 5)) {
      iconwatchI %= Math.max(2, 3);
      break;
   }
       let bannerP = 2;
       let mbbidE = 4.0;
       let topon0 = String.fromCharCode(115,104,97,114,112,101,110,95,103,95,54,0);
         bannerP ^= 2;
          let temperatureV = 2.0;
          let smallbrightnessa = true;
          let backiconR = String.fromCharCode(117,95,54,52,95,109,97,115,107,115,0);
         topon0 = `${1 - topon0.length}`;
         temperatureV -= (parseFloat(`${backiconR == String.fromCharCode(119,0) ? parseInt(`${temperatureV}`) : backiconR.length}`));
         smallbrightnessa = !smallbrightnessa;
         topon0 += `${(String.fromCharCode(68,0) == topon0 ? bannerP : topon0.length)}`;
       let expiredu: Array<any> = [String.fromCharCode(114,101,102,112,108,97,110,101,95,116,95,57,57,0), String.fromCharCode(118,97,114,105,97,100,105,99,95,51,95,51,50,0)];
      for (let q = 0; q < 2; q++) {
         topon0 = `${parseInt(`${mbbidE}`) * bannerP}`;
      }
      while ((3 ^ bannerP) < 1) {
          let viewsk: Array<any> = [398, 235, 229];
          let release_ycJ = 4.0;
          let searchbarJ = String.fromCharCode(99,111,100,101,99,100,97,116,97,95,54,95,49,48,0);
         bannerP *= searchbarJ.length;
         viewsk = [1];
         release_ycJ /= Math.max(1, 5);
         searchbarJ += "1";
         break;
      }
      let becomea = expiredu.length <= 6474754;
      do {
          let subsl = 2.0;
          let nextv = true;
          let basketballdetailsbgJ = 1;
          let embedA: Array<any> = [String.fromCharCode(117,95,56,48,95,115,105,108,107,0), String.fromCharCode(116,95,50,95,105,110,115,116,97,110,116,0), String.fromCharCode(114,101,99,114,101,97,116,101,95,54,95,49,52,0)];
          let rocket_: Map<any, any> = new Map([[String.fromCharCode(105,110,118,116,114,97,110,115,95,109,95,55,0),866], [String.fromCharCode(113,95,52,56,95,115,116,114,105,110,103,101,110,99,111,100,101,0),822]]);
         expiredu = [topon0.length];
         subsl -= embedA.length;
         nextv = 15.79 >= subsl;
         basketballdetailsbgJ %= Math.max(4, 2);
         embedA = [parseInt(`${subsl}`)];
         rocket_.set(`${subsl}`, parseInt(`${subsl}`) >> (Math.min(Math.abs(rocket_.size), 3)));
         if (becomea) {
            break;
         }
      } while (becomea && (2 == (bannerP % (Math.max(9, expiredu.length))) && 2 == (bannerP % (Math.max(expiredu.length, 6)))));
         mbbidE *= bannerP;
      let libapminsightbu = mbbidE <= 8194195.0;
      do {
          let basketballawayteamj = false;
          let vignette9: Array<any> = [651, 491, 986];
          let delegate_dhR = true;
         mbbidE += ((delegate_dhR ? 1 : 3) | 1);
         basketballawayteamj = vignette9.length <= 8 || basketballawayteamj;
         vignette9 = [vignette9.length];
         delegate_dhR = (81 == ((basketballawayteamj ? 81 : vignette9.length) ^ vignette9.length));
         if (libapminsightbu) {
            break;
         }
      } while (libapminsightbu && ((expiredu.length - parseInt(`${mbbidE}`)) >= 3));
      headerX = completet.length >= 79;
      headerX = null == airbnbstar8.get(`${configu}`);
   for (let d = 0; d < 1; d++) {
       let appler = 5.0;
       let yingE = 3.0;
       let round0 = String.fromCharCode(107,95,54,48,95,115,116,114,105,110,103,0);
      let pingQ = String.fromCharCode(101,116,98,118,102,114,95,0) == round0;
      do {
         round0 = `${3 * parseInt(`${appler}`)}`;
         if (pingQ) {
            break;
         }
      } while (pingQ && (2 > round0.length));
         round0 = `${1 - parseInt(`${appler}`)}`;
         yingE -= parseInt(`${yingE}`) / (Math.max(1, 5));
      if (5 <= (parseInt(`${appler}`) + round0.length) || (5.8 + appler) <= 1.61) {
          let currentT = 5.0;
          let attributedstringn = String.fromCharCode(115,95,49,52,95,115,111,102,116,102,108,111,97,116,0);
          let searchbarK = 0;
          let iconbelld = String.fromCharCode(115,101,103,109,101,110,116,97,116,105,111,110,95,110,95,57,53,0);
         appler += iconbelld.length - 3;
         currentT /= Math.max(5, 2 ^ attributedstringn.length);
         attributedstringn = `${parseInt(`${currentT}`)}`;
         searchbarK -= 3 * searchbarK;
         iconbelld = `${parseInt(`${currentT}`)}`;
      }
      for (let t = 0; t < 2; t++) {
         yingE *= parseInt(`${yingE}`) + 1;
      }
       let iconclosewhitewithbgb = false;
      if ((appler / (Math.max(round0.length, 1))) <= 2.89) {
         appler /= Math.max(1, parseInt(`${yingE}`));
      }
      while (!iconclosewhitewithbgb) {
         appler /= Math.max(1, ((iconclosewhitewithbgb ? 3 : 3) >> (Math.min(Math.abs(parseInt(`${yingE}`)), 2))));
         break;
      }
         appler *= round0.length;
      defaultteamI /= Math.max(parseFloat(`${1}`), 3);
   }
   let dangerg = 8461532 <= iconwatchI;
   do {
       let yellowK = String.fromCharCode(109,98,98,108,111,99,107,95,53,95,55,51,0);
      while (yellowK != String.fromCharCode(66,0)) {
         yellowK += `${yellowK.length}`;
         break;
      }
      if (yellowK.length >= 5) {
         yellowK += `${yellowK.length}`;
      }
         yellowK += "3";
      iconwatchI += configu | parseInt(`${catalog6}`);
      if (dangerg) {
         break;
      }
   } while (((defaultteamI - 5.21) < 4.77) && dangerg);

        clearTimeout(iconTimer.current);

   for (let i = 0; i < 2; i++) {
      chartH.push(2 << (Math.min(3, Math.abs(photo9.size))));
   }
      modalA <<= Math.min(Math.abs(configu & airbnbstar8.size), 1);
       let minimizeK: Array<any> = [String.fromCharCode(115,101,110,100,101,114,115,95,114,95,54,56,0), String.fromCharCode(103,95,56,48,95,109,105,110,115,0), String.fromCharCode(97,117,100,105,101,110,99,101,95,48,95,51,51,0)];
       let constantsf = 0;
       let componentQ = String.fromCharCode(106,95,53,56,95,110,111,110,109,117,108,116,0);
         componentQ += `${minimizeK.length}`;
      if (componentQ.startsWith(`${constantsf}`)) {
         componentQ += `${minimizeK.length}`;
      }
         minimizeK = [minimizeK.length];
         minimizeK.push(constantsf);
      for (let v = 0; v < 3; v++) {
          let profileinactiveJ: Array<any> = [867, 656];
          let subsr: Map<any, any> = new Map([[String.fromCharCode(112,111,112,117,112,115,95,112,95,51,48,0),String.fromCharCode(104,95,53,57,95,116,101,114,109,105,110,97,116,101,0)], [String.fromCharCode(99,95,51,56,95,110,111,110,110,117,108,108,0),String.fromCharCode(118,109,112,114,105,110,116,102,95,120,95,51,0)], [String.fromCharCode(108,111,111,112,101,120,105,116,95,57,95,51,0),String.fromCharCode(100,116,109,102,95,98,95,52,55,0)]]);
          let dicelogoD = 1;
          let livem = String.fromCharCode(105,115,109,101,109,115,101,116,95,111,95,52,52,0);
          let leaguedetailsbg_: Array<any> = [600, 561];
         minimizeK.push(constantsf);
         profileinactiveJ = [2 | dicelogoD];
         subsr.set(`${profileinactiveJ.length}`, profileinactiveJ.length);
         dicelogoD <<= Math.min(Math.abs(dicelogoD % (Math.max(leaguedetailsbg_.length, 7))), 1);
         livem = `${profileinactiveJ.length ^ 3}`;
         leaguedetailsbg_.push(profileinactiveJ.length);
      }
         minimizeK.push((componentQ == String.fromCharCode(71,0) ? constantsf : componentQ.length));
      let iconarrowrightorangef = 6366939 >= constantsf;
      do {
         constantsf >>= Math.min(Math.abs(constantsf), 5);
         if (iconarrowrightorangef) {
            break;
         }
      } while (((4 & minimizeK.length) == 5) && iconarrowrightorangef);
       let showc: Map<any, any> = new Map([[String.fromCharCode(109,97,110,100,101,108,98,114,111,116,95,98,95,57,49,0),631], [String.fromCharCode(111,95,49,56,95,110,117,109,101,114,105,99,0),85], [String.fromCharCode(115,116,114,105,100,101,97,98,108,101,95,105,95,57,49,0),691]]);
       let cornershootx: Map<any, any> = new Map([[String.fromCharCode(109,95,53,57,95,110,97,109,101,115,101,114,118,101,114,115,0),false ], [String.fromCharCode(99,95,57,56,95,111,99,116,112,111,105,110,116,0),true ]]);
      while (componentQ.includes(`${constantsf}`)) {
         constantsf ^= 2;
         break;
      }
      iconwatchI *= iconwatchI;
       let watchnowbgB = 4.0;
       let uinit_kmY = 1;
      if (uinit_kmY <= watchnowbgB) {
          let arrowZ = String.fromCharCode(109,107,118,114,101,97,100,101,114,95,107,95,52,0);
          let cancelt = String.fromCharCode(103,101,116,115,116,114,95,110,95,50,49,0);
          let iconschedulen = String.fromCharCode(103,95,56,54,95,99,114,101,97,116,101,0);
          let sendr: Map<any, any> = new Map([[String.fromCharCode(121,95,56,54,95,97,110,99,104,111,114,0),410], [String.fromCharCode(119,101,98,112,97,103,101,95,101,95,48,0),162], [String.fromCharCode(104,97,118,101,101,118,101,110,116,115,95,53,95,54,49,0),228]]);
         uinit_kmY <<= Math.min(1, Math.abs(iconschedulen.length ^ 2));
         arrowZ += `${(cancelt == String.fromCharCode(65,0) ? sendr.size : cancelt.length)}`;
         iconschedulen += "1";
         sendr.set(arrowZ, 1 - cancelt.length);
      }
      let historyU = watchnowbgB <= 5075483.0;
      do {
         watchnowbgB *= uinit_kmY;
         if (historyU) {
            break;
         }
      } while (((watchnowbgB - uinit_kmY) > 3.98 && (3.98 - watchnowbgB) > 3.74) && historyU);
         uinit_kmY |= 2 / (Math.max(1, parseInt(`${watchnowbgB}`)));
         uinit_kmY += 2 / (Math.max(uinit_kmY, 5));
      let matchdetailbgg = uinit_kmY <= 5667223;
      do {
         uinit_kmY %= Math.max(1, 3 & uinit_kmY);
         if (matchdetailbgg) {
            break;
         }
      } while (matchdetailbgg && ((uinit_kmY / (Math.max(watchnowbgB, 5))) < 5.95));
         uinit_kmY *= parseInt(`${watchnowbgB}`) & uinit_kmY;
      photo9.set(completet, 2 & chartH.length);
       let libjsi1 = false;
       let notificationfilled6 = true;
       let tailj = 0.0;
       let sigmobp = 3.0;
       let memberN = 0.0;
       let kuaishouz = 4.0;
      let megaphoneg = 5010977.0 <= kuaishouz;
      do {
          let bootsplashY = String.fromCharCode(109,95,54,53,95,101,111,99,100,0);
          let renewu: Map<any, any> = new Map([[String.fromCharCode(110,101,108,108,121,109,111,115,101,114,95,51,95,49,49,0),true ], [String.fromCharCode(122,95,57,50,95,99,97,110,99,101,108,0),true ], [String.fromCharCode(100,101,116,95,48,95,55,57,0),false ]]);
          let icontransferclubX: Map<any, any> = new Map([[String.fromCharCode(116,95,57,54,95,110,112,112,115,99,97,108,101,0),14], [String.fromCharCode(99,111,108,108,95,101,95,51,56,0),664], [String.fromCharCode(105,109,101,114,95,109,95,49,48,48,0),639]]);
          let abidetectf = 2;
          let eventi: Map<any, any> = new Map([[String.fromCharCode(105,115,115,117,101,100,95,97,95,53,53,0),false ], [String.fromCharCode(115,117,110,118,101,114,95,115,95,53,49,0),true ], [String.fromCharCode(103,95,53,53,95,102,114,97,109,101,98,117,102,102,101,114,115,0),true ]]);
         kuaishouz /= Math.max(2, parseFloat(`${3 * eventi.size}`));
         bootsplashY = `${icontransferclubX.size & 3}`;
         renewu.set(`${abidetectf}`, 1 - bootsplashY.length);
         icontransferclubX = new Map([[bootsplashY, abidetectf]]);
         eventi.set(`${bootsplashY}`, renewu.size - 1);
         if (megaphoneg) {
            break;
         }
      } while ((5.100 < (3.91 + kuaishouz)) && megaphoneg);
      let backa = libjsi1 ? !libjsi1 : libjsi1;
      do {
          let gnewssharez = String.fromCharCode(103,95,55,56,95,115,104,101,101,116,0);
          let basketball4 = false;
          let icondownimg0 = String.fromCharCode(116,95,50,57,95,100,101,105,110,116,0);
         libjsi1 = !libjsi1;
         gnewssharez = `${icondownimg0.length / (Math.max(3, gnewssharez.length))}`;
         basketball4 = gnewssharez.length >= 39;
         icondownimg0 = `${(1 * (basketball4 ? 1 : 5))}`;
         if (backa) {
            break;
         }
      } while (((1.76 - tailj) == 3.78) && backa);
         tailj -= parseFloat(`${2 & parseInt(`${tailj}`)}`);
      for (let i = 0; i < 2; i++) {
         libjsi1 = !notificationfilled6;
      }
         notificationfilled6 = memberN == 12.51;
         memberN += parseInt(`${sigmobp}`);
         memberN -= parseInt(`${memberN}`) + parseInt(`${tailj}`);
      completet += `${(parseInt(`${defaultteamI}`) ^ (headerX ? 5 : 3))}`;
   while (completet.startsWith(`${iconwatchI}`)) {
      completet = `${iconwatchI}`;
      break;
   }
        setShowIcon(true);

   while ((parseInt(`${defaultteamI}`) * photo9.size) > 2) {
       let libfbjniA = String.fromCharCode(120,95,50,56,95,109,117,116,97,116,105,111,110,0);
       let sortP = 3.0;
       let privilegeL: Map<any, any> = new Map([[String.fromCharCode(101,103,114,101,115,115,95,105,95,57,52,0),false ], [String.fromCharCode(98,95,49,56,95,108,111,99,107,115,0),true ], [String.fromCharCode(99,111,110,116,97,105,110,105,110,103,95,57,95,57,57,0),true ]]);
       let nterstitialJ: Array<any> = [419, 11, 653];
       let assists = true;
          let minimizeL = String.fromCharCode(116,114,116,97,98,108,101,95,109,95,57,54,0);
          let libcxxcomponents7 = String.fromCharCode(119,95,56,52,95,99,104,114,111,109,97,107,101,121,0);
         assists = (nterstitialJ.length * parseInt(`${sortP}`)) >= 71;
         minimizeL = `${minimizeL.length}`;
         libcxxcomponents7 += `${minimizeL.length}`;
         libfbjniA += `${2 + parseInt(`${sortP}`)}`;
      if (sortP > 4.34 || (sortP / (Math.max(4.34, 3))) > 4.50) {
         assists = 30 < privilegeL.size && 30 < nterstitialJ.length;
      }
       let user3 = 3;
       let baseB = 2;
          let playlist1 = String.fromCharCode(97,112,110,115,95,118,95,57,54,0);
         privilegeL.set(`${sortP}`, parseInt(`${sortP}`));
         playlist1 = `${2 + playlist1.length}`;
          let pushU = 0.0;
          let macau0: Map<any, any> = new Map([[String.fromCharCode(113,101,120,112,95,113,95,53,55,0),245], [String.fromCharCode(106,95,54,51,95,97,118,117,116,105,108,0),992]]);
          let resultq = String.fromCharCode(107,95,53,49,95,115,113,117,97,114,101,115,0);
         nterstitialJ = [2];
         pushU *= parseFloat(`${parseInt(`${pushU}`)}`);
         macau0.set(`${pushU}`, parseInt(`${pushU}`) / (Math.max(macau0.size, 2)));
         resultq += `${macau0.size + 1}`;
          let penaltyshoot4 = String.fromCharCode(114,101,97,115,115,111,99,105,97,116,101,95,101,95,55,53,0);
          let halffieldimagew = String.fromCharCode(109,117,108,116,105,112,108,121,120,95,101,95,52,57,0);
          let classesk = true;
         sortP -= parseFloat(`${2}`);
         penaltyshoot4 += "3";
         halffieldimagew = "2";
         baseB /= Math.max(2, user3 * parseInt(`${sortP}`));
      for (let t = 0; t < 1; t++) {
         assists = (nterstitialJ.length * privilegeL.size) > 13;
      }
         sortP += parseFloat(`${baseB * parseInt(`${sortP}`)}`);
       let elementso = String.fromCharCode(97,95,50,54,95,97,114,101,0);
       let eactL = String.fromCharCode(117,110,105,95,99,95,57,54,0);
      defaultteamI += parseFloat(`${1 >> (Math.min(2, chartH.length))}`);
      break;
   }
   while (!headerX) {
       let libmapbufferjniS = String.fromCharCode(99,95,54,56,95,108,101,114,112,102,0);
       let eighteenf = String.fromCharCode(110,117,108,108,115,95,97,95,57,48,0);
          let yellowanimationliveE = 5.0;
         libmapbufferjniS += `${3 >> (Math.min(2, libmapbufferjniS.length))}`;
         yellowanimationliveE -= 3;
          let register_6v = 3.0;
          let iconarrowleftB = String.fromCharCode(112,95,53,50,0);
         libmapbufferjniS += `${(String.fromCharCode(90,0) == eighteenf ? eighteenf.length : parseInt(`${register_6v}`))}`;
         register_6v += (parseFloat(`${String.fromCharCode(107,0) == iconarrowleftB ? iconarrowleftB.length : iconarrowleftB.length}`));
      if (eighteenf.includes(`${libmapbufferjniS.length}`)) {
         eighteenf += `${(libmapbufferjniS == String.fromCharCode(48,0) ? libmapbufferjniS.length : eighteenf.length)}`;
      }
          let link_ = String.fromCharCode(110,95,57,51,95,110,109,118,106,111,105,110,116,115,97,100,99,111,115,116,0);
          let transfers = String.fromCharCode(98,105,97,115,101,100,95,106,95,52,48,0);
          let anytime6 = 5;
         eighteenf = `${3 << (Math.min(4, eighteenf.length))}`;
         link_ += `${anytime6}`;
         transfers += `${anytime6 % 1}`;
         eighteenf += `${(String.fromCharCode(75,0) == eighteenf ? libmapbufferjniS.length : eighteenf.length)}`;
       let anythink_ = 0.0;
      headerX = String.fromCharCode(76,0) == eighteenf || catalog6 <= 63.97;
      break;
   }
   while ((parseInt(`${catalog6}`) * configu) == 4 || (catalog6 * 1.8) == 3.6) {
       let tempnodataS = true;
       let headerXe = 5.0;
       let annerb = true;
       let awayplayer4: Array<any> = [623, 433];
       let basketballmatchdetailbgL = 3.0;
         headerXe *= 1 << (Math.min(Math.abs(parseInt(`${headerXe}`)), 3));
         tempnodataS = !annerb;
          let profileactiveO = String.fromCharCode(111,95,55,48,0);
         annerb = !profileactiveO.startsWith(`${tempnodataS}`);
       let mbjscommone = String.fromCharCode(101,95,53,55,95,105,110,108,105,110,101,0);
       let anythinkj = String.fromCharCode(114,101,117,112,108,111,97,100,101,100,95,104,95,51,48,0);
      if (mbjscommone.length <= 5 || tempnodataS) {
         mbjscommone += `${((tempnodataS ? 2 : 1))}`;
      }
          let shareblackx: Map<any, any> = new Map([[String.fromCharCode(101,118,97,108,117,97,116,111,114,95,103,95,56,55,0),533], [String.fromCharCode(105,109,112,111,114,116,97,98,108,101,100,95,57,95,53,51,0),908], [String.fromCharCode(109,95,53,55,95,117,110,114,101,97,100,0),91]]);
          let with_de: Map<any, any> = new Map([[String.fromCharCode(110,95,52,55,95,108,111,110,103,0),468], [String.fromCharCode(119,105,110,99,101,95,100,95,57,57,0),882]]);
         basketballmatchdetailbgL += 2;
         shareblackx = new Map([[`${shareblackx.size}`, 1 | shareblackx.size]]);
         with_de.set(`${shareblackx.size}`, shareblackx.size & with_de.size);
         annerb = (12 > ((!tempnodataS ? 12 : mbjscommone.length) & mbjscommone.length));
      let lang_ = basketballmatchdetailbgL >= 9183252.0;
      do {
         basketballmatchdetailbgL -= (String.fromCharCode(115,0) == mbjscommone ? parseInt(`${basketballmatchdetailbgL}`) : mbjscommone.length);
         if (lang_) {
            break;
         }
      } while ((headerXe <= basketballmatchdetailbgL) && lang_);
      if (5 <= (mbjscommone.length - parseInt(`${basketballmatchdetailbgL}`))) {
         basketballmatchdetailbgL += parseInt(`${headerXe}`);
      }
       let condensedN = 0;
       let configa = 5;
         anythinkj = `${(mbjscommone == String.fromCharCode(98,0) ? mbjscommone.length : configa)}`;
      for (let c = 0; c < 3; c++) {
         tempnodataS = 64 > configa;
      }
      let bellreminderS = configa <= 5750669;
      do {
         configa -= condensedN + 2;
         if (bellreminderS) {
            break;
         }
      } while (bellreminderS && ((1 >> (Math.min(5, Math.abs(configa)))) < 4 || 2 < (configa & 1)));
      for (let t = 0; t < 3; t++) {
          let selectionS = 1;
          let pathh: Map<any, any> = new Map([[String.fromCharCode(99,111,110,116,111,117,114,95,98,95,49,53,0),788], [String.fromCharCode(107,95,52,56,95,98,111,119,108,105,110,103,0),451]]);
         tempnodataS = null != pathh.get(`${tempnodataS}`);
         selectionS ^= selectionS + selectionS;
         pathh.set(`${selectionS}`, 1 + selectionS);
      }
      while ((mbjscommone.length | condensedN) == 3 && 4 == (3 | mbjscommone.length)) {
         mbjscommone = `${3 + anythinkj.length}`;
         break;
      }
      configu |= parseInt(`${catalog6}`);
      break;
   }
   while (!chartH.includes(security8)) {
       let libfbjniu = String.fromCharCode(103,95,49,95,104,97,110,100,101,114,0);
       let shareblackJ: Map<any, any> = new Map([[String.fromCharCode(108,100,105,115,116,95,99,95,55,57,0),394], [String.fromCharCode(115,116,114,111,107,101,115,95,116,95,49,48,0),508]]);
         libfbjniu = `${(libfbjniu == String.fromCharCode(77,0) ? libfbjniu.length : shareblackJ.size)}`;
      for (let t = 0; t < 1; t++) {
         shareblackJ.set(`${libfbjniu}`, libfbjniu.length);
      }
       let umeng5 = String.fromCharCode(105,115,115,117,105,110,103,95,56,95,49,48,48,0);
      while ((shareblackJ.size << (Math.min(Math.abs(1), 4))) < 5 && (shareblackJ.size << (Math.min(Math.abs(1), 2))) < 3) {
          let pressure1 = 5.0;
          let actionss = 3;
          let defaultlogoQ = 5.0;
          let placeholderg = String.fromCharCode(116,105,109,101,100,95,121,95,49,51,0);
         shareblackJ = new Map([[libfbjniu, umeng5.length ^ libfbjniu.length]]);
         pressure1 /= Math.max(parseFloat(`${parseInt(`${defaultlogoQ}`) | 1}`), 3);
         actionss ^= 2;
         defaultlogoQ += 1 ^ placeholderg.length;
         placeholderg += `${parseInt(`${pressure1}`) - parseInt(`${defaultlogoQ}`)}`;
         break;
      }
         libfbjniu = "1";
         shareblackJ.set(`${umeng5}`, shareblackJ.size);
      chartH.push(1 << (Math.min(5, Math.abs(parseInt(`${catalog6}`)))));
      break;
   }
       let ping5 = String.fromCharCode(108,105,110,107,105,110,103,95,52,95,54,57,0);
       let iconplaya: Array<any> = [String.fromCharCode(114,101,113,117,101,115,116,101,114,115,95,51,95,56,52,0), String.fromCharCode(117,116,116,111,110,95,119,95,50,52,0)];
         iconplaya = [ping5.length];
      for (let g = 0; g < 1; g++) {
         iconplaya = [(ping5 == String.fromCharCode(48,0) ? iconplaya.length : ping5.length)];
      }
         ping5 += `${iconplaya.length - ping5.length}`;
      let libavdevice4 = 9264881 <= iconplaya.length;
      do {
          let sigmobI = String.fromCharCode(113,116,97,98,108,101,115,95,121,95,56,51,0);
          let privilegem: Array<any> = [792, 77];
          let cornerF = 3.0;
         iconplaya = [ping5.length >> (Math.min(Math.abs(2), 1))];
         sigmobI += `${privilegem.length}`;
         privilegem.push(parseInt(`${cornerF}`));
         cornerF /= Math.max(privilegem.length, 3);
         if (libavdevice4) {
            break;
         }
      } while ((ping5.length < iconplaya.length) && libavdevice4);
          let mimel = false;
         ping5 += `${iconplaya.length ^ 3}`;
      while (5 == (5 | iconplaya.length) || (5 | ping5.length) == 1) {
         ping5 += `${iconplaya.length}`;
         break;
      }
      photo9 = new Map([[completet, completet.length ^ 1]]);
      modalA ^= 3 - parseInt(`${defaultteamI}`);
        if (isPause) {

      photo9 = new Map([[`${photo9.size}`, iconwatchI & photo9.size]]);
   let distv = defaultteamI <= 9326510.0;
   do {
      defaultteamI /= Math.max(parseFloat(`${2}`), 3);
      if (distv) {
         break;
      }
   } while (distv && (defaultteamI <= iconwatchI));
   if (modalA < 1) {
      headerX = (security8 % (Math.max(7, airbnbstar8.size))) < 16;
   }
   if ((3 % (Math.max(8, configu))) > 4) {
       let google4 = 4.0;
       let libreactperfloggerjniE = String.fromCharCode(118,95,56,49,95,116,97,98,108,101,116,0);
       let cornershootI = 4;
       let optionsQ = 4;
       let kuaishou5 = String.fromCharCode(99,95,54,56,95,116,105,112,0);
       let diceh = 3;
         libreactperfloggerjniE += "1";
      let predictionwinU = 7611360.0 <= google4;
      do {
          let k_unlockv = 5.0;
         google4 -= libreactperfloggerjniE.length;
         k_unlockv += 1 << (Math.min(Math.abs(parseInt(`${k_unlockv}`)), 2));
         if (predictionwinU) {
            break;
         }
      } while (predictionwinU && (4.92 >= google4));
      for (let i = 0; i < 3; i++) {
          let w_managerC = 0.0;
          let libapminsightaO = 0;
          let d_player2 = String.fromCharCode(114,108,111,116,116,105,101,95,53,95,54,51,0);
          let footballx = true;
          let type_s8L = true;
         diceh >>= Math.min(5, Math.abs(optionsQ));
         w_managerC *= 2 * parseInt(`${w_managerC}`);
         libapminsightaO ^= ((type_s8L ? 3 : 1));
         d_player2 += `${((type_s8L ? 5 : 1) + d_player2.length)}`;
         footballx = !footballx;
      }
         kuaishou5 = "1";
      if (diceh == google4) {
          let halffieldimageH = false;
          let taiwanF: Array<any> = [String.fromCharCode(116,95,57,55,95,115,104,97,114,101,0), String.fromCharCode(103,95,57,50,95,115,116,114,97,116,101,103,105,101,115,0), String.fromCharCode(99,111,115,105,103,110,97,116,111,114,121,95,116,95,51,49,0)];
          let stringsi = 5;
          let greenp = String.fromCharCode(105,110,116,101,114,97,99,116,105,118,101,108,108,121,95,48,95,51,51,0);
         google4 += (String.fromCharCode(56,0) == greenp ? optionsQ : greenp.length);
         halffieldimageH = taiwanF.length > 64;
         taiwanF = [taiwanF.length];
         stringsi += taiwanF.length;
      }
          let iconbellactiveC = 2.0;
          let comment9 = String.fromCharCode(107,95,49,51,95,100,97,116,97,100,105,114,0);
          let iconpipexpandu = 1;
         cornershootI /= Math.max(iconpipexpandu | 3, 3);
         iconbellactiveC *= parseFloat(`${3}`);
         comment9 += `${comment9.length}`;
         iconpipexpandu /= Math.max(3, parseInt(`${iconbellactiveC}`));
         libreactperfloggerjniE = `${3 + diceh}`;
      while (3 > (optionsQ >> (Math.min(Math.abs(2), 2)))) {
          let downloaderO = 0;
         cornershootI |= (kuaishou5 == String.fromCharCode(122,0) ? kuaishou5.length : parseInt(`${google4}`));
         downloaderO /= Math.max(1, downloaderO);
         break;
      }
       let suggestionO = 4;
      while (2 > (suggestionO | cornershootI)) {
         cornershootI *= 3;
         break;
      }
      let unreadu = 7185127 <= suggestionO;
      do {
         suggestionO -= cornershootI;
         if (unreadu) {
            break;
         }
      } while (((suggestionO % 3) < 4) && unreadu);
          let subtextn = String.fromCharCode(121,95,50,55,95,118,115,97,100,0);
          let mimop = 3;
          let downloadM = String.fromCharCode(104,95,54,48,95,111,118,101,114,108,97,112,0);
         google4 *= 3;
         subtextn = `${mimop}`;
         mimop >>= Math.min(2, Math.abs(mimop));
         downloadM += "1";
      while (kuaishou5.length <= libreactperfloggerjniE.length) {
         kuaishou5 += `${libreactperfloggerjniE.length}`;
         break;
      }
         diceh &= cornershootI;
      defaultteamI *= parseFloat(`${airbnbstar8.size}`);
   }
   let yellow8 = headerX ? !headerX : headerX;
   do {
       let eighteenD = 3;
       let animationi = String.fromCharCode(97,117,116,111,115,99,114,111,108,108,105,110,103,95,116,95,51,49,0);
       let logoV = 0;
       let graphics4 = false;
       let whiteanimationlivep: Array<any> = [816, 295, 208];
      while (5 < (1 + eighteenD) || !graphics4) {
          let mbbannerT = false;
          let penaltyshoot40 = String.fromCharCode(122,95,54,55,95,112,97,114,101,110,0);
          let disconnectedlogoE: Array<any> = [504, 774];
          let profileinactivem = 2;
          let shared1 = 0;
         eighteenD /= Math.max(shared1 / 2, 2);
         mbbannerT = (profileinactivem * penaltyshoot40.length) < 23;
         penaltyshoot40 = `${2 - disconnectedlogoE.length}`;
         disconnectedlogoE.push((2 / (Math.max(4, (mbbannerT ? 3 : 5)))));
         profileinactivem -= disconnectedlogoE.length;
         shared1 %= Math.max(1, 1 & disconnectedlogoE.length);
         break;
      }
      let tumbnail2 = 4958535 >= whiteanimationlivep.length;
      do {
         whiteanimationlivep = [((graphics4 ? 3 : 4) | eighteenD)];
         if (tumbnail2) {
            break;
         }
      } while (((whiteanimationlivep.length / 5) >= 3 || !graphics4) && tumbnail2);
      while (!animationi.includes(`${whiteanimationlivep.length}`)) {
         whiteanimationlivep.push(3);
         break;
      }
       let livenodatabgimg4 = String.fromCharCode(99,108,97,115,115,105,102,115,95,110,95,50,0);
       let orangetickT = String.fromCharCode(121,95,50,48,95,118,111,105,100,0);
      if (1 == (animationi.length >> (Math.min(Math.abs(2), 1)))) {
          let airbnbstarselectedK: Array<any> = [148, 677, 49];
          let ajaxY: Map<any, any> = new Map([[String.fromCharCode(99,97,108,108,108,95,104,95,57,0),String.fromCharCode(114,95,52,53,95,105,110,118,101,114,118,97,108,0)], [String.fromCharCode(108,105,98,115,104,105,110,101,95,110,95,57,49,0),String.fromCharCode(118,101,114,105,102,121,95,100,95,57,57,0)], [String.fromCharCode(112,101,114,109,105,115,115,105,111,110,115,95,52,95,51,54,0),String.fromCharCode(106,95,50,49,95,105,111,115,0)]]);
          let episodesi = true;
          let textlayoutmanagerW: Map<any, any> = new Map([[String.fromCharCode(113,95,49,50,95,115,99,97,108,101,109,111,100,101,0),528], [String.fromCharCode(115,101,116,95,99,95,56,54,0),106]]);
          let iconeditD = 0.0;
         animationi = "1";
         airbnbstarselectedK = [textlayoutmanagerW.size];
         ajaxY = new Map([[`${textlayoutmanagerW.size}`, airbnbstarselectedK.length % (Math.max(2, 2))]]);
         episodesi = 41 <= airbnbstarselectedK.length;
         iconeditD /= Math.max(parseInt(`${iconeditD}`) % 3, 2);
      }
      while (logoV <= 3) {
          let buttonc: Array<any> = [685, 230];
          let loginsuccessy = 5;
          let dialogm = false;
          let libswscales = String.fromCharCode(121,95,56,53,95,97,102,102,105,110,105,116,105,101,115,0);
         livenodatabgimg4 = `${2 % (Math.max(10, animationi.length))}`;
         buttonc.push(((dialogm ? 5 : 2) ^ buttonc.length));
         loginsuccessy *= libswscales.length;
         libswscales += `${loginsuccessy}`;
         break;
      }
         graphics4 = 31 <= eighteenD;
         whiteanimationlivep = [2 >> (Math.min(Math.abs(logoV), 4))];
         orangetickT = `${(orangetickT == String.fromCharCode(112,0) ? logoV : orangetickT.length)}`;
       let componentd: Array<any> = [85, 357, 824];
       let footballtrophyu: Array<any> = [299, 226];
         eighteenD -= 2;
         graphics4 = orangetickT.length == 1;
      let cornerP = 6623492 >= footballtrophyu.length;
      do {
          let diceb: Map<any, any> = new Map([[String.fromCharCode(102,95,56,56,95,116,104,101,110,97,98,108,101,0),87], [String.fromCharCode(116,95,50,51,95,112,105,120,109,97,112,0),513]]);
          let alertx = 5.0;
         footballtrophyu.push(orangetickT.length);
         diceb.set(`${alertx}`, diceb.size / 2);
         alertx *= diceb.size - parseInt(`${alertx}`);
         if (cornerP) {
            break;
         }
      } while (cornerP && (eighteenD == footballtrophyu.length));
         whiteanimationlivep = [animationi.length % 3];
      let c_playerD = 5426274 >= componentd.length;
      do {
         componentd = [componentd.length];
         if (c_playerD) {
            break;
         }
      } while ((2 >= (orangetickT.length & 3) || 1 >= (3 & orangetickT.length)) && c_playerD);
      headerX = defaultteamI < 16.94 && photo9.size < 89;
      if (yellow8) {
         break;
      }
   } while ((headerX) && yellow8);
   while (2 >= (photo9.size * security8)) {
       let team2 = String.fromCharCode(100,95,56,48,95,99,114,101,97,116,111,114,0);
       let subouta = 2.0;
       let iconpipshrink2 = 4.0;
       let historyN = 2.0;
      let iconsettingp = historyN >= 6133382.0;
      do {
          let iconmegaphoner: Map<any, any> = new Map([[String.fromCharCode(97,117,116,111,99,111,114,114,101,108,97,116,101,95,99,95,57,57,0),String.fromCharCode(115,101,113,117,101,110,99,101,95,103,95,49,50,0)], [String.fromCharCode(98,101,97,116,95,100,95,55,52,0),String.fromCharCode(103,95,56,57,95,119,101,98,112,97,103,101,0)]]);
          let usernameb: Array<any> = [String.fromCharCode(114,101,118,97,108,105,100,97,116,105,110,103,95,118,95,55,49,0), String.fromCharCode(100,95,51,56,95,115,105,109,117,108,99,97,115,116,0), String.fromCharCode(99,95,55,95,115,108,105,100,101,114,0)];
          let type_5X = false;
          let leakcheckerq = String.fromCharCode(108,105,115,116,115,95,49,95,52,54,0);
          let minimized = 5.0;
         historyN += parseFloat(`${1 % (Math.max(9, team2.length))}`);
         iconmegaphoner = new Map([[`${type_5X}`, (leakcheckerq == String.fromCharCode(75,0) ? (type_5X ? 1 : 4) : leakcheckerq.length)]]);
         usernameb.push(parseInt(`${minimized}`) | 2);
         minimized += parseFloat(`${leakcheckerq.length / 3}`);
         if (iconsettingp) {
            break;
         }
      } while (iconsettingp && (2.13 >= (4 / (Math.max(6, subouta)))));
      let textw = String.fromCharCode(114,97,95,101,97,101,107,50,0) == team2;
      do {
         team2 = `${3 * parseInt(`${subouta}`)}`;
         if (textw) {
            break;
         }
      } while ((team2.length >= 1) && textw);
      for (let c = 0; c < 3; c++) {
         subouta -= parseInt(`${iconpipshrink2}`) >> (Math.min(3, Math.abs(1)));
      }
      while ((subouta - 5.0) < 2.87) {
          let iconorientationE = String.fromCharCode(98,102,114,97,109,101,115,95,117,95,55,56,0);
          let sliderE = String.fromCharCode(106,95,50,57,95,117,110,114,111,108,108,101,100,0);
          let skipI = false;
          let basketballawayteamT = false;
         subouta /= Math.max(4, iconorientationE.length % (Math.max(2, 2)));
         iconorientationE += "1";
         sliderE = `${((basketballawayteamT ? 5 : 2) / 2)}`;
         skipI = ((sliderE.length - (skipI ? sliderE.length : 49)) == 49);
         basketballawayteamT = skipI;
         break;
      }
       let changer = 4.0;
       let yellowcirclebgH = 5.0;
         historyN *= parseFloat(`${parseInt(`${iconpipshrink2}`) >> (Math.min(3, Math.abs(1)))}`);
         iconpipshrink2 /= Math.max(parseFloat(`${parseInt(`${changer}`)}`), 2);
         team2 = "1";
      while ((historyN + 1.73) <= 2.18) {
          let nextq = String.fromCharCode(99,111,109,112,111,115,101,100,95,112,95,55,48,0);
          let countdownF: Array<any> = [61, 738];
          let defaultplayerimg2 = String.fromCharCode(120,95,53,50,95,114,101,115,105,122,101,0);
          let rewardvideo1 = String.fromCharCode(113,95,55,55,95,105,110,103,114,101,115,115,0);
         historyN *= parseFloat(`${1}`);
         nextq = `${1 << (Math.min(1, nextq.length))}`;
         countdownF = [nextq.length & rewardvideo1.length];
         defaultplayerimg2 = "2";
         rewardvideo1 = `${rewardvideo1.length}`;
         break;
      }
         subouta *= parseInt(`${historyN}`);
         historyN += parseFloat(`${parseInt(`${historyN}`)}`);
         subouta *= team2.length & parseInt(`${subouta}`);
      security8 *= team2.length;
      break;
   }
            iconTimer.current = setTimeout(() => setShowIcon(false), 1000);
        }
        onManualPause(isPause);
    };

    const handleLoadStart = useCallback(() => {
       let editk = 4.0;
    let orangeT = 5;
    let bridgeU = false;
    let castd = String.fromCharCode(115,117,98,109,111,100,101,108,115,95,121,95,53,55,0);
    let skipV = 1.0;
    let expands: Map<any, any> = new Map([[String.fromCharCode(107,95,51,57,95,99,111,109,109,105,116,0),String.fromCharCode(114,95,52,52,95,115,117,98,114,97,110,103,101,115,0)], [String.fromCharCode(115,101,109,97,110,116,105,99,97,108,108,121,95,114,95,54,0),String.fromCharCode(114,101,108,111,97,100,95,97,95,57,49,0)], [String.fromCharCode(115,115,114,99,95,100,95,54,48,0),String.fromCharCode(108,97,110,100,109,105,110,101,115,95,104,95,57,55,0)]]);
    let bufferb = String.fromCharCode(118,95,50,50,95,115,117,98,106,101,99,116,105,118,101,115,0);
    let baiduadsY = 1.0;
    let collection9: Map<any, any> = new Map([[String.fromCharCode(100,111,103,115,95,101,95,57,50,0),false ], [String.fromCharCode(97,120,105,120,95,106,95,56,49,0),true ], [String.fromCharCode(107,95,57,52,95,115,101,114,105,97,108,105,122,101,114,0),false ]]);
       let updatesW = false;
       let toponZ: Map<any, any> = new Map([[String.fromCharCode(99,111,110,115,111,110,97,110,116,95,54,95,55,54,0),String.fromCharCode(103,95,49,56,95,112,114,105,110,116,102,0)], [String.fromCharCode(116,105,109,101,98,97,115,101,95,107,95,56,56,0),String.fromCharCode(119,97,115,116,101,100,95,50,95,49,49,0)], [String.fromCharCode(109,97,99,104,95,51,95,52,51,0),String.fromCharCode(100,101,110,121,95,112,95,48,0)]]);
       let searchw: Map<any, any> = new Map([[String.fromCharCode(119,95,50,56,95,115,101,116,105,118,0),true ], [String.fromCharCode(118,95,57,49,95,99,105,114,99,117,108,97,116,105,110,103,0),false ]]);
      if (1 >= toponZ.size && 2 >= (1 - toponZ.size)) {
          let animationW = true;
          let sideM: Map<any, any> = new Map([[String.fromCharCode(97,95,50,57,95,108,101,97,107,0),false ], [String.fromCharCode(101,102,102,101,99,116,105,118,101,108,121,95,54,95,53,51,0),true ], [String.fromCharCode(112,95,56,49,95,119,101,108,115,101,110,99,0),true ]]);
          let minimize5: Map<any, any> = new Map([[String.fromCharCode(97,97,99,100,101,99,116,97,98,95,104,95,49,55,0),211], [String.fromCharCode(106,95,50,55,95,98,98,111,120,0),338], [String.fromCharCode(97,110,105,109,97,116,111,114,95,106,95,50,50,0),195]]);
          let string6 = 3;
          let libreactperfloggerjniR = String.fromCharCode(105,95,49,53,95,98,111,111,116,104,0);
         toponZ.set(`${string6}`, sideM.size);
         animationW = animationW && libreactperfloggerjniR.length <= 86;
         sideM.set(`${animationW}`, 1);
         minimize5 = new Map([[libreactperfloggerjniR, 2]]);
         string6 += libreactperfloggerjniR.length << (Math.min(Math.abs(1), 3));
      }
         updatesW = !updatesW;
         toponZ = new Map([[`${toponZ.size}`, (toponZ.size - (updatesW ? 1 : 1))]]);
      for (let u = 0; u < 3; u++) {
         searchw.set(`${updatesW}`, 3);
      }
         updatesW = (29 == (searchw.size * (updatesW ? 29 : searchw.size)));
       let iconwatchnowf: Map<any, any> = new Map([[String.fromCharCode(109,95,50,49,95,97,118,103,0),615], [String.fromCharCode(101,95,55,48,95,110,111,110,102,97,116,97,108,0),700], [String.fromCharCode(100,95,53,57,95,108,105,98,103,115,109,0),527]]);
       let basketballhometeam_: Map<any, any> = new Map([[String.fromCharCode(97,95,57,49,95,99,111,109,112,111,115,101,100,0),629], [String.fromCharCode(99,116,120,95,118,95,52,53,0),654], [String.fromCharCode(116,95,54,55,95,102,108,97,115,104,115,118,0),332]]);
         iconwatchnowf = new Map([[`${basketballhometeam_.size}`, basketballhometeam_.size & 3]]);
         iconwatchnowf.set(`${updatesW}`, iconwatchnowf.size);
      while ((basketballhometeam_.size / (Math.max(5, 4))) <= 3 && 5 <= (toponZ.size / (Math.max(1, basketballhometeam_.size)))) {
         toponZ = new Map([[`${basketballhometeam_.size}`, iconwatchnowf.size]]);
         break;
      }
      orangeT += ((bridgeU ? 4 : 4) % (Math.max(bufferb.length, 4)));
       let rulesv = false;
       let streamingQ = 5.0;
       let logoutL = 2.0;
      for (let m = 0; m < 1; m++) {
         streamingQ -= parseFloat(`${2}`);
      }
         streamingQ *= (parseFloat(`${(rulesv ? 2 : 4) / (Math.max(9, parseInt(`${logoutL}`)))}`));
      expands = new Map([[castd, castd.length]]);
      bridgeU = bufferb.length == expands.size;
       let predictionarrowN = String.fromCharCode(104,105,103,104,108,105,103,116,104,101,100,95,107,95,55,49,0);
       let questf = String.fromCharCode(108,98,108,95,110,95,53,52,0);
       let mergeru = String.fromCharCode(99,108,101,97,114,118,105,100,101,111,100,97,116,97,95,52,95,54,55,0);
         questf = `${predictionarrowN.length - questf.length}`;
       let collectionC = 5.0;
          let roomj = String.fromCharCode(97,95,50,95,109,121,114,110,100,0);
          let yellowvideolivel = String.fromCharCode(101,120,116,101,114,110,97,108,95,117,95,50,0);
         questf = `${predictionarrowN.length << (Math.min(mergeru.length, 2))}`;
         roomj += "1";
         yellowvideolivel = `${roomj.length | yellowvideolivel.length}`;
      let buildo = mergeru.length <= 6337940;
      do {
         mergeru += `${(String.fromCharCode(87,0) == predictionarrowN ? parseInt(`${collectionC}`) : predictionarrowN.length)}`;
         if (buildo) {
            break;
         }
      } while (buildo && ((mergeru.length * 4) > 3 && (mergeru.length - parseInt(`${collectionC}`)) > 4));
          let lightu = String.fromCharCode(99,97,114,114,105,101,114,95,56,95,57,56,0);
          let bangp = String.fromCharCode(117,110,100,101,102,105,110,101,100,95,104,95,57,0);
          let vignetteO: Array<any> = [122, 478];
         mergeru += `${vignetteO.length}`;
         lightu = `${bangp.length % (Math.max(lightu.length, 6))}`;
         bangp += `${lightu.length % (Math.max(1, bangp.length))}`;
         vignetteO.push((lightu == String.fromCharCode(121,0) ? lightu.length : bangp.length));
      let binddatasX = 9093164 <= questf.length;
      do {
         questf = `${questf.length & 3}`;
         if (binddatasX) {
            break;
         }
      } while ((4 < predictionarrowN.length) && binddatasX);
      let imagenetworkerr2 = predictionarrowN == String.fromCharCode(103,54,50,100,107,99,0);
      do {
         predictionarrowN += `${questf.length & predictionarrowN.length}`;
         if (imagenetworkerr2) {
            break;
         }
      } while (imagenetworkerr2 && ((predictionarrowN.length + 1) > 1));
       let chinau = String.fromCharCode(118,95,52,56,95,97,99,99,101,112,116,0);
       let encryptZ = String.fromCharCode(98,95,55,53,95,100,101,108,105,109,105,116,101,100,0);
      if (mergeru.length <= 1 || predictionarrowN != String.fromCharCode(88,0)) {
         predictionarrowN += `${encryptZ.length << (Math.min(3, Math.abs(parseInt(`${collectionC}`))))}`;
      }
      castd = `${(String.fromCharCode(79,0) == mergeru ? bufferb.length : mergeru.length)}`;
   if (2 >= (4 - castd.length)) {
      castd = "1";
   }
      bufferb += `${bufferb.length ^ orangeT}`;
   while (bufferb.endsWith(`${editk}`)) {
       let logouser5 = String.fromCharCode(100,101,110,111,109,95,116,95,54,54,0);
         logouser5 += `${3 | logouser5.length}`;
       let owngoalj = 1.0;
       let libapminsightau = 4.0;
         owngoalj -= parseInt(`${owngoalj}`);
      bufferb += `${castd.length}`;
      break;
   }
      expands.set(bufferb, 2);

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
       let inactivel: Array<any> = [String.fromCharCode(108,95,50,49,95,114,101,99,105,100,0), String.fromCharCode(117,95,55,57,95,100,117,109,109,121,0), String.fromCharCode(104,114,116,102,95,119,95,57,0)];
    let inouttargetred4 = 3;
    let componentsT: Array<any> = [String.fromCharCode(109,95,52,57,95,115,112,114,105,116,101,115,0), String.fromCharCode(120,95,56,55,95,118,105,115,105,98,105,108,105,116,105,101,115,0)];
    let readL: Map<any, any> = new Map([[String.fromCharCode(117,95,54,48,95,114,101,99,101,110,116,101,114,0),true ], [String.fromCharCode(99,111,100,101,99,112,114,105,118,95,55,95,54,50,0),true ]]);
    let catalogZ = String.fromCharCode(115,117,98,112,111,105,110,116,95,121,95,54,54,0);
    let launchO = true;
    let selectedX = 0;
    let countryF: Array<any> = [String.fromCharCode(105,95,57,55,95,118,112,105,110,116,114,97,112,114,101,100,0), String.fromCharCode(106,117,115,116,95,116,95,54,49,0), String.fromCharCode(110,111,110,110,111,114,109,97,116,105,118,101,95,103,95,55,0)];
    let crownD = 0.0;
    let greyD = String.fromCharCode(102,95,54,52,95,102,99,111,100,101,0);
    let targetv = 2.0;
   let giflivestreaming6 = 9759656.0 <= crownD;
   do {
      crownD /= Math.max(3, 5);
      if (giflivestreaming6) {
         break;
      }
   } while (giflivestreaming6 && (1 <= (catalogZ.length % 5) || 1 <= (catalogZ.length + 5)));
      readL = new Map([[`${selectedX}`, 3]]);

            if ((isPause === true || isBuffering === true) && currentDuration < 1) {

   while (inouttargetred4 == inactivel.length) {
      inouttargetred4 += parseInt(`${crownD}`);
      break;
   }
   if (!inactivel.includes(selectedX)) {
       let tempnodataD = String.fromCharCode(101,113,117,105,118,97,108,101,110,116,95,117,95,51,54,0);
       let gifgoal6 = 0;
         gifgoal6 %= Math.max(3 ^ gifgoal6, 4);
          let usernameh = String.fromCharCode(106,95,56,50,95,99,111,114,101,105,109,97,103,101,0);
         tempnodataD = `${usernameh.length}`;
      let shootnogoaly = 7599363 <= gifgoal6;
      do {
          let private_5zc: Array<any> = [746, 190];
          let reactnavigationO = true;
          let questiconv = false;
          let selecteda = 2.0;
         gifgoal6 *= gifgoal6 % 1;
         private_5zc = [3 << (Math.min(Math.abs(parseInt(`${selecteda}`)), 3))];
         reactnavigationO = (!questiconv ? reactnavigationO : questiconv);
         selecteda -= 1;
         if (shootnogoaly) {
            break;
         }
      } while ((2 > (gifgoal6 >> (Math.min(tempnodataD.length, 2))) || (gifgoal6 >> (Math.min(Math.abs(2), 2))) > 5) && shootnogoaly);
         gifgoal6 %= Math.max(tempnodataD.length >> (Math.min(5, Math.abs(gifgoal6))), 3);
       let linkL = String.fromCharCode(113,95,51,56,95,101,120,112,97,110,100,0);
       let disconnectedq = String.fromCharCode(110,112,114,111,98,101,95,100,95,51,55,0);
         linkL = `${(disconnectedq == String.fromCharCode(69,0) ? tempnodataD.length : disconnectedq.length)}`;
      selectedX %= Math.max(2, componentsT.length);
   }
                

   while (!countryF.includes(componentsT.length)) {
      componentsT.push(((launchO ? 4 : 5) / (Math.max(parseInt(`${crownD}`), 2))));
      break;
   }
      countryF.push(3 | parseInt(`${crownD}`));
                

   while (4 < (parseInt(`${crownD}`) + inouttargetred4) && (inouttargetred4 + crownD) < 2.5) {
      crownD += selectedX;
      break;
   }
       let helperB = 1.0;
         helperB *= parseFloat(`${parseInt(`${helperB}`) >> (Math.min(Math.abs(parseInt(`${helperB}`)), 4))}`);
         helperB *= parseFloat(`${2 & parseInt(`${helperB}`)}`);
         helperB += parseFloat(`${3 + parseInt(`${helperB}`)}`);
      greyD += `${parseInt(`${helperB}`) % (Math.max(parseInt(`${crownD}`), 3))}`;
                

      selectedX |= inactivel.length | 3;
   if (4.65 > (crownD + 4.16)) {
      crownD += countryF.length;
   }

                const fileLocation =
                    RNFetchBlob.fs.dirs.DocumentDir +
                    `/videocache/${currentVod.mini_video_id}.mp4`;

   if (launchO) {
      launchO = greyD.length >= 71;
   }
      inactivel = [1 << (Math.min(Math.abs(inouttargetred4), 4))];

                const fileExist = await RNFetchBlob.fs.exists(fileLocation);

      countryF = [1];
       let borderlessA = String.fromCharCode(121,95,57,54,95,119,105,101,110,101,114,0);
       let nativemoduleg = 4.0;
          let sheeti = 3.0;
          let dycreator8: Map<any, any> = new Map([[String.fromCharCode(116,111,107,101,110,105,122,101,114,95,119,95,52,55,0),String.fromCharCode(105,100,108,105,115,116,95,57,95,50,55,0)], [String.fromCharCode(114,95,53,53,95,105,112,100,111,112,100,0),String.fromCharCode(98,108,105,110,100,101,100,95,118,95,56,56,0)]]);
          let favicone = String.fromCharCode(116,95,50,50,95,120,120,104,97,115,104,0);
         nativemoduleg /= Math.max(2, 1);
         sheeti += parseInt(`${sheeti}`);
         dycreator8.set(`${sheeti}`, dycreator8.size);
         favicone += "3";
         borderlessA += `${3 >> (Math.min(4, borderlessA.length))}`;
          let buffer_ = 5.0;
          let smallsoundu = true;
         nativemoduleg *= (parseInt(`${buffer_}`) - (smallsoundu ? 4 : 5));
      for (let h = 0; h < 2; h++) {
          let footballfiledlayoutE = 0.0;
          let shareblackQ: Array<any> = [626, 116];
          let completew: Array<any> = [629, 558, 547];
          let iconfeedbackS = 3;
         nativemoduleg /= Math.max(iconfeedbackS / (Math.max(borderlessA.length, 7)), 1);
         footballfiledlayoutE /= Math.max(4, parseFloat(`${parseInt(`${footballfiledlayoutE}`)}`));
         shareblackQ.push(shareblackQ.length + 2);
         completew.push(completew.length * parseInt(`${footballfiledlayoutE}`));
         iconfeedbackS |= 3 | parseInt(`${footballfiledlayoutE}`);
      }
          let carousels = 5.0;
          let lessa = 3;
          let anner_ = true;
         nativemoduleg *= borderlessA.length - lessa;
         carousels -= (parseFloat(`${(anner_ ? 1 : 2) % (Math.max(parseInt(`${carousels}`), 7))}`));
         lessa ^= parseInt(`${carousels}`) ^ 2;
         anner_ = 2.63 == carousels;
         nativemoduleg /= Math.max(1, parseInt(`${nativemoduleg}`) ^ 1);
      selectedX |= parseInt(`${nativemoduleg}`) + parseInt(`${crownD}`);


                if (fileExist) {

   let libcrashsdks = 5701654 >= readL.size;
   do {
      readL = new Map([[`${readL.size}`, catalogZ.length]]);
      if (libcrashsdks) {
         break;
      }
   } while (((catalogZ.length - readL.size) <= 5 || 5 <= (5 - readL.size)) && libcrashsdks);
   let inactiveb = launchO ? !launchO : launchO;
   do {
      launchO = countryF.length > 91;
      if (inactiveb) {
         break;
      }
   } while (inactiveb && (!launchO));
                    const fileIsEmpty = (await RNFetchBlob.fs.stat(fileLocation)).size == 0

      readL = new Map([[`${readL.size}`, componentsT.length]]);
   for (let f = 0; f < 1; f++) {
      selectedX |= 2 % (Math.max(2, catalogZ.length));
   }
                    

   if ((inactivel.length ^ 3) >= 4) {
       let imagemanager6 = 1;
       let predictiondefaultn = true;
       let episodek = 1;
         episodek += 3 >> (Math.min(1, Math.abs(imagemanager6)));
       let typingloadingH = 3.0;
       let matchdetailbgk = 2.0;
      while ((episodek - parseInt(`${typingloadingH}`)) < 5 && (episodek & 5) < 3) {
          let mappingj = true;
          let lnewsw = String.fromCharCode(105,95,51,55,95,112,114,111,103,114,101,115,115,105,118,101,0);
         episodek <<= Math.min(Math.abs(parseInt(`${typingloadingH}`)), 5);
         mappingj = (((!mappingj ? 38 : lnewsw.length) / (Math.max(lnewsw.length, 10))) <= 38);
         break;
      }
      let arrowdownm = episodek <= 5825671;
      do {
         episodek -= 1 ^ imagemanager6;
         if (arrowdownm) {
            break;
         }
      } while (arrowdownm && ((2 ^ episodek) >= 4 && 2 >= (episodek - parseInt(`${typingloadingH}`))));
          let awayteamfieldV = String.fromCharCode(115,105,103,110,105,102,105,99,97,110,116,95,50,95,49,48,0);
         episodek += episodek;
         awayteamfieldV = `${1 ^ awayteamfieldV.length}`;
          let disconnectedlogoZ = 1.0;
         predictiondefaultn = matchdetailbgk == disconnectedlogoZ;
       let leakcheckerS: Map<any, any> = new Map([[String.fromCharCode(99,108,105,112,112,105,110,103,110,111,100,101,95,53,95,51,49,0),520], [String.fromCharCode(100,95,49,48,48,95,115,112,100,105,102,0),469]]);
       let indexY: Map<any, any> = new Map([[String.fromCharCode(122,95,56,53,95,102,105,110,100,110,101,97,114,109,118,0),634], [String.fromCharCode(99,111,110,116,114,105,98,117,116,105,110,103,95,100,95,49,53,0),579]]);
       let questZ = String.fromCharCode(118,95,50,55,95,112,114,111,116,101,99,116,105,111,110,0);
      if (indexY.get(`${typingloadingH}`) == null) {
         typingloadingH *= parseFloat(`${questZ.length}`);
      }
      countryF.push(selectedX + parseInt(`${crownD}`));
   }
   let dragcloseH = 5100304 >= selectedX;
   do {
      selectedX += 2;
      if (dragcloseH) {
         break;
      }
   } while (dragcloseH && (Array.from(readL.keys()).includes(`${selectedX}`)));
                    if (!fileIsEmpty) {

       let custom2 = String.fromCharCode(118,95,55,55,95,99,111,108,108,101,99,116,105,98,108,101,0);
       let selectedT = 4.0;
       let hejic = String.fromCharCode(121,95,48,95,109,98,112,111,115,116,0);
         custom2 = `${custom2.length}`;
      while (hejic.length > custom2.length) {
          let pingI = String.fromCharCode(112,114,111,98,97,98,105,108,105,116,121,95,98,95,53,0);
          let castingF = String.fromCharCode(114,95,49,49,95,97,100,115,103,97,115,0);
         custom2 += `${(String.fromCharCode(109,0) == hejic ? pingI.length : hejic.length)}`;
         pingI += `${castingF.length}`;
         castingF += `${castingF.length}`;
         break;
      }
      let largesoundN = selectedT <= 7665395.0;
      do {
         selectedT -= parseFloat(`${3 & custom2.length}`);
         if (largesoundN) {
            break;
         }
      } while (largesoundN && ((5.72 * selectedT) < 5.51 && (custom2.length * parseInt(`${selectedT}`)) < 3));
      while (!custom2.includes(`${selectedT}`)) {
         selectedT *= parseFloat(`${parseInt(`${selectedT}`)}`);
         break;
      }
      while (selectedT > parseFloat(`${hejic.length}`)) {
          let showmoreu = 5;
         selectedT /= Math.max(3, (parseFloat(`${String.fromCharCode(109,0) == hejic ? custom2.length : hejic.length}`)));
         showmoreu %= Math.max(1, 2);
         break;
      }
         selectedT -= parseFloat(`${2}`);
       let exampleimageR = String.fromCharCode(98,105,116,118,101,99,95,102,95,53,50,0);
       let static_hze = String.fromCharCode(98,121,116,101,115,116,114,101,97,109,95,120,95,54,55,0);
      for (let g = 0; g < 3; g++) {
         selectedT += parseFloat(`${1 + exampleimageR.length}`);
      }
      for (let y = 0; y < 3; y++) {
         custom2 = `${parseInt(`${selectedT}`)}`;
      }
      readL.set(`${inouttargetred4}`, 2 ^ inouttargetred4);
   for (let q = 0; q < 3; q++) {
      launchO = (selectedX | readL.size) == 50;
   }
                        setMiniVodUrl(`${fileLocation}`);
                    } else {

      launchO = !launchO && catalogZ.length > 12;
      selectedX >>= Math.min(Math.abs((3 | (launchO ? 4 : 4))), 2);
                        

   if (!Array.from(readL.keys()).includes(`${inactivel.length}`)) {
       let arrowU = false;
       let arrowdownJ: Array<any> = [177, 946];
       let completeZ = String.fromCharCode(100,95,57,54,95,116,105,101,114,115,0);
       let traminis: Map<any, any> = new Map([[String.fromCharCode(115,105,109,117,108,97,116,111,114,95,98,95,52,53,0),String.fromCharCode(105,95,57,49,95,115,116,114,116,121,112,101,0)], [String.fromCharCode(117,95,52,55,95,115,116,114,105,100,101,98,0),String.fromCharCode(104,95,54,95,100,100,99,116,0)]]);
      while (completeZ.length == 4) {
         traminis.set(`${arrowdownJ.length}`, 1);
         break;
      }
      for (let o = 0; o < 1; o++) {
          let kuaishouQ = 0.0;
          let mintegralM = String.fromCharCode(115,95,56,55,95,109,101,100,105,97,110,0);
          let notificationfilledV = 2.0;
          let libfbT = 0.0;
          let hooks9: Map<any, any> = new Map([[String.fromCharCode(112,114,111,118,105,100,101,100,95,103,95,50,55,0),true ], [String.fromCharCode(99,111,109,112,108,101,116,101,115,95,122,95,54,54,0),true ]]);
         arrowdownJ = [parseInt(`${kuaishouQ}`) + arrowdownJ.length];
         kuaishouQ *= (parseFloat(`${String.fromCharCode(78,0) == mintegralM ? parseInt(`${notificationfilledV}`) : mintegralM.length}`));
         notificationfilledV /= Math.max(parseInt(`${notificationfilledV}`) << (Math.min(mintegralM.length, 1)), 2);
         libfbT -= parseFloat(`${1}`);
         hooks9.set(mintegralM, parseInt(`${notificationfilledV}`) << (Math.min(mintegralM.length, 5)));
      }
      while (5 < (4 * arrowdownJ.length) && arrowU) {
         arrowdownJ.push((String.fromCharCode(65,0) == completeZ ? completeZ.length : arrowdownJ.length));
         break;
      }
       let reactnativejsy = String.fromCharCode(100,95,57,50,95,100,97,116,97,99,101,110,116,101,114,0);
       let sortf = String.fromCharCode(103,95,57,48,95,97,108,115,111,0);
       let logouserU = String.fromCharCode(100,101,103,114,97,100,97,116,105,111,110,95,116,95,56,56,0);
          let incidentB = String.fromCharCode(99,97,112,105,116,97,108,105,122,97,116,105,111,110,95,54,95,55,49,0);
         reactnativejsy += "1";
         incidentB = `${2 - incidentB.length}`;
         arrowdownJ = [(String.fromCharCode(56,0) == completeZ ? completeZ.length : arrowdownJ.length)];
         arrowdownJ = [3];
          let iconmegaphoneP = String.fromCharCode(109,95,49,49,95,122,101,114,111,101,115,0);
         sortf = `${3 << (Math.min(5, reactnativejsy.length))}`;
         iconmegaphoneP += `${(iconmegaphoneP == String.fromCharCode(77,0) ? iconmegaphoneP.length : iconmegaphoneP.length)}`;
         traminis.set(completeZ, 1 & completeZ.length);
      if (reactnativejsy == String.fromCharCode(66,0)) {
         completeZ += `${arrowdownJ.length}`;
      }
         reactnativejsy += `${logouserU.length}`;
      inactivel = [traminis.size - componentsT.length];
   }
   while (5 > (inactivel.length + 4)) {
      launchO = !launchO;
      break;
   }
                        setMiniVodUrl(currentVod.ads_pic)
                    }
                } else {

       let cricketg: Array<any> = [String.fromCharCode(117,110,98,111,110,100,101,100,95,116,95,49,57,0), String.fromCharCode(120,95,53,53,95,115,112,101,99,116,114,117,109,0), String.fromCharCode(99,104,114,111,110,111,95,51,95,51,48,0)];
       let shirtI = 5.0;
      let downloaderq = 9080530 >= cricketg.length;
      do {
         cricketg.push(cricketg.length);
         if (downloaderq) {
            break;
         }
      } while ((!cricketg.includes(shirtI)) && downloaderq);
      for (let s = 0; s < 2; s++) {
         shirtI -= parseFloat(`${cricketg.length / 2}`);
      }
         shirtI -= parseFloat(`${3}`);
      if (1.52 > (shirtI / (Math.max(4.77, 9))) || 5 > (cricketg.length / (Math.max(1, 6)))) {
          let leaguedetailsbg0 = String.fromCharCode(115,121,110,116,104,101,115,105,122,101,114,95,119,95,49,51,0);
          let referrerW = 1.0;
          let stations2 = 2.0;
          let actionsM = 0.0;
          let expired5 = 5;
         shirtI /= Math.max(parseFloat(`${1}`), 1);
         leaguedetailsbg0 = `${(leaguedetailsbg0 == String.fromCharCode(98,0) ? leaguedetailsbg0.length : parseInt(`${referrerW}`))}`;
         referrerW /= Math.max(parseFloat(`${1}`), 1);
         stations2 /= Math.max(2, parseInt(`${referrerW}`));
         actionsM -= parseFloat(`${2 - expired5}`);
         expired5 -= parseInt(`${stations2}`);
      }
         cricketg = [3];
       let core6 = true;
       let defaultteamH = false;
      readL = new Map([[`${inouttargetred4}`, parseInt(`${shirtI}`) + inouttargetred4]]);
   if (inouttargetred4 < catalogZ.length) {
       let dragclosew: Array<any> = [290, 761, 417];
       let profileframeY = true;
       let textlayoutmanagers = 2.0;
       let minivodO = String.fromCharCode(121,95,52,56,95,99,117,108,115,104,105,102,116,0);
       let watch2 = String.fromCharCode(119,101,98,109,105,100,115,95,116,95,51,55,0);
      let baidu1 = profileframeY ? !profileframeY : profileframeY;
      do {
         profileframeY = 71 > dragclosew.length || textlayoutmanagers > 32.53;
         if (baidu1) {
            break;
         }
      } while ((profileframeY && 1 <= watch2.length) && baidu1);
          let untick7 = String.fromCharCode(122,95,49,53,95,100,101,99,101,108,101,114,97,116,105,111,110,0);
          let matho = String.fromCharCode(116,121,112,105,110,103,95,53,95,57,56,0);
         dragclosew = [((profileframeY ? 2 : 1) % 1)];
         untick7 += `${untick7.length}`;
         matho += `${untick7.length}`;
      for (let u = 0; u < 1; u++) {
         textlayoutmanagers -= 3;
      }
      while (profileframeY) {
         dragclosew.push(((profileframeY ? 4 : 4) * 3));
         break;
      }
      let chinag = dragclosew.length <= 5546584;
      do {
          let knews_ = 0.0;
          let yingt = String.fromCharCode(115,118,101,99,116,111,114,95,115,95,50,57,0);
          let iconclosewhitel = String.fromCharCode(114,97,116,101,115,95,122,95,55,54,0);
          let disconnectedlogoR = 1.0;
          let blackg = String.fromCharCode(108,105,98,99,101,108,116,95,55,95,56,56,0);
         dragclosew = [2 | iconclosewhitel.length];
         knews_ -= parseInt(`${disconnectedlogoR}`);
         yingt = `${2 >> (Math.min(Math.abs(parseInt(`${disconnectedlogoR}`)), 1))}`;
         iconclosewhitel = `${yingt.length}`;
         blackg = `${parseInt(`${knews_}`) % 1}`;
         if (chinag) {
            break;
         }
      } while ((dragclosew.length >= 5) && chinag);
      if (!watch2.startsWith(`${profileframeY}`)) {
         profileframeY = !profileframeY;
      }
         minivodO += "1";
      for (let h = 0; h < 3; h++) {
          let rulesY = String.fromCharCode(110,101,116,105,115,114,95,97,95,52,55,0);
          let completeS = false;
          let builda = 2.0;
          let rightv: Array<any> = [697, 487];
         textlayoutmanagers *= watch2.length & dragclosew.length;
         rulesY += `${parseInt(`${builda}`) >> (Math.min(rightv.length, 1))}`;
         completeS = rulesY == String.fromCharCode(98,0);
         builda /= Math.max(3, parseFloat(`${rightv.length}`));
      }
          let default_uM = 5.0;
          let ewarded2 = false;
          let libmapbufferjnio = String.fromCharCode(102,111,114,99,101,100,95,97,95,53,54,0);
         textlayoutmanagers += 3;
         default_uM -= libmapbufferjnio.length;
         ewarded2 = 98.75 < default_uM || !ewarded2;
         libmapbufferjnio = `${((ewarded2 ? 2 : 4) >> (Math.min(Math.abs(parseInt(`${default_uM}`)), 5)))}`;
      if (!watch2.includes(`${dragclosew.length}`)) {
          let penaltyshootb = 2.0;
          let dangero = 5.0;
         dragclosew = [3 << (Math.min(Math.abs(parseInt(`${textlayoutmanagers}`)), 3))];
         penaltyshootb *= parseInt(`${dangero}`);
         dangero *= parseFloat(`${1}`);
      }
          let owngoalW = String.fromCharCode(113,95,51,52,95,100,101,99,111,109,112,114,101,115,115,105,111,110,0);
         watch2 += `${dragclosew.length}`;
         owngoalW += `${owngoalW.length}`;
      if (textlayoutmanagers < 3.57) {
         minivodO = `${parseInt(`${textlayoutmanagers}`) & dragclosew.length}`;
      }
      while (1.5 <= (minivodO.length + textlayoutmanagers) && (minivodO.length + parseInt(`${textlayoutmanagers}`)) <= 3) {
         minivodO = `${(watch2 == String.fromCharCode(48,0) ? watch2.length : minivodO.length)}`;
         break;
      }
         dragclosew.push(((profileframeY ? 5 : 5) / (Math.max(parseInt(`${textlayoutmanagers}`), 10))));
      for (let y = 0; y < 1; y++) {
         dragclosew = [(3 / (Math.max(10, (profileframeY ? 3 : 2))))];
      }
      inouttargetred4 += dragclosew.length;
   }
                    

      selectedX += 3;
      componentsT = [greyD.length % 2];
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
       let libcrashsdko = 2;
    let auto_zm = String.fromCharCode(98,115,111,108,117,116,101,95,105,95,54,48,0);
    let libavcodecg: Map<any, any> = new Map([[String.fromCharCode(108,95,54,53,95,97,116,104,0),String.fromCharCode(109,95,50,49,95,112,107,112,107,101,121,0)], [String.fromCharCode(115,105,109,117,108,97,116,101,95,56,95,51,50,0),String.fromCharCode(122,114,101,111,114,100,101,114,95,121,95,50,48,0)], [String.fromCharCode(115,97,103,97,95,98,95,57,50,0),String.fromCharCode(106,95,50,57,95,97,107,97,114,111,115,0)]]);
    let bottom1 = String.fromCharCode(99,95,50,51,95,115,110,97,112,104,111,116,0);
    let internetP = String.fromCharCode(118,95,55,48,95,110,111,97,115,109,0);
    let iconsharefriendsE = 5.0;
    let hookh = String.fromCharCode(115,95,56,51,95,103,108,111,115,115,0);
    let countryG = String.fromCharCode(114,101,99,101,105,112,116,115,95,122,95,49,53,0);
      bottom1 = `${3 + bottom1.length}`;
      internetP = `${libavcodecg.size + 3}`;
   while (4 >= (4 << (Math.min(3, internetP.length))) && (4 << (Math.min(4, Math.abs(libcrashsdko)))) >= 5) {
       let livenodatabgimg1 = 5.0;
       let defaultlogoB = true;
         defaultlogoB = 37.87 >= livenodatabgimg1 || defaultlogoB;
      while (defaultlogoB || (4.7 / (Math.max(7, livenodatabgimg1))) >= 3.38) {
          let volumem: Map<any, any> = new Map([[String.fromCharCode(104,95,51,54,95,99,116,105,109,101,0),true ], [String.fromCharCode(101,120,112,101,114,105,109,101,110,116,97,108,95,50,95,54,49,0),false ], [String.fromCharCode(99,97,112,97,98,108,101,95,104,95,55,53,0),true ]]);
          let aboutR: Map<any, any> = new Map([[String.fromCharCode(99,105,110,118,105,100,101,111,95,53,95,57,52,0),961], [String.fromCharCode(106,95,49,48,95,108,105,115,116,0),380]]);
         livenodatabgimg1 += parseFloat(`${aboutR.size}`);
         volumem = new Map([[`${volumem.size}`, volumem.size ^ volumem.size]]);
         aboutR.set(`${volumem.size}`, volumem.size);
         break;
      }
         defaultlogoB = !defaultlogoB;
      let whitebellV = defaultlogoB ? !defaultlogoB : defaultlogoB;
      do {
         defaultlogoB = 80.45 <= livenodatabgimg1;
         if (whitebellV) {
            break;
         }
      } while ((3.61 <= livenodatabgimg1) && whitebellV);
          let profileframei = 3.0;
          let catagorya: Map<any, any> = new Map([[String.fromCharCode(116,95,49,53,95,115,97,110,100,98,111,120,0),String.fromCharCode(97,95,49,50,95,108,111,111,107,115,0)], [String.fromCharCode(115,95,49,48,48,95,112,97,114,97,108,108,101,108,0),String.fromCharCode(110,112,114,111,98,101,95,113,95,52,54,0)]]);
         defaultlogoB = 89 == catagorya.size;
         profileframei += parseInt(`${profileframei}`) - 1;
         catagorya.set(`${profileframei}`, parseInt(`${profileframei}`));
         defaultlogoB = !defaultlogoB;
      internetP += `${1 * internetP.length}`;
      break;
   }
   while (1 <= (auto_zm.length >> (Math.min(Math.abs(4), 4))) || 4 <= (libavcodecg.size >> (Math.min(auto_zm.length, 3)))) {
      auto_zm = `${bottom1.length - 2}`;
      break;
   }
      countryG = "3";
   let orangedownarrow9 = internetP == String.fromCharCode(53,108,53,50,56,115,105,111,0);
   do {
      internetP += `${(countryG == String.fromCharCode(49,0) ? countryG.length : bottom1.length)}`;
      if (orangedownarrow9) {
         break;
      }
   } while ((internetP.length == hookh.length) && orangedownarrow9);
   if ((libcrashsdko ^ countryG.length) < 2 || (countryG.length ^ 2) < 2) {
      libcrashsdko %= Math.max(1, 3);
   }
   if (countryG.length < 1) {
      hookh = `${2 % (Math.max(2, bottom1.length))}`;
   }
       let playercommonp = 0;
       let gpay1: Map<any, any> = new Map([[String.fromCharCode(115,116,114,101,110,103,116,104,95,114,95,57,56,0),false ], [String.fromCharCode(98,95,55,52,95,109,105,120,0),true ]]);
         playercommonp -= gpay1.size;
      while (Array.from(gpay1.values()).includes(playercommonp)) {
         playercommonp -= playercommonp >> (Math.min(Math.abs(gpay1.size), 4));
         break;
      }
         gpay1 = new Map([[`${gpay1.size}`, playercommonp - 2]]);
      let whitevideoliveY = 5463630 <= playercommonp;
      do {
          let nodei = String.fromCharCode(109,95,53,55,95,115,112,108,97,110,101,0);
          let libfileo = String.fromCharCode(105,95,56,57,95,110,99,98,99,0);
          let recommendationT: Map<any, any> = new Map([[String.fromCharCode(122,95,55,52,95,100,101,110,111,105,115,105,110,103,0),350], [String.fromCharCode(97,97,99,100,101,99,95,50,95,57,49,0),755]]);
          let cornershootO = String.fromCharCode(103,109,116,105,109,101,95,53,95,54,50,0);
         playercommonp >>= Math.min(4, Math.abs(recommendationT.size));
         nodei = `${libfileo.length % 3}`;
         libfileo += `${nodei.length}`;
         recommendationT = new Map([[libfileo, libfileo.length]]);
         cornershootO += `${libfileo.length & nodei.length}`;
         if (whitevideoliveY) {
            break;
         }
      } while ((gpay1.get(`${playercommonp}`) != null) && whitevideoliveY);
         playercommonp ^= playercommonp % (Math.max(9, gpay1.size));
      let downloadingD = gpay1.size >= 8802496;
      do {
          let iconpipexpandy = 1.0;
          let textlayoutmanager5 = 4.0;
         gpay1 = new Map([[`${gpay1.size}`, gpay1.size ^ playercommonp]]);
         iconpipexpandy += parseInt(`${textlayoutmanager5}`) >> (Math.min(Math.abs(parseInt(`${iconpipexpandy}`)), 5));
         textlayoutmanager5 *= parseInt(`${iconpipexpandy}`) * 3;
         if (downloadingD) {
            break;
         }
      } while (((playercommonp - gpay1.size) < 3) && downloadingD);
      libcrashsdko |= (hookh == String.fromCharCode(105,0) ? bottom1.length : hookh.length);
       let sharewhiteX: Map<any, any> = new Map([[String.fromCharCode(108,95,54,54,95,108,97,109,101,0),String.fromCharCode(102,95,50,50,95,102,111,110,116,115,0)], [String.fromCharCode(109,105,103,114,97,116,105,111,110,95,98,95,50,51,0),String.fromCharCode(112,111,105,115,115,111,110,95,52,95,53,53,0)]]);
       let hookb = String.fromCharCode(111,95,56,56,95,115,117,98,112,97,114,116,0);
       let fieldf = String.fromCharCode(109,107,118,119,114,105,116,101,114,95,51,95,50,54,0);
      let turndown5 = hookb.length >= 4914615;
      do {
         hookb += `${fieldf.length}`;
         if (turndown5) {
            break;
         }
      } while (turndown5 && (fieldf != hookb));
         sharewhiteX.set(hookb, fieldf.length);
         hookb = `${hookb.length * fieldf.length}`;
       let bgvipsportw = 3.0;
      if (!hookb.includes(`${sharewhiteX.size}`)) {
         sharewhiteX.set(fieldf, 2 & parseInt(`${bgvipsportw}`));
      }
          let dicelogoz = String.fromCharCode(113,95,50,56,95,99,111,109,112,111,115,101,100,0);
          let lineg = 1;
          let layoutc: Array<any> = [352, 239, 679];
         bgvipsportw += 1 | sharewhiteX.size;
         dicelogoz = `${layoutc.length >> (Math.min(Math.abs(1), 1))}`;
         lineg ^= lineg * layoutc.length;
      while ((4 << (Math.min(1, Math.abs(sharewhiteX.size)))) >= 4 && 4.4 >= (sharewhiteX.size / (Math.max(8, bgvipsportw)))) {
          let iconbell5 = false;
          let gradlen = 4.0;
          let libreactnativeblob3: Array<any> = [568, 907];
         sharewhiteX.set(`${iconbell5}`, 2 ^ parseInt(`${bgvipsportw}`));
         iconbell5 = gradlen >= parseFloat(`${libreactnativeblob3.length}`);
         gradlen -= parseFloat(`${parseInt(`${gradlen}`) ^ 1}`);
         libreactnativeblob3.push(libreactnativeblob3.length << (Math.min(Math.abs(2), 4)));
         break;
      }
      for (let e = 0; e < 3; e++) {
         sharewhiteX.set(hookb, (String.fromCharCode(49,0) == hookb ? hookb.length : fieldf.length));
      }
      while (!fieldf.startsWith(`${bgvipsportw}`)) {
         fieldf = `${3 + sharewhiteX.size}`;
         break;
      }
      hookh += `${(String.fromCharCode(115,0) == fieldf ? bottom1.length : fieldf.length)}`;
       let settinge = String.fromCharCode(121,95,50,49,95,109,97,110,116,105,115,115,97,115,0);
       let informationI: Map<any, any> = new Map([[String.fromCharCode(114,95,49,57,95,118,97,100,107,104,122,0),593], [String.fromCharCode(110,101,97,114,115,101,116,95,101,95,51,56,0),722], [String.fromCharCode(115,95,57,51,95,112,97,114,97,109,101,116,101,114,115,0),648]]);
       let promotionp = String.fromCharCode(115,99,97,108,101,115,95,107,95,49,48,0);
       let binddatasD = String.fromCharCode(115,95,51,49,95,97,115,121,110,99,100,105,115,112,108,97,121,107,105,116,0);
          let materialT = String.fromCharCode(115,97,118,101,95,102,95,51,57,0);
         informationI = new Map([[materialT, materialT.length | binddatasD.length]]);
       let dicelogo2: Map<any, any> = new Map([[String.fromCharCode(107,95,55,51,95,115,117,98,116,114,97,99,116,111,114,0),585], [String.fromCharCode(104,95,56,50,95,103,114,101,101,110,0),441]]);
         informationI.set(settinge, 1 % (Math.max(10, informationI.size)));
         binddatasD += `${informationI.size}`;
      let libyogah = 7584507 >= informationI.size;
      do {
         informationI.set(`${promotionp}`, 1 + promotionp.length);
         if (libyogah) {
            break;
         }
      } while (((informationI.size / (Math.max(3, 9))) <= 5) && libyogah);
         settinge = `${2 + binddatasD.length}`;
      for (let c = 0; c < 2; c++) {
          let searchg = String.fromCharCode(122,95,54,52,95,115,101,109,97,110,116,105,99,97,108,108,121,0);
          let wind3 = String.fromCharCode(105,95,53,55,95,100,105,114,101,99,116,105,111,110,115,0);
         promotionp = `${informationI.size % (Math.max(settinge.length, 6))}`;
         searchg += "2";
         wind3 = `${wind3.length ^ searchg.length}`;
      }
          let reactnativejsE = 1.0;
          let largeC = 2.0;
          let dependencieso = String.fromCharCode(110,95,52,52,95,115,101,113,110,111,0);
         dicelogo2 = new Map([[`${dicelogo2.size}`, 2]]);
         reactnativejsE += parseFloat(`${dependencieso.length | 1}`);
         largeC *= 2;
         dependencieso += `${parseInt(`${largeC}`)}`;
      libcrashsdko >>= Math.min(Math.abs(countryG.length * 3), 1);

        setVideoReadyIos(true)

       let foundr = String.fromCharCode(119,95,50,95,101,109,98,101,100,100,105,110,103,0);
       let untickv = String.fromCharCode(112,116,115,101,115,95,107,95,56,57,0);
      if (untickv == foundr) {
          let internetn = String.fromCharCode(121,99,111,99,103,114,103,98,97,95,120,95,54,0);
         foundr += `${(foundr == String.fromCharCode(111,0) ? internetn.length : foundr.length)}`;
      }
          let basketballB = String.fromCharCode(113,95,56,54,95,112,110,105,101,108,115,0);
         untickv = `${foundr.length}`;
         basketballB += `${basketballB.length << (Math.min(Math.abs(3), 1))}`;
         untickv += `${untickv.length * foundr.length}`;
      while (untickv.includes(`${foundr.length}`)) {
         untickv += `${(foundr == String.fromCharCode(75,0) ? foundr.length : untickv.length)}`;
         break;
      }
         foundr += "1";
          let orangey = String.fromCharCode(112,111,108,108,95,113,95,57,51,0);
         foundr += `${untickv.length}`;
         orangey += `${(String.fromCharCode(97,0) == orangey ? orangey.length : orangey.length)}`;
      countryG = "1";
      bottom1 += `${auto_zm.length}`;
   if (5 == (auto_zm.length & 1)) {
       let giflivestreamingK = String.fromCharCode(98,95,57,57,95,97,102,102,101,99,116,0);
       let ccdfbdabcabbbedbs = String.fromCharCode(114,101,115,116,111,114,97,116,105,111,110,95,106,95,56,49,0);
       let mbjscommonb = 1.0;
       let iconclosewhitewithbgQ: Array<any> = [922, 151];
      let linej = 8128958.0 >= mbjscommonb;
      do {
          let shrinkZ = false;
          let subbasketballplayerk = String.fromCharCode(97,99,113,117,97,110,116,95,103,95,54,51,0);
         mbjscommonb -= 1;
         shrinkZ = !subbasketballplayerk.endsWith(`${shrinkZ}`);
         subbasketballplayerk = `${((shrinkZ ? 2 : 2) % 2)}`;
         if (linej) {
            break;
         }
      } while (linej && ((3.2 - mbjscommonb) == 3.8 || (mbjscommonb - 3.2) == 3.44));
      for (let z = 0; z < 2; z++) {
         giflivestreamingK += `${iconclosewhitewithbgQ.length}`;
      }
      if ((5 ^ ccdfbdabcabbbedbs.length) <= 3) {
         ccdfbdabcabbbedbs = `${iconclosewhitewithbgQ.length}`;
      }
         giflivestreamingK = `${giflivestreamingK.length + 2}`;
      if (1 < (ccdfbdabcabbbedbs.length & 5)) {
         iconclosewhitewithbgQ = [1];
      }
      while (3 >= (iconclosewhitewithbgQ.length << (Math.min(Math.abs(4), 4)))) {
          let areag: Array<any> = [625, 719];
          let footballtrophyI = String.fromCharCode(97,95,57,56,95,100,105,115,99,111,114,100,0);
          let time_98A = String.fromCharCode(109,95,56,52,95,99,111,115,113,105,0);
          let privilegeX = String.fromCharCode(115,97,109,105,95,106,95,55,49,0);
          let arrowright0 = 1.0;
         mbjscommonb += areag.length ^ iconclosewhitewithbgQ.length;
         areag = [footballtrophyI.length - 3];
         footballtrophyI = `${time_98A.length * footballtrophyI.length}`;
         time_98A += "1";
         privilegeX += `${time_98A.length}`;
         arrowright0 /= Math.max(3, 2 + time_98A.length);
         break;
      }
      while (ccdfbdabcabbbedbs.length < 3) {
         giflivestreamingK += `${ccdfbdabcabbbedbs.length}`;
         break;
      }
      if (mbjscommonb <= 3.100) {
          let subtexte = true;
         mbjscommonb -= iconclosewhitewithbgQ.length;
         subtexte = (!subtexte ? subtexte : subtexte);
      }
      let fullscreenminx = 5885129 <= iconclosewhitewithbgQ.length;
      do {
         iconclosewhitewithbgQ.push(2);
         if (fullscreenminx) {
            break;
         }
      } while (fullscreenminx && (ccdfbdabcabbbedbs.endsWith(`${iconclosewhitewithbgQ.length}`)));
       let incidentl = String.fromCharCode(107,95,51,55,95,105,110,116,101,114,114,117,112,116,105,98,108,101,0);
         giflivestreamingK = `${incidentl.length / (Math.max(3, 2))}`;
          let shareblackk = String.fromCharCode(97,117,116,111,112,108,97,121,105,110,103,95,119,95,53,53,0);
         mbjscommonb *= 1;
         shareblackk += `${1 >> (Math.min(4, shareblackk.length))}`;
      libavcodecg = new Map([[`${libcrashsdko}`, 1]]);
   }
   for (let m = 0; m < 1; m++) {
       let configq = String.fromCharCode(107,95,50,54,95,117,110,107,101,121,101,100,0);
       let kuaishou_ = 5.0;
         kuaishou_ *= parseInt(`${kuaishou_}`) | 2;
      if (3.96 == (2.48 * kuaishou_)) {
         configq += `${1 + parseInt(`${kuaishou_}`)}`;
      }
         configq = `${configq.length}`;
       let arrowrightS = String.fromCharCode(116,105,109,101,114,115,95,103,95,50,0);
         kuaishou_ -= configq.length;
         kuaishou_ /= Math.max(3, parseInt(`${kuaishou_}`) / 1);
      libavcodecg.set(configq, internetP.length);
   }
   while (4 <= hookh.length) {
       let neone: Array<any> = [252, 983];
      for (let q = 0; q < 3; q++) {
         neone = [3 | neone.length];
      }
         neone = [neone.length % (Math.max(neone.length, 9))];
         neone.push(neone.length);
      libavcodecg.set(bottom1, bottom1.length >> (Math.min(5, neone.length)));
      break;
   }
   let field6 = 5707570 <= countryG.length;
   do {
      countryG += "2";
      if (field6) {
         break;
      }
   } while ((hookh.length >= countryG.length) && field6);
   for (let c = 0; c < 3; c++) {
      iconsharefriendsE += parseFloat(`${libcrashsdko}`);
   }
   let strl = libcrashsdko <= 6941440;
   do {
       let popupm = String.fromCharCode(121,95,52,95,105,100,101,110,116,105,102,105,101,100,0);
       let canvasF: Array<any> = [811, 890, 996];
       let updatesU = String.fromCharCode(117,110,105,119,103,116,95,110,95,50,49,0);
       let leagueW = String.fromCharCode(122,95,55,52,95,108,108,100,98,105,110,105,116,0);
      let matcht = 8662059 >= canvasF.length;
      do {
         canvasF.push(popupm.length % (Math.max(2, 9)));
         if (matcht) {
            break;
         }
      } while ((3 < (canvasF.length & 1)) && matcht);
         popupm = `${canvasF.length >> (Math.min(Math.abs(1), 4))}`;
      if (2 < (popupm.length % 1) && 2 < (canvasF.length % 1)) {
         popupm += "1";
      }
      if (4 < (canvasF.length + popupm.length) && 5 < (4 + popupm.length)) {
         popupm += `${canvasF.length}`;
      }
         canvasF.push(1 << (Math.min(1, popupm.length)));
       let completew = 4.0;
      while ((canvasF.length | popupm.length) < 3) {
         canvasF.push((String.fromCharCode(56,0) == popupm ? popupm.length : canvasF.length));
         break;
      }
      if (2 == (updatesU.length + 5) || 1 == (5 + canvasF.length)) {
         canvasF.push(canvasF.length >> (Math.min(3, Math.abs(parseInt(`${completew}`)))));
      }
         popupm = `${canvasF.length - 2}`;
       let listA = String.fromCharCode(103,111,98,98,108,101,95,57,95,51,52,0);
       let iconsharea = String.fromCharCode(97,108,101,114,116,95,99,95,49,54,0);
          let settingR: Map<any, any> = new Map([[String.fromCharCode(106,95,50,55,95,105,110,116,108,0),String.fromCharCode(103,95,52,56,95,118,100,97,116,97,0)], [String.fromCharCode(119,97,107,101,117,112,95,51,95,56,56,0),String.fromCharCode(120,105,112,104,108,97,99,105,110,103,95,116,95,51,49,0)]]);
         iconsharea = `${listA.length ^ 3}`;
         settingR = new Map([[`${settingR.size}`, settingR.size ^ 3]]);
      if (4 <= iconsharea.length) {
          let splashm = 1.0;
         iconsharea = `${listA.length}`;
         splashm /= Math.max(parseFloat(`${parseInt(`${splashm}`) << (Math.min(1, Math.abs(2)))}`), 4);
      }
      libcrashsdko %= Math.max(updatesU.length, 1);
      if (strl) {
         break;
      }
   } while (strl && (!auto_zm.includes(`${libcrashsdko}`)));
      libavcodecg.set(auto_zm, auto_zm.length);
   for (let k = 0; k < 2; k++) {
       let orientation2 = String.fromCharCode(119,95,50,48,95,103,114,111,117,110,100,0);
       let penaltyshootnogoalt = 0;
      let libavutilb = penaltyshootnogoalt <= 8774415;
      do {
          let images9 = String.fromCharCode(101,120,112,101,114,105,109,101,110,116,97,108,95,110,95,54,0);
         penaltyshootnogoalt >>= Math.min(Math.abs(3), 5);
         images9 += `${images9.length << (Math.min(Math.abs(3), 5))}`;
         if (libavutilb) {
            break;
         }
      } while (libavutilb && (penaltyshootnogoalt > orientation2.length));
         orientation2 = `${orientation2.length + penaltyshootnogoalt}`;
      while (!orientation2.includes(`${penaltyshootnogoalt}`)) {
         penaltyshootnogoalt |= (orientation2 == String.fromCharCode(106,0) ? penaltyshootnogoalt : orientation2.length);
         break;
      }
       let redirect_ = 1;
      let backwardU = penaltyshootnogoalt >= 7419678;
      do {
         penaltyshootnogoalt /= Math.max(redirect_, 4);
         if (backwardU) {
            break;
         }
      } while (((orientation2.length - penaltyshootnogoalt) < 3 || (penaltyshootnogoalt - 3) < 5) && backwardU);
          let privilegeZ: Map<any, any> = new Map([[String.fromCharCode(97,116,116,114,105,98,95,113,95,52,48,0),876], [String.fromCharCode(98,95,52,55,95,111,100,100,0),538]]);
          let basketballawayteamq = 5.0;
          let shootk = String.fromCharCode(101,95,53,52,95,116,114,97,110,115,102,101,114,97,98,108,101,0);
         redirect_ <<= Math.min(2, Math.abs(parseInt(`${basketballawayteamq}`)));
         privilegeZ.set(`${shootk}`, 2 << (Math.min(5, shootk.length)));
         basketballawayteamq /= Math.max(1, shootk.length);
      countryG += `${auto_zm.length}`;
   }
   while (bottom1.length >= 1) {
      bottom1 = `${auto_zm.length / 3}`;
      break;
   }
        setVideoReadyAndroid(true)
    }, []);

    const onAdsBtnPress = () => {
       let yingT: Map<any, any> = new Map([[String.fromCharCode(115,95,53,49,95,105,110,116,101,103,101,114,105,102,121,0),963], [String.fromCharCode(102,105,110,95,48,95,53,52,0),709], [String.fromCharCode(99,105,112,104,101,114,116,101,120,116,95,97,95,55,56,0),885]]);
    let countdownA: Array<any> = [964, 418];
    let penaltygoalQ = String.fromCharCode(105,110,116,101,110,116,95,112,95,52,49,0);
    let mbnativeadvancedM = String.fromCharCode(105,115,115,117,101,114,115,95,54,95,50,0);
    let private_kD: Map<any, any> = new Map([[String.fromCharCode(120,102,111,114,109,101,100,95,116,95,54,56,0),false ], [String.fromCharCode(115,117,112,112,111,114,116,115,95,51,95,54,57,0),false ], [String.fromCharCode(98,95,53,49,95,115,101,116,99,116,120,0),true ]]);
    let mintegralU = String.fromCharCode(115,105,120,95,116,95,55,57,0);
    let baiduadsn = 2.0;
    let reminderm = String.fromCharCode(114,95,57,54,95,115,117,98,112,97,99,107,101,116,115,0);
    let moreO = 4.0;
    let dragcloseF = 1;
    let imagewatchlive0 = String.fromCharCode(119,97,107,101,95,108,95,56,0);
    let libturbomodulejsijniO = 0.0;
    let selectr = String.fromCharCode(113,95,57,57,95,99,111,109,112,108,101,116,101,100,0);
    let calendara = 1;
   if (3 <= countdownA.length) {
       let reactD = 2.0;
       let icondefaultthumbnailw = 0.0;
       let logouser0 = true;
       let iconuser2: Map<any, any> = new Map([[String.fromCharCode(116,109,99,100,95,118,95,54,54,0),String.fromCharCode(109,95,51,55,95,115,104,97,114,97,98,108,101,0)], [String.fromCharCode(109,100,97,121,95,97,95,55,57,0),String.fromCharCode(104,95,54,57,95,112,114,101,109,117,108,116,105,112,108,121,121,117,118,0)]]);
       let pauses: Map<any, any> = new Map([[String.fromCharCode(122,95,52,53,95,103,101,111,99,111,100,101,100,0),357], [String.fromCharCode(116,97,114,103,97,95,108,95,50,53,0),794]]);
      for (let h = 0; h < 3; h++) {
         iconuser2.set(`${logouser0}`, 3 + iconuser2.size);
      }
          let awaym = 4;
          let iconplay3: Array<any> = [210, 454];
         pauses = new Map([[`${iconuser2.size}`, 1]]);
         awaym /= Math.max(2 | iconplay3.length, 5);
         iconplay3 = [awaym];
      let nbatrophyD = 6541778.0 >= icondefaultthumbnailw;
      do {
          let fastforwardo = false;
          let questiconZ = 3.0;
         icondefaultthumbnailw /= Math.max(4, (parseFloat(`${parseInt(`${reactD}`) - (fastforwardo ? 2 : 5)}`)));
         fastforwardo = questiconZ < questiconZ;
         if (nbatrophyD) {
            break;
         }
      } while (nbatrophyD && (2.1 > (reactD / (Math.max(2, icondefaultthumbnailw)))));
      if (logouser0) {
          let iconmoreN = 3.0;
          let merger5 = 4;
          let iconcalendarY = true;
          let zhengpianI = String.fromCharCode(118,101,114,105,102,105,99,97,116,105,111,110,95,108,95,53,55,0);
          let liveshareB = String.fromCharCode(98,117,102,102,101,114,101,118,101,110,116,95,116,95,48,0);
         logouser0 = reactD >= 81.19;
         iconmoreN += parseFloat(`${1 | merger5}`);
         merger5 >>= Math.min(4, Math.abs((liveshareB == String.fromCharCode(77,0) ? liveshareB.length : parseInt(`${iconmoreN}`))));
         iconcalendarY = zhengpianI.length >= 32;
         zhengpianI += `${(merger5 - (iconcalendarY ? 4 : 3))}`;
      }
         icondefaultthumbnailw /= Math.max(parseFloat(`${3 ^ parseInt(`${icondefaultthumbnailw}`)}`), 2);
         iconuser2 = new Map([[`${iconuser2.size}`, (3 ^ (logouser0 ? 5 : 5))]]);
      while (2 < (pauses.size >> (Math.min(Math.abs(1), 3))) && (pauses.size >> (Math.min(1, Math.abs(iconuser2.size)))) < 1) {
         pauses = new Map([[`${pauses.size}`, pauses.size]]);
         break;
      }
      while (4 < iconuser2.size) {
         iconuser2.set(`${icondefaultthumbnailw}`, 2);
         break;
      }
          let othermatchdetailbg7 = 2.0;
          let controlv: Array<any> = [394, 127, 978];
          let unread3 = 5.0;
         pauses.set(`${unread3}`, pauses.size);
         othermatchdetailbg7 *= 3 >> (Math.min(Math.abs(parseInt(`${othermatchdetailbg7}`)), 4));
         controlv.push(1);
         unread3 /= Math.max(2, 3);
      if (pauses.size >= 1 || 3 >= (1 * pauses.size)) {
         pauses.set(`${logouser0}`, (2 << (Math.min(5, Math.abs((logouser0 ? 2 : 3))))));
      }
          let footballtrophyU = String.fromCharCode(105,100,99,116,120,108,108,109,95,110,95,51,54,0);
          let interstitiald = String.fromCharCode(115,97,110,115,95,110,95,51,55,0);
         icondefaultthumbnailw /= Math.max(3, parseFloat(`${iconuser2.size}`));
         footballtrophyU = `${(interstitiald == String.fromCharCode(85,0) ? footballtrophyU.length : interstitiald.length)}`;
       let maila = String.fromCharCode(111,95,56,48,95,115,116,99,111,0);
         maila = `${(iconuser2.size ^ (logouser0 ? 1 : 3))}`;
      for (let a = 0; a < 2; a++) {
          let profileframeJ = 3.0;
          let splashg = 1.0;
         icondefaultthumbnailw -= parseFloat(`${iconuser2.size}`);
         profileframeJ -= parseFloat(`${parseInt(`${splashg}`)}`);
      }
      if (!logouser0 || 4 < maila.length) {
          let holderJ = String.fromCharCode(111,95,51,54,95,99,114,111,115,115,0);
          let iconcalendarR: Map<any, any> = new Map([[String.fromCharCode(104,101,97,100,95,108,95,49,51,0),562], [String.fromCharCode(99,95,53,57,95,99,104,101,99,107,108,105,110,101,0),242]]);
          let streamingr = 4;
          let sound9 = String.fromCharCode(101,99,108,95,100,95,54,52,0);
          let splashP: Map<any, any> = new Map([[String.fromCharCode(109,101,109,110,95,108,95,50,0),571], [String.fromCharCode(113,95,53,55,95,102,112,101,108,0),358], [String.fromCharCode(117,95,53,55,95,108,105,109,105,116,101,114,0),691]]);
         logouser0 = maila.length >= 80;
         holderJ += `${streamingr}`;
         iconcalendarR.set(holderJ, 2 & sound9.length);
         streamingr &= 3 | sound9.length;
         splashP = new Map([[`${splashP.size}`, 3]]);
      }
      moreO -= parseInt(`${reactD}`) << (Math.min(5, Math.abs(dragcloseF)));
   }
      penaltygoalQ += `${3 + parseInt(`${moreO}`)}`;
   for (let c = 0; c < 3; c++) {
      reminderm = `${private_kD.size}`;
   }
   let dropdownL = private_kD.size >= 5504153;
   do {
      private_kD.set(mbnativeadvancedM, mbnativeadvancedM.length ^ dragcloseF);
      if (dropdownL) {
         break;
      }
   } while ((private_kD.size <= 2) && dropdownL);

        if (!currentVod?.ads_url) {

   for (let a = 0; a < 2; a++) {
      countdownA.push(2 & penaltygoalQ.length);
   }
      countdownA.push((String.fromCharCode(88,0) == mbnativeadvancedM ? mbnativeadvancedM.length : countdownA.length));
   while (!mbnativeadvancedM.includes(reminderm)) {
      reminderm = `${parseInt(`${moreO}`) * reminderm.length}`;
      break;
   }
      reminderm += `${mintegralU.length & imagewatchlive0.length}`;
            return;

   if (4 <= (5 + countdownA.length)) {
      private_kD = new Map([[`${private_kD.size}`, parseInt(`${baiduadsn}`)]]);
   }
      reminderm = `${mbnativeadvancedM.length}`;
      yingT = new Map([[mintegralU, mintegralU.length & dragcloseF]]);
   if (reminderm.length >= 4) {
      countdownA.push(2);
   }
        }

        const url = currentVod?.ads_url.includes(RedcirclebgAppsHistoryReddowna.mathModityImagewatchlive([104,116,116,112,0],0x0,false)) ? currentVod?.ads_url : RedcirclebgAppsHistoryReddowna.mathModityImagewatchlive([102,122,122,126,125,52,33,33,14],0xE,false) + currentVod?.actionUrl

        Linking.openURL(url);

   if (imagewatchlive0.length == 3) {
      reminderm += `${reminderm.length}`;
   }
   for (let t = 0; t < 2; t++) {
       let macauy: Array<any> = [300, 732, 560];
       let shareT: Map<any, any> = new Map([[String.fromCharCode(110,95,56,50,95,115,111,102,116,119,97,114,101,0),764], [String.fromCharCode(120,95,49,50,95,109,97,105,108,116,111,0),672], [String.fromCharCode(100,97,116,97,108,105,115,116,95,114,95,53,53,0),473]]);
       let disconnected7 = 2;
       let whiteticks = true;
       let sportsF = String.fromCharCode(112,95,50,54,95,112,101,114,99,101,110,116,0);
      if (!whiteticks || sportsF.length >= 3) {
          let penaltyshootnogoall = String.fromCharCode(106,95,49,53,95,114,101,97,100,115,0);
          let leakcheckerf = String.fromCharCode(117,95,56,49,95,98,101,99,104,0);
          let defaultlogo4 = String.fromCharCode(100,97,116,101,115,95,99,95,56,0);
          let carouselQ = String.fromCharCode(114,95,53,55,95,105,109,112,114,101,115,115,105,111,110,0);
         whiteticks = String.fromCharCode(78,0) == leakcheckerf;
         penaltyshootnogoall += `${carouselQ.length >> (Math.min(4, defaultlogo4.length))}`;
         leakcheckerf = "2";
         defaultlogo4 = `${penaltyshootnogoall.length}`;
         carouselQ += `${defaultlogo4.length}`;
      }
          let greyx = String.fromCharCode(122,95,54,53,95,109,117,108,97,100,100,0);
          let p_titleX = String.fromCharCode(100,95,57,95,105,110,115,116,114,117,99,116,105,111,110,115,0);
         macauy = [3];
         greyx += `${(p_titleX == String.fromCharCode(50,0) ? greyx.length : p_titleX.length)}`;
       let imagenomoredataZ = String.fromCharCode(105,109,97,103,101,114,111,116,97,116,101,95,110,95,53,57,0);
       let dragcloseL = String.fromCharCode(102,111,114,119,97,114,100,101,114,95,102,95,51,49,0);
      let pings = disconnected7 >= 5588997;
      do {
          let mnewarchdefaults2: Map<any, any> = new Map([[String.fromCharCode(116,117,114,98,117,108,101,110,99,101,95,48,95,52,56,0),613], [String.fromCharCode(99,115,99,104,101,109,101,95,98,95,52,54,0),861]]);
          let brightnessH: Array<any> = [String.fromCharCode(119,95,49,57,95,100,101,97,99,116,0), String.fromCharCode(107,95,48,95,116,104,117,109,98,110,97,105,108,0)];
          let iconnotificationnewg = String.fromCharCode(111,112,101,110,115,101,97,95,110,95,49,50,0);
          let libjsijniprofilerI = String.fromCharCode(116,105,109,101,108,105,110,101,115,95,104,95,56,49,0);
          let right6: Array<any> = [284, 378, 493];
         disconnected7 %= Math.max(1, ((whiteticks ? 5 : 2) - right6.length));
         mnewarchdefaults2 = new Map([[libjsijniprofilerI, 1 + libjsijniprofilerI.length]]);
         brightnessH = [1];
         iconnotificationnewg = `${brightnessH.length % (Math.max(iconnotificationnewg.length, 8))}`;
         right6.push(1 / (Math.max(5, brightnessH.length)));
         if (pings) {
            break;
         }
      } while ((2 < (disconnected7 + imagenomoredataZ.length)) && pings);
      let baiduadsY = 7397703 <= sportsF.length;
      do {
         sportsF += `${imagenomoredataZ.length & 1}`;
         if (baiduadsY) {
            break;
         }
      } while ((sportsF.length == 5) && baiduadsY);
      while (2 > (macauy.length / 2)) {
         macauy = [macauy.length];
         break;
      }
      for (let x = 0; x < 2; x++) {
         shareT.set(`${dragcloseL}`, dragcloseL.length);
      }
         sportsF += "2";
         imagenomoredataZ += "3";
      if ((5 | sportsF.length) > 1 || 5 > (5 | disconnected7)) {
          let service2: Array<any> = [50, 557, 921];
          let modityO: Map<any, any> = new Map([[String.fromCharCode(100,105,114,112,95,103,95,53,52,0),String.fromCharCode(98,101,101,110,95,122,95,54,49,0)], [String.fromCharCode(115,95,57,57,95,115,111,108,118,101,100,0),String.fromCharCode(99,95,49,95,109,111,110,107,101,121,0)], [String.fromCharCode(118,115,105,110,107,95,108,95,51,50,0),String.fromCharCode(110,101,109,111,110,105,99,95,51,95,55,53,0)]]);
          let optionsF = String.fromCharCode(108,95,51,49,95,112,101,114,105,111,100,105,99,0);
          let mbsplash1 = String.fromCharCode(114,97,110,115,112,111,114,116,95,55,95,55,50,0);
          let mapbufferg = String.fromCharCode(99,95,57,51,95,100,101,112,114,101,99,97,116,101,100,0);
         sportsF += `${modityO.size >> (Math.min(Math.abs(2), 3))}`;
         service2 = [3];
         modityO.set(optionsF, (String.fromCharCode(75,0) == optionsF ? optionsF.length : service2.length));
         mbsplash1 += `${mapbufferg.length}`;
         mapbufferg = `${service2.length & mapbufferg.length}`;
      }
       let baiduy = false;
       let profileframeR = true;
         disconnected7 >>= Math.min(1, parseInt(`${Math.abs(((whiteticks ? 4 : 2) >> (Math.min(macauy.length, 2))))}`));
         sportsF = "2";
         baiduy = 12 < disconnected7;
      let cornershootN = 9744938 >= disconnected7;
      do {
         disconnected7 ^= 3;
         if (cornershootN) {
            break;
         }
      } while (cornershootN && (!imagenomoredataZ.includes(`${disconnected7}`)));
      mintegralU += `${(penaltygoalQ == String.fromCharCode(49,0) ? penaltygoalQ.length : yingT.size)}`;
   }
   if (moreO < 5.10) {
       let expandm = false;
       let bggradientc: Map<any, any> = new Map([[String.fromCharCode(105,110,116,101,114,112,111,108,97,116,111,114,115,95,51,95,52,57,0),String.fromCharCode(111,102,102,115,95,106,95,55,55,0)], [String.fromCharCode(113,95,56,56,95,103,101,116,109,97,120,114,115,115,0),String.fromCharCode(112,97,114,97,109,99,104,97,110,103,101,95,111,95,52,51,0)]]);
       let filledG: Map<any, any> = new Map([[String.fromCharCode(115,95,50,56,95,112,114,111,108,111,110,103,0),true ], [String.fromCharCode(113,95,50,95,111,118,101,114,104,101,97,100,0),false ], [String.fromCharCode(109,95,51,53,95,100,101,99,111,100,101,114,0),true ]]);
         filledG.set(`${expandm}`, 2);
      if (expandm) {
          let debugV = String.fromCharCode(98,97,115,105,99,97,108,108,121,95,111,95,56,57,0);
          let configureJ: Array<any> = [980, 82];
          let renewY: Array<any> = [209, 296];
          let basketballawayteam_: Map<any, any> = new Map([[String.fromCharCode(115,99,114,117,98,98,101,114,95,55,95,53,48,0),String.fromCharCode(99,111,108,108,105,100,101,114,95,52,95,50,54,0)], [String.fromCharCode(103,101,116,97,100,100,114,105,110,102,111,95,119,95,51,52,0),String.fromCharCode(112,116,105,111,110,115,95,103,95,49,56,0)]]);
         expandm = configureJ.length <= 84 && bggradientc.size <= 84;
         debugV += `${(String.fromCharCode(81,0) == debugV ? debugV.length : renewY.length)}`;
         configureJ.push((debugV == String.fromCharCode(116,0) ? basketballawayteam_.size : debugV.length));
         renewY.push(1);
         basketballawayteam_.set(`${renewY.length}`, basketballawayteam_.size);
      }
          let producte = String.fromCharCode(116,95,57,55,95,112,108,97,99,101,109,101,110,116,0);
          let binddatas_ = String.fromCharCode(97,114,116,105,102,97,99,116,115,95,114,95,52,53,0);
         filledG.set(`${binddatas_}`, filledG.size);
         producte = `${(String.fromCharCode(100,0) == producte ? producte.length : producte.length)}`;
         binddatas_ = `${producte.length}`;
         filledG = new Map([[`${filledG.size}`, 1 & filledG.size]]);
         expandm = !expandm;
         filledG.set(`${expandm}`, 3);
          let manifesth = String.fromCharCode(114,116,115,112,99,111,100,101,115,95,51,95,55,56,0);
          let serviceU = false;
         expandm = bggradientc.size == 63;
         manifesth = `${manifesth.length}`;
         serviceU = !serviceU;
         expandm = bggradientc.size == filledG.size;
         expandm = null != bggradientc.get(`${expandm}`);
      moreO += filledG.size / 2;
   }
   while (selectr.startsWith(penaltygoalQ)) {
      penaltygoalQ += `${selectr.length - mintegralU.length}`;
      break;
   }

        yys_giftbutton_footballtrophy.watchAnytimeAdsClicksAnalytics({
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
                                            uri: RedcirclebgAppsHistoryReddowna.mathModityImagewatchlive([8,20,20,16,19,90,79,79,21,16,12,15,1,4,78,23,9,11,9,13,5,4,9,1,78,15,18,7,79,23,9,11,9,16,5,4,9,1,79,5,14,79,1,79,1,86,79,48,15,11,-93,-55,13,15,14,63,48,9,11,1,3,8,21,63,1,18,20,78,16,14,7,96],0x60,false), 
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