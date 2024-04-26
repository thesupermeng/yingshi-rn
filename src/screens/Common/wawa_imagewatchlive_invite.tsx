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
import ScreenContainer from '../../components/container/wawa_nterstitial_iconpipexpand';
import { useFocusEffect, useTheme } from '@react-navigation/native';

import { RootStackScreenProps } from '@type/wawa_iconnewchat';
import {
  wawaLayoutEvent,
} from '@type/wawa_gradlew';
import { playVod } from '@redux/actions/wawa_indicator';
import { useAppDispatch } from '@hooks/wawa_root';
import {
  useInfiniteQuery,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import TitleWithBackButtonHeader from '../../components/header/wawa_matchinactive_header';
import { API_DOMAIN, API_DOMAIN_TEST } from '@utility/wawa_iconpointscore';
import VodTopicFilter from '../../components/vod/wawa_fastforward';
import VodCard from '../../components/vod/wawa_mimo_footballtrophy';
import DownArrow from '@static/images/becomeStatisticsinactiveLibavdevice.svg';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { FlatListProps } from 'react-native/Libraries/Lists/FlatList';
import FastImage from '../../components/common/wawa_iconarrowrightblack';
import appsFlyer from 'react-native-appsflyer';
import EmptyList from '../../components/common/wawa_othermatchdetailbg_videocommon';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { TabItem } from '@rneui/base/dist/Tab/wawaDefaultteam.Item';
import { wawaUsernameAdult } from '@api';
import wawa_dacccfaabfbcbadeebddcabacdffdbc_video from '../../../Umeng/wawa_dacccfaabfbcbadeebddcabacdffdbc_video';

interface wawaFullscreenminIconarrowleft {
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
    queryFn: () => wawaUsernameAdult.getTopicType(),
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
       let f_positionI = 1.0;
    let temperatureA = 1.0;
    let review9: Array<any> = [15, 850, 585];
    let membero = 1;
    let humiditya = 4.0;
    let progresst = false;
    let circleB = String.fromCharCode(117,95,49,95,100,105,115,112,111,115,101,100,0);
    let mbridgeX: Map<any, any> = new Map([[String.fromCharCode(114,101,103,95,112,95,52,54,0),434], [String.fromCharCode(101,95,50,54,95,98,103,114,97,0),95], [String.fromCharCode(118,95,54,55,95,103,109,111,99,107,0),338]]);
    let dnewsshareJ = String.fromCharCode(97,118,99,105,110,116,114,97,95,118,95,56,56,0);
    let awaye: Array<any> = [843, 324, 694];
    let regenge = 3.0;
    let dangerq = 5.0;
    let clearq: Map<any, any> = new Map([[String.fromCharCode(104,101,97,100,115,101,116,95,112,95,51,56,0),true ], [String.fromCharCode(103,95,56,52,95,100,105,97,99,114,105,116,105,99,0),true ], [String.fromCharCode(103,95,49,49,95,112,107,103,99,111,110,102,105,103,0),true ]]);
    let iconlogouts = String.fromCharCode(99,111,109,112,97,116,105,98,108,101,95,107,95,54,50,0);
    let thumbnailD: Map<any, any> = new Map([[String.fromCharCode(114,95,49,56,95,98,108,111,99,107,99,104,97,105,110,115,0),297], [String.fromCharCode(108,95,56,49,95,108,101,98,110,0),912], [String.fromCharCode(98,95,57,53,95,98,115,101,114,118,101,114,0),954]]);
       let regeng5 = 0.0;
       let yingL = String.fromCharCode(101,115,99,97,112,101,95,100,95,49,55,0);
       let attributedstringl = String.fromCharCode(120,95,55,57,95,101,114,108,101,0);
       let updatesG = String.fromCharCode(105,103,110,112,111,115,116,95,100,95,50,50,0);
       let kuaishou0 = String.fromCharCode(100,100,118,97,95,110,95,55,55,0);
      for (let z = 0; z < 2; z++) {
          let whitesmallticko = String.fromCharCode(118,105,122,105,101,114,95,99,95,57,0);
          let greeno = 3.0;
         yingL += `${attributedstringl.length / (Math.max(kuaishou0.length, 4))}`;
         whitesmallticko += `${parseInt(`${greeno}`) << (Math.min(whitesmallticko.length, 5))}`;
         greeno *= 2;
      }
      let detailsL = 6536125 <= yingL.length;
      do {
         yingL += `${kuaishou0.length}`;
         if (detailsL) {
            break;
         }
      } while (detailsL && (attributedstringl.includes(`${yingL.length}`)));
          let brightnessB: Array<any> = [320, 584, 518];
          let orientationt = String.fromCharCode(98,95,53,95,115,117,105,116,101,115,0);
          let areaR = String.fromCharCode(115,101,115,115,105,111,110,115,95,54,95,51,48,0);
         updatesG += `${orientationt.length}`;
         brightnessB.push(3 % (Math.max(9, areaR.length)));
         orientationt += `${areaR.length}`;
      while (yingL.length < 4) {
          let bufferN = 0.0;
          let googlex = 1.0;
          let statsx: Array<any> = [917, 763, 712];
          let downarroww = 3.0;
         regeng5 -= parseFloat(`${parseInt(`${bufferN}`) ^ yingL.length}`);
         bufferN /= Math.max(5, parseInt(`${googlex}`) - parseInt(`${downarroww}`));
         googlex -= parseFloat(`${1 >> (Math.min(5, statsx.length))}`);
         statsx = [parseInt(`${googlex}`)];
         downarroww /= Math.max(parseFloat(`${parseInt(`${googlex}`) ^ 1}`), 2);
         break;
      }
      while (4.71 < (regeng5 - parseFloat(`${updatesG.length}`))) {
         updatesG = "2";
         break;
      }
       let iconG = false;
      for (let s = 0; s < 3; s++) {
         yingL += `${attributedstringl.length & 3}`;
      }
         iconG = !attributedstringl.includes(`${regeng5}`);
      regenge += review9.length;
   if ((temperatureA / (Math.max(review9.length, 1))) >= 3.95 && (2 << (Math.min(2, review9.length))) >= 3) {
       let star4 = String.fromCharCode(112,95,50,57,95,99,101,110,116,114,97,108,108,121,0);
       let bufferu = String.fromCharCode(105,110,99,114,101,97,115,101,95,97,95,50,49,0);
       let libglogU = String.fromCharCode(97,95,56,52,95,97,117,116,111,99,108,101,97,114,0);
         libglogU += `${bufferu.length % (Math.max(2, 7))}`;
          let giflivestreamingj = String.fromCharCode(114,101,99,116,97,110,103,108,101,95,52,95,52,0);
         star4 += `${bufferu.length}`;
         giflivestreamingj = `${(String.fromCharCode(95,0) == giflivestreamingj ? giflivestreamingj.length : giflivestreamingj.length)}`;
         star4 += `${(star4 == String.fromCharCode(73,0) ? bufferu.length : star4.length)}`;
         bufferu = `${bufferu.length / 2}`;
      let logoutw = libglogU == String.fromCharCode(118,54,57,0);
      do {
         libglogU += `${(String.fromCharCode(77,0) == libglogU ? libglogU.length : bufferu.length)}`;
         if (logoutw) {
            break;
         }
      } while ((2 <= libglogU.length || 2 <= bufferu.length) && logoutw);
         libglogU = "2";
      if (bufferu.length >= 4) {
         star4 += "3";
      }
         bufferu += `${libglogU.length}`;
         bufferu += `${libglogU.length}`;
      review9.push(awaye.length);
   }
      mbridgeX = new Map([[`${mbridgeX.size}`, mbridgeX.size << (Math.min(2, Math.abs(parseInt(`${humiditya}`))))]]);
   if (!review9.includes(humiditya)) {
       let more0: Map<any, any> = new Map([[String.fromCharCode(115,99,97,108,97,98,108,101,95,56,95,51,51,0),458], [String.fromCharCode(100,111,119,110,108,111,97,100,95,51,95,57,56,0),508]]);
         more0.set(`${more0.size}`, more0.size & more0.size);
          let feedbacks: Array<any> = [755, 194];
         more0.set(`${feedbacks.length}`, more0.size);
          let emojiheart8 = String.fromCharCode(107,95,51,53,95,102,114,97,109,101,0);
          let defaultroombgn: Array<any> = [810, 260];
          let componentregistry4 = 4;
         more0.set(emojiheart8, 1);
         emojiheart8 += `${componentregistry4 << (Math.min(4, Math.abs(3)))}`;
         defaultroombgn = [componentregistry4];
      humiditya /= Math.max(4, (parseFloat(`${awaye.length | (progresst ? 2 : 4)}`)));
   }
   for (let u = 0; u < 3; u++) {
       let disconnected5 = false;
       let halfg = String.fromCharCode(111,118,101,114,114,105,100,101,110,95,97,95,56,55,0);
         halfg = `${halfg.length}`;
      let live6 = 9237416 >= halfg.length;
      do {
         halfg += `${((disconnected5 ? 5 : 5) & halfg.length)}`;
         if (live6) {
            break;
         }
      } while (live6 && (halfg.length > 2));
          let rules8 = true;
         disconnected5 = !disconnected5 && !rules8;
      while (halfg.length <= 4) {
         halfg = `${((disconnected5 ? 3 : 2) + halfg.length)}`;
         break;
      }
       let subouts: Array<any> = [634, 254];
       let orangeticku: Array<any> = [912, 321, 620];
         disconnected5 = subouts.length > 36 && disconnected5;
      awaye.push(membero % 1);
   }
       let telemetryc: Map<any, any> = new Map([[String.fromCharCode(114,95,57,57,95,99,97,112,105,116,97,108,105,122,97,116,105,111,110,0),607], [String.fromCharCode(103,95,49,53,95,112,114,101,116,101,110,100,0),644], [String.fromCharCode(111,98,115,101,114,118,101,100,95,118,95,51,48,0),657]]);
       let castingx = 0.0;
         castingx += parseFloat(`${1 + telemetryc.size}`);
      let iconnewchatg = 9667225 <= telemetryc.size;
      do {
          let iconsharefriends2 = String.fromCharCode(116,95,56,55,95,102,105,108,108,101,100,0);
          let tempnodatagif3 = 4;
          let abidetect1: Array<any> = [String.fromCharCode(104,95,57,56,95,108,105,98,115,109,98,99,0), String.fromCharCode(112,95,51,51,95,98,105,116,114,118,0), String.fromCharCode(115,114,116,112,95,103,95,51,55,0)];
          let middle8 = true;
         telemetryc.set(`${tempnodatagif3}`, 1 + tempnodatagif3);
         iconsharefriends2 = `${(iconsharefriends2 == String.fromCharCode(99,0) ? iconsharefriends2.length : abidetect1.length)}`;
         abidetect1 = [abidetect1.length];
         middle8 = iconsharefriends2.length < abidetect1.length;
         if (iconnewchatg) {
            break;
         }
      } while (iconnewchatg && ((2.12 * castingx) > 4.67 || 2 > (4 ^ telemetryc.size)));
         telemetryc.set(`${castingx}`, 2 % (Math.max(1, telemetryc.size)));
       let agreementy = String.fromCharCode(99,114,101,97,116,101,101,120,95,121,95,49,57,0);
      let floating3 = 8685345 >= telemetryc.size;
      do {
         telemetryc.set(`${castingx}`, parseInt(`${castingx}`));
         if (floating3) {
            break;
         }
      } while (floating3 && ((telemetryc.size * agreementy.length) >= 4));
       let mapbufferQ = String.fromCharCode(114,95,49,57,95,105,102,97,109,115,103,0);
       let pathv = String.fromCharCode(114,95,54,52,95,97,115,115,105,103,110,0);
      dnewsshareJ = `${parseInt(`${temperatureA}`)}`;
   for (let l = 0; l < 1; l++) {
      membero += mbridgeX.size >> (Math.min(2, Math.abs(parseInt(`${temperatureA}`))));
   }
       let gradlewf = 0;
       let interstitialJ = 2;
       let recommendationt = String.fromCharCode(101,118,112,111,114,116,111,112,95,108,95,56,0);
         interstitialJ |= recommendationt.length;
      let upgradeK = 8830890 <= gradlewf;
      do {
          let release_lcf = String.fromCharCode(114,101,97,108,105,102,121,95,56,95,50,54,0);
          let productg = 4.0;
          let hooksy = 2;
         gradlewf &= interstitialJ;
         release_lcf += "1";
         productg /= Math.max(1, 1);
         hooksy ^= hooksy | 1;
         if (upgradeK) {
            break;
         }
      } while (upgradeK && (3 == (1 * gradlewf)));
      if (interstitialJ < 5) {
         interstitialJ /= Math.max(1, 2);
      }
      for (let k = 0; k < 3; k++) {
         gradlewf |= gradlewf / (Math.max(interstitialJ, 2));
      }
      while ((interstitialJ ^ 2) >= 1) {
         interstitialJ >>= Math.min(5, Math.abs(interstitialJ));
         break;
      }
      let eyeopenJ = interstitialJ >= 8887812;
      do {
         interstitialJ &= interstitialJ;
         if (eyeopenJ) {
            break;
         }
      } while ((!recommendationt.includes(`${interstitialJ}`)) && eyeopenJ);
      while (4 < (interstitialJ / (Math.max(1, gradlewf)))) {
          let libreactnativeblobF = 0.0;
         interstitialJ *= gradlewf >> (Math.min(Math.abs(parseInt(`${libreactnativeblobF}`)), 4));
         break;
      }
         gradlewf |= 3 / (Math.max(4, interstitialJ));
         interstitialJ >>= Math.min(Math.abs(3), 4);
      temperatureA /= Math.max(recommendationt.length | 1, 5);
       let owngoalC = 2.0;
       let light6 = 1;
      while (4 >= (light6 / (Math.max(10, parseInt(`${owngoalC}`)))) && 3.23 >= (owngoalC / 4.67)) {
         light6 += 3 / (Math.max(light6, 8));
         break;
      }
      if ((owngoalC / 2.30) >= 3.37 || 3 >= (3 | light6)) {
         light6 &= 1 << (Math.min(Math.abs(parseInt(`${owngoalC}`)), 3));
      }
      for (let b = 0; b < 1; b++) {
         owngoalC -= light6 ^ 1;
      }
          let iconarrowleft7 = 1.0;
          let ballp = 0.0;
         light6 -= 2;
         iconarrowleft7 += parseFloat(`${parseInt(`${iconarrowleft7}`) / (Math.max(10, parseInt(`${ballp}`)))}`);
         ballp += parseFloat(`${parseInt(`${iconarrowleft7}`) << (Math.min(2, Math.abs(parseInt(`${ballp}`))))}`);
          let dragx: Array<any> = [String.fromCharCode(121,95,56,53,95,100,115,116,114,101,97,109,0), String.fromCharCode(112,108,97,116,102,111,114,109,95,110,95,50,56,0), String.fromCharCode(114,101,110,100,101,114,95,53,95,50,48,0)];
         light6 ^= 1;
         dragx.push(dragx.length);
      let basketballawayteamY = 5217273 >= light6;
      do {
          let smallorangemane = 5.0;
         light6 %= Math.max(2, 4);
         smallorangemane *= parseInt(`${smallorangemane}`) + 1;
         if (basketballawayteamY) {
            break;
         }
      } while (basketballawayteamY && ((light6 + owngoalC) <= 2.79 || (2.79 + owngoalC) <= 3.45));
      review9 = [3 << (Math.min(2, Math.abs(parseInt(`${temperatureA}`))))];
   let bridge0 = regenge <= 6984119.0;
   do {
      regenge *= 3 & dnewsshareJ.length;
      if (bridge0) {
         break;
      }
   } while (bridge0 && (2.18 <= (regenge / 5.67)));
   for (let n = 0; n < 1; n++) {
      membero <<= Math.min(2, Math.abs(parseInt(`${temperatureA}`) * 3));
   }

    return Math.floor(
      (windowDim - CARDS_PER_ROW * cardWidth) / (CARDS_PER_ROW - 1),
    );
  }, [windowDim, CARDS_PER_ROW, cardWidth]);

  
  const lastContentOffset = useSharedValue(0);
  const isScrolling = useSharedValue(false);
  const isFilterCollapse = useSharedValue(false);
  
  const isCollapseEffect = useSharedValue(false);

  const [results, setResults] = useState<Array<wawaLayoutEvent>>([]);

  const contentStyle = useAnimatedStyle(() => {
       let static_hG = 2.0;
    let predictionbannerL = String.fromCharCode(98,95,53,49,95,98,105,97,115,0);
    let smallY: Map<any, any> = new Map([[String.fromCharCode(109,95,50,52,95,115,105,103,115,97,102,101,0),212], [String.fromCharCode(118,95,49,55,95,99,115,115,0),321], [String.fromCharCode(99,117,114,118,101,95,106,95,50,0),470]]);
    let downloadedR = String.fromCharCode(103,114,97,100,105,101,110,116,115,95,118,95,57,53,0);
    let watchQ = String.fromCharCode(119,95,49,51,95,111,100,100,0);
    let manifestZ = 1.0;
    let settingj = 5;
    let reactnativeultimatelistviewJ: Array<any> = [833, 516, 630];
    let termsh: Array<any> = [368, 271];
    let huaweiZ = String.fromCharCode(102,117,108,108,115,99,114,101,101,110,95,48,95,49,55,0);
      smallY.set(`${downloadedR}`, 1);
       let overR = String.fromCharCode(114,101,109,111,116,101,108,121,95,97,95,54,0);
       let libreactnativeblobE = String.fromCharCode(103,95,50,52,0);
       let largesoundm: Array<any> = [471, 230, 536];
       let combine5 = 0;
       let arrowdownc = 4;
      if ((arrowdownc | 4) >= 4 && (arrowdownc | largesoundm.length) >= 4) {
         largesoundm = [arrowdownc / (Math.max(3, 4))];
      }
         combine5 %= Math.max(3, 2);
         combine5 >>= Math.min(Math.abs(2 % (Math.max(combine5, 4))), 3);
         combine5 -= combine5;
      let formK = overR.length >= 5124630;
      do {
         overR = `${largesoundm.length | libreactnativeblobE.length}`;
         if (formK) {
            break;
         }
      } while ((libreactnativeblobE == overR) && formK);
      for (let y = 0; y < 2; y++) {
         overR += "1";
      }
      if ((largesoundm.length % (Math.max(libreactnativeblobE.length, 4))) == 2 && (libreactnativeblobE.length % (Math.max(3, largesoundm.length))) == 2) {
         libreactnativeblobE = `${largesoundm.length}`;
      }
      let stepD = 9314904 <= largesoundm.length;
      do {
          let orangedownarrow9 = 2.0;
          let megaphoneK = 4;
          let videovarx = 3.0;
         largesoundm = [libreactnativeblobE.length | parseInt(`${videovarx}`)];
         orangedownarrow9 /= Math.max(4, parseFloat(`${3}`));
         megaphoneK &= parseInt(`${orangedownarrow9}`);
         videovarx -= 1;
         if (stepD) {
            break;
         }
      } while (((5 & largesoundm.length) >= 5 && 2 >= (largesoundm.length & 5)) && stepD);
      reactnativeultimatelistviewJ.push(overR.length);
       let libloggerd = 5.0;
       let dplusa: Map<any, any> = new Map([[String.fromCharCode(112,108,97,116,101,97,117,95,108,95,54,53,0),547], [String.fromCharCode(116,97,112,95,106,95,54,57,0),376]]);
         dplusa.set(`${libloggerd}`, dplusa.size % (Math.max(3, parseInt(`${libloggerd}`))));
         libloggerd *= parseInt(`${libloggerd}`);
         libloggerd *= 2 + dplusa.size;
         libloggerd *= 1;
      if ((libloggerd - 3.77) > 4.37 || 1.50 > (libloggerd - 3.77)) {
          let downloader1 = String.fromCharCode(104,95,57,49,95,116,104,114,101,115,0);
          let eactb = 5;
          let short_3pX = String.fromCharCode(115,101,116,116,108,105,110,103,95,114,95,54,51,0);
         libloggerd += 1;
         downloader1 += `${eactb >> (Math.min(downloader1.length, 2))}`;
         eactb <<= Math.min(Math.abs(2), 3);
         short_3pX = `${eactb >> (Math.min(short_3pX.length, 5))}`;
      }
          let libzeusy: Map<any, any> = new Map([[String.fromCharCode(120,98,105,110,95,51,95,51,51,0),String.fromCharCode(114,95,51,52,95,99,97,112,116,105,111,110,0)], [String.fromCharCode(99,108,111,99,107,119,105,115,101,95,99,95,55,52,0),String.fromCharCode(114,95,50,53,95,117,118,108,99,0)], [String.fromCharCode(107,95,50,51,95,97,112,112,101,110,100,0),String.fromCharCode(122,95,55,54,95,114,117,110,116,101,114,109,0)]]);
          let templateprocessorU = String.fromCharCode(102,95,57,95,98,105,108,105,110,101,97,114,0);
         dplusa.set(templateprocessorU, 3);
         libzeusy.set(`${libzeusy.size}`, 1);
         templateprocessorU = `${libzeusy.size}`;
      predictionbannerL = "3";
       let iconmegaphonem = String.fromCharCode(97,95,54,55,95,119,114,105,116,101,97,98,108,101,0);
       let icondefaultthumbnailt = String.fromCharCode(114,101,102,112,97,115,115,95,106,95,50,52,0);
       let u_imagek = String.fromCharCode(115,110,105,112,112,101,116,95,103,95,49,50,0);
       let whitevideoliveU = 5;
       let liveendmodallogoy = 4;
          let sliderN: Map<any, any> = new Map([[String.fromCharCode(119,95,52,49,95,115,112,97,116,105,97,108,0),false ], [String.fromCharCode(107,95,54,48,95,112,97,115,115,101,115,0),false ], [String.fromCharCode(121,95,49,95,118,105,101,119,101,114,0),false ]]);
          let mapping2 = 5.0;
          let sina7 = 1;
         liveendmodallogoy += iconmegaphonem.length / 1;
         sliderN = new Map([[`${sliderN.size}`, sliderN.size * 3]]);
         mapping2 *= parseFloat(`${parseInt(`${mapping2}`)}`);
         sina7 <<= Math.min(4, Math.abs(2 | sliderN.size));
       let backiconmaskV: Array<any> = [560, 53];
       let downloadedx: Array<any> = [854, 688];
      if (!downloadedx.includes(liveendmodallogoy)) {
         downloadedx = [iconmegaphonem.length ^ 3];
      }
       let whistleM = String.fromCharCode(122,95,51,51,95,114,101,97,114,114,97,110,103,101,0);
       let mbnativeadvancedT = String.fromCharCode(101,120,112,114,101,115,115,105,111,110,115,95,107,95,50,49,0);
      if (4 > u_imagek.length) {
          let iconsettingw = true;
         icondefaultthumbnailt += `${icondefaultthumbnailt.length}`;
         iconsettingw = !iconsettingw;
      }
      if (whistleM.length >= u_imagek.length) {
          let profileactiveE = String.fromCharCode(120,95,55,57,95,105,110,116,101,114,114,117,112,116,0);
         u_imagek += `${(String.fromCharCode(53,0) == icondefaultthumbnailt ? backiconmaskV.length : icondefaultthumbnailt.length)}`;
         profileactiveE += `${profileactiveE.length - 2}`;
      }
      if (backiconmaskV.length >= 5) {
         backiconmaskV.push(backiconmaskV.length * icondefaultthumbnailt.length);
      }
      while (mbnativeadvancedT.length > 2 && whistleM == String.fromCharCode(57,0)) {
          let iconpipshrinkh = false;
          let uimanagerX = 0.0;
          let popupr: Map<any, any> = new Map([[String.fromCharCode(113,95,52,49,95,111,112,116,105,109,105,122,97,116,105,111,110,0),125], [String.fromCharCode(99,97,112,116,117,114,105,110,103,95,49,95,52,55,0),158]]);
          let telegrama = String.fromCharCode(115,117,98,112,97,121,108,111,97,100,95,103,95,50,51,0);
         mbnativeadvancedT += `${1 * parseInt(`${uimanagerX}`)}`;
         iconpipshrinkh = String.fromCharCode(90,0) == telegrama;
         uimanagerX -= parseFloat(`${popupr.size}`);
         popupr.set(`${iconpipshrinkh}`, 3 << (Math.min(2, Math.abs(popupr.size))));
         telegrama += "2";
         break;
      }
      downloadedR = `${1 * reactnativeultimatelistviewJ.length}`;
      predictionbannerL += `${settingj}`;
   for (let e = 0; e < 3; e++) {
       let circle2 = 0;
       let configi = String.fromCharCode(118,101,114,105,102,121,95,55,95,50,57,0);
       let cornerK = String.fromCharCode(106,95,56,55,95,98,105,116,115,116,114,101,97,109,0);
      for (let t = 0; t < 3; t++) {
          let iconchatsendY = 3.0;
          let abidetectV = String.fromCharCode(107,95,54,57,95,116,116,97,100,97,116,97,0);
          let shirtA = 4.0;
          let reactnavigationT = String.fromCharCode(106,95,52,48,95,112,104,112,0);
          let main_gP = true;
         cornerK += `${configi.length}`;
         iconchatsendY -= (parseFloat(`${reactnavigationT == String.fromCharCode(122,0) ? reactnavigationT.length : parseInt(`${shirtA}`)}`));
         abidetectV += `${reactnavigationT.length / 2}`;
         shirtA *= parseFloat(`${reactnavigationT.length >> (Math.min(Math.abs(2), 4))}`);
         main_gP = reactnavigationT.length <= 9 || shirtA <= 73.76;
      }
      for (let y = 0; y < 1; y++) {
         configi = "1";
      }
         circle2 -= 1;
      if (3 >= configi.length) {
         circle2 |= configi.length;
      }
       let tooltipsu = 2;
       let buttonf = 0;
         buttonf -= tooltipsu;
         circle2 >>= Math.min(Math.abs(cornerK.length / (Math.max(3, 8))), 2);
      if (configi != cornerK) {
          let icondefaultthumbnailh = 4.0;
          let helperL = 1.0;
         cornerK = "3";
         icondefaultthumbnailh += parseInt(`${helperL}`) ^ 2;
         helperL /= Math.max(2, parseFloat(`${2 / (Math.max(parseInt(`${helperL}`), 1))}`));
      }
      for (let k = 0; k < 3; k++) {
          let favoritee: Array<any> = [String.fromCharCode(121,95,52,48,95,101,121,101,100,114,111,112,112,101,114,0), String.fromCharCode(117,110,115,101,116,95,49,95,52,54,0)];
         configi = "1";
         favoritee.push(favoritee.length);
      }
      manifestZ -= parseFloat(`${3}`);
   }
      downloadedR = "3";
   if (4 <= (downloadedR.length - 5)) {
      smallY.set(`${termsh.length}`, termsh.length);
   }
      settingj -= 3;
   for (let p = 0; p < 2; p++) {
      termsh.push(smallY.size / (Math.max(1, 2)));
   }
   while (5 > (settingj << (Math.min(predictionbannerL.length, 5)))) {
      settingj &= 2 - smallY.size;
      break;
   }

    return {
      display: isFilterCollapse.value ? 'none' : 'flex',
    };
  }, []);

  const contentSummaryStyle = useAnimatedStyle(() => {
       let configurei = String.fromCharCode(106,95,57,53,95,116,105,108,101,120,0);
    let wind5 = 2.0;
    let footballtrophyR = false;
    let hometeamfieldZ = 1;
    let libreact2 = String.fromCharCode(104,105,103,104,108,105,103,104,116,97,98,108,101,95,111,95,53,54,0);
    let progress1 = String.fromCharCode(111,98,115,101,114,118,101,114,115,95,113,95,52,54,0);
    let heartD = String.fromCharCode(104,95,54,55,95,115,104,117,116,116,101,114,0);
    let backwardm = String.fromCharCode(103,95,56,57,95,99,117,100,97,115,99,97,108,101,0);
    let anythink1 = 4;
    let tempnodatam = 1.0;
    let gemfilek = String.fromCharCode(109,95,54,55,95,115,111,97,108,108,111,99,0);
    let control1 = String.fromCharCode(110,95,56,51,95,107,101,101,112,97,108,105,118,101,0);
   while ((gemfilek.length ^ 2) < 2) {
      gemfilek += `${libreact2.length}`;
      break;
   }
       let iconarrowrightwhitef = String.fromCharCode(110,95,56,52,95,108,117,109,97,107,101,121,0);
       let videojsO: Map<any, any> = new Map([[String.fromCharCode(99,97,112,116,117,114,101,95,121,95,56,48,0),818], [String.fromCharCode(102,95,52,49,95,101,120,99,108,117,115,105,111,110,115,0),777], [String.fromCharCode(101,95,56,49,95,97,99,104,101,0),605]]);
         iconarrowrightwhitef += `${videojsO.size}`;
         iconarrowrightwhitef += `${1 + videojsO.size}`;
      let r_centerm = videojsO.size >= 7285559;
      do {
         videojsO.set(`${iconarrowrightwhitef}`, iconarrowrightwhitef.length ^ videojsO.size);
         if (r_centerm) {
            break;
         }
      } while (r_centerm && (3 >= (videojsO.size - iconarrowrightwhitef.length) && 2 >= (3 - iconarrowrightwhitef.length)));
         iconarrowrightwhitef = `${3 - iconarrowrightwhitef.length}`;
       let rightl = String.fromCharCode(102,95,50,56,95,116,115,99,99,100,97,116,97,0);
      if (4 > (videojsO.size & 3)) {
         iconarrowrightwhitef = `${videojsO.size ^ 2}`;
      }
      gemfilek = `${backwardm.length}`;
   while (2 < (anythink1 | 3)) {
       let mountingq = String.fromCharCode(97,116,99,104,95,107,95,51,50,0);
       let libflipperA: Array<any> = [String.fromCharCode(104,95,57,54,95,109,101,116,97,100,97,116,97,115,0), String.fromCharCode(102,95,54,50,95,109,101,115,115,97,103,105,110,103,0)];
       let hookV = String.fromCharCode(102,116,115,121,121,95,118,95,56,56,0);
       let materialw: Array<any> = [String.fromCharCode(99,111,114,101,95,116,95,54,52,0), String.fromCharCode(119,97,108,108,97,112,101,114,115,95,100,95,57,51,0), String.fromCharCode(116,95,50,51,95,115,97,100,98,0)];
         materialw = [2 >> (Math.min(2, mountingq.length))];
         hookV += "2";
      if (mountingq.length <= 3 || hookV.length <= 3) {
         hookV += `${(hookV == String.fromCharCode(100,0) ? libflipperA.length : hookV.length)}`;
      }
      let inouttargetyellowO = String.fromCharCode(113,57,116,48,97,0) == mountingq;
      do {
         mountingq = `${mountingq.length}`;
         if (inouttargetyellowO) {
            break;
         }
      } while (inouttargetyellowO && (!mountingq.startsWith(`${libflipperA.length}`)));
          let refresh4 = String.fromCharCode(105,110,116,101,114,111,112,95,121,95,50,53,0);
          let reactnativeratingsN = 1.0;
          let release_9l: Map<any, any> = new Map([[String.fromCharCode(117,95,56,50,95,105,116,101,114,97,116,101,0),771], [String.fromCharCode(117,95,52,54,0),667]]);
         mountingq += `${parseInt(`${reactnativeratingsN}`)}`;
         refresh4 += `${release_9l.size << (Math.min(refresh4.length, 3))}`;
         reactnativeratingsN /= Math.max(1, 3 * refresh4.length);
         release_9l.set(refresh4, 3 - release_9l.size);
         libflipperA = [2];
      for (let f = 0; f < 3; f++) {
         hookV += "3";
      }
      let static_ky6 = materialw.length <= 5342349;
      do {
         materialw.push(1);
         if (static_ky6) {
            break;
         }
      } while ((materialw.length > libflipperA.length) && static_ky6);
         materialw = [(mountingq == String.fromCharCode(78,0) ? mountingq.length : libflipperA.length)];
      let defaultprofilepic_ = String.fromCharCode(109,54,112,117,0) == mountingq;
      do {
          let mbnativeadvancedR = String.fromCharCode(116,95,56,53,95,112,102,102,102,116,0);
         mountingq = `${hookV.length ^ materialw.length}`;
         mbnativeadvancedR = `${(mbnativeadvancedR == String.fromCharCode(75,0) ? mbnativeadvancedR.length : mbnativeadvancedR.length)}`;
         if (defaultprofilepic_) {
            break;
         }
      } while (defaultprofilepic_ && ((libflipperA.length + 3) <= 1 || 5 <= (mountingq.length + 3)));
         hookV = `${mountingq.length << (Math.min(Math.abs(2), 4))}`;
         libflipperA.push(libflipperA.length ^ mountingq.length);
      anythink1 /= Math.max(3, anythink1);
      break;
   }
       let hiadD = 3.0;
       let liveS = String.fromCharCode(116,114,101,97,116,95,100,95,49,53,0);
          let videojss = 4;
          let agreementL = false;
         liveS += `${((agreementL ? 2 : 5) | parseInt(`${hiadD}`))}`;
         videojss -= 2 | videojss;
         agreementL = videojss > 4 && 4 > videojss;
          let iconeditR = String.fromCharCode(102,95,55,50,95,114,110,103,115,0);
          let imagewatchliveG = String.fromCharCode(115,95,55,50,95,115,99,97,108,101,100,99,111,110,118,111,108,118,101,0);
          let iconviewergif9 = false;
         hiadD += (iconeditR.length ^ (iconviewergif9 ? 4 : 4));
         iconeditR = `${imagewatchliveG.length}`;
         imagewatchliveG = `${imagewatchliveG.length}`;
      while (parseInt(`${hiadD}`) >= liveS.length) {
         liveS = `${(liveS == String.fromCharCode(120,0) ? parseInt(`${hiadD}`) : liveS.length)}`;
         break;
      }
         hiadD -= parseInt(`${hiadD}`);
         hiadD -= 3;
         hiadD -= parseInt(`${hiadD}`) << (Math.min(Math.abs(1), 1));
      footballtrophyR = wind5 < 60.7;
      gemfilek = `${(heartD == String.fromCharCode(97,0) ? heartD.length : libreact2.length)}`;
   while (1.58 == (tempnodatam / (Math.max(3.99, 1))) && (4 << (Math.min(2, backwardm.length))) == 2) {
       let iconorientationi = String.fromCharCode(109,101,100,105,97,110,95,120,95,52,53,0);
       let iconcurrentmatchW: Map<any, any> = new Map([[String.fromCharCode(118,95,56,49,95,97,110,97,108,121,115,101,0),String.fromCharCode(107,95,49,95,116,116,97,99,104,109,101,110,116,0)], [String.fromCharCode(121,97,108,101,95,107,95,52,54,0),String.fromCharCode(115,116,114,105,100,95,99,95,49,48,0)], [String.fromCharCode(117,110,114,101,118,101,114,115,101,100,95,56,95,51,55,0),String.fromCharCode(115,117,112,112,114,101,115,115,105,110,103,95,50,95,51,53,0)]]);
       let model8 = 3;
       let z_animationb = String.fromCharCode(104,95,54,56,95,99,111,110,116,101,120,116,0);
       let imagenomoredata1 = String.fromCharCode(101,120,112,108,105,99,105,116,101,108,121,95,103,95,53,56,0);
      if (iconorientationi.endsWith(imagenomoredata1)) {
          let defaultlogoX = 4.0;
          let currentK = 2.0;
          let active2 = false;
         iconorientationi = `${model8 << (Math.min(5, Math.abs(1)))}`;
         defaultlogoX *= (parseFloat(`${(active2 ? 4 : 4) / (Math.max(1, parseInt(`${currentK}`)))}`));
         currentK /= Math.max(4, 2);
         active2 = currentK <= 77.9;
      }
      while (iconorientationi.length == imagenomoredata1.length) {
         imagenomoredata1 = `${imagenomoredata1.length}`;
         break;
      }
      if (z_animationb == imagenomoredata1) {
         imagenomoredata1 = `${3 << (Math.min(4, Math.abs(model8)))}`;
      }
      for (let f = 0; f < 2; f++) {
         iconcurrentmatchW = new Map([[imagenomoredata1, imagenomoredata1.length * model8]]);
      }
      if (3 == imagenomoredata1.length) {
         z_animationb = "2";
      }
      while (5 > (3 | model8)) {
         z_animationb = `${iconorientationi.length}`;
         break;
      }
      for (let p = 0; p < 1; p++) {
          let telemetry_: Array<any> = [317, 877, 180];
          let readv = true;
         iconorientationi = "3";
         telemetry_ = [(telemetry_.length & (readv ? 5 : 5))];
         readv = telemetry_.includes(readv);
      }
         iconcurrentmatchW = new Map([[`${iconcurrentmatchW.size}`, iconcurrentmatchW.size >> (Math.min(iconorientationi.length, 2))]]);
         imagenomoredata1 = `${iconcurrentmatchW.size + 2}`;
       let friends2 = 4;
       let mapbufferw = 2;
         iconorientationi += `${model8 % 2}`;
      let target7 = 6927578 >= model8;
      do {
          let iconviewergifj = String.fromCharCode(103,101,116,98,105,116,95,112,95,54,48,0);
          let iconlogoutW = String.fromCharCode(97,118,100,99,116,95,105,95,50,0);
          let mathy = String.fromCharCode(101,110,117,109,101,114,97,116,101,100,95,114,95,56,49,0);
         model8 /= Math.max(5, iconlogoutW.length);
         iconviewergifj = "2";
         iconlogoutW = `${iconviewergifj.length}`;
         mathy += `${mathy.length % 3}`;
         if (target7) {
            break;
         }
      } while (((1 - iconorientationi.length) <= 4 || 1 <= (iconorientationi.length - model8)) && target7);
         imagenomoredata1 = "3";
      let holderV = 6889221 >= friends2;
      do {
         friends2 |= (String.fromCharCode(100,0) == z_animationb ? imagenomoredata1.length : z_animationb.length);
         if (holderV) {
            break;
         }
      } while ((5 >= (1 ^ friends2) || 5 >= (1 ^ mapbufferw)) && holderV);
         iconcurrentmatchW = new Map([[iconorientationi, iconorientationi.length - 2]]);
      backwardm += `${iconorientationi.length}`;
      break;
   }
   let whitesmalltickN = footballtrophyR ? !footballtrophyR : footballtrophyR;
   do {
      footballtrophyR = progress1.length == 81;
      if (whitesmalltickN) {
         break;
      }
   } while (whitesmalltickN && ((anythink1 ^ 2) <= 1));
   let turnx = anythink1 <= 5314333;
   do {
      anythink1 >>= Math.min(libreact2.length, 1);
      if (turnx) {
         break;
      }
   } while (turnx && (1 == (anythink1 * 4) || 4 == (control1.length * anythink1)));
   for (let h = 0; h < 3; h++) {
       let progress8: Map<any, any> = new Map([[String.fromCharCode(98,108,97,99,107,95,97,95,50,49,0),212], [String.fromCharCode(116,101,120,116,115,95,50,95,54,53,0),345], [String.fromCharCode(121,95,48,95,117,116,99,0),330]]);
      while (Array.from(progress8.values()).includes(progress8.size)) {
         progress8.set(`${progress8.size}`, progress8.size * progress8.size);
         break;
      }
      let calendarO = 5559246 <= progress8.size;
      do {
         progress8 = new Map([[`${progress8.size}`, progress8.size ^ progress8.size]]);
         if (calendarO) {
            break;
         }
      } while (calendarO && ((1 << (Math.min(4, Math.abs(progress8.size)))) >= 1));
          let themeQ: Array<any> = [427, 486];
          let graphics0: Map<any, any> = new Map([[String.fromCharCode(107,95,56,50,95,112,114,111,118,105,100,105,110,103,0),false ], [String.fromCharCode(121,95,57,51,95,97,114,116,105,99,108,101,0),false ], [String.fromCharCode(98,105,116,115,113,112,95,99,95,49,53,0),false ]]);
          let airbnbstarselectedA: Array<any> = [363, 880];
         progress8 = new Map([[`${progress8.size}`, progress8.size]]);
         themeQ = [graphics0.size % (Math.max(themeQ.length, 3))];
         graphics0.set(`${airbnbstarselectedA.length}`, 1 << (Math.min(1, airbnbstarselectedA.length)));
      libreact2 += `${gemfilek.length}`;
   }
      progress1 += `${2 * heartD.length}`;
   while (2 < (2 % (Math.max(10, anythink1)))) {
      tempnodatam -= (parseFloat(`${String.fromCharCode(118,0) == control1 ? hometeamfieldZ : control1.length}`));
      break;
   }

    return {
      display: isFilterCollapse.value ? 'flex' : 'none',
      paddingBottom: 1,
    };
  }, []);

  const reset = () => {
       let iconclosewhitebgo = true;
    let tooltipsW = String.fromCharCode(98,105,110,107,98,95,109,95,54,55,0);
    let rncoreU = 3.0;
    let stationso = String.fromCharCode(111,95,56,49,95,111,115,116,114,101,97,109,0);
    let sende = 3;
    let binga = 5.0;
    let iconpointscoreK = 0;
    let bang7: Array<any> = [153, 985, 968];
    let graphn = true;
    let lessC = String.fromCharCode(98,121,116,101,111,117,116,95,115,95,52,48,0);
    let rnewsK = String.fromCharCode(102,105,110,97,108,100,95,121,95,49,57,0);
      binga /= Math.max(sende, 5);
   if (stationso.length < iconpointscoreK) {
      stationso = `${parseInt(`${binga}`)}`;
   }
      iconclosewhitebgo = (parseInt(`${binga}`) / (Math.max(8, bang7.length))) <= 1;
   for (let n = 0; n < 3; n++) {
      stationso = `${bang7.length}`;
   }
   let videocommonL = iconclosewhitebgo ? !iconclosewhitebgo : iconclosewhitebgo;
   do {
       let bingl = String.fromCharCode(98,108,111,99,107,115,95,110,95,53,53,0);
         bingl += `${bingl.length}`;
      while (bingl.length <= bingl.length) {
          let heji7 = 4.0;
          let fillp: Map<any, any> = new Map([[String.fromCharCode(97,99,117,116,111,102,102,95,120,95,56,48,0),904], [String.fromCharCode(115,114,116,99,112,95,101,95,56,55,0),6], [String.fromCharCode(111,117,116,108,105,110,107,95,52,95,51,54,0),456]]);
          let calendarh = String.fromCharCode(100,101,99,111,114,114,95,119,95,51,52,0);
          let smallC = String.fromCharCode(101,120,116,114,97,99,116,105,111,110,95,117,95,55,51,0);
         bingl += "2";
         heji7 -= (parseFloat(`${String.fromCharCode(85,0) == calendarh ? calendarh.length : fillp.size}`));
         fillp.set(smallC, (String.fromCharCode(105,0) == smallC ? smallC.length : calendarh.length));
         break;
      }
      let gradlewD = 9557663 >= bingl.length;
      do {
         bingl += `${bingl.length}`;
         if (gradlewD) {
            break;
         }
      } while (gradlewD && (bingl.length == 1));
      iconclosewhitebgo = rncoreU >= 91.81;
      if (videocommonL) {
         break;
      }
   } while ((!iconclosewhitebgo) && videocommonL);
   if (tooltipsW.endsWith(`${rncoreU}`)) {
       let iconnewchatX = String.fromCharCode(99,95,50,53,95,113,117,97,108,105,102,105,101,114,115,0);
       let update_uh = String.fromCharCode(110,95,56,52,95,100,101,112,111,115,105,116,0);
       let holder4 = String.fromCharCode(106,95,54,53,95,99,108,111,99,107,119,105,115,101,0);
       let delegate_gy2 = 1.0;
       let ainit_ugq: Array<any> = [371, 462, 981];
      while (3 <= (ainit_ugq.length + parseInt(`${delegate_gy2}`)) || (2.58 + delegate_gy2) <= 5.95) {
         ainit_ugq = [holder4.length ^ update_uh.length];
         break;
      }
         ainit_ugq = [2 >> (Math.min(4, ainit_ugq.length))];
         delegate_gy2 -= (parseFloat(`${update_uh == String.fromCharCode(109,0) ? update_uh.length : parseInt(`${delegate_gy2}`)}`));
         delegate_gy2 /= Math.max(parseFloat(`${parseInt(`${delegate_gy2}`) >> (Math.min(iconnewchatX.length, 2))}`), 3);
      for (let q = 0; q < 3; q++) {
          let vipsport6 = String.fromCharCode(116,104,111,117,103,104,95,51,95,53,54,0);
         delegate_gy2 *= parseFloat(`${vipsport6.length}`);
      }
          let otheri = String.fromCharCode(103,95,53,55,95,105,108,108,101,103,97,108,0);
         holder4 += `${3 / (Math.max(2, parseInt(`${delegate_gy2}`)))}`;
         otheri += `${otheri.length}`;
         holder4 += "2";
      let upgradeF = String.fromCharCode(103,120,56,97,113,99,104,55,0) == holder4;
      do {
         holder4 += `${3 << (Math.min(4, iconnewchatX.length))}`;
         if (upgradeF) {
            break;
         }
      } while (upgradeF && (delegate_gy2 >= 4.51));
      for (let w = 0; w < 3; w++) {
          let reactnativeratingsz = String.fromCharCode(97,97,102,99,95,97,95,53,51,0);
          let telemetryF = 0.0;
          let updatesp: Array<any> = [String.fromCharCode(111,95,50,53,95,100,105,109,101,110,115,105,116,111,110,115,0), String.fromCharCode(115,95,55,57,95,102,116,118,112,108,97,115,116,110,111,100,101,0), String.fromCharCode(111,95,55,52,95,98,99,104,101,99,107,0)];
         delegate_gy2 += parseFloat(`${3}`);
         reactnativeratingsz += `${(String.fromCharCode(54,0) == reactnativeratingsz ? updatesp.length : reactnativeratingsz.length)}`;
         telemetryF /= Math.max(4, updatesp.length | parseInt(`${telemetryF}`));
      }
       let pointC = true;
       let minimizeo = true;
         delegate_gy2 += (parseFloat(`${String.fromCharCode(90,0) == iconnewchatX ? iconnewchatX.length : holder4.length}`));
         iconnewchatX = `${((pointC ? 4 : 2) % 3)}`;
      let aboutq = pointC ? !pointC : pointC;
      do {
         pointC = delegate_gy2 == 64.86;
         if (aboutq) {
            break;
         }
      } while ((2 > holder4.length) && aboutq);
      while (5 <= iconnewchatX.length) {
         iconnewchatX += `${1 * holder4.length}`;
         break;
      }
       let dicelogoO = 0.0;
      tooltipsW += `${(String.fromCharCode(73,0) == update_uh ? update_uh.length : bang7.length)}`;
   }

    queryClient.removeQueries(['filteredVods']);

      tooltipsW += `${1 - parseInt(`${rncoreU}`)}`;
      tooltipsW = `${parseInt(`${rncoreU}`)}`;
   while (2 <= stationso.length) {
      sende += 3;
      break;
   }
       let bdxadsdkj = 1.0;
          let iconclosewhitewithbgn = String.fromCharCode(102,95,57,50,95,108,117,114,97,108,105,122,97,116,105,111,110,0);
          let shrinkS = String.fromCharCode(119,114,105,116,101,97,108,105,103,110,95,103,95,49,55,0);
          let iconcurrentmatchl = String.fromCharCode(111,95,52,52,95,102,97,100,115,116,0);
         bdxadsdkj /= Math.max((String.fromCharCode(118,0) == iconcurrentmatchl ? iconcurrentmatchl.length : shrinkS.length), 5);
         iconclosewhitewithbgn += "1";
         shrinkS += `${1 ^ iconclosewhitewithbgn.length}`;
         bdxadsdkj += parseInt(`${bdxadsdkj}`) / 1;
       let xvodh: Array<any> = [373, 741, 352];
       let runtimeschedulerA: Array<any> = [157, 547];
      bang7 = [stationso.length];
      sende %= Math.max(1 ^ parseInt(`${rncoreU}`), 3);
   let league5 = iconpointscoreK <= 7954229;
   do {
      iconpointscoreK %= Math.max(3, parseInt(`${binga}`));
      if (league5) {
         break;
      }
   } while (((iconpointscoreK + parseInt(`${rncoreU}`)) > 1 && 3 > (iconpointscoreK * 1)) && league5);
    setTopicClass(sameTextAndValueObj('全部类型'));

       let smalln = 0.0;
          let awayiconJ = 3.0;
         smalln /= Math.max(2, parseFloat(`${parseInt(`${smalln}`) >> (Math.min(3, Math.abs(1)))}`));
         awayiconJ -= parseFloat(`${parseInt(`${awayiconJ}`)}`);
      while (smalln < smalln) {
          let brightnessE = String.fromCharCode(107,101,121,110,97,109,101,95,54,95,50,0);
          let blackU: Array<any> = [46, 774, 948];
          let gesturesp: Array<any> = [346, 155, 203];
          let philippinesq = String.fromCharCode(98,105,116,111,112,115,95,54,95,51,48,0);
          let phoneshareR: Array<any> = [963, 679, 771];
         smalln *= parseFloat(`${blackU.length}`);
         brightnessE += `${philippinesq.length}`;
         blackU.push((String.fromCharCode(54,0) == brightnessE ? brightnessE.length : gesturesp.length));
         gesturesp.push((String.fromCharCode(76,0) == philippinesq ? philippinesq.length : phoneshareR.length));
         phoneshareR.push((philippinesq == String.fromCharCode(113,0) ? gesturesp.length : philippinesq.length));
         break;
      }
      let halfr = smalln >= 6875685.0;
      do {
         smalln *= parseFloat(`${parseInt(`${smalln}`) + parseInt(`${smalln}`)}`);
         if (halfr) {
            break;
         }
      } while (halfr && ((smalln + smalln) <= 2.86 && (smalln + 2.86) <= 4.55));
      binga *= stationso.length & 2;
   let linkM = graphn ? !graphn : graphn;
   do {
      graphn = iconpointscoreK == binga;
      if (linkM) {
         break;
      }
   } while (linkM && (iconclosewhitebgo && graphn));
   if (iconclosewhitebgo) {
       let leftZ = 1;
          let questY = false;
          let morel = 5.0;
         leftZ /= Math.max(5, 1);
         questY = questY || morel <= 80.19;
         morel -= parseFloat(`${2 & parseInt(`${morel}`)}`);
      let libswscalee = 8707037 >= leftZ;
      do {
         leftZ *= 3 + leftZ;
         if (libswscalee) {
            break;
         }
      } while ((leftZ >= 4) && libswscalee);
      let libzeusM = 9183145 >= leftZ;
      do {
         leftZ ^= 2 % (Math.max(9, leftZ));
         if (libzeusM) {
            break;
         }
      } while (((leftZ >> (Math.min(Math.abs(2), 5))) <= 2) && libzeusM);
      iconclosewhitebgo = 92.100 >= binga;
   }
       let actionsz = String.fromCharCode(102,105,108,116,101,114,98,97,110,107,95,99,95,56,55,0);
       let disconnectedlogof = 1.0;
          let untickH = String.fromCharCode(113,95,53,51,95,112,97,100,0);
         disconnectedlogof += (parseFloat(`${actionsz == String.fromCharCode(112,0) ? actionsz.length : untickH.length}`));
          let viewer6 = 0.0;
          let penaltyo = 4;
          let transfere: Array<any> = [954, 328];
         disconnectedlogof *= parseFloat(`${1}`);
         viewer6 /= Math.max(4, 2 << (Math.min(1, transfere.length)));
         penaltyo >>= Math.min(1, Math.abs(penaltyo));
         transfere.push(3 | parseInt(`${viewer6}`));
          let airbnbstarselectedt = true;
         actionsz = `${((airbnbstarselectedt ? 5 : 3))}`;
          let fullscreenmaxA = String.fromCharCode(108,101,102,116,109,111,115,116,95,106,95,55,53,0);
          let predictiondefaultt = String.fromCharCode(115,99,101,101,110,95,118,95,51,57,0);
         disconnectedlogof /= Math.max(4, (parseFloat(`${predictiondefaultt == String.fromCharCode(69,0) ? predictiondefaultt.length : actionsz.length}`)));
         fullscreenmaxA += `${fullscreenmaxA.length + 3}`;
          let libreact6 = String.fromCharCode(99,95,51,56,95,97,98,115,0);
         disconnectedlogof *= parseFloat(`${1}`);
         libreact6 += `${libreact6.length >> (Math.min(Math.abs(3), 1))}`;
      for (let b = 0; b < 3; b++) {
         actionsz = `${actionsz.length}`;
      }
      bang7 = [(lessC == String.fromCharCode(65,0) ? (iconclosewhitebgo ? 4 : 1) : lessC.length)];
   if (graphn) {
      stationso += `${1 / (Math.max(8, parseInt(`${rncoreU}`)))}`;
   }
      stationso = `${((iconclosewhitebgo ? 1 : 5))}`;
    setArea(sameTextAndValueObj('全部地区'));

   let androida = String.fromCharCode(119,108,102,100,49,102,56,113,0) == stationso;
   do {
       let page6 = 3.0;
       let libcxxcomponentsK = 0;
       let fullscreenmaxF = 2;
       let shootyesgoalN = String.fromCharCode(118,95,57,57,95,97,99,99,101,108,101,114,97,116,101,100,0);
       let notificationfilledt = String.fromCharCode(119,95,57,50,95,100,101,115,116,105,110,97,116,105,111,110,0);
      if (5 > notificationfilledt.length) {
         shootyesgoalN += `${parseInt(`${page6}`)}`;
      }
         shootyesgoalN = `${notificationfilledt.length}`;
      while (1 < (3 & fullscreenmaxF)) {
         fullscreenmaxF %= Math.max(3, 1 & libcxxcomponentsK);
         break;
      }
      for (let f = 0; f < 1; f++) {
         shootyesgoalN += `${2 * notificationfilledt.length}`;
      }
      let networko = 9812234 <= libcxxcomponentsK;
      do {
          let libreactnativejni8 = String.fromCharCode(100,115,99,112,95,110,95,49,0);
          let mode9 = 4.0;
          let gdtadvp = 3.0;
         libcxxcomponentsK &= shootyesgoalN.length;
         libreactnativejni8 += `${parseInt(`${gdtadvp}`)}`;
         mode9 -= parseFloat(`${parseInt(`${gdtadvp}`) | parseInt(`${mode9}`)}`);
         if (networko) {
            break;
         }
      } while (networko && (page6 >= libcxxcomponentsK));
         page6 += notificationfilledt.length;
      if (!shootyesgoalN.startsWith(`${fullscreenmaxF}`)) {
         fullscreenmaxF *= (String.fromCharCode(90,0) == notificationfilledt ? fullscreenmaxF : notificationfilledt.length);
      }
      for (let x = 0; x < 2; x++) {
         libcxxcomponentsK += (shootyesgoalN == String.fromCharCode(54,0) ? fullscreenmaxF : shootyesgoalN.length);
      }
         shootyesgoalN = `${libcxxcomponentsK & 2}`;
         notificationfilledt = `${2 & notificationfilledt.length}`;
       let fastv = 4.0;
       let assistl = 3.0;
          let cornershooty: Array<any> = [87, 167];
          let nativel = true;
         fastv += parseFloat(`${1}`);
         cornershooty = [cornershooty.length];
         nativel = cornershooty.includes(nativel);
      let sourceW = 9233113.0 <= assistl;
      do {
         assistl *= parseFloat(`${parseInt(`${fastv}`) - shootyesgoalN.length}`);
         if (sourceW) {
            break;
         }
      } while (sourceW && (1.21 < (assistl - 3.47) && 3.47 < (fastv + assistl)));
         fullscreenmaxF -= parseInt(`${page6}`);
          let yellowscoreballZ: Array<any> = [997, 637];
          let panglek = String.fromCharCode(121,95,48,95,102,105,108,116,101,114,115,0);
          let iconbell3 = 5.0;
         shootyesgoalN = `${1 * panglek.length}`;
         yellowscoreballZ = [parseInt(`${iconbell3}`)];
         panglek += `${2 >> (Math.min(Math.abs(parseInt(`${iconbell3}`)), 2))}`;
      stationso = "3";
      if (androida) {
         break;
      }
   } while ((4 > (5 - stationso.length) || (binga / 1.2) > 4.48) && androida);
      stationso += `${3 * bang7.length}`;
   let mounting6 = stationso == String.fromCharCode(116,57,98,0);
   do {
      stationso = `${1 << (Math.min(Math.abs(parseInt(`${rncoreU}`)), 1))}`;
      if (mounting6) {
         break;
      }
   } while ((stationso.endsWith(`${sende}`)) && mounting6);
   let kick9 = tooltipsW.length >= 7757574;
   do {
      tooltipsW += `${(String.fromCharCode(116,0) == stationso ? parseInt(`${binga}`) : stationso.length)}`;
      if (kick9) {
         break;
      }
   } while (kick9 && (!iconclosewhitebgo));
   for (let h = 0; h < 2; h++) {
      lessC = `${(stationso == String.fromCharCode(72,0) ? stationso.length : (graphn ? 4 : 3))}`;
   }
   if (stationso.includes(`${graphn}`)) {
       let untickS = 1.0;
       let select9 = String.fromCharCode(114,105,110,103,105,110,103,95,55,95,50,52,0);
      if (select9.startsWith(`${untickS}`)) {
         select9 = `${2 | parseInt(`${untickS}`)}`;
      }
         untickS *= (parseFloat(`${String.fromCharCode(54,0) == select9 ? parseInt(`${untickS}`) : select9.length}`));
      while (3 <= select9.length) {
         select9 = `${2 - select9.length}`;
         break;
      }
         untickS *= parseFloat(`${select9.length}`);
      while (5.51 >= (untickS - 3.58) || 3.58 >= (parseFloat(`${select9.length}`) - untickS)) {
         select9 += `${parseInt(`${untickS}`) * 1}`;
         break;
      }
          let submits = String.fromCharCode(105,116,101,114,97,116,111,114,95,48,95,52,49,0);
          let flagF: Map<any, any> = new Map([[String.fromCharCode(99,111,101,102,102,95,109,95,54,50,0),107], [String.fromCharCode(111,95,52,95,115,121,110,116,104,101,115,105,122,101,100,0),136]]);
          let basketballawayteamy = true;
         select9 = "3";
         submits += `${flagF.size}`;
         flagF = new Map([[`${flagF.size}`, 3]]);
      graphn = stationso == String.fromCharCode(66,0);
   }
    setLang(sameTextAndValueObj('全部语言'));

   if (graphn) {
      graphn = sende >= 69;
   }
       let traminiB = String.fromCharCode(100,95,50,50,95,115,104,97,114,101,0);
          let videocommon3 = String.fromCharCode(99,95,57,56,95,108,109,108,109,0);
          let fastw = 4.0;
          let textlayoutmanageri = false;
         traminiB += `${(3 + (textlayoutmanageri ? 4 : 3))}`;
         videocommon3 = `${(videocommon3 == String.fromCharCode(111,0) ? videocommon3.length : parseInt(`${fastw}`))}`;
         fastw /= Math.max(1, parseFloat(`${3}`));
         textlayoutmanageri = 92 >= videocommon3.length;
       let fullscreenmax_ = String.fromCharCode(114,95,50,52,95,101,120,115,115,0);
      if (!traminiB.includes(`${fullscreenmax_.length}`)) {
         traminiB = `${1 << (Math.min(2, traminiB.length))}`;
      }
      sende += rnewsK.length;
      rncoreU *= (parseFloat(`${lessC.length ^ (iconclosewhitebgo ? 1 : 5)}`));
   for (let j = 0; j < 3; j++) {
       let weibob = String.fromCharCode(104,95,52,57,95,109,97,120,98,117,114,115,116,0);
       let baseV = String.fromCharCode(118,95,50,51,95,115,105,122,101,115,0);
       let successe: Array<any> = [814, 515, 784];
       let starP = false;
         starP = successe.length == baseV.length;
      let animationsR = 6770256 >= weibob.length;
      do {
         weibob += "3";
         if (animationsR) {
            break;
         }
      } while (animationsR && (weibob.length >= successe.length));
      let libswresample_ = String.fromCharCode(99,101,103,121,102,122,0) == weibob;
      do {
         weibob = `${baseV.length}`;
         if (libswresample_) {
            break;
         }
      } while ((weibob.length >= 5 && starP) && libswresample_);
         starP = baseV.length < 41;
      rnewsK += `${iconpointscoreK << (Math.min(Math.abs(2), 4))}`;
   }
   let homeplayerc = 6834119.0 >= rncoreU;
   do {
       let whatsappJ = true;
       let progressW = 1.0;
       let dangerB: Array<any> = [585, 309];
       let updatesZ = String.fromCharCode(103,101,116,97,117,120,118,97,108,95,120,95,49,57,0);
       let bootsplashZ = String.fromCharCode(116,101,114,109,105,110,97,116,105,110,103,95,109,95,53,48,0);
         whatsappJ = String.fromCharCode(67,0) == updatesZ || 100.79 >= progressW;
         dangerB.push((parseInt(`${progressW}`) ^ (whatsappJ ? 4 : 5)));
         whatsappJ = updatesZ.length == bootsplashZ.length;
          let alertC: Map<any, any> = new Map([[String.fromCharCode(115,116,97,107,101,95,49,95,54,57,0),603], [String.fromCharCode(98,108,97,107,101,95,107,95,53,56,0),411]]);
          let gmailh = 3.0;
         dangerB = [dangerB.length];
         alertC = new Map([[`${alertC.size}`, parseInt(`${gmailh}`)]]);
         gmailh -= 3 & alertC.size;
          let bellJ: Map<any, any> = new Map([[String.fromCharCode(104,95,57,49,0),true ], [String.fromCharCode(105,110,105,95,103,95,49,48,48,0),false ], [String.fromCharCode(100,101,98,117,103,95,57,95,49,52,0),true ]]);
          let greytickW = String.fromCharCode(103,100,111,99,95,106,95,49,54,0);
          let rewardvideo6 = true;
         updatesZ = `${greytickW.length << (Math.min(Math.abs(3), 3))}`;
         bellJ.set(`${rewardvideo6}`, 2);
         greytickW = `${((rewardvideo6 ? 5 : 1) | 1)}`;
         updatesZ = `${3 >> (Math.min(2, Math.abs(parseInt(`${progressW}`))))}`;
      let yellowtored_ = 8438237 <= updatesZ.length;
      do {
         updatesZ += `${(String.fromCharCode(84,0) == updatesZ ? dangerB.length : updatesZ.length)}`;
         if (yellowtored_) {
            break;
         }
      } while ((updatesZ.includes(`${whatsappJ}`)) && yellowtored_);
         updatesZ += "1";
       let exampleimageX = String.fromCharCode(108,95,55,95,108,97,110,101,0);
      for (let w = 0; w < 3; w++) {
          let canvasQ: Map<any, any> = new Map([[String.fromCharCode(114,103,98,105,95,116,95,52,52,0),297], [String.fromCharCode(122,95,52,54,95,112,111,108,121,109,111,100,0),572]]);
          let lineN = String.fromCharCode(114,95,50,56,95,104,109,97,99,108,105,115,116,0);
          let penaltymatchiconF = 4;
         progressW /= Math.max(4, 2);
         canvasQ = new Map([[`${canvasQ.size}`, 2]]);
         lineN += `${canvasQ.size % (Math.max(lineN.length, 7))}`;
         penaltymatchiconF |= penaltymatchiconF;
      }
      while (!bootsplashZ.startsWith(`${progressW}`)) {
         progressW /= Math.max(((whatsappJ ? 3 : 1)), 5);
         break;
      }
      while (exampleimageX.endsWith(`${progressW}`)) {
         exampleimageX = `${2 << (Math.min(1, bootsplashZ.length))}`;
         break;
      }
      if (updatesZ.length >= exampleimageX.length) {
         updatesZ += `${exampleimageX.length}`;
      }
         exampleimageX += `${bootsplashZ.length * 1}`;
      if ((progressW * bootsplashZ.length) <= 3.92) {
         bootsplashZ = `${(exampleimageX == String.fromCharCode(122,0) ? exampleimageX.length : updatesZ.length)}`;
      }
      rncoreU += (parseFloat(`${String.fromCharCode(56,0) == bootsplashZ ? bootsplashZ.length : (iconclosewhitebgo ? 5 : 4)}`));
      if (homeplayerc) {
         break;
      }
   } while (((rncoreU * iconpointscoreK) < 2.81) && homeplayerc);
      sende += 1 >> (Math.min(3, bang7.length));
    setYear(sameTextAndValueObj('全部时间'));
  };

  const fetchVods = useCallback(
    (page: number) => {
      if (currentTopicId.toString() == "46" || currentTopicId.toString() == "44") {
        return wawaUsernameAdult.getList({
          page,
          limit: LIMIT_PER_PAGE,
          tid: currentTopicId.toString(),
          by: orderBy.value,
          year: year.value !== '全部时间' ? year.value : undefined,
          orderBy: 'desc',
        }).then((data) => data.List as wawaLayoutEvent[])
      } else {
        return wawaUsernameAdult.getList({
          page,
          limit: LIMIT_PER_PAGE,
          tid: currentTopicId.toString(),
          by: orderBy.value,
          category: topicClass.value !== '全部类型' ? topicClass.value : undefined,
          area: area.value !== '全部地区' ? area.value : undefined,
          lang: lang.value !== '全部语言' ? lang.value : undefined,
          year: year.value !== '全部时间' ? year.value : undefined,
          orderBy: 'desc',
        }).then((data) => data.List as wawaLayoutEvent[])
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

  
  
  
  
  

  const topicOptions: Array<wawaFullscreenminIconarrowleft> = useMemo(() => {
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
        wawa_dacccfaabfbcbadeebddcabacdffdbc_video.catalogViewsAnalytics({
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
    ({ item }: { item: wawaFullscreenminIconarrowleft }) => {
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
    ({ item, index }: { item: wawaLayoutEvent; index: number }) => {
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
                wawa_dacccfaabfbcbadeebddcabacdffdbc_video.catalogClicksAnalytics({
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
            keyExtractor={(item: wawaLayoutEvent, index: number) => {
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
                    source={require('@static/images/iconnewsshareDist.gif')}
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
