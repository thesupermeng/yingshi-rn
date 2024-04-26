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
import ScreenContainer from '../../components/container/ww_collection';
import { useFocusEffect, useTheme } from '@react-navigation/native';

import { RootStackScreenProps } from '@type/ww_tempnodatagif_description';
import {
  wwProfileinactiveBrightness,
} from '@type/ww_dycreator_result';
import { playVod } from '@redux/actions/ww_floater';
import { useAppDispatch } from '@hooks/ww_catagory_neon';
import {
  useInfiniteQuery,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import TitleWithBackButtonHeader from '../../components/header/ww_react_predictionwin_header';
import { API_DOMAIN, API_DOMAIN_TEST } from '@utility/ww_icon';
import VodTopicFilter from '../../components/vod/ww_movies';
import VodCard from '../../components/vod/ww_accepted_current';
import DownArrow from '@static/images/newsshareCustomHuawei.svg';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { FlatListProps } from 'react-native/Libraries/Lists/FlatList';
import FastImage from '../../components/common/ww_result';
import appsFlyer from 'react-native-appsflyer';
import EmptyList from '../../components/common/ww_reducer_libreact';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { TabItem } from '@rneui/base/dist/Tab/wwEncryptSource.Item';
import { wwIconedit } from '@api';
import ww_runtime from '../../../Umeng/ww_runtime';

interface wwPlayDetail {
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
    queryFn: () => wwIconedit.getTopicType(),
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
       let userC = 0.0;
    let megaphonen = true;
    let referrert = String.fromCharCode(104,117,102,102,121,117,118,95,53,95,55,49,0);
    let dragclosec = String.fromCharCode(113,95,57,57,95,100,97,109,112,0);
    let macau9 = 2.0;
    let minih: Map<any, any> = new Map([[String.fromCharCode(100,99,97,100,97,116,97,95,54,95,56,55,0),String.fromCharCode(119,95,57,95,112,114,101,104,97,115,104,0)], [String.fromCharCode(105,95,51,48,95,120,106,112,101,103,0),String.fromCharCode(102,95,48,95,104,109,109,116,0)]]);
    let loginy = 4;
    let downloadE = 4;
   while ((loginy * userC) > 2.97) {
       let recommendation7 = String.fromCharCode(115,97,103,97,95,103,95,57,49,0);
       let libfollyB = true;
       let userK = 5;
       let found9 = false;
       let containerC: Map<any, any> = new Map([[String.fromCharCode(103,95,55,55,95,97,112,112,108,105,101,114,0),String.fromCharCode(97,95,52,57,95,111,112,101,110,0)], [String.fromCharCode(99,97,115,101,115,95,121,95,49,52,0),String.fromCharCode(113,95,50,51,95,116,114,105,112,108,101,116,0)], [String.fromCharCode(115,111,102,114,101,101,95,111,95,55,54,0),String.fromCharCode(100,95,54,48,95,113,99,97,110,0)]]);
         recommendation7 = "3";
      while (2 >= (containerC.size * 2) || containerC.size >= 2) {
          let gestureu = String.fromCharCode(116,101,109,112,102,105,108,101,95,101,95,56,51,0);
          let gmail_ = String.fromCharCode(99,111,101,102,102,95,117,95,51,48,0);
          let line_ = String.fromCharCode(115,95,57,52,95,111,116,104,101,114,0);
          let mbbidT: Array<any> = [479, 385, 873];
          let reactnativeratingsl = String.fromCharCode(108,95,52,95,115,116,111,114,97,98,108,101,0);
         found9 = found9 && userK < 98;
         gestureu = `${line_.length << (Math.min(Math.abs(2), 3))}`;
         gmail_ += `${mbbidT.length}`;
         line_ += `${gmail_.length / (Math.max(line_.length, 8))}`;
         mbbidT = [3];
         reactnativeratingsl = `${line_.length % (Math.max(2, 7))}`;
         break;
      }
      let ajax3 = found9 ? !found9 : found9;
      do {
         found9 = recommendation7.length > 96 && !found9;
         if (ajax3) {
            break;
         }
      } while ((4 == containerC.size) && ajax3);
      for (let t = 0; t < 3; t++) {
         found9 = !recommendation7.includes(`${found9}`);
      }
      while (found9) {
          let exampleimageu = 3;
         found9 = exampleimageu > 57 && 57 > recommendation7.length;
         break;
      }
       let dragX: Array<any> = [54, 560];
         dragX.push(userK);
      let sorty = 5130482 <= dragX.length;
      do {
          let matchactiveE: Array<any> = [596, 903, 117];
          let yellowanimationliveO = 5;
          let package_wT = String.fromCharCode(120,95,49,51,95,114,101,112,101,97,116,101,100,108,121,0);
          let shootyesgoalt = 4;
         dragX.push(1);
         matchactiveE = [package_wT.length << (Math.min(Math.abs(1), 1))];
         yellowanimationliveO |= (String.fromCharCode(107,0) == package_wT ? package_wT.length : matchactiveE.length);
         shootyesgoalt *= 2;
         if (sorty) {
            break;
         }
      } while (sorty && (containerC.get(`${dragX.length}`) != null));
      let dependencies7 = containerC.size <= 5608448;
      do {
          let eventsplashX = 0.0;
          let libzeusL = false;
          let playlistV = String.fromCharCode(115,112,101,99,116,114,97,108,95,52,95,52,54,0);
         containerC = new Map([[`${userK}`, userK >> (Math.min(Math.abs(parseInt(`${eventsplashX}`)), 1))]]);
         eventsplashX += ((libzeusL ? 1 : 3));
         libzeusL = !libzeusL;
         playlistV = `${((libzeusL ? 2 : 4))}`;
         if (dependencies7) {
            break;
         }
      } while (dependencies7 && ((3 - containerC.size) == 2 && !libfollyB));
      let backJ = containerC.size >= 8448833;
      do {
         containerC = new Map([[`${libfollyB}`, recommendation7.length]]);
         if (backJ) {
            break;
         }
      } while ((userK == containerC.size) && backJ);
      while (!libfollyB) {
         libfollyB = (54 > (recommendation7.length + (found9 ? recommendation7.length : 54)));
         break;
      }
      while (Array.from(containerC.values()).includes(userK)) {
         containerC.set(`${found9}`, (containerC.size + (found9 ? 4 : 4)));
         break;
      }
         recommendation7 = `${(3 / (Math.max(3, (libfollyB ? 4 : 2))))}`;
      while (dragX.length <= 3) {
         userK >>= Math.min(2, Math.abs(1 ^ containerC.size));
         break;
      }
      while (recommendation7.length >= 1) {
         recommendation7 = `${((libfollyB ? 1 : 5) >> (Math.min(Math.abs(1), 2)))}`;
         break;
      }
      loginy += loginy / (Math.max(1, 2));
      break;
   }
      minih.set(dragclosec, 3 + minih.size);
   if ((parseInt(`${macau9}`) - 1) <= 1 || (dragclosec.length - macau9) <= 2.72) {
      macau9 *= loginy;
   }
       let downloadQ = String.fromCharCode(114,101,99,111,118,101,114,95,120,95,54,49,0);
       let statisticss = 0;
       let qaagE = 0.0;
          let gradlewf = String.fromCharCode(116,101,114,109,105,110,97,116,101,95,49,95,48,0);
          let sportW = 0.0;
          let penalty3 = 5.0;
         downloadQ += `${parseInt(`${penalty3}`) >> (Math.min(5, Math.abs(statisticss)))}`;
         gradlewf += `${parseInt(`${sportW}`)}`;
         sportW += parseInt(`${sportW}`) % (Math.max(gradlewf.length, 1));
         penalty3 += parseFloat(`${gradlewf.length}`);
      if (1 > (1 | downloadQ.length) || 1 > (parseInt(`${qaagE}`) / (Math.max(downloadQ.length, 6)))) {
         qaagE /= Math.max(1, parseFloat(`${parseInt(`${qaagE}`)}`));
      }
       let defaultprofilepica = 1.0;
       let unselectedc = 3.0;
      let carousel0 = 7333882.0 <= defaultprofilepica;
      do {
          let activityB = String.fromCharCode(107,95,52,52,95,112,114,101,115,101,110,116,101,100,0);
          let clearY = String.fromCharCode(98,97,99,107,119,97,114,100,95,118,95,57,52,0);
         defaultprofilepica += 1 | activityB.length;
         activityB = "1";
         clearY = `${clearY.length}`;
         if (carousel0) {
            break;
         }
      } while (carousel0 && (1.9 > (unselectedc + defaultprofilepica) && 3.44 > (1.9 + defaultprofilepica)));
      for (let o = 0; o < 1; o++) {
         statisticss -= 3 * parseInt(`${qaagE}`);
      }
      for (let d = 0; d < 2; d++) {
          let libreacta = String.fromCharCode(120,95,55,49,95,112,114,107,0);
          let hiadJ = String.fromCharCode(115,105,109,117,108,97,116,105,111,110,95,51,95,53,50,0);
          let dacccfaabfbcbadeebddcabacdffdbX = 2.0;
          let i_hashS = 3.0;
         unselectedc /= Math.max(statisticss * 3, 2);
         libreacta = `${libreacta.length}`;
         hiadJ = `${libreacta.length}`;
         dacccfaabfbcbadeebddcabacdffdbX += libreacta.length ^ parseInt(`${i_hashS}`);
         i_hashS += 3;
      }
         qaagE *= parseFloat(`${parseInt(`${defaultprofilepica}`)}`);
       let aboutG: Map<any, any> = new Map([[String.fromCharCode(102,117,110,99,116,105,111,110,95,51,95,55,49,0),false ], [String.fromCharCode(114,101,99,111,110,115,116,114,117,99,116,101,100,95,113,95,53,54,0),false ]]);
       let giflivestreaming8: Map<any, any> = new Map([[String.fromCharCode(121,95,52,56,95,101,120,116,114,99,0),391], [String.fromCharCode(115,95,49,95,100,101,118,105,100,101,0),218]]);
         qaagE /= Math.max(4, parseFloat(`${3 & aboutG.size}`));
      userC += parseInt(`${qaagE}`);
       let footballfield0 = 5.0;
       let unfillA = String.fromCharCode(118,95,50,52,95,109,101,114,103,101,97,98,108,101,0);
      let mathg = unfillA.length <= 5635154;
      do {
          let templateprocessor9 = 1.0;
          let downloadedM = 5.0;
          let imagesd: Array<any> = [454, 147, 90];
         unfillA = `${2 * unfillA.length}`;
         templateprocessor9 *= parseFloat(`${parseInt(`${downloadedM}`) << (Math.min(Math.abs(parseInt(`${templateprocessor9}`)), 3))}`);
         downloadedM -= parseInt(`${downloadedM}`) + 2;
         imagesd = [imagesd.length ^ 3];
         if (mathg) {
            break;
         }
      } while ((1 > unfillA.length) && mathg);
      if ((footballfield0 * 2.14) < 4.65) {
         unfillA += "1";
      }
      while (2 > (parseInt(`${footballfield0}`) / (Math.max(unfillA.length, 7))) || (2 >> (Math.min(5, unfillA.length))) > 3) {
          let iconwechatI: Map<any, any> = new Map([[String.fromCharCode(99,111,110,116,105,110,117,97,108,95,107,95,50,51,0),false ], [String.fromCharCode(115,119,105,116,99,104,101,100,95,53,95,53,55,0),false ]]);
          let sortc: Array<any> = [290, 755];
         unfillA += `${iconwechatI.size ^ 1}`;
         iconwechatI.set(`${sortc.length}`, sortc.length >> (Math.min(Math.abs(1), 3)));
         break;
      }
      for (let q = 0; q < 2; q++) {
         unfillA += `${unfillA.length << (Math.min(Math.abs(1), 2))}`;
      }
       let tempc = 1.0;
       let loadingx = 4.0;
      let alerti = unfillA == String.fromCharCode(115,99,99,95,49,120,48,0);
      do {
          let weatherg: Map<any, any> = new Map([[String.fromCharCode(115,99,97,108,97,114,95,55,95,48,0),132], [String.fromCharCode(117,95,52,54,95,105,110,116,101,114,102,114,97,109,101,0),601]]);
          let overlay4 = 5;
          let weatherC = String.fromCharCode(122,95,53,54,95,97,116,111,105,0);
         unfillA = `${parseInt(`${loadingx}`)}`;
         weatherg.set(`${overlay4}`, weatherg.size % 1);
         overlay4 /= Math.max(overlay4 * weatherg.size, 5);
         weatherC += `${weatherg.size % 2}`;
         if (alerti) {
            break;
         }
      } while (alerti && (2 > (unfillA.length - parseInt(`${tempc}`)) && (2 ^ unfillA.length) > 3));
      macau9 *= dragclosec.length << (Math.min(5, unfillA.length));
      loginy >>= Math.min(Math.abs(3), 2);
   for (let o = 0; o < 2; o++) {
      loginy <<= Math.min(Math.abs((String.fromCharCode(48,0) == dragclosec ? dragclosec.length : minih.size)), 4);
   }
      macau9 /= Math.max(2, 2 ^ dragclosec.length);

    return Math.floor(
      (windowDim - CARDS_PER_ROW * cardWidth) / (CARDS_PER_ROW - 1),
    );
  }, [windowDim, CARDS_PER_ROW, cardWidth]);

  
  const lastContentOffset = useSharedValue(0);
  const isScrolling = useSharedValue(false);
  const isFilterCollapse = useSharedValue(false);
  
  const isCollapseEffect = useSharedValue(false);

  const [results, setResults] = useState<Array<wwProfileinactiveBrightness>>([]);

  const contentStyle = useAnimatedStyle(() => {
       let disconnectedlogoz: Array<any> = [261, 30, 792];
    let libaneu: Array<any> = [917, 784];
    let subsJ = String.fromCharCode(98,108,111,99,107,101,114,95,57,95,57,56,0);
    let yellowanimationlivec = 3.0;
    let iconmorev = String.fromCharCode(114,101,102,101,116,99,104,95,106,95,51,51,0);
    let chinasamei = 0.0;
    let overw: Map<any, any> = new Map([[String.fromCharCode(107,95,54,48,95,110,97,109,101,115,112,97,99,101,0),true ], [String.fromCharCode(114,101,103,105,115,116,101,114,102,100,115,95,55,95,54,48,0),true ], [String.fromCharCode(116,95,49,48,48,95,117,116,105,108,105,116,121,0),true ]]);
    let mapbufferz = String.fromCharCode(112,95,49,48,95,105,110,118,105,116,101,114,115,0);
    let time_1o = String.fromCharCode(104,97,108,102,95,49,95,49,53,0);
    let penaltygoali = 0.0;
    let imagemanagerr = true;
    let hiad_ = 4.0;
   for (let t = 0; t < 2; t++) {
       let filterM = String.fromCharCode(115,117,112,112,108,121,95,103,95,51,49,0);
         filterM += `${(String.fromCharCode(74,0) == filterM ? filterM.length : filterM.length)}`;
         filterM = `${1 << (Math.min(1, filterM.length))}`;
      for (let x = 0; x < 3; x++) {
         filterM += `${filterM.length * 2}`;
      }
      chinasamei *= iconmorev.length << (Math.min(1, disconnectedlogoz.length));
   }
   if (overw.get(`${chinasamei}`) == null) {
       let countryq: Map<any, any> = new Map([[String.fromCharCode(107,110,111,99,107,111,117,116,95,108,95,49,56,0),729], [String.fromCharCode(114,95,50,50,95,104,97,114,101,0),666]]);
         countryq = new Map([[`${countryq.size}`, countryq.size - countryq.size]]);
         countryq.set(`${countryq.size}`, countryq.size >> (Math.min(Math.abs(2), 5)));
      let downloadedo = 6072196 >= countryq.size;
      do {
         countryq.set(`${countryq.size}`, countryq.size + countryq.size);
         if (downloadedo) {
            break;
         }
      } while (downloadedo && (countryq.size <= 4));
      overw.set(`${yellowanimationlivec}`, subsJ.length);
   }
   let libjsijniprofilerL = 5612775.0 >= yellowanimationlivec;
   do {
      yellowanimationlivec /= Math.max((parseFloat(`${String.fromCharCode(79,0) == iconmorev ? iconmorev.length : overw.size}`)), 2);
      if (libjsijniprofilerL) {
         break;
      }
   } while ((yellowanimationlivec <= 1.64) && libjsijniprofilerL);
   for (let c = 0; c < 2; c++) {
       let zhengpian3: Map<any, any> = new Map([[String.fromCharCode(113,95,55,54,95,116,97,115,107,0),738], [String.fromCharCode(102,95,50,51,95,109,112,97,100,115,112,0),795], [String.fromCharCode(106,95,55,55,95,109,117,108,116,105,112,108,105,101,100,0),680]]);
       let iconrefreshP = String.fromCharCode(115,116,105,99,107,101,114,115,95,105,95,56,52,0);
       let libffmpegkit1 = 4.0;
       let productw: Map<any, any> = new Map([[String.fromCharCode(121,95,55,54,95,120,105,112,104,108,97,99,105,110,103,0),true ], [String.fromCharCode(99,111,110,116,97,105,110,105,110,103,95,105,95,52,49,0),true ], [String.fromCharCode(100,95,55,53,95,100,101,98,97,110,100,0),true ]]);
       let filedV: Map<any, any> = new Map([[String.fromCharCode(116,97,105,108,95,101,95,53,48,0),328], [String.fromCharCode(115,116,114,116,111,100,95,100,95,54,48,0),295]]);
         zhengpian3.set(`${productw.size}`, productw.size);
      let whistleorangeP = libffmpegkit1 >= 7866194.0;
      do {
          let rootx = String.fromCharCode(115,104,117,102,102,108,101,112,108,97,110,101,115,95,54,95,52,51,0);
          let reactnavigationT = String.fromCharCode(113,117,97,110,116,95,98,95,51,53,0);
          let trophyZ = 0.0;
          let catalogH = String.fromCharCode(122,95,50,56,95,100,101,99,111,109,112,97,110,100,0);
         libffmpegkit1 /= Math.max(2, parseFloat(`${zhengpian3.size + 2}`));
         rootx = `${parseInt(`${trophyZ}`)}`;
         reactnavigationT += `${(String.fromCharCode(48,0) == reactnavigationT ? parseInt(`${trophyZ}`) : reactnavigationT.length)}`;
         catalogH = "3";
         if (whistleorangeP) {
            break;
         }
      } while (whistleorangeP && (!Array.from(filedV.values()).includes(libffmpegkit1)));
         productw.set(`${iconrefreshP}`, (iconrefreshP == String.fromCharCode(50,0) ? iconrefreshP.length : zhengpian3.size));
      if (1.85 < (parseFloat(`${productw.size}`) + libffmpegkit1) && 3.52 < (libffmpegkit1 + 1.85)) {
         productw = new Map([[`${productw.size}`, iconrefreshP.length]]);
      }
          let completet = String.fromCharCode(116,104,101,105,114,95,113,95,49,49,0);
         libffmpegkit1 *= parseFloat(`${3}`);
         completet = `${(completet == String.fromCharCode(103,0) ? completet.length : completet.length)}`;
         filedV = new Map([[`${filedV.size}`, 2]]);
       let utilsm = String.fromCharCode(122,95,55,51,95,98,108,97,99,107,108,105,115,116,0);
       let iconsubssuccess7 = String.fromCharCode(106,95,54,54,95,115,117,98,100,97,116,97,0);
       let turne = String.fromCharCode(103,95,52,56,95,102,111,114,109,97,116,117,0);
      chinasamei *= iconrefreshP.length / 1;
   }
       let foregroundn: Map<any, any> = new Map([[String.fromCharCode(103,95,50,48,95,117,110,112,114,101,109,117,108,116,105,112,108,121,0),309], [String.fromCharCode(98,95,54,53,95,101,120,112,114,101,115,115,105,111,110,0),999]]);
       let usernameD: Array<any> = [String.fromCharCode(110,95,53,53,95,118,105,111,108,101,110,99,101,0), String.fromCharCode(106,95,50,49,95,98,105,116,115,113,112,0), String.fromCharCode(101,95,57,56,95,114,101,112,101,97,116,101,114,0)];
          let popupk = 0.0;
          let libavformaty = String.fromCharCode(117,95,49,95,105,110,102,108,105,103,104,116,0);
         usernameD.push(3);
         popupk *= parseFloat(`${parseInt(`${popupk}`)}`);
         libavformaty += `${parseInt(`${popupk}`) + libavformaty.length}`;
         usernameD = [2 ^ foregroundn.size];
       let combinedu = false;
       let shrinkW = true;
      while (!combinedu && 4 > (1 % (Math.max(7, usernameD.length)))) {
          let halffieldimagep = String.fromCharCode(100,108,116,97,95,110,95,57,53,0);
          let arrowright9 = 1.0;
          let mapbufferE = 0.0;
          let sharemodalF = String.fromCharCode(107,95,53,52,95,101,112,111,99,104,0);
         combinedu = foregroundn.size > 93;
         halffieldimagep = `${parseInt(`${arrowright9}`)}`;
         mapbufferE += parseFloat(`${2}`);
         sharemodalF = `${2 + parseInt(`${arrowright9}`)}`;
         break;
      }
      let point2 = combinedu ? !combinedu : combinedu;
      do {
         combinedu = (!combinedu ? !shrinkW : combinedu);
         if (point2) {
            break;
         }
      } while (point2 && (1 > (2 >> (Math.min(2, Math.abs(foregroundn.size)))) && 2 > foregroundn.size));
       let anythinkR: Array<any> = [600, 94];
       let defaultfootballbgS: Array<any> = [31, 229];
      mapbufferz = `${iconmorev.length}`;
       let corev = String.fromCharCode(103,117,116,116,101,114,95,104,95,55,0);
       let shooth = String.fromCharCode(97,108,98,117,109,115,95,113,95,51,55,0);
          let bottomo = String.fromCharCode(115,95,55,48,95,108,111,103,103,105,110,103,0);
          let reactnativejsC = String.fromCharCode(116,95,50,54,95,117,110,112,97,99,107,101,100,0);
          let tempj = false;
         corev += "1";
         bottomo = `${reactnativejsC.length}`;
         reactnativejsC = `${bottomo.length >> (Math.min(Math.abs(2), 2))}`;
         tempj = (reactnativejsC.length / (Math.max(3, bottomo.length))) > 22;
      for (let c = 0; c < 3; c++) {
          let backicon5 = 5.0;
          let rewindc = String.fromCharCode(115,97,108,116,108,101,110,95,119,95,57,57,0);
          let rewardvideoU = String.fromCharCode(108,95,49,49,95,116,98,108,101,110,100,0);
         shooth = `${(corev == String.fromCharCode(79,0) ? corev.length : rewardvideoU.length)}`;
         backicon5 -= rewindc.length;
         rewindc += `${rewindc.length ^ parseInt(`${backicon5}`)}`;
         rewardvideoU = "1";
      }
      while (shooth.length >= 4) {
          let assistp = String.fromCharCode(99,111,112,105,101,115,95,105,95,53,52,0);
          let bdxadsdkr = String.fromCharCode(117,95,50,56,95,98,117,102,102,101,114,101,100,0);
          let canvasv: Map<any, any> = new Map([[String.fromCharCode(112,114,111,109,105,115,101,115,95,54,95,51,49,0),true ], [String.fromCharCode(114,95,53,57,95,108,105,110,103,101,114,0),true ], [String.fromCharCode(102,108,116,112,95,101,95,51,56,0),true ]]);
          let commonU = String.fromCharCode(115,95,57,53,95,105,110,116,101,114,110,97,116,105,111,110,97,108,0);
         corev += "2";
         assistp = `${(bdxadsdkr == String.fromCharCode(86,0) ? commonU.length : bdxadsdkr.length)}`;
         canvasv = new Map([[bdxadsdkr, commonU.length]]);
         break;
      }
          let holder2 = 1;
         corev = "3";
         holder2 >>= Math.min(Math.abs(holder2 & 2), 4);
         shooth += `${(String.fromCharCode(97,0) == corev ? shooth.length : corev.length)}`;
      for (let s = 0; s < 3; s++) {
         corev = `${shooth.length * corev.length}`;
      }
      yellowanimationlivec *= parseFloat(`${iconmorev.length | 2}`);
   let buildz = String.fromCharCode(105,107,53,115,56,120,120,106,0) == iconmorev;
   do {
      iconmorev = `${parseInt(`${yellowanimationlivec}`) % (Math.max(3, 8))}`;
      if (buildz) {
         break;
      }
   } while ((mapbufferz != String.fromCharCode(81,0)) && buildz);
       let malaysia6: Array<any> = [985, 351, 309];
       let diceb = 3.0;
       let bannerE: Map<any, any> = new Map([[String.fromCharCode(119,111,114,100,95,113,95,53,50,0),true ], [String.fromCharCode(111,117,116,112,117,116,95,112,95,56,48,0),false ]]);
         bannerE = new Map([[`${bannerE.size}`, parseInt(`${diceb}`) ^ bannerE.size]]);
      for (let z = 0; z < 2; z++) {
         diceb += malaysia6.length % (Math.max(1, 3));
      }
          let selectionT = String.fromCharCode(109,95,52,52,95,115,117,110,118,101,114,0);
         bannerE.set(`${malaysia6.length}`, 2);
         selectionT = `${2 >> (Math.min(1, selectionT.length))}`;
         diceb -= malaysia6.length >> (Math.min(Math.abs(2), 3));
       let toponO = 3.0;
         malaysia6.push(2);
          let predictionarrowl: Map<any, any> = new Map([[String.fromCharCode(99,104,111,115,101,95,106,95,49,51,0),685], [String.fromCharCode(100,95,56,54,95,112,117,108,115,101,97,117,100,105,111,115,121,109,98,111,108,116,97,98,108,101,0),929]]);
          let refresh6 = String.fromCharCode(119,95,49,50,95,99,111,110,115,116,114,97,105,110,116,0);
          let bootq = String.fromCharCode(116,114,97,112,95,113,95,49,54,0);
         diceb += (String.fromCharCode(68,0) == bootq ? bootq.length : predictionarrowl.size);
         predictionarrowl.set(refresh6, refresh6.length * refresh6.length);
         diceb *= bannerE.size % (Math.max(1, 2));
         malaysia6.push(3 - parseInt(`${diceb}`));
      time_1o = `${mapbufferz.length / (Math.max(6, disconnectedlogoz.length))}`;
       let switch_04x: Array<any> = [496, 686];
         switch_04x = [2 | switch_04x.length];
       let plashv = 2.0;
          let greyW = 5.0;
          let eighteenf = 5;
          let shootyesgoalp = 0;
         switch_04x = [shootyesgoalp % (Math.max(4, parseInt(`${greyW}`)))];
         greyW *= parseFloat(`${1}`);
         eighteenf |= 2;
      iconmorev += "1";

    return {
      display: isFilterCollapse.value ? 'none' : 'flex',
    };
  }, []);

  const contentSummaryStyle = useAnimatedStyle(() => {
       let renew5 = 0;
    let bottomb = String.fromCharCode(118,95,49,52,95,117,110,105,115,119,97,112,0);
    let spinnerv = String.fromCharCode(114,101,97,112,101,114,95,116,95,54,54,0);
    let expandW = 1.0;
    let yellowanimationliveW = true;
    let with_oI = 2.0;
    let minivodI = 3.0;
    let basketballc = 5;
    let register_kkc: Map<any, any> = new Map([[String.fromCharCode(97,100,116,115,95,53,95,57,0),185], [String.fromCharCode(108,105,98,115,114,116,95,121,95,54,50,0),545], [String.fromCharCode(100,95,53,50,95,115,105,109,112,108,101,116,105,109,101,111,117,116,0),961]]);
    let liveendmodallogo6 = false;
   while (1.93 == (4.10 / (Math.max(8, minivodI))) || 4.33 == (with_oI * 4.10)) {
      minivodI -= parseFloat(`${parseInt(`${expandW}`) - renew5}`);
      break;
   }
       let tickedp = String.fromCharCode(117,95,56,53,95,99,111,110,110,101,99,116,120,0);
      let hoverw = tickedp == String.fromCharCode(121,105,106,51,116,111,95,0);
      do {
         tickedp += `${(String.fromCharCode(101,0) == tickedp ? tickedp.length : tickedp.length)}`;
         if (hoverw) {
            break;
         }
      } while ((tickedp != String.fromCharCode(107,0)) && hoverw);
      let usernamei = tickedp == String.fromCharCode(53,110,104,48,0);
      do {
          let nextY = 2.0;
          let downloadF: Map<any, any> = new Map([[String.fromCharCode(108,95,52,95,101,110,99,111,100,101,114,0),174], [String.fromCharCode(115,117,109,109,101,100,95,113,95,56,57,0),638]]);
          let stringy = 3.0;
          let spinnerU = true;
          let hongkongP = String.fromCharCode(118,112,97,116,104,109,101,115,117,114,101,95,50,95,54,50,0);
         tickedp += `${downloadF.size % (Math.max(1, 5))}`;
         nextY *= parseFloat(`${3 >> (Math.min(Math.abs(parseInt(`${nextY}`)), 1))}`);
         downloadF.set(`${nextY}`, 2);
         stringy /= Math.max(1, parseInt(`${stringy}`));
         spinnerU = stringy >= nextY;
         hongkongP += `${hongkongP.length}`;
         if (usernamei) {
            break;
         }
      } while (usernamei && (tickedp == tickedp));
      for (let b = 0; b < 2; b++) {
         tickedp += "2";
      }
      with_oI *= parseFloat(`${renew5 >> (Math.min(Math.abs(1), 2))}`);
      basketballc -= 2;
      renew5 <<= Math.min(1, Math.abs(((yellowanimationliveW ? 5 : 3) ^ parseInt(`${with_oI}`))));
   while (4 == (basketballc | 2) && 3 == (basketballc + 2)) {
       let championi = true;
       let minimizeJ: Array<any> = [String.fromCharCode(100,95,54,49,95,109,117,108,116,105,112,108,121,0), String.fromCharCode(99,117,98,101,95,51,95,56,53,0), String.fromCharCode(112,95,57,56,95,112,105,110,115,0)];
       let whistle8: Map<any, any> = new Map([[String.fromCharCode(103,95,50,56,95,116,105,112,0),String.fromCharCode(103,95,56,49,95,112,114,101,100,120,108,0)], [String.fromCharCode(99,119,114,115,105,95,120,95,50,50,0),String.fromCharCode(97,114,103,98,105,95,56,95,57,55,0)]]);
       let iconnewsshare5 = String.fromCharCode(110,95,51,52,95,116,97,115,107,0);
      while (iconnewsshare5.length <= 2) {
          let iconedit9 = String.fromCharCode(108,97,115,116,95,105,95,50,48,0);
          let rewardg = 0;
          let interstitialz = String.fromCharCode(109,115,101,120,95,110,95,56,48,0);
          let routerZ = String.fromCharCode(98,95,55,52,95,115,105,109,117,108,97,116,101,0);
          let mbsplashz = 1.0;
         whistle8.set(interstitialz, minimizeJ.length - 2);
         iconedit9 += `${parseInt(`${mbsplashz}`) % (Math.max(1, 10))}`;
         rewardg /= Math.max(5, routerZ.length);
         interstitialz += `${(String.fromCharCode(83,0) == iconedit9 ? iconedit9.length : parseInt(`${mbsplashz}`))}`;
         routerZ += "2";
         break;
      }
      for (let i = 0; i < 1; i++) {
         championi = whistle8.size < 64;
      }
      let holderx = championi ? !championi : championi;
      do {
         championi = !championi;
         if (holderx) {
            break;
         }
      } while (holderx && (1 < (3 * whistle8.size) || championi));
         iconnewsshare5 = `${(iconnewsshare5 == String.fromCharCode(104,0) ? (championi ? 5 : 1) : iconnewsshare5.length)}`;
         championi = minimizeJ.length == 11;
      while (!championi) {
         championi = iconnewsshare5.length <= minimizeJ.length;
         break;
      }
          let reducer4: Array<any> = [String.fromCharCode(121,117,118,112,116,111,121,117,121,95,98,95,54,50,0), String.fromCharCode(103,95,49,52,95,111,119,110,101,114,115,104,105,112,0)];
          let defaultroombgB = 4.0;
         whistle8.set(`${championi}`, 3 * parseInt(`${defaultroombgB}`));
         reducer4.push(reducer4.length);
         defaultroombgB *= 1 / (Math.max(8, reducer4.length));
      if (2 == (3 | whistle8.size)) {
          let large0 = String.fromCharCode(100,95,55,49,95,117,118,114,100,0);
          let confirmationc = 2.0;
         championi = large0 == String.fromCharCode(121,0);
         large0 = `${parseInt(`${confirmationc}`)}`;
      }
         minimizeJ.push(((championi ? 2 : 1) % (Math.max(minimizeJ.length, 5))));
      for (let t = 0; t < 2; t++) {
          let rewindZ = String.fromCharCode(99,111,115,112,105,95,48,95,54,49,0);
          let iconwechat3 = 5.0;
          let shootW = 1.0;
         iconnewsshare5 += `${(String.fromCharCode(104,0) == iconnewsshare5 ? parseInt(`${shootW}`) : iconnewsshare5.length)}`;
         rewindZ = "1";
         iconwechat3 /= Math.max(parseFloat(`${rewindZ.length}`), 5);
         shootW /= Math.max((rewindZ == String.fromCharCode(103,0) ? rewindZ.length : parseInt(`${iconwechat3}`)), 3);
      }
      for (let f = 0; f < 3; f++) {
         whistle8.set(`${championi}`, 2);
      }
      if (championi) {
         minimizeJ.push(3 >> (Math.min(3, minimizeJ.length)));
      }
      expandW -= 2;
      break;
   }
       let reviewC = 0.0;
       let phonef = 3;
       let ballE = 3.0;
      for (let d = 0; d < 3; d++) {
          let scheduled = 0.0;
          let liveendmodallogox = 1.0;
          let questS = true;
          let servicex = false;
          let sportJ: Map<any, any> = new Map([[String.fromCharCode(109,97,120,105,109,117,109,95,118,95,54,52,0),false ], [String.fromCharCode(107,95,49,95,101,120,101,99,117,116,101,0),true ], [String.fromCharCode(98,108,105,110,100,101,100,95,108,95,51,0),true ]]);
         phonef ^= phonef >> (Math.min(2, Math.abs(3)));
         scheduled -= sportJ.size + parseInt(`${liveendmodallogox}`);
         liveendmodallogox -= parseFloat(`${3 >> (Math.min(Math.abs(parseInt(`${liveendmodallogox}`)), 3))}`);
         questS = scheduled <= 28.70;
         servicex = (46 < ((!questS ? 46 : sportJ.size) * sportJ.size));
      }
         phonef |= phonef;
      for (let m = 0; m < 1; m++) {
          let dependencyB = 5.0;
          let giftbuttonO = String.fromCharCode(104,97,108,100,99,108,117,116,95,120,95,50,54,0);
          let mbbannerN: Array<any> = [String.fromCharCode(102,95,49,55,95,100,116,108,115,0), String.fromCharCode(109,97,107,101,116,97,114,98,97,108,108,95,112,95,52,50,0)];
          let catagoryu = String.fromCharCode(111,95,56,52,95,116,101,120,116,117,114,101,115,0);
          let privilege1 = String.fromCharCode(113,95,55,54,95,98,121,116,101,105,110,0);
         phonef += parseInt(`${reviewC}`) >> (Math.min(Math.abs(3), 5));
         dependencyB *= parseFloat(`${2}`);
         giftbuttonO = `${catagoryu.length * privilege1.length}`;
         mbbannerN.push(parseInt(`${dependencyB}`));
         catagoryu += `${(privilege1 == String.fromCharCode(101,0) ? privilege1.length : parseInt(`${dependencyB}`))}`;
      }
         phonef %= Math.max(3 + parseInt(`${reviewC}`), 1);
      if (3.93 < (ballE / (Math.max(4.36, 3))) && (ballE / (Math.max(4.36, 8))) < 3.24) {
         phonef %= Math.max(3, 1);
      }
      while (1 <= (parseInt(`${reviewC}`) + phonef) || 5.56 <= (3.26 + reviewC)) {
         phonef *= phonef;
         break;
      }
      let description_6l = phonef <= 9493105;
      do {
          let sportv = String.fromCharCode(100,95,50,48,95,112,108,111,116,116,101,114,0);
          let disconnectedlogoo = 1;
         phonef -= 2 & parseInt(`${ballE}`);
         sportv = "2";
         disconnectedlogoo &= 2;
         if (description_6l) {
            break;
         }
      } while (((parseFloat(`${phonef}`) * reviewC) == 4.60 && 1.75 == (4.60 * reviewC)) && description_6l);
          let applicationw = 2.0;
          let graphu = false;
          let subtexth: Array<any> = [452, 0, 734];
         reviewC += parseFloat(`${3 / (Math.max(2, subtexth.length))}`);
         applicationw *= (parseInt(`${applicationw}`) | (graphu ? 5 : 5));
         graphu = applicationw >= 52.85;
         subtexth = [((graphu ? 3 : 4) & parseInt(`${applicationw}`))];
          let moduleZ = false;
         reviewC /= Math.max(2, (parseFloat(`${(moduleZ ? 4 : 3) & parseInt(`${ballE}`)}`)));
      renew5 *= spinnerv.length;
       let score5 = String.fromCharCode(97,108,112,104,97,98,101,116,95,106,95,48,0);
         score5 += `${score5.length}`;
       let helperT: Map<any, any> = new Map([[String.fromCharCode(118,111,116,101,95,49,95,49,49,0),813], [String.fromCharCode(115,116,97,116,101,102,117,108,95,101,95,56,53,0),224]]);
       let animationV = String.fromCharCode(115,95,52,48,95,108,111,99,107,115,99,114,101,101,110,0);
      spinnerv += `${bottomb.length}`;
       let disconnectedlogo1: Array<any> = [758, 688];
       let completeY = true;
       let annerG = String.fromCharCode(115,95,53,48,95,110,111,110,110,117,108,108,115,99,104,101,109,101,115,0);
         annerG += "2";
      let downarrowv = 7433026 <= disconnectedlogo1.length;
      do {
         disconnectedlogo1 = [1];
         if (downarrowv) {
            break;
         }
      } while (downarrowv && (2 > (disconnectedlogo1.length + 3) && 3 > (3 + annerG.length)));
          let textlayoutmanagers: Map<any, any> = new Map([[String.fromCharCode(110,95,51,54,95,105,110,116,101,114,115,101,99,116,105,111,110,0),String.fromCharCode(106,95,52,50,95,117,110,119,114,97,112,112,101,100,0)], [String.fromCharCode(113,95,57,55,95,97,112,101,116,97,103,0),String.fromCharCode(100,95,53,56,95,99,111,110,118,101,114,116,0)]]);
          let combined4: Array<any> = [720, 827];
          let matchactivey = String.fromCharCode(113,95,53,51,95,114,101,117,112,108,111,97,100,101,100,0);
         disconnectedlogo1.push(2);
         textlayoutmanagers = new Map([[`${textlayoutmanagers.size}`, 1 | combined4.length]]);
         combined4 = [textlayoutmanagers.size];
         matchactivey += `${matchactivey.length << (Math.min(4, combined4.length))}`;
      if ((disconnectedlogo1.length << (Math.min(annerG.length, 5))) <= 4) {
          let popupK = String.fromCharCode(118,95,54,51,95,98,97,99,107,116,114,97,99,101,0);
         disconnectedlogo1.push((annerG == String.fromCharCode(82,0) ? (completeY ? 1 : 4) : annerG.length));
         popupK = `${2 - popupK.length}`;
      }
      if (5 > annerG.length) {
         annerG += "2";
      }
      if (!annerG.includes(`${disconnectedlogo1.length}`)) {
          let other0 = 4.0;
         annerG = `${(1 & (completeY ? 5 : 2))}`;
         other0 /= Math.max(5, parseFloat(`${parseInt(`${other0}`) ^ 2}`));
      }
         annerG = `${1 + disconnectedlogo1.length}`;
         completeY = annerG.includes(`${completeY}`);
         completeY = (17 <= ((!completeY ? 17 : disconnectedlogo1.length) & disconnectedlogo1.length));
      bottomb = `${spinnerv.length}`;

    return {
      display: isFilterCollapse.value ? 'flex' : 'none',
      paddingBottom: 1,
    };
  }, []);

  const reset = () => {
       let containero = false;
    let libreactperfloggerjnil = true;
    let componentregistryx = false;
    let ajax_ = String.fromCharCode(114,95,56,52,95,102,105,110,103,101,114,115,0);
    let tumbnailO = 5;
    let spinnery = 2.0;
    let popup0 = false;
    let homeF = false;
    let rootw = String.fromCharCode(102,101,110,99,95,51,95,49,49,0);
    let librrcM = 0.0;
    let type_uA = String.fromCharCode(119,95,56,49,95,115,119,97,112,112,97,98,108,101,0);
    let anythinkm = String.fromCharCode(115,116,111,119,95,107,95,54,49,0);
    let mbsplashp = String.fromCharCode(108,95,51,52,95,100,101,101,112,0);
    let leakcheckerH: Array<any> = [468, 777];
    let bottomr = String.fromCharCode(110,115,112,97,99,101,115,95,115,95,53,0);
    let subtext6 = String.fromCharCode(97,95,50,49,95,109,117,108,116,105,112,108,101,120,101,100,0);
      ajax_ += `${parseInt(`${librrcM}`) | 1}`;
      libreactperfloggerjnil = popup0 && anythinkm.length == 15;
       let package_mlG = String.fromCharCode(120,95,49,49,95,104,109,109,116,0);
      for (let t = 0; t < 3; t++) {
         package_mlG += `${1 & package_mlG.length}`;
      }
          let gift8 = String.fromCharCode(101,122,111,115,95,98,95,57,48,0);
          let defaultroombgd = 1;
          let holderL = 1.0;
         package_mlG = `${gift8.length}`;
         gift8 += `${3 | parseInt(`${holderL}`)}`;
         defaultroombgd ^= parseInt(`${holderL}`) | 1;
          let nextF = 0.0;
         package_mlG = `${2 ^ package_mlG.length}`;
         nextF += 1 >> (Math.min(Math.abs(parseInt(`${nextF}`)), 3));
      containero = !ajax_.includes(`${containero}`);
   for (let e = 0; e < 1; e++) {
      ajax_ = `${(mbsplashp == String.fromCharCode(122,0) ? (popup0 ? 5 : 4) : mbsplashp.length)}`;
   }
   while (!libreactperfloggerjnil) {
      libreactperfloggerjnil = !homeF;
      break;
   }
   if (3 <= (ajax_.length & 3) && 3 <= (ajax_.length & tumbnailO)) {
      ajax_ = `${((componentregistryx ? 1 : 4) << (Math.min(type_uA.length, 4)))}`;
   }
       let scoreF = String.fromCharCode(98,95,50,56,95,112,97,103,101,108,105,115,116,0);
         scoreF = `${scoreF.length}`;
      while (scoreF.length >= scoreF.length) {
         scoreF += `${scoreF.length ^ 3}`;
         break;
      }
          let v_hashn = 5.0;
          let humidityG = false;
          let logouser4 = 3;
         scoreF += "2 ^ logouser4";
         v_hashn /= Math.max(4, parseFloat(`${1 % (Math.max(parseInt(`${v_hashn}`), 10))}`));
         humidityG = !humidityG && v_hashn >= 68.1;
         logouser4 >>= Math.min(3, Math.abs(((humidityG ? 3 : 2) * parseInt(`${v_hashn}`))));
      tumbnailO += 2;
      containero = String.fromCharCode(68,0) == mbsplashp;
       let shrinkw = String.fromCharCode(103,95,56,53,95,119,109,118,100,115,112,0);
       let libswresample3 = 2.0;
      while (5 <= (shrinkw.length + parseInt(`${libswresample3}`))) {
         libswresample3 -= (String.fromCharCode(86,0) == shrinkw ? shrinkw.length : parseInt(`${libswresample3}`));
         break;
      }
      if ((shrinkw.length % (Math.max(3, 10))) <= 1 || (parseInt(`${libswresample3}`) / (Math.max(9, shrinkw.length))) <= 3) {
         libswresample3 /= Math.max(3, 4);
      }
      while (4.71 < libswresample3) {
         libswresample3 *= shrinkw.length | parseInt(`${libswresample3}`);
         break;
      }
      for (let w = 0; w < 3; w++) {
         libswresample3 += (shrinkw == String.fromCharCode(68,0) ? shrinkw.length : parseInt(`${libswresample3}`));
      }
         shrinkw += `${parseInt(`${libswresample3}`)}`;
         libswresample3 -= (shrinkw == String.fromCharCode(103,0) ? shrinkw.length : parseInt(`${libswresample3}`));
      containero = popup0 || !componentregistryx;
      tumbnailO /= Math.max(1 / (Math.max(2, parseInt(`${spinnery}`))), 1);

    queryClient.removeQueries(['filteredVods']);

      rootw = `${((componentregistryx ? 4 : 4) >> (Math.min(Math.abs(parseInt(`${librrcM}`)), 3)))}`;
   if (4 < anythinkm.length) {
      anythinkm += `${2 | ajax_.length}`;
   }
   for (let l = 0; l < 2; l++) {
      mbsplashp += `${((libreactperfloggerjnil ? 4 : 1))}`;
   }
   for (let q = 0; q < 3; q++) {
       let update_rx: Array<any> = [String.fromCharCode(115,97,118,101,95,122,95,52,53,0), String.fromCharCode(103,95,52,54,0), String.fromCharCode(99,95,57,51,95,115,117,98,112,111,105,110,116,101,114,0)];
       let themen = String.fromCharCode(104,95,57,49,95,108,111,99,97,108,0);
          let anythinkB = String.fromCharCode(99,111,108,111,99,97,116,101,100,95,49,95,51,48,0);
          let thailandE = String.fromCharCode(114,101,97,100,109,101,95,113,95,50,56,0);
          let chart_: Map<any, any> = new Map([[String.fromCharCode(115,116,114,116,97,103,95,120,95,50,55,0),32], [String.fromCharCode(113,95,48,95,99,117,98,105,99,0),681]]);
         themen += `${update_rx.length}`;
         anythinkB = "2";
         thailandE = `${chart_.size}`;
         chart_ = new Map([[anythinkB, anythinkB.length - thailandE.length]]);
         themen += `${3 >> (Math.min(2, update_rx.length))}`;
       let rendery = String.fromCharCode(98,95,56,55,95,117,110,100,101,114,108,105,110,101,0);
          let detailsw = 5.0;
          let diceP = 1.0;
         themen = `${parseInt(`${detailsw}`)}`;
         detailsw *= parseInt(`${diceP}`) | 3;
         diceP -= parseFloat(`${3}`);
          let predictionbannersharede = 0.0;
          let navigationY = 0.0;
         update_rx = [2];
         predictionbannersharede /= Math.max(parseInt(`${predictionbannersharede}`) << (Math.min(Math.abs(parseInt(`${navigationY}`)), 3)), 3);
         navigationY -= parseInt(`${predictionbannersharede}`);
         rendery = "3";
      popup0 = !containero;
   }
       let securityq = String.fromCharCode(102,95,49,95,114,101,108,97,121,0);
         securityq = `${securityq.length / 2}`;
      let profileactiveU = String.fromCharCode(57,102,120,122,55,56,118,106,113,119,0) == securityq;
      do {
         securityq = `${1 | securityq.length}`;
         if (profileactiveU) {
            break;
         }
      } while ((securityq == securityq) && profileactiveU);
          let modelg = String.fromCharCode(116,95,52,57,95,97,117,116,104,101,110,116,105,99,97,116,101,0);
          let predictionactivei = String.fromCharCode(115,117,109,115,113,95,116,95,51,50,0);
         securityq += `${(String.fromCharCode(83,0) == predictionactivei ? securityq.length : predictionactivei.length)}`;
         modelg = "3";
      popup0 = !containero;
      type_uA = `${(2 * (homeF ? 2 : 3))}`;
   if (ajax_.length >= 5 || anythinkm.length >= 5) {
      ajax_ = `${anythinkm.length}`;
   }
      libreactperfloggerjnil = mbsplashp.startsWith(`${librrcM}`);
   while (mbsplashp.length <= 4) {
      componentregistryx = 71 <= mbsplashp.length;
      break;
   }
   while (mbsplashp == String.fromCharCode(78,0)) {
       let greytickF = String.fromCharCode(116,97,115,107,115,95,114,95,55,48,0);
       let whitetickO: Array<any> = [652, 582, 441];
       let detailsg = 1.0;
      if (!greytickF.endsWith(`${whitetickO.length}`)) {
         whitetickO.push((String.fromCharCode(122,0) == greytickF ? greytickF.length : parseInt(`${detailsg}`)));
      }
         detailsg -= greytickF.length;
         greytickF += `${parseInt(`${detailsg}`)}`;
         whitetickO.push(parseInt(`${detailsg}`));
         detailsg /= Math.max(1, 3);
      let eventsplashv = whitetickO.length <= 8114193;
      do {
         whitetickO = [greytickF.length];
         if (eventsplashv) {
            break;
         }
      } while (eventsplashv && (!greytickF.startsWith(`${whitetickO.length}`)));
      while (1.7 >= (detailsg - greytickF.length) && 5 >= (greytickF.length - parseInt(`${detailsg}`))) {
         detailsg /= Math.max(1, greytickF.length);
         break;
      }
      for (let b = 0; b < 1; b++) {
         greytickF = `${greytickF.length}`;
      }
         detailsg /= Math.max(1, 5);
      type_uA = `${((libreactperfloggerjnil ? 2 : 2) >> (Math.min(ajax_.length, 5)))}`;
      break;
   }
    setTopicClass(sameTextAndValueObj('全部类型'));

   while (!homeF) {
      homeF = !mbsplashp.endsWith(`${componentregistryx}`);
      break;
   }
   while ((1.25 - spinnery) >= 5.9) {
      spinnery -= anythinkm.length * ajax_.length;
      break;
   }
      homeF = !componentregistryx;
      homeF = mbsplashp.length <= 92;
   if (1 > (mbsplashp.length + tumbnailO)) {
      mbsplashp = `${((popup0 ? 3 : 3))}`;
   }
      containero = 99 < anythinkm.length;
       let arrowrightL: Array<any> = [393, 887, 421];
       let hookH = String.fromCharCode(116,95,55,56,95,99,111,110,100,105,116,105,111,110,97,108,0);
       let gmailw = 2.0;
      let giftbuttonf = 6734468 >= hookH.length;
      do {
          let latn2 = String.fromCharCode(109,100,99,118,95,119,95,51,49,0);
         hookH = `${hookH.length ^ arrowrightL.length}`;
         latn2 = "3";
         if (giftbuttonf) {
            break;
         }
      } while (giftbuttonf && (2 == arrowrightL.length));
      for (let r = 0; r < 1; r++) {
          let librrcx: Array<any> = [614, 355, 696];
          let fastJ = 4.0;
          let selectedq = 2.0;
         hookH = `${3 + parseInt(`${selectedq}`)}`;
         librrcx = [parseInt(`${fastJ}`) & 2];
         fastJ -= parseFloat(`${librrcx.length}`);
         selectedq *= 3 & parseInt(`${fastJ}`);
      }
          let forwardC = false;
         gmailw /= Math.max(2, parseFloat(`${1}`));
         forwardC = (!forwardC ? forwardC : !forwardC);
       let videovar4 = String.fromCharCode(104,101,97,114,116,98,101,97,116,95,120,95,50,51,0);
       let penaltygoalx = false;
      for (let u = 0; u < 2; u++) {
          let j_lockS = String.fromCharCode(105,109,112,114,101,115,115,105,111,110,115,95,112,95,56,49,0);
          let field6 = String.fromCharCode(100,101,112,114,101,99,97,116,101,100,95,50,95,55,53,0);
          let bridgex: Map<any, any> = new Map([[String.fromCharCode(100,95,55,50,95,99,111,110,118,115,97,109,112,0),128], [String.fromCharCode(103,95,50,51,95,98,105,110,107,98,0),621]]);
          let iconsaveimageL = String.fromCharCode(100,115,116,95,104,95,56,48,0);
          let successb = 4;
         videovar4 += `${2 & field6.length}`;
         j_lockS += `${iconsaveimageL.length}`;
         field6 = `${iconsaveimageL.length}`;
         bridgex = new Map([[j_lockS, 1]]);
         successb -= bridgex.size << (Math.min(Math.abs(2), 5));
      }
       let reactnativejsC = 5;
         gmailw += (parseFloat(`${String.fromCharCode(109,0) == hookH ? hookH.length : (penaltygoalx ? 4 : 2)}`));
      let defaultplayerimgR = 6979065 >= videovar4.length;
      do {
          let downloadingD = String.fromCharCode(101,95,55,95,108,111,103,103,101,114,0);
         videovar4 += `${((penaltygoalx ? 2 : 5) % (Math.max(videovar4.length, 10)))}`;
         downloadingD = "3";
         if (defaultplayerimgR) {
            break;
         }
      } while ((4 > (reactnativejsC - 4)) && defaultplayerimgR);
      mbsplashp = `${ajax_.length + hookH.length}`;
   for (let q = 0; q < 1; q++) {
      rootw = `${((homeF ? 3 : 2))}`;
   }
   let iconfeedback4 = type_uA == String.fromCharCode(56,54,122,53,102,114,97,99,48,117,0);
   do {
      type_uA = `${type_uA.length}`;
      if (iconfeedback4) {
         break;
      }
   } while ((type_uA.length > 4) && iconfeedback4);
       let controls6 = String.fromCharCode(116,95,53,53,95,108,111,115,116,0);
       let privatechatbgD = 2.0;
       let previewg = String.fromCharCode(98,108,97,99,107,95,101,95,51,54,0);
         previewg = `${3 * parseInt(`${privatechatbgD}`)}`;
      while ((3 >> (Math.min(1, controls6.length))) > 5 && 1 > (controls6.length << (Math.min(Math.abs(3), 2)))) {
          let loadingT = String.fromCharCode(114,101,115,116,114,105,99,116,95,109,95,52,57,0);
         controls6 = `${(String.fromCharCode(52,0) == previewg ? parseInt(`${privatechatbgD}`) : previewg.length)}`;
         loadingT += `${loadingT.length ^ 3}`;
         break;
      }
         privatechatbgD += parseFloat(`${previewg.length % 1}`);
         previewg += `${previewg.length}`;
      while (2 <= (previewg.length >> (Math.min(Math.abs(3), 4)))) {
          let confirmationE = false;
          let cancelx: Map<any, any> = new Map([[String.fromCharCode(110,97,116,105,111,110,97,108,95,101,95,56,55,0),852], [String.fromCharCode(118,95,55,48,95,114,105,118,97,116,101,0),445]]);
          let iconnointernetA = 1.0;
          let collectionU = String.fromCharCode(105,110,116,101,114,112,111,108,97,116,105,111,110,95,53,95,53,56,0);
          let submit9 = 0.0;
         privatechatbgD += parseFloat(`${cancelx.size}`);
         confirmationE = 27.12 == submit9 || 27.12 == iconnointernetA;
         cancelx.set(`${submit9}`, (collectionU == String.fromCharCode(112,0) ? collectionU.length : parseInt(`${submit9}`)));
         iconnointernetA += collectionU.length;
         break;
      }
         privatechatbgD *= (parseFloat(`${previewg == String.fromCharCode(74,0) ? previewg.length : parseInt(`${privatechatbgD}`)}`));
      for (let j = 0; j < 3; j++) {
         privatechatbgD *= parseFloat(`${controls6.length % 3}`);
      }
      while (1 <= (parseInt(`${privatechatbgD}`) - previewg.length) && (previewg.length - parseInt(`${privatechatbgD}`)) <= 1) {
          let whiteN: Array<any> = [821, 22];
          let libimagepipelinen = 0.0;
          let privatechatbgv = 1;
         previewg = "1";
         whiteN.push(parseInt(`${libimagepipelinen}`) & privatechatbgv);
         libimagepipelinen += 1 & parseInt(`${libimagepipelinen}`);
         privatechatbgv ^= privatechatbgv;
         break;
      }
       let preview0 = true;
      popup0 = controls6.length >= 32 || homeF;
    setArea(sameTextAndValueObj('全部地区'));

      type_uA = `${parseInt(`${spinnery}`) & 3}`;
      ajax_ = `${((popup0 ? 2 : 1))}`;
      spinnery += ((libreactperfloggerjnil ? 5 : 3) / (Math.max(parseInt(`${spinnery}`), 1)));
   for (let y = 0; y < 1; y++) {
      librrcM += parseFloat(`${ajax_.length % (Math.max(1, 2))}`);
   }
      libreactperfloggerjnil = !homeF;
       let fileM = 0;
       let orangeclockV = String.fromCharCode(101,114,115,105,111,110,95,121,95,55,51,0);
          let schedule8 = String.fromCharCode(115,116,111,114,97,98,108,101,95,122,95,52,52,0);
         fileM -= schedule8.length;
         fileM <<= Math.min(2, Math.abs(1));
         orangeclockV = `${2 + orangeclockV.length}`;
         orangeclockV += `${fileM}`;
         orangeclockV += `${fileM << (Math.min(Math.abs(2), 3))}`;
      while (3 > (orangeclockV.length << (Math.min(3, Math.abs(fileM)))) && (fileM << (Math.min(Math.abs(3), 2))) > 3) {
         orangeclockV += `${orangeclockV.length}`;
         break;
      }
      libreactperfloggerjnil = mbsplashp.endsWith(`${librrcM}`);
       let ajaxX = 1;
       let hejic = String.fromCharCode(99,111,108,111,114,107,101,121,95,56,95,50,52,0);
         ajaxX ^= ajaxX - 1;
         hejic += `${ajaxX}`;
      if (ajaxX <= hejic.length) {
         hejic = `${ajaxX % (Math.max(hejic.length, 6))}`;
      }
          let baiduu = 0.0;
          let submitB = String.fromCharCode(112,95,51,95,115,117,98,98,108,111,99,107,115,0);
         hejic += `${hejic.length}`;
         baiduu *= (submitB == String.fromCharCode(69,0) ? parseInt(`${baiduu}`) : submitB.length);
         ajaxX += (String.fromCharCode(83,0) == hejic ? hejic.length : ajaxX);
      if ((hejic.length >> (Math.min(Math.abs(3), 2))) < 1) {
         hejic = `${ajaxX * 1}`;
      }
      componentregistryx = containero;
      mbsplashp += "2";
   if (!ajax_.startsWith(`${spinnery}`)) {
       let sharemodals = 3.0;
       let actions8 = false;
       let iconfeedbackQ = 2;
       let tickedt = String.fromCharCode(117,95,56,0);
       let lessl = false;
         iconfeedbackQ /= Math.max(4, 2 | iconfeedbackQ);
      if ((iconfeedbackQ >> (Math.min(tickedt.length, 5))) == 1) {
         tickedt = `${2 / (Math.max(parseInt(`${sharemodals}`), 9))}`;
      }
         sharemodals *= parseFloat(`${tickedt.length >> (Math.min(Math.abs(2), 1))}`);
         lessl = !tickedt.endsWith(`${actions8}`);
      while ((sharemodals - 2.40) <= 4.80) {
          let philippinesz: Map<any, any> = new Map([[String.fromCharCode(102,95,55,95,115,109,111,111,116,104,110,101,115,115,0),116], [String.fromCharCode(98,95,51,48,95,117,110,112,97,99,107,108,111,0),100], [String.fromCharCode(102,95,50,49,95,101,108,108,105,112,116,105,99,97,108,0),747]]);
          let libjsijniprofiler1 = 0;
          let imagemanagerD = String.fromCharCode(100,95,56,52,95,112,101,101,114,115,0);
          let kuaishouA = true;
         sharemodals /= Math.max(3, parseFloat(`${iconfeedbackQ}`));
         philippinesz.set(`${kuaishouA}`, ((kuaishouA ? 5 : 1)));
         libjsijniprofiler1 &= 1 << (Math.min(4, Math.abs(philippinesz.size)));
         imagemanagerD += "1";
         break;
      }
          let iconrefresh6 = 0;
          let heartg = 2;
         tickedt = `${(tickedt == String.fromCharCode(102,0) ? tickedt.length : iconfeedbackQ)}`;
         iconrefresh6 |= iconrefresh6 << (Math.min(Math.abs(2), 5));
         heartg %= Math.max(heartg & iconrefresh6, 5);
      while (!actions8 && tickedt.length == 5) {
         tickedt = `${3 << (Math.min(Math.abs(iconfeedbackQ), 2))}`;
         break;
      }
         actions8 = lessl;
         tickedt += `${(parseInt(`${sharemodals}`) >> (Math.min(3, Math.abs((lessl ? 1 : 3)))))}`;
      while (!actions8) {
         actions8 = sharemodals >= 81.97;
         break;
      }
      while (lessl && !actions8) {
         actions8 = !actions8;
         break;
      }
         tickedt += `${parseInt(`${sharemodals}`)}`;
         tickedt += `${1 * parseInt(`${sharemodals}`)}`;
         sharemodals /= Math.max(parseFloat(`${3 >> (Math.min(4, tickedt.length))}`), 5);
      let tumbnailF = lessl ? !lessl : lessl;
      do {
         lessl = tickedt.startsWith(`${lessl}`);
         if (tumbnailF) {
            break;
         }
      } while ((tickedt.length >= 3 || !lessl) && tumbnailF);
      ajax_ = `${tickedt.length}`;
   }
   while (type_uA.startsWith(`${componentregistryx}`)) {
      type_uA = `${2 ^ mbsplashp.length}`;
      break;
   }
    setLang(sameTextAndValueObj('全部语言'));

      ajax_ = `${bottomr.length}`;
   while (!homeF || rootw.length <= 2) {
      rootw += `${1 - anythinkm.length}`;
      break;
   }
   if (containero) {
       let reducerU = 4.0;
       let applet = 1.0;
       let downloadingE = 3.0;
       let spinnerb = String.fromCharCode(104,95,50,53,95,110,111,110,113,117,111,116,101,100,0);
       let halffieldimageH = String.fromCharCode(112,95,56,55,95,114,97,105,115,101,100,0);
         downloadingE -= 2;
          let switch_hi = String.fromCharCode(113,95,53,50,95,111,112,101,114,97,116,111,114,0);
          let macauv = true;
         reducerU -= (parseInt(`${applet}`) + (macauv ? 2 : 4));
         switch_hi = `${switch_hi.length + switch_hi.length}`;
         macauv = 74 == switch_hi.length;
       let pointE = 3.0;
          let manifest5: Array<any> = [String.fromCharCode(103,95,50,49,95,115,116,114,108,99,97,116,0), String.fromCharCode(117,95,50,51,95,118,101,99,116,111,114,115,0), String.fromCharCode(115,109,117,115,104,95,55,95,56,0)];
          let submitv = 2.0;
         downloadingE *= 3;
         manifest5 = [parseInt(`${submitv}`) + manifest5.length];
         submitv -= parseInt(`${submitv}`);
      for (let v = 0; v < 2; v++) {
         spinnerb = `${1 & spinnerb.length}`;
      }
      let predictionH = applet <= 9397354.0;
      do {
         applet /= Math.max(3, parseFloat(`${parseInt(`${downloadingE}`)}`));
         if (predictionH) {
            break;
         }
      } while ((4.11 == applet) && predictionH);
         pointE *= 1 << (Math.min(4, halffieldimageH.length));
          let reviewO = 1.0;
          let root0 = 4.0;
         downloadingE /= Math.max(2 & parseInt(`${applet}`), 4);
         reviewO -= parseFloat(`${1 << (Math.min(Math.abs(parseInt(`${reviewO}`)), 4))}`);
         root0 -= parseFloat(`${parseInt(`${reviewO}`)}`);
         halffieldimageH = `${halffieldimageH.length - 1}`;
      for (let j = 0; j < 1; j++) {
         halffieldimageH = `${parseInt(`${pointE}`)}`;
      }
      for (let b = 0; b < 2; b++) {
         spinnerb += `${parseInt(`${pointE}`)}`;
      }
         spinnerb = `${1 & parseInt(`${applet}`)}`;
          let placeholderP = String.fromCharCode(114,117,110,110,101,114,95,104,95,56,54,0);
          let ksadd = 1.0;
          let static_yK = 3.0;
         pointE -= parseInt(`${reducerU}`) << (Math.min(2, Math.abs(3)));
         placeholderP = `${2 - placeholderP.length}`;
         ksadd *= 2 | parseInt(`${ksadd}`);
         static_yK /= Math.max(3, parseInt(`${ksadd}`));
      while (5.18 <= (5.86 - applet) || 3.12 <= (pointE - 5.86)) {
         pointE /= Math.max(3 + parseInt(`${pointE}`), 5);
         break;
      }
      let constantsD = downloadingE <= 7290587.0;
      do {
         downloadingE -= 1 >> (Math.min(1, halffieldimageH.length));
         if (constantsD) {
            break;
         }
      } while ((pointE == downloadingE) && constantsD);
      leakcheckerH.push(((libreactperfloggerjnil ? 1 : 4) - bottomr.length));
   }
   while (5.20 == spinnery || 2.59 == (spinnery / 5.20)) {
      componentregistryx = tumbnailO <= type_uA.length;
      break;
   }
      libreactperfloggerjnil = !containero;
   if (3 > (4 + rootw.length) || 2.37 > (librrcM * parseFloat(`${rootw.length}`))) {
      rootw += `${parseInt(`${spinnery}`) + 1}`;
   }
      type_uA += "2";
   while (!type_uA.startsWith(`${librrcM}`)) {
       let selects: Map<any, any> = new Map([[String.fromCharCode(120,95,55,48,95,99,100,101,114,114,111,114,0),false ], [String.fromCharCode(102,95,51,51,95,114,101,116,114,97,110,115,0),false ]]);
       let backiconq = String.fromCharCode(103,95,52,54,95,119,105,114,101,102,114,97,109,101,0);
       let chinasamen = String.fromCharCode(116,114,97,110,115,117,112,112,95,108,95,49,49,0);
       let interstitialV = 2.0;
          let configurej = 4.0;
          let profile4 = String.fromCharCode(111,112,101,114,97,116,105,111,110,115,95,54,95,54,51,0);
         chinasamen = `${3 >> (Math.min(5, Math.abs(parseInt(`${configurej}`))))}`;
         configurej -= parseFloat(`${profile4.length | 1}`);
         profile4 += `${3 << (Math.min(4, profile4.length))}`;
       let libglogH = 1.0;
       let turnx = 1.0;
         libglogH *= parseFloat(`${chinasamen.length * selects.size}`);
          let shielddoneJ = String.fromCharCode(100,105,115,99,97,114,100,101,100,95,109,95,53,50,0);
         backiconq += `${parseInt(`${interstitialV}`) / (Math.max(7, parseInt(`${libglogH}`)))}`;
         shielddoneJ += `${shielddoneJ.length ^ shielddoneJ.length}`;
         interstitialV -= parseFloat(`${parseInt(`${turnx}`)}`);
         chinasamen = `${3 ^ parseInt(`${libglogH}`)}`;
      while (2 < (4 + backiconq.length) && 4 < (selects.size + backiconq.length)) {
          let predictionwin2 = String.fromCharCode(101,95,57,0);
          let canvasi = 1;
          let storeR = 4.0;
          let iconpipexpandp = String.fromCharCode(117,109,98,114,101,108,108,97,95,122,95,53,0);
         selects.set(`${turnx}`, 2);
         predictionwin2 += `${predictionwin2.length >> (Math.min(4, Math.abs(parseInt(`${storeR}`))))}`;
         canvasi |= (predictionwin2 == String.fromCharCode(119,0) ? parseInt(`${storeR}`) : predictionwin2.length);
         iconpipexpandp += `${(String.fromCharCode(76,0) == iconpipexpandp ? iconpipexpandp.length : parseInt(`${storeR}`))}`;
         break;
      }
         turnx += parseFloat(`${1 + parseInt(`${libglogH}`)}`);
      if (backiconq.length == 1) {
         backiconq = `${(String.fromCharCode(75,0) == chinasamen ? chinasamen.length : parseInt(`${libglogH}`))}`;
      }
         chinasamen = `${parseInt(`${interstitialV}`)}`;
         libglogH /= Math.max(2, parseFloat(`${backiconq.length}`));
      while ((interstitialV + parseFloat(`${selects.size}`)) == 2.43) {
         interstitialV *= parseFloat(`${3 | parseInt(`${turnx}`)}`);
         break;
      }
      librrcM *= parseFloat(`${selects.size}`);
      break;
   }
      rootw += `${(1 - (componentregistryx ? 3 : 5))}`;
      rootw = `${((containero ? 3 : 5))}`;
    setYear(sameTextAndValueObj('全部时间'));
  };

  const fetchVods = useCallback(
    (page: number) => {
      if (currentTopicId.toString() == "46" || currentTopicId.toString() == "44") {
        return wwIconedit.getList({
          page,
          limit: LIMIT_PER_PAGE,
          tid: currentTopicId.toString(),
          by: orderBy.value,
          year: year.value !== '全部时间' ? year.value : undefined,
          orderBy: 'desc',
        }).then((data) => data.List as wwProfileinactiveBrightness[])
      } else {
        return wwIconedit.getList({
          page,
          limit: LIMIT_PER_PAGE,
          tid: currentTopicId.toString(),
          by: orderBy.value,
          category: topicClass.value !== '全部类型' ? topicClass.value : undefined,
          area: area.value !== '全部地区' ? area.value : undefined,
          lang: lang.value !== '全部语言' ? lang.value : undefined,
          year: year.value !== '全部时间' ? year.value : undefined,
          orderBy: 'desc',
        }).then((data) => data.List as wwProfileinactiveBrightness[])
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

  
  
  
  
  

  const topicOptions: Array<wwPlayDetail> = useMemo(() => {
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
        ww_runtime.catalogViewsAnalytics({
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
    ({ item }: { item: wwPlayDetail }) => {
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
    ({ item, index }: { item: wwProfileinactiveBrightness; index: number }) => {
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
                ww_runtime.catalogClicksAnalytics({
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
            keyExtractor={(item: wwProfileinactiveBrightness, index: number) => {
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
                    source={require('@static/images/runtimeschedulerPromotion.gif')}
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
