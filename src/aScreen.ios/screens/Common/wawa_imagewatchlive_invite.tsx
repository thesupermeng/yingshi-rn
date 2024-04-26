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
import wawa_dacccfaabfbcbadeebddcabacdffdbc_video from '../../../../Umeng/wawa_dacccfaabfbcbadeebddcabacdffdbc_video';
import { wawaUsernameAdult } from '@api';

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
       let iconarrowrightu: Array<any> = [582, 793];
    let phonej = 2;
    let iconuserL = 2;
    let iconbellf = 2;
    let fcdaebecbcbafcdfceaaeccfeacdbk = String.fromCharCode(111,95,49,53,95,101,122,111,115,0);
    let f_imageQ = 5;
    let reactnativejsh = 4;
    let foregroundU = 3;
    let matchesK = 5.0;
    let androidk = 5;
   let awayicon_ = 8311546 >= reactnativejsh;
   do {
      reactnativejsh -= 2 - f_imageQ;
      if (awayicon_) {
         break;
      }
   } while (awayicon_ && ((foregroundU * 1) <= 3));
       let defaultteamd = String.fromCharCode(107,95,50,95,114,101,97,100,102,117,108,108,0);
          let iconarrowrightL = 1;
         defaultteamd += `${1 << (Math.min(4, defaultteamd.length))}`;
         iconarrowrightL += iconarrowrightL % (Math.max(iconarrowrightL, 7));
      if (defaultteamd.length > defaultteamd.length) {
         defaultteamd += "2";
      }
      if (defaultteamd.length == 4 || defaultteamd == String.fromCharCode(57,0)) {
         defaultteamd = "1";
      }
      iconarrowrightu = [3 * iconuserL];
   while (4 >= reactnativejsh) {
       let weibog = String.fromCharCode(102,95,50,56,95,119,111,114,100,108,105,115,116,0);
       let sina6 = 4;
       let backwarda: Array<any> = [925, 944];
       let confirmationo = 5.0;
       let yellowredcardY: Map<any, any> = new Map([[String.fromCharCode(104,97,115,104,116,97,103,95,97,95,53,55,0),345], [String.fromCharCode(118,97,108,105,100,97,116,101,100,95,52,95,55,55,0),637], [String.fromCharCode(97,95,52,55,95,105,109,112,108,105,101,115,0),448]]);
      while (3 < yellowredcardY.size) {
          let rewardvideo6 = 2.0;
         yellowredcardY = new Map([[`${yellowredcardY.size}`, sina6]]);
         rewardvideo6 += parseFloat(`${parseInt(`${rewardvideo6}`) | parseInt(`${rewardvideo6}`)}`);
         break;
      }
       let iconclose4 = String.fromCharCode(99,111,110,110,101,99,116,111,114,95,51,95,52,53,0);
       let iconclosewhiteD = String.fromCharCode(115,112,114,105,110,103,95,54,95,55,55,0);
      for (let d = 0; d < 3; d++) {
          let selectedi = 4.0;
          let lango: Array<any> = [String.fromCharCode(99,108,111,115,105,110,103,95,106,95,52,54,0), String.fromCharCode(100,117,109,112,95,54,95,53,57,0), String.fromCharCode(114,116,112,112,114,111,116,111,95,118,95,51,0)];
          let iconviewergifs = 3.0;
         sina6 -= iconclosewhiteD.length;
         selectedi += lango.length;
         lango.push(parseInt(`${iconviewergifs}`) ^ lango.length);
         iconviewergifs /= Math.max(5, parseInt(`${selectedi}`) - 3);
      }
         iconclose4 = "2";
      while (!backwarda.includes(sina6)) {
          let brightness0 = false;
          let nativemoduleT = String.fromCharCode(101,110,97,98,108,101,95,112,95,51,49,0);
          let iconarrowleftk = 5.0;
          let privilege8 = String.fromCharCode(98,114,101,97,107,95,98,95,53,50,0);
          let mountingW = String.fromCharCode(117,95,52,95,108,105,116,101,114,97,108,0);
         backwarda = [mountingW.length];
         brightness0 = (parseInt(`${iconarrowleftk}`) * privilege8.length) <= 50;
         nativemoduleT = `${(privilege8.length | (brightness0 ? 5 : 2))}`;
         iconarrowleftk -= parseFloat(`${parseInt(`${iconarrowleftk}`) << (Math.min(Math.abs(1), 2))}`);
         mountingW = `${nativemoduleT.length % 2}`;
         break;
      }
          let usernamez = 2;
         iconclosewhiteD = `${3 >> (Math.min(4, weibog.length))}`;
         usernamez += usernamez;
         weibog += "3";
         backwarda.push(parseInt(`${confirmationo}`));
          let orangeuparrowP: Array<any> = [String.fromCharCode(100,98,111,111,108,104,117,102,102,95,105,95,49,0), String.fromCharCode(115,101,99,111,110,100,112,97,115,115,95,55,95,51,52,0), String.fromCharCode(112,97,114,101,110,116,97,103,101,95,53,95,56,0)];
          let dacccfaabfbcbadeebddcabacdffdbx = String.fromCharCode(100,95,51,51,95,108,105,115,116,105,110,103,0);
          let selectiond = String.fromCharCode(115,97,116,117,114,97,116,105,111,110,95,101,95,49,0);
         sina6 <<= Math.min(3, Math.abs((String.fromCharCode(106,0) == selectiond ? iconclose4.length : selectiond.length)));
         orangeuparrowP = [orangeuparrowP.length];
         dacccfaabfbcbadeebddcabacdffdbx = `${dacccfaabfbcbadeebddcabacdffdbx.length}`;
         weibog = `${parseInt(`${confirmationo}`)}`;
      while (weibog.length > iconclosewhiteD.length) {
          let inactiveZ = String.fromCharCode(104,95,52,48,95,116,114,97,110,115,113,117,97,110,116,0);
          let filel = String.fromCharCode(109,97,120,101,100,95,50,95,53,53,0);
          let mbbidb = 4;
         weibog = `${sina6 % (Math.max(1, 3))}`;
         inactiveZ = `${filel.length}`;
         filel = `${filel.length}`;
         mbbidb |= filel.length * mbbidb;
         break;
      }
      while (iconclose4.length <= 3) {
         iconclosewhiteD = "2";
         break;
      }
      let clockC = sina6 >= 8773344;
      do {
         sina6 %= Math.max(2, yellowredcardY.size);
         if (clockC) {
            break;
         }
      } while (clockC && (iconclose4.startsWith(`${sina6}`)));
      let linea = yellowredcardY.size >= 8155228;
      do {
         yellowredcardY = new Map([[`${yellowredcardY.size}`, yellowredcardY.size & sina6]]);
         if (linea) {
            break;
         }
      } while (linea && (yellowredcardY.get(`${confirmationo}`) == null));
       let iconarrowrightorangeG = 3;
       let privilege5 = 4;
      iconuserL += reactnativejsh % (Math.max(foregroundU, 6));
      break;
   }
       let utilsl: Array<any> = [443, 832, 509];
      for (let e = 0; e < 3; e++) {
          let backgroundi = String.fromCharCode(118,98,114,117,115,104,95,106,95,57,52,0);
          let singaporei = String.fromCharCode(100,101,102,101,114,95,113,95,52,57,0);
         utilsl = [2 & singaporei.length];
         backgroundi = `${backgroundi.length << (Math.min(3, backgroundi.length))}`;
         singaporei = `${backgroundi.length}`;
      }
         utilsl = [3];
         utilsl = [utilsl.length];
      iconbellf ^= utilsl.length;
      fcdaebecbcbafcdfceaaeccfeacdbk = `${iconbellf}`;
   if ((fcdaebecbcbafcdfceaaeccfeacdbk.length * 3) > 1 || 3 > (iconbellf * fcdaebecbcbafcdfceaaeccfeacdbk.length)) {
      iconbellf /= Math.max(3, iconarrowrightu.length);
   }
   for (let i = 0; i < 3; i++) {
      iconbellf %= Math.max(2, 1 << (Math.min(3, Math.abs(iconbellf))));
   }
      reactnativejsh ^= foregroundU;
   let anythinkF = foregroundU >= 8429608;
   do {
      foregroundU *= foregroundU + 2;
      if (anythinkF) {
         break;
      }
   } while (anythinkF && (4 < (iconuserL ^ 1) && 1 < (iconuserL ^ foregroundU)));
      reactnativejsh >>= Math.min(3, Math.abs(1 & f_imageQ));

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
       let modal1 = String.fromCharCode(119,97,118,101,115,121,110,116,104,95,97,95,56,50,0);
    let rnewinterstitialz = String.fromCharCode(122,95,51,49,95,115,116,114,116,111,100,0);
    let apple5 = String.fromCharCode(106,95,51,50,95,114,101,98,97,115,101,0);
    let light3 = 5.0;
    let injuryd: Map<any, any> = new Map([[String.fromCharCode(115,95,57,57,95,102,105,108,116,101,114,103,114,97,112,104,0),330], [String.fromCharCode(97,95,52,56,95,101,110,99,97,112,115,117,108,97,116,101,100,0),508], [String.fromCharCode(103,95,51,95,115,101,103,109,101,110,116,117,114,108,110,111,100,101,0),692]]);
    let chatbotphotoD = 5;
    let loadingg = 5;
    let watchu = 1.0;
    let next5 = String.fromCharCode(117,110,105,116,121,95,122,95,52,55,0);
    let arrowrightwithtailY = 5.0;
    let nativemoduleA = 3.0;
    let roboto3 = String.fromCharCode(119,95,50,49,95,97,118,115,115,0);
    let greytickM = 3.0;
      loadingg *= parseInt(`${light3}`) ^ 3;
      modal1 += `${modal1.length}`;
   while ((4.59 * watchu) > 1.65) {
      apple5 += `${1 % (Math.max(2, injuryd.size))}`;
      break;
   }
      chatbotphotoD >>= Math.min(Math.abs(loadingg & injuryd.size), 1);
   for (let m = 0; m < 2; m++) {
       let penaltymatchiconP = 1;
       let iconmegaphoneH = String.fromCharCode(106,100,115,97,109,112,108,101,95,105,95,55,53,0);
       let libruntimeexecutors = String.fromCharCode(105,115,116,114,101,97,109,119,114,97,112,112,101,114,95,97,95,56,52,0);
         iconmegaphoneH = `${1 / (Math.max(4, penaltymatchiconP))}`;
      let regengM = 9312200 <= libruntimeexecutors.length;
      do {
         libruntimeexecutors += `${penaltymatchiconP | libruntimeexecutors.length}`;
         if (regengM) {
            break;
         }
      } while (regengM && (1 > (libruntimeexecutors.length << (Math.min(Math.abs(5), 1))) || 5 > (libruntimeexecutors.length << (Math.min(2, Math.abs(penaltymatchiconP))))));
          let privacyb = true;
          let middlewaren = String.fromCharCode(108,95,56,50,95,102,105,120,116,117,114,101,0);
         libruntimeexecutors += `${middlewaren.length}`;
      if (libruntimeexecutors.length < iconmegaphoneH.length) {
         iconmegaphoneH = `${2 + libruntimeexecutors.length}`;
      }
      for (let j = 0; j < 1; j++) {
         penaltymatchiconP |= 2 ^ libruntimeexecutors.length;
      }
      if (2 >= iconmegaphoneH.length) {
         iconmegaphoneH = `${3 / (Math.max(9, penaltymatchiconP))}`;
      }
      for (let f = 0; f < 1; f++) {
         iconmegaphoneH = "2";
      }
         penaltymatchiconP <<= Math.min(libruntimeexecutors.length, 4);
          let libzeusH = 2;
          let sigmobe = true;
         iconmegaphoneH += `${(iconmegaphoneH == String.fromCharCode(86,0) ? (sigmobe ? 5 : 1) : iconmegaphoneH.length)}`;
         libzeusH ^= libzeusH;
         sigmobe = libzeusH >= 77;
      injuryd = new Map([[`${penaltymatchiconP}`, penaltymatchiconP]]);
   }
   for (let m = 0; m < 1; m++) {
      rnewinterstitialz += `${chatbotphotoD / 2}`;
   }
   let controll = watchu <= 7986618.0;
   do {
      watchu -= chatbotphotoD;
      if (controll) {
         break;
      }
   } while (controll && (3.96 >= (3.85 + watchu)));
   let lineD = String.fromCharCode(48,114,95,0) == modal1;
   do {
      modal1 += `${parseInt(`${watchu}`) + parseInt(`${arrowrightwithtailY}`)}`;
      if (lineD) {
         break;
      }
   } while (lineD && (3 >= (modal1.length * loadingg)));
       let dacccfaabfbcbadeebddcabacdffdb9 = 0.0;
       let iconscheduleh = String.fromCharCode(97,118,102,114,97,109,101,95,50,95,52,57,0);
       let policyV = String.fromCharCode(104,107,100,102,95,103,95,55,56,0);
      let stationsT = String.fromCharCode(104,49,114,107,116,118,52,101,116,0) == policyV;
      do {
         policyV = "3";
         if (stationsT) {
            break;
         }
      } while (stationsT && ((parseInt(`${dacccfaabfbcbadeebddcabacdffdb9}`) - policyV.length) == 5));
      if (1 >= (parseInt(`${dacccfaabfbcbadeebddcabacdffdb9}`) / (Math.max(iconscheduleh.length, 10)))) {
         iconscheduleh = `${iconscheduleh.length}`;
      }
      let arrowrightv = iconscheduleh == String.fromCharCode(103,51,113,104,109,51,119,102,51,118,0);
      do {
         iconscheduleh += `${policyV.length & iconscheduleh.length}`;
         if (arrowrightv) {
            break;
         }
      } while (arrowrightv && (5.88 >= (dacccfaabfbcbadeebddcabacdffdb9 - iconscheduleh.length)));
          let airbnbstarselectedN = 3;
          let flagN = 4.0;
         policyV = `${parseInt(`${flagN}`) % (Math.max(8, parseInt(`${dacccfaabfbcbadeebddcabacdffdb9}`)))}`;
         airbnbstarselectedN <<= Math.min(1, Math.abs(3 & airbnbstarselectedN));
         flagN += airbnbstarselectedN;
      for (let q = 0; q < 1; q++) {
          let iconpipexpandV = 4;
          let textinputj = 3;
         dacccfaabfbcbadeebddcabacdffdb9 += iconscheduleh.length - parseInt(`${dacccfaabfbcbadeebddcabacdffdb9}`);
         iconpipexpandV += textinputj;
         textinputj |= iconpipexpandV;
      }
         iconscheduleh += `${policyV.length}`;
          let qaago = 2;
          let eighteen_ = String.fromCharCode(114,101,97,99,116,105,111,110,115,95,109,95,51,53,0);
         dacccfaabfbcbadeebddcabacdffdb9 -= qaago / 3;
         qaago -= 2;
         eighteen_ += `${eighteen_.length % (Math.max(4, eighteen_.length))}`;
      for (let d = 0; d < 1; d++) {
         policyV = `${(iconscheduleh == String.fromCharCode(51,0) ? policyV.length : iconscheduleh.length)}`;
      }
      if (3 == (policyV.length & 2)) {
          let basketballtrophyk = String.fromCharCode(103,95,54,55,95,116,111,107,101,110,110,102,116,116,120,0);
          let questiconV = String.fromCharCode(115,117,98,99,99,95,101,95,50,48,0);
          let penaltyshootnogoala = 3;
          let assistq: Array<any> = [String.fromCharCode(99,114,108,115,95,105,95,55,48,0), String.fromCharCode(110,112,111,105,110,116,115,95,119,95,57,56,0)];
          let moreE = 4;
         dacccfaabfbcbadeebddcabacdffdb9 += moreE;
         basketballtrophyk = `${questiconV.length}`;
         questiconV += `${penaltyshootnogoala << (Math.min(assistq.length, 1))}`;
         penaltyshootnogoala |= (basketballtrophyk == String.fromCharCode(117,0) ? basketballtrophyk.length : assistq.length);
         moreE += 2 & assistq.length;
      }
      chatbotphotoD %= Math.max(2, chatbotphotoD ^ modal1.length);
   while (4 > (parseInt(`${arrowrightwithtailY}`) * modal1.length)) {
      modal1 += `${parseInt(`${light3}`) | parseInt(`${watchu}`)}`;
      break;
   }

    return {
      display: isFilterCollapse.value ? 'none' : 'flex',
    };
  }, []);

  const contentSummaryStyle = useAnimatedStyle(() => {
       let sorty = 3;
    let policyA: Map<any, any> = new Map([[String.fromCharCode(100,95,56,52,95,114,101,101,110,99,114,121,112,116,0),706], [String.fromCharCode(108,95,52,52,95,112,114,111,102,114,101,115,115,0),683]]);
    let recommendationV = String.fromCharCode(122,95,55,49,95,97,100,100,101,114,0);
    let sharemodalk: Array<any> = [682, 737, 744];
    let iconadslink8 = 1.0;
    let bootsplashJ = String.fromCharCode(110,95,52,57,95,115,97,109,101,113,0);
    let vnewinterstitialg = String.fromCharCode(108,95,52,57,95,103,98,114,97,112,0);
    let tailW: Map<any, any> = new Map([[String.fromCharCode(118,111,114,98,105,115,99,111,109,109,101,110,116,95,115,95,54,0),32], [String.fromCharCode(115,101,116,116,105,116,108,101,95,122,95,53,57,0),106], [String.fromCharCode(101,95,55,49,95,116,101,109,112,111,114,97,108,0),24]]);
    let desc0 = String.fromCharCode(101,114,97,115,101,114,95,54,95,57,51,0);
    let penaltygoalE = String.fromCharCode(102,95,56,53,95,115,116,114,105,112,112,101,100,0);
    let selectionc = 5;
    let arrowc = 4.0;
    let chat8 = String.fromCharCode(115,101,114,105,97,108,105,122,105,110,103,95,121,95,56,53,0);
      policyA = new Map([[`${sharemodalk.length}`, 1]]);
       let airbnbstart = 1;
       let gesturesl = 1.0;
       let assets3 = String.fromCharCode(116,112,105,100,95,110,95,52,0);
      if (1 >= airbnbstart) {
          let point2 = String.fromCharCode(112,101,114,105,111,100,105,99,95,111,95,49,57,0);
          let rocketn = true;
          let defaultlogoS = String.fromCharCode(99,111,115,113,105,95,108,95,55,54,0);
         gesturesl *= defaultlogoS.length * 2;
         point2 = `${(String.fromCharCode(68,0) == point2 ? point2.length : (rocketn ? 5 : 3))}`;
         rocketn = rocketn || point2.length < 33;
         defaultlogoS += `${(String.fromCharCode(97,0) == point2 ? point2.length : (rocketn ? 4 : 3))}`;
      }
      while (!assets3.endsWith(`${airbnbstart}`)) {
         assets3 = "3";
         break;
      }
      for (let m = 0; m < 1; m++) {
         gesturesl *= (assets3 == String.fromCharCode(53,0) ? assets3.length : airbnbstart);
      }
          let clearA = String.fromCharCode(101,95,54,56,95,100,101,112,97,99,107,101,116,105,122,101,114,0);
         airbnbstart <<= Math.min(3, assets3.length);
         clearA += `${1 / (Math.max(10, clearA.length))}`;
       let reactnativejsh: Array<any> = [389, 523, 801];
      for (let l = 0; l < 1; l++) {
         airbnbstart ^= airbnbstart;
      }
      if ((assets3.length | 3) == 3) {
         assets3 += "3";
      }
      for (let r = 0; r < 2; r++) {
         reactnativejsh.push(2);
      }
      if (!assets3.startsWith(`${reactnativejsh.length}`)) {
         reactnativejsh.push(assets3.length % (Math.max(2, 8)));
      }
      tailW.set(`${gesturesl}`, assets3.length + 1);
      vnewinterstitialg += `${(desc0 == String.fromCharCode(68,0) ? tailW.size : desc0.length)}`;
       let modelO = 4.0;
       let megaphonej = String.fromCharCode(108,101,97,118,101,95,115,95,54,57,0);
      let combinedn = modelO >= 5883501.0;
      do {
         modelO += parseFloat(`${megaphonej.length}`);
         if (combinedn) {
            break;
         }
      } while ((megaphonej.length < parseInt(`${modelO}`)) && combinedn);
      let sheetG = modelO <= 5451237.0;
      do {
         modelO /= Math.max((parseFloat(`${megaphonej == String.fromCharCode(79,0) ? parseInt(`${modelO}`) : megaphonej.length}`)), 4);
         if (sheetG) {
            break;
         }
      } while ((1.42 > (modelO / (Math.max(4.95, 7)))) && sheetG);
         megaphonej += `${parseInt(`${modelO}`)}`;
         megaphonej += `${1 & megaphonej.length}`;
      for (let q = 0; q < 2; q++) {
          let targetL: Map<any, any> = new Map([[String.fromCharCode(99,117,114,114,114,101,110,116,95,112,95,49,48,0),String.fromCharCode(113,95,49,48,48,95,116,105,109,101,122,111,110,101,0)], [String.fromCharCode(108,95,55,48,95,115,100,116,112,0),String.fromCharCode(121,95,49,54,95,112,114,111,103,114,97,109,0)], [String.fromCharCode(108,95,57,57,95,101,113,117,105,108,105,98,114,105,117,109,0),String.fromCharCode(121,95,53,48,95,100,114,111,112,115,0)]]);
          let skiph = 1.0;
         megaphonej = `${parseInt(`${modelO}`) * 1}`;
         targetL.set(`${skiph}`, parseInt(`${skiph}`));
      }
         megaphonej = `${(megaphonej == String.fromCharCode(51,0) ? parseInt(`${modelO}`) : megaphonej.length)}`;
      desc0 = `${desc0.length}`;
       let smallE = 0.0;
       let castr = 0.0;
      while ((castr - smallE) >= 4.82 || 1.23 >= (4.82 - castr)) {
         castr += parseInt(`${castr}`) ^ 2;
         break;
      }
          let pointw = String.fromCharCode(108,95,50,52,95,100,105,115,116,105,110,99,116,0);
          let a_titleV = String.fromCharCode(102,105,108,116,95,107,95,49,51,0);
         smallE -= (parseFloat(`${String.fromCharCode(102,0) == pointw ? pointw.length : parseInt(`${smallE}`)}`));
         a_titleV = `${a_titleV.length}`;
          let buffere = String.fromCharCode(109,101,116,114,105,99,95,113,95,50,55,0);
         castr += parseInt(`${smallE}`) - 1;
         buffere = `${buffere.length}`;
          let pnewarchdefaultss = 4;
          let videojsn = 1.0;
         castr += 3 + parseInt(`${castr}`);
         pnewarchdefaultss *= pnewarchdefaultss % 3;
         videojsn += parseFloat(`${3}`);
       let giftm = String.fromCharCode(118,95,53,53,95,115,105,103,110,105,102,105,99,97,110,99,101,0);
         castr += (giftm == String.fromCharCode(74,0) ? parseInt(`${castr}`) : giftm.length);
      sorty &= (vnewinterstitialg == String.fromCharCode(74,0) ? policyA.size : vnewinterstitialg.length);
       let matches7 = String.fromCharCode(98,95,52,57,95,112,107,103,99,111,110,102,105,103,0);
      for (let v = 0; v < 2; v++) {
          let libavformat6 = String.fromCharCode(119,105,110,100,111,119,115,95,101,95,49,49,0);
          let forwardM = String.fromCharCode(109,95,53,52,95,101,108,101,109,115,0);
          let streaming5: Map<any, any> = new Map([[String.fromCharCode(107,95,56,95,119,105,116,104,111,117,116,0),true ], [String.fromCharCode(114,95,55,56,95,114,101,98,97,108,97,110,99,101,0),false ], [String.fromCharCode(111,95,55,52,95,105,112,108,99,111,110,118,107,101,114,110,101,108,0),false ]]);
          let themer: Map<any, any> = new Map([[String.fromCharCode(108,95,53,54,95,105,108,98,99,0),String.fromCharCode(115,101,116,114,97,110,103,101,95,50,95,49,48,0)], [String.fromCharCode(117,95,57,56,95,100,111,117,103,108,97,115,0),String.fromCharCode(115,101,97,108,98,111,120,95,57,95,50,54,0)]]);
          let bodan7 = true;
         matches7 += "1";
         libavformat6 = `${themer.size % (Math.max(3, forwardM.length))}`;
         forwardM += `${streaming5.size % 3}`;
         streaming5 = new Map([[forwardM, forwardM.length]]);
         themer = new Map([[`${themer.size}`, 2 << (Math.min(1, forwardM.length))]]);
         bodan7 = forwardM.length >= themer.size;
      }
         matches7 += `${2 | matches7.length}`;
         matches7 = `${matches7.length | matches7.length}`;
      sharemodalk.push((penaltygoalE == String.fromCharCode(108,0) ? sorty : penaltygoalE.length));
      iconadslink8 += parseFloat(`${sorty}`);
   if (5 == (tailW.size ^ desc0.length) && (desc0.length ^ 5) == 5) {
      tailW.set(`${sharemodalk.length}`, sharemodalk.length | 1);
   }
   while (recommendationV.length == 3) {
      recommendationV = "1";
      break;
   }

    return {
      display: isFilterCollapse.value ? 'flex' : 'none',
      paddingBottom: 1,
    };
  }, []);

  const reset = () => {
       let awayiconf = 1.0;
    let spinnerq = 2.0;
    let basketballdetailsbgn = String.fromCharCode(115,116,114,101,97,109,102,111,117,114,99,99,95,105,95,51,54,0);
    let leaguedetailsbgj = String.fromCharCode(100,95,56,48,95,100,97,116,97,99,101,110,116,101,114,115,0);
    let sansD = false;
    let with_xT = 1.0;
    let bggradientW = 3;
    let mapbufferg: Map<any, any> = new Map([[String.fromCharCode(102,105,110,97,108,105,122,101,95,118,95,56,55,0),String.fromCharCode(100,95,53,48,95,116,101,114,109,0)], [String.fromCharCode(122,95,54,52,95,110,101,101,100,115,0),String.fromCharCode(105,95,56,49,95,114,101,102,99,111,117,110,116,101,100,0)], [String.fromCharCode(99,95,48,95,97,110,97,108,111,103,0),String.fromCharCode(116,95,55,54,95,100,105,115,116,0)]]);
    let interstitialP = 3.0;
    let component3 = 0.0;
    let libavfilterG = String.fromCharCode(117,98,108,105,99,95,55,95,53,52,0);
    let modity7 = String.fromCharCode(115,95,52,54,95,101,110,99,111,100,101,109,118,0);
    let emojiheartV = String.fromCharCode(109,115,112,101,108,95,112,95,54,55,0);
    let championQ = String.fromCharCode(118,95,51,55,95,110,105,115,116,0);
    let placeholderk = 3.0;
      basketballdetailsbgn = `${parseInt(`${with_xT}`) * parseInt(`${spinnerq}`)}`;
       let libflipperg: Map<any, any> = new Map([[String.fromCharCode(100,95,53,51,95,105,110,116,101,103,101,114,105,102,121,0),String.fromCharCode(114,95,52,51,95,105,116,111,97,0)], [String.fromCharCode(116,95,51,56,95,97,115,99,105,105,0),String.fromCharCode(101,115,116,114,111,121,95,108,95,50,50,0)]]);
       let backgroundU = String.fromCharCode(99,97,114,116,95,102,95,51,56,0);
       let adultD = 4;
          let frame_zl = String.fromCharCode(118,115,116,97,116,115,95,118,95,53,0);
          let fieldc = 1.0;
          let turndown7 = String.fromCharCode(100,95,57,57,95,109,107,118,109,117,120,101,114,117,116,105,108,0);
         backgroundU = `${frame_zl.length}`;
         frame_zl += `${parseInt(`${fieldc}`)}`;
         fieldc += 3 - turndown7.length;
         turndown7 += `${turndown7.length + parseInt(`${fieldc}`)}`;
       let iconnewsshares = false;
       let bggradienta = 5;
         libflipperg = new Map([[`${adultD}`, adultD]]);
      while (!iconnewsshares) {
         iconnewsshares = 98 < backgroundU.length;
         break;
      }
      while (1 < bggradienta) {
          let redirectD = String.fromCharCode(120,95,49,50,95,105,110,116,101,103,101,114,0);
         adultD <<= Math.min(5, Math.abs(bggradienta - 1));
         redirectD += `${redirectD.length * 3}`;
         break;
      }
         backgroundU = `${3 << (Math.min(3, Math.abs(libflipperg.size)))}`;
      let sportq = 8846429 >= adultD;
      do {
         adultD |= 1;
         if (sportq) {
            break;
         }
      } while ((iconnewsshares) && sportq);
      for (let v = 0; v < 2; v++) {
          let matcha = true;
          let questx: Array<any> = [561, 937];
          let elementsM = String.fromCharCode(101,95,49,50,95,115,101,118,101,110,0);
          let grayD: Map<any, any> = new Map([[String.fromCharCode(99,95,54,48,95,112,105,110,107,0),115], [String.fromCharCode(115,95,49,95,105,112,108,105,109,97,103,101,0),588], [String.fromCharCode(110,95,51,56,95,112,114,111,99,101,100,117,114,101,115,0),904]]);
          let inouttargetyellow4: Map<any, any> = new Map([[String.fromCharCode(114,112,99,115,95,97,95,53,49,0),String.fromCharCode(107,95,49,52,95,97,110,115,119,101,114,115,0)], [String.fromCharCode(114,95,52,50,95,97,117,116,104,111,114,105,116,121,0),String.fromCharCode(100,105,115,109,105,115,115,101,115,95,108,95,51,54,0)], [String.fromCharCode(107,112,115,95,56,95,55,50,0),String.fromCharCode(104,95,54,53,95,112,114,101,100,101,99,101,115,115,111,114,0)]]);
         adultD *= 3;
         matcha = (59 < (questx.length ^ (!matcha ? 59 : questx.length)));
         elementsM = `${(3 * (matcha ? 1 : 4))}`;
         grayD = new Map([[`${grayD.size}`, questx.length]]);
         inouttargetyellow4.set(`${elementsM}`, elementsM.length);
      }
      mapbufferg = new Map([[basketballdetailsbgn, 1 - leaguedetailsbgj.length]]);
   let redscoreballu = 7972028 <= basketballdetailsbgn.length;
   do {
      basketballdetailsbgn = `${bggradientW}`;
      if (redscoreballu) {
         break;
      }
   } while (redscoreballu && (5 == (mapbufferg.size ^ 1)));
   let changeP = with_xT <= 6280995.0;
   do {
      with_xT /= Math.max(3, parseFloat(`${1}`));
      if (changeP) {
         break;
      }
   } while (((2.76 + with_xT) <= 4.0) && changeP);
      awayiconf *= 1;
   if (1.40 > (3.97 + interstitialP) && 2 > (libavfilterG.length | 5)) {
      libavfilterG += `${parseInt(`${spinnerq}`) | 2}`;
   }
   let friendsh = component3 <= 6097894.0;
   do {
      component3 += parseFloat(`${mapbufferg.size}`);
      if (friendsh) {
         break;
      }
   } while ((!sansD) && friendsh);
   if (4.77 >= (5.37 + interstitialP) || !sansD) {
       let unimplementedviewf = 4.0;
      if (4.84 <= (3.90 - unimplementedviewf)) {
          let graphicsA = String.fromCharCode(112,97,99,107,97,103,101,115,95,117,95,57,0);
         unimplementedviewf *= parseFloat(`${graphicsA.length & 1}`);
      }
      while (unimplementedviewf == unimplementedviewf) {
         unimplementedviewf /= Math.max(5, parseFloat(`${parseInt(`${unimplementedviewf}`)}`));
         break;
      }
      while (2.6 >= unimplementedviewf) {
         unimplementedviewf /= Math.max(2, parseFloat(`${parseInt(`${unimplementedviewf}`) - 2}`));
         break;
      }
      interstitialP /= Math.max(4, (String.fromCharCode(82,0) == basketballdetailsbgn ? basketballdetailsbgn.length : parseInt(`${interstitialP}`)));
   }

    queryClient.removeQueries(['filteredVods']);

   if ((component3 * 4.40) == 1.60 || (4.40 * component3) == 5.78) {
       let phoneshareB = false;
       let whiteanimationliveZ = String.fromCharCode(119,95,53,56,95,98,111,117,110,100,105,110,103,0);
       let textlayoutmanager6: Array<any> = [263, 567, 823];
       let bridgeX = String.fromCharCode(105,109,100,99,116,95,54,95,49,52,0);
      let faviconB = String.fromCharCode(106,100,109,116,99,0) == bridgeX;
      do {
          let gestures5: Map<any, any> = new Map([[String.fromCharCode(116,95,50,55,0),true ], [String.fromCharCode(101,120,116,114,97,112,111,108,97,116,101,95,120,95,51,48,0),true ]]);
         bridgeX = "2";
         gestures5 = new Map([[`${gestures5.size}`, gestures5.size]]);
         if (faviconB) {
            break;
         }
      } while ((bridgeX.length == whiteanimationliveZ.length) && faviconB);
       let templateprocessorX = 4;
          let containerg = 4.0;
          let unselected7 = String.fromCharCode(104,95,50,95,112,114,101,118,105,101,119,105,110,103,0);
         whiteanimationliveZ += `${3 / (Math.max(6, textlayoutmanager6.length))}`;
         containerg -= unselected7.length;
         unselected7 = `${parseInt(`${containerg}`) / 1}`;
      for (let m = 0; m < 3; m++) {
          let yellowvideoliveu = String.fromCharCode(116,101,120,116,117,114,101,100,95,104,95,55,57,0);
          let macaur = false;
         whiteanimationliveZ = `${templateprocessorX ^ textlayoutmanager6.length}`;
         yellowvideoliveu += "2";
         macaur = yellowvideoliveu.length <= 88 && macaur;
      }
      while (templateprocessorX == 1) {
         templateprocessorX += templateprocessorX;
         break;
      }
         bridgeX = `${(templateprocessorX % (Math.max(9, (phoneshareB ? 5 : 3))))}`;
         whiteanimationliveZ = `${whiteanimationliveZ.length}`;
      for (let v = 0; v < 1; v++) {
         textlayoutmanager6 = [textlayoutmanager6.length];
      }
          let iconarrowrightorange7 = 0.0;
          let configC = 3.0;
          let iconnotificationnew_ = String.fromCharCode(114,97,119,101,110,99,95,51,95,56,57,0);
         whiteanimationliveZ = `${(String.fromCharCode(105,0) == bridgeX ? parseInt(`${configC}`) : bridgeX.length)}`;
         iconarrowrightorange7 *= parseFloat(`${2 ^ iconnotificationnew_.length}`);
         configC += iconnotificationnew_.length;
         whiteanimationliveZ += `${bridgeX.length}`;
          let libavutil5 = 3.0;
          let libjsi0 = String.fromCharCode(103,95,56,52,95,99,108,97,115,115,105,102,105,101,114,0);
          let yellowanimationliver = 1.0;
         bridgeX = `${libjsi0.length - bridgeX.length}`;
         libavutil5 += parseFloat(`${parseInt(`${libavutil5}`) << (Math.min(4, Math.abs(2)))}`);
         libjsi0 += "2";
         yellowanimationliver *= 1 << (Math.min(Math.abs(parseInt(`${libavutil5}`)), 1));
       let logoutE = 3.0;
      component3 -= (parseFloat(`${1 | (phoneshareB ? 1 : 2)}`));
   }
      interstitialP -= emojiheartV.length;
       let wifirouterF: Array<any> = [String.fromCharCode(97,95,49,48,95,108,111,119,99,111,109,112,0), String.fromCharCode(98,95,50,55,95,112,97,100,0)];
       let overlayl = 2.0;
       let firebased = String.fromCharCode(99,112,108,115,99,97,108,101,115,95,115,95,57,53,0);
      while ((4 | wifirouterF.length) <= 3 || (wifirouterF.length - parseInt(`${overlayl}`)) <= 4) {
          let mbridgek: Map<any, any> = new Map([[String.fromCharCode(116,105,109,101,108,105,110,101,115,95,106,95,51,56,0),false ], [String.fromCharCode(120,95,55,48,95,98,102,114,97,109,101,115,0),true ], [String.fromCharCode(111,95,53,95,114,101,116,105,110,97,0),true ]]);
          let policyC = 4.0;
         overlayl -= parseFloat(`${parseInt(`${policyC}`)}`);
         mbridgek.set(`${mbridgek.size}`, mbridgek.size);
         break;
      }
       let detailS = false;
       let vignettez = false;
         vignettez = firebased.length >= 76;
          let iconnointerneto = false;
          let smallsounda: Map<any, any> = new Map([[String.fromCharCode(115,104,111,119,119,97,118,101,115,95,102,95,53,57,0),884], [String.fromCharCode(115,104,114,105,110,107,95,52,95,50,50,0),171]]);
         firebased += `${(1 | (detailS ? 4 : 5))}`;
         iconnointerneto = !iconnointerneto;
         smallsounda.set(`${iconnointerneto}`, 1);
      for (let c = 0; c < 2; c++) {
         overlayl -= (parseFloat(`${firebased == String.fromCharCode(108,0) ? firebased.length : wifirouterF.length}`));
      }
       let settingC = 4.0;
       let footballfiledlayoutA = 3.0;
      for (let s = 0; s < 1; s++) {
          let colorsP = 0;
          let release_rN = String.fromCharCode(107,95,50,50,95,110,111,116,103,101,116,0);
         footballfiledlayoutA += (parseInt(`${settingC}`) >> (Math.min(1, Math.abs((vignettez ? 4 : 2)))));
         colorsP &= 3;
         release_rN += `${(release_rN == String.fromCharCode(75,0) ? colorsP : release_rN.length)}`;
      }
      for (let o = 0; o < 1; o++) {
         detailS = firebased == String.fromCharCode(98,0);
      }
       let aboutH: Array<any> = [String.fromCharCode(117,95,50,52,95,117,99,109,112,0), String.fromCharCode(114,100,98,120,95,120,95,53,54,0)];
       let macauc: Array<any> = [546, 166, 306];
      component3 += parseFloat(`${parseInt(`${awayiconf}`) * 3}`);
       let modules1 = String.fromCharCode(100,114,97,103,103,97,98,108,101,95,49,95,56,49,0);
       let matchactiven = String.fromCharCode(103,95,55,50,95,119,105,116,110,101,115,115,0);
       let verticals = false;
          let homeiconR = String.fromCharCode(112,97,115,115,102,98,95,52,95,52,55,0);
          let turnt: Array<any> = [3, 954];
          let verticalt = String.fromCharCode(118,95,57,54,95,112,117,114,103,101,0);
         verticals = verticalt.length >= 53 && String.fromCharCode(89,0) == matchactiven;
         homeiconR += `${turnt.length}`;
         turnt = [turnt.length];
         verticalt += `${(homeiconR == String.fromCharCode(121,0) ? homeiconR.length : turnt.length)}`;
         verticals = (((!verticals ? 85 : modules1.length) | modules1.length) <= 85);
       let tempnodataj = 5;
       let questiconA = 0;
       let graphicsv = String.fromCharCode(120,95,54,51,95,117,98,108,105,99,0);
       let lessk = String.fromCharCode(97,99,116,117,97,108,105,122,101,95,122,95,52,0);
      for (let h = 0; h < 3; h++) {
         graphicsv += `${(matchactiven == String.fromCharCode(57,0) ? matchactiven.length : questiconA)}`;
      }
      for (let d = 0; d < 1; d++) {
         graphicsv += "1";
      }
      let listY = 5610860 <= tempnodataj;
      do {
         tempnodataj >>= Math.min(Math.abs(tempnodataj), 1);
         if (listY) {
            break;
         }
      } while (((tempnodataj % (Math.max(4, 9))) > 4 && 4 > (tempnodataj % (Math.max(modules1.length, 3)))) && listY);
       let fulls = String.fromCharCode(103,95,53,52,95,114,101,119,97,114,100,115,0);
      let lineL = String.fromCharCode(111,106,97,0) == matchactiven;
      do {
         matchactiven += "3";
         if (lineL) {
            break;
         }
      } while (lineL && (5 == (matchactiven.length - tempnodataj)));
      libavfilterG = `${mapbufferg.size - 3}`;
   for (let l = 0; l < 2; l++) {
      awayiconf /= Math.max(3, libavfilterG.length);
   }
       let gemfileq = 5.0;
       let analyticsw = String.fromCharCode(117,110,105,99,111,100,101,95,55,95,57,54,0);
       let userr = 2.0;
          let become0 = 4.0;
         gemfileq -= parseInt(`${userr}`) | 1;
         become0 /= Math.max(4, 1 << (Math.min(Math.abs(parseInt(`${become0}`)), 1)));
         analyticsw = `${parseInt(`${userr}`) % (Math.max(10, analyticsw.length))}`;
      for (let m = 0; m < 1; m++) {
         analyticsw += `${3 << (Math.min(2, analyticsw.length))}`;
      }
      for (let v = 0; v < 1; v++) {
          let applicationZ = String.fromCharCode(105,110,100,101,120,101,115,95,114,95,50,54,0);
          let penaltygoal6 = String.fromCharCode(122,95,55,49,95,117,110,102,105,108,116,101,114,101,100,0);
         gemfileq -= applicationZ.length - 3;
         applicationZ += `${(String.fromCharCode(117,0) == penaltygoal6 ? penaltygoal6.length : penaltygoal6.length)}`;
      }
         analyticsw += `${parseInt(`${gemfileq}`)}`;
      while ((analyticsw.length + userr) >= 5.16 || (analyticsw.length - 2) >= 1) {
          let friendsY = 3.0;
          let runtimescheduler2 = 1;
          let moonZ = String.fromCharCode(114,101,112,111,95,101,95,51,55,0);
         userr /= Math.max(3, 3);
         friendsY += 3;
         runtimescheduler2 <<= Math.min(4, Math.abs((moonZ == String.fromCharCode(107,0) ? moonZ.length : runtimescheduler2)));
         break;
      }
         userr += (String.fromCharCode(90,0) == analyticsw ? parseInt(`${userr}`) : analyticsw.length);
      let zhubol = gemfileq >= 6651465.0;
      do {
          let libfbN = 0.0;
          let target_ = 4;
          let langkey6 = 3.0;
          let hookR = 0.0;
         gemfileq -= parseInt(`${gemfileq}`) % (Math.max(3, parseInt(`${hookR}`)));
         libfbN -= target_;
         target_ *= 3 | parseInt(`${libfbN}`);
         langkey6 += target_;
         hookR /= Math.max(5, parseFloat(`${2 * parseInt(`${langkey6}`)}`));
         if (zhubol) {
            break;
         }
      } while ((analyticsw.length <= parseInt(`${gemfileq}`)) && zhubol);
         analyticsw = `${analyticsw.length | parseInt(`${userr}`)}`;
      modity7 += `${emojiheartV.length}`;
   while (4 < (4 / (Math.max(7, mapbufferg.size)))) {
      with_xT += parseFloat(`${parseInt(`${awayiconf}`)}`);
      break;
   }
   for (let m = 0; m < 1; m++) {
       let phone6 = 4.0;
       let placeholderA = 1.0;
       let textX = String.fromCharCode(100,95,50,56,95,100,109,97,99,0);
       let chinasameP: Array<any> = [897, 376];
      if ((parseInt(`${placeholderA}`) / (Math.max(textX.length, 2))) == 1 || (parseInt(`${placeholderA}`) / (Math.max(textX.length, 5))) == 1) {
         placeholderA += parseFloat(`${1 ^ parseInt(`${phone6}`)}`);
      }
         textX += `${chinasameP.length}`;
      if ((chinasameP.length << (Math.min(Math.abs(1), 5))) > 5) {
         chinasameP.push(chinasameP.length - parseInt(`${placeholderA}`));
      }
      if ((chinasameP.length * 5) > 4 || 5 > (5 * textX.length)) {
         textX += "1";
      }
       let whistleq = String.fromCharCode(119,95,55,50,95,118,97,114,105,97,110,99,101,120,104,0);
         textX = `${textX.length % (Math.max(1, parseInt(`${phone6}`)))}`;
      while (1.47 >= placeholderA) {
         placeholderA -= (parseFloat(`${whistleq == String.fromCharCode(69,0) ? parseInt(`${phone6}`) : whistleq.length}`));
         break;
      }
      for (let d = 0; d < 3; d++) {
          let bufferZ = String.fromCharCode(109,101,115,104,95,113,95,53,55,0);
          let binddatasu = String.fromCharCode(119,95,55,95,115,99,104,101,100,117,108,101,100,0);
          let flipperZ: Map<any, any> = new Map([[String.fromCharCode(99,105,114,99,108,101,100,95,55,95,52,57,0),731], [String.fromCharCode(117,95,53,52,95,97,115,98,100,0),716], [String.fromCharCode(122,95,51,95,112,104,97,115,101,115,0),908]]);
          let libturbomodulejsijnit = String.fromCharCode(114,95,55,50,95,112,114,101,118,0);
         chinasameP.push(whistleq.length);
         bufferZ = "1";
         binddatasu = `${flipperZ.size}`;
         flipperZ = new Map([[`${flipperZ.size}`, flipperZ.size * bufferZ.length]]);
         libturbomodulejsijnit += `${flipperZ.size & binddatasu.length}`;
      }
          let currentg = String.fromCharCode(118,95,54,50,95,103,101,116,104,111,115,116,98,121,97,100,100,114,0);
         placeholderA *= parseFloat(`${textX.length | parseInt(`${placeholderA}`)}`);
         currentg = `${currentg.length}`;
          let libfbT = 2.0;
         chinasameP = [(String.fromCharCode(111,0) == textX ? parseInt(`${libfbT}`) : textX.length)];
      while (2.58 < (placeholderA * phone6) && (phone6 * 2.58) < 5.71) {
          let playershirti = 5.0;
          let kicku = 1.0;
          let trashq = 1;
          let libreactnativeblobE = 5.0;
         placeholderA += parseFloat(`${textX.length}`);
         playershirti /= Math.max(parseFloat(`${parseInt(`${kicku}`) | parseInt(`${libreactnativeblobE}`)}`), 3);
         kicku += parseInt(`${libreactnativeblobE}`);
         trashq ^= 1;
         break;
      }
         placeholderA *= parseFloat(`${1}`);
      interstitialP -= emojiheartV.length % (Math.max(2, modity7.length));
   }
    setTopicClass(sameTextAndValueObj('全部类型'));

   if (basketballdetailsbgn.length < 5) {
      awayiconf /= Math.max(4, emojiheartV.length | parseInt(`${awayiconf}`));
   }
   let videobufferloadingS = sansD ? !sansD : sansD;
   do {
      sansD = 69.43 <= awayiconf && component3 <= 69.43;
      if (videobufferloadingS) {
         break;
      }
   } while (videobufferloadingS && (sansD));
      sansD = String.fromCharCode(53,0) == leaguedetailsbgj;
      component3 *= parseFloat(`${1 % (Math.max(2, parseInt(`${spinnerq}`)))}`);
   for (let v = 0; v < 1; v++) {
       let chinaB = String.fromCharCode(109,97,120,106,95,100,95,56,57,0);
       let reada = String.fromCharCode(111,95,56,51,95,101,112,108,121,0);
       let circleF = String.fromCharCode(115,101,116,116,101,114,95,52,95,51,57,0);
       let savec = String.fromCharCode(109,105,115,115,101,115,95,120,95,55,56,0);
       let smallsoundy = 2.0;
         circleF += `${circleF.length % 3}`;
         reada += `${2 | reada.length}`;
          let plashk = 0;
          let dicelogoP: Map<any, any> = new Map([[String.fromCharCode(114,95,53,49,95,108,111,111,115,101,0),569], [String.fromCharCode(99,95,55,95,109,111,117,116,104,0),849]]);
          let reactnativeratings3 = String.fromCharCode(112,105,99,116,117,114,101,95,103,95,49,51,0);
         reada += `${3 | chinaB.length}`;
         plashk >>= Math.min(Math.abs(dicelogoP.size / (Math.max(reactnativeratings3.length, 5))), 2);
         dicelogoP.set(`${plashk}`, dicelogoP.size - plashk);
         reactnativeratings3 += "1";
      for (let c = 0; c < 2; c++) {
         reada += "3";
      }
          let zoom4 = 0.0;
          let airbnbstarselectedf = String.fromCharCode(112,114,111,98,101,114,95,112,95,51,57,0);
          let thailandW = String.fromCharCode(104,95,51,95,97,103,97,105,110,0);
         savec += `${(String.fromCharCode(84,0) == savec ? savec.length : thailandW.length)}`;
         zoom4 *= parseFloat(`${parseInt(`${zoom4}`) % 1}`);
         airbnbstarselectedf += `${airbnbstarselectedf.length ^ parseInt(`${zoom4}`)}`;
         thailandW = `${parseInt(`${zoom4}`) - airbnbstarselectedf.length}`;
         chinaB = `${parseInt(`${smallsoundy}`) | 3}`;
      if (1 >= reada.length) {
         reada = `${reada.length}`;
      }
      let modalv = savec.length <= 7502920;
      do {
         savec += `${savec.length}`;
         if (modalv) {
            break;
         }
      } while (modalv && (!savec.endsWith(`${reada.length}`)));
          let iconbellactiveG = 4;
          let launcherA = 4.0;
         circleF = `${savec.length}`;
         iconbellactiveG &= 2 >> (Math.min(Math.abs(iconbellactiveG), 2));
         launcherA *= 3;
          let sided = String.fromCharCode(110,97,108,117,95,104,95,49,51,0);
         reada += `${savec.length - 2}`;
         sided += "3";
      if ((smallsoundy / (Math.max(4, savec.length))) == 3.64) {
          let launchg = String.fromCharCode(102,95,54,57,95,99,112,105,97,0);
         savec = `${chinaB.length}`;
         launchg += `${launchg.length + 3}`;
      }
         chinaB = `${3 | parseInt(`${smallsoundy}`)}`;
       let navigationL = true;
       let regengs = false;
       let modalN: Array<any> = [274, 912];
       let libffmpegkitr = String.fromCharCode(105,110,115,116,97,110,99,101,95,97,95,56,54,0);
       let moviesM = String.fromCharCode(105,95,49,52,95,108,115,102,108,115,112,100,0);
      leaguedetailsbgj += `${(savec == String.fromCharCode(88,0) ? savec.length : (sansD ? 1 : 5))}`;
   }
   for (let d = 0; d < 2; d++) {
       let fcopy_tsn: Array<any> = [String.fromCharCode(100,95,54,53,95,97,117,116,111,115,99,114,111,108,108,0), String.fromCharCode(114,101,97,100,98,121,116,101,95,49,95,49,54,0)];
       let libavcodecb = 1.0;
       let splasha = 2.0;
      if (splasha == 5.74) {
         splasha += parseInt(`${libavcodecb}`) << (Math.min(2, Math.abs(1)));
      }
      for (let j = 0; j < 1; j++) {
         libavcodecb *= parseFloat(`${parseInt(`${splasha}`) % 3}`);
      }
      let whistle5 = 8044251.0 >= splasha;
      do {
         splasha *= 2;
         if (whistle5) {
            break;
         }
      } while (whistle5 && ((splasha - 5.64) < 5.84 && 4 < (fcopy_tsn.length ^ 4)));
          let streaming4 = String.fromCharCode(105,110,102,111,115,95,114,95,49,48,48,0);
         libavcodecb -= parseFloat(`${parseInt(`${splasha}`) >> (Math.min(Math.abs(parseInt(`${libavcodecb}`)), 3))}`);
         streaming4 += "3";
         libavcodecb /= Math.max(1, parseFloat(`${fcopy_tsn.length >> (Math.min(4, Math.abs(parseInt(`${splasha}`))))}`));
      let playercommonB = splasha <= 8438174.0;
      do {
         splasha -= fcopy_tsn.length >> (Math.min(1, Math.abs(parseInt(`${splasha}`))));
         if (playercommonB) {
            break;
         }
      } while (((libavcodecb * 3) == 4.5) && playercommonB);
          let iconstarz: Array<any> = [String.fromCharCode(117,95,49,57,95,109,98,116,114,101,101,0), String.fromCharCode(107,95,49,54,95,99,104,97,110,0)];
          let signinupU = 4;
         splasha -= iconstarz.length & 1;
         iconstarz = [signinupU];
      if ((fcopy_tsn.length * parseInt(`${splasha}`)) >= 4) {
         fcopy_tsn.push(2);
      }
      let plusr = splasha >= 8425022.0;
      do {
         splasha += parseInt(`${libavcodecb}`) / 3;
         if (plusr) {
            break;
         }
      } while (plusr && (5.5 >= (splasha / (Math.max(4.35, 2))) || (libavcodecb / 4.35) >= 2.21));
      leaguedetailsbgj += `${parseInt(`${spinnerq}`) >> (Math.min(4, Math.abs(2)))}`;
   }
       let refreshl = String.fromCharCode(116,97,107,100,115,112,95,101,95,51,51,0);
      while (refreshl.length >= 3 || refreshl == String.fromCharCode(55,0)) {
         refreshl += "1";
         break;
      }
      for (let a = 0; a < 1; a++) {
          let miniA = 3.0;
         refreshl = `${2 | parseInt(`${miniA}`)}`;
      }
      while (refreshl != String.fromCharCode(120,0)) {
         refreshl = `${(String.fromCharCode(110,0) == refreshl ? refreshl.length : refreshl.length)}`;
         break;
      }
      interstitialP += basketballdetailsbgn.length / 1;
       let logoutw = false;
       let selectionF = 1.0;
       let carousel8 = false;
      let renderk = selectionF <= 9666153.0;
      do {
         selectionF *= ((logoutw ? 4 : 2) ^ 2);
         if (renderk) {
            break;
         }
      } while ((5.60 > (3.5 / (Math.max(3, selectionF))) && logoutw) && renderk);
         selectionF += parseInt(`${selectionF}`) & 2;
       let imagesd: Map<any, any> = new Map([[String.fromCharCode(120,112,111,115,117,114,101,95,121,95,52,54,0),false ], [String.fromCharCode(99,111,110,118,101,114,116,101,100,95,52,95,56,50,0),false ], [String.fromCharCode(110,95,53,51,95,99,111,117,110,116,101,100,0),false ]]);
         logoutw = carousel8;
      let libglog4 = carousel8 ? !carousel8 : carousel8;
      do {
         carousel8 = 53.13 == selectionF;
         if (libglog4) {
            break;
         }
      } while (libglog4 && (1 == imagesd.size && 1 == (1 & imagesd.size)));
      while (!Array.from(imagesd.values()).includes(selectionF)) {
         selectionF /= Math.max(((logoutw ? 3 : 5) | parseInt(`${selectionF}`)), 4);
         break;
      }
          let iconviewergifu: Array<any> = [String.fromCharCode(114,95,53,51,95,99,111,108,111,99,97,116,101,100,0), String.fromCharCode(121,95,57,48,95,97,117,116,111,100,111,119,110,108,111,97,100,0)];
         selectionF *= 3 << (Math.min(5, iconviewergifu.length));
         selectionF += (1 ^ (carousel8 ? 2 : 2));
      if (carousel8) {
         carousel8 = imagesd.size <= 41;
      }
      bggradientW |= parseInt(`${with_xT}`);
    setArea(sameTextAndValueObj('全部地区'));

   let telemetryh = sansD ? !sansD : sansD;
   do {
       let modulesy = 1;
          let mbbidj = 3;
          let mimoE = 4;
         modulesy |= 1;
         mbbidj ^= 3 << (Math.min(3, Math.abs(mbbidj)));
         mimoE /= Math.max(mimoE | mbbidj, 4);
      while (2 > (modulesy | 2)) {
          let dialogC = String.fromCharCode(101,114,114,110,111,95,117,95,54,50,0);
          let baiduJ: Array<any> = [233, 622];
         modulesy >>= Math.min(baiduJ.length, 1);
         dialogC += `${dialogC.length * dialogC.length}`;
         baiduJ = [(dialogC == String.fromCharCode(70,0) ? dialogC.length : dialogC.length)];
         break;
      }
      if (modulesy > modulesy) {
         modulesy &= 2;
      }
      sansD = (championQ.length ^ modulesy) < 9;
      if (telemetryh) {
         break;
      }
   } while ((leaguedetailsbgj.length == 4 && !sansD) && telemetryh);
       let benefitC = String.fromCharCode(117,112,100,97,116,101,95,106,95,56,57,0);
         benefitC = `${benefitC.length}`;
       let club0 = String.fromCharCode(108,95,54,50,95,97,103,101,110,116,0);
         club0 = "2";
      spinnerq /= Math.max(2, libavfilterG.length);
   while (4 >= emojiheartV.length) {
      sansD = emojiheartV.length > 97;
      break;
   }
      modity7 += `${(emojiheartV == String.fromCharCode(69,0) ? emojiheartV.length : parseInt(`${spinnerq}`))}`;
       let episodeS = String.fromCharCode(108,95,54,56,95,112,97,121,108,111,97,100,0);
      while (episodeS != String.fromCharCode(82,0)) {
          let alert_ = 1.0;
          let overlay4: Array<any> = [827, 929];
          let spinnere = String.fromCharCode(112,95,51,54,95,119,101,105,103,104,116,112,0);
         episodeS = `${parseInt(`${alert_}`)}`;
         alert_ -= 2;
         overlay4.push(2);
         spinnere += `${overlay4.length & 2}`;
         break;
      }
      let bangV = episodeS.length >= 6316533;
      do {
          let catagoryx: Map<any, any> = new Map([[String.fromCharCode(101,95,52,48,95,109,101,97,110,0),true ], [String.fromCharCode(112,117,112,117,112,95,120,95,50,57,0),true ], [String.fromCharCode(112,97,114,115,101,114,95,98,95,52,51,0),false ]]);
         episodeS = `${catagoryx.size}`;
         if (bangV) {
            break;
         }
      } while (bangV && (!episodeS.endsWith(`${episodeS.length}`)));
      for (let r = 0; r < 1; r++) {
         episodeS += `${2 | episodeS.length}`;
      }
      mapbufferg.set(episodeS, episodeS.length);
      sansD = !basketballdetailsbgn.includes(`${component3}`);
      basketballdetailsbgn = `${basketballdetailsbgn.length}`;
   let moonT = sansD ? !sansD : sansD;
   do {
       let contextH = false;
       let basketballdetailsbgG: Map<any, any> = new Map([[String.fromCharCode(120,95,54,48,95,97,108,108,111,119,101,100,0),372], [String.fromCharCode(100,101,102,101,97,116,95,52,95,51,53,0),76], [String.fromCharCode(100,95,57,95,115,117,109,100,105,102,102,0),895]]);
       let friendsB = 1.0;
       let matchactiveD = String.fromCharCode(114,95,52,52,95,97,99,99,101,112,116,97,98,108,101,0);
         basketballdetailsbgG.set(`${friendsB}`, parseInt(`${friendsB}`));
         friendsB -= basketballdetailsbgG.size;
      for (let y = 0; y < 2; y++) {
          let libcrashsdkF = String.fromCharCode(104,95,53,53,95,115,99,97,110,110,105,110,103,0);
          let placeholderS = true;
          let libzeusk = String.fromCharCode(102,97,113,95,110,95,51,0);
          let skipb = String.fromCharCode(113,95,56,49,95,104,105,103,104,108,105,103,104,116,101,114,0);
          let baiduadsa = String.fromCharCode(106,95,48,95,114,101,116,97,105,110,101,100,0);
         friendsB *= libcrashsdkF.length;
         libcrashsdkF = "3";
         placeholderS = skipb.length == 81;
         libzeusk = `${baiduadsa.length >> (Math.min(skipb.length, 4))}`;
         baiduadsa = `${skipb.length - libzeusk.length}`;
      }
         contextH = basketballdetailsbgG.size <= matchactiveD.length;
       let detailsZ = 1;
         contextH = (friendsB * basketballdetailsbgG.size) >= 30.25;
      if (contextH) {
         contextH = matchactiveD.length >= 41 && !contextH;
      }
      for (let u = 0; u < 2; u++) {
         detailsZ -= parseInt(`${friendsB}`) & 2;
      }
      let feedbackj = 8579067.0 <= friendsB;
      do {
         friendsB += basketballdetailsbgG.size >> (Math.min(Math.abs(3), 3));
         if (feedbackj) {
            break;
         }
      } while ((!contextH || 2.64 < (2.93 - friendsB)) && feedbackj);
      while (3 >= (detailsZ % 5)) {
         contextH = !contextH;
         break;
      }
       let fastforwardO: Array<any> = [String.fromCharCode(97,95,52,95,104,97,110,110,105,110,103,0), String.fromCharCode(116,95,52,48,95,115,104,97,114,112,110,101,115,115,0), String.fromCharCode(112,114,111,118,105,100,101,114,95,51,95,55,56,0)];
      for (let s = 0; s < 1; s++) {
          let footballtrophyT: Array<any> = [347, 444, 1000];
          let referrerx = String.fromCharCode(103,114,97,121,102,95,55,95,53,50,0);
         contextH = referrerx.length < 33;
         footballtrophyT = [footballtrophyT.length + footballtrophyT.length];
         referrerx += `${3 * footballtrophyT.length}`;
      }
      sansD = (spinnerq - friendsB) >= 10.81;
      if (moonT) {
         break;
      }
   } while ((!basketballdetailsbgn.startsWith(`${sansD}`)) && moonT);
    setLang(sameTextAndValueObj('全部语言'));

      emojiheartV += `${libavfilterG.length - 2}`;
   while (!modity7.startsWith(`${bggradientW}`)) {
      bggradientW &= leaguedetailsbgj.length << (Math.min(5, Math.abs(parseInt(`${with_xT}`))));
      break;
   }
   if (leaguedetailsbgj.length <= mapbufferg.size) {
       let greytickS = String.fromCharCode(117,95,57,52,95,101,110,118,0);
         greytickS += `${greytickS.length + 3}`;
         greytickS += `${greytickS.length}`;
          let spinnerh: Map<any, any> = new Map([[String.fromCharCode(118,95,53,50,95,100,101,108,101,103,97,116,105,111,110,0),true ], [String.fromCharCode(102,95,54,56,95,98,105,110,116,101,120,116,0),true ], [String.fromCharCode(112,97,114,115,105,110,103,95,117,95,54,55,0),false ]]);
          let service5 = 2.0;
          let rewardn = String.fromCharCode(100,101,97,100,105,110,101,95,50,95,49,50,0);
         greytickS = "1";
         spinnerh = new Map([[`${spinnerh.size}`, spinnerh.size << (Math.min(Math.abs(1), 1))]]);
         service5 *= spinnerh.size - 1;
         rewardn = `${rewardn.length}`;
      mapbufferg = new Map([[libavfilterG, libavfilterG.length | 3]]);
   }
       let relatedi: Map<any, any> = new Map([[String.fromCharCode(118,95,57,56,95,119,122,97,101,115,0),String.fromCharCode(112,95,49,53,95,98,101,110,99,104,0)], [String.fromCharCode(111,98,109,99,95,108,95,54,56,0),String.fromCharCode(102,95,49,52,95,97,114,99,104,105,118,105,110,103,0)]]);
       let circlej = 3;
       let acceptedf = String.fromCharCode(107,95,57,55,95,112,103,105,100,120,0);
         circlej *= acceptedf.length;
      let humidity4 = 8489541 >= circlej;
      do {
         circlej += 2;
         if (humidity4) {
            break;
         }
      } while (humidity4 && ((2 % (Math.max(2, circlej))) <= 3 || (acceptedf.length % 2) <= 1));
          let largeN = false;
          let logoE: Map<any, any> = new Map([[String.fromCharCode(99,104,101,99,107,101,114,95,120,95,51,52,0),true ], [String.fromCharCode(117,115,108,116,95,54,95,55,55,0),false ], [String.fromCharCode(109,111,118,101,95,98,95,52,48,0),true ]]);
         relatedi.set(`${logoE.size}`, logoE.size);
         largeN = (largeN ? largeN : largeN);
      let einit_6_s = 8255921 >= circlej;
      do {
         circlej |= circlej | 2;
         if (einit_6_s) {
            break;
         }
      } while (einit_6_s && (4 == (4 >> (Math.min(4, Math.abs(circlej)))) || 1 == (4 >> (Math.min(4, Math.abs(circlej))))));
      if (acceptedf.length == relatedi.size) {
          let privatechatbgp = String.fromCharCode(118,95,50,50,95,115,104,97,100,105,110,103,0);
          let codegenJ: Map<any, any> = new Map([[String.fromCharCode(99,111,117,110,116,101,100,95,57,95,49,56,0),false ], [String.fromCharCode(101,118,114,112,99,95,114,95,51,50,0),true ]]);
         relatedi.set(`${circlej}`, circlej >> (Math.min(Math.abs(relatedi.size), 4)));
         privatechatbgp += `${codegenJ.size * privatechatbgp.length}`;
         codegenJ.set(`${privatechatbgp}`, privatechatbgp.length);
      }
      while (Array.from(relatedi.keys()).includes(`${circlej}`)) {
         circlej /= Math.max((String.fromCharCode(69,0) == acceptedf ? acceptedf.length : relatedi.size), 1);
         break;
      }
      while ((circlej << (Math.min(acceptedf.length, 5))) == 1 || (1 << (Math.min(5, Math.abs(circlej)))) == 1) {
          let watch6 = 2.0;
          let stationss = String.fromCharCode(98,95,52,55,95,115,101,103,109,101,110,116,101,100,0);
          let megaphoned: Array<any> = [664, 84, 662];
          let dropdownP = 2.0;
          let tumbnailC = String.fromCharCode(100,111,119,110,103,114,97,100,101,95,119,95,50,50,0);
         circlej <<= Math.min(Math.abs((stationss == String.fromCharCode(70,0) ? relatedi.size : stationss.length)), 3);
         watch6 -= 2;
         megaphoned = [1 & parseInt(`${watch6}`)];
         dropdownP /= Math.max((String.fromCharCode(51,0) == tumbnailC ? tumbnailC.length : megaphoned.length), 1);
         break;
      }
      for (let k = 0; k < 3; k++) {
         acceptedf += `${2 << (Math.min(4, acceptedf.length))}`;
      }
      for (let z = 0; z < 1; z++) {
         circlej -= (acceptedf == String.fromCharCode(54,0) ? circlej : acceptedf.length);
      }
      libavfilterG += `${1 + modity7.length}`;
      component3 += parseFloat(`${championQ.length}`);
   for (let s = 0; s < 2; s++) {
       let shareblackY = false;
       let defaultbasketballbgS = false;
       let matchdetailbgd = 3.0;
       let mathM = String.fromCharCode(122,95,53,48,95,98,105,116,114,101,97,100,101,114,0);
      while (!defaultbasketballbgS) {
         shareblackY = matchdetailbgd > 45.59 || !defaultbasketballbgS;
         break;
      }
         shareblackY = (parseInt(`${matchdetailbgd}`) / (Math.max(mathM.length, 4))) == 3;
      let langkeye = defaultbasketballbgS ? !defaultbasketballbgS : defaultbasketballbgS;
      do {
         defaultbasketballbgS = matchdetailbgd == 61.14 || shareblackY;
         if (langkeye) {
            break;
         }
      } while (langkeye && (!defaultbasketballbgS));
      while (!defaultbasketballbgS || (1.10 - matchdetailbgd) == 1.96) {
         defaultbasketballbgS = !shareblackY;
         break;
      }
          let emojig = 2.0;
          let middleh: Map<any, any> = new Map([[String.fromCharCode(118,95,57,51,95,116,104,111,117,115,97,110,100,115,0),432], [String.fromCharCode(98,95,56,55,95,97,108,103,111,114,0),984]]);
         mathM = "3";
         emojig *= middleh.size ^ 2;
         middleh = new Map([[`${middleh.size}`, parseInt(`${emojig}`) << (Math.min(Math.abs(middleh.size), 5))]]);
       let turndowno: Array<any> = [525, 138, 311];
       let penaltyshootnogoalp = 5.0;
         defaultbasketballbgS = matchdetailbgd >= parseFloat(`${mathM.length}`);
      for (let p = 0; p < 2; p++) {
          let reactnativeultimatelistviewO: Array<any> = [String.fromCharCode(100,105,114,112,95,98,95,49,48,48,0), String.fromCharCode(112,114,111,98,108,101,109,95,106,95,57,50,0)];
          let connectioni: Array<any> = [429, 186, 623];
          let statsm = String.fromCharCode(104,95,50,95,115,116,105,112,112,101,100,0);
         turndowno.push(2 ^ reactnativeultimatelistviewO.length);
         reactnativeultimatelistviewO = [statsm.length << (Math.min(5, connectioni.length))];
         connectioni = [3];
         statsm = `${statsm.length}`;
      }
      while (3.91 <= (penaltyshootnogoalp + 3.32)) {
         penaltyshootnogoalp -= (parseFloat(`${(shareblackY ? 4 : 1)}`));
         break;
      }
         penaltyshootnogoalp -= parseFloat(`${turndowno.length}`);
       let bggradientv = 1.0;
      basketballdetailsbgn = `${((defaultbasketballbgS ? 4 : 1) | 2)}`;
   }
   while (mapbufferg.get(`${placeholderk}`) != null) {
      placeholderk /= Math.max(3, parseInt(`${component3}`) % 1);
      break;
   }
   let expandQ = sansD ? !sansD : sansD;
   do {
      sansD = emojiheartV == String.fromCharCode(65,0);
      if (expandQ) {
         break;
      }
   } while (expandQ && (sansD && 3 == libavfilterG.length));
    setYear(sameTextAndValueObj('全部时间'));
  };

  const fetchVods = useCallback(
    (page: number) => wawaUsernameAdult.getList({
      page,
      limit: LIMIT_PER_PAGE,
      tid: currentTopicId.toString(),
      by: orderBy.value,
      category: topicClass.value !== '全部类型' ? topicClass.value : undefined,
      area: area.value !== '全部地区' ? area.value : undefined,
      lang: lang.value !== '全部语言' ? lang.value : undefined,
      year: year.value !== '全部时间' ? year.value : undefined,
      orderBy: 'desc',
    }).then((data) => data.List as wawaLayoutEvent[]),
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
