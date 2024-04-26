import React, { useState, useMemo, memo, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  FlatList,
} from "react-native";
import { useTheme } from "@react-navigation/native";
import { wawaXvodNeon } from "@type/wawa_gradlew";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import SortAscIcon from "@static/images/loadingspinnerBorderlessRefresh.svg";
import SortDescIcon from "@static/images/greytickIcon.svg";
import BottomSheet from "../bottomSheet/wawa_nativeex_init";
import { wawaGuideSelect } from "@redux/reducers/wawa_quest_ping";

interface wawaAwayShow {
  onConfirm: any;
  onCancel: any;
  episodes?: wawaXvodNeon;
  activeEpisode?: number;
  rangeSize?: number;
  isVisible: boolean;
  handleClose: any;
  vodId?: number;
}
function VodEpisodeSelectionModal({
  onConfirm,
  onCancel,
  episodes,
  isVisible,
  handleClose,
  activeEpisode = 0,
  rangeSize = 50,
  vodId,
}: wawaAwayShow) {
  const { colors, textVariants, spacing } = useTheme();
  const EPISODE_RANGE_SIZE = rangeSize;
  const insets = useSafeAreaInsets();
  const [sortBy, setSortBy] = useState("asc");
  const ranges = [
    ...Array(
      episodes?.url_count === undefined
        ? 0
        : Math.ceil(episodes.url_count / EPISODE_RANGE_SIZE)
    ).keys(),
  ].map(
    (x) =>
      `${x * EPISODE_RANGE_SIZE + 1}-${Math.min(
        (x + 1) * EPISODE_RANGE_SIZE,
        episodes?.url_count === undefined
          ? (x + 1) * EPISODE_RANGE_SIZE - 1
          : episodes?.url_count
      )}`
  );

  const [currentIndex, setCurrentIndex] = useState(
    Math.floor(activeEpisode / EPISODE_RANGE_SIZE)
  );
  const showEpisodeRangeStart = useMemo(
    () => currentIndex * EPISODE_RANGE_SIZE,
    [activeEpisode, currentIndex]
  );
  const showEpisodeRangeEnd = useMemo(
    () =>
      Math.min(
        showEpisodeRangeStart + EPISODE_RANGE_SIZE,
        episodes
          ? episodes.url_count
          : showEpisodeRangeStart + EPISODE_RANGE_SIZE
      ),
    [episodes, showEpisodeRangeStart]
  );
  const displayEpisodes = useMemo(() => {
       let qaagC: Array<any> = [228, 273, 898];
    let largesoundJ: Array<any> = [624, 518, 366];
    let favoriteV = 2.0;
    let chinam: Map<any, any> = new Map([[String.fromCharCode(115,108,97,115,104,101,115,95,98,95,50,49,0),String.fromCharCode(115,112,101,97,107,101,114,95,50,95,57,48,0)], [String.fromCharCode(101,100,105,97,95,111,95,49,48,48,0),String.fromCharCode(113,101,120,112,95,53,95,54,51,0)], [String.fromCharCode(100,114,97,119,97,98,108,101,115,95,115,95,50,55,0),String.fromCharCode(112,95,56,48,95,102,105,114,115,116,108,105,110,101,0)]]);
    let forwardf: Array<any> = [152, 13, 507];
    let qnewssharec = 0.0;
    let chatroombackgroundp = String.fromCharCode(115,109,97,108,108,101,115,116,95,102,95,50,56,0);
    let runtimeschedulere = 2.0;
    let giflivestreamingA: Array<any> = [String.fromCharCode(101,112,111,108,108,95,110,95,53,57,0), String.fromCharCode(110,105,103,104,116,115,104,111,116,95,48,95,54,57,0), String.fromCharCode(102,95,55,95,99,97,112,116,117,114,101,0)];
    let championd = 4;
       let activityx = true;
       let tickK = String.fromCharCode(110,99,114,121,112,116,105,111,110,95,101,95,49,56,0);
       let pathO = String.fromCharCode(121,95,54,50,95,105,110,117,115,101,0);
       let subsI = String.fromCharCode(100,117,114,97,116,105,111,110,115,95,112,95,56,51,0);
       let details0 = String.fromCharCode(113,95,52,50,95,119,111,114,107,105,110,103,0);
      let modity_ = tickK.length >= 5995457;
      do {
          let downloadingS = String.fromCharCode(105,109,112,114,101,115,115,105,111,110,95,116,95,57,54,0);
          let iconarrowrightwhiteo = String.fromCharCode(101,120,97,109,105,110,101,95,116,95,51,50,0);
          let borderlessH = 2;
          let sigmob2 = String.fromCharCode(110,111,100,101,115,101,116,95,97,95,50,52,0);
          let libfbjni7 = 3.0;
         tickK = `${tickK.length & iconarrowrightwhiteo.length}`;
         downloadingS += `${sigmob2.length / (Math.max(downloadingS.length, 1))}`;
         iconarrowrightwhiteo += `${borderlessH / 1}`;
         borderlessH -= (String.fromCharCode(115,0) == downloadingS ? downloadingS.length : sigmob2.length);
         libfbjni7 -= parseFloat(`${downloadingS.length & 2}`);
         if (modity_) {
            break;
         }
      } while (modity_ && (2 < tickK.length));
          let xadsdkS = String.fromCharCode(108,95,54,51,95,97,117,116,104,107,101,121,0);
          let smallA = 0;
         activityx = String.fromCharCode(118,0) == xadsdkS && 6 > smallA;
      let coreE = String.fromCharCode(106,95,109,56,118,111,115,122,0) == pathO;
      do {
         pathO += "3";
         if (coreE) {
            break;
         }
      } while ((!subsI.endsWith(pathO)) && coreE);
          let shirtS = 2.0;
          let chinasameH: Map<any, any> = new Map([[String.fromCharCode(104,97,115,104,116,97,103,95,103,95,50,50,0),String.fromCharCode(116,95,50,52,95,117,112,100,97,116,105,110,103,0)], [String.fromCharCode(99,111,110,118,101,114,116,95,112,95,57,50,0),String.fromCharCode(106,118,101,114,115,105,111,110,95,103,95,52,54,0)]]);
          let refreshborderlessI: Map<any, any> = new Map([[String.fromCharCode(111,110,103,111,105,110,103,95,51,95,49,52,0),String.fromCharCode(118,95,51,56,95,97,115,115,101,114,116,0)], [String.fromCharCode(101,115,99,97,112,101,100,95,52,95,52,56,0),String.fromCharCode(101,95,50,50,95,112,105,110,110,101,100,0)], [String.fromCharCode(112,95,52,48,95,119,105,110,100,111,119,105,110,103,0),String.fromCharCode(115,110,105,112,112,101,116,95,100,95,52,57,0)]]);
         subsI = "1";
         shirtS /= Math.max(1, parseFloat(`${chinasameH.size}`));
         chinasameH = new Map([[`${refreshborderlessI.size}`, refreshborderlessI.size - parseInt(`${shirtS}`)]]);
         pathO += `${((activityx ? 2 : 2) & 1)}`;
      let buttonv = tickK.length <= 7592802;
      do {
         tickK = `${(String.fromCharCode(120,0) == details0 ? tickK.length : details0.length)}`;
         if (buttonv) {
            break;
         }
      } while ((tickK.length >= 3 || activityx) && buttonv);
         activityx = subsI.length > 49;
      let commona = activityx ? !activityx : activityx;
      do {
         activityx = !activityx;
         if (commona) {
            break;
         }
      } while ((!activityx) && commona);
      runtimeschedulere /= Math.max(5, parseFloat(`${2}`));
      favoriteV /= Math.max(parseFloat(`${forwardf.length}`), 1);
      runtimeschedulere -= parseFloat(`${largesoundJ.length * 1}`);
       let placementA = String.fromCharCode(99,114,108,100,112,95,99,95,53,51,0);
       let sigmobA: Map<any, any> = new Map([[String.fromCharCode(117,112,109,105,120,95,116,95,57,49,0),String.fromCharCode(114,101,115,121,110,99,95,105,95,55,51,0)], [String.fromCharCode(114,101,97,100,97,98,108,101,95,121,95,53,48,0),String.fromCharCode(99,97,116,99,104,95,114,95,57,55,0)]]);
      for (let v = 0; v < 1; v++) {
         placementA = `${(placementA == String.fromCharCode(109,0) ? placementA.length : sigmobA.size)}`;
      }
         placementA = `${sigmobA.size}`;
      chinam.set(`${qnewssharec}`, giflivestreamingA.length);
   if (1 > (giflivestreamingA.length / 2) && 4 > (giflivestreamingA.length / 2)) {
      chinam.set(`${runtimeschedulere}`, largesoundJ.length - parseInt(`${runtimeschedulere}`));
   }

    const eps = episodes?.urls?.slice(
      showEpisodeRangeStart,
      showEpisodeRangeEnd
    );

   while ((parseFloat(`${qaagC.length}`) - favoriteV) == 2.21 || (favoriteV - 2.21) == 3.72) {
       let anythinkL = String.fromCharCode(97,112,112,101,97,114,101,110,99,101,95,106,95,53,49,0);
       let gesturesV = String.fromCharCode(99,97,110,99,101,108,101,100,95,50,95,50,56,0);
       let footballfieldJ: Array<any> = [381, 858];
       let basketballmatchdetailbgB = String.fromCharCode(107,101,121,100,105,114,95,104,95,53,52,0);
       let phonet: Map<any, any> = new Map([[String.fromCharCode(100,121,110,97,109,105,99,115,95,107,95,55,52,0),434], [String.fromCharCode(122,95,50,56,95,105,110,116,101,114,110,97,116,105,111,110,97,108,108,121,0),681]]);
         phonet.set(anythinkL, (String.fromCharCode(87,0) == anythinkL ? basketballmatchdetailbgB.length : anythinkL.length));
      let weiboe = phonet.size <= 9464556;
      do {
         phonet.set(`${footballfieldJ.length}`, 1);
         if (weiboe) {
            break;
         }
      } while (weiboe && ((phonet.size + 5) > 1 && (5 + basketballmatchdetailbgB.length) > 2));
         gesturesV = `${(String.fromCharCode(121,0) == gesturesV ? gesturesV.length : anythinkL.length)}`;
          let emptyi: Array<any> = [874, 585];
          let redcirclebgn = String.fromCharCode(117,95,50,51,95,112,108,117,103,105,110,115,0);
         anythinkL = `${footballfieldJ.length}`;
         emptyi = [1];
         redcirclebgn = `${redcirclebgn.length}`;
          let member7 = String.fromCharCode(105,110,100,101,111,95,114,95,53,52,0);
         phonet.set(gesturesV, 2);
         member7 += `${(String.fromCharCode(98,0) == member7 ? member7.length : member7.length)}`;
      for (let u = 0; u < 2; u++) {
         footballfieldJ = [3 / (Math.max(10, anythinkL.length))];
      }
          let uploadr = String.fromCharCode(106,97,99,111,98,105,97,110,95,49,95,52,50,0);
          let themet = 3.0;
         phonet.set(basketballmatchdetailbgB, footballfieldJ.length);
         uploadr += `${parseInt(`${themet}`)}`;
         themet -= parseFloat(`${1 + parseInt(`${themet}`)}`);
          let read8 = 5;
          let l_unlockd: Map<any, any> = new Map([[String.fromCharCode(111,112,116,105,109,105,115,109,95,54,95,51,53,0),false ], [String.fromCharCode(110,95,53,48,95,98,105,116,101,120,97,99,116,110,101,115,115,0),true ]]);
          let weiboJ: Map<any, any> = new Map([[String.fromCharCode(111,98,115,101,114,118,97,116,105,111,110,115,95,117,95,57,53,0),663], [String.fromCharCode(121,95,52,49,95,97,108,103,0),127]]);
         basketballmatchdetailbgB += `${3 << (Math.min(1, anythinkL.length))}`;
         read8 %= Math.max(5, 2);
         l_unlockd.set(`${read8}`, weiboJ.size - 1);
         weiboJ.set(`${read8}`, 1);
       let iconsettingX = String.fromCharCode(111,95,53,55,95,116,117,110,105,110,103,0);
          let typingT: Array<any> = [942, 74];
          let componentregistryv = String.fromCharCode(105,95,57,51,95,119,114,111,116,101,0);
          let loginsuccessW = 0;
         basketballmatchdetailbgB += `${2 - basketballmatchdetailbgB.length}`;
         typingT = [componentregistryv.length];
         componentregistryv += `${typingT.length - componentregistryv.length}`;
         loginsuccessW -= loginsuccessW;
      if (iconsettingX.includes(basketballmatchdetailbgB)) {
         iconsettingX += `${phonet.size}`;
      }
       let middlef: Array<any> = [993, 329];
       let cancel2: Array<any> = [118, 122, 116];
      let imagenetworkerrL = String.fromCharCode(55,57,115,54,53,48,112,99,115,112,0) == basketballmatchdetailbgB;
      do {
         basketballmatchdetailbgB = `${basketballmatchdetailbgB.length}`;
         if (imagenetworkerrL) {
            break;
         }
      } while (imagenetworkerrL && (basketballmatchdetailbgB.includes(`${cancel2.length}`)));
      while (3 < (1 - basketballmatchdetailbgB.length) || (footballfieldJ.length - 1) < 4) {
          let dragi = String.fromCharCode(103,95,57,50,95,99,104,97,114,109,97,112,0);
          let agreementS = false;
          let iconcalendarw = false;
         footballfieldJ = [middlef.length & 3];
         dragi = "1";
         agreementS = !dragi.startsWith(`${agreementS}`);
         iconcalendarw = dragi.length == 64 || agreementS;
         break;
      }
      let iconwechatm = footballfieldJ.length <= 7392754;
      do {
         footballfieldJ = [(String.fromCharCode(103,0) == basketballmatchdetailbgB ? basketballmatchdetailbgB.length : footballfieldJ.length)];
         if (iconwechatm) {
            break;
         }
      } while ((footballfieldJ.length < 2) && iconwechatm);
      favoriteV += parseFloat(`${1 >> (Math.min(3, footballfieldJ.length))}`);
      break;
   }
   while (3.68 < (3.51 + favoriteV) && (5 % (Math.max(2, largesoundJ.length))) < 4) {
      largesoundJ = [1 & largesoundJ.length];
      break;
   }
   let awayplayerU = largesoundJ.length <= 7083676;
   do {
      largesoundJ = [forwardf.length & qaagC.length];
      if (awayplayerU) {
         break;
      }
   } while (awayplayerU && (qaagC.length <= largesoundJ.length));
   while (1.89 <= (4.48 + favoriteV) || (runtimeschedulere + 4.48) <= 4.21) {
      runtimeschedulere /= Math.max(parseFloat(`${parseInt(`${runtimeschedulere}`) % (Math.max(parseInt(`${favoriteV}`), 9))}`), 4);
      break;
   }
   for (let r = 0; r < 1; r++) {
       let sidem = 5;
       let libimagepipelined = 2.0;
       let actions4 = String.fromCharCode(112,95,57,48,95,97,118,102,102,116,0);
       let expiredY = false;
       let gesturest = String.fromCharCode(101,95,52,52,95,99,108,111,117,100,102,108,97,114,101,0);
       let iconadslinkQ = String.fromCharCode(98,95,53,55,95,121,97,98,101,0);
         actions4 += `${gesturest.length << (Math.min(3, Math.abs(parseInt(`${libimagepipelined}`))))}`;
         iconadslinkQ = `${actions4.length}`;
      while (expiredY) {
         expiredY = iconadslinkQ.length <= 67;
         break;
      }
       let libfabricjnil = String.fromCharCode(110,95,52,54,95,101,120,99,101,101,100,101,100,0);
      while (5 > libfabricjnil.length) {
         iconadslinkQ = `${gesturest.length}`;
         break;
      }
         libfabricjnil += `${libfabricjnil.length}`;
         libfabricjnil += `${sidem / 3}`;
       let loadingi = String.fromCharCode(118,105,111,108,101,110,99,101,95,106,95,51,50,0);
      while (libfabricjnil.length > 4) {
          let fullscreenmino = String.fromCharCode(117,95,55,54,95,115,112,97,99,101,115,0);
          let left9 = String.fromCharCode(107,95,55,52,95,119,105,114,101,102,114,97,109,101,0);
         gesturest += `${actions4.length / 1}`;
         fullscreenmino = `${fullscreenmino.length ^ left9.length}`;
         left9 += `${left9.length}`;
         break;
      }
         gesturest += "2";
          let spinnerg = true;
          let descv = 0.0;
          let colorsK = 4.0;
         iconadslinkQ += `${3 - parseInt(`${descv}`)}`;
         spinnerg = !spinnerg;
         descv -= 1 / (Math.max(7, parseInt(`${colorsK}`)));
         colorsK /= Math.max(3, 3 ^ parseInt(`${colorsK}`));
      largesoundJ = [parseInt(`${runtimeschedulere}`)];
   }
    if (sortBy === "desc") {

   let libyogac = 8060570 <= qaagC.length;
   do {
       let matchinactivew = 2.0;
       let overlayu = true;
       let referrerI = 3.0;
       let injuryr = true;
       let homeinactiveq: Array<any> = [347, 88];
      if (overlayu) {
         homeinactiveq = [((overlayu ? 3 : 1))];
      }
         homeinactiveq = [parseInt(`${referrerI}`) + homeinactiveq.length];
         matchinactivew *= parseFloat(`${parseInt(`${referrerI}`)}`);
         referrerI -= parseFloat(`${3 | parseInt(`${referrerI}`)}`);
         referrerI /= Math.max((parseFloat(`${(overlayu ? 3 : 1) * parseInt(`${matchinactivew}`)}`)), 5);
      for (let r = 0; r < 3; r++) {
          let backwhiteT = 0;
          let contextO = 5.0;
         referrerI *= parseFloat(`${2}`);
         backwhiteT -= backwhiteT & parseInt(`${contextO}`);
         contextO -= parseFloat(`${backwhiteT ^ parseInt(`${contextO}`)}`);
      }
         injuryr = referrerI >= 28.27;
      while (!overlayu) {
          let icondefaultthumbnailb = 1.0;
          let canvasS = 2;
          let livesharen: Array<any> = [String.fromCharCode(107,95,49,57,95,102,105,110,97,108,100,0), String.fromCharCode(111,95,50,52,0), String.fromCharCode(108,97,112,112,101,100,95,106,95,57,57,0)];
         overlayu = !overlayu;
         icondefaultthumbnailb /= Math.max(1, parseFloat(`${livesharen.length}`));
         canvasS <<= Math.min(5, Math.abs(parseInt(`${icondefaultthumbnailb}`)));
         livesharen.push(livesharen.length);
         break;
      }
      if ((matchinactivew / (Math.max(referrerI, 9))) >= 4.79) {
         referrerI *= parseFloat(`${2 << (Math.min(Math.abs(parseInt(`${matchinactivew}`)), 5))}`);
      }
          let libimagepipelinej: Map<any, any> = new Map([[String.fromCharCode(119,109,97,112,114,111,100,97,116,97,95,103,95,50,54,0),878], [String.fromCharCode(107,95,57,54,95,115,116,121,112,0),864], [String.fromCharCode(115,104,97,100,111,119,95,117,95,52,0),789]]);
         homeinactiveq = [((overlayu ? 1 : 4))];
         libimagepipelinej = new Map([[`${libimagepipelinej.size}`, libimagepipelinej.size * 1]]);
         homeinactiveq.push(homeinactiveq.length);
      while (matchinactivew == 4.25) {
         overlayu = homeinactiveq.includes(referrerI);
         break;
      }
          let suggestion9 = String.fromCharCode(98,97,99,107,115,112,97,99,101,95,114,95,53,48,0);
         referrerI *= parseFloat(`${1 ^ parseInt(`${matchinactivew}`)}`);
         suggestion9 = `${suggestion9.length << (Math.min(3, suggestion9.length))}`;
         injuryr = referrerI > 40.74;
          let libavfilterR: Map<any, any> = new Map([[String.fromCharCode(116,95,50,50,95,112,104,97,115,101,115,0),29], [String.fromCharCode(104,95,57,49,95,105,110,110,101,114,0),454], [String.fromCharCode(99,111,100,97,98,108,101,95,55,95,55,53,0),966]]);
         overlayu = libavfilterR.size == homeinactiveq.length;
      qaagC = [((injuryr ? 2 : 1) * 3)];
      if (libyogac) {
         break;
      }
   } while ((3 >= (1 & qaagC.length)) && libyogac);
   let rncore9 = 6457499 >= largesoundJ.length;
   do {
      largesoundJ.push(chinam.size / 3);
      if (rncore9) {
         break;
      }
   } while (rncore9 && (1 >= qaagC.length));
   for (let z = 0; z < 3; z++) {
       let armvag = 4;
       let distX = String.fromCharCode(103,95,50,52,95,110,111,100,111,119,110,0);
         armvag &= armvag | 2;
      for (let z = 0; z < 2; z++) {
          let iconclose3 = 0.0;
          let libflipperd = 1;
          let matchesT = 3;
          let nodeQ = 3;
          let stationg: Map<any, any> = new Map([[String.fromCharCode(98,111,117,110,100,115,95,117,95,57,51,0),417], [String.fromCharCode(108,97,114,103,101,115,116,95,52,95,56,54,0),470]]);
         distX = `${armvag % (Math.max(distX.length, 3))}`;
         iconclose3 += nodeQ;
         libflipperd %= Math.max(2, 2 + nodeQ);
         matchesT >>= Math.min(3, Math.abs(matchesT));
         stationg = new Map([[`${libflipperd}`, parseInt(`${iconclose3}`) + libflipperd]]);
      }
      championd -= forwardf.length & 2;
   }
   let brightness2 = chinam.size <= 8885837;
   do {
      chinam = new Map([[`${forwardf.length}`, 3 + forwardf.length]]);
      if (brightness2) {
         break;
      }
   } while (brightness2 && ((parseFloat(`${chinam.size}`) - runtimeschedulere) > 3.24 && 3 > (parseInt(`${runtimeschedulere}`) - chinam.size)));
      chinam.set(`${qnewssharec}`, giflivestreamingA.length);
      eps?.reverse();
    }
    return eps;
  }, [showEpisodeRangeStart, showEpisodeRangeEnd, episodes, sortBy]);

  
  
  
  

  useEffect(() => {
    setCurrentIndex(0);
  }, [vodId]);

  const sort = () => {
       let libpangleflippedh = String.fromCharCode(112,95,50,49,95,115,101,97,108,0);
    let teamdetailsbgo = 0;
    let textlayoutmanager3 = String.fromCharCode(108,105,98,120,109,108,95,121,95,54,52,0);
    let libreanimatedh = 3.0;
    let backiconm = 3.0;
    let flyerz = String.fromCharCode(101,95,49,56,95,117,105,100,0);
    let libffmpegkitA = 1.0;
    let positionfieldt = true;
    let componentregistrya = String.fromCharCode(99,95,51,51,95,110,101,119,114,111,119,0);
    let unready: Array<any> = [126, 524];
      positionfieldt = (libpangleflippedh.length + teamdetailsbgo) >= 32;
      libreanimatedh /= Math.max(1, 2);
      positionfieldt = libreanimatedh < 60.52;
      teamdetailsbgo *= libpangleflippedh.length;
   for (let j = 0; j < 2; j++) {
       let playershirtB: Array<any> = [779, 3, 530];
       let bodann = String.fromCharCode(110,111,110,102,97,116,97,108,95,122,95,50,48,0);
      let appleP = 9064507 >= playershirtB.length;
      do {
         playershirtB.push(playershirtB.length);
         if (appleP) {
            break;
         }
      } while (appleP && (4 <= (bodann.length - playershirtB.length) || 4 <= (playershirtB.length - bodann.length)));
          let casting_ = true;
          let logouseru = 3.0;
          let connectionX = String.fromCharCode(104,95,57,56,95,117,110,114,101,102,99,111,117,110,116,0);
         playershirtB = [parseInt(`${logouseru}`)];
         casting_ = !casting_;
         logouseru /= Math.max((parseFloat(`${(casting_ ? 3 : 4)}`)), 2);
         connectionX = `${connectionX.length}`;
      while ((5 >> (Math.min(2, bodann.length))) >= 3 || (playershirtB.length >> (Math.min(bodann.length, 2))) >= 5) {
         bodann += `${bodann.length * playershirtB.length}`;
         break;
      }
         playershirtB.push(2);
          let singleo = String.fromCharCode(107,95,50,50,95,99,111,112,121,104,0);
          let matchdetailbgo = 4;
          let owngoalO = String.fromCharCode(106,95,54,54,95,97,116,114,97,99,0);
         bodann = "2";
         singleo += `${owngoalO.length >> (Math.min(Math.abs(1), 3))}`;
         matchdetailbgo ^= owngoalO.length | 2;
         playershirtB.push(3);
      componentregistrya += "2";
   }
      backiconm *= parseFloat(`${teamdetailsbgo - 1}`);

    if (sortBy === "asc") {

   let iconschedulev = componentregistrya == String.fromCharCode(117,95,52,106,54,0);
   do {
      componentregistrya = `${textlayoutmanager3.length | 2}`;
      if (iconschedulev) {
         break;
      }
   } while (iconschedulev && (componentregistrya.length >= textlayoutmanager3.length));
   while ((flyerz.length % 5) <= 4) {
      flyerz = `${(String.fromCharCode(111,0) == textlayoutmanager3 ? componentregistrya.length : textlayoutmanager3.length)}`;
      break;
   }
       let brightnessd = 1;
       let suboutR = 2;
       let chinasamen: Map<any, any> = new Map([[String.fromCharCode(97,95,56,56,95,99,111,109,98,105,110,97,116,105,111,110,115,0),586], [String.fromCharCode(115,119,114,101,115,97,109,112,108,101,95,105,95,50,52,0),375], [String.fromCharCode(108,95,56,52,95,100,101,103,114,97,100,97,116,105,111,110,0),772]]);
         chinasamen.set(`${brightnessd}`, brightnessd);
          let profileframeJ = 2;
          let penaltymatchiconj = false;
          let fillL = 2;
         suboutR ^= 3 | chinasamen.size;
         profileframeJ &= ((penaltymatchiconj ? 1 : 5) * profileframeJ);
         penaltymatchiconj = profileframeJ <= 5;
         fillL /= Math.max(1, ((penaltymatchiconj ? 4 : 3) & fillL));
          let filed_ = String.fromCharCode(101,105,116,104,101,114,95,117,95,52,50,0);
          let ksadi = String.fromCharCode(115,95,51,57,95,110,111,104,119,0);
          let reactnativejsh = String.fromCharCode(119,95,54,95,114,101,112,108,97,121,101,114,0);
         suboutR %= Math.max(5, ksadi.length >> (Math.min(Math.abs(3), 4)));
         filed_ = `${filed_.length ^ reactnativejsh.length}`;
         ksadi += "1";
         reactnativejsh = `${filed_.length}`;
         suboutR >>= Math.min(2, Math.abs(chinasamen.size / 3));
      while (chinasamen.get(`${suboutR}`) == null) {
          let injuryV = 5.0;
          let logouserX = 5.0;
          let termsv = 4.0;
          let dacccfaabfbcbadeebddcabacdffdbt = String.fromCharCode(111,95,55,55,95,97,114,99,104,105,118,101,100,0);
          let orangetickC = false;
         chinasamen.set(`${suboutR}`, chinasamen.size);
         injuryV += dacccfaabfbcbadeebddcabacdffdbt.length | parseInt(`${termsv}`);
         logouserX /= Math.max(3, parseFloat(`${parseInt(`${logouserX}`) - parseInt(`${injuryV}`)}`));
         termsv /= Math.max((String.fromCharCode(49,0) == dacccfaabfbcbadeebddcabacdffdbt ? dacccfaabfbcbadeebddcabacdffdbt.length : (orangetickC ? 1 : 5)), 1);
         orangetickC = 21.46 < logouserX;
         break;
      }
          let defaultlogoQ = 0;
          let directY: Map<any, any> = new Map([[String.fromCharCode(108,108,118,105,100,100,115,112,101,110,99,95,97,95,55,49,0),804], [String.fromCharCode(115,95,55,56,95,99,114,121,112,116,0),156]]);
          let huawei_: Map<any, any> = new Map([[String.fromCharCode(99,111,97,114,115,101,99,97,110,100,105,100,97,116,101,95,98,95,50,0),false ], [String.fromCharCode(107,95,55,56,95,112,104,105,0),false ], [String.fromCharCode(110,95,57,49,95,116,114,101,101,115,0),false ]]);
         brightnessd ^= 3 & directY.size;
         defaultlogoQ <<= Math.min(2, Math.abs(defaultlogoQ));
         directY = new Map([[`${huawei_.size}`, defaultlogoQ]]);
         huawei_ = new Map([[`${huawei_.size}`, 1 % (Math.max(1, huawei_.size))]]);
      for (let o = 0; o < 3; o++) {
          let libreactnativeblobz = 5;
          let sigmob3: Array<any> = [614, 784];
          let basketballdetailsbgF = String.fromCharCode(122,95,55,53,95,115,108,97,118,101,0);
         suboutR /= Math.max(1, 1);
         libreactnativeblobz += libreactnativeblobz - 3;
         sigmob3.push(sigmob3.length);
         basketballdetailsbgF += "2";
      }
         chinasamen.set(`${suboutR}`, brightnessd);
      for (let x = 0; x < 3; x++) {
          let router2: Array<any> = [619, 492];
         chinasamen.set(`${brightnessd}`, brightnessd >> (Math.min(Math.abs(suboutR), 3)));
         router2 = [router2.length / (Math.max(1, router2.length))];
      }
      libffmpegkitA /= Math.max(5, parseFloat(`${teamdetailsbgo}`));
       let libjsijniprofilerP = String.fromCharCode(114,101,100,117,99,101,114,95,101,95,49,0);
       let sentryy: Map<any, any> = new Map([[String.fromCharCode(108,115,112,105,95,101,95,52,51,0),524], [String.fromCharCode(108,97,116,101,95,118,95,51,50,0),821]]);
       let clearq = false;
          let halfq = String.fromCharCode(108,104,97,115,104,95,109,95,50,52,0);
         clearq = sentryy.size == 60;
         halfq += `${halfq.length / 2}`;
      for (let p = 0; p < 2; p++) {
          let libloggerz = String.fromCharCode(99,95,55,95,98,117,105,108,100,99,111,110,102,0);
          let handlery: Map<any, any> = new Map([[String.fromCharCode(115,119,97,116,99,104,95,48,95,50,56,0),59], [String.fromCharCode(101,95,49,50,95,112,105,116,99,104,0),179]]);
          let sharemodal0: Array<any> = [String.fromCharCode(101,95,55,53,95,116,104,114,109,97,116,0), String.fromCharCode(116,101,120,116,115,95,114,95,57,0)];
         clearq = libloggerz.length == 47 || libjsijniprofilerP.length == 47;
         libloggerz = `${handlery.size}`;
         handlery = new Map([[`${handlery.size}`, 2 << (Math.min(5, sharemodal0.length))]]);
         sharemodal0 = [sharemodal0.length];
      }
      let mbridgex = clearq ? !clearq : clearq;
      do {
         clearq = 8 <= libjsijniprofilerP.length;
         if (mbridgex) {
            break;
         }
      } while ((!clearq && libjsijniprofilerP.length <= 5) && mbridgex);
      for (let v = 0; v < 3; v++) {
         sentryy = new Map([[`${sentryy.size}`, 1 | sentryy.size]]);
      }
       let circleG = String.fromCharCode(105,95,50,49,95,105,109,112,111,115,115,105,98,108,101,0);
       let mbbannert = String.fromCharCode(115,118,97,103,95,121,95,51,54,0);
      if ((sentryy.size / 1) >= 5) {
          let baiduadsq = String.fromCharCode(100,101,115,116,95,103,95,56,57,0);
          let icondefaultthumbnailZ = true;
          let owngoalm = String.fromCharCode(115,121,110,99,104,114,111,110,105,122,101,95,114,95,49,48,48,0);
         sentryy.set(owngoalm, owngoalm.length);
         baiduadsq = `${2 % (Math.max(3, baiduadsq.length))}`;
         icondefaultthumbnailZ = baiduadsq.length > 36 || icondefaultthumbnailZ;
      }
         clearq = (46 >= ((!clearq ? 46 : circleG.length) + circleG.length));
      if (4 < (3 ^ sentryy.size)) {
         sentryy.set(mbbannert, 2 << (Math.min(5, Math.abs(sentryy.size))));
      }
      let football4 = 7650201 >= libjsijniprofilerP.length;
      do {
         libjsijniprofilerP += `${((clearq ? 3 : 4))}`;
         if (football4) {
            break;
         }
      } while ((circleG.length == libjsijniprofilerP.length) && football4);
      textlayoutmanager3 = "2";
   for (let k = 0; k < 1; k++) {
      positionfieldt = componentregistrya == String.fromCharCode(51,0);
   }
   if (!textlayoutmanager3.startsWith(`${libreanimatedh}`)) {
      libreanimatedh *= 2 / (Math.max(1, teamdetailsbgo));
   }
      setSortBy("desc");
    } else {

      libpangleflippedh += `${flyerz.length ^ teamdetailsbgo}`;
   if (!flyerz.endsWith(`${libffmpegkitA}`)) {
      libffmpegkitA -= parseFloat(`${teamdetailsbgo >> (Math.min(libpangleflippedh.length, 5))}`);
   }
      flyerz += "2";
      libpangleflippedh += `${(flyerz == String.fromCharCode(69,0) ? unready.length : flyerz.length)}`;
   let controls = teamdetailsbgo >= 7523293;
   do {
      teamdetailsbgo &= flyerz.length | 2;
      if (controls) {
         break;
      }
   } while ((5 <= (teamdetailsbgo - parseInt(`${libffmpegkitA}`)) && 5 <= (teamdetailsbgo << (Math.min(Math.abs(5), 5)))) && controls);
       let inouttargetredU = String.fromCharCode(111,112,101,114,97,116,111,114,95,103,95,52,52,0);
      let downarrowk = inouttargetredU.length <= 8825125;
      do {
          let neonh = String.fromCharCode(113,95,49,49,95,119,97,108,107,101,114,0);
          let librrc_ = false;
          let telegramQ = String.fromCharCode(107,95,51,54,95,99,104,117,110,107,0);
          let baiduads5 = 4;
         inouttargetredU = `${neonh.length}`;
         neonh += `${(telegramQ == String.fromCharCode(115,0) ? baiduads5 : telegramQ.length)}`;
         librrc_ = 35 == telegramQ.length;
         baiduads5 <<= Math.min(2, Math.abs(1 << (Math.min(1, telegramQ.length))));
         if (downarrowk) {
            break;
         }
      } while (downarrowk && (inouttargetredU.length >= inouttargetredU.length));
          let fieldH = true;
          let smallsoundQ = 3.0;
          let iconviewerv: Map<any, any> = new Map([[String.fromCharCode(97,95,49,95,112,111,111,108,0),false ], [String.fromCharCode(105,95,55,48,95,108,111,116,116,105,101,0),true ]]);
         inouttargetredU = `${inouttargetredU.length}`;
         fieldH = iconviewerv.size >= 25;
         smallsoundQ /= Math.max(4, 1);
         iconviewerv = new Map([[`${iconviewerv.size}`, parseInt(`${smallsoundQ}`)]]);
       let plashC = String.fromCharCode(121,95,52,55,95,115,105,109,117,108,116,97,110,101,111,117,115,0);
      componentregistrya += `${(componentregistrya.length & (positionfieldt ? 1 : 4))}`;
      setSortBy("asc");
    }
  };

  return (
    <BottomSheet
      isVisible={isVisible}
      onBackdropPress={handleClose}
      containerStyle={{
        paddingLeft: spacing.sideOffset,
        paddingRight: spacing.sideOffset,
        gap: spacing.m,
        alignItems: "center",
      }}
      height="50%"
    >
      <View style={styles.episodeList}>
        {/* <Text
          style={[
            styles.btn,
            textVariants.header
          ]}>
          {`${showEpisodeRangeStart+1}-${showEpisodeRangeEnd} 集`}
        </Text> */}
        <FlatList
          horizontal
          data={ranges}
          renderItem={({ item, index }: { item: string; index: number }) => {
            return (
              <TouchableOpacity
                style={styles.btn}
                onPress={() => setCurrentIndex(index)}
              >
                <Text
                  style={{
                    textAlign: "center",
                    ...textVariants.header,
                    color: index === currentIndex ? colors.text : colors.muted,
                    fontSize: index === currentIndex ? 18 : 15,
                  }}
                >
                  {`${item}集`}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
        <TouchableOpacity style={styles.sortBtn} onPress={sort}>
          <View style={{ paddingTop: 4 }}>
            {sortBy === "asc" ? <SortAscIcon /> : <SortDescIcon />}
          </View>
          <Text
            style={{
              textAlign: "center",
              ...textVariants.header,
              color: colors.muted,
              fontSize: 15,
            }}
          >
            顺序
          </Text>
        </TouchableOpacity>
      </View>
      {displayEpisodes && isVisible && (
        <ScrollView
          contentContainerStyle={{
            ...styles.episodeList,
            paddingBottom: insets.bottom,
            marginHorizontal: spacing.sideOffset,
          }}
        >
          {displayEpisodes?.map((ep, idx) => (
            <TouchableOpacity
              key={`expand-${idx}`}
              onPress={() => {
                onConfirm(ep.nid);
                onCancel();
              }}
            >
              <View
                style={{
                  backgroundColor:
                    ep.nid === activeEpisode ? colors.primary : colors.search,
                  padding: spacing.s,
                  minWidth: 60,
                  marginRight: "auto",
                  marginBottom: spacing.s,
                  borderRadius: 8,
                }}
              >
                <Text
                  numberOfLines={1}
                  style={{
                    fontSize: 13,
                    textAlign: "center",
                    fontWeight: "500",
                    color:
                      ep.nid === activeEpisode ? colors.primaryContrast : colors.muted,
                  }}
                >
                  {`${ep.name}`}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
    </BottomSheet>
  );
}

export default memo(VodEpisodeSelectionModal);

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    flex: 1,
  },
  text: {
    color: "white",
    textAlign: "center",
  },
  btn: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 10,
    paddingRight: 10,
  },
  episodeList: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    justifyContent: "flex-start",
    paddingLeft: 8,
    marginBottom: 14,
    paddingHorizontal: 20,
  },
  sortBtn: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});
