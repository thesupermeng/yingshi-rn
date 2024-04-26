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
import wawaLightTrophy, {
  setVideoControlProp,
  setVideoFullScreen,
  setVideoPlayerAction,
  setVideoSource,
} from '../../../screens/Sports/MatchDetails/action';
import VideoPlayerstyles from '../wawa_hiad_iconnewchat';

import PlayImg from '../images/icons/whatsappCornerkickFcdaebecbcbafcdfceaaeccfeacdb.png';
import PauseImg from '../images/icons/refreshStringsLibjsi.png';
import LockImg from '../images/icons/popupChatMalaysia.png';
import UnlockImg from '../images/icons/refreshPangle.png';

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
} from '../util/wawa_mode';
import {VideoLiveType} from '../../../global/wawa_plash_home';
import {StyleSheet} from 'react-native';
import {ShowControlType} from '../config';
import {wawaYellowvideolive} from '../../../global/wawa_mini';
import store from '@redux/wawa_bgvipsport_spinner';
import {floatingPlayer} from '@redux/reducers/floatingPlayer';
import debounce from 'lodash.debounce';
import {useCallback} from 'react';
import {useEffect} from 'react';
import AppSettingsAction from '@redux/actions/appSettingsAction';
import vars from '../../../utility/wawa_empty_active';

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
       let untickK = 2;
    let currentr = String.fromCharCode(108,112,99,101,110,118,0);
    let colorsL = 1;
    let m_animationA = new Map([[String.fromCharCode(100,105,109,109,105,110,103,0),318], [String.fromCharCode(112,101,114,99,101,110,116,97,103,101,0),957], [String.fromCharCode(108,111,99,107,115,0),12]]);
    let bellreminderu = false;
    let iconmorev = new Map([[String.fromCharCode(97,115,109,100,101,102,115,0),660], [String.fromCharCode(122,98,105,110,0),19], [String.fromCharCode(97,108,97,109,111,102,105,114,101,0),831]]);
    let bggradientb = 3.0;
    let mbbidr = String.fromCharCode(115,116,97,116,117,115,0);
    let blackY = 2;
      colorsL ^= ((bellreminderu ? 5 : 2) | parseInt(`${bggradientb}`));
   do {
      iconmorev = new Map([[`${bggradientb}`, ((bellreminderu ? 1 : 5) + parseInt(`${bggradientb}`))]]);
      if (3022932 == iconmorev.size) {
         break;
      }
   } while ((iconmorev.size > 2) && (3022932 == iconmorev.size));
   if (Array.from(iconmorev.values()).includes(bggradientb)) {
      bggradientb *= iconmorev.size % 3;
   }
       let episodesc = String.fromCharCode(109,115,118,105,100,101,111,0);
         episodesc += `${episodesc.length << (Math.min(Math.abs(1), 1))}`;
         episodesc = `${episodesc.length + episodesc.length}`;
      while (episodesc != episodesc) {
          let dragcloseq = String.fromCharCode(117,110,102,114,101,101,122,101,0);
         episodesc += `${episodesc.length - dragcloseq.length}`;
         break;
      }
      colorsL /= Math.max(2, 1);

    if (onPress) onPress();
   do {
       let predictionR = false;
       let update_nk = new Map([[String.fromCharCode(115,101,110,115,105,116,105,118,101,0),124], [String.fromCharCode(111,118,101,114,114,105,100,101,0),791], [String.fromCharCode(103,114,101,101,100,121,0),715]]);
       let x_lockC = [String.fromCharCode(110,101,115,116,101,100,0), String.fromCharCode(105,110,118,105,116,97,116,105,111,110,115,0)];
       let iconsettingA = String.fromCharCode(102,114,105,101,110,100,0);
      do {
         x_lockC = [update_nk.size];
         if (x_lockC.length == 2106608) {
            break;
         }
      } while ((iconsettingA.endsWith(`${x_lockC.length}`)) && (x_lockC.length == 2106608));
      while (x_lockC.length > 1) {
         x_lockC.push(((predictionR ? 2 : 4) - update_nk.size));
         break;
      }
      do {
         iconsettingA = "1";
         if (iconsettingA == String.fromCharCode(104,109,118,111,105,52,57,0)) {
            break;
         }
      } while ((2 == iconsettingA.length) && (iconsettingA == String.fromCharCode(104,109,118,111,105,52,57,0)));
      for (let m = 0; m < 2; m++) {
          let logouserI = String.fromCharCode(114,101,116,117,114,110,0);
          let defaultlogo_ = new Map([[String.fromCharCode(113,117,97,110,116,120,0),false ], [String.fromCharCode(110,110,109,111,100,0),false ]]);
          let canvasd = new Map([[String.fromCharCode(109,101,109,99,109,112,0),false ], [String.fromCharCode(97,117,116,111,108,111,99,107,0),true ]]);
          let canvasK = new Map([[String.fromCharCode(105,103,110,111,114,105,110,103,0),String.fromCharCode(108,115,112,108,112,99,0)], [String.fromCharCode(120,112,116,97,98,108,101,0),String.fromCharCode(99,97,112,116,117,114,101,0)], [String.fromCharCode(116,111,107,101,110,115,0),String.fromCharCode(102,105,108,109,0)]]);
         iconsettingA = "3";
         logouserI += `${3 & defaultlogo_.size}`;
         defaultlogo_ = new Map([[`${canvasd.size}`, canvasd.size - canvasK.size]]);
         canvasK = new Map([[`${canvasK.size}`, canvasK.size ^ 3]]);
      }
       let yellowanimationliveA = [127, 517, 12];
         predictionR = (iconsettingA.length >> (Math.min(1, x_lockC.length))) <= 47;
      if ((2 | iconsettingA.length) == 2 || 2 == (iconsettingA.length | update_nk.size)) {
          let tickedr = 0.0;
          let confirmationq = 5.0;
         update_nk[iconsettingA] = iconsettingA.length;
         tickedr *= parseInt(`${confirmationq}`);
         confirmationq *= parseFloat(`${parseInt(`${confirmationq}`) + parseInt(`${tickedr}`)}`);
      }
      do {
         update_nk = new Map([[`${yellowanimationliveA.length}`, x_lockC.length & 2]]);
         if (4059798 == update_nk.size) {
            break;
         }
      } while ((4059798 == update_nk.size) && (iconsettingA.endsWith(`${update_nk.size}`)));
      if (2 == iconsettingA.length) {
          let traminiv = 1.0;
          let profilel = 0;
          let iconbells = true;
          let transferm = false;
          let skipu = true;
         iconsettingA += `${parseInt(`${traminiv}`)}`;
         traminiv *= parseFloat(`${1}`);
         profilel -= profilel;
         iconbells = skipu || profilel <= 75;
         transferm = profilel >= 6 || !transferm;
      }
         x_lockC.push(((predictionR ? 3 : 2) - 3));
      for (let q = 0; q < 2; q++) {
         yellowanimationliveA.push(yellowanimationliveA.length);
      }
         x_lockC.push(1);
      colorsL %= Math.max(x_lockC.length, 2);
      if (874103 == colorsL) {
         break;
      }
   } while ((Array.from(m_animationA.values()).includes(colorsL)) && (874103 == colorsL));
   if (4 <= (1 << (Math.min(4, Math.abs(iconmorev.size)))) && (currentr.length << (Math.min(4, Math.abs(iconmorev.size)))) <= 1) {
       let controlN = String.fromCharCode(101,112,108,121,0);
       let textU = String.fromCharCode(97,112,112,115,0);
       let shootnogoal2 = String.fromCharCode(99,111,108,108,101,99,116,0);
         shootnogoal2 = `${(textU == String.fromCharCode(80,0) ? shootnogoal2.length : textU.length)}`;
      do {
         textU += `${(shootnogoal2 == String.fromCharCode(118,0) ? controlN.length : shootnogoal2.length)}`;
         if (textU == String.fromCharCode(114,116,116,118,52,97,106,54,0)) {
            break;
         }
      } while ((shootnogoal2.length <= 4) && (textU == String.fromCharCode(114,116,116,118,52,97,106,54,0)));
      currentr += "3";
   }
      mbbidr += `${2 | m_animationA.size}`;
   while (bggradientb <= 1.62) {
      bellreminderu = 13 >= colorsL;
      break;
   }

    Orientation.lockToPortrait();
      m_animationA = new Map([[`${untickK}`, 3]]);
   do {
      bellreminderu = 33 == untickK;
      if (bellreminderu ? !bellreminderu : bellreminderu) {
         break;
      }
   } while ((bellreminderu ? !bellreminderu : bellreminderu) && (3 <= (m_animationA.size ^ 4) || bellreminderu));
   if (m_animationA.size <= 4) {
      bggradientb -= iconmorev.size >> (Math.min(mbbidr.length, 3));
   }
      mbbidr = `${m_animationA.size}`;

    dispatch(setVideoFullScreen(false));
      colorsL >>= Math.min(Math.abs((String.fromCharCode(71,0) == currentr ? currentr.length : m_animationA.size)), 2);
      untickK <<= Math.min(Math.abs(((bellreminderu ? 4 : 3) - 2)), 5);
   do {
       let grey_ = String.fromCharCode(110,119,105,115,101,95,109,95,49,50,0);
       let ynewinterstitialA = [394, 231];
       let nalyticsV = [617, 494, 35];
       let iconplayt = 4.0;
         nalyticsV.push(1);
      do {
         grey_ += `${parseInt(`${iconplayt}`)}`;
         if (String.fromCharCode(120,110,56,0) == grey_) {
            break;
         }
      } while ((4 > (nalyticsV.length + grey_.length)) && (String.fromCharCode(120,110,56,0) == grey_));
       let mailk = 0;
       let update_i3 = 4;
         ynewinterstitialA.push(grey_.length << (Math.min(Math.abs(2), 2)));
      if (!grey_.endsWith(`${nalyticsV.length}`)) {
         grey_ = `${nalyticsV.length}`;
      }
      if (iconplayt < 4.60) {
         iconplayt /= Math.max(update_i3, 2);
      }
       let eventsplasho = [361, 468, 346];
          let graphicsq = new Map([[String.fromCharCode(114,101,112,117,98,108,105,115,104,0),223], [String.fromCharCode(115,116,111,114,97,98,108,101,0),74], [String.fromCharCode(114,101,110,97,109,101,0),912]]);
          let anytimeM = String.fromCharCode(116,114,107,110,0);
         mailk &= 3;
         graphicsq[anytimeM] = graphicsq.size | 1;
         anytimeM += `${graphicsq.size}`;
          let binddatasG = new Map([[String.fromCharCode(114,101,109,97,105,110,105,110,103,0),852], [String.fromCharCode(100,105,103,105,116,115,0),692], [String.fromCharCode(107,109,115,103,114,97,98,0),231]]);
         iconplayt += binddatasG.size;
      for (let y = 0; y < 1; y++) {
         ynewinterstitialA = [eventsplasho.length << (Math.min(5, Math.abs(update_i3)))];
      }
         update_i3 <<= Math.min(Math.abs(ynewinterstitialA.length / 3), 3);
      for (let j = 0; j < 1; j++) {
          let emoji_ = 5.0;
          let nbatrophy6 = String.fromCharCode(116,114,97,110,115,112,111,115,101,120,0);
         nalyticsV.push(mailk ^ 2);
         emoji_ *= parseFloat(`${nbatrophy6.length & parseInt(`${emoji_}`)}`);
         nbatrophy6 += `${parseInt(`${emoji_}`)}`;
      }
      iconmorev = new Map([[`${bggradientb}`, untickK]]);
      if (iconmorev.size == 88922) {
         break;
      }
   } while ((iconmorev[`${bggradientb}`] != null) && (iconmorev.size == 88922));
      m_animationA[`${bggradientb}`] = 1;

    if (!isFullScreen) {

       let bannerP = false;
         bannerP = (!bannerP ? !bannerP : !bannerP);
      for (let e = 0; e < 1; e++) {
          let libswscaley = String.fromCharCode(111,116,104,0);
          let termsY = String.fromCharCode(111,98,106,101,99,116,0);
          let homeplayerz = 1.0;
          let rewindA = 5.0;
         bannerP = 63.6 <= homeplayerz;
         libswscaley = "3";
         termsY = `${3 << (Math.min(3, libswscaley.length))}`;
         homeplayerz += 2;
         rewindA *= parseFloat(`${parseInt(`${rewindA}`) % (Math.max(9, libswscaley.length))}`);
      }
      if (!bannerP || bannerP) {
         bannerP = !bannerP && bannerP;
      }
      m_animationA[`${bellreminderu}`] = 1 & m_animationA.size;
      mbbidr = `${m_animationA.size + 2}`;
   for (let z = 0; z < 3; z++) {
      untickK += 3 << (Math.min(3, Math.abs(untickK)));
   }
   do {
      currentr += "2";
      if (currentr.length == 2972034) {
         break;
      }
   } while ((1 == (currentr.length / (Math.max(5, parseInt(`${bggradientb}`))))) && (currentr.length == 2972034));
      dispatch(setVideoSource(VideoLiveType.DETAIL, ''));
   if ((untickK % 4) >= 4 || (iconmorev.size % (Math.max(9, untickK))) >= 4) {
       let filedo = true;
       let condensedp = String.fromCharCode(113,115,118,100,101,105,110,116,0);
       let bellremindero = new Map([[String.fromCharCode(109,112,115,117,98,0),510], [String.fromCharCode(105,110,116,101,114,120,121,0),302], [String.fromCharCode(114,101,99,111,110,0),878]]);
       let livee = String.fromCharCode(112,97,99,107,101,114,0);
      if (2 > (bellremindero.size / (Math.max(4, 9))) || (livee.length / (Math.max(2, bellremindero.size))) > 4) {
         bellremindero = new Map([[condensedp, condensedp.length]]);
      }
         filedo = filedo || livee.length == 62;
         livee = `${bellremindero.size | 3}`;
      while (condensedp.length >= 3) {
         condensedp += `${condensedp.length}`;
         break;
      }
       let profilepicY = new Map([[String.fromCharCode(98,114,111,97,100,99,97,115,116,115,0),554], [String.fromCharCode(97,116,116,97,99,104,101,100,0),728], [String.fromCharCode(117,118,104,111,114,105,122,111,110,116,97,108,0),511]]);
       let indexO = new Map([[String.fromCharCode(114,97,116,101,115,0),923], [String.fromCharCode(100,101,99,108,97,114,101,0),835], [String.fromCharCode(104,121,98,114,105,100,0),775]]);
         bellremindero = new Map([[`${profilepicY.size}`, (profilepicY.size * (filedo ? 4 : 3))]]);
          let signinup9 = String.fromCharCode(98,117,108,107,0);
          let textK = 3.0;
         bellremindero[condensedp] = livee.length;
         signinup9 += "3";
         textK -= parseInt(`${textK}`);
       let iconcalendarv = String.fromCharCode(114,101,97,114,114,97,110,103,101,0);
         condensedp = "2";
         profilepicY[`${filedo}`] = bellremindero.size;
      if ((indexO.size << (Math.min(Math.abs(bellremindero.size), 4))) >= 3) {
          let package_433 = 4.0;
          let iconarrowrighti = new Map([[String.fromCharCode(115,116,97,108,101,0),948], [String.fromCharCode(100,118,100,115,117,98,0),336]]);
          let long_be = 2.0;
          let iconrefreshR = new Map([[String.fromCharCode(99,97,116,99,104,0),579], [String.fromCharCode(114,98,115,112,0),794]]);
          let videocommon9 = false;
         bellremindero[`${videocommon9}`] = (livee.length + (videocommon9 ? 2 : 3));
         package_433 *= parseFloat(`${iconarrowrighti.size}`);
         iconarrowrighti = new Map([[`${iconrefreshR.size}`, parseInt(`${package_433}`)]]);
         long_be -= iconrefreshR.size;
      }
       let gesturesZ = String.fromCharCode(105,110,99,111,109,105,110,103,0);
      untickK &= ((bellreminderu ? 1 : 5) | 3);
   }
      untickK >>= Math.min(5, Math.abs(2));
   if (4 == (iconmorev.size / (Math.max(9, currentr.length))) && 4 == (iconmorev.size / (Math.max(currentr.length, 2)))) {
      iconmorev = new Map([[`${bellreminderu}`, (mbbidr == String.fromCharCode(82,0) ? mbbidr.length : (bellreminderu ? 3 : 2))]]);
   }
       let iconadslink4 = 3.0;
         iconadslink4 /= Math.max(2, 2);
      do {
         iconadslink4 -= parseInt(`${iconadslink4}`);
         if (iconadslink4 == 3442377.0) {
            break;
         }
      } while (((iconadslink4 + iconadslink4) < 3.63 || 3.81 < (iconadslink4 * 3.63)) && (iconadslink4 == 3442377.0));
          let weiboU = new Map([[String.fromCharCode(97,120,112,0),704], [String.fromCharCode(98,114,101,97,107,0),5], [String.fromCharCode(115,111,105,115,100,105,115,99,111,110,110,101,99,116,105,110,103,0),598]]);
          let down6 = 2.0;
          let whiteanimationlivex = [84, 649];
         iconadslink4 *= weiboU.size;
         weiboU[`${down6}`] = 3;
         down6 -= whiteanimationlivex.length;
         whiteanimationlivex.push(whiteanimationlivex.length);
      m_animationA[`${colorsL}`] = m_animationA.size;

    }
  };
  return (
    <RenderControl style={style.backContainer} onPress={onPressBack}>
      <Image
        resizeMode="contain"
        source={require('../images/icons/catalogRender.png')}
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
       let homeloading9 = String.fromCharCode(101,112,111,99,104,0);
    let materialE = 1.0;
    let turnH = String.fromCharCode(109,111,117,116,104,0);
    let middleO = String.fromCharCode(99,111,108,108,97,112,115,101,100,0);
    let nbatrophyg = String.fromCharCode(97,117,116,111,114,111,116,97,116,101,0);
    let directK = String.fromCharCode(116,111,111,108,0);
    let indicatorA = false;
    let downx = 5;
    let filterZ = new Map([[String.fromCharCode(113,95,53,56,0),852], [String.fromCharCode(112,114,111,99,101,101,100,0),715], [String.fromCharCode(116,120,105,100,0),150]]);
    let halffieldimageU = 2.0;
    let playershirth = String.fromCharCode(101,120,112,105,114,101,100,0);
    let subsU = 4.0;
    let reducer3 = String.fromCharCode(116,114,117,110,99,97,116,105,111,110,0);
    let kick8 = String.fromCharCode(112,97,99,107,101,116,112,101,101,107,0);
    let backwardW = 5;
    let dplusU = String.fromCharCode(115,104,111,119,115,112,101,99,116,114,117,109,112,105,99,0);
    let zoomQ = String.fromCharCode(118,105,100,101,111,99,111,100,101,99,0);
   while ((directK.length >> (Math.min(Math.abs(2), 4))) >= 5) {
      directK = "3";
      break;
   }
   if (nbatrophyg.length == 4) {
      indicatorA = String.fromCharCode(74,0) == turnH;
   }
      middleO = `${nbatrophyg.length}`;

  const {isFullScreen} = useSelector(state => state.videoPlayerControl);
   if (nbatrophyg.length == 1) {
      filterZ = new Map([[`${filterZ.size}`, filterZ.size]]);
   }
   for (let w = 0; w < 2; w++) {
      indicatorA = 19.28 == subsU || turnH == String.fromCharCode(104,0);
   }
      middleO = `${((indicatorA ? 2 : 1) / (Math.max(downx, 1)))}`;

  const dispatch = useDispatch();
      homeloading9 += `${parseInt(`${halffieldimageU}`) >> (Math.min(middleO.length, 2))}`;
      playershirth += `${2 ^ parseInt(`${subsU}`)}`;
       let bgvipsportk = 1.0;
       let basketballmatchdetailbgF = true;
       let libreactperfloggerjnii = 3;
         bgvipsportk *= 2 >> (Math.min(Math.abs(parseInt(`${bgvipsportk}`)), 2));
          let malaysiaC = String.fromCharCode(99,111,109,112,97,114,105,115,111,110,0);
          let cnewsshareT = 1.0;
          let weathern = String.fromCharCode(115,113,108,0);
         bgvipsportk *= 3;
         malaysiaC = "1";
         cnewsshareT -= parseFloat(`${malaysiaC.length}`);
         weathern += `${1 + weathern.length}`;
      for (let o = 0; o < 1; o++) {
          let leakcheckerf = 0.0;
         basketballmatchdetailbgF = !basketballmatchdetailbgF && leakcheckerf <= 5.100;
      }
      do {
          let unimplementedviewe = 5;
          let yellowscoreballe = String.fromCharCode(99,120,100,97,116,97,0);
          let overy = String.fromCharCode(115,101,112,97,114,97,116,101,115,0);
          let goalC = String.fromCharCode(114,101,97,100,111,110,108,121,0);
         libreactperfloggerjnii &= overy.length;
         unimplementedviewe >>= Math.min(Math.abs((yellowscoreballe == String.fromCharCode(112,0) ? unimplementedviewe : yellowscoreballe.length)), 5);
         overy += "2";
         goalC = `${yellowscoreballe.length}`;
         if (libreactperfloggerjnii == 3268156) {
            break;
         }
      } while ((libreactperfloggerjnii == 3268156) && (4 > (libreactperfloggerjnii + 1) && 1 > libreactperfloggerjnii));
      if (!basketballmatchdetailbgF) {
         basketballmatchdetailbgF = !basketballmatchdetailbgF;
      }
      do {
         libreactperfloggerjnii /= Math.max((libreactperfloggerjnii + (basketballmatchdetailbgF ? 1 : 4)), 3);
         if (libreactperfloggerjnii == 3782440) {
            break;
         }
      } while ((libreactperfloggerjnii == 3782440) && ((4.32 / (Math.max(5, bgvipsportk))) >= 1.0));
      if ((libreactperfloggerjnii * bgvipsportk) > 3.55 && (libreactperfloggerjnii * bgvipsportk) > 3.55) {
         libreactperfloggerjnii *= libreactperfloggerjnii;
      }
      do {
         libreactperfloggerjnii <<= Math.min(1, Math.abs(libreactperfloggerjnii));
         if (libreactperfloggerjnii == 316521) {
            break;
         }
      } while ((1 < (libreactperfloggerjnii % 1) || (1 / (Math.max(7, libreactperfloggerjnii))) < 5) && (libreactperfloggerjnii == 316521));
         bgvipsportk += ((basketballmatchdetailbgF ? 2 : 1) << (Math.min(Math.abs(parseInt(`${bgvipsportk}`)), 5)));
      indicatorA = String.fromCharCode(53,0) == homeloading9 && 51 >= playershirth.length;

  const onPressToggleFullScreen = () => {

   do {
      directK = `${nbatrophyg.length ^ filterZ.size}`;
      if (2639758 == directK.length) {
         break;
      }
   } while ((2639758 == directK.length) && (playershirth.endsWith(`${directK.length}`)));
       let yellowQ = String.fromCharCode(115,118,97,103,0);
       let distk = new Map([[String.fromCharCode(99,111,110,99,101,97,108,0),false ], [String.fromCharCode(102,111,108,100,101,114,115,0),true ]]);
      do {
          let footballl = new Map([[String.fromCharCode(110,97,118,105,103,97,116,105,111,110,0),841], [String.fromCharCode(99,111,109,112,105,108,101,111,112,116,105,111,110,103,101,116,0),123], [String.fromCharCode(97,98,105,0),258]]);
          let loginsuccessI = String.fromCharCode(111,112,101,114,97,116,111,114,115,0);
          let anner8 = String.fromCharCode(111,102,102,108,105,110,101,0);
          let package_y6j = false;
          let nextD = 0;
         distk = new Map([[`${package_y6j}`, nextD]]);
         footballl[`${anner8}`] = 1 | footballl.size;
         loginsuccessI += `${footballl.size | 3}`;
         anner8 += `${loginsuccessI.length ^ footballl.size}`;
         package_y6j = (loginsuccessI.length ^ footballl.size) > 16;
         nextD /= Math.max(1, 1 ^ anner8.length);
         if (1440104 == distk.size) {
            break;
         }
      } while ((1440104 == distk.size) && (yellowQ.startsWith(`${distk.size}`)));
      while ((5 >> (Math.min(4, yellowQ.length))) >= 5) {
         yellowQ = "2";
         break;
      }
         yellowQ = `${3 ^ yellowQ.length}`;
       let videojsZ = String.fromCharCode(106,100,109,97,115,116,101,114,0);
       let user3 = String.fromCharCode(116,121,112,101,99,111,100,101,0);
      while (5 > user3.length) {
         videojsZ += `${(videojsZ == String.fromCharCode(56,0) ? distk.size : videojsZ.length)}`;
         break;
      }
      if (videojsZ.length == 4) {
         yellowQ = `${distk.size % (Math.max(1, 2))}`;
      }
      halffieldimageU *= homeloading9.length;
   while (!directK.startsWith(`${middleO.length}`)) {
      middleO = `${homeloading9.length / (Math.max(playershirth.length, 10))}`;
      break;
   }
    dispatch(setVideoFullScreen(!isFullScreen));
   while (homeloading9.endsWith(`${turnH.length}`)) {
       let point6 = 4.0;
       let recommendationO = String.fromCharCode(111,99,116,101,116,0);
          let private_pwy = [177, 472, 799];
          let bottomG = 2.0;
         recommendationO = "3";
         private_pwy = [2 ^ private_pwy.length];
         bottomG /= Math.max(1, parseInt(`${bottomG}`) >> (Math.min(private_pwy.length, 4)));
       let volumej = 3.0;
       let webviewU = 3.0;
         volumej -= parseFloat(`${parseInt(`${volumej}`) % (Math.max(recommendationO.length, 4))}`);
         webviewU -= parseFloat(`${recommendationO.length}`);
      if ((point6 / (Math.max(webviewU, 8))) > 2.59 || (point6 / (Math.max(2, webviewU))) > 2.59) {
         webviewU += parseFloat(`${2}`);
      }
          let upgradeA = String.fromCharCode(115,101,108,101,99,116,111,112,0);
          let iconsubssuccess3 = [347, 761, 993];
         recommendationO = `${(recommendationO == String.fromCharCode(101,0) ? parseInt(`${point6}`) : recommendationO.length)}`;
         upgradeA = `${upgradeA.length % (Math.max(1, iconsubssuccess3.length))}`;
         iconsubssuccess3.push(3);
      homeloading9 += `${2 >> (Math.min(3, Math.abs(parseInt(`${point6}`))))}`;
      break;
   }
      directK += `${(String.fromCharCode(119,0) == turnH ? downx : turnH.length)}`;
   if (Array.from(filterZ.values()).includes(materialE)) {
      filterZ[nbatrophyg] = (String.fromCharCode(86,0) == nbatrophyg ? nbatrophyg.length : directK.length);
   }

  };
       let comment9 = [691, 76, 150];
         comment9 = [comment9.length];
       let iconstar8 = String.fromCharCode(118,108,99,115,112,101,99,0);
          let weiboo = new Map([[String.fromCharCode(101,110,118,0),String.fromCharCode(108,111,103,116,97,110,0)], [String.fromCharCode(109,97,114,115,104,97,108,108,105,110,103,0),String.fromCharCode(97,118,111,105,100,0)], [String.fromCharCode(112,101,114,112,101,110,100,105,99,117,108,97,114,0),String.fromCharCode(104,97,108,102,0)]]);
          let canvas_ = false;
          let basketballtrophy2 = 5.0;
         iconstar8 = `${iconstar8.length}`;
         weiboo = new Map([[`${canvas_}`, (parseInt(`${basketballtrophy2}`) / (Math.max(1, (canvas_ ? 2 : 5))))]]);
         basketballtrophy2 -= 2 << (Math.min(Math.abs(parseInt(`${basketballtrophy2}`)), 4));
      indicatorA = !indicatorA && subsU <= 22.85;
   do {
       let smallbrightnessq = String.fromCharCode(101,118,115,105,103,110,97,108,0);
       let iconsharefriendsU = new Map([[String.fromCharCode(116,104,114,101,97,100,115,97,102,101,0),true ], [String.fromCharCode(102,114,111,109,98,105,110,100,0),true ], [String.fromCharCode(115,108,105,99,101,97,110,103,108,101,0),true ]]);
       let middlebrightnessi = [158, 786];
      do {
          let firebaseN = 1;
          let predictionbuttont = new Map([[String.fromCharCode(98,97,110,110,101,100,0),171], [String.fromCharCode(110,116,111,108,111,103,121,0),960], [String.fromCharCode(99,111,108,108,101,99,116,101,100,0),392]]);
          let componentregistry5 = String.fromCharCode(99,111,109,112,0);
          let iconbellF = 3;
          let notificationc = true;
         iconsharefriendsU = new Map([[`${iconbellF}`, iconbellF % 3]]);
         firebaseN |= (componentregistry5 == String.fromCharCode(74,0) ? componentregistry5.length : (notificationc ? 4 : 4));
         predictionbuttont = new Map([[`${predictionbuttont.size}`, componentregistry5.length]]);
         notificationc = null != predictionbuttont[`${firebaseN}`];
         if (iconsharefriendsU.size == 42911) {
            break;
         }
      } while (((iconsharefriendsU.size - middlebrightnessi.length) == 2) && (iconsharefriendsU.size == 42911));
      while (5 >= (iconsharefriendsU.size | smallbrightnessq.length)) {
          let icon8 = String.fromCharCode(97,100,100,105,116,105,111,110,97,108,108,121,0);
          let interstitialz = String.fromCharCode(98,100,119,110,0);
         iconsharefriendsU[interstitialz] = 3;
         icon8 = `${(icon8 == String.fromCharCode(95,0) ? icon8.length : icon8.length)}`;
         interstitialz += `${(String.fromCharCode(75,0) == icon8 ? icon8.length : icon8.length)}`;
         break;
      }
       let networkZ = 2;
         networkZ |= networkZ;
         iconsharefriendsU = new Map([[`${networkZ}`, 1]]);
      turnH += `${nbatrophyg.length}`;
      if (String.fromCharCode(115,100,97,51,111,56,114,113,109,0) == turnH) {
         break;
      }
   } while ((directK != String.fromCharCode(73,0)) && (String.fromCharCode(115,100,97,51,111,56,114,113,109,0) == turnH));
      directK += "1";

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
      playershirth = `${middleO.length}`;
   while (1 == nbatrophyg.length) {
       let final_1f = new Map([[String.fromCharCode(103,101,116,115,111,99,107,111,112,116,0),594], [String.fromCharCode(99,111,110,102,108,105,99,116,105,110,103,0),758], [String.fromCharCode(120,99,98,103,114,97,98,0),248]]);
         final_1f[`${final_1f.size}`] = 1;
         final_1f[`${final_1f.size}`] = 2;
      while (Array.from(final_1f.values()).includes(final_1f.size)) {
         final_1f[`${final_1f.size}`] = final_1f.size / (Math.max(final_1f.size, 5));
         break;
      }
      nbatrophyg += `${(String.fromCharCode(114,0) == playershirth ? playershirth.length : parseInt(`${halffieldimageU}`))}`;
      break;
   }
       let componentregistry4 = String.fromCharCode(101,99,109,117,108,116,0);
      for (let r = 0; r < 2; r++) {
         componentregistry4 += `${componentregistry4.length << (Math.min(componentregistry4.length, 3))}`;
      }
      while (componentregistry4.length <= componentregistry4.length) {
         componentregistry4 = `${componentregistry4.length}`;
         break;
      }
       let pointc = 1.0;
      turnH = `${reducer3.length}`;

};

export const PlayPause = () => {
       let resendu = 0.0;
    let p_managerj = 2.0;
    let checkboxU = 4.0;
    let hooki = 5;
    let watchnowbgg = String.fromCharCode(109,97,107,101,115,114,112,109,0);
    let annerQ = 0;
    let robotoS = String.fromCharCode(110,111,114,109,97,108,105,122,101,100,0);
    let fillp = 1;
    let defaultprofilepicy = String.fromCharCode(100,114,111,112,112,101,114,0);
    let renderU = new Map([[String.fromCharCode(100,101,105,110,116,0),String.fromCharCode(109,101,116,97,98,111,100,121,0)], [String.fromCharCode(112,114,111,103,114,97,109,0),String.fromCharCode(116,99,109,105,0)]]);
   while (resendu > hooki) {
       let largebrightnessy = false;
       let clearT = 4.0;
          let langM = String.fromCharCode(103,114,97,112,104,105,99,115,0);
          let yellowanimationliveF = new Map([[String.fromCharCode(114,101,99,97,108,99,117,108,97,116,101,0),String.fromCharCode(97,117,116,111,100,101,116,101,99,116,111,114,0)], [String.fromCharCode(99,111,108,105,110,101,97,114,0),String.fromCharCode(99,100,99,105,0)]]);
          let awayteamfieldq = 2.0;
         largebrightnessy = awayteamfieldq > 58.9 && yellowanimationliveF.size > 12;
         langM = `${langM.length}`;
         yellowanimationliveF = new Map([[langM, langM.length % 1]]);
      do {
          let transferH = String.fromCharCode(100,101,112,101,110,100,115,0);
         clearT -= (parseFloat(`${(largebrightnessy ? 2 : 1) & transferH.length}`));
         if (4303953.0 == clearT) {
            break;
         }
      } while ((largebrightnessy) && (4303953.0 == clearT));
      if (clearT == 5.32 || (clearT / (Math.max(5.32, 7))) == 1.65) {
         clearT += (parseFloat(`${(largebrightnessy ? 5 : 1) >> (Math.min(Math.abs(parseInt(`${clearT}`)), 5))}`));
      }
      for (let w = 0; w < 1; w++) {
          let dependencyI = String.fromCharCode(114,101,108,105,97,98,108,101,0);
          let backwhiteu = false;
          let updatess = new Map([[String.fromCharCode(102,114,101,101,100,111,109,0),String.fromCharCode(111,119,110,115,0)], [String.fromCharCode(112,104,114,97,115,101,0),String.fromCharCode(112,97,114,116,105,116,105,111,110,115,0)]]);
          let about1 = 1;
          let bellreminderb = String.fromCharCode(112,117,116,110,117,109,112,97,115,115,101,115,0);
         largebrightnessy = updatess.size > 70;
         dependencyI = `${(String.fromCharCode(70,0) == bellreminderb ? (backwhiteu ? 4 : 4) : bellreminderb.length)}`;
         backwhiteu = !backwhiteu;
         updatess[dependencyI] = dependencyI.length;
         about1 %= Math.max(4, (dependencyI == String.fromCharCode(105,0) ? dependencyI.length : about1));
      }
         clearT -= parseFloat(`${parseInt(`${clearT}`) - 2}`);
      do {
         largebrightnessy = largebrightnessy || 25.63 >= clearT;
         if (largebrightnessy ? !largebrightnessy : largebrightnessy) {
            break;
         }
      } while ((4.94 == (3.62 + clearT) || clearT == 3.62) && (largebrightnessy ? !largebrightnessy : largebrightnessy));
      resendu *= parseFloat(`${fillp}`);
      break;
   }
   for (let a = 0; a < 3; a++) {
       let modei = [587, 438, 166];
       let mapbufferF = 4.0;
       let streamingK = String.fromCharCode(100,101,99,111,100,101,100,0);
       let rootg = String.fromCharCode(112,117,98,101,120,112,0);
      for (let o = 0; o < 2; o++) {
         streamingK = `${1 ^ streamingK.length}`;
      }
      while (!streamingK.startsWith(`${mapbufferF}`)) {
          let chatbotphotoO = String.fromCharCode(99,111,110,99,97,116,101,110,97,116,101,100,0);
         mapbufferF += rootg.length << (Math.min(chatbotphotoO.length, 3));
         break;
      }
      while (rootg.endsWith(streamingK)) {
         rootg += `${(streamingK == String.fromCharCode(118,0) ? modei.length : streamingK.length)}`;
         break;
      }
      for (let y = 0; y < 2; y++) {
          let anytimec = 0;
          let footballQ = [541, 461];
          let downloadedv = [208, 824, 857];
          let sliderM = String.fromCharCode(98,108,111,98,0);
          let whitei = String.fromCharCode(99,104,97,110,103,101,114,0);
         streamingK = "1";
         anytimec >>= Math.min(Math.abs(anytimec - 2), 4);
         footballQ = [downloadedv.length * 3];
         downloadedv.push(1 | sliderM.length);
         sliderM += `${(whitei == String.fromCharCode(54,0) ? whitei.length : sliderM.length)}`;
      }
         rootg += `${parseInt(`${mapbufferF}`) - 3}`;
      hooki &= (String.fromCharCode(66,0) == robotoS ? robotoS.length : fillp);
   }

  const dispatch = useDispatch();
      watchnowbgg += `${fillp}`;
      resendu *= parseFloat(`${fillp * defaultprofilepicy.length}`);

  const {isPaused} = useSelector(state => state.videoPlayerControl);
      robotoS = `${watchnowbgg.length}`;
      robotoS += `${annerQ * watchnowbgg.length}`;

  const onPress = () => {

       let mounting0 = String.fromCharCode(113,117,97,114,116,0);
       let mbnativec = String.fromCharCode(118,97,114,105,97,110,99,101,120,104,95,56,95,53,56,0);
       let chinasameL = 1.0;
          let reddownarrowh = new Map([[String.fromCharCode(99,111,100,101,99,112,114,105,118,97,116,101,0),981], [String.fromCharCode(97,110,110,101,120,98,109,112,0),879], [String.fromCharCode(101,110,103,105,110,101,115,0),674]]);
          let shirtv = [String.fromCharCode(115,97,108,116,101,100,0), String.fromCharCode(109,112,101,103,118,105,100,101,111,100,115,112,0)];
          let schedulerf = new Map([[String.fromCharCode(100,105,102,102,101,114,101,110,99,101,0),String.fromCharCode(105,116,101,114,97,116,111,114,0)], [String.fromCharCode(117,110,100,101,114,115,99,111,114,101,0),String.fromCharCode(110,111,100,101,115,0)], [String.fromCharCode(115,104,111,114,116,101,114,0),String.fromCharCode(99,97,114,114,105,101,114,0)]]);
         mbnativec = `${1 ^ reddownarrowh.size}`;
         reddownarrowh = new Map([[`${schedulerf.size}`, 3]]);
         shirtv = [2];
         schedulerf[`${shirtv.length}`] = shirtv.length >> (Math.min(3, Math.abs(schedulerf.size)));
      for (let p = 0; p < 1; p++) {
         mbnativec += `${(String.fromCharCode(89,0) == mbnativec ? parseInt(`${chinasameL}`) : mbnativec.length)}`;
      }
         mbnativec += "3";
          let subbasketballplayers = [464, 248, 497];
         mbnativec += `${mbnativec.length}`;
         subbasketballplayers.push(subbasketballplayers.length);
         mbnativec += `${parseInt(`${chinasameL}`)}`;
         mbnativec = `${parseInt(`${chinasameL}`) % (Math.max(mounting0.length, 8))}`;
         chinasameL += parseFloat(`${2 + mbnativec.length}`);
      while ((chinasameL * 3.73) > 3.26 && 2 > (1 & mbnativec.length)) {
         mbnativec += `${parseInt(`${chinasameL}`) | mounting0.length}`;
         break;
      }
         mounting0 += `${(mbnativec == String.fromCharCode(86,0) ? mbnativec.length : mounting0.length)}`;
      robotoS += `${watchnowbgg.length}`;
   for (let b = 0; b < 2; b++) {
      annerQ += 2 ^ robotoS.length;
   }
    dispatch(togglePlayPaused());
   if ((p_managerj / (Math.max(parseFloat(`${robotoS.length}`), 2))) < 3.80) {
       let showy = 3.0;
      do {
          let trashk = 4.0;
          let filedi = new Map([[String.fromCharCode(112,111,107,101,114,0),false ], [String.fromCharCode(112,114,101,115,99,97,108,105,110,103,0),false ]]);
          let untickG = 5;
         showy += parseFloat(`${untickG * 2}`);
         trashk -= parseFloat(`${filedi.size & parseInt(`${trashk}`)}`);
         filedi[`${trashk}`] = filedi.size;
         untickG %= Math.max(3 - parseInt(`${trashk}`), 2);
         if (showy == 1249511.0) {
            break;
         }
      } while ((showy >= showy) && (showy == 1249511.0));
      for (let j = 0; j < 2; j++) {
          let expandw = [284, 405];
          let defaultroombgZ = 5.0;
         showy /= Math.max(1, parseFloat(`${parseInt(`${defaultroombgZ}`) % (Math.max(3, expandw.length))}`));
      }
      while (1.71 >= (showy + 5.79) && (showy + showy) >= 5.79) {
          let reviewX = String.fromCharCode(110,105,108,115,0);
          let iconcalendar6 = 1.0;
          let thailandy = String.fromCharCode(105,112,104,111,110,101,0);
         showy += parseFloat(`${3 * reviewX.length}`);
         reviewX = `${parseInt(`${iconcalendar6}`) >> (Math.min(thailandy.length, 4))}`;
         iconcalendar6 /= Math.max(1, 3 ^ thailandy.length);
         break;
      }
      p_managerj += parseFloat(`${2}`);
   }
   while (p_managerj == 1.90) {
      p_managerj *= parseFloat(`${1}`);
      break;
   }

  };
   do {
       let iconshareK = 5;
       let wifirouterW = String.fromCharCode(99,111,108,111,114,115,112,97,99,101,100,115,112,0);
       let referrerd = String.fromCharCode(102,105,114,115,116,108,121,0);
       let e_imageF = [668, 693, 698];
       let predictiondefaultl = String.fromCharCode(109,102,104,100,0);
         predictiondefaultl = `${1 | e_imageF.length}`;
      do {
          let windi = String.fromCharCode(114,101,115,97,109,112,108,101,0);
          let trash7 = String.fromCharCode(97,116,111,110,0);
          let e_playerR = [809, 800, 723];
          let iconrightorangeG = 4.0;
          let libavfilterJ = 1;
         referrerd += `${e_playerR.length ^ 3}`;
         windi = "2";
         trash7 += "2";
         e_playerR.push(3 / (Math.max(libavfilterJ, 6)));
         iconrightorangeG -= parseInt(`${iconrightorangeG}`);
         libavfilterJ /= Math.max(4, parseInt(`${iconrightorangeG}`));
         if (String.fromCharCode(103,54,121,49,48,114,95,0) == referrerd) {
            break;
         }
      } while ((1 >= e_imageF.length) && (String.fromCharCode(103,54,121,49,48,114,95,0) == referrerd));
      for (let y = 0; y < 2; y++) {
         iconshareK <<= Math.min(2, Math.abs(wifirouterW.length + predictiondefaultl.length));
      }
      do {
         predictiondefaultl = "1";
         if (String.fromCharCode(108,115,100,48,54,102,100,101,101,111,0) == predictiondefaultl) {
            break;
         }
      } while ((referrerd != String.fromCharCode(56,0)) && (String.fromCharCode(108,115,100,48,54,102,100,101,101,111,0) == predictiondefaultl));
         referrerd += `${(String.fromCharCode(76,0) == referrerd ? e_imageF.length : referrerd.length)}`;
         wifirouterW += "2";
         referrerd = `${(String.fromCharCode(68,0) == referrerd ? referrerd.length : predictiondefaultl.length)}`;
      do {
         iconshareK *= predictiondefaultl.length;
         if (iconshareK == 4338202) {
            break;
         }
      } while (((e_imageF.length << (Math.min(Math.abs(1), 1))) >= 4) && (iconshareK == 4338202));
      for (let u = 0; u < 1; u++) {
         e_imageF.push(3);
      }
      do {
         predictiondefaultl += "1";
         if (predictiondefaultl.length == 123923) {
            break;
         }
      } while ((predictiondefaultl.length == 123923) && (referrerd == String.fromCharCode(105,0)));
      if ((wifirouterW.length * e_imageF.length) >= 2) {
         e_imageF.push(wifirouterW.length ^ 1);
      }
         referrerd += `${1 % (Math.max(4, e_imageF.length))}`;
      while (wifirouterW.length < e_imageF.length) {
         wifirouterW = `${e_imageF.length - 2}`;
         break;
      }
         wifirouterW = `${wifirouterW.length}`;
      do {
          let middle_ = new Map([[String.fromCharCode(115,111,109,101,0),495], [String.fromCharCode(97,100,100,105,116,105,111,110,97,108,0),259]]);
         predictiondefaultl += `${wifirouterW.length % (Math.max(3, 4))}`;
         middle_[`${middle_.size}`] = middle_.size + middle_.size;
         if (String.fromCharCode(49,100,117,0) == predictiondefaultl) {
            break;
         }
      } while ((2 <= wifirouterW.length) && (String.fromCharCode(49,100,117,0) == predictiondefaultl));
      hooki <<= Math.min(watchnowbgg.length, 3);
      if (hooki == 3767369) {
         break;
      }
   } while ((hooki == 3767369) && (!robotoS.startsWith(`${hooki}`)));
      checkboxU += hooki >> (Math.min(watchnowbgg.length, 2));

  return (
    <RenderControl onPress={onPress} style={style.commonIconContainer}>
      <Image
        source={isPaused === true ? PlayImg : PauseImg}
        style={style.commonIcon}
        resizeMode={'contain'}
      />
    </RenderControl>
  );
   do {
      checkboxU *= defaultprofilepicy.length | parseInt(`${checkboxU}`);
      if (checkboxU == 1418798.0) {
         break;
      }
   } while ((checkboxU == 1418798.0) && (3.34 > (checkboxU + p_managerj) && (p_managerj + 3.34) > 3.42));
   do {
      hooki |= parseInt(`${resendu}`) >> (Math.min(2, Math.abs(1)));
      if (2297728 == hooki) {
         break;
      }
   } while ((2297728 == hooki) && (1 == (fillp + 1)));

};
export const Refresh = () => {
       let footballfiledlayoutc = String.fromCharCode(112,97,114,116,105,99,105,112,97,110,116,0);
    let update_83X = new Map([[String.fromCharCode(114,101,109,97,112,95,108,95,57,49,0),510], [String.fromCharCode(115,116,97,98,105,108,105,122,101,95,56,95,54,55,0),596], [String.fromCharCode(97,108,105,97,115,0),989]]);
    let heartL = String.fromCharCode(100,105,115,116,114,97,99,116,97,98,108,101,0);
    let iconeditQ = 2.0;
    let sourceQ = String.fromCharCode(114,101,112,108,105,99,97,116,101,100,0);
    let single7 = [834, 521, 750];
    let eventsplashp = [String.fromCharCode(105,110,115,101,114,116,105,111,110,0), String.fromCharCode(115,112,97,99,101,114,115,0)];
    let ncopy_lE = String.fromCharCode(99,111,110,118,111,108,117,116,105,111,110,0);
    let orangeQ = String.fromCharCode(101,120,105,102,0);
    let f_animationA = 5.0;
    let mailp = new Map([[String.fromCharCode(100,105,118,105,100,111,114,0),false ], [String.fromCharCode(121,111,110,108,121,120,0),false ]]);
      iconeditQ += 3;
   do {
      iconeditQ -= orangeQ.length;
      if (517432.0 == iconeditQ) {
         break;
      }
   } while ((3 >= (5 >> (Math.min(3, eventsplashp.length))) || (5 & eventsplashp.length) >= 3) && (517432.0 == iconeditQ));
       let iconlogoutI = String.fromCharCode(112,114,111,109,105,115,101,115,0);
       let sigmobT = String.fromCharCode(102,108,111,111,114,0);
       let switch_v0y = String.fromCharCode(103,101,111,98,116,97,103,0);
      while (sigmobT.length == iconlogoutI.length) {
         sigmobT = `${iconlogoutI.length}`;
         break;
      }
          let orangeclockx = new Map([[String.fromCharCode(116,104,117,109,98,0),520], [String.fromCharCode(112,114,101,116,99,104,0),910], [String.fromCharCode(116,114,97,110,115,108,105,116,101,114,97,116,101,100,0),443]]);
         switch_v0y += `${sigmobT.length}`;
         orangeclockx = new Map([[`${orangeclockx.size}`, 1 >> (Math.min(1, Math.abs(orangeclockx.size)))]]);
      do {
         switch_v0y += `${iconlogoutI.length & 2}`;
         if (switch_v0y.length == 655781) {
            break;
         }
      } while ((switch_v0y.length == 655781) && (iconlogoutI != switch_v0y));
      do {
         sigmobT = "1";
         if (2271637 == sigmobT.length) {
            break;
         }
      } while ((2271637 == sigmobT.length) && (switch_v0y.length > sigmobT.length));
          let ksadF = [167, 52];
          let alertF = false;
          let checkbox4 = 4;
         sigmobT += `${(switch_v0y == String.fromCharCode(69,0) ? sigmobT.length : switch_v0y.length)}`;
         ksadF = [((alertF ? 2 : 4) * ksadF.length)];
         alertF = ksadF.includes(alertF);
         checkbox4 |= ksadF.length + 3;
      for (let m = 0; m < 1; m++) {
         switch_v0y = `${(sigmobT == String.fromCharCode(113,0) ? sigmobT.length : switch_v0y.length)}`;
      }
         switch_v0y += `${3 - iconlogoutI.length}`;
         sigmobT += `${switch_v0y.length - 3}`;
      for (let b = 0; b < 3; b++) {
          let iconnewssharee = 2;
          let gradleE = String.fromCharCode(112,114,111,116,111,99,111,108,0);
         sigmobT = `${switch_v0y.length / (Math.max(iconlogoutI.length, 3))}`;
         iconnewssharee -= (String.fromCharCode(98,0) == gradleE ? iconnewssharee : gradleE.length);
      }
      iconeditQ /= Math.max(1, 1);

  const dispatch = useDispatch();
   for (let w = 0; w < 2; w++) {
       let contextf = false;
      while (!contextf) {
         contextf = (!contextf ? !contextf : contextf);
         break;
      }
         contextf = (contextf ? contextf : contextf);
         contextf = (contextf ? !contextf : contextf);
      ncopy_lE += `${orangeQ.length}`;
   }
      orangeQ += `${heartL.length % (Math.max(1, 8))}`;
   do {
      f_animationA /= Math.max(2, parseFloat(`${mailp.size | 3}`));
      if (f_animationA == 4729857.0) {
         break;
      }
   } while ((f_animationA == 4729857.0) && ((5 << (Math.min(5, footballfiledlayoutc.length))) == 4));

  const onPress = () => {

   if ((footballfiledlayoutc.length / 1) <= 2 || 5 <= (eventsplashp.length / 1)) {
      eventsplashp.push(update_83X.size * ncopy_lE.length);
   }
      sourceQ += `${ncopy_lE.length}`;
      orangeQ += `${ncopy_lE.length}`;
    dispatch(setVideoPlayerAction('refresh'));
   while (orangeQ.length == eventsplashp.length) {
      eventsplashp.push(ncopy_lE.length << (Math.min(3, Math.abs(mailp.size))));
      break;
   }
      ncopy_lE = `${3 >> (Math.min(3, Math.abs(update_83X.size)))}`;
   do {
      f_animationA += parseFloat(`${ncopy_lE.length}`);
      if (715894.0 == f_animationA) {
         break;
      }
   } while ((715894.0 == f_animationA) && ((1.18 * f_animationA) <= 5.16));

  };
      single7 = [2 ^ update_83X.size];
      orangeQ = "2";
   for (let i = 0; i < 2; i++) {
      ncopy_lE = `${ncopy_lE.length}`;
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
   if ((sourceQ.length + eventsplashp.length) > 4) {
       let popupy = new Map([[String.fromCharCode(118,111,112,101,110,0),false ], [String.fromCharCode(99,104,97,112,116,101,114,115,0),false ], [String.fromCharCode(98,97,115,101,0),false ]]);
       let vignette1 = String.fromCharCode(116,114,97,106,101,99,116,111,114,121,0);
       let mbridgei = String.fromCharCode(115,117,98,114,97,110,103,101,115,0);
       let statisticsinactiveA = false;
       let otherg = 3.0;
         vignette1 = "3";
          let sinaL = new Map([[String.fromCharCode(108,105,98,115,114,116,0),988], [String.fromCharCode(121,95,49,48,95,109,111,99,107,105,110,103,0),725]]);
         vignette1 += `${(1 & (statisticsinactiveA ? 4 : 1))}`;
         sinaL[`${sinaL.size}`] = sinaL.size;
      for (let u = 0; u < 1; u++) {
         popupy[`${otherg}`] = (parseInt(`${otherg}`) >> (Math.min(1, Math.abs((statisticsinactiveA ? 4 : 5)))));
      }
       let storeQ = 0.0;
         otherg -= parseFloat(`${vignette1.length}`);
      if (3.78 >= storeQ) {
          let footballfieldK = String.fromCharCode(114,101,99,111,103,110,105,116,105,111,110,115,0);
          let defaultlogod = String.fromCharCode(100,99,113,117,97,110,116,0);
         storeQ *= 1;
         footballfieldK += `${footballfieldK.length}`;
         defaultlogod += `${defaultlogod.length + footballfieldK.length}`;
      }
       let basketballawayteamM = String.fromCharCode(119,95,57,50,95,98,108,105,110,100,105,110,103,0);
       let gemfilel = String.fromCharCode(112,114,101,115,101,110,116,97,98,108,101,0);
      if (3 == (gemfilel.length % 3) || (gemfilel.length - parseInt(`${otherg}`)) == 3) {
         gemfilel = `${(String.fromCharCode(79,0) == gemfilel ? parseInt(`${storeQ}`) : gemfilel.length)}`;
      }
      if ((5 | gemfilel.length) > 3 && (popupy.size | gemfilel.length) > 5) {
         popupy[vignette1] = popupy.size;
      }
         mbridgei = `${2 * parseInt(`${storeQ}`)}`;
         vignette1 = "2";
         storeQ -= parseInt(`${otherg}`) << (Math.min(3, Math.abs(1)));
      if (mbridgei.endsWith(`${storeQ}`)) {
         storeQ *= (mbridgei == String.fromCharCode(85,0) ? vignette1.length : mbridgei.length);
      }
      while (4 >= mbridgei.length) {
          let with_u9i = String.fromCharCode(102,99,116,108,0);
          let klevinh = String.fromCharCode(118,109,97,102,109,111,116,105,111,110,0);
         basketballawayteamM += "2";
         with_u9i = `${with_u9i.length | klevinh.length}`;
         klevinh = `${with_u9i.length}`;
         break;
      }
      while (5.90 < otherg) {
         vignette1 += "3";
         break;
      }
      sourceQ += `${(String.fromCharCode(98,0) == heartL ? parseInt(`${f_animationA}`) : heartL.length)}`;
   }
   if (!eventsplashp.includes(f_animationA)) {
      eventsplashp.push(3 - update_83X.size);
   }
   do {
       let main_xr = 5.0;
       let scrollviewi = 1;
         main_xr -= 1;
          let large8 = 0.0;
          let basketballiconZ = new Map([[String.fromCharCode(103,108,97,115,115,0),913], [String.fromCharCode(105,110,100,101,110,116,0),325]]);
         main_xr -= parseInt(`${large8}`);
         large8 /= Math.max(4, parseFloat(`${basketballiconZ.size}`));
         basketballiconZ = new Map([[`${basketballiconZ.size}`, 3]]);
         main_xr += parseInt(`${main_xr}`) & scrollviewi;
      if ((scrollviewi - 5) < 4 && 3 < (scrollviewi << (Math.min(Math.abs(5), 3)))) {
          let footballl = 2.0;
          let sendm = String.fromCharCode(111,110,116,111,0);
          let downloadD = String.fromCharCode(115,117,98,115,101,113,117,101,110,99,101,115,0);
          let ksadd = 2.0;
          let disconnectedlogo3 = 1;
         main_xr += disconnectedlogo3;
         footballl += parseFloat(`${sendm.length % (Math.max(downloadD.length, 2))}`);
         sendm += `${parseInt(`${ksadd}`) ^ 3}`;
         downloadD += `${(String.fromCharCode(121,0) == sendm ? parseInt(`${ksadd}`) : sendm.length)}`;
         disconnectedlogo3 %= Math.max(5, parseInt(`${footballl}`) | sendm.length);
      }
         scrollviewi &= scrollviewi / 2;
      do {
         main_xr *= scrollviewi - parseInt(`${main_xr}`);
         if (main_xr == 1856175.0) {
            break;
         }
      } while ((main_xr == 1856175.0) && ((main_xr + 5.59) <= 5.57));
      eventsplashp.push(parseInt(`${f_animationA}`) / (Math.max(3, 1)));
      if (1855776 == eventsplashp.length) {
         break;
      }
   } while ((1855776 == eventsplashp.length) && (eventsplashp.length < 5));

};

export const Pip = () => {
       let benefite = 3.0;
    let basketballhometeamF = true;
    let circlex = new Map([[String.fromCharCode(116,118,100,99,0),String.fromCharCode(101,95,51,57,95,112,105,99,107,105,110,116,101,114,0)], [String.fromCharCode(101,97,115,101,95,103,95,57,48,0),String.fromCharCode(114,112,122,97,0)], [String.fromCharCode(99,97,110,99,101,108,97,116,105,111,110,0),String.fromCharCode(98,95,56,55,0)]]);
    let yellowcirclebgM = true;
    let encryptZ = String.fromCharCode(105,112,97,100,100,0);
    let component8 = false;
    let selectedr = String.fromCharCode(115,118,113,101,110,99,0);
    let overlayI = String.fromCharCode(109,115,118,115,0);
   while (!yellowcirclebgM) {
      circlex[`${yellowcirclebgM}`] = (circlex.size & (yellowcirclebgM ? 3 : 4));
      break;
   }

  const dispatch = useDispatch();
      component8 = circlex[`${yellowcirclebgM}`] == null;

  const {source, matchId, videoType} = useSelector(
    state => state.videoPlayerControl,
  );
      encryptZ += `${selectedr.length ^ 1}`;

  const onPress = () => {

      encryptZ += `${((basketballhometeamF ? 3 : 2))}`;
    Orientation.lockToPortrait();
      encryptZ = `${2 & encryptZ.length}`;

    store.dispatch(
      floatingPlayer.actions.setProp({
        display: true,
        url: source,
        matchId: matchId,
        videoType: videoType,
      }),
    );
   do {
       let libloggerb = 4.0;
       let rncore0 = true;
       let navigationi = 5.0;
      if ((navigationi - 5.25) <= 4.9 && !rncore0) {
         rncore0 = !rncore0 && 17.29 > libloggerb;
      }
      if (!rncore0) {
          let filei = String.fromCharCode(109,101,114,103,105,110,103,0);
          let themeL = [852, 468, 596];
          let register_lD = new Map([[String.fromCharCode(98,117,98,98,108,101,115,0),291], [String.fromCharCode(102,114,97,109,101,100,0),778]]);
          let regengz = 2;
          let positionfield7 = String.fromCharCode(102,105,110,97,108,105,122,101,0);
         libloggerb /= Math.max(1, 4);
         filei = `${positionfield7.length << (Math.min(4, themeL.length))}`;
         themeL.push(themeL.length);
         register_lD = new Map([[`${themeL.length}`, 1]]);
         regengz *= register_lD.size;
         positionfield7 += `${(String.fromCharCode(102,0) == positionfield7 ? positionfield7.length : register_lD.size)}`;
      }
          let libfolly9 = false;
         navigationi -= parseInt(`${libloggerb}`) / 1;
         libfolly9 = (!libfolly9 ? !libfolly9 : libfolly9);
      do {
         libloggerb /= Math.max(1, (parseInt(`${libloggerb}`) & (rncore0 ? 2 : 4)));
         if (libloggerb == 2789849.0) {
            break;
         }
      } while ((libloggerb <= 3.35) && (libloggerb == 2789849.0));
          let volumet = 3.0;
          let filter3 = String.fromCharCode(110,117,109,101,114,97,108,0);
          let mbsplashN = 5.0;
         rncore0 = !rncore0;
         volumet -= 3;
         filter3 = `${parseInt(`${mbsplashN}`)}`;
         mbsplashN *= parseInt(`${volumet}`);
      do {
         libloggerb *= 2 | parseInt(`${navigationi}`);
         if (4474675.0 == libloggerb) {
            break;
         }
      } while ((navigationi >= 3.63) && (4474675.0 == libloggerb));
          let chatroombackgroundE = false;
          let attributedstringa = String.fromCharCode(116,101,120,116,98,111,120,0);
         navigationi += parseInt(`${navigationi}`) * 1;
         chatroombackgroundE = (((chatroombackgroundE ? 60 : attributedstringa.length) * attributedstringa.length) < 60);
       let whatsappC = String.fromCharCode(108,97,110,100,115,99,97,112,101,0);
         rncore0 = navigationi > 4.55;
      component8 = benefite >= 86.18 && basketballhometeamF;
      if (component8 ? !component8 : component8) {
         break;
      }
   } while ((component8 ? !component8 : component8) && (selectedr.length <= 3));

    dispatch(
      setVideoControlProp({
        isFullScreen: false,
        source: '',
        videoType: VideoLiveType.DETAIL,
      }),
    );
   for (let g = 0; g < 2; g++) {
      selectedr += `${circlex.size % (Math.max(2, selectedr.length))}`;
   }

  };
       let chinasamer = 2.0;
       let loginQ = true;
       let skip7 = String.fromCharCode(100,101,108,105,118,101,114,121,0);
      while (skip7.length >= 5) {
          let selectionc = String.fromCharCode(110,101,116,119,111,114,107,115,0);
          let latn1 = [String.fromCharCode(111,110,116,114,111,108,115,0), String.fromCharCode(101,120,101,99,117,116,101,0), String.fromCharCode(108,111,103,0)];
         skip7 += `${1 ^ parseInt(`${chinasamer}`)}`;
         selectionc = `${selectionc.length ^ 2}`;
         latn1.push(latn1.length ^ selectionc.length);
         break;
      }
         loginQ = skip7.startsWith(`${loginQ}`);
         chinasamer /= Math.max(2, parseInt(`${chinasamer}`) ^ 1);
      for (let n = 0; n < 3; n++) {
         loginQ = (61 >= ((loginQ ? 61 : skip7.length) + skip7.length));
      }
      do {
          let green2 = false;
          let halffieldimages = 1.0;
          let encrypt1 = 0.0;
          let footballfiledlayoutl = 3.0;
          let subtextz = [573, 43, 581];
         chinasamer *= ((loginQ ? 1 : 4) << (Math.min(2, Math.abs((green2 ? 5 : 1)))));
         green2 = 46 <= subtextz.length || 81.93 <= footballfiledlayoutl;
         halffieldimages -= parseFloat(`${subtextz.length * parseInt(`${footballfiledlayoutl}`)}`);
         encrypt1 /= Math.max(3, parseFloat(`${subtextz.length}`));
         if (141947.0 == chinasamer) {
            break;
         }
      } while ((141947.0 == chinasamer) && ((4.5 - chinasamer) >= 3.60 && loginQ));
      do {
         loginQ = loginQ || 95.20 >= chinasamer;
         if (loginQ ? !loginQ : loginQ) {
            break;
         }
      } while ((loginQ ? !loginQ : loginQ) && (loginQ && skip7.length == 3));
         chinasamer /= Math.max(skip7.length, 1);
       let dacccfaabfbcbadeebddcabacdffdbS = 3.0;
       let iconbellR = 3.0;
      if (5.69 < chinasamer) {
          let iconwatchq = String.fromCharCode(105,111,115,116,114,101,97,109,0);
          let philippinesb = false;
          let colorsD = String.fromCharCode(104,105,103,104,112,97,115,115,0);
          let bootsplashV = 4.0;
         loginQ = (skip7.length << (Math.min(4, iconwatchq.length))) >= 71;
         iconwatchq += `${colorsD.length}`;
         philippinesb = !colorsD.endsWith(`${bootsplashV}`);
         bootsplashV /= Math.max(3, (colorsD == String.fromCharCode(88,0) ? colorsD.length : parseInt(`${bootsplashV}`)));
      }
      selectedr += `${skip7.length}`;


  return (
    <RenderControl onPress={onPress} style={style.commonIconContainer}>
      <Image
        source={IconPipShrink}
        style={style.commonIcon}
        resizeMode={'contain'}
      />
    </RenderControl>
  );
   if (overlayI.length <= parseInt(`${benefite}`)) {
      overlayI = `${encryptZ.length << (Math.min(Math.abs(1), 5))}`;
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
       let owngoalL = false;
    let defaultteami = String.fromCharCode(116,104,105,114,100,0);
    let promotionK = 5.0;
    let livesharej = false;
    let iconeditz = String.fromCharCode(102,105,116,116,101,100,0);
    let cancelH = 3.0;
    let predictionbutton0 = 5.0;
    let suboutY = String.fromCharCode(103,97,109,101,115,0);
    let pagination3 = String.fromCharCode(101,97,115,105,110,103,0);
    let defaultbasketballbgu = [253, 906, 286];
      defaultteami = `${((livesharej ? 3 : 4))}`;
       let pathh = String.fromCharCode(103,114,111,117,112,101,100,0);
       let googled = 3.0;
       let iconviewerC = String.fromCharCode(100,111,109,97,105,110,0);
      while (!iconviewerC.startsWith(`${googled}`)) {
          let nativemoduleA = 4;
          let hoveri = String.fromCharCode(115,116,100,111,117,116,0);
          let rounds = 3.0;
          let defaultteamr = String.fromCharCode(109,105,120,105,110,0);
         iconviewerC = `${nativemoduleA % 3}`;
         nativemoduleA ^= 3;
         hoveri = `${parseInt(`${rounds}`) | 3}`;
         rounds += parseInt(`${rounds}`);
         defaultteamr = `${defaultteamr.length}`;
         break;
      }
      while (3 == iconviewerC.length) {
          let modelsw = String.fromCharCode(102,114,97,109,101,113,117,101,117,101,0);
         googled += (modelsw == String.fromCharCode(82,0) ? modelsw.length : pathh.length);
         break;
      }
      if (4 >= (pathh.length % 4) || (pathh.length + 4) >= 2) {
          let downarrowP = String.fromCharCode(105,110,118,111,99,97,116,105,111,110,115,0);
          let stationm = 0;
          let encrypt1 = new Map([[String.fromCharCode(112,97,99,107,97,103,101,115,0),String.fromCharCode(114,101,99,111,114,100,105,110,103,99,111,110,110,0)], [String.fromCharCode(100,101,108,101,116,105,111,110,115,0),String.fromCharCode(114,101,97,108,108,111,99,97,116,101,0)], [String.fromCharCode(115,107,105,112,115,0),String.fromCharCode(97,99,116,117,97,108,105,122,101,0)]]);
          let chinasamey = 1;
         pathh += `${1 - encrypt1.size}`;
         downarrowP += "2";
         stationm /= Math.max((downarrowP == String.fromCharCode(90,0) ? downarrowP.length : stationm), 1);
         encrypt1 = new Map([[`${stationm}`, stationm]]);
         chinasamey >>= Math.min(Math.abs(stationm ^ 3), 2);
      }
          let libruntimeexecutorC = false;
         googled *= iconviewerC.length;
         libruntimeexecutorC = (libruntimeexecutorC ? !libruntimeexecutorC : libruntimeexecutorC);
       let fullscreenmaxG = [757, 694];
       let carousel9 = [595, 120];
      while (pathh.includes(`${iconviewerC.length}`)) {
          let thumbnaile = 4;
         pathh = "3";
         thumbnaile |= 1 ^ thumbnaile;
         break;
      }
         pathh += "2";
      if (3 == (4 / (Math.max(9, pathh.length))) && 5 == (4 >> (Math.min(1, pathh.length)))) {
         googled += fullscreenmaxG.length >> (Math.min(Math.abs(3), 5));
      }
       let phone5 = [570, 258, 7];
      livesharej = livesharej || promotionK == 93.94;
   while (4.98 >= (1.79 - cancelH) || (4 ^ iconeditz.length) >= 4) {
      cancelH += (parseFloat(`${String.fromCharCode(66,0) == suboutY ? (owngoalL ? 1 : 1) : suboutY.length}`));
      break;
   }
       let usernameh = 2.0;
       let downX = String.fromCharCode(114,111,116,114,0);
       let dragN = 0.0;
      if (1.29 <= dragN) {
          let greyb = 3.0;
         dragN -= parseFloat(`${downX.length}`);
         greyb += parseFloat(`${parseInt(`${greyb}`) ^ parseInt(`${greyb}`)}`);
      }
          let latnT = 4.0;
         downX = "1";
         latnT /= Math.max(1, parseInt(`${latnT}`) / (Math.max(parseInt(`${latnT}`), 7)));
      while (usernameh < 3.45) {
          let hometeamfieldu = false;
          let productk = String.fromCharCode(101,120,112,101,99,116,0);
          let placementc = 4.0;
         downX = `${2 + parseInt(`${usernameh}`)}`;
         hometeamfieldu = productk.length == 38;
         productk = `${((hometeamfieldu ? 5 : 4) >> (Math.min(Math.abs(parseInt(`${placementc}`)), 5)))}`;
         placementc -= parseFloat(`${1 % (Math.max(4, productk.length))}`);
         break;
      }
         downX = `${parseInt(`${usernameh}`)}`;
          let middlebrightness4 = 2.0;
         dragN /= Math.max(4, parseFloat(`${2 >> (Math.min(5, downX.length))}`));
         middlebrightness4 /= Math.max(1, 3 >> (Math.min(Math.abs(parseInt(`${middlebrightness4}`)), 3)));
      while ((3.68 * dragN) == 3.3 && (3.68 * dragN) == 3.78) {
         usernameh -= (parseFloat(`${String.fromCharCode(81,0) == downX ? downX.length : parseInt(`${usernameh}`)}`));
         break;
      }
         dragN /= Math.max(parseFloat(`${downX.length ^ 1}`), 3);
      if (downX.length == parseInt(`${dragN}`)) {
         downX += "1";
      }
      while (downX.startsWith(`${usernameh}`)) {
          let launcherb = false;
          let transferi = 3;
         usernameh -= parseFloat(`${parseInt(`${usernameh}`)}`);
         launcherb = transferi <= 51 && !launcherb;
         transferi += 3;
         break;
      }
      cancelH += (parseFloat(`${String.fromCharCode(82,0) == iconeditz ? parseInt(`${cancelH}`) : iconeditz.length}`));
   do {
      promotionK -= (parseFloat(`${(livesharej ? 4 : 3) % (Math.max(parseInt(`${promotionK}`), 4))}`));
      if (promotionK == 1845604.0) {
         break;
      }
   } while ((!owngoalL) && (promotionK == 1845604.0));
      predictionbutton0 += parseInt(`${predictionbutton0}`) + 2;
      defaultteami += `${iconeditz.length}`;
      cancelH /= Math.max(parseFloat(`${parseInt(`${promotionK}`)}`), 2);

    dispatch(toggleLockScreen());
   for (let a = 0; a < 1; a++) {
      promotionK -= parseFloat(`${iconeditz.length}`);
   }
      livesharej = (iconeditz.length >> (Math.min(3, suboutY.length))) == 80;
   do {
      suboutY += `${1 / (Math.max(5, parseInt(`${promotionK}`)))}`;
      if (String.fromCharCode(99,106,98,109,52,51,0) == suboutY) {
         break;
      }
   } while ((4 == suboutY.length) && (String.fromCharCode(99,106,98,109,52,51,0) == suboutY));
       let listu = String.fromCharCode(114,119,110,100,0);
       let umengS = 5.0;
      for (let a = 0; a < 1; a++) {
          let searchz = [980, 927, 328];
          let product7 = String.fromCharCode(105,116,97,108,105,99,0);
         umengS /= Math.max(parseFloat(`${searchz.length}`), 3);
         searchz.push(product7.length - 3);
         product7 += `${product7.length ^ product7.length}`;
      }
      do {
         listu = `${(listu == String.fromCharCode(81,0) ? listu.length : parseInt(`${umengS}`))}`;
         if (String.fromCharCode(117,51,57,54,120,101,104,56,0) == listu) {
            break;
         }
      } while ((3.45 == umengS) && (String.fromCharCode(117,51,57,54,120,101,104,56,0) == listu));
      if (listu.startsWith(`${umengS}`)) {
         listu += `${2 >> (Math.min(5, Math.abs(parseInt(`${umengS}`))))}`;
      }
       let libavformaty = String.fromCharCode(97,99,116,111,114,0);
          let settingsw = 0;
         libavformaty = "1";
         settingsw &= settingsw % 3;
      for (let k = 0; k < 2; k++) {
         libavformaty = "3";
      }
      owngoalL = defaultbasketballbgu.length >= parseInt(`${umengS}`);
   do {
      promotionK *= parseFloat(`${2 ^ suboutY.length}`);
      if (promotionK == 1633268.0) {
         break;
      }
   } while ((4 < (2 ^ pagination3.length) && (pagination3.length & 2) < 2) && (promotionK == 1633268.0));
   for (let p = 0; p < 3; p++) {
      promotionK -= (parseFloat(`${pagination3 == String.fromCharCode(84,0) ? pagination3.length : suboutY.length}`));
   }
   do {
      pagination3 += `${(suboutY.length >> (Math.min(4, Math.abs((livesharej ? 5 : 4)))))}`;
      if (pagination3.length == 1027306) {
         break;
      }
   } while ((suboutY.length > pagination3.length) && (pagination3.length == 1027306));
       let lightU = 2;
       let iconnotificationnewE = new Map([[String.fromCharCode(109,101,103,97,98,121,116,101,0),false ], [String.fromCharCode(115,105,103,115,108,111,116,0),false ]]);
       let selectedI = new Map([[String.fromCharCode(114,95,50,56,95,114,101,99,105,112,114,111,99,97,108,0),328], [String.fromCharCode(108,105,98,99,0),779]]);
      while (5 <= (iconnotificationnewE.size & 3) || 1 <= (iconnotificationnewE.size & 3)) {
         selectedI = new Map([[`${selectedI.size}`, selectedI.size << (Math.min(Math.abs(1), 3))]]);
         break;
      }
         lightU ^= iconnotificationnewE.size / (Math.max(3, lightU));
      while (!Array.from(selectedI.keys()).includes(`${lightU}`)) {
          let ball_ = String.fromCharCode(117,110,102,105,108,116,101,114,101,100,0);
          let giftbuttonq = String.fromCharCode(118,111,116,101,0);
          let iconwatchnowu = [47, 408, 193];
          let footballtrophyq = String.fromCharCode(105,95,50,52,0);
          let skips = String.fromCharCode(115,101,114,118,105,99,101,0);
         lightU /= Math.max(4, iconwatchnowu.length);
         ball_ = `${skips.length * 3}`;
         giftbuttonq += `${skips.length / 2}`;
         iconwatchnowu = [3 - ball_.length];
         footballtrophyq = `${footballtrophyq.length}`;
         break;
      }
      while (2 <= (iconnotificationnewE.size % 5) && (selectedI.size % (Math.max(5, 3))) <= 4) {
          let mbbidh = 0;
          let mergerb = 0.0;
          let positionfield3 = String.fromCharCode(105,115,115,117,101,114,0);
          let libfbjniX = new Map([[String.fromCharCode(99,111,110,99,117,114,101,110,116,0),679], [String.fromCharCode(115,116,101,114,101,111,100,0),973], [String.fromCharCode(108,105,118,101,100,95,103,95,49,56,0),571]]);
         selectedI = new Map([[`${mbbidh}`, mbbidh * 3]]);
         mergerb /= Math.max(5, parseFloat(`${1}`));
         positionfield3 += "1";
         libfbjniX[positionfield3] = parseInt(`${mergerb}`);
         break;
      }
          let predictionbannerj = String.fromCharCode(115,115,108,0);
          let appsG = [376, 662, 900];
          let buildG = String.fromCharCode(108,111,110,103,101,115,116,0);
         iconnotificationnewE[buildG] = appsG.length << (Math.min(buildG.length, 5));
         predictionbannerj += `${(predictionbannerj == String.fromCharCode(110,0) ? predictionbannerj.length : predictionbannerj.length)}`;
         appsG = [(predictionbannerj == String.fromCharCode(108,0) ? predictionbannerj.length : predictionbannerj.length)];
         selectedI[`${lightU}`] = iconnotificationnewE.size + 3;
       let singleY = 5.0;
       let downarrowPn = 4.0;
      for (let b = 0; b < 3; b++) {
          let yingp = false;
          let schedule_ = 4;
          let bottomk = [683, 450];
          let arrowup1 = new Map([[String.fromCharCode(109,105,100,0),200], [String.fromCharCode(108,97,112,110,100,122,0),31], [String.fromCharCode(120,102,111,114,109,0),206]]);
          let analyticsO = String.fromCharCode(101,97,103,101,114,0);
         iconnotificationnewE = new Map([[`${schedule_}`, parseInt(`${singleY}`) ^ 1]]);
         yingp = analyticsO.length <= 85;
         schedule_ *= arrowup1.size;
         bottomk.push(arrowup1.size);
         analyticsO += `${arrowup1.size}`;
      }
      for (let f = 0; f < 1; f++) {
          let teamdetailsbgT = String.fromCharCode(111,119,110,101,114,115,104,105,112,95,49,95,52,56,0);
          let eactD = true;
          let anytimet = 1.0;
          let typesa = [606, 585, 92];
         lightU /= Math.max((iconnotificationnewE.size + (eactD ? 1 : 4)), 2);
         teamdetailsbgT = `${teamdetailsbgT.length + 1}`;
         eactD = teamdetailsbgT.length > 77 && 77 > typesa.length;
         anytimet *= 1;
         typesa.push(1 << (Math.min(2, typesa.length)));
      }
      livesharej = !owngoalL || promotionK <= 47.62;

    dispatch(showControlAction(ShowControlType.TopBottom));
   while (defaultbasketballbgu.length >= 2) {
      promotionK -= parseFloat(`${parseInt(`${cancelH}`)}`);
      break;
   }
   while (5.66 > (1.47 - cancelH) && cancelH > 1.47) {
      cancelH /= Math.max(5, parseFloat(`${suboutY.length}`));
      break;
   }
   do {
      promotionK *= (parseFloat(`${(livesharej ? 2 : 4) + 1}`));
      if (promotionK == 646985.0) {
         break;
      }
   } while ((4.1 < (promotionK - 4.58) || 4.40 < (4.58 - promotionK)) && (promotionK == 646985.0));
   if (3.7 < cancelH) {
      cancelH /= Math.max((parseFloat(`${(owngoalL ? 4 : 1) & parseInt(`${predictionbutton0}`)}`)), 3);
   }
      predictionbutton0 -= parseInt(`${cancelH}`);
   do {
      iconeditz = `${iconeditz.length >> (Math.min(1, suboutY.length))}`;
      if (String.fromCharCode(108,49,113,0) == iconeditz) {
         break;
      }
   } while ((String.fromCharCode(108,49,113,0) == iconeditz) && (suboutY.length <= iconeditz.length));
       let clearu = String.fromCharCode(112,97,114,97,109,101,116,101,114,0);
       let brightnessn = new Map([[String.fromCharCode(114,101,99,111,103,110,105,116,105,111,110,0),371], [String.fromCharCode(99,111,108,108,97,112,115,105,110,103,0),416], [String.fromCharCode(99,111,109,112,105,108,101,111,112,116,105,111,110,117,115,101,100,0),697]]);
       let armvaG = String.fromCharCode(117,116,102,108,101,110,0);
      for (let l = 0; l < 1; l++) {
         armvaG += `${armvaG.length}`;
      }
          let largee = 1;
          let nativemoduleq = [785, 827, 244];
         armvaG = "1";
         largee += 3;
         nativemoduleq = [largee << (Math.min(nativemoduleq.length, 4))];
      while (armvaG != String.fromCharCode(101,0)) {
          let whatsappA = new Map([[String.fromCharCode(98,121,116,101,105,110,0),743], [String.fromCharCode(103,114,97,112,104,113,108,0),65]]);
          let libavformatr = String.fromCharCode(99,111,109,98,105,110,97,116,111,114,0);
         clearu += "2";
         whatsappA = new Map([[`${whatsappA.size}`, whatsappA.size]]);
         libavformatr += `${whatsappA.size}`;
         break;
      }
      if (!clearu.includes(`${brightnessn.size}`)) {
         brightnessn = new Map([[`${brightnessn.size}`, (String.fromCharCode(90,0) == armvaG ? armvaG.length : brightnessn.size)]]);
      }
      do {
         armvaG += `${armvaG.length * 2}`;
         if (4719861 == armvaG.length) {
            break;
         }
      } while ((4719861 == armvaG.length) && ((brightnessn.size - 2) == 4 && (armvaG.length - brightnessn.size) == 2));
          let arrowselectdownw = String.fromCharCode(102,116,118,115,112,108,105,116,98,97,114,0);
          let smallbrightnessG = 2.0;
          let render7 = 1;
         clearu += `${brightnessn.size / 2}`;
         arrowselectdownw = `${(arrowselectdownw == String.fromCharCode(89,0) ? arrowselectdownw.length : render7)}`;
         smallbrightnessG *= parseFloat(`${render7}`);
      for (let s = 0; s < 3; s++) {
          let clearE = String.fromCharCode(121,117,118,112,116,111,117,121,118,121,0);
          let rncoreo = String.fromCharCode(116,101,120,116,108,101,0);
         brightnessn[rncoreo] = clearE.length;
      }
         clearu = `${armvaG.length | 1}`;
         brightnessn[clearu] = brightnessn.size - clearu.length;
      cancelH -= parseFloat(`${pagination3.length + 2}`);
   do {
      cancelH -= (parseFloat(`${1 - (owngoalL ? 5 : 3)}`));
      if (cancelH == 531929.0) {
         break;
      }
   } while ((5.42 <= (cancelH + 3.97)) && (cancelH == 531929.0));

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
       let redirecth = 5.0;
    let imagenetworkerrD = 4.0;
    let watchV = [328, 488, 681];
    let w_titleJ = [231, 796, 930];
    let attributedstringu = String.fromCharCode(110,97,108,117,95,101,95,52,57,0);
    let baiduadsi = String.fromCharCode(114,101,109,111,118,101,114,0);
    let screen9 = 4.0;
    let libglogP = String.fromCharCode(112,114,105,109,105,116,105,118,101,0);
    let shootnogoale = 4;
    let reactnativeultimatelistvieww = 0;
    let playi = String.fromCharCode(98,117,105,108,100,99,111,110,102,0);
    let disconnectedlogo4 = 0.0;
    let settingsU = [714, 155];
    let iconsaveimagep = String.fromCharCode(109,112,106,112,101,103,0);
    let imagenetworkerrT = 2.0;
       let showmoreo = new Map([[String.fromCharCode(102,95,55,52,95,121,115,108,111,103,0),450], [String.fromCharCode(108,105,103,104,116,101,110,105,110,103,0),979]]);
       let floatingU = [609, 38, 253];
       let typinga = [179, 586];
          let alert9 = 1;
          let eyecloseE = 0;
          let smallH = 3;
         floatingU.push(eyecloseE);
         alert9 &= smallH;
         floatingU = [1];
      libglogP += "3";
      showmoreo = new Map([[`${showmoreo.size}`, showmoreo.size]]);
   if ((5 ^ watchV.length) > 5 && 4.7 > (imagenetworkerrD / 1.45)) {
       let webview4 = true;
      do {
         webview4 = (webview4 ? !webview4 : webview4);
         if (webview4 ? !webview4 : webview4) {
            break;
         }
      } while ((!webview4) && (webview4 ? !webview4 : webview4));
      while (!webview4) {
         webview4 = !webview4;
         break;
      }
         webview4 = (webview4 ? !webview4 : webview4);
      watchV = [2];
   }

  const dispatch = useDispatch();
       let mbnativee = 4;
       let condensedt = [472, 927];
       let mbnativeadvancedA = [65, 762];
         mbnativeadvancedA.push(condensedt.length);
         condensedt.push(condensedt.length);
      reactnativeultimatelistvieww += libglogP.length << (Math.min(5, Math.abs(parseInt(`${redirecth}`))));
      mbnativee -= 1 ^ mbnativee;
   if (1 >= shootnogoale) {
      shootnogoale %= Math.max(1, 2);
   }

  const onPress = () => {

      w_titleJ = [parseInt(`${imagenetworkerrD}`)];
      libglogP += `${(baiduadsi == String.fromCharCode(77,0) ? reactnativeultimatelistvieww : baiduadsi.length)}`;
    dispatch(toggleLockScreen());
   if (4 < (shootnogoale / 2)) {
      shootnogoale /= Math.max(2, 3 & libglogP.length);
   }
      baiduadsi = `${libglogP.length - 2}`;

    dispatch(showControlAction(ShowControlType.Locker));
   for (let r = 0; r < 2; r++) {
       let headerg = String.fromCharCode(112,97,114,115,101,95,100,95,56,54,0);
          let libsgcorea = String.fromCharCode(108,101,100,103,101,114,0);
          let xadsdky = 5;
         headerg += `${xadsdky}`;
         libsgcorea += `${libsgcorea.length - 3}`;
         xadsdky *= libsgcorea.length;
      do {
          let guideq = new Map([[String.fromCharCode(97,100,97,112,116,115,0),789], [String.fromCharCode(112,117,116,115,116,114,0),198]]);
          let gifgoalbgG = String.fromCharCode(117,98,115,99,114,105,98,101,114,0);
          let profiles = String.fromCharCode(118,102,108,97,103,0);
         headerg += `${profiles.length}`;
         guideq = new Map([[`${guideq.size}`, gifgoalbgG.length >> (Math.min(Math.abs(3), 4))]]);
         gifgoalbgG = `${guideq.size % (Math.max(gifgoalbgG.length, 10))}`;
         profiles = `${(String.fromCharCode(109,0) == gifgoalbgG ? guideq.size : gifgoalbgG.length)}`;
         if (headerg == String.fromCharCode(112,109,99,0)) {
            break;
         }
      } while ((headerg == String.fromCharCode(112,109,99,0)) && (headerg != headerg));
         headerg = `${(String.fromCharCode(75,0) == headerg ? headerg.length : headerg.length)}`;
      reactnativeultimatelistvieww *= parseInt(`${imagenetworkerrD}`) / 3;
   }
      watchV = [baiduadsi.length];

  };
   while (4 <= (shootnogoale | 5)) {
      attributedstringu += `${parseInt(`${redirecth}`) | 3}`;
      break;
   }
      imagenetworkerrD += (attributedstringu == String.fromCharCode(89,0) ? baiduadsi.length : attributedstringu.length);

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
      baiduadsi += `${libglogP.length}`;
   for (let t = 0; t < 1; t++) {
       let final_iT = new Map([[String.fromCharCode(119,101,98,109,100,101,99,0),795], [String.fromCharCode(109,101,100,105,117,109,116,104,114,101,115,104,0),878]]);
       let imagewatchliveT = false;
       let unfillo = String.fromCharCode(111,116,104,101,114,0);
       let libreanimatedB = String.fromCharCode(109,105,110,102,0);
       let foregroundj = 1;
       let mintegralh = 5;
      do {
         unfillo = `${mintegralh}`;
         if (String.fromCharCode(120,116,95,0) == unfillo) {
            break;
         }
      } while ((!unfillo.startsWith(`${imagewatchliveT}`)) && (String.fromCharCode(120,116,95,0) == unfillo));
       let nterstitialU = false;
       let type_crb = true;
       let subtextX = new Map([[String.fromCharCode(112,114,101,115,101,114,118,101,115,0),898], [String.fromCharCode(109,101,109,111,114,121,0),680], [String.fromCharCode(105,102,111,114,109,97,116,0),26]]);
         mintegralh >>= Math.min(Math.abs(foregroundj), 4);
      watchV.push(((imagewatchliveT ? 2 : 3) / (Math.max(7, playi.length))));
      final_iT = new Map([[`${final_iT.size}`, final_iT.size / 1]]);
   }

};

export const ShareButton = () => {
       let iconlogoutv = 3.0;
    let tooltipsH = [String.fromCharCode(99,111,110,110,101,99,116,105,111,110,99,98,0), String.fromCharCode(111,108,97,110,97,0)];
    let stationsJ = new Map([[String.fromCharCode(101,120,116,114,97,99,116,0),757], [String.fromCharCode(116,114,97,110,115,102,111,114,109,115,0),323]]);
    let notificationfilled6 = String.fromCharCode(99,111,109,98,105,110,97,116,105,111,110,115,0);
    let reducers = String.fromCharCode(100,105,115,99,111,110,110,101,99,116,101,100,0);
    let playercommons = true;
    let product2 = String.fromCharCode(119,114,97,112,0);
    let injuryj = true;
    let selectB = 3;
    let mbjscommond = true;
   while (tooltipsH.length < 5 || (tooltipsH.length & 5) < 4) {
       let icontransferclub_ = new Map([[String.fromCharCode(109,97,99,0),34], [String.fromCharCode(105,110,105,116,97,99,107,0),894], [String.fromCharCode(122,101,114,111,101,115,0),148]]);
       let starL = String.fromCharCode(105,100,101,110,116,105,116,105,101,115,0);
       let release_xtz = [19, 655];
       let renderV = 0.0;
      while (starL.includes(`${icontransferclub_.size}`)) {
         starL += `${(starL == String.fromCharCode(76,0) ? release_xtz.length : starL.length)}`;
         break;
      }
         release_xtz = [release_xtz.length];
         release_xtz = [starL.length | parseInt(`${renderV}`)];
          let privatechatbgX = [String.fromCharCode(117,110,101,109,112,116,121,0), String.fromCharCode(108,101,116,116,101,114,115,0)];
          let aboutS = String.fromCharCode(104,97,100,0);
         release_xtz = [1];
         privatechatbgX.push(2 * aboutS.length);
         aboutS = `${privatechatbgX.length >> (Math.min(Math.abs(3), 5))}`;
         release_xtz = [1 / (Math.max(8, parseInt(`${renderV}`)))];
         release_xtz = [2];
      do {
         starL = `${(starL == String.fromCharCode(52,0) ? starL.length : release_xtz.length)}`;
         if (String.fromCharCode(117,122,53,51,105,100,54,98,0) == starL) {
            break;
         }
      } while ((starL.length == 3) && (String.fromCharCode(117,122,53,51,105,100,54,98,0) == starL));
      if ((release_xtz.length + 4) >= 2 || 4.18 >= (renderV - 5.26)) {
         release_xtz = [parseInt(`${renderV}`)];
      }
         release_xtz = [icontransferclub_.size];
         icontransferclub_[`${renderV}`] = 3;
      do {
         icontransferclub_ = new Map([[`${release_xtz.length}`, 3 << (Math.min(2, release_xtz.length))]]);
         if (1461755 == icontransferclub_.size) {
            break;
         }
      } while ((1461755 == icontransferclub_.size) && ((2 ^ icontransferclub_.size) < 2 || 1 < (icontransferclub_.size ^ 2)));
      if (1 > (release_xtz.length / (Math.max(4, 6)))) {
         starL += `${starL.length}`;
      }
      tooltipsH.push(((injuryj ? 5 : 5) / (Math.max(icontransferclub_.size, 2))));
      break;
   }

  const dispatch = useDispatch();
      tooltipsH.push(parseInt(`${iconlogoutv}`) * 3);

  const debouncedShare = useCallback(
    debounce((title, matchId) => shareStream(title, matchId), 500),
    [],
  );
   for (let k = 0; k < 3; k++) {
      stationsJ[`${iconlogoutv}`] = 1;
   }


  const matchId = useSelector(state => state.matchId);
       let iconfeedbackx = String.fromCharCode(111,112,116,105,109,117,109,0);
       let roomY = String.fromCharCode(116,95,53,56,95,97,115,115,111,99,105,97,116,105,111,110,0);
      for (let t = 0; t < 3; t++) {
          let stepJ = new Map([[String.fromCharCode(102,111,114,109,97,116,116,101,114,0),30], [String.fromCharCode(110,101,111,110,0),498]]);
          let constantsQ = String.fromCharCode(107,101,114,110,101,108,0);
         roomY = `${1 | iconfeedbackx.length}`;
         stepJ[`${constantsQ}`] = (String.fromCharCode(74,0) == constantsQ ? stepJ.size : constantsQ.length);
      }
      while (roomY.startsWith(iconfeedbackx)) {
          let singapore3 = String.fromCharCode(118,105,101,119,101,114,0);
          let redscoreballj = true;
         iconfeedbackx += `${singapore3.length << (Math.min(Math.abs(3), 4))}`;
         singapore3 += `${((redscoreballj ? 1 : 4))}`;
         break;
      }
         roomY += "3";
      while (roomY == String.fromCharCode(80,0)) {
          let flyerO = new Map([[String.fromCharCode(114,101,115,101,114,118,101,115,105,122,101,0),890], [String.fromCharCode(111,118,101,114,108,97,121,105,110,103,0),906], [String.fromCharCode(111,111,108,98,97,114,0),13]]);
          let whitesmallticku = 2;
          let mbbidy = 1;
          let combineJ = String.fromCharCode(108,105,110,103,101,114,0);
          let editZ = new Map([[String.fromCharCode(108,95,57,49,95,102,117,108,102,105,108,108,0),258], [String.fromCharCode(114,101,108,111,97,100,105,110,103,0),417], [String.fromCharCode(105,115,116,115,0),693]]);
         iconfeedbackx = `${2 - combineJ.length}`;
         flyerO = new Map([[`${editZ.size}`, mbbidy / (Math.max(1, 3))]]);
         whitesmallticku >>= Math.min(3, Math.abs(mbbidy / (Math.max(1, 7))));
         combineJ = `${mbbidy}`;
         editZ = new Map([[`${flyerO.size}`, flyerO.size]]);
         break;
      }
         iconfeedbackx += `${3 + roomY.length}`;
         roomY = `${2 ^ iconfeedbackx.length}`;
      injuryj = 45 <= iconfeedbackx.length || 45 <= roomY.length;

  const liveRoomAction = new wawaLightTrophy(dispatch, matchId);
  // const shareLink = useSelector(state => state.shareLink);
   do {
       let pathp = 4.0;
       let playw = String.fromCharCode(101,109,112,116,121,0);
      while (pathp >= playw.length) {
         playw = "2";
         break;
      }
       let tooltipsn = 4.0;
       let mailk = 0.0;
         mailk += (playw == String.fromCharCode(113,0) ? parseInt(`${mailk}`) : playw.length);
      while (tooltipsn <= pathp) {
          let progressi = String.fromCharCode(108,111,103,105,99,97,108,95,101,95,53,56,0);
          let iconnotificationnewH = true;
          let libreactperfloggerjnia = false;
          let libyogaT = String.fromCharCode(116,104,101,109,101,0);
          let field6 = true;
         pathp /= Math.max(1, (1 & (iconnotificationnewH ? 5 : 4)));
         progressi = `${(String.fromCharCode(90,0) == progressi ? (libreactperfloggerjnia ? 5 : 2) : progressi.length)}`;
         iconnotificationnewH = (progressi.length & libyogaT.length) >= 14;
         libreactperfloggerjnia = !field6;
         libyogaT += `${libyogaT.length}`;
         break;
      }
      while (playw.endsWith(`${pathp}`)) {
         playw += `${1 % (Math.max(parseInt(`${tooltipsn}`), 2))}`;
         break;
      }
          let stationsU = String.fromCharCode(112,114,101,99,105,115,105,111,110,0);
         tooltipsn -= playw.length;
         stationsU = `${3 >> (Math.min(4, stationsU.length))}`;
      tooltipsH.push(((injuryj ? 1 : 3)));
      if (tooltipsH.length == 4074481) {
         break;
      }
   } while (((tooltipsH.length + iconlogoutv) > 1.49) && (tooltipsH.length == 4074481));

  const liveDataState = useSelector(state => state.liveRoom);
      reducers += "1";

  const competitionNameShort = liveDataState?.competition?.name_short;
      tooltipsH.push((3 + (playercommons ? 3 : 5)));

  const awayName = liveDataState?.away?.name;
   do {
      injuryj = reducers.length > 88;
      if (injuryj ? !injuryj : injuryj) {
         break;
      }
   } while ((injuryj ? !injuryj : injuryj) && (product2.endsWith(`${injuryj}`)));

  const homeName = liveDataState?.home?.name;
   if (reducers != product2) {
       let penaltyshootnogoal7 = new Map([[String.fromCharCode(114,101,109,98,0),980], [String.fromCharCode(99,117,114,114,101,110,100,0),615]]);
       let profileframe3 = 0.0;
          let streamingh = String.fromCharCode(111,95,50,51,95,109,106,112,101,103,97,0);
         penaltyshootnogoal7 = new Map([[`${penaltyshootnogoal7.size}`, penaltyshootnogoal7.size]]);
         streamingh = `${(String.fromCharCode(116,0) == streamingh ? streamingh.length : streamingh.length)}`;
      if ((penaltyshootnogoal7.size << (Math.min(Math.abs(5), 1))) <= 1 && (penaltyshootnogoal7.size % (Math.max(5, 2))) <= 1) {
          let bellI = 5.0;
          let statisticsz = new Map([[String.fromCharCode(118,101,114,105,102,121,105,110,103,0),true ], [String.fromCharCode(108,105,112,98,111,97,114,100,0),true ]]);
         profileframe3 /= Math.max(3, 2 ^ parseInt(`${bellI}`));
         bellI *= statisticsz.size + 1;
         statisticsz = new Map([[`${statisticsz.size}`, statisticsz.size - 3]]);
      }
      for (let d = 0; d < 2; d++) {
         profileframe3 += parseInt(`${profileframe3}`);
      }
       let homeQ = 1.0;
         homeQ += parseInt(`${profileframe3}`);
      if ((profileframe3 * 2.13) == 2.19 && 2.13 == (homeQ * profileframe3)) {
          let shrinkU = 4;
          let backiconY = String.fromCharCode(98,101,115,115,101,108,0);
         homeQ += penaltyshootnogoal7.size;
         shrinkU >>= Math.min(1, Math.abs(backiconY.length * 3));
         backiconY = `${3 - shrinkU}`;
      }
      product2 = "1";
   }


  const title = `${competitionNameShort} | ${homeName} vs ${awayName}`;
   do {
       let rcopy_5j = new Map([[String.fromCharCode(114,101,109,101,109,98,101,114,101,100,0),String.fromCharCode(98,108,117,114,0)], [String.fromCharCode(114,111,117,116,105,110,103,0),String.fromCharCode(103,97,109,109,97,0)]]);
       let livesharek = 3.0;
       let clearl = true;
       let classesm = 4;
         classesm %= Math.max(rcopy_5j.size << (Math.min(2, Math.abs(classesm))), 5);
      for (let d = 0; d < 1; d++) {
         clearl = 46 < rcopy_5j.size;
      }
       let white6 = 0.0;
       let iconviewergifN = 5.0;
         iconviewergifN += 1 ^ rcopy_5j.size;
          let sportE = true;
         clearl = rcopy_5j.size <= 7;
         sportE = sportE || !sportE;
      do {
          let hcopy_uP = false;
          let gradleE = true;
         classesm >>= Math.min(Math.abs(parseInt(`${livesharek}`) << (Math.min(4, Math.abs(2)))), 3);
         hcopy_uP = (hcopy_uP ? !gradleE : hcopy_uP);
         gradleE = hcopy_uP;
         if (classesm == 1640563) {
            break;
         }
      } while ((2 < (1 + classesm)) && (classesm == 1640563));
          let volumeN = [String.fromCharCode(101,118,111,108,118,101,0), String.fromCharCode(119,95,54,49,95,115,97,100,98,0)];
          let yellowg = 1.0;
         rcopy_5j[`${classesm}`] = ((clearl ? 4 : 3) >> (Math.min(Math.abs(classesm), 1)));
         volumeN.push(1);
         yellowg *= parseInt(`${yellowg}`);
      for (let w = 0; w < 3; w++) {
         iconviewergifN *= 3;
      }
      if (5.13 <= iconviewergifN) {
          let constantsl = true;
         iconviewergifN /= Math.max(4, 2 << (Math.min(Math.abs(parseInt(`${white6}`)), 2)));
         constantsl = (!constantsl ? !constantsl : constantsl);
      }
      while (classesm >= 5) {
         classesm >>= Math.min(Math.abs(3 ^ rcopy_5j.size), 5);
         break;
      }
       let anytimea = 0.0;
      do {
         livesharek /= Math.max(2, parseFloat(`${3 + parseInt(`${iconviewergifN}`)}`));
         if (2918972.0 == livesharek) {
            break;
         }
      } while ((4.44 > (parseFloat(`${rcopy_5j.size}`) + livesharek) && (parseInt(`${livesharek}`) + rcopy_5j.size) > 2) && (2918972.0 == livesharek));
      product2 = `${stationsJ.size | product2.length}`;
      if (1579546 == product2.length) {
         break;
      }
   } while ((1579546 == product2.length) && (playercommons || 5 > product2.length));


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
