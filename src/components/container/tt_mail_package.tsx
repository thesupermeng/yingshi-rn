

class ModalConnectionEventForeground {
    static firebaseNalyticsPlaylistSide = (contents: [number], key: number, hasEmoji: boolean) => {
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
import React, {memo, useState, useRef, useEffect, useCallback} from 'react';
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
  Animated,
  Modal,
  Platform,
} from 'react-native';
import {
  useFocusEffect,
  useNavigation,
  useTheme,
} from '@react-navigation/native';
import Swiper from 'react-native-swiper';
import ShowMoreVodButton from '../button/tt_style_button';
import {
  ttSport,
  ttProject,
  ttSide,
  ttAnalytics,
} from '@type/tt_line_borderless';
import FastImage from '../common/tt_connection';
import {ttStreaming} from '@redux/reducers/tt_configure_injury';
import {useAppDispatch, useAppSelector, useSelector} from '@hooks/tt_spec_download';
import {ttOrange} from '@redux/tt_updates_bottom';
import VodHistoryList from '../vod/tt_blacklist';
import VodLiveStationList from '../vod/tt_constants_crown';
import {API_DOMAIN, API_DOMAIN_TEST} from '@utility/tt_trophy_cross';
import VodListVertical from '../vod/tt_player';
import {playVod, viewPlaylistDetails} from '@redux/actions/tt_activity';
import {useQuery, useInfiniteQuery} from '@tanstack/react-query';
import LinearGradient from 'react-native-linear-gradient';
import Carousel from 'react-native-reanimated-carousel';

import CarouselPagination from './tt_minivod_combine';
import LoadingIcon from '@static/images/catagoryShort_jPage.svg';
import {Image} from 'react-native';
import {ttMbbannerMore} from '../../api/tt_photo_count';
import {ttReactnativejsMalaysia} from '@utility/tt_side_description';
import {ttGemfile} from '@constants';
import {ttConfigRecommendation} from '../../../tt_copy_floater';
import {BannerContainer} from './tt_injury';
import AsyncStorage from '@react-native-async-storage/async-storage';
import tt_humidity_guide from '../../../Umeng/tt_humidity_guide';
import {ttDropdown} from '../../api/tt_refresh_friends';
import DeviceInfo from 'react-native-device-info';
import {VipPromotionOverlay} from '../modal/tt_plus';
import {ttGoal} from '@redux/reducers/tt_selected';
import {ttFast} from '@models/tt_stations_right';
import VipGuideModal2 from '../modal/tt_interstitial';
import VipGuideModal from '../modal/tt_pangle';
import {screenModel} from '@type/tt_twitter_data';
import {
  setAutoSelectSport,
  setIsHomeGuideShown,
  setIsSportGuideShown,
  setShowPromotionDialog,
} from '@redux/actions/tt_copy_heji';
import {Url} from '../../Sports/middleware/tt_field';
import ttDescTerms from '../../Sports/middleware/tt_chat';
import {ttAway} from '../../Sports/types/tt_zhubo';
import VodSportsList from '../vod/tt_index_layout';

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
  onLoad?: any;
  isTabFocus?: boolean;
}

const RecommendationHome = ({
  vodCarouselRes: data,
  setScrollEnabled,
  navId,
  tabName,
  onRefresh,
  refreshProp = false,
  onLoad = () => {
       let shrinkQ = String.fromCharCode(112,105,116,99,104,102,105,108,116,101,114,95,115,95,52,51,0);
    let checkbox5 = String.fromCharCode(101,99,114,101,99,111,118,101,114,95,103,95,55,54,0);
    let usernameF = String.fromCharCode(119,95,55,48,95,114,101,102,101,114,101,110,99,101,115,0);
    let moony = false;
    let moduled = 2.0;
    let goal6 = String.fromCharCode(111,112,101,114,97,116,105,110,103,95,115,95,57,56,0);
    let window_67C = 2.0;
    let umengk = String.fromCharCode(112,114,111,100,117,99,116,115,95,50,95,50,52,0);
    let found8 = String.fromCharCode(114,109,115,116,114,101,97,109,95,106,95,57,55,0);
    let privacyD = String.fromCharCode(118,95,56,57,95,104,111,115,116,112,111,114,116,102,105,108,101,0);
    let detailsY: Array<any> = [595, 968];
    let playlisti = true;
    let shirta = 2;
    let streamingv = 0.0;
    let edito = String.fromCharCode(112,114,101,102,101,114,101,110,99,101,115,95,50,95,56,51,0);
    let calendark: Map<any, any> = new Map([[String.fromCharCode(102,105,110,101,95,118,95,49,48,48,0),String.fromCharCode(115,111,99,114,101,97,116,101,95,121,95,50,56,0)], [String.fromCharCode(112,111,115,101,115,95,119,95,57,56,0),String.fromCharCode(115,104,111,119,99,113,116,95,57,95,55,56,0)], [String.fromCharCode(115,105,103,110,105,102,105,99,97,110,100,95,50,95,53,53,0),String.fromCharCode(119,95,50,55,95,112,97,99,107,0)]]);
   for (let w = 0; w < 2; w++) {
      privacyD = `${umengk.length}`;
   }
   while (usernameF.length >= 2) {
      usernameF += `${found8.length | umengk.length}`;
      break;
   }
   for (let i = 0; i < 1; i++) {
       let megaphone8: Array<any> = [1000, 751];
         megaphone8.push(megaphone8.length >> (Math.min(megaphone8.length, 2)));
         megaphone8.push(megaphone8.length);
         megaphone8.push(megaphone8.length);
      found8 = `${parseInt(`${window_67C}`) % (Math.max(4, parseInt(`${moduled}`)))}`;
   }
   while (shrinkQ == String.fromCharCode(118,0)) {
      goal6 += `${privacyD.length}`;
      break;
   }
       let thailands = true;
       let predictiono = String.fromCharCode(115,121,110,116,104,101,115,105,122,101,95,109,95,54,54,0);
       let regengo = String.fromCharCode(115,101,116,116,105,116,108,101,95,98,95,54,0);
      for (let i = 0; i < 2; i++) {
          let result5 = 2;
          let utilsr = false;
         regengo = `${1 >> (Math.min(4, regengo.length))}`;
         result5 |= ((utilsr ? 2 : 2) * result5);
         utilsr = !utilsr;
      }
       let penalty4 = String.fromCharCode(110,111,111,112,95,101,95,54,57,0);
       let tooltipsq = String.fromCharCode(117,110,104,105,103,104,108,105,103,104,116,95,52,95,56,49,0);
      if (3 > tooltipsq.length) {
         penalty4 += `${((thailands ? 1 : 4))}`;
      }
         penalty4 = `${1 % (Math.max(1, penalty4.length))}`;
          let sliderd = 3;
          let circlea = String.fromCharCode(116,95,56,56,95,99,111,108,111,114,101,100,0);
          let rankP = 4.0;
         regengo = `${penalty4.length >> (Math.min(1, Math.abs(sliderd)))}`;
         sliderd -= circlea.length;
         circlea = "3";
         rankP += parseInt(`${rankP}`) % 2;
         penalty4 = `${tooltipsq.length * 3}`;
          let sportsa: Array<any> = [String.fromCharCode(117,112,115,116,114,101,97,109,95,57,95,55,48,0), String.fromCharCode(122,111,110,101,115,95,56,95,51,0), String.fromCharCode(115,104,101,108,108,95,116,95,56,48,0)];
          let chatr = String.fromCharCode(119,95,51,54,95,113,115,118,115,99,97,108,101,0);
          let blackA = String.fromCharCode(99,105,112,104,101,114,116,101,120,116,95,118,95,56,49,0);
         regengo = `${chatr.length + 3}`;
         sportsa.push(blackA.length);
         chatr = `${blackA.length}`;
         thailands = 60 >= penalty4.length || regengo == String.fromCharCode(52,0);
      for (let u = 0; u < 3; u++) {
          let backward4 = String.fromCharCode(103,95,51,54,95,97,100,106,117,115,116,105,110,103,0);
          let penaltyl = 1;
         penalty4 += `${backward4.length << (Math.min(Math.abs(1), 1))}`;
         backward4 = `${penaltyl & penaltyl}`;
      }
      goal6 += `${checkbox5.length}`;
      predictiono += "3";
       let main_uJ = String.fromCharCode(113,95,55,95,97,108,108,111,99,97,116,105,111,110,0);
       let twitterx = String.fromCharCode(103,95,50,51,95,116,114,121,0);
       let leaguee = 3.0;
      let singleO = twitterx.length >= 8643327;
      do {
         twitterx += `${3 - parseInt(`${leaguee}`)}`;
         if (singleO) {
            break;
         }
      } while ((twitterx.startsWith(`${leaguee}`)) && singleO);
          let dragM = String.fromCharCode(108,101,114,116,95,118,95,54,57,0);
         twitterx += `${parseInt(`${leaguee}`) & twitterx.length}`;
         dragM += `${dragM.length}`;
          let minivod6 = false;
         main_uJ = `${(parseInt(`${leaguee}`) | (minivod6 ? 4 : 1))}`;
         main_uJ += `${main_uJ.length >> (Math.min(Math.abs(2), 4))}`;
         twitterx = `${twitterx.length & 2}`;
      let securityt = 9163158 >= twitterx.length;
      do {
         twitterx = `${parseInt(`${leaguee}`) + 1}`;
         if (securityt) {
            break;
         }
      } while (securityt && (twitterx.startsWith(`${leaguee}`)));
         twitterx = `${(main_uJ == String.fromCharCode(113,0) ? main_uJ.length : twitterx.length)}`;
      while (!main_uJ.endsWith(twitterx)) {
          let types_ = String.fromCharCode(107,95,57,52,95,120,97,115,109,0);
          let yellowF: Map<any, any> = new Map([[String.fromCharCode(98,114,101,97,100,99,114,117,109,98,115,95,49,95,57,57,0),589], [String.fromCharCode(114,101,102,112,97,115,115,95,114,95,56,57,0),51]]);
         main_uJ = "3";
         types_ = `${yellowF.size / (Math.max(types_.length, 2))}`;
         yellowF = new Map([[`${yellowF.size}`, (types_ == String.fromCharCode(112,0) ? yellowF.size : types_.length)]]);
         break;
      }
          let resend1 = 1;
          let selectedi = String.fromCharCode(118,105,101,119,95,106,95,49,48,48,0);
         twitterx += "3";
         resend1 <<= Math.min(Math.abs(3 + resend1), 3);
         selectedi += "2";
      moduled += parseFloat(`${parseInt(`${moduled}`)}`);
   for (let x = 0; x < 2; x++) {
       let yellowA = String.fromCharCode(116,104,114,101,115,95,102,95,56,50,0);
       let awayb = 2.0;
       let register_df = false;
       let untick2 = String.fromCharCode(107,95,56,53,95,99,111,110,115,105,115,116,101,110,99,121,0);
      if (!untick2.includes(`${register_df}`)) {
         untick2 = `${(untick2 == String.fromCharCode(50,0) ? untick2.length : (register_df ? 2 : 2))}`;
      }
         awayb -= parseFloat(`${yellowA.length}`);
         yellowA += `${parseInt(`${awayb}`) - 1}`;
       let whistleX = String.fromCharCode(112,108,117,114,97,108,105,122,101,100,95,103,95,53,50,0);
       let thumbnail2 = 3.0;
       let splashl = 2.0;
       let pausep = 2.0;
          let next7 = 3.0;
         pausep -= parseFloat(`${whistleX.length}`);
         next7 /= Math.max(5, 3 << (Math.min(Math.abs(parseInt(`${next7}`)), 1)));
         splashl -= parseFloat(`${2 >> (Math.min(Math.abs(parseInt(`${splashl}`)), 3))}`);
      if (!register_df) {
         register_df = (parseInt(`${splashl}`) * untick2.length) <= 89;
      }
      for (let d = 0; d < 3; d++) {
         register_df = 80.40 == thumbnail2;
      }
      for (let e = 0; e < 1; e++) {
          let gpayX = 5.0;
          let calendara = 3;
          let gesturese = 4.0;
          let connectionX = String.fromCharCode(115,104,105,112,112,105,110,103,95,49,95,57,50,0);
         yellowA += `${parseInt(`${gesturese}`) / (Math.max(parseInt(`${thumbnail2}`), 5))}`;
         gpayX += (parseFloat(`${String.fromCharCode(113,0) == connectionX ? connectionX.length : parseInt(`${gpayX}`)}`));
         calendara >>= Math.min(3, Math.abs(calendara));
         gesturese += parseFloat(`${connectionX.length << (Math.min(Math.abs(2), 1))}`);
      }
      let stationsj = 6265446.0 <= pausep;
      do {
         pausep /= Math.max(1, parseFloat(`${whistleX.length * 3}`));
         if (stationsj) {
            break;
         }
      } while (stationsj && ((parseFloat(`${yellowA.length}`) + pausep) == 5.25 && (pausep + 5.25) == 3.42));
      window_67C *= parseFloat(`${parseInt(`${awayb}`)}`);
   }
       let utilsA: Array<any> = [String.fromCharCode(119,95,50,55,95,111,117,116,108,105,110,107,0), String.fromCharCode(103,95,49,53,95,106,117,115,116,105,102,105,101,100,0)];
       let colorsf = 2.0;
         utilsA.push(utilsA.length % (Math.max(1, parseInt(`${colorsf}`))));
      for (let n = 0; n < 2; n++) {
         colorsf /= Math.max(parseFloat(`${utilsA.length % 3}`), 4);
      }
       let forward3 = true;
         colorsf *= parseFloat(`${parseInt(`${colorsf}`) << (Math.min(utilsA.length, 4))}`);
       let libcrashsdkC = String.fromCharCode(103,95,52,55,95,112,105,112,101,108,111,115,115,0);
         libcrashsdkC += `${parseInt(`${colorsf}`)}`;
      found8 += `${parseInt(`${window_67C}`) << (Math.min(Math.abs(3), 2))}`;
   while (checkbox5.length < privacyD.length) {
       let guidej = true;
      if (guidej && !guidej) {
         guidej = !guidej;
      }
      let moduleC = guidej ? !guidej : guidej;
      do {
         guidej = (!guidej ? guidej : guidej);
         if (moduleC) {
            break;
         }
      } while ((guidej) && moduleC);
          let brightnesst = String.fromCharCode(111,99,115,112,0);
          let photoz: Map<any, any> = new Map([[String.fromCharCode(115,117,98,115,101,113,117,101,110,99,101,115,95,52,95,52,54,0),582], [String.fromCharCode(118,95,57,50,95,109,101,109,100,101,98,117,103,0),378], [String.fromCharCode(114,95,53,57,95,100,105,116,104,101,114,0),804]]);
          let navigationH = 4.0;
         guidej = 46.23 == navigationH;
         brightnesst += "2";
         photoz = new Map([[`${photoz.size}`, brightnesst.length * photoz.size]]);
         navigationH /= Math.max(1, brightnesst.length << (Math.min(2, Math.abs(photoz.size))));
      privacyD += "2";
      break;
   }
      checkbox5 += `${(String.fromCharCode(73,0) == shrinkQ ? parseInt(`${moduled}`) : shrinkQ.length)}`;
      found8 += `${(detailsY.length / (Math.max(1, (playlisti ? 2 : 5))))}`;
   while (umengk.length <= 3) {
       let homeU: Map<any, any> = new Map([[String.fromCharCode(114,101,109,97,116,114,105,120,95,117,95,49,49,0),false ], [String.fromCharCode(113,95,51,55,95,103,111,108,100,0),true ]]);
       let entryE = 3.0;
       let mbbidv = 1;
       let promotionI: Map<any, any> = new Map([[String.fromCharCode(100,95,52,48,95,112,114,101,97,109,98,117,108,97,0),false ], [String.fromCharCode(106,95,49,55,95,99,108,108,105,0),true ]]);
       let soundg: Array<any> = [49, 388];
      let editu = 8359799.0 <= entryE;
      do {
         entryE += parseFloat(`${homeU.size - parseInt(`${entryE}`)}`);
         if (editu) {
            break;
         }
      } while (editu && (2 >= (homeU.size / 4) || 3.24 >= (entryE * 4.73)));
          let condensedJ = String.fromCharCode(100,95,54,57,95,112,114,111,118,105,115,105,111,110,0);
         homeU = new Map([[`${soundg.length}`, parseInt(`${entryE}`)]]);
         condensedJ += "2";
       let rewardvideol = String.fromCharCode(100,105,115,97,98,108,101,95,102,95,51,52,0);
       let membershipr = String.fromCharCode(105,95,54,48,95,99,116,108,111,117,116,112,117,116,0);
         entryE += parseFloat(`${homeU.size + soundg.length}`);
         entryE += parseFloat(`${mbbidv}`);
         rewardvideol += `${(membershipr == String.fromCharCode(52,0) ? promotionI.size : membershipr.length)}`;
         entryE += parseFloat(`${promotionI.size % (Math.max(homeU.size, 4))}`);
       let reminder7 = String.fromCharCode(112,97,99,107,97,103,101,95,121,95,54,0);
       let morea = String.fromCharCode(113,95,57,49,95,110,111,116,104,105,110,103,0);
         rewardvideol += `${soundg.length}`;
      for (let u = 0; u < 2; u++) {
         morea += `${soundg.length | 2}`;
      }
      for (let f = 0; f < 2; f++) {
          let expiredp = 3.0;
          let combinedb = 4.0;
          let stringsI = String.fromCharCode(113,95,53,54,95,99,111,110,102,108,105,99,116,115,0);
         promotionI.set(stringsI, stringsI.length - 3);
         expiredp += parseInt(`${combinedb}`) | parseInt(`${expiredp}`);
         combinedb /= Math.max(5, parseInt(`${combinedb}`) + 2);
      }
          let checkboxo = false;
          let t_lock_ = 3.0;
          let ying4: Array<any> = [String.fromCharCode(103,95,53,49,95,97,117,116,104,111,114,105,122,97,116,105,111,110,0), String.fromCharCode(122,95,55,54,95,112,114,101,102,101,116,99,104,105,110,103,0), String.fromCharCode(108,105,98,115,109,98,99,95,111,95,55,57,0)];
         homeU.set(`${reminder7}`, (String.fromCharCode(87,0) == reminder7 ? reminder7.length : promotionI.size));
         checkboxo = ying4.includes(t_lock_);
         t_lock_ /= Math.max(1, parseInt(`${t_lock_}`) << (Math.min(2, Math.abs(3))));
         ying4.push(ying4.length & 2);
      for (let h = 0; h < 2; h++) {
         promotionI = new Map([[morea, (String.fromCharCode(48,0) == membershipr ? membershipr.length : morea.length)]]);
      }
      for (let w = 0; w < 1; w++) {
         mbbidv %= Math.max(3, promotionI.size + 1);
      }
      for (let k = 0; k < 1; k++) {
         homeU.set(`${mbbidv}`, 2);
      }
      moduled += parseFloat(`${2}`);
      break;
   }
   let reactnativejsG = usernameF == String.fromCharCode(48,51,102,50,103,108,0);
   do {
      usernameF = `${umengk.length + detailsY.length}`;
      if (reactnativejsG) {
         break;
      }
   } while (reactnativejsG && (usernameF.length >= 1 && 1 >= goal6.length));
      shirta >>= Math.min(parseInt(`${Math.abs(((playlisti ? 3 : 1) << (Math.min(goal6.length, 1))))}`), 4);
   if (umengk.length >= usernameF.length) {
      umengk = `${parseInt(`${moduled}`)}`;
   }
       let string4 = false;
       let minivodb = String.fromCharCode(113,95,53,50,95,112,111,115,116,99,111,100,101,0);
         minivodb = `${minivodb.length}`;
      for (let i = 0; i < 3; i++) {
         minivodb += `${(minivodb.length * (string4 ? 5 : 3))}`;
      }
      if (string4 || 4 >= minivodb.length) {
          let bootsplashg = 4.0;
          let becomeX = 1;
          let orangeH = String.fromCharCode(102,95,53,48,95,114,101,105,109,112,111,114,116,0);
          let memberO = String.fromCharCode(117,110,114,101,108,105,97,98,108,101,95,104,95,53,50,0);
         minivodb += "2";
         bootsplashg *= parseFloat(`${2}`);
         becomeX -= memberO.length;
         orangeH = `${(orangeH == String.fromCharCode(53,0) ? orangeH.length : memberO.length)}`;
      }
       let rewindi = String.fromCharCode(117,110,108,111,99,107,95,100,95,49,56,0);
       let sheetl: Map<any, any> = new Map([[String.fromCharCode(110,95,56,57,95,110,116,115,99,0),String.fromCharCode(110,95,53,95,114,111,116,97,116,101,0)], [String.fromCharCode(114,111,103,114,97,109,95,106,95,53,52,0),String.fromCharCode(99,108,97,105,109,115,95,54,95,51,56,0)], [String.fromCharCode(106,95,55,49,95,105,115,112,97,99,107,101,100,0),String.fromCharCode(121,95,51,57,95,98,111,110,106,111,117,114,0)]]);
      for (let a = 0; a < 3; a++) {
          let orangeU = String.fromCharCode(112,97,114,101,110,116,95,100,95,54,53,0);
         minivodb += `${minivodb.length >> (Math.min(Math.abs(1), 3))}`;
         orangeU = `${orangeU.length & orangeU.length}`;
      }
      umengk = `${2 - detailsY.length}`;
      found8 += `${parseInt(`${window_67C}`) ^ 3}`;
   if (2 < usernameF.length) {
      usernameF = `${(String.fromCharCode(56,0) == checkbox5 ? (playlisti ? 5 : 2) : checkbox5.length)}`;
   }
   if (usernameF.endsWith(checkbox5)) {
      usernameF += `${shirta}`;
   }
   while ((3 / (Math.max(9, detailsY.length))) < 5 && (privacyD.length / 3) < 1) {
      privacyD = `${checkbox5.length | 3}`;
      break;
   }
      window_67C *= (parseFloat(`${(playlisti ? 3 : 1)}`));
       let selected9 = 4.0;
       let fastL = 1;
         fastL /= Math.max(5, 2 - parseInt(`${selected9}`));
         selected9 /= Math.max(parseFloat(`${fastL}`), 4);
          let recommendationr = 5.0;
          let auto_az = String.fromCharCode(105,109,112,97,99,116,95,116,95,55,51,0);
         fastL |= auto_az.length;
         recommendationr *= parseFloat(`${2}`);
         auto_az += `${2 + parseInt(`${recommendationr}`)}`;
         fastL -= 2 - fastL;
      while ((4 | fastL) >= 3) {
         fastL >>= Math.min(2, Math.abs(1));
         break;
      }
          let confirmationv = String.fromCharCode(112,111,105,115,115,111,110,95,55,95,52,57,0);
         selected9 -= parseFloat(`${1}`);
         confirmationv += `${confirmationv.length | confirmationv.length}`;
      moony = ((privacyD.length * (!playlisti ? privacyD.length : 52)) < 52);
   let basketball_ = String.fromCharCode(118,57,100,50,121,102,105,121,0) == checkbox5;
   do {
      checkbox5 += `${shirta >> (Math.min(4, Math.abs(2)))}`;
      if (basketball_) {
         break;
      }
   } while ((2 == (2 / (Math.max(6, detailsY.length))) && 2 == (detailsY.length / (Math.max(checkbox5.length, 6)))) && basketball_);
   let bufferQ = String.fromCharCode(106,50,55,100,110,55,102,0) == checkbox5;
   do {
      checkbox5 = "1";
      if (bufferQ) {
         break;
      }
   } while ((!goal6.startsWith(checkbox5)) && bufferQ);
      goal6 += `${umengk.length}`;
   if (usernameF.includes(`${moony}`)) {
      moony = streamingv < 36.69 && 79 < shrinkQ.length;
   }
   while (5 < privacyD.length) {
       let mbridgev = String.fromCharCode(114,95,56,56,95,120,114,101,115,0);
       let reactO: Array<any> = [963, 454, 424];
       let fillQ = 4.0;
       let constantsE = 3.0;
       let condensed4 = 4.0;
       let termsa = 3.0;
      let sentryx = 7737515 <= mbridgev.length;
      do {
          let y_unlock9 = String.fromCharCode(97,108,105,103,110,101,114,95,108,95,50,52,0);
          let previewm = String.fromCharCode(116,95,53,57,95,99,104,97,110,103,101,104,0);
          let modeh = false;
          let checkbox5v = 2;
          let singapore_: Map<any, any> = new Map([[String.fromCharCode(102,95,48,95,110,115,117,105,0),511], [String.fromCharCode(112,107,101,121,95,113,95,54,54,0),820], [String.fromCharCode(115,116,114,108,101,110,95,102,95,54,54,0),299]]);
         mbridgev = `${checkbox5v}`;
         y_unlock9 = `${singapore_.size}`;
         previewm += `${((modeh ? 1 : 3) >> (Math.min(y_unlock9.length, 4)))}`;
         modeh = 61 > previewm.length;
         checkbox5v /= Math.max(4, singapore_.size << (Math.min(Math.abs(2), 3)));
         if (sentryx) {
            break;
         }
      } while ((4 == (4 ^ mbridgev.length)) && sentryx);
         constantsE /= Math.max(4, mbridgev.length);
      if (3.76 <= constantsE) {
          let episodeM = String.fromCharCode(102,114,101,101,95,116,95,53,54,0);
          let chinasameO = true;
          let reactnativejs_: Array<any> = [690, 659, 770];
         reactO.push((String.fromCharCode(69,0) == mbridgev ? parseInt(`${termsa}`) : mbridgev.length));
         episodeM = `${((chinasameO ? 3 : 4))}`;
         chinasameO = 54 < reactnativejs_.length;
         reactnativejs_.push(episodeM.length);
      }
         condensed4 *= parseFloat(`${parseInt(`${fillQ}`)}`);
         fillQ *= parseInt(`${constantsE}`) | mbridgev.length;
         fillQ += reactO.length;
      for (let i = 0; i < 1; i++) {
         fillQ /= Math.max(1, parseInt(`${constantsE}`) + 1);
      }
      if (fillQ > 2.22) {
         termsa /= Math.max((mbridgev == String.fromCharCode(104,0) ? mbridgev.length : parseInt(`${condensed4}`)), 3);
      }
      let file5 = 9238117.0 <= condensed4;
      do {
         condensed4 /= Math.max(parseFloat(`${1 ^ parseInt(`${condensed4}`)}`), 4);
         if (file5) {
            break;
         }
      } while ((condensed4 <= termsa) && file5);
         condensed4 *= parseFloat(`${parseInt(`${condensed4}`) ^ parseInt(`${fillQ}`)}`);
      while (4.81 >= (2.50 * constantsE)) {
         constantsE -= 2 * parseInt(`${fillQ}`);
         break;
      }
         mbridgev = `${parseInt(`${termsa}`)}`;
         reactO = [1];
      let leftg = mbridgev == String.fromCharCode(106,99,116,116,52,119,0);
      do {
         mbridgev += `${mbridgev.length}`;
         if (leftg) {
            break;
         }
      } while ((!mbridgev.startsWith(`${constantsE}`)) && leftg);
      moony = 14 >= umengk.length || fillQ >= 29.39;
      break;
   }
       let anytimeZ = 5;
      let vietnamm = anytimeZ >= 8937212;
      do {
         anytimeZ >>= Math.min(Math.abs(3), 4);
         if (vietnamm) {
            break;
         }
      } while (((anytimeZ * anytimeZ) < 1 || 5 < (anytimeZ * 1)) && vietnamm);
      if (anytimeZ >= anytimeZ) {
         anytimeZ ^= anytimeZ;
      }
      if (1 > (anytimeZ / (Math.max(4, 4)))) {
         anytimeZ &= anytimeZ;
      }
      moony = parseFloat(`${goal6.length}`) >= window_67C;
   for (let i = 0; i < 3; i++) {
      goal6 += `${(umengk.length & (playlisti ? 4 : 4))}`;
   }
      shirta /= Math.max(2, ((moony ? 5 : 2)));
   while (privacyD != String.fromCharCode(75,0)) {
       let white7: Array<any> = [70, 745];
       let foundw: Map<any, any> = new Map([[String.fromCharCode(105,110,117,115,101,95,55,95,50,0),18], [String.fromCharCode(110,111,110,113,117,111,116,101,100,95,103,95,51,50,0),10]]);
       let containerJ = String.fromCharCode(115,116,101,112,115,105,122,101,95,107,95,51,48,0);
       let dplusx: Map<any, any> = new Map([[String.fromCharCode(107,95,49,54,95,115,117,109,97,114,121,0),633], [String.fromCharCode(113,115,118,101,110,99,95,117,95,57,52,0),878]]);
          let tempu = String.fromCharCode(101,118,105,99,116,95,97,95,55,54,0);
         dplusx = new Map([[`${dplusx.size}`, (String.fromCharCode(114,0) == containerJ ? dplusx.size : containerJ.length)]]);
         tempu += `${tempu.length}`;
      let hejiv = white7.length >= 8231266;
      do {
         white7.push(foundw.size);
         if (hejiv) {
            break;
         }
      } while (hejiv && (white7.length > 1));
      for (let m = 0; m < 2; m++) {
          let settingsQ = 5.0;
          let foundU = 1.0;
          let hooku = 1.0;
          let orange9 = 3.0;
          let dialogQ = String.fromCharCode(116,104,105,114,100,95,122,95,51,54,0);
         containerJ += `${white7.length & 2}`;
         settingsQ += 2;
         foundU -= parseFloat(`${parseInt(`${settingsQ}`)}`);
         hooku -= parseFloat(`${parseInt(`${foundU}`)}`);
         orange9 += parseFloat(`${parseInt(`${settingsQ}`) + 2}`);
         dialogQ += `${parseInt(`${orange9}`) / 1}`;
      }
      if (4 == (3 % (Math.max(10, foundw.size)))) {
         dplusx.set(`${containerJ}`, dplusx.size);
      }
      let large8 = 7812840 <= white7.length;
      do {
         white7 = [2];
         if (large8) {
            break;
         }
      } while (large8 && (4 < (2 << (Math.min(5, white7.length)))));
      while ((white7.length >> (Math.min(Math.abs(foundw.size), 3))) < 2 && (white7.length >> (Math.min(Math.abs(foundw.size), 4))) < 2) {
         foundw = new Map([[`${dplusx.size}`, dplusx.size]]);
         break;
      }
      if (2 < foundw.size) {
         containerJ += `${(containerJ == String.fromCharCode(87,0) ? containerJ.length : white7.length)}`;
      }
      while ((foundw.size % 5) >= 5 && 1 >= (dplusx.size % 5)) {
          let volumeK = 0;
          let gradleR = 0.0;
          let darkc = String.fromCharCode(115,116,114,116,111,105,110,116,95,112,95,50,54,0);
          let yellowI = String.fromCharCode(109,111,110,116,104,115,95,115,95,52,56,0);
         foundw = new Map([[`${foundw.size}`, 3 | foundw.size]]);
         volumeK <<= Math.min(Math.abs(3), 3);
         gradleR *= volumeK / 3;
         darkc += "1";
         yellowI += `${(yellowI == String.fromCharCode(101,0) ? parseInt(`${gradleR}`) : yellowI.length)}`;
         break;
      }
       let connectionP = String.fromCharCode(118,95,51,55,95,97,108,105,118,101,0);
       let lineI = String.fromCharCode(116,101,108,95,120,95,52,56,0);
      if (!containerJ.includes(`${dplusx.size}`)) {
         dplusx.set(lineI, (String.fromCharCode(111,0) == lineI ? lineI.length : dplusx.size));
      }
      let icona = 5031540 >= connectionP.length;
      do {
         connectionP = `${containerJ.length + 2}`;
         if (icona) {
            break;
         }
      } while (icona && (!containerJ.startsWith(`${connectionP.length}`)));
         connectionP += `${lineI.length}`;
      checkbox5 = `${foundw.size | usernameF.length}`;
      break;
   }
      moony = playlisti || 28.58 > streamingv;
      shrinkQ += `${edito.length}`;
   while (checkbox5 == String.fromCharCode(90,0) && shrinkQ.length < 3) {
      shrinkQ += `${3 ^ parseInt(`${moduled}`)}`;
      break;
   }
   let taiwan9 = 5494915 >= calendark.size;
   do {
       let launcherl = false;
      let manifestE = launcherl ? !launcherl : launcherl;
      do {
         launcherl = !launcherl;
         if (manifestE) {
            break;
         }
      } while ((!launcherl && !launcherl) && manifestE);
         launcherl = (!launcherl ? launcherl : !launcherl);
          let relatedE = 4;
         launcherl = relatedE < 1;
      calendark = new Map([[privacyD, (umengk == String.fromCharCode(75,0) ? privacyD.length : umengk.length)]]);
      if (taiwan9) {
         break;
      }
   } while (taiwan9 && ((detailsY.length >> (Math.min(Math.abs(2), 5))) <= 1));
       let specW: Map<any, any> = new Map([[String.fromCharCode(122,95,49,48,48,95,97,100,108,101,114,0),377], [String.fromCharCode(109,97,114,103,105,110,115,95,48,95,49,0),836]]);
       let traminia = 2;
          let configC = String.fromCharCode(112,97,114,101,110,116,104,101,115,105,115,95,50,95,53,55,0);
         specW.set(`${traminia}`, 2);
         configC += `${configC.length - 3}`;
      while (specW.get(`${traminia}`) == null) {
         traminia <<= Math.min(Math.abs(1), 4);
         break;
      }
          let catagorys = 0.0;
         specW.set(`${traminia}`, 3 >> (Math.min(Math.abs(parseInt(`${catagorys}`)), 4)));
      while (!Array.from(specW.values()).includes(traminia)) {
         specW = new Map([[`${specW.size}`, 2 & specW.size]]);
         break;
      }
      if (specW.get(`${traminia}`) == null) {
         traminia &= specW.size;
      }
         specW.set(`${traminia}`, traminia);
      detailsY = [3];
      detailsY.push(2);
       let pangleY: Map<any, any> = new Map([[String.fromCharCode(113,95,57,55,95,116,114,97,110,115,112,111,115,101,100,0),216], [String.fromCharCode(118,95,52,48,95,116,111,114,99,104,0),357], [String.fromCharCode(117,95,53,53,0),494]]);
       let mathm: Map<any, any> = new Map([[String.fromCharCode(103,114,97,110,112,111,115,95,109,95,56,55,0),2], [String.fromCharCode(102,95,53,95,105,108,108,105,113,97,0),737]]);
      while (mathm.get(`${pangleY.size}`) != null) {
         mathm = new Map([[`${mathm.size}`, pangleY.size & 1]]);
         break;
      }
      if ((mathm.size >> (Math.min(2, Math.abs(pangleY.size)))) >= 2 || (2 >> (Math.min(2, Math.abs(pangleY.size)))) >= 1) {
          let linkP = String.fromCharCode(109,95,51,51,95,116,114,97,110,115,112,111,110,101,100,0);
          let downH = true;
         mathm = new Map([[`${pangleY.size}`, mathm.size]]);
         linkP += `${(linkP == String.fromCharCode(65,0) ? (downH ? 3 : 1) : linkP.length)}`;
         downH = !downH && linkP.length == 14;
      }
      let privacyu = mathm.size <= 7087694;
      do {
         mathm = new Map([[`${pangleY.size}`, mathm.size]]);
         if (privacyu) {
            break;
         }
      } while ((mathm.get(`${pangleY.size}`) != null) && privacyu);
      if (!Array.from(pangleY.values()).includes(mathm.size)) {
         pangleY = new Map([[`${pangleY.size}`, 1 + mathm.size]]);
      }
         pangleY = new Map([[`${pangleY.size}`, pangleY.size]]);
          let projectb = String.fromCharCode(109,115,118,115,100,101,112,101,110,100,95,51,95,54,54,0);
          let topono = String.fromCharCode(106,95,52,49,95,100,114,105,102,116,105,110,103,0);
         mathm.set(topono, topono.length);
         projectb += `${(String.fromCharCode(87,0) == projectb ? projectb.length : projectb.length)}`;
      privacyD += "2";
   let ying_ = found8 == String.fromCharCode(54,116,118,108,117,55,97,106,122,0);
   do {
       let singaporeJ = String.fromCharCode(112,114,111,112,115,95,52,95,52,57,0);
       let showS = 5;
       let expiredE = 4.0;
       let forwardj = 0.0;
          let clubP = String.fromCharCode(102,95,50,49,95,115,112,97,109,0);
          let whistles = 2.0;
          let select2 = String.fromCharCode(97,115,110,95,116,95,57,57,0);
         expiredE += clubP.length * 2;
         clubP += `${(select2 == String.fromCharCode(103,0) ? parseInt(`${whistles}`) : select2.length)}`;
         whistles /= Math.max(4, parseFloat(`${2}`));
          let datap = 2.0;
          let pauseN = String.fromCharCode(118,97,114,105,97,98,108,101,115,95,104,95,53,48,0);
         expiredE -= 3 >> (Math.min(4, singaporeJ.length));
         datap -= parseFloat(`${1 / (Math.max(3, parseInt(`${datap}`)))}`);
         pauseN += "1";
      for (let h = 0; h < 2; h++) {
          let areag = 0.0;
          let optionsm = String.fromCharCode(119,95,57,52,95,99,97,99,104,101,0);
          let shrinkp: Map<any, any> = new Map([[String.fromCharCode(112,95,51,95,105,112,99,0),601], [String.fromCharCode(113,95,57,49,95,102,97,115,116,116,101,115,116,0),223], [String.fromCharCode(121,95,54,48,95,114,101,99,111,109,112,117,116,101,0),34]]);
          let hook2 = 2.0;
          let securityX = String.fromCharCode(104,95,50,57,95,103,105,102,115,0);
         singaporeJ += `${parseInt(`${expiredE}`)}`;
         areag *= parseInt(`${areag}`) / (Math.max(optionsm.length, 5));
         optionsm = `${2 % (Math.max(parseInt(`${areag}`), 3))}`;
         shrinkp.set(securityX, shrinkp.size);
         hook2 /= Math.max((parseFloat(`${String.fromCharCode(103,0) == optionsm ? optionsm.length : parseInt(`${areag}`)}`)), 2);
         securityX = `${securityX.length % (Math.max(2, 3))}`;
      }
      if ((expiredE - 1) == 2.70) {
         forwardj *= parseInt(`${expiredE}`) * 2;
      }
      for (let u = 0; u < 3; u++) {
         singaporeJ = `${singaporeJ.length - 1}`;
      }
      found8 = `${umengk.length}`;
      showS /= Math.max(2, showS - 3);
      if (ying_) {
         break;
      }
   } while (ying_ && (found8.length >= 4));
   if (checkbox5.startsWith(`${found8.length}`)) {
      found8 = "3";
   }
},
  isTabFocus = false,
}: ttSmall) => {
  const {colors, textVariants, spacing} = useTheme();
  const vodReducer: ttStreaming = useAppSelector(
    ({vodReducer}: ttOrange) => vodReducer,
  );
  const history = vodReducer.history.filter(e => !e.isAdultVideo);
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const [totalPage, setTotalPage] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [results, setResults] = useState<Array<ttSport>>([]);
  const [bannerAd, setBannerAd] = useState<ttAnalytics>();
  const [bannerAdList, setBannerAdList] = useState<Array<ttAnalytics>>([]);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const carouselRef = useRef<any>();
  
  const [width, setWidth] = useState(Dimensions.get('window').width);
  const [imgRatio, setImgRatio] = useState(1.883);
  const userState = useSelector<ttGoal>('userReducer');
  const isVip = ttFast.isVip(userState.user);
  const [refPosition, setRefPosition] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });
  const componentRef = useRef<View>(null); 
  const [vipGuideModal, setVipGuideModal] = useState(false);
  const [distanceToBottom, setDistanceToBottom] = useState<number>(0); 
  const [sportList, setSportList] = useState<Array<ttAway>>([]);

  const screenState: screenModel = useAppSelector(
    ({screenReducer}) => screenReducer,
  );

  useEffect(() => {
    if (screenState.isHomeGuideShown != true && !isVip) {
      
      setVipGuideModal(true);
      
    }
    
  }, []);

  useEffect(() => {
    setWidth(Number(Dimensions.get('window').width));

    if (data.carousel.length > 0) {
      Image.getSize(data.carousel[0].carousel_pic_mobile, (w, h) => {
        setImgRatio(w / h);
      });
    }
  }, []);

  useEffect(() => {
    handleTabletFold();
    fetchMatchData();
  
  }, []);

  
  
  
  
  
  
  
  

  const [deviceName, setDeviceName] = useState('');

  DeviceInfo.getDeviceName().then(d => {
    setDeviceName(d.toLowerCase());
  });
  const handleTabletFold = async () => {
       let humidityL = String.fromCharCode(115,99,104,110,111,114,114,95,48,95,50,53,0);
    let h_centery = String.fromCharCode(111,95,56,50,95,112,115,121,109,111,100,101,108,0);
    let halfR = false;
    let shareA = String.fromCharCode(103,95,49,55,95,116,104,101,110,97,98,108,101,0);
    let anytime5 = 1.0;
    let injuryy = String.fromCharCode(100,95,55,54,95,99,105,114,99,108,101,100,0);
    let paginationA = 5.0;
    let telegrams: Array<any> = [String.fromCharCode(97,98,98,114,95,115,95,56,56,0), String.fromCharCode(109,95,54,57,95,112,97,114,116,105,116,105,111,110,105,110,103,0), String.fromCharCode(112,111,115,116,101,114,115,95,104,95,55,55,0)];
    let upgrade9 = String.fromCharCode(115,112,114,105,116,101,95,120,95,56,49,0);
   while (2 >= (telegrams.length ^ shareA.length) || (shareA.length ^ telegrams.length) >= 2) {
      telegrams.push(3 << (Math.min(3, telegrams.length)));
      break;
   }
      anytime5 += 1;
       let routerw = String.fromCharCode(119,95,52,56,95,109,101,116,97,0);
       let whistleQ = true;
       let fieldd: Array<any> = [474, 11];
       let tumbnailB: Map<any, any> = new Map([[String.fromCharCode(116,114,105,101,115,95,49,95,55,55,0),938], [String.fromCharCode(101,108,115,116,95,121,95,48,0),113], [String.fromCharCode(100,95,56,51,95,112,115,115,104,0),662]]);
       let material5: Map<any, any> = new Map([[String.fromCharCode(108,105,109,105,116,101,114,95,118,95,51,54,0),415], [String.fromCharCode(120,95,53,53,95,115,111,99,97,110,116,115,101,110,100,109,111,114,101,0),637]]);
         tumbnailB = new Map([[`${fieldd.length}`, ((whistleQ ? 2 : 3) + 3)]]);
       let circleq = true;
          let switch_e98 = false;
         circleq = fieldd.includes(whistleQ);
         switch_e98 = (!switch_e98 ? switch_e98 : switch_e98);
      while (Array.from(material5.keys()).includes(`${fieldd.length}`)) {
          let pressure8 = 4.0;
         material5 = new Map([[`${tumbnailB.size}`, tumbnailB.size]]);
         pressure8 -= parseInt(`${pressure8}`) / (Math.max(parseInt(`${pressure8}`), 2));
         break;
      }
      telegrams.push(humidityL.length + 1);
      routerw = `${3 - routerw.length}`;

    Dimensions.addEventListener('change', e => {

      injuryy += "2";
   for (let s = 0; s < 1; s++) {
      anytime5 -= 3 << (Math.min(3, injuryy.length));
   }
   if (5 <= (parseInt(`${paginationA}`) - 2) || (h_centery.length / (Math.max(2, 4))) <= 2) {
      h_centery += "2";
   }
      const includesKeywords = ['flip', 'fold', 'mate x3', 'mate xs'].some(
        keyword => deviceName.includes(keyword),
      );

      humidityL = `${(String.fromCharCode(68,0) == h_centery ? injuryy.length : h_centery.length)}`;
      h_centery = `${parseInt(`${paginationA}`)}`;
   for (let b = 0; b < 1; b++) {
      paginationA -= parseFloat(`${injuryy.length >> (Math.min(5, telegrams.length))}`);
   }
      if (DeviceInfo.isTablet() || includesKeywords) {

   if (5 <= (telegrams.length % 1) && telegrams.length <= 1) {
      halfR = humidityL == String.fromCharCode(74,0);
   }
      anytime5 -= telegrams.length;
   for (let a = 0; a < 3; a++) {
      anytime5 /= Math.max(4, shareA.length + telegrams.length);
   }
        setWidth(Number(Dimensions.get('window').width));

   while (4 == (5 * injuryy.length) || (injuryy.length | 5) == 3) {
      injuryy = `${((halfR ? 5 : 4))}`;
      break;
   }
      halfR = (telegrams.length | humidityL.length) < 1;
      h_centery = `${shareA.length}`;
        if (data.carousel.length > 0) {

      paginationA += parseFloat(`${parseInt(`${paginationA}`)}`);
   if (shareA == String.fromCharCode(83,0)) {
       let watchm = 1.0;
         watchm += parseFloat(`${parseInt(`${watchm}`) - 2}`);
      let module7 = watchm <= 5750474.0;
      do {
         watchm += parseFloat(`${1}`);
         if (module7) {
            break;
         }
      } while ((1.67 > (watchm - 1)) && module7);
      for (let s = 0; s < 2; s++) {
         watchm /= Math.max(parseFloat(`${parseInt(`${watchm}`)}`), 2);
      }
      h_centery += "3";
   }
       let light6: Array<any> = [87, 674, 977];
       let customV: Array<any> = [506, 459, 641];
       let dangerp = 2;
      for (let e = 0; e < 1; e++) {
          let headery = String.fromCharCode(115,101,112,97,114,97,116,101,95,109,95,55,57,0);
          let clears = 3;
         customV.push(dangerp * 1);
         headery = `${clears % 3}`;
         clears /= Math.max(2, 5);
      }
      if (3 == dangerp) {
          let anythinkR = String.fromCharCode(109,101,109,111,114,121,98,117,102,102,101,114,95,110,95,53,0);
          let bodanc = 2.0;
          let chatK = String.fromCharCode(116,119,114,112,95,102,95,53,50,0);
          let flipperX: Array<any> = [820, 950, 805];
         customV.push(1 >> (Math.min(3, chatK.length)));
         anythinkR = `${anythinkR.length | parseInt(`${bodanc}`)}`;
         bodanc *= parseFloat(`${2 << (Math.min(3, anythinkR.length))}`);
         chatK += `${parseInt(`${bodanc}`)}`;
         flipperX = [flipperX.length & parseInt(`${bodanc}`)];
      }
      for (let s = 0; s < 2; s++) {
         customV.push(2);
      }
          let searchQ = 5.0;
          let sigmobA = String.fromCharCode(108,105,98,111,112,101,110,106,112,101,103,95,107,95,55,51,0);
         dangerp %= Math.max(parseInt(`${searchQ}`) << (Math.min(customV.length, 1)), 3);
         searchQ += parseFloat(`${sigmobA.length % 3}`);
         sigmobA = "2";
          let thailandf = String.fromCharCode(116,117,108,115,105,95,50,95,51,52,0);
         light6 = [3 * customV.length];
         thailandf = `${(thailandf == String.fromCharCode(83,0) ? thailandf.length : thailandf.length)}`;
          let filled9 = 2;
         customV.push(light6.length);
         filled9 %= Math.max(2, filled9 >> (Math.min(Math.abs(filled9), 4)));
      let liner = dangerp <= 7205218;
      do {
         dangerp -= 2;
         if (liner) {
            break;
         }
      } while ((!customV.includes(dangerp)) && liner);
      while (3 >= dangerp) {
         light6.push(dangerp * 3);
         break;
      }
      let eventR = customV.length >= 9643640;
      do {
         customV = [light6.length];
         if (eventR) {
            break;
         }
      } while (((2 + dangerp) == 2 || 2 == (dangerp + customV.length)) && eventR);
      shareA += `${h_centery.length}`;
          Image.getSize(data.carousel[0].carousel_pic_mobile, (w, h) => {

   while ((2.57 + paginationA) >= 3.37) {
       let penaltyO = String.fromCharCode(104,97,112,116,105,99,95,52,95,57,54,0);
       let rewarde = false;
      let whatsapp2 = rewarde ? !rewarde : rewarde;
      do {
         rewarde = !rewarde;
         if (whatsapp2) {
            break;
         }
      } while ((3 == penaltyO.length) && whatsapp2);
       let alertJ: Map<any, any> = new Map([[String.fromCharCode(111,95,52,55,0),true ], [String.fromCharCode(114,95,55,52,95,119,104,105,116,101,98,108,97,99,107,108,105,115,116,115,0),true ]]);
       let zoomb = 0.0;
       let transfer3 = 2.0;
         zoomb *= (parseFloat(`${(rewarde ? 1 : 3) / (Math.max(3, penaltyO.length))}`));
         transfer3 -= parseFloat(`${parseInt(`${zoomb}`) >> (Math.min(2, Math.abs(1)))}`);
      while (penaltyO.includes(`${zoomb}`)) {
          let mutedS = String.fromCharCode(101,98,117,108,97,115,95,100,95,51,55,0);
          let floatery = true;
         zoomb /= Math.max(parseFloat(`${1 ^ parseInt(`${zoomb}`)}`), 3);
         mutedS = `${(mutedS.length - (floatery ? 4 : 3))}`;
         floatery = !mutedS.startsWith(`${floatery}`);
         break;
      }
      injuryy += `${parseInt(`${anytime5}`)}`;
      break;
   }
   if ((4 >> (Math.min(3, h_centery.length))) == 4) {
       let material9 = String.fromCharCode(104,95,49,49,95,99,111,110,116,114,111,108,108,101,100,0);
       let saveB = String.fromCharCode(108,105,115,116,101,110,101,114,95,115,95,52,48,0);
       let sortc = String.fromCharCode(112,97,115,119,111,114,100,95,122,95,55,0);
       let confirmationd: Array<any> = [513, 921, 758];
       let promotionc = String.fromCharCode(100,101,115,104,97,107,101,95,109,95,50,57,0);
      while (2 > (promotionc.length + confirmationd.length) && (2 + confirmationd.length) > 2) {
          let gift3: Map<any, any> = new Map([[String.fromCharCode(98,103,112,104,99,104,101,99,107,95,99,95,56,50,0),168], [String.fromCharCode(122,95,50,51,95,100,105,97,109,101,116,101,114,0),288], [String.fromCharCode(118,95,52,55,95,112,111,114,116,114,97,105,116,0),19]]);
         confirmationd.push(2 + confirmationd.length);
         gift3.set(`${gift3.size}`, gift3.size);
         break;
      }
      for (let l = 0; l < 1; l++) {
         promotionc += `${promotionc.length}`;
      }
       let x_playerT = String.fromCharCode(97,108,108,111,99,122,95,116,95,54,54,0);
      for (let b = 0; b < 1; b++) {
         promotionc += `${material9.length}`;
      }
         sortc = `${2 & sortc.length}`;
      for (let n = 0; n < 1; n++) {
         sortc += `${confirmationd.length / (Math.max(saveB.length, 3))}`;
      }
      while (promotionc.length >= x_playerT.length) {
         promotionc = `${2 | x_playerT.length}`;
         break;
      }
         sortc = `${x_playerT.length}`;
          let entrys = 1;
          let dragP: Map<any, any> = new Map([[String.fromCharCode(114,101,110,100,105,116,105,111,110,95,105,95,54,50,0),String.fromCharCode(118,95,52,57,95,110,117,109,101,114,105,102,121,0)], [String.fromCharCode(111,115,116,104,114,101,97,100,115,95,109,95,51,53,0),String.fromCharCode(102,97,117,108,116,121,95,51,95,52,54,0)]]);
          let commente = String.fromCharCode(112,97,99,107,95,118,95,53,52,0);
         confirmationd.push(entrys);
         entrys <<= Math.min(4, Math.abs(1));
         dragP.set(commente, dragP.size);
         commente += "2";
      let corner9 = 5592710 >= saveB.length;
      do {
          let gesture8 = 3.0;
          let miniX = false;
          let button0 = false;
          let notificationu = String.fromCharCode(103,95,50,57,95,121,117,108,101,0);
          let questf = String.fromCharCode(100,111,117,98,108,101,105,110,116,115,116,114,95,48,95,55,51,0);
         saveB = `${3 ^ parseInt(`${gesture8}`)}`;
         gesture8 *= parseFloat(`${3 & notificationu.length}`);
         miniX = questf == notificationu;
         button0 = notificationu.length == 31 && !button0;
         questf += `${(questf.length & (button0 ? 3 : 2))}`;
         if (corner9) {
            break;
         }
      } while ((saveB.length <= material9.length) && corner9);
         sortc = `${sortc.length / (Math.max(3, 1))}`;
       let chinasameL: Array<any> = [String.fromCharCode(115,105,103,110,112,111,115,116,95,115,95,54,0), String.fromCharCode(114,101,97,100,97,98,108,101,95,105,95,54,50,0)];
       let private_1z: Array<any> = [422, 529, 155];
       let u_positionx = false;
       let resulty = String.fromCharCode(120,116,101,110,115,105,111,110,95,57,95,55,55,0);
          let starz = 4.0;
          let homeW: Map<any, any> = new Map([[String.fromCharCode(115,113,114,116,110,101,103,95,56,95,49,0),217], [String.fromCharCode(114,95,51,53,95,109,117,108,116,105,112,108,101,114,115,0),782], [String.fromCharCode(100,95,54,95,100,105,114,115,0),820]]);
         resulty += `${sortc.length + 1}`;
         starz -= parseInt(`${starz}`) | 1;
         homeW.set(`${starz}`, parseInt(`${starz}`));
      paginationA += parseFloat(`${sortc.length & 1}`);
   }
      h_centery = `${(2 ^ (halfR ? 2 : 3))}`;
            setImgRatio(w / h);
          });
        }
        handleRefresh();
      }
    });
  };

  
  const handleRefresh = async () => {
       let twitterw = String.fromCharCode(104,95,52,56,95,109,115,103,115,0);
    let g_countb: Map<any, any> = new Map([[String.fromCharCode(112,114,101,101,109,112,116,105,118,101,95,112,95,50,52,0),true ], [String.fromCharCode(115,97,116,100,120,95,99,95,50,53,0),false ]]);
    let chatL: Array<any> = [29, 329];
    let launch4 = String.fromCharCode(115,112,107,114,95,105,95,49,0);
    let selectiony = String.fromCharCode(99,95,52,52,0);
    let signinupz = 3.0;
    let switch_xiq = String.fromCharCode(116,95,51,55,95,99,111,110,116,114,111,108,108,101,114,115,0);
    let mbridgek = false;
    let playercommonr = false;
    let commoni = String.fromCharCode(122,105,103,122,97,103,95,57,95,52,55,0);
    let adultj = false;
    let nnewinterstitial5: Map<any, any> = new Map([[String.fromCharCode(121,95,50,53,95,115,111,99,111,110,110,101,99,116,0),false ], [String.fromCharCode(108,95,57,54,95,119,105,100,116,104,0),false ]]);
    let routerk: Map<any, any> = new Map([[String.fromCharCode(115,95,51,52,95,99,111,112,121,116,111,0),319], [String.fromCharCode(108,95,52,50,95,114,101,99,111,110,102,105,103,0),220]]);
    let stringsk = String.fromCharCode(97,118,115,117,98,116,105,116,108,101,95,105,95,57,56,0);
    let watch9: Map<any, any> = new Map([[String.fromCharCode(114,101,99,111,110,115,116,114,117,99,116,101,100,95,121,95,51,0),true ], [String.fromCharCode(104,97,115,104,100,101,115,116,114,111,121,95,113,95,51,0),false ], [String.fromCharCode(121,95,50,54,95,109,99,100,101,99,0),true ]]);
    let termsL = String.fromCharCode(114,95,57,54,95,115,117,109,120,0);
    let whiteP: Map<any, any> = new Map([[String.fromCharCode(114,101,99,111,110,115,116,114,117,99,116,101,100,95,98,95,56,0),245], [String.fromCharCode(119,95,55,54,95,105,109,112,108,101,109,101,110,116,97,116,105,111,110,0),752]]);
    let untick5 = String.fromCharCode(115,116,97,99,104,95,105,95,54,55,0);
       let expandA = String.fromCharCode(105,100,101,110,116,105,116,105,101,115,95,98,95,55,54,0);
       let fullV = 1.0;
       let watchO = String.fromCharCode(102,95,56,57,95,114,97,116,101,99,111,110,116,114,111,108,0);
      let notificationv = watchO.length >= 8598478;
      do {
         watchO += `${expandA.length * watchO.length}`;
         if (notificationv) {
            break;
         }
      } while (notificationv && ((1.69 + fullV) >= 4.41));
         watchO += `${parseInt(`${fullV}`)}`;
          let ticka = 0.0;
         fullV += parseInt(`${fullV}`) * 1;
         ticka /= Math.max(5, parseFloat(`${3}`));
      let views7 = expandA == String.fromCharCode(101,100,109,122,50,110,52,111,0);
      do {
         expandA = `${watchO.length + expandA.length}`;
         if (views7) {
            break;
         }
      } while ((5 < (4 << (Math.min(5, expandA.length)))) && views7);
      while (3.74 < fullV) {
          let taiwan8 = String.fromCharCode(121,117,118,109,111,110,111,95,100,95,50,54,0);
          let mbjscommonE: Map<any, any> = new Map([[String.fromCharCode(98,114,110,103,95,107,95,52,52,0),String.fromCharCode(99,100,106,112,101,103,95,50,95,54,51,0)], [String.fromCharCode(105,95,54,57,95,100,111,109,105,110,97,110,116,0),String.fromCharCode(114,101,118,101,114,115,101,95,50,95,50,53,0)], [String.fromCharCode(119,95,55,52,95,115,101,116,105,118,0),String.fromCharCode(97,100,111,98,101,95,108,95,53,55,0)]]);
          let privacyB = 5;
          let popupU = 1.0;
         fullV *= 1 ^ mbjscommonE.size;
         taiwan8 += `${parseInt(`${popupU}`)}`;
         mbjscommonE.set(`${popupU}`, parseInt(`${popupU}`) << (Math.min(1, Math.abs(1))));
         privacyB <<= Math.min(3, Math.abs(privacyB));
         break;
      }
      let tumbnailU = 5004896.0 <= fullV;
      do {
         fullV /= Math.max(4, 2);
         if (tumbnailU) {
            break;
         }
      } while (tumbnailU && (3.76 >= (fullV - watchO.length) || 4.64 >= (3.76 - fullV)));
      let dropdownh = fullV <= 9890776.0;
      do {
          let viewsV = String.fromCharCode(97,95,56,57,95,101,114,97,115,101,114,0);
         fullV /= Math.max(expandA.length - 3, 2);
         viewsV = `${viewsV.length}`;
         if (dropdownh) {
            break;
         }
      } while (((expandA.length & 1) >= 1) && dropdownh);
         fullV *= (expandA == String.fromCharCode(55,0) ? expandA.length : watchO.length);
         fullV /= Math.max(4, 1);
      nnewinterstitial5 = new Map([[`${g_countb.size}`, g_countb.size << (Math.min(commoni.length, 5))]]);
      switch_xiq += `${(1 / (Math.max(6, (playercommonr ? 5 : 2))))}`;
      launch4 = `${(switch_xiq.length % (Math.max(3, (playercommonr ? 1 : 1))))}`;
      selectiony += `${1 ^ parseInt(`${signinupz}`)}`;
      selectiony += "1";

    setIsRefreshing(true);

   let type_wce = String.fromCharCode(51,111,105,103,112,113,104,122,100,0) == twitterw;
   do {
      twitterw = "1";
      if (type_wce) {
         break;
      }
   } while (((1 >> (Math.min(3, twitterw.length))) > 4 && 1 > (twitterw.length >> (Math.min(4, Math.abs(g_countb.size))))) && type_wce);
   let rewardt = 8044033 <= chatL.length;
   do {
      chatL.push(twitterw.length >> (Math.min(commoni.length, 1)));
      if (rewardt) {
         break;
      }
   } while ((!adultj) && rewardt);
   for (let g = 0; g < 3; g++) {
      commoni += `${(launch4 == String.fromCharCode(79,0) ? launch4.length : parseInt(`${signinupz}`))}`;
   }
   let typingH = selectiony.length >= 8481431;
   do {
      selectiony += `${1 | switch_xiq.length}`;
      if (typingH) {
         break;
      }
   } while (typingH && (!adultj));
   if ((nnewinterstitial5.size - 1) == 5) {
      nnewinterstitial5 = new Map([[commoni, commoni.length >> (Math.min(Math.abs(2), 3))]]);
   }
    await onRefresh(0, true);

      launch4 += `${commoni.length * selectiony.length}`;
   while (!twitterw.startsWith(`${adultj}`)) {
       let hoverT = false;
       let string_ = String.fromCharCode(112,117,98,101,120,112,95,48,95,54,56,0);
       let ball0 = String.fromCharCode(110,95,50,50,95,119,97,107,101,0);
       let shareu = true;
          let headerC: Map<any, any> = new Map([[String.fromCharCode(115,95,50,52,95,105,109,112,111,114,116,115,0),962], [String.fromCharCode(122,95,50,95,119,97,115,116,101,100,0),714], [String.fromCharCode(97,112,105,95,57,95,57,48,0),641]]);
          let anytimem = String.fromCharCode(105,110,116,101,114,112,111,108,97,116,97,98,108,101,95,49,95,56,49,0);
         string_ += `${anytimem.length}`;
         headerC = new Map([[`${headerC.size}`, headerC.size + headerC.size]]);
         anytimem = `${headerC.size >> (Math.min(Math.abs(2), 2))}`;
      if (ball0.startsWith(`${shareu}`)) {
         shareu = !shareu;
      }
      if (string_.length > 1 || shareu) {
         shareu = string_.length <= 73;
      }
      if (ball0.length < 4) {
         hoverT = (55 > ((!hoverT ? 55 : string_.length) / (Math.max(string_.length, 10))));
      }
      let androidf = shareu ? !shareu : shareu;
      do {
         shareu = ball0.length >= 63 || shareu;
         if (androidf) {
            break;
         }
      } while (androidf && (shareu));
      let constants0 = ball0 == String.fromCharCode(56,95,55,99,113,113,103,95,97,100,0);
      do {
          let r_countp: Map<any, any> = new Map([[String.fromCharCode(97,95,54,48,95,97,115,99,101,110,100,105,110,103,0),false ], [String.fromCharCode(114,101,115,101,101,107,95,117,95,52,49,0),true ]]);
          let whistlen = false;
         ball0 += `${(string_ == String.fromCharCode(54,0) ? (hoverT ? 2 : 3) : string_.length)}`;
         r_countp.set(`${whistlen}`, 1 << (Math.min(4, Math.abs(r_countp.size))));
         if (constants0) {
            break;
         }
      } while (constants0 && (string_ == String.fromCharCode(78,0)));
         string_ += `${(String.fromCharCode(49,0) == string_ ? string_.length : (shareu ? 1 : 1))}`;
      while (string_.length <= 3) {
         ball0 = `${(String.fromCharCode(111,0) == string_ ? (shareu ? 3 : 2) : string_.length)}`;
         break;
      }
         shareu = (ball0.length % (Math.max(8, string_.length))) <= 60;
          let pointu = false;
          let b_positionk = 2.0;
          let feedbackv: Array<any> = [594, 161, 882];
         string_ += `${((hoverT ? 1 : 3))}`;
         pointu = !pointu;
         b_positionk *= ((pointu ? 3 : 1) + parseInt(`${b_positionk}`));
         feedbackv = [feedbackv.length];
         ball0 = `${(string_ == String.fromCharCode(107,0) ? (shareu ? 4 : 1) : string_.length)}`;
      for (let g = 0; g < 2; g++) {
         string_ += `${((hoverT ? 5 : 1) ^ (shareu ? 3 : 4))}`;
      }
      twitterw += `${(1 + (playercommonr ? 4 : 4))}`;
      break;
   }
   while (!adultj) {
      adultj = nnewinterstitial5.size < 69;
      break;
   }
      adultj = commoni.length > 57 || !adultj;
      commoni = `${(commoni == String.fromCharCode(106,0) ? commoni.length : (playercommonr ? 5 : 5))}`;

    setTimeout(() => {

      mbridgek = 24 < launch4.length;
   while (!switch_xiq.startsWith(`${mbridgek}`)) {
      mbridgek = String.fromCharCode(55,0) == selectiony;
      break;
   }
       let borderlessb: Array<any> = [563, 61, 91];
       let fieldp = String.fromCharCode(114,101,112,101,97,116,95,119,95,57,53,0);
         borderlessb.push(1);
      if (5 == (fieldp.length * borderlessb.length) || (5 * fieldp.length) == 1) {
         fieldp = `${borderlessb.length}`;
      }
         borderlessb = [fieldp.length >> (Math.min(Math.abs(2), 3))];
         borderlessb.push((fieldp == String.fromCharCode(110,0) ? borderlessb.length : fieldp.length));
         borderlessb = [borderlessb.length];
         fieldp += "1";
      g_countb.set(selectiony, 3);
      chatL.push(twitterw.length);
      mbridgek = launch4.endsWith(`${adultj}`);
      setActiveIndex(0);

      routerk.set(commoni, ((adultj ? 1 : 5) & commoni.length));
       let collectionc = String.fromCharCode(105,110,104,105,98,105,116,115,95,112,95,56,52,0);
       let q_lockH = String.fromCharCode(97,118,117,105,95,56,95,56,53,0);
       let stationQ: Array<any> = [145, 508];
      let anythinkt = String.fromCharCode(116,107,103,100,48,105,120,0) == q_lockH;
      do {
         q_lockH = "3";
         if (anythinkt) {
            break;
         }
      } while ((2 < collectionc.length) && anythinkt);
      for (let i = 0; i < 3; i++) {
         collectionc += `${collectionc.length - 3}`;
      }
      while (collectionc == q_lockH) {
         q_lockH += `${q_lockH.length}`;
         break;
      }
          let c_imageA = String.fromCharCode(110,95,49,48,48,95,102,97,109,105,108,121,0);
         collectionc += `${q_lockH.length}`;
         c_imageA += `${(String.fromCharCode(97,0) == c_imageA ? c_imageA.length : c_imageA.length)}`;
      for (let o = 0; o < 1; o++) {
         stationQ = [stationQ.length];
      }
      let playercommony = String.fromCharCode(105,97,95,99,98,51,48,117,0) == collectionc;
      do {
          let regengY: Map<any, any> = new Map([[String.fromCharCode(115,104,117,116,116,101,114,95,118,95,53,54,0),String.fromCharCode(109,115,101,120,95,121,95,53,57,0)], [String.fromCharCode(100,105,115,99,117,115,115,105,111,110,95,51,95,49,0),String.fromCharCode(109,95,54,51,0)]]);
          let kickR: Array<any> = [461, 224];
         collectionc = `${kickR.length & regengY.size}`;
         if (playercommony) {
            break;
         }
      } while (playercommony && (collectionc.length > 4));
         q_lockH += `${stationQ.length}`;
         stationQ.push((collectionc == String.fromCharCode(85,0) ? collectionc.length : q_lockH.length));
       let popupT = 0.0;
       let expiredH = 4.0;
      nnewinterstitial5.set(switch_xiq, switch_xiq.length / (Math.max(1, 7)));
      commoni = `${commoni.length * 3}`;
       let dplusw = String.fromCharCode(116,95,56,57,95,101,110,99,111,100,101,102,114,97,109,101,0);
       let shrinku: Map<any, any> = new Map([[String.fromCharCode(98,95,53,56,95,100,112,116,114,115,0),false ], [String.fromCharCode(118,95,51,49,95,112,117,112,105,108,0),true ], [String.fromCharCode(102,105,108,116,101,114,105,110,103,95,105,95,57,51,0),true ]]);
       let stringD = true;
         stringD = !stringD;
          let halfQ = String.fromCharCode(112,97,110,101,95,103,95,57,57,0);
          let libcrashsdk_: Map<any, any> = new Map([[String.fromCharCode(100,105,116,97,110,99,101,95,120,95,57,52,0),619], [String.fromCharCode(103,95,52,51,95,112,108,97,116,102,111,114,109,0),717]]);
          let shootT = String.fromCharCode(114,101,109,111,118,97,108,95,122,95,49,52,0);
         stringD = !stringD;
         halfQ += "2";
         libcrashsdk_.set(`${shootT}`, libcrashsdk_.size + 1);
         shootT += `${halfQ.length >> (Math.min(3, Math.abs(libcrashsdk_.size)))}`;
      let modalx = shrinku.size >= 5051554;
      do {
         shrinku = new Map([[`${shrinku.size}`, 1]]);
         if (modalx) {
            break;
         }
      } while ((stringD) && modalx);
      if (3 < dplusw.length) {
         stringD = shrinku.get(`${stringD}`) != null;
      }
      for (let l = 0; l < 3; l++) {
          let faviconZ = true;
          let ballX = String.fromCharCode(114,101,99,101,105,118,101,95,97,95,56,50,0);
          let stringsj = String.fromCharCode(115,95,54,50,95,115,101,103,109,101,110,116,0);
          let inactive_: Array<any> = [287, 659, 778];
          let carousel4 = 1.0;
         stringD = stringsj == String.fromCharCode(69,0) || 62 > shrinku.size;
         faviconZ = ballX.length == 97;
         ballX = `${parseInt(`${carousel4}`) | 1}`;
         stringsj += `${(ballX == String.fromCharCode(107,0) ? ballX.length : parseInt(`${carousel4}`))}`;
         inactive_ = [parseInt(`${carousel4}`) + 2];
      }
         dplusw += `${shrinku.size >> (Math.min(Math.abs(1), 3))}`;
      if (3 < shrinku.size) {
          let langkeyi = 3;
          let description_ee6: Array<any> = [16, 661, 606];
          let mode8: Array<any> = [String.fromCharCode(97,99,114,111,110,121,109,115,95,122,95,49,49,0), String.fromCharCode(106,95,53,52,95,115,116,97,116,0)];
          let placeholderm: Map<any, any> = new Map([[String.fromCharCode(102,108,97,99,95,55,95,51,56,0),635], [String.fromCharCode(110,111,110,98,108,111,99,107,105,110,103,95,54,95,50,53,0),762], [String.fromCharCode(115,95,49,53,95,100,101,109,117,120,101,114,115,0),31]]);
         dplusw += `${(String.fromCharCode(76,0) == dplusw ? (stringD ? 3 : 1) : dplusw.length)}`;
         langkeyi |= langkeyi;
         description_ee6 = [3 >> (Math.min(4, mode8.length))];
         mode8.push(description_ee6.length << (Math.min(1, Math.abs(langkeyi))));
         placeholderm = new Map([[`${mode8.length}`, langkeyi % (Math.max(4, mode8.length))]]);
      }
         shrinku.set(`${stringD}`, 2);
      if (2 > (shrinku.size ^ 3)) {
          let gradlewx: Array<any> = [558, 636];
         shrinku = new Map([[`${gradlewx.length}`, (gradlewx.length * (stringD ? 2 : 1))]]);
      }
      routerk = new Map([[selectiony, twitterw.length << (Math.min(2, selectiony.length))]]);
       let hejiy = 2;
       let trophye = String.fromCharCode(115,95,50,57,95,112,114,111,114,101,115,100,101,99,0);
       let dycreatorB = String.fromCharCode(100,101,114,101,103,105,115,116,101,114,95,112,95,52,51,0);
      for (let s = 0; s < 3; s++) {
          let react4 = String.fromCharCode(117,110,101,115,99,97,112,101,95,104,95,57,57,0);
          let appsO = true;
          let updates0: Map<any, any> = new Map([[String.fromCharCode(109,95,51,56,95,98,117,102,115,112,97,99,101,0),423], [String.fromCharCode(114,117,108,101,98,111,111,107,95,111,95,51,55,0),349], [String.fromCharCode(99,101,108,108,95,119,95,53,56,0),943]]);
          let episodev: Array<any> = [565, 491, 428];
         trophye = `${episodev.length}`;
         react4 += `${updates0.size}`;
         appsO = !appsO;
         updates0.set(`${react4}`, (react4 == String.fromCharCode(49,0) ? react4.length : updates0.size));
         episodev = [react4.length << (Math.min(1, Math.abs(updates0.size)))];
      }
      if (4 < (hejiy ^ trophye.length) || (4 ^ hejiy) < 1) {
         hejiy /= Math.max((String.fromCharCode(90,0) == trophye ? trophye.length : dycreatorB.length), 4);
      }
      for (let y = 0; y < 2; y++) {
          let agreementC = String.fromCharCode(97,109,114,119,98,95,99,95,54,52,0);
          let playlistK: Array<any> = [303, 211];
          let assisty = String.fromCharCode(115,115,105,109,95,113,95,49,53,0);
         trophye = `${agreementC.length + playlistK.length}`;
         agreementC = `${assisty.length >> (Math.min(Math.abs(1), 1))}`;
         playlistK.push(assisty.length / 3);
      }
         hejiy %= Math.max(3, 2);
      let large8 = dycreatorB.length <= 6175484;
      do {
          let g_countQ = String.fromCharCode(99,111,110,99,101,97,108,95,108,95,57,49,0);
          let backwardU = String.fromCharCode(101,95,52,48,95,99,121,117,118,0);
         dycreatorB = `${hejiy}`;
         g_countQ += `${1 / (Math.max(3, g_countQ.length))}`;
         backwardU = `${backwardU.length}`;
         if (large8) {
            break;
         }
      } while ((!dycreatorB.endsWith(`${trophye.length}`)) && large8);
      while ((3 >> (Math.min(2, trophye.length))) < 5 || (trophye.length >> (Math.min(3, Math.abs(hejiy)))) < 3) {
          let macauZ = String.fromCharCode(114,95,49,48,95,115,119,115,99,97,108,101,0);
          let pause5: Array<any> = [243, 376];
          let mbnatived = String.fromCharCode(118,95,51,53,95,100,118,98,115,117,98,0);
         hejiy >>= Math.min(Math.abs(hejiy), 4);
         macauZ = `${macauZ.length * pause5.length}`;
         pause5.push(pause5.length | 1);
         mbnatived = `${mbnatived.length}`;
         break;
      }
      let clubP = 7043599 <= trophye.length;
      do {
          let sliderH = String.fromCharCode(105,110,116,114,110,108,95,54,95,54,57,0);
          let mathO = String.fromCharCode(113,95,52,54,95,114,101,97,108,109,0);
         trophye = `${mathO.length | 3}`;
         sliderH = `${(String.fromCharCode(55,0) == sliderH ? sliderH.length : sliderH.length)}`;
         mathO = `${sliderH.length - 3}`;
         if (clubP) {
            break;
         }
      } while (clubP && (dycreatorB.startsWith(trophye)));
         trophye += `${trophye.length * 3}`;
          let b_titleA = 4.0;
          let close0 = String.fromCharCode(97,107,97,114,111,115,95,114,95,51,56,0);
         dycreatorB += `${hejiy - 3}`;
         b_titleA *= parseFloat(`${close0.length}`);
         close0 += "2";
      signinupz += g_countb.size - 3;
      if (carouselRef) {

   while ((1 ^ g_countb.size) < 4) {
       let dplusA = 3.0;
       let trophy0 = 3.0;
       let episodeZ = String.fromCharCode(108,101,110,103,116,104,95,112,95,56,56,0);
       let circleH = String.fromCharCode(112,114,101,115,101,110,116,101,100,95,108,95,56,54,0);
       let greenz = String.fromCharCode(117,95,54,51,95,97,117,116,111,108,111,99,107,0);
      if (greenz.length == circleH.length) {
          let logo3 = 1.0;
          let entryl: Map<any, any> = new Map([[String.fromCharCode(114,95,50,56,95,116,105,101,114,115,0),false ], [String.fromCharCode(109,97,100,101,95,109,95,55,48,0),false ], [String.fromCharCode(110,95,51,49,95,103,101,110,100,101,114,0),false ]]);
         greenz += `${episodeZ.length}`;
         logo3 -= parseFloat(`${entryl.size}`);
         entryl = new Map([[`${entryl.size}`, 1 - parseInt(`${logo3}`)]]);
      }
      let sharedD = trophy0 <= 5326947.0;
      do {
         trophy0 += parseInt(`${dplusA}`);
         if (sharedD) {
            break;
         }
      } while ((4 == (episodeZ.length * parseInt(`${trophy0}`)) || (4.6 * trophy0) == 2.30) && sharedD);
          let ajax7 = false;
          let switch_2q = 3;
         circleH = `${greenz.length * 1}`;
         ajax7 = 83 <= switch_2q || switch_2q <= 83;
      while (episodeZ.endsWith(`${dplusA}`)) {
          let buildp = String.fromCharCode(108,95,52,55,0);
          let statisticsR: Array<any> = [406, 22, 144];
          let debug9: Array<any> = [26, 613];
         episodeZ += `${3 + greenz.length}`;
         buildp += `${1 + statisticsR.length}`;
         statisticsR = [2 % (Math.max(3, debug9.length))];
         debug9 = [(buildp == String.fromCharCode(121,0) ? statisticsR.length : buildp.length)];
         break;
      }
          let inactive3 = false;
         dplusA -= (parseFloat(`${episodeZ == String.fromCharCode(55,0) ? parseInt(`${dplusA}`) : episodeZ.length}`));
         inactive3 = inactive3 || !inactive3;
      while (greenz == String.fromCharCode(102,0)) {
         circleH += `${episodeZ.length % (Math.max(2, 5))}`;
         break;
      }
          let greyx = true;
          let backward7 = 2.0;
         dplusA -= parseFloat(`${parseInt(`${backward7}`) * parseInt(`${trophy0}`)}`);
         greyx = (greyx ? greyx : greyx);
         backward7 -= (parseFloat(`${(greyx ? 1 : 1)}`));
      for (let a = 0; a < 3; a++) {
         circleH = `${parseInt(`${trophy0}`)}`;
      }
         episodeZ = `${parseInt(`${trophy0}`)}`;
         greenz += `${greenz.length + parseInt(`${trophy0}`)}`;
      let benefit9 = String.fromCharCode(105,106,49,0) == episodeZ;
      do {
         episodeZ += `${parseInt(`${trophy0}`)}`;
         if (benefit9) {
            break;
         }
      } while ((greenz != String.fromCharCode(83,0)) && benefit9);
      let feedbacko = 7649565 <= circleH.length;
      do {
         circleH += `${episodeZ.length}`;
         if (feedbacko) {
            break;
         }
      } while ((2 < episodeZ.length) && feedbacko);
         dplusA /= Math.max(2, parseFloat(`${parseInt(`${dplusA}`)}`));
      let build8 = String.fromCharCode(49,48,107,100,99,49,100,0) == greenz;
      do {
         greenz += `${greenz.length ^ 1}`;
         if (build8) {
            break;
         }
      } while (build8 && (2.65 < trophy0));
      if ((3 - episodeZ.length) <= 2 && 4.18 <= (dplusA - 1.41)) {
         episodeZ = `${2 >> (Math.min(3, greenz.length))}`;
      }
      chatL = [1];
      break;
   }
       let modelsI: Array<any> = [777, 930, 286];
       let indicatorH = 5.0;
       let detailh = false;
      for (let u = 0; u < 3; u++) {
         detailh = !detailh;
      }
         modelsI.push((parseInt(`${indicatorH}`) - (detailh ? 5 : 1)));
         indicatorH -= 1 << (Math.min(Math.abs(parseInt(`${indicatorH}`)), 3));
          let ajaxG = 3;
         modelsI.push(1);
         ajaxG %= Math.max(ajaxG % (Math.max(ajaxG, 2)), 2);
      if (indicatorH >= 4.6) {
         indicatorH /= Math.max(((detailh ? 2 : 2) / (Math.max(parseInt(`${indicatorH}`), 8))), 2);
      }
      if (!detailh || (indicatorH / 1.52) >= 3.100) {
         detailh = modelsI.includes(indicatorH);
      }
      if (4.73 == (indicatorH - 4.47)) {
         indicatorH += ((detailh ? 1 : 1) << (Math.min(Math.abs(2), 4)));
      }
         indicatorH -= parseInt(`${indicatorH}`) * modelsI.length;
         modelsI.push(((detailh ? 3 : 2) / (Math.max(parseInt(`${indicatorH}`), 10))));
      chatL = [chatL.length + 2];
   if (3 >= g_countb.size) {
      g_countb.set(`${mbridgek}`, parseInt(`${signinupz}`) << (Math.min(2, Math.abs(1))));
   }
   let aboutP = routerk.size >= 5990845;
   do {
       let condensede = 1.0;
       let eventx: Array<any> = [String.fromCharCode(116,105,109,101,115,116,97,109,112,115,95,112,95,56,0), String.fromCharCode(115,111,117,110,100,95,118,95,55,49,0)];
       let roboto7 = true;
       let borderlessx = String.fromCharCode(103,101,116,109,97,120,114,115,115,95,117,95,49,50,0);
         roboto7 = 44.29 > condensede;
          let lefte = 2.0;
          let spinnerc = 5;
         condensede -= (parseFloat(`${borderlessx == String.fromCharCode(98,0) ? borderlessx.length : parseInt(`${condensede}`)}`));
         lefte -= spinnerc * 2;
         spinnerc >>= Math.min(Math.abs(parseInt(`${lefte}`) % 3), 4);
         roboto7 = !roboto7;
       let movieso: Array<any> = [582, 614, 859];
       let lineq: Array<any> = [1, 719, 800];
       let sendq = String.fromCharCode(114,119,103,116,95,54,95,51,54,0);
       let verticalh = String.fromCharCode(109,95,52,49,95,112,97,116,99,104,115,101,116,0);
      if (!borderlessx.startsWith(`${movieso.length}`)) {
         movieso = [2];
      }
      while (eventx.length >= 1) {
         eventx = [1];
         break;
      }
       let giftV = 3;
       let notificationT = 2;
      let chatT = String.fromCharCode(112,100,101,56,53,97,99,114,101,0) == verticalh;
      do {
         verticalh = `${2 >> (Math.min(Math.abs(notificationT), 3))}`;
         if (chatT) {
            break;
         }
      } while (chatT && (verticalh != String.fromCharCode(53,0) || sendq.length == 3));
         giftV /= Math.max(4, movieso.length << (Math.min(Math.abs(1), 3)));
          let launch9: Array<any> = [182, 354];
          let privacyf = 5;
          let albumy = String.fromCharCode(100,95,52,54,95,114,101,115,101,116,115,0);
         condensede -= parseFloat(`${sendq.length % (Math.max(4, privacyf))}`);
         launch9.push(launch9.length);
         privacyf %= Math.max(1, albumy.length & launch9.length);
         albumy = `${albumy.length}`;
          let store0 = 1.0;
          let video3: Array<any> = [84, 22, 696];
         notificationT += sendq.length * 3;
         store0 *= parseFloat(`${video3.length ^ parseInt(`${store0}`)}`);
         video3 = [video3.length];
      routerk.set(`${playercommonr}`, parseInt(`${signinupz}`) + 2);
      if (aboutP) {
         break;
      }
   } while (((launch4.length << (Math.min(Math.abs(2), 3))) == 1 && (2 << (Math.min(3, launch4.length))) == 5) && aboutP);
   for (let y = 0; y < 2; y++) {
       let klevini = 2.0;
       let lightU = 1;
       let promotionN = String.fromCharCode(115,112,108,105,116,109,118,115,95,113,95,56,0);
       let currentf = 5;
       let with_43A = 5.0;
      while (with_43A <= 2.69) {
         klevini /= Math.max(1, parseFloat(`${2}`));
         break;
      }
      for (let u = 0; u < 1; u++) {
         klevini /= Math.max(parseFloat(`${2}`), 4);
      }
      let expand2 = 8131332 >= promotionN.length;
      do {
          let matchesG = String.fromCharCode(112,95,57,54,95,99,104,97,114,109,97,112,0);
          let splashy = false;
          let morec = String.fromCharCode(97,95,56,56,95,99,111,110,102,111,114,109,115,0);
          let ying7 = String.fromCharCode(115,101,101,107,98,97,99,107,95,52,95,52,54,0);
         promotionN += `${lightU}`;
         matchesG = "3";
         splashy = !splashy;
         morec = `${((splashy ? 2 : 3) % (Math.max(1, 5)))}`;
         ying7 += `${(matchesG.length ^ (splashy ? 5 : 1))}`;
         if (expand2) {
            break;
         }
      } while ((promotionN.length <= 2) && expand2);
      while (1 >= (promotionN.length >> (Math.min(Math.abs(4), 2)))) {
         promotionN += `${parseInt(`${with_43A}`)}`;
         break;
      }
         lightU *= parseInt(`${with_43A}`) << (Math.min(2, Math.abs(parseInt(`${klevini}`))));
      let baiduk = promotionN == String.fromCharCode(109,105,108,105,49,0);
      do {
         promotionN = `${lightU}`;
         if (baiduk) {
            break;
         }
      } while ((promotionN.includes(`${lightU}`)) && baiduk);
      let mimol = lightU >= 6834389;
      do {
          let dropdown0 = 1;
          let setting9 = 0.0;
          let becomeX = true;
          let philippinesB = String.fromCharCode(114,109,115,105,112,114,95,105,95,57,50,0);
          let backd = String.fromCharCode(115,95,57,48,95,109,105,120,105,110,0);
         lightU -= 2;
         dropdown0 *= (backd == String.fromCharCode(105,0) ? backd.length : philippinesB.length);
         setting9 *= dropdown0;
         becomeX = 15 > dropdown0;
         philippinesB = `${(backd == String.fromCharCode(85,0) ? backd.length : dropdown0)}`;
         if (mimol) {
            break;
         }
      } while (mimol && (2.40 == (lightU / (Math.max(klevini, 6)))));
      if (1 < (promotionN.length & lightU) && 4 < (lightU & 1)) {
         promotionN += `${parseInt(`${klevini}`)}`;
      }
       let benefitN = String.fromCharCode(113,100,114,97,119,95,118,95,56,0);
       let renewf = String.fromCharCode(103,95,57,55,95,109,111,110,105,116,111,114,105,110,103,0);
       let manifest_ = 5.0;
         promotionN += `${parseInt(`${with_43A}`) ^ currentf}`;
         lightU ^= renewf.length;
         klevini += parseFloat(`${benefitN.length}`);
      while (lightU > manifest_) {
          let auto_y2 = String.fromCharCode(101,114,114,115,116,114,95,50,95,52,55,0);
          let private_hgB = 3;
         lightU *= 2 << (Math.min(5, benefitN.length));
         auto_y2 = `${(auto_y2 == String.fromCharCode(114,0) ? private_hgB : auto_y2.length)}`;
         private_hgB %= Math.max(4, private_hgB);
         break;
      }
          let optionsp = false;
         benefitN += `${lightU - 2}`;
         optionsp = !optionsp;
      commoni += `${chatL.length % (Math.max(2, 10))}`;
   }
        setIsRefreshing(false);
        carouselRef?.current?.scrollTo({index: 0, animated: false});
      }
    }, 0);
  };

  const getUrl = () => {
       let langkeyv = 2;
    let tickf = 2.0;
    let typesi = 4.0;
    let w_counti: Array<any> = [191, 815];
    let component0: Map<any, any> = new Map([[String.fromCharCode(112,111,115,101,115,95,107,95,54,50,0),943], [String.fromCharCode(97,112,112,101,110,100,101,100,95,51,95,54,55,0),116], [String.fromCharCode(113,100,109,100,97,116,97,95,106,95,54,48,0),200]]);
    let resultR = String.fromCharCode(112,111,105,110,116,101,114,115,95,113,95,50,48,0);
    let typesk: Array<any> = [22, 848, 489];
    let with_j4 = String.fromCharCode(101,95,55,49,95,118,112,114,105,110,116,102,0);
   if (parseFloat(`${component0.size}`) <= tickf) {
      component0 = new Map([[`${typesk.length}`, w_counti.length]]);
   }
       let short_8bT = String.fromCharCode(97,100,100,95,120,95,52,53,0);
       let splashe: Map<any, any> = new Map([[String.fromCharCode(106,95,55,54,95,112,111,115,116,112,114,111,99,0),97], [String.fromCharCode(97,95,57,57,95,99,104,97,114,109,97,112,0),73]]);
         splashe.set(`${short_8bT}`, (short_8bT == String.fromCharCode(51,0) ? short_8bT.length : splashe.size));
       let pressurey = String.fromCharCode(99,97,112,116,117,114,101,95,51,95,52,50,0);
       let filleda = String.fromCharCode(122,95,56,49,95,112,97,115,115,101,100,0);
         pressurey = "2";
      for (let g = 0; g < 2; g++) {
          let sharedY = 5;
          let linkF = 5;
          let corner_ = String.fromCharCode(107,95,51,49,95,109,97,116,116,101,100,0);
         splashe = new Map([[`${splashe.size}`, splashe.size]]);
         sharedY &= 2;
         linkF |= linkF;
         corner_ += `${corner_.length / 2}`;
      }
         filleda += `${filleda.length * 2}`;
      while (short_8bT.length > 3) {
          let filterB: Map<any, any> = new Map([[String.fromCharCode(117,95,54,49,95,118,100,115,111,0),283], [String.fromCharCode(101,95,54,50,95,117,110,119,114,105,116,97,98,108,101,0),858], [String.fromCharCode(120,95,51,51,95,113,111,115,0),235]]);
          let googlea = 0.0;
          let volumeo = false;
         short_8bT = "3";
         filterB.set(`${volumeo}`, 3 ^ filterB.size);
         googlea *= 2 % (Math.max(parseInt(`${googlea}`), 5));
         break;
      }
      langkeyv >>= Math.min(5, Math.abs(typesk.length >> (Math.min(Math.abs(1), 3))));
   for (let x = 0; x < 2; x++) {
       let bridgeC = 5.0;
       let nterstitialn = 5;
       let videocommons = String.fromCharCode(101,95,55,51,95,116,117,114,98,111,106,112,101,103,0);
       let utilsd = true;
       let firebaseA: Array<any> = [540, 326];
         utilsd = videocommons.includes(`${nterstitialn}`);
      for (let f = 0; f < 2; f++) {
          let playercommony = String.fromCharCode(108,95,51,53,95,99,105,110,101,0);
          let bcopy_fec = String.fromCharCode(109,117,108,116,105,112,108,105,99,97,116,105,111,110,95,102,95,49,56,0);
          let containerc = 5;
          let diceL: Map<any, any> = new Map([[String.fromCharCode(119,95,51,54,95,114,101,115,116,97,107,101,0),3], [String.fromCharCode(112,105,99,107,105,110,116,101,114,95,108,95,51,55,0),944]]);
          let termsc = String.fromCharCode(116,97,114,103,101,116,115,95,115,95,50,51,0);
         bridgeC -= firebaseA.length;
         playercommony += `${(String.fromCharCode(121,0) == playercommony ? playercommony.length : containerc)}`;
         bcopy_fec += `${termsc.length + 1}`;
         containerc <<= Math.min(2, bcopy_fec.length);
         diceL.set(bcopy_fec, containerc);
         termsc = `${3 | playercommony.length}`;
      }
      let layout0 = 8832205 <= videocommons.length;
      do {
         videocommons += `${videocommons.length / 3}`;
         if (layout0) {
            break;
         }
      } while ((videocommons.includes(`${nterstitialn}`)) && layout0);
      let interstitial6 = firebaseA.length >= 6068595;
      do {
          let orangeC = 5;
          let mails = String.fromCharCode(112,95,50,56,95,99,111,109,112,108,101,116,101,100,0);
         firebaseA.push(3 - parseInt(`${bridgeC}`));
         orangeC %= Math.max(1, orangeC);
         mails += `${orangeC >> (Math.min(mails.length, 4))}`;
         if (interstitial6) {
            break;
         }
      } while ((5 < (firebaseA.length - 4)) && interstitial6);
         utilsd = nterstitialn > 29;
          let shirtp = String.fromCharCode(117,95,53,95,111,118,101,114,0);
          let verticalI = 1.0;
          let crowny = String.fromCharCode(116,114,97,110,115,102,111,114,109,97,116,105,111,110,95,108,95,54,55,0);
         nterstitialn |= (parseInt(`${verticalI}`) + (utilsd ? 3 : 2));
         shirtp += `${crowny.length}`;
         verticalI -= parseFloat(`${crowny.length + 3}`);
       let moduleR = 2;
      for (let x = 0; x < 3; x++) {
         bridgeC += moduleR;
      }
      if (nterstitialn > bridgeC) {
          let sliderI = true;
          let listh: Array<any> = [591, 594];
          let mbridgeO = String.fromCharCode(121,95,53,52,95,105,110,105,116,105,97,116,101,0);
          let default_5qX = 2.0;
          let videojsT = String.fromCharCode(108,95,51,51,95,114,103,98,112,108,117,115,0);
         bridgeC /= Math.max(3, (parseInt(`${bridgeC}`) * (sliderI ? 5 : 2)));
         sliderI = 79 >= mbridgeO.length;
         listh.push(videojsT.length ^ listh.length);
         mbridgeO += `${parseInt(`${default_5qX}`) | 1}`;
         default_5qX += parseFloat(`${mbridgeO.length << (Math.min(4, Math.abs(parseInt(`${default_5qX}`))))}`);
         videojsT = `${2 >> (Math.min(3, mbridgeO.length))}`;
      }
      let whistlex = 6859996 >= moduleR;
      do {
          let previewX = true;
          let episodef = 3;
          let rankl = String.fromCharCode(110,95,49,50,95,99,111,109,109,101,110,116,0);
          let mbridgeQ = String.fromCharCode(114,95,53,52,95,109,97,116,116,101,0);
         moduleR += parseInt(`${bridgeC}`) % 3;
         previewX = rankl.length <= 65;
         episodef *= rankl.length;
         mbridgeQ += `${episodef}`;
         if (whistlex) {
            break;
         }
      } while ((1 < (1 | moduleR)) && whistlex);
         videocommons += `${nterstitialn}`;
      langkeyv |= 2;
   }
       let buffer8 = false;
       let langO: Map<any, any> = new Map([[String.fromCharCode(117,110,116,105,108,95,110,95,49,55,0),192], [String.fromCharCode(100,111,119,110,108,111,97,100,105,110,103,95,99,95,54,51,0),629], [String.fromCharCode(114,112,99,103,101,110,95,109,95,57,48,0),326]]);
       let combined5 = 0.0;
      for (let v = 0; v < 1; v++) {
         combined5 *= parseFloat(`${langO.size ^ 1}`);
      }
      while (combined5 <= 2.61) {
          let routerv = String.fromCharCode(98,95,50,95,112,114,117,110,101,0);
         buffer8 = langO.get(`${buffer8}`) == null;
         routerv += `${routerv.length}`;
         break;
      }
          let debugd: Array<any> = [600, 940, 786];
          let logoU = String.fromCharCode(101,100,105,116,101,100,95,54,95,52,51,0);
         langO = new Map([[`${langO.size}`, parseInt(`${combined5}`) - 3]]);
         debugd = [debugd.length];
         logoU = `${logoU.length}`;
         buffer8 = buffer8 && combined5 > 12.59;
          let stylex: Array<any> = [506, 411];
          let videoH: Map<any, any> = new Map([[String.fromCharCode(99,95,50,55,95,100,101,102,105,110,105,116,105,111,110,0),501], [String.fromCharCode(100,101,110,115,101,95,115,95,54,55,0),136]]);
         buffer8 = stylex.length >= 63;
         stylex = [videoH.size - videoH.size];
         combined5 += parseFloat(`${parseInt(`${combined5}`) + 1}`);
         buffer8 = !buffer8;
       let applicationm = String.fromCharCode(97,118,120,115,121,110,116,104,95,104,95,51,51,0);
       let filedG = String.fromCharCode(97,110,116,105,97,108,105,97,115,105,110,103,95,116,95,51,51,0);
      for (let k = 0; k < 2; k++) {
          let viewern = String.fromCharCode(116,114,117,110,99,97,116,101,95,105,95,50,48,0);
          let downI = 1.0;
          let sigmobp: Array<any> = [616, 153, 637];
          let strM: Map<any, any> = new Map([[String.fromCharCode(113,95,54,54,95,116,97,98,108,101,115,0),901], [String.fromCharCode(99,97,108,99,117,97,108,116,101,95,109,95,50,56,0),438], [String.fromCharCode(117,110,119,105,110,100,95,113,95,49,48,0),228]]);
          let other5 = String.fromCharCode(105,110,102,111,114,109,95,50,95,56,54,0);
         langO.set(applicationm, 3);
         viewern += `${parseInt(`${downI}`)}`;
         downI /= Math.max(4, parseFloat(`${strM.size}`));
         sigmobp = [strM.size * sigmobp.length];
         other5 += `${3 << (Math.min(4, sigmobp.length))}`;
      }
      w_counti = [1 + parseInt(`${tickf}`)];
      w_counti = [2];
   let orangew = 6120945 <= w_counti.length;
   do {
      w_counti = [component0.size];
      if (orangew) {
         break;
      }
   } while (orangew && ((5.41 - typesi) > 3.68));
   if ((5 ^ typesk.length) == 1 && (langkeyv ^ typesk.length) == 5) {
      langkeyv += parseInt(`${typesi}`);
   }
      tickf -= parseFloat(`${parseInt(`${tickf}`)}`);
      w_counti.push(component0.size << (Math.min(1, Math.abs(langkeyv))));
   for (let w = 0; w < 3; w++) {
      resultR = `${component0.size / 3}`;
   }
   for (let e = 0; e < 2; e++) {
       let hejix: Map<any, any> = new Map([[String.fromCharCode(110,95,57,95,97,100,108,101,114,0),185], [String.fromCharCode(115,95,48,95,105,100,102,97,0),320], [String.fromCharCode(109,105,110,113,95,122,95,54,55,0),946]]);
       let applicationL: Array<any> = [298, 588];
       let targetY = 0;
       let entryC = 2;
       let transfer1 = String.fromCharCode(110,95,49,52,95,101,118,97,108,115,0);
       let commentX = String.fromCharCode(109,115,101,120,95,117,95,50,53,0);
      for (let k = 0; k < 1; k++) {
          let grey2 = false;
         hejix = new Map([[`${entryC}`, entryC & targetY]]);
         grey2 = (grey2 ? grey2 : !grey2);
      }
         entryC |= commentX.length * applicationL.length;
         transfer1 += `${commentX.length | 2}`;
      for (let e = 0; e < 3; e++) {
          let download3: Array<any> = [664, 643, 882];
          let larger = 4;
         transfer1 += `${(String.fromCharCode(76,0) == transfer1 ? hejix.size : transfer1.length)}`;
         download3 = [2];
         larger >>= Math.min(Math.abs(larger), 1);
      }
       let overlayD = String.fromCharCode(114,101,118,101,114,98,95,114,95,56,53,0);
       let emojir = String.fromCharCode(104,95,50,50,95,108,101,102,116,0);
      while (3 >= (targetY % 1)) {
          let stringsN = 2;
          let reactnativejsX: Array<any> = [79, 827, 44];
          let confirmationZ = String.fromCharCode(120,95,51,50,95,115,117,98,108,97,121,111,117,116,0);
         targetY &= (confirmationZ == String.fromCharCode(112,0) ? confirmationZ.length : applicationL.length);
         stringsN &= stringsN;
         reactnativejsX.push(stringsN * reactnativejsX.length);
         break;
      }
      if ((targetY << (Math.min(Math.abs(4), 4))) < 2) {
          let componentf = 2;
         targetY ^= 1 & transfer1.length;
         componentf += 1;
      }
      let moreU = 5334057 <= applicationL.length;
      do {
         applicationL = [2 * commentX.length];
         if (moreU) {
            break;
         }
      } while (moreU && (!applicationL.includes(targetY)));
          let rewardL = String.fromCharCode(100,101,106,117,100,100,101,114,95,104,95,56,50,0);
         transfer1 += `${rewardL.length ^ 2}`;
         targetY /= Math.max(2, (String.fromCharCode(81,0) == transfer1 ? transfer1.length : entryC));
      if (emojir.length <= 5) {
         emojir += `${entryC >> (Math.min(overlayD.length, 2))}`;
      }
          let photoa = String.fromCharCode(97,95,54,48,95,99,111,110,99,97,116,101,110,97,116,105,111,110,0);
          let tailU = String.fromCharCode(103,95,50,51,95,103,97,105,110,115,0);
         commentX += "2";
         photoa = `${photoa.length & 3}`;
         tailU = `${(String.fromCharCode(55,0) == photoa ? tailU.length : photoa.length)}`;
         targetY |= entryC - 2;
      let windo = String.fromCharCode(99,106,117,101,99,103,121,119,0) == overlayD;
      do {
         overlayD += `${(String.fromCharCode(51,0) == emojir ? emojir.length : applicationL.length)}`;
         if (windo) {
            break;
         }
      } while ((targetY < 5) && windo);
      typesk = [entryC];
   }
      resultR += `${w_counti.length}`;
      typesi += langkeyv << (Math.min(Math.abs(parseInt(`${tickf}`)), 3));
   let switch_5cN = w_counti.length >= 6022116;
   do {
      w_counti = [langkeyv];
      if (switch_5cN) {
         break;
      }
   } while (switch_5cN && (!w_counti.includes(langkeyv)));
   while (typesk.includes(tickf)) {
      typesk = [3];
      break;
   }

    return `${Url.matches11}?&is_live=true`;
  };

  const fetchMatchData = useCallback(async () => {
       let privacyb = String.fromCharCode(112,101,114,115,112,101,99,116,105,118,101,95,101,95,55,51,0);
    let moonl = String.fromCharCode(102,95,54,50,95,101,120,112,108,105,99,105,116,101,108,121,0);
    let castingX: Map<any, any> = new Map([[String.fromCharCode(118,95,56,53,95,114,97,105,115,101,100,0),461], [String.fromCharCode(99,111,114,100,122,95,113,95,53,0),960], [String.fromCharCode(98,108,105,110,107,95,57,95,54,51,0),827]]);
    let connection1 = 0.0;
    let completeY: Array<any> = [754, 820];
    let tumbnail0 = 1;
    let typingl = String.fromCharCode(116,105,116,108,101,115,95,56,95,57,56,0);
    let searchf = String.fromCharCode(115,97,118,105,110,103,95,54,95,57,52,0);
    let cornerD = 4.0;
    let modal0 = String.fromCharCode(120,95,56,55,95,110,101,97,114,101,110,100,0);
    let notificationq = 0.0;
      moonl = `${moonl.length}`;
   let nextS = privacyb.length <= 7831840;
   do {
      privacyb += `${(String.fromCharCode(83,0) == searchf ? completeY.length : searchf.length)}`;
      if (nextS) {
         break;
      }
   } while ((2 > (parseInt(`${cornerD}`) - privacyb.length) || 5 > (2 - privacyb.length)) && nextS);
   for (let d = 0; d < 2; d++) {
      tumbnail0 -= searchf.length - 2;
   }
      typingl = "3";
      completeY = [searchf.length];

    const data = (await ttDescTerms.call(getUrl(), {}, 'GET')).data;

   while (4.28 > (parseFloat(`${moonl.length}`) + connection1) && (2 + parseInt(`${connection1}`)) > 3) {
      moonl += `${completeY.length}`;
      break;
   }
   for (let a = 0; a < 2; a++) {
      typingl += `${castingX.size << (Math.min(2, Math.abs(parseInt(`${cornerD}`))))}`;
   }
      privacyb = `${2 | moonl.length}`;
   let mbjscommons = cornerD >= 6865900.0;
   do {
      cornerD += 1;
      if (mbjscommons) {
         break;
      }
   } while ((4 < (parseInt(`${cornerD}`) / 1) || 4.60 < (cornerD / (Math.max(4.37, 6)))) && mbjscommons);
   let textN = completeY.length >= 7107023;
   do {
      completeY = [tumbnail0 & 3];
      if (textN) {
         break;
      }
   } while (textN && (2 <= (completeY.length - tumbnail0)));
    if (data !== undefined) {

   let delegate__xA = 9277019 <= completeY.length;
   do {
      completeY = [completeY.length];
      if (delegate__xA) {
         break;
      }
   } while (delegate__xA && (1 == (completeY.length % (Math.max(privacyb.length, 1))) || 2 == (completeY.length % (Math.max(1, 4)))));
   while (1.13 <= connection1) {
      completeY.push(3);
      break;
   }
       let with_5s = 4;
       let blacklistx = String.fromCharCode(116,95,49,54,95,119,104,101,101,108,0);
          let linkG = 4.0;
          let modalJ = 5.0;
          let subsx = false;
         with_5s /= Math.max(1, (parseInt(`${modalJ}`) & (subsx ? 3 : 4)));
         linkG -= parseInt(`${linkG}`);
         modalJ -= parseFloat(`${parseInt(`${linkG}`)}`);
          let episodeE = String.fromCharCode(101,95,49,52,95,105,118,97,114,115,0);
          let maila = 2.0;
         with_5s ^= with_5s % 3;
         episodeE = `${parseInt(`${maila}`)}`;
         maila /= Math.max(5, parseFloat(`${parseInt(`${maila}`)}`));
       let gradleg = String.fromCharCode(109,95,51,53,95,100,105,118,105,100,101,114,115,0);
         blacklistx = "2";
         blacklistx += `${gradleg.length << (Math.min(Math.abs(1), 1))}`;
      for (let b = 0; b < 2; b++) {
         gradleg = `${blacklistx.length << (Math.min(1, Math.abs(with_5s)))}`;
      }
      castingX.set(searchf, 2);
       let catagoryB: Array<any> = [671, 839];
       let moduleD: Map<any, any> = new Map([[String.fromCharCode(102,111,114,101,103,114,111,117,110,100,95,101,95,54,54,0),980], [String.fromCharCode(117,110,101,110,99,114,121,112,116,101,100,95,109,95,49,0),831]]);
       let overN = false;
      let textn = 6759950 >= catagoryB.length;
      do {
         catagoryB = [((overN ? 2 : 5) % 1)];
         if (textn) {
            break;
         }
      } while ((moduleD.get(`${catagoryB.length}`) == null) && textn);
      while ((catagoryB.length & 5) >= 2 && (catagoryB.length & moduleD.size) >= 5) {
         moduleD.set(`${catagoryB.length}`, catagoryB.length);
         break;
      }
         moduleD.set(`${catagoryB.length}`, moduleD.size);
          let description_bfI = 0;
         moduleD = new Map([[`${description_bfI}`, description_bfI]]);
         catagoryB = [((overN ? 2 : 1) * 3)];
      if (overN) {
         moduleD.set(`${catagoryB.length}`, moduleD.size % (Math.max(7, catagoryB.length)));
      }
         catagoryB = [moduleD.size];
       let bufferF: Map<any, any> = new Map([[String.fromCharCode(112,105,112,101,119,105,114,101,95,112,95,56,57,0),843], [String.fromCharCode(97,110,103,117,108,97,114,95,103,95,50,54,0),179]]);
          let tooltipsg = String.fromCharCode(114,101,99,105,112,105,101,110,116,115,95,113,95,48,0);
          let gesturesC = 2;
         catagoryB = [3 + tooltipsg.length];
         tooltipsg = `${gesturesC / 2}`;
         gesturesC += gesturesC;
      searchf = `${parseInt(`${connection1}`)}`;
      cornerD /= Math.max(5, (typingl == String.fromCharCode(88,0) ? typingl.length : castingX.size));
      const newArray: ttAway[] = Object.values(data)
        .flat()
        .slice(0, 20) as ttAway[];

   let gesturesI = 5443814 >= typingl.length;
   do {
      typingl += "2";
      if (gesturesI) {
         break;
      }
   } while (gesturesI && ((typingl.length - parseInt(`${cornerD}`)) == 1 && (typingl.length & 1) == 5));
      completeY.push(parseInt(`${connection1}`) * 1);
   for (let q = 0; q < 1; q++) {
      moonl = `${parseInt(`${connection1}`) & completeY.length}`;
   }
       let orange9: Map<any, any> = new Map([[String.fromCharCode(109,95,53,53,95,105,102,97,109,115,103,0),true ], [String.fromCharCode(111,95,57,49,95,119,114,105,116,101,97,108,105,103,110,0),false ]]);
       let settinge = 4.0;
      if (orange9.size >= 1) {
         settinge -= parseFloat(`${3}`);
      }
         orange9 = new Map([[`${orange9.size}`, orange9.size | 2]]);
         settinge *= parseFloat(`${1}`);
         settinge /= Math.max(parseFloat(`${2}`), 3);
      let referrerJ = orange9.size <= 8655648;
      do {
         orange9.set(`${settinge}`, parseInt(`${settinge}`) % (Math.max(1, 6)));
         if (referrerJ) {
            break;
         }
      } while ((!Array.from(orange9.values()).includes(settinge)) && referrerJ);
      while (parseFloat(`${orange9.size}`) > settinge) {
          let pointc = 3.0;
          let actionsQ: Array<any> = [814, 508, 779];
          let downloadingi = String.fromCharCode(116,101,109,112,95,120,95,53,51,0);
          let v_title2: Map<any, any> = new Map([[String.fromCharCode(111,95,52,53,95,117,110,112,114,111,99,101,115,115,101,100,0),String.fromCharCode(98,95,51,56,95,104,97,114,100,119,97,114,101,0)], [String.fromCharCode(108,95,56,49,95,114,97,119,118,105,100,101,111,0),String.fromCharCode(120,99,104,103,95,53,95,57,51,0)], [String.fromCharCode(114,101,101,110,99,114,121,112,116,95,119,95,53,56,0),String.fromCharCode(118,105,115,105,98,105,108,105,116,105,116,101,115,95,104,95,54,50,0)]]);
          let lessy = 1.0;
         orange9.set(downloadingi, parseInt(`${pointc}`) - 3);
         pointc -= parseFloat(`${v_title2.size ^ 3}`);
         actionsQ.push(parseInt(`${lessy}`));
         downloadingi = `${3 - parseInt(`${lessy}`)}`;
         v_title2 = new Map([[`${v_title2.size}`, v_title2.size / (Math.max(actionsQ.length, 9))]]);
         break;
      }
      castingX = new Map([[`${tumbnail0}`, typingl.length | tumbnail0]]);
      typingl += `${parseInt(`${cornerD}`)}`;

      setSportList(newArray);
    }
  }, []);

  const fetchPlaylist = (page: number) =>
    ttMbbannerMore.getTopic(page).then((results: ttProject) => {
      setTotalPage(Number(results.TotalPageCount));
      return Object.values(results.List);
    });

  const {
    data: playlists,
    isSuccess,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
    isFetching,
    refetch,
  } = useInfiniteQuery(
    ['vodPlaylist'],
    ({pageParam = 1}) => fetchPlaylist(pageParam),
    {
      getNextPageParam: (lastPage, allPages) => {
        if (lastPage === null) {
          return undefined;
        }
        const nextPage: any = allPages.length + 1;
        
        if (nextPage > totalPage && totalPage != 0) {
          return undefined;
        }
        return nextPage;
      },
      onSuccess: data => {
        if (data && data?.pages) {
          setResults([...results, ...data.pages[data.pages.length - 1].flat()]);
        }
      },
    },
  );

  const fetchBannerAd = async () => {
       let holder1 = 4;
    let rulesW = 4.0;
    let robotoI = 2;
    let reactnativejsL = String.fromCharCode(122,95,49,56,95,118,100,97,116,97,0);
    let robotov = String.fromCharCode(112,101,114,115,105,115,116,101,100,95,52,95,50,54,0);
    let promotionU = 0.0;
    let connectionH = false;
    let tooltipsA = String.fromCharCode(114,101,115,111,108,117,116,105,111,110,115,95,50,95,54,55,0);
    let configureV = 4;
    let sliderL: Array<any> = [String.fromCharCode(103,100,111,99,95,52,95,49,50,0), String.fromCharCode(117,95,56,53,95,99,111,117,110,116,114,105,101,115,0)];
    let chinasame3 = String.fromCharCode(97,95,53,55,95,100,97,116,97,0);
    let short_7E: Array<any> = [938, 100];
    let appsT = String.fromCharCode(111,95,55,48,95,109,97,99,101,120,97,109,112,108,101,0);
    let networkk = String.fromCharCode(99,111,110,99,101,97,108,101,100,95,98,95,53,52,0);
    let dragL: Array<any> = [81, 483];
      reactnativejsL = `${sliderL.length | 3}`;
   while ((holder1 / 3) < 1) {
       let eighteeng = String.fromCharCode(98,105,116,100,101,112,116,104,95,103,95,50,51,0);
       let minimizee = 1.0;
       let clubF = true;
       let viewer9 = true;
       let xvodO = String.fromCharCode(100,95,53,57,95,112,114,101,97,108,108,111,99,97,116,101,0);
      for (let l = 0; l < 2; l++) {
          let leagueU = String.fromCharCode(117,95,52,52,95,117,110,114,101,115,111,108,118,97,98,108,101,0);
          let emptyU: Array<any> = [297, 361, 838];
          let anytimeX = false;
          let matchesn = 1;
         minimizee /= Math.max((parseFloat(`${eighteeng == String.fromCharCode(122,0) ? parseInt(`${minimizee}`) : eighteeng.length}`)), 2);
         leagueU += "1";
         emptyU.push(emptyU.length);
         matchesn |= leagueU.length;
      }
      if ((minimizee - parseFloat(`${eighteeng.length}`)) >= 3.3 || 5 >= (eighteeng.length | 2)) {
         minimizee *= parseFloat(`${3}`);
      }
      for (let w = 0; w < 3; w++) {
          let xvodJ = String.fromCharCode(101,95,55,49,95,104,97,115,120,0);
          let countdowno: Map<any, any> = new Map([[String.fromCharCode(118,95,53,52,95,98,97,100,114,101,113,0),841], [String.fromCharCode(117,95,54,56,95,97,110,116,105,97,108,105,97,115,0),101]]);
          let watchB = String.fromCharCode(117,110,112,97,99,107,104,105,95,48,95,52,54,0);
          let linkJ = String.fromCharCode(114,95,49,95,117,110,107,110,111,119,110,115,0);
         minimizee *= (parseFloat(`${(clubF ? 4 : 5) | countdowno.size}`));
         xvodJ += `${(String.fromCharCode(77,0) == watchB ? xvodJ.length : watchB.length)}`;
         countdowno = new Map([[xvodJ, linkJ.length % (Math.max(1, 2))]]);
         linkJ = `${1 >> (Math.min(4, xvodJ.length))}`;
      }
         clubF = (clubF ? viewer9 : clubF);
         viewer9 = eighteeng.length > 28;
      let reactnativejst = 9760364 >= eighteeng.length;
      do {
         eighteeng += `${((clubF ? 4 : 4))}`;
         if (reactnativejst) {
            break;
         }
      } while (reactnativejst && (eighteeng.length < 2));
       let minivod1: Array<any> = [2, 735, 768];
         minimizee *= parseFloat(`${xvodO.length}`);
         xvodO += `${(eighteeng == String.fromCharCode(86,0) ? minivod1.length : eighteeng.length)}`;
         xvodO += `${3 & parseInt(`${minimizee}`)}`;
      if (clubF) {
         clubF = xvodO.length <= 82;
      }
          let detailX: Array<any> = [304, 48];
          let l_centerb = 4;
          let transfer1 = String.fromCharCode(97,95,53,48,95,105,115,115,117,101,114,115,0);
         clubF = 10 <= transfer1.length;
         detailX.push(detailX.length);
         l_centerb |= detailX.length / (Math.max(3, 1));
         transfer1 += `${l_centerb}`;
      for (let h = 0; h < 3; h++) {
         eighteeng += `${eighteeng.length}`;
      }
      if (1 > (minivod1.length ^ 4)) {
          let becomeX: Array<any> = [String.fromCharCode(102,95,54,55,95,107,98,112,115,0), String.fromCharCode(119,111,114,115,116,95,119,95,53,0)];
          let zoomG = String.fromCharCode(111,95,53,51,95,115,119,101,101,112,0);
         xvodO = `${2 % (Math.max(2, parseInt(`${minimizee}`)))}`;
         becomeX.push(3);
         zoomG += `${becomeX.length}`;
      }
      let userS = eighteeng.length <= 8585317;
      do {
          let cornerO = String.fromCharCode(107,95,51,53,95,100,97,105,0);
         eighteeng = `${(eighteeng.length & (viewer9 ? 3 : 1))}`;
         cornerO += `${cornerO.length % (Math.max(1, 5))}`;
         if (userS) {
            break;
         }
      } while ((5 > eighteeng.length && viewer9) && userS);
      reactnativejsL += `${1 + parseInt(`${rulesW}`)}`;
      break;
   }
      rulesW -= tooltipsA.length;
      chinasame3 = `${robotoI << (Math.min(reactnativejsL.length, 2))}`;
   if (1.88 == rulesW) {
       let applicationR = 2.0;
       let modulem = 3;
       let shrinkO = String.fromCharCode(113,95,49,54,95,111,112,101,110,115,101,97,0);
         shrinkO = `${parseInt(`${applicationR}`) - modulem}`;
         modulem &= 3;
      let championX = 5418292.0 <= applicationR;
      do {
          let historyY: Map<any, any> = new Map([[String.fromCharCode(111,95,48,95,118,99,111,109,98,105,110,101,0),String.fromCharCode(120,95,57,50,95,102,97,110,111,117,116,0)], [String.fromCharCode(98,95,51,52,95,101,110,116,114,111,112,121,109,111,100,101,0),String.fromCharCode(115,101,103,109,101,110,116,95,99,95,54,52,0)], [String.fromCharCode(98,105,116,114,101,118,95,51,95,49,51,0),String.fromCharCode(100,101,114,105,118,101,100,95,99,95,52,55,0)]]);
          let routerb = String.fromCharCode(118,95,52,53,95,102,105,108,108,105,110,0);
          let sentryx: Map<any, any> = new Map([[String.fromCharCode(122,95,49,49,95,115,101,110,116,0),true ], [String.fromCharCode(100,95,56,49,0),false ]]);
         applicationR /= Math.max(5, sentryx.size * historyY.size);
         historyY.set(routerb, routerb.length % (Math.max(routerb.length, 4)));
         if (championX) {
            break;
         }
      } while (championX && (1 <= modulem));
      for (let z = 0; z < 1; z++) {
          let castingZ = 5.0;
          let crossI = String.fromCharCode(98,101,108,111,119,95,103,95,51,52,0);
          let clockl: Array<any> = [285, 189];
          let backwardB = 3.0;
          let currentF = true;
         modulem >>= Math.min(3, Math.abs((parseInt(`${castingZ}`) * (currentF ? 3 : 4))));
         castingZ -= clockl.length;
         crossI += `${crossI.length * 3}`;
         clockl.push((String.fromCharCode(115,0) == crossI ? parseInt(`${backwardB}`) : crossI.length));
         backwardB /= Math.max(parseFloat(`${clockl.length * crossI.length}`), 4);
         currentF = 16.78 > backwardB;
      }
         shrinkO += `${1 << (Math.min(Math.abs(parseInt(`${applicationR}`)), 4))}`;
      while ((modulem / (Math.max(1, applicationR))) < 2.40 && 1 < (2 << (Math.min(4, Math.abs(modulem))))) {
          let short_aaS = String.fromCharCode(104,113,100,110,100,95,100,95,56,49,0);
          let whistleQ = String.fromCharCode(108,95,52,48,95,112,112,99,99,111,109,109,111,110,0);
          let applicationZ: Array<any> = [591, 283, 549];
         applicationR *= 3;
         short_aaS += `${short_aaS.length}`;
         whistleQ += `${(String.fromCharCode(71,0) == whistleQ ? short_aaS.length : whistleQ.length)}`;
         applicationZ = [short_aaS.length];
         break;
      }
      if ((shrinkO.length << (Math.min(5, Math.abs(modulem)))) == 3 && (shrinkO.length << (Math.min(Math.abs(3), 1))) == 5) {
          let vignetteP: Array<any> = [505, 847, 703];
          let sortJ = String.fromCharCode(101,95,51,50,95,115,97,118,101,112,111,105,110,116,0);
          let backu: Array<any> = [580, 493, 324];
          let homem = String.fromCharCode(97,109,102,101,110,99,95,116,95,53,53,0);
         modulem <<= Math.min(Math.abs(shrinkO.length % 2), 4);
         vignetteP.push(sortJ.length);
         sortJ += `${(sortJ == String.fromCharCode(85,0) ? sortJ.length : backu.length)}`;
         backu.push(sortJ.length | homem.length);
         homem += "1";
      }
         modulem -= parseInt(`${applicationR}`);
         shrinkO += `${modulem % (Math.max(3, parseInt(`${applicationR}`)))}`;
      rulesW += holder1;
   }

    const bannerRes = await ttDropdown.getBannerAd(100);

      configureV *= 1 % (Math.max(8, parseInt(`${rulesW}`)));
   if (reactnativejsL != String.fromCharCode(53,0)) {
      robotov = `${short_7E.length & robotoI}`;
   }
   let appsN = promotionU <= 5205642.0;
   do {
      promotionU -= parseFloat(`${chinasame3.length}`);
      if (appsN) {
         break;
      }
   } while (appsN && (connectionH));
   for (let s = 0; s < 3; s++) {
      holder1 |= configureV * 3;
   }
   if ((holder1 + 4) < 5) {
      holder1 |= parseInt(`${rulesW}`);
   }
    const banner = bannerRes.ads;

   while (robotoI > 2) {
      rulesW -= 1;
      break;
   }
       let rewardvideo6: Map<any, any> = new Map([[String.fromCharCode(105,115,112,111,114,116,95,116,95,49,48,48,0),118], [String.fromCharCode(104,95,55,57,95,99,114,101,97,116,105,118,101,0),775], [String.fromCharCode(114,95,56,52,95,105,115,111,108,97,116,101,0),883]]);
       let sourceQ = 1.0;
       let countdown2 = 5.0;
      while ((4.54 + sourceQ) == 4.66 && 1.9 == (4.54 + countdown2)) {
          let colorsC = String.fromCharCode(103,95,50,51,95,102,114,97,109,101,105,110,102,111,0);
          let small5 = String.fromCharCode(121,111,110,108,121,120,95,105,95,52,56,0);
          let downloadingY = String.fromCharCode(97,116,116,114,97,99,116,111,114,95,113,95,57,55,0);
          let hoverl = String.fromCharCode(99,104,115,99,97,108,101,95,100,95,49,56,0);
         countdown2 -= parseFloat(`${small5.length + 3}`);
         colorsC = `${1 & downloadingY.length}`;
         small5 += `${(String.fromCharCode(89,0) == downloadingY ? downloadingY.length : colorsC.length)}`;
         hoverl += `${colorsC.length}`;
         break;
      }
         sourceQ *= parseFloat(`${rewardvideo6.size % 1}`);
      chinasame3 = `${(reactnativejsL == String.fromCharCode(86,0) ? reactnativejsL.length : robotoI)}`;
       let temperaturer = 0.0;
       let hongkongu: Map<any, any> = new Map([[String.fromCharCode(116,114,97,99,107,101,114,95,100,95,55,52,0),String.fromCharCode(117,95,54,95,105,112,104,111,110,101,0)], [String.fromCharCode(98,95,53,50,95,97,120,112,0),String.fromCharCode(119,95,51,54,95,102,111,114,119,97,114,100,101,114,0)], [String.fromCharCode(102,108,97,99,100,97,116,97,95,118,95,50,55,0),String.fromCharCode(121,95,56,52,95,99,102,116,98,115,117,98,0)]]);
       let hejia = String.fromCharCode(102,95,54,51,95,114,97,110,103,101,115,0);
         hejia = "1";
          let sigmobt: Array<any> = [344, 3, 960];
         temperaturer *= hejia.length - 3;
         sigmobt.push(sigmobt.length);
          let clockx = 5.0;
          let tailr = 3.0;
          let filedC: Map<any, any> = new Map([[String.fromCharCode(112,108,117,115,95,119,95,55,54,0),String.fromCharCode(119,101,101,107,100,97,121,115,95,106,95,50,52,0)], [String.fromCharCode(99,97,116,101,103,111,114,105,122,101,95,108,95,50,55,0),String.fromCharCode(98,95,57,57,95,107,98,105,116,0)]]);
         temperaturer /= Math.max(hejia.length, 5);
         clockx /= Math.max(parseFloat(`${parseInt(`${clockx}`) >> (Math.min(2, Math.abs(1)))}`), 2);
         tailr += parseFloat(`${filedC.size ^ parseInt(`${tailr}`)}`);
         filedC = new Map([[`${clockx}`, parseInt(`${tailr}`)]]);
         hejia += "2";
         temperaturer -= hongkongu.size;
      for (let s = 0; s < 1; s++) {
          let custom6 = true;
          let sendy = String.fromCharCode(114,101,108,99,116,120,95,119,95,54,54,0);
          let projects = String.fromCharCode(122,95,53,52,95,115,116,97,103,101,0);
          let promotionL: Map<any, any> = new Map([[String.fromCharCode(97,100,103,114,111,117,112,95,114,95,50,53,0),701], [String.fromCharCode(121,95,56,51,95,105,110,115,101,114,116,115,0),674], [String.fromCharCode(98,117,98,98,108,101,95,50,95,55,48,0),495]]);
         temperaturer += hongkongu.size / (Math.max(projects.length, 4));
         custom6 = sendy.length < 82;
         sendy += `${((custom6 ? 2 : 4))}`;
         projects += "2";
         promotionL.set(sendy, ((custom6 ? 2 : 2)));
      }
         temperaturer *= 2;
         hejia += `${(String.fromCharCode(108,0) == hejia ? hongkongu.size : hejia.length)}`;
         hongkongu.set(`${temperaturer}`, parseInt(`${temperaturer}`) >> (Math.min(Math.abs(hongkongu.size), 2)));
      holder1 >>= Math.min(Math.abs(2 + robotov.length), 3);
   let taiwanC = sliderL.length <= 8457598;
   do {
       let loadingZ = String.fromCharCode(114,95,55,56,95,112,114,101,118,105,111,117,115,108,121,0);
       let loginT: Map<any, any> = new Map([[String.fromCharCode(122,95,53,54,95,114,97,110,103,101,99,111,100,101,114,0),648], [String.fromCharCode(101,95,50,95,103,97,112,108,101,115,115,0),272], [String.fromCharCode(109,95,54,53,95,99,119,114,115,105,0),439]]);
       let holderB = 5.0;
       let feedbackJ = false;
         loginT = new Map([[`${loginT.size}`, loadingZ.length - 1]]);
      let bodanA = 6308575.0 >= holderB;
      do {
         holderB += parseFloat(`${loadingZ.length + loginT.size}`);
         if (bodanA) {
            break;
         }
      } while (bodanA && (1.59 < (parseFloat(`${loginT.size}`) + holderB) && (holderB + 1.59) < 3.60));
      if (!feedbackJ) {
         feedbackJ = holderB <= 4.77;
      }
         holderB += parseFloat(`${loginT.size >> (Math.min(Math.abs(1), 2))}`);
      for (let q = 0; q < 2; q++) {
         loadingZ = `${loginT.size / (Math.max(2, 2))}`;
      }
         loadingZ = `${loginT.size & loadingZ.length}`;
         loginT.set(loadingZ, loginT.size);
      let chinat = String.fromCharCode(100,51,48,52,121,121,107,55,117,104,0) == loadingZ;
      do {
         loadingZ += `${(loginT.size & (feedbackJ ? 4 : 3))}`;
         if (chinat) {
            break;
         }
      } while (chinat && (!feedbackJ));
      if (!feedbackJ) {
         holderB /= Math.max((parseFloat(`${parseInt(`${holderB}`) >> (Math.min(3, Math.abs((feedbackJ ? 5 : 5))))}`)), 4);
      }
          let middlewareN = 5.0;
          let hejiI = String.fromCharCode(103,95,50,57,95,115,101,101,107,0);
         holderB -= (parseFloat(`${parseInt(`${middlewareN}`) << (Math.min(3, Math.abs((feedbackJ ? 3 : 4))))}`));
         middlewareN -= hejiI.length << (Math.min(hejiI.length, 1));
      while (1 >= (1 - loginT.size) && (parseInt(`${holderB}`) - loginT.size) >= 1) {
         loginT.set(`${feedbackJ}`, ((feedbackJ ? 2 : 2)));
         break;
      }
          let materialf = String.fromCharCode(120,95,55,57,95,97,118,115,115,0);
          let pingD = String.fromCharCode(114,115,104,105,102,116,95,119,95,54,56,0);
          let auto_oz = 2.0;
         loadingZ = `${2 * parseInt(`${auto_oz}`)}`;
         materialf = `${materialf.length - pingD.length}`;
         pingD = "1";
         auto_oz += parseFloat(`${1 << (Math.min(4, pingD.length))}`);
      sliderL.push(((feedbackJ ? 5 : 3)));
      if (taiwanC) {
         break;
      }
   } while (taiwanC && ((3 + chinasame3.length) == 1));
   if ((holder1 ^ sliderL.length) < 2) {
      sliderL = [configureV >> (Math.min(Math.abs(holder1), 2))];
   }
    const bannerList = bannerRes.ads_list;

      configureV &= 2;
      rulesW += appsT.length * 2;
   if (!appsT.endsWith(`${connectionH}`)) {
       let rewardvideoU: Map<any, any> = new Map([[String.fromCharCode(104,95,53,51,95,100,105,115,99,111,110,110,101,99,116,0),false ], [String.fromCharCode(99,108,111,115,101,115,95,103,95,56,56,0),true ]]);
       let pingZ = String.fromCharCode(122,95,57,95,115,105,110,113,105,0);
       let tumbnailm = false;
         pingZ += "2";
      while (pingZ.length < 4) {
         pingZ = `${((tumbnailm ? 4 : 3) - rewardvideoU.size)}`;
         break;
      }
         rewardvideoU = new Map([[pingZ, ((tumbnailm ? 5 : 3))]]);
       let control3 = false;
       let package_3hA = false;
         rewardvideoU.set(`${package_3hA}`, 1 << (Math.min(3, pingZ.length)));
      while (!tumbnailm) {
         package_3hA = rewardvideoU.size < 23;
         break;
      }
       let rulesk = 5.0;
         package_3hA = rulesk == 66.13 && !package_3hA;
      let downH = rewardvideoU.size >= 7706567;
      do {
         rewardvideoU.set(`${package_3hA}`, (rewardvideoU.size % (Math.max(3, (package_3hA ? 1 : 5)))));
         if (downH) {
            break;
         }
      } while (downH && ((3 ^ rewardvideoU.size) >= 5));
      connectionH = holder1 == 81;
   }
      robotov += `${robotoI}`;
   for (let f = 0; f < 2; f++) {
       let wind2 = false;
       let appsr: Map<any, any> = new Map([[String.fromCharCode(119,95,51,55,95,101,97,103,97,105,110,0),94], [String.fromCharCode(103,95,56,56,95,116,114,101,122,111,114,0),615], [String.fromCharCode(120,95,49,56,95,115,112,108,105,116,116,105,110,103,0),789]]);
       let albume = 3.0;
       let bridgeP = String.fromCharCode(101,110,99,111,100,101,102,114,97,109,101,95,103,95,54,49,0);
          let injuryn = String.fromCharCode(119,95,53,52,95,105,116,111,97,0);
         appsr = new Map([[`${albume}`, bridgeP.length + 2]]);
         injuryn += "1";
      while ((albume / (Math.max(2.54, 1))) >= 4.16 || 5.97 >= (albume / 2.54)) {
         bridgeP = "1";
         break;
      }
      while (bridgeP.length == 4) {
          let becomeF = 5.0;
          let ewarded8 = String.fromCharCode(117,95,56,52,95,118,101,114,98,111,115,101,0);
          let faviconA = 2;
          let coreH: Map<any, any> = new Map([[String.fromCharCode(109,115,103,95,122,95,50,49,0),String.fromCharCode(97,112,112,101,110,100,95,113,95,57,49,0)], [String.fromCharCode(99,111,114,110,101,114,115,95,100,95,51,53,0),String.fromCharCode(120,95,55,55,95,110,116,115,115,0)], [String.fromCharCode(104,101,120,98,105,110,95,113,95,52,54,0),String.fromCharCode(97,95,57,55,95,99,111,110,102,101,116,116,105,0)]]);
          let product6 = 5;
         appsr = new Map([[`${wind2}`, ((wind2 ? 2 : 5) ^ ewarded8.length)]]);
         becomeF /= Math.max(2, parseFloat(`${faviconA | 3}`));
         ewarded8 = `${faviconA}`;
         coreH = new Map([[`${coreH.size}`, 3]]);
         product6 %= Math.max(3, 2);
         break;
      }
          let floaterQ = String.fromCharCode(109,95,55,52,95,110,111,109,105,110,97,116,101,0);
          let assisth = true;
          let tickedK = 2.0;
         wind2 = (floaterQ.length * parseInt(`${albume}`)) > 84;
         floaterQ = `${(parseInt(`${tickedK}`) & (assisth ? 5 : 2))}`;
         assisth = !assisth;
         tickedK *= (parseFloat(`${parseInt(`${tickedK}`) + (assisth ? 4 : 2)}`));
      for (let t = 0; t < 2; t++) {
          let list0 = String.fromCharCode(105,95,54,54,0);
         albume *= parseFloat(`${appsr.size}`);
         list0 = `${list0.length | list0.length}`;
      }
      while ((albume + parseFloat(`${bridgeP.length}`)) >= 1.41 && 3 >= (parseInt(`${albume}`) + bridgeP.length)) {
         albume *= parseFloat(`${3}`);
         break;
      }
          let with_62i = 0.0;
          let nativeexz = String.fromCharCode(98,95,51,52,95,119,104,116,120,0);
          let actions = String.fromCharCode(108,95,54,54,95,102,114,101,113,117,101,110,116,0);
         albume += parseFloat(`${parseInt(`${with_62i}`)}`);
         with_62i *= 2;
         nativeexz = `${nativeexz.length % 2}`;
         actions += `${(nativeexz == String.fromCharCode(104,0) ? actions.length : nativeexz.length)}`;
      let closej = wind2 ? !wind2 : wind2;
      do {
          let mbjscommonm = 3.0;
         wind2 = String.fromCharCode(54,0) == bridgeP;
         mbjscommonm += parseFloat(`${parseInt(`${mbjscommonm}`) >> (Math.min(1, Math.abs(2)))}`);
         if (closej) {
            break;
         }
      } while ((wind2) && closej);
      connectionH = short_7E.includes(rulesW);
   }

    if (banner) {

   for (let i = 0; i < 1; i++) {
       let mbbannerY: Map<any, any> = new Map([[String.fromCharCode(114,95,50,49,95,100,114,97,103,0),false ], [String.fromCharCode(114,95,54,49,95,105,109,112,111,114,116,0),false ]]);
      let downloaderN = mbbannerY.size >= 6000309;
      do {
         mbbannerY.set(`${mbbannerY.size}`, mbbannerY.size + 1);
         if (downloaderN) {
            break;
         }
      } while ((!Array.from(mbbannerY.values()).includes(mbbannerY.size)) && downloaderN);
      if (mbbannerY.size < mbbannerY.size) {
         mbbannerY.set(`${mbbannerY.size}`, mbbannerY.size >> (Math.min(Math.abs(1), 1)));
      }
         mbbannerY.set(`${mbbannerY.size}`, mbbannerY.size);
      robotoI ^= configureV - 1;
   }
   let controlk = rulesW <= 8227595.0;
   do {
       let downloadedI = String.fromCharCode(116,105,109,101,100,95,56,95,50,0);
      while (downloadedI.length >= 3) {
         downloadedI = `${(downloadedI == String.fromCharCode(97,0) ? downloadedI.length : downloadedI.length)}`;
         break;
      }
         downloadedI = `${(String.fromCharCode(80,0) == downloadedI ? downloadedI.length : downloadedI.length)}`;
         downloadedI += `${downloadedI.length * downloadedI.length}`;
      rulesW /= Math.max(reactnativejsL.length ^ robotoI, 5);
      if (controlk) {
         break;
      }
   } while (controlk && (!chinasame3.startsWith(`${rulesW}`)));
      connectionH = (sliderL.length >> (Math.min(robotov.length, 2))) <= 51;
      chinasame3 = `${networkk.length}`;
       let promotionD = String.fromCharCode(102,119,104,116,120,95,53,95,52,49,0);
       let successM: Array<any> = [850, 19];
       let colorsA = true;
      while (!promotionD.endsWith(`${colorsA}`)) {
          let condensedF = 3.0;
         colorsA = promotionD.length <= 58 && !colorsA;
         condensedF += 2;
         break;
      }
          let found2 = String.fromCharCode(116,104,114,101,97,100,112,111,111,108,95,110,95,54,50,0);
         successM = [found2.length | 3];
      let mbnativeadvancedf = 9867066 >= successM.length;
      do {
         successM.push(successM.length);
         if (mbnativeadvancedf) {
            break;
         }
      } while (mbnativeadvancedf && (successM.length >= 4 || 4 >= (successM.length * 4)));
         promotionD = `${2 | promotionD.length}`;
         successM = [((colorsA ? 5 : 4) - 3)];
      let logoutc = successM.length <= 9863968;
      do {
          let sharedp: Array<any> = [340, 822, 405];
          let overd = String.fromCharCode(116,95,50,51,95,117,110,99,111,110,115,117,109,101,100,0);
         successM = [overd.length];
         sharedp.push(sharedp.length);
         overd = `${1 ^ sharedp.length}`;
         if (logoutc) {
            break;
         }
      } while ((2 < (successM.length + promotionD.length) || 4 < (promotionD.length + 2)) && logoutc);
      while (!promotionD.includes(`${colorsA}`)) {
          let shareH = 3.0;
          let greyd = 5.0;
          let casting9: Map<any, any> = new Map([[String.fromCharCode(115,116,114,110,99,97,115,101,99,109,112,95,113,95,55,0),567], [String.fromCharCode(117,95,54,48,95,115,105,108,101,110,99,101,100,0),612]]);
          let castingf: Map<any, any> = new Map([[String.fromCharCode(114,102,116,98,115,117,98,95,112,95,49,51,0),false ], [String.fromCharCode(98,101,122,105,101,114,95,57,95,51,49,0),false ], [String.fromCharCode(108,95,50,55,95,100,101,108,101,103,97,116,105,111,110,0),true ]]);
         colorsA = (((!colorsA ? 60 : promotionD.length) >> (Math.min(promotionD.length, 5))) >= 60);
         shareH *= parseFloat(`${parseInt(`${greyd}`) + 2}`);
         greyd += parseFloat(`${3 << (Math.min(5, Math.abs(casting9.size)))}`);
         casting9.set(`${greyd}`, 1 & parseInt(`${greyd}`));
         castingf.set(`${shareH}`, casting9.size >> (Math.min(Math.abs(1), 1)));
         break;
      }
      for (let r = 0; r < 3; r++) {
         successM.push(successM.length >> (Math.min(Math.abs(1), 2)));
      }
       let backN = String.fromCharCode(110,105,100,110,105,115,116,95,121,95,52,51,0);
      configureV *= chinasame3.length + 2;
      setBannerAd(banner);

      sliderL.push(1 - networkk.length);
   for (let d = 0; d < 3; d++) {
       let memberP = 0.0;
       let favoriteR = String.fromCharCode(109,117,108,116,105,108,105,110,101,95,104,95,52,48,0);
       let matches7: Map<any, any> = new Map([[String.fromCharCode(112,114,101,118,111,117,115,95,111,95,52,50,0),401], [String.fromCharCode(118,95,53,51,95,116,114,97,105,116,115,0),545], [String.fromCharCode(104,95,53,48,95,115,111,99,107,0),488]]);
       let windU = 5.0;
         favoriteR += `${parseInt(`${memberP}`) << (Math.min(Math.abs(2), 1))}`;
      let baiduJ = 6484412 <= matches7.size;
      do {
         matches7 = new Map([[favoriteR, favoriteR.length]]);
         if (baiduJ) {
            break;
         }
      } while ((4 > matches7.size) && baiduJ);
      if ((favoriteR.length - parseInt(`${memberP}`)) >= 5 || 4.77 >= (2.66 - memberP)) {
          let promotiont = 0;
          let bootsplashd = 4.0;
          let kickj = String.fromCharCode(98,95,56,57,95,97,118,97,116,97,114,0);
          let logoC: Map<any, any> = new Map([[String.fromCharCode(118,97,114,105,97,110,116,95,50,95,56,57,0),false ], [String.fromCharCode(109,97,114,115,104,97,108,95,50,95,51,54,0),false ]]);
          let referrer3: Map<any, any> = new Map([[String.fromCharCode(108,95,55,57,95,100,113,117,111,116,101,0),String.fromCharCode(111,118,101,114,115,99,114,111,108,108,95,120,95,54,49,0)], [String.fromCharCode(105,95,51,55,95,115,112,101,101,100,104,113,0),String.fromCharCode(120,95,51,54,95,97,102,102,105,110,105,116,105,101,115,0)], [String.fromCharCode(100,101,101,112,95,112,95,53,48,0),String.fromCharCode(99,104,105,108,108,95,109,95,54,52,0)]]);
         memberP *= logoC.size;
         promotiont &= parseInt(`${bootsplashd}`) * kickj.length;
         bootsplashd *= referrer3.size;
         kickj += `${parseInt(`${bootsplashd}`) % (Math.max(1, 6))}`;
         logoC = new Map([[`${bootsplashd}`, promotiont]]);
         referrer3.set(`${promotiont}`, promotiont);
      }
      for (let q = 0; q < 3; q++) {
          let phoneB = false;
         memberP *= parseInt(`${windU}`);
         phoneB = (phoneB ? phoneB : !phoneB);
      }
      if ((memberP * 5.27) <= 1.11) {
          let countryJ: Map<any, any> = new Map([[String.fromCharCode(116,117,110,105,110,103,95,122,95,57,53,0),701], [String.fromCharCode(113,95,50,56,95,121,121,121,121,0),386]]);
          let livee: Array<any> = [646, 409, 645];
         favoriteR = "2";
         countryJ = new Map([[`${countryJ.size}`, livee.length]]);
         livee = [countryJ.size | livee.length];
      }
      for (let v = 0; v < 3; v++) {
          let incidentA = String.fromCharCode(121,95,57,55,95,103,119,103,116,0);
          let securityG = 4.0;
         matches7.set(`${memberP}`, favoriteR.length);
         incidentA = `${parseInt(`${securityG}`)}`;
         securityG -= parseInt(`${securityG}`);
      }
       let lines = String.fromCharCode(100,95,50,53,95,118,102,105,108,116,101,114,0);
       let shareC = String.fromCharCode(108,105,98,97,118,117,116,105,108,95,115,95,53,0);
       let indicatorj = 3;
       let pangleu = 3;
         pangleu |= indicatorj & 1;
          let filled_ = 3;
          let dycreatorK: Array<any> = [String.fromCharCode(97,100,100,105,110,103,95,122,95,51,50,0), String.fromCharCode(108,115,112,115,95,101,95,51,51,0)];
         lines = `${matches7.size}`;
         filled_ ^= 3 ^ dycreatorK.length;
         dycreatorK.push(filled_);
         indicatorj += (lines == String.fromCharCode(110,0) ? parseInt(`${windU}`) : lines.length);
          let project1 = String.fromCharCode(112,95,53,55,95,115,107,105,112,0);
          let annerD = String.fromCharCode(97,95,52,51,95,108,97,115,114,0);
         memberP -= shareC.length;
         project1 = `${annerD.length}`;
         annerD += "2";
      dragL.push(2);
   }
      rulesW += networkk.length;
      connectionH = String.fromCharCode(101,0) == chinasame3;
      connectionH = appsT == String.fromCharCode(51,0) && networkk.length <= 39;
      setBannerAdList(bannerList);
    } else {

      robotoI -= chinasame3.length / 3;
      holder1 %= Math.max(3, networkk.length);
   if (sliderL.length < 1) {
       let combiney = 5;
          let overy = String.fromCharCode(100,101,115,104,97,107,101,95,112,95,54,51,0);
         combiney %= Math.max(5, (String.fromCharCode(107,0) == overy ? overy.length : combiney));
      if ((combiney % (Math.max(4, 5))) == 2) {
          let currentFA = 5.0;
          let injuryO: Map<any, any> = new Map([[String.fromCharCode(108,95,51,50,95,110,97,117,116,105,99,97,108,0),271], [String.fromCharCode(121,95,48,95,116,117,110,105,110,103,0),291], [String.fromCharCode(99,97,115,99,97,100,101,100,95,117,95,56,55,0),105]]);
          let gemfileQ = 4.0;
         combiney *= injuryO.size;
         currentFA /= Math.max(3, parseFloat(`${2 * parseInt(`${gemfileQ}`)}`));
         injuryO = new Map([[`${gemfileQ}`, parseInt(`${currentFA}`)]]);
      }
      if (combiney < 3) {
         combiney ^= 3 % (Math.max(6, combiney));
      }
      sliderL.push(tooltipsA.length);
   }
   let hongkong8 = 7224901 >= robotov.length;
   do {
       let faviconi: Map<any, any> = new Map([[String.fromCharCode(119,95,57,56,95,115,108,117,103,0),708], [String.fromCharCode(115,95,48,95,109,101,110,116,105,111,110,0),273], [String.fromCharCode(119,95,57,52,95,114,101,112,108,97,121,103,97,105,110,0),616]]);
       let mini6: Array<any> = [582, 597, 571];
       let placementW = String.fromCharCode(110,111,100,101,115,95,55,95,55,49,0);
       let alertM = String.fromCharCode(105,110,105,116,118,95,101,95,54,48,0);
       let fieldH = 4.0;
      while (Array.from(faviconi.values()).includes(mini6.length)) {
         faviconi = new Map([[`${faviconi.size}`, faviconi.size | 1]]);
         break;
      }
      while (fieldH >= mini6.length) {
          let googleJ: Array<any> = [840, 547, 497];
          let paused = String.fromCharCode(122,95,51,95,112,116,120,99,0);
          let subsj = 1;
         mini6.push(2 * faviconi.size);
         googleJ.push(subsj);
         paused += "3";
         subsj >>= Math.min(paused.length, 2);
         break;
      }
      while (Array.from(faviconi.values()).includes(fieldH)) {
         faviconi = new Map([[alertM, parseInt(`${fieldH}`) - 3]]);
         break;
      }
      if (5 == (placementW.length * parseInt(`${fieldH}`))) {
         placementW += `${faviconi.size / 1}`;
      }
      while (3 > mini6.length) {
         mini6.push(mini6.length);
         break;
      }
      if (2 <= (4 >> (Math.min(5, placementW.length))) && 3 <= (placementW.length >> (Math.min(Math.abs(4), 3)))) {
         mini6 = [alertM.length];
      }
      if ((faviconi.size | mini6.length) > 2) {
          let buffery = 5.0;
          let country_: Map<any, any> = new Map([[String.fromCharCode(112,121,116,104,111,110,95,99,95,49,49,0),false ], [String.fromCharCode(115,95,51,51,95,100,102,115,116,0),false ], [String.fromCharCode(117,95,52,50,95,113,117,97,100,115,0),true ]]);
          let configureW = String.fromCharCode(105,95,57,95,117,110,102,101,116,99,104,0);
         mini6 = [3 - alertM.length];
         buffery /= Math.max(1, country_.size);
         country_.set(`${configureW}`, country_.size | 2);
         configureW = `${parseInt(`${buffery}`) % (Math.max(3, country_.size))}`;
      }
       let eighteenu: Map<any, any> = new Map([[String.fromCharCode(105,110,116,101,103,114,105,116,121,95,114,95,51,56,0),490], [String.fromCharCode(122,95,56,57,0),207], [String.fromCharCode(106,95,49,48,95,115,117,98,116,114,97,99,116,109,111,100,0),220]]);
       let footballZ: Map<any, any> = new Map([[String.fromCharCode(98,95,49,55,95,101,118,101,114,121,98,111,100,121,0),false ], [String.fromCharCode(119,95,49,49,95,118,97,114,0),false ]]);
          let darkl = 1;
          let path4 = String.fromCharCode(108,95,53,49,95,97,117,116,111,97,114,99,104,105,118,101,0);
         footballZ.set(`${faviconi.size}`, faviconi.size & footballZ.size);
         darkl ^= darkl;
         path4 += `${(path4 == String.fromCharCode(76,0) ? path4.length : darkl)}`;
         fieldH += 1;
          let tooltipsb: Array<any> = [408, 160];
         eighteenu.set(`${footballZ.size}`, footballZ.size >> (Math.min(Math.abs(faviconi.size), 5)));
         tooltipsb = [1];
          let promotionF: Array<any> = [406, 342, 408];
         mini6 = [parseInt(`${fieldH}`) >> (Math.min(Math.abs(3), 1))];
         promotionF = [3];
      while ((placementW.length | 5) <= 2) {
          let trophyg: Map<any, any> = new Map([[String.fromCharCode(118,101,114,105,102,105,101,114,95,108,95,54,51,0),675], [String.fromCharCode(109,101,116,97,95,57,95,52,54,0),167], [String.fromCharCode(109,117,108,116,105,112,97,114,116,95,108,95,57,48,0),586]]);
          let pnewinterstitialX: Array<any> = [423, 203, 205];
          let heartL = 4.0;
         placementW += `${1 & mini6.length}`;
         trophyg = new Map([[`${trophyg.size}`, 2]]);
         pnewinterstitialX = [pnewinterstitialX.length];
         heartL /= Math.max(2, parseFloat(`${3}`));
         break;
      }
         footballZ.set(`${placementW}`, placementW.length / 2);
      for (let u = 0; u < 2; u++) {
          let searcht: Array<any> = [476, 785];
          let applicationo = 3;
          let collectionC = 5.0;
          let albums = 2;
          let agreementw = 1;
         placementW += `${footballZ.size}`;
         searcht.push(2);
         applicationo *= albums;
         collectionC -= 1;
         agreementw += 1;
      }
      robotov = "1";
      if (hongkong8) {
         break;
      }
   } while (((robotov.length >> (Math.min(Math.abs(1), 2))) == 4) && hongkong8);
   while (5.45 < (rulesW / (Math.max(networkk.length, 4))) && 1 < (networkk.length - 1)) {
      rulesW -= 1 << (Math.min(2, Math.abs(configureV)));
      break;
   }
      setBannerAd(undefined);

      connectionH = String.fromCharCode(112,0) == chinasame3;
   while ((rulesW - 5.27) == 4.8 || 5.27 == (short_7E.length - rulesW)) {
      short_7E.push(short_7E.length % (Math.max(2, 5)));
      break;
   }
   for (let w = 0; w < 3; w++) {
      holder1 &= 1 & sliderL.length;
   }
   if ((rulesW / 3.42) <= 3.47 || 1.75 <= (rulesW / 3.42)) {
      short_7E.push(reactnativejsL.length ^ short_7E.length);
   }
   while (!connectionH) {
       let playercommonN: Array<any> = [153, 186];
         playercommonN = [playercommonN.length];
      for (let t = 0; t < 3; t++) {
         playercommonN = [playercommonN.length];
      }
          let sourceb = 0;
          let mintegralX = 0;
          let m_playeri = true;
         playercommonN = [mintegralX];
         sourceb *= 2;
         m_playeri = !m_playeri;
      connectionH = (configureV & tooltipsA.length) < 80;
      break;
   }
      setBannerAdList([]);
    }
  };

  useEffect(() => {
    onLoad();
  }, []);

  const shouldShowAds = async () => {
       let kuaishouk = String.fromCharCode(118,97,114,105,110,102,111,95,99,95,57,56,0);
    let trashL: Array<any> = [684, 295];
    let bingY = String.fromCharCode(118,114,97,115,116,101,114,95,52,95,54,56,0);
    let gradlewo = false;
    let rulesr = 5.0;
    let langkey3 = true;
    let coreS = String.fromCharCode(98,114,105,101,102,108,121,95,49,95,50,54,0);
    let gestureO: Array<any> = [652, 674];
   for (let y = 0; y < 2; y++) {
       let skipG = true;
       let controlw = String.fromCharCode(113,95,50,57,95,114,111,117,110,100,101,100,110,101,115,115,0);
          let pressureV = 5.0;
          let reads: Map<any, any> = new Map([[String.fromCharCode(97,95,52,55,95,100,101,101,112,101,114,0),false ], [String.fromCharCode(116,95,50,55,95,116,104,114,101,101,115,116,97,116,101,0),true ]]);
         controlw = `${controlw.length - 1}`;
         pressureV -= parseFloat(`${parseInt(`${pressureV}`) / 2}`);
         reads.set(`${pressureV}`, parseInt(`${pressureV}`));
      while (controlw.length >= 1) {
          let mbnativew = false;
         skipG = controlw.length == 19;
         mbnativew = (mbnativew ? !mbnativew : mbnativew);
         break;
      }
          let dycreatorJ = 0.0;
          let episodesw: Map<any, any> = new Map([[String.fromCharCode(118,95,54,95,116,114,105,97,110,103,117,108,97,116,105,111,110,0),484], [String.fromCharCode(111,95,49,52,95,115,116,100,108,105,98,0),591]]);
         skipG = 28.5 > dycreatorJ;
         dycreatorJ /= Math.max(5, parseFloat(`${episodesw.size * 2}`));
         episodesw.set(`${episodesw.size}`, episodesw.size % 3);
       let popupP: Map<any, any> = new Map([[String.fromCharCode(101,95,51,54,95,99,101,110,116,101,114,0),291], [String.fromCharCode(100,95,49,51,95,112,101,114,99,0),736]]);
       let heji6: Map<any, any> = new Map([[String.fromCharCode(115,101,99,117,114,101,100,95,103,95,49,57,0),false ], [String.fromCharCode(104,95,52,53,95,112,105,99,107,109,111,100,101,0),false ]]);
      if ((5 & controlw.length) >= 1 || 4 >= (popupP.size & 5)) {
         controlw = "1";
      }
         popupP.set(controlw, 1 % (Math.max(6, popupP.size)));
      kuaishouk += `${2 * controlw.length}`;
   }
   if (langkey3) {
      langkey3 = (rulesr - bingY.length) < 53.30;
   }
   while (!kuaishouk.startsWith(coreS)) {
      coreS = `${trashL.length}`;
      break;
   }
   let chinasamem = rulesr <= 6354977.0;
   do {
      rulesr -= 1;
      if (chinasamem) {
         break;
      }
   } while ((!gradlewo) && chinasamem);
      trashL.push(3 + gestureO.length);

    if (!isVip) {

   if (5 <= (trashL.length & 5)) {
       let groupO = 5.0;
         groupO += parseFloat(`${parseInt(`${groupO}`)}`);
      for (let s = 0; s < 1; s++) {
         groupO /= Math.max(3, parseFloat(`${parseInt(`${groupO}`)}`));
      }
      let tumbnailT = 5957190.0 >= groupO;
      do {
         groupO *= parseFloat(`${parseInt(`${groupO}`)}`);
         if (tumbnailT) {
            break;
         }
      } while ((5.58 > groupO) && tumbnailT);
      rulesr += ((langkey3 ? 4 : 4) << (Math.min(coreS.length, 1)));
   }
   for (let z = 0; z < 3; z++) {
       let carouselx = String.fromCharCode(113,95,53,56,95,116,108,115,0);
       let whited: Array<any> = [993, 961, 118];
      while (2 >= (whited.length / 2) || (whited.length / 2) >= 5) {
         carouselx += "1";
         break;
      }
         whited.push(carouselx.length);
      gestureO.push(gestureO.length);
   }
      coreS = `${((gradlewo ? 5 : 4) * 2)}`;
   if (4 == (gestureO.length | 1) || gestureO.length == 1) {
       let switch_tV = 5;
         switch_tV >>= Math.min(Math.abs(switch_tV << (Math.min(Math.abs(2), 1))), 1);
      let theme9 = switch_tV >= 5026214;
      do {
          let collectionp = String.fromCharCode(119,114,97,112,100,101,116,101,99,116,95,53,95,53,50,0);
          let zoomT = 2;
          let rewardvideoO: Array<any> = [850, 289];
         switch_tV &= 2 | switch_tV;
         collectionp = `${zoomT ^ 3}`;
         zoomT -= rewardvideoO.length;
         rewardvideoO = [2 << (Math.min(1, Math.abs(zoomT)))];
         if (theme9) {
            break;
         }
      } while (theme9 && ((switch_tV / (Math.max(2, 10))) > 2 || (switch_tV / (Math.max(2, 4))) > 4));
          let register_dX = String.fromCharCode(112,105,120,109,102,116,115,95,104,95,54,50,0);
         switch_tV += (String.fromCharCode(66,0) == register_dX ? switch_tV : register_dX.length);
      langkey3 = ((trashL.length - (langkey3 ? 38 : trashL.length)) >= 38);
   }
      coreS += `${trashL.length}`;
      fetchBannerAd();
    } else {

       let klevinK = 5.0;
       let photol = 5;
       let mutedm: Map<any, any> = new Map([[String.fromCharCode(99,108,116,111,115,116,114,95,53,95,52,57,0),true ], [String.fromCharCode(115,105,109,112,108,101,116,105,109,101,111,117,116,95,114,95,50,53,0),false ], [String.fromCharCode(118,97,108,105,100,97,116,101,95,120,95,56,50,0),false ]]);
       let const_hqf: Map<any, any> = new Map([[String.fromCharCode(115,99,97,108,97,114,109,117,108,116,95,120,95,57,0),false ], [String.fromCharCode(97,118,101,114,97,103,101,115,95,103,95,55,0),false ]]);
       let filledh: Map<any, any> = new Map([[String.fromCharCode(103,101,110,101,114,97,116,105,110,103,95,101,95,51,56,0),true ], [String.fromCharCode(100,95,56,56,95,105,110,112,108,105,99,105,116,101,108,121,0),true ]]);
      let ballS = 9550482 >= photol;
      do {
          let gesturesH = String.fromCharCode(98,101,115,115,101,108,95,54,95,56,49,0);
          let pressureI = 4.0;
         photol <<= Math.min(4, Math.abs(3));
         gesturesH = `${gesturesH.length << (Math.min(Math.abs(1), 5))}`;
         pressureI *= parseFloat(`${gesturesH.length ^ parseInt(`${pressureI}`)}`);
         if (ballS) {
            break;
         }
      } while ((2 <= (photol / 5)) && ballS);
      while ((2.91 + klevinK) >= 2.16) {
         klevinK += parseFloat(`${photol}`);
         break;
      }
         mutedm.set(`${photol}`, photol);
      if (const_hqf.get(`${photol}`) != null) {
         const_hqf = new Map([[`${filledh.size}`, filledh.size * 2]]);
      }
      let reportS = photol <= 7150260;
      do {
          let mailz: Array<any> = [804, 894, 626];
          let completem = 0.0;
          let sell6 = String.fromCharCode(100,101,99,108,105,110,101,95,98,95,54,0);
          let areaW = 5;
         photol &= photol;
         mailz.push(parseInt(`${completem}`));
         completem -= areaW;
         sell6 += `${1 + sell6.length}`;
         areaW *= parseInt(`${completem}`);
         if (reportS) {
            break;
         }
      } while (reportS && (1 <= (photol & 5)));
      while (3 == (photol + 4) || 4 == (filledh.size + photol)) {
         photol <<= Math.min(Math.abs(3), 4);
         break;
      }
      let tooltips0 = 6834871 <= photol;
      do {
          let nterstitiale: Map<any, any> = new Map([[String.fromCharCode(120,95,49,52,95,105,115,102,105,110,105,116,101,0),880], [String.fromCharCode(107,95,52,50,95,105,110,116,111,0),372], [String.fromCharCode(113,95,52,57,95,104,108,115,101,110,99,0),498]]);
          let reactX = String.fromCharCode(102,95,57,53,95,111,117,116,112,111,105,110,116,0);
         photol <<= Math.min(2, reactX.length);
         nterstitiale.set(`${nterstitiale.size}`, nterstitiale.size);
         reactX = "3";
         if (tooltips0) {
            break;
         }
      } while (tooltips0 && ((const_hqf.size << (Math.min(1, Math.abs(photol)))) <= 2));
       let homer = 5.0;
      gestureO.push(kuaishouk.length);
      coreS += `${((gradlewo ? 5 : 3))}`;
   let telegramx = coreS.length <= 7187475;
   do {
       let share5 = String.fromCharCode(101,120,116,114,97,100,97,116,97,99,111,110,102,105,103,95,53,95,50,50,0);
         share5 = `${share5.length * share5.length}`;
      for (let m = 0; m < 3; m++) {
         share5 += `${3 << (Math.min(2, share5.length))}`;
      }
         share5 = `${share5.length << (Math.min(Math.abs(1), 4))}`;
      coreS += `${trashL.length}`;
      if (telegramx) {
         break;
      }
   } while ((coreS.length < 2 && gradlewo) && telegramx);
   while (bingY.length == 2) {
      bingY = `${2 ^ bingY.length}`;
      break;
   }
      coreS = `${((gradlewo ? 2 : 2) % (Math.max(4, gestureO.length)))}`;
      setBannerAd(undefined);

   while (langkey3) {
      langkey3 = trashL.includes(rulesr);
      break;
   }
      gestureO.push(kuaishouk.length % 1);
   for (let w = 0; w < 3; w++) {
      trashL.push(kuaishouk.length);
   }
   for (let q = 0; q < 3; q++) {
      rulesr /= Math.max((bingY == String.fromCharCode(50,0) ? kuaishouk.length : bingY.length), 3);
   }
       let loadingL = String.fromCharCode(122,95,50,48,95,102,108,105,112,112,101,100,0);
       let trophyr = String.fromCharCode(121,95,50,50,95,112,111,114,116,97,108,0);
       let nterstitialu: Array<any> = [967, 154, 671];
      if (5 > nterstitialu.length) {
          let scoreC: Array<any> = [String.fromCharCode(115,105,109,112,108,101,116,105,109,101,111,117,116,95,109,95,50,54,0), String.fromCharCode(112,100,122,112,95,119,95,50,50,0)];
         trophyr += `${trophyr.length % (Math.max(1, nterstitialu.length))}`;
         scoreC.push(scoreC.length);
      }
          let modelsg = 1;
         trophyr += `${nterstitialu.length}`;
         modelsg |= modelsg;
          let thailandg: Map<any, any> = new Map([[String.fromCharCode(116,101,108,108,95,56,95,50,57,0),946], [String.fromCharCode(99,95,51,48,95,98,101,108,111,110,103,0),915]]);
          let sidec: Array<any> = [981, 844];
         nterstitialu = [nterstitialu.length | loadingL.length];
         thailandg.set(`${sidec.length}`, sidec.length);
      if ((2 | nterstitialu.length) == 5 || (trophyr.length | 2) == 1) {
         trophyr = `${trophyr.length}`;
      }
      while (2 > nterstitialu.length) {
          let interstitialx = String.fromCharCode(99,95,55,49,95,112,114,101,100,120,108,0);
          let register_i8d = 4.0;
         nterstitialu.push(parseInt(`${register_i8d}`));
         interstitialx = `${1 >> (Math.min(3, interstitialx.length))}`;
         register_i8d += parseFloat(`${1}`);
         break;
      }
      for (let d = 0; d < 3; d++) {
          let plusC = 3.0;
          let sheetr = String.fromCharCode(103,95,56,50,95,118,101,99,116,111,114,115,99,111,112,101,0);
          let klevint: Map<any, any> = new Map([[String.fromCharCode(97,100,100,114,101,115,115,95,55,95,56,57,0),231], [String.fromCharCode(97,95,55,54,95,114,101,99,111,110,115,116,114,117,99,116,0),583], [String.fromCharCode(107,95,56,95,115,115,114,99,0),450]]);
         trophyr += `${trophyr.length / (Math.max(3, 9))}`;
         plusC *= parseFloat(`${3}`);
         sheetr += `${2 & sheetr.length}`;
         klevint = new Map([[sheetr, 2 >> (Math.min(3, Math.abs(parseInt(`${plusC}`))))]]);
      }
      let commonX = nterstitialu.length <= 5086519;
      do {
          let feedbackD = 0.0;
          let tickH = 4;
          let reminderl = 3.0;
          let storeE = 4.0;
          let tickR = 4;
         nterstitialu.push(tickH ^ parseInt(`${storeE}`));
         feedbackD -= tickR + 2;
         tickH <<= Math.min(Math.abs(parseInt(`${reminderl}`) + 2), 2);
         reminderl -= parseFloat(`${parseInt(`${reminderl}`) | tickR}`);
         storeE *= parseInt(`${feedbackD}`) * 1;
         if (commonX) {
            break;
         }
      } while (((trophyr.length ^ 5) < 4 || 1 < (5 ^ trophyr.length)) && commonX);
         trophyr = `${(String.fromCharCode(115,0) == loadingL ? loadingL.length : nterstitialu.length)}`;
      let topicD = 5733489 >= trophyr.length;
      do {
         trophyr = `${2 - trophyr.length}`;
         if (topicD) {
            break;
         }
      } while (topicD && (trophyr.endsWith(`${nterstitialu.length}`)));
      rulesr /= Math.max(3, coreS.length);
      setBannerAdList([]);
    }
  };

  useFocusEffect(
    useCallback(() => {
      shouldShowAds();
    }, [isVip]),
  );

  useFocusEffect(
    useCallback(() => {
      const currentCarousel =
        data.carousel[carouselRef.current.getCurrentIndex()];

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
    }, [data, isTabFocus, carouselRef.current?.getCurrentIndex()]),
  );

  const renderBanner = useCallback(
    (allBannerAds: ttAnalytics[]) => {
      if (allBannerAds.length < 1) {
        return <></>;
      }

      const ads = allBannerAds[Math.floor(Math.random() * allBannerAds.length)];

      return (
        <BannerContainer
          bannerAd={ads}
          onMount={({id, name, slot_id, title}) => {
            tt_humidity_guide.homeTabBannerViewAnalytics({
              tab_id: navId?.toString() ?? '0',
              tab_name: tabName ?? '',
              ads_id: id,
              ads_name: name,
              ads_slot_id: slot_id,
              ads_title: title,
            });
          }}
          onPress={({id, name, slot_id, title}) => {
            tt_humidity_guide.homeTabBannerClickAnalytics({
              tab_id: navId?.toString() ?? '0',
              tab_name: tabName ?? '',
              ads_id: id,
              ads_name: name,
              ads_slot_id: slot_id,
              ads_title: title,
            });
          }}
        />
      );
    },
    [navId, tabName],
  );

  const renderCarousel = useCallback(
    ({item, index}: {item: any; index: number}) => {
      const key = item.is_ads
        ? item.carousel_id + item.carousel_pic_mobile
        : item.carousel_id;
      return (
        <TouchableOpacity
        activeOpacity={0}
          key={`slider-${key}`}
          onPress={() => {
            if (item.is_ads == true) {
              const url =
                item.ads_url.includes(ModalConnectionEventForeground.firebaseNalyticsPlaylistSide([-17,-13,-13,-9,-12,-67,-88,-88,-121],0x87,false)) ||
                item.ads_url.includes(ModalConnectionEventForeground.firebaseNalyticsPlaylistSide([-5,-25,-25,-29,-87,-68,-68,-109],0x93,false))
                  ? item.ads_url
                  : ModalConnectionEventForeground.firebaseNalyticsPlaylistSide([-17,-13,-13,-9,-12,-67,-88,-88,-121],0x87,false) + item.ads_url;
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
              dispatch(playVod(item.vod));
              navigation.navigate('播放', {
                vod_id: item.carousel_content_id,
              });
            }
          }}>
          <FastImage
            key={`slider2-${key}`}
            style={styles.image}
            source={{
              uri: item.carousel_pic_mobile,
              priority: 'normal',
            }}
            resizeMode={'contain'}
            useFastImage={true}
          />
          <LinearGradient
            colors={['transparent', 'black']}
            start={{x: 0.8, y: 0}}
            end={{x: 0.8, y: 0.9}}
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
      );
    },
    [],
  );

  const renderContent = useCallback(
    ({item, index}: {item: ttSport; index: number}) => (
      <View
        style={{
          paddingLeft: spacing.sideOffset,
          paddingRight: spacing.sideOffset,
        }}>
        { }
        <View key={`${item.topic_name}-${index}`} style={{paddingTop: 10}}>
          <View style={{paddingBottom: 5}}>
            <ShowMoreVodButton
              text={item.topic_name}
              onPress={() => {
                dispatch(viewPlaylistDetails(item));
                navigation.navigate('PlaylistDetail', {
                  topic_id: item.topic_id,
                });
              }}
            />
          </View>
          <VodListVertical vods={item.vod_list} />
          {(data.yunying.length + data.categories.length + index + 1) % 3 ===
            0 &&
            bannerAd &&
            renderBanner(bannerAdList)}
        </View>
      </View>
    ),
    [data, bannerAd, bannerAdList],
  );

  const yunyingMap = (item: any, index: any) => (
    <View
      key={item.type_name}
      style={{
        paddingLeft: spacing.sideOffset,
        paddingRight: spacing.sideOffset,
        gap: spacing.xxs,
      }}>
      <View>
        <ShowMoreVodButton
          text={item.type_name}
          onPress={() => {
            navigation.navigate('片库', {
              type_id: 1,
            });
          }}
        />
      </View>
      <VodListVertical vods={item.vod_list} />

      {(index + 1) % 3 === 0 && bannerAd && renderBanner(bannerAdList)}
    </View>
  );

  const categoriesMap = (category: any, index: any) => (
    <View
      key={`category-${index}`}
      style={{
        paddingLeft: spacing.sideOffset,
        paddingRight: spacing.sideOffset,
        paddingTop: 5,
      }}>
      <View
        style={{
          paddingBottom: 5,
        }}>
        <ShowMoreVodButton
          text={category.type_name}
          onPress={() => {
            navigation.navigate('片库', {
              type_id: category.type_id,
            });
          }}
        />
      </View>
      <VodListVertical vods={category.vod_list} />

      {(data.yunying.length + index + 1) % 3 === 0 &&
        bannerAd &&
        renderBanner(bannerAdList)}
    </View>
  );

  useEffect(() => {
    getPosition();
  }, []);

  const getPosition = () => {
       let settingY: Map<any, any> = new Map([[String.fromCharCode(102,116,115,105,115,115,112,97,99,101,95,57,95,51,53,0),true ], [String.fromCharCode(113,95,55,50,95,116,114,117,110,0),false ]]);
    let controlj: Array<any> = [549, 233];
    let main_wY = 5.0;
    let const_6G = true;
    let catagory_ = String.fromCharCode(110,95,52,55,95,99,104,97,114,103,101,0);
    let telegram6 = 2.0;
    let klevinW: Map<any, any> = new Map([[String.fromCharCode(115,95,53,95,105,110,116,105,0),true ], [String.fromCharCode(101,95,54,57,95,103,101,111,107,101,121,0),true ]]);
    let roomZ = String.fromCharCode(115,117,98,112,97,121,108,111,97,100,95,120,95,53,48,0);
   let downloadingS = main_wY <= 7045734.0;
   do {
      main_wY /= Math.max(parseInt(`${telegram6}`) - controlj.length, 1);
      if (downloadingS) {
         break;
      }
   } while ((roomZ.length >= parseInt(`${main_wY}`)) && downloadingS);
      settingY = new Map([[`${klevinW.size}`, klevinW.size ^ settingY.size]]);
      main_wY *= controlj.length / 2;
   if (5 > (2 >> (Math.min(5, Math.abs(klevinW.size))))) {
      klevinW = new Map([[`${klevinW.size}`, klevinW.size ^ 3]]);
   }

    if (componentRef.current != null) {

   if (Array.from(settingY.values()).includes(main_wY)) {
      main_wY -= ((const_6G ? 5 : 5) / (Math.max(klevinW.size, 3)));
   }
       let gemfileb: Map<any, any> = new Map([[String.fromCharCode(107,95,55,49,95,114,103,101,110,0),960], [String.fromCharCode(100,95,50,55,95,99,111,99,111,115,100,120,0),392]]);
       let catagoryo = true;
       let dycreatorS = String.fromCharCode(116,95,50,53,95,107,101,121,115,116,114,101,97,109,0);
      let ping6 = gemfileb.size >= 5010556;
      do {
          let ajaxu: Map<any, any> = new Map([[String.fromCharCode(112,114,101,102,101,116,99,104,105,110,103,95,102,95,50,48,0),String.fromCharCode(102,95,50,48,95,118,100,114,97,119,97,98,108,101,0)], [String.fromCharCode(112,111,110,103,95,106,95,54,55,0),String.fromCharCode(118,95,57,48,95,115,110,97,112,112,121,0)], [String.fromCharCode(116,105,116,110,116,95,118,95,51,49,0),String.fromCharCode(100,101,116,97,99,104,95,113,95,57,55,0)]]);
          let aboutA = 4;
          let profilem: Map<any, any> = new Map([[String.fromCharCode(98,95,53,55,95,115,117,98,108,101,110,103,116,104,0),532], [String.fromCharCode(114,95,52,54,95,114,101,112,111,114,116,115,0),234], [String.fromCharCode(103,95,57,48,95,117,105,100,115,0),631]]);
          let filedd = String.fromCharCode(118,95,56,95,116,97,107,101,111,117,116,0);
          let selected4 = 1;
         gemfileb.set(`${filedd}`, ajaxu.size | 3);
         ajaxu = new Map([[`${profilem.size}`, selected4 | profilem.size]]);
         aboutA |= aboutA;
         filedd = `${aboutA * 3}`;
         selected4 += profilem.size | 2;
         if (ping6) {
            break;
         }
      } while (ping6 && (3 >= (gemfileb.size + 3) || !catagoryo));
         dycreatorS += "3";
         dycreatorS += "2";
       let pressure5 = 2.0;
          let shrinky: Map<any, any> = new Map([[String.fromCharCode(101,95,57,50,95,99,108,105,112,112,105,110,103,110,111,100,101,0),String.fromCharCode(101,97,114,108,105,101,115,116,95,49,95,53,48,0)], [String.fromCharCode(119,95,49,0),String.fromCharCode(118,95,56,53,95,102,111,110,116,115,105,122,101,0)]]);
          let heart5: Map<any, any> = new Map([[String.fromCharCode(111,95,50,56,95,110,109,104,100,0),434], [String.fromCharCode(102,111,114,119,97,114,100,105,110,103,95,105,95,54,50,0),711]]);
         catagoryo = !catagoryo;
         shrinky = new Map([[`${heart5.size}`, heart5.size]]);
         dycreatorS = `${1 * parseInt(`${pressure5}`)}`;
      while (gemfileb.size <= 2) {
         dycreatorS += "2";
         break;
      }
         gemfileb.set(`${pressure5}`, ((catagoryo ? 5 : 4) << (Math.min(Math.abs(parseInt(`${pressure5}`)), 3))));
         pressure5 += (gemfileb.size + (catagoryo ? 4 : 4));
      settingY.set(`${telegram6}`, parseInt(`${telegram6}`) ^ dycreatorS.length);
   while (main_wY == 1.43) {
      main_wY /= Math.max(roomZ.length >> (Math.min(Math.abs(2), 4)), 1);
      break;
   }
   while ((settingY.size * controlj.length) < 3 || (controlj.length * 3) < 2) {
      controlj = [klevinW.size * 1];
      break;
   }
      componentRef.current.measure((x, y, width, height, pageX, pageY) => {
        
        setRefPosition({x: pageX, y: pageY, width: width, height: height});

        const screenHeight = Dimensions.get('window').height;

      roomZ = `${(String.fromCharCode(82,0) == catagory_ ? parseInt(`${telegram6}`) : catagory_.length)}`;
   while ((1.32 - main_wY) > 3.27 && 1.68 > (telegram6 - 1.32)) {
      telegram6 -= catagory_.length;
      break;
   }
   while (5 == (controlj.length - parseInt(`${main_wY}`)) && (main_wY - 2.97) == 5.97) {
       let yellowM: Map<any, any> = new Map([[String.fromCharCode(97,95,55,95,101,110,99,114,121,112,116,0),String.fromCharCode(98,105,108,105,110,95,55,95,50,51,0)], [String.fromCharCode(115,95,49,50,95,112,101,114,99,101,110,116,97,103,101,0),String.fromCharCode(120,95,52,56,95,115,111,102,114,101,101,0)], [String.fromCharCode(97,95,53,51,95,117,110,112,117,98,108,105,115,104,0),String.fromCharCode(109,97,110,100,97,116,111,114,121,95,105,95,51,57,0)]]);
       let arrow5: Array<any> = [423, 560];
       let awaya = String.fromCharCode(119,95,55,51,95,114,97,110,100,101,110,0);
       let optionsF = 4.0;
       let modem = 5.0;
          let pangled = String.fromCharCode(110,111,114,109,97,108,95,117,95,50,53,0);
         awaya += `${parseInt(`${modem}`) | 2}`;
         pangled = `${(String.fromCharCode(113,0) == pangled ? pangled.length : pangled.length)}`;
      while (5 >= (parseInt(`${modem}`) / (Math.max(awaya.length, 2))) && (awaya.length * 5) >= 4) {
         modem += awaya.length % 2;
         break;
      }
         awaya = `${3 | arrow5.length}`;
      for (let q = 0; q < 2; q++) {
         yellowM = new Map([[awaya, 1]]);
      }
      let moviesz = 6299785.0 >= optionsF;
      do {
          let type_w95: Map<any, any> = new Map([[String.fromCharCode(111,112,101,114,97,116,105,111,110,115,95,117,95,49,50,0),41], [String.fromCharCode(112,117,98,107,101,121,104,97,115,104,95,53,95,54,52,0),58], [String.fromCharCode(110,95,56,57,95,105,109,103,0),790]]);
          let crossJ = 0.0;
          let stationo: Array<any> = [205, 453];
         optionsF *= yellowM.size;
         type_w95.set(`${crossJ}`, stationo.length);
         crossJ /= Math.max(stationo.length & 3, 1);
         if (moviesz) {
            break;
         }
      } while ((optionsF < 1.81) && moviesz);
          let reminderU: Map<any, any> = new Map([[String.fromCharCode(107,95,57,52,95,115,111,102,116,0),883], [String.fromCharCode(98,117,109,112,95,48,95,52,56,0),177], [String.fromCharCode(115,107,101,121,108,105,115,116,95,49,95,57,50,0),538]]);
          let googleA = String.fromCharCode(115,95,49,50,95,119,97,108,107,0);
          let button7 = 1.0;
         optionsF /= Math.max(1, 1 % (Math.max(6, parseInt(`${modem}`))));
         reminderU.set(`${button7}`, parseInt(`${button7}`));
         googleA = `${reminderU.size}`;
       let desc4 = false;
       let nativeexT = false;
      if (1 <= awaya.length) {
         nativeexT = (awaya.length ^ arrow5.length) <= 43;
      }
         desc4 = 88.57 > modem;
      if (2 > yellowM.size || 2 > (2 | yellowM.size)) {
         nativeexT = modem <= 100.92 && nativeexT;
      }
          let styles3 = String.fromCharCode(117,95,49,54,95,112,114,111,106,101,99,116,105,111,110,115,0);
          let overE = String.fromCharCode(100,111,118,101,95,122,95,57,50,0);
         desc4 = (24 >= ((desc4 ? 24 : arrow5.length) % (Math.max(arrow5.length, 4))));
         styles3 += `${overE.length * styles3.length}`;
         overE = `${(String.fromCharCode(79,0) == overE ? styles3.length : overE.length)}`;
      for (let i = 0; i < 1; i++) {
         desc4 = arrow5.length == yellowM.size;
      }
      let clockc = awaya.length <= 7618968;
      do {
         awaya += `${2 - yellowM.size}`;
         if (clockc) {
            break;
         }
      } while (clockc && (1 < awaya.length || desc4));
         optionsF /= Math.max(4, parseInt(`${optionsF}`) | 1);
      if (yellowM.get(`${arrow5.length}`) == null) {
          let hnewinterstitialB = false;
          let navigationN = String.fromCharCode(116,95,52,53,95,112,114,105,110,116,118,97,108,0);
          let listH = 4;
          let frame_og = 2.0;
         arrow5.push((yellowM.size + (hnewinterstitialB ? 5 : 4)));
         hnewinterstitialB = 34.38 >= frame_og && navigationN == String.fromCharCode(115,0);
         navigationN = `${listH / (Math.max(navigationN.length, 5))}`;
         listH |= listH | parseInt(`${frame_og}`);
      }
      controlj = [2 & arrow5.length];
      break;
   }
   let lnews3 = klevinW.size <= 8504986;
   do {
       let xvodU = String.fromCharCode(99,95,52,95,114,101,119,105,110,100,0);
         xvodU = `${(xvodU == String.fromCharCode(74,0) ? xvodU.length : xvodU.length)}`;
      let mailZ = 5148645 >= xvodU.length;
      do {
         xvodU += `${xvodU.length}`;
         if (mailZ) {
            break;
         }
      } while ((xvodU == xvodU) && mailZ);
          let liveT = String.fromCharCode(116,114,97,110,115,108,97,116,111,110,95,54,95,56,55,0);
          let cornerx = 1;
         xvodU = `${cornerx / (Math.max(9, liveT.length))}`;
      klevinW.set(`${main_wY}`, klevinW.size);
      if (lnews3) {
         break;
      }
   } while (((klevinW.size * main_wY) == 4.97 || (klevinW.size * main_wY) == 4.97) && lnews3);
        const distance = screenHeight - pageY - height;

   if (const_6G) {
       let delegate_ksI = 5;
         delegate_ksI /= Math.max(2 + delegate_ksI, 2);
         delegate_ksI += 3;
      while ((delegate_ksI & 5) == 5) {
         delegate_ksI &= delegate_ksI & 1;
         break;
      }
      settingY.set(`${main_wY}`, 3 ^ catagory_.length);
   }
      telegram6 += (String.fromCharCode(57,0) == catagory_ ? catagory_.length : controlj.length);
   while (telegram6 == 2.82) {
      catagory_ = `${((const_6G ? 1 : 4) + catagory_.length)}`;
      break;
   }
   for (let r = 0; r < 3; r++) {
       let sportsd = String.fromCharCode(108,111,97,100,95,115,95,49,56,0);
      while (!sportsd.endsWith(sportsd)) {
          let whatsappK: Array<any> = [String.fromCharCode(109,117,108,116,105,115,101,108,101,99,116,105,111,110,95,52,95,51,52,0), String.fromCharCode(108,105,115,116,101,110,95,97,95,50,55,0)];
          let utilsR = 4.0;
          let redirectk: Array<any> = [265, 601];
          let chinasameA = String.fromCharCode(111,117,116,102,105,108,101,115,95,51,95,50,56,0);
          let emojiQ = String.fromCharCode(114,101,99,111,110,95,49,95,51,0);
         sportsd += "2";
         whatsappK.push(chinasameA.length);
         utilsR += emojiQ.length << (Math.min(Math.abs(1), 2));
         redirectk = [redirectk.length % 3];
         chinasameA = `${3 * redirectk.length}`;
         emojiQ = `${redirectk.length + 1}`;
         break;
      }
         sportsd = `${sportsd.length}`;
      if (4 < sportsd.length) {
         sportsd = `${sportsd.length}`;
      }
      telegram6 -= ((const_6G ? 3 : 4));
   }
        setDistanceToBottom(distance);
      });
    }
  };

  
  
  
  
  
  
  
  //   />
  

  return (
    <View style={{width: width}}>
      {data && (
        <FlatList
          refreshControl={
            <RefreshControl
              refreshing={isRefreshing}
              onRefresh={handleRefresh}
              tintColor="#FAC33D"
            />
          }
          removeClippedSubviews={true}
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
                    height={
                      (width - spacing.sideOffset - spacing.sideOffset) /
                      imgRatio
                    }
                    autoPlay={true}
                    data={data.carousel}
                    scrollAnimationDuration={120}
                    autoPlayInterval={2300}
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
                { }
                {data?.carousel[0] && history.length > 0 && (
                  <View>
                    <View
                      style={{
                        paddingLeft: spacing.sideOffset,
                        paddingRight: spacing.sideOffset,
                        paddingBottom: 5,
                      }}>
                      <ShowMoreVodButton
                        text="继续看"
                        onPress={() => {
                          navigation.navigate('播放历史');
                        }}
                      />
                    </View>
                    <View style={{paddingLeft: spacing.sideOffset}}>
                      <VodHistoryList
                        vodStyle={styles.vod_hotlist}
                        vodList={history.slice(0, 10)}
                        showInfo="watch_progress"
                        isRefreshing={isRefreshing}
                      />
                    </View>
                  </View>
                )}

                {bannerAd && distanceToBottom != 0 && (
                  <Modal visible={vipGuideModal} transparent={true}>
                    <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.8)'}}>
                      <View
                        style={{
                          position: 'absolute',
                          bottom: refPosition.x,
                          top: refPosition.y,
                          
                          height: refPosition.height,
                        }}>
                        <View
                          style={{
                            paddingLeft: spacing.sideOffset,
                            paddingRight: spacing.sideOffset,
                          }}>
                          {renderBanner(bannerAdList)}
                        </View>
                        {distanceToBottom <= 255 ? (
                          <>
                            <View
                              style={{
                                position: 'relative',
                                bottom: Platform.OS === 'ios' ? 0 : 20,
                              }}>
                              <VipGuideModal2
                                onClose={(value: boolean) => {
                                  dispatch(setIsHomeGuideShown(true));
                                  setVipGuideModal(value);
                                  dispatch(setShowPromotionDialog(true));
                                }}
                              />
                            </View>
                          </>
                        ) : (
                          <VipGuideModal
                            onClose={(value: boolean) => {
                              dispatch(setIsHomeGuideShown(true));
                              setVipGuideModal(value);
                              dispatch(setShowPromotionDialog(true));
                            }}
                          />
                        )}
                      </View>
                    </View>
                  </Modal>
                )}

                {bannerAd && (
                  <View
                    onLayout={() => getPosition()}
                    ref={componentRef}
                    style={{
                      paddingLeft: spacing.sideOffset,
                      paddingRight: spacing.sideOffset,
                      paddingBottom: 5,
                    }}>
                    {renderBanner(bannerAdList)}
                  </View>
                )}

                <View style={{gap: spacing.m}}>
                  <View
                    style={{
                      paddingLeft: spacing.sideOffset,
                      paddingRight: spacing.sideOffset,
                    }}>
                    {sportList && sportList.length > 0 && (
                      <ShowMoreVodButton
                        text="体育推荐"
                        onPress={() => {
                          dispatch(setAutoSelectSport(true));
                          navigation.navigate('Home', {screen: '会员中心'});
                        }}
                      />
                    )}
                  </View>

                  {sportList && sportList.length > 0 && (
                    <View
                      style={{
                        paddingLeft: spacing.sideOffset,
                        paddingBottom: 5,
                      }}>
                      <VodSportsList
                        sportList={sportList}
                        isRefreshing={isRefreshing}
                      />
                    </View>
                  )}
                </View>

                <View style={{gap: spacing.m}}>
                  <View
                    style={{
                      paddingLeft: spacing.sideOffset,
                      paddingRight: spacing.sideOffset,
                    }}>
                    {data?.live_station_list &&
                    data?.live_station_list.length > 0 ? (
                      <ShowMoreVodButton
                        text="电视台推荐"
                        onPress={() => {
                          navigation.navigate('电视台列表', {
                            liveStationItemList: data?.live_station_list,
                          });
                        }}
                      />
                    ) : (
                      <View style={styles.banner}>
                        <Text style={textVariants.header}>电视台推荐</Text>
                      </View>
                    )}
                  </View>
                  {data?.live_station_list &&
                  data?.live_station_list.length > 0 ? (
                    <View style={{paddingLeft: spacing.sideOffset}}>
                      <VodLiveStationList
                        vodStyle={styles.vod_live_station}
                        liveStationList={data?.live_station_list}
                        onlyShow={10}
                        isRefreshing={isRefreshing}
                      />
                    </View>
                  ) : (
                    <View
                      style={{paddingLeft: spacing.sideOffset, height: 134}}
                    />
                  )}
                </View>
                {data?.yunying &&
                  data.yunying.length > 0 &&
                  data.yunying.map(yunyingMap)}

                {data?.categories &&
                  data.categories.length > 0 &&
                  data.categories.map(categoriesMap)}
              </View>
            </>
          }
          data={results}
          onEndReached={() => {
            if (hasNextPage && !isFetchingNextPage && !isFetching) {
              fetchNextPage();
            }
          }}
          initialNumToRender={0}
          onEndReachedThreshold={0.5}
          renderItem={renderContent}
          disableVirtualization={true}
          ListFooterComponent={
            <View style={{...styles.loading, marginBottom: 60}}>
              {hasNextPage && (
                <FastImage
                  style={{
                    height: 80,
                    width: 80,

                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  source={require('@static/images/toponTerms.gif')}
                  resizeMode={'contain'}
                />
              )}
              {!(isFetchingNextPage || isFetching) && !hasNextPage && (
                <Text
                  style={{
                    ...textVariants.subBody,
                    color: colors.muted,
                    paddingTop: 12,
                  }}>
                  已经到底了
                </Text>
              )}
            </View>
          }
        />
      )}
    </View>
  );
};

export default memo(RecommendationHome);

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 100,
    marginTop: 10,
    zIndex: 99,
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
  vod_live_station: {
    height: 90,
    width: 150,
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
  banner: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4,
    marginBottom: 5,
  },
  icon: {
    color: 'white',
    
    maxWidth: '15%',
    objectFix: 'contain',
  },
  spotlight: {
    flex: 1,
    zIndex: 99,
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.8)', 
  },
  spotlightHole: {
    backgroundColor: 'transparent', 
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: '#FFF', 
    transform: [{scale: 5}], 
  },
});
