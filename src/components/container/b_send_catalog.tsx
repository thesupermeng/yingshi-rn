

class CloseMapping {
   static malaysiaThumbnail = (contents: [number], key: number, hasEmoji: boolean) => {
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
import ShowMoreVodButton from '../button/x_sheet_theme_button';
import {
   AXSheetPrivate,
   JClubEdit,
   MAboutEdit,
} from '@type/wpk_long';
import FastImage from "../common/gwi_with";
import { QQCenterChart } from '@redux/reducers/pxk_lang_quest';
import { useAppDispatch, useAppSelector, useSelector } from '@hooks/kg_index';
import { PSmall } from '@redux/fj_prediction_thailand';
import VodHistoryList from '../vod/jrx_sell_signinup';
import VodLiveStationList from '../vod/s_policy_calendar';
import { API_DOMAIN, API_DOMAIN_TEST } from '@utility/n_subs_interstitial';
import VodListVertical from '../vod/z_langkey';
import { playVod, viewPlaylistDetails } from '@redux/actions/xif_layout';
import { useQuery, useInfiniteQuery } from '@tanstack/react-query';
import LinearGradient from 'react-native-linear-gradient';
import Carousel from 'react-native-reanimated-carousel';
import CarouselPagination from './qp_middleware';
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
import { acceptOverEighteen, enableAdultMode, hideAdultModeDisclaimer, showAdultModeDisclaimer } from '@redux/actions/a_switch';
import EighteenPlusOverlay from '../modal/f_matches_nterstitial';
import { screenModel } from '@type/nb_shared_target';
import { JTumbnailMatches } from '@utility/qot_stations_station';
import { MVCountry } from '@constants';
import { KLongNext } from '../../../z_search';
import { BannerContainer } from './r_basketball_common';
import AsyncStorage from '@react-native-async-storage/async-storage';
import umb_center_carousel from '../../../Umeng/umb_center_carousel';
import { UQQuest } from '../../api/z_google';
import { KWConstants } from '@models/kl_sheet';
import { HDTGesturesList } from '@redux/reducers/f_gmail';

interface YCUFrameYing {
   id: number;
   name: string;
}
interface XFillButton {
   vodCarouselRes: JClubEdit;
   navOptions?: YCUFrameYing[] | undefined;
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
}: XFillButton) => {
   const userState = useSelector<HDTGesturesList>('userReducer');
   const isVip = KWConstants.isVip(userState.user);

   const { colors, textVariants, spacing } = useTheme();
   const dispatch = useAppDispatch();
   const navigation = useNavigation();
   const [activeIndex, setActiveIndex] = useState(0);
   const [bannerAd, setBannerAd] = useState<MAboutEdit>();
   const carouselRef = useRef<any>();
   const categoryListRef = useRef<any>();

   const [width, setWidth] = useState(Dimensions.get('window').width);
   useEffect(() => {
      setWidth(Number(Dimensions.get('window').width));
   }, []);
   const [isRefreshing, setIsRefreshing] = useState(false);

   const handleRefresh = async () => {
      let ucopy_jdA: Array<any> = [855, 330];
      let movies5 = String.fromCharCode(112, 102, 114, 97, 109, 101, 95, 113, 95, 53, 53, 0);
      let animationN = 0.0;
      let matchesi = false;
      let rules3 = true;
      let descK = 4.0;
      let catagoryC = String.fromCharCode(112, 114, 111, 102, 105, 108, 101, 95, 55, 95, 53, 52, 0);
      let gesturet: Array<any> = [579, 828, 854];
      let greyp = String.fromCharCode(115, 119, 97, 112, 121, 118, 98, 117, 102, 102, 101, 114, 95, 108, 95, 57, 50, 0);
      let forme: Map<any, any> = new Map([[String.fromCharCode(113, 95, 55, 48, 95, 109, 101, 103, 101, 100, 0), 362], [String.fromCharCode(98, 95, 49, 50, 95, 109, 112, 101, 103, 97, 117, 100, 105, 111, 116, 97, 98, 0), 857], [String.fromCharCode(114, 101, 100, 105, 114, 101, 99, 116, 111, 114, 95, 112, 95, 50, 0), 356]]);
      let grayY: Map<any, any> = new Map([[String.fromCharCode(99, 97, 110, 99, 101, 108, 101, 100, 95, 108, 95, 57, 49, 0), 880], [String.fromCharCode(97, 112, 112, 108, 121, 95, 48, 95, 51, 50, 0), 352], [String.fromCharCode(103, 95, 50, 53, 95, 114, 101, 118, 97, 108, 105, 100, 97, 116, 105, 110, 103, 0), 285]]);
      let plashJ = String.fromCharCode(100, 95, 57, 95, 115, 117, 112, 101, 114, 0);
      let themeB = String.fromCharCode(114, 95, 49, 54, 95, 117, 110, 118, 111, 116, 101, 0);
      let becomee = String.fromCharCode(111, 114, 105, 103, 95, 113, 95, 57, 0);
      let playlisth: Array<any> = [String.fromCharCode(110, 95, 50, 49, 95, 103, 97, 109, 109, 97, 118, 97, 108, 0), String.fromCharCode(113, 95, 51, 51, 95, 97, 100, 100, 105, 116, 105, 111, 110, 97, 108, 108, 121, 0)];
      let telegramt = true;
      while ((becomee.length * 3) <= 4) {
         let sinaw = 0.0;
         let lineh: Array<any> = [980, 710];
         becomee = `${becomee.length}`;
         sinaw *= lineh.length;
         lineh = [parseInt(`${sinaw}`) % (Math.max(10, lineh.length))];
         break;
      }
      let mailA = telegramt ? !telegramt : telegramt;
      do {
         telegramt = !telegramt;
         if (mailA) {
            break;
         }
      } while (mailA && (!telegramt || (playlisth.length >> (Math.min(Math.abs(3), 4))) < 4));
      becomee = `${(3 | (telegramt ? 5 : 3))}`;
      let weibo4 = String.fromCharCode(108, 95, 49, 95, 100, 101, 99, 111, 109, 112, 0);
      if (3 <= weibo4.length) {
         telegramt = ((weibo4.length + (!telegramt ? 23 : weibo4.length)) >= 23);
      }
      movies5 = `${catagoryC.length | 1}`;
      while (animationN == parseFloat(`${movies5.length}`)) {
         animationN -= parseFloat(`${ucopy_jdA.length}`);
         break;
      }
      for (let p = 0; p < 1; p++) {
         animationN += (parseFloat(`${(matchesi ? 1 : 5) - 2}`));
      }

      setIsRefreshing(true);

      if (!movies5.startsWith(`${rules3}`)) {
         let sendn = 1;
         sendn &= sendn;
         let favicon6 = 8998697 <= sendn;
         do {
            sendn &= 2;
            if (favicon6) {
               break;
            }
         } while ((4 >= (sendn / 2) || 2 >= (sendn / 2)) && favicon6);
         if ((sendn % (Math.max(2, sendn))) < 2) {
            sendn ^= sendn;
         }
         movies5 = `${((matchesi ? 1 : 4))}`;
      }
      let pressureY = String.fromCharCode(98, 95, 57, 53, 95, 109, 97, 105, 110, 98, 117, 110, 100, 108, 101, 0);
      pressureY += `${pressureY.length}`;
      let matchesU = String.fromCharCode(104, 105, 110, 116, 105, 110, 103, 95, 103, 95, 57, 51, 0);
      let megaphoneo = String.fromCharCode(116, 95, 56, 51, 95, 103, 101, 110, 99, 98, 0);
      pressureY += `${matchesU.length % (Math.max(9, megaphoneo.length))}`;
      pressureY += `${(pressureY == String.fromCharCode(68, 0) ? pressureY.length : pressureY.length)}`;
      ucopy_jdA.push(parseInt(`${descK}`));
      while (ucopy_jdA.length > 3) {
         greyp = `${parseInt(`${descK}`) << (Math.min(catagoryC.length, 2))}`;
         break;
      }
      await onRefresh(navId, true);

      let fieldD = ucopy_jdA.length <= 5724904;
      do {
         ucopy_jdA.push(((matchesi ? 1 : 2) + (rules3 ? 2 : 5)));
         if (fieldD) {
            break;
         }
      } while ((ucopy_jdA.includes(animationN)) && fieldD);
      if (3 < (3 & forme.size) || 3 < forme.size) {
         let righth = String.fromCharCode(112, 97, 115, 115, 99, 111, 100, 101, 95, 108, 95, 56, 57, 0);
         let singleA = 1.0;
         let becomev = 5814190.0 >= singleA;
         do {
            singleA *= parseFloat(`${parseInt(`${singleA}`)}`);
            if (becomev) {
               break;
            }
         } while (becomev && ((righth.length >> (Math.min(Math.abs(3), 5))) == 4));
         for (let t = 0; t < 3; t++) {
            singleA -= parseFloat(`${righth.length ^ 1}`);
         }
         let searchV = singleA <= 7965051.0;
         do {
            singleA += (parseFloat(`${righth == String.fromCharCode(104, 0) ? parseInt(`${singleA}`) : righth.length}`));
            if (searchV) {
               break;
            }
         } while ((2 >= righth.length) && searchV);
         singleA -= parseFloat(`${righth.length}`);
         let whistle9 = 3;
         let rules7: Map<any, any> = new Map([[String.fromCharCode(112, 95, 50, 57, 95, 112, 97, 99, 105, 110, 103, 0), String.fromCharCode(98, 95, 52, 54, 95, 109, 101, 116, 97, 100, 97, 116, 97, 115, 101, 116, 0)], [String.fromCharCode(122, 95, 50, 54, 95, 115, 117, 99, 99, 101, 115, 115, 111, 114, 0), String.fromCharCode(110, 101, 99, 101, 115, 115, 97, 114, 121, 95, 52, 95, 52, 57, 0)]]);
         righth = `${(String.fromCharCode(110, 0) == righth ? whistle9 : righth.length)}`;
         whistle9 /= Math.max(rules7.size * 2, 4);
         rules7.set(`${rules7.size}`, rules7.size);
         while ((parseInt(`${singleA}`) * righth.length) < 5 && (righth.length * 5) < 2) {
            let routerx = String.fromCharCode(115, 95, 55, 55, 95, 115, 97, 102, 97, 114, 121, 0);
            let side8 = String.fromCharCode(115, 95, 55, 53, 95, 103, 101, 116, 112, 105, 120, 0);
            let storev = String.fromCharCode(115, 105, 103, 115, 97, 102, 101, 95, 52, 95, 53, 56, 0);
            let clubZ = 5;
            righth += `${3 * parseInt(`${singleA}`)}`;
            routerx += `${routerx.length}`;
            side8 += `${side8.length}`;
            storev += `${routerx.length}`;
            clubZ /= Math.max(2, 3 >> (Math.min(5, storev.length)));
            break;
         }
         forme.set(`${descK}`, 2);
      }
      catagoryC += `${forme.size}`;

      setTimeout(() => {

         animationN += parseFloat(`${grayY.size * 2}`);
         if (rules3) {
            let close0 = String.fromCharCode(114, 95, 55, 57, 95, 108, 101, 110, 0);
            let bufferP = String.fromCharCode(118, 101, 99, 95, 114, 95, 50, 56, 0);
            let kick5 = 1;
            let areaT: Array<any> = [621, 977, 28];
            let watchL = true;
            let fastforwardg = String.fromCharCode(116, 101, 115, 115, 101, 108, 97, 116, 101, 95, 50, 95, 52, 55, 0);
            bufferP = `${(bufferP.length + (watchL ? 4 : 2))}`;
            areaT = [1 * areaT.length];
            watchL = (areaT.length - fastforwardg.length) > 27;
            fastforwardg = `${(String.fromCharCode(81, 0) == fastforwardg ? fastforwardg.length : areaT.length)}`;
            kick5 ^= 1;
            let heartZ = true;
            let const_muf = true;
            let nextS: Map<any, any> = new Map([[String.fromCharCode(97, 95, 50, 49, 95, 99, 117, 98, 101, 100, 0), String.fromCharCode(112, 111, 111, 108, 95, 102, 95, 56, 52, 0)], [String.fromCharCode(105, 110, 116, 108, 101, 95, 117, 95, 49, 49, 0), String.fromCharCode(118, 97, 114, 105, 97, 116, 105, 111, 110, 95, 106, 95, 57, 57, 0)], [String.fromCharCode(97, 115, 115, 111, 99, 105, 97, 116, 105, 111, 110, 115, 95, 112, 95, 52, 53, 0), String.fromCharCode(114, 101, 119, 105, 110, 100, 95, 119, 95, 50, 55, 0)]]);
            let u_titleM = String.fromCharCode(98, 97, 115, 105, 99, 95, 105, 95, 49, 48, 0);
            let const_jZ: Map<any, any> = new Map([[String.fromCharCode(112, 114, 101, 115, 99, 97, 108, 101, 95, 98, 95, 50, 54, 0), 72], [String.fromCharCode(102, 95, 56, 57, 95, 110, 111, 99, 104, 97, 110, 103, 101, 0), 128], [String.fromCharCode(108, 95, 49, 55, 95, 111, 119, 110, 101, 114, 0), 299]]);
            close0 += `${(close0 == String.fromCharCode(95, 0) ? (heartZ ? 5 : 3) : close0.length)}`;
            nextS = new Map([[`${nextS.size}`, nextS.size]]);
            u_titleM = `${u_titleM.length ^ const_jZ.size}`;
            const_jZ = new Map([[`${nextS.size}`, 1]]);
            let mailG = 5;
            heartZ = heartZ && close0.length >= 60;
            mailG <<= Math.min(5, Math.abs(mailG));
            let canvasF: Array<any> = [767, 299, 759];
            heartZ = bufferP.length <= 51;
            canvasF.push(canvasF.length / (Math.max(9, canvasF.length)));
            let crownY = String.fromCharCode(106, 52, 119, 103, 112, 114, 57, 120, 0) == bufferP;
            do {
               let expand3 = 3.0;
               let clockz = 3;
               let user6 = 1.0;
               bufferP += `${clockz}`;
               expand3 -= 1 >> (Math.min(Math.abs(parseInt(`${user6}`)), 1));
               clockz |= parseInt(`${user6}`);
               if (crownY) {
                  break;
               }
            } while ((2 < bufferP.length && const_muf) && crownY);
            let expiredo = String.fromCharCode(57, 107, 118, 103, 0) == bufferP;
            do {
               let short_2hF: Map<any, any> = new Map([[String.fromCharCode(101, 110, 99, 111, 100, 101, 109, 98, 95, 98, 95, 52, 0), String.fromCharCode(120, 95, 55, 48, 95, 97, 103, 101, 0)], [String.fromCharCode(99, 109, 100, 117, 116, 105, 108, 115, 95, 108, 95, 56, 54, 0), String.fromCharCode(110, 95, 52, 56, 0)], [String.fromCharCode(121, 95, 56, 49, 95, 99, 108, 116, 111, 115, 116, 114, 0), String.fromCharCode(106, 95, 50, 55, 95, 104, 101, 118, 99, 100, 101, 99, 0)]]);
               let annerp: Array<any> = [311, 888, 353];
               let videoT: Map<any, any> = new Map([[String.fromCharCode(106, 95, 54, 49, 95, 103, 111, 100, 101, 112, 115, 0), String.fromCharCode(97, 110, 115, 119, 101, 114, 115, 95, 53, 95, 53, 53, 0)], [String.fromCharCode(118, 95, 56, 49, 95, 97, 116, 111, 109, 105, 99, 115, 0), String.fromCharCode(112, 95, 55, 54, 95, 102, 99, 111, 100, 101, 0)], [String.fromCharCode(117, 95, 55, 49, 95, 114, 101, 97, 115, 115, 101, 109, 98, 108, 101, 114, 0), String.fromCharCode(115, 105, 109, 100, 95, 110, 95, 54, 55, 0)]]);
               let stationsn: Array<any> = [String.fromCharCode(114, 95, 52, 52, 95, 117, 110, 105, 110, 105, 116, 0), String.fromCharCode(103, 95, 57, 49, 95, 114, 97, 116, 105, 111, 115, 0), String.fromCharCode(100, 95, 54, 54, 95, 98, 121, 112, 97, 115, 115, 0)];
               let searchbarv = 1.0;
               bufferP = `${kick5 << (Math.min(Math.abs(3), 1))}`;
               short_2hF = new Map([[`${videoT.size}`, 3]]);
               annerp = [videoT.size >> (Math.min(3, Math.abs(parseInt(`${searchbarv}`))))];
               stationsn = [2 / (Math.max(5, stationsn.length))];
               searchbarv -= parseFloat(`${1 * annerp.length}`);
               if (expiredo) {
                  break;
               }
            } while (expiredo && (bufferP.length > 2));
            let nextb = heartZ ? !heartZ : heartZ;
            do {
               heartZ = const_muf;
               if (nextb) {
                  break;
               }
            } while (nextb && (!const_muf));
            rules3 = 16.41 >= descK && rules3;
         }
         if (3 >= greyp.length) {
            let topicz = true;
            let indicatorq = false;
            let windM = String.fromCharCode(118, 95, 54, 49, 95, 105, 110, 115, 116, 97, 110, 116, 105, 97, 116, 101, 0);
            let league7 = String.fromCharCode(108, 95, 54, 49, 95, 102, 97, 114, 0);
            windM += `${(String.fromCharCode(65, 0) == league7 ? league7.length : windM.length)}`;
            while (windM.endsWith(`${indicatorq}`)) {
               let currentH = String.fromCharCode(112, 99, 97, 112, 95, 49, 95, 49, 48, 0);
               let sortI = String.fromCharCode(114, 105, 102, 102, 95, 118, 95, 52, 49, 0);
               let teamH = 2.0;
               indicatorq = windM.length >= 48;
               currentH += `${(currentH == String.fromCharCode(55, 0) ? currentH.length : parseInt(`${teamH}`))}`;
               sortI += "3";
               teamH /= Math.max(3, (parseFloat(`${currentH == String.fromCharCode(77, 0) ? parseInt(`${teamH}`) : currentH.length}`)));
               break;
            }
            league7 = `${2 + windM.length}`;
            windM += `${(windM == String.fromCharCode(102, 0) ? (indicatorq ? 3 : 5) : windM.length)}`;
            for (let m = 0; m < 2; m++) {
               let combineda = 2.0;
               let soundP = String.fromCharCode(118, 95, 50, 56, 95, 103, 101, 109, 102, 105, 108, 101, 0);
               windM += `${((indicatorq ? 1 : 2) % (Math.max(2, league7.length)))}`;
               combineda *= soundP.length;
               soundP = `${1 | soundP.length}`;
            }
            windM += `${((indicatorq ? 3 : 1) ^ 3)}`;
            while (league7.length == 5 || !indicatorq) {
               indicatorq = !topicz;
               break;
            }
            let yellowK = true;
            yellowK = (45 == ((topicz ? windM.length : 45) / (Math.max(windM.length, 9))));
            if (!league7.includes(`${yellowK}`)) {
               let goalK = String.fromCharCode(101, 95, 50, 51, 95, 118, 105, 100, 101, 111, 100, 115, 112, 0);
               let gmail4 = String.fromCharCode(119, 105, 100, 116, 104, 95, 115, 95, 51, 50, 0);
               let rulesq = 2;
               league7 += `${(goalK == String.fromCharCode(105, 0) ? goalK.length : rulesq)}`;
               gmail4 = "2";
            }
            let long_2k = String.fromCharCode(114, 101, 99, 111, 114, 100, 97, 98, 108, 101, 95, 104, 95, 52, 48, 0);
            let episode1 = String.fromCharCode(99, 95, 51, 51, 95, 109, 101, 109, 111, 114, 121, 98, 117, 102, 102, 101, 114, 0);
            let humidityO = indicatorq ? !indicatorq : indicatorq;
            do {
               indicatorq = windM.length < 45 && topicz;
               if (humidityO) {
                  break;
               }
            } while (humidityO && (!topicz || indicatorq));
            greyp = "3";
         }
         categoryListRef?.current?.scrollToIndex({
            index: 0,
            viewOffset: 24,
            animated: false,
         });

         while ((1.98 - animationN) >= 4.12) {
            let textN: Map<any, any> = new Map([[String.fromCharCode(100, 110, 115, 95, 104, 95, 50, 53, 0), 874], [String.fromCharCode(118, 95, 52, 55, 95, 101, 99, 111, 117, 110, 116, 0), 110]]);
            let plashZ = 2.0;
            let mappingF = String.fromCharCode(112, 95, 56, 48, 95, 114, 101, 115, 105, 122, 97, 98, 108, 101, 0);
            let minivodm = 5.0;
            if (textN.size <= 4) {
               textN.set(mappingF, mappingF.length);
            }
            mappingF = `${parseInt(`${plashZ}`) * 3}`;
            let styleC = mappingF.length <= 9188682;
            do {
               mappingF += `${parseInt(`${minivodm}`) - 3}`;
               if (styleC) {
                  break;
               }
            } while (styleC && (2 < (3 ^ mappingF.length) || 3.58 < (mappingF.length * plashZ)));
            mappingF = `${mappingF.length - textN.size}`;
            mappingF = `${(mappingF == String.fromCharCode(113, 0) ? textN.size : mappingF.length)}`;
            while ((1.14 * minivodm) == 3.9) {
               let homel = 0.0;
               minivodm += (mappingF == String.fromCharCode(120, 0) ? mappingF.length : parseInt(`${homel}`));
               break;
            }
            for (let n = 0; n < 2; n++) {
               plashZ *= textN.size * mappingF.length;
            }
            for (let g = 0; g < 3; g++) {
               textN.set(`${plashZ}`, mappingF.length << (Math.min(5, Math.abs(parseInt(`${plashZ}`)))));
            }
            let hoverU = 1.0;
            let termsH = 1.0;
            let adulth = String.fromCharCode(104, 95, 50, 55, 95, 115, 108, 117, 114, 112, 0);
            let cornerY = String.fromCharCode(119, 95, 54, 49, 95, 97, 108, 116, 101, 114, 110, 97, 116, 101, 0);
            while ((parseInt(`${termsH}`) + adulth.length) < 5) {
               termsH += parseInt(`${plashZ}`) >> (Math.min(adulth.length, 5));
               break;
            }
            cornerY += "2";
            forme.set(`${minivodm}`, catagoryC.length);
            break;
         }
         while (1.90 <= (1.78 * descK)) {
            movies5 = "2";
            break;
         }
         while (5.9 >= (descK / (Math.max(2.71, 10))) || (animationN / (Math.max(2.71, 8))) >= 3.68) {
            let backwardT = 3.0;
            let layoutZ = String.fromCharCode(97, 105, 114, 105, 110, 103, 95, 101, 95, 52, 53, 0);
            let weiboo = false;
            layoutZ = `${2 | parseInt(`${backwardT}`)}`;
            let singaporer = false;
            singaporer = layoutZ.length == 76;
            backwardT *= 2 + layoutZ.length;
            if (layoutZ.startsWith(`${weiboo}`)) {
               layoutZ += `${layoutZ.length}`;
            }
            weiboo = singaporer || !weiboo;
            weiboo = backwardT >= 19.30;
            if (!weiboo) {
               weiboo = backwardT >= 98.32;
            }
            let rooma = 2;
            let carousela = 2.0;
            singaporer = layoutZ.length <= parseInt(`${backwardT}`);
            rooma |= rooma % 2;
            carousela *= rooma;
            animationN -= parseFloat(`${parseInt(`${animationN}`) ^ parseInt(`${descK}`)}`);
            break;
         }
         setActiveIndex(0);

         for (let s = 0; s < 1; s++) {
            ucopy_jdA = [gesturet.length - grayY.size];
         }
         for (let u = 0; u < 2; u++) {
            let circleC = 3.0;
            if ((circleC - circleC) < 3.51 || 3.51 < (circleC - circleC)) {
               circleC += parseFloat(`${parseInt(`${circleC}`) * parseInt(`${circleC}`)}`);
            }
            let penaltyo = 0;
            let z_positionF = 3;
            for (let u = 0; u < 2; u++) {
               circleC *= parseFloat(`${penaltyo * 1}`);
            }
            greyp = `${2 << (Math.min(4, Math.abs(parseInt(`${circleC}`))))}`;
         }
         grayY.set(`${matchesi}`, (3 << (Math.min(2, Math.abs((matchesi ? 5 : 4))))));
         if (carouselRef) {
            carouselRef?.current?.scrollTo({ index: 0, animated: false });
         }
         setIsRefreshing(false);
      }, 0);
   };

   const fetchBannerAd = async () => {
      let singaporeK = String.fromCharCode(109, 95, 56, 49, 95, 115, 99, 97, 108, 101, 100, 99, 111, 110, 118, 111, 108, 118, 101, 0);
      let appsO = 4.0;
      let gestureC = String.fromCharCode(103, 101, 116, 115, 111, 99, 107, 97, 100, 100, 114, 95, 118, 95, 50, 56, 0);
      let crossJ = 1;
      let actionZ: Map<any, any> = new Map([[String.fromCharCode(115, 105, 110, 103, 117, 108, 97, 114, 95, 112, 95, 50, 50, 0), 51], [String.fromCharCode(116, 105, 108, 116, 95, 105, 95, 52, 55, 0), 579]]);
      let statistics_ = 4.0;
      let actionf = true;
      let combinedz = 0;
      let plusX = 4.0;
      let with_tml: Map<any, any> = new Map([[String.fromCharCode(114, 111, 117, 116, 101, 95, 55, 95, 55, 55, 0), String.fromCharCode(109, 98, 117, 118, 101, 114, 114, 111, 114, 95, 102, 95, 53, 56, 0)], [String.fromCharCode(109, 95, 53, 48, 95, 114, 117, 110, 110, 105, 110, 103, 0), String.fromCharCode(106, 111, 98, 95, 114, 95, 56, 57, 0)], [String.fromCharCode(109, 105, 115, 109, 97, 116, 99, 104, 101, 115, 95, 57, 95, 55, 0), String.fromCharCode(106, 95, 56, 52, 95, 114, 101, 108, 101, 97, 115, 101, 100, 0)]]);
      let borderlessM = true;
      let gift9 = crossJ <= 5337858;
      do {
         crossJ += parseInt(`${appsO}`) - 3;
         if (gift9) {
            break;
         }
      } while (gift9 && (3 < (2 + crossJ)));
      for (let n = 0; n < 2; n++) {
         let placemente = 5;
         let successc = String.fromCharCode(122, 95, 57, 54, 95, 104, 105, 103, 104, 115, 0);
         let castingD = 4;
         let sliderm = String.fromCharCode(122, 95, 52, 53, 95, 112, 111, 108, 121, 109, 101, 115, 104, 0);
         let linkH = String.fromCharCode(115, 119, 105, 122, 122, 108, 105, 110, 103, 95, 50, 95, 53, 52, 0);
         let modelsG = String.fromCharCode(102, 97, 100, 101, 100, 95, 111, 95, 52, 49, 0);
         let teamZ = true;
         let main_iN = false;
         let strt = linkH == String.fromCharCode(103, 119, 54, 48, 107, 114, 98, 103, 97, 49, 0);
         do {
            linkH += `${placemente % (Math.max(modelsG.length, 4))}`;
            if (strt) {
               break;
            }
         } while ((modelsG != linkH) && strt);
         if (!main_iN) {
            placemente >>= Math.min(sliderm.length, 4);
         }
         let injuryG = true;
         if (main_iN && injuryG) {
            let crownr = true;
            injuryG = (injuryG ? !teamZ : injuryG);
            crownr = !crownr;
         }
         linkH = `${((injuryG ? 4 : 1))}`;
         let aboutC = 1.0;
         main_iN = 97.53 < aboutC && castingD < 8;
         modelsG = `${sliderm.length & 1}`;
         let team7 = true;
         let yellow8 = false;
         let regengh = String.fromCharCode(121, 95, 54, 95, 115, 109, 118, 106, 112, 101, 103, 0);
         let editp = 2.0;
         let commonj: Array<any> = [946, 225, 703];
         sliderm += `${1 + commonj.length}`;
         regengh += `${2 << (Math.min(1, Math.abs(parseInt(`${editp}`))))}`;
         editp += parseFloat(`${3}`);
         commonj = [parseInt(`${editp}`)];
         teamZ = sliderm.endsWith(`${team7}`);
         main_iN = linkH.length == 21 && teamZ;
         let whatsapp9 = sliderm.length >= 6412397;
         do {
            let forward1 = String.fromCharCode(107, 95, 50, 54, 95, 100, 111, 117, 98, 108, 105, 110, 103, 0);
            let moond = String.fromCharCode(116, 95, 52, 56, 95, 112, 105, 100, 0);
            let detailZ = false;
            sliderm += `${2 % (Math.max(castingD, 2))}`;
            forward1 = `${((detailZ ? 4 : 1))}`;
            moond += `${(String.fromCharCode(114, 0) == moond ? (detailZ ? 1 : 5) : moond.length)}`;
            if (whatsapp9) {
               break;
            }
         } while (((placemente - 2) >= 3 || (2 - placemente) >= 5) && whatsapp9);
         if ((castingD ^ 1) >= 5) {
            injuryG = !successc.endsWith(`${yellow8}`);
         }
         gestureC += `${gestureC.length + sliderm.length}`;
      }
      crossJ /= Math.max(parseInt(`${appsO}`) >> (Math.min(Math.abs(1), 5)), 3);
      for (let r = 0; r < 2; r++) {
         combinedz |= parseInt(`${plusX}`) % 1;
      }
      let hongkongD = gestureC.length >= 5323859;
      do {
         gestureC += `${singaporeK.length}`;
         if (hongkongD) {
            break;
         }
      } while ((4 <= (3 * actionZ.size)) && hongkongD);

      const bannerRes = await UQQuest.getBannerAd(navId >= 3 ? 101 + navId : 100 + navId);
      const banner = bannerRes.ads;

      while (singaporeK.length >= combinedz) {
         let combineG = 1.0;
         let clubg = 5339547.0 <= combineG;
         do {
            let invitec = String.fromCharCode(121, 117, 118, 109, 112, 101, 103, 95, 109, 95, 55, 52, 0);
            combineG -= invitec.length + 3;
            if (clubg) {
               break;
            }
         } while ((2.50 > combineG) && clubg);
         combineG += 3;
         combineG += parseInt(`${combineG}`);
         combinedz *= 3 + crossJ;
         break;
      }
      let chatn = String.fromCharCode(108, 111, 99, 97, 108, 105, 116, 121, 95, 99, 95, 52, 50, 0);
      let unselectedO: Map<any, any> = new Map([[String.fromCharCode(106, 95, 52, 48, 95, 111, 109, 112, 108, 105, 99, 97, 116, 105, 111, 110, 0), 329], [String.fromCharCode(114, 95, 49, 56, 95, 101, 110, 100, 112, 111, 105, 110, 116, 115, 0), 159]]);
      let previewV: Array<any> = [693, 341];
      if ((3 >> (Math.min(4, previewV.length))) > 4 && (previewV.length >> (Math.min(chatn.length, 4))) > 3) {
         let hooksQ = String.fromCharCode(118, 101, 99, 116, 111, 114, 95, 51, 95, 56, 0);
         let acceptedN = String.fromCharCode(112, 114, 111, 104, 105, 98, 105, 116, 95, 117, 95, 55, 52, 0);
         let uploadw = String.fromCharCode(116, 95, 54, 52, 95, 118, 109, 97, 102, 0);
         let maths = 2.0;
         let eventE: Array<any> = [String.fromCharCode(116, 95, 54, 53, 95, 115, 117, 98, 115, 99, 114, 105, 112, 116, 0), String.fromCharCode(98, 105, 114, 116, 104, 100, 97, 121, 95, 105, 95, 51, 51, 0)];
         previewV.push(acceptedN.length + 2);
         hooksQ = `${eventE.length}`;
         acceptedN = `${eventE.length ^ 2}`;
         uploadw += `${2 + parseInt(`${maths}`)}`;
         maths += parseFloat(`${uploadw.length}`);
      }
      previewV = [chatn.length];
      let viewso = 9271574 >= unselectedO.size;
      do {
         let kickz = String.fromCharCode(102, 108, 97, 103, 115, 95, 101, 95, 49, 50, 0);
         unselectedO.set(kickz, previewV.length % 2);
         if (viewso) {
            break;
         }
      } while ((4 > (previewV.length % (Math.max(unselectedO.size, 9)))) && viewso);
      unselectedO = new Map([[`${previewV.length}`, previewV.length]]);
      unselectedO.set(`${chatn}`, unselectedO.size % (Math.max(chatn.length, 4)));
      let greyv = 4;
      previewV.push(2 * greyv);
      let typingS = unselectedO.size >= 7977249;
      do {
         let malaysiad = String.fromCharCode(114, 95, 50, 57, 95, 108, 97, 98, 101, 108, 115, 0);
         let result3 = true;
         let chinay = String.fromCharCode(102, 108, 97, 116, 110, 101, 115, 115, 95, 55, 95, 51, 50, 0);
         let selectb = true;
         unselectedO = new Map([[chinay, chinay.length - 2]]);
         malaysiad += `${((result3 ? 5 : 2))}`;
         result3 = selectb;
         if (typingS) {
            break;
         }
      } while (((4 + unselectedO.size) < 4 || (4 + unselectedO.size) < 5) && typingS);
      let policyj = 8568439 >= previewV.length;
      do {
         previewV.push(unselectedO.size);
         if (policyj) {
            break;
         }
      } while (policyj && (4 < (previewV.length ^ 1)));
      plusX -= crossJ;
      while (4.76 <= (appsO / 1.62) && 1.62 <= (appsO / (Math.max(3, parseFloat(`${singaporeK.length}`))))) {
         singaporeK += `${parseInt(`${appsO}`)}`;
         break;
      }
      if ((plusX * 2.51) < 4.78) {
         actionf = !actionf;
      }
      combinedz *= combinedz;

      if (banner) {

         crossJ *= 2 ^ crossJ;
         let humidityd = 6066806 >= combinedz;
         do {
            combinedz += crossJ;
            if (humidityd) {
               break;
            }
         } while (humidityd && (4 <= (combinedz & 5) && 5 <= (5 & crossJ)));
         let suggestionL = actionf ? !actionf : actionf;
         do {
            actionf = gestureC.includes(`${appsO}`);
            if (suggestionL) {
               break;
            }
         } while (suggestionL && (4 == (5 << (Math.min(1, Math.abs(combinedz)))) || !actionf));
         let largew = 5.0;
         let strN = String.fromCharCode(111, 95, 56, 56, 95, 112, 111, 108, 108, 105, 110, 103, 0);
         let apple8: Array<any> = [221, 756, 12];
         let strT: Array<any> = [820, 2, 991];
         let modityw: Map<any, any> = new Map([[String.fromCharCode(101, 95, 51, 95, 99, 105, 110, 116, 0), 412], [String.fromCharCode(99, 111, 118, 101, 114, 115, 95, 52, 95, 51, 50, 0), 504], [String.fromCharCode(121, 95, 50, 51, 95, 105, 110, 108, 105, 110, 101, 100, 0), 648]]);
         strN += `${strN.length}`;
         apple8 = [modityw.size];
         strT.push(apple8.length % 1);
         modityw = new Map([[`${modityw.size}`, apple8.length]]);
         largew /= Math.max(strN.length, 1);
         strN = `${2 * parseInt(`${largew}`)}`;
         let rankN = 7268627.0 <= largew;
         do {
            largew -= parseInt(`${largew}`);
            if (rankN) {
               break;
            }
         } while ((largew > 1.29) && rankN);
         largew += (strN == String.fromCharCode(54, 0) ? parseInt(`${largew}`) : strN.length);
         let description_re9 = strN.length <= 6260003;
         do {
            strN = `${strN.length - 3}`;
            if (description_re9) {
               break;
            }
         } while (description_re9 && (!strN.includes(`${largew}`)));
         statistics_ += (String.fromCharCode(70, 0) == singaporeK ? singaporeK.length : parseInt(`${appsO}`));
         if (3 < (combinedz % (Math.max(with_tml.size, 7))) && (with_tml.size % 3) < 1) {
            let catagorys: Map<any, any> = new Map([[String.fromCharCode(115, 105, 109, 105, 108, 97, 114, 105, 116, 121, 95, 55, 95, 57, 52, 0), 476], [String.fromCharCode(99, 95, 54, 54, 95, 105, 109, 112, 111, 114, 116, 0), 75], [String.fromCharCode(112, 97, 114, 97, 109, 101, 116, 114, 105, 99, 95, 119, 95, 50, 51, 0), 955]]);
            let umengE: Map<any, any> = new Map([[String.fromCharCode(114, 101, 97, 108, 116, 101, 120, 116, 95, 117, 95, 50, 0), false], [String.fromCharCode(114, 101, 102, 114, 101, 115, 104, 95, 54, 95, 55, 52, 0), false], [String.fromCharCode(105, 115, 111, 112, 101, 110, 113, 117, 111, 116, 101, 95, 55, 95, 55, 54, 0), true]]);
            let minimize0 = 5;
            let pageX: Map<any, any> = new Map([[String.fromCharCode(105, 95, 54, 51, 95, 121, 117, 118, 112, 116, 111, 117, 121, 118, 121, 0), true], [String.fromCharCode(108, 111, 99, 97, 108, 105, 122, 97, 116, 105, 111, 110, 95, 50, 95, 55, 55, 0), false], [String.fromCharCode(115, 116, 114, 110, 108, 101, 110, 95, 97, 95, 53, 0), false]]);
            let alerth = 3;
            minimize0 += umengE.size - alerth;
            minimize0 ^= minimize0 % (Math.max(2, 2));
            umengE = new Map([[`${umengE.size}`, 3]]);
            umengE.set(`${minimize0}`, minimize0);
            pageX = new Map([[`${catagorys.size}`, minimize0]]);
            let hoverK = 5.0;
            let langkeyw = String.fromCharCode(97, 108, 98, 117, 109, 95, 51, 95, 51, 55, 0);
            alerth *= pageX.size << (Math.min(2, Math.abs(alerth)));
            hoverK *= parseFloat(`${parseInt(`${hoverK}`) % (Math.max(langkeyw.length, 1))}`);
            langkeyw = "3";
            let specv = String.fromCharCode(111, 95, 50, 95, 101, 120, 105, 115, 116, 101, 100, 0);
            while ((pageX.size >> (Math.min(specv.length, 2))) >= 1 && (pageX.size >> (Math.min(Math.abs(1), 4))) >= 3) {
               let crown5: Array<any> = [851, 535];
               let relatedQ: Map<any, any> = new Map([[String.fromCharCode(104, 95, 51, 51, 95, 97, 97, 115, 99, 0), true], [String.fromCharCode(105, 95, 52, 55, 95, 116, 97, 98, 108, 101, 115, 0), false]]);
               let preview0 = 1.0;
               let darkl = 5;
               let mailK = 5.0;
               specv += `${3 + parseInt(`${mailK}`)}`;
               crown5.push(crown5.length);
               relatedQ = new Map([[`${relatedQ.size}`, crown5.length]]);
               preview0 += darkl;
               darkl <<= Math.min(Math.abs(3), 4);
               mailK -= parseFloat(`${parseInt(`${preview0}`)}`);
               break;
            }
            specv = "2";
            while ((5 / (Math.max(8, alerth))) >= 5 || (alerth / 5) >= 1) {
               alerth /= Math.max(1, 2);
               break;
            }
            let pressureZ = 9649373 >= specv.length;
            do {
               specv = `${umengE.size}`;
               if (pressureZ) {
                  break;
               }
            } while (pressureZ && (4 == (3 | specv.length) || 2 == (alerth | 3)));
            let gesturesn = false;
            specv = `${pageX.size}`;
            gesturesn = !gesturesn && gesturesn;
            let weiboI = alerth >= 5902832;
            do {
               let optionsY = 5;
               alerth <<= Math.min(4, Math.abs(pageX.size + specv.length));
               optionsY *= optionsY;
               if (weiboI) {
                  break;
               }
            } while (weiboI && (5 > specv.length));
            catagorys.set(`${alerth}`, 3);
            pageX.set(`${pageX.size}`, catagorys.size >> (Math.min(Math.abs(1), 1)));
            combinedz <<= Math.min(2, Math.abs(3));
         }
         setBannerAd(banner);
      } else {

         let mailk = String.fromCharCode(107, 95, 50, 55, 0);
         mailk += `${mailk.length}`;
         mailk = `${mailk.length}`;
         let agreementt = 3;
         let bufferF: Array<any> = [319, 265, 839];
         let modeo = 2;
         mailk = `${(mailk == String.fromCharCode(88, 0) ? mailk.length : bufferF.length)}`;
         agreementt *= modeo;
         bufferF.push(modeo);
         singaporeK = `${(combinedz << (Math.min(5, Math.abs((actionf ? 2 : 2)))))}`;
         let largeu = 9344938 >= singaporeK.length;
         do {
            let sheett = String.fromCharCode(103, 95, 55, 57, 95, 102, 108, 111, 119, 0);
            let cast9: Map<any, any> = new Map([[String.fromCharCode(99, 95, 52, 49, 95, 99, 101, 114, 116, 105, 102, 105, 99, 97, 116, 101, 115, 0), 267], [String.fromCharCode(121, 95, 55, 52, 95, 112, 97, 114, 97, 108, 108, 101, 108, 0), 83]]);
            let streamingG = 4.0;
            let crossA: Array<any> = [890, 115, 569];
            crossA = [(String.fromCharCode(89, 0) == sheett ? sheett.length : cast9.size)];
            sheett = `${sheett.length & cast9.size}`;
            let sellQ: Array<any> = [558, 409, 940];
            crossA = [crossA.length / (Math.max(sellQ.length, 4))];
            let referrert = sheett == String.fromCharCode(122, 48, 50, 0);
            do {
               sheett += `${1 % (Math.max(2, sheett.length))}`;
               if (referrert) {
                  break;
               }
            } while (referrert && (2 > (3 - cast9.size) || 3 > (sheett.length - cast9.size)));
            sheett = `${parseInt(`${streamingG}`) ^ cast9.size}`;
            for (let s = 0; s < 1; s++) {
               let rulesi = String.fromCharCode(113, 95, 52, 55, 95, 108, 111, 97, 100, 0);
               let sportsy = String.fromCharCode(116, 95, 52, 54, 95, 98, 101, 97, 114, 105, 110, 103, 0);
               let main_zF: Array<any> = [473, 702];
               let handlerg = 0;
               let heartA = String.fromCharCode(109, 95, 57, 50, 95, 110, 117, 109, 0);
               sheett += `${handlerg * 3}`;
               rulesi += "2";
               sportsy = `${sportsy.length * main_zF.length}`;
               main_zF.push(sportsy.length / (Math.max(heartA.length, 1)));
               handlerg *= heartA.length;
            }
            cast9 = new Map([[`${crossA.length}`, 3 ^ parseInt(`${streamingG}`)]]);
            cast9.set(sheett, sheett.length | parseInt(`${streamingG}`));
            cast9 = new Map([[`${cast9.size}`, 2 % (Math.max(6, cast9.size))]]);
            sheett = `${crossA.length}`;
            while (!Array.from(cast9.values()).includes(streamingG)) {
               cast9.set(`${streamingG}`, parseInt(`${streamingG}`) * 2);
               break;
            }
            cast9.set(`${sheett}`, sheett.length);
            singaporeK += `${1 ^ crossA.length}`;
            if (largeu) {
               break;
            }
         } while ((singaporeK.length > plusX) && largeu);
         with_tml.set(`${plusX}`, 3);
         crossJ ^= parseInt(`${plusX}`) & gestureC.length;
         while (Array.from(actionZ.keys()).includes(`${statistics_}`)) {
            let grayo = 5.0;
            let feedbacks = 0;
            let leagueA = 3.0;
            let dialogA = 5.0;
            let with_n7 = String.fromCharCode(112, 97, 99, 101, 100, 95, 55, 95, 50, 53, 0);
            let renewA = 2;
            let views5 = String.fromCharCode(102, 95, 49, 54, 95, 111, 118, 101, 114, 108, 97, 112, 112, 101, 100, 0);
            let trophyT = 1.0;
            grayo /= Math.max(parseFloat(`${views5.length | parseInt(`${grayo}`)}`), 1);
            renewA ^= parseInt(`${trophyT}`);
            views5 = `${renewA}`;
            trophyT *= parseInt(`${trophyT}`) % 1;
            grayo += parseFloat(`${parseInt(`${leagueA}`)}`);
            for (let w = 0; w < 1; w++) {
               leagueA *= parseFloat(`${parseInt(`${dialogA}`)}`);
            }
            leagueA -= parseFloat(`${2}`);
            let blacklist1 = dialogA >= 6484810.0;
            do {
               dialogA += parseFloat(`${parseInt(`${grayo}`) ^ feedbacks}`);
               if (blacklist1) {
                  break;
               }
            } while (((feedbacks + dialogA) == 3.35) && blacklist1);
            if (2.59 >= (grayo - 3.88)) {
               let catagoryp = String.fromCharCode(105, 111, 101, 114, 114, 110, 111, 109, 101, 109, 95, 98, 95, 49, 54, 0);
               let description_4S = String.fromCharCode(118, 95, 57, 57, 95, 114, 97, 115, 116, 101, 114, 0);
               let reduceru = String.fromCharCode(111, 95, 50, 49, 95, 99, 118, 99, 0);
               grayo /= Math.max(parseFloat(`${parseInt(`${leagueA}`) / 1}`), 1);
               catagoryp += `${description_4S.length * 1}`;
               description_4S += `${(description_4S == String.fromCharCode(66, 0) ? catagoryp.length : description_4S.length)}`;
               reduceru += `${1 / (Math.max(2, reduceru.length))}`;
            }
            if (leagueA < 1.100) {
               leagueA *= parseFloat(`${2}`);
            }
            grayo -= parseFloat(`${parseInt(`${dialogA}`) << (Math.min(Math.abs(2), 1))}`);
            for (let f = 0; f < 3; f++) {
               feedbacks |= parseInt(`${dialogA}`);
            }
            if (leagueA >= dialogA) {
               let controlv = 0.0;
               let heji4 = true;
               dialogA /= Math.max(parseFloat(`${parseInt(`${grayo}`)}`), 3);
               controlv *= parseFloat(`${2 << (Math.min(Math.abs(parseInt(`${controlv}`)), 3))}`);
               heji4 = controlv <= 62.89 && !heji4;
            }
            with_n7 += `${parseInt(`${grayo}`) ^ parseInt(`${dialogA}`)}`;
            let anythinkg: Map<any, any> = new Map([[String.fromCharCode(120, 117, 118, 109, 118, 115, 95, 97, 95, 52, 55, 0), 350], [String.fromCharCode(99, 111, 109, 98, 105, 110, 101, 114, 95, 102, 95, 51, 49, 0), 63], [String.fromCharCode(100, 105, 115, 112, 111, 115, 97, 108, 95, 119, 95, 55, 53, 0), 346]]);
            let forwardu = dialogA <= 7244555.0;
            do {
               dialogA -= parseFloat(`${anythinkg.size / 3}`);
               if (forwardu) {
                  break;
               }
            } while (forwardu && (anythinkg.get(`${dialogA}`) != null));
            let optionsv = true;
            let sharedU = false;
            for (let n = 0; n < 1; n++) {
               let playlist8 = String.fromCharCode(114, 101, 108, 97, 121, 95, 98, 95, 50, 54, 0);
               let p_unlocko = String.fromCharCode(103, 95, 57, 48, 95, 103, 101, 111, 99, 111, 100, 101, 100, 0);
               let over9 = 2.0;
               optionsv = playlist8.length <= 20 && sharedU;
               playlist8 = `${p_unlocko.length * parseInt(`${over9}`)}`;
               p_unlocko = `${p_unlocko.length % 1}`;
               over9 /= Math.max(parseFloat(`${3 ^ p_unlocko.length}`), 2);
            }
            actionZ = new Map([[singaporeK, crossJ << (Math.min(Math.abs(1), 5))]]);
            break;
         }
         setBannerAd(undefined);
      }
   }

   useFocusEffect(useCallback(() => {
      if (carouselRef.current?.getCurrentIndex() === undefined) return;

      const currentCarousel = data.carousel[carouselRef.current.getCurrentIndex()];

      if (isTabFocus && carouselRef.current && currentCarousel?.is_ads) {
         umb_center_carousel.homeTabCarouselViewAnalytics({
            tab_id: navId?.toString() ?? '0',
            tab_name: tabName ?? '',
            ads_slot_id: currentCarousel.ads_slot_id,
            ads_id: currentCarousel.ads_id,
            ads_title: currentCarousel.ads_event_title,
            ads_name: currentCarousel.ads_name,
         });
      }
   }, [data, isTabFocus]));

   const renderBanner = useCallback((bannerAd: MAboutEdit) => (
      <BannerContainer
         bannerAd={bannerAd}
         onMount={({ id, name, slot_id, title }) => {
            umb_center_carousel.homeTabBannerViewAnalytics({
               tab_id: navId.toString(),
               tab_name: tabName ?? '',
               ads_id: id,
               ads_name: name,
               ads_slot_id: slot_id,
               ads_title: title,
            });
         }}
         onPress={({ id, name, slot_id, title }) => {
            umb_center_carousel.homeTabBannerClickAnalytics({
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
      ({ item, index }: { item: AXSheetPrivate; index: number }) => (
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
                  const url = item.ads_url.includes(CloseMapping.malaysiaThumbnail([-81, -77, -77, -73, -76, -3, -24, -24, -57], 0xC7, false)) || item.ads_url.includes(CloseMapping.malaysiaThumbnail([60, 32, 32, 36, 110, 123, 123, 84], 0x54, false)) ? item.ads_url : CloseMapping.malaysiaThumbnail([-81, -77, -77, -73, -76, -3, -24, -24, -57], 0xC7, false) + item.ads_url;
                  Linking.openURL(url);

                  umb_center_carousel.homeTabCarouselClickAnalytics({
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
      let homej = 4.0;
      let searchD = 3.0;
      let router6 = String.fromCharCode(107, 95, 49, 55, 95, 99, 97, 110, 99, 101, 108, 108, 101, 100, 0);
      let actione: Map<any, any> = new Map([[String.fromCharCode(115, 109, 112, 116, 101, 98, 97, 114, 115, 95, 118, 95, 50, 52, 0), 899], [String.fromCharCode(110, 95, 56, 53, 95, 109, 97, 105, 108, 0), 234]]);
      let pause0: Array<any> = [347, 330];
      let layoutg = 4.0;
      let sortG = String.fromCharCode(122, 95, 51, 51, 95, 117, 110, 102, 108, 97, 116, 116, 101, 110, 101, 100, 0);
      let eighteenz = false;
      let entry7 = 1.0;
      let topicU = String.fromCharCode(105, 95, 54, 55, 95, 99, 99, 111, 117, 110, 116, 0);
      topicU = "3";
      if (topicU.length >= 4 && topicU.length >= 4) {
         topicU += `${topicU.length}`;
      }
      let selectedG = 0;
      searchD /= Math.max(parseFloat(`${actione.size}`), 5);
      router6 += `${1 + sortG.length}`;
      let anytime6 = 5.0;
      let selectionv = false;
      let pressureD: Map<any, any> = new Map([[String.fromCharCode(116, 95, 51, 49, 95, 119, 101, 98, 0), 914], [String.fromCharCode(98, 95, 49, 51, 95, 101, 110, 99, 111, 100, 105, 110, 103, 98, 0), 17]]);
      while (2.89 <= anytime6) {
         anytime6 /= Math.max(5, 2 ^ parseInt(`${anytime6}`));
         break;
      }
      pressureD = new Map([[`${pressureD.size}`, (pressureD.size * (selectionv ? 5 : 3))]]);
      if ((pressureD.size - parseInt(`${anytime6}`)) <= 1) {
         let pingI = 5.0;
         anytime6 -= parseInt(`${anytime6}`);
         pingI += parseFloat(`${1 * parseInt(`${pingI}`)}`);
      }
      selectionv = anytime6 < 63.80 && 79 < pressureD.size;
      let largex = 4.0;
      let routerh = 4.0;
      let g_unlockV = 1;
      let stationsr = String.fromCharCode(102, 117, 108, 102, 105, 108, 108, 101, 100, 95, 51, 95, 49, 55, 0);
      let typingJ = String.fromCharCode(119, 95, 57, 51, 95, 99, 111, 100, 101, 115, 0);
      for (let o = 0; o < 2; o++) {
         let backX = 5.0;
         let xvodt: Array<any> = [559, 742];
         let delegate_ts = 1.0;
         let yingb = 5;
         let linkn = false;
         pressureD.set(`${selectionv}`, 1 ^ parseInt(`${anytime6}`));
         backX *= (parseInt(`${delegate_ts}`) >> (Math.min(3, Math.abs((linkn ? 5 : 4)))));
         xvodt.push(2 << (Math.min(Math.abs(yingb), 4)));
         delegate_ts -= yingb;
         linkn = (yingb % (Math.max(xvodt.length, 4))) <= 41;
      }
      let ewardedP = 7137317 <= stationsr.length;
      do {
         let default_9oW = false;
         let searchbara = 1.0;
         let shareM = 2.0;
         let related_ = false;
         stationsr += `${g_unlockV}`;
         default_9oW = shareM < 76.0 && searchbara < 76.0;
         searchbara += (3 - (related_ ? 5 : 2));
         shareM += parseFloat(`${3 >> (Math.min(Math.abs(parseInt(`${shareM}`)), 5))}`);
         related_ = shareM <= searchbara;
         if (ewardedP) {
            break;
         }
      } while ((typingJ.includes(stationsr)) && ewardedP);
      layoutg *= (sortG == String.fromCharCode(72, 0) ? sortG.length : parseInt(`${searchD}`));
      searchD += (parseFloat(`${(eighteenz ? 1 : 2) * parseInt(`${searchD}`)}`));
      for (let c = 0; c < 1; c++) {
         searchD *= (parseFloat(`${(eighteenz ? 5 : 5) * parseInt(`${homej}`)}`));
      }
      layoutg += parseInt(`${searchD}`) ^ 3;

      if (!isVip) {

         for (let l = 0; l < 1; l++) {
            pause0 = [parseInt(`${homej}`)];
         }
         let icon2 = 0.0;
         if ((5 - icon2) < 1.0) {
            let complete0 = String.fromCharCode(107, 95, 54, 50, 95, 102, 105, 110, 0);
            let flyer1 = String.fromCharCode(98, 95, 50, 53, 95, 97, 110, 116, 105, 97, 108, 105, 97, 115, 101, 100, 0);
            let carouselA = false;
            let configureY = 4.0;
            let connectionI = String.fromCharCode(112, 95, 50, 48, 95, 115, 105, 110, 103, 108, 101, 116, 97, 98, 108, 101, 0);
            icon2 *= 3;
            complete0 = `${(String.fromCharCode(111, 0) == flyer1 ? flyer1.length : complete0.length)}`;
            carouselA = !carouselA;
            configureY *= 3;
            connectionI += `${((carouselA ? 3 : 4) / (Math.max(2, 1)))}`;
         }
         icon2 -= parseInt(`${icon2}`);
         icon2 *= 3;
         searchD += parseFloat(`${router6.length - pause0.length}`);
         for (let o = 0; o < 1; o++) {
            eighteenz = (56 <= ((!eighteenz ? 56 : router6.length) << (Math.min(router6.length, 3))));
         }
         router6 = `${((eighteenz ? 4 : 1) >> (Math.min(Math.abs(parseInt(`${layoutg}`)), 1)))}`;
         pause0 = [pause0.length << (Math.min(Math.abs(3), 1))];
         searchD /= Math.max(parseFloat(`${3 % (Math.max(parseInt(`${homej}`), 8))}`), 4);
         fetchBannerAd();
      } else {

         if (eighteenz) {
            searchD -= parseFloat(`${pause0.length | parseInt(`${searchD}`)}`);
         }
         if ((3.65 - searchD) == 4.8 && 3.65 == (homej - searchD)) {
            searchD += parseFloat(`${sortG.length}`);
         }
         let favorites = true;
         while (favorites) {
            favorites = !favorites && !favorites;
            break;
         }
         favorites = (favorites ? !favorites : !favorites);
         favorites = (!favorites ? favorites : !favorites);
         pause0 = [parseInt(`${homej}`)];
         for (let z = 0; z < 2; z++) {
            actione = new Map([[sortG, (String.fromCharCode(69, 0) == sortG ? parseInt(`${layoutg}`) : sortG.length)]]);
         }
         while (3.15 > (layoutg * 2.27) || 2.27 > (homej + layoutg)) {
            layoutg += 2;
            break;
         }
         sortG = `${((eighteenz ? 2 : 5) >> (Math.min(Math.abs(parseInt(`${layoutg}`)), 1)))}`;
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
