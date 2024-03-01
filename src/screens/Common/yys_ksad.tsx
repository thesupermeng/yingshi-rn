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
import ScreenContainer from '../../components/container/yys_executor_expand';
import { useFocusEffect, useTheme } from '@react-navigation/native';

import { RootStackScreenProps } from '@type/yys_settings';
import {
  yys_ActivityTumbnail,
} from '@type/yys_libzeus';
import { playVod } from '@redux/actions/yys_player_style';
import { useAppDispatch } from '@hooks/yys_frame';
import {
  useInfiniteQuery,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import TitleWithBackButtonHeader from '../../components/header/yys_anner_header';
import { API_DOMAIN, API_DOMAIN_TEST } from '@utility/yys_ajax_switch';
import VodTopicFilter from '../../components/vod/yys_singapore_anner';
import VodCard from '../../components/vod/yys_singapore';
import DownArrow from '@static/images/centerLaunchDycreator.svg';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { FlatListProps } from 'react-native/Libraries/Lists/FlatList';
import FastImage from '../../components/common/yys_vertical_collection';
import appsFlyer from 'react-native-appsflyer';
import EmptyList from '../../components/common/yys_goal_utils';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { TabItem } from '@rneui/base/dist/Tab/yys_GmailAndroid.Item';
import { yys_Downloader } from '@api';
import yys_event_common from '../../../Umeng/yys_event_common';

interface yys_ControlsVolume {
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
    queryFn: () => yys_Downloader.getTopicType(),
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
       let sports4: Map<any, any> = new Map([[String.fromCharCode(114,105,115,101,0),160], [String.fromCharCode(116,101,97,114,0),180]]);
    let gesturesK = false;
    let buttonV = false;
    let dataI: Map<any, any> = new Map([[String.fromCharCode(120,99,104,97,99,104,97,0),948], [String.fromCharCode(99,116,105,109,101,115,116,97,109,112,0),83], [String.fromCharCode(104,97,110,100,108,101,114,0),320]]);
    let zhengpianS = String.fromCharCode(116,111,111,98,105,103,0);
    let vietnamu = 2.0;
    let phoneZ = String.fromCharCode(115,108,117,114,112,0);
    let control7 = 5;
    let sportsX = false;
       let nativei = 1.0;
       let screenW = String.fromCharCode(117,108,112,105,110,102,111,0);
       let libhermesW = String.fromCharCode(99,97,108,99,117,108,97,116,111,114,0);
      if (2.38 >= (parseFloat(`${screenW.length}`) / (Math.max(6, nativei))) && (parseInt(`${nativei}`) / (Math.max(2, 8))) >= 2) {
          let pauseZ = 4.0;
          let grey9 = String.fromCharCode(114,101,108,97,121,0);
          let list0 = false;
          let settingsU = 2.0;
         screenW += "1";
         pauseZ += 2 - parseInt(`${pauseZ}`);
         grey9 += `${parseInt(`${settingsU}`) & 3}`;
         list0 = !grey9.endsWith(`${list0}`);
         settingsU += (grey9 == String.fromCharCode(113,0) ? (list0 ? 5 : 3) : grey9.length);
      }
         nativei -= parseFloat(`${libhermesW.length}`);
      let proxyx = screenW.length <= 5884524;
      do {
         screenW = `${1 | parseInt(`${nativei}`)}`;
         if (proxyx) {
            break;
         }
      } while (proxyx && (screenW.startsWith(`${nativei}`)));
      while (parseFloat(`${libhermesW.length}`) == nativei) {
         libhermesW += `${libhermesW.length * screenW.length}`;
         break;
      }
      if (screenW == libhermesW) {
         libhermesW = `${libhermesW.length & 1}`;
      }
         screenW += `${screenW.length + parseInt(`${nativei}`)}`;
         nativei += (parseFloat(`${screenW == String.fromCharCode(84,0) ? screenW.length : parseInt(`${nativei}`)}`));
      if ((nativei / (Math.max(parseFloat(`${screenW.length}`), 8))) < 4.2) {
         nativei /= Math.max(5, parseFloat(`${parseInt(`${nativei}`)}`));
      }
          let basketballK = String.fromCharCode(115,112,101,99,115,0);
         screenW += `${basketballK.length}`;
      buttonV = String.fromCharCode(90,0) == libhermesW;
   if (5 == (parseInt(`${vietnamu}`) - sports4.size) || (1.89 - vietnamu) == 5.13) {
       let helperg = 2.0;
       let analyticR = 1.0;
       let light6 = false;
       let pingQ = 0.0;
       let toponx = String.fromCharCode(108,111,119,99,111,109,112,0);
         analyticR /= Math.max(parseInt(`${pingQ}`), 1);
         pingQ /= Math.max(parseFloat(`${parseInt(`${analyticR}`)}`), 4);
          let package_ty = 0.0;
          let libreanimatedl = 3.0;
          let zhuboZ = String.fromCharCode(100,101,99,111,100,101,0);
         analyticR *= parseInt(`${pingQ}`) ^ 1;
         package_ty *= parseFloat(`${parseInt(`${libreanimatedl}`)}`);
         libreanimatedl /= Math.max(2, zhuboZ.length * 2);
         zhuboZ += `${2 + parseInt(`${libreanimatedl}`)}`;
      if ((toponx.length / (Math.max(5, 2))) == 1 || (pingQ / 4.8) == 2.81) {
         toponx += `${((light6 ? 5 : 1) ^ parseInt(`${pingQ}`))}`;
      }
      let libffmpegkitp = 9404580.0 >= pingQ;
      do {
         pingQ /= Math.max(parseFloat(`${2 + parseInt(`${analyticR}`)}`), 5);
         if (libffmpegkitp) {
            break;
         }
      } while ((5.43 >= (analyticR + 2.99) || (analyticR + pingQ) >= 2.99) && libffmpegkitp);
      let ewardedO = toponx.length >= 6594551;
      do {
         toponx = "1";
         if (ewardedO) {
            break;
         }
      } while (((analyticR + 4.14) >= 1.96 && 2 >= (toponx.length + parseInt(`${analyticR}`))) && ewardedO);
         pingQ /= Math.max((parseFloat(`${toponx == String.fromCharCode(72,0) ? toponx.length : parseInt(`${pingQ}`)}`)), 4);
          let clockB: Array<any> = [316, 345];
         light6 = analyticR < 3.93;
         clockB = [clockB.length << (Math.min(5, clockB.length))];
         pingQ /= Math.max(3, parseFloat(`${1 % (Math.max(9, parseInt(`${pingQ}`)))}`));
         analyticR *= 3 >> (Math.min(Math.abs(parseInt(`${analyticR}`)), 1));
          let producta = 3.0;
          let commonM = 1.0;
          let stylesy = 3.0;
         analyticR *= parseInt(`${helperg}`);
         producta -= parseFloat(`${parseInt(`${commonM}`)}`);
         stylesy -= 1;
          let robotoR: Array<any> = [170, 930, 368];
          let show5 = String.fromCharCode(116,111,107,101,0);
         pingQ /= Math.max(parseFloat(`${parseInt(`${analyticR}`)}`), 1);
         robotoR.push(robotoR.length ^ show5.length);
         show5 = `${show5.length | 3}`;
         pingQ *= (parseFloat(`${(light6 ? 4 : 1) % (Math.max(8, parseInt(`${analyticR}`)))}`));
         analyticR -= parseInt(`${pingQ}`) / 2;
         toponx = `${(parseInt(`${analyticR}`) << (Math.min(3, Math.abs((light6 ? 2 : 2)))))}`;
      vietnamu /= Math.max(3, zhengpianS.length);
   }
       let xadsdkS = String.fromCharCode(117,110,112,114,101,109,117,108,116,105,112,108,121,0);
         xadsdkS = `${xadsdkS.length % (Math.max(1, 10))}`;
         xadsdkS = `${2 << (Math.min(2, xadsdkS.length))}`;
         xadsdkS = `${xadsdkS.length | 1}`;
      sports4 = new Map([[`${gesturesK}`, xadsdkS.length % 2]]);
       let libruntimeexecutorL = 0.0;
       let gestures7 = String.fromCharCode(99,111,109,112,97,116,105,98,105,108,105,116,121,0);
      let singleY = gestures7.length <= 4957819;
      do {
         gestures7 = `${(String.fromCharCode(86,0) == gestures7 ? gestures7.length : parseInt(`${libruntimeexecutorL}`))}`;
         if (singleY) {
            break;
         }
      } while (singleY && (libruntimeexecutorL > gestures7.length));
      for (let l = 0; l < 2; l++) {
          let playlistY: Map<any, any> = new Map([[String.fromCharCode(102,105,110,0),false ], [String.fromCharCode(114,101,99,111,114,100,105,110,103,0),false ]]);
          let expiredY = String.fromCharCode(115,117,98,116,121,112,101,0);
          let giftz: Map<any, any> = new Map([[String.fromCharCode(99,111,100,101,99,100,97,116,97,0),String.fromCharCode(114,101,102,105,110,105,110,103,0)], [String.fromCharCode(114,101,103,105,115,116,114,97,114,0),String.fromCharCode(117,110,115,101,114,105,97,108,105,122,101,0)]]);
          let libruntimeexecutorV = String.fromCharCode(112,100,115,0);
         gestures7 = `${playlistY.size << (Math.min(Math.abs(3), 4))}`;
         playlistY.set(libruntimeexecutorV, (libruntimeexecutorV == String.fromCharCode(76,0) ? libruntimeexecutorV.length : expiredY.length));
         expiredY += "3";
         giftz.set(`${libruntimeexecutorV}`, 1 - libruntimeexecutorV.length);
      }
      control7 -= phoneZ.length;
      vietnamu /= Math.max(dataI.size, 2);
      zhengpianS = `${sports4.size ^ 1}`;
       let edit4 = String.fromCharCode(112,101,101,114,99,111,110,110,101,99,116,105,111,110,105,110,116,101,114,102,97,99,101,0);
       let sportZ = true;
       let libavformat_ = String.fromCharCode(114,101,97,100,105,110,105,116,0);
         libavformat_ = "3";
       let cancelo = String.fromCharCode(99,106,112,101,103,0);
      for (let h = 0; h < 3; h++) {
         libavformat_ += `${edit4.length}`;
      }
         libavformat_ = `${((sportZ ? 3 : 1) % (Math.max(1, 2)))}`;
         sportZ = !sportZ;
      gesturesK = 68 >= phoneZ.length;
   if (!Array.from(dataI.values()).includes(control7)) {
      control7 %= Math.max(2, phoneZ.length * parseInt(`${vietnamu}`));
   }
   for (let d = 0; d < 3; d++) {
      gesturesK = vietnamu < 11.83 && zhengpianS == String.fromCharCode(50,0);
   }
      buttonV = 76.72 == vietnamu;

    return Math.floor(
      (windowDim - CARDS_PER_ROW * cardWidth) / (CARDS_PER_ROW - 1),
    );
  }, [windowDim, CARDS_PER_ROW, cardWidth]);

  
  const lastContentOffset = useSharedValue(0);
  const isScrolling = useSharedValue(false);
  const isFilterCollapse = useSharedValue(false);
  
  const isCollapseEffect = useSharedValue(false);

  const [results, setResults] = useState<Array<yys_ActivityTumbnail>>([]);

  const contentStyle = useAnimatedStyle(() => {
       let libreact5 = String.fromCharCode(99,111,108,117,109,110,115,0);
    let collectioni = false;
    let mathh: Array<any> = [890, 591, 215];
    let send_ = 1;
    let submita = String.fromCharCode(116,121,112,101,115,116,114,0);
    let mathu = 5.0;
    let sheetp = 3.0;
    let forwardW = true;
    let indicatorA = true;
    let mbbidq: Map<any, any> = new Map([[String.fromCharCode(115,116,97,114,116,115,0),715], [String.fromCharCode(110,110,109,111,100,0),508]]);
    let adultT = 3.0;
    let recommendationS = 4;
    let splash0 = String.fromCharCode(114,101,115,111,108,117,116,105,111,110,0);
    let downl = 0.0;
    let sansO: Array<any> = [372, 227];
      indicatorA = (79 == (mbbidq.size << (Math.min(4, Math.abs((forwardW ? mbbidq.size : 14))))));
       let kuaishouk = 2.0;
       let time_v3q: Array<any> = [String.fromCharCode(102,105,108,101,115,0), String.fromCharCode(105,112,97,100,100,0), String.fromCharCode(100,114,97,119,97,98,108,101,0)];
         time_v3q.push(2 >> (Math.min(Math.abs(parseInt(`${kuaishouk}`)), 4)));
      let libreactperfloggerjniR = 8016608 >= time_v3q.length;
      do {
          let product9 = 2.0;
          let buildK = String.fromCharCode(103,108,105,116,99,104,0);
         time_v3q = [parseInt(`${product9}`)];
         product9 *= parseFloat(`${buildK.length / (Math.max(buildK.length, 9))}`);
         if (libreactperfloggerjniR) {
            break;
         }
      } while (libreactperfloggerjniR && (3.68 == kuaishouk));
       let setting9 = 5;
       let fileR = 3;
      while (2 > (time_v3q.length << (Math.min(1, Math.abs(fileR))))) {
         fileR /= Math.max(parseInt(`${kuaishouk}`), 2);
         break;
      }
          let episodesO: Array<any> = [360, 633, 311];
          let sourceq = String.fromCharCode(97,99,115,107,105,112,0);
          let hooksS = 3;
         kuaishouk += parseFloat(`${fileR >> (Math.min(sourceq.length, 1))}`);
         episodesO.push(episodesO.length);
         sourceq += `${hooksS / 3}`;
         hooksS -= hooksS | episodesO.length;
      if (5.2 > (parseFloat(`${setting9}`) * kuaishouk) || 3.19 > (kuaishouk * 5.2)) {
         kuaishouk -= parseFloat(`${fileR}`);
      }
      mathh.push(2 >> (Math.min(3, Math.abs(send_))));
   while (!collectioni) {
      mathh = [2 | send_];
      break;
   }
   for (let p = 0; p < 1; p++) {
      indicatorA = send_ >= 70;
   }
   let leakchecker7 = submita == String.fromCharCode(116,95,112,95,121,0);
   do {
       let found8 = false;
       let tumbnailA = String.fromCharCode(114,101,109,117,120,101,114,0);
       let nativeexT = String.fromCharCode(114,101,99,111,110,115,116,114,117,99,116,101,100,0);
       let const_647 = 2;
      while ((1 << (Math.min(5, nativeexT.length))) >= 3) {
         nativeexT = `${((found8 ? 2 : 1) / (Math.max(tumbnailA.length, 10)))}`;
         break;
      }
      let constantsH = const_647 >= 6253989;
      do {
          let kick4 = 3.0;
          let championR = 5.0;
         const_647 /= Math.max(2, (String.fromCharCode(107,0) == tumbnailA ? tumbnailA.length : const_647));
         kick4 -= parseFloat(`${parseInt(`${championR}`)}`);
         championR *= parseFloat(`${1}`);
         if (constantsH) {
            break;
         }
      } while (constantsH && ((const_647 % (Math.max(5, 6))) >= 2 && const_647 >= 5));
      let backgroundG = 5050849 >= tumbnailA.length;
      do {
         tumbnailA = `${2 * tumbnailA.length}`;
         if (backgroundG) {
            break;
         }
      } while (backgroundG && (found8));
         const_647 /= Math.max(((found8 ? 4 : 3)), 3);
          let greyX = 2;
         tumbnailA += `${const_647}`;
         greyX >>= Math.min(Math.abs(greyX / (Math.max(2, 8))), 2);
         nativeexT = `${tumbnailA.length}`;
       let gradler = String.fromCharCode(110,101,118,101,114,0);
       let nativeexN = String.fromCharCode(115,116,114,0);
      for (let n = 0; n < 2; n++) {
         nativeexN += `${const_647 << (Math.min(Math.abs(3), 5))}`;
      }
         nativeexN += `${nativeexN.length ^ 1}`;
         found8 = nativeexN.length > tumbnailA.length;
         tumbnailA += `${(gradler == String.fromCharCode(104,0) ? gradler.length : const_647)}`;
      let langN = 9234883 <= const_647;
      do {
          let castinga = String.fromCharCode(101,114,97,115,101,114,0);
          let unready = String.fromCharCode(99,114,111,115,115,0);
          let handlerc = 1;
         const_647 ^= const_647;
         castinga += `${2 - unready.length}`;
         unready = "2";
         handlerc *= 3 ^ handlerc;
         if (langN) {
            break;
         }
      } while (langN && (!gradler.includes(`${const_647}`)));
      submita = "2";
      if (leakchecker7) {
         break;
      }
   } while (leakchecker7 && ((5 + parseInt(`${sheetp}`)) <= 5 || 4 <= (submita.length ^ 5)));
      mbbidq = new Map([[`${mbbidq.size}`, parseInt(`${sheetp}`)]]);
   if (libreact5.endsWith(`${sheetp}`)) {
      libreact5 = `${1 + send_}`;
   }
   while (!splash0.endsWith(`${indicatorA}`)) {
       let castingd: Array<any> = [892, 426];
       let i_count9: Array<any> = [86, 975, 206];
       let launcherJ: Array<any> = [853, 224, 960];
          let country2 = String.fromCharCode(97,116,116,114,105,98,117,116,101,100,0);
          let plash5 = String.fromCharCode(114,101,115,97,109,112,0);
          let historyQ = 0;
         launcherJ.push((String.fromCharCode(111,0) == plash5 ? historyQ : plash5.length));
         country2 += `${country2.length}`;
         i_count9 = [2];
       let description_234 = String.fromCharCode(108,111,99,97,116,101,100,0);
         launcherJ.push(3);
         launcherJ = [2 / (Math.max(10, description_234.length))];
         launcherJ.push(2);
      if (5 > (description_234.length & 4)) {
          let pagination3 = String.fromCharCode(108,97,121,101,114,105,110,103,0);
          let areaq = 2.0;
         i_count9.push(1);
         pagination3 += `${pagination3.length}`;
         areaq += 3;
      }
         launcherJ.push(2 / (Math.max(7, i_count9.length)));
      let assist8 = castingd.length <= 9810268;
      do {
         castingd = [i_count9.length];
         if (assist8) {
            break;
         }
      } while (assist8 && ((i_count9.length / (Math.max(3, 10))) > 5 || 3 > (castingd.length / (Math.max(6, i_count9.length)))));
      splash0 += `${((collectioni ? 2 : 3) | parseInt(`${adultT}`))}`;
      break;
   }
   let whatsappH = 5308112.0 >= adultT;
   do {
      adultT /= Math.max(parseFloat(`${recommendationS / 1}`), 2);
      if (whatsappH) {
         break;
      }
   } while (whatsappH && (mbbidq.get(`${adultT}`) == null));
   if (mathh.length == parseInt(`${adultT}`)) {
      adultT /= Math.max(5, parseFloat(`${submita.length ^ 1}`));
   }
      libreact5 = `${((collectioni ? 4 : 5))}`;
   if (2 == libreact5.length) {
       let sendO = 1.0;
       let form9: Array<any> = [String.fromCharCode(117,110,105,110,105,116,0), String.fromCharCode(113,112,98,105,116,115,0), String.fromCharCode(116,114,105,112,108,101,116,0)];
      for (let h = 0; h < 1; h++) {
         sendO += parseFloat(`${parseInt(`${sendO}`)}`);
      }
         sendO += parseFloat(`${parseInt(`${sendO}`)}`);
      for (let m = 0; m < 1; m++) {
         sendO *= parseFloat(`${3}`);
      }
          let utilsI = 5.0;
          let libimagepipelined = String.fromCharCode(109,105,112,115,0);
         sendO *= parseFloat(`${2}`);
         utilsI += parseInt(`${utilsI}`);
         libimagepipelined += `${(libimagepipelined == String.fromCharCode(72,0) ? parseInt(`${utilsI}`) : libimagepipelined.length)}`;
      let settingsF = 7047494 >= form9.length;
      do {
          let splash06 = 0.0;
          let logoutq = String.fromCharCode(99,102,102,116,98,0);
          let crown5 = 0.0;
         form9.push(3);
         splash06 += parseFloat(`${parseInt(`${crown5}`)}`);
         logoutq = "3";
         crown5 += logoutq.length & parseInt(`${crown5}`);
         if (settingsF) {
            break;
         }
      } while (settingsF && (1.12 >= (sendO - parseFloat(`${form9.length}`)) || 3 >= (parseInt(`${sendO}`) - form9.length)));
      for (let l = 0; l < 3; l++) {
         sendO *= parseFloat(`${form9.length}`);
      }
      collectioni = 61.94 < adultT && 61.94 < mathu;
   }

    return {
      display: isFilterCollapse.value ? 'none' : 'flex',
    };
  }, []);

  const contentSummaryStyle = useAnimatedStyle(() => {
       let libavformatA = false;
    let yellowx = false;
    let mimoj = true;
    let gradleD: Array<any> = [759, 715];
    let modityV = 0;
    let sharedv = String.fromCharCode(115,104,111,119,99,113,116,0);
    let sinaK: Array<any> = [314, 580, 352];
    let productD = true;
    let x_titleI = String.fromCharCode(118,108,102,102,0);
    let less3: Map<any, any> = new Map([[String.fromCharCode(117,110,115,97,118,101,0),634], [String.fromCharCode(97,101,99,0),385]]);
   for (let h = 0; h < 1; h++) {
       let editt = 3;
       let store8 = 5.0;
       let nexta = String.fromCharCode(109,98,98,121,0);
       let privilege8 = String.fromCharCode(101,120,99,101,112,116,0);
         store8 -= nexta.length % (Math.max(2, 7));
      if (1 < (parseInt(`${store8}`) / (Math.max(nexta.length, 3))) || (1 >> (Math.min(4, nexta.length))) < 1) {
         nexta += `${nexta.length}`;
      }
          let footballp = 3;
         privilege8 += `${editt}`;
         footballp &= 2;
      for (let o = 0; o < 3; o++) {
         editt -= nexta.length;
      }
         nexta = `${(String.fromCharCode(48,0) == nexta ? nexta.length : editt)}`;
       let backwardR = String.fromCharCode(114,101,100,111,0);
      while (backwardR.length < privilege8.length) {
         backwardR += `${1 & parseInt(`${store8}`)}`;
         break;
      }
         privilege8 = `${privilege8.length & 1}`;
         nexta = `${(backwardR == String.fromCharCode(118,0) ? backwardR.length : privilege8.length)}`;
      for (let o = 0; o < 3; o++) {
         nexta = `${editt | 2}`;
      }
         privilege8 = `${nexta.length}`;
       let vignetteQ = 3;
      modityV -= editt;
   }
   while (1 >= (gradleD.length ^ 3) && gradleD.length >= 3) {
       let baidul = String.fromCharCode(116,104,97,110,0);
       let imagemanager3 = String.fromCharCode(102,102,105,111,0);
       let playi = String.fromCharCode(112,101,110,100,105,110,103,0);
       let fullW = 5.0;
          let sello = String.fromCharCode(108,105,98,97,118,99,111,100,101,99,0);
          let store3 = String.fromCharCode(110,101,103,97,116,105,118,101,0);
         baidul += `${baidul.length}`;
         sello += `${(String.fromCharCode(52,0) == store3 ? store3.length : sello.length)}`;
      for (let k = 0; k < 2; k++) {
          let alertL: Map<any, any> = new Map([[String.fromCharCode(100,115,116,0),String.fromCharCode(98,117,102,101,114,0)], [String.fromCharCode(103,108,111,98,0),String.fromCharCode(115,111,100,105,115,99,111,110,110,101,99,116,0)], [String.fromCharCode(115,111,99,107,101,116,118,97,114,0),String.fromCharCode(112,97,114,97,109,115,0)]]);
          let photoD = 2;
         imagemanager3 = `${photoD}`;
         alertL = new Map([[`${alertL.size}`, 1]]);
         photoD += alertL.size;
      }
      let videocommonh = String.fromCharCode(112,121,105,57,97,114,0) == baidul;
      do {
         baidul += `${baidul.length >> (Math.min(Math.abs(3), 4))}`;
         if (videocommonh) {
            break;
         }
      } while (videocommonh && (fullW < 2.15));
      let package_8y0 = baidul.length >= 5202187;
      do {
          let commentm = 5.0;
          let userH = 2.0;
          let shared1: Map<any, any> = new Map([[String.fromCharCode(101,120,112,111,110,101,110,116,115,0),67], [String.fromCharCode(112,114,111,103,114,101,115,115,101,115,0),178], [String.fromCharCode(99,111,110,110,101,99,116,105,118,105,116,121,0),496]]);
          let full6 = String.fromCharCode(103,122,105,112,112,101,100,0);
         baidul = `${parseInt(`${userH}`) & 2}`;
         commentm /= Math.max(2, parseFloat(`${parseInt(`${commentm}`)}`));
         userH /= Math.max(2, parseFloat(`${shared1.size & parseInt(`${commentm}`)}`));
         shared1.set(`${commentm}`, shared1.size >> (Math.min(5, Math.abs(parseInt(`${commentm}`)))));
         full6 += `${full6.length >> (Math.min(3, Math.abs(shared1.size)))}`;
         if (package_8y0) {
            break;
         }
      } while (package_8y0 && (4 <= (3 << (Math.min(2, baidul.length)))));
      if ((imagemanager3.length + 3) < 5 || (parseInt(`${fullW}`) + imagemanager3.length) < 3) {
         fullW /= Math.max(parseInt(`${fullW}`), 5);
      }
          let imagemanagery = 4;
          let filled4 = String.fromCharCode(100,115,117,98,101,120,112,0);
          let clocke = String.fromCharCode(105,110,116,101,103,101,114,105,102,121,0);
         imagemanager3 += `${clocke.length / (Math.max(3, 3))}`;
         imagemanagery += imagemanagery;
         filled4 += `${(String.fromCharCode(118,0) == filled4 ? filled4.length : imagemanagery)}`;
         clocke = `${filled4.length}`;
      for (let d = 0; d < 1; d++) {
         baidul += `${baidul.length | parseInt(`${fullW}`)}`;
      }
      for (let n = 0; n < 2; n++) {
         baidul = `${3 | parseInt(`${fullW}`)}`;
      }
          let description_48J = 0;
          let productX: Map<any, any> = new Map([[String.fromCharCode(115,101,101,110,0),725], [String.fromCharCode(100,101,112,101,110,100,101,110,116,0),398], [String.fromCharCode(115,101,110,99,0),382]]);
          let goalR = true;
         baidul += `${productX.size - 1}`;
         description_48J %= Math.max(description_48J, 4);
         productX.set(`${description_48J}`, description_48J);
         goalR = description_48J > 5;
          let long_ol: Map<any, any> = new Map([[String.fromCharCode(99,112,108,115,99,97,108,101,115,0),String.fromCharCode(111,108,100,101,115,116,0)], [String.fromCharCode(115,116,114,111,110,103,0),String.fromCharCode(112,114,101,114,111,108,108,0)]]);
          let flipperT = 1;
         fullW += (String.fromCharCode(110,0) == playi ? playi.length : parseInt(`${fullW}`));
         long_ol = new Map([[`${long_ol.size}`, flipperT + long_ol.size]]);
         flipperT %= Math.max(long_ol.size + flipperT, 4);
       let long_50 = String.fromCharCode(115,116,114,101,97,109,105,100,0);
       let infoF = String.fromCharCode(97,101,97,100,0);
         imagemanager3 = `${playi.length}`;
      gradleD.push(((yellowx ? 4 : 5)));
      break;
   }
      sharedv = `${(2 & (mimoj ? 5 : 3))}`;
   for (let a = 0; a < 3; a++) {
      productD = !libavformatA;
   }
      sharedv = `${sharedv.length / 2}`;
      productD = !yellowx;
   for (let t = 0; t < 3; t++) {
      gradleD = [(2 << (Math.min(4, Math.abs((libavformatA ? 1 : 5)))))];
   }
   let largeg = libavformatA ? !libavformatA : libavformatA;
   do {
       let nalyticsf = String.fromCharCode(109,107,118,109,117,120,101,114,117,116,105,108,0);
       let long_5X = String.fromCharCode(105,110,116,114,97,120,109,98,121,0);
         long_5X = `${long_5X.length << (Math.min(Math.abs(3), 2))}`;
       let foundE = String.fromCharCode(99,111,110,102,105,103,0);
       let reactnativejsD = String.fromCharCode(110,97,118,105,103,97,116,111,114,0);
         reactnativejsD += `${3 >> (Math.min(3, foundE.length))}`;
          let fastD = String.fromCharCode(108,115,102,108,115,112,0);
         foundE += `${(reactnativejsD == String.fromCharCode(68,0) ? reactnativejsD.length : long_5X.length)}`;
         fastD = `${(fastD == String.fromCharCode(50,0) ? fastD.length : fastD.length)}`;
         long_5X += "1";
       let wcopy_yr: Map<any, any> = new Map([[String.fromCharCode(105,110,112,111,115,0),false ], [String.fromCharCode(116,105,109,101,108,105,110,101,0),true ]]);
      libavformatA = !mimoj;
      nalyticsf += `${nalyticsf.length * nalyticsf.length}`;
      if (largeg) {
         break;
      }
   } while (largeg && (!libavformatA));

    return {
      display: isFilterCollapse.value ? 'flex' : 'none',
      paddingBottom: 1,
    };
  }, []);

  const reset = () => {
       let crossg = String.fromCharCode(111,118,101,114,108,111,97,100,0);
    let rewardO = 4;
    let regengy: Array<any> = [String.fromCharCode(121,101,116,0), String.fromCharCode(98,116,110,99,108,105,99,107,0), String.fromCharCode(99,104,117,110,107,101,100,0)];
    let str6: Array<any> = [89, 606];
    let fileb = false;
    let nalyticsL = String.fromCharCode(117,110,104,97,110,100,108,101,100,0);
    let classesQ = String.fromCharCode(117,115,101,0);
    let hoverK = true;
    let plashR: Map<any, any> = new Map([[String.fromCharCode(98,108,111,98,115,105,122,101,0),true ], [String.fromCharCode(99,97,114,100,105,110,97,108,105,116,121,0),false ], [String.fromCharCode(101,120,112,111,110,101,110,116,105,97,108,0),false ]]);
    let unimplementedviewd = String.fromCharCode(114,101,112,108,97,121,0);
    let canvasV = String.fromCharCode(115,117,98,100,105,118,105,115,105,111,110,0);
    let libsentryU = 4.0;
    let whistle_ = 2;
    let r_manageri = String.fromCharCode(99,104,101,118,114,111,110,0);
    let calendar8 = String.fromCharCode(97,95,49,52,0);
   if (libsentryU > 3.57) {
      classesQ = "1";
   }
   let textO = 6953804 <= nalyticsL.length;
   do {
      nalyticsL += `${rewardO}`;
      if (textO) {
         break;
      }
   } while ((nalyticsL.length <= 2) && textO);
       let activityD = 4.0;
      while (activityD == 1.55) {
          let theme5 = String.fromCharCode(110,111,116,105,99,101,0);
         activityD *= (parseFloat(`${String.fromCharCode(89,0) == theme5 ? parseInt(`${activityD}`) : theme5.length}`));
         break;
      }
         activityD += parseFloat(`${parseInt(`${activityD}`)}`);
      let nativeexn = 9572637.0 >= activityD;
      do {
         activityD += parseFloat(`${1}`);
         if (nativeexn) {
            break;
         }
      } while ((2.31 > (activityD / 3.18) && (activityD / (Math.max(7, activityD))) > 3.18) && nativeexn);
      classesQ = `${rewardO + 2}`;
       let gestures_ = true;
       let configx = 1.0;
       let targetl: Array<any> = [119, 382, 289];
          let acceptedo = true;
         configx += parseFloat(`${targetl.length}`);
      for (let f = 0; f < 3; f++) {
          let valuesi: Map<any, any> = new Map([[String.fromCharCode(111,110,116,114,111,108,0),true ], [String.fromCharCode(101,120,116,114,97,115,0),true ]]);
          let gdtadvs = 3;
          let directQ: Array<any> = [792, 696];
          let userJ = 3.0;
          let dpluss = false;
         targetl = [parseInt(`${userJ}`) * 3];
         valuesi = new Map([[`${directQ.length}`, directQ.length]]);
         gdtadvs >>= Math.min(Math.abs((valuesi.size & (dpluss ? 2 : 2))), 3);
         userJ *= parseFloat(`${gdtadvs}`);
      }
      let yingS = configx >= 6915732.0;
      do {
         configx -= parseFloat(`${2}`);
         if (yingS) {
            break;
         }
      } while ((5.81 >= (2.63 - configx) && 2.63 >= configx) && yingS);
          let zoom0 = String.fromCharCode(110,111,111,112,0);
         gestures_ = configx >= 48.11;
         zoom0 = `${3 ^ zoom0.length}`;
         configx += (parseFloat(`${parseInt(`${configx}`) | (gestures_ ? 1 : 1)}`));
       let streaming9 = 5;
       let buttonw = 2;
       let dragz = 2;
      let alertd = targetl.length >= 6004759;
      do {
         targetl.push(parseInt(`${configx}`));
         if (alertd) {
            break;
         }
      } while (alertd && (4 <= (targetl.length % 2) && (2 % (Math.max(7, streaming9))) <= 2));
      while (1 <= (4 & targetl.length) || 5 <= (4 & streaming9)) {
         targetl = [dragz];
         break;
      }
      fileb = str6.includes(fileb);
      libsentryU -= parseFloat(`${1}`);
   let launcher6 = String.fromCharCode(102,120,119,55,101,0) == classesQ;
   do {
       let fastforwardx = String.fromCharCode(102,97,105,108,97,98,108,101,0);
       let favoritej = 0.0;
       let libfbjniU = String.fromCharCode(119,109,97,112,114,111,0);
         fastforwardx = `${libfbjniU.length}`;
       let borderless6 = String.fromCharCode(100,101,98,117,103,103,105,110,103,0);
       let libreactperfloggerjnit = String.fromCharCode(109,111,117,115,101,0);
      for (let g = 0; g < 1; g++) {
         fastforwardx = `${libfbjniU.length}`;
      }
          let libloggero = true;
          let tickeda = String.fromCharCode(115,116,117,102,102,115,116,0);
         favoritej /= Math.max(parseFloat(`${libfbjniU.length}`), 2);
         libloggero = tickeda.endsWith(`${libloggero}`);
         tickeda += `${((libloggero ? 5 : 1) / (Math.max(tickeda.length, 4)))}`;
         fastforwardx = `${(String.fromCharCode(100,0) == libreactperfloggerjnit ? libreactperfloggerjnit.length : libfbjniU.length)}`;
      let rewinda = favoritej >= 6519440.0;
      do {
          let commonL = 1.0;
          let twitterU: Map<any, any> = new Map([[String.fromCharCode(115,97,118,105,110,103,0),678], [String.fromCharCode(102,114,101,113,117,101,110,99,121,0),874]]);
          let animationy = String.fromCharCode(100,101,97,99,116,0);
          let statisticsj = 0.0;
         favoritej *= parseFloat(`${parseInt(`${commonL}`)}`);
         commonL -= 3;
         twitterU.set(`${statisticsj}`, parseInt(`${statisticsj}`) | animationy.length);
         animationy += `${(String.fromCharCode(98,0) == animationy ? twitterU.size : animationy.length)}`;
         if (rewinda) {
            break;
         }
      } while ((!fastforwardx.includes(`${favoritej}`)) && rewinda);
          let placeholderB = false;
         borderless6 = `${borderless6.length}`;
         placeholderB = placeholderB && placeholderB;
          let materialH = String.fromCharCode(112,111,108,108,115,0);
          let thailandC = String.fromCharCode(100,101,110,105,97,108,0);
         libfbjniU = `${fastforwardx.length}`;
         materialH += `${thailandC.length}`;
         thailandC = `${materialH.length}`;
      while (2 < (fastforwardx.length * 1)) {
          let klevin5: Map<any, any> = new Map([[String.fromCharCode(121,117,118,112,116,111,121,117,121,0),false ], [String.fromCharCode(98,117,116,116,111,110,115,0),true ]]);
          let animationse = String.fromCharCode(103,101,116,120,118,97,114,0);
          let overlayI = true;
         fastforwardx = "2";
         klevin5 = new Map([[`${klevin5.size}`, (String.fromCharCode(109,0) == animationse ? animationse.length : klevin5.size)]]);
         overlayI = overlayI || klevin5.size < 53;
         break;
      }
      classesQ += `${plashR.size >> (Math.min(Math.abs(3), 5))}`;
      if (launcher6) {
         break;
      }
   } while ((4 > classesQ.length && !hoverK) && launcher6);
      crossg = "3";
      unimplementedviewd = `${((hoverK ? 5 : 4) ^ parseInt(`${libsentryU}`))}`;
       let roundG: Map<any, any> = new Map([[String.fromCharCode(100,101,116,101,114,109,105,110,101,0),380], [String.fromCharCode(104,97,110,100,108,101,115,0),964]]);
      for (let r = 0; r < 2; r++) {
         roundG.set(`${roundG.size}`, roundG.size | 2);
      }
       let penalty7 = false;
          let changek = 5.0;
          let connectionO = true;
         penalty7 = (penalty7 ? !connectionO : !penalty7);
         changek += parseFloat(`${3 / (Math.max(4, parseInt(`${changek}`)))}`);
         connectionO = changek < 63.38;
      classesQ += `${str6.length}`;
      crossg += `${classesQ.length}`;

    queryClient.removeQueries(['filteredVods']);

   for (let k = 0; k < 1; k++) {
      canvasV = `${canvasV.length}`;
   }
      regengy.push(2);
   while (nalyticsL != canvasV) {
       let wind9 = 2.0;
       let hiadk = 0.0;
          let entry7 = String.fromCharCode(112,97,110,105,99,0);
         hiadk *= parseInt(`${hiadk}`) << (Math.min(4, Math.abs(2)));
         entry7 = `${entry7.length % 1}`;
          let update_c5p = 1.0;
         wind9 *= 2;
         update_c5p *= parseFloat(`${2}`);
          let dycreators = String.fromCharCode(99,111,110,115,105,115,116,101,110,99,121,0);
          let login0 = 2.0;
         hiadk *= 1;
         dycreators += `${dycreators.length}`;
         login0 += dycreators.length;
      for (let x = 0; x < 2; x++) {
          let time_0p = 1.0;
          let photoW: Map<any, any> = new Map([[String.fromCharCode(115,117,109,100,0),68], [String.fromCharCode(115,97,118,101,112,111,105,110,116,0),270], [String.fromCharCode(115,99,104,101,109,101,0),555]]);
          let profileN = 3.0;
         hiadk += photoW.size - parseInt(`${profileN}`);
         time_0p -= 1 - parseInt(`${time_0p}`);
         photoW.set(`${time_0p}`, 3 / (Math.max(7, parseInt(`${time_0p}`))));
      }
      let runtimeschedulerk = 7880959.0 >= hiadk;
      do {
         hiadk /= Math.max(3 - parseInt(`${wind9}`), 5);
         if (runtimeschedulerk) {
            break;
         }
      } while (((wind9 + hiadk) > 1.49) && runtimeschedulerk);
      for (let f = 0; f < 2; f++) {
         wind9 -= parseInt(`${hiadk}`);
      }
      canvasV += `${(str6.length | (fileb ? 2 : 5))}`;
      break;
   }
       let commonW = String.fromCharCode(114,101,99,97,108,99,117,108,97,116,105,111,110,0);
       let thailandn = 5;
       let orangeQ = 0;
         thailandn += (String.fromCharCode(80,0) == commonW ? thailandn : commonW.length);
         orangeQ -= commonW.length >> (Math.min(3, Math.abs(orangeQ)));
          let proxyp: Array<any> = [35, 916];
         thailandn %= Math.max(1, 4);
         proxyp.push(3);
      for (let l = 0; l < 3; l++) {
          let strings4: Map<any, any> = new Map([[String.fromCharCode(101,112,111,110,121,109,111,117,115,0),260], [String.fromCharCode(114,101,118,97,108,105,100,97,116,105,110,103,0),853]]);
         thailandn /= Math.max(5, thailandn % (Math.max(10, commonW.length)));
         strings4 = new Map([[`${strings4.size}`, 1]]);
      }
      while (!commonW.includes(`${thailandn}`)) {
          let reducerU = String.fromCharCode(99,97,108,99,117,108,97,116,105,111,110,0);
          let megaphonel = String.fromCharCode(99,111,117,110,116,101,114,0);
          let arrowl = 3.0;
         commonW = `${thailandn}`;
         reducerU = `${3 * megaphonel.length}`;
         megaphonel = "1";
         arrowl /= Math.max(2, parseFloat(`${3}`));
         break;
      }
      while (4 <= (thailandn ^ orangeQ)) {
         orangeQ |= thailandn << (Math.min(commonW.length, 4));
         break;
      }
         commonW = `${1 | commonW.length}`;
      if ((5 ^ commonW.length) < 4) {
          let fullW = String.fromCharCode(111,117,116,112,117,116,115,0);
          let arrow4 = String.fromCharCode(115,115,116,104,114,101,115,104,0);
          let read2 = 1;
         orangeQ <<= Math.min(Math.abs((fullW == String.fromCharCode(53,0) ? fullW.length : orangeQ)), 5);
         arrow4 += `${(arrow4 == String.fromCharCode(89,0) ? arrow4.length : read2)}`;
         read2 &= 1;
      }
      while (commonW.endsWith(`${thailandn}`)) {
         commonW += `${orangeQ}`;
         break;
      }
      regengy = [regengy.length ^ 2];
   let savej = regengy.length >= 7974642;
   do {
       let typing4: Array<any> = [283, 989];
      for (let b = 0; b < 2; b++) {
          let package_oxi = 4;
          let videog = 2.0;
          let r_title2 = true;
         typing4 = [1 >> (Math.min(Math.abs(parseInt(`${videog}`)), 2))];
         package_oxi %= Math.max(1, package_oxi);
         videog /= Math.max(5, 1);
         r_title2 = package_oxi == 17 || !r_title2;
      }
      for (let j = 0; j < 1; j++) {
         typing4.push(typing4.length ^ typing4.length);
      }
          let inviteu: Map<any, any> = new Map([[String.fromCharCode(115,112,101,97,107,105,110,103,0),591], [String.fromCharCode(109,105,115,117,115,101,0),918]]);
         typing4.push(inviteu.size);
      regengy.push(str6.length / (Math.max(9, parseInt(`${libsentryU}`))));
      if (savej) {
         break;
      }
   } while ((crossg.length <= 5) && savej);
   let submitl = nalyticsL.length >= 5492569;
   do {
      nalyticsL = `${plashR.size | 3}`;
      if (submitl) {
         break;
      }
   } while (submitl && (canvasV != nalyticsL));
      hoverK = nalyticsL.length <= 45 || !fileb;
   if ((regengy.length + 5) <= 4) {
      fileb = (plashR.size + rewardO) <= 11;
   }
   if (3 >= (plashR.size % (Math.max(3, 5)))) {
      plashR = new Map([[`${rewardO}`, ((hoverK ? 1 : 3) | rewardO)]]);
   }
      nalyticsL = `${crossg.length}`;
    setTopicClass(sameTextAndValueObj('全部类型'));

      regengy.push(3 / (Math.max(1, canvasV.length)));
      str6.push(nalyticsL.length + rewardO);
   for (let b = 0; b < 2; b++) {
      regengy = [nalyticsL.length ^ plashR.size];
   }
      unimplementedviewd += `${1 / (Math.max(9, whistle_))}`;
       let n_lockB = String.fromCharCode(109,97,110,105,102,101,115,116,0);
          let friends9 = 2.0;
          let libswscalex = String.fromCharCode(115,114,116,112,0);
          let componentregistryr: Map<any, any> = new Map([[String.fromCharCode(100,111,119,110,0),false ], [String.fromCharCode(115,116,105,108,108,0),false ], [String.fromCharCode(105,115,110,101,103,97,116,105,118,101,0),true ]]);
         n_lockB += `${1 >> (Math.min(3, Math.abs(parseInt(`${friends9}`))))}`;
         friends9 += parseFloat(`${componentregistryr.size & libswscalex.length}`);
         libswscalex = `${componentregistryr.size}`;
       let apps1 = 1.0;
      while (5.54 <= (apps1 * 2.57)) {
         n_lockB += `${(String.fromCharCode(89,0) == n_lockB ? parseInt(`${apps1}`) : n_lockB.length)}`;
         break;
      }
      whistle_ %= Math.max((String.fromCharCode(77,0) == nalyticsL ? str6.length : nalyticsL.length), 5);
      fileb = classesQ.length <= 22;
      libsentryU /= Math.max(1, parseFloat(`${rewardO}`));
      hoverK = 90 < canvasV.length;
   if (classesQ.startsWith(`${plashR.size}`)) {
      classesQ = `${regengy.length}`;
   }
   if (!unimplementedviewd.endsWith(`${libsentryU}`)) {
       let libfabricjni5 = String.fromCharCode(100,101,110,121,0);
       let nextm: Map<any, any> = new Map([[String.fromCharCode(103,97,105,110,99,0),246], [String.fromCharCode(100,114,97,103,103,105,110,103,0),193]]);
       let handlerB = false;
       let klevinX = String.fromCharCode(100,105,97,99,114,105,116,105,99,0);
         handlerB = String.fromCharCode(75,0) == klevinX;
         handlerB = libfabricjni5.length > nextm.size;
         handlerB = (56 < ((!handlerB ? klevinX.length : 56) / (Math.max(klevinX.length, 7))));
      for (let h = 0; h < 1; h++) {
         libfabricjni5 = `${(String.fromCharCode(105,0) == libfabricjni5 ? (handlerB ? 2 : 3) : libfabricjni5.length)}`;
      }
      if ((nextm.size >> (Math.min(Math.abs(4), 2))) > 4) {
         nextm = new Map([[`${nextm.size}`, nextm.size << (Math.min(Math.abs(3), 1))]]);
      }
      let notificationC = nextm.size <= 5705263;
      do {
          let gesture8: Map<any, any> = new Map([[String.fromCharCode(109,97,116,99,104,105,110,102,111,0),77], [String.fromCharCode(107,95,54,57,0),205], [String.fromCharCode(105,110,116,101,114,120,121,0),653]]);
          let const_4hc = String.fromCharCode(112,111,114,116,114,97,105,116,0);
          let templateprocessorh: Array<any> = [String.fromCharCode(118,101,99,115,0), String.fromCharCode(103,95,49,49,0), String.fromCharCode(99,111,117,108,100,0)];
         nextm = new Map([[`${nextm.size}`, nextm.size - const_4hc.length]]);
         gesture8.set(`${templateprocessorh.length}`, gesture8.size);
         const_4hc += `${gesture8.size + 1}`;
         templateprocessorh = [1];
         if (notificationC) {
            break;
         }
      } while ((4 == (nextm.size >> (Math.min(Math.abs(5), 2)))) && notificationC);
         nextm = new Map([[klevinX, 2]]);
      while (1 <= nextm.size || 4 <= (nextm.size + 1)) {
         nextm = new Map([[`${handlerB}`, (String.fromCharCode(77,0) == klevinX ? (handlerB ? 4 : 2) : klevinX.length)]]);
         break;
      }
         handlerB = nextm.size <= 75;
         klevinX = `${klevinX.length >> (Math.min(Math.abs(3), 3))}`;
      while (libfabricjni5.length == 1) {
          let user3 = false;
          let overh: Array<any> = [593, 929];
          let librrcH = String.fromCharCode(102,97,97,110,105,100,99,116,0);
          let modex: Array<any> = [809, 254];
         nextm.set(`${handlerB}`, libfabricjni5.length / (Math.max(3, 5)));
         user3 = (67 >= (librrcH.length % (Math.max(1, (user3 ? 67 : librrcH.length)))));
         overh.push(modex.length | 3);
         modex.push(1 << (Math.min(1, librrcH.length)));
         break;
      }
         nextm.set(libfabricjni5, nextm.size | libfabricjni5.length);
      unimplementedviewd = `${((hoverK ? 3 : 4) >> (Math.min(klevinX.length, 1)))}`;
   }
    setArea(sameTextAndValueObj('全部地区'));

       let libreactnativejnik = 5.0;
         libreactnativejnik *= parseFloat(`${parseInt(`${libreactnativejnik}`)}`);
       let starG = true;
       let plashe = false;
         libreactnativejnik -= (parseFloat(`${(starG ? 3 : 3) / (Math.max(10, (plashe ? 2 : 5)))}`));
      crossg += "3";
   while (str6.includes(libsentryU)) {
      str6.push(3);
      break;
   }
      rewardO >>= Math.min(1, canvasV.length);
   let nalyticsh = 7307215 <= canvasV.length;
   do {
      canvasV = `${(3 + (fileb ? 1 : 3))}`;
      if (nalyticsh) {
         break;
      }
   } while ((1 < (canvasV.length / (Math.max(10, plashR.size)))) && nalyticsh);
   for (let o = 0; o < 3; o++) {
      crossg += `${parseInt(`${libsentryU}`) - 2}`;
   }
   let annert = fileb ? !fileb : fileb;
   do {
      fileb = regengy.length == 47 || !hoverK;
      if (annert) {
         break;
      }
   } while (annert && (4 <= whistle_));
      fileb = 48 == plashR.size;
   while (!canvasV.includes(`${nalyticsL.length}`)) {
      nalyticsL += `${1 + crossg.length}`;
      break;
   }
      crossg += `${crossg.length}`;
   for (let t = 0; t < 2; t++) {
       let nativemodulel = String.fromCharCode(100,101,109,97,110,100,0);
         nativemodulel += "1";
      for (let x = 0; x < 3; x++) {
          let mbbide = String.fromCharCode(99,111,100,101,99,99,116,108,0);
          let sideC = String.fromCharCode(105,103,110,111,114,105,110,103,0);
          let membert = 5.0;
          let updatesi: Array<any> = [String.fromCharCode(97,108,108,111,99,97,116,101,100,0), String.fromCharCode(105,110,100,105,99,101,115,0), String.fromCharCode(100,111,109,97,105,110,115,0)];
          let taiwan7 = true;
         nativemodulel += `${sideC.length}`;
         mbbide = `${mbbide.length & 2}`;
         sideC += `${parseInt(`${membert}`)}`;
         membert -= 2;
         updatesi.push(parseInt(`${membert}`));
         taiwan7 = String.fromCharCode(79,0) == mbbide;
      }
         nativemodulel += "2";
      regengy = [unimplementedviewd.length / (Math.max(5, plashR.size))];
   }
    setLang(sameTextAndValueObj('全部语言'));

      plashR.set(unimplementedviewd, (String.fromCharCode(115,0) == unimplementedviewd ? crossg.length : unimplementedviewd.length));
   if (1 == (r_manageri.length * 3)) {
       let text1 = 5.0;
       let questC = true;
       let valueso = String.fromCharCode(101,115,112,111,110,100,101,114,0);
       let profileH = String.fromCharCode(100,105,109,115,0);
       let tickJ = String.fromCharCode(109,111,110,111,115,112,97,99,101,0);
         tickJ = `${profileH.length}`;
          let ksadH: Map<any, any> = new Map([[String.fromCharCode(112,107,101,121,0),262], [String.fromCharCode(102,97,100,101,0),336], [String.fromCharCode(105,115,99,111,118,101,114,0),579]]);
          let pathm = String.fromCharCode(109,111,115,116,0);
         text1 /= Math.max((pathm == String.fromCharCode(80,0) ? pathm.length : ksadH.size), 3);
       let membershipF = String.fromCharCode(105,110,105,116,105,97,108,105,122,97,116,105,111,110,115,0);
       let videojsi = String.fromCharCode(98,105,116,97,108,108,111,99,0);
      while (!questC) {
         questC = tickJ.endsWith(`${questC}`);
         break;
      }
         profileH += `${valueso.length}`;
      while (4 < tickJ.length) {
         tickJ += "2";
         break;
      }
         questC = 44.29 >= text1 && questC;
      if (tickJ.startsWith(`${questC}`)) {
         tickJ += "1";
      }
      for (let z = 0; z < 3; z++) {
         videojsi = `${(String.fromCharCode(73,0) == valueso ? profileH.length : valueso.length)}`;
      }
          let headerq = String.fromCharCode(110,111,100,111,119,110,0);
          let apple4 = String.fromCharCode(115,110,97,109,101,0);
          let s_lockZ = 0.0;
         valueso += "3";
         headerq += `${headerq.length}`;
         apple4 += `${1 & apple4.length}`;
         s_lockZ *= parseFloat(`${headerq.length - 2}`);
         valueso += "1";
      for (let f = 0; f < 2; f++) {
         valueso = `${(membershipF == String.fromCharCode(101,0) ? membershipF.length : valueso.length)}`;
      }
         videojsi = "2";
      if (videojsi.length >= 5) {
          let type_hsg = 3.0;
          let downloadN = 4;
          let playlistP = true;
          let dplus7 = true;
          let corep: Array<any> = [474, 32];
         profileH = "1";
         type_hsg /= Math.max(2, parseFloat(`${3}`));
         downloadN <<= Math.min(4, Math.abs(1 >> (Math.min(5, corep.length))));
         playlistP = playlistP && downloadN >= 60;
         dplus7 = (dplus7 ? playlistP : !dplus7);
         corep.push((corep.length - (playlistP ? 2 : 2)));
      }
         text1 += (tickJ == String.fromCharCode(72,0) ? tickJ.length : membershipF.length);
      r_manageri += `${str6.length}`;
   }
   while (fileb || 4 == (2 | str6.length)) {
      fileb = rewardO >= str6.length;
      break;
   }
      libsentryU += (parseFloat(`${(hoverK ? 2 : 3) ^ 1}`));
      canvasV = "2";
      whistle_ &= parseInt(`${libsentryU}`);
   let heartf = r_manageri == String.fromCharCode(100,55,111,121,113,53,95,109,98,98,0);
   do {
      r_manageri += `${whistle_}`;
      if (heartf) {
         break;
      }
   } while ((r_manageri.endsWith(`${fileb}`)) && heartf);
      crossg += `${(unimplementedviewd == String.fromCharCode(82,0) ? (hoverK ? 2 : 3) : unimplementedviewd.length)}`;
   let champion6 = calendar8 == String.fromCharCode(50,51,113,54,0);
   do {
      calendar8 += `${((fileb ? 5 : 3) ^ (hoverK ? 2 : 2))}`;
      if (champion6) {
         break;
      }
   } while ((3 >= calendar8.length) && champion6);
      plashR.set(`${libsentryU}`, 2 % (Math.max(4, parseInt(`${libsentryU}`))));
    setYear(sameTextAndValueObj('全部时间'));
  };

  const fetchVods = useCallback(
    (page: number) => yys_Downloader.getList({
      page,
      limit: LIMIT_PER_PAGE,
      tid: currentTopicId.toString(),
      by: orderBy.value,
      category: topicClass.value !== '全部类型' ? topicClass.value : undefined,
      area: area.value !== '全部地区' ? area.value : undefined,
      lang: lang.value !== '全部语言' ? lang.value : undefined,
      year: year.value !== '全部时间' ? year.value : undefined,
      orderBy: 'desc',
    }).then((data) => data.List as yys_ActivityTumbnail[]),
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

  
  
  
  
  

  const topicOptions: Array<yys_ControlsVolume> = useMemo(() => {
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
        yys_event_common.catalogViewsAnalytics({
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
    ({ item }: { item: yys_ControlsVolume }) => {
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
    ({ item, index }: { item: yys_ActivityTumbnail; index: number }) => {
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
                yys_event_common.catalogClicksAnalytics({
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
                    <DownArrow height={icons.sizes.l} width={icons.sizes.l} />
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
            keyExtractor={(item: yys_ActivityTumbnail, index: number) => {
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
                    source={require('@static/images/cancelSigmobLibzeus.gif')}
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
