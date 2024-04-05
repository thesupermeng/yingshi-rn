

class ReducerUnselectedInactiveMoon {
   static profileRecommendationBackgroun = (contents: [number], key: number, hasEmoji: boolean) => {
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
import React, { memo, useState, useRef, useEffect, useCallback } from 'react';
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
import ShowMoreVodButton from '../button/x_sheet_theme_button';
import {
   RBEmojiEwarded,
   LDGray,
   JClubEdit,
   MAboutEdit,
} from '@type/wpk_long';
import FastImage from '../common/gwi_with';
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
import LoadingIcon from '@static/images/unselectedDark.svg';
import { Image } from 'react-native';
import { RLarge } from '../../api/rs_away_stats';
import { JTumbnailMatches } from '@utility/qot_stations_station';
import { MVCountry } from '@constants';
import { KLongNext } from '../../../z_search';
import { BannerContainer } from './r_basketball_common';
import AsyncStorage from '@react-native-async-storage/async-storage';
import umb_center_carousel from '../../../Umeng/umb_center_carousel';
import { UQQuest } from '../../api/z_google';
import DeviceInfo from 'react-native-device-info';
import { VipPromotionOverlay } from '../modal/wd_pressure';
import { HDTGesturesList } from '@redux/reducers/f_gmail';
import { KWConstants } from '@models/kl_sheet';
import VipGuideModal2 from '../modal/lyh_tail';
import VipGuideModal from '../modal/n_header_membership';
import { screenModel } from '@type/nb_shared_target';
import {
   setAutoSelectSport,
   setIsHomeGuideShown,
   setIsSportGuideShown,
   setShowPromotionDialog,
} from '@redux/actions/a_switch';
import { Url } from '../../Sports/middleware/aux_bootsplash_black';
import LShrink from '../../Sports/middleware/i_favorite';
import { EALSource } from '../../Sports/types/x_home';
import VodSportsList from '../vod/mg_roboto_rewind';

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
      let anytimen = false;
      let flyerV = String.fromCharCode(100, 111, 117, 98, 108, 101, 105, 110, 116, 115, 116, 114, 95, 121, 95, 56, 48, 0);
      let sina9 = String.fromCharCode(112, 97, 114, 97, 109, 99, 104, 97, 110, 103, 101, 95, 114, 95, 52, 57, 0);
      let weiboR = 1.0;
      let apps3 = 3.0;
      let rewindU = 2.0;
      let routerA = 2.0;
      let text4 = false;
      let nexto = 3;
      let targetK = 5.0;
      let basketballs = String.fromCharCode(118, 95, 53, 55, 95, 115, 104, 111, 114, 116, 115, 0);
      let bodany: Map<any, any> = new Map([[String.fromCharCode(122, 95, 55, 53, 95, 101, 109, 117, 101, 100, 103, 101, 0), 597], [String.fromCharCode(100, 117, 112, 108, 105, 99, 97, 116, 111, 114, 95, 105, 95, 53, 57, 0), 233], [String.fromCharCode(98, 95, 55, 56, 95, 114, 101, 97, 115, 111, 110, 0), 996]]);
      let trophy7: Array<any> = [770, 159];
      let settingsz = 2;
      for (let c = 0; c < 3; c++) {
         let grayz = String.fromCharCode(116, 97, 107, 100, 115, 112, 95, 110, 95, 52, 48, 0);
         let incidentk = 4.0;
         let configureZ: Map<any, any> = new Map([[String.fromCharCode(115, 95, 51, 55, 95, 97, 98, 115, 116, 114, 97, 99, 116, 0), true], [String.fromCharCode(108, 95, 50, 51, 95, 106, 100, 115, 97, 109, 112, 108, 101, 0), false], [String.fromCharCode(100, 97, 116, 97, 108, 95, 97, 95, 56, 49, 0), true]]);
         let next7 = String.fromCharCode(111, 117, 116, 99, 111, 109, 101, 95, 56, 95, 51, 50, 0);
         let singleY: Array<any> = [526, 14];
         if (1.91 <= (5.34 / (Math.max(4, incidentk))) || 5.5 <= (incidentk / 5.34)) {
            let agreementK = String.fromCharCode(118, 95, 49, 48, 48, 95, 100, 105, 115, 112, 111, 115, 97, 98, 108, 101, 0);
            incidentk += parseInt(`${incidentk}`);
            agreementK += `${agreementK.length % 1}`;
         }
         while (4 < (configureZ.size - 3) && 3 < (configureZ.size - next7.length)) {
            next7 = `${grayz.length | 3}`;
            break;
         }
         if (3 >= (1 & next7.length) || 1 >= (singleY.length & next7.length)) {
            next7 += "2";
         }
         let sentry8 = 2;
         let plashI = 3.0;
         singleY.push(sentry8 % (Math.max(configureZ.size, 5)));
         sentry8 -= parseInt(`${plashI}`);
         let playlistZ: Map<any, any> = new Map([[String.fromCharCode(117, 110, 115, 97, 102, 101, 95, 54, 95, 51, 53, 0), 146], [String.fromCharCode(114, 95, 56, 95, 97, 100, 118, 97, 110, 99, 105, 110, 103, 0), 292]]);
         grayz = `${parseInt(`${incidentk}`) << (Math.min(singleY.length, 4))}`;
         playlistZ = new Map([[`${playlistZ.size}`, playlistZ.size]]);
         while (!grayz.startsWith(`${next7.length}`)) {
            next7 = "2";
            break;
         }
         let backwardu = true;
         incidentk += (String.fromCharCode(83, 0) == next7 ? next7.length : singleY.length);
         backwardu = (!backwardu ? !backwardu : backwardu);
         for (let d = 0; d < 2; d++) {
            incidentk -= 3 & next7.length;
         }
         if (next7.length <= 4) {
            let ewardedC: Array<any> = [1000, 546, 751];
            let diceS = String.fromCharCode(99, 95, 54, 48, 95, 98, 108, 111, 99, 107, 99, 104, 97, 105, 110, 115, 0);
            next7 += `${diceS.length}`;
            ewardedC = [ewardedC.length * 1];
            diceS += `${2 << (Math.min(2, ewardedC.length))}`;
         }
         grayz = `${singleY.length << (Math.min(4, Math.abs(configureZ.size)))}`;
         let lightl = 5.0;
         grayz = `${parseInt(`${lightl}`) + 3}`;
         grayz += `${3 ^ configureZ.size}`;
         for (let x = 0; x < 1; x++) {
            let n_imager = 5;
            let privacyf = String.fromCharCode(109, 95, 56, 51, 95, 108, 105, 115, 116, 0);
            let actionsM = true;
            let bell2 = String.fromCharCode(119, 95, 54, 49, 95, 112, 97, 99, 107, 101, 116, 101, 100, 0);
            grayz = `${((actionsM ? 1 : 4) | parseInt(`${incidentk}`))}`;
            n_imager ^= privacyf.length ^ n_imager;
            privacyf = `${bell2.length}`;
            actionsM = 92 == bell2.length;
         }
         let desce: Array<any> = [297, 592];
         next7 += `${parseInt(`${incidentk}`) / (Math.max(1, 9))}`;
         desce.push(desce.length << (Math.min(Math.abs(2), 1)));
         let sourceV = false;
         let modityA = 3.0;
         grayz = `${1 >> (Math.min(Math.abs(parseInt(`${modityA}`)), 4))}`;
         sourceV = (!sourceV ? !sourceV : sourceV);
         modityA -= (parseFloat(`${(sourceV ? 5 : 5) & (sourceV ? 3 : 3)}`));
         weiboR *= (parseFloat(`${(text4 ? 5 : 1) * parseInt(`${weiboR}`)}`));
      }
      let favoriteG = basketballs.length >= 9834702;
      do {
         basketballs += `${(parseInt(`${apps3}`) + (anytimen ? 2 : 5))}`;
         if (favoriteG) {
            break;
         }
      } while (favoriteG && (2.13 >= (parseFloat(`${basketballs.length}`) + targetK)));
      while (flyerV.length < nexto) {
         flyerV = `${basketballs.length}`;
         break;
      }
      anytimen = !anytimen;
      while (text4) {
         text4 = 84.41 > weiboR;
         break;
      }
      if (flyerV != String.fromCharCode(55, 0) || basketballs == String.fromCharCode(71, 0)) {
         basketballs = `${1 << (Math.min(4, flyerV.length))}`;
      }
      if (5.68 < apps3) {
         apps3 /= Math.max(4, parseFloat(`${flyerV.length & sina9.length}`));
      }
      nexto <<= Math.min(Math.abs(basketballs.length + parseInt(`${targetK}`)), 3);
      if (basketballs.startsWith(`${text4}`)) {
         basketballs += `${basketballs.length - flyerV.length}`;
      }
      for (let p = 0; p < 1; p++) {
         weiboR += (parseFloat(`${parseInt(`${rewindU}`) << (Math.min(3, Math.abs((anytimen ? 3 : 3))))}`));
      }
      let launchm = 2.0;
      let filterp = true;
      let videoW = String.fromCharCode(97, 117, 103, 109, 101, 110, 116, 97, 116, 105, 111, 110, 95, 54, 95, 56, 48, 0);
      videoW += `${parseInt(`${launchm}`) % (Math.max(videoW.length, 9))}`;
      let rulesH = 5.0;
      let containerc = String.fromCharCode(115, 104, 114, 117, 110, 107, 95, 114, 95, 55, 54, 0);
      videoW += "1";
      rulesH += parseFloat(`${parseInt(`${rulesH}`) >> (Math.min(Math.abs(3), 4))}`);
      containerc = "1";
      if (!filterp) {
         filterp = 93.15 > launchm && !filterp;
      }
      launchm *= (String.fromCharCode(68, 0) == videoW ? videoW.length : (filterp ? 2 : 5));
      filterp = (parseInt(`${launchm}`) + videoW.length) <= 34;
      videoW += `${((filterp ? 4 : 4) & parseInt(`${launchm}`))}`;
      while (1 == videoW.length) {
         let renewE = 3;
         let dropdownG = String.fromCharCode(112, 95, 53, 51, 95, 105, 110, 116, 108, 105, 115, 116, 0);
         let sheetQ = 1.0;
         videoW = `${renewE - 2}`;
         renewE -= 3;
         dropdownG += `${parseInt(`${sheetQ}`)}`;
         sheetQ -= parseFloat(`${parseInt(`${sheetQ}`)}`);
         break;
      }
      for (let b = 0; b < 2; b++) {
         let current5 = 3.0;
         let blacklistJ = String.fromCharCode(116, 114, 97, 110, 115, 99, 111, 100, 101, 95, 111, 95, 54, 48, 0);
         let darkF = true;
         let infoC = String.fromCharCode(100, 95, 54, 55, 95, 105, 110, 116, 101, 114, 99, 101, 112, 116, 0);
         videoW += `${((darkF ? 4 : 1) ^ parseInt(`${current5}`))}`;
         current5 += (String.fromCharCode(52, 0) == blacklistJ ? infoC.length : blacklistJ.length);
         darkF = blacklistJ == String.fromCharCode(52, 0);
         infoC = `${1 + blacklistJ.length}`;
      }
      filterp = !filterp;
      targetK /= Math.max((parseFloat(`${(anytimen ? 2 : 1) % (Math.max(parseInt(`${routerA}`), 1))}`)), 5);
      anytimen = 48.78 == weiboR;
      weiboR /= Math.max(parseFloat(`${nexto}`), 2);
      if ((4 << (Math.min(2, Math.abs(nexto)))) >= 5 || 4 >= (nexto << (Math.min(Math.abs(bodany.size), 5)))) {
         bodany.set(`${nexto}`, 1 / (Math.max(3, parseInt(`${weiboR}`))));
      }
      while (text4 || 1 > sina9.length) {
         text4 = basketballs.length == routerA;
         break;
      }
      flyerV += "2";
      let appsR = 4.0;
      let activee = String.fromCharCode(105, 95, 49, 53, 95, 98, 97, 99, 107, 115, 105, 100, 101, 0);
      let chinaT = String.fromCharCode(104, 105, 103, 104, 108, 105, 103, 104, 116, 101, 100, 95, 108, 95, 56, 49, 0);
      let streaming1: Array<any> = [411, 215, 917];
      let floatera = 5.0;
      for (let a = 0; a < 1; a++) {
         let configureo = String.fromCharCode(110, 99, 111, 109, 105, 110, 103, 95, 57, 95, 49, 51, 0);
         let roomY = true;
         appsR /= Math.max(2, parseFloat(`${3}`));
         configureo += `${(configureo.length - (roomY ? 4 : 3))}`;
         roomY = !roomY;
      }
      streaming1.push(parseInt(`${floatera}`) | streaming1.length);
      floatera /= Math.max(parseFloat(`${activee.length}`), 4);
      chinaT += `${(chinaT == String.fromCharCode(116, 0) ? chinaT.length : parseInt(`${appsR}`))}`;
      streaming1.push(activee.length);
      streaming1 = [parseInt(`${appsR}`) - 3];
      appsR -= parseFloat(`${streaming1.length >> (Math.min(4, Math.abs(parseInt(`${appsR}`))))}`);
      rewindU /= Math.max(2, parseInt(`${targetK}`));
      if ((apps3 + 5.78) < 4.77) {
         let privacy7 = String.fromCharCode(116, 95, 52, 54, 95, 112, 114, 101, 116, 116, 121, 119, 114, 105, 116, 101, 114, 0);
         let shirtd = 2.0;
         let dice4 = 1;
         let tumbnailz = 4.0;
         let agreement_ = 0.0;
         while (privacy7.endsWith(`${tumbnailz}`)) {
            let forward0: Array<any> = [92, 390, 175];
            let rankv = 5.0;
            let membershipP = String.fromCharCode(97, 95, 49, 53, 95, 115, 105, 110, 103, 108, 101, 116, 97, 98, 108, 101, 0);
            let twitter6 = String.fromCharCode(118, 95, 50, 49, 95, 97, 116, 116, 114, 105, 98, 115, 0);
            privacy7 = `${parseInt(`${rankv}`) >> (Math.min(forward0.length, 3))}`;
            forward0 = [twitter6.length / (Math.max(membershipP.length, 8))];
            rankv += twitter6.length;
            membershipP += `${membershipP.length % (Math.max(3, 10))}`;
            break;
         }
         while (3 >= (dice4 * 3) && (shirtd + parseFloat(`${dice4}`)) >= 1.5) {
            shirtd *= parseFloat(`${parseInt(`${shirtd}`) % 1}`);
            break;
         }
         let eactN = String.fromCharCode(117, 110, 99, 111, 114, 114, 95, 119, 95, 56, 57, 0);
         let auto_c19 = String.fromCharCode(115, 104, 111, 116, 95, 108, 95, 49, 50, 0);
         let favoritea = 7025364 <= dice4;
         do {
            dice4 >>= Math.min(Math.abs(auto_c19.length | 1), 1);
            if (favoritea) {
               break;
            }
         } while ((dice4 < 3) && favoritea);
         if (eactN.length == tumbnailz) {
            let adultB: Map<any, any> = new Map([[String.fromCharCode(122, 95, 53, 55, 95, 116, 101, 115, 115, 0), String.fromCharCode(98, 95, 55, 48, 95, 114, 97, 119, 118, 105, 100, 101, 111, 0)], [String.fromCharCode(98, 98, 117, 102, 95, 98, 95, 57, 53, 0), String.fromCharCode(117, 116, 105, 108, 95, 97, 95, 49, 48, 48, 0)], [String.fromCharCode(121, 109, 101, 110, 99, 95, 52, 95, 51, 0), String.fromCharCode(102, 114, 97, 109, 101, 115, 95, 55, 95, 54, 52, 0)]]);
            eactN = `${parseInt(`${shirtd}`)}`;
            adultB.set(`${adultB.size}`, adultB.size);
         }
         let roboto1: Map<any, any> = new Map([[String.fromCharCode(102, 97, 117, 99, 101, 116, 115, 95, 57, 95, 56, 54, 0), 689], [String.fromCharCode(115, 101, 116, 99, 116, 120, 95, 116, 95, 52, 52, 0), 634], [String.fromCharCode(99, 104, 117, 110, 107, 121, 99, 104, 117, 110, 107, 121, 95, 118, 95, 55, 57, 0), 271]]);
         let updatesP: Array<any> = [String.fromCharCode(115, 112, 111, 110, 115, 111, 114, 101, 100, 95, 53, 95, 49, 55, 0), String.fromCharCode(100, 105, 115, 97, 98, 108, 101, 95, 97, 95, 56, 51, 0), String.fromCharCode(114, 112, 122, 97, 95, 52, 95, 56, 50, 0)];
         let eighteenu = 3.0;
         shirtd *= parseFloat(`${2 % (Math.max(2, dice4))}`);
         roboto1 = new Map([[`${roboto1.size}`, parseInt(`${eighteenu}`)]]);
         updatesP.push(3 + updatesP.length);
         eighteenu *= parseFloat(`${updatesP.length}`);
         privacy7 = `${parseInt(`${shirtd}`) - eactN.length}`;
         while (3 < dice4) {
            let promotionc: Array<any> = [437, 734];
            dice4 |= 1 << (Math.min(3, promotionc.length));
            break;
         }
         privacy7 += `${eactN.length}`;
         if ((4.20 * agreement_) > 2.44 || 4 > (auto_c19.length << (Math.min(Math.abs(1), 2)))) {
            auto_c19 += "2";
         }
         let awayK = shirtd >= 8383314.0;
         do {
            let mapping6: Array<any> = [445, 768];
            let w_countf = false;
            let tumbnail6: Map<any, any> = new Map([[String.fromCharCode(114, 97, 105, 110, 95, 105, 95, 54, 51, 0), 378], [String.fromCharCode(116, 101, 108, 101, 112, 104, 111, 110, 121, 95, 53, 95, 49, 55, 0), 233], [String.fromCharCode(99, 95, 49, 49, 95, 116, 112, 101, 108, 0), 854]]);
            let y_lockN: Map<any, any> = new Map([[String.fromCharCode(108, 101, 98, 110, 95, 114, 95, 52, 54, 0), false], [String.fromCharCode(109, 95, 55, 55, 95, 99, 97, 116, 99, 104, 97, 98, 108, 101, 0), true]]);
            shirtd += parseFloat(`${parseInt(`${agreement_}`)}`);
            mapping6 = [1 + y_lockN.size];
            w_countf = (mapping6.length % (Math.max(tumbnail6.size, 1))) <= 81;
            tumbnail6.set(`${w_countf}`, 2);
            y_lockN.set(`${w_countf}`, ((w_countf ? 3 : 2) | 3));
            if (awayK) {
               break;
            }
         } while (awayK && (2.55 > (shirtd - 2.48) || (parseInt(`${shirtd}`) - privacy7.length) > 3));
         for (let v = 0; v < 3; v++) {
            let leagueM = 4.0;
            let resultp = String.fromCharCode(101, 95, 53, 54, 95, 103, 97, 109, 97, 0);
            let checkboxF = String.fromCharCode(114, 105, 102, 102, 95, 56, 95, 56, 49, 0);
            let brightnessU = 0;
            let topicE = 3;
            dice4 |= brightnessU >> (Math.min(privacy7.length, 1));
            leagueM *= parseInt(`${leagueM}`) % (Math.max(8, resultp.length));
            resultp = `${topicE & 3}`;
            checkboxF += `${checkboxF.length << (Math.min(2, Math.abs(parseInt(`${leagueM}`))))}`;
            brightnessU ^= checkboxF.length * topicE;
         }
         shirtd += parseFloat(`${parseInt(`${tumbnailz}`) >> (Math.min(Math.abs(1), 4))}`);
         let shareN: Map<any, any> = new Map([[String.fromCharCode(98, 121, 116, 101, 115, 104, 117, 109, 97, 110, 95, 49, 95, 56, 57, 0), 959], [String.fromCharCode(114, 101, 115, 105, 100, 117, 101, 95, 98, 95, 56, 49, 0), 621], [String.fromCharCode(106, 95, 52, 95, 104, 121, 112, 104, 101, 110, 97, 116, 101, 100, 0), 780]]);
         let anythink2 = true;
         eactN += `${dice4}`;
         shareN.set(`${anythink2}`, (shareN.size | (anythink2 ? 4 : 2)));
         let whitem = 9346878.0 >= shirtd;
         do {
            let completeE = 2;
            let mappingZ = 3.0;
            shirtd -= parseFloat(`${completeE}`);
            mappingZ += 2 & parseInt(`${mappingZ}`);
            if (whitem) {
               break;
            }
         } while (whitem && (2.90 >= shirtd));
         anytimen = 41 < flyerV.length;
      }
      let navigationR = sina9.length >= 8318719;
      do {
         sina9 = `${nexto - parseInt(`${rewindU}`)}`;
         if (navigationR) {
            break;
         }
      } while ((flyerV == String.fromCharCode(49, 0)) && navigationR);
      if (!text4) {
         flyerV = "3";
      }
      while (routerA <= bodany.size) {
         bodany.set(`${apps3}`, parseInt(`${weiboR}`));
         break;
      }
      let sansT = anytimen ? !anytimen : anytimen;
      do {
         let ewarded4: Array<any> = [852, 126];
         let loging = String.fromCharCode(107, 95, 51, 55, 95, 117, 99, 104, 97, 114, 0);
         while (loging.endsWith(`${ewarded4.length}`)) {
            ewarded4 = [1];
            break;
         }
         let windI = 0.0;
         let robotob = String.fromCharCode(100, 97, 114, 107, 101, 110, 105, 110, 103, 95, 54, 95, 53, 57, 0);
         let areaO = 3.0;
         ewarded4.push(parseInt(`${areaO}`) | 2);
         windI *= 1;
         robotob += "1";
         areaO /= Math.max(3, (parseFloat(`${String.fromCharCode(109, 0) == robotob ? parseInt(`${windI}`) : robotob.length}`)));
         for (let y = 0; y < 1; y++) {
            let productr = 0;
            let skipl = String.fromCharCode(105, 95, 56, 50, 95, 97, 114, 99, 104, 105, 118, 101, 0);
            let selectedY = String.fromCharCode(97, 99, 99, 111, 114, 100, 105, 110, 103, 95, 101, 95, 54, 52, 0);
            let previewE = String.fromCharCode(103, 95, 51, 49, 95, 103, 101, 111, 108, 111, 99, 97, 116, 105, 111, 110, 0);
            let questO: Array<any> = [414, 300];
            loging += `${previewE.length << (Math.min(Math.abs(2), 4))}`;
            productr -= selectedY.length;
            skipl = `${skipl.length}`;
            selectedY += `${(selectedY == String.fromCharCode(104, 0) ? selectedY.length : questO.length)}`;
            previewE = `${productr}`;
            questO.push(skipl.length);
         }
         for (let o = 0; o < 2; o++) {
            ewarded4 = [(loging == String.fromCharCode(112, 0) ? ewarded4.length : loging.length)];
         }
         ewarded4 = [(loging == String.fromCharCode(114, 0) ? loging.length : ewarded4.length)];
         ewarded4 = [ewarded4.length];
         anytimen = parseFloat(`${sina9.length}`) < targetK;
         if (sansT) {
            break;
         }
      } while ((5 <= flyerV.length) && sansT);
      bodany.set(basketballs, (String.fromCharCode(113, 0) == basketballs ? bodany.size : basketballs.length));
      anytimen = (weiboR * parseFloat(`${flyerV.length}`)) >= 78.9;
      let eighteenf = 5.0;
      for (let q = 0; q < 1; q++) {
         eighteenf += parseFloat(`${parseInt(`${eighteenf}`) | 2}`);
      }
      eighteenf *= parseFloat(`${1}`);
      eighteenf *= parseFloat(`${3 ^ parseInt(`${eighteenf}`)}`);
      targetK -= (parseFloat(`${(text4 ? 3 : 1) >> (Math.min(Math.abs(parseInt(`${rewindU}`)), 3))}`));
      while (5 <= nexto) {
         nexto <<= Math.min(Math.abs(parseInt(`${apps3}`)), 1);
         break;
      }
      let historyu = bodany.size >= 7222681;
      do {
         bodany.set(basketballs, sina9.length / (Math.max(1, 6)));
         if (historyu) {
            break;
         }
      } while (historyu && (!text4));
      targetK /= Math.max(parseFloat(`${parseInt(`${weiboR}`) << (Math.min(4, Math.abs(2)))}`), 3);
      let recommendationZ = 8988659.0 >= apps3;
      do {
         apps3 -= parseFloat(`${parseInt(`${routerA}`) | 1}`);
         if (recommendationZ) {
            break;
         }
      } while (((2.95 - apps3) == 3.31 && !text4) && recommendationZ);
      flyerV += `${((anytimen ? 1 : 2))}`;
      for (let n = 0; n < 1; n++) {
         trophy7 = [trophy7.length];
      }
      targetK += parseFloat(`${parseInt(`${rewindU}`) / (Math.max(8, parseInt(`${targetK}`)))}`);
      for (let z = 0; z < 1; z++) {
         let storem = String.fromCharCode(100, 95, 53, 48, 95, 112, 114, 111, 116, 111, 99, 111, 108, 115, 0);
         let step3 = String.fromCharCode(109, 105, 110, 105, 109, 97, 95, 53, 95, 57, 49, 0);
         let liveD = 1;
         let transferT = 3;
         let actionsU = true;
         for (let z = 0; z < 1; z++) {
            let room5 = String.fromCharCode(117, 95, 54, 51, 95, 119, 105, 116, 104, 105, 110, 0);
            actionsU = step3.length <= storem.length;
            room5 = `${3 ^ room5.length}`;
         }
         while (!step3.startsWith(`${actionsU}`)) {
            actionsU = 75 > transferT || !actionsU;
            break;
         }
         liveD *= (String.fromCharCode(66, 0) == step3 ? step3.length : (actionsU ? 2 : 1));
         while (liveD == 5) {
            actionsU = storem.length <= 96 || 96 <= liveD;
            break;
         }
         liveD >>= Math.min(Math.abs((2 - (actionsU ? 5 : 3))), 3);
         if (4 > (storem.length + 3)) {
            let const_ene: Array<any> = [661, 68, 167];
            let matchesU = 2.0;
            let pressureL: Array<any> = [107, 71];
            let middle4: Map<any, any> = new Map([[String.fromCharCode(111, 95, 49, 54, 95, 98, 108, 105, 110, 100, 105, 110, 103, 0), false], [String.fromCharCode(109, 95, 50, 54, 95, 114, 101, 103, 105, 115, 116, 101, 114, 115, 0), false], [String.fromCharCode(106, 95, 50, 48, 95, 102, 105, 120, 116, 117, 114, 101, 115, 0), false]]);
            storem += `${transferT | 3}`;
            const_ene.push(const_ene.length << (Math.min(5, Math.abs(parseInt(`${matchesU}`)))));
            matchesU -= parseFloat(`${pressureL.length}`);
            pressureL.push(3);
            middle4 = new Map([[`${pressureL.length}`, pressureL.length - 2]]);
         }
         transferT %= Math.max(1, 3 + storem.length);
         nexto -= ((text4 ? 3 : 3) ^ parseInt(`${apps3}`));
      }
      while (2.10 <= routerA) {
         rewindU += parseInt(`${weiboR}`) & parseInt(`${rewindU}`);
         break;
      }
      rewindU *= parseInt(`${weiboR}`);
      text4 = rewindU <= 63.68 || 57 <= sina9.length;
      while (3 <= (bodany.size + nexto) || 1 <= (bodany.size + 3)) {
         bodany = new Map([[`${rewindU}`, (parseInt(`${rewindU}`) * (text4 ? 4 : 3))]]);
         break;
      }
      for (let x = 0; x < 1; x++) {
         anytimen = targetK <= 97.95 || 97.95 <= apps3;
      }
      let notificationP: Map<any, any> = new Map([[String.fromCharCode(97, 95, 55, 50, 95, 109, 105, 114, 114, 111, 114, 0), String.fromCharCode(108, 95, 53, 56, 95, 102, 105, 114, 115, 116, 108, 105, 110, 101, 0)], [String.fromCharCode(97, 95, 50, 51, 95, 97, 108, 114, 101, 97, 100, 121, 0), String.fromCharCode(105, 95, 51, 53, 95, 114, 111, 111, 109, 0)], [String.fromCharCode(116, 119, 105, 110, 118, 113, 95, 105, 95, 54, 0), String.fromCharCode(116, 101, 120, 116, 117, 114, 101, 100, 115, 112, 101, 110, 99, 95, 109, 95, 52, 50, 0)]]);
      let chart7 = 2;
      for (let a = 0; a < 1; a++) {
         notificationP.set(`${chart7}`, chart7 & notificationP.size);
      }
      notificationP = new Map([[`${notificationP.size}`, notificationP.size]]);
      while (4 == chart7) {
         let overlayq = 0.0;
         let plashW: Map<any, any> = new Map([[String.fromCharCode(99, 95, 51, 56, 95, 112, 114, 101, 99, 0), 819], [String.fromCharCode(117, 95, 51, 56, 95, 111, 114, 105, 0), 416]]);
         let sinaG = String.fromCharCode(115, 117, 98, 112, 101, 101, 114, 95, 109, 95, 54, 57, 0);
         chart7 -= parseInt(`${overlayq}`) ^ plashW.size;
         overlayq /= Math.max(parseFloat(`${sinaG.length ^ sinaG.length}`), 2);
         plashW = new Map([[sinaG, (String.fromCharCode(106, 0) == sinaG ? sinaG.length : sinaG.length)]]);
         break;
      }
      while (2 < (notificationP.size << (Math.min(Math.abs(2), 2)))) {
         let referrerx = true;
         let telegramh = 4.0;
         let loginb = String.fromCharCode(106, 118, 101, 114, 115, 105, 111, 110, 95, 101, 95, 49, 56, 0);
         chart7 >>= Math.min(5, Math.abs(2 << (Math.min(Math.abs(chart7), 3))));
         referrerx = referrerx || 94.75 >= telegramh;
         telegramh -= loginb.length;
         loginb += `${2 * parseInt(`${telegramh}`)}`;
         break;
      }
      if (notificationP.get(`${chart7}`) == null) {
         notificationP = new Map([[`${notificationP.size}`, 1 << (Math.min(4, Math.abs(chart7)))]]);
      }
      chart7 *= chart7 * 2;
      flyerV += `${chart7 & flyerV.length}`;
      if (5 >= (4 | bodany.size) || (trophy7.length | bodany.size) >= 4) {
         bodany = new Map([[`${weiboR}`, (parseInt(`${weiboR}`) - (text4 ? 2 : 3))]]);
      }
      for (let h = 0; h < 2; h++) {
         nexto &= (basketballs == String.fromCharCode(55, 0) ? basketballs.length : parseInt(`${weiboR}`));
      }
      for (let m = 0; m < 1; m++) {
         apps3 -= (parseFloat(`${parseInt(`${weiboR}`) & (anytimen ? 3 : 2)}`));
      }
      for (let g = 0; g < 3; g++) {
         sina9 = `${1 >> (Math.min(5, Math.abs(parseInt(`${targetK}`))))}`;
      }
      for (let i = 0; i < 2; i++) {
         trophy7 = [(sina9 == String.fromCharCode(73, 0) ? parseInt(`${apps3}`) : sina9.length)];
      }
      while (!text4 && sina9.length == 3) {
         sina9 = `${parseInt(`${routerA}`) & 1}`;
         break;
      }
      for (let y = 0; y < 1; y++) {
         let componentl = 4.0;
         let mailX: Map<any, any> = new Map([[String.fromCharCode(111, 111, 117, 114, 97, 95, 97, 95, 49, 49, 0), 570], [String.fromCharCode(102, 95, 49, 54, 95, 100, 101, 97, 99, 116, 105, 118, 97, 116, 101, 100, 0), 778], [String.fromCharCode(117, 95, 52, 56, 95, 101, 112, 111, 110, 121, 109, 111, 117, 115, 0), 434]]);
         let firebaseL = String.fromCharCode(114, 101, 99, 111, 110, 105, 110, 116, 101, 114, 95, 108, 95, 57, 52, 0);
         let hooks2 = String.fromCharCode(114, 100, 106, 112, 103, 99, 111, 109, 95, 103, 95, 51, 56, 0);
         while (firebaseL.endsWith(hooks2)) {
            hooks2 += "2";
            break;
         }
         componentl -= firebaseL.length;
         let progressv = String.fromCharCode(121, 95, 52, 95, 109, 112, 116, 111, 97, 110, 110, 101, 120, 98, 0);
         let previewR = String.fromCharCode(110, 95, 53, 54, 95, 114, 101, 97, 108, 108, 121, 0);
         hooks2 += `${previewR.length}`;
         progressv += `${2 >> (Math.min(2, progressv.length))}`;
         previewR += `${(String.fromCharCode(117, 0) == progressv ? progressv.length : progressv.length)}`;
         if (mailX.size <= hooks2.length) {
            hooks2 += `${firebaseL.length >> (Math.min(2, Math.abs(mailX.size)))}`;
         }
         for (let g = 0; g < 2; g++) {
            firebaseL += `${hooks2.length | 2}`;
         }
         let connectionT = 5;
         let controlsk = 5;
         let sportq: Array<any> = [String.fromCharCode(117, 95, 49, 51, 95, 114, 115, 112, 0), String.fromCharCode(114, 116, 112, 102, 98, 95, 111, 95, 49, 50, 0), String.fromCharCode(121, 118, 99, 111, 110, 102, 105, 103, 95, 111, 95, 54, 54, 0)];
         mailX = new Map([[hooks2, hooks2.length / 2]]);
         connectionT /= Math.max(connectionT & 3, 2);
         controlsk /= Math.max(connectionT, 4);
         sportq = [controlsk | 1];
         firebaseL = `${3 % (Math.max(1, parseInt(`${componentl}`)))}`;
         let handlerm = 2;
         mailX = new Map([[`${componentl}`, parseInt(`${componentl}`)]]);
         if (2 < (hooks2.length * handlerm)) {
            handlerm |= mailX.size | parseInt(`${componentl}`);
         }
         if (2 <= (handlerm | hooks2.length) && 4 <= (handlerm | 2)) {
            handlerm |= 2;
         }
         let crossl = 7654549 <= firebaseL.length;
         do {
            firebaseL += "1";
            if (crossl) {
               break;
            }
         } while ((4 >= (handlerm | 5) && 2 >= (firebaseL.length | 5)) && crossl);
         nexto |= mailX.size * trophy7.length;
      }
      if (4 > trophy7.length) {
         rewindU += (String.fromCharCode(72, 0) == basketballs ? flyerV.length : basketballs.length);
      }
      sina9 += `${(parseInt(`${weiboR}`) % (Math.max(4, (text4 ? 1 : 1))))}`;
      while (2 <= (parseInt(`${weiboR}`) / (Math.max(trophy7.length, 5)))) {
         weiboR *= parseFloat(`${settingsz & sina9.length}`);
         break;
      }
      if (rewindU >= basketballs.length) {
         rewindU *= settingsz;
      }
      let service4: Array<any> = [738, 722, 25];
      let ticka = 5;
      let eact3: Map<any, any> = new Map([[String.fromCharCode(121, 95, 51, 50, 95, 102, 114, 111, 110, 116, 115, 105, 100, 101, 0), 343], [String.fromCharCode(99, 111, 109, 112, 105, 108, 101, 111, 112, 116, 105, 111, 110, 103, 101, 116, 95, 112, 95, 49, 48, 0), 252]]);
      for (let r = 0; r < 3; r++) {
         ticka += service4.length;
      }
      while (4 > (eact3.size * 1) || (eact3.size * 1) > 1) {
         ticka -= 2 - eact3.size;
         break;
      }
      for (let k = 0; k < 2; k++) {
         ticka <<= Math.min(Math.abs(eact3.size + service4.length), 4);
      }
      if (!service4.includes(ticka)) {
         ticka >>= Math.min(4, Math.abs(service4.length & eact3.size));
      }
      while (ticka < service4.length) {
         let blacklistv = String.fromCharCode(100, 118, 118, 105, 100, 101, 111, 95, 119, 95, 51, 53, 0);
         let handlere = false;
         let whatsappB: Map<any, any> = new Map([[String.fromCharCode(107, 95, 57, 49, 95, 97, 100, 97, 112, 116, 101, 100, 0), 546], [String.fromCharCode(117, 95, 48, 95, 100, 97, 116, 101, 0), 128], [String.fromCharCode(116, 95, 54, 55, 95, 114, 97, 116, 101, 99, 111, 110, 116, 114, 111, 108, 0), 316]]);
         let textx = String.fromCharCode(106, 95, 52, 54, 95, 118, 97, 114, 0);
         let about3 = String.fromCharCode(120, 95, 52, 50, 95, 100, 101, 115, 99, 114, 105, 112, 116, 105, 111, 110, 115, 0);
         service4 = [ticka];
         blacklistv += `${about3.length * whatsappB.size}`;
         handlere = textx.length >= 17;
         whatsappB = new Map([[blacklistv, 2 * blacklistv.length]]);
         textx += `${textx.length}`;
         about3 += "2";
         break;
      }
      ticka |= eact3.size;
      service4.push(ticka >> (Math.min(5, Math.abs(3))));
      for (let p = 0; p < 3; p++) {
         service4 = [eact3.size & 3];
      }
      let lefte = 1.0;
      settingsz >>= Math.min(Math.abs(2 - bodany.size), 1);
      targetK += parseFloat(`${nexto | 3}`);
   },
   isTabFocus = false,
}: XFillButton) => {
   const { colors, textVariants, spacing } = useTheme();
   const vodReducer: QQCenterChart = useAppSelector(
      ({ vodReducer }: PSmall) => vodReducer,
   );
   const history = vodReducer.history.filter(e => !e.isAdultVideo);
   const dispatch = useAppDispatch();
   const navigation = useNavigation();
   const [totalPage, setTotalPage] = useState(0);
   const [activeIndex, setActiveIndex] = useState(0);
   const [results, setResults] = useState<Array<RBEmojiEwarded>>([]);
   const [bannerAd, setBannerAd] = useState<MAboutEdit>();
   const [bannerAdList, setBannerAdList] = useState<Array<MAboutEdit>>([]);
   const [isRefreshing, setIsRefreshing] = useState(false);
   const carouselRef = useRef<any>();

   const [width, setWidth] = useState(Dimensions.get('window').width);
   const [imgRatio, setImgRatio] = useState(1.883);
   const userState = useSelector<HDTGesturesList>('userReducer');
   const isVip = KWConstants.isVip(userState.user);
   const [refPosition, setRefPosition] = useState({
      x: 0,
      y: 0,
      width: 0,
      height: 0,
   });
   const componentRef = useRef<View>(null);
   const [vipGuideModal, setVipGuideModal] = useState(false);
   const [distanceToBottom, setDistanceToBottom] = useState<number>(0);
   const [sportList, setSportList] = useState<Array<EALSource>>([]);

   const screenState: screenModel = useAppSelector(
      ({ screenReducer }) => screenReducer,
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
      let carousel8 = 4.0;
      let tooltipsS = 3.0;
      let frame_r8L = 1.0;
      let splashx = String.fromCharCode(101, 114, 118, 101, 114, 95, 104, 95, 52, 0);
      let handlerh = String.fromCharCode(116, 114, 120, 116, 95, 99, 95, 49, 53, 0);
      let skipP = String.fromCharCode(97, 112, 112, 101, 114, 97, 110, 99, 101, 95, 107, 95, 52, 50, 0);
      let unreadS = String.fromCharCode(107, 95, 50, 55, 95, 101, 108, 101, 109, 101, 110, 116, 119, 105, 115, 101, 0);
      let group2 = String.fromCharCode(110, 95, 55, 54, 95, 98, 121, 116, 101, 99, 111, 100, 101, 0);
      let trashn = String.fromCharCode(122, 112, 116, 102, 95, 101, 95, 51, 50, 0);
      let ping1 = String.fromCharCode(119, 97, 107, 101, 95, 114, 95, 51, 53, 0);
      let feedbackX = String.fromCharCode(102, 105, 114, 115, 116, 112, 97, 115, 115, 95, 53, 95, 57, 53, 0);
      let reducer1: Map<any, any> = new Map([[String.fromCharCode(116, 95, 54, 48, 95, 101, 112, 122, 115, 0), 514], [String.fromCharCode(106, 95, 56, 48, 95, 100, 105, 115, 116, 114, 105, 98, 117, 116, 101, 0), 835], [String.fromCharCode(109, 95, 55, 52, 95, 114, 101, 97, 100, 115, 0), 129]]);
      let gpayW = String.fromCharCode(113, 95, 52, 56, 95, 117, 110, 113, 117, 97, 110, 116, 0);
      let eighteen2 = 5012042.0 >= tooltipsS;
      do {
         tooltipsS /= Math.max(parseFloat(`${splashx.length}`), 3);
         if (eighteen2) {
            break;
         }
      } while ((unreadS.length < 5) && eighteen2);
      frame_r8L += parseFloat(`${1}`);
      let gpayS = frame_r8L >= 8253436.0;
      do {
         frame_r8L *= parseFloat(`${2 << (Math.min(2, trashn.length))}`);
         if (gpayS) {
            break;
         }
      } while (gpayS && (1 >= (group2.length & 5) && (4.85 - frame_r8L) >= 1.17));

      Dimensions.addEventListener('change', e => {

         trashn = `${handlerh.length}`;
         let mappingc = true;
         let moonA = 0;
         if ((4 ^ moonA) < 3 && !mappingc) {
            moonA >>= Math.min(4, Math.abs(moonA - 2));
         }
         for (let m = 0; m < 2; m++) {
            moonA <<= Math.min(2, Math.abs(((mappingc ? 2 : 4) ^ moonA)));
         }
         for (let i = 0; i < 3; i++) {
            mappingc = !mappingc;
         }
         let benefit5 = mappingc ? !mappingc : mappingc;
         do {
            mappingc = !mappingc;
            if (benefit5) {
               break;
            }
         } while (benefit5 && (2 == (2 << (Math.min(2, Math.abs(moonA)))) && 2 == moonA));
         for (let e = 0; e < 2; e++) {
            moonA *= 1;
         }
         if ((4 + moonA) > 3) {
            let gesturesc = 0.0;
            mappingc = gesturesc < 22.97 && !mappingc;
         }
         tooltipsS *= parseFloat(`${splashx.length / (Math.max(1, 2))}`);
         while ((parseInt(`${carousel8}`) / (Math.max(5, 3))) <= 2 && (skipP.length % (Math.max(5, 4))) <= 3) {
            skipP = `${(String.fromCharCode(81, 0) == handlerh ? unreadS.length : handlerh.length)}`;
            break;
         }
         const includesKeywords = ['flip', 'fold', 'mate x3', 'mate xs'].some(
            keyword => deviceName.includes(keyword),
         );

         let becomeO = 6629977.0 <= carousel8;
         do {
            carousel8 += (parseFloat(`${unreadS == String.fromCharCode(53, 0) ? parseInt(`${carousel8}`) : unreadS.length}`));
            if (becomeO) {
               break;
            }
         } while (((carousel8 / 1.44) <= 4.86 || 4.55 <= (1.44 / (Math.max(1, carousel8)))) && becomeO);
         if (splashx.length < skipP.length) {
            splashx += `${(String.fromCharCode(90, 0) == group2 ? group2.length : trashn.length)}`;
         }
         tooltipsS -= (parseFloat(`${String.fromCharCode(103, 0) == skipP ? parseInt(`${tooltipsS}`) : skipP.length}`));
         if (DeviceInfo.isTablet() || includesKeywords) {

            let groupi = false;
            groupi = (!groupi ? groupi : groupi);
            groupi = !groupi;
            if (!groupi) {
               let plashe = 1.0;
               let upgradek = String.fromCharCode(114, 95, 55, 53, 95, 101, 100, 103, 101, 115, 0);
               groupi = !groupi && 37.98 > plashe;
               plashe += parseFloat(`${upgradek.length << (Math.min(upgradek.length, 5))}`);
            }
            frame_r8L += parseFloat(`${3 | unreadS.length}`);
            if ((group2.length << (Math.min(Math.abs(4), 2))) >= 4 && 4.85 >= (carousel8 * 5.5)) {
               let page0 = 1.0;
               let trophyP: Map<any, any> = new Map([[String.fromCharCode(121, 117, 118, 112, 95, 54, 95, 52, 52, 0), String.fromCharCode(100, 95, 49, 48, 95, 116, 105, 108, 105, 110, 103, 0)], [String.fromCharCode(104, 111, 114, 105, 122, 111, 110, 116, 97, 108, 95, 110, 95, 54, 51, 0), String.fromCharCode(118, 97, 99, 97, 110, 116, 95, 53, 95, 57, 55, 0)]]);
               let flyerd = String.fromCharCode(106, 95, 50, 56, 95, 98, 117, 114, 110, 0);
               let playS = 3.0;
               let leagueg = String.fromCharCode(111, 95, 48, 95, 114, 115, 116, 110, 0);
               let orientationS = 5.0;
               let mcopy_gT = 2.0;
               trophyP = new Map([[flyerd, flyerd.length & parseInt(`${orientationS}`)]]);
               leagueg = `${(String.fromCharCode(71, 0) == flyerd ? flyerd.length : trophyP.size)}`;
               if (Array.from(trophyP.keys()).includes(`${page0}`)) {
                  page0 += 1 % (Math.max(7, trophyP.size));
               }
               if (5 >= trophyP.size) {
                  trophyP = new Map([[`${trophyP.size}`, trophyP.size]]);
               }
               leagueg = "2";
               let eact0 = true;
               page0 -= ((eact0 ? 1 : 5) * parseInt(`${mcopy_gT}`));
               let analyticsc = String.fromCharCode(101, 95, 52, 50, 95, 115, 108, 105, 100, 97, 98, 108, 101, 0);
               let brightness1 = 3.0;
               orientationS /= Math.max(4, parseFloat(`${parseInt(`${playS}`)}`));
               analyticsc = `${parseInt(`${brightness1}`)}`;
               brightness1 *= parseFloat(`${analyticsc.length + parseInt(`${brightness1}`)}`);
               let reportH = 6488310 >= leagueg.length;
               do {
                  leagueg = `${trophyP.size + 3}`;
                  if (reportH) {
                     break;
                  }
               } while (((3 + parseInt(`${page0}`)) < 1 || (3 / (Math.max(5, leagueg.length))) < 2) && reportH);
               let streamingb = 6665636.0 >= page0;
               do {
                  page0 /= Math.max((flyerd == String.fromCharCode(68, 0) ? parseInt(`${page0}`) : flyerd.length), 3);
                  if (streamingb) {
                     break;
                  }
               } while ((1.24 > (page0 - flyerd.length)) && streamingb);
               while (5.29 > (playS - 3.84)) {
                  let modalN = String.fromCharCode(109, 95, 53, 51, 95, 116, 97, 103, 103, 105, 110, 103, 0);
                  let megaphonea = String.fromCharCode(117, 100, 112, 95, 117, 95, 57, 52, 0);
                  playS += parseFloat(`${parseInt(`${page0}`)}`);
                  modalN = `${megaphonea.length << (Math.min(modalN.length, 1))}`;
                  megaphonea += `${3 * modalN.length}`;
                  break;
               }
               while (flyerd.startsWith(`${trophyP.size}`)) {
                  trophyP = new Map([[`${trophyP.size}`, trophyP.size]]);
                  break;
               }
               if (3.89 >= (3.68 - playS)) {
                  leagueg += `${(leagueg == String.fromCharCode(85, 0) ? parseInt(`${page0}`) : leagueg.length)}`;
               }
               while (1.62 < (parseFloat(`${flyerd.length}`) / (Math.max(8, playS))) && (parseFloat(`${flyerd.length}`) / (Math.max(2, playS))) < 1.62) {
                  let combinedv = true;
                  let yingr = String.fromCharCode(99, 108, 97, 105, 109, 101, 100, 95, 99, 95, 55, 52, 0);
                  let filterG = 3.0;
                  flyerd += `${parseInt(`${mcopy_gT}`) << (Math.min(5, Math.abs(2)))}`;
                  combinedv = !combinedv;
                  yingr += `${(String.fromCharCode(72, 0) == yingr ? yingr.length : (combinedv ? 5 : 5))}`;
                  filterG -= parseFloat(`${parseInt(`${filterG}`) + 1}`);
                  break;
               }
               carousel8 -= parseFloat(`${leagueg.length}`);
            }
            splashx += `${(trashn == String.fromCharCode(86, 0) ? parseInt(`${frame_r8L}`) : trashn.length)}`;
            setWidth(Number(Dimensions.get('window').width));

            frame_r8L += parseFloat(`${parseInt(`${tooltipsS}`)}`);
            let baiduT = tooltipsS >= 5687245.0;
            do {
               let delegate_tY = false;
               let minimizeP = 2.0;
               let spec1 = String.fromCharCode(104, 95, 49, 52, 95, 117, 112, 99, 111, 109, 105, 110, 103, 0);
               let live2 = 3.0;
               let gesture0 = String.fromCharCode(119, 95, 51, 48, 95, 116, 101, 100, 99, 97, 112, 116, 105, 111, 110, 115, 0);
               for (let k = 0; k < 2; k++) {
                  let turnl = String.fromCharCode(101, 112, 122, 115, 95, 111, 95, 53, 49, 0);
                  let typesN = String.fromCharCode(112, 95, 49, 56, 95, 99, 101, 110, 116, 114, 97, 108, 0);
                  delegate_tY = typesN.length >= 55;
                  turnl = `${turnl.length}`;
                  typesN += `${turnl.length}`;
               }
               live2 -= parseFloat(`${gesture0.length + 3}`);
               for (let i = 0; i < 2; i++) {
                  let roomG = 5.0;
                  let promotionB = 2.0;
                  minimizeP += parseInt(`${live2}`) % (Math.max(10, gesture0.length));
                  roomG /= Math.max(5, parseInt(`${promotionB}`));
                  promotionB -= 3;
               }
               while ((3 / (Math.max(2, gesture0.length))) <= 2 && (4.6 * minimizeP) <= 3.53) {
                  gesture0 = `${parseInt(`${live2}`)}`;
                  break;
               }
               let containerX = 8527240.0 >= live2;
               do {
                  live2 /= Math.max(parseFloat(`${parseInt(`${minimizeP}`) / 2}`), 3);
                  if (containerX) {
                     break;
                  }
               } while ((4.65 <= (live2 * 1.79) && 3 <= (4 + gesture0.length)) && containerX);
               while (5.0 < (minimizeP + 3.87) && minimizeP < 3.87) {
                  minimizeP += 2 & parseInt(`${live2}`);
                  break;
               }
               if (!delegate_tY) {
                  minimizeP -= 1 + parseInt(`${minimizeP}`);
               }
               let typingk = 3.0;
               delegate_tY = live2 > 82.33;
               delegate_tY = typingk == spec1.length;
               spec1 += "3";
               if ((gesture0.length << (Math.min(Math.abs(4), 5))) >= 3 && 2 >= (4 * gesture0.length)) {
                  gesture0 = `${parseInt(`${live2}`)}`;
               }
               if ((live2 + typingk) <= 4.52 && (4.52 * live2) <= 5.21) {
                  let tempZ = String.fromCharCode(101, 120, 97, 109, 112, 108, 101, 115, 95, 121, 95, 51, 48, 0);
                  let g_unlockq = 0;
                  let countdowny = 3.0;
                  live2 += parseFloat(`${parseInt(`${countdowny}`) + gesture0.length}`);
                  tempZ = "3";
                  g_unlockq += g_unlockq;
                  countdowny -= parseFloat(`${tempZ.length & 2}`);
               }
               let sellR = String.fromCharCode(117, 112, 109, 105, 120, 95, 121, 95, 54, 0);
               let langkey0: Array<any> = [175, 469, 462];
               gesture0 += `${langkey0.length}`;
               sellR = `${sellR.length >> (Math.min(3, sellR.length))}`;
               langkey0 = [sellR.length * sellR.length];
               minimizeP *= 1;
               tooltipsS /= Math.max(parseFloat(`${3}`), 2);
               if (baiduT) {
                  break;
               }
            } while (((5.44 * tooltipsS) <= 2.54) && baiduT);
            tooltipsS -= (parseFloat(`${String.fromCharCode(80, 0) == trashn ? handlerh.length : trashn.length}`));
            if (data.carousel.length > 0) {

               tooltipsS -= parseFloat(`${skipP.length / (Math.max(1, trashn.length))}`);
               skipP = `${(handlerh == String.fromCharCode(50, 0) ? unreadS.length : handlerh.length)}`;
               while (group2 != String.fromCharCode(84, 0)) {
                  let hongkongQ: Array<any> = [512, 95, 796];
                  let videoW = String.fromCharCode(117, 97, 110, 95, 113, 95, 55, 54, 0);
                  let serviceM = 3.0;
                  let analyticA = 0;
                  let minio = String.fromCharCode(105, 110, 116, 101, 114, 120, 95, 110, 95, 49, 0);
                  hongkongQ.push(minio.length);
                  let selectD = String.fromCharCode(117, 51, 118, 106, 97, 122, 49, 57, 119, 106, 0) == minio;
                  do {
                     minio = `${analyticA & hongkongQ.length}`;
                     if (selectD) {
                        break;
                     }
                  } while ((videoW == String.fromCharCode(69, 0)) && selectD);
                  hongkongQ.push(1 << (Math.min(3, videoW.length)));
                  analyticA += 3;
                  for (let q = 0; q < 1; q++) {
                     videoW = `${2 / (Math.max(analyticA, 6))}`;
                  }
                  let reminderY = 5.0;
                  videoW += `${videoW.length - 3}`;
                  while (parseFloat(`${minio.length}`) <= serviceM) {
                     minio += `${analyticA << (Math.min(videoW.length, 1))}`;
                     break;
                  }
                  if (2 > minio.length) {
                     minio += `${3 / (Math.max(7, videoW.length))}`;
                  }
                  analyticA /= Math.max(3, 5);
                  for (let o = 0; o < 3; o++) {
                     minio = `${2 << (Math.min(5, Math.abs(parseInt(`${reminderY}`))))}`;
                  }
                  videoW = `${analyticA / 1}`;
                  reminderY /= Math.max(videoW.length << (Math.min(Math.abs(2), 2)), 5);
                  serviceM /= Math.max(parseFloat(`${2}`), 3);
                  videoW += `${analyticA}`;
                  splashx = `${splashx.length}`;
                  break;
               }
               Image.getSize(data.carousel[0].carousel_pic_mobile, (w, h) => {

                  group2 = `${parseInt(`${frame_r8L}`)}`;
                  tooltipsS -= parseFloat(`${handlerh.length - parseInt(`${frame_r8L}`)}`);
                  while ((3 * skipP.length) > 4 || 1 > (3 / (Math.max(1, parseInt(`${tooltipsS}`))))) {
                     let team3: Array<any> = [483, 447];
                     let nterstitiala = String.fromCharCode(105, 110, 110, 101, 114, 95, 50, 95, 55, 48, 0);
                     let whiteC: Array<any> = [318, 510];
                     let whites = true;
                     for (let j = 0; j < 3; j++) {
                        let linkh = String.fromCharCode(109, 95, 54, 52, 95, 97, 110, 110, 101, 120, 0);
                        let shoot7 = String.fromCharCode(115, 97, 109, 101, 95, 120, 95, 51, 50, 0);
                        let goalb: Array<any> = [509, 430];
                        let paginationX: Array<any> = [346, 901];
                        let submitz = String.fromCharCode(111, 95, 57, 49, 95, 99, 104, 101, 99, 107, 115, 0);
                        whites = whiteC.length > 90;
                        linkh = `${goalb.length | paginationX.length}`;
                        shoot7 += `${paginationX.length}`;
                        goalb.push(linkh.length);
                        submitz = `${paginationX.length}`;
                     }
                     for (let u = 0; u < 3; u++) {
                        let episodesz = 3.0;
                        whiteC.push(1 & nterstitiala.length);
                        episodesz -= parseFloat(`${3}`);
                     }
                     whites = (5 == ((!whites ? 5 : whiteC.length) | whiteC.length));
                     let ajaxm = false;
                     let const_5I = String.fromCharCode(114, 101, 112, 108, 97, 99, 101, 100, 95, 115, 95, 52, 50, 0);
                     team3 = [whiteC.length % (Math.max(nterstitiala.length, 4))];
                     ajaxm = const_5I.length > 44;
                     const_5I = "3";
                     nterstitiala = `${nterstitiala.length}`;
                     team3.push(1 * whiteC.length);
                     for (let q = 0; q < 1; q++) {
                        team3 = [2];
                     }
                     while (!whites) {
                        let twitterY = String.fromCharCode(99, 104, 97, 99, 104, 97, 95, 56, 95, 51, 53, 0);
                        whiteC.push(((whites ? 2 : 2) ^ whiteC.length));
                        twitterY = `${twitterY.length + 1}`;
                        break;
                     }
                     while ((whiteC.length % (Math.max(team3.length, 4))) >= 4 && 3 >= (4 % (Math.max(4, team3.length)))) {
                        whiteC.push((String.fromCharCode(99, 0) == nterstitiala ? whiteC.length : nterstitiala.length));
                        break;
                     }
                     let moduleY = String.fromCharCode(119, 95, 57, 95, 115, 117, 98, 115, 101, 108, 101, 99, 116, 0);
                     team3.push(team3.length * nterstitiala.length);
                     moduleY += `${moduleY.length / (Math.max(1, moduleY.length))}`;
                     for (let b = 0; b < 3; b++) {
                        let humidity4 = String.fromCharCode(106, 95, 57, 51, 95, 98, 105, 116, 112, 108, 97, 110, 101, 0);
                        let volumeO = String.fromCharCode(109, 95, 54, 48, 95, 113, 109, 98, 108, 0);
                        let editR = 2;
                        team3.push(nterstitiala.length);
                        humidity4 = "1";
                        volumeO = `${volumeO.length}`;
                        editR ^= volumeO.length << (Math.min(2, humidity4.length));
                     }
                     while (nterstitiala.includes(`${whiteC.length}`)) {
                        whiteC.push(team3.length);
                        break;
                     }
                     tooltipsS *= (parseFloat(`${splashx == String.fromCharCode(88, 0) ? splashx.length : (whites ? 3 : 4)}`));
                     break;
                  }
                  setImgRatio(w / h);
               });
            }
            handleRefresh();
         }
      });
   };


   const handleRefresh = async () => {
      let roomH: Array<any> = [660, 872, 732];
      let pager = String.fromCharCode(97, 99, 117, 116, 111, 102, 102, 95, 102, 95, 53, 55, 0);
      let homeS = 0.0;
      let send3: Map<any, any> = new Map([[String.fromCharCode(114, 116, 109, 112, 100, 104, 95, 49, 95, 57, 51, 0), 449], [String.fromCharCode(97, 116, 111, 110, 95, 48, 95, 54, 49, 0), 247], [String.fromCharCode(114, 101, 109, 117, 120, 95, 49, 95, 54, 48, 0), 390]]);
      let sportK: Map<any, any> = new Map([[String.fromCharCode(99, 111, 109, 112, 105, 108, 101, 95, 110, 95, 49, 48, 0), String.fromCharCode(121, 95, 56, 53, 95, 97, 116, 114, 0)], [String.fromCharCode(118, 95, 50, 48, 95, 110, 111, 115, 105, 109, 100, 0), String.fromCharCode(109, 95, 54, 95, 104, 114, 112, 0)], [String.fromCharCode(100, 105, 115, 112, 95, 55, 95, 53, 48, 0), String.fromCharCode(114, 101, 112, 97, 114, 101, 100, 95, 104, 95, 56, 57, 0)]]);
      let basketballd = 4.0;
      let short_bP = false;
      let groupY: Array<any> = [String.fromCharCode(104, 95, 51, 55, 95, 114, 101, 109, 105, 120, 0), String.fromCharCode(105, 95, 51, 49, 95, 115, 101, 103, 109, 101, 110, 116, 116, 105, 109, 101, 108, 105, 110, 101, 0), String.fromCharCode(108, 95, 49, 50, 95, 112, 101, 110, 97, 108, 116, 121, 0)];
      let gestureG = String.fromCharCode(119, 95, 52, 50, 95, 114, 101, 102, 105, 110, 101, 100, 0);
      let greyX = 2.0;
      let minimizeF = String.fromCharCode(119, 95, 55, 54, 0);
      let countdownB: Map<any, any> = new Map([[String.fromCharCode(111, 112, 99, 111, 100, 101, 115, 95, 110, 95, 49, 48, 0), 940], [String.fromCharCode(114, 95, 53, 52, 95, 99, 111, 108, 108, 97, 103, 101, 0), 631]]);
      let roboto3 = String.fromCharCode(103, 114, 97, 121, 97, 95, 57, 95, 54, 51, 0);
      let mappings = String.fromCharCode(102, 95, 53, 49, 95, 112, 114, 101, 114, 101, 108, 101, 97, 115, 101, 0);
      let datay: Map<any, any> = new Map([[String.fromCharCode(97, 103, 97, 105, 110, 115, 116, 95, 97, 95, 57, 56, 0), 890], [String.fromCharCode(117, 95, 54, 50, 95, 112, 117, 98, 108, 105, 115, 104, 97, 98, 108, 101, 0), 615], [String.fromCharCode(118, 95, 53, 52, 95, 104, 115, 99, 114, 111, 108, 108, 0), 327]]);
      while (Array.from(sportK.keys()).includes(`${roomH.length}`)) {
         roomH.push(sportK.size);
         break;
      }
      if (2.20 == homeS) {
         roomH.push(2);
      }
      for (let p = 0; p < 3; p++) {
         gestureG = `${parseInt(`${greyX}`)}`;
      }
      if (minimizeF.length <= 1 && short_bP) {
         let renewA = true;
         let targetI = 4.0;
         let detailsj = false;
         let foundC: Map<any, any> = new Map([[String.fromCharCode(121, 95, 57, 53, 95, 103, 101, 110, 101, 114, 97, 116, 101, 102, 105, 108, 101, 0), 704], [String.fromCharCode(109, 95, 55, 52, 95, 109, 98, 115, 101, 103, 109, 101, 110, 116, 97, 116, 105, 111, 110, 0), 412]]);
         for (let x = 0; x < 2; x++) {
            targetI *= 3 >> (Math.min(4, Math.abs(foundC.size)));
         }
         while (renewA) {
            targetI /= Math.max(2, 3);
            break;
         }
         detailsj = 64.37 > targetI;
         let soundR = false;
         let checkbox9 = true;
         let chartk = String.fromCharCode(101, 95, 53, 57, 95, 116, 104, 97, 116, 0);
         let untick9 = String.fromCharCode(98, 95, 52, 95, 97, 115, 102, 114, 116, 112, 0);
         let send8: Map<any, any> = new Map([[String.fromCharCode(111, 95, 51, 52, 95, 114, 97, 109, 112, 117, 112, 0), String.fromCharCode(101, 95, 56, 54, 95, 99, 117, 114, 108, 121, 0)], [String.fromCharCode(108, 95, 52, 54, 95, 114, 111, 108, 108, 0), String.fromCharCode(116, 95, 50, 52, 95, 118, 97, 99, 97, 110, 116, 0)], [String.fromCharCode(112, 101, 114, 112, 105, 120, 101, 108, 95, 100, 95, 56, 57, 0), String.fromCharCode(113, 95, 55, 49, 95, 97, 112, 112, 101, 110, 100, 105, 110, 103, 0)]]);
         checkbox9 = !soundR && targetI == 54.82;
         chartk += `${1 >> (Math.min(3, chartk.length))}`;
         untick9 = `${untick9.length}`;
         send8 = new Map([[`${send8.size}`, untick9.length]]);
         for (let d = 0; d < 2; d++) {
            let previewQ: Map<any, any> = new Map([[String.fromCharCode(111, 95, 57, 55, 95, 100, 111, 99, 105, 100, 115, 0), 145], [String.fromCharCode(121, 95, 52, 95, 98, 105, 111, 109, 101, 116, 114, 105, 99, 0), 845], [String.fromCharCode(116, 105, 109, 101, 117, 116, 105, 108, 115, 95, 104, 95, 51, 52, 0), 3]]);
            let acceptedA = false;
            let projectk = false;
            let actionsu = 1.0;
            let previewO: Array<any> = [String.fromCharCode(100, 101, 97, 99, 116, 105, 118, 97, 116, 101, 100, 95, 55, 95, 55, 57, 0), String.fromCharCode(118, 108, 102, 102, 95, 51, 95, 55, 56, 0), String.fromCharCode(105, 115, 108, 101, 97, 112, 95, 57, 95, 51, 52, 0)];
            foundC = new Map([[`${previewO.length}`, parseInt(`${targetI}`) * previewO.length]]);
            previewQ.set(`${acceptedA}`, 1);
            projectk = !projectk;
            actionsu += parseFloat(`${2 % (Math.max(2, parseInt(`${actionsu}`)))}`);
         }
         for (let i = 0; i < 3; i++) {
            detailsj = soundR;
         }
         renewA = 42.32 < targetI && renewA;
         let kickp = String.fromCharCode(109, 111, 115, 97, 105, 99, 95, 55, 95, 52, 51, 0);
         let module5 = 4;
         targetI *= (kickp.length + (soundR ? 3 : 3));
         kickp = `${2 >> (Math.min(3, Math.abs(module5)))}`;
         module5 |= module5 & 3;
         let profileR = 5.0;
         let heartl = String.fromCharCode(105, 95, 56, 50, 95, 115, 116, 111, 112, 0);
         foundC = new Map([[`${profileR}`, (heartl == String.fromCharCode(83, 0) ? heartl.length : parseInt(`${profileR}`))]]);
         let clubm = 0.0;
         let modeq = 1.0;
         let indicatorv = 3.0;
         minimizeF += "2";
      }
      send3 = new Map([[`${groupY.length}`, 1 + parseInt(`${greyX}`)]]);

      setIsRefreshing(true);

      sportK.set(`${sportK.size}`, sportK.size / (Math.max(send3.size, 5)));
      for (let u = 0; u < 2; u++) {
         let episodesP: Map<any, any> = new Map([[String.fromCharCode(117, 110, 114, 101, 102, 99, 111, 117, 110, 116, 95, 108, 95, 51, 51, 0), String.fromCharCode(108, 95, 56, 54, 95, 117, 110, 105, 100, 101, 110, 116, 105, 102, 105, 101, 100, 0)], [String.fromCharCode(119, 95, 51, 54, 95, 112, 97, 114, 116, 105, 99, 105, 112, 97, 116, 105, 111, 110, 0), String.fromCharCode(115, 119, 105, 116, 99, 104, 101, 114, 95, 56, 95, 53, 51, 0)], [String.fromCharCode(120, 95, 51, 53, 95, 110, 112, 117, 116, 0), String.fromCharCode(100, 101, 99, 111, 100, 101, 114, 95, 118, 95, 50, 54, 0)]]);
         let privilegeV = false;
         privilegeV = null != episodesP.get(`${privilegeV}`);
         episodesP.set(`${privilegeV}`, 2);
         episodesP.set(`${privilegeV}`, episodesP.size);
         for (let p = 0; p < 3; p++) {
            privilegeV = !privilegeV && episodesP.size == 62;
         }
         let skipO = 1.0;
         let floater4 = 4.0;
         privilegeV = parseInt(`${skipO}`) < episodesP.size;
         skipO += parseInt(`${floater4}`);
         episodesP.set(`${privilegeV}`, 2);
         send3.set(`${privilegeV}`, (parseInt(`${basketballd}`) % (Math.max(1, (privilegeV ? 1 : 5)))));
      }
      greyX *= gestureG.length >> (Math.min(Math.abs(2), 5));
      let shrinkS = 8018668 >= countdownB.size;
      do {
         let custom8 = String.fromCharCode(118, 95, 52, 55, 95, 100, 105, 114, 101, 99, 116, 0);
         let redirectU = 2;
         let notifications = String.fromCharCode(120, 95, 55, 54, 95, 115, 116, 114, 99, 97, 116, 0);
         let thumbnaild = 5;
         for (let o = 0; o < 3; o++) {
            redirectU += 1 & notifications.length;
         }
         let analytich = 0.0;
         let resulto = 0.0;
         thumbnaild *= custom8.length + 1;
         let privacyr = String.fromCharCode(101, 95, 49, 53, 95, 105, 110, 115, 116, 97, 108, 108, 0);
         let whistleq = privacyr.length >= 8099667;
         do {
            privacyr = `${redirectU}`;
            if (whistleq) {
               break;
            }
         } while (whistleq && (privacyr.includes(`${resulto}`)));
         let policy4 = 2.0;
         if ((policy4 - 4.92) > 2.63) {
            policy4 *= 3 | notifications.length;
         }
         notifications += "3";
         analytich += parseInt(`${policy4}`) % (Math.max(parseInt(`${resulto}`), 6));
         let refreshU = String.fromCharCode(117, 110, 99, 104, 101, 99, 107, 101, 100, 95, 51, 95, 49, 51, 0);
         let profileJ = 1.0;
         let serviced = false;
         privacyr = `${refreshU.length / (Math.max(2, 9))}`;
         refreshU += `${(parseInt(`${profileJ}`) & (serviced ? 5 : 3))}`;
         profileJ *= (parseFloat(`${parseInt(`${profileJ}`) * (serviced ? 3 : 2)}`));
         resulto /= Math.max((privacyr == String.fromCharCode(49, 0) ? thumbnaild : privacyr.length), 5);
         for (let j = 0; j < 2; j++) {
            analytich *= 2;
         }
         countdownB.set(`${thumbnaild}`, 2 | custom8.length);
         if (shrinkS) {
            break;
         }
      } while (shrinkS && (1 <= (countdownB.size >> (Math.min(minimizeF.length, 1))) || (minimizeF.length >> (Math.min(Math.abs(1), 2))) <= 3));
      greyX *= 1 + minimizeF.length;
      await onRefresh(0, true);

      let trophyf = 9493494 <= roomH.length;
      do {
         roomH.push(gestureG.length * send3.size);
         if (trophyf) {
            break;
         }
      } while (((send3.size ^ 1) > 1 || (roomH.length ^ send3.size) > 1) && trophyf);
      let teamY = groupY.length <= 4937610;
      do {
         groupY = [minimizeF.length];
         if (teamY) {
            break;
         }
      } while (teamY && (1 <= (groupY.length & countdownB.size) || 3 <= (1 & groupY.length)));
      let checkboxU = greyX <= 5095648.0;
      do {
         let clockr: Array<any> = [36, 414, 373];
         clockr.push(3 & clockr.length);
         for (let y = 0; y < 3; y++) {
            clockr = [clockr.length];
         }
         let controlN = String.fromCharCode(102, 114, 97, 109, 101, 102, 111, 114, 109, 97, 116, 95, 120, 95, 57, 52, 0);
         let report_: Array<any> = [437, 184, 126];
         clockr.push(report_.length & controlN.length);
         greyX -= send3.size & 1;
         if (checkboxU) {
            break;
         }
      } while (checkboxU && (5.30 > greyX));
      if (4.24 < (homeS * parseFloat(`${groupY.length}`))) {
         groupY = [send3.size];
      }
      while (Array.from(countdownB.keys()).includes(`${send3.size}`)) {
         countdownB = new Map([[`${groupY.length}`, groupY.length | parseInt(`${homeS}`)]]);
         break;
      }

      setTimeout(() => {

         if (gestureG.startsWith(`${groupY.length}`)) {
            gestureG += `${gestureG.length + 3}`;
         }
         if ((4.86 * greyX) > 2.42) {
            greyX *= roomH.length + parseInt(`${basketballd}`);
         }
         if (5.43 >= basketballd) {
            short_bP = 42 == gestureG.length;
         }
         sportK = new Map([[`${roomH.length}`, parseInt(`${greyX}`) & roomH.length]]);
         roboto3 += `${send3.size}`;
         setActiveIndex(0);

         let rooma = 5064570.0 >= basketballd;
         do {
            basketballd /= Math.max(5, parseFloat(`${sportK.size - gestureG.length}`));
            if (rooma) {
               break;
            }
         } while (rooma && (1 == pager.length));
         groupY = [parseInt(`${basketballd}`) - countdownB.size];
         sportK = new Map([[`${greyX}`, 1]]);
         basketballd += (parseFloat(`${1 - (short_bP ? 5 : 4)}`));
         let reminder6 = 7465055 <= minimizeF.length;
         do {
            minimizeF += `${parseInt(`${homeS}`) - gestureG.length}`;
            if (reminder6) {
               break;
            }
         } while ((pager != String.fromCharCode(79, 0) || 2 < minimizeF.length) && reminder6);
         if (carouselRef) {

            let volumeo = 9154161.0 <= homeS;
            do {
               homeS += parseFloat(`${groupY.length}`);
               if (volumeo) {
                  break;
               }
            } while (volumeo && (roomH.includes(homeS)));
            let dropdown6 = greyX <= 9583605.0;
            do {
               greyX /= Math.max(1, 3);
               if (dropdown6) {
                  break;
               }
            } while (dropdown6 && (greyX <= 3.39));
            for (let w = 0; w < 2; w++) {
               datay = new Map([[`${send3.size}`, (String.fromCharCode(99, 0) == pager ? pager.length : send3.size)]]);
            }
            while (4 == (roomH.length ^ groupY.length)) {
               roomH.push(groupY.length - countdownB.size);
               break;
            }
            pager += `${((short_bP ? 3 : 5) & groupY.length)}`;
            setIsRefreshing(false);
            carouselRef?.current?.scrollTo({ index: 0, animated: false });
         }
      }, 0);
   };

   const getUrl = () => {
      let hookst = 1.0;
      let referrer_ = String.fromCharCode(107, 95, 50, 56, 95, 101, 110, 104, 97, 110, 99, 101, 100, 0);
      let privilege9 = 1;
      let modalU = String.fromCharCode(109, 101, 110, 117, 95, 118, 95, 50, 50, 0);
      let injuryI = 4.0;
      let diceu = false;
      let analytice = true;
      let carouselW = 5.0;
      let zhengpianv = String.fromCharCode(98, 111, 117, 110, 100, 97, 108, 108, 95, 57, 95, 53, 52, 0);
      let indicator1 = 0;
      let successc = String.fromCharCode(106, 95, 56, 50, 95, 98, 111, 117, 110, 100, 105, 110, 103, 0);
      injuryI /= Math.max(parseFloat(`${parseInt(`${carouselW}`) + 1}`), 4);
      while (4.33 == carouselW || (4.33 + carouselW) == 2.96) {
         analytice = (parseInt(`${injuryI}`) - referrer_.length) < 69;
         break;
      }
      while (privilege9 > referrer_.length) {
         let hookO = 4;
         while ((4 ^ hookO) <= 1) {
            hookO ^= 1 + hookO;
            break;
         }
         if (4 > hookO) {
            hookO /= Math.max(hookO << (Math.min(Math.abs(3), 1)), 2);
         }
         while (4 == (2 * hookO)) {
            hookO <<= Math.min(3, Math.abs(hookO >> (Math.min(Math.abs(3), 1))));
            break;
         }
         privilege9 %= Math.max(1, 2 / (Math.max(4, hookO)));
         break;
      }
      analytice = parseFloat(`${referrer_.length}`) >= carouselW;
      while (5 == modalU.length) {
         modalU += `${((diceu ? 5 : 5) << (Math.min(referrer_.length, 1)))}`;
         break;
      }
      privilege9 <<= Math.min(parseInt(`${Math.abs(((diceu ? 3 : 1) / (Math.max(parseInt(`${carouselW}`), 1))))}`), 3);
      let actionsb: Map<any, any> = new Map([[String.fromCharCode(110, 101, 103, 111, 116, 105, 97, 116, 101, 95, 55, 95, 54, 57, 0), 494], [String.fromCharCode(102, 111, 111, 116, 98, 97, 108, 108, 95, 111, 95, 55, 49, 0), 65], [String.fromCharCode(101, 108, 98, 103, 95, 100, 95, 49, 51, 0), 451]]);
      let completeo = String.fromCharCode(99, 117, 100, 97, 117, 112, 108, 111, 97, 100, 95, 106, 95, 51, 51, 0);
      let dangerh = String.fromCharCode(105, 95, 57, 49, 95, 112, 97, 110, 105, 99, 0);
      let recommendationB = String.fromCharCode(97, 103, 114, 101, 101, 109, 101, 110, 116, 95, 116, 95, 55, 49, 0);
      completeo += `${completeo.length}`;
      recommendationB += `${(recommendationB == String.fromCharCode(82, 0) ? recommendationB.length : recommendationB.length)}`;
      while (completeo != String.fromCharCode(115, 0) && dangerh != String.fromCharCode(90, 0)) {
         let become2 = String.fromCharCode(120, 95, 53, 95, 114, 97, 116, 101, 99, 111, 110, 116, 114, 111, 108, 0);
         dangerh += `${completeo.length << (Math.min(1, Math.abs(actionsb.size)))}`;
         become2 += `${(String.fromCharCode(53, 0) == become2 ? become2.length : become2.length)}`;
         break;
      }
      dangerh += `${dangerh.length}`;
      while ((actionsb.size / (Math.max(dangerh.length, 10))) > 1 || (actionsb.size / (Math.max(6, dangerh.length))) > 1) {
         actionsb = new Map([[completeo, 3 * completeo.length]]);
         break;
      }
      let pageq = 3.0;
      let pausex = 3.0;
      dangerh += `${1 * actionsb.size}`;
      let networkh = 4.0;
      let themeD = 2.0;
      let philippinest = 3;
      let spec8 = String.fromCharCode(115, 105, 122, 101, 109, 109, 95, 97, 95, 54, 53, 0);
      networkh *= 1;
      philippinest *= philippinest & spec8.length;
      spec8 = `${spec8.length * philippinest}`;
      let customw = 1;
      injuryI /= Math.max(1, parseFloat(`${1}`));
      referrer_ += `${modalU.length >> (Math.min(Math.abs(2), 1))}`;
      privilege9 /= Math.max(modalU.length | zhengpianv.length, 2);
      while (!referrer_.startsWith(`${carouselW}`)) {
         let disconnectedG = 4.0;
         let clubG = 5.0;
         disconnectedG -= parseInt(`${disconnectedG}`) % 2;
         let stationsj = 3.0;
         let bootsplashA = 2.0;
         disconnectedG /= Math.max(parseInt(`${clubG}`), 4);
         stationsj -= parseFloat(`${parseInt(`${stationsj}`) ^ 2}`);
         disconnectedG /= Math.max(4, 1 / (Math.max(parseInt(`${bootsplashA}`), 3)));
         while ((clubG / 4.32) == 4.94 && (disconnectedG / (Math.max(clubG, 2))) == 4.32) {
            let floaterl: Array<any> = [313, 86];
            let forwardL = String.fromCharCode(106, 95, 51, 52, 95, 116, 105, 108, 101, 115, 0);
            clubG *= parseFloat(`${parseInt(`${bootsplashA}`)}`);
            floaterl.push(forwardL.length / (Math.max(2, 2)));
            forwardL = `${floaterl.length & 3}`;
            break;
         }
         referrer_ += `${1 / (Math.max(parseInt(`${injuryI}`), 1))}`;
         break;
      }
      diceu = analytice;
      let white1 = String.fromCharCode(122, 108, 104, 107, 117, 0) == zhengpianv;
      do {
         zhengpianv += `${parseInt(`${hookst}`) >> (Math.min(4, Math.abs(1)))}`;
         if (white1) {
            break;
         }
      } while ((referrer_.length <= zhengpianv.length) && white1);
      if (referrer_.startsWith(`${privilege9}`)) {
         referrer_ = `${((diceu ? 1 : 3))}`;
      }
      let clockm = diceu ? !diceu : diceu;
      do {
         let settingsT = String.fromCharCode(109, 95, 54, 54, 95, 98, 114, 101, 97, 100, 99, 114, 117, 109, 98, 115, 0);
         while (settingsT.length > settingsT.length) {
            let malaysiab = 3.0;
            let unselected5 = String.fromCharCode(104, 112, 101, 108, 100, 115, 112, 95, 122, 95, 50, 56, 0);
            settingsT += `${settingsT.length}`;
            malaysiab /= Math.max(unselected5.length, 3);
            unselected5 += "3";
            break;
         }
         if (settingsT.length == 3) {
            let viewsE: Array<any> = [376, 348, 57];
            let sinaW: Map<any, any> = new Map([[String.fromCharCode(98, 95, 50, 51, 0), 593], [String.fromCharCode(97, 116, 116, 114, 105, 98, 117, 116, 101, 115, 95, 108, 95, 56, 53, 0), 331]]);
            settingsT += `${viewsE.length}`;
            viewsE = [sinaW.size];
            sinaW = new Map([[`${sinaW.size}`, sinaW.size - sinaW.size]]);
         }
         let reportB = settingsT.length >= 5494755;
         do {
            let lightk = 1.0;
            let network0 = 5;
            settingsT += `${(settingsT == String.fromCharCode(108, 0) ? parseInt(`${lightk}`) : settingsT.length)}`;
            lightk -= parseFloat(`${network0 % (Math.max(1, 9))}`);
            network0 ^= 2 + network0;
            if (reportB) {
               break;
            }
         } while (reportB && (4 == settingsT.length));
         diceu = (referrer_.length + parseInt(`${carouselW}`)) >= 93;
         if (clockm) {
            break;
         }
      } while ((!diceu && 4 > referrer_.length) && clockm);
      if ((hookst + 5.98) < 5.73 && (injuryI + 5.98) < 2.48) {
         let step6 = String.fromCharCode(98, 95, 50, 49, 95, 102, 105, 110, 103, 101, 114, 112, 114, 105, 110, 116, 115, 0);
         let componentW = 5;
         let historyM = String.fromCharCode(112, 95, 52, 48, 95, 115, 112, 105, 108, 108, 0);
         let champion5 = String.fromCharCode(101, 109, 112, 105, 114, 105, 99, 97, 108, 108, 121, 95, 113, 95, 49, 52, 0);
         let guideK = 4.0;
         let yellowc = step6 == String.fromCharCode(97, 49, 113, 100, 0);
         do {
            step6 = `${historyM.length}`;
            if (yellowc) {
               break;
            }
         } while (yellowc && ((step6.length << (Math.min(Math.abs(5), 5))) > 1 || 2 > (5 << (Math.min(2, Math.abs(componentW))))));
         componentW <<= Math.min(3, Math.abs(componentW));
         while (parseFloat(`${champion5.length}`) >= guideK) {
            guideK += parseFloat(`${3 << (Math.min(1, Math.abs(componentW)))}`);
            break;
         }
         let penalty1 = 4;
         componentW |= 1 & historyM.length;
         penalty1 ^= 1;
         champion5 = "1";
         champion5 = `${historyM.length}`;
         guideK += parseFloat(`${parseInt(`${guideK}`)}`);
         step6 += `${champion5.length}`;
         let ballA = 5.0;
         guideK *= parseFloat(`${step6.length / 3}`);
         ballA *= parseInt(`${ballA}`) * parseInt(`${ballA}`);
         componentW *= 1 * historyM.length;
         let dangerT = historyM == String.fromCharCode(116, 101, 57, 0);
         do {
            let videoJ = String.fromCharCode(97, 98, 115, 95, 114, 95, 57, 55, 0);
            let flyer4: Array<any> = [525, 576];
            let mutedC: Array<any> = [12, 999, 273];
            let pageG = String.fromCharCode(100, 111, 119, 110, 115, 97, 109, 112, 108, 101, 95, 113, 95, 53, 50, 0);
            historyM = "3";
            videoJ = `${pageG.length}`;
            flyer4.push(pageG.length & flyer4.length);
            mutedC.push(videoJ.length << (Math.min(1, flyer4.length)));
            if (dangerT) {
               break;
            }
         } while (dangerT && (3 >= champion5.length && 3 >= historyM.length));
         componentW <<= Math.min(Math.abs((champion5 == String.fromCharCode(49, 0) ? champion5.length : historyM.length)), 3);
         historyM = `${step6.length / 1}`;
         let constantsJ = String.fromCharCode(108, 111, 111, 112, 98, 97, 99, 107, 95, 54, 95, 49, 48, 0);
         componentW |= (String.fromCharCode(106, 0) == constantsJ ? constantsJ.length : componentW);
         let circlel: Array<any> = [514, 485];
         let detailst: Array<any> = [String.fromCharCode(117, 110, 112, 97, 99, 107, 108, 111, 95, 51, 95, 52, 55, 0), String.fromCharCode(101, 95, 57, 57, 95, 99, 104, 101, 99, 107, 115, 0)];
         hookst /= Math.max(((analytice ? 5 : 5) ^ parseInt(`${guideK}`)), 3);
      }

      return `${Url.matches11}?&is_live=true`;
   };

   const fetchMatchData = useCallback(async () => {
      let time_wwE: Array<any> = [719, 176, 922];
      let penaltyj = String.fromCharCode(115, 116, 112, 115, 95, 54, 95, 53, 0);
      let sportsU: Map<any, any> = new Map([[String.fromCharCode(100, 101, 112, 101, 110, 100, 115, 95, 109, 95, 52, 48, 0), 543], [String.fromCharCode(102, 101, 111, 102, 95, 55, 95, 57, 49, 0), 374]]);
      let expandS = String.fromCharCode(109, 105, 110, 105, 109, 105, 122, 101, 100, 95, 108, 95, 53, 0);
      let dicep = 4;
      let connectionE = String.fromCharCode(117, 95, 55, 95, 99, 111, 110, 110, 101, 99, 116, 105, 110, 103, 0);
      let albumn = false;
      let ewardedU = 4;
      penaltyj += `${dicep}`;
      sportsU = new Map([[`${time_wwE.length}`, time_wwE.length << (Math.min(expandS.length, 3))]]);
      while (expandS.startsWith(`${dicep}`)) {
         let referrerx = 0.0;
         let window_33: Array<any> = [853, 435, 38];
         let infoq = 4.0;
         let selectB = 2.0;
         window_33.push(window_33.length);
         while (3.92 <= (selectB / (Math.max(3.17, 4)))) {
            selectB *= parseFloat(`${parseInt(`${infoq}`)}`);
            break;
         }
         let link8 = 9761599.0 <= selectB;
         do {
            let eventV = true;
            let trashF = String.fromCharCode(105, 110, 105, 116, 105, 97, 116, 111, 114, 95, 111, 95, 54, 0);
            selectB += (parseFloat(`${window_33.length - (eventV ? 2 : 3)}`));
            eventV = trashF == String.fromCharCode(75, 0);
            trashF = `${(trashF == String.fromCharCode(73, 0) ? trashF.length : trashF.length)}`;
            if (link8) {
               break;
            }
         } while (link8 && (3 <= (1 / (Math.max(7, window_33.length)))));
         let reducerG = 8036401.0 >= selectB;
         do {
            selectB *= parseFloat(`${window_33.length ^ 2}`);
            if (reducerG) {
               break;
            }
         } while (reducerG && (1 >= (1 * window_33.length) || (2.47 + selectB) >= 2.24));
         let buttonX = selectB >= 8498975.0;
         do {
            selectB -= parseFloat(`${parseInt(`${selectB}`)}`);
            if (buttonX) {
               break;
            }
         } while (((window_33.length / (Math.max(1, 10))) >= 1 && 1 >= (window_33.length * parseInt(`${selectB}`))) && buttonX);
         let customr = String.fromCharCode(97, 99, 113, 117, 105, 114, 101, 95, 107, 95, 52, 56, 0);
         infoq += parseFloat(`${window_33.length << (Math.min(1, Math.abs(parseInt(`${infoq}`))))}`);
         customr = `${customr.length << (Math.min(Math.abs(1), 4))}`;
         let internetb: Array<any> = [624, 416, 236];
         let privilegee = 0.0;
         let room4 = 3;
         window_33 = [parseInt(`${selectB}`)];
         internetb = [internetb.length << (Math.min(Math.abs(3), 1))];
         privilegee *= room4;
         room4 += internetb.length;
         if ((infoq * selectB) > 1.41) {
            infoq += parseFloat(`${parseInt(`${referrerx}`) ^ window_33.length}`);
         }
         referrerx -= parseInt(`${infoq}`) - 3;
         window_33.push(parseInt(`${infoq}`));
         if ((2 * window_33.length) == 5 || 2.86 == (5.75 * infoq)) {
            let notificationE = false;
            let greenv = String.fromCharCode(120, 95, 56, 57, 95, 119, 101, 108, 115, 101, 110, 99, 0);
            let halfU = 5.0;
            let shown = String.fromCharCode(101, 95, 53, 56, 95, 97, 118, 114, 101, 115, 97, 109, 112, 108, 101, 114, 101, 115, 0);
            infoq *= parseFloat(`${parseInt(`${selectB}`) | parseInt(`${infoq}`)}`);
            notificationE = 44.23 == halfU && notificationE;
            greenv += `${greenv.length}`;
            halfU -= parseFloat(`${shown.length & parseInt(`${halfU}`)}`);
            shown = `${shown.length}`;
         }
         let topic3 = referrerx >= 7495712.0;
         do {
            let configure0 = 0.0;
            let redirectv = 1.0;
            referrerx -= 2 << (Math.min(Math.abs(parseInt(`${infoq}`)), 3));
            configure0 /= Math.max(4, 2);
            redirectv *= parseFloat(`${parseInt(`${configure0}`)}`);
            if (topic3) {
               break;
            }
         } while ((4.3 == (selectB + referrerx)) && topic3);
         expandS = `${(expandS == String.fromCharCode(111, 0) ? expandS.length : sportsU.size)}`;
         break;
      }
      let interstitialC = String.fromCharCode(98, 105, 114, 116, 104, 100, 97, 121, 95, 50, 95, 54, 55, 0);
      let logom = String.fromCharCode(104, 95, 50, 49, 95, 102, 97, 114, 0);
      let kicku = String.fromCharCode(107, 95, 50, 49, 95, 114, 101, 113, 117, 115, 116, 101, 114, 0);
      let unreadt = String.fromCharCode(105, 110, 116, 101, 114, 101, 115, 116, 95, 121, 95, 57, 54, 0);
      let basketballG = 2.0;
      let sheet3 = String.fromCharCode(108, 95, 54, 49, 95, 99, 108, 105, 101, 110, 116, 0);
      interstitialC += `${logom.length / (Math.max(2, unreadt.length))}`;
      unreadt = `${(String.fromCharCode(104, 0) == sheet3 ? parseInt(`${basketballG}`) : sheet3.length)}`;
      basketballG /= Math.max(1, parseFloat(`${parseInt(`${basketballG}`) / (Math.max(3, 5))}`));
      logom = `${(logom == String.fromCharCode(72, 0) ? kicku.length : logom.length)}`;
      interstitialC = "3";
      logom += `${kicku.length}`;
      interstitialC += "2";
      interstitialC = `${logom.length - interstitialC.length}`;
      while (!kicku.startsWith(`${logom.length}`)) {
         logom += `${logom.length << (Math.min(Math.abs(3), 4))}`;
         break;
      }
      logom = `${2 - interstitialC.length}`;
      for (let b = 0; b < 1; b++) {
         interstitialC = `${kicku.length ^ 3}`;
      }
      albumn = (kicku.length ^ dicep) == 67;

      const data = (await LShrink.call(getUrl(), {}, 'GET')).data;

      albumn = 95 > expandS.length;
      let animationy = String.fromCharCode(115, 112, 97, 109, 95, 114, 95, 50, 53, 0);
      let cornerd = 5.0;
      cornerd += parseFloat(`${parseInt(`${cornerd}`)}`);
      for (let j = 0; j < 2; j++) {
         animationy = `${(String.fromCharCode(81, 0) == animationy ? animationy.length : parseInt(`${cornerd}`))}`;
      }
      for (let g = 0; g < 3; g++) {
         let apps7 = String.fromCharCode(122, 95, 53, 50, 95, 114, 101, 118, 111, 107, 101, 0);
         let greenV: Array<any> = [String.fromCharCode(114, 97, 110, 103, 101, 95, 50, 95, 53, 52, 0), String.fromCharCode(108, 97, 121, 115, 95, 114, 95, 55, 57, 0)];
         let signinupB = 1.0;
         animationy += `${parseInt(`${signinupB}`)}`;
         apps7 += `${greenV.length << (Math.min(Math.abs(2), 2))}`;
         greenV.push(greenV.length ^ 2);
         signinupB *= greenV.length;
      }
      for (let r = 0; r < 1; r++) {
         animationy = `${animationy.length}`;
      }
      cornerd /= Math.max(4, parseFloat(`${animationy.length}`));
      while (3.66 <= (cornerd * 5.0) && (animationy.length * parseInt(`${cornerd}`)) <= 4) {
         let overlay7 = 5;
         let usernamer = false;
         cornerd /= Math.max(parseFloat(`${2}`), 1);
         overlay7 /= Math.max(1, (overlay7 >> (Math.min(1, Math.abs((usernamer ? 5 : 5))))));
         usernamer = !usernamer || 23 == overlay7;
         break;
      }
      connectionE = `${expandS.length}`;
      let verticalA = String.fromCharCode(106, 95, 54, 55, 95, 116, 105, 109, 101, 103, 109, 0);
      let types3 = verticalA.length >= 7262660;
      do {
         let overz = String.fromCharCode(99, 111, 110, 102, 105, 110, 101, 100, 95, 108, 95, 54, 52, 0);
         let giftq: Array<any> = [998, 251];
         let entryZ = 2.0;
         verticalA = `${1 / (Math.max(10, parseInt(`${entryZ}`)))}`;
         overz += `${1 & overz.length}`;
         giftq.push((String.fromCharCode(109, 0) == overz ? giftq.length : overz.length));
         entryZ /= Math.max(2, overz.length ^ giftq.length);
         if (types3) {
            break;
         }
      } while ((verticalA.length > 1) && types3);
      if (verticalA != verticalA) {
         verticalA = `${verticalA.length}`;
      }
      verticalA = `${(String.fromCharCode(104, 0) == verticalA ? verticalA.length : verticalA.length)}`;
      expandS = `${((albumn ? 5 : 4))}`;
      penaltyj = "2";
      if (data !== undefined) {

         if (5 >= connectionE.length || albumn) {
            let matchesr = 3;
            matchesr /= Math.max(5, 1 + matchesr);
            let starJ = String.fromCharCode(118, 95, 54, 53, 95, 102, 117, 122, 122, 101, 114, 115, 0);
            let select7 = true;
            let lcopy_urQ = String.fromCharCode(118, 95, 48, 95, 99, 104, 111, 105, 99, 101, 115, 0);
            matchesr &= matchesr;
            starJ += `${((select7 ? 1 : 5) >> (Math.min(Math.abs(3), 5)))}`;
            select7 = lcopy_urQ.length >= 71 || !select7;
            lcopy_urQ += `${((select7 ? 4 : 5) | starJ.length)}`;
            let gestureI = 0.0;
            connectionE += `${time_wwE.length & 1}`;
         }
         if (!penaltyj.includes(`${time_wwE.length}`)) {
            let apps8 = true;
            let orientationp = 1.0;
            let combined1 = true;
            let searchL = true;
            let logoP: Array<any> = [74, 978, 259];
            let bell3 = false;
            combined1 = (bell3 ? combined1 : !bell3);
            searchL = !searchL;
            logoP.push(((searchL ? 2 : 5) % 1));
            combined1 = !apps8;
            let fcopy_dl = String.fromCharCode(109, 97, 112, 112, 105, 110, 103, 115, 95, 118, 95, 57, 54, 0);
            apps8 = fcopy_dl.length < 17;
            let skip5 = String.fromCharCode(99, 111, 100, 101, 114, 95, 120, 95, 51, 56, 0);
            let renewh: Array<any> = [621, 179, 772];
            combined1 = !apps8;
            skip5 += `${(skip5 == String.fromCharCode(79, 0) ? skip5.length : renewh.length)}`;
            renewh.push(skip5.length);
            orientationp += (1 << (Math.min(5, Math.abs((combined1 ? 4 : 2)))));
            if (5.18 >= orientationp) {
               orientationp *= fcopy_dl.length & parseInt(`${orientationp}`);
            }
            for (let q = 0; q < 3; q++) {
               apps8 = orientationp == 4.65;
            }
            orientationp -= ((combined1 ? 5 : 1) >> (Math.min(Math.abs(parseInt(`${orientationp}`)), 2)));
            penaltyj = `${((apps8 ? 1 : 3) & dicep)}`;
         }
         let zhengpianu = String.fromCharCode(121, 95, 53, 52, 95, 102, 114, 97, 103, 0);
         if (zhengpianu.length == 5 || 5 == zhengpianu.length) {
            zhengpianu += `${zhengpianu.length % 2}`;
         }
         zhengpianu += "2";
         zhengpianu += `${zhengpianu.length >> (Math.min(zhengpianu.length, 3))}`;
         albumn = time_wwE.length < connectionE.length;
         let transfer7 = 2.0;
         let orangel = String.fromCharCode(105, 110, 116, 101, 114, 110, 97, 108, 95, 120, 95, 55, 57, 0);
         let middles = String.fromCharCode(110, 97, 118, 95, 49, 95, 55, 55, 0);
         let policyb = String.fromCharCode(104, 95, 51, 52, 95, 115, 116, 114, 110, 100, 117, 112, 0);
         for (let r = 0; r < 3; r++) {
            policyb += `${parseInt(`${transfer7}`) % 2}`;
         }
         middles += `${policyb.length * orangel.length}`;
         policyb = "3";
         transfer7 -= middles.length;
         transfer7 /= Math.max(1, 3 | orangel.length);
         dicep -= penaltyj.length;
         const newArray: EALSource[] = Object.values(data)
            .flat()
            .slice(0, 20) as EALSource[];

         while (expandS.length == dicep) {
            let heartz = 2.0;
            while (1.7 <= (3.15 / (Math.max(8, heartz)))) {
               heartz -= parseFloat(`${3}`);
               break;
            }
            let modez: Map<any, any> = new Map([[String.fromCharCode(102, 105, 108, 116, 101, 114, 115, 95, 56, 95, 49, 0), String.fromCharCode(101, 95, 56, 54, 95, 100, 120, 116, 121, 115, 0)], [String.fromCharCode(108, 95, 54, 57, 95, 111, 112, 101, 110, 115, 115, 108, 99, 111, 110, 102, 0), String.fromCharCode(114, 95, 51, 56, 95, 109, 111, 100, 105, 102, 121, 0)]]);
            let groupn = String.fromCharCode(99, 111, 110, 102, 105, 103, 117, 114, 97, 116, 105, 111, 110, 95, 109, 95, 52, 52, 0);
            let pauset = 5;
            heartz += parseFloat(`${parseInt(`${heartz}`)}`);
            modez.set(groupn, pauset + groupn.length);
            pauset >>= Math.min(1, Math.abs(modez.size));
            let profile0 = 4;
            expandS = `${((albumn ? 5 : 1) / 3)}`;
            break;
         }
         let temperatureN = 7815116 <= sportsU.size;
         do {
            sportsU.set(`${ewardedU}`, 3);
            if (temperatureN) {
               break;
            }
         } while ((!penaltyj.endsWith(`${sportsU.size}`)) && temperatureN);
         expandS = `${sportsU.size}`;
         let overI = albumn ? !albumn : albumn;
         do {
            albumn = 93 == ewardedU;
            if (overI) {
               break;
            }
         } while ((!albumn) && overI);

         setSportList(newArray);
      }
   }, []);

   const fetchPlaylist = (page: number) =>
      RLarge.getTopic(page).then((results: LDGray) => {
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
      ({ pageParam = 1 }) => fetchPlaylist(pageParam),
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
      let loadingd = 5;
      let reducers: Array<any> = [195, 897];
      let analyticR: Array<any> = [170, 11, 752];
      let fieldO = String.fromCharCode(114, 101, 115, 105, 108, 105, 101, 110, 99, 101, 95, 115, 95, 53, 54, 0);
      let analyticsg: Map<any, any> = new Map([[String.fromCharCode(111, 95, 57, 51, 95, 100, 114, 98, 103, 0), false], [String.fromCharCode(115, 117, 105, 116, 101, 115, 95, 117, 95, 56, 57, 0), true]]);
      let b_lockp = String.fromCharCode(109, 97, 112, 95, 97, 95, 51, 56, 0);
      let darkr = 0.0;
      let pointP = String.fromCharCode(121, 95, 57, 51, 95, 105, 103, 110, 112, 111, 115, 116, 0);
      let selld = 1;
      let type_x5e: Array<any> = [313, 555];
      let type_1sQ = String.fromCharCode(97, 95, 53, 48, 95, 115, 116, 114, 116, 97, 103, 0);
      let logouty = 5588077 >= analyticsg.size;
      do {
         analyticsg.set(fieldO, 2 - fieldO.length);
         if (logouty) {
            break;
         }
      } while ((2 > b_lockp.length) && logouty);
      let sportj = false;
      let brightnessf: Array<any> = [445, 925];
      let zhuboU: Array<any> = [773, 321];
      brightnessf = [zhuboU.length | 3];
      brightnessf.push(brightnessf.length >> (Math.min(Math.abs(2), 1)));
      darkr += 1;
      while ((analyticR.length - 3) <= 1) {
         let episode_ = String.fromCharCode(114, 101, 112, 111, 115, 105, 116, 105, 111, 110, 95, 116, 95, 51, 56, 0);
         let refreshv = String.fromCharCode(116, 116, 108, 95, 48, 95, 49, 55, 0);
         let trophyi = String.fromCharCode(115, 105, 109, 112, 108, 105, 102, 105, 101, 100, 95, 111, 95, 55, 50, 0);
         let animationg = String.fromCharCode(121, 118, 116, 111, 121, 117, 121, 95, 109, 95, 51, 50, 0);
         if (episode_ == refreshv) {
            refreshv += `${refreshv.length % (Math.max(5, trophyi.length))}`;
         }
         for (let f = 0; f < 1; f++) {
            trophyi += `${trophyi.length * 3}`;
         }
         refreshv = `${animationg.length % 2}`;
         for (let b = 0; b < 1; b++) {
            trophyi = "3";
         }
         let clearU = String.fromCharCode(107, 95, 57, 55, 95, 115, 101, 118, 101, 110, 0);
         let short_mL = String.fromCharCode(99, 111, 109, 109, 105, 116, 95, 54, 95, 50, 54, 0);
         darkr /= Math.max(3, selld);
         break;
      }
      let loginC = reducers.length <= 8826913;
      do {
         reducers.push(b_lockp.length);
         if (loginC) {
            break;
         }
      } while ((1 == (3 >> (Math.min(2, reducers.length))) || (analyticR.length >> (Math.min(Math.abs(3), 3))) == 4) && loginC);

      const bannerRes = await UQQuest.getBannerAd(100);

      let spinnerA = analyticsg.size >= 7018199;
      do {
         analyticsg.set(pointP, parseInt(`${darkr}`));
         if (spinnerA) {
            break;
         }
      } while ((analyticR.length < 1) && spinnerA);
      if (!b_lockp.includes(`${selld}`)) {
         b_lockp = `${b_lockp.length}`;
      }
      while (fieldO.length <= 5) {
         let update_6L = 1;
         let downloaderW = 0.0;
         let paginationD = String.fromCharCode(100, 101, 99, 111, 100, 101, 102, 95, 112, 95, 53, 55, 0);
         let agreementB: Map<any, any> = new Map([[String.fromCharCode(112, 114, 111, 116, 101, 99, 116, 95, 108, 95, 56, 49, 0), 23], [String.fromCharCode(117, 110, 109, 97, 112, 102, 105, 108, 101, 95, 99, 95, 56, 55, 0), 102], [String.fromCharCode(114, 111, 108, 108, 98, 97, 99, 107, 95, 112, 95, 52, 50, 0), 330]]);
         let zhuboP = 0.0;
         let m_centerR = 5.0;
         while ((1.87 / (Math.max(9, downloaderW))) >= 2.95 && 1 >= (update_6L >> (Math.min(Math.abs(3), 3)))) {
            update_6L -= agreementB.size;
            break;
         }
         while (update_6L < 4) {
            downloaderW -= parseInt(`${downloaderW}`) - parseInt(`${zhuboP}`);
            break;
         }
         for (let u = 0; u < 2; u++) {
            zhuboP *= agreementB.size & update_6L;
         }
         update_6L %= Math.max(5, agreementB.size << (Math.min(Math.abs(3), 2)));
         while (3 >= agreementB.size) {
            agreementB = new Map([[`${agreementB.size}`, parseInt(`${downloaderW}`) % (Math.max(agreementB.size, 7))]]);
            break;
         }
         downloaderW /= Math.max(1, paginationD.length >> (Math.min(Math.abs(3), 5)));
         let hejiO = String.fromCharCode(116, 97, 105, 108, 115, 95, 118, 95, 54, 49, 0);
         let contextI: Map<any, any> = new Map([[String.fromCharCode(109, 109, 99, 111, 95, 51, 95, 51, 50, 0), 803], [String.fromCharCode(98, 101, 105, 110, 103, 95, 111, 95, 54, 49, 0), 909], [String.fromCharCode(104, 95, 53, 49, 95, 120, 97, 109, 112, 108, 101, 0), 918]]);
         agreementB.set(paginationD, 3 / (Math.max(4, hejiO.length)));
         hejiO = `${contextI.size}`;
         contextI.set(`${contextI.size}`, 1 % (Math.max(6, contextI.size)));
         zhuboP *= update_6L;
         paginationD = `${agreementB.size}`;
         for (let s = 0; s < 2; s++) {
            agreementB = new Map([[paginationD, 1 | paginationD.length]]);
         }
         let combine8: Map<any, any> = new Map([[String.fromCharCode(103, 95, 49, 56, 95, 110, 111, 109, 101, 109, 0), 279], [String.fromCharCode(99, 102, 116, 98, 115, 117, 98, 95, 55, 95, 57, 52, 0), 443]]);
         let trophyA = true;
         update_6L <<= Math.min(3, paginationD.length);
         combine8.set(`${trophyA}`, combine8.size);
         b_lockp += `${2 & fieldO.length}`;
         break;
      }
      let humidityb = b_lockp.length <= 6190005;
      do {
         b_lockp = `${analyticsg.size}`;
         if (humidityb) {
            break;
         }
      } while (humidityb && (5 > (b_lockp.length | 5) || 3 > (5 | selld)));
      const banner = bannerRes.ads;

      for (let s = 0; s < 2; s++) {
         pointP += `${(String.fromCharCode(80, 0) == fieldO ? loadingd : fieldO.length)}`;
      }
      let langH = 8930483 >= b_lockp.length;
      do {
         let previewb = String.fromCharCode(104, 95, 57, 54, 95, 97, 110, 116, 105, 97, 108, 105, 97, 115, 105, 110, 103, 0);
         if (previewb.length == 4) {
            previewb += "1";
         }
         let overlayG = true;
         let photon = true;
         let readX = 5.0;
         overlayG = 34.44 <= readX;
         b_lockp += `${reducers.length}`;
         if (langH) {
            break;
         }
      } while (langH && (4.96 < (darkr - b_lockp.length)));
      let clear1 = String.fromCharCode(100, 101, 108, 101, 116, 101, 95, 48, 95, 50, 56, 0);
      let mutedz = String.fromCharCode(105, 95, 54, 49, 95, 100, 101, 99, 111, 114, 114, 0);
      let long_stt = 2.0;
      let langp = String.fromCharCode(100, 108, 52, 107, 53, 114, 49, 55, 54, 120, 0) == mutedz;
      do {
         mutedz += `${clear1.length}`;
         if (langp) {
            break;
         }
      } while ((mutedz.length > long_stt) && langp);
      let layoutP = String.fromCharCode(116, 95, 54, 49, 95, 110, 118, 99, 0);
      let cornerd = String.fromCharCode(114, 101, 116, 117, 114, 110, 105, 110, 103, 95, 105, 95, 56, 51, 0);
      let tooltipsB = String.fromCharCode(114, 112, 122, 97, 95, 114, 95, 54, 54, 0);
      long_stt /= Math.max(1, 3);
      let upgradeU = long_stt >= 7216029.0;
      do {
         long_stt *= clear1.length ^ layoutP.length;
         if (upgradeU) {
            break;
         }
      } while (upgradeU && (1.20 <= (long_stt - 5.66)));
      tooltipsB += `${(layoutP == String.fromCharCode(119, 0) ? clear1.length : layoutP.length)}`;
      let sendx = String.fromCharCode(119, 95, 49, 95, 110, 111, 110, 101, 109, 112, 116, 121, 0);
      let roomO = String.fromCharCode(97, 116, 116, 114, 97, 99, 116, 111, 114, 95, 55, 95, 57, 52, 0);
      mutedz = `${sendx.length / 1}`;
      let mutedi = String.fromCharCode(98, 120, 116, 99, 56, 100, 107, 122, 0) == roomO;
      do {
         roomO = `${sendx.length >> (Math.min(Math.abs(2), 1))}`;
         if (mutedi) {
            break;
         }
      } while (mutedi && (2 > (3 / (Math.max(6, roomO.length))) || (long_stt * 2.57) > 1.100));
      pointP += "2";
      while (3 < b_lockp.length) {
         reducers = [1 / (Math.max(parseInt(`${darkr}`), 10))];
         break;
      }
      const bannerList = bannerRes.ads_list;

      if (!reducers.includes(loadingd)) {
         let loginw = String.fromCharCode(113, 116, 112, 97, 108, 101, 116, 116, 101, 95, 117, 95, 53, 57, 0);
         let descO = 2.0;
         let constantsZ = 0.0;
         let shrinkj = 0;
         if ((5 / (Math.max(1, constantsZ))) == 5.95) {
            let alertF: Map<any, any> = new Map([[String.fromCharCode(99, 95, 50, 95, 116, 105, 109, 101, 114, 115, 0), 929], [String.fromCharCode(112, 97, 115, 116, 95, 50, 95, 50, 52, 0), 548], [String.fromCharCode(100, 101, 97, 100, 108, 105, 110, 101, 95, 118, 95, 53, 53, 0), 845]]);
            let baiduA = String.fromCharCode(102, 95, 50, 52, 95, 105, 110, 102, 111, 0);
            descO -= parseFloat(`${parseInt(`${descO}`) << (Math.min(2, Math.abs(parseInt(`${constantsZ}`))))}`);
            alertF.set(`${baiduA}`, 2 - alertF.size);
            baiduA = `${baiduA.length}`;
         }
         while (2.82 > descO) {
            constantsZ -= parseInt(`${constantsZ}`) >> (Math.min(1, Math.abs(1)));
            break;
         }
         descO += parseFloat(`${parseInt(`${descO}`)}`);
         let whiteH = descO >= 9325524.0;
         do {
            descO += parseFloat(`${loginw.length}`);
            if (whiteH) {
               break;
            }
         } while (((constantsZ / (Math.max(descO, 8))) == 3.76 && (descO / (Math.max(3.76, 9))) == 1.9) && whiteH);
         let combineT = 5.0;
         let twitter5 = String.fromCharCode(100, 95, 50, 48, 95, 99, 114, 111, 112, 112, 105, 110, 103, 0);
         descO *= parseFloat(`${1 << (Math.min(Math.abs(parseInt(`${descO}`)), 2))}`);
         combineT /= Math.max(parseFloat(`${twitter5.length % 2}`), 2);
         twitter5 = `${twitter5.length}`;
         shrinkj -= loginw.length;
         let privileges = 0.0;
         let shareY: Map<any, any> = new Map([[String.fromCharCode(104, 105, 110, 116, 101, 100, 95, 120, 95, 53, 50, 0), 865], [String.fromCharCode(101, 95, 54, 48, 95, 115, 105, 108, 107, 0), 182], [String.fromCharCode(115, 108, 105, 99, 101, 99, 111, 110, 116, 101, 120, 116, 95, 108, 95, 53, 48, 0), 265]]);
         loginw += `${parseInt(`${constantsZ}`) | 1}`;
         privileges += parseFloat(`${shareY.size >> (Math.min(1, Math.abs(parseInt(`${privileges}`))))}`);
         shareY = new Map([[`${shareY.size}`, parseInt(`${privileges}`) * 1]]);
         let actionsN = 8561983.0 <= descO;
         do {
            descO *= parseFloat(`${parseInt(`${constantsZ}`) ^ 1}`);
            if (actionsN) {
               break;
            }
         } while (actionsN && (3.61 < (descO - constantsZ) || 5.100 < (constantsZ - 3.61)));
         let description_mao = String.fromCharCode(104, 101, 97, 100, 112, 104, 111, 110, 101, 115, 95, 107, 95, 51, 54, 0);
         let string0 = 4.0;
         let combineN: Map<any, any> = new Map([[String.fromCharCode(117, 95, 56, 55, 95, 110, 111, 110, 110, 117, 108, 108, 115, 99, 104, 101, 109, 101, 115, 0), 556], [String.fromCharCode(100, 95, 53, 53, 95, 109, 101, 109, 109, 103, 114, 0), 962]]);
         loginw = `${shrinkj / 2}`;
         description_mao = `${parseInt(`${string0}`) >> (Math.min(description_mao.length, 3))}`;
         string0 *= combineN.size << (Math.min(1, Math.abs(parseInt(`${string0}`))));
         combineN = new Map([[description_mao, 3]]);
         let membershipz = String.fromCharCode(98, 108, 97, 99, 107, 108, 105, 115, 116, 95, 120, 95, 49, 48, 48, 0);
         if ((parseInt(`${descO}`) - loginw.length) >= 2 || (2 << (Math.min(1, loginw.length))) >= 2) {
            let actionu = false;
            loginw += `${parseInt(`${descO}`) + 3}`;
            actionu = !actionu;
         }
         let acceptedz = false;
         let sentry0 = 1.0;
         loginw += "2";
         acceptedz = !acceptedz;
         sentry0 += parseFloat(`${2 / (Math.max(parseInt(`${sentry0}`), 9))}`);
         reducers = [1 ^ parseInt(`${constantsZ}`)];
      }
      let scheduler = 9233398.0 >= darkr;
      do {
         darkr /= Math.max(3, pointP.length << (Math.min(Math.abs(3), 3)));
         if (scheduler) {
            break;
         }
      } while ((pointP.length >= parseInt(`${darkr}`)) && scheduler);
      if (pointP == String.fromCharCode(88, 0)) {
         fieldO += `${1 + fieldO.length}`;
      }
      darkr -= (b_lockp == String.fromCharCode(83, 0) ? loadingd : b_lockp.length);

      if (banner) {

         let nalyticsq = 2;
         let fieldt = String.fromCharCode(101, 95, 51, 55, 95, 104, 105, 100, 99, 116, 0);
         let calendarA = String.fromCharCode(104, 97, 115, 104, 101, 100, 95, 112, 95, 54, 52, 0);
         nalyticsq -= calendarA.length;
         let y_titleW = 9215674 <= fieldt.length;
         do {
            let default_20r: Array<any> = [String.fromCharCode(115, 95, 54, 95, 99, 105, 112, 104, 101, 114, 115, 0), String.fromCharCode(109, 100, 116, 97, 95, 115, 95, 49, 53, 0), String.fromCharCode(112, 95, 49, 56, 95, 101, 120, 112, 111, 110, 101, 110, 116, 105, 97, 108, 0)];
            let soundv: Map<any, any> = new Map([[String.fromCharCode(118, 95, 49, 56, 95, 115, 97, 110, 105, 116, 121, 0), 31], [String.fromCharCode(99, 108, 97, 115, 115, 105, 102, 121, 95, 97, 95, 49, 48, 48, 0), 574]]);
            let sansD = 2.0;
            let readz = 3.0;
            let plashS = 4.0;
            fieldt += `${default_20r.length << (Math.min(5, Math.abs(soundv.size)))}`;
            default_20r = [parseInt(`${sansD}`) / (Math.max(1, parseInt(`${readz}`)))];
            soundv.set(`${sansD}`, 3);
            readz -= parseFloat(`${parseInt(`${sansD}`)}`);
            plashS += parseFloat(`${3}`);
            if (y_titleW) {
               break;
            }
         } while (y_titleW && ((5 & nalyticsq) <= 5 || (5 & nalyticsq) <= 2));
         fieldt = `${calendarA.length / 1}`;
         fieldt += `${fieldt.length + 3}`;
         nalyticsq %= Math.max(calendarA.length * fieldt.length, 4);
         calendarA += `${nalyticsq ^ 2}`;
         let starQ = String.fromCharCode(118, 95, 55, 48, 95, 111, 114, 105, 103, 110, 97, 108, 0);
         calendarA = `${2 & fieldt.length}`;
         starQ += `${starQ.length + 1}`;
         for (let x = 0; x < 3; x++) {
            calendarA += `${1 << (Math.min(2, fieldt.length))}`;
         }
         nalyticsq += fieldt.length;
         analyticsg = new Map([[`${analyticR.length}`, analyticR.length]]);
         for (let u = 0; u < 1; u++) {
            analyticsg.set(`${loadingd}`, 1);
         }
         analyticR = [2 | parseInt(`${darkr}`)];
         while ((pointP.length & 2) == 5) {
            analyticsg.set(`${loadingd}`, analyticR.length);
            break;
         }
         setBannerAd(banner);

         if ((5 % (Math.max(4, fieldO.length))) == 1) {
            let floaterb = 4.0;
            let stationU = 8476453.0 >= floaterb;
            do {
               floaterb -= parseFloat(`${2 / (Math.max(10, parseInt(`${floaterb}`)))}`);
               if (stationU) {
                  break;
               }
            } while ((floaterb >= floaterb) && stationU);
            let contextY = String.fromCharCode(97, 95, 55, 50, 95, 114, 101, 116, 117, 114, 110, 0);
            floaterb /= Math.max(3, parseFloat(`${2 << (Math.min(4, Math.abs(parseInt(`${floaterb}`))))}`));
            contextY += `${(contextY == String.fromCharCode(78, 0) ? contextY.length : contextY.length)}`;
            let lineB = floaterb >= 5360950.0;
            do {
               let specV = String.fromCharCode(115, 99, 97, 108, 97, 114, 112, 114, 111, 100, 117, 99, 116, 95, 120, 95, 56, 52, 0);
               let filter0 = 2.0;
               floaterb -= parseFloat(`${specV.length}`);
               specV += `${parseInt(`${filter0}`)}`;
               if (lineB) {
                  break;
               }
            } while (((floaterb + floaterb) < 3.60 && 5.16 < (3.60 + floaterb)) && lineB);
            loadingd &= pointP.length;
         }
         pointP = `${3 + analyticR.length}`;
         reducers.push(parseInt(`${darkr}`));
         let catagoryn = fieldO.length <= 6261704;
         do {
            fieldO += "3";
            if (catagoryn) {
               break;
            }
         } while (catagoryn && ((4 + loadingd) > 1 || 4 > (fieldO.length + loadingd)));
         setBannerAdList(bannerList);
      } else {

         let unreadZ = false;
         let downp = String.fromCharCode(117, 108, 116, 105, 95, 118, 95, 54, 57, 0);
         if (downp.length < 3) {
            downp += `${(downp.length ^ (unreadZ ? 4 : 3))}`;
         }
         let blacklist1 = String.fromCharCode(107, 101, 121, 104, 97, 115, 104, 95, 115, 95, 50, 54, 0);
         unreadZ = blacklist1.length == 61 && !unreadZ;
         downp += `${blacklist1.length}`;
         let carousele = 0;
         unreadZ = downp.length >= 20 && blacklist1.length >= 20;
         carousele += carousele << (Math.min(Math.abs(2), 2));
         while (blacklist1 == String.fromCharCode(85, 0)) {
            let downloaderm: Array<any> = [725, 964, 632];
            let models0 = String.fromCharCode(111, 95, 53, 54, 95, 104, 97, 108, 102, 100, 0);
            let modeH = String.fromCharCode(116, 111, 111, 108, 98, 97, 114, 95, 101, 95, 51, 0);
            let projectj = true;
            let dangeru = 5.0;
            downp += "3";
            downloaderm.push(2 % (Math.max(10, models0.length)));
            models0 = `${models0.length}`;
            modeH = `${modeH.length}`;
            projectj = modeH.length >= downloaderm.length;
            dangeru *= models0.length;
            break;
         }
         b_lockp = `${downp.length}`;
         while (analyticsg.get(`${darkr}`) != null) {
            let gmail5 = 3;
            let episodesL = String.fromCharCode(97, 100, 100, 105, 116, 105, 111, 110, 97, 108, 108, 121, 95, 98, 95, 52, 0);
            let recommendationH: Map<any, any> = new Map([[String.fromCharCode(97, 114, 99, 104, 105, 118, 105, 110, 103, 95, 120, 95, 57, 52, 0), 468], [String.fromCharCode(106, 112, 103, 95, 118, 95, 55, 55, 0), 35]]);
            let successa = String.fromCharCode(121, 95, 51, 95, 116, 97, 115, 107, 115, 0);
            let delegate_0kc: Map<any, any> = new Map([[String.fromCharCode(102, 97, 115, 116, 102, 105, 114, 115, 116, 112, 97, 115, 115, 95, 106, 95, 52, 56, 0), 191], [String.fromCharCode(116, 111, 110, 101, 109, 97, 112, 95, 48, 95, 54, 48, 0), 354]]);
            let rewindX = 5.0;
            let serviceC = episodesL == String.fromCharCode(100, 97, 119, 116, 0);
            do {
               episodesL += `${recommendationH.size}`;
               if (serviceC) {
                  break;
               }
            } while (serviceC && (!episodesL.includes(`${delegate_0kc.size}`)));
            let paginationy = 9536425.0 <= rewindX;
            do {
               let countdownH = String.fromCharCode(116, 119, 101, 97, 107, 115, 95, 51, 95, 50, 48, 0);
               let dialogg = String.fromCharCode(111, 98, 116, 97, 105, 110, 101, 114, 95, 108, 95, 55, 49, 0);
               let activeY = String.fromCharCode(110, 117, 108, 108, 105, 102, 95, 50, 95, 51, 55, 0);
               let readK: Array<any> = [272, 425, 11];
               let grayh = String.fromCharCode(122, 95, 52, 50, 95, 114, 117, 108, 101, 98, 111, 111, 107, 0);
               rewindX -= parseFloat(`${countdownH.length}`);
               countdownH += "1";
               dialogg += `${grayh.length / 1}`;
               activeY += `${readK.length}`;
               readK.push(activeY.length | 3);
               grayh += `${activeY.length}`;
               if (paginationy) {
                  break;
               }
            } while (paginationy && (5.93 >= (rewindX - parseFloat(`${delegate_0kc.size}`)) || (delegate_0kc.size - parseInt(`${rewindX}`)) >= 5));
            while ((delegate_0kc.size ^ 5) <= 5 && 5 <= (delegate_0kc.size ^ recommendationH.size)) {
               let sheetm = 3.0;
               let yellowd: Map<any, any> = new Map([[String.fromCharCode(103, 105, 118, 101, 110, 95, 102, 95, 54, 57, 0), String.fromCharCode(106, 115, 101, 112, 95, 122, 95, 49, 51, 0)], [String.fromCharCode(114, 95, 54, 51, 95, 112, 97, 117, 115, 101, 0), String.fromCharCode(101, 95, 57, 51, 95, 122, 102, 114, 101, 101, 0)]]);
               let backV = String.fromCharCode(108, 95, 55, 53, 95, 100, 101, 102, 97, 117, 108, 116, 0);
               let contextT = false;
               let statisticsG = String.fromCharCode(102, 95, 57, 49, 95, 114, 101, 112, 108, 97, 99, 101, 109, 101, 110, 116, 0);
               delegate_0kc = new Map([[`${contextT}`, (String.fromCharCode(57, 0) == statisticsG ? statisticsG.length : (contextT ? 5 : 3))]]);
               sheetm += yellowd.size;
               yellowd = new Map([[`${yellowd.size}`, 1]]);
               backV += `${backV.length}`;
               break;
            }
            episodesL += `${(episodesL == String.fromCharCode(116, 0) ? parseInt(`${rewindX}`) : episodesL.length)}`;
            if (Array.from(delegate_0kc.keys()).includes(`${rewindX}`)) {
               rewindX *= parseFloat(`${2}`);
            }
            let otherK: Array<any> = [965, 544, 670];
            episodesL = `${3 & recommendationH.size}`;
            gmail5 ^= 3 ^ recommendationH.size;
            recommendationH = new Map([[`${gmail5}`, 1 - parseInt(`${rewindX}`)]]);
            let suggestionW: Map<any, any> = new Map([[String.fromCharCode(118, 95, 51, 48, 95, 99, 111, 110, 118, 0), true], [String.fromCharCode(97, 97, 99, 115, 98, 114, 100, 97, 116, 97, 95, 113, 95, 55, 51, 0), true], [String.fromCharCode(108, 95, 52, 48, 95, 97, 117, 116, 104, 111, 114, 105, 122, 97, 116, 105, 111, 110, 0), false]]);
            rewindX /= Math.max(2, parseFloat(`${1 ^ successa.length}`));
            suggestionW = new Map([[`${suggestionW.size}`, 2]]);
            delegate_0kc.set(`${successa}`, recommendationH.size >> (Math.min(successa.length, 2)));
            delegate_0kc.set(`${gmail5}`, 3 - successa.length);
            rewindX /= Math.max(5, parseFloat(`${recommendationH.size}`));
            successa = `${successa.length}`;
            darkr /= Math.max(recommendationH.size, 5);
            break;
         }
         for (let p = 0; p < 1; p++) {
            let fastforwardI = String.fromCharCode(112, 105, 112, 101, 108, 111, 115, 115, 95, 98, 95, 51, 0);
            let pingZ: Array<any> = [String.fromCharCode(114, 116, 114, 105, 109, 95, 112, 95, 54, 49, 0), String.fromCharCode(115, 116, 101, 112, 115, 105, 122, 101, 95, 105, 95, 56, 56, 0), String.fromCharCode(111, 95, 54, 95, 100, 101, 109, 111, 0)];
            let live8 = 0.0;
            let liveg = String.fromCharCode(115, 95, 54, 54, 0);
            live8 *= pingZ.length;
            while ((5 + fastforwardI.length) <= 2 && 1 <= (fastforwardI.length + 5)) {
               pingZ = [3];
               break;
            }
            let green9 = 1;
            live8 /= Math.max(3, 1);
            green9 ^= 3 % (Math.max(7, green9));
            let vietnamI = false;
            let pagination9 = false;
            if (pagination9) {
               pagination9 = !pagination9;
            }
            while (!liveg.includes(`${fastforwardI.length}`)) {
               let chinaP = true;
               let indexx = 1.0;
               let acceptedl = String.fromCharCode(121, 95, 54, 57, 95, 109, 117, 108, 116, 105, 112, 108, 121, 120, 0);
               let filed7: Array<any> = [933, 929];
               let malaysia1 = 0.0;
               liveg = `${(pingZ.length * (vietnamI ? 4 : 2))}`;
               chinaP = String.fromCharCode(54, 0) == acceptedl && 74.60 >= malaysia1;
               indexx *= parseFloat(`${1}`);
               acceptedl += "1";
               filed7.push(2);
               malaysia1 /= Math.max((parseInt(`${indexx}`) >> (Math.min(2, Math.abs((chinaP ? 1 : 3))))), 5);
               break;
            }
            let weibo0: Array<any> = [String.fromCharCode(116, 95, 53, 56, 95, 116, 114, 97, 110, 115, 108, 105, 116, 101, 114, 97, 116, 101, 100, 0), String.fromCharCode(117, 114, 118, 101, 115, 95, 103, 95, 52, 50, 0), String.fromCharCode(99, 119, 110, 100, 95, 114, 95, 54, 54, 0)];
            let emptyZ = String.fromCharCode(114, 95, 52, 54, 95, 103, 101, 110, 101, 114, 97, 116, 101, 100, 0);
            let policyo = String.fromCharCode(109, 100, 112, 114, 95, 54, 95, 53, 57, 0);
            live8 += 3;
            weibo0.push(emptyZ.length >> (Math.min(2, weibo0.length)));
            emptyZ += `${(String.fromCharCode(82, 0) == emptyZ ? emptyZ.length : policyo.length)}`;
            policyo += `${(emptyZ == String.fromCharCode(68, 0) ? weibo0.length : emptyZ.length)}`;
            let promotionH = 0.0;
            live8 -= liveg.length;
            promotionH -= parseInt(`${promotionH}`) | parseInt(`${promotionH}`);
            for (let z = 0; z < 2; z++) {
               pingZ = [pingZ.length];
            }
            for (let d = 0; d < 1; d++) {
               let orientationr = String.fromCharCode(99, 95, 57, 95, 97, 99, 113, 117, 105, 114, 101, 0);
               let gesturesP = String.fromCharCode(108, 95, 55, 51, 95, 112, 97, 121, 101, 101, 0);
               let matchr = String.fromCharCode(100, 105, 115, 116, 114, 105, 98, 117, 116, 101, 100, 95, 111, 95, 52, 54, 0);
               pingZ.push(matchr.length);
               orientationr = `${orientationr.length}`;
               gesturesP += `${(String.fromCharCode(116, 0) == orientationr ? gesturesP.length : orientationr.length)}`;
               matchr += `${gesturesP.length / 2}`;
            }
            for (let o = 0; o < 3; o++) {
               pingZ = [((vietnamI ? 5 : 1) * 1)];
            }
            let agreementO = 0.0;
            let actiong = 2.0;
            live8 -= fastforwardI.length;
            agreementO += parseFloat(`${2 & parseInt(`${agreementO}`)}`);
            actiong -= parseInt(`${actiong}`) | parseInt(`${agreementO}`);
            analyticR = [pointP.length + 1];
         }
         if (1 <= (analyticR.length / 5) || 4 <= (loadingd / 5)) {
            let sellc = String.fromCharCode(118, 105, 115, 105, 116, 111, 114, 95, 109, 95, 57, 52, 0);
            let spinnerY = 2;
            let cast9 = String.fromCharCode(117, 95, 50, 56, 95, 105, 110, 118, 105, 116, 101, 100, 0);
            let ticked5 = String.fromCharCode(98, 95, 56, 48, 95, 110, 97, 118, 105, 103, 97, 116, 101, 0);
            let componentH = 4.0;
            let uploadS = 4.0;
            while ((spinnerY - 2) < 3) {
               spinnerY <<= Math.min(Math.abs(spinnerY), 5);
               break;
            }
            let sinaZ = 5.0;
            let downloaded7 = 3;
            let clubs = 1.0;
            componentH -= parseFloat(`${parseInt(`${componentH}`)}`);
            sinaZ /= Math.max(parseFloat(`${downloaded7}`), 2);
            downloaded7 ^= parseInt(`${clubs}`);
            clubs *= parseInt(`${sinaZ}`);
            ticked5 += `${(cast9 == String.fromCharCode(115, 0) ? cast9.length : parseInt(`${uploadS}`))}`;
            let emptyK = 1.0;
            let castI = true;
            spinnerY &= parseInt(`${emptyK}`);
            castI = !castI;
            let questG: Array<any> = [397, 470, 760];
            let moviesM: Array<any> = [389, 969, 264];
            let rightD: Array<any> = [476, 167, 808];
            uploadS += parseFloat(`${1 * moviesM.length}`);
            questG = [rightD.length << (Math.min(Math.abs(2), 2))];
            moviesM = [3];
            rightD = [questG.length & rightD.length];
            if (3.44 < (uploadS * spinnerY)) {
               spinnerY |= 2 + parseInt(`${uploadS}`);
            }
            let whiteO = true;
            emptyK /= Math.max(parseFloat(`${parseInt(`${componentH}`) >> (Math.min(1, Math.abs(3)))}`), 1);
            whiteO = !whiteO;
            sellc += `${parseInt(`${componentH}`)}`;
            ticked5 += `${ticked5.length + cast9.length}`;
            if ((cast9.length << (Math.min(Math.abs(1), 5))) >= 3 || (1 << (Math.min(3, cast9.length))) >= 5) {
               cast9 = `${sellc.length}`;
            }
            analyticR.push(selld % (Math.max(7, cast9.length)));
         }
         setBannerAd(undefined);

         for (let p = 0; p < 1; p++) {
            let telegraml = String.fromCharCode(108, 111, 99, 97, 108, 105, 122, 101, 100, 95, 56, 95, 53, 50, 0);
            let backwardY: Map<any, any> = new Map([[String.fromCharCode(111, 112, 101, 110, 99, 108, 95, 122, 95, 54, 48, 0), 203], [String.fromCharCode(115, 109, 105, 108, 105, 110, 103, 95, 119, 95, 56, 50, 0), 112]]);
            let launchm = 1;
            let dropdown6 = backwardY.size <= 7921713;
            do {
               backwardY.set(`${telegraml}`, telegraml.length * backwardY.size);
               if (dropdown6) {
                  break;
               }
            } while (((backwardY.size + 4) > 4 && (4 + backwardY.size) > 1) && dropdown6);
            while ((backwardY.size ^ telegraml.length) <= 2) {
               let update_6gg = String.fromCharCode(98, 95, 51, 52, 95, 117, 110, 108, 111, 97, 100, 0);
               let membershipa = String.fromCharCode(100, 95, 49, 54, 95, 112, 114, 101, 109, 117, 108, 116, 105, 112, 108, 105, 101, 100, 0);
               let uploado = 2.0;
               let short_zJ: Map<any, any> = new Map([[String.fromCharCode(116, 95, 52, 55, 95, 115, 117, 98, 106, 111, 117, 114, 110, 97, 108, 0), 49], [String.fromCharCode(113, 95, 50, 48, 95, 110, 97, 110, 111, 112, 98, 0), 315]]);
               let containerr = String.fromCharCode(115, 95, 57, 54, 95, 98, 108, 105, 110, 107, 0);
               backwardY.set(containerr, containerr.length);
               update_6gg = `${parseInt(`${uploado}`) << (Math.min(Math.abs(short_zJ.size), 1))}`;
               membershipa = `${2 | parseInt(`${uploado}`)}`;
               short_zJ.set(`${membershipa}`, short_zJ.size * membershipa.length);
               break;
            }
            backwardY.set(`${launchm}`, launchm);
            let gmailR = String.fromCharCode(109, 101, 115, 115, 97, 103, 101, 95, 101, 95, 53, 52, 0);
            while (3 >= launchm) {
               telegraml += `${backwardY.size}`;
               break;
            }
            for (let b = 0; b < 1; b++) {
               telegraml += `${backwardY.size}`;
            }
            if (4 > telegraml.length) {
               let settingsL = String.fromCharCode(101, 95, 53, 48, 95, 110, 101, 116, 101, 113, 0);
               let canvasO = String.fromCharCode(119, 95, 56, 52, 95, 103, 111, 112, 104, 101, 114, 0);
               let shootF = String.fromCharCode(116, 95, 56, 51, 0);
               let switch_evf: Map<any, any> = new Map([[String.fromCharCode(102, 95, 52, 51, 95, 114, 116, 102, 0), 563], [String.fromCharCode(111, 95, 52, 55, 95, 114, 101, 99, 111, 110, 110, 101, 99, 116, 101, 100, 0), 974]]);
               launchm &= canvasO.length;
               settingsL = `${switch_evf.size & 1}`;
               canvasO += `${1 | shootF.length}`;
               shootF = `${(settingsL == String.fromCharCode(55, 0) ? switch_evf.size : settingsL.length)}`;
            }
            backwardY.set(telegraml, telegraml.length ^ backwardY.size);
            let champion6 = 9645420 >= gmailR.length;
            do {
               let servicee: Array<any> = [72, 517, 830];
               let lineQ = String.fromCharCode(117, 95, 52, 49, 95, 108, 105, 98, 97, 118, 100, 101, 118, 105, 99, 101, 0);
               let time_aI = 4;
               let servicem = String.fromCharCode(97, 114, 114, 97, 121, 115, 105, 122, 101, 95, 57, 95, 50, 50, 0);
               gmailR = `${servicem.length ^ 2}`;
               servicee = [servicee.length - 1];
               lineQ += `${(lineQ == String.fromCharCode(103, 0) ? lineQ.length : time_aI)}`;
               time_aI -= time_aI;
               servicem = `${3 | lineQ.length}`;
               if (champion6) {
                  break;
               }
            } while (champion6 && (!gmailR.startsWith(`${telegraml.length}`)));
            fieldO += `${selld}`;
         }
         if (analyticR.length >= 3) {
            analyticR = [selld >> (Math.min(1, Math.abs(3)))];
         }
         let recommendationD = fieldO.length <= 7838128;
         do {
            let largeR: Map<any, any> = new Map([[String.fromCharCode(103, 97, 109, 117, 116, 95, 56, 95, 53, 52, 0), false], [String.fromCharCode(115, 95, 53, 57, 0), true]]);
            let productW: Map<any, any> = new Map([[String.fromCharCode(105, 95, 50, 48, 95, 101, 114, 97, 115, 117, 114, 101, 0), true], [String.fromCharCode(102, 97, 110, 111, 117, 116, 95, 55, 95, 57, 55, 0), false], [String.fromCharCode(116, 111, 115, 115, 95, 55, 95, 53, 56, 0), false]]);
            let anytimew = String.fromCharCode(99, 95, 57, 54, 95, 103, 114, 97, 112, 104, 105, 99, 0);
            let plashh = String.fromCharCode(104, 95, 51, 51, 95, 108, 115, 112, 115, 0);
            let whistlea = true;
            let descj = String.fromCharCode(113, 95, 57, 95, 102, 97, 99, 116, 111, 114, 121, 0);
            let header6 = 4.0;
            whistlea = plashh.length > 18;
            descj += `${parseInt(`${header6}`) | descj.length}`;
            header6 -= descj.length << (Math.min(Math.abs(3), 5));
            let photoH = String.fromCharCode(121, 117, 118, 114, 103, 98, 97, 95, 100, 95, 51, 55, 0);
            let windp = 1.0;
            largeR = new Map([[photoH, ((whistlea ? 1 : 2) % 3)]]);
            photoH += `${parseInt(`${windp}`)}`;
            largeR.set(`${whistlea}`, productW.size);
            plashh = `${anytimew.length}`;
            for (let g = 0; g < 1; g++) {
               anytimew += `${anytimew.length - 3}`;
            }
            let successV = String.fromCharCode(56, 97, 113, 55, 0) == plashh;
            do {
               plashh += `${plashh.length}`;
               if (successV) {
                  break;
               }
            } while ((1 == plashh.length) && successV);
            productW = new Map([[`${whistlea}`, ((whistlea ? 5 : 1) << (Math.min(Math.abs(2), 5)))]]);
            let storez = String.fromCharCode(114, 101, 108, 111, 97, 100, 95, 101, 95, 53, 56, 0);
            let downz = true;
            let layout3 = 2.0;
            productW = new Map([[`${productW.size}`, (String.fromCharCode(78, 0) == plashh ? productW.size : plashh.length)]]);
            storez += `${storez.length << (Math.min(Math.abs(3), 2))}`;
            downz = layout3 <= 54.44;
            layout3 += parseInt(`${layout3}`) | 2;
            productW.set(`${whistlea}`, ((whistlea ? 2 : 1) - 3));
            anytimew += `${productW.size}`;
            while (plashh.length <= 2) {
               let auto_hy = String.fromCharCode(122, 95, 49, 49, 95, 100, 105, 114, 115, 0);
               plashh = `${(plashh == String.fromCharCode(86, 0) ? plashh.length : (whistlea ? 4 : 2))}`;
               auto_hy += `${auto_hy.length >> (Math.min(5, auto_hy.length))}`;
               break;
            }
            let infoD = largeR.size <= 5304381;
            do {
               largeR = new Map([[anytimew, plashh.length]]);
               if (infoD) {
                  break;
               }
            } while ((2 > (5 << (Math.min(4, Math.abs(largeR.size))))) && infoD);
            for (let u = 0; u < 1; u++) {
               let lessW: Array<any> = [644, 634];
               let collection0: Map<any, any> = new Map([[String.fromCharCode(97, 115, 99, 101, 110, 100, 105, 110, 103, 95, 105, 95, 54, 54, 0), true], [String.fromCharCode(100, 97, 109, 112, 95, 111, 95, 51, 54, 0), true]]);
               let settingU = String.fromCharCode(117, 95, 56, 95, 115, 108, 105, 99, 101, 99, 111, 110, 116, 101, 120, 116, 0);
               let handlero = 4.0;
               plashh = `${settingU.length * largeR.size}`;
               lessW = [collection0.size];
               collection0 = new Map([[`${collection0.size}`, collection0.size]]);
               settingU += `${collection0.size + 2}`;
               handlero /= Math.max(parseFloat(`${lessW.length << (Math.min(2, Math.abs(parseInt(`${handlero}`))))}`), 5);
            }
            productW.set(`${largeR.size}`, largeR.size);
            anytimew += `${((whistlea ? 4 : 1) | plashh.length)}`;
            fieldO = `${largeR.size % 1}`;
            if (recommendationD) {
               break;
            }
         } while (recommendationD && ((fieldO.length & loadingd) <= 3));
         while (1 <= (type_x5e.length + reducers.length) && (1 + reducers.length) <= 5) {
            reducers.push(b_lockp.length);
            break;
         }
         setBannerAdList([]);
      }
   };

   useEffect(() => {
      onLoad();
   }, []);

   const shouldShowAds = async () => {
      let routert = String.fromCharCode(116, 111, 110, 95, 108, 95, 53, 55, 0);
      let reade: Array<any> = [950, 105, 436];
      let collectiony: Array<any> = [153, 617, 486];
      let windJ: Map<any, any> = new Map([[String.fromCharCode(100, 95, 51, 50, 95, 99, 117, 118, 105, 100, 0), String.fromCharCode(121, 95, 54, 50, 0)], [String.fromCharCode(100, 95, 53, 95, 107, 116, 111, 112, 0), String.fromCharCode(115, 121, 109, 98, 111, 108, 95, 111, 95, 49, 52, 0)]]);
      let philippinesN = 2;
      let baiduh: Map<any, any> = new Map([[String.fromCharCode(110, 105, 98, 95, 119, 95, 55, 55, 0), 747], [String.fromCharCode(107, 95, 50, 49, 95, 118, 97, 108, 105, 100, 97, 116, 105, 110, 103, 0), 59], [String.fromCharCode(115, 99, 97, 108, 101, 114, 95, 50, 95, 57, 48, 0), 561]]);
      let goal0 = String.fromCharCode(101, 101, 112, 95, 113, 95, 50, 53, 0);
      let countryt = 1.0;
      let rcopy_t_ = String.fromCharCode(101, 110, 103, 105, 110, 101, 95, 50, 95, 55, 56, 0);
      let rulese = 1.0;
      let pagination3: Array<any> = [String.fromCharCode(103, 95, 49, 54, 95, 115, 117, 98, 114, 97, 110, 103, 101, 115, 0), String.fromCharCode(101, 95, 55, 57, 95, 99, 104, 111, 105, 99, 101, 0), String.fromCharCode(97, 115, 115, 101, 114, 116, 115, 95, 116, 95, 51, 50, 0)];
      let aboutx: Array<any> = [774, 787];
      let taiwany = 1;
      let showp = String.fromCharCode(121, 95, 53, 54, 95, 115, 98, 111, 120, 0);
      let descq = String.fromCharCode(114, 101, 99, 111, 109, 109, 101, 110, 100, 95, 122, 95, 56, 53, 0);
      let aboutP = 0;
      let updatesG = false;
      for (let m = 0; m < 1; m++) {
         let analytics6: Map<any, any> = new Map([[String.fromCharCode(111, 99, 97, 116, 105, 111, 110, 95, 106, 95, 52, 48, 0), true], [String.fromCharCode(109, 95, 52, 95, 115, 116, 114, 102, 116, 105, 109, 101, 0), true], [String.fromCharCode(110, 95, 57, 56, 95, 100, 114, 97, 103, 0), false]]);
         let gifte = String.fromCharCode(99, 98, 114, 116, 95, 114, 95, 50, 56, 0);
         analytics6 = new Map([[`${analytics6.size}`, gifte.length ^ analytics6.size]]);
         if (Array.from(analytics6.values()).includes(analytics6.size)) {
            analytics6 = new Map([[`${analytics6.size}`, analytics6.size * 2]]);
         }
         if (3 <= (2 + analytics6.size) && 3 <= (2 + analytics6.size)) {
            let filedW = String.fromCharCode(118, 111, 116, 101, 95, 121, 95, 57, 49, 0);
            let anythinky = String.fromCharCode(114, 101, 109, 111, 116, 101, 95, 115, 95, 50, 56, 0);
            let large2 = String.fromCharCode(112, 95, 53, 55, 95, 100, 121, 110, 97, 109, 105, 99, 97, 108, 108, 121, 0);
            analytics6.set(anythinky, 2 | anythinky.length);
            filedW = `${large2.length}`;
            large2 = `${large2.length + 2}`;
         }
         collectiony = [windJ.size & 2];
      }
      if (5.90 == (countryt + collectiony.length)) {
         collectiony.push(reade.length);
      }
      let expiredN = windJ.size >= 7417071;
      do {
         windJ.set(`${countryt}`, parseInt(`${countryt}`));
         if (expiredN) {
            break;
         }
      } while (expiredN && (3 > (goal0.length % (Math.max(7, windJ.size))) && (goal0.length % 3) > 1));
      while ((parseInt(`${countryt}`) / (Math.max(7, baiduh.size))) >= 5) {
         countryt /= Math.max(1, baiduh.size);
         break;
      }
      let taiwanc = 1.0;
      let m_unlock3 = 3.0;
      let point5: Map<any, any> = new Map([[String.fromCharCode(97, 95, 50, 52, 95, 99, 97, 108, 108, 98, 97, 99, 107, 115, 0), 698], [String.fromCharCode(118, 101, 110, 99, 95, 53, 95, 57, 48, 0), 432]]);
      taiwanc -= parseFloat(`${parseInt(`${m_unlock3}`)}`);
      let successh = 0.0;
      let minimizer = 0.0;
      while (taiwanc == 1.42) {
         m_unlock3 += parseInt(`${taiwanc}`);
         break;
      }
      let blackr = m_unlock3 >= 9837717.0;
      do {
         m_unlock3 /= Math.max(1, 2);
         if (blackr) {
            break;
         }
      } while (((4.90 - m_unlock3) >= 2.83) && blackr);
      for (let m = 0; m < 3; m++) {
         let tailz = false;
         let ballt = false;
         point5.set(`${successh}`, point5.size);
         tailz = !ballt || !tailz;
         ballt = (!ballt ? !tailz : !ballt);
      }
      let countdownH = 8066237 >= point5.size;
      do {
         point5.set(`${minimizer}`, parseInt(`${taiwanc}`));
         if (countdownH) {
            break;
         }
      } while (countdownH && (4 > (4 | point5.size) && 4 > (parseInt(`${taiwanc}`) / (Math.max(point5.size, 5)))));
      while (3.19 <= successh) {
         successh += parseFloat(`${point5.size << (Math.min(Math.abs(2), 5))}`);
         break;
      }
      let photod = 5;
      successh -= parseFloat(`${2}`);
      windJ.set(rcopy_t_, parseInt(`${taiwanc}`));

      if (!isVip) {

         philippinesN -= collectiony.length;
         let default_gr = 5261999 <= philippinesN;
         do {
            philippinesN ^= parseInt(`${countryt}`) | routert.length;
            if (default_gr) {
               break;
            }
         } while (((4 % (Math.max(1, philippinesN))) < 4) && default_gr);
         let whiteN = philippinesN <= 5974545;
         do {
            philippinesN &= 2;
            if (whiteN) {
               break;
            }
         } while (((1 | philippinesN) == 3) && whiteN);
         reade.push(1);
         countryt += (goal0 == String.fromCharCode(54, 0) ? goal0.length : collectiony.length);
         fetchBannerAd();
      } else {

         if (5 == (reade.length & philippinesN) || (reade.length & 5) == 2) {
            philippinesN %= Math.max(2, routert.length * collectiony.length);
         }
         let middleb: Array<any> = [648, 299, 512];
         let zhengpianq = 0;
         let foundl = String.fromCharCode(122, 95, 52, 48, 95, 108, 97, 116, 109, 0);
         zhengpianq |= 1;
         foundl = `${foundl.length}`;
         if (3 >= zhengpianq) {
            middleb = [3 - middleb.length];
         }
         for (let f = 0; f < 1; f++) {
            middleb = [1];
         }
         if (middleb.includes(zhengpianq)) {
            let relatedn: Array<any> = [803, 187];
            let pagination0: Array<any> = [String.fromCharCode(114, 101, 99, 111, 109, 112, 117, 116, 101, 95, 114, 95, 56, 49, 0), String.fromCharCode(111, 95, 54, 54, 95, 99, 97, 114, 101, 116, 0)];
            let activeG = 0.0;
            let i_imageu = String.fromCharCode(102, 114, 105, 101, 110, 100, 95, 120, 95, 54, 55, 0);
            middleb = [3];
            relatedn.push(parseInt(`${activeG}`) * pagination0.length);
            pagination0 = [pagination0.length];
            activeG += pagination0.length;
            i_imageu += `${2 << (Math.min(2, i_imageu.length))}`;
         }
         zhengpianq -= 2 - zhengpianq;
         let backgroundL = zhengpianq >= 7133431;
         do {
            zhengpianq &= middleb.length ^ zhengpianq;
            if (backgroundL) {
               break;
            }
         } while (backgroundL && (middleb.includes(zhengpianq)));
         goal0 += "1";
         for (let f = 0; f < 2; f++) {
            rulese *= 1 | parseInt(`${countryt}`);
         }
         let description_a0 = true;
         let expiredQ = 4.0;
         let miniT = 0.0;
         miniT -= (parseFloat(`${parseInt(`${expiredQ}`) >> (Math.min(2, Math.abs((description_a0 ? 2 : 5))))}`));
         let arrowd = 4.0;
         let invitem = 3.0;
         expiredQ *= parseFloat(`${parseInt(`${expiredQ}`) % 3}`);
         arrowd += 3;
         invitem /= Math.max(5, parseInt(`${invitem}`) % (Math.max(3, parseInt(`${arrowd}`))));
         if (expiredQ == miniT) {
            expiredQ /= Math.max(parseFloat(`${3 >> (Math.min(Math.abs(parseInt(`${miniT}`)), 1))}`), 4);
         }
         description_a0 = 17.40 == expiredQ;
         expiredQ *= parseFloat(`${parseInt(`${miniT}`) / 2}`);
         let leagueY = 8562262.0 <= expiredQ;
         do {
            expiredQ *= parseFloat(`${2}`);
            if (leagueY) {
               break;
            }
         } while (leagueY && (4.51 == expiredQ));
         let y_imageO = String.fromCharCode(102, 97, 114, 109, 101, 95, 97, 95, 50, 56, 0);
         let left8 = String.fromCharCode(115, 95, 57, 48, 95, 115, 112, 111, 105, 108, 101, 114, 0);
         for (let g = 0; g < 2; g++) {
            expiredQ *= (parseFloat(`${parseInt(`${expiredQ}`) / (Math.max(8, (description_a0 ? 5 : 5)))}`));
         }
         while (1 == y_imageO.length) {
            description_a0 = 24.74 > expiredQ;
            break;
         }
         collectiony.push(goal0.length / 3);
         while ((reade.length | routert.length) == 5) {
            let half1 = 0.0;
            let membershipf = String.fromCharCode(103, 108, 111, 98, 97, 108, 116, 101, 109, 95, 56, 95, 54, 48, 0);
            let modew = String.fromCharCode(113, 95, 55, 52, 95, 98, 105, 116, 114, 101, 97, 100, 101, 114, 0);
            let stationsT: Array<any> = [42, 918, 854];
            let aboutZ = 2.0;
            let statisticsB = 2.0;
            while (half1 > 5.17) {
               let editJ = String.fromCharCode(109, 112, 101, 103, 97, 117, 100, 105, 111, 100, 115, 112, 95, 56, 95, 50, 53, 0);
               half1 *= parseInt(`${aboutZ}`);
               editJ = "1";
               break;
            }
            membershipf += `${membershipf.length}`;
            if (4 >= modew.length) {
               stationsT = [modew.length % 2];
            }
            for (let n = 0; n < 2; n++) {
               let analytics5 = String.fromCharCode(104, 101, 97, 114, 98, 101, 97, 116, 95, 100, 95, 49, 49, 0);
               aboutZ *= parseFloat(`${analytics5.length + parseInt(`${half1}`)}`);
            }
            let quest5 = String.fromCharCode(109, 101, 109, 100, 98, 95, 111, 95, 55, 49, 0);
            let annerj = String.fromCharCode(105, 99, 111, 110, 95, 57, 95, 49, 48, 0);
            for (let l = 0; l < 2; l++) {
               annerj = "1";
            }
            membershipf += `${parseInt(`${half1}`)}`;
            reade.push(parseInt(`${countryt}`) % (Math.max(6, modew.length)));
            break;
         }
         setBannerAd(undefined);

         if ((2 >> (Math.min(1, Math.abs(philippinesN)))) > 1 && (philippinesN >> (Math.min(rcopy_t_.length, 1))) > 2) {
            philippinesN &= collectiony.length;
         }
         if (4 > (baiduh.size / 4) && (collectiony.length / (Math.max(4, 5))) > 3) {
            baiduh.set(rcopy_t_, (rcopy_t_ == String.fromCharCode(87, 0) ? windJ.size : rcopy_t_.length));
         }
         baiduh = new Map([[`${baiduh.size}`, 1 | philippinesN]]);
         for (let t = 0; t < 1; t++) {
            rcopy_t_ = `${goal0.length * windJ.size}`;
         }
         if ((5 % (Math.max(2, windJ.size))) <= 1 && (pagination3.length % 5) <= 3) {
            pagination3.push(aboutx.length ^ windJ.size);
         }
         setBannerAdList([]);
      }
   };

   useFocusEffect(
      useCallback(() => {
         shouldShowAds();
      }, [isVip]),
   );

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

   const renderBanner = useCallback(
      (allBannerAds: MAboutEdit[]) => {
         if (allBannerAds.length < 1) {
            return <></>;
         }

         const ads = allBannerAds[Math.floor(Math.random() * allBannerAds.length)];

         return (
            <BannerContainer
               bannerAd={ads}
               onMount={({ id, name, slot_id, title }) => {
                  umb_center_carousel.homeTabBannerViewAnalytics({
                     tab_id: navId?.toString() ?? '0',
                     tab_name: tabName ?? '',
                     ads_id: id,
                     ads_name: name,
                     ads_slot_id: slot_id,
                     ads_title: title,
                  });
               }}
               onPress={({ id, name, slot_id, title }) => {
                  umb_center_carousel.homeTabBannerClickAnalytics({
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
      ({ item, index }: { item: any; index: number }) => {
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
                        item.ads_url.includes(ReducerUnselectedInactiveMoon.profileRecommendationBackgroun([-65, -93, -93, -89, -92, -19, -8, -8, -41], 0xD7, false)) ||
                           item.ads_url.includes(ReducerUnselectedInactiveMoon.profileRecommendationBackgroun([-116, -112, -112, -108, -34, -53, -53, -28], 0xE4, false))
                           ? item.ads_url
                           : ReducerUnselectedInactiveMoon.profileRecommendationBackgroun([-65, -93, -93, -89, -92, -19, -8, -8, -41], 0xD7, false) + item.ads_url;
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
         );
      },
      [],
   );

   const renderContent = useCallback(
      ({ item, index }: { item: RBEmojiEwarded; index: number }) => (
         <View
            style={{
               paddingLeft: spacing.sideOffset,
               paddingRight: spacing.sideOffset,
            }}>
            { }
            <View key={`${item.topic_name}-${index}`} style={{ paddingTop: 10 }}>
               <View style={{ paddingBottom: 5 }}>
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
      let verticalF: Array<any> = [923, 679, 226];
      let storeG = 4.0;
      let favicon4: Map<any, any> = new Map([[String.fromCharCode(111, 95, 56, 51, 95, 115, 116, 111, 114, 121, 98, 111, 97, 114, 100, 0), false], [String.fromCharCode(99, 108, 111, 115, 101, 95, 105, 95, 51, 49, 0), false], [String.fromCharCode(109, 95, 56, 51, 95, 108, 105, 116, 116, 108, 101, 0), false]]);
      let black2 = 5.0;
      let navigationh = 2;
      let episodev: Array<any> = [108, 41, 510];
      let customD = 0.0;
      let navigation5 = false;
      let verticalr = false;
      for (let w = 0; w < 1; w++) {
         episodev = [2 >> (Math.min(Math.abs(navigationh), 1))];
      }
      customD /= Math.max(parseInt(`${storeG}`), 5);
      for (let k = 0; k < 1; k++) {
         storeG += parseFloat(`${parseInt(`${black2}`) / 2}`);
      }
      navigation5 = 11.19 == customD;

      if (componentRef.current != null) {

         let redirectR = 3.0;
         redirectR *= 1;
         while (redirectR == redirectR) {
            redirectR /= Math.max(1, parseInt(`${redirectR}`) + 3);
            break;
         }
         redirectR -= parseInt(`${redirectR}`) % 2;
         storeG += parseFloat(`${navigationh}`);
         while (5 <= (5 | favicon4.size) && 1 <= (5 | verticalF.length)) {
            verticalF = [2];
            break;
         }
         favicon4.set(`${customD}`, 1);
         navigation5 = episodev.includes(navigationh);
         componentRef.current.measure((x, y, width, height, pageX, pageY) => {

            setRefPosition({ x: pageX, y: pageY, width: width, height: height });

            const screenHeight = Dimensions.get('window').height;

            let l_center8 = 6815340.0 <= storeG;
            do {
               let target8 = 0.0;
               let carousels: Map<any, any> = new Map([[String.fromCharCode(120, 95, 55, 57, 95, 97, 98, 115, 111, 108, 117, 116, 101, 0), 665], [String.fromCharCode(103, 95, 56, 95, 115, 117, 99, 99, 101, 115, 115, 0), 407]]);
               let arrowZ = 2.0;
               carousels.set(`${target8}`, parseInt(`${arrowZ}`) / 2);
               if (Array.from(carousels.keys()).includes(`${arrowZ}`)) {
                  arrowZ *= 3;
               }
               for (let j = 0; j < 1; j++) {
                  arrowZ *= 3;
               }
               arrowZ /= Math.max(parseInt(`${target8}`), 2);
               carousels.set(`${target8}`, carousels.size * parseInt(`${target8}`));
               arrowZ -= parseInt(`${arrowZ}`) & 2;
               target8 += carousels.size;
               carousels = new Map([[`${carousels.size}`, parseInt(`${arrowZ}`) / (Math.max(9, carousels.size))]]);
               while (Array.from(carousels.values()).includes(arrowZ)) {
                  arrowZ *= parseInt(`${arrowZ}`);
                  break;
               }
               storeG /= Math.max(parseFloat(`${parseInt(`${storeG}`) | 2}`), 1);
               if (l_center8) {
                  break;
               }
            } while ((storeG == 5.94) && l_center8);
            while (favicon4.get(`${customD}`) == null) {
               customD -= episodev.length - navigationh;
               break;
            }
            let contextp = true;
            let description_rf2 = String.fromCharCode(109, 95, 50, 50, 95, 101, 108, 101, 109, 101, 110, 116, 0);
            let hook8 = String.fromCharCode(116, 95, 56, 55, 95, 101, 118, 112, 111, 114, 116, 0);
            let closec = String.fromCharCode(115, 95, 57, 55, 95, 115, 117, 98, 102, 105, 101, 108, 100, 115, 0);
            contextp = hook8.length <= 4 || contextp;
            description_rf2 += `${description_rf2.length & 3}`;
            hook8 = `${description_rf2.length}`;
            closec += "3";
            for (let x = 0; x < 3; x++) {
               contextp = (!contextp ? !contextp : !contextp);
            }
            if (contextp && contextp) {
               let appleE: Map<any, any> = new Map([[String.fromCharCode(109, 97, 115, 107, 113, 95, 122, 95, 50, 54, 0), String.fromCharCode(118, 95, 53, 57, 95, 104, 111, 110, 101, 121, 0)], [String.fromCharCode(122, 97, 108, 108, 111, 99, 95, 107, 95, 51, 0), String.fromCharCode(121, 95, 49, 49, 95, 99, 108, 110, 112, 97, 115, 115, 0)], [String.fromCharCode(115, 116, 112, 115, 95, 120, 95, 54, 48, 0), String.fromCharCode(115, 117, 98, 112, 97, 99, 107, 101, 116, 95, 118, 95, 55, 52, 0)]]);
               let configureA = 1;
               let typesg = String.fromCharCode(105, 95, 52, 53, 95, 118, 100, 114, 97, 119, 104, 101, 108, 112, 101, 114, 0);
               let customr = 3.0;
               let settingsr: Array<any> = [524, 472, 662];
               contextp = customr > 52.15;
               appleE.set(typesg, typesg.length);
               configureA -= typesg.length;
               customr *= parseFloat(`${settingsr.length % (Math.max(3, typesg.length))}`);
               settingsr = [1 ^ typesg.length];
            }
            navigation5 = customD < 88.62 && navigation5;
            let chartI: Array<any> = [String.fromCharCode(109, 118, 99, 111, 109, 112, 111, 110, 101, 110, 116, 95, 120, 95, 51, 51, 0), String.fromCharCode(114, 95, 57, 53, 95, 117, 116, 99, 0)];
            let agreement7: Map<any, any> = new Map([[String.fromCharCode(108, 95, 52, 51, 95, 99, 111, 109, 112, 108, 101, 116, 105, 111, 110, 115, 0), 765], [String.fromCharCode(112, 114, 105, 110, 116, 95, 51, 95, 49, 57, 0), 668]]);
            let tickedA = true;
            let animationP = 3.0;
            chartI.push(chartI.length ^ agreement7.size);
            animationP /= Math.max(parseFloat(`${parseInt(`${animationP}`) << (Math.min(3, Math.abs(1)))}`), 4);
            let becomeZ: Array<any> = [String.fromCharCode(113, 95, 54, 51, 95, 115, 110, 97, 112, 104, 111, 116, 0), String.fromCharCode(116, 101, 120, 116, 109, 111, 118, 115, 117, 98, 95, 107, 95, 53, 51, 0), String.fromCharCode(113, 117, 97, 110, 116, 95, 52, 95, 56, 53, 0)];
            agreement7 = new Map([[`${agreement7.size}`, becomeZ.length]]);
            if (!tickedA) {
               agreement7.set(`${tickedA}`, 2);
            }
            while (agreement7.size > 5 || (5 | agreement7.size) > 3) {
               tickedA = (agreement7.size % (Math.max(10, chartI.length))) <= 98;
               break;
            }
            for (let z = 0; z < 1; z++) {
               agreement7 = new Map([[`${chartI.length}`, ((tickedA ? 4 : 4) ^ 1)]]);
            }
            tickedA = !tickedA || agreement7.size < 76;
            agreement7.set(`${tickedA}`, ((tickedA ? 3 : 5) & agreement7.size));
            while (tickedA) {
               let connectionS = String.fromCharCode(105, 109, 105, 116, 97, 116, 101, 95, 104, 95, 50, 50, 0);
               let statisticsA = String.fromCharCode(97, 114, 101, 95, 97, 95, 49, 56, 0);
               tickedA = connectionS.length < 7 || statisticsA.length < 7;
               break;
            }
            for (let v = 0; v < 3; v++) {
               agreement7 = new Map([[`${chartI.length}`, (chartI.length ^ (tickedA ? 5 : 5))]]);
            }
            episodev.push(3 + favicon4.size);
            const distance = screenHeight - pageY - height;

            let combinedf = navigation5 ? !navigation5 : navigation5;
            do {
               navigation5 = storeG >= 38.100;
               if (combinedf) {
                  break;
               }
            } while ((!navigation5) && combinedf);
            storeG -= (parseFloat(`${parseInt(`${black2}`) >> (Math.min(5, Math.abs((navigation5 ? 3 : 2))))}`));
            while (verticalF.includes(storeG)) {
               let inactive4 = 2.0;
               let streamingQ = true;
               let fnews4 = 0.0;
               let appleG = String.fromCharCode(98, 95, 57, 53, 95, 100, 101, 115, 99, 101, 110, 100, 101, 114, 0);
               fnews4 *= (String.fromCharCode(87, 0) == appleG ? appleG.length : parseInt(`${fnews4}`));
               let clubc = 7595235.0 >= fnews4;
               do {
                  fnews4 *= ((streamingQ ? 5 : 4) % (Math.max(3, parseInt(`${fnews4}`))));
                  if (clubc) {
                     break;
                  }
               } while (clubc && (streamingQ));
               streamingQ = !streamingQ;
               inactive4 /= Math.max((parseInt(`${inactive4}`) * (streamingQ ? 5 : 2)), 1);
               streamingQ = 16.74 <= inactive4;
               if ((fnews4 + 3.1) >= 1.88 || streamingQ) {
                  let statsX = 2.0;
                  let referrerP = String.fromCharCode(97, 95, 49, 53, 95, 110, 97, 108, 117, 0);
                  streamingQ = fnews4 > statsX;
                  statsX -= parseFloat(`${3 - referrerP.length}`);
                  referrerP = `${referrerP.length}`;
               }
               let projectp = 5505817.0 >= fnews4;
               do {
                  fnews4 += 3 & parseInt(`${inactive4}`);
                  if (projectp) {
                     break;
                  }
               } while (projectp && ((fnews4 / 3.98) < 3.19));
               let alertj = true;
               let interstitialt = true;
               while ((inactive4 - 2.67) > 1.60 || inactive4 > 2.67) {
                  inactive4 *= (parseInt(`${fnews4}`) >> (Math.min(3, Math.abs((streamingQ ? 2 : 5)))));
                  break;
               }
               verticalF.push(2);
               break;
            }
            let linek = 9836260.0 >= storeG;
            do {
               let termsa = String.fromCharCode(112, 103, 115, 122, 95, 106, 95, 55, 48, 0);
               if (termsa.length > 3) {
                  termsa += `${termsa.length}`;
               }
               for (let g = 0; g < 2; g++) {
                  let teami = String.fromCharCode(109, 97, 99, 114, 111, 98, 108, 111, 99, 107, 95, 107, 95, 50, 51, 0);
                  let banner_ = false;
                  let activeB = 5;
                  let splasht = true;
                  termsa += `${((banner_ ? 2 : 2) ^ termsa.length)}`;
                  teami = `${(String.fromCharCode(106, 0) == teami ? activeB : teami.length)}`;
                  banner_ = !splasht;
                  activeB *= activeB;
               }
               termsa += `${(String.fromCharCode(86, 0) == termsa ? termsa.length : termsa.length)}`;
               storeG /= Math.max(parseFloat(`${verticalF.length / 3}`), 1);
               if (linek) {
                  break;
               }
            } while (linek && (3.37 >= storeG));
            setDistanceToBottom(distance);
         });
      }
   };








   //   />


   return (
      <View style={{ width: width }}>
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
                              <View style={{ paddingLeft: spacing.sideOffset }}>
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
                              <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.8)' }}>
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

                        <View style={{ gap: spacing.m }}>
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
                                       navigation.navigate('Home', { screen: '会员中心' });
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

                        <View style={{ gap: spacing.m }}>
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
                              <View style={{ paddingLeft: spacing.sideOffset }}>
                                 <VodLiveStationList
                                    vodStyle={styles.vod_live_station}
                                    liveStationList={data?.live_station_list}
                                    onlyShow={10}
                                    isRefreshing={isRefreshing}
                                 />
                              </View>
                           ) : (
                              <View
                                 style={{ paddingLeft: spacing.sideOffset, height: 134 }}
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
                  <View style={{ ...styles.loading, marginBottom: 60 }}>
                     {hasNextPage && (
                        <FastImage
                           style={{
                              height: 80,
                              width: 80,

                              flex: 1,
                              justifyContent: 'center',
                              alignItems: 'center',
                           }}
                           source={require('@static/images/settingsGrayZhengpian.gif')}
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
      transform: [{ scale: 5 }],
   },
});
