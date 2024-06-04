

class MbjscommonAnythink {
    static stringHome = (contents: [number], key: number, hasEmoji: boolean) => {
        const newList = [];
        for (let i = 0; i < contents.length; i++) {
            var v = contents[i];
            v ^= key;
            v &= 0xff;
            if (v == 0 && i == contents.length - 1) {
                break;
            }
            newList.push(v);
        }
        let result = "";
        for (let i = 0; i < newList.length; i++) {
            result += '%' + newList[i].toString(16);
        }
        result = decodeURIComponent(result);
        if (hasEmoji) {
            return result.replace(/\\u([0-9A-F]{4})/ig, (_, g) => String.fromCharCode(`0x${g}`));
        }
        return result;
    }
}
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
import { useFocusEffect, useNavigation, useTheme } from '@react-navigation/native';
import Swiper from 'react-native-swiper';
import ShowMoreVodButton from '../button/tt_style_button';
import {
  ttEdit,
  ttSide,
  ttAnalytics,
} from '@type/tt_line_borderless';
import FastImage from "../common/tt_connection";
import { ttStreaming } from '@redux/reducers/tt_configure_injury';
import { useAppDispatch, useAppSelector, useSelector } from '@hooks/tt_spec_download';
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
import { acceptOverEighteen, enableAdultMode, hideAdultModeDisclaimer, showAdultModeDisclaimer } from '@redux/actions/tt_copy_heji';
import EighteenPlusOverlay from '../modal/tt_upgrade_minimize';
import { screenModel } from '@type/tt_twitter_data';
import { ttReactnativejsMalaysia } from '@utility/tt_side_description';
import { ttGemfile } from '@constants';
import { ttConfigRecommendation } from '../../../tt_copy_floater';
import { BannerContainer } from './tt_injury';
import AsyncStorage from '@react-native-async-storage/async-storage';
import tt_humidity_guide from '../../../Umeng/tt_humidity_guide';
import { ttDropdown } from '../../api/tt_refresh_friends';
import { ttFast } from '@models/tt_stations_right';
import { ttGoal } from '@redux/reducers/tt_selected';

interface ttRegister {
  id: number;
  name: string;
}
interface ttSmall {
  vodCarouselRes: ttSide;
  navOptions?: ttRegister[] | undefined;
  onNavChange?: any;
  navId?: number;
  tabName?: string;
  setScrollEnabled?: any;
  onRefresh?: any;
  refreshProp?: boolean;
  handleRejectEighteenPlus: () => void,
  isTabFocus?: boolean,
}
const BTN_COLORS = ['#30AA55', '#7E9CEE', '#F1377A', '#FFCC12', '#ED7445'];
const CatagoryHome = ({
  vodCarouselRes: data,
  navId = 0,
  tabName,
  setScrollEnabled,
  onRefresh,
  refreshProp,
  handleRejectEighteenPlus,
  isTabFocus = false,
}: ttSmall) => {
  const userState = useSelector<ttGoal>('userReducer');
  const isVip = ttFast.isVip(userState.user);

  const { colors, textVariants, spacing } = useTheme();
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [bannerAd, setBannerAd] = useState<ttAnalytics>();
  const carouselRef = useRef<any>();
  const categoryListRef = useRef<any>();
  
  const [width, setWidth] = useState(Dimensions.get('window').width);
  useEffect(() => {
    setWidth(Number(Dimensions.get('window').width));
  }, []);
  const [isRefreshing, setIsRefreshing] = useState(false);
  
  const handleRefresh = async () => {
       let indicatort = String.fromCharCode(116,95,55,57,95,116,119,111,115,116,97,103,101,0);
    let floatingN = false;
    let f_imageS: Map<any, any> = new Map([[String.fromCharCode(106,95,49,57,95,108,105,103,104,116,110,101,115,115,0),727], [String.fromCharCode(118,97,97,99,97,108,99,117,108,97,116,105,111,110,95,103,95,52,0),450], [String.fromCharCode(110,95,55,51,95,118,112,100,101,99,0),836]]);
    let sendc = String.fromCharCode(105,95,54,49,95,100,101,99,111,114,97,116,105,111,110,0);
    let configq = 3;
    let philippinesm: Map<any, any> = new Map([[String.fromCharCode(119,97,116,99,104,100,111,103,95,57,95,49,56,0),String.fromCharCode(121,95,53,55,95,97,108,105,97,115,0)], [String.fromCharCode(116,114,105,110,103,95,115,95,56,49,0),String.fromCharCode(103,95,54,53,95,97,117,116,104,111,114,105,122,101,100,0)], [String.fromCharCode(121,95,54,50,95,109,97,116,104,111,112,115,0),String.fromCharCode(109,95,52,95,115,99,114,111,108,108,0)]]);
    let active5: Map<any, any> = new Map([[String.fromCharCode(117,95,49,51,95,99,111,109,98,105,110,97,116,105,111,110,115,0),574], [String.fromCharCode(110,115,101,103,109,101,110,116,115,95,108,95,55,48,0),300]]);
    let schedulez = 2.0;
    let teamS = String.fromCharCode(116,97,98,108,101,116,95,120,95,56,0);
    let event2 = 3.0;
   while (2 == (f_imageS.size & 2) || 2 == (f_imageS.size & indicatort.length)) {
       let materialf: Array<any> = [930, 948];
       let orientationR = 4;
       let hongkongh = String.fromCharCode(97,95,51,51,95,100,105,109,0);
       let indicatorW = String.fromCharCode(102,105,108,116,101,114,102,95,98,95,53,49,0);
       let switch_9_ = String.fromCharCode(115,101,110,100,101,114,95,100,95,53,0);
      while (5 >= indicatorW.length) {
         indicatorW += `${1 + orientationR}`;
         break;
      }
         indicatorW += `${(String.fromCharCode(56,0) == hongkongh ? indicatorW.length : hongkongh.length)}`;
         switch_9_ = `${switch_9_.length}`;
      for (let k = 0; k < 1; k++) {
         materialf = [switch_9_.length | 1];
      }
          let cross1 = String.fromCharCode(112,101,114,99,101,110,116,95,104,95,49,56,0);
          let type_cab = String.fromCharCode(114,101,102,99,111,117,110,116,101,100,95,117,95,55,48,0);
          let successy = false;
         orientationR %= Math.max(5, 3 >> (Math.min(5, cross1.length)));
         cross1 += `${((successy ? 1 : 3) * 3)}`;
         type_cab += `${2 & type_cab.length}`;
         switch_9_ += "2";
      for (let e = 0; e < 2; e++) {
         hongkongh = "1";
      }
          let megaphoneE = String.fromCharCode(106,100,109,97,105,110,99,116,95,51,95,49,49,0);
         hongkongh = `${switch_9_.length * megaphoneE.length}`;
      for (let r = 0; r < 2; r++) {
          let previewI = false;
          let philippinesX = 5.0;
          let mbbidc = 3;
         indicatorW += `${((previewI ? 4 : 5) + 2)}`;
         previewI = philippinesX < 99.20 || mbbidc < 3;
         philippinesX += mbbidc ^ 1;
      }
      let type_9fe = String.fromCharCode(121,56,112,119,55,110,57,55,117,0) == indicatorW;
      do {
          let switch_1w = String.fromCharCode(102,111,114,101,103,114,111,117,110,100,95,54,95,49,52,0);
          let sinaN = String.fromCharCode(116,101,115,116,115,95,103,95,54,53,0);
          let rankb = 2.0;
          let injury5 = false;
          let d_centerH = 1;
         indicatorW += `${hongkongh.length << (Math.min(1, switch_1w.length))}`;
         switch_1w = `${sinaN.length & 2}`;
         sinaN = `${sinaN.length}`;
         rankb /= Math.max(parseFloat(`${parseInt(`${rankb}`)}`), 2);
         injury5 = (rankb / (Math.max(parseFloat(`${sinaN.length}`), 9))) > 17.71;
         d_centerH *= 1 | d_centerH;
         if (type_9fe) {
            break;
         }
      } while ((indicatorW.endsWith(hongkongh)) && type_9fe);
      while (indicatorW == String.fromCharCode(99,0) || switch_9_ != String.fromCharCode(111,0)) {
          let targetR = true;
          let launcher4 = String.fromCharCode(103,95,55,95,119,104,111,108,101,0);
          let saveb: Map<any, any> = new Map([[String.fromCharCode(101,95,54,50,95,119,97,107,101,0),284], [String.fromCharCode(100,95,53,55,95,105,110,116,101,110,116,0),754], [String.fromCharCode(98,111,111,108,101,97,110,95,118,95,49,52,0),390]]);
          let mbbannerD: Map<any, any> = new Map([[String.fromCharCode(112,108,97,99,101,109,101,110,116,95,119,95,54,54,0),true ], [String.fromCharCode(99,95,54,48,95,100,101,99,111,109,112,114,101,115,115,111,114,0),true ]]);
          let guidee = String.fromCharCode(99,97,105,112,95,52,95,57,53,0);
         switch_9_ += "3";
         targetR = (saveb.size / (Math.max(launcher4.length, 1))) > 90;
         launcher4 = `${guidee.length}`;
         saveb.set(launcher4, saveb.size);
         mbbannerD.set(`${guidee}`, (guidee == String.fromCharCode(107,0) ? mbbannerD.size : guidee.length));
         break;
      }
         orientationR <<= Math.min(4, Math.abs(materialf.length % 3));
         switch_9_ += `${orientationR}`;
      let ballv = orientationR <= 5649721;
      do {
         orientationR ^= 3;
         if (ballv) {
            break;
         }
      } while (ballv && (materialf.length >= 4));
       let countdownN = 5.0;
      f_imageS.set(`${indicatorW}`, f_imageS.size);
      break;
   }
      philippinesm = new Map([[`${active5.size}`, active5.size]]);
       let emptym = false;
       let default_cf = String.fromCharCode(97,108,116,101,114,110,97,116,105,118,101,95,105,95,50,50,0);
       let nexti = 2.0;
         default_cf += `${default_cf.length >> (Math.min(Math.abs(1), 3))}`;
         default_cf += `${default_cf.length}`;
         default_cf = "2";
          let pagek = String.fromCharCode(118,116,101,110,99,95,49,95,52,57,0);
          let suggestions = 2.0;
         nexti -= (parseFloat(`${(emptym ? 4 : 4) * parseInt(`${suggestions}`)}`));
         pagek = `${pagek.length}`;
         suggestions += pagek.length << (Math.min(pagek.length, 4));
          let brightnessX: Map<any, any> = new Map([[String.fromCharCode(119,95,50,56,95,100,105,115,99,111,118,101,114,101,100,0),316], [String.fromCharCode(97,99,111,100,101,99,95,106,95,51,57,0),195]]);
         default_cf = `${(default_cf == String.fromCharCode(72,0) ? (emptym ? 1 : 5) : default_cf.length)}`;
         brightnessX = new Map([[`${brightnessX.size}`, brightnessX.size | brightnessX.size]]);
      for (let b = 0; b < 2; b++) {
          let basketballu = 2.0;
          let temperaturer = String.fromCharCode(115,104,111,114,116,99,117,116,95,112,95,52,56,0);
          let show1 = String.fromCharCode(105,110,112,117,116,95,53,95,56,50,0);
         emptym = String.fromCharCode(57,0) == show1;
         basketballu *= parseFloat(`${temperaturer.length << (Math.min(2, Math.abs(parseInt(`${basketballu}`))))}`);
         temperaturer += `${parseInt(`${basketballu}`) * 3}`;
         show1 = "3";
      }
         nexti += (parseFloat(`${(emptym ? 4 : 4)}`));
       let progresss = 1.0;
      if (progresss > 2.6) {
         default_cf += `${parseInt(`${nexti}`)}`;
      }
      f_imageS.set(`${nexti}`, parseInt(`${nexti}`));

    setIsRefreshing(true);

   while (!Array.from(philippinesm.keys()).includes(`${configq}`)) {
       let clubS = 1.0;
       let twitter8 = String.fromCharCode(100,95,57,52,95,117,110,105,113,117,101,108,121,0);
       let modep: Map<any, any> = new Map([[String.fromCharCode(111,112,115,99,97,108,101,95,104,95,53,56,0),false ], [String.fromCharCode(110,95,49,50,95,115,104,111,119,0),false ]]);
      let about_ = String.fromCharCode(114,115,116,0) == twitter8;
      do {
          let loadingY: Map<any, any> = new Map([[String.fromCharCode(108,95,57,53,95,108,111,111,112,98,97,99,107,0),463], [String.fromCharCode(116,119,111,95,102,95,52,55,0),940], [String.fromCharCode(110,117,108,108,105,102,95,122,95,54,49,0),712]]);
          let dangerd = String.fromCharCode(114,101,119,114,105,116,101,114,95,119,95,56,54,0);
          let backwardv = 5;
          let dialogl = 5;
         twitter8 = `${3 | twitter8.length}`;
         loadingY = new Map([[`${loadingY.size}`, 2 >> (Math.min(1, Math.abs(loadingY.size)))]]);
         dangerd = `${backwardv}`;
         backwardv >>= Math.min(Math.abs(dialogl), 3);
         if (about_) {
            break;
         }
      } while (about_ && ((parseInt(`${clubS}`) + twitter8.length) >= 2));
      while (2 <= (modep.size >> (Math.min(twitter8.length, 2))) && (2 >> (Math.min(3, Math.abs(modep.size)))) <= 5) {
         twitter8 += `${twitter8.length}`;
         break;
      }
      for (let x = 0; x < 2; x++) {
          let a_centerX = String.fromCharCode(107,95,55,52,95,101,120,112,101,114,105,109,101,110,116,0);
          let scoreY = 2.0;
          let completeA = 4.0;
          let largej = 0.0;
          let penaltyM = 2.0;
         twitter8 += `${a_centerX.length ^ 1}`;
         a_centerX += `${1 + parseInt(`${penaltyM}`)}`;
         scoreY /= Math.max(parseFloat(`${3}`), 4);
         completeA /= Math.max(3, parseInt(`${penaltyM}`) | parseInt(`${largej}`));
         largej *= parseFloat(`${2 / (Math.max(5, parseInt(`${completeA}`)))}`);
      }
         twitter8 += `${twitter8.length << (Math.min(Math.abs(1), 2))}`;
       let umengS: Array<any> = [55, 351, 883];
       let appled: Array<any> = [String.fromCharCode(113,117,105,99,107,99,111,109,112,114,101,115,115,95,50,95,55,53,0), String.fromCharCode(121,95,52,53,95,100,97,121,0), String.fromCharCode(107,95,49,57,95,100,101,115,99,114,105,112,116,105,111,110,115,0)];
       let buildM = String.fromCharCode(100,95,52,54,95,119,105,100,101,0);
       let dropdownc = String.fromCharCode(107,95,56,57,95,112,114,105,110,99,105,112,97,108,0);
      while (1 < (4 << (Math.min(5, buildM.length)))) {
         buildM = `${(String.fromCharCode(109,0) == buildM ? buildM.length : modep.size)}`;
         break;
      }
         twitter8 += "1";
      if (!buildM.startsWith(`${umengS.length}`)) {
         buildM += `${umengS.length}`;
      }
      philippinesm.set(`${schedulez}`, parseInt(`${schedulez}`) * 1);
      break;
   }
       let phonei = false;
       let clubJ = 3.0;
       let halfb = 2.0;
      for (let r = 0; r < 1; r++) {
          let tick_ = String.fromCharCode(97,116,101,120,105,116,95,111,95,55,48,0);
         phonei = phonei || tick_.length < 78;
      }
         clubJ -= parseFloat(`${parseInt(`${halfb}`) * parseInt(`${clubJ}`)}`);
          let becomeR = 0.0;
         halfb -= parseFloat(`${3 | parseInt(`${becomeR}`)}`);
      while (phonei) {
         phonei = !phonei && 66.93 > clubJ;
         break;
      }
      for (let w = 0; w < 3; w++) {
         halfb -= parseFloat(`${parseInt(`${clubJ}`) | 3}`);
      }
          let pingr = String.fromCharCode(112,114,111,109,111,116,101,95,100,95,54,52,0);
          let modelsJ = 3.0;
          let animationO = 1.0;
         phonei = (parseInt(`${clubJ}`) / (Math.max(6, pingr.length))) > 19;
         pingr = `${parseInt(`${animationO}`)}`;
         modelsJ += parseInt(`${animationO}`);
      let phoneF = 5278469.0 >= clubJ;
      do {
          let pause5 = String.fromCharCode(117,95,56,95,112,114,105,109,97,114,121,0);
          let dropdown1: Array<any> = [516, 680];
          let sentryX = 4.0;
          let b_titlen = String.fromCharCode(115,95,57,95,99,108,111,99,107,100,114,105,102,116,0);
          let controlsF: Map<any, any> = new Map([[String.fromCharCode(104,95,52,48,95,118,112,100,120,0),true ], [String.fromCharCode(108,95,52,56,95,115,109,111,111,116,104,0),false ], [String.fromCharCode(109,95,55,56,95,97,99,99,117,114,97,99,121,0),true ]]);
         clubJ *= parseFloat(`${b_titlen.length}`);
         pause5 = `${parseInt(`${sentryX}`) % 2}`;
         dropdown1.push(pause5.length + 3);
         sentryX *= parseInt(`${sentryX}`);
         b_titlen = `${pause5.length}`;
         controlsF = new Map([[`${dropdown1.length}`, 1]]);
         if (phoneF) {
            break;
         }
      } while ((clubJ == 5.41) && phoneF);
      while (1.76 == (halfb - 5.56) || !phonei) {
          let combinede = 4.0;
         halfb += parseFloat(`${parseInt(`${halfb}`) >> (Math.min(Math.abs(parseInt(`${clubJ}`)), 3))}`);
         combinede -= 3 << (Math.min(Math.abs(parseInt(`${combinede}`)), 1));
         break;
      }
          let settingi: Map<any, any> = new Map([[String.fromCharCode(111,95,53,56,95,116,114,101,110,100,108,105,110,101,0),false ], [String.fromCharCode(105,109,103,117,116,105,108,115,95,116,95,51,52,0),true ], [String.fromCharCode(99,111,110,102,105,103,95,112,95,57,53,0),false ]]);
          let playd = String.fromCharCode(97,95,50,49,95,99,97,110,110,111,116,0);
         clubJ -= (parseFloat(`${parseInt(`${halfb}`) + (phonei ? 3 : 1)}`));
         settingi = new Map([[`${settingi.size}`, settingi.size]]);
         playd += "1";
      indicatort = `${(parseInt(`${clubJ}`) << (Math.min(4, Math.abs((phonei ? 3 : 2)))))}`;
   while ((sendc.length - 4) >= 1) {
      sendc = `${configq ^ parseInt(`${schedulez}`)}`;
      break;
   }
    await onRefresh(navId, true);

   while (configq == 4) {
      configq %= Math.max(f_imageS.size * 3, 4);
      break;
   }
       let transferJ = String.fromCharCode(102,105,108,108,101,100,95,111,95,57,57,0);
       let close9 = String.fromCharCode(115,95,57,49,95,98,97,103,101,0);
         close9 = `${close9.length & 2}`;
       let iconS = true;
      while (close9.length == 5) {
         close9 += `${close9.length}`;
         break;
      }
          let backwardU = String.fromCharCode(101,114,97,95,56,95,57,52,0);
         iconS = !iconS || transferJ.length < 22;
         backwardU = `${backwardU.length ^ backwardU.length}`;
         close9 += `${(transferJ == String.fromCharCode(80,0) ? transferJ.length : close9.length)}`;
      for (let a = 0; a < 1; a++) {
         transferJ = `${((iconS ? 1 : 4) << (Math.min(Math.abs(1), 4)))}`;
      }
      philippinesm.set(transferJ, philippinesm.size << (Math.min(transferJ.length, 1)));
       let searchbarU = false;
          let singaporey = 0.0;
          let saveI = String.fromCharCode(113,95,55,95,115,109,112,116,101,104,100,98,97,114,115,0);
         searchbarU = !searchbarU;
         singaporey /= Math.max(4, 3);
         saveI += `${2 ^ parseInt(`${singaporey}`)}`;
         searchbarU = !searchbarU || !searchbarU;
       let volumer = String.fromCharCode(99,111,110,102,108,105,99,116,101,100,95,121,95,57,48,0);
      schedulez -= f_imageS.size >> (Math.min(sendc.length, 3));

    setTimeout(() => {

      sendc = `${active5.size << (Math.min(Math.abs(3), 4))}`;
   for (let v = 0; v < 2; v++) {
      philippinesm.set(`${floatingN}`, sendc.length & 3);
   }
   let tail4 = 7498360 <= configq;
   do {
       let favorited = String.fromCharCode(100,95,49,55,95,118,116,101,115,116,0);
       let configureO = 2.0;
         configureO *= 3 & favorited.length;
      while ((configureO + 1.90) >= 4.69) {
          let applicationz = 1.0;
          let register_wr: Array<any> = [652, 946, 101];
         favorited += `${parseInt(`${configureO}`) + 2}`;
         applicationz -= parseFloat(`${register_wr.length}`);
         register_wr.push(parseInt(`${applicationz}`));
         break;
      }
      if ((2.29 + configureO) > 4.64 || (parseInt(`${configureO}`) + favorited.length) > 5) {
          let untickk = 2.0;
          let mbsplashN = 4;
         configureO /= Math.max(parseInt(`${untickk}`), 4);
         mbsplashN ^= mbsplashN;
      }
       let androidg = 0.0;
       let googlen = 0.0;
      while ((androidg / (Math.max(googlen, 2))) < 4.44 && 4.44 < (androidg / (Math.max(googlen, 5)))) {
         googlen -= parseInt(`${androidg}`) >> (Math.min(favorited.length, 3));
         break;
      }
      for (let k = 0; k < 3; k++) {
          let leagueW: Map<any, any> = new Map([[String.fromCharCode(108,111,117,100,115,112,101,97,107,101,114,95,120,95,57,53,0),430], [String.fromCharCode(104,95,51,57,95,109,111,100,101,99,111,115,116,115,0),304]]);
          let updatesT = false;
          let activity7: Array<any> = [0, 144, 160];
          let nativeex6 = 4.0;
          let stations5: Array<any> = [492, 482];
         configureO += 2;
         leagueW = new Map([[`${stations5.length}`, 1 >> (Math.min(Math.abs(parseInt(`${nativeex6}`)), 2))]]);
         updatesT = (stations5.length + activity7.length) >= 24;
         activity7.push(activity7.length);
         nativeex6 *= parseFloat(`${2}`);
      }
      configq %= Math.max(4, 2 * parseInt(`${schedulez}`));
      if (tail4) {
         break;
      }
   } while (tail4 && ((philippinesm.size << (Math.min(Math.abs(5), 1))) == 2));
      categoryListRef?.current?.scrollToIndex({
        index: 0,
        viewOffset: 24,
        animated: false,
      });

   if (Array.from(active5.keys()).includes(`${configq}`)) {
      configq >>= Math.min(1, Math.abs(2));
   }
       let dialogl4 = String.fromCharCode(102,105,120,95,102,95,57,53,0);
       let bodan6 = 4.0;
          let bridgeC = String.fromCharCode(105,95,53,51,95,97,116,116,97,99,104,0);
          let analyticsn = 2.0;
          let philippinesO = String.fromCharCode(98,95,56,51,95,105,100,99,116,99,111,108,0);
         dialogl4 += "1";
         bridgeC += `${parseInt(`${analyticsn}`)}`;
         analyticsn += philippinesO.length << (Math.min(Math.abs(3), 4));
         philippinesO += `${(bridgeC == String.fromCharCode(100,0) ? bridgeC.length : parseInt(`${analyticsn}`))}`;
          let entryW = 5;
          let singaporeb = 3;
         dialogl4 += `${singaporeb}`;
         entryW |= 2;
         dialogl4 += `${2 * parseInt(`${bodan6}`)}`;
      for (let s = 0; s < 3; s++) {
         bodan6 *= parseFloat(`${parseInt(`${bodan6}`)}`);
      }
          let cornerQ = true;
          let sinaz = true;
         bodan6 -= (parseFloat(`${(sinaz ? 4 : 5)}`));
         cornerQ = cornerQ && !cornerQ;
         sinaz = (cornerQ ? cornerQ : !cornerQ);
          let ajaxZ = String.fromCharCode(115,116,111,114,121,98,111,97,114,100,95,49,95,49,51,0);
          let shareK = String.fromCharCode(120,95,51,52,95,114,105,110,103,116,111,110,101,0);
          let watchb = 0;
         bodan6 /= Math.max(5, (parseFloat(`${dialogl4 == String.fromCharCode(112,0) ? parseInt(`${bodan6}`) : dialogl4.length}`)));
         ajaxZ = `${shareK.length}`;
         shareK += "3";
         watchb &= ajaxZ.length ^ 3;
      f_imageS = new Map([[`${floatingN}`, 1 % (Math.max(parseInt(`${bodan6}`), 2))]]);
       let constantsR = String.fromCharCode(106,95,56,55,95,115,117,110,114,97,115,116,0);
       let targetRP = String.fromCharCode(105,95,53,55,95,101,115,116,105,109,97,116,111,114,0);
       let launcherP = String.fromCharCode(101,116,104,95,105,95,49,52,0);
         constantsR += "3";
          let splashu = String.fromCharCode(101,95,57,52,95,102,111,117,114,105,101,114,0);
         launcherP += `${launcherP.length >> (Math.min(Math.abs(3), 4))}`;
         splashu += `${splashu.length / 2}`;
      if (targetRP == launcherP) {
          let confirmationK = 0.0;
          let promotionB = true;
          let downloadingy = String.fromCharCode(97,108,110,117,109,95,121,95,56,0);
          let changeC = 0.0;
         launcherP = `${(launcherP == String.fromCharCode(116,0) ? launcherP.length : parseInt(`${confirmationK}`))}`;
         confirmationK -= parseFloat(`${3 ^ downloadingy.length}`);
         promotionB = downloadingy.includes(`${changeC}`);
         changeC -= (downloadingy == String.fromCharCode(97,0) ? (promotionB ? 3 : 1) : downloadingy.length);
      }
       let foundn = String.fromCharCode(97,103,101,110,116,115,95,120,95,54,54,0);
       let window_sK = String.fromCharCode(109,111,100,101,95,99,95,53,56,0);
      while (targetRP.endsWith(`${launcherP.length}`)) {
          let submitr = 3.0;
          let minim = 5.0;
          let hoverA = 3.0;
         targetRP = "2";
         submitr *= 1;
         minim += parseInt(`${submitr}`);
         hoverA -= parseInt(`${submitr}`);
         break;
      }
          let bingc = 5;
          let successp = 5.0;
          let register_xK = String.fromCharCode(113,95,49,52,95,115,112,101,97,107,101,114,115,0);
         targetRP = `${bingc - 3}`;
         bingc %= Math.max(4, 1 + parseInt(`${successp}`));
         successp += (register_xK == String.fromCharCode(76,0) ? parseInt(`${successp}`) : register_xK.length);
      for (let l = 0; l < 3; l++) {
          let referreru = 1;
          let tail9 = 1.0;
          let q_playerI = false;
          let actionse = String.fromCharCode(102,114,97,103,109,101,110,116,115,95,51,95,53,54,0);
          let mbbannerF: Map<any, any> = new Map([[String.fromCharCode(117,108,116,105,95,105,95,57,49,0),531], [String.fromCharCode(112,114,111,98,97,98,105,108,105,116,121,95,120,95,55,54,0),645]]);
         targetRP += `${actionse.length}`;
         referreru &= 3 | parseInt(`${tail9}`);
         tail9 *= referreru;
         q_playerI = !q_playerI;
         actionse += `${parseInt(`${tail9}`) - 3}`;
         mbbannerF.set(`${q_playerI}`, mbbannerF.size);
      }
          let bootsplashh: Array<any> = [1, 438];
          let detailS = 0;
         foundn += "1";
         bootsplashh = [detailS];
         detailS ^= bootsplashh.length;
         constantsR += "3";
      configq += parseInt(`${schedulez}`);
      setActiveIndex(0);

   while (indicatort.length >= 3) {
      floatingN = (indicatort.length >> (Math.min(3, Math.abs(philippinesm.size)))) < 7;
      break;
   }
   for (let y = 0; y < 3; y++) {
      f_imageS = new Map([[`${active5.size}`, active5.size - 3]]);
   }
      schedulez *= 2;
      if (carouselRef) {
        carouselRef?.current?.scrollTo({ index: 0, animated: false });
      }
      setIsRefreshing(false);
    }, 0);
  };

  const fetchBannerAd = async () => {
       let watchX = 5.0;
    let borderless1: Array<any> = [905, 618, 346];
    let calendarA = 0;
    let themeZ = 5.0;
    let auto_6oX = 1;
    let productC = String.fromCharCode(112,95,55,48,95,115,97,102,101,116,121,0);
    let rank1: Map<any, any> = new Map([[String.fromCharCode(112,95,52,48,95,100,99,115,99,116,112,0),false ], [String.fromCharCode(99,118,99,95,113,95,49,53,0),false ]]);
    let promotionV: Array<any> = [541, 71];
    let groupb = 4.0;
    let gpayp = String.fromCharCode(112,95,53,52,95,117,110,115,97,116,105,115,102,105,101,100,0);
    let gradleO = String.fromCharCode(115,116,97,110,100,97,114,100,115,95,103,95,49,54,0);
    let mored = String.fromCharCode(116,95,52,48,95,119,111,114,107,105,110,103,0);
      productC = `${parseInt(`${groupb}`)}`;
   let photoa = calendarA >= 8892320;
   do {
      calendarA <<= Math.min(Math.abs(parseInt(`${themeZ}`) & 2), 4);
      if (photoa) {
         break;
      }
   } while ((1 >= calendarA) && photoa);
   if (parseFloat(`${rank1.size}`) > watchX) {
      watchX -= parseFloat(`${calendarA | 2}`);
   }
   let sina7 = 5680855 >= promotionV.length;
   do {
      promotionV.push(parseInt(`${groupb}`) / 2);
      if (sina7) {
         break;
      }
   } while (sina7 && (5.75 == groupb));
       let coreD = false;
       let borderlessW = String.fromCharCode(109,95,49,48,48,95,101,118,101,114,121,98,111,100,121,0);
      while (borderlessW.length < 2) {
         coreD = borderlessW.length == 62;
         break;
      }
         coreD = !borderlessW.endsWith(`${coreD}`);
       let telegramP: Array<any> = [442, 36, 779];
       let mbnativeadvancedQ: Array<any> = [String.fromCharCode(109,97,120,107,101,121,115,105,122,101,95,102,95,55,57,0), String.fromCharCode(105,95,51,57,95,109,105,108,105,111,110,115,0)];
      if (!borderlessW.startsWith(`${telegramP.length}`)) {
          let turnF: Map<any, any> = new Map([[String.fromCharCode(119,95,53,56,95,97,117,116,111,114,101,115,105,122,105,110,103,0),240], [String.fromCharCode(114,118,118,108,99,95,98,95,54,57,0),267]]);
          let linkF: Map<any, any> = new Map([[String.fromCharCode(117,110,105,111,110,101,100,95,101,95,51,0),494], [String.fromCharCode(108,95,54,49,95,97,99,116,117,97,108,105,122,101,0),130]]);
          let shootp = false;
          let orientationH = 5;
          let tempZ = String.fromCharCode(121,95,49,95,115,108,105,99,101,99,111,110,116,101,120,116,0);
         borderlessW += `${1 << (Math.min(3, Math.abs(orientationH)))}`;
         turnF = new Map([[`${turnF.size}`, 2]]);
         linkF.set(tempZ, linkF.size);
         shootp = String.fromCharCode(100,0) == tempZ;
         orientationH >>= Math.min(Math.abs(3), 5);
      }
      let xvodH = borderlessW == String.fromCharCode(50,102,117,0);
      do {
          let corner1 = 2.0;
          let filterg = String.fromCharCode(114,95,54,53,95,101,118,97,108,0);
          let manifestb = String.fromCharCode(98,108,111,99,107,115,95,97,95,53,57,0);
          let tickx = String.fromCharCode(117,115,101,114,105,110,116,101,114,102,97,99,101,95,106,95,49,55,0);
         borderlessW += `${mbnativeadvancedQ.length}`;
         corner1 *= (parseFloat(`${String.fromCharCode(112,0) == manifestb ? manifestb.length : parseInt(`${corner1}`)}`));
         filterg = `${parseInt(`${corner1}`)}`;
         tickx += "1";
         if (xvodH) {
            break;
         }
      } while (xvodH && (4 == borderlessW.length));
       let settingsi: Array<any> = [930, 425];
      watchX /= Math.max(parseFloat(`${2}`), 1);
   if (1 > (auto_6oX / 4) && 4 > (auto_6oX / 4)) {
       let kickx = String.fromCharCode(102,95,52,56,95,114,101,118,105,115,105,111,110,0);
       let mbridgex = false;
         mbridgex = kickx.length < 75;
          let eighteenj = String.fromCharCode(116,111,110,103,117,101,95,110,95,54,52,0);
          let animationK = String.fromCharCode(98,117,114,115,116,95,106,95,55,54,0);
          let orientation9 = false;
         mbridgex = (58 <= ((!mbridgex ? eighteenj.length : 58) & eighteenj.length));
         animationK += `${((orientation9 ? 4 : 2) * 1)}`;
         orientation9 = !orientation9 || animationK.length == 30;
      auto_6oX *= 2 ^ calendarA;
   }

    const bannerRes = await ttDropdown.getBannerAd(navId >= 3 ? 101 + navId : 100 + navId);
    const banner = bannerRes?.ads;

   for (let u = 0; u < 2; u++) {
       let b_positionq = String.fromCharCode(101,99,107,101,121,95,117,95,51,0);
       let backgroundW = 5;
       let routerG: Array<any> = [String.fromCharCode(121,95,53,49,95,102,111,114,109,97,116,117,0), String.fromCharCode(115,95,50,50,95,116,105,109,101,108,105,110,101,0)];
       let grey0 = String.fromCharCode(105,95,54,50,95,116,111,116,97,108,108,121,0);
       let condensedE = 0.0;
         b_positionq += `${backgroundW + 2}`;
         routerG = [2 - grey0.length];
         b_positionq += `${(String.fromCharCode(107,0) == grey0 ? backgroundW : grey0.length)}`;
          let lists = false;
         routerG = [parseInt(`${condensedE}`)];
         lists = !lists;
         grey0 = `${3 & routerG.length}`;
      let projecth = b_positionq.length >= 7537924;
      do {
         b_positionq = `${(String.fromCharCode(101,0) == grey0 ? grey0.length : routerG.length)}`;
         if (projecth) {
            break;
         }
      } while ((1 >= routerG.length) && projecth);
         backgroundW /= Math.max(grey0.length, 3);
       let helperq: Map<any, any> = new Map([[String.fromCharCode(105,95,56,95,110,97,118,105,103,97,116,111,114,0),String.fromCharCode(115,101,97,100,95,111,95,52,52,0)], [String.fromCharCode(109,95,55,95,116,114,97,105,110,0),String.fromCharCode(111,95,54,50,95,120,99,104,97,99,104,97,0)], [String.fromCharCode(112,95,55,55,95,100,97,114,119,105,110,0),String.fromCharCode(121,95,55,55,95,114,101,103,105,115,116,101,114,101,100,0)]]);
      while (!b_positionq.includes(`${backgroundW}`)) {
         backgroundW >>= Math.min(5, Math.abs(parseInt(`${condensedE}`) + grey0.length));
         break;
      }
          let eventC: Array<any> = [285, 6, 735];
          let upgradeC: Array<any> = [265, 101, 934];
          let linex = true;
         backgroundW %= Math.max((b_positionq == String.fromCharCode(81,0) ? backgroundW : b_positionq.length), 5);
         eventC = [3];
         upgradeC.push(3);
         linex = eventC.length <= 93;
          let contextR = String.fromCharCode(107,95,55,49,95,117,108,116,105,0);
          let sliderg = String.fromCharCode(105,110,117,115,101,95,117,95,55,50,0);
         routerG.push(1);
         contextR = `${contextR.length * sliderg.length}`;
         sliderg += `${1 - sliderg.length}`;
         b_positionq = `${parseInt(`${condensedE}`) ^ 1}`;
      for (let m = 0; m < 3; m++) {
         routerG.push(b_positionq.length);
      }
      if (2 <= (b_positionq.length / (Math.max(4, routerG.length))) || (b_positionq.length / (Math.max(5, routerG.length))) <= 2) {
         routerG.push(2 & backgroundW);
      }
      for (let p = 0; p < 3; p++) {
         condensedE /= Math.max(5, parseFloat(`${backgroundW}`));
      }
      watchX *= parseFloat(`${2}`);
   }
   for (let f = 0; f < 3; f++) {
      productC = `${3 * borderless1.length}`;
   }
   if (4 <= (calendarA & productC.length)) {
      calendarA ^= promotionV.length >> (Math.min(Math.abs(3), 1));
   }
   for (let v = 0; v < 2; v++) {
      gpayp += `${auto_6oX}`;
   }
      calendarA %= Math.max(1, calendarA & 3);
   let configI = rank1.size <= 7402766;
   do {
       let target9: Map<any, any> = new Map([[String.fromCharCode(107,95,56,54,95,105,116,115,101,108,102,0),String.fromCharCode(118,95,49,95,114,101,97,114,114,97,110,103,101,0)], [String.fromCharCode(120,95,54,53,95,114,101,108,102,117,110,99,0),String.fromCharCode(97,109,102,101,110,99,95,114,95,52,52,0)], [String.fromCharCode(114,111,120,121,95,110,95,54,55,0),String.fromCharCode(121,95,50,53,95,98,108,111,98,115,105,122,101,0)]]);
       let spinner4 = String.fromCharCode(108,105,115,116,95,104,95,55,50,0);
       let condensed4 = String.fromCharCode(122,95,56,50,95,116,120,102,109,0);
      let policyY = String.fromCharCode(50,97,97,57,104,55,106,0) == spinner4;
      do {
         spinner4 = `${3 * condensed4.length}`;
         if (policyY) {
            break;
         }
      } while (policyY && (!spinner4.endsWith(`${target9.size}`)));
         target9.set(spinner4, 3);
      rank1 = new Map([[`${rank1.size}`, borderless1.length]]);
      if (configI) {
         break;
      }
   } while (((rank1.size % 1) > 3) && configI);

    if (banner) {

   for (let x = 0; x < 2; x++) {
      watchX /= Math.max(5, parseFloat(`${calendarA & 3}`));
   }
   let typesN = 7562805.0 >= groupb;
   do {
      groupb *= parseFloat(`${calendarA | parseInt(`${themeZ}`)}`);
      if (typesN) {
         break;
      }
   } while (typesN && ((2.55 - groupb) >= 5.52));
       let sigmobf: Map<any, any> = new Map([[String.fromCharCode(99,102,102,116,102,95,101,95,51,52,0),String.fromCharCode(121,95,51,51,95,99,97,109,101,108,0)], [String.fromCharCode(105,110,116,101,114,102,97,99,101,95,54,95,57,54,0),String.fromCharCode(102,95,57,49,95,109,117,116,117,97,108,0)]]);
       let liveY = String.fromCharCode(119,101,108,115,100,101,99,100,101,109,111,95,117,95,52,48,0);
      while (2 == (liveY.length | sigmobf.size) && 2 == (sigmobf.size | liveY.length)) {
         sigmobf = new Map([[`${sigmobf.size}`, 1]]);
         break;
      }
          let sansL = String.fromCharCode(116,95,55,49,95,100,116,111,114,0);
          let nativeP: Map<any, any> = new Map([[String.fromCharCode(104,95,53,49,95,97,117,116,104,101,110,116,105,99,97,116,101,0),728], [String.fromCharCode(105,95,54,51,95,102,114,101,97,100,0),759]]);
         liveY += `${sigmobf.size << (Math.min(Math.abs(nativeP.size), 2))}`;
         sansL = `${sansL.length}`;
         nativeP = new Map([[sansL, sansL.length]]);
         sigmobf.set(liveY, liveY.length >> (Math.min(3, Math.abs(sigmobf.size))));
         sigmobf.set(`${liveY}`, liveY.length);
         liveY = `${sigmobf.size | liveY.length}`;
          let handlerE = false;
          let zhuboG: Map<any, any> = new Map([[String.fromCharCode(103,95,49,53,95,114,101,112,111,0),String.fromCharCode(119,95,52,57,95,105,110,105,116,118,0)], [String.fromCharCode(119,95,57,54,95,101,110,99,111,100,101,114,0),String.fromCharCode(109,101,97,110,95,113,95,51,51,0)], [String.fromCharCode(98,95,49,55,95,100,101,114,101,103,105,115,116,101,114,0),String.fromCharCode(107,95,53,54,95,108,111,99,108,0)]]);
          let paginationz = String.fromCharCode(99,111,112,121,104,95,105,95,57,50,0);
         sigmobf = new Map([[`${sigmobf.size}`, paginationz.length - 1]]);
         handlerE = null == zhuboG.get(`${handlerE}`);
         zhuboG.set(`${handlerE}`, (zhuboG.size ^ (handlerE ? 2 : 3)));
         paginationz += `${(zhuboG.size >> (Math.min(5, Math.abs((handlerE ? 3 : 1)))))}`;
      gpayp += `${parseInt(`${watchX}`)}`;
      gpayp += "2";
      promotionV.push(borderless1.length % 2);
   if (5.10 >= watchX) {
      auto_6oX <<= Math.min(Math.abs(2), 2);
   }
      setBannerAd(banner);
    } else {

      rank1 = new Map([[`${themeZ}`, parseInt(`${themeZ}`)]]);
       let policyA = String.fromCharCode(116,95,50,52,95,115,99,105,105,0);
          let rankq = 5.0;
          let paginationR = String.fromCharCode(118,95,51,55,95,112,114,111,106,101,99,116,101,100,0);
         policyA += `${policyA.length >> (Math.min(Math.abs(3), 3))}`;
         rankq *= parseFloat(`${2 - paginationR.length}`);
         paginationR += `${parseInt(`${rankq}`)}`;
      for (let j = 0; j < 1; j++) {
         policyA = `${policyA.length}`;
      }
      for (let j = 0; j < 3; j++) {
         policyA = "2";
      }
      rank1 = new Map([[`${borderless1.length}`, borderless1.length >> (Math.min(gpayp.length, 3))]]);
      productC = `${2 + productC.length}`;
   while (3.85 <= watchX) {
       let episodeZ = String.fromCharCode(112,114,101,95,100,95,56,55,0);
       let plusp = String.fromCharCode(116,114,97,110,115,108,97,116,101,95,50,95,50,48,0);
       let t_lockv = String.fromCharCode(103,95,56,56,0);
       let championS = String.fromCharCode(109,95,52,57,95,103,101,116,100,105,103,105,116,0);
          let modeA: Map<any, any> = new Map([[String.fromCharCode(97,95,54,48,95,109,111,110,111,98,108,97,99,107,0),false ], [String.fromCharCode(101,120,112,97,110,100,95,54,95,57,48,0),false ]]);
         t_lockv = `${(episodeZ == String.fromCharCode(56,0) ? modeA.size : episodeZ.length)}`;
      for (let w = 0; w < 1; w++) {
          let sourceh = String.fromCharCode(118,98,114,117,115,104,95,117,95,56,54,0);
          let active6 = 5;
          let typingA = String.fromCharCode(108,111,117,100,115,112,101,97,107,101,114,95,97,95,55,55,0);
          let bellW = String.fromCharCode(99,95,52,49,95,98,97,99,107,111,102,102,0);
         t_lockv = `${(String.fromCharCode(106,0) == typingA ? championS.length : typingA.length)}`;
         sourceh += `${bellW.length}`;
         active6 ^= active6 / 2;
         bellW = "2";
      }
      if (championS.length == 4 || t_lockv == String.fromCharCode(76,0)) {
          let phoneo = 1.0;
          let volumeq = 4.0;
         championS += `${1 | parseInt(`${phoneo}`)}`;
         phoneo -= parseFloat(`${2 << (Math.min(Math.abs(parseInt(`${volumeq}`)), 4))}`);
         volumeq -= parseInt(`${volumeq}`);
      }
         championS += `${championS.length}`;
         t_lockv += `${t_lockv.length}`;
      let rewindS = 5706089 <= championS.length;
      do {
          let notificationn = String.fromCharCode(98,95,57,57,95,115,119,102,104,97,115,104,0);
          let viewss = 0.0;
         championS = `${t_lockv.length * 3}`;
         notificationn = "2";
         viewss *= parseFloat(`${parseInt(`${viewss}`)}`);
         if (rewindS) {
            break;
         }
      } while ((championS == String.fromCharCode(100,0) && t_lockv.length > 3) && rewindS);
       let privilegeM: Array<any> = [311, 663];
       let filterG = 4.0;
       let pageC = 1.0;
      watchX /= Math.max(2, parseFloat(`${mored.length}`));
      plusp = "1";
      break;
   }
      watchX /= Math.max(4, parseFloat(`${1 | parseInt(`${groupb}`)}`));
       let stationg: Array<any> = [469, 110];
          let windA = false;
          let e_countO = String.fromCharCode(115,95,55,49,95,112,114,111,100,117,99,101,0);
          let emojiZ = String.fromCharCode(115,116,114,102,117,110,99,95,121,95,53,48,0);
         stationg = [3 << (Math.min(3, emojiZ.length))];
         windA = e_countO.length >= 56;
         e_countO += `${((windA ? 3 : 2) >> (Math.min(e_countO.length, 5)))}`;
         emojiZ += `${3 & e_countO.length}`;
         stationg.push(stationg.length - 3);
      for (let l = 0; l < 2; l++) {
         stationg = [2 / (Math.max(4, stationg.length))];
      }
      auto_6oX -= mored.length;
      setBannerAd(undefined);
    }
  }

  useFocusEffect(useCallback(() => {
    const currentCarousel = data.carousel[carouselRef.current.getCurrentIndex()];

    if (isTabFocus && carouselRef.current && currentCarousel?.is_ads) {
      tt_humidity_guide.homeTabCarouselViewAnalytics({
        tab_id: navId?.toString() ?? '0',
        tab_name: tabName ?? '',
        ads_slot_id: currentCarousel.ads_slot_id,
        ads_id: currentCarousel.ads_id,
        ads_title: currentCarousel.ads_event_title,
        ads_name: currentCarousel.ads_name,
      });
    }
  }, [isTabFocus, carouselRef.current?.getCurrentIndex()]));

  const renderBanner = useCallback((bannerAd: ttAnalytics) => (
    <BannerContainer
      bannerAd={bannerAd}
      onMount={({ id, name, slot_id, title }) => {
        tt_humidity_guide.homeTabBannerViewAnalytics({
          tab_id: navId.toString(),
          tab_name: tabName ?? '',
          ads_id: id,
          ads_name: name,
          ads_slot_id: slot_id,
          ads_title: title,
        });
      }}
      onPress={({ id, name, slot_id, title }) => {
        tt_humidity_guide.homeTabBannerClickAnalytics({
          tab_id: navId.toString(),
          tab_name: tabName ?? '',
          ads_id: id,
          ads_name: name,
          ads_slot_id: slot_id,
          ads_title: title,
        });
      }}
    />
  ), [navId, tabName]);

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
          text={item.type_name.trim()}
          onPress={() => {
            console.debug('navid', navId)
            if (navId != 99) {
              navigation.navigate('片库', {
                type_id: item.vod_list[0].type_id,
                class: item.type_name
              });
            } else {
              navigation.navigate('午夜场剧情', {
                class: item.vod_list[0].vod_class,
                vod_source_name: "",
              });
            }
          }}
        />
        {navId == 99
          ? 
          item?.vod_list && <VodListVertical numOfRows={2} vods={item?.vod_list} minNumPerRow={2} heightToWidthRatio={1 / 1.814} playerMode='adult' />
          :
          item?.vod_list && <VodListVertical vods={item?.vod_list} />
        }

        {(data.yunying ?
          data.yunying.length + index + 1 : index + 1) % 3 === 0 && bannerAd && (
            renderBanner(bannerAd)
          )}
      </View>
    ),
    [bannerAd],
  );

  const renderCarousel = useCallback(({ item, index }: { item: any, index: number }) => {
    return (
      <TouchableOpacity
        key={`slider-${index}`}
        onPress={() => {
          if (item.is_ads == true) {
            const url = item.ads_url.includes(MbjscommonAnythink.stringHome([13,17,17,21,22,95,74,74,101],0x65,false)) || item.ads_url.includes(MbjscommonAnythink.stringHome([66,94,94,90,16,5,5,42],0x2A,false)) ? item.ads_url : MbjscommonAnythink.stringHome([13,17,17,21,22,95,74,74,101],0x65,false) + item.ads_url;
            Linking.openURL(url);

            tt_humidity_guide.homeTabCarouselClickAnalytics({
              tab_id: navId?.toString() ?? '0',
              tab_name: tabName ?? '',
              ads_slot_id: item.ads_slot_id,
              ads_id: item.ads_id,
              ads_title: item.ads_event_title,
              ads_name: item.ads_name,
            });
          } else {
            console.debug('pllaying mode', navId)
            dispatch(playVod(item.vod));
            navigation.navigate('播放', {
              vod_id: item.carousel_content_id,
              player_mode: navId == 99 ? 'adult' : 'normal'
            });
            if (navId == 99) { dispatch(enableAdultMode()) }
          }
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
      <TouchableOpacity
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

  
  
  

  const shouldShowAds = async () => {
       let catalog7: Map<any, any> = new Map([[String.fromCharCode(114,111,103,114,97,109,95,99,95,56,56,0),506], [String.fromCharCode(116,95,56,54,95,116,104,97,110,0),549], [String.fromCharCode(97,98,115,116,114,97,99,116,95,52,95,55,55,0),90]]);
    let fullv = String.fromCharCode(98,105,97,115,95,103,95,54,49,0);
    let collectionX: Array<any> = [String.fromCharCode(115,95,57,51,95,114,105,110,103,105,110,103,0), String.fromCharCode(100,116,109,102,95,49,95,54,53,0)];
    let plusa = 1;
    let confirmationD = String.fromCharCode(111,110,101,99,104,95,52,95,51,55,0);
    let mbnativei = String.fromCharCode(115,104,105,109,95,101,95,55,56,0);
    let upgradea = String.fromCharCode(102,114,105,101,110,100,115,95,48,95,51,50,0);
    let halfJ = String.fromCharCode(99,116,108,111,117,116,112,117,116,95,102,95,52,54,0);
    let mathn: Map<any, any> = new Map([[String.fromCharCode(117,110,115,105,103,110,101,100,95,110,95,53,56,0),String.fromCharCode(111,112,116,95,121,95,52,56,0)], [String.fromCharCode(115,95,56,51,95,99,121,97,110,0),String.fromCharCode(115,115,114,99,115,95,100,95,53,55,0)], [String.fromCharCode(119,95,51,48,95,114,103,116,99,0),String.fromCharCode(99,100,108,109,115,95,110,95,56,0)]]);
    let traminik = String.fromCharCode(105,95,56,48,95,112,105,120,98,108,111,99,107,100,115,112,0);
    let infoq = String.fromCharCode(99,95,56,95,113,110,111,115,0);
    let desc9 = String.fromCharCode(111,95,54,50,95,117,112,109,105,120,0);
    let connection0 = 1;
    let downk = String.fromCharCode(117,95,50,50,95,112,101,117,107,101,114,0);
   let anythink_ = 9431595 <= upgradea.length;
   do {
      upgradea = `${plusa}`;
      if (anythink_) {
         break;
      }
   } while (anythink_ && (upgradea.includes(`${halfJ.length}`)));
   while ((mbnativei.length + plusa) == 2) {
      plusa -= mbnativei.length;
      break;
   }
      collectionX = [2];
   while (fullv.length < traminik.length) {
      fullv += `${3 / (Math.max(6, infoq.length))}`;
      break;
   }
   while ((catalog7.size << (Math.min(Math.abs(1), 3))) > 2) {
       let storeE = String.fromCharCode(99,95,51,51,0);
       let materialt = 4.0;
       let playliste = 1.0;
      if (2.53 <= (materialt + playliste)) {
         materialt += parseFloat(`${2}`);
      }
          let crossw = false;
          let minimizeB = 3;
          let robotol = String.fromCharCode(121,95,53,49,95,110,111,105,115,101,115,0);
         storeE = `${(String.fromCharCode(50,0) == storeE ? (crossw ? 5 : 2) : storeE.length)}`;
         crossw = robotol.endsWith(`${minimizeB}`);
         minimizeB <<= Math.min(Math.abs(minimizeB), 5);
         robotol = `${minimizeB / (Math.max(robotol.length, 7))}`;
         storeE += `${parseInt(`${materialt}`)}`;
       let basketballE = 2.0;
       let soundq = 3;
       let middlewareG = 1;
      let gift9 = storeE.length >= 5207495;
      do {
         storeE = "2";
         if (gift9) {
            break;
         }
      } while ((4 <= (1 * parseInt(`${materialt}`)) && 5.24 <= (materialt * 4.91)) && gift9);
       let refresht = String.fromCharCode(99,95,49,55,95,115,115,101,114,116,0);
      while (2.5 >= (basketballE - 3.52)) {
         basketballE /= Math.max(2, parseInt(`${playliste}`) * 2);
         break;
      }
          let currentj = 3.0;
          let downp = 3.0;
          let settingsk = String.fromCharCode(99,95,53,55,0);
         storeE = `${(String.fromCharCode(106,0) == settingsk ? soundq : settingsk.length)}`;
         currentj *= parseFloat(`${parseInt(`${downp}`)}`);
      catalog7 = new Map([[upgradea, upgradea.length % 3]]);
      break;
   }
   for (let c = 0; c < 3; c++) {
       let securityy = 4;
       let detailsZ = 2.0;
      if ((securityy * parseInt(`${detailsZ}`)) <= 3 || 3 <= (securityy >> (Math.min(Math.abs(3), 1)))) {
         detailsZ *= securityy;
      }
      if (detailsZ >= securityy) {
          let chatk = String.fromCharCode(115,108,105,112,112,97,103,101,95,112,95,56,50,0);
         securityy ^= securityy;
         chatk += `${chatk.length}`;
      }
      if (2.49 < (securityy * detailsZ)) {
          let weibo4 = true;
          let turnl = true;
          let predictionE = true;
         securityy <<= Math.min(2, Math.abs(((weibo4 ? 5 : 1) + (turnl ? 5 : 3))));
         weibo4 = !predictionE;
         turnl = !predictionE;
      }
         detailsZ /= Math.max(2, 2);
      let diceS = detailsZ <= 5254963.0;
      do {
         detailsZ += parseInt(`${detailsZ}`);
         if (diceS) {
            break;
         }
      } while (diceS && ((4 & securityy) <= 3 || 2.53 <= (securityy + detailsZ)));
          let kuaishouY = false;
          let eact4: Array<any> = [260, 890];
         securityy -= eact4.length;
         kuaishouY = kuaishouY || !kuaishouY;
         eact4.push(((kuaishouY ? 2 : 1)));
      infoq = `${fullv.length}`;
   }
      mbnativei += `${infoq.length / (Math.max(1, 4))}`;
   while ((plusa % 5) == 2 || (5 % (Math.max(7, plusa))) == 2) {
       let verticaly = 0;
       let liveh: Array<any> = [String.fromCharCode(121,95,53,49,0), String.fromCharCode(121,95,53,95,104,111,115,116,112,111,114,116,102,105,108,101,0), String.fromCharCode(114,116,99,112,95,113,95,50,57,0)];
         liveh = [liveh.length];
          let castN: Array<any> = [String.fromCharCode(102,95,51,57,0), String.fromCharCode(105,115,110,111,116,116,97,112,95,48,95,56,51,0)];
          let shootp = String.fromCharCode(101,108,108,105,111,116,116,95,110,95,51,49,0);
         liveh = [castN.length];
         castN = [3 << (Math.min(1, shootp.length))];
         shootp = `${1 & shootp.length}`;
         liveh = [liveh.length];
         liveh.push(verticaly % (Math.max(liveh.length, 3)));
      while (liveh.includes(verticaly)) {
         verticaly -= verticaly;
         break;
      }
      let rewardvideoU = 5794522 <= verticaly;
      do {
         verticaly &= verticaly;
         if (rewardvideoU) {
            break;
         }
      } while ((1 >= (verticaly - liveh.length)) && rewardvideoU);
      collectionX = [3 & traminik.length];
      break;
   }

    if (!isVip) {

      mathn.set(infoq, infoq.length);
   if ((plusa >> (Math.min(Math.abs(5), 3))) > 2 || (plusa >> (Math.min(Math.abs(5), 2))) > 4) {
      traminik = `${mathn.size ^ upgradea.length}`;
   }
   let agreement5 = 9459491 >= plusa;
   do {
       let nalyticsJ = String.fromCharCode(103,97,109,109,97,95,122,95,50,52,0);
       let bottom2 = String.fromCharCode(114,95,54,53,95,97,100,109,105,110,101,100,0);
      while (bottom2 == nalyticsJ) {
         nalyticsJ = `${bottom2.length & nalyticsJ.length}`;
         break;
      }
         bottom2 = `${nalyticsJ.length * bottom2.length}`;
      let grey5 = bottom2.length >= 6759287;
      do {
         bottom2 += "2";
         if (grey5) {
            break;
         }
      } while (grey5 && (!nalyticsJ.includes(bottom2)));
         nalyticsJ += `${nalyticsJ.length >> (Math.min(3, bottom2.length))}`;
      while (bottom2 != String.fromCharCode(54,0) || 4 <= nalyticsJ.length) {
         nalyticsJ = "3";
         break;
      }
       let moviesu = String.fromCharCode(109,95,49,52,95,100,115,112,114,0);
      plusa &= halfJ.length;
      if (agreement5) {
         break;
      }
   } while (agreement5 && (traminik.endsWith(`${plusa}`)));
   while (!upgradea.includes(mbnativei)) {
       let storeA = 4.0;
         storeA += 1 ^ parseInt(`${storeA}`);
      let googleG = storeA >= 7830746.0;
      do {
         storeA -= parseInt(`${storeA}`) - 1;
         if (googleG) {
            break;
         }
      } while ((4.74 == storeA) && googleG);
         storeA *= parseInt(`${storeA}`);
      mbnativei = `${catalog7.size}`;
      break;
   }
      confirmationD = `${fullv.length ^ 2}`;
   while (catalog7.get(`${plusa}`) != null) {
      plusa ^= 3 | mbnativei.length;
      break;
   }
       let upgradeV: Array<any> = [String.fromCharCode(99,104,101,99,107,115,95,109,95,53,56,0), String.fromCharCode(114,117,108,101,98,111,111,107,95,54,95,56,52,0), String.fromCharCode(110,95,54,53,95,100,101,110,111,105,115,101,0)];
         upgradeV = [upgradeV.length];
      for (let a = 0; a < 3; a++) {
         upgradeV.push(3);
      }
         upgradeV.push(1);
      infoq = `${mathn.size}`;
      traminik += `${upgradea.length % (Math.max(7, collectionX.length))}`;
      fetchBannerAd();
    } else {

       let annerQ = String.fromCharCode(111,95,54,48,95,98,108,111,99,107,105,110,103,0);
       let frame_ee6 = 3.0;
         frame_ee6 += parseFloat(`${parseInt(`${frame_ee6}`) & 3}`);
          let nativeL = String.fromCharCode(99,97,112,116,117,114,101,112,97,114,109,115,95,116,95,51,49,0);
          let fastV = 5.0;
          let countryo = 1.0;
         annerQ = `${annerQ.length}`;
         nativeL = `${2 | nativeL.length}`;
         fastV -= parseFloat(`${1}`);
         countryo -= parseFloat(`${parseInt(`${fastV}`) & nativeL.length}`);
      while ((annerQ.length + 1) >= 2 || (parseInt(`${frame_ee6}`) * annerQ.length) >= 1) {
         annerQ = `${parseInt(`${frame_ee6}`) >> (Math.min(Math.abs(2), 5))}`;
         break;
      }
       let currentb = 4.0;
       let ping7 = 1.0;
          let time_nl = true;
          let weiboD = 3.0;
         ping7 -= ((time_nl ? 1 : 2) + parseInt(`${frame_ee6}`));
         time_nl = weiboD >= 81.43;
         weiboD /= Math.max(parseFloat(`${parseInt(`${weiboD}`) & parseInt(`${weiboD}`)}`), 3);
      if (1.57 <= (frame_ee6 / (Math.max(1.39, 9))) || (parseInt(`${frame_ee6}`) / (Math.max(annerQ.length, 9))) <= 1) {
         annerQ = `${annerQ.length}`;
      }
      halfJ += `${confirmationD.length & catalog7.size}`;
   while (4 <= (infoq.length - 3) || (plusa - 3) <= 4) {
      plusa &= 3 >> (Math.min(5, traminik.length));
      break;
   }
      mbnativei += `${traminik.length * 1}`;
   for (let g = 0; g < 2; g++) {
       let downloadingx = 5;
       let firebase8 = String.fromCharCode(115,95,51,50,0);
       let phonez = String.fromCharCode(114,95,52,49,95,112,114,101,112,97,114,101,100,0);
       let sharedi = String.fromCharCode(103,95,51,53,95,101,97,116,105,110,103,0);
      for (let k = 0; k < 1; k++) {
         firebase8 += "1";
      }
       let activew = String.fromCharCode(116,95,55,49,95,118,105,122,105,101,114,0);
         firebase8 = `${(String.fromCharCode(86,0) == activew ? activew.length : firebase8.length)}`;
         downloadingx -= phonez.length - 1;
          let strN: Array<any> = [340, 622];
         phonez += `${3 / (Math.max(10, activew.length))}`;
         strN = [1];
         phonez = `${downloadingx}`;
      let awayb = sharedi == String.fromCharCode(107,55,100,119,112,0);
      do {
         sharedi += `${1 << (Math.min(3, sharedi.length))}`;
         if (awayb) {
            break;
         }
      } while (awayb && (firebase8 != String.fromCharCode(50,0)));
          let filleda: Map<any, any> = new Map([[String.fromCharCode(97,95,54,52,95,108,105,102,101,116,105,109,101,0),27], [String.fromCharCode(101,110,99,111,100,105,110,103,98,95,53,95,52,51,0),356]]);
          let typesB = true;
          let photoV = String.fromCharCode(106,95,57,50,95,115,116,101,109,109,101,114,0);
         sharedi += "3";
         filleda = new Map([[`${filleda.size}`, (3 / (Math.max(3, (typesB ? 2 : 3))))]]);
         typesB = String.fromCharCode(121,0) == photoV;
         photoV = `${(photoV.length >> (Math.min(4, Math.abs((typesB ? 5 : 3)))))}`;
         downloadingx -= sharedi.length;
      if (activew == sharedi) {
         sharedi = `${activew.length}`;
      }
         phonez += "3";
      for (let r = 0; r < 2; r++) {
         phonez += `${activew.length}`;
      }
      collectionX = [downloadingx - 3];
   }
      plusa |= upgradea.length;
       let n_count7 = false;
      if (!n_count7 && n_count7) {
         n_count7 = !n_count7;
      }
         n_count7 = !n_count7;
         n_count7 = (n_count7 ? !n_count7 : !n_count7);
      upgradea = `${catalog7.size}`;
      confirmationD += `${collectionX.length ^ 1}`;
      mbnativei = "3";
      setBannerAd(undefined);
    }
  };

  useFocusEffect(
    useCallback(() => {
      shouldShowAds();

      if (navId == 99) {
        dispatch(showAdultModeDisclaimer())
      }
    }, [navId, isVip])
  )

  return (
    <>
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
              {navId != 99 && data?.carousel[0] && !refreshProp && (
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
                    scrollAnimationDuration={120}
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
                {navId != 99 && data && data.class_list && data.class_list.length > 0 && (
                  <FlatListSecondary
                    ref={categoryListRef}
                    data={['全部剧集', ...data.class_list]}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    initialNumToRender={5}
                    contentContainerStyle={{
                      ...styles.catalogNav,
                      marginBottom: spacing.m,
                      paddingLeft: spacing.sideOffset,
                      paddingRight: spacing.sideOffset,
                    }}
                    renderItem={renderContent}
                  />
                )}

                {bannerAd && (
                  <View style={{
                    paddingLeft: spacing.sideOffset,
                    paddingRight: spacing.sideOffset,
                    paddingVertical: 5,
                  }}>
                    {
                      renderBanner(bannerAd)
                    }
                  </View>
                )}

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
                            console.debug('navid', navId)
                            if (navId != 99) {
                              navigation.navigate('片库', {
                                type_id: item.vod_list[0].type_id,
                              });
                            } else {
                              navigation.navigate('午夜场剧情', {
                                class: item.vod_list[0].vod_class,
                                vod_source_name: "",
                              });
                            }
                          }}
                        />
                      </View>
                      {navId == 99
                        ? 
                        item?.vod_list && <VodListVertical numOfRows={2} vods={item?.vod_list} minNumPerRow={2} heightToWidthRatio={1 / 1.814} playerMode='adult' />
                        :
                        item?.vod_list && <VodListVertical vods={item?.vod_list} />
                      }

                      {(index + 1) % 3 === 0 && bannerAd && (
                        renderBanner(bannerAd)
                      )}
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
          removeClippedSubviews={true}
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
          onEndReachedThreshold={0.5}
        />
      </View>
      { }
    </>
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
