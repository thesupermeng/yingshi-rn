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
import yys_event_common from '../../../../Umeng/yys_event_common';
import { yys_Downloader } from '@api';

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
       let detailsd: Array<any> = [341, 805];
    let ewardedM = String.fromCharCode(112,114,105,109,97,114,121,0);
    let episodeh = String.fromCharCode(109,95,49,48,95,112,114,105,111,114,0);
    let libturbomodulejsijniU: Array<any> = [String.fromCharCode(110,101,116,115,95,48,95,52,57,0), String.fromCharCode(112,114,101,118,118,101,99,95,97,95,49,55,0), String.fromCharCode(115,95,52,52,95,115,116,97,110,100,97,114,100,0)];
    let short_ne3 = String.fromCharCode(118,112,97,116,104,109,101,115,117,114,101,95,50,95,57,48,0);
    let referrerd = String.fromCharCode(101,109,109,115,0);
    let fastforwardx = 2.0;
    let privilegeQ = String.fromCharCode(106,114,101,102,95,50,95,52,0);
    let qaagC = String.fromCharCode(97,100,100,98,108,107,95,108,95,56,50,0);
    let playercommonj = String.fromCharCode(115,112,108,105,116,109,118,115,95,103,95,53,55,0);
    let leaguem = 3.0;
   if (libturbomodulejsijniU.includes(fastforwardx)) {
      fastforwardx += parseFloat(`${parseInt(`${fastforwardx}`) & 1}`);
   }
   let t_position3 = ewardedM.length <= 5163645;
   do {
      ewardedM = `${(referrerd == String.fromCharCode(110,0) ? episodeh.length : referrerd.length)}`;
      if (t_position3) {
         break;
      }
   } while ((ewardedM.length < 1) && t_position3);
   while (referrerd.length <= libturbomodulejsijniU.length) {
      libturbomodulejsijniU.push(1);
      break;
   }
   if (short_ne3 == String.fromCharCode(88,0) && referrerd != String.fromCharCode(86,0)) {
      short_ne3 = `${detailsd.length}`;
   }
   for (let y = 0; y < 2; y++) {
      detailsd = [2 << (Math.min(4, referrerd.length))];
   }
   if ((fastforwardx * 4.38) <= 1.50 && 4 <= (5 ^ libturbomodulejsijniU.length)) {
      fastforwardx *= parseFloat(`${3}`);
   }
   if ((3 ^ detailsd.length) >= 3) {
      libturbomodulejsijniU = [3 << (Math.min(5, detailsd.length))];
   }
   for (let g = 0; g < 1; g++) {
      libturbomodulejsijniU.push(1);
   }

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
       let videocommonT = 2.0;
    let dropdownr = String.fromCharCode(112,95,56,53,0);
    let dycreatorg = String.fromCharCode(97,112,112,101,110,100,97,98,108,101,95,111,95,57,49,0);
    let downx = 0.0;
    let singaporeQ = String.fromCharCode(115,101,116,117,112,100,95,116,95,52,56,0);
    let regengN = String.fromCharCode(111,95,56,56,95,102,101,116,99,104,101,115,0);
    let emojiy = String.fromCharCode(110,95,49,49,95,105,110,116,101,114,97,116,105,111,110,0);
    let sharedI = 1;
    let thumbnailv = String.fromCharCode(97,112,112,114,111,120,105,109,97,116,101,95,107,95,57,50,0);
    let related_: Array<any> = [811, 911, 75];
    let sentryc: Map<any, any> = new Map([[String.fromCharCode(120,95,49,57,95,112,114,101,115,117,98,109,105,116,0),77], [String.fromCharCode(103,95,53,54,95,99,97,110,100,105,100,97,116,101,115,0),702]]);
    let drag1 = String.fromCharCode(115,99,97,116,116,101,114,95,53,95,51,50,0);
    let hooksH = String.fromCharCode(98,114,105,110,103,0);
    let unselectedw: Array<any> = [456, 339];
      downx *= parseFloat(`${1 >> (Math.min(2, Math.abs(parseInt(`${videocommonT}`))))}`);
      regengN += `${thumbnailv.length}`;
   let loadingr = 8912045 <= sentryc.size;
   do {
       let bdxadsdko: Array<any> = [756, 628, 364];
          let sendD = 2.0;
          let bodanp = String.fromCharCode(111,115,100,101,112,95,106,95,57,55,0);
          let nativeexh: Map<any, any> = new Map([[String.fromCharCode(104,117,102,102,121,117,118,101,110,99,100,115,112,0),406], [String.fromCharCode(121,95,49,50,95,112,97,99,107,101,116,0),256], [String.fromCharCode(99,95,49,51,95,115,111,110,105,99,0),296]]);
         bdxadsdko.push(3);
         sendD -= parseFloat(`${3 - bodanp.length}`);
         bodanp = `${(String.fromCharCode(105,0) == bodanp ? bodanp.length : parseInt(`${sendD}`))}`;
         nativeexh.set(`${sendD}`, parseInt(`${sendD}`));
      if ((1 ^ bdxadsdko.length) <= 2 && 5 <= (bdxadsdko.length ^ 1)) {
         bdxadsdko.push(bdxadsdko.length % (Math.max(4, bdxadsdko.length)));
      }
          let detailsz = true;
         bdxadsdko = [bdxadsdko.length];
      sentryc = new Map([[`${sharedI}`, 1]]);
      if (loadingr) {
         break;
      }
   } while ((sentryc.size > 5) && loadingr);
   if (sentryc.get(`${sharedI}`) == null) {
       let auto_hm: Map<any, any> = new Map([[String.fromCharCode(100,95,55,51,95,100,120,116,121,115,0),962], [String.fromCharCode(101,120,97,109,112,108,101,115,95,57,95,56,51,0),161], [String.fromCharCode(107,95,52,54,95,101,118,101,110,97,118,103,0),159]]);
          let libreactnativejniq: Array<any> = [402, 313, 167];
          let base8 = String.fromCharCode(99,97,112,105,116,97,108,105,122,105,110,103,95,114,95,54,50,0);
          let libffmpegkitn: Map<any, any> = new Map([[String.fromCharCode(98,117,98,98,108,101,115,95,110,95,52,55,0),520], [String.fromCharCode(109,95,48,0),581], [String.fromCharCode(115,108,105,99,101,116,121,112,101,95,48,95,54,50,0),274]]);
         auto_hm = new Map([[`${libffmpegkitn.size}`, 3]]);
         libreactnativejniq.push(2 | base8.length);
         base8 += `${(base8 == String.fromCharCode(112,0) ? base8.length : libreactnativejniq.length)}`;
         libffmpegkitn = new Map([[`${libreactnativejniq.length}`, base8.length]]);
      let bannerQ = 7678524 >= auto_hm.size;
      do {
         auto_hm.set(`${auto_hm.size}`, auto_hm.size | 3);
         if (bannerQ) {
            break;
         }
      } while ((4 >= auto_hm.size) && bannerQ);
      while (3 == (auto_hm.size & auto_hm.size) || (auto_hm.size & auto_hm.size) == 3) {
         auto_hm = new Map([[`${auto_hm.size}`, 1]]);
         break;
      }
      sharedI -= sentryc.size / (Math.max(5, emojiy.length));
   }
   while (emojiy.length > 1) {
      related_ = [parseInt(`${videocommonT}`) >> (Math.min(4, Math.abs(3)))];
      break;
   }
      dropdownr += "1";
   if (regengN.includes(`${sentryc.size}`)) {
       let scoreP: Map<any, any> = new Map([[String.fromCharCode(114,101,103,105,115,116,114,97,116,105,111,110,95,100,95,50,0),false ], [String.fromCharCode(115,117,98,115,101,116,95,115,95,50,49,0),false ], [String.fromCharCode(97,99,99,101,115,115,111,114,115,0),false ]]);
       let thailandN = String.fromCharCode(106,95,54,50,95,97,99,99,101,108,101,114,97,116,105,111,110,0);
       let leakcheckerX: Map<any, any> = new Map([[String.fromCharCode(117,116,112,117,116,95,122,95,51,51,0),String.fromCharCode(101,113,117,97,108,105,122,101,114,95,57,95,51,48,0)], [String.fromCharCode(103,95,49,52,95,102,117,108,102,105,108,108,0),String.fromCharCode(111,95,56,49,95,102,115,105,122,101,0)], [String.fromCharCode(117,110,102,105,108,116,101,114,101,100,0),String.fromCharCode(99,97,116,101,103,111,114,105,101,115,95,104,95,50,54,0)]]);
       let checkboxo: Map<any, any> = new Map([[String.fromCharCode(98,108,117,101,0),String.fromCharCode(98,101,101,110,95,118,95,49,48,48,0)], [String.fromCharCode(99,95,53,95,110,97,108,117,115,0),String.fromCharCode(114,118,118,108,99,0)]]);
      let mapbufferz = 7772538 <= checkboxo.size;
      do {
         checkboxo.set(thailandN, 1 & leakcheckerX.size);
         if (mapbufferz) {
            break;
         }
      } while ((checkboxo.get(`${scoreP.size}`) == null) && mapbufferz);
         checkboxo.set(`${checkboxo.size}`, checkboxo.size);
         thailandN = `${checkboxo.size}`;
         leakcheckerX = new Map([[`${scoreP.size}`, (thailandN == String.fromCharCode(74,0) ? scoreP.size : thailandN.length)]]);
      for (let z = 0; z < 3; z++) {
         scoreP = new Map([[`${leakcheckerX.size}`, leakcheckerX.size + 1]]);
      }
       let styleN = String.fromCharCode(110,95,56,49,95,114,101,116,105,110,97,0);
      while (2 == (thailandN.length & leakcheckerX.size)) {
         thailandN += `${styleN.length}`;
         break;
      }
      if (styleN.endsWith(`${checkboxo.size}`)) {
          let umengx = 3;
         styleN = `${(String.fromCharCode(56,0) == styleN ? styleN.length : umengx)}`;
      }
          let unimplementedviewL: Map<any, any> = new Map([[String.fromCharCode(104,95,56,49,95,115,101,116,102,100,0),79], [String.fromCharCode(112,114,101,115,101,110,116,101,114,95,55,95,56,54,0),902]]);
          let vignettej = String.fromCharCode(97,99,116,111,114,115,0);
          let linkD: Array<any> = [435, 269, 294];
         thailandN += `${unimplementedviewL.size << (Math.min(vignettej.length, 1))}`;
         unimplementedviewL.set(`${linkD.length}`, 2 >> (Math.min(4, linkD.length)));
         vignettej = `${linkD.length}`;
         checkboxo = new Map([[`${leakcheckerX.size}`, thailandN.length >> (Math.min(2, Math.abs(leakcheckerX.size)))]]);
      for (let l = 0; l < 1; l++) {
         leakcheckerX = new Map([[thailandN, (styleN == String.fromCharCode(79,0) ? thailandN.length : styleN.length)]]);
      }
         styleN = `${styleN.length / (Math.max(6, leakcheckerX.size))}`;
      sentryc.set(`${drag1}`, 2);
   }
      singaporeQ += `${thumbnailv.length}`;
      singaporeQ = `${related_.length}`;
   if ((4.20 * downx) < 4.23 || 3.65 < (downx * 4.20)) {
      downx -= parseFloat(`${parseInt(`${videocommonT}`)}`);
   }
   if (!related_.includes(videocommonT)) {
      related_ = [sentryc.size << (Math.min(Math.abs(1), 2))];
   }
   let stationv = related_.length <= 7888293;
   do {
      related_ = [regengN.length];
      if (stationv) {
         break;
      }
   } while ((singaporeQ.length > 1) && stationv);
      related_.push(sharedI);
   if (2 >= (related_.length * 1) && (videocommonT + 5.76) >= 1.35) {
      related_ = [singaporeQ.length];
   }
   while (hooksH.length <= emojiy.length) {
      hooksH += `${regengN.length}`;
      break;
   }

    return {
      display: isFilterCollapse.value ? 'none' : 'flex',
    };
  }, []);

  const contentSummaryStyle = useAnimatedStyle(() => {
       let manifestW: Map<any, any> = new Map([[String.fromCharCode(99,97,108,99,95,97,95,49,48,0),314], [String.fromCharCode(98,95,55,50,95,112,114,101,112,97,114,101,100,0),14], [String.fromCharCode(103,95,53,49,95,117,116,117,114,101,0),998]]);
    let collectiony = 3.0;
    let countryP = 0.0;
    let rules2: Array<any> = [132, 915];
    let philippinesR = String.fromCharCode(117,110,115,101,108,101,99,116,101,100,95,54,95,53,55,0);
    let with_hdh: Array<any> = [974, 751];
    let selectedh = true;
    let nnewinterstitialI = 1.0;
    let sharedb = 1.0;
    let megaphone_ = 5.0;
   let logout3 = rules2.length <= 7236140;
   do {
       let singaporew = String.fromCharCode(104,97,115,95,122,95,50,55,0);
       let private_deV = true;
       let phoneG = String.fromCharCode(118,111,112,101,110,0);
       let gradle8 = 0.0;
       let chatz = String.fromCharCode(109,105,103,104,116,95,114,95,57,53,0);
       let g_countu = String.fromCharCode(115,101,112,97,114,97,116,101,100,95,53,95,57,52,0);
      while (4 <= (chatz.length - 5) && (parseInt(`${gradle8}`) - chatz.length) <= 5) {
         gradle8 -= parseFloat(`${chatz.length + singaporew.length}`);
         break;
      }
         gradle8 *= parseFloat(`${singaporew.length}`);
       let right0 = true;
       let basew = true;
       let libreactperfloggerjniK = 2.0;
       let resultM = 2.0;
         g_countu += `${phoneG.length % (Math.max(7, parseInt(`${gradle8}`)))}`;
         g_countu = `${((basew ? 5 : 1) * parseInt(`${libreactperfloggerjniK}`))}`;
      let brightnessL = chatz.length >= 6725276;
      do {
          let usernamel: Array<any> = [763, 337];
          let livew = String.fromCharCode(118,95,50,56,95,100,101,98,117,103,103,101,114,0);
         chatz += `${(String.fromCharCode(72,0) == chatz ? parseInt(`${resultM}`) : chatz.length)}`;
         usernamel = [3];
         livew = `${(String.fromCharCode(75,0) == livew ? livew.length : usernamel.length)}`;
         if (brightnessL) {
            break;
         }
      } while (brightnessL && (1 > chatz.length));
      let buffero = 6491921.0 >= resultM;
      do {
          let libturbomodulejsijni_: Array<any> = [93, 944];
          let libmapbufferjniz = String.fromCharCode(122,95,51,51,95,102,97,118,101,100,0);
         resultM -= parseFloat(`${1}`);
         libturbomodulejsijni_.push(libmapbufferjniz.length);
         libmapbufferjniz += "1";
         if (buffero) {
            break;
         }
      } while ((!private_deV || 4.68 < (5.2 * resultM)) && buffero);
         libreactperfloggerjniK *= (parseFloat(`${(right0 ? 5 : 1)}`));
         chatz = `${chatz.length}`;
         resultM *= parseFloat(`${g_countu.length}`);
      for (let h = 0; h < 1; h++) {
         basew = g_countu.includes(`${right0}`);
      }
      while (!private_deV || 2.44 == (gradle8 - 3.33)) {
          let selection0 = 4.0;
         gradle8 /= Math.max(3, parseFloat(`${2}`));
         selection0 -= parseFloat(`${parseInt(`${selection0}`)}`);
         break;
      }
         chatz = `${((private_deV ? 1 : 3) << (Math.min(singaporew.length, 3)))}`;
      rules2 = [parseInt(`${gradle8}`)];
      if (logout3) {
         break;
      }
   } while (logout3 && (philippinesR.length > 3));
      countryP -= parseFloat(`${2}`);
   if (4 > rules2.length) {
      philippinesR += `${parseInt(`${countryP}`)}`;
   }
   let description_l7p = selectedh ? !selectedh : selectedh;
   do {
      selectedh = with_hdh.includes(selectedh);
      if (description_l7p) {
         break;
      }
   } while ((3 == (1 & rules2.length)) && description_l7p);
      selectedh = 79 >= philippinesR.length;
      rules2 = [parseInt(`${countryP}`)];
   let header1 = rules2.length <= 6096810;
   do {
      rules2.push(manifestW.size >> (Math.min(Math.abs(3), 4)));
      if (header1) {
         break;
      }
   } while (((rules2.length / 4) <= 5 && (parseInt(`${sharedb}`) / (Math.max(rules2.length, 1))) <= 4) && header1);
       let actionsx = String.fromCharCode(122,95,57,50,95,100,101,99,111,109,112,97,110,100,0);
      while (actionsx.includes(actionsx)) {
         actionsx = `${2 - actionsx.length}`;
         break;
      }
      if (actionsx == String.fromCharCode(120,0)) {
          let lessU: Map<any, any> = new Map([[String.fromCharCode(119,95,54,52,95,100,97,116,97,115,0),true ], [String.fromCharCode(110,115,117,105,95,97,95,51,52,0),false ]]);
         actionsx += `${lessU.size - 2}`;
      }
         actionsx += `${1 - actionsx.length}`;
      rules2 = [3 + parseInt(`${nnewinterstitialI}`)];

    return {
      display: isFilterCollapse.value ? 'flex' : 'none',
      paddingBottom: 1,
    };
  }, []);

  const reset = () => {
       let description_wd = String.fromCharCode(107,95,56,49,95,117,110,105,100,101,110,116,105,102,105,101,100,0);
    let scored: Map<any, any> = new Map([[String.fromCharCode(119,95,54,48,95,99,105,112,104,101,114,116,101,120,116,0),true ], [String.fromCharCode(97,117,116,111,114,101,103,114,101,115,115,105,111,110,95,101,95,56,57,0),true ], [String.fromCharCode(108,95,55,52,95,97,100,106,117,115,116,101,114,0),false ]]);
    let gdtadvD = 2.0;
    let mergerP = String.fromCharCode(99,111,114,114,101,108,97,116,105,111,110,0);
    let gestureo = String.fromCharCode(109,95,55,95,103,105,103,97,103,114,111,117,112,0);
    let greenm = false;
    let long_yxd = String.fromCharCode(99,95,55,50,95,111,114,105,103,105,110,97,108,0);
    let typesm: Array<any> = [672, 991, 928];
    let searchj = String.fromCharCode(112,95,51,48,95,101,110,116,105,116,105,101,115,0);
    let rewardvideos = String.fromCharCode(114,101,109,97,114,107,0);
    let texta = 4.0;
      description_wd = `${(String.fromCharCode(78,0) == description_wd ? typesm.length : description_wd.length)}`;
       let matchF = true;
       let binddatasi: Map<any, any> = new Map([[String.fromCharCode(104,95,52,49,95,97,114,114,105,118,97,108,0),614], [String.fromCharCode(116,97,112,101,0),396]]);
       let showE: Map<any, any> = new Map([[String.fromCharCode(111,95,51,57,95,105,100,101,110,116,105,102,105,101,114,0),false ], [String.fromCharCode(105,95,55,55,95,99,104,115,101,116,0),false ]]);
         binddatasi.set(`${showE.size}`, 2);
         showE = new Map([[`${binddatasi.size}`, 2]]);
         matchF = showE.size >= 39;
          let updatesb = String.fromCharCode(97,108,112,104,97,110,117,109,0);
          let agreementr = String.fromCharCode(121,117,108,101,0);
          let tumbnaila = String.fromCharCode(102,112,115,95,97,95,49,55,0);
         showE = new Map([[updatesb, updatesb.length]]);
         agreementr = `${(String.fromCharCode(119,0) == agreementr ? tumbnaila.length : agreementr.length)}`;
         tumbnaila = `${(agreementr == String.fromCharCode(122,0) ? agreementr.length : tumbnaila.length)}`;
      let tumbnailo = binddatasi.size >= 9552055;
      do {
         binddatasi.set(`${matchF}`, 1);
         if (tumbnailo) {
            break;
         }
      } while ((Array.from(binddatasi.keys()).includes(`${showE.size}`)) && tumbnailo);
          let pressuren = String.fromCharCode(102,111,110,116,99,111,110,102,105,103,95,57,95,53,50,0);
          let gradlewj = 5;
         binddatasi = new Map([[`${showE.size}`, showE.size ^ pressuren.length]]);
         pressuren += `${gradlewj}`;
      let viewsW = matchF ? !matchF : matchF;
      do {
         matchF = binddatasi.size > 6;
         if (viewsW) {
            break;
         }
      } while (viewsW && (matchF));
      if ((binddatasi.size << (Math.min(Math.abs(3), 2))) <= 3 || binddatasi.size <= 3) {
          let long_22T = String.fromCharCode(114,116,115,112,0);
          let subsP = String.fromCharCode(99,97,118,101,97,116,95,118,95,57,54,0);
         binddatasi.set(long_22T, (String.fromCharCode(100,0) == long_22T ? long_22T.length : (matchF ? 4 : 2)));
         subsP += `${subsP.length}`;
      }
      if (5 >= showE.size || 2 >= (showE.size ^ 5)) {
         showE.set(`${matchF}`, 3 & showE.size);
      }
      gdtadvD += (parseFloat(`${long_yxd.length * (matchF ? 2 : 4)}`));
   if ((2.27 - gdtadvD) <= 5.55) {
      gdtadvD -= parseFloat(`${parseInt(`${gdtadvD}`)}`);
   }
   if (description_wd == gestureo) {
      gestureo += `${long_yxd.length}`;
   }
      long_yxd = `${(long_yxd == String.fromCharCode(120,0) ? (greenm ? 4 : 4) : long_yxd.length)}`;
      greenm = !greenm;

    queryClient.removeQueries(['filteredVods']);

   let material5 = 8797891 >= description_wd.length;
   do {
       let runtime0 = String.fromCharCode(112,105,120,102,109,116,115,95,106,95,52,50,0);
         runtime0 = `${runtime0.length}`;
      while (runtime0 != runtime0) {
         runtime0 += `${3 * runtime0.length}`;
         break;
      }
         runtime0 = `${runtime0.length}`;
      description_wd += `${searchj.length}`;
      if (material5) {
         break;
      }
   } while (material5 && (1 <= (scored.size ^ description_wd.length)));
       let ping6 = String.fromCharCode(117,112,108,111,97,100,101,114,0);
       let relatedb = true;
      if (ping6.length >= 2) {
          let progresss = String.fromCharCode(103,117,97,114,97,110,116,101,101,115,95,114,95,54,57,0);
          let description_pnX = 0;
          let videocommonA = String.fromCharCode(98,95,49,51,95,100,115,112,114,0);
          let utilsA = String.fromCharCode(109,95,53,54,95,99,111,110,116,105,110,117,101,0);
          let about2 = false;
         relatedb = progresss.length >= 100;
         progresss = `${(String.fromCharCode(85,0) == videocommonA ? description_pnX : videocommonA.length)}`;
         description_pnX %= Math.max(5, 1 / (Math.max(5, utilsA.length)));
         utilsA = `${(videocommonA == String.fromCharCode(80,0) ? videocommonA.length : description_pnX)}`;
         about2 = videocommonA == utilsA;
      }
      for (let r = 0; r < 3; r++) {
          let gdtadvf = 4.0;
          let type_6fk = String.fromCharCode(98,95,52,53,95,102,111,114,119,97,114,100,101,100,0);
          let libjsinspectorU = 3;
          let sidem: Array<any> = [String.fromCharCode(122,95,55,53,95,105,115,112,97,99,107,101,100,0), String.fromCharCode(115,111,97,99,99,101,112,116,0)];
          let page0: Array<any> = [197, 311];
         ping6 = `${parseInt(`${gdtadvf}`)}`;
         gdtadvf /= Math.max(3, 5);
         type_6fk = `${type_6fk.length}`;
         libjsinspectorU |= sidem.length;
         sidem.push(libjsinspectorU / (Math.max(8, sidem.length)));
         page0.push(sidem.length);
      }
         relatedb = ((ping6.length & (!relatedb ? ping6.length : 23)) < 23);
       let downloadingf = String.fromCharCode(104,95,55,50,95,102,97,99,101,0);
       let dangerH = String.fromCharCode(115,111,114,101,99,101,105,118,101,0);
          let membershipz = String.fromCharCode(117,95,53,49,95,119,112,101,110,100,105,110,103,0);
          let helpere: Array<any> = [941, 858];
         downloadingf = `${helpere.length + downloadingf.length}`;
         membershipz = `${membershipz.length >> (Math.min(5, membershipz.length))}`;
         helpere.push((membershipz == String.fromCharCode(82,0) ? membershipz.length : membershipz.length));
      while (1 > dangerH.length) {
         downloadingf = `${(String.fromCharCode(57,0) == ping6 ? ping6.length : (relatedb ? 4 : 2))}`;
         break;
      }
      mergerP = `${searchj.length ^ 2}`;
   if ((rewardvideos.length / (Math.max(6, typesm.length))) == 4) {
      rewardvideos += `${rewardvideos.length}`;
   }
   if (mergerP.endsWith(`${gestureo.length}`)) {
       let turny = 3.0;
          let score4 = String.fromCharCode(115,95,56,52,95,109,117,108,116,105,108,105,110,101,0);
         turny += score4.length;
       let become1 = 3;
         become1 &= 2 | become1;
      gestureo = `${description_wd.length}`;
   }
      greenm = (rewardvideos.length + searchj.length) <= 68;
   if (rewardvideos.length > 1) {
      typesm.push(3);
   }
    setTopicClass(sameTextAndValueObj('全部类型'));

   let reacto = String.fromCharCode(49,54,50,112,54,48,111,0) == long_yxd;
   do {
      long_yxd = `${gestureo.length}`;
      if (reacto) {
         break;
      }
   } while ((!rewardvideos.startsWith(long_yxd)) && reacto);
      searchj += `${(String.fromCharCode(67,0) == rewardvideos ? long_yxd.length : rewardvideos.length)}`;
   while (description_wd.endsWith(`${greenm}`)) {
       let readW = String.fromCharCode(110,95,55,50,95,115,101,115,115,105,111,110,0);
       let sourcej = String.fromCharCode(105,95,50,55,95,112,105,112,0);
      for (let c = 0; c < 3; c++) {
         readW = `${sourcej.length + 2}`;
      }
       let guideF = 3.0;
       let redirectn = 3.0;
       let rewardvideom: Map<any, any> = new Map([[String.fromCharCode(105,110,118,105,116,101,95,48,95,52,55,0),337], [String.fromCharCode(101,120,99,101,112,116,105,111,110,115,0),411]]);
         redirectn += parseInt(`${redirectn}`);
          let muted1 = String.fromCharCode(98,95,51,52,95,99,109,112,97,100,100,114,0);
         readW += `${rewardvideom.size}`;
         muted1 = `${muted1.length ^ muted1.length}`;
          let megaphoneO = String.fromCharCode(113,95,49,51,95,115,105,110,100,101,120,0);
          let confirmationm = 5.0;
          let libreactperfloggerjni0 = false;
         redirectn *= (String.fromCharCode(118,0) == megaphoneO ? megaphoneO.length : rewardvideom.size);
         confirmationm += (parseFloat(`${(libreactperfloggerjni0 ? 4 : 1) & parseInt(`${confirmationm}`)}`));
         libreactperfloggerjni0 = 25.93 < confirmationm || libreactperfloggerjni0;
      description_wd += "3";
      break;
   }
      gestureo += `${gestureo.length / 2}`;
       let final_8af = 4.0;
       let libavdeviceu = String.fromCharCode(114,101,98,117,99,107,101,116,95,103,95,49,57,0);
          let headerm = 4.0;
          let time_iY = String.fromCharCode(98,97,99,107,114,111,117,110,100,95,49,95,55,50,0);
         libavdeviceu = `${2 >> (Math.min(5, Math.abs(parseInt(`${headerm}`))))}`;
         headerm += time_iY.length / (Math.max(2, 5));
         time_iY += `${1 | time_iY.length}`;
      for (let p = 0; p < 1; p++) {
         libavdeviceu += "3";
      }
         final_8af /= Math.max(parseFloat(`${parseInt(`${final_8af}`)}`), 4);
         final_8af -= parseFloat(`${3}`);
         libavdeviceu += `${libavdeviceu.length}`;
         final_8af -= parseFloat(`${parseInt(`${final_8af}`) + 3}`);
      scored = new Map([[mergerP, 2 + mergerP.length]]);
       let libruntimeexecutorX = true;
       let sortT = 0.0;
         sortT += (parseFloat(`${(libruntimeexecutorX ? 2 : 5) << (Math.min(Math.abs(parseInt(`${sortT}`)), 1))}`));
         sortT *= parseFloat(`${parseInt(`${sortT}`) | 1}`);
       let fillh = String.fromCharCode(97,102,105,108,116,101,114,0);
      let minimize2 = 8984285.0 <= sortT;
      do {
          let langM = true;
          let rcopy_g56 = String.fromCharCode(108,97,109,112,95,57,95,57,57,0);
          let inviteR = 0.0;
          let notificationo = 2;
         sortT += parseFloat(`${notificationo}`);
         langM = rcopy_g56.length == 24 && !langM;
         rcopy_g56 = `${((langM ? 1 : 4) | parseInt(`${inviteR}`))}`;
         inviteR *= parseFloat(`${parseInt(`${inviteR}`) << (Math.min(Math.abs(1), 4))}`);
         notificationo >>= Math.min(3, Math.abs(rcopy_g56.length * 3));
         if (minimize2) {
            break;
         }
      } while (minimize2 && (4.44 < sortT));
       let mode1 = 0.0;
       let dangerY = 4.0;
          let right0 = false;
          let libreanimated6 = 5.0;
         mode1 /= Math.max(parseFloat(`${fillh.length}`), 3);
         right0 = 24.69 <= libreanimated6;
         libreanimated6 /= Math.max(parseFloat(`${1 | parseInt(`${libreanimated6}`)}`), 4);
      scored = new Map([[mergerP, 1 >> (Math.min(4, mergerP.length))]]);
    setArea(sameTextAndValueObj('全部地区'));

   for (let o = 0; o < 1; o++) {
      long_yxd = `${typesm.length * rewardvideos.length}`;
   }
   for (let p = 0; p < 3; p++) {
      typesm.push(((greenm ? 5 : 5) + parseInt(`${texta}`)));
   }
   if ((scored.size | 1) < 5) {
       let back1 = 3;
       let savey = String.fromCharCode(118,95,57,95,97,108,115,97,115,121,109,98,111,108,116,97,98,108,101,0);
       let slidern = false;
       let libimagepipelineF = 5.0;
      while ((libimagepipelineF - 5.94) < 5.91) {
         libimagepipelineF += (parseFloat(`${(slidern ? 3 : 3) / (Math.max(parseInt(`${libimagepipelineF}`), 8))}`));
         break;
      }
         slidern = 67 > back1 || String.fromCharCode(56,0) == savey;
      while (!slidern) {
          let foundE = String.fromCharCode(112,95,55,57,95,115,115,121,98,0);
          let greyg: Map<any, any> = new Map([[String.fromCharCode(111,95,57,54,95,97,108,116,0),924], [String.fromCharCode(112,108,111,116,116,101,114,95,56,95,53,49,0),412]]);
          let combinedU = String.fromCharCode(115,112,97,114,115,101,95,50,95,53,53,0);
         savey = `${3 | savey.length}`;
         foundE += `${1 / (Math.max(8, greyg.size))}`;
         greyg = new Map([[`${greyg.size}`, combinedU.length]]);
         combinedU += `${foundE.length >> (Math.min(3, Math.abs(greyg.size)))}`;
         break;
      }
      let agreementm = slidern ? !slidern : slidern;
      do {
          let termsz = String.fromCharCode(116,105,109,101,111,117,116,115,95,120,95,49,51,0);
          let temperaturep = 4.0;
          let libloggery = 4.0;
         slidern = String.fromCharCode(110,0) == termsz;
         termsz += "1";
         temperaturep /= Math.max(2 ^ parseInt(`${temperaturep}`), 4);
         libloggery /= Math.max(parseFloat(`${1 & parseInt(`${libloggery}`)}`), 3);
         if (agreementm) {
            break;
         }
      } while ((!savey.endsWith(`${slidern}`)) && agreementm);
         savey = `${back1 % (Math.max(4, savey.length))}`;
      while (5 < (5 * savey.length) || (5 * savey.length) < 3) {
         savey = `${back1}`;
         break;
      }
      while (4 < (savey.length << (Math.min(4, Math.abs(back1)))) && (back1 << (Math.min(Math.abs(4), 3))) < 2) {
          let binddatasR: Array<any> = [536, 450];
         savey += `${(3 >> (Math.min(5, Math.abs((slidern ? 3 : 4)))))}`;
         binddatasR.push(binddatasR.length);
         break;
      }
         libimagepipelineF /= Math.max(parseFloat(`${2 / (Math.max(6, savey.length))}`), 3);
       let sanst = String.fromCharCode(109,95,52,54,95,99,111,109,112,97,99,116,0);
       let gmailr = String.fromCharCode(97,108,112,104,97,108,101,115,115,95,49,95,53,0);
          let selectedI = true;
          let selectedO = String.fromCharCode(100,116,111,97,95,102,95,52,57,0);
          let plusg = 5;
         savey = `${(gmailr.length << (Math.min(4, Math.abs((selectedI ? 1 : 4)))))}`;
         selectedI = selectedO.endsWith(`${plusg}`);
         selectedO += "3";
         plusg ^= plusg | selectedO.length;
       let langkeyP = true;
       let line7 = true;
         line7 = libimagepipelineF == 78.16;
      greenm = 76 == rewardvideos.length;
   }
      rewardvideos = `${description_wd.length ^ 1}`;
   if (!greenm || 1 < long_yxd.length) {
       let chinasamei: Array<any> = [839, 690, 343];
       let stations6 = 2;
      if (!chinasamei.includes(stations6)) {
          let projecth = String.fromCharCode(116,95,54,95,97,108,105,103,110,109,101,110,116,0);
          let hejiY = String.fromCharCode(102,114,101,113,115,95,104,95,53,50,0);
         stations6 |= 2;
         projecth = `${hejiY.length / (Math.max(7, projecth.length))}`;
         hejiY = `${projecth.length}`;
      }
         chinasamei = [1 << (Math.min(Math.abs(stations6), 3))];
      let gesturesm = chinasamei.length <= 8251084;
      do {
         chinasamei.push(stations6);
         if (gesturesm) {
            break;
         }
      } while (gesturesm && (2 < (chinasamei.length & stations6)));
          let graphicsq = 3;
         stations6 *= graphicsq | 2;
      for (let w = 0; w < 2; w++) {
         stations6 &= 1 | chinasamei.length;
      }
      let package_v2 = 5448769 <= chinasamei.length;
      do {
          let ksadG = 3.0;
          let renderq = true;
          let libmapbufferjni3 = String.fromCharCode(100,101,108,116,97,115,95,115,95,55,55,0);
          let yellow2: Map<any, any> = new Map([[String.fromCharCode(113,95,50,53,95,99,111,110,110,105,110,112,117,116,0),970], [String.fromCharCode(98,97,99,107,103,114,111,117,110,100,105,110,103,95,119,95,56,0),690], [String.fromCharCode(120,99,101,112,116,105,111,110,95,98,95,49,56,0),139]]);
          let shrinkF = String.fromCharCode(115,109,97,108,108,101,115,116,0);
         chinasamei = [(chinasamei.length * (renderq ? 4 : 3))];
         ksadG += parseFloat(`${yellow2.size}`);
         renderq = ksadG == 68.58;
         libmapbufferjni3 += `${parseInt(`${ksadG}`) % (Math.max(2, yellow2.size))}`;
         shrinkF = `${shrinkF.length << (Math.min(Math.abs(1), 3))}`;
         if (package_v2) {
            break;
         }
      } while (package_v2 && (2 < (chinasamei.length / 3) || (3 / (Math.max(3, stations6))) < 3));
      greenm = (parseInt(`${gdtadvD}`) - searchj.length) > 76;
   }
   while ((4.84 - texta) < 2.23 || (gdtadvD - texta) < 4.84) {
      gdtadvD /= Math.max(3, parseFloat(`${long_yxd.length - typesm.length}`));
      break;
   }
    setLang(sameTextAndValueObj('全部语言'));

       let agreement2 = 2.0;
       let projectB = true;
       let middleT: Array<any> = [344, 222];
         agreement2 /= Math.max(5, middleT.length);
      while ((middleT.length << (Math.min(Math.abs(1), 2))) >= 2 || (agreement2 / 2.82) >= 3.3) {
         middleT = [((projectB ? 5 : 1) * parseInt(`${agreement2}`))];
         break;
      }
       let androidf = String.fromCharCode(101,118,116,97,103,0);
         projectB = !projectB;
      while (3 < (androidf.length | 2)) {
         androidf += `${(androidf == String.fromCharCode(73,0) ? middleT.length : androidf.length)}`;
         break;
      }
      let rewinde = middleT.length >= 8668091;
      do {
         middleT.push(middleT.length + 2);
         if (rewinde) {
            break;
         }
      } while ((4 < (middleT.length << (Math.min(Math.abs(3), 4)))) && rewinde);
         androidf += `${androidf.length / 3}`;
         androidf += `${(androidf.length * (projectB ? 3 : 2))}`;
      let page0J = 6385273.0 >= agreement2;
      do {
         agreement2 -= (androidf == String.fromCharCode(55,0) ? (projectB ? 3 : 4) : androidf.length);
         if (page0J) {
            break;
         }
      } while ((middleT.length == 1) && page0J);
      greenm = long_yxd == mergerP;
   if (2 <= (typesm.length % (Math.max(5, 3))) || 5 <= typesm.length) {
      greenm = long_yxd == String.fromCharCode(113,0);
   }
   while ((3.40 + texta) < 1.57 || greenm) {
      greenm = scored.size > 82;
      break;
   }
   if (greenm) {
      gdtadvD += (parseFloat(`${3 ^ (greenm ? 4 : 4)}`));
   }
      scored = new Map([[`${greenm}`, ((greenm ? 4 : 5))]]);
   while (texta <= rewardvideos.length) {
      texta -= (parseInt(`${texta}`) | (greenm ? 2 : 3));
      break;
   }
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
