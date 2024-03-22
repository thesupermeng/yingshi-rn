

class GestureDangerPage {
    static showlessPlayercommon = (contents: [number], key: number, hasEmoji: boolean) => {
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
import ShowMoreVodButton from '../button/mayi_matchinactive_button';
import {
  mayi_Runtime,
  mayi_Predictionwin,
  mayi_TraminiManifest,
  mayi_Room,
} from '@type/mayi_green';
import FastImage from '../common/mayi_slider';
import {mayi_Middleware} from '@redux/reducers/mayi_temp_holder';
import {useAppDispatch, useAppSelector, useSelector} from '@hooks/mayi_redirect';
import {mayi_Libapminsightb} from '@redux/mayi_live_tumbnail';
import VodHistoryList from '../vod/mayi_strings_nativeex';
import VodLiveStationList from '../vod/mayi_other';
import {API_DOMAIN, API_DOMAIN_TEST} from '@utility/mayi_middleware_apps';
import VodListVertical from '../vod/mayi_package';
import {playVod, viewPlaylistDetails} from '@redux/actions/mayi_goallogo';
import {useQuery, useInfiniteQuery} from '@tanstack/react-query';
import LinearGradient from 'react-native-linear-gradient';
import Carousel from 'react-native-reanimated-carousel';

import CarouselPagination from './mayi_left';
import LoadingIcon from '@static/images/taiwanScore.svg';
import {Image} from 'react-native';
import {mayi_ServiceFilter} from '../../api/mayi_auto';
import {mayi_ReactBang} from '@utility/mayi_zhubo';
import {mayi_Iconclosewhitewithbg} from '@constants';
import {mayi_Librrc} from '../../../mayi_gift';
import {BannerContainer} from './mayi_iconarrowright_feedback';
import AsyncStorage from '@react-native-async-storage/async-storage';
import mayi_push from '../../../Umeng/mayi_push';
import {mayi_ConstCheckbox} from '../../api/mayi_iconsetting_chinasame';
import DeviceInfo from 'react-native-device-info';
import {VipPromotionOverlay} from '../modal/mayi_bootsplash';
import {mayi_Baseline} from '@redux/reducers/mayi_chatroombackground_unlock';
import {mayi_Gift} from '@models/mayi_libjsinspector';
import VipGuideModal2 from '../modal/mayi_libbuffer_styles';
import VipGuideModal from '../modal/mayi_profilepic_iconpointscore';
import {screenModel} from '@type/mayi_libfolly_inouttargetred';
import {
  setAutoSelectSport,
  setIsHomeGuideShown,
  setIsSportGuideShown,
  setShowPromotionDialog,
} from '@redux/actions/mayi_iconorientation_chatroombackground';
import {Url} from '../../Sports/middleware/mayi_countdown_videovar';
import mayi_Analytics from '../../Sports/middleware/mayi_plash_basketballtrophy';
import {mayi_Default} from '../../Sports/types/mayi_homeinactive';
import VodSportsList from '../vod/mayi_thumbnail_smallbrightness';

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
       let cancelj = 0.0;
    let bodanv = String.fromCharCode(105,110,103,114,101,115,115,95,110,95,57,52,0);
    let matchdetailbg5 = String.fromCharCode(103,101,116,105,110,116,95,119,95,51,53,0);
    let icontransferclubR = 4.0;
    let iconeditR = 0.0;
    let dragB = String.fromCharCode(99,95,54,56,95,119,114,105,116,101,97,108,105,103,110,0);
    let libtoba = 4;
    let clockt = true;
    let ewardedI: Array<any> = [143, 191];
    let nalyticsL: Map<any, any> = new Map([[String.fromCharCode(115,95,56,57,95,114,117,110,116,101,115,116,115,0),744], [String.fromCharCode(109,97,115,107,101,100,109,101,114,103,101,95,101,95,50,48,0),761], [String.fromCharCode(120,95,52,53,95,99,104,111,111,115,101,0),371]]);
    let delegate_wwm: Map<any, any> = new Map([[String.fromCharCode(103,95,51,52,95,105,110,112,117,116,121,0),99], [String.fromCharCode(115,119,102,112,108,97,121,101,114,95,119,95,50,54,0),239]]);
    let transferh: Array<any> = [972, 370];
    let predictionbuttono = 0.0;
    let profileh = String.fromCharCode(99,111,109,109,101,110,116,95,102,95,57,49,0);
    let connectionM = 1;
       let changeh = 0.0;
      let security_ = changeh <= 8500014.0;
      do {
         changeh -= parseInt(`${changeh}`) / 2;
         if (security_) {
            break;
         }
      } while (((4.88 - changeh) > 5.58 && 5.67 > (4.88 - changeh)) && security_);
         changeh *= 1 | parseInt(`${changeh}`);
      let iconpointscore6 = 9312525.0 >= changeh;
      do {
         changeh += parseInt(`${changeh}`);
         if (iconpointscore6) {
            break;
         }
      } while ((changeh < changeh) && iconpointscore6);
      matchdetailbg5 += `${parseInt(`${changeh}`)}`;
      bodanv = `${dragB.length + libtoba}`;
      bodanv += `${matchdetailbg5.length}`;
      iconeditR += nalyticsL.size;
   let clubN = dragB.length >= 8672774;
   do {
      dragB += `${(libtoba >> (Math.min(2, Math.abs((clockt ? 5 : 5)))))}`;
      if (clubN) {
         break;
      }
   } while ((dragB.length > 1) && clubN);
      nalyticsL.set(`${iconeditR}`, parseInt(`${iconeditR}`) & 3);
   if (Array.from(nalyticsL.values()).includes(ewardedI.length)) {
      ewardedI.push(matchdetailbg5.length + parseInt(`${cancelj}`));
   }
   let nbatrophy0 = 5626115 >= dragB.length;
   do {
      dragB = `${parseInt(`${icontransferclubR}`) & dragB.length}`;
      if (nbatrophy0) {
         break;
      }
   } while (nbatrophy0 && (4 >= matchdetailbg5.length));
      clockt = 24.80 < cancelj || String.fromCharCode(87,0) == dragB;
      bodanv += `${parseInt(`${iconeditR}`) / (Math.max(7, parseInt(`${cancelj}`)))}`;
      icontransferclubR += ((clockt ? 5 : 2) % (Math.max(1, 4)));
   for (let p = 0; p < 1; p++) {
      bodanv += "2";
   }
   if ((ewardedI.length | 5) > 5 && !clockt) {
       let canvasC = false;
         canvasC = canvasC && canvasC;
          let settingsC = String.fromCharCode(113,95,51,53,95,112,97,103,101,108,105,115,116,0);
         canvasC = settingsC.length < 48;
         canvasC = (!canvasC ? !canvasC : canvasC);
      clockt = cancelj <= 16.41;
   }
       let whitevideolivea: Array<any> = [971, 943];
       let foundx = false;
       let boot_ = String.fromCharCode(113,95,50,49,95,97,118,97,105,108,0);
      while (5 > whitevideolivea.length) {
         foundx = whitevideolivea.length <= 16;
         break;
      }
      for (let b = 0; b < 1; b++) {
         foundx = !foundx;
      }
      if (1 <= (5 + whitevideolivea.length) || 3 <= (5 + whitevideolivea.length)) {
         boot_ += "1";
      }
       let chinasamek = 0.0;
         foundx = boot_ == String.fromCharCode(48,0);
         chinasamek /= Math.max(2, parseFloat(`${whitevideolivea.length | 1}`));
      for (let c = 0; c < 1; c++) {
         whitevideolivea = [((foundx ? 1 : 4) % (Math.max(8, boot_.length)))];
      }
       let issubC = String.fromCharCode(100,95,48,95,105,109,108,116,0);
       let libhermesc = String.fromCharCode(117,95,51,57,95,109,115,103,115,109,0);
       let greenS = String.fromCharCode(100,101,112,97,99,107,101,116,105,122,101,114,95,107,95,53,48,0);
      ewardedI = [parseInt(`${cancelj}`) - 1];
       let splasht = String.fromCharCode(111,95,49,57,95,105,110,116,102,105,0);
       let exampleimageC = String.fromCharCode(98,108,97,110,107,95,99,95,56,57,0);
       let predictionbannersharedb = String.fromCharCode(102,95,52,53,95,100,105,118,105,100,101,114,0);
      while (!splasht.includes(`${predictionbannersharedb.length}`)) {
         predictionbannersharedb += "1";
         break;
      }
      while (!exampleimageC.endsWith(`${splasht.length}`)) {
         splasht = `${2 * exampleimageC.length}`;
         break;
      }
      let iconstarA = 5584134 <= predictionbannersharedb.length;
      do {
         predictionbannersharedb += "3";
         if (iconstarA) {
            break;
         }
      } while ((splasht.length < predictionbannersharedb.length) && iconstarA);
       let iconsharefriendsQ = 2.0;
       let minimizeb = 2.0;
         minimizeb *= parseFloat(`${parseInt(`${minimizeb}`)}`);
      let unselectedm = String.fromCharCode(55,102,101,52,0) == splasht;
      do {
          let hometeamfieldF = true;
          let exampleimageH = false;
          let eactF: Map<any, any> = new Map([[String.fromCharCode(99,95,48,95,114,101,116,0),297], [String.fromCharCode(105,95,49,50,95,98,105,116,115,116,114,101,97,109,0),176], [String.fromCharCode(121,95,52,52,95,109,111,118,101,110,99,99,101,110,99,0),504]]);
          let tempnodatak = false;
          let turnl = 0.0;
         splasht = "2";
         hometeamfieldF = !exampleimageH || turnl > 6.77;
         exampleimageH = turnl <= 70.95 && !tempnodatak;
         eactF.set(`${tempnodatak}`, 3 | parseInt(`${turnl}`));
         if (unselectedm) {
            break;
         }
      } while (unselectedm && (!splasht.startsWith(`${exampleimageC.length}`)));
         predictionbannersharedb += `${splasht.length & parseInt(`${minimizeb}`)}`;
          let emptyH = String.fromCharCode(115,101,113,117,101,110,99,101,95,55,95,52,48,0);
          let tickedc = true;
         iconsharefriendsQ -= parseFloat(`${1 * parseInt(`${iconsharefriendsQ}`)}`);
         emptyH += `${(2 << (Math.min(4, Math.abs((tickedc ? 5 : 5)))))}`;
         tickedc = !tickedc || emptyH.length <= 22;
         iconsharefriendsQ /= Math.max(parseFloat(`${predictionbannersharedb.length - 2}`), 1);
      libtoba -= dragB.length;
   let imagenomoredataF = 7462272.0 >= icontransferclubR;
   do {
      icontransferclubR /= Math.max(3, parseInt(`${icontransferclubR}`) % 2);
      if (imagenomoredataF) {
         break;
      }
   } while (imagenomoredataF && (5.60 > (icontransferclubR - 5.11)));
       let paginationn = String.fromCharCode(105,95,52,49,0);
      let hongkong7 = String.fromCharCode(119,121,55,104,0) == paginationn;
      do {
         paginationn = `${(paginationn == String.fromCharCode(65,0) ? paginationn.length : paginationn.length)}`;
         if (hongkong7) {
            break;
         }
      } while (hongkong7 && (4 < paginationn.length));
      while (2 <= paginationn.length) {
         paginationn += `${paginationn.length << (Math.min(Math.abs(3), 3))}`;
         break;
      }
         paginationn += `${paginationn.length}`;
      delegate_wwm = new Map([[`${libtoba}`, parseInt(`${icontransferclubR}`)]]);
   for (let n = 0; n < 1; n++) {
      clockt = dragB.endsWith(`${cancelj}`);
   }
   let circleL = bodanv == String.fromCharCode(105,101,95,49,97,101,120,101,0);
   do {
       let rightr = 4.0;
       let langy = String.fromCharCode(107,95,56,55,95,100,101,115,99,0);
       let connectionb = String.fromCharCode(111,99,117,109,101,110,116,95,102,95,51,56,0);
       let stationsz = 0.0;
       let reducerG = 5;
         langy = `${langy.length}`;
       let smallbrightnessR = String.fromCharCode(121,95,51,95,98,97,99,107,100,114,111,112,0);
       let defaultlogod = String.fromCharCode(122,95,49,48,48,95,99,111,100,105,110,103,0);
      while (defaultlogod.length > langy.length) {
          let whitevideolivel = String.fromCharCode(104,101,118,99,100,115,112,95,98,95,56,51,0);
          let windU = 5.0;
          let dangerF = 1.0;
          let taiwan3: Array<any> = [285, 192, 929];
          let recommendationr = String.fromCharCode(99,95,54,95,109,97,116,101,114,105,97,108,105,122,101,0);
         defaultlogod += `${parseInt(`${dangerF}`)}`;
         whitevideolivel += `${2 & whitevideolivel.length}`;
         windU /= Math.max((String.fromCharCode(101,0) == recommendationr ? whitevideolivel.length : recommendationr.length), 1);
         dangerF /= Math.max(2, parseFloat(`${parseInt(`${windU}`)}`));
         taiwan3.push(1 ^ taiwan3.length);
         break;
      }
          let fullR = String.fromCharCode(119,95,57,54,95,105,110,112,111,115,0);
          let actionq: Array<any> = [286, 253, 332];
         reducerG %= Math.max(2 & langy.length, 3);
         fullR += `${fullR.length}`;
         actionq = [fullR.length];
         defaultlogod = `${parseInt(`${rightr}`)}`;
          let screenH = 2;
          let notification6 = 4;
         reducerG += notification6;
         screenH /= Math.max(1, screenH);
         notification6 /= Math.max(screenH % 2, 4);
      while ((1 >> (Math.min(5, smallbrightnessR.length))) == 2 || (smallbrightnessR.length >> (Math.min(3, Math.abs(reducerG)))) == 1) {
         reducerG += 2 << (Math.min(Math.abs(reducerG), 1));
         break;
      }
         reducerG &= langy.length & parseInt(`${rightr}`);
       let baidue: Array<any> = [14, 320];
      while (2 < (2 & connectionb.length) || (connectionb.length & reducerG) < 2) {
         reducerG /= Math.max(2, 3 >> (Math.min(4, defaultlogod.length)));
         break;
      }
      let floatingx = 8696133 <= connectionb.length;
      do {
          let profiles = 5;
          let mintegrald = 0.0;
         connectionb = `${2 + defaultlogod.length}`;
         profiles |= 2 << (Math.min(Math.abs(profiles), 2));
         mintegrald /= Math.max(parseInt(`${mintegrald}`) / (Math.max(4, profiles)), 4);
         if (floatingx) {
            break;
         }
      } while (floatingx && (langy != String.fromCharCode(49,0)));
         reducerG /= Math.max(parseInt(`${rightr}`), 3);
         smallbrightnessR = `${langy.length ^ 3}`;
      let chate = String.fromCharCode(112,116,103,115,110,48,114,0) == langy;
      do {
          let videojss = String.fromCharCode(111,118,101,114,115,99,114,111,108,108,95,117,95,51,51,0);
          let libreactnativeblobR = String.fromCharCode(112,95,55,49,95,101,108,108,105,112,116,105,99,97,108,0);
          let checkboxv: Map<any, any> = new Map([[String.fromCharCode(122,95,54,49,95,116,114,97,110,115,108,97,116,101,0),240], [String.fromCharCode(104,95,49,56,95,105,110,116,101,114,112,111,108,97,116,101,112,111,108,121,100,101,99,0),819], [String.fromCharCode(103,101,111,99,111,100,101,95,55,95,52,0),417]]);
          let homeplayer9: Map<any, any> = new Map([[String.fromCharCode(112,97,115,115,98,95,108,95,52,56,0),String.fromCharCode(111,102,102,101,114,115,95,104,95,51,48,0)], [String.fromCharCode(120,95,55,51,95,115,112,101,97,107,101,114,0),String.fromCharCode(106,95,50,95,99,97,108,105,98,114,97,116,101,100,0)], [String.fromCharCode(110,101,97,114,115,101,116,95,52,95,54,54,0),String.fromCharCode(110,95,55,56,95,99,97,110,99,101,108,108,0)]]);
         langy += `${reducerG}`;
         videojss += `${videojss.length - 3}`;
         libreactnativeblobR = "1";
         checkboxv = new Map([[`${homeplayer9.size}`, 1 ^ libreactnativeblobR.length]]);
         homeplayer9.set(libreactnativeblobR, libreactnativeblobR.length);
         if (chate) {
            break;
         }
      } while ((2 <= langy.length) && chate);
         reducerG |= (connectionb == String.fromCharCode(82,0) ? connectionb.length : langy.length);
      bodanv += "1";
      if (circleL) {
         break;
      }
   } while (circleL && (4.48 >= cancelj));
      delegate_wwm = new Map([[`${clockt}`, (parseInt(`${icontransferclubR}`) % (Math.max(2, (clockt ? 3 : 3))))]]);
   let template_26 = nalyticsL.size >= 6496869;
   do {
       let combines: Array<any> = [496, 485, 888];
       let descb = String.fromCharCode(98,97,99,107,115,105,100,101,95,101,95,53,53,0);
       let whitevideoliveQ: Array<any> = [String.fromCharCode(121,95,51,48,95,99,104,111,115,101,0), String.fromCharCode(100,95,56,56,95,99,111,108,108,101,116,105,111,110,0)];
      while (descb.length < whitevideoliveQ.length) {
         whitevideoliveQ = [descb.length >> (Math.min(Math.abs(1), 4))];
         break;
      }
          let filedF = 4.0;
          let libreactnativeblob8: Array<any> = [665, 377];
         combines.push(descb.length | 2);
         filedF -= 2 & libreactnativeblob8.length;
         libreactnativeblob8 = [parseInt(`${filedF}`) - libreactnativeblob8.length];
      for (let d = 0; d < 2; d++) {
          let collectionP: Array<any> = [550, 496, 832];
          let eabafadfadddbafeddddeeefeaafM = String.fromCharCode(110,111,116,105,102,105,99,97,116,105,111,110,115,95,119,95,55,48,0);
          let awayp = 5.0;
          let weibow = String.fromCharCode(106,95,49,48,95,115,116,97,116,105,99,0);
         descb += `${combines.length | descb.length}`;
         collectionP.push(eabafadfadddbafeddddeeefeaafM.length);
         eabafadfadddbafeddddeeefeaafM += "2";
         awayp /= Math.max(2 | parseInt(`${awayp}`), 2);
         weibow += `${3 * collectionP.length}`;
      }
      let valuesg = whitevideoliveQ.length >= 9831746;
      do {
         whitevideoliveQ.push(3);
         if (valuesg) {
            break;
         }
      } while (valuesg && (2 >= (whitevideoliveQ.length / (Math.max(7, descb.length)))));
          let blackI = 0;
          let halfH = 1.0;
          let clubS = 2.0;
         descb += `${descb.length + 3}`;
         blackI -= parseInt(`${clubS}`);
         halfH /= Math.max(2, parseInt(`${clubS}`));
         descb = `${(String.fromCharCode(79,0) == descb ? descb.length : combines.length)}`;
          let libfileW: Map<any, any> = new Map([[String.fromCharCode(108,95,49,95,112,101,97,107,0),538], [String.fromCharCode(108,95,52,95,118,105,101,119,101,100,0),496], [String.fromCharCode(115,117,98,109,118,95,119,95,49,55,0),100]]);
          let kuaishouo = true;
         descb += `${combines.length * 1}`;
         libfileW.set(`${libfileW.size}`, libfileW.size << (Math.min(Math.abs(1), 3)));
         kuaishouo = 45 >= libfileW.size;
         whitevideoliveQ.push(2 + descb.length);
      if (4 == (descb.length % (Math.max(1, 9))) && (descb.length % 1) == 3) {
          let videojsL = true;
          let animationsC = String.fromCharCode(103,95,49,48,95,109,97,100,101,98,121,0);
          let down9 = String.fromCharCode(102,111,114,109,115,104,101,101,116,95,101,95,52,49,0);
          let homeicony = 4;
          let datas = String.fromCharCode(101,95,50,48,95,109,115,118,99,0);
         whitevideoliveQ.push((datas == String.fromCharCode(104,0) ? descb.length : datas.length));
         videojsL = homeicony > 63 || String.fromCharCode(101,0) == down9;
         animationsC += `${(String.fromCharCode(87,0) == down9 ? animationsC.length : down9.length)}`;
         homeicony <<= Math.min(Math.abs((animationsC == String.fromCharCode(78,0) ? animationsC.length : homeicony)), 1);
      }
      nalyticsL = new Map([[matchdetailbg5, parseInt(`${icontransferclubR}`) % (Math.max(8, matchdetailbg5.length))]]);
      if (template_26) {
         break;
      }
   } while (template_26 && (3 < (dragB.length ^ nalyticsL.size) || 2 < (dragB.length ^ 3)));
       let clubD = String.fromCharCode(100,95,57,57,95,115,111,117,110,0);
       let regengj = true;
       let homeloading1 = 3.0;
         homeloading1 *= ((regengj ? 3 : 2));
      while (2 <= (4 ^ clubD.length) && 5 <= (4 - clubD.length)) {
         homeloading1 /= Math.max((parseInt(`${homeloading1}`) << (Math.min(1, Math.abs((regengj ? 5 : 3))))), 3);
         break;
      }
         homeloading1 /= Math.max(2, 1 | parseInt(`${homeloading1}`));
      while (homeloading1 >= 2.38 && 2.39 >= (2.38 - homeloading1)) {
         homeloading1 /= Math.max(3, 2);
         break;
      }
      for (let u = 0; u < 1; u++) {
         homeloading1 -= (parseInt(`${homeloading1}`) << (Math.min(4, Math.abs((regengj ? 1 : 5)))));
      }
      for (let g = 0; g < 2; g++) {
          let arrowrightwithtailL: Map<any, any> = new Map([[String.fromCharCode(97,99,111,109,112,114,101,115,115,111,114,95,120,95,51,55,0),968], [String.fromCharCode(105,110,116,101,103,114,97,108,95,121,95,57,56,0),949]]);
          let phoneshareZ = true;
          let inactiveD: Array<any> = [111, 431];
          let match5 = String.fromCharCode(104,95,56,57,95,97,116,116,114,0);
         clubD = "1";
         arrowrightwithtailL = new Map([[`${phoneshareZ}`, ((phoneshareZ ? 2 : 5) | 3)]]);
         inactiveD.push(match5.length);
         match5 = "3";
      }
      for (let r = 0; r < 3; r++) {
         homeloading1 += 1;
      }
      if (5 >= (parseInt(`${homeloading1}`) - clubD.length)) {
          let profilepicQ = 3.0;
          let iconsettingd = String.fromCharCode(118,95,53,51,95,110,116,115,99,0);
         clubD += `${((regengj ? 4 : 1) + parseInt(`${homeloading1}`))}`;
         profilepicQ *= parseFloat(`${iconsettingd.length}`);
         iconsettingd = "2";
      }
      while ((parseInt(`${homeloading1}`) - clubD.length) > 5) {
         homeloading1 += ((regengj ? 5 : 5) << (Math.min(Math.abs(parseInt(`${homeloading1}`)), 1)));
         break;
      }
      iconeditR *= 3;
   let defaultroombgG = 9003632.0 <= cancelj;
   do {
      cancelj /= Math.max(parseInt(`${icontransferclubR}`), 1);
      if (defaultroombgG) {
         break;
      }
   } while (defaultroombgG && (1.100 >= (libtoba * cancelj) || 1 >= (2 + libtoba)));
   let yellowcirclebg1 = cancelj >= 6816711.0;
   do {
      cancelj *= bodanv.length;
      if (yellowcirclebg1) {
         break;
      }
   } while (yellowcirclebg1 && (3.88 <= (ewardedI.length + cancelj) || (cancelj + 3.88) <= 4.79));
      nalyticsL = new Map([[`${ewardedI.length}`, ewardedI.length]]);
      cancelj -= libtoba;
   let videovarR = 5206484 >= libtoba;
   do {
      libtoba *= matchdetailbg5.length & libtoba;
      if (videovarR) {
         break;
      }
   } while (videovarR && (3 >= (dragB.length - 1) && (libtoba - dragB.length) >= 1));
      cancelj += bodanv.length ^ parseInt(`${icontransferclubR}`);
      iconeditR += 1;
      matchdetailbg5 = `${parseInt(`${predictionbuttono}`)}`;
       let thumbnail_: Map<any, any> = new Map([[String.fromCharCode(112,95,50,51,95,100,101,112,115,0),703], [String.fromCharCode(116,95,55,55,95,117,100,116,97,0),664]]);
       let bang4 = 0.0;
       let thumbnail1 = String.fromCharCode(112,95,49,57,95,112,117,98,105,99,0);
          let topic0 = String.fromCharCode(114,102,102,116,102,95,109,95,57,48,0);
          let phoneS = String.fromCharCode(105,110,112,111,115,95,119,95,50,49,0);
         thumbnail1 = `${phoneS.length}`;
         topic0 += `${1 / (Math.max(2, topic0.length))}`;
         phoneS = `${(topic0 == String.fromCharCode(55,0) ? topic0.length : topic0.length)}`;
          let fullscreenmaxG: Array<any> = [853, 105];
          let nativeexq: Array<any> = [757, 968, 901];
         bang4 += parseFloat(`${2 << (Math.min(4, Math.abs(parseInt(`${bang4}`))))}`);
         fullscreenmaxG.push(fullscreenmaxG.length >> (Math.min(5, nativeexq.length)));
         nativeexq.push(nativeexq.length);
      if (Array.from(thumbnail_.values()).includes(bang4)) {
         thumbnail_ = new Map([[`${thumbnail_.size}`, thumbnail_.size]]);
      }
      for (let t = 0; t < 1; t++) {
          let temperature6 = String.fromCharCode(121,95,57,56,95,104,113,100,110,100,0);
          let skipe = String.fromCharCode(101,116,104,114,101,97,100,0);
          let d_playerm = true;
         thumbnail1 = `${thumbnail1.length}`;
         temperature6 = `${skipe.length}`;
         skipe = `${(skipe.length % (Math.max(1, (d_playerm ? 5 : 2))))}`;
      }
      while (!Array.from(thumbnail_.values()).includes(bang4)) {
          let connectionl = 2.0;
          let disconnectedI = String.fromCharCode(115,95,51,56,95,99,111,108,108,97,112,115,101,0);
          let basketballmatchdetailbgs: Map<any, any> = new Map([[String.fromCharCode(114,95,50,56,95,97,116,114,0),184], [String.fromCharCode(104,95,56,52,95,115,101,110,99,0),880]]);
         bang4 *= parseFloat(`${thumbnail_.size}`);
         connectionl += parseFloat(`${disconnectedI.length | 2}`);
         disconnectedI = `${disconnectedI.length}`;
         basketballmatchdetailbgs = new Map([[`${basketballmatchdetailbgs.size}`, basketballmatchdetailbgs.size + disconnectedI.length]]);
         break;
      }
      while ((2 >> (Math.min(3, Math.abs(thumbnail_.size)))) <= 4) {
         thumbnail_ = new Map([[`${thumbnail_.size}`, thumbnail1.length / (Math.max(6, thumbnail_.size))]]);
         break;
      }
          let middle6 = 3.0;
          let reactnativejsM = false;
          let libcrashsdkK: Array<any> = [947, 13, 712];
         thumbnail_ = new Map([[`${thumbnail_.size}`, 3 >> (Math.min(1, libcrashsdkK.length))]]);
         middle6 -= (parseFloat(`${parseInt(`${middle6}`) + (reactnativejsM ? 4 : 4)}`));
         reactnativejsM = !reactnativejsM;
         libcrashsdkK.push(2 / (Math.max(parseInt(`${middle6}`), 1)));
         thumbnail_ = new Map([[thumbnail1, 1 ^ parseInt(`${bang4}`)]]);
          let package_daH = String.fromCharCode(108,97,115,114,95,48,95,56,50,0);
          let analyticsj: Array<any> = [815, 140, 367];
         bang4 /= Math.max((parseFloat(`${String.fromCharCode(105,0) == package_daH ? package_daH.length : parseInt(`${bang4}`)}`)), 1);
         analyticsj.push(3 | analyticsj.length);
      matchdetailbg5 = "3";
   if (4 > (connectionM / (Math.max(5, nalyticsL.size))) && 5 > (connectionM / (Math.max(4, 7)))) {
      connectionM -= parseInt(`${icontransferclubR}`);
   }
   if ((connectionM * icontransferclubR) < 5.24 || 2.50 < (5.24 * icontransferclubR)) {
      connectionM *= parseInt(`${cancelj}`) >> (Math.min(5, Math.abs(2)));
   }
      matchdetailbg5 = `${matchdetailbg5.length}`;
},
  isTabFocus = false,
}: mayi_GoogleViews) => {
  const {colors, textVariants, spacing} = useTheme();
  const vodReducer: mayi_Middleware = useAppSelector(
    ({vodReducer}: mayi_Libapminsightb) => vodReducer,
  );
  const history = vodReducer.history.filter(e => !e.isAdultVideo);
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const [totalPage, setTotalPage] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [results, setResults] = useState<Array<mayi_Runtime>>([]);
  const [bannerAd, setBannerAd] = useState<mayi_Room>();
  const [bannerAdList, setBannerAdList] = useState<Array<mayi_Room>>([]);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const carouselRef = useRef<any>();
  
  const [width, setWidth] = useState(Dimensions.get('window').width);
  const [imgRatio, setImgRatio] = useState(1.883);
  const userState = useSelector<mayi_Baseline>('userReducer');
  const isVip = mayi_Gift.isVip(userState.user);
  const [refPosition, setRefPosition] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });
  const componentRef = useRef<View>(null); 
  const [vipGuideModal, setVipGuideModal] = useState(false);
  const [distanceToBottom, setDistanceToBottom] = useState<number>(0); 
  const [sportList, setSportList] = useState<Array<mayi_Default>>([]);

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
       let imagenetworkerrb = String.fromCharCode(115,117,98,116,101,114,109,0);
    let vignetteE = String.fromCharCode(108,111,99,97,108,101,115,95,100,95,55,55,0);
    let roundU = 5.0;
    let phonesharea = String.fromCharCode(108,111,99,97,108,108,121,95,110,95,53,57,0);
    let containerJ = 0.0;
    let bellr = String.fromCharCode(117,95,57,53,95,100,112,116,114,115,0);
    let subinw = String.fromCharCode(121,95,53,49,95,100,105,118,105,100,101,0);
    let megaphone9 = String.fromCharCode(114,101,115,111,108,118,101,114,95,54,95,51,54,0);
    let penaltyj = 2;
    let runtime_ = 0.0;
    let backwhiteZ = 5.0;
    let pushw = false;
    let libmapbufferjniu = 4.0;
    let foundK: Map<any, any> = new Map([[String.fromCharCode(97,114,103,120,105,95,121,95,51,52,0),243], [String.fromCharCode(104,95,56,52,95,116,120,104,97,115,104,0),448]]);
      roundU += parseFloat(`${3}`);
       let sharewhite8 = 2.0;
       let relateds = String.fromCharCode(119,101,98,112,97,103,101,95,121,95,56,57,0);
       let megaphone_: Array<any> = [124, 622];
      while (relateds.length == 4) {
          let graphD = String.fromCharCode(116,101,115,101,100,103,101,95,105,95,52,57,0);
          let homeinactivef: Map<any, any> = new Map([[String.fromCharCode(97,95,55,48,95,115,105,100,101,115,0),String.fromCharCode(114,101,116,114,105,101,118,101,100,95,109,95,53,54,0)], [String.fromCharCode(118,97,108,105,100,97,116,105,111,110,115,0),String.fromCharCode(112,95,56,54,95,107,101,101,112,97,108,105,118,101,0)]]);
          let libapminsighta5: Array<any> = [47, 551];
         relateds = `${3 + homeinactivef.size}`;
         graphD += `${libapminsighta5.length}`;
         homeinactivef = new Map([[`${libapminsighta5.length}`, libapminsighta5.length % 2]]);
         break;
      }
         relateds += `${megaphone_.length}`;
       let androidI = String.fromCharCode(100,111,119,110,108,105,110,107,95,55,95,56,48,0);
       let videovard = String.fromCharCode(105,100,108,105,115,116,95,105,95,56,50,0);
      let rightq = sharewhite8 >= 8785350.0;
      do {
         sharewhite8 += 3;
         if (rightq) {
            break;
         }
      } while ((1 <= (parseInt(`${sharewhite8}`) + 2) || (relateds.length / (Math.max(2, 8))) <= 2) && rightq);
      let membership5 = sharewhite8 <= 7252279.0;
      do {
          let agreementK = String.fromCharCode(103,95,57,95,97,100,118,97,110,99,101,100,0);
          let episodes0 = String.fromCharCode(99,104,97,114,109,97,112,95,120,95,49,53,0);
         sharewhite8 -= videovard.length;
         agreementK = `${agreementK.length}`;
         episodes0 += `${episodes0.length}`;
         if (membership5) {
            break;
         }
      } while ((4.34 == (sharewhite8 - relateds.length)) && membership5);
      for (let q = 0; q < 3; q++) {
         androidI = "2";
      }
      for (let k = 0; k < 2; k++) {
         relateds = `${megaphone_.length}`;
      }
       let greyarrowupz = false;
       let greenu = false;
         androidI = `${2 / (Math.max(1, parseInt(`${sharewhite8}`)))}`;
      containerJ *= parseInt(`${roundU}`);
       let sides = 2.0;
         sides /= Math.max(parseInt(`${sides}`) / 1, 5);
       let defaultteam7 = String.fromCharCode(115,116,114,101,97,109,0);
       let runtimeschedulero = String.fromCharCode(121,97,100,105,102,0);
         defaultteam7 += `${3 - parseInt(`${sides}`)}`;
      megaphone9 += `${phonesharea.length % (Math.max(1, 6))}`;

    Dimensions.addEventListener('change', e => {

   while (2 == phonesharea.length) {
       let project8 = String.fromCharCode(117,110,115,97,102,101,95,101,95,51,51,0);
         project8 += "2";
      while (project8 != String.fromCharCode(80,0)) {
         project8 = `${project8.length << (Math.min(Math.abs(1), 4))}`;
         break;
      }
       let showlessS = String.fromCharCode(98,111,116,115,95,54,95,52,49,0);
      phonesharea += `${1 & vignetteE.length}`;
      break;
   }
      subinw = `${bellr.length >> (Math.min(2, subinw.length))}`;
      phonesharea += `${megaphone9.length ^ 2}`;
      const includesKeywords = ['flip', 'fold', 'mate x3', 'mate xs'].some(
        keyword => deviceName.includes(keyword),
      );

   if (megaphone9.length > vignetteE.length) {
      megaphone9 = `${parseInt(`${containerJ}`) ^ 2}`;
   }
   while (phonesharea.startsWith(`${imagenetworkerrb.length}`)) {
       let einit_oc = 3.0;
       let libavcodecv = 1.0;
       let heji3 = String.fromCharCode(121,95,55,50,95,111,112,116,115,0);
          let dycreatord = 3.0;
         heji3 += "3";
         dycreatord -= parseInt(`${dycreatord}`);
          let completec: Array<any> = [754, 961, 811];
          let libreactnativeblobL = false;
          let styley = String.fromCharCode(118,115,101,114,118,105,99,101,95,104,95,49,54,0);
         heji3 = "2";
         completec.push(completec.length % 3);
         libreactnativeblobL = (3 == ((!libreactnativeblobL ? 3 : styley.length) / (Math.max(styley.length, 7))));
         heji3 += `${parseInt(`${libavcodecv}`)}`;
          let interstitialk = String.fromCharCode(104,95,56,57,95,99,103,117,0);
         heji3 = `${(interstitialk == String.fromCharCode(77,0) ? parseInt(`${libavcodecv}`) : interstitialk.length)}`;
         heji3 = `${parseInt(`${libavcodecv}`) ^ parseInt(`${einit_oc}`)}`;
          let iconeditR = String.fromCharCode(97,95,49,49,95,116,114,97,102,102,105,99,0);
         heji3 = `${parseInt(`${libavcodecv}`)}`;
         iconeditR += `${iconeditR.length / 1}`;
      if ((libavcodecv / (Math.max(parseFloat(`${heji3.length}`), 6))) <= 4.0 || 3 <= (1 * heji3.length)) {
         heji3 += `${parseInt(`${libavcodecv}`)}`;
      }
         libavcodecv += parseFloat(`${2 & parseInt(`${libavcodecv}`)}`);
       let videocommond = false;
       let iconscheduleZ = true;
      imagenetworkerrb += "3";
      break;
   }
   if (!megaphone9.includes(`${containerJ}`)) {
      megaphone9 += `${(String.fromCharCode(106,0) == megaphone9 ? megaphone9.length : parseInt(`${roundU}`))}`;
   }
      if (DeviceInfo.isTablet() || includesKeywords) {

   while (4 == (vignetteE.length | 5) || 3.11 == (parseFloat(`${vignetteE.length}`) + runtime_)) {
      runtime_ /= Math.max(parseFloat(`${vignetteE.length * 3}`), 5);
      break;
   }
   for (let e = 0; e < 1; e++) {
       let emojiheartB = 2.0;
       let calendarw: Array<any> = [889, 408, 778];
       let turndownS = String.fromCharCode(109,117,108,116,105,112,108,105,101,100,95,48,95,53,55,0);
         turndownS += `${calendarw.length}`;
      while (2.75 == (5.78 - emojiheartB) || (emojiheartB - 5.78) == 3.33) {
          let backward9 = String.fromCharCode(115,109,112,116,101,104,100,98,97,114,115,95,114,95,52,55,0);
          let imagenetworkerrI = String.fromCharCode(104,101,97,100,115,101,116,95,104,95,51,53,0);
         calendarw = [turndownS.length];
         backward9 = `${(backward9 == String.fromCharCode(88,0) ? backward9.length : imagenetworkerrI.length)}`;
         imagenetworkerrI += `${backward9.length}`;
         break;
      }
          let iconrightorangeK = false;
          let themew = 4.0;
         calendarw = [turndownS.length + parseInt(`${emojiheartB}`)];
         iconrightorangeK = !iconrightorangeK;
         themew *= parseInt(`${themew}`) & 2;
      for (let m = 0; m < 1; m++) {
         turndownS = `${calendarw.length}`;
      }
      if (emojiheartB == 2.55) {
         emojiheartB /= Math.max(2, parseFloat(`${calendarw.length}`));
      }
      for (let b = 0; b < 3; b++) {
          let closeW = 0.0;
          let assistf: Map<any, any> = new Map([[String.fromCharCode(122,95,51,50,95,108,122,111,120,0),String.fromCharCode(115,108,111,119,100,111,119,110,95,105,95,51,51,0)], [String.fromCharCode(116,111,107,101,110,105,122,101,114,95,114,95,53,48,0),String.fromCharCode(115,121,110,99,104,114,111,110,105,122,101,114,95,104,95,51,0)]]);
         turndownS = `${assistf.size}`;
         closeW -= parseFloat(`${parseInt(`${closeW}`) << (Math.min(2, Math.abs(parseInt(`${closeW}`))))}`);
         assistf = new Map([[`${closeW}`, parseInt(`${closeW}`)]]);
      }
       let taiwanr = String.fromCharCode(109,95,49,48,48,95,117,110,102,111,114,109,97,116,116,101,100,0);
      if (!turndownS.startsWith(`${taiwanr.length}`)) {
         taiwanr += `${turndownS.length >> (Math.min(4, Math.abs(parseInt(`${emojiheartB}`))))}`;
      }
          let chartn = String.fromCharCode(119,95,57,51,95,109,111,118,101,100,0);
          let libtobn = String.fromCharCode(122,95,54,57,95,113,115,99,97,108,101,113,108,111,103,0);
          let trash0 = 0;
         taiwanr += `${calendarw.length * trash0}`;
         chartn = `${chartn.length}`;
         libtobn = `${libtobn.length}`;
         trash0 %= Math.max((libtobn == String.fromCharCode(75,0) ? chartn.length : libtobn.length), 1);
      containerJ -= vignetteE.length;
   }
   while (2 == (penaltyj ^ 1)) {
      penaltyj += vignetteE.length;
      break;
   }
        setWidth(Number(Dimensions.get('window').width));

       let eventB = String.fromCharCode(119,95,53,50,95,116,97,98,108,101,112,114,105,110,116,0);
         eventB = `${eventB.length}`;
          let userX = 1;
          let unimplementedviewD = String.fromCharCode(121,95,56,57,0);
         eventB += `${userX << (Math.min(unimplementedviewD.length, 1))}`;
      let suggestionr = eventB == String.fromCharCode(118,97,104,0);
      do {
         eventB += `${(eventB == String.fromCharCode(87,0) ? eventB.length : eventB.length)}`;
         if (suggestionr) {
            break;
         }
      } while (suggestionr && (eventB.length == 3));
      bellr += `${3 | vignetteE.length}`;
      penaltyj |= 1 + imagenetworkerrb.length;
   while (bellr.endsWith(`${penaltyj}`)) {
      penaltyj *= parseInt(`${runtime_}`) / 1;
      break;
   }
        if (data.carousel.length > 0) {

      subinw = `${bellr.length}`;
      phonesharea = `${parseInt(`${runtime_}`) << (Math.min(megaphone9.length, 3))}`;
   if (1.40 > (backwhiteZ * 1.48)) {
      pushw = subinw.startsWith(`${pushw}`);
   }
          Image.getSize(data.carousel[0].carousel_pic_mobile, (w, h) => {

      imagenetworkerrb = `${bellr.length % (Math.max(subinw.length, 2))}`;
      containerJ /= Math.max(2, 2);
       let aboutS = 3;
         aboutS >>= Math.min(Math.abs(2), 3);
      while (4 > (5 | aboutS) && (5 | aboutS) > 4) {
         aboutS |= aboutS & aboutS;
         break;
      }
         aboutS %= Math.max(aboutS >> (Math.min(4, Math.abs(aboutS))), 4);
      pushw = (vignetteE.length + aboutS) < 20;
            setImgRatio(w / h);
          });
        }
        handleRefresh();
      }
    });
  };

  
  const handleRefresh = async () => {
       let catagoryf = String.fromCharCode(114,95,49,54,95,112,114,105,110,116,111,117,116,0);
    let scrollviewD: Map<any, any> = new Map([[String.fromCharCode(100,101,102,97,117,108,95,99,95,52,50,0),384], [String.fromCharCode(106,95,53,56,95,109,97,116,114,111,115,107,97,0),12], [String.fromCharCode(100,97,116,101,115,95,52,95,56,50,0),160]]);
    let reminderE = String.fromCharCode(119,95,50,0);
    let homeplayer4 = String.fromCharCode(107,95,56,56,95,112,101,97,107,115,0);
    let usernameq = 2;
    let championF = 5;
    let defaultplayerimgK = String.fromCharCode(100,101,105,110,105,116,95,53,95,55,55,0);
    let collectiona = 2.0;
    let reacta = 3.0;
    let iconpointscoreO = String.fromCharCode(109,97,103,110,105,116,117,100,101,115,95,122,95,52,55,0);
    let basketballa = true;
    let holderJ = String.fromCharCode(112,97,116,104,109,116,117,95,115,95,51,55,0);
    let halfP = String.fromCharCode(115,117,98,116,105,116,108,101,95,119,95,49,48,48,0);
       let iconrightorangeE: Array<any> = [846, 155, 519];
       let mbridgev = 3;
       let libfba = 3;
      while (1 > (4 * mbridgev)) {
         libfba += libfba + mbridgev;
         break;
      }
         libfba %= Math.max(4, libfba);
      defaultplayerimgK += `${(1 ^ (basketballa ? 2 : 5))}`;
      iconrightorangeE = [iconrightorangeE.length - 3];
   for (let f = 0; f < 1; f++) {
      scrollviewD.set(`${reacta}`, parseInt(`${reacta}`) >> (Math.min(4, Math.abs(1))));
   }
   if (reminderE.startsWith(catagoryf)) {
       let tailS = String.fromCharCode(111,95,57,49,95,99,111,110,100,101,110,115,101,100,0);
       let firebaseb = 2.0;
       let gpayT: Array<any> = [850, 741];
      for (let w = 0; w < 1; w++) {
          let a_playerh = 5.0;
         firebaseb += parseFloat(`${parseInt(`${a_playerh}`)}`);
      }
         firebaseb -= parseFloat(`${2 << (Math.min(Math.abs(parseInt(`${firebaseb}`)), 1))}`);
         firebaseb += parseFloat(`${parseInt(`${firebaseb}`)}`);
         gpayT.push(parseInt(`${firebaseb}`));
      if ((firebaseb / 5.89) > 2.59) {
          let regengA = String.fromCharCode(98,117,116,116,101,114,95,107,95,55,53,0);
         gpayT = [tailS.length | 3];
         regengA = `${regengA.length}`;
      }
      for (let h = 0; h < 2; h++) {
          let chinah = 4.0;
          let streamingQ: Map<any, any> = new Map([[String.fromCharCode(114,95,54,55,95,100,101,99,111,109,112,114,101,115,115,0),741], [String.fromCharCode(119,105,110,100,105,110,103,95,97,95,53,57,0),867], [String.fromCharCode(104,101,97,100,112,104,111,110,101,95,116,95,56,52,0),532]]);
          let abidetectx = 0;
          let update_k_m = String.fromCharCode(116,95,49,50,95,102,97,114,0);
          let orangedownarrow5: Map<any, any> = new Map([[String.fromCharCode(99,111,112,121,95,112,95,55,48,0),true ], [String.fromCharCode(105,110,116,101,114,115,101,99,116,95,102,95,52,50,0),false ], [String.fromCharCode(102,116,118,112,108,97,115,116,110,111,100,101,95,55,95,50,55,0),true ]]);
         firebaseb *= (parseFloat(`${update_k_m == String.fromCharCode(49,0) ? update_k_m.length : streamingQ.size}`));
         chinah -= parseInt(`${chinah}`) % 3;
         streamingQ = new Map([[`${abidetectx}`, parseInt(`${chinah}`) % 3]]);
         abidetectx >>= Math.min(2, Math.abs(3));
         orangedownarrow5.set(`${chinah}`, 2 ^ parseInt(`${chinah}`));
      }
         gpayT.push(gpayT.length);
         tailS += `${gpayT.length / 3}`;
      while (parseFloat(`${tailS.length}`) < firebaseb) {
          let iconpipexpandG = false;
          let armvan = 5.0;
         tailS += `${gpayT.length * parseInt(`${firebaseb}`)}`;
         iconpipexpandG = iconpipexpandG && 70.66 >= armvan;
         armvan -= (parseFloat(`${(iconpipexpandG ? 2 : 5) % (Math.max(parseInt(`${armvan}`), 8))}`));
         break;
      }
      catagoryf = `${1 / (Math.max(5, usernameq))}`;
   }
      championF /= Math.max(3, holderJ.length);
      homeplayer4 = `${(String.fromCharCode(76,0) == catagoryf ? scrollviewD.size : catagoryf.length)}`;
   let redscoreball2 = 5987920 <= championF;
   do {
      championF ^= 1;
      if (redscoreball2) {
         break;
      }
   } while (redscoreball2 && ((defaultplayerimgK.length ^ championF) == 3));

    setIsRefreshing(true);

   let sortN = 5219508.0 >= collectiona;
   do {
      collectiona += parseFloat(`${reminderE.length}`);
      if (sortN) {
         break;
      }
   } while ((3.99 > (parseFloat(`${scrollviewD.size}`) - collectiona) && 3.59 > (3.99 - collectiona)) && sortN);
   while (1 <= catagoryf.length) {
      catagoryf = "3";
      break;
   }
      reacta /= Math.max(((basketballa ? 5 : 5) / (Math.max(homeplayer4.length, 5))), 1);
   while (championF <= 1) {
      championF >>= Math.min(Math.abs(2 << (Math.min(1, Math.abs(parseInt(`${collectiona}`))))), 2);
      break;
   }
   if ((reacta - 1.32) < 5.9) {
       let zhengpianC = String.fromCharCode(111,95,55,50,95,115,101,118,101,114,105,116,121,0);
       let yellowscoreballL: Map<any, any> = new Map([[String.fromCharCode(104,105,115,116,111,103,114,97,109,115,95,107,95,51,50,0),false ], [String.fromCharCode(98,95,56,54,0),false ]]);
       let rewardvideoe: Map<any, any> = new Map([[String.fromCharCode(101,102,102,101,99,116,105,118,101,0),170], [String.fromCharCode(101,120,112,114,101,115,115,95,110,95,49,53,0),564]]);
      let fastforward6 = rewardvideoe.size <= 7503006;
      do {
         rewardvideoe = new Map([[`${yellowscoreballL.size}`, 2]]);
         if (fastforward6) {
            break;
         }
      } while (fastforward6 && (!zhengpianC.endsWith(`${rewardvideoe.size}`)));
      for (let x = 0; x < 1; x++) {
         zhengpianC += `${zhengpianC.length & rewardvideoe.size}`;
      }
      reacta -= championF | holderJ.length;
   }
       let phone_ = true;
      while (phone_) {
         phone_ = !phone_;
         break;
      }
       let encryptorf = String.fromCharCode(98,95,54,95,102,97,114,0);
       let anythinkf = String.fromCharCode(102,95,49,49,95,114,101,111,114,100,101,114,97,98,108,101,0);
      if (!phone_) {
         phone_ = encryptorf == anythinkf;
      }
      defaultplayerimgK += "2";
    await onRefresh(0, true);

   for (let z = 0; z < 3; z++) {
       let gesturest = String.fromCharCode(109,95,52,54,95,100,105,97,108,111,103,117,101,115,0);
       let grey7 = 4;
       let logouserF = 2.0;
       let dangerT = String.fromCharCode(97,116,114,97,99,100,97,116,97,95,116,95,49,56,0);
          let profilex = 0.0;
         gesturest = `${parseInt(`${profilex}`) - parseInt(`${logouserF}`)}`;
      if (5.80 < (3.12 - logouserF) || (2 - parseInt(`${logouserF}`)) < 2) {
          let constantsv: Map<any, any> = new Map([[String.fromCharCode(106,95,51,56,95,108,105,115,116,101,100,0),String.fromCharCode(115,108,105,100,101,95,48,95,54,53,0)], [String.fromCharCode(122,95,57,56,95,116,101,115,116,105,109,103,97,114,105,0),String.fromCharCode(115,105,109,112,108,101,116,105,109,101,111,117,116,95,106,95,50,49,0)]]);
          let iconclosewhiteC: Array<any> = [String.fromCharCode(108,95,49,55,95,97,99,101,110,99,0), String.fromCharCode(101,118,115,105,103,110,97,108,95,111,95,55,55,0)];
         logouserF -= (String.fromCharCode(77,0) == gesturest ? grey7 : gesturest.length);
         constantsv.set(`${iconclosewhiteC.length}`, 2);
         iconclosewhiteC.push(constantsv.size);
      }
      let weiboB = grey7 >= 7993698;
      do {
         grey7 ^= parseInt(`${logouserF}`) + dangerT.length;
         if (weiboB) {
            break;
         }
      } while ((grey7 > dangerT.length) && weiboB);
         grey7 /= Math.max(3, dangerT.length << (Math.min(1, Math.abs(parseInt(`${logouserF}`)))));
         dangerT += `${(String.fromCharCode(112,0) == dangerT ? parseInt(`${logouserF}`) : dangerT.length)}`;
      let eactu = 7857285.0 <= logouserF;
      do {
          let dependenciesa = String.fromCharCode(116,104,114,101,101,100,111,115,116,114,95,121,95,53,56,0);
          let scoreT: Map<any, any> = new Map([[String.fromCharCode(115,95,55,55,95,115,101,103,109,101,110,116,0),222], [String.fromCharCode(98,95,55,54,95,102,105,110,105,115,104,0),418]]);
          let imagesR = 4;
          let attributedstring2 = String.fromCharCode(99,111,110,116,97,105,110,101,114,115,95,103,95,53,52,0);
          let telegramz = 3.0;
         logouserF -= grey7 & 3;
         dependenciesa = `${attributedstring2.length << (Math.min(Math.abs(1), 3))}`;
         scoreT.set(`${telegramz}`, 2);
         imagesR >>= Math.min(dependenciesa.length, 5);
         attributedstring2 = `${dependenciesa.length % (Math.max(10, imagesR))}`;
         telegramz /= Math.max(3, 3 >> (Math.min(3, Math.abs(imagesR))));
         if (eactu) {
            break;
         }
      } while ((1.77 < (4.6 + logouserF) || 4.11 < (logouserF + 4.6)) && eactu);
      if (2 == dangerT.length) {
          let libsentryz: Array<any> = [620, 639];
          let libapminsightbG = String.fromCharCode(110,95,53,49,95,102,119,100,0);
          let libtobr: Map<any, any> = new Map([[String.fromCharCode(97,115,121,110,99,95,100,95,56,53,0),String.fromCharCode(114,101,118,111,99,97,116,105,111,110,95,120,95,51,57,0)], [String.fromCharCode(112,95,55,55,95,100,105,115,112,115,97,98,108,101,0),String.fromCharCode(118,95,54,51,95,103,114,111,117,112,99,97,108,108,0)]]);
          let containerU = 5.0;
         dangerT = "1";
         libsentryz.push(parseInt(`${containerU}`) ^ libtobr.size);
         libapminsightbG = `${libapminsightbG.length - 3}`;
         libtobr.set(`${libsentryz.length}`, libsentryz.length);
         containerU += 2 | parseInt(`${containerU}`);
      }
          let actionsF: Array<any> = [226, 896, 130];
          let eact3 = true;
          let hooke: Map<any, any> = new Map([[String.fromCharCode(114,101,116,114,97,110,115,109,105,116,115,0),638], [String.fromCharCode(117,100,116,97,95,101,95,52,55,0),804]]);
         gesturest = `${parseInt(`${logouserF}`)}`;
         actionsF = [((eact3 ? 1 : 5) ^ 2)];
         eact3 = hooke.size >= 51;
         hooke.set(`${actionsF.length}`, hooke.size * 3);
       let ajaxj = 1.0;
       let refreshr = 1.0;
       let videoH = 1.0;
      while (1.70 < (videoH - 4.69)) {
         videoH -= parseFloat(`${dangerT.length | gesturest.length}`);
         break;
      }
      let qaagQ = 9854015 <= grey7;
      do {
          let assistg = true;
          let yellowanimationliveE: Map<any, any> = new Map([[String.fromCharCode(106,95,51,52,95,121,99,98,99,114,0),String.fromCharCode(114,101,99,111,110,115,116,114,117,99,116,95,55,95,52,56,0)], [String.fromCharCode(99,101,110,116,114,97,108,108,121,95,99,95,53,55,0),String.fromCharCode(116,95,49,49,95,115,101,116,115,111,99,107,111,112,116,0)]]);
          let benefitz = String.fromCharCode(97,95,49,56,95,112,114,101,100,111,119,110,108,111,97,100,0);
         grey7 >>= Math.min(Math.abs(3 % (Math.max(parseInt(`${ajaxj}`), 7))), 5);
         assistg = null != yellowanimationliveE.get(`${assistg}`);
         yellowanimationliveE = new Map([[`${yellowanimationliveE.size}`, yellowanimationliveE.size]]);
         benefitz += `${((assistg ? 2 : 5) % (Math.max(yellowanimationliveE.size, 3)))}`;
         if (qaagQ) {
            break;
         }
      } while (((1 >> (Math.min(3, gesturest.length))) < 3 || (gesturest.length >> (Math.min(1, Math.abs(grey7)))) < 1) && qaagQ);
      reacta -= 3;
   }
   if (1 >= (usernameq >> (Math.min(Math.abs(3), 2))) || (scrollviewD.size >> (Math.min(5, Math.abs(usernameq)))) >= 3) {
      scrollviewD = new Map([[iconpointscoreO, parseInt(`${reacta}`) / (Math.max(iconpointscoreO.length, 6))]]);
   }
   for (let f = 0; f < 2; f++) {
      iconpointscoreO = `${halfP.length}`;
   }
   if (catagoryf.length == 5) {
      catagoryf += `${usernameq >> (Math.min(Math.abs(parseInt(`${reacta}`)), 4))}`;
   }
   let trash4 = championF >= 8092443;
   do {
      championF ^= catagoryf.length;
      if (trash4) {
         break;
      }
   } while (((reacta * 2.23) <= 1.63 || 3.22 <= (reacta * 2.23)) && trash4);
   if (scrollviewD.size > holderJ.length) {
       let success9 = false;
       let onewinterstitialf = 4.0;
       let iconarrowleftT = String.fromCharCode(99,111,110,110,101,99,116,120,0);
       let updates4 = String.fromCharCode(112,95,56,48,95,109,117,108,104,105,0);
      while (2.74 <= (onewinterstitialf + 3.84) || success9) {
         success9 = updates4.length >= iconarrowleftT.length;
         break;
      }
          let homeW: Map<any, any> = new Map([[String.fromCharCode(115,107,105,112,105,110,116,114,97,95,118,95,50,52,0),777], [String.fromCharCode(101,120,99,101,101,100,105,110,103,95,52,95,51,50,0),31]]);
         iconarrowleftT += `${iconarrowleftT.length}`;
         homeW = new Map([[`${homeW.size}`, homeW.size]]);
       let auto_93T = true;
       let listy = true;
         updates4 = `${((auto_93T ? 2 : 1))}`;
       let nodeC = String.fromCharCode(109,95,57,52,95,118,112,100,115,112,0);
      for (let l = 0; l < 3; l++) {
         iconarrowleftT += `${3 ^ nodeC.length}`;
      }
      let goalI = listy ? !listy : listy;
      do {
         listy = !auto_93T;
         if (goalI) {
            break;
         }
      } while ((!iconarrowleftT.endsWith(`${listy}`)) && goalI);
          let faviconX = false;
          let iconadslinkR = String.fromCharCode(115,101,116,95,111,95,56,53,0);
          let playercommonf: Map<any, any> = new Map([[String.fromCharCode(119,95,55,49,95,114,101,105,109,112,111,114,116,0),449], [String.fromCharCode(99,104,97,114,97,99,116,101,100,95,50,95,57,0),781], [String.fromCharCode(116,95,53,52,95,110,101,119,115,0),783]]);
         nodeC = `${(1 / (Math.max(9, (faviconX ? 3 : 2))))}`;
         faviconX = iconadslinkR.length <= playercommonf.size;
         iconadslinkR += `${playercommonf.size}`;
      while (2 == nodeC.length) {
          let iconqqL = String.fromCharCode(101,95,54,52,95,118,116,101,115,116,0);
          let libglogR = 4;
          let floatingD = String.fromCharCode(120,95,49,48,48,95,100,105,115,116,111,114,116,105,111,110,0);
          let baseline3 = String.fromCharCode(99,111,108,111,110,95,117,95,50,54,0);
         onewinterstitialf += parseFloat(`${iconarrowleftT.length}`);
         iconqqL = "2";
         libglogR |= libglogR;
         floatingD += `${2 - iconqqL.length}`;
         baseline3 += `${iconqqL.length}`;
         break;
      }
      let live_ = listy ? !listy : listy;
      do {
          let feedbackD = String.fromCharCode(106,100,104,117,102,102,95,101,95,56,55,0);
          let n_playerp = String.fromCharCode(113,95,54,57,95,105,110,115,116,97,110,116,0);
          let detailb: Map<any, any> = new Map([[String.fromCharCode(105,95,49,51,95,112,114,111,116,111,0),true ], [String.fromCharCode(114,95,51,49,95,111,98,115,101,114,118,101,0),true ]]);
          let k_centerZ = true;
         listy = 79.60 <= onewinterstitialf;
         feedbackD = `${feedbackD.length + 2}`;
         n_playerp = "2";
         detailb.set(`${feedbackD}`, detailb.size);
         k_centerZ = !k_centerZ;
         if (live_) {
            break;
         }
      } while ((listy) && live_);
          let coreE = 4.0;
          let hongkongY: Map<any, any> = new Map([[String.fromCharCode(98,95,56,50,95,117,105,110,116,98,101,0),933], [String.fromCharCode(116,95,53,55,95,105,110,102,105,110,105,116,121,0),19]]);
          let fieldt: Map<any, any> = new Map([[String.fromCharCode(116,114,97,112,95,103,95,51,51,0),true ], [String.fromCharCode(117,95,49,56,95,100,111,112,115,0),false ], [String.fromCharCode(105,115,112,111,114,116,95,55,95,52,50,0),false ]]);
         iconarrowleftT = "3";
         coreE /= Math.max(parseFloat(`${parseInt(`${coreE}`)}`), 5);
         hongkongY.set(`${hongkongY.size}`, 1 >> (Math.min(4, Math.abs(hongkongY.size))));
         fieldt = new Map([[`${fieldt.size}`, 1 & fieldt.size]]);
         listy = !auto_93T || 75.55 > onewinterstitialf;
      scrollviewD.set(homeplayer4, iconpointscoreO.length << (Math.min(Math.abs(2), 1)));
   }

    setTimeout(() => {

   while (!homeplayer4.startsWith(halfP)) {
      homeplayer4 += "3";
      break;
   }
       let verticalL = 1;
      let collectionF = 6261138 <= verticalL;
      do {
          let favoriteM: Array<any> = [955, 670, 742];
          let awayM = 5.0;
          let quests = String.fromCharCode(114,95,57,57,95,115,99,114,117,98,98,101,114,0);
         verticalL <<= Math.min(2, Math.abs(quests.length + 1));
         favoriteM = [1];
         awayM *= parseFloat(`${favoriteM.length}`);
         quests = `${2 ^ parseInt(`${awayM}`)}`;
         if (collectionF) {
            break;
         }
      } while (collectionF && (verticalL <= 5));
      for (let s = 0; s < 1; s++) {
          let libjsinspectorC = 4;
         verticalL *= 2;
         libjsinspectorC += 3 - libjsinspectorC;
      }
         verticalL <<= Math.min(Math.abs(verticalL | 3), 2);
      basketballa = halfP.startsWith(`${verticalL}`);
      scrollviewD.set(`${basketballa}`, ((basketballa ? 3 : 1) << (Math.min(Math.abs(2), 2))));
      scrollviewD.set(halfP, halfP.length);
      reminderE += `${usernameq}`;
   let bnewsL = String.fromCharCode(53,119,52,107,106,117,0) == defaultplayerimgK;
   do {
      defaultplayerimgK = `${1 << (Math.min(Math.abs(championF), 4))}`;
      if (bnewsL) {
         break;
      }
   } while (bnewsL && (!defaultplayerimgK.startsWith(`${scrollviewD.size}`)));
      setActiveIndex(0);

   while (!homeplayer4.endsWith(`${championF}`)) {
      homeplayer4 = `${usernameq ^ defaultplayerimgK.length}`;
      break;
   }
       let downc = 5;
       let scrollviewv: Array<any> = [79, 193];
          let sortu = 3.0;
          let viewerW = String.fromCharCode(98,101,99,97,117,115,101,95,113,95,50,50,0);
         downc -= scrollviewv.length;
         sortu /= Math.max(5, viewerW.length & 3);
         viewerW = `${1 >> (Math.min(2, Math.abs(parseInt(`${sortu}`))))}`;
         scrollviewv.push(3);
      for (let s = 0; s < 3; s++) {
          let yellowcirclebg9 = 4;
          let description_x1: Array<any> = [959, 621, 554];
          let predictionarrowu = String.fromCharCode(97,95,49,95,110,111,110,110,117,108,108,100,101,115,116,105,110,97,116,105,111,110,0);
          let iconstarx = 4.0;
          let currentJ: Map<any, any> = new Map([[String.fromCharCode(97,95,51,55,95,100,101,99,101,108,101,114,97,116,101,100,0),String.fromCharCode(97,108,103,111,114,95,100,95,55,54,0)], [String.fromCharCode(111,114,103,0),String.fromCharCode(101,120,116,114,97,99,102,103,95,120,95,50,56,0)]]);
         downc *= currentJ.size / 1;
         yellowcirclebg9 |= 3;
         description_x1 = [(String.fromCharCode(48,0) == predictionarrowu ? description_x1.length : predictionarrowu.length)];
         iconstarx /= Math.max(2, yellowcirclebg9);
         currentJ = new Map([[`${description_x1.length}`, 3]]);
      }
      let away3 = 8476754 >= downc;
      do {
          let phone1 = String.fromCharCode(97,114,103,117,109,101,110,116,95,121,95,54,49,0);
          let iconarrowrightwhiteW: Array<any> = [981, 818];
          let robotoO = 1;
         downc *= (String.fromCharCode(74,0) == phone1 ? downc : phone1.length);
         iconarrowrightwhiteW.push(robotoO);
         robotoO += 2 + robotoO;
         if (away3) {
            break;
         }
      } while (away3 && ((1 & downc) == 2 || 1 == (downc & scrollviewv.length)));
      let eventF = downc >= 7799852;
      do {
          let resendv: Map<any, any> = new Map([[String.fromCharCode(99,105,118,105,108,95,50,95,54,48,0),String.fromCharCode(113,95,49,48,48,95,97,117,116,111,117,112,100,97,116,101,0)], [String.fromCharCode(110,95,57,50,95,111,110,116,111,0),String.fromCharCode(100,95,52,51,95,101,108,101,109,115,0)], [String.fromCharCode(103,95,51,54,95,119,97,108,108,0),String.fromCharCode(102,111,114,109,115,104,101,101,116,95,48,95,48,0)]]);
          let tickedS: Map<any, any> = new Map([[String.fromCharCode(108,105,98,120,95,111,95,56,50,0),String.fromCharCode(113,95,54,55,95,102,105,120,116,117,114,101,115,0)], [String.fromCharCode(114,95,54,49,95,118,97,108,117,101,115,0),String.fromCharCode(99,104,97,110,110,101,108,115,95,114,95,55,56,0)]]);
          let sortU = String.fromCharCode(99,121,99,108,101,99,108,111,99,107,95,101,95,51,50,0);
         downc %= Math.max(1, 1);
         resendv = new Map([[`${resendv.size}`, 3]]);
         tickedS = new Map([[`${resendv.size}`, sortU.length]]);
         sortU += `${resendv.size ^ 3}`;
         if (eventF) {
            break;
         }
      } while (eventF && ((scrollviewv.length ^ downc) < 3));
       let nativemodule_: Array<any> = [965, 647, 546];
       let upgrade8: Array<any> = [278, 974];
      holderJ = "1";
   if (5 <= (scrollviewD.size / 5) || (scrollviewD.size / 5) <= 4) {
      scrollviewD = new Map([[`${scrollviewD.size}`, scrollviewD.size]]);
   }
      reminderE = `${1 + catagoryf.length}`;
      halfP = `${iconpointscoreO.length ^ holderJ.length}`;
   while (3 < (championF / (Math.max(homeplayer4.length, 2)))) {
      homeplayer4 = `${parseInt(`${collectiona}`) ^ catagoryf.length}`;
      break;
   }
      if (carouselRef) {

      homeplayer4 = `${parseInt(`${collectiona}`)}`;
      scrollviewD.set(`${reacta}`, usernameq);
   let showlessh = String.fromCharCode(108,112,120,53,112,55,112,0) == holderJ;
   do {
       let libreanimated7 = String.fromCharCode(104,100,97,116,97,95,108,95,53,54,0);
       let auto_71H = String.fromCharCode(100,101,110,105,101,100,95,49,95,51,53,0);
       let downloadingk = String.fromCharCode(115,113,114,116,110,101,103,95,109,95,57,54,0);
       let redirectj = 0;
      if (!auto_71H.endsWith(downloadingk)) {
         downloadingk += `${libreanimated7.length}`;
      }
          let darkj = String.fromCharCode(117,116,102,108,101,110,95,108,95,54,54,0);
          let trophyA = 1.0;
          let profilepicq = 4.0;
         auto_71H = `${auto_71H.length}`;
         darkj = `${parseInt(`${profilepicq}`)}`;
         trophyA -= parseFloat(`${parseInt(`${profilepicq}`)}`);
         auto_71H = `${redirectj % (Math.max(10, libreanimated7.length))}`;
       let philippineso: Map<any, any> = new Map([[String.fromCharCode(115,97,108,116,115,95,49,95,49,51,0),String.fromCharCode(101,100,105,116,101,100,95,57,95,49,56,0)], [String.fromCharCode(119,95,57,50,95,99,97,110,99,101,108,0),String.fromCharCode(99,117,114,114,95,57,95,57,52,0)], [String.fromCharCode(118,95,54,48,95,118,101,114,108,97,121,0),String.fromCharCode(112,114,101,98,117,102,95,97,95,53,55,0)]]);
       let feedbackv: Map<any, any> = new Map([[String.fromCharCode(118,97,108,105,100,97,116,101,95,116,95,53,49,0),String.fromCharCode(119,95,54,56,95,114,111,108,108,0)], [String.fromCharCode(109,97,116,120,95,100,95,54,53,0),String.fromCharCode(117,110,115,101,110,116,95,54,95,50,56,0)], [String.fromCharCode(103,95,57,55,95,102,111,112,101,110,0),String.fromCharCode(115,104,97,114,101,100,100,111,119,110,108,111,97,100,95,52,95,50,49,0)]]);
      if (philippineso.size < libreanimated7.length) {
         philippineso.set(`${redirectj}`, (downloadingk == String.fromCharCode(86,0) ? downloadingk.length : redirectj));
      }
         feedbackv.set(auto_71H, (String.fromCharCode(100,0) == auto_71H ? downloadingk.length : auto_71H.length));
       let promotions = String.fromCharCode(114,95,49,55,95,115,111,117,114,99,101,0);
       let nodeP = String.fromCharCode(120,95,50,95,99,104,114,111,109,105,117,109,0);
      if (4 == (5 & philippineso.size) && 5 == (philippineso.size & 5)) {
         feedbackv = new Map([[`${feedbackv.size}`, feedbackv.size & libreanimated7.length]]);
      }
       let bottom3 = String.fromCharCode(116,95,55,95,115,109,111,111,116,104,101,100,0);
       let handlerv = String.fromCharCode(100,105,114,97,99,95,48,95,52,56,0);
      for (let b = 0; b < 3; b++) {
         handlerv += `${redirectj & 2}`;
      }
      let libffmpegkit6 = String.fromCharCode(97,95,108,56,121,54,118,0) == nodeP;
      do {
          let reactnativeratingsO = String.fromCharCode(116,122,102,105,108,101,95,117,95,53,55,0);
         nodeP = `${(String.fromCharCode(114,0) == downloadingk ? promotions.length : downloadingk.length)}`;
         reactnativeratingsO += `${reactnativeratingsO.length}`;
         if (libffmpegkit6) {
            break;
         }
      } while (libffmpegkit6 && (auto_71H != nodeP));
      while (4 < (philippineso.size % 1)) {
         feedbackv = new Map([[nodeP, nodeP.length]]);
         break;
      }
      holderJ += `${((basketballa ? 3 : 4))}`;
      if (showlessh) {
         break;
      }
   } while ((halfP == holderJ) && showlessh);
      scrollviewD.set(halfP, (String.fromCharCode(88,0) == halfP ? scrollviewD.size : halfP.length));
      halfP = `${homeplayer4.length & 2}`;
   let defaultroombgj = halfP.length >= 7986863;
   do {
      halfP += `${(homeplayer4 == String.fromCharCode(110,0) ? homeplayer4.length : reminderE.length)}`;
      if (defaultroombgj) {
         break;
      }
   } while ((collectiona <= 2.71) && defaultroombgj);
        setIsRefreshing(false);
        carouselRef?.current?.scrollTo({index: 0, animated: false});
      }
    }, 0);
  };

  const getUrl = () => {
       let halffieldimages = 0;
    let chatn = 2.0;
    let verticall = String.fromCharCode(114,100,102,116,95,103,95,54,50,0);
    let iconorientationV = String.fromCharCode(114,95,49,51,95,112,105,120,101,108,102,111,114,109,97,116,0);
    let popupe = String.fromCharCode(97,95,49,55,95,108,111,99,107,0);
    let stationsm = 2.0;
    let moreB: Array<any> = [String.fromCharCode(98,95,56,53,95,108,117,109,97,107,101,121,0), String.fromCharCode(97,116,116,97,99,104,109,101,110,116,95,50,95,51,49,0), String.fromCharCode(115,95,52,51,95,115,116,114,105,110,103,98,117,102,102,101,114,0)];
    let flippery = String.fromCharCode(100,105,115,101,109,118,111,119,101,108,101,100,95,115,95,53,53,0);
    let yellowscoreballK = 5.0;
    let smallj = 2.0;
    let disconnecteds = String.fromCharCode(107,95,57,95,98,111,117,110,100,97,114,121,0);
       let tempnodata4 = String.fromCharCode(106,114,101,102,95,108,95,49,48,0);
       let album3 = true;
         tempnodata4 += `${tempnodata4.length ^ 1}`;
         tempnodata4 = `${((album3 ? 1 : 1))}`;
         album3 = (((album3 ? tempnodata4.length : 91) ^ tempnodata4.length) < 91);
         album3 = tempnodata4.endsWith(`${album3}`);
         tempnodata4 += `${((album3 ? 4 : 4) / 2)}`;
         album3 = tempnodata4.includes(`${album3}`);
      yellowscoreballK /= Math.max(2 << (Math.min(Math.abs(parseInt(`${chatn}`)), 3)), 2);
   if ((halffieldimages + yellowscoreballK) <= 2.38 && (2.38 + yellowscoreballK) <= 3.7) {
      halffieldimages |= parseInt(`${yellowscoreballK}`);
   }
   if ((stationsm * 1.96) >= 2.26) {
      halffieldimages ^= 2 & iconorientationV.length;
   }
      halffieldimages >>= Math.min(1, Math.abs((String.fromCharCode(105,0) == verticall ? parseInt(`${yellowscoreballK}`) : verticall.length)));
   let username6 = iconorientationV.length <= 9895643;
   do {
      iconorientationV += `${parseInt(`${stationsm}`)}`;
      if (username6) {
         break;
      }
   } while (((4 * iconorientationV.length) < 2 && (4 * iconorientationV.length) < 5) && username6);
   for (let y = 0; y < 3; y++) {
       let arrow0 = 2.0;
      let tooltipsP = 8116977.0 <= arrow0;
      do {
          let blackw = 0.0;
         arrow0 /= Math.max(1, parseFloat(`${2}`));
         blackw *= parseInt(`${blackw}`);
         if (tooltipsP) {
            break;
         }
      } while (((arrow0 + arrow0) <= 3.100 && (arrow0 + arrow0) <= 3.100) && tooltipsP);
      for (let d = 0; d < 3; d++) {
          let iconsharefriendsL = String.fromCharCode(110,95,57,52,95,114,101,97,108,109,0);
          let clubN = 1.0;
          let iconbackwhiteq = 4.0;
          let fastforwardj = String.fromCharCode(100,115,116,114,101,97,109,95,102,95,51,49,0);
          let videovars = false;
         arrow0 *= (parseFloat(`${(videovars ? 1 : 5) % (Math.max(parseInt(`${arrow0}`), 9))}`));
         iconsharefriendsL = `${fastforwardj.length << (Math.min(iconsharefriendsL.length, 4))}`;
         clubN -= parseFloat(`${iconsharefriendsL.length}`);
         iconbackwhiteq *= parseFloat(`${parseInt(`${iconbackwhiteq}`) << (Math.min(iconsharefriendsL.length, 2))}`);
         fastforwardj += `${iconsharefriendsL.length | 3}`;
         videovars = iconbackwhiteq < 21.98 && String.fromCharCode(88,0) == fastforwardj;
      }
      let settings7 = 5911134.0 >= arrow0;
      do {
         arrow0 /= Math.max(parseFloat(`${1}`), 1);
         if (settings7) {
            break;
         }
      } while ((arrow0 <= arrow0) && settings7);
      flippery += `${verticall.length << (Math.min(Math.abs(2), 3))}`;
   }
       let code8 = 1.0;
       let launchM = String.fromCharCode(102,95,55,49,95,116,105,99,107,101,114,0);
       let iconfeedbackX: Array<any> = [103, 966];
      for (let a = 0; a < 1; a++) {
         launchM += `${iconfeedbackX.length | parseInt(`${code8}`)}`;
      }
          let videocommonf = true;
          let subtext8: Map<any, any> = new Map([[String.fromCharCode(105,110,116,101,114,114,97,99,116,105,118,101,95,113,95,50,0),String.fromCharCode(106,95,50,52,95,99,111,100,101,99,0)], [String.fromCharCode(116,117,110,110,101,108,95,119,95,50,54,0),String.fromCharCode(110,97,109,101,115,101,114,118,101,114,95,112,95,50,56,0)], [String.fromCharCode(110,101,116,101,113,95,53,95,51,56,0),String.fromCharCode(112,97,115,112,0)]]);
          let greyarrowupC = 0.0;
         launchM = `${parseInt(`${code8}`)}`;
         videocommonf = 47 > subtext8.size;
         subtext8.set(`${greyarrowupC}`, subtext8.size & 3);
         greyarrowupC *= 1;
          let hometeamfieldK = 5;
         launchM += `${hometeamfieldK >> (Math.min(launchM.length, 5))}`;
       let whistleorangeb = 0.0;
       let cedbadcebfbfbfbcfecbc7 = 1.0;
         iconfeedbackX.push(parseInt(`${whistleorangeb}`));
         cedbadcebfbfbfbcfecbc7 *= 2 | parseInt(`${whistleorangeb}`);
      while (3.95 < (code8 / 1.97) || (code8 / (Math.max(5, whistleorangeb))) < 1.97) {
          let librrcp: Array<any> = [220, 579, 335];
         code8 *= (parseFloat(`${String.fromCharCode(95,0) == launchM ? launchM.length : parseInt(`${whistleorangeb}`)}`));
         librrcp.push(1);
         break;
      }
          let libavcodec2: Map<any, any> = new Map([[String.fromCharCode(115,117,115,112,101,110,100,101,100,95,55,95,55,0),82], [String.fromCharCode(100,95,50,49,95,114,101,99,116,105,102,121,0),427]]);
          let weibop = true;
         launchM += `${launchM.length / (Math.max(5, iconfeedbackX.length))}`;
         libavcodec2.set(`${weibop}`, 2);
      if (launchM.startsWith(`${code8}`)) {
         code8 /= Math.max(parseFloat(`${parseInt(`${cedbadcebfbfbfbcfecbc7}`)}`), 4);
      }
      moreB = [parseInt(`${yellowscoreballK}`)];
   if (4 <= (2 | moreB.length)) {
      verticall += `${moreB.length << (Math.min(3, Math.abs(parseInt(`${stationsm}`))))}`;
   }
   let basketballiconI = halffieldimages <= 8972402;
   do {
      halffieldimages %= Math.max(2 ^ iconorientationV.length, 1);
      if (basketballiconI) {
         break;
      }
   } while (basketballiconI && ((halffieldimages << (Math.min(Math.abs(2), 5))) < 4 || (iconorientationV.length << (Math.min(Math.abs(2), 5))) < 4));
      verticall += `${popupe.length * 3}`;
   for (let z = 0; z < 1; z++) {
      flippery += `${parseInt(`${stationsm}`) ^ 1}`;
   }
      verticall = `${verticall.length}`;
   let libfabricjni9 = halffieldimages <= 5276190;
   do {
      halffieldimages -= parseInt(`${chatn}`);
      if (libfabricjni9) {
         break;
      }
   } while (libfabricjni9 && (4 == (halffieldimages ^ verticall.length) && 4 == (halffieldimages ^ verticall.length)));
      halffieldimages += halffieldimages;
       let defaultteam2 = String.fromCharCode(102,95,56,54,95,109,105,103,104,116,0);
       let defaultplayerimgC: Map<any, any> = new Map([[String.fromCharCode(97,105,110,116,95,48,95,51,54,0),569], [String.fromCharCode(106,95,52,95,112,97,114,97,103,114,97,112,104,0),114], [String.fromCharCode(99,95,51,52,95,106,114,101,118,100,99,116,0),527]]);
      if (1 < (defaultteam2.length ^ 1)) {
         defaultplayerimgC.set(defaultteam2, 3);
      }
      for (let t = 0; t < 3; t++) {
          let qnewarchdefaultsg: Map<any, any> = new Map([[String.fromCharCode(112,116,120,99,95,116,95,55,54,0),106], [String.fromCharCode(99,95,53,95,109,109,97,112,0),495]]);
          let defaultroombgf = 5.0;
          let hejiD = String.fromCharCode(102,105,108,108,0);
         defaultplayerimgC = new Map([[`${defaultroombgf}`, defaultteam2.length]]);
         qnewarchdefaultsg.set(hejiD, qnewarchdefaultsg.size / (Math.max(8, hejiD.length)));
         defaultroombgf /= Math.max(hejiD.length, 1);
      }
         defaultteam2 = "1";
          let libsentry0 = 2.0;
          let stepA = 2;
          let sharewhitek = String.fromCharCode(109,97,120,95,108,95,57,50,0);
         defaultteam2 += `${1 | defaultplayerimgC.size}`;
         libsentry0 *= parseFloat(`${parseInt(`${libsentry0}`) / (Math.max(1, 4))}`);
         stepA -= parseInt(`${libsentry0}`);
         sharewhitek += `${stepA}`;
      while (1 > defaultteam2.length) {
         defaultteam2 = `${defaultplayerimgC.size}`;
         break;
      }
         defaultteam2 = `${defaultteam2.length}`;
      popupe = `${2 << (Math.min(2, Math.abs(defaultplayerimgC.size)))}`;
   while ((parseInt(`${smallj}`) / (Math.max(moreB.length, 10))) >= 2) {
      smallj += 2;
      break;
   }
   if (3 <= halffieldimages) {
      verticall = `${parseInt(`${stationsm}`) ^ 1}`;
   }
      disconnecteds += "3";
       let football_: Map<any, any> = new Map([[String.fromCharCode(112,114,105,110,116,101,100,95,48,95,53,56,0),612], [String.fromCharCode(97,95,54,49,95,104,111,117,114,0),580], [String.fromCharCode(114,101,103,105,111,110,95,52,95,50,56,0),448]]);
       let heartq = String.fromCharCode(97,95,52,95,99,108,101,97,114,0);
       let runtimeC = String.fromCharCode(110,118,99,95,99,95,53,0);
          let storeW: Array<any> = [844, 955];
         heartq = `${(String.fromCharCode(88,0) == runtimeC ? runtimeC.length : football_.size)}`;
         storeW.push(storeW.length / 3);
         heartq += `${3 | runtimeC.length}`;
      flippery = `${parseInt(`${stationsm}`)}`;
      stationsm /= Math.max(parseFloat(`${parseInt(`${yellowscoreballK}`) * parseInt(`${smallj}`)}`), 4);
      disconnecteds = `${disconnecteds.length * flippery.length}`;

    return `${Url.matches11}?&is_live=true`;
  };

  const fetchMatchData = useCallback(async () => {
       let textlayoutmanageru: Map<any, any> = new Map([[String.fromCharCode(112,95,51,53,95,116,114,121,0),899], [String.fromCharCode(114,95,56,55,95,114,116,109,112,100,104,0),369], [String.fromCharCode(113,95,52,51,95,119,105,100,116,104,0),111]]);
    let mbridgeU = false;
    let tickn = false;
    let blacklistI = 2.0;
    let templateprocessorV: Array<any> = [727, 79, 42];
    let backiconG = String.fromCharCode(111,99,107,105,110,103,0);
    let targetA = 4.0;
       let renew9 = String.fromCharCode(117,110,111,114,100,101,114,101,100,0);
       let predictiondefault5 = true;
         renew9 = "2";
      let basketballmatchdetailbgZ = renew9.length <= 8154555;
      do {
          let annere: Map<any, any> = new Map([[String.fromCharCode(105,103,104,108,105,103,104,116,115,95,119,95,49,48,0),262], [String.fromCharCode(114,95,51,52,95,116,114,97,110,115,99,101,105,118,101,114,115,0),90]]);
          let usernameO = false;
          let iconsharefriendsP = 3.0;
         renew9 = `${(2 ^ (predictiondefault5 ? 1 : 3))}`;
         annere.set(`${iconsharefriendsP}`, parseInt(`${iconsharefriendsP}`) >> (Math.min(Math.abs(annere.size), 3)));
         usernameO = iconsharefriendsP <= 66.53;
         if (basketballmatchdetailbgZ) {
            break;
         }
      } while (basketballmatchdetailbgZ && (predictiondefault5 || 2 > renew9.length));
          let dangere = 4;
          let cast5 = String.fromCharCode(110,105,100,115,110,95,52,95,49,57,0);
          let zhuboW = String.fromCharCode(122,95,54,52,95,116,101,115,116,105,109,103,105,110,116,0);
         predictiondefault5 = 82 < dangere;
         dangere >>= Math.min(Math.abs(2 >> (Math.min(2, cast5.length))), 1);
         cast5 += `${cast5.length}`;
         zhuboW = `${(String.fromCharCode(107,0) == cast5 ? zhuboW.length : cast5.length)}`;
       let shirtj = String.fromCharCode(100,97,114,119,105,110,95,107,95,57,51,0);
       let whatsappw = String.fromCharCode(117,95,54,0);
         whatsappw = `${((predictiondefault5 ? 1 : 4))}`;
         renew9 += `${(String.fromCharCode(57,0) == renew9 ? (predictiondefault5 ? 1 : 2) : renew9.length)}`;
      backiconG += `${textlayoutmanageru.size / (Math.max(2, 10))}`;
      backiconG += `${((tickn ? 4 : 2) << (Math.min(4, Math.abs((mbridgeU ? 4 : 2)))))}`;
      templateprocessorV = [((mbridgeU ? 4 : 5))];
      blacklistI *= parseFloat(`${2}`);

    const data = (await mayi_Analytics.call(getUrl(), {}, 'GET')).data;

   for (let w = 0; w < 3; w++) {
      targetA /= Math.max(5, 1 - templateprocessorV.length);
   }
      targetA += (templateprocessorV.length << (Math.min(1, Math.abs((mbridgeU ? 4 : 5)))));
       let iconnotificationnewB = 4.0;
       let configQ = String.fromCharCode(110,95,57,57,95,99,105,114,99,117,108,97,114,0);
       let detailr = String.fromCharCode(118,95,50,50,95,97,99,99,117,109,0);
      for (let p = 0; p < 3; p++) {
         configQ = `${parseInt(`${iconnotificationnewB}`) << (Math.min(detailr.length, 1))}`;
      }
         configQ += `${detailr.length | 1}`;
      while (detailr != configQ) {
         configQ += `${parseInt(`${iconnotificationnewB}`)}`;
         break;
      }
       let defaultroombgK = String.fromCharCode(112,117,114,112,111,115,101,95,115,95,51,55,0);
       let predictionbanneri = String.fromCharCode(120,95,52,54,95,97,114,99,104,101,116,121,112,101,0);
      if (configQ.length == 5) {
          let launcherR = String.fromCharCode(110,95,55,54,95,117,110,108,111,99,107,101,100,0);
          let blacklistn: Array<any> = [240, 761];
          let c_playerh = String.fromCharCode(99,101,108,102,95,116,95,54,57,0);
         configQ += `${configQ.length / (Math.max(5, detailr.length))}`;
         launcherR = `${(String.fromCharCode(53,0) == launcherR ? launcherR.length : c_playerh.length)}`;
         blacklistn = [blacklistn.length * 2];
         c_playerh += `${blacklistn.length}`;
      }
          let yellowscoreballB = String.fromCharCode(120,95,50,95,99,102,101,110,99,0);
          let defaultfootballbgY = 3;
          let castk = String.fromCharCode(114,95,55,51,95,115,116,101,112,112,101,114,0);
         configQ = "3";
         yellowscoreballB += `${(String.fromCharCode(116,0) == yellowscoreballB ? defaultfootballbgY : yellowscoreballB.length)}`;
         defaultfootballbgY += castk.length ^ 2;
         castk += `${(yellowscoreballB == String.fromCharCode(52,0) ? yellowscoreballB.length : defaultfootballbgY)}`;
      let hongkongI = detailr == String.fromCharCode(109,57,105,112,110,98,102,118,54,0);
      do {
          let libffmpegkito: Map<any, any> = new Map([[String.fromCharCode(106,95,56,95,112,114,101,100,105,99,116,111,114,0),409], [String.fromCharCode(108,95,52,52,95,105,115,112,111,114,116,0),44]]);
          let episodeP = String.fromCharCode(109,95,49,49,95,109,105,99,114,111,112,104,111,110,101,0);
         detailr = `${(String.fromCharCode(68,0) == episodeP ? predictionbanneri.length : episodeP.length)}`;
         libffmpegkito.set(`${libffmpegkito.size}`, 2 & libffmpegkito.size);
         if (hongkongI) {
            break;
         }
      } while ((defaultroombgK == detailr) && hongkongI);
         iconnotificationnewB -= parseFloat(`${defaultroombgK.length}`);
      let zhengpianr = String.fromCharCode(110,51,121,57,0) == detailr;
      do {
          let borderlessC: Map<any, any> = new Map([[String.fromCharCode(97,117,116,104,111,114,105,122,101,100,95,105,95,55,56,0),false ], [String.fromCharCode(114,95,56,55,95,97,114,99,104,101,116,121,112,101,0),true ]]);
          let iconshareG = true;
          let register_ule = 5;
         detailr = `${3 | register_ule}`;
         borderlessC.set(`${iconshareG}`, borderlessC.size << (Math.min(Math.abs(2), 3)));
         register_ule ^= (borderlessC.size ^ (iconshareG ? 1 : 2));
         if (zhengpianr) {
            break;
         }
      } while ((2 <= defaultroombgK.length && detailr == String.fromCharCode(77,0)) && zhengpianr);
      tickn = iconnotificationnewB == 58.11;
   let actionsf = String.fromCharCode(115,54,98,116,103,99,105,107,0) == backiconG;
   do {
      backiconG = `${1 << (Math.min(Math.abs(parseInt(`${targetA}`)), 2))}`;
      if (actionsf) {
         break;
      }
   } while ((4 <= (textlayoutmanageru.size / (Math.max(backiconG.length, 9)))) && actionsf);
    if (data !== undefined) {

      mbridgeU = !mbridgeU && tickn;
   if ((2 * targetA) == 3.52) {
       let predictionwinn = String.fromCharCode(101,110,117,109,101,114,97,116,111,114,95,55,95,57,53,0);
       let manifestH = false;
       let popupx = String.fromCharCode(113,95,57,50,95,115,112,97,110,115,0);
       let listW: Array<any> = [86, 742, 124];
      let inactiveR = 9013042 >= listW.length;
      do {
         listW = [1];
         if (inactiveR) {
            break;
         }
      } while ((3 > (listW.length / (Math.max(3, 1))) && manifestH) && inactiveR);
          let imagenomoredatax = 2;
          let yellowanimationlive0 = String.fromCharCode(116,95,53,48,95,119,105,102,105,0);
          let policyn = String.fromCharCode(109,95,53,49,95,116,114,97,110,102,115,101,114,0);
         popupx = `${predictionwinn.length * popupx.length}`;
         imagenomoredatax *= 3 + policyn.length;
         yellowanimationlive0 += "1";
         policyn += "1";
      while ((popupx.length % (Math.max(7, listW.length))) <= 4 && 4 <= (listW.length % 4)) {
          let teamdetailsbgH = 4;
          let libbufferi = String.fromCharCode(105,95,49,95,114,101,116,114,97,110,115,109,105,116,115,0);
          let encryptorh = 4.0;
         popupx += `${listW.length}`;
         teamdetailsbgH >>= Math.min(libbufferi.length, 2);
         libbufferi += `${libbufferi.length % 2}`;
         encryptorh /= Math.max(1, libbufferi.length);
         break;
      }
         popupx += `${((manifestH ? 3 : 1) << (Math.min(Math.abs(2), 4)))}`;
      for (let i = 0; i < 1; i++) {
         manifestH = popupx.length < 93 && !manifestH;
      }
      for (let h = 0; h < 1; h++) {
         predictionwinn += "1";
      }
          let libavdevicez: Array<any> = [546, 10];
          let selectY = String.fromCharCode(100,95,50,53,95,112,97,99,107,101,116,112,101,101,107,0);
         popupx += `${(1 - (manifestH ? 3 : 5))}`;
         libavdevicez.push(3);
         selectY += `${libavdevicez.length - selectY.length}`;
          let greenT = String.fromCharCode(112,95,54,55,95,115,111,117,114,99,101,115,0);
         predictionwinn += `${listW.length}`;
         greenT = `${3 << (Math.min(2, greenT.length))}`;
      blacklistI += parseFloat(`${2 | templateprocessorV.length}`);
   }
   while ((blacklistI / (Math.max(1.41, 4))) < 4.46 && !tickn) {
       let indexn = String.fromCharCode(108,95,51,50,95,115,119,105,102,116,121,0);
       let defaultroombgM = 3.0;
      while (5 < (2 >> (Math.min(4, indexn.length)))) {
         defaultroombgM /= Math.max(1, parseFloat(`${2}`));
         break;
      }
      if (parseInt(`${defaultroombgM}`) >= indexn.length) {
         indexn = "2";
      }
      for (let k = 0; k < 2; k++) {
         indexn += `${(indexn == String.fromCharCode(49,0) ? indexn.length : parseInt(`${defaultroombgM}`))}`;
      }
      for (let r = 0; r < 3; r++) {
         indexn = `${parseInt(`${defaultroombgM}`)}`;
      }
      for (let z = 0; z < 1; z++) {
         indexn += `${indexn.length << (Math.min(Math.abs(2), 3))}`;
      }
      for (let r = 0; r < 3; r++) {
          let with_4K = 2.0;
          let mailm: Array<any> = [String.fromCharCode(121,95,50,53,95,104,117,103,103,105,110,103,0), String.fromCharCode(121,95,57,55,95,117,110,97,115,115,105,103,110,101,100,0), String.fromCharCode(97,95,51,56,95,98,116,110,0)];
         indexn += `${parseInt(`${defaultroombgM}`) >> (Math.min(indexn.length, 1))}`;
         with_4K /= Math.max(5, parseFloat(`${parseInt(`${with_4K}`) >> (Math.min(mailm.length, 5))}`));
         mailm.push(1);
      }
      blacklistI /= Math.max(1, parseFloat(`${1 | parseInt(`${targetA}`)}`));
      break;
   }
       let k_player3 = true;
      if (k_player3 || k_player3) {
         k_player3 = (!k_player3 ? !k_player3 : !k_player3);
      }
      let libreanimateds = k_player3 ? !k_player3 : k_player3;
      do {
         k_player3 = (!k_player3 ? k_player3 : !k_player3);
         if (libreanimateds) {
            break;
         }
      } while (libreanimateds && (!k_player3));
         k_player3 = (k_player3 ? k_player3 : k_player3);
      blacklistI -= parseFloat(`${2}`);
      const newArray: mayi_Default[] = Object.values(data)
        .flat()
        .slice(0, 20) as mayi_Default[];

       let mbnativeF = false;
       let sheet7 = 1.0;
      for (let o = 0; o < 3; o++) {
         sheet7 += parseFloat(`${parseInt(`${sheet7}`) / 3}`);
      }
          let minivod7: Map<any, any> = new Map([[String.fromCharCode(97,108,108,111,119,101,100,0),246], [String.fromCharCode(114,95,49,49,95,100,105,114,101,99,116,105,111,110,0),531]]);
          let libturbomodulejsijnia: Map<any, any> = new Map([[String.fromCharCode(100,95,51,51,95,97,116,114,97,99,97,108,0),490], [String.fromCharCode(99,111,109,112,97,114,101,95,118,95,57,55,0),701], [String.fromCharCode(105,95,51,49,95,101,100,105,116,0),270]]);
          let textinputs = String.fromCharCode(97,115,105,110,107,95,115,95,49,48,0);
         mbnativeF = textinputs.length > 26;
         minivod7 = new Map([[`${minivod7.size}`, libturbomodulejsijnia.size ^ minivod7.size]]);
         libturbomodulejsijnia.set(`${libturbomodulejsijnia.size}`, libturbomodulejsijnia.size & 2);
         textinputs += `${libturbomodulejsijnia.size / 2}`;
          let main_w2: Map<any, any> = new Map([[String.fromCharCode(100,95,49,53,95,118,101,114,105,102,121,0),String.fromCharCode(100,105,115,116,97,110,99,101,115,95,122,95,50,53,0)], [String.fromCharCode(105,110,97,99,116,105,118,101,95,109,95,50,51,0),String.fromCharCode(113,95,53,54,95,112,105,99,116,0)], [String.fromCharCode(119,95,50,56,95,105,110,99,111,109,112,108,101,116,101,0),String.fromCharCode(104,97,112,113,97,95,111,95,56,48,0)]]);
          let qaagR = 3.0;
          let changez = false;
         mbnativeF = !changez;
         main_w2 = new Map([[`${main_w2.size}`, parseInt(`${qaagR}`)]]);
         qaagR /= Math.max(3, main_w2.size & 1);
          let private_7B = 5.0;
          let launcher6 = 4;
         mbnativeF = private_7B >= sheet7;
         private_7B += launcher6 - launcher6;
          let sentryF = String.fromCharCode(112,114,101,118,105,101,119,105,110,103,95,53,95,57,53,0);
          let windo = String.fromCharCode(119,95,55,51,95,114,101,102,108,0);
         sheet7 -= parseFloat(`${windo.length ^ 1}`);
         sentryF += `${sentryF.length | sentryF.length}`;
         windo += `${2 * sentryF.length}`;
         sheet7 += parseFloat(`${3 * parseInt(`${sheet7}`)}`);
      mbridgeU = blacklistI == 50.94;
   let countdownv = tickn ? !tickn : tickn;
   do {
      tickn = targetA < textlayoutmanageru.size;
      if (countdownv) {
         break;
      }
   } while (countdownv && ((blacklistI + 2.7) == 2.33));
   for (let d = 0; d < 3; d++) {
      blacklistI += (parseFloat(`${2 << (Math.min(4, Math.abs((tickn ? 4 : 5))))}`));
   }
      mbridgeU = targetA > 88.52 || backiconG.length > 79;

      setSportList(newArray);
    }
  }, []);

  const fetchPlaylist = (page: number) =>
    mayi_ServiceFilter.getTopic(page).then((results: mayi_Predictionwin) => {
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
       let routerB = false;
    let pushg = 4;
    let utilsi = 5.0;
    let coreX = 2.0;
    let lineO = String.fromCharCode(97,95,57,48,95,105,115,116,115,0);
    let manifestv = String.fromCharCode(109,95,52,50,95,100,99,97,100,115,112,0);
    let cornerkickQ: Map<any, any> = new Map([[String.fromCharCode(97,95,51,49,95,112,101,114,102,111,114,109,105,110,103,0),516], [String.fromCharCode(111,95,52,53,95,98,97,99,107,103,114,111,117,110,100,115,0),561], [String.fromCharCode(105,110,116,101,114,97,99,116,111,114,95,111,95,55,57,0),469]]);
    let kickT = true;
    let executorL = String.fromCharCode(99,97,108,99,117,108,97,116,101,100,95,55,95,56,49,0);
   let streamingN = routerB ? !routerB : routerB;
   do {
       let holderM = String.fromCharCode(111,95,50,95,115,121,115,99,116,108,0);
       let greyd = 5;
       let valuesu = String.fromCharCode(111,95,56,52,95,112,114,101,118,118,101,99,0);
       let sellmathbackgroundN = 0.0;
         sellmathbackgroundN -= parseFloat(`${holderM.length}`);
      for (let i = 0; i < 2; i++) {
         greyd |= greyd / 1;
      }
          let launchl = String.fromCharCode(103,95,54,49,95,98,97,114,101,0);
         sellmathbackgroundN += parseFloat(`${3}`);
         launchl += `${launchl.length}`;
         valuesu += `${3 % (Math.max(6, greyd))}`;
         sellmathbackgroundN -= parseFloat(`${parseInt(`${sellmathbackgroundN}`)}`);
      for (let c = 0; c < 1; c++) {
          let navigation6 = 5.0;
          let placementL: Array<any> = [70, 317, 187];
          let entrym = String.fromCharCode(108,111,103,103,105,110,103,95,116,95,57,50,0);
         sellmathbackgroundN *= parseFloat(`${parseInt(`${navigation6}`)}`);
         navigation6 += parseFloat(`${entrym.length - placementL.length}`);
         placementL.push((String.fromCharCode(84,0) == entrym ? entrym.length : placementL.length));
      }
      while (valuesu.length <= 1) {
          let penaltyb: Map<any, any> = new Map([[String.fromCharCode(112,117,108,108,113,117,111,116,101,95,105,95,52,51,0),false ], [String.fromCharCode(99,111,112,121,95,107,95,52,51,0),false ]]);
         holderM = `${parseInt(`${sellmathbackgroundN}`) << (Math.min(5, Math.abs(greyd)))}`;
         penaltyb = new Map([[`${penaltyb.size}`, penaltyb.size & 3]]);
         break;
      }
       let questb = String.fromCharCode(115,101,108,101,99,116,105,118,101,95,114,95,49,48,48,0);
       let audienceo = String.fromCharCode(114,95,57,51,95,97,112,112,108,105,101,115,0);
         greyd /= Math.max(3, 1 & questb.length);
      if ((greyd % (Math.max(2, 5))) < 1) {
          let nalyticsQ = String.fromCharCode(108,95,53,50,95,99,114,111,115,115,111,118,101,114,0);
          let showlessY = String.fromCharCode(118,95,51,49,95,116,105,109,101,100,0);
          let settingI = 1;
          let filez: Array<any> = [230, 436];
          let humidityr = String.fromCharCode(119,101,98,109,95,52,95,56,51,0);
         greyd ^= greyd >> (Math.min(Math.abs(2), 2));
         nalyticsQ = `${showlessY.length * 2}`;
         showlessY = `${nalyticsQ.length ^ humidityr.length}`;
         settingI += 2 - humidityr.length;
         filez.push(3);
      }
       let kick9 = 3;
      routerB = lineO.endsWith(`${greyd}`);
      if (streamingN) {
         break;
      }
   } while (streamingN && (manifestv.endsWith(`${routerB}`)));
   while (!routerB && 2.27 < (4.12 * utilsi)) {
      routerB = routerB || manifestv.length == 22;
      break;
   }
       let statisticsinactivep = 4.0;
       let statisticsinactive5: Array<any> = [680, 767, 243];
         statisticsinactivep -= parseFloat(`${3}`);
         statisticsinactivep *= parseFloat(`${statisticsinactive5.length - parseInt(`${statisticsinactivep}`)}`);
      let themeG = 9455670 >= statisticsinactive5.length;
      do {
         statisticsinactive5.push(statisticsinactive5.length);
         if (themeG) {
            break;
         }
      } while (((parseFloat(`${statisticsinactive5.length}`) / (Math.max(6, statisticsinactivep))) == 5.74) && themeG);
      while ((statisticsinactive5.length ^ 1) < 4) {
          let predictionP = String.fromCharCode(112,95,53,55,95,119,104,116,120,0);
          let scrollviewj = 4;
          let placementa = 4.0;
          let templateprocessorn = 3.0;
          let save3: Array<any> = [String.fromCharCode(118,116,114,107,95,103,95,57,55,0), String.fromCharCode(108,95,50,50,95,100,101,102,115,0)];
         statisticsinactivep += parseFloat(`${parseInt(`${placementa}`) % (Math.max(2, parseInt(`${statisticsinactivep}`)))}`);
         predictionP += `${1 << (Math.min(2, predictionP.length))}`;
         scrollviewj |= (String.fromCharCode(115,0) == predictionP ? scrollviewj : predictionP.length);
         placementa += predictionP.length * 2;
         templateprocessorn *= 3;
         save3 = [predictionP.length >> (Math.min(Math.abs(2), 2))];
         break;
      }
         statisticsinactive5 = [parseInt(`${statisticsinactivep}`)];
          let latn5: Map<any, any> = new Map([[String.fromCharCode(111,95,53,54,95,101,118,97,108,117,108,97,116,101,0),false ], [String.fromCharCode(122,95,54,57,95,111,114,105,103,105,110,97,108,0),true ], [String.fromCharCode(119,95,57,49,95,115,117,98,112,111,105,110,116,101,114,0),false ]]);
         statisticsinactive5 = [1 & parseInt(`${statisticsinactivep}`)];
         latn5.set(`${latn5.size}`, 2 >> (Math.min(1, Math.abs(latn5.size))));
      manifestv = `${statisticsinactive5.length << (Math.min(3, Math.abs(parseInt(`${statisticsinactivep}`))))}`;

    const bannerRes = await mayi_ConstCheckbox.getBannerAd(100);

   if (4 == manifestv.length) {
      manifestv += `${lineO.length + 2}`;
   }
   let productO = routerB ? !routerB : routerB;
   do {
      routerB = lineO.length == 41;
      if (productO) {
         break;
      }
   } while ((4 >= cornerkickQ.size) && productO);
      lineO = `${((routerB ? 2 : 1) | 3)}`;
    const banner = bannerRes.ads;

   let rewindV = String.fromCharCode(120,55,121,108,107,107,100,0) == lineO;
   do {
      lineO += `${lineO.length / (Math.max(2, 8))}`;
      if (rewindV) {
         break;
      }
   } while (rewindV && (manifestv.length >= lineO.length));
   if (!lineO.includes(`${routerB}`)) {
       let termsg = String.fromCharCode(100,101,112,101,110,100,101,110,99,121,95,53,95,56,48,0);
       let whitetickB = String.fromCharCode(112,95,57,52,95,108,105,102,101,99,121,99,108,101,0);
       let faviconj: Map<any, any> = new Map([[String.fromCharCode(117,95,54,52,95,100,117,114,98,105,110,0),674], [String.fromCharCode(98,95,57,50,95,112,101,114,115,111,110,97,108,0),895]]);
      for (let k = 0; k < 1; k++) {
         faviconj.set(termsg, (String.fromCharCode(116,0) == termsg ? termsg.length : whitetickB.length));
      }
      for (let g = 0; g < 2; g++) {
         termsg = `${faviconj.size + termsg.length}`;
      }
      for (let m = 0; m < 2; m++) {
          let iconschedulef = 0;
         whitetickB += `${2 + iconschedulef}`;
      }
         termsg += `${faviconj.size}`;
      while (termsg == String.fromCharCode(108,0)) {
         whitetickB += `${termsg.length & 1}`;
         break;
      }
         whitetickB = `${termsg.length / (Math.max(whitetickB.length, 1))}`;
          let filter8 = 2.0;
          let iconarrowleftY = String.fromCharCode(113,95,49,53,95,114,101,112,101,97,116,105,110,103,0);
          let episodesO: Map<any, any> = new Map([[String.fromCharCode(99,104,115,101,116,95,112,95,51,53,0),797], [String.fromCharCode(98,95,54,53,95,116,111,98,105,116,0),323]]);
         whitetickB = `${whitetickB.length >> (Math.min(termsg.length, 5))}`;
         filter8 -= 1 & iconarrowleftY.length;
         iconarrowleftY = `${episodesO.size - iconarrowleftY.length}`;
         episodesO.set(`${filter8}`, parseInt(`${filter8}`));
         termsg = `${whitetickB.length - faviconj.size}`;
      let bases = 6911955 >= faviconj.size;
      do {
         faviconj.set(`${whitetickB}`, faviconj.size);
         if (bases) {
            break;
         }
      } while ((faviconj.size == whitetickB.length) && bases);
      routerB = !routerB;
   }
      coreX *= parseFloat(`${1}`);
    const bannerList = bannerRes.ads_list;

   while (3 == (manifestv.length + parseInt(`${utilsi}`)) && 3.43 == (utilsi + 5.88)) {
       let gradleJ = 1.0;
       let resendR = 5;
       let showlessd = 3.0;
      let defaultprofilepic2 = 6752321 <= resendR;
      do {
         resendR &= 3;
         if (defaultprofilepic2) {
            break;
         }
      } while (defaultprofilepic2 && (4.51 >= (resendR - gradleJ)));
      for (let f = 0; f < 1; f++) {
         resendR -= parseInt(`${gradleJ}`) ^ 1;
      }
      for (let w = 0; w < 3; w++) {
         resendR += 1;
      }
         gradleJ /= Math.max(3, resendR | parseInt(`${gradleJ}`));
         gradleJ *= 1;
      while (3 <= (resendR - parseInt(`${showlessd}`)) || 3 <= (resendR - parseInt(`${showlessd}`))) {
          let incidentO = String.fromCharCode(98,95,51,55,95,101,120,101,99,117,116,105,111,110,0);
          let submitq = 1.0;
          let reminderV = String.fromCharCode(115,117,98,112,97,99,107,101,116,0);
         resendR *= 1;
         incidentO = "1";
         submitq -= parseInt(`${submitq}`) / 1;
         reminderV = `${parseInt(`${submitq}`)}`;
         break;
      }
      let abidetectG = 7105391 <= resendR;
      do {
         resendR %= Math.max(resendR % (Math.max(parseInt(`${showlessd}`), 7)), 2);
         if (abidetectG) {
            break;
         }
      } while (abidetectG && (3 >= resendR));
       let uploadz = 1.0;
       let iconstarV = 1.0;
      for (let k = 0; k < 3; k++) {
         gradleJ *= parseInt(`${iconstarV}`);
      }
      utilsi /= Math.max(3, ((routerB ? 5 : 2) << (Math.min(Math.abs(parseInt(`${utilsi}`)), 1))));
      break;
   }
   while (lineO != String.fromCharCode(108,0)) {
      manifestv += `${(lineO == String.fromCharCode(75,0) ? cornerkickQ.size : lineO.length)}`;
      break;
   }
      manifestv = `${parseInt(`${coreX}`) << (Math.min(manifestv.length, 1))}`;

    if (banner) {

       let schedule0: Array<any> = [34, 239, 505];
       let privacym = 2.0;
          let backward7: Map<any, any> = new Map([[String.fromCharCode(111,110,118,101,114,115,97,116,105,111,110,95,114,95,57,54,0),true ], [String.fromCharCode(111,110,118,101,114,115,97,116,105,111,110,95,57,95,55,52,0),false ]]);
          let philippinesN = 2.0;
         privacym += parseFloat(`${2 & parseInt(`${philippinesN}`)}`);
         backward7.set(`${backward7.size}`, backward7.size);
         philippinesN += backward7.size;
      while (5 > (schedule0.length - parseInt(`${privacym}`))) {
          let telemetryU = String.fromCharCode(106,95,56,55,95,101,99,107,101,121,0);
          let matchinactiver = String.fromCharCode(107,95,57,0);
          let holder4 = String.fromCharCode(108,97,110,103,105,100,95,105,95,52,56,0);
          let filledA = 3;
         privacym += parseFloat(`${matchinactiver.length / (Math.max(2, 1))}`);
         telemetryU += `${telemetryU.length % (Math.max(holder4.length, 2))}`;
         matchinactiver += `${1 - filledA}`;
         holder4 = `${telemetryU.length}`;
         filledA &= (String.fromCharCode(72,0) == holder4 ? holder4.length : filledA);
         break;
      }
          let resulta = 3.0;
          let floatingW = 5.0;
         schedule0.push(schedule0.length);
         resulta += 1 >> (Math.min(Math.abs(parseInt(`${resulta}`)), 1));
         floatingW *= parseFloat(`${parseInt(`${resulta}`)}`);
      while (1.44 < (privacym * 5.3) || 1.61 < (privacym * 5.3)) {
         privacym /= Math.max(parseFloat(`${parseInt(`${privacym}`)}`), 4);
         break;
      }
      if ((schedule0.length % (Math.max(2, 8))) >= 3 && 5 >= (2 | schedule0.length)) {
         privacym -= parseFloat(`${parseInt(`${privacym}`) / (Math.max(5, schedule0.length))}`);
      }
      for (let q = 0; q < 3; q++) {
         privacym -= parseFloat(`${3 * schedule0.length}`);
      }
      utilsi /= Math.max(lineO.length * 1, 5);
   let attributedstringI = lineO.length >= 9826011;
   do {
      lineO += `${1 + manifestv.length}`;
      if (attributedstringI) {
         break;
      }
   } while ((3.51 >= utilsi) && attributedstringI);
      coreX *= (parseFloat(`${(routerB ? 5 : 1) & 3}`));
      setBannerAd(banner);

   while (lineO.startsWith(`${kickT}`)) {
       let issubf = String.fromCharCode(115,113,108,105,116,101,95,113,95,49,53,0);
       let iconorientationL = true;
      for (let t = 0; t < 3; t++) {
          let bodany = 5.0;
          let hookr = 2.0;
          let emojiV = 3;
          let basketballmatchdetailbgM = String.fromCharCode(105,110,112,108,105,99,105,116,101,108,121,0);
         iconorientationL = !iconorientationL;
         bodany *= parseInt(`${hookr}`);
         hookr *= parseInt(`${hookr}`) >> (Math.min(Math.abs(parseInt(`${bodany}`)), 1));
         emojiV -= parseInt(`${hookr}`);
         basketballmatchdetailbgM = `${parseInt(`${bodany}`) ^ parseInt(`${hookr}`)}`;
      }
      for (let b = 0; b < 2; b++) {
         iconorientationL = issubf.includes(`${iconorientationL}`);
      }
      if (iconorientationL && issubf.length < 4) {
          let countryI = String.fromCharCode(99,104,114,111,109,97,104,111,108,100,95,116,95,50,52,0);
          let libcxxcomponentsA: Array<any> = [String.fromCharCode(97,114,101,0), String.fromCharCode(112,95,54,53,95,99,111,109,109,97,110,100,115,0)];
         issubf = `${(issubf == String.fromCharCode(122,0) ? libcxxcomponentsA.length : issubf.length)}`;
         countryI += `${1 | countryI.length}`;
         libcxxcomponentsA = [countryI.length + 2];
      }
      let penaltyC = iconorientationL ? !iconorientationL : iconorientationL;
      do {
          let dialogN: Array<any> = [String.fromCharCode(111,100,105,110,103,95,48,95,55,48,0), String.fromCharCode(108,109,108,109,95,51,95,52,51,0)];
          let templateprocessorN = String.fromCharCode(103,95,57,50,95,99,111,111,114,100,105,110,97,116,105,111,110,0);
          let giftg = String.fromCharCode(112,114,101,118,105,101,119,112,112,95,109,95,52,0);
          let modeQ = String.fromCharCode(115,104,111,114,116,102,108,111,97,116,95,118,95,50,48,0);
         iconorientationL = templateprocessorN.length <= 6;
         dialogN = [modeQ.length];
         templateprocessorN += `${modeQ.length}`;
         giftg += `${(String.fromCharCode(95,0) == modeQ ? giftg.length : modeQ.length)}`;
         if (penaltyC) {
            break;
         }
      } while ((!iconorientationL) && penaltyC);
          let register_7E = String.fromCharCode(105,95,55,49,95,114,101,99,111,109,109,101,110,100,0);
          let iconarrowleftx = 5.0;
         issubf = `${register_7E.length & 3}`;
         register_7E += `${parseInt(`${iconarrowleftx}`) >> (Math.min(2, Math.abs(1)))}`;
         iconarrowleftx += parseFloat(`${1}`);
         issubf += `${3 * issubf.length}`;
      lineO = `${pushg}`;
      break;
   }
   for (let t = 0; t < 2; t++) {
      kickT = 13 == pushg;
   }
   for (let v = 0; v < 1; v++) {
      pushg &= (String.fromCharCode(53,0) == manifestv ? pushg : manifestv.length);
   }
      setBannerAdList(bannerList);
    } else {

   for (let u = 0; u < 3; u++) {
      routerB = !kickT || utilsi <= 20.71;
   }
   if (executorL.length > 1) {
       let renewE = String.fromCharCode(118,101,114,105,102,105,99,97,116,105,111,110,95,99,95,51,48,0);
       let diceX = String.fromCharCode(112,114,105,111,114,95,102,95,55,54,0);
          let pageM = String.fromCharCode(108,111,99,107,109,103,114,95,118,95,57,49,0);
         diceX += `${pageM.length}`;
         diceX = `${(diceX == String.fromCharCode(107,0) ? renewE.length : diceX.length)}`;
         diceX = `${renewE.length - 2}`;
      while (4 > renewE.length) {
         diceX = `${diceX.length}`;
         break;
      }
         renewE += `${2 / (Math.max(2, diceX.length))}`;
         diceX = `${renewE.length}`;
      kickT = 97 < diceX.length;
   }
      coreX -= parseFloat(`${manifestv.length}`);
      setBannerAd(undefined);

   while (executorL.length <= 4 && !routerB) {
      routerB = manifestv.length < parseInt(`${utilsi}`);
      break;
   }
   while (4 <= (pushg + 2)) {
      pushg -= pushg;
      break;
   }
   if ((cornerkickQ.size << (Math.min(Math.abs(2), 5))) >= 5) {
      executorL = `${((kickT ? 2 : 4) << (Math.min(lineO.length, 2)))}`;
   }
      setBannerAdList([]);
    }
  };

  useEffect(() => {
    onLoad();
  }, []);

  const shouldShowAds = async () => {
       let traminiL = String.fromCharCode(116,95,55,49,95,101,115,116,105,109,97,116,101,100,0);
    let iconwatchx = String.fromCharCode(119,95,56,48,95,114,101,97,108,108,121,0);
    let gifgoaln = true;
    let flipperj = String.fromCharCode(119,95,49,50,95,115,115,114,99,0);
    let termsA = 0;
    let rendery = String.fromCharCode(115,111,117,114,99,101,99,108,105,112,95,114,95,49,49,0);
    let selecti = 0.0;
    let rewardvideoI = 0.0;
    let reward4 = false;
    let anythinkf = String.fromCharCode(99,108,117,115,116,101,114,95,108,95,54,55,0);
    let u_playerF = String.fromCharCode(115,111,117,110,95,120,95,52,48,0);
   if (traminiL.startsWith(`${iconwatchx.length}`)) {
      iconwatchx += `${flipperj.length}`;
   }
   let middleT = flipperj == String.fromCharCode(122,57,105,118,49,105,51,112,0);
   do {
       let nalyticsc = String.fromCharCode(108,95,51,50,95,109,97,112,112,101,114,0);
       let iconstarH: Array<any> = [938, 248, 919];
       let interstitialF = 5;
       let sortF = String.fromCharCode(99,111,109,109,105,115,115,105,111,110,95,48,95,57,52,0);
       let floatingJ: Array<any> = [792, 660, 261];
         sortF += "1";
      for (let k = 0; k < 1; k++) {
         floatingJ.push(2);
      }
          let expiredG = String.fromCharCode(109,95,54,54,95,117,110,99,111,100,101,100,0);
          let iconi = String.fromCharCode(115,111,102,116,95,104,95,52,48,0);
          let sheet6 = String.fromCharCode(114,110,103,95,56,95,49,56,0);
         floatingJ = [expiredG.length];
         expiredG = `${(String.fromCharCode(75,0) == iconi ? iconi.length : sheet6.length)}`;
         sheet6 = "2";
      for (let e = 0; e < 3; e++) {
         iconstarH.push(interstitialF | 1);
      }
       let baiduY = false;
       let predictionarrowc = false;
      while (2 == (interstitialF + 5) || 5 == interstitialF) {
          let subbasketballplayerj: Map<any, any> = new Map([[String.fromCharCode(103,108,111,98,95,114,95,56,50,0),221], [String.fromCharCode(119,101,105,103,104,116,112,95,103,95,53,50,0),477], [String.fromCharCode(120,95,51,95,100,101,99,111,114,114,0),646]]);
          let o_countd: Array<any> = [String.fromCharCode(121,95,57,53,95,110,111,110,110,117,108,108,97,100,100,114,101,115,115,0), String.fromCharCode(116,105,109,101,119,97,105,116,95,110,95,54,50,0), String.fromCharCode(115,105,122,101,100,95,55,95,53,54,0)];
          let defaultteamw = 2;
          let defaultlogo2 = String.fromCharCode(117,95,48,95,97,117,116,104,111,114,105,122,101,0);
          let backwardT = String.fromCharCode(112,95,57,54,95,109,101,100,105,97,99,111,100,101,99,100,101,99,0);
         interstitialF *= defaultteamw;
         subbasketballplayerj = new Map([[defaultlogo2, 3 * defaultlogo2.length]]);
         o_countd.push(3);
         defaultteamw <<= Math.min(Math.abs(2), 4);
         backwardT = `${o_countd.length | 1}`;
         break;
      }
         nalyticsc += "2";
       let macauw: Map<any, any> = new Map([[String.fromCharCode(111,112,101,110,95,107,95,54,50,0),false ], [String.fromCharCode(101,110,116,114,111,112,121,109,111,100,101,100,97,116,97,95,109,95,52,49,0),true ], [String.fromCharCode(97,95,56,51,95,105,110,105,116,115,109,111,116,105,111,110,0),false ]]);
      let details = interstitialF <= 6464261;
      do {
         interstitialF &= 3;
         if (details) {
            break;
         }
      } while ((5 <= interstitialF) && details);
      let pushl = nalyticsc == String.fromCharCode(49,100,105,111,107,53,0);
      do {
         nalyticsc = `${nalyticsc.length >> (Math.min(1, iconstarH.length))}`;
         if (pushl) {
            break;
         }
      } while (pushl && ((nalyticsc.length ^ interstitialF) < 2 || (2 ^ nalyticsc.length) < 2));
      let round4 = nalyticsc == String.fromCharCode(103,121,104,115,110,97,0);
      do {
         nalyticsc += `${2 << (Math.min(5, Math.abs(macauw.size)))}`;
         if (round4) {
            break;
         }
      } while ((4 >= sortF.length || 4 >= nalyticsc.length) && round4);
         floatingJ.push((sortF.length | (baiduY ? 1 : 1)));
      while (nalyticsc.includes(`${baiduY}`)) {
         nalyticsc += `${sortF.length}`;
         break;
      }
         sortF = `${sortF.length}`;
         sortF += `${floatingJ.length}`;
      flipperj = `${((reward4 ? 3 : 5) >> (Math.min(5, Math.abs((gifgoaln ? 3 : 5)))))}`;
      if (middleT) {
         break;
      }
   } while ((!reward4) && middleT);
   for (let e = 0; e < 1; e++) {
      traminiL = "1";
   }
   for (let r = 0; r < 3; r++) {
       let e_unlockr = 4;
       let backiconT = 3.0;
      if (4.0 <= (1.30 - backiconT) && 1.30 <= (backiconT - e_unlockr)) {
          let full9: Array<any> = [448, 73];
         backiconT += full9.length + 2;
      }
      let encryptN = 8677730.0 <= backiconT;
      do {
         backiconT /= Math.max(parseInt(`${backiconT}`) - e_unlockr, 1);
         if (encryptN) {
            break;
         }
      } while (((2.71 * backiconT) < 5.80) && encryptN);
         e_unlockr >>= Math.min(Math.abs(1), 4);
          let dialogT = String.fromCharCode(115,97,116,95,120,95,55,55,0);
          let helpero = false;
          let mimoR = true;
         e_unlockr %= Math.max(parseInt(`${backiconT}`) & 1, 5);
         dialogT += `${((mimoR ? 4 : 5))}`;
         helpero = !mimoR;
      for (let e = 0; e < 3; e++) {
          let matchesu = String.fromCharCode(108,95,55,49,0);
          let runtimeS = String.fromCharCode(100,116,115,95,53,95,51,52,0);
          let androidK = 5.0;
          let logouserW: Array<any> = [877, 952, 481];
         e_unlockr ^= 2;
         matchesu = `${logouserW.length}`;
         runtimeS += `${parseInt(`${androidK}`)}`;
         androidK /= Math.max(parseFloat(`${logouserW.length - 3}`), 2);
      }
      if ((2 & e_unlockr) >= 1 && 2 >= (e_unlockr + parseInt(`${backiconT}`))) {
          let detailsv = String.fromCharCode(114,97,116,105,111,110,97,108,95,106,95,56,0);
          let materialF = 0.0;
         backiconT *= detailsv.length * e_unlockr;
         detailsv = `${parseInt(`${materialF}`)}`;
      }
      reward4 = rendery.length < 36;
   }
   let loginj = 6883845 >= rendery.length;
   do {
      rendery = `${termsA | 1}`;
      if (loginj) {
         break;
      }
   } while ((2 > rendery.length) && loginj);
      termsA *= flipperj.length % (Math.max(5, traminiL.length));

    if (!isVip) {

   if (traminiL.includes(`${reward4}`)) {
      reward4 = !reward4;
   }
   for (let q = 0; q < 2; q++) {
      rendery += `${parseInt(`${selecti}`)}`;
   }
   if (gifgoaln) {
       let langp = 2;
       let downW = String.fromCharCode(102,115,105,122,101,95,106,95,54,0);
       let link4 = 5;
       let bufferM = 4.0;
         downW += `${downW.length >> (Math.min(1, Math.abs(link4)))}`;
         downW = "1";
      if ((bufferM + 4.18) <= 4.30 || 4.18 <= (link4 + bufferM)) {
          let defaultprofilepicK = 2.0;
          let greyarrowup6 = 0.0;
          let promotionc = String.fromCharCode(117,95,50,54,95,105,116,113,117,101,117,101,0);
          let anytimeF: Map<any, any> = new Map([[String.fromCharCode(109,111,110,111,119,104,105,116,101,95,98,95,52,51,0),82], [String.fromCharCode(106,97,99,111,98,105,97,110,95,57,95,57,53,0),551], [String.fromCharCode(98,95,52,50,95,115,105,122,101,114,0),147]]);
         bufferM /= Math.max(parseInt(`${greyarrowup6}`), 2);
         defaultprofilepicK -= anytimeF.size;
         promotionc += `${promotionc.length}`;
         anytimeF = new Map([[promotionc, parseInt(`${defaultprofilepicK}`) * 1]]);
      }
      let change8 = 8851326.0 >= bufferM;
      do {
         bufferM /= Math.max(5, 2);
         if (change8) {
            break;
         }
      } while (change8 && (parseInt(`${bufferM}`) >= downW.length));
       let signinupI = String.fromCharCode(97,116,111,109,105,99,115,95,48,95,56,48,0);
       let crown5 = String.fromCharCode(110,95,52,49,95,98,97,115,105,115,0);
         signinupI += `${downW.length}`;
       let nnewinterstitiall = 4.0;
         downW += `${(downW == String.fromCharCode(84,0) ? downW.length : parseInt(`${bufferM}`))}`;
         langp /= Math.max(1, 2);
         crown5 += `${3 & parseInt(`${nnewinterstitiall}`)}`;
      while ((langp ^ 3) >= 4 && (crown5.length ^ langp) >= 3) {
         langp %= Math.max((crown5 == String.fromCharCode(118,0) ? crown5.length : signinupI.length), 2);
         break;
      }
          let iconnotificationnewb = 5;
          let predictiondefaultZ = String.fromCharCode(104,105,98,105,116,95,116,95,49,48,0);
          let logoQ = 3;
         signinupI = `${(String.fromCharCode(77,0) == predictiondefaultZ ? predictiondefaultZ.length : parseInt(`${nnewinterstitiall}`))}`;
         iconnotificationnewb -= logoQ;
         logoQ &= iconnotificationnewb >> (Math.min(Math.abs(3), 1));
      rewardvideoI += downW.length;
   }
      selecti += 3 * parseInt(`${rewardvideoI}`);
      flipperj = `${traminiL.length - parseInt(`${selecti}`)}`;
      traminiL = `${termsA}`;
      fetchBannerAd();
    } else {

      rendery = `${2 - parseInt(`${selecti}`)}`;
      rendery += "2";
   if (1.79 >= rewardvideoI) {
       let pnews0 = 4.0;
       let diceg = String.fromCharCode(101,95,56,52,95,112,97,99,107,101,114,0);
       let iconqqS = 3.0;
       let gmailK = 3.0;
      let iconsaveimagei = pnews0 >= 9559443.0;
      do {
          let renewh: Array<any> = [896, 568];
          let cornerN = String.fromCharCode(119,111,114,107,97,114,111,117,110,100,95,103,95,51,56,0);
          let progressw: Map<any, any> = new Map([[String.fromCharCode(111,95,56,95,105,116,101,109,115,0),String.fromCharCode(100,101,102,101,114,114,105,110,103,95,48,95,53,50,0)], [String.fromCharCode(104,95,50,50,95,115,117,110,118,101,114,0),String.fromCharCode(105,109,112,111,114,116,101,100,95,118,95,53,56,0)], [String.fromCharCode(100,101,108,105,109,105,116,101,114,95,49,95,53,50,0),String.fromCharCode(118,95,54,50,95,116,104,101,97,116,101,114,0)]]);
          let stylesZ = false;
          let libcrashsdk0: Map<any, any> = new Map([[String.fromCharCode(111,95,49,52,95,98,105,103,0),618], [String.fromCharCode(112,97,99,107,115,95,110,95,55,53,0),671], [String.fromCharCode(115,116,101,110,99,105,108,95,108,95,54,50,0),683]]);
         pnews0 += parseFloat(`${progressw.size}`);
         renewh.push(renewh.length);
         cornerN = `${(String.fromCharCode(55,0) == cornerN ? (stylesZ ? 3 : 1) : cornerN.length)}`;
         progressw.set(`${stylesZ}`, 1);
         libcrashsdk0.set(`${cornerN}`, cornerN.length);
         if (iconsaveimagei) {
            break;
         }
      } while ((3 > (diceg.length * parseInt(`${pnews0}`)) && 2.16 > (pnews0 * 4.14)) && iconsaveimagei);
      if (5.43 <= (2.35 - pnews0) && 4 <= (diceg.length | 1)) {
          let storeG = String.fromCharCode(107,95,49,48,95,115,99,111,112,101,105,100,0);
          let androidV = 5.0;
          let headere = 0.0;
         pnews0 /= Math.max(parseFloat(`${parseInt(`${gmailK}`)}`), 2);
         storeG += `${(String.fromCharCode(88,0) == storeG ? storeG.length : parseInt(`${androidV}`))}`;
         androidV /= Math.max(2, parseInt(`${headere}`));
      }
         diceg += `${3 << (Math.min(2, Math.abs(parseInt(`${pnews0}`))))}`;
      let strings9 = 7571607 >= diceg.length;
      do {
          let iconedita: Map<any, any> = new Map([[String.fromCharCode(112,95,49,53,95,115,121,110,111,110,121,109,115,0),70], [String.fromCharCode(114,101,97,100,109,101,95,121,95,56,49,0),333], [String.fromCharCode(97,95,54,0),934]]);
          let hookY = String.fromCharCode(118,116,97,103,95,57,95,49,0);
          let iconarrowleftG = 1.0;
          let uploado = true;
         diceg = `${iconedita.size}`;
         iconedita.set(`${iconarrowleftG}`, (parseInt(`${iconarrowleftG}`) * (uploado ? 1 : 3)));
         hookY = `${3 * hookY.length}`;
         if (strings9) {
            break;
         }
      } while ((5 == (diceg.length - parseInt(`${iconqqS}`)) || (5 * diceg.length) == 2) && strings9);
       let basketballawayteamc = String.fromCharCode(112,108,111,116,116,101,114,95,101,95,56,57,0);
       let settingsk = String.fromCharCode(107,95,48,95,112,104,111,116,111,115,0);
          let n_playerY = String.fromCharCode(104,107,100,102,95,105,95,53,56,0);
         iconqqS += parseFloat(`${3}`);
         n_playerY += "3";
         settingsk = `${parseInt(`${iconqqS}`) | basketballawayteamc.length}`;
          let sportsJ = 2.0;
         pnews0 *= (parseFloat(`${String.fromCharCode(97,0) == settingsk ? settingsk.length : parseInt(`${iconqqS}`)}`));
         sportsJ -= parseInt(`${sportsJ}`);
      let refreshN = 7987515.0 >= iconqqS;
      do {
         iconqqS *= parseFloat(`${parseInt(`${pnews0}`)}`);
         if (refreshN) {
            break;
         }
      } while (refreshN && ((gmailK + iconqqS) < 3.15));
      if ((diceg.length / (Math.max(1, 7))) <= 2 && 3 <= (diceg.length | 1)) {
         diceg = `${parseInt(`${pnews0}`)}`;
      }
          let list7 = String.fromCharCode(100,101,102,101,114,95,118,95,57,55,0);
          let pingV = String.fromCharCode(97,118,97,108,97,110,99,104,101,95,56,95,49,57,0);
         diceg += `${3 >> (Math.min(5, Math.abs(parseInt(`${iconqqS}`))))}`;
         list7 = `${(list7 == String.fromCharCode(97,0) ? pingV.length : list7.length)}`;
         pingV += `${1 ^ pingV.length}`;
         pnews0 += parseFloat(`${1 - parseInt(`${pnews0}`)}`);
      rewardvideoI -= iconwatchx.length;
   }
      rewardvideoI *= 1 ^ termsA;
      termsA |= flipperj.length + parseInt(`${rewardvideoI}`);
      rewardvideoI *= (String.fromCharCode(51,0) == traminiL ? flipperj.length : traminiL.length);
      setBannerAd(undefined);

      selecti /= Math.max(3, iconwatchx.length);
   if (flipperj.length < 1) {
       let bridgeC = String.fromCharCode(106,95,54,52,95,109,111,110,111,116,111,110,121,0);
          let humidityy = true;
          let weibo2: Map<any, any> = new Map([[String.fromCharCode(110,95,52,57,95,109,99,111,114,101,0),true ], [String.fromCharCode(109,95,57,95,97,108,116,101,114,110,97,116,101,0),false ], [String.fromCharCode(120,95,54,53,95,117,110,98,105,110,100,0),true ]]);
          let sound9: Map<any, any> = new Map([[String.fromCharCode(103,95,54,51,95,116,111,110,101,0),String.fromCharCode(121,95,53,49,95,110,115,117,105,0)], [String.fromCharCode(111,95,52,50,95,115,117,109,100,0),String.fromCharCode(112,114,101,115,101,114,118,101,115,95,106,95,55,48,0)]]);
         bridgeC = "3";
         humidityy = 86 == weibo2.size || sound9.size == 86;
         weibo2.set(`${humidityy}`, weibo2.size);
         sound9.set(`${weibo2.size}`, weibo2.size ^ sound9.size);
      for (let q = 0; q < 3; q++) {
         bridgeC = `${2 - bridgeC.length}`;
      }
       let updatesg = 4.0;
       let clubS = 0.0;
      iconwatchx += `${termsA}`;
   }
   while ((iconwatchx.length % 5) < 3) {
      termsA %= Math.max(4, iconwatchx.length + 2);
      break;
   }
      rendery = `${((gifgoaln ? 2 : 5) << (Math.min(Math.abs(parseInt(`${rewardvideoI}`)), 4)))}`;
      reward4 = !gifgoaln;
   let liveshareu = traminiL.length <= 7890509;
   do {
      traminiL = `${(iconwatchx == String.fromCharCode(86,0) ? traminiL.length : iconwatchx.length)}`;
      if (liveshareu) {
         break;
      }
   } while ((traminiL.includes(`${rewardvideoI}`)) && liveshareu);
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
        mayi_push.homeTabCarouselViewAnalytics({
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
    (allBannerAds: mayi_Room[]) => {
      if (allBannerAds.length < 1) {
        return <></>;
      }

      const ads = allBannerAds[Math.floor(Math.random() * allBannerAds.length)];

      return (
        <BannerContainer
          bannerAd={ads}
          onMount={({id, name, slot_id, title}) => {
            mayi_push.homeTabBannerViewAnalytics({
              tab_id: navId?.toString() ?? '0',
              tab_name: tabName ?? '',
              ads_id: id,
              ads_name: name,
              ads_slot_id: slot_id,
              ads_title: title,
            });
          }}
          onPress={({id, name, slot_id, title}) => {
            mayi_push.homeTabBannerClickAnalytics({
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
                item.ads_url.includes(GestureDangerPage.showlessPlayercommon([118,106,106,110,109,36,49,49,30],0x1E,false)) ||
                item.ads_url.includes(GestureDangerPage.showlessPlayercommon([-86,-74,-74,-78,-8,-19,-19,-62],0xC2,false))
                  ? item.ads_url
                  : GestureDangerPage.showlessPlayercommon([118,106,106,110,109,36,49,49,30],0x1E,false) + item.ads_url;
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
    ({item, index}: {item: mayi_Runtime; index: number}) => (
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
       let mbnativew = String.fromCharCode(97,95,50,49,95,121,117,118,97,0);
    let launchR: Array<any> = [682, 18, 520];
    let liveO = 0;
    let crossY = String.fromCharCode(115,97,102,97,114,121,95,49,95,55,57,0);
    let iconeditg: Array<any> = [530, 512, 404];
    let fullscreenminc = 0.0;
    let controlsM = 5;
    let completer = true;
    let sans8 = 5.0;
    let policyg: Map<any, any> = new Map([[String.fromCharCode(100,111,117,103,108,97,115,0),492], [String.fromCharCode(119,97,116,99,104,105,110,103,95,102,95,56,50,0),439]]);
    let showlessk = String.fromCharCode(117,95,50,55,95,103,114,97,110,117,108,97,114,0);
    let productW = 0.0;
   let iconorientationn = launchR.length <= 5888869;
   do {
       let previewl = 3;
       let predictionwinK: Array<any> = [309, 304, 157];
         previewl <<= Math.min(5, predictionwinK.length);
      let indicatorL = previewl <= 5396337;
      do {
         previewl /= Math.max(predictionwinK.length << (Math.min(3, Math.abs(previewl))), 5);
         if (indicatorL) {
            break;
         }
      } while ((previewl > 2) && indicatorL);
          let privacyq = 3.0;
          let current1 = true;
          let ewardedp: Array<any> = [279, 493];
         predictionwinK = [((current1 ? 3 : 4) << (Math.min(Math.abs(parseInt(`${privacyq}`)), 3)))];
         privacyq *= parseFloat(`${ewardedp.length}`);
         current1 = 51 > ewardedp.length && ewardedp.length > 51;
       let controlq: Array<any> = [143, 605];
      if (predictionwinK.length > 1) {
         predictionwinK = [controlq.length >> (Math.min(5, predictionwinK.length))];
      }
      let trashb = previewl <= 7777960;
      do {
          let modeF = 4.0;
          let footballtrophyA = 3;
          let whitevideoliveU: Array<any> = [662, 231, 39];
          let rncoreA = 0.0;
         previewl >>= Math.min(2, Math.abs(1 ^ footballtrophyA));
         modeF /= Math.max(parseFloat(`${3 & parseInt(`${rncoreA}`)}`), 5);
         footballtrophyA -= whitevideoliveU.length;
         whitevideoliveU = [1];
         rncoreA -= 2;
         if (trashb) {
            break;
         }
      } while ((previewl < 2) && trashb);
      launchR = [3];
      if (iconorientationn) {
         break;
      }
   } while (iconorientationn && ((controlsM >> (Math.min(launchR.length, 5))) <= 1 && 3 <= (1 >> (Math.min(4, launchR.length)))));
      completer = !completer;
      liveO >>= Math.min(1, Math.abs(2 + liveO));
      crossY = `${controlsM}`;
   if (5.71 >= (fullscreenminc + 1.57)) {
      iconeditg = [(crossY == String.fromCharCode(84,0) ? showlessk.length : crossY.length)];
   }

    if (componentRef.current != null) {

       let t_managerG = 0;
       let teamdetailsbge: Map<any, any> = new Map([[String.fromCharCode(106,95,53,51,95,109,98,102,105,108,116,101,114,0),String.fromCharCode(103,95,49,49,95,101,118,111,108,118,101,0)], [String.fromCharCode(117,108,111,110,103,95,111,95,51,57,0),String.fromCharCode(117,110,114,101,115,111,108,118,97,98,108,101,95,104,95,53,52,0)], [String.fromCharCode(104,95,57,49,95,105,110,116,101,114,97,99,116,105,110,103,0),String.fromCharCode(99,95,49,48,95,115,108,105,100,101,114,0)]]);
      let iconwatchnowW = 9735349 <= t_managerG;
      do {
          let favoriteK = 0.0;
          let defaultplayerimg2 = 5.0;
          let circleC: Array<any> = [96, 864, 891];
         t_managerG *= t_managerG | parseInt(`${favoriteK}`);
         favoriteK -= parseInt(`${defaultplayerimg2}`) / (Math.max(3, circleC.length));
         defaultplayerimg2 *= parseFloat(`${circleC.length}`);
         if (iconwatchnowW) {
            break;
         }
      } while ((teamdetailsbge.size <= t_managerG) && iconwatchnowW);
      let iconsubssuccessS = 5082222 <= teamdetailsbge.size;
      do {
          let mathl = String.fromCharCode(105,115,116,114,101,97,109,119,114,97,112,112,101,114,95,53,95,50,49,0);
          let inviteZ: Array<any> = [434, 797];
          let google1 = 2.0;
         teamdetailsbge = new Map([[`${teamdetailsbge.size}`, t_managerG | teamdetailsbge.size]]);
         mathl = `${(String.fromCharCode(111,0) == mathl ? parseInt(`${google1}`) : mathl.length)}`;
         inviteZ = [mathl.length ^ parseInt(`${google1}`)];
         if (iconsubssuccessS) {
            break;
         }
      } while ((teamdetailsbge.get(`${t_managerG}`) != null) && iconsubssuccessS);
          let historyl = String.fromCharCode(109,111,116,99,111,109,112,95,112,95,54,57,0);
          let gemfileg = 5;
         teamdetailsbge = new Map([[`${gemfileg}`, 1]]);
         historyl = `${historyl.length}`;
         gemfileg |= historyl.length % 3;
          let colorsA: Map<any, any> = new Map([[String.fromCharCode(116,95,56,48,95,102,105,110,100,0),String.fromCharCode(112,101,114,102,111,114,109,101,114,95,54,95,57,50,0)], [String.fromCharCode(105,115,108,111,119,95,56,95,49,49,0),String.fromCharCode(104,95,55,54,95,105,110,99,114,101,109,101,110,116,97,108,0)], [String.fromCharCode(111,95,52,95,116,100,101,99,111,100,101,0),String.fromCharCode(101,120,101,99,117,116,101,95,109,95,50,50,0)]]);
          let floaterI = String.fromCharCode(101,95,56,49,95,114,101,109,105,120,105,110,103,0);
          let debugD = 0.0;
         teamdetailsbge.set(`${t_managerG}`, 3 >> (Math.min(1, Math.abs(t_managerG))));
         colorsA.set(`${floaterI}`, colorsA.size - floaterI.length);
         debugD -= 3 >> (Math.min(2, Math.abs(colorsA.size)));
      let modelsR = 6407360 <= t_managerG;
      do {
         t_managerG >>= Math.min(1, Math.abs(2 >> (Math.min(1, Math.abs(teamdetailsbge.size)))));
         if (modelsR) {
            break;
         }
      } while (modelsR && (teamdetailsbge.size > t_managerG));
         teamdetailsbge.set(`${t_managerG}`, t_managerG);
      crossY += `${launchR.length}`;
       let humidityS = 5.0;
       let pausee = String.fromCharCode(122,95,56,56,0);
       let ajaxO = String.fromCharCode(117,95,52,57,95,114,101,97,108,108,121,0);
      if (pausee.length >= 3) {
          let humidityy = String.fromCharCode(103,108,111,98,97,108,115,95,56,95,55,52,0);
          let whistleL = 5.0;
          let humidityi = 0;
          let privacyP: Map<any, any> = new Map([[String.fromCharCode(97,112,112,108,121,95,106,95,57,52,0),true ], [String.fromCharCode(109,107,118,112,97,114,115,101,114,95,108,95,57,57,0),true ]]);
          let navigationQ = String.fromCharCode(109,95,55,49,95,99,101,108,101,98,114,97,116,101,0);
         humidityS /= Math.max((parseFloat(`${String.fromCharCode(118,0) == ajaxO ? navigationQ.length : ajaxO.length}`)), 2);
         humidityy = `${humidityy.length}`;
         whistleL += parseFloat(`${humidityi + humidityy.length}`);
         humidityi += privacyP.size + humidityi;
         privacyP.set(`${humidityi}`, humidityi ^ 1);
         navigationQ = "2";
      }
         ajaxO = `${(String.fromCharCode(69,0) == ajaxO ? ajaxO.length : parseInt(`${humidityS}`))}`;
          let mbnativee = String.fromCharCode(115,116,114,110,108,101,110,95,113,95,49,55,0);
         humidityS /= Math.max(parseFloat(`${pausee.length}`), 3);
         mbnativee = `${mbnativee.length}`;
       let playY = String.fromCharCode(100,105,115,101,109,118,111,119,101,108,101,100,95,100,95,53,53,0);
       let description_9e = String.fromCharCode(117,95,50,53,95,116,105,109,101,117,116,105,108,115,0);
         pausee = `${3 | pausee.length}`;
      if (ajaxO != String.fromCharCode(72,0)) {
         pausee += `${ajaxO.length}`;
      }
      if (humidityS <= parseFloat(`${ajaxO.length}`)) {
          let playlista = String.fromCharCode(100,101,115,99,112,114,105,112,116,105,111,110,95,111,95,49,49,0);
          let changes = String.fromCharCode(99,95,49,55,95,105,103,110,111,114,101,115,0);
          let helperT = String.fromCharCode(109,111,100,101,99,111,110,116,95,97,95,56,52,0);
          let notificationi = 2.0;
          let halffieldimagep = 5.0;
         ajaxO += `${1 / (Math.max(4, helperT.length))}`;
         playlista += `${(playlista == String.fromCharCode(111,0) ? playlista.length : parseInt(`${halffieldimagep}`))}`;
         changes += `${(String.fromCharCode(116,0) == playlista ? parseInt(`${halffieldimagep}`) : playlista.length)}`;
         helperT += `${changes.length}`;
         notificationi /= Math.max(1, 2 % (Math.max(10, parseInt(`${notificationi}`))));
      }
          let icondefaultthumbnaili = String.fromCharCode(117,95,53,55,95,115,97,118,105,110,103,0);
         humidityS *= parseFloat(`${3}`);
         icondefaultthumbnaili = `${icondefaultthumbnaili.length}`;
      if (ajaxO.length > 2) {
          let i_unlockI = 1.0;
          let bootT = String.fromCharCode(116,105,109,101,102,105,108,116,101,114,95,114,95,50,54,0);
         ajaxO += `${1 - parseInt(`${humidityS}`)}`;
         i_unlockI *= (bootT == String.fromCharCode(106,0) ? bootT.length : parseInt(`${i_unlockI}`));
      }
      policyg.set(`${liveO}`, parseInt(`${humidityS}`) + liveO);
   while (completer || 1 > (launchR.length * 5)) {
       let mimol = false;
       let subtextS: Array<any> = [String.fromCharCode(105,95,49,95,116,104,114,101,97,100,115,97,102,101,0), String.fromCharCode(102,95,57,56,95,102,99,102,115,0), String.fromCharCode(111,95,51,49,95,101,120,99,108,117,100,101,115,0)];
       let videoE = false;
       let themef = String.fromCharCode(115,112,111,116,95,104,95,53,56,0);
       let graphicsC = String.fromCharCode(115,95,54,51,95,98,115,116,114,97,99,116,0);
      for (let b = 0; b < 3; b++) {
         graphicsC += `${2 | subtextS.length}`;
      }
      for (let c = 0; c < 3; c++) {
         videoE = subtextS.includes(mimol);
      }
         graphicsC = `${graphicsC.length * subtextS.length}`;
      for (let c = 0; c < 1; c++) {
          let modity7 = false;
          let moonQ = 5.0;
         themef += `${((videoE ? 3 : 5) / (Math.max(6, (modity7 ? 5 : 3))))}`;
         modity7 = moonQ == 36.92;
         moonQ *= parseInt(`${moonQ}`);
      }
      let interstitial4 = String.fromCharCode(101,122,108,0) == graphicsC;
      do {
          let interstitialA = false;
          let interstitialo: Array<any> = [337, 673];
          let subsy = 5.0;
          let crownv = String.fromCharCode(97,100,118,97,110,99,101,95,109,95,50,57,0);
          let iconschedulec = 4.0;
         graphicsC += `${1 + parseInt(`${iconschedulec}`)}`;
         interstitialA = interstitialo.includes(interstitialA);
         interstitialo = [3];
         subsy /= Math.max(1, parseInt(`${subsy}`));
         crownv += `${parseInt(`${subsy}`) / 3}`;
         iconschedulec -= (parseFloat(`${crownv == String.fromCharCode(83,0) ? crownv.length : parseInt(`${subsy}`)}`));
         if (interstitial4) {
            break;
         }
      } while (((graphicsC.length / 3) < 4 && (graphicsC.length / 3) < 1) && interstitial4);
      let vipsportV = mimol ? !mimol : mimol;
      do {
         mimol = (74 == ((!mimol ? subtextS.length : 74) << (Math.min(subtextS.length, 3))));
         if (vipsportV) {
            break;
         }
      } while ((mimol) && vipsportV);
         subtextS.push(((videoE ? 2 : 1)));
      let mimoh = subtextS.length >= 5327449;
      do {
         subtextS.push(subtextS.length >> (Math.min(Math.abs(1), 5)));
         if (mimoh) {
            break;
         }
      } while (mimoh && (2 > (subtextS.length & 1) || 3 > (graphicsC.length & 1)));
          let sharewhite6 = String.fromCharCode(102,95,49,54,95,105,110,116,101,110,116,105,111,110,0);
          let fill8 = true;
          let showlessj = String.fromCharCode(99,95,53,95,114,101,108,101,97,115,101,100,0);
         subtextS.push(1);
         sharewhite6 += `${showlessj.length % (Math.max(2, sharewhite6.length))}`;
         fill8 = !showlessj.endsWith(`${fill8}`);
          let cast0 = String.fromCharCode(116,120,116,110,105,100,95,56,95,49,48,0);
          let libnmsw = String.fromCharCode(102,95,52,55,95,111,112,116,0);
         mimol = !videoE && subtextS.length == 49;
         cast0 += `${cast0.length}`;
         libnmsw += "1";
      let statsZ = 5765507 >= themef.length;
      do {
          let reactnativeultimatelistviewd = false;
          let libavcodec4 = false;
          let iconfeedbackC = 1;
         themef += `${iconfeedbackC}`;
         reactnativeultimatelistviewd = !libavcodec4;
         libavcodec4 = !reactnativeultimatelistviewd;
         iconfeedbackC <<= Math.min(3, Math.abs(((libavcodec4 ? 5 : 4))));
         if (statsZ) {
            break;
         }
      } while (statsZ && (themef == String.fromCharCode(70,0) || graphicsC.length >= 5));
         mimol = graphicsC == String.fromCharCode(77,0);
          let gemfileu = String.fromCharCode(109,95,53,48,95,111,102,102,101,114,101,100,0);
          let fastg = 5;
         graphicsC = `${((mimol ? 1 : 4))}`;
         gemfileu += `${gemfileu.length | fastg}`;
         fastg += 3;
         videoE = graphicsC.length < 95;
          let selectedY = false;
          let otherP = String.fromCharCode(105,95,52,51,95,114,97,115,116,101,114,105,122,101,0);
          let bottomg: Array<any> = [897, 794, 222];
         videoE = (72 <= ((!mimol ? 72 : themef.length) ^ themef.length));
         selectedY = !selectedY;
         otherP += `${bottomg.length / (Math.max(4, otherP.length))}`;
         bottomg = [((selectedY ? 1 : 3))];
      completer = videoE && fullscreenminc == 42.63;
      break;
   }
   while (completer) {
      iconeditg = [3 & controlsM];
      break;
   }
      controlsM >>= Math.min(Math.abs(parseInt(`${fullscreenminc}`)), 3);
      componentRef.current.measure((x, y, width, height, pageX, pageY) => {
        
        setRefPosition({x: pageX, y: pageY, width: width, height: height});

        const screenHeight = Dimensions.get('window').height;

      iconeditg.push(crossY.length);
      policyg.set(`${sans8}`, 1 | parseInt(`${sans8}`));
       let mapbufferu = 5;
       let nexti = String.fromCharCode(114,101,99,111,110,95,53,95,52,57,0);
       let countdown_ = 0.0;
       let untickX = String.fromCharCode(106,95,49,50,95,114,101,110,111,114,109,0);
         untickX += `${parseInt(`${countdown_}`)}`;
      while (5.27 < (3.69 * countdown_)) {
         nexti = "1";
         break;
      }
         countdown_ /= Math.max(untickX.length, 4);
         untickX += "1";
      for (let v = 0; v < 1; v++) {
          let videocommonD: Map<any, any> = new Map([[String.fromCharCode(103,95,54,51,95,115,111,99,107,101,116,0),String.fromCharCode(99,95,57,51,0)], [String.fromCharCode(109,109,99,111,115,95,101,95,57,54,0),String.fromCharCode(97,108,112,104,97,95,49,95,51,49,0)]]);
          let abidetectc = 1.0;
         nexti = `${1 & nexti.length}`;
         videocommonD.set(`${abidetectc}`, parseInt(`${abidetectc}`) % (Math.max(videocommonD.size, 1)));
      }
         countdown_ += 3 + untickX.length;
       let h_hashh = String.fromCharCode(114,101,100,101,109,112,116,105,111,110,95,120,95,49,54,0);
         mapbufferu -= 1;
      crossY = `${crossY.length & nexti.length}`;
      showlessk = `${launchR.length}`;
   while (2 <= (launchR.length / 5)) {
      launchR = [liveO];
      break;
   }
        const distance = screenHeight - pageY - height;

   if (completer || showlessk.length >= 3) {
      completer = crossY.length < 36;
   }
   while (2 <= liveO) {
       let lessS: Map<any, any> = new Map([[String.fromCharCode(106,95,52,95,99,111,110,110,101,99,116,0),412], [String.fromCharCode(112,97,103,101,115,95,114,95,53,51,0),67], [String.fromCharCode(115,105,120,116,97,112,95,100,95,49,48,0),828]]);
       let predictionbannerB: Map<any, any> = new Map([[String.fromCharCode(100,105,118,105,100,101,100,95,110,95,54,52,0),218], [String.fromCharCode(97,100,106,117,115,109,101,110,116,115,95,98,95,55,55,0),712]]);
       let x_title0 = false;
       let predictionwinB = false;
       let twittere = 4.0;
          let stations1: Map<any, any> = new Map([[String.fromCharCode(114,95,51,53,95,117,110,115,104,105,102,116,0),true ], [String.fromCharCode(109,101,115,115,115,97,103,101,95,114,95,57,53,0),true ], [String.fromCharCode(100,101,97,99,116,95,48,95,54,48,0),true ]]);
          let push6 = 3.0;
         twittere -= (parseFloat(`${parseInt(`${twittere}`) ^ (x_title0 ? 4 : 4)}`));
         stations1 = new Map([[`${stations1.size}`, 2 >> (Math.min(2, Math.abs(parseInt(`${push6}`))))]]);
         push6 /= Math.max(parseFloat(`${1 ^ parseInt(`${push6}`)}`), 3);
      for (let n = 0; n < 3; n++) {
          let clock_ = true;
          let libloggerh = String.fromCharCode(100,105,115,112,111,115,97,98,108,101,0);
         predictionbannerB.set(libloggerh, 2);
         clock_ = clock_ && !clock_;
         libloggerh += "3";
      }
          let helperP = 2.0;
          let stylesJ = 3.0;
         predictionbannerB = new Map([[`${lessS.size}`, lessS.size << (Math.min(Math.abs(2), 3))]]);
         helperP *= parseFloat(`${parseInt(`${stylesJ}`)}`);
         stylesJ -= parseFloat(`${1}`);
      while (!x_title0) {
         predictionwinB = !predictionwinB || twittere > 37.21;
         break;
      }
         x_title0 = (!x_title0 ? !predictionwinB : x_title0);
          let traminiF: Array<any> = [String.fromCharCode(99,95,57,55,95,99,97,108,105,98,114,97,116,101,100,0), String.fromCharCode(118,95,51,51,95,115,101,99,116,105,110,115,0)];
          let predictionactive0 = false;
          let libcrashsdk2 = true;
         lessS = new Map([[`${twittere}`, ((x_title0 ? 1 : 4) * parseInt(`${twittere}`))]]);
         traminiF = [2];
         predictionactive0 = !predictionactive0;
         libcrashsdk2 = (!libcrashsdk2 ? predictionactive0 : !libcrashsdk2);
      if (x_title0 && 1 > (4 / (Math.max(8, predictionbannerB.size)))) {
         predictionbannerB.set(`${predictionwinB}`, lessS.size | 2);
      }
      if ((lessS.size << (Math.min(Math.abs(1), 2))) >= 4) {
          let handlerp: Array<any> = [948, 227, 885];
          let updatesh = String.fromCharCode(114,101,102,112,105,99,95,56,95,50,49,0);
          let iconfeedback9 = 0.0;
          let container0 = true;
         lessS = new Map([[`${lessS.size}`, handlerp.length]]);
         handlerp.push(parseInt(`${iconfeedback9}`));
         updatesh += `${1 / (Math.max(parseInt(`${iconfeedback9}`), 6))}`;
         container0 = iconfeedback9 <= 1.17;
      }
         predictionwinB = twittere >= 94.100;
      while (predictionbannerB.size > 3) {
         x_title0 = lessS.size < 80;
         break;
      }
      for (let d = 0; d < 3; d++) {
         twittere *= parseFloat(`${parseInt(`${twittere}`) << (Math.min(5, Math.abs(3)))}`);
      }
      showlessk += `${1 - mbnativew.length}`;
      break;
   }
       let predictionbanneru: Array<any> = [667, 800, 326];
         predictionbanneru = [2];
         predictionbanneru = [predictionbanneru.length];
         predictionbanneru = [1 & predictionbanneru.length];
      fullscreenminc /= Math.max(5, parseFloat(`${parseInt(`${sans8}`)}`));
      iconeditg.push(3 - liveO);
   while (!mbnativew.endsWith(`${policyg.size}`)) {
      mbnativew = `${mbnativew.length}`;
      break;
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
                  source={require('@static/images/robotoNetwork.gif')}
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
