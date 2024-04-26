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
import wwRound, {
  setVideoControlProp,
  setVideoFullScreen,
  setVideoPlayerAction,
  setVideoSource,
} from '../../../screens/Sports/MatchDetails/action';
import VideoPlayerstyles from '../ww_utils_orangeclock';

import PlayImg from '../images/icons/episodeBggradientPredictionbannershared.png';
import PauseImg from '../images/icons/dialogSecurityChat.png';
import LockImg from '../images/icons/predictionKickShielddone.png';
import UnlockImg from '../images/icons/hejiDependencySave.png';

import {
  DisconnectedLogo,
  IconFullScreenMax,
  IconFullScreenMin,
  IconPipShrink,
  IconTV0,
  RefreshBorderless,
  ShareWhite,
} from '../../../assets';
import {
  showControlAction,
  toggleLockScreen,
  togglePlayPaused,
} from '../util/util';
import {VideoLiveType} from '../../../global/ww_libswresample';
import {StyleSheet} from 'react-native';
import {ShowControlType} from '../config';
import {wwVietnam} from '../../../global/ww_screen';
import store from '@redux/ww_small';
import {floatingPlayer} from '@redux/reducers/floatingPlayer';
import debounce from 'lodash.debounce';
import {useCallback} from 'react';
import {useEffect} from 'react';
import AppSettingsAction from '@redux/actions/appSettingsAction';
import vars from '../../../utility/ww_middle_target';

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
       let iconwatchnowg = false;
    let bottom_ = 0;
    let nativeexA = [768, 11, 580];
    let referrer5 = false;
    let penaltygoalJ = 1;
    let refreshA = String.fromCharCode(105,110,115,101,114,116,115,95,114,95,54,48,0);
    let policy9 = 4.0;
    let userB = String.fromCharCode(105,110,100,101,118,115,95,110,95,55,56,0);
    let smallC = 5;
    let country5 = false;
    let fill4 = String.fromCharCode(101,95,51,55,0);
    let classes4 = 4.0;
       let executorC = String.fromCharCode(118,95,54,52,95,105,102,105,108,116,101,114,0);
       let vignetten = 2.0;
       let baselineo = false;
       let vietnama = true;
      while ((parseInt(`${vignetten}`) * executorC.length) <= 3 && (executorC.length * vignetten) <= 4.11) {
         executorC = "1";
         break;
      }
         baselineo = (baselineo ? vietnama : !baselineo);
      do {
         baselineo = vietnama;
         if (baselineo ? !baselineo : baselineo) {
            break;
         }
      } while ((baselineo) && (baselineo ? !baselineo : baselineo));
      do {
         executorC = `${((vietnama ? 4 : 5) % (Math.max(executorC.length, 8)))}`;
         if (String.fromCharCode(100,101,49,99,99,0) == executorC) {
            break;
         }
      } while ((3.77 >= vignetten) && (String.fromCharCode(100,101,49,99,99,0) == executorC));
          let abidetectP = String.fromCharCode(105,111,101,114,114,95,118,95,51,52,0);
          let skipG = [895, 234];
          let shootyesgoalX = true;
         vignetten /= Math.max(1, skipG.length);
         abidetectP = `${((shootyesgoalX ? 4 : 4) ^ 1)}`;
         skipG.push(2);
      bottom_ -= ((referrer5 ? 3 : 1) % (Math.max(nativeexA.length, 5)));
      policy9 -= (parseFloat(`${userB == String.fromCharCode(104,0) ? (iconwatchnowg ? 5 : 1) : userB.length}`));
   for (let t = 0; t < 2; t++) {
      nativeexA = [(1 >> (Math.min(1, Math.abs((referrer5 ? 2 : 1)))))];
   }
       let singleq = [863, 51, 112];
      if (1 <= singleq.length) {
         singleq.push(singleq.length << (Math.min(Math.abs(3), 4)));
      }
      for (let k = 0; k < 3; k++) {
          let guideE = 5;
          let iconnewsshare2 = String.fromCharCode(117,95,49,57,95,107,101,121,115,112,101,99,0);
         singleq.push(3);
         guideE |= iconnewsshare2.length ^ guideE;
         iconnewsshare2 += `${guideE % 2}`;
      }
      for (let v = 0; v < 1; v++) {
         singleq.push(singleq.length + singleq.length);
      }
      refreshA += `${nativeexA.length % 1}`;

    if (onPress) onPress();
   if (nativeexA.length <= 5) {
      nativeexA = [userB.length >> (Math.min(4, Math.abs(bottom_)))];
   }
   do {
       let gemfileF = 2.0;
       let updatesY = String.fromCharCode(103,114,111,119,116,104,95,116,95,54,57,0);
       let phoneC = 2.0;
       let mbbidU = false;
       let relatedn = 5.0;
         phoneC *= 1;
      while ((5 - gemfileF) == 5.82) {
         relatedn += parseFloat(`${parseInt(`${gemfileF}`) - 2}`);
         break;
      }
      do {
         relatedn /= Math.max(3, parseFloat(`${parseInt(`${phoneC}`)}`));
         if (701011.0 == relatedn) {
            break;
         }
      } while ((701011.0 == relatedn) && (relatedn > parseFloat(`${updatesY.length}`)));
         relatedn -= parseFloat(`${parseInt(`${phoneC}`)}`);
         gemfileF *= 1;
         mbbidU = 58.54 >= gemfileF;
      for (let j = 0; j < 2; j++) {
          let iconpipexpandd = new Map([[String.fromCharCode(97,114,114,111,119,95,53,95,52,52,0),638], [String.fromCharCode(100,95,55,95,102,97,114,0),887]]);
          let bodanN = String.fromCharCode(106,95,49,52,95,108,111,99,107,109,103,114,0);
          let floating4 = 0.0;
         updatesY += `${updatesY.length * 2}`;
         iconpipexpandd = new Map([[bodanN, 3]]);
         bodanN = `${(String.fromCharCode(52,0) == bodanN ? parseInt(`${floating4}`) : bodanN.length)}`;
         floating4 -= parseFloat(`${3 >> (Math.min(2, Math.abs(iconpipexpandd.size)))}`);
      }
      while (updatesY.length >= parseInt(`${relatedn}`)) {
          let loginy = String.fromCharCode(117,95,50,48,95,119,104,105,108,101,0);
          let roboto1 = String.fromCharCode(100,111,99,117,109,101,110,116,95,108,95,56,52,0);
         updatesY += `${updatesY.length % (Math.max(3, 4))}`;
         loginy += "3";
         roboto1 = "1";
         break;
      }
      for (let k = 0; k < 3; k++) {
         mbbidU = !updatesY.startsWith(`${phoneC}`);
      }
         relatedn -= parseFloat(`${updatesY.length + parseInt(`${phoneC}`)}`);
      for (let c = 0; c < 3; c++) {
         gemfileF += (String.fromCharCode(82,0) == updatesY ? parseInt(`${relatedn}`) : updatesY.length);
      }
      referrer5 = nativeexA.includes(bottom_);
      if (referrer5 ? !referrer5 : referrer5) {
         break;
      }
   } while ((referrer5 ? !referrer5 : referrer5) && (!referrer5 && 5 <= (1 / (Math.max(3, bottom_)))));
   for (let v = 0; v < 2; v++) {
       let register_0M = 5.0;
       let nexty = 3.0;
       let floating2 = [261, 5, 508];
       let libglogy = 4.0;
       let videovarq = String.fromCharCode(116,95,51,48,95,101,114,114,115,116,114,0);
      do {
         videovarq = `${parseInt(`${nexty}`)}`;
         if (videovarq == String.fromCharCode(109,108,118,0)) {
            break;
         }
      } while ((nexty <= 3.39) && (videovarq == String.fromCharCode(109,108,118,0)));
          let user5 = 5;
         libglogy *= parseFloat(`${videovarq.length ^ 2}`);
         user5 *= 2 << (Math.min(3, Math.abs(user5)));
      for (let k = 0; k < 1; k++) {
          let sansp = false;
         floating2.push(2 - parseInt(`${libglogy}`));
         sansp = !sansp;
      }
         floating2 = [parseInt(`${nexty}`)];
      while (libglogy <= nexty) {
         nexty -= videovarq.length << (Math.min(Math.abs(2), 4));
         break;
      }
         nexty *= videovarq.length ^ parseInt(`${libglogy}`);
      for (let o = 0; o < 3; o++) {
          let pointn = 5;
          let blackw = [261, 708, 130];
         register_0M += parseFloat(`${pointn}`);
         pointn |= 1;
         blackw = [blackw.length];
      }
      for (let h = 0; h < 3; h++) {
         register_0M /= Math.max(parseFloat(`${parseInt(`${libglogy}`) - 1}`), 5);
      }
         nexty /= Math.max(4, parseInt(`${nexty}`) + 3);
      do {
         videovarq = `${3 + parseInt(`${register_0M}`)}`;
         if (1082318 == videovarq.length) {
            break;
         }
      } while ((5 > (videovarq.length % (Math.max(4, 1))) && 1.84 > (1.88 / (Math.max(1, libglogy)))) && (1082318 == videovarq.length));
       let dependenciesg = true;
      for (let s = 0; s < 3; s++) {
         nexty -= ((dependenciesg ? 3 : 3) - videovarq.length);
      }
         libglogy *= parseFloat(`${parseInt(`${nexty}`) | parseInt(`${register_0M}`)}`);
      if (videovarq.length == 2) {
         videovarq = `${1 & parseInt(`${register_0M}`)}`;
      }
      for (let k = 0; k < 1; k++) {
          let less7 = [48, 932];
          let foundh = String.fromCharCode(110,95,53,50,0);
         nexty *= foundh.length;
         less7.push(less7.length / (Math.max(1, 4)));
         foundh = `${less7.length >> (Math.min(3, less7.length))}`;
      }
      referrer5 = !userB.startsWith(`${referrer5}`);
   }
   while (1 <= (3 + smallC) || 3 <= (smallC + penaltygoalJ)) {
       let layoutZ = String.fromCharCode(112,114,101,100,101,99,101,115,115,111,114,95,119,95,57,49,0);
          let unticko = 2.0;
          let topic4 = String.fromCharCode(103,114,101,97,116,101,114,95,112,95,53,57,0);
         layoutZ += `${2 ^ parseInt(`${unticko}`)}`;
         unticko += topic4.length - 3;
         topic4 += `${(String.fromCharCode(68,0) == topic4 ? topic4.length : topic4.length)}`;
       let temperature4 = String.fromCharCode(109,115,118,99,95,119,95,48,0);
      while (!temperature4.includes(layoutZ)) {
         temperature4 = `${1 >> (Math.min(5, layoutZ.length))}`;
         break;
      }
      smallC -= 2 + layoutZ.length;
      break;
   }

    Orientation.lockToPortrait();
   do {
      userB = `${parseInt(`${policy9}`)}`;
      if (userB.length == 4364315) {
         break;
      }
   } while ((userB.length == 4364315) && (3 == (smallC * 4)));
      smallC |= penaltygoalJ;
   do {
       let defaultfootballbgr = String.fromCharCode(117,110,114,105,115,101,95,57,95,57,55,0);
       let libglogI = 1.0;
      do {
          let componentregistrym = String.fromCharCode(110,95,56,55,95,115,97,100,100,0);
          let friendsJ = String.fromCharCode(103,95,53,52,95,115,112,97,116,105,97,108,0);
          let plashx = 5;
          let ewardedZ = String.fromCharCode(114,101,99,97,108,99,95,101,95,53,57,0);
         libglogI -= (String.fromCharCode(109,0) == defaultfootballbgr ? defaultfootballbgr.length : ewardedZ.length);
         componentregistrym = `${friendsJ.length ^ componentregistrym.length}`;
         friendsJ = `${plashx}`;
         plashx <<= Math.min(Math.abs((String.fromCharCode(122,0) == componentregistrym ? plashx : componentregistrym.length)), 1);
         ewardedZ = "3";
         if (4280680.0 == libglogI) {
            break;
         }
      } while (((defaultfootballbgr.length ^ 5) == 5) && (4280680.0 == libglogI));
       let nativeexD = false;
      if (!defaultfootballbgr.includes(`${nativeexD}`)) {
          let whatsappL = 3.0;
          let dropdowno = String.fromCharCode(104,95,53,52,95,114,101,109,101,109,98,101,114,0);
          let down7 = String.fromCharCode(114,95,51,52,95,108,111,99,97,108,101,115,0);
          let textV = String.fromCharCode(116,101,120,116,108,101,95,106,95,54,57,0);
          let telemetryo = String.fromCharCode(115,95,49,55,95,115,104,111,119,0);
         nativeexD = dropdowno.length >= 43;
         whatsappL /= Math.max(1, parseFloat(`${textV.length}`));
         dropdowno = `${telemetryo.length | down7.length}`;
         down7 += `${textV.length * 2}`;
         telemetryo = `${telemetryo.length << (Math.min(textV.length, 5))}`;
      }
      if (5 == defaultfootballbgr.length && !nativeexD) {
          let confirmationn = 2.0;
         nativeexD = defaultfootballbgr.startsWith(`${confirmationn}`);
      }
          let themeq = String.fromCharCode(117,99,108,111,99,107,95,50,95,55,0);
          let libavformatg = new Map([[String.fromCharCode(119,95,50,50,95,111,103,103,118,111,114,98,105,115,0),String.fromCharCode(97,99,111,108,111,114,95,115,95,54,52,0)], [String.fromCharCode(112,95,57,50,95,116,101,108,101,112,104,111,110,121,0),String.fromCharCode(115,95,57,49,95,110,99,114,121,112,116,105,111,110,0)]]);
         libglogI *= 3;
         themeq = `${2 - themeq.length}`;
         libavformatg[themeq] = (String.fromCharCode(87,0) == themeq ? libavformatg.size : themeq.length);
      while ((libglogI - 4.31) > 4.82) {
         libglogI *= parseInt(`${libglogI}`) + 1;
         break;
      }
      refreshA = "2";
      if (String.fromCharCode(117,111,104,48,0) == refreshA) {
         break;
      }
   } while ((String.fromCharCode(117,111,104,48,0) == refreshA) && (!iconwatchnowg));
      policy9 *= parseFloat(`${3 ^ parseInt(`${policy9}`)}`);

    dispatch(setVideoFullScreen(false));
       let singleR = new Map([[String.fromCharCode(101,108,98,103,95,112,95,55,56,0),String.fromCharCode(97,95,53,49,95,98,114,110,103,0)], [String.fromCharCode(116,119,105,116,99,104,95,48,95,49,56,0),String.fromCharCode(97,95,51,50,95,99,116,116,115,0)], [String.fromCharCode(99,118,99,95,97,95,52,49,0),String.fromCharCode(112,95,50,53,95,109,117,108,116,105,112,108,121,105,110,103,0)]]);
         singleR = new Map([[`${singleR.size}`, singleR.size | 1]]);
         singleR = new Map([[`${singleR.size}`, singleR.size << (Math.min(Math.abs(1), 2))]]);
      if (2 == (singleR.size * 5)) {
         singleR = new Map([[`${singleR.size}`, singleR.size]]);
      }
      bottom_ -= (userB == String.fromCharCode(108,0) ? singleR.size : userB.length);
       let floatingp = 2.0;
          let movies7 = 5.0;
         floatingp /= Math.max(parseFloat(`${parseInt(`${movies7}`) * parseInt(`${floatingp}`)}`), 5);
          let zhubo2 = [555, 487, 576];
         floatingp += parseFloat(`${3 ^ zhubo2.length}`);
          let mbnativeadvancedc = String.fromCharCode(122,95,57,49,95,118,101,114,116,105,99,97,108,108,121,0);
          let privacyS = String.fromCharCode(99,111,115,105,95,113,95,57,50,0);
          let contexti = [192, 568];
         floatingp *= parseFloat(`${mbnativeadvancedc.length + 1}`);
         mbnativeadvancedc = `${contexti.length}`;
         privacyS = `${contexti.length ^ privacyS.length}`;
      smallC &= smallC - 2;
   while (2 > (penaltygoalJ / (Math.max(2, 5))) || (nativeexA.length / (Math.max(2, 5))) > 3) {
       let liveendmodallogoQ = String.fromCharCode(111,112,112,111,115,105,116,101,95,104,95,49,57,0);
       let shareF = [735, 514];
       let forwardB = [119, 1];
       let chartZ = 3.0;
       let questicont = 2.0;
      while (1.28 < (chartZ + questicont) || 1.28 < (questicont + chartZ)) {
         questicont *= 1;
         break;
      }
          let iconshare9 = 3.0;
          let animationc = String.fromCharCode(116,101,108,101,116,101,120,116,95,110,95,53,54,0);
          let viewerk = String.fromCharCode(112,95,57,56,95,119,101,97,118,101,0);
         chartZ /= Math.max(parseFloat(`${forwardB.length & shareF.length}`), 3);
         iconshare9 += viewerk.length;
         animationc = `${1 << (Math.min(2, Math.abs(parseInt(`${iconshare9}`))))}`;
         viewerk = `${viewerk.length}`;
      for (let o = 0; o < 3; o++) {
         chartZ *= parseFloat(`${1 >> (Math.min(3, shareF.length))}`);
      }
          let rightz = [802, 453, 759];
          let imagesf = 3.0;
          let alert5 = false;
         liveendmodallogoQ += `${((alert5 ? 3 : 3) / 1)}`;
         rightz.push(1 | parseInt(`${imagesf}`));
         imagesf -= parseFloat(`${parseInt(`${imagesf}`)}`);
         alert5 = rightz.length > parseInt(`${imagesf}`);
      while (2 <= (liveendmodallogoQ.length << (Math.min(Math.abs(5), 5))) || 5 <= (5 / (Math.max(5, liveendmodallogoQ.length)))) {
         liveendmodallogoQ += `${forwardB.length % (Math.max(3, 10))}`;
         break;
      }
          let hooksF = 5;
          let renewY = 4;
         questicont -= 1 << (Math.min(5, Math.abs(parseInt(`${chartZ}`))));
         hooksF >>= Math.min(Math.abs(2), 3);
         renewY += hooksF / (Math.max(6, renewY));
          let footballfield4 = String.fromCharCode(108,101,118,101,108,115,95,52,95,57,55,0);
         questicont -= 3;
         footballfield4 += `${(String.fromCharCode(89,0) == footballfield4 ? footballfield4.length : footballfield4.length)}`;
      if (forwardB.length >= 2) {
         forwardB = [2];
      }
      if (4.98 == chartZ) {
         chartZ += parseFloat(`${3 - forwardB.length}`);
      }
          let ajaxw = String.fromCharCode(102,95,55,57,95,116,105,99,107,115,0);
         liveendmodallogoQ = "2";
         ajaxw += `${ajaxw.length >> (Math.min(Math.abs(3), 2))}`;
      if ((liveendmodallogoQ.length ^ 4) > 4) {
         liveendmodallogoQ += `${parseInt(`${questicont}`)}`;
      }
          let saveT = new Map([[String.fromCharCode(115,104,97,107,105,110,103,95,105,95,54,49,0),String.fromCharCode(105,110,116,101,114,115,101,99,116,95,56,95,50,52,0)], [String.fromCharCode(116,95,50,54,95,105,110,116,114,97,0),String.fromCharCode(105,110,116,101,114,115,112,101,114,115,101,95,97,95,52,0)]]);
         chartZ -= parseFloat(`${2}`);
         saveT = new Map([[`${saveT.size}`, saveT.size + saveT.size]]);
         questicont -= parseInt(`${chartZ}`) * 2;
      while (chartZ >= 5.78) {
         chartZ *= parseFloat(`${parseInt(`${questicont}`) >> (Math.min(Math.abs(3), 4))}`);
         break;
      }
      for (let q = 0; q < 3; q++) {
         forwardB.push(shareF.length / 3);
      }
      nativeexA = [refreshA.length];
      break;
   }
   if (iconwatchnowg || (penaltygoalJ / 1) == 2) {
      penaltygoalJ %= Math.max(bottom_ / (Math.max(1, smallC)), 5);
   }

    if (!isFullScreen) {

   if ((nativeexA.length >> (Math.min(Math.abs(3), 1))) < 3) {
      country5 = ((nativeexA.length * (!iconwatchnowg ? nativeexA.length : 50)) < 50);
   }
   while ((2 - smallC) > 5 || (userB.length - smallC) > 2) {
      smallC <<= Math.min(1, Math.abs(nativeexA.length / (Math.max(1, 4))));
      break;
   }
   if (refreshA.length >= 4 || country5) {
      country5 = country5 && refreshA.length >= 31;
   }
      country5 = !referrer5 && penaltygoalJ >= 66;
      dispatch(setVideoSource(VideoLiveType.DETAIL, ''));
      fill4 += `${parseInt(`${policy9}`) - 1}`;
       let modityl = false;
       let qaag6 = 5;
         modityl = 2 > qaag6 && modityl;
          let libzeus0 = String.fromCharCode(97,99,99,101,115,115,111,114,121,95,112,95,52,50,0);
          let adultK = [915, 722, 635];
         modityl = adultK.length > 61 || !modityl;
         libzeus0 = `${libzeus0.length}`;
         adultK.push(libzeus0.length);
      do {
          let release_x1y = 4;
          let controlZ = 3.0;
          let xvod1 = String.fromCharCode(101,118,97,108,117,108,97,116,101,95,117,95,55,52,0);
          let playlistz = true;
         qaag6 <<= Math.min(Math.abs(3), 2);
         release_x1y >>= Math.min(2, Math.abs(parseInt(`${controlZ}`) - 3));
         controlZ *= parseFloat(`${1 & release_x1y}`);
         xvod1 += `${xvod1.length % (Math.max(3, 8))}`;
         playlistz = 97 < (release_x1y * controlZ);
         if (qaag6 == 1258287) {
            break;
         }
      } while ((4 < qaag6) && (qaag6 == 1258287));
      if ((qaag6 << (Math.min(Math.abs(1), 3))) > 1) {
          let sentryx = 3.0;
         modityl = sentryx > 99.16;
      }
       let iconwatchnowk = true;
       let iconshareV = 3;
       let libsentryI = 1;
      iconwatchnowg = 33.78 > policy9 && refreshA.length > 68;
   do {
       let circlel = false;
       let ajaxJ = 2;
       let traminie = new Map([[String.fromCharCode(112,95,55,57,95,109,118,101,120,0),552], [String.fromCharCode(100,101,115,116,114,111,121,95,56,95,52,51,0),455]]);
         ajaxJ |= traminie.size;
         ajaxJ |= (ajaxJ - (circlel ? 4 : 4));
      do {
         ajaxJ %= Math.max(3, (3 << (Math.min(3, Math.abs((circlel ? 1 : 2))))));
         if (1370101 == ajaxJ) {
            break;
         }
      } while ((1370101 == ajaxJ) && ((traminie.size - 4) > 2 || 3 > (ajaxJ - 4)));
         ajaxJ |= ajaxJ & traminie.size;
      while (traminie[`${ajaxJ}`] == null) {
          let acceptedS = String.fromCharCode(104,95,54,54,95,105,110,116,102,108,111,97,116,0);
          let defaultprofilepick = 1.0;
          let targetT = 1;
          let yingZ = String.fromCharCode(102,101,116,99,104,101,100,95,100,95,57,52,0);
          let tumbnailA = true;
         traminie[acceptedS] = acceptedS.length;
         defaultprofilepick -= parseFloat(`${2}`);
         targetT *= yingZ.length;
         yingZ += "3";
         tumbnailA = yingZ.length == 68;
         break;
      }
         ajaxJ &= 1 | ajaxJ;
      while ((traminie.size - 5) < 5 && 1 < (5 - ajaxJ)) {
          let mathD = 1.0;
          let klevinH = String.fromCharCode(97,116,104,95,98,95,56,57,0);
          let searchg = String.fromCharCode(99,104,97,114,116,95,118,95,57,0);
          let play9 = [String.fromCharCode(111,112,116,105,109,105,122,101,114,95,49,95,53,49,0), String.fromCharCode(115,101,112,97,114,97,116,111,114,95,54,95,49,49,0), String.fromCharCode(115,119,114,101,115,97,109,112,108,101,95,56,95,55,51,0)];
         traminie = new Map([[`${traminie.size}`, 2 << (Math.min(5, Math.abs(parseInt(`${mathD}`))))]]);
         mathD *= parseFloat(`${play9.length % 1}`);
         klevinH = "2";
         searchg += `${play9.length}`;
         break;
      }
          let pangleR = 0;
          let mapbufferr = String.fromCharCode(100,101,99,105,100,101,95,50,95,49,48,0);
         circlel = 33 >= ajaxJ;
         pangleR -= pangleR << (Math.min(mapbufferr.length, 1));
         mapbufferr = `${mapbufferr.length}`;
          let bottom4 = [String.fromCharCode(99,111,117,110,116,113,117,97,110,116,95,57,95,50,48,0), String.fromCharCode(106,95,51,48,95,114,105,103,104,116,0), String.fromCharCode(97,95,51,55,95,109,97,105,110,115,116,97,103,101,0)];
          let floatingO = String.fromCharCode(114,101,97,115,111,110,115,95,119,95,57,52,0);
          let liveo = 3;
         ajaxJ += ajaxJ >> (Math.min(Math.abs(1), 3));
         bottom4.push(bottom4.length % (Math.max(4, liveo)));
         floatingO = `${liveo / (Math.max(2, 9))}`;
      policy9 += parseFloat(`${smallC * 3}`);
      if (policy9 == 654321.0) {
         break;
      }
   } while ((policy9 == 654321.0) && (4.77 <= (policy9 * 4.33) || referrer5));
   for (let u = 0; u < 3; u++) {
      refreshA = `${2 << (Math.min(3, refreshA.length))}`;
   }

    }
  };
  return (
    <RenderControl style={style.backContainer} onPress={onPressBack}>
      <Image
        resizeMode="contain"
        source={require('../images/icons/shootKickHooks.png')}
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
       let cornerkick0 = new Map([[String.fromCharCode(105,95,52,50,95,100,98,115,105,122,101,0),815], [String.fromCharCode(100,105,102,102,97,98,108,101,95,100,95,50,50,0),713], [String.fromCharCode(99,112,108,120,95,52,95,49,57,0),50]]);
    let reducer5 = 3.0;
    let headerZ = true;
    let configureX = new Map([[String.fromCharCode(97,95,52,55,95,115,101,116,115,0),333], [String.fromCharCode(114,95,57,48,95,109,98,115,101,103,109,101,110,116,97,116,105,111,110,0),20]]);
    let matchactivef = new Map([[String.fromCharCode(109,95,55,95,115,105,103,110,97,108,105,110,103,0),890], [String.fromCharCode(111,95,52,52,95,104,111,114,110,0),847], [String.fromCharCode(102,114,97,109,101,100,97,116,97,95,104,95,57,56,0),533]]);
    let graphE = new Map([[String.fromCharCode(97,95,52,54,95,99,111,101,102,102,0),601], [String.fromCharCode(102,95,57,53,95,114,97,110,115,105,116,105,111,110,0),740], [String.fromCharCode(100,95,57,49,95,112,114,105,110,116,102,0),563]]);
    let cored = true;
    let prediction_ = false;
    let carousel5 = String.fromCharCode(113,95,56,50,95,118,101,99,116,111,114,100,0);
    let iconO = 1.0;
    let huawei7 = [208, 791, 312];
    let switch_3eJ = String.fromCharCode(120,95,51,54,95,115,107,101,119,101,100,0);
   do {
      prediction_ = 72 == matchactivef.size;
      if (prediction_ ? !prediction_ : prediction_) {
         break;
      }
   } while ((!prediction_) && (prediction_ ? !prediction_ : prediction_));
   while (Array.from(graphE.values()).includes(iconO)) {
      iconO *= parseFloat(`${configureX.size | 1}`);
      break;
   }
   do {
      cored = String.fromCharCode(98,0) == carousel5;
      if (cored ? !cored : cored) {
         break;
      }
   } while ((cored) && (cored ? !cored : cored));

  const {isFullScreen} = useSelector(state => state.videoPlayerControl);
   if (prediction_) {
      reducer5 *= configureX.size / 1;
   }
      matchactivef[`${prediction_}`] = 1;
       let checkboxJ = new Map([[String.fromCharCode(104,97,108,108,95,49,95,50,48,0),992], [String.fromCharCode(115,112,101,101,100,117,112,95,111,95,53,0),493]]);
       let modal3 = false;
       let mbjscommonK = String.fromCharCode(119,95,50,95,118,116,97,103,0);
          let sellJ = String.fromCharCode(102,114,97,109,101,114,97,116,101,95,108,95,49,50,0);
          let options8 = 0;
         modal3 = null == checkboxJ[`${options8}`];
         sellJ += `${sellJ.length}`;
         options8 /= Math.max(4, sellJ.length);
      while (3 > (mbjscommonK.length >> (Math.min(Math.abs(5), 4))) || (5 >> (Math.min(4, Math.abs(checkboxJ.size)))) > 3) {
          let inouttargetredo = new Map([[String.fromCharCode(108,122,109,97,95,122,95,51,49,0),false ], [String.fromCharCode(116,95,52,54,95,114,97,110,100,0),false ], [String.fromCharCode(102,95,53,50,95,99,108,97,115,115,0),true ]]);
          let animationsW = 4;
          let mnewinterstitialQ = true;
          let awayteamfieldb = 4.0;
          let values8 = false;
         mbjscommonK += `${parseInt(`${awayteamfieldb}`) / 1}`;
         inouttargetredo = new Map([[`${values8}`, 1]]);
         animationsW |= 1 | animationsW;
         mnewinterstitialQ = 48 == animationsW;
         awayteamfieldb -= parseFloat(`${inouttargetredo.size % (Math.max(2, 3))}`);
         values8 = (values8 ? !mnewinterstitialQ : values8);
         break;
      }
      while (modal3) {
         modal3 = mbjscommonK.length >= 33;
         break;
      }
          let reactnativeultimatelistviewf = new Map([[String.fromCharCode(115,121,110,99,112,111,105,110,116,95,98,95,57,52,0),953], [String.fromCharCode(122,95,51,53,95,99,117,114,118,101,0),812], [String.fromCharCode(114,101,99,111,118,101,114,101,100,95,105,95,57,0),700]]);
         modal3 = (((!modal3 ? checkboxJ.size : 100) / (Math.max(checkboxJ.size, 8))) > 2);
         reactnativeultimatelistviewf[`${reactnativeultimatelistviewf.size}`] = 2;
         mbjscommonK = `${mbjscommonK.length}`;
         mbjscommonK = `${((modal3 ? 3 : 5) | checkboxJ.size)}`;
      if (!modal3) {
          let playlistB = String.fromCharCode(102,105,108,116,95,119,95,51,55,0);
          let megaphoneZ = 4.0;
          let type_luy = 2;
          let tailm = new Map([[String.fromCharCode(106,95,56,57,95,101,114,114,108,111,103,0),false ], [String.fromCharCode(102,117,108,108,115,99,114,101,101,110,95,107,95,53,55,0),false ], [String.fromCharCode(116,104,114,101,97,100,115,97,102,101,95,114,95,49,50,0),false ]]);
         modal3 = modal3 || megaphoneZ == 76.32;
         playlistB = `${type_luy}`;
         megaphoneZ -= type_luy / (Math.max(playlistB.length, 3));
         tailm = new Map([[`${tailm.size}`, (playlistB == String.fromCharCode(114,0) ? tailm.size : playlistB.length)]]);
      }
         modal3 = !modal3;
      while (modal3) {
         modal3 = mbjscommonK.length < checkboxJ.size;
         break;
      }
      graphE = new Map([[`${checkboxJ.size}`, 1 * checkboxJ.size]]);

  const dispatch = useDispatch();
      prediction_ = !prediction_;
   do {
       let favoriteO = 3.0;
       let eactN = String.fromCharCode(98,95,51,56,95,109,97,112,108,105,109,105,116,0);
       let pushw = 4;
      for (let y = 0; y < 3; y++) {
         pushw += 2;
      }
      for (let n = 0; n < 1; n++) {
         favoriteO += parseFloat(`${eactN.length % (Math.max(6, pushw))}`);
      }
         favoriteO *= parseFloat(`${parseInt(`${favoriteO}`)}`);
      do {
          let defaultlogok = String.fromCharCode(112,97,114,101,110,116,104,101,115,105,115,95,106,95,51,50,0);
         favoriteO /= Math.max(parseFloat(`${2}`), 5);
         defaultlogok += `${1 >> (Math.min(5, defaultlogok.length))}`;
         if (favoriteO == 3122076.0) {
            break;
         }
      } while ((!eactN.endsWith(`${favoriteO}`)) && (favoriteO == 3122076.0));
      if (4 >= (eactN.length + 4)) {
         eactN += `${eactN.length & 3}`;
      }
         pushw -= eactN.length;
      for (let s = 0; s < 2; s++) {
         favoriteO -= parseFloat(`${eactN.length}`);
      }
         eactN = `${(String.fromCharCode(70,0) == eactN ? eactN.length : parseInt(`${favoriteO}`))}`;
       let with_zva = String.fromCharCode(112,95,56,57,95,116,105,109,101,105,110,102,111,114,99,101,0);
      cored = carousel5 == String.fromCharCode(112,0) || 61 <= graphE.size;
      if (cored ? !cored : cored) {
         break;
      }
   } while ((!cored) && (cored ? !cored : cored));
   do {
      graphE[`${iconO}`] = configureX.size;
      if (graphE.size == 1839113) {
         break;
      }
   } while ((4 <= graphE.size) && (graphE.size == 1839113));

  const onPressToggleFullScreen = () => {

   if ((4 + carousel5.length) >= 2) {
      carousel5 += "2";
   }
       let faviconn = String.fromCharCode(97,99,102,105,108,116,101,114,95,108,95,49,50,0);
         faviconn += `${faviconn.length}`;
       let foundO = 5.0;
       let stations3 = 4.0;
      for (let u = 0; u < 2; u++) {
         stations3 -= faviconn.length - parseInt(`${foundO}`);
      }
      cored = !prediction_ && !cored;
      reducer5 /= Math.max(4, 1 & parseInt(`${iconO}`));
    dispatch(setVideoFullScreen(!isFullScreen));
   if ((3.64 * iconO) >= 2.48 && (1 * matchactivef.size) >= 3) {
       let viewerl = String.fromCharCode(117,95,53,50,95,115,101,114,105,97,108,0);
       let orangeclockZ = 0;
       let unimplementedviewe = 0.0;
       let iconeditS = String.fromCharCode(121,97,100,105,102,95,51,95,50,57,0);
       let detailsM = String.fromCharCode(108,105,98,115,115,104,95,122,95,53,55,0);
      while ((orangeclockZ - viewerl.length) >= 3 && 3 >= (3 - viewerl.length)) {
         orangeclockZ ^= iconeditS.length & 1;
         break;
      }
         iconeditS = `${2 | detailsM.length}`;
      if (2 <= detailsM.length) {
         viewerl += "2";
      }
      while (!viewerl.startsWith(`${orangeclockZ}`)) {
          let libswscalej = String.fromCharCode(100,101,98,108,111,99,107,105,110,103,95,99,95,52,53,0);
          let whitetick8 = 2;
          let dependenciesY = String.fromCharCode(105,112,111,108,95,119,95,51,53,0);
          let theme_ = 0.0;
         orangeclockZ |= 3 % (Math.max(10, orangeclockZ));
         libswscalej += `${libswscalej.length << (Math.min(2, Math.abs(whitetick8)))}`;
         whitetick8 -= (libswscalej == String.fromCharCode(79,0) ? libswscalej.length : parseInt(`${theme_}`));
         dependenciesY = `${libswscalej.length}`;
         theme_ *= parseFloat(`${1}`);
         break;
      }
      for (let e = 0; e < 1; e++) {
          let cancel3 = String.fromCharCode(101,95,54,52,95,102,111,110,116,0);
          let gpayv = String.fromCharCode(114,95,51,54,95,98,105,116,114,97,116,101,0);
          let mbbanner6 = [399, 518, 793];
          let guideS = String.fromCharCode(106,95,54,50,0);
         orangeclockZ += 2;
         cancel3 += `${cancel3.length & guideS.length}`;
         gpayv += `${(String.fromCharCode(66,0) == gpayv ? cancel3.length : gpayv.length)}`;
         mbbanner6 = [(String.fromCharCode(73,0) == gpayv ? cancel3.length : gpayv.length)];
         guideS = `${guideS.length - 2}`;
      }
      if (orangeclockZ == 4) {
         unimplementedviewe += parseInt(`${unimplementedviewe}`);
      }
      if (3 < (viewerl.length >> (Math.min(2, Math.abs(orangeclockZ))))) {
          let phoneshare8 = String.fromCharCode(120,95,49,57,95,101,116,105,109,101,0);
          let refreshA = 3.0;
          let homes = new Map([[String.fromCharCode(115,95,52,55,95,115,116,114,105,110,103,117,116,105,108,115,0),904], [String.fromCharCode(108,95,56,54,95,109,97,100,100,0),98]]);
          let dependenciesx = [547, 208, 195];
         orangeclockZ *= dependenciesx.length | 3;
         phoneshare8 = `${phoneshare8.length}`;
         refreshA *= parseFloat(`${homes.size}`);
         homes[`${refreshA}`] = phoneshare8.length;
         dependenciesx = [(phoneshare8 == String.fromCharCode(101,0) ? phoneshare8.length : homes.size)];
      }
         iconeditS = `${(viewerl == String.fromCharCode(90,0) ? viewerl.length : orangeclockZ)}`;
      while (5 == (orangeclockZ << (Math.min(Math.abs(5), 4)))) {
         viewerl = `${parseInt(`${unimplementedviewe}`)}`;
         break;
      }
         iconeditS += `${viewerl.length}`;
         detailsM = "1";
         orangeclockZ %= Math.max(2, (String.fromCharCode(116,0) == viewerl ? iconeditS.length : viewerl.length));
         unimplementedviewe -= 1;
       let rewind_ = String.fromCharCode(118,101,114,116,95,119,95,49,48,48,0);
       let next3 = String.fromCharCode(116,114,97,100,101,95,106,95,49,53,0);
      for (let j = 0; j < 1; j++) {
         next3 = `${1 >> (Math.min(3, rewind_.length))}`;
      }
      iconO /= Math.max(5, parseFloat(`${configureX.size % (Math.max(1, 3))}`));
   }
      carousel5 = `${cornerkick0.size}`;
      configureX = new Map([[`${headerZ}`, 3 << (Math.min(Math.abs(parseInt(`${iconO}`)), 1))]]);

  };
      cored = reducer5 > iconO;
       let default_ld = String.fromCharCode(98,105,103,110,117,109,95,101,95,57,51,0);
       let cornerkickl = [String.fromCharCode(99,108,108,105,95,113,95,50,49,0), String.fromCharCode(116,119,105,100,100,108,101,95,99,95,54,57,0)];
      for (let k = 0; k < 2; k++) {
          let down3 = 5;
         default_ld = `${cornerkickl.length}`;
         down3 %= Math.max(down3, 1);
      }
         default_ld = `${default_ld.length & 1}`;
      while ((cornerkickl.length * 3) < 4 || 3 < (3 * cornerkickl.length)) {
         default_ld = "3";
         break;
      }
          let firebaseh = 1;
          let selectionA = 2;
          let trophyt = [String.fromCharCode(98,95,52,57,95,115,116,109,116,0), String.fromCharCode(99,111,117,110,116,101,114,115,95,101,95,49,56,0)];
         cornerkickl = [firebaseh << (Math.min(Math.abs(1), 1))];
         firebaseh >>= Math.min(Math.abs(1 & selectionA), 4);
         selectionA <<= Math.min(trophyt.length, 5);
         trophyt = [2 + trophyt.length];
      do {
         cornerkickl.push(1 * default_ld.length);
         if (3449371 == cornerkickl.length) {
            break;
         }
      } while ((3449371 == cornerkickl.length) && (!default_ld.includes(`${cornerkickl.length}`)));
      if (!default_ld.endsWith(`${cornerkickl.length}`)) {
         cornerkickl.push(default_ld.length);
      }
      cored = 29 > matchactivef.size || configureX.size > 29;
   if ((3 + matchactivef.size) == 3 && (cornerkick0.size + matchactivef.size) == 3) {
      cornerkick0 = new Map([[`${reducer5}`, 2 | parseInt(`${reducer5}`)]]);
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
      configureX = new Map([[`${cored}`, ((headerZ ? 3 : 2) % 1)]]);
   for (let a = 0; a < 3; a++) {
       let libsentrym = 3.0;
          let mergerZ = String.fromCharCode(112,114,101,118,105,111,117,115,95,49,95,52,57,0);
          let iconpipexpandB = 2;
         libsentrym /= Math.max(1, mergerZ.length);
         mergerZ += `${iconpipexpandB}`;
      do {
         libsentrym -= parseInt(`${libsentrym}`) >> (Math.min(2, Math.abs(2)));
         if (libsentrym == 3547836.0) {
            break;
         }
      } while (((3.31 + libsentrym) > 3.60 && 5.55 > (libsentrym * 3.31)) && (libsentrym == 3547836.0));
         libsentrym -= parseInt(`${libsentrym}`);
      cored = parseInt(`${iconO}`) < matchactivef.size;
   }
   if (3 >= (huawei7.length / (Math.max(8, parseInt(`${iconO}`)))) || (iconO / (Math.max(1.46, 9))) >= 1.35) {
      iconO -= parseFloat(`${matchactivef.size}`);
   }

};

export const PlayPause = () => {
       let unimplementedviewJ = true;
    let libfollyy = 5.0;
    let libflippers = new Map([[String.fromCharCode(106,95,51,53,95,97,112,112,114,111,120,105,109,97,116,105,111,110,0),806], [String.fromCharCode(105,112,118,105,100,101,111,95,116,95,54,52,0),351], [String.fromCharCode(97,109,101,120,95,99,95,49,51,0),178]]);
    let minimizeD = new Map([[String.fromCharCode(115,112,108,105,99,101,95,116,95,54,48,0),42], [String.fromCharCode(120,95,49,57,95,116,111,112,105,99,97,108,0),918]]);
    let link4 = 1;
    let bingP = String.fromCharCode(115,117,98,116,105,116,108,101,95,109,95,50,52,0);
    let chinasame1 = 5.0;
    let iconsaveimagei = 0.0;
    let logouto = new Map([[String.fromCharCode(103,95,55,53,95,98,117,102,102,101,114,101,100,0),String.fromCharCode(111,100,101,114,110,95,53,95,53,54,0)], [String.fromCharCode(104,95,50,51,95,118,97,114,105,97,110,116,0),String.fromCharCode(107,109,118,99,95,112,95,50,0)], [String.fromCharCode(108,95,57,54,95,108,108,100,98,105,110,105,116,0),String.fromCharCode(99,111,109,112,101,110,115,97,116,101,95,103,95,49,0)]]);
    let promotionp = String.fromCharCode(110,95,54,49,95,115,109,111,111,116,104,101,110,0);
    let sporte = 4.0;
    let reducerm = 0.0;
    let libreacte = 4.0;
    let network9 = 5.0;
   do {
       let rncore4 = 1.0;
       let penaltyQ = String.fromCharCode(116,95,57,48,0);
       let splashL = String.fromCharCode(121,95,51,57,95,112,115,100,115,112,0);
       let sharedk = [790, 525];
          let filedE = String.fromCharCode(108,108,100,98,105,110,105,116,95,52,95,50,0);
          let watchn = String.fromCharCode(116,95,51,55,95,98,108,111,99,107,104,97,115,104,0);
          let frame_2O = [958, 490, 478];
         penaltyQ += `${frame_2O.length * 1}`;
         filedE = `${watchn.length * filedE.length}`;
         watchn = `${filedE.length / 1}`;
         frame_2O = [watchn.length];
         penaltyQ += `${parseInt(`${rncore4}`) & 3}`;
      while ((5 + sharedk.length) == 4) {
          let otherG = 0;
         sharedk.push(penaltyQ.length);
         otherG <<= Math.min(4, Math.abs(3 | otherG));
         break;
      }
       let umengZ = 4;
       let encryptl = 5;
         encryptl /= Math.max(3, umengZ & encryptl);
         sharedk = [encryptl];
      do {
         sharedk.push(splashL.length);
         if (sharedk.length == 4400446) {
            break;
         }
      } while ((5 < (sharedk.length >> (Math.min(Math.abs(4), 1))) && 1 < (4 >> (Math.min(1, splashL.length)))) && (sharedk.length == 4400446));
         splashL += `${encryptl}`;
         rncore4 *= parseFloat(`${1}`);
          let previewb = 2;
          let static_4t = String.fromCharCode(110,95,55,57,95,116,111,103,103,108,101,0);
         rncore4 /= Math.max(parseFloat(`${sharedk.length / (Math.max(penaltyQ.length, 3))}`), 1);
         previewb >>= Math.min(Math.abs(previewb), 2);
         static_4t = `${previewb}`;
          let launchN = String.fromCharCode(100,95,55,49,95,105,110,115,101,114,116,0);
          let unimplementedviewW = 4;
         encryptl >>= Math.min(Math.abs(2), 2);
         launchN += `${launchN.length / (Math.max(4, unimplementedviewW))}`;
         unimplementedviewW *= launchN.length | unimplementedviewW;
         penaltyQ += `${encryptl}`;
      libfollyy *= (parseFloat(`${splashL == String.fromCharCode(111,0) ? splashL.length : parseInt(`${rncore4}`)}`));
      if (libfollyy == 1595237.0) {
         break;
      }
   } while ((1.20 >= (4.85 + libfollyy) && 4.85 >= libfollyy) && (libfollyy == 1595237.0));
   for (let e = 0; e < 2; e++) {
      minimizeD[`${iconsaveimagei}`] = 2 * parseInt(`${libfollyy}`);
   }
   for (let l = 0; l < 2; l++) {
      chinasame1 *= parseFloat(`${minimizeD.size - parseInt(`${libfollyy}`)}`);
   }

  const dispatch = useDispatch();
   if (1 > (3 + link4) && 4.38 > (1.61 * chinasame1)) {
      link4 += promotionp.length - 2;
   }
      link4 &= parseInt(`${chinasame1}`);
      promotionp = `${promotionp.length}`;

  const {isPaused} = useSelector(state => state.videoPlayerControl);
   for (let x = 0; x < 2; x++) {
      libfollyy += parseFloat(`${3}`);
   }
   do {
      promotionp = `${2 & parseInt(`${chinasame1}`)}`;
      if (296178 == promotionp.length) {
         break;
      }
   } while ((296178 == promotionp.length) && (1 >= (link4 >> (Math.min(Math.abs(1), 5))) || (1 >> (Math.min(4, Math.abs(link4)))) >= 2));
   do {
      minimizeD[`${chinasame1}`] = parseInt(`${chinasame1}`);
      if (4637995 == minimizeD.size) {
         break;
      }
   } while (((promotionp.length >> (Math.min(Math.abs(4), 3))) == 5 && (4 >> (Math.min(3, promotionp.length))) == 2) && (4637995 == minimizeD.size));

  const onPress = () => {

       let defaultplayerimg_ = new Map([[String.fromCharCode(115,116,114,101,97,109,115,95,101,95,54,55,0),267], [String.fromCharCode(105,95,51,56,95,108,97,100,100,101,114,115,116,101,112,0),24], [String.fromCharCode(108,95,56,95,115,101,97,100,0),715]]);
         defaultplayerimg_[`${defaultplayerimg_.size}`] = defaultplayerimg_.size & 2;
      if ((4 * defaultplayerimg_.size) > 2 || 2 > (4 * defaultplayerimg_.size)) {
          let iconshareE = 5;
          let h_centerU = new Map([[String.fromCharCode(105,110,116,114,97,120,98,108,111,99,107,95,110,95,55,52,0),245], [String.fromCharCode(101,95,55,55,95,110,97,116,105,118,101,108,121,0),309]]);
         defaultplayerimg_ = new Map([[`${defaultplayerimg_.size}`, defaultplayerimg_.size ^ iconshareE]]);
         iconshareE += 3;
         h_centerU = new Map([[`${h_centerU.size}`, h_centerU.size << (Math.min(Math.abs(2), 5))]]);
      }
         defaultplayerimg_ = new Map([[`${defaultplayerimg_.size}`, 2 + defaultplayerimg_.size]]);
      libfollyy /= Math.max((parseFloat(`${String.fromCharCode(49,0) == promotionp ? promotionp.length : (unimplementedviewJ ? 1 : 5)}`)), 3);
   do {
       let lineJ = 4;
       let webviewh = 4.0;
       let injuryl = String.fromCharCode(114,95,51,53,95,103,114,97,100,102,117,110,0);
       let textinput9 = String.fromCharCode(101,120,116,101,110,115,105,111,110,115,95,55,95,52,55,0);
          let searchbar7 = 2.0;
          let benefitD = 0.0;
          let leagueH = 1.0;
         textinput9 += `${(String.fromCharCode(77,0) == textinput9 ? lineJ : textinput9.length)}`;
         searchbar7 -= parseFloat(`${1 >> (Math.min(Math.abs(parseInt(`${leagueH}`)), 5))}`);
         benefitD -= parseInt(`${searchbar7}`) - 2;
         leagueH /= Math.max(parseFloat(`${parseInt(`${leagueH}`) & parseInt(`${benefitD}`)}`), 4);
      while (injuryl.length >= 4) {
         lineJ += lineJ;
         break;
      }
         webviewh *= 2;
         injuryl += `${injuryl.length}`;
         webviewh /= Math.max(1, textinput9.length);
          let profilet = false;
          let notificationfillemptyp = new Map([[String.fromCharCode(99,95,57,49,0),488], [String.fromCharCode(118,95,56,52,95,111,115,100,101,112,0),487], [String.fromCharCode(109,118,112,114,111,98,115,95,109,95,52,49,0),84]]);
         lineJ ^= ((profilet ? 2 : 5) / 3);
         profilet = 89 >= notificationfillemptyp.size;
         notificationfillemptyp = new Map([[`${notificationfillemptyp.size}`, notificationfillemptyp.size]]);
         lineJ >>= Math.min(Math.abs(1 << (Math.min(Math.abs(parseInt(`${webviewh}`)), 4))), 3);
          let nativemoduleJ = String.fromCharCode(113,95,49,52,95,114,101,100,97,99,116,101,100,0);
          let appst = new Map([[String.fromCharCode(98,105,103,105,110,116,95,112,95,51,50,0),901], [String.fromCharCode(113,95,57,55,95,109,111,100,117,108,97,116,101,0),148], [String.fromCharCode(117,110,116,114,97,99,107,95,97,95,53,49,0),792]]);
          let ginit_ibS = [726, 21, 256];
         lineJ += lineJ;
         nativemoduleJ = `${3 >> (Math.min(2, ginit_ibS.length))}`;
         appst = new Map([[`${appst.size}`, nativemoduleJ.length % 3]]);
         ginit_ibS.push(appst.size);
         injuryl = `${(String.fromCharCode(74,0) == injuryl ? injuryl.length : lineJ)}`;
         injuryl = `${lineJ}`;
      while (4.5 < (3.42 * webviewh)) {
          let componentregistryQ = String.fromCharCode(109,95,52,56,95,109,97,120,105,109,105,122,101,100,0);
          let tailC = 3.0;
          let completes = String.fromCharCode(102,111,115,115,105,108,95,112,95,57,49,0);
          let iconeditW = [String.fromCharCode(109,105,108,108,101,114,95,116,95,56,50,0), String.fromCharCode(103,95,50,49,95,100,105,118,105,100,105,110,103,0)];
         lineJ <<= Math.min(componentregistryQ.length, 5);
         componentregistryQ += `${parseInt(`${tailC}`) / (Math.max(iconeditW.length, 6))}`;
         tailC += completes.length - iconeditW.length;
         completes = `${1 << (Math.min(3, Math.abs(parseInt(`${tailC}`))))}`;
         break;
      }
       let iconscheduleP = false;
       let whatsapp9 = true;
      unimplementedviewJ = webviewh >= 78.88;
      if (unimplementedviewJ ? !unimplementedviewJ : unimplementedviewJ) {
         break;
      }
   } while ((unimplementedviewJ ? !unimplementedviewJ : unimplementedviewJ) && ((5.95 + iconsaveimagei) > 1.61));
      iconsaveimagei += parseFloat(`${1 + minimizeD.size}`);
    dispatch(togglePlayPaused());
      sporte /= Math.max(4, parseFloat(`${link4 << (Math.min(Math.abs(parseInt(`${reducerm}`)), 4))}`));
      promotionp = `${parseInt(`${sporte}`)}`;
   while (libfollyy >= 1.71) {
      libfollyy *= (parseFloat(`${parseInt(`${sporte}`) - (unimplementedviewJ ? 1 : 2)}`));
      break;
   }

  };
   if (1.98 < (1 * iconsaveimagei)) {
      sporte *= parseFloat(`${1}`);
   }
       let readH = 0.0;
       let singaporeW = [345, 768, 778];
      for (let h = 0; h < 1; h++) {
         singaporeW.push(singaporeW.length);
      }
      for (let r = 0; r < 2; r++) {
         readH -= parseFloat(`${parseInt(`${readH}`) << (Math.min(4, Math.abs(3)))}`);
      }
      if (4.69 <= (2.59 - readH) && (singaporeW.length >> (Math.min(Math.abs(5), 5))) <= 2) {
         singaporeW.push(parseInt(`${readH}`) / 3);
      }
         readH += parseFloat(`${parseInt(`${readH}`)}`);
      for (let y = 0; y < 3; y++) {
         readH /= Math.max(parseFloat(`${singaporeW.length * parseInt(`${readH}`)}`), 4);
      }
      if (singaporeW.length >= 2) {
         readH *= parseFloat(`${parseInt(`${readH}`) ^ 2}`);
      }
      iconsaveimagei /= Math.max(parseFloat(`${parseInt(`${reducerm}`)}`), 2);
   for (let j = 0; j < 1; j++) {
      sporte += parseFloat(`${link4 / (Math.max(logouto.size, 6))}`);
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
       let neona = String.fromCharCode(114,95,49,53,95,99,111,112,121,100,97,116,97,0);
       let libsgcoreV = String.fromCharCode(100,101,118,105,100,101,95,49,95,50,0);
       let leagueY = false;
      do {
         libsgcoreV = `${(2 + (leagueY ? 2 : 1))}`;
         if (libsgcoreV.length == 2706703) {
            break;
         }
      } while ((libsgcoreV.length == 2706703) && (libsgcoreV.length <= 2));
         leagueY = String.fromCharCode(72,0) == libsgcoreV;
         neona = `${(neona == String.fromCharCode(73,0) ? neona.length : (leagueY ? 5 : 3))}`;
      for (let g = 0; g < 2; g++) {
          let episodesW = String.fromCharCode(108,108,100,98,105,110,105,116,95,57,95,57,50,0);
          let iconv = [677, 89];
          let alerti = 5.0;
          let telemetryR = 3.0;
          let klevinQ = true;
         neona += `${((leagueY ? 1 : 5) << (Math.min(Math.abs(parseInt(`${alerti}`)), 5)))}`;
         episodesW = "2";
         iconv.push(iconv.length / (Math.max(episodesW.length, 2)));
         alerti /= Math.max(2, (3 * (klevinQ ? 2 : 5)));
         telemetryR /= Math.max((parseFloat(`${(klevinQ ? 1 : 5) % (Math.max(parseInt(`${telemetryR}`), 9))}`)), 1);
      }
         libsgcoreV += `${libsgcoreV.length ^ neona.length}`;
      do {
          let private_qA = new Map([[String.fromCharCode(115,110,97,107,101,95,112,95,49,49,0),614], [String.fromCharCode(104,95,52,51,95,112,97,114,97,109,103,101,110,0),525]]);
          let completek = 3.0;
          let pagination0 = 1.0;
         leagueY = libsgcoreV.length == pagination0;
         private_qA[`${completek}`] = private_qA.size;
         completek += parseFloat(`${parseInt(`${completek}`)}`);
         pagination0 += private_qA.size | 1;
         if (leagueY ? !leagueY : leagueY) {
            break;
         }
      } while ((leagueY ? !leagueY : leagueY) && (libsgcoreV.includes(`${leagueY}`)));
      do {
         libsgcoreV = "1";
         if (3923554 == libsgcoreV.length) {
            break;
         }
      } while ((!libsgcoreV.startsWith(`${leagueY}`)) && (3923554 == libsgcoreV.length));
         neona += `${3 << (Math.min(5, neona.length))}`;
      if (!leagueY && 4 >= neona.length) {
         leagueY = libsgcoreV == neona;
      }
      logouto = new Map([[`${libflippers.size}`, libflippers.size]]);
      libfollyy += parseFloat(`${logouto.size >> (Math.min(Math.abs(3), 4))}`);
   for (let m = 0; m < 2; m++) {
      logouto[bingP] = (String.fromCharCode(118,0) == bingP ? link4 : bingP.length);
   }

};
export const Refresh = () => {
       let eighteen9 = [String.fromCharCode(117,110,116,121,112,101,100,95,104,95,52,56,0), String.fromCharCode(103,101,116,104,111,115,116,98,121,110,97,109,101,95,100,95,57,57,0), String.fromCharCode(119,95,54,49,95,115,101,103,102,101,97,116,117,114,101,0)];
    let castingz = 1.0;
    let fcdaebecbcbafcdfceaaeccfeacdb9 = String.fromCharCode(100,105,115,112,108,97,99,101,109,101,110,116,95,57,95,54,52,0);
    let templateprocessort = String.fromCharCode(121,95,55,48,95,110,117,109,115,0);
    let bootsplasha = String.fromCharCode(118,95,50,48,95,111,99,115,112,105,100,0);
    let c_viewu = String.fromCharCode(116,120,116,111,98,106,95,107,95,50,54,0);
    let arrowd = String.fromCharCode(112,95,52,50,95,109,101,110,117,115,0);
    let projectq = String.fromCharCode(103,95,53,55,95,105,102,105,108,116,101,114,0);
    let ocopy_ds = [644, 110, 250];
    let placeholder5 = 5.0;
      c_viewu = `${(bootsplasha == String.fromCharCode(76,0) ? bootsplasha.length : parseInt(`${castingz}`))}`;
      arrowd = `${arrowd.length >> (Math.min(4, c_viewu.length))}`;

  const dispatch = useDispatch();
   do {
      fcdaebecbcbafcdfceaaeccfeacdb9 = `${arrowd.length}`;
      if (3195585 == fcdaebecbcbafcdfceaaeccfeacdb9.length) {
         break;
      }
   } while ((!fcdaebecbcbafcdfceaaeccfeacdb9.endsWith(`${eighteen9.length}`)) && (3195585 == fcdaebecbcbafcdfceaaeccfeacdb9.length));
       let a_hashT = 5;
       let plashB = 0;
      do {
          let final_lsj = String.fromCharCode(102,95,49,57,95,115,116,121,108,101,115,0);
          let injurym = String.fromCharCode(115,95,53,49,95,99,111,109,98,105,110,101,114,0);
         plashB &= final_lsj.length;
         final_lsj += `${injurym.length}`;
         injurym += `${2 - injurym.length}`;
         if (plashB == 3713335) {
            break;
         }
      } while ((plashB == 3713335) && (a_hashT > 5));
      do {
          let filledt = String.fromCharCode(112,95,51,50,95,115,104,97,114,101,115,0);
          let hooksd = 3.0;
         plashB <<= Math.min(5, Math.abs(plashB));
         filledt += `${parseInt(`${hooksd}`)}`;
         hooksd += (String.fromCharCode(52,0) == filledt ? filledt.length : parseInt(`${hooksd}`));
         if (plashB == 3958708) {
            break;
         }
      } while ((4 <= a_hashT) && (plashB == 3958708));
      arrowd = "2";

  const onPress = () => {

       let trophyi = [438, 668];
       let final_4r = 4;
         trophyi = [trophyi.length - 1];
      while (!trophyi.includes(final_4r)) {
         trophyi.push(trophyi.length << (Math.min(Math.abs(1), 1)));
         break;
      }
         final_4r *= 3;
      for (let p = 0; p < 2; p++) {
         final_4r ^= 1 & final_4r;
      }
         final_4r -= final_4r;
         final_4r += 1 >> (Math.min(Math.abs(final_4r), 2));
      eighteen9.push(2);
   for (let t = 0; t < 2; t++) {
       let circleO = String.fromCharCode(117,115,108,101,101,112,95,50,95,54,50,0);
      if (circleO != circleO) {
         circleO += `${(circleO == String.fromCharCode(73,0) ? circleO.length : circleO.length)}`;
      }
         circleO = "2";
      while (circleO.length >= 2) {
         circleO += "1";
         break;
      }
      templateprocessort += `${(fcdaebecbcbafcdfceaaeccfeacdb9 == String.fromCharCode(73,0) ? fcdaebecbcbafcdfceaaeccfeacdb9.length : parseInt(`${castingz}`))}`;
   }
    dispatch(setVideoPlayerAction('refresh'));
   do {
      arrowd += "2";
      if (1782551 == arrowd.length) {
         break;
      }
   } while ((3 <= projectq.length) && (1782551 == arrowd.length));
   while (!bootsplasha.startsWith(`${templateprocessort.length}`)) {
       let controlD = new Map([[String.fromCharCode(115,117,98,111,98,106,101,99,116,95,49,95,51,54,0),599], [String.fromCharCode(114,101,99,111,118,101,114,95,113,95,57,51,0),408], [String.fromCharCode(108,111,103,108,101,118,101,108,95,101,95,53,54,0),893]]);
       let sourcey = String.fromCharCode(101,95,54,52,95,99,111,110,102,105,110,101,100,0);
       let zoomo = String.fromCharCode(99,101,110,116,114,101,95,55,95,56,49,0);
         controlD[sourcey] = 1;
         sourcey = "3";
         zoomo += `${sourcey.length}`;
      if (zoomo.length >= 5) {
         zoomo = "1";
      }
         controlD[sourcey] = (sourcey == String.fromCharCode(85,0) ? sourcey.length : zoomo.length);
          let thailandM = 4.0;
          let const_aeV = 1;
          let umengn = 5;
         controlD = new Map([[`${const_aeV}`, const_aeV]]);
         thailandM /= Math.max(5, parseFloat(`${umengn}`));
         umengn >>= Math.min(Math.abs(parseInt(`${thailandM}`)), 5);
      for (let x = 0; x < 1; x++) {
         zoomo = `${sourcey.length}`;
      }
      if (zoomo.length >= controlD.size) {
         controlD[`${sourcey}`] = controlD.size >> (Math.min(Math.abs(3), 1));
      }
         sourcey += `${zoomo.length}`;
      bootsplasha += `${(String.fromCharCode(103,0) == bootsplasha ? bootsplasha.length : fcdaebecbcbafcdfceaaeccfeacdb9.length)}`;
      break;
   }

  };
      templateprocessort = `${(fcdaebecbcbafcdfceaaeccfeacdb9 == String.fromCharCode(81,0) ? fcdaebecbcbafcdfceaaeccfeacdb9.length : eighteen9.length)}`;
   do {
      templateprocessort = `${fcdaebecbcbafcdfceaaeccfeacdb9.length + 3}`;
      if (2433917 == templateprocessort.length) {
         break;
      }
   } while ((3 == fcdaebecbcbafcdfceaaeccfeacdb9.length) && (2433917 == templateprocessort.length));

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
      arrowd = `${templateprocessort.length}`;
      if (arrowd == String.fromCharCode(49,105,98,0)) {
         break;
      }
   } while ((arrowd == String.fromCharCode(49,105,98,0)) && (arrowd.length < 1));
   if (c_viewu.startsWith(`${ocopy_ds.length}`)) {
      c_viewu = `${c_viewu.length - 2}`;
   }

};

export const Pip = () => {
       let matchq = new Map([[String.fromCharCode(115,117,114,102,97,99,101,95,102,95,51,49,0),206], [String.fromCharCode(98,117,102,102,101,114,105,110,103,95,116,95,56,54,0),515], [String.fromCharCode(118,95,51,57,95,112,108,97,110,101,115,0),133]]);
    let sideD = String.fromCharCode(111,112,101,110,99,108,95,115,95,52,54,0);
    let long_9g_ = String.fromCharCode(97,95,55,50,95,114,112,99,115,0);
    let typingH = 5.0;
    let buffer0 = String.fromCharCode(115,95,57,48,95,115,116,114,116,111,107,0);
    let penaltygoalr = 0.0;
    let friendsG = 5.0;
    let files = String.fromCharCode(117,110,109,105,120,95,49,95,49,48,48,0);
    let baidud = String.fromCharCode(122,95,55,55,95,115,101,114,105,97,108,105,122,101,114,0);
   do {
      friendsG -= parseInt(`${typingH}`);
      if (4775661.0 == friendsG) {
         break;
      }
   } while ((4 == (parseInt(`${friendsG}`) * sideD.length)) && (4775661.0 == friendsG));

  const dispatch = useDispatch();
   if (2 < (buffer0.length * 4) || (buffer0.length << (Math.min(Math.abs(4), 2))) < 5) {
      typingH *= parseFloat(`${buffer0.length % (Math.max(1, parseInt(`${penaltygoalr}`)))}`);
   }

  const {source, matchId, videoType} = useSelector(
    state => state.videoPlayerControl,
  );
   if ((long_9g_.length << (Math.min(1, Math.abs(matchq.size)))) <= 2) {
       let catagory0 = new Map([[String.fromCharCode(109,105,108,108,105,115,95,118,95,49,51,0),String.fromCharCode(114,101,116,114,121,97,98,108,101,95,116,95,54,0)], [String.fromCharCode(120,95,52,50,95,108,111,115,116,0),String.fromCharCode(121,117,118,112,116,111,117,121,118,121,95,107,95,57,56,0)], [String.fromCharCode(112,103,109,120,95,53,95,48,0),String.fromCharCode(109,95,50,48,95,112,114,111,99,101,115,115,105,110,103,0)]]);
       let chart2 = [917, 399, 31];
       let downarrow9 = String.fromCharCode(97,95,50,51,95,97,110,97,108,121,115,101,0);
       let rewardvideoT = [789, 449, 646];
       let favoriteH = 1.0;
      for (let u = 0; u < 3; u++) {
         rewardvideoT = [downarrow9.length % (Math.max(2, 3))];
      }
         rewardvideoT.push(parseInt(`${favoriteH}`) * rewardvideoT.length);
          let renewN = [384, 200, 774];
         rewardvideoT.push(downarrow9.length << (Math.min(Math.abs(2), 1)));
         renewN.push(renewN.length);
      if ((3 | downarrow9.length) < 5) {
         rewardvideoT = [1 | catagory0.size];
      }
         chart2 = [parseInt(`${favoriteH}`)];
         chart2.push(rewardvideoT.length);
      do {
         catagory0[`${downarrow9}`] = 3 << (Math.min(4, Math.abs(catagory0.size)));
         if (catagory0.size == 2077287) {
            break;
         }
      } while ((catagory0.size == 2077287) && (Array.from(catagory0.keys()).includes(`${chart2.length}`)));
       let codegenm = [338, 635];
         chart2 = [3];
      if (!downarrow9.endsWith(`${rewardvideoT.length}`)) {
         downarrow9 += `${3 & chart2.length}`;
      }
          let promotionE = String.fromCharCode(97,110,97,108,121,122,105,110,103,95,48,95,56,55,0);
          let footballfiledlayoutm = 4.0;
         downarrow9 = `${parseInt(`${footballfiledlayoutm}`)}`;
         promotionE += `${promotionE.length * promotionE.length}`;
         footballfiledlayoutm /= Math.max((parseFloat(`${promotionE == String.fromCharCode(107,0) ? promotionE.length : promotionE.length}`)), 3);
         codegenm.push((String.fromCharCode(74,0) == downarrow9 ? downarrow9.length : rewardvideoT.length));
       let linkM = String.fromCharCode(97,116,114,95,101,95,51,54,0);
         favoriteH -= parseFloat(`${rewardvideoT.length}`);
          let iconmorea = [969, 966];
          let libcxxcomponents_ = [880, 160];
          let albumH = String.fromCharCode(105,110,116,101,114,115,112,101,114,115,101,95,50,95,52,50,0);
         codegenm = [codegenm.length];
         iconmorea = [albumH.length];
         libcxxcomponents_ = [2];
         albumH += `${libcxxcomponents_.length}`;
      matchq[downarrow9] = rewardvideoT.length;
   }

  const onPress = () => {

       let manifestV = 3.0;
       let mbbannerU = [736, 877];
          let final_a3d = String.fromCharCode(109,105,99,114,111,100,118,100,95,118,95,53,48,0);
          let singaporeU = 5.0;
          let privatechatbgU = false;
         mbbannerU.push(1);
         final_a3d = `${((privatechatbgU ? 5 : 5))}`;
         singaporeU *= (parseFloat(`${String.fromCharCode(101,0) == final_a3d ? parseInt(`${singaporeU}`) : final_a3d.length}`));
         privatechatbgU = !final_a3d.endsWith(`${singaporeU}`);
          let mbnativeadvancedO = String.fromCharCode(120,105,112,104,95,56,95,57,57,0);
          let subs1 = String.fromCharCode(113,95,57,57,95,98,105,116,118,101,99,0);
         manifestV -= parseInt(`${manifestV}`) - mbbannerU.length;
         mbnativeadvancedO += `${subs1.length / (Math.max(10, mbnativeadvancedO.length))}`;
         subs1 = `${mbnativeadvancedO.length}`;
      do {
         mbbannerU = [mbbannerU.length];
         if (3462259 == mbbannerU.length) {
            break;
         }
      } while ((2 == (mbbannerU.length / (Math.max(5, parseInt(`${manifestV}`)))) || 1.98 == (manifestV / (Math.max(6, mbbannerU.length)))) && (3462259 == mbbannerU.length));
          let moonA = String.fromCharCode(118,95,53,51,95,114,97,100,105,117,115,0);
         manifestV *= parseInt(`${manifestV}`) / (Math.max(4, mbbannerU.length));
         moonA += "1";
      while (1 < (4 << (Math.min(2, mbbannerU.length)))) {
         mbbannerU.push(parseInt(`${manifestV}`) | 1);
         break;
      }
          let dependenciesn = 4.0;
         mbbannerU.push(parseInt(`${dependenciesn}`) >> (Math.min(3, Math.abs(parseInt(`${manifestV}`)))));
      typingH += parseFloat(`${parseInt(`${penaltygoalr}`)}`);
    Orientation.lockToPortrait();
      typingH *= parseFloat(`${2 >> (Math.min(2, long_9g_.length))}`);

    store.dispatch(
      floatingPlayer.actions.setProp({
        display: true,
        url: source,
        matchId: matchId,
        videoType: videoType,
      }),
    );
   for (let b = 0; b < 3; b++) {
       let unfillA = 2.0;
       let templateprocessorZ = 0.0;
       let skipi = String.fromCharCode(114,111,117,110,100,95,52,95,52,48,0);
       let scorec = 2.0;
      for (let e = 0; e < 3; e++) {
         skipi += `${skipi.length + parseInt(`${scorec}`)}`;
      }
      for (let x = 0; x < 2; x++) {
          let const_5v = 2.0;
         scorec *= parseFloat(`${parseInt(`${unfillA}`) - 1}`);
         const_5v += parseFloat(`${parseInt(`${const_5v}`) % 2}`);
      }
          let reminderf = 4.0;
          let gifgoalbgO = false;
          let default_sH = 0.0;
         skipi = `${parseInt(`${templateprocessorZ}`)}`;
         reminderf *= ((gifgoalbgO ? 1 : 1) << (Math.min(Math.abs(parseInt(`${reminderf}`)), 4)));
         gifgoalbgO = !gifgoalbgO;
         default_sH += (parseFloat(`${(gifgoalbgO ? 2 : 4) / (Math.max(parseInt(`${reminderf}`), 7))}`));
         skipi += "3";
          let bottomh = [196, 545];
          let typing1 = [773, 45, 583];
          let download1 = 1.0;
         skipi += `${parseInt(`${scorec}`) | bottomh.length}`;
         bottomh = [2];
         typing1 = [2];
         download1 *= 2 >> (Math.min(2, typing1.length));
      if (1.33 < (scorec * templateprocessorZ)) {
         scorec /= Math.max(1, parseFloat(`${parseInt(`${unfillA}`)}`));
      }
      while (skipi.startsWith(`${scorec}`)) {
         scorec *= parseFloat(`${skipi.length >> (Math.min(5, Math.abs(parseInt(`${templateprocessorZ}`))))}`);
         break;
      }
         skipi = "2";
      while (!skipi.includes(`${unfillA}`)) {
         unfillA *= parseFloat(`${parseInt(`${templateprocessorZ}`)}`);
         break;
      }
         templateprocessorZ /= Math.max(2, 4);
          let options8 = 2.0;
          let logoutY = true;
          let yellowvideoliven = 4.0;
         scorec *= parseFloat(`${3 * skipi.length}`);
         options8 *= ((logoutY ? 1 : 5) / (Math.max(parseInt(`${options8}`), 6)));
         logoutY = (options8 / (Math.max(2, yellowvideoliven))) == 69.6;
         yellowvideoliven *= parseInt(`${yellowvideoliven}`) - 1;
         skipi += `${parseInt(`${scorec}`) * 1}`;
      friendsG *= parseInt(`${friendsG}`) << (Math.min(3, Math.abs(3)));
   }

    dispatch(
      setVideoControlProp({
        isFullScreen: false,
        source: '',
        videoType: VideoLiveType.DETAIL,
      }),
    );
   while ((parseFloat(`${sideD.length}`) + typingH) <= 4.38) {
      typingH -= parseFloat(`${3}`);
      break;
   }

  };
       let baiduu = String.fromCharCode(101,95,50,56,95,118,105,115,105,98,105,108,105,116,105,116,101,115,0);
      while (baiduu.includes(`${baiduu.length}`)) {
         baiduu = `${(String.fromCharCode(98,0) == baiduu ? baiduu.length : baiduu.length)}`;
         break;
      }
      for (let g = 0; g < 1; g++) {
         baiduu = `${baiduu.length ^ baiduu.length}`;
      }
      for (let u = 0; u < 1; u++) {
          let reactnativeultimatelistviewk = String.fromCharCode(97,95,56,95,114,101,119,105,110,100,0);
          let lessZ = [String.fromCharCode(114,95,54,52,95,100,111,108,98,121,0), String.fromCharCode(99,97,108,108,98,97,99,107,115,95,100,95,56,57,0)];
         baiduu += `${reactnativeultimatelistviewk.length}`;
         reactnativeultimatelistviewk += "1";
         lessZ.push(3);
      }
      sideD = `${buffer0.length + 2}`;


  return (
    <RenderControl onPress={onPress} style={style.commonIconContainer}>
      <Image
        source={IconPipShrink}
        style={style.commonIcon}
        resizeMode={'contain'}
      />
    </RenderControl>
  );
   for (let i = 0; i < 3; i++) {
      friendsG /= Math.max(parseInt(`${friendsG}`) ^ 3, 4);
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
       let starN = String.fromCharCode(121,95,55,50,95,102,111,114,119,97,114,100,0);
    let productk = String.fromCharCode(98,108,111,99,107,101,100,95,105,95,55,0);
    let annerG = [String.fromCharCode(115,117,112,112,108,101,109,101,110,116,97,108,95,116,95,56,51,0), String.fromCharCode(103,95,53,51,95,116,101,108,101,103,114,97,109,0)];
    let telegramq = true;
    let hejiE = [724, 624];
    let backward3 = String.fromCharCode(97,112,112,101,110,100,95,110,95,56,56,0);
    let actionsE = 3.0;
    let encryptn = String.fromCharCode(108,95,49,57,95,99,111,110,115,117,109,101,114,0);
    let moviesV = 5;
    let nativeex3 = [779, 825, 161];
    let iconstarq = [754, 357, 689];
    let logow = 1.0;
    let mapbuffere = 5;
    let imagemanagerI = 0.0;
      iconstarq = [hejiE.length ^ 1];
      hejiE = [parseInt(`${logow}`)];
   do {
      backward3 += `${3 << (Math.min(2, backward3.length))}`;
      if (2593725 == backward3.length) {
         break;
      }
   } while ((backward3.length > 3) && (2593725 == backward3.length));
   for (let p = 0; p < 1; p++) {
      actionsE -= moviesV * 3;
   }
       let eighteenE = true;
       let bodanY = [110, 520];
      while (eighteenE) {
          let sansj = String.fromCharCode(99,112,120,95,48,95,56,54,0);
          let slidera = true;
         bodanY = [(sansj == String.fromCharCode(49,0) ? sansj.length : (eighteenE ? 4 : 5))];
         slidera = (slidera ? slidera : !slidera);
         break;
      }
      do {
         bodanY = [(bodanY.length / (Math.max(6, (eighteenE ? 2 : 2))))];
         if (bodanY.length == 873375) {
            break;
         }
      } while ((2 < (bodanY.length % 2)) && (bodanY.length == 873375));
      while (!eighteenE) {
         bodanY = [((eighteenE ? 3 : 2) / (Math.max(bodanY.length, 3)))];
         break;
      }
       let libswscaled = String.fromCharCode(111,112,116,105,109,105,122,101,95,118,95,51,56,0);
       let arrow3 = String.fromCharCode(100,97,116,97,108,105,115,116,95,112,95,50,54,0);
      while (libswscaled.length == arrow3.length) {
         libswscaled = `${arrow3.length}`;
         break;
      }
      if (5 >= (bodanY.length % 2) && 2 >= bodanY.length) {
         eighteenE = arrow3.endsWith(`${eighteenE}`);
      }
      productk += "3";
   for (let e = 0; e < 1; e++) {
      logow *= 3 * backward3.length;
   }
   for (let t = 0; t < 2; t++) {
      encryptn = `${moviesV}`;
   }
   while (!telegramq && 3 == (moviesV % 3)) {
       let yellowanimationliveZ = String.fromCharCode(110,95,49,57,95,100,101,99,114,121,112,116,101,100,0);
      for (let a = 0; a < 2; a++) {
         yellowanimationliveZ += "3";
      }
      while (!yellowanimationliveZ.startsWith(`${yellowanimationliveZ.length}`)) {
         yellowanimationliveZ = `${(String.fromCharCode(116,0) == yellowanimationliveZ ? yellowanimationliveZ.length : yellowanimationliveZ.length)}`;
         break;
      }
       let navigation9 = false;
      telegramq = (((telegramq ? hejiE.length : 86) >> (Math.min(hejiE.length, 1))) <= 86);
      break;
   }
   while ((iconstarq.length + 3) > 4) {
      iconstarq.push((encryptn == String.fromCharCode(82,0) ? encryptn.length : nativeex3.length));
      break;
   }
   while (annerG.length == starN.length) {
      annerG.push(2 * annerG.length);
      break;
   }
   do {
      backward3 = `${annerG.length * productk.length}`;
      if (4250097 == backward3.length) {
         break;
      }
   } while ((4250097 == backward3.length) && (backward3.includes(`${iconstarq.length}`)));
   for (let j = 0; j < 2; j++) {
      backward3 += `${3 >> (Math.min(3, annerG.length))}`;
   }

    dispatch(toggleLockScreen());
   while ((annerG.length | 4) < 5 || (productk.length | 4) < 3) {
      annerG.push(moviesV);
      break;
   }
       let armvaF = String.fromCharCode(111,95,53,53,95,103,110,111,115,105,115,0);
          let blacka = String.fromCharCode(109,97,116,99,104,101,100,95,110,95,53,50,0);
          let scheduler6 = String.fromCharCode(118,97,108,105,100,97,116,105,110,103,95,106,95,53,55,0);
         armvaF = `${blacka.length}`;
         blacka += `${scheduler6.length % (Math.max(3, 10))}`;
         scheduler6 = `${scheduler6.length * scheduler6.length}`;
         armvaF += `${armvaF.length}`;
          let shoots = new Map([[String.fromCharCode(102,95,56,55,95,103,97,105,110,0),274], [String.fromCharCode(100,95,55,95,114,101,99,111,110,105,110,116,114,97,0),306], [String.fromCharCode(99,111,110,116,105,110,117,101,115,95,56,95,57,49,0),171]]);
          let minimizeG = 2.0;
          let skipP = String.fromCharCode(97,109,102,101,110,99,95,54,95,50,0);
         armvaF += `${armvaF.length}`;
         shoots = new Map([[`${shoots.size}`, parseInt(`${minimizeG}`) >> (Math.min(Math.abs(1), 2))]]);
         minimizeG *= parseFloat(`${shoots.size >> (Math.min(2, Math.abs(parseInt(`${minimizeG}`))))}`);
         skipP += `${parseInt(`${minimizeG}`) | shoots.size}`;
      starN += `${hejiE.length << (Math.min(Math.abs(3), 1))}`;
   while (hejiE.includes(iconstarq.length)) {
       let mbjscommonT = 4.0;
       let hiadY = 4.0;
       let rewindw = 4.0;
      if (3.50 < (rewindw - 3.55) || (rewindw - hiadY) < 3.55) {
         hiadY += parseFloat(`${parseInt(`${rewindw}`)}`);
      }
      while (2.63 < (rewindw / 1)) {
          let libreactnativejniv = String.fromCharCode(109,111,118,101,115,95,117,95,50,50,0);
         mbjscommonT += libreactnativejniv.length * 1;
         break;
      }
         rewindw += parseInt(`${mbjscommonT}`) & parseInt(`${rewindw}`);
      do {
         rewindw -= 2 - parseInt(`${rewindw}`);
         if (2312092.0 == rewindw) {
            break;
         }
      } while ((2312092.0 == rewindw) && ((rewindw * 4.92) < 5.95));
       let tempnodatagifs = 5.0;
      do {
         rewindw /= Math.max(parseInt(`${mbjscommonT}`), 3);
         if (rewindw == 910403.0) {
            break;
         }
      } while (((5.6 + rewindw) > 1.82) && (rewindw == 910403.0));
         mbjscommonT /= Math.max(2, 1);
      do {
          let vignetteQ = 2.0;
          let iconsaveimagei = 0.0;
          let dacccfaabfbcbadeebddcabacdffdbg = 1;
          let reviewj = 1;
         tempnodatagifs /= Math.max(1, parseFloat(`${parseInt(`${vignetteQ}`) / (Math.max(parseInt(`${mbjscommonT}`), 7))}`));
         vignetteQ *= dacccfaabfbcbadeebddcabacdffdbg | 1;
         iconsaveimagei /= Math.max(parseFloat(`${dacccfaabfbcbadeebddcabacdffdbg >> (Math.min(5, Math.abs(reviewj)))}`), 3);
         reviewj ^= parseInt(`${iconsaveimagei}`);
         if (tempnodatagifs == 4472803.0) {
            break;
         }
      } while ((4.89 < (2 * rewindw)) && (tempnodatagifs == 4472803.0));
         hiadY += parseFloat(`${parseInt(`${hiadY}`) * 3}`);
      iconstarq.push(hejiE.length * 1);
      break;
   }
   while (2 == (iconstarq.length | 2)) {
       let direct9 = String.fromCharCode(119,95,55,50,95,115,104,97,114,101,103,114,111,117,112,0);
       let znewinterstitialJ = 4;
       let sportsX = false;
       let dropdownQ = 5.0;
         znewinterstitialJ ^= (znewinterstitialJ % (Math.max(2, (sportsX ? 5 : 2))));
      while (direct9.startsWith(`${znewinterstitialJ}`)) {
          let sentryu = String.fromCharCode(99,95,55,52,95,100,101,110,111,114,109,97,108,0);
          let fastP = false;
         znewinterstitialJ /= Math.max(3, (String.fromCharCode(55,0) == direct9 ? znewinterstitialJ : direct9.length));
         sentryu = `${(sentryu.length + (fastP ? 1 : 3))}`;
         fastP = !fastP;
         break;
      }
      do {
         dropdownQ /= Math.max(1, 1 * znewinterstitialJ);
         if (3578577.0 == dropdownQ) {
            break;
         }
      } while ((direct9.includes(`${dropdownQ}`)) && (3578577.0 == dropdownQ));
         znewinterstitialJ ^= ((sportsX ? 2 : 2));
         dropdownQ /= Math.max(znewinterstitialJ << (Math.min(2, Math.abs(1))), 5);
         direct9 = "3";
      for (let n = 0; n < 2; n++) {
          let arrowupU = new Map([[String.fromCharCode(112,114,101,104,97,115,104,95,113,95,56,55,0),true ], [String.fromCharCode(99,111,110,118,101,120,95,56,95,53,48,0),true ], [String.fromCharCode(97,117,116,111,114,111,116,97,116,101,95,114,95,52,48,0),true ]]);
          let windr = false;
          let shown = String.fromCharCode(98,111,117,110,99,105,110,101,115,115,95,105,95,57,54,0);
          let sortx = String.fromCharCode(105,95,54,55,95,100,101,99,114,101,97,115,101,0);
         sportsX = 82 < (znewinterstitialJ / (Math.max(dropdownQ, 3)));
         arrowupU[shown] = arrowupU.size * shown.length;
         windr = String.fromCharCode(107,0) == sortx;
         sortx += `${((windr ? 2 : 1))}`;
      }
         direct9 = `${parseInt(`${dropdownQ}`) % 1}`;
      while (5.10 == dropdownQ || (dropdownQ - 5.10) == 4.42) {
          let listd = String.fromCharCode(114,95,50,95,114,101,119,114,105,116,101,114,0);
         dropdownQ /= Math.max(1, 1 & znewinterstitialJ);
         listd += `${(listd == String.fromCharCode(90,0) ? listd.length : listd.length)}`;
         break;
      }
         znewinterstitialJ -= ((sportsX ? 5 : 1) >> (Math.min(Math.abs(parseInt(`${dropdownQ}`)), 3)));
         znewinterstitialJ &= direct9.length;
         direct9 += `${znewinterstitialJ}`;
      iconstarq = [2];
      break;
   }
   for (let i = 0; i < 1; i++) {
      hejiE.push(2);
   }
       let guideg = String.fromCharCode(97,117,116,104,111,114,105,122,97,116,105,111,110,115,95,118,95,49,0);
       let cross1 = String.fromCharCode(109,118,100,97,116,97,95,118,95,56,48,0);
       let detailY = String.fromCharCode(97,110,115,105,95,118,95,52,53,0);
         cross1 = `${(guideg == String.fromCharCode(86,0) ? cross1.length : guideg.length)}`;
         detailY += `${guideg.length + 3}`;
      do {
         detailY = `${cross1.length}`;
         if (detailY == String.fromCharCode(95,111,115,113,105,109,49,112,114,0)) {
            break;
         }
      } while ((detailY == String.fromCharCode(95,111,115,113,105,109,49,112,114,0)) && (cross1.length < detailY.length));
      if (detailY != String.fromCharCode(98,0) || 5 == cross1.length) {
         detailY = `${guideg.length ^ 2}`;
      }
      while (cross1 != guideg) {
         guideg += `${guideg.length}`;
         break;
      }
      do {
         detailY = `${(String.fromCharCode(100,0) == guideg ? guideg.length : cross1.length)}`;
         if (3859765 == detailY.length) {
            break;
         }
      } while ((3859765 == detailY.length) && (1 >= cross1.length));
      while (detailY != String.fromCharCode(54,0) && cross1 != String.fromCharCode(99,0)) {
          let downloaderu = new Map([[String.fromCharCode(105,95,56,49,95,99,97,99,104,101,115,0),763], [String.fromCharCode(108,105,115,116,101,110,101,114,115,95,120,95,57,50,0),189], [String.fromCharCode(107,95,56,57,95,111,112,101,110,0),22]]);
          let inviteE = new Map([[String.fromCharCode(112,107,101,121,95,50,95,49,52,0),false ], [String.fromCharCode(115,105,108,107,95,110,95,55,48,0),false ], [String.fromCharCode(119,95,52,56,95,102,108,117,115,104,0),false ]]);
          let encryptK = 2.0;
          let gifgoalM = [String.fromCharCode(106,95,51,52,95,103,97,109,109,97,0), String.fromCharCode(103,108,111,98,95,114,95,54,0), String.fromCharCode(106,117,108,105,97,110,100,97,121,95,113,95,48,0)];
          let starf = true;
         cross1 += `${((starf ? 5 : 1) / (Math.max(6, cross1.length)))}`;
         downloaderu = new Map([[`${downloaderu.size}`, 2]]);
         inviteE[`${encryptK}`] = 3 | gifgoalM.length;
         encryptK /= Math.max(downloaderu.size << (Math.min(gifgoalM.length, 1)), 1);
         starf = inviteE.size < 50;
         break;
      }
      if (cross1 != detailY) {
          let next0 = 2.0;
          let subsp = 0.0;
          let binddatasu = 4.0;
          let reviewI = String.fromCharCode(107,95,57,53,95,105,110,116,101,114,115,101,99,116,0);
          let build0 = 0.0;
         detailY += `${guideg.length}`;
         next0 += 1;
         subsp -= parseFloat(`${parseInt(`${build0}`) ^ parseInt(`${subsp}`)}`);
         binddatasu += parseFloat(`${parseInt(`${build0}`) | reviewI.length}`);
         reviewI = `${parseInt(`${next0}`) << (Math.min(4, Math.abs(parseInt(`${subsp}`))))}`;
      }
      for (let k = 0; k < 3; k++) {
         cross1 += `${detailY.length + cross1.length}`;
      }
      hejiE.push(hejiE.length * backward3.length);
       let playlistM = String.fromCharCode(97,95,49,55,95,117,110,118,111,116,101,0);
       let castingZ = String.fromCharCode(117,95,55,50,95,116,111,100,97,121,0);
          let libreactperfloggerjniB = String.fromCharCode(100,95,56,57,95,106,107,101,110,99,0);
          let largeR = String.fromCharCode(113,95,54,52,95,115,117,112,101,114,110,111,100,101,0);
         playlistM = `${libreactperfloggerjniB.length}`;
         libreactperfloggerjniB += `${largeR.length + 1}`;
         largeR += `${largeR.length ^ 2}`;
         castingZ += `${castingZ.length}`;
          let greyK = [String.fromCharCode(108,95,56,49,95,116,114,117,110,99,0), String.fromCharCode(119,114,105,116,97,98,108,101,95,110,95,56,50,0)];
          let morek = new Map([[String.fromCharCode(115,121,110,116,104,95,121,95,55,50,0),712], [String.fromCharCode(97,112,112,114,111,118,101,114,95,110,95,51,55,0),134]]);
         castingZ += `${castingZ.length}`;
         greyK.push(2);
         morek = new Map([[`${morek.size}`, greyK.length >> (Math.min(Math.abs(3), 1))]]);
       let active9 = 3;
         castingZ = `${castingZ.length - 1}`;
          let yellowanimationliveR = 4.0;
         active9 -= castingZ.length >> (Math.min(5, Math.abs(parseInt(`${yellowanimationliveR}`))));
      encryptn = `${encryptn.length}`;
      nativeex3.push(3);
   do {
       let referrer0 = String.fromCharCode(115,99,104,105,95,100,95,55,54,0);
       let turng = [692, 370];
       let notificationfillemptyf = String.fromCharCode(105,110,118,95,103,95,50,52,0);
       let singlej = 4;
      do {
          let pangleX = 3;
          let selectX = false;
          let moon0 = true;
          let libavdeviceF = 4;
          let livenodatabgimgQ = String.fromCharCode(113,95,50,95,120,100,97,105,0);
         turng.push((1 ^ (selectX ? 4 : 2)));
         pangleX /= Math.max(2, livenodatabgimgQ.length);
         selectX = livenodatabgimgQ.length > 63;
         moon0 = 88 <= libavdeviceF || pangleX <= 88;
         libavdeviceF ^= pangleX;
         if (turng.length == 4865914) {
            break;
         }
      } while ((turng.length == 4865914) && (1 <= (3 ^ referrer0.length) || (turng.length ^ referrer0.length) <= 3));
      do {
         singlej %= Math.max(2, 1);
         if (singlej == 3447779) {
            break;
         }
      } while ((referrer0.length >= singlej) && (singlej == 3447779));
          let gmailE = String.fromCharCode(113,95,53,54,0);
          let soundH = String.fromCharCode(115,121,110,99,109,97,114,107,101,114,95,57,95,54,56,0);
          let window_8P = 4;
         notificationfillemptyf += `${soundH.length}`;
         gmailE = `${window_8P}`;
         soundH += `${3 / (Math.max(6, window_8P))}`;
      do {
         singlej *= turng.length + referrer0.length;
         if (3500776 == singlej) {
            break;
         }
      } while ((3500776 == singlej) && (notificationfillemptyf.endsWith(`${singlej}`)));
       let flagV = 3.0;
         referrer0 = `${1 & notificationfillemptyf.length}`;
          let pageW = 2.0;
          let activityr = String.fromCharCode(121,117,118,99,111,110,102,105,103,105,109,97,103,101,95,122,95,52,57,0);
          let configureC = 1.0;
         referrer0 += `${(String.fromCharCode(81,0) == notificationfillemptyf ? singlej : notificationfillemptyf.length)}`;
         pageW *= parseFloat(`${3}`);
         activityr = `${activityr.length ^ 1}`;
         configureC *= parseFloat(`${activityr.length}`);
      for (let u = 0; u < 1; u++) {
          let pausei = String.fromCharCode(98,108,97,110,107,95,102,95,57,0);
          let pingB = 2;
         turng.push(1 << (Math.min(3, pausei.length)));
         pausei = `${pingB ^ pingB}`;
      }
      while ((singlej % 2) >= 5 || 1.77 >= (4.34 - flagV)) {
          let mathO = String.fromCharCode(118,116,101,115,116,95,98,95,49,56,0);
          let formG = [299, 974, 451];
          let time_prL = new Map([[String.fromCharCode(114,95,49,57,95,114,101,97,108,116,105,109,101,0),String.fromCharCode(101,95,55,57,95,109,117,108,116,105,115,105,103,0)], [String.fromCharCode(102,111,114,109,97,116,116,105,110,103,95,121,95,48,0),String.fromCharCode(111,95,56,56,95,110,97,110,111,112,98,0)]]);
          let libffmpegkitT = 0.0;
          let toponU = String.fromCharCode(97,117,100,95,107,95,52,52,0);
         singlej |= parseInt(`${flagV}`) / (Math.max(3, 6));
         mathO = `${mathO.length * 3}`;
         formG.push(formG.length);
         time_prL[mathO] = (String.fromCharCode(121,0) == mathO ? mathO.length : toponU.length);
         libffmpegkitT += (mathO == String.fromCharCode(117,0) ? toponU.length : mathO.length);
         break;
      }
          let dycreatorV = String.fromCharCode(120,95,49,55,95,100,100,118,97,0);
         referrer0 = `${notificationfillemptyf.length | 1}`;
         dycreatorV = "3";
       let calendarU = 5.0;
         flagV /= Math.max(5, turng.length);
      imagemanagerI += turng.length % 3;
      if (imagemanagerI == 450037.0) {
         break;
      }
   } while ((1.22 < (imagemanagerI - backward3.length)) && (imagemanagerI == 450037.0));
   for (let p = 0; p < 2; p++) {
      imagemanagerI += ((telegramq ? 3 : 4) & productk.length);
   }
   for (let f = 0; f < 2; f++) {
      telegramq = (nativeex3.length & encryptn.length) <= 59;
   }
      starN = `${parseInt(`${logow}`) >> (Math.min(5, Math.abs(1)))}`;

    dispatch(showControlAction(ShowControlType.TopBottom));
      productk = `${mapbuffere | productk.length}`;
       let hoverx = String.fromCharCode(111,118,101,114,115,104,111,111,116,95,113,95,51,57,0);
       let setting_ = 1.0;
       let dependency0 = 2.0;
          let mountingR = false;
          let emptyX = new Map([[String.fromCharCode(121,95,54,53,95,99,114,99,99,0),875], [String.fromCharCode(110,105,100,115,110,95,112,95,57,57,0),7], [String.fromCharCode(116,114,105,97,110,103,117,108,97,116,105,111,110,95,101,95,50,53,0),374]]);
         dependency0 -= parseFloat(`${parseInt(`${setting_}`) >> (Math.min(1, Math.abs(3)))}`);
         mountingR = (((mountingR ? emptyX.size : 37) - emptyX.size) >= 9);
       let fullE = 4.0;
       let libfollyR = 3.0;
      telegramq = starN == encryptn;
      hoverx += `${2 * hoverx.length}`;
   do {
       let renderG = [663, 155];
       let foundA = 5.0;
       let team1 = String.fromCharCode(110,95,54,54,95,99,111,114,114,101,108,97,116,105,111,110,0);
      do {
          let selection0 = [667, 166, 119];
          let iconshareN = String.fromCharCode(109,97,120,107,101,121,115,105,122,101,95,54,95,57,50,0);
          let dataR = String.fromCharCode(97,95,49,53,95,101,116,119,111,114,107,0);
          let lineK = false;
         foundA += 2 + dataR.length;
         selection0.push(3 + selection0.length);
         iconshareN = `${selection0.length >> (Math.min(iconshareN.length, 3))}`;
         dataR = `${selection0.length}`;
         lineK = selection0.length == iconshareN.length;
         if (foundA == 1578686.0) {
            break;
         }
      } while ((5.23 == (foundA * 4.53)) && (foundA == 1578686.0));
      if (foundA >= 2.57) {
         team1 += `${team1.length ^ 3}`;
      }
      do {
         foundA /= Math.max(2, 2);
         if (foundA == 4483239.0) {
            break;
         }
      } while ((foundA == 4483239.0) && ((5 << (Math.min(4, team1.length))) >= 3 && 4.96 >= (foundA + team1.length)));
         renderG.push(3);
      if (3 == (parseInt(`${foundA}`) / (Math.max(renderG.length, 8)))) {
          let questicon1 = 2.0;
          let utilsx = false;
          let libswresamplek = true;
          let arrowupa = false;
         foundA -= parseInt(`${questicon1}`) >> (Math.min(3, Math.abs(3)));
         questicon1 /= Math.max(1, (parseFloat(`${(libswresamplek ? 5 : 2)}`)));
         utilsx = libswresamplek || !arrowupa;
         arrowupa = (!utilsx ? !libswresamplek : !utilsx);
      }
      do {
          let sliderg = false;
          let whiteanimationlivea = [236, 641, 310];
         foundA += parseInt(`${foundA}`);
         sliderg = sliderg && whiteanimationlivea.length < 27;
         whiteanimationlivea.push(3);
         if (2733082.0 == foundA) {
            break;
         }
      } while ((!team1.startsWith(`${foundA}`)) && (2733082.0 == foundA));
         foundA -= parseInt(`${foundA}`);
          let libreactperfloggerjnih = [497, 444];
          let stringE = String.fromCharCode(108,95,52,52,95,111,114,112,104,97,110,0);
         foundA /= Math.max(team1.length, 5);
         libreactperfloggerjnih = [(stringE == String.fromCharCode(119,0) ? stringE.length : libreactperfloggerjnih.length)];
         foundA /= Math.max(1 >> (Math.min(5, renderG.length)), 5);
      starN += `${team1.length}`;
      if (starN == String.fromCharCode(52,97,56,108,55,120,122,57,0)) {
         break;
      }
   } while ((starN == String.fromCharCode(52,97,56,108,55,120,122,57,0)) && (telegramq && 2 <= starN.length));
       let reactnavigation_ = String.fromCharCode(117,95,49,48,95,116,119,111,0);
      while (4 < reactnavigation_.length) {
         reactnavigation_ += "1";
         break;
      }
      if (3 < reactnavigation_.length || reactnavigation_ == String.fromCharCode(110,0)) {
         reactnavigation_ += `${reactnavigation_.length - 2}`;
      }
      if (1 >= reactnavigation_.length) {
          let moono = 0.0;
          let catalog3 = String.fromCharCode(122,111,110,101,115,95,113,95,51,50,0);
          let textinputE = String.fromCharCode(101,95,55,52,95,115,116,111,114,97,98,108,101,0);
          let memberm = false;
          let buttond = String.fromCharCode(99,117,118,105,100,95,113,95,53,56,0);
         reactnavigation_ = `${(String.fromCharCode(83,0) == reactnavigation_ ? reactnavigation_.length : (memberm ? 2 : 2))}`;
         moono -= parseFloat(`${textinputE.length}`);
         catalog3 += `${(textinputE == String.fromCharCode(72,0) ? textinputE.length : buttond.length)}`;
         memberm = parseFloat(`${textinputE.length}`) >= moono;
         buttond = `${textinputE.length - 3}`;
      }
      logow -= nativeex3.length - productk.length;
   for (let c = 0; c < 3; c++) {
      encryptn = "3";
   }
       let foreground6 = 4.0;
       let projectR = String.fromCharCode(119,97,114,110,105,110,103,95,100,95,52,57,0);
       let sansn = String.fromCharCode(119,101,98,95,104,95,56,0);
      do {
          let skipI = 4;
          let ping3 = new Map([[String.fromCharCode(117,110,114,101,103,105,115,116,101,114,101,100,95,104,95,52,54,0),661], [String.fromCharCode(98,97,110,110,101,114,95,113,95,57,49,0),685]]);
          let roboto6 = String.fromCharCode(97,116,116,97,99,104,95,117,95,49,52,0);
          let baseK = String.fromCharCode(111,95,50,48,95,103,108,98,108,0);
          let streaming4 = [String.fromCharCode(115,117,98,99,111,101,102,115,95,105,95,53,50,0), String.fromCharCode(115,105,112,114,95,49,95,53,0)];
         foreground6 += baseK.length & streaming4.length;
         skipI %= Math.max(2, roboto6.length);
         ping3[roboto6] = 1;
         baseK += `${ping3.size}`;
         streaming4.push(ping3.size);
         if (2845261.0 == foreground6) {
            break;
         }
      } while (((sansn.length ^ 5) >= 5) && (2845261.0 == foreground6));
      if (2 == (sansn.length / 4) || (foreground6 / (Math.max(2.5, 7))) == 4.40) {
         foreground6 -= parseInt(`${foreground6}`) ^ 2;
      }
      while (projectR.length >= 2) {
          let libturbomodulejsijniZ = 3;
          let relatedt = [699, 124, 510];
         sansn = `${relatedt.length}`;
         libturbomodulejsijniZ /= Math.max(libturbomodulejsijniZ, 2);
         relatedt = [libturbomodulejsijniZ];
         break;
      }
      do {
         projectR += `${projectR.length ^ sansn.length}`;
         if (String.fromCharCode(118,121,56,102,95,106,119,49,0) == projectR) {
            break;
         }
      } while ((sansn == String.fromCharCode(80,0)) && (String.fromCharCode(118,121,56,102,95,106,119,49,0) == projectR));
      while (!projectR.startsWith(sansn)) {
         sansn = `${projectR.length}`;
         break;
      }
         sansn += `${projectR.length}`;
      do {
          let loginU = String.fromCharCode(112,97,116,104,115,95,55,95,52,51,0);
         foreground6 -= loginU.length;
         if (foreground6 == 2324891.0) {
            break;
         }
      } while ((foreground6 == 2324891.0) && ((parseInt(`${foreground6}`) - sansn.length) >= 3 || 3 >= (sansn.length * 3)));
       let thumbnailx = String.fromCharCode(98,95,55,51,95,113,117,97,110,116,105,108,101,0);
       let reward3 = String.fromCharCode(103,95,55,53,95,119,101,108,99,104,0);
      for (let d = 0; d < 2; d++) {
          let libaneA = 5;
          let libpangleflipped3 = String.fromCharCode(117,109,105,100,95,102,95,50,57,0);
          let pnewarchdefaultsK = false;
          let formS = String.fromCharCode(109,95,55,52,95,97,108,109,111,115,116,0);
         sansn = `${libaneA}`;
         libaneA -= 1;
         libpangleflipped3 = "2";
         formS = `${((pnewarchdefaultsK ? 4 : 2) * formS.length)}`;
      }
      logow /= Math.max(1, parseInt(`${foreground6}`));
       let skip5 = [497, 66];
       let infoh = true;
      for (let j = 0; j < 2; j++) {
         infoh = skip5.includes(infoh);
      }
          let castingU = String.fromCharCode(110,105,109,97,116,105,111,110,95,104,95,53,49,0);
          let abidetectZ = 2.0;
          let canvasb = 5.0;
         skip5 = [parseInt(`${canvasb}`)];
         castingU += `${parseInt(`${abidetectZ}`)}`;
         abidetectZ += (castingU == String.fromCharCode(99,0) ? castingU.length : parseInt(`${abidetectZ}`));
         canvasb += parseInt(`${abidetectZ}`);
      do {
         skip5.push(3);
         if (1351418 == skip5.length) {
            break;
         }
      } while ((1351418 == skip5.length) && (skip5.length >= 3));
         skip5 = [(skip5.length >> (Math.min(5, Math.abs((infoh ? 2 : 2)))))];
      while (3 == (skip5.length / 1)) {
          let libfollya = [470, 615];
          let suggestionr = String.fromCharCode(119,95,54,51,95,118,98,101,122,105,101,114,0);
          let shootyesgoalR = 4.0;
          let indicatorQ = 1;
          let iconuserd = new Map([[String.fromCharCode(105,95,52,95,100,115,116,114,101,97,109,0),318], [String.fromCharCode(112,95,49,56,95,115,105,102,116,0),413], [String.fromCharCode(111,95,50,52,95,116,114,97,99,105,110,103,0),27]]);
         infoh = (iconuserd.size % (Math.max(3, skip5.length))) >= 75;
         libfollya = [suggestionr.length];
         suggestionr += `${parseInt(`${shootyesgoalR}`) % (Math.max(1, 4))}`;
         shootyesgoalR += 2 / (Math.max(4, parseInt(`${shootyesgoalR}`)));
         indicatorQ %= Math.max(1 | parseInt(`${shootyesgoalR}`), 1);
         iconuserd[`${shootyesgoalR}`] = 1 >> (Math.min(Math.abs(parseInt(`${shootyesgoalR}`)), 5));
         break;
      }
         skip5.push(2 & skip5.length);
      encryptn = "3";
   while (backward3.includes(`${iconstarq.length}`)) {
      iconstarq = [parseInt(`${actionsE}`) % 3];
      break;
   }
      imagemanagerI *= (String.fromCharCode(121,0) == backward3 ? backward3.length : hejiE.length);
   if ((4.23 - imagemanagerI) > 4.77 && 3.35 > (4.23 - imagemanagerI)) {
      imagemanagerI += annerG.length;
   }
       let imagenetworkerrU = 0.0;
       let shirta = new Map([[String.fromCharCode(118,95,52,55,95,112,111,115,116,101,110,99,111,100,101,0),false ], [String.fromCharCode(118,95,53,57,95,100,105,116,104,101,114,0),false ]]);
         shirta = new Map([[`${shirta.size}`, shirta.size]]);
         shirta = new Map([[`${shirta.size}`, 2]]);
      if ((shirta.size - imagenetworkerrU) == 5.33) {
         imagenetworkerrU += parseInt(`${imagenetworkerrU}`) - 1;
      }
      for (let m = 0; m < 3; m++) {
          let handler1 = String.fromCharCode(114,95,51,50,95,116,104,114,101,101,115,116,97,116,101,0);
          let tempnodatagif5 = 4;
          let minimize9 = [639, 190, 274];
          let predictionbannersharedV = 4.0;
          let libjsijniprofiler4 = [175, 985, 39];
         imagenetworkerrU /= Math.max(4, (handler1 == String.fromCharCode(78,0) ? parseInt(`${imagenetworkerrU}`) : handler1.length));
         tempnodatagif5 <<= Math.min(1, Math.abs(parseInt(`${predictionbannersharedV}`) << (Math.min(2, Math.abs(1)))));
         minimize9.push(libjsijniprofiler4.length * 1);
         predictionbannersharedV += parseFloat(`${minimize9.length % 1}`);
         libjsijniprofiler4 = [minimize9.length & 2];
      }
      while (4.99 >= (imagenetworkerrU * shirta.size) && 4.99 >= (shirta.size * imagenetworkerrU)) {
         shirta = new Map([[`${shirta.size}`, shirta.size]]);
         break;
      }
          let countrym = 5.0;
         shirta[`${imagenetworkerrU}`] = parseInt(`${imagenetworkerrU}`);
         countrym *= parseFloat(`${1}`);
      annerG = [3];
      backward3 += `${moviesV}`;

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
       let sportC = new Map([[String.fromCharCode(101,95,49,50,95,113,117,101,117,101,115,0),196], [String.fromCharCode(117,110,115,116,111,112,112,97,98,108,101,95,119,95,55,48,0),605]]);
    let dacccfaabfbcbadeebddcabacdffdbj = 1.0;
    let spinnerW = true;
    let pingg = String.fromCharCode(101,95,51,54,95,100,105,115,116,114,97,99,116,97,98,108,101,0);
    let hooksP = String.fromCharCode(100,101,116,97,99,104,101,100,95,100,95,49,53,0);
    let huaweii = String.fromCharCode(108,95,54,51,95,99,114,97,115,104,101,100,0);
    let hiadg = String.fromCharCode(112,95,54,53,95,99,100,97,116,97,0);
    let hongkongC = String.fromCharCode(114,95,57,56,95,109,109,99,111,0);
    let submitn = String.fromCharCode(99,108,105,112,98,111,97,114,100,95,57,95,53,51,0);
    let componentregistryq = String.fromCharCode(116,95,56,51,95,113,115,116,101,112,0);
    let completee = 1.0;
    let iconuserN = 2;
    let listk = String.fromCharCode(105,110,105,116,105,97,108,105,122,101,114,95,56,95,51,48,0);
   do {
       let templateprocessorC = 0;
       let utilsF = [849, 275];
      for (let b = 0; b < 1; b++) {
          let pagez = String.fromCharCode(103,95,51,57,95,116,101,120,116,115,0);
          let stations6 = true;
         utilsF = [pagez.length | utilsF.length];
         pagez += "1";
      }
          let backwards = [327, 582, 825];
         templateprocessorC >>= Math.min(3, Math.abs(2 - utilsF.length));
         backwards.push(backwards.length % (Math.max(backwards.length, 10)));
      do {
         utilsF = [templateprocessorC];
         if (utilsF.length == 1168017) {
            break;
         }
      } while ((utilsF.length == 1168017) && (!utilsF.includes(templateprocessorC)));
      for (let f = 0; f < 1; f++) {
          let whistlet = new Map([[String.fromCharCode(105,95,56,52,95,105,110,118,105,116,101,114,115,0),String.fromCharCode(102,115,112,112,95,110,95,55,49,0)], [String.fromCharCode(108,95,57,49,95,117,121,118,121,116,111,121,117,118,0),String.fromCharCode(101,95,56,49,95,122,109,98,118,0)]]);
         templateprocessorC /= Math.max(2, utilsF.length);
         whistlet = new Map([[`${whistlet.size}`, 1 ^ whistlet.size]]);
      }
      if (3 < (1 << (Math.min(1, utilsF.length))) || 1 < (templateprocessorC << (Math.min(utilsF.length, 3)))) {
          let defaultroombgc = String.fromCharCode(103,95,57,95,114,101,101,110,116,114,97,110,116,0);
         templateprocessorC %= Math.max(3 % (Math.max(templateprocessorC, 8)), 4);
         defaultroombgc = `${defaultroombgc.length}`;
      }
       let iconwatchnow3 = true;
       let whatsapph = true;
      dacccfaabfbcbadeebddcabacdffdbj /= Math.max((parseFloat(`${(spinnerW ? 1 : 3)}`)), 3);
      if (dacccfaabfbcbadeebddcabacdffdbj == 2999881.0) {
         break;
      }
   } while ((dacccfaabfbcbadeebddcabacdffdbj == 2999881.0) && (1 > submitn.length));
      completee /= Math.max(4, pingg.length);

  const dispatch = useDispatch();
      dacccfaabfbcbadeebddcabacdffdbj -= parseFloat(`${3 / (Math.max(1, parseInt(`${dacccfaabfbcbadeebddcabacdffdbj}`)))}`);
   for (let w = 0; w < 3; w++) {
       let statisticsinactiveY = 0.0;
       let greys = 5.0;
         greys /= Math.max(parseFloat(`${parseInt(`${statisticsinactiveY}`)}`), 1);
          let expandQ = new Map([[String.fromCharCode(98,105,116,114,101,97,100,101,114,95,118,95,51,48,0),36], [String.fromCharCode(101,95,56,57,95,108,97,99,105,110,103,0),948], [String.fromCharCode(97,118,97,105,108,97,98,105,108,105,116,121,95,110,95,55,54,0),989]]);
         greys -= parseFloat(`${3}`);
         expandQ[`${expandQ.size}`] = 3;
      submitn = `${pingg.length - 3}`;
   }

  const onPress = () => {

       let resendQ = 0.0;
       let middlewarel = String.fromCharCode(118,95,55,49,95,118,109,115,108,0);
      for (let f = 0; f < 1; f++) {
          let default_ep = true;
          let predictionG = 4.0;
         middlewarel = `${2 * parseInt(`${predictionG}`)}`;
         default_ep = !default_ep;
         predictionG /= Math.max((parseFloat(`${2 % (Math.max(6, (default_ep ? 1 : 1)))}`)), 5);
      }
      if (3 > (parseInt(`${resendQ}`) * middlewarel.length) && (3.85 * resendQ) > 2.39) {
          let placeholderv = String.fromCharCode(107,95,57,54,95,97,118,117,105,0);
          let stringm = 2.0;
          let submitS = String.fromCharCode(120,95,52,95,101,110,101,114,103,121,0);
          let robotoP = String.fromCharCode(111,112,101,110,115,115,108,118,95,102,95,54,56,0);
          let zhubox = new Map([[String.fromCharCode(112,95,51,56,95,99,114,111,115,115,102,97,100,101,0),962], [String.fromCharCode(101,120,112,111,95,52,95,56,54,0),125]]);
         resendQ /= Math.max(parseFloat(`${1}`), 5);
         placeholderv += "1";
         stringm *= 3 - parseInt(`${stringm}`);
         submitS += `${(placeholderv == String.fromCharCode(69,0) ? parseInt(`${stringm}`) : placeholderv.length)}`;
         robotoP = `${parseInt(`${stringm}`) / (Math.max(placeholderv.length, 8))}`;
         zhubox[`${stringm}`] = parseInt(`${stringm}`);
      }
          let diceB = String.fromCharCode(102,95,53,50,95,121,117,118,99,111,110,102,105,103,105,109,97,103,101,0);
          let hongkongz = new Map([[String.fromCharCode(108,95,57,56,0),false ], [String.fromCharCode(112,95,52,50,95,110,97,103,108,101,0),true ]]);
         resendQ *= parseFloat(`${diceB.length * hongkongz.size}`);
         resendQ -= parseFloat(`${middlewarel.length}`);
         resendQ /= Math.max((parseFloat(`${middlewarel == String.fromCharCode(87,0) ? parseInt(`${resendQ}`) : middlewarel.length}`)), 4);
      for (let p = 0; p < 1; p++) {
         middlewarel = `${1 >> (Math.min(5, Math.abs(parseInt(`${resendQ}`))))}`;
      }
      dacccfaabfbcbadeebddcabacdffdbj *= parseFloat(`${3 + parseInt(`${resendQ}`)}`);
      componentregistryq += `${(huaweii == String.fromCharCode(103,0) ? parseInt(`${dacccfaabfbcbadeebddcabacdffdbj}`) : huaweii.length)}`;
    dispatch(toggleLockScreen());
       let libsentry6 = true;
          let corner7 = new Map([[String.fromCharCode(100,95,53,52,95,103,114,97,118,105,116,121,0),String.fromCharCode(109,111,100,109,95,51,95,50,56,0)], [String.fromCharCode(119,95,52,50,95,116,121,112,101,115,0),String.fromCharCode(100,95,50,95,112,101,114,102,0)], [String.fromCharCode(106,95,51,48,95,108,115,98,102,117,108,108,0),String.fromCharCode(117,95,49,48,48,95,118,105,101,119,112,111,114,116,0)]]);
          let colorsS = true;
          let roundH = [342, 559, 53];
         libsentry6 = corner7.size < 82 && colorsS;
         corner7[`${roundH.length}`] = roundH.length << (Math.min(2, roundH.length));
         colorsS = (roundH.length ^ roundH.length) < 57;
      for (let l = 0; l < 2; l++) {
          let sliderE = String.fromCharCode(105,95,51,54,95,110,101,105,103,104,98,111,114,105,110,103,0);
          let iconsettings = String.fromCharCode(102,95,56,53,95,112,114,101,99,111,109,112,111,115,101,100,0);
          let subbasketballplayerD = String.fromCharCode(120,102,111,114,109,95,116,95,56,57,0);
         libsentry6 = 8 > iconsettings.length;
         sliderE += `${2 ^ subbasketballplayerD.length}`;
         iconsettings += `${sliderE.length}`;
         subbasketballplayerD += `${(subbasketballplayerD == String.fromCharCode(87,0) ? sliderE.length : subbasketballplayerD.length)}`;
      }
      while (!libsentry6 || libsentry6) {
         libsentry6 = (!libsentry6 ? libsentry6 : !libsentry6);
         break;
      }
      completee *= hooksP.length;
   do {
      hiadg = `${((spinnerW ? 3 : 4) + parseInt(`${completee}`))}`;
      if (hiadg.length == 221820) {
         break;
      }
   } while ((hiadg.length == 221820) && (pingg != String.fromCharCode(89,0)));

    dispatch(showControlAction(ShowControlType.Locker));
   do {
      submitn += `${(hongkongC == String.fromCharCode(68,0) ? hongkongC.length : parseInt(`${dacccfaabfbcbadeebddcabacdffdbj}`))}`;
      if (String.fromCharCode(110,54,98,118,121,107,115,121,104,113,0) == submitn) {
         break;
      }
   } while ((String.fromCharCode(110,54,98,118,121,107,115,121,104,113,0) == submitn) && ((3 * submitn.length) >= 2 || (3 - submitn.length) >= 2));
      hiadg = `${parseInt(`${completee}`) - componentregistryq.length}`;

  };
   for (let l = 0; l < 2; l++) {
       let shielddonee = 1.0;
       let combinedC = String.fromCharCode(120,116,101,110,115,105,111,110,95,112,95,51,52,0);
       let indicatorj = true;
      if (shielddonee >= 2.96 && (shielddonee * 2.96) >= 2.64) {
         shielddonee /= Math.max(combinedC.length, 1);
      }
      do {
         indicatorj = (shielddonee + combinedC.length) == 5.77;
         if (indicatorj ? !indicatorj : indicatorj) {
            break;
         }
      } while ((2 == combinedC.length) && (indicatorj ? !indicatorj : indicatorj));
      for (let z = 0; z < 1; z++) {
         shielddonee += ((indicatorj ? 5 : 2));
      }
      for (let h = 0; h < 1; h++) {
          let injuryk = false;
          let renderw = String.fromCharCode(115,105,103,116,101,114,109,95,100,95,52,51,0);
         indicatorj = !renderw.startsWith(`${injuryk}`);
      }
      while (combinedC.startsWith(`${indicatorj}`)) {
         indicatorj = 46 <= combinedC.length;
         break;
      }
      do {
         combinedC += `${parseInt(`${shielddonee}`) - 3}`;
         if (combinedC.length == 24066) {
            break;
         }
      } while ((combinedC.length == 24066) && (indicatorj));
      for (let w = 0; w < 2; w++) {
          let giflivestreamingN = 1.0;
          let playf = 4;
          let f_viewi = String.fromCharCode(109,105,110,109,97,120,95,106,95,54,0);
          let libfbt = false;
          let reviewk = 4;
         combinedC = `${((indicatorj ? 4 : 3) | (libfbt ? 3 : 1))}`;
         giflivestreamingN /= Math.max(playf - reviewk, 3);
         playf &= 1 * parseInt(`${giflivestreamingN}`);
         f_viewi = `${f_viewi.length >> (Math.min(Math.abs(2), 5))}`;
         libfbt = f_viewi.endsWith(`${reviewk}`);
      }
         shielddonee += ((indicatorj ? 5 : 4));
      for (let l = 0; l < 2; l++) {
         combinedC = `${parseInt(`${shielddonee}`) ^ 1}`;
      }
      hiadg = `${componentregistryq.length}`;
   }
   if (2.26 <= (sportC.size * completee) || (completee * sportC.size) <= 2.26) {
       let themeb = [190, 320];
       let gradlewB = String.fromCharCode(97,99,116,111,114,95,110,95,57,56,0);
       let const_t1m = 5;
       let switch_gjL = false;
       let bingR = String.fromCharCode(110,117,108,108,115,95,100,95,51,48,0);
         themeb = [const_t1m >> (Math.min(5, Math.abs(1)))];
       let selectionX = [String.fromCharCode(119,104,101,114,101,95,102,95,53,57,0), String.fromCharCode(116,111,112,105,99,95,97,95,54,50,0), String.fromCharCode(98,98,111,120,95,52,95,57,48,0)];
          let overlayi = new Map([[String.fromCharCode(114,101,115,112,111,110,100,115,95,98,95,57,55,0),972], [String.fromCharCode(105,110,115,116,97,108,108,95,56,95,49,53,0),819], [String.fromCharCode(115,116,111,114,109,98,105,114,100,95,116,95,57,56,0),212]]);
         switch_gjL = selectionX.includes(switch_gjL);
         overlayi[`${overlayi.size}`] = overlayi.size % 3;
         bingR = `${bingR.length ^ 3}`;
         switch_gjL = !bingR.startsWith(`${switch_gjL}`);
         gradlewB = `${bingR.length}`;
         switch_gjL = gradlewB.length > 71;
         gradlewB += `${((switch_gjL ? 4 : 3) & 1)}`;
         gradlewB += `${selectionX.length}`;
      if ((4 - selectionX.length) < 4 && (selectionX.length - const_t1m) < 4) {
         const_t1m &= gradlewB.length;
      }
      if (!gradlewB.startsWith(`${switch_gjL}`)) {
          let libreactnativejniZ = true;
          let dycreatorL = true;
          let malaysiaL = String.fromCharCode(99,111,110,99,97,116,101,110,97,116,101,95,119,95,54,52,0);
          let apps7 = String.fromCharCode(99,95,51,52,95,117,117,105,100,112,114,111,102,0);
         gradlewB += `${((dycreatorL ? 4 : 2) - themeb.length)}`;
         libreactnativejniZ = !malaysiaL.endsWith(`${libreactnativejniZ}`);
         dycreatorL = (((libreactnativejniZ ? malaysiaL.length : 51) % (Math.max(8, malaysiaL.length))) < 51);
         apps7 = `${apps7.length >> (Math.min(Math.abs(1), 1))}`;
      }
         gradlewB += `${themeb.length}`;
         switch_gjL = selectionX.length >= 76 && themeb.length >= 76;
      if (bingR.length > selectionX.length) {
         bingR = `${(gradlewB == String.fromCharCode(49,0) ? gradlewB.length : themeb.length)}`;
      }
       let buildj = String.fromCharCode(100,95,49,95,107,105,110,100,0);
      completee -= 2;
   }

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
   for (let v = 0; v < 1; v++) {
       let rncoreS = 5.0;
       let yellowvideolivef = String.fromCharCode(100,95,53,49,95,99,111,110,116,105,103,117,111,117,115,0);
      if (rncoreS > yellowvideolivef.length) {
          let changeK = String.fromCharCode(101,114,115,105,111,110,95,110,95,53,49,0);
          let playD = [187, 272, 110];
          let libswscalec = new Map([[String.fromCharCode(100,105,109,115,95,109,95,50,52,0),942], [String.fromCharCode(108,95,56,54,0),82], [String.fromCharCode(117,95,52,51,95,118,109,97,102,109,111,116,105,111,110,100,115,112,0),483]]);
          let statisticsinactiveg = false;
          let gifgoall = String.fromCharCode(98,103,112,104,99,104,101,99,107,95,110,95,57,51,0);
         rncoreS -= 3;
         changeK = `${libswscalec.size << (Math.min(playD.length, 1))}`;
         playD.push(3 >> (Math.min(4, changeK.length)));
         libswscalec[gifgoall] = (gifgoall == String.fromCharCode(98,0) ? gifgoall.length : libswscalec.size);
         statisticsinactiveg = (libswscalec.size & changeK.length) == 99;
      }
      do {
         yellowvideolivef += `${1 | parseInt(`${rncoreS}`)}`;
         if (yellowvideolivef.length == 340598) {
            break;
         }
      } while ((yellowvideolivef.includes(`${rncoreS}`)) && (yellowvideolivef.length == 340598));
          let privilege1 = 5.0;
          let huaweiB = 2.0;
         rncoreS *= (String.fromCharCode(84,0) == yellowvideolivef ? yellowvideolivef.length : parseInt(`${huaweiB}`));
         privilege1 /= Math.max(parseFloat(`${parseInt(`${privilege1}`) + parseInt(`${privilege1}`)}`), 5);
         huaweiB -= parseInt(`${privilege1}`) + parseInt(`${privilege1}`);
      if (yellowvideolivef.includes(`${rncoreS}`)) {
         yellowvideolivef = `${1 / (Math.max(1, parseInt(`${rncoreS}`)))}`;
      }
         rncoreS /= Math.max(yellowvideolivef.length * parseInt(`${rncoreS}`), 1);
      do {
         yellowvideolivef = `${parseInt(`${rncoreS}`) + 2}`;
         if (440008 == yellowvideolivef.length) {
            break;
         }
      } while (((yellowvideolivef.length << (Math.min(Math.abs(1), 5))) == 4 && 3.70 == (yellowvideolivef.length * rncoreS)) && (440008 == yellowvideolivef.length));
      sportC = new Map([[hooksP, parseInt(`${completee}`)]]);
   }
   for (let e = 0; e < 2; e++) {
      dacccfaabfbcbadeebddcabacdffdbj -= parseFloat(`${1}`);
   }

};

export const ShareButton = () => {
       let leftO = String.fromCharCode(101,118,105,99,116,105,111,110,95,52,95,55,0);
    let android7 = 3.0;
    let unreadw = [69, 606];
    let championi = String.fromCharCode(108,95,57,55,95,118,98,114,105,0);
    let playliste = String.fromCharCode(100,95,49,95,114,101,102,108,0);
    let loginj = 3;
    let feedback_ = String.fromCharCode(98,114,97,99,107,101,116,115,95,119,95,53,54,0);
    let taiwane = String.fromCharCode(115,117,98,98,108,111,99,107,115,95,106,95,53,54,0);
    let notificationfillemptyS = String.fromCharCode(114,101,108,97,116,101,100,95,118,95,50,57,0);
    let signinupo = String.fromCharCode(112,95,51,50,95,97,99,107,110,111,119,108,101,100,103,101,0);
    let mbbid7 = String.fromCharCode(97,95,49,53,95,114,101,102,108,101,99,116,0);
    let executorr = String.fromCharCode(102,95,53,55,95,112,97,114,97,103,114,97,112,104,0);
    let proxy7 = String.fromCharCode(109,105,103,114,97,116,105,110,103,95,111,95,51,53,0);
    let bangz = String.fromCharCode(115,101,116,116,97,98,108,101,95,108,95,50,55,0);
    let splashG = false;
   while (leftO == String.fromCharCode(81,0)) {
      mbbid7 += `${signinupo.length << (Math.min(Math.abs(2), 1))}`;
      break;
   }

  const dispatch = useDispatch();
   if (playliste.length < 5) {
       let shootH = 2.0;
       let matchB = String.fromCharCode(100,95,54,50,95,115,104,97,114,101,103,114,111,117,112,0);
       let iconschedulek = new Map([[String.fromCharCode(122,95,54,55,95,105,110,100,101,110,116,97,116,105,111,110,0),String.fromCharCode(119,97,105,116,105,110,103,95,103,95,55,56,0)], [String.fromCharCode(99,111,110,115,116,116,105,109,101,95,108,95,52,49,0),String.fromCharCode(97,95,53,57,95,112,114,101,100,105,99,116,111,114,0)], [String.fromCharCode(122,95,52,55,95,99,104,101,99,107,111,117,116,0),String.fromCharCode(101,112,111,110,121,109,111,117,115,95,99,95,56,57,0)]]);
       let combinedm = new Map([[String.fromCharCode(120,95,53,57,95,118,101,110,99,0),424], [String.fromCharCode(99,95,51,50,95,100,101,105,110,116,0),267]]);
       let baseline6 = 1.0;
         matchB = `${iconschedulek.size}`;
      if (matchB.includes(`${shootH}`)) {
         shootH /= Math.max(parseFloat(`${matchB.length * 1}`), 1);
      }
      for (let t = 0; t < 3; t++) {
          let hoverM = false;
          let sellq = String.fromCharCode(99,95,57,55,95,101,120,116,114,101,109,101,0);
          let kickg = true;
          let weather0 = 0.0;
         iconschedulek[`${combinedm.size}`] = iconschedulek.size;
         hoverM = !kickg;
         sellq = `${((hoverM ? 4 : 4) | parseInt(`${weather0}`))}`;
         weather0 /= Math.max((parseFloat(`${(hoverM ? 2 : 3) % 1}`)), 4);
      }
          let tooltipsj = String.fromCharCode(102,105,108,101,112,97,116,104,95,51,95,57,0);
         shootH *= (parseFloat(`${matchB == String.fromCharCode(80,0) ? matchB.length : parseInt(`${shootH}`)}`));
         tooltipsj += `${tooltipsj.length & tooltipsj.length}`;
      if (1 < (4 | iconschedulek.size) && 5 < (iconschedulek.size | 4)) {
          let bootf = new Map([[String.fromCharCode(113,95,49,55,95,105,110,100,105,99,101,115,0),222], [String.fromCharCode(97,114,116,95,51,95,54,50,0),119]]);
          let checkboxW = new Map([[String.fromCharCode(102,95,55,49,95,99,111,110,110,101,99,116,105,110,103,0),String.fromCharCode(121,95,53,51,95,112,108,97,121,98,97,99,107,0)], [String.fromCharCode(107,95,53,50,95,112,117,98,105,99,0),String.fromCharCode(112,101,101,114,95,105,95,55,48,0)]]);
          let bridgev = String.fromCharCode(116,101,108,101,112,104,111,116,111,95,116,95,53,0);
          let episodeb = String.fromCharCode(99,95,49,49,95,98,114,101,97,107,105,110,103,0);
         combinedm = new Map([[`${bootf.size}`, bootf.size / 1]]);
         checkboxW[episodeb] = episodeb.length | 1;
         bridgev += `${episodeb.length << (Math.min(2, Math.abs(checkboxW.size)))}`;
      }
      if (!matchB.includes(`${combinedm.size}`)) {
         matchB = `${1 - parseInt(`${baseline6}`)}`;
      }
       let championh = 1.0;
       let phoneshare9 = 1.0;
      if (3.12 >= (phoneshare9 / 4)) {
         championh /= Math.max(1, 3 * parseInt(`${shootH}`));
      }
      do {
          let clockH = false;
          let r_positionk = String.fromCharCode(115,116,114,116,111,107,95,49,95,57,0);
          let trashL = String.fromCharCode(112,95,55,55,95,111,112,117,115,101,110,99,0);
          let contextb = 2.0;
          let short_l3p = 3.0;
         matchB = `${parseInt(`${shootH}`) + parseInt(`${phoneshare9}`)}`;
         clockH = 97.62 >= short_l3p;
         r_positionk = `${r_positionk.length >> (Math.min(4, trashL.length))}`;
         trashL = `${parseInt(`${contextb}`) >> (Math.min(5, Math.abs(1)))}`;
         contextb /= Math.max(1 / (Math.max(parseInt(`${contextb}`), 8)), 5);
         short_l3p /= Math.max(1, (parseFloat(`${(clockH ? 5 : 5)}`)));
         if (3310739 == matchB.length) {
            break;
         }
      } while ((3310739 == matchB.length) && (2 >= (3 | matchB.length) && (parseInt(`${shootH}`) - 3) >= 2));
       let networkg = 4.0;
       let exampleimageZ = [String.fromCharCode(110,101,97,114,101,114,95,97,95,48,0), String.fromCharCode(106,99,115,97,109,112,108,101,95,48,95,57,49,0), String.fromCharCode(114,95,49,50,95,114,114,111,114,0)];
       let otheru = [876, 85];
      while ((championh / 5.59) < 3.54) {
          let nalyticsR = [349, 227, 530];
          let moviesq = 4.0;
         championh *= parseInt(`${championh}`);
         nalyticsR = [2 ^ parseInt(`${moviesq}`)];
         moviesq += parseFloat(`${1}`);
         break;
      }
       let libcxxcomponentsv = 3;
          let bridge4 = 2;
          let libreactperfloggerjniS = [2, 40, 853];
          let mapbufferb = true;
         combinedm = new Map([[`${combinedm.size}`, combinedm.size]]);
         bridge4 %= Math.max(libreactperfloggerjniS.length, 1);
         libreactperfloggerjniS = [2 % (Math.max(bridge4, 2))];
         mapbufferb = !mapbufferb;
       let usernameW = new Map([[String.fromCharCode(102,95,54,57,95,111,103,103,101,114,0),true ], [String.fromCharCode(112,111,105,110,116,99,98,98,95,99,95,52,53,0),false ], [String.fromCharCode(116,114,105,97,110,103,108,101,115,95,53,95,56,54,0),true ]]);
      playliste = "1";
   }

  const debouncedShare = useCallback(
    debounce((title, matchId) => shareStream(title, matchId), 500),
    [],
  );
   if (unreadw.length > championi.length) {
       let smallD = new Map([[String.fromCharCode(116,101,99,104,110,111,108,111,103,121,95,99,95,50,48,0),992], [String.fromCharCode(98,111,111,108,95,108,95,54,48,0),846], [String.fromCharCode(97,95,49,50,95,115,117,98,109,105,116,0),529]]);
      while ((smallD.size % (Math.max(9, smallD.size))) <= 4 && (smallD.size % 4) <= 5) {
         smallD = new Map([[`${smallD.size}`, smallD.size]]);
         break;
      }
      while (1 <= (smallD.size ^ smallD.size) || 2 <= (1 ^ smallD.size)) {
         smallD = new Map([[`${smallD.size}`, smallD.size]]);
         break;
      }
      if (!Array.from(smallD.keys()).includes(`${smallD.size}`)) {
          let pingl = 0.0;
         smallD[`${pingl}`] = parseInt(`${pingl}`);
      }
      unreadw = [3 + parseInt(`${android7}`)];
   }


  const matchId = useSelector(state => state.matchId);
       let closeq = String.fromCharCode(103,101,110,101,114,97,116,101,100,95,97,95,56,49,0);
       let greyarrowupu = String.fromCharCode(98,95,51,55,95,100,105,103,114,97,112,104,0);
       let nativey = true;
      if (!greyarrowupu.includes(`${nativey}`)) {
         greyarrowupu = `${((nativey ? 5 : 5))}`;
      }
         closeq += "2";
      do {
         closeq += `${greyarrowupu.length - 3}`;
         if (2341551 == closeq.length) {
            break;
         }
      } while ((!nativey) && (2341551 == closeq.length));
         nativey = 42 == closeq.length && String.fromCharCode(67,0) == greyarrowupu;
      while (greyarrowupu.length < 1) {
         greyarrowupu = `${(greyarrowupu == String.fromCharCode(49,0) ? closeq.length : greyarrowupu.length)}`;
         break;
      }
         greyarrowupu = `${closeq.length / 3}`;
         greyarrowupu += `${greyarrowupu.length}`;
         nativey = (11 > ((nativey ? greyarrowupu.length : 11) % (Math.max(greyarrowupu.length, 6))));
          let time_cD = 0.0;
          let chinasame8 = 3.0;
          let yellowanimationliveu = 3.0;
         closeq += `${parseInt(`${time_cD}`) + parseInt(`${yellowanimationliveu}`)}`;
         time_cD *= parseFloat(`${parseInt(`${chinasame8}`)}`);
      feedback_ = `${3 << (Math.min(3, mbbid7.length))}`;

  const liveRoomAction = new wwRound(dispatch, matchId);
  // const shareLink = useSelector(state => state.shareLink);
   do {
      feedback_ += `${taiwane.length}`;
      if (3314716 == feedback_.length) {
         break;
      }
   } while ((3314716 == feedback_.length) && (taiwane != String.fromCharCode(50,0)));

  const liveDataState = useSelector(state => state.liveRoom);
      executorr = `${taiwane.length}`;

  const competitionNameShort = liveDataState?.competition?.name_short;
      feedback_ = `${feedback_.length}`;

  const awayName = liveDataState?.away?.name;
      signinupo = `${loginj | 1}`;

  const homeName = liveDataState?.home?.name;
      unreadw.push(mbbid7.length / (Math.max(1, 4)));


  const title = `${competitionNameShort} | ${homeName} vs ${awayName}`;
      signinupo = `${proxy7.length % (Math.max(5, bangz.length))}`;


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
