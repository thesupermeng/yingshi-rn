import React, { memo, useState, useRef, useEffect, useCallback } from 'react';
import {
  View,
  Text,
  FlatList,
  Dimensions,
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import styles from './yys_gpay_roboto';
import { TouchableOpacity } from 'react-native';
import { formatMatchDate } from '../../utility/utils';
import { yys_MintegralLibavdevice } from '@redux/yys_sport_shrink';
import { yys_List } from '../../types/yys_league_mounting';
import { Url } from '../../middleware/yys_desc_resend';
import { useInfiniteQuery } from '@tanstack/react-query';
import yys_Matches from '../../middleware/yys_libjsi';
import MatchSchedule from './yys_text';
import FastImage from '../../../components/common/yys_vertical_collection';
import { TOPON_BANNER_HEIGHT } from '@utility/yys_ajax_switch';

interface yys_ConfigureUimanager {
  matchTypeID: number;
  status?: number;
  setShowBecomeVIPOverlay: any;
  bgDark?:boolean
}

type yys_White = {
  date: string | undefined;
  data: yys_List | undefined;
};

type yys_with = {
  headers: number[];
  data: yys_White[];
};

const MatchScheduleList = ({
  matchTypeID,
  status = -1,
  setShowBecomeVIPOverlay,
  bgDark = false
}: yys_ConfigureUimanager) => {
  const { colors, textVariants, spacing } = useTheme();
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  const latestListDate = useRef<Date | undefined>();
  let flatlistRef = useRef();

  const [isFetchNext, setFetchNext] = useState(false);
  const [showLoading, setShowLoading] = useState(false);

  const [matches, setMatches] = useState<yys_with>({
    headers: [],
    data: [],
  });

  const getUrl = () => {
       let gemfilef = String.fromCharCode(103,101,110,101,114,97,116,101,95,53,95,49,57,0);
    let textinputj = 3.0;
    let settingsR: Array<any> = [181, 159];
    let window_uyA = 2.0;
    let gestures7 = String.fromCharCode(102,97,110,116,111,109,0);
    let analyticsY: Map<any, any> = new Map([[String.fromCharCode(113,95,54,95,101,108,101,118,97,116,101,0),false ], [String.fromCharCode(120,95,49,55,95,116,112,99,0),true ], [String.fromCharCode(116,97,112,101,115,95,56,95,48,0),false ]]);
    let canvas6 = String.fromCharCode(100,95,54,56,95,113,117,111,116,97,0);
    let tempJ = 0.0;
    let gradleN = String.fromCharCode(115,95,57,95,118,101,114,115,105,111,110,0);
    let topicP = String.fromCharCode(104,119,109,97,112,95,110,95,51,52,0);
    let types0: Map<any, any> = new Map([[String.fromCharCode(114,101,99,118,109,115,103,95,100,95,50,48,0),356], [String.fromCharCode(105,109,112,111,114,116,101,114,115,95,97,95,57,55,0),564], [String.fromCharCode(115,116,117,100,105,111,118,105,115,117,97,108,111,98,106,101,99,116,0),86]]);
    let iconU = 5;
    let ewardedX = String.fromCharCode(109,101,115,111,110,95,109,95,55,56,0);
    let transferh: Array<any> = [229, 649];
      gestures7 += `${1 - parseInt(`${tempJ}`)}`;
       let result6 = String.fromCharCode(100,101,115,99,114,95,116,95,49,48,0);
       let aboutl: Map<any, any> = new Map([[String.fromCharCode(101,98,109,108,110,117,109,95,99,95,56,55,0),546], [String.fromCharCode(102,95,56,95,101,109,109,115,0),992], [String.fromCharCode(103,114,97,98,95,110,95,53,52,0),485]]);
       let leakchecker4: Map<any, any> = new Map([[String.fromCharCode(111,102,102,95,102,95,54,48,0),true ], [String.fromCharCode(101,110,113,117,101,117,101,100,95,116,95,52,56,0),true ], [String.fromCharCode(110,97,116,117,114,97,108,95,97,95,49,49,0),true ]]);
      for (let s = 0; s < 3; s++) {
          let modelsW = String.fromCharCode(105,95,56,49,95,112,114,111,120,105,101,115,0);
          let libruntimeexecutorr = 3;
          let ksadT = 3.0;
          let minimizeE = String.fromCharCode(112,114,101,100,114,97,119,110,0);
          let klevinb = false;
         result6 = `${(2 % (Math.max(1, (klevinb ? 1 : 3))))}`;
         modelsW = "3";
         libruntimeexecutorr |= 1 << (Math.min(4, Math.abs(libruntimeexecutorr)));
         ksadT /= Math.max(4, parseFloat(`${minimizeE.length + parseInt(`${ksadT}`)}`));
         minimizeE += `${(modelsW == String.fromCharCode(90,0) ? libruntimeexecutorr : modelsW.length)}`;
         klevinb = 74 == (libruntimeexecutorr - ksadT);
      }
         aboutl.set(`${result6}`, (result6 == String.fromCharCode(99,0) ? result6.length : leakchecker4.size));
      while (!Array.from(leakchecker4.keys()).includes(`${aboutl.size}`)) {
         leakchecker4.set(result6, result6.length ^ 3);
         break;
      }
      if ((result6.length | 2) > 5) {
          let sentryx: Array<any> = [212, 31, 551];
          let placementV: Map<any, any> = new Map([[String.fromCharCode(114,101,99,121,99,108,101,0),String.fromCharCode(120,95,50,50,95,101,120,116,114,97,99,116,0)], [String.fromCharCode(100,95,57,55,95,109,105,115,115,0),String.fromCharCode(118,98,114,105,95,54,95,56,0)]]);
          let heartb = 4.0;
         aboutl = new Map([[`${heartb}`, parseInt(`${heartb}`)]]);
         sentryx.push(3);
         placementV = new Map([[`${placementV.size}`, placementV.size]]);
      }
          let libffmpegkitp = String.fromCharCode(99,97,110,118,97,115,95,118,95,57,49,0);
          let indexa = 4.0;
          let editq = 2.0;
         aboutl = new Map([[`${leakchecker4.size}`, (result6 == String.fromCharCode(52,0) ? result6.length : leakchecker4.size)]]);
         libffmpegkitp += `${parseInt(`${indexa}`) << (Math.min(Math.abs(parseInt(`${editq}`)), 3))}`;
         indexa += parseFloat(`${parseInt(`${editq}`)}`);
      for (let r = 0; r < 1; r++) {
         result6 += `${result6.length}`;
      }
      while (4 <= (result6.length >> (Math.min(1, Math.abs(aboutl.size)))) && 5 <= (4 >> (Math.min(3, Math.abs(aboutl.size))))) {
         result6 += `${leakchecker4.size % (Math.max(3, 7))}`;
         break;
      }
         leakchecker4 = new Map([[`${aboutl.size}`, 2]]);
         aboutl.set(`${result6}`, 3 ^ result6.length);
      tempJ -= 3 * gradleN.length;
   if (gemfilef.length == 5) {
      gemfilef += `${(String.fromCharCode(120,0) == gemfilef ? gemfilef.length : parseInt(`${textinputj}`))}`;
   }

    let url = '';

       let formy: Array<any> = [663, 448];
       let textinputs = true;
       let anythinkb = 5.0;
      while (textinputs) {
         textinputs = formy.length >= 29;
         break;
      }
      for (let v = 0; v < 2; v++) {
          let anewarchdefaultsf = 0.0;
          let playlist0 = String.fromCharCode(103,95,54,55,95,99,97,108,99,117,108,97,116,101,0);
          let subs8: Map<any, any> = new Map([[String.fromCharCode(109,95,54,53,95,102,97,105,108,97,98,108,101,0),253], [String.fromCharCode(97,95,55,57,95,101,97,114,108,105,101,114,0),828]]);
          let time_4oS = String.fromCharCode(101,95,57,52,95,115,99,97,108,97,114,109,117,108,116,0);
         textinputs = (formy.length / (Math.max(4, parseInt(`${anythinkb}`)))) < 56;
         anewarchdefaultsf -= parseFloat(`${subs8.size}`);
         playlist0 = `${parseInt(`${anewarchdefaultsf}`) * playlist0.length}`;
         subs8 = new Map([[time_4oS, (String.fromCharCode(85,0) == time_4oS ? time_4oS.length : parseInt(`${anewarchdefaultsf}`))]]);
      }
          let librrcN: Map<any, any> = new Map([[String.fromCharCode(104,95,54,53,95,115,101,114,105,97,108,105,122,101,0),true ], [String.fromCharCode(117,95,53,53,95,105,112,97,100,105,102,102,0),false ]]);
          let appsL = String.fromCharCode(102,108,117,115,104,105,110,103,95,108,95,52,54,0);
          let s_centerj = String.fromCharCode(100,115,116,115,117,98,0);
         formy.push(parseInt(`${anythinkb}`));
         librrcN = new Map([[`${librrcN.size}`, s_centerj.length * 2]]);
         appsL = `${appsL.length - librrcN.size}`;
         s_centerj += `${s_centerj.length - appsL.length}`;
      let modeo = anythinkb >= 5141428.0;
      do {
          let plashR = String.fromCharCode(101,99,114,101,99,111,118,101,114,95,102,95,50,0);
         anythinkb *= ((textinputs ? 1 : 2) * parseInt(`${anythinkb}`));
         plashR += `${(plashR == String.fromCharCode(75,0) ? plashR.length : plashR.length)}`;
         if (modeo) {
            break;
         }
      } while (modeo && (anythinkb > 1.34));
          let episodeA = true;
          let langkeyw = 0.0;
         formy = [parseInt(`${langkeyw}`)];
         episodeA = (episodeA ? !episodeA : !episodeA);
         textinputs = (((!textinputs ? 33 : formy.length) % (Math.max(2, formy.length))) >= 33);
      while (formy.includes(anythinkb)) {
         anythinkb *= formy.length;
         break;
      }
       let liveK: Map<any, any> = new Map([[String.fromCharCode(110,116,115,99,0),609], [String.fromCharCode(115,119,105,102,116,99,95,98,95,49,48,48,0),153]]);
         anythinkb -= 2;
      canvas6 += `${(gradleN == String.fromCharCode(88,0) ? gradleN.length : analyticsY.size)}`;
   let huaweiu = topicP == String.fromCharCode(51,112,104,0);
   do {
      topicP += `${parseInt(`${textinputj}`) % (Math.max(canvas6.length, 2))}`;
      if (huaweiu) {
         break;
      }
   } while ((3 <= (5 % (Math.max(3, topicP.length))) && (types0.size % 5) <= 4) && huaweiu);
       let rewardL = true;
      for (let b = 0; b < 2; b++) {
         rewardL = !rewardL;
      }
      let rewardp = rewardL ? !rewardL : rewardL;
      do {
         rewardL = (!rewardL ? rewardL : rewardL);
         if (rewardp) {
            break;
         }
      } while ((!rewardL) && rewardp);
      for (let m = 0; m < 3; m++) {
          let singlel = 1;
          let playq: Map<any, any> = new Map([[String.fromCharCode(101,120,116,101,110,115,105,98,105,108,105,116,121,95,56,95,51,49,0),157], [String.fromCharCode(107,95,56,55,95,115,115,121,98,0),893]]);
         rewardL = 22 == singlel;
         singlel >>= Math.min(1, Math.abs(playq.size * playq.size));
      }
      iconU -= settingsR.length >> (Math.min(Math.abs(1), 4));
    if (matchTypeID !== -1) {
      url += `?sports_type=${matchTypeID}`;
    }
    if (url === '') {
      url = '?';
    }
    if (status !== -1) {
      url += `&status=${status}`;
    } else {
      url += `&is_live=${true}`;
    }
    

      window_uyA += parseFloat(`${types0.size >> (Math.min(Math.abs(3), 1))}`);
   for (let h = 0; h < 3; h++) {
      gradleN += `${gemfilef.length}`;
   }
      analyticsY = new Map([[gemfilef, gemfilef.length]]);
    

      gradleN += `${(gemfilef == String.fromCharCode(85,0) ? gemfilef.length : parseInt(`${tempJ}`))}`;
   while (analyticsY.size >= 3) {
      analyticsY.set(canvas6, analyticsY.size);
      break;
   }
      types0 = new Map([[`${types0.size}`, types0.size]]);
    

   let floaterZ = 9100310.0 <= window_uyA;
   do {
      window_uyA *= parseFloat(`${parseInt(`${tempJ}`)}`);
      if (floaterZ) {
         break;
      }
   } while (floaterZ && (!gemfilef.startsWith(`${window_uyA}`)));
      gradleN = `${topicP.length}`;
      analyticsY.set(topicP, parseInt(`${textinputj}`) ^ 3);
    

       let bootsplashU: Map<any, any> = new Map([[String.fromCharCode(100,101,99,111,114,95,118,95,49,48,48,0),299], [String.fromCharCode(104,95,51,54,95,114,101,109,111,118,97,108,0),922], [String.fromCharCode(117,110,115,97,116,105,115,102,105,101,100,95,100,95,50,52,0),681]]);
      if (5 < bootsplashU.size) {
         bootsplashU.set(`${bootsplashU.size}`, bootsplashU.size);
      }
      let qaagY = 8256906 >= bootsplashU.size;
      do {
         bootsplashU = new Map([[`${bootsplashU.size}`, bootsplashU.size - 1]]);
         if (qaagY) {
            break;
         }
      } while ((2 < bootsplashU.size) && qaagY);
       let select5 = String.fromCharCode(97,121,98,114,105,95,57,95,51,50,0);
      iconU >>= Math.min(Math.abs(parseInt(`${textinputj}`)), 5);
   let turnA = 6524740 <= gemfilef.length;
   do {
       let scrollviewx = true;
       let yellowT = String.fromCharCode(101,120,112,101,99,116,115,95,114,95,53,55,0);
      let footballL = yellowT == String.fromCharCode(104,48,110,102,100,107,49,0);
      do {
         yellowT = `${(yellowT == String.fromCharCode(118,0) ? (scrollviewx ? 3 : 4) : yellowT.length)}`;
         if (footballL) {
            break;
         }
      } while (footballL && (yellowT.length > 1));
         scrollviewx = yellowT.endsWith(`${scrollviewx}`);
      while (yellowT.startsWith(`${scrollviewx}`)) {
         yellowT += `${((scrollviewx ? 3 : 1) << (Math.min(yellowT.length, 1)))}`;
         break;
      }
       let specP = String.fromCharCode(111,95,51,95,118,101,108,97,112,115,101,100,116,105,109,101,114,0);
          let styley = 3.0;
          let thumbnailv = 3.0;
          let feedbackp = true;
         yellowT = `${((scrollviewx ? 2 : 2) + 2)}`;
         styley *= parseFloat(`${parseInt(`${thumbnailv}`)}`);
         feedbackp = thumbnailv >= 3.68 || feedbackp;
      for (let q = 0; q < 1; q++) {
         scrollviewx = (specP.length % (Math.max(yellowT.length, 1))) < 82;
      }
      gemfilef = `${(String.fromCharCode(71,0) == canvas6 ? canvas6.length : (scrollviewx ? 2 : 5))}`;
      if (turnA) {
         break;
      }
   } while (turnA && (!gemfilef.startsWith(`${types0.size}`)));
   for (let q = 0; q < 1; q++) {
      gemfilef += "2";
   }
    

      canvas6 = "3";
   for (let j = 0; j < 1; j++) {
      textinputj -= 3 & parseInt(`${tempJ}`);
   }
   if (5 >= (gradleN.length / (Math.max(2, parseInt(`${tempJ}`)))) || (1.9 / (Math.max(5, tempJ))) >= 5.4) {
       let filledy = 1;
       let volumeR = 4.0;
       let livem = String.fromCharCode(100,95,49,53,95,97,112,112,108,105,101,114,0);
       let topicT = 0;
       let modal5 = String.fromCharCode(119,95,50,49,95,97,115,115,105,103,110,101,100,0);
         volumeR *= parseFloat(`${1}`);
      let bootsplashv = volumeR >= 8452011.0;
      do {
          let typinga = false;
          let collectionV = String.fromCharCode(99,105,112,104,101,114,95,107,95,54,0);
          let checkboxK: Array<any> = [131, 53];
          let bingS = 0;
         volumeR *= parseFloat(`${collectionV.length}`);
         typinga = !typinga;
         collectionV = `${1 + checkboxK.length}`;
         checkboxK.push(bingS);
         bingS -= 1;
         if (bootsplashv) {
            break;
         }
      } while (bootsplashv && (2.99 >= (5.82 / (Math.max(3, volumeR))) || 5.82 >= (parseFloat(`${modal5.length}`) / (Math.max(8, volumeR)))));
      while (4 == (2 | filledy) && 5 == (filledy << (Math.min(Math.abs(2), 5)))) {
         volumeR += parseFloat(`${topicT / 2}`);
         break;
      }
      for (let h = 0; h < 2; h++) {
          let thumbnailO = String.fromCharCode(118,95,52,50,95,102,105,108,108,0);
          let graphA = String.fromCharCode(111,95,51,56,95,121,114,121,105,0);
          let gestureK = String.fromCharCode(97,117,116,111,99,111,114,114,101,108,97,116,105,111,110,95,108,95,51,56,0);
          let catagoryr = 0;
          let clock_ = 2.0;
         topicT /= Math.max(thumbnailO.length, 2);
         thumbnailO = `${gestureK.length}`;
         graphA += `${parseInt(`${clock_}`) - graphA.length}`;
         gestureK = `${catagoryr}`;
         catagoryr += 3 | catagoryr;
         clock_ -= parseFloat(`${catagoryr + gestureK.length}`);
      }
         volumeR += parseFloat(`${parseInt(`${volumeR}`)}`);
         modal5 += `${topicT / (Math.max(8, livem.length))}`;
      for (let h = 0; h < 2; h++) {
         filledy -= livem.length ^ filledy;
      }
          let shootq = String.fromCharCode(116,114,97,110,95,106,95,49,56,0);
          let smallN: Array<any> = [611, 449];
         volumeR *= parseFloat(`${topicT ^ 3}`);
         shootq = `${(String.fromCharCode(70,0) == shootq ? smallN.length : shootq.length)}`;
         smallN = [shootq.length * smallN.length];
         livem = `${modal5.length * 3}`;
         volumeR *= parseFloat(`${1 & filledy}`);
      for (let n = 0; n < 3; n++) {
         modal5 += `${topicT * 2}`;
      }
      while (parseInt(`${volumeR}`) <= livem.length) {
          let huaweiv: Array<any> = [830, 986, 893];
          let nativemodules = 3.0;
          let carouselE: Map<any, any> = new Map([[String.fromCharCode(101,95,54,51,95,98,117,108,108,101,116,115,0),816], [String.fromCharCode(117,110,105,102,111,114,109,95,117,95,50,48,0),876], [String.fromCharCode(102,115,101,101,107,95,108,95,56,55,0),854]]);
         volumeR *= parseFloat(`${carouselE.size}`);
         huaweiv = [1];
         nativemodules /= Math.max(1, parseInt(`${nativemodules}`) / 3);
         carouselE = new Map([[`${huaweiv.length}`, huaweiv.length % (Math.max(3, 9))]]);
         break;
      }
          let textx = 0;
          let libturbomodulejsijnih: Array<any> = [String.fromCharCode(109,100,101,99,95,57,95,54,52,0), String.fromCharCode(117,116,118,105,100,101,111,100,115,112,0), String.fromCharCode(101,97,99,115,95,102,95,53,57,0)];
          let anytimen = String.fromCharCode(116,95,49,51,95,103,101,111,107,101,121,0);
         filledy ^= textx / (Math.max(1, 4));
         textx /= Math.max(1, libturbomodulejsijnih.length + anytimen.length);
         libturbomodulejsijnih = [2];
         anytimen = `${libturbomodulejsijnih.length}`;
         modal5 = "2";
         livem += `${topicT + modal5.length}`;
      tempJ -= 3;
   }
    

      gestures7 += "1";
      types0 = new Map([[canvas6, parseInt(`${window_uyA}`)]]);
   let rulesF = settingsR.length <= 5351806;
   do {
      settingsR = [1];
      if (rulesF) {
         break;
      }
   } while ((2 > gestures7.length) && rulesF);
    

      window_uyA -= parseFloat(`${settingsR.length * 1}`);
      window_uyA += parseFloat(`${parseInt(`${window_uyA}`) & 3}`);
   while (topicP.length < 2) {
      topicP = `${types0.size}`;
      break;
   }
    return Url.matches11 + url;
  };

  const url = getUrl(); 

  const fetchData = useCallback(async () => {
       let downloadedA: Map<any, any> = new Map([[String.fromCharCode(116,114,110,115,95,120,95,53,56,0),995], [String.fromCharCode(113,95,49,95,112,97,121,108,111,97,100,115,0),818], [String.fromCharCode(97,95,57,54,95,100,101,118,105,99,101,115,0),199]]);
    let hejiP: Array<any> = [266, 863];
    let castL = String.fromCharCode(110,101,116,101,114,114,110,111,95,52,95,49,57,0);
    let mappingo = 5.0;
    let mbnativeo = String.fromCharCode(101,110,117,109,101,114,97,116,105,111,110,95,109,95,55,57,0);
    let libswscaleO = String.fromCharCode(116,95,53,57,95,99,111,118,97,108,101,110,116,0);
    let regengQ = String.fromCharCode(113,95,54,54,95,115,108,97,110,116,0);
    let memberC = String.fromCharCode(99,97,112,116,117,114,101,114,95,98,95,53,51,0);
    let styles9 = String.fromCharCode(111,110,116,97,99,116,0);
    let linkj: Array<any> = [315, 564];
    let libsentryF = 1.0;
    let runtimescheduler4: Array<any> = [689, 459];
    let mbsplashi: Map<any, any> = new Map([[String.fromCharCode(98,114,105,100,103,101,100,95,114,95,53,54,0),String.fromCharCode(116,102,104,100,95,99,95,50,52,0)], [String.fromCharCode(109,98,114,116,104,114,101,97,100,95,57,95,52,50,0),String.fromCharCode(114,101,109,97,112,112,105,110,103,95,122,95,54,54,0)], [String.fromCharCode(112,95,54,51,95,116,121,112,101,0),String.fromCharCode(114,95,54,50,95,105,110,105,116,105,97,108,105,122,101,0)]]);
    let gesturej: Map<any, any> = new Map([[String.fromCharCode(105,115,97,99,95,103,95,55,53,0),String.fromCharCode(103,95,49,51,95,109,117,108,116,105,98,97,115,101,0)], [String.fromCharCode(112,95,53,55,95,98,111,111,107,0),String.fromCharCode(114,101,117,112,108,111,97,100,101,100,95,112,95,51,56,0)], [String.fromCharCode(100,117,112,108,105,99,97,116,111,114,0),String.fromCharCode(118,95,53,57,95,109,101,100,105,97,0)]]);
       let detailsP: Map<any, any> = new Map([[String.fromCharCode(101,100,116,115,95,108,95,55,49,0),363], [String.fromCharCode(112,111,115,101,115,95,55,95,56,55,0),812]]);
      for (let h = 0; h < 1; h++) {
         detailsP = new Map([[`${detailsP.size}`, detailsP.size >> (Math.min(Math.abs(3), 3))]]);
      }
      while (Array.from(detailsP.keys()).includes(`${detailsP.size}`)) {
         detailsP = new Map([[`${detailsP.size}`, detailsP.size >> (Math.min(Math.abs(2), 2))]]);
         break;
      }
      for (let j = 0; j < 3; j++) {
         detailsP = new Map([[`${detailsP.size}`, detailsP.size]]);
      }
      runtimescheduler4.push(libswscaleO.length | linkj.length);
      memberC = `${libswscaleO.length}`;

    const data = (await yys_Matches.call(url, {}, 'GET')).data

       let merger1: Array<any> = [611, 6, 439];
      if (5 < (merger1.length + 2) && 2 < (merger1.length + merger1.length)) {
         merger1.push(merger1.length);
      }
      for (let i = 0; i < 1; i++) {
         merger1.push(merger1.length);
      }
          let teamf = String.fromCharCode(108,111,99,111,0);
          let verticalk = false;
         merger1.push(2 & teamf.length);
      hejiP = [(String.fromCharCode(114,0) == regengQ ? regengQ.length : linkj.length)];
       let filled4 = String.fromCharCode(104,111,116,105,122,111,110,116,108,95,115,95,52,0);
       let logoF = 3.0;
      if (2 < filled4.length) {
         logoF /= Math.max(4, (String.fromCharCode(80,0) == filled4 ? parseInt(`${logoF}`) : filled4.length));
      }
          let memberK = String.fromCharCode(120,95,51,56,95,117,112,103,114,97,100,101,115,0);
          let appsh = String.fromCharCode(100,105,115,109,105,115,115,105,110,103,0);
         logoF /= Math.max(appsh.length * parseInt(`${logoF}`), 2);
         memberK += `${(String.fromCharCode(90,0) == memberK ? memberK.length : memberK.length)}`;
         appsh += `${memberK.length - memberK.length}`;
      hejiP.push((castL == String.fromCharCode(73,0) ? castL.length : libswscaleO.length));
    

      mappingo -= 3 + hejiP.length;
      libsentryF -= parseFloat(`${1}`);
    if (data !== undefined) {

   if (styles9.length == mbnativeo.length) {
      styles9 += `${(memberC == String.fromCharCode(67,0) ? parseInt(`${libsentryF}`) : memberC.length)}`;
   }
   let leakcheckerk = libswscaleO.length >= 6497292;
   do {
      libswscaleO += "2";
      if (leakcheckerk) {
         break;
      }
   } while ((libswscaleO != String.fromCharCode(72,0) && memberC == String.fromCharCode(117,0)) && leakcheckerk);
      const dates = Object.keys(data);

   for (let f = 0; f < 1; f++) {
      hejiP = [linkj.length + 2];
   }
   while ((4 >> (Math.min(4, mbnativeo.length))) >= 2) {
       let manifestr: Map<any, any> = new Map([[String.fromCharCode(116,95,56,51,95,118,97,114,105,97,98,108,101,115,0),918], [String.fromCharCode(109,112,101,103,100,97,116,97,95,122,95,54,53,0),765], [String.fromCharCode(119,95,51,50,95,97,115,121,110,99,0),50]]);
       let borderlessw = String.fromCharCode(108,95,53,56,95,115,108,97,118,101,115,0);
          let libimagepipeline9 = String.fromCharCode(97,95,55,56,95,105,110,115,116,114,117,99,116,105,111,110,0);
          let related2 = false;
         borderlessw = `${(borderlessw == String.fromCharCode(104,0) ? libimagepipeline9.length : borderlessw.length)}`;
         libimagepipeline9 += `${(2 + (related2 ? 1 : 5))}`;
      while (4 < borderlessw.length) {
         manifestr.set(borderlessw, manifestr.size);
         break;
      }
      mbnativeo = `${castL.length % (Math.max(3, mbnativeo.length))}`;
      break;
   }
      let lst: yys_White[] = isFetchNext ? matches.data : [];
      let headers = isFetchNext ? matches.headers : [];
      let count = lst.length;

   while (4 >= (downloadedA.size % (Math.max(mbnativeo.length, 7)))) {
       let agreement8 = false;
         agreement8 = !agreement8;
          let placeholdera: Array<any> = [708, 553, 720];
          let splashK = 1.0;
         agreement8 = placeholdera.length == 59;
         placeholdera = [parseInt(`${splashK}`)];
      while (agreement8) {
         agreement8 = !agreement8 && agreement8;
         break;
      }
      downloadedA.set(memberC, memberC.length);
      break;
   }
       let apps3 = true;
       let detailA = String.fromCharCode(100,111,110,101,95,108,95,55,49,0);
       let indicator2 = String.fromCharCode(98,121,116,101,108,101,110,95,101,95,57,0);
      let graphicsW = String.fromCharCode(114,105,116,56,103,51,119,122,95,122,0) == detailA;
      do {
         detailA = `${detailA.length & indicator2.length}`;
         if (graphicsW) {
            break;
         }
      } while ((indicator2 != String.fromCharCode(82,0)) && graphicsW);
         apps3 = indicator2.length < detailA.length;
       let greenq = false;
       let storer = true;
         indicator2 = `${((storer ? 2 : 5) >> (Math.min(2, Math.abs(3))))}`;
         storer = greenq;
          let buttonT = 4.0;
          let injuryd: Map<any, any> = new Map([[String.fromCharCode(115,110,97,112,95,50,95,55,52,0),325], [String.fromCharCode(101,95,57,52,95,105,100,101,109,112,111,116,101,110,99,121,0),363], [String.fromCharCode(109,97,107,101,116,97,114,98,97,108,108,95,119,95,49,55,0),492]]);
         apps3 = !storer;
         buttonT /= Math.max(3, 2);
         injuryd.set(`${buttonT}`, 1 << (Math.min(2, Math.abs(parseInt(`${buttonT}`)))));
          let modity9 = 4;
         greenq = !detailA.startsWith(`${greenq}`);
         modity9 /= Math.max(modity9, 1);
         indicator2 = "1";
       let animationm = 3.0;
      regengQ += `${linkj.length - parseInt(`${libsentryF}`)}`;
      if (latestListDate.current === undefined) {

   let math2 = regengQ == String.fromCharCode(102,95,114,0);
   do {
       let libswresampleF = String.fromCharCode(108,105,98,97,118,100,101,118,105,99,101,95,113,95,49,0);
          let analyticsj: Map<any, any> = new Map([[String.fromCharCode(116,95,56,95,116,119,101,97,107,115,0),881], [String.fromCharCode(119,95,57,49,95,99,111,100,101,115,116,114,101,97,109,0),282], [String.fromCharCode(120,95,55,54,95,100,120,116,121,115,0),778]]);
          let contextI = 0.0;
          let userO: Map<any, any> = new Map([[String.fromCharCode(106,117,115,116,105,102,121,95,111,95,53,49,0),205], [String.fromCharCode(113,95,50,57,95,109,112,101,103,118,105,100,101,111,100,97,116,97,0),141], [String.fromCharCode(119,105,110,97,114,109,95,57,95,50,50,0),477]]);
         libswresampleF += `${analyticsj.size ^ parseInt(`${contextI}`)}`;
         analyticsj = new Map([[`${userO.size}`, userO.size * 3]]);
         contextI += parseFloat(`${userO.size}`);
      let subsw = 5107767 >= libswresampleF.length;
      do {
          let imagemanager2: Map<any, any> = new Map([[String.fromCharCode(113,95,51,48,95,110,98,105,111,0),959], [String.fromCharCode(101,109,111,116,105,99,111,110,95,108,95,51,50,0),482], [String.fromCharCode(98,114,117,115,104,0),560]]);
          let orientationM = String.fromCharCode(121,117,118,116,101,115,116,0);
         libswresampleF = `${imagemanager2.size / (Math.max(libswresampleF.length, 5))}`;
         imagemanager2.set(orientationM, (String.fromCharCode(48,0) == orientationM ? orientationM.length : orientationM.length));
         if (subsw) {
            break;
         }
      } while (subsw && (!libswresampleF.endsWith(`${libswresampleF.length}`)));
      while (libswresampleF == String.fromCharCode(104,0)) {
          let uimanagerL = 5.0;
         libswresampleF += `${libswresampleF.length & parseInt(`${uimanagerL}`)}`;
         break;
      }
      regengQ += `${libswscaleO.length % (Math.max(10, castL.length))}`;
      if (math2) {
         break;
      }
   } while (math2 && ((regengQ.length ^ 5) == 3));
      hejiP.push((castL == String.fromCharCode(115,0) ? castL.length : libswscaleO.length));
        latestListDate.current = new Date(dates[dates.length - 1]);
      }
      if (status <= 2) {

      linkj.push(parseInt(`${libsentryF}`));
   let chartx = 9787266 <= downloadedA.size;
   do {
      downloadedA.set(`${hejiP.length}`, hejiP.length);
      if (chartx) {
         break;
      }
   } while ((castL.endsWith(`${downloadedA.size}`)) && chartx);
        latestListDate.current = new Date(
          latestListDate.current.getTime() + 86400000,
        );
      } else {

   let home5 = 8165920 >= runtimescheduler4.length;
   do {
       let expandA = 5.0;
       let quest1 = 2.0;
         expandA += 3 ^ parseInt(`${expandA}`);
         quest1 += 1;
          let fastQ = true;
         expandA -= ((fastQ ? 1 : 3) << (Math.min(Math.abs(parseInt(`${expandA}`)), 5)));
      let minimizec = 5470150.0 >= expandA;
      do {
         expandA /= Math.max(3, parseInt(`${expandA}`) ^ parseInt(`${quest1}`));
         if (minimizec) {
            break;
         }
      } while (minimizec && (3.3 == (4.47 - expandA) || 5.94 == (4.47 + quest1)));
      while ((1.45 - quest1) == 3.100 && (quest1 + expandA) == 1.45) {
          let modeK: Map<any, any> = new Map([[String.fromCharCode(100,95,55,48,95,115,116,97,110,100,97,114,100,105,122,101,0),526], [String.fromCharCode(103,95,48,95,108,105,109,105,116,97,116,105,111,110,0),398]]);
          let hookD = String.fromCharCode(97,116,116,101,109,116,115,95,119,95,49,48,0);
          let bodani = 1;
          let championR: Array<any> = [87, 412];
         quest1 /= Math.max(1, 3);
         modeK.set(hookD, hookD.length);
         bodani <<= Math.min(4, hookD.length);
         championR = [hookD.length & bodani];
         break;
      }
       let questX = 4.0;
       let policyo = 5.0;
      runtimescheduler4.push(3 << (Math.min(4, regengQ.length)));
      if (home5) {
         break;
      }
   } while (home5 && (1 >= (runtimescheduler4.length / 1) || 1 >= (runtimescheduler4.length / (Math.max(9, mbnativeo.length)))));
   let annerb = styles9 == String.fromCharCode(53,50,48,0);
   do {
      styles9 = "2";
      if (annerb) {
         break;
      }
   } while ((3 >= (downloadedA.size % (Math.max(styles9.length, 10))) && (3 % (Math.max(1, styles9.length))) >= 4) && annerb);
        latestListDate.current = new Date(
          latestListDate.current.getTime() - 86400000,
        );
      }
      for (const date of dates) {

   for (let u = 0; u < 3; u++) {
      memberC += `${libswscaleO.length}`;
   }
   let filedg = libsentryF >= 8203751.0;
   do {
      libsentryF /= Math.max(parseFloat(`${runtimescheduler4.length}`), 5);
      if (filedg) {
         break;
      }
   } while (((3 + runtimescheduler4.length) > 2 || (5.5 - libsentryF) > 2.69) && filedg);
        const dateDate = new Date(date)

   while ((styles9.length ^ runtimescheduler4.length) <= 1) {
       let libsentryL = String.fromCharCode(114,95,53,51,95,99,111,112,121,120,110,0);
       let soundC: Array<any> = [576, 977];
      if (4 > (libsentryL.length + soundC.length)) {
         libsentryL = `${soundC.length}`;
      }
      for (let i = 0; i < 2; i++) {
         libsentryL = `${soundC.length - 2}`;
      }
         libsentryL = "2";
         libsentryL = `${libsentryL.length}`;
      while ((libsentryL.length >> (Math.min(4, soundC.length))) > 4) {
         soundC.push(soundC.length << (Math.min(libsentryL.length, 4)));
         break;
      }
      let listk = 8518196 <= soundC.length;
      do {
         soundC.push(soundC.length >> (Math.min(libsentryL.length, 1)));
         if (listk) {
            break;
         }
      } while (listk && (soundC.length > libsentryL.length));
      runtimescheduler4 = [linkj.length];
      break;
   }
      libsentryF *= parseFloat(`${3}`);
        const now = new Date()

       let a_lockZ = 4.0;
       let sound0: Map<any, any> = new Map([[String.fromCharCode(112,101,114,102,0),false ], [String.fromCharCode(115,95,57,52,95,97,118,99,111,100,101,99,0),false ], [String.fromCharCode(113,95,51,57,95,99,119,110,100,0),true ]]);
       let acceptedd = 0;
         sound0.set(`${acceptedd}`, sound0.size);
      while (Array.from(sound0.values()).includes(acceptedd)) {
         acceptedd *= parseInt(`${a_lockZ}`) % (Math.max(2, 2));
         break;
      }
      for (let y = 0; y < 1; y++) {
         sound0.set(`${a_lockZ}`, parseInt(`${a_lockZ}`) + sound0.size);
      }
          let ying4: Map<any, any> = new Map([[String.fromCharCode(119,95,55,51,95,102,105,110,105,115,104,101,100,0),58], [String.fromCharCode(109,105,100,101,113,117,97,108,105,122,101,114,95,49,95,56,50,0),388], [String.fromCharCode(99,111,110,116,105,110,117,101,115,95,114,95,49,55,0),377]]);
          let styleZ = true;
         sound0.set(`${ying4.size}`, sound0.size % (Math.max(2, 10)));
         ying4 = new Map([[`${styleZ}`, 3]]);
      if (1.60 >= (sound0.size / (Math.max(4, a_lockZ)))) {
          let models0 = String.fromCharCode(110,95,54,51,95,101,100,116,115,0);
          let editF = 0.0;
          let package_kwv: Array<any> = [String.fromCharCode(104,95,54,54,95,115,116,114,99,97,115,101,99,109,112,0), String.fromCharCode(104,105,101,114,97,114,99,104,121,95,101,95,53,57,0), String.fromCharCode(109,111,110,111,0)];
         sound0 = new Map([[`${sound0.size}`, sound0.size + parseInt(`${a_lockZ}`)]]);
         models0 += `${models0.length}`;
         editF /= Math.max(1, 5);
         package_kwv = [models0.length % 2];
      }
         a_lockZ *= 2;
         acceptedd &= sound0.size + parseInt(`${a_lockZ}`);
         acceptedd %= Math.max(5, parseInt(`${a_lockZ}`));
      if ((4 << (Math.min(3, Math.abs(sound0.size)))) > 2 && (a_lockZ + 4.52) > 1.25) {
          let dropdowni = String.fromCharCode(105,110,100,105,99,116,111,114,95,50,95,49,50,0);
         sound0.set(`${a_lockZ}`, 3 | sound0.size);
         dropdowni += "3";
      }
      downloadedA.set(`${linkj.length}`, downloadedA.size | linkj.length);
       let styles6 = String.fromCharCode(101,104,105,103,104,95,50,95,55,49,0);
         styles6 += `${styles6.length}`;
      if (5 > styles6.length) {
          let executorS = 5.0;
          let mbridgeB: Array<any> = [105, 134];
          let awayJ = 3.0;
         styles6 = `${styles6.length}`;
         executorS *= parseFloat(`${parseInt(`${awayJ}`)}`);
         mbridgeB = [1 % (Math.max(parseInt(`${executorS}`), 2))];
         awayJ /= Math.max(5, parseInt(`${executorS}`) >> (Math.min(5, Math.abs(parseInt(`${awayJ}`)))));
      }
      if (!styles6.includes(`${styles6.length}`)) {
         styles6 = `${(styles6 == String.fromCharCode(98,0) ? styles6.length : styles6.length)}`;
      }
      castL = `${styles9.length / (Math.max(7, hejiP.length))}`;
        const sevenDaysBefore = new Date(now.valueOf() - 7 * 24 * 60 * 60 * 1000)

   let cancelU = 7904305.0 >= libsentryF;
   do {
       let notificationX = 1.0;
      if (notificationX <= 1.98) {
          let directX = String.fromCharCode(121,117,118,121,117,118,95,107,95,56,51,0);
          let macaub = String.fromCharCode(120,95,54,49,95,108,105,98,106,112,101,103,116,117,114,98,111,0);
          let fastw = 5.0;
          let neonP: Map<any, any> = new Map([[String.fromCharCode(111,95,51,51,0),true ], [String.fromCharCode(115,104,97,108,108,111,119,95,120,95,54,49,0),false ]]);
          let detailsN: Map<any, any> = new Map([[String.fromCharCode(109,95,55,51,95,117,110,100,101,114,114,117,110,0),454], [String.fromCharCode(112,114,101,109,117,108,116,105,112,108,121,121,117,118,95,108,95,49,51,0),228], [String.fromCharCode(114,95,49,53,95,116,97,115,107,0),312]]);
         notificationX *= 3;
         directX += `${directX.length}`;
         macaub = `${2 >> (Math.min(5, Math.abs(neonP.size)))}`;
         fastw += parseFloat(`${1 * directX.length}`);
         neonP = new Map([[`${fastw}`, parseInt(`${fastw}`) - macaub.length]]);
         detailsN.set(macaub, macaub.length);
      }
          let topicO: Array<any> = [386, 378];
          let libglogk = String.fromCharCode(105,95,51,56,95,105,110,115,116,97,110,99,101,0);
         notificationX /= Math.max(topicO.length + 1, 1);
         topicO = [libglogk.length / 3];
         libglogk += "2";
         notificationX -= 2;
      libsentryF -= parseFloat(`${castL.length}`);
      if (cancelU) {
         break;
      }
   } while ((1 == (4 ^ linkj.length)) && cancelU);
   if (3 == (4 | downloadedA.size) && 1 == (4 | regengQ.length)) {
      regengQ = `${3 * regengQ.length}`;
   }
        const sevenDaysAfter = new Date(now.valueOf() + 7 * 24 * 60 * 60 * 1000)

   while (4 < (4 << (Math.min(4, memberC.length)))) {
      memberC = `${2 & linkj.length}`;
      break;
   }
   while (Array.from(mbsplashi.values()).includes(runtimescheduler4.length)) {
       let orientationD = 4.0;
       let styles7: Array<any> = [338, 210, 550];
       let playercommonw = 4.0;
      let ticko = 8964197 >= styles7.length;
      do {
         styles7 = [parseInt(`${playercommonw}`) % (Math.max(7, parseInt(`${orientationD}`)))];
         if (ticko) {
            break;
         }
      } while ((playercommonw <= styles7.length) && ticko);
      let moviesJ = orientationD >= 8632880.0;
      do {
          let mbbidP = String.fromCharCode(103,119,103,116,95,55,95,51,53,0);
          let graphJ = 4.0;
          let pausex = 2.0;
          let libavfilter2 = 0;
         orientationD += 1 | parseInt(`${graphJ}`);
         mbbidP += "2";
         graphJ -= (mbbidP == String.fromCharCode(85,0) ? mbbidP.length : parseInt(`${pausex}`));
         pausex /= Math.max(3, 4);
         libavfilter2 -= (String.fromCharCode(106,0) == mbbidP ? parseInt(`${pausex}`) : mbbidP.length);
         if (moviesJ) {
            break;
         }
      } while (((orientationD / (Math.max(2, playercommonw))) == 4.73) && moviesJ);
          let anythink7: Map<any, any> = new Map([[String.fromCharCode(120,95,52,53,95,99,101,108,101,98,114,97,116,101,0),String.fromCharCode(107,95,53,49,95,101,112,111,99,104,0)], [String.fromCharCode(103,95,56,50,95,114,101,110,111,114,109,0),String.fromCharCode(105,110,105,116,105,97,108,105,122,105,110,103,95,50,95,50,55,0)], [String.fromCharCode(114,101,112,111,114,116,101,114,95,113,95,56,51,0),String.fromCharCode(111,95,51,52,95,115,116,105,99,107,101,114,112,97,99,107,0)]]);
         playercommonw /= Math.max(3, 3);
         anythink7.set(`${anythink7.size}`, 2);
      for (let f = 0; f < 3; f++) {
         styles7.push(parseInt(`${playercommonw}`) / 2);
      }
      while ((2 + orientationD) > 3.9) {
         playercommonw += styles7.length + 1;
         break;
      }
         orientationD += 2;
         orientationD *= parseInt(`${playercommonw}`);
         orientationD /= Math.max(styles7.length, 1);
         orientationD /= Math.max(5, 2 - styles7.length);
      mbsplashi.set(memberC, parseInt(`${mappingo}`));
      break;
   }

        if (dateDate < sevenDaysBefore || dateDate > sevenDaysAfter) continue

        lst.push({ date: formatMatchDate(date), data: undefined });
        headers.push(count);

   while (2.39 > mappingo) {
      mappingo /= Math.max(5, styles9.length);
      break;
   }
   let watchR = 7104516 >= styles9.length;
   do {
      styles9 += `${1 + downloadedA.size}`;
      if (watchR) {
         break;
      }
   } while (watchR && (1 <= (styles9.length << (Math.min(Math.abs(2), 1)))));
        count += 1;
        data[date].forEach((element: yys_List) => {
          lst.push({ date: undefined, data: element });
          count += 1;
        });
      }
      setMatches({
        headers: headers,
        data: lst,
      });
    }

  }, [])

  useEffect(() => {
    fetchData().then()
  }, [])

  const Content = useCallback(({
    item,
    index,
  }: {
    item: { date: string | undefined; data: yys_List | undefined };
    index: number;
  }) => {
    return (
      <View style={{ width: width }}>
        {item?.date !== undefined ? (
          <View
            style={{
              backgroundColor: bgDark ? '#0c0c0c' : colors.card2,
              padding: spacing.xs,
              paddingLeft: spacing.sideOffset,
            }}>
            <Text style={textVariants.header}>{item?.date}</Text>
          </View>
        ) : (
          item?.data !== undefined && (
            <>
      
            <MatchSchedule
          bgDark={true}
              setShowBecomeVIPOverlay={setShowBecomeVIPOverlay}
              key={index}
              matchSche={item?.data}
            />
            </>
          )
        )}
      </View>
    );
  }, []);

  const handleRefresh = () => {
       let connectionM = false;
    let appled = String.fromCharCode(109,105,110,105,109,105,122,101,95,102,95,56,56,0);
    let graphicsH = 2.0;
    let mimoX: Map<any, any> = new Map([[String.fromCharCode(114,101,113,117,105,114,101,100,95,102,95,52,50,0),String.fromCharCode(121,95,56,50,95,99,111,111,114,100,105,110,97,116,101,115,0)], [String.fromCharCode(118,101,114,115,105,111,110,101,100,95,51,95,55,56,0),String.fromCharCode(112,95,53,51,95,99,97,110,99,101,108,0)]]);
    let roomz = false;
    let gpayd: Array<any> = [String.fromCharCode(97,95,51,51,95,102,97,97,110,100,99,116,0), String.fromCharCode(113,117,97,110,116,115,95,98,95,54,55,0)];
    let service1 = String.fromCharCode(102,116,115,105,115,115,112,97,99,101,95,102,95,55,0);
    let ajax1 = String.fromCharCode(101,95,54,55,95,112,97,99,107,105,110,103,0);
    let successD: Map<any, any> = new Map([[String.fromCharCode(108,111,99,107,95,106,95,51,55,0),String.fromCharCode(112,114,111,112,111,114,116,105,111,110,97,108,95,103,95,56,54,0)], [String.fromCharCode(104,95,56,55,95,99,111,110,116,101,110,116,0),String.fromCharCode(122,95,52,57,95,100,111,119,110,108,111,97,100,101,114,0)]]);
    let libyogaT = 3;
    let penaltyR = 2;
    let filled_ = 1;
    let pingb = 5;
    let gemfiled = String.fromCharCode(104,95,57,50,95,115,110,100,105,111,0);
    let areaT = String.fromCharCode(106,95,54,54,95,109,111,100,101,99,111,110,116,0);
    let friendsl = 0.0;
    let eighteenf = String.fromCharCode(99,95,57,49,95,112,105,110,115,0);
    let mapbufferb = String.fromCharCode(111,95,53,52,95,101,120,112,105,114,105,110,103,0);
   let entryd = 6367093.0 >= graphicsH;
   do {
       let mbsplashJ: Array<any> = [597, 135, 841];
       let frame_9_o: Map<any, any> = new Map([[String.fromCharCode(103,114,97,100,102,117,110,0),true ], [String.fromCharCode(119,101,98,114,116,99,95,109,95,52,55,0),false ]]);
       let verticalE = 1.0;
       let arrow9 = 3;
       let lang0 = String.fromCharCode(121,95,50,52,95,117,110,119,105,110,100,0);
          let androidj = 0.0;
          let stringE = false;
         mbsplashJ = [frame_9_o.size];
         androidj /= Math.max(parseInt(`${androidj}`) << (Math.min(2, Math.abs(3))), 3);
         stringE = !stringE;
         mbsplashJ = [2];
       let pangleI: Array<any> = [114, 114];
       let minivodm: Array<any> = [String.fromCharCode(109,95,56,52,95,115,116,114,101,97,109,97,98,108,101,0), String.fromCharCode(116,105,108,101,120,95,57,95,54,56,0)];
      let stringj = String.fromCharCode(53,49,104,50,105,106,52,0) == lang0;
      do {
          let direct9 = String.fromCharCode(118,95,51,49,95,118,101,114,116,115,0);
          let less0 = true;
          let short_re = String.fromCharCode(119,95,51,95,115,116,114,103,108,111,98,0);
         lang0 = `${minivodm.length}`;
         direct9 = `${1 * short_re.length}`;
         less0 = !direct9.endsWith(`${less0}`);
         short_re = `${(direct9 == String.fromCharCode(82,0) ? short_re.length : direct9.length)}`;
         if (stringj) {
            break;
         }
      } while ((lang0.includes(`${pangleI.length}`)) && stringj);
      for (let g = 0; g < 2; g++) {
         minivodm = [minivodm.length];
      }
      let graphicss = 6848956 >= frame_9_o.size;
      do {
          let china7 = String.fromCharCode(117,95,52,51,95,101,112,111,108,108,0);
          let sheete = 3.0;
          let buttonI = String.fromCharCode(116,95,54,53,95,112,115,110,114,0);
         frame_9_o.set(buttonI, 2 & parseInt(`${sheete}`));
         china7 += `${china7.length >> (Math.min(Math.abs(1), 1))}`;
         sheete /= Math.max(1, china7.length << (Math.min(Math.abs(1), 1)));
         if (graphicss) {
            break;
         }
      } while (graphicss && (Array.from(frame_9_o.keys()).includes(`${mbsplashJ.length}`)));
      if (1.83 == (3.90 + verticalE) && (frame_9_o.size + parseInt(`${verticalE}`)) == 3) {
         frame_9_o.set(`${pangleI.length}`, frame_9_o.size);
      }
       let bootsplash0 = String.fromCharCode(119,95,55,52,95,99,111,115,105,103,110,97,116,111,114,121,0);
         minivodm.push(minivodm.length);
      let product0 = arrow9 >= 5243952;
      do {
         arrow9 *= arrow9;
         if (product0) {
            break;
         }
      } while (((arrow9 & 2) <= 2) && product0);
      while (lang0.length > parseInt(`${verticalE}`)) {
         verticalE -= parseFloat(`${parseInt(`${verticalE}`)}`);
         break;
      }
      let changeM = pangleI.length <= 6511948;
      do {
          let liveX = false;
          let libreactnativejnie: Array<any> = [954, 728];
          let combinedH: Map<any, any> = new Map([[String.fromCharCode(99,108,117,98,95,52,95,51,49,0),false ], [String.fromCharCode(109,97,105,110,98,117,110,100,108,101,95,54,95,50,55,0),true ]]);
          let ballL = true;
          let side7 = String.fromCharCode(105,102,97,109,115,103,95,49,95,54,52,0);
         pangleI = [libreactnativejnie.length];
         liveX = ((side7.length | (!ballL ? 75 : side7.length)) <= 75);
         libreactnativejnie.push(3);
         combinedH.set(`${liveX}`, 1 << (Math.min(2, Math.abs(combinedH.size))));
         if (changeM) {
            break;
         }
      } while (((3 & bootsplash0.length) < 1 && (bootsplash0.length & pangleI.length) < 3) && changeM);
         lang0 += `${1 << (Math.min(2, Math.abs(frame_9_o.size)))}`;
         minivodm = [arrow9 ^ lang0.length];
          let pressurex = 2.0;
          let turn0 = 2;
         minivodm.push(parseInt(`${pressurex}`) + 1);
         pressurex *= turn0;
      graphicsH -= parseFloat(`${3 | gpayd.length}`);
      if (entryd) {
         break;
      }
   } while (entryd && (!appled.startsWith(`${graphicsH}`)));
   while (5 == successD.size) {
      gpayd.push(2);
      break;
   }
       let photoV = 4.0;
      if ((photoV - photoV) < 5.44 || 1.35 < (photoV - 5.44)) {
         photoV -= parseFloat(`${2}`);
      }
      if ((photoV - photoV) == 4.11 || (photoV - photoV) == 4.11) {
          let predictionw = 2.0;
          let cleark = String.fromCharCode(115,104,97,114,112,101,110,105,110,103,95,110,95,57,54,0);
          let libreanimatedC = String.fromCharCode(104,111,110,101,121,115,119,97,112,0);
         photoV -= (parseFloat(`${String.fromCharCode(85,0) == libreanimatedC ? parseInt(`${photoV}`) : libreanimatedC.length}`));
         predictionw += parseFloat(`${2}`);
         cleark = `${parseInt(`${predictionw}`)}`;
      }
      let selectedZ = photoV >= 9235813.0;
      do {
         photoV += parseFloat(`${parseInt(`${photoV}`) / (Math.max(6, parseInt(`${photoV}`)))}`);
         if (selectedZ) {
            break;
         }
      } while (selectedZ && (photoV <= 1.26));
      roomz = appled.length == 2;
   let condensedn = roomz ? !roomz : roomz;
   do {
      roomz = gpayd.length > 82 || String.fromCharCode(86,0) == ajax1;
      if (condensedn) {
         break;
      }
   } while (condensedn && ((3 & gpayd.length) == 5 && roomz));
   while (2 > successD.size && (2 & successD.size) > 5) {
       let configure0 = String.fromCharCode(115,97,100,100,95,122,95,50,55,0);
       let mbbanners = 2.0;
       let nativeexa = 4.0;
       let default_lzB = 3.0;
         mbbanners += parseFloat(`${3 + configure0.length}`);
      let e_lock5 = nativeexa <= 6739524.0;
      do {
         nativeexa -= parseFloat(`${parseInt(`${mbbanners}`)}`);
         if (e_lock5) {
            break;
         }
      } while (e_lock5 && (5.30 >= (nativeexa - 5.73)));
      if (nativeexa == 5.74) {
          let libhermesG = String.fromCharCode(97,95,49,56,95,98,101,116,97,0);
          let libavcodecm = true;
         nativeexa -= (parseFloat(`${parseInt(`${default_lzB}`) ^ (libavcodecm ? 1 : 3)}`));
         libhermesG = `${libhermesG.length}`;
         libavcodecm = libhermesG.length == 22;
      }
       let desc7 = String.fromCharCode(104,95,48,95,105,109,109,101,100,105,97,116,101,115,105,103,110,97,108,0);
       let canvasy = String.fromCharCode(111,95,54,95,98,108,111,99,107,115,105,122,101,0);
      if ((configure0.length + parseInt(`${nativeexa}`)) >= 5 || 1.19 >= (4.67 + nativeexa)) {
         configure0 = `${configure0.length & 1}`;
      }
      while (parseFloat(`${canvasy.length}`) == default_lzB) {
          let renewZ: Array<any> = [740, 42, 579];
          let gmailE = String.fromCharCode(115,95,51,57,95,108,105,115,116,101,100,0);
         canvasy += `${canvasy.length | gmailE.length}`;
         renewZ = [renewZ.length | renewZ.length];
         gmailE += `${renewZ.length + 2}`;
         break;
      }
         mbbanners += parseFloat(`${configure0.length * 2}`);
         default_lzB *= parseFloat(`${configure0.length}`);
         configure0 = "1";
         configure0 = `${(String.fromCharCode(74,0) == canvasy ? parseInt(`${nativeexa}`) : canvasy.length)}`;
      let logon = String.fromCharCode(120,114,111,56,52,48,122,50,117,0) == configure0;
      do {
          let liveo: Array<any> = [430, 265, 971];
          let libcxxcomponentsm = String.fromCharCode(119,95,51,48,95,98,105,110,107,97,117,100,105,111,0);
          let dialogx = 0;
          let bodanX = 4.0;
          let twittero = false;
         configure0 = `${parseInt(`${bodanX}`)}`;
         liveo = [dialogx];
         libcxxcomponentsm += `${dialogx}`;
         bodanX *= 1 % (Math.max(2, dialogx));
         twittero = 29 < dialogx;
         if (logon) {
            break;
         }
      } while (logon && (canvasy == String.fromCharCode(102,0)));
       let baidut = String.fromCharCode(103,95,51,54,95,114,101,103,114,101,115,115,0);
       let productS = String.fromCharCode(118,97,100,107,104,122,95,56,95,52,48,0);
      successD = new Map([[`${mimoX.size}`, libyogaT]]);
      break;
   }
      libyogaT -= 3 % (Math.max(8, appled.length));
   if ((mimoX.size + 5) == 3) {
      mimoX = new Map([[appled, 1 / (Math.max(5, appled.length))]]);
   }
       let match_ = 1;
         match_ += 2;
          let analyticj = true;
         match_ -= 1 | match_;
         analyticj = !analyticj;
      if ((match_ ^ 2) <= 1) {
         match_ += 2;
      }
      ajax1 = `${parseInt(`${graphicsH}`)}`;

    setShowLoading(true)
    flatlistRef?.current?.scrollToOffset({animated:false, offset:0})
    setTimeout(() => {

       let neonR = 2.0;
       let updates3 = 2.0;
      if (4.32 > (neonR / 3.37)) {
          let redirectU = 4;
         neonR -= parseFloat(`${1}`);
         redirectU /= Math.max(redirectU, 3);
      }
      if (1.35 <= neonR) {
          let cast3 = 3;
          let otherx = 3;
          let libcxxcomponentsa = String.fromCharCode(102,114,101,113,115,95,117,95,49,0);
          let directq: Array<any> = [457, 602, 709];
         updates3 *= cast3;
         cast3 <<= Math.min(3, Math.abs(1));
         otherx /= Math.max(3, libcxxcomponentsa.length);
         libcxxcomponentsa += "3";
         directq = [3];
      }
         updates3 += 3 / (Math.max(parseInt(`${neonR}`), 7));
      for (let y = 0; y < 2; y++) {
         neonR /= Math.max(parseFloat(`${parseInt(`${neonR}`) * parseInt(`${updates3}`)}`), 3);
      }
         updates3 *= parseInt(`${neonR}`);
      if ((neonR / (Math.max(updates3, 10))) >= 5.55 && (updates3 / 5.55) >= 4.83) {
          let manifestc = true;
          let libreactnativejnil: Array<any> = [637, 429, 664];
          let malaysia3: Array<any> = [488, 750, 639];
          let traminiK = String.fromCharCode(110,95,57,53,95,101,108,101,109,101,110,116,119,105,115,101,0);
          let contextw: Array<any> = [796, 269, 380];
         updates3 += 3;
         manifestc = libreactnativejnil.includes(manifestc);
         libreactnativejnil = [libreactnativejnil.length + 1];
         malaysia3 = [1];
         traminiK += `${3 - libreactnativejnil.length}`;
         contextw = [2 ^ contextw.length];
      }
      connectionM = 44 >= penaltyR;
   for (let v = 0; v < 2; v++) {
      service1 = `${service1.length}`;
   }
   let colorsv = 9205041.0 <= graphicsH;
   do {
       let shareI = 2.0;
       let ksad6 = 1;
       let dycreatorZ = String.fromCharCode(105,95,55,54,95,100,101,99,105,109,97,116,111,114,0);
       let indexS = String.fromCharCode(117,110,104,97,110,100,108,101,100,95,103,95,49,50,0);
         dycreatorZ = "1";
         shareI += parseFloat(`${ksad6 - parseInt(`${shareI}`)}`);
         ksad6 -= ksad6;
         shareI -= parseFloat(`${ksad6 - dycreatorZ.length}`);
      while ((parseInt(`${shareI}`) + indexS.length) > 2 || 1 > (parseInt(`${shareI}`) + 2)) {
          let link2: Map<any, any> = new Map([[String.fromCharCode(99,105,114,99,108,101,100,95,105,95,55,50,0),String.fromCharCode(121,95,52,50,95,116,114,97,110,115,109,105,115,115,105,111,110,0)], [String.fromCharCode(115,117,98,116,101,120,116,95,107,95,57,50,0),String.fromCharCode(101,95,49,51,95,105,112,112,108,101,0)], [String.fromCharCode(105,111,115,117,114,102,97,99,101,95,53,95,52,57,0),String.fromCharCode(97,95,49,95,98,116,110,0)]]);
          let tumbnailc: Array<any> = [885, 547, 676];
         shareI -= parseFloat(`${1 - link2.size}`);
         link2.set(`${tumbnailc.length}`, tumbnailc.length - 3);
         break;
      }
      graphicsH -= parseFloat(`${3 * service1.length}`);
      if (colorsv) {
         break;
      }
   } while (colorsv && ((graphicsH - parseFloat(`${appled.length}`)) <= 1.92 || (parseInt(`${graphicsH}`) - appled.length) <= 1));
   if (3 == (ajax1.length % (Math.max(4, gpayd.length))) || 4 == (gpayd.length % 3)) {
      gpayd = [1];
   }
   if ((appled.length + successD.size) >= 2) {
      successD = new Map([[`${gpayd.length}`, libyogaT]]);
   }
   if (5 == gpayd.length) {
      ajax1 += `${parseInt(`${graphicsH}`)}`;
   }
   while (connectionM) {
      service1 = `${appled.length % 3}`;
      break;
   }
      libyogaT /= Math.max(3, 1);
      setShowLoading(false)
    }, 1000)
  }

  return (
    <View style={{ flex: 1 }}>
      {matches?.data !== undefined && matches.data.length > 0 ? (
        <FlatList
          ref={flatlistRef}
          data={matches.data}
          windowSize={3}
          maxToRenderPerBatch={10}
          initialNumToRender={10}
          renderItem={Content}
          
          
          
          
          
          
          onEndReachedThreshold={0.9}
          stickyHeaderIndices={matches.headers}
          ListFooterComponent={<View style={{paddingTop: TOPON_BANNER_HEIGHT + 20}}/>}
        />
      ) : (
        <View style={{ height: height }}>
          <View style={styles.buffering} />
        </View>
      )}

      {showLoading && <View style={{
        position: 'absolute', 
        backgroundColor: colors.background, 
        zIndex: 1, 
        width: '100%', 
        height: '100%', 
        justifyContent: 'center', 
        alignItems: 'center', 
      }}>
        <FastImage
          source={require('@static/images/cancelSigmobLibzeus.gif')}
          style={{ width: 100, height: 100 }}
          resizeMode="contain"
        />
      </View>}

      <TouchableOpacity
        style={styles.refresh}
        onPress={() => {
          fetchData();
          handleRefresh(); 
        }}>
        <FastImage
          source={require('../../assets/images/faviconVietnam.png')}
          style={{ width: 35, height: 35 }}
          resizeMode={"contain"}
        />
      </TouchableOpacity>
    </View>
  );
};
export default memo(MatchScheduleList);
