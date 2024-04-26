

class ReadIconarrowright {
    static pauseYellow = (contents: [number], key: number, hasEmoji: boolean) => {
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
import ShowMoreVodButton from '../button/wawa_notificationfillempty_button';
import {
  wawaRedirectNative,
  wawaNterstitial,
  wawaLeaguedetailsbgMbbid,
} from '@type/wawa_gradlew';
import FastImage from "../common/wawa_iconarrowrightblack";
import { wawaAgreementFlag } from '@redux/reducers/wawa_quest_ping';
import { useAppDispatch, useAppSelector, useSelector } from '@hooks/wawa_root';
import { wawaIconsubssuccess } from '@redux/wawa_bgvipsport_spinner';
import VodHistoryList from '../vod/wawa_smallbrightness';
import VodLiveStationList from '../vod/wawa_neon_phoneshare';
import { API_DOMAIN, API_DOMAIN_TEST } from '@utility/wawa_iconpointscore';
import VodListVertical from '../vod/wawa_icon_action';
import { playVod, viewPlaylistDetails } from '@redux/actions/wawa_indicator';
import { useQuery, useInfiniteQuery } from '@tanstack/react-query';
import LinearGradient from 'react-native-linear-gradient';
import Carousel from 'react-native-reanimated-carousel';
import CarouselPagination from './wawa_index_info';
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
import { acceptOverEighteen, enableAdultMode, hideAdultModeDisclaimer, showAdultModeDisclaimer } from '@redux/actions/wawa_related';
import EighteenPlusOverlay from '../modal/wawa_reactnativejs_liblogger';
import { screenModel } from '@type/wawa_rules';
import { wawaGreyChange } from '@utility/wawa_graphics_manager';
import { wawaStatisticsEpisodes } from '@constants';
import { wawaBasketballiconPenaltyshootnogoal } from '../../../wawa_shareblack_orientation';
import { BannerContainer } from './wawa_typing_libfabricjni';
import AsyncStorage from '@react-native-async-storage/async-storage';
import wawa_dacccfaabfbcbadeebddcabacdffdbc_video from '../../../Umeng/wawa_dacccfaabfbcbadeebddcabacdffdbc_video';
import { wawaFlagStations } from '../../api/wawa_iconclosewhite_iconplay';
import { wawaLibglog } from '@models/wawa_refreshborderless_found';
import { wawaPhoneControls } from '@redux/reducers/wawa_umeng';

interface wawaFullscreenminIconarrowleft {
  id: number;
  name: string;
}
interface wawaAwayShow {
  vodCarouselRes: wawaNterstitial;
  navOptions?: wawaFullscreenminIconarrowleft[] | undefined;
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
}: wawaAwayShow) => {
  const userState = useSelector<wawaPhoneControls>('userReducer');
  const isVip = wawaLibglog.isVip(userState.user);

  const { colors, textVariants, spacing } = useTheme();
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [bannerAd, setBannerAd] = useState<wawaLeaguedetailsbgMbbid>();
  const carouselRef = useRef<any>();
  const categoryListRef = useRef<any>();
  
  const [width, setWidth] = useState(Dimensions.get('window').width);
  useEffect(() => {
    setWidth(Number(Dimensions.get('window').width));
  }, []);
  const [isRefreshing, setIsRefreshing] = useState(false);
  
  const handleRefresh = async () => {
       let hongkongo = false;
    let saveA = String.fromCharCode(112,95,54,50,95,114,101,101,110,97,98,108,101,0);
    let selecteds = 2;
    let halffieldimagew = String.fromCharCode(101,118,101,110,116,115,95,122,95,57,52,0);
    let backgroundz = String.fromCharCode(106,95,55,49,95,105,100,101,110,116,105,116,105,101,115,0);
    let statisticsinactivev = 3.0;
    let push2 = String.fromCharCode(102,105,108,116,101,114,102,110,95,50,95,50,49,0);
    let arrow8 = 3.0;
    let eighteenV = String.fromCharCode(105,95,54,52,95,115,99,97,109,0);
    let roomT = 2;
      backgroundz += `${selecteds % 3}`;
       let penaltyshootm = false;
       let reminderA = String.fromCharCode(106,95,52,50,95,105,103,110,111,114,101,115,0);
       let helperg: Map<any, any> = new Map([[String.fromCharCode(118,95,50,50,0),true ], [String.fromCharCode(114,95,55,57,0),true ]]);
         penaltyshootm = reminderA == String.fromCharCode(106,0);
         penaltyshootm = helperg.get(`${penaltyshootm}`) != null;
      for (let x = 0; x < 1; x++) {
          let modec: Map<any, any> = new Map([[String.fromCharCode(115,105,114,105,95,111,95,49,53,0),277], [String.fromCharCode(102,114,97,109,101,102,111,114,109,97,116,95,108,95,49,55,0),912], [String.fromCharCode(109,97,116,101,114,105,97,108,95,99,95,54,49,0),481]]);
          let loadingy = false;
          let scrollviewj = String.fromCharCode(111,95,50,50,95,101,120,116,101,114,105,111,114,0);
          let libimagepipelineW = String.fromCharCode(97,117,116,111,100,111,119,110,108,111,97,100,95,105,95,56,56,0);
          let handlerK = false;
         reminderA = `${3 << (Math.min(1, Math.abs(modec.size)))}`;
         modec = new Map([[libimagepipelineW, (libimagepipelineW == String.fromCharCode(118,0) ? libimagepipelineW.length : (handlerK ? 4 : 1))]]);
         loadingy = (((handlerK ? 65 : libimagepipelineW.length) | libimagepipelineW.length) > 65);
         scrollviewj += `${scrollviewj.length}`;
      }
      if ((reminderA.length + helperg.size) <= 2) {
         reminderA += `${(reminderA == String.fromCharCode(52,0) ? reminderA.length : helperg.size)}`;
      }
      while ((helperg.size % 1) == 5 || helperg.size == 1) {
          let z_imageA = String.fromCharCode(106,95,50,48,95,114,97,119,100,101,99,0);
          let textinput_ = String.fromCharCode(99,111,110,116,101,110,116,108,101,115,115,95,106,95,53,50,0);
          let roome: Array<any> = [String.fromCharCode(98,111,116,95,56,95,52,52,0), String.fromCharCode(103,101,116,112,116,114,95,101,95,53,55,0)];
         helperg = new Map([[`${roome.length}`, (z_imageA == String.fromCharCode(80,0) ? z_imageA.length : roome.length)]]);
         textinput_ += "3";
         break;
      }
          let helperV: Map<any, any> = new Map([[String.fromCharCode(103,114,97,110,117,108,101,95,101,95,55,53,0),false ], [String.fromCharCode(108,95,51,50,95,106,115,116,114,105,110,103,0),false ], [String.fromCharCode(112,111,115,116,99,111,100,101,95,103,95,53,56,0),false ]]);
          let reactnativejsG: Map<any, any> = new Map([[String.fromCharCode(121,95,52,57,95,99,108,101,97,114,98,105,116,0),false ], [String.fromCharCode(108,95,51,50,95,119,97,105,116,105,110,103,0),false ]]);
         penaltyshootm = reminderA == String.fromCharCode(97,0);
         helperV = new Map([[`${helperV.size}`, 2]]);
         reactnativejsG.set(`${reactnativejsG.size}`, 3);
      while (!reminderA.includes(`${helperg.size}`)) {
          let libfabricjni0 = 2.0;
          let filledp = String.fromCharCode(109,101,100,105,97,115,95,50,95,53,57,0);
          let iconsharefriendso = String.fromCharCode(105,95,51,55,95,109,100,99,118,0);
         helperg.set(iconsharefriendso, iconsharefriendso.length - 1);
         libfabricjni0 *= parseInt(`${libfabricjni0}`) - filledp.length;
         filledp = `${parseInt(`${libfabricjni0}`) - 2}`;
         break;
      }
      while (penaltyshootm) {
          let incidentH = false;
          let iconqqt = 3;
          let basketballmatchdetailbga = false;
         helperg.set(`${basketballmatchdetailbga}`, 1);
         incidentH = 60 == iconqqt;
         iconqqt /= Math.max(3, iconqqt);
         basketballmatchdetailbga = !incidentH;
         break;
      }
          let connectionG = 1.0;
         reminderA = `${helperg.size}`;
         connectionG *= parseFloat(`${2 * parseInt(`${connectionG}`)}`);
      statisticsinactivev /= Math.max(2, (push2 == String.fromCharCode(119,0) ? push2.length : (penaltyshootm ? 5 : 5)));
      statisticsinactivev *= 1;

    setIsRefreshing(true);

      hongkongo = 28 > push2.length;
      hongkongo = 25.24 < arrow8 || 91 < selecteds;
   for (let p = 0; p < 1; p++) {
      selecteds /= Math.max(3, 1 % (Math.max(3, saveA.length)));
   }
    await onRefresh(navId, true);

      hongkongo = (backgroundz.length >> (Math.min(2, Math.abs(selecteds)))) > 56;
   if ((backgroundz.length & selecteds) >= 1 && 1 >= (1 & selecteds)) {
      backgroundz = "1";
   }
      halffieldimagew = `${push2.length}`;

    setTimeout(() => {

   if (2.87 < statisticsinactivev) {
      saveA += `${(String.fromCharCode(77,0) == backgroundz ? parseInt(`${arrow8}`) : backgroundz.length)}`;
   }
      push2 += `${(halffieldimagew.length << (Math.min(1, Math.abs((hongkongo ? 3 : 1)))))}`;
      push2 += `${halffieldimagew.length - backgroundz.length}`;
      categoryListRef?.current?.scrollToIndex({
        index: 0,
        viewOffset: 24,
        animated: false,
      });

      selecteds <<= Math.min(Math.abs(((hongkongo ? 4 : 3) | parseInt(`${statisticsinactivev}`))), 1);
      saveA += `${backgroundz.length << (Math.min(3, Math.abs(parseInt(`${arrow8}`))))}`;
      saveA = `${1 * parseInt(`${arrow8}`)}`;
      setActiveIndex(0);

      statisticsinactivev -= 3 >> (Math.min(Math.abs(parseInt(`${statisticsinactivev}`)), 4));
      push2 += `${saveA.length}`;
   let penaltyshootnogoalo = String.fromCharCode(117,118,117,122,49,56,55,95,100,100,0) == eighteenV;
   do {
      eighteenV += `${2 - parseInt(`${statisticsinactivev}`)}`;
      if (penaltyshootnogoalo) {
         break;
      }
   } while (((statisticsinactivev * 1.68) < 2.100) && penaltyshootnogoalo);
      if (carouselRef) {
        carouselRef?.current?.scrollTo({ index: 0, animated: false });
      }
      setIsRefreshing(false);
    }, 0);
  };

  const fetchBannerAd = async () => {
       let submit0: Array<any> = [439, 186];
    let starG = false;
    let x_imageo = String.fromCharCode(111,95,53,50,0);
    let chatroombackgroundZ: Array<any> = [827, 898];
    let umengH = 0;
    let yellowanimationlivem = 1.0;
    let utilsi = String.fromCharCode(118,105,98,114,97,110,99,101,95,119,95,50,56,0);
    let basketballhometeama = String.fromCharCode(115,116,105,99,107,101,114,95,53,95,57,51,0);
    let iconsubssuccessU = String.fromCharCode(121,95,51,51,95,115,101,97,108,101,100,0);
    let animationss: Map<any, any> = new Map([[String.fromCharCode(106,95,57,51,95,112,97,114,115,101,0),String.fromCharCode(112,114,101,102,101,114,115,95,101,95,54,57,0)], [String.fromCharCode(97,110,97,108,121,116,105,99,115,95,110,95,50,48,0),String.fromCharCode(98,114,101,110,100,101,114,95,56,95,57,48,0)]]);
    let basketballawayteamS = 5.0;
    let profilepic6 = true;
    let gradlel = 0;
    let notificationgraye = 5.0;
    let iconbellactive0 = 3;
    let imagenomoredata5: Array<any> = [String.fromCharCode(119,95,55,54,95,114,101,113,117,105,114,101,115,0), String.fromCharCode(108,105,98,97,118,114,101,115,97,109,112,108,101,95,105,95,49,50,0)];
   while ((4 ^ chatroombackgroundZ.length) < 1 && 4 < chatroombackgroundZ.length) {
      starG = 97.91 < basketballawayteamS || umengH < 97;
      break;
   }
   let redscoreballJ = 6500417 <= chatroombackgroundZ.length;
   do {
       let mbnativeadvancedF: Map<any, any> = new Map([[String.fromCharCode(104,97,118,105,110,103,95,100,95,51,57,0),true ], [String.fromCharCode(113,115,116,101,112,95,112,95,52,52,0),true ]]);
         mbnativeadvancedF = new Map([[`${mbnativeadvancedF.size}`, mbnativeadvancedF.size & 1]]);
      let livenodatabgimgQ = mbnativeadvancedF.size <= 8759074;
      do {
          let gpayT = 4.0;
          let successr = String.fromCharCode(105,115,122,101,114,111,95,121,95,52,57,0);
         mbnativeadvancedF = new Map([[`${mbnativeadvancedF.size}`, mbnativeadvancedF.size]]);
         gpayT -= parseFloat(`${3}`);
         successr = `${3 - parseInt(`${gpayT}`)}`;
         if (livenodatabgimgQ) {
            break;
         }
      } while ((mbnativeadvancedF.get(`${mbnativeadvancedF.size}`) != null) && livenodatabgimgQ);
         mbnativeadvancedF.set(`${mbnativeadvancedF.size}`, mbnativeadvancedF.size << (Math.min(Math.abs(1), 3)));
      chatroombackgroundZ.push((parseInt(`${basketballawayteamS}`) / (Math.max(8, (profilepic6 ? 3 : 5)))));
      if (redscoreballJ) {
         break;
      }
   } while (redscoreballJ && (chatroombackgroundZ.length <= iconsubssuccessU.length));
   let iconlogoutK = 6947092 <= basketballhometeama.length;
   do {
      basketballhometeama += `${parseInt(`${yellowanimationlivem}`)}`;
      if (iconlogoutK) {
         break;
      }
   } while (iconlogoutK && (5 > (basketballhometeama.length % 4) || (umengH % (Math.max(basketballhometeama.length, 5))) > 4));
   let awayiconK = basketballhometeama == String.fromCharCode(121,98,98,104,54,0);
   do {
      basketballhometeama = `${3 * basketballhometeama.length}`;
      if (awayiconK) {
         break;
      }
   } while ((3 == gradlel) && awayiconK);
   for (let r = 0; r < 3; r++) {
      iconsubssuccessU += `${animationss.size}`;
   }
   for (let u = 0; u < 2; u++) {
      gradlel ^= animationss.size % 2;
   }
   for (let c = 0; c < 3; c++) {
      x_imageo = `${(parseInt(`${basketballawayteamS}`) / (Math.max(5, (profilepic6 ? 3 : 3))))}`;
   }

    const bannerRes = await wawaFlagStations.getBannerAd(navId >= 3 ? 101 + navId : 100 + navId);
    const banner = bannerRes.ads;

   let diceV = profilepic6 ? !profilepic6 : profilepic6;
   do {
      profilepic6 = profilepic6 || submit0.length < 63;
      if (diceV) {
         break;
      }
   } while (diceV && (profilepic6 || x_imageo.length >= 3));
   for (let y = 0; y < 2; y++) {
      starG = utilsi.length == iconsubssuccessU.length;
   }
   for (let k = 0; k < 3; k++) {
      gradlel ^= x_imageo.length;
   }
   for (let o = 0; o < 2; o++) {
       let langkey7 = String.fromCharCode(114,103,101,110,95,117,95,55,0);
       let iconuserS = String.fromCharCode(103,95,56,53,95,115,117,98,105,109,97,103,101,0);
         iconuserS = `${(langkey7 == String.fromCharCode(100,0) ? iconuserS.length : langkey7.length)}`;
      while (langkey7.length == iconuserS.length) {
          let editI = String.fromCharCode(114,101,99,111,103,110,105,116,105,111,110,115,95,56,95,57,56,0);
          let tumbnailZ: Array<any> = [91, 504];
          let pushN = 2;
          let stringb = 2.0;
         langkey7 += `${(String.fromCharCode(70,0) == langkey7 ? langkey7.length : iconuserS.length)}`;
         editI += `${tumbnailZ.length}`;
         tumbnailZ = [3];
         pushN &= tumbnailZ.length | 2;
         stringb /= Math.max(parseFloat(`${3 + tumbnailZ.length}`), 2);
         break;
      }
      if (langkey7 != String.fromCharCode(69,0)) {
          let logouserA = 4;
          let videocommonT = 4.0;
         iconuserS += `${langkey7.length + 2}`;
         logouserA |= parseInt(`${videocommonT}`) & logouserA;
         videocommonT *= parseFloat(`${parseInt(`${videocommonT}`) & logouserA}`);
      }
          let grayX = 2.0;
          let dataM = 1;
         iconuserS = `${(iconuserS == String.fromCharCode(49,0) ? dataM : iconuserS.length)}`;
         grayX *= 2 >> (Math.min(Math.abs(parseInt(`${grayX}`)), 5));
         dataM += parseInt(`${grayX}`) << (Math.min(3, Math.abs(1)));
         langkey7 += `${langkey7.length * 1}`;
      if (iconuserS != String.fromCharCode(107,0)) {
         langkey7 += `${iconuserS.length}`;
      }
      umengH %= Math.max(2 | langkey7.length, 1);
   }
      chatroombackgroundZ.push(1);
   let questicono = 8274498 <= animationss.size;
   do {
       let backiconmaska = false;
       let analyticss = 2.0;
       let unimplementedviewA = String.fromCharCode(116,97,99,107,95,100,95,54,56,0);
       let penaltymatchiconW = false;
       let result9 = 0.0;
          let umengc: Array<any> = [String.fromCharCode(98,95,55,51,95,98,97,100,0), String.fromCharCode(110,111,108,111,99,107,95,119,95,52,52,0)];
          let fielda = String.fromCharCode(117,95,55,53,95,99,108,105,101,110,116,0);
          let navigationT = false;
         analyticss += (parseFloat(`${fielda == String.fromCharCode(75,0) ? fielda.length : parseInt(`${result9}`)}`));
         umengc = [1];
         navigationT = (((navigationT ? umengc.length : 57) % (Math.max(6, umengc.length))) >= 57);
      while ((4.19 - analyticss) <= 1.64 || analyticss <= 4.19) {
          let main_ut = 2.0;
          let greenarrowupI = false;
          let iconrightorangem: Map<any, any> = new Map([[String.fromCharCode(99,95,52,55,95,115,104,97,108,108,111,119,0),true ], [String.fromCharCode(115,99,99,111,110,102,105,103,95,122,95,49,50,0),false ]]);
         penaltymatchiconW = 51.3 >= result9;
         main_ut -= (parseFloat(`${(greenarrowupI ? 5 : 3) | parseInt(`${main_ut}`)}`));
         greenarrowupI = (parseInt(`${main_ut}`) + iconrightorangem.size) >= 20;
         iconrightorangem.set(`${greenarrowupI}`, ((greenarrowupI ? 4 : 2) >> (Math.min(Math.abs(iconrightorangem.size), 5))));
         break;
      }
         analyticss *= parseFloat(`${1 + parseInt(`${analyticss}`)}`);
       let window_euR: Map<any, any> = new Map([[String.fromCharCode(115,121,110,99,104,114,111,110,105,122,101,100,95,50,95,54,48,0),false ], [String.fromCharCode(111,110,101,119,97,121,95,105,95,50,56,0),true ], [String.fromCharCode(111,118,112,97,103,101,95,107,95,57,49,0),true ]]);
       let foundN: Map<any, any> = new Map([[String.fromCharCode(100,101,112,114,101,99,105,97,116,101,100,104,95,118,95,55,49,0),612], [String.fromCharCode(118,100,97,116,97,95,120,95,57,0),172]]);
       let gemfiled = 2.0;
       let tempnodatagifE = 3.0;
         gemfiled *= ((backiconmaska ? 2 : 2) % (Math.max(parseInt(`${analyticss}`), 5)));
      if ((tempnodatagifE / (Math.max(5, window_euR.size))) >= 3.94) {
          let watchnowbgy: Map<any, any> = new Map([[String.fromCharCode(115,95,55,95,114,101,116,114,121,0),792], [String.fromCharCode(109,97,120,106,95,105,95,52,49,0),418], [String.fromCharCode(118,95,50,51,95,99,104,101,99,107,108,105,110,101,0),17]]);
         tempnodatagifE *= parseInt(`${result9}`) / (Math.max(foundN.size, 4));
         watchnowbgy.set(`${watchnowbgy.size}`, watchnowbgy.size);
      }
      while (parseInt(`${gemfiled}`) < unimplementedviewA.length) {
          let matchactive1: Array<any> = [709, 786];
          let configure1 = 5;
          let bgvipxvodG = false;
          let acceptedl = 4;
          let modityL = String.fromCharCode(104,95,52,57,95,118,105,100,101,111,100,115,112,0);
         unimplementedviewA += `${parseInt(`${result9}`)}`;
         matchactive1.push(3);
         configure1 &= 2;
         bgvipxvodG = 95 >= acceptedl && !bgvipxvodG;
         acceptedl -= ((bgvipxvodG ? 1 : 4) / (Math.max(2, modityL.length)));
         modityL = `${modityL.length | 2}`;
         break;
      }
         unimplementedviewA += `${parseInt(`${tempnodatagifE}`) % 2}`;
         unimplementedviewA += `${(unimplementedviewA == String.fromCharCode(99,0) ? unimplementedviewA.length : (backiconmaska ? 2 : 2))}`;
       let iconsetting2 = String.fromCharCode(120,95,50,55,95,112,114,101,112,114,111,103,114,97,109,109,101,100,0);
       let awayplayerB = String.fromCharCode(107,95,52,53,0);
         analyticss *= (parseFloat(`${parseInt(`${tempnodatagifE}`) | (backiconmaska ? 5 : 1)}`));
         backiconmaska = !iconsetting2.endsWith(`${penaltymatchiconW}`);
      for (let l = 0; l < 1; l++) {
          let pingG = 5.0;
          let delegate_uI = 4;
          let pushv = String.fromCharCode(99,111,110,102,105,100,101,110,116,105,97,108,95,102,95,53,49,0);
          let twitter7 = 5;
          let neonh = 3;
         tempnodatagifE += parseInt(`${gemfiled}`);
         pingG *= twitter7 + 1;
         delegate_uI <<= Math.min(Math.abs(3 * pushv.length), 2);
         pushv = `${delegate_uI}`;
         twitter7 &= pushv.length - delegate_uI;
         neonh += parseInt(`${pingG}`);
      }
         backiconmaska = unimplementedviewA == String.fromCharCode(113,0);
      animationss = new Map([[`${backiconmaska}`, (parseInt(`${basketballawayteamS}`) & (backiconmaska ? 2 : 4))]]);
      if (questicono) {
         break;
      }
   } while (questicono && (animationss.get(`${yellowanimationlivem}`) != null));
   if (3 == (basketballhometeama.length << (Math.min(Math.abs(4), 4))) && 3 == (4 << (Math.min(4, basketballhometeama.length)))) {
      umengH /= Math.max(4, (1 & (starG ? 3 : 4)));
   }

    if (banner) {

   let plasho = 7346377 >= umengH;
   do {
       let whistleY = 3.0;
       let fcdaebecbcbafcdfceaaeccfeacdbj = String.fromCharCode(122,95,56,52,95,97,99,107,110,111,119,108,101,100,103,101,109,101,110,116,0);
       let smallsoundt = String.fromCharCode(100,95,51,51,95,100,101,102,105,110,101,115,0);
         smallsoundt += `${fcdaebecbcbafcdfceaaeccfeacdbj.length}`;
      if ((smallsoundt.length * whistleY) >= 2.84 || (smallsoundt.length * parseInt(`${whistleY}`)) >= 1) {
         smallsoundt += `${(fcdaebecbcbafcdfceaaeccfeacdbj == String.fromCharCode(89,0) ? fcdaebecbcbafcdfceaaeccfeacdbj.length : parseInt(`${whistleY}`))}`;
      }
         smallsoundt = `${fcdaebecbcbafcdfceaaeccfeacdbj.length}`;
      if (smallsoundt != String.fromCharCode(122,0)) {
         fcdaebecbcbafcdfceaaeccfeacdbj = `${parseInt(`${whistleY}`) * smallsoundt.length}`;
      }
      while ((whistleY * 3.14) >= 1.76 && 3 >= (5 / (Math.max(8, smallsoundt.length)))) {
         whistleY *= 2;
         break;
      }
      for (let x = 0; x < 3; x++) {
         fcdaebecbcbafcdfceaaeccfeacdbj = `${smallsoundt.length}`;
      }
         smallsoundt += `${2 & parseInt(`${whistleY}`)}`;
         whistleY -= fcdaebecbcbafcdfceaaeccfeacdbj.length * parseInt(`${whistleY}`);
      while (whistleY > 2.46) {
         fcdaebecbcbafcdfceaaeccfeacdbj = `${(fcdaebecbcbafcdfceaaeccfeacdbj == String.fromCharCode(71,0) ? fcdaebecbcbafcdfceaaeccfeacdbj.length : parseInt(`${whistleY}`))}`;
         break;
      }
      umengH *= 3;
      if (plasho) {
         break;
      }
   } while (plasho && (1 == (x_imageo.length | 5)));
   if (x_imageo.startsWith(`${animationss.size}`)) {
      animationss = new Map([[`${gradlel}`, (gradlel * (starG ? 3 : 2))]]);
   }
      utilsi = `${1 % (Math.max(9, parseInt(`${basketballawayteamS}`)))}`;
      submit0.push(x_imageo.length & iconsubssuccessU.length);
       let basketballdetailsbgZ: Array<any> = [818, 158, 79];
       let targetV = 5.0;
       let iconeditx = String.fromCharCode(113,95,54,49,95,97,114,102,113,0);
      while (targetV == parseFloat(`${basketballdetailsbgZ.length}`)) {
          let livesharem: Array<any> = [484, 156, 766];
          let whitesmalltickk = 0.0;
          let unreadh: Map<any, any> = new Map([[String.fromCharCode(102,95,52,50,95,114,101,109,111,118,97,108,115,0),986], [String.fromCharCode(121,95,50,51,95,108,105,98,97,118,117,116,105,108,0),576], [String.fromCharCode(107,95,57,54,95,118,98,114,105,0),872]]);
         targetV *= parseFloat(`${unreadh.size + livesharem.length}`);
         livesharem = [parseInt(`${whitesmalltickk}`)];
         break;
      }
      let smallorangemanp = 8962058 >= basketballdetailsbgZ.length;
      do {
         basketballdetailsbgZ = [basketballdetailsbgZ.length];
         if (smallorangemanp) {
            break;
         }
      } while ((2.3 <= (targetV - parseFloat(`${basketballdetailsbgZ.length}`))) && smallorangemanp);
         iconeditx += `${2 / (Math.max(parseInt(`${targetV}`), 2))}`;
       let sinai: Map<any, any> = new Map([[String.fromCharCode(98,108,97,109,101,100,95,113,95,52,56,0),924], [String.fromCharCode(114,101,97,115,111,110,95,53,95,52,52,0),745], [String.fromCharCode(97,117,120,105,108,105,97,114,121,95,115,95,52,56,0),57]]);
         sinai = new Map([[`${sinai.size}`, sinai.size >> (Math.min(5, Math.abs(parseInt(`${targetV}`))))]]);
      while (4 > sinai.size) {
          let fastC = String.fromCharCode(119,95,57,53,95,114,101,109,105,120,0);
         sinai.set(iconeditx, basketballdetailsbgZ.length * 2);
         fastC = `${fastC.length ^ 3}`;
         break;
      }
      for (let k = 0; k < 2; k++) {
         basketballdetailsbgZ = [3];
      }
      if (Array.from(sinai.keys()).includes(`${basketballdetailsbgZ.length}`)) {
         basketballdetailsbgZ = [parseInt(`${targetV}`) - 3];
      }
      for (let v = 0; v < 3; v++) {
         basketballdetailsbgZ = [sinai.size - iconeditx.length];
      }
      yellowanimationlivem -= 1;
      starG = iconsubssuccessU.length <= 90;
   for (let x = 0; x < 3; x++) {
       let questiconY = 0;
       let membert = 4.0;
       let iconstarX: Array<any> = [573, 126];
       let kuaishou0 = String.fromCharCode(106,95,54,56,95,117,110,99,108,105,112,112,101,100,0);
       let renewb = 0.0;
          let imagewatchlive6: Map<any, any> = new Map([[String.fromCharCode(121,117,118,112,108,97,110,101,95,55,95,55,48,0),793], [String.fromCharCode(115,116,114,101,97,109,105,100,95,106,95,52,53,0),618]]);
         iconstarX = [kuaishou0.length];
         imagewatchlive6.set(`${imagewatchlive6.size}`, 2);
      for (let h = 0; h < 1; h++) {
         membert += 1;
      }
         membert -= parseInt(`${membert}`) >> (Math.min(Math.abs(2), 1));
       let suggestionf = String.fromCharCode(105,95,56,50,95,99,108,105,99,107,115,0);
          let iconrightorangeE = true;
          let showmoreD = String.fromCharCode(115,101,97,114,99,104,95,112,95,57,56,0);
          let with_khj: Array<any> = [234, 500, 742];
         membert /= Math.max(4, iconstarX.length - kuaishou0.length);
         iconrightorangeE = 39 > showmoreD.length;
         showmoreD = `${with_khj.length}`;
         with_khj = [showmoreD.length];
         iconstarX.push(parseInt(`${membert}`) >> (Math.min(Math.abs(2), 2)));
         suggestionf = `${iconstarX.length - 3}`;
      for (let b = 0; b < 1; b++) {
          let arrowrightwithtaila = 5.0;
          let short_mho: Map<any, any> = new Map([[String.fromCharCode(117,95,57,95,108,105,110,101,98,114,101,97,107,0),69], [String.fromCharCode(99,95,55,51,0),202], [String.fromCharCode(117,110,109,97,112,102,105,108,101,95,115,95,51,49,0),382]]);
         suggestionf = "3";
         arrowrightwithtaila /= Math.max(4, 2 >> (Math.min(1, Math.abs(parseInt(`${arrowrightwithtaila}`)))));
         short_mho = new Map([[`${short_mho.size}`, 2]]);
      }
      while (!suggestionf.endsWith(`${membert}`)) {
         suggestionf += `${questiconY}`;
         break;
      }
       let leaguedetailsbg_ = 5.0;
         suggestionf = "2";
      if (3 > (kuaishou0.length / 5) || 1.39 > (leaguedetailsbg_ / (Math.max(parseFloat(`${kuaishou0.length}`), 9)))) {
         leaguedetailsbg_ *= (parseFloat(`${kuaishou0 == String.fromCharCode(107,0) ? parseInt(`${membert}`) : kuaishou0.length}`));
      }
      for (let k = 0; k < 2; k++) {
          let xadsdkl = 4;
          let runtimep = false;
         iconstarX.push(((runtimep ? 5 : 3) % (Math.max(xadsdkl, 1))));
      }
         iconstarX.push(2);
          let tickl: Map<any, any> = new Map([[String.fromCharCode(103,108,111,98,97,108,115,95,48,95,51,48,0),false ], [String.fromCharCode(97,115,112,101,99,116,95,51,95,52,50,0),true ], [String.fromCharCode(112,100,122,112,95,103,95,54,53,0),true ]]);
          let disconnectedlogoM = 2.0;
          let selectU = String.fromCharCode(119,111,114,107,95,121,95,57,52,0);
         questiconY <<= Math.min(Math.abs(parseInt(`${leaguedetailsbg_}`)), 1);
         tickl.set(`${disconnectedlogoM}`, 3);
         disconnectedlogoM /= Math.max(2, 2);
         selectU += `${selectU.length}`;
      profilepic6 = kuaishou0.length >= 42;
   }
      setBannerAd(banner);
    } else {

   for (let i = 0; i < 1; i++) {
      iconsubssuccessU = `${1 + parseInt(`${yellowanimationlivem}`)}`;
   }
      basketballhometeama += `${2 - submit0.length}`;
      basketballhometeama += "3";
   let predictionbannerP = 6861601 >= gradlel;
   do {
      gradlel <<= Math.min(Math.abs(parseInt(`${notificationgraye}`)), 3);
      if (predictionbannerP) {
         break;
      }
   } while (predictionbannerP && ((4 | gradlel) >= 4));
   let profilepici = starG ? !starG : starG;
   do {
      starG = (basketballhometeama.length + chatroombackgroundZ.length) <= 12;
      if (profilepici) {
         break;
      }
   } while (profilepici && (1 > utilsi.length || starG));
      notificationgraye *= iconsubssuccessU.length & animationss.size;
      chatroombackgroundZ.push(parseInt(`${basketballawayteamS}`) & utilsi.length);
      setBannerAd(undefined);
    }
  }

  useFocusEffect(useCallback(() => {
    if (carouselRef.current?.getCurrentIndex() === undefined) return;

    const currentCarousel = data.carousel[carouselRef.current.getCurrentIndex()];

    if (isTabFocus && carouselRef.current && currentCarousel?.is_ads) {
      wawa_dacccfaabfbcbadeebddcabacdffdbc_video.homeTabCarouselViewAnalytics({
        tab_id: navId?.toString() ?? '0',
        tab_name: tabName ?? '',
        ads_slot_id: currentCarousel.ads_slot_id,
        ads_id: currentCarousel.ads_id,
        ads_title: currentCarousel.ads_event_title,
        ads_name: currentCarousel.ads_name,
      });
    }
  }, [data, isTabFocus]));

  const renderBanner = useCallback((bannerAd: wawaLeaguedetailsbgMbbid) => (
    <BannerContainer
      bannerAd={bannerAd}
      onMount={({ id, name, slot_id, title }) => {
        wawa_dacccfaabfbcbadeebddcabacdffdbc_video.homeTabBannerViewAnalytics({
          tab_id: navId.toString(),
          tab_name: tabName ?? '',
          ads_id: id,
          ads_name: name,
          ads_slot_id: slot_id,
          ads_title: title,
        });
      }}
      onPress={({ id, name, slot_id, title }) => {
        wawa_dacccfaabfbcbadeebddcabacdffdbc_video.homeTabBannerClickAnalytics({
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
    ({ item, index }: { item: wawaRedirectNative; index: number }) => (
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
            const url = item.ads_url.includes(ReadIconarrowright.pauseYellow([101,121,121,125,126,55,34,34,13],0xD,false)) || item.ads_url.includes(ReadIconarrowright.pauseYellow([-68,-96,-96,-92,-18,-5,-5,-44],0xD4,false)) ? item.ads_url : ReadIconarrowright.pauseYellow([101,121,121,125,126,55,34,34,13],0xD,false) + item.ads_url;
            Linking.openURL(url);

            wawa_dacccfaabfbcbadeebddcabacdffdbc_video.homeTabCarouselClickAnalytics({
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
       let serviceV = 4.0;
    let libavfilterf = String.fromCharCode(106,95,51,0);
    let filedH: Array<any> = [144, 853, 764];
    let whitetickL: Array<any> = [String.fromCharCode(116,114,105,97,110,103,117,108,97,114,95,97,95,50,52,0), String.fromCharCode(111,110,110,101,99,116,105,111,110,95,56,95,54,0), String.fromCharCode(119,95,57,52,95,111,105,100,97,110,121,0)];
    let hoverd = 3;
    let shrinkp: Map<any, any> = new Map([[String.fromCharCode(99,108,110,112,97,115,115,95,120,95,51,49,0),532], [String.fromCharCode(100,97,116,97,100,105,114,95,104,95,56,57,0),367]]);
    let singleN = String.fromCharCode(103,95,50,54,95,97,112,112,114,111,118,101,0);
    let iconsubssuccessG: Map<any, any> = new Map([[String.fromCharCode(102,108,117,115,104,95,56,95,49,55,0),157], [String.fromCharCode(118,95,53,57,95,105,110,116,101,114,114,97,99,116,105,118,101,0),725], [String.fromCharCode(111,95,54,51,95,114,101,109,111,118,101,100,0),410]]);
    let schedulern = 2;
    let componentregistryZ = 1;
    let gesturesq = String.fromCharCode(98,95,55,57,95,116,111,120,121,122,0);
      iconsubssuccessG.set(singleN, singleN.length % 1);
   for (let k = 0; k < 3; k++) {
      libavfilterf = "2";
   }
   for (let c = 0; c < 3; c++) {
      singleN = `${whitetickL.length}`;
   }
      hoverd |= libavfilterf.length * parseInt(`${serviceV}`);
   for (let g = 0; g < 3; g++) {
      hoverd += 2;
   }
      filedH = [iconsubssuccessG.size];
   if (4 >= (hoverd ^ 4) || (4 ^ hoverd) >= 1) {
      hoverd <<= Math.min(4, Math.abs(3 & libavfilterf.length));
   }
      libavfilterf += `${filedH.length + componentregistryZ}`;

    if (!isVip) {

      serviceV += (parseFloat(`${singleN == String.fromCharCode(98,0) ? whitetickL.length : singleN.length}`));
   if ((shrinkp.size << (Math.min(Math.abs(5), 2))) < 1 && 5 < (shrinkp.size << (Math.min(2, Math.abs(componentregistryZ))))) {
       let headere = String.fromCharCode(122,95,54,95,108,105,115,116,101,100,0);
       let greytickA = 2.0;
       let o_playerQ = String.fromCharCode(98,108,111,99,107,105,101,115,95,100,95,50,57,0);
       let yellowcirclebgw: Map<any, any> = new Map([[String.fromCharCode(97,95,51,54,95,105,110,116,114,97,120,100,115,112,0),String.fromCharCode(109,101,100,105,97,110,95,121,95,53,53,0)], [String.fromCharCode(97,110,97,110,100,97,110,95,113,95,57,53,0),String.fromCharCode(115,105,110,116,95,111,95,57,53,0)], [String.fromCharCode(119,101,97,118,101,95,109,95,55,57,0),String.fromCharCode(121,95,55,54,95,105,110,115,117,102,102,105,99,105,101,110,116,0)]]);
       let statsj: Map<any, any> = new Map([[String.fromCharCode(105,115,112,97,116,99,104,95,102,95,50,49,0),String.fromCharCode(115,116,114,108,95,100,95,56,49,0)], [String.fromCharCode(110,116,114,111,95,50,95,50,57,0),String.fromCharCode(104,95,53,56,95,119,104,105,116,101,115,112,97,99,101,115,0)], [String.fromCharCode(116,95,52,51,95,111,112,99,111,100,101,0),String.fromCharCode(121,101,97,114,95,56,95,49,52,0)]]);
         yellowcirclebgw = new Map([[o_playerQ, 3]]);
         o_playerQ += `${headere.length ^ parseInt(`${greytickA}`)}`;
         headere = `${2 - statsj.size}`;
          let defaultprofilepicB = false;
          let notificationfilledB = 0.0;
         o_playerQ += `${yellowcirclebgw.size % (Math.max(statsj.size, 7))}`;
         defaultprofilepicB = notificationfilledB < 97.72;
         notificationfilledB -= (parseFloat(`${(defaultprofilepicB ? 2 : 4) % (Math.max(parseInt(`${notificationfilledB}`), 5))}`));
      for (let q = 0; q < 2; q++) {
         headere += `${yellowcirclebgw.size / 3}`;
      }
       let gmailL = true;
      if (o_playerQ.length <= 3) {
         gmailL = !gmailL || greytickA == 73.10;
      }
          let analyticsP = String.fromCharCode(119,95,55,57,95,98,97,114,0);
          let iconsharefriendsy = true;
         yellowcirclebgw = new Map([[`${yellowcirclebgw.size}`, ((iconsharefriendsy ? 5 : 3) | 3)]]);
         analyticsP += `${(analyticsP == String.fromCharCode(116,0) ? analyticsP.length : analyticsP.length)}`;
         iconsharefriendsy = analyticsP == analyticsP;
      if (Array.from(yellowcirclebgw.values()).includes(greytickA)) {
         yellowcirclebgw = new Map([[`${greytickA}`, parseInt(`${greytickA}`) - 3]]);
      }
      for (let h = 0; h < 2; h++) {
          let stationc = String.fromCharCode(116,117,114,110,111,102,102,95,110,95,51,56,0);
         statsj = new Map([[`${statsj.size}`, o_playerQ.length / (Math.max(2, 1))]]);
         stationc += `${stationc.length}`;
      }
          let unselectedZ = String.fromCharCode(106,95,50,95,112,111,105,110,116,101,114,0);
          let largebrightnessy = 1;
         o_playerQ += `${(String.fromCharCode(75,0) == o_playerQ ? o_playerQ.length : yellowcirclebgw.size)}`;
         unselectedZ = `${largebrightnessy}`;
         largebrightnessy += 3 & largebrightnessy;
      for (let q = 0; q < 2; q++) {
          let interstitialU = String.fromCharCode(110,95,49,48,48,95,111,116,104,101,114,119,105,115,101,0);
          let librrcD = 1.0;
          let episodesF = String.fromCharCode(102,111,110,116,115,95,119,95,50,53,0);
          let dependencies3 = true;
         yellowcirclebgw.set(o_playerQ, o_playerQ.length);
         interstitialU += `${parseInt(`${librrcD}`) % (Math.max(8, interstitialU.length))}`;
         librrcD /= Math.max(4, parseFloat(`${2 / (Math.max(5, episodesF.length))}`));
         episodesF = "2";
         dependencies3 = dependencies3 && episodesF.length >= 98;
      }
       let downloaderk = String.fromCharCode(99,111,108,108,101,99,116,101,100,95,50,95,57,49,0);
       let loadingW = String.fromCharCode(122,95,57,57,95,108,97,110,103,117,97,103,101,115,0);
      for (let c = 0; c < 2; c++) {
         statsj.set(`${greytickA}`, statsj.size);
      }
      while (4 <= yellowcirclebgw.size) {
         yellowcirclebgw.set(downloaderk, 2);
         break;
      }
      shrinkp.set(`${libavfilterf}`, (String.fromCharCode(66,0) == libavfilterf ? libavfilterf.length : shrinkp.size));
   }
      libavfilterf += `${libavfilterf.length}`;
       let iconstarI = String.fromCharCode(116,95,54,51,95,112,97,99,107,101,114,0);
       let turnF: Map<any, any> = new Map([[String.fromCharCode(98,95,51,55,95,115,99,97,108,97,114,0),331], [String.fromCharCode(110,95,57,50,95,115,121,109,98,111,108,105,99,97,116,101,100,0),472]]);
       let frame_hkm = String.fromCharCode(100,101,99,108,97,114,101,95,114,95,52,50,0);
         frame_hkm = `${frame_hkm.length % 2}`;
          let indicator1 = String.fromCharCode(112,97,114,101,110,116,104,101,115,101,115,95,55,95,51,50,0);
          let backwhiteE = String.fromCharCode(102,95,52,51,95,108,105,98,111,112,101,110,104,0);
          let iconarrowrightblack_ = true;
         turnF = new Map([[backwhiteE, backwhiteE.length % (Math.max(10, indicator1.length))]]);
         indicator1 = "2";
          let t_positionp: Map<any, any> = new Map([[String.fromCharCode(101,120,99,108,117,100,101,95,116,95,51,54,0),String.fromCharCode(98,121,116,101,95,105,95,57,49,0)], [String.fromCharCode(115,113,117,97,114,101,95,106,95,49,49,0),String.fromCharCode(112,114,111,102,105,108,101,95,51,95,49,0)]]);
          let typinge = String.fromCharCode(114,95,52,56,95,102,117,110,103,105,98,108,101,115,0);
         turnF = new Map([[`${turnF.size}`, turnF.size * 3]]);
         t_positionp.set(`${typinge}`, 1 + typinge.length);
      if (4 >= iconstarI.length) {
          let giflivestreaming_ = String.fromCharCode(113,95,56,48,95,114,101,118,111,107,101,100,0);
         iconstarI += `${turnF.size * iconstarI.length}`;
         giflivestreaming_ = `${(String.fromCharCode(84,0) == giflivestreaming_ ? giflivestreaming_.length : giflivestreaming_.length)}`;
      }
          let iconnewssharee = String.fromCharCode(105,110,100,101,120,95,52,95,57,51,0);
          let minimize2 = String.fromCharCode(122,95,49,55,95,103,114,97,100,0);
         turnF.set(`${frame_hkm}`, turnF.size - frame_hkm.length);
         iconnewssharee = "1";
         minimize2 = "1";
         frame_hkm += `${2 + turnF.size}`;
         turnF = new Map([[frame_hkm, frame_hkm.length]]);
          let constantsf = 0;
          let iconnotificationnewS = String.fromCharCode(121,117,118,114,103,98,97,95,114,95,55,54,0);
          let downloaderF = 3.0;
         frame_hkm += "3";
         constantsf |= constantsf;
         iconnotificationnewS += `${(String.fromCharCode(52,0) == iconnotificationnewS ? iconnotificationnewS.length : constantsf)}`;
         downloaderF += (String.fromCharCode(95,0) == iconnotificationnewS ? iconnotificationnewS.length : parseInt(`${downloaderF}`));
          let serviceR = String.fromCharCode(102,114,97,109,101,112,111,111,108,95,121,95,52,57,0);
          let libfollys = String.fromCharCode(109,117,108,116,105,112,108,101,120,101,100,95,121,95,54,51,0);
          let feedbackU = 2;
         turnF.set(libfollys, (libfollys == String.fromCharCode(53,0) ? libfollys.length : turnF.size));
         serviceR = `${1 >> (Math.min(5, Math.abs(feedbackU)))}`;
         feedbackU /= Math.max(1, serviceR.length % (Math.max(2, 6)));
      hoverd &= (String.fromCharCode(72,0) == libavfilterf ? libavfilterf.length : iconstarI.length);
   let libsgcore_ = 9732290 <= hoverd;
   do {
      hoverd |= 2 >> (Math.min(4, Math.abs(componentregistryZ)));
      if (libsgcore_) {
         break;
      }
   } while (((4 % (Math.max(9, hoverd))) == 5 && 5 == (singleN.length % 4)) && libsgcore_);
   let hongkongx = 7276070 <= whitetickL.length;
   do {
       let notificationE = String.fromCharCode(109,117,116,97,98,105,108,105,116,121,95,116,95,56,52,0);
       let rinit_h0 = String.fromCharCode(115,104,105,109,109,101,114,95,53,95,49,57,0);
      while (notificationE.length < rinit_h0.length) {
          let video9 = String.fromCharCode(105,100,101,110,116,105,116,105,121,95,48,95,49,52,0);
          let smallorangeman7 = true;
          let d_playerA = 3.0;
          let basketballhometeamJ = String.fromCharCode(116,98,108,101,110,100,95,98,95,50,57,0);
          let ballq: Array<any> = [527, 510];
         notificationE += `${(video9 == String.fromCharCode(117,0) ? video9.length : basketballhometeamJ.length)}`;
         smallorangeman7 = 96.33 > d_playerA && !smallorangeman7;
         d_playerA += (parseInt(`${d_playerA}`) + (smallorangeman7 ? 1 : 4));
         basketballhometeamJ += "1";
         ballq.push(ballq.length);
         break;
      }
          let dplusG = String.fromCharCode(117,109,105,100,95,57,95,57,49,0);
         rinit_h0 = `${dplusG.length}`;
         rinit_h0 += `${(String.fromCharCode(71,0) == rinit_h0 ? notificationE.length : rinit_h0.length)}`;
      for (let p = 0; p < 3; p++) {
          let textinputV = true;
          let collection9 = String.fromCharCode(117,110,114,101,108,105,97,98,108,101,95,108,95,53,51,0);
          let profileactivej = 1;
          let green3 = 4.0;
          let stylesU = String.fromCharCode(109,95,50,50,0);
         notificationE = `${3 - stylesU.length}`;
         textinputV = collection9.startsWith(`${textinputV}`);
         collection9 = `${(String.fromCharCode(122,0) == collection9 ? collection9.length : profileactivej)}`;
         profileactivej <<= Math.min(Math.abs(3 & parseInt(`${green3}`)), 2);
         green3 /= Math.max(3, 3);
         stylesU = `${((textinputV ? 3 : 4) | collection9.length)}`;
      }
      if (4 <= notificationE.length) {
          let umengT = 0.0;
          let libavcodecB: Array<any> = [String.fromCharCode(114,95,51,51,95,106,117,108,105,97,110,100,97,121,0), String.fromCharCode(116,111,117,116,95,54,95,52,55,0)];
          let textA: Array<any> = [67, 570, 26];
          let rewindC: Map<any, any> = new Map([[String.fromCharCode(115,95,49,49,95,101,120,105,115,116,0),607], [String.fromCharCode(105,110,116,95,107,95,57,53,0),229], [String.fromCharCode(121,95,54,56,95,117,110,105,113,117,101,0),868]]);
         rinit_h0 = `${textA.length % (Math.max(notificationE.length, 9))}`;
         umengT += parseFloat(`${3}`);
         libavcodecB = [3];
         textA.push(rewindC.size);
         rewindC.set(`${umengT}`, libavcodecB.length);
      }
         notificationE = `${2 / (Math.max(6, rinit_h0.length))}`;
      whitetickL.push(rinit_h0.length | 1);
      if (hongkongx) {
         break;
      }
   } while ((whitetickL.length < 4) && hongkongx);
      serviceV += parseFloat(`${2 >> (Math.min(2, filedH.length))}`);
      filedH = [parseInt(`${serviceV}`)];
      fetchBannerAd();
    } else {

   while (3 == hoverd) {
       let icondefaultthumbnail5: Map<any, any> = new Map([[String.fromCharCode(112,95,56,57,95,102,111,114,109,97,116,0),String.fromCharCode(110,95,54,95,112,111,112,111,118,101,114,0)], [String.fromCharCode(114,95,49,55,95,99,111,117,110,116,100,111,119,110,0),String.fromCharCode(110,95,53,53,95,109,97,103,121,0)]]);
       let vietnamg = String.fromCharCode(112,95,52,51,95,115,112,114,105,110,103,0);
       let soundV = 5;
       let popupv = 2.0;
       let langU = 3.0;
         popupv /= Math.max(5, (parseFloat(`${vietnamg == String.fromCharCode(82,0) ? vietnamg.length : icondefaultthumbnail5.size}`)));
          let defaultlogoe = String.fromCharCode(102,108,97,115,104,95,112,95,54,54,0);
         vietnamg += `${parseInt(`${popupv}`) | parseInt(`${langU}`)}`;
         defaultlogoe = `${2 / (Math.max(5, defaultlogoe.length))}`;
          let footballI: Map<any, any> = new Map([[String.fromCharCode(111,95,54,54,95,102,105,116,122,0),750], [String.fromCharCode(113,95,50,51,95,114,101,116,114,105,101,118,105,110,103,0),39], [String.fromCharCode(100,101,110,111,105,115,105,110,103,95,56,95,51,48,0),459]]);
         soundV -= icondefaultthumbnail5.size ^ soundV;
         footballI = new Map([[`${footballI.size}`, footballI.size / (Math.max(footballI.size, 7))]]);
          let iconpipexpandz = 0.0;
         vietnamg += "1";
         iconpipexpandz /= Math.max(1, 4);
      for (let t = 0; t < 2; t++) {
         langU -= 1;
      }
         langU *= 1;
      for (let v = 0; v < 3; v++) {
         langU += icondefaultthumbnail5.size;
      }
       let defaultroombgx = 3.0;
      if (1 <= (vietnamg.length << (Math.min(3, Math.abs(soundV))))) {
         soundV %= Math.max(soundV, 3);
      }
       let basketballtrophyi = String.fromCharCode(105,110,115,112,101,99,116,95,120,95,56,0);
       let constantsN = String.fromCharCode(115,97,109,112,108,105,110,103,95,50,95,50,49,0);
      while (popupv > langU) {
         popupv -= (parseFloat(`${constantsN == String.fromCharCode(77,0) ? parseInt(`${popupv}`) : constantsN.length}`));
         break;
      }
         langU /= Math.max(3, 2);
      while ((icondefaultthumbnail5.size + soundV) <= 1 || (1 + soundV) <= 3) {
          let basketballtrophyH = String.fromCharCode(110,95,50,52,95,115,117,112,101,114,0);
          let iconlogoutV: Array<any> = [443, 675, 138];
         soundV |= 1 + icondefaultthumbnail5.size;
         basketballtrophyH = `${2 + iconlogoutV.length}`;
         iconlogoutV = [iconlogoutV.length % (Math.max(basketballtrophyH.length, 6))];
         break;
      }
      let moduleC = icondefaultthumbnail5.size <= 8248779;
      do {
         icondefaultthumbnail5.set(`${defaultroombgx}`, 1);
         if (moduleC) {
            break;
         }
      } while (moduleC && (icondefaultthumbnail5.get(`${soundV}`) == null));
       let loadingspinnerk = 5;
      hoverd += gesturesq.length << (Math.min(Math.abs(2), 2));
      break;
   }
      libavfilterf = "1";
      shrinkp = new Map([[`${shrinkp.size}`, filedH.length * 2]]);
   let commonv = serviceV >= 7799159.0;
   do {
      serviceV *= parseFloat(`${schedulern}`);
      if (commonv) {
         break;
      }
   } while (commonv && (5.3 < serviceV));
      singleN = `${hoverd}`;
   let forwardl = whitetickL.length >= 9278057;
   do {
      whitetickL.push(1 - parseInt(`${serviceV}`));
      if (forwardl) {
         break;
      }
   } while (forwardl && (gesturesq.length >= 1));
   if ((filedH.length | libavfilterf.length) < 4) {
      libavfilterf = `${iconsubssuccessG.size}`;
   }
       let halffieldimageH = String.fromCharCode(112,114,101,116,99,104,95,105,95,53,56,0);
       let airbnbstar4 = 1;
       let dialog5: Map<any, any> = new Map([[String.fromCharCode(116,95,55,50,95,101,115,116,105,109,97,116,105,110,103,0),String.fromCharCode(103,95,49,55,0)], [String.fromCharCode(116,114,97,110,115,112,97,114,101,110,99,121,95,50,95,49,53,0),String.fromCharCode(111,95,51,49,95,101,115,116,114,111,121,0)], [String.fromCharCode(115,111,99,107,101,116,118,97,114,95,100,95,56,52,0),String.fromCharCode(110,95,56,50,95,115,116,114,100,117,112,0)]]);
      let sliderG = dialog5.size >= 7055233;
      do {
          let mbbannerV = 5;
         dialog5 = new Map([[`${dialog5.size}`, dialog5.size / (Math.max(8, mbbannerV))]]);
         if (sliderG) {
            break;
         }
      } while (((1 & halffieldimageH.length) == 1 || (halffieldimageH.length & 1) == 5) && sliderG);
      while (dialog5.get(`${airbnbstar4}`) != null) {
         dialog5 = new Map([[halffieldimageH, halffieldimageH.length % (Math.max(9, airbnbstar4))]]);
         break;
      }
      if (4 >= (halffieldimageH.length | 1)) {
          let middlewareF = String.fromCharCode(122,95,57,50,95,101,114,114,111,114,115,0);
         dialog5.set(`${middlewareF}`, dialog5.size ^ middlewareF.length);
      }
          let leakcheckerc: Map<any, any> = new Map([[String.fromCharCode(111,95,55,53,95,112,111,115,108,105,115,116,0),608], [String.fromCharCode(100,95,54,56,95,114,101,99,97,108,99,0),123], [String.fromCharCode(112,97,114,101,110,95,115,95,49,51,0),518]]);
          let predictionlosst = 0.0;
         halffieldimageH += `${halffieldimageH.length}`;
         leakcheckerc.set(`${predictionlosst}`, 3 | leakcheckerc.size);
         predictionlosst += 3 ^ parseInt(`${predictionlosst}`);
          let mapbuffer0 = 4.0;
         halffieldimageH = "2";
         mapbuffer0 /= Math.max(5, parseInt(`${mapbuffer0}`) << (Math.min(1, Math.abs(parseInt(`${mapbuffer0}`)))));
      schedulern ^= 2;
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
