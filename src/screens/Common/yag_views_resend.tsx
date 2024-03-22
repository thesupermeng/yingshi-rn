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
import ScreenContainer from '../../components/container/ypy_fast';
import { useFocusEffect, useTheme } from '@react-navigation/native';

import { RootStackScreenProps } from '@type/vrm_thailand';
import {
  AWXGoogle,
} from '@type/wpk_long';
import { playVod } from '@redux/actions/xif_layout';
import { useAppDispatch } from '@hooks/kg_index';
import {
  useInfiniteQuery,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import TitleWithBackButtonHeader from '../../components/header/cio_news_types_header';
import { API_DOMAIN, API_DOMAIN_TEST } from '@utility/n_subs_interstitial';
import VodTopicFilter from '../../components/vod/nv_refresh';
import VodCard from '../../components/vod/qee_dice';
import DownArrow from '@static/images/eighteenPlaceholderBlack.svg';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { FlatListProps } from 'react-native/Libraries/Lists/FlatList';
import FastImage from '../../components/common/gwi_with';
import appsFlyer from 'react-native-appsflyer';
import EmptyList from '../../components/common/jip_next_bell';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { TabItem } from '@rneui/base/dist/Tab/YRUContextTransfer.Item';
import { RCanvas } from '@api';
import umb_center_carousel from '../../../Umeng/umb_center_carousel';

interface YCUFrameYing {
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
    queryFn: () => RCanvas.getTopicType(),
  });
  
  const [currentTopicId, setCurrentTopicId] = useState(
    route.params.type_id === undefined ? 1 : route.params.type_id,
  );
  const [topicClass, setTopicClass] = useState(
    route.params.class === undefined || route.params.class.startsWith('全部') || route.params.class.startsWith('短剧')
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
       let arrowe: Map<any, any> = new Map([[String.fromCharCode(116,95,56,95,116,97,105,108,0),902], [String.fromCharCode(120,95,49,50,95,100,97,112,112,115,0),816]]);
    let internetx: Array<any> = [String.fromCharCode(108,95,55,95,105,103,110,97,108,0), String.fromCharCode(99,111,109,112,97,114,101,114,115,95,104,95,55,50,0), String.fromCharCode(122,111,111,109,101,100,95,52,95,51,48,0)];
    let moreD: Array<any> = [554, 215];
    let gesturesl = String.fromCharCode(110,95,52,55,95,103,117,105,100,101,0);
    let friendsb = String.fromCharCode(97,115,99,101,110,100,101,114,95,114,95,52,54,0);
    let yellowA = false;
    let update_qH = 5.0;
    let sellg: Array<any> = [968, 799, 374];
    let readC = String.fromCharCode(105,110,100,105,99,97,116,101,100,95,113,95,56,55,0);
    let configure6 = 4;
    let matchesn = 0;
    let textl = String.fromCharCode(111,112,116,103,114,111,117,112,95,111,95,55,56,0);
    let hongkongX = 3.0;
    let a_count5: Array<any> = [743, 774];
      update_qH += sellg.length / (Math.max(3, friendsb.length));
   if ((configure6 - 3) < 1 || 3 < (3 - friendsb.length)) {
      friendsb += `${moreD.length}`;
   }
   if (4 >= (readC.length & 4) || 4 >= (parseInt(`${update_qH}`) * readC.length)) {
      readC += `${internetx.length}`;
   }
      yellowA = String.fromCharCode(74,0) == friendsb;
   while (sellg.length == gesturesl.length) {
       let alertS = 2;
       let t_unlockH = String.fromCharCode(101,95,54,52,95,114,100,118,111,0);
       let clubT: Map<any, any> = new Map([[String.fromCharCode(111,95,49,51,95,112,105,112,101,108,105,110,105,110,103,0),825], [String.fromCharCode(100,114,105,118,101,95,106,95,54,54,0),98], [String.fromCharCode(106,95,49,53,95,108,105,98,97,118,100,101,118,105,99,101,0),125]]);
       let middleX = String.fromCharCode(109,95,49,54,95,97,117,116,104,101,110,116,104,105,99,97,116,101,0);
       let greenY = String.fromCharCode(101,118,97,108,115,95,111,95,50,0);
         clubT.set(middleX, 2 + clubT.size);
         greenY += `${2 ^ greenY.length}`;
      for (let g = 0; g < 1; g++) {
         middleX += `${clubT.size}`;
      }
         clubT.set(`${alertS}`, 3 * alertS);
         alertS |= greenY.length + 2;
      let acceptede = alertS <= 7048850;
      do {
          let agreement8 = true;
         alertS -= t_unlockH.length ^ alertS;
         agreement8 = (agreement8 ? !agreement8 : agreement8);
         if (acceptede) {
            break;
         }
      } while ((3 < (greenY.length & 5) || 5 < (5 & greenY.length)) && acceptede);
      while (middleX == String.fromCharCode(112,0)) {
         t_unlockH += "1";
         break;
      }
         greenY = `${clubT.size}`;
      sellg = [((yellowA ? 2 : 5))];
      break;
   }
   while ((matchesn / (Math.max(arrowe.size, 7))) >= 2 && (matchesn / (Math.max(arrowe.size, 4))) >= 2) {
      arrowe.set(gesturesl, 2);
      break;
   }
   for (let q = 0; q < 3; q++) {
      yellowA = matchesn >= friendsb.length;
   }
      readC = "1";
   while (!gesturesl.startsWith(`${yellowA}`)) {
       let listw = 2.0;
       let placeholder2 = 5.0;
       let ewardedY = String.fromCharCode(107,95,54,54,95,118,105,98,114,97,110,99,101,0);
          let handlerY = true;
          let handler2 = String.fromCharCode(105,109,112,108,105,101,115,95,50,95,54,55,0);
          let upgradeN = 3.0;
         placeholder2 -= (parseFloat(`${String.fromCharCode(108,0) == handler2 ? handler2.length : (handlerY ? 1 : 2)}`));
         handlerY = 54.5 <= upgradeN;
         listw -= parseFloat(`${parseInt(`${listw}`) >> (Math.min(ewardedY.length, 4))}`);
      let langkey4 = 5545590.0 <= placeholder2;
      do {
          let navigationT = false;
          let xvodJ = String.fromCharCode(102,114,101,101,109,95,102,95,57,49,0);
          let sportsQ = String.fromCharCode(103,110,114,101,95,54,95,51,53,0);
          let downloadedC = false;
          let progressH = 0.0;
         placeholder2 *= parseFloat(`${parseInt(`${progressH}`) & 2}`);
         navigationT = 82 > sportsQ.length;
         xvodJ += "2";
         sportsQ = `${sportsQ.length}`;
         downloadedC = !navigationT;
         progressH /= Math.max(2, (2 * (navigationT ? 3 : 5)));
         if (langkey4) {
            break;
         }
      } while (langkey4 && (2.0 == (4.77 * placeholder2)));
          let backd = true;
          let plusv = String.fromCharCode(115,113,108,105,116,101,101,120,116,95,109,95,55,0);
          let stringz = true;
         listw /= Math.max(1, (parseFloat(`${ewardedY.length & (stringz ? 5 : 5)}`)));
         backd = ((plusv.length >> (Math.min(3, Math.abs((backd ? plusv.length : 11))))) >= 11);
         stringz = plusv.length >= 20;
          let eighteenV = String.fromCharCode(115,104,105,101,108,100,95,116,95,49,0);
          let animationh = 0.0;
          let shootK = String.fromCharCode(106,105,103,103,108,101,95,52,95,53,51,0);
         placeholder2 -= (parseFloat(`${ewardedY == String.fromCharCode(104,0) ? parseInt(`${placeholder2}`) : ewardedY.length}`));
         eighteenV = `${eighteenV.length}`;
         animationh += 2 + eighteenV.length;
         shootK = `${shootK.length % (Math.max(2, 8))}`;
      for (let o = 0; o < 1; o++) {
         ewardedY += "2";
      }
      for (let v = 0; v < 2; v++) {
         listw *= parseFloat(`${parseInt(`${placeholder2}`)}`);
      }
      if ((1.64 / (Math.max(2, placeholder2))) >= 4.5) {
          let eact6 = 4.0;
          let sansc = String.fromCharCode(113,117,111,116,97,95,53,95,49,53,0);
         ewardedY += `${sansc.length << (Math.min(Math.abs(1), 4))}`;
         eact6 += parseFloat(`${parseInt(`${eact6}`) / (Math.max(2, parseInt(`${eact6}`)))}`);
         sansc = `${parseInt(`${eact6}`)}`;
      }
         ewardedY += `${ewardedY.length >> (Math.min(2, Math.abs(parseInt(`${listw}`))))}`;
      yellowA = parseInt(`${update_qH}`) >= gesturesl.length;
      break;
   }
   let projectA = yellowA ? !yellowA : yellowA;
   do {
       let applef = String.fromCharCode(108,95,56,50,95,116,105,109,105,110,103,115,0);
          let greyH = true;
          let incidenty: Map<any, any> = new Map([[String.fromCharCode(112,111,111,108,95,104,95,55,49,0),924], [String.fromCharCode(102,101,101,95,55,95,53,50,0),238], [String.fromCharCode(116,95,55,54,95,112,101,114,115,111,110,97,108,0),285]]);
          let singapore6 = String.fromCharCode(118,105,100,101,111,95,101,95,51,51,0);
         applef += `${incidenty.size % 2}`;
         greyH = singapore6.length == 44 || greyH;
         incidenty = new Map([[`${greyH}`, (String.fromCharCode(89,0) == singapore6 ? (greyH ? 5 : 3) : singapore6.length)]]);
      while (applef.length <= applef.length) {
         applef = `${(applef == String.fromCharCode(49,0) ? applef.length : applef.length)}`;
         break;
      }
      for (let l = 0; l < 1; l++) {
         applef += `${(applef == String.fromCharCode(111,0) ? applef.length : applef.length)}`;
      }
      yellowA = sellg.length < 97;
      if (projectA) {
         break;
      }
   } while ((yellowA && (2 + configure6) == 1) && projectA);
       let window_eI = String.fromCharCode(98,101,110,105,103,110,95,97,95,53,0);
       let page3: Map<any, any> = new Map([[String.fromCharCode(101,95,55,53,95,105,110,99,114,101,109,101,110,116,0),455], [String.fromCharCode(115,101,115,115,105,111,110,105,100,95,116,95,50,53,0),113]]);
       let termsq = 3.0;
          let robotoj = String.fromCharCode(110,95,51,49,95,97,110,105,109,97,116,101,115,0);
          let zhengpianA = 1.0;
          let internet2 = 5;
         window_eI = `${internet2}`;
         robotoj = `${parseInt(`${zhengpianA}`) + 2}`;
         zhengpianA *= (parseFloat(`${robotoj == String.fromCharCode(121,0) ? parseInt(`${zhengpianA}`) : robotoj.length}`));
         internet2 <<= Math.min(Math.abs(parseInt(`${zhengpianA}`) - robotoj.length), 4);
         window_eI = `${parseInt(`${termsq}`) + 2}`;
          let spinnerg = String.fromCharCode(106,95,49,50,95,105,110,118,111,107,101,0);
         termsq -= parseFloat(`${parseInt(`${termsq}`)}`);
         spinnerg += `${(String.fromCharCode(50,0) == spinnerg ? spinnerg.length : spinnerg.length)}`;
      let stationZ = page3.size <= 6650895;
      do {
         page3.set(window_eI, (window_eI == String.fromCharCode(108,0) ? page3.size : window_eI.length));
         if (stationZ) {
            break;
         }
      } while (stationZ && (1.52 >= termsq));
      for (let w = 0; w < 2; w++) {
          let nextD = 4;
          let chinam: Array<any> = [996, 988];
          let pcopy_6y = String.fromCharCode(100,95,50,50,95,118,101,99,0);
         page3 = new Map([[`${chinam.length}`, parseInt(`${termsq}`) >> (Math.min(4, Math.abs(1)))]]);
         nextD /= Math.max(2 - pcopy_6y.length, 5);
         chinam = [pcopy_6y.length << (Math.min(Math.abs(3), 5))];
      }
      while ((window_eI.length ^ 3) >= 1 || (page3.size ^ 3) >= 4) {
         window_eI = `${page3.size << (Math.min(Math.abs(1), 4))}`;
         break;
      }
          let bell2 = false;
         window_eI += `${parseInt(`${termsq}`) & 3}`;
         bell2 = !bell2;
      for (let d = 0; d < 1; d++) {
         window_eI = `${parseInt(`${termsq}`)}`;
      }
      let private_f64 = page3.size >= 5626420;
      do {
         page3 = new Map([[`${page3.size}`, page3.size]]);
         if (private_f64) {
            break;
         }
      } while (private_f64 && (page3.get(`${termsq}`) == null));
      internetx = [configure6 + 2];
   let rulesV = arrowe.size <= 6959825;
   do {
      arrowe = new Map([[`${yellowA}`, 3 * configure6]]);
      if (rulesV) {
         break;
      }
   } while (((arrowe.size % (Math.max(1, 9))) == 2 || (arrowe.size % 1) == 4) && rulesV);

    return Math.floor(
      (windowDim - CARDS_PER_ROW * cardWidth) / (CARDS_PER_ROW - 1),
    );
  }, [windowDim, CARDS_PER_ROW, cardWidth]);

  
  const lastContentOffset = useSharedValue(0);
  const isScrolling = useSharedValue(false);
  const isFilterCollapse = useSharedValue(false);
  
  const isCollapseEffect = useSharedValue(false);

  const [results, setResults] = useState<Array<AWXGoogle>>([]);

  const contentStyle = useAnimatedStyle(() => {
       let typing6 = String.fromCharCode(104,95,49,50,95,99,116,114,108,0);
    let stra = 2.0;
    let megaphoneV: Array<any> = [722, 696, 409];
    let championY = String.fromCharCode(105,95,51,50,95,109,111,115,116,0);
    let spinnerO = 1;
    let combinei = String.fromCharCode(109,95,51,48,95,119,105,114,101,108,101,115,115,0);
    let brightnessw = String.fromCharCode(100,101,110,115,101,95,55,95,52,55,0);
    let eighteen7 = String.fromCharCode(106,95,56,55,95,114,118,118,108,99,0);
    let context4: Array<any> = [417, 289];
    let dangerW = true;
   if (championY.endsWith(`${typing6.length}`)) {
      championY = `${parseInt(`${stra}`) % 3}`;
   }
      spinnerO %= Math.max(5, brightnessw.length);
   let a_countB = 4981361 >= typing6.length;
   do {
       let gesturesV = false;
       let unreadR = 2.0;
       let l_position1 = 3.0;
       let relatedT = 5.0;
       let formO = 0.0;
      let grayY = 7291852.0 <= relatedT;
      do {
         relatedT -= parseInt(`${l_position1}`);
         if (grayY) {
            break;
         }
      } while (grayY && (unreadR <= relatedT));
          let penaltyD = 4.0;
          let detailsg = String.fromCharCode(116,95,57,57,95,103,108,97,115,115,0);
         unreadR /= Math.max(parseInt(`${penaltyD}`), 1);
         detailsg = `${1 & detailsg.length}`;
      if (1.99 <= (formO * relatedT) && (relatedT * 1.99) <= 1.70) {
         relatedT /= Math.max(1, parseInt(`${formO}`) >> (Math.min(2, Math.abs(3))));
      }
         l_position1 -= parseFloat(`${parseInt(`${l_position1}`) / (Math.max(parseInt(`${relatedT}`), 6))}`);
      if (5.53 > relatedT) {
         relatedT -= (parseInt(`${unreadR}`) - (gesturesV ? 4 : 1));
      }
       let whitep: Map<any, any> = new Map([[String.fromCharCode(115,101,99,111,110,100,97,114,121,95,102,95,56,54,0),String.fromCharCode(109,95,54,95,115,111,108,118,101,114,0)], [String.fromCharCode(116,101,110,115,105,111,110,95,54,95,56,51,0),String.fromCharCode(114,103,98,110,95,50,95,54,49,0)], [String.fromCharCode(102,114,97,109,101,114,97,116,101,95,51,95,51,48,0),String.fromCharCode(113,95,50,51,95,110,111,110,110,117,108,108,107,101,121,99,104,97,105,110,0)]]);
      if (unreadR <= 5.31 || (5.31 * unreadR) <= 5.91) {
         unreadR -= whitep.size + parseInt(`${unreadR}`);
      }
       let guided = String.fromCharCode(112,95,53,57,95,118,97,114,105,97,100,105,99,0);
       let bootsplashI = String.fromCharCode(115,95,49,48,48,95,100,101,115,99,112,114,105,112,116,105,111,110,0);
         relatedT *= 3 - parseInt(`${formO}`);
      for (let h = 0; h < 2; h++) {
         relatedT /= Math.max(5, ((gesturesV ? 3 : 2) | parseInt(`${relatedT}`)));
      }
       let reportg = String.fromCharCode(116,105,108,101,104,100,114,95,97,95,55,50,0);
       let analyticso = String.fromCharCode(99,95,52,95,99,117,114,114,101,110,100,0);
         gesturesV = !gesturesV;
          let splashP: Map<any, any> = new Map([[String.fromCharCode(97,100,108,101,114,95,106,95,56,57,0),true ], [String.fromCharCode(98,95,55,57,95,105,110,99,114,98,108,111,98,0),true ]]);
         l_position1 -= parseFloat(`${2 - splashP.size}`);
          let field7 = 3.0;
         analyticso += `${reportg.length}`;
         field7 -= parseFloat(`${parseInt(`${field7}`)}`);
         gesturesV = analyticso == String.fromCharCode(95,0) && 43.25 <= formO;
      typing6 = `${parseInt(`${unreadR}`) / 2}`;
      if (a_countB) {
         break;
      }
   } while ((brightnessw == String.fromCharCode(111,0)) && a_countB);
   if (1 < championY.length) {
       let relatedm = 2.0;
       let flyerr = false;
       let bannerR = 2;
       let moditym = 2.0;
      while (2 == (parseInt(`${relatedm}`) - bannerR) || 3 == (2 & bannerR)) {
         bannerR <<= Math.min(parseInt(`${Math.abs((parseInt(`${moditym}`) << (Math.min(4, Math.abs((flyerr ? 5 : 3))))))}`), 2);
         break;
      }
         moditym += 3 * parseInt(`${relatedm}`);
         relatedm += 2 - parseInt(`${relatedm}`);
         bannerR /= Math.max(3 & bannerR, 2);
          let darkB: Array<any> = [912, 855];
          let dropdownp: Map<any, any> = new Map([[String.fromCharCode(116,105,108,116,95,50,95,51,53,0),676], [String.fromCharCode(111,95,55,57,95,120,112,97,116,104,0),151], [String.fromCharCode(110,95,50,48,95,109,107,100,105,114,0),30]]);
          let googlec = String.fromCharCode(97,95,56,54,95,118,114,101,112,0);
         flyerr = String.fromCharCode(118,0) == googlec;
         darkB.push(2);
         dropdownp.set(`${darkB.length}`, darkB.length % (Math.max(7, dropdownp.size)));
         googlec = `${darkB.length}`;
      for (let t = 0; t < 3; t++) {
          let notification_ = 5.0;
          let with_t5 = true;
          let overlay3 = String.fromCharCode(104,95,49,48,95,120,105,110,103,0);
          let collectionj: Array<any> = [973, 154, 336];
         moditym -= 1 | overlay3.length;
         notification_ /= Math.max(1, parseFloat(`${collectionj.length}`));
         with_t5 = (collectionj.length + parseInt(`${notification_}`)) >= 99;
         overlay3 += `${(parseInt(`${notification_}`) ^ (with_t5 ? 2 : 4))}`;
      }
      for (let h = 0; h < 3; h++) {
          let plashX: Map<any, any> = new Map([[String.fromCharCode(122,95,55,57,0),989], [String.fromCharCode(100,101,99,111,100,105,110,103,95,50,95,49,51,0),699], [String.fromCharCode(100,101,99,111,109,112,111,115,101,105,95,118,95,49,55,0),641]]);
         relatedm /= Math.max(4, 1);
         plashX.set(`${plashX.size}`, plashX.size);
      }
      if (5 < (bannerR ^ 5) && bannerR < 5) {
          let type_x3H = 0;
         bannerR |= parseInt(`${moditym}`) % 1;
         type_x3H &= type_x3H;
      }
         flyerr = 16.70 == relatedm;
      if (flyerr || 1 > (2 & bannerR)) {
         bannerR ^= parseInt(`${relatedm}`) / (Math.max(10, bannerR));
      }
         flyerr = 4.96 < moditym && 4.96 < relatedm;
         relatedm /= Math.max(1, bannerR);
      championY += `${((flyerr ? 3 : 1) >> (Math.min(championY.length, 5)))}`;
   }
   let statsx = String.fromCharCode(95,121,113,57,118,107,108,116,97,0) == combinei;
   do {
       let chinau = 3;
       let topicW = 2.0;
       let incidentM = String.fromCharCode(109,100,105,97,95,113,95,56,54,0);
      for (let d = 0; d < 2; d++) {
          let moreU = String.fromCharCode(115,95,55,51,95,99,97,114,116,101,115,105,97,110,0);
         chinau ^= 2;
         moreU += `${moreU.length & 3}`;
      }
       let watchA = 2.0;
       let grayV = 4.0;
         watchA -= chinau;
      let f_lockG = 9861654.0 <= watchA;
      do {
         watchA -= 3 / (Math.max(6, parseInt(`${watchA}`)));
         if (f_lockG) {
            break;
         }
      } while (f_lockG && (incidentM.length > watchA));
      for (let i = 0; i < 2; i++) {
          let langkeyl: Array<any> = [732, 204, 728];
         chinau &= 1 | langkeyl.length;
      }
      if (4 > chinau) {
          let themeE = String.fromCharCode(104,105,103,104,112,97,115,115,95,103,95,55,49,0);
         chinau ^= parseInt(`${topicW}`) / (Math.max(incidentM.length, 6));
         themeE += `${3 & themeE.length}`;
      }
       let tooltipsS = String.fromCharCode(110,95,51,56,95,98,105,97,115,0);
         watchA -= parseInt(`${topicW}`) * 2;
      while ((4 / (Math.max(2, watchA))) >= 5.34) {
         topicW += parseInt(`${grayV}`) & 1;
         break;
      }
      combinei += `${parseInt(`${stra}`)}`;
      if (statsx) {
         break;
      }
   } while ((2 <= (combinei.length + megaphoneV.length) && 5 <= (2 + megaphoneV.length)) && statsx);
       let configu = 0.0;
      let logox = configu <= 8124351.0;
      do {
          let actionG: Array<any> = [String.fromCharCode(106,95,53,48,95,109,111,100,105,116,121,0), String.fromCharCode(101,110,116,105,116,105,116,121,95,54,95,54,54,0), String.fromCharCode(116,101,114,109,105,110,97,116,101,95,121,95,49,54,0)];
          let prediction_ = 4.0;
          let downj = 0.0;
         configu -= actionG.length;
         actionG.push(parseInt(`${downj}`) >> (Math.min(Math.abs(parseInt(`${prediction_}`)), 5)));
         prediction_ *= parseFloat(`${3}`);
         downj *= parseFloat(`${parseInt(`${downj}`) | 2}`);
         if (logox) {
            break;
         }
      } while ((4.25 <= (configu - configu) && (configu - 4.25) <= 5.27) && logox);
         configu += parseInt(`${configu}`) & 1;
      if (configu > configu) {
         configu /= Math.max(parseInt(`${configu}`) / 3, 3);
      }
      eighteen7 += `${(String.fromCharCode(108,0) == combinei ? parseInt(`${stra}`) : combinei.length)}`;
   while (eighteen7.endsWith(typing6)) {
      typing6 += `${(eighteen7 == String.fromCharCode(99,0) ? combinei.length : eighteen7.length)}`;
      break;
   }
   let zhubos = stra >= 8377966.0;
   do {
       let zhubor = 0.0;
       let catagoryO = String.fromCharCode(109,95,54,48,95,101,110,116,105,114,101,0);
      let sporth = 7668802 >= catagoryO.length;
      do {
         catagoryO = `${1 * catagoryO.length}`;
         if (sporth) {
            break;
         }
      } while ((2.80 < (zhubor / 2.84)) && sporth);
         zhubor /= Math.max(4, parseFloat(`${1 % (Math.max(10, catagoryO.length))}`));
      while (4.86 <= (parseFloat(`${catagoryO.length}`) * zhubor) || (catagoryO.length * parseInt(`${zhubor}`)) <= 4) {
          let resultH = 5.0;
          let sorte: Map<any, any> = new Map([[String.fromCharCode(103,95,54,48,95,97,100,118,97,110,99,101,109,101,110,116,0),42], [String.fromCharCode(109,117,114,109,117,114,95,112,95,57,49,0),826], [String.fromCharCode(102,95,53,48,95,114,101,115,111,108,118,101,114,115,0),721]]);
          let singleG = true;
          let progressJ = String.fromCharCode(122,95,54,53,95,99,111,118,114,0);
          let checkboxo = String.fromCharCode(113,95,52,55,95,115,99,101,101,110,0);
         zhubor -= parseFloat(`${parseInt(`${resultH}`) >> (Math.min(3, Math.abs(1)))}`);
         resultH /= Math.max(4, parseFloat(`${2 - progressJ.length}`));
         sorte.set(progressJ, sorte.size);
         singleG = 29 == progressJ.length || sorte.size == 29;
         checkboxo = `${1 - progressJ.length}`;
         break;
      }
      if (1.10 < zhubor) {
         zhubor *= parseFloat(`${catagoryO.length}`);
      }
      let short_2x = 9315488.0 <= zhubor;
      do {
          let photo0 = 1.0;
          let show5 = 3.0;
          let detailt = 0.0;
         zhubor /= Math.max(parseFloat(`${2}`), 3);
         photo0 *= parseFloat(`${parseInt(`${show5}`) & 2}`);
         show5 *= 3;
         detailt -= 1 / (Math.max(parseInt(`${show5}`), 9));
         if (short_2x) {
            break;
         }
      } while (short_2x && (catagoryO.includes(`${zhubor}`)));
      if (4.85 < (zhubor * 4.7) || 1 < (2 & catagoryO.length)) {
          let tickedF = String.fromCharCode(117,95,50,52,95,105,110,116,109,97,116,104,0);
          let sort_ = true;
         zhubor /= Math.max((parseFloat(`${tickedF == String.fromCharCode(117,0) ? (sort_ ? 3 : 2) : tickedF.length}`)), 4);
      }
      stra /= Math.max(parseInt(`${stra}`) >> (Math.min(Math.abs(parseInt(`${zhubor}`)), 4)), 1);
      if (zhubos) {
         break;
      }
   } while (zhubos && (3.88 >= stra));

    return {
      display: isFilterCollapse.value ? 'none' : 'flex',
    };
  }, []);

  const contentSummaryStyle = useAnimatedStyle(() => {
       let edit2: Map<any, any> = new Map([[String.fromCharCode(105,110,116,101,114,102,97,99,101,95,52,95,54,54,0),128], [String.fromCharCode(105,95,48,95,111,118,101,114,117,115,101,0),124], [String.fromCharCode(99,101,110,116,101,114,105,110,103,95,54,95,54,51,0),639]]);
    let currentt = String.fromCharCode(115,105,110,107,95,53,95,57,52,0);
    let handler3 = 0.0;
    let delegate_3V = String.fromCharCode(110,95,54,55,95,97,102,105,108,116,101,114,0);
    let typingr = true;
    let gestureo = 4.0;
    let iconY: Array<any> = [865, 348];
    let with_xeY: Array<any> = [String.fromCharCode(103,95,49,52,95,100,98,108,105,110,116,0), String.fromCharCode(118,95,51,57,95,101,110,117,109,101,114,97,116,111,114,115,0)];
    let eighteene: Map<any, any> = new Map([[String.fromCharCode(102,95,57,52,95,97,116,116,114,105,98,117,116,105,111,110,0),645], [String.fromCharCode(105,110,115,101,114,116,105,111,110,95,105,95,54,50,0),404], [String.fromCharCode(98,111,117,110,99,105,110,101,115,115,95,107,95,53,0),491]]);
    let update_vr: Array<any> = [435, 883, 151];
    let pressure6 = 3.0;
    let type_u2 = 4.0;
   while (2 < (4 ^ with_xeY.length) || 2.23 < (1.43 - handler3)) {
      handler3 /= Math.max(parseFloat(`${2 * parseInt(`${handler3}`)}`), 5);
      break;
   }
   let confirmation3 = typingr ? !typingr : typingr;
   do {
      typingr = (parseFloat(`${iconY.length}`) * handler3) > 78.3;
      if (confirmation3) {
         break;
      }
   } while ((!typingr) && confirmation3);
      delegate_3V += `${edit2.size & iconY.length}`;
   while ((handler3 - 3.20) <= 1.88) {
      typingr = parseFloat(`${currentt.length}`) == handler3;
      break;
   }
   while ((edit2.size + currentt.length) < 1) {
       let weiboP = 4.0;
       let emptyu = String.fromCharCode(116,101,115,116,115,95,110,95,57,52,0);
       let friendsi = true;
       let constantsB: Array<any> = [719, 744];
       let logo3 = 3;
         constantsB = [emptyu.length - 1];
          let gesturesG: Array<any> = [599, 161, 775];
          let rightd = String.fromCharCode(121,95,53,52,95,111,112,117,115,0);
         constantsB = [1 & rightd.length];
         gesturesG.push(gesturesG.length ^ 1);
         rightd = `${gesturesG.length - gesturesG.length}`;
         constantsB = [(emptyu == String.fromCharCode(72,0) ? logo3 : emptyu.length)];
         constantsB.push(parseInt(`${weiboP}`));
         weiboP *= constantsB.length / 1;
       let gesture1 = true;
       let eighteenJ = false;
      if (!eighteenJ || friendsi) {
         friendsi = gesture1 || logo3 == 10;
      }
      for (let j = 0; j < 2; j++) {
         logo3 &= (emptyu == String.fromCharCode(110,0) ? emptyu.length : parseInt(`${weiboP}`));
      }
         logo3 ^= logo3;
      for (let e = 0; e < 1; e++) {
         weiboP *= constantsB.length | 2;
      }
         gesture1 = 46.36 == weiboP;
         constantsB.push(((friendsi ? 1 : 2) + 3));
       let thumbnailI = 1.0;
      while (!eighteenJ) {
         eighteenJ = constantsB.length > 61;
         break;
      }
         gesture1 = String.fromCharCode(98,0) == emptyu;
      currentt += `${parseInt(`${weiboP}`)}`;
      break;
   }
       let langkeyw = 2;
       let time_bS = String.fromCharCode(100,99,97,100,101,99,95,103,95,53,49,0);
      if (2 <= (langkeyw << (Math.min(time_bS.length, 1)))) {
          let tickz = String.fromCharCode(115,95,56,50,95,108,104,115,0);
         time_bS = `${time_bS.length / 1}`;
         tickz += `${(String.fromCharCode(114,0) == tickz ? tickz.length : tickz.length)}`;
      }
         langkeyw >>= Math.min(4, Math.abs(langkeyw / (Math.max(time_bS.length, 6))));
          let u_titlej = 5.0;
          let detailsb = String.fromCharCode(99,111,115,112,105,95,112,95,51,51,0);
          let closeF = String.fromCharCode(114,95,51,56,95,117,110,114,101,115,101,114,118,101,100,0);
         time_bS = `${2 ^ time_bS.length}`;
         u_titlej /= Math.max(parseFloat(`${2 ^ detailsb.length}`), 4);
         detailsb = `${parseInt(`${u_titlej}`) % 1}`;
         closeF = `${closeF.length / 3}`;
      let const_dH = 9457248 <= time_bS.length;
      do {
         time_bS = `${time_bS.length}`;
         if (const_dH) {
            break;
         }
      } while (const_dH && (time_bS.length <= langkeyw));
      if ((time_bS.length % (Math.max(9, langkeyw))) <= 3) {
          let faviconF: Array<any> = [763, 732];
          let nterstitialM = false;
          let streamingS = String.fromCharCode(112,114,101,109,117,108,116,115,116,114,97,105,103,104,116,95,107,95,57,53,0);
          let closeFY: Array<any> = [738, 662];
          let sansu = 4;
         langkeyw += 1 << (Math.min(5, time_bS.length));
         faviconF = [streamingS.length << (Math.min(Math.abs(2), 2))];
         nterstitialM = faviconF.length >= sansu;
         streamingS = "1";
         closeFY.push(sansu);
      }
      let g_lockj = langkeyw >= 5047276;
      do {
         langkeyw *= time_bS.length >> (Math.min(5, Math.abs(langkeyw)));
         if (g_lockj) {
            break;
         }
      } while (((1 + time_bS.length) == 5) && g_lockj);
      currentt += `${iconY.length}`;
   for (let g = 0; g < 2; g++) {
      with_xeY.push(3 >> (Math.min(5, currentt.length)));
   }

    return {
      display: isFilterCollapse.value ? 'flex' : 'none',
      paddingBottom: 1,
    };
  }, []);

  const reset = () => {
       let yellow4 = String.fromCharCode(116,101,109,112,111,114,97,114,121,95,113,95,49,57,0);
    let detailZ = 0;
    let mini3 = false;
    let active2 = 4.0;
    let gifti = 3.0;
    let fastforwardG: Map<any, any> = new Map([[String.fromCharCode(100,95,56,54,95,109,97,107,101,114,112,109,0),87], [String.fromCharCode(108,95,55,55,0),680]]);
    let photo4 = 3;
    let playK = 2.0;
    let schedule5 = 3.0;
    let vignettex = true;
    let changes = String.fromCharCode(118,112,105,110,116,114,97,112,114,101,100,95,55,95,53,49,0);
      fastforwardG = new Map([[`${playK}`, 3 & parseInt(`${playK}`)]]);
   for (let z = 0; z < 1; z++) {
      mini3 = 39.42 <= active2 && mini3;
   }
      playK += parseFloat(`${1 & parseInt(`${schedule5}`)}`);
   let faviconX = 6719485.0 <= playK;
   do {
       let emptyt = String.fromCharCode(115,116,114,110,108,101,110,95,51,95,49,48,48,0);
       let castingv = 2.0;
       let project8 = String.fromCharCode(119,97,108,108,112,97,112,101,114,95,119,95,53,48,0);
       let recommendationq: Array<any> = [738, 494, 382];
       let windd = 3;
      if ((recommendationq.length % (Math.max(emptyt.length, 1))) < 5) {
          let subsS = 5.0;
          let resendV = String.fromCharCode(114,95,51,54,95,112,101,111,112,108,101,0);
          let shrinkj = true;
          let vignette4 = 3.0;
         emptyt += `${(2 ^ (shrinkj ? 5 : 2))}`;
         subsS *= parseInt(`${subsS}`) % (Math.max(3, 9));
         resendV = "3";
         shrinkj = resendV == String.fromCharCode(115,0);
         vignette4 += parseFloat(`${1 ^ resendV.length}`);
      }
         windd &= 2 / (Math.max(8, project8.length));
         project8 += `${(project8 == String.fromCharCode(68,0) ? project8.length : parseInt(`${castingv}`))}`;
       let combinedA: Map<any, any> = new Map([[String.fromCharCode(117,98,115,99,114,105,98,101,114,95,107,95,52,57,0),989], [String.fromCharCode(115,101,97,108,101,100,95,109,95,50,50,0),490], [String.fromCharCode(98,95,49,57,95,98,111,111,107,109,97,114,107,0),612]]);
       let soundd: Map<any, any> = new Map([[String.fromCharCode(100,95,53,57,95,107,101,121,100,105,114,0),406], [String.fromCharCode(102,95,55,52,95,102,112,109,98,0),708], [String.fromCharCode(99,97,110,100,105,100,97,116,101,95,53,95,49,49,0),46]]);
      while (2 <= windd) {
          let faviconI: Map<any, any> = new Map([[String.fromCharCode(113,95,56,56,95,115,116,97,116,105,111,110,97,114,105,116,121,0),652], [String.fromCharCode(100,105,97,108,105,110,103,95,120,95,53,55,0),204], [String.fromCharCode(115,95,48,95,115,116,114,101,97,109,99,111,112,121,0),705]]);
          let trashL = 2;
          let loadingz = String.fromCharCode(106,95,49,56,95,99,111,112,121,104,0);
         windd /= Math.max(1, (String.fromCharCode(88,0) == loadingz ? loadingz.length : trashL));
         faviconI = new Map([[`${faviconI.size}`, faviconI.size]]);
         trashL /= Math.max(faviconI.size, 4);
         break;
      }
      let emptyN = combinedA.size >= 7172222;
      do {
         combinedA.set(project8, project8.length);
         if (emptyN) {
            break;
         }
      } while (((combinedA.size + 3) <= 1 || (3 + combinedA.size) <= 5) && emptyN);
      if ((windd & 3) >= 5 && (3 & combinedA.size) >= 2) {
         combinedA = new Map([[`${soundd.size}`, 1]]);
      }
      if (Array.from(combinedA.keys()).includes(`${windd}`)) {
          let short_pw2: Map<any, any> = new Map([[String.fromCharCode(114,97,119,95,118,95,51,55,0),740], [String.fromCharCode(115,117,112,101,114,118,105,101,119,95,54,95,49,49,0),988]]);
         combinedA.set(`${soundd.size}`, soundd.size);
         short_pw2 = new Map([[`${short_pw2.size}`, short_pw2.size % 1]]);
      }
      for (let y = 0; y < 3; y++) {
         castingv -= parseFloat(`${1}`);
      }
       let condensed6 = 4;
       let mutedn = 3;
      if ((recommendationq.length - 2) >= 4 || 3 >= (2 - soundd.size)) {
         soundd = new Map([[`${combinedA.size}`, windd % 3]]);
      }
      playK /= Math.max((parseFloat(`${(mini3 ? 4 : 5) + recommendationq.length}`)), 5);
      if (faviconX) {
         break;
      }
   } while (faviconX && (fastforwardG.get(`${playK}`) != null));
      changes = `${2 << (Math.min(2, yellow4.length))}`;
      mini3 = mini3 || fastforwardG.size <= 67;
      fastforwardG.set(`${schedule5}`, 2 ^ detailZ);
   if (changes.length <= fastforwardG.size) {
      changes = `${photo4}`;
   }

    queryClient.removeQueries(['filteredVods']);

       let alertE = false;
      while (!alertE && !alertE) {
          let description_tn8 = 2;
          let shareM = String.fromCharCode(117,99,109,112,95,55,95,57,48,0);
          let flyerA = String.fromCharCode(111,118,97,108,95,52,95,55,55,0);
         alertE = flyerA.includes(`${alertE}`);
         description_tn8 ^= description_tn8;
         shareM += `${(String.fromCharCode(81,0) == shareM ? shareM.length : description_tn8)}`;
         flyerA += `${shareM.length}`;
         break;
      }
         alertE = !alertE;
          let vietnamG = String.fromCharCode(104,97,110,110,105,110,103,95,102,95,57,49,0);
         alertE = !alertE;
         vietnamG += `${vietnamG.length}`;
      gifti /= Math.max(3, (yellow4 == String.fromCharCode(89,0) ? (vignettex ? 3 : 3) : yellow4.length));
      vignettex = (((!vignettex ? yellow4.length : 19) ^ yellow4.length) == 19);
      changes += `${1 & parseInt(`${playK}`)}`;
      playK += parseFloat(`${parseInt(`${active2}`)}`);
      schedule5 /= Math.max(5, parseFloat(`${1}`));
      photo4 >>= Math.min(Math.abs(detailZ), 3);
   while (4 == (parseInt(`${gifti}`) / (Math.max(changes.length, 4)))) {
      changes = "1";
      break;
   }
      vignettex = mini3;
    setTopicClass(sameTextAndValueObj('全部类型'));

   if (3 <= (4 - photo4)) {
      detailZ >>= Math.min(Math.abs(((mini3 ? 4 : 5) ^ parseInt(`${schedule5}`))), 3);
   }
   while ((fastforwardG.size % 3) == 3 && 1 == (fastforwardG.size / (Math.max(3, 9)))) {
      active2 += 1 * parseInt(`${playK}`);
      break;
   }
   while (!yellow4.endsWith(`${mini3}`)) {
      yellow4 = `${(parseInt(`${schedule5}`) - (vignettex ? 3 : 2))}`;
      break;
   }
   while (2 == (photo4 + 5) && (gifti + photo4) == 3.5) {
      photo4 ^= (parseInt(`${schedule5}`) | (mini3 ? 1 : 3));
      break;
   }
   let type_4U = vignettex ? !vignettex : vignettex;
   do {
      vignettex = 55 > photo4;
      if (type_4U) {
         break;
      }
   } while ((!vignettex) && type_4U);
   if (!mini3) {
       let aboutV = true;
       let right6 = 2.0;
       let album9 = String.fromCharCode(99,105,114,99,117,108,97,116,105,110,103,95,109,95,56,51,0);
          let matchesS = String.fromCharCode(101,97,99,101,110,99,95,117,95,56,57,0);
          let giftc: Map<any, any> = new Map([[String.fromCharCode(100,101,114,105,118,97,116,105,111,110,95,114,95,51,54,0),String.fromCharCode(115,108,97,115,104,95,122,95,52,54,0)], [String.fromCharCode(116,105,109,101,111,117,116,115,95,109,95,53,55,0),String.fromCharCode(107,109,115,95,117,95,50,49,0)], [String.fromCharCode(99,95,55,54,95,99,108,97,110,103,0),String.fromCharCode(122,95,56,52,95,100,101,99,108,97,114,101,0)]]);
         aboutV = !matchesS.endsWith(`${right6}`);
         matchesS = `${giftc.size}`;
         giftc.set(`${giftc.size}`, 3);
      if (!album9.startsWith(`${right6}`)) {
         right6 += album9.length;
      }
      for (let s = 0; s < 2; s++) {
          let blacklist2 = 0.0;
         right6 *= album9.length;
         blacklist2 += parseFloat(`${2 << (Math.min(Math.abs(parseInt(`${blacklist2}`)), 3))}`);
      }
          let statsn = String.fromCharCode(116,104,117,109,98,110,97,105,108,95,104,95,54,52,0);
         aboutV = !aboutV;
         statsn += `${2 * statsn.length}`;
         aboutV = !album9.endsWith(`${aboutV}`);
      while (4.0 > (right6 * 4.92)) {
          let page0 = false;
          let signinup4: Map<any, any> = new Map([[String.fromCharCode(115,97,110,101,95,55,95,51,56,0),38], [String.fromCharCode(115,112,108,105,110,101,95,102,95,52,0),924], [String.fromCharCode(111,110,116,111,95,117,95,53,56,0),888]]);
         right6 += album9.length;
         page0 = signinup4.size < signinup4.size;
         break;
      }
      for (let z = 0; z < 3; z++) {
         album9 = `${((aboutV ? 3 : 4) % (Math.max(6, parseInt(`${right6}`))))}`;
      }
         right6 += ((aboutV ? 5 : 5) / (Math.max(parseInt(`${right6}`), 10)));
          let lineR: Map<any, any> = new Map([[String.fromCharCode(101,95,49,56,95,101,120,112,108,111,100,105,110,103,0),75], [String.fromCharCode(104,111,115,116,112,111,114,116,102,105,108,101,95,118,95,53,49,0),502]]);
          let predictionu: Map<any, any> = new Map([[String.fromCharCode(102,114,97,109,101,115,105,122,101,95,118,95,56,51,0),false ], [String.fromCharCode(110,95,54,48,95,109,101,100,105,97,110,0),false ]]);
          let sinal = String.fromCharCode(103,95,51,51,95,104,101,116,97,0);
         album9 += "3";
         lineR.set(`${predictionu.size}`, 2 << (Math.min(2, Math.abs(lineR.size))));
         predictionu.set(sinal, sinal.length);
      playK /= Math.max((parseFloat(`${(vignettex ? 4 : 5)}`)), 5);
   }
      detailZ ^= ((mini3 ? 2 : 1) - (vignettex ? 5 : 1));
      gifti *= 2;
    setArea(sameTextAndValueObj('全部地区'));

   for (let q = 0; q < 1; q++) {
      active2 *= fastforwardG.size - changes.length;
   }
   if ((detailZ << (Math.min(Math.abs(4), 5))) == 2) {
      detailZ %= Math.max(1, 2 >> (Math.min(3, Math.abs(fastforwardG.size))));
   }
      active2 *= 1 & fastforwardG.size;
      changes += "3";
   let matchu = 5927741 <= fastforwardG.size;
   do {
       let philippinesl = true;
       let countdown7 = String.fromCharCode(109,111,116,105,111,110,112,105,120,101,108,115,95,53,95,53,52,0);
       let teamI = 0;
       let championM = true;
         philippinesl = !championM;
      while (countdown7.length <= 3) {
         philippinesl = teamI <= 13;
         break;
      }
      let thailandU = countdown7.length >= 7767025;
      do {
         countdown7 += `${countdown7.length / 1}`;
         if (thailandU) {
            break;
         }
      } while ((countdown7.length > 5 && !philippinesl) && thailandU);
      while (5 < (teamI + 2)) {
         championM = !countdown7.startsWith(`${philippinesl}`);
         break;
      }
         countdown7 = `${(String.fromCharCode(103,0) == countdown7 ? countdown7.length : teamI)}`;
       let default_gpp: Map<any, any> = new Map([[String.fromCharCode(99,111,100,101,115,95,57,95,57,52,0),591], [String.fromCharCode(122,95,57,55,95,97,114,99,104,105,116,101,99,116,117,114,101,0),898]]);
      while (!championM) {
          let short_rJ = 2;
          let circleQ: Map<any, any> = new Map([[String.fromCharCode(114,97,99,105,110,103,95,102,95,57,51,0),true ], [String.fromCharCode(118,95,57,53,95,105,110,105,0),false ], [String.fromCharCode(97,95,54,55,95,113,111,115,0),true ]]);
          let renewF: Array<any> = [724, 788];
         championM = circleQ.size > 89;
         short_rJ >>= Math.min(3, Math.abs(2));
         circleQ.set(`${short_rJ}`, short_rJ >> (Math.min(renewF.length, 1)));
         renewF = [short_rJ ^ 1];
         break;
      }
      let networkS = 9787403 <= teamI;
      do {
         teamI += default_gpp.size;
         if (networkS) {
            break;
         }
      } while (networkS && (!countdown7.endsWith(`${teamI}`)));
         philippinesl = (!philippinesl ? championM : !philippinesl);
      for (let a = 0; a < 2; a++) {
          let guide1: Array<any> = [873, 239];
          let dialogK = String.fromCharCode(99,95,50,54,95,115,116,114,0);
         countdown7 += `${(2 | (philippinesl ? 3 : 3))}`;
         guide1.push(guide1.length);
         dialogK = `${guide1.length * 2}`;
      }
          let firebaseC = String.fromCharCode(114,101,115,111,108,118,95,117,95,52,53,0);
          let backwardF = true;
          let snews9 = 0.0;
         philippinesl = (18 == (countdown7.length | (!backwardF ? 18 : countdown7.length)));
         firebaseC = `${parseInt(`${snews9}`) << (Math.min(Math.abs(2), 2))}`;
         backwardF = firebaseC.length < 96;
         snews9 -= parseInt(`${snews9}`);
         championM = (default_gpp.size - countdown7.length) > 64;
      fastforwardG.set(`${active2}`, parseInt(`${gifti}`));
      if (matchu) {
         break;
      }
   } while (matchu && (fastforwardG.get(`${playK}`) == null));
   if (1 > changes.length && !mini3) {
       let eactv = String.fromCharCode(118,95,53,48,95,101,112,105,99,0);
       let transferw = true;
       let uploadR = String.fromCharCode(101,120,101,99,117,116,101,95,104,95,56,53,0);
       let p_player_: Map<any, any> = new Map([[String.fromCharCode(109,95,53,51,95,109,115,122,104,0),841], [String.fromCharCode(99,95,56,53,95,117,110,114,111,108,108,101,100,0),935]]);
       let smallG: Array<any> = [51, 321];
       let sportsY = String.fromCharCode(112,97,99,107,101,116,111,117,116,95,100,95,52,49,0);
      while (!transferw) {
         sportsY = `${p_player_.size}`;
         break;
      }
      if (4 < (smallG.length / (Math.max(eactv.length, 9)))) {
          let castingS: Map<any, any> = new Map([[String.fromCharCode(98,97,99,107,115,108,97,115,104,95,100,95,55,55,0),String.fromCharCode(117,95,56,55,95,114,100,118,111,0)], [String.fromCharCode(99,95,55,95,113,116,97,98,108,101,0),String.fromCharCode(116,95,49,55,95,109,105,115,115,101,100,0)]]);
          let plashm = 4;
          let catalogv = 3.0;
          let blackQ = 3;
          let frame_37c = String.fromCharCode(97,110,97,110,100,97,110,95,115,95,55,53,0);
         eactv = `${castingS.size}`;
         castingS = new Map([[`${plashm}`, frame_37c.length]]);
         plashm /= Math.max(5, plashm ^ 1);
         catalogv *= parseInt(`${catalogv}`) & frame_37c.length;
         blackQ %= Math.max(1, (frame_37c == String.fromCharCode(48,0) ? frame_37c.length : blackQ));
      }
       let current5 = 0;
          let submitZ = String.fromCharCode(97,95,57,54,95,109,97,116,105,99,0);
          let umengx = 0.0;
          let lang6 = 0.0;
         smallG.push(submitZ.length);
         submitZ = `${3 / (Math.max(10, parseInt(`${lang6}`)))}`;
         umengx /= Math.max(parseFloat(`${parseInt(`${lang6}`) ^ 3}`), 4);
          let macaub = 0.0;
          let plashv = String.fromCharCode(98,101,103,105,110,95,51,95,54,53,0);
          let baidu_: Map<any, any> = new Map([[String.fromCharCode(99,111,101,102,117,112,100,97,116,101,112,114,111,98,115,95,105,95,49,49,0),false ], [String.fromCharCode(108,117,104,110,95,119,95,49,54,0),true ]]);
         p_player_ = new Map([[`${current5}`, 2]]);
         macaub *= (parseFloat(`${plashv == String.fromCharCode(83,0) ? plashv.length : baidu_.size}`));
         baidu_.set(plashv, parseInt(`${macaub}`));
          let headerP = false;
          let bottomn = 2.0;
          let eighteen4 = 5.0;
         p_player_.set(`${bottomn}`, (parseInt(`${bottomn}`) * (headerP ? 5 : 2)));
         headerP = 92.12 == eighteen4;
       let private_xpe = String.fromCharCode(117,110,116,105,108,95,52,95,53,57,0);
         transferw = smallG.includes(transferw);
      for (let a = 0; a < 1; a++) {
         p_player_.set(sportsY, (sportsY.length & (transferw ? 1 : 3)));
      }
          let currentQ = 1;
          let filledI: Map<any, any> = new Map([[String.fromCharCode(111,95,52,50,95,97,98,115,116,114,97,99,116,0),662], [String.fromCharCode(102,95,50,49,95,99,117,115,116,111,109,105,122,101,0),842]]);
         smallG.push(current5);
         currentQ &= filledI.size << (Math.min(4, Math.abs(currentQ)));
         filledI.set(`${currentQ}`, 2 ^ currentQ);
         current5 /= Math.max(4, 1 ^ p_player_.size);
         eactv = `${(2 ^ (transferw ? 2 : 2))}`;
      if (eactv != String.fromCharCode(83,0)) {
         uploadR = `${p_player_.size % (Math.max(3, 8))}`;
      }
         current5 += 2 << (Math.min(2, Math.abs(current5)));
      changes += "3";
   }
   while (4 == (changes.length * fastforwardG.size)) {
      changes = "1";
      break;
   }
      active2 *= parseInt(`${gifti}`);
    setLang(sameTextAndValueObj('全部语言'));

      schedule5 += parseFloat(`${1 / (Math.max(8, changes.length))}`);
      detailZ |= parseInt(`${active2}`);
   while ((schedule5 * parseFloat(`${yellow4.length}`)) >= 5.74 || 5.74 >= (schedule5 * parseFloat(`${yellow4.length}`))) {
      schedule5 /= Math.max((parseFloat(`${photo4 & (vignettex ? 5 : 5)}`)), 4);
      break;
   }
       let fieldh: Map<any, any> = new Map([[String.fromCharCode(100,106,112,101,103,95,113,95,51,50,0),490], [String.fromCharCode(120,95,54,51,95,101,114,112,105,99,0),841], [String.fromCharCode(117,95,55,55,95,108,111,115,116,0),921]]);
      while ((fieldh.size % 2) > 1 && (2 % (Math.max(10, fieldh.size))) > 4) {
         fieldh = new Map([[`${fieldh.size}`, fieldh.size + 1]]);
         break;
      }
          let filledk = String.fromCharCode(100,99,109,112,95,117,95,52,50,0);
         fieldh = new Map([[`${fieldh.size}`, 2]]);
         filledk += `${filledk.length % 3}`;
      if (1 >= (fieldh.size / (Math.max(8, fieldh.size)))) {
         fieldh.set(`${fieldh.size}`, fieldh.size / (Math.max(2, 1)));
      }
      photo4 >>= Math.min(Math.abs(fieldh.size / (Math.max(yellow4.length, 4))), 5);
      vignettex = !changes.includes(`${vignettex}`);
       let downloadingY: Map<any, any> = new Map([[String.fromCharCode(111,95,50,95,97,117,116,111,114,101,102,114,101,115,104,0),962], [String.fromCharCode(101,108,97,112,115,101,100,95,103,95,52,0),713], [String.fromCharCode(112,117,108,108,117,112,95,118,95,53,50,0),60]]);
       let type_jjA = String.fromCharCode(100,95,49,48,48,95,112,114,101,109,117,108,116,105,112,108,121,121,117,118,0);
       let historyc: Map<any, any> = new Map([[String.fromCharCode(113,95,53,48,95,101,110,116,101,114,101,100,0),364], [String.fromCharCode(110,95,52,53,95,98,108,111,99,107,100,115,112,0),344], [String.fromCharCode(122,95,54,49,95,110,105,99,101,108,121,0),662]]);
      if (type_jjA.length <= 3) {
         type_jjA = `${historyc.size ^ 3}`;
      }
         type_jjA += `${historyc.size / 3}`;
      let greyx = 4941936 <= type_jjA.length;
      do {
          let membershipp = String.fromCharCode(121,95,52,49,95,100,105,97,108,111,103,117,101,115,0);
          let agreementz: Map<any, any> = new Map([[String.fromCharCode(98,117,102,102,101,114,115,114,99,95,104,95,53,48,0),756], [String.fromCharCode(122,95,56,53,95,97,98,108,0),717]]);
          let const_cb = 2.0;
         type_jjA = "3";
         membershipp = "1";
         agreementz = new Map([[`${agreementz.size}`, agreementz.size]]);
         const_cb /= Math.max(parseInt(`${const_cb}`), 1);
         if (greyx) {
            break;
         }
      } while (greyx && (type_jjA.endsWith(`${downloadingY.size}`)));
      for (let e = 0; e < 1; e++) {
         type_jjA = `${historyc.size ^ 3}`;
      }
       let zhuboK = 5.0;
       let downO = 2.0;
      while ((downloadingY.size ^ type_jjA.length) <= 5 || (5 ^ downloadingY.size) <= 3) {
         type_jjA += `${type_jjA.length + 2}`;
         break;
      }
      while (downO <= 2.49) {
         downO /= Math.max(4, downloadingY.size >> (Math.min(Math.abs(2), 1)));
         break;
      }
      for (let p = 0; p < 1; p++) {
         zhuboK -= parseInt(`${downO}`);
      }
      while (3.69 == (downloadingY.size - zhuboK) || 5 == (parseInt(`${zhuboK}`) - downloadingY.size)) {
          let gpayc: Array<any> = [536, 836, 772];
         zhuboK += 3;
         gpayc = [3 - gpayc.length];
         break;
      }
      mini3 = (yellow4.length & type_jjA.length) > 37;
   let footballe = 5544926 >= detailZ;
   do {
       let injuryx = String.fromCharCode(116,95,50,50,95,112,114,122,112,0);
       let singleC = false;
       let usernamed: Map<any, any> = new Map([[String.fromCharCode(105,110,99,111,110,115,105,115,116,101,110,99,121,95,105,95,53,57,0),false ], [String.fromCharCode(115,95,56,54,0),false ], [String.fromCharCode(108,108,100,98,105,110,105,116,95,52,95,50,51,0),false ]]);
       let projectb = String.fromCharCode(113,95,57,53,95,98,121,116,101,115,0);
       let analyticso = true;
         usernamed.set(injuryx, ((analyticso ? 4 : 4) + 1));
      while (1 > injuryx.length && analyticso) {
         injuryx += `${injuryx.length | usernamed.size}`;
         break;
      }
      let disconnectedq = 7325732 >= injuryx.length;
      do {
         injuryx = `${projectb.length}`;
         if (disconnectedq) {
            break;
         }
      } while (disconnectedq && (projectb == String.fromCharCode(75,0)));
      while ((usernamed.size >> (Math.min(Math.abs(1), 3))) >= 5 && (1 >> (Math.min(2, Math.abs(usernamed.size)))) >= 5) {
         projectb = `${usernamed.size}`;
         break;
      }
       let filterU: Map<any, any> = new Map([[String.fromCharCode(101,100,105,116,105,110,103,95,119,95,54,57,0),537], [String.fromCharCode(114,95,52,52,95,97,115,107,0),211], [String.fromCharCode(116,95,55,48,95,101,115,116,105,109,97,116,111,114,0),107]]);
          let logoutJ = 1.0;
          let combinedW = 3;
         filterU = new Map([[`${usernamed.size}`, ((singleC ? 3 : 5) & usernamed.size)]]);
         logoutJ += combinedW + 1;
         combinedW &= parseInt(`${logoutJ}`) * 1;
       let type_f4I = String.fromCharCode(98,95,55,55,95,100,105,97,108,105,110,103,0);
         usernamed = new Map([[type_f4I, 1]]);
         usernamed.set(`${analyticso}`, 1 >> (Math.min(4, projectb.length)));
          let update_6h: Array<any> = [638, 565, 267];
         singleC = filterU.size >= 57;
         update_6h = [update_6h.length << (Math.min(Math.abs(2), 2))];
         singleC = type_f4I.length >= 47 && analyticso;
      detailZ <<= Math.min(Math.abs(2 | injuryx.length), 5);
      if (footballe) {
         break;
      }
   } while (footballe && (!mini3));
   while (1.21 <= gifti) {
      gifti += parseInt(`${active2}`) + 2;
      break;
   }
    setYear(sameTextAndValueObj('全部时间'));
  };

  const fetchVods = useCallback(
    (page: number) => {
      if (currentTopicId.toString() == "46" || currentTopicId.toString() == "44") {
        return RCanvas.getList({
          page,
          limit: LIMIT_PER_PAGE,
          tid: currentTopicId.toString(),
          by: orderBy.value,
          year: year.value !== '全部时间' ? year.value : undefined,
          orderBy: 'desc',
        }).then((data) => data.List as AWXGoogle[])
      } else {
        return RCanvas.getList({
          page,
          limit: LIMIT_PER_PAGE,
          tid: currentTopicId.toString(),
          by: orderBy.value,
          category: topicClass.value !== '全部类型' ? topicClass.value : undefined,
          area: area.value !== '全部地区' ? area.value : undefined,
          lang: lang.value !== '全部语言' ? lang.value : undefined,
          year: year.value !== '全部时间' ? year.value : undefined,
          orderBy: 'desc',
        }).then((data) => data.List as AWXGoogle[])
      }
    },
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

  
  
  
  
  

  const topicOptions: Array<YCUFrameYing> = useMemo(() => {
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
        umb_center_carousel.catalogViewsAnalytics({
          category_id: currentTopicId.toString(),
          category_name: currentTopicName.name,
        });
      }
    }
  }, [currentTopicId, topicOptions]);
  

  
  useEffect(() => {
    
    

    if (route.params.class == '短剧')
      setCurrentTopicId(46);
  }, [topicOptions]);


  useEffect(() => {
    const eventName = 'catalog';
    const eventValues = {
      pianku: 'pianku',
    };

    
    
    
    
    
    
    
    
    
    
  }, []);

  const renderNavItems = useCallback(
    ({ item }: { item: YCUFrameYing }) => {
      return (
        <TouchableOpacity
          style={{ ...styles.btn }}
          onPress={() => {
            reset();
            setCurrentTopicId(item.id);
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
    ({ item, index }: { item: AWXGoogle; index: number }) => {
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
                umb_center_carousel.catalogClicksAnalytics({
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
        <Animated.View style={{ paddingTop: 16 }}>
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
                    <DownArrow color={colors.primary} height={icons.sizes.l} width={icons.sizes.l} />
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
            keyExtractor={(item: AWXGoogle, index: number) => {
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
                    source={require('@static/images/settingsGrayZhengpian.gif')}
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
