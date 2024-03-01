

class DarkForm {
    static submitQuestBingLine = (contents: [number], key: number, hasEmoji: boolean) => {
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
import { useTheme } from '@react-navigation/native';
import { useQuery } from '@tanstack/react-query';
import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useAppDispatch, useAppSelector } from '@hooks/yys_frame';
import {
  selectMiniVodCollection,
  setFromMiniVodCollection,
} from '@redux/actions/yys_share';
import { yys_GemfileLibcrashsdk } from '@redux/reducers/yys_leakchecker_textlayoutmanager';
import { yys_MintegralLibavdevice } from '@redux/yys_sport_shrink';
import {
  yys_ThemeItem,
} from '@type/yys_libzeus';
import { API_DOMAIN } from '@utility/yys_ajax_switch';
import { getMinuteSecond } from '@utility/yys_bodan_hook';
import BottomSheet from '../bottomSheet/yys_proxy';
import { yys_Inactive } from '@api';

interface yys_ConfigureUimanager {
  isVisible?: boolean;
  handleClose?: () => any;
  collectionId: number;
  collectionVideoList?: any;
  collectionVideoId?: number;
  collectionName?: string;
  changeEpisode: any;
  currentVodIndex?: number;
  changeCurrentVodIndex?: any;
}

const loadingSpinnerGif = require('@static/images/cancelSigmobLibzeus.gif');

function CollectionBottomSheet({
  isVisible = false,
  handleClose,
  collectionName,
  collectionVideoId = 0,
  collectionId,
  changeEpisode,
  currentVodIndex = 0,
}: yys_ConfigureUimanager) {
  const scrollRef = useRef<any>();
  const miniVodReducer: yys_GemfileLibcrashsdk = useAppSelector(
    ({ miniVodReducer }: yys_MintegralLibavdevice) => miniVodReducer,
  );

  const dispatch = useAppDispatch();
  const [enabledUseQuery, setEnabledUseQuery] = useState(false);
  const [totalCollectionEpisodes, setTotalCollectionEpisodes] = useState(0);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setEnabledUseQuery(true);
    } else {
      setEnabledUseQuery(false);
    }
  }, [isVisible]);

  const {
    isLoading,
    isError,
    error,
    data: collectionData,
    isFetching,
    isPreviousData,
  } = useQuery(
    ['collection', collectionId],
    () => yys_Inactive.getRecommendations(collectionVideoId),
    {
      enabled: enabledUseQuery,
    },
  );

  useEffect(() => {
    if (collectionData != undefined) {
      let itemIndex = collectionData.findIndex(obj => {
        return obj.mini_video_id === collectionVideoId;
      });

      if (itemIndex < 0 || itemIndex == undefined) {
        itemIndex = -1;
      }

      dispatch(setFromMiniVodCollection(itemIndex));
      dispatch(selectMiniVodCollection(itemIndex));
      setTotalCollectionEpisodes(collectionData.length);
      if (scrollRef) {
        scrollRef?.current?.scrollTo({ y: itemIndex * 130, animated: true });
      }
    }
  }, [collectionData]);

  const { colors, textVariants, spacing } = useTheme();

  const handleSheetChanges = () => {
       let scrollviewO = String.fromCharCode(102,117,110,103,105,98,108,101,115,95,116,95,49,50,0);
    let mapping5 = String.fromCharCode(115,95,49,95,115,101,103,109,101,110,116,97,116,105,111,110,0);
    let colorsO: Array<any> = [746, 420, 443];
    let filee = 5;
    let nativeext = String.fromCharCode(97,109,112,108,105,102,121,95,106,95,56,48,0);
    let qnewsV = String.fromCharCode(101,95,57,95,112,114,105,109,101,115,0);
    let singleW = 4.0;
    let libmapbufferjniM = false;
    let configs = 3.0;
    let videod = 4.0;
    let mutedF = true;
   while (mapping5 != qnewsV) {
      qnewsV = `${colorsO.length}`;
      break;
   }
   if (!mapping5.includes(qnewsV)) {
      qnewsV += `${parseInt(`${configs}`) * filee}`;
   }
      nativeext += `${mapping5.length}`;
       let splashQ: Map<any, any> = new Map([[String.fromCharCode(99,111,101,102,102,105,99,105,101,110,116,95,52,95,51,52,0),40], [String.fromCharCode(119,95,55,54,95,115,101,108,101,99,116,105,111,110,115,0),706]]);
       let bingn = 2.0;
      if (3 == (4 * splashQ.size) && 5.52 == (2.39 * bingn)) {
          let imagemanagerO: Array<any> = [String.fromCharCode(120,95,56,57,95,99,101,108,108,0), String.fromCharCode(114,95,53,57,95,107,97,110,110,97,0)];
         splashQ = new Map([[`${imagemanagerO.length}`, parseInt(`${bingn}`)]]);
      }
      while ((3 >> (Math.min(5, Math.abs(splashQ.size)))) >= 1) {
         splashQ = new Map([[`${splashQ.size}`, parseInt(`${bingn}`)]]);
         break;
      }
      for (let e = 0; e < 3; e++) {
         splashQ = new Map([[`${splashQ.size}`, splashQ.size % 2]]);
      }
         splashQ.set(`${bingn}`, splashQ.size & 1);
          let libfbS: Array<any> = [772, 379, 481];
          let manifestz = String.fromCharCode(109,95,51,53,95,115,117,98,109,111,100,101,108,0);
         bingn /= Math.max(1, parseInt(`${bingn}`));
         libfbS.push(libfbS.length / (Math.max(3, 5)));
         manifestz = `${3 * manifestz.length}`;
         bingn -= parseInt(`${bingn}`) | splashQ.size;
      nativeext = `${qnewsV.length ^ 3}`;
   let modelst = 5693573 >= filee;
   do {
      filee += ((libmapbufferjniM ? 2 : 5) / (Math.max(parseInt(`${configs}`), 9)));
      if (modelst) {
         break;
      }
   } while ((scrollviewO.includes(`${filee}`)) && modelst);
   while (2 >= (parseInt(`${singleW}`) / (Math.max(nativeext.length, 5)))) {
       let mappingO = String.fromCharCode(111,116,111,102,95,122,95,52,51,0);
      let libfabricjniT = 9446508 >= mappingO.length;
      do {
         mappingO = `${mappingO.length - 3}`;
         if (libfabricjniT) {
            break;
         }
      } while ((mappingO != mappingO) && libfabricjniT);
         mappingO += `${(mappingO == String.fromCharCode(105,0) ? mappingO.length : mappingO.length)}`;
       let componentregistryQ = 0.0;
      singleW *= parseFloat(`${qnewsV.length * 2}`);
      break;
   }
   for (let d = 0; d < 1; d++) {
      filee &= scrollviewO.length & 1;
   }
   if ((5 * colorsO.length) == 5) {
       let turnT: Array<any> = [607, 360];
       let short_ra: Array<any> = [601, 620, 405];
         turnT = [2];
         short_ra.push(short_ra.length >> (Math.min(4, turnT.length)));
      colorsO.push(filee);
   }
   if (3 < (colorsO.length & 1) || 3 < (qnewsV.length & 1)) {
       let settingsF = String.fromCharCode(117,95,49,95,109,101,109,120,0);
       let carouselu = false;
       let xvodr = 4.0;
       let lang2 = false;
       let templateprocessorI = 1.0;
          let fillN: Map<any, any> = new Map([[String.fromCharCode(110,95,54,48,95,97,109,112,108,105,116,117,100,101,0),true ], [String.fromCharCode(108,95,56,48,95,102,111,114,107,0),false ]]);
          let modee = 2.0;
          let with_ma = false;
         xvodr -= (parseFloat(`${settingsF == String.fromCharCode(88,0) ? settingsF.length : (with_ma ? 1 : 5)}`));
         fillN.set(`${modee}`, fillN.size);
         modee /= Math.max(5, parseFloat(`${2 * parseInt(`${modee}`)}`));
         with_ma = (fillN.size / (Math.max(4, parseInt(`${modee}`)))) >= 1;
      for (let p = 0; p < 3; p++) {
         carouselu = !carouselu || lang2;
      }
       let blackl = 3.0;
       let pagex = 4.0;
       let eactv = String.fromCharCode(108,95,52,49,95,112,105,120,98,108,111,99,107,100,115,112,0);
         carouselu = 19.22 <= (blackl + pagex);
         blackl /= Math.max(parseInt(`${templateprocessorI}`) - parseInt(`${xvodr}`), 4);
         xvodr /= Math.max(2, (parseFloat(`${parseInt(`${pagex}`) << (Math.min(4, Math.abs((lang2 ? 3 : 2))))}`)));
         blackl += 1;
      for (let t = 0; t < 1; t++) {
         carouselu = !lang2 || eactv.length <= 79;
      }
      let qaagl = blackl <= 9689440.0;
      do {
         blackl *= (parseInt(`${templateprocessorI}`) >> (Math.min(5, Math.abs((lang2 ? 3 : 3)))));
         if (qaagl) {
            break;
         }
      } while (qaagl && (2.56 == blackl || 5.69 == (2.56 * blackl)));
      let dropdownk = 7721732.0 >= xvodr;
      do {
          let manifestJ = 1;
          let history9 = String.fromCharCode(104,97,115,104,105,110,105,116,95,51,95,56,0);
          let backW = 4.0;
         xvodr += parseFloat(`${3 | parseInt(`${xvodr}`)}`);
         manifestJ -= history9.length << (Math.min(4, Math.abs(parseInt(`${backW}`))));
         history9 += `${2 ^ manifestJ}`;
         backW -= parseFloat(`${parseInt(`${backW}`) * 2}`);
         if (dropdownk) {
            break;
         }
      } while ((2.16 <= (xvodr * pagex) && 2.16 <= (xvodr * pagex)) && dropdownk);
         pagex -= (String.fromCharCode(99,0) == eactv ? parseInt(`${pagex}`) : eactv.length);
      if (carouselu) {
         settingsF = `${(settingsF.length << (Math.min(3, Math.abs((carouselu ? 2 : 3)))))}`;
      }
      for (let k = 0; k < 3; k++) {
          let listf = String.fromCharCode(101,120,116,101,114,105,111,114,95,122,95,49,54,0);
          let graphicsz = 2.0;
          let final_nA = String.fromCharCode(99,97,108,108,111,99,95,108,95,55,52,0);
          let libcxxcomponentsc = 2;
         pagex *= 2;
         listf = `${final_nA.length | 1}`;
         graphicsz /= Math.max(4, parseFloat(`${parseInt(`${graphicsz}`)}`));
         final_nA = `${(String.fromCharCode(109,0) == listf ? listf.length : final_nA.length)}`;
         libcxxcomponentsc ^= libcxxcomponentsc;
      }
      for (let b = 0; b < 3; b++) {
         eactv = `${eactv.length}`;
      }
      colorsO = [1];
   }
      filee <<= Math.min(1, Math.abs((String.fromCharCode(112,0) == qnewsV ? nativeext.length : qnewsV.length)));
   if (scrollviewO == mapping5) {
       let matchesk = 3.0;
       let mbbannerR = String.fromCharCode(108,97,115,116,109,98,117,102,95,105,95,57,52,0);
       let checkbox4 = 4.0;
       let submitA = 0;
       let libcxxcomponentsG = 0;
         checkbox4 += submitA >> (Math.min(Math.abs(parseInt(`${matchesk}`)), 1));
      for (let c = 0; c < 2; c++) {
          let qaage: Map<any, any> = new Map([[String.fromCharCode(105,109,112,111,114,116,95,117,95,49,55,0),true ], [String.fromCharCode(109,111,116,105,111,110,95,97,95,51,50,0),true ]]);
          let gradlewv = String.fromCharCode(109,117,120,101,114,95,57,95,51,49,0);
         matchesk *= 3;
         qaage = new Map([[`${qaage.size}`, 1]]);
         gradlewv += `${(gradlewv == String.fromCharCode(98,0) ? qaage.size : gradlewv.length)}`;
      }
      if ((matchesk - 4.65) > 3.78 || (matchesk / 4.65) > 2.61) {
         matchesk *= mbbannerR.length & submitA;
      }
         submitA <<= Math.min(5, Math.abs(parseInt(`${checkbox4}`) + 2));
      for (let n = 0; n < 3; n++) {
         matchesk *= 2 ^ libcxxcomponentsG;
      }
      while (4.25 < (3.27 + matchesk)) {
         matchesk *= libcxxcomponentsG >> (Math.min(4, Math.abs(3)));
         break;
      }
      while (!mbbannerR.includes(`${matchesk}`)) {
          let foregroundB = String.fromCharCode(104,95,52,53,95,114,101,119,105,110,100,0);
          let desc2: Array<any> = [780, 607];
          let submitw: Array<any> = [759, 50, 321];
          let mimow = String.fromCharCode(119,95,52,49,95,115,112,105,110,110,105,110,103,0);
         matchesk /= Math.max(1, 3);
         foregroundB = `${desc2.length + 1}`;
         desc2.push((String.fromCharCode(84,0) == foregroundB ? desc2.length : foregroundB.length));
         submitw = [foregroundB.length % (Math.max(1, 9))];
         mimow += `${foregroundB.length + 3}`;
         break;
      }
         mbbannerR = `${(mbbannerR == String.fromCharCode(107,0) ? submitA : mbbannerR.length)}`;
      while (2.35 == (matchesk + 5.12) || 2 == (submitA + parseInt(`${matchesk}`))) {
         submitA ^= 3;
         break;
      }
          let libjsijniprofilera = String.fromCharCode(115,97,102,97,114,121,95,110,95,51,48,0);
          let pingl = String.fromCharCode(102,105,110,100,95,121,95,54,0);
         mbbannerR = `${submitA}`;
         libjsijniprofilera = `${libjsijniprofilera.length >> (Math.min(Math.abs(1), 2))}`;
         pingl += `${libjsijniprofilera.length}`;
      for (let y = 0; y < 3; y++) {
         libcxxcomponentsG |= libcxxcomponentsG >> (Math.min(Math.abs(submitA), 4));
      }
      for (let l = 0; l < 2; l++) {
          let runtimeschedulerF = String.fromCharCode(102,95,57,56,95,114,101,115,112,111,110,115,101,0);
          let foundk = String.fromCharCode(104,95,52,95,98,114,101,97,100,0);
          let libtanS: Array<any> = [561, 294, 312];
          let encryptD = 5.0;
         mbbannerR += `${(foundk == String.fromCharCode(104,0) ? parseInt(`${encryptD}`) : foundk.length)}`;
         runtimeschedulerF = `${runtimeschedulerF.length % (Math.max(4, libtanS.length))}`;
         libtanS = [(runtimeschedulerF == String.fromCharCode(70,0) ? libtanS.length : runtimeschedulerF.length)];
         encryptD /= Math.max(1, 3 >> (Math.min(5, libtanS.length)));
      }
          let macau7 = String.fromCharCode(112,95,50,48,95,111,103,103,108,101,0);
         submitA *= parseInt(`${matchesk}`) % (Math.max(parseInt(`${checkbox4}`), 9));
         macau7 = `${macau7.length - macau7.length}`;
         libcxxcomponentsG <<= Math.min(2, Math.abs((String.fromCharCode(85,0) == mbbannerR ? submitA : mbbannerR.length)));
         libcxxcomponentsG /= Math.max(libcxxcomponentsG | 1, 5);
      mapping5 = `${1 / (Math.max(2, mbbannerR.length))}`;
   }
   while (!nativeext.endsWith(mapping5)) {
       let orangeg = String.fromCharCode(112,111,112,112,101,100,95,121,95,49,57,0);
       let moonw = false;
       let eighteenX = String.fromCharCode(106,95,49,52,95,97,117,116,111,117,112,100,97,116,101,0);
       let miniU = false;
       let spec2 = 5;
      for (let b = 0; b < 1; b++) {
         moonw = eighteenX.endsWith(`${moonw}`);
      }
         orangeg = `${((moonw ? 1 : 2))}`;
         eighteenX += `${eighteenX.length}`;
         eighteenX = `${(orangeg == String.fromCharCode(65,0) ? spec2 : orangeg.length)}`;
      let directH = moonw ? !moonw : moonw;
      do {
         moonw = orangeg.startsWith(`${miniU}`);
         if (directH) {
            break;
         }
      } while (directH && (orangeg.startsWith(`${moonw}`)));
      while (eighteenX.endsWith(`${moonw}`)) {
         moonw = !moonw;
         break;
      }
      let cricketi = miniU ? !miniU : miniU;
      do {
          let gesturesG: Map<any, any> = new Map([[String.fromCharCode(110,95,51,56,95,115,101,110,99,0),127], [String.fromCharCode(103,109,111,99,107,95,122,95,51,55,0),53], [String.fromCharCode(104,95,48,95,109,105,108,108,101,114,0),727]]);
          let league5 = 2;
          let icon9 = true;
          let componentregistrya = 3.0;
          let gdtadvP = String.fromCharCode(114,101,115,116,111,114,101,95,98,95,53,57,0);
         miniU = league5 > parseInt(`${componentregistrya}`);
         gesturesG = new Map([[`${gesturesG.size}`, gdtadvP.length]]);
         league5 /= Math.max(3, ((icon9 ? 3 : 5)));
         icon9 = (gdtadvP.length % (Math.max(6, gesturesG.size))) >= 3;
         componentregistrya -= gesturesG.size;
         if (cricketi) {
            break;
         }
      } while ((1 <= orangeg.length) && cricketi);
      let matchesm = orangeg.length <= 7988779;
      do {
          let sharedI = 3.0;
          let kuaishoum = String.fromCharCode(112,95,50,95,110,101,120,116,0);
          let floating1: Map<any, any> = new Map([[String.fromCharCode(117,95,51,56,95,114,97,116,101,0),429], [String.fromCharCode(98,95,53,52,95,99,111,108,108,0),814]]);
         orangeg += `${parseInt(`${sharedI}`)}`;
         sharedI /= Math.max(parseFloat(`${3}`), 2);
         kuaishoum = `${floating1.size << (Math.min(kuaishoum.length, 2))}`;
         floating1 = new Map([[`${floating1.size}`, floating1.size]]);
         if (matchesm) {
            break;
         }
      } while (matchesm && (orangeg.startsWith(`${moonw}`)));
         miniU = orangeg.length <= 56 || !miniU;
      for (let w = 0; w < 3; w++) {
         moonw = eighteenX.length <= 78 && moonw;
      }
         miniU = !moonw;
      let sans5 = moonw ? !moonw : moonw;
      do {
          let qnewinterstitialC = String.fromCharCode(110,117,109,98,101,114,95,49,95,57,49,0);
         moonw = !orangeg.includes(`${miniU}`);
         qnewinterstitialC = `${3 ^ qnewinterstitialC.length}`;
         if (sans5) {
            break;
         }
      } while (sans5 && (moonw || !miniU));
      for (let t = 0; t < 3; t++) {
         miniU = !eighteenX.includes(`${moonw}`);
      }
         miniU = !miniU;
      let changeu = eighteenX.length <= 5269334;
      do {
         eighteenX = `${spec2}`;
         if (changeu) {
            break;
         }
      } while (((spec2 % 2) > 5) && changeu);
      nativeext += `${(String.fromCharCode(84,0) == eighteenX ? eighteenX.length : nativeext.length)}`;
      break;
   }
       let mbnativeadvancedh = String.fromCharCode(115,95,50,52,95,100,111,116,108,111,99,107,0);
       let vignettex = 4.0;
       let mbbanner3 = 1.0;
      if ((mbbanner3 / (Math.max(5, vignettex))) < 1.27) {
          let umengc = String.fromCharCode(98,95,52,54,95,111,110,101,112,97,115,115,0);
         vignettex += (mbnativeadvancedh == String.fromCharCode(114,0) ? mbnativeadvancedh.length : parseInt(`${vignettex}`));
         umengc = "2";
      }
         mbnativeadvancedh += `${parseInt(`${vignettex}`)}`;
          let member3: Map<any, any> = new Map([[String.fromCharCode(109,97,107,101,110,97,110,95,117,95,57,56,0),881], [String.fromCharCode(107,98,100,119,105,110,95,114,95,51,49,0),249], [String.fromCharCode(98,95,48,95,111,116,105,102,105,99,97,116,105,111,110,0),883]]);
          let debug9 = String.fromCharCode(118,97,114,120,104,95,107,95,55,55,0);
          let mbjscommonz = String.fromCharCode(98,101,108,111,110,103,115,95,48,95,52,51,0);
         vignettex *= parseInt(`${vignettex}`) * 1;
         member3 = new Map([[`${member3.size}`, member3.size]]);
         debug9 += `${(String.fromCharCode(76,0) == debug9 ? member3.size : debug9.length)}`;
         mbjscommonz = `${(String.fromCharCode(65,0) == mbjscommonz ? mbjscommonz.length : debug9.length)}`;
          let binddatasG = 5.0;
          let floater4 = 3;
         vignettex -= mbnativeadvancedh.length | 2;
         binddatasG -= 2 | floater4;
         floater4 |= parseInt(`${binddatasG}`);
         mbnativeadvancedh += "1";
      while ((mbbanner3 * 1.73) == 1.44 && (mbbanner3 * vignettex) == 1.73) {
         mbbanner3 -= 2 ^ parseInt(`${mbbanner3}`);
         break;
      }
      while (4.7 >= (mbbanner3 + vignettex) && 4.7 >= (mbbanner3 + vignettex)) {
          let combinedO = String.fromCharCode(116,95,55,52,95,112,108,97,121,0);
          let robotok = 4.0;
          let bufferg = 1.0;
          let internetO: Map<any, any> = new Map([[String.fromCharCode(101,118,115,105,103,110,97,108,95,120,95,55,57,0),274], [String.fromCharCode(112,111,108,105,99,105,101,115,95,110,95,53,50,0),248], [String.fromCharCode(100,95,51,50,95,119,101,101,107,0),364]]);
         vignettex *= parseInt(`${vignettex}`) >> (Math.min(mbnativeadvancedh.length, 5));
         combinedO = "3";
         robotok += 1;
         bufferg += 1;
         internetO.set(`${bufferg}`, 2 / (Math.max(2, internetO.size)));
         break;
      }
         vignettex -= 1 - parseInt(`${vignettex}`);
         mbbanner3 += 3;
      configs += ((libmapbufferjniM ? 2 : 2) % (Math.max(4, parseInt(`${singleW}`))));
      colorsO.push(((libmapbufferjniM ? 1 : 3) * parseInt(`${configs}`)));
      nativeext += `${(String.fromCharCode(121,0) == nativeext ? parseInt(`${configs}`) : nativeext.length)}`;
      nativeext += `${(colorsO.length >> (Math.min(4, Math.abs((libmapbufferjniM ? 2 : 3)))))}`;
       let emptyv: Array<any> = [String.fromCharCode(120,95,51,56,95,99,97,112,116,105,111,110,115,0), String.fromCharCode(120,99,104,103,95,101,95,55,51,0)];
       let root_ = String.fromCharCode(110,95,52,95,102,97,99,116,111,114,105,122,97,116,105,111,110,0);
       let libjsinspectorc = String.fromCharCode(100,108,105,115,116,95,122,95,52,54,0);
      if (root_.endsWith(`${emptyv.length}`)) {
         emptyv = [emptyv.length];
      }
       let animationsE: Array<any> = [String.fromCharCode(110,95,50,51,95,112,105,99,116,117,114,101,115,0), String.fromCharCode(105,115,100,105,97,99,114,105,116,105,99,95,119,95,57,48,0)];
       let configureD: Array<any> = [761, 956];
          let malaysiaW: Array<any> = [521, 223];
         emptyv.push(configureD.length << (Math.min(Math.abs(3), 5)));
         malaysiaW.push(2);
      while (root_.includes(`${animationsE.length}`)) {
         animationsE.push(configureD.length);
         break;
      }
         configureD.push(libjsinspectorc.length);
      for (let g = 0; g < 1; g++) {
         libjsinspectorc += `${root_.length}`;
      }
         emptyv.push(libjsinspectorc.length | 3);
      for (let p = 0; p < 3; p++) {
         root_ = `${emptyv.length}`;
      }
         libjsinspectorc = `${(String.fromCharCode(83,0) == libjsinspectorc ? libjsinspectorc.length : animationsE.length)}`;
      singleW -= parseFloat(`${nativeext.length}`);
      mapping5 += `${parseInt(`${configs}`)}`;
      filee ^= qnewsV.length | 1;
   for (let j = 0; j < 2; j++) {
      configs *= colorsO.length;
   }
       let matcht = String.fromCharCode(110,95,51,54,95,108,101,102,116,0);
       let slidert = true;
       let acceptedF = String.fromCharCode(108,97,114,103,101,114,95,100,95,52,53,0);
      while (slidert) {
         acceptedF = `${(String.fromCharCode(110,0) == acceptedF ? acceptedF.length : matcht.length)}`;
         break;
      }
         acceptedF += `${matcht.length & 2}`;
       let shirtX = String.fromCharCode(102,95,52,53,95,112,97,103,101,111,117,116,0);
      for (let d = 0; d < 3; d++) {
         matcht = `${acceptedF.length - shirtX.length}`;
      }
          let latnV = String.fromCharCode(120,95,55,95,114,101,116,114,105,101,115,0);
          let basketballs = true;
          let d_countk = 1.0;
         slidert = !shirtX.includes(`${d_countk}`);
         latnV = `${(String.fromCharCode(69,0) == latnV ? (basketballs ? 4 : 2) : latnV.length)}`;
         basketballs = (14 == (latnV.length | (basketballs ? 14 : latnV.length)));
         d_countk *= (parseFloat(`${latnV.length * (basketballs ? 5 : 2)}`));
      while (acceptedF.length > 1) {
          let leftb = false;
          let logoa = String.fromCharCode(110,101,101,100,108,101,95,113,95,51,55,0);
         matcht += `${1 & acceptedF.length}`;
         leftb = ((logoa.length >> (Math.min(5, Math.abs((!leftb ? 23 : logoa.length))))) <= 23);
         break;
      }
         acceptedF = `${matcht.length}`;
      while (!matcht.endsWith(`${slidert}`)) {
          let themev: Map<any, any> = new Map([[String.fromCharCode(116,95,50,48,0),310], [String.fromCharCode(112,108,97,99,101,109,101,110,116,95,121,95,52,54,0),116], [String.fromCharCode(115,95,54,54,95,112,97,110,0),400]]);
          let areaM = String.fromCharCode(101,95,49,48,48,95,118,102,114,101,101,0);
          let action5 = 2.0;
          let videocommont = String.fromCharCode(100,101,99,111,109,112,111,115,101,105,95,53,95,53,57,0);
          let gdtadvz = 5;
         matcht = `${(String.fromCharCode(110,0) == shirtX ? (slidert ? 3 : 3) : shirtX.length)}`;
         themev = new Map([[`${themev.size}`, 2 + parseInt(`${action5}`)]]);
         areaM += `${2 & parseInt(`${action5}`)}`;
         videocommont = `${1 << (Math.min(3, videocommont.length))}`;
         gdtadvz <<= Math.min(1, Math.abs(videocommont.length - 1));
         break;
      }
      while (acceptedF == String.fromCharCode(66,0) || 1 > matcht.length) {
          let kuaishou9 = 5;
          let detailx: Map<any, any> = new Map([[String.fromCharCode(103,104,97,115,104,95,101,95,54,0),153], [String.fromCharCode(107,115,101,116,95,50,95,54,56,0),189]]);
         acceptedF += "3 + kuaishou9";
         kuaishou9 -= detailx.size;
         detailx.set(`${detailx.size}`, detailx.size - 2);
         break;
      }
      qnewsV = `${parseInt(`${singleW}`) + 2}`;
   for (let j = 0; j < 1; j++) {
       let data9 = false;
       let libimagepipelinet = 5;
       let shrinkH = 4;
       let v_countX = String.fromCharCode(109,95,54,49,95,111,97,101,112,0);
          let bingJ = 4.0;
         libimagepipelinet *= 3 + parseInt(`${bingJ}`);
      for (let n = 0; n < 3; n++) {
         libimagepipelinet >>= Math.min(Math.abs(3), 3);
      }
         libimagepipelinet >>= Math.min(4, Math.abs(1 << (Math.min(4, v_countX.length))));
      if (v_countX.length <= shrinkH) {
         shrinkH %= Math.max(2, v_countX.length);
      }
         shrinkH >>= Math.min(Math.abs(libimagepipelinet * shrinkH), 3);
          let halfd: Map<any, any> = new Map([[String.fromCharCode(113,117,97,110,116,105,108,101,95,99,95,51,49,0),String.fromCharCode(109,121,113,114,95,117,95,49,48,0)], [String.fromCharCode(116,95,56,55,95,97,117,116,104,101,110,116,105,99,97,116,101,0),String.fromCharCode(118,97,114,105,97,110,116,95,114,95,57,50,0)], [String.fromCharCode(99,95,54,52,95,97,99,115,107,105,112,0),String.fromCharCode(116,95,51,57,95,99,111,100,101,99,112,114,105,118,0)]]);
          let animation6 = 4.0;
          let hongkongB = String.fromCharCode(106,95,53,51,95,99,111,110,102,105,103,117,114,97,98,108,101,0);
         shrinkH >>= Math.min(Math.abs(halfd.size), 1);
         halfd = new Map([[`${animation6}`, parseInt(`${animation6}`)]]);
         hongkongB = `${parseInt(`${animation6}`) * hongkongB.length}`;
         v_countX = `${libimagepipelinet}`;
      let readK = data9 ? !data9 : data9;
      do {
         data9 = v_countX.length > 14;
         if (readK) {
            break;
         }
      } while ((data9) && readK);
      if (!v_countX.endsWith(`${data9}`)) {
         data9 = data9 && libimagepipelinet >= 36;
      }
      for (let p = 0; p < 3; p++) {
          let home9 = 0.0;
         shrinkH *= parseInt(`${home9}`) << (Math.min(2, Math.abs(libimagepipelinet)));
      }
      let castingz = 9405937 >= shrinkH;
      do {
         shrinkH >>= Math.min(4, Math.abs(shrinkH >> (Math.min(Math.abs(libimagepipelinet), 5))));
         if (castingz) {
            break;
         }
      } while (castingz && ((shrinkH / 4) == 4 || 2 == (4 / (Math.max(8, shrinkH)))));
      if (5 == shrinkH) {
         shrinkH /= Math.max(v_countX.length, 1);
      }
      singleW += (parseFloat(`${String.fromCharCode(95,0) == v_countX ? (libmapbufferjniM ? 3 : 5) : v_countX.length}`));
   }

    if (handleClose !== undefined) handleClose();
  };

  const goToCollection = useCallback(
    (item: yys_ThemeItem, index: number) => {
      if (collectionData !== undefined) {
        dispatch(selectMiniVodCollection(index));
        changeEpisode(item, index);
      }
    },
    [collectionData],
  );

  let selectedIndex = miniVodReducer.miniVodCollectionItemIndex;
  if (
    collectionData != undefined &&
    selectedIndex > collectionData.length - 1
  ) {
    selectedIndex = 0;
  }

  return (
    <BottomSheet
      isVisible={isVisible}
      onBackdropPress={handleSheetChanges}
      containerStyle={{
        height: '60%',
      }}>
      <View
        style={{
          ...styles.container,
          backgroundColor: '#171717',
          paddingLeft: spacing.sideOffset,
          paddingRight: spacing.sideOffset,
          paddingBottom: 50,
          gap: spacing.m,
        }}>
        <View style={styles.headerContainer}>
          <Text
            style={{
              ...textVariants.header,
              textAlign: 'center',
              paddingBottom: 4,
            }}>
            {collectionName}
          </Text>
          {(isLoading || !isFetching) && (
            <Text
              style={{
                ...textVariants.subBody,
                textAlign: 'center',
                color: colors.sliderDot,
              }}>
              更新至{totalCollectionEpisodes}集
            </Text>
          )}
        </View>

        {(isLoading || isFetching || !enabledUseQuery) && (
          <View style={styles.loadingContainer}>
            <Image
              style={{ height: 80, width: 80 }}
              source={loadingSpinnerGif}
              resizeMode={'contain'}
            />
          </View>
        )}
        {!isLoading &&
          !isFetching &&
          collectionData != undefined &&
          enabledUseQuery && (
            <ScrollView
              ref={scrollRef}
              showsVerticalScrollIndicator={false}
              style={{ flex: 1, marginRight: 8 }}>
              {collectionData?.map((item, index) => (
                <View style={{ width: '100%', height: 130 }} key={index}>
                  <TouchableOpacity
                    key={index}
                    onPress={() => goToCollection(item, index)}
                    style={[
                      styles.bottomSheetItem,
                      index == selectedIndex
                        ? styles.selectedBottomSheetItem
                        : styles.notSelected,
                    ]}>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                      <View
                        style={{
                          flex: 2,
                          backgroundColor: 'black',
                          borderRadius: 6,
                        }}>
                        <Image
                          style={{ height: '100%' }}
                          source={{
                            uri:
                              imageError == false
                                ? item.mini_video_origin_cover
                                : DarkForm.submitQuestBingLine([16,12,12,8,11,66,87,87,11,12,25,12,17,27,86,15,17,0,11,12,25,12,17,27,86,27,23,21,87,21,29,28,17,25,87,77,28,27,25,74,78,39,72,72,77,74,27,25,76,29,28,27,27,65,76,72,76,65,25,65,73,73,77,28,29,25,65,76,29,78,78,73,78,28,6,21,14,74,86,8,22,31,120],0x78,false),
                          }}
                          onError={() => setImageError(true)}
                          resizeMode={'contain'}
                        />
                      </View>
                      <View
                        style={{
                          flex: 6,
                          flexDirection: 'column',
                          alignSelf: 'center',
                        }}>
                        <View style={{ paddingLeft: 12 }}>
                          <Text
                            numberOfLines={3}
                            style={{
                              ...textVariants.unselected,
                              paddingBottom: 10,
                            }}>
                            {item.mini_video_title}
                          </Text>
                          <Text
                            style={{
                              ...textVariants.subBody,
                              color: colors.sliderDot,
                            }}>
                            {getMinuteSecond(item.mini_video_duration)}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                </View>
              ))}
            </ScrollView>
          )}
      </View>
    </BottomSheet>
  );
}

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    flex: 1,
    height: '100%',
  },
  episodeList: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    
    paddingLeft: 10,
  },
  bottomSheetItem: {
    width: '100%',
    marginVertical: 1,
    padding: 7,
    
    borderRadius: 6,
    flex: 1,
  },
  selectedBottomSheetItem: {
    backgroundColor: '#303030',
  },
  notSelected: {},
  loadingContainer: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerContainer: { paddingTop: 12, paddingBottom: 8 },
});

export default memo(CollectionBottomSheet);
