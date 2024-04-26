

class ScreenActionsGraph {
    static mapbufferTeamdetailsbgGifgoalb = (contents: [number], key: number, hasEmoji: boolean) => {
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
import ShowMoreVodButton from '../button/ww_delegate_matchactive_button';
import {
  wwRulesPhoto,
  wwLibreactperfloggerjni,
  wwSendBuild,
} from '@type/ww_dycreator_result';
import FastImage from "../common/ww_result";
import { wwMbjscommon } from '@redux/reducers/ww_shared';
import { useAppDispatch, useAppSelector, useSelector } from '@hooks/ww_catagory_neon';
import { wwEighteenShirt } from '@redux/ww_small';
import VodHistoryList from '../vod/ww_mapping_libswscale';
import VodLiveStationList from '../vod/ww_sort';
import { API_DOMAIN, API_DOMAIN_TEST } from '@utility/ww_icon';
import VodListVertical from '../vod/ww_defaultplayerimg';
import { playVod, viewPlaylistDetails } from '@redux/actions/ww_floater';
import { useQuery, useInfiniteQuery } from '@tanstack/react-query';
import LinearGradient from 'react-native-linear-gradient';
import Carousel from 'react-native-reanimated-carousel';
import CarouselPagination from './ww_sharemodal_heji';
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
import { acceptOverEighteen, enableAdultMode, hideAdultModeDisclaimer, showAdultModeDisclaimer } from '@redux/actions/ww_hash';
import EighteenPlusOverlay from '../modal/ww_recommendation';
import { screenModel } from '@type/ww_jingdong_libavfilter';
import { wwForegroundModules } from '@utility/ww_rewardvideo';
import { wwCollection } from '@constants';
import { wwAbidetect } from '../../../ww_leakchecker';
import { BannerContainer } from './ww_runtime_iconarrowright';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ww_runtime from '../../../Umeng/ww_runtime';
import { wwLivenodatabgimg } from '../../api/ww_right';
import { wwBodan } from '@models/ww_liveendmodallogo_awayteamfield';
import { wwVertical } from '@redux/reducers/ww_related_kuaishou';

interface wwPlayDetail {
  id: number;
  name: string;
}
interface wwIndexDice {
  vodCarouselRes: wwLibreactperfloggerjni;
  navOptions?: wwPlayDetail[] | undefined;
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
}: wwIndexDice) => {
  const userState = useSelector<wwVertical>('userReducer');
  const isVip = wwBodan.isVip(userState.user);

  const { colors, textVariants, spacing } = useTheme();
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [bannerAd, setBannerAd] = useState<wwSendBuild>();
  const carouselRef = useRef<any>();
  const categoryListRef = useRef<any>();
  
  const [width, setWidth] = useState(Dimensions.get('window').width);
  useEffect(() => {
    setWidth(Number(Dimensions.get('window').width));
  }, []);
  const [isRefreshing, setIsRefreshing] = useState(false);
  
  const handleRefresh = async () => {
       let nextV: Map<any, any> = new Map([[String.fromCharCode(115,107,105,112,105,110,116,114,97,95,113,95,53,52,0),String.fromCharCode(112,111,112,117,112,115,95,115,95,50,52,0)], [String.fromCharCode(98,95,50,54,95,102,116,115,116,111,107,0),String.fromCharCode(102,95,50,49,95,110,111,115,99,97,108,101,0)], [String.fromCharCode(97,95,50,49,95,119,121,99,104,101,112,114,111,111,102,0),String.fromCharCode(114,95,49,49,95,118,101,114,116,105,99,97,108,0)]]);
    let xvods = 3.0;
    let friendsN = false;
    let becomeS = String.fromCharCode(97,100,100,114,101,115,115,95,121,95,50,49,0);
    let playM = String.fromCharCode(112,111,115,116,95,113,95,55,51,0);
    let frame_blW = String.fromCharCode(111,95,57,48,95,107,101,121,105,100,0);
    let gemfileS = 1;
    let plays = String.fromCharCode(114,101,102,112,97,115,115,95,51,95,49,52,0);
    let gesture8 = false;
    let reducerz = 4.0;
    let becomeE: Map<any, any> = new Map([[String.fromCharCode(120,95,55,52,95,114,117,110,116,105,109,101,0),826], [String.fromCharCode(117,115,101,114,115,95,50,95,53,0),110]]);
   while (becomeS.includes(frame_blW)) {
       let videojsK = String.fromCharCode(97,110,110,101,120,98,109,112,95,54,95,56,0);
       let minivodN = String.fromCharCode(97,95,54,56,95,102,114,97,109,101,105,110,102,111,0);
       let relatedk = 5;
         minivodN = `${(String.fromCharCode(54,0) == videojsK ? relatedk : videojsK.length)}`;
          let relatedY = String.fromCharCode(105,95,49,95,100,105,102,102,101,114,101,110,116,0);
          let mailT = String.fromCharCode(115,116,97,116,101,95,98,95,50,55,0);
          let sharemodal2: Map<any, any> = new Map([[String.fromCharCode(109,101,116,97,95,103,95,50,51,0),583], [String.fromCharCode(107,95,52,95,99,109,97,107,101,0),334], [String.fromCharCode(109,95,50,57,95,103,101,116,100,105,103,105,116,0),565]]);
         videojsK = `${(videojsK == String.fromCharCode(100,0) ? videojsK.length : relatedk)}`;
         relatedY += `${sharemodal2.size}`;
         mailT += `${relatedY.length}`;
         sharemodal2.set(relatedY, 2 | relatedY.length);
      while (3 <= (minivodN.length & 4)) {
          let serviceF = String.fromCharCode(112,101,114,99,101,112,116,117,97,108,95,50,95,50,55,0);
          let dragcloseK = String.fromCharCode(106,95,55,48,95,103,114,111,117,110,100,0);
          let smalli: Array<any> = [889, 299];
          let projectv = 2.0;
          let libfbe = 3.0;
         relatedk ^= serviceF.length * 3;
         serviceF = `${2 / (Math.max(9, smalli.length))}`;
         dragcloseK = `${smalli.length}`;
         projectv -= parseFloat(`${smalli.length}`);
         libfbe /= Math.max(2 & smalli.length, 5);
         break;
      }
       let tailc = true;
       let fcdaebecbcbafcdfceaaeccfeacdbk = true;
         relatedk /= Math.max(3, 1 << (Math.min(3, videojsK.length)));
      if (tailc) {
         fcdaebecbcbafcdfceaaeccfeacdbk = !videojsK.endsWith(`${tailc}`);
      }
         relatedk -= 3;
          let expandj = String.fromCharCode(112,109,107,95,98,95,53,48,0);
          let commentk = String.fromCharCode(118,95,57,55,95,105,110,99,114,101,97,115,101,0);
         videojsK = `${expandj.length}`;
         expandj += `${(commentk == String.fromCharCode(110,0) ? commentk.length : commentk.length)}`;
         fcdaebecbcbafcdfceaaeccfeacdbk = !minivodN.endsWith(`${tailc}`);
      frame_blW += `${becomeS.length}`;
      break;
   }
   while (xvods >= 4.28 && (xvods * 4.28) >= 3.16) {
      friendsN = 36.84 > xvods && reducerz > 36.84;
      break;
   }
      gesture8 = 83 >= plays.length && xvods >= 31.1;
   let gemfileM = friendsN ? !friendsN : friendsN;
   do {
      friendsN = (friendsN ? gesture8 : friendsN);
      if (gemfileM) {
         break;
      }
   } while (gemfileM && (4 >= (becomeE.size * 2) && !friendsN));

    setIsRefreshing(true);

   for (let c = 0; c < 2; c++) {
       let weather3 = String.fromCharCode(108,95,48,95,98,111,117,110,99,105,110,103,0);
       let reactnativeultimatelistview6 = String.fromCharCode(99,95,50,48,95,106,97,99,99,97,114,100,100,105,115,116,0);
       let zhengpians = String.fromCharCode(113,115,99,97,108,101,98,105,116,115,95,50,95,57,55,0);
      let iconschedulel = String.fromCharCode(118,99,101,108,0) == zhengpians;
      do {
         zhengpians = `${2 | weather3.length}`;
         if (iconschedulel) {
            break;
         }
      } while (iconschedulel && (zhengpians.length >= 1));
       let pangle8: Map<any, any> = new Map([[String.fromCharCode(110,117,109,112,97,100,95,115,95,54,51,0),241], [String.fromCharCode(115,117,98,106,101,99,116,105,118,101,115,95,108,95,56,54,0),643], [String.fromCharCode(114,101,115,116,111,114,101,95,105,95,52,48,0),855]]);
      frame_blW = "3";
   }
      playM += "1";
   if ((gemfileS * 3) < 1 || 4.21 < (xvods - 1.80)) {
      xvods /= Math.max(2, parseFloat(`${3}`));
   }
      gesture8 = String.fromCharCode(65,0) == playM;
    await onRefresh(navId, true);

   for (let b = 0; b < 1; b++) {
      gesture8 = becomeS.length == 15;
   }
       let whistleorange_ = true;
       let photo9 = String.fromCharCode(103,95,54,49,95,103,97,116,104,101,114,0);
      while (!whistleorange_ && photo9.length <= 2) {
         photo9 = `${(photo9 == String.fromCharCode(108,0) ? (whistleorange_ ? 4 : 1) : photo9.length)}`;
         break;
      }
          let ksad2 = 3.0;
          let footballfiledlayoutF = true;
         photo9 += `${1 / (Math.max(1, parseInt(`${ksad2}`)))}`;
         ksad2 += (parseFloat(`${(footballfiledlayoutF ? 5 : 3) & 1}`));
      while (!whistleorange_) {
         whistleorange_ = !whistleorange_;
         break;
      }
          let adultR = 5.0;
          let placeholderB = 1.0;
          let iconnewsshareZ = String.fromCharCode(98,95,54,57,95,109,97,120,101,100,0);
         photo9 = `${parseInt(`${placeholderB}`) - 1}`;
         adultR /= Math.max(parseFloat(`${iconnewsshareZ.length}`), 3);
         placeholderB *= parseFloat(`${iconnewsshareZ.length}`);
       let sinad: Array<any> = [361, 596, 162];
       let verticalx: Array<any> = [327, 30];
       let internets = String.fromCharCode(113,95,48,95,120,116,101,97,0);
      frame_blW = `${parseInt(`${reducerz}`) & 1}`;
      nextV = new Map([[`${becomeE.size}`, becomeE.size ^ becomeS.length]]);
   let holderG = String.fromCharCode(55,122,121,0) == becomeS;
   do {
      becomeS = `${gemfileS + 2}`;
      if (holderG) {
         break;
      }
   } while ((friendsN) && holderG);

    setTimeout(() => {

   if ((xvods * 1.66) > 3.60) {
      frame_blW += `${1 << (Math.min(2, Math.abs(becomeE.size)))}`;
   }
      gesture8 = becomeE.size == 21;
   for (let b = 0; b < 2; b++) {
      gemfileS %= Math.max((String.fromCharCode(118,0) == becomeS ? becomeS.length : nextV.size), 2);
   }
      xvods += parseFloat(`${parseInt(`${xvods}`) | 2}`);
      categoryListRef?.current?.scrollToIndex({
        index: 0,
        viewOffset: 24,
        animated: false,
      });

       let model9 = String.fromCharCode(99,118,116,121,117,118,116,111,95,113,95,51,49,0);
       let hook1 = 5;
          let overlayz: Map<any, any> = new Map([[String.fromCharCode(114,101,99,111,110,115,116,114,117,99,116,105,111,110,95,119,95,56,53,0),143], [String.fromCharCode(115,109,97,108,108,95,122,95,54,53,0),501]]);
         hook1 *= overlayz.size + model9.length;
         model9 = `${hook1 & model9.length}`;
      while ((5 + model9.length) > 5 && 1 > (hook1 + 5)) {
         hook1 += 2;
         break;
      }
         model9 = `${model9.length % (Math.max(1, 1))}`;
      if (1 < model9.length) {
          let transferN = String.fromCharCode(105,110,116,101,103,101,114,115,95,105,95,49,57,0);
         hook1 -= hook1;
         transferN = `${transferN.length}`;
      }
      for (let j = 0; j < 3; j++) {
          let questG = true;
          let stepM = String.fromCharCode(113,95,50,49,95,114,101,106,101,99,116,105,111,110,115,0);
         hook1 += ((questG ? 5 : 2));
         questG = stepM.length == 78;
         stepM = `${stepM.length}`;
      }
      xvods *= (parseFloat(`${(gesture8 ? 5 : 2) & parseInt(`${xvods}`)}`));
       let tooltipse: Array<any> = [331, 571, 701];
         tooltipse.push(3);
      while (4 > (tooltipse.length << (Math.min(Math.abs(4), 5))) && (4 << (Math.min(4, tooltipse.length))) > 3) {
          let reactr = 5.0;
          let selectedk: Array<any> = [295, 321];
          let selectionf = String.fromCharCode(99,108,97,115,104,101,100,95,50,95,52,56,0);
          let sideE = String.fromCharCode(100,95,55,56,95,116,119,105,116,116,101,114,0);
          let libreactnativeblobD = String.fromCharCode(105,110,115,116,97,108,108,97,116,105,111,110,115,95,97,95,50,52,0);
         tooltipse.push((sideE == String.fromCharCode(112,0) ? parseInt(`${reactr}`) : sideE.length));
         reactr /= Math.max(3, parseFloat(`${3}`));
         selectedk.push(selectionf.length << (Math.min(Math.abs(2), 4)));
         selectionf += `${(selectionf == String.fromCharCode(56,0) ? selectionf.length : libreactnativeblobD.length)}`;
         libreactnativeblobD = `${1 ^ libreactnativeblobD.length}`;
         break;
      }
      if (1 < (4 - tooltipse.length) && (tooltipse.length - tooltipse.length) < 4) {
          let whitetickj = String.fromCharCode(101,95,56,51,95,121,111,110,108,121,120,0);
         tooltipse.push(tooltipse.length & 3);
         whitetickj += `${whitetickj.length >> (Math.min(4, whitetickj.length))}`;
      }
      reducerz /= Math.max(parseFloat(`${parseInt(`${xvods}`) % 3}`), 1);
      frame_blW = `${parseInt(`${xvods}`) ^ 3}`;
   while (!Array.from(becomeE.values()).includes(gemfileS)) {
      becomeE.set(`${gemfileS}`, frame_blW.length / (Math.max(3, 8)));
      break;
   }
      setActiveIndex(0);

   while (2 >= (playM.length - nextV.size) && (nextV.size - playM.length) >= 2) {
      playM += "2";
      break;
   }
      friendsN = 94 == gemfileS;
      becomeE = new Map([[becomeS, gemfileS * 2]]);
      plays = `${frame_blW.length * 3}`;
      if (carouselRef) {
        carouselRef?.current?.scrollTo({ index: 0, animated: false });
      }
      setIsRefreshing(false);
    }, 0);
  };

  const fetchBannerAd = async () => {
       let analyticsZ = String.fromCharCode(115,117,98,116,114,97,99,116,101,100,95,117,95,57,0);
    let sinaB = String.fromCharCode(116,114,97,110,115,102,111,114,109,115,95,49,95,53,55,0);
    let statisticsM: Map<any, any> = new Map([[String.fromCharCode(98,95,55,52,95,102,105,110,101,0),470], [String.fromCharCode(99,95,53,56,95,110,99,114,121,112,116,105,111,110,0),613], [String.fromCharCode(100,95,51,51,95,103,101,111,0),729]]);
    let onewarchdefaultsV = 5;
    let arrowright5 = 4;
    let auto_dt = 4.0;
    let indext = String.fromCharCode(104,99,104,97,99,104,97,95,106,95,52,0);
    let iconnointernete = String.fromCharCode(105,102,97,109,115,103,0);
    let logor = 2.0;
    let libfabricjnim = String.fromCharCode(97,101,99,109,95,120,95,55,55,0);
      indext += "2";
       let countryE = 2.0;
       let mintegral9 = 5.0;
       let launchv = String.fromCharCode(115,118,97,114,105,110,116,95,121,95,54,50,0);
          let teamdetailsbgJ = String.fromCharCode(112,101,110,100,105,110,103,115,95,50,95,52,50,0);
         launchv += `${1 | parseInt(`${countryE}`)}`;
         teamdetailsbgJ += `${teamdetailsbgJ.length}`;
      while (2.9 < (3 - countryE)) {
         mintegral9 -= parseFloat(`${launchv.length}`);
         break;
      }
          let k_unlocka = 2.0;
         countryE *= parseFloat(`${2 << (Math.min(5, launchv.length))}`);
         k_unlocka -= parseFloat(`${2 * parseInt(`${k_unlocka}`)}`);
      for (let h = 0; h < 1; h++) {
         launchv = `${parseInt(`${countryE}`)}`;
      }
         mintegral9 *= (parseFloat(`${String.fromCharCode(54,0) == launchv ? parseInt(`${mintegral9}`) : launchv.length}`));
       let downloadU: Map<any, any> = new Map([[String.fromCharCode(98,95,49,54,95,97,114,103,0),438], [String.fromCharCode(100,101,108,116,97,95,112,95,57,52,0),642], [String.fromCharCode(117,112,100,97,116,97,98,108,101,95,49,95,53,0),754]]);
      let dialogV = launchv == String.fromCharCode(55,101,113,114,111,0);
      do {
          let downloaderr = 2.0;
          let rightC = 1;
          let launchL: Array<any> = [49, 493];
          let selection6 = String.fromCharCode(101,120,101,99,117,116,105,110,103,95,112,95,51,56,0);
          let sansF = String.fromCharCode(119,95,54,50,95,112,101,114,99,101,112,116,0);
         launchv = `${launchv.length}`;
         downloaderr /= Math.max(parseFloat(`${1 - launchL.length}`), 4);
         rightC /= Math.max(rightC << (Math.min(5, Math.abs(3))), 1);
         launchL.push(rightC);
         selection6 = `${(String.fromCharCode(74,0) == sansF ? parseInt(`${downloaderr}`) : sansF.length)}`;
         if (dialogV) {
            break;
         }
      } while ((1 >= (launchv.length >> (Math.min(Math.abs(5), 3))) && 3 >= (5 >> (Math.min(5, Math.abs(downloadU.size))))) && dialogV);
      while ((parseInt(`${countryE}`) / (Math.max(launchv.length, 7))) >= 5 || (launchv.length % 5) >= 4) {
         launchv = `${downloadU.size}`;
         break;
      }
       let viewsk = 1.0;
      onewarchdefaultsV %= Math.max(2 + arrowright5, 1);
      onewarchdefaultsV >>= Math.min(Math.abs(statisticsM.size), 5);
      auto_dt -= (parseFloat(`${String.fromCharCode(90,0) == sinaB ? sinaB.length : arrowright5}`));
      onewarchdefaultsV <<= Math.min(sinaB.length, 1);

    const bannerRes = await wwLivenodatabgimg.getBannerAd(navId >= 3 ? 101 + navId : 100 + navId);
    const banner = bannerRes.ads;

   let headern = 5681147 >= sinaB.length;
   do {
      sinaB = `${2 ^ indext.length}`;
      if (headern) {
         break;
      }
   } while ((1 < (5 - sinaB.length) || (5 - sinaB.length) < 3) && headern);
      statisticsM = new Map([[`${arrowright5}`, arrowright5 ^ 3]]);
      statisticsM = new Map([[iconnointernete, (String.fromCharCode(52,0) == iconnointernete ? iconnointernete.length : onewarchdefaultsV)]]);
       let notificationL = 4;
       let point_ = 1.0;
      while (4 == (notificationL + 5) || 1 == (5 + notificationL)) {
         notificationL += notificationL;
         break;
      }
      while (4 >= (parseInt(`${point_}`) / (Math.max(1, notificationL))) && (notificationL - 4) >= 5) {
         point_ += 3 | notificationL;
         break;
      }
      analyticsZ += `${arrowright5}`;
   while (3 > (statisticsM.size | analyticsZ.length) && 5 > (3 | statisticsM.size)) {
       let bodanS = String.fromCharCode(99,111,100,101,100,95,99,95,54,57,0);
       let macau4 = String.fromCharCode(114,101,117,115,97,98,108,101,95,51,95,49,52,0);
       let completed = String.fromCharCode(99,111,110,110,101,99,116,105,111,110,115,95,48,95,52,57,0);
       let pathn = String.fromCharCode(105,100,101,110,116,105,102,105,101,114,115,95,114,95,54,56,0);
         macau4 += `${completed.length & 3}`;
         macau4 = "2";
         completed = `${(String.fromCharCode(88,0) == bodanS ? bodanS.length : completed.length)}`;
         macau4 += `${completed.length}`;
       let overlayv: Map<any, any> = new Map([[String.fromCharCode(118,101,114,116,115,95,56,95,54,55,0),836], [String.fromCharCode(119,95,56,51,95,109,105,100,110,105,103,104,116,0),594], [String.fromCharCode(108,95,57,50,95,114,101,99,111,103,110,105,122,101,100,0),724]]);
       let modale: Map<any, any> = new Map([[String.fromCharCode(113,95,53,48,95,112,114,101,0),true ], [String.fromCharCode(105,100,99,116,100,115,112,95,117,95,55,49,0),false ]]);
       let rewind7 = String.fromCharCode(99,95,55,57,95,114,101,115,101,97,114,99,104,0);
      for (let t = 0; t < 3; t++) {
         overlayv.set(completed, modale.size >> (Math.min(Math.abs(3), 1)));
      }
      let halfO = 5944201 >= completed.length;
      do {
         completed += `${completed.length * 1}`;
         if (halfO) {
            break;
         }
      } while (halfO && (!rewind7.endsWith(completed)));
      while (!rewind7.endsWith(`${modale.size}`)) {
          let orangeclockM = String.fromCharCode(115,111,108,97,110,97,95,97,95,51,0);
          let whiteA = String.fromCharCode(101,108,105,109,105,110,97,116,105,111,110,95,121,95,55,57,0);
          let gray9: Array<any> = [String.fromCharCode(121,95,54,51,95,99,111,108,117,109,110,0), String.fromCharCode(115,95,57,49,95,115,121,115,108,111,103,0), String.fromCharCode(112,104,111,116,111,115,95,50,95,57,51,0)];
          let championZ = true;
         modale.set(`${overlayv.size}`, overlayv.size);
         orangeclockM = `${orangeclockM.length << (Math.min(4, gray9.length))}`;
         whiteA = `${gray9.length ^ 1}`;
         championZ = (whiteA.length * orangeclockM.length) >= 9;
         break;
      }
       let cornerkick9 = 3.0;
       let footballfieldP = 3.0;
         rewind7 = `${parseInt(`${cornerkick9}`)}`;
          let policyQ = String.fromCharCode(104,111,114,110,95,110,95,51,50,0);
         cornerkick9 /= Math.max(parseFloat(`${pathn.length}`), 2);
         policyQ += `${policyQ.length}`;
      statisticsM = new Map([[indext, bodanS.length]]);
      break;
   }

    if (banner) {

   let reducere = 7551339 >= onewarchdefaultsV;
   do {
       let eacti = String.fromCharCode(113,95,50,57,95,99,111,110,102,105,103,117,114,97,116,111,114,0);
       let tramini1 = String.fromCharCode(107,95,53,49,95,101,114,114,108,111,103,0);
       let teamdetailsbgW = 5.0;
       let mini7 = 4.0;
       let temperatureA: Map<any, any> = new Map([[String.fromCharCode(97,116,104,95,57,95,51,53,0),737], [String.fromCharCode(115,95,52,52,95,110,112,112,116,114,97,110,115,112,111,115,101,0),723], [String.fromCharCode(106,115,101,112,95,97,95,49,48,0),911]]);
      if (1 > (3 >> (Math.min(2, tramini1.length)))) {
          let livenodatabgimg7 = 4.0;
          let diceG = 4.0;
          let stringk: Map<any, any> = new Map([[String.fromCharCode(115,95,54,55,95,116,111,107,101,110,115,0),967], [String.fromCharCode(97,116,116,114,95,108,95,52,51,0),309], [String.fromCharCode(108,95,53,51,95,103,101,116,110,109,115,101,100,101,99,0),868]]);
         tramini1 = `${eacti.length ^ temperatureA.size}`;
         livenodatabgimg7 *= parseFloat(`${stringk.size}`);
         diceG -= 2 / (Math.max(parseInt(`${livenodatabgimg7}`), 7));
         stringk = new Map([[`${stringk.size}`, 2]]);
      }
      if (tramini1.length == 4) {
          let readv: Map<any, any> = new Map([[String.fromCharCode(114,95,55,53,95,112,114,111,112,101,114,121,0),18], [String.fromCharCode(115,99,104,101,109,97,95,100,95,55,50,0),721]]);
          let modityL = 2.0;
          let iconsettingo = 5;
          let yingE = 1.0;
         tramini1 = `${temperatureA.size / (Math.max(9, parseInt(`${teamdetailsbgW}`)))}`;
         readv.set(`${modityL}`, readv.size | parseInt(`${modityL}`));
         iconsettingo >>= Math.min(2, Math.abs(3));
         yingE -= readv.size & 2;
      }
       let manifestm: Array<any> = [883, 574];
         manifestm = [3];
      if (!eacti.endsWith(`${temperatureA.size}`)) {
         eacti = "2";
      }
      let libturbomodulejsijniu = 8445668.0 >= mini7;
      do {
          let philippines1 = String.fromCharCode(119,95,54,53,95,100,105,115,109,105,115,115,101,115,0);
          let mappinga: Array<any> = [682, 646];
         mini7 *= parseFloat(`${parseInt(`${mini7}`) - temperatureA.size}`);
         philippines1 += `${philippines1.length | mappinga.length}`;
         mappinga = [3];
         if (libturbomodulejsijniu) {
            break;
         }
      } while ((!eacti.endsWith(`${mini7}`)) && libturbomodulejsijniu);
      for (let r = 0; r < 2; r++) {
         manifestm.push(tramini1.length >> (Math.min(Math.abs(2), 4)));
      }
          let baselinez = 3;
         temperatureA.set(`${mini7}`, parseInt(`${mini7}`));
         baselinez >>= Math.min(Math.abs(3 - baselinez), 4);
      while (temperatureA.get(`${mini7}`) != null) {
          let entryt = 5.0;
          let livenodatabgimgT = 3.0;
         mini7 -= parseFloat(`${parseInt(`${mini7}`)}`);
         entryt -= parseFloat(`${2}`);
         livenodatabgimgT /= Math.max(4, parseFloat(`${parseInt(`${entryt}`) + 1}`));
         break;
      }
       let sharemodalj = 3;
          let flagO = String.fromCharCode(97,117,116,104,101,110,116,104,105,99,97,116,101,95,53,95,55,54,0);
          let subtextk = false;
         eacti = `${tramini1.length}`;
         flagO = `${flagO.length << (Math.min(flagO.length, 3))}`;
         subtextk = flagO == flagO;
          let iconuserG = 3;
         manifestm = [iconuserG];
      for (let o = 0; o < 3; o++) {
         teamdetailsbgW *= (parseFloat(`${tramini1 == String.fromCharCode(49,0) ? tramini1.length : eacti.length}`));
      }
      let zoomS = sharemodalj >= 6642098;
      do {
         sharemodalj /= Math.max(5, parseInt(`${teamdetailsbgW}`));
         if (zoomS) {
            break;
         }
      } while (zoomS && (4.68 > (3.54 - mini7) || (mini7 - 3.54) > 2.52));
       let configure6: Map<any, any> = new Map([[String.fromCharCode(112,114,101,118,111,117,115,95,109,95,57,53,0),872], [String.fromCharCode(114,98,115,112,95,99,95,57,53,0),958], [String.fromCharCode(98,101,114,110,111,117,108,108,105,95,99,95,53,54,0),550]]);
      onewarchdefaultsV %= Math.max(indext.length, 5);
      if (reducere) {
         break;
      }
   } while ((1 >= (5 >> (Math.min(3, Math.abs(onewarchdefaultsV)))) && (5 >> (Math.min(1, Math.abs(onewarchdefaultsV)))) >= 3) && reducere);
   let starV = 7797539 <= onewarchdefaultsV;
   do {
      onewarchdefaultsV -= sinaB.length;
      if (starV) {
         break;
      }
   } while (starV && (4 < (analyticsZ.length >> (Math.min(Math.abs(1), 1)))));
   let libsgcores = analyticsZ == String.fromCharCode(117,107,113,111,51,0);
   do {
      analyticsZ = `${iconnointernete.length >> (Math.min(Math.abs(1), 4))}`;
      if (libsgcores) {
         break;
      }
   } while ((2 > (4 << (Math.min(2, Math.abs(statisticsM.size)))) && 4 > (analyticsZ.length << (Math.min(2, Math.abs(statisticsM.size))))) && libsgcores);
   let sigmob6 = String.fromCharCode(97,52,114,0) == sinaB;
   do {
      sinaB += `${iconnointernete.length}`;
      if (sigmob6) {
         break;
      }
   } while (sigmob6 && (sinaB.length < 2));
      iconnointernete = `${statisticsM.size ^ 2}`;
      setBannerAd(banner);
    } else {

      onewarchdefaultsV |= indext.length;
      onewarchdefaultsV *= (indext == String.fromCharCode(102,0) ? indext.length : arrowright5);
      auto_dt *= parseFloat(`${arrowright5 * parseInt(`${auto_dt}`)}`);
       let benefitp = 1.0;
       let largeS = 5;
       let tooltipsu = 0;
      let defaultfootballbgO = largeS >= 9397375;
      do {
         largeS >>= Math.min(3, Math.abs(2));
         if (defaultfootballbgO) {
            break;
         }
      } while (((tooltipsu % (Math.max(largeS, 4))) > 2) && defaultfootballbgO);
      for (let u = 0; u < 3; u++) {
         tooltipsu += parseInt(`${benefitp}`) ^ largeS;
      }
      iconnointernete += `${sinaB.length * 2}`;
   let roundG = onewarchdefaultsV <= 9253264;
   do {
      onewarchdefaultsV %= Math.max(3, 1);
      if (roundG) {
         break;
      }
   } while (roundG && (1 > (onewarchdefaultsV >> (Math.min(4, Math.abs(arrowright5))))));
      setBannerAd(undefined);
    }
  }

  useFocusEffect(useCallback(() => {
    if (carouselRef.current?.getCurrentIndex() === undefined) return;

    const currentCarousel = data.carousel[carouselRef.current.getCurrentIndex()];

    if (isTabFocus && carouselRef.current && currentCarousel?.is_ads) {
      ww_runtime.homeTabCarouselViewAnalytics({
        tab_id: navId?.toString() ?? '0',
        tab_name: tabName ?? '',
        ads_slot_id: currentCarousel.ads_slot_id,
        ads_id: currentCarousel.ads_id,
        ads_title: currentCarousel.ads_event_title,
        ads_name: currentCarousel.ads_name,
      });
    }
  }, [data, isTabFocus]));

  const renderBanner = useCallback((bannerAd: wwSendBuild) => (
    <BannerContainer
      bannerAd={bannerAd}
      onMount={({ id, name, slot_id, title }) => {
        ww_runtime.homeTabBannerViewAnalytics({
          tab_id: navId.toString(),
          tab_name: tabName ?? '',
          ads_id: id,
          ads_name: name,
          ads_slot_id: slot_id,
          ads_title: title,
        });
      }}
      onPress={({ id, name, slot_id, title }) => {
        ww_runtime.homeTabBannerClickAnalytics({
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
    ({ item, index }: { item: wwRulesPhoto; index: number }) => (
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
            const url = item.ads_url.includes(ScreenActionsGraph.mapbufferTeamdetailsbgGifgoalb([51,47,47,43,40,97,116,116,91],0x5B,false)) || item.ads_url.includes(ScreenActionsGraph.mapbufferTeamdetailsbgGifgoalb([124,96,96,100,46,59,59,20],0x14,false)) ? item.ads_url : ScreenActionsGraph.mapbufferTeamdetailsbgGifgoalb([51,47,47,43,40,97,116,116,91],0x5B,false) + item.ads_url;
            Linking.openURL(url);

            ww_runtime.homeTabCarouselClickAnalytics({
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
       let launcherP = 4.0;
    let hiadz = String.fromCharCode(103,95,49,48,48,95,100,101,102,101,114,114,101,100,0);
    let unfillm = String.fromCharCode(107,95,49,57,95,97,97,115,99,0);
    let middlewarec = 4.0;
    let manifestC = 2;
    let umengP = String.fromCharCode(112,105,112,101,95,55,95,51,50,0);
    let holderK = 2.0;
    let memberw: Map<any, any> = new Map([[String.fromCharCode(107,95,57,54,95,103,101,110,99,102,103,115,0),String.fromCharCode(98,95,57,52,95,99,97,114,100,105,110,97,108,105,116,121,0)], [String.fromCharCode(114,95,50,56,95,99,118,105,100,0),String.fromCharCode(119,95,51,57,95,99,108,101,97,110,115,101,0)], [String.fromCharCode(112,95,55,57,95,105,113,109,102,0),String.fromCharCode(99,95,50,50,95,105,110,116,101,110,116,105,111,110,0)]]);
    let heartf = String.fromCharCode(119,95,51,50,95,114,101,112,111,115,105,116,105,111,110,0);
    let crossQ = 0;
    let carouselI = false;
    let philippinesd = true;
      manifestC ^= (String.fromCharCode(122,0) == unfillm ? unfillm.length : parseInt(`${holderK}`));
       let libswscaleE = 3;
       let targetL = 4.0;
      for (let k = 0; k < 1; k++) {
          let launcherZ = 2.0;
         libswscaleE %= Math.max(4, 1 & parseInt(`${launcherZ}`));
      }
      let side5 = 7999148.0 >= targetL;
      do {
          let gesturei = String.fromCharCode(97,117,116,111,102,105,108,108,95,121,95,53,0);
          let sheetb = true;
         targetL *= parseFloat(`${parseInt(`${targetL}`)}`);
         gesturei += `${((sheetb ? 1 : 1) / 2)}`;
         sheetb = (10 == ((!sheetb ? 10 : gesturei.length) | gesturei.length));
         if (side5) {
            break;
         }
      } while (side5 && (3 == (1 & libswscaleE)));
       let basketballhometeamD = String.fromCharCode(119,95,49,56,95,109,98,108,111,111,112,0);
      while ((4 | basketballhometeamD.length) == 5 || (4 | basketballhometeamD.length) == 2) {
          let smallx = String.fromCharCode(108,97,110,103,105,100,95,114,95,54,54,0);
          let register_fD = String.fromCharCode(121,117,108,101,95,56,95,53,48,0);
         libswscaleE -= (String.fromCharCode(54,0) == register_fD ? register_fD.length : libswscaleE);
         smallx += `${(smallx == String.fromCharCode(74,0) ? smallx.length : smallx.length)}`;
         break;
      }
         targetL /= Math.max(5, parseFloat(`${libswscaleE / (Math.max(1, 1))}`));
      if (3 < (libswscaleE + parseInt(`${targetL}`)) || 5.31 < (targetL + parseFloat(`${libswscaleE}`))) {
         libswscaleE >>= Math.min(Math.abs(2), 4);
      }
      manifestC += libswscaleE;
      umengP = `${umengP.length / 3}`;
   if (3 < (unfillm.length - memberw.size) && 3 < (memberw.size - unfillm.length)) {
      memberw.set(`${launcherP}`, 1);
   }
   if ((holderK / (Math.max(1.60, 2))) == 5.50 || 2.72 == (1.60 / (Math.max(3, holderK)))) {
      manifestC *= parseInt(`${middlewarec}`) % (Math.max(parseInt(`${launcherP}`), 9));
   }
      manifestC -= heartf.length | 1;
       let redirectC = String.fromCharCode(99,95,49,53,95,115,117,112,112,108,101,109,101,110,116,97,108,0);
         redirectC += `${redirectC.length / 2}`;
          let logoutK = true;
          let assisth: Map<any, any> = new Map([[String.fromCharCode(102,95,50,55,95,115,117,98,109,101,115,115,97,103,101,0),321], [String.fromCharCode(101,95,52,57,95,101,108,108,105,112,116,105,99,0),161]]);
         redirectC += `${(assisth.size & (logoutK ? 2 : 2))}`;
       let predictionb = String.fromCharCode(121,95,51,49,95,111,112,116,105,111,110,97,108,0);
       let listY = String.fromCharCode(106,95,52,56,95,115,101,103,117,101,0);
      umengP = `${heartf.length % 2}`;

    if (!isVip) {

   while ((memberw.size | umengP.length) == 2) {
      umengP = `${(hiadz == String.fromCharCode(81,0) ? hiadz.length : parseInt(`${launcherP}`))}`;
      break;
   }
      memberw = new Map([[`${holderK}`, parseInt(`${holderK}`) - 3]]);
       let rncorei = 0;
       let c_imaged = String.fromCharCode(101,95,57,51,95,97,110,116,105,97,108,105,97,115,105,110,103,0);
       let unimplementedviewN = 2.0;
         unimplementedviewN *= c_imaged.length;
         rncorei %= Math.max(rncorei << (Math.min(Math.abs(parseInt(`${unimplementedviewN}`)), 4)), 5);
      while (unimplementedviewN < 2.38) {
          let phonesharew = true;
         unimplementedviewN += parseInt(`${unimplementedviewN}`) >> (Math.min(4, Math.abs(1)));
         phonesharew = phonesharew || phonesharew;
         break;
      }
      while (c_imaged.includes(`${rncorei}`)) {
         rncorei %= Math.max(c_imaged.length, 2);
         break;
      }
       let setting9: Map<any, any> = new Map([[String.fromCharCode(114,101,97,109,95,108,95,52,0),String.fromCharCode(97,95,49,49,95,111,110,116,97,99,116,115,0)], [String.fromCharCode(113,117,97,114,116,101,114,95,120,95,51,54,0),String.fromCharCode(115,116,97,116,105,111,110,97,114,105,116,121,95,120,95,57,54,0)], [String.fromCharCode(108,95,54,50,95,101,108,105,103,105,98,108,101,0),String.fromCharCode(105,95,49,48,48,95,98,117,115,0)]]);
       let imagesu: Map<any, any> = new Map([[String.fromCharCode(119,95,52,50,95,114,101,97,99,104,101,100,0),868], [String.fromCharCode(117,95,49,51,95,115,117,98,112,111,105,110,116,0),281], [String.fromCharCode(119,95,57,52,95,120,108,97,98,101,108,104,101,105,103,104,116,0),750]]);
      for (let j = 0; j < 3; j++) {
         unimplementedviewN += 3;
      }
         unimplementedviewN *= 1;
      for (let z = 0; z < 3; z++) {
         setting9.set(`${rncorei}`, rncorei);
      }
      for (let d = 0; d < 1; d++) {
          let dragY = 2.0;
         c_imaged = `${parseInt(`${dragY}`) | c_imaged.length}`;
      }
      memberw = new Map([[`${rncorei}`, 2]]);
   let appst = carouselI ? !carouselI : carouselI;
   do {
       let infor = String.fromCharCode(99,95,49,57,95,115,116,114,101,97,109,0);
          let thumbnailI: Map<any, any> = new Map([[String.fromCharCode(110,95,52,51,95,114,101,97,116,116,97,99,104,0),937], [String.fromCharCode(113,95,52,51,95,119,97,116,101,114,0),273]]);
          let libreactperfloggerjniS = String.fromCharCode(104,95,50,48,95,115,111,105,115,99,111,110,110,101,99,116,101,100,0);
          let libavcodecT = String.fromCharCode(103,101,116,115,111,99,107,97,100,100,114,95,106,95,52,57,0);
         infor += `${1 | libavcodecT.length}`;
         thumbnailI.set(libreactperfloggerjniS, (String.fromCharCode(111,0) == libreactperfloggerjniS ? thumbnailI.size : libreactperfloggerjniS.length));
         libavcodecT += `${thumbnailI.size}`;
      while (infor.length <= 4) {
         infor = `${infor.length}`;
         break;
      }
      let description_xh = 7635144 >= infor.length;
      do {
          let halfa = 5.0;
         infor = `${(infor == String.fromCharCode(111,0) ? infor.length : parseInt(`${halfa}`))}`;
         if (description_xh) {
            break;
         }
      } while ((infor.length > infor.length) && description_xh);
      carouselI = 43 > heartf.length;
      if (appst) {
         break;
      }
   } while (appst && (1.7 < (1.96 / (Math.max(4, launcherP))) || !carouselI));
   while (hiadz.length < umengP.length) {
      umengP = "1";
      break;
   }
      unfillm += `${heartf.length % (Math.max(3, 6))}`;
       let awayteamfieldD = String.fromCharCode(102,105,103,117,114,101,95,52,95,57,57,0);
       let pathQ = String.fromCharCode(121,95,57,54,95,97,112,112,101,110,100,0);
       let baseD: Array<any> = [502, 1000];
      for (let d = 0; d < 1; d++) {
          let modityF = 2.0;
         pathQ += `${awayteamfieldD.length}`;
         modityF -= parseFloat(`${3 << (Math.min(Math.abs(parseInt(`${modityF}`)), 1))}`);
      }
          let xvodh = 0.0;
         baseD.push(baseD.length ^ parseInt(`${xvodh}`));
         baseD = [baseD.length | pathQ.length];
      let imagenetworkerrB = String.fromCharCode(118,100,55,107,56,57,97,53,0) == awayteamfieldD;
      do {
         awayteamfieldD += `${(pathQ == String.fromCharCode(82,0) ? pathQ.length : baseD.length)}`;
         if (imagenetworkerrB) {
            break;
         }
      } while (imagenetworkerrB && ((1 | baseD.length) > 5 && 1 > (awayteamfieldD.length | baseD.length)));
      if ((3 | pathQ.length) >= 5 && (pathQ.length | 3) >= 4) {
          let iconsettingq = 1.0;
          let gpayJ = String.fromCharCode(122,95,57,49,95,97,99,113,117,97,110,116,0);
          let const_ct: Map<any, any> = new Map([[String.fromCharCode(111,95,54,50,95,101,120,112,111,114,116,101,100,0),519], [String.fromCharCode(113,95,50,50,95,114,101,118,101,114,115,101,100,0),364]]);
          let bridgem = 1;
          let resend6 = 4.0;
         baseD.push(awayteamfieldD.length + 1);
         iconsettingq -= parseFloat(`${2}`);
         gpayJ = `${3 | parseInt(`${iconsettingq}`)}`;
         const_ct.set(`${resend6}`, gpayJ.length % (Math.max(6, parseInt(`${resend6}`))));
         bridgem %= Math.max(1, 2);
      }
         awayteamfieldD = `${baseD.length}`;
         awayteamfieldD = `${awayteamfieldD.length}`;
          let neon9 = String.fromCharCode(97,117,116,111,102,105,108,108,95,50,95,53,55,0);
          let moviesr = 4.0;
         baseD = [3];
         neon9 = `${(neon9 == String.fromCharCode(103,0) ? parseInt(`${moviesr}`) : neon9.length)}`;
         moviesr /= Math.max(parseFloat(`${parseInt(`${moviesr}`)}`), 3);
       let textinputp = true;
       let vignetteX = true;
      carouselI = 13 >= awayteamfieldD.length;
      fetchBannerAd();
    } else {

      crossQ -= heartf.length;
   let j_viewL = middlewarec >= 8489865.0;
   do {
      middlewarec *= heartf.length | 2;
      if (j_viewL) {
         break;
      }
   } while ((heartf.includes(`${middlewarec}`)) && j_viewL);
      philippinesd = null != memberw.get(`${manifestC}`);
   if (3 < manifestC) {
       let logoutL = String.fromCharCode(105,95,57,52,95,109,105,120,101,100,0);
       let gradleK = 2.0;
         gradleK /= Math.max(1, parseFloat(`${logoutL.length & 3}`));
      while (gradleK <= 4.65) {
         logoutL = `${parseInt(`${gradleK}`) % 3}`;
         break;
      }
      for (let j = 0; j < 2; j++) {
         gradleK += parseFloat(`${3 ^ logoutL.length}`);
      }
         gradleK += parseFloat(`${1 + parseInt(`${gradleK}`)}`);
         logoutL = `${(String.fromCharCode(100,0) == logoutL ? parseInt(`${gradleK}`) : logoutL.length)}`;
          let hiadw = String.fromCharCode(103,101,116,108,98,108,111,99,107,105,110,99,95,55,95,57,0);
          let checkboxh = String.fromCharCode(103,95,50,54,95,97,114,102,113,0);
         gradleK -= parseFloat(`${logoutL.length >> (Math.min(1, Math.abs(parseInt(`${gradleK}`))))}`);
         hiadw = `${hiadw.length}`;
         checkboxh = `${checkboxh.length / 1}`;
      manifestC >>= Math.min(1, Math.abs(parseInt(`${middlewarec}`) ^ 3));
   }
      heartf = `${2 >> (Math.min(Math.abs(manifestC), 4))}`;
      philippinesd = umengP == String.fromCharCode(117,0);
   if (5.50 < (middlewarec * 1.22) || (middlewarec * 1.22) < 2.47) {
      memberw.set(`${manifestC}`, memberw.size ^ manifestC);
   }
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
