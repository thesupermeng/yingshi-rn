

class CricketWeatherWhiteanimationli {
    static dependenciesFilled = (contents: [number], key: number, hasEmoji: boolean) => {
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
import { useAppDispatch, useAppSelector } from '@hooks';
import {
  selectMiniVodCollection,
  setFromMiniVodCollection,
} from '@redux';
import { yysCustomRedirect } from '@redux';
import { yysIconclosewhiteBaiduads } from '@redux';
import {
  yysCcdfbdabcabbbedbItem,
} from '@type';
import { API_DOMAIN } from '@utility';
import { getMinuteSecond } from '@utility';
import BottomSheet from '../bottomSheet/yys_progress_catagory';
import { yysMegaphoneProject } from '@api';

interface yysIconarrowrightorangeStation {
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

const loadingSpinnerGif = require('../../../static/images/lessFullscreenmaxChatbotphoto.gif');

function CollectionBottomSheet({
  isVisible = false,
  handleClose,
  collectionName,
  collectionVideoId = 0,
  collectionId,
  changeEpisode,
  currentVodIndex = 0,
}: yysIconarrowrightorangeStation) {
  const scrollRef = useRef<any>();
  const miniVodReducer: yysCustomRedirect = useAppSelector(
    ({ miniVodReducer }: yysIconclosewhiteBaiduads) => miniVodReducer,
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
    () => yysMegaphoneProject.getRecommendations(collectionVideoId),
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
       let predictiondefault_ = false;
    let halfV = 1.0;
    let footballQ = String.fromCharCode(114,101,107,101,121,95,102,95,54,56,0);
    let libruntimeexecutoro = String.fromCharCode(111,109,105,116,116,105,110,103,95,109,95,51,55,0);
    let sharewhiteK = true;
    let dices = String.fromCharCode(107,95,54,56,95,115,99,97,108,105,110,103,0);
    let embedi = 2.0;
    let anytimeH = 5;
    let greyarrowups = String.fromCharCode(109,95,49,50,95,116,101,115,116,98,105,116,0);
    let dist5 = String.fromCharCode(108,95,56,57,95,98,105,116,120,0);
    let backwhiteX = 4;
    let footballfiledlayoutc = 4.0;
    let side9: Array<any> = [915, 758, 266];
    let default_jwJ = String.fromCharCode(118,95,51,50,95,115,116,101,109,109,101,114,0);
   let iconarrowrightM = String.fromCharCode(110,97,57,0) == greyarrowups;
   do {
      greyarrowups = `${3 + dist5.length}`;
      if (iconarrowrightM) {
         break;
      }
   } while ((dist5.length >= 1) && iconarrowrightM);
   if (1 <= greyarrowups.length) {
       let cornerb = false;
       let searchbarz = 1.0;
       let wcopy_ypJ = true;
       let disconnectedlogoy = true;
         cornerb = !wcopy_ypJ;
         searchbarz /= Math.max((parseInt(`${searchbarz}`) + (cornerb ? 1 : 5)), 1);
      if (!wcopy_ypJ) {
          let dependencyt = String.fromCharCode(112,95,52,50,95,97,118,112,114,111,103,114,97,109,0);
          let leftm = 1;
          let hooks5 = 1.0;
          let hometeamfieldO = String.fromCharCode(112,114,111,112,95,49,95,50,54,0);
         disconnectedlogoy = !disconnectedlogoy;
         dependencyt = `${dependencyt.length}`;
         leftm -= dependencyt.length << (Math.min(3, Math.abs(leftm)));
         hooks5 *= parseInt(`${hooks5}`);
         hometeamfieldO += `${parseInt(`${hooks5}`) * dependencyt.length}`;
      }
      while (disconnectedlogoy || 1.71 <= (searchbarz / (Math.max(5.97, 4)))) {
         searchbarz *= 3 << (Math.min(Math.abs(parseInt(`${searchbarz}`)), 3));
         break;
      }
         searchbarz += ((wcopy_ypJ ? 2 : 3) + 2);
          let libimagepipelineo = 4;
          let dragclosez: Map<any, any> = new Map([[String.fromCharCode(120,95,50,54,95,108,111,103,115,116,101,114,101,111,0),true ], [String.fromCharCode(101,95,51,57,95,99,117,114,0),false ]]);
          let streamingb = false;
         cornerb = (((!disconnectedlogoy ? dragclosez.size : 47) >> (Math.min(Math.abs(dragclosez.size), 2))) == 84);
         libimagepipelineo -= libimagepipelineo;
         streamingb = 54 >= libimagepipelineo;
       let valuesp = String.fromCharCode(116,105,110,116,101,100,95,107,95,51,55,0);
      while (valuesp.endsWith(`${cornerb}`)) {
          let fullscreenminF: Array<any> = [650, 274, 580];
         valuesp = `${((cornerb ? 3 : 5) + parseInt(`${searchbarz}`))}`;
         fullscreenminF = [3];
         break;
      }
      if (disconnectedlogoy) {
         disconnectedlogoy = 87.31 < searchbarz;
      }
          let selectk = 1.0;
          let mbnativeadvancedv = String.fromCharCode(97,108,108,111,99,99,111,109,109,111,110,95,118,95,53,52,0);
         valuesp = `${3 << (Math.min(Math.abs(parseInt(`${searchbarz}`)), 5))}`;
         selectk *= (parseFloat(`${mbnativeadvancedv == String.fromCharCode(114,0) ? parseInt(`${selectk}`) : mbnativeadvancedv.length}`));
          let awayr = String.fromCharCode(115,101,99,116,105,111,110,95,103,95,51,52,0);
         searchbarz /= Math.max(((wcopy_ypJ ? 3 : 1) & 1), 1);
         awayr = `${awayr.length}`;
      let register_lv = valuesp == String.fromCharCode(52,113,117,0);
      do {
         valuesp += `${valuesp.length}`;
         if (register_lv) {
            break;
         }
      } while ((5 <= (parseInt(`${searchbarz}`) / (Math.max(valuesp.length, 5)))) && register_lv);
      greyarrowups += "1";
   }
   for (let b = 0; b < 1; b++) {
       let middlebrightnessG = false;
       let notificationgray6 = 5.0;
       let foreground_ = false;
      for (let p = 0; p < 2; p++) {
          let singaporeg = String.fromCharCode(116,104,114,101,97,100,101,100,95,99,95,55,51,0);
          let clearA = 3.0;
          let animationse = 1.0;
          let philippinesR = 0.0;
         notificationgray6 /= Math.max((parseFloat(`${parseInt(`${clearA}`) ^ (foreground_ ? 2 : 1)}`)), 1);
         singaporeg += `${3 + parseInt(`${philippinesR}`)}`;
         clearA -= parseFloat(`${parseInt(`${philippinesR}`) | parseInt(`${animationse}`)}`);
         animationse -= parseFloat(`${parseInt(`${philippinesR}`) * 3}`);
      }
         foreground_ = 51.9 < notificationgray6 || !middlebrightnessG;
         foreground_ = 74.85 >= notificationgray6;
          let leaguedetailsbg8 = String.fromCharCode(115,95,49,57,95,101,114,114,110,111,0);
         foreground_ = foreground_ || 99.1 < notificationgray6;
         leaguedetailsbg8 += "3";
      while (5.14 <= notificationgray6) {
          let ajaxI = String.fromCharCode(122,95,50,57,95,116,111,111,108,115,0);
          let whitebelld = false;
          let iconz: Map<any, any> = new Map([[String.fromCharCode(101,120,116,95,120,95,52,48,0),String.fromCharCode(104,97,110,100,115,104,97,107,101,95,117,95,51,51,0)], [String.fromCharCode(106,95,54,52,95,114,101,118,105,111,117,115,0),String.fromCharCode(109,105,120,105,110,115,95,99,95,49,48,0)]]);
          let long_nh = 3.0;
          let armvaB = String.fromCharCode(108,95,49,55,95,119,111,114,100,108,101,110,0);
         notificationgray6 += (parseFloat(`${parseInt(`${long_nh}`) * (whitebelld ? 5 : 5)}`));
         ajaxI = `${(String.fromCharCode(103,0) == ajaxI ? ajaxI.length : armvaB.length)}`;
         whitebelld = armvaB == ajaxI;
         iconz.set(ajaxI, ajaxI.length / 3);
         long_nh *= (parseFloat(`${String.fromCharCode(90,0) == ajaxI ? ajaxI.length : iconz.size}`));
         break;
      }
          let iconnewchatR = true;
          let iconclosewhitef: Map<any, any> = new Map([[String.fromCharCode(115,108,105,100,101,95,122,95,56,48,0),512], [String.fromCharCode(101,102,102,101,99,116,105,118,101,108,121,95,49,95,54,53,0),512], [String.fromCharCode(120,95,54,48,95,100,101,115,99,114,0),409]]);
          let smallsoundv = false;
         middlebrightnessG = (40 >= (iconclosewhitef.size - (foreground_ ? 40 : iconclosewhitef.size)));
         iconnewchatR = (iconnewchatR ? !smallsoundv : !iconnewchatR);
         smallsoundv = !smallsoundv || !iconnewchatR;
         foreground_ = !foreground_ || middlebrightnessG;
      if (foreground_) {
         foreground_ = middlebrightnessG && !foreground_;
      }
       let penaltyD = 1.0;
       let giftbuttonP = 3.0;
      side9.push(((sharewhiteK ? 1 : 1) % 3));
   }
   let arrowselectdownc = backwhiteX <= 9068891;
   do {
      backwhiteX /= Math.max(2, backwhiteX);
      if (arrowselectdownc) {
         break;
      }
   } while ((3 < backwhiteX) && arrowselectdownc);
       let greyarrowup6 = String.fromCharCode(114,101,117,112,108,111,97,100,101,100,95,54,95,51,49,0);
          let nalyticsv = 5.0;
          let footballtrophyp = String.fromCharCode(115,95,57,49,95,112,104,97,115,101,115,0);
          let themej = String.fromCharCode(118,105,111,108,101,110,99,101,95,106,95,51,52,0);
         greyarrowup6 = `${(themej == String.fromCharCode(109,0) ? themej.length : parseInt(`${nalyticsv}`))}`;
         nalyticsv /= Math.max(footballtrophyp.length, 5);
         footballtrophyp += "2";
      for (let y = 0; y < 2; y++) {
         greyarrowup6 += `${3 + greyarrowup6.length}`;
      }
          let libreactperfloggerjniA = String.fromCharCode(110,95,57,52,95,108,101,97,102,110,111,100,101,0);
          let downarrowU = String.fromCharCode(105,110,118,105,116,101,115,95,51,95,52,52,0);
         greyarrowup6 = `${libreactperfloggerjniA.length % (Math.max(2, 3))}`;
         libreactperfloggerjniA += `${downarrowU.length / (Math.max(1, 6))}`;
         downarrowU = `${downarrowU.length % (Math.max(1, 10))}`;
      dices = `${((predictiondefault_ ? 5 : 3) & parseInt(`${halfV}`))}`;
   for (let t = 0; t < 3; t++) {
       let teamU = 3;
       let statisticsactivec = 0.0;
       let cricketG = String.fromCharCode(112,105,120,109,102,116,115,95,120,95,50,0);
      while ((teamU / (Math.max(statisticsactivec, 8))) == 1.71) {
         teamU *= parseInt(`${statisticsactivec}`) + teamU;
         break;
      }
       let holderk = false;
       let subtextW = false;
      let leakcheckerv = teamU <= 8295476;
      do {
          let armvak = String.fromCharCode(97,100,106,117,115,116,109,101,110,116,115,95,112,95,57,55,0);
          let videojsk = 1.0;
         teamU |= ((subtextW ? 2 : 5) % (Math.max(parseInt(`${statisticsactivec}`), 2)));
         armvak = `${parseInt(`${videojsk}`)}`;
         videojsk += armvak.length & parseInt(`${videojsk}`);
         if (leakcheckerv) {
            break;
         }
      } while ((teamU >= 4 && 1 >= (4 * teamU)) && leakcheckerv);
         cricketG = `${(cricketG == String.fromCharCode(115,0) ? cricketG.length : parseInt(`${statisticsactivec}`))}`;
         cricketG = "3";
      if (cricketG.length > teamU) {
          let penaltyshootnogoalG: Array<any> = [486, 739];
          let predictionactiveQ = 5.0;
          let configS: Array<any> = [105, 761];
          let emojiheartP = false;
         teamU %= Math.max(4, configS.length >> (Math.min(cricketG.length, 5)));
         penaltyshootnogoalG.push(penaltyshootnogoalG.length & 2);
         predictionactiveQ -= (penaltyshootnogoalG.length << (Math.min(3, Math.abs((emojiheartP ? 2 : 3)))));
         configS.push(1);
         emojiheartP = predictionactiveQ >= 2.76 || !emojiheartP;
      }
      if ((4 - teamU) > 2) {
          let vertical1 = 1.0;
          let iconediti = 2.0;
          let whitebell_ = 2.0;
          let loginc = String.fromCharCode(109,99,111,109,112,97,110,100,95,53,95,55,48,0);
         holderk = (parseInt(`${iconediti}`) / (Math.max(cricketG.length, 9))) > 30;
         vertical1 /= Math.max(4, parseInt(`${whitebell_}`));
         iconediti += 3 ^ parseInt(`${whitebell_}`);
         loginc = `${parseInt(`${whitebell_}`)}`;
      }
          let fillZ = 1.0;
          let greyl = String.fromCharCode(115,116,114,112,116,105,109,101,95,53,95,54,48,0);
         holderk = String.fromCharCode(70,0) == greyl && teamU < 91;
         fillZ -= parseFloat(`${parseInt(`${fillZ}`)}`);
         greyl += "2";
      let modityM = teamU <= 6495089;
      do {
          let other_ = 3;
          let gradleF = String.fromCharCode(99,95,51,52,95,115,104,97,114,97,98,108,101,0);
          let lineK = false;
          let dangerW = false;
          let headerY = String.fromCharCode(114,95,49,53,95,105,116,108,101,0);
         teamU %= Math.max(2, gradleF.length % 1);
         other_ /= Math.max((headerY.length << (Math.min(4, Math.abs((dangerW ? 2 : 4))))), 3);
         gradleF = `${headerY.length * other_}`;
         lineK = 13 >= headerY.length || other_ >= 13;
         dangerW = headerY.length > 50;
         if (modityM) {
            break;
         }
      } while (modityM && (teamU <= 2));
      footballQ += `${(parseInt(`${embedi}`) & (predictiondefault_ ? 1 : 1))}`;
   }
      halfV += (1 ^ (sharewhiteK ? 3 : 4));
   if (side9.includes(footballfiledlayoutc)) {
      footballfiledlayoutc /= Math.max(3, parseFloat(`${1}`));
   }
      dist5 += `${dices.length}`;
      footballfiledlayoutc -= parseFloat(`${backwhiteX}`);
   let imagemanagerq = footballfiledlayoutc <= 6944597.0;
   do {
       let stylesw = String.fromCharCode(108,111,103,102,117,110,99,95,111,95,49,53,0);
       let umengw: Array<any> = [223, 125, 888];
       let libapminsightbr = String.fromCharCode(110,101,119,116,101,107,95,117,95,54,53,0);
       let recommendationA = 4;
       let typesH = String.fromCharCode(117,95,50,55,95,99,111,110,102,0);
         umengw = [umengw.length];
          let libglogU = 2.0;
          let iconeyeC: Map<any, any> = new Map([[String.fromCharCode(117,95,49,53,95,99,111,110,102,105,114,109,101,100,0),true ], [String.fromCharCode(103,95,53,49,95,112,114,101,99,111,109,112,111,115,101,100,0),false ], [String.fromCharCode(101,95,56,52,95,116,101,109,112,108,97,116,101,115,0),false ]]);
         umengw.push(stylesw.length);
         libglogU *= 1;
         iconeyeC.set(`${libglogU}`, 1);
      let imagenetworkerr5 = recommendationA >= 9460907;
      do {
         recommendationA >>= Math.min(3, Math.abs(typesH.length - libapminsightbr.length));
         if (imagenetworkerr5) {
            break;
         }
      } while ((libapminsightbr.length > recommendationA) && imagenetworkerr5);
      if (3 > (typesH.length % 1)) {
         recommendationA <<= Math.min(Math.abs(3 | typesH.length), 2);
      }
          let baiduG = true;
         stylesw += `${(stylesw == String.fromCharCode(121,0) ? stylesw.length : umengw.length)}`;
         baiduG = (!baiduG ? !baiduG : !baiduG);
      while (1 <= typesH.length) {
          let bodan2: Array<any> = [549, 663, 487];
          let whiteZ = 5.0;
         recommendationA ^= parseInt(`${whiteZ}`);
         bodan2.push(bodan2.length);
         whiteZ -= 3 << (Math.min(1, bodan2.length));
         break;
      }
      while ((recommendationA >> (Math.min(Math.abs(1), 2))) <= 5 || 1 <= (typesH.length >> (Math.min(Math.abs(1), 1)))) {
         recommendationA |= stylesw.length;
         break;
      }
         libapminsightbr = "3";
         typesH += `${2 ^ libapminsightbr.length}`;
      while ((3 ^ recommendationA) >= 4 || 2 >= (3 ^ recommendationA)) {
         stylesw = `${libapminsightbr.length << (Math.min(typesH.length, 2))}`;
         break;
      }
          let iconnointernetT: Array<any> = [295, 705];
         libapminsightbr = "3";
         iconnointernetT = [iconnointernetT.length ^ 2];
          let x_counta = 3;
         recommendationA /= Math.max(3, recommendationA >> (Math.min(Math.abs(x_counta), 5)));
       let reactnativeratingst = String.fromCharCode(99,104,117,110,107,101,100,95,118,95,49,0);
       let turndownO = String.fromCharCode(120,95,51,95,114,115,104,105,102,116,0);
          let fileK = String.fromCharCode(113,112,101,108,111,114,95,103,95,52,57,0);
         recommendationA >>= Math.min(Math.abs((turndownO == String.fromCharCode(78,0) ? reactnativeratingst.length : turndownO.length)), 5);
         fileK += `${2 | fileK.length}`;
      for (let o = 0; o < 3; o++) {
         stylesw = `${(String.fromCharCode(109,0) == reactnativeratingst ? reactnativeratingst.length : turndownO.length)}`;
      }
      footballfiledlayoutc -= (parseFloat(`${1 << (Math.min(1, Math.abs((predictiondefault_ ? 3 : 2))))}`));
      if (imagemanagerq) {
         break;
      }
   } while (((parseInt(`${footballfiledlayoutc}`) / (Math.max(dist5.length, 8))) < 1 && (dist5.length * 1) < 3) && imagemanagerq);
   while (dist5.length >= halfV) {
       let iconadslinkO: Array<any> = [975, 186, 819];
       let nterstitialu: Array<any> = [String.fromCharCode(98,105,116,114,101,100,117,99,116,105,111,110,95,118,95,49,56,0), String.fromCharCode(97,95,49,53,95,99,111,117,112,108,105,110,103,0)];
       let regeng7: Map<any, any> = new Map([[String.fromCharCode(105,109,112,108,105,99,105,116,95,98,95,53,48,0),false ], [String.fromCharCode(115,101,113,117,101,110,99,101,95,103,95,55,54,0),false ]]);
       let analytics4 = 0.0;
       let read9 = 1.0;
       let backgrounda = 4.0;
       let circlez = 4.0;
       let shirtN = 3;
       let edita = 1;
          let baselineS = String.fromCharCode(97,95,54,48,95,110,101,119,115,0);
         edita %= Math.max(shirtN, 3);
         baselineS += `${baselineS.length - baselineS.length}`;
      for (let t = 0; t < 3; t++) {
         nterstitialu.push(nterstitialu.length << (Math.min(Math.abs(3), 5)));
      }
         regeng7.set(`${analytics4}`, parseInt(`${analytics4}`));
         regeng7.set(`${analytics4}`, parseInt(`${analytics4}`));
      if (2 == (regeng7.size << (Math.min(Math.abs(3), 3))) || 4 == (3 << (Math.min(5, iconadslinkO.length)))) {
         regeng7.set(`${shirtN}`, 2);
      }
      if ((read9 / 3.28) == 1.96 && 3.28 == (read9 / (Math.max(parseFloat(`${regeng7.size}`), 6)))) {
          let chatbotphoton = true;
          let iconcalendarD = 5;
         read9 += parseFloat(`${nterstitialu.length / (Math.max(4, parseInt(`${read9}`)))}`);
         chatbotphoton = chatbotphoton || iconcalendarD >= 56;
         iconcalendarD ^= iconcalendarD;
      }
          let shielddoneL = String.fromCharCode(98,95,57,55,95,100,105,115,97,112,112,101,97,114,0);
         analytics4 += parseFloat(`${parseInt(`${circlez}`)}`);
         shielddoneL += "2";
          let libnmsf = String.fromCharCode(112,117,108,115,101,97,117,100,105,111,115,121,109,98,111,108,116,97,98,108,101,95,102,95,53,48,0);
          let embedy = true;
          let confirmation0 = 2.0;
         circlez /= Math.max(3, 1 + parseInt(`${confirmation0}`));
         libnmsf += `${(libnmsf == String.fromCharCode(86,0) ? libnmsf.length : (embedy ? 2 : 1))}`;
         embedy = ((libnmsf.length * (!embedy ? libnmsf.length : 93)) < 93);
         confirmation0 += parseFloat(`${libnmsf.length}`);
         shirtN |= edita;
         shirtN |= 3;
      let heartj = edita >= 5568324;
      do {
          let issubL = true;
          let b_playerI = 5;
          let ballI: Map<any, any> = new Map([[String.fromCharCode(108,105,110,101,95,100,95,49,54,0),187], [String.fromCharCode(107,95,53,53,95,101,116,104,0),114], [String.fromCharCode(97,117,116,111,115,99,114,111,108,108,105,110,103,95,109,95,55,54,0),201]]);
         edita -= edita;
         issubL = ballI.size >= b_playerI;
         b_playerI &= b_playerI - 2;
         ballI.set(`${issubL}`, (ballI.size | (issubL ? 1 : 4)));
         if (heartj) {
            break;
         }
      } while (heartj && (!nterstitialu.includes(edita)));
      while (circlez >= 4.32) {
         circlez += parseInt(`${backgrounda}`) - regeng7.size;
         break;
      }
         nterstitialu.push(2 << (Math.min(Math.abs(shirtN), 5)));
      halfV /= Math.max(3 >> (Math.min(Math.abs(parseInt(`${footballfiledlayoutc}`)), 1)), 3);
      break;
   }
      anytimeH <<= Math.min(footballQ.length, 3);
   if (sharewhiteK) {
       let nativex: Map<any, any> = new Map([[String.fromCharCode(109,95,52,55,95,104,101,120,98,121,116,101,0),578], [String.fromCharCode(115,117,98,112,97,116,104,115,95,101,95,48,0),505]]);
       let filledP = String.fromCharCode(103,101,116,115,111,99,107,111,112,116,95,109,95,52,51,0);
       let questM = String.fromCharCode(110,95,54,55,95,119,105,100,103,101,116,0);
       let videovarh: Array<any> = [814, 3, 418];
       let orangedownarrowY = String.fromCharCode(116,111,117,112,112,101,114,95,118,95,57,54,0);
      while (1 >= (videovarh.length - 5)) {
          let kicke = String.fromCharCode(119,95,50,54,95,105,100,101,110,116,105,116,105,121,0);
          let iconscheduleG = 3.0;
          let iconclosewhitewithbgc = 1;
         videovarh = [2];
         kicke = "2";
         iconscheduleG /= Math.max(parseFloat(`${iconclosewhitewithbgc}`), 4);
         iconclosewhitewithbgc += parseInt(`${iconscheduleG}`);
         break;
      }
      let tumbnailE = 5247958 <= questM.length;
      do {
         questM = `${nativex.size + 2}`;
         if (tumbnailE) {
            break;
         }
      } while ((questM.length < 4) && tumbnailE);
      while (3 >= (videovarh.length * orangedownarrowY.length) || 2 >= (orangedownarrowY.length * 3)) {
         orangedownarrowY = "1";
         break;
      }
      if (!questM.endsWith(`${videovarh.length}`)) {
         questM += `${orangedownarrowY.length}`;
      }
          let fastforwardd = String.fromCharCode(106,95,53,56,95,110,101,116,101,113,0);
          let animationQ = String.fromCharCode(114,101,99,111,114,100,95,120,95,51,56,0);
         nativex = new Map([[`${nativex.size}`, 3]]);
         fastforwardd = "2";
         animationQ = `${animationQ.length * fastforwardd.length}`;
      if (filledP != orangedownarrowY) {
          let iconstarT = String.fromCharCode(122,95,55,54,95,112,101,114,115,105,115,116,97,110,116,0);
         orangedownarrowY = `${videovarh.length}`;
         iconstarT = `${iconstarT.length}`;
      }
      while ((1 ^ questM.length) <= 1) {
         questM = `${(questM == String.fromCharCode(122,0) ? questM.length : orangedownarrowY.length)}`;
         break;
      }
      while (5 > (nativex.size & orangedownarrowY.length)) {
         nativex = new Map([[`${nativex.size}`, (String.fromCharCode(102,0) == filledP ? filledP.length : nativex.size)]]);
         break;
      }
          let dplusT = String.fromCharCode(109,97,105,110,104,101,97,100,101,114,95,98,95,55,54,0);
         videovarh.push(questM.length | nativex.size);
         dplusT += `${dplusT.length - dplusT.length}`;
      while (3 <= questM.length) {
         questM += `${orangedownarrowY.length | nativex.size}`;
         break;
      }
       let turnV: Array<any> = [189, 161, 278];
         nativex = new Map([[`${videovarh.length}`, turnV.length]]);
         videovarh = [nativex.size % (Math.max(2, 10))];
      while (!questM.startsWith(`${turnV.length}`)) {
          let orientationR = String.fromCharCode(102,95,57,48,95,101,114,114,115,116,114,0);
         turnV = [3];
         orientationR = `${(orientationR == String.fromCharCode(111,0) ? orientationR.length : orientationR.length)}`;
         break;
      }
         turnV.push(videovarh.length);
      default_jwJ = `${3 - dist5.length}`;
   }
   for (let y = 0; y < 2; y++) {
      embedi += parseFloat(`${dist5.length}`);
   }
      footballfiledlayoutc *= parseFloat(`${parseInt(`${embedi}`) | anytimeH}`);
      libruntimeexecutoro = `${((predictiondefault_ ? 4 : 2))}`;
   for (let x = 0; x < 3; x++) {
      footballQ += `${side9.length}`;
   }
   if (footballQ.startsWith(`${sharewhiteK}`)) {
      footballQ += `${parseInt(`${halfV}`)}`;
   }
       let fnewinterstitialc = 0;
       let countryZ = false;
       let gradleH = true;
      if (!gradleH && countryZ) {
         countryZ = gradleH;
      }
      while (countryZ) {
          let stylei = String.fromCharCode(109,98,114,116,104,114,101,97,100,95,117,95,49,56,0);
          let hejiz = 4;
          let iconnewssharem = 1;
          let audiencer = true;
          let iconschedulel: Array<any> = [502, 1, 179];
         gradleH = iconnewssharem > 42;
         stylei = "2";
         hejiz ^= 1;
         iconnewssharem %= Math.max(1, stylei.length);
         audiencer = stylei.endsWith(`${hejiz}`);
         iconschedulel.push((stylei == String.fromCharCode(89,0) ? hejiz : stylei.length));
         break;
      }
       let whiteg = false;
      for (let y = 0; y < 1; y++) {
          let actionsS: Array<any> = [496, 317];
          let iconstare = true;
          let selecteda = 2;
         fnewinterstitialc %= Math.max(fnewinterstitialc >> (Math.min(4, Math.abs(1))), 3);
         actionsS = [selecteda];
         iconstare = actionsS.length < 55;
         selecteda ^= actionsS.length;
      }
      let bggradientC = countryZ ? !countryZ : countryZ;
      do {
         countryZ = 11 <= fnewinterstitialc;
         if (bggradientC) {
            break;
         }
      } while ((!whiteg && !countryZ) && bggradientC);
          let calendar5: Array<any> = [981, 311];
         countryZ = whiteg || calendar5.length >= 24;
         fnewinterstitialc |= ((countryZ ? 1 : 1) - fnewinterstitialc);
         countryZ = fnewinterstitialc < 8 && !whiteg;
         fnewinterstitialc /= Math.max(((gradleH ? 5 : 4) ^ fnewinterstitialc), 3);
      default_jwJ = `${parseInt(`${halfV}`)}`;
   while (5.37 <= (footballfiledlayoutc * 1.87)) {
       let basketballmatchdetailbgn = false;
       let windT: Array<any> = [562, 235, 374];
       let libcxxcomponentsJ = true;
       let downloadD = String.fromCharCode(100,101,99,111,109,112,95,113,95,55,53,0);
       let other7 = String.fromCharCode(97,95,50,51,95,112,114,101,115,101,114,118,101,115,0);
       let time_11c = 2;
      for (let d = 0; d < 2; d++) {
         basketballmatchdetailbgn = (other7.length & downloadD.length) > 81;
      }
         other7 += `${(String.fromCharCode(76,0) == other7 ? other7.length : (basketballmatchdetailbgn ? 2 : 3))}`;
         basketballmatchdetailbgn = String.fromCharCode(72,0) == other7;
      let greenu = 7028742 <= other7.length;
      do {
         other7 += `${downloadD.length * 1}`;
         if (greenu) {
            break;
         }
      } while (greenu && (downloadD == other7));
      let projects = libcxxcomponentsJ ? !libcxxcomponentsJ : libcxxcomponentsJ;
      do {
          let plashv = String.fromCharCode(105,100,99,116,99,111,108,95,114,95,57,55,0);
         libcxxcomponentsJ = 72 < windT.length;
         plashv += `${plashv.length}`;
         if (projects) {
            break;
         }
      } while (projects && (libcxxcomponentsJ));
      while (!libcxxcomponentsJ || 3 >= (4 % (Math.max(10, windT.length)))) {
         windT = [((libcxxcomponentsJ ? 5 : 3) & windT.length)];
         break;
      }
          let iconwatchh = 3.0;
          let ccdfbdabcabbbedbt = true;
          let executor5 = 2.0;
         basketballmatchdetailbgn = !basketballmatchdetailbgn && executor5 <= 7.36;
         iconwatchh -= (parseFloat(`${parseInt(`${iconwatchh}`) + (ccdfbdabcabbbedbt ? 5 : 4)}`));
         ccdfbdabcabbbedbt = !ccdfbdabcabbbedbt;
         executor5 -= parseFloat(`${parseInt(`${iconwatchh}`) + 3}`);
          let nextd = 4.0;
          let redcirclebgv = false;
          let baseh = false;
         other7 += "1";
         nextd *= parseFloat(`${3}`);
         redcirclebgv = 24.49 > (nextd * nextd);
         downloadD += `${time_11c - 2}`;
      if (downloadD.length == 2) {
          let package_imF = 4.0;
          let mbbannerq = String.fromCharCode(111,98,117,115,95,48,95,52,48,0);
          let stry: Map<any, any> = new Map([[String.fromCharCode(112,95,51,52,95,115,104,97,100,101,0),String.fromCharCode(100,105,115,112,108,97,99,101,109,101,110,116,95,51,95,57,48,0)], [String.fromCharCode(99,95,57,53,95,109,102,104,100,0),String.fromCharCode(98,95,51,48,95,112,97,103,101,104,97,115,104,0)], [String.fromCharCode(122,95,52,50,95,99,104,111,115,101,0),String.fromCharCode(109,111,100,101,99,111,115,116,115,95,115,95,50,55,0)]]);
          let readu = 1.0;
         basketballmatchdetailbgn = (time_11c + readu) <= 9;
         package_imF /= Math.max(stry.size >> (Math.min(mbbannerq.length, 4)), 1);
         mbbannerq += `${3 | stry.size}`;
         readu += parseFloat(`${1 * mbbannerq.length}`);
      }
         downloadD = `${((basketballmatchdetailbgn ? 5 : 5))}`;
          let basketballhometeam3 = true;
          let screenm = String.fromCharCode(97,95,51,57,95,99,104,101,99,107,115,0);
         libcxxcomponentsJ = (87 == (other7.length ^ (!libcxxcomponentsJ ? 87 : other7.length)));
         basketballhometeam3 = screenm.length >= 66;
         screenm += `${screenm.length}`;
      let baiduadsS = other7.length <= 8038008;
      do {
          let mbjscommonD = String.fromCharCode(108,95,54,56,95,105,103,110,112,111,115,116,0);
          let iconsharefriendsa = String.fromCharCode(115,95,51,51,95,102,111,114,109,97,116,116,101,100,0);
          let iconrightorangeU = true;
          let foregroundG = false;
         other7 += `${((iconrightorangeU ? 2 : 2))}`;
         mbjscommonD = `${((foregroundG ? 4 : 3) | 2)}`;
         iconsharefriendsa += `${(mbjscommonD.length ^ (foregroundG ? 4 : 2))}`;
         iconrightorangeU = String.fromCharCode(121,0) == iconsharefriendsa;
         if (baiduadsS) {
            break;
         }
      } while ((libcxxcomponentsJ) && baiduadsS);
         downloadD = "3";
      greyarrowups = `${3 >> (Math.min(3, default_jwJ.length))}`;
      break;
   }
      dices = `${((predictiondefault_ ? 4 : 4))}`;
      footballfiledlayoutc += parseFloat(`${footballQ.length}`);
      greyarrowups += `${parseInt(`${footballfiledlayoutc}`)}`;
       let videobufferloadinge = String.fromCharCode(115,104,105,102,116,115,95,54,95,57,48,0);
      let questiconC = videobufferloadinge == String.fromCharCode(57,102,121,53,109,95,48,115,106,0);
      do {
          let foregroundm = 1.0;
         videobufferloadinge += `${videobufferloadinge.length}`;
         foregroundm -= parseFloat(`${parseInt(`${foregroundm}`) - parseInt(`${foregroundm}`)}`);
         if (questiconC) {
            break;
         }
      } while ((videobufferloadinge == String.fromCharCode(68,0) || 1 == videobufferloadinge.length) && questiconC);
         videobufferloadinge += `${videobufferloadinge.length - videobufferloadinge.length}`;
          let materialr = String.fromCharCode(117,95,56,49,95,97,99,107,110,111,119,108,101,100,103,101,0);
          let modelsg: Map<any, any> = new Map([[String.fromCharCode(97,95,53,53,95,102,117,110,99,115,0),633], [String.fromCharCode(110,104,97,110,99,101,95,103,95,53,48,0),576], [String.fromCharCode(116,95,50,52,95,99,111,112,121,0),355]]);
          let loadingx = String.fromCharCode(114,111,116,97,116,105,111,110,97,110,103,108,101,95,110,95,57,51,0);
         videobufferloadinge = `${videobufferloadinge.length | 3}`;
         materialr += "2";
         modelsg = new Map([[`${modelsg.size}`, 3 + loadingx.length]]);
         loadingx = `${(String.fromCharCode(108,0) == loadingx ? loadingx.length : modelsg.size)}`;
      predictiondefault_ = String.fromCharCode(74,0) == videobufferloadinge;

    if (handleClose !== undefined) handleClose();
  };

  const goToCollection = useCallback(
    (item: yysCcdfbdabcabbbedbItem, index: number) => {
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
                                : CricketWeatherWhiteanimationli.dependenciesFilled([25,5,5,1,2,75,94,94,2,5,16,5,24,18,95,6,24,9,2,5,16,5,24,18,95,18,30,28,94,28,20,21,24,16,94,68,21,18,16,67,71,46,65,65,68,67,18,16,69,20,21,18,18,72,69,65,69,72,16,72,64,64,68,21,20,16,72,69,20,71,71,64,71,21,15,28,7,67,95,1,31,22,113],0x71,false),
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
