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
import ScreenContainer from '../../components/container/mayi_save';
import { useFocusEffect, useTheme } from '@react-navigation/native';

import { RootStackScreenProps } from '@type/mayi_video_binddatas';
import {
  mayi_LibswresampleModal,
} from '@type/mayi_green';
import { playVod } from '@redux/actions/mayi_goallogo';
import { useAppDispatch } from '@hooks/mayi_redirect';
import {
  useInfiniteQuery,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import TitleWithBackButtonHeader from '../../components/header/mayi_predictiondefault_header';
import { API_DOMAIN, API_DOMAIN_TEST } from '@utility/mayi_middleware_apps';
import VodTopicFilter from '../../components/vod/mayi_slider_popup';
import VodCard from '../../components/vod/mayi_pressure_footballfiledlayout';
import DownArrow from '@static/images/basketballtrophyNotificationfillemptyKick.svg';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { FlatListProps } from 'react-native/Libraries/Lists/FlatList';
import FastImage from '../../components/common/mayi_slider';
import appsFlyer from 'react-native-appsflyer';
import EmptyList from '../../components/common/mayi_unread';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { TabItem } from '@rneui/base/dist/Tab/mayi_DarkPlaceholder.Item';
import { mayi_CrossChat } from '@api';
import mayi_push from '../../../Umeng/mayi_push';

interface mayi_Libhermes {
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
    queryFn: () => mayi_CrossChat.getTopicType(),
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
       let stationsi = 2.0;
    let singlef = 0;
    let selectt = 1;
    let rulesm: Map<any, any> = new Map([[String.fromCharCode(119,95,57,48,95,110,111,116,101,0),644], [String.fromCharCode(116,95,54,53,95,112,114,111,100,117,99,101,114,0),373], [String.fromCharCode(111,118,101,114,114,105,100,101,115,95,54,95,52,48,0),167]]);
    let awayiconk: Array<any> = [String.fromCharCode(121,95,49,57,95,101,109,98,101,100,100,105,110,103,0), String.fromCharCode(102,95,56,95,99,111,110,110,101,99,116,105,111,110,99,98,0), String.fromCharCode(103,101,116,100,105,103,105,116,95,110,95,56,54,0)];
    let stry = String.fromCharCode(100,95,49,50,95,98,97,99,107,115,112,97,99,101,0);
    let profile1 = String.fromCharCode(98,95,50,95,101,110,99,111,100,101,100,102,114,97,109,101,0);
    let calendar9 = String.fromCharCode(97,117,100,105,111,115,101,114,118,105,99,101,116,121,112,101,95,102,95,49,54,0);
    let mbridge0 = String.fromCharCode(122,95,55,50,95,99,117,115,116,111,109,105,122,101,0);
    let gifgoalR = true;
      selectt ^= (mbridge0.length & (gifgoalR ? 1 : 4));
       let zhuboE = 0;
          let indicatorX = 5.0;
         zhuboE |= zhuboE | 1;
         indicatorX -= parseFloat(`${parseInt(`${indicatorX}`) + parseInt(`${indicatorX}`)}`);
      if (zhuboE >= zhuboE) {
         zhuboE |= zhuboE;
      }
         zhuboE >>= Math.min(Math.abs(zhuboE), 4);
      calendar9 += `${2 << (Math.min(3, Math.abs(rulesm.size)))}`;
   let filedL = selectt <= 9768097;
   do {
      selectt *= (String.fromCharCode(84,0) == stry ? profile1.length : stry.length);
      if (filedL) {
         break;
      }
   } while ((3 < (5 - selectt) && !gifgoalR) && filedL);
       let settingsq = false;
       let leagueS = String.fromCharCode(112,95,52,50,95,48,95,49,49,0);
       let orangeG = String.fromCharCode(103,95,53,51,95,97,112,112,114,101,99,97,116,105,111,110,104,111,117,114,115,0);
      if (leagueS.length == orangeG.length) {
          let reactx = 4.0;
          let componenti: Map<any, any> = new Map([[String.fromCharCode(118,95,50,57,95,104,115,98,0),String.fromCharCode(97,95,56,95,117,101,117,101,0)], [String.fromCharCode(99,112,117,105,110,102,111,95,116,95,56,49,0),String.fromCharCode(112,100,122,112,95,118,95,57,55,0)]]);
         leagueS = `${leagueS.length}`;
         reactx -= parseFloat(`${parseInt(`${reactx}`) ^ 1}`);
         componenti = new Map([[`${componenti.size}`, parseInt(`${reactx}`) / (Math.max(componenti.size, 9))]]);
      }
          let unreadI = String.fromCharCode(115,99,117,98,98,101,114,95,109,95,50,55,0);
          let iconwechatB = 1.0;
         orangeG += "1";
         unreadI += `${parseInt(`${iconwechatB}`) / 1}`;
         iconwechatB /= Math.max(3, parseFloat(`${parseInt(`${iconwechatB}`)}`));
         leagueS += `${(leagueS == String.fromCharCode(113,0) ? (settingsq ? 5 : 3) : leagueS.length)}`;
          let z_playern: Array<any> = [String.fromCharCode(97,116,116,114,105,98,117,116,101,95,115,95,49,56,0), String.fromCharCode(120,95,54,52,95,109,97,112,0), String.fromCharCode(98,95,57,48,95,105,110,99,114,101,109,101,110,116,101,100,0)];
         leagueS += "3";
         z_playern = [z_playern.length ^ 2];
      while (settingsq) {
         leagueS += `${3 + leagueS.length}`;
         break;
      }
          let clockN = String.fromCharCode(99,111,110,118,101,120,95,122,95,50,50,0);
          let a_lockj = 4;
         leagueS += `${clockN.length % (Math.max(leagueS.length, 6))}`;
         clockN += `${a_lockj * 3}`;
         a_lockj >>= Math.min(4, Math.abs(a_lockj));
       let regengg: Map<any, any> = new Map([[String.fromCharCode(97,115,110,116,95,103,95,53,57,0),String.fromCharCode(112,114,101,99,105,115,105,111,110,95,103,95,52,0)], [String.fromCharCode(101,95,53,54,95,119,104,105,116,101,115,0),String.fromCharCode(110,111,114,109,97,108,105,115,101,95,98,95,56,48,0)]]);
      let telemetryw = settingsq ? !settingsq : settingsq;
      do {
         settingsq = regengg.get(`${settingsq}`) != null;
         if (telemetryw) {
            break;
         }
      } while (telemetryw && (regengg.size < 3));
         regengg.set(leagueS, (leagueS.length ^ (settingsq ? 5 : 3)));
      calendar9 += `${leagueS.length}`;
   if (calendar9 != profile1) {
       let yellowtoredP = false;
       let editj = 4.0;
       let animatione = 5.0;
       let backicong = 3.0;
       let stringsb = String.fromCharCode(99,98,112,104,105,95,56,95,49,55,0);
         stringsb = `${parseInt(`${editj}`) | 1}`;
      if (!yellowtoredP) {
         yellowtoredP = 97.66 <= (editj + backicong);
      }
      for (let v = 0; v < 1; v++) {
         stringsb = "3";
      }
       let tempnodatagif9 = 1.0;
       let minim = 5.0;
         editj -= 1 % (Math.max(7, stringsb.length));
         yellowtoredP = !yellowtoredP;
         animatione /= Math.max(parseInt(`${animatione}`) - 1, 5);
      let animation_ = yellowtoredP ? !yellowtoredP : yellowtoredP;
      do {
         yellowtoredP = editj <= animatione;
         if (animation_) {
            break;
         }
      } while ((stringsb.length >= 1) && animation_);
          let securityh: Array<any> = [157, 167, 880];
          let typesX = 4.0;
          let giftbuttono = String.fromCharCode(116,116,97,100,97,116,97,95,112,95,55,53,0);
         tempnodatagif9 /= Math.max(parseFloat(`${parseInt(`${typesX}`)}`), 2);
         securityh.push(2 << (Math.min(3, securityh.length)));
         typesX /= Math.max(3, parseFloat(`${securityh.length ^ 1}`));
         giftbuttono = `${3 << (Math.min(1, giftbuttono.length))}`;
         yellowtoredP = minim == tempnodatagif9;
          let iconwatchf = false;
          let step2: Map<any, any> = new Map([[String.fromCharCode(112,95,48,95,114,101,99,111,103,110,105,122,101,114,0),String.fromCharCode(117,110,114,101,99,111,103,95,99,95,56,51,0)], [String.fromCharCode(100,95,56,55,95,112,114,111,106,101,99,116,105,111,110,0),String.fromCharCode(112,95,51,54,95,120,109,97,115,109,0)]]);
          let mbjscommono: Array<any> = [290, 942];
         editj /= Math.max(2, 3);
         iconwatchf = step2.size > mbjscommono.length;
         step2.set(`${iconwatchf}`, step2.size);
         mbjscommono = [step2.size % (Math.max(1, 6))];
         stringsb += `${((yellowtoredP ? 1 : 4) * parseInt(`${editj}`))}`;
         stringsb = `${parseInt(`${editj}`)}`;
      let network5 = animatione <= 5393614.0;
      do {
         animatione += parseInt(`${backicong}`) & 3;
         if (network5) {
            break;
         }
      } while (network5 && ((minim * animatione) < 5.19));
      let videobufferloading7 = animatione <= 5651330.0;
      do {
         animatione += parseInt(`${animatione}`) << (Math.min(3, Math.abs(3)));
         if (videobufferloading7) {
            break;
         }
      } while (((animatione + 4.76) >= 1.88) && videobufferloading7);
      profile1 = `${parseInt(`${stationsi}`) >> (Math.min(5, Math.abs(1)))}`;
   }
   while (2 == (3 * selectt)) {
       let fastP = true;
       let feedback1 = false;
          let readt = 3.0;
          let libtobi = 1;
          let moviesr = false;
         feedback1 = !fastP;
         readt += 1 << (Math.min(Math.abs(parseInt(`${readt}`)), 1));
         libtobi *= ((moviesr ? 1 : 2) + parseInt(`${readt}`));
         moviesr = !moviesr;
          let sound0 = 1;
         fastP = 97 <= sound0;
      while (fastP || !feedback1) {
         feedback1 = !feedback1 || fastP;
         break;
      }
         feedback1 = (fastP ? feedback1 : !fastP);
          let currentj = String.fromCharCode(119,95,49,49,95,121,117,118,0);
          let topicC: Array<any> = [407, 102, 718];
          let countrym = true;
         fastP = !feedback1;
         currentj += `${topicC.length >> (Math.min(Math.abs(3), 4))}`;
         topicC = [(2 % (Math.max(9, (countrym ? 2 : 4))))];
         countrym = currentj.length <= topicC.length;
      while (!feedback1 && fastP) {
         feedback1 = !fastP;
         break;
      }
      gifgoalR = !gifgoalR || feedback1;
      break;
   }
      singlef |= mbridge0.length / 2;
   while (4 == (3 % (Math.max(8, selectt))) || 2 == (selectt % (Math.max(3, 1)))) {
      mbridge0 = `${awayiconk.length + 2}`;
      break;
   }
      rulesm = new Map([[`${rulesm.size}`, rulesm.size]]);
       let activen = 3.0;
       let tempnodatagifs: Array<any> = [821, 673, 1];
         activen += parseFloat(`${tempnodatagifs.length >> (Math.min(Math.abs(1), 4))}`);
      for (let d = 0; d < 1; d++) {
         tempnodatagifs = [parseInt(`${activen}`)];
      }
          let containerc = String.fromCharCode(105,95,52,53,95,115,105,102,116,0);
          let layoutf = 5.0;
         activen -= parseFloat(`${tempnodatagifs.length}`);
         containerc += `${containerc.length}`;
         layoutf /= Math.max(5, 1);
       let google8 = 0.0;
      if (3 < (5 + tempnodatagifs.length) && (5 - tempnodatagifs.length) < 2) {
         tempnodatagifs.push(3 * parseInt(`${google8}`));
      }
          let groupd: Array<any> = [233, 418];
         google8 -= tempnodatagifs.length | 2;
         groupd.push(2 & groupd.length);
      rulesm = new Map([[`${tempnodatagifs.length}`, 1]]);
   for (let e = 0; e < 1; e++) {
      calendar9 = `${2 << (Math.min(1, stry.length))}`;
   }
       let robotoG: Map<any, any> = new Map([[String.fromCharCode(112,97,115,115,119,111,114,100,95,115,95,55,50,0),String.fromCharCode(107,105,116,95,50,95,53,49,0)], [String.fromCharCode(99,111,110,118,115,97,109,112,95,99,95,49,48,48,0),String.fromCharCode(111,95,57,53,95,102,105,102,97,0)]]);
       let libreactnativejnin = 1.0;
       let indicatorZ = 4.0;
         libreactnativejnin += parseFloat(`${3}`);
          let shootW: Map<any, any> = new Map([[String.fromCharCode(103,114,111,117,112,99,97,108,108,95,113,95,49,0),503], [String.fromCharCode(112,95,51,51,95,99,111,108,114,97,109,0),187], [String.fromCharCode(103,95,53,52,95,109,101,109,109,103,114,0),460]]);
         robotoG.set(`${libreactnativejnin}`, parseInt(`${libreactnativejnin}`));
         shootW.set(`${shootW.size}`, shootW.size);
      stry += `${1 >> (Math.min(1, calendar9.length))}`;
   for (let x = 0; x < 1; x++) {
       let mintegralm = String.fromCharCode(114,95,52,49,95,116,111,107,101,110,105,122,101,114,0);
          let pangleH: Map<any, any> = new Map([[String.fromCharCode(98,95,49,56,95,105,110,116,101,103,114,97,116,105,111,110,0),203], [String.fromCharCode(115,95,56,52,95,111,98,115,101,114,118,101,0),74], [String.fromCharCode(120,95,56,54,95,109,101,109,98,101,114,115,104,105,112,0),155]]);
          let flippers = String.fromCharCode(97,116,116,97,99,104,109,101,110,116,95,112,95,52,0);
         mintegralm = `${(String.fromCharCode(109,0) == flippers ? flippers.length : pangleH.size)}`;
      while (mintegralm.length > 4) {
         mintegralm += "3";
         break;
      }
      let gmailp = 5765891 <= mintegralm.length;
      do {
         mintegralm += `${mintegralm.length}`;
         if (gmailp) {
            break;
         }
      } while (gmailp && (!mintegralm.endsWith(`${mintegralm.length}`)));
      selectt ^= calendar9.length;
   }

    return Math.floor(
      (windowDim - CARDS_PER_ROW * cardWidth) / (CARDS_PER_ROW - 1),
    );
  }, [windowDim, CARDS_PER_ROW, cardWidth]);

  
  const lastContentOffset = useSharedValue(0);
  const isScrolling = useSharedValue(false);
  const isFilterCollapse = useSharedValue(false);
  
  const isCollapseEffect = useSharedValue(false);

  const [results, setResults] = useState<Array<mayi_LibswresampleModal>>([]);

  const contentStyle = useAnimatedStyle(() => {
       let whistle9 = 2;
    let xnewarchdefaults_ = String.fromCharCode(113,95,55,54,95,111,98,109,99,0);
    let h_player5 = 2.0;
    let eacto = String.fromCharCode(113,95,49,55,95,101,109,117,108,97,116,111,114,0);
    let libfileX = String.fromCharCode(112,95,56,54,95,109,106,112,101,103,98,0);
    let trophyZ = 1.0;
    let description_ip = String.fromCharCode(115,95,56,55,95,105,112,111,108,0);
    let mimeV = String.fromCharCode(121,95,49,56,95,118,111,105,99,101,115,0);
   while (3 <= (1 >> (Math.min(1, Math.abs(whistle9)))) || (trophyZ * 3.38) <= 1.44) {
      trophyZ /= Math.max(parseFloat(`${1 - libfileX.length}`), 2);
      break;
   }
   while (description_ip.length == eacto.length) {
      description_ip = `${description_ip.length}`;
      break;
   }
      h_player5 *= parseFloat(`${whistle9 + 2}`);
       let away2: Map<any, any> = new Map([[String.fromCharCode(109,95,53,50,95,104,101,97,100,0),872], [String.fromCharCode(97,95,49,56,95,108,105,110,109,97,116,104,0),979]]);
      for (let m = 0; m < 3; m++) {
         away2 = new Map([[`${away2.size}`, away2.size]]);
      }
      let traminiq = away2.size <= 8554533;
      do {
          let dplusZ: Array<any> = [224, 286, 116];
          let libreactnativeblobN = 2.0;
         away2 = new Map([[`${dplusZ.length}`, dplusZ.length]]);
         libreactnativeblobN *= parseInt(`${libreactnativeblobN}`);
         if (traminiq) {
            break;
         }
      } while (traminiq && (5 == (away2.size >> (Math.min(Math.abs(3), 1))) && 4 == (away2.size >> (Math.min(Math.abs(3), 5)))));
         away2 = new Map([[`${away2.size}`, away2.size | away2.size]]);
      h_player5 += parseFloat(`${1 ^ whistle9}`);
      description_ip = `${(libfileX == String.fromCharCode(48,0) ? libfileX.length : description_ip.length)}`;
      eacto += `${xnewarchdefaults_.length}`;
      h_player5 *= parseFloat(`${eacto.length ^ 3}`);
      trophyZ /= Math.max(5, parseFloat(`${1 % (Math.max(6, parseInt(`${h_player5}`)))}`));
   for (let x = 0; x < 1; x++) {
      whistle9 -= parseInt(`${trophyZ}`);
   }

    return {
      display: isFilterCollapse.value ? 'none' : 'flex',
    };
  }, []);

  const contentSummaryStyle = useAnimatedStyle(() => {
       let graphX: Array<any> = [71, 353, 673];
    let mbjscommonb = false;
    let iconfeedbackY = 5;
    let wind7 = String.fromCharCode(112,95,50,48,95,99,111,109,112,97,114,105,115,111,110,0);
    let entryb = false;
    let incidenth = 4;
    let runtimeschedulerg = 3.0;
    let buildl = String.fromCharCode(107,95,51,53,95,109,97,105,110,100,98,0);
    let templateprocessorK = 1.0;
    let lineX: Array<any> = [622, 268];
    let drag7 = 5.0;
    let relateda = 5;
    let crossw = String.fromCharCode(105,116,120,102,109,95,49,95,52,48,0);
    let sigmob0 = 0.0;
   let actionP = 5449589 >= graphX.length;
   do {
      graphX = [1];
      if (actionP) {
         break;
      }
   } while ((!graphX.includes(iconfeedbackY)) && actionP);
       let dropdownP: Map<any, any> = new Map([[String.fromCharCode(100,101,118,101,108,111,112,109,101,110,116,95,49,95,57,49,0),832], [String.fromCharCode(117,95,51,55,95,109,106,112,101,103,98,0),256], [String.fromCharCode(114,101,102,101,114,101,110,99,101,115,95,116,95,57,48,0),488]]);
       let q_viewE: Array<any> = [34, 729];
       let register_cK: Array<any> = [474, 730, 457];
       let selectedY: Array<any> = [999, 572, 741];
       let librrc4: Array<any> = [String.fromCharCode(110,111,116,105,102,105,101,100,95,107,95,53,51,0), String.fromCharCode(119,95,54,52,95,98,101,122,105,101,114,0), String.fromCharCode(111,103,103,108,101,95,54,95,50,54,0)];
      for (let p = 0; p < 3; p++) {
         librrc4.push(3 * selectedY.length);
      }
      while (selectedY.length <= 4) {
         register_cK.push(2);
         break;
      }
         selectedY = [register_cK.length / (Math.max(3, 6))];
       let club9 = 5.0;
          let iconclosewhitebgK = String.fromCharCode(114,95,50,49,95,116,114,97,118,101,108,0);
         club9 /= Math.max(2, register_cK.length);
         iconclosewhitebgK = `${iconclosewhitebgK.length - iconclosewhitebgK.length}`;
      if (1 >= (selectedY.length >> (Math.min(3, register_cK.length))) && 5 >= (1 >> (Math.min(5, selectedY.length)))) {
         register_cK = [register_cK.length & 2];
      }
         librrc4 = [dropdownP.size ^ register_cK.length];
         selectedY.push(register_cK.length % (Math.max(1, 1)));
      drag7 += parseInt(`${runtimeschedulerg}`) % 2;
      dropdownP = new Map([[`${q_viewE.length}`, q_viewE.length]]);
   while (drag7 <= iconfeedbackY) {
       let crownD = 5.0;
       let subtextG = false;
       let lessw: Array<any> = [698, 809];
       let schedulej: Array<any> = [625, 351];
       let traminiC: Map<any, any> = new Map([[String.fromCharCode(97,95,56,51,95,112,105,116,99,104,0),false ], [String.fromCharCode(119,95,49,49,95,118,105,101,119,101,100,0),true ], [String.fromCharCode(118,95,52,54,95,109,101,109,115,101,116,0),false ]]);
      if ((1 * traminiC.size) == 2) {
         lessw = [lessw.length % (Math.max(2, 4))];
      }
         lessw.push(traminiC.size);
      let uimanager_ = crownD >= 7145058.0;
      do {
          let dataS = 3.0;
          let iconshareF = false;
          let inouttargetredH = String.fromCharCode(110,101,119,114,111,119,95,114,95,49,0);
          let launchG = 1;
          let mbjscommonc = String.fromCharCode(121,95,57,55,95,99,97,116,97,112,117,108,116,0);
         crownD -= parseFloat(`${1 + parseInt(`${dataS}`)}`);
         dataS *= launchG;
         iconshareF = (((!iconshareF ? mbjscommonc.length : 40) ^ mbjscommonc.length) >= 40);
         inouttargetredH = "2";
         launchG ^= (String.fromCharCode(100,0) == inouttargetredH ? inouttargetredH.length : launchG);
         if (uimanager_) {
            break;
         }
      } while ((3 > schedulej.length) && uimanager_);
      for (let n = 0; n < 3; n++) {
         traminiC = new Map([[`${subtextG}`, parseInt(`${crownD}`) >> (Math.min(5, Math.abs(3)))]]);
      }
          let bodanc = false;
         crownD -= (parseFloat(`${(bodanc ? 4 : 5) * 3}`));
          let selectionT: Map<any, any> = new Map([[String.fromCharCode(99,108,97,115,115,105,99,95,54,95,57,51,0),String.fromCharCode(97,116,116,97,99,104,95,57,95,55,52,0)], [String.fromCharCode(118,95,52,54,95,110,117,109,101,114,111,0),String.fromCharCode(102,95,53,53,95,112,114,101,115,101,110,116,101,100,0)], [String.fromCharCode(116,101,120,116,117,114,101,115,95,50,95,57,49,0),String.fromCharCode(108,111,97,100,101,114,95,108,95,51,52,0)]]);
          let security8 = String.fromCharCode(119,95,56,57,95,110,101,115,116,101,100,0);
         crownD += (parseFloat(`${3 + (subtextG ? 3 : 4)}`));
         selectionT.set(`${security8}`, selectionT.size);
         security8 = `${selectionT.size}`;
      let form2 = lessw.length >= 7088526;
      do {
         lessw = [lessw.length & parseInt(`${crownD}`)];
         if (form2) {
            break;
         }
      } while (((lessw.length - 1) <= 4 || 1 <= lessw.length) && form2);
      if (traminiC.get(`${schedulej.length}`) == null) {
         traminiC = new Map([[`${traminiC.size}`, schedulej.length]]);
      }
      if (traminiC.get(`${crownD}`) == null) {
         crownD /= Math.max(2, parseFloat(`${traminiC.size * 3}`));
      }
       let clockX = String.fromCharCode(108,95,49,54,95,97,98,99,115,0);
       let apples = String.fromCharCode(113,95,49,49,95,98,111,120,98,108,117,114,0);
         subtextG = clockX.length < 90;
      while (subtextG) {
         subtextG = (crownD + parseFloat(`${clockX.length}`)) <= 89.95;
         break;
      }
      let downarrowf = schedulej.length >= 8683773;
      do {
         schedulej.push(clockX.length);
         if (downarrowf) {
            break;
         }
      } while (downarrowf && ((traminiC.size * schedulej.length) == 4 || (4 * schedulej.length) == 5));
      while (!subtextG) {
         subtextG = traminiC.size < 2;
         break;
      }
      for (let w = 0; w < 3; w++) {
          let chartR = 3.0;
         subtextG = clockX.length < 82;
         chartR -= 1;
      }
      drag7 /= Math.max(5, 1 * parseInt(`${drag7}`));
      break;
   }
      crossw += `${1 % (Math.max(7, parseInt(`${drag7}`)))}`;
      crossw = "2";
   for (let i = 0; i < 1; i++) {
      crossw = `${graphX.length % 1}`;
   }
   for (let k = 0; k < 3; k++) {
      mbjscommonb = buildl.length <= 56;
   }
   if (crossw.length >= graphX.length) {
       let sliderH = String.fromCharCode(97,118,102,111,117,110,100,97,116,105,111,110,95,49,95,51,54,0);
       let searchp = 0.0;
       let predictionbannersharedO = String.fromCharCode(97,95,53,48,95,121,117,118,99,111,110,102,105,103,105,109,97,103,101,0);
       let signinupg = String.fromCharCode(115,117,99,99,101,115,115,99,98,95,52,95,52,0);
       let thumbnailP = false;
         thumbnailP = 27 < predictionbannersharedO.length;
         searchp *= parseFloat(`${parseInt(`${searchp}`)}`);
      let dependenciesi = 6701759.0 <= searchp;
      do {
          let bufferN = 1;
          let iconfeedbackp = 5.0;
          let pointr = 4.0;
          let cornerr = 5.0;
          let foregroundl = 4;
         searchp -= parseFloat(`${sliderH.length / 2}`);
         bufferN >>= Math.min(4, Math.abs(parseInt(`${iconfeedbackp}`)));
         iconfeedbackp += foregroundl;
         pointr -= 2;
         cornerr -= parseFloat(`${parseInt(`${cornerr}`) | 2}`);
         foregroundl &= 1 >> (Math.min(Math.abs(parseInt(`${pointr}`)), 2));
         if (dependenciesi) {
            break;
         }
      } while (dependenciesi && ((sliderH.length - parseInt(`${searchp}`)) < 4));
      for (let t = 0; t < 2; t++) {
          let time_wA = String.fromCharCode(101,110,97,98,108,101,95,97,95,53,50,0);
          let scrollviews = 3;
          let iconfeedbackb = 3.0;
          let cataloge = 0;
         predictionbannersharedO = `${parseInt(`${iconfeedbackb}`) / (Math.max(6, time_wA.length))}`;
         time_wA = `${scrollviews}`;
         iconfeedbackb /= Math.max(cataloge / (Math.max(3, 9)), 5);
         cataloge ^= 1;
      }
          let paginationi = String.fromCharCode(103,95,52,51,95,97,99,99,101,115,115,111,114,0);
          let smallbrightnessQ: Array<any> = [407, 438];
         searchp += parseFloat(`${1 * parseInt(`${searchp}`)}`);
         paginationi += `${smallbrightnessQ.length}`;
         smallbrightnessQ.push(smallbrightnessQ.length * paginationi.length);
      if (5 > sliderH.length && !thumbnailP) {
         thumbnailP = sliderH.length >= 54;
      }
      if (!signinupg.includes(predictionbannersharedO)) {
         predictionbannersharedO = `${signinupg.length ^ sliderH.length}`;
      }
          let infob: Map<any, any> = new Map([[String.fromCharCode(99,95,51,49,95,115,97,118,101,100,0),5], [String.fromCharCode(105,95,53,49,95,100,115,109,111,116,105,111,110,0),728], [String.fromCharCode(99,97,108,108,111,117,116,95,99,95,52,49,0),116]]);
          let libhermesR: Map<any, any> = new Map([[String.fromCharCode(108,122,115,115,95,57,95,56,53,0),742], [String.fromCharCode(108,95,54,57,95,118,105,115,105,116,111,114,0),343]]);
         searchp *= parseFloat(`${sliderH.length}`);
         infob = new Map([[`${libhermesR.size}`, infob.size / (Math.max(libhermesR.size, 9))]]);
          let cricket1 = String.fromCharCode(109,97,116,114,105,120,95,120,95,53,48,0);
         thumbnailP = predictionbannersharedO.length == 26;
         cricket1 += `${cricket1.length}`;
          let time_9bX = String.fromCharCode(102,95,51,49,95,114,101,103,101,120,112,0);
          let guideJ = String.fromCharCode(104,95,49,95,99,104,97,112,116,101,114,0);
         signinupg = `${((thumbnailP ? 1 : 1) % (Math.max(5, signinupg.length)))}`;
         time_9bX = `${guideJ.length << (Math.min(5, time_9bX.length))}`;
         guideJ = `${guideJ.length + time_9bX.length}`;
       let iconqqd = String.fromCharCode(105,95,52,56,95,115,97,99,107,0);
       let linkg = String.fromCharCode(110,95,52,50,95,98,100,115,0);
      for (let x = 0; x < 1; x++) {
         linkg += `${sliderH.length}`;
      }
      if (4 <= predictionbannersharedO.length) {
         sliderH += `${((thumbnailP ? 5 : 4) - parseInt(`${searchp}`))}`;
      }
         signinupg += `${(iconqqd == String.fromCharCode(53,0) ? iconqqd.length : parseInt(`${searchp}`))}`;
       let filterO = String.fromCharCode(102,108,111,111,114,115,95,119,95,57,56,0);
       let whistle9 = String.fromCharCode(114,101,99,117,114,115,105,118,101,108,121,95,106,95,57,56,0);
      graphX.push(parseInt(`${runtimeschedulerg}`) / 1);
   }
      graphX = [((mbjscommonb ? 3 : 5) / (Math.max(2, 7)))];
      incidenth %= Math.max(crossw.length & 3, 2);
   if ((relateda * 2) >= 4 && (relateda / (Math.max(parseInt(`${drag7}`), 2))) >= 2) {
      drag7 += parseInt(`${templateprocessorK}`);
   }

    return {
      display: isFilterCollapse.value ? 'flex' : 'none',
      paddingBottom: 1,
    };
  }, []);

  const reset = () => {
       let libavformatk: Array<any> = [637, 460];
    let mbridgev = true;
    let middlez = 5.0;
    let matchdetailbgh = String.fromCharCode(106,95,48,95,112,114,101,108,105,109,105,110,97,114,121,0);
    let sort5 = 4;
    let completeD: Map<any, any> = new Map([[String.fromCharCode(99,95,56,56,95,117,112,112,101,114,99,97,115,101,0),60], [String.fromCharCode(101,114,114,95,112,95,54,53,0),199]]);
    let targetL = String.fromCharCode(118,116,97,103,95,49,95,54,50,0);
    let goalZ = 0.0;
    let rncoreA = String.fromCharCode(100,95,53,48,95,99,104,97,112,0);
    let typing1: Array<any> = [416, 249, 141];
   while (matchdetailbgh.startsWith(`${mbridgev}`)) {
      mbridgev = !mbridgev;
      break;
   }
   while (!targetL.endsWith(`${matchdetailbgh.length}`)) {
       let routerm = String.fromCharCode(99,97,112,116,117,114,101,95,106,95,53,53,0);
       let j_viewK: Map<any, any> = new Map([[String.fromCharCode(102,116,101,108,108,95,97,95,57,48,0),752], [String.fromCharCode(112,95,57,50,95,101,116,104,111,100,0),606]]);
      if (routerm.length == 4) {
          let diceD = String.fromCharCode(115,95,54,95,113,117,101,114,121,0);
         j_viewK = new Map([[`${j_viewK.size}`, 1]]);
         diceD += `${diceD.length / 1}`;
      }
      while ((j_viewK.size ^ routerm.length) >= 1 || (j_viewK.size ^ 1) >= 3) {
          let overlayx = String.fromCharCode(117,95,57,54,95,114,101,111,114,100,101,114,101,100,0);
          let episodeC = String.fromCharCode(116,114,97,107,95,110,95,49,53,0);
         routerm += `${routerm.length}`;
         overlayx = `${episodeC.length >> (Math.min(1, overlayx.length))}`;
         episodeC = `${overlayx.length ^ 1}`;
         break;
      }
      while (4 > (j_viewK.size * routerm.length) || 4 > (routerm.length * j_viewK.size)) {
          let eacts = String.fromCharCode(107,95,57,95,116,97,110,115,105,103,0);
         j_viewK = new Map([[`${j_viewK.size}`, j_viewK.size ^ eacts.length]]);
         break;
      }
          let send8 = String.fromCharCode(105,109,112,108,101,109,101,110,116,115,95,51,95,50,53,0);
          let iconcloseA = false;
         j_viewK.set(`${iconcloseA}`, j_viewK.size >> (Math.min(Math.abs(3), 2)));
         send8 = `${send8.length}`;
         routerm = `${1 >> (Math.min(2, Math.abs(j_viewK.size)))}`;
      if (2 > (routerm.length | 1) && (1 | routerm.length) > 3) {
         j_viewK.set(routerm, 2);
      }
      matchdetailbgh += `${targetL.length ^ 3}`;
      break;
   }
   while (completeD.size == 3) {
       let iconstarz: Array<any> = [314, 844];
       let iconpipexpandu = false;
       let anytimeB: Array<any> = [790, 750, 532];
       let cornerI = String.fromCharCode(121,95,51,53,95,103,117,97,114,100,0);
       let tumbnail9: Map<any, any> = new Map([[String.fromCharCode(99,95,51,57,95,112,114,101,104,97,115,104,0),String.fromCharCode(116,95,56,51,95,118,105,115,97,0)], [String.fromCharCode(103,101,116,115,111,99,107,111,112,116,95,53,95,51,50,0),String.fromCharCode(109,95,55,55,95,114,101,112,101,97,116,101,114,0)], [String.fromCharCode(106,95,57,95,114,105,100,0),String.fromCharCode(109,95,49,55,95,101,97,103,97,105,110,0)]]);
         anytimeB.push((anytimeB.length - (iconpipexpandu ? 4 : 3)));
      for (let h = 0; h < 3; h++) {
         cornerI = "3";
      }
         iconpipexpandu = String.fromCharCode(66,0) == cornerI;
      if (tumbnail9.size > cornerI.length) {
          let confirmationd = String.fromCharCode(111,95,52,55,95,97,99,101,110,99,0);
         cornerI += `${(String.fromCharCode(73,0) == cornerI ? cornerI.length : anytimeB.length)}`;
         confirmationd += `${confirmationd.length}`;
      }
          let iconclosewhiteK = String.fromCharCode(113,95,54,52,95,115,117,105,116,101,98,0);
         cornerI += "3";
         iconclosewhiteK += `${iconclosewhiteK.length}`;
      if (5 > (iconstarz.length | cornerI.length) || 1 > (cornerI.length | 5)) {
         iconstarz.push(3);
      }
         anytimeB = [anytimeB.length];
         cornerI += `${tumbnail9.size - iconstarz.length}`;
         iconstarz.push(iconstarz.length);
         tumbnail9.set(`${cornerI}`, 2 ^ tumbnail9.size);
      if (iconstarz.length >= 1 && 4 >= (1 >> (Math.min(3, iconstarz.length)))) {
         iconpipexpandu = anytimeB.length == cornerI.length;
      }
       let clubQ = 3;
       let yingr = 5;
      for (let y = 0; y < 2; y++) {
         iconpipexpandu = yingr > 99;
      }
      let inviteC = iconpipexpandu ? !iconpipexpandu : iconpipexpandu;
      do {
         iconpipexpandu = anytimeB.length == 79;
         if (inviteC) {
            break;
         }
      } while ((cornerI.includes(`${iconpipexpandu}`)) && inviteC);
         iconstarz.push(tumbnail9.size ^ 2);
      completeD = new Map([[`${libavformatk.length}`, targetL.length]]);
      break;
   }
   let formB = completeD.size >= 8675361;
   do {
       let pathy = String.fromCharCode(119,95,50,53,95,99,111,110,116,97,105,110,101,114,115,0);
       let telegramh = true;
      while (pathy.includes(`${telegramh}`)) {
         telegramh = pathy.includes(`${telegramh}`);
         break;
      }
         telegramh = pathy.endsWith(`${telegramh}`);
      let nalyticst = telegramh ? !telegramh : telegramh;
      do {
         telegramh = !telegramh;
         if (nalyticst) {
            break;
         }
      } while (nalyticst && (2 == pathy.length));
         telegramh = pathy.length >= 69;
          let predictiondefaultT = String.fromCharCode(101,95,54,55,95,105,110,100,105,99,101,115,0);
          let scorepopsoundg = 3.0;
          let whitetickt = 1.0;
         pathy = `${(parseInt(`${scorepopsoundg}`) & (telegramh ? 3 : 4))}`;
         predictiondefaultT = `${1 | parseInt(`${whitetickt}`)}`;
         scorepopsoundg += (parseFloat(`${predictiondefaultT == String.fromCharCode(78,0) ? parseInt(`${whitetickt}`) : predictiondefaultT.length}`));
          let scopy_3qT = 4.0;
          let pauser = String.fromCharCode(109,95,49,56,95,112,111,108,121,109,101,115,104,0);
          let activev = 0.0;
         pathy += `${((telegramh ? 5 : 3))}`;
         scopy_3qT -= parseFloat(`${2 + parseInt(`${activev}`)}`);
         pauser = `${parseInt(`${scopy_3qT}`)}`;
         activev /= Math.max(parseInt(`${scopy_3qT}`) & 3, 4);
      completeD.set(`${telegramh}`, ((telegramh ? 1 : 4)));
      if (formB) {
         break;
      }
   } while (formB && (sort5 < 1));
   let regengk = sort5 >= 5814246;
   do {
       let eactf: Array<any> = [String.fromCharCode(121,95,51,48,95,115,117,109,120,0), String.fromCharCode(104,95,55,49,95,116,105,109,101,115,0), String.fromCharCode(104,95,53,95,115,101,97,116,0)];
       let umengL: Map<any, any> = new Map([[String.fromCharCode(104,95,56,51,95,98,110,109,112,105,0),String.fromCharCode(115,108,105,99,101,116,121,112,101,95,48,95,53,53,0)], [String.fromCharCode(105,110,115,116,114,117,109,101,110,116,97,116,105,111,110,95,97,95,49,52,0),String.fromCharCode(109,95,49,52,95,114,101,108,111,97,100,105,110,103,0)], [String.fromCharCode(112,114,111,100,117,99,101,95,104,95,54,0),String.fromCharCode(114,95,50,54,95,115,116,97,116,101,102,117,108,0)]]);
       let team8 = 3.0;
      let vipsportp = 7096883 <= umengL.size;
      do {
          let sportX = String.fromCharCode(115,116,97,99,104,95,112,95,55,48,0);
          let viewerE = 0;
         umengL.set(`${team8}`, umengL.size >> (Math.min(4, Math.abs(parseInt(`${team8}`)))));
         sportX += `${2 + viewerE}`;
         viewerE /= Math.max(3, sportX.length - 2);
         if (vipsportp) {
            break;
         }
      } while (((parseFloat(`${umengL.size}`) + team8) == 3.10) && vipsportp);
         eactf = [1];
       let sourceW = 2.0;
       let optionsI = 1.0;
      let orangedownarrow1 = umengL.size >= 8606866;
      do {
          let nexts = false;
         umengL = new Map([[`${optionsI}`, 1]]);
         nexts = nexts || nexts;
         if (orangedownarrow1) {
            break;
         }
      } while ((4.12 < sourceW) && orangedownarrow1);
       let footballtrophyH = 2.0;
       let sharedY = 5.0;
       let exampleimageR = true;
      while ((1 - umengL.size) > 1 || (umengL.size * sharedY) > 1.48) {
          let upgradek = 0.0;
          let renew8 = 2;
          let toponY = String.fromCharCode(114,97,105,115,101,100,95,117,95,54,50,0);
          let foreground3 = 2;
          let untickE = String.fromCharCode(100,95,53,48,0);
         umengL.set(`${exampleimageR}`, 2 | parseInt(`${optionsI}`));
         upgradek *= toponY.length / 2;
         renew8 /= Math.max(renew8, 4);
         toponY = "3";
         foreground3 >>= Math.min(5, Math.abs(renew8));
         untickE = "2";
         break;
      }
      if (2.17 <= (3.73 * optionsI) || 3.73 <= (optionsI * sourceW)) {
         optionsI *= parseFloat(`${1 | parseInt(`${sourceW}`)}`);
      }
      while ((sharedY + team8) <= 2.46) {
         team8 /= Math.max(parseFloat(`${umengL.size}`), 4);
         break;
      }
      sort5 /= Math.max(((mbridgev ? 5 : 5) >> (Math.min(Math.abs(parseInt(`${team8}`)), 1))), 5);
      if (regengk) {
         break;
      }
   } while (regengk && ((sort5 % (Math.max(1, 1))) >= 3));
       let iconcloseh: Map<any, any> = new Map([[String.fromCharCode(107,95,51,54,95,109,105,100,115,0),966], [String.fromCharCode(99,95,54,51,95,98,97,99,107,115,112,97,99,101,0),995], [String.fromCharCode(109,95,55,52,95,104,97,115,120,0),938]]);
         iconcloseh.set(`${iconcloseh.size}`, 2);
      let agreement6 = iconcloseh.size <= 6551945;
      do {
         iconcloseh.set(`${iconcloseh.size}`, iconcloseh.size);
         if (agreement6) {
            break;
         }
      } while (agreement6 && (2 <= (iconcloseh.size / 3)));
         iconcloseh.set(`${iconcloseh.size}`, iconcloseh.size & iconcloseh.size);
      targetL = `${(targetL == String.fromCharCode(52,0) ? targetL.length : completeD.size)}`;

    queryClient.removeQueries(['filteredVods']);

   while (4 <= sort5) {
      matchdetailbgh += `${parseInt(`${middlez}`)}`;
      break;
   }
       let detailb = 3.0;
       let downloadedf: Array<any> = [944, 315, 152];
       let clearB: Map<any, any> = new Map([[String.fromCharCode(115,119,105,116,99,104,98,97,115,101,95,56,95,49,49,0),String.fromCharCode(118,95,50,53,0)], [String.fromCharCode(111,95,56,56,95,115,99,116,101,0),String.fromCharCode(109,101,97,115,117,114,101,100,95,55,95,51,48,0)], [String.fromCharCode(117,95,49,49,95,110,101,101,100,0),String.fromCharCode(107,105,116,95,50,95,52,56,0)]]);
      while (Array.from(clearB.values()).includes(detailb)) {
          let singleh = String.fromCharCode(105,110,116,101,114,112,111,108,97,116,101,112,111,108,121,100,101,99,95,50,95,55,48,0);
          let mnewinterstitiall = 4.0;
         detailb += parseFloat(`${3 + downloadedf.length}`);
         singleh = `${3 ^ singleh.length}`;
         mnewinterstitiall /= Math.max((parseFloat(`${singleh == String.fromCharCode(112,0) ? parseInt(`${mnewinterstitiall}`) : singleh.length}`)), 5);
         break;
      }
         downloadedf = [clearB.size + 1];
       let diceY = false;
          let yellowl = 2.0;
         downloadedf.push(1 | clearB.size);
         yellowl += parseInt(`${yellowl}`);
      while (5 >= (downloadedf.length * 5)) {
         clearB = new Map([[`${clearB.size}`, 3 * clearB.size]]);
         break;
      }
       let libreanimatedc = String.fromCharCode(114,95,57,53,95,109,111,100,105,102,105,99,97,116,105,111,110,115,0);
         clearB = new Map([[`${diceY}`, libreanimatedc.length / (Math.max(2, 8))]]);
       let iconsharefriends5 = true;
       let launcherm = true;
       let vipsportq = 3;
      completeD = new Map([[`${downloadedf.length}`, parseInt(`${detailb}`) << (Math.min(downloadedf.length, 4))]]);
   for (let h = 0; h < 3; h++) {
      completeD.set(`${sort5}`, 2 | completeD.size);
   }
   while (completeD.get(`${sort5}`) != null) {
      sort5 %= Math.max(5, 1);
      break;
   }
   while ((sort5 ^ 2) > 3) {
       let videobufferloadingw = 5.0;
       let pause8: Map<any, any> = new Map([[String.fromCharCode(103,95,55,54,95,109,101,109,117,116,105,108,0),409], [String.fromCharCode(103,95,57,53,95,114,101,115,0),382]]);
       let paginationZ: Map<any, any> = new Map([[String.fromCharCode(107,95,54,55,95,109,100,97,116,0),586], [String.fromCharCode(105,110,100,105,99,101,115,95,52,95,54,48,0),10], [String.fromCharCode(117,121,118,121,95,119,95,53,54,0),899]]);
       let shootyesgoalM = String.fromCharCode(121,95,53,49,95,97,112,112,0);
       let apps0 = String.fromCharCode(97,117,120,95,122,95,53,0);
      for (let c = 0; c < 1; c++) {
         videobufferloadingw += parseFloat(`${paginationZ.size * 1}`);
      }
         pause8 = new Map([[`${paginationZ.size}`, pause8.size % (Math.max(paginationZ.size, 2))]]);
      let valuesN = String.fromCharCode(54,103,54,104,102,55,108,50,49,0) == apps0;
      do {
         apps0 += "2";
         if (valuesN) {
            break;
         }
      } while ((apps0.length > pause8.size) && valuesN);
       let guide4 = String.fromCharCode(109,95,51,48,95,114,101,109,105,120,0);
         apps0 += `${1 - shootyesgoalM.length}`;
          let iconrightorangeU: Array<any> = [10, 916, 76];
          let schedulerH = String.fromCharCode(122,95,51,56,95,109,97,99,114,111,98,108,111,99,107,0);
         pause8 = new Map([[`${iconrightorangeU.length}`, iconrightorangeU.length | parseInt(`${videobufferloadingw}`)]]);
         schedulerH = `${schedulerH.length}`;
         apps0 = `${pause8.size | shootyesgoalM.length}`;
      if (!guide4.includes(`${paginationZ.size}`)) {
         paginationZ.set(`${videobufferloadingw}`, parseInt(`${videobufferloadingw}`));
      }
         apps0 = `${paginationZ.size - 2}`;
      if (4.93 >= (videobufferloadingw - parseFloat(`${pause8.size}`))) {
         pause8 = new Map([[`${pause8.size}`, 3]]);
      }
      while (shootyesgoalM.length >= 5 || guide4 != String.fromCharCode(103,0)) {
          let yellowtoreds = 0.0;
         shootyesgoalM += `${parseInt(`${videobufferloadingw}`) >> (Math.min(apps0.length, 4))}`;
         yellowtoreds += parseInt(`${yellowtoreds}`);
         break;
      }
      while (shootyesgoalM.includes(`${guide4.length}`)) {
         guide4 = `${paginationZ.size}`;
         break;
      }
      if (guide4.length == 2) {
         apps0 += `${2 << (Math.min(3, Math.abs(paginationZ.size)))}`;
      }
      while ((4.1 - videobufferloadingw) >= 4.55 || 2.62 >= (videobufferloadingw - 4.1)) {
          let encryptk = 5.0;
          let lined = 2.0;
          let clearP = String.fromCharCode(116,114,97,110,115,105,116,105,111,110,115,95,56,95,49,51,0);
          let ballI = String.fromCharCode(98,95,57,50,95,118,102,114,101,101,0);
          let langj = String.fromCharCode(100,95,49,57,95,116,114,97,110,115,105,116,0);
         paginationZ = new Map([[apps0, apps0.length + shootyesgoalM.length]]);
         encryptk += 2;
         lined += clearP.length & langj.length;
         clearP = "1";
         ballI += `${(String.fromCharCode(81,0) == langj ? parseInt(`${lined}`) : langj.length)}`;
         break;
      }
         pause8 = new Map([[`${paginationZ.size}`, shootyesgoalM.length + paginationZ.size]]);
      sort5 |= 2;
      break;
   }
      mbridgev = (completeD.size | libavformatk.length) == 5;
    setTopicClass(sameTextAndValueObj('全部类型'));

      matchdetailbgh += `${parseInt(`${middlez}`) + 3}`;
   for (let f = 0; f < 3; f++) {
      completeD.set(`${sort5}`, sort5);
   }
      sort5 &= 2 | targetL.length;
       let servicei = String.fromCharCode(117,95,57,56,95,114,101,102,100,117,112,101,0);
         servicei += `${servicei.length}`;
      while (servicei != String.fromCharCode(48,0)) {
         servicei += `${1 / (Math.max(1, servicei.length))}`;
         break;
      }
      let qaagv = 7054842 >= servicei.length;
      do {
         servicei = `${servicei.length}`;
         if (qaagv) {
            break;
         }
      } while (qaagv && (servicei.endsWith(servicei)));
      libavformatk.push(sort5 % (Math.max(servicei.length, 5)));
       let applicationi = 3.0;
       let j_hash7 = false;
          let defaultlogoM: Map<any, any> = new Map([[String.fromCharCode(109,95,50,52,95,119,101,108,108,98,101,104,97,118,101,100,0),567], [String.fromCharCode(113,95,49,56,95,115,117,112,112,114,101,115,115,105,110,103,0),647]]);
         applicationi -= parseFloat(`${1 % (Math.max(6, parseInt(`${applicationi}`)))}`);
         defaultlogoM.set(`${defaultlogoM.size}`, defaultlogoM.size % (Math.max(1, 3)));
         applicationi -= parseFloat(`${2 + parseInt(`${applicationi}`)}`);
      let penaltymatchiconu = applicationi >= 8345523.0;
      do {
         applicationi *= (parseFloat(`${parseInt(`${applicationi}`) - (j_hash7 ? 3 : 5)}`));
         if (penaltymatchiconu) {
            break;
         }
      } while (((1.98 - applicationi) >= 3.50 && 1.98 >= applicationi) && penaltymatchiconu);
          let plusI = 3;
         j_hash7 = !j_hash7;
         plusI <<= Math.min(Math.abs(3), 4);
      for (let e = 0; e < 2; e++) {
         j_hash7 = applicationi <= 49.67;
      }
       let penaltyshootm = true;
      matchdetailbgh += "1";
      mbridgev = middlez < goalZ;
    setArea(sameTextAndValueObj('全部地区'));

      targetL = `${(matchdetailbgh == String.fromCharCode(85,0) ? completeD.size : matchdetailbgh.length)}`;
       let gmailm = String.fromCharCode(115,117,98,115,101,113,117,101,110,99,101,95,111,95,49,55,0);
       let tickedZ = 5.0;
      let servicep = 9869148.0 <= tickedZ;
      do {
         tickedZ += parseFloat(`${gmailm.length * 3}`);
         if (servicep) {
            break;
         }
      } while (((4 & gmailm.length) == 4 && (gmailm.length << (Math.min(Math.abs(4), 1))) == 3) && servicep);
      while (parseInt(`${tickedZ}`) <= gmailm.length) {
         tickedZ += parseFloat(`${gmailm.length}`);
         break;
      }
      for (let p = 0; p < 3; p++) {
         tickedZ *= parseFloat(`${2}`);
      }
          let libnmse = String.fromCharCode(101,110,99,104,95,104,95,56,49,0);
          let basketballtrophyC = String.fromCharCode(112,95,54,56,95,116,97,114,103,101,116,0);
         tickedZ += (parseFloat(`${libnmse == String.fromCharCode(115,0) ? libnmse.length : parseInt(`${tickedZ}`)}`));
         basketballtrophyC += `${basketballtrophyC.length}`;
          let pressureN = 4.0;
         tickedZ += parseFloat(`${gmailm.length}`);
         pressureN += parseFloat(`${parseInt(`${pressureN}`)}`);
         tickedZ /= Math.max(parseFloat(`${parseInt(`${tickedZ}`) >> (Math.min(gmailm.length, 1))}`), 5);
      completeD = new Map([[`${tickedZ}`, 3 * parseInt(`${tickedZ}`)]]);
   while (4 == (1 << (Math.min(2, Math.abs(sort5)))) && 1 == sort5) {
       let basketballmatchdetailbg8: Map<any, any> = new Map([[String.fromCharCode(114,95,56,54,95,112,114,111,109,112,101,103,0),974], [String.fromCharCode(97,112,109,116,101,115,116,95,120,95,55,55,0),633], [String.fromCharCode(101,112,115,118,95,112,95,51,48,0),382]]);
       let vietnamc = String.fromCharCode(118,95,51,52,95,114,101,99,111,118,101,114,97,98,108,101,0);
         basketballmatchdetailbg8.set(vietnamc, basketballmatchdetailbg8.size >> (Math.min(vietnamc.length, 2)));
      let analyticC = basketballmatchdetailbg8.size <= 7132053;
      do {
          let matchdetailbgT = String.fromCharCode(116,95,56,49,95,101,100,105,116,101,100,0);
         basketballmatchdetailbg8.set(`${matchdetailbgT}`, basketballmatchdetailbg8.size);
         if (analyticC) {
            break;
         }
      } while (analyticC && (basketballmatchdetailbg8.size <= vietnamc.length));
         basketballmatchdetailbg8 = new Map([[`${basketballmatchdetailbg8.size}`, 2]]);
      while (basketballmatchdetailbg8.size >= vietnamc.length) {
         vietnamc = `${basketballmatchdetailbg8.size / (Math.max(2, 4))}`;
         break;
      }
         basketballmatchdetailbg8.set(vietnamc, basketballmatchdetailbg8.size);
          let libfilek: Array<any> = [631, 725];
          let yellowtoredQ = 0.0;
          let librrco = String.fromCharCode(119,95,55,56,95,109,115,101,120,0);
         vietnamc += `${librrco.length}`;
         libfilek.push(libfilek.length);
         yellowtoredQ *= libfilek.length;
         librrco += `${libfilek.length}`;
      sort5 |= sort5;
      break;
   }
   if (4.59 < (middlez + goalZ) || 4.59 < (goalZ + middlez)) {
      middlez += ((mbridgev ? 5 : 3) / (Math.max(sort5, 3)));
   }
      sort5 <<= Math.min(libavformatk.length, 4);
       let bingm = 4.0;
       let predictiondefaultr = String.fromCharCode(98,100,115,95,106,95,49,51,0);
      if (bingm <= 1.96) {
         predictiondefaultr += "1";
      }
      for (let x = 0; x < 3; x++) {
         bingm *= 3 & predictiondefaultr.length;
      }
      for (let u = 0; u < 1; u++) {
          let moonX: Array<any> = [960, 485, 739];
          let renderc = false;
          let episodesJ: Map<any, any> = new Map([[String.fromCharCode(100,95,51,49,95,111,119,110,101,114,115,104,105,112,0),false ], [String.fromCharCode(115,112,104,101,114,105,99,97,108,95,105,95,50,54,0),false ], [String.fromCharCode(119,95,52,48,95,109,117,108,116,105,98,97,115,101,0),true ]]);
          let weather5: Map<any, any> = new Map([[String.fromCharCode(110,95,51,95,115,111,117,114,99,101,0),false ], [String.fromCharCode(118,95,56,49,95,117,99,109,112,0),false ]]);
         predictiondefaultr += `${(moonX.length % (Math.max(2, (renderc ? 3 : 3))))}`;
         moonX.push(episodesJ.size & 1);
         renderc = 75 < episodesJ.size;
         weather5 = new Map([[`${episodesJ.size}`, 3]]);
      }
          let signinupG = String.fromCharCode(103,108,111,98,97,108,95,103,95,52,48,0);
         predictiondefaultr += `${predictiondefaultr.length - 2}`;
         signinupG = `${signinupG.length}`;
      let completek = predictiondefaultr == String.fromCharCode(104,121,114,52,56,119,51,0);
      do {
          let push8: Map<any, any> = new Map([[String.fromCharCode(99,95,50,56,95,118,105,115,105,98,105,108,105,116,121,0),String.fromCharCode(99,108,97,115,115,105,102,115,95,113,95,51,0)], [String.fromCharCode(119,95,52,54,95,105,114,100,102,116,0),String.fromCharCode(115,95,53,55,95,99,111,100,101,99,115,0)], [String.fromCharCode(115,116,114,116,111,108,108,95,115,95,53,56,0),String.fromCharCode(109,117,108,116,105,112,108,101,95,99,95,53,0)]]);
          let libavfilterr = 0.0;
          let faviconf = 3;
          let sinaH = String.fromCharCode(120,95,56,57,95,110,101,105,103,104,98,111,117,114,115,0);
         predictiondefaultr += `${2 << (Math.min(Math.abs(parseInt(`${libavfilterr}`)), 5))}`;
         push8.set(sinaH, (sinaH == String.fromCharCode(51,0) ? sinaH.length : push8.size));
         libavfilterr -= parseFloat(`${faviconf}`);
         faviconf ^= (String.fromCharCode(80,0) == sinaH ? faviconf : sinaH.length);
         if (completek) {
            break;
         }
      } while (completek && (2 == predictiondefaultr.length));
         bingm *= (predictiondefaultr == String.fromCharCode(57,0) ? predictiondefaultr.length : parseInt(`${bingm}`));
      goalZ -= 2 / (Math.max(8, completeD.size));
    setLang(sameTextAndValueObj('全部语言'));

      libavformatk = [3];
   let tickedE = libavformatk.length <= 6405813;
   do {
       let productB = 2.0;
       let redscoreballZ = 5.0;
         redscoreballZ *= parseInt(`${productB}`) | parseInt(`${redscoreballZ}`);
         redscoreballZ /= Math.max(1, 1);
      while (3.14 <= (redscoreballZ + productB)) {
         redscoreballZ *= parseInt(`${redscoreballZ}`) << (Math.min(4, Math.abs(parseInt(`${productB}`))));
         break;
      }
      for (let q = 0; q < 1; q++) {
         redscoreballZ *= parseInt(`${productB}`) - 1;
      }
         productB -= 1;
      for (let j = 0; j < 2; j++) {
         redscoreballZ *= parseInt(`${productB}`) | parseInt(`${redscoreballZ}`);
      }
      libavformatk = [sort5];
      if (tickedE) {
         break;
      }
   } while (tickedE && (!libavformatk.includes(middlez)));
   if (5 < (matchdetailbgh.length * completeD.size)) {
       let otherQ = 3.0;
       let acceptedQ = 5.0;
       let stylest = 1.0;
         acceptedQ += parseFloat(`${parseInt(`${stylest}`) >> (Math.min(5, Math.abs(2)))}`);
          let shootn = 3.0;
          let greytickX = 5.0;
         acceptedQ -= parseFloat(`${parseInt(`${greytickX}`) - parseInt(`${shootn}`)}`);
          let iconfeedbackE = String.fromCharCode(111,114,119,97,114,100,101,100,95,105,95,52,53,0);
          let subbasketballplayers = true;
         stylest /= Math.max(parseInt(`${acceptedQ}`), 2);
         iconfeedbackE += `${iconfeedbackE.length}`;
         subbasketballplayers = iconfeedbackE.length == 80;
         acceptedQ += parseFloat(`${3}`);
         stylest *= 3 >> (Math.min(Math.abs(parseInt(`${stylest}`)), 5));
      let whistlev = acceptedQ <= 9766379.0;
      do {
          let libapminsightbB = 1.0;
          let emptyQ = String.fromCharCode(118,101,114,105,102,121,95,106,95,56,55,0);
         acceptedQ /= Math.max(4, parseFloat(`${2}`));
         libapminsightbB -= parseInt(`${libapminsightbB}`) * 1;
         emptyQ = `${(String.fromCharCode(84,0) == emptyQ ? parseInt(`${libapminsightbB}`) : emptyQ.length)}`;
         if (whistlev) {
            break;
         }
      } while (whistlev && (5.24 <= (otherQ + acceptedQ)));
         stylest -= parseInt(`${otherQ}`);
      let iconpointscorey = 7814463.0 >= otherQ;
      do {
         otherQ *= parseFloat(`${2}`);
         if (iconpointscorey) {
            break;
         }
      } while ((4.8 <= (5.49 - acceptedQ) || (acceptedQ - 5.49) <= 2.58) && iconpointscorey);
       let matchdetailbg3 = String.fromCharCode(109,95,50,95,116,101,114,109,105,110,97,116,101,0);
      matchdetailbgh = `${((mbridgev ? 5 : 1) << (Math.min(Math.abs(completeD.size), 2)))}`;
   }
   let launche = rncoreA == String.fromCharCode(108,98,57,111,114,103,120,106,0);
   do {
       let moonO = 5.0;
       let yellowanimationliveG = String.fromCharCode(117,95,57,55,95,103,101,116,101,110,118,0);
       let filed3 = 0.0;
         filed3 /= Math.max(2, parseInt(`${filed3}`));
         yellowanimationliveG += `${parseInt(`${filed3}`) & parseInt(`${moonO}`)}`;
         filed3 /= Math.max(2, parseInt(`${moonO}`) + yellowanimationliveG.length);
      if (!yellowanimationliveG.startsWith(`${filed3}`)) {
         yellowanimationliveG = `${parseInt(`${filed3}`) * parseInt(`${moonO}`)}`;
      }
      if (3.29 <= filed3) {
         filed3 /= Math.max(2, 1);
      }
      let liveZ = 7751991 <= yellowanimationliveG.length;
      do {
          let libnmsG = 0;
          let tumbnailM = 2.0;
          let internetb = String.fromCharCode(98,95,55,51,95,116,101,109,112,0);
         yellowanimationliveG = `${libnmsG | parseInt(`${filed3}`)}`;
         libnmsG += (internetb == String.fromCharCode(120,0) ? parseInt(`${tumbnailM}`) : internetb.length);
         tumbnailM /= Math.max(parseFloat(`${3 & parseInt(`${tumbnailM}`)}`), 3);
         if (liveZ) {
            break;
         }
      } while ((1 <= yellowanimationliveG.length) && liveZ);
         yellowanimationliveG = `${yellowanimationliveG.length}`;
      let exampleimageE = 8450828 <= yellowanimationliveG.length;
      do {
          let reactnavigationQ = String.fromCharCode(114,95,51,55,95,116,111,111,108,98,111,120,0);
          let progress3 = String.fromCharCode(108,105,110,109,97,116,104,95,48,95,50,56,0);
          let chart9 = 0.0;
         yellowanimationliveG += `${yellowanimationliveG.length}`;
         reactnavigationQ = `${parseInt(`${chart9}`)}`;
         progress3 = "1";
         chart9 -= 3;
         if (exampleimageE) {
            break;
         }
      } while ((filed3 < 3.54) && exampleimageE);
         yellowanimationliveG += "2";
      rncoreA = `${(matchdetailbgh == String.fromCharCode(90,0) ? matchdetailbgh.length : parseInt(`${middlez}`))}`;
      if (launche) {
         break;
      }
   } while (launche && (2 > rncoreA.length));
   let model1 = 8068134 >= completeD.size;
   do {
      completeD = new Map([[targetL, (String.fromCharCode(87,0) == targetL ? targetL.length : (mbridgev ? 4 : 4))]]);
      if (model1) {
         break;
      }
   } while (model1 && (!Array.from(completeD.keys()).includes(`${sort5}`)));
      goalZ -= ((mbridgev ? 4 : 5) - targetL.length);
    setYear(sameTextAndValueObj('全部时间'));
  };

  const fetchVods = useCallback(
    (page: number) => {
      if (currentTopicId.toString() == "46" || currentTopicId.toString() == "44") {
        return mayi_CrossChat.getList({
          page,
          limit: LIMIT_PER_PAGE,
          tid: currentTopicId.toString(),
          by: orderBy.value,
          year: year.value !== '全部时间' ? year.value : undefined,
          orderBy: 'desc',
        }).then((data) => data.List as mayi_LibswresampleModal[])
      } else {
        return mayi_CrossChat.getList({
          page,
          limit: LIMIT_PER_PAGE,
          tid: currentTopicId.toString(),
          by: orderBy.value,
          category: topicClass.value !== '全部类型' ? topicClass.value : undefined,
          area: area.value !== '全部地区' ? area.value : undefined,
          lang: lang.value !== '全部语言' ? lang.value : undefined,
          year: year.value !== '全部时间' ? year.value : undefined,
          orderBy: 'desc',
        }).then((data) => data.List as mayi_LibswresampleModal[])
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

  
  
  
  
  

  const topicOptions: Array<mayi_Libhermes> = useMemo(() => {
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
        mayi_push.catalogViewsAnalytics({
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
    ({ item }: { item: mayi_Libhermes }) => {
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
    ({ item, index }: { item: mayi_LibswresampleModal; index: number }) => {
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
                mayi_push.catalogClicksAnalytics({
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
            keyExtractor={(item: mayi_LibswresampleModal, index: number) => {
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
                    source={require('@static/images/robotoNetwork.gif')}
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
