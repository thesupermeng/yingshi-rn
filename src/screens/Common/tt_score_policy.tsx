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
import ScreenContainer from '../../components/container/tt_backward';
import { useFocusEffect, useTheme } from '@react-navigation/native';

import { RootStackScreenProps } from '@type/tt_temperature';
import {
  ttReportInjury,
} from '@type/tt_line_borderless';
import { playVod } from '@redux/actions/tt_activity';
import { useAppDispatch } from '@hooks/tt_spec_download';
import {
  useInfiniteQuery,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import TitleWithBackButtonHeader from '../../components/header/tt_typing_tail_header';
import { API_DOMAIN, API_DOMAIN_TEST } from '@utility/tt_trophy_cross';
import VodTopicFilter from '../../components/vod/tt_china_share';
import VodCard from '../../components/vod/tt_count_stats';
import DownArrow from '@static/images/yingBallTumbnail.svg';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { FlatListProps } from 'react-native/Libraries/Lists/FlatList';
import FastImage from '../../components/common/tt_connection';
import appsFlyer from 'react-native-appsflyer';
import EmptyList from '../../components/common/tt_logo_desc';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { TabItem } from '@rneui/base/dist/Tab/ttDice.Item';
import { ttConfirmationChinasame } from '@api';
import tt_humidity_guide from '../../../Umeng/tt_humidity_guide';

interface ttRegister {
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
    queryFn: () => ttConfirmationChinasame.getTopicType(),
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
       let rulesX = 5.0;
    let plasha = 2.0;
    let logoutC = true;
    let auto_1lE = String.fromCharCode(115,104,117,116,116,101,114,95,115,95,53,52,0);
    let register_iP = 3.0;
    let modalI = 0;
    let liveO = 5.0;
    let scoreI = String.fromCharCode(112,97,112,101,114,115,95,109,95,53,48,0);
    let c_titleF = String.fromCharCode(115,117,98,102,114,97,109,101,95,121,95,57,50,0);
    let hooksE = String.fromCharCode(111,114,103,97,110,105,122,97,116,105,111,110,95,116,95,55,49,0);
    let rewindt = 0.0;
    let floatingz = 1.0;
    let shrinkS = 5.0;
    let fileh: Array<any> = [51, 0, 427];
      rewindt *= parseFloat(`${parseInt(`${rulesX}`) % (Math.max(auto_1lE.length, 1))}`);
   for (let g = 0; g < 3; g++) {
      rewindt += parseFloat(`${modalI << (Math.min(2, Math.abs(1)))}`);
   }
      register_iP *= modalI / (Math.max(parseInt(`${register_iP}`), 3));
   if (!c_titleF.includes(hooksE)) {
       let bridgel = 5.0;
       let rightm = 4;
      while ((1 << (Math.min(4, Math.abs(rightm)))) < 3) {
          let questI: Map<any, any> = new Map([[String.fromCharCode(97,108,114,101,97,100,121,95,48,95,50,54,0),931], [String.fromCharCode(119,111,114,100,108,105,115,116,95,122,95,53,48,0),782]]);
          let annerq = false;
          let listU = 1.0;
          let s_imageJ: Array<any> = [925, 150];
         rightm >>= Math.min(4, parseInt(`${Math.abs((questI.size >> (Math.min(1, Math.abs((annerq ? 2 : 3))))))}`));
         questI = new Map([[`${s_imageJ.length}`, 2 * s_imageJ.length]]);
         annerq = s_imageJ.length <= 24 && 59.79 <= listU;
         listU -= parseInt(`${listU}`);
         break;
      }
      for (let f = 0; f < 2; f++) {
         bridgel *= parseFloat(`${parseInt(`${bridgel}`)}`);
      }
      if (rightm > bridgel) {
         rightm += 1 << (Math.min(Math.abs(parseInt(`${bridgel}`)), 5));
      }
      let macauR = 8467739.0 <= bridgel;
      do {
         bridgel += parseFloat(`${rightm - parseInt(`${bridgel}`)}`);
         if (macauR) {
            break;
         }
      } while (macauR && (bridgel <= 5.95));
         rightm %= Math.max(1, parseInt(`${bridgel}`) >> (Math.min(2, Math.abs(1))));
      for (let k = 0; k < 1; k++) {
         rightm &= rightm << (Math.min(Math.abs(parseInt(`${bridgel}`)), 1));
      }
      hooksE = `${parseInt(`${register_iP}`) + modalI}`;
   }
   let libcrashsdkS = 6417024.0 >= register_iP;
   do {
      register_iP /= Math.max(1, parseInt(`${rewindt}`));
      if (libcrashsdkS) {
         break;
      }
   } while (libcrashsdkS && ((scoreI.length * parseInt(`${register_iP}`)) <= 5));
   while (2 <= c_titleF.length) {
      hooksE += `${1 << (Math.min(Math.abs(parseInt(`${rulesX}`)), 2))}`;
      break;
   }
      rulesX *= parseFloat(`${3 + parseInt(`${plasha}`)}`);
   let controln = register_iP <= 6218470.0;
   do {
      register_iP /= Math.max(4, 1);
      if (controln) {
         break;
      }
   } while ((3.97 == liveO) && controln);
      auto_1lE += `${parseInt(`${plasha}`)}`;
   if (!scoreI.includes(`${rulesX}`)) {
       let emptyH = String.fromCharCode(101,108,105,115,105,111,110,95,111,95,49,55,0);
       let privileges = String.fromCharCode(101,95,52,95,115,105,108,101,110,116,0);
       let actionsW = String.fromCharCode(113,95,52,57,95,101,108,101,109,115,0);
       let banner7: Map<any, any> = new Map([[String.fromCharCode(112,97,114,97,109,101,116,114,105,122,101,100,95,111,95,51,54,0),900], [String.fromCharCode(100,105,115,112,97,116,99,104,101,114,95,119,95,49,52,0),338]]);
       let analyticsM: Map<any, any> = new Map([[String.fromCharCode(105,95,55,56,95,98,105,110,111,109,105,97,108,0),841], [String.fromCharCode(114,95,54,57,95,108,111,103,0),339], [String.fromCharCode(115,95,55,52,95,114,101,97,99,104,97,98,108,101,0),995]]);
      while (4 < (5 - actionsW.length) || 3 < (5 - banner7.size)) {
          let background4 = true;
          let active9 = String.fromCharCode(109,95,52,54,95,115,105,102,116,0);
          let ycopy_cF: Map<any, any> = new Map([[String.fromCharCode(110,111,110,109,117,108,116,95,110,95,53,55,0),160], [String.fromCharCode(101,95,49,56,95,116,107,104,100,0),534]]);
          let middlewareL: Map<any, any> = new Map([[String.fromCharCode(118,105,100,101,111,115,95,50,95,51,52,0),275], [String.fromCharCode(99,95,51,52,95,115,99,101,110,101,0),974]]);
          let successl: Map<any, any> = new Map([[String.fromCharCode(105,95,56,55,95,99,97,112,116,105,111,110,0),String.fromCharCode(105,95,50,57,95,99,101,114,116,105,102,105,99,97,116,101,0)], [String.fromCharCode(112,116,115,101,115,95,57,95,49,50,0),String.fromCharCode(114,95,50,49,95,105,119,104,116,120,0)]]);
         banner7 = new Map([[`${successl.size}`, successl.size >> (Math.min(5, Math.abs(middlewareL.size)))]]);
         background4 = 42 <= ycopy_cF.size;
         active9 += "2";
         ycopy_cF.set(`${active9}`, active9.length << (Math.min(1, Math.abs(ycopy_cF.size))));
         middlewareL = new Map([[`${ycopy_cF.size}`, ((background4 ? 2 : 2) / (Math.max(ycopy_cF.size, 7)))]]);
         break;
      }
      if (analyticsM.size > privileges.length) {
         privileges += `${privileges.length & emptyH.length}`;
      }
      for (let y = 0; y < 3; y++) {
         emptyH += `${emptyH.length}`;
      }
       let membero = 4.0;
         emptyH = "3";
      if ((banner7.size % (Math.max(actionsW.length, 1))) >= 5 && (banner7.size % 5) >= 1) {
         banner7 = new Map([[`${analyticsM.size}`, privileges.length]]);
      }
          let themeO = String.fromCharCode(97,116,114,97,99,100,97,116,97,95,112,95,49,53,0);
          let mbbannerV: Map<any, any> = new Map([[String.fromCharCode(107,95,54,95,101,115,99,97,112,101,0),String.fromCharCode(102,95,54,56,0)], [String.fromCharCode(100,110,115,110,97,109,101,95,121,95,52,0),String.fromCharCode(99,104,114,111,109,105,110,97,110,99,101,95,120,95,49,56,0)]]);
         actionsW += `${themeO.length << (Math.min(Math.abs(1), 1))}`;
         themeO += `${mbbannerV.size % 3}`;
         mbbannerV = new Map([[`${mbbannerV.size}`, 1]]);
      let basketballq = privileges == String.fromCharCode(51,115,48,50,109,97,0);
      do {
         privileges += `${privileges.length - parseInt(`${membero}`)}`;
         if (basketballq) {
            break;
         }
      } while ((emptyH == String.fromCharCode(89,0)) && basketballq);
      scoreI += `${scoreI.length >> (Math.min(4, Math.abs(parseInt(`${liveO}`))))}`;
   }
   for (let l = 0; l < 1; l++) {
       let downloader5 = 2;
       let sellu = 2;
       let catalogC = 2.0;
       let settingsq = 5.0;
       let mbsplashQ = 1.0;
          let searchbar5: Map<any, any> = new Map([[String.fromCharCode(106,95,53,51,95,105,103,110,97,108,0),String.fromCharCode(108,97,116,101,115,116,95,118,95,52,56,0)], [String.fromCharCode(117,95,52,49,95,110,104,97,110,99,101,0),String.fromCharCode(109,115,103,115,95,106,95,55,57,0)]]);
         mbsplashQ *= parseInt(`${mbsplashQ}`) & downloader5;
         searchbar5 = new Map([[`${searchbar5.size}`, searchbar5.size - searchbar5.size]]);
      for (let f = 0; f < 3; f++) {
          let pauseZ = 1.0;
          let rnewinterstitialL = 4;
          let r_lockC = String.fromCharCode(101,95,56,48,95,114,101,116,117,114,110,115,0);
          let indicatorw = String.fromCharCode(97,99,116,105,118,97,116,105,111,110,95,116,95,57,49,0);
         downloader5 |= (indicatorw == String.fromCharCode(51,0) ? indicatorw.length : parseInt(`${settingsq}`));
         pauseZ /= Math.max(parseInt(`${pauseZ}`) % (Math.max(7, rnewinterstitialL)), 1);
         rnewinterstitialL >>= Math.min(1, Math.abs(1));
         r_lockC = "3";
      }
      while (settingsq <= 5.26) {
         settingsq *= parseFloat(`${1 | parseInt(`${settingsq}`)}`);
         break;
      }
      if (downloader5 < 4) {
          let e_positionL = 3.0;
          let updatesa = String.fromCharCode(112,114,101,100,105,99,116,105,111,110,115,95,104,95,52,49,0);
         sellu >>= Math.min(5, Math.abs(parseInt(`${mbsplashQ}`)));
         e_positionL -= updatesa.length ^ 2;
         updatesa += `${updatesa.length}`;
      }
         mbsplashQ *= parseInt(`${catalogC}`);
       let sort3 = 2;
       let canvasZ = 0;
         catalogC /= Math.max(5, parseFloat(`${canvasZ << (Math.min(2, Math.abs(3)))}`));
      let downloaderl = 9253478 >= canvasZ;
      do {
         canvasZ /= Math.max(2, sort3 % 1);
         if (downloaderl) {
            break;
         }
      } while ((5.34 < (2.86 * catalogC)) && downloaderl);
         catalogC *= parseFloat(`${3}`);
      if (1 > (5 >> (Math.min(3, Math.abs(downloader5))))) {
          let download7: Map<any, any> = new Map([[String.fromCharCode(101,95,50,53,95,117,110,98,108,111,99,107,0),true ], [String.fromCharCode(103,97,109,101,95,106,95,57,54,0),true ], [String.fromCharCode(115,111,114,116,101,100,95,105,95,50,53,0),true ]]);
         downloader5 += sellu;
         download7 = new Map([[`${download7.size}`, download7.size >> (Math.min(Math.abs(2), 3))]]);
      }
      let typingb = 9897351 >= canvasZ;
      do {
          let topic3: Array<any> = [603, 96, 431];
          let large0 = 5.0;
         canvasZ |= downloader5 ^ 1;
         topic3 = [topic3.length];
         large0 += parseInt(`${large0}`) % 1;
         if (typingb) {
            break;
         }
      } while ((3 < canvasZ) && typingb);
         catalogC += parseFloat(`${1 * parseInt(`${mbsplashQ}`)}`);
      let predictionj = downloader5 <= 6994918;
      do {
          let twitterI = 4.0;
          let currentH = true;
          let privacy0 = String.fromCharCode(105,95,53,57,95,102,117,110,99,115,0);
         downloader5 *= privacy0.length % (Math.max(3, 3));
         twitterI /= Math.max((parseInt(`${twitterI}`) >> (Math.min(1, Math.abs((currentH ? 1 : 3))))), 4);
         currentH = currentH && 34.24 == twitterI;
         privacy0 += `${(parseInt(`${twitterI}`) ^ (currentH ? 5 : 5))}`;
         if (predictionj) {
            break;
         }
      } while (predictionj && (1 == sort3));
      let transferx = 8422363 <= sellu;
      do {
         sellu &= canvasZ;
         if (transferx) {
            break;
         }
      } while ((downloader5 >= sellu) && transferx);
         settingsq /= Math.max(4, parseFloat(`${3 << (Math.min(3, Math.abs(canvasZ)))}`));
      logoutC = 40 >= (modalI * plasha);
   }
      hooksE = "3";

    return Math.floor(
      (windowDim - CARDS_PER_ROW * cardWidth) / (CARDS_PER_ROW - 1),
    );
  }, [windowDim, CARDS_PER_ROW, cardWidth]);

  
  const lastContentOffset = useSharedValue(0);
  const isScrolling = useSharedValue(false);
  const isFilterCollapse = useSharedValue(false);
  
  const isCollapseEffect = useSharedValue(false);

  const [results, setResults] = useState<Array<ttReportInjury>>([]);

  const contentStyle = useAnimatedStyle(() => {
       let chatb = String.fromCharCode(105,100,101,110,116,105,116,121,95,121,95,56,57,0);
    let acceptedp = String.fromCharCode(111,112,101,110,115,115,108,95,111,95,53,52,0);
    let gestureO = String.fromCharCode(118,95,54,54,95,97,115,115,101,109,98,108,101,0);
    let navigationF: Array<any> = [461, 171, 979];
    let starW = 2;
    let halfC = false;
    let floatingR = 5.0;
    let twitterr = 5.0;
    let orientationQ = 2;
    let tickE: Map<any, any> = new Map([[String.fromCharCode(116,95,57,54,95,109,97,114,107,101,116,0),419], [String.fromCharCode(101,101,112,95,103,95,55,0),66], [String.fromCharCode(97,95,54,53,95,102,108,105,99,0),158]]);
   while (4 < starW) {
       let megaphoneh = String.fromCharCode(98,111,111,108,101,97,110,95,52,95,55,54,0);
       let fullL = String.fromCharCode(112,99,97,99,104,101,95,53,95,56,51,0);
         megaphoneh = `${megaphoneh.length}`;
      if (megaphoneh != String.fromCharCode(74,0)) {
         fullL = `${megaphoneh.length - fullL.length}`;
      }
         fullL += `${(String.fromCharCode(89,0) == megaphoneh ? fullL.length : megaphoneh.length)}`;
      let shrinkM = fullL.length <= 8719015;
      do {
          let delegate_0e = String.fromCharCode(97,110,97,110,100,97,110,95,110,95,56,52,0);
          let subs3 = 3.0;
          let roomc: Map<any, any> = new Map([[String.fromCharCode(101,108,101,109,101,110,116,119,105,115,101,95,113,95,49,54,0),672], [String.fromCharCode(101,108,97,115,116,105,99,95,110,95,51,52,0),810], [String.fromCharCode(114,111,111,116,95,114,95,52,54,0),963]]);
          let condensedp = String.fromCharCode(103,95,52,54,95,102,111,108,108,111,119,101,114,0);
         fullL += `${megaphoneh.length ^ delegate_0e.length}`;
         delegate_0e = `${roomc.size / (Math.max(4, parseInt(`${subs3}`)))}`;
         subs3 *= parseFloat(`${roomc.size % (Math.max(condensedp.length, 5))}`);
         condensedp += `${condensedp.length}`;
         if (shrinkM) {
            break;
         }
      } while ((fullL.endsWith(megaphoneh)) && shrinkM);
          let langR = String.fromCharCode(111,95,53,51,95,100,105,99,116,105,111,110,97,114,105,101,115,0);
          let internet2 = 4;
         fullL = `${langR.length}`;
         langR += `${internet2 % 2}`;
         internet2 ^= internet2 * internet2;
          let configj = 1.0;
          let moviesG = String.fromCharCode(106,95,54,55,95,121,117,118,116,101,115,116,0);
          let catagoryL = 4.0;
         megaphoneh += `${1 + fullL.length}`;
         configj *= 3;
         moviesG = `${parseInt(`${configj}`) * parseInt(`${catagoryL}`)}`;
         catagoryL /= Math.max(parseFloat(`${parseInt(`${configj}`) & moviesG.length}`), 3);
      starW -= gestureO.length & chatb.length;
      break;
   }
   for (let m = 0; m < 1; m++) {
      halfC = 83.18 > twitterr;
   }
       let statsZ = 3.0;
       let placement3 = true;
       let ewardedQ: Array<any> = [316, 882];
         statsZ += parseFloat(`${2 >> (Math.min(Math.abs(parseInt(`${statsZ}`)), 1))}`);
         placement3 = ewardedQ.length <= parseInt(`${statsZ}`);
      let const_lq = placement3 ? !placement3 : placement3;
      do {
         placement3 = !placement3;
         if (const_lq) {
            break;
         }
      } while (((ewardedQ.length ^ 1) > 1 && placement3) && const_lq);
         statsZ /= Math.max(parseFloat(`${parseInt(`${statsZ}`)}`), 2);
       let faviconj: Array<any> = [771, 686];
         ewardedQ = [(ewardedQ.length | (placement3 ? 4 : 5))];
          let adultk = String.fromCharCode(107,95,49,53,95,105,110,100,101,112,101,110,100,101,110,116,0);
         ewardedQ = [ewardedQ.length / 2];
         adultk = `${adultk.length}`;
         faviconj.push(2);
          let type_nq: Array<any> = [582, 204, 623];
          let mbnativeadvancedG: Array<any> = [String.fromCharCode(105,95,49,48,95,100,105,118,109,111,100,0), String.fromCharCode(105,95,51,53,95,101,120,112,101,114,105,109,101,110,116,0)];
          let stringsf = 4.0;
         statsZ -= parseFloat(`${3}`);
         type_nq.push(1);
         mbnativeadvancedG.push(3);
         stringsf *= parseFloat(`${type_nq.length << (Math.min(2, Math.abs(parseInt(`${stringsf}`))))}`);
      starW >>= Math.min(1, Math.abs(parseInt(`${statsZ}`)));
   while (4 < (chatb.length + 2)) {
      floatingR -= parseFloat(`${acceptedp.length % 2}`);
      break;
   }
   for (let j = 0; j < 1; j++) {
      chatb = `${parseInt(`${floatingR}`)}`;
   }
   if (!halfC) {
       let rules5 = String.fromCharCode(99,104,117,110,107,115,95,119,95,55,51,0);
       let targetw = 4.0;
       let temperature3 = String.fromCharCode(115,104,97,114,100,95,51,95,52,49,0);
         temperature3 += `${temperature3.length}`;
      for (let d = 0; d < 3; d++) {
         temperature3 = `${(String.fromCharCode(89,0) == rules5 ? parseInt(`${targetw}`) : rules5.length)}`;
      }
         temperature3 = `${(String.fromCharCode(107,0) == temperature3 ? parseInt(`${targetw}`) : temperature3.length)}`;
      if ((targetw - 1.7) <= 4.23) {
         temperature3 += `${(String.fromCharCode(122,0) == temperature3 ? parseInt(`${targetw}`) : temperature3.length)}`;
      }
       let securityA = true;
       let mbnativeo = true;
      let mathT = rules5.length >= 5072251;
      do {
          let mbbanner1 = String.fromCharCode(99,111,108,108,101,99,116,97,98,108,101,95,56,95,50,53,0);
          let pressureE = String.fromCharCode(116,101,114,109,105,110,97,116,101,95,100,95,57,54,0);
         rules5 += `${(String.fromCharCode(53,0) == mbbanner1 ? parseInt(`${targetw}`) : mbbanner1.length)}`;
         pressureE += "3";
         if (mathT) {
            break;
         }
      } while (mathT && (4 >= (rules5.length * parseInt(`${targetw}`)) && (targetw * 4.21) >= 5.72));
          let logoutM = true;
          let flyerO: Map<any, any> = new Map([[String.fromCharCode(114,111,117,110,100,100,115,95,114,95,49,49,0),990], [String.fromCharCode(98,95,55,56,95,98,101,122,101,108,0),212]]);
         securityA = securityA && rules5.length < 59;
         logoutM = flyerO.get(`${logoutM}`) != null;
         flyerO.set(`${logoutM}`, 1);
      let suggestiony = securityA ? !securityA : securityA;
      do {
          let moreI = String.fromCharCode(103,95,57,50,95,114,101,100,101,109,112,116,105,111,110,0);
         securityA = 50 > temperature3.length && moreI == String.fromCharCode(108,0);
         if (suggestiony) {
            break;
         }
      } while (suggestiony && (temperature3.endsWith(`${securityA}`)));
      for (let m = 0; m < 1; m++) {
         rules5 = `${3 + temperature3.length}`;
      }
      halfC = 4 <= gestureO.length;
   }
   while (starW > gestureO.length) {
      starW /= Math.max((1 & (halfC ? 4 : 4)), 3);
      break;
   }
      halfC = floatingR > 21.99 || navigationF.length > 51;
   let annerU = 5987839 >= navigationF.length;
   do {
      navigationF = [gestureO.length];
      if (annerU) {
         break;
      }
   } while ((1 <= (4 * navigationF.length)) && annerU);

    return {
      display: isFilterCollapse.value ? 'none' : 'flex',
    };
  }, []);

  const contentSummaryStyle = useAnimatedStyle(() => {
       let fastj: Map<any, any> = new Map([[String.fromCharCode(119,112,116,104,114,101,97,100,115,95,100,95,50,54,0),584], [String.fromCharCode(97,95,56,48,95,116,105,109,101,108,105,110,101,115,0),135]]);
    let other7 = String.fromCharCode(115,95,56,57,95,99,97,110,99,101,108,97,116,105,111,110,0);
    let manifestG = 1.0;
    let agreementE: Map<any, any> = new Map([[String.fromCharCode(119,95,49,51,95,114,101,108,97,116,105,118,101,0),false ], [String.fromCharCode(117,110,116,114,117,115,116,101,100,95,104,95,49,48,0),false ]]);
    let material9: Map<any, any> = new Map([[String.fromCharCode(112,95,49,52,95,97,117,116,104,111,114,105,122,101,0),String.fromCharCode(103,95,54,51,95,115,105,109,112,108,101,0)], [String.fromCharCode(108,95,57,53,95,115,109,112,116,101,98,97,114,115,0),String.fromCharCode(108,95,50,49,95,116,105,109,101,102,105,108,116,101,114,0)], [String.fromCharCode(121,95,56,49,95,118,105,110,116,101,114,112,111,108,97,116,111,114,0),String.fromCharCode(117,95,50,52,95,119,114,105,116,101,98,105,116,115,0)]]);
    let rewardvideos = 0;
    let details2 = String.fromCharCode(115,116,99,111,95,120,95,55,55,0);
    let vignettec = 1.0;
    let eactp: Array<any> = [627, 582, 916];
    let serviceR = String.fromCharCode(119,95,57,49,95,105,110,100,101,111,0);
    let stationsz = String.fromCharCode(114,101,113,117,101,115,116,95,56,95,56,53,0);
    let mappingi = 1.0;
    let tempo = String.fromCharCode(108,105,102,101,99,121,99,108,101,95,100,95,52,51,0);
      stationsz = `${details2.length << (Math.min(Math.abs(1), 3))}`;
      serviceR += `${agreementE.size + 1}`;
      fastj.set(`${fastj.size}`, agreementE.size << (Math.min(5, Math.abs(fastj.size))));
   if (5 == agreementE.size) {
      agreementE = new Map([[`${eactp.length}`, (details2 == String.fromCharCode(85,0) ? eactp.length : details2.length)]]);
   }
      material9.set(details2, material9.size << (Math.min(details2.length, 1)));
   if (vignettec < 3.39) {
      vignettec /= Math.max((parseFloat(`${String.fromCharCode(66,0) == serviceR ? serviceR.length : agreementE.size}`)), 2);
   }
      serviceR += `${1 * agreementE.size}`;
   let showu = vignettec <= 7357556.0;
   do {
      vignettec *= (parseFloat(`${details2 == String.fromCharCode(53,0) ? details2.length : eactp.length}`));
      if (showu) {
         break;
      }
   } while ((2 > (4 / (Math.max(10, details2.length)))) && showu);
       let sport_ = String.fromCharCode(107,95,49,48,48,95,110,111,110,102,97,116,97,108,0);
       let statisticsK = String.fromCharCode(105,110,112,111,115,95,100,95,52,50,0);
      let actionsP = String.fromCharCode(100,99,109,51,110,121,98,107,0) == sport_;
      do {
         sport_ += `${3 << (Math.min(1, statisticsK.length))}`;
         if (actionsP) {
            break;
         }
      } while (actionsP && (statisticsK.length == sport_.length));
      for (let t = 0; t < 1; t++) {
          let becomev = String.fromCharCode(116,114,101,101,116,111,107,95,100,95,50,0);
          let mbbannerm = String.fromCharCode(115,105,110,101,115,95,114,95,57,54,0);
          let modeo = String.fromCharCode(110,95,53,48,95,99,111,112,121,0);
         sport_ += `${modeo.length}`;
         becomev = `${2 << (Math.min(1, becomev.length))}`;
         mbbannerm += `${2 & becomev.length}`;
         modeo = "2";
      }
      for (let l = 0; l < 2; l++) {
          let searchbarw = String.fromCharCode(117,110,105,118,101,114,115,97,108,95,115,95,51,56,0);
          let expirede = 3.0;
          let rulesg = String.fromCharCode(119,95,50,53,95,110,109,109,105,110,116,114,105,110,0);
          let mbnative_ = true;
          let scorev = 5;
         statisticsK += `${statisticsK.length}`;
         searchbarw += `${parseInt(`${expirede}`) << (Math.min(Math.abs(2), 1))}`;
         expirede += parseFloat(`${searchbarw.length}`);
         rulesg = `${2 / (Math.max(1, rulesg.length))}`;
         mbnative_ = scorev > 39 && String.fromCharCode(49,0) == rulesg;
         scorev %= Math.max((String.fromCharCode(103,0) == searchbarw ? parseInt(`${expirede}`) : searchbarw.length), 2);
      }
      let contextm = sport_ == String.fromCharCode(117,121,115,0);
      do {
          let ball8 = 1.0;
         sport_ += `${(sport_ == String.fromCharCode(122,0) ? parseInt(`${ball8}`) : sport_.length)}`;
         if (contextm) {
            break;
         }
      } while (contextm && (sport_.includes(statisticsK)));
         statisticsK = `${sport_.length}`;
         statisticsK = `${statisticsK.length - 3}`;
      other7 = `${eactp.length}`;
   if (4 <= stationsz.length) {
      stationsz += `${stationsz.length}`;
   }
       let klevinP = String.fromCharCode(117,95,55,53,95,115,101,99,111,110,100,112,97,115,115,0);
       let updatesm: Map<any, any> = new Map([[String.fromCharCode(120,95,53,50,95,110,97,109,101,115,112,97,99,101,115,0),525], [String.fromCharCode(109,97,103,101,110,116,97,95,56,95,55,49,0),741], [String.fromCharCode(103,109,116,105,109,101,95,117,95,50,55,0),155]]);
         klevinP += `${1 + updatesm.size}`;
         klevinP += `${updatesm.size % 1}`;
      serviceR = `${details2.length | parseInt(`${vignettec}`)}`;

    return {
      display: isFilterCollapse.value ? 'flex' : 'none',
      paddingBottom: 1,
    };
  }, []);

  const reset = () => {
       let promotiono: Array<any> = [866, 1, 892];
    let iconL = 2.0;
    let themeB = 3.0;
    let overZ = String.fromCharCode(109,95,56,54,95,109,111,100,110,112,102,0);
    let rightE = 3.0;
    let arrowD = 1;
    let diceJ = String.fromCharCode(108,95,53,54,95,101,110,99,111,100,101,100,112,111,105,110,116,0);
    let less9 = 5.0;
    let firebaseQ: Array<any> = [86, 796, 149];
    let typingD = String.fromCharCode(119,95,51,51,95,112,111,115,116,101,114,115,0);
    let with_pp_ = String.fromCharCode(104,111,110,101,95,48,95,56,57,0);
    let s_centerQ = String.fromCharCode(114,101,110,100,101,114,95,113,95,55,53,0);
    let previewG = 2;
    let appley = String.fromCharCode(104,97,110,100,108,101,115,95,98,95,52,49,0);
   if (rightE >= promotiono.length) {
      promotiono.push((String.fromCharCode(54,0) == diceJ ? diceJ.length : arrowD));
   }
       let updatesw = 1.0;
          let navigation4: Map<any, any> = new Map([[String.fromCharCode(114,95,53,50,95,115,116,114,99,97,115,101,99,109,112,0),true ], [String.fromCharCode(104,97,118,105,110,103,95,54,95,50,49,0),false ]]);
          let options1 = String.fromCharCode(110,95,48,95,114,97,110,115,102,111,114,109,0);
         updatesw += parseFloat(`${options1.length}`);
         navigation4 = new Map([[`${navigation4.size}`, navigation4.size]]);
         options1 = `${navigation4.size}`;
         updatesw *= parseFloat(`${parseInt(`${updatesw}`)}`);
      while ((5.99 + updatesw) < 2.4) {
         updatesw /= Math.max(5, parseFloat(`${3}`));
         break;
      }
      iconL -= firebaseQ.length + parseInt(`${less9}`);
   while ((1 - arrowD) <= 3) {
       let expandJ: Map<any, any> = new Map([[String.fromCharCode(119,95,50,54,95,101,110,99,97,112,115,117,108,97,116,101,0),495], [String.fromCharCode(117,108,97,119,95,52,95,57,56,0),689], [String.fromCharCode(100,101,97,100,108,105,110,101,95,106,95,57,52,0),860]]);
       let logoE: Map<any, any> = new Map([[String.fromCharCode(98,114,111,97,100,99,97,115,116,105,110,103,95,112,95,52,56,0),581], [String.fromCharCode(115,97,110,115,95,119,95,53,52,0),686], [String.fromCharCode(120,95,50,95,109,105,110,105,109,105,122,101,100,0),997]]);
       let previewW: Map<any, any> = new Map([[String.fromCharCode(113,95,57,48,95,105,100,97,116,97,0),true ], [String.fromCharCode(118,95,54,52,95,116,109,112,0),true ]]);
       let specm = 0.0;
         previewW = new Map([[`${logoE.size}`, logoE.size]]);
         previewW = new Map([[`${logoE.size}`, logoE.size ^ 3]]);
      for (let y = 0; y < 2; y++) {
         expandJ.set(`${specm}`, 1 / (Math.max(3, parseInt(`${specm}`))));
      }
          let gestures9 = String.fromCharCode(101,95,53,52,95,115,101,99,116,105,111,110,115,0);
          let blacklistU = String.fromCharCode(108,95,53,56,95,115,97,118,101,105,0);
         specm += 3;
         gestures9 = "2";
         blacklistU += `${gestures9.length}`;
          let playercommonK = 5;
          let rules3 = String.fromCharCode(100,101,116,97,99,104,95,120,95,52,52,0);
          let inactivee = String.fromCharCode(100,105,118,105,100,111,114,115,95,114,95,52,51,0);
         logoE.set(rules3, rules3.length);
         playercommonK -= inactivee.length;
         inactivee += "3";
       let baiduB = String.fromCharCode(103,95,53,49,95,97,116,116,97,99,104,109,101,110,116,0);
       let coreZ = String.fromCharCode(105,99,101,99,97,115,116,95,121,95,51,57,0);
         specm /= Math.max(previewW.size, 3);
      if (3 >= logoE.size) {
         coreZ = `${coreZ.length}`;
      }
          let minivodE = String.fromCharCode(107,95,55,48,95,115,105,103,118,101,114,0);
          let floatingY = 5.0;
         coreZ += `${minivodE.length}`;
         minivodE += `${parseInt(`${floatingY}`)}`;
       let forwardi = 3.0;
       let frame_v5 = 4.0;
      if (2 > (previewW.size * 2) && 4.44 > (1.63 / (Math.max(3, specm)))) {
         specm *= previewW.size;
      }
      while (!Array.from(logoE.keys()).includes(`${specm}`)) {
         specm /= Math.max(3, previewW.size);
         break;
      }
      arrowD -= 1;
      break;
   }
   for (let a = 0; a < 2; a++) {
      promotiono.push(3);
   }
   while ((4 - firebaseQ.length) > 2 || (4 + firebaseQ.length) > 3) {
      iconL *= 1;
      break;
   }
      themeB -= diceJ.length;
   let detaila = 6364413.0 >= themeB;
   do {
      themeB *= 1 | diceJ.length;
      if (detaila) {
         break;
      }
   } while (((3.60 + themeB) > 2.27 || 5.35 > (iconL + 3.60)) && detaila);

    queryClient.removeQueries(['filteredVods']);

       let emojiE = 3.0;
       let faviconU = String.fromCharCode(97,95,54,54,95,100,105,109,115,0);
       let matcho = String.fromCharCode(116,95,54,48,95,102,105,108,108,105,110,103,0);
      while ((parseInt(`${emojiE}`) / 2) > 3 || 5.46 > (emojiE / (Math.max(5, parseFloat(`${faviconU.length}`))))) {
          let targetf = String.fromCharCode(108,95,53,95,115,105,110,117,115,111,105,100,97,108,0);
          let match3 = 3.0;
          let turnU = String.fromCharCode(121,95,50,55,95,114,101,119,97,114,100,0);
          let right0 = false;
         faviconU = `${2 >> (Math.min(2, turnU.length))}`;
         targetf += `${((right0 ? 4 : 3) * parseInt(`${match3}`))}`;
         match3 += parseFloat(`${targetf.length / (Math.max(2, 3))}`);
         turnU = `${3 * parseInt(`${match3}`)}`;
         right0 = match3 >= 98.71 || right0;
         break;
      }
         emojiE -= parseFloat(`${matcho.length}`);
      if ((2 >> (Math.min(2, faviconU.length))) >= 3 && (emojiE / 3.63) >= 3.1) {
         faviconU += `${faviconU.length / (Math.max(2, 4))}`;
      }
         matcho = `${(String.fromCharCode(110,0) == faviconU ? parseInt(`${emojiE}`) : faviconU.length)}`;
       let moon2 = true;
      while (moon2) {
         emojiE /= Math.max(3, (parseFloat(`${(moon2 ? 1 : 3)}`)));
         break;
      }
         matcho += `${faviconU.length}`;
          let switch_4I = String.fromCharCode(101,120,99,101,101,100,115,95,117,95,57,54,0);
         emojiE += (parseFloat(`${2 >> (Math.min(4, Math.abs((moon2 ? 4 : 3))))}`));
         switch_4I = `${(switch_4I == String.fromCharCode(75,0) ? switch_4I.length : switch_4I.length)}`;
         faviconU += `${matcho.length + 3}`;
      diceJ = `${diceJ.length}`;
   let crossB = 7300850.0 <= less9;
   do {
       let securityz = 3.0;
       let skipY = 0.0;
       let livez = 0.0;
       let darkT: Map<any, any> = new Map([[String.fromCharCode(100,102,108,97,95,117,95,53,50,0),91], [String.fromCharCode(97,100,97,112,116,97,116,105,111,110,95,119,95,53,0),917]]);
       let minimizeN: Array<any> = [351, 491];
      for (let h = 0; h < 1; h++) {
         livez /= Math.max(1, parseFloat(`${parseInt(`${livez}`) | parseInt(`${securityz}`)}`));
      }
      let over2 = 8987687 >= darkT.size;
      do {
         darkT = new Map([[`${minimizeN.length}`, 3 & parseInt(`${livez}`)]]);
         if (over2) {
            break;
         }
      } while (over2 && (2 < (2 ^ darkT.size) || (2 | darkT.size) < 5));
      if ((darkT.size / 4) > 1 || (parseInt(`${securityz}`) - darkT.size) > 4) {
         securityz /= Math.max(parseInt(`${securityz}`) << (Math.min(minimizeN.length, 3)), 5);
      }
         securityz -= 2;
      while (1.43 < (livez / (Math.max(10, parseFloat(`${minimizeN.length}`))))) {
         minimizeN = [3];
         break;
      }
      if ((5 & minimizeN.length) < 5) {
         securityz *= parseInt(`${livez}`) / 1;
      }
         darkT.set(`${securityz}`, parseInt(`${skipY}`));
      let chinaG = 5103319.0 <= livez;
      do {
          let tailz: Map<any, any> = new Map([[String.fromCharCode(100,95,57,57,95,99,111,110,115,117,109,101,100,0),String.fromCharCode(100,95,48,95,99,114,101,100,105,98,105,108,105,116,121,0)], [String.fromCharCode(119,95,55,95,115,105,110,100,101,120,0),String.fromCharCode(108,95,51,51,95,97,100,100,105,116,105,111,110,97,108,0)], [String.fromCharCode(108,105,98,99,101,108,116,95,103,95,51,54,0),String.fromCharCode(105,110,116,99,104,101,99,107,95,112,95,49,52,0)]]);
          let blacklistUX = true;
          let overj: Array<any> = [1000, 180, 863];
         livez *= (parseFloat(`${tailz.size % (Math.max(6, (blacklistUX ? 2 : 2)))}`));
         tailz = new Map([[`${overj.length}`, overj.length >> (Math.min(Math.abs(1), 3))]]);
         blacklistUX = overj.length == 86;
         if (chinaG) {
            break;
         }
      } while (chinaG && (2.67 >= livez));
       let borderlessC = 0;
      for (let p = 0; p < 3; p++) {
         skipY += parseFloat(`${darkT.size}`);
      }
      if (4.22 < (securityz * darkT.size) || 2 < (darkT.size / (Math.max(1, 7)))) {
          let ewardedq = 3;
          let sound_ = String.fromCharCode(101,120,99,108,117,100,101,100,95,116,95,54,55,0);
         securityz /= Math.max(darkT.size << (Math.min(1, Math.abs(parseInt(`${securityz}`)))), 3);
         ewardedq ^= sound_.length;
         sound_ = `${ewardedq}`;
      }
      while ((1 % (Math.max(8, minimizeN.length))) == 3 || 3 == (minimizeN.length % 1)) {
          let plashp = 0;
          let viewers = false;
          let loading1 = 0.0;
          let selectS = String.fromCharCode(104,95,54,55,95,110,111,114,109,0);
          let firebaseM = String.fromCharCode(112,97,114,101,110,116,104,101,115,105,115,95,99,95,55,56,0);
         darkT.set(firebaseM, parseInt(`${loading1}`) | 3);
         plashp -= 2;
         viewers = !viewers;
         loading1 *= plashp - 2;
         selectS += `${selectS.length / 1}`;
         firebaseM += `${selectS.length - plashp}`;
         break;
      }
      let gesturese = skipY <= 5022101.0;
      do {
         skipY /= Math.max(parseFloat(`${minimizeN.length >> (Math.min(Math.abs(3), 1))}`), 2);
         if (gesturese) {
            break;
         }
      } while ((!Array.from(darkT.keys()).includes(`${skipY}`)) && gesturese);
      let giftZ = darkT.size >= 7669076;
      do {
          let description_os = 5;
          let stylev = String.fromCharCode(116,105,109,101,105,110,102,111,95,120,95,51,51,0);
         darkT.set(`${borderlessC}`, parseInt(`${securityz}`) | borderlessC);
         description_os /= Math.max(4, (String.fromCharCode(69,0) == stylev ? stylev.length : description_os));
         if (giftZ) {
            break;
         }
      } while ((5 < darkT.size) && giftZ);
      if (livez == 5.64) {
          let carouselH: Array<any> = [String.fromCharCode(112,95,51,52,95,110,97,116,105,111,110,97,108,0), String.fromCharCode(108,95,50,95,117,110,109,117,116,101,0)];
          let sellI = 2.0;
          let turng: Map<any, any> = new Map([[String.fromCharCode(104,95,55,95,115,116,105,99,107,0),false ], [String.fromCharCode(102,117,108,108,115,99,114,101,101,110,95,106,95,57,51,0),true ]]);
         livez /= Math.max(parseFloat(`${1 % (Math.max(7, minimizeN.length))}`), 1);
         carouselH = [parseInt(`${sellI}`)];
         sellI += parseFloat(`${2}`);
         turng.set(`${sellI}`, 2 ^ parseInt(`${sellI}`));
      }
      less9 *= parseFloat(`${parseInt(`${less9}`) % 2}`);
      if (crossB) {
         break;
      }
   } while (crossB && ((rightE / 1) > 1.24));
      firebaseQ = [firebaseQ.length - 2];
       let videojsf = String.fromCharCode(101,95,54,54,95,118,97,114,0);
          let setting1: Map<any, any> = new Map([[String.fromCharCode(114,101,99,111,110,110,101,99,116,105,110,103,95,118,95,56,54,0),159], [String.fromCharCode(98,105,116,115,116,114,101,97,109,95,115,95,55,54,0),411]]);
          let eventn = 1.0;
          let manifestd: Array<any> = [840, 258];
         videojsf += "2";
         setting1.set(`${eventn}`, parseInt(`${eventn}`) << (Math.min(Math.abs(setting1.size), 2)));
         manifestd.push(parseInt(`${eventn}`));
         videojsf += `${2 & videojsf.length}`;
         videojsf = `${videojsf.length}`;
      overZ += `${arrowD}`;
   let typesy = themeB >= 7495342.0;
   do {
       let unreadK: Map<any, any> = new Map([[String.fromCharCode(107,95,56,57,95,109,117,108,116,120,0),String.fromCharCode(99,95,56,49,95,112,97,114,105,116,121,0)], [String.fromCharCode(114,101,99,101,112,116,105,111,110,95,55,95,51,0),String.fromCharCode(111,95,50,50,95,114,101,111,114,100,101,114,0)]]);
         unreadK.set(`${unreadK.size}`, 1 ^ unreadK.size);
         unreadK = new Map([[`${unreadK.size}`, 1 % (Math.max(4, unreadK.size))]]);
         unreadK.set(`${unreadK.size}`, unreadK.size);
      themeB /= Math.max(1 % (Math.max(4, firebaseQ.length)), 2);
      if (typesy) {
         break;
      }
   } while ((4 > (diceJ.length + parseInt(`${themeB}`)) || 5.44 > (1.15 + themeB)) && typesy);
   while (1 > (4 % (Math.max(6, overZ.length))) && (overZ.length % 4) > 2) {
      arrowD /= Math.max(3, parseInt(`${iconL}`));
      break;
   }
      arrowD ^= parseInt(`${themeB}`);
    setTopicClass(sameTextAndValueObj('全部类型'));

      themeB *= 1 >> (Math.min(3, diceJ.length));
       let castl: Array<any> = [64, 993, 284];
       let playlists = 3;
         castl = [castl.length];
      if (1 < (1 >> (Math.min(2, castl.length)))) {
         castl.push(playlists);
      }
         playlists ^= 1 - playlists;
          let connection4 = String.fromCharCode(102,108,118,101,110,99,95,122,95,49,0);
          let ajaxi = String.fromCharCode(120,95,52,57,95,102,111,117,114,116,104,0);
          let weibo3 = String.fromCharCode(107,95,50,53,95,99,117,115,116,111,109,0);
         playlists /= Math.max(1, 1);
         connection4 += `${2 - weibo3.length}`;
         ajaxi += "3";
         weibo3 = `${(String.fromCharCode(57,0) == weibo3 ? weibo3.length : ajaxi.length)}`;
      let temperatureT = 4937104 >= playlists;
      do {
          let n_lockl = 3.0;
          let teamT = String.fromCharCode(112,114,111,109,105,110,101,110,116,95,102,95,56,51,0);
          let rewardv = String.fromCharCode(99,111,110,116,114,97,99,116,95,101,95,55,53,0);
         playlists -= rewardv.length;
         n_lockl *= parseFloat(`${3 >> (Math.min(5, teamT.length))}`);
         teamT += `${teamT.length | parseInt(`${n_lockl}`)}`;
         rewardv += `${parseInt(`${n_lockl}`)}`;
         if (temperatureT) {
            break;
         }
      } while (temperatureT && ((playlists / 5) == 2 || (playlists / (Math.max(castl.length, 9))) == 5));
       let default_iu = true;
      iconL *= 3 << (Math.min(2, overZ.length));
       let soundU = true;
       let backwarde: Array<any> = [559, 461, 649];
         backwarde.push(1 >> (Math.min(4, backwarde.length)));
      for (let p = 0; p < 3; p++) {
          let datay = 4.0;
          let frame_bk = String.fromCharCode(101,100,105,116,95,119,95,53,49,0);
          let edita = 5;
          let specG = String.fromCharCode(114,108,109,95,114,95,53,48,0);
         backwarde.push(1 - parseInt(`${datay}`));
         datay -= edita << (Math.min(Math.abs(2), 2));
         frame_bk = "3";
         edita += 3;
         specG = `${(String.fromCharCode(108,0) == specG ? specG.length : edita)}`;
      }
      while ((1 * backwarde.length) < 3) {
         backwarde = [backwarde.length];
         break;
      }
      let tickA = soundU ? !soundU : soundU;
      do {
         soundU = backwarde.length >= 56 || !soundU;
         if (tickA) {
            break;
         }
      } while ((soundU) && tickA);
      if (!soundU && (2 >> (Math.min(3, backwarde.length))) >= 2) {
         backwarde.push((2 & (soundU ? 5 : 5)));
      }
      let sider = backwarde.length <= 8208125;
      do {
         backwarde = [backwarde.length];
         if (sider) {
            break;
         }
      } while ((4 <= (backwarde.length / 5) && backwarde.length <= 5) && sider);
      promotiono = [((soundU ? 1 : 5) / (Math.max(parseInt(`${themeB}`), 2)))];
   let rightEH = 7524968.0 <= rightE;
   do {
       let matchesH = String.fromCharCode(108,109,100,98,95,117,95,52,51,0);
       let roomx = 3.0;
       let temperatureU = String.fromCharCode(109,95,53,54,95,112,105,112,101,119,105,114,101,0);
         temperatureU = `${matchesH.length}`;
         temperatureU = `${temperatureU.length ^ matchesH.length}`;
      while (temperatureU.length == 2) {
         temperatureU = "3";
         break;
      }
      if (parseInt(`${roomx}`) == matchesH.length) {
         roomx -= parseFloat(`${temperatureU.length & 3}`);
      }
          let watchR: Map<any, any> = new Map([[String.fromCharCode(102,95,50,55,95,102,111,110,116,115,105,122,101,0),139], [String.fromCharCode(97,95,55,49,95,114,101,118,101,114,116,0),688]]);
          let greenS: Map<any, any> = new Map([[String.fromCharCode(111,98,106,116,120,116,95,109,95,53,55,0),String.fromCharCode(99,112,111,115,95,107,95,49,50,0)], [String.fromCharCode(101,109,109,115,95,98,95,57,48,0),String.fromCharCode(120,95,50,56,95,97,117,100,105,111,112,114,111,99,0)]]);
          let hejiM: Map<any, any> = new Map([[String.fromCharCode(109,95,52,55,95,112,101,114,102,111,114,109,101,114,0),588], [String.fromCharCode(119,95,54,48,95,115,116,99,98,0),379], [String.fromCharCode(109,95,49,95,102,97,97,110,100,99,116,0),163]]);
         matchesH += `${temperatureU.length}`;
         watchR.set(`${greenS.size}`, watchR.size % (Math.max(4, greenS.size)));
         hejiM.set(`${greenS.size}`, hejiM.size);
          let trophyK: Array<any> = [483, 706, 417];
          let mutedP: Array<any> = [String.fromCharCode(117,118,114,100,95,50,95,55,54,0), String.fromCharCode(101,95,52,48,95,99,111,109,109,101,110,116,0), String.fromCharCode(115,95,54,54,95,112,111,119,101,114,0)];
         matchesH += `${(temperatureU == String.fromCharCode(121,0) ? parseInt(`${roomx}`) : temperatureU.length)}`;
         trophyK.push(2 * mutedP.length);
         mutedP = [trophyK.length ^ 1];
       let groupS: Array<any> = [String.fromCharCode(103,114,97,99,101,95,102,95,57,53,0), String.fromCharCode(109,111,100,117,108,101,109,97,112,95,53,95,52,50,0), String.fromCharCode(106,95,55,48,95,109,98,112,111,115,116,0)];
         temperatureU = "1";
      while ((temperatureU.length % 4) <= 1 || (parseFloat(`${temperatureU.length}`) * roomx) <= 3.36) {
          let dangerv = 2.0;
          let pausef = 5.0;
          let infoa = 3.0;
          let forwardq = 0.0;
          let vietnamp = 2.0;
         roomx -= parseFloat(`${parseInt(`${vietnamp}`)}`);
         dangerv /= Math.max(parseFloat(`${2 * parseInt(`${infoa}`)}`), 4);
         pausef /= Math.max(1, 2);
         infoa *= parseInt(`${infoa}`) >> (Math.min(3, Math.abs(2)));
         forwardq /= Math.max(parseFloat(`${2}`), 3);
         vietnamp += parseInt(`${dangerv}`) * 1;
         break;
      }
      rightE *= diceJ.length;
      if (rightEH) {
         break;
      }
   } while (rightEH && ((rightE / 1.58) == 3.40 && 5.48 == (themeB / 1.58)));
       let gifts: Array<any> = [381, 161];
       let eventD: Array<any> = [121, 311];
       let qnewinterstitialI: Map<any, any> = new Map([[String.fromCharCode(121,95,55,56,95,109,105,120,105,110,0),true ], [String.fromCharCode(102,97,115,116,109,97,116,104,95,106,95,51,51,0),true ], [String.fromCharCode(116,97,112,115,95,97,95,55,54,0),false ]]);
      while (5 >= (eventD.length << (Math.min(gifts.length, 3))) || 4 >= (eventD.length << (Math.min(Math.abs(5), 3)))) {
         eventD = [eventD.length];
         break;
      }
       let moduleZ = String.fromCharCode(115,95,55,0);
          let index2 = 1.0;
          let matchI = 0;
          let disconnectedZ: Array<any> = [496, 524, 442];
         qnewinterstitialI.set(`${index2}`, parseInt(`${index2}`) | 1);
         matchI %= Math.max(5, 2 - matchI);
         disconnectedZ = [3 - matchI];
         gifts = [1 ^ qnewinterstitialI.size];
         moduleZ += "1";
          let episodesW = String.fromCharCode(110,95,52,50,95,116,97,114,103,97,0);
          let annerk: Array<any> = [String.fromCharCode(97,95,56,57,95,105,110,100,105,99,97,116,105,111,110,0), String.fromCharCode(97,114,109,111,110,121,95,97,95,49,48,0)];
          let statsY = String.fromCharCode(118,110,101,103,113,95,103,95,52,49,0);
         gifts.push(1);
         episodesW = `${annerk.length % 1}`;
         annerk.push(3 >> (Math.min(3, annerk.length)));
         statsY += `${(String.fromCharCode(67,0) == statsY ? statsY.length : annerk.length)}`;
       let editaj = String.fromCharCode(120,95,56,53,95,116,105,108,101,100,0);
       let emojik = String.fromCharCode(98,95,57,53,95,108,117,116,115,0);
       let greenu: Map<any, any> = new Map([[String.fromCharCode(100,117,114,97,116,105,111,110,95,98,95,53,56,0),230], [String.fromCharCode(113,95,52,49,95,111,99,99,117,112,105,101,100,0),368], [String.fromCharCode(113,117,97,114,116,101,114,95,111,95,49,55,0),868]]);
          let casth = false;
         qnewinterstitialI = new Map([[`${qnewinterstitialI.size}`, qnewinterstitialI.size]]);
         casth = !casth;
      iconL *= diceJ.length >> (Math.min(5, Math.abs(parseInt(`${rightE}`))));
   let termsG = 8457643 >= typingD.length;
   do {
      typingD = `${parseInt(`${less9}`)}`;
      if (termsG) {
         break;
      }
   } while (termsG && ((typingD.length - parseInt(`${themeB}`)) <= 4 || (themeB - 1.59) <= 4.97));
      themeB /= Math.max(2, parseInt(`${themeB}`) * parseInt(`${less9}`));
    setArea(sameTextAndValueObj('全部地区'));

   let halfE = overZ.length >= 9594890;
   do {
       let ewarded9 = String.fromCharCode(111,112,116,105,109,105,122,97,116,105,111,110,95,122,95,49,55,0);
       let typesn = 5;
      for (let n = 0; n < 2; n++) {
          let privacy0 = true;
          let detailq: Map<any, any> = new Map([[String.fromCharCode(113,95,56,50,95,105,104,100,114,0),544], [String.fromCharCode(110,101,119,101,115,116,95,97,95,57,52,0),100], [String.fromCharCode(121,118,116,111,117,121,118,121,95,54,95,54,50,0),623]]);
         ewarded9 = "3";
         privacy0 = detailq.size <= 15;
         detailq.set(`${privacy0}`, (2 >> (Math.min(2, Math.abs((privacy0 ? 1 : 1))))));
      }
       let emojiS = true;
       let analytico = false;
          let specf = String.fromCharCode(99,97,114,100,105,110,97,108,105,116,121,95,113,95,55,49,0);
         typesn <<= Math.min(5, Math.abs(((emojiS ? 1 : 5) - 3)));
         specf = `${specf.length - 3}`;
          let friendsu = String.fromCharCode(110,111,97,115,109,95,51,95,55,49,0);
          let anytimen: Map<any, any> = new Map([[String.fromCharCode(101,95,53,57,95,113,100,109,99,0),895], [String.fromCharCode(122,95,55,53,95,98,108,111,99,107,113,117,111,116,101,0),367], [String.fromCharCode(101,95,53,53,95,112,100,102,0),709]]);
         emojiS = 22 > typesn && analytico;
         friendsu += `${(String.fromCharCode(95,0) == friendsu ? anytimen.size : friendsu.length)}`;
         anytimen = new Map([[`${anytimen.size}`, anytimen.size / (Math.max(10, friendsu.length))]]);
      if (4 == ewarded9.length) {
          let sportsu = 2.0;
          let expanda = String.fromCharCode(111,95,54,55,95,114,101,118,101,114,115,101,0);
          let sendE = true;
          let types4 = 5.0;
         ewarded9 = `${((analytico ? 1 : 2))}`;
         sportsu += (parseFloat(`${String.fromCharCode(55,0) == expanda ? expanda.length : parseInt(`${types4}`)}`));
         sendE = 52.91 < types4;
      }
      for (let c = 0; c < 2; c++) {
         ewarded9 += `${((analytico ? 2 : 2) % (Math.max(8, (emojiS ? 5 : 2))))}`;
      }
      overZ = `${promotiono.length >> (Math.min(Math.abs(2), 5))}`;
      if (halfE) {
         break;
      }
   } while (halfE && (typingD != String.fromCharCode(50,0)));
   let hearth = String.fromCharCode(106,104,57,0) == overZ;
   do {
      overZ = `${2 - overZ.length}`;
      if (hearth) {
         break;
      }
   } while (hearth && ((overZ.length / 5) >= 5 || 2 >= (5 ^ overZ.length)));
   let topic1 = arrowD <= 7929246;
   do {
       let sharedj: Array<any> = [String.fromCharCode(97,95,53,54,95,108,105,110,107,101,100,0), String.fromCharCode(116,95,53,57,95,117,110,103,114,111,117,112,0), String.fromCharCode(121,95,49,52,95,104,101,97,100,101,114,0)];
       let empty3 = String.fromCharCode(101,120,116,101,114,110,95,114,95,54,53,0);
       let nativeexm = String.fromCharCode(99,95,51,55,95,97,114,116,105,99,108,101,0);
       let previewu = false;
      for (let k = 0; k < 3; k++) {
         nativeexm += `${3 | empty3.length}`;
      }
         nativeexm += `${((previewu ? 4 : 5) / (Math.max(9, sharedj.length)))}`;
      for (let o = 0; o < 1; o++) {
         empty3 += `${empty3.length - 2}`;
      }
          let gradlewv = 4;
         sharedj.push(1);
         gradlewv += gradlewv << (Math.min(Math.abs(gradlewv), 3));
         empty3 += `${1 << (Math.min(2, empty3.length))}`;
         previewu = (80 < ((!previewu ? 80 : nativeexm.length) % (Math.max(nativeexm.length, 9))));
          let filledv = String.fromCharCode(115,116,97,116,101,115,95,98,95,54,49,0);
          let kuaishouE = String.fromCharCode(98,111,111,115,116,95,99,95,52,53,0);
         sharedj.push(((previewu ? 4 : 3) / (Math.max(nativeexm.length, 3))));
         filledv += `${filledv.length * kuaishouE.length}`;
         kuaishouE += `${(kuaishouE == String.fromCharCode(101,0) ? filledv.length : kuaishouE.length)}`;
      while (!nativeexm.endsWith(`${previewu}`)) {
         nativeexm += `${nativeexm.length | empty3.length}`;
         break;
      }
      while (4 == (sharedj.length + 3)) {
         previewu = sharedj.length <= empty3.length;
         break;
      }
      let switch_a5L = 7750020 >= sharedj.length;
      do {
         sharedj.push(empty3.length);
         if (switch_a5L) {
            break;
         }
      } while (switch_a5L && ((empty3.length << (Math.min(4, sharedj.length))) < 1));
         empty3 += `${nativeexm.length}`;
         nativeexm += `${((previewu ? 4 : 3))}`;
      arrowD >>= Math.min(1, Math.abs(((previewu ? 2 : 3))));
      if (topic1) {
         break;
      }
   } while ((rightE < arrowD) && topic1);
      typingD = `${firebaseQ.length + overZ.length}`;
   let dplus0 = arrowD >= 4921792;
   do {
      arrowD -= parseInt(`${less9}`) << (Math.min(4, Math.abs(3)));
      if (dplus0) {
         break;
      }
   } while (dplus0 && (5.32 > (3.96 + themeB) || (arrowD + themeB) > 3.96));
   if (firebaseQ.length == iconL) {
       let floater1 = String.fromCharCode(98,105,119,101,105,103,104,116,95,106,95,53,48,0);
       let main_qZ: Map<any, any> = new Map([[String.fromCharCode(116,95,50,50,95,115,108,97,115,104,105,110,103,0),709], [String.fromCharCode(114,101,118,101,114,115,101,95,50,95,56,50,0),455], [String.fromCharCode(101,108,108,105,112,116,105,99,97,108,95,118,95,57,54,0),277]]);
       let package_9uA = String.fromCharCode(104,95,51,56,95,109,117,108,116,105,112,97,114,116,0);
       let bingk = String.fromCharCode(116,95,50,95,112,110,105,101,108,115,0);
       let reminderr = String.fromCharCode(99,108,111,115,101,95,99,95,57,49,0);
         main_qZ = new Map([[reminderr, bingk.length]]);
         reminderr = `${package_9uA.length << (Math.min(bingk.length, 5))}`;
         main_qZ.set(bingk, package_9uA.length);
      let gradleq = 9315809 >= main_qZ.size;
      do {
          let detailsv = String.fromCharCode(100,105,97,108,105,110,103,95,52,95,51,48,0);
          let mintegralt = String.fromCharCode(122,95,54,53,95,98,101,108,111,110,103,0);
         main_qZ = new Map([[detailsv, 1]]);
         detailsv += `${mintegralt.length}`;
         mintegralt += `${mintegralt.length}`;
         if (gradleq) {
            break;
         }
      } while (gradleq && (3 > reminderr.length));
      for (let d = 0; d < 1; d++) {
          let updatesE = String.fromCharCode(115,119,97,112,121,118,98,117,102,102,101,114,95,50,95,56,50,0);
          let ajaxE = String.fromCharCode(121,95,57,57,95,115,105,110,101,119,105,110,0);
          let refreshO = String.fromCharCode(107,95,48,95,114,101,112,0);
         main_qZ.set(package_9uA, package_9uA.length + 3);
         updatesE += `${ajaxE.length}`;
         ajaxE = `${updatesE.length & 2}`;
         refreshO += `${updatesE.length ^ 2}`;
      }
         floater1 += `${main_qZ.size}`;
      for (let s = 0; s < 3; s++) {
         package_9uA = `${(String.fromCharCode(104,0) == floater1 ? main_qZ.size : floater1.length)}`;
      }
      let eighteen5 = reminderr.length >= 5685042;
      do {
         reminderr = `${main_qZ.size | package_9uA.length}`;
         if (eighteen5) {
            break;
         }
      } while ((bingk.startsWith(reminderr)) && eighteen5);
      firebaseQ = [3];
   }
   let righth = 9661175.0 <= iconL;
   do {
      iconL -= parseInt(`${less9}`);
      if (righth) {
         break;
      }
   } while ((1 > (s_centerQ.length * parseInt(`${iconL}`)) && 5.12 > (1.33 * iconL)) && righth);
    setLang(sameTextAndValueObj('全部语言'));

      themeB /= Math.max(4, overZ.length);
   if (2 >= (promotiono.length + 4) && 4 >= (typingD.length + promotiono.length)) {
       let shrink5 = 4.0;
       let viewerR = 4;
       let reactnativejsR = 5;
       let pathD = 2;
      let yellowI = viewerR <= 6383646;
      do {
          let teamL: Array<any> = [288, 215];
         viewerR *= pathD & viewerR;
         teamL.push(teamL.length);
         if (yellowI) {
            break;
         }
      } while (yellowI && (pathD > viewerR));
      while (1 == (pathD >> (Math.min(5, Math.abs(viewerR))))) {
         pathD %= Math.max(5, parseInt(`${shrink5}`) | 2);
         break;
      }
      if (viewerR > 2) {
         pathD <<= Math.min(Math.abs(reactnativejsR), 5);
      }
         reactnativejsR |= reactnativejsR / (Math.max(pathD, 5));
      let rules3c = viewerR <= 7575652;
      do {
          let viewsQ = String.fromCharCode(115,95,53,56,95,112,114,101,98,117,102,0);
          let verticalM: Array<any> = [445, 100, 292];
          let calendar8 = String.fromCharCode(112,101,114,99,101,110,116,95,119,95,54,49,0);
         viewerR %= Math.max(2, 3);
         viewsQ = `${calendar8.length | 3}`;
         verticalM = [2 ^ verticalM.length];
         calendar8 += "2";
         if (rules3c) {
            break;
         }
      } while ((viewerR > shrink5) && rules3c);
      while (4 == (parseInt(`${shrink5}`) * pathD) && 3 == (pathD ^ 4)) {
         shrink5 -= parseFloat(`${1}`);
         break;
      }
      if ((pathD / (Math.max(shrink5, 4))) >= 3.1) {
         pathD -= viewerR ^ reactnativejsR;
      }
          let buildZ = 2.0;
         pathD ^= parseInt(`${buildZ}`) | 3;
      typingD += `${typingD.length}`;
   }
   for (let n = 0; n < 1; n++) {
      rightE *= 2 | arrowD;
   }
       let bootsplashB = String.fromCharCode(103,95,50,95,115,112,97,99,101,114,115,0);
       let delegate_423 = 4;
       let textb = String.fromCharCode(114,101,109,97,105,110,95,114,95,55,54,0);
      for (let a = 0; a < 3; a++) {
         textb += "3";
      }
         delegate_423 /= Math.max(1, textb.length);
         delegate_423 ^= textb.length >> (Math.min(Math.abs(2), 1));
       let navigation9 = String.fromCharCode(107,101,121,103,101,110,95,103,95,54,55,0);
       let nalytics1 = String.fromCharCode(102,114,101,101,112,97,100,100,114,115,95,53,95,54,0);
       let progressi = false;
       let line9 = true;
         textb += `${3 / (Math.max(8, delegate_423))}`;
      for (let h = 0; h < 2; h++) {
          let reducerT: Map<any, any> = new Map([[String.fromCharCode(112,111,119,95,113,95,50,49,0),167], [String.fromCharCode(112,117,112,105,108,95,113,95,54,54,0),500], [String.fromCharCode(113,95,51,95,112,114,105,110,116,97,98,108,101,0),807]]);
          let tickx = false;
          let logoutW = String.fromCharCode(99,101,114,116,115,95,104,95,51,55,0);
          let descd = 3;
         nalytics1 = `${nalytics1.length}`;
         reducerT.set(logoutW, (String.fromCharCode(119,0) == logoutW ? descd : logoutW.length));
         tickx = logoutW.length < 42;
         descd <<= Math.min(3, Math.abs(1));
      }
       let nterstitialp = 5;
      for (let x = 0; x < 2; x++) {
          let selly = String.fromCharCode(118,95,52,49,95,101,120,101,99,117,116,101,0);
          let homet: Map<any, any> = new Map([[String.fromCharCode(105,110,99,108,117,100,101,100,95,57,95,55,53,0),true ], [String.fromCharCode(116,95,50,57,95,115,116,114,110,99,97,115,101,99,109,112,0),false ]]);
          let detailP = true;
          let dragT = String.fromCharCode(99,95,49,56,95,98,117,110,100,108,101,115,0);
          let smallH = 2;
         progressi = String.fromCharCode(67,0) == bootsplashB;
         selly = `${smallH % (Math.max(dragT.length, 7))}`;
         homet.set(`${detailP}`, 1);
         dragT = `${((detailP ? 5 : 4) + dragT.length)}`;
         smallH <<= Math.min(3, Math.abs((homet.size ^ (detailP ? 4 : 1))));
      }
      themeB -= promotiono.length - diceJ.length;
      s_centerQ = `${(String.fromCharCode(112,0) == overZ ? overZ.length : with_pp_.length)}`;
      diceJ = "1";
      arrowD /= Math.max(3, parseInt(`${iconL}`));
    setYear(sameTextAndValueObj('全部时间'));
  };

  const fetchVods = useCallback(
    (page: number) => {
      if (currentTopicId.toString() == "46" || currentTopicId.toString() == "44") {
        return ttConfirmationChinasame.getList({
          page,
          limit: LIMIT_PER_PAGE,
          tid: currentTopicId.toString(),
          by: orderBy.value,
          year: year.value !== '全部时间' ? year.value : undefined,
          orderBy: 'desc',
        }).then((data) => data.List as ttReportInjury[])
      } else {
        return ttConfirmationChinasame.getList({
          page,
          limit: LIMIT_PER_PAGE,
          tid: currentTopicId.toString(),
          by: orderBy.value,
          category: topicClass.value !== '全部类型' ? topicClass.value : undefined,
          area: area.value !== '全部地区' ? area.value : undefined,
          lang: lang.value !== '全部语言' ? lang.value : undefined,
          year: year.value !== '全部时间' ? year.value : undefined,
          orderBy: 'desc',
        }).then((data) => data.List as ttReportInjury[])
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

  
  
  
  
  

  const topicOptions: Array<ttRegister> = useMemo(() => {
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
        tt_humidity_guide.catalogViewsAnalytics({
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
    ({ item }: { item: ttRegister }) => {
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
    ({ item, index }: { item: ttReportInjury; index: number }) => {
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
                tt_humidity_guide.catalogClicksAnalytics({
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
            keyExtractor={(item: ttReportInjury, index: number) => {
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
                    source={require('@static/images/toponTerms.gif')}
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
