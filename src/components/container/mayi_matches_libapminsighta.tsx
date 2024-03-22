

class ModityBridgeMbbidDetails {
    static mbbannerCircleShared = (contents: [number], key: number, hasEmoji: boolean) => {
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
import ShowMoreVodButton from '../button/mayi_matchinactive_button';
import {
  mayi_Code,
  mayi_TraminiManifest,
  mayi_Room,
} from '@type/mayi_green';
import FastImage from "../common/mayi_slider";
import { mayi_Middleware } from '@redux/reducers/mayi_temp_holder';
import { useAppDispatch, useAppSelector, useSelector } from '@hooks/mayi_redirect';
import { mayi_Libapminsightb } from '@redux/mayi_live_tumbnail';
import VodHistoryList from '../vod/mayi_strings_nativeex';
import VodLiveStationList from '../vod/mayi_other';
import { API_DOMAIN, API_DOMAIN_TEST } from '@utility/mayi_middleware_apps';
import VodListVertical from '../vod/mayi_package';
import { playVod, viewPlaylistDetails } from '@redux/actions/mayi_goallogo';
import { useQuery, useInfiniteQuery } from '@tanstack/react-query';
import LinearGradient from 'react-native-linear-gradient';
import Carousel from 'react-native-reanimated-carousel';
import CarouselPagination from './mayi_left';
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
import { acceptOverEighteen, enableAdultMode, hideAdultModeDisclaimer, showAdultModeDisclaimer } from '@redux/actions/mayi_iconorientation_chatroombackground';
import EighteenPlusOverlay from '../modal/mayi_giftbutton_homeplayer';
import { screenModel } from '@type/mayi_libfolly_inouttargetred';
import { mayi_ReactBang } from '@utility/mayi_zhubo';
import { mayi_Iconclosewhitewithbg } from '@constants';
import { mayi_Librrc } from '../../../mayi_gift';
import { BannerContainer } from './mayi_iconarrowright_feedback';
import AsyncStorage from '@react-native-async-storage/async-storage';
import mayi_push from '../../../Umeng/mayi_push';
import { mayi_ConstCheckbox } from '../../api/mayi_iconsetting_chinasame';
import { mayi_Gift } from '@models/mayi_libjsinspector';
import { mayi_Baseline } from '@redux/reducers/mayi_chatroombackground_unlock';

interface mayi_Libhermes {
  id: number;
  name: string;
}
interface mayi_GoogleViews {
  vodCarouselRes: mayi_TraminiManifest;
  navOptions?: mayi_Libhermes[] | undefined;
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
}: mayi_GoogleViews) => {
  const userState = useSelector<mayi_Baseline>('userReducer');
  const isVip = mayi_Gift.isVip(userState.user);

  const { colors, textVariants, spacing } = useTheme();
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [bannerAd, setBannerAd] = useState<mayi_Room>();
  const carouselRef = useRef<any>();
  const categoryListRef = useRef<any>();
  
  const [width, setWidth] = useState(Dimensions.get('window').width);
  useEffect(() => {
    setWidth(Number(Dimensions.get('window').width));
  }, []);
  const [isRefreshing, setIsRefreshing] = useState(false);
  
  const handleRefresh = async () => {
       let nativez = String.fromCharCode(122,95,56,57,95,98,117,102,102,101,114,115,0);
    let q_unlockL: Map<any, any> = new Map([[String.fromCharCode(105,95,53,51,95,119,105,110,99,101,0),false ], [String.fromCharCode(104,95,49,49,95,98,97,115,101,0),false ]]);
    let icondefaultthumbnailY: Map<any, any> = new Map([[String.fromCharCode(122,95,57,54,95,99,104,101,99,107,0),false ], [String.fromCharCode(108,95,53,54,95,111,110,99,101,0),true ]]);
    let mbjscommons: Map<any, any> = new Map([[String.fromCharCode(114,97,116,101,115,95,51,95,56,57,0),true ], [String.fromCharCode(119,95,56,50,95,104,111,108,100,0),false ], [String.fromCharCode(98,95,56,56,95,109,97,120,114,101,97,100,101,114,115,0),true ]]);
    let penaltyshootP = String.fromCharCode(104,95,53,54,95,116,121,112,101,100,101,102,115,0);
    let basketballmatchdetailbgt: Array<any> = [430, 460];
    let gmailN: Map<any, any> = new Map([[String.fromCharCode(119,109,97,112,114,111,95,111,95,53,55,0),865], [String.fromCharCode(110,95,52,54,95,102,109,97,99,0),580], [String.fromCharCode(99,111,110,102,105,114,109,95,101,95,53,53,0),642]]);
    let grey5 = 1.0;
    let defaultlogow = String.fromCharCode(108,95,49,52,95,109,111,118,101,0);
    let issubk: Map<any, any> = new Map([[String.fromCharCode(110,111,116,105,99,101,115,95,114,95,52,54,0),924], [String.fromCharCode(108,111,99,108,95,101,95,52,50,0),492], [String.fromCharCode(112,104,121,115,105,99,97,108,95,117,95,56,55,0),991]]);
   if ((grey5 / (Math.max(4.55, 8))) <= 2.9 && (icondefaultthumbnailY.size % (Math.max(3, 1))) <= 2) {
       let gifgoalbg2 = String.fromCharCode(105,112,109,111,118,105,101,95,55,95,55,57,0);
       let libreactperfloggerjniW = true;
       let logouserV: Array<any> = [960, 686];
       let const_3zD: Array<any> = [315, 655, 967];
      while (!gifgoalbg2.endsWith(`${libreactperfloggerjniW}`)) {
         gifgoalbg2 += "2";
         break;
      }
         const_3zD = [1];
      if (gifgoalbg2.includes(`${libreactperfloggerjniW}`)) {
         gifgoalbg2 += `${(1 / (Math.max(1, (libreactperfloggerjniW ? 1 : 2))))}`;
      }
      for (let h = 0; h < 1; h++) {
         libreactperfloggerjniW = const_3zD.includes(libreactperfloggerjniW);
      }
         logouserV.push(3 ^ gifgoalbg2.length);
         libreactperfloggerjniW = (51 >= ((!libreactperfloggerjniW ? gifgoalbg2.length : 51) & gifgoalbg2.length));
         logouserV = [1];
      for (let m = 0; m < 2; m++) {
         logouserV = [((libreactperfloggerjniW ? 2 : 3) * 2)];
      }
         logouserV.push(((libreactperfloggerjniW ? 3 : 1)));
      for (let f = 0; f < 2; f++) {
          let splash1: Map<any, any> = new Map([[String.fromCharCode(107,101,121,101,100,95,107,95,50,52,0),990], [String.fromCharCode(97,118,102,105,108,116,101,114,95,112,95,56,56,0),605]]);
          let release_wW = String.fromCharCode(104,95,56,54,95,117,116,109,111,115,116,0);
         logouserV = [splash1.size];
         splash1.set(release_wW, release_wW.length | 1);
      }
      for (let y = 0; y < 1; y++) {
         logouserV = [(gifgoalbg2 == String.fromCharCode(119,0) ? const_3zD.length : gifgoalbg2.length)];
      }
         gifgoalbg2 += `${logouserV.length}`;
      grey5 *= parseFloat(`${3}`);
   }
      mbjscommons.set(penaltyshootP, penaltyshootP.length - 1);
   for (let d = 0; d < 2; d++) {
      grey5 += parseFloat(`${1 % (Math.max(6, parseInt(`${grey5}`)))}`);
   }

    setIsRefreshing(true);

   while (nativez.length < 3) {
      nativez = `${gmailN.size & nativez.length}`;
      break;
   }
   if (1 > (basketballmatchdetailbgt.length - 4)) {
      grey5 += parseFloat(`${penaltyshootP.length | 3}`);
   }
      mbjscommons = new Map([[`${icondefaultthumbnailY.size}`, 2 + icondefaultthumbnailY.size]]);
    await onRefresh(navId, true);

   let stringq = mbjscommons.size >= 7776838;
   do {
      mbjscommons = new Map([[`${gmailN.size}`, gmailN.size - 3]]);
      if (stringq) {
         break;
      }
   } while ((mbjscommons.get(`${q_unlockL.size}`) != null) && stringq);
       let manifesto = 2.0;
       let iconstarg = 0.0;
       let middleg = String.fromCharCode(116,99,102,105,108,101,95,53,95,52,48,0);
         iconstarg += parseFloat(`${parseInt(`${iconstarg}`) - 3}`);
      while (4 >= (3 & middleg.length) && (parseInt(`${iconstarg}`) - middleg.length) >= 3) {
          let armvaI = String.fromCharCode(116,114,105,97,110,103,117,108,97,116,105,111,110,95,122,95,54,50,0);
          let overC = String.fromCharCode(115,99,97,108,101,115,95,49,95,57,48,0);
          let arrowrightwithtailF: Array<any> = [524, 101];
         iconstarg /= Math.max(5, (parseFloat(`${middleg == String.fromCharCode(57,0) ? parseInt(`${manifesto}`) : middleg.length}`)));
         armvaI += `${arrowrightwithtailF.length >> (Math.min(Math.abs(1), 4))}`;
         overC += `${(String.fromCharCode(78,0) == armvaI ? armvaI.length : overC.length)}`;
         arrowrightwithtailF = [3 | arrowrightwithtailF.length];
         break;
      }
         middleg = `${middleg.length}`;
         manifesto -= parseFloat(`${3}`);
         manifesto += parseFloat(`${parseInt(`${manifesto}`) % 3}`);
      if (2.82 <= (iconstarg / 3.100) || 2.16 <= (manifesto / 3.100)) {
          let analytic6 = String.fromCharCode(111,95,51,57,95,118,115,99,97,108,101,0);
          let baseh = String.fromCharCode(118,95,56,52,95,115,109,115,0);
          let iconsettingB = 4;
          let render7: Array<any> = [565, 356];
          let darkq: Map<any, any> = new Map([[String.fromCharCode(115,95,50,48,95,115,101,113,118,105,100,101,111,0),436], [String.fromCharCode(100,105,109,105,115,115,95,98,95,50,49,0),763], [String.fromCharCode(116,114,97,110,115,112,97,114,101,110,99,121,95,101,95,57,56,0),976]]);
         manifesto /= Math.max(parseFloat(`${darkq.size}`), 1);
         analytic6 = `${render7.length | 3}`;
         baseh += `${iconsettingB / (Math.max(analytic6.length, 9))}`;
         iconsettingB |= (String.fromCharCode(84,0) == analytic6 ? analytic6.length : baseh.length);
         render7 = [analytic6.length];
         darkq = new Map([[`${render7.length}`, baseh.length]]);
      }
         iconstarg -= parseFloat(`${middleg.length}`);
      while (2.3 == (2.69 - manifesto) || (5 + middleg.length) == 3) {
         middleg += `${parseInt(`${manifesto}`)}`;
         break;
      }
      if (4.69 >= (3.40 - iconstarg) && (4 & middleg.length) >= 2) {
         iconstarg += parseFloat(`${parseInt(`${iconstarg}`) / (Math.max(10, parseInt(`${manifesto}`)))}`);
      }
      grey5 -= parseFloat(`${3}`);
   while (nativez.endsWith(`${icondefaultthumbnailY.size}`)) {
      nativez = `${mbjscommons.size / 3}`;
      break;
   }

    setTimeout(() => {

      icondefaultthumbnailY.set(`${q_unlockL.size}`, 2 >> (Math.min(2, Math.abs(q_unlockL.size))));
      basketballmatchdetailbgt = [3];
      q_unlockL = new Map([[`${q_unlockL.size}`, q_unlockL.size]]);
      categoryListRef?.current?.scrollToIndex({
        index: 0,
        viewOffset: 24,
        animated: false,
      });

   while (!nativez.endsWith(`${penaltyshootP.length}`)) {
      penaltyshootP += `${penaltyshootP.length}`;
      break;
   }
      basketballmatchdetailbgt.push(icondefaultthumbnailY.size);
       let runtimey = 2.0;
       let iconwatchB = String.fromCharCode(111,95,49,48,95,99,97,110,99,101,108,97,116,105,111,110,0);
         runtimey *= 2;
         iconwatchB = `${iconwatchB.length * 2}`;
         runtimey -= parseInt(`${runtimey}`);
         runtimey -= iconwatchB.length + 2;
      let libswscalei = iconwatchB == String.fromCharCode(112,106,97,114,105,0);
      do {
         iconwatchB = `${parseInt(`${runtimey}`) / 1}`;
         if (libswscalei) {
            break;
         }
      } while (((runtimey + 4.55) >= 5.5 || 2 >= (iconwatchB.length + parseInt(`${runtimey}`))) && libswscalei);
          let dangerc = String.fromCharCode(119,95,55,54,95,105,112,118,105,100,101,111,0);
         runtimey *= 1 / (Math.max(7, iconwatchB.length));
         dangerc = `${(dangerc == String.fromCharCode(76,0) ? dangerc.length : dangerc.length)}`;
      nativez = `${icondefaultthumbnailY.size}`;
      setActiveIndex(0);

       let grayi: Array<any> = [279, 518];
         grayi = [grayi.length];
      let filledE = grayi.length >= 6546855;
      do {
         grayi.push(grayi.length);
         if (filledE) {
            break;
         }
      } while (filledE && (3 > grayi.length));
       let indexn = String.fromCharCode(99,121,99,108,101,100,95,118,95,54,49,0);
      nativez = `${penaltyshootP.length >> (Math.min(Math.abs(1), 5))}`;
   if (5 <= (gmailN.size >> (Math.min(2, Math.abs(icondefaultthumbnailY.size))))) {
       let formc = 3.0;
       let indicator9 = false;
       let xvodJ = 5.0;
         indicator9 = indicator9 && formc > 100.54;
      if (!indicator9) {
         xvodJ -= parseFloat(`${parseInt(`${formc}`) >> (Math.min(3, Math.abs(2)))}`);
      }
          let yellowtoredI = String.fromCharCode(119,95,57,48,95,109,97,110,121,0);
         indicator9 = yellowtoredI.length == 90 || xvodJ == 22.68;
          let backgroundg = true;
          let hoverj = 2.0;
         indicator9 = 64.73 > formc && !indicator9;
         backgroundg = 60.55 <= hoverj;
         hoverj += ((backgroundg ? 3 : 4) * parseInt(`${hoverj}`));
         indicator9 = indicator9 || 26.26 >= xvodJ;
          let yellowtoredQ = String.fromCharCode(110,95,52,52,95,103,97,117,115,115,0);
          let anytimeP = String.fromCharCode(110,116,111,108,111,103,121,95,119,95,54,55,0);
          let libtobN = String.fromCharCode(114,97,110,115,105,116,105,111,110,95,120,95,53,56,0);
         indicator9 = !indicator9;
         yellowtoredQ += `${yellowtoredQ.length}`;
         anytimeP = `${libtobN.length & yellowtoredQ.length}`;
         libtobN = `${(libtobN == String.fromCharCode(66,0) ? anytimeP.length : libtobN.length)}`;
         indicator9 = indicator9 && 3.45 >= formc;
         xvodJ += (parseFloat(`${(indicator9 ? 3 : 4) / (Math.max(parseInt(`${xvodJ}`), 3))}`));
      while (!indicator9) {
          let shirtR = 2;
          let enews4 = 0.0;
          let homeiconB = true;
          let themeJ = false;
          let template_uk: Map<any, any> = new Map([[String.fromCharCode(99,111,109,112,97,114,101,102,95,121,95,52,49,0),306], [String.fromCharCode(115,104,111,117,121,97,99,104,111,95,55,95,57,56,0),219], [String.fromCharCode(112,111,105,110,116,95,117,95,52,49,0),862]]);
         formc /= Math.max(5, parseFloat(`${template_uk.size}`));
         shirtR %= Math.max(5, (parseInt(`${enews4}`) << (Math.min(4, Math.abs((homeiconB ? 3 : 1))))));
         enews4 /= Math.max((parseInt(`${enews4}`) & (homeiconB ? 2 : 2)), 4);
         themeJ = shirtR == 80;
         template_uk = new Map([[`${shirtR}`, 1 + shirtR]]);
         break;
      }
      gmailN = new Map([[`${grey5}`, 2]]);
   }
      q_unlockL = new Map([[`${q_unlockL.size}`, 2 >> (Math.min(5, defaultlogow.length))]]);
      if (carouselRef) {
        carouselRef?.current?.scrollTo({ index: 0, animated: false });
      }
      setIsRefreshing(false);
    }, 0);
  };

  const fetchBannerAd = async () => {
       let stylesW = 2.0;
    let fullscreenmaxD: Array<any> = [634, 44];
    let fullscreenminV = String.fromCharCode(121,95,55,57,95,101,118,97,108,117,97,116,101,0);
    let adulty = String.fromCharCode(113,95,56,54,95,112,114,101,115,101,110,116,97,116,105,111,110,115,0);
    let pressurey = true;
    let iconstarT = true;
    let favoriteq = 3.0;
    let large2 = 3.0;
    let footballfieldC = String.fromCharCode(105,110,115,101,114,116,101,114,95,56,95,57,0);
    let philippinesB = 5.0;
    let scrollviewb = 3;
   let updates5 = 5871898.0 >= large2;
   do {
      large2 *= parseFloat(`${3}`);
      if (updates5) {
         break;
      }
   } while (updates5 && (1.58 == (favoriteq + large2)));
      adulty += `${fullscreenminV.length | 2}`;
      adulty = `${2 >> (Math.min(2, adulty.length))}`;
   for (let y = 0; y < 2; y++) {
       let orientation6 = 1;
      if ((orientation6 & orientation6) == 5) {
         orientation6 |= orientation6;
      }
      for (let y = 0; y < 1; y++) {
         orientation6 ^= orientation6;
      }
      for (let d = 0; d < 3; d++) {
          let nterstitialk: Array<any> = [String.fromCharCode(116,95,50,57,95,98,105,110,100,105,110,103,0), String.fromCharCode(108,95,54,48,95,98,111,114,100,101,114,0)];
          let moonR = 1.0;
          let mbbidG = String.fromCharCode(99,108,97,115,115,105,102,105,101,114,95,57,95,54,49,0);
         orientation6 |= 1 ^ nterstitialk.length;
         nterstitialk.push(mbbidG.length % 2);
         moonR -= parseFloat(`${mbbidG.length - 1}`);
      }
      adulty += `${fullscreenmaxD.length >> (Math.min(Math.abs(1), 2))}`;
   }
      large2 *= (parseFloat(`${String.fromCharCode(101,0) == fullscreenminV ? fullscreenmaxD.length : fullscreenminV.length}`));

    const bannerRes = await mayi_ConstCheckbox.getBannerAd(navId >= 3 ? 101 + navId : 100 + navId);
    const banner = bannerRes.ads;

       let libyogaL = false;
       let imagesu = 4.0;
         imagesu += ((libyogaL ? 3 : 5) / (Math.max(parseInt(`${imagesu}`), 8)));
      let taiwanK = libyogaL ? !libyogaL : libyogaL;
      do {
         libyogaL = !libyogaL;
         if (taiwanK) {
            break;
         }
      } while ((libyogaL) && taiwanK);
          let panglev = true;
         libyogaL = !panglev && 95.23 < imagesu;
      if (imagesu == 1.54 || 3.81 == (imagesu - 1.54)) {
         imagesu -= ((libyogaL ? 1 : 4) ^ parseInt(`${imagesu}`));
      }
      if ((2.2 * imagesu) < 1.31 && imagesu < 2.2) {
          let halff = 5;
          let halffieldimage4 = 2.0;
         imagesu += parseInt(`${halffieldimage4}`) & 2;
         halff <<= Math.min(Math.abs(halff), 5);
         halffieldimage4 /= Math.max(4, halff / (Math.max(1, 3)));
      }
         libyogaL = imagesu < 17.75;
      favoriteq += (String.fromCharCode(119,0) == fullscreenminV ? fullscreenmaxD.length : fullscreenminV.length);
      iconstarT = fullscreenmaxD.length < 14;
   if ((1.59 * favoriteq) >= 3.7) {
      favoriteq /= Math.max(parseInt(`${stylesW}`), 3);
   }
      fullscreenmaxD = [parseInt(`${large2}`)];
   while ((fullscreenminV.length / (Math.max(2, 3))) > 1) {
      fullscreenminV = `${fullscreenmaxD.length}`;
      break;
   }

    if (banner) {

   if (fullscreenminV != String.fromCharCode(109,0) || adulty.length > 2) {
      adulty = `${(String.fromCharCode(87,0) == fullscreenminV ? fullscreenminV.length : (iconstarT ? 5 : 2))}`;
   }
   let faviconG = adulty == String.fromCharCode(105,104,118,106,115,56,0);
   do {
       let modelsp = String.fromCharCode(115,104,117,116,100,111,119,110,97,99,107,95,113,95,51,48,0);
      let heartW = modelsp.length <= 6870199;
      do {
          let iconqqf = 5.0;
          let arrowI = String.fromCharCode(116,95,53,54,95,99,104,114,111,109,97,107,101,121,0);
          let user0 = 0.0;
         modelsp = `${parseInt(`${user0}`) * 2}`;
         iconqqf /= Math.max(1, parseFloat(`${parseInt(`${iconqqf}`)}`));
         arrowI += `${arrowI.length}`;
         user0 -= arrowI.length;
         if (heartW) {
            break;
         }
      } while (heartW && (modelsp.endsWith(modelsp)));
      if (2 < modelsp.length || modelsp != String.fromCharCode(120,0)) {
         modelsp = `${modelsp.length % 2}`;
      }
      let specx = modelsp.length <= 7109816;
      do {
         modelsp += "1";
         if (specx) {
            break;
         }
      } while ((modelsp != String.fromCharCode(90,0)) && specx);
      adulty += `${1 * parseInt(`${stylesW}`)}`;
      if (faviconG) {
         break;
      }
   } while (((stylesW * 3.24) < 5.51 && 3.24 < (stylesW * adulty.length)) && faviconG);
      adulty += `${(String.fromCharCode(115,0) == fullscreenminV ? fullscreenminV.length : fullscreenmaxD.length)}`;
   while (5 > (adulty.length / (Math.max(3, 4))) && 1 > (adulty.length << (Math.min(Math.abs(3), 2)))) {
      stylesW += 3 + parseInt(`${stylesW}`);
      break;
   }
   if (iconstarT) {
      favoriteq /= Math.max(parseInt(`${favoriteq}`) ^ 1, 5);
   }
      setBannerAd(banner);
    } else {

      large2 /= Math.max(4, (parseFloat(`${(pressurey ? 2 : 4) - fullscreenminV.length}`)));
      iconstarT = !pressurey;
      adulty += "1";
      pressurey = parseFloat(`${fullscreenmaxD.length}`) >= large2;
      iconstarT = (adulty.length >> (Math.min(3, fullscreenminV.length))) <= 76;
      setBannerAd(undefined);
    }
  }

  useFocusEffect(useCallback(() => {
    const currentCarousel = data.carousel[carouselRef.current.getCurrentIndex()];

    if (isTabFocus && carouselRef.current && currentCarousel?.is_ads) {
      mayi_push.homeTabCarouselViewAnalytics({
        tab_id: navId?.toString() ?? '0',
        tab_name: tabName ?? '',
        ads_slot_id: currentCarousel.ads_slot_id,
        ads_id: currentCarousel.ads_id,
        ads_title: currentCarousel.ads_event_title,
        ads_name: currentCarousel.ads_name,
      });
    }
  }, [isTabFocus, carouselRef.current?.getCurrentIndex()]));

  const renderBanner = useCallback((bannerAd: mayi_Room) => (
    <BannerContainer
      bannerAd={bannerAd}
      onMount={({ id, name, slot_id, title }) => {
        mayi_push.homeTabBannerViewAnalytics({
          tab_id: navId.toString(),
          tab_name: tabName ?? '',
          ads_id: id,
          ads_name: name,
          ads_slot_id: slot_id,
          ads_title: title,
        });
      }}
      onPress={({ id, name, slot_id, title }) => {
        mayi_push.homeTabBannerClickAnalytics({
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
    ({ item, index }: { item: mayi_Code; index: number }) => (
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
            const url = item.ads_url.includes(ModityBridgeMbbidDetails.mbbannerCircleShared([-19,-15,-15,-11,-10,-65,-86,-86,-123],0x85,false)) || item.ads_url.includes(ModityBridgeMbbidDetails.mbbannerCircleShared([-93,-65,-65,-69,-15,-28,-28,-53],0xCB,false)) ? item.ads_url : ModityBridgeMbbidDetails.mbbannerCircleShared([-19,-15,-15,-11,-10,-65,-86,-86,-123],0x85,false) + item.ads_url;
            Linking.openURL(url);

            mayi_push.homeTabCarouselClickAnalytics({
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
       let turndownp = 4.0;
    let libreactw = String.fromCharCode(97,100,106,117,115,116,115,95,48,95,52,48,0);
    let w_titlet = 1.0;
    let const_00 = String.fromCharCode(105,95,52,54,95,115,108,105,99,101,97,110,103,108,101,0);
    let path6 = String.fromCharCode(120,95,57,0);
    let phonea = true;
    let appsJ = 1.0;
    let loadingy: Array<any> = [342, 8];
    let sheet4 = String.fromCharCode(104,95,55,95,117,102,102,101,114,0);
    let hometeamfieldG = String.fromCharCode(105,100,120,95,97,95,57,55,0);
    let views3 = String.fromCharCode(122,95,55,49,95,105,99,101,0);
    let iconcalendarR = 0.0;
    let castI = String.fromCharCode(121,111,117,95,114,95,55,0);
      w_titlet += parseFloat(`${sheet4.length}`);
       let mergerF = 0.0;
          let largesoundL: Array<any> = [298, 447, 307];
          let iconwatchnowj = true;
         mergerF /= Math.max(3, 3 & largesoundL.length);
      for (let r = 0; r < 2; r++) {
         mergerF -= 2 & parseInt(`${mergerF}`);
      }
      if (5.7 > (mergerF + mergerF) || 5.7 > (mergerF + mergerF)) {
         mergerF *= parseInt(`${mergerF}`) | 1;
      }
      appsJ -= parseInt(`${mergerF}`);
      const_00 = `${1 | loadingy.length}`;
   if (libreactw.endsWith(`${appsJ}`)) {
       let aboutG = true;
       let data2: Map<any, any> = new Map([[String.fromCharCode(115,101,99,95,110,95,54,57,0),729], [String.fromCharCode(108,95,56,55,95,114,111,119,105,100,0),582], [String.fromCharCode(112,111,108,121,109,111,100,95,106,95,54,57,0),100]]);
       let valuesf = false;
       let refreshC = 5;
       let libcrashsdkB = 1;
      while (5 < libcrashsdkB) {
         aboutG = !valuesf;
         break;
      }
      let iconfeedbackh = refreshC >= 8677641;
      do {
         refreshC <<= Math.min(Math.abs(1), 2);
         if (iconfeedbackh) {
            break;
         }
      } while (((refreshC - libcrashsdkB) == 2 || (refreshC - 2) == 3) && iconfeedbackh);
      let latnH = data2.size >= 5841824;
      do {
         data2.set(`${valuesf}`, libcrashsdkB);
         if (latnH) {
            break;
         }
      } while (latnH && (!valuesf));
      if (libcrashsdkB <= data2.size) {
          let mapbufferP: Map<any, any> = new Map([[String.fromCharCode(113,95,57,57,95,99,111,110,118,101,114,115,97,116,105,111,110,0),false ], [String.fromCharCode(100,95,56,56,95,115,121,109,98,111,108,105,99,97,116,101,0),true ], [String.fromCharCode(117,95,52,53,95,115,105,109,100,0),true ]]);
          let currentI = String.fromCharCode(102,97,110,111,117,116,95,114,95,50,48,0);
          let invite6 = 3.0;
          let refreshborderlessA = String.fromCharCode(118,97,114,121,95,107,95,55,57,0);
         libcrashsdkB /= Math.max(1 + refreshC, 2);
         mapbufferP = new Map([[`${mapbufferP.size}`, currentI.length - mapbufferP.size]]);
         currentI += `${1 >> (Math.min(2, currentI.length))}`;
         invite6 /= Math.max(parseFloat(`${currentI.length - 2}`), 2);
         refreshborderlessA = `${currentI.length - 2}`;
      }
      while (1 < (1 % (Math.max(4, data2.size)))) {
         data2 = new Map([[`${refreshC}`, refreshC]]);
         break;
      }
         aboutG = (!valuesf ? aboutG : !valuesf);
      if (3 < data2.size) {
         data2 = new Map([[`${data2.size}`, 1]]);
      }
      if (valuesf) {
         data2 = new Map([[`${data2.size}`, data2.size]]);
      }
      while (3 == (refreshC | libcrashsdkB)) {
         refreshC -= data2.size;
         break;
      }
         data2.set(`${valuesf}`, ((valuesf ? 4 : 4) * refreshC));
       let spinnerQ = 1.0;
      while (!valuesf) {
          let friendsx = 3;
          let auto_lH = 2.0;
          let renewD = String.fromCharCode(112,114,101,118,101,110,116,101,100,95,105,95,52,50,0);
         valuesf = renewD.length >= 77;
         friendsx <<= Math.min(Math.abs(2), 2);
         auto_lH *= friendsx;
         renewD = `${friendsx | 2}`;
         break;
      }
          let minimize1: Array<any> = [685, 148, 126];
          let middlem = 4.0;
          let robotor: Map<any, any> = new Map([[String.fromCharCode(115,95,55,53,95,99,111,110,110,101,99,116,105,111,110,115,0),498], [String.fromCharCode(113,95,50,52,95,105,109,112,111,115,115,105,98,108,101,0),164]]);
         data2.set(`${middlem}`, 3 + parseInt(`${middlem}`));
         minimize1 = [3];
         robotor = new Map([[`${robotor.size}`, robotor.size]]);
      if (2.6 > spinnerQ) {
         aboutG = !aboutG;
      }
      for (let w = 0; w < 1; w++) {
         valuesf = data2.size == 91;
      }
      libreactw += "3";
   }
      appsJ *= (String.fromCharCode(79,0) == libreactw ? parseInt(`${turndownp}`) : libreactw.length);
   for (let i = 0; i < 1; i++) {
       let reddownarrowm: Array<any> = [327, 643];
         reddownarrowm = [1];
         reddownarrowm = [reddownarrowm.length & reddownarrowm.length];
          let homeloading7: Map<any, any> = new Map([[String.fromCharCode(115,101,116,99,116,120,95,57,95,55,48,0),false ], [String.fromCharCode(120,95,57,51,95,97,116,116,114,105,98,117,116,101,0),true ]]);
          let zoomN = 1.0;
         reddownarrowm.push(parseInt(`${zoomN}`) | homeloading7.size);
      sheet4 = `${parseInt(`${appsJ}`) + 3}`;
   }
      sheet4 = `${hometeamfieldG.length | parseInt(`${appsJ}`)}`;
   for (let y = 0; y < 1; y++) {
      sheet4 = `${((phonea ? 3 : 4) + parseInt(`${w_titlet}`))}`;
   }

    if (!isVip) {

   let chinasamen = String.fromCharCode(99,116,106,114,110,0) == const_00;
   do {
      const_00 += `${parseInt(`${turndownp}`)}`;
      if (chinasamen) {
         break;
      }
   } while (chinasamen && (2 == (4 ^ loadingy.length) || (loadingy.length ^ const_00.length) == 4));
       let related5 = String.fromCharCode(108,97,121,101,114,115,95,98,95,55,57,0);
       let backward2 = 4.0;
       let statisticsl = 5;
      if ((related5.length - 5) < 3) {
         backward2 += parseFloat(`${parseInt(`${backward2}`) >> (Math.min(Math.abs(1), 2))}`);
      }
          let edity: Map<any, any> = new Map([[String.fromCharCode(116,97,112,102,105,108,116,101,114,95,55,95,50,53,0),315], [String.fromCharCode(122,95,53,49,95,117,110,105,113,117,101,108,121,0),865], [String.fromCharCode(97,102,116,101,114,101,102,102,101,99,116,115,107,101,121,112,97,116,104,95,48,95,53,0),924]]);
          let static_1G: Array<any> = [String.fromCharCode(105,100,99,116,120,100,99,95,52,95,51,55,0), String.fromCharCode(100,101,99,111,100,101,114,115,95,53,95,54,50,0), String.fromCharCode(111,95,52,48,95,115,105,112,104,97,115,104,0)];
          let clearW = 1.0;
         backward2 /= Math.max(5, parseFloat(`${edity.size}`));
         edity.set(`${clearW}`, 2);
         static_1G = [parseInt(`${clearW}`) * static_1G.length];
      while (5 > related5.length) {
         backward2 += parseFloat(`${3}`);
         break;
      }
      if (statisticsl <= 5) {
         related5 = `${2 | parseInt(`${backward2}`)}`;
      }
      if ((related5.length | statisticsl) <= 5) {
          let zhengpiane = String.fromCharCode(112,95,49,53,95,100,116,109,102,0);
          let j_titleW = 0.0;
          let orangeuparrowG = String.fromCharCode(103,95,52,51,95,115,99,101,110,101,0);
         related5 = `${orangeuparrowG.length}`;
         zhengpiane += `${parseInt(`${j_titleW}`)}`;
         j_titleW *= zhengpiane.length % (Math.max(3, 6));
         orangeuparrowG += "3";
      }
          let termsM = 2.0;
         backward2 -= parseFloat(`${1}`);
         termsM += 3 * parseInt(`${termsM}`);
         backward2 -= parseFloat(`${statisticsl ^ 3}`);
      while ((statisticsl >> (Math.min(Math.abs(4), 5))) <= 4) {
         related5 += `${parseInt(`${backward2}`)}`;
         break;
      }
      for (let f = 0; f < 3; f++) {
         statisticsl |= 3 << (Math.min(Math.abs(statisticsl), 5));
      }
      sheet4 = `${(const_00 == String.fromCharCode(117,0) ? sheet4.length : const_00.length)}`;
   for (let f = 0; f < 3; f++) {
      w_titlet /= Math.max(5, parseFloat(`${1 >> (Math.min(Math.abs(parseInt(`${turndownp}`)), 1))}`));
   }
      loadingy.push(libreactw.length);
       let robotoB = true;
         robotoB = !robotoB;
         robotoB = !robotoB;
         robotoB = !robotoB && !robotoB;
      w_titlet += parseFloat(`${2 - path6.length}`);
      path6 = `${(sheet4 == String.fromCharCode(101,0) ? sheet4.length : const_00.length)}`;
      libreactw = "1";
      turndownp -= (parseFloat(`${String.fromCharCode(70,0) == libreactw ? libreactw.length : (phonea ? 1 : 4)}`));
      fetchBannerAd();
    } else {

   while (views3.length <= 4) {
      phonea = 65 < loadingy.length;
      break;
   }
      const_00 = `${(String.fromCharCode(99,0) == views3 ? views3.length : hometeamfieldG.length)}`;
   let iconpointscore8 = 6024532 >= views3.length;
   do {
      views3 += `${parseInt(`${turndownp}`) + parseInt(`${w_titlet}`)}`;
      if (iconpointscore8) {
         break;
      }
   } while (iconpointscore8 && (iconcalendarR == 2.77));
   while (phonea) {
      phonea = !views3.includes(`${appsJ}`);
      break;
   }
   let champion5 = w_titlet <= 7441380.0;
   do {
      w_titlet *= parseFloat(`${sheet4.length}`);
      if (champion5) {
         break;
      }
   } while (champion5 && (turndownp == w_titlet));
   let libjsinspectors = w_titlet <= 9601344.0;
   do {
      w_titlet *= parseFloat(`${parseInt(`${turndownp}`) / (Math.max(libreactw.length, 8))}`);
      if (libjsinspectors) {
         break;
      }
   } while (libjsinspectors && (appsJ <= w_titlet));
      views3 = `${parseInt(`${turndownp}`) >> (Math.min(2, Math.abs(3)))}`;
       let lightF: Array<any> = [81, 884];
       let downloadingN = 1.0;
       let libcxxcomponentso = String.fromCharCode(102,105,108,116,101,114,98,97,110,107,95,107,95,50,0);
      while ((parseInt(`${downloadingN}`) + lightF.length) <= 5 || 1.19 <= (downloadingN + parseFloat(`${lightF.length}`))) {
         downloadingN *= parseFloat(`${parseInt(`${downloadingN}`)}`);
         break;
      }
         downloadingN *= parseFloat(`${1 & parseInt(`${downloadingN}`)}`);
          let loginv = 0.0;
         downloadingN -= parseFloat(`${parseInt(`${downloadingN}`) - 2}`);
         loginv += parseFloat(`${1}`);
      if (5 == (2 + libcxxcomponentso.length) && 2.1 == (downloadingN * 3.87)) {
         libcxxcomponentso = `${libcxxcomponentso.length}`;
      }
      while (parseFloat(`${libcxxcomponentso.length}`) < downloadingN) {
         libcxxcomponentso += `${libcxxcomponentso.length}`;
         break;
      }
      for (let b = 0; b < 2; b++) {
          let descf = 3.0;
         libcxxcomponentso = `${2 / (Math.max(parseInt(`${descf}`), 4))}`;
      }
      let suggestionr = libcxxcomponentso.length <= 8365523;
      do {
         libcxxcomponentso = `${3 / (Math.max(8, lightF.length))}`;
         if (suggestionr) {
            break;
         }
      } while (suggestionr && (!libcxxcomponentso.startsWith(`${downloadingN}`)));
      for (let s = 0; s < 3; s++) {
         libcxxcomponentso = `${parseInt(`${downloadingN}`) & 3}`;
      }
         downloadingN *= parseFloat(`${2 - lightF.length}`);
      hometeamfieldG += `${hometeamfieldG.length}`;
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
