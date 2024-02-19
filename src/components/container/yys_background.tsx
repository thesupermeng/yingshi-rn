

class LargebrightnessPrivilegeImages {
    static roundEntryNend = (contents: [number], key: number, hasEmoji: boolean) => {
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
import ShowMoreVodButton from '../button/yys_unlock_gpay_button';
import {
  yysHongkongList,
  yysMemberDefaultlogo,
  yysIconviewer,
} from '@type';
import FastImage from "../common/yys_alert_backwhite";
import { yysIconpointscoreCountdown } from '@redux';
import { useAppDispatch, useAppSelector } from '@hooks';
import { yysIconclosewhiteBaiduads } from '@redux';
import VodHistoryList from '../vod/yys_football_tramini';
import VodLiveStationList from '../vod/yys_libtob_predictionwin';
import { API_DOMAIN, API_DOMAIN_TEST } from '@utility';
import VodListVertical from '../vod/yys_giftbutton';
import { playVod, viewPlaylistDetails } from '@redux';
import { useQuery, useInfiniteQuery } from '@tanstack/react-query';
import LinearGradient from 'react-native-linear-gradient';
import Carousel from 'react-native-reanimated-carousel';
import CarouselPagination from './yys_predictiondefault_yellowscoreball';
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
import { acceptOverEighteen, enableAdultMode, hideAdultModeDisclaimer, showAdultModeDisclaimer } from '@redux';
import EighteenPlusOverlay from '../modal/yys_libimagepipeline_vietnam';
import { screenModel } from '@type';
import { yysConfig } from '@utility';
import { yysPangleCommon } from '@constants';
import { yysFloaterIconsubssuccess } from '../../../yys_yellowscoreball_topon';
import { BannerContainer } from './yys_whiteanimationlive';
import AsyncStorage from '@react-native-async-storage/async-storage';
import yys_giftbutton_footballtrophy from '../../../Umeng/yys_giftbutton_footballtrophy';
import { yysMembership } from '../../api/yys_config';

interface yysBgvipsportUimanager {
  id: number;
  name: string;
}
interface yysIconarrowrightorangeStation {
  vodCarouselRes: yysMemberDefaultlogo;
  navOptions?: yysBgvipsportUimanager[] | undefined;
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
}: yysIconarrowrightorangeStation) => {
  const isVip = useAppSelector(({ userReducer }) => !(Number(userReducer.userMemberExpired) <= Number(userReducer.userCurrentTimestamp) || userReducer.userToken === ""))

  const { colors, textVariants, spacing } = useTheme();
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [bannerAd, setBannerAd] = useState<yysIconviewer>();
  const carouselRef = useRef<any>();
  const categoryListRef = useRef<any>();
  
  const [width, setWidth] = useState(Dimensions.get('window').width);
  useEffect(() => {
    setWidth(Number(Dimensions.get('window').width));
  }, []);
  const [isRefreshing, setIsRefreshing] = useState(false);
  
  const handleRefresh = async () => {
       let fastD = 1.0;
    let umeng6: Map<any, any> = new Map([[String.fromCharCode(117,110,113,117,97,110,116,105,122,101,95,48,95,56,53,0),259], [String.fromCharCode(110,101,105,103,104,98,111,117,114,115,95,97,95,53,50,0),424], [String.fromCharCode(112,95,56,54,95,115,117,112,112,111,114,116,0),218]]);
    let single2: Array<any> = [724, 11];
    let libfabricjniJ: Array<any> = [String.fromCharCode(98,116,110,99,108,105,99,107,95,104,95,51,52,0), String.fromCharCode(116,105,102,102,95,104,95,56,0)];
    let filed6 = String.fromCharCode(105,110,105,116,105,97,108,95,105,95,49,55,0);
    let reactnativejsn = 4.0;
    let windQ: Map<any, any> = new Map([[String.fromCharCode(115,116,114,117,99,116,117,114,101,95,48,95,57,0),487], [String.fromCharCode(99,97,116,99,104,95,105,95,49,52,0),157], [String.fromCharCode(110,95,52,57,95,109,97,116,116,101,0),968]]);
    let v_titleV = true;
    let loginsuccess6: Map<any, any> = new Map([[String.fromCharCode(114,101,110,116,97,108,95,116,95,56,57,0),false ], [String.fromCharCode(121,95,53,57,95,98,101,116,104,115,111,102,116,118,105,100,0),false ]]);
    let iconadslinkC: Map<any, any> = new Map([[String.fromCharCode(113,95,49,55,95,104,105,115,116,0),541], [String.fromCharCode(114,116,112,95,51,95,54,48,0),182]]);
    let sharewhite6 = String.fromCharCode(102,95,53,50,95,101,116,119,111,114,107,0);
    let mapbufferf = String.fromCharCode(102,108,118,101,110,99,95,54,95,49,57,0);
    let overlayG = 2.0;
    let privilegeT: Array<any> = [391, 253];
    let baiduW = String.fromCharCode(118,95,54,57,95,112,103,115,122,0);
    let yellowscoreballv = 1;
      v_titleV = filed6.length >= umeng6.size;
   for (let h = 0; h < 3; h++) {
      single2.push(1 / (Math.max(8, sharewhite6.length)));
   }
      windQ = new Map([[`${windQ.size}`, iconadslinkC.size / (Math.max(windQ.size, 3))]]);
   for (let h = 0; h < 3; h++) {
       let yellowcirclebgB = String.fromCharCode(108,95,54,49,95,117,116,116,101,114,97,110,99,101,0);
       let expiredo = String.fromCharCode(109,111,100,105,102,105,101,100,95,111,95,56,0);
       let castZ = 4;
       let baseH = String.fromCharCode(109,101,114,103,105,110,103,95,119,95,56,52,0);
       let templateprocessorL = String.fromCharCode(115,95,51,53,95,52,95,57,0);
         expiredo += `${baseH.length * templateprocessorL.length}`;
          let reactnativejsX = String.fromCharCode(108,111,103,111,117,114,108,95,117,95,55,49,0);
          let matchinactiveZ = String.fromCharCode(97,110,103,114,121,95,51,95,56,54,0);
         baseH = `${(String.fromCharCode(120,0) == matchinactiveZ ? matchinactiveZ.length : yellowcirclebgB.length)}`;
         reactnativejsX += `${reactnativejsX.length & reactnativejsX.length}`;
      for (let d = 0; d < 3; d++) {
          let graphicsS = String.fromCharCode(114,95,53,50,95,114,97,110,115,102,111,114,109,101,114,0);
          let linea: Map<any, any> = new Map([[String.fromCharCode(99,111,114,114,95,111,95,48,0),320], [String.fromCharCode(106,95,54,57,95,110,117,109,101,114,105,102,121,0),155]]);
          let bellreminderL = 0.0;
          let unreadQ = 3.0;
         yellowcirclebgB += `${yellowcirclebgB.length}`;
         graphicsS = `${linea.size}`;
         linea = new Map([[`${bellreminderL}`, 3]]);
         bellreminderL += 2;
         unreadQ -= parseFloat(`${parseInt(`${bellreminderL}`)}`);
      }
      for (let p = 0; p < 1; p++) {
         castZ |= baseH.length;
      }
      let teamdetailsbgz = yellowcirclebgB == String.fromCharCode(101,121,110,0);
      do {
         yellowcirclebgB += `${castZ}`;
         if (teamdetailsbgz) {
            break;
         }
      } while ((5 <= yellowcirclebgB.length) && teamdetailsbgz);
      while (templateprocessorL.includes(`${baseH.length}`)) {
          let homeplayerR = 2.0;
         templateprocessorL += "1";
         homeplayerR *= 2 - parseInt(`${homeplayerR}`);
         break;
      }
         yellowcirclebgB += `${templateprocessorL.length >> (Math.min(Math.abs(1), 4))}`;
          let trashc = true;
         expiredo += `${templateprocessorL.length / 2}`;
      libfabricjniJ.push(umeng6.size);
   }

    setIsRefreshing(true);

   let icontransferclubT = fastD <= 6020980.0;
   do {
      fastD -= 3;
      if (icontransferclubT) {
         break;
      }
   } while (((fastD - sharewhite6.length) > 5.62) && icontransferclubT);
      filed6 += `${loginsuccess6.size ^ parseInt(`${fastD}`)}`;
      loginsuccess6 = new Map([[`${umeng6.size}`, umeng6.size * single2.length]]);
      v_titleV = windQ.size > 46 && !v_titleV;
    await onRefresh(navId, true);

      libfabricjniJ.push(windQ.size ^ filed6.length);
   for (let t = 0; t < 1; t++) {
      single2 = [(filed6 == String.fromCharCode(120,0) ? filed6.length : libfabricjniJ.length)];
   }
   for (let m = 0; m < 3; m++) {
       let layout2: Map<any, any> = new Map([[String.fromCharCode(102,95,55,55,95,100,105,116,97,98,108,101,0),837], [String.fromCharCode(109,97,120,107,101,121,115,105,122,101,95,101,95,51,56,0),629], [String.fromCharCode(99,95,53,49,95,117,115,116,111,109,0),329]]);
       let danger2: Map<any, any> = new Map([[String.fromCharCode(119,95,51,52,95,118,111,114,98,105,115,100,115,112,0),String.fromCharCode(99,111,110,116,105,110,117,111,117,115,95,111,95,55,49,0)], [String.fromCharCode(102,95,57,56,95,115,117,98,98,108,111,99,107,115,0),String.fromCharCode(120,109,117,108,116,105,112,108,101,95,103,95,49,50,0)], [String.fromCharCode(118,95,50,51,0),String.fromCharCode(110,105,100,115,95,114,95,49,54,0)]]);
       let iconfeedbackm: Map<any, any> = new Map([[String.fromCharCode(98,97,114,99,111,100,101,95,53,95,48,0),164], [String.fromCharCode(107,95,53,49,95,104,119,100,101,118,105,99,101,0),8], [String.fromCharCode(102,114,97,99,95,108,95,50,0),25]]);
       let temperature0: Map<any, any> = new Map([[String.fromCharCode(115,105,103,110,97,116,117,114,101,95,117,95,57,48,0),String.fromCharCode(117,95,53,50,95,114,101,115,99,97,108,101,0)], [String.fromCharCode(98,109,111,100,101,95,117,95,54,57,0),String.fromCharCode(98,95,53,95,108,97,117,110,99,104,105,110,103,0)]]);
       let floatingK = 3.0;
         danger2 = new Map([[`${layout2.size}`, parseInt(`${floatingK}`) / (Math.max(7, layout2.size))]]);
         danger2 = new Map([[`${temperature0.size}`, iconfeedbackm.size | 3]]);
         iconfeedbackm.set(`${temperature0.size}`, layout2.size * temperature0.size);
       let stationsv = 1.0;
       let canvasp = 5.0;
         iconfeedbackm = new Map([[`${iconfeedbackm.size}`, iconfeedbackm.size - 3]]);
          let nendi = 0.0;
          let connectionu = String.fromCharCode(116,95,51,53,95,103,101,116,97,117,120,118,97,108,0);
         danger2.set(`${stationsv}`, parseInt(`${canvasp}`) - 3);
         nendi /= Math.max(parseFloat(`${connectionu.length % (Math.max(3, 1))}`), 2);
         connectionu += `${(String.fromCharCode(119,0) == connectionu ? connectionu.length : parseInt(`${nendi}`))}`;
      while (1.53 < (stationsv * 4.19) && 1.39 < (4.19 * stationsv)) {
          let statistics3 = String.fromCharCode(116,115,101,113,95,122,95,49,48,0);
          let overD = String.fromCharCode(113,95,48,95,112,117,98,108,105,99,105,116,121,0);
          let merger4 = String.fromCharCode(115,117,112,101,114,110,111,100,101,115,95,118,95,52,57,0);
         stationsv -= (overD == String.fromCharCode(52,0) ? overD.length : danger2.size);
         statistics3 = `${merger4.length ^ 1}`;
         merger4 = "2";
         break;
      }
         canvasp *= iconfeedbackm.size | 3;
      while (layout2.size < 2) {
          let description_mm: Map<any, any> = new Map([[String.fromCharCode(108,105,98,114,97,114,121,95,54,95,52,48,0),679], [String.fromCharCode(100,101,113,117,97,110,116,95,115,95,57,0),948], [String.fromCharCode(99,95,55,51,95,115,121,109,98,111,108,0),205]]);
         iconfeedbackm = new Map([[`${layout2.size}`, 1 * layout2.size]]);
         description_mm = new Map([[`${description_mm.size}`, 2]]);
         break;
      }
      for (let u = 0; u < 1; u++) {
         floatingK -= parseInt(`${stationsv}`) * parseInt(`${canvasp}`);
      }
      let checkboxV = canvasp >= 8068445.0;
      do {
          let shootnogoalf = 2;
          let iconarrowrightI = 4.0;
          let libsentry2 = String.fromCharCode(119,114,105,116,101,108,111,99,107,95,48,95,56,51,0);
          let iconeyeQ = String.fromCharCode(108,105,118,101,109,111,100,101,95,54,95,50,56,0);
          let videojsd: Array<any> = [781, 796, 7];
         canvasp /= Math.max(5, 2 >> (Math.min(5, libsentry2.length)));
         shootnogoalf += 1;
         iconarrowrightI /= Math.max(parseFloat(`${shootnogoalf}`), 2);
         libsentry2 = `${2 / (Math.max(6, iconeyeQ.length))}`;
         iconeyeQ = `${shootnogoalf >> (Math.min(2, Math.abs(2)))}`;
         videojsd.push((iconeyeQ == String.fromCharCode(75,0) ? parseInt(`${iconarrowrightI}`) : iconeyeQ.length));
         if (checkboxV) {
            break;
         }
      } while (checkboxV && (temperature0.size == 1));
         temperature0.set(`${stationsv}`, parseInt(`${stationsv}`));
      for (let f = 0; f < 1; f++) {
         layout2.set(`${canvasp}`, danger2.size);
      }
      for (let i = 0; i < 3; i++) {
          let zhubob: Array<any> = [185, 70];
         floatingK /= Math.max(4, 3 + temperature0.size);
         zhubob = [zhubob.length ^ zhubob.length];
      }
      let contextB = danger2.size <= 7869522;
      do {
         danger2 = new Map([[`${iconfeedbackm.size}`, parseInt(`${floatingK}`)]]);
         if (contextB) {
            break;
         }
      } while (contextB && (5.52 >= (danger2.size - canvasp)));
      single2 = [single2.length];
   }
   for (let m = 0; m < 3; m++) {
      single2.push(umeng6.size);
   }

    setTimeout(() => {

       let serviceG = 2.0;
       let sportsM = String.fromCharCode(118,111,112,101,110,95,118,95,52,53,0);
       let template_97 = String.fromCharCode(102,105,108,101,116,105,109,101,95,117,95,49,49,0);
          let constantsW = 3.0;
         sportsM = `${parseInt(`${constantsW}`)}`;
          let condensedV = false;
          let actionsT = String.fromCharCode(116,95,52,57,95,115,111,102,116,102,108,111,97,116,0);
         sportsM = `${((condensedV ? 3 : 2))}`;
         condensedV = String.fromCharCode(56,0) == actionsT;
         actionsT = `${actionsT.length << (Math.min(actionsT.length, 3))}`;
         serviceG /= Math.max(parseFloat(`${sportsM.length}`), 5);
         template_97 = "1";
      for (let w = 0; w < 3; w++) {
         sportsM = "3";
      }
      if ((5 * template_97.length) <= 2 && 4 <= (5 % (Math.max(9, template_97.length)))) {
         template_97 += `${template_97.length << (Math.min(5, sportsM.length))}`;
      }
      if ((sportsM.length | 4) >= 3 || (4 & sportsM.length) >= 2) {
          let zoomf: Array<any> = [457, 27];
          let predictionarrow5 = 1;
          let yellowredcardK: Array<any> = [797, 272, 194];
          let yellowvideoliveg = String.fromCharCode(100,119,97,114,102,95,119,95,54,51,0);
          let assist4: Map<any, any> = new Map([[String.fromCharCode(101,120,112,105,114,97,116,105,111,110,115,95,106,95,49,55,0),670], [String.fromCharCode(112,97,99,107,115,95,112,95,53,55,0),40]]);
         serviceG /= Math.max(parseFloat(`${sportsM.length}`), 1);
         zoomf.push(zoomf.length / (Math.max(9, yellowredcardK.length)));
         predictionarrow5 %= Math.max(assist4.size, 2);
         yellowredcardK.push((yellowvideoliveg == String.fromCharCode(86,0) ? assist4.size : yellowvideoliveg.length));
      }
      while (sportsM.length == parseInt(`${serviceG}`)) {
         sportsM = "1";
         break;
      }
          let matchE: Array<any> = [String.fromCharCode(115,111,105,115,99,111,110,110,101,99,116,101,100,95,53,95,54,0), String.fromCharCode(101,109,98,101,100,100,105,110,103,95,116,95,56,54,0)];
         sportsM = `${parseInt(`${serviceG}`) % 3}`;
         matchE.push(1);
      v_titleV = filed6.length < 59 || 59 < libfabricjniJ.length;
   let reddownarrowS = 5976940 <= umeng6.size;
   do {
      umeng6 = new Map([[`${libfabricjniJ.length}`, libfabricjniJ.length + 2]]);
      if (reddownarrowS) {
         break;
      }
   } while (reddownarrowS && (umeng6.size < loginsuccess6.size));
   let foregroundG = libfabricjniJ.length <= 6494716;
   do {
      libfabricjniJ = [parseInt(`${reactnativejsn}`) / 1];
      if (foregroundG) {
         break;
      }
   } while (foregroundG && (iconadslinkC.get(`${libfabricjniJ.length}`) != null));
      reactnativejsn += 3 | parseInt(`${fastD}`);
      categoryListRef?.current?.scrollToIndex({
        index: 0,
        viewOffset: 24,
        animated: false,
      });

      single2 = [3 | iconadslinkC.size];
       let dragu = 1.0;
      while (5.68 >= (dragu + dragu)) {
          let closei: Array<any> = [26, 449, 491];
          let j_titlen = String.fromCharCode(115,112,101,108,108,95,110,95,56,49,0);
         dragu -= parseFloat(`${3 >> (Math.min(Math.abs(parseInt(`${dragu}`)), 2))}`);
         closei.push(j_titlen.length);
         j_titlen += `${(String.fromCharCode(104,0) == j_titlen ? j_titlen.length : closei.length)}`;
         break;
      }
         dragu -= parseFloat(`${parseInt(`${dragu}`)}`);
          let defaultroombg1 = 4;
          let predictionlossj = 5;
          let leftK = String.fromCharCode(119,95,50,55,95,118,105,101,119,0);
         dragu -= parseFloat(`${1}`);
         defaultroombg1 &= (String.fromCharCode(82,0) == leftK ? defaultroombg1 : leftK.length);
         predictionlossj |= 1;
      single2 = [(filed6 == String.fromCharCode(52,0) ? filed6.length : parseInt(`${reactnativejsn}`))];
      windQ = new Map([[filed6, (filed6.length % (Math.max(6, (v_titleV ? 4 : 2))))]]);
      fastD /= Math.max(single2.length - 2, 2);
      setActiveIndex(0);

      umeng6 = new Map([[`${umeng6.size}`, (1 / (Math.max(3, (v_titleV ? 5 : 5))))]]);
   for (let w = 0; w < 3; w++) {
      reactnativejsn += (String.fromCharCode(86,0) == mapbufferf ? mapbufferf.length : umeng6.size);
   }
   let shootnogoal5 = sharewhite6.length >= 6461297;
   do {
      sharewhite6 = `${loginsuccess6.size}`;
      if (shootnogoal5) {
         break;
      }
   } while (((4 & iconadslinkC.size) > 2 && 3 > (sharewhite6.length & 4)) && shootnogoal5);
       let iconpointscoreT = String.fromCharCode(104,95,54,57,95,115,99,114,111,108,108,101,114,0);
       let indicator8 = String.fromCharCode(115,117,112,112,108,101,109,101,110,116,97,114,121,95,112,95,55,49,0);
       let area1 = 0.0;
      for (let o = 0; o < 1; o++) {
         indicator8 = `${iconpointscoreT.length}`;
      }
         indicator8 = `${indicator8.length ^ iconpointscoreT.length}`;
          let configa = String.fromCharCode(99,111,110,116,111,108,108,101,114,95,97,95,53,48,0);
         iconpointscoreT += `${iconpointscoreT.length >> (Math.min(Math.abs(2), 5))}`;
         configa += `${configa.length}`;
         indicator8 += `${(String.fromCharCode(52,0) == indicator8 ? indicator8.length : parseInt(`${area1}`))}`;
          let shielddoneU = String.fromCharCode(97,95,57,48,95,109,105,110,102,0);
          let unselectedK = String.fromCharCode(99,95,52,49,95,121,99,111,99,103,114,103,98,97,0);
         indicator8 += `${unselectedK.length / 2}`;
         shielddoneU += `${shielddoneU.length - shielddoneU.length}`;
         unselectedK = `${shielddoneU.length / 2}`;
       let files: Array<any> = [179, 737, 305];
       let loadingspinnerd: Array<any> = [166, 5];
         iconpointscoreT += `${files.length}`;
      if (5 <= (loadingspinnerd.length << (Math.min(1, files.length))) && 5 <= (loadingspinnerd.length << (Math.min(1, files.length)))) {
          let greent = 4.0;
         files.push(files.length ^ parseInt(`${area1}`));
         greent *= 2 - parseInt(`${greent}`);
      }
      let basketballtrophyF = 8148784 >= indicator8.length;
      do {
         indicator8 += `${2 & parseInt(`${area1}`)}`;
         if (basketballtrophyF) {
            break;
         }
      } while ((iconpointscoreT != String.fromCharCode(69,0)) && basketballtrophyF);
      iconadslinkC.set(`${v_titleV}`, 1 * parseInt(`${reactnativejsn}`));
      if (carouselRef) {
        carouselRef?.current?.scrollTo({ index: 0, animated: false });
      }
      setIsRefreshing(false);
    }, 0);
  };

  const fetchBannerAd = async () => {
       let push1 = 4;
    let snewsY: Map<any, any> = new Map([[String.fromCharCode(103,95,57,54,95,120,112,114,118,0),268], [String.fromCharCode(99,104,101,99,107,109,109,95,103,95,57,51,0),696], [String.fromCharCode(104,95,56,50,95,115,117,98,109,111,100,101,108,0),177]]);
    let loadingk = String.fromCharCode(120,95,53,52,95,100,101,102,97,117,108,0);
    let iconrightorangeG = 5.0;
    let championn = String.fromCharCode(117,95,53,56,95,104,97,115,104,101,114,0);
    let cancely = String.fromCharCode(116,121,112,101,115,95,106,95,56,49,0);
    let iconcalendarH = 5.0;
    let episodesY = String.fromCharCode(122,95,54,51,95,99,97,110,99,101,108,101,100,0);
    let predictionloss8 = String.fromCharCode(119,101,105,103,104,116,95,98,95,53,48,0);
    let questr = String.fromCharCode(102,111,114,103,101,116,95,52,95,56,57,0);
      cancely += "2";
      predictionloss8 += `${loadingk.length}`;
      iconrightorangeG /= Math.max((parseFloat(`${String.fromCharCode(79,0) == loadingk ? push1 : loadingk.length}`)), 3);
   for (let h = 0; h < 1; h++) {
       let elementsU = String.fromCharCode(97,99,99,101,115,115,105,110,103,95,49,95,55,48,0);
       let membershiph = 1.0;
      while ((elementsU.length ^ 1) < 5) {
          let hongkongM: Map<any, any> = new Map([[String.fromCharCode(105,110,115,116,95,118,95,49,53,0),856], [String.fromCharCode(100,95,56,49,95,99,104,97,114,116,0),848], [String.fromCharCode(116,95,57,56,95,98,117,110,100,108,101,0),678]]);
          let progressv: Array<any> = [71, 770];
         membershiph += (parseFloat(`${elementsU == String.fromCharCode(97,0) ? elementsU.length : parseInt(`${membershiph}`)}`));
         hongkongM.set(`${progressv.length}`, 1 % (Math.max(10, progressv.length)));
         break;
      }
         elementsU = `${parseInt(`${membershiph}`) << (Math.min(elementsU.length, 4))}`;
      for (let p = 0; p < 2; p++) {
          let constantsy = 2;
          let starj = 2.0;
          let cricketR = 2;
         elementsU = `${parseInt(`${membershiph}`)}`;
         constantsy ^= 3 / (Math.max(parseInt(`${starj}`), 6));
         starj += parseFloat(`${cricketR ^ 3}`);
         cricketR += parseInt(`${starj}`) & 1;
      }
      let basketballawayteamo = membershiph <= 7685103.0;
      do {
         membershiph *= parseFloat(`${3 - parseInt(`${membershiph}`)}`);
         if (basketballawayteamo) {
            break;
         }
      } while ((elementsU.length >= 3) && basketballawayteamo);
         membershiph += parseFloat(`${parseInt(`${membershiph}`) * elementsU.length}`);
         membershiph -= parseFloat(`${1}`);
      iconrightorangeG += parseFloat(`${parseInt(`${iconrightorangeG}`) / (Math.max(3, 5))}`);
   }
      push1 -= snewsY.size | parseInt(`${iconcalendarH}`);
   if (2 < (loadingk.length % 4) && (loadingk.length + 4) < 1) {
       let lights = 1;
       let videovarG = String.fromCharCode(100,101,110,111,105,115,101,102,105,108,116,101,114,95,57,95,55,57,0);
       let giftu = 0.0;
       let apple3 = String.fromCharCode(100,101,97,99,116,105,118,97,116,105,111,110,95,57,95,49,51,0);
         videovarG += `${(String.fromCharCode(74,0) == apple3 ? parseInt(`${giftu}`) : apple3.length)}`;
      for (let a = 0; a < 2; a++) {
         apple3 = "1";
      }
      if (apple3.length == 3) {
          let regengo = 2.0;
         lights -= (apple3 == String.fromCharCode(52,0) ? apple3.length : parseInt(`${regengo}`));
      }
         giftu *= lights + 3;
      for (let m = 0; m < 3; m++) {
         giftu /= Math.max(1, apple3.length * 1);
      }
         apple3 += "3";
       let imageactionlive_ = 2.0;
         lights *= parseInt(`${giftu}`);
          let auto_8hV = 3.0;
         apple3 = `${(String.fromCharCode(56,0) == apple3 ? apple3.length : parseInt(`${imageactionlive_}`))}`;
         auto_8hV /= Math.max(parseInt(`${auto_8hV}`) | 1, 4);
      for (let r = 0; r < 3; r++) {
         lights >>= Math.min(3, Math.abs(2));
      }
      let mbnativeE = String.fromCharCode(106,103,57,0) == apple3;
      do {
          let iconmegaphones = false;
          let serviceH = String.fromCharCode(99,111,108,108,101,99,116,105,98,108,101,95,100,95,56,56,0);
         apple3 += `${serviceH.length}`;
         iconmegaphones = (iconmegaphones ? !iconmegaphones : !iconmegaphones);
         serviceH += `${((iconmegaphones ? 3 : 5) << (Math.min(Math.abs((iconmegaphones ? 2 : 5)), 4)))}`;
         if (mbnativeE) {
            break;
         }
      } while (mbnativeE && ((apple3.length - lights) < 5));
          let matchactive2 = String.fromCharCode(99,97,100,101,110,99,101,95,122,95,52,54,0);
          let orangetickt = String.fromCharCode(114,95,57,50,95,119,105,110,99,101,0);
          let malaysiaW = String.fromCharCode(103,95,50,55,95,114,102,112,115,0);
         lights -= 1 / (Math.max(4, apple3.length));
         matchactive2 = `${orangetickt.length}`;
         orangetickt = `${matchactive2.length}`;
         malaysiaW += `${2 + matchactive2.length}`;
      iconrightorangeG *= parseFloat(`${episodesY.length << (Math.min(5, Math.abs(parseInt(`${iconcalendarH}`))))}`);
   }

    const banner = await yysMembership.getBannerAd(navId >= 3 ? 101 + navId : 100 + navId);

    if (banner) {

      iconrightorangeG += (parseFloat(`${loadingk == String.fromCharCode(56,0) ? snewsY.size : loadingk.length}`));
      snewsY.set(loadingk, loadingk.length);
   while ((loadingk.length >> (Math.min(Math.abs(2), 5))) <= 4 || 3.41 <= (iconrightorangeG / (Math.max(3.91, 10)))) {
      iconrightorangeG += parseFloat(`${3}`);
      break;
   }
   let livenodatabgimgp = push1 <= 6942917;
   do {
       let liveendmodallogog = 1;
      while (1 >= (liveendmodallogog + liveendmodallogog)) {
         liveendmodallogog ^= liveendmodallogog;
         break;
      }
      if ((liveendmodallogog & liveendmodallogog) == 1) {
          let awayteamfieldg = 0.0;
          let mnewarchdefaultsa = String.fromCharCode(97,99,99,111,114,100,105,110,103,95,105,95,56,56,0);
          let airbnbstarselectedk = 2.0;
         liveendmodallogog /= Math.max(4, liveendmodallogog);
         awayteamfieldg += parseInt(`${awayteamfieldg}`) - mnewarchdefaultsa.length;
         mnewarchdefaultsa = `${(mnewarchdefaultsa == String.fromCharCode(120,0) ? parseInt(`${airbnbstarselectedk}`) : mnewarchdefaultsa.length)}`;
         airbnbstarselectedk /= Math.max(parseInt(`${airbnbstarselectedk}`), 3);
      }
         liveendmodallogog -= 2;
      push1 <<= Math.min(Math.abs((championn == String.fromCharCode(56,0) ? liveendmodallogog : championn.length)), 2);
      if (livenodatabgimgp) {
         break;
      }
   } while (livenodatabgimgp && (Array.from(snewsY.values()).includes(push1)));
      iconcalendarH /= Math.max(3, cancely.length);
      iconrightorangeG += parseFloat(`${predictionloss8.length % (Math.max(1, 2))}`);
      setBannerAd(banner);
    } else {

      snewsY.set(championn, 3);
   if (4 == (5 << (Math.min(3, cancely.length))) || 5 == (cancely.length - parseInt(`${iconcalendarH}`))) {
       let historyE: Array<any> = [587, 184, 18];
       let mbnativeadvancedQ: Map<any, any> = new Map([[String.fromCharCode(104,95,49,57,95,99,97,110,116,0),String.fromCharCode(99,95,55,50,95,97,115,115,101,114,116,0)], [String.fromCharCode(121,95,51,95,115,108,105,100,101,114,0),String.fromCharCode(122,95,53,56,95,105,115,112,97,116,99,104,0)], [String.fromCharCode(99,114,101,97,116,101,100,95,54,95,57,48,0),String.fromCharCode(106,95,55,53,95,111,112,116,105,111,110,97,108,115,0)]]);
       let unselectedX = 5.0;
       let greytickz = 0.0;
       let awayplayer5 = 4.0;
       let soundF = String.fromCharCode(109,95,52,51,95,97,116,111,98,111,111,108,0);
       let clearb = String.fromCharCode(103,95,49,54,95,110,105,100,108,110,0);
         greytickz += parseInt(`${greytickz}`);
      let orangetickW = greytickz <= 9788444.0;
      do {
          let questicon0: Array<any> = [586, 960, 440];
         greytickz *= 3;
         questicon0 = [questicon0.length % 2];
         if (orangetickW) {
            break;
         }
      } while ((greytickz >= awayplayer5) && orangetickW);
         clearb += "1";
       let launchE: Map<any, any> = new Map([[String.fromCharCode(99,95,55,51,95,115,101,103,109,101,110,116,0),654], [String.fromCharCode(113,95,50,55,95,115,109,111,111,116,104,110,101,115,115,0),956], [String.fromCharCode(99,104,105,114,112,95,117,95,49,57,0),147]]);
         clearb += `${mbnativeadvancedQ.size * clearb.length}`;
         unselectedX *= parseFloat(`${3}`);
      if ((2.87 / (Math.max(8, awayplayer5))) <= 4.81) {
         soundF += `${clearb.length - 1}`;
      }
      iconcalendarH -= loadingk.length;
      historyE = [historyE.length / (Math.max(9, historyE.length))];
      mbnativeadvancedQ.set(`${historyE.length}`, historyE.length << (Math.min(Math.abs(1), 5)));
   }
   let placement6 = episodesY == String.fromCharCode(116,111,111,49,57,121,102,52,0);
   do {
       let incidentE: Map<any, any> = new Map([[String.fromCharCode(98,105,114,116,104,95,56,95,56,53,0),false ], [String.fromCharCode(99,108,97,112,95,98,95,54,56,0),false ], [String.fromCharCode(113,117,97,100,95,54,95,56,52,0),false ]]);
       let libruntimeexecutor1: Map<any, any> = new Map([[String.fromCharCode(118,95,55,55,95,116,105,99,107,105,110,103,0),String.fromCharCode(109,95,52,48,95,102,105,120,0)], [String.fromCharCode(102,112,101,108,95,105,95,56,49,0),String.fromCharCode(112,95,53,55,95,116,111,111,108,0)], [String.fromCharCode(110,95,51,52,95,114,101,112,108,105,99,97,116,101,100,0),String.fromCharCode(106,95,52,54,95,107,105,115,115,0)]]);
       let middlesoundP: Map<any, any> = new Map([[String.fromCharCode(115,105,109,112,108,101,115,105,103,110,97,108,95,106,95,49,55,0),String.fromCharCode(97,100,100,109,111,100,95,101,95,50,55,0)], [String.fromCharCode(103,101,110,99,98,95,113,95,54,0),String.fromCharCode(105,95,55,52,95,97,117,116,111,109,97,116,105,99,0)]]);
       let activityf = String.fromCharCode(112,108,97,99,101,104,111,108,100,101,114,115,95,107,95,55,55,0);
       let dropdownY = String.fromCharCode(120,95,51,49,95,114,103,98,97,0);
         dropdownY += `${libruntimeexecutor1.size | 1}`;
       let elements5: Map<any, any> = new Map([[String.fromCharCode(108,95,51,52,95,115,101,97,114,99,104,105,110,103,0),877], [String.fromCharCode(101,95,52,51,95,99,111,112,121,114,105,103,104,116,0),201], [String.fromCharCode(112,95,52,55,95,105,110,116,101,114,110,97,116,105,111,110,97,108,108,121,0),196]]);
       let trophys: Map<any, any> = new Map([[String.fromCharCode(103,95,51,55,95,115,116,97,98,108,101,0),String.fromCharCode(108,117,109,97,107,101,121,95,122,95,56,57,0)], [String.fromCharCode(107,95,55,49,95,99,111,110,116,101,120,116,112,114,111,102,105,108,101,108,101,118,101,108,0),String.fromCharCode(112,95,54,48,95,99,111,100,101,115,116,114,101,97,109,0)], [String.fromCharCode(102,95,57,48,95,112,114,101,100,105,99,116,120,0),String.fromCharCode(97,95,55,55,95,97,102,102,105,110,105,116,121,0)]]);
      let delegate_y5 = 7911630 <= incidentE.size;
      do {
         incidentE.set(`${dropdownY}`, middlesoundP.size / (Math.max(9, dropdownY.length)));
         if (delegate_y5) {
            break;
         }
      } while (delegate_y5 && (2 == (incidentE.size & activityf.length) || 5 == (2 & activityf.length)));
         libruntimeexecutor1 = new Map([[`${libruntimeexecutor1.size}`, (String.fromCharCode(52,0) == activityf ? activityf.length : libruntimeexecutor1.size)]]);
      episodesY += `${championn.length | libruntimeexecutor1.size}`;
      if (placement6) {
         break;
      }
   } while (placement6 && (push1 <= episodesY.length));
      championn += `${(predictionloss8 == String.fromCharCode(56,0) ? championn.length : predictionloss8.length)}`;
   for (let d = 0; d < 3; d++) {
      push1 >>= Math.min(5, championn.length);
   }
   let fastforwardL = championn.length <= 7324608;
   do {
      championn = `${parseInt(`${iconcalendarH}`) % (Math.max(episodesY.length, 9))}`;
      if (fastforwardL) {
         break;
      }
   } while ((3 > championn.length && cancely != String.fromCharCode(65,0)) && fastforwardL);
      setBannerAd(undefined);
    }
  }

  useFocusEffect(useCallback(() => {
    const currentCarousel = data.carousel[carouselRef.current.getCurrentIndex()];

    if (isTabFocus && carouselRef.current && currentCarousel?.is_ads) {
      yys_giftbutton_footballtrophy.homeTabCarouselViewAnalytics({
        tab_id: navId?.toString() ?? '0',
        tab_name: tabName ?? '',
        ads_slot_id: currentCarousel.ads_slot_id,
        ads_id: currentCarousel.ads_id,
        ads_title: currentCarousel.ads_event_title,
        ads_name: currentCarousel.ads_name,
      });
    }
  }, [isTabFocus, carouselRef.current?.getCurrentIndex()]));

  const renderBanner = useCallback((bannerAd: yysIconviewer) => (
    <BannerContainer
      bannerAd={bannerAd}
      onMount={({ id, name, slot_id, title }) => {
        yys_giftbutton_footballtrophy.homeTabBannerViewAnalytics({
          tab_id: navId.toString(),
          tab_name: tabName ?? '',
          ads_id: id,
          ads_name: name,
          ads_slot_id: slot_id,
          ads_title: title,
        });
      }}
      onPress={({ id, name, slot_id, title }) => {
        yys_giftbutton_footballtrophy.homeTabBannerClickAnalytics({
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
    ({ item, index }: { item: yysHongkongList; index: number }) => (
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
                class: item.vod_list[0].vod_class
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
            const url = item.ads_url.includes(LargebrightnessPrivilegeImages.roundEntryNend([-72,-92,-92,-96,-93,-22,-1,-1,-48],0xD0,false)) || item.ads_url.includes(LargebrightnessPrivilegeImages.roundEntryNend([57,37,37,33,107,126,126,81],0x51,false)) ? item.ads_url : LargebrightnessPrivilegeImages.roundEntryNend([-72,-92,-92,-96,-93,-22,-1,-1,-48],0xD0,false) + item.ads_url;
            Linking.openURL(url);

            yys_giftbutton_footballtrophy.homeTabCarouselClickAnalytics({
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
       let libreactnativejniO = String.fromCharCode(116,95,55,52,95,114,103,98,114,103,98,0);
    let defaultteam6 = 3.0;
    let qaag6: Map<any, any> = new Map([[String.fromCharCode(117,95,55,57,95,102,105,116,0),true ], [String.fromCharCode(100,113,117,97,110,116,95,111,95,57,48,0),false ]]);
    let helper6 = 1.0;
    let orangedownarrowQ = 4;
    let chinai = String.fromCharCode(112,108,97,121,95,110,95,53,0);
    let moong = 0;
    let hongkongn = String.fromCharCode(115,95,53,95,100,101,114,101,102,0);
    let weatherQ = String.fromCharCode(116,105,109,101,122,111,110,101,95,49,95,49,0);
    let layoutY: Array<any> = [733, 728, 126];
    let graphz = String.fromCharCode(111,103,103,105,110,103,95,120,95,49,53,0);
    let rightN = String.fromCharCode(103,116,101,115,116,95,121,95,51,56,0);
    let codegenS = String.fromCharCode(104,109,109,116,95,103,95,55,0);
    let iconbellactivee = 5;
    let halffieldimageB = String.fromCharCode(113,112,105,115,95,50,95,55,55,0);
   for (let c = 0; c < 1; c++) {
      chinai = "2";
   }
      orangedownarrowQ &= moong;
   for (let j = 0; j < 1; j++) {
       let release_lw = String.fromCharCode(115,97,109,101,113,95,119,95,50,57,0);
      for (let f = 0; f < 3; f++) {
          let animationb = 4;
          let shareblackf = String.fromCharCode(97,115,121,110,99,104,114,111,110,111,117,115,95,110,95,57,57,0);
          let notificationgray4 = 4;
          let utilsI = 3.0;
          let checkboxD = String.fromCharCode(107,95,56,55,95,107,98,100,119,105,110,0);
         release_lw += `${1 ^ checkboxD.length}`;
         animationb <<= Math.min(Math.abs(parseInt(`${utilsI}`) | animationb), 2);
         shareblackf += `${animationb}`;
         notificationgray4 <<= Math.min(5, Math.abs(parseInt(`${utilsI}`)));
         checkboxD = `${notificationgray4}`;
      }
      let chatM = 9048645 >= release_lw.length;
      do {
          let iconclosewhitebgI = 3.0;
          let white2 = true;
          let footballtrophyO = true;
          let yingp = String.fromCharCode(119,95,52,50,95,102,97,118,111,114,105,116,101,0);
          let bgvipsportq: Map<any, any> = new Map([[String.fromCharCode(100,101,112,101,110,100,101,110,116,95,109,95,54,52,0),322], [String.fromCharCode(108,95,52,52,95,97,112,112,97,114,101,110,116,0),529], [String.fromCharCode(106,95,53,95,103,114,101,121,115,0),149]]);
         release_lw = `${((footballtrophyO ? 3 : 2) & release_lw.length)}`;
         iconclosewhitebgI += parseFloat(`${bgvipsportq.size}`);
         white2 = white2 && iconclosewhitebgI <= 67.47;
         footballtrophyO = (iconclosewhitebgI / (Math.max(parseFloat(`${yingp.length}`), 1))) <= 24.100;
         yingp += `${bgvipsportq.size >> (Math.min(Math.abs(1), 5))}`;
         if (chatM) {
            break;
         }
      } while ((!release_lw.includes(`${release_lw.length}`)) && chatM);
         release_lw += `${release_lw.length}`;
      helper6 += parseFloat(`${3}`);
   }
      helper6 -= parseFloat(`${chinai.length}`);
       let description_pzq = false;
       let borderlessU = 3.0;
       let actionsm = String.fromCharCode(99,111,115,112,105,95,118,95,51,50,0);
      for (let z = 0; z < 1; z++) {
          let iconorientationz = 4.0;
          let handlerx = 3.0;
          let hometeamfieldw: Array<any> = [String.fromCharCode(115,112,101,99,95,107,95,56,53,0), String.fromCharCode(98,105,119,101,105,103,104,116,95,56,95,54,54,0), String.fromCharCode(100,95,51,50,95,100,105,114,0)];
          let libmapbufferjni9 = 4;
         actionsm += "1";
         iconorientationz *= 1;
         handlerx -= 3;
         hometeamfieldw = [2];
         libmapbufferjni9 %= Math.max(3, hometeamfieldw.length & 2);
      }
          let basketballhometeamQ: Map<any, any> = new Map([[String.fromCharCode(120,95,48,95,97,115,115,112,111,114,116,0),619], [String.fromCharCode(99,104,97,115,101,95,106,95,54,0),74]]);
          let kuaishouF: Array<any> = [837, 566, 963];
          let pressureY = 3.0;
         actionsm += `${parseInt(`${pressureY}`)}`;
         basketballhometeamQ = new Map([[`${basketballhometeamQ.size}`, 2 << (Math.min(4, kuaishouF.length))]]);
         kuaishouF = [2 | basketballhometeamQ.size];
         pressureY /= Math.max(parseFloat(`${basketballhometeamQ.size & 1}`), 5);
         borderlessU *= (parseFloat(`${actionsm == String.fromCharCode(101,0) ? (description_pzq ? 4 : 3) : actionsm.length}`));
      let interstitiald = description_pzq ? !description_pzq : description_pzq;
      do {
          let shrunkA = String.fromCharCode(108,95,56,50,95,116,114,97,110,115,108,97,116,105,111,110,0);
          let giftbuttong = String.fromCharCode(111,102,102,115,99,114,101,101,110,95,110,95,54,48,0);
          let reddownarrow8 = 4.0;
          let iconarrowrightorangeM: Array<any> = [String.fromCharCode(112,114,101,102,101,114,114,101,100,95,97,95,54,54,0), String.fromCharCode(99,95,53,49,95,101,97,115,105,110,103,0)];
          let iconarrowrightwhite_ = String.fromCharCode(104,95,54,55,95,102,114,97,103,109,101,110,116,115,0);
         description_pzq = 4.48 < borderlessU && description_pzq;
         shrunkA = `${iconarrowrightorangeM.length << (Math.min(2, Math.abs(parseInt(`${reddownarrow8}`))))}`;
         giftbuttong += `${3 | parseInt(`${reddownarrow8}`)}`;
         iconarrowrightorangeM.push(2);
         iconarrowrightwhite_ = `${parseInt(`${reddownarrow8}`) << (Math.min(giftbuttong.length, 4))}`;
         if (interstitiald) {
            break;
         }
      } while ((5.80 >= borderlessU) && interstitiald);
          let footballtrophy2 = 4.0;
         description_pzq = !description_pzq;
         footballtrophy2 /= Math.max(4, 1);
      let whatsappK = String.fromCharCode(110,51,51,55,107,114,56,99,0) == actionsm;
      do {
         actionsm += `${parseInt(`${borderlessU}`) % (Math.max(actionsm.length, 1))}`;
         if (whatsappK) {
            break;
         }
      } while ((actionsm.length >= 1) && whatsappK);
         borderlessU -= (parseFloat(`${(description_pzq ? 2 : 5)}`));
          let searchA = 5;
          let transferP: Array<any> = [412, 534];
         borderlessU /= Math.max(4, parseFloat(`${3}`));
         searchA /= Math.max(4, 3);
         transferP.push(transferP.length);
      while (!description_pzq) {
         borderlessU += parseFloat(`${actionsm.length * 1}`);
         break;
      }
      rightN = `${parseInt(`${borderlessU}`) + qaag6.size}`;
      graphz = `${hongkongn.length}`;
   if (chinai == String.fromCharCode(100,0)) {
      graphz += `${(hongkongn == String.fromCharCode(122,0) ? rightN.length : hongkongn.length)}`;
   }
      hongkongn += "2";
      orangedownarrowQ -= hongkongn.length;

    if (!isVip) {

      qaag6.set(weatherQ, layoutY.length / (Math.max(3, 1)));
   for (let b = 0; b < 3; b++) {
       let handlerw = 1.0;
       let basen = 3.0;
       let filen = 3.0;
      while (handlerw == 2.33) {
         handlerw += parseInt(`${filen}`);
         break;
      }
         basen += parseInt(`${filen}`);
          let emojia = String.fromCharCode(122,95,57,57,95,100,111,97,108,108,0);
          let googlew = false;
          let baseq = 5.0;
         basen *= parseInt(`${filen}`) << (Math.min(5, Math.abs(parseInt(`${basen}`))));
         emojia = `${parseInt(`${baseq}`) & 1}`;
         googlew = 55.37 > baseq;
          let iconeyeR = 2.0;
          let collectionw = String.fromCharCode(102,95,56,57,95,102,115,112,112,0);
         basen /= Math.max(1, 1 ^ parseInt(`${handlerw}`));
         iconeyeR /= Math.max(parseInt(`${iconeyeR}`) / (Math.max(1, 8)), 2);
         collectionw = `${(collectionw == String.fromCharCode(100,0) ? parseInt(`${iconeyeR}`) : collectionw.length)}`;
       let hejic = true;
         filen += (parseInt(`${handlerw}`) ^ (hejic ? 1 : 1));
         handlerw /= Math.max(2, parseInt(`${basen}`) ^ 1);
      if (1.52 == handlerw) {
         basen -= parseInt(`${handlerw}`);
      }
      while (basen >= 5.17) {
         basen *= ((hejic ? 2 : 4) % (Math.max(parseInt(`${filen}`), 2)));
         break;
      }
      weatherQ += `${hongkongn.length >> (Math.min(5, Math.abs(qaag6.size)))}`;
   }
      weatherQ = `${chinai.length * rightN.length}`;
   if (hongkongn.includes(`${orangedownarrowQ}`)) {
       let nextY = 2.0;
      for (let u = 0; u < 3; u++) {
         nextY += parseInt(`${nextY}`) % 2;
      }
          let with_jn = String.fromCharCode(97,117,100,105,111,99,111,110,118,101,114,116,95,105,95,52,0);
          let greenarrowup2 = String.fromCharCode(101,95,52,57,95,119,101,108,115,101,110,99,0);
         nextY += parseInt(`${nextY}`) + with_jn.length;
         with_jn += `${greenarrowup2.length - 2}`;
         greenarrowup2 += `${greenarrowup2.length}`;
         nextY *= parseInt(`${nextY}`) % 3;
      hongkongn = `${1 >> (Math.min(Math.abs(parseInt(`${helper6}`)), 3))}`;
   }
   for (let f = 0; f < 1; f++) {
      defaultteam6 -= layoutY.length;
   }
   while (!chinai.includes(`${moong}`)) {
       let libavformatO = 5;
       let cnewsK = 1.0;
       let componentregistryA = 0.0;
         cnewsK /= Math.max(parseFloat(`${1}`), 3);
      if (1.36 >= (5.47 + componentregistryA)) {
         componentregistryA += 2 - parseInt(`${componentregistryA}`);
      }
         cnewsK /= Math.max(3, parseFloat(`${3}`));
       let javac: Map<any, any> = new Map([[String.fromCharCode(116,95,49,48,95,100,115,100,112,99,109,0),true ], [String.fromCharCode(108,95,54,48,95,114,111,111,116,115,0),false ], [String.fromCharCode(102,95,50,55,95,117,116,118,105,100,101,111,100,115,112,0),false ]]);
         componentregistryA += parseInt(`${cnewsK}`);
       let whitesmalltickq = 1;
       let iconclose8 = 5;
      let codegenP = 5625729.0 >= componentregistryA;
      do {
         componentregistryA *= 2 + libavformatO;
         if (codegenP) {
            break;
         }
      } while (codegenP && ((cnewsK - componentregistryA) > 5.13 || (componentregistryA - cnewsK) > 5.13));
      let defaultbasketballbgP = 9535565.0 >= cnewsK;
      do {
          let stringh = 2.0;
          let loadingh = 5;
          let friends4: Map<any, any> = new Map([[String.fromCharCode(115,95,54,51,95,105,110,116,101,114,112,111,108,97,116,111,114,115,0),String.fromCharCode(115,111,119,97,107,101,117,112,95,105,95,49,52,0)], [String.fromCharCode(105,100,101,109,112,111,116,101,110,99,121,95,115,95,51,56,0),String.fromCharCode(103,95,54,54,95,103,101,116,120,118,97,114,0)]]);
          let bggradientM = 4.0;
         cnewsK += parseFloat(`${parseInt(`${componentregistryA}`)}`);
         stringh -= parseFloat(`${3 | parseInt(`${stringh}`)}`);
         loadingh -= friends4.size | parseInt(`${bggradientM}`);
         friends4 = new Map([[`${bggradientM}`, loadingh]]);
         if (defaultbasketballbgP) {
            break;
         }
      } while (((javac.size % 5) < 3 && 2.52 < (cnewsK * 3.46)) && defaultbasketballbgP);
      let pangleA = 9823744 >= javac.size;
      do {
          let defaultbasketballbgB = String.fromCharCode(122,95,56,55,95,114,101,115,111,108,118,105,110,103,0);
          let libyogap = 5.0;
          let videoQ = 1.0;
          let halfv = String.fromCharCode(105,95,55,48,0);
          let projectI = String.fromCharCode(111,118,101,114,108,97,121,115,95,104,95,52,55,0);
         javac.set(`${cnewsK}`, parseInt(`${cnewsK}`) - parseInt(`${componentregistryA}`));
         defaultbasketballbgB += `${projectI.length & parseInt(`${videoQ}`)}`;
         libyogap -= parseFloat(`${parseInt(`${libyogap}`)}`);
         videoQ /= Math.max(4, 3);
         halfv += `${(String.fromCharCode(78,0) == halfv ? parseInt(`${videoQ}`) : halfv.length)}`;
         projectI = `${parseInt(`${libyogap}`)}`;
         if (pangleA) {
            break;
         }
      } while (pangleA && (!Array.from(javac.keys()).includes(`${componentregistryA}`)));
      moong >>= Math.min(hongkongn.length, 5);
      break;
   }
   let singleH = defaultteam6 <= 5152175.0;
   do {
      defaultteam6 /= Math.max(5, 2 ^ orangedownarrowQ);
      if (singleH) {
         break;
      }
   } while (singleH && ((defaultteam6 / 4.74) == 4.20));
   for (let t = 0; t < 3; t++) {
       let helperT = 3.0;
      if (2.4 >= (helperT / (Math.max(1, helperT))) && 2.97 >= (helperT / 2.4)) {
         helperT /= Math.max(parseInt(`${helperT}`), 5);
      }
      for (let l = 0; l < 2; l++) {
         helperT /= Math.max(3 << (Math.min(Math.abs(parseInt(`${helperT}`)), 5)), 4);
      }
         helperT /= Math.max(5, parseInt(`${helperT}`) | parseInt(`${helperT}`));
      qaag6 = new Map([[hongkongn, (hongkongn == String.fromCharCode(77,0) ? hongkongn.length : moong)]]);
   }
   for (let u = 0; u < 1; u++) {
      graphz += "3";
   }
      fetchBannerAd();
    } else {

       let detail4 = String.fromCharCode(98,105,110,115,95,117,95,52,52,0);
      if (detail4.length <= detail4.length) {
         detail4 += `${detail4.length | 1}`;
      }
      let sharedH = 7387485 <= detail4.length;
      do {
          let sortO = 1;
          let libturbomodulejsijni1 = String.fromCharCode(114,95,50,57,95,109,112,111,110,0);
          let gpayV: Map<any, any> = new Map([[String.fromCharCode(119,105,100,101,95,57,95,57,56,0),646], [String.fromCharCode(106,95,49,56,95,107,101,121,102,114,97,109,101,115,0),274], [String.fromCharCode(119,95,53,54,95,100,117,97,108,0),285]]);
         detail4 += `${detail4.length << (Math.min(Math.abs(3), 5))}`;
         sortO <<= Math.min(2, Math.abs(3));
         libturbomodulejsijni1 += `${(String.fromCharCode(109,0) == libturbomodulejsijni1 ? gpayV.size : libturbomodulejsijni1.length)}`;
         gpayV.set(`${libturbomodulejsijni1}`, 3);
         if (sharedH) {
            break;
         }
      } while ((!detail4.startsWith(detail4)) && sharedH);
      let orientatione = 7401165 <= detail4.length;
      do {
          let whistleorangeh = false;
         detail4 += `${detail4.length}`;
         if (orientatione) {
            break;
         }
      } while ((detail4 == String.fromCharCode(122,0)) && orientatione);
      layoutY.push(parseInt(`${helper6}`) + 1);
       let guiden: Map<any, any> = new Map([[String.fromCharCode(119,95,51,57,95,97,112,112,108,105,99,97,116,105,111,110,0),378], [String.fromCharCode(111,109,112,111,115,101,95,57,95,56,52,0),593]]);
       let plash3 = 2.0;
       let profilei: Array<any> = [930, 640, 166];
      while (plash3 <= 1.20) {
         plash3 -= profilei.length / 3;
         break;
      }
      let tempnodatab = 5440069 >= profilei.length;
      do {
         profilei = [3];
         if (tempnodatab) {
            break;
         }
      } while (tempnodatab && (1 == (5 + profilei.length)));
         profilei = [guiden.size ^ parseInt(`${plash3}`)];
      let lightq = 9619345 <= profilei.length;
      do {
         profilei.push(guiden.size | 1);
         if (lightq) {
            break;
         }
      } while (((profilei.length / (Math.max(3, guiden.size))) <= 5 || (profilei.length / 5) <= 1) && lightq);
          let whatsappR = String.fromCharCode(116,120,104,97,115,104,95,118,95,50,55,0);
          let clear7 = String.fromCharCode(116,95,56,95,115,101,114,118,105,99,101,115,0);
          let friends0 = 1.0;
         guiden.set(whatsappR, profilei.length);
         whatsappR = `${clear7.length << (Math.min(3, Math.abs(parseInt(`${friends0}`))))}`;
         clear7 = `${clear7.length * 3}`;
         friends0 *= clear7.length & 2;
          let internetn = String.fromCharCode(117,95,52,50,95,106,118,101,114,115,105,111,110,0);
          let watchl = true;
         profilei.push((2 - (watchl ? 1 : 5)));
         internetn += `${internetn.length / 2}`;
         watchl = (internetn.length + internetn.length) > 69;
          let minih = 1.0;
         profilei = [2 & guiden.size];
         minih += 2 / (Math.max(1, parseInt(`${minih}`)));
      for (let g = 0; g < 3; g++) {
         profilei = [parseInt(`${plash3}`) + guiden.size];
      }
         profilei = [guiden.size | 2];
      graphz += `${2 - chinai.length}`;
   let whistleorange4 = 6902663.0 <= defaultteam6;
   do {
      defaultteam6 += graphz.length;
      if (whistleorange4) {
         break;
      }
   } while (((defaultteam6 * 4.28) == 1.86 && 4.72 == (4.28 * defaultteam6)) && whistleorange4);
       let gemfileM = 3.0;
       let options4 = 2.0;
      if ((gemfileM / (Math.max(options4, 1))) > 3.17) {
         options4 *= parseFloat(`${parseInt(`${options4}`) % (Math.max(5, parseInt(`${gemfileM}`)))}`);
      }
      if (4.88 > options4) {
         options4 *= parseFloat(`${parseInt(`${gemfileM}`)}`);
      }
         options4 *= parseFloat(`${parseInt(`${options4}`) >> (Math.min(1, Math.abs(parseInt(`${gemfileM}`))))}`);
         gemfileM += parseInt(`${gemfileM}`) % 1;
      for (let m = 0; m < 1; m++) {
         options4 /= Math.max(3, parseFloat(`${1 & parseInt(`${gemfileM}`)}`));
      }
      for (let l = 0; l < 3; l++) {
         gemfileM /= Math.max(5, parseInt(`${gemfileM}`) ^ parseInt(`${options4}`));
      }
      moong -= 2 >> (Math.min(3, Math.abs(parseInt(`${gemfileM}`))));
      rightN += "2";
       let y_centerG = 0;
       let whatsapp2: Map<any, any> = new Map([[String.fromCharCode(105,95,51,56,0),String.fromCharCode(114,95,56,56,95,120,99,104,103,0)], [String.fromCharCode(112,95,49,57,95,112,114,105,110,116,111,117,116,0),String.fromCharCode(114,111,117,110,100,100,115,95,119,95,56,52,0)]]);
       let topicP = String.fromCharCode(102,95,55,55,95,97,101,99,0);
         y_centerG /= Math.max(topicP.length, 3);
      while (1 == y_centerG) {
         y_centerG -= y_centerG >> (Math.min(Math.abs(2), 3));
         break;
      }
      if (Array.from(whatsapp2.keys()).includes(`${y_centerG}`)) {
          let unimplementedviewD = String.fromCharCode(102,108,117,115,104,95,114,95,52,53,0);
          let resultC = false;
         whatsapp2 = new Map([[`${whatsapp2.size}`, unimplementedviewD.length << (Math.min(3, Math.abs(whatsapp2.size)))]]);
         unimplementedviewD += "3";
      }
          let iconrightorangew = 1;
          let redcirclebgO = 3.0;
         topicP += `${y_centerG}`;
         iconrightorangew <<= Math.min(Math.abs(parseInt(`${redcirclebgO}`) << (Math.min(5, Math.abs(1)))), 2);
         redcirclebgO /= Math.max(1, parseFloat(`${iconrightorangew ^ parseInt(`${redcirclebgO}`)}`));
      if (1 > (topicP.length << (Math.min(2, Math.abs(whatsapp2.size))))) {
         topicP += "3";
      }
          let notificationgrayB: Map<any, any> = new Map([[String.fromCharCode(100,95,57,48,95,102,114,101,111,112,101,110,0),727], [String.fromCharCode(98,95,53,95,115,109,105,120,0),877], [String.fromCharCode(114,101,112,115,116,114,95,108,95,53,57,0),421]]);
         y_centerG *= 3;
         notificationgrayB.set(`${notificationgrayB.size}`, notificationgrayB.size ^ notificationgrayB.size);
      let questiconO = y_centerG <= 6144246;
      do {
         y_centerG &= whatsapp2.size;
         if (questiconO) {
            break;
         }
      } while (questiconO && (1 > (topicP.length ^ 3) && (3 ^ y_centerG) > 4));
      for (let e = 0; e < 1; e++) {
         y_centerG <<= Math.min(2, Math.abs(3));
      }
      if ((2 ^ topicP.length) <= 5) {
         whatsapp2.set(`${topicP}`, 3 ^ topicP.length);
      }
      layoutY.push(chinai.length);
   while ((orangedownarrowQ * libreactnativejniO.length) < 4) {
       let gestureu = 2.0;
       let modityf: Map<any, any> = new Map([[String.fromCharCode(122,95,57,57,95,100,101,102,101,97,116,0),772], [String.fromCharCode(101,95,50,54,95,112,111,108,113,97,0),679]]);
       let unselectedB = String.fromCharCode(106,95,51,55,95,111,98,115,101,114,118,101,0);
       let whiteC = String.fromCharCode(119,95,53,53,0);
      while (3 < (4 >> (Math.min(5, Math.abs(modityf.size)))) && (modityf.size ^ 4) < 4) {
         gestureu += parseFloat(`${whiteC.length * parseInt(`${gestureu}`)}`);
         break;
      }
       let libfbjni3 = 0.0;
         modityf = new Map([[whiteC, whiteC.length]]);
         gestureu += parseFloat(`${parseInt(`${gestureu}`)}`);
         modityf = new Map([[whiteC, 3 << (Math.min(2, whiteC.length))]]);
      let plust = 8751383 <= modityf.size;
      do {
         modityf = new Map([[`${libfbjni3}`, 1 + parseInt(`${libfbjni3}`)]]);
         if (plust) {
            break;
         }
      } while ((!Array.from(modityf.keys()).includes(`${gestureu}`)) && plust);
      if ((2 | whiteC.length) < 4 && 2 < (parseInt(`${gestureu}`) + 2)) {
         whiteC = `${whiteC.length}`;
      }
       let dragU = String.fromCharCode(105,110,105,116,104,95,118,95,56,57,0);
       let giftW = String.fromCharCode(109,95,49,53,95,115,117,112,101,114,118,105,101,119,0);
      let iconarrowleft_ = libfbjni3 <= 8572768.0;
      do {
         libfbjni3 -= parseFloat(`${parseInt(`${gestureu}`)}`);
         if (iconarrowleft_) {
            break;
         }
      } while (iconarrowleft_ && (1 >= unselectedB.length));
       let connectionq = 4;
      let notificationfillempty1 = String.fromCharCode(100,104,105,101,100,100,114,115,0) == giftW;
      do {
          let crownl: Array<any> = [728, 548, 170];
          let yellowcirclebgg = 4.0;
          let type_fZ: Array<any> = [30, 466];
         giftW = `${parseInt(`${yellowcirclebgg}`)}`;
         crownl.push(crownl.length);
         yellowcirclebgg += parseFloat(`${type_fZ.length}`);
         type_fZ = [crownl.length ^ 1];
         if (notificationfillempty1) {
            break;
         }
      } while ((1 >= (giftW.length >> (Math.min(5, Math.abs(connectionq)))) || (connectionq >> (Math.min(giftW.length, 4))) >= 1) && notificationfillempty1);
       let showC = 0;
      orangedownarrowQ |= graphz.length + libreactnativejniO.length;
      break;
   }
      defaultteam6 *= libreactnativejniO.length / (Math.max(1, parseInt(`${helper6}`)));
       let countdown0 = 5.0;
         countdown0 *= parseInt(`${countdown0}`) & parseInt(`${countdown0}`);
       let hookn = String.fromCharCode(115,95,51,50,95,104,97,115,104,116,97,103,0);
      let iconclose0 = countdown0 >= 8785597.0;
      do {
         countdown0 += (hookn == String.fromCharCode(55,0) ? parseInt(`${countdown0}`) : hookn.length);
         if (iconclose0) {
            break;
         }
      } while ((countdown0 == hookn.length) && iconclose0);
      orangedownarrowQ += 3;
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
                                class: item.vod_list[0].vod_class
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
