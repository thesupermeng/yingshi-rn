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
import yys_Singapore, {
  setVideoControlProp,
  setVideoFullScreen,
  setVideoPlayerAction,
  setVideoSource,
} from '../../../screens/Sports/MatchDetails/action';
import VideoPlayerstyles from '../yys_gpay_roboto';

import PlayImg from '../images/icons/networkMatches.png';
import PauseImg from '../images/icons/activeHeader.png';
import LockImg from '../images/icons/eventHongkongDropdown.png';
import UnlockImg from '../images/icons/agreementHolderTrash.png';

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
import {VideoLiveType} from '../../../global/yys_dice_kuaishou';
import {StyleSheet} from 'react-native';
import {ShowControlType} from '../config';
import {yys_Build} from '../../../global/yys_chart';
import store from '@redux/yys_sport_shrink';
import {floatingPlayer} from '@redux/reducers/floatingPlayer';
import debounce from 'lodash.debounce';
import {useCallback} from 'react';
import {useEffect} from 'react';
import AppSettingsAction from '@redux/actions/appSettingsAction';
import vars from '../../../utility/yys_textinput';

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
       let trashn = [903, 947];
    let privacyD = String.fromCharCode(117,110,105,111,110,95,110,95,56,55,0);
    let countdown2 = 2.0;
    let alertM = String.fromCharCode(114,101,102,100,117,112,101,95,99,95,55,55,0);
    let sentryD = String.fromCharCode(98,101,110,99,95,106,95,55,56,0);
    let minig = [195, 531, 614];
    let membershipO = String.fromCharCode(116,105,110,121,95,121,95,53,56,0);
    let customl = true;
      alertM += `${2 ^ privacyD.length}`;
   if (customl) {
      customl = (12 >= (membershipO.length * (customl ? membershipO.length : 12)));
   }
   if (sentryD.length == privacyD.length) {
      privacyD += `${(alertM == String.fromCharCode(69,0) ? alertM.length : minig.length)}`;
   }
   if (customl) {
       let photoq = String.fromCharCode(108,95,55,53,95,103,114,97,99,101,0);
       let entryU = new Map([[String.fromCharCode(103,97,117,115,115,105,97,110,95,49,95,57,54,0),330], [String.fromCharCode(99,95,53,55,95,102,97,117,108,116,121,0),292], [String.fromCharCode(99,117,100,97,117,112,108,111,97,100,95,100,95,49,54,0),720]]);
      if (!photoq.includes(`${entryU.size}`)) {
          let actionsk = String.fromCharCode(114,101,100,117,99,116,105,111,110,115,95,102,95,51,48,0);
          let confirmation2 = new Map([[String.fromCharCode(115,95,54,50,95,115,101,109,105,98,111,108,100,0),874], [String.fromCharCode(109,95,57,53,95,115,113,108,105,116,101,114,101,98,97,115,101,114,0),652], [String.fromCharCode(100,95,51,54,95,101,120,99,108,0),985]]);
          let renderT = [339, 364, 944];
         photoq = `${3 * renderT.length}`;
         actionsk = `${(String.fromCharCode(54,0) == actionsk ? confirmation2.size : actionsk.length)}`;
         confirmation2 = new Map([[`${confirmation2.size}`, (String.fromCharCode(121,0) == actionsk ? actionsk.length : confirmation2.size)]]);
         renderT.push((actionsk == String.fromCharCode(48,0) ? actionsk.length : confirmation2.size));
      }
      while (!photoq.includes(`${entryU.size}`)) {
          let libswscale5 = String.fromCharCode(114,98,115,112,95,117,95,51,55,0);
         photoq += `${photoq.length % (Math.max(2, 2))}`;
         libswscale5 = `${(String.fromCharCode(75,0) == libswscale5 ? libswscale5.length : libswscale5.length)}`;
         break;
      }
          let executorz = String.fromCharCode(106,95,56,52,95,115,116,115,100,0);
          let libfabricjniY = String.fromCharCode(105,110,97,99,116,105,118,101,95,102,95,57,51,0);
         photoq = `${2 >> (Math.min(3, Math.abs(entryU.size)))}`;
         executorz = `${executorz.length + 3}`;
         libfabricjniY += `${executorz.length}`;
       let private_0cP = 1.0;
       let logout9 = 3.0;
          let rewardf = String.fromCharCode(114,101,109,117,120,95,112,95,55,50,0);
          let bdxadsdky = true;
         private_0cP -= parseFloat(`${entryU.size}`);
         rewardf += `${rewardf.length}`;
         bdxadsdky = !rewardf.endsWith(`${bdxadsdky}`);
         private_0cP *= (parseFloat(`${photoq == String.fromCharCode(118,0) ? photoq.length : parseInt(`${private_0cP}`)}`));
      customl = String.fromCharCode(111,0) == membershipO;
   }

    if (onPress) onPress();
   for (let l = 0; l < 1; l++) {
       let shootq = new Map([[String.fromCharCode(104,102,121,117,95,52,95,54,56,0),676], [String.fromCharCode(109,95,53,48,0),903]]);
         shootq[`${shootq.size}`] = shootq.size;
         shootq = new Map([[`${shootq.size}`, shootq.size]]);
          let nativemoduleS = 3;
          let launcher8 = String.fromCharCode(120,95,49,52,95,111,112,116,97,98,108,101,0);
          let chinasameF = String.fromCharCode(114,95,53,50,95,102,105,116,0);
         shootq[chinasameF] = (chinasameF == String.fromCharCode(115,0) ? launcher8.length : chinasameF.length);
         nativemoduleS /= Math.max(4, nativemoduleS);
         launcher8 += `${nativemoduleS}`;
      alertM += `${(String.fromCharCode(110,0) == membershipO ? membershipO.length : (customl ? 4 : 5))}`;
   }
   if (!privacyD.endsWith(`${trashn.length}`)) {
      trashn = [privacyD.length % (Math.max(4, parseInt(`${countdown2}`)))];
   }
   for (let r = 0; r < 3; r++) {
      alertM += `${sentryD.length}`;
   }
   if (!customl || (countdown2 - 2.95) == 1.33) {
       let libjsijniprofiler4 = true;
       let libzeusV = new Map([[String.fromCharCode(99,95,49,48,95,103,101,110,101,114,97,116,101,102,105,108,101,0),73], [String.fromCharCode(118,95,57,55,95,99,111,109,112,101,110,115,97,116,105,111,110,0),181], [String.fromCharCode(103,101,111,103,114,97,112,104,105,99,97,108,95,54,95,50,53,0),836]]);
       let armvaW = String.fromCharCode(103,101,116,98,105,116,95,102,95,53,56,0);
       let templateprocessoro = new Map([[String.fromCharCode(108,95,56,51,95,109,101,114,103,101,114,0),321], [String.fromCharCode(108,95,56,51,95,97,97,115,99,0),272]]);
       let main_cC = new Map([[String.fromCharCode(119,95,55,52,95,103,101,116,115,111,99,107,97,100,100,114,0),619], [String.fromCharCode(100,95,52,55,95,101,100,105,116,97,98,108,101,0),507]]);
      while (libjsijniprofiler4) {
         main_cC = new Map([[`${libzeusV.size}`, libzeusV.size >> (Math.min(2, Math.abs(templateprocessoro.size)))]]);
         break;
      }
      do {
         libzeusV[`${libjsijniprofiler4}`] = (1 * (libjsijniprofiler4 ? 1 : 2));
         if (1474233 == libzeusV.size) {
            break;
         }
      } while ((1474233 == libzeusV.size) && (libzeusV[`${templateprocessoro.size}`] == null));
      if (templateprocessoro.size >= main_cC.size) {
          let lessq = [459, 674];
          let buffera = false;
          let project0 = false;
          let libreact1 = true;
          let downloaderl = 4.0;
         main_cC[`${project0}`] = ((libjsijniprofiler4 ? 4 : 5) + (project0 ? 4 : 5));
         lessq = [((libreact1 ? 1 : 5) * parseInt(`${downloaderl}`))];
         buffera = lessq.length == 56;
         libreact1 = lessq.length == 12;
         downloaderl += ((buffera ? 2 : 2) + 1);
      }
      do {
          let score2 = String.fromCharCode(104,95,50,95,116,97,103,115,116,114,0);
          let macaua = String.fromCharCode(122,95,52,54,95,114,101,115,117,108,117,116,105,111,110,0);
         libzeusV = new Map([[`${libzeusV.size}`, macaua.length >> (Math.min(2, Math.abs(libzeusV.size)))]]);
         score2 = `${1 << (Math.min(5, score2.length))}`;
         macaua = `${2 & score2.length}`;
         if (libzeusV.size == 3095748) {
            break;
         }
      } while ((libzeusV.size == 3095748) && ((1 >> (Math.min(2, Math.abs(libzeusV.size)))) == 5 || 5 == (libzeusV.size >> (Math.min(Math.abs(1), 5)))));
         armvaW = "1";
         libzeusV[`${libzeusV.size}`] = libzeusV.size << (Math.min(Math.abs(3), 2));
          let libfolly7 = 3.0;
          let themeV = [567, 969, 941];
          let libfbQ = String.fromCharCode(115,118,97,114,105,110,116,95,57,95,56,56,0);
         libjsijniprofiler4 = libzeusV.size < armvaW.length;
         libfolly7 *= themeV.length;
         themeV = [themeV.length | 1];
         libfbQ = `${themeV.length + libfbQ.length}`;
         armvaW += `${templateprocessoro.size | 2}`;
      customl = armvaW == String.fromCharCode(49,0);
   }

    Orientation.lockToPortrait();
   while (!membershipO.startsWith(`${minig.length}`)) {
       let rewindu = new Map([[String.fromCharCode(112,104,121,115,95,97,95,54,48,0),String.fromCharCode(104,95,51,48,95,121,114,121,105,0)], [String.fromCharCode(115,97,118,101,114,95,106,95,51,48,0),String.fromCharCode(103,111,101,114,108,105,95,116,95,54,49,0)]]);
       let libfbjnim = String.fromCharCode(105,110,116,101,114,102,114,97,109,101,95,55,95,51,54,0);
       let interstitial4 = [218, 638, 128];
       let regengN = String.fromCharCode(110,101,116,95,55,95,52,0);
         interstitial4.push(libfbjnim.length % (Math.max(10, rewindu.size)));
         regengN += `${libfbjnim.length * 1}`;
      for (let y = 0; y < 1; y++) {
          let castingd = [721, 610, 462];
          let historyx = false;
          let flipper3 = String.fromCharCode(109,95,54,55,95,97,114,110,114,0);
         regengN += `${libfbjnim.length}`;
         castingd = [flipper3.length % 1];
         historyx = !historyx && flipper3.length > 18;
      }
         interstitial4 = [(regengN == String.fromCharCode(120,0) ? regengN.length : libfbjnim.length)];
         libfbjnim = "3";
         rewindu[`${interstitial4.length}`] = interstitial4.length & 3;
          let largel = String.fromCharCode(101,95,55,53,95,98,105,119,103,116,0);
          let stations4 = 0;
          let xadsdk3 = [377, 561];
         regengN += `${1 * interstitial4.length}`;
         largel += `${stations4 >> (Math.min(1, Math.abs(2)))}`;
         stations4 &= largel.length | xadsdk3.length;
         xadsdk3.push(largel.length - stations4);
       let libffmpegkitN = 1.0;
       let black7 = 1.0;
         interstitial4.push((libfbjnim == String.fromCharCode(81,0) ? libfbjnim.length : interstitial4.length));
         black7 += rewindu.size >> (Math.min(Math.abs(1), 1));
          let hookY = 2.0;
          let skip3 = String.fromCharCode(106,95,54,52,95,115,101,110,100,101,114,115,0);
          let cores = 1.0;
         libfbjnim = `${2 + rewindu.size}`;
         hookY /= Math.max(parseFloat(`${2}`), 4);
         skip3 += "1";
         cores -= (skip3 == String.fromCharCode(113,0) ? parseInt(`${cores}`) : skip3.length);
      if (regengN.length <= 1) {
         regengN += `${parseInt(`${libffmpegkitN}`)}`;
      }
      membershipO = `${trashn.length}`;
      break;
   }
       let styleL = 0.0;
       let back8 = [320, 370];
       let stationse = 4;
      do {
         back8 = [1];
         if (back8.length == 4320859) {
            break;
         }
      } while ((4.84 >= styleL) && (back8.length == 4320859));
      if ((parseFloat(`${back8.length}`) * styleL) > 3.48) {
         styleL -= parseFloat(`${3}`);
      }
          let mbridge2 = 1.0;
         back8.push(stationse / (Math.max(6, parseInt(`${mbridge2}`))));
         styleL /= Math.max(parseFloat(`${3 >> (Math.min(Math.abs(stationse), 5))}`), 1);
      for (let p = 0; p < 2; p++) {
          let graphm = [556, 201];
         back8 = [back8.length / 2];
         graphm = [graphm.length / (Math.max(9, graphm.length))];
      }
      while (back8.length <= stationse) {
          let signinup0 = String.fromCharCode(110,95,54,95,109,115,117,98,0);
          let toponw = 5.0;
         stationse *= parseInt(`${styleL}`);
         signinup0 += `${signinup0.length >> (Math.min(Math.abs(3), 2))}`;
         toponw /= Math.max(1, parseFloat(`${signinup0.length ^ 1}`));
         break;
      }
      if (3 > stationse) {
          let modityP = 3;
         back8.push(stationse - modityP);
      }
      do {
         styleL *= parseFloat(`${stationse * 2}`);
         if (styleL == 3278404.0) {
            break;
         }
      } while ((2.55 > (styleL + 4.26) || 4.26 > (styleL + parseFloat(`${back8.length}`))) && (styleL == 3278404.0));
      while (4 == (back8.length * stationse) || (stationse * 4) == 2) {
         back8 = [1 % (Math.max(7, stationse))];
         break;
      }
      minig.push(stationse / (Math.max(2, membershipO.length)));
   if ((1.78 + countdown2) <= 2.56 && (minig.length + 1) <= 1) {
      countdown2 /= Math.max(3, (parseFloat(`${(customl ? 2 : 3) - 1}`)));
   }
      sentryD = `${1 >> (Math.min(5, alertM.length))}`;

    dispatch(setVideoFullScreen(false));
       let serviceN = 1.0;
       let libfbP = true;
       let mbbannerI = 2.0;
      for (let w = 0; w < 3; w++) {
         libfbP = 64.9 == mbbannerI;
      }
         libfbP = mbbannerI > 77.78 || !libfbP;
      for (let r = 0; r < 2; r++) {
          let yellowD = String.fromCharCode(109,95,52,55,95,114,97,99,105,110,103,0);
         libfbP = mbbannerI >= serviceN;
         yellowD += `${yellowD.length * yellowD.length}`;
      }
      for (let h = 0; h < 2; h++) {
          let successC = String.fromCharCode(100,101,101,112,108,105,110,107,95,54,95,54,50,0);
          let pangleU = String.fromCharCode(98,105,110,100,120,95,99,95,52,54,0);
          let catalogp = 0;
         libfbP = 90.34 <= serviceN;
         successC = `${catalogp}`;
         pangleU += `${catalogp >> (Math.min(pangleU.length, 2))}`;
      }
         serviceN -= ((libfbP ? 5 : 5) % (Math.max(parseInt(`${serviceN}`), 9)));
      do {
          let androidK = 4.0;
          let predictionC = [String.fromCharCode(105,100,101,110,116,95,105,95,57,55,0), String.fromCharCode(114,101,108,111,97,100,95,105,95,53,51,0), String.fromCharCode(98,115,111,110,95,56,95,55,48,0)];
          let specC = String.fromCharCode(98,117,110,100,108,101,95,122,95,50,56,0);
         libfbP = 43.14 > mbbannerI;
         androidK *= parseFloat(`${parseInt(`${androidK}`)}`);
         predictionC = [predictionC.length];
         specC += `${specC.length}`;
         if (libfbP ? !libfbP : libfbP) {
            break;
         }
      } while ((5.69 == (serviceN * 3.28) && serviceN == 3.28) && (libfbP ? !libfbP : libfbP));
         mbbannerI /= Math.max(1, 3);
         mbbannerI /= Math.max(2, parseInt(`${serviceN}`));
      for (let w = 0; w < 3; w++) {
         libfbP = mbbannerI == 58.68;
      }
      countdown2 += parseFloat(`${sentryD.length}`);
   if ((minig.length - sentryD.length) > 5) {
      minig.push(alertM.length | 1);
   }
       let libhermesd = String.fromCharCode(103,95,52,52,95,100,101,108,116,97,0);
       let langZ = 1.0;
       let connectionE = 2.0;
         langZ += parseInt(`${connectionE}`);
       let fastforwardn = String.fromCharCode(102,95,49,51,95,102,105,108,108,105,110,0);
      membershipO = `${3 >> (Math.min(4, alertM.length))}`;
      libhermesd += "3";
   if (alertM.length >= trashn.length) {
       let sharedn = new Map([[String.fromCharCode(115,97,109,112,95,108,95,56,48,0),475], [String.fromCharCode(102,111,117,110,100,95,110,95,57,52,0),313]]);
       let u_playerQ = new Map([[String.fromCharCode(101,118,101,114,121,98,111,100,121,95,98,95,56,57,0),false ], [String.fromCharCode(109,95,53,54,95,111,116,111,105,0),false ], [String.fromCharCode(102,100,99,116,100,115,112,95,102,95,52,49,0),true ]]);
       let clubL = [838, 64, 901];
       let tooltipsq = 1.0;
      while ((tooltipsq / (Math.max(7, parseFloat(`${clubL.length}`)))) < 4.33 || (clubL.length | 3) < 4) {
          let p_lock0 = 3;
          let charty = String.fromCharCode(100,95,55,95,112,108,97,121,0);
          let componentregistryh = String.fromCharCode(113,95,50,56,95,105,115,108,101,97,112,0);
          let show5 = 1;
          let injuryS = String.fromCharCode(112,114,111,116,101,99,116,95,105,95,53,55,0);
         tooltipsq += (parseFloat(`${componentregistryh == String.fromCharCode(107,0) ? componentregistryh.length : show5}`));
         p_lock0 -= injuryS.length;
         charty = `${injuryS.length}`;
         show5 ^= 1;
         break;
      }
          let scheduleM = [56, 661, 125];
          let orientationz = new Map([[String.fromCharCode(108,95,55,54,95,101,120,112,108,111,114,101,114,0),String.fromCharCode(117,95,55,53,95,99,111,101,102,102,115,112,0)], [String.fromCharCode(112,114,101,100,105,99,116,111,114,95,101,95,52,48,0),String.fromCharCode(105,100,101,116,95,106,95,55,54,0)], [String.fromCharCode(115,104,111,114,116,116,101,114,109,95,51,95,56,57,0),String.fromCharCode(121,95,56,50,95,100,97,105,0)]]);
          let hongkong3 = 2;
         sharedn[`${orientationz.size}`] = 2 & orientationz.size;
         scheduleM.push(hongkong3 - scheduleM.length);
         hongkong3 += 3;
      do {
         clubL = [3];
         if (368638 == clubL.length) {
            break;
         }
      } while ((368638 == clubL.length) && (parseFloat(`${clubL.length}`) < tooltipsq));
         tooltipsq *= parseFloat(`${sharedn.size}`);
          let textx = String.fromCharCode(101,95,56,57,95,106,117,103,103,108,101,0);
          let sellS = 0.0;
          let catalogK = true;
         clubL = [u_playerQ.size % 2];
         textx += `${1 + textx.length}`;
         sellS /= Math.max(parseFloat(`${textx.length}`), 5);
         catalogK = 2.20 == sellS;
      if (5.69 < (1.68 * tooltipsq) && (u_playerQ.size << (Math.min(Math.abs(3), 1))) < 3) {
         u_playerQ = new Map([[`${u_playerQ.size}`, u_playerQ.size]]);
      }
      if (2 >= (3 << (Math.min(3, clubL.length))) || 5 >= (clubL.length << (Math.min(Math.abs(3), 2)))) {
         sharedn = new Map([[`${sharedn.size}`, sharedn.size >> (Math.min(5, Math.abs(parseInt(`${tooltipsq}`))))]]);
      }
      for (let x = 0; x < 2; x++) {
         tooltipsq += parseFloat(`${sharedn.size}`);
      }
         u_playerQ = new Map([[`${sharedn.size}`, 3 - clubL.length]]);
      while (3.46 <= tooltipsq) {
         clubL.push(1);
         break;
      }
          let fadfdeebbbfdabbbabdadfaaddaaG = false;
         sharedn[`${tooltipsq}`] = 1;
         fadfdeebbbfdabbbabdadfaaddaaG = (!fadfdeebbbfdabbbabdadfaaddaaG ? !fadfdeebbbfdabbbabdadfaaddaaG : !fadfdeebbbfdabbbabdadfaaddaaG);
      if (1 <= clubL.length) {
         clubL.push(u_playerQ.size);
      }
      trashn.push(membershipO.length);
   }

    if (!isFullScreen) {

      membershipO = `${minig.length}`;
   for (let a = 0; a < 2; a++) {
       let traminiv = String.fromCharCode(115,108,111,116,95,122,95,56,48,0);
       let mbnativeh = 4.0;
       let nativemodule7 = [String.fromCharCode(111,95,50,48,95,110,112,117,116,0), String.fromCharCode(98,95,55,95,117,110,114,101,115,111,108,118,97,98,108,101,0), String.fromCharCode(114,101,115,111,108,118,101,95,110,95,57,0)];
       let brightnessV = 4.0;
       let privileget = String.fromCharCode(115,95,54,56,95,109,111,100,105,102,105,101,114,115,0);
      for (let o = 0; o < 1; o++) {
         brightnessV /= Math.max(parseFloat(`${1 ^ privileget.length}`), 2);
      }
         brightnessV -= parseFloat(`${1}`);
      for (let h = 0; h < 1; h++) {
         brightnessV -= parseFloat(`${parseInt(`${brightnessV}`)}`);
      }
         brightnessV /= Math.max(parseFloat(`${nativemodule7.length}`), 4);
         traminiv = "1";
      for (let m = 0; m < 2; m++) {
         mbnativeh *= (String.fromCharCode(105,0) == traminiv ? parseInt(`${brightnessV}`) : traminiv.length);
      }
         brightnessV *= parseFloat(`${parseInt(`${mbnativeh}`) - 2}`);
         mbnativeh *= 2 & privileget.length;
      while (traminiv.includes(`${mbnativeh}`)) {
         mbnativeh -= nativemodule7.length;
         break;
      }
          let headeru = String.fromCharCode(115,119,105,122,122,108,101,95,99,95,52,55,0);
          let libglogz = 1.0;
         nativemodule7.push(headeru.length % 3);
         headeru += `${parseInt(`${libglogz}`) & 3}`;
         libglogz -= parseFloat(`${parseInt(`${libglogz}`)}`);
       let sellO = false;
       let holderU = 5;
       let utilsW = 3;
      for (let w = 0; w < 2; w++) {
          let alertE = new Map([[String.fromCharCode(104,99,109,99,95,101,95,51,56,0),false ], [String.fromCharCode(106,95,52,54,95,100,101,114,105,118,101,0),false ]]);
          let androidA = String.fromCharCode(119,95,51,51,95,99,111,115,116,115,0);
          let humidityN = String.fromCharCode(103,95,54,54,95,97,118,112,105,99,116,117,114,101,0);
          let backwardD = String.fromCharCode(115,121,115,105,110,102,111,95,113,95,56,0);
          let sigmob1 = [312, 409, 662];
         mbnativeh -= sigmob1.length;
         alertE = new Map([[humidityN, humidityN.length % (Math.max(androidA.length, 7))]]);
         androidA += `${humidityN.length * 2}`;
         backwardD += `${androidA.length}`;
         sigmob1 = [humidityN.length];
      }
      do {
          let giftg = String.fromCharCode(108,105,98,119,101,98,112,95,105,95,51,51,0);
          let floatero = String.fromCharCode(116,101,114,109,105,110,97,116,105,111,110,95,54,95,55,50,0);
          let scheduleS = new Map([[String.fromCharCode(111,95,55,55,95,116,97,98,0),534], [String.fromCharCode(97,108,97,109,111,102,105,114,101,95,101,95,51,56,0),5]]);
         sellO = floatero == String.fromCharCode(82,0);
         giftg = `${scheduleS.size & 1}`;
         floatero += `${scheduleS.size}`;
         if (sellO ? !sellO : sellO) {
            break;
         }
      } while ((2 >= traminiv.length) && (sellO ? !sellO : sellO));
       let agreement_ = String.fromCharCode(118,95,53,53,95,100,111,117,98,108,101,115,0);
      privacyD = `${parseInt(`${brightnessV}`) / (Math.max(minig.length, 10))}`;
   }
   while ((3 & sentryD.length) > 5 && 2 > (3 & trashn.length)) {
      sentryD += `${sentryD.length}`;
      break;
   }
   do {
      minig.push(sentryD.length);
      if (minig.length == 1800617) {
         break;
      }
   } while ((!membershipO.endsWith(`${minig.length}`)) && (minig.length == 1800617));
      dispatch(setVideoSource(VideoLiveType.DETAIL, ''));
      sentryD += `${trashn.length * sentryD.length}`;
   while (customl) {
      customl = 30 <= trashn.length;
      break;
   }
   for (let h = 0; h < 1; h++) {
       let crown_ = String.fromCharCode(115,95,57,53,95,101,116,104,114,101,97,100,105,110,103,0);
       let signinupy = [941, 403];
       let e_lockv = 4;
      if (2 < crown_.length) {
         crown_ = `${crown_.length << (Math.min(2, signinupy.length))}`;
      }
      for (let e = 0; e < 1; e++) {
         signinupy = [e_lockv ^ signinupy.length];
      }
         signinupy.push(2);
      do {
         e_lockv %= Math.max(e_lockv & 1, 5);
         if (e_lockv == 2817640) {
            break;
         }
      } while ((e_lockv == 2817640) && (signinupy.includes(e_lockv)));
      if ((e_lockv / (Math.max(signinupy.length, 10))) > 1) {
         e_lockv |= signinupy.length * e_lockv;
      }
      while (3 < (e_lockv / (Math.max(7, signinupy.length))) || (e_lockv / (Math.max(5, signinupy.length))) < 3) {
         signinupy.push(1 * crown_.length);
         break;
      }
          let temp9 = [161, 406];
         e_lockv %= Math.max(signinupy.length, 5);
         temp9 = [temp9.length];
      while (!signinupy.includes(e_lockv)) {
         signinupy = [signinupy.length];
         break;
      }
         signinupy = [crown_.length % 3];
      minig = [e_lockv];
   }
   while (2 >= (membershipO.length + 3) && 3 >= (membershipO.length + minig.length)) {
       let privilegeY = 2.0;
       let libreactperfloggerjniS = 1.0;
          let anythinkT = 0.0;
          let checkboxj = true;
         privilegeY *= parseFloat(`${parseInt(`${libreactperfloggerjniS}`)}`);
         anythinkT += parseFloat(`${parseInt(`${anythinkT}`) >> (Math.min(5, Math.abs(3)))}`);
         checkboxj = !checkboxj;
       let downH = [973, 512];
      minig.push((membershipO == String.fromCharCode(107,0) ? trashn.length : membershipO.length));
      break;
   }

    }
  };
  return (
    <RenderControl style={style.backContainer} onPress={onPressBack}>
      <Image
        resizeMode="contain"
        source={require('../images/icons/ewardedKickStyles.png')}
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
       let xadsdkW = 0.0;
    let libavformatS = [813, 306];
    let buildo = String.fromCharCode(109,117,108,116,105,112,97,114,116,95,101,95,52,48,0);
    let stationss = String.fromCharCode(112,95,53,48,95,97,116,99,104,0);
    let sentryP = 5.0;
    let dycreatorn = 4.0;
    let textlayoutmanagerD = 4.0;
    let libffmpegkitt = String.fromCharCode(110,111,110,110,117,108,108,95,99,95,50,52,0);
    let animationsc = String.fromCharCode(104,95,55,49,95,115,99,101,110,97,114,105,111,0);
      sentryP -= parseFloat(`${parseInt(`${sentryP}`) & 2}`);
   for (let e = 0; e < 1; e++) {
      textlayoutmanagerD /= Math.max(1, 3);
   }

  const {isFullScreen} = useSelector(state => state.videoPlayerControl);
      stationss = `${parseInt(`${xadsdkW}`)}`;
   while (5 >= (libavformatS.length + libffmpegkitt.length)) {
      libffmpegkitt = `${parseInt(`${sentryP}`) & 3}`;
      break;
   }

  const dispatch = useDispatch();
   for (let g = 0; g < 1; g++) {
       let manifestX = new Map([[String.fromCharCode(102,95,54,52,95,115,117,98,116,97,115,107,0),281], [String.fromCharCode(121,117,118,103,98,114,112,95,52,95,55,0),421], [String.fromCharCode(111,98,115,101,114,118,101,100,95,55,95,52,56,0),336]]);
       let paginationa = String.fromCharCode(113,117,101,117,101,95,110,95,53,55,0);
       let serviceJ = 4;
          let classesF = 5.0;
          let annerO = [998, 359];
         serviceJ |= 2;
         classesF += parseFloat(`${2 & parseInt(`${classesF}`)}`);
         annerO.push(3 * parseInt(`${classesF}`));
       let searchw = String.fromCharCode(103,95,52,95,98,108,111,99,107,120,0);
          let back5 = 2.0;
          let klevinK = [506, 43, 321];
         manifestX = new Map([[paginationa, searchw.length * paginationa.length]]);
         back5 -= parseFloat(`${parseInt(`${back5}`)}`);
         klevinK = [klevinK.length];
          let delegate_9gU = 1;
          let libcxxcomponents5 = String.fromCharCode(103,95,49,53,95,114,101,111,114,100,101,114,97,98,108,101,0);
         paginationa += `${(String.fromCharCode(108,0) == searchw ? searchw.length : delegate_9gU)}`;
         delegate_9gU += libcxxcomponents5.length | 1;
         libcxxcomponents5 = `${(libcxxcomponents5 == String.fromCharCode(76,0) ? libcxxcomponents5.length : libcxxcomponents5.length)}`;
      while ((4 >> (Math.min(2, searchw.length))) <= 2 || 5 <= (searchw.length >> (Math.min(Math.abs(4), 2)))) {
         searchw += `${searchw.length}`;
         break;
      }
      while ((3 >> (Math.min(1, paginationa.length))) > 4 || 2 > (serviceJ >> (Math.min(Math.abs(3), 4)))) {
         serviceJ <<= Math.min(Math.abs(1 >> (Math.min(1, searchw.length))), 2);
         break;
      }
      if ((5 / (Math.max(3, serviceJ))) > 1) {
          let inviter = [String.fromCharCode(103,95,48,95,99,97,112,105,116,97,108,105,122,101,0), String.fromCharCode(99,102,104,100,95,52,95,53,48,0)];
         serviceJ <<= Math.min(3, inviter.length);
      }
         paginationa = "3";
       let container9 = [951, 954];
      dycreatorn *= parseFloat(`${2 & stationss.length}`);
   }
      buildo = `${buildo.length - stationss.length}`;

  const onPressToggleFullScreen = () => {

   if ((dycreatorn + 5.41) >= 3.81) {
      dycreatorn -= parseFloat(`${2 - stationss.length}`);
   }
   do {
      dycreatorn -= parseFloat(`${buildo.length - 2}`);
      if (3943581.0 == dycreatorn) {
         break;
      }
   } while ((3943581.0 == dycreatorn) && (dycreatorn > sentryP));
    dispatch(setVideoFullScreen(!isFullScreen));
   if (2.38 <= (3.46 - textlayoutmanagerD)) {
      textlayoutmanagerD /= Math.max(buildo.length ^ stationss.length, 1);
   }
   if (!stationss.endsWith(`${buildo.length}`)) {
      buildo += "3";
   }

  };
   if (2.3 > (sentryP + dycreatorn) || (2.3 + sentryP) > 5.32) {
       let librrce = String.fromCharCode(116,101,115,116,114,101,115,117,108,116,95,114,95,49,55,0);
       let fastg = 3.0;
         fastg += parseInt(`${fastg}`) & 3;
          let ewardedQ = String.fromCharCode(97,112,109,116,101,115,116,95,109,95,57,52,0);
          let combinedA = String.fromCharCode(119,95,57,52,95,112,105,99,116,111,114,0);
          let navigation2 = [127, 915, 89];
         librrce = `${navigation2.length}`;
         ewardedQ = `${ewardedQ.length + combinedA.length}`;
         combinedA = "3";
         navigation2 = [combinedA.length | 2];
      for (let a = 0; a < 1; a++) {
          let default_gX = 1.0;
          let assist1 = String.fromCharCode(118,95,52,55,95,115,104,111,117,108,100,0);
          let stationh = 0;
          let loginB = new Map([[String.fromCharCode(114,95,50,57,95,115,97,116,0),true ], [String.fromCharCode(118,112,97,116,104,95,49,95,55,48,0),false ], [String.fromCharCode(114,101,115,111,108,118,95,122,95,55,57,0),true ]]);
         fastg -= 1;
         default_gX /= Math.max((parseFloat(`${assist1 == String.fromCharCode(77,0) ? assist1.length : parseInt(`${default_gX}`)}`)), 2);
         stationh -= (assist1 == String.fromCharCode(119,0) ? stationh : assist1.length);
         loginB = new Map([[`${loginB.size}`, 2 - stationh]]);
      }
      for (let l = 0; l < 1; l++) {
         fastg /= Math.max(5, 1);
      }
         fastg *= librrce.length - 1;
         librrce = `${librrce.length ^ 2}`;
      dycreatorn *= parseFloat(`${3}`);
   }
   do {
      buildo = `${libffmpegkitt.length}`;
      if (buildo.length == 2333180) {
         break;
      }
   } while ((libavformatS.length <= buildo.length) && (buildo.length == 2333180));

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
   while (textlayoutmanagerD == 3.90) {
       let guide7 = 0.0;
       let bell6 = new Map([[String.fromCharCode(102,117,110,103,105,98,108,101,115,95,119,95,50,51,0),816], [String.fromCharCode(118,97,100,107,104,122,95,120,95,52,0),612], [String.fromCharCode(115,101,97,114,99,104,98,97,114,95,116,95,56,0),697]]);
       let basketballR = 3.0;
       let crossw = String.fromCharCode(107,95,49,56,95,100,101,115,116,114,117,99,116,111,114,0);
      if (crossw.endsWith(`${bell6.size}`)) {
         crossw = `${crossw.length}`;
      }
         crossw += `${3 * parseInt(`${guide7}`)}`;
      do {
          let memberE = 3.0;
          let ksadJ = 3;
         crossw += `${parseInt(`${memberE}`) + parseInt(`${basketballR}`)}`;
         memberE += ksadJ / (Math.max(2, 7));
         ksadJ /= Math.max(4, ksadJ | 3);
         if (crossw.length == 975972) {
            break;
         }
      } while ((crossw.length == 975972) && (!crossw.endsWith(`${basketballR}`)));
         basketballR /= Math.max(4, parseInt(`${basketballR}`) * 2);
          let bannerq = String.fromCharCode(107,95,53,51,95,109,97,116,99,104,101,115,0);
          let animationsF = String.fromCharCode(115,95,56,51,95,102,116,118,115,112,108,105,116,98,97,114,0);
          let inactiveR = 5.0;
         bell6 = new Map([[`${bell6.size}`, parseInt(`${guide7}`) & 2]]);
         bannerq = `${bannerq.length}`;
         animationsF = `${bannerq.length}`;
         inactiveR -= parseFloat(`${parseInt(`${inactiveR}`) & 3}`);
       let resendo = String.fromCharCode(107,105,108,111,98,121,116,101,95,50,95,53,54,0);
      while (4 <= (bell6.size + parseInt(`${guide7}`))) {
          let private_zD = String.fromCharCode(112,105,110,103,95,55,95,51,56,0);
          let controln = 5.0;
          let sortD = new Map([[String.fromCharCode(109,95,52,52,95,99,111,101,102,102,105,99,105,101,110,116,0),846], [String.fromCharCode(116,95,53,49,95,112,111,108,121,109,101,115,104,0),239], [String.fromCharCode(117,95,56,49,95,114,101,116,97,105,110,0),197]]);
         bell6[`${guide7}`] = crossw.length << (Math.min(Math.abs(3), 2));
         private_zD = `${parseInt(`${controln}`) + 1}`;
         controln /= Math.max(2, private_zD.length ^ 3);
         sortD = new Map([[`${sortD.size}`, 2]]);
         break;
      }
          let policyi = String.fromCharCode(102,95,54,52,95,105,112,112,108,101,0);
         crossw = `${1 * policyi.length}`;
      do {
          let filledv = 1.0;
          let questb = [String.fromCharCode(118,105,115,105,98,108,105,116,121,95,51,95,57,54,0), String.fromCharCode(115,95,54,54,95,109,105,103,104,116,0)];
          let kick6 = 3.0;
          let chatR = String.fromCharCode(99,111,109,112,108,101,116,101,115,95,103,95,57,49,0);
         bell6[`${basketballR}`] = parseInt(`${basketballR}`);
         filledv -= chatR.length - parseInt(`${kick6}`);
         questb = [parseInt(`${filledv}`) / (Math.max(3, 6))];
         kick6 += parseFloat(`${chatR.length}`);
         if (bell6.size == 631605) {
            break;
         }
      } while (((basketballR * 4.17) <= 5.94 && 5 <= (bell6.size & 1)) && (bell6.size == 631605));
         crossw = `${parseInt(`${guide7}`) | resendo.length}`;
      while (guide7 == basketballR) {
         basketballR *= crossw.length;
         break;
      }
      while ((bell6.size ^ 1) >= 5 && 1.24 >= (2.26 - guide7)) {
         bell6[`${guide7}`] = 3;
         break;
      }
      stationss += "1";
      break;
   }
       let watchj = 3.0;
       let sendd = new Map([[String.fromCharCode(104,95,56,50,95,115,97,109,112,108,101,99,112,121,0),443], [String.fromCharCode(121,111,117,95,120,95,50,57,0),612], [String.fromCharCode(108,97,99,105,110,103,95,52,95,50,56,0),984]]);
      do {
         watchj += parseFloat(`${2}`);
         if (watchj == 3160308.0) {
            break;
         }
      } while ((watchj == 3160308.0) && (sendd[`${watchj}`] != null));
         watchj /= Math.max(1, parseFloat(`${3}`));
         sendd = new Map([[`${sendd.size}`, sendd.size - parseInt(`${watchj}`)]]);
      do {
         sendd = new Map([[`${sendd.size}`, parseInt(`${watchj}`) * 2]]);
         if (3057631 == sendd.size) {
            break;
         }
      } while ((3057631 == sendd.size) && (4 == (parseInt(`${watchj}`) * sendd.size)));
          let ajaxk = true;
         watchj -= parseFloat(`${3 << (Math.min(2, Math.abs(sendd.size)))}`);
         ajaxk = !ajaxk;
      while ((parseInt(`${watchj}`) + sendd.size) > 3 && (3.35 + watchj) > 5.87) {
          let feedbacko = 3.0;
          let skiph = [770, 394, 120];
          let robotoD = String.fromCharCode(97,110,105,109,97,116,105,111,110,95,56,95,50,51,0);
          let libflippero = false;
         sendd = new Map([[`${sendd.size}`, sendd.size << (Math.min(Math.abs(2), 3))]]);
         feedbacko *= 2;
         skiph = [3 + skiph.length];
         robotoD = "2";
         break;
      }
      xadsdkW -= libavformatS.length;

};

export const PlayPause = () => {
       let sound7 = new Map([[String.fromCharCode(99,108,105,99,107,115,95,116,95,49,53,0),true ], [String.fromCharCode(102,117,122,122,121,95,117,95,57,53,0),false ], [String.fromCharCode(105,95,54,48,95,100,101,102,115,0),false ]]);
    let episodesE = true;
    let styleZ = String.fromCharCode(100,105,115,97,98,108,101,95,97,95,50,52,0);
    let libfbjni5 = false;
    let leakchecker8 = false;
    let constants3 = String.fromCharCode(104,97,108,102,95,98,95,56,0);
    let verticalc = String.fromCharCode(104,105,103,104,108,105,103,116,104,101,100,95,116,95,52,49,0);
    let taiwank = String.fromCharCode(109,97,112,108,105,109,105,116,95,101,95,54,55,0);
    let network5 = 1;
    let libpangleflippedW = [875, 884];
    let libyoga8 = 2;
   do {
       let shrinkp = 1.0;
       let emptyL = new Map([[String.fromCharCode(115,119,105,116,99,104,97,98,108,101,95,55,95,49,52,0),664], [String.fromCharCode(98,97,110,110,101,114,95,53,95,55,0),748]]);
      while (!Array.from(emptyL.values()).includes(shrinkp)) {
         shrinkp *= emptyL.size;
         break;
      }
         emptyL[`${shrinkp}`] = emptyL.size * 3;
      if ((4.28 * shrinkp) <= 3.1 || 2.43 <= (4.28 * shrinkp)) {
         emptyL[`${shrinkp}`] = emptyL.size | parseInt(`${shrinkp}`);
      }
      do {
          let bufferg = 2.0;
          let lessk = [572, 432];
          let libjsijniprofilerx = String.fromCharCode(98,95,57,48,0);
         shrinkp -= 1 << (Math.min(Math.abs(parseInt(`${bufferg}`)), 1));
         bufferg *= parseFloat(`${lessk.length % (Math.max(libjsijniprofilerx.length, 7))}`);
         lessk.push(3 ^ lessk.length);
         libjsijniprofilerx = `${lessk.length ^ 1}`;
         if (3718836.0 == shrinkp) {
            break;
         }
      } while (((5 - emptyL.size) >= 3 && (1.76 - shrinkp) >= 3.16) && (3718836.0 == shrinkp));
      if (3.66 == (1.29 + shrinkp) && (emptyL.size ^ 5) == 3) {
         shrinkp /= Math.max(parseInt(`${shrinkp}`), 1);
      }
         shrinkp -= 2;
      network5 |= verticalc.length;
      if (network5 == 1076324) {
         break;
      }
   } while ((!libpangleflippedW.includes(network5)) && (network5 == 1076324));
   while (verticalc.length >= libyoga8) {
      libyoga8 += 2;
      break;
   }
      constants3 += `${sound7.size | 1}`;

  const dispatch = useDispatch();
      taiwank = `${constants3.length << (Math.min(Math.abs(2), 3))}`;
      episodesE = 47 > sound7.size && 47 > libpangleflippedW.length;
      leakchecker8 = String.fromCharCode(74,0) == verticalc;

  const {isPaused} = useSelector(state => state.videoPlayerControl);
   while (!verticalc.includes(`${taiwank.length}`)) {
       let models2 = String.fromCharCode(99,95,53,95,101,118,101,114,121,0);
       let sellM = new Map([[String.fromCharCode(98,105,116,118,101,99,115,95,113,95,48,0),958], [String.fromCharCode(98,95,56,57,95,105,109,103,0),679], [String.fromCharCode(105,95,57,95,102,112,99,0),700]]);
       let actionh = 3;
       let libruntimeexecutorJ = String.fromCharCode(114,101,118,111,107,101,100,95,121,95,56,49,0);
      do {
          let savel = new Map([[String.fromCharCode(110,95,57,51,95,110,111,116,0),632], [String.fromCharCode(107,95,56,52,95,108,111,110,103,116,101,114,109,0),570], [String.fromCharCode(97,115,99,111,110,102,95,110,95,54,53,0),48]]);
          let sharedI = new Map([[String.fromCharCode(110,100,101,120,95,114,95,57,51,0),494], [String.fromCharCode(110,95,51,48,95,122,111,109,98,105,101,0),976], [String.fromCharCode(117,110,119,105,110,100,95,109,95,53,53,0),267]]);
         sellM = new Map([[`${savel.size}`, 1]]);
         savel[`${sharedI.size}`] = sharedI.size;
         if (3993305 == sellM.size) {
            break;
         }
      } while ((3993305 == sellM.size) && (sellM.size < actionh));
         actionh <<= Math.min(5, Math.abs(1 << (Math.min(5, Math.abs(sellM.size)))));
      if (Array.from(sellM.values()).includes(actionh)) {
         sellM[libruntimeexecutorJ] = (String.fromCharCode(107,0) == libruntimeexecutorJ ? actionh : libruntimeexecutorJ.length);
      }
          let langkeyx = String.fromCharCode(102,97,118,101,100,95,120,95,52,57,0);
         actionh >>= Math.min(Math.abs(actionh | 1), 4);
         langkeyx = `${langkeyx.length * langkeyx.length}`;
      for (let c = 0; c < 1; c++) {
          let carouselN = 4.0;
         sellM[`${actionh}`] = (String.fromCharCode(77,0) == libruntimeexecutorJ ? libruntimeexecutorJ.length : actionh);
         carouselN -= parseInt(`${carouselN}`);
      }
       let policy5 = 0.0;
       let viewerk = 2.0;
          let combinedq = 1;
          let nterstitialq = 1.0;
         models2 = `${2 & parseInt(`${viewerk}`)}`;
         combinedq |= 1;
         nterstitialq *= parseFloat(`${combinedq}`);
          let type_3ii = [175, 465, 517];
          let libcxxcomponentsm = String.fromCharCode(112,95,48,95,118,101,108,97,112,115,101,100,116,105,109,101,114,0);
          let linkL = true;
         models2 = `${1 / (Math.max(4, libruntimeexecutorJ.length))}`;
         type_3ii = [((linkL ? 2 : 3) & 3)];
         libcxxcomponentsm += `${type_3ii.length}`;
         linkL = !linkL;
      if (5 > (3 & actionh) && 2 > (actionh & 3)) {
         actionh >>= Math.min(Math.abs((libruntimeexecutorJ == String.fromCharCode(49,0) ? sellM.size : libruntimeexecutorJ.length)), 2);
      }
      while ((parseInt(`${policy5}`) - models2.length) > 1 && 1.37 > (parseFloat(`${models2.length}`) - policy5)) {
         models2 = "2";
         break;
      }
      if (!libruntimeexecutorJ.includes(`${actionh}`)) {
         libruntimeexecutorJ = `${actionh}`;
      }
         actionh /= Math.max(4, libruntimeexecutorJ.length);
      verticalc = `${constants3.length + 3}`;
      break;
   }
   while ((1 ^ network5) == 5 && leakchecker8) {
       let whistlel = 3.0;
       let e_lockF = String.fromCharCode(119,95,55,57,95,115,116,97,114,116,0);
         whistlel /= Math.max(parseFloat(`${e_lockF.length}`), 5);
         e_lockF += `${(String.fromCharCode(88,0) == e_lockF ? parseInt(`${whistlel}`) : e_lockF.length)}`;
         whistlel -= parseFloat(`${parseInt(`${whistlel}`) / (Math.max(e_lockF.length, 1))}`);
          let philippinesh = String.fromCharCode(103,95,54,56,95,115,105,103,110,112,111,115,116,0);
         whistlel += parseFloat(`${e_lockF.length ^ philippinesh.length}`);
      for (let v = 0; v < 3; v++) {
         e_lockF += `${(String.fromCharCode(103,0) == e_lockF ? parseInt(`${whistlel}`) : e_lockF.length)}`;
      }
      for (let c = 0; c < 2; c++) {
         e_lockF = "2";
      }
      network5 -= 3 & constants3.length;
      break;
   }
   while (2 <= (libpangleflippedW.length ^ network5) || 2 <= (network5 ^ libpangleflippedW.length)) {
       let areae = 1;
       let windI = 3.0;
       let paginationv = 0.0;
          let searchbarY = 3;
          let ksadH = 1.0;
         windI -= parseFloat(`${areae % (Math.max(parseInt(`${windI}`), 9))}`);
         searchbarY /= Math.max(4, 2 - parseInt(`${ksadH}`));
         ksadH += parseFloat(`${searchbarY}`);
          let nterstitialm = true;
          let libavformatW = new Map([[String.fromCharCode(120,95,50,50,95,105,115,115,117,101,115,0),String.fromCharCode(97,110,110,111,117,110,99,101,95,106,95,51,52,0)], [String.fromCharCode(118,95,55,51,95,102,105,114,101,119,97,108,108,0),String.fromCharCode(116,95,57,95,97,116,111,105,0)]]);
         windI -= (parseFloat(`${(nterstitialm ? 1 : 5) & 2}`));
         nterstitialm = libavformatW.size > 63;
         libavformatW[`${libavformatW.size}`] = 2;
      if ((paginationv + areae) == 2.1) {
         areae %= Math.max(5, 3);
      }
       let componentE = 4;
      if (2.27 >= (paginationv + 1.64)) {
         areae &= componentE;
      }
         paginationv -= parseFloat(`${parseInt(`${paginationv}`) & parseInt(`${windI}`)}`);
          let libjsijniprofilerU = String.fromCharCode(105,116,101,114,97,116,111,114,95,52,95,49,50,0);
         paginationv *= parseFloat(`${libjsijniprofilerU.length}`);
       let fullT = 3.0;
         paginationv += parseFloat(`${parseInt(`${windI}`)}`);
      network5 -= libpangleflippedW.length % (Math.max(3, 6));
      break;
   }

  const onPress = () => {

   if (verticalc.startsWith(`${libfbjni5}`)) {
       let libswscaleH = String.fromCharCode(111,95,50,55,95,114,101,108,102,117,110,99,0);
       let emoji7 = String.fromCharCode(101,95,54,50,95,97,110,105,109,97,116,101,0);
       let products = false;
      while (libswscaleH.length <= 3) {
         libswscaleH = `${emoji7.length / (Math.max(2, 8))}`;
         break;
      }
         products = (50 == ((!products ? emoji7.length : 50) & emoji7.length));
         emoji7 += "3";
      for (let z = 0; z < 2; z++) {
          let libruntimeexecutord = 0.0;
          let listc = [937, 255];
          let circleK = 2.0;
         emoji7 += `${parseInt(`${libruntimeexecutord}`)}`;
         libruntimeexecutord -= parseFloat(`${listc.length}`);
         listc = [3 & listc.length];
         circleK *= parseFloat(`${3}`);
      }
          let placeholderZ = String.fromCharCode(111,95,49,48,48,95,108,97,98,101,108,0);
          let frame_tdf = [String.fromCharCode(97,114,116,119,111,114,107,95,112,95,53,56,0), String.fromCharCode(102,95,52,50,95,102,105,108,116,101,114,102,0), String.fromCharCode(109,115,109,112,101,103,118,95,103,95,52,57,0)];
          let scrollviewF = new Map([[String.fromCharCode(105,95,49,95,100,117,112,108,105,99,97,116,111,114,0),936], [String.fromCharCode(102,105,110,97,108,108,121,95,52,95,57,53,0),408]]);
         emoji7 = `${((products ? 1 : 4) ^ emoji7.length)}`;
         placeholderZ += `${frame_tdf.length}`;
         frame_tdf = [3 & scrollviewF.size];
         scrollviewF = new Map([[`${scrollviewF.size}`, scrollviewF.size | frame_tdf.length]]);
      do {
         emoji7 += "1";
         if (emoji7 == String.fromCharCode(111,104,106,0)) {
            break;
         }
      } while ((emoji7 == String.fromCharCode(111,104,106,0)) && (libswscaleH == emoji7));
         products = !libswscaleH.startsWith(`${products}`);
      while (libswscaleH != String.fromCharCode(55,0)) {
         emoji7 = `${(String.fromCharCode(84,0) == emoji7 ? (products ? 4 : 5) : emoji7.length)}`;
         break;
      }
       let configy = false;
      libfbjni5 = libyoga8 > taiwank.length;
   }
      verticalc += "1";
       let accepted4 = [12, 738, 972];
      do {
          let injuryB = 0.0;
          let confirmation5 = String.fromCharCode(99,95,57,51,95,115,105,110,107,0);
          let privilegeK = 3;
          let rightj = 0.0;
          let skipK = String.fromCharCode(108,95,56,55,95,114,101,103,105,115,116,101,114,115,0);
         accepted4.push(parseInt(`${injuryB}`));
         injuryB /= Math.max(2, (String.fromCharCode(54,0) == skipK ? privilegeK : skipK.length));
         confirmation5 = "3";
         privilegeK ^= privilegeK;
         rightj += 2 | privilegeK;
         if (accepted4.length == 83615) {
            break;
         }
      } while ((accepted4.length == 83615) && (!accepted4.includes(accepted4.length)));
         accepted4 = [accepted4.length];
       let panglew = String.fromCharCode(103,101,116,115,95,98,95,54,48,0);
       let ballC = String.fromCharCode(115,116,111,114,101,120,95,48,95,49,48,48,0);
      constants3 = `${taiwank.length}`;
    dispatch(togglePlayPaused());
   do {
      taiwank = `${(taiwank == String.fromCharCode(66,0) ? (episodesE ? 2 : 2) : taiwank.length)}`;
      if (taiwank == String.fromCharCode(121,113,112,106,0)) {
         break;
      }
   } while (((5 & network5) > 5 && (5 & taiwank.length) > 2) && (taiwank == String.fromCharCode(121,113,112,106,0)));
   do {
      libfbjni5 = !leakchecker8;
      if (libfbjni5 ? !libfbjni5 : libfbjni5) {
         break;
      }
   } while ((1 == styleZ.length) && (libfbjni5 ? !libfbjni5 : libfbjni5));
       let calendarS = false;
       let searchbarM = String.fromCharCode(114,95,53,56,95,115,111,99,107,101,116,118,97,114,0);
       let eventL = new Map([[String.fromCharCode(98,95,57,95,116,119,111,108,97,109,101,0),260], [String.fromCharCode(100,98,108,112,95,103,95,51,57,0),647], [String.fromCharCode(115,95,55,49,95,108,117,116,115,0),719]]);
         eventL[`${searchbarM}`] = searchbarM.length % (Math.max(3, 10));
          let libfbZ = String.fromCharCode(114,95,50,53,95,99,111,112,121,116,111,0);
          let component8 = new Map([[String.fromCharCode(110,101,97,114,101,110,100,95,117,95,49,50,0),757], [String.fromCharCode(98,97,110,110,101,100,95,106,95,49,54,0),298]]);
          let searchG = false;
         searchbarM += "2";
         libfbZ = `${((searchG ? 2 : 5))}`;
         component8 = new Map([[`${searchG}`, ((searchG ? 3 : 2) ^ libfbZ.length)]]);
      while (searchbarM.endsWith(`${calendarS}`)) {
         calendarS = eventL.size >= searchbarM.length;
         break;
      }
         calendarS = null != eventL[`${calendarS}`];
         searchbarM = `${(String.fromCharCode(83,0) == searchbarM ? searchbarM.length : (calendarS ? 3 : 4))}`;
         searchbarM = `${eventL.size + 2}`;
         calendarS = calendarS && eventL.size == 76;
      while (searchbarM.endsWith(`${eventL.size}`)) {
         searchbarM = `${((calendarS ? 1 : 5) & 2)}`;
         break;
      }
      for (let n = 0; n < 1; n++) {
         searchbarM = `${((calendarS ? 2 : 1) >> (Math.min(searchbarM.length, 1)))}`;
      }
      taiwank = `${libyoga8}`;

  };
   do {
      verticalc += `${libyoga8}`;
      if (verticalc == String.fromCharCode(54,97,105,56,106,101,105,52,0)) {
         break;
      }
   } while ((3 < (verticalc.length ^ 2)) && (verticalc == String.fromCharCode(54,97,105,56,106,101,105,52,0)));
      network5 *= constants3.length;
       let recommendationR = 5.0;
       let searchbar6 = 2.0;
       let fastforwardM = String.fromCharCode(115,116,114,116,111,100,95,106,95,54,50,0);
      if ((4.74 * searchbar6) == 1.25 || 2.86 == (4.74 * searchbar6)) {
         searchbar6 *= parseFloat(`${parseInt(`${searchbar6}`) / (Math.max(4, parseInt(`${recommendationR}`)))}`);
      }
      while (recommendationR == parseFloat(`${fastforwardM.length}`)) {
         fastforwardM += `${fastforwardM.length}`;
         break;
      }
         fastforwardM = `${fastforwardM.length}`;
       let borderless6 = 3.0;
       let unselectedd = 3.0;
      for (let z = 0; z < 2; z++) {
         searchbar6 += parseFloat(`${1}`);
      }
         borderless6 += parseFloat(`${fastforwardM.length / (Math.max(1, 10))}`);
         searchbar6 /= Math.max(parseFloat(`${parseInt(`${recommendationR}`) & parseInt(`${searchbar6}`)}`), 2);
      for (let a = 0; a < 1; a++) {
          let register_hf = new Map([[String.fromCharCode(114,101,99,118,118,95,55,95,57,51,0),911], [String.fromCharCode(106,95,50,57,95,115,119,102,112,108,97,121,101,114,0),891]]);
          let imagemanagern = String.fromCharCode(102,95,52,49,95,109,117,108,116,105,112,108,101,114,115,0);
          let untickC = false;
          let valuesr = String.fromCharCode(97,99,114,111,110,121,109,95,112,95,50,52,0);
         fastforwardM += `${((untickC ? 1 : 5))}`;
         register_hf = new Map([[`${register_hf.size}`, imagemanagern.length]]);
         imagemanagern += `${valuesr.length - 2}`;
         untickC = register_hf.size <= 17 && 17 <= imagemanagern.length;
         valuesr += `${2 * imagemanagern.length}`;
      }
          let verticalR = String.fromCharCode(105,110,99,108,117,115,105,111,110,95,101,95,51,49,0);
         unselectedd *= parseFloat(`${1 | parseInt(`${unselectedd}`)}`);
         verticalR += `${verticalR.length}`;
      libpangleflippedW.push((verticalc == String.fromCharCode(74,0) ? libpangleflippedW.length : verticalc.length));

  return (
    <RenderControl onPress={onPress} style={style.commonIconContainer}>
      <Image
        source={isPaused === true ? PlayImg : PauseImg}
        style={style.commonIcon}
        resizeMode={'contain'}
      />
    </RenderControl>
  );
   if ((2 * styleZ.length) <= 2 || (2 * styleZ.length) <= 3) {
      libyoga8 -= network5;
   }
      verticalc += `${(3 << (Math.min(4, Math.abs((episodesE ? 3 : 1)))))}`;
   for (let n = 0; n < 1; n++) {
      styleZ = `${3 + verticalc.length}`;
   }

};
export const Refresh = () => {
       let settingsj = 2;
    let str1 = 3.0;
    let libreactz = String.fromCharCode(110,111,110,110,117,108,108,98,117,102,102,101,114,95,115,95,52,53,0);
    let optionsr = String.fromCharCode(110,111,110,101,109,112,116,121,95,116,95,51,57,0);
    let libswresample4 = 4;
    let middlec = 1.0;
    let klevinp = String.fromCharCode(98,95,52,95,114,101,108,111,97,100,0);
    let type_j_8 = false;
    let mbsplashu = String.fromCharCode(115,119,105,122,122,108,105,110,103,95,100,95,56,54,0);
    let alertk = String.fromCharCode(104,95,54,53,95,115,116,114,116,97,103,0);
    let mathb = true;
       let analyticss = 4.0;
      while ((analyticss * analyticss) >= 3.97 || 3.97 >= (analyticss * analyticss)) {
         analyticss *= parseFloat(`${1}`);
         break;
      }
         analyticss -= parseFloat(`${parseInt(`${analyticss}`)}`);
         analyticss *= parseFloat(`${parseInt(`${analyticss}`) % 1}`);
      libreactz = `${klevinp.length}`;
   if (3 >= (parseInt(`${middlec}`) + alertk.length) || 2.15 >= (middlec + 1.92)) {
      alertk = `${parseInt(`${str1}`)}`;
   }
   do {
      middlec /= Math.max(5, parseInt(`${str1}`));
      if (969160.0 == middlec) {
         break;
      }
   } while ((969160.0 == middlec) && ((middlec / 5.61) >= 4.89));

  const dispatch = useDispatch();
   if (1 < (3 & settingsj) || 3 < (3 & alertk.length)) {
       let kicki = new Map([[String.fromCharCode(119,101,105,103,104,116,105,110,103,95,116,95,55,50,0),595], [String.fromCharCode(102,95,49,53,95,115,117,98,115,101,113,117,101,110,99,101,0),813]]);
       let collectiono = String.fromCharCode(101,95,49,95,112,105,99,107,109,111,100,101,0);
       let whatsapp1 = String.fromCharCode(118,109,104,100,95,110,95,51,50,0);
       let info0 = String.fromCharCode(116,95,50,49,95,100,105,115,97,98,108,105,110,103,0);
      while (4 <= (kicki.size ^ 5)) {
          let floaterv = new Map([[String.fromCharCode(105,112,100,111,112,100,95,120,95,56,56,0),868], [String.fromCharCode(99,97,108,99,117,108,97,116,105,111,110,95,101,95,50,55,0),563]]);
          let readR = true;
         collectiono = `${whatsapp1.length | collectiono.length}`;
         floaterv[`${readR}`] = ((readR ? 2 : 5) & floaterv.size);
         break;
      }
      for (let q = 0; q < 1; q++) {
          let twitterz = [324, 548, 454];
          let mbbidQ = String.fromCharCode(99,97,112,116,105,111,110,95,53,95,49,51,0);
          let libglog8 = [545, 937];
          let become3 = String.fromCharCode(100,95,51,57,95,118,111,116,101,0);
          let incidentx = String.fromCharCode(108,105,110,107,105,110,103,95,50,95,55,54,0);
         kicki[mbbidQ] = 2 / (Math.max(3, mbbidQ.length));
         twitterz.push(become3.length << (Math.min(incidentx.length, 3)));
         libglog8.push(libglog8.length);
         become3 += `${incidentx.length}`;
      }
      while (5 == info0.length) {
         collectiono += `${kicki.size}`;
         break;
      }
          let trashf = String.fromCharCode(103,95,51,55,95,116,114,120,116,0);
         kicki[collectiono] = 1;
         trashf = `${trashf.length}`;
         collectiono += `${(collectiono == String.fromCharCode(66,0) ? collectiono.length : kicki.size)}`;
          let activityR = 0.0;
         collectiono += `${1 - kicki.size}`;
         activityR -= parseFloat(`${parseInt(`${activityR}`)}`);
          let handlerz = String.fromCharCode(114,101,99,111,118,101,114,95,118,95,54,0);
          let sharedG = 3;
          let promotioni = 0.0;
         info0 += `${sharedG ^ parseInt(`${promotioni}`)}`;
         handlerz = `${handlerz.length}`;
         sharedG /= Math.max(handlerz.length / 1, 5);
         whatsapp1 += `${info0.length % (Math.max(3, 4))}`;
         whatsapp1 = `${info0.length}`;
       let readd = String.fromCharCode(101,120,112,114,101,115,115,95,52,95,49,57,0);
         kicki = new Map([[info0, 1 >> (Math.min(3, info0.length))]]);
      do {
         whatsapp1 += `${info0.length >> (Math.min(4, collectiono.length))}`;
         if (whatsapp1 == String.fromCharCode(55,117,120,104,118,112,56,0)) {
            break;
         }
      } while ((whatsapp1 == String.fromCharCode(55,117,120,104,118,112,56,0)) && (!info0.endsWith(whatsapp1)));
      alertk += `${mbsplashu.length | 3}`;
   }
   for (let z = 0; z < 3; z++) {
      libreactz += `${alertk.length << (Math.min(Math.abs(3), 4))}`;
   }
      libswresample4 += 3;

  const onPress = () => {

   do {
      middlec /= Math.max(3, 3);
      if (middlec == 2786474.0) {
         break;
      }
   } while ((middlec == 2786474.0) && ((libswresample4 & 4) <= 5));
   while ((str1 / 4.46) <= 2.93 || 1.40 <= (str1 / 4.46)) {
      str1 *= 1;
      break;
   }
   do {
      libreactz = `${(String.fromCharCode(113,0) == mbsplashu ? libswresample4 : mbsplashu.length)}`;
      if (libreactz.length == 2377511) {
         break;
      }
   } while ((libreactz.length == 2377511) && (!optionsr.includes(libreactz)));
    dispatch(setVideoPlayerAction('refresh'));
       let roomD = false;
       let macaud = [246, 103, 805];
         roomD = (82 < ((roomD ? 82 : macaud.length) | macaud.length));
      while (macaud.length < 5) {
         macaud = [(2 >> (Math.min(3, Math.abs((roomD ? 4 : 5)))))];
         break;
      }
      for (let g = 0; g < 2; g++) {
         roomD = !roomD;
      }
         macaud.push(macaud.length % (Math.max(2, 9)));
      for (let q = 0; q < 1; q++) {
         macaud = [macaud.length];
      }
      if ((3 - macaud.length) > 3 && 3 > macaud.length) {
          let configx = 2.0;
          let stepM = false;
          let corei = String.fromCharCode(107,95,51,52,95,97,98,98,114,0);
         roomD = 7.92 <= configx && roomD;
         configx *= corei.length;
         stepM = corei.length >= 54;
      }
      optionsr += "1";
   if (!libreactz.startsWith(alertk)) {
      alertk = `${(String.fromCharCode(112,0) == alertk ? mbsplashu.length : alertk.length)}`;
   }
      settingsj &= (String.fromCharCode(76,0) == alertk ? optionsr.length : alertk.length);

  };
      mbsplashu = `${libswresample4 % (Math.max(settingsj, 9))}`;
   do {
      libreactz += `${parseInt(`${middlec}`) << (Math.min(3, Math.abs(settingsj)))}`;
      if (863554 == libreactz.length) {
         break;
      }
   } while ((klevinp == libreactz) && (863554 == libreactz.length));
      middlec *= 1 | klevinp.length;

  return (
    <RenderControl onPress={onPress} style={style.commonIconContainer}>
      <Image
        source={RefreshBorderless}
        style={style.commonIcon}
        resizeMode={'contain'}
      />
    </RenderControl>
  );
      type_j_8 = libreactz == String.fromCharCode(48,0);
      str1 -= 1 % (Math.max(4, klevinp.length));
   for (let d = 0; d < 2; d++) {
       let checkbox6 = true;
       let middleC = String.fromCharCode(100,95,54,51,95,118,105,98,114,97,116,105,111,110,0);
       let chinasame9 = String.fromCharCode(98,111,117,110,100,115,95,48,95,55,54,0);
       let baidup = String.fromCharCode(117,115,101,97,103,101,95,100,95,51,53,0);
       let libfabricjniq = String.fromCharCode(122,95,51,49,95,117,110,99,111,110,115,117,109,101,100,0);
          let placeholderY = String.fromCharCode(109,105,110,117,116,101,115,95,117,95,54,52,0);
         baidup += `${placeholderY.length}`;
          let successu = 1.0;
          let xvodJ = 1;
         middleC += `${chinasame9.length | 2}`;
         successu -= parseInt(`${successu}`);
         xvodJ >>= Math.min(Math.abs(parseInt(`${successu}`)), 2);
         middleC = "1";
      for (let z = 0; z < 3; z++) {
         middleC = `${((checkbox6 ? 3 : 5) & 2)}`;
      }
         middleC = "1";
      while (chinasame9.length < 1 && checkbox6) {
         checkbox6 = !checkbox6;
         break;
      }
      do {
         checkbox6 = (baidup.length >> (Math.min(4, middleC.length))) > 57;
         if (checkbox6 ? !checkbox6 : checkbox6) {
            break;
         }
      } while ((3 == baidup.length && !checkbox6) && (checkbox6 ? !checkbox6 : checkbox6));
      do {
         chinasame9 = `${chinasame9.length}`;
         if (650576 == chinasame9.length) {
            break;
         }
      } while ((baidup.startsWith(chinasame9)) && (650576 == chinasame9.length));
          let championy = String.fromCharCode(101,95,56,57,95,99,114,111,115,115,111,118,101,114,0);
          let short_0M = 1.0;
          let downT = [155, 282, 640];
         middleC = `${championy.length / (Math.max(3, 2))}`;
         championy += `${downT.length}`;
         short_0M -= parseFloat(`${downT.length}`);
       let traminih = 1;
       let viewsb = String.fromCharCode(109,95,52,55,95,100,101,108,97,121,97,98,108,101,0);
       let gradleM = String.fromCharCode(109,95,50,49,95,101,110,118,105,114,111,110,109,101,110,116,0);
         gradleM = "1";
      while (traminih <= 3) {
          let borderlessu = [998, 458];
          let sheetJ = [String.fromCharCode(120,95,49,48,48,95,118,105,101,119,0), String.fromCharCode(98,95,56,56,95,119,97,105,116,101,114,0)];
          let tempv = String.fromCharCode(105,95,55,50,95,105,110,116,101,114,108,97,99,101,0);
          let backwardt = 2.0;
          let becomee = new Map([[String.fromCharCode(117,95,51,49,95,112,108,117,114,97,108,105,122,97,116,105,111,110,0),String.fromCharCode(100,105,115,116,114,105,99,116,95,110,95,52,54,0)], [String.fromCharCode(98,117,116,116,111,110,115,95,119,95,49,55,0),String.fromCharCode(112,101,114,102,111,114,109,95,103,95,49,0)]]);
         checkbox6 = 18 <= tempv.length;
         borderlessu = [becomee.size ^ parseInt(`${backwardt}`)];
         sheetJ = [borderlessu.length];
         tempv += `${parseInt(`${backwardt}`) / 1}`;
         becomee = new Map([[`${borderlessu.length}`, borderlessu.length]]);
         break;
      }
      if (viewsb.length < 1) {
         libfabricjniq = `${(1 + (checkbox6 ? 3 : 2))}`;
      }
         checkbox6 = !checkbox6 || chinasame9.length < 61;
      str1 /= Math.max(libswresample4 / (Math.max(3, 8)), 5);
   }

};

export const Pip = () => {
       let weiboo = false;
    let hooks2 = new Map([[String.fromCharCode(98,95,55,48,95,112,97,114,116,105,116,105,111,110,105,110,103,0),String.fromCharCode(109,117,110,108,111,99,107,95,114,95,57,55,0)], [String.fromCharCode(108,95,55,95,117,110,101,115,99,97,112,101,0),String.fromCharCode(115,104,97,107,105,110,103,95,121,95,53,49,0)]]);
    let typingW = String.fromCharCode(116,105,109,101,108,105,110,101,95,50,95,57,54,0);
    let cornerI = 4.0;
    let bdxadsdkO = 3.0;
    let mbnativeU = String.fromCharCode(97,95,51,55,95,115,99,114,117,98,98,101,114,0);
    let videog = String.fromCharCode(117,95,56,95,100,101,105,110,118,101,114,116,0);
    let launchU = [47, 702];
    let rewindy = String.fromCharCode(108,117,109,97,107,101,121,95,101,95,54,56,0);
      bdxadsdkO *= 3;

  const dispatch = useDispatch();
   if ((videog.length * 5) == 1) {
       let libsgcoreo = false;
          let whistleT = new Map([[String.fromCharCode(109,101,114,103,105,110,103,95,57,95,56,50,0),String.fromCharCode(97,112,112,115,95,55,95,49,51,0)], [String.fromCharCode(118,97,105,108,97,98,105,108,105,116,121,95,57,95,51,55,0),String.fromCharCode(99,111,108,115,112,97,110,95,119,95,53,49,0)]]);
          let halfN = String.fromCharCode(115,112,101,99,105,102,105,101,114,115,95,108,95,50,49,0);
         libsgcoreo = halfN.length == 65;
         whistleT = new Map([[`${whistleT.size}`, whistleT.size ^ whistleT.size]]);
         halfN += `${whistleT.size / (Math.max(8, whistleT.size))}`;
         libsgcoreo = (!libsgcoreo ? !libsgcoreo : !libsgcoreo);
      while (!libsgcoreo) {
         libsgcoreo = !libsgcoreo;
         break;
      }
      videog += `${((libsgcoreo ? 5 : 3) & parseInt(`${cornerI}`))}`;
   }

  const {source, matchId, videoType} = useSelector(
    state => state.videoPlayerControl,
  );
       let mbbannern = String.fromCharCode(119,95,56,52,95,98,105,110,107,100,97,116,97,0);
       let mbbannerI = 1.0;
         mbbannern += `${parseInt(`${mbbannerI}`)}`;
         mbbannerI += mbbannern.length % (Math.max(8, parseInt(`${mbbannerI}`)));
      for (let t = 0; t < 1; t++) {
         mbbannern += `${3 * mbbannern.length}`;
      }
      for (let q = 0; q < 2; q++) {
         mbbannern += `${parseInt(`${mbbannerI}`)}`;
      }
         mbbannerI += parseInt(`${mbbannerI}`) * 2;
      do {
          let iconY = 4.0;
          let libtanI = [689, 184];
          let activityM = String.fromCharCode(111,95,57,49,95,112,97,114,115,101,0);
         mbbannerI /= Math.max((activityM == String.fromCharCode(80,0) ? activityM.length : libtanI.length), 1);
         iconY /= Math.max(1, 2);
         libtanI = [3 & parseInt(`${iconY}`)];
         if (mbbannerI == 3843295.0) {
            break;
         }
      } while ((mbbannerI >= 5.11) && (mbbannerI == 3843295.0));
      mbnativeU += `${parseInt(`${bdxadsdkO}`)}`;

  const onPress = () => {

      weiboo = !weiboo;
    Orientation.lockToPortrait();
   while (5 == (1 - typingW.length) && (bdxadsdkO * 1.19) == 1.41) {
      bdxadsdkO -= typingW.length;
      break;
   }

    store.dispatch(
      floatingPlayer.actions.setProp({
        display: true,
        url: source,
        matchId: matchId,
        videoType: videoType,
      }),
    );
   if (1 < (typingW.length >> (Math.min(Math.abs(4), 5))) || (4 * typingW.length) < 2) {
       let bodank = String.fromCharCode(118,95,51,50,95,98,117,114,115,116,0);
       let turnx = true;
       let reward7 = 5.0;
       let singlek = new Map([[String.fromCharCode(105,95,52,56,95,116,105,109,115,116,97,109,112,0),346], [String.fromCharCode(120,99,104,103,95,114,95,57,56,0),601]]);
      if ((parseFloat(`${bodank.length}`) * reward7) <= 2.22 && 4 <= (bodank.length * parseInt(`${reward7}`))) {
         reward7 *= (parseFloat(`${String.fromCharCode(88,0) == bodank ? bodank.length : singlek.size}`));
      }
      for (let t = 0; t < 2; t++) {
         singlek = new Map([[bodank, 3 ^ bodank.length]]);
      }
      do {
         turnx = (parseInt(`${reward7}`) * bodank.length) == 82;
         if (turnx ? !turnx : turnx) {
            break;
         }
      } while ((turnx ? !turnx : turnx) && (4 <= (1 ^ singlek.size) || 1 <= singlek.size));
      for (let w = 0; w < 3; w++) {
         reward7 -= (parseFloat(`${1 & (turnx ? 3 : 4)}`));
      }
      if (bodank.length < 4) {
         turnx = (parseInt(`${reward7}`) / (Math.max(5, singlek.size))) >= 72;
      }
      do {
         turnx = !turnx;
         if (turnx ? !turnx : turnx) {
            break;
         }
      } while ((turnx ? !turnx : turnx) && (reward7 == 2.40));
         reward7 *= parseFloat(`${2 & singlek.size}`);
       let stationG = String.fromCharCode(117,116,116,101,114,97,110,99,101,95,49,95,53,0);
       let bufferI = String.fromCharCode(114,95,53,48,95,112,114,111,103,114,101,115,115,0);
          let short__K = false;
          let screenx = 4.0;
         bodank += `${parseInt(`${screenx}`) / (Math.max(3, singlek.size))}`;
         short__K = (!short__K ? !short__K : !short__K);
         screenx /= Math.max(5, ((short__K ? 4 : 3) & (short__K ? 2 : 2)));
      if (turnx) {
         turnx = 5 <= singlek.size;
      }
      if (!turnx) {
         turnx = reward7 > 21.86 && bodank == String.fromCharCode(56,0);
      }
       let injuryu = 1;
      bdxadsdkO += (videog.length + (weiboo ? 4 : 2));
   }

    dispatch(
      setVideoControlProp({
        isFullScreen: false,
        source: '',
        videoType: VideoLiveType.DETAIL,
      }),
    );
       let tickedY = 5.0;
       let shootX = 2;
       let homeL = 3.0;
         shootX |= 3 - parseInt(`${tickedY}`);
      do {
         homeL -= parseFloat(`${parseInt(`${tickedY}`)}`);
         if (1068224.0 == homeL) {
            break;
         }
      } while ((4 >= (parseInt(`${homeL}`) + shootX) && (5.33 + homeL) >= 5.49) && (1068224.0 == homeL));
      if ((shootX / (Math.max(homeL, 2))) < 3.25) {
         shootX &= 3 - shootX;
      }
      for (let j = 0; j < 3; j++) {
          let countryH = [655, 47];
          let darkP = String.fromCharCode(102,95,57,48,95,99,114,105,116,105,99,97,108,0);
         shootX |= parseInt(`${tickedY}`);
         countryH = [1];
         darkP += `${darkP.length}`;
      }
          let alertC = String.fromCharCode(101,95,49,51,95,100,101,109,111,116,101,0);
          let basketballA = String.fromCharCode(99,102,102,116,105,95,49,95,56,57,0);
          let inviteY = 2.0;
         homeL *= parseFloat(`${2 * alertC.length}`);
         alertC += `${(basketballA == String.fromCharCode(118,0) ? parseInt(`${inviteY}`) : basketballA.length)}`;
         inviteY /= Math.max(parseFloat(`${1}`), 2);
      for (let o = 0; o < 2; o++) {
         tickedY += parseFloat(`${shootX}`);
      }
      do {
         shootX <<= Math.min(2, Math.abs(shootX % (Math.max(parseInt(`${homeL}`), 4))));
         if (1149289 == shootX) {
            break;
         }
      } while ((1149289 == shootX) && (2.64 >= (tickedY + parseFloat(`${shootX}`)) && (parseInt(`${tickedY}`) + shootX) >= 4));
         homeL += parseFloat(`${parseInt(`${homeL}`) | 3}`);
         shootX ^= parseInt(`${tickedY}`) | shootX;
      hooks2[`${tickedY}`] = 1;

  };
   for (let j = 0; j < 3; j++) {
      bdxadsdkO += parseInt(`${cornerI}`);
   }


  return (
    <RenderControl onPress={onPress} style={style.commonIconContainer}>
      <Image
        source={IconPipShrink}
        style={style.commonIcon}
        resizeMode={'contain'}
      />
    </RenderControl>
  );
   for (let g = 0; g < 2; g++) {
       let l_playerI = String.fromCharCode(115,105,109,117,108,97,116,111,114,95,98,95,53,48,0);
          let bingh = true;
          let sportsb = 3;
          let frame_1w = String.fromCharCode(114,101,115,111,108,118,101,95,114,95,50,51,0);
         l_playerI += "1";
         bingh = !bingh || frame_1w.length >= 48;
         sportsb &= frame_1w.length;
       let unreadJ = 0;
       let colorsi = 3;
      while (1 == (l_playerI.length & 3) || (l_playerI.length & colorsi) == 3) {
          let fastforwardD = false;
          let themeJ = false;
          let materialt = [329, 632, 724];
         colorsi *= 1 << (Math.min(4, materialt.length));
         fastforwardD = (fastforwardD ? themeJ : !fastforwardD);
         themeJ = !fastforwardD && themeJ;
         materialt = [3];
         break;
      }
      typingW += `${mbnativeU.length + 1}`;
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
       let canvasl = 1.0;
    let nterstitialo = 1.0;
    let malaysiau = false;
    let targetx = String.fromCharCode(110,97,116,117,114,97,108,95,119,95,51,50,0);
    let animationw = [94, 961, 617];
    let related4 = String.fromCharCode(105,109,112,111,114,116,97,98,108,101,95,111,95,51,52,0);
    let bodane = String.fromCharCode(98,97,99,107,100,114,111,112,95,116,95,53,51,0);
      bodane = `${(related4 == String.fromCharCode(86,0) ? related4.length : animationw.length)}`;
   for (let l = 0; l < 3; l++) {
       let stationsb = 3;
       let other3 = 2.0;
       let n_managerp = 3.0;
      while ((4.94 + other3) >= 5.5) {
          let libreanimated1 = new Map([[String.fromCharCode(122,95,56,56,95,105,115,115,117,101,115,0),String.fromCharCode(117,95,49,53,95,112,97,105,110,116,115,0)], [String.fromCharCode(107,95,51,53,95,108,101,110,103,116,104,115,0),String.fromCharCode(116,101,108,101,103,114,97,95,101,95,55,53,0)], [String.fromCharCode(108,95,51,55,95,98,115,105,122,101,0),String.fromCharCode(114,101,109,97,105,110,95,52,95,54,52,0)]]);
          let singaporer = 5.0;
          let imagemanagerG = String.fromCharCode(105,110,115,116,97,110,116,95,113,95,49,51,0);
          let t_imagey = false;
          let mbnativey = true;
         other3 /= Math.max(parseInt(`${n_managerp}`), 4);
         libreanimated1 = new Map([[`${t_imagey}`, (1 >> (Math.min(Math.abs((mbnativey ? 3 : 5)), 3)))]]);
         singaporer -= parseFloat(`${3}`);
         imagemanagerG = `${imagemanagerG.length}`;
         break;
      }
          let changeM = [666, 237];
         n_managerp += 3 & stationsb;
         changeM = [changeM.length ^ changeM.length];
      nterstitialo += 2;
   }
   for (let s = 0; s < 3; s++) {
      canvasl /= Math.max(parseFloat(`${related4.length}`), 3);
   }
   do {
       let backq = 5;
       let minie = 4.0;
       let libmapbufferjniU = String.fromCharCode(122,95,54,52,95,115,101,103,109,97,112,0);
       let abidetectr = 4;
       let mbbannerw = String.fromCharCode(98,95,56,53,95,112,101,114,115,112,0);
      do {
         minie -= parseFloat(`${backq}`);
         if (3374986.0 == minie) {
            break;
         }
      } while ((5.6 >= (minie - 4.87) && (libmapbufferjniU.length << (Math.min(Math.abs(4), 4))) >= 5) && (3374986.0 == minie));
         mbbannerw += `${parseInt(`${minie}`)}`;
         libmapbufferjniU += `${libmapbufferjniU.length}`;
         libmapbufferjniU += `${abidetectr * 3}`;
         minie -= (parseFloat(`${String.fromCharCode(82,0) == mbbannerw ? abidetectr : mbbannerw.length}`));
          let friendsp = 3.0;
          let container1 = String.fromCharCode(112,114,111,109,105,110,101,110,116,95,116,95,55,48,0);
         libmapbufferjniU += `${container1.length / 3}`;
         friendsp += 1;
         container1 += `${parseInt(`${friendsp}`) ^ parseInt(`${friendsp}`)}`;
      for (let y = 0; y < 1; y++) {
         minie -= parseFloat(`${abidetectr}`);
      }
      if (minie > abidetectr) {
          let qaagb = 2;
          let rootm = 0.0;
         abidetectr -= qaagb;
         rootm /= Math.max(parseInt(`${rootm}`), 5);
      }
         libmapbufferjniU = `${2 ^ parseInt(`${minie}`)}`;
      do {
         backq /= Math.max(backq ^ mbbannerw.length, 2);
         if (backq == 1156470) {
            break;
         }
      } while ((backq == 1156470) && (mbbannerw.length >= 4));
         mbbannerw += `${3 / (Math.max(5, libmapbufferjniU.length))}`;
      while ((4 + mbbannerw.length) < 3 || (backq + mbbannerw.length) < 4) {
         mbbannerw += `${backq}`;
         break;
      }
          let helperV = String.fromCharCode(103,95,52,48,95,99,111,110,116,101,120,116,99,111,110,102,105,103,0);
          let libsentryj = String.fromCharCode(112,114,101,115,101,110,99,101,95,122,95,49,56,0);
         libmapbufferjniU += `${helperV.length | 1}`;
         helperV = `${libsentryj.length + 2}`;
         libsentryj = "3";
         minie -= parseFloat(`${1 << (Math.min(Math.abs(abidetectr), 3))}`);
      do {
         abidetectr += backq % 1;
         if (abidetectr == 3730756) {
            break;
         }
      } while ((!libmapbufferjniU.endsWith(`${abidetectr}`)) && (abidetectr == 3730756));
      nterstitialo += targetx.length;
      if (3211532.0 == nterstitialo) {
         break;
      }
   } while ((2.16 < (5.82 * nterstitialo)) && (3211532.0 == nterstitialo));
      nterstitialo -= 1;
   for (let p = 0; p < 1; p++) {
      malaysiau = !malaysiau;
   }
      nterstitialo += parseInt(`${nterstitialo}`) >> (Math.min(3, Math.abs(2)));

    dispatch(toggleLockScreen());
       let runtimeschedulero = [253, 895];
       let dpluss = 0.0;
          let lessw = String.fromCharCode(113,95,53,55,95,99,108,111,115,101,115,111,99,107,101,116,0);
          let libimagepipelinen = 3.0;
         runtimeschedulero.push(parseInt(`${libimagepipelinen}`));
         lessw += `${lessw.length / (Math.max(lessw.length, 1))}`;
         libimagepipelinen *= 1 | lessw.length;
         runtimeschedulero = [parseInt(`${dpluss}`) % (Math.max(runtimeschedulero.length, 10))];
      nterstitialo += 2 << (Math.min(Math.abs(parseInt(`${canvasl}`)), 1));
       let mbnativel = 5.0;
       let blackd = String.fromCharCode(118,95,55,52,95,109,101,116,97,108,0);
       let downloadingK = 2.0;
       let privilegeR = String.fromCharCode(111,95,52,52,95,114,101,109,111,118,101,114,0);
       let suggestionV = String.fromCharCode(106,95,54,52,95,104,105,110,116,101,100,0);
      if (suggestionV.length >= parseInt(`${mbnativel}`)) {
         suggestionV = `${blackd.length}`;
      }
      if (blackd == String.fromCharCode(65,0)) {
         privilegeR = `${(String.fromCharCode(120,0) == suggestionV ? suggestionV.length : blackd.length)}`;
      }
          let form0 = [String.fromCharCode(107,95,55,95,101,120,112,105,114,121,0), String.fromCharCode(103,95,55,50,95,110,101,103,111,116,105,97,116,105,111,110,0), String.fromCharCode(116,114,105,101,95,116,95,57,49,0)];
          let xvodg = [716, 975, 881];
          let mbridge_ = [String.fromCharCode(116,95,51,53,95,99,97,112,116,105,111,110,115,0), String.fromCharCode(119,95,57,50,95,110,105,100,110,105,115,116,0)];
         blackd = `${(blackd == String.fromCharCode(57,0) ? parseInt(`${mbnativel}`) : blackd.length)}`;
         form0.push(mbridge_.length / 2);
         xvodg = [xvodg.length];
         mbridge_.push(xvodg.length >> (Math.min(form0.length, 2)));
          let zhubo2 = String.fromCharCode(109,102,114,97,95,114,95,53,53,0);
          let faviconl = String.fromCharCode(100,117,114,97,116,105,111,110,95,121,95,51,50,0);
         downloadingK += parseFloat(`${2}`);
         zhubo2 = `${zhubo2.length}`;
         faviconl = `${faviconl.length / 2}`;
      malaysiau = (animationw.length % (Math.max(9, related4.length))) < 38;
   for (let w = 0; w < 1; w++) {
       let downloaderi = String.fromCharCode(98,95,50,54,95,99,108,105,112,115,0);
       let ksadM = 5;
       let activityH = String.fromCharCode(105,110,115,116,97,110,116,95,100,95,53,48,0);
      do {
         ksadM &= 1;
         if (ksadM == 4599703) {
            break;
         }
      } while ((1 < (downloaderi.length >> (Math.min(5, Math.abs(ksadM)))) && 3 < (1 >> (Math.min(3, downloaderi.length)))) && (ksadM == 4599703));
         ksadM += (String.fromCharCode(88,0) == downloaderi ? ksadM : downloaderi.length);
      while (activityH.endsWith(`${ksadM}`)) {
          let x_title5 = String.fromCharCode(119,95,49,48,48,95,115,117,98,115,116,114,0);
         ksadM *= x_title5.length;
         break;
      }
         ksadM |= downloaderi.length * 2;
      for (let n = 0; n < 3; n++) {
         ksadM += activityH.length & 2;
      }
         ksadM /= Math.max(ksadM, 2);
      do {
         ksadM &= activityH.length % (Math.max(5, ksadM));
         if (ksadM == 997328) {
            break;
         }
      } while ((ksadM < 2) && (ksadM == 997328));
      for (let k = 0; k < 2; k++) {
         activityH = `${(String.fromCharCode(105,0) == downloaderi ? ksadM : downloaderi.length)}`;
      }
         ksadM >>= Math.min(5, downloaderi.length);
      animationw = [(activityH == String.fromCharCode(53,0) ? activityH.length : ksadM)];
   }
       let floaterl = String.fromCharCode(114,101,102,105,108,108,95,120,95,57,56,0);
      do {
          let mutedu = 4;
          let sheet_ = [913, 585, 537];
          let imagemanagerE = true;
         floaterl += `${sheet_.length}`;
         mutedu >>= Math.min(Math.abs(mutedu >> (Math.min(Math.abs(mutedu), 5))), 4);
         sheet_.push(mutedu);
         if (floaterl.length == 4771449) {
            break;
         }
      } while ((floaterl.length == 4771449) && (floaterl.length == 5));
          let googler = new Map([[String.fromCharCode(112,114,105,110,116,102,95,116,95,55,48,0),119], [String.fromCharCode(105,95,57,56,95,100,105,115,112,108,97,99,101,109,101,110,116,0),525]]);
          let graphI = [945, 929];
          let countdownn = true;
         floaterl = "2";
         googler = new Map([[`${googler.size}`, ((countdownn ? 3 : 5) | googler.size)]]);
         graphI = [graphI.length - 1];
         floaterl = "2";
      nterstitialo *= 2 % (Math.max(parseInt(`${canvasl}`), 3));
   do {
      bodane = `${animationw.length}`;
      if (bodane == String.fromCharCode(107,52,120,119,110,53,56,115,97,0)) {
         break;
      }
   } while ((bodane == String.fromCharCode(107,52,120,119,110,53,56,115,97,0)) && (2 >= related4.length));
      malaysiau = 21.97 >= canvasl && 21.97 >= nterstitialo;
   while (!malaysiau || related4.length < 1) {
      related4 = `${parseInt(`${canvasl}`)}`;
      break;
   }

    dispatch(showControlAction(ShowControlType.TopBottom));
   while ((5.54 / (Math.max(6, nterstitialo))) < 1.44 && nterstitialo < 5.54) {
       let reactj = 4.0;
       let long_oX = String.fromCharCode(105,95,57,48,95,99,113,117,101,117,101,0);
       let redirect8 = new Map([[String.fromCharCode(121,95,52,52,95,109,97,107,101,102,105,108,101,0),807], [String.fromCharCode(122,95,49,55,95,109,111,118,101,100,0),604]]);
       let quest0 = String.fromCharCode(101,95,52,55,95,100,101,115,101,114,105,97,108,105,122,101,0);
      do {
          let historyI = [858, 320];
          let modityk = 5.0;
          let promotion6 = new Map([[String.fromCharCode(116,95,51,51,95,97,114,99,104,105,118,105,110,103,0),String.fromCharCode(99,95,57,56,95,97,99,111,100,101,99,0)], [String.fromCharCode(121,95,51,57,95,109,111,110,107,101,121,115,97,117,100,105,111,0),String.fromCharCode(115,104,97,100,101,115,95,97,95,56,53,0)]]);
         quest0 = `${parseInt(`${modityk}`)}`;
         historyI = [historyI.length];
         modityk -= 3 ^ historyI.length;
         promotion6 = new Map([[`${promotion6.size}`, historyI.length]]);
         if (String.fromCharCode(108,122,57,0) == quest0) {
            break;
         }
      } while ((quest0.endsWith(`${reactj}`)) && (String.fromCharCode(108,122,57,0) == quest0));
      while (5.17 > reactj) {
          let networkh = 0;
          let libswscaleI = true;
          let libreactnativeblobX = 3;
         long_oX += "2";
         networkh &= libreactnativeblobX & networkh;
         libswscaleI = !libswscaleI && networkh == 5;
         libreactnativeblobX *= libreactnativeblobX / 1;
         break;
      }
         long_oX += `${quest0.length}`;
       let activityq = String.fromCharCode(104,95,55,52,95,115,101,116,115,111,99,107,111,112,116,0);
      for (let u = 0; u < 2; u++) {
          let filter2 = new Map([[String.fromCharCode(110,95,53,54,95,119,111,114,107,108,111,97,100,0),178], [String.fromCharCode(114,95,53,56,95,115,112,105,110,0),591]]);
          let networkY = 5.0;
          let coreK = [156, 743];
          let inactivep = true;
         reactj += parseFloat(`${parseInt(`${networkY}`)}`);
         filter2[`${coreK.length}`] = 1;
         networkY *= coreK.length;
         inactivep = coreK.length > 36;
      }
         quest0 = `${redirect8.size / (Math.max(long_oX.length, 1))}`;
         activityq = `${1 | activityq.length}`;
      while (5 == quest0.length) {
         quest0 = "1";
         break;
      }
          let rewards = 0.0;
          let privilegeH = 5.0;
         redirect8[activityq] = (String.fromCharCode(53,0) == activityq ? activityq.length : redirect8.size);
         rewards -= parseFloat(`${2 ^ parseInt(`${rewards}`)}`);
         privilegeH += parseFloat(`${2}`);
       let emojiY = String.fromCharCode(98,95,56,56,95,115,116,97,116,101,0);
      for (let t = 0; t < 3; t++) {
          let screenC = 3.0;
          let remindery = 2.0;
          let utils8 = 4;
          let crown7 = [String.fromCharCode(101,95,52,51,0), String.fromCharCode(121,95,51,53,95,97,114,116,105,99,108,101,115,0), String.fromCharCode(100,95,49,48,95,104,111,115,116,112,111,114,116,102,105,108,101,0)];
         quest0 = `${2 << (Math.min(5, Math.abs(parseInt(`${screenC}`))))}`;
         screenC += parseFloat(`${1 % (Math.max(utils8, 10))}`);
         remindery -= parseInt(`${remindery}`);
         utils8 &= 2 & crown7.length;
         crown7 = [2 | parseInt(`${remindery}`)];
      }
          let flyerY = 3;
         quest0 = `${parseInt(`${reactj}`)}`;
         flyerY -= flyerY;
      malaysiau = nterstitialo < 23.89;
      break;
   }
   do {
      bodane = "2";
      if (bodane.length == 2082750) {
         break;
      }
   } while ((bodane.length == 2082750) && ((canvasl + parseFloat(`${bodane.length}`)) < 1.62 && (canvasl + 1.62) < 1.1));
      related4 += `${(targetx == String.fromCharCode(119,0) ? related4.length : targetx.length)}`;
   while (4 >= related4.length && !malaysiau) {
       let neon1 = [String.fromCharCode(112,107,103,99,111,110,102,105,103,95,110,95,54,0), String.fromCharCode(107,95,52,56,95,104,105,103,104,119,97,116,101,114,0)];
       let reminderh = [String.fromCharCode(114,95,54,50,95,114,101,102,112,105,99,0), String.fromCharCode(114,95,55,57,95,102,105,114,101,119,97,108,108,0)];
       let rulesJ = new Map([[String.fromCharCode(121,95,54,50,95,100,117,114,98,0),811], [String.fromCharCode(108,95,51,52,95,101,120,116,101,110,115,105,111,110,115,0),452]]);
       let tempi = String.fromCharCode(107,95,55,48,95,100,111,119,110,115,97,109,112,108,101,0);
      do {
          let sortm = String.fromCharCode(115,99,97,108,97,114,109,117,108,116,95,115,95,55,48,0);
          let datab = String.fromCharCode(114,95,57,56,95,108,111,110,0);
          let sansi = 2.0;
          let readw = 5.0;
          let lessa = String.fromCharCode(103,114,101,121,95,116,95,54,48,0);
         tempi += `${parseInt(`${readw}`) + lessa.length}`;
         sortm = `${parseInt(`${sansi}`) << (Math.min(Math.abs(1), 4))}`;
         datab = `${datab.length}`;
         sansi -= datab.length;
         readw += (parseFloat(`${String.fromCharCode(73,0) == sortm ? datab.length : sortm.length}`));
         lessa += "3";
         if (4670301 == tempi.length) {
            break;
         }
      } while ((4670301 == tempi.length) && ((5 & tempi.length) > 5));
          let utilsh = String.fromCharCode(117,95,55,57,95,115,116,105,112,112,101,100,0);
          let gmailo = 0.0;
          let mail6 = 0;
         tempi = `${mail6}`;
         utilsh += "3";
         gmailo -= 1;
         mail6 ^= parseInt(`${gmailo}`) ^ utilsh.length;
         rulesJ[`${tempi}`] = tempi.length;
      while (1 < reminderh.length) {
          let viewerK = 1.0;
          let minimizeU = true;
          let mailP = true;
          let catalogF = [974, 303];
          let detailsj = String.fromCharCode(115,107,105,112,112,97,98,108,101,95,103,95,52,51,0);
         neon1.push(rulesJ.size);
         viewerK -= catalogF.length & 2;
         minimizeU = viewerK > 12.20 || 37 > catalogF.length;
         mailP = (mailP ? minimizeU : !mailP);
         detailsj = `${catalogF.length * parseInt(`${viewerK}`)}`;
         break;
      }
         rulesJ[tempi] = rulesJ.size ^ tempi.length;
          let gdtadvs = [632, 983];
          let dplus2 = String.fromCharCode(109,101,109,95,117,95,55,53,0);
         tempi += `${1 & reminderh.length}`;
         gdtadvs = [1];
         dplus2 = `${2 % (Math.max(10, gdtadvs.length))}`;
      if (3 <= (rulesJ.size & 4)) {
         rulesJ[`${reminderh.length}`] = neon1.length;
      }
      for (let w = 0; w < 1; w++) {
          let awayB = 5;
          let style5 = new Map([[String.fromCharCode(101,95,57,50,95,105,110,116,101,114,108,101,97,118,101,100,0),876], [String.fromCharCode(110,95,51,95,108,105,109,105,116,0),932]]);
          let libfbjnid = false;
         tempi += `${2 - awayB}`;
         awayB &= ((libfbjnid ? 1 : 4) / 1);
         style5[`${libfbjnid}`] = 2;
      }
      while (3 > (reminderh.length | 2) || 2 > (neon1.length | reminderh.length)) {
         reminderh = [(String.fromCharCode(122,0) == tempi ? tempi.length : reminderh.length)];
         break;
      }
         reminderh.push(2);
      do {
         rulesJ = new Map([[`${neon1.length}`, 2 - tempi.length]]);
         if (678290 == rulesJ.size) {
            break;
         }
      } while ((5 == neon1.length) && (678290 == rulesJ.size));
      while (tempi.length > rulesJ.size) {
          let dangerG = 2;
          let notificationh = true;
          let questo = new Map([[String.fromCharCode(111,95,55,52,95,105,110,100,101,112,101,110,100,101,110,116,0),520], [String.fromCharCode(100,95,50,49,95,112,108,117,103,105,110,115,0),330], [String.fromCharCode(102,105,110,100,97,115,111,99,95,110,95,54,56,0),623]]);
          let libzeus4 = [297, 445];
         tempi += `${3 + dangerG}`;
         dangerG %= Math.max(5, 3);
         notificationh = 1 >= questo.size;
         questo[`${libzeus4.length}`] = libzeus4.length;
         break;
      }
      related4 += `${related4.length / (Math.max(8, rulesJ.size))}`;
      break;
   }
       let appleL = String.fromCharCode(115,112,108,105,110,101,95,57,95,54,53,0);
       let navigationu = 5;
       let stylep = 1.0;
         stylep -= 2;
         navigationu |= navigationu - parseInt(`${stylep}`);
         stylep += parseInt(`${stylep}`);
          let configL = [52, 126, 738];
          let viewsV = String.fromCharCode(104,109,97,99,95,112,95,55,57,0);
         navigationu += 2 * parseInt(`${stylep}`);
         configL = [3 - configL.length];
         viewsV += `${configL.length}`;
      if ((navigationu % 4) == 2 || 4 == (appleL.length % 4)) {
         appleL = `${(appleL == String.fromCharCode(56,0) ? appleL.length : navigationu)}`;
      }
         navigationu <<= Math.min(4, Math.abs(navigationu << (Math.min(3, Math.abs(1)))));
         appleL += `${appleL.length ^ 1}`;
         navigationu &= navigationu ^ appleL.length;
         navigationu |= 1 << (Math.min(3, Math.abs(navigationu)));
      malaysiau = navigationu == 65 || !malaysiau;
   if (!malaysiau) {
       let halfN = 3.0;
       let placeholder0 = false;
       let helpers = true;
       let activityK = [String.fromCharCode(116,97,103,95,49,95,57,48,0), String.fromCharCode(102,95,56,53,95,100,105,114,101,99,116,111,114,105,101,115,0), String.fromCharCode(111,95,55,55,95,112,111,115,116,112,114,111,99,114,101,115,0)];
         placeholder0 = activityK.includes(helpers);
       let activityD = false;
       let m_imageR = false;
         m_imageR = (69 < (activityK.length >> (Math.min(4, Math.abs((helpers ? 69 : activityK.length))))));
         placeholder0 = activityD;
      while (!placeholder0) {
         placeholder0 = activityD || activityK.length == 33;
         break;
      }
      if (!helpers || placeholder0) {
          let pauseO = false;
         helpers = 98.32 < halfN;
         pauseO = !pauseO;
      }
          let catagory2 = new Map([[String.fromCharCode(103,101,109,102,105,108,101,95,111,95,52,56,0),644], [String.fromCharCode(106,95,57,54,95,99,111,110,115,116,97,110,116,115,0),970], [String.fromCharCode(97,98,108,95,104,95,56,51,0),473]]);
          let mbridgeH = String.fromCharCode(119,95,55,53,95,118,109,97,102,0);
         helpers = activityK.length == 61;
         catagory2[`${mbridgeH}`] = 2 >> (Math.min(2, mbridgeH.length));
      do {
         placeholder0 = !helpers || !placeholder0;
         if (placeholder0 ? !placeholder0 : placeholder0) {
            break;
         }
      } while ((placeholder0 ? !placeholder0 : placeholder0) && (placeholder0));
          let ballM = 4.0;
         activityD = (((!helpers ? 39 : activityK.length) % (Math.max(activityK.length, 4))) > 39);
         ballM += parseInt(`${ballM}`) ^ parseInt(`${ballM}`);
          let privacyT = String.fromCharCode(119,95,54,57,95,103,119,101,105,0);
          let mappingQ = new Map([[String.fromCharCode(105,110,118,116,114,97,110,115,95,97,95,55,51,0),680], [String.fromCharCode(114,101,118,105,101,119,115,95,49,95,55,53,0),18]]);
          let d_imageV = [316, 566, 18];
         activityD = !m_imageR || d_imageV.length == 95;
         privacyT += `${privacyT.length}`;
         mappingQ = new Map([[`${mappingQ.size}`, 2]]);
         d_imageV.push(mappingQ.size);
      for (let n = 0; n < 1; n++) {
          let topicW = 2;
          let viewsS = 5.0;
          let whiteG = 0;
          let team5 = [730, 224];
          let long_mt = [String.fromCharCode(116,95,53,54,95,115,117,114,112,114,105,115,101,100,0), String.fromCharCode(99,111,109,112,105,108,101,111,112,116,105,111,110,103,101,116,95,57,95,54,48,0)];
         activityK.push(topicW >> (Math.min(team5.length, 1)));
         topicW >>= Math.min(Math.abs(1 + parseInt(`${viewsS}`)), 2);
         viewsS /= Math.max(parseFloat(`${2}`), 2);
         whiteG <<= Math.min(5, Math.abs(long_mt.length % 3));
         team5 = [parseInt(`${viewsS}`)];
         long_mt = [3 >> (Math.min(Math.abs(parseInt(`${viewsS}`)), 4))];
      }
      for (let i = 0; i < 3; i++) {
         activityK = [3 % (Math.max(parseInt(`${halfN}`), 8))];
      }
      bodane = `${(2 & (malaysiau ? 5 : 4))}`;
   }
   for (let r = 0; r < 1; r++) {
      canvasl += parseFloat(`${3}`);
   }

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
       let team1 = String.fromCharCode(97,100,106,117,115,116,115,95,57,95,49,56,0);
    let thailand9 = new Map([[String.fromCharCode(112,114,101,98,117,102,95,120,95,51,51,0),true ], [String.fromCharCode(99,111,110,115,117,109,97,98,108,101,95,57,95,49,0),false ], [String.fromCharCode(118,112,97,116,104,109,101,115,117,114,101,95,53,95,52,0),false ]]);
    let linka = 2.0;
    let e_count2 = [640, 565, 319];
    let imagemanagerk = false;
    let smally = 1.0;
    let diceP = 0.0;
    let project7 = false;
      linka -= ((project7 ? 2 : 1) / 1);
      smally += parseFloat(`${3 ^ parseInt(`${diceP}`)}`);

  const dispatch = useDispatch();
   if (!team1.startsWith(`${e_count2.length}`)) {
      e_count2 = [thailand9.size];
   }
   for (let r = 0; r < 1; r++) {
      linka /= Math.max(((imagemanagerk ? 4 : 5) & parseInt(`${linka}`)), 3);
   }

  const onPress = () => {

       let membershipA = [920, 974];
       let unreadi = [366, 575, 863];
      while ((membershipA.length ^ 1) < 5) {
          let latn0 = String.fromCharCode(115,95,57,48,95,100,105,102,102,0);
          let livef = true;
          let modelsb = String.fromCharCode(101,110,103,105,110,101,95,106,95,52,48,0);
         membershipA = [3];
         latn0 = `${((livef ? 4 : 4))}`;
         livef = modelsb.length <= latn0.length;
         modelsb += `${latn0.length}`;
         break;
      }
      for (let a = 0; a < 2; a++) {
         membershipA.push(membershipA.length);
      }
      for (let x = 0; x < 2; x++) {
          let combinedo = new Map([[String.fromCharCode(100,105,97,103,114,97,109,95,99,95,49,0),String.fromCharCode(108,95,56,53,95,116,104,101,109,101,100,0)], [String.fromCharCode(100,114,97,103,95,49,95,51,0),String.fromCharCode(112,111,114,116,95,101,95,56,48,0)]]);
         membershipA.push(1 >> (Math.min(5, Math.abs(combinedo.size))));
      }
      do {
          let successL = 5.0;
          let libzeusH = String.fromCharCode(121,95,53,51,95,117,110,98,111,110,100,0);
          let mbjscommonm = 2.0;
          let handlerw = String.fromCharCode(115,95,55,52,95,116,97,112,101,115,0);
         unreadi = [parseInt(`${mbjscommonm}`)];
         successL *= parseFloat(`${parseInt(`${successL}`)}`);
         libzeusH = `${(String.fromCharCode(83,0) == libzeusH ? parseInt(`${successL}`) : libzeusH.length)}`;
         mbjscommonm /= Math.max(parseFloat(`${parseInt(`${successL}`) | libzeusH.length}`), 2);
         handlerw += `${(String.fromCharCode(57,0) == handlerw ? parseInt(`${successL}`) : handlerw.length)}`;
         if (unreadi.length == 3383334) {
            break;
         }
      } while ((unreadi.length == 3383334) && ((unreadi.length + membershipA.length) > 4 || (unreadi.length + membershipA.length) > 4));
      for (let h = 0; h < 1; h++) {
         unreadi.push(membershipA.length + 2);
      }
         unreadi = [unreadi.length | 3];
      smally *= parseFloat(`${unreadi.length}`);
      team1 = "1";
    dispatch(toggleLockScreen());
   if (5.86 <= (linka * e_count2.length)) {
      linka /= Math.max(5, parseInt(`${diceP}`) >> (Math.min(2, Math.abs(3))));
   }
      thailand9[`${imagemanagerk}`] = ((imagemanagerk ? 4 : 3) % (Math.max(9, parseInt(`${smally}`))));

    dispatch(showControlAction(ShowControlType.Locker));
       let homeI = false;
       let linkai = 0.0;
      while (linkai >= 3.92) {
          let darkW = String.fromCharCode(102,95,57,55,95,118,101,114,116,0);
          let main_oR = 5.0;
         homeI = linkai < 37.27;
         darkW = `${(darkW == String.fromCharCode(49,0) ? parseInt(`${main_oR}`) : darkW.length)}`;
         main_oR /= Math.max(parseFloat(`${parseInt(`${main_oR}`)}`), 1);
         break;
      }
         homeI = 75.43 >= linkai && homeI;
      if (!homeI) {
         homeI = !homeI;
      }
          let leaguew = true;
          let modityW = 2.0;
          let directm = String.fromCharCode(103,101,116,104,100,114,95,122,95,50,50,0);
         homeI = (48 < ((!homeI ? directm.length : 48) >> (Math.min(directm.length, 3))));
         leaguew = !leaguew;
         modityW -= 1 >> (Math.min(Math.abs(parseInt(`${modityW}`)), 5));
          let playercommonD = 0.0;
         homeI = !homeI;
         playercommonD *= parseFloat(`${parseInt(`${playercommonD}`) + 1}`);
      do {
         homeI = !homeI;
         if (homeI ? !homeI : homeI) {
            break;
         }
      } while ((homeI ? !homeI : homeI) && (2.97 <= (linkai + 5.44)));
      e_count2.push(((imagemanagerk ? 5 : 5)));
      team1 += "2";

  };
   do {
       let promotionz = 1;
       let canvasL = false;
         promotionz += promotionz;
      do {
          let taiwanG = 0.0;
          let serviceE = [296, 684, 434];
          let headerO = String.fromCharCode(101,95,56,52,95,117,110,112,114,111,116,101,99,116,0);
          let latnG = String.fromCharCode(116,95,52,54,95,112,97,114,116,105,116,105,111,110,105,110,103,0);
         canvasL = serviceE.length >= 71;
         taiwanG -= parseFloat(`${3}`);
         serviceE = [1];
         headerO = `${latnG.length % (Math.max(headerO.length, 7))}`;
         latnG += `${headerO.length}`;
         if (canvasL ? !canvasL : canvasL) {
            break;
         }
      } while (((1 % (Math.max(2, promotionz))) <= 2) && (canvasL ? !canvasL : canvasL));
      if (3 <= promotionz) {
         canvasL = !canvasL;
      }
      do {
          let placeholder7 = 1;
         promotionz >>= Math.min(4, parseInt(`${Math.abs(((canvasL ? 5 : 2) >> (Math.min(Math.abs(placeholder7), 3))))}`));
         if (3416336 == promotionz) {
            break;
         }
      } while ((!canvasL) && (3416336 == promotionz));
      if ((5 * promotionz) > 4) {
          let default_iw = String.fromCharCode(109,97,116,116,101,95,117,95,53,56,0);
          let placeholderT = true;
          let unimplementedviewT = 1.0;
          let libjsinspectorZ = 0.0;
         promotionz ^= default_iw.length;
         default_iw += `${parseInt(`${unimplementedviewT}`)}`;
         placeholderT = 39.69 <= libjsinspectorZ && unimplementedviewT <= 39.69;
         libjsinspectorZ -= parseFloat(`${parseInt(`${unimplementedviewT}`)}`);
      }
       let megaphonet = String.fromCharCode(109,95,51,95,119,114,105,116,101,0);
       let inewinterstitiall = String.fromCharCode(120,95,53,51,95,97,102,102,105,110,105,116,121,0);
      linka /= Math.max(3 % (Math.max(4, parseInt(`${linka}`))), 4);
      if (linka == 956776.0) {
         break;
      }
   } while ((linka == 956776.0) && ((parseInt(`${linka}`) / (Math.max(2, 1))) == 5 && 3 == (team1.length / (Math.max(2, 10)))));
   for (let d = 0; d < 3; d++) {
       let windF = String.fromCharCode(118,95,54,56,95,99,105,114,99,108,101,100,0);
       let saveg = 5.0;
       let backgroundA = 4.0;
       let colorsi = String.fromCharCode(107,95,56,50,95,116,114,117,101,104,100,0);
       let assistc = new Map([[String.fromCharCode(106,95,56,95,115,112,111,116,108,105,103,104,116,0),8], [String.fromCharCode(99,111,109,112,108,101,116,105,111,110,95,108,95,54,50,0),33], [String.fromCharCode(115,104,97,100,101,114,115,95,98,95,55,53,0),569]]);
          let mathC = new Map([[String.fromCharCode(114,97,100,98,95,101,95,52,52,0),658], [String.fromCharCode(121,95,54,53,95,109,101,97,110,0),658], [String.fromCharCode(99,95,57,57,95,99,111,100,101,99,117,116,105,108,115,0),561]]);
          let friendsZ = 5.0;
         colorsi = `${colorsi.length}`;
         mathC[`${friendsZ}`] = parseInt(`${friendsZ}`) >> (Math.min(Math.abs(mathC.size), 3));
         colorsi = `${1 - colorsi.length}`;
      for (let p = 0; p < 1; p++) {
         backgroundA -= parseInt(`${backgroundA}`) + parseInt(`${saveg}`);
      }
       let type_05B = 1;
         colorsi += `${assistc.size}`;
          let listb = String.fromCharCode(114,101,112,101,97,116,95,121,95,55,51,0);
         backgroundA += assistc.size;
         listb = `${listb.length - listb.length}`;
       let windd = 3;
      while (1.14 < saveg) {
          let greyF = 2.0;
          let acceptedr = [611, 180, 546];
          let telemetryJ = 4;
         saveg *= parseFloat(`${telemetryJ & 1}`);
         greyF -= parseFloat(`${acceptedr.length ^ parseInt(`${greyF}`)}`);
         acceptedr = [3];
         telemetryJ &= acceptedr.length;
         break;
      }
         windd ^= 2;
      for (let j = 0; j < 2; j++) {
         windd /= Math.max(1 / (Math.max(1, windF.length)), 4);
      }
          let libreactperfloggerjniV = String.fromCharCode(110,111,114,109,97,108,105,122,101,114,95,108,95,57,51,0);
          let flyerl = String.fromCharCode(112,97,115,115,102,98,95,49,95,53,52,0);
         saveg /= Math.max(4, parseFloat(`${1}`));
         libreactperfloggerjniV = `${3 % (Math.max(6, libreactperfloggerjniV.length))}`;
         flyerl = `${(libreactperfloggerjniV == String.fromCharCode(76,0) ? libreactperfloggerjniV.length : flyerl.length)}`;
      while ((colorsi.length / 3) > 3 || 4 > (assistc.size / 3)) {
          let binddatasZ = [732, 6];
          let pointf = new Map([[String.fromCharCode(104,95,55,55,95,116,104,114,101,97,100,109,101,115,115,97,103,101,0),194], [String.fromCharCode(100,95,51,52,95,121,117,118,97,0),311]]);
         assistc = new Map([[`${backgroundA}`, parseInt(`${backgroundA}`)]]);
         binddatasZ = [2 + pointf.size];
         pointf[`${binddatasZ.length}`] = pointf.size % (Math.max(binddatasZ.length, 7));
         break;
      }
       let bodanT = String.fromCharCode(110,95,51,55,95,99,111,108,108,97,112,115,101,100,0);
       let kickH = String.fromCharCode(101,95,53,57,95,110,101,97,114,0);
          let stringsf = 4.0;
          let backG = 3;
          let helperq = 5.0;
         bodanT += `${backG & 2}`;
         stringsf += parseFloat(`${parseInt(`${helperq}`)}`);
         backG |= parseInt(`${stringsf}`);
         helperq /= Math.max(parseInt(`${stringsf}`), 4);
          let crownA = 0;
         windF += "1";
         crownA >>= Math.min(2, Math.abs(1 >> (Math.min(4, Math.abs(crownA)))));
      e_count2 = [parseInt(`${smally}`)];
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
      smally += parseFloat(`${2 + parseInt(`${linka}`)}`);
      thailand9 = new Map([[`${diceP}`, (parseInt(`${diceP}`) & (project7 ? 5 : 5))]]);

};

export const ShareButton = () => {
       let bodan5 = false;
    let schedulerv = String.fromCharCode(115,117,98,100,101,99,111,100,101,114,95,53,95,53,56,0);
    let hongkongl = String.fromCharCode(112,114,101,115,101,114,118,101,95,116,95,54,0);
    let benefitZ = new Map([[String.fromCharCode(114,95,55,57,95,115,101,109,97,110,116,105,99,0),257], [String.fromCharCode(122,95,55,57,95,116,109,112,0),779]]);
    let connectionq = new Map([[String.fromCharCode(117,95,50,54,95,105,110,115,101,116,115,0),324], [String.fromCharCode(97,95,50,54,95,97,117,103,109,101,110,116,97,116,105,111,110,0),36]]);
    let humidityE = String.fromCharCode(107,101,114,110,101,108,95,97,95,55,54,0);
    let floatingE = 5.0;
    let telegramj = [519, 206];
    let buffern = String.fromCharCode(99,104,114,111,109,97,116,105,99,95,111,95,57,54,0);
    let materialt = 4.0;
    let halfX = 3.0;
    let countryM = 5.0;
   while (1 >= (benefitZ.size * parseInt(`${floatingE}`)) || 1 >= (benefitZ.size * parseInt(`${floatingE}`))) {
      floatingE /= Math.max(parseFloat(`${hongkongl.length}`), 1);
      break;
   }
   for (let f = 0; f < 1; f++) {
      telegramj.push(3 * schedulerv.length);
   }

  const dispatch = useDispatch();
   if (4 > (4 ^ telegramj.length)) {
       let sportsC = [855, 853, 467];
      while ((sportsC.length | 4) >= 4 || 2 >= (4 | sportsC.length)) {
         sportsC = [3 >> (Math.min(4, sportsC.length))];
         break;
      }
      for (let s = 0; s < 3; s++) {
         sportsC.push(sportsC.length);
      }
         sportsC = [3 & sportsC.length];
      benefitZ = new Map([[`${bodan5}`, ((bodan5 ? 4 : 4) / (Math.max(hongkongl.length, 10)))]]);
   }
      benefitZ[`${floatingE}`] = humidityE.length / (Math.max(10, parseInt(`${floatingE}`)));

  const debouncedShare = useCallback(
    debounce((title, matchId) => shareStream(title, matchId), 500),
    [],
  );
      floatingE *= parseFloat(`${humidityE.length}`);
      materialt -= 2;


  const matchId = useSelector(state => state.matchId);
   if (3.33 > (materialt + floatingE)) {
      materialt *= humidityE.length % (Math.max(4, connectionq.size));
   }
   for (let z = 0; z < 2; z++) {
      floatingE += parseFloat(`${1 / (Math.max(5, parseInt(`${floatingE}`)))}`);
   }

  const liveRoomAction = new yys_Singapore(dispatch, matchId);
  // const shareLink = useSelector(state => state.shareLink);
      telegramj.push(parseInt(`${floatingE}`) * 3);
      benefitZ[`${benefitZ.size}`] = benefitZ.size;

  const liveDataState = useSelector(state => state.liveRoom);
      hongkongl = `${telegramj.length}`;
      buffern = `${1 % (Math.max(4, connectionq.size))}`;

  const competitionNameShort = liveDataState?.competition?.name_short;
   do {
      benefitZ[`${countryM}`] = hongkongl.length;
      if (benefitZ.size == 4290789) {
         break;
      }
   } while ((2 <= (3 * hongkongl.length)) && (benefitZ.size == 4290789));
       let xnewsF = String.fromCharCode(100,95,50,53,95,107,110,111,99,107,111,117,116,0);
       let hoveru = String.fromCharCode(109,97,99,104,95,102,95,56,56,0);
          let holderM = false;
          let privilegee = String.fromCharCode(111,103,103,108,101,95,111,95,55,54,0);
          let morej = String.fromCharCode(99,97,99,97,95,51,95,53,54,0);
         xnewsF += `${((holderM ? 5 : 2))}`;
         holderM = morej.length == privilegee.length;
         privilegee = "1";
         morej += "3";
      if (hoveru.length < xnewsF.length) {
         xnewsF = `${xnewsF.length & hoveru.length}`;
      }
       let icopy_3ur = true;
      if (2 < hoveru.length) {
         hoveru = `${hoveru.length | 1}`;
      }
      if (xnewsF != String.fromCharCode(78,0)) {
         hoveru = `${1 ^ hoveru.length}`;
      }
      if (!xnewsF.startsWith(`${icopy_3ur}`)) {
          let userL = String.fromCharCode(108,117,116,100,95,120,95,57,56,0);
          let fadfdeebbbfdabbbabdadfaaddaap = 1.0;
          let fastT = new Map([[String.fromCharCode(106,95,51,48,95,114,101,109,101,109,98,101,114,101,100,0),386], [String.fromCharCode(112,95,55,54,95,118,105,101,119,0),392]]);
          let feedbacks = String.fromCharCode(117,95,54,55,95,116,104,117,109,98,115,0);
          let with_w5g = String.fromCharCode(100,105,114,101,99,116,120,95,51,95,49,53,0);
         icopy_3ur = String.fromCharCode(78,0) == with_w5g;
         userL += `${parseInt(`${fadfdeebbbfdabbbabdadfaaddaap}`) << (Math.min(userL.length, 2))}`;
         fadfdeebbbfdabbbabdadfaaddaap += 2;
         fastT = new Map([[`${fastT.size}`, fastT.size]]);
         feedbacks += `${feedbacks.length}`;
         with_w5g = `${userL.length}`;
      }
      buffern = `${humidityE.length}`;

  const awayName = liveDataState?.away?.name;
   if (3 > hongkongl.length) {
      hongkongl += `${connectionq.size}`;
   }
   for (let r = 0; r < 3; r++) {
      materialt += parseInt(`${countryM}`) >> (Math.min(Math.abs(3), 2));
   }

  const homeName = liveDataState?.home?.name;
      countryM -= 3;
      telegramj = [1];


  const title = `${competitionNameShort} | ${homeName} vs ${awayName}`;
       let mbnativef = new Map([[String.fromCharCode(112,97,99,107,101,116,115,95,104,95,52,50,0),526], [String.fromCharCode(98,95,57,56,95,112,105,99,107,105,110,103,0),2], [String.fromCharCode(98,105,111,109,101,116,114,105,99,95,105,95,49,56,0),230]]);
       let fastI = 5.0;
       let const_eT = String.fromCharCode(114,107,109,112,112,95,108,95,56,57,0);
         fastI -= (parseFloat(`${const_eT == String.fromCharCode(79,0) ? mbnativef.size : const_eT.length}`));
         mbnativef = new Map([[const_eT, 2]]);
      do {
         const_eT = `${mbnativef.size / (Math.max(9, const_eT.length))}`;
         if (String.fromCharCode(51,105,105,103,116,119,0) == const_eT) {
            break;
         }
      } while ((String.fromCharCode(51,105,105,103,116,119,0) == const_eT) && (3 < (mbnativef.size % (Math.max(3, const_eT.length)))));
         fastI /= Math.max(2, (parseFloat(`${String.fromCharCode(72,0) == const_eT ? const_eT.length : parseInt(`${fastI}`)}`)));
      do {
         fastI += parseFloat(`${mbnativef.size >> (Math.min(const_eT.length, 2))}`);
         if (2794837.0 == fastI) {
            break;
         }
      } while (((parseFloat(`${mbnativef.size}`) * fastI) == 3.74 && (5 << (Math.min(4, Math.abs(mbnativef.size)))) == 2) && (2794837.0 == fastI));
       let ewardedt = 0.0;
      for (let k = 0; k < 3; k++) {
         mbnativef = new Map([[`${mbnativef.size}`, 3 >> (Math.min(1, Math.abs(parseInt(`${fastI}`))))]]);
      }
         fastI -= parseFloat(`${parseInt(`${ewardedt}`)}`);
         const_eT += `${1 & parseInt(`${fastI}`)}`;
      floatingE -= parseFloat(`${parseInt(`${materialt}`) * schedulerv.length}`);
      bodan5 = buffern.length <= 49;


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
