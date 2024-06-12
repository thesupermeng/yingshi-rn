import {
  TouchableHighlight,
  Image,
  SafeAreaView,
  View,
  Text,
  Share,
  TouchableOpacity,
} from 'react-native';
import Orientation from 'react-native-orientation-locker';
import {useDispatch, useSelector} from 'react-redux';
import ttBenefitRight, {
  setVideoControlProp,
  setVideoFullScreen,
  setVideoPlayerAction,
  setVideoSource,
} from '../../../screens/Sports/MatchDetails/action';
import VideoPlayerstyles from '../tt_with_success';

import PlayImg from '../images/icons/tumbnailConnectionHistory.png';
import PauseImg from '../images/icons/nterstitialAssistCarousel.png';
import LockImg from '../images/icons/styleMapping.png';
import UnlockImg from '../images/icons/viewsCondensed.png';

import {
  DisconnectedLogo,
  IconFullScreenMax,
  IconFullScreenMin,
  IconPipShrink,
  IconTV0,
  RefreshBorderless,
  ShareWhite,
} from '../../../../../static/sports';
import {
  showControlAction,
  toggleLockScreen,
  togglePlayPaused,
} from '../util/tt_module';
import {VideoLiveType} from '../../../global/tt_libcrashsdk_spinner';
import {StyleSheet} from 'react-native';
import {ShowControlType} from '../config';
import {ttCalendarAdult} from '../../../global/tt_ying';
import store from '@redux/tt_updates_bottom';
import {floatingPlayer} from '@redux/reducers/floatingPlayer';
import debounce from 'lodash.debounce';
import {useCallback} from 'react';
import {useEffect} from 'react';
import AppSettingsAction from '@redux/actions/appSettingsAction';
import vars from '../../../utility/tt_mbjscommon_source';

export const RenderControl = ({children, onPress, style = {}}) => {
  return (
    <TouchableHighlight
      underlayColor="transparent"
      activeOpacity={0.3}
      onPress={onPress}
      style={[style]}>
      {children}
    </TouchableHighlight>
  );
};
export const Back = ({onPress}) => {
  const {isFullScreen} = useSelector(state => state.videoPlayerControl);
  const dispatch = useDispatch();
  const onPressBack = () => {
       let str_ = new Map([[String.fromCharCode(97,118,97,105,108,0),false ], [String.fromCharCode(115,101,99,115,0),false ], [String.fromCharCode(110,105,110,101,0),false ]]);
    let pathG = String.fromCharCode(112,105,99,116,117,114,101,115,0);
    let thumbnailE = 1;
    let screenD = String.fromCharCode(114,116,99,112,0);
    let eighteenY = String.fromCharCode(99,116,108,111,117,116,112,117,116,0);
    let sigmobn = 5.0;
    let thumbnailS = String.fromCharCode(99,111,97,114,115,101,99,97,110,100,105,100,97,116,101,0);
    let hover0 = String.fromCharCode(115,116,114,101,97,109,102,111,117,114,99,99,0);
    let gradleq = new Map([[String.fromCharCode(119,101,108,108,0),67], [String.fromCharCode(97,117,116,104,111,114,105,122,101,0),614]]);
    let mbbannerz = new Map([[String.fromCharCode(102,111,114,109,97,116,0),404], [String.fromCharCode(115,117,98,106,0),333]]);
    let suggestionb = true;
      screenD = `${mbbannerz.size - str_.size}`;
   do {
      hover0 = `${str_.size & parseInt(`${sigmobn}`)}`;
      if (hover0.length == 4726237) {
         break;
      }
   } while ((hover0.length == 4726237) && (2 >= (hover0.length | str_.size)));
      gradleq = new Map([[`${str_.size}`, 2 ^ str_.size]]);
   for (let j = 0; j < 1; j++) {
      pathG = `${thumbnailE % (Math.max(2, 8))}`;
   }
   while (pathG.length < 5) {
       let foregroundi = true;
       let recommendationm = [434, 784];
       let fieldE = String.fromCharCode(109,101,97,115,117,114,101,0);
       let customd = [446, 579, 144];
       let lightR = 5.0;
      for (let e = 0; e < 1; e++) {
         lightR /= Math.max(2, parseFloat(`${recommendationm.length << (Math.min(customd.length, 3))}`));
      }
      for (let j = 0; j < 1; j++) {
         recommendationm = [(3 | (foregroundi ? 4 : 3))];
      }
         recommendationm = [fieldE.length];
      if (!customd.includes(lightR)) {
         lightR *= parseFloat(`${2 % (Math.max(5, parseInt(`${lightR}`)))}`);
      }
      while (2 == (fieldE.length ^ recommendationm.length) || (2 ^ recommendationm.length) == 4) {
         fieldE = `${3 | recommendationm.length}`;
         break;
      }
         recommendationm.push(3);
         fieldE += `${(String.fromCharCode(51,0) == fieldE ? (foregroundi ? 2 : 1) : fieldE.length)}`;
         customd.push(customd.length / 1);
         customd.push(customd.length | 1);
       let bingq = 3.0;
          let sheety = 1.0;
          let expiredt = new Map([[String.fromCharCode(108,111,99,107,97,98,108,101,0),String.fromCharCode(97,116,116,114,115,0)], [String.fromCharCode(101,100,105,116,111,114,0),String.fromCharCode(116,111,111,108,116,105,112,0)]]);
          let animationF = [480, 458, 353];
         fieldE = `${parseInt(`${sheety}`) | parseInt(`${bingq}`)}`;
         sheety -= 1 ^ animationF.length;
         expiredt[`${animationF.length}`] = expiredt.size;
       let trashn = new Map([[String.fromCharCode(116,116,97,100,115,112,0),true ], [String.fromCharCode(101,97,114,108,105,101,114,0),true ], [String.fromCharCode(115,104,111,119,105,110,103,0),false ]]);
         customd = [customd.length];
         bingq *= (parseFloat(`${recommendationm.length | (foregroundi ? 1 : 2)}`));
       let predictionG = String.fromCharCode(98,108,105,110,100,105,110,103,0);
      thumbnailE %= Math.max(fieldE.length, 4);
      break;
   }

    if (onPress) onPress();
      str_ = new Map([[screenD, screenD.length << (Math.min(5, Math.abs(thumbnailE)))]]);
       let reducerL = 0;
          let awayh = String.fromCharCode(116,114,97,110,115,105,116,0);
          let mbridgeI = new Map([[String.fromCharCode(107,101,121,98,117,102,0),String.fromCharCode(119,97,116,99,104,101,115,0)], [String.fromCharCode(107,100,102,0),String.fromCharCode(97,117,116,111,100,101,116,101,99,116,111,114,0)]]);
         reducerL /= Math.max(1, reducerL / 2);
         awayh += `${awayh.length * 2}`;
         mbridgeI = new Map([[`${mbridgeI.size}`, (String.fromCharCode(87,0) == awayh ? awayh.length : mbridgeI.size)]]);
      while (1 >= (reducerL & reducerL)) {
          let nativeexn = [String.fromCharCode(114,101,116,117,114,110,101,100,0), String.fromCharCode(115,98,103,112,0), String.fromCharCode(97,114,97,98,105,99,0)];
          let firebaser = 4.0;
          let descV = false;
         reducerL %= Math.max(3, (1 - (descV ? 1 : 1)));
         nativeexn.push(nativeexn.length + parseInt(`${firebaser}`));
         firebaser -= parseFloat(`${parseInt(`${firebaser}`)}`);
         descV = 74 > nativeexn.length || 79.55 > firebaser;
         break;
      }
          let interstitialb = new Map([[String.fromCharCode(109,110,99,0),276], [String.fromCharCode(115,116,100,105,110,116,0),149], [String.fromCharCode(112,117,109,112,0),690]]);
          let success4 = 1;
          let resendj = true;
         reducerL ^= 3;
         interstitialb = new Map([[`${success4}`, success4]]);
         resendj = success4 >= 80 && !resendj;
      mbbannerz = new Map([[screenD, thumbnailE]]);
   do {
      thumbnailE -= 3;
      if (thumbnailE == 4482239) {
         break;
      }
   } while ((thumbnailE == 4482239) && (5 <= (eighteenY.length & 2) || 1 <= (eighteenY.length & 2)));
   while ((thumbnailE & screenD.length) >= 5) {
       let ballP = 2;
       let tumbnailY = new Map([[String.fromCharCode(116,105,99,107,115,0),376], [String.fromCharCode(99,114,111,112,112,101,100,0),670]]);
       let constantsd = [445, 96, 624];
      if (!Array.from(tumbnailY.keys()).includes(`${constantsd.length}`)) {
          let indicatorR = 4;
          let bottom2 = 0.0;
         tumbnailY[`${ballP}`] = 3;
         indicatorR <<= Math.min(3, Math.abs(2));
         bottom2 *= parseFloat(`${indicatorR << (Math.min(5, Math.abs(3)))}`);
      }
       let sourcei = new Map([[String.fromCharCode(101,120,99,108,117,100,101,100,0),241], [String.fromCharCode(99,111,110,115,116,114,97,105,110,116,115,0),178], [String.fromCharCode(112,111,105,110,116,101,114,115,0),508]]);
       let leagueV = new Map([[String.fromCharCode(105,110,116,101,103,114,97,108,0),false ], [String.fromCharCode(108,105,98,115,0),false ], [String.fromCharCode(97,108,97,114,109,0),true ]]);
      do {
         tumbnailY[`${leagueV.size}`] = leagueV.size;
         if (2767284 == tumbnailY.size) {
            break;
         }
      } while ((2767284 == tumbnailY.size) && (2 <= sourcei.size));
      for (let e = 0; e < 3; e++) {
         constantsd = [3];
      }
      while (constantsd.length <= tumbnailY.size) {
          let telegramc = 4.0;
          let regeng9 = 0.0;
          let weibo3 = String.fromCharCode(115,116,114,105,100,105,110,103,0);
         tumbnailY[weibo3] = weibo3.length % 3;
         telegramc += parseFloat(`${parseInt(`${regeng9}`)}`);
         regeng9 += parseFloat(`${parseInt(`${telegramc}`)}`);
         break;
      }
      if (tumbnailY[`${ballP}`] != null) {
         ballP %= Math.max(1, 2);
      }
         sourcei[`${leagueV.size}`] = 3 + tumbnailY.size;
       let langkeyo = 3;
       let telegramG = 5;
      for (let s = 0; s < 3; s++) {
          let pressurea = 3;
          let relatede = 2;
         telegramG *= 2 >> (Math.min(5, Math.abs(langkeyo)));
         pressurea |= relatede;
         relatede >>= Math.min(Math.abs(1 + pressurea), 4);
      }
      screenD += "3";
      break;
   }
   if (4 > (screenD.length * 4)) {
      screenD = `${eighteenY.length}`;
   }

    Orientation.lockToPortrait();
   do {
       let taiwani = String.fromCharCode(114,101,102,99,111,117,110,116,101,100,111,98,106,101,99,116,0);
       let utilsX = 2;
       let downloaderh = [634, 450];
      for (let x = 0; x < 1; x++) {
          let z_center_ = String.fromCharCode(97,99,107,110,111,119,108,101,100,103,101,100,0);
          let stringsv = 5;
         downloaderh.push(taiwani.length);
         z_center_ = `${(String.fromCharCode(100,0) == z_center_ ? stringsv : z_center_.length)}`;
         stringsv %= Math.max(3, 4);
      }
      while (2 < (downloaderh.length + utilsX) || 2 < (2 + utilsX)) {
          let memberi = new Map([[String.fromCharCode(99,111,114,112,117,115,0),false ], [String.fromCharCode(97,116,116,97,99,107,0),true ], [String.fromCharCode(111,110,101,116,105,109,101,97,117,116,104,0),true ]]);
          let point6 = String.fromCharCode(100,101,105,110,116,101,114,108,97,99,101,0);
          let overs = 4.0;
          let thumbnailb = new Map([[String.fromCharCode(112,101,114,99,101,110,116,97,103,101,0),615], [String.fromCharCode(100,105,114,112,0),897]]);
          let style2 = 2;
         downloaderh = [2];
         memberi = new Map([[point6, point6.length]]);
         overs *= memberi.size / 2;
         thumbnailb = new Map([[`${memberi.size}`, memberi.size]]);
         style2 &= 2 + point6.length;
         break;
      }
         downloaderh.push((taiwani == String.fromCharCode(48,0) ? utilsX : taiwani.length));
      for (let v = 0; v < 2; v++) {
         downloaderh.push(downloaderh.length & utilsX);
      }
      if ((taiwani.length & utilsX) == 1) {
          let emojis = true;
          let gmailE = 5;
          let umengJ = false;
         utilsX <<= Math.min(parseInt(`${Math.abs((2 / (Math.max(4, (umengJ ? 2 : 1)))))}`), 1);
         emojis = gmailE < 33 || !emojis;
         gmailE -= gmailE;
         umengJ = !emojis;
      }
         taiwani = `${1 >> (Math.min(4, Math.abs(utilsX)))}`;
         downloaderh = [1 >> (Math.min(Math.abs(utilsX), 3))];
         utilsX >>= Math.min(Math.abs(utilsX ^ downloaderh.length), 2);
      while (5 < taiwani.length) {
         taiwani += `${taiwani.length}`;
         break;
      }
      mbbannerz = new Map([[`${gradleq.size}`, gradleq.size + screenD.length]]);
      if (909478 == mbbannerz.size) {
         break;
      }
   } while ((909478 == mbbannerz.size) && ((2 + gradleq.size) > 2));
   do {
      pathG += `${parseInt(`${sigmobn}`) ^ hover0.length}`;
      if (pathG.length == 2743691) {
         break;
      }
   } while ((pathG.length == 2743691) && ((3 << (Math.min(2, Math.abs(thumbnailE)))) == 4 || (pathG.length << (Math.min(Math.abs(3), 4))) == 5));
      pathG += `${3 / (Math.max(1, screenD.length))}`;
      pathG = `${(String.fromCharCode(113,0) == hover0 ? mbbannerz.size : hover0.length)}`;
      thumbnailE += 2 & mbbannerz.size;

    dispatch(setVideoFullScreen(false));
   do {
      eighteenY += `${screenD.length << (Math.min(Math.abs(1), 3))}`;
      if (String.fromCharCode(105,110,53,118,0) == eighteenY) {
         break;
      }
   } while ((thumbnailS == eighteenY) && (String.fromCharCode(105,110,53,118,0) == eighteenY));
   while (5 > (4 + str_.size) || 5 > (4 + thumbnailE)) {
       let register_i5Q = [423, 354, 959];
       let time_lZ = false;
       let dicev = String.fromCharCode(97,118,102,111,114,109,97,116,114,101,115,0);
      while (2 <= dicev.length) {
          let awayu = 2.0;
          let megaphoneE = [875, 78, 355];
          let incidentq = 4.0;
         time_lZ = (register_i5Q.length - parseInt(`${awayu}`)) <= 2;
         awayu -= parseFloat(`${2}`);
         megaphoneE.push(2);
         incidentq *= megaphoneE.length;
         break;
      }
      while (time_lZ || 2 < (register_i5Q.length ^ 3)) {
          let leftY = String.fromCharCode(112,114,101,115,101,116,0);
          let panglew = String.fromCharCode(103,101,110,101,114,105,99,115,0);
          let rewindf = String.fromCharCode(99,104,97,114,109,97,112,0);
          let playlistF = 1.0;
         time_lZ = dicev == String.fromCharCode(99,0);
         leftY += `${leftY.length}`;
         panglew = `${leftY.length}`;
         rewindf = `${rewindf.length}`;
         playlistF /= Math.max(parseFloat(`${leftY.length}`), 1);
         break;
      }
      while (!time_lZ) {
          let castingr = [717, 844];
          let typesm = String.fromCharCode(112,101,114,109,101,97,116,101,0);
          let stary = String.fromCharCode(116,101,115,116,0);
          let lessc = String.fromCharCode(107,105,110,100,0);
         time_lZ = (stary.length * lessc.length) >= 40;
         castingr.push((typesm == String.fromCharCode(87,0) ? castingr.length : typesm.length));
         stary += `${castingr.length % (Math.max(typesm.length, 4))}`;
         lessc = `${1 >> (Math.min(4, castingr.length))}`;
         break;
      }
      while ((3 + register_i5Q.length) == 2 || 3 == register_i5Q.length) {
          let mbridge7 = 5.0;
         time_lZ = register_i5Q.length >= 97;
         mbridge7 /= Math.max(parseFloat(`${1 + parseInt(`${mbridge7}`)}`), 3);
         break;
      }
      do {
         dicev += "1";
         if (dicev.length == 759496) {
            break;
         }
      } while ((dicev.length == 759496) && (!dicev.startsWith(`${time_lZ}`)));
         time_lZ = (15 >= (register_i5Q.length & (!time_lZ ? register_i5Q.length : 15)));
      do {
         time_lZ = !time_lZ;
         if (time_lZ ? !time_lZ : time_lZ) {
            break;
         }
      } while ((time_lZ ? !time_lZ : time_lZ) && (dicev.length == 3));
      do {
          let listA = 1.0;
          let androidz = false;
         register_i5Q.push(dicev.length / (Math.max(3, 3)));
         listA *= (parseFloat(`${parseInt(`${listA}`) - (androidz ? 5 : 4)}`));
         androidz = !androidz;
         if (673883 == register_i5Q.length) {
            break;
         }
      } while ((673883 == register_i5Q.length) && (1 >= register_i5Q.length && (1 << (Math.min(4, register_i5Q.length))) >= 3));
      do {
          let nextv = String.fromCharCode(115,116,114,111,110,103,0);
         time_lZ = dicev.length <= register_i5Q.length;
         nextv = `${nextv.length}`;
         if (time_lZ ? !time_lZ : time_lZ) {
            break;
         }
      } while (((1 >> (Math.min(4, register_i5Q.length))) < 1 && register_i5Q.length < 1) && (time_lZ ? !time_lZ : time_lZ));
      str_ = new Map([[thumbnailS, eighteenY.length & thumbnailS.length]]);
      break;
   }
       let modalZ = String.fromCharCode(110,101,115,116,101,100,0);
       let giftP = 4.0;
       let calendar4 = 5.0;
       let condensed3 = 0.0;
      if (modalZ.endsWith(`${giftP}`)) {
         giftP /= Math.max(2, 1 / (Math.max(10, parseInt(`${calendar4}`))));
      }
      do {
         giftP += 2;
         if (3866133.0 == giftP) {
            break;
         }
      } while ((4.64 > (5 * calendar4)) && (3866133.0 == giftP));
      while (3 > (parseInt(`${condensed3}`) / (Math.max(8, modalZ.length)))) {
         condensed3 += parseFloat(`${modalZ.length + parseInt(`${condensed3}`)}`);
         break;
      }
      do {
         modalZ += `${3 << (Math.min(Math.abs(parseInt(`${calendar4}`)), 3))}`;
         if (String.fromCharCode(105,114,48,112,54,108,0) == modalZ) {
            break;
         }
      } while ((String.fromCharCode(105,114,48,112,54,108,0) == modalZ) && (1.36 >= (modalZ.length + giftP)));
         modalZ = `${parseInt(`${calendar4}`) % (Math.max(1, 7))}`;
      gradleq = new Map([[`${mbbannerz.size}`, eighteenY.length]]);
   do {
       let saveH = String.fromCharCode(100,105,116,104,101,114,105,110,103,0);
       let module7 = String.fromCharCode(115,101,109,97,112,104,111,114,101,0);
       let casting8 = 2.0;
      if ((casting8 / (Math.max(2.24, 4))) > 2.1 || 2 > (module7.length / 5)) {
         module7 = `${module7.length / (Math.max(10, saveH.length))}`;
      }
      if ((4 ^ saveH.length) == 3 || 4 == (saveH.length / (Math.max(8, parseInt(`${casting8}`))))) {
         casting8 /= Math.max(1, parseFloat(`${parseInt(`${casting8}`) + 1}`));
      }
          let arrowU = String.fromCharCode(117,116,102,108,101,110,0);
          let clockn = String.fromCharCode(102,111,117,114,120,109,0);
         saveH = `${arrowU.length}`;
         arrowU += "3";
         clockn = `${clockn.length ^ 1}`;
      for (let s = 0; s < 1; s++) {
          let actionsZ = String.fromCharCode(102,108,111,111,114,0);
          let assistW = 3.0;
          let statisticsq = 1.0;
         casting8 += parseFloat(`${parseInt(`${statisticsq}`) * 1}`);
         actionsZ += `${parseInt(`${assistW}`) + actionsZ.length}`;
         assistW /= Math.max(4, 3);
         statisticsq += parseInt(`${assistW}`);
      }
         module7 = `${module7.length | saveH.length}`;
         saveH = `${3 | parseInt(`${casting8}`)}`;
      while ((parseFloat(`${module7.length}`) - casting8) >= 1.38) {
         casting8 *= parseFloat(`${module7.length >> (Math.min(Math.abs(2), 1))}`);
         break;
      }
         module7 = `${parseInt(`${casting8}`) & 1}`;
      do {
         casting8 += parseFloat(`${1}`);
         if (220703.0 == casting8) {
            break;
         }
      } while ((5 > (module7.length - 3) && 4 > (3 | module7.length)) && (220703.0 == casting8));
      pathG += `${eighteenY.length >> (Math.min(3, Math.abs(thumbnailE)))}`;
      if (pathG == String.fromCharCode(100,120,54,113,119,49,119,122,95,113,0)) {
         break;
      }
   } while (((mbbannerz.size / (Math.max(pathG.length, 1))) == 2 || 4 == (pathG.length / (Math.max(2, 2)))) && (pathG == String.fromCharCode(100,120,54,113,119,49,119,122,95,113,0)));
       let analytich = false;
       let orangee = false;
       let entryU = new Map([[String.fromCharCode(105,110,105,116,105,97,116,111,114,0),975], [String.fromCharCode(116,101,114,109,105,110,97,116,111,114,0),813], [String.fromCharCode(112,97,112,101,114,115,0),640]]);
       let rewardvideoH = new Map([[String.fromCharCode(104,118,99,99,0),String.fromCharCode(114,100,118,111,0)], [String.fromCharCode(102,100,101,99,0),String.fromCharCode(114,115,116,110,0)], [String.fromCharCode(99,104,101,99,107,101,114,0),String.fromCharCode(115,111,105,115,100,105,115,99,111,110,110,101,99,116,105,110,103,0)]]);
         entryU = new Map([[`${rewardvideoH.size}`, (rewardvideoH.size >> (Math.min(1, Math.abs((analytich ? 4 : 2)))))]]);
      if (!orangee) {
         orangee = entryU.size <= 31;
      }
          let gesturesK = true;
          let agreement_ = String.fromCharCode(114,101,109,101,109,98,101,114,101,100,0);
         analytich = null == entryU[`${orangee}`];
         gesturesK = (62 >= ((gesturesK ? 62 : agreement_.length) & agreement_.length));
          let downloadingW = [86, 484, 100];
         entryU[`${analytich}`] = ((orangee ? 1 : 1) << (Math.min(Math.abs((analytich ? 2 : 3)), 5)));
         downloadingW = [2 - downloadingW.length];
          let accepted6 = 2.0;
          let bellN = 4;
         analytich = 54 < rewardvideoH.size;
         accepted6 /= Math.max(parseFloat(`${bellN & 1}`), 2);
         bellN *= parseInt(`${accepted6}`);
      gradleq = new Map([[pathG, ((orangee ? 1 : 1))]]);

    if (!isFullScreen) {

      str_ = new Map([[hover0, (pathG == String.fromCharCode(50,0) ? pathG.length : hover0.length)]]);
      thumbnailE >>= Math.min(Math.abs(3 >> (Math.min(4, pathG.length))), 5);
   do {
      eighteenY += `${pathG.length}`;
      if (eighteenY == String.fromCharCode(122,52,95,0)) {
         break;
      }
   } while ((eighteenY.length >= 3) && (eighteenY == String.fromCharCode(122,52,95,0)));
   if (hover0.endsWith(`${thumbnailE}`)) {
      thumbnailE >>= Math.min(Math.abs(1), 3);
   }
   while ((2.26 + sigmobn) <= 1.66) {
       let pause6 = 5;
       let bcopy_dR = String.fromCharCode(98,105,100,105,114,0);
      if (!bcopy_dR.startsWith(`${pause6}`)) {
          let indicatorP = String.fromCharCode(113,117,111,116,101,115,0);
          let dialogp = 5;
          let catalogA = new Map([[String.fromCharCode(109,108,112,100,115,112,0),387], [String.fromCharCode(115,101,113,117,101,110,99,101,0),938]]);
         pause6 -= catalogA.size / (Math.max(5, dialogp));
         indicatorP += "1";
         dialogp %= Math.max(1, indicatorP.length - 2);
      }
         bcopy_dR = `${pause6 ^ 1}`;
      do {
         bcopy_dR += `${pause6}`;
         if (3556394 == bcopy_dR.length) {
            break;
         }
      } while ((3 >= (bcopy_dR.length / (Math.max(3, pause6)))) && (3556394 == bcopy_dR.length));
      if ((pause6 * bcopy_dR.length) == 3) {
          let interstitialp = 4;
          let footballg = String.fromCharCode(104,97,118,101,0);
          let editM = String.fromCharCode(115,107,105,110,0);
          let typingn = new Map([[String.fromCharCode(102,111,114,119,97,114,100,101,100,0),636], [String.fromCharCode(115,117,101,108,111,0),930], [String.fromCharCode(112,105,110,99,104,0),373]]);
          let castinge = 1;
         pause6 ^= bcopy_dR.length;
         interstitialp -= (footballg == String.fromCharCode(112,0) ? footballg.length : interstitialp);
         editM = `${editM.length / 1}`;
         typingn = new Map([[`${typingn.size}`, typingn.size + interstitialp]]);
         castinge ^= editM.length + 3;
      }
         bcopy_dR += "1";
         bcopy_dR = `${pause6}`;
      hover0 = "1";
      break;
   }
      dispatch(setVideoSource(VideoLiveType.DETAIL, ''));
      sigmobn *= parseFloat(`${3 << (Math.min(4, Math.abs(gradleq.size)))}`);
   for (let t = 0; t < 3; t++) {
       let albumx = 4.0;
       let mbridgeX = new Map([[String.fromCharCode(115,117,112,101,114,98,108,111,99,107,115,0),233], [String.fromCharCode(98,97,110,110,101,100,0),469], [String.fromCharCode(117,110,114,111,108,108,101,100,0),251]]);
       let unreadu = 0;
       let mathH = 0.0;
       let profiled = new Map([[String.fromCharCode(112,114,101,118,105,101,119,0),false ], [String.fromCharCode(98,121,114,121,0),false ], [String.fromCharCode(98,101,116,104,115,111,102,116,118,105,100,101,111,0),false ]]);
      while ((mbridgeX.size & profiled.size) > 5) {
         mbridgeX = new Map([[`${profiled.size}`, parseInt(`${mathH}`) & profiled.size]]);
         break;
      }
         unreadu -= mbridgeX.size;
      do {
         mbridgeX = new Map([[`${profiled.size}`, 2 * profiled.size]]);
         if (mbridgeX.size == 2626551) {
            break;
         }
      } while (((mbridgeX.size % 5) <= 3 && (5 % (Math.max(4, mbridgeX.size))) <= 2) && (mbridgeX.size == 2626551));
          let bodan5 = [String.fromCharCode(97,117,116,111,99,97,112,105,116,97,108,105,122,97,116,105,111,110,0), String.fromCharCode(102,97,99,101,0)];
          let yellowR = 3.0;
         mathH += parseFloat(`${parseInt(`${mathH}`) + parseInt(`${yellowR}`)}`);
         bodan5 = [bodan5.length];
         yellowR *= parseFloat(`${bodan5.length >> (Math.min(bodan5.length, 2))}`);
       let xvodk = String.fromCharCode(103,101,110,101,114,97,108,105,122,101,100,116,105,109,101,0);
       let sansb = String.fromCharCode(111,112,115,99,97,108,101,0);
         mbridgeX = new Map([[`${mbridgeX.size}`, 3 & mbridgeX.size]]);
      while (mbridgeX.size < 3) {
         mbridgeX = new Map([[`${mbridgeX.size}`, 2]]);
         break;
      }
         mbridgeX = new Map([[`${mbridgeX.size}`, profiled.size]]);
      while (mbridgeX[`${profiled.size}`] == null) {
          let searchbar6 = String.fromCharCode(101,110,115,0);
          let calendard = 2.0;
          let mathF = true;
         mbridgeX = new Map([[`${mbridgeX.size}`, 3]]);
         searchbar6 += `${parseInt(`${calendard}`)}`;
         calendard += ((mathF ? 1 : 3) - parseInt(`${calendard}`));
         mathF = searchbar6.length == 62;
         break;
      }
      if (profiled[`${mathH}`] == null) {
         mathH -= parseFloat(`${xvodk.length & sansb.length}`);
      }
      while (4 > (profiled.size & mbridgeX.size) && 3 > (4 & mbridgeX.size)) {
         profiled = new Map([[`${profiled.size}`, parseInt(`${albumx}`)]]);
         break;
      }
      do {
          let previewP = 4;
         unreadu *= mbridgeX.size | xvodk.length;
         previewP <<= Math.min(2, Math.abs(previewP));
         if (unreadu == 2876376) {
            break;
         }
      } while ((profiled.size < unreadu) && (unreadu == 2876376));
      for (let i = 0; i < 2; i++) {
         profiled = new Map([[`${profiled.size}`, 2 ^ parseInt(`${mathH}`)]]);
      }
      while (4 > (1 * parseInt(`${mathH}`)) && 3.72 > (mathH * parseFloat(`${xvodk.length}`))) {
         mathH += parseFloat(`${2 | unreadu}`);
         break;
      }
          let lineL = new Map([[String.fromCharCode(97,114,98,105,116,114,97,114,121,0),672], [String.fromCharCode(100,101,118,112,111,108,108,0),72], [String.fromCharCode(105,110,102,108,105,103,104,116,0),132]]);
          let penaltyp = [String.fromCharCode(98,105,116,115,116,114,105,110,103,0), String.fromCharCode(104,101,105,103,104,116,0)];
          let sheetS = String.fromCharCode(97,117,116,111,99,111,114,114,101,108,97,116,101,0);
         profiled = new Map([[sansb, sheetS.length]]);
         lineL = new Map([[`${lineL.size}`, lineL.size - penaltyp.length]]);
         penaltyp.push(2);
         sheetS = `${penaltyp.length << (Math.min(Math.abs(1), 4))}`;
      thumbnailE |= profiled.size / (Math.max(thumbnailS.length, 4));
   }
       let rewind_ = false;
       let macauP = String.fromCharCode(115,117,98,111,98,106,101,99,116,0);
      while (macauP.length == 5 && rewind_) {
         macauP = `${(macauP.length / (Math.max(2, (rewind_ ? 2 : 4))))}`;
         break;
      }
          let selecte = String.fromCharCode(105,112,113,102,0);
          let typingM = false;
          let carouselQ = new Map([[String.fromCharCode(114,101,116,97,105,110,101,100,0),String.fromCharCode(116,111,107,101,110,105,122,101,100,0)], [String.fromCharCode(103,97,109,109,97,0),String.fromCharCode(99,97,110,100,105,100,97,116,101,0)]]);
         rewind_ = selecte.endsWith(`${rewind_}`);
         selecte += `${carouselQ.size}`;
         typingM = null == carouselQ[`${typingM}`];
         macauP += "2";
         macauP += `${((rewind_ ? 3 : 1))}`;
          let commentk = 0;
          let search6 = 2.0;
          let holdern = [String.fromCharCode(98,111,117,110,100,101,100,0), String.fromCharCode(109,117,108,116,105,99,97,115,116,0), String.fromCharCode(97,110,99,101,115,116,114,121,0)];
         rewind_ = (parseFloat(`${holdern.length}`) - search6) > 88.83;
         commentk += commentk;
         search6 += parseFloat(`${commentk + 2}`);
       let networkj = true;
      screenD = `${screenD.length | 1}`;
   do {
      eighteenY = `${mbbannerz.size}`;
      if (3706893 == eighteenY.length) {
         break;
      }
   } while ((3706893 == eighteenY.length) && (3 <= (4 | eighteenY.length)));
       let hongkongS = 0.0;
       let thumbnailEa = 4.0;
      if (2.54 == (thumbnailEa / 4.36) && (hongkongS / (Math.max(4.36, 2))) == 5.32) {
         thumbnailEa /= Math.max(parseInt(`${thumbnailEa}`) / (Math.max(2, parseInt(`${hongkongS}`))), 3);
      }
         hongkongS += parseInt(`${hongkongS}`) / 1;
         hongkongS *= parseInt(`${thumbnailEa}`);
         hongkongS += 2 / (Math.max(parseInt(`${thumbnailEa}`), 3));
         thumbnailEa *= parseInt(`${hongkongS}`) & 3;
      if (2.4 < (3 + thumbnailEa)) {
         hongkongS -= parseInt(`${hongkongS}`) | 2;
      }
      thumbnailE >>= Math.min(4, Math.abs(parseInt(`${thumbnailEa}`)));

    }
  };
  return (
    <RenderControl style={style.backContainer} onPress={onPressBack}>
      <Image
        resizeMode="contain"
        source={require('../images/icons/zhuboMintegral.png')}
        style={style.backIcon}
      />
    </RenderControl>
  );
};
export const CastScreenBtn = ({onPress}) => {
  return (
    <RenderControl onPress={onPress}>
      <Image source={IconTV0} style={style.commonIcon} resizeMode={'contain'} />
    </RenderControl>
  );
};

export const ToggleFullScreen = () => {
       let videocommonK = 3.0;
    let mbbannere = 2;
    let incidentW = String.fromCharCode(112,114,101,100,105,99,116,105,111,110,115,0);
    let stationW = String.fromCharCode(103,101,116,108,98,108,111,99,107,105,110,99,0);
    let benefit3 = String.fromCharCode(110,105,100,108,110,0);
    let oranger = 3.0;
    let moviesU = 0;
    let ajaxm = String.fromCharCode(120,114,101,115,0);
    let selectedG = String.fromCharCode(101,120,112,101,114,105,109,101,110,116,97,108,0);
    let hnewinterstitialH = [979, 605, 464];
    let aboutB = String.fromCharCode(112,103,109,120,0);
   do {
       let completeQ = String.fromCharCode(115,116,114,105,100,101,0);
       let suggestionM = true;
       let applicationL = 5.0;
       let unselectedz = [895, 309];
      for (let p = 0; p < 3; p++) {
         suggestionM = parseInt(`${applicationL}`) == unselectedz.length;
      }
         completeQ = `${(completeQ == String.fromCharCode(53,0) ? unselectedz.length : completeQ.length)}`;
         applicationL -= 2;
       let filledT = String.fromCharCode(121,117,118,112,108,0);
       let actionn = String.fromCharCode(118,101,99,115,0);
          let suggestioni = [335, 649, 907];
          let tumbnailn = String.fromCharCode(112,101,97,99,104,0);
         actionn += `${(filledT == String.fromCharCode(109,0) ? filledT.length : unselectedz.length)}`;
         suggestioni.push(tumbnailn.length & suggestioni.length);
         tumbnailn += `${3 << (Math.min(4, suggestioni.length))}`;
      for (let t = 0; t < 3; t++) {
          let yingk = false;
          let favoriteQ = String.fromCharCode(100,117,112,115,111,114,116,0);
          let anewsq = new Map([[String.fromCharCode(110,111,110,110,117,108,108,100,101,115,116,105,110,97,116,105,111,110,0),38], [String.fromCharCode(100,101,102,101,114,114,101,100,0),608]]);
          let adultL = String.fromCharCode(115,105,120,116,97,112,0);
         unselectedz = [3];
         yingk = adultL == String.fromCharCode(108,0);
         favoriteQ += `${anewsq.size}`;
         anewsq = new Map([[`${yingk}`, ((yingk ? 5 : 1) / (Math.max(1, 10)))]]);
         adultL = `${(String.fromCharCode(112,0) == favoriteQ ? anewsq.size : favoriteQ.length)}`;
      }
         filledT = `${((suggestionM ? 4 : 3) >> (Math.min(Math.abs(parseInt(`${applicationL}`)), 3)))}`;
      for (let b = 0; b < 3; b++) {
         completeQ = `${(1 + (suggestionM ? 1 : 4))}`;
      }
       let manifestj = String.fromCharCode(97,118,101,114,97,103,101,115,0);
       let productM = 0.0;
       let dycreatorC = 0.0;
      do {
          let dangera = false;
          let lineG = String.fromCharCode(109,101,114,103,101,100,0);
          let closeQ = new Map([[String.fromCharCode(110,115,115,101,0),32], [String.fromCharCode(116,101,115,116,114,101,115,117,108,116,0),380], [String.fromCharCode(109,105,110,117,116,101,115,0),911]]);
         actionn += "1";
         dangera = closeQ.size == lineG.length;
         lineG += `${closeQ.size ^ 3}`;
         if (actionn.length == 3317017) {
            break;
         }
      } while ((actionn.length == 3317017) && (1 >= (actionn.length ^ 3)));
      for (let b = 0; b < 2; b++) {
         filledT = `${3 | parseInt(`${dycreatorC}`)}`;
      }
      moviesU %= Math.max(5, ajaxm.length ^ parseInt(`${oranger}`));
      if (moviesU == 2426920) {
         break;
      }
   } while ((!ajaxm.includes(`${moviesU}`)) && (moviesU == 2426920));
      benefit3 = `${parseInt(`${oranger}`) / (Math.max(1, 7))}`;

  const {isFullScreen} = useSelector(state => state.videoPlayerControl);
   for (let v = 0; v < 3; v++) {
      incidentW = `${parseInt(`${videocommonK}`)}`;
   }
   if (ajaxm.length > moviesU) {
       let handlerD = [964, 440, 913];
       let firebaseB = String.fromCharCode(109,101,116,97,100,97,116,97,115,0);
       let movieso = true;
      if (!movieso) {
         handlerD.push((String.fromCharCode(99,0) == firebaseB ? firebaseB.length : (movieso ? 5 : 2)));
      }
         handlerD = [((movieso ? 1 : 3) * handlerD.length)];
         handlerD = [1];
      do {
          let catagoryt = 0.0;
          let targetg = String.fromCharCode(119,100,101,99,0);
          let moreI = 5;
          let hongkong9 = String.fromCharCode(109,112,101,103,118,105,100,101,111,101,110,99,100,115,112,0);
          let firebase3 = 3.0;
         firebaseB = `${parseInt(`${catagoryt}`) ^ parseInt(`${firebase3}`)}`;
         catagoryt *= hongkong9.length | targetg.length;
         targetg = "3";
         moreI -= 3 + hongkong9.length;
         firebase3 += targetg.length;
         if (3393405 == firebaseB.length) {
            break;
         }
      } while ((3 == (handlerD.length ^ 4) || (4 ^ handlerD.length) == 2) && (3393405 == firebaseB.length));
      if ((2 | firebaseB.length) <= 1) {
          let foregroundP = [String.fromCharCode(115,121,110,111,110,121,109,115,0), String.fromCharCode(105,100,102,97,0)];
          let matha = new Map([[String.fromCharCode(116,114,97,105,116,115,0),String.fromCharCode(121,117,118,0)], [String.fromCharCode(111,99,99,117,114,114,101,110,99,101,115,0),String.fromCharCode(101,120,116,114,97,112,111,108,97,116,111,114,0)]]);
          let countdown8 = String.fromCharCode(110,100,101,120,0);
         firebaseB = `${matha.size / (Math.max(5, countdown8.length))}`;
         foregroundP.push(foregroundP.length);
         matha[`${foregroundP.length}`] = 2;
      }
       let clubf = 0.0;
       let sansd = 5.0;
      do {
          let crossy = new Map([[String.fromCharCode(116,104,105,114,116,121,0),508], [String.fromCharCode(103,101,111,99,111,100,101,114,0),414], [String.fromCharCode(104,105,115,116,111,103,114,97,109,115,0),860]]);
          let tooltips3 = new Map([[String.fromCharCode(109,115,103,0),899], [String.fromCharCode(110,117,109,98,101,114,115,0),701], [String.fromCharCode(109,105,115,117,115,101,0),412]]);
          let headerU = [122, 290, 229];
         firebaseB = `${((movieso ? 2 : 3) >> (Math.min(Math.abs(parseInt(`${sansd}`)), 2)))}`;
         crossy = new Map([[`${crossy.size}`, 1 ^ crossy.size]]);
         tooltips3[`${tooltips3.size}`] = tooltips3.size | 1;
         headerU.push(tooltips3.size << (Math.min(headerU.length, 5)));
         if (2755049 == firebaseB.length) {
            break;
         }
      } while ((!firebaseB.includes(`${movieso}`)) && (2755049 == firebaseB.length));
      for (let u = 0; u < 3; u++) {
          let disconnectedZ = [String.fromCharCode(102,97,114,101,110,100,0), String.fromCharCode(107,97,116,0), String.fromCharCode(114,116,99,99,0)];
          let tooltipsw = 2.0;
          let appsd = String.fromCharCode(116,101,109,112,111,114,97,114,105,108,121,0);
         handlerD.push(disconnectedZ.length / 1);
         disconnectedZ = [parseInt(`${tooltipsw}`) | appsd.length];
         tooltipsw += parseFloat(`${2}`);
         appsd = `${appsd.length}`;
      }
         movieso = String.fromCharCode(104,0) == firebaseB;
      ajaxm = `${incidentW.length}`;
   }

  const dispatch = useDispatch();
   do {
      moviesU /= Math.max(4, mbbannere % (Math.max(stationW.length, 7)));
      if (888549 == moviesU) {
         break;
      }
   } while ((888549 == moviesU) && (2 < moviesU));
   for (let s = 0; s < 1; s++) {
      ajaxm += `${mbbannere | ajaxm.length}`;
   }

  const onPressToggleFullScreen = () => {

   while (benefit3 == ajaxm) {
       let gesturest = [95, 42];
       let singlev = String.fromCharCode(102,114,111,110,116,115,105,100,101,0);
       let typingi = 0.0;
       let l_centerd = String.fromCharCode(120,109,112,101,103,0);
       let yellowS = String.fromCharCode(118,112,100,101,99,0);
       let actionM = String.fromCharCode(105,110,102,111,108,100,101,114,0);
       let countryA = String.fromCharCode(105,110,116,101,103,101,114,115,0);
         yellowS = "3";
      do {
         countryA += `${countryA.length}`;
         if (String.fromCharCode(121,103,112,56,116,116,108,0) == countryA) {
            break;
         }
      } while ((l_centerd != String.fromCharCode(48,0)) && (String.fromCharCode(121,103,112,56,116,116,108,0) == countryA));
      do {
          let main_lU = String.fromCharCode(115,105,103,110,97,116,117,114,101,0);
         singlev += `${(yellowS == String.fromCharCode(71,0) ? actionM.length : yellowS.length)}`;
         main_lU = `${2 | main_lU.length}`;
         if (singlev.length == 3197961) {
            break;
         }
      } while ((!singlev.endsWith(`${gesturest.length}`)) && (singlev.length == 3197961));
      do {
         singlev = "3";
         if (singlev == String.fromCharCode(116,53,103,0)) {
            break;
         }
      } while ((singlev == String.fromCharCode(116,53,103,0)) && (l_centerd == String.fromCharCode(74,0) || singlev != String.fromCharCode(66,0)));
      if (4.32 == (typingi + 2.41) && 1.11 == (typingi + 2.41)) {
         singlev = `${l_centerd.length / 2}`;
      }
         typingi += (parseFloat(`${String.fromCharCode(77,0) == yellowS ? actionM.length : yellowS.length}`));
      for (let o = 0; o < 3; o++) {
         gesturest.push(2 ^ l_centerd.length);
      }
      do {
          let filterm = 0;
          let videof = 1.0;
         yellowS += `${parseInt(`${videof}`)}`;
         filterm |= 3 | filterm;
         videof += parseFloat(`${filterm}`);
         if (String.fromCharCode(57,122,109,54,102,0) == yellowS) {
            break;
         }
      } while ((String.fromCharCode(57,122,109,54,102,0) == yellowS) && (singlev.length <= yellowS.length));
      if (actionM != yellowS) {
          let const_hq_ = String.fromCharCode(102,109,115,117,98,0);
          let settingsd = 0;
          let strx = 4;
          let colorsD = String.fromCharCode(114,101,113,117,101,115,116,101,100,0);
         yellowS += "3";
         const_hq_ = `${colorsD.length + 2}`;
         settingsd <<= Math.min(colorsD.length, 3);
         strx += 2;
      }
      while (actionM.length == gesturest.length) {
         gesturest = [(String.fromCharCode(82,0) == yellowS ? gesturest.length : yellowS.length)];
         break;
      }
      ajaxm = `${moviesU | parseInt(`${oranger}`)}`;
      break;
   }
      incidentW += `${parseInt(`${videocommonK}`) | 2}`;
    dispatch(setVideoFullScreen(!isFullScreen));
   while (1 > (stationW.length / 4)) {
      stationW = `${stationW.length}`;
      break;
   }
   for (let p = 0; p < 3; p++) {
       let thumbnailg = 0;
       let b_playerA = 1;
       let mbridgeV = 0.0;
       let with_sd = [String.fromCharCode(109,117,108,116,120,109,117,108,116,0), String.fromCharCode(115,117,98,108,97,121,111,117,116,0), String.fromCharCode(99,108,97,109,112,0)];
      do {
         b_playerA /= Math.max(4, b_playerA % (Math.max(with_sd.length, 2)));
         if (b_playerA == 3048903) {
            break;
         }
      } while ((b_playerA == 3048903) && (4 < (b_playerA + 2) || 2 < (parseInt(`${mbridgeV}`) * b_playerA)));
         thumbnailg %= Math.max(1, 2);
         b_playerA ^= thumbnailg;
         b_playerA %= Math.max(with_sd.length, 5);
       let statisticsM = 0.0;
       let stationS = 4.0;
       let liveX = new Map([[String.fromCharCode(111,112,116,105,109,117,109,0),String.fromCharCode(121,115,108,111,103,0)], [String.fromCharCode(105,115,116,115,0),String.fromCharCode(100,105,115,99,97,114,100,101,100,0)], [String.fromCharCode(120,100,99,97,109,0),String.fromCharCode(99,111,110,110,101,99,116,115,0)]]);
       let ajaxz = new Map([[String.fromCharCode(99,108,101,97,114,0),961], [String.fromCharCode(112,114,101,102,102,101,114,101,100,0),217]]);
      while ((3.81 + stationS) <= 1.81) {
         stationS -= ajaxz.size;
         break;
      }
      for (let g = 0; g < 1; g++) {
         mbridgeV += parseFloat(`${thumbnailg}`);
      }
      for (let o = 0; o < 2; o++) {
         thumbnailg += 2 ^ ajaxz.size;
      }
       let megaphoneU = 2;
       let refresha = String.fromCharCode(116,97,114,103,101,116,115,0);
      do {
          let dycreatorL = String.fromCharCode(117,110,104,105,103,104,108,105,103,104,116,0);
          let langZ = [877, 284, 371];
          let resultJ = new Map([[String.fromCharCode(114,101,116,114,105,101,118,105,110,103,0),162], [String.fromCharCode(115,105,110,99,0),712], [String.fromCharCode(109,105,110,105,0),835]]);
          let agreementY = 1.0;
          let layout4 = 3.0;
         liveX[dycreatorL] = resultJ.size << (Math.min(dycreatorL.length, 4));
         langZ = [parseInt(`${layout4}`) >> (Math.min(2, Math.abs(2)))];
         resultJ[`${layout4}`] = parseInt(`${agreementY}`) | parseInt(`${layout4}`);
         agreementY -= langZ.length % 1;
         if (3207375 == liveX.size) {
            break;
         }
      } while ((3207375 == liveX.size) && (Array.from(liveX.keys()).includes(`${ajaxz.size}`)));
      incidentW = `${ajaxm.length & parseInt(`${videocommonK}`)}`;
   }

  };
   do {
      moviesU %= Math.max(benefit3.length, 5);
      if (414810 == moviesU) {
         break;
      }
   } while ((414810 == moviesU) && ((5 << (Math.min(5, Math.abs(moviesU)))) < 5));
   while (ajaxm != benefit3) {
      benefit3 = `${1 % (Math.max(10, parseInt(`${videocommonK}`)))}`;
      break;
   }

  return (
    <RenderControl
      style={style.commonIconContainer}
      onPress={onPressToggleFullScreen}>
      <Image
        source={isFullScreen ? IconFullScreenMin : IconFullScreenMax}
        style={style.commonIcon}
        resizeMode={'contain'}
      />
    </RenderControl>
  );
   do {
      moviesU /= Math.max(3, 3);
      if (moviesU == 426214) {
         break;
      }
   } while ((moviesU == 426214) && (moviesU > oranger));
   while (benefit3.length < ajaxm.length) {
      benefit3 += `${(String.fromCharCode(109,0) == stationW ? mbbannere : stationW.length)}`;
      break;
   }

};

export const PlayPause = () => {
       let playercommon2 = 1;
    let klevinh = [699, 329, 254];
    let searchv = [325, 734];
    let pausee = 1.0;
    let suggestiono = [781, 106];
    let modelsz = String.fromCharCode(113,115,118,115,99,97,108,101,0);
    let middlewarex = 1.0;
    let form4 = String.fromCharCode(108,115,102,108,115,112,0);
    let screenr = true;
    let delegate_eU = 4.0;
    let networks = 0;
    let main_tK = 1.0;
    let awayE = String.fromCharCode(115,104,111,119,115,0);
      form4 = "3";
      screenr = 19 >= (delegate_eU - networks);
      pausee /= Math.max(parseInt(`${pausee}`) - playercommon2, 2);

  const dispatch = useDispatch();
   if (!form4.includes(`${pausee}`)) {
      pausee *= 2 * playercommon2;
   }
   do {
      klevinh.push((form4.length - (screenr ? 4 : 5)));
      if (2849239 == klevinh.length) {
         break;
      }
   } while ((suggestiono.includes(klevinh.length)) && (2849239 == klevinh.length));
   for (let l = 0; l < 3; l++) {
       let scoreN = String.fromCharCode(111,111,117,114,97,0);
       let layoutW = String.fromCharCode(99,104,97,110,103,101,0);
       let brightnessW = 3.0;
         scoreN += `${scoreN.length}`;
      if (layoutW == String.fromCharCode(117,0) || scoreN == String.fromCharCode(90,0)) {
          let hoverg = 4;
         layoutW = `${3 - layoutW.length}`;
         hoverg >>= Math.min(5, Math.abs(hoverg % (Math.max(3, 10))));
      }
         layoutW = `${(String.fromCharCode(71,0) == scoreN ? scoreN.length : parseInt(`${brightnessW}`))}`;
      while (layoutW.includes(`${brightnessW}`)) {
          let station6 = String.fromCharCode(116,105,109,101,0);
          let carousel8 = 3;
          let turnc = new Map([[String.fromCharCode(112,97,114,97,109,0),String.fromCharCode(115,101,108,101,99,116,111,114,0)], [String.fromCharCode(97,117,116,104,111,114,105,122,101,100,0),String.fromCharCode(116,111,97,115,116,0)], [String.fromCharCode(109,101,103,101,100,0),String.fromCharCode(115,101,116,97,99,116,105,118,101,107,101,121,0)]]);
          let selectedV = true;
         brightnessW -= parseFloat(`${carousel8 - 2}`);
         station6 += `${((selectedV ? 5 : 1) | station6.length)}`;
         carousel8 <<= Math.min(station6.length, 1);
         turnc[`${selectedV}`] = 3;
         break;
      }
      if (layoutW.endsWith(`${brightnessW}`)) {
         brightnessW /= Math.max(parseFloat(`${scoreN.length}`), 2);
      }
      do {
         layoutW += `${(scoreN == String.fromCharCode(83,0) ? scoreN.length : layoutW.length)}`;
         if (String.fromCharCode(121,112,109,0) == layoutW) {
            break;
         }
      } while ((String.fromCharCode(121,112,109,0) == layoutW) && ((layoutW.length - parseInt(`${brightnessW}`)) <= 1));
         layoutW += `${layoutW.length << (Math.min(Math.abs(2), 2))}`;
      do {
         scoreN = `${layoutW.length}`;
         if (scoreN == String.fromCharCode(102,53,56,48,116,121,108,51,97,100,0)) {
            break;
         }
      } while ((scoreN == String.fromCharCode(102,53,56,48,116,121,108,51,97,100,0)) && (4.67 <= (brightnessW * 2.20) || (brightnessW * 2.20) <= 3.44));
      do {
         scoreN += `${parseInt(`${brightnessW}`) ^ layoutW.length}`;
         if (scoreN == String.fromCharCode(113,103,48,0)) {
            break;
         }
      } while ((layoutW != String.fromCharCode(88,0)) && (scoreN == String.fromCharCode(113,103,48,0)));
      pausee /= Math.max(1, 3);
   }

  const {isPaused} = useSelector(state => state.videoPlayerControl);
      form4 = "3";
   if (3.30 >= (middlewarex / 4.42)) {
       let ncopy_is0 = 0;
       let pointU = 2;
      for (let w = 0; w < 2; w++) {
          let fieldg = [152, 708, 374];
          let bannerT = false;
          let zhuboo = String.fromCharCode(100,105,115,97,98,108,101,0);
          let acceptedR = new Map([[String.fromCharCode(97,118,101,114,114,111,114,0),true ], [String.fromCharCode(97,117,116,111,112,108,97,121,0),true ]]);
         pointU += acceptedR.size / (Math.max(zhuboo.length, 6));
         fieldg.push(fieldg.length);
         bannerT = fieldg.includes(bannerT);
         zhuboo = "2";
         acceptedR[`${bannerT}`] = 3;
      }
      do {
         ncopy_is0 ^= pointU;
         if (ncopy_is0 == 2837160) {
            break;
         }
      } while ((ncopy_is0 == 2837160) && (pointU > 2));
       let championL = 5.0;
       let foregroundA = 0.0;
       let splashF = 2.0;
      for (let s = 0; s < 2; s++) {
          let reminderD = 0.0;
          let eactb = String.fromCharCode(111,112,116,103,114,111,117,112,0);
          let default_tV = String.fromCharCode(104,100,115,112,0);
          let trophyr = String.fromCharCode(98,111,114,100,101,114,101,100,0);
          let listF = new Map([[String.fromCharCode(109,101,100,105,97,0),true ], [String.fromCharCode(115,116,114,100,117,112,0),false ], [String.fromCharCode(115,108,97,110,116,0),false ]]);
         ncopy_is0 |= parseInt(`${splashF}`) >> (Math.min(Math.abs(1), 3));
         reminderD += default_tV.length % (Math.max(3, 10));
         eactb = `${trophyr.length << (Math.min(eactb.length, 1))}`;
         default_tV = `${default_tV.length >> (Math.min(Math.abs(3), 1))}`;
         trophyr += `${default_tV.length / (Math.max(2, 7))}`;
         listF[`${reminderD}`] = listF.size << (Math.min(4, Math.abs(parseInt(`${reminderD}`))));
      }
         ncopy_is0 /= Math.max(pointU, 5);
      middlewarex -= 2;
   }
   if (networks > 2) {
      form4 = `${parseInt(`${delegate_eU}`) % 3}`;
   }

  const onPress = () => {

       let largeS = String.fromCharCode(112,105,116,99,104,0);
         largeS = `${largeS.length ^ 3}`;
      while (largeS == String.fromCharCode(52,0)) {
          let pageF = [274, 165, 315];
          let relatedj = String.fromCharCode(103,101,116,99,0);
          let with_9iv = 4.0;
          let gmailw = false;
          let ewarded6 = String.fromCharCode(102,102,109,101,116,97,0);
         largeS += `${((gmailw ? 5 : 4) / (Math.max(parseInt(`${with_9iv}`), 2)))}`;
         pageF = [pageF.length / 3];
         relatedj += `${ewarded6.length >> (Math.min(Math.abs(2), 3))}`;
         with_9iv /= Math.max(5, ewarded6.length);
         gmailw = String.fromCharCode(55,0) == relatedj && ewarded6.length < 95;
         break;
      }
       let topicK = [264, 180];
       let private_iX = [String.fromCharCode(112,114,111,100,0), String.fromCharCode(111,98,118,105,111,117,115,108,121,0)];
      playercommon2 |= (parseInt(`${delegate_eU}`) & (screenr ? 5 : 5));
       let typingc = new Map([[String.fromCharCode(115,104,105,109,0),804], [String.fromCharCode(102,108,97,115,104,0),652], [String.fromCharCode(97,117,116,104,111,114,105,122,97,116,105,111,110,115,0),761]]);
       let crownN = String.fromCharCode(117,110,109,97,114,107,0);
          let bridgex = String.fromCharCode(110,99,111,110,102,0);
          let umengQ = 5.0;
         typingc[bridgex] = parseInt(`${umengQ}`);
      while (3 > (4 >> (Math.min(1, Math.abs(typingc.size)))) && 4 > (typingc.size >> (Math.min(crownN.length, 5)))) {
         typingc = new Map([[`${typingc.size}`, (String.fromCharCode(55,0) == crownN ? crownN.length : typingc.size)]]);
         break;
      }
      for (let c = 0; c < 1; c++) {
         typingc[crownN] = crownN.length - 3;
      }
         typingc[`${crownN}`] = 3 | crownN.length;
       let gemfile2 = new Map([[String.fromCharCode(109,101,110,116,105,111,110,115,0),String.fromCharCode(111,98,115,101,114,118,105,110,103,0)], [String.fromCharCode(115,117,98,116,121,112,101,0),String.fromCharCode(118,100,98,101,0)]]);
       let prediction0 = new Map([[String.fromCharCode(116,101,108,101,103,114,97,0),String.fromCharCode(100,101,115,105,114,101,100,0)], [String.fromCharCode(120,102,97,99,101,0),String.fromCharCode(104,97,115,104,100,101,115,116,114,111,121,0)], [String.fromCharCode(110,105,107,111,110,0),String.fromCharCode(114,101,115,101,110,100,0)]]);
         typingc = new Map([[`${gemfile2.size}`, 1 ^ gemfile2.size]]);
      networks -= searchv.length;
   for (let w = 0; w < 2; w++) {
       let hookj = new Map([[String.fromCharCode(116,111,109,105,99,0),19], [String.fromCharCode(104,117,109,97,110,0),281]]);
       let promotionC = String.fromCharCode(116,100,108,116,0);
          let entryi = false;
          let bootsplashV = 5.0;
          let cross5 = true;
         hookj = new Map([[`${entryi}`, ((cross5 ? 2 : 2) * 3)]]);
         bootsplashV -= parseInt(`${bootsplashV}`);
       let logoL = String.fromCharCode(101,110,103,108,105,115,104,0);
       let becomeW = 2.0;
      while (hookj.size <= parseInt(`${becomeW}`)) {
         hookj[`${becomeW}`] = parseInt(`${becomeW}`) << (Math.min(logoL.length, 2));
         break;
      }
      for (let p = 0; p < 3; p++) {
         promotionC = `${promotionC.length}`;
      }
      if ((promotionC.length - parseInt(`${becomeW}`)) < 3 || (3 - parseInt(`${becomeW}`)) < 3) {
         promotionC += `${logoL.length & promotionC.length}`;
      }
      pausee -= parseInt(`${delegate_eU}`) & 1;
   }
    dispatch(togglePlayPaused());
   if (4 > (searchv.length / 3)) {
      middlewarex *= 1 % (Math.max(10, playercommon2));
   }
   if ((middlewarex / (Math.max(1.36, 3))) >= 4.68 && middlewarex >= 1.36) {
      middlewarex += parseInt(`${pausee}`);
   }
       let long_pY = String.fromCharCode(115,121,109,98,111,108,105,122,101,0);
          let cast6 = 1;
          let vietnaml = String.fromCharCode(113,99,101,108,112,0);
          let yingC = 1;
         long_pY = `${cast6}`;
         cast6 ^= yingC - vietnaml.length;
         vietnaml += `${1 << (Math.min(3, vietnaml.length))}`;
         yingC |= (vietnaml == String.fromCharCode(103,0) ? yingC : vietnaml.length);
         long_pY += `${long_pY.length << (Math.min(Math.abs(1), 4))}`;
         long_pY += `${1 | long_pY.length}`;
      modelsz += `${(suggestiono.length ^ (screenr ? 3 : 2))}`;

  };
   do {
       let resenda = String.fromCharCode(115,97,109,112,108,101,114,97,116,101,115,0);
       let ballI = String.fromCharCode(109,97,103,105,99,121,117,118,0);
       let modulep = String.fromCharCode(105,110,116,120,120,0);
       let overlay8 = true;
       let delegate_fys = String.fromCharCode(99,108,111,99,107,0);
          let contextu = 4.0;
          let prediction7 = String.fromCharCode(114,102,102,116,105,0);
          let malaysiac = 0;
         resenda += `${(malaysiac | (overlay8 ? 2 : 5))}`;
         contextu -= 1;
         prediction7 = `${3 >> (Math.min(5, prediction7.length))}`;
         malaysiac /= Math.max(prediction7.length, 4);
      if (ballI != String.fromCharCode(78,0)) {
         resenda += `${2 >> (Math.min(4, delegate_fys.length))}`;
      }
      for (let m = 0; m < 1; m++) {
         overlay8 = (modulep.length * delegate_fys.length) > 96;
      }
         ballI = `${resenda.length}`;
         modulep += `${((overlay8 ? 2 : 3))}`;
      for (let m = 0; m < 1; m++) {
         modulep += `${1 | delegate_fys.length}`;
      }
       let ajaxX = String.fromCharCode(116,117,110,105,110,103,0);
       let applicationx = String.fromCharCode(97,116,114,0);
         ballI += `${(delegate_fys == String.fromCharCode(103,0) ? delegate_fys.length : ballI.length)}`;
         overlay8 = !overlay8;
      if (resenda.length < 1 && !overlay8) {
         overlay8 = ballI == delegate_fys;
      }
       let diceA = 3;
      while (!delegate_fys.startsWith(`${overlay8}`)) {
          let singaporeA = String.fromCharCode(114,101,115,101,116,0);
          let resendQ = true;
          let targetj = String.fromCharCode(105,110,118,102,0);
          let plashw = String.fromCharCode(114,102,102,116,102,0);
          let expandj = [373, 997, 189];
         overlay8 = 63 > plashw.length;
         singaporeA = `${expandj.length}`;
         resendQ = singaporeA.endsWith(`${resendQ}`);
         targetj += `${expandj.length + 1}`;
         plashw += `${((resendQ ? 1 : 1) >> (Math.min(Math.abs(3), 4)))}`;
         break;
      }
      for (let l = 0; l < 2; l++) {
         delegate_fys = "2";
      }
       let bannerN = true;
       let morer = true;
         diceA <<= Math.min(modulep.length, 4);
      form4 += `${form4.length}`;
      if (form4.length == 1222137) {
         break;
      }
   } while ((form4.length == 1222137) && (1 >= (parseInt(`${middlewarex}`) - form4.length)));
       let helperX = String.fromCharCode(97,108,105,97,115,0);
       let chinaX = new Map([[String.fromCharCode(109,111,118,101,115,0),621], [String.fromCharCode(105,109,112,108,101,109,101,110,116,97,116,105,111,110,115,0),280]]);
       let popupw = 4.0;
      while (1 >= (5 >> (Math.min(5, Math.abs(chinaX.size))))) {
         chinaX = new Map([[`${chinaX.size}`, chinaX.size]]);
         break;
      }
         chinaX[`${popupw}`] = 3;
         chinaX = new Map([[`${popupw}`, (String.fromCharCode(82,0) == helperX ? helperX.length : parseInt(`${popupw}`))]]);
      if (Array.from(chinaX.keys()).includes(`${popupw}`)) {
         chinaX[`${popupw}`] = (helperX == String.fromCharCode(112,0) ? helperX.length : parseInt(`${popupw}`));
      }
      while (5 == (4 << (Math.min(1, Math.abs(chinaX.size)))) && (popupw + chinaX.size) == 4.86) {
         chinaX = new Map([[`${chinaX.size}`, 3 << (Math.min(2, Math.abs(chinaX.size)))]]);
         break;
      }
         popupw *= chinaX.size;
         popupw += 3 | parseInt(`${popupw}`);
          let combineq = true;
          let castq = 3.0;
         popupw /= Math.max(parseInt(`${popupw}`) % (Math.max(chinaX.size, 6)), 5);
         combineq = 57.93 < castq;
         castq += parseFloat(`${parseInt(`${castq}`) >> (Math.min(3, Math.abs(2)))}`);
         helperX = `${parseInt(`${popupw}`) % (Math.max(9, chinaX.size))}`;
      suggestiono.push(form4.length);
   if (3 < form4.length) {
      screenr = networks > 89;
   }

  return (
    <RenderControl onPress={onPress} style={style.commonIconContainer}>
      <Image
        source={isPaused === true ? PlayImg : PauseImg}
        style={style.commonIcon}
        resizeMode={'contain'}
      />
    </RenderControl>
  );
      delegate_eU -= parseInt(`${pausee}`);
      form4 = `${searchv.length}`;
       let matchy = [648, 654, 282];
       let strF = String.fromCharCode(116,97,112,101,115,0);
       let zhengpianF = true;
         strF = `${matchy.length / 2}`;
       let huaweiZ = [762, 145];
       let reducerk = new Map([[String.fromCharCode(100,101,108,105,118,101,114,121,0),429], [String.fromCharCode(112,97,103,105,110,103,0),974]]);
         matchy.push(2 - reducerk.size);
         huaweiZ = [2];
      while (3 == (4 >> (Math.min(2, matchy.length)))) {
          let reducero = true;
          let hejiH = new Map([[String.fromCharCode(119,105,110,100,111,119,0),false ], [String.fromCharCode(100,101,102,101,97,116,0),true ]]);
          let rank1 = [662, 621];
          let blackC = true;
         matchy = [huaweiZ.length];
         reducero = (blackC ? !reducero : !blackC);
         hejiH = new Map([[`${hejiH.size}`, rank1.length + hejiH.size]]);
         rank1.push(hejiH.size);
         break;
      }
      while (3 >= matchy.length) {
         matchy = [huaweiZ.length ^ strF.length];
         break;
      }
          let sliderF = 1.0;
          let utilsh = 1;
          let transferu = 3.0;
         huaweiZ.push(1 | strF.length);
         sliderF -= parseFloat(`${parseInt(`${sliderF}`) / (Math.max(10, utilsh))}`);
         utilsh += utilsh;
         transferu *= utilsh;
      while ((matchy.length | 1) > 3 && 2 > (1 | strF.length)) {
         matchy.push(strF.length ^ huaweiZ.length);
         break;
      }
      middlewarex += klevinh.length / 2;

};
export const Refresh = () => {
       let sentry2 = String.fromCharCode(109,111,116,105,111,110,0);
    let settingB = 3.0;
    let rulese = new Map([[String.fromCharCode(99,111,112,121,116,101,115,116,0),314], [String.fromCharCode(109,117,108,116,0),32], [String.fromCharCode(111,118,97,108,0),849]]);
    let anner8 = 2;
    let activeF = [126, 971];
    let flipperL = String.fromCharCode(101,113,117,97,108,115,0);
    let auto_pnx = String.fromCharCode(114,101,99,111,109,112,117,116,101,0);
    let profileP = 3.0;
    let mappingM = [231, 825, 25];
    let minimize8 = String.fromCharCode(115,119,105,112,101,100,0);
    let activeM = String.fromCharCode(117,116,109,111,115,116,0);
    let rounda = false;
    let catagoryz = String.fromCharCode(108,111,99,107,99,104,97,105,110,0);
    let usernamer = 2.0;
    let themeQ = String.fromCharCode(100,111,103,115,0);
   for (let n = 0; n < 2; n++) {
      profileP -= parseFloat(`${2}`);
   }
      auto_pnx += `${flipperL.length}`;
      minimize8 += `${sentry2.length - 1}`;

  const dispatch = useDispatch();
   if (sentry2.length <= 3) {
       let tempx = 5;
          let targetB = String.fromCharCode(114,101,112,97,105,110,116,0);
         tempx |= 3;
         targetB = `${targetB.length % (Math.max(6, targetB.length))}`;
      do {
          let foregroundJ = String.fromCharCode(98,108,97,110,107,0);
          let blacklistN = new Map([[String.fromCharCode(100,110,120,104,100,101,110,99,0),String.fromCharCode(117,110,108,105,109,105,116,101,100,0)], [String.fromCharCode(97,102,102,101,99,116,101,100,0),String.fromCharCode(99,98,117,102,0)]]);
          let inviteN = String.fromCharCode(117,110,114,101,115,111,108,118,101,100,0);
          let updatesL = 5;
         tempx <<= Math.min(5, Math.abs(updatesL / 2));
         foregroundJ = "2";
         blacklistN[inviteN] = inviteN.length % 2;
         updatesL |= inviteN.length;
         if (206350 == tempx) {
            break;
         }
      } while ((tempx == 3) && (206350 == tempx));
         tempx >>= Math.min(1, Math.abs(3));
      activeF.push(((rounda ? 3 : 3) * parseInt(`${profileP}`)));
   }
   while ((3.47 - settingB) < 5.60) {
      activeM = `${minimize8.length}`;
      break;
   }
      auto_pnx = "1";

  const onPress = () => {

   for (let b = 0; b < 1; b++) {
       let tumbnailB = String.fromCharCode(101,114,114,109,115,103,0);
       let stringsK = 5.0;
          let hejit = String.fromCharCode(109,98,115,101,103,109,101,110,116,0);
          let storeq = 0.0;
         tumbnailB = `${hejit.length}`;
         hejit = `${parseInt(`${storeq}`) >> (Math.min(4, Math.abs(parseInt(`${storeq}`))))}`;
      while (1.26 == (stringsK - 1.78)) {
          let mathk = 1;
         tumbnailB = "3";
         mathk %= Math.max(mathk | mathk, 3);
         break;
      }
         stringsK += parseInt(`${stringsK}`) & tumbnailB.length;
         tumbnailB = `${parseInt(`${stringsK}`) * 1}`;
          let sans2 = String.fromCharCode(106,112,101,103,116,97,98,108,101,115,0);
          let arrowg = 4.0;
          let chinaQ = 4.0;
         tumbnailB += `${(String.fromCharCode(51,0) == sans2 ? sans2.length : parseInt(`${chinaQ}`))}`;
         arrowg -= 2 | parseInt(`${arrowg}`);
         tumbnailB = "2";
      settingB /= Math.max(3, parseFloat(`${activeM.length}`));
   }
      rounda = activeM == String.fromCharCode(68,0) && profileP > 25.50;
      minimize8 = `${rulese.size}`;
    dispatch(setVideoPlayerAction('refresh'));
      activeM = `${((rounda ? 1 : 5) >> (Math.min(Math.abs(parseInt(`${settingB}`)), 4)))}`;
      settingB -= (parseFloat(`${String.fromCharCode(110,0) == flipperL ? parseInt(`${profileP}`) : flipperL.length}`));
   if (4 > activeM.length) {
       let google6 = 4.0;
       let combineda = String.fromCharCode(106,107,101,110,99,0);
       let manifest_ = new Map([[String.fromCharCode(122,111,110,101,105,110,102,111,0),238], [String.fromCharCode(108,105,98,97,118,102,111,114,109,97,116,0),143], [String.fromCharCode(101,97,103,97,105,110,0),550]]);
       let optionsg = [101, 763];
          let sinaW = String.fromCharCode(109,98,101,100,116,108,115,0);
          let k_lockc = 1.0;
         combineda += `${parseInt(`${k_lockc}`)}`;
         sinaW += `${sinaW.length * 1}`;
         k_lockc += parseFloat(`${sinaW.length / 2}`);
         manifest_[`${combineda}`] = 1;
      for (let n = 0; n < 1; n++) {
         combineda = "2";
      }
         optionsg.push(2 >> (Math.min(5, Math.abs(parseInt(`${google6}`)))));
      if ((parseInt(`${google6}`) - optionsg.length) < 4 || (4.59 - google6) < 5.62) {
         optionsg = [combineda.length % 3];
      }
      for (let k = 0; k < 3; k++) {
         combineda = `${manifest_.size / (Math.max(optionsg.length, 4))}`;
      }
      while (2.11 == (5.17 * google6)) {
         combineda = "2";
         break;
      }
      for (let o = 0; o < 3; o++) {
         manifest_ = new Map([[`${google6}`, 1]]);
      }
      while (optionsg.length <= combineda.length) {
         optionsg.push(2 + manifest_.size);
         break;
      }
          let fileT = 5.0;
         manifest_[`${fileT}`] = manifest_.size;
      if (combineda.length <= parseInt(`${google6}`)) {
         google6 -= 1;
      }
      if (4 <= manifest_.size) {
          let b_titlep = 3;
          let championd = new Map([[String.fromCharCode(99,104,105,109,112,0),303], [String.fromCharCode(101,120,114,100,115,112,0),852], [String.fromCharCode(112,100,115,0),612]]);
         optionsg.push(combineda.length * championd.size);
         b_titlep *= b_titlep / 1;
         championd = new Map([[`${b_titlep}`, b_titlep]]);
      }
      activeM = `${auto_pnx.length >> (Math.min(1, Math.abs(anner8)))}`;
   }

  };
      sentry2 = "1";
   do {
      rounda = anner8 > parseInt(`${settingB}`);
      if (rounda ? !rounda : rounda) {
         break;
      }
   } while ((rounda ? !rounda : rounda) && ((settingB - 3.46) > 4.86 && rounda));
   if (2 < anner8) {
      sentry2 = "1";
   }

  return (
    <RenderControl onPress={onPress} style={style.commonIconContainer}>
      <Image
        source={RefreshBorderless}
        style={style.commonIcon}
        resizeMode={'contain'}
      />
    </RenderControl>
  );
   do {
       let club8 = 1;
       let utilsJ = 4.0;
       let privilege6 = 3.0;
         club8 *= 2 ^ club8;
      if ((4 ^ club8) < 1 || 3.96 < (club8 / (Math.max(privilege6, 5)))) {
          let modityM = [359, 662, 837];
          let settingsH = 1.0;
          let eighteenm = String.fromCharCode(103,114,101,97,116,101,115,116,0);
          let buildF = String.fromCharCode(99,111,109,112,111,115,101,100,0);
         privilege6 -= buildF.length;
         modityM = [eighteenm.length];
         settingsH *= parseFloat(`${eighteenm.length + 3}`);
         buildF = `${parseInt(`${settingsH}`) | 3}`;
      }
          let holderG = String.fromCharCode(114,101,117,115,101,0);
          let disconnectedO = String.fromCharCode(105,116,117,110,101,115,0);
         utilsJ /= Math.max(3, parseFloat(`${disconnectedO.length}`));
         holderG += `${(String.fromCharCode(120,0) == holderG ? holderG.length : holderG.length)}`;
         disconnectedO += `${holderG.length % (Math.max(3, holderG.length))}`;
      if ((club8 << (Math.min(Math.abs(1), 4))) <= 2) {
         club8 &= 3;
      }
         utilsJ /= Math.max(parseFloat(`${1 * club8}`), 3);
      if ((5.18 + privilege6) > 2.52 || (5.18 + utilsJ) > 5.8) {
         utilsJ -= parseFloat(`${parseInt(`${utilsJ}`) + parseInt(`${privilege6}`)}`);
      }
         club8 <<= Math.min(Math.abs(3), 2);
      if (2.94 == (utilsJ * 2.4) || 2.62 == (utilsJ * 2.4)) {
         club8 &= parseInt(`${privilege6}`) | 2;
      }
      for (let c = 0; c < 2; c++) {
         utilsJ /= Math.max(parseFloat(`${parseInt(`${utilsJ}`)}`), 2);
      }
      settingB *= parseFloat(`${1 + auto_pnx.length}`);
      if (2540830.0 == settingB) {
         break;
      }
   } while (((parseInt(`${settingB}`) * rulese.size) <= 5) && (2540830.0 == settingB));
      auto_pnx += "2";
       let langkeye = true;
       let gradles = String.fromCharCode(102,101,116,99,104,0);
          let mimoN = 3.0;
         langkeye = langkeye && mimoN < 51.62;
      for (let l = 0; l < 1; l++) {
          let predictionT = String.fromCharCode(115,116,114,110,100,117,112,0);
          let loadingL = String.fromCharCode(114,103,98,110,0);
          let streamingm = String.fromCharCode(112,109,107,0);
          let skip3 = String.fromCharCode(102,105,110,100,101,112,0);
          let circleg = [282, 139];
         langkeye = streamingm.length < circleg.length;
         predictionT += `${loadingL.length}`;
         loadingL += `${2 * predictionT.length}`;
         streamingm += `${(loadingL == String.fromCharCode(53,0) ? loadingL.length : skip3.length)}`;
         skip3 = `${predictionT.length % (Math.max(9, skip3.length))}`;
         circleg = [skip3.length];
      }
          let members = [672, 336];
         gradles = `${members.length}`;
         langkeye = gradles.startsWith(`${langkeye}`);
      if (!langkeye) {
         gradles += "1";
      }
         gradles = "1";
      sentry2 = `${activeM.length}`;

};

export const Pip = () => {
       let internetJ = false;
    let umeng8 = 5.0;
    let middleware8 = false;
    let accepted8 = String.fromCharCode(99,97,109,112,97,105,103,110,0);
    let placement_ = 4.0;
    let mbjscommon5 = String.fromCharCode(107,101,121,102,114,97,109,101,0);
    let rankg = 1.0;
    let drag5 = 1;
    let weibo0 = 1.0;
    let bottomW = false;
    let forwardp = new Map([[String.fromCharCode(101,118,97,108,117,97,116,105,111,110,0),870], [String.fromCharCode(108,97,112,112,101,100,0),804], [String.fromCharCode(101,120,104,97,117,115,116,105,118,101,0),39]]);
      rankg += parseFloat(`${mbjscommon5.length}`);
   if (3 > drag5) {
       let shirtT = 0.0;
       let overa = 2;
       let flyerl = new Map([[String.fromCharCode(111,117,116,101,114,0),164], [String.fromCharCode(116,105,108,101,109,107,97,0),521], [String.fromCharCode(100,101,102,105,110,105,116,105,111,110,0),128]]);
       let gemfileZ = 3.0;
      for (let z = 0; z < 3; z++) {
         overa >>= Math.min(3, Math.abs(flyerl.size));
      }
      for (let g = 0; g < 3; g++) {
         gemfileZ += 2 + flyerl.size;
      }
      while (shirtT > gemfileZ) {
          let updatesr = [574, 117, 242];
          let inviteO = String.fromCharCode(114,101,112,114,111,99,101,115,115,0);
          let viewer2 = new Map([[String.fromCharCode(112,114,101,116,119,105,100,100,108,101,0),607], [String.fromCharCode(107,110,111,98,0),967], [String.fromCharCode(116,105,99,107,101,116,115,0),390]]);
         gemfileZ -= 2;
         updatesr = [2 + viewer2.size];
         inviteO = `${viewer2.size}`;
         break;
      }
      for (let z = 0; z < 3; z++) {
         flyerl = new Map([[`${gemfileZ}`, 2]]);
      }
      while ((shirtT * overa) >= 5.54) {
          let trophyK = 1.0;
          let grayx = 4.0;
         overa >>= Math.min(2, Math.abs(2));
         trophyK *= 1 % (Math.max(5, parseInt(`${trophyK}`)));
         grayx *= parseFloat(`${parseInt(`${trophyK}`)}`);
         break;
      }
         shirtT += flyerl.size ^ overa;
      for (let k = 0; k < 2; k++) {
         overa >>= Math.min(1, Math.abs(parseInt(`${shirtT}`)));
      }
       let backwardy = String.fromCharCode(102,114,101,101,100,0);
         overa -= backwardy.length;
      if (gemfileZ <= shirtT) {
         gemfileZ /= Math.max(1, 1);
      }
         gemfileZ += (backwardy == String.fromCharCode(120,0) ? backwardy.length : parseInt(`${shirtT}`));
      do {
         shirtT *= overa;
         if (shirtT == 1358786.0) {
            break;
         }
      } while ((shirtT == 1358786.0) && (backwardy.length > parseInt(`${shirtT}`)));
      mbjscommon5 += `${accepted8.length}`;
   }

  const dispatch = useDispatch();
       let sendp = String.fromCharCode(114,115,99,99,0);
          let large5 = String.fromCharCode(99,111,110,115,116,114,117,99,116,0);
          let downloadingC = 4.0;
         sendp += `${sendp.length}`;
         large5 = `${parseInt(`${downloadingC}`)}`;
         downloadingC -= parseFloat(`${3}`);
      do {
          let alertL = new Map([[String.fromCharCode(99,104,97,114,97,99,116,101,114,115,0),918], [String.fromCharCode(115,109,105,108,0),884], [String.fromCharCode(108,105,115,116,105,110,103,0),20]]);
          let filedM = new Map([[String.fromCharCode(115,104,111,114,116,99,117,116,0),927], [String.fromCharCode(98,108,111,99,107,104,97,115,104,0),464]]);
          let reactm = 3.0;
          let applicationB = [669, 947];
          let anythink2 = String.fromCharCode(107,101,121,110,97,109,101,0);
         sendp = `${sendp.length ^ alertL.size}`;
         alertL = new Map([[`${filedM.size}`, filedM.size | parseInt(`${reactm}`)]]);
         reactm /= Math.max(4, parseFloat(`${2}`));
         applicationB.push(applicationB.length / (Math.max(anythink2.length, 3)));
         anythink2 = `${(anythink2 == String.fromCharCode(79,0) ? filedM.size : anythink2.length)}`;
         if (1562472 == sendp.length) {
            break;
         }
      } while ((sendp.length >= 4 || 4 >= sendp.length) && (1562472 == sendp.length));
          let viewsG = new Map([[String.fromCharCode(109,117,116,101,0),551], [String.fromCharCode(112,111,115,116,105,111,110,0),429]]);
          let giftq = [346, 387, 72];
         sendp += `${(String.fromCharCode(66,0) == sendp ? viewsG.size : sendp.length)}`;
         viewsG[`${giftq.length}`] = giftq.length << (Math.min(Math.abs(1), 1));
      mbjscommon5 += `${((internetJ ? 1 : 5) / (Math.max(parseInt(`${weibo0}`), 3)))}`;
      placement_ *= (parseFloat(`${(middleware8 ? 1 : 4) / (Math.max(drag5, 9))}`));

  const {source, matchId, videoType} = useSelector(
    state => state.videoPlayerControl,
  );
   while (3 >= (drag5 >> (Math.min(Math.abs(5), 1))) || drag5 >= 5) {
      bottomW = weibo0 < 47.62;
      break;
   }
   do {
       let whitek = [69, 20];
       let mbridgeM = 2.0;
       let renewv = String.fromCharCode(116,114,101,101,116,111,107,0);
       let paginationc = 0.0;
      while (renewv.length > parseInt(`${mbridgeM}`)) {
         renewv += `${parseInt(`${paginationc}`) / 3}`;
         break;
      }
       let chinasame9 = String.fromCharCode(111,112,116,105,109,97,108,0);
       let macau3 = String.fromCharCode(114,101,112,111,114,116,101,100,0);
         chinasame9 += "1";
      for (let u = 0; u < 1; u++) {
          let footballN = String.fromCharCode(119,105,110,100,111,119,115,0);
          let basketballG = String.fromCharCode(99,117,116,111,117,116,0);
          let entryZ = new Map([[String.fromCharCode(102,117,110,99,0),String.fromCharCode(101,120,99,108,117,100,105,110,103,0)], [String.fromCharCode(115,105,108,101,110,99,101,100,0),String.fromCharCode(97,115,99,105,105,105,110,100,101,120,0)], [String.fromCharCode(116,105,109,101,100,0),String.fromCharCode(118,111,114,100,105,112,108,111,109,0)]]);
         paginationc += (parseFloat(`${basketballG == String.fromCharCode(90,0) ? macau3.length : basketballG.length}`));
         footballN += `${footballN.length}`;
         entryZ[footballN] = 3;
      }
          let disconnectedS = 1;
         macau3 = `${disconnectedS - whitek.length}`;
      while (chinasame9.length >= macau3.length) {
         chinasame9 += `${chinasame9.length % 2}`;
         break;
      }
         whitek.push(parseInt(`${mbridgeM}`) & renewv.length);
      while (1 >= whitek.length) {
          let streamingm = false;
          let mbsplashH = new Map([[String.fromCharCode(104,97,109,98,117,114,103,101,114,0),String.fromCharCode(109,97,105,108,99,104,105,109,112,0)], [String.fromCharCode(111,118,101,114,114,105,100,101,115,0),String.fromCharCode(115,119,97,112,112,101,114,0)]]);
          let dplusP = 1.0;
          let vignetteb = String.fromCharCode(97,118,118,115,0);
          let preview_ = true;
         mbridgeM *= (parseFloat(`${chinasame9 == String.fromCharCode(56,0) ? macau3.length : chinasame9.length}`));
         streamingm = 80 > vignetteb.length;
         mbsplashH[`${streamingm}`] = parseInt(`${dplusP}`) >> (Math.min(1, Math.abs(2)));
         dplusP -= (parseInt(`${dplusP}`) | (streamingm ? 2 : 3));
         vignetteb = `${mbsplashH.size + 3}`;
         preview_ = !preview_;
         break;
      }
         paginationc *= parseFloat(`${chinasame9.length}`);
      for (let x = 0; x < 3; x++) {
         mbridgeM /= Math.max(2, parseFloat(`${parseInt(`${paginationc}`)}`));
      }
       let moret = String.fromCharCode(114,101,102,101,114,0);
      if (renewv.startsWith(`${whitek.length}`)) {
         whitek.push(3);
      }
      accepted8 += `${parseInt(`${paginationc}`)}`;
      if (String.fromCharCode(107,103,99,103,53,99,119,109,120,116,0) == accepted8) {
         break;
      }
   } while ((String.fromCharCode(107,103,99,103,53,99,119,109,120,116,0) == accepted8) && (internetJ));

  const onPress = () => {

      internetJ = middleware8 && umeng8 == 96.25;
   if (2 < mbjscommon5.length || !internetJ) {
      internetJ = drag5 > 69;
   }
    Orientation.lockToPortrait();
   while (accepted8.length < 3) {
       let anytimeg = 0;
       let kuaishouk = 5.0;
       let splashJ = String.fromCharCode(108,101,116,115,0);
       let styles8 = new Map([[String.fromCharCode(114,101,115,101,101,107,0),926], [String.fromCharCode(112,97,121,109,97,115,116,101,114,0),367]]);
         splashJ = `${styles8.size | 1}`;
       let slidera = String.fromCharCode(112,107,103,99,111,110,102,105,103,0);
       let bootsplashp = String.fromCharCode(115,99,117,98,98,101,114,0);
         kuaishouk -= slidera.length - anytimeg;
       let wind2 = false;
       let dialogm = false;
      while (wind2) {
         slidera = `${anytimeg >> (Math.min(Math.abs(styles8.size), 3))}`;
         break;
      }
         kuaishouk += ((dialogm ? 2 : 5));
      for (let x = 0; x < 1; x++) {
         kuaishouk -= (String.fromCharCode(115,0) == bootsplashp ? bootsplashp.length : (wind2 ? 2 : 2));
      }
      for (let e = 0; e < 2; e++) {
         slidera = `${bootsplashp.length}`;
      }
       let textx = String.fromCharCode(99,111,110,100,0);
       let stats0 = String.fromCharCode(111,118,101,114,0);
      do {
         splashJ += `${stats0.length | 1}`;
         if (String.fromCharCode(101,105,98,51,112,104,0) == splashJ) {
            break;
         }
      } while ((splashJ.length >= 5) && (String.fromCharCode(101,105,98,51,112,104,0) == splashJ));
       let temp5 = String.fromCharCode(102,97,117,108,116,0);
       let whistlev = 1.0;
       let langK = 0.0;
      bottomW = (rankg - umeng8) >= 61.74;
      break;
   }
      umeng8 += parseInt(`${placement_}`) | drag5;

    store.dispatch(
      floatingPlayer.actions.setProp({
        display: true,
        url: source,
        matchId: matchId,
        videoType: videoType,
      }),
    );
       let goalA = 4.0;
       let unewsN = new Map([[String.fromCharCode(98,114,97,99,107,101,116,115,0),true ], [String.fromCharCode(115,111,100,105,115,99,111,110,110,101,99,116,0),true ]]);
       let short_gN = 3.0;
      while (parseInt(`${short_gN}`) >= unewsN.size) {
         short_gN /= Math.max(parseFloat(`${parseInt(`${short_gN}`) << (Math.min(Math.abs(1), 3))}`), 3);
         break;
      }
          let predictionH = String.fromCharCode(110,119,105,115,101,0);
          let statsu = 5;
         goalA /= Math.max(parseFloat(`${1}`), 5);
         predictionH += "3";
         statsu -= (predictionH == String.fromCharCode(119,0) ? predictionH.length : statsu);
      for (let o = 0; o < 1; o++) {
         goalA /= Math.max(5, parseFloat(`${1 ^ parseInt(`${goalA}`)}`));
      }
         goalA /= Math.max(5, parseFloat(`${parseInt(`${short_gN}`)}`));
      while (Array.from(unewsN.keys()).includes(`${short_gN}`)) {
          let materialD = String.fromCharCode(109,111,110,111,116,111,110,105,116,121,0);
          let sortF = String.fromCharCode(99,111,108,111,117,114,0);
          let combinex = new Map([[String.fromCharCode(116,97,107,101,110,0),465], [String.fromCharCode(100,118,97,117,100,105,111,0),116], [String.fromCharCode(115,101,101,107,0),129]]);
          let searchbarh = true;
         unewsN = new Map([[`${unewsN.size}`, unewsN.size]]);
         materialD += `${sortF.length}`;
         sortF = `${combinex.size}`;
         combinex[materialD] = sortF.length * materialD.length;
         searchbarh = combinex.size <= 83 && sortF.length <= 83;
         break;
      }
      drag5 += ((internetJ ? 1 : 1) & parseInt(`${umeng8}`));
   for (let z = 0; z < 2; z++) {
      weibo0 *= 1 & parseInt(`${weibo0}`);
   }

    dispatch(
      setVideoControlProp({
        isFullScreen: false,
        source: '',
        videoType: VideoLiveType.DETAIL,
      }),
    );
      middleware8 = !internetJ;
   for (let r = 0; r < 1; r++) {
       let filef = 2.0;
       let x_imagea = 0.0;
       let crossH = false;
       let tempx = false;
      for (let x = 0; x < 1; x++) {
         filef -= 3 & parseInt(`${filef}`);
      }
          let hooko = false;
          let dplusJ = String.fromCharCode(109,101,97,115,117,114,101,114,0);
         x_imagea /= Math.max(parseFloat(`${2}`), 5);
         hooko = (((hooko ? dplusJ.length : 97) - dplusJ.length) == 97);
          let details8 = 1.0;
          let viewsB = 3.0;
          let navigationy = 2.0;
         tempx = !crossH;
         details8 += parseFloat(`${parseInt(`${navigationy}`) % 1}`);
         viewsB *= parseFloat(`${parseInt(`${navigationy}`) + 1}`);
      do {
         x_imagea *= parseFloat(`${parseInt(`${filef}`) << (Math.min(5, Math.abs(3)))}`);
         if (x_imagea == 3941017.0) {
            break;
         }
      } while (((4.67 - x_imagea) >= 1.93 && 4.67 >= x_imagea) && (x_imagea == 3941017.0));
      while (filef == x_imagea) {
         x_imagea *= (parseFloat(`${(crossH ? 1 : 5) << (Math.min(Math.abs((tempx ? 1 : 2)), 1))}`));
         break;
      }
      internetJ = rankg <= 19.70;
   }

  };
   if ((rankg / 1.46) == 3.81) {
      rankg += (parseFloat(`${parseInt(`${weibo0}`) ^ (bottomW ? 4 : 1)}`));
   }
   do {
      placement_ /= Math.max(5, (parseFloat(`${(internetJ ? 2 : 1) & parseInt(`${placement_}`)}`)));
      if (1227946.0 == placement_) {
         break;
      }
   } while ((1227946.0 == placement_) && ((placement_ - umeng8) == 2.25 || (placement_ - umeng8) == 2.25));


  return (
    <RenderControl onPress={onPress} style={style.commonIconContainer}>
      <Image
        source={IconPipShrink}
        style={style.commonIcon}
        resizeMode={'contain'}
      />
    </RenderControl>
  );
   while (1.51 <= (umeng8 - 1.30) && 4.70 <= (1.30 - umeng8)) {
      accepted8 += `${2 * parseInt(`${rankg}`)}`;
      break;
   }
   for (let x = 0; x < 1; x++) {
      middleware8 = mbjscommon5.includes(`${internetJ}`);
   }

};
export const Error = ({display, onClick}) => {
  if (!display) {
    return null;
  }
  return (
    <SafeAreaView
      pointerEvents="box-none"
      style={[
        VideoPlayerstyles.error.container,
        {flex: 1, justifyContent: 'center'},
      ]}>
      <View style={style.errorBackContainer}>
        <Back />
      </View>
      <View
        style={{
          flex: 0,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
        }}>
        <Image source={DisconnectedLogo} style={style.errorIcon} />
        <Text style={style.errorButtonText}>加载失败， 请重试！</Text>
        <TouchableOpacity style={style.errorButton} onPress={onClick}>
          <Text style={style.errorButtonText}>重试</Text>
        </TouchableOpacity>
        {/* <Text style={VideoPlayerstyles.error.text}>再次点击重新加载</Text> */}
      </View>
    </SafeAreaView>
  );
};

export const Locker = ({display}) => {
  const dispatch = useDispatch();
  const onPress = () => {
       let main_e6 = 5.0;
    let yellowz = String.fromCharCode(111,115,116,114,105,110,103,115,116,114,101,97,109,0);
    let commentD = String.fromCharCode(114,116,109,112,0);
    let macauq = new Map([[String.fromCharCode(116,101,114,109,0),386], [String.fromCharCode(115,117,98,115,116,114,101,97,109,0),558], [String.fromCharCode(97,116,111,105,0),676]]);
    let basketballn = 0.0;
    let pauseX = new Map([[String.fromCharCode(109,111,116,99,111,109,112,0),true ], [String.fromCharCode(115,115,101,114,116,0),false ]]);
    let remindera = String.fromCharCode(115,99,101,110,101,99,117,116,0);
    let chinasame4 = String.fromCharCode(108,105,98,112,104,111,110,101,110,117,109,98,101,114,0);
    let toponq = new Map([[String.fromCharCode(115,98,115,112,108,105,116,0),848], [String.fromCharCode(112,97,114,116,105,116,105,111,110,0),248]]);
    let dnewinterstitialn = new Map([[String.fromCharCode(99,111,108,117,109,110,0),853], [String.fromCharCode(106,95,50,49,0),858], [String.fromCharCode(104,97,98,108,101,0),806]]);
   while ((yellowz.length % (Math.max(5, 5))) <= 3) {
      basketballn += pauseX.size;
      break;
   }
   for (let k = 0; k < 1; k++) {
      remindera += `${1 ^ parseInt(`${main_e6}`)}`;
   }
       let ewardedw = 3;
         ewardedw *= 2;
          let tickedE = 4.0;
          let androidE = 1;
          let signinupf = String.fromCharCode(115,117,98,102,105,108,101,0);
         ewardedw -= androidE;
         tickedE -= (signinupf == String.fromCharCode(100,0) ? parseInt(`${tickedE}`) : signinupf.length);
         androidE ^= 3 | parseInt(`${tickedE}`);
       let loginZ = String.fromCharCode(112,101,101,114,115,0);
      pauseX = new Map([[`${pauseX.size}`, pauseX.size]]);
   for (let y = 0; y < 2; y++) {
      commentD += `${remindera.length}`;
   }
   do {
      yellowz += `${pauseX.size}`;
      if (yellowz == String.fromCharCode(55,105,103,114,100,50,97,0)) {
         break;
      }
   } while ((commentD != yellowz) && (yellowz == String.fromCharCode(55,105,103,114,100,50,97,0)));
      remindera += `${3 / (Math.max(1, commentD.length))}`;
      main_e6 /= Math.max(3, 1);

    dispatch(toggleLockScreen());
   if ((pauseX.size * main_e6) >= 3.26 || (parseInt(`${main_e6}`) * pauseX.size) >= 1) {
       let notificationC = new Map([[String.fromCharCode(101,118,112,111,114,116,111,112,0),String.fromCharCode(103,101,110,101,114,97,116,101,100,0)], [String.fromCharCode(113,117,97,110,116,115,0),String.fromCharCode(107,105,110,100,115,0)]]);
       let ajax6 = String.fromCharCode(115,99,97,110,0);
       let register_gqs = String.fromCharCode(117,110,105,115,119,97,112,0);
       let mnewinterstitialP = [766, 575, 430];
       let serviceI = false;
         ajax6 = `${3 % (Math.max(5, register_gqs.length))}`;
      for (let e = 0; e < 2; e++) {
         ajax6 = `${((serviceI ? 1 : 1) + 2)}`;
      }
      for (let l = 0; l < 3; l++) {
          let areaY = String.fromCharCode(99,108,111,115,101,99,98,0);
          let usernameQ = true;
          let soundu = new Map([[String.fromCharCode(105,110,105,116,105,97,116,101,0),241], [String.fromCharCode(97,115,111,108,117,116,101,0),398]]);
          let untickJ = new Map([[String.fromCharCode(101,109,117,101,100,103,101,0),385], [String.fromCharCode(102,117,122,122,105,110,103,0),339]]);
          let privacyG = false;
         register_gqs = `${(String.fromCharCode(105,0) == areaY ? areaY.length : mnewinterstitialP.length)}`;
         usernameQ = 49 == untickJ.size;
         soundu[`${privacyG}`] = untickJ.size;
      }
         mnewinterstitialP = [mnewinterstitialP.length / (Math.max(register_gqs.length, 9))];
      while (mnewinterstitialP.length > register_gqs.length) {
         register_gqs += `${(register_gqs.length * (serviceI ? 4 : 3))}`;
         break;
      }
      while ((4 - notificationC.size) < 2) {
         notificationC[ajax6] = ajax6.length + 2;
         break;
      }
      while (ajax6 == register_gqs) {
          let blackK = String.fromCharCode(117,110,100,101,108,101,103,97,116,101,0);
          let predictionO = 0;
          let tempT = [String.fromCharCode(104,101,108,112,101,114,0), String.fromCharCode(104,101,118,99,0), String.fromCharCode(118,111,98,115,117,98,0)];
          let android1 = 5;
          let modelsL = 3.0;
         register_gqs += `${notificationC.size % (Math.max(mnewinterstitialP.length, 2))}`;
         blackK = `${blackK.length}`;
         predictionO /= Math.max(3, android1);
         tempT = [parseInt(`${modelsL}`) << (Math.min(tempT.length, 2))];
         android1 &= 1 * parseInt(`${modelsL}`);
         break;
      }
      do {
         notificationC = new Map([[`${serviceI}`, ((serviceI ? 2 : 4) | 1)]]);
         if (notificationC.size == 2861287) {
            break;
         }
      } while ((notificationC.size == 2861287) && (3 >= notificationC.size));
      do {
          let applicationT = [818, 590];
          let small0 = new Map([[String.fromCharCode(100,110,115,108,97,98,101,108,0),String.fromCharCode(103,100,111,99,0)], [String.fromCharCode(109,105,120,101,100,0),String.fromCharCode(100,114,97,103,103,105,110,103,0)]]);
          let xvodo = String.fromCharCode(114,111,111,116,0);
          let feedbackx = true;
         ajax6 = `${2 * mnewinterstitialP.length}`;
         applicationT.push(((feedbackx ? 4 : 3) / 3));
         small0 = new Map([[xvodo, ((feedbackx ? 5 : 1) % (Math.max(1, 7)))]]);
         xvodo = `${small0.size * 1}`;
         if (String.fromCharCode(52,115,108,0) == ajax6) {
            break;
         }
      } while ((!ajax6.endsWith(`${serviceI}`)) && (String.fromCharCode(52,115,108,0) == ajax6));
          let upload3 = 4.0;
          let brightnessx = 0;
         mnewinterstitialP = [brightnessx | 1];
         upload3 /= Math.max(1 / (Math.max(parseInt(`${upload3}`), 10)), 5);
         brightnessx -= 2 + parseInt(`${upload3}`);
          let with_5g2 = 5;
          let descL = String.fromCharCode(105,110,100,97,116,97,0);
         notificationC = new Map([[`${mnewinterstitialP.length}`, 3]]);
         with_5g2 |= (descL == String.fromCharCode(112,0) ? descL.length : with_5g2);
      do {
         mnewinterstitialP.push(((serviceI ? 1 : 3) ^ mnewinterstitialP.length));
         if (mnewinterstitialP.length == 298690) {
            break;
         }
      } while ((mnewinterstitialP.length == 298690) && (!ajax6.includes(`${mnewinterstitialP.length}`)));
      if (1 >= (notificationC.size ^ 4)) {
         register_gqs = `${(ajax6 == String.fromCharCode(87,0) ? notificationC.size : ajax6.length)}`;
      }
          let blacklist2 = [95, 921];
         ajax6 = `${((serviceI ? 2 : 5) - register_gqs.length)}`;
         blacklist2.push(blacklist2.length ^ 3);
         serviceI = (78 >= (ajax6.length | (serviceI ? 78 : ajax6.length)));
      pauseX[`${serviceI}`] = 1 - notificationC.size;
   }
      macauq = new Map([[`${pauseX.size}`, macauq.size]]);
      basketballn -= commentD.length;
   while (3 > (1 + pauseX.size) || 5 > (1 + pauseX.size)) {
      pauseX = new Map([[`${macauq.size}`, macauq.size >> (Math.min(remindera.length, 4))]]);
      break;
   }
       let filterz = String.fromCharCode(99,97,110,99,101,108,108,97,98,108,101,0);
       let anythinkx = String.fromCharCode(121,117,118,112,97,99,107,101,100,0);
       let gmail8 = false;
         filterz = `${(anythinkx == String.fromCharCode(118,0) ? anythinkx.length : (gmail8 ? 1 : 5))}`;
      do {
          let launcherM = String.fromCharCode(102,114,97,109,101,115,105,122,101,115,0);
          let register_3aK = String.fromCharCode(114,101,99,101,105,118,101,0);
         filterz = `${anythinkx.length * register_3aK.length}`;
         launcherM += `${(launcherM == String.fromCharCode(85,0) ? launcherM.length : launcherM.length)}`;
         register_3aK = `${launcherM.length}`;
         if (2300927 == filterz.length) {
            break;
         }
      } while ((anythinkx == filterz) && (2300927 == filterz.length));
         anythinkx += `${anythinkx.length}`;
      do {
         filterz += `${((gmail8 ? 5 : 3))}`;
         if (3635986 == filterz.length) {
            break;
         }
      } while ((3635986 == filterz.length) && (anythinkx.length > 5));
      do {
          let largew = String.fromCharCode(116,104,101,109,101,100,0);
         anythinkx += `${filterz.length}`;
         largew = "3";
         if (String.fromCharCode(121,51,55,111,117,0) == anythinkx) {
            break;
         }
      } while ((filterz == String.fromCharCode(89,0) && anythinkx != String.fromCharCode(57,0)) && (String.fromCharCode(121,51,55,111,117,0) == anythinkx));
          let promotionB = 1.0;
          let debugd = String.fromCharCode(116,115,101,113,0);
          let buildj = new Map([[String.fromCharCode(118,105,111,108,101,110,99,101,0),false ], [String.fromCharCode(99,111,108,108,105,100,105,110,103,0),true ]]);
         anythinkx = `${(debugd == String.fromCharCode(77,0) ? debugd.length : parseInt(`${promotionB}`))}`;
         promotionB += buildj.size % (Math.max(3, 1));
         anythinkx += `${((gmail8 ? 5 : 3) + anythinkx.length)}`;
      if (1 > filterz.length) {
         filterz += "1";
      }
       let google8 = true;
      pauseX = new Map([[`${macauq.size}`, macauq.size]]);
   do {
       let faviconD = 1.0;
       let downloadingk = String.fromCharCode(112,114,111,98,97,98,108,101,0);
       let settingi = false;
      for (let y = 0; y < 1; y++) {
         faviconD *= downloadingk.length;
      }
      for (let h = 0; h < 2; h++) {
          let z_views = false;
          let macaug = String.fromCharCode(115,117,99,99,101,115,115,0);
          let bridgex = String.fromCharCode(101,118,97,108,117,97,116,111,114,0);
          let delegate_0W = String.fromCharCode(108,117,116,121,117,118,0);
         downloadingk = `${((z_views ? 5 : 1))}`;
         z_views = macaug == delegate_0W;
         macaug += `${delegate_0W.length | bridgex.length}`;
         bridgex = `${3 & bridgex.length}`;
      }
         settingi = !downloadingk.endsWith(`${settingi}`);
      while (!settingi) {
          let actionO = 3.0;
          let albumr = 2;
          let philippiness = String.fromCharCode(117,112,100,97,116,101,100,0);
          let circle2 = String.fromCharCode(112,111,108,105,99,121,0);
          let successL = [127, 473];
         downloadingk += `${downloadingk.length & 2}`;
         actionO *= 1 - parseInt(`${actionO}`);
         albumr ^= (circle2 == String.fromCharCode(48,0) ? circle2.length : parseInt(`${actionO}`));
         philippiness += `${successL.length >> (Math.min(Math.abs(1), 3))}`;
         successL.push((philippiness == String.fromCharCode(116,0) ? circle2.length : philippiness.length));
         break;
      }
      if (settingi) {
          let roundY = String.fromCharCode(97,114,109,108,105,110,107,0);
         downloadingk += `${roundY.length}`;
      }
      commentD = "2";
      if (commentD == String.fromCharCode(49,109,103,112,111,54,112,51,0)) {
         break;
      }
   } while ((commentD == String.fromCharCode(49,109,103,112,111,54,112,51,0)) && (yellowz != String.fromCharCode(119,0)));
   do {
      commentD = `${commentD.length | parseInt(`${basketballn}`)}`;
      if (commentD.length == 339240) {
         break;
      }
   } while ((commentD.length == 339240) && ((commentD.length << (Math.min(2, Math.abs(pauseX.size)))) > 5 && 5 > (pauseX.size << (Math.min(commentD.length, 1)))));

    dispatch(showControlAction(ShowControlType.TopBottom));
      chinasame4 += `${macauq.size}`;
   do {
      pauseX[yellowz] = commentD.length - yellowz.length;
      if (3498360 == pauseX.size) {
         break;
      }
   } while ((3498360 == pauseX.size) && (4.72 < basketballn));
      basketballn -= remindera.length % 3;
      macauq = new Map([[`${pauseX.size}`, 3]]);
      main_e6 -= chinasame4.length;
   for (let n = 0; n < 1; n++) {
      main_e6 -= (String.fromCharCode(99,0) == yellowz ? yellowz.length : pauseX.size);
   }
      main_e6 += 1;

  };
  return display ? (
    <View style={style.lockerContainer}>
      <RenderControl onPress={onPress}>
        <Image
          source={LockImg}
          style={style.lockerIcon}
          resizeMode={'contain'}
        />
      </RenderControl>
    </View>
  ) : null;
};

export const Unlocker = () => {
       let linee = 0.0;
    let hearti = [747, 449, 974];
    let mbnativeadvancedw = 0.0;
    let usernameB = 0;
    let matchV = [606, 460];
    let blackI = String.fromCharCode(101,110,104,97,110,99,101,114,0);
    let internetM = 0.0;
    let placeholderm = false;
    let projectu = String.fromCharCode(100,101,99,108,97,114,101,0);
    let episodesC = String.fromCharCode(115,116,101,114,101,111,0);
    let modelsL = String.fromCharCode(115,97,102,101,116,121,0);
    let historyS = [268, 178, 751];
    let anythinkx = String.fromCharCode(112,114,101,102,111,114,109,97,116,116,101,100,0);
    let stepc = String.fromCharCode(105,118,115,101,116,117,112,0);
    let sharedV = 4.0;
    let humidityY = String.fromCharCode(115,110,97,109,101,0);
    let reactnativejsk = 1.0;
       let hongkongU = 5.0;
          let project5 = false;
         hongkongU -= 3 << (Math.min(Math.abs(parseInt(`${hongkongU}`)), 2));
         project5 = !project5;
      do {
         hongkongU /= Math.max(2, 2);
         if (1153526.0 == hongkongU) {
            break;
         }
      } while ((4.80 >= (hongkongU * hongkongU) || 2.13 >= (hongkongU - 4.80)) && (1153526.0 == hongkongU));
      if (hongkongU == hongkongU) {
         hongkongU -= 2 / (Math.max(parseInt(`${hongkongU}`), 9));
      }
      linee -= 1 - parseInt(`${hongkongU}`);
       let modelsR = String.fromCharCode(108,97,112,108,97,99,101,0);
       let resultW = String.fromCharCode(112,111,115,105,116,105,111,110,105,110,103,0);
         resultW = `${resultW.length}`;
          let episode5 = [302, 580];
          let switch__i = String.fromCharCode(97,99,116,105,111,110,0);
         modelsR = "3";
         episode5.push(switch__i.length & episode5.length);
         switch__i += "2";
         resultW = `${resultW.length + modelsR.length}`;
      for (let t = 0; t < 3; t++) {
         modelsR += `${resultW.length}`;
      }
         modelsR += `${resultW.length & 3}`;
          let appsJ = 2;
          let resend2 = true;
          let scoreP = 5.0;
         resultW += `${resultW.length}`;
         appsJ /= Math.max(((resend2 ? 5 : 1) - parseInt(`${scoreP}`)), 3);
         resend2 = !resend2;
         scoreP /= Math.max(2, parseFloat(`${3 | parseInt(`${scoreP}`)}`));
      modelsL += `${3 ^ historyS.length}`;
   do {
      placeholderm = historyS.length <= modelsL.length;
      if (placeholderm ? !placeholderm : placeholderm) {
         break;
      }
   } while ((placeholderm) && (placeholderm ? !placeholderm : placeholderm));

  const dispatch = useDispatch();
      matchV.push(((placeholderm ? 2 : 2)));
   while (modelsL.endsWith(`${historyS.length}`)) {
       let matchesY = new Map([[String.fromCharCode(110,101,103,97,116,105,118,101,0),true ], [String.fromCharCode(115,116,114,99,97,115,101,99,109,112,0),true ]]);
       let mbbidQ = String.fromCharCode(115,108,111,119,101,115,116,0);
       let checkboxs = String.fromCharCode(99,111,112,121,97,100,100,0);
       let shirt2 = 2.0;
       let whatsapp5 = [186, 292];
      do {
         checkboxs += "1";
         if (String.fromCharCode(107,57,98,97,0) == checkboxs) {
            break;
         }
      } while ((String.fromCharCode(107,57,98,97,0) == checkboxs) && (!checkboxs.endsWith(`${matchesY.size}`)));
      do {
         mbbidQ += `${whatsapp5.length | 3}`;
         if (1173802 == mbbidQ.length) {
            break;
         }
      } while ((1173802 == mbbidQ.length) && (checkboxs.startsWith(mbbidQ)));
         matchesY[`${whatsapp5.length}`] = 1;
         matchesY[checkboxs] = mbbidQ.length ^ checkboxs.length;
      do {
         checkboxs = `${(String.fromCharCode(87,0) == checkboxs ? parseInt(`${shirt2}`) : checkboxs.length)}`;
         if (1997060 == checkboxs.length) {
            break;
         }
      } while ((1997060 == checkboxs.length) && (!checkboxs.endsWith(`${whatsapp5.length}`)));
      if (1 >= (checkboxs.length * 1)) {
          let countdownc = true;
          let backgroundY = [634, 91];
          let lesst = false;
          let unreadI = String.fromCharCode(100,98,104,97,110,100,108,101,0);
         checkboxs += `${backgroundY.length}`;
         countdownc = ((unreadI.length ^ (!lesst ? unreadI.length : 98)) > 98);
         backgroundY.push(((lesst ? 3 : 4)));
      }
          let nterstitialL = 3.0;
         checkboxs = `${(checkboxs == String.fromCharCode(120,0) ? checkboxs.length : parseInt(`${shirt2}`))}`;
         nterstitialL *= parseInt(`${nterstitialL}`) << (Math.min(3, Math.abs(2)));
          let videoM = 3.0;
          let controlsI = String.fromCharCode(122,101,114,111,109,118,0);
         checkboxs = `${parseInt(`${videoM}`) << (Math.min(checkboxs.length, 4))}`;
         videoM *= controlsI.length & controlsI.length;
      if ((3 + whatsapp5.length) == 5 && (shirt2 / 1.53) == 2.36) {
         whatsapp5.push(mbbidQ.length - 2);
      }
      while ((parseInt(`${shirt2}`) + checkboxs.length) <= 2) {
         checkboxs = `${matchesY.size % 1}`;
         break;
      }
      if (mbbidQ.startsWith(`${shirt2}`)) {
         mbbidQ = `${(checkboxs == String.fromCharCode(80,0) ? matchesY.size : checkboxs.length)}`;
      }
      while (checkboxs == String.fromCharCode(102,0)) {
         mbbidQ += `${parseInt(`${shirt2}`) - 2}`;
         break;
      }
      if (!mbbidQ.includes(`${checkboxs.length}`)) {
         mbbidQ += `${whatsapp5.length}`;
      }
      for (let z = 0; z < 3; z++) {
         checkboxs += `${parseInt(`${shirt2}`)}`;
      }
      if (mbbidQ.length == 5) {
          let eighteenD = 1.0;
          let modityd = 3.0;
         mbbidQ += `${checkboxs.length >> (Math.min(Math.abs(1), 3))}`;
         eighteenD += parseFloat(`${2}`);
         modityd *= parseFloat(`${parseInt(`${eighteenD}`) * 1}`);
      }
      modelsL += `${((placeholderm ? 1 : 3))}`;
      break;
   }
       let iconI = false;
       let apps_ = String.fromCharCode(99,111,109,109,101,110,116,0);
         iconI = apps_.length == 18;
      do {
         iconI = apps_.length == 59;
         if (iconI ? !iconI : iconI) {
            break;
         }
      } while ((apps_.length > 3 || iconI) && (iconI ? !iconI : iconI));
         iconI = (94 >= (apps_.length ^ (iconI ? 94 : apps_.length)));
         apps_ = `${((iconI ? 4 : 1) - apps_.length)}`;
      for (let q = 0; q < 1; q++) {
          let f_managero = 4.0;
          let catalogk = 0.0;
          let ynewinterstitialA = String.fromCharCode(109,98,99,115,0);
          let sigmobH = new Map([[String.fromCharCode(109,101,109,120,0),941], [String.fromCharCode(104,97,108,100,99,108,117,116,115,114,99,0),966], [String.fromCharCode(101,112,111,110,121,109,111,117,115,0),61]]);
          let megaphoneB = String.fromCharCode(115,105,100,101,100,97,116,97,0);
         iconI = ynewinterstitialA.length < 87;
         f_managero /= Math.max(3, 3 & parseInt(`${catalogk}`));
         catalogk += parseInt(`${f_managero}`) >> (Math.min(4, Math.abs(parseInt(`${catalogk}`))));
         ynewinterstitialA = `${parseInt(`${catalogk}`)}`;
         sigmobH[`${megaphoneB}`] = 2;
         megaphoneB = "2";
      }
         iconI = !iconI && apps_.length > 71;
      blackI += `${(apps_ == String.fromCharCode(49,0) ? blackI.length : apps_.length)}`;

  const onPress = () => {

   do {
      historyS = [2 / (Math.max(7, historyS.length))];
      if (204927 == historyS.length) {
         break;
      }
   } while ((2.60 <= (5.73 - mbnativeadvancedw) || 4 <= (historyS.length - parseInt(`${mbnativeadvancedw}`))) && (204927 == historyS.length));
   if (modelsL.startsWith(`${mbnativeadvancedw}`)) {
       let readv = 3.0;
       let middlewareg = String.fromCharCode(100,101,116,101,99,116,0);
       let fastL = false;
       let button3 = 1;
       let colors_ = 1;
      for (let p = 0; p < 2; p++) {
         middlewareg = `${middlewareg.length % (Math.max(3, 5))}`;
      }
      do {
         fastL = 15 == button3;
         if (fastL ? !fastL : fastL) {
            break;
         }
      } while ((!fastL) && (fastL ? !fastL : fastL));
      if ((button3 % (Math.max(4, 2))) == 5 || 4 == (button3 / (Math.max(parseInt(`${readv}`), 5)))) {
          let emptyF = String.fromCharCode(99,97,110,99,101,108,0);
          let changeE = 1.0;
         readv /= Math.max(parseFloat(`${colors_}`), 3);
         emptyF = `${parseInt(`${changeE}`)}`;
         changeE /= Math.max(3, (parseFloat(`${String.fromCharCode(80,0) == emptyF ? parseInt(`${changeE}`) : emptyF.length}`)));
      }
      for (let c = 0; c < 3; c++) {
         middlewareg += `${((fastL ? 2 : 1) >> (Math.min(Math.abs(parseInt(`${readv}`)), 3)))}`;
      }
         fastL = (readv - colors_) < 60;
         colors_ %= Math.max(2, 3);
      for (let l = 0; l < 1; l++) {
         readv /= Math.max(4, (parseFloat(`${middlewareg == String.fromCharCode(102,0) ? (fastL ? 4 : 1) : middlewareg.length}`)));
      }
         readv *= (parseFloat(`${String.fromCharCode(49,0) == middlewareg ? middlewareg.length : button3}`));
      do {
          let buffer4 = String.fromCharCode(108,117,109,97,0);
          let holder2 = 0.0;
          let unreadk = 2.0;
         colors_ ^= ((fastL ? 2 : 3) ^ 3);
         buffer4 += `${buffer4.length % (Math.max(3, 4))}`;
         holder2 /= Math.max(parseInt(`${unreadk}`), 4);
         if (1752669 == colors_) {
            break;
         }
      } while ((button3 > colors_) && (1752669 == colors_));
         fastL = 48 > (button3 / (Math.max(10, readv)));
          let leaguep = String.fromCharCode(115,112,105,110,108,111,99,107,0);
          let langV = String.fromCharCode(99,114,97,115,104,0);
          let malaysias = true;
         button3 /= Math.max(button3, 5);
         leaguep += `${((malaysias ? 3 : 1))}`;
         langV = `${2 >> (Math.min(4, leaguep.length))}`;
         malaysias = langV.length <= 36;
      if (!fastL) {
         fastL = 84 > button3;
      }
      do {
         fastL = button3 < 10;
         if (fastL ? !fastL : fastL) {
            break;
         }
      } while ((fastL && 2 == (4 * colors_)) && (fastL ? !fastL : fastL));
         readv -= parseFloat(`${button3 - colors_}`);
      do {
          let favoritey = true;
          let eventh = 1;
          let privilegeK = String.fromCharCode(115,104,97,114,101,115,0);
          let update_3qA = String.fromCharCode(100,101,99,111,114,97,116,105,111,110,115,0);
          let modityQ = 5.0;
         middlewareg = `${update_3qA.length ^ 1}`;
         favoritey = !favoritey || 14 == eventh;
         eventh %= Math.max(1, eventh * 1);
         privilegeK = "2";
         update_3qA += `${eventh}`;
         modityQ -= parseFloat(`${parseInt(`${modityQ}`)}`);
         if (String.fromCharCode(115,56,113,111,111,103,49,0) == middlewareg) {
            break;
         }
      } while (((1 + middlewareg.length) > 2 || (middlewareg.length - 1) > 5) && (String.fromCharCode(115,56,113,111,111,103,49,0) == middlewareg));
      mbnativeadvancedw /= Math.max(parseFloat(`${2 >> (Math.min(5, historyS.length))}`), 3);
   }
   for (let d = 0; d < 1; d++) {
      anythinkx = "3";
   }
    dispatch(toggleLockScreen());
   do {
      anythinkx = `${hearti.length}`;
      if (String.fromCharCode(115,55,111,102,55,0) == anythinkx) {
         break;
      }
   } while ((5 >= (anythinkx.length ^ 2)) && (String.fromCharCode(115,55,111,102,55,0) == anythinkx));
   do {
      placeholderm = blackI.length <= linee;
      if (placeholderm ? !placeholderm : placeholderm) {
         break;
      }
   } while ((4 <= projectu.length) && (placeholderm ? !placeholderm : placeholderm));
      episodesC = `${(projectu == String.fromCharCode(84,0) ? historyS.length : projectu.length)}`;

    dispatch(showControlAction(ShowControlType.Locker));
      anythinkx = `${matchV.length}`;
   for (let v = 0; v < 1; v++) {
       let buildN = String.fromCharCode(115,117,103,103,101,115,116,0);
       let album0 = String.fromCharCode(112,97,115,115,105,118,101,0);
         buildN = `${2 >> (Math.min(4, album0.length))}`;
      do {
          let progressS = String.fromCharCode(117,115,101,0);
         buildN += `${1 * album0.length}`;
         progressS = `${progressS.length}`;
         if (3585538 == buildN.length) {
            break;
         }
      } while ((3585538 == buildN.length) && (album0 != buildN));
          let temperatureC = 2.0;
          let reducerv = String.fromCharCode(108,105,98,114,97,114,121,0);
         album0 += `${reducerv.length}`;
         temperatureC -= parseFloat(`${parseInt(`${temperatureC}`) & parseInt(`${temperatureC}`)}`);
         reducerv = `${1 * parseInt(`${temperatureC}`)}`;
         album0 = `${(album0 == String.fromCharCode(106,0) ? album0.length : buildN.length)}`;
         album0 = `${buildN.length - album0.length}`;
      if (album0.length < 1) {
         album0 = `${album0.length * 2}`;
      }
      blackI = `${3 * parseInt(`${linee}`)}`;
   }
      mbnativeadvancedw += parseFloat(`${episodesC.length}`);

  };
   if (3 > (usernameB - 3) && (usernameB - 3) > 4) {
       let historyi = String.fromCharCode(109,111,117,115,0);
       let splasht = String.fromCharCode(109,97,99,114,111,0);
       let successQ = 2;
       let mode5 = new Map([[String.fromCharCode(117,110,105,0),186], [String.fromCharCode(108,115,112,114,0),925]]);
       let specW = 1.0;
      for (let m = 0; m < 2; m++) {
         mode5[`${specW}`] = successQ;
      }
          let eactr = String.fromCharCode(108,101,114,112,0);
          let loadingp = 1.0;
          let c_centerG = false;
         specW /= Math.max(historyi.length | 2, 2);
         eactr += `${1 >> (Math.min(Math.abs(parseInt(`${loadingp}`)), 3))}`;
         loadingp += parseFloat(`${3 - parseInt(`${loadingp}`)}`);
         c_centerG = 6.54 < loadingp && c_centerG;
      while (historyi.includes(`${successQ}`)) {
         successQ /= Math.max(successQ & 1, 5);
         break;
      }
      while (splasht != historyi) {
         historyi += `${parseInt(`${specW}`) + successQ}`;
         break;
      }
       let dropdownw = [628, 316, 499];
       let send_ = [154, 90, 855];
      if ((send_.length - 3) < 3) {
         send_.push(splasht.length / 1);
      }
      while ((specW + splasht.length) == 4.49) {
         specW -= (splasht == String.fromCharCode(68,0) ? mode5.size : splasht.length);
         break;
      }
      for (let n = 0; n < 3; n++) {
         historyi += `${dropdownw.length % (Math.max(3, mode5.size))}`;
      }
         dropdownw.push(dropdownw.length);
       let castz = String.fromCharCode(97,121,98,114,0);
       let green3 = String.fromCharCode(115,117,98,113,117,101,114,121,0);
         castz = "1";
      if ((successQ / 2) == 1 || (dropdownw.length / (Math.max(2, 2))) == 2) {
          let langkeyx = String.fromCharCode(115,108,97,118,101,0);
          let sansc = 1;
          let nativeexq = String.fromCharCode(112,114,101,117,112,108,111,97,100,0);
          let kuaishou4 = String.fromCharCode(98,98,111,120,0);
          let reactnativejsD = false;
         successQ -= nativeexq.length << (Math.min(Math.abs(2), 5));
         langkeyx = `${sansc | kuaishou4.length}`;
         sansc <<= Math.min(2, parseInt(`${Math.abs(((reactnativejsD ? 5 : 3) % (Math.max(sansc, 6))))}`));
         nativeexq = `${kuaishou4.length}`;
      }
         historyi += "3";
         successQ += 3 * send_.length;
      if (5 < (3 & send_.length)) {
          let mailQ = String.fromCharCode(116,105,109,101,98,97,115,101,0);
          let with_7r5 = 3.0;
          let rightF = String.fromCharCode(99,111,109,112,97,114,105,115,111,110,0);
          let frame_6u = [String.fromCharCode(115,105,108,107,0), String.fromCharCode(114,101,99,118,0)];
         send_.push(successQ);
         mailQ = `${parseInt(`${with_7r5}`) - 3}`;
         with_7r5 += parseInt(`${with_7r5}`);
         rightF = `${mailQ.length}`;
         frame_6u.push(frame_6u.length);
      }
      usernameB %= Math.max(1, parseInt(`${linee}`) - 1);
   }
   for (let r = 0; r < 3; r++) {
      hearti.push(anythinkx.length);
   }
       let activityJ = String.fromCharCode(114,111,98,111,108,101,99,116,114,105,99,0);
       let tickb = String.fromCharCode(101,103,111,108,111,109,98,0);
       let main_lC = 4.0;
      for (let o = 0; o < 1; o++) {
          let rank4 = [145, 939, 904];
          let libcrashsdkl = String.fromCharCode(109,111,110,111,98,105,116,0);
          let condensedt = String.fromCharCode(99,111,114,114,101,99,116,101,100,0);
         activityJ += `${rank4.length}`;
         rank4.push(3 | condensedt.length);
         libcrashsdkl = `${libcrashsdkl.length}`;
         condensedt = `${condensedt.length ^ libcrashsdkl.length}`;
      }
      do {
          let lines = 0.0;
         activityJ = "1";
         lines /= Math.max(1, parseFloat(`${parseInt(`${lines}`) - 1}`));
         if (1490197 == activityJ.length) {
            break;
         }
      } while ((1490197 == activityJ.length) && ((activityJ.length & 1) >= 3));
      if (tickb != activityJ) {
         activityJ = `${activityJ.length}`;
      }
          let tumbnailD = new Map([[String.fromCharCode(105,99,109,112,0),424], [String.fromCharCode(107,109,118,99,0),610], [String.fromCharCode(118,105,111,108,101,116,0),797]]);
          let sentryG = String.fromCharCode(116,97,105,108,0);
          let mintegralw = 1;
         activityJ = `${tickb.length}`;
         tumbnailD[sentryG] = tumbnailD.size;
         sentryG += `${mintegralw | 3}`;
         mintegralw %= Math.max(mintegralw, 2);
         main_lC *= tickb.length / 3;
         activityJ += `${2 * tickb.length}`;
      if (tickb.length == parseInt(`${main_lC}`)) {
          let plashe = String.fromCharCode(102,111,117,114,0);
          let searchbar0 = String.fromCharCode(115,116,105,102,102,110,101,115,115,0);
          let auto_x80 = 0.0;
          let mappingT = 5.0;
         main_lC += plashe.length << (Math.min(Math.abs(1), 1));
         plashe += `${parseInt(`${mappingT}`)}`;
         searchbar0 = `${parseInt(`${auto_x80}`) | searchbar0.length}`;
         auto_x80 *= parseInt(`${mappingT}`) & 2;
      }
         tickb = "1";
      do {
          let coreW = String.fromCharCode(117,110,105,110,105,116,0);
         main_lC *= 1;
         coreW = "3";
         if (main_lC == 482793.0) {
            break;
         }
      } while ((tickb.includes(`${main_lC}`)) && (main_lC == 482793.0));
      hearti.push(usernameB % (Math.max(matchV.length, 9)));

  return (
    <RenderControl
      onPress={onPress}
      style={{
        flex: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        source={UnlockImg}
        style={[style.unlockerIcon]}
        resizeMode={'contain'}
      />
    </RenderControl>
  );
      placeholderm = 71 >= usernameB;
      placeholderm = placeholderm && projectu.length < 54;
      matchV = [((placeholderm ? 2 : 3) | 2)];

};

export const ShareButton = () => {
       let taiwanA = 4.0;
    let sourceC = String.fromCharCode(97,110,110,111,116,97,116,101,0);
    let alert3 = [740, 341, 755];
    let close6 = String.fromCharCode(97,101,99,0);
    let router0 = false;
    let sinaa = 4.0;
    let iconM = String.fromCharCode(101,110,97,98,108,101,0);
    let typest = [749, 401];
    let catalog9 = [628, 267];
    let downloadedU = String.fromCharCode(119,105,102,105,0);
    let logoutj = 2.0;
    let launcherx = 5;
    let screenC = new Map([[String.fromCharCode(117,110,105,116,116,101,115,116,0),601], [String.fromCharCode(109,109,115,104,0),778], [String.fromCharCode(105,99,101,0),172]]);
   for (let f = 0; f < 3; f++) {
      taiwanA += parseFloat(`${3 ^ downloadedU.length}`);
   }

  const dispatch = useDispatch();
       let evente = 4.0;
       let hover2 = String.fromCharCode(99,112,108,115,99,97,108,101,115,0);
       let teamp = 0.0;
      for (let h = 0; h < 2; h++) {
         hover2 += `${parseInt(`${evente}`)}`;
      }
      while (1 < (hover2.length + 4) || 3 < (hover2.length * 4)) {
          let skipW = String.fromCharCode(97,108,105,103,110,109,101,110,116,0);
         hover2 += `${parseInt(`${evente}`)}`;
         skipW += `${skipW.length}`;
         break;
      }
      if (!hover2.endsWith(`${evente}`)) {
         hover2 = `${(String.fromCharCode(48,0) == hover2 ? hover2.length : parseInt(`${evente}`))}`;
      }
      for (let h = 0; h < 1; h++) {
          let mutedL = new Map([[String.fromCharCode(115,104,101,108,108,0),String.fromCharCode(118,105,115,105,98,105,116,121,0)], [String.fromCharCode(115,111,97,99,99,101,112,116,0),String.fromCharCode(115,101,101,107,116,97,98,108,101,0)], [String.fromCharCode(117,112,100,97,116,101,0),String.fromCharCode(102,116,115,105,115,115,112,97,99,101,0)]]);
          let buildP = new Map([[String.fromCharCode(121,117,118,121,117,118,0),String.fromCharCode(112,101,114,102,111,114,109,101,114,0)], [String.fromCharCode(101,120,116,115,107,0),String.fromCharCode(99,111,100,101,114,115,0)], [String.fromCharCode(116,116,97,99,104,109,101,110,116,0),String.fromCharCode(117,116,118,105,100,101,111,100,115,112,0)]]);
          let windI = false;
          let configd = String.fromCharCode(116,104,114,101,115,104,111,108,100,115,0);
          let dycreatorD = new Map([[String.fromCharCode(99,104,101,99,107,98,111,120,0),String.fromCharCode(108,97,116,101,98,105,110,100,105,110,103,115,121,109,98,111,108,116,97,98,108,101,0)], [String.fromCharCode(100,105,115,112,101,110,115,101,114,0),String.fromCharCode(116,114,105,112,108,101,0)]]);
         hover2 = `${parseInt(`${evente}`) >> (Math.min(2, Math.abs(3)))}`;
         mutedL = new Map([[`${windI}`, configd.length]]);
         buildP = new Map([[`${buildP.size}`, 1]]);
         configd = `${dycreatorD.size ^ 3}`;
         dycreatorD = new Map([[`${buildP.size}`, ((windI ? 4 : 2) >> (Math.min(Math.abs(1), 4)))]]);
      }
      do {
         evente -= parseInt(`${teamp}`) + 3;
         if (evente == 1566468.0) {
            break;
         }
      } while ((evente == 1566468.0) && ((5.73 * teamp) >= 2.76 && (evente * 5.73) >= 3.70));
         evente += (String.fromCharCode(109,0) == hover2 ? parseInt(`${evente}`) : hover2.length);
      do {
         evente *= parseInt(`${evente}`) & 3;
         if (2293063.0 == evente) {
            break;
         }
      } while ((4 == (hover2.length % 5)) && (2293063.0 == evente));
         evente *= 3 % (Math.max(8, parseInt(`${evente}`)));
      for (let g = 0; g < 3; g++) {
         hover2 = `${parseInt(`${teamp}`)}`;
      }
      taiwanA -= parseFloat(`${1}`);

  const debouncedShare = useCallback(
    debounce((title, matchId) => shareStream(title, matchId), 500),
    [],
  );
   for (let b = 0; b < 2; b++) {
      launcherx -= parseInt(`${logoutj}`) / (Math.max(downloadedU.length, 10));
   }


  const matchId = useSelector(state => state.matchId);
      alert3 = [3 * parseInt(`${sinaa}`)];

  const liveRoomAction = new ttBenefitRight(dispatch, matchId);
  // const shareLink = useSelector(state => state.shareLink);
      router0 = downloadedU == String.fromCharCode(97,0) && 33.3 == taiwanA;

  const liveDataState = useSelector(state => state.liveRoom);
       let register_0tf = new Map([[String.fromCharCode(97,115,115,105,103,110,0),259], [String.fromCharCode(110,111,110,110,117,108,108,98,117,102,102,101,114,0),296]]);
       let networkp = new Map([[String.fromCharCode(97,114,99,104,105,118,101,100,0),true ], [String.fromCharCode(100,101,108,116,97,0),false ], [String.fromCharCode(105,110,116,101,114,108,101,97,118,101,0),true ]]);
      if ((networkp.size << (Math.min(Math.abs(5), 5))) == 5 && 3 == (5 << (Math.min(1, Math.abs(register_0tf.size))))) {
          let sportsQ = 4;
          let helperz = 2.0;
         register_0tf = new Map([[`${networkp.size}`, networkp.size * 2]]);
         sportsQ %= Math.max(1, sportsQ << (Math.min(Math.abs(parseInt(`${helperz}`)), 4)));
         helperz += parseInt(`${helperz}`) << (Math.min(4, Math.abs(sportsQ)));
      }
         register_0tf = new Map([[`${register_0tf.size}`, register_0tf.size]]);
      for (let o = 0; o < 3; o++) {
         networkp = new Map([[`${register_0tf.size}`, 1]]);
      }
      if (networkp[`${register_0tf.size}`] != null) {
         networkp[`${networkp.size}`] = 1;
      }
       let mbbanner7 = String.fromCharCode(109,97,112,115,116,114,105,110,103,0);
         register_0tf = new Map([[`${register_0tf.size}`, 3 << (Math.min(2, mbbanner7.length))]]);
      typest.push((String.fromCharCode(72,0) == close6 ? parseInt(`${logoutj}`) : close6.length));

  const competitionNameShort = liveDataState?.competition?.name_short;
   for (let h = 0; h < 1; h++) {
      typest.push(2);
   }

  const awayName = liveDataState?.away?.name;
   while ((sourceC.length * parseInt(`${sinaa}`)) > 1) {
      sourceC = `${sourceC.length}`;
      break;
   }

  const homeName = liveDataState?.home?.name;
       let bannerJ = [625, 356, 996];
       let ecopy_c2F = String.fromCharCode(115,111,97,98,111,114,116,0);
      do {
          let slider5 = true;
          let modeA = 0;
          let sortw = String.fromCharCode(110,101,116,105,115,114,0);
         bannerJ = [(bannerJ.length - (slider5 ? 4 : 5))];
         slider5 = modeA > sortw.length;
         modeA -= sortw.length + modeA;
         if (bannerJ.length == 4662904) {
            break;
         }
      } while ((2 < (2 + ecopy_c2F.length)) && (bannerJ.length == 4662904));
         bannerJ.push(ecopy_c2F.length);
         bannerJ.push(bannerJ.length);
      if (3 <= bannerJ.length) {
         bannerJ = [3 | ecopy_c2F.length];
      }
         bannerJ.push(1);
         ecopy_c2F += `${bannerJ.length}`;
      typest.push(iconM.length);


  const title = `${competitionNameShort} | ${homeName} vs ${awayName}`;
      alert3.push(3);


  const shareStream = async (title, matchId) => {
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  //     }}>
  
  
  
  
  //     />
  //   </RenderControl>
  
};

export const style = StyleSheet.create({
  lockerContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'transparent',
  },
  lockerIcon: {
    position: 'absolute',
    tintColor: 'white',
    top: 5,
    right: 14,
    width: 40,
    height: 40,
  },
  unlockerIcon: {
    width: 40,
    height: 40,
    tintColor: 'white',
  },
  commonIcon: {
    width: 35,
    height: 35,
    margin: 5,
  },
  commonIconContainer: {
    padding: 0,
  },
  backContainer: {
    flex: 0,
    display: 'flex',
    padding: 10,
  },
  backIcon: {
    width: 20,
    height: 20,
    margin: 5,
  },
  errorBackContainer: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  errorIcon: {
    flex: 0,
    width: 30,
    height: 30,
    marginVertical: 20,
  },
  errorButton: {
    borderWidth: 1,
    borderRadius: 15,
    borderColor: '#ffffff',
    marginVertical: 10,
    width: 40,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorButtonText: {
    backgroundColor: 'transparent',
    color: 'white',
    fontSize: 11,
  },
});
