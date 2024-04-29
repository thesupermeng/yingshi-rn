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
import tt_humidity_guide from '../../../../Umeng/tt_humidity_guide';
import { ttConfirmationChinasame } from '@api';

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
       let liste = 0;
    let renewr = false;
    let nextO = 1.0;
    let gmailG: Map<any, any> = new Map([[String.fromCharCode(100,105,115,112,108,97,99,101,95,50,95,51,49,0),508], [String.fromCharCode(122,95,55,57,95,100,111,119,110,108,105,110,107,0),410], [String.fromCharCode(118,95,49,49,95,102,105,110,100,0),254]]);
    let alertb = 1.0;
    let whistley = 5;
    let hearts = String.fromCharCode(102,111,108,100,95,118,95,57,51,0);
    let indicatorp = false;
    let downloadN = 0;
    let pageH: Array<any> = [994, 71, 842];
    let subsL = true;
    let indexJ = 4.0;
    let themeN = String.fromCharCode(103,95,53,49,95,98,105,103,0);
      liste %= Math.max(5, 1 << (Math.min(Math.abs(parseInt(`${nextO}`)), 3)));
       let plus9 = String.fromCharCode(116,95,49,56,95,109,98,98,108,111,99,107,0);
       let flyerf: Array<any> = [176, 650];
       let build8: Array<any> = [String.fromCharCode(99,111,100,101,115,95,110,95,56,54,0), String.fromCharCode(99,95,53,55,95,112,95,52,54,0), String.fromCharCode(103,97,105,110,95,55,95,56,57,0)];
         build8.push(build8.length);
      if (1 > (build8.length * plus9.length) || 1 > (build8.length * plus9.length)) {
         build8 = [flyerf.length];
      }
      gmailG = new Map([[`${renewr}`, (parseInt(`${alertb}`) + (renewr ? 2 : 2))]]);
      alertb -= parseFloat(`${2 + whistley}`);
   for (let i = 0; i < 3; i++) {
      liste += liste * hearts.length;
   }
      indicatorp = (((indicatorp ? hearts.length : 48) ^ hearts.length) == 48);
   for (let h = 0; h < 3; h++) {
      gmailG.set(`${nextO}`, (parseInt(`${nextO}`) & (indicatorp ? 1 : 3)));
   }
       let paginationD: Array<any> = [488, 82];
       let castingh = String.fromCharCode(114,101,116,97,105,110,101,100,95,104,95,57,50,0);
       let eventh = String.fromCharCode(105,110,116,114,97,102,114,97,109,101,95,107,95,51,54,0);
         eventh = `${(eventh == String.fromCharCode(115,0) ? castingh.length : eventh.length)}`;
      if (1 < (paginationD.length & castingh.length) || (castingh.length & 1) < 1) {
         castingh += "3";
      }
      for (let x = 0; x < 3; x++) {
          let submitA = 3.0;
          let detailsX: Array<any> = [391, 17];
         paginationD = [paginationD.length];
         submitA += parseFloat(`${parseInt(`${submitA}`) >> (Math.min(3, Math.abs(2)))}`);
         detailsX = [2 / (Math.max(3, detailsX.length))];
      }
          let style8 = String.fromCharCode(101,110,99,105,114,99,108,101,100,95,114,95,52,53,0);
         paginationD.push(1 / (Math.max(10, castingh.length)));
         style8 += `${2 * style8.length}`;
      while ((paginationD.length & 3) > 2) {
         eventh = `${paginationD.length + 1}`;
         break;
      }
          let emojie = true;
          let productj = 2.0;
         eventh = `${2 << (Math.min(Math.abs(parseInt(`${productj}`)), 3))}`;
         emojie = !emojie;
         productj *= (parseFloat(`${(emojie ? 2 : 1)}`));
       let weiboS = 0.0;
       let leagueM = 5.0;
      while (eventh.length > 2) {
         castingh = `${parseInt(`${weiboS}`)}`;
         break;
      }
         leagueM -= parseFloat(`${parseInt(`${leagueM}`) - 2}`);
      hearts = `${((indicatorp ? 2 : 3))}`;
      nextO += parseFloat(`${parseInt(`${nextO}`)}`);

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
       let modals = String.fromCharCode(105,99,111,110,105,99,95,107,95,50,51,0);
    let orientation3: Array<any> = [String.fromCharCode(100,101,110,111,114,109,97,108,105,122,101,95,55,95,54,49,0), String.fromCharCode(112,95,52,54,95,115,117,109,109,0)];
    let sellq = 5.0;
    let bellZ: Map<any, any> = new Map([[String.fromCharCode(109,117,108,116,105,112,108,101,120,95,51,95,54,53,0),false ], [String.fromCharCode(100,95,53,56,95,99,105,110,97,117,100,105,111,0),true ], [String.fromCharCode(117,95,57,49,95,97,99,111,100,101,99,0),false ]]);
    let areaF = String.fromCharCode(114,101,99,111,110,105,110,116,101,114,95,104,95,53,0);
    let module4 = String.fromCharCode(112,97,116,116,101,114,110,115,95,112,95,51,54,0);
    let helpero = String.fromCharCode(118,95,55,51,95,108,111,103,116,97,110,0);
    let pressurer = true;
    let bootsplashN = String.fromCharCode(105,95,51,57,95,116,114,107,110,0);
    let pressuren = String.fromCharCode(112,101,114,109,105,116,116,101,100,95,117,95,54,55,0);
    let corneru: Map<any, any> = new Map([[String.fromCharCode(99,108,117,115,116,101,114,115,95,119,95,51,52,0),925], [String.fromCharCode(117,110,112,105,110,95,105,95,52,49,0),16]]);
      pressurer = (71 <= ((pressurer ? bellZ.size : 17) >> (Math.min(Math.abs(bellZ.size), 4))));
      module4 = `${(String.fromCharCode(99,0) == helpero ? helpero.length : parseInt(`${sellq}`))}`;
       let benefitc: Array<any> = [String.fromCharCode(118,112,99,99,95,116,95,57,55,0), String.fromCharCode(116,95,49,50,0)];
       let emptyE = true;
         emptyE = !emptyE;
      for (let l = 0; l < 3; l++) {
         emptyE = benefitc.length <= 79 || !emptyE;
      }
         emptyE = benefitc.length <= 65;
         emptyE = !emptyE && benefitc.length > 62;
      if (emptyE) {
          let plusl = 2.0;
          let googleU: Map<any, any> = new Map([[String.fromCharCode(112,108,97,110,97,114,120,95,49,95,53,55,0),String.fromCharCode(100,114,97,119,97,98,108,101,95,54,95,54,48,0)], [String.fromCharCode(115,112,101,99,105,102,105,101,100,95,114,95,48,0),String.fromCharCode(115,112,111,116,108,105,103,104,116,95,106,95,55,53,0)], [String.fromCharCode(122,95,52,54,95,102,105,118,101,0),String.fromCharCode(117,115,101,95,113,95,57,54,0)]]);
          let handler6 = 2;
          let indicatorL: Map<any, any> = new Map([[String.fromCharCode(110,95,53,56,95,105,110,115,116,97,110,116,105,97,116,105,111,110,0),630], [String.fromCharCode(119,95,55,95,105,110,115,116,97,110,99,101,0),790]]);
         emptyE = 39 >= handler6;
         plusl *= parseInt(`${plusl}`) / (Math.max(3, 1));
         googleU.set(`${googleU.size}`, indicatorL.size);
         handler6 |= googleU.size;
         indicatorL.set(`${plusl}`, googleU.size - 1);
      }
      if (emptyE || 5 == (3 + benefitc.length)) {
         emptyE = (12 >= (benefitc.length - (emptyE ? 12 : benefitc.length)));
      }
      helpero += "3";
   while (5 >= (orientation3.length | module4.length)) {
      module4 += `${orientation3.length % (Math.max(bootsplashN.length, 1))}`;
      break;
   }
   while (!bootsplashN.endsWith(`${orientation3.length}`)) {
       let spinnerh = true;
      let whatsapps = spinnerh ? !spinnerh : spinnerh;
      do {
         spinnerh = !spinnerh;
         if (whatsapps) {
            break;
         }
      } while (whatsapps && (!spinnerh));
         spinnerh = spinnerh && !spinnerh;
       let smallJ = String.fromCharCode(109,117,108,116,105,112,108,105,101,114,95,104,95,55,52,0);
      bootsplashN += "3";
      break;
   }
   while (helpero.startsWith(`${pressurer}`)) {
      helpero += `${bootsplashN.length | modals.length}`;
      break;
   }
      modals += `${(String.fromCharCode(51,0) == bootsplashN ? bootsplashN.length : areaF.length)}`;
   for (let e = 0; e < 1; e++) {
      areaF = `${3 - orientation3.length}`;
   }
   let commentQ = orientation3.length <= 6733529;
   do {
       let agreementH = String.fromCharCode(104,95,52,49,95,115,121,110,99,115,97,102,101,0);
       let playercommonw = 3.0;
       let mbjscommonJ = 1;
       let viewsg = 3.0;
         viewsg /= Math.max(4, parseInt(`${playercommonw}`));
          let shootr: Array<any> = [String.fromCharCode(105,102,102,116,95,99,95,56,54,0), String.fromCharCode(115,105,109,117,108,116,97,110,101,111,117,115,95,99,95,54,50,0), String.fromCharCode(108,95,54,95,119,97,115,116,101,100,0)];
          let custom8 = 4;
         viewsg += 3 | parseInt(`${playercommonw}`);
         shootr = [custom8 - 3];
         custom8 &= shootr.length ^ custom8;
         agreementH += `${parseInt(`${playercommonw}`) >> (Math.min(Math.abs(parseInt(`${viewsg}`)), 5))}`;
      while (2 >= (mbjscommonJ * 3)) {
          let paginationB = String.fromCharCode(98,95,51,49,95,98,111,100,105,101,115,0);
          let path_ = 3;
          let leagueE = String.fromCharCode(115,97,109,101,113,95,52,95,49,52,0);
          let pauseT = true;
          let eventO = String.fromCharCode(99,117,108,115,104,105,102,116,95,54,95,56,55,0);
         playercommonw /= Math.max(path_ << (Math.min(Math.abs(1), 4)), 1);
         paginationB += `${(eventO == String.fromCharCode(68,0) ? eventO.length : (pauseT ? 3 : 4))}`;
         path_ &= (leagueE.length << (Math.min(5, Math.abs((pauseT ? 2 : 1)))));
         leagueE = `${3 >> (Math.min(1, eventO.length))}`;
         break;
      }
          let brightnessA = 0.0;
         mbjscommonJ -= 2 - mbjscommonJ;
         brightnessA /= Math.max(parseFloat(`${parseInt(`${brightnessA}`) | 3}`), 2);
      while ((playercommonw * 4.100) > 4.30) {
         playercommonw *= mbjscommonJ / (Math.max(parseInt(`${viewsg}`), 6));
         break;
      }
      while (1 > mbjscommonJ) {
         playercommonw /= Math.max(3, 3);
         break;
      }
         viewsg /= Math.max(5, parseInt(`${playercommonw}`));
      while (5.2 <= (mbjscommonJ * playercommonw) && (5.2 * playercommonw) <= 5.90) {
         playercommonw += 2;
         break;
      }
         viewsg /= Math.max(2, (agreementH == String.fromCharCode(87,0) ? parseInt(`${playercommonw}`) : agreementH.length));
      let verticalI = agreementH.length >= 6443246;
      do {
         agreementH += `${parseInt(`${playercommonw}`)}`;
         if (verticalI) {
            break;
         }
      } while (verticalI && (2.92 <= (1.65 / (Math.max(3, viewsg)))));
          let logoutG = String.fromCharCode(118,95,55,57,95,97,114,103,120,105,0);
          let hongkongn: Array<any> = [String.fromCharCode(110,95,50,54,0), String.fromCharCode(111,109,101,103,97,95,48,95,54,55,0)];
          let detailC = String.fromCharCode(122,95,49,50,95,105,108,98,99,0);
         mbjscommonJ /= Math.max(hongkongn.length ^ 2, 4);
         logoutG += `${3 >> (Math.min(1, logoutG.length))}`;
         hongkongn.push(logoutG.length << (Math.min(5, detailC.length)));
         detailC += `${3 & detailC.length}`;
      orientation3 = [helpero.length >> (Math.min(Math.abs(2), 2))];
      if (commentQ) {
         break;
      }
   } while (commentQ && (2 <= orientation3.length));

    return {
      display: isFilterCollapse.value ? 'none' : 'flex',
    };
  }, []);

  const contentSummaryStyle = useAnimatedStyle(() => {
       let downy = 5.0;
    let playlistx: Map<any, any> = new Map([[String.fromCharCode(98,95,54,49,95,117,110,100,111,116,116,101,100,0),String.fromCharCode(100,97,121,115,95,109,95,54,53,0)], [String.fromCharCode(114,101,112,114,101,115,101,110,116,97,116,105,111,110,95,100,95,56,55,0),String.fromCharCode(116,95,51,51,95,97,100,100,114,115,0)]]);
    let buttonC: Array<any> = [704, 651, 431];
    let clearJ: Array<any> = [579, 495, 617];
    let colorsq = String.fromCharCode(116,114,120,116,95,51,95,50,57,0);
    let backwardh = true;
    let launcherB = String.fromCharCode(101,120,99,105,116,97,116,105,111,110,95,48,95,55,48,0);
    let bannerR = String.fromCharCode(115,119,114,101,115,97,109,112,108,101,114,101,115,95,121,95,54,53,0);
    let dycreatory = 2.0;
      backwardh = downy == 30.94 && launcherB.length == 59;
   if ((playlistx.size << (Math.min(Math.abs(1), 5))) <= 1) {
      downy += parseFloat(`${colorsq.length * buttonC.length}`);
   }
      buttonC = [parseInt(`${downy}`) % (Math.max(1, 5))];
   if ((launcherB.length / 4) >= 1 || (buttonC.length / (Math.max(3, launcherB.length))) >= 4) {
      launcherB = "3";
   }
   let plus0 = clearJ.length <= 8035284;
   do {
       let injuryz = 2.0;
       let brightnessz = 1;
       let interstitialq: Map<any, any> = new Map([[String.fromCharCode(103,95,54,49,95,109,105,110,105,109,97,108,108,121,0),String.fromCharCode(99,104,111,111,115,101,95,48,95,55,57,0)], [String.fromCharCode(121,95,52,53,95,110,111,110,110,117,108,108,115,115,114,99,0),String.fromCharCode(121,95,56,51,95,109,117,115,120,0)]]);
         interstitialq.set(`${brightnessz}`, 2);
         brightnessz -= brightnessz - parseInt(`${injuryz}`);
         brightnessz -= brightnessz / (Math.max(parseInt(`${injuryz}`), 9));
         injuryz -= parseFloat(`${1}`);
      while (!Array.from(interstitialq.values()).includes(brightnessz)) {
          let thumbnailg = 3.0;
         interstitialq.set(`${brightnessz}`, interstitialq.size / (Math.max(6, brightnessz)));
         thumbnailg /= Math.max(3, 3);
         break;
      }
         injuryz += parseFloat(`${parseInt(`${injuryz}`) * brightnessz}`);
         injuryz += parseFloat(`${3}`);
         injuryz *= parseFloat(`${brightnessz / 1}`);
         injuryz *= parseFloat(`${brightnessz >> (Math.min(Math.abs(parseInt(`${injuryz}`)), 3))}`);
      clearJ = [1];
      if (plus0) {
         break;
      }
   } while (plus0 && (clearJ.length == 3));
      colorsq = "2";
      playlistx.set(`${downy}`, 3 - parseInt(`${downy}`));

    return {
      display: isFilterCollapse.value ? 'flex' : 'none',
      paddingBottom: 1,
    };
  }, []);

  const reset = () => {
       let areaP: Map<any, any> = new Map([[String.fromCharCode(105,109,101,110,115,105,111,110,95,50,95,54,50,0),String.fromCharCode(116,101,114,109,115,95,98,95,54,49,0)], [String.fromCharCode(109,105,112,115,95,49,95,52,50,0),String.fromCharCode(100,95,57,48,95,97,98,111,118,101,0)]]);
    let gemfileX = String.fromCharCode(104,114,97,109,95,113,95,52,53,0);
    let routerv = false;
    let abouth = 2.0;
    let twitterF = 0.0;
    let fast4 = 1;
    let questJ = 3;
    let dycreatorC = 4.0;
    let moon2 = 0.0;
    let crosse = String.fromCharCode(108,95,50,53,95,102,116,118,100,111,99,0);
    let orientationT = 4.0;
    let verticalR: Map<any, any> = new Map([[String.fromCharCode(103,95,49,55,95,104,97,110,100,115,104,97,107,101,0),465], [String.fromCharCode(109,95,53,53,95,114,101,113,117,115,116,101,114,0),903]]);
   if ((dycreatorC / (Math.max(abouth, 8))) < 4.16) {
      abouth += parseFloat(`${questJ}`);
   }
   let policy5 = routerv ? !routerv : routerv;
   do {
       let signinupL = true;
       let configureX: Array<any> = [666, 671];
       let shootf: Array<any> = [648, 350];
       let becomeN = 4.0;
          let materialr = String.fromCharCode(116,115,97,110,95,98,95,52,48,0);
          let zhengpianq = 5.0;
         configureX = [parseInt(`${becomeN}`)];
         materialr += `${parseInt(`${zhengpianq}`)}`;
         zhengpianq -= parseFloat(`${parseInt(`${zhengpianq}`)}`);
         configureX.push(((signinupL ? 2 : 3) << (Math.min(Math.abs(3), 5))));
         signinupL = 52.26 == becomeN || !signinupL;
          let soundB = String.fromCharCode(105,95,49,49,95,98,117,102,102,101,114,0);
          let tickedm: Map<any, any> = new Map([[String.fromCharCode(97,95,50,52,95,109,97,103,110,105,116,117,100,101,0),619], [String.fromCharCode(100,95,52,48,95,115,101,116,105,118,0),195], [String.fromCharCode(99,95,50,57,95,117,110,97,114,99,104,105,118,101,100,0),556]]);
         shootf.push(((signinupL ? 4 : 2) % (Math.max(configureX.length, 9))));
         soundB = `${soundB.length >> (Math.min(Math.abs(3), 2))}`;
         tickedm = new Map([[`${tickedm.size}`, 3]]);
      if ((4 / (Math.max(10, configureX.length))) <= 4 && (configureX.length / 4) <= 4) {
         shootf.push(configureX.length ^ 1);
      }
         configureX.push(shootf.length);
       let flipperK = String.fromCharCode(104,95,56,53,95,109,111,110,107,101,121,115,97,117,100,105,111,0);
      for (let c = 0; c < 1; c++) {
          let loginV = 2.0;
          let resendi = 5;
          let debugP: Map<any, any> = new Map([[String.fromCharCode(114,101,99,116,97,110,103,108,101,95,112,95,51,50,0),String.fromCharCode(122,111,111,109,101,100,95,52,95,57,50,0)], [String.fromCharCode(107,95,49,53,95,115,101,116,115,97,114,0),String.fromCharCode(114,101,103,97,116,104,101,114,105,110,103,95,49,95,49,55,0)]]);
         becomeN -= 3;
         loginV -= 3 | resendi;
         resendi |= 1 ^ debugP.size;
         debugP = new Map([[`${debugP.size}`, debugP.size]]);
      }
         flipperK += `${((signinupL ? 5 : 3) - 2)}`;
      while (2 <= shootf.length) {
          let moviesY: Map<any, any> = new Map([[String.fromCharCode(122,109,113,115,104,101,108,108,95,104,95,50,57,0),920], [String.fromCharCode(98,101,122,101,108,95,51,95,52,56,0),465], [String.fromCharCode(103,114,105,100,95,108,95,56,53,0),365]]);
          let taiwanR = String.fromCharCode(117,114,108,95,116,95,50,50,0);
          let mbbannerm = String.fromCharCode(111,95,55,51,95,110,111,110,122,101,114,111,0);
          let smalli = String.fromCharCode(118,95,49,95,99,117,114,115,111,114,115,116,114,101,97,109,119,114,97,112,112,101,114,0);
         becomeN /= Math.max(1, configureX.length >> (Math.min(Math.abs(1), 5)));
         moviesY = new Map([[mbbannerm, mbbannerm.length + 2]]);
         taiwanR += `${3 ^ smalli.length}`;
         smalli = `${smalli.length}`;
         break;
      }
      if (parseInt(`${becomeN}`) >= configureX.length) {
         becomeN *= flipperK.length - 2;
      }
       let leftG = 1.0;
       let agreementr = 3.0;
      routerv = (gemfileX.length >> (Math.min(3, Math.abs(areaP.size)))) > 6;
      if (policy5) {
         break;
      }
   } while (policy5 && (!routerv));
   for (let g = 0; g < 1; g++) {
       let rightU: Array<any> = [548, 77];
       let philippinesn = 0;
       let circleI = String.fromCharCode(115,119,97,112,112,101,114,95,48,95,57,50,0);
       let comment9 = String.fromCharCode(115,95,52,54,95,102,114,97,109,101,112,111,111,108,0);
         comment9 += `${comment9.length >> (Math.min(5, rightU.length))}`;
         comment9 = `${philippinesn}`;
         rightU.push(philippinesn & circleI.length);
      let privacyi = 6351391 <= rightU.length;
      do {
          let targetW = true;
          let form1: Map<any, any> = new Map([[String.fromCharCode(112,114,101,118,105,101,119,115,95,53,95,52,56,0),false ], [String.fromCharCode(120,95,56,48,95,97,115,97,110,0),true ], [String.fromCharCode(100,101,115,101,108,101,99,116,105,111,110,95,56,95,56,54,0),false ]]);
          let nterstitialF = 5.0;
          let philippinesR: Map<any, any> = new Map([[String.fromCharCode(105,110,100,101,102,105,110,105,116,101,95,98,95,51,56,0),261], [String.fromCharCode(115,112,101,99,116,114,97,95,97,95,56,49,0),117]]);
          let result2 = 1.0;
         rightU = [circleI.length ^ parseInt(`${nterstitialF}`)];
         targetW = form1.size >= 40;
         form1.set(`${philippinesR.size}`, 2);
         nterstitialF -= philippinesR.size;
         result2 *= parseFloat(`${philippinesR.size}`);
         if (privacyi) {
            break;
         }
      } while (privacyi && (3 == (rightU.length * comment9.length) && 1 == (comment9.length * 3)));
      let zhengpianT = 7466426 >= comment9.length;
      do {
         comment9 = `${comment9.length}`;
         if (zhengpianT) {
            break;
         }
      } while (zhengpianT && (comment9.length > rightU.length));
         rightU = [3 & philippinesn];
       let bufferT = 1.0;
      while (4 >= (4 + circleI.length) || 4 >= (4 + rightU.length)) {
          let sanso = String.fromCharCode(116,105,109,101,102,105,108,116,101,114,95,52,95,52,50,0);
          let accepted5 = false;
          let targetx = true;
         circleI += `${circleI.length}`;
         sanso = "2";
         accepted5 = !targetx;
         break;
      }
       let flyer0 = String.fromCharCode(117,95,55,95,116,102,120,100,0);
      let hooksw = flyer0 == String.fromCharCode(120,56,107,98,0);
      do {
         flyer0 += `${circleI.length >> (Math.min(Math.abs(3), 3))}`;
         if (hooksw) {
            break;
         }
      } while ((flyer0.endsWith(`${rightU.length}`)) && hooksw);
         comment9 = `${circleI.length}`;
         bufferT /= Math.max(2, parseFloat(`${philippinesn % (Math.max(8, rightU.length))}`));
      fast4 ^= fast4 - questJ;
   }
   for (let e = 0; e < 2; e++) {
       let heart3 = false;
       let promotiond = String.fromCharCode(113,95,57,56,95,99,97,110,100,108,101,0);
          let appleq: Map<any, any> = new Map([[String.fromCharCode(115,95,54,57,95,97,108,97,99,0),116], [String.fromCharCode(106,115,101,112,95,103,95,50,54,0),845]]);
         heart3 = appleq.size >= promotiond.length;
       let applications = 4.0;
       let edith = 0.0;
       let stepR = 5.0;
         applications *= parseFloat(`${parseInt(`${stepR}`)}`);
          let rankH = 1.0;
          let appleV = 2;
          let networkY: Map<any, any> = new Map([[String.fromCharCode(112,114,111,112,95,101,95,55,50,0),true ], [String.fromCharCode(116,95,50,55,95,114,100,106,112,103,99,111,109,0),false ], [String.fromCharCode(97,118,112,105,99,116,117,114,101,95,53,95,56,48,0),true ]]);
         edith /= Math.max(parseFloat(`${1}`), 2);
         rankH *= parseFloat(`${parseInt(`${rankH}`)}`);
         appleV >>= Math.min(Math.abs(2 >> (Math.min(Math.abs(parseInt(`${rankH}`)), 4))), 2);
         networkY = new Map([[`${appleV}`, appleV | 3]]);
          let materialC = String.fromCharCode(105,95,53,95,109,111,100,101,99,111,115,116,115,0);
          let zhengpianp = 1;
          let toponQ = 3.0;
         heart3 = promotiond.endsWith(`${stepR}`);
         materialC += `${materialC.length + 2}`;
         zhengpianp <<= Math.min(materialC.length, 5);
         toponQ *= parseFloat(`${parseInt(`${toponQ}`)}`);
      moon2 += parseInt(`${moon2}`) >> (Math.min(1, Math.abs(2)));
   }
       let rewindt = 1.0;
       let reactw = String.fromCharCode(109,97,116,114,105,120,102,95,115,95,57,48,0);
       let ajaxH = String.fromCharCode(115,116,114,117,99,116,117,114,97,108,95,121,95,56,55,0);
       let default_xi = String.fromCharCode(112,108,97,121,111,117,116,95,121,95,49,0);
         rewindt /= Math.max(3, reactw.length >> (Math.min(4, ajaxH.length)));
       let feedback3 = String.fromCharCode(98,97,99,107,100,114,111,112,95,48,95,53,51,0);
      if (reactw.length == 3) {
          let holder9 = String.fromCharCode(112,101,114,102,95,122,95,48,0);
          let singaporep = 2.0;
          let sortE = String.fromCharCode(98,95,49,54,95,116,104,111,117,103,104,0);
          let nativeex0 = String.fromCharCode(115,110,100,105,111,95,120,95,52,54,0);
          let collectionv: Array<any> = [String.fromCharCode(105,102,110,115,95,100,95,51,48,0), String.fromCharCode(122,95,50,49,95,108,105,115,116,101,100,0)];
         rewindt /= Math.max(1, 2 ^ reactw.length);
         holder9 += `${holder9.length}`;
         singaporep *= 3;
         sortE = `${parseInt(`${singaporep}`)}`;
         nativeex0 = `${collectionv.length & 3}`;
         collectionv.push(1 - parseInt(`${singaporep}`));
      }
      while (!ajaxH.endsWith(`${default_xi.length}`)) {
         default_xi += `${ajaxH.length}`;
         break;
      }
      while (2.98 <= (4.17 * rewindt)) {
         rewindt /= Math.max(parseInt(`${rewindt}`), 3);
         break;
      }
      let countdownO = 7248627.0 <= rewindt;
      do {
         rewindt -= 2;
         if (countdownO) {
            break;
         }
      } while (countdownO && (feedback3.length < 5));
          let transferf = String.fromCharCode(118,95,53,50,95,115,104,97,107,101,0);
         rewindt -= (String.fromCharCode(111,0) == default_xi ? feedback3.length : default_xi.length);
         transferf += `${transferf.length & transferf.length}`;
      while (default_xi.length <= 4) {
         default_xi += `${parseInt(`${rewindt}`)}`;
         break;
      }
      areaP = new Map([[`${moon2}`, (parseInt(`${moon2}`) >> (Math.min(3, Math.abs((routerv ? 3 : 4)))))]]);
   let downloadingj = areaP.size >= 6404166;
   do {
      areaP.set(`${gemfileX}`, 3 / (Math.max(5, areaP.size)));
      if (downloadingj) {
         break;
      }
   } while ((Array.from(areaP.values()).includes(questJ)) && downloadingj);
      abouth /= Math.max(3, parseFloat(`${3 * parseInt(`${abouth}`)}`));

    queryClient.removeQueries(['filteredVods']);

   let jnewsP = String.fromCharCode(114,97,119,102,111,103,121,95,0) == gemfileX;
   do {
       let downloadingH = 3.0;
         downloadingH /= Math.max(4, parseInt(`${downloadingH}`) * 1);
         downloadingH *= parseInt(`${downloadingH}`) >> (Math.min(1, Math.abs(parseInt(`${downloadingH}`))));
      if (5.70 == (downloadingH / 2.68) && (downloadingH / (Math.max(downloadingH, 9))) == 2.68) {
          let activeu = String.fromCharCode(112,114,101,118,105,101,119,95,122,95,52,54,0);
          let selection0 = String.fromCharCode(121,95,54,52,95,100,105,109,101,110,115,105,116,111,110,115,0);
          let half6 = 4.0;
          let klevinb = 1;
         downloadingH -= 3;
         activeu = `${klevinb * activeu.length}`;
         selection0 += `${selection0.length | activeu.length}`;
         half6 += parseFloat(`${3}`);
         klevinb >>= Math.min(5, Math.abs((String.fromCharCode(68,0) == activeu ? selection0.length : activeu.length)));
      }
      gemfileX = `${parseInt(`${abouth}`) & areaP.size}`;
      if (jnewsP) {
         break;
      }
   } while (jnewsP && ((areaP.size - 3) >= 4));
   let penaltyj = gemfileX.length >= 5447711;
   do {
      gemfileX = "3";
      if (penaltyj) {
         break;
      }
   } while ((2 < fast4) && penaltyj);
   for (let d = 0; d < 1; d++) {
      fast4 ^= questJ * 2;
   }
   if (fast4 < abouth) {
       let banner0 = String.fromCharCode(115,118,103,95,119,95,54,51,0);
       let philippinesr: Array<any> = [948, 497];
       let yellowC = false;
         philippinesr = [2 >> (Math.min(2, philippinesr.length))];
      if (banner0.length >= 5) {
         yellowC = (philippinesr.length << (Math.min(banner0.length, 2))) > 1;
      }
         yellowC = yellowC || philippinesr.length >= 71;
      let buildj = yellowC ? !yellowC : yellowC;
      do {
         yellowC = philippinesr.includes(yellowC);
         if (buildj) {
            break;
         }
      } while ((yellowC) && buildj);
      for (let b = 0; b < 3; b++) {
          let animation9 = true;
         philippinesr = [banner0.length];
         animation9 = (!animation9 ? animation9 : animation9);
      }
         yellowC = (81 == ((yellowC ? 81 : banner0.length) & banner0.length));
      while (philippinesr.length >= 3) {
         philippinesr.push(2);
         break;
      }
         philippinesr = [philippinesr.length - banner0.length];
      let zoomv = yellowC ? !yellowC : yellowC;
      do {
         yellowC = yellowC || banner0.length > 19;
         if (zoomv) {
            break;
         }
      } while (zoomv && (banner0.length >= 3));
      fast4 |= 2 * fast4;
   }
       let editc = 5.0;
         editc -= parseInt(`${editc}`) * 2;
          let cnewinterstitial9: Map<any, any> = new Map([[String.fromCharCode(102,95,54,51,95,111,110,97,118,99,100,97,116,97,0),583], [String.fromCharCode(114,95,52,56,95,101,120,114,100,115,112,0),498], [String.fromCharCode(110,95,56,52,95,116,114,97,99,107,0),354]]);
         editc *= parseInt(`${editc}`);
         cnewinterstitial9.set(`${cnewinterstitial9.size}`, 1);
          let tickY: Map<any, any> = new Map([[String.fromCharCode(114,95,52,95,100,101,102,108,105,99,107,101,114,0),String.fromCharCode(98,95,57,50,95,112,104,111,116,111,0)], [String.fromCharCode(112,110,105,101,108,115,97,100,100,95,49,95,52,53,0),String.fromCharCode(109,99,111,109,112,95,120,95,52,50,0)]]);
          let modali = String.fromCharCode(104,119,116,105,109,101,95,113,95,55,57,0);
         editc += (String.fromCharCode(115,0) == modali ? tickY.size : modali.length);
      areaP = new Map([[gemfileX, (gemfileX == String.fromCharCode(98,0) ? gemfileX.length : parseInt(`${dycreatorC}`))]]);
       let clockW = 4.0;
      let mbbannerF = 9808842.0 >= clockW;
      do {
         clockW *= parseFloat(`${3}`);
         if (mbbannerF) {
            break;
         }
      } while ((clockW >= 5.69) && mbbannerF);
          let tooltipsf = false;
          let gcopy_vM: Array<any> = [643, 63, 93];
         clockW -= parseFloat(`${1 >> (Math.min(Math.abs(parseInt(`${clockW}`)), 3))}`);
         tooltipsf = gcopy_vM.length > 13 && tooltipsf;
         gcopy_vM.push(3 ^ gcopy_vM.length);
      while ((clockW - 5.63) <= 1.10 || (5.63 + clockW) <= 4.71) {
         clockW -= parseFloat(`${2 * parseInt(`${clockW}`)}`);
         break;
      }
      fast4 ^= areaP.size;
   let miniz = questJ <= 6124370;
   do {
      questJ += 1;
      if (miniz) {
         break;
      }
   } while (miniz && (!gemfileX.endsWith(`${questJ}`)));
    setTopicClass(sameTextAndValueObj('全部类型'));

      gemfileX += `${1 | parseInt(`${abouth}`)}`;
      gemfileX = `${crosse.length & 1}`;
      routerv = routerv && areaP.size >= 29;
      crosse += `${2 | questJ}`;
   if ((3.73 / (Math.max(1, twitterF))) <= 5.90) {
      twitterF += 3 + gemfileX.length;
   }
   if ((3.5 - twitterF) <= 3.79 && 5.15 <= (twitterF - 3.5)) {
      twitterF /= Math.max(parseInt(`${dycreatorC}`), 2);
   }
   for (let e = 0; e < 1; e++) {
      crosse += `${1 << (Math.min(Math.abs(parseInt(`${dycreatorC}`)), 4))}`;
   }
    setArea(sameTextAndValueObj('全部地区'));

      questJ <<= Math.min(Math.abs(parseInt(`${abouth}`) * parseInt(`${twitterF}`)), 5);
      orientationT -= parseInt(`${orientationT}`);
      dycreatorC /= Math.max(5, questJ ^ 1);
       let playT: Array<any> = [902, 644, 147];
       let analytick = 2.0;
       let uploadJ = 3.0;
      while (uploadJ >= 2.14) {
         uploadJ /= Math.max(3, parseFloat(`${parseInt(`${analytick}`)}`));
         break;
      }
      if (1.11 < (2.88 / (Math.max(5, uploadJ)))) {
         uploadJ /= Math.max(2, parseFloat(`${parseInt(`${analytick}`) & 1}`));
      }
         playT.push(parseInt(`${uploadJ}`) & 3);
       let buttonF: Array<any> = [73, 788];
         analytick *= parseInt(`${uploadJ}`) / 3;
         playT = [buttonF.length << (Math.min(4, Math.abs(parseInt(`${analytick}`))))];
      if (!playT.includes(analytick)) {
         playT.push(2 % (Math.max(9, buttonF.length)));
      }
      while ((playT.length + parseInt(`${analytick}`)) <= 1) {
         analytick -= buttonF.length;
         break;
      }
          let expiredo = String.fromCharCode(119,95,51,50,0);
         uploadJ /= Math.max(parseFloat(`${1}`), 2);
         expiredo += `${expiredo.length}`;
      abouth -= parseFloat(`${3 / (Math.max(7, areaP.size))}`);
      gemfileX = `${parseInt(`${dycreatorC}`) / 2}`;
      twitterF += 1 | parseInt(`${twitterF}`);
      fast4 |= fast4 * 3;
    setLang(sameTextAndValueObj('全部语言'));

   for (let q = 0; q < 1; q++) {
      dycreatorC += parseInt(`${twitterF}`);
   }
      fast4 += parseInt(`${twitterF}`) / (Math.max(3, 9));
      fast4 ^= parseInt(`${twitterF}`) / 1;
      areaP = new Map([[`${orientationT}`, ((routerv ? 1 : 5) - parseInt(`${orientationT}`))]]);
   if (!gemfileX.endsWith(`${crosse.length}`)) {
       let bridgep = 5;
       let result4 = String.fromCharCode(113,95,53,55,95,100,97,121,115,0);
       let helpere: Map<any, any> = new Map([[String.fromCharCode(103,95,53,53,95,104,105,103,104,108,105,103,104,116,101,114,0),false ], [String.fromCharCode(102,95,53,50,95,112,97,99,107,115,0),true ]]);
       let readZ = 1.0;
      let holderY = readZ <= 7827663.0;
      do {
         readZ += 3;
         if (holderY) {
            break;
         }
      } while (((2 / (Math.max(4, bridgep))) >= 4 && (bridgep - 2) >= 3) && holderY);
          let relateds = false;
          let anythinkJ = String.fromCharCode(106,95,55,52,95,97,112,112,101,110,100,0);
          let corec: Array<any> = [779, 883, 173];
         result4 = `${parseInt(`${readZ}`)}`;
         relateds = anythinkJ.length > corec.length;
         anythinkJ += `${corec.length}`;
      for (let o = 0; o < 2; o++) {
         result4 = `${3 + bridgep}`;
      }
         bridgep &= parseInt(`${readZ}`) % (Math.max(2, 10));
          let umengC = 0.0;
          let analyticC = String.fromCharCode(120,112,117,98,95,51,95,50,50,0);
          let volumex: Map<any, any> = new Map([[String.fromCharCode(117,95,54,48,95,100,105,114,97,99,100,115,112,0),false ], [String.fromCharCode(114,95,53,52,95,115,117,112,112,111,114,116,105,110,103,0),true ], [String.fromCharCode(99,104,97,114,97,99,116,101,114,105,115,116,105,99,115,95,53,95,54,54,0),true ]]);
         helpere.set(analyticC, 2);
         umengC -= 2;
         analyticC = "3";
         volumex = new Map([[`${volumex.size}`, volumex.size]]);
         bridgep /= Math.max(3, helpere.size + 3);
         helpere.set(`${readZ}`, parseInt(`${readZ}`) * result4.length);
         readZ *= helpere.size << (Math.min(4, Math.abs(parseInt(`${readZ}`))));
      if ((1.27 - readZ) > 4.64) {
         readZ += (String.fromCharCode(48,0) == result4 ? bridgep : result4.length);
      }
      if (result4.endsWith(`${helpere.size}`)) {
         helpere.set(result4, 2 ^ helpere.size);
      }
      if ((readZ - 5.14) <= 3.64 || (5.14 - readZ) <= 2.98) {
          let phoneQ = 2.0;
         bridgep >>= Math.min(Math.abs(helpere.size), 2);
         phoneQ /= Math.max(2, parseInt(`${phoneQ}`) - parseInt(`${phoneQ}`));
      }
       let targetX = true;
       let b_centerB = true;
      gemfileX += "1";
   }
       let mimom = 4;
       let nextE = String.fromCharCode(111,95,51,95,104,111,117,114,0);
       let gesturesL = false;
          let arrowQ = 2.0;
          let albumS = String.fromCharCode(116,111,111,108,116,105,112,115,95,52,95,55,0);
         mimom %= Math.max(5, ((gesturesL ? 3 : 5) | nextE.length));
         arrowQ -= parseFloat(`${3 / (Math.max(6, albumS.length))}`);
         albumS = `${parseInt(`${arrowQ}`) % (Math.max(9, albumS.length))}`;
      let carouselK = 7815121 >= mimom;
      do {
          let holderX = 2.0;
          let taiwanm = String.fromCharCode(113,95,52,95,116,97,115,107,0);
         mimom /= Math.max(mimom, 2);
         holderX -= parseFloat(`${3 * parseInt(`${holderX}`)}`);
         taiwanm += `${taiwanm.length - 2}`;
         if (carouselK) {
            break;
         }
      } while ((4 >= (mimom | 1)) && carouselK);
      if (gesturesL) {
         gesturesL = !gesturesL && 60 > mimom;
      }
      for (let k = 0; k < 1; k++) {
         gesturesL = 98 >= mimom;
      }
         gesturesL = !gesturesL;
         nextE = `${((gesturesL ? 5 : 4))}`;
          let shirtn = 4.0;
          let blacklist7 = String.fromCharCode(108,95,55,53,95,112,97,115,115,102,98,0);
          let circleG: Array<any> = [222, 676];
         gesturesL = !nextE.endsWith(`${shirtn}`);
         shirtn /= Math.max(4, circleG.length);
         blacklist7 += "1";
         circleG = [(blacklist7 == String.fromCharCode(118,0) ? blacklist7.length : circleG.length)];
      let largec = 7543462 >= mimom;
      do {
         mimom *= mimom;
         if (largec) {
            break;
         }
      } while ((nextE.length == 4) && largec);
          let macauk: Array<any> = [String.fromCharCode(102,95,50,57,95,108,114,111,110,100,0), String.fromCharCode(114,95,57,57,0), String.fromCharCode(116,95,57,51,95,98,111,111,116,0)];
          let clubv = String.fromCharCode(110,95,56,49,95,97,99,99,101,112,116,97,98,108,101,0);
          let groupt = false;
         nextE = "3";
         macauk.push((clubv == String.fromCharCode(114,0) ? clubv.length : macauk.length));
         groupt = macauk.length < 93;
      routerv = 19.23 == twitterF;
   while (1.2 < (5.88 * moon2) || (dycreatorC / 5.88) < 4.17) {
       let preview2: Map<any, any> = new Map([[String.fromCharCode(104,111,117,114,108,121,95,115,95,57,55,0),768], [String.fromCharCode(113,95,50,54,95,108,111,119,112,97,115,115,0),680], [String.fromCharCode(112,97,99,107,105,110,103,95,105,95,52,56,0),421]]);
       let sides: Map<any, any> = new Map([[String.fromCharCode(113,95,53,51,95,100,105,114,110,97,109,101,0),String.fromCharCode(105,95,56,51,95,117,110,98,108,111,99,107,105,110,103,0)], [String.fromCharCode(103,114,97,98,95,100,95,54,54,0),String.fromCharCode(121,95,57,49,95,115,99,104,101,109,97,0)]]);
          let popupR = String.fromCharCode(113,95,53,57,95,108,105,98,115,112,101,101,120,0);
          let membershipR = 1.0;
         sides.set(popupR, popupR.length * 1);
         membershipR -= parseInt(`${membershipR}`);
      while (3 > (preview2.size % (Math.max(sides.size, 6)))) {
         sides.set(`${preview2.size}`, 3);
         break;
      }
         preview2 = new Map([[`${preview2.size}`, preview2.size]]);
         sides.set(`${preview2.size}`, sides.size);
          let singley = String.fromCharCode(109,101,110,117,115,95,100,95,57,54,0);
         preview2 = new Map([[`${sides.size}`, 2]]);
         singley = "1";
      while (!Array.from(preview2.keys()).includes(`${sides.size}`)) {
          let roundx = false;
          let area4 = 4.0;
          let mbnativel = 3.0;
          let overb = 4.0;
          let interstitialQ = 5.0;
         preview2.set(`${mbnativel}`, parseInt(`${mbnativel}`));
         roundx = interstitialQ <= 90.75;
         area4 /= Math.max(1, parseInt(`${interstitialQ}`) - 2);
         overb /= Math.max(3, parseFloat(`${parseInt(`${interstitialQ}`)}`));
         break;
      }
      dycreatorC /= Math.max(1, parseInt(`${orientationT}`) - questJ);
      break;
   }
    setYear(sameTextAndValueObj('全部时间'));
  };

  const fetchVods = useCallback(
    (page: number) => ttConfirmationChinasame.getList({
      page,
      limit: LIMIT_PER_PAGE,
      tid: currentTopicId.toString(),
      by: orderBy.value,
      category: topicClass.value !== '全部类型' ? topicClass.value : undefined,
      area: area.value !== '全部地区' ? area.value : undefined,
      lang: lang.value !== '全部语言' ? lang.value : undefined,
      year: year.value !== '全部时间' ? year.value : undefined,
      orderBy: 'desc',
    }).then((data) => data.List as ttReportInjury[]),
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
    const eventName = 'catalog';
    const eventValues = {
      pianku: 'pianku',
    };

    
    
    
    
    
    
    
    
    
    
  }, []);

  const renderNavItems = useCallback(
    ({ item }: { item: ttRegister }) => {
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
