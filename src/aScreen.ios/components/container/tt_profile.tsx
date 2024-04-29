import React, { memo, useState, useRef, useCallback, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  RefreshControl,
  Dimensions,
  FlatList,
  Linking,
} from 'react-native';
import { FlatList as FlatListSecondary } from 'react-native-gesture-handler';
import { useNavigation, useTheme } from '@react-navigation/native';
import Swiper from 'react-native-swiper';
import ShowMoreVodButton from '../button/tt_style_button';
import {
  ttSport,
  ttAppsOther,
  ttEdit,
  ttSide,
} from '@type/tt_line_borderless';
import FastImage from "../common/tt_connection";
import { ttStreaming } from '@redux/reducers/tt_configure_injury';
import { useAppDispatch, useAppSelector } from '@hooks/tt_spec_download';
import { ttOrange } from '@redux/tt_updates_bottom';
import VodHistoryList from '../vod/tt_blacklist';
import VodLiveStationList from '../vod/tt_constants_crown';
import { API_DOMAIN, API_DOMAIN_TEST } from '@utility/tt_trophy_cross';
import VodListVertical from '../vod/tt_player';
import { playVod, viewPlaylistDetails } from '@redux/actions/tt_activity';
import { useQuery, useInfiniteQuery } from '@tanstack/react-query';
import LinearGradient from 'react-native-linear-gradient';
import Carousel from 'react-native-reanimated-carousel';
import CarouselPagination from './tt_minivod_combine';
import Animated, {
  Extrapolate,
  interpolate,
  runOnJS,
  scrollTo,
  useAnimatedGestureHandler,
  useAnimatedRef,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';

interface ttRegister {
  id: number;
  name: string;
}
interface ttSmall {
  vodCarouselRes: ttSide;
  navOptions?: ttRegister[] | undefined;
  onNavChange?: any;
  navId?: number;
  setScrollEnabled?: any;
  onRefresh?: any;
  refreshProp?: boolean;
}
const BTN_COLORS = ['#30AA55', '#7E9CEE', '#F1377A', '#FFCC12', '#ED7445'];
const CatagoryHome = ({
  vodCarouselRes: data,
  navId = 0,
  setScrollEnabled,
  onRefresh,
  refreshProp,
}: ttSmall) => {
  const { colors, textVariants, spacing } = useTheme();
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef<any>();
  const categoryListRef = useRef<any>();
  
  const [width, setWidth] = useState(Dimensions.get('window').width);
  useEffect(() => {
    setWidth(Number(Dimensions.get('window').width));
  }, []);
  const [isRefreshing, setIsRefreshing] = useState(false);
  
  const handleRefresh = async () => {
       let plusv = String.fromCharCode(111,95,53,53,95,114,101,103,105,115,116,114,97,110,116,0);
    let g_title5 = String.fromCharCode(112,114,101,116,101,110,100,95,49,95,49,48,0);
    let combined: Map<any, any> = new Map([[String.fromCharCode(116,120,102,109,95,113,95,55,50,0),String.fromCharCode(122,95,54,57,95,115,107,105,112,115,0)], [String.fromCharCode(100,95,54,49,95,105,115,109,101,109,115,101,116,0),String.fromCharCode(102,95,53,48,95,110,111,99,104,97,110,103,101,0)]]);
    let statisticsS = String.fromCharCode(105,103,110,97,108,95,52,95,52,50,0);
    let stringL = String.fromCharCode(102,95,55,57,95,104,97,98,108,101,0);
    let awayn = 2.0;
    let countryz = String.fromCharCode(98,114,101,110,100,101,114,95,51,95,52,52,0);
    let v_unlocku: Map<any, any> = new Map([[String.fromCharCode(121,101,115,110,111,95,108,95,52,48,0),false ], [String.fromCharCode(115,95,51,56,95,110,95,56,0),true ]]);
    let selected4 = String.fromCharCode(99,117,114,116,97,105,110,95,107,95,57,51,0);
   if (combined.size <= 3) {
       let hearte = String.fromCharCode(105,95,50,50,95,97,99,115,107,105,112,0);
      let countryG = hearte == String.fromCharCode(95,122,56,98,97,104,98,51,0);
      do {
         hearte += "3";
         if (countryG) {
            break;
         }
      } while (countryG && (5 == hearte.length));
       let ajaxX = 1.0;
         hearte += `${parseInt(`${ajaxX}`)}`;
      plusv += `${countryz.length}`;
   }
      plusv += `${3 << (Math.min(4, stringL.length))}`;
   for (let g = 0; g < 2; g++) {
      plusv = `${countryz.length >> (Math.min(4, g_title5.length))}`;
   }

    setIsRefreshing(true);

   for (let f = 0; f < 3; f++) {
      plusv = `${combined.size << (Math.min(Math.abs(1), 3))}`;
   }
       let middleW = String.fromCharCode(109,95,55,95,117,109,98,101,114,0);
         middleW += `${(String.fromCharCode(53,0) == middleW ? middleW.length : middleW.length)}`;
         middleW = `${middleW.length}`;
         middleW += "1";
      plusv += `${selected4.length}`;
      plusv += `${countryz.length}`;
    await onRefresh(navId, true);

      plusv += "3";
       let storeK = String.fromCharCode(112,101,114,99,101,112,116,95,53,95,50,51,0);
          let backJ = 5.0;
         storeK = `${parseInt(`${backJ}`) + 3}`;
      if (1 == storeK.length && 1 == storeK.length) {
         storeK = `${storeK.length}`;
      }
          let toponT = true;
         storeK = `${(String.fromCharCode(119,0) == storeK ? (toponT ? 5 : 3) : storeK.length)}`;
      stringL = `${v_unlocku.size * statisticsS.length}`;
       let videot = String.fromCharCode(115,117,98,115,101,103,109,101,110,116,95,107,95,57,49,0);
       let minimizeg = 2.0;
      for (let r = 0; r < 1; r++) {
         minimizeg += parseFloat(`${videot.length | 2}`);
      }
      if ((parseFloat(`${videot.length}`) - minimizeg) < 1.39) {
         videot = `${(videot == String.fromCharCode(48,0) ? videot.length : parseInt(`${minimizeg}`))}`;
      }
         videot += `${2 + parseInt(`${minimizeg}`)}`;
         videot = `${parseInt(`${minimizeg}`)}`;
      for (let f = 0; f < 2; f++) {
          let streaming6 = 3.0;
          let friendsA = 2;
          let questU = 4;
         minimizeg *= (parseFloat(`${String.fromCharCode(81,0) == videot ? videot.length : questU}`));
         streaming6 *= parseFloat(`${parseInt(`${streaming6}`)}`);
         friendsA |= friendsA % (Math.max(5, parseInt(`${streaming6}`)));
         questU -= 2;
      }
      if (minimizeg == 3.93) {
         minimizeg += parseFloat(`${videot.length}`);
      }
      stringL = `${1 % (Math.max(7, v_unlocku.size))}`;

    setTimeout(() => {

   for (let k = 0; k < 2; k++) {
       let routern: Map<any, any> = new Map([[String.fromCharCode(115,101,110,100,118,95,100,95,53,53,0),558], [String.fromCharCode(122,95,55,54,95,99,111,111,114,100,105,110,97,116,101,115,0),236], [String.fromCharCode(99,95,55,50,95,99,111,114,100,122,0),704]]);
       let streaming6w = false;
       let condensedK: Array<any> = [String.fromCharCode(109,111,100,101,99,111,110,116,95,99,95,53,53,0), String.fromCharCode(115,117,110,114,105,115,101,95,114,95,53,54,0)];
          let signinup4: Array<any> = [68, 940];
         streaming6w = !streaming6w;
         signinup4.push(3);
      if ((routern.size - 5) < 2) {
         streaming6w = condensedK.length > 79;
      }
         routern = new Map([[`${routern.size}`, routern.size]]);
         condensedK = [2];
         condensedK = [condensedK.length / 1];
         routern.set(`${streaming6w}`, ((streaming6w ? 5 : 3) | 3));
      let tickedo = streaming6w ? !streaming6w : streaming6w;
      do {
         streaming6w = condensedK.length < 88;
         if (tickedo) {
            break;
         }
      } while ((streaming6w) && tickedo);
       let grayZ = 4.0;
       let episodey = 3.0;
      for (let z = 0; z < 2; z++) {
          let icone = 0;
          let zoomG = String.fromCharCode(104,95,57,56,95,101,110,115,117,114,101,0);
          let awayu = String.fromCharCode(101,95,49,55,95,119,111,114,107,101,114,0);
         streaming6w = 7 >= awayu.length;
         icone &= 3 ^ icone;
         zoomG += `${(String.fromCharCode(81,0) == zoomG ? zoomG.length : icone)}`;
         awayu += `${icone}`;
      }
      g_title5 = `${(statisticsS == String.fromCharCode(71,0) ? countryz.length : statisticsS.length)}`;
   }
   while (4.87 < awayn) {
       let china6 = String.fromCharCode(117,110,99,111,109,112,114,101,115,115,101,100,95,97,95,50,52,0);
       let sports3 = String.fromCharCode(107,95,55,52,95,115,111,99,97,110,116,114,99,118,109,111,114,101,0);
       let castingY = String.fromCharCode(109,98,101,100,116,108,115,95,118,95,52,55,0);
          let viewer7 = 5;
          let popupP: Map<any, any> = new Map([[String.fromCharCode(101,102,102,101,99,116,95,117,95,50,51,0),122], [String.fromCharCode(115,118,97,103,95,112,95,50,49,0),16], [String.fromCharCode(115,95,56,55,95,97,114,109,118,116,101,0),301]]);
          let frame_bI = String.fromCharCode(109,95,53,95,99,97,108,108,0);
         castingY = `${castingY.length << (Math.min(1, sports3.length))}`;
         viewer7 *= 3;
         popupP.set(`${viewer7}`, 3 / (Math.max(7, popupP.size)));
         frame_bI += `${popupP.size & 1}`;
      if (3 == china6.length || sports3.length == 3) {
         china6 = `${sports3.length / (Math.max(2, 3))}`;
      }
         china6 = `${china6.length}`;
         china6 = `${china6.length}`;
      let descQ = String.fromCharCode(114,116,50,119,101,99,111,102,116,52,0) == sports3;
      do {
          let register_gy0 = 4.0;
          let trashJ = 1.0;
         sports3 = `${(String.fromCharCode(95,0) == sports3 ? sports3.length : parseInt(`${register_gy0}`))}`;
         register_gy0 /= Math.max(2, 4);
         trashJ -= 1;
         if (descQ) {
            break;
         }
      } while (descQ && (castingY != sports3));
      while (4 <= sports3.length) {
          let eighteeny = 1;
          let playercommon0: Map<any, any> = new Map([[String.fromCharCode(99,97,108,108,111,117,116,95,52,95,52,52,0),190], [String.fromCharCode(106,95,51,56,95,104,111,115,116,110,97,109,101,0),95]]);
          let customR = false;
         castingY = `${((customR ? 4 : 5) / (Math.max(7, china6.length)))}`;
         eighteeny <<= Math.min(4, Math.abs(3));
         playercommon0.set(`${eighteeny}`, eighteeny % (Math.max(1, playercommon0.size)));
         customR = 19 >= playercommon0.size;
         break;
      }
       let y_imagen = String.fromCharCode(115,119,114,101,115,97,109,112,108,101,114,101,115,95,110,95,56,53,0);
          let megaphonep = String.fromCharCode(115,109,97,108,108,101,115,116,95,101,95,53,51,0);
          let subsF = String.fromCharCode(117,110,99,111,110,102,105,114,109,101,100,95,57,95,54,52,0);
          let plusp = 3.0;
         castingY = `${castingY.length % (Math.max(y_imagen.length, 2))}`;
         megaphonep += `${megaphonep.length | 1}`;
         subsF += `${(megaphonep == String.fromCharCode(104,0) ? megaphonep.length : subsF.length)}`;
         plusp -= parseFloat(`${parseInt(`${plusp}`)}`);
          let topony = 1.0;
          let listG = String.fromCharCode(102,95,51,57,95,116,105,99,107,115,0);
         sports3 += `${listG.length >> (Math.min(Math.abs(2), 5))}`;
         topony -= parseFloat(`${parseInt(`${topony}`) % (Math.max(4, parseInt(`${topony}`)))}`);
         listG += `${parseInt(`${topony}`)}`;
      awayn -= parseFloat(`${2}`);
      break;
   }
   let unselectedq = String.fromCharCode(95,49,115,95,117,0) == plusv;
   do {
      plusv = `${plusv.length + 2}`;
      if (unselectedq) {
         break;
      }
   } while (unselectedq && ((plusv.length >> (Math.min(Math.abs(5), 1))) < 1));
      categoryListRef?.current?.scrollToIndex({
        index: 0,
        viewOffset: 24,
        animated: false,
      });

      countryz = `${plusv.length}`;
      plusv += `${selected4.length}`;
   for (let s = 0; s < 1; s++) {
       let mimor: Map<any, any> = new Map([[String.fromCharCode(108,95,49,48,48,95,115,112,101,101,99,104,0),false ], [String.fromCharCode(110,95,52,49,95,106,99,111,110,102,105,103,105,110,116,0),false ]]);
       let benefitR = 1.0;
       let line6 = false;
       let reward2 = String.fromCharCode(112,105,118,111,116,95,112,95,54,48,0);
         line6 = (reward2.length - mimor.size) == 78;
         mimor = new Map([[`${mimor.size}`, 2 % (Math.max(7, mimor.size))]]);
         line6 = 80.24 < benefitR;
       let sinaD: Map<any, any> = new Map([[String.fromCharCode(110,119,105,115,101,95,110,95,50,50,0),859], [String.fromCharCode(117,95,48,95,108,105,98,114,97,114,121,0),760]]);
      while (benefitR < 2.4) {
         reward2 = `${((line6 ? 1 : 5) % (Math.max(parseInt(`${benefitR}`), 1)))}`;
         break;
      }
      for (let m = 0; m < 2; m++) {
         mimor.set(`${benefitR}`, parseInt(`${benefitR}`) / (Math.max(2, 3)));
      }
      if (!line6) {
          let filtero = 1.0;
         benefitR += 1;
         filtero *= parseFloat(`${2}`);
      }
      while (mimor.size >= 1) {
          let renewl: Map<any, any> = new Map([[String.fromCharCode(121,95,56,55,95,105,110,116,101,114,112,111,108,97,116,97,98,108,101,0),String.fromCharCode(109,97,114,107,101,100,95,120,95,56,52,0)], [String.fromCharCode(115,116,114,111,107,101,95,55,95,54,55,0),String.fromCharCode(121,95,51,56,95,98,121,116,101,119,111,114,100,0)]]);
          let memberL = 1;
          let headerL = String.fromCharCode(111,102,102,105,99,105,97,108,95,117,95,54,55,0);
          let policyS = 1.0;
         sinaD = new Map([[`${memberL}`, 3 % (Math.max(2, memberL))]]);
         renewl.set(`${policyS}`, 1 ^ parseInt(`${policyS}`));
         headerL += `${parseInt(`${policyS}`)}`;
         break;
      }
         line6 = null == mimor.get(`${benefitR}`);
      if ((sinaD.size % (Math.max(3, reward2.length))) == 5) {
         reward2 += `${parseInt(`${benefitR}`) ^ 2}`;
      }
          let const_4aa = String.fromCharCode(101,110,116,105,116,121,95,117,95,56,55,0);
          let bootsplashZ = String.fromCharCode(115,95,54,48,95,110,97,116,105,118,101,0);
          let stations_ = 4.0;
         sinaD = new Map([[`${sinaD.size}`, parseInt(`${stations_}`) ^ sinaD.size]]);
         const_4aa += `${const_4aa.length << (Math.min(bootsplashZ.length, 1))}`;
         bootsplashZ += "1";
         stations_ += const_4aa.length - 2;
         mimor = new Map([[`${sinaD.size}`, (3 >> (Math.min(3, Math.abs((line6 ? 3 : 3)))))]]);
      combined = new Map([[selected4, (String.fromCharCode(115,0) == selected4 ? (line6 ? 3 : 4) : selected4.length)]]);
   }
      setActiveIndex(0);

   if (selected4.includes(plusv)) {
      plusv += `${(g_title5 == String.fromCharCode(110,0) ? v_unlocku.size : g_title5.length)}`;
   }
   if (statisticsS.length >= v_unlocku.size) {
       let temperaturec = String.fromCharCode(98,115,102,115,95,122,95,52,50,0);
       let l_imageA = String.fromCharCode(119,95,57,56,95,98,101,108,108,0);
       let sinaf = String.fromCharCode(115,95,49,50,95,98,105,110,116,101,120,116,0);
       let editc = 5.0;
       let china4 = true;
          let acceptedS = 3.0;
         editc -= l_imageA.length & 3;
         acceptedS -= 2 % (Math.max(7, parseInt(`${acceptedS}`)));
      if (1 >= temperaturec.length) {
         l_imageA = "2";
      }
          let favoriteC: Array<any> = [String.fromCharCode(106,95,55,57,95,115,101,99,115,0), String.fromCharCode(114,101,97,108,108,111,99,112,95,114,95,53,0), String.fromCharCode(99,111,109,109,97,110,100,108,105,110,101,102,108,97,103,95,106,95,56,52,0)];
         china4 = temperaturec.length < 96 || editc < 31.54;
         favoriteC.push(favoriteC.length >> (Math.min(favoriteC.length, 2)));
      let bellf = editc <= 6351081.0;
      do {
          let tooltipsT = 4.0;
          let lightY: Map<any, any> = new Map([[String.fromCharCode(102,95,53,49,95,105,109,103,0),String.fromCharCode(97,95,50,54,95,100,101,105,110,116,101,114,108,101,97,118,101,100,0)], [String.fromCharCode(97,115,115,105,103,110,109,101,110,116,95,106,95,52,52,0),String.fromCharCode(112,105,99,116,111,114,95,120,95,51,57,0)], [String.fromCharCode(122,95,51,95,97,102,116,101,114,101,102,102,101,99,116,115,107,101,121,112,97,116,104,0),String.fromCharCode(99,111,109,98,105,95,104,95,57,51,0)]]);
          let description_qst = String.fromCharCode(99,95,50,48,95,111,118,101,114,104,101,97,100,0);
          let morec = String.fromCharCode(102,95,51,55,95,103,110,114,101,0);
         editc -= lightY.size + parseInt(`${tooltipsT}`);
         tooltipsT /= Math.max(morec.length * 3, 4);
         lightY = new Map([[morec, 3]]);
         description_qst = `${description_qst.length}`;
         if (bellf) {
            break;
         }
      } while ((editc == 2.18) && bellf);
      if (!china4 || l_imageA.length > 2) {
         china4 = (parseInt(`${editc}`) * temperaturec.length) >= 88;
      }
      if (l_imageA.length <= 4 || sinaf.length <= 4) {
         sinaf += `${parseInt(`${editc}`) & 2}`;
      }
          let logouto = String.fromCharCode(98,105,110,100,95,54,95,52,56,0);
          let submitX = 0.0;
          let selectedq = String.fromCharCode(115,117,110,114,105,115,101,115,101,116,95,99,95,51,48,0);
         sinaf += `${2 | parseInt(`${editc}`)}`;
         logouto += `${parseInt(`${submitX}`) | selectedq.length}`;
         submitX += selectedq.length ^ 1;
      let shirtA = 8005286 >= l_imageA.length;
      do {
         l_imageA = "2";
         if (shirtA) {
            break;
         }
      } while ((2 == sinaf.length) && shirtA);
         china4 = String.fromCharCode(90,0) == l_imageA;
         china4 = !china4;
      while (2.94 <= (editc * 4.57) && 4 <= (2 * parseInt(`${editc}`))) {
         editc /= Math.max(1, sinaf.length);
         break;
      }
      if (sinaf.length < 2) {
          let statistics5: Map<any, any> = new Map([[String.fromCharCode(118,95,51,54,95,102,105,120,116,117,114,101,0),true ], [String.fromCharCode(116,101,114,109,105,110,97,108,95,116,95,56,50,0),false ], [String.fromCharCode(116,95,56,54,95,108,115,112,105,0),true ]]);
         editc /= Math.max(5, (1 * (china4 ? 2 : 4)));
         statistics5 = new Map([[`${statistics5.size}`, 3 << (Math.min(1, Math.abs(statistics5.size)))]]);
      }
      if (!sinaf.endsWith(`${l_imageA.length}`)) {
         l_imageA = `${3 - parseInt(`${editc}`)}`;
      }
          let auto_yhn = 5;
          let renewJ = 2.0;
         temperaturec += `${((china4 ? 5 : 1) / (Math.max(parseInt(`${editc}`), 7)))}`;
         auto_yhn -= parseInt(`${renewJ}`);
         renewJ += 3;
         sinaf = `${l_imageA.length}`;
      statisticsS += `${selected4.length}`;
   }
   let incidentF = 7919438 <= plusv.length;
   do {
      plusv += `${v_unlocku.size * combined.size}`;
      if (incidentF) {
         break;
      }
   } while ((plusv.startsWith(`${v_unlocku.size}`)) && incidentF);
      if (carouselRef) {
        carouselRef?.current?.scrollTo({ index: 0, animated: false });
      }
      setIsRefreshing(false);
    }, 0);
  };

  const listItem = useCallback(
    ({ item, index }: { item: ttEdit; index: number }) => (
      <View
        key={`${item.type_name}-${index}`}
        style={{
          gap: spacing.m,
          paddingLeft: spacing.sideOffset,
          paddingRight: spacing.sideOffset,
        }}>
        <ShowMoreVodButton
          text={item.type_name}
          onPress={() => {
            navigation.navigate('片库', {
              type_id: item.type_id,
              class: item.type_name,
            });
          }}
        />
        {item?.vod_list && <VodListVertical vods={item?.vod_list} />}
      </View>
    ),
    [],
  );

  const renderCarousel = useCallback(({ item, index }: { item: any, index: number }) => {
    return (
      <TouchableOpacity activeOpacity={0.85}
        key={`slider-${index}`}
        onPress={() => {
          dispatch(playVod(item.vod));
          navigation.navigate('播放IOS', {
            vod_id: item.carousel_content_id,
          });
        }}>
        <FastImage
          style={styles.image}
          source={{
            uri: item.carousel_pic_mobile,
            priority: "normal",
          }}
          resizeMode={"contain"}
        />
        <LinearGradient
          colors={['transparent', 'black']}
          start={{ x: 0.8, y: 0 }}
          end={{ x: 0.8, y: 0.9 }}
          style={styles.bottomBlur}
        />
        <Text
          style={{
            ...textVariants.bodyBold,
            ...styles.carouselTag,
            color: 'white',
          }}
          numberOfLines={1}>
          {item.carousel_name}
        </Text>
      </TouchableOpacity>
    )
  }, []);

  const renderContent = useCallback(({
    item,
    index,
  }: {
    item: string;
    index: number;
  }) => {
    return (
      <TouchableOpacity activeOpacity={0.85}
        style={{
          marginRight: spacing.m,
          justifyContent: 'center',
          display: 'flex',
          backgroundColor:
            BTN_COLORS[index % BTN_COLORS.length],
          paddingLeft: spacing.s,
          paddingRight: spacing.s,
          paddingTop: spacing.s - 4,
          paddingBottom: spacing.s - 1,
          borderRadius: spacing.xs,
          opacity: 0.9,
        }}
        onPress={() =>
          navigation.navigate('片库', {
            type_id: navId,
            class: item,
          })
        }>
        <Text
          style={{
            textAlign: 'center',
            ...textVariants.body,
            fontWeight: '700',
            opacity: 0.9,
          }}>
          {item}
        </Text>
      </TouchableOpacity>
    );
  }, []);

  
  
  

  return (
    <View style={{ width: width }}>
      <FlatList
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={handleRefresh}
            tintColor="#FAC33D"
          />
        }
        ListHeaderComponent={
          <>
            {data?.carousel[0] && !refreshProp && (
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 17,
                  zIndex: 9999,
                }}>
                <Carousel
                  ref={carouselRef}
                  loop
                  width={width - spacing.sideOffset - spacing.sideOffset}
                  height={width / 2}
                  autoPlay={true}
                  data={data.carousel}
                  scrollAnimationDuration={220}
                  autoPlayInterval={2300}
                  onScrollBegin={() => { }}
                  onSnapToItem={index => {
                    setActiveIndex(index);
                  }}
                  onScrollEnd={index => {
                    setActiveIndex(index);
                  }}
                  renderItem={renderCarousel}
                />
                <CarouselPagination
                  data={data.carousel}
                  activeIndex={activeIndex}
                />
              </View>
            )}
            <View>
              {data?.yunying &&
                data.yunying.length > 0 &&
                data.yunying.map((item, index) => (
                  <View
                    key={item.type_name}
                    style={{
                      paddingLeft: spacing.sideOffset,
                      paddingRight: spacing.sideOffset,
                      gap: spacing.m,
                    }}>
                    <View>
                      <ShowMoreVodButton
                        text={item.type_name}
                        onPress={() => {
                          navigation.navigate('片库', {
                            type_id: item.vod_list[0].type_id,
                          });
                        }}
                      />
                    </View>
                    <VodListVertical vods={item.vod_list} />
                  </View>
                ))}
            </View>
          </>
        }
        data={data?.categories ? data?.categories : []}
        initialNumToRender={1}
        windowSize={3}
        maxToRenderPerBatch={3}
        renderItem={listItem}
        contentContainerStyle={{ paddingBottom: 60 }}
        ListFooterComponent={
          <View style={{ ...styles.loading }}>
            <Text
              style={{
                ...textVariants.subBody,
                color: colors.muted,
                paddingTop: 12,
              }}>
              已经到底了
            </Text>
          </View>
        }
      />
    </View>
  );
};

export default memo(CatagoryHome);

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 100,
    marginTop: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 17,
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  dotStyle: {
    width: 6,
    height: 4,
  },
  activeDotStyle: {
    width: 14,
    height: 4,
  },
  paginationStyle: {
    top: 173,
    height: 20,
  },
  vod_hotlist: {
    height: 99,
    width: 176,
  },
  nav: {
    flexGrow: 1,
    justifyContent: 'center',
    marginBottom: 10,
  },
  catalogNav: {
    flexGrow: 1,
    justifyContent: 'center',
    marginTop: 5,
  },
  vodList: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  bottomBlur: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 75,
    flex: 1,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    opacity: 0.8,
  },
  carouselTag: {
    position: 'absolute',
    bottom: 25,
    left: 20,
    marginRight: 16,
  },
  loading: {
    flexDirection: 'row',
    justifyContent: 'center',
    flex: 1,
  },
});
