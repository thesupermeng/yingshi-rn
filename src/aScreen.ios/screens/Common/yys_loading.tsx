import { useCallback, useEffect, useMemo, useState } from 'react';
import * as React from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  Image,
  Linking,
} from 'react-native';
import ScreenContainer from '../../components/container/yys_matches';
import { useFocusEffect, useTheme } from '@react-navigation/native';

import { RootStackScreenProps } from '@type';
import {
  yysFullLibcrashsdk,
} from '@type';
import { playVod } from '@redux';
import { useAppDispatch } from '@hooks';
import {
  useInfiniteQuery,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import TitleWithBackButtonHeader from '../../components/header/yys_away_predictionloss_header';
import { API_DOMAIN, API_DOMAIN_TEST } from '@utility';
import VodTopicFilter from '../../components/vod/yys_yellowcirclebg_floater';
import VodCard from '../../components/vod/yys_private';
import { ArrowDownYellowSvg } from '@static';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { FlatListProps } from 'react-native/Libraries/Lists/FlatList';
import FastImage from '../../components/common/yys_alert_backwhite';
import appsFlyer from 'react-native-appsflyer';
import EmptyList from '../../components/common/yys_benefit';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { TabItem } from '@rneui/base/dist/Tab/yysUnimplementedview.Item';
import yys_giftbutton_footballtrophy from '../../../../Umeng/yys_giftbutton_footballtrophy';
import { yysInactive } from '@api';

interface yysBgvipsportUimanager {
  id: number;
  name: string;
}
interface Option {
  text: string;
  value: any;
}

const sameTextAndValueObj = (text: string): Option => {
  return {
    text: text,
    value: text,
  };
};

const translateToCN = (txt: string) => {
  if (txt === 'time') {
    return '新上线';
  }
  if (txt === 'score') {
    return '好评榜';
  }
  return '热播榜';
};

const ORDER_BY_OPTIONS: Array<Option> = [
  {
    text: '新上线',
    value: 'time',
  },
  {
    text: '热播榜',
    value: 'hits_day',
  },
  {
    text: '好评榜',
    value: 'score',
  },
];
export default ({ navigation, route }: RootStackScreenProps<'片库'>) => {
  const { textVariants, colors, spacing, icons } = useTheme();
  const insets = useSafeAreaInsets();
  const queryClient = useQueryClient();
  const SCROLL_THRESHOLD = 50;
  const dispatch = useAppDispatch();
  const { data: navOptions } = useQuery({
    queryKey: ['filterOptions'],
    queryFn: () => yysInactive.getTopicType(),
  });
  
  const [currentTopicId, setCurrentTopicId] = useState(
    route.params.type_id === undefined ? 1 : route.params.type_id,
  );
  const [topicClass, setTopicClass] = useState(
    route.params.class === undefined || route.params.class.startsWith('全部')
      ? sameTextAndValueObj('全部类型')
      : sameTextAndValueObj(route.params.class),
  );
  const [area, setArea] = useState(
    route.params.area === undefined || route.params.area.startsWith('全部')
      ? sameTextAndValueObj('全部地区')
      : sameTextAndValueObj(route.params.area),
  );
  const [lang, setLang] = useState(
    route.params.lang === undefined || route.params.lang.startsWith('全部')
      ? sameTextAndValueObj('全部语言')
      : sameTextAndValueObj(route.params.lang),
  );
  const [year, setYear] = useState(
    route.params.year === undefined || route.params.year.startsWith('全部')
      ? sameTextAndValueObj('全部时间')
      : sameTextAndValueObj(route.params.year),
  );
  const [orderBy, setOrderBy] = useState(
    route.params.order_by === undefined
      ? {
        text: '热播榜',
        value: 'hits_day',
      }
      : {
        text: translateToCN(route.params.order_by),
        value: route.params.order_by,
      },
  );

  
  
  const windowDim = useMemo(
    () =>
      Dimensions.get('window').width -
      insets.left -
      insets.right -
      spacing.sideOffset * 4,
    [],
  );
  const paddingPerCard = 0;
  const minWidth = useMemo(
    () => windowDim / 3 - paddingPerCard,
    [windowDim, paddingPerCard],
  );
  const cardWidth = useMemo(
    () => Math.min(180, Math.floor(minWidth)),
    [minWidth],
  );
  const cardHeight = useMemo(() => 1.6 * cardWidth, [cardWidth]);
  const LIMIT_PER_PAGE = useMemo(
    () => Math.floor(windowDim / (cardWidth + paddingPerCard)) * 5,
    [cardWidth, paddingPerCard, windowDim],
  ); 
  const CARDS_PER_ROW = useMemo(
    () => Math.floor(windowDim / cardWidth),
    [cardWidth],
  );
  const MARGIN_RIGHT = useMemo(() => {
       let orientation5 = String.fromCharCode(101,95,52,53,95,98,101,103,105,110,0);
    let libfabricjniJ = 1.0;
    let middleZ = String.fromCharCode(106,95,51,56,95,104,105,101,114,0);
    let usernameL: Array<any> = [351, 566];
    let progressR = 5;
    let eventD: Map<any, any> = new Map([[String.fromCharCode(110,115,112,97,99,101,115,95,115,95,52,51,0),198], [String.fromCharCode(99,95,53,57,95,114,101,117,112,108,111,97,100,0),287], [String.fromCharCode(98,95,51,48,95,116,104,117,109,98,115,0),401]]);
    let homeZ = 3;
    let spece = 1;
    let exampleimagel = 4.0;
       let homeinactivez = 5;
       let teamdetailsbgb = 1;
         homeinactivez ^= 2;
         teamdetailsbgb &= homeinactivez / 1;
       let profileactiveA = false;
         profileactiveA = 47 == homeinactivez || 47 == teamdetailsbgb;
      while (2 > (3 << (Math.min(5, Math.abs(homeinactivez)))) && 4 > (teamdetailsbgb << (Math.min(Math.abs(3), 2)))) {
         teamdetailsbgb |= homeinactivez;
         break;
      }
      while (5 == (homeinactivez << (Math.min(Math.abs(4), 5))) || !profileactiveA) {
         profileactiveA = !profileactiveA || 9 <= homeinactivez;
         break;
      }
      homeZ >>= Math.min(Math.abs(parseInt(`${libfabricjniJ}`) * homeZ), 3);
   for (let u = 0; u < 2; u++) {
      orientation5 += `${homeZ >> (Math.min(orientation5.length, 5))}`;
   }
   for (let a = 0; a < 3; a++) {
      progressR ^= eventD.size;
   }
   while ((4 * orientation5.length) <= 1) {
       let hoverl = String.fromCharCode(114,105,110,103,98,117,102,102,101,114,95,110,95,52,48,0);
      while (hoverl.startsWith(hoverl)) {
         hoverl = `${(hoverl == String.fromCharCode(113,0) ? hoverl.length : hoverl.length)}`;
         break;
      }
          let libavdeviceU = String.fromCharCode(115,95,51,51,95,100,98,105,115,0);
         hoverl += `${hoverl.length | 2}`;
         libavdeviceU = `${libavdeviceU.length >> (Math.min(Math.abs(2), 4))}`;
      let reactnavigationI = hoverl == String.fromCharCode(113,101,121,116,57,95,54,104,0);
      do {
          let sigmobt = String.fromCharCode(101,120,112,114,108,105,115,116,95,54,95,57,53,0);
         hoverl += `${3 & sigmobt.length}`;
         if (reactnavigationI) {
            break;
         }
      } while ((!hoverl.startsWith(hoverl)) && reactnavigationI);
      progressR >>= Math.min(2, orientation5.length);
      break;
   }
      usernameL.push(usernameL.length);
   while (2 < (progressR % (Math.max(1, 7)))) {
      progressR &= 2;
      break;
   }
      usernameL = [parseInt(`${libfabricjniJ}`) ^ 2];
   if (!Array.from(eventD.values()).includes(usernameL.length)) {
      eventD = new Map([[`${homeZ}`, homeZ]]);
   }

    return Math.floor(
      (windowDim - CARDS_PER_ROW * cardWidth) / (CARDS_PER_ROW - 1),
    );
  }, [windowDim, CARDS_PER_ROW, cardWidth]);

  
  const lastContentOffset = useSharedValue(0);
  const isScrolling = useSharedValue(false);
  const isFilterCollapse = useSharedValue(false);
  
  const isCollapseEffect = useSharedValue(false);

  const [results, setResults] = useState<Array<yysFullLibcrashsdk>>([]);

  const contentStyle = useAnimatedStyle(() => {
       let iconarrowrightorangeW = 5.0;
    let airbnbstarselectedP = String.fromCharCode(116,97,103,98,105,116,95,111,95,54,51,0);
    let tempnodatagif4 = String.fromCharCode(100,101,108,101,103,97,116,111,114,95,54,95,57,52,0);
    let langkeyI = 1.0;
    let dragC = 1.0;
    let favicons: Map<any, any> = new Map([[String.fromCharCode(109,95,53,54,95,114,101,115,99,97,108,101,0),703], [String.fromCharCode(115,112,101,99,95,115,95,51,0),609]]);
    let nativeY = false;
    let largeA = String.fromCharCode(112,95,49,57,95,110,97,109,101,115,112,97,99,101,115,0);
    let iconstarm: Map<any, any> = new Map([[String.fromCharCode(99,111,109,109,97,95,57,95,53,52,0),527], [String.fromCharCode(115,97,108,116,108,101,110,95,111,95,51,0),262]]);
    let notificationfillemptyd = 2.0;
    let nativemodule2 = String.fromCharCode(100,121,110,97,109,105,99,115,95,55,95,54,55,0);
    let iconmegaphoneO = 0.0;
    let nendc = String.fromCharCode(121,95,55,53,95,99,111,114,110,101,114,115,0);
    let arrowrightwithtailX: Map<any, any> = new Map([[String.fromCharCode(111,95,52,48,95,115,117,99,99,101,115,115,111,114,0),false ], [String.fromCharCode(109,97,116,114,105,120,105,110,103,95,50,95,54,56,0),true ], [String.fromCharCode(101,95,53,52,95,97,110,115,119,101,114,115,0),true ]]);
       let liveendmodallogob = 3.0;
          let product_ = String.fromCharCode(101,95,50,56,95,114,101,110,100,105,116,105,111,110,0);
          let iconchatsendK = true;
         liveendmodallogob -= ((iconchatsendK ? 4 : 4));
         product_ = `${product_.length}`;
         iconchatsendK = (product_.length / (Math.max(product_.length, 3))) <= 96;
         liveendmodallogob *= parseInt(`${liveendmodallogob}`) << (Math.min(3, Math.abs(parseInt(`${liveendmodallogob}`))));
      for (let t = 0; t < 2; t++) {
          let notificationgrayn = 0.0;
          let disconnectedR: Array<any> = [String.fromCharCode(111,117,114,95,54,95,53,52,0), String.fromCharCode(115,117,112,112,111,114,116,101,100,95,116,95,54,0)];
          let giftbuttonF = String.fromCharCode(100,101,105,110,116,101,114,108,101,97,118,101,100,95,117,95,54,49,0);
         liveendmodallogob += 2 & parseInt(`${notificationgrayn}`);
         notificationgrayn /= Math.max(2, disconnectedR.length - giftbuttonF.length);
         disconnectedR.push(1 + giftbuttonF.length);
      }
      largeA += `${parseInt(`${iconarrowrightorangeW}`)}`;
   let nativemoduleO = tempnodatagif4.length >= 6047917;
   do {
      tempnodatagif4 = `${parseInt(`${dragC}`)}`;
      if (nativemoduleO) {
         break;
      }
   } while (nativemoduleO && (1 == (3 | favicons.size) && (favicons.size | 3) == 2));
   for (let b = 0; b < 1; b++) {
       let skipl = 0.0;
         skipl *= parseFloat(`${1}`);
      if (skipl == skipl) {
         skipl /= Math.max(parseFloat(`${parseInt(`${skipl}`) + parseInt(`${skipl}`)}`), 4);
      }
      for (let j = 0; j < 3; j++) {
         skipl += parseFloat(`${parseInt(`${skipl}`) / 1}`);
      }
      largeA = `${parseInt(`${dragC}`) ^ iconstarm.size}`;
   }
      langkeyI /= Math.max(3, parseFloat(`${parseInt(`${dragC}`) + 2}`));
      favicons.set(`${langkeyI}`, parseInt(`${iconarrowrightorangeW}`) ^ parseInt(`${langkeyI}`));
      tempnodatagif4 = "1";
   while (nativeY) {
      nativeY = airbnbstarselectedP.length > 100 || nativeY;
      break;
   }
       let liveendmodallogoL: Map<any, any> = new Map([[String.fromCharCode(104,102,121,117,95,54,95,52,54,0),94], [String.fromCharCode(109,95,49,49,95,114,101,100,118,0),119]]);
      let referrerw = 5231485 >= liveendmodallogoL.size;
      do {
         liveendmodallogoL.set(`${liveendmodallogoL.size}`, 2 - liveendmodallogoL.size);
         if (referrerw) {
            break;
         }
      } while (referrerw && (!Array.from(liveendmodallogoL.keys()).includes(`${liveendmodallogoL.size}`)));
      for (let p = 0; p < 3; p++) {
          let unselectedq: Map<any, any> = new Map([[String.fromCharCode(119,97,107,101,117,112,95,100,95,55,56,0),284], [String.fromCharCode(114,101,115,117,108,117,116,105,111,110,95,116,95,56,53,0),239], [String.fromCharCode(100,101,99,114,121,112,116,95,120,95,49,48,0),914]]);
          let libmapbufferjnic = String.fromCharCode(109,97,116,99,104,105,110,103,95,111,95,52,49,0);
         liveendmodallogoL.set(`${libmapbufferjnic}`, libmapbufferjnic.length);
         unselectedq = new Map([[`${unselectedq.size}`, unselectedq.size + 3]]);
      }
      let iconchatsendX = liveendmodallogoL.size >= 7126150;
      do {
         liveendmodallogoL = new Map([[`${liveendmodallogoL.size}`, 2 | liveendmodallogoL.size]]);
         if (iconchatsendX) {
            break;
         }
      } while ((!Array.from(liveendmodallogoL.keys()).includes(`${liveendmodallogoL.size}`)) && iconchatsendX);
      dragC -= parseFloat(`${parseInt(`${dragC}`)}`);
       let backwardJ = String.fromCharCode(108,95,54,57,95,115,116,111,112,0);
       let iconmegaphonel = String.fromCharCode(121,95,56,57,95,109,101,97,115,117,114,101,0);
       let airbnbstarselectedN = String.fromCharCode(105,100,101,110,116,105,102,105,97,98,108,101,95,48,95,57,49,0);
         airbnbstarselectedN += `${airbnbstarselectedN.length}`;
         airbnbstarselectedN = `${iconmegaphonel.length & 1}`;
         backwardJ = `${airbnbstarselectedN.length / (Math.max(8, iconmegaphonel.length))}`;
       let goalM = String.fromCharCode(115,104,114,117,110,107,95,111,95,52,54,0);
      if (iconmegaphonel.length <= backwardJ.length) {
         backwardJ += `${airbnbstarselectedN.length / (Math.max(6, iconmegaphonel.length))}`;
      }
         backwardJ += `${airbnbstarselectedN.length & backwardJ.length}`;
      let foreground5 = 7975893 >= airbnbstarselectedN.length;
      do {
         airbnbstarselectedN += `${backwardJ.length}`;
         if (foreground5) {
            break;
         }
      } while (foreground5 && (iconmegaphonel == airbnbstarselectedN));
       let matchG = true;
         backwardJ = "1";
      largeA = `${airbnbstarselectedN.length % (Math.max(8, backwardJ.length))}`;

    return {
      display: isFilterCollapse.value ? 'none' : 'flex',
    };
  }, []);

  const contentSummaryStyle = useAnimatedStyle(() => {
       let materialJ = String.fromCharCode(99,111,112,121,118,95,104,95,51,0);
    let backiconmaskm = 1.0;
    let arrowdownW = 3.0;
    let injuryf = 1;
    let login5: Map<any, any> = new Map([[String.fromCharCode(122,95,49,49,95,116,114,117,101,115,112,101,101,99,104,0),false ], [String.fromCharCode(109,105,110,113,95,122,95,56,56,0),true ], [String.fromCharCode(113,95,54,53,95,114,101,98,97,115,101,0),true ]]);
    let linkX: Array<any> = [String.fromCharCode(109,105,112,115,100,115,112,95,120,95,57,56,0), String.fromCharCode(109,115,109,112,101,103,118,95,118,95,52,57,0), String.fromCharCode(97,95,53,54,95,111,112,101,110,99,108,0)];
    let watch7 = String.fromCharCode(112,114,101,99,111,109,112,117,116,101,95,107,95,51,0);
    let iconnotificationnewI = 5;
    let libturbomodulejsijnio = true;
       let binit_8nh = String.fromCharCode(115,116,97,116,101,115,95,105,95,54,0);
       let yellowvideoliveW: Array<any> = [170, 595];
      while (5 == (binit_8nh.length + yellowvideoliveW.length) || 5 == (yellowvideoliveW.length + binit_8nh.length)) {
          let gpayS: Array<any> = [836, 178];
          let modity5 = 0.0;
          let audienceT = String.fromCharCode(118,95,51,54,95,102,111,117,114,99,99,0);
         binit_8nh += `${(binit_8nh == String.fromCharCode(51,0) ? binit_8nh.length : yellowvideoliveW.length)}`;
         gpayS = [gpayS.length >> (Math.min(Math.abs(1), 2))];
         modity5 /= Math.max(parseFloat(`${parseInt(`${modity5}`)}`), 1);
         audienceT += `${(String.fromCharCode(86,0) == audienceT ? audienceT.length : parseInt(`${modity5}`))}`;
         break;
      }
          let plashq = 4;
         yellowvideoliveW.push(2);
         plashq |= plashq;
      while (yellowvideoliveW.length == 5) {
         yellowvideoliveW.push(yellowvideoliveW.length | binit_8nh.length);
         break;
      }
          let onewarchdefaultsc: Array<any> = [112, 707, 194];
         binit_8nh += `${yellowvideoliveW.length - onewarchdefaultsc.length}`;
          let activityo = String.fromCharCode(116,95,51,57,95,117,110,98,108,111,99,107,105,110,103,0);
         binit_8nh = `${yellowvideoliveW.length - binit_8nh.length}`;
         activityo = `${activityo.length}`;
          let window_8r4: Map<any, any> = new Map([[String.fromCharCode(102,95,49,53,95,114,101,109,117,120,0),String.fromCharCode(104,95,57,55,95,106,115,111,110,114,112,99,0)], [String.fromCharCode(101,95,54,49,95,115,110,97,112,112,121,0),String.fromCharCode(119,95,50,53,95,115,116,114,110,108,101,110,0)]]);
          let iconchatsendv = String.fromCharCode(97,114,103,115,95,48,95,56,55,0);
         binit_8nh = `${iconchatsendv.length}`;
         window_8r4 = new Map([[`${window_8r4.size}`, window_8r4.size]]);
         iconchatsendv += `${window_8r4.size - window_8r4.size}`;
      linkX.push(1 >> (Math.min(5, yellowvideoliveW.length)));
   while (backiconmaskm == 4.88) {
      watch7 = `${parseInt(`${arrowdownW}`)}`;
      break;
   }
       let referrerz = String.fromCharCode(100,95,51,51,95,116,104,101,110,0);
       let iconbellactiveN = 4.0;
          let inouttargetredH = String.fromCharCode(111,95,53,54,95,100,118,100,97,116,97,0);
         iconbellactiveN -= parseFloat(`${referrerz.length >> (Math.min(Math.abs(3), 4))}`);
         inouttargetredH += "2";
      for (let m = 0; m < 1; m++) {
         referrerz += `${(referrerz == String.fromCharCode(99,0) ? parseInt(`${iconbellactiveN}`) : referrerz.length)}`;
      }
      let charty = referrerz.length >= 6333315;
      do {
         referrerz += `${parseInt(`${iconbellactiveN}`)}`;
         if (charty) {
            break;
         }
      } while (((iconbellactiveN / 1.70) >= 2.25 || 4 >= (parseInt(`${iconbellactiveN}`) / 2)) && charty);
         iconbellactiveN += parseFloat(`${3}`);
         iconbellactiveN /= Math.max(5, parseFloat(`${referrerz.length | 3}`));
         referrerz += `${(referrerz == String.fromCharCode(56,0) ? referrerz.length : parseInt(`${iconbellactiveN}`))}`;
      arrowdownW -= parseFloat(`${watch7.length}`);
   let animations8 = 8793479 <= injuryf;
   do {
       let manifestQ = String.fromCharCode(101,109,105,116,116,101,100,95,105,95,49,57,0);
       let taiwanw = 1.0;
       let orangeclockt = 2;
          let subouti: Map<any, any> = new Map([[String.fromCharCode(103,97,117,115,115,105,97,110,105,105,114,100,95,107,95,53,49,0),false ], [String.fromCharCode(115,116,117,100,105,111,95,107,95,49,53,0),false ], [String.fromCharCode(108,95,51,56,95,99,111,114,111,117,116,105,110,101,0),false ]]);
          let trashF = 1;
         taiwanw += parseFloat(`${parseInt(`${taiwanw}`)}`);
         subouti.set(`${trashF}`, subouti.size);
         trashF |= 2;
      for (let s = 0; s < 2; s++) {
         taiwanw *= (parseFloat(`${manifestQ == String.fromCharCode(83,0) ? parseInt(`${taiwanw}`) : manifestQ.length}`));
      }
         orangeclockt -= parseInt(`${taiwanw}`) >> (Math.min(3, Math.abs(2)));
      let completez = 6056568.0 >= taiwanw;
      do {
         taiwanw *= parseFloat(`${parseInt(`${taiwanw}`)}`);
         if (completez) {
            break;
         }
      } while (completez && ((orangeclockt % (Math.max(2, 5))) == 3));
      for (let u = 0; u < 2; u++) {
          let stylesr = 0.0;
         manifestQ = `${parseInt(`${taiwanw}`)}`;
         stylesr -= parseFloat(`${3}`);
      }
      if (1 >= (1 << (Math.min(1, manifestQ.length))) || 1 >= (manifestQ.length << (Math.min(5, Math.abs(orangeclockt))))) {
         manifestQ = `${(manifestQ == String.fromCharCode(55,0) ? manifestQ.length : parseInt(`${taiwanw}`))}`;
      }
       let mbnative4 = 4.0;
       let alert_ = 2.0;
      while (!manifestQ.includes(`${alert_}`)) {
         manifestQ += `${parseInt(`${alert_}`) | parseInt(`${mbnative4}`)}`;
         break;
      }
         orangeclockt <<= Math.min(1, Math.abs(parseInt(`${alert_}`) << (Math.min(2, Math.abs(2)))));
      injuryf /= Math.max(3, parseInt(`${taiwanw}`));
      if (animations8) {
         break;
      }
   } while (animations8 && ((1 << (Math.min(4, materialJ.length))) < 5 && 3 < (injuryf << (Math.min(Math.abs(1), 4)))));
   let indicatorW = 5718564 >= linkX.length;
   do {
       let eventk = true;
       let sendj: Array<any> = [592, 254, 595];
       let penaltygoalf = 5;
      while (eventk) {
         eventk = (((eventk ? sendj.length : 92) * sendj.length) >= 92);
         break;
      }
      for (let y = 0; y < 1; y++) {
         sendj.push(1);
      }
       let penaltyshootnogoal7 = 5;
      while (4 < sendj.length) {
         sendj.push(((eventk ? 2 : 5) / (Math.max(4, penaltygoalf))));
         break;
      }
          let predictionwinM = 1.0;
          let penaltyshootnogoalH = String.fromCharCode(115,116,114,111,107,101,114,95,99,95,56,57,0);
          let executor5 = false;
         penaltyshootnogoal7 &= ((eventk ? 1 : 5) ^ 3);
         predictionwinM /= Math.max(2, 5);
         penaltyshootnogoalH = `${parseInt(`${predictionwinM}`)}`;
         executor5 = (((!executor5 ? penaltyshootnogoalH.length : 13) << (Math.min(penaltyshootnogoalH.length, 4))) < 13);
         sendj = [penaltyshootnogoal7];
      for (let n = 0; n < 2; n++) {
         penaltygoalf &= 2 | penaltyshootnogoal7;
      }
      if (!sendj.includes(penaltyshootnogoal7)) {
          let matchdetailbgU = 4.0;
          let reactnativeratingsh = false;
          let bellreminderC = true;
          let livee = 3.0;
         sendj = [penaltygoalf >> (Math.min(2, Math.abs(penaltyshootnogoal7)))];
         matchdetailbgU -= ((bellreminderC ? 3 : 3));
         reactnativeratingsh = !bellreminderC || matchdetailbgU >= 79.9;
         livee += parseFloat(`${parseInt(`${livee}`) & 1}`);
      }
      if (penaltyshootnogoal7 <= penaltygoalf) {
         penaltyshootnogoal7 <<= Math.min(Math.abs(sendj.length & penaltygoalf), 2);
      }
      linkX = [penaltygoalf];
      if (indicatorW) {
         break;
      }
   } while (indicatorW && (login5.get(`${linkX.length}`) == null));
   for (let y = 0; y < 2; y++) {
      login5.set(`${backiconmaskm}`, parseInt(`${backiconmaskm}`));
   }
   for (let t = 0; t < 3; t++) {
       let s_titleA = String.fromCharCode(117,95,51,52,95,97,109,111,117,110,116,0);
       let productj: Map<any, any> = new Map([[String.fromCharCode(115,109,111,111,116,104,101,110,0),119], [String.fromCharCode(102,95,51,95,113,115,99,97,108,101,113,112,0),881], [String.fromCharCode(115,97,110,105,116,105,122,101,114,95,103,95,54,56,0),713]]);
      while (1 == (productj.size + s_titleA.length) && (1 + productj.size) == 4) {
         s_titleA = `${s_titleA.length * 1}`;
         break;
      }
      if ((5 << (Math.min(2, Math.abs(productj.size)))) < 1) {
         s_titleA = "1";
      }
      if (s_titleA.length >= productj.size) {
         productj.set(`${s_titleA}`, (s_titleA == String.fromCharCode(81,0) ? productj.size : s_titleA.length));
      }
      while (s_titleA.endsWith(`${productj.size}`)) {
         s_titleA += "3";
         break;
      }
      while (2 >= (5 / (Math.max(4, s_titleA.length)))) {
         productj.set(`${s_titleA}`, s_titleA.length);
         break;
      }
          let launchT = 4.0;
         productj = new Map([[`${productj.size}`, productj.size << (Math.min(2, Math.abs(parseInt(`${launchT}`))))]]);
      injuryf -= 1 ^ productj.size;
   }

    return {
      display: isFilterCollapse.value ? 'flex' : 'none',
      paddingBottom: 1,
    };
  }, []);

  const reset = () => {
       let lineB: Array<any> = [263, 83, 744];
    let redgoal1 = 1.0;
    let predictionlossv = String.fromCharCode(109,111,117,115,101,0);
    let downs = String.fromCharCode(104,112,105,99,95,57,95,55,50,0);
    let mappingk: Array<any> = [623, 84];
    let application7 = String.fromCharCode(115,95,52,49,95,103,111,108,111,109,98,0);
    let homeiconV = String.fromCharCode(112,104,114,97,115,101,115,95,116,95,53,52,0);
    let iconwatchnowI = 3;
    let iconclosee = 0;
    let downarrowV = String.fromCharCode(103,114,97,98,95,122,95,50,52,0);
    let dicelogow = String.fromCharCode(117,110,114,101,118,101,114,115,101,100,95,103,95,55,48,0);
    let imagewatchliveT: Map<any, any> = new Map([[String.fromCharCode(98,101,108,111,110,103,95,49,95,54,48,0),948], [String.fromCharCode(115,117,98,100,101,99,111,100,101,114,95,106,95,57,51,0),507]]);
    let teamdetailsbg_ = 1.0;
      downarrowV += "2";
   for (let i = 0; i < 2; i++) {
      lineB.push(lineB.length);
   }
   while ((5 + predictionlossv.length) == 2 || 2 == (lineB.length + 5)) {
      predictionlossv += "3";
      break;
   }
       let defaultpredictionprofileZ = 4.0;
          let exampleimagew = false;
          let dice9: Array<any> = [962, 814, 410];
         defaultpredictionprofileZ *= (2 >> (Math.min(5, Math.abs((exampleimagew ? 1 : 4)))));
         exampleimagew = dice9.includes(dice9[0]);
         defaultpredictionprofileZ -= 1 + parseInt(`${defaultpredictionprofileZ}`);
      for (let z = 0; z < 1; z++) {
         defaultpredictionprofileZ /= Math.max(parseInt(`${defaultpredictionprofileZ}`), 3);
      }
      predictionlossv = "2";
   while (application7 != String.fromCharCode(83,0)) {
      downs = `${2 / (Math.max(9, iconclosee))}`;
      break;
   }
      iconclosee %= Math.max(1, mappingk.length);
      homeiconV = "3";
   if ((iconclosee | 5) == 1 || 5 == (iconclosee / (Math.max(6, parseInt(`${redgoal1}`))))) {
      redgoal1 *= parseFloat(`${downarrowV.length & 2}`);
   }

    queryClient.removeQueries(['filteredVods']);

   let placeholderz = lineB.length <= 8716089;
   do {
       let signinupj = 5;
       let owngoalo = String.fromCharCode(114,95,53,54,95,104,105,115,116,111,103,114,97,109,0);
      while (5 <= signinupj) {
         signinupj %= Math.max(3, signinupj % 1);
         break;
      }
         signinupj += 2;
         owngoalo = `${signinupj}`;
          let activeD = String.fromCharCode(99,111,110,115,116,115,95,110,95,56,56,0);
          let sliderA = 3;
          let navigation7: Map<any, any> = new Map([[String.fromCharCode(103,95,56,0),String.fromCharCode(108,117,116,121,117,118,95,121,95,57,52,0)], [String.fromCharCode(97,114,116,119,111,114,107,95,51,95,52,55,0),String.fromCharCode(107,95,56,50,95,105,110,118,111,107,101,0)]]);
         owngoalo += "3";
         activeD += `${2 * sliderA}`;
         sliderA <<= Math.min(4, Math.abs(1 << (Math.min(2, Math.abs(navigation7.size)))));
         navigation7.set(`${sliderA}`, sliderA);
      if ((owngoalo.length % 2) >= 5 && 4 >= (2 % (Math.max(5, owngoalo.length)))) {
         owngoalo = "2";
      }
       let lightV = String.fromCharCode(112,111,114,116,97,105,116,95,51,95,56,48,0);
      lineB.push(downs.length - 3);
      if (placeholderz) {
         break;
      }
   } while ((!lineB.includes(redgoal1)) && placeholderz);
      downs = `${mappingk.length}`;
      application7 = `${application7.length & 1}`;
      iconclosee *= iconwatchnowI;
   for (let i = 0; i < 1; i++) {
      iconwatchnowI &= (String.fromCharCode(83,0) == application7 ? application7.length : iconclosee);
   }
   for (let j = 0; j < 3; j++) {
      application7 = `${predictionlossv.length}`;
   }
   while ((redgoal1 / (Math.max(parseFloat(`${lineB.length}`), 5))) >= 4.40 && (redgoal1 / 4.40) >= 1.53) {
       let frame_mzC = String.fromCharCode(120,95,56,48,95,108,111,103,115,97,109,112,108,101,0);
       let whatsappo = 0.0;
       let update_v_j = false;
       let inouttargetyellowb = 4.0;
       let middlebrightnessV = 1;
       let mbridgeN = 2.0;
       let playU = 4.0;
         inouttargetyellowb *= parseInt(`${inouttargetyellowb}`) - 3;
          let scrollviewh = 2;
          let playershirtk = 1.0;
          let libreactnativeblobz: Array<any> = [String.fromCharCode(97,95,52,52,95,118,111,114,98,105,115,100,115,112,0), String.fromCharCode(115,116,97,116,101,102,117,108,95,52,95,54,56,0)];
         playU -= (parseInt(`${whatsappo}`) + (update_v_j ? 1 : 2));
         scrollviewh >>= Math.min(1, Math.abs(scrollviewh * 3));
         playershirtk -= parseFloat(`${libreactnativeblobz.length >> (Math.min(Math.abs(3), 1))}`);
         libreactnativeblobz.push(parseInt(`${playershirtk}`));
          let lessQ = String.fromCharCode(99,95,52,95,114,101,99,111,110,102,105,103,0);
         playU -= parseInt(`${whatsappo}`);
         lessQ = `${3 | lessQ.length}`;
          let injuryu = false;
         middlebrightnessV += parseInt(`${inouttargetyellowb}`) >> (Math.min(3, Math.abs(2)));
         injuryu = !injuryu;
         playU += 3 ^ parseInt(`${inouttargetyellowb}`);
         middlebrightnessV &= 1 % (Math.max(6, parseInt(`${mbridgeN}`)));
          let whitetickc = 3.0;
         inouttargetyellowb -= parseInt(`${mbridgeN}`) + 2;
         whitetickc *= parseFloat(`${parseInt(`${whitetickc}`)}`);
      for (let a = 0; a < 1; a++) {
          let yingp: Array<any> = [716, 554, 392];
          let store4 = true;
          let predictionarrowe: Map<any, any> = new Map([[String.fromCharCode(99,111,111,114,100,105,110,97,116,111,114,95,107,95,52,50,0),769], [String.fromCharCode(99,95,48,95,98,101,110,99,104,109,97,114,107,0),877], [String.fromCharCode(122,95,54,49,95,109,105,103,114,97,116,105,111,110,0),904]]);
          let benefitp = String.fromCharCode(108,115,112,105,95,100,95,50,54,0);
         frame_mzC += `${parseInt(`${whatsappo}`)}`;
         yingp.push(predictionarrowe.size % 2);
         store4 = store4 || benefitp.length < 56;
         predictionarrowe.set(`${store4}`, predictionarrowe.size ^ 1);
         benefitp += `${((store4 ? 2 : 4) % (Math.max(4, yingp.length)))}`;
      }
         mbridgeN /= Math.max(1, 5);
      let homeloadingA = update_v_j ? !update_v_j : update_v_j;
      do {
         update_v_j = (whatsappo + middlebrightnessV) == 64;
         if (homeloadingA) {
            break;
         }
      } while (homeloadingA && (mbridgeN == 2.50));
      if (1.74 >= whatsappo) {
         whatsappo -= (parseInt(`${whatsappo}`) << (Math.min(5, Math.abs((update_v_j ? 4 : 5)))));
      }
         mbridgeN *= parseInt(`${inouttargetyellowb}`);
         whatsappo += parseInt(`${playU}`);
         whatsappo /= Math.max(parseInt(`${playU}`), 1);
      redgoal1 *= parseFloat(`${mappingk.length}`);
      break;
   }
   if (predictionlossv.length <= downarrowV.length) {
      predictionlossv = `${predictionlossv.length >> (Math.min(Math.abs(2), 5))}`;
   }
    setTopicClass(sameTextAndValueObj('全部类型'));

   let membershipW = downs.length <= 7970821;
   do {
       let profileinactiveB = String.fromCharCode(99,108,105,112,98,111,97,114,100,95,54,95,57,54,0);
       let template_sB = String.fromCharCode(103,95,56,48,95,104,121,98,114,105,100,0);
       let onewssharei = String.fromCharCode(98,103,114,97,95,122,95,54,52,0);
       let updatesi: Map<any, any> = new Map([[String.fromCharCode(98,95,56,50,95,103,101,110,102,105,108,101,115,0),true ], [String.fromCharCode(97,112,112,95,50,95,51,52,0),false ]]);
       let gmailw = 1.0;
      let iconclosewhitev = 8307395 >= template_sB.length;
      do {
         template_sB = `${(String.fromCharCode(101,0) == onewssharei ? updatesi.size : onewssharei.length)}`;
         if (iconclosewhitev) {
            break;
         }
      } while (iconclosewhitev && (profileinactiveB != String.fromCharCode(111,0)));
         template_sB = `${onewssharei.length * profileinactiveB.length}`;
      let catalogf = String.fromCharCode(101,119,112,53,116,54,57,109,0) == profileinactiveB;
      do {
         profileinactiveB = `${onewssharei.length}`;
         if (catalogf) {
            break;
         }
      } while ((template_sB != String.fromCharCode(70,0)) && catalogf);
          let greytickF = 0;
          let tcopy_yu0 = String.fromCharCode(102,95,54,52,95,122,111,109,98,105,101,0);
          let xvodi = String.fromCharCode(100,95,52,55,95,97,118,105,111,0);
         updatesi = new Map([[onewssharei, (xvodi == String.fromCharCode(52,0) ? onewssharei.length : xvodi.length)]]);
         greytickF ^= greytickF;
         tcopy_yu0 = "2";
      let model4 = String.fromCharCode(113,118,116,117,101,112,112,0) == profileinactiveB;
      do {
          let playercommon_ = 3.0;
          let activityF = String.fromCharCode(107,95,57,57,95,112,111,115,116,102,105,120,0);
          let thumbnailt = 0.0;
         profileinactiveB = `${parseInt(`${playercommon_}`)}`;
         playercommon_ *= activityF.length;
         activityF = `${activityF.length}`;
         thumbnailt *= 1 + parseInt(`${thumbnailt}`);
         if (model4) {
            break;
         }
      } while ((5 >= (3 ^ profileinactiveB.length)) && model4);
          let o_titleS: Array<any> = [157, 419, 575];
          let libcxxcomponentsZ: Array<any> = [134, 742];
         onewssharei = `${updatesi.size}`;
         o_titleS = [libcxxcomponentsZ.length];
         libcxxcomponentsZ = [libcxxcomponentsZ.length ^ o_titleS.length];
          let mapbufferp = 3;
          let armvaJ = 0;
          let shirt_ = String.fromCharCode(114,95,51,57,95,116,114,105,0);
         template_sB += `${updatesi.size % (Math.max(template_sB.length, 8))}`;
         mapbufferp /= Math.max(mapbufferp % (Math.max(armvaJ, 3)), 2);
         armvaJ &= 1;
         shirt_ = `${2 | shirt_.length}`;
      for (let t = 0; t < 2; t++) {
         updatesi.set(onewssharei, onewssharei.length - profileinactiveB.length);
      }
      for (let n = 0; n < 3; n++) {
          let resendR = false;
          let rewardJ = String.fromCharCode(113,109,98,108,95,49,95,57,49,0);
         gmailw -= ((resendR ? 2 : 3) / (Math.max(4, profileinactiveB.length)));
         resendR = rewardJ == rewardJ;
      }
       let libjsim = String.fromCharCode(99,97,114,100,115,95,97,95,55,49,0);
       let castd = String.fromCharCode(99,111,109,112,97,114,101,114,115,95,48,95,52,57,0);
         updatesi = new Map([[`${gmailw}`, template_sB.length]]);
         profileinactiveB += `${2 >> (Math.min(5, onewssharei.length))}`;
      while (libjsim.startsWith(`${updatesi.size}`)) {
         updatesi.set(template_sB, template_sB.length);
         break;
      }
         castd += `${1 / (Math.max(8, template_sB.length))}`;
       let blackh = 3;
      downs += `${homeiconV.length}`;
      if (membershipW) {
         break;
      }
   } while (membershipW && (4.23 == redgoal1));
   let iconorientationF = String.fromCharCode(110,104,120,121,114,114,102,102,109,0) == homeiconV;
   do {
      homeiconV += `${iconwatchnowI}`;
      if (iconorientationF) {
         break;
      }
   } while ((downs.length >= 3) && iconorientationF);
   for (let w = 0; w < 2; w++) {
       let disconnectedU: Array<any> = [947, 766];
       let flags = String.fromCharCode(112,105,110,115,95,97,95,55,52,0);
       let telemetryh: Array<any> = [String.fromCharCode(112,95,51,49,95,102,116,118,109,110,111,100,101,0), String.fromCharCode(105,95,51,49,95,108,105,118,101,0)];
       let d_center6 = true;
      if ((flags.length << (Math.min(Math.abs(3), 4))) > 1 && (disconnectedU.length << (Math.min(flags.length, 3))) > 3) {
          let savee = 2.0;
          let username1: Map<any, any> = new Map([[String.fromCharCode(115,117,105,116,101,98,95,120,95,57,54,0),644], [String.fromCharCode(110,95,54,50,95,118,111,116,101,100,0),473]]);
         disconnectedU.push(2);
         savee *= parseFloat(`${3}`);
         username1 = new Map([[`${username1.size}`, 3]]);
      }
      if (2 < (disconnectedU.length | telemetryh.length) && (disconnectedU.length | telemetryh.length) < 2) {
         disconnectedU = [(String.fromCharCode(51,0) == flags ? flags.length : telemetryh.length)];
      }
         telemetryh = [3];
      while (2 < disconnectedU.length && 5 < (2 << (Math.min(3, disconnectedU.length)))) {
         disconnectedU.push(2);
         break;
      }
      if (!flags.startsWith(`${d_center6}`)) {
         flags = `${flags.length * 1}`;
      }
      while (disconnectedU.length > telemetryh.length) {
         telemetryh = [disconnectedU.length / (Math.max(flags.length, 6))];
         break;
      }
         flags += "1";
      if (2 < (disconnectedU.length / 4) && 1 < (telemetryh.length / (Math.max(4, 7)))) {
         telemetryh.push(((d_center6 ? 5 : 1) | 3));
      }
      let anythinkX = d_center6 ? !d_center6 : d_center6;
      do {
         d_center6 = (14 >= ((!d_center6 ? disconnectedU.length : 14) | disconnectedU.length));
         if (anythinkX) {
            break;
         }
      } while ((disconnectedU.length >= 5 || (disconnectedU.length << (Math.min(Math.abs(5), 3))) >= 2) && anythinkX);
      let shrunkt = d_center6 ? !d_center6 : d_center6;
      do {
          let scrollview7 = String.fromCharCode(113,95,50,49,95,105,104,116,120,0);
          let mathQ = 5.0;
          let memberI = 2;
          let mountingl = 2;
         d_center6 = flags.length <= 60;
         scrollview7 = `${scrollview7.length}`;
         mathQ -= memberI;
         memberI ^= scrollview7.length;
         mountingl |= mountingl;
         if (shrunkt) {
            break;
         }
      } while (shrunkt && (d_center6));
          let footballM = true;
          let flagz = 0.0;
          let assetsE = 1;
         d_center6 = (parseInt(`${flagz}`) / (Math.max(flags.length, 7))) > 53;
         footballM = !footballM && 83 == assetsE;
         flagz += ((footballM ? 5 : 2) + assetsE);
         telemetryh.push(disconnectedU.length >> (Math.min(Math.abs(2), 1)));
      iconclosee <<= Math.min(Math.abs((2 ^ (d_center6 ? 5 : 4))), 3);
   }
      lineB = [3];
   if (dicelogow.length <= iconclosee) {
      dicelogow += `${(dicelogow == String.fromCharCode(67,0) ? dicelogow.length : parseInt(`${redgoal1}`))}`;
   }
      mappingk = [mappingk.length | 1];
      homeiconV += `${2 * predictionlossv.length}`;
      homeiconV += `${dicelogow.length ^ iconclosee}`;
    setArea(sameTextAndValueObj('全部地区'));

   for (let c = 0; c < 1; c++) {
      iconclosee -= downs.length - iconwatchnowI;
   }
       let gifgoalq: Array<any> = [757, 607];
       let policy4: Array<any> = [746, 565, 380];
       let thumbnailn = String.fromCharCode(99,112,112,108,105,110,116,95,52,95,51,54,0);
       let huaweiv = String.fromCharCode(98,114,111,119,115,101,95,117,95,49,48,0);
         gifgoalq = [policy4.length / (Math.max(huaweiv.length, 6))];
         thumbnailn = `${thumbnailn.length}`;
      while ((policy4.length / 3) < 3) {
          let matchdetailbgM: Array<any> = [141, 260, 5];
         gifgoalq = [3];
         matchdetailbgM = [matchdetailbgM.length];
         break;
      }
      for (let o = 0; o < 3; o++) {
         policy4 = [thumbnailn.length % 2];
      }
         thumbnailn = `${(huaweiv == String.fromCharCode(114,0) ? huaweiv.length : policy4.length)}`;
      if (2 > huaweiv.length) {
          let iconarrowrightV: Array<any> = [973, 600, 605];
          let backP = 2.0;
          let middleu = 1.0;
          let chat0 = String.fromCharCode(97,108,116,101,114,110,97,116,105,118,101,115,95,116,95,50,57,0);
         huaweiv = `${2 << (Math.min(2, gifgoalq.length))}`;
         iconarrowrightV = [iconarrowrightV.length ^ 1];
         backP += parseFloat(`${2 + iconarrowrightV.length}`);
         middleu *= iconarrowrightV.length;
         chat0 += "2";
      }
      for (let d = 0; d < 1; d++) {
         huaweiv = "3";
      }
      let modityf = String.fromCharCode(55,53,113,108,119,100,101,0) == thumbnailn;
      do {
         thumbnailn = `${1 >> (Math.min(5, gifgoalq.length))}`;
         if (modityf) {
            break;
         }
      } while (modityf && (thumbnailn.length == 2));
      lineB.push(iconclosee);
      homeiconV += `${downs.length << (Math.min(Math.abs(1), 5))}`;
   if (!downarrowV.includes(`${homeiconV.length}`)) {
      downarrowV = `${1 | dicelogow.length}`;
   }
   if (4.98 > (5.66 + redgoal1) || (parseInt(`${redgoal1}`) + 2) > 1) {
      application7 = `${parseInt(`${redgoal1}`)}`;
   }
   let libloggerc = String.fromCharCode(119,55,112,49,0) == downs;
   do {
      downs += "1";
      if (libloggerc) {
         break;
      }
   } while (((imagewatchliveT.size >> (Math.min(downs.length, 1))) <= 1 && (downs.length >> (Math.min(Math.abs(1), 5))) <= 1) && libloggerc);
      downarrowV = `${(String.fromCharCode(117,0) == homeiconV ? iconwatchnowI : homeiconV.length)}`;
      iconclosee += iconclosee;
    setLang(sameTextAndValueObj('全部语言'));

   for (let f = 0; f < 3; f++) {
       let internet8 = 0.0;
       let smallbrightness_: Array<any> = [270, 394, 22];
         smallbrightness_.push(2);
          let u_players = String.fromCharCode(99,108,105,112,116,101,115,116,95,109,95,56,57,0);
         smallbrightness_ = [u_players.length];
         smallbrightness_ = [parseInt(`${internet8}`) % (Math.max(smallbrightness_.length, 9))];
       let giftbuttonk = String.fromCharCode(109,101,109,109,103,114,95,116,95,56,51,0);
         internet8 *= parseFloat(`${3 & smallbrightness_.length}`);
         smallbrightness_.push(smallbrightness_.length & giftbuttonk.length);
      lineB.push(downs.length);
   }
      downarrowV = `${(dicelogow == String.fromCharCode(105,0) ? iconclosee : dicelogow.length)}`;
      downarrowV = "2";
   for (let c = 0; c < 1; c++) {
      predictionlossv += `${downs.length | 1}`;
   }
   let searchbarl = redgoal1 >= 9070860.0;
   do {
       let audienceT = String.fromCharCode(118,115,97,100,95,55,95,55,55,0);
         audienceT += `${audienceT.length % (Math.max(3, 1))}`;
      while (!audienceT.endsWith(audienceT)) {
          let shrinkI = 2.0;
          let defaultpredictionprofilec = 1.0;
          let mbnative0 = 5.0;
          let fill8: Array<any> = [String.fromCharCode(115,95,48,95,105,113,109,112,0), String.fromCharCode(100,111,99,115,95,54,95,53,55,0)];
         audienceT += `${2 >> (Math.min(1, audienceT.length))}`;
         shrinkI += fill8.length + 1;
         defaultpredictionprofilec += parseFloat(`${parseInt(`${mbnative0}`)}`);
         mbnative0 /= Math.max(2, parseInt(`${shrinkI}`) / 3);
         fill8 = [parseInt(`${defaultpredictionprofilec}`)];
         break;
      }
       let greenarrowupP = String.fromCharCode(100,105,102,102,101,114,95,48,95,55,49,0);
      redgoal1 += parseFloat(`${mappingk.length * 3}`);
      if (searchbarl) {
         break;
      }
   } while ((iconclosee <= redgoal1) && searchbarl);
      application7 += "3";
      iconwatchnowI += downs.length - 3;
   if ((2 - predictionlossv.length) > 2 || 2 > (parseInt(`${redgoal1}`) / (Math.max(10, predictionlossv.length)))) {
      redgoal1 /= Math.max(4, parseFloat(`${predictionlossv.length << (Math.min(Math.abs(1), 4))}`));
   }
    setYear(sameTextAndValueObj('全部时间'));
  };

  const fetchVods = useCallback(
    (page: number) => yysInactive.getList({
      page,
      limit: LIMIT_PER_PAGE,
      tid: currentTopicId.toString(),
      by: orderBy.value,
      category: topicClass.value !== '全部类型' ? topicClass.value : undefined,
      area: area.value !== '全部地区' ? area.value : undefined,
      lang: lang.value !== '全部语言' ? lang.value : undefined,
      year: year.value !== '全部时间' ? year.value : undefined,
      orderBy: 'desc',
    }).then((data) => data.List as yysFullLibcrashsdk[]),
    [area, year, lang, topicClass, currentTopicId, orderBy],
  );

  const {
    data: vods,
    isSuccess,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    isFetching,
    
  } = useInfiniteQuery(
    ['filteredVods', area, year, lang, topicClass, currentTopicId, orderBy],
    ({ pageParam = 1 }) => fetchVods(pageParam),
    {
      getNextPageParam: (lastPage, allPages) => {
        if (lastPage === null) {
          return undefined;
        }
        const nextPage =
          lastPage.length === LIMIT_PER_PAGE ? allPages.length + 1 : undefined;
        return nextPage;
      },
      onSuccess: data => {
        if (data === null || data.pages[0] === null) {
          setResults([]);
        } else if (data.pages.length === 1) {
          if (data.pages[data.pages.length - 1] !== null) {
            setResults(data.pages.flat());
          }
        } else {
          if (data.pages[data.pages.length - 1] !== null) {
            setResults([
              ...results,
              ...data.pages[data.pages.length - 1].flat(),
            ]);
          }
        }
      },
      cacheTime: 0,
      staleTime: 0,
    },
  );

  useEffect(() => {
    setResults([]);
    
  }, [area, year, lang, topicClass, currentTopicId, orderBy]);

  
  
  
  
  

  const topicOptions: Array<yysBgvipsportUimanager> = useMemo(() => {
    if (navOptions) {
      return navOptions.map(x => ({
        id: x.type_id,
        name: x.type_name,
      }));
    }
    return [];
  }, [navOptions]);

  const options = navOptions?.find(x => x.type_id === currentTopicId);
  
  const underlineStyle = (option: number) => {
    
    if (option === currentTopicId) {
      return { backgroundColor: colors.primary, ...styles.underline };
    }
    return {};
  };

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: event => {
      const st = event.contentOffset.y;

      // if scroll down & y > 50
      if (st > lastContentOffset.value && st > SCROLL_THRESHOLD) {
        if (isCollapseEffect.value) {
          isCollapseEffect.value = false;
        } else if (!isFilterCollapse.value && !isCollapseEffect.value) {
          isCollapseEffect.value = true;
          isFilterCollapse.value = true;
        }
      }

      
      if (st < lastContentOffset.value && st <= SCROLL_THRESHOLD) {
        if (isCollapseEffect.value) {
          isCollapseEffect.value = false;
        } else if (isFilterCollapse.value && !isCollapseEffect.value) {
          isCollapseEffect.value = true;
          isFilterCollapse.value = false;
        }
      }

      lastContentOffset.value = st;
    },
    onBeginDrag: e => {
      isScrolling.value = true;
    },
    onEndDrag: e => {
      isScrolling.value = false;
    },
  });

  
  useEffect(() => {
    if (topicOptions.length > 0) {
      const currentTopicName = topicOptions.find((topic) => topic.id === currentTopicId);

      if (currentTopicName) {
        yys_giftbutton_footballtrophy.catalogViewsAnalytics({
          category_id: currentTopicId.toString(),
          category_name: currentTopicName.name,
        });
      }
    }
  }, [currentTopicId, topicOptions]);
  

  useEffect(() => {
    const eventName = 'catalog';
    const eventValues = {
      pianku: 'pianku',
    };

    
    
    
    
    
    
    
    
    
    
  }, []);

  const renderNavItems = useCallback(
    ({ item }: { item: yysBgvipsportUimanager }) => {
      return (
        <TouchableOpacity
          style={{ ...styles.btn }}
          onPress={() => {
            reset();
            setCurrentTopicId(item.id);
            console.log(item.id, currentTopicId);
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontSize:
                currentTopicId === item.id
                  ? textVariants.body.fontSize
                  : textVariants.subBody.fontSize,
              color: currentTopicId === item.id ? colors.primary : colors.muted,
              fontWeight: currentTopicId === item.id ? '600' : '400',
            }}>
            {item.name}
          </Text>
          <View style={underlineStyle(item.id)} />
        </TouchableOpacity>
      );
    },
    [currentTopicId],
  );

  const renderVods = useCallback(
    ({ item, index }: { item: yysFullLibcrashsdk; index: number }) => {
      return (
        <View
          style={{
            marginBottom: spacing.s,
            marginRight:
              index % CARDS_PER_ROW === CARDS_PER_ROW - 1 ? 0 : MARGIN_RIGHT,
          }}>
          <VodCard
            vod_pic={item?.vod_pic}
            vod_name={item?.vod_name}
            vodImageStyle={{
              width: cardWidth,
              height: cardHeight,
            }}
            onPress={() => {
              dispatch(playVod(item));
              navigation.navigate('播放IOS', {
                vod_id: item?.vod_id,
              });

              
              const currentTopicName = topicOptions.find((topic) => topic.id === currentTopicId);

              if (currentTopicName) {
                yys_giftbutton_footballtrophy.catalogClicksAnalytics({
                  category_id: currentTopicId.toString(),
                  category_name: currentTopicName.name,
                });
              }
              
            }}
          />
        </View>
      );
    },
    [[topicOptions, currentTopicId],],
  );

  return (
    <>
      <ScreenContainer>
        <TitleWithBackButtonHeader
          title="片库"
          headerStyle={{ marginBottom: spacing.s }}
        />
        <Animated.View>
          <FlatList
            data={topicOptions}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={renderNavItems}
          />
        </Animated.View>
        <Animated.View style={{ paddingBottom: spacing.xxs }}>
          {options && (
            <Animated.View style={contentStyle}>
              <VodTopicFilter
                callback={setOrderBy}
                init={orderBy}
                options={ORDER_BY_OPTIONS}
              />
              <VodTopicFilter
                callback={setTopicClass}
                init={topicClass}
                options={[
                  '全部类型',
                  ...options.type_extend_obj.class.split(','),
                ].map(x => sameTextAndValueObj(x))}
              />
              <VodTopicFilter
                callback={setArea}
                init={area}
                options={[
                  '全部地区',
                  ...options.type_extend_obj.area.split(','),
                ].map(x => sameTextAndValueObj(x))}
              />
              <VodTopicFilter
                callback={setLang}
                init={lang}
                options={[
                  '全部语言',
                  ...options.type_extend_obj.lang.split(','),
                ].map(x => sameTextAndValueObj(x))}
              />
              <VodTopicFilter
                callback={setYear}
                init={year}
                options={[
                  '全部时间',
                  ...options.type_extend_obj.year.split(','),
                ].map(x => sameTextAndValueObj(x))}
              />
            </Animated.View>
          )}
          <Animated.View
            style={{
              marginBottom: spacing.xs,
              backgroundColor: colors.background,
              padding: 0,
            }}>
            {options && (
              <Animated.View style={contentSummaryStyle}>
                <View
                  style={{
                    marginTop: spacing.s,
                    ...styles.collapedSummary,
                    justifyContent: 'space-between',
                  }}>
                  <View style={{ ...styles.collapedSummary, gap: 4 }}>
                    <Text style={{ ...textVariants.small, color: colors.muted }}>
                      {topicClass.text}
                    </Text>
                    <View
                      style={{
                        ...styles.dot,
                        backgroundColor: colors.primary,
                      }}
                    />
                    <Text style={{ ...textVariants.small, color: colors.muted }}>
                      {area.text}
                    </Text>
                    <View
                      style={{
                        ...styles.dot,
                        backgroundColor: colors.primary,
                      }}
                    />
                    <Text style={{ ...textVariants.small, color: colors.muted }}>
                      {lang.text}
                    </Text>
                    <View
                      style={{
                        ...styles.dot,
                        backgroundColor: colors.primary,
                      }}
                    />
                    <Text style={{ ...textVariants.small, color: colors.muted }}>
                      {year.text}
                    </Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => {
                      
                      isFilterCollapse.value = false;
                    }}>
                    <ArrowDownYellowSvg height={icons.sizes.l} width={icons.sizes.l} />
                  </TouchableOpacity>
                </View>
              </Animated.View>
            )}
          </Animated.View>
        </Animated.View>
        {vods && (
          <Animated.FlatList
            data={results}
            onScroll={scrollHandler}
            keyExtractor={(item: yysFullLibcrashsdk, index: number) => {
              return `#-${item?.vod_id}-${index}`;
            }}
            onEndReached={() => {
              if (hasNextPage) {
                fetchNextPage();
              }
            }}
            onEndReachedThreshold={0.4}
            columnWrapperStyle={{}}
            ListFooterComponent={
              <View style={{ ...styles.loading, marginBottom: spacing.xl }}>
                {hasNextPage && (
                  <FastImage
                    style={{ height: 80, width: 80 }}
                    source={require('../../../../static/images/lessFullscreenmaxChatbotphoto.gif')}
                    resizeMode={'contain'}
                  />
                )}
                {!(isFetchingNextPage || isFetching) &&
                  !hasNextPage &&
                  results.length > 0 && (
                    <Text style={{ ...textVariants.body, color: colors.muted }}>
                      没有更多了
                    </Text>
                  )}
                {!(isFetchingNextPage || isFetching) &&
                  !hasNextPage &&
                  results.length == 0 && (
                    <View style={{ marginTop: 10 }}>
                      <EmptyList description={'暂无数据'} />
                    </View>
                  )}
              </View>
            }
            numColumns={CARDS_PER_ROW}
            renderItem={renderVods}
          />
        )}
      </ScreenContainer>
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 100,
    marginTop: 10,
  },
  btn: {
    paddingRight: 20,
  },
  underline: {
    marginTop: 7,
    height: 4,
    width: '50%',
    borderRadius: 20,
    alignSelf: 'center',
  },
  listView: {
    flex: 1,
  },
  collapedSummary: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  dot: {
    height: 3,
    width: 3,
    marginTop: 3,
    borderRadius: 999,
  },
  loading: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
  },
});
