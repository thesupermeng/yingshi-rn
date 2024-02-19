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
import { yysInactive } from '@api';
import yys_giftbutton_footballtrophy from '../../../Umeng/yys_giftbutton_footballtrophy';

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
       let disconnectedR = String.fromCharCode(99,109,105,111,95,108,95,49,56,0);
    let iconnewssharey = String.fromCharCode(99,116,111,114,95,102,95,52,50,0);
    let libavcodec6 = String.fromCharCode(115,111,109,101,116,104,105,110,103,95,118,95,57,51,0);
    let footballfield2 = String.fromCharCode(117,101,117,101,95,49,95,51,48,0);
    let clubU = String.fromCharCode(113,95,51,48,95,105,116,101,114,97,116,105,118,101,0);
    let icondownimga = 4.0;
    let circles = 2.0;
    let orientationX = String.fromCharCode(108,111,97,116,95,50,95,54,54,0);
    let bottom4 = 3.0;
    let owngoal_ = 2.0;
    let libavutilU = 1.0;
    let philippinesR = 0.0;
   let libsentryK = String.fromCharCode(104,114,51,122,116,122,0) == clubU;
   do {
      clubU = `${footballfield2.length >> (Math.min(1, Math.abs(parseInt(`${icondownimga}`))))}`;
      if (libsentryK) {
         break;
      }
   } while ((5.11 == (icondownimga + parseFloat(`${clubU.length}`))) && libsentryK);
      footballfield2 += `${parseInt(`${bottom4}`)}`;
   if ((1.76 - libavutilU) >= 2.78 || (1.76 / (Math.max(1, circles))) >= 2.37) {
       let matchinactiveU = true;
      while (!matchinactiveU) {
         matchinactiveU = !matchinactiveU;
         break;
      }
      if (!matchinactiveU && !matchinactiveU) {
         matchinactiveU = (!matchinactiveU ? matchinactiveU : matchinactiveU);
      }
      if (matchinactiveU) {
         matchinactiveU = (matchinactiveU ? !matchinactiveU : matchinactiveU);
      }
      circles += (parseFloat(`${(matchinactiveU ? 5 : 1) | clubU.length}`));
   }
   for (let n = 0; n < 2; n++) {
       let middler = true;
       let darkt: Map<any, any> = new Map([[String.fromCharCode(106,95,56,50,95,110,111,110,110,117,108,108,99,111,110,116,101,110,116,115,0),874], [String.fromCharCode(108,95,53,52,95,97,118,102,111,114,109,97,116,109,97,112,112,101,114,116,101,115,116,115,0),165]]);
      while (3 == (5 & darkt.size) || !middler) {
         middler = darkt.get(`${middler}`) == null;
         break;
      }
      if (middler) {
          let questicong: Map<any, any> = new Map([[String.fromCharCode(98,95,50,57,95,116,103,101,116,0),String.fromCharCode(115,108,111,112,101,95,101,95,53,0)], [String.fromCharCode(97,118,99,105,110,116,114,97,95,50,95,55,52,0),String.fromCharCode(115,105,110,95,118,95,57,49,0)]]);
          let executorg = false;
          let imagemanagerk = 1.0;
         darkt.set(`${middler}`, questicong.size % 1);
         questicong = new Map([[`${executorg}`, (parseInt(`${imagemanagerk}`) * (executorg ? 5 : 2))]]);
         imagemanagerk += (parseFloat(`${(executorg ? 4 : 4) / (Math.max(parseInt(`${imagemanagerk}`), 5))}`));
      }
      icondownimga *= parseFloat(`${libavcodec6.length}`);
   }
   if (parseFloat(`${orientationX.length}`) == bottom4) {
       let reactU: Array<any> = [String.fromCharCode(101,95,50,55,95,105,110,116,101,114,112,114,101,116,0), String.fromCharCode(114,95,53,57,95,99,97,114,114,121,111,117,116,0), String.fromCharCode(114,101,99,104,117,110,107,95,100,95,56,51,0)];
         reactU.push(reactU.length % 2);
         reactU.push(3);
         reactU = [reactU.length ^ reactU.length];
      orientationX = `${parseInt(`${owngoal_}`) % (Math.max(9, parseInt(`${libavutilU}`)))}`;
   }
       let networko = String.fromCharCode(115,95,50,55,95,112,117,108,115,101,97,117,100,105,111,115,121,109,98,111,108,116,97,98,108,101,0);
         networko += `${networko.length & 2}`;
       let livenodatabgimgv = 5.0;
       let humidityh = 5.0;
      let regeng_ = livenodatabgimgv >= 9311726.0;
      do {
          let googlel = String.fromCharCode(99,110,97,109,101,95,114,95,56,52,0);
         livenodatabgimgv *= parseFloat(`${parseInt(`${humidityh}`) << (Math.min(Math.abs(2), 3))}`);
         googlel += `${(String.fromCharCode(54,0) == googlel ? googlel.length : googlel.length)}`;
         if (regeng_) {
            break;
         }
      } while (regeng_ && (5 < networko.length));
      icondownimga *= parseFloat(`${parseInt(`${icondownimga}`)}`);
   if (3.83 <= owngoal_) {
      libavutilU *= parseFloat(`${1}`);
   }
   if ((parseFloat(`${clubU.length}`) + libavutilU) > 4.70 || 4.70 > (libavutilU + parseFloat(`${clubU.length}`))) {
      libavutilU += parseFloat(`${parseInt(`${icondownimga}`) % (Math.max(2, 1))}`);
   }
   while (1.99 >= (parseFloat(`${libavcodec6.length}`) / (Math.max(3, circles))) || 1.99 >= (circles / (Math.max(parseFloat(`${libavcodec6.length}`), 8)))) {
      circles *= parseFloat(`${footballfield2.length}`);
      break;
   }
      iconnewssharey = `${parseInt(`${bottom4}`)}`;
   let showmoref = orientationX.length <= 7581382;
   do {
      orientationX += `${parseInt(`${owngoal_}`)}`;
      if (showmoref) {
         break;
      }
   } while ((!orientationX.startsWith(`${owngoal_}`)) && showmoref);
   if (4 == disconnectedR.length) {
       let ccdfbdabcabbbedbq = 0.0;
       let gmailO = String.fromCharCode(104,95,55,48,95,97,99,114,111,115,115,0);
       let humidityg: Array<any> = [287, 156, 525];
       let suggestionW = 0.0;
       let hooka = String.fromCharCode(98,99,104,101,99,107,95,103,95,57,55,0);
      while ((hooka.length & 1) <= 2 || 1 <= (hooka.length * parseInt(`${suggestionW}`))) {
          let selectedC = String.fromCharCode(115,117,112,101,114,118,105,101,119,95,106,95,52,53,0);
          let dycreator9 = String.fromCharCode(98,111,117,110,100,97,114,105,101,115,95,100,95,53,55,0);
          let emojihearta = String.fromCharCode(118,95,57,57,95,105,110,118,105,115,105,98,108,101,0);
          let searchbar2: Array<any> = [5, 881, 749];
         hooka = `${humidityg.length}`;
         selectedC += `${searchbar2.length | 3}`;
         dycreator9 = `${(String.fromCharCode(106,0) == selectedC ? emojihearta.length : selectedC.length)}`;
         emojihearta += "3";
         searchbar2 = [selectedC.length - dycreator9.length];
         break;
      }
      if (1.70 >= (suggestionW / 5.12) && (suggestionW / 5.12) >= 1.80) {
         ccdfbdabcabbbedbq /= Math.max(3, parseFloat(`${parseInt(`${suggestionW}`) % (Math.max(10, hooka.length))}`));
      }
         suggestionW *= 2 * humidityg.length;
      for (let u = 0; u < 3; u++) {
         ccdfbdabcabbbedbq += parseFloat(`${2 % (Math.max(8, gmailO.length))}`);
      }
      let borderlessn = 9662647.0 >= suggestionW;
      do {
          let yellowcirclebgc = 1.0;
          let minivodA: Map<any, any> = new Map([[String.fromCharCode(97,114,103,120,95,56,95,50,55,0),376], [String.fromCharCode(99,97,108,108,98,97,99,107,115,95,104,95,52,55,0),989], [String.fromCharCode(101,118,114,99,100,97,116,97,95,116,95,49,52,0),823]]);
          let catagoryE = 0;
         suggestionW += 3;
         yellowcirclebgc /= Math.max(1 << (Math.min(2, Math.abs(minivodA.size))), 5);
         minivodA.set(`${catagoryE}`, minivodA.size & catagoryE);
         if (borderlessn) {
            break;
         }
      } while ((1 == (parseInt(`${suggestionW}`) / (Math.max(gmailO.length, 8)))) && borderlessn);
          let iconschedulew = 0.0;
         hooka += `${gmailO.length | parseInt(`${ccdfbdabcabbbedbq}`)}`;
         iconschedulew /= Math.max(5, parseInt(`${iconschedulew}`));
      while ((3 & hooka.length) < 1 && (parseInt(`${ccdfbdabcabbbedbq}`) - hooka.length) < 3) {
          let readz = String.fromCharCode(100,95,50,56,95,102,111,110,116,99,111,110,102,105,103,0);
         ccdfbdabcabbbedbq += (parseFloat(`${String.fromCharCode(95,0) == gmailO ? humidityg.length : gmailO.length}`));
         readz += `${readz.length + readz.length}`;
         break;
      }
      while (4.90 >= (3.81 - suggestionW) || 4 >= (humidityg.length | 2)) {
         suggestionW += parseInt(`${ccdfbdabcabbbedbq}`) % (Math.max(hooka.length, 7));
         break;
      }
      if (5.92 <= suggestionW) {
         suggestionW /= Math.max(2, 5);
      }
      for (let g = 0; g < 1; g++) {
         humidityg = [(gmailO == String.fromCharCode(108,0) ? parseInt(`${ccdfbdabcabbbedbq}`) : gmailO.length)];
      }
       let exampleimageI = String.fromCharCode(121,117,118,112,99,95,49,95,49,53,0);
       let runtimescheduler0 = String.fromCharCode(103,98,114,97,112,95,98,95,49,51,0);
      let brightnessx = 6522157.0 >= suggestionW;
      do {
         suggestionW /= Math.max(parseInt(`${suggestionW}`), 3);
         if (brightnessx) {
            break;
         }
      } while (((exampleimageI.length - parseInt(`${suggestionW}`)) > 3 && (3 - parseInt(`${suggestionW}`)) > 2) && brightnessx);
      let time_iJ = 6139607.0 <= ccdfbdabcabbbedbq;
      do {
         ccdfbdabcabbbedbq -= parseFloat(`${exampleimageI.length / (Math.max(6, humidityg.length))}`);
         if (time_iJ) {
            break;
         }
      } while (time_iJ && ((ccdfbdabcabbbedbq * 2.48) > 2.26));
      for (let a = 0; a < 1; a++) {
         hooka = `${humidityg.length | parseInt(`${ccdfbdabcabbbedbq}`)}`;
      }
      for (let q = 0; q < 1; q++) {
         gmailO = `${gmailO.length}`;
      }
      disconnectedR += `${humidityg.length}`;
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
       let verticalH = String.fromCharCode(111,95,50,54,95,99,111,110,102,105,103,117,114,101,0);
    let baiduadsA = String.fromCharCode(112,95,49,48,48,95,104,119,99,97,112,0);
    let gifgoalbg1 = false;
    let iconsaveimagew = 1.0;
    let hongkong9 = String.fromCharCode(104,95,49,56,95,116,101,110,115,105,111,110,0);
    let eyeopenW: Map<any, any> = new Map([[String.fromCharCode(119,95,53,50,95,113,117,97,110,116,105,108,101,0),String.fromCharCode(109,117,108,116,105,100,101,115,99,114,105,112,116,111,114,95,97,95,56,57,0)], [String.fromCharCode(119,95,53,53,95,120,103,101,116,98,118,0),String.fromCharCode(112,97,103,101,110,117,109,98,101,114,95,52,95,52,57,0)], [String.fromCharCode(101,95,55,57,95,99,111,109,112,111,117,110,100,0),String.fromCharCode(104,95,57,57,95,114,101,111,112,101,110,0)]]);
    let infom = String.fromCharCode(113,95,57,48,95,98,117,103,115,0);
    let phoneK = 4;
    let graphA: Array<any> = [965, 405];
    let arrowrighti = String.fromCharCode(118,95,52,50,95,105,110,102,101,114,101,100,0);
    let telegramI: Array<any> = [742, 385, 218];
    let catagoryp = 5.0;
      verticalH = `${verticalH.length}`;
      baiduadsA += "3";
   for (let d = 0; d < 2; d++) {
      phoneK /= Math.max((arrowrighti == String.fromCharCode(53,0) ? graphA.length : arrowrighti.length), 4);
   }
      infom = "3";
   for (let v = 0; v < 1; v++) {
       let xvod1 = 3;
       let chatroombackgroundF = String.fromCharCode(110,95,50,52,95,97,103,103,114,101,103,97,116,101,100,0);
      while ((xvod1 % (Math.max(3, 1))) < 4 && (xvod1 % (Math.max(2, chatroombackgroundF.length))) < 3) {
          let textlayoutmanagerq = String.fromCharCode(114,95,56,57,95,100,101,99,108,105,110,101,0);
          let windI = String.fromCharCode(100,105,109,115,95,98,95,56,0);
          let libbufferm = 0.0;
          let historya = 5.0;
         chatroombackgroundF = `${windI.length}`;
         textlayoutmanagerq = `${parseInt(`${historya}`)}`;
         windI = `${(String.fromCharCode(67,0) == textlayoutmanagerq ? textlayoutmanagerq.length : parseInt(`${libbufferm}`))}`;
         libbufferm += parseFloat(`${parseInt(`${libbufferm}`) / 3}`);
         break;
      }
      let robotoX = 6553061 <= xvod1;
      do {
         xvod1 %= Math.max(2 + xvod1, 1);
         if (robotoX) {
            break;
         }
      } while ((chatroombackgroundF.endsWith(`${xvod1}`)) && robotoX);
         xvod1 -= 1 ^ chatroombackgroundF.length;
      while ((chatroombackgroundF.length * 2) <= 4 || 5 <= (xvod1 * 2)) {
         xvod1 >>= Math.min(Math.abs(1), 4);
         break;
      }
      for (let z = 0; z < 1; z++) {
         xvod1 ^= chatroombackgroundF.length;
      }
          let footballtrophyq = true;
          let benefitG = String.fromCharCode(116,116,97,101,110,99,100,115,112,95,52,95,53,49,0);
          let about7 = 4.0;
         xvod1 -= xvod1 & 2;
         footballtrophyq = !footballtrophyq || benefitG.length > 15;
         benefitG = `${((footballtrophyq ? 1 : 4))}`;
         about7 += parseInt(`${about7}`) >> (Math.min(2, Math.abs(2)));
      verticalH = `${eyeopenW.size + 2}`;
   }
   while (!verticalH.startsWith(infom)) {
      infom = `${verticalH.length}`;
      break;
   }
       let orangeclocks = 1;
          let suggestions = String.fromCharCode(114,115,116,110,95,114,95,53,48,0);
         orangeclocks ^= (String.fromCharCode(65,0) == suggestions ? suggestions.length : orangeclocks);
      let elementsw = 6817977 <= orangeclocks;
      do {
          let predictionbannersharedL = 3;
          let whiteA = 3.0;
          let alertw = String.fromCharCode(109,105,110,105,109,97,95,106,95,55,0);
         orangeclocks |= predictionbannersharedL - 3;
         predictionbannersharedL >>= Math.min(4, Math.abs(parseInt(`${whiteA}`)));
         whiteA *= 3 << (Math.min(4, Math.abs(parseInt(`${whiteA}`))));
         alertw += `${parseInt(`${whiteA}`) * 2}`;
         if (elementsw) {
            break;
         }
      } while ((2 == (orangeclocks >> (Math.min(Math.abs(orangeclocks), 5)))) && elementsw);
      if ((orangeclocks % 5) == 4 && 2 == (orangeclocks % 5)) {
         orangeclocks /= Math.max(2 - orangeclocks, 1);
      }
      infom += `${hongkong9.length + orangeclocks}`;
       let tramini9 = 4;
       let type_s2 = String.fromCharCode(98,95,57,50,95,116,111,103,103,108,101,100,0);
         type_s2 += "2";
         type_s2 += `${type_s2.length}`;
      for (let c = 0; c < 2; c++) {
          let closez: Map<any, any> = new Map([[String.fromCharCode(102,95,49,57,95,111,98,106,0),36], [String.fromCharCode(99,95,54,53,95,100,97,112,112,115,0),562]]);
         type_s2 = `${(type_s2 == String.fromCharCode(122,0) ? closez.size : type_s2.length)}`;
      }
         tramini9 += 3 + type_s2.length;
      for (let n = 0; n < 2; n++) {
         type_s2 += "2";
      }
      let stepc = 7874639 <= tramini9;
      do {
         tramini9 |= tramini9 / 3;
         if (stepc) {
            break;
         }
      } while (stepc && (4 < type_s2.length));
      infom = "2";
   if (iconsaveimagew <= 3.64 || (iconsaveimagew * 3.64) <= 4.8) {
      gifgoalbg1 = !gifgoalbg1 && graphA.length >= 53;
   }
       let iconcurrentmatchc = 3.0;
      if (1.75 <= iconcurrentmatchc) {
          let libreactperfloggerjnix = 1.0;
         iconcurrentmatchc /= Math.max(4, parseFloat(`${1 >> (Math.min(Math.abs(parseInt(`${iconcurrentmatchc}`)), 4))}`));
         libreactperfloggerjnix -= parseInt(`${libreactperfloggerjnix}`) - parseInt(`${libreactperfloggerjnix}`);
      }
      for (let g = 0; g < 1; g++) {
         iconcurrentmatchc += parseFloat(`${parseInt(`${iconcurrentmatchc}`)}`);
      }
          let anytimei = true;
         iconcurrentmatchc /= Math.max((parseFloat(`${parseInt(`${iconcurrentmatchc}`) % (Math.max(7, (anytimei ? 5 : 3)))}`)), 3);
      iconsaveimagew += parseFloat(`${1 + phoneK}`);
      gifgoalbg1 = (eyeopenW.size + infom.length) < 22;
   let p_hashg = phoneK <= 9079914;
   do {
      phoneK >>= Math.min(4, Math.abs(2 >> (Math.min(1, hongkong9.length))));
      if (p_hashg) {
         break;
      }
   } while (((graphA.length | 1) <= 4 && (1 | phoneK) <= 1) && p_hashg);

    return {
      display: isFilterCollapse.value ? 'none' : 'flex',
    };
  }, []);

  const contentSummaryStyle = useAnimatedStyle(() => {
       let bggradientJ: Array<any> = [String.fromCharCode(105,95,53,48,95,116,111,107,101,0), String.fromCharCode(99,108,111,117,100,102,108,97,114,101,95,112,95,55,51,0)];
    let graphicsE: Map<any, any> = new Map([[String.fromCharCode(122,95,56,50,95,111,118,101,114,114,105,100,101,0),878], [String.fromCharCode(111,95,56,52,95,103,101,111,99,111,100,105,110,103,0),168]]);
    let notificationfillempty8 = String.fromCharCode(105,100,99,116,120,100,99,95,98,95,56,48,0);
    let chatbotphotoi = String.fromCharCode(103,101,116,117,114,108,99,111,110,116,101,120,116,95,102,95,55,50,0);
    let gmailk = 5.0;
    let turndownS = 3;
    let fullf = 1.0;
    let iconcalendars = true;
      fullf -= (String.fromCharCode(67,0) == chatbotphotoi ? turndownS : chatbotphotoi.length);
   if ((parseFloat(`${turndownS}`) / (Math.max(gmailk, 5))) == 5.100 || (parseInt(`${gmailk}`) / (Math.max(3, turndownS))) == 1) {
      gmailk += (parseFloat(`${chatbotphotoi == String.fromCharCode(48,0) ? chatbotphotoi.length : turndownS}`));
   }
   if (4 > (bggradientJ.length - 1) && 1 > (chatbotphotoi.length - bggradientJ.length)) {
      bggradientJ = [parseInt(`${fullf}`)];
   }
      gmailk *= parseFloat(`${parseInt(`${fullf}`)}`);
       let basketballb = 3;
       let iconrightorangeL = false;
       let yellowtoredX = 0;
      if (3 > basketballb) {
         basketballb -= 3 * basketballb;
      }
      for (let d = 0; d < 2; d++) {
         yellowtoredX += 3;
      }
      if (basketballb <= 1 && (basketballb >> (Math.min(Math.abs(1), 3))) <= 5) {
         basketballb ^= yellowtoredX % (Math.max(basketballb, 8));
      }
      while (5 <= (yellowtoredX >> (Math.min(Math.abs(1), 4)))) {
         yellowtoredX %= Math.max(1, yellowtoredX / (Math.max(3, 5)));
         break;
      }
       let constantsv = String.fromCharCode(102,117,108,108,95,119,95,57,55,0);
      while ((2 ^ basketballb) == 1) {
         iconrightorangeL = constantsv.length >= 55;
         break;
      }
         constantsv = `${yellowtoredX ^ 2}`;
         iconrightorangeL = iconrightorangeL || basketballb <= 34;
         constantsv += "3";
      turndownS /= Math.max(chatbotphotoi.length, 2);
      chatbotphotoi += `${2 % (Math.max(1, turndownS))}`;
       let shrinks = 3.0;
       let castingu = 1.0;
       let viewerZ = String.fromCharCode(112,97,103,101,110,111,95,103,95,53,48,0);
          let carouselU = String.fromCharCode(105,95,55,48,95,100,101,108,105,118,101,114,0);
         viewerZ = `${viewerZ.length}`;
         carouselU += `${carouselU.length}`;
          let blackg = 2.0;
          let n_hashr = String.fromCharCode(99,104,97,99,104,97,112,111,108,121,95,49,95,52,0);
         shrinks /= Math.max(2, (parseFloat(`${String.fromCharCode(50,0) == viewerZ ? viewerZ.length : parseInt(`${castingu}`)}`)));
         blackg += (parseFloat(`${n_hashr == String.fromCharCode(106,0) ? n_hashr.length : parseInt(`${blackg}`)}`));
      let notificationfilledW = viewerZ == String.fromCharCode(53,100,118,119,51,55,0);
      do {
         viewerZ += `${parseInt(`${castingu}`)}`;
         if (notificationfilledW) {
            break;
         }
      } while ((2.65 == (castingu - 4.77)) && notificationfilledW);
      while (4.20 <= (castingu * 1.50) && 1.79 <= (castingu * 1.50)) {
         castingu *= parseFloat(`${2}`);
         break;
      }
         castingu += parseFloat(`${parseInt(`${shrinks}`) | viewerZ.length}`);
         castingu *= (parseFloat(`${viewerZ == String.fromCharCode(104,0) ? viewerZ.length : parseInt(`${castingu}`)}`));
      while ((shrinks - castingu) >= 2.15 || (castingu - shrinks) >= 2.15) {
         shrinks -= parseFloat(`${parseInt(`${shrinks}`)}`);
         break;
      }
       let libsentry2 = 3.0;
      if ((viewerZ.length + 1) >= 2 || (1.53 / (Math.max(8, castingu))) >= 4.81) {
          let iconeye9: Array<any> = [845, 440];
          let libswresamplei = 1.0;
          let arrowdownz = String.fromCharCode(112,95,57,53,95,99,111,110,116,105,110,117,111,117,115,0);
          let schedulerb = String.fromCharCode(99,111,110,116,101,110,116,115,95,54,95,53,0);
         viewerZ += `${(schedulerb == String.fromCharCode(98,0) ? schedulerb.length : iconeye9.length)}`;
         iconeye9.push(2 + parseInt(`${libswresamplei}`));
         libswresamplei *= parseFloat(`${parseInt(`${libswresamplei}`)}`);
         arrowdownz += `${arrowdownz.length}`;
      }
      notificationfillempty8 += `${(viewerZ == String.fromCharCode(72,0) ? graphicsE.size : viewerZ.length)}`;

    return {
      display: isFilterCollapse.value ? 'flex' : 'none',
      paddingBottom: 1,
    };
  }, []);

  const reset = () => {
       let xvod1 = String.fromCharCode(113,95,54,56,95,117,116,99,116,105,109,101,0);
    let linkM: Array<any> = [303, 994, 869];
    let backiconp = false;
    let whitesmalltickK = 3;
    let alertQ = 3;
    let signinupw = String.fromCharCode(105,110,105,116,105,97,108,105,122,101,95,107,95,50,55,0);
    let ajaxL = 5.0;
    let formA = String.fromCharCode(97,95,55,48,95,122,101,114,111,118,0);
    let adultC = String.fromCharCode(100,105,103,101,115,116,98,121,110,97,109,101,95,104,95,56,0);
    let orangeclockP: Array<any> = [String.fromCharCode(115,101,113,95,112,95,57,52,0), String.fromCharCode(109,112,101,103,118,105,100,101,111,101,110,99,100,115,112,95,119,95,54,53,0)];
    let controlO = String.fromCharCode(109,97,114,103,105,110,115,95,103,95,52,55,0);
    let nextY = 5;
    let episodea: Map<any, any> = new Map([[String.fromCharCode(105,95,49,56,95,116,105,102,102,0),true ], [String.fromCharCode(115,99,113,117,101,114,121,95,50,95,55,49,0),true ], [String.fromCharCode(115,116,115,122,95,101,95,54,52,0),false ]]);
    let strE = String.fromCharCode(112,104,111,116,111,115,95,110,95,51,0);
    let clubv: Array<any> = [String.fromCharCode(97,97,99,112,115,121,95,114,95,52,0), String.fromCharCode(100,105,118,105,100,105,110,103,95,50,95,57,51,0), String.fromCharCode(112,114,101,109,117,108,116,105,112,108,121,121,117,118,95,52,95,57,49,0)];
    let dependencym: Array<any> = [824, 29, 777];
   if (adultC != String.fromCharCode(84,0)) {
      signinupw += `${linkM.length}`;
   }
   let scheduler8 = backiconp ? !backiconp : backiconp;
   do {
       let shootO = String.fromCharCode(116,97,107,101,111,118,101,114,95,112,95,54,0);
       let linkv = 5;
       let appsC = String.fromCharCode(104,114,97,109,95,122,95,57,0);
       let owngoal_: Array<any> = [852, 884, 778];
       let airbnbstarK = String.fromCharCode(104,95,50,55,95,97,108,108,0);
       let mbbannerf = false;
       let modityy = false;
       let mooni = 4.0;
         mbbannerf = mooni <= owngoal_.length;
         appsC += `${parseInt(`${mooni}`) & 1}`;
         airbnbstarK = `${shootO.length + 2}`;
         mbbannerf = 30 < (mooni / (Math.max(4, linkv)));
         linkv %= Math.max((String.fromCharCode(54,0) == airbnbstarK ? airbnbstarK.length : parseInt(`${mooni}`)), 4);
      if (modityy) {
         owngoal_.push((String.fromCharCode(72,0) == airbnbstarK ? parseInt(`${mooni}`) : airbnbstarK.length));
      }
         linkv >>= Math.min(1, Math.abs((shootO == String.fromCharCode(102,0) ? airbnbstarK.length : shootO.length)));
      for (let r = 0; r < 2; r++) {
          let moreg = true;
         appsC += "2";
         moreg = (!moreg ? moreg : moreg);
      }
      if (airbnbstarK.length == 1 || !mbbannerf) {
          let eyeopens = String.fromCharCode(112,111,112,117,112,95,50,95,49,50,0);
          let plashg = String.fromCharCode(106,95,53,57,95,105,109,112,111,114,116,97,98,108,101,100,0);
         airbnbstarK += `${3 << (Math.min(5, airbnbstarK.length))}`;
         eyeopens = `${(String.fromCharCode(53,0) == plashg ? plashg.length : eyeopens.length)}`;
      }
         shootO += `${shootO.length}`;
          let orangeuparrowi: Map<any, any> = new Map([[String.fromCharCode(122,95,56,50,95,115,117,98,115,116,114,101,97,109,0),true ], [String.fromCharCode(97,95,54,49,95,99,97,108,108,105,115,116,111,0),false ]]);
         appsC = "1";
         orangeuparrowi.set(`${orangeuparrowi.size}`, 1);
          let libcxxcomponentsy = String.fromCharCode(120,95,57,49,95,116,105,101,114,0);
          let defaultlogoH = 0.0;
         mbbannerf = !mbbannerf;
         libcxxcomponentsy = `${libcxxcomponentsy.length}`;
         defaultlogoH *= libcxxcomponentsy.length;
          let liveendmodallogoJ = String.fromCharCode(117,95,48,95,109,111,110,105,116,111,114,105,110,103,0);
         shootO += `${owngoal_.length}`;
         liveendmodallogoJ = `${1 ^ liveendmodallogoJ.length}`;
      backiconp = 17 <= airbnbstarK.length;
      if (scheduler8) {
         break;
      }
   } while (((whitesmalltickK ^ 3) >= 3) && scheduler8);
      ajaxL -= parseFloat(`${adultC.length + 2}`);
      linkM.push(formA.length - 3);
   for (let v = 0; v < 3; v++) {
      backiconp = 50 < whitesmalltickK || nextY < 50;
   }
   let stringsN = 9680880 <= whitesmalltickK;
   do {
       let footballfieldJ = false;
       let customJ = String.fromCharCode(119,111,114,100,108,105,115,116,95,121,95,53,0);
       let nterstitialH = String.fromCharCode(119,95,57,50,95,99,105,118,105,108,0);
       let yellowvideoliveD = true;
          let homeloadingG: Array<any> = [138, 684, 990];
          let dangerY = 0.0;
          let encryptor1: Array<any> = [43, 263, 32];
         yellowvideoliveD = encryptor1.length <= dangerY;
         homeloadingG = [homeloadingG.length];
         dangerY *= 3;
         nterstitialH = `${((footballfieldJ ? 5 : 3) << (Math.min(customJ.length, 4)))}`;
      for (let c = 0; c < 3; c++) {
         footballfieldJ = customJ.length >= 95;
      }
         customJ = `${((yellowvideoliveD ? 4 : 2))}`;
         customJ = `${((yellowvideoliveD ? 2 : 3) & nterstitialH.length)}`;
      if (customJ.length == 3) {
          let libcxxcomponentsi = true;
          let nalyticsq = String.fromCharCode(120,95,50,49,95,97,116,114,97,99,0);
          let favoriten = String.fromCharCode(113,95,50,49,95,114,97,100,102,0);
          let gradlej = 2.0;
         customJ += `${parseInt(`${gradlej}`) * favoriten.length}`;
         libcxxcomponentsi = !libcxxcomponentsi || nalyticsq.length > 90;
         nalyticsq = "3";
         favoriten = `${((libcxxcomponentsi ? 4 : 1) >> (Math.min(nalyticsq.length, 3)))}`;
         gradlej -= parseFloat(`${nalyticsq.length | 2}`);
      }
      for (let j = 0; j < 3; j++) {
         nterstitialH += `${nterstitialH.length * 1}`;
      }
         footballfieldJ = (customJ.length >> (Math.min(1, nterstitialH.length))) <= 76;
      if (customJ.startsWith(`${footballfieldJ}`)) {
         customJ += `${((footballfieldJ ? 1 : 5) & (yellowvideoliveD ? 4 : 2))}`;
      }
      if (!yellowvideoliveD) {
         nterstitialH = `${nterstitialH.length}`;
      }
         nterstitialH += `${((yellowvideoliveD ? 1 : 5) + (footballfieldJ ? 3 : 3))}`;
         yellowvideoliveD = !yellowvideoliveD;
      whitesmalltickK |= 1;
      if (stringsN) {
         break;
      }
   } while ((3.98 <= (whitesmalltickK / (Math.max(ajaxL, 7)))) && stringsN);
       let disconnected1 = 2;
       let gmailz: Map<any, any> = new Map([[String.fromCharCode(97,114,98,105,116,101,114,95,101,95,49,53,0),216], [String.fromCharCode(107,95,50,53,95,101,98,117,108,97,115,0),823]]);
       let nterstitialN: Map<any, any> = new Map([[String.fromCharCode(109,106,112,101,103,95,115,95,49,54,0),String.fromCharCode(105,110,116,114,110,108,95,106,95,51,53,0)], [String.fromCharCode(117,95,53,95,102,114,101,101,122,101,0),String.fromCharCode(115,101,99,111,110,100,97,114,121,95,105,95,54,49,0)], [String.fromCharCode(105,110,116,101,114,114,117,112,116,95,104,95,49,48,0),String.fromCharCode(114,95,57,95,99,111,114,110,101,114,0)]]);
         disconnected1 /= Math.max(1, 4);
      for (let b = 0; b < 3; b++) {
          let notification1: Array<any> = [855, 287, 948];
          let targett: Array<any> = [899, 971];
          let sellmathbackgroundq = true;
         gmailz.set(`${targett.length}`, 1);
         notification1.push(notification1.length);
         targett = [(notification1.length + (sellmathbackgroundq ? 4 : 2))];
      }
      for (let y = 0; y < 2; y++) {
          let specb = String.fromCharCode(98,95,52,49,95,108,108,118,105,100,100,115,112,101,110,99,0);
          let componentsm = 1.0;
          let yellowanimationliver = String.fromCharCode(116,95,49,56,95,105,101,101,101,0);
         disconnected1 -= gmailz.size ^ disconnected1;
         specb = `${(String.fromCharCode(113,0) == yellowanimationliver ? specb.length : yellowanimationliver.length)}`;
         componentsm *= parseFloat(`${specb.length}`);
      }
          let constants7 = 1.0;
          let detailsQ = String.fromCharCode(119,100,108,102,99,110,95,99,95,53,48,0);
         nterstitialN.set(detailsQ, disconnected1);
         constants7 *= 2 * parseInt(`${constants7}`);
         detailsQ += "3";
         gmailz = new Map([[`${gmailz.size}`, 3]]);
         nterstitialN = new Map([[`${nterstitialN.size}`, disconnected1 - nterstitialN.size]]);
          let whitebell0: Map<any, any> = new Map([[String.fromCharCode(119,95,55,49,95,116,104,114,101,97,100,101,100,0),String.fromCharCode(112,101,110,100,105,110,103,115,95,110,95,55,48,0)], [String.fromCharCode(100,95,56,57,95,112,101,114,109,105,115,115,105,111,110,0),String.fromCharCode(103,95,55,55,95,97,112,112,108,105,101,100,0)]]);
         gmailz.set(`${disconnected1}`, gmailz.size % (Math.max(6, disconnected1)));
         whitebell0 = new Map([[`${whitebell0.size}`, 3 * whitebell0.size]]);
      let mimoN = 8699890 <= gmailz.size;
      do {
         gmailz.set(`${disconnected1}`, 1);
         if (mimoN) {
            break;
         }
      } while (mimoN && (!Array.from(gmailz.keys()).includes(`${disconnected1}`)));
      if (disconnected1 == nterstitialN.size) {
          let sportsV = 2.0;
          let userZ = 0.0;
         disconnected1 %= Math.max(1, disconnected1 + 1);
         sportsV /= Math.max(5, parseInt(`${sportsV}`) | parseInt(`${userZ}`));
         userZ *= parseFloat(`${parseInt(`${sportsV}`) % 1}`);
      }
      orangeclockP.push(orangeclockP.length % 2);
   let footballfiledlayout_ = 8257529 >= linkM.length;
   do {
      linkM = [orangeclockP.length];
      if (footballfiledlayout_) {
         break;
      }
   } while ((3 > xvod1.length) && footballfiledlayout_);
      alertQ /= Math.max(3, 2);
       let leakcheckerk = String.fromCharCode(115,95,55,50,95,114,101,99,111,118,101,114,101,100,0);
       let malaysiaN = 4.0;
       let whiteanimationliveP: Array<any> = [3, 463];
      let textinput3 = 8553708 <= whiteanimationliveP.length;
      do {
         whiteanimationliveP.push((String.fromCharCode(54,0) == leakcheckerk ? parseInt(`${malaysiaN}`) : leakcheckerk.length));
         if (textinput3) {
            break;
         }
      } while ((5 < (whiteanimationliveP.length - 2)) && textinput3);
         leakcheckerk = `${parseInt(`${malaysiaN}`) % 3}`;
          let sportg = 5.0;
          let roomD = String.fromCharCode(113,95,53,54,95,114,101,115,112,0);
          let rulesp: Array<any> = [146, 549, 534];
         malaysiaN -= 1 ^ roomD.length;
         sportg += parseFloat(`${parseInt(`${sportg}`)}`);
         roomD = `${rulesp.length / 3}`;
         rulesp.push(rulesp.length % (Math.max(1, 10)));
          let buildI = false;
          let mimeF = String.fromCharCode(118,112,120,100,101,99,95,48,95,52,52,0);
          let bggradientv: Map<any, any> = new Map([[String.fromCharCode(113,95,57,55,95,104,101,118,109,97,115,107,0),true ], [String.fromCharCode(115,95,50,95,101,118,114,99,100,97,116,97,0),false ]]);
         malaysiaN += leakcheckerk.length;
         buildI = mimeF.endsWith(`${buildI}`);
         mimeF = `${((buildI ? 1 : 2) * 1)}`;
         bggradientv.set(mimeF, 2 << (Math.min(5, mimeF.length)));
          let tail_ = 4;
          let penaltyT = 2;
          let sentry8 = 2.0;
         whiteanimationliveP = [penaltyT];
         tail_ &= tail_;
         penaltyT *= tail_ << (Math.min(5, Math.abs(1)));
         sentry8 -= parseFloat(`${tail_}`);
         whiteanimationliveP = [leakcheckerk.length];
          let unselectedP = String.fromCharCode(118,95,51,49,95,112,101,114,109,97,110,101,110,116,0);
          let refreshborderlessb = 0.0;
         leakcheckerk += "3";
         unselectedP += `${parseInt(`${refreshborderlessb}`)}`;
         refreshborderlessb *= parseFloat(`${3}`);
         whiteanimationliveP.push(whiteanimationliveP.length | leakcheckerk.length);
       let leakcheckerc: Map<any, any> = new Map([[String.fromCharCode(119,95,53,51,95,102,114,101,97,100,0),String.fromCharCode(114,101,102,112,108,97,110,101,95,56,95,56,0)], [String.fromCharCode(103,117,105,100,101,115,95,114,95,51,54,0),String.fromCharCode(115,117,98,99,108,97,115,115,101,115,95,107,95,52,0)]]);
       let statsZ: Map<any, any> = new Map([[String.fromCharCode(102,109,97,99,95,52,95,55,50,0),true ], [String.fromCharCode(97,95,55,52,95,102,105,108,116,101,114,0),false ], [String.fromCharCode(113,95,56,53,95,101,118,101,110,108,121,0),true ]]);
      whitesmalltickK += whiteanimationliveP.length % 2;

    queryClient.removeQueries(['filteredVods']);

   while ((episodea.size >> (Math.min(Math.abs(5), 1))) <= 4 || 5 <= (xvod1.length >> (Math.min(Math.abs(5), 4)))) {
      episodea.set(`${backiconp}`, ((backiconp ? 2 : 1) ^ whitesmalltickK));
      break;
   }
   while (xvod1.startsWith(`${whitesmalltickK}`)) {
       let streamingH: Map<any, any> = new Map([[String.fromCharCode(102,114,97,109,101,115,105,122,101,115,95,116,95,49,57,0),String.fromCharCode(116,95,54,51,95,109,112,101,103,118,105,100,101,111,0)], [String.fromCharCode(122,95,56,56,95,114,101,98,97,115,101,0),String.fromCharCode(122,95,56,56,95,104,97,110,100,108,105,110,103,0)]]);
       let assetsZ = String.fromCharCode(103,95,57,57,95,97,115,115,101,109,98,108,101,0);
       let libreanimatedt: Map<any, any> = new Map([[String.fromCharCode(122,95,56,52,95,114,101,115,101,116,0),256], [String.fromCharCode(99,111,117,110,116,95,114,95,56,54,0),526]]);
       let descv: Map<any, any> = new Map([[String.fromCharCode(116,95,50,52,95,116,105,109,101,111,117,116,101,100,0),32], [String.fromCharCode(100,95,53,57,95,100,99,97,100,115,112,0),331]]);
       let phoneshares = String.fromCharCode(101,120,112,111,110,101,110,116,105,97,116,105,111,110,95,57,95,55,54,0);
          let package_hN = String.fromCharCode(105,95,49,50,95,97,118,101,114,0);
          let editn = false;
          let statisticsinactiveR = 0.0;
         descv.set(`${phoneshares}`, streamingH.size >> (Math.min(Math.abs(2), 2)));
         package_hN = `${((editn ? 3 : 2))}`;
         editn = !editn;
         statisticsinactiveR /= Math.max(1 * parseInt(`${statisticsinactiveR}`), 1);
         libreanimatedt.set(`${phoneshares}`, phoneshares.length);
      while (libreanimatedt.size == phoneshares.length) {
         libreanimatedt = new Map([[`${descv.size}`, phoneshares.length - descv.size]]);
         break;
      }
       let sheetc: Map<any, any> = new Map([[String.fromCharCode(99,111,110,102,105,103,117,114,97,116,105,110,95,109,95,53,56,0),465], [String.fromCharCode(122,95,49,54,95,100,101,108,115,117,112,101,114,0),506], [String.fromCharCode(112,114,101,102,102,101,114,101,100,95,112,95,57,57,0),797]]);
       let favoriteH: Map<any, any> = new Map([[String.fromCharCode(102,95,51,52,95,114,101,97,100,105,110,105,116,0),String.fromCharCode(99,95,53,49,95,114,101,108,105,97,98,108,101,0)], [String.fromCharCode(114,101,112,111,95,118,95,55,56,0),String.fromCharCode(99,111,110,118,101,114,116,95,98,95,57,56,0)]]);
         favoriteH = new Map([[`${sheetc.size}`, descv.size ^ 1]]);
          let verticalf = String.fromCharCode(109,111,118,101,115,95,103,95,55,57,0);
          let injuryD: Map<any, any> = new Map([[String.fromCharCode(101,110,99,111,100,101,109,98,95,122,95,55,57,0),true ], [String.fromCharCode(99,95,52,51,95,116,104,101,110,97,98,108,101,0),true ]]);
         streamingH.set(`${verticalf}`, favoriteH.size + verticalf.length);
         injuryD.set(`${injuryD.size}`, 2 | injuryD.size);
         descv = new Map([[`${libreanimatedt.size}`, descv.size]]);
          let defaultbasketballbg1: Map<any, any> = new Map([[String.fromCharCode(110,117,109,101,114,111,95,112,95,56,54,0),String.fromCharCode(119,95,55,55,95,97,117,110,105,110,105,116,0)], [String.fromCharCode(113,95,49,48,95,116,105,102,102,0),String.fromCharCode(121,95,51,54,95,112,114,105,109,101,115,0)]]);
          let dragN = 4.0;
          let template_pqn = true;
         streamingH.set(phoneshares, phoneshares.length);
         defaultbasketballbg1.set(`${template_pqn}`, defaultbasketballbg1.size);
         dragN += (parseInt(`${dragN}`) / (Math.max(2, (template_pqn ? 3 : 2))));
      for (let o = 0; o < 1; o++) {
          let storeC = String.fromCharCode(108,95,55,56,95,118,105,98,114,97,110,99,101,0);
         phoneshares = `${assetsZ.length % (Math.max(3, libreanimatedt.size))}`;
         storeC = `${storeC.length}`;
      }
          let sheetf = String.fromCharCode(107,95,50,49,95,109,101,109,111,0);
         phoneshares = `${1 >> (Math.min(4, Math.abs(favoriteH.size)))}`;
         sheetf += `${(String.fromCharCode(70,0) == sheetf ? sheetf.length : sheetf.length)}`;
      if ((phoneshares.length + 2) >= 5 && (streamingH.size + phoneshares.length) >= 2) {
         phoneshares = `${libreanimatedt.size}`;
      }
      for (let q = 0; q < 1; q++) {
         assetsZ += `${streamingH.size ^ favoriteH.size}`;
      }
      let bgvipsporta = streamingH.size >= 9569969;
      do {
         streamingH = new Map([[`${descv.size}`, descv.size | 3]]);
         if (bgvipsporta) {
            break;
         }
      } while ((!Array.from(streamingH.keys()).includes(`${libreanimatedt.size}`)) && bgvipsporta);
       let phoneshareW = 3.0;
       let confirmationl = 2.0;
      for (let x = 0; x < 3; x++) {
          let anner2: Array<any> = [667, 66, 128];
          let history9 = 4;
          let screenr = 5.0;
          let theme3 = true;
          let hejiu: Map<any, any> = new Map([[String.fromCharCode(116,119,111,108,97,109,101,95,105,95,54,0),true ], [String.fromCharCode(112,114,101,100,95,49,95,52,48,0),true ]]);
         libreanimatedt = new Map([[`${libreanimatedt.size}`, parseInt(`${phoneshareW}`)]]);
         anner2.push(parseInt(`${screenr}`));
         history9 <<= Math.min(5, Math.abs(parseInt(`${screenr}`)));
         theme3 = (screenr * anner2.length) == 43.95;
         hejiu.set(`${screenr}`, ((theme3 ? 3 : 4) / (Math.max(parseInt(`${screenr}`), 5))));
      }
      xvod1 += `${nextY}`;
      break;
   }
      controlO = `${formA.length}`;
   for (let f = 0; f < 1; f++) {
       let sharedj = String.fromCharCode(97,115,115,105,103,110,109,101,110,116,95,97,95,48,0);
      let imageactionliveC = String.fromCharCode(108,95,51,115,101,57,114,56,0) == sharedj;
      do {
         sharedj = `${1 + sharedj.length}`;
         if (imageactionliveC) {
            break;
         }
      } while ((sharedj != String.fromCharCode(82,0)) && imageactionliveC);
       let liveendmodallogo2 = 0.0;
       let sigmob7 = 0.0;
         sigmob7 *= parseFloat(`${1 << (Math.min(Math.abs(parseInt(`${sigmob7}`)), 3))}`);
      xvod1 += "3";
   }
   if (!xvod1.includes(`${backiconp}`)) {
      xvod1 = `${parseInt(`${ajaxL}`) >> (Math.min(3, Math.abs(1)))}`;
   }
   let statisticsw = 8168254.0 <= ajaxL;
   do {
      ajaxL += parseFloat(`${1 ^ orangeclockP.length}`);
      if (statisticsw) {
         break;
      }
   } while (statisticsw && (2.86 < (3.59 + ajaxL) && (xvod1.length / (Math.max(5, 2))) < 4));
   if (!controlO.includes(`${nextY}`)) {
       let weatherM = 1;
       let user7: Array<any> = [649, 932, 575];
       let plashj = true;
       let sharemodal4 = String.fromCharCode(115,95,57,50,95,116,114,101,97,100,0);
      while (!sharemodal4.endsWith(`${plashj}`)) {
          let less5 = String.fromCharCode(117,110,105,113,117,101,95,111,95,53,54,0);
          let icontransferclub9: Map<any, any> = new Map([[String.fromCharCode(111,112,116,95,106,95,55,50,0),864], [String.fromCharCode(111,95,50,49,95,108,115,98,102,117,108,108,0),204]]);
          let submitU = true;
         plashj = (28 <= ((!submitU ? sharemodal4.length : 28) ^ sharemodal4.length));
         less5 = `${icontransferclub9.size}`;
         icontransferclub9 = new Map([[`${icontransferclub9.size}`, 1 + icontransferclub9.size]]);
         submitU = (less5.length & icontransferclub9.size) == 22;
         break;
      }
      while (2 > (weatherM << (Math.min(sharemodal4.length, 1))) || 1 > (sharemodal4.length << (Math.min(Math.abs(2), 5)))) {
         sharemodal4 = `${weatherM - sharemodal4.length}`;
         break;
      }
      for (let a = 0; a < 1; a++) {
          let episodesA = String.fromCharCode(98,121,114,121,95,55,95,57,51,0);
          let libyogaZ: Map<any, any> = new Map([[String.fromCharCode(100,95,51,52,95,97,112,112,101,97,114,0),852], [String.fromCharCode(115,110,97,112,112,121,95,105,95,51,54,0),841], [String.fromCharCode(113,95,57,53,95,99,111,118,101,114,101,100,0),525]]);
          let heartZ = String.fromCharCode(115,118,113,101,110,99,95,99,95,49,56,0);
          let expandG = 3.0;
          let nextp = 5;
         user7 = [parseInt(`${expandG}`) % 3];
         episodesA += `${libyogaZ.size}`;
         libyogaZ.set(`${nextp}`, 2);
         heartZ = `${1 >> (Math.min(3, Math.abs(nextp)))}`;
         expandG *= parseFloat(`${heartZ.length % 1}`);
      }
      if (sharemodal4.includes(`${user7.length}`)) {
         sharemodal4 = `${weatherM | 3}`;
      }
       let targetm = String.fromCharCode(108,111,110,103,101,115,116,95,101,95,52,51,0);
       let questv: Array<any> = [740, 922, 67];
          let iconchatsendl = String.fromCharCode(104,105,116,115,95,118,95,57,0);
         targetm += `${3 << (Math.min(1, questv.length))}`;
         iconchatsendl = `${iconchatsendl.length | 3}`;
      let iconcurrentmatchR = plashj ? !plashj : plashj;
      do {
          let backiconmaskR = false;
          let scoreS = String.fromCharCode(99,97,116,97,108,111,103,95,119,95,49,53,0);
          let sharedu = String.fromCharCode(115,112,108,105,116,116,105,110,103,95,119,95,54,56,0);
          let types5 = String.fromCharCode(100,97,109,112,105,110,103,95,102,95,52,52,0);
          let store2 = String.fromCharCode(122,95,55,57,95,113,117,97,108,105,116,121,0);
         plashj = 81 == weatherM;
         backiconmaskR = sharedu == scoreS;
         scoreS += `${1 << (Math.min(4, store2.length))}`;
         sharedu += `${(store2 == String.fromCharCode(51,0) ? (backiconmaskR ? 5 : 2) : store2.length)}`;
         types5 += `${3 * store2.length}`;
         if (iconcurrentmatchR) {
            break;
         }
      } while ((plashj) && iconcurrentmatchR);
      if (!user7.includes(weatherM)) {
         weatherM <<= Math.min(2, Math.abs(weatherM & questv.length));
      }
      let reddownarrowo = questv.length >= 8134929;
      do {
         questv = [targetm.length ^ 1];
         if (reddownarrowo) {
            break;
         }
      } while (reddownarrowo && ((questv.length << (Math.min(3, Math.abs(weatherM)))) < 4));
         sharemodal4 = `${sharemodal4.length}`;
      if ((weatherM >> (Math.min(sharemodal4.length, 5))) < 2) {
         weatherM += 3;
      }
      nextY ^= nextY / (Math.max(7, episodea.size));
   }
       let shared7 = String.fromCharCode(118,97,114,109,97,115,107,95,114,95,53,55,0);
       let libhermesP: Array<any> = [String.fromCharCode(107,95,53,53,95,119,122,97,101,115,0), String.fromCharCode(116,95,52,50,95,99,104,97,110,103,101,108,111,103,0)];
       let gesturesj = 1;
      let iconclosewhitewithbgh = gesturesj >= 7307015;
      do {
         gesturesj &= libhermesP.length;
         if (iconclosewhitewithbgh) {
            break;
         }
      } while (((shared7.length >> (Math.min(3, Math.abs(gesturesj)))) == 1 || 4 == (1 >> (Math.min(4, shared7.length)))) && iconclosewhitewithbgh);
       let viewsx = false;
       let long_vsm = true;
      let footballD = long_vsm ? !long_vsm : long_vsm;
      do {
          let encryptE = 1.0;
          let changeO = String.fromCharCode(109,118,99,111,109,112,111,110,101,110,116,95,109,95,49,48,0);
          let private__C: Map<any, any> = new Map([[String.fromCharCode(112,108,97,110,101,100,95,105,95,54,53,0),true ], [String.fromCharCode(115,116,114,105,110,103,95,117,95,51,55,0),false ], [String.fromCharCode(100,101,98,117,103,103,105,110,103,95,50,95,54,53,0),true ]]);
         long_vsm = !viewsx;
         encryptE -= changeO.length / 3;
         changeO += `${changeO.length % (Math.max(3, 5))}`;
         private__C = new Map([[`${private__C.size}`, changeO.length]]);
         if (footballD) {
            break;
         }
      } while (footballD && (!long_vsm));
      while (2 == shared7.length) {
         shared7 = "1";
         break;
      }
      let reddownarrowj = libhermesP.length >= 7382518;
      do {
         libhermesP.push(libhermesP.length / 3);
         if (reddownarrowj) {
            break;
         }
      } while (reddownarrowj && ((shared7.length - libhermesP.length) > 1 || 3 > (1 - shared7.length)));
      while (libhermesP.length > 2) {
          let lineu = String.fromCharCode(99,117,114,116,97,105,110,115,95,98,95,56,0);
          let nextE = 0.0;
         viewsx = lineu.length > shared7.length;
         lineu = `${parseInt(`${nextE}`)}`;
         break;
      }
      let placeholderK = libhermesP.length >= 7650210;
      do {
         libhermesP = [(shared7 == String.fromCharCode(51,0) ? libhermesP.length : shared7.length)];
         if (placeholderK) {
            break;
         }
      } while ((!viewsx) && placeholderK);
          let nativemoduleE: Array<any> = [447, 442];
          let darkh = String.fromCharCode(99,95,57,56,95,105,115,101,120,112,108,97,105,110,0);
         shared7 += `${((viewsx ? 1 : 4) & 3)}`;
         nativemoduleE.push(3 | nativemoduleE.length);
         darkh += `${nativemoduleE.length * darkh.length}`;
       let informationi = String.fromCharCode(114,101,109,111,118,101,95,114,95,50,52,0);
       let inouttargetredn = String.fromCharCode(97,97,99,101,110,99,95,115,95,52,56,0);
      whitesmalltickK += (String.fromCharCode(106,0) == controlO ? controlO.length : nextY);
   while (1 < (alertQ / (Math.max(controlO.length, 6)))) {
      controlO += `${(String.fromCharCode(119,0) == xvod1 ? xvod1.length : adultC.length)}`;
      break;
   }
   while (5 >= (linkM.length / 4)) {
      alertQ /= Math.max((controlO == String.fromCharCode(48,0) ? alertQ : controlO.length), 2);
      break;
   }
    setTopicClass(sameTextAndValueObj('全部类型'));

       let leaguef = true;
      for (let u = 0; u < 1; u++) {
          let eighteenL = false;
          let spinnerr = String.fromCharCode(116,95,49,52,95,97,100,118,97,110,99,101,0);
         leaguef = !eighteenL;
         spinnerr = `${spinnerr.length - 2}`;
      }
         leaguef = (leaguef ? !leaguef : leaguef);
       let watchE = 1;
       let baiduadsr = 5;
      whitesmalltickK *= formA.length >> (Math.min(Math.abs(1), 5));
   if (ajaxL > 2.43) {
      ajaxL -= parseFloat(`${3 | xvod1.length}`);
   }
       let benefit0 = 3.0;
       let forwardY = false;
         benefit0 += parseFloat(`${3 - parseInt(`${benefit0}`)}`);
      if (!forwardY) {
         forwardY = 76.48 < benefit0 || forwardY;
      }
       let typingloadingB = String.fromCharCode(101,110,113,117,101,117,101,95,55,95,51,56,0);
         forwardY = benefit0 < 26.91 || forwardY;
      while (typingloadingB.endsWith(`${forwardY}`)) {
         forwardY = !forwardY;
         break;
      }
      if (typingloadingB.length <= 4) {
         benefit0 *= parseFloat(`${typingloadingB.length / 3}`);
      }
      formA += `${adultC.length % 3}`;
       let colors4 = 3;
       let detail4 = String.fromCharCode(121,95,50,52,95,112,105,99,116,121,112,101,0);
         colors4 %= Math.max(colors4, 4);
         colors4 |= colors4 & detail4.length;
          let stylesJ = true;
          let coreS = String.fromCharCode(106,97,99,99,97,114,100,100,105,115,116,95,99,95,57,57,0);
          let debugX = 3;
         detail4 = `${detail4.length}`;
         stylesJ = 89 > coreS.length;
         coreS = "1";
         debugX += coreS.length;
         detail4 += "1";
         colors4 %= Math.max(colors4 & 2, 4);
          let dataC = String.fromCharCode(112,115,97,95,51,95,50,50,0);
          let sinaM = 4.0;
          let sansp = true;
         colors4 += 3;
         dataC = `${parseInt(`${sinaM}`) * 2}`;
         sinaM -= parseFloat(`${1}`);
         sansp = dataC.length < 14;
      linkM.push(2);
   while (adultC.length < whitesmalltickK) {
      adultC += `${nextY * 1}`;
      break;
   }
   let bridgeo = episodea.size >= 6980064;
   do {
      episodea.set(controlO, signinupw.length);
      if (bridgeo) {
         break;
      }
   } while (((episodea.size & 1) < 3) && bridgeo);
   let mergerz = 8052504 <= controlO.length;
   do {
      controlO += `${adultC.length / 3}`;
      if (mergerz) {
         break;
      }
   } while (mergerz && ((controlO.length - 5) >= 3 || (orangeclockP.length - controlO.length) >= 5));
   for (let a = 0; a < 3; a++) {
      backiconp = whitesmalltickK == alertQ;
   }
       let emoji3 = String.fromCharCode(105,110,100,101,120,101,115,95,122,95,52,56,0);
      if (emoji3.length == emoji3.length) {
         emoji3 += `${(emoji3 == String.fromCharCode(84,0) ? emoji3.length : emoji3.length)}`;
      }
      for (let y = 0; y < 3; y++) {
          let nalyticsl = String.fromCharCode(98,95,52,50,95,116,97,114,103,101,116,115,0);
         emoji3 = `${2 + emoji3.length}`;
         nalyticsl = `${(nalyticsl == String.fromCharCode(97,0) ? nalyticsl.length : nalyticsl.length)}`;
      }
         emoji3 = `${3 & emoji3.length}`;
      ajaxL /= Math.max(parseFloat(`${3}`), 4);
   for (let v = 0; v < 1; v++) {
      orangeclockP.push(xvod1.length << (Math.min(1, Math.abs(nextY))));
   }
    setArea(sameTextAndValueObj('全部地区'));

   for (let l = 0; l < 2; l++) {
      strE += `${2 | whitesmalltickK}`;
   }
   for (let t = 0; t < 1; t++) {
      adultC = `${adultC.length}`;
   }
      backiconp = xvod1.length == 58;
   if (controlO.length <= 5) {
       let containerj = String.fromCharCode(119,101,105,103,104,116,115,95,51,95,54,0);
       let rules3 = 4.0;
       let iconarrowrightwhite_ = 2;
       let basea = String.fromCharCode(104,111,115,116,110,97,109,101,95,107,95,49,57,0);
       let kick2 = 3;
       let foregroundo = 3;
       let mbnativeadvancedP = 1;
      for (let l = 0; l < 2; l++) {
         iconarrowrightwhite_ %= Math.max(mbnativeadvancedP, 3);
      }
      if (3 < (containerj.length << (Math.min(Math.abs(1), 3))) || (iconarrowrightwhite_ << (Math.min(Math.abs(1), 4))) < 3) {
         iconarrowrightwhite_ *= basea.length;
      }
          let plus6 = String.fromCharCode(109,95,53,57,95,108,105,115,116,105,110,103,0);
         containerj = `${kick2}`;
         plus6 = `${3 * plus6.length}`;
      while (rules3 == 1.26) {
         mbnativeadvancedP /= Math.max(containerj.length * mbnativeadvancedP, 5);
         break;
      }
          let blacks: Array<any> = [158, 987, 659];
         basea += `${basea.length ^ kick2}`;
         blacks = [2 & blacks.length];
          let projectz = 2.0;
          let iconF = String.fromCharCode(121,118,116,111,117,121,118,121,95,57,95,51,48,0);
         foregroundo |= foregroundo / 3;
         projectz += (parseFloat(`${iconF == String.fromCharCode(86,0) ? parseInt(`${projectz}`) : iconF.length}`));
      let interstitialh = 5331353 >= iconarrowrightwhite_;
      do {
          let yingP = String.fromCharCode(109,105,110,105,109,117,109,95,101,95,50,52,0);
          let sportw = 2.0;
          let backiconJ = String.fromCharCode(109,95,57,54,95,118,97,108,0);
          let mathu = true;
          let basketballdetailsbg1 = String.fromCharCode(109,95,55,54,95,99,111,111,114,100,105,110,97,116,101,0);
         iconarrowrightwhite_ <<= Math.min(2, Math.abs(basea.length << (Math.min(Math.abs(2), 4))));
         yingP += `${backiconJ.length >> (Math.min(Math.abs(1), 1))}`;
         sportw -= 2 | basketballdetailsbg1.length;
         backiconJ = `${backiconJ.length}`;
         basketballdetailsbg1 += `${(backiconJ == String.fromCharCode(113,0) ? backiconJ.length : parseInt(`${sportw}`))}`;
         if (interstitialh) {
            break;
         }
      } while ((4 > (2 ^ iconarrowrightwhite_) || (iconarrowrightwhite_ >> (Math.min(Math.abs(2), 3))) > 5) && interstitialh);
         containerj += `${(basea == String.fromCharCode(104,0) ? basea.length : kick2)}`;
      for (let b = 0; b < 3; b++) {
          let dependencies5 = String.fromCharCode(97,112,97,114,97,109,115,95,111,95,52,57,0);
         containerj = `${foregroundo - 1}`;
         dependencies5 += `${dependencies5.length - 2}`;
      }
         iconarrowrightwhite_ *= kick2;
         rules3 /= Math.max(parseFloat(`${containerj.length ^ 3}`), 5);
      while (4 > (foregroundo * mbnativeadvancedP)) {
         foregroundo ^= kick2;
         break;
      }
      if ((foregroundo >> (Math.min(5, Math.abs(mbnativeadvancedP)))) < 5 && (5 >> (Math.min(5, Math.abs(mbnativeadvancedP)))) < 2) {
         foregroundo &= foregroundo << (Math.min(containerj.length, 1));
      }
       let loginsuccessN = String.fromCharCode(117,116,109,111,115,116,95,104,95,51,52,0);
      backiconp = controlO.length > 10 || iconarrowrightwhite_ > 10;
   }
       let utilsh = 3;
       let pageL: Map<any, any> = new Map([[String.fromCharCode(115,99,114,101,101,110,99,97,115,116,95,119,95,49,0),373], [String.fromCharCode(118,95,55,53,95,104,111,117,114,108,121,0),783], [String.fromCharCode(113,95,50,95,109,97,107,101,110,97,110,0),839]]);
         utilsh &= 1 | utilsh;
      for (let t = 0; t < 1; t++) {
         utilsh |= pageL.size;
      }
         utilsh %= Math.max(5, utilsh * pageL.size);
      for (let y = 0; y < 2; y++) {
          let iconshareA = false;
          let nenda = 1.0;
          let penaltymatchiconz = String.fromCharCode(114,101,115,111,108,118,101,114,95,112,95,50,50,0);
         utilsh -= 3;
         iconshareA = nenda >= penaltymatchiconz.length;
         nenda *= parseInt(`${nenda}`) | penaltymatchiconz.length;
      }
      for (let c = 0; c < 1; c++) {
         pageL = new Map([[`${pageL.size}`, 3 - utilsh]]);
      }
      while (utilsh <= 5) {
         pageL = new Map([[`${pageL.size}`, pageL.size & 1]]);
         break;
      }
      orangeclockP.push(((backiconp ? 2 : 2)));
   if (2 >= (5 + nextY) || nextY >= 5) {
      backiconp = orangeclockP.length < 85;
   }
   if (alertQ > 2) {
      adultC = `${1 << (Math.min(4, controlO.length))}`;
   }
   let traminiU = controlO == String.fromCharCode(106,49,97,0);
   do {
      controlO += `${adultC.length}`;
      if (traminiU) {
         break;
      }
   } while (traminiU && (controlO.length < dependencym.length));
   while (xvod1 == String.fromCharCode(83,0) || adultC.length < 3) {
      xvod1 = `${adultC.length}`;
      break;
   }
   if (!orangeclockP.includes(ajaxL)) {
      ajaxL -= parseFloat(`${adultC.length}`);
   }
    setLang(sameTextAndValueObj('全部语言'));

   let routerD = xvod1 == String.fromCharCode(48,49,108,111,116,114,95,0);
   do {
      xvod1 = `${formA.length}`;
      if (routerD) {
         break;
      }
   } while ((backiconp) && routerD);
      linkM = [2];
       let regengz = 4.0;
          let fileV = 2;
          let short_5eF: Array<any> = [95, 851];
          let defaultteamx: Array<any> = [String.fromCharCode(111,102,102,115,95,116,95,53,49,0), String.fromCharCode(119,95,57,49,95,108,111,117,100,115,112,101,97,107,101,114,0), String.fromCharCode(97,108,108,95,53,95,55,49,0)];
         regengz -= parseFloat(`${1 ^ fileV}`);
         fileV |= short_5eF.length;
         short_5eF.push(short_5eF.length << (Math.min(5, defaultteamx.length)));
         defaultteamx = [short_5eF.length | defaultteamx.length];
      let skipT = regengz <= 6009780.0;
      do {
          let profileO = String.fromCharCode(109,95,57,48,95,115,105,100,101,115,0);
         regengz += parseFloat(`${profileO.length}`);
         if (skipT) {
            break;
         }
      } while ((1.94 == (regengz - regengz) || (1.94 - regengz) == 3.3) && skipT);
         regengz -= parseFloat(`${3 >> (Math.min(Math.abs(parseInt(`${regengz}`)), 5))}`);
      orangeclockP.push(xvod1.length ^ whitesmalltickK);
       let cornershoot9 = true;
       let icontransferclubm = 1.0;
       let disconnected_ = true;
      for (let r = 0; r < 2; r++) {
         icontransferclubm /= Math.max((parseFloat(`${parseInt(`${icontransferclubm}`) * (disconnected_ ? 1 : 5)}`)), 4);
      }
      let animationA = 5751068.0 >= icontransferclubm;
      do {
         icontransferclubm /= Math.max((parseFloat(`${parseInt(`${icontransferclubm}`) / (Math.max(6, (cornershoot9 ? 3 : 5)))}`)), 3);
         if (animationA) {
            break;
         }
      } while (animationA && (!cornershoot9));
      if (disconnected_) {
         disconnected_ = !disconnected_ || 46.14 >= icontransferclubm;
      }
      let iconshareO = icontransferclubm <= 8792229.0;
      do {
         icontransferclubm += parseFloat(`${parseInt(`${icontransferclubm}`) + 2}`);
         if (iconshareO) {
            break;
         }
      } while (iconshareO && (4.55 < icontransferclubm));
      for (let g = 0; g < 2; g++) {
         icontransferclubm *= (parseFloat(`${parseInt(`${icontransferclubm}`) | (cornershoot9 ? 3 : 4)}`));
      }
          let pingE = 2.0;
         icontransferclubm += parseFloat(`${1 * parseInt(`${icontransferclubm}`)}`);
         pingE += parseInt(`${pingE}`);
         disconnected_ = icontransferclubm > 36.67;
      while (!disconnected_ && cornershoot9) {
         cornershoot9 = !disconnected_;
         break;
      }
         cornershoot9 = icontransferclubm < 78.69 && cornershoot9;
      dependencym.push(strE.length | dependencym.length);
   if (3 <= adultC.length) {
      signinupw += `${adultC.length}`;
   }
   let encryptorK = backiconp ? !backiconp : backiconp;
   do {
      backiconp = 15 < alertQ && nextY < 15;
      if (encryptorK) {
         break;
      }
   } while ((!backiconp) && encryptorK);
       let armvaA: Map<any, any> = new Map([[String.fromCharCode(103,95,56,52,95,97,100,111,98,101,0),803], [String.fromCharCode(107,95,49,51,95,105,110,115,116,114,117,99,116,105,111,110,115,0),237]]);
      if (Array.from(armvaA.keys()).includes(`${armvaA.size}`)) {
         armvaA = new Map([[`${armvaA.size}`, 2]]);
      }
          let mountingk = 3.0;
          let iconclosewhitet = String.fromCharCode(107,97,105,115,101,114,95,49,95,51,52,0);
          let teamO: Map<any, any> = new Map([[String.fromCharCode(109,97,103,105,99,121,117,118,95,56,95,56,55,0),true ], [String.fromCharCode(114,101,118,105,111,117,115,95,57,95,50,49,0),true ], [String.fromCharCode(101,95,52,95,110,97,110,0),true ]]);
         armvaA.set(`${teamO.size}`, teamO.size % (Math.max(2, 3)));
         mountingk *= iconclosewhitet.length | 1;
         iconclosewhitet += "2";
      let filled9 = 5822787 <= armvaA.size;
      do {
         armvaA = new Map([[`${armvaA.size}`, 2]]);
         if (filled9) {
            break;
         }
      } while (filled9 && (armvaA.get(`${armvaA.size}`) == null));
      xvod1 += `${formA.length << (Math.min(Math.abs(2), 5))}`;
   for (let o = 0; o < 1; o++) {
      episodea.set(formA, linkM.length / 1);
   }
       let predictionO = String.fromCharCode(115,95,50,95,97,114,114,97,121,0);
       let hejie = String.fromCharCode(112,95,56,54,95,103,97,109,117,116,0);
      for (let k = 0; k < 1; k++) {
          let iconclosewhitebgz: Array<any> = [String.fromCharCode(101,120,112,114,101,115,115,95,106,95,52,56,0), String.fromCharCode(106,95,57,48,95,109,101,100,105,117,109,0)];
          let singleR: Map<any, any> = new Map([[String.fromCharCode(109,101,109,111,106,105,95,108,95,51,52,0),367], [String.fromCharCode(115,116,114,110,108,101,110,95,57,95,55,49,0),727]]);
         predictionO = `${singleR.size}`;
         iconclosewhitebgz = [3];
         singleR = new Map([[`${iconclosewhitebgz.length}`, 2]]);
      }
      for (let z = 0; z < 3; z++) {
          let productO = 0.0;
         hejie += `${hejie.length % (Math.max(2, 3))}`;
         productO *= parseInt(`${productO}`) + 2;
      }
      let iconpipshrinkm = 9114703 <= predictionO.length;
      do {
          let loadingspinnerb = 2.0;
          let window_ymX = 4.0;
         predictionO = `${1 >> (Math.min(3, Math.abs(parseInt(`${window_ymX}`))))}`;
         loadingspinnerb *= parseFloat(`${2 * parseInt(`${loadingspinnerb}`)}`);
         window_ymX *= parseFloat(`${parseInt(`${loadingspinnerb}`) >> (Math.min(5, Math.abs(parseInt(`${loadingspinnerb}`))))}`);
         if (iconpipshrinkm) {
            break;
         }
      } while ((hejie.startsWith(`${predictionO.length}`)) && iconpipshrinkm);
      while (hejie.endsWith(`${predictionO.length}`)) {
         predictionO += `${3 * hejie.length}`;
         break;
      }
         predictionO = `${predictionO.length}`;
         hejie += `${hejie.length}`;
      clubv.push(xvod1.length);
   while (!backiconp) {
      backiconp = whitesmalltickK <= formA.length;
      break;
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
            vod_pic_list={item?.vod_pic_list}
            vod_name={item?.vod_name}
            vodImageStyle={{
              width: cardWidth,
              height: cardHeight,
            }}
            onPress={() => {
              dispatch(playVod(item));
              navigation.navigate('播放', {
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
    [topicOptions, currentTopicId],
  );

  return (
    <>
      <ScreenContainer>
        <TitleWithBackButtonHeader
          title="片库"
        
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
                    source={require('../../../static/images/lessFullscreenmaxChatbotphoto.gif')}
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
