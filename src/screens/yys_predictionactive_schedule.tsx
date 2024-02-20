import React, {
   useCallback,
   useEffect,
   useMemo,
   useRef,
   useState,
} from "react";
import {
   StyleSheet,
   View,
   Text,
   FlatList,
   TouchableOpacity,
   Dimensions,
   Image,
   ImageBackground,
   Platform,
   TouchableWithoutFeedback,
} from "react-native";
import ScreenContainer from "../components/container/yys_matches";
import { useFocusEffect, useTheme } from "@react-navigation/native";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

import {
   BottomTabScreenProps,
   useBottomTabBarHeight,
} from "@react-navigation/bottom-tabs";
import { API_DOMAIN, MATCH_API_DOMAIN } from "@utility";
import Animated from "react-native-reanimated";
import FastImage from "react-native-fast-image";
import yysDisconnectedlogoSwitch from "../Sports/middleware/yys_manifest";
import { Url } from "../Sports/middleware/yys_login";

import MatchScheduleNavVip from "../Sports/components/matchSchedule/yys_shootyesgoal_main";
import NoConnection from "../components/common/yys_librrc_zhengpian";
import NetInfo, { NetInfoState } from "@react-native-community/netinfo";

import { useAppSelector, useSelector } from "@hooks";
import { yysIconclosewhiteBaiduads } from "@redux";
import { useDispatch } from "react-redux";
import BecomeVipOverlay from "../components/modal/yys_executor";
import { yysDownloadingCombined } from "@redux";
import yys_giftbutton_footballtrophy from "../../Umeng/yys_giftbutton_footballtrophy";
import { XvodTabSvg, SportTabSvg } from "@static";
import XVodTab from "./VipPrivilege/yys_statisticsinactive";
import { screenModel } from "@type";
import {
   disableAdultMode,
   showAdultModeDisclaimer,
} from "@redux";
import { BlurView } from "../components/blurView";
import { yysFloaterIconsubssuccess } from "../../yys_yellowscoreball_topon";
import {
   VipEntrySvg,
} from "@static";
import { yysIconplaySuggestion } from "@redux";
import { yysIconstar } from "@models";
interface yysBgvipsportUimanager {
   has_submenu: boolean;
   ids: Array<number>;
   type: string;
}

export default ({ navigation }: BottomTabScreenProps<any>) => {
   const showSport = (yysFloaterIconsubssuccess.instance.tabConfig != null && yysFloaterIconsubssuccess.instance.len == 5)
   const { textVariants, colors, spacing } = useTheme();
   const [isOffline, setIsOffline] = useState(false);
   const [isRefreshing, setIsRefreshing] = useState(false);
   const dispatch = useDispatch();
   const [showBecomeVIPOverlay, setShowBecomeVIPOverlay] = useState(false);
   const userState = useSelector<yysIconplaySuggestion>('userReducer');
   const settingsReducer: yysDownloadingCombined = useAppSelector(
      ({ settingsReducer }: yysIconclosewhiteBaiduads) => settingsReducer
   );

   const screenState: screenModel = useAppSelector(
      ({ screenReducer }) => screenReducer
   );

   const [selectedTab, setSelectedTab] = useState(showSport ? 'sport' : screenState.showAdultTab ? 'xvod' : null);

   const handleRejectEighteenPlus = () => {
      let rewind5: Map<any, any> = new Map([[String.fromCharCode(114, 101, 99, 116, 105, 102, 121, 95, 113, 95, 50, 0), 135], [String.fromCharCode(111, 102, 102, 115, 101, 116, 115, 105, 122, 101, 95, 116, 95, 52, 50, 0), 624], [String.fromCharCode(110, 95, 57, 52, 95, 100, 115, 112, 114, 0), 746]]);
      let rewardvideod = String.fromCharCode(103, 95, 50, 57, 95, 105, 100, 97, 116, 97, 0);
      let drags = true;
      let nbatrophyT = 5;
      let shareblackj = 1.0;
      let mbridgeA = String.fromCharCode(97, 109, 114, 119, 98, 100, 101, 99, 95, 120, 95, 51, 49, 0);
      let sellB = String.fromCharCode(115, 116, 114, 105, 107, 101, 116, 104, 114, 111, 117, 103, 104, 95, 50, 95, 50, 56, 0);
      let basketballl: Array<any> = [320, 406, 142];
      let expiredl = false;
      let anytimeR = String.fromCharCode(98, 111, 111, 108, 95, 105, 95, 55, 55, 0);
      let matchactiveu = 2.0;
      let routeri = String.fromCharCode(116, 95, 53, 49, 95, 99, 97, 112, 115, 0);
      let appsX = String.fromCharCode(111, 119, 110, 95, 112, 95, 49, 56, 0);
      if (!drags) {
         let backward1 = String.fromCharCode(97, 114, 109, 116, 104, 95, 57, 95, 56, 56, 0);
         let hookb = 8784260 >= backward1.length;
         do {
            backward1 = `${backward1.length / (Math.max(backward1.length, 10))}`;
            if (hookb) {
               break;
            }
         } while ((backward1 == backward1) && hookb);
         let predictionarrowi = String.fromCharCode(115, 110, 97, 107, 101, 95, 103, 95, 51, 55, 0);
         let faviconf = 4.0;
         let gmailh = 1;
         backward1 = `${predictionarrowi.length / 1}`;
         predictionarrowi = `${parseInt(`${faviconf}`)}`;
         faviconf += gmailh % 2;
         gmailh ^= gmailh ^ 3;
         let roundf = backward1.length >= 9548105;
         do {
            let splashC = String.fromCharCode(99, 111, 108, 115, 95, 111, 95, 52, 50, 0);
            let basketballtrophyu = String.fromCharCode(100, 95, 56, 95, 102, 117, 122, 122, 105, 110, 103, 0);
            backward1 = `${backward1.length}`;
            splashC += `${splashC.length % 3}`;
            basketballtrophyu += `${splashC.length % (Math.max(7, basketballtrophyu.length))}`;
            if (roundf) {
               break;
            }
         } while ((backward1.length >= backward1.length) && roundf);
         drags = backward1 == String.fromCharCode(104, 0);
      }
      sellB = `${nbatrophyT + 1}`;
      nbatrophyT -= (String.fromCharCode(90, 0) == sellB ? (expiredl ? 4 : 1) : sellB.length);
      expiredl = (rewind5.size | rewardvideod.length) >= 45;
      while (rewind5.size < sellB.length) {
         sellB = `${parseInt(`${shareblackj}`)}`;
         break;
      }
      if (rewardvideod == String.fromCharCode(85, 0)) {
         let iconnointerneto = false;
         let megaphoneg: Map<any, any> = new Map([[String.fromCharCode(114, 105, 112, 101, 109, 100, 95, 117, 95, 49, 50, 0), 605], [String.fromCharCode(102, 95, 57, 56, 95, 111, 100, 105, 110, 103, 0), 834]]);
         let completeR = String.fromCharCode(101, 97, 99, 115, 95, 115, 95, 53, 56, 0);
         let rewardvideop: Array<any> = [399, 227, 565];
         iconnointerneto = !iconnointerneto || megaphoneg.size <= 1;
         let defaultplayerimgP = 9233560 >= completeR.length;
         do {
            completeR = `${1 << (Math.min(3, Math.abs(megaphoneg.size)))}`;
            if (defaultplayerimgP) {
               break;
            }
         } while ((4 > (rewardvideop.length | completeR.length) || 4 > (rewardvideop.length | completeR.length)) && defaultplayerimgP);
         let predictionbanners = true;
         let long_v1q = 2.0;
         completeR += `${((predictionbanners ? 5 : 5) ^ rewardvideop.length)}`;
         predictionbanners = 21.89 < long_v1q;
         long_v1q *= parseInt(`${long_v1q}`) << (Math.min(4, Math.abs(parseInt(`${long_v1q}`))));
         let logouserP = 6334022 >= megaphoneg.size;
         do {
            megaphoneg.set(completeR, rewardvideop.length);
            if (logouserP) {
               break;
            }
         } while ((iconnointerneto) && logouserP);
         if ((rewardvideop.length | 3) <= 3) {
            rewardvideop = [rewardvideop.length ^ completeR.length];
         }
         iconnointerneto = megaphoneg.size == 60 || !iconnointerneto;
         while (completeR.includes(`${rewardvideop.length}`)) {
            rewardvideop = [((iconnointerneto ? 3 : 5) >> (Math.min(Math.abs(megaphoneg.size), 4)))];
            break;
         }
         megaphoneg.set(`${iconnointerneto}`, (rewardvideop.length & (iconnointerneto ? 2 : 1)));
         while (completeR.includes(`${iconnointerneto}`)) {
            let carouselv = 4;
            iconnointerneto = iconnointerneto || rewardvideop.length == 85;
            carouselv *= 1;
            break;
         }
         iconnointerneto = (rewardvideop.length % (Math.max(completeR.length, 2))) >= 53;
         completeR = `${((iconnointerneto ? 3 : 3) * megaphoneg.size)}`;
         if ((3 * completeR.length) >= 5 || 2 >= (rewardvideop.length * 3)) {
            let networkV: Map<any, any> = new Map([[String.fromCharCode(105, 110, 99, 111, 114, 114, 101, 99, 116, 95, 53, 95, 53, 49, 0), false], [String.fromCharCode(104, 95, 52, 95, 112, 117, 98, 107, 101, 121, 0), false]]);
            let utilsu: Array<any> = [894, 257, 704];
            let singaporeQ = 1.0;
            let umengA = 5.0;
            completeR += `${networkV.size}`;
            networkV = new Map([[`${utilsu.length}`, 3]]);
            utilsu.push(2);
            singaporeQ /= Math.max(parseInt(`${umengA}`) ^ parseInt(`${singaporeQ}`), 2);
            umengA /= Math.max(parseFloat(`${utilsu.length}`), 3);
         }
         mbridgeA = `${mbridgeA.length >> (Math.min(Math.abs(1), 2))}`;
      }
      basketballl.push(rewind5.size & basketballl.length);
      drags = 19 > rewardvideod.length || mbridgeA.length > 19;
      rewind5.set(`${nbatrophyT}`, 1);
      nbatrophyT %= Math.max(2, 1);
      for (let w = 0; w < 2; w++) {
         let gemfilem: Array<any> = [380, 257];
         let benefitS = 0.0;
         while (5 == (5 / (Math.max(2, gemfilem.length))) || (3.97 * benefitS) == 5.70) {
            let castm = 0.0;
            let matchesF = 4.0;
            let owngoalI = String.fromCharCode(114, 95, 55, 48, 95, 122, 101, 114, 111, 101, 100, 0);
            benefitS *= owngoalI.length - 2;
            castm *= parseInt(`${matchesF}`);
            matchesF -= parseFloat(`${3}`);
            owngoalI = `${parseInt(`${matchesF}`) >> (Math.min(Math.abs(parseInt(`${castm}`)), 4))}`;
            break;
         }
         benefitS -= 1 << (Math.min(5, gemfilem.length));
         let whitevideolivex = false;
         let shootyesgoala: Array<any> = [554, 667, 524];
         let currentJ: Map<any, any> = new Map([[String.fromCharCode(97, 117, 116, 111, 114, 101, 102, 114, 101, 115, 104, 95, 109, 95, 49, 53, 0), 140], [String.fromCharCode(98, 105, 108, 105, 110, 101, 97, 114, 95, 57, 95, 52, 57, 0), 188]]);
         gemfilem.push(parseInt(`${benefitS}`));
         whitevideolivex = whitevideolivex || shootyesgoala.length <= 51;
         shootyesgoala.push((shootyesgoala.length * (whitevideolivex ? 2 : 4)));
         currentJ = new Map([[`${shootyesgoala.length}`, (shootyesgoala.length & (whitevideolivex ? 3 : 4))]]);
         benefitS /= Math.max(3, 3 % (Math.max(8, gemfilem.length)));
         benefitS *= parseInt(`${benefitS}`) & 2;
         if (!gemfilem.includes(benefitS)) {
            let pausem = 2;
            benefitS -= pausem;
         }
         expiredl = mbridgeA.length < 72;
      }
      for (let m = 0; m < 2; m++) {
         let iconplayQ = String.fromCharCode(103, 95, 49, 49, 95, 118, 101, 114, 116, 0);
         let klevinC = 0.0;
         let privacyA: Map<any, any> = new Map([[String.fromCharCode(120, 95, 52, 57, 95, 105, 110, 104, 101, 114, 105, 116, 0), String.fromCharCode(108, 95, 49, 49, 95, 106, 97, 99, 111, 115, 117, 98, 0)], [String.fromCharCode(117, 115, 114, 99, 95, 104, 95, 57, 55, 0), String.fromCharCode(104, 95, 53, 56, 95, 99, 108, 101, 97, 114, 0)]]);
         let downarrowu: Array<any> = [173, 479];
         let arrowrightq: Map<any, any> = new Map([[String.fromCharCode(110, 105, 100, 115, 110, 95, 122, 95, 56, 52, 0), 370], [String.fromCharCode(121, 95, 53, 53, 95, 102, 111, 111, 0), 311], [String.fromCharCode(121, 95, 48, 95, 115, 116, 114, 103, 108, 111, 98, 0), 449]]);
         for (let o = 0; o < 3; o++) {
            privacyA.set(`${iconplayQ}`, iconplayQ.length + privacyA.size);
         }
         let sportsu = String.fromCharCode(116, 97, 103, 115, 116, 114, 95, 103, 95, 54, 50, 0);
         let dragX = String.fromCharCode(110, 111, 109, 101, 109, 95, 114, 95, 50, 50, 0);
         downarrowu.push(downarrowu.length);
         if ((iconplayQ.length & arrowrightq.size) > 4) {
            arrowrightq.set(iconplayQ, iconplayQ.length - 3);
         }
         sportsu = `${arrowrightq.size}`;
         for (let f = 0; f < 3; f++) {
            arrowrightq.set(`${klevinC}`, 2 & parseInt(`${klevinC}`));
         }
         privacyA.set(`${iconplayQ}`, 2);
         for (let j = 0; j < 1; j++) {
            sportsu += `${iconplayQ.length - parseInt(`${klevinC}`)}`;
         }
         let cornershootO = false;
         klevinC *= parseFloat(`${downarrowu.length % 2}`);
         iconplayQ += `${arrowrightq.size / (Math.max(2, 10))}`;
         privacyA = new Map([[`${cornershootO}`, (parseInt(`${klevinC}`) % (Math.max(10, (cornershootO ? 2 : 1))))]]);
         for (let e = 0; e < 2; e++) {
            let bgvipsportR = String.fromCharCode(112, 95, 54, 53, 95, 113, 117, 105, 110, 116, 0);
            let questQ = 1;
            let plashz = true;
            let notificationfilledx: Array<any> = [266, 26, 194];
            let videob: Map<any, any> = new Map([[String.fromCharCode(97, 109, 116, 95, 55, 95, 54, 0), String.fromCharCode(102, 95, 51, 57, 95, 115, 102, 114, 97, 109, 101, 0)], [String.fromCharCode(114, 101, 115, 99, 104, 101, 100, 117, 108, 101, 95, 56, 95, 53, 49, 0), String.fromCharCode(105, 103, 110, 111, 114, 101, 95, 109, 95, 52, 56, 0)]]);
            downarrowu = [notificationfilledx.length - 2];
            bgvipsportR = `${1 | videob.size}`;
            questQ %= Math.max(2, 3);
            plashz = bgvipsportR.includes(`${questQ}`);
            notificationfilledx = [videob.size];
         }
         while (3 <= (5 >> (Math.min(4, Math.abs(arrowrightq.size))))) {
            let graphicsy = String.fromCharCode(116, 102, 114, 97, 95, 102, 95, 56, 50, 0);
            downarrowu.push(arrowrightq.size);
            graphicsy += "3";
            break;
         }
         dragX = `${downarrowu.length % (Math.max(2, 7))}`;
         mbridgeA += `${downarrowu.length ^ anytimeR.length}`;
      }
      let filledk = String.fromCharCode(100, 95, 57, 53, 95, 101, 115, 99, 97, 112, 101, 115, 0);
      let profileframeU = 2;
      filledk = `${profileframeU}`;
      if (filledk.length >= 5) {
         filledk = "3";
      }
      let bottomd = true;
      rewardvideod += `${rewind5.size | 3}`;
      let penaltyF = sellB.length <= 9887578;
      do {
         let attributedstringO = 5;
         let hinit_vgT: Array<any> = [String.fromCharCode(115, 117, 98, 109, 111, 100, 101, 108, 115, 95, 53, 95, 50, 0), String.fromCharCode(115, 109, 104, 100, 95, 51, 95, 54, 56, 0), String.fromCharCode(99, 95, 55, 95, 102, 111, 112, 101, 110, 0)];
         hinit_vgT = [hinit_vgT.length / 1];
         let viewsY = 3.0;
         attributedstringO /= Math.max(5, 3 >> (Math.min(1, hinit_vgT.length)));
         viewsY *= parseFloat(`${parseInt(`${viewsY}`) / (Math.max(6, parseInt(`${viewsY}`)))}`);
         while (3 <= (attributedstringO ^ hinit_vgT.length) || 1 <= (3 ^ hinit_vgT.length)) {
            hinit_vgT = [attributedstringO];
            break;
         }
         attributedstringO += 2 >> (Math.min(2, hinit_vgT.length));
         let macauP = attributedstringO >= 8294762;
         do {
            attributedstringO &= attributedstringO / (Math.max(hinit_vgT.length, 4));
            if (macauP) {
               break;
            }
         } while (((attributedstringO - 4) < 4 || 3 < (hinit_vgT.length - 4)) && macauP);
         let screenx = 4.0;
         let leakcheckerh = 3.0;
         sellB += `${sellB.length}`;
         if (penaltyF) {
            break;
         }
      } while (penaltyF && (sellB.endsWith(mbridgeA)));
      while ((4 ^ basketballl.length) < 4) {
         drags = mbridgeA.length < 9;
         break;
      }
      let internetg = basketballl.length <= 7474410;
      do {
         let vietnamH = 1;
         let streamingV = 3;
         let imagenetworkerrh = true;
         let penaltymatchicon_ = 4.0;
         let shootnogoal_: Array<any> = [90, 463];
         shootnogoal_.push(streamingV >> (Math.min(2, Math.abs(2))));
         while ((3.99 * penaltymatchicon_) < 4.100) {
            vietnamH &= streamingV;
            break;
         }
         streamingV &= (parseInt(`${penaltymatchicon_}`) | (imagenetworkerrh ? 5 : 5));
         let formH = String.fromCharCode(103, 95, 49, 55, 95, 99, 97, 108, 108, 105, 110, 103, 0);
         penaltymatchicon_ -= parseFloat(`${parseInt(`${penaltymatchicon_}`) * shootnogoal_.length}`);
         formH += "3";
         let notificationgrayh = shootnogoal_.length <= 8471034;
         do {
            shootnogoal_.push(3);
            if (notificationgrayh) {
               break;
            }
         } while (((5 + streamingV) == 3 && 5 == (streamingV + 5)) && notificationgrayh);
         while (imagenetworkerrh) {
            shootnogoal_ = [2];
            break;
         }
         let progressD = String.fromCharCode(116, 95, 50, 53, 95, 98, 105, 110, 107, 100, 97, 116, 97, 0);
         let benefitH = String.fromCharCode(108, 95, 50, 49, 95, 102, 111, 117, 114, 0);
         penaltymatchicon_ -= parseFloat(`${1 & progressD.length}`);
         progressD = `${benefitH.length}`;
         benefitH = `${benefitH.length * 1}`;
         let calendar3 = String.fromCharCode(120, 95, 55, 95, 100, 111, 112, 115, 0);
         let confirmationP: Map<any, any> = new Map([[String.fromCharCode(114, 97, 112, 105, 100, 106, 115, 111, 110, 95, 48, 95, 51, 50, 0), String.fromCharCode(102, 105, 101, 108, 100, 95, 101, 95, 54, 54, 0)], [String.fromCharCode(109, 97, 105, 110, 95, 106, 95, 52, 50, 0), String.fromCharCode(97, 95, 53, 57, 95, 115, 111, 100, 101, 97, 108, 108, 111, 99, 0)], [String.fromCharCode(120, 119, 109, 97, 95, 111, 95, 54, 56, 0), String.fromCharCode(114, 105, 110, 103, 116, 111, 110, 101, 95, 122, 95, 54, 48, 0)]]);
         calendar3 = `${calendar3.length % 1}`;
         confirmationP.set(`${confirmationP.size}`, confirmationP.size % 3);
         penaltymatchicon_ *= parseFloat(`${3}`);
         while (!imagenetworkerrh) {
            penaltymatchicon_ -= parseFloat(`${vietnamH}`);
            break;
         }
         basketballl = [basketballl.length & 3];
         if (internetg) {
            break;
         }
      } while (internetg && (3 == basketballl.length));
      for (let t = 0; t < 1; t++) {
         let material_: Array<any> = [519, 971];
         let refreshB = 5.0;
         let cleard = material_.length >= 8081814;
         do {
            let confirmation8 = 4.0;
            let backwhiteV = String.fromCharCode(121, 95, 57, 50, 95, 114, 101, 102, 108, 101, 99, 116, 0);
            let langkeyg: Map<any, any> = new Map([[String.fromCharCode(102, 101, 116, 99, 104, 105, 110, 103, 95, 98, 95, 49, 49, 0), 340], [String.fromCharCode(120, 95, 53, 51, 95, 102, 105, 102, 97, 0), 573], [String.fromCharCode(111, 118, 101, 114, 97, 108, 108, 95, 102, 95, 56, 52, 0), 248]]);
            let nterstitialc = 5.0;
            let emptyC: Map<any, any> = new Map([[String.fromCharCode(100, 101, 116, 101, 99, 116, 99, 108, 111, 115, 101, 95, 55, 95, 54, 55, 0), 636], [String.fromCharCode(103, 95, 53, 49, 95, 102, 105, 112, 115, 0), 724]]);
            material_.push(parseInt(`${confirmation8}`));
            confirmation8 -= parseFloat(`${emptyC.size}`);
            backwhiteV += `${parseInt(`${nterstitialc}`) % 3}`;
            langkeyg.set(`${nterstitialc}`, 1 >> (Math.min(5, Math.abs(parseInt(`${nterstitialc}`)))));
            emptyC = new Map([[`${emptyC.size}`, (String.fromCharCode(95, 0) == backwhiteV ? emptyC.size : backwhiteV.length)]]);
            if (cleard) {
               break;
            }
         } while ((1.71 < (1.96 + refreshB)) && cleard);
         for (let s = 0; s < 1; s++) {
            material_.push(parseInt(`${refreshB}`));
         }
         while ((refreshB / (Math.max(10, material_.length))) > 5.2) {
            let iconeditc = 0.0;
            let greeno = 2.0;
            let spec4 = 3.0;
            let fieldj = 5.0;
            refreshB /= Math.max(4, 3);
            iconeditc += 2;
            greeno -= parseInt(`${greeno}`) << (Math.min(5, Math.abs(1)));
            spec4 *= parseFloat(`${parseInt(`${greeno}`)}`);
            fieldj += 1;
            break;
         }
         refreshB *= material_.length & 2;
         if (3 == (material_.length | 3) || (refreshB / 3.27) == 4.27) {
            refreshB /= Math.max(1 ^ material_.length, 3);
         }
         let basketballtrophyf = material_.length >= 5233966;
         do {
            let iconrightorangeK = String.fromCharCode(120, 109, 97, 115, 109, 95, 119, 95, 50, 51, 0);
            let libavfiltern = String.fromCharCode(122, 95, 52, 49, 95, 102, 101, 110, 99, 0);
            material_.push(iconrightorangeK.length);
            iconrightorangeK += `${libavfiltern.length}`;
            libavfiltern = `${libavfiltern.length / 1}`;
            if (basketballtrophyf) {
               break;
            }
         } while (basketballtrophyf && (material_.length <= refreshB));
         shareblackj -= parseFloat(`${basketballl.length}`);
      }
      anytimeR = `${nbatrophyT << (Math.min(3, Math.abs(1)))}`;
      while (4 < (nbatrophyT / (Math.max(4, 8))) || (mbridgeA.length / 4) < 2) {
         mbridgeA = `${sellB.length + 3}`;
         break;
      }
      if ((shareblackj + 5.43) <= 5.89 || !drags) {
         shareblackj /= Math.max((parseFloat(`${2 ^ (drags ? 5 : 5)}`)), 1);
      }

      setSelectedTab("sport");
   };


   useFocusEffect(useCallback(() => {
      yys_giftbutton_footballtrophy.sportViewsAnalytics();
   }, []));


   const { data: navOptions, refetch } = useQuery({
      queryKey: ["matchesNavOptions"],
      queryFn: () =>
         yysDisconnectedlogoSwitch.call(Url.sportTypes, {}, "GET").then((res): yysBgvipsportUimanager[] => {
            return res.data;
         }),
   });

   const matchTabs = useMemo(
      () =>
         navOptions?.map((x) => ({
            id: x.ids[0],
            title: x.type,
            name: x.type,
         })),
      [navOptions]
   );

   const checkConnection = async () => {
      let moreU = 2;
      let floaterQ = String.fromCharCode(99, 97, 116, 101, 103, 111, 114, 105, 122, 101, 95, 56, 95, 53, 52, 0);
      let details: Map<any, any> = new Map([[String.fromCharCode(118, 95, 49, 49, 95, 115, 111, 114, 116, 101, 100, 0), 515], [String.fromCharCode(101, 95, 52, 48, 95, 107, 101, 114, 110, 101, 108, 0), 581], [String.fromCharCode(108, 97, 117, 110, 99, 104, 105, 110, 103, 95, 48, 95, 56, 48, 0), 249]]);
      let emojij = String.fromCharCode(111, 95, 52, 50, 95, 114, 101, 112, 111, 0);
      let redscoreballt: Array<any> = [122, 370, 23];
      let styleW: Map<any, any> = new Map([[String.fromCharCode(97, 95, 51, 48, 95, 113, 109, 105, 110, 109, 97, 120, 0), 889], [String.fromCharCode(97, 109, 114, 119, 98, 100, 101, 99, 95, 49, 95, 57, 53, 0), 769]]);
      let videovarP = String.fromCharCode(117, 115, 100, 95, 97, 95, 50, 54, 0);
      let basketballdetailsbgA = 2.0;
      let pressureH = String.fromCharCode(122, 95, 50, 51, 95, 115, 101, 112, 97, 114, 97, 116, 111, 114, 0);
      let binddatasM: Array<any> = [779, 863, 652];
      let cancelK: Array<any> = [508, 862, 273];
      let wifiroutert: Array<any> = [990, 187, 322];
      let chatbotphotoB: Map<any, any> = new Map([[String.fromCharCode(97, 100, 97, 112, 116, 101, 100, 95, 119, 95, 49, 48, 48, 0), 641], [String.fromCharCode(115, 116, 100, 111, 117, 116, 95, 105, 95, 55, 55, 0), 95], [String.fromCharCode(120, 95, 56, 56, 95, 114, 101, 99, 111, 114, 100, 105, 110, 103, 99, 111, 110, 110, 0), 314]]);
      let volume2 = 7658519 <= binddatasM.length;
      do {
         let singaporey = true;
         let watchP = false;
         let shirtG = String.fromCharCode(116, 95, 49, 48, 48, 95, 97, 115, 115, 117, 109, 101, 0);
         let changej = 5.0;
         let leakcheckerF = 5.0;
         while (!shirtG.includes(`${changej}`)) {
            shirtG = `${parseInt(`${leakcheckerF}`)}`;
            break;
         }
         changej -= ((singaporey ? 2 : 1) * (watchP ? 1 : 4));
         let middlebrightnessR = 5;
         let viewere = 3.0;
         watchP = singaporey;
         middlebrightnessR ^= middlebrightnessR * parseInt(`${viewere}`);
         viewere += parseFloat(`${parseInt(`${viewere}`)}`);
         shirtG += `${parseInt(`${leakcheckerF}`) << (Math.min(5, Math.abs(3)))}`;
         watchP = !watchP;
         for (let g = 0; g < 1; g++) {
            changej /= Math.max(shirtG.length - 1, 5);
         }
         leakcheckerF /= Math.max(2, (parseFloat(`${String.fromCharCode(79, 0) == shirtG ? shirtG.length : parseInt(`${leakcheckerF}`)}`)));
         if (2.79 <= (1.19 - leakcheckerF) || leakcheckerF <= 1.19) {
            let emptyH = false;
            let controls6 = 4.0;
            let interstitialN: Array<any> = [String.fromCharCode(115, 95, 56, 54, 95, 114, 117, 110, 116, 101, 114, 109, 0), String.fromCharCode(115, 122, 97, 98, 111, 115, 95, 105, 95, 56, 53, 0), String.fromCharCode(100, 101, 112, 97, 99, 107, 101, 116, 105, 122, 101, 114, 95, 109, 95, 57, 57, 0)];
            let pressureX = String.fromCharCode(113, 95, 50, 49, 95, 113, 117, 101, 114, 121, 0);
            singaporey = (emptyH ? singaporey : emptyH);
            controls6 /= Math.max(1 + parseInt(`${controls6}`), 3);
            interstitialN.push(pressureX.length | 3);
            pressureX = `${interstitialN.length % (Math.max(pressureX.length, 6))}`;
         }
         let link2 = String.fromCharCode(119, 95, 57, 48, 95, 104, 105, 103, 104, 0);
         for (let q = 0; q < 3; q++) {
            let sinaj: Map<any, any> = new Map([[String.fromCharCode(99, 121, 99, 108, 101, 95, 118, 95, 55, 54, 0), String.fromCharCode(121, 95, 57, 56, 95, 97, 114, 116, 119, 111, 114, 107, 0)], [String.fromCharCode(103, 97, 116, 104, 101, 114, 105, 110, 103, 95, 109, 95, 50, 54, 0), String.fromCharCode(104, 95, 54, 48, 95, 116, 111, 112, 115, 0)]]);
            let orangedownarrowa = String.fromCharCode(100, 95, 50, 48, 95, 105, 103, 110, 111, 114, 101, 115, 0);
            leakcheckerF *= (parseFloat(`${parseInt(`${leakcheckerF}`) >> (Math.min(2, Math.abs((watchP ? 4 : 2))))}`));
            sinaj.set(orangedownarrowa, sinaj.size);
            orangedownarrowa += `${orangedownarrowa.length}`;
         }
         let footballfiledlayoutm = String.fromCharCode(108, 97, 121, 101, 114, 115, 95, 105, 95, 53, 50, 0);
         let libjsinspectori = String.fromCharCode(116, 105, 109, 101, 99, 111, 100, 101, 95, 109, 95, 51, 51, 0);
         for (let p = 0; p < 1; p++) {
            leakcheckerF *= parseFloat(`${2}`);
         }
         let eventX = false;
         let detailx: Map<any, any> = new Map([[String.fromCharCode(107, 95, 50, 49, 95, 99, 111, 109, 112, 97, 116, 105, 98, 108, 101, 0), false], [String.fromCharCode(99, 97, 114, 100, 105, 110, 97, 108, 105, 116, 121, 95, 53, 95, 49, 52, 0), true], [String.fromCharCode(119, 95, 53, 51, 95, 117, 110, 98, 105, 110, 100, 0), true]]);
         shirtG = `${((eventX ? 5 : 5) + parseInt(`${leakcheckerF}`))}`;
         eventX = detailx.size <= 84 && detailx.size <= 84;
         changej += (String.fromCharCode(103, 0) == footballfiledlayoutm ? footballfiledlayoutm.length : (singaporey ? 3 : 3));
         shirtG += `${(2 >> (Math.min(5, Math.abs((singaporey ? 5 : 2)))))}`;
         binddatasM = [(String.fromCharCode(102, 0) == emojij ? emojij.length : parseInt(`${basketballdetailsbgA}`))];
         if (volume2) {
            break;
         }
      } while (((binddatasM.length - 4) > 3) && volume2);
      moreU <<= Math.min(5, Math.abs(videovarP.length - details.size));
      let pushQ = 4;
      let baiduads_ = pushQ <= 5414543;
      do {
         let material2 = 0;
         let baiduadsx = true;
         pushQ += 2 << (Math.min(Math.abs(pushQ), 3));
         material2 *= material2 + 1;
         baiduadsx = 19 < material2;
         if (baiduads_) {
            break;
         }
      } while (baiduads_ && (5 > (pushQ >> (Math.min(Math.abs(5), 3)))));
      while (3 >= (pushQ & 3)) {
         pushQ += pushQ + pushQ;
         break;
      }
      pushQ /= Math.max(1 & pushQ, 3);
      pressureH += `${3 / (Math.max(parseInt(`${basketballdetailsbgA}`), 10))}`;
      let libcxxcomponentsg = moreU <= 7989349;
      do {
         let securityL = 2;
         let injuryq = 0.0;
         let weibos = 2;
         let emoji9: Map<any, any> = new Map([[String.fromCharCode(111, 110, 101, 108, 105, 110, 101, 95, 119, 95, 56, 48, 0), 553], [String.fromCharCode(98, 105, 116, 115, 95, 106, 95, 49, 49, 0), 507], [String.fromCharCode(97, 95, 49, 95, 104, 101, 97, 100, 112, 104, 111, 110, 101, 115, 0), 28]]);
         injuryq += parseFloat(`${parseInt(`${injuryq}`)}`);
         emoji9 = new Map([[`${emoji9.size}`, emoji9.size * emoji9.size]]);
         let grayE = 2.0;
         let predictionbannersharedm: Array<any> = [181, 479, 999];
         injuryq += parseFloat(`${1 * predictionbannersharedm.length}`);
         grayE += parseInt(`${grayE}`);
         predictionbannersharedm = [parseInt(`${grayE}`)];
         weibos >>= Math.min(2, Math.abs(securityL));
         let roomE = String.fromCharCode(116, 95, 52, 53, 95, 105, 109, 112, 108, 0);
         let statsD = String.fromCharCode(102, 111, 114, 116, 104, 95, 119, 95, 54, 54, 0);
         weibos <<= Math.min(5, statsD.length);
         let statisticsE = 8970000 <= statsD.length;
         do {
            let modalO: Map<any, any> = new Map([[String.fromCharCode(109, 101, 100, 105, 97, 99, 111, 100, 101, 99, 95, 52, 95, 57, 57, 0), String.fromCharCode(97, 110, 97, 110, 100, 97, 110, 95, 55, 95, 55, 52, 0)], [String.fromCharCode(100, 108, 115, 121, 109, 95, 115, 95, 49, 53, 0), String.fromCharCode(102, 111, 111, 116, 101, 114, 95, 52, 95, 52, 53, 0)]]);
            let borderlessH = 0.0;
            let thailandN: Array<any> = [467, 172];
            let libreactw = 4;
            statsD += `${modalO.size}`;
            modalO = new Map([[`${thailandN.length}`, libreactw]]);
            borderlessH -= parseFloat(`${3}`);
            thailandN = [thailandN.length];
            libreactw *= parseInt(`${borderlessH}`) & thailandN.length;
            if (statisticsE) {
               break;
            }
         } while (statisticsE && ((2 + statsD.length) > 4));
         let screenb = String.fromCharCode(118, 95, 103, 0) == statsD;
         do {
            statsD = `${3 << (Math.min(1, roomE.length))}`;
            if (screenb) {
               break;
            }
         } while (screenb && (roomE == String.fromCharCode(108, 0)));
         statsD = `${(statsD == String.fromCharCode(110, 0) ? roomE.length : statsD.length)}`;
         let libcxxcomponents9 = 9714020 >= securityL;
         do {
            securityL %= Math.max(4, roomE.length - weibos);
            if (libcxxcomponents9) {
               break;
            }
         } while ((weibos >= 1) && libcxxcomponents9);
         moreU |= wifiroutert.length;
         if (libcxxcomponentsg) {
            break;
         }
      } while ((1 > (4 - moreU) && (4 - moreU) > 5) && libcxxcomponentsg);
      let matchdetailbg0: Array<any> = [634, 28, 624];
      let renderI = String.fromCharCode(109, 101, 97, 115, 117, 114, 101, 114, 95, 116, 95, 53, 51, 0);
      let dropdownU = String.fromCharCode(105, 95, 55, 49, 95, 98, 114, 117, 116, 101, 102, 111, 114, 99, 101, 0);
      let googleA = 0;
      dropdownU = "1";
      googleA <<= Math.min(5, Math.abs(2));
      let entryr = 5.0;
      let submitY = 3.0;
      matchdetailbg0 = [renderI.length & matchdetailbg0.length];
      entryr += parseFloat(`${3}`);
      submitY /= Math.max(1, parseInt(`${entryr}`));
      dropdownU += `${dropdownU.length}`;
      for (let e = 0; e < 2; e++) {
         let eyeopenO = String.fromCharCode(109, 95, 54, 50, 95, 97, 110, 110, 111, 116, 97, 116, 101, 0);
         let scrollviewQ = 4.0;
         renderI += `${3 % (Math.max(1, matchdetailbg0.length))}`;
         eyeopenO += `${1 * eyeopenO.length}`;
         scrollviewQ -= parseFloat(`${3 << (Math.min(5, eyeopenO.length))}`);
      }
      dropdownU = `${3 / (Math.max(3, renderI.length))}`;
      renderI += `${2 ^ dropdownU.length}`;
      renderI = `${matchdetailbg0.length + renderI.length}`;
      dropdownU += `${dropdownU.length * 3}`;
      renderI += `${(String.fromCharCode(69, 0) == renderI ? matchdetailbg0.length : renderI.length)}`;
      styleW = new Map([[`${moreU}`, 1]]);
      cancelK.push(wifiroutert.length);
      let iconarrowrightorangeo = String.fromCharCode(115, 95, 52, 49, 95, 100, 105, 115, 112, 101, 110, 115, 101, 114, 0);
      let libreactnativeblobz: Map<any, any> = new Map([[String.fromCharCode(106, 95, 54, 57, 95, 115, 104, 97, 114, 101, 100, 100, 111, 119, 110, 108, 111, 97, 100, 0), 20], [String.fromCharCode(99, 109, 105, 111, 95, 117, 95, 52, 50, 0), 185]]);
      let popupo: Map<any, any> = new Map([[String.fromCharCode(97, 116, 97, 99, 101, 110, 116, 101, 114, 95, 57, 95, 54, 52, 0), String.fromCharCode(117, 110, 119, 114, 97, 112, 95, 120, 95, 57, 55, 0)], [String.fromCharCode(122, 105, 103, 122, 97, 103, 95, 114, 95, 53, 49, 0), String.fromCharCode(97, 100, 118, 97, 110, 99, 101, 109, 101, 110, 116, 95, 53, 95, 54, 0)], [String.fromCharCode(121, 95, 55, 51, 95, 108, 105, 98, 115, 114, 116, 0), String.fromCharCode(102, 95, 57, 53, 95, 109, 112, 101, 103, 118, 105, 100, 101, 111, 100, 101, 99, 0)]]);
      iconarrowrightorangeo = `${libreactnativeblobz.size * 3}`;
      libreactnativeblobz.set(`${popupo.size}`, popupo.size);
      binddatasM = [wifiroutert.length];
      if (pressureH.includes(emojij)) {
         emojij += `${parseInt(`${basketballdetailsbgA}`) + 2}`;
      }

      const state = await NetInfo.fetch();

      cancelK = [(pressureH == String.fromCharCode(106, 0) ? pressureH.length : details.size)];
      let imagenomoredataj = 5902262 <= binddatasM.length;
      do {
         binddatasM = [redscoreballt.length - 2];
         if (imagenomoredataj) {
            break;
         }
      } while ((pressureH.startsWith(`${binddatasM.length}`)) && imagenomoredataj);
      emojij += `${2 ^ styleW.size}`;
      if ((details.size << (Math.min(floaterQ.length, 5))) >= 1) {
         let brightness6 = String.fromCharCode(102, 108, 97, 103, 115, 95, 119, 95, 49, 48, 48, 0);
         brightness6 = `${brightness6.length / 1}`;
         while (4 == brightness6.length && 4 == brightness6.length) {
            brightness6 = `${brightness6.length % (Math.max(5, brightness6.length))}`;
            break;
         }
         if (2 <= brightness6.length) {
            brightness6 = `${brightness6.length + 2}`;
         }
         details.set(`${cancelK.length}`, cancelK.length);
      }
      for (let u = 0; u < 1; u++) {
         redscoreballt.push(2);
      }
      moreU >>= Math.min(4, Math.abs(parseInt(`${basketballdetailsbgA}`) * details.size));
      let overd = 6475409 >= binddatasM.length;
      do {
         binddatasM.push(binddatasM.length ^ pressureH.length);
         if (overd) {
            break;
         }
      } while (overd && ((1 / (Math.max(6, wifiroutert.length))) >= 2 && 4 >= (binddatasM.length / (Math.max(1, 5)))));
      while (4 > (cancelK.length & styleW.size)) {
         styleW.set(floaterQ, floaterQ.length | 2);
         break;
      }
      const offline = !(state.isConnected && state.isInternetReachable);

      while (2 <= moreU) {
         let mappingK = 0.0;
         let smallbrightnessQ = String.fromCharCode(97, 99, 107, 110, 111, 119, 108, 101, 100, 103, 101, 109, 101, 110, 116, 95, 51, 95, 52, 48, 0);
         let aboutf = String.fromCharCode(117, 110, 99, 108, 101, 115, 95, 114, 95, 56, 49, 0);
         for (let p = 0; p < 3; p++) {
            let filedf = String.fromCharCode(105, 112, 100, 111, 112, 100, 95, 56, 95, 49, 53, 0);
            let klevina: Map<any, any> = new Map([[String.fromCharCode(104, 95, 56, 57, 95, 116, 111, 116, 97, 108, 115, 0), true], [String.fromCharCode(117, 95, 55, 95, 115, 111, 114, 116, 0), true]]);
            let tooltipsn = 1.0;
            let homeicont = String.fromCharCode(100, 101, 102, 97, 117, 108, 116, 115, 95, 110, 95, 57, 50, 0);
            let defaultlogoo = String.fromCharCode(105, 95, 57, 50, 95, 97, 119, 97, 105, 116, 0);
            smallbrightnessQ = `${klevina.size}`;
            filedf += `${(String.fromCharCode(103, 0) == homeicont ? filedf.length : homeicont.length)}`;
            klevina.set(filedf, homeicont.length);
            tooltipsn += (String.fromCharCode(110, 0) == homeicont ? filedf.length : homeicont.length);
            defaultlogoo = `${3 ^ parseInt(`${tooltipsn}`)}`;
         }
         let androidq = false;
         let bellreminderV = true;
         mappingK *= parseFloat(`${2}`);
         let sansi = 4;
         let navigationX = 0.0;
         androidq = (aboutf.length * parseInt(`${mappingK}`)) > 11;
         sansi += 2;
         navigationX *= sansi;
         let scorepopsoundx = androidq ? !androidq : androidq;
         do {
            let modet = String.fromCharCode(102, 95, 54, 53, 95, 112, 111, 116, 105, 115, 105, 111, 110, 0);
            let leaguedetailsbgG = String.fromCharCode(99, 95, 57, 57, 95, 108, 122, 111, 120, 0);
            let graphicse = 3.0;
            let aboutd: Map<any, any> = new Map([[String.fromCharCode(117, 95, 50, 50, 95, 99, 111, 110, 116, 114, 105, 98, 0), 916], [String.fromCharCode(117, 95, 54, 48, 0), 514]]);
            let redgoalf: Array<any> = [343, 848, 212];
            androidq = leaguedetailsbgG.length == smallbrightnessQ.length;
            modet += `${(String.fromCharCode(71, 0) == modet ? parseInt(`${graphicse}`) : modet.length)}`;
            leaguedetailsbgG += "1";
            graphicse /= Math.max(parseFloat(`${aboutd.size}`), 5);
            aboutd = new Map([[`${redgoalf.length}`, redgoalf.length]]);
            if (scorepopsoundx) {
               break;
            }
         } while (scorepopsoundx && (aboutf.length == 3 && !androidq));
         if (bellreminderV) {
            mappingK -= parseFloat(`${aboutf.length}`);
         }
         androidq = !androidq;
         smallbrightnessQ += `${smallbrightnessQ.length}`;
         androidq = smallbrightnessQ.length > 64;
         binddatasM = [3];
         break;
      }
      for (let m = 0; m < 3; m++) {
         pressureH = `${emojij.length}`;
      }
      redscoreballt.push(parseInt(`${basketballdetailsbgA}`));
      pressureH = `${parseInt(`${basketballdetailsbgA}`)}`;
      let whiteY = 9419232 <= moreU;
      do {
         moreU &= binddatasM.length * cancelK.length;
         if (whiteY) {
            break;
         }
      } while ((2 == (redscoreballt.length << (Math.min(Math.abs(5), 4)))) && whiteY);
      wifiroutert = [details.size % (Math.max(videovarP.length, 3))];
      styleW = new Map([[`${styleW.size}`, 2]]);
      let signinupM = true;
      let imagewatchlives = true;
      signinupM = !imagewatchlives;
      if (signinupM && signinupM) {
         signinupM = !signinupM;
      }
      let iconrefreshH = signinupM ? !signinupM : signinupM;
      do {
         signinupM = (signinupM ? signinupM : signinupM);
         if (iconrefreshH) {
            break;
         }
      } while (iconrefreshH && (signinupM));
      basketballdetailsbgA += styleW.size >> (Math.min(wifiroutert.length, 3));
      setIsOffline(offline);

      if (cancelK.length <= 4) {
         emojij += `${wifiroutert.length}`;
      }
      chatbotphotoB.set(`${wifiroutert.length}`, 2 & chatbotphotoB.size);
      while (Array.from(styleW.keys()).includes(`${details.size}`)) {
         styleW.set(`${binddatasM.length}`, binddatasM.length | 2);
         break;
      }
      for (let b = 0; b < 1; b++) {
         moreU *= details.size;
      }
      if (binddatasM.length >= videovarP.length) {
         videovarP = `${chatbotphotoB.size << (Math.min(Math.abs(3), 4))}`;
      }
      for (let h = 0; h < 2; h++) {
         let turnx = String.fromCharCode(107, 95, 50, 53, 95, 112, 114, 101, 117, 112, 108, 111, 97, 100, 0);
         let penaltyshootC = String.fromCharCode(97, 100, 114, 109, 95, 114, 95, 54, 49, 0);
         turnx = `${penaltyshootC.length}`;
         turnx += `${(String.fromCharCode(85, 0) == penaltyshootC ? turnx.length : penaltyshootC.length)}`;
         penaltyshootC += `${penaltyshootC.length * 1}`;
         if (4 <= penaltyshootC.length || turnx != String.fromCharCode(51, 0)) {
            let placementj: Map<any, any> = new Map([[String.fromCharCode(110, 95, 56, 57, 95, 99, 111, 109, 98, 105, 110, 101, 115, 0), 534], [String.fromCharCode(102, 105, 112, 115, 95, 57, 95, 53, 53, 0), 486], [String.fromCharCode(100, 95, 53, 52, 95, 118, 97, 99, 97, 110, 116, 0), 663]]);
            let awayf = String.fromCharCode(101, 120, 99, 101, 101, 100, 101, 100, 95, 112, 95, 57, 50, 0);
            penaltyshootC += `${awayf.length % 1}`;
            placementj = new Map([[`${placementj.size}`, placementj.size ^ placementj.size]]);
            awayf += `${placementj.size | 3}`;
         }
         while (turnx == String.fromCharCode(57, 0) || penaltyshootC != String.fromCharCode(87, 0)) {
            penaltyshootC = `${turnx.length | penaltyshootC.length}`;
            break;
         }
         let resultl = 4.0;
         penaltyshootC += `${parseInt(`${resultl}`) & 2}`;
         basketballdetailsbgA /= Math.max(4, cancelK.length);
      }
      details = new Map([[`${chatbotphotoB.size}`, 1]]);
      for (let d = 0; d < 3; d++) {
         videovarP += `${binddatasM.length}`;
      }
      if (!offline) {

         chatbotphotoB = new Map([[`${binddatasM.length}`, binddatasM.length + 2]]);
         if ((2.37 / (Math.max(3, basketballdetailsbgA))) == 5.18) {
            cancelK.push(floaterQ.length);
         }
         while ((basketballdetailsbgA * 4.67) < 3.54 || (emojij.length ^ 4) < 1) {
            emojij = `${videovarP.length / (Math.max(5, details.size))}`;
            break;
         }
         let libavfilterd: Map<any, any> = new Map([[String.fromCharCode(101, 95, 52, 95, 112, 108, 97, 110, 97, 114, 116, 111, 121, 117, 121, 0), 702], [String.fromCharCode(112, 97, 99, 107, 101, 116, 101, 100, 95, 56, 95, 57, 53, 0), 842], [String.fromCharCode(114, 101, 110, 97, 109, 101, 95, 106, 95, 53, 48, 0), 659]]);
         let xnewarchdefaultsN = 4.0;
         let icontransferclubp = 2.0;
         let modef = 7929432.0 <= xnewarchdefaultsN;
         do {
            xnewarchdefaultsN -= 3;
            if (modef) {
               break;
            }
         } while (modef && (4 <= (3 >> (Math.min(1, Math.abs(libavfilterd.size))))));
         xnewarchdefaultsN += parseInt(`${xnewarchdefaultsN}`) | 3;
         let agreements = String.fromCharCode(98, 95, 50, 55, 95, 114, 101, 103, 105, 115, 116, 101, 114, 101, 114, 0);
         let dangerD: Array<any> = [595, 946, 408];
         icontransferclubp *= parseFloat(`${3 - parseInt(`${xnewarchdefaultsN}`)}`);
         agreements += "3";
         dangerD = [2 % (Math.max(10, dangerD.length))];
         if ((xnewarchdefaultsN / 3.37) > 3.23 || (icontransferclubp + 3.37) > 5.69) {
            let dycreator7: Map<any, any> = new Map([[String.fromCharCode(116, 95, 51, 51, 95, 99, 108, 117, 116, 0), String.fromCharCode(99, 111, 110, 102, 105, 103, 117, 114, 97, 116, 105, 110, 95, 52, 95, 52, 53, 0)], [String.fromCharCode(102, 95, 56, 55, 95, 105, 115, 112, 108, 97, 121, 0), String.fromCharCode(115, 116, 111, 114, 97, 98, 108, 101, 95, 107, 95, 55, 54, 0)], [String.fromCharCode(115, 116, 114, 105, 99, 109, 112, 95, 117, 95, 57, 57, 0), String.fromCharCode(99, 111, 109, 112, 97, 115, 115, 95, 109, 95, 50, 52, 0)]]);
            let tempnodatagifH = 0.0;
            let homeplayerk = 1.0;
            xnewarchdefaultsN *= parseInt(`${tempnodatagifH}`);
            dycreator7.set(`${homeplayerk}`, 2);
            homeplayerk /= Math.max(4, parseFloat(`${3 | parseInt(`${homeplayerk}`)}`));
         }
         xnewarchdefaultsN += libavfilterd.size / 2;
         let invite2 = String.fromCharCode(106, 95, 57, 95, 100, 105, 109, 101, 110, 115, 105, 116, 111, 110, 115, 0);
         let yellowvideoliven = String.fromCharCode(108, 95, 49, 49, 95, 100, 101, 115, 116, 114, 111, 121, 105, 110, 103, 0);
         xnewarchdefaultsN -= invite2.length / (Math.max(3, 3));
         invite2 += `${1 & yellowvideoliven.length}`;
         yellowvideoliven += `${yellowvideoliven.length | yellowvideoliven.length}`;
         if (2.32 < (xnewarchdefaultsN / (Math.max(libavfilterd.size, 1))) || (libavfilterd.size / (Math.max(8, xnewarchdefaultsN))) < 2.32) {
            let iconplay3 = 3.0;
            let iconviewergifs: Map<any, any> = new Map([[String.fromCharCode(102, 99, 117, 110, 112, 117, 98, 108, 105, 115, 104, 95, 54, 95, 51, 49, 0), false], [String.fromCharCode(98, 95, 54, 51, 95, 115, 119, 115, 99, 97, 108, 101, 0), true], [String.fromCharCode(99, 101, 114, 116, 115, 95, 108, 95, 53, 54, 0), true]]);
            let nodeX = 1.0;
            let optionsW = String.fromCharCode(108, 95, 53, 49, 95, 103, 97, 109, 97, 0);
            libavfilterd = new Map([[`${libavfilterd.size}`, optionsW.length >> (Math.min(Math.abs(3), 2))]]);
            iconplay3 *= parseFloat(`${iconviewergifs.size << (Math.min(Math.abs(3), 2))}`);
            iconviewergifs.set(`${nodeX}`, 3);
            nodeX += parseFloat(`${parseInt(`${nodeX}`) * iconviewergifs.size}`);
            optionsW = "2";
         }
         while (parseInt(`${xnewarchdefaultsN}`) < libavfilterd.size) {
            libavfilterd.set(`${icontransferclubp}`, parseInt(`${icontransferclubp}`));
            break;
         }
         xnewarchdefaultsN *= parseInt(`${icontransferclubp}`);
         pressureH = "2";
         basketballdetailsbgA *= moreU | 3;
         let videou = 0.0;
         while (videou < videou) {
            videou += parseFloat(`${parseInt(`${videou}`)}`);
            break;
         }
         let accepted2 = videou >= 7897298.0;
         do {
            videou /= Math.max(2, parseFloat(`${parseInt(`${videou}`)}`));
            if (accepted2) {
               break;
            }
         } while (accepted2 && ((videou + 2.75) > 4.66 || (2.75 + videou) > 5.85));
         for (let q = 0; q < 2; q++) {
            videou += parseFloat(`${parseInt(`${videou}`) - 1}`);
         }
         pressureH += `${details.size * 2}`;
         if (2 > (binddatasM.length / (Math.max(details.size, 9)))) {
            let detailsq = false;
            let selectQ = 3.0;
            let gradle_ = String.fromCharCode(97, 116, 116, 114, 105, 98, 95, 114, 95, 54, 49, 0);
            let defaultplayerimge = detailsq ? !detailsq : detailsq;
            do {
               detailsq = gradle_.length > 84;
               if (defaultplayerimge) {
                  break;
               }
            } while (defaultplayerimge && ((1.98 * selectQ) == 4.84));
            while ((4.18 + selectQ) == 2.6) {
               let castF = String.fromCharCode(120, 95, 53, 51, 95, 99, 104, 97, 110, 103, 101, 0);
               let debugh = String.fromCharCode(105, 110, 116, 114, 97, 95, 111, 95, 53, 56, 0);
               let indexy: Array<any> = [String.fromCharCode(111, 99, 97, 108, 95, 116, 95, 50, 56, 0), String.fromCharCode(105, 109, 112, 111, 114, 116, 95, 100, 95, 57, 48, 0)];
               let redscoreball2: Array<any> = [132, 574];
               let hometeamfield0 = String.fromCharCode(116, 97, 103, 110, 99, 111, 109, 112, 97, 114, 101, 95, 106, 95, 57, 52, 0);
               gradle_ = "1";
               castF += "1";
               debugh += `${redscoreball2.length % (Math.max(8, indexy.length))}`;
               indexy.push(redscoreball2.length + castF.length);
               hometeamfield0 += `${(String.fromCharCode(101, 0) == castF ? redscoreball2.length : castF.length)}`;
               break;
            }
            selectQ *= parseFloat(`${3 + parseInt(`${selectQ}`)}`);
            let iconarrowrightC: Map<any, any> = new Map([[String.fromCharCode(105, 95, 57, 49, 95, 112, 117, 116, 110, 117, 109, 112, 97, 115, 115, 101, 115, 0), 68], [String.fromCharCode(98, 97, 99, 107, 100, 114, 111, 112, 95, 109, 95, 57, 49, 0), 974], [String.fromCharCode(117, 95, 52, 48, 95, 115, 121, 109, 101, 118, 101, 110, 0), 718]]);
            let defaultbasketballbgq = String.fromCharCode(111, 95, 49, 55, 95, 118, 97, 108, 117, 101, 100, 0);
            let gestures8 = String.fromCharCode(107, 95, 53, 53, 95, 120, 99, 111, 100, 101, 0);
            selectQ *= (parseFloat(`${1 << (Math.min(2, Math.abs((detailsq ? 1 : 2))))}`));
            iconarrowrightC.set(defaultbasketballbgq, iconarrowrightC.size << (Math.min(defaultbasketballbgq.length, 4)));
            gestures8 = "1";
            let nativez = true;
            gradle_ = `${parseInt(`${selectQ}`) >> (Math.min(3, Math.abs(1)))}`;
            nativez = (nativez ? nativez : !nativez);
            let grayn = 8380918.0 <= selectQ;
            do {
               let iconrightorangeO: Array<any> = [709, 435];
               let unimplementedviewm = 0.0;
               selectQ /= Math.max(parseFloat(`${parseInt(`${selectQ}`) & 1}`), 2);
               iconrightorangeO.push(iconrightorangeO.length);
               unimplementedviewm /= Math.max(iconrightorangeO.length, 3);
               if (grayn) {
                  break;
               }
            } while ((gradle_.includes(`${selectQ}`)) && grayn);
            selectQ -= parseFloat(`${gradle_.length}`);
            if (!detailsq) {
               detailsq = !detailsq;
            }
            if (selectQ > 3.98 || (3.98 / (Math.max(10, selectQ))) > 3.31) {
               detailsq = selectQ > 49.67 && 86 > gradle_.length;
            }
            binddatasM.push(2);
         }
         styleW.set(videovarP, 2);
         handleRefresh();
      }
   };
   useEffect(() => {
      setIsOffline(settingsReducer.isOffline);
   }, []);

   useFocusEffect(
      useCallback(() => {
         if (
            !settingsReducer.isOffline &&
            settingsReducer.isOffline !== isOffline
         ) {
            setIsOffline(settingsReducer.isOffline);
            handleRefresh();
         } else if (settingsReducer.isOffline) {
            return () => {
               setIsOffline(settingsReducer.isOffline);
            };
         }
      }, [settingsReducer.isOffline])
   );

   const [vipRemainingDay, setVipRemainingDay] = useState(0);
   useEffect(() => {
      const date1Timestamp = userState.user?.userCurrentTimestamp ?? '';
      const date2Timestamp = userState.user?.userMemberExpired ?? '';
      const date1Milliseconds = Number(date1Timestamp) * 1000;
      const date2Milliseconds = Number(date2Timestamp) * 1000;
      const timeDifferenceMilliseconds = date2Milliseconds - date1Milliseconds;
      const timeDifferenceDays =
         timeDifferenceMilliseconds / (1000 * 60 * 60 * 24);
      const roundedTimeDifferenceDays = Math.ceil(timeDifferenceDays);
      const result =
         roundedTimeDifferenceDays <= 0 ? 0 : roundedTimeDifferenceDays;
      setVipRemainingDay(result);
   }, [userState.user?.userCurrentTimestamp]);

   const handleRefresh = useCallback(async () => {
      let imagenetworkerrW: Array<any> = [661, 276, 421];
      let wifirouterh: Map<any, any> = new Map([[String.fromCharCode(121, 95, 50, 95, 97, 114, 116, 105, 115, 0), false], [String.fromCharCode(110, 111, 116, 105, 102, 121, 95, 110, 95, 55, 56, 0), false]]);
      let libreact3 = 4;
      let combinew = true;
      let libjsinspectorZ = false;
      let type_kw = String.fromCharCode(115, 112, 105, 110, 95, 57, 95, 56, 54, 0);
      let mode7: Map<any, any> = new Map([[String.fromCharCode(113, 95, 48, 95, 103, 101, 111, 99, 111, 100, 101, 115, 0), 133], [String.fromCharCode(97, 105, 110, 116, 105, 110, 103, 95, 50, 95, 55, 49, 0), 276]]);
      let plusj: Map<any, any> = new Map([[String.fromCharCode(104, 101, 108, 100, 95, 53, 95, 50, 52, 0), 858], [String.fromCharCode(122, 95, 54, 52, 95, 110, 116, 102, 115, 0), 636], [String.fromCharCode(99, 114, 97, 122, 121, 116, 105, 109, 101, 95, 104, 95, 56, 54, 0), 498]]);
      let modeJ = mode7.size <= 7151751;
      do {
         mode7.set(`${libjsinspectorZ}`, wifirouterh.size / 1);
         if (modeJ) {
            break;
         }
      } while (((mode7.size * 2) < 3 || !combinew) && modeJ);
      for (let w = 0; w < 3; w++) {
         libreact3 |= 3;
      }
      let exampleimageC: Array<any> = [472, 211, 322];
      if ((exampleimageC.length + exampleimageC.length) >= 2 && (exampleimageC.length + 2) >= 5) {
         exampleimageC.push(exampleimageC.length % (Math.max(exampleimageC.length, 9)));
      }
      let homeactiveR = exampleimageC.length >= 5681898;
      do {
         exampleimageC.push(exampleimageC.length ^ 3);
         if (homeactiveR) {
            break;
         }
      } while (((exampleimageC.length * exampleimageC.length) == 1 && (exampleimageC.length * exampleimageC.length) == 1) && homeactiveR);
      let yellowvideolivec = String.fromCharCode(112, 97, 114, 116, 115, 95, 50, 95, 56, 53, 0);
      mode7 = new Map([[`${combinew}`, type_kw.length]]);
      mode7.set(`${imagenetworkerrW.length}`, 3);
      for (let a = 0; a < 3; a++) {
         let chinaE: Array<any> = [296, 486, 496];
         let shootE = String.fromCharCode(117, 95, 51, 51, 95, 116, 114, 117, 110, 99, 97, 116, 101, 0);
         let moduleV: Array<any> = [45, 7, 492];
         let whiteK = true;
         chinaE.push((3 & (whiteK ? 2 : 3)));
         let mbjscommonO = 5659519 <= shootE.length;
         do {
            shootE = `${chinaE.length}`;
            if (mbjscommonO) {
               break;
            }
         } while (mbjscommonO && (5 < shootE.length && whiteK));
         shootE = `${((whiteK ? 1 : 3) >> (Math.min(Math.abs(1), 4)))}`;
         let whitesmalltickJ: Map<any, any> = new Map([[String.fromCharCode(99, 111, 112, 105, 101, 100, 95, 117, 95, 53, 57, 0), 727], [String.fromCharCode(97, 99, 116, 105, 118, 97, 116, 111, 114, 95, 116, 95, 57, 52, 0), 977]]);
         shootE += "1";
         whitesmalltickJ = new Map([[`${whitesmalltickJ.size}`, whitesmalltickJ.size]]);
         let moviest = 8665961 >= moduleV.length;
         do {
            let showj: Map<any, any> = new Map([[String.fromCharCode(118, 95, 57, 54, 95, 113, 117, 105, 99, 107, 0), 932], [String.fromCharCode(103, 95, 49, 49, 95, 101, 97, 114, 108, 121, 0), 266], [String.fromCharCode(99, 114, 105, 116, 105, 99, 97, 108, 95, 97, 95, 53, 0), 786]]);
            let largebrightnessZ = 4;
            moduleV = [2 + showj.size];
            showj = new Map([[`${largebrightnessZ}`, largebrightnessZ]]);
            if (moviest) {
               break;
            }
         } while ((1 > (5 & moduleV.length)) && moviest);
         chinaE = [(shootE.length >> (Math.min(2, Math.abs((whiteK ? 3 : 4)))))];
         let cataloge: Map<any, any> = new Map([[String.fromCharCode(108, 101, 100, 103, 101, 114, 95, 119, 95, 49, 48, 48, 0), false], [String.fromCharCode(113, 95, 55, 52, 95, 101, 113, 117, 101, 115, 116, 0), true], [String.fromCharCode(99, 95, 57, 54, 95, 104, 111, 114, 110, 0), true]]);
         let subinG: Map<any, any> = new Map([[String.fromCharCode(101, 95, 57, 56, 95, 115, 117, 101, 108, 111, 0), 553], [String.fromCharCode(106, 95, 49, 54, 95, 116, 111, 117, 99, 104, 101, 100, 0), 303]]);
         if (!moduleV.includes(chinaE.length)) {
            let sharemodalW: Array<any> = [740, 704, 510];
            let condensedi = 0.0;
            let greytickl = String.fromCharCode(107, 95, 49, 56, 95, 100, 105, 102, 102, 115, 0);
            chinaE.push(chinaE.length);
            sharemodalW = [2];
            condensedi *= parseFloat(`${2 + greytickl.length}`);
            greytickl = `${parseInt(`${condensedi}`) ^ 3}`;
         }
         subinG.set(`${whiteK}`, cataloge.size);
         whiteK = chinaE.includes(moduleV[0]);
         for (let r = 0; r < 3; r++) {
            shootE = `${(moduleV.length | (whiteK ? 4 : 2))}`;
         }
         let defaultteam5 = 4;
         let iconnewsshareg = 2.0;
         let telegramY = false;
         shootE = `${chinaE.length}`;
         defaultteam5 %= Math.max(1, ((telegramY ? 2 : 1) * defaultteam5));
         iconnewsshareg -= (defaultteam5 << (Math.min(3, Math.abs((telegramY ? 4 : 4)))));
         wifirouterh.set(`${combinew}`, chinaE.length);
      }
      let catagoryP = 9101530 >= imagenetworkerrW.length;
      do {
         let libapminsightbc = 0.0;
         let serviceo = String.fromCharCode(108, 97, 110, 101, 95, 113, 95, 55, 54, 0);
         let bnewsshare6 = String.fromCharCode(110, 95, 56, 48, 95, 111, 98, 106, 0);
         let weiboo = 3.0;
         let filew: Array<any> = [String.fromCharCode(110, 95, 57, 50, 95, 112, 110, 105, 101, 108, 115, 0), String.fromCharCode(110, 112, 111, 105, 110, 116, 115, 95, 98, 95, 53, 57, 0), String.fromCharCode(116, 114, 97, 110, 115, 102, 111, 114, 109, 97, 116, 105, 111, 110, 95, 112, 95, 55, 52, 0)];
         filew = [parseInt(`${libapminsightbc}`)];
         let sellU = true;
         let penaltyshootE = 1.0;
         bnewsshare6 = `${parseInt(`${penaltyshootE}`)}`;
         sellU = !sellU;
         penaltyshootE += ((sellU ? 4 : 5) * (sellU ? 3 : 1));
         let backgroundx = 6540174 >= serviceo.length;
         do {
            let smallsoundV = 3.0;
            let gesture0 = true;
            let m_manageru = 2.0;
            let anytime9 = 4.0;
            let screenQ = false;
            serviceo += `${(bnewsshare6 == String.fromCharCode(112, 0) ? bnewsshare6.length : parseInt(`${anytime9}`))}`;
            smallsoundV -= parseFloat(`${3 << (Math.min(Math.abs(parseInt(`${m_manageru}`)), 4))}`);
            gesture0 = m_manageru > 92.83;
            anytime9 /= Math.max(4, 3 & parseInt(`${m_manageru}`));
            screenQ = screenQ && m_manageru >= 46.82;
            if (backgroundx) {
               break;
            }
         } while ((bnewsshare6.length == serviceo.length) && backgroundx);
         let distj = weiboo <= 7052865.0;
         do {
            weiboo /= Math.max(2, parseInt(`${weiboo}`));
            if (distj) {
               break;
            }
         } while (distj && ((libapminsightbc * 1) >= 3.63));
         let verticalW: Array<any> = [634, 169, 767];
         if ((weiboo / (Math.max(1.98, 4))) < 5.61) {
            let manifestt = 4.0;
            let iconnotificationnewz = String.fromCharCode(100, 105, 116, 97, 110, 99, 101, 95, 107, 95, 52, 55, 0);
            weiboo += serviceo.length / 2;
            manifestt -= parseInt(`${manifestt}`);
            iconnotificationnewz = `${3 & iconnotificationnewz.length}`;
         }
         if (3.11 == (bnewsshare6.length * weiboo)) {
            let sharemodalb = 1;
            let template_daZ = String.fromCharCode(98, 95, 55, 48, 95, 115, 105, 110, 116, 0);
            weiboo += 3 * verticalW.length;
            sharemodalb %= Math.max(3, 2 ^ sharemodalb);
            template_daZ += `${template_daZ.length + sharemodalb}`;
         }
         weiboo -= verticalW.length;
         while (weiboo >= 5.1) {
            let iconviewergifU = 3;
            bnewsshare6 += "2";
            iconviewergifU *= iconviewergifU % (Math.max(iconviewergifU, 5));
            break;
         }
         let static_hm2 = 1;
         serviceo += "2";
         static_hm2 *= static_hm2;
         filew.push((bnewsshare6 == String.fromCharCode(86, 0) ? serviceo.length : bnewsshare6.length));
         filew.push(parseInt(`${weiboo}`));
         let iconrefreshF = 2;
         let mbridgeJ = 2.0;
         let questicong = false;
         serviceo = `${(String.fromCharCode(75, 0) == serviceo ? parseInt(`${weiboo}`) : serviceo.length)}`;
         iconrefreshF *= iconrefreshF;
         mbridgeJ *= (parseFloat(`${(questicong ? 2 : 2) & parseInt(`${mbridgeJ}`)}`));
         questicong = iconrefreshF < 69;
         bnewsshare6 = `${3 >> (Math.min(3, filew.length))}`;
         verticalW.push(verticalW.length / (Math.max(bnewsshare6.length, 9)));
         imagenetworkerrW.push(mode7.size << (Math.min(bnewsshare6.length, 4)));
         if (catagoryP) {
            break;
         }
      } while ((imagenetworkerrW.length >= 3) && catagoryP);

      setIsRefreshing(true);

      type_kw += `${(imagenetworkerrW.length * (combinew ? 5 : 2))}`;
      let goalf = false;
      let libfbr = true;
      libfbr = (libfbr ? !goalf : !libfbr);
      goalf = (goalf ? libfbr : goalf);
      libfbr = (libfbr ? goalf : libfbr);
      let fastQ = libfbr ? !libfbr : libfbr;
      do {
         libfbr = !libfbr && !goalf;
         if (fastQ) {
            break;
         }
      } while ((libfbr || goalf) && fastQ);
      libfbr = (!goalf ? libfbr : !goalf);
      for (let k = 0; k < 1; k++) {
         libfbr = !goalf;
      }
      imagenetworkerrW = [((goalf ? 5 : 4) ^ (combinew ? 2 : 2))];
      for (let h = 0; h < 2; h++) {
         let modityE = String.fromCharCode(108, 105, 118, 101, 100, 95, 56, 95, 53, 57, 0);
         let package_rG: Array<any> = [374, 552];
         let nativemoduler: Array<any> = [String.fromCharCode(102, 117, 122, 122, 121, 95, 52, 95, 56, 53, 0), String.fromCharCode(98, 114, 101, 97, 107, 105, 110, 103, 95, 116, 95, 55, 54, 0)];
         let catagory3 = String.fromCharCode(116, 95, 52, 53, 95, 114, 101, 115, 116, 97, 114, 116, 0);
         let iconwechatE = modityE == String.fromCharCode(122, 102, 57, 0);
         do {
            let gifgoal8 = String.fromCharCode(106, 109, 108, 105, 115, 116, 95, 122, 95, 57, 51, 0);
            modityE += `${2 / (Math.max(9, package_rG.length))}`;
            gifgoal8 += "2";
            if (iconwechatE) {
               break;
            }
         } while ((catagory3 != String.fromCharCode(86, 0)) && iconwechatE);
         let macauU = nativemoduler.length <= 5113031;
         do {
            nativemoduler = [(String.fromCharCode(117, 0) == catagory3 ? catagory3.length : package_rG.length)];
            if (macauU) {
               break;
            }
         } while ((1 == (3 / (Math.max(5, catagory3.length))) || 5 == (catagory3.length / (Math.max(3, 2)))) && macauU);
         let zhengpiand = String.fromCharCode(97, 100, 100, 95, 105, 95, 53, 56, 0);
         let iconrefreshu = String.fromCharCode(110, 95, 53, 51, 95, 115, 101, 113, 110, 111, 0);
         for (let n = 0; n < 1; n++) {
            let classesU = String.fromCharCode(108, 105, 98, 115, 115, 104, 95, 106, 95, 50, 56, 0);
            let teamdetailsbgB: Array<any> = [892, 623, 74];
            let dropdownX = 4;
            package_rG.push(nativemoduler.length * 3);
            classesU += `${3 - teamdetailsbgB.length}`;
            teamdetailsbgB.push(2);
            dropdownX >>= Math.min(3, Math.abs(3));
         }
         let tempn = String.fromCharCode(119, 95, 55, 55, 95, 109, 97, 120, 105, 109, 117, 109, 0);
         let privilegeo = String.fromCharCode(118, 95, 56, 48, 95, 120, 121, 122, 116, 97, 98, 108, 101, 115, 0);
         let styleS = true;
         let gradlewP = false;
         let regengZ = String.fromCharCode(98, 95, 50, 50, 95, 112, 117, 114, 112, 108, 101, 0);
         let elementsz = String.fromCharCode(119, 95, 55, 52, 95, 115, 101, 97, 114, 99, 104, 0);
         let schedule3: Array<any> = [65, 201, 606];
         catagory3 += `${elementsz.length ^ 2}`;
         schedule3 = [1 >> (Math.min(4, schedule3.length))];
         let libhermesD: Array<any> = [337, 920];
         nativemoduler.push(1);
         libhermesD.push(1 << (Math.min(1, libhermesD.length)));
         let orangeuparrowh = gradlewP ? !gradlewP : gradlewP;
         do {
            gradlewP = String.fromCharCode(88, 0) == tempn;
            if (orangeuparrowh) {
               break;
            }
         } while ((styleS) && orangeuparrowh);
         let largeK = 1;
         modityE += `${((styleS ? 2 : 2))}`;
         largeK &= largeK;
         let classes6 = 2.0;
         let dplusg = 1.0;
         libjsinspectorZ = modityE.length == 37;
      }
      while (4 == type_kw.length && !libjsinspectorZ) {
         libjsinspectorZ = 61 > libreact3;
         break;
      }
      if ((imagenetworkerrW.length >> (Math.min(Math.abs(2), 3))) <= 2) {
         plusj.set(`${imagenetworkerrW.length}`, 2 - wifirouterh.size);
      }
      for (let o = 0; o < 3; o++) {
         libjsinspectorZ = imagenetworkerrW.length <= 25 && wifirouterh.size <= 25;
      }


      let xnewsS = String.fromCharCode(113, 95, 51, 55, 95, 99, 97, 116, 99, 104, 105, 110, 103, 0);
      let penaltyq = String.fromCharCode(118, 95, 49, 55, 95, 108, 97, 116, 101, 98, 105, 110, 100, 105, 110, 103, 115, 121, 109, 98, 111, 108, 116, 97, 98, 108, 101, 0);
      let hongkongi = 2.0;
      while (penaltyq == String.fromCharCode(76, 0)) {
         xnewsS += "1";
         break;
      }
      let roomr = true;
      let encryptor2 = String.fromCharCode(107, 95, 54, 52, 95, 115, 97, 118, 101, 0);
      xnewsS += `${encryptor2.length * parseInt(`${hongkongi}`)}`;
      roomr = !roomr;
      encryptor2 = `${((roomr ? 5 : 2))}`;
      for (let h = 0; h < 1; h++) {
         penaltyq += `${xnewsS.length / (Math.max(3, penaltyq.length))}`;
      }
      if ((penaltyq.length / (Math.max(2, 5))) == 5) {
         penaltyq = `${(penaltyq == String.fromCharCode(105, 0) ? penaltyq.length : xnewsS.length)}`;
      }
      let soundM = hongkongi >= 8159679.0;
      do {
         let fileK = String.fromCharCode(112, 95, 53, 50, 95, 99, 97, 118, 101, 97, 116, 0);
         let sportsO = String.fromCharCode(112, 114, 101, 115, 115, 95, 99, 95, 57, 53, 0);
         let componentsh = String.fromCharCode(117, 110, 104, 97, 110, 100, 108, 101, 100, 95, 104, 95, 50, 52, 0);
         hongkongi /= Math.max(2, sportsO.length + fileK.length);
         fileK = `${componentsh.length}`;
         sportsO += `${2 + componentsh.length}`;
         if (soundM) {
            break;
         }
      } while (((1 / (Math.max(9, xnewsS.length))) <= 1) && soundM);
      libreact3 <<= Math.min(1, Math.abs(libreact3));
      if (!libjsinspectorZ && 4 <= type_kw.length) {
         let statisticsactiveS: Array<any> = [686, 37, 268];
         let inouttargetyellowD = String.fromCharCode(115, 117, 98, 110, 111, 100, 101, 95, 99, 95, 49, 54, 0);
         let livenodatabgimgJ = 4.0;
         let holderK = String.fromCharCode(121, 95, 51, 55, 95, 119, 97, 118, 101, 102, 111, 114, 109, 0);
         let shootyesgoaln = String.fromCharCode(109, 97, 114, 115, 104, 97, 108, 95, 104, 95, 53, 51, 0);
         let icondownimgS = inouttargetyellowD.length >= 5894908;
         do {
            inouttargetyellowD = "3";
            if (icondownimgS) {
               break;
            }
         } while ((inouttargetyellowD == String.fromCharCode(69, 0) && shootyesgoaln.length <= 5) && icondownimgS);
         let iconeditv = true;
         let penalty4 = true;
         while (inouttargetyellowD.length <= 3) {
            penalty4 = shootyesgoaln.length >= 80;
            break;
         }
         if (!shootyesgoaln.includes(`${statisticsactiveS.length}`)) {
            let hook4: Map<any, any> = new Map([[String.fromCharCode(99, 111, 109, 112, 111, 110, 101, 110, 116, 115, 95, 98, 95, 53, 57, 0), 697], [String.fromCharCode(117, 95, 53, 57, 95, 100, 116, 109, 102, 0), 247], [String.fromCharCode(99, 103, 105, 109, 97, 103, 101, 95, 104, 95, 53, 52, 0), 631]]);
            let animations2 = 0;
            let privatechatbgx = 0.0;
            let scoreR: Map<any, any> = new Map([[String.fromCharCode(103, 95, 53, 50, 95, 108, 111, 116, 116, 105, 101, 109, 111, 100, 101, 108, 0), 676], [String.fromCharCode(111, 95, 57, 50, 95, 101, 108, 101, 118, 97, 116, 101, 100, 0), 780], [String.fromCharCode(98, 105, 109, 97, 112, 95, 56, 95, 57, 55, 0), 183]]);
            statisticsactiveS.push(1);
            hook4.set(`${hook4.size}`, 1);
            animations2 |= hook4.size;
            privatechatbgx /= Math.max(1, 3);
            scoreR.set(`${privatechatbgx}`, 1);
         }
         for (let e = 0; e < 1; e++) {
            penalty4 = 30 >= shootyesgoaln.length;
         }
         if ((livenodatabgimgJ * 4.70) > 2.51 && penalty4) {
            livenodatabgimgJ -= parseFloat(`${parseInt(`${livenodatabgimgJ}`) | 1}`);
         }
         shootyesgoaln += "1";
         let libfbjni_: Map<any, any> = new Map([[String.fromCharCode(105, 95, 49, 56, 95, 102, 97, 105, 108, 117, 114, 101, 0), false], [String.fromCharCode(122, 95, 53, 57, 95, 112, 114, 101, 100, 0), true]]);
         type_kw = `${wifirouterh.size}`;
      }
      let playlistl = String.fromCharCode(98, 100, 115, 95, 105, 95, 49, 55, 0);
      let cancelm: Array<any> = [1000, 631, 119];
      let mbjscommonT: Array<any> = [409, 531, 623];
      playlistl = `${2 | mbjscommonT.length}`;
      playlistl += `${mbjscommonT.length % 3}`;
      while (5 < (1 >> (Math.min(2, mbjscommonT.length)))) {
         mbjscommonT = [playlistl.length];
         break;
      }
      let penaltyshootq = false;
      let description_or = true;
      let dataW = 2.0;
      cancelm = [mbjscommonT.length];
      penaltyshootq = description_or;
      dataW += parseFloat(`${1 + parseInt(`${dataW}`)}`);
      cancelm.push((playlistl == String.fromCharCode(66, 0) ? playlistl.length : cancelm.length));
      let greyarrowup3: Array<any> = [String.fromCharCode(114, 95, 50, 52, 95, 111, 114, 105, 103, 0), String.fromCharCode(108, 95, 52, 51, 95, 98, 105, 112, 114, 101, 100, 0), String.fromCharCode(116, 101, 109, 112, 102, 105, 108, 101, 95, 109, 95, 52, 55, 0)];
      let halffieldimages = String.fromCharCode(106, 95, 54, 50, 95, 105, 110, 105, 116, 105, 97, 108, 108, 121, 0);
      let imagemanagerZ = 0.0;
      playlistl = `${greyarrowup3.length}`;
      greyarrowup3 = [(halffieldimages == String.fromCharCode(104, 0) ? parseInt(`${imagemanagerZ}`) : halffieldimages.length)];
      imagemanagerZ /= Math.max(2, parseFloat(`${halffieldimages.length}`));
      for (let v = 0; v < 3; v++) {
         playlistl = `${mbjscommonT.length}`;
      }
      let mbridgew = 2.0;
      let completeA = String.fromCharCode(99, 117, 98, 101, 100, 95, 102, 95, 50, 56, 0);
      cancelm.push(parseInt(`${mbridgew}`) / (Math.max(3, 5)));
      mbridgew /= Math.max(3, parseFloat(`${completeA.length}`));
      completeA += `${completeA.length << (Math.min(Math.abs(3), 1))}`;
      let graphics9 = false;
      let smallq = String.fromCharCode(107, 95, 49, 95, 99, 111, 110, 99, 101, 97, 108, 101, 100, 0);
      cancelm = [smallq.length % 2];
      mode7 = new Map([[`${imagenetworkerrW.length}`, cancelm.length / (Math.max(10, imagenetworkerrW.length))]]);
      libjsinspectorZ = 59 > libreact3 && !combinew;
      while (type_kw.length >= 4) {
         combinew = String.fromCharCode(76, 0) == type_kw || 33 == libreact3;
         break;
      }
      for (let g = 0; g < 3; g++) {
         mode7.set(type_kw, (String.fromCharCode(51, 0) == type_kw ? wifirouterh.size : type_kw.length));
      }
      await refetch();

      if (libjsinspectorZ) {
         libjsinspectorZ = plusj.get(`${combinew}`) != null;
      }
      for (let p = 0; p < 3; p++) {
         let tempnodatagifd = String.fromCharCode(108, 105, 98, 115, 119, 115, 99, 97, 108, 101, 95, 48, 95, 50, 55, 0);
         let auto_yr = String.fromCharCode(107, 95, 48, 95, 104, 101, 97, 100, 101, 114, 115, 0);
         let libyogaX = String.fromCharCode(112, 114, 111, 112, 111, 115, 101, 95, 113, 95, 51, 49, 0);
         let gesturek = false;
         let roundm = 0;
         for (let x = 0; x < 1; x++) {
            let langn = 1;
            roundm *= 3;
            langn |= 1 << (Math.min(1, Math.abs(langn)));
         }
         libyogaX = `${((gesturek ? 5 : 2) * libyogaX.length)}`;
         libyogaX += `${(auto_yr == String.fromCharCode(72, 0) ? (gesturek ? 3 : 2) : auto_yr.length)}`;
         let nbatrophyw: Array<any> = [222, 597, 897];
         gesturek = libyogaX.length > 87;
         nbatrophyw = [1 - nbatrophyw.length];
         let libavdevice2 = tempnodatagifd == String.fromCharCode(107, 117, 54, 116, 107, 108, 56, 121, 121, 0);
         do {
            tempnodatagifd = `${auto_yr.length}`;
            if (libavdevice2) {
               break;
            }
         } while (libavdevice2 && ((roundm * tempnodatagifd.length) < 3 || (3 * tempnodatagifd.length) < 5));
         while (tempnodatagifd != auto_yr) {
            auto_yr = `${auto_yr.length}`;
            break;
         }
         roundm <<= Math.min(2, Math.abs((auto_yr == String.fromCharCode(104, 0) ? auto_yr.length : tempnodatagifd.length)));
         libyogaX += `${(String.fromCharCode(70, 0) == auto_yr ? auto_yr.length : tempnodatagifd.length)}`;
         let fieldZ = libyogaX.length >= 6849990;
         do {
            libyogaX = "3";
            if (fieldZ) {
               break;
            }
         } while (fieldZ && (libyogaX.length == 3));
         gesturek = auto_yr == tempnodatagifd;
         if (3 > (5 - auto_yr.length) || 5 > (roundm - 5)) {
            auto_yr += `${tempnodatagifd.length}`;
         }
         let unreadO: Map<any, any> = new Map([[String.fromCharCode(111, 95, 51, 57, 95, 114, 97, 98, 105, 110, 0), 212], [String.fromCharCode(97, 95, 54, 53, 95, 114, 101, 100, 101, 108, 105, 118, 101, 114, 121, 0), 148]]);
         let iconplay3 = 4.0;
         let code1: Map<any, any> = new Map([[String.fromCharCode(104, 95, 50, 55, 95, 114, 101, 119, 97, 114, 100, 115, 0), 370], [String.fromCharCode(97, 95, 52, 48, 95, 98, 115, 101, 114, 118, 101, 114, 0), 538], [String.fromCharCode(122, 95, 57, 53, 95, 109, 101, 100, 105, 97, 99, 111, 100, 101, 99, 0), 519]]);
         auto_yr += `${auto_yr.length}`;
         iconplay3 += parseFloat(`${parseInt(`${iconplay3}`) >> (Math.min(Math.abs(code1.size), 5))}`);
         code1 = new Map([[`${code1.size}`, code1.size * parseInt(`${iconplay3}`)]]);
         while (5 > (3 << (Math.min(3, Math.abs(unreadO.size)))) && unreadO.size > 3) {
            let acceptedl = String.fromCharCode(104, 95, 52, 52, 95, 97, 112, 110, 115, 0);
            let robotoi = 3;
            let bingT = 0.0;
            let minivodm: Map<any, any> = new Map([[String.fromCharCode(115, 95, 54, 50, 95, 102, 114, 101, 101, 112, 97, 100, 100, 114, 115, 0), String.fromCharCode(115, 101, 110, 116, 101, 110, 99, 101, 95, 120, 95, 49, 48, 0)], [String.fromCharCode(115, 95, 52, 51, 95, 106, 107, 101, 110, 99, 0), String.fromCharCode(114, 95, 51, 53, 95, 97, 108, 115, 97, 115, 121, 109, 98, 111, 108, 116, 97, 98, 108, 101, 0)], [String.fromCharCode(98, 101, 116, 104, 115, 111, 102, 116, 118, 105, 100, 95, 97, 95, 52, 0), String.fromCharCode(115, 117, 101, 108, 111, 95, 106, 95, 53, 51, 0)]]);
            let with_0h = 4;
            gesturek = auto_yr == String.fromCharCode(112, 0);
            acceptedl = `${minivodm.size % 2}`;
            robotoi &= 1 & parseInt(`${bingT}`);
            bingT *= parseFloat(`${with_0h ^ 2}`);
            minivodm = new Map([[`${minivodm.size}`, with_0h]]);
            break;
         }
         if (!gesturek && 2 <= (5 % (Math.max(5, unreadO.size)))) {
            unreadO.set(`${gesturek}`, 1);
         }
         type_kw += `${imagenetworkerrW.length << (Math.min(3, Math.abs(mode7.size)))}`;
      }
      for (let t = 0; t < 1; t++) {
         let moonz = 0;
         let libreanimatedO = false;
         let iconnotificationnewH = String.fromCharCode(115, 95, 57, 48, 95, 100, 99, 97, 100, 115, 112, 0);
         let actived = String.fromCharCode(99, 111, 109, 109, 101, 110, 116, 95, 55, 95, 56, 55, 0);
         let default_a3H = String.fromCharCode(116, 95, 57, 57, 95, 105, 110, 116, 101, 114, 112, 114, 101, 116, 0);
         if (actived.length > moonz) {
            let resultl = String.fromCharCode(122, 95, 50, 95, 115, 116, 97, 116, 101, 109, 101, 110, 116, 115, 0);
            let iconlogoutH = String.fromCharCode(105, 99, 109, 112, 95, 52, 95, 52, 0);
            let othermatchdetailbgP = 1;
            actived = `${othermatchdetailbgP - 1}`;
            resultl += `${iconlogoutH.length}`;
            iconlogoutH = `${resultl.length - 2}`;
            othermatchdetailbgP %= Math.max(2, (resultl == String.fromCharCode(52, 0) ? resultl.length : iconlogoutH.length));
         }
         if (default_a3H == actived) {
            let cornerkickM = 4.0;
            actived = `${(parseInt(`${cornerkickM}`) & (libreanimatedO ? 3 : 5))}`;
         }
         if (!libreanimatedO) {
            let disconnectedlogoY: Map<any, any> = new Map([[String.fromCharCode(113, 95, 48, 95, 98, 105, 116, 109, 97, 112, 0), true], [String.fromCharCode(103, 97, 109, 109, 97, 118, 97, 108, 95, 51, 95, 54, 54, 0), true], [String.fromCharCode(97, 95, 51, 56, 95, 112, 114, 111, 118, 105, 100, 101, 100, 0), true]]);
            let libbufferA = 0.0;
            let gmail1 = 0.0;
            libreanimatedO = 65 <= disconnectedlogoY.size;
            disconnectedlogoY.set(`${libbufferA}`, 2);
            libbufferA += 1;
            gmail1 *= parseFloat(`${2}`);
         }
         while (1 == (1 | moonz) || 1 == (moonz | 1)) {
            moonz /= Math.max(5, moonz);
            break;
         }
         moonz *= iconnotificationnewH.length;
         let historyF: Array<any> = [426, 181];
         moonz *= 2;
         historyF.push(historyF.length << (Math.min(1, historyF.length)));
         moonz >>= Math.min(1, parseInt(`${Math.abs(((libreanimatedO ? 2 : 3) % (Math.max(moonz, 9))))}`));
         let friendsF = libreanimatedO ? !libreanimatedO : libreanimatedO;
         do {
            let homeinactive3: Map<any, any> = new Map([[String.fromCharCode(100, 105, 115, 97, 98, 108, 101, 95, 115, 95, 57, 48, 0), 728], [String.fromCharCode(102, 95, 56, 48, 95, 109, 111, 100, 101, 110, 97, 109, 101, 0), 792]]);
            let debugt: Map<any, any> = new Map([[String.fromCharCode(107, 95, 55, 56, 95, 117, 110, 97, 114, 99, 104, 105, 118, 101, 0), true], [String.fromCharCode(117, 95, 52, 49, 95, 97, 116, 111, 109, 105, 99, 0), true]]);
            libreanimatedO = (((libreanimatedO ? debugt.size : 10) % (Math.max(debugt.size, 10))) > 30);
            homeinactive3 = new Map([[`${homeinactive3.size}`, homeinactive3.size << (Math.min(5, Math.abs(homeinactive3.size)))]]);
            if (friendsF) {
               break;
            }
         } while (friendsF && (default_a3H.endsWith(`${libreanimatedO}`)));
         let rootI: Map<any, any> = new Map([[String.fromCharCode(110, 95, 50, 52, 95, 115, 105, 114, 105, 0), String.fromCharCode(108, 105, 118, 101, 95, 122, 95, 56, 55, 0)], [String.fromCharCode(97, 95, 55, 48, 95, 99, 97, 110, 111, 110, 0), String.fromCharCode(102, 95, 51, 50, 95, 101, 110, 100, 105, 97, 110, 110, 101, 115, 115, 0)]]);
         let redscoreballC = String.fromCharCode(99, 114, 101, 100, 105, 98, 105, 108, 105, 116, 121, 95, 122, 95, 53, 49, 0);
         let baseK: Map<any, any> = new Map([[String.fromCharCode(102, 95, 54, 51, 95, 112, 114, 101, 115, 115, 105, 110, 103, 0), String.fromCharCode(105, 110, 105, 116, 105, 97, 108, 105, 122, 105, 110, 103, 95, 53, 95, 51, 57, 0)], [String.fromCharCode(109, 95, 55, 54, 95, 121, 117, 118, 121, 117, 118, 0), String.fromCharCode(118, 101, 114, 116, 95, 104, 95, 55, 55, 0)], [String.fromCharCode(111, 112, 116, 105, 111, 110, 97, 108, 108, 121, 95, 115, 95, 48, 0), String.fromCharCode(100, 101, 115, 99, 114, 105, 98, 101, 95, 48, 95, 57, 51, 0)]]);
         iconnotificationnewH += `${rootI.size / 3}`;
         rootI = new Map([[`${baseK.size}`, redscoreballC.length]]);
         redscoreballC = `${baseK.size}`;
         let unselectedg = String.fromCharCode(121, 95, 51, 55, 95, 99, 97, 99, 104, 101, 115, 105, 122, 101, 0);
         iconnotificationnewH = `${(actived == String.fromCharCode(98, 0) ? actived.length : iconnotificationnewH.length)}`;
         libreact3 *= 1;
      }
      for (let k = 0; k < 3; k++) {
         type_kw += `${type_kw.length}`;
      }
      while (3 <= (2 / (Math.max(9, libreact3)))) {
         let quest3: Map<any, any> = new Map([[String.fromCharCode(108, 111, 103, 105, 115, 116, 105, 99, 95, 99, 95, 50, 56, 0), String.fromCharCode(106, 95, 55, 51, 95, 115, 117, 112, 101, 114, 118, 105, 101, 119, 0)], [String.fromCharCode(121, 95, 55, 53, 95, 112, 97, 114, 97, 109, 115, 0), String.fromCharCode(101, 118, 97, 108, 117, 108, 97, 116, 101, 95, 99, 95, 57, 51, 0)], [String.fromCharCode(117, 110, 115, 116, 97, 107, 101, 95, 103, 95, 56, 56, 0), String.fromCharCode(103, 95, 50, 51, 95, 117, 110, 105, 109, 112, 111, 114, 116, 97, 110, 116, 0)]]);
         quest3 = new Map([[`${quest3.size}`, quest3.size]]);
         quest3.set(`${quest3.size}`, quest3.size >> (Math.min(Math.abs(quest3.size), 5)));
         while ((3 & quest3.size) > 1) {
            quest3 = new Map([[`${quest3.size}`, quest3.size << (Math.min(Math.abs(2), 4))]]);
            break;
         }
         libreact3 -= 2;
         break;
      }
      type_kw += `${(2 & (libjsinspectorZ ? 5 : 2))}`;
      setIsRefreshing(false);

      mode7 = new Map([[`${libjsinspectorZ}`, (type_kw == String.fromCharCode(50, 0) ? (libjsinspectorZ ? 4 : 1) : type_kw.length)]]);
      while (combinew) {
         combinew = (imagenetworkerrW.length + libreact3) < 12;
         break;
      }
      libreact3 &= mode7.size;
      let showlessR = String.fromCharCode(115, 119, 101, 101, 112, 95, 109, 95, 53, 49, 0);
      while (showlessR != String.fromCharCode(106, 0)) {
         showlessR = "1";
         break;
      }
      while (2 <= showlessR.length) {
         let sellE = String.fromCharCode(114, 101, 109, 111, 118, 101, 95, 112, 95, 49, 49, 0);
         let scorepopsoundy: Array<any> = [887, 357, 500];
         let modityI: Array<any> = [471, 799, 655];
         let singley = true;
         showlessR = "3";
         sellE += `${3 | scorepopsoundy.length}`;
         scorepopsoundy = [(sellE.length + (singley ? 4 : 5))];
         modityI = [scorepopsoundy.length];
         singley = !singley;
         break;
      }
      while (!showlessR.startsWith(`${showlessR.length}`)) {
         showlessR = `${3 & showlessR.length}`;
         break;
      }
      wifirouterh = new Map([[`${imagenetworkerrW.length}`, (String.fromCharCode(114, 0) == type_kw ? imagenetworkerrW.length : type_kw.length)]]);
      let nativew = 7186235 >= wifirouterh.size;
      do {
         wifirouterh = new Map([[`${imagenetworkerrW.length}`, imagenetworkerrW.length + libreact3]]);
         if (nativew) {
            break;
         }
      } while (nativew && (4 >= wifirouterh.size));
      type_kw += `${libreact3 >> (Math.min(Math.abs(mode7.size), 4))}`;
      return;
   }, []);


   const isVip = yysIconstar.isVip(userState.user);

   useEffect(() => {
      if (selectedTab === 'xvod' && !isVip) {
         setShowBecomeVIPOverlay(true)
      } else {
         setShowBecomeVIPOverlay(false)
      }
   }, [selectedTab])
   console.debug('selectedTab: ', selectedTab);
   return (
      <>
         <ImageBackground
            source={
               selectedTab == "sport"
                  ? require("./../../static/images/downGestures.png")
                  : screenState.showAdultTab
                     ? require("./../../static/images/iconclosewhiteIndicator.png")
                     : require("./../../static/images/profile/pushNotificationProfile.png")
            }
            resizeMode="cover"
            style={{ flex: 1, height: 200 }}
         >
            <ScreenContainer
               isBgHide={true}
               containerStyle={{
                  paddingLeft: 0,
                  paddingRight: 0,
                  paddingTop: Platform.OS === "ios" ? 8 : 15,
               }}
            >
               <View
                  style={{
                     paddingLeft: spacing.sideOffset,
                     paddingRight: spacing.sideOffset,
                     flexDirection: "row",
                     justifyContent: "space-between",
                     alignItems: "center",
                     paddingTop: 8,
                  }}
               >
                  <View
                     style={{
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                     }}
                  >
                     {showSport &&
                        <TouchableOpacity
                           onPress={() => {
                              setSelectedTab("sport");
                              dispatch(disableAdultMode());
                           }}
                        >
                           <View
                              style={{
                                 flexDirection: "row",
                                 justifyContent: "center",
                                 alignItems: "center",
                              }}
                           >
                              <View
                                 style={{
                                    paddingRight: 7,
                                    position: "relative",
                                    bottom: 10,
                                 }}
                              >
                                 <SportTabSvg width={32} height={32} />
                              </View>

                              <View
                                 style={{
                                    flexDirection: "column",
                                 }}
                              >
                                 <Text
                                    style={{
                                       ...textVariants.bigHeader,
                                       color: colors.text,
                                       fontSize: selectedTab == "sport" ? 20 : 16,

                                       paddingBottom: 3,
                                       marginBottom: 0,
                                    }}
                                 >
                                    体育
                                 </Text>

                                 <View
                                    style={{
                                       justifyContent: "center",
                                       paddingHorizontal: 12,
                                    }}
                                 >
                                    <View
                                       style={{
                                          borderTopWidth: selectedTab == "sport" ? 2 : 0,
                                          borderTopColor: "#ffffff",
                                          maxWidth: 20,
                                       }}
                                    ></View>

                                    <Text></Text>
                                 </View>
                              </View>
                           </View>
                        </TouchableOpacity>
                     }

                     {screenState.showAdultTab && (
                        <>
                           <TouchableOpacity
                              onPress={() => {
                                 setSelectedTab("xvod");
                              }}
                           >
                              <View
                                 style={{
                                    flexDirection: "row",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    marginLeft: 15,
                                 }}
                              >
                                 <View
                                    style={{
                                       paddingRight: 7,
                                       position: "relative",
                                       bottom: 12,
                                    }}
                                 >
                                    <XvodTabSvg width={32} height={32} />
                                 </View>

                                 <View
                                    style={{
                                       flexDirection: "column",
                                    }}
                                 >
                                    <Text
                                       style={{
                                          ...textVariants.bigHeader,
                                          color: colors.text,
                                          fontSize: selectedTab == "xvod" ? 20 : 16,

                                          paddingBottom: 3,
                                          marginBottom: 0,
                                       }}
                                    >
                                       夜来香
                                    </Text>

                                    <View
                                       style={{
                                          justifyContent: "center",
                                          paddingHorizontal: 15,
                                       }}
                                    >
                                       <View
                                          style={{
                                             borderTopWidth: selectedTab == "xvod" ? 2 : 0,
                                             borderTopColor: "#ffffff",
                                             maxWidth: 22,
                                          }}
                                       ></View>

                                       <Text></Text>
                                    </View>
                                 </View>
                              </View>
                           </TouchableOpacity>
                        </>
                     )}
                  </View>
                  <TouchableOpacity
                     activeOpacity={
                        !yysIconstar.isVip(userState.user) ||
                           yysIconstar.isGuest(userState.user)
                           ? 0.5
                           : 1
                     }
                     onPress={() => {
                        if (
                           !yysIconstar.isVip(userState.user)
                        ) {
                           setShowBecomeVIPOverlay(true);
                        }
                     }}
                  >


                     {!yysIconstar.isVip(userState.user) ? (
                        <>
                           <View style={styles.headerContainerRight2}>
                              <VipEntrySvg height={30} />
                           </View>
                        </>
                     ) : (
                        <>
                           <View style={styles.headerContainerRight}>
                              <Image
                                 style={styles.iconStyle}
                                 source={require("../../static/images/profile/canvasLibloggerReddownarrow.png")}
                              />
                              <Text
                                 style={{
                                    color: colors.text,
                                    fontSize: 14,
                                 }}
                              >
                                 VIP {vipRemainingDay}天
                              </Text>
                           </View>
                        </>
                     )}

                  </TouchableOpacity>
               </View>
               {selectedTab == "sport" &&
                  matchTabs &&
                  matchTabs.length > 0 &&
                  !isOffline && (
                     <View
                        style={{
                           flex: 1,
                           marginHorizontal: 10,
                           backgroundColor: "transparent",


                        }}
                     >
                        <MatchScheduleNavVip
                           setShowBecomeVIPOverlay={setShowBecomeVIPOverlay}
                           tabList={matchTabs}
                        />
                        {!isVip &&
                           <BecomeVipOverlay
                              setShowBecomeVIPOverlay={setShowBecomeVIPOverlay}
                              showBecomeVIPOverlay={showBecomeVIPOverlay}
                              selectedTab={selectedTab}
                           />
                        }
                     </View>
                     // <Text>sport</Text>
                  )}

               {selectedTab == "xvod" && (
                  <View
                     style={{
                        flex: 1,
                        marginHorizontal: 10,
                        backgroundColor: "transparent",
                        marginTop: 5


                     }}
                  >
                     <XVodTab handleRejectEighteenPlus={handleRejectEighteenPlus} />
                     {!isVip &&
                        <>
                           <TouchableWithoutFeedback
                              style={styles.xvodBlur}
                              onPress={() => setShowBecomeVIPOverlay(true)}
                           >
                              <BlurView
                                 blurType="dark"
                                 blurAmount={2}
                                 style={styles.xvodBlur}
                                 overlayColor=""
                              />
                           </TouchableWithoutFeedback>
                           <BecomeVipOverlay
                              setShowBecomeVIPOverlay={setShowBecomeVIPOverlay}
                              showBecomeVIPOverlay={showBecomeVIPOverlay}
                              selectedTab={selectedTab}
                           />
                        </>

                     }
                  </View>
               )}
               {isOffline && <NoConnection onClickRetry={checkConnection} />}
            </ScreenContainer>
         </ImageBackground>
      </>
   );
};

const styles = StyleSheet.create({
   header: {
      display: "flex",
      flexDirection: "row",
      width: "100%",
      alignItems: "center",
   },
   loading: {
      flexDirection: "row",
      justifyContent: "center",
      flex: 1,
   },
   nav: {
      flexGrow: 1,
      justifyContent: "center",
      marginBottom: 10,
   },
   iconStyle: {
      height: 18,
      width: 18,
      marginRight: 5,
   },
   headerContainerRight: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(34, 35, 39 , 0.7)",
      paddingHorizontal: 10,
      borderRadius: 30,
      paddingVertical: 5,
      position: "relative",
      bottom: 8,
   },
   headerContainerRight2: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(34, 35, 39 , 0.7)",
      paddingHorizontal: 7,
      borderRadius: 30,
      paddingVertical: 1,
      position: "relative",
      bottom: 8,
   },
   xvodBlur: {
      flex: 1,
      position: 'absolute',
      width: '100%',
      height: '100%',
      marginTop: 10,
      borderRadius: 15,

   }
});
