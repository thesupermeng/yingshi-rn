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
import umb_center_carousel from '../../../../Umeng/umb_center_carousel';
import { RCanvas } from '@api';

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
       let borderlessp = false;
    let typingc: Array<any> = [273, 696];
    let largeU: Array<any> = [484, 61];
    let renewm = String.fromCharCode(100,105,115,112,0);
    let minivod3: Map<any, any> = new Map([[String.fromCharCode(102,114,111,109,0),323], [String.fromCharCode(99,111,108,117,109,115,0),797], [String.fromCharCode(97,112,101,116,97,103,0),37]]);
    let single_: Array<any> = [String.fromCharCode(103,101,110,101,114,97,108,105,122,101,100,116,105,109,101,0), String.fromCharCode(101,109,111,114,121,0)];
    let transfer8 = String.fromCharCode(97,99,114,111,115,115,102,97,100,101,95,115,95,51,49,0);
    let formE = 4.0;
    let sentryz = 5.0;
    let castingy = 3.0;
    let selectionC = false;
    let alertB = true;
    let analytic_ = 2;
    let vietnamQ = 4;
    let vietnam8 = true;
   for (let u = 0; u < 1; u++) {
       let awayY: Map<any, any> = new Map([[String.fromCharCode(114,101,102,117,110,100,0),264], [String.fromCharCode(121,100,97,121,0),478]]);
       let spec8: Array<any> = [700, 105];
      for (let e = 0; e < 1; e++) {
         spec8 = [awayY.size];
      }
      if (Array.from(awayY.keys()).includes(`${spec8.length}`)) {
         awayY.set(`${spec8.length}`, 1);
      }
      if (5 > (awayY.size >> (Math.min(Math.abs(4), 3))) && (spec8.length >> (Math.min(Math.abs(4), 3))) > 2) {
         awayY.set(`${spec8.length}`, awayY.size);
      }
      let window_vE = 9126051 >= awayY.size;
      do {
          let termsh = String.fromCharCode(103,101,116,110,101,116,119,111,114,107,112,97,114,97,109,115,0);
          let predictionr = 1.0;
          let baidul = String.fromCharCode(99,100,110,0);
         awayY = new Map([[`${awayY.size}`, 2 | awayY.size]]);
         termsh = `${baidul.length % (Math.max(1, 6))}`;
         predictionr /= Math.max(1, termsh.length + baidul.length);
         if (window_vE) {
            break;
         }
      } while ((!Array.from(awayY.keys()).includes(`${spec8.length}`)) && window_vE);
      while ((awayY.size ^ 4) == 3 || (4 ^ awayY.size) == 2) {
          let middlep = true;
          let humidityB: Array<any> = [185, 646, 435];
          let showB = 4.0;
         awayY.set(`${middlep}`, humidityB.length);
         humidityB = [parseInt(`${showB}`)];
         break;
      }
      for (let t = 0; t < 3; t++) {
         awayY = new Map([[`${awayY.size}`, 3 & awayY.size]]);
      }
      formE += (parseFloat(`${renewm.length << (Math.min(3, Math.abs((alertB ? 4 : 4))))}`));
   }
      formE /= Math.max(parseFloat(`${parseInt(`${sentryz}`)}`), 4);
      formE += parseFloat(`${parseInt(`${castingy}`) ^ parseInt(`${sentryz}`)}`);
       let actionA: Array<any> = [787, 409, 393];
       let projectx: Array<any> = [String.fromCharCode(118,102,114,101,101,0), String.fromCharCode(102,114,97,109,101,115,0)];
       let viewerj = String.fromCharCode(109,111,118,116,101,120,116,115,117,98,0);
      if (4 >= (viewerj.length * 3)) {
         projectx.push(viewerj.length + 2);
      }
         projectx = [viewerj.length];
      if (!actionA.includes(projectx.length)) {
          let volumeZ = String.fromCharCode(111,112,101,114,97,116,111,114,115,0);
          let about6 = String.fromCharCode(114,116,99,112,0);
         projectx.push(projectx.length / (Math.max(1, volumeZ.length)));
         volumeZ += `${(String.fromCharCode(54,0) == about6 ? about6.length : about6.length)}`;
      }
      let expandq = 6411418 <= projectx.length;
      do {
         projectx.push(3);
         if (expandq) {
            break;
         }
      } while (expandq && ((actionA.length - projectx.length) <= 4));
         projectx.push(viewerj.length);
         projectx.push(1);
       let emojiF = String.fromCharCode(108,111,111,107,117,112,0);
       let twitterC = String.fromCharCode(112,97,115,115,102,98,0);
      if (emojiF.length > projectx.length) {
          let reducerd = 4;
          let renewy: Map<any, any> = new Map([[String.fromCharCode(116,101,114,109,105,110,97,116,101,0),true ], [String.fromCharCode(104,111,116,0),true ], [String.fromCharCode(109,95,56,54,0),true ]]);
          let brightnessD = 1.0;
          let profile_ = String.fromCharCode(105,115,115,101,116,117,103,105,100,0);
         projectx = [2];
         reducerd -= 3;
         renewy = new Map([[profile_, profile_.length]]);
         brightnessD -= parseFloat(`${profile_.length}`);
      }
          let scorec = String.fromCharCode(99,97,109,101,108,108,105,97,0);
          let largeO = 4.0;
          let floater4: Array<any> = [425, 128, 78];
         twitterC += `${(twitterC == String.fromCharCode(111,0) ? viewerj.length : twitterC.length)}`;
         scorec += `${parseInt(`${largeO}`)}`;
         largeO *= parseFloat(`${parseInt(`${largeO}`)}`);
         floater4 = [scorec.length / (Math.max(3, parseInt(`${largeO}`)))];
      sentryz += parseFloat(`${3 - transfer8.length}`);
   let moviesU = single_.length >= 7414038;
   do {
      single_ = [transfer8.length];
      if (moviesU) {
         break;
      }
   } while (((4 ^ single_.length) == 2) && moviesU);
   if (alertB) {
       let actions8 = String.fromCharCode(115,101,116,115,111,99,107,111,112,116,0);
       let showq = 5.0;
      let viewsw = showq >= 8981153.0;
      do {
         showq *= parseFloat(`${actions8.length}`);
         if (viewsw) {
            break;
         }
      } while (((actions8.length * parseInt(`${showq}`)) >= 2 || 2 >= (2 % (Math.max(3, actions8.length)))) && viewsw);
      let shootE = actions8.length <= 9140573;
      do {
         actions8 += "3";
         if (shootE) {
            break;
         }
      } while (shootE && (4.72 == showq));
          let contextT = 5.0;
         showq -= parseFloat(`${parseInt(`${contextT}`)}`);
      if (1.69 > showq) {
         actions8 = "1";
      }
      let filedP = actions8.length >= 9066013;
      do {
          let expand5: Array<any> = [272, 681];
          let combined5 = false;
          let termsE = 5;
         actions8 += `${(termsE ^ (combined5 ? 5 : 1))}`;
         expand5.push(1);
         combined5 = expand5.length > 5 || 5 > expand5.length;
         if (filedP) {
            break;
         }
      } while ((actions8.includes(`${showq}`)) && filedP);
       let basketbally = String.fromCharCode(112,114,101,100,101,102,105,110,101,100,0);
      formE -= parseFloat(`${1}`);
   }
   while (borderlessp || selectionC) {
      borderlessp = !borderlessp || castingy == 62.19;
      break;
   }
      renewm += `${parseInt(`${castingy}`)}`;
   let sportS = alertB ? !alertB : alertB;
   do {
      alertB = formE == 53.37;
      if (sportS) {
         break;
      }
   } while ((renewm.length >= 4 && !alertB) && sportS);
       let usernameo = String.fromCharCode(112,108,97,99,101,109,97,114,107,0);
      let stationL = 8218259 <= usernameo.length;
      do {
         usernameo += `${(String.fromCharCode(76,0) == usernameo ? usernameo.length : usernameo.length)}`;
         if (stationL) {
            break;
         }
      } while (stationL && (usernameo.startsWith(`${usernameo.length}`)));
         usernameo += `${usernameo.length ^ usernameo.length}`;
      let customC = String.fromCharCode(120,103,107,119,57,0) == usernameo;
      do {
         usernameo = `${usernameo.length}`;
         if (customC) {
            break;
         }
      } while (customC && (!usernameo.endsWith(usernameo)));
      renewm += "2";
   while (2 > renewm.length || !alertB) {
      alertB = largeU.length <= castingy;
      break;
   }
   while (5 == largeU.length) {
      largeU = [((alertB ? 2 : 3) | 1)];
      break;
   }
      borderlessp = !renewm.endsWith(`${formE}`);
      castingy += 2;

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
       let orientation1: Map<any, any> = new Map([[String.fromCharCode(115,97,116,105,115,102,105,101,100,0),711], [String.fromCharCode(116,101,115,116,105,110,103,0),285]]);
    let vietnamQ = 1.0;
    let circleW: Map<any, any> = new Map([[String.fromCharCode(111,114,112,104,97,110,0),141], [String.fromCharCode(104,97,110,100,108,105,110,103,0),486], [String.fromCharCode(105,109,103,117,116,105,108,115,0),711]]);
    let placeholderg = 3;
    let filledL = String.fromCharCode(105,100,101,110,116,105,116,105,121,0);
    let upgradef = true;
    let mapping1 = String.fromCharCode(97,115,102,99,114,121,112,116,0);
    let dangerC = 1.0;
    let hejim: Array<any> = [867, 860];
    let gemfileR: Array<any> = [326, 657, 821];
    let tickg = String.fromCharCode(116,97,108,108,0);
   while ((orientation1.size >> (Math.min(Math.abs(3), 4))) <= 1 && !upgradef) {
      upgradef = placeholderg >= 62;
      break;
   }
   if (!Array.from(orientation1.values()).includes(vietnamQ)) {
       let signinupE = 5.0;
         signinupE /= Math.max(4, parseInt(`${signinupE}`));
          let appsB = String.fromCharCode(98,110,98,105,110,0);
         signinupE -= 2;
         appsB += "3";
      if (2.82 < signinupE) {
         signinupE += parseInt(`${signinupE}`);
      }
      vietnamQ *= parseFloat(`${parseInt(`${vietnamQ}`) >> (Math.min(2, Math.abs(parseInt(`${dangerC}`))))}`);
   }
      placeholderg %= Math.max(placeholderg / (Math.max(circleW.size, 9)), 3);
      orientation1 = new Map([[mapping1, parseInt(`${dangerC}`) % (Math.max(mapping1.length, 1))]]);
       let rulesc = 0.0;
      for (let j = 0; j < 2; j++) {
         rulesc += 1;
      }
         rulesc /= Math.max(2, 1 | parseInt(`${rulesc}`));
       let taiwan7 = String.fromCharCode(99,117,114,114,101,110,116,108,121,0);
      upgradef = (95 <= (circleW.size / (Math.max(7, (upgradef ? 95 : circleW.size)))));
       let umengB = true;
       let unselectedU = String.fromCharCode(102,111,117,114,115,113,117,97,114,101,0);
      let userE = unselectedU.length <= 9077519;
      do {
          let black4 = 5.0;
          let catalogF = String.fromCharCode(100,105,102,102,120,0);
          let connectionO = false;
          let stats4 = String.fromCharCode(99,117,108,102,114,101,113,0);
          let liveg = 1.0;
         unselectedU = `${(parseInt(`${liveg}`) - (umengB ? 1 : 5))}`;
         black4 /= Math.max(2, 1);
         catalogF = `${(catalogF == String.fromCharCode(121,0) ? parseInt(`${black4}`) : catalogF.length)}`;
         connectionO = connectionO && stats4.length == 86;
         stats4 = "1";
         liveg *= (catalogF == String.fromCharCode(90,0) ? (connectionO ? 4 : 4) : catalogF.length);
         if (userE) {
            break;
         }
      } while (userE && (umengB));
      if (!umengB && 5 == unselectedU.length) {
         unselectedU = `${(unselectedU == String.fromCharCode(72,0) ? (umengB ? 3 : 3) : unselectedU.length)}`;
      }
       let form_ = 3.0;
      while (umengB) {
          let annerK: Map<any, any> = new Map([[String.fromCharCode(97,118,118,115,95,97,95,55,52,0),566], [String.fromCharCode(115,116,105,99,107,101,114,112,97,99,107,0),485]]);
          let mathp = String.fromCharCode(121,111,117,114,0);
          let singaporeJ = String.fromCharCode(101,120,97,109,105,110,101,0);
          let successW = 5;
         form_ += ((umengB ? 3 : 2) % (Math.max(unselectedU.length, 4)));
         annerK.set(`${successW}`, successW * 2);
         mathp = `${successW}`;
         singaporeJ = `${annerK.size}`;
         break;
      }
       let suggestionD = String.fromCharCode(102,105,108,116,101,114,105,110,103,0);
      if (!suggestionD.endsWith(`${umengB}`)) {
         suggestionD = `${(suggestionD == String.fromCharCode(98,0) ? suggestionD.length : unselectedU.length)}`;
      }
      mapping1 = `${(mapping1.length >> (Math.min(3, Math.abs((upgradef ? 1 : 4)))))}`;
      dangerC /= Math.max(parseFloat(`${orientation1.size * parseInt(`${vietnamQ}`)}`), 3);
      circleW = new Map([[`${vietnamQ}`, 2]]);
      placeholderg /= Math.max(3, (String.fromCharCode(106,0) == filledL ? filledL.length : parseInt(`${dangerC}`)));

    return {
      display: isFilterCollapse.value ? 'none' : 'flex',
    };
  }, []);

  const contentSummaryStyle = useAnimatedStyle(() => {
       let transferD = String.fromCharCode(122,111,111,109,97,98,108,101,0);
    let subsE = String.fromCharCode(115,101,108,102,105,101,0);
    let fastN = String.fromCharCode(115,99,114,97,112,101,0);
    let private_zkA: Map<any, any> = new Map([[String.fromCharCode(116,100,115,102,95,120,95,57,50,0),189], [String.fromCharCode(99,97,110,100,108,101,0),369]]);
    let description_nd = String.fromCharCode(112,97,99,107,115,0);
    let splashx = 5;
    let yellowr = false;
    let reminderj = String.fromCharCode(111,119,110,101,114,115,104,105,112,0);
    let nalyticsD = String.fromCharCode(99,113,117,101,117,101,0);
    let match1 = 0.0;
    let handlerB = String.fromCharCode(112,97,103,101,110,117,109,98,101,114,0);
    let typingD: Array<any> = [500, 925, 119];
    let mailn: Array<any> = [580, 951];
    let shirtv = true;
    let orientation8 = String.fromCharCode(99,104,101,99,107,97,115,109,0);
    let uploadw = String.fromCharCode(111,95,53,51,95,116,117,110,110,101,108,105,110,103,0);
   while (reminderj.includes(`${yellowr}`)) {
      yellowr = 34 > typingD.length;
      break;
   }
   while (typingD.length >= description_nd.length) {
      typingD = [2];
      break;
   }
      splashx <<= Math.min(Math.abs(3 >> (Math.min(5, typingD.length))), 1);
   if (description_nd.startsWith(`${typingD.length}`)) {
       let linkd = 3.0;
          let switch_poQ = 3;
          let bellY = 0.0;
         linkd /= Math.max(4, parseFloat(`${parseInt(`${bellY}`) / (Math.max(parseInt(`${linkd}`), 2))}`));
         switch_poQ -= 2 ^ switch_poQ;
         bellY += switch_poQ << (Math.min(5, Math.abs(switch_poQ)));
         linkd += parseFloat(`${parseInt(`${linkd}`) - 3}`);
         linkd *= parseFloat(`${parseInt(`${linkd}`)}`);
      typingD.push((String.fromCharCode(88,0) == nalyticsD ? nalyticsD.length : fastN.length));
   }
   while (reminderj.length >= 5) {
       let selectg = String.fromCharCode(109,105,110,105,109,97,108,0);
       let submitO = String.fromCharCode(104,114,116,102,0);
       let anytimez: Map<any, any> = new Map([[String.fromCharCode(97,100,97,112,116,101,100,0),false ], [String.fromCharCode(115,99,101,110,101,0),false ], [String.fromCharCode(99,97,99,104,101,115,0),true ]]);
       let areaW = String.fromCharCode(108,111,103,0);
         anytimez.set(areaW, 1);
      let arrowl = areaW == String.fromCharCode(121,120,105,50,114,0);
      do {
         areaW = `${submitO.length}`;
         if (arrowl) {
            break;
         }
      } while (((anytimez.size / (Math.max(5, areaW.length))) == 3) && arrowl);
          let reminderO = 2.0;
         anytimez = new Map([[areaW, 3]]);
         reminderO /= Math.max(parseFloat(`${parseInt(`${reminderO}`) >> (Math.min(1, Math.abs(parseInt(`${reminderO}`))))}`), 3);
         areaW = `${selectg.length}`;
      while (4 >= (2 - anytimez.size) && (anytimez.size - areaW.length) >= 2) {
         anytimez = new Map([[selectg, selectg.length + 3]]);
         break;
      }
       let bodanD = String.fromCharCode(97,110,103,114,121,0);
       let playlistH = String.fromCharCode(118,105,111,108,101,116,0);
       let plashk = 2.0;
          let play8 = String.fromCharCode(100,105,118,105,115,111,114,0);
          let tickM = String.fromCharCode(112,114,101,101,109,112,104,0);
         plashk /= Math.max(2 + selectg.length, 2);
         play8 = `${tickM.length | 1}`;
         tickM = `${play8.length | tickM.length}`;
      if ((anytimez.size | areaW.length) >= 2) {
         areaW = `${(selectg == String.fromCharCode(97,0) ? selectg.length : submitO.length)}`;
      }
      let agreementk = String.fromCharCode(100,115,103,106,0) == bodanD;
      do {
         bodanD += `${areaW.length}`;
         if (agreementk) {
            break;
         }
      } while (agreementk && (1 == (1 + bodanD.length)));
          let hookh: Map<any, any> = new Map([[String.fromCharCode(109,107,118,112,97,114,115,101,114,0),52], [String.fromCharCode(99,111,114,110,101,114,115,0),770], [String.fromCharCode(122,95,52,53,95,97,99,116,117,97,108,105,122,97,116,105,111,110,0),49]]);
         anytimez = new Map([[`${anytimez.size}`, anytimez.size + submitO.length]]);
         hookh.set(`${hookh.size}`, hookh.size - hookh.size);
          let gmailL = String.fromCharCode(112,114,105,111,0);
          let downloaderR = String.fromCharCode(101,120,116,101,110,100,101,101,0);
         submitO = "3";
         gmailL += `${3 | gmailL.length}`;
         downloaderR += `${(String.fromCharCode(103,0) == downloaderR ? gmailL.length : downloaderR.length)}`;
      reminderj += "1";
      break;
   }
       let with_t6w = 0.0;
       let nativee = String.fromCharCode(102,111,114,119,97,114,100,0);
         nativee += `${parseInt(`${with_t6w}`)}`;
      for (let v = 0; v < 2; v++) {
         nativee += `${1 + nativee.length}`;
      }
          let zhengpian_ = 4.0;
         nativee = `${nativee.length}`;
         zhengpian_ *= parseFloat(`${parseInt(`${zhengpian_}`)}`);
          let formN = String.fromCharCode(104,115,98,95,57,95,49,54,0);
          let sliderT = 0.0;
          let eactv = String.fromCharCode(103,101,110,115,0);
         nativee = `${nativee.length / 1}`;
         formN = `${parseInt(`${sliderT}`)}`;
         sliderT /= Math.max(parseFloat(`${3 | formN.length}`), 1);
         eactv += `${1 + eactv.length}`;
         nativee += `${nativee.length ^ 1}`;
          let bootsplashw = String.fromCharCode(102,114,97,109,101,104,97,115,104,0);
          let signinup_ = false;
          let volumeN = 5;
         with_t6w -= volumeN << (Math.min(Math.abs(3), 1));
         bootsplashw = `${(bootsplashw.length ^ (signinup_ ? 5 : 4))}`;
         signinup_ = bootsplashw.length <= 69;
         volumeN <<= Math.min(parseInt(`${Math.abs((3 << (Math.min(3, Math.abs((signinup_ ? 2 : 1))))))}`), 2);
      fastN += `${typingD.length}`;
      subsE += `${fastN.length}`;
       let predictionT = 2.0;
      let nextu = predictionT >= 5949133.0;
      do {
         predictionT /= Math.max(parseFloat(`${1}`), 3);
         if (nextu) {
            break;
         }
      } while (nextu && (predictionT <= 5.11));
         predictionT += parseFloat(`${parseInt(`${predictionT}`) + 3}`);
      while (3.71 <= (predictionT + 2)) {
         predictionT /= Math.max(4, parseFloat(`${parseInt(`${predictionT}`)}`));
         break;
      }
      typingD = [1 ^ description_nd.length];
   if ((parseFloat(`${reminderj.length}`) * match1) < 2.37 && 1 < (4 << (Math.min(3, reminderj.length)))) {
      match1 *= (parseFloat(`${subsE == String.fromCharCode(50,0) ? (yellowr ? 5 : 2) : subsE.length}`));
   }
      yellowr = description_nd.length < nalyticsD.length;
   for (let t = 0; t < 1; t++) {
       let viewerh: Map<any, any> = new Map([[String.fromCharCode(112,114,111,102,105,108,101,95,50,95,53,54,0),177], [String.fromCharCode(100,114,97,119,116,101,120,116,0),569], [String.fromCharCode(109,105,110,111,114,0),287]]);
       let invite3 = 4.0;
       let backwardf = String.fromCharCode(98,111,111,108,0);
          let unselectedI = 3.0;
         invite3 -= parseInt(`${unselectedI}`);
         viewerh.set(`${invite3}`, backwardf.length * 3);
         viewerh = new Map([[`${viewerh.size}`, 3 | backwardf.length]]);
      let userK = backwardf == String.fromCharCode(50,51,112,107,0);
      do {
         backwardf = "1";
         if (userK) {
            break;
         }
      } while (userK && ((5.87 - invite3) < 1.25 && 1 < (parseInt(`${invite3}`) - 3)));
      while (1 >= (4 << (Math.min(3, Math.abs(viewerh.size)))) && (4 << (Math.min(4, backwardf.length))) >= 3) {
         viewerh = new Map([[backwardf, parseInt(`${invite3}`)]]);
         break;
      }
         invite3 *= parseInt(`${invite3}`) - backwardf.length;
      for (let l = 0; l < 1; l++) {
          let homet = 5.0;
          let yingA = String.fromCharCode(118,95,55,52,95,101,113,117,105,118,97,108,101,110,116,0);
          let usernameg = String.fromCharCode(105,110,118,101,114,116,101,100,0);
          let pageq = String.fromCharCode(115,117,98,114,101,115,117,108,116,0);
         invite3 += 2;
         homet += (parseFloat(`${String.fromCharCode(115,0) == usernameg ? usernameg.length : yingA.length}`));
         yingA += `${usernameg.length}`;
         pageq += `${(yingA == String.fromCharCode(113,0) ? yingA.length : parseInt(`${homet}`))}`;
      }
          let gemfile8 = String.fromCharCode(117,110,102,114,101,101,122,101,0);
          let black8: Array<any> = [704, 257, 475];
         invite3 += parseInt(`${invite3}`) & 1;
         gemfile8 = `${(String.fromCharCode(72,0) == gemfile8 ? gemfile8.length : black8.length)}`;
         black8 = [black8.length];
         invite3 += 1;
      description_nd += `${viewerh.size}`;
   }

    return {
      display: isFilterCollapse.value ? 'flex' : 'none',
      paddingBottom: 1,
    };
  }, []);

  const reset = () => {
       let yellow2 = 3;
    let goal2 = 3.0;
    let membershipv = String.fromCharCode(108,101,101,119,97,121,0);
    let zhuboP = 3.0;
    let result9 = String.fromCharCode(114,101,109,111,118,97,98,108,101,0);
    let optionsN = String.fromCharCode(97,99,99,117,114,97,116,101,0);
    let activeU = 0.0;
    let stationsn = String.fromCharCode(101,95,49,95,116,121,111,101,0);
    let penaltyv: Map<any, any> = new Map([[String.fromCharCode(100,99,98,122,108,0),242], [String.fromCharCode(116,104,114,101,97,100,112,111,111,108,0),890]]);
   for (let m = 0; m < 2; m++) {
       let countryN = true;
       let backgroundw = 0.0;
       let philippinesv = 5.0;
       let dropdownT = 1;
       let sourcei = String.fromCharCode(102,100,101,99,0);
         sourcei += `${(sourcei == String.fromCharCode(87,0) ? sourcei.length : dropdownT)}`;
      let backb = 9214070.0 >= philippinesv;
      do {
         philippinesv += parseFloat(`${dropdownT / (Math.max(1, parseInt(`${backgroundw}`)))}`);
         if (backb) {
            break;
         }
      } while (backb && (philippinesv == 5.42));
       let xvodC = String.fromCharCode(113,115,118,101,110,99,0);
       let minimizej = String.fromCharCode(100,101,106,117,100,100,101,114,0);
      for (let c = 0; c < 2; c++) {
         dropdownT += ((countryN ? 3 : 4));
      }
      for (let l = 0; l < 2; l++) {
          let expanda: Map<any, any> = new Map([[String.fromCharCode(116,105,109,105,110,103,115,97,102,101,0),994], [String.fromCharCode(97,112,112,108,101,0),120]]);
          let condensed7 = 5.0;
         dropdownT >>= Math.min(4, sourcei.length);
         expanda = new Map([[`${expanda.size}`, expanda.size]]);
         condensed7 *= parseFloat(`${expanda.size << (Math.min(2, Math.abs(parseInt(`${condensed7}`))))}`);
      }
         philippinesv *= parseFloat(`${3}`);
         xvodC += `${dropdownT & 2}`;
       let screenJ: Map<any, any> = new Map([[String.fromCharCode(115,108,101,101,112,0),String.fromCharCode(110,97,118,105,103,97,116,105,110,103,0)], [String.fromCharCode(110,97,112,115,104,111,116,0),String.fromCharCode(104,114,101,97,100,0)], [String.fromCharCode(109,105,108,105,111,110,115,0),String.fromCharCode(97,98,99,115,0)]]);
         backgroundw += (xvodC == String.fromCharCode(108,0) ? (countryN ? 2 : 4) : xvodC.length);
          let logoZ: Array<any> = [843, 713];
          let homet: Map<any, any> = new Map([[String.fromCharCode(99,111,111,114,100,105,110,97,116,101,115,0),36], [String.fromCharCode(108,97,121,111,121,116,0),914]]);
          let upload7: Map<any, any> = new Map([[String.fromCharCode(109,105,115,99,0),410], [String.fromCharCode(108,111,111,107,0),663], [String.fromCharCode(108,117,109,97,107,101,121,0),544]]);
         minimizej += `${1 << (Math.min(5, xvodC.length))}`;
         logoZ = [2];
         homet = new Map([[`${homet.size}`, 2]]);
         upload7 = new Map([[`${upload7.size}`, 1 | homet.size]]);
      let philippinesY = countryN ? !countryN : countryN;
      do {
         countryN = backgroundw == sourcei.length;
         if (philippinesY) {
            break;
         }
      } while ((!countryN && 3 >= xvodC.length) && philippinesY);
       let buffers: Array<any> = [121, 941, 154];
       let gift9: Array<any> = [545, 869];
       let actionsO = true;
          let zhubow = String.fromCharCode(116,119,111,109,0);
          let relatedV: Map<any, any> = new Map([[String.fromCharCode(109,117,108,116,105,112,108,101,0),981], [String.fromCharCode(114,101,119,114,105,116,116,101,110,0),36]]);
          let otherB = 2;
         backgroundw += minimizej.length >> (Math.min(1, Math.abs(dropdownT)));
         zhubow += `${1 ^ otherB}`;
         relatedV = new Map([[`${relatedV.size}`, otherB]]);
      for (let t = 0; t < 3; t++) {
         gift9 = [buffers.length];
      }
      yellow2 -= sourcei.length - parseInt(`${backgroundw}`);
   }
      zhuboP += parseFloat(`${result9.length}`);
   let orientationD = optionsN == String.fromCharCode(120,52,117,97,50,0);
   do {
      optionsN = "3";
      if (orientationD) {
         break;
      }
   } while (orientationD && (result9.length < optionsN.length));
   let circley = 7378168 >= yellow2;
   do {
      yellow2 *= optionsN.length & parseInt(`${activeU}`);
      if (circley) {
         break;
      }
   } while (circley && (yellow2 < activeU));
      zhuboP *= parseFloat(`${membershipv.length}`);

    queryClient.removeQueries(['filteredVods']);

   while ((3.10 + zhuboP) > 5.83 && 3.27 > (3.10 - activeU)) {
       let injury4 = String.fromCharCode(108,97,115,116,0);
       let anytimeD: Map<any, any> = new Map([[String.fromCharCode(115,111,102,116,0),true ], [String.fromCharCode(108,111,119,112,97,115,115,0),true ]]);
       let checkboxJ = 1;
          let shirtL = 4;
         anytimeD.set(injury4, injury4.length);
         shirtL &= 3 & shirtL;
          let tumbnailf = 2;
          let combined9 = 5.0;
         anytimeD.set(`${combined9}`, parseInt(`${combined9}`));
         tumbnailf >>= Math.min(1, Math.abs(tumbnailf % (Math.max(8, tumbnailf))));
      let paginationG = anytimeD.size <= 9788863;
      do {
         anytimeD.set(`${injury4}`, 3 & anytimeD.size);
         if (paginationG) {
            break;
         }
      } while (paginationG && (!injury4.endsWith(`${anytimeD.size}`)));
         checkboxJ >>= Math.min(1, Math.abs(checkboxJ / 3));
      if (1 > anytimeD.size) {
          let closeZ = String.fromCharCode(97,114,105,98,0);
          let basketballs: Map<any, any> = new Map([[String.fromCharCode(100,105,115,99,117,115,115,0),392], [String.fromCharCode(116,95,53,48,95,97,97,115,99,0),273], [String.fromCharCode(114,101,118,105,111,117,115,0),231]]);
          let desc4: Array<any> = [String.fromCharCode(99,114,101,97,116,101,98,97,108,97,110,99,101,0), String.fromCharCode(110,101,117,116,114,97,108,0)];
         anytimeD = new Map([[`${anytimeD.size}`, anytimeD.size]]);
         closeZ = "2";
         basketballs = new Map([[`${basketballs.size}`, closeZ.length]]);
         desc4 = [closeZ.length];
      }
      for (let o = 0; o < 3; o++) {
          let show3: Array<any> = [322, 256, 616];
          let statisticsM: Map<any, any> = new Map([[String.fromCharCode(108,97,112,112,101,100,0),26], [String.fromCharCode(101,108,108,105,112,115,101,0),490], [String.fromCharCode(105,99,99,112,0),554]]);
          let modityL = String.fromCharCode(108,105,115,116,101,110,105,110,103,0);
          let middlef: Map<any, any> = new Map([[String.fromCharCode(100,98,108,112,0),654], [String.fromCharCode(101,120,105,116,0),557], [String.fromCharCode(122,95,49,53,95,108,111,116,116,105,101,107,101,121,112,97,116,104,0),928]]);
          let pauseZ: Array<any> = [String.fromCharCode(117,110,98,97,110,0), String.fromCharCode(116,101,115,116,105,109,103,105,110,116,0), String.fromCharCode(115,99,111,112,101,100,0)];
         checkboxJ -= anytimeD.size >> (Math.min(modityL.length, 2));
         show3.push(show3.length - 2);
         statisticsM.set(`${statisticsM.size}`, 3);
         modityL += `${statisticsM.size << (Math.min(pauseZ.length, 3))}`;
         middlef = new Map([[`${middlef.size}`, show3.length + 2]]);
         pauseZ.push(2 >> (Math.min(2, pauseZ.length)));
      }
      if (3 > (anytimeD.size % (Math.max(injury4.length, 4))) && 4 > (anytimeD.size % 3)) {
         anytimeD = new Map([[`${anytimeD.size}`, injury4.length]]);
      }
       let areai: Array<any> = [952, 530];
       let readM: Array<any> = [215, 889];
      for (let d = 0; d < 1; d++) {
         readM.push(areai.length & 3);
      }
      activeU /= Math.max(4, 1);
      break;
   }
      membershipv += "3";
   while (1.90 >= zhuboP) {
      zhuboP /= Math.max(1, parseFloat(`${1}`));
      break;
   }
      optionsN = `${1 & result9.length}`;
      goal2 /= Math.max(3, parseFloat(`${2}`));
    setTopicClass(sameTextAndValueObj('全部类型'));

      membershipv = `${parseInt(`${goal2}`)}`;
      zhuboP += parseFloat(`${membershipv.length * 3}`);
      zhuboP *= parseFloat(`${2}`);
      membershipv += `${(String.fromCharCode(83,0) == membershipv ? membershipv.length : parseInt(`${goal2}`))}`;
   if (3 > (parseInt(`${activeU}`) * optionsN.length) && 4.1 > (activeU * 1.74)) {
      activeU *= result9.length ^ parseInt(`${goal2}`);
   }
    setArea(sameTextAndValueObj('全部地区'));

      result9 += `${membershipv.length >> (Math.min(Math.abs(1), 4))}`;
   for (let x = 0; x < 1; x++) {
      optionsN = `${parseInt(`${goal2}`)}`;
   }
      activeU /= Math.max(membershipv.length, 3);
   while (goal2 == 3.67) {
      optionsN += `${optionsN.length}`;
      break;
   }
      goal2 += parseFloat(`${yellow2 * 2}`);
    setLang(sameTextAndValueObj('全部语言'));

       let projectl = String.fromCharCode(100,111,99,117,109,101,110,116,115,0);
      if (projectl.length == 3) {
         projectl += `${1 << (Math.min(1, projectl.length))}`;
      }
      for (let y = 0; y < 3; y++) {
         projectl += `${3 | projectl.length}`;
      }
         projectl += `${projectl.length ^ projectl.length}`;
      yellow2 <<= Math.min(Math.abs(parseInt(`${goal2}`)), 2);
      optionsN = `${optionsN.length}`;
   let vietnamV = String.fromCharCode(56,99,120,51,120,0) == membershipv;
   do {
       let with_gR = String.fromCharCode(117,114,118,101,115,0);
       let desc6 = 0.0;
       let yellowl: Array<any> = [514, 126, 41];
         yellowl.push(parseInt(`${desc6}`));
         desc6 += parseFloat(`${parseInt(`${desc6}`)}`);
      for (let z = 0; z < 2; z++) {
         desc6 -= parseFloat(`${2 + yellowl.length}`);
      }
      for (let a = 0; a < 2; a++) {
         desc6 += parseFloat(`${2 >> (Math.min(4, with_gR.length))}`);
      }
         yellowl.push(yellowl.length);
      while (yellowl.length == 2) {
          let downO = String.fromCharCode(98,105,103,116,114,101,101,0);
          let condensedU = 1.0;
         yellowl.push(parseInt(`${desc6}`));
         downO = `${downO.length * 3}`;
         condensedU -= parseFloat(`${downO.length}`);
         break;
      }
         desc6 *= parseFloat(`${1 ^ with_gR.length}`);
      for (let u = 0; u < 3; u++) {
         yellowl = [3];
      }
       let detailV = 0.0;
       let speco = 5.0;
      membershipv = `${parseInt(`${goal2}`)}`;
      if (vietnamV) {
         break;
      }
   } while (vietnamV && (!membershipv.startsWith(`${activeU}`)));
      goal2 *= (parseFloat(`${optionsN == String.fromCharCode(116,0) ? optionsN.length : yellow2}`));
   while (5.58 == goal2) {
      membershipv += "1";
      break;
   }
    setYear(sameTextAndValueObj('全部时间'));
  };

  const fetchVods = useCallback(
    (page: number) => RCanvas.getList({
      page,
      limit: LIMIT_PER_PAGE,
      tid: currentTopicId.toString(),
      by: orderBy.value,
      category: topicClass.value !== '全部类型' ? topicClass.value : undefined,
      area: area.value !== '全部地区' ? area.value : undefined,
      lang: lang.value !== '全部语言' ? lang.value : undefined,
      year: year.value !== '全部时间' ? year.value : undefined,
      orderBy: 'desc',
    }).then((data) => data.List as AWXGoogle[]),
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
    const eventName = 'catalog';
    const eventValues = {
      pianku: 'pianku',
    };

    
    
    
    
    
    
    
    
    
    
  }, []);

  const renderNavItems = useCallback(
    ({ item }: { item: YCUFrameYing }) => {
      return (
        <TouchableOpacity activeOpacity={0.85}
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
                  <TouchableOpacity activeOpacity={0.85}
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
