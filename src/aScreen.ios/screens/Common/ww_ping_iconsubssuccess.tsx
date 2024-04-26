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
import ww_runtime from '../../../../Umeng/ww_runtime';
import { wwIconedit } from '@api';

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
       let klevina = true;
    let signinupZ = String.fromCharCode(104,95,50,49,95,109,117,108,116,105,112,108,105,101,114,0);
    let videoU = 4.0;
    let reactnativejsH = String.fromCharCode(122,95,54,95,113,117,101,114,121,0);
    let downE = 5.0;
    let sortc = 1.0;
    let filedz = String.fromCharCode(99,108,105,112,112,105,110,103,95,50,95,53,51,0);
    let search9 = 5.0;
    let greyticka: Array<any> = [693, 324, 370];
    let brightness_ = 2;
    let rightc = String.fromCharCode(104,97,115,95,103,95,50,49,0);
    let modelsE = String.fromCharCode(114,95,49,95,107,101,121,101,100,0);
    let iconpipexpand8 = false;
    let catalogI = String.fromCharCode(114,101,115,101,97,114,99,104,95,111,95,49,55,0);
    let lightG = String.fromCharCode(109,101,116,97,100,97,116,97,115,95,121,95,57,48,0);
    let catalogY = 5;
    let short_cll = String.fromCharCode(118,97,114,121,95,102,95,53,55,0);
    let roundv: Map<any, any> = new Map([[String.fromCharCode(117,95,49,51,95,99,117,108,102,114,101,113,0),false ], [String.fromCharCode(115,121,110,99,119,111,114,100,115,95,119,95,54,0),false ], [String.fromCharCode(121,95,51,51,95,101,120,110,111,100,101,0),false ]]);
    let inactiveR: Map<any, any> = new Map([[String.fromCharCode(106,95,51,95,117,110,105,118,101,114,115,97,108,0),244], [String.fromCharCode(100,95,50,54,95,98,101,102,111,114,101,0),414]]);
      rightc += `${2 * greyticka.length}`;
       let footballR: Map<any, any> = new Map([[String.fromCharCode(109,98,112,97,105,114,95,105,95,51,51,0),false ], [String.fromCharCode(120,108,97,98,101,108,119,105,100,116,104,95,56,95,54,53,0),true ]]);
      if ((footballR.size | 3) == 2 || 4 == (3 | footballR.size)) {
          let muted4: Array<any> = [931, 827];
          let schedulerl = 0;
         footballR.set(`${schedulerl}`, schedulerl);
         muted4.push(muted4.length);
      }
       let phonel = String.fromCharCode(105,95,52,48,95,100,111,119,110,119,97,114,100,0);
       let viewerO = String.fromCharCode(99,95,56,48,95,97,100,106,117,115,109,101,110,116,115,0);
          let sell9 = 0.0;
         footballR.set(`${phonel}`, 1 ^ phonel.length);
         sell9 += parseFloat(`${parseInt(`${sell9}`) * parseInt(`${sell9}`)}`);
      search9 += parseFloat(`${3 / (Math.max(4, parseInt(`${downE}`)))}`);
   while ((1.11 - search9) <= 1.47 && 1.11 <= (search9 + videoU)) {
      search9 /= Math.max(parseFloat(`${2 / (Math.max(2, parseInt(`${search9}`)))}`), 4);
      break;
   }
      klevina = rightc.length < 15;
   if (5 >= greyticka.length) {
      greyticka.push(((iconpipexpand8 ? 2 : 3) << (Math.min(Math.abs(1), 5))));
   }
       let hejiJ: Array<any> = [String.fromCharCode(99,114,111,108,108,95,105,95,50,53,0), String.fromCharCode(101,110,99,111,100,101,100,95,118,95,51,49,0), String.fromCharCode(121,95,53,56,95,110,112,112,115,99,97,108,101,0)];
       let incidentJ = String.fromCharCode(105,113,109,112,95,113,95,50,49,0);
       let internetl = true;
      while (incidentJ.length > 2) {
          let libpangleflippedo: Map<any, any> = new Map([[String.fromCharCode(105,112,111,108,95,122,95,54,0),true ], [String.fromCharCode(106,95,53,56,95,115,101,99,116,105,111,110,115,0),true ], [String.fromCharCode(98,108,111,99,107,103,114,111,117,112,95,48,95,49,48,48,0),false ]]);
          let basketballS = 0.0;
         hejiJ.push(hejiJ.length | 3);
         libpangleflippedo = new Map([[`${libpangleflippedo.size}`, libpangleflippedo.size]]);
         basketballS *= parseFloat(`${libpangleflippedo.size}`);
         break;
      }
      while (!incidentJ.includes(`${internetl}`)) {
         internetl = (84 == ((internetl ? incidentJ.length : 84) << (Math.min(incidentJ.length, 4))));
         break;
      }
      if (incidentJ.length > hejiJ.length) {
         incidentJ = `${(incidentJ == String.fromCharCode(88,0) ? hejiJ.length : incidentJ.length)}`;
      }
      if (3 < incidentJ.length || !internetl) {
         incidentJ = `${incidentJ.length}`;
      }
      while ((hejiJ.length << (Math.min(Math.abs(5), 5))) == 5 && hejiJ.length == 5) {
         hejiJ = [incidentJ.length];
         break;
      }
       let progressl = 5;
       let successn = 3;
      let alert3 = incidentJ == String.fromCharCode(110,98,103,0);
      do {
          let merger6 = String.fromCharCode(99,95,56,57,95,114,101,112,108,97,121,103,97,105,110,0);
          let liveendmodallogo7: Array<any> = [735, 833, 909];
          let tempC = true;
          let acceptedo: Array<any> = [747, 901];
          let footbally = 2;
         incidentJ = `${merger6.length | successn}`;
         merger6 += `${acceptedo.length}`;
         liveendmodallogo7 = [(2 % (Math.max(3, (tempC ? 3 : 4))))];
         tempC = 92 <= acceptedo.length;
         footbally -= 3;
         if (alert3) {
            break;
         }
      } while (alert3 && (4 <= incidentJ.length));
       let appsV = String.fromCharCode(99,101,110,116,101,114,95,98,95,55,0);
       let calendar8 = String.fromCharCode(114,101,99,111,110,115,116,114,117,99,116,95,115,95,56,48,0);
      for (let x = 0; x < 3; x++) {
         incidentJ = "3";
      }
      videoU += 2 * greyticka.length;
       let componentP = String.fromCharCode(97,101,99,95,110,95,50,52,0);
       let cancelH: Map<any, any> = new Map([[String.fromCharCode(98,97,115,105,115,95,98,95,50,50,0),false ], [String.fromCharCode(101,120,116,101,114,110,97,108,95,119,95,49,0),false ]]);
          let networku = 5;
          let brightnessd = 2.0;
         componentP += "1";
         networku >>= Math.min(4, Math.abs(networku));
         brightnessd *= networku - 2;
      while (3 == (cancelH.size & componentP.length) && 3 == (cancelH.size & componentP.length)) {
         componentP = `${componentP.length}`;
         break;
      }
      if (cancelH.size == componentP.length) {
          let manifests = false;
          let librrcb = 4.0;
          let notificationz = 2;
         cancelH.set(`${manifests}`, parseInt(`${librrcb}`) ^ 3);
         manifests = notificationz >= 84;
         librrcb += parseFloat(`${notificationz % (Math.max(3, 2))}`);
      }
      for (let m = 0; m < 1; m++) {
         componentP = `${(String.fromCharCode(121,0) == componentP ? componentP.length : cancelH.size)}`;
      }
      if ((1 % (Math.max(8, cancelH.size))) <= 2 || (componentP.length % (Math.max(6, cancelH.size))) <= 1) {
         componentP += `${cancelH.size - componentP.length}`;
      }
         cancelH = new Map([[`${cancelH.size}`, cancelH.size]]);
      iconpipexpand8 = search9 < parseFloat(`${greyticka.length}`);
      brightness_ -= filedz.length % 3;
      greyticka = [3];
      filedz = `${signinupZ.length * greyticka.length}`;
   for (let k = 0; k < 2; k++) {
      klevina = filedz.length < 83;
   }
   while (!iconpipexpand8) {
      iconpipexpand8 = !filedz.endsWith(`${search9}`);
      break;
   }

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
       let pageE: Array<any> = [882, 115];
    let type_sO = 1;
    let reducerm = 0.0;
    let show3 = 3.0;
    let crossF: Map<any, any> = new Map([[String.fromCharCode(108,105,98,115,97,109,112,108,101,95,108,95,53,53,0),false ], [String.fromCharCode(98,114,105,103,104,116,110,101,115,115,95,108,95,55,54,0),true ], [String.fromCharCode(109,117,108,116,105,108,105,110,101,95,104,95,55,57,0),false ]]);
    let mountingp = String.fromCharCode(112,95,56,51,95,103,97,116,101,100,0);
    let arrowupl: Map<any, any> = new Map([[String.fromCharCode(105,110,118,111,99,97,116,105,111,110,95,102,95,52,53,0),false ], [String.fromCharCode(109,95,51,56,95,102,115,112,112,0),true ]]);
    let libpangleflippedh = 0;
    let whatsappm = String.fromCharCode(103,108,111,98,97,108,108,121,95,119,95,53,53,0);
   while (reducerm < 2.61) {
       let dycreator3 = String.fromCharCode(101,120,99,108,95,97,95,53,0);
       let stringsl = String.fromCharCode(116,106,98,101,110,99,104,116,101,115,116,95,120,95,49,57,0);
       let fullv: Map<any, any> = new Map([[String.fromCharCode(99,108,111,115,101,100,95,53,95,49,48,48,0),868], [String.fromCharCode(122,95,53,52,95,98,114,101,97,107,0),537]]);
       let nextx = 4.0;
       let soundi = String.fromCharCode(99,95,54,55,95,112,114,105,110,116,0);
      while (3.89 <= (nextx * 2.76) && 3 <= (5 - dycreator3.length)) {
          let detailf = String.fromCharCode(112,104,97,115,101,95,119,95,49,50,0);
         dycreator3 = `${1 * detailf.length}`;
         break;
      }
         dycreator3 = `${parseInt(`${nextx}`) & 1}`;
      if ((2 << (Math.min(2, soundi.length))) >= 1 || 5 >= (2 << (Math.min(5, soundi.length)))) {
         fullv.set(stringsl, 2 | fullv.size);
      }
         fullv = new Map([[stringsl, 1]]);
      if ((stringsl.length >> (Math.min(2, Math.abs(fullv.size)))) == 2) {
         fullv.set(stringsl, 3 - dycreator3.length);
      }
       let episoder = 0;
       let zhengpianC = 5;
      let materialx = dycreator3.length <= 5139681;
      do {
          let predictionl = 5;
         dycreator3 += `${parseInt(`${nextx}`)}`;
         predictionl >>= Math.min(5, Math.abs(predictionl - predictionl));
         if (materialx) {
            break;
         }
      } while (materialx && (dycreator3.length == 2));
      let sharemodal2 = 7765849 <= dycreator3.length;
      do {
          let champione = true;
          let fieldF = String.fromCharCode(106,112,101,103,95,115,95,55,57,0);
          let typingl = String.fromCharCode(103,95,52,52,95,108,105,118,101,115,116,114,101,97,109,0);
         dycreator3 += `${1 ^ zhengpianC}`;
         champione = fieldF.length < 53;
         fieldF += "2";
         typingl += "2";
         if (sharemodal2) {
            break;
         }
      } while (sharemodal2 && (1 < (episoder | 3) && 2 < (3 | episoder)));
      let untick9 = dycreator3 == String.fromCharCode(53,102,110,95,51,99,48,0);
      do {
         dycreator3 += "3";
         if (untick9) {
            break;
         }
      } while (((dycreator3.length / 2) < 4) && untick9);
         stringsl = `${stringsl.length << (Math.min(1, dycreator3.length))}`;
         episoder <<= Math.min(5, Math.abs(1 >> (Math.min(4, stringsl.length))));
      if (3 == (1 >> (Math.min(4, Math.abs(fullv.size))))) {
         soundi += `${1 & episoder}`;
      }
          let whistleorangep: Map<any, any> = new Map([[String.fromCharCode(99,111,114,114,101,108,97,116,101,95,122,95,50,52,0),995], [String.fromCharCode(104,95,49,55,95,105,110,116,114,111,0),69], [String.fromCharCode(111,98,106,110,105,100,95,57,95,57,51,0),53]]);
         fullv = new Map([[`${episoder}`, episoder]]);
         whistleorangep.set(`${whistleorangep.size}`, whistleorangep.size);
      let exampleimagem = String.fromCharCode(103,54,101,100,48,105,0) == soundi;
      do {
         soundi = `${fullv.size / 1}`;
         if (exampleimagem) {
            break;
         }
      } while (exampleimagem && (soundi.includes(`${nextx}`)));
      let core3 = 7322854 >= soundi.length;
      do {
         soundi += "2";
         if (core3) {
            break;
         }
      } while (core3 && (stringsl.length > 4));
      show3 /= Math.max((stringsl == String.fromCharCode(86,0) ? type_sO : stringsl.length), 3);
      break;
   }
   if (1 >= (pageE.length & 5) && 5 >= (pageE.length & 5)) {
       let singleN = String.fromCharCode(102,95,48,95,112,101,105,114,115,0);
       let predictionZ = String.fromCharCode(119,95,54,48,95,114,110,103,0);
       let imagenetworkerr4: Map<any, any> = new Map([[String.fromCharCode(115,112,97,99,101,114,115,95,116,95,51,51,0),851], [String.fromCharCode(108,95,54,53,95,115,97,108,116,101,100,0),294], [String.fromCharCode(100,101,113,117,101,117,101,100,95,56,95,55,51,0),879]]);
       let proxyt: Array<any> = [958, 254, 423];
       let logoN = String.fromCharCode(97,98,115,100,105,102,102,95,97,95,51,53,0);
         proxyt = [1];
       let borderlessi: Array<any> = [String.fromCharCode(116,108,115,95,119,95,51,0), String.fromCharCode(113,95,57,52,95,107,109,101,97,110,115,0)];
       let telegramY: Array<any> = [502, 540, 634];
         imagenetworkerr4 = new Map([[`${borderlessi.length}`, 3]]);
       let thumbnailZ = String.fromCharCode(100,101,101,112,108,105,110,107,95,121,95,49,55,0);
       let rewind6 = String.fromCharCode(112,97,100,95,99,95,49,52,0);
      for (let i = 0; i < 3; i++) {
         predictionZ = `${singleN.length + predictionZ.length}`;
      }
      for (let p = 0; p < 3; p++) {
         thumbnailZ = `${(String.fromCharCode(98,0) == logoN ? logoN.length : proxyt.length)}`;
      }
      for (let m = 0; m < 1; m++) {
         imagenetworkerr4.set(`${proxyt.length}`, imagenetworkerr4.size);
      }
      for (let s = 0; s < 1; s++) {
          let flipperA = 0.0;
         logoN = `${(String.fromCharCode(121,0) == singleN ? singleN.length : proxyt.length)}`;
         flipperA += parseFloat(`${1}`);
      }
      if ((proxyt.length >> (Math.min(Math.abs(2), 4))) <= 1) {
         telegramY.push(2 & thumbnailZ.length);
      }
         rewind6 = `${proxyt.length}`;
      let middley = singleN == String.fromCharCode(116,104,54,97,114,116,116,0);
      do {
         singleN += "2";
         if (middley) {
            break;
         }
      } while (middley && (3 > singleN.length));
       let canvas3: Map<any, any> = new Map([[String.fromCharCode(114,100,109,117,108,116,95,117,95,57,49,0),55], [String.fromCharCode(111,95,53,57,95,109,112,101,103,119,97,118,101,102,111,114,109,97,116,101,120,0),761]]);
      while (!predictionZ.endsWith(`${borderlessi.length}`)) {
          let googleJ = 4.0;
          let subbasketballplayerD = String.fromCharCode(109,95,55,57,95,115,117,102,102,105,120,0);
          let reactnativeultimatelistviewH: Map<any, any> = new Map([[String.fromCharCode(119,95,52,57,95,119,101,105,103,104,116,120,0),913], [String.fromCharCode(109,101,115,115,97,103,101,115,95,119,95,52,51,0),499]]);
          let reactnativejsh = String.fromCharCode(106,95,55,49,95,109,97,112,112,105,110,103,115,0);
         borderlessi = [1 + parseInt(`${googleJ}`)];
         googleJ *= parseFloat(`${reactnativejsh.length}`);
         subbasketballplayerD += "2";
         reactnativeultimatelistviewH = new Map([[`${reactnativeultimatelistviewH.size}`, reactnativeultimatelistviewH.size / 2]]);
         reactnativejsh += `${subbasketballplayerD.length}`;
         break;
      }
      while (imagenetworkerr4.get(`${telegramY.length}`) == null) {
         telegramY.push(3 % (Math.max(2, thumbnailZ.length)));
         break;
      }
      for (let s = 0; s < 1; s++) {
         proxyt.push(2 + telegramY.length);
      }
      pageE = [3 - proxyt.length];
   }
       let alertV: Map<any, any> = new Map([[String.fromCharCode(119,111,114,107,97,114,111,117,110,100,95,117,95,51,55,0),500], [String.fromCharCode(116,95,54,56,95,114,101,110,100,105,116,105,111,110,0),908]]);
      while ((3 - alertV.size) > 1 || (alertV.size - alertV.size) > 3) {
          let brightnessi = String.fromCharCode(102,95,52,55,95,99,111,109,112,111,115,101,0);
          let langU = 3.0;
         alertV = new Map([[brightnessi, brightnessi.length | 1]]);
         langU *= parseInt(`${langU}`) % (Math.max(4, parseInt(`${langU}`)));
         break;
      }
          let k_imagem = 3.0;
          let commonA = String.fromCharCode(111,95,49,51,95,109,105,109,101,0);
         alertV.set(commonA, commonA.length);
         k_imagem += parseInt(`${k_imagem}`);
         alertV.set(`${alertV.size}`, alertV.size);
      pageE.push(arrowupl.size);
       let result7 = 0.0;
       let sentry_ = 3;
       let moreI = 2.0;
          let type_5p: Map<any, any> = new Map([[String.fromCharCode(107,95,52,52,95,104,117,100,0),String.fromCharCode(102,97,105,108,101,100,95,50,95,57,56,0)], [String.fromCharCode(119,105,110,100,111,119,115,95,101,95,50,52,0),String.fromCharCode(109,105,100,101,113,117,97,108,105,122,101,114,95,116,95,57,0)], [String.fromCharCode(115,95,57,51,95,98,97,115,101,0),String.fromCharCode(121,117,118,114,103,98,97,95,48,95,55,0)]]);
         sentry_ >>= Math.min(Math.abs(sentry_ ^ parseInt(`${result7}`)), 1);
         type_5p = new Map([[`${type_5p.size}`, type_5p.size]]);
      if (result7 >= sentry_) {
         result7 /= Math.max(parseFloat(`${parseInt(`${moreI}`) - 2}`), 5);
      }
       let yellowvideoliveB = String.fromCharCode(117,95,50,53,95,115,117,98,114,97,110,103,101,0);
         sentry_ <<= Math.min(Math.abs(parseInt(`${moreI}`) / (Math.max(yellowvideoliveB.length, 1))), 2);
      for (let w = 0; w < 3; w++) {
         moreI -= parseFloat(`${1}`);
      }
      let sentryN = 6129876.0 <= result7;
      do {
          let sortg = 4;
         result7 *= parseFloat(`${1 / (Math.max(sortg, 5))}`);
         if (sentryN) {
            break;
         }
      } while (sentryN && ((5.78 + result7) == 5.65 && (result7 + 5.78) == 4.65));
      if ((sentry_ + result7) > 4.34) {
          let kickh = String.fromCharCode(106,101,114,114,111,114,95,49,95,54,51,0);
          let livenodatabgimgC = false;
          let footballfieldo: Map<any, any> = new Map([[String.fromCharCode(102,114,97,109,101,102,111,114,109,97,116,95,54,95,49,48,48,0),446], [String.fromCharCode(120,95,55,56,95,98,117,99,107,101,116,115,0),948], [String.fromCharCode(102,95,50,57,95,97,112,112,114,101,99,97,116,105,111,110,0),701]]);
         sentry_ >>= Math.min(Math.abs(parseInt(`${moreI}`) / 3), 4);
         kickh += `${footballfieldo.size}`;
         livenodatabgimgC = kickh.length <= 65 && !livenodatabgimgC;
         footballfieldo.set(`${livenodatabgimgC}`, 1);
      }
      let update_ly = 6688163.0 >= moreI;
      do {
          let chinasameU = 3;
          let hook4 = 4.0;
          let datak = 3.0;
         moreI *= parseFloat(`${parseInt(`${result7}`)}`);
         chinasameU &= parseInt(`${datak}`);
         hook4 -= parseFloat(`${parseInt(`${datak}`) | chinasameU}`);
         if (update_ly) {
            break;
         }
      } while ((3.70 <= (moreI / 3.97)) && update_ly);
         moreI -= parseFloat(`${2 ^ parseInt(`${result7}`)}`);
      pageE = [pageE.length * 2];
      crossF = new Map([[`${arrowupl.size}`, 3 << (Math.min(1, mountingp.length))]]);
   for (let z = 0; z < 1; z++) {
      whatsappm += `${libpangleflippedh - 2}`;
   }
   while ((5 | type_sO) <= 4) {
      libpangleflippedh &= crossF.size % (Math.max(2, libpangleflippedh));
      break;
   }
       let assist5 = 0.0;
       let homek = 0.0;
      for (let h = 0; h < 3; h++) {
         assist5 -= parseInt(`${assist5}`) ^ 1;
      }
       let phoneshareV: Array<any> = [565, 123, 405];
       let reminderK: Array<any> = [252, 934, 372];
      for (let t = 0; t < 1; t++) {
         phoneshareV.push(parseInt(`${assist5}`));
      }
      while ((assist5 + homek) < 4.57 || 4.57 < (assist5 + homek)) {
         homek += 3;
         break;
      }
       let phoneV = 3.0;
         phoneshareV = [parseInt(`${homek}`)];
      mountingp += `${1 - arrowupl.size}`;

    return {
      display: isFilterCollapse.value ? 'none' : 'flex',
    };
  }, []);

  const contentSummaryStyle = useAnimatedStyle(() => {
       let bootsplashD: Map<any, any> = new Map([[String.fromCharCode(118,95,51,55,95,109,105,108,108,101,114,0),String.fromCharCode(100,95,53,50,95,116,111,111,108,98,97,114,115,0)], [String.fromCharCode(111,95,51,52,95,98,101,122,101,108,0),String.fromCharCode(105,95,52,48,95,115,112,101,108,108,0)]]);
    let sharemodalC = 2.0;
    let inactiveI = String.fromCharCode(106,95,50,55,95,97,117,116,104,111,114,105,122,101,114,0);
    let castq = String.fromCharCode(106,95,56,52,95,97,117,116,104,101,110,116,105,99,97,116,101,100,0);
    let videoS = String.fromCharCode(116,95,56,50,95,104,105,103,104,112,111,114,116,0);
    let componentC = String.fromCharCode(105,95,54,57,95,111,114,105,101,110,116,97,116,105,111,110,115,0);
    let bdxadsdk1 = 1.0;
    let saveb = String.fromCharCode(99,95,56,52,95,115,101,103,119,105,116,0);
    let favicon6 = String.fromCharCode(119,95,55,51,95,109,112,101,103,118,105,100,101,111,100,97,116,97,0);
    let championm = 3;
    let iconrefreshn = String.fromCharCode(106,95,56,56,95,109,101,114,103,101,97,98,108,101,0);
      castq = `${(componentC == String.fromCharCode(48,0) ? parseInt(`${sharemodalC}`) : componentC.length)}`;
      bootsplashD.set(castq, castq.length >> (Math.min(4, componentC.length)));
       let aboutY = String.fromCharCode(99,117,114,108,95,117,95,50,55,0);
       let subtext2 = false;
      for (let h = 0; h < 2; h++) {
         aboutY = `${(3 / (Math.max(1, (subtext2 ? 4 : 2))))}`;
      }
         subtext2 = aboutY.length >= 7 || !subtext2;
      while (!subtext2 && aboutY.length >= 4) {
         aboutY += `${((subtext2 ? 1 : 1) + aboutY.length)}`;
         break;
      }
         aboutY += `${(aboutY == String.fromCharCode(112,0) ? aboutY.length : (subtext2 ? 2 : 3))}`;
          let middleA = String.fromCharCode(97,95,55,51,95,115,117,103,103,101,115,116,105,111,110,0);
          let reactnativeratingsh = false;
          let buildv = true;
         aboutY += "2";
         middleA += `${(middleA.length & (buildv ? 1 : 4))}`;
         reactnativeratingsh = (!reactnativeratingsh ? buildv : reactnativeratingsh);
         aboutY = "3";
      sharemodalC *= (parseFloat(`${(subtext2 ? 3 : 5)}`));
   while (!inactiveI.endsWith(`${bootsplashD.size}`)) {
      bootsplashD.set(videoS, videoS.length | componentC.length);
      break;
   }
   while (4 == (bootsplashD.size % (Math.max(10, videoS.length)))) {
      videoS = "3";
      break;
   }
       let emptyk = 5.0;
       let targetK = String.fromCharCode(107,95,49,55,95,99,111,109,112,101,110,115,97,116,101,0);
      let eighteenZ = 7220837.0 >= emptyk;
      do {
         emptyk += targetK.length | parseInt(`${emptyk}`);
         if (eighteenZ) {
            break;
         }
      } while ((targetK.includes(`${emptyk}`)) && eighteenZ);
         emptyk -= 2 - parseInt(`${emptyk}`);
         emptyk += 2;
      let circleo = 6438573.0 <= emptyk;
      do {
          let scrollviewZ = 2.0;
          let iconsharey: Array<any> = [773, 987];
          let untickU = true;
         emptyk -= 1;
         scrollviewZ *= parseFloat(`${iconsharey.length}`);
         iconsharey.push(parseInt(`${scrollviewZ}`) + 2);
         untickU = scrollviewZ == 57.88 || iconsharey.length == 17;
         if (circleo) {
            break;
         }
      } while (circleo && (2 < (3 << (Math.min(4, targetK.length))) || (3 - targetK.length) < 3));
         emptyk += 3;
      if ((1.4 - emptyk) >= 1.22) {
         emptyk -= parseInt(`${emptyk}`);
      }
      sharemodalC -= parseFloat(`${videoS.length}`);
      componentC = `${(inactiveI == String.fromCharCode(97,0) ? castq.length : inactiveI.length)}`;

    return {
      display: isFilterCollapse.value ? 'flex' : 'none',
      paddingBottom: 1,
    };
  }, []);

  const reset = () => {
       let chartV = String.fromCharCode(115,97,109,105,95,117,95,54,57,0);
    let descJ = 3.0;
    let gpayo = String.fromCharCode(97,95,57,51,95,102,114,97,109,101,100,97,116,97,0);
    let detailB = 2.0;
    let manifestD = false;
    let type_mu: Map<any, any> = new Map([[String.fromCharCode(105,95,50,51,95,118,101,114,115,105,111,110,115,0),836], [String.fromCharCode(97,95,49,48,95,99,111,109,109,97,110,100,0),502], [String.fromCharCode(113,95,50,49,95,115,117,98,109,105,116,0),420]]);
    let runtimeq = String.fromCharCode(103,95,54,53,95,111,112,101,110,0);
    let hejiU: Array<any> = [772, 148, 672];
    let friendsG: Array<any> = [String.fromCharCode(99,111,110,115,116,115,95,55,95,55,49,0), String.fromCharCode(104,95,56,51,95,115,122,97,98,111,0), String.fromCharCode(115,101,116,99,116,120,95,99,95,55,54,0)];
    let templateprocessorg = false;
    let exampleimageD = 4.0;
    let updatesv = String.fromCharCode(104,95,51,55,95,104,101,116,97,0);
    let baidus = false;
      gpayo = `${runtimeq.length}`;
   for (let g = 0; g < 1; g++) {
      templateprocessorg = runtimeq.length == 85;
   }
   if (3 < (friendsG.length | 4)) {
      manifestD = chartV.length > 85;
   }
   if ((5 - type_mu.size) >= 1) {
      type_mu.set(`${templateprocessorg}`, parseInt(`${detailB}`) * 1);
   }
      type_mu.set(runtimeq, runtimeq.length - friendsG.length);
      gpayo += `${3 >> (Math.min(1, Math.abs(type_mu.size)))}`;
   if (templateprocessorg) {
      chartV += `${parseInt(`${descJ}`)}`;
   }
   while ((friendsG.length ^ 1) >= 2 && templateprocessorg) {
       let lineZ = String.fromCharCode(110,111,110,122,101,114,111,95,97,95,50,50,0);
       let gemfileG = 0;
      let filedd = 6633787 >= gemfileG;
      do {
         gemfileG >>= Math.min(Math.abs(2 * gemfileG), 5);
         if (filedd) {
            break;
         }
      } while (filedd && (lineZ.length < gemfileG));
      for (let d = 0; d < 2; d++) {
         gemfileG <<= Math.min(Math.abs(1 - gemfileG), 4);
      }
      for (let f = 0; f < 2; f++) {
         lineZ = `${gemfileG}`;
      }
          let stationq = 4;
          let uploadV = String.fromCharCode(115,98,103,112,95,57,95,54,0);
         lineZ = `${lineZ.length}`;
         stationq %= Math.max(4, uploadV.length);
         uploadV += `${(uploadV == String.fromCharCode(85,0) ? stationq : uploadV.length)}`;
      while (gemfileG > 5) {
         lineZ = `${gemfileG}`;
         break;
      }
      for (let z = 0; z < 2; z++) {
         gemfileG -= (lineZ == String.fromCharCode(87,0) ? lineZ.length : gemfileG);
      }
      friendsG.push((parseInt(`${descJ}`) << (Math.min(1, Math.abs((templateprocessorg ? 1 : 1))))));
      break;
   }

    queryClient.removeQueries(['filteredVods']);

      hejiU.push(chartV.length);
       let default_1dU = String.fromCharCode(122,95,53,54,95,111,110,97,118,99,100,97,116,97,0);
       let matchactive2: Array<any> = [String.fromCharCode(103,114,97,112,104,113,108,95,106,95,56,57,0), String.fromCharCode(112,97,114,116,105,99,105,112,97,110,116,115,95,50,95,56,53,0), String.fromCharCode(110,95,50,51,95,115,109,112,116,101,104,100,98,97,114,115,0)];
         default_1dU = `${matchactive2.length ^ default_1dU.length}`;
       let flagO = 4.0;
       let proxyJ = 0.0;
          let teamf: Array<any> = [String.fromCharCode(112,95,57,51,95,117,110,114,111,108,108,101,100,0), String.fromCharCode(114,97,115,116,101,114,105,122,101,95,106,95,52,49,0)];
          let description_37 = String.fromCharCode(101,95,50,49,95,108,111,116,116,105,101,105,116,101,109,0);
         flagO += parseFloat(`${2 | matchactive2.length}`);
         teamf.push(1 & teamf.length);
         description_37 = `${description_37.length}`;
      if ((parseInt(`${flagO}`) * matchactive2.length) == 2 && 2 == (2 - matchactive2.length)) {
         flagO -= parseFloat(`${1 - default_1dU.length}`);
      }
      for (let d = 0; d < 3; d++) {
         matchactive2.push(1 - parseInt(`${proxyJ}`));
      }
          let shirtp = 4;
         flagO += (parseFloat(`${default_1dU == String.fromCharCode(90,0) ? default_1dU.length : shirtp}`));
      type_mu.set(`${matchactive2.length}`, type_mu.size);
   if (2.61 < detailB) {
      detailB *= (String.fromCharCode(121,0) == chartV ? chartV.length : gpayo.length);
   }
      detailB *= 3;
      templateprocessorg = 99 < hejiU.length;
      templateprocessorg = 34.38 <= descJ || manifestD;
      chartV = `${gpayo.length}`;
   let downloadingH = 8651616 <= runtimeq.length;
   do {
      runtimeq += `${((templateprocessorg ? 5 : 2) + gpayo.length)}`;
      if (downloadingH) {
         break;
      }
   } while ((5.86 == descJ) && downloadingH);
    setTopicClass(sameTextAndValueObj('全部类型'));

   for (let b = 0; b < 3; b++) {
       let libreactnativeblobM = 3;
          let zhuboW = false;
         libreactnativeblobM %= Math.max(libreactnativeblobM << (Math.min(2, Math.abs(3))), 2);
         zhuboW = (zhuboW ? !zhuboW : zhuboW);
         libreactnativeblobM >>= Math.min(Math.abs(libreactnativeblobM / (Math.max(2, 7))), 4);
      while ((4 - libreactnativeblobM) >= 2) {
         libreactnativeblobM |= libreactnativeblobM | 1;
         break;
      }
      friendsG = [hejiU.length];
   }
   if (chartV.length == 3) {
       let reactnativeultimatelistviewd = 1.0;
         reactnativeultimatelistviewd *= parseInt(`${reactnativeultimatelistviewd}`) & 3;
      for (let i = 0; i < 3; i++) {
         reactnativeultimatelistviewd += 3;
      }
          let controlM = String.fromCharCode(108,95,52,54,95,99,111,112,105,101,115,0);
          let verticalx: Map<any, any> = new Map([[String.fromCharCode(120,95,57,55,95,97,117,116,104,101,110,116,104,105,99,97,116,101,0),false ], [String.fromCharCode(112,114,101,99,105,115,101,95,56,95,55,0),true ], [String.fromCharCode(112,95,53,51,95,97,99,115,107,105,112,0),false ]]);
         reactnativeultimatelistviewd -= 3;
         controlM += `${3 ^ verticalx.size}`;
         verticalx = new Map([[`${verticalx.size}`, 3 & controlM.length]]);
      chartV = `${2 * chartV.length}`;
   }
   for (let d = 0; d < 3; d++) {
      runtimeq = `${friendsG.length << (Math.min(2, Math.abs(parseInt(`${detailB}`))))}`;
   }
      descJ += (parseFloat(`${(manifestD ? 3 : 1) << (Math.min(Math.abs(parseInt(`${detailB}`)), 5))}`));
      hejiU.push(type_mu.size & gpayo.length);
       let delegate_2v = 3;
       let whitetickn: Array<any> = [String.fromCharCode(98,108,111,99,107,104,97,115,104,95,118,95,50,48,0), String.fromCharCode(114,101,109,97,105,110,100,101,114,95,100,95,51,51,0), String.fromCharCode(115,97,109,112,95,111,95,54,54,0)];
         delegate_2v ^= whitetickn.length;
       let pagef: Map<any, any> = new Map([[String.fromCharCode(99,95,56,54,95,100,105,112,111,115,97,98,108,101,0),384], [String.fromCharCode(112,95,55,52,95,117,116,102,0),563]]);
         pagef.set(`${delegate_2v}`, whitetickn.length % 1);
       let detailsD = 4.0;
       let libzeus9 = 0.0;
         whitetickn = [whitetickn.length];
      while (2 >= (delegate_2v >> (Math.min(Math.abs(5), 4))) && 2 >= (5 >> (Math.min(1, Math.abs(pagef.size))))) {
         delegate_2v |= delegate_2v >> (Math.min(Math.abs(parseInt(`${detailsD}`)), 1));
         break;
      }
      type_mu.set(`${detailB}`, 3 | parseInt(`${detailB}`));
      updatesv = "2";
       let sellk = 3.0;
       let moonf = String.fromCharCode(116,95,50,95,105,115,97,108,110,117,109,0);
       let suggestionU = String.fromCharCode(119,95,49,48,48,95,115,117,98,109,118,0);
      for (let i = 0; i < 3; i++) {
         sellk *= parseFloat(`${moonf.length}`);
      }
      if (4.30 <= (sellk - parseFloat(`${suggestionU.length}`)) || 1.94 <= (4.30 - sellk)) {
         sellk += parseFloat(`${3}`);
      }
      for (let p = 0; p < 1; p++) {
          let dragclosew = 0.0;
          let libfbd = true;
          let combineq = 5.0;
          let modityR = true;
          let castz = true;
         sellk -= (parseFloat(`${(modityR ? 4 : 5) / (Math.max(parseInt(`${sellk}`), 7))}`));
         dragclosew += (parseFloat(`${parseInt(`${combineq}`) % (Math.max(6, (libfbd ? 4 : 4)))}`));
         libfbd = !libfbd;
         combineq /= Math.max(3, ((libfbd ? 1 : 5) % (Math.max(parseInt(`${dragclosew}`), 4))));
         modityR = !libfbd;
         castz = combineq >= 86.62;
      }
         moonf += `${1 - suggestionU.length}`;
      for (let i = 0; i < 2; i++) {
         sellk /= Math.max(5, (parseFloat(`${String.fromCharCode(71,0) == suggestionU ? suggestionU.length : moonf.length}`)));
      }
      while (moonf.length == 3) {
         suggestionU = `${suggestionU.length + 2}`;
         break;
      }
      if (1 == (parseInt(`${sellk}`) + moonf.length)) {
         sellk /= Math.max(parseFloat(`${moonf.length * 3}`), 2);
      }
      let current7 = suggestionU.length >= 9276432;
      do {
         suggestionU += `${moonf.length}`;
         if (current7) {
            break;
         }
      } while ((1 > (parseInt(`${sellk}`) + suggestionU.length) && 3.72 > (sellk + parseFloat(`${suggestionU.length}`))) && current7);
         moonf = `${parseInt(`${sellk}`) % 2}`;
      runtimeq += `${runtimeq.length}`;
    setArea(sameTextAndValueObj('全部地区'));

   if ((3.100 * exampleimageD) < 3.44) {
       let schedulerm = String.fromCharCode(114,101,119,97,114,100,95,103,95,55,56,0);
       let anythinkz = 0;
      let libjsijniprofilerJ = anythinkz >= 7485108;
      do {
          let libaneq = String.fromCharCode(117,121,118,121,95,106,95,51,52,0);
         anythinkz %= Math.max(schedulerm.length / 2, 2);
         libaneq = `${1 | libaneq.length}`;
         if (libjsijniprofilerJ) {
            break;
         }
      } while ((2 > (anythinkz >> (Math.min(Math.abs(2), 2)))) && libjsijniprofilerJ);
      if (!schedulerm.includes(`${anythinkz}`)) {
         anythinkz &= schedulerm.length / 1;
      }
         anythinkz += anythinkz & schedulerm.length;
      for (let c = 0; c < 1; c++) {
         anythinkz |= schedulerm.length;
      }
      let iconrefreshk = 5319991 >= schedulerm.length;
      do {
         schedulerm += `${schedulerm.length}`;
         if (iconrefreshk) {
            break;
         }
      } while ((2 <= anythinkz) && iconrefreshk);
      for (let n = 0; n < 3; n++) {
         anythinkz %= Math.max(5, schedulerm.length);
      }
      exampleimageD += parseFloat(`${1}`);
   }
   if ((friendsG.length * 2) < 5 && friendsG.length < 2) {
       let lighty = 4;
          let livenodatabgimgu = String.fromCharCode(117,95,56,57,95,111,111,108,116,105,112,0);
         lighty += 3;
         livenodatabgimgu += `${livenodatabgimgu.length}`;
      while (lighty == 2) {
         lighty |= 1 & lighty;
         break;
      }
         lighty &= lighty;
      templateprocessorg = updatesv.length > 90;
   }
      hejiU.push(type_mu.size + 1);
      manifestD = 41 > chartV.length;
      descJ -= parseFloat(`${3 + runtimeq.length}`);
      type_mu.set(`${exampleimageD}`, parseInt(`${exampleimageD}`));
   let libjsi2 = 9103209.0 >= descJ;
   do {
      descJ -= parseFloat(`${parseInt(`${detailB}`) - 2}`);
      if (libjsi2) {
         break;
      }
   } while (libjsi2 && (chartV.length <= 5));
      runtimeq += `${2 >> (Math.min(1, hejiU.length))}`;
    setLang(sameTextAndValueObj('全部语言'));

   while (5 >= (type_mu.size ^ 5) || (descJ / 2.70) >= 2.100) {
       let minimize0 = String.fromCharCode(115,95,50,49,95,97,116,104,0);
       let gradler = String.fromCharCode(99,95,50,51,95,106,111,117,114,110,97,108,110,97,109,101,0);
       let iconpipexpandy = String.fromCharCode(101,120,99,108,117,100,105,110,103,95,105,95,57,55,0);
       let libimagepipelineA: Map<any, any> = new Map([[String.fromCharCode(116,114,105,97,110,103,108,101,95,116,95,56,48,0),853], [String.fromCharCode(115,108,97,110,116,95,108,95,54,49,0),36], [String.fromCharCode(116,114,97,99,101,95,57,95,49,56,0),954]]);
       let inouttargetredH = 0.0;
          let l_hashf = 3;
          let libjsijniprofilern = String.fromCharCode(116,114,97,110,115,95,113,95,49,55,0);
         inouttargetredH *= 2;
         l_hashf %= Math.max(3, libjsijniprofilern.length & l_hashf);
         libjsijniprofilern += `${l_hashf}`;
      let castingI = String.fromCharCode(119,57,48,113,118,98,0) == gradler;
      do {
         gradler = `${(String.fromCharCode(83,0) == iconpipexpandy ? iconpipexpandy.length : parseInt(`${inouttargetredH}`))}`;
         if (castingI) {
            break;
         }
      } while (castingI && (1 >= (gradler.length - libimagepipelineA.size) || (libimagepipelineA.size - 1) >= 3));
      while ((inouttargetredH - libimagepipelineA.size) < 3.33) {
          let middlebrightnessk = false;
         libimagepipelineA = new Map([[iconpipexpandy, gradler.length]]);
         middlebrightnessk = middlebrightnessk && middlebrightnessk;
         break;
      }
         inouttargetredH *= libimagepipelineA.size % (Math.max(3, 2));
      while ((inouttargetredH / 2.98) >= 1.21 || (2 >> (Math.min(2, gradler.length))) >= 4) {
         gradler = "1";
         break;
      }
         libimagepipelineA = new Map([[`${libimagepipelineA.size}`, libimagepipelineA.size]]);
      if (Array.from(libimagepipelineA.keys()).includes(`${inouttargetredH}`)) {
         inouttargetredH -= 1;
      }
      let mbnativeadvancedc = gradler == String.fromCharCode(54,55,109,0);
      do {
         gradler = `${(String.fromCharCode(120,0) == minimize0 ? iconpipexpandy.length : minimize0.length)}`;
         if (mbnativeadvancedc) {
            break;
         }
      } while ((1 <= gradler.length) && mbnativeadvancedc);
       let configs = String.fromCharCode(101,110,99,114,121,112,116,105,110,103,95,120,95,53,50,0);
       let sharedd = String.fromCharCode(117,115,101,114,115,112,97,99,101,95,120,95,54,52,0);
      if (3 == configs.length) {
         iconpipexpandy = `${iconpipexpandy.length / (Math.max(2, 4))}`;
      }
       let redgoalW = 3.0;
      let umengD = 7193040.0 <= redgoalW;
      do {
          let containerZ = String.fromCharCode(97,95,53,52,95,108,101,103,101,110,100,0);
          let abidetectA = String.fromCharCode(107,95,56,54,95,100,101,113,117,111,116,101,0);
         redgoalW *= 1;
         containerZ = `${abidetectA.length - 2}`;
         abidetectA = `${(String.fromCharCode(49,0) == containerZ ? containerZ.length : abidetectA.length)}`;
         if (umengD) {
            break;
         }
      } while ((parseInt(`${redgoalW}`) < iconpipexpandy.length) && umengD);
         configs += `${parseInt(`${redgoalW}`)}`;
      let imagenetworkerrr = 8729114 >= gradler.length;
      do {
          let whiteanimationliveS: Map<any, any> = new Map([[String.fromCharCode(107,95,55,54,95,102,102,106,110,105,0),900], [String.fromCharCode(122,95,49,56,95,112,114,111,120,105,101,115,0),714], [String.fromCharCode(115,95,55,57,95,114,101,112,111,114,116,115,0),2]]);
          let iconstarW = String.fromCharCode(105,110,118,111,99,97,116,105,111,110,115,95,106,95,54,49,0);
          let popupl = String.fromCharCode(120,95,57,50,95,105,100,99,116,0);
          let libreactperfloggerjniI: Array<any> = [176, 447, 597];
         gradler += `${1 % (Math.max(2, parseInt(`${redgoalW}`)))}`;
         whiteanimationliveS.set(`${iconstarW}`, iconstarW.length % 3);
         popupl = "1";
         libreactperfloggerjniI = [popupl.length];
         if (imagenetworkerrr) {
            break;
         }
      } while (imagenetworkerrr && (!gradler.startsWith(`${redgoalW}`)));
         gradler = `${2 << (Math.min(3, gradler.length))}`;
      descJ -= (parseFloat(`${(baidus ? 1 : 4) & libimagepipelineA.size}`));
      break;
   }
       let singleC = String.fromCharCode(117,95,57,51,95,115,100,97,108,108,111,99,120,0);
       let styles1: Map<any, any> = new Map([[String.fromCharCode(111,95,54,52,95,99,112,105,97,0),String.fromCharCode(102,95,49,49,95,97,114,103,98,0)], [String.fromCharCode(122,95,52,54,95,97,117,100,105,111,112,114,111,99,0),String.fromCharCode(114,95,50,95,111,110,103,111,105,110,103,0)], [String.fromCharCode(99,117,101,115,95,103,95,52,53,0),String.fromCharCode(101,110,97,98,108,101,115,95,117,95,57,53,0)]]);
      let kuaishouC = styles1.size >= 9161150;
      do {
         styles1 = new Map([[`${styles1.size}`, styles1.size / 2]]);
         if (kuaishouC) {
            break;
         }
      } while ((singleC.startsWith(`${styles1.size}`)) && kuaishouC);
       let basketballhometeamk: Array<any> = [306, 256];
         basketballhometeamk = [singleC.length];
      if (5 < (4 & basketballhometeamk.length)) {
         styles1 = new Map([[`${styles1.size}`, styles1.size ^ singleC.length]]);
      }
          let scrollview3 = 1.0;
         basketballhometeamk = [styles1.size];
         scrollview3 *= parseInt(`${scrollview3}`) % 1;
      let reactnativeratingsl = 7627976 <= basketballhometeamk.length;
      do {
          let h_manager9 = String.fromCharCode(120,95,50,57,95,115,117,98,118,105,101,119,115,0);
          let scheduleU = 4.0;
         basketballhometeamk = [basketballhometeamk.length - 1];
         h_manager9 = `${3 % (Math.max(10, parseInt(`${scheduleU}`)))}`;
         scheduleU -= (h_manager9 == String.fromCharCode(114,0) ? parseInt(`${scheduleU}`) : h_manager9.length);
         if (reactnativeratingsl) {
            break;
         }
      } while (reactnativeratingsl && ((singleC.length | 3) > 2));
      gpayo += "3";
      gpayo = `${((baidus ? 4 : 3) % (Math.max(updatesv.length, 5)))}`;
   while (2 <= (type_mu.size & 3) && (type_mu.size & updatesv.length) <= 3) {
      updatesv = `${((baidus ? 3 : 2) << (Math.min(Math.abs(parseInt(`${detailB}`)), 1)))}`;
      break;
   }
   while (4 > (parseInt(`${descJ}`) / (Math.max(1, chartV.length))) && 1 > (chartV.length * 4)) {
      descJ -= parseFloat(`${3 >> (Math.min(4, hejiU.length))}`);
      break;
   }
   let runtimeschedulerD = friendsG.length >= 5389172;
   do {
      friendsG.push(parseInt(`${exampleimageD}`));
      if (runtimeschedulerD) {
         break;
      }
   } while ((5 > (hejiU.length + 1) || 3 > (friendsG.length + 1)) && runtimeschedulerD);
   for (let e = 0; e < 3; e++) {
      manifestD = manifestD || chartV.length <= 20;
   }
      friendsG = [(1 & (manifestD ? 2 : 3))];
    setYear(sameTextAndValueObj('全部时间'));
  };

  const fetchVods = useCallback(
    (page: number) => wwIconedit.getList({
      page,
      limit: LIMIT_PER_PAGE,
      tid: currentTopicId.toString(),
      by: orderBy.value,
      category: topicClass.value !== '全部类型' ? topicClass.value : undefined,
      area: area.value !== '全部地区' ? area.value : undefined,
      lang: lang.value !== '全部语言' ? lang.value : undefined,
      year: year.value !== '全部时间' ? year.value : undefined,
      orderBy: 'desc',
    }).then((data) => data.List as wwProfileinactiveBrightness[]),
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
