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
import YKBTurn, {
  setVideoControlProp,
  setVideoFullScreen,
  setVideoPlayerAction,
  setVideoSource,
} from '../../../screens/Sports/MatchDetails/action';
import VideoPlayerstyles from '../fgl_less_position';

import PlayImg from '../images/icons/floatingVolumeSport.png';
import PauseImg from '../images/icons/descHeji.png';
import LockImg from '../images/icons/crossInjury.png';
import UnlockImg from '../images/icons/default_4cShrinkForward.png';

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
import {VideoLiveType} from '../../../global/wd_group_recommendation';
import {StyleSheet} from 'react-native';
import {ShowControlType} from '../config';
import {KTMain} from '../../../global/h_update';
import store from '@redux/fj_prediction_thailand';
import {floatingPlayer} from '@redux/reducers/floatingPlayer';
import debounce from 'lodash.debounce';
import {useCallback} from 'react';
import {useEffect} from 'react';
import AppSettingsAction from '@redux/actions/appSettingsAction';
import vars from '../../../utility/ift_macau_change';

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
       let formr = true;
    let humidityo = new Map([[String.fromCharCode(110,95,56,57,95,108,108,100,98,105,110,105,116,0),680], [String.fromCharCode(102,95,49,52,95,115,104,117,116,100,111,119,110,97,99,107,0),951], [String.fromCharCode(107,95,49,55,95,99,109,100,117,116,105,108,115,0),862]]);
    let side4 = String.fromCharCode(122,95,56,52,95,100,111,97,108,108,0);
    let lightW = new Map([[String.fromCharCode(101,100,105,116,97,98,108,101,95,97,95,55,51,0),238], [String.fromCharCode(112,95,53,55,95,101,114,114,108,111,103,0),590]]);
    let unselectedd = 3;
    let privacyd = String.fromCharCode(108,95,53,56,95,116,97,98,108,101,116,0);
    let helper4 = true;
    let indicatore = String.fromCharCode(119,97,118,112,97,99,107,101,110,99,95,116,95,55,52,0);
    let ballN = 4.0;
    let natived = false;
    let lighth = [String.fromCharCode(114,95,55,49,95,115,112,107,114,0), String.fromCharCode(120,95,54,54,95,100,101,115,105,103,110,0), String.fromCharCode(111,95,54,52,95,108,101,114,112,114,103,98,0)];
   while (4 > (unselectedd & 3)) {
      indicatore = `${humidityo.size / 2}`;
      break;
   }
      indicatore = `${((helper4 ? 5 : 3))}`;
      formr = 65 >= privacyd.length;
   for (let b = 0; b < 2; b++) {
      lightW[side4] = side4.length + 1;
   }

    if (onPress) onPress();
      privacyd = `${humidityo.size >> (Math.min(Math.abs(1), 5))}`;
   for (let d = 0; d < 3; d++) {
      ballN -= parseInt(`${ballN}`);
   }
   do {
       let leaguel = String.fromCharCode(103,114,97,116,105,99,117,108,101,95,52,95,56,55,0);
       let handler4 = 2;
       let entryY = String.fromCharCode(105,95,51,48,95,115,101,99,117,114,101,100,0);
       let untickk = String.fromCharCode(107,95,53,51,95,112,97,99,101,100,0);
       let favoriteH = String.fromCharCode(114,95,54,55,95,102,97,118,101,0);
       let placementl = String.fromCharCode(99,95,49,53,95,114,101,99,118,0);
          let detail6 = true;
          let expiredu = 3;
          let championi = String.fromCharCode(101,95,57,54,95,116,101,115,116,114,97,110,115,0);
         untickk = `${handler4 + 3}`;
         detail6 = detail6 && 59 <= expiredu;
         expiredu |= 2;
         championi = `${expiredu / 1}`;
       let middlewaren = String.fromCharCode(99,111,111,108,100,111,119,110,95,53,95,50,57,0);
       let hongkonga = String.fromCharCode(103,95,55,50,95,117,112,108,111,97,100,115,0);
       let moone = String.fromCharCode(110,101,120,116,95,108,95,55,53,0);
      while (favoriteH.length <= 5 || hongkonga != String.fromCharCode(71,0)) {
         favoriteH = `${placementl.length}`;
         break;
      }
      if (placementl.length < 3) {
          let whiteB = String.fromCharCode(102,95,53,50,95,114,101,113,117,115,116,101,114,0);
          let downloadedg = 1.0;
          let condensedL = 1.0;
          let expiredH = 4.0;
          let becomeY = String.fromCharCode(116,95,54,50,95,111,99,99,117,112,105,101,100,0);
         placementl = `${becomeY.length}`;
         whiteB = "3";
         downloadedg *= parseFloat(`${parseInt(`${expiredH}`) - 1}`);
         condensedL *= (parseFloat(`${whiteB == String.fromCharCode(65,0) ? parseInt(`${downloadedg}`) : whiteB.length}`));
         expiredH *= parseFloat(`${parseInt(`${downloadedg}`) & 3}`);
         becomeY += `${(String.fromCharCode(54,0) == whiteB ? whiteB.length : parseInt(`${expiredH}`))}`;
      }
          let clearI = String.fromCharCode(99,97,118,112,95,114,95,57,54,0);
          let modelL = 0;
         entryY += "2";
         clearI += `${(String.fromCharCode(108,0) == clearI ? clearI.length : modelL)}`;
         modelL /= Math.max(3 * modelL, 3);
      if (moone.length > placementl.length) {
         moone = `${favoriteH.length << (Math.min(untickk.length, 5))}`;
      }
      while (4 > hongkonga.length) {
         hongkonga += `${3 & leaguel.length}`;
         break;
      }
         moone += `${favoriteH.length ^ 2}`;
          let expiredt = 1.0;
         leaguel = `${untickk.length % 1}`;
         expiredt /= Math.max(2, parseFloat(`${parseInt(`${expiredt}`)}`));
      while (moone.length >= 2) {
          let crownW = String.fromCharCode(111,95,52,50,95,116,97,108,108,0);
          let configS = [String.fromCharCode(108,111,119,101,115,116,95,115,95,49,52,0), String.fromCharCode(102,101,97,116,117,114,101,95,57,95,54,49,0)];
          let singaporez = String.fromCharCode(102,95,54,49,95,110,111,110,101,109,112,116,121,0);
         untickk += `${crownW.length & handler4}`;
         crownW = `${configS.length}`;
         configS.push(singaporez.length);
         singaporez += `${singaporez.length}`;
         break;
      }
      indicatore = `${((formr ? 1 : 1) ^ handler4)}`;
      if (String.fromCharCode(107,108,101,0) == indicatore) {
         break;
      }
   } while ((String.fromCharCode(107,108,101,0) == indicatore) && (privacyd == indicatore));
   do {
       let listS = String.fromCharCode(97,117,116,111,109,97,116,105,99,97,108,108,121,95,112,95,53,52,0);
       let roomi = 1;
       let yellowT = false;
       let dialogt = 3;
      do {
         listS = "1";
         if (String.fromCharCode(118,109,99,97,98,115,0) == listS) {
            break;
         }
      } while ((3 > listS.length) && (String.fromCharCode(118,109,99,97,98,115,0) == listS));
          let containeri = 4;
          let private_avX = 0.0;
         roomi <<= Math.min(Math.abs(dialogt << (Math.min(Math.abs(3), 3))), 3);
         containeri <<= Math.min(Math.abs(parseInt(`${private_avX}`) * containeri), 4);
         private_avX += parseFloat(`${containeri + parseInt(`${private_avX}`)}`);
      do {
         dialogt ^= dialogt;
         if (2212684 == dialogt) {
            break;
         }
      } while (((3 << (Math.min(3, listS.length))) == 4 || 3 == (listS.length << (Math.min(1, Math.abs(dialogt))))) && (2212684 == dialogt));
      if (3 <= (roomi >> (Math.min(Math.abs(dialogt), 2))) && (3 >> (Math.min(4, Math.abs(roomi)))) <= 3) {
         dialogt ^= 3;
      }
         dialogt >>= Math.min(Math.abs(2 + roomi), 1);
      do {
          let x_playerE = [538, 555];
          let found8 = 2;
         listS = `${roomi * found8}`;
         x_playerE = [x_playerE.length];
         found8 ^= 2;
         if (String.fromCharCode(112,115,104,109,108,115,0) == listS) {
            break;
         }
      } while ((5 == listS.length && !yellowT) && (String.fromCharCode(112,115,104,109,108,115,0) == listS));
       let regeng6 = [694, 287, 155];
       let r_imageq = [15, 368, 939];
         yellowT = (roomi % (Math.max(listS.length, 2))) <= 9;
       let sheetk = String.fromCharCode(111,95,49,50,95,115,97,118,101,0);
       let kicky = String.fromCharCode(115,95,51,51,95,115,112,108,97,116,0);
      while (5 < (2 << (Math.min(5, sheetk.length))) && (sheetk.length << (Math.min(2, r_imageq.length))) < 2) {
         sheetk += `${kicky.length - regeng6.length}`;
         break;
      }
       let plash7 = 0.0;
       let sortf = 0.0;
         sortf -= parseInt(`${sortf}`) ^ 2;
      humidityo = new Map([[`${lightW.size}`, lightW.size]]);
      if (humidityo.size == 4473345) {
         break;
      }
   } while ((humidityo.size == 4473345) && ((1 * humidityo.size) >= 2 || 1 >= (humidityo.size * 1)));

    Orientation.lockToPortrait();
      ballN -= unselectedd << (Math.min(Math.abs(3), 2));
   while ((lightW.size * ballN) <= 4.7) {
      ballN -= 1 * indicatore.length;
      break;
   }
   while (natived) {
      indicatore += `${humidityo.size}`;
      break;
   }
      helper4 = 61 >= unselectedd;

    dispatch(setVideoFullScreen(false));
      privacyd += "2";
   for (let l = 0; l < 2; l++) {
      humidityo = new Map([[`${humidityo.size}`, (indicatore == String.fromCharCode(121,0) ? indicatore.length : humidityo.size)]]);
   }
       let lighti = String.fromCharCode(99,95,49,53,95,112,114,111,100,115,0);
       let appsC = false;
       let headerM = 1.0;
      for (let e = 0; e < 3; e++) {
         lighti += `${lighti.length}`;
      }
      do {
          let privilegen = new Map([[String.fromCharCode(105,110,115,116,101,97,100,95,116,95,51,50,0),842], [String.fromCharCode(97,95,49,48,95,117,112,108,111,97,100,97,98,108,101,0),577], [String.fromCharCode(107,95,52,54,95,117,110,112,97,99,107,108,111,0),995]]);
          let pingD = String.fromCharCode(98,95,57,52,95,97,99,113,117,105,114,101,100,0);
          let fill3 = String.fromCharCode(99,95,54,50,95,115,116,117,100,105,111,0);
         lighti += `${(String.fromCharCode(78,0) == lighti ? lighti.length : (appsC ? 4 : 3))}`;
         privilegen[`${pingD}`] = privilegen.size;
         pingD = `${pingD.length}`;
         fill3 += `${fill3.length}`;
         if (String.fromCharCode(56,48,102,0) == lighti) {
            break;
         }
      } while ((String.fromCharCode(56,48,102,0) == lighti) && (!appsC && 1 <= lighti.length));
      do {
          let subs2 = 2.0;
          let forwardC = 4.0;
          let completeU = String.fromCharCode(114,95,50,48,95,105,110,105,116,105,97,108,105,122,101,114,0);
          let philippinesp = false;
         appsC = forwardC > 10.50;
         subs2 *= 2 * parseInt(`${subs2}`);
         forwardC /= Math.max(1, parseInt(`${subs2}`) | 3);
         completeU += `${(String.fromCharCode(78,0) == completeU ? parseInt(`${subs2}`) : completeU.length)}`;
         philippinesp = !completeU.startsWith(`${philippinesp}`);
         if (appsC ? !appsC : appsC) {
            break;
         }
      } while ((headerM >= 1.99) && (appsC ? !appsC : appsC));
          let livef = String.fromCharCode(112,109,107,95,50,95,49,51,0);
         appsC = 22.66 == headerM;
         livef += `${livef.length}`;
       let pingM = String.fromCharCode(120,95,55,53,95,119,97,116,101,114,109,97,114,107,115,0);
         lighti = `${lighti.length | parseInt(`${headerM}`)}`;
      do {
          let flyero = 1;
         headerM -= 2;
         flyero += flyero;
         if (3940311.0 == headerM) {
            break;
         }
      } while ((3940311.0 == headerM) && ((2 + pingM.length) == 4 || 3.52 == (headerM * 1.47)));
      for (let w = 0; w < 3; w++) {
          let component_ = String.fromCharCode(118,109,97,112,115,105,110,95,122,95,55,54,0);
         pingM = `${component_.length}`;
      }
      for (let a = 0; a < 2; a++) {
         appsC = !lighti.includes(`${appsC}`);
      }
      indicatore = `${((helper4 ? 4 : 4) % 1)}`;
   do {
       let filledr = [371, 581, 88];
       let watchV = true;
       let goal_ = 3.0;
       let countryy = String.fromCharCode(117,95,56,95,97,116,97,98,108,101,115,0);
       let modulea = new Map([[String.fromCharCode(105,95,49,50,95,99,104,111,111,115,101,0),142], [String.fromCharCode(97,95,50,56,95,100,101,99,111,114,114,101,108,97,116,101,0),703], [String.fromCharCode(122,95,51,56,95,101,97,114,108,105,101,115,116,0),870]]);
      if ((modulea.size - 3) <= 1) {
         countryy += `${1 & countryy.length}`;
      }
      if (2 >= filledr.length) {
         filledr.push(modulea.size);
      }
         watchV = 70 < modulea.size;
         filledr = [2 | parseInt(`${goal_}`)];
          let clear_ = new Map([[String.fromCharCode(112,97,115,116,101,100,95,112,95,55,0),String.fromCharCode(111,95,57,95,97,99,107,110,111,119,108,101,100,103,101,100,0)], [String.fromCharCode(107,95,54,49,95,105,110,118,105,116,101,114,0),String.fromCharCode(110,95,57,54,95,114,101,99,111,110,105,110,116,101,114,0)], [String.fromCharCode(116,114,97,110,115,102,101,114,114,97,98,108,101,95,115,95,49,56,0),String.fromCharCode(119,95,57,52,95,116,114,97,110,115,112,0)]]);
         watchV = goal_ <= 10.84 && clear_.size <= 68;
      if ((parseFloat(`${modulea.size}`) - goal_) >= 2.42 || 4 >= (2 % (Math.max(1, modulea.size)))) {
          let countdownn = [85, 103];
          let stations6 = [709, 536, 696];
          let playlist8 = [String.fromCharCode(120,117,118,109,118,115,95,54,95,54,0), String.fromCharCode(98,95,53,56,95,97,99,116,117,97,108,105,122,97,116,105,111,110,0)];
          let downloadingI = 1.0;
         goal_ /= Math.max(2, parseFloat(`${countryy.length + 1}`));
         countdownn = [3];
         stations6 = [playlist8.length];
         playlist8.push(3);
         downloadingI *= parseFloat(`${stations6.length}`);
      }
         goal_ -= (parseFloat(`${countryy == String.fromCharCode(119,0) ? parseInt(`${goal_}`) : countryy.length}`));
      while (filledr.length <= 4 || 5 <= (4 >> (Math.min(3, filledr.length)))) {
         filledr.push(((watchV ? 2 : 2) - filledr.length));
         break;
      }
          let actionsi = String.fromCharCode(100,112,114,105,110,116,95,56,95,56,54,0);
         countryy = `${actionsi.length}`;
          let actionsK = String.fromCharCode(97,95,50,53,95,111,102,102,115,99,114,101,101,110,0);
          let awayr = 4;
         countryy = `${(String.fromCharCode(90,0) == actionsK ? actionsK.length : parseInt(`${goal_}`))}`;
         awayr %= Math.max(awayr, 4);
      do {
         watchV = (filledr.length | modulea.size) <= 40;
         if (watchV ? !watchV : watchV) {
            break;
         }
      } while ((filledr.length == 5 || (5 | filledr.length) == 1) && (watchV ? !watchV : watchV));
         filledr = [(countryy == String.fromCharCode(66,0) ? countryy.length : modulea.size)];
      if (modulea.size < countryy.length) {
          let logoY = new Map([[String.fromCharCode(119,97,116,101,114,109,97,114,107,115,95,111,95,56,53,0),29], [String.fromCharCode(100,111,119,110,115,99,97,108,101,95,119,95,55,55,0),320], [String.fromCharCode(114,101,116,114,105,101,114,95,49,95,52,48,0),539]]);
          let chinah = String.fromCharCode(109,101,100,105,97,95,103,95,55,53,0);
          let completez = String.fromCharCode(108,95,51,51,95,109,111,109,101,110,116,0);
          let championp = 2.0;
          let statisticsz = 2;
         countryy = `${filledr.length}`;
         logoY[completez] = completez.length >> (Math.min(Math.abs(2), 1));
         chinah += `${chinah.length}`;
         championp *= parseFloat(`${parseInt(`${championp}`) - 2}`);
         statisticsz <<= Math.min(Math.abs(1 & statisticsz), 4);
      }
       let placeholderM = String.fromCharCode(117,95,55,52,95,97,118,101,114,114,111,114,0);
       let down2 = String.fromCharCode(114,100,118,111,95,101,95,53,0);
       let terms_ = new Map([[String.fromCharCode(120,95,50,50,95,102,105,108,101,114,101,97,100,115,116,114,101,97,109,0),467], [String.fromCharCode(104,95,51,55,95,97,112,112,114,111,112,114,105,97,116,101,0),788]]);
       let userK = new Map([[String.fromCharCode(107,95,55,52,95,116,114,105,103,103,101,114,0),String.fromCharCode(104,95,53,52,95,108,108,110,119,0)], [String.fromCharCode(109,95,57,49,95,97,99,107,117,112,0),String.fromCharCode(110,95,57,49,95,114,101,116,97,105,110,101,100,0)], [String.fromCharCode(119,95,56,48,95,99,111,112,121,98,97,99,107,0),String.fromCharCode(98,95,57,52,95,118,111,105,100,0)]]);
      unselectedd %= Math.max(4, privacyd.length - 2);
      if (1996815 == unselectedd) {
         break;
      }
   } while ((1996815 == unselectedd) && (unselectedd == 1));

    if (!isFullScreen) {

       let fieldE = 5;
         fieldE += 2;
         fieldE |= 3;
       let middleU = false;
       let storeV = false;
      helper4 = natived;
   if (4 >= unselectedd || 2 >= (unselectedd >> (Math.min(Math.abs(4), 4)))) {
      formr = (!formr ? !helper4 : formr);
   }
   do {
      lightW = new Map([[`${humidityo.size}`, humidityo.size]]);
      if (lightW.size == 45286) {
         break;
      }
   } while ((lightW.size == 45286) && ((5 * indicatore.length) >= 5 && (lightW.size * 5) >= 5));
   if ((privacyd.length + parseInt(`${ballN}`)) <= 2 && (5.85 + ballN) <= 2.95) {
       let adultt = 5;
      if ((1 << (Math.min(1, Math.abs(adultt)))) == 3) {
         adultt /= Math.max(adultt % (Math.max(adultt, 10)), 3);
      }
         adultt ^= adultt / 1;
      do {
         adultt += adultt;
         if (adultt == 494791) {
            break;
         }
      } while ((adultt == 494791) && (adultt == adultt));
      ballN /= Math.max(parseInt(`${ballN}`) >> (Math.min(Math.abs(2), 5)), 5);
   }
      dispatch(setVideoSource(VideoLiveType.DETAIL, ''));
      privacyd += `${lightW.size}`;
   for (let w = 0; w < 1; w++) {
      unselectedd |= indicatore.length % (Math.max(2, 8));
   }
   while (3 >= (1 ^ unselectedd) && (1 ^ side4.length) >= 1) {
      unselectedd /= Math.max(indicatore.length % 1, 3);
      break;
   }
      privacyd += `${((formr ? 4 : 3))}`;

    }
  };
  return (
    <RenderControl style={style.backContainer} onPress={onPressBack}>
      <Image
        resizeMode="contain"
        source={require('../images/icons/downloadingPhilippinesConfirmation.png')}
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
       let sheetf = String.fromCharCode(100,101,108,97,117,110,97,121,95,99,95,50,50,0);
    let profilef = String.fromCharCode(112,117,116,95,105,95,54,49,0);
    let arrowl = 0.0;
    let fullR = 0.0;
    let reportY = 2;
    let p_centerP = 3;
    let kickN = String.fromCharCode(115,112,104,101,114,105,99,97,108,95,54,95,49,52,0);
    let progressm = new Map([[String.fromCharCode(109,95,52,56,95,115,108,105,99,101,100,0),false ], [String.fromCharCode(114,101,100,117,99,101,114,95,114,95,49,52,0),false ]]);
    let backgroundI = 0.0;
    let reminderT = 1.0;
    let analyticb = 1.0;
    let notificationM = 2;
    let schedulei = String.fromCharCode(99,111,109,98,105,110,97,116,105,111,110,115,95,119,95,49,55,0);
    let annerf = 0.0;
      progressm[`${fullR}`] = parseInt(`${fullR}`);
      profilef += `${3 % (Math.max(3, parseInt(`${arrowl}`)))}`;

  const {isFullScreen} = useSelector(state => state.videoPlayerControl);
   if (1 <= (progressm.size / (Math.max(2, 1))) && 1.14 <= (backgroundI * 4.53)) {
      backgroundI *= parseInt(`${arrowl}`);
   }
   if ((arrowl + 5.84) >= 1.2 && 2 >= (profilef.length % 1)) {
       let hejij = String.fromCharCode(115,99,104,101,109,97,95,116,95,52,0);
       let filterF = String.fromCharCode(110,105,109,97,116,101,100,95,104,95,51,52,0);
          let logouts = 3.0;
         filterF = `${filterF.length ^ 3}`;
         logouts *= parseFloat(`${3}`);
          let assistS = String.fromCharCode(101,114,114,99,111,100,101,95,99,95,50,53,0);
          let sportsR = String.fromCharCode(120,99,116,101,115,116,95,52,95,57,56,0);
         filterF += "2";
         assistS = `${(assistS == String.fromCharCode(100,0) ? sportsR.length : assistS.length)}`;
         sportsR = `${assistS.length % (Math.max(7, sportsR.length))}`;
      for (let x = 0; x < 2; x++) {
         filterF += `${hejij.length}`;
      }
         filterF = `${1 + filterF.length}`;
         filterF += `${filterF.length}`;
      do {
          let middleG = String.fromCharCode(101,95,49,56,95,110,101,97,114,101,110,100,0);
         hejij = `${hejij.length << (Math.min(middleG.length, 2))}`;
         if (hejij.length == 265805) {
            break;
         }
      } while ((hejij.length == 265805) && (filterF == hejij));
      profilef += `${(String.fromCharCode(82,0) == profilef ? parseInt(`${fullR}`) : profilef.length)}`;
   }

  const dispatch = useDispatch();
   do {
      arrowl -= progressm.size;
      if (arrowl == 3325582.0) {
         break;
      }
   } while (((kickN.length + parseInt(`${arrowl}`)) >= 2 && (2 >> (Math.min(4, kickN.length))) >= 1) && (arrowl == 3325582.0));
       let become7 = 5.0;
       let agreementD = [String.fromCharCode(105,115,116,114,101,97,109,95,57,95,54,51,0), String.fromCharCode(114,101,118,101,114,116,95,53,95,53,50,0)];
       let hejiT = String.fromCharCode(101,97,99,101,110,99,95,103,95,55,56,0);
          let i_images = 2.0;
          let langX = String.fromCharCode(112,108,97,116,102,111,114,109,95,48,95,57,0);
          let episodet = String.fromCharCode(101,95,55,54,0);
         agreementD.push(episodet.length);
         i_images -= parseFloat(`${parseInt(`${i_images}`)}`);
         langX = `${langX.length}`;
         episodet += `${1 >> (Math.min(5, Math.abs(parseInt(`${i_images}`))))}`;
       let robotoe = String.fromCharCode(101,110,116,101,114,101,100,95,56,95,53,52,0);
       let long_ptD = String.fromCharCode(108,95,57,57,95,99,111,110,118,101,110,105,101,110,99,101,0);
         agreementD = [parseInt(`${become7}`) - robotoe.length];
      if ((agreementD.length | hejiT.length) < 2) {
          let placementh = [String.fromCharCode(99,111,110,116,114,97,105,110,116,115,95,108,95,57,48,0), String.fromCharCode(118,95,49,52,95,110,111,97,115,109,0), String.fromCharCode(121,95,49,55,95,105,112,118,105,100,101,111,0)];
          let moviesi = [911, 946, 303];
         hejiT += `${3 + moviesi.length}`;
         placementh = [1];
         moviesi = [1 % (Math.max(9, placementh.length))];
      }
      if (long_ptD.length <= robotoe.length) {
         robotoe += `${agreementD.length}`;
      }
         hejiT = `${1 | hejiT.length}`;
          let apps9 = String.fromCharCode(105,95,49,51,95,112,97,99,107,101,116,111,117,116,0);
          let stringR = String.fromCharCode(97,95,56,53,95,116,97,112,101,0);
         agreementD = [hejiT.length | 2];
         apps9 = `${stringR.length}`;
         stringR += `${(String.fromCharCode(105,0) == stringR ? stringR.length : apps9.length)}`;
      do {
          let countdownl = String.fromCharCode(111,118,101,114,119,114,105,116,101,95,116,95,50,52,0);
          let editx = String.fromCharCode(121,95,51,56,95,97,118,115,116,114,105,110,103,0);
          let themeJ = false;
          let delegate_8fB = 5.0;
         long_ptD += `${hejiT.length}`;
         countdownl = `${editx.length % (Math.max(1, 4))}`;
         editx = `${editx.length << (Math.min(Math.abs(1), 1))}`;
         themeJ = countdownl.length >= editx.length;
         delegate_8fB *= parseFloat(`${1 & parseInt(`${delegate_8fB}`)}`);
         if (long_ptD == String.fromCharCode(108,99,98,116,0)) {
            break;
         }
      } while (((become7 / (Math.max(parseFloat(`${long_ptD.length}`), 1))) < 3.19 && 4 < (parseInt(`${become7}`) / (Math.max(1, 8)))) && (long_ptD == String.fromCharCode(108,99,98,116,0)));
      for (let m = 0; m < 2; m++) {
          let gesture2 = 5;
          let gesturee = 0;
         robotoe = "2";
         gesture2 >>= Math.min(4, Math.abs(3));
         gesturee -= 1 << (Math.min(5, Math.abs(gesturee)));
      }
      arrowl /= Math.max(1, parseInt(`${arrowl}`));

  const onPressToggleFullScreen = () => {

   while ((2 ^ p_centerP) > 2) {
      p_centerP >>= Math.min(1, Math.abs(kickN.length << (Math.min(Math.abs(1), 3))));
      break;
   }
   if ((p_centerP + fullR) < 1.72) {
      p_centerP *= parseInt(`${fullR}`) | parseInt(`${arrowl}`);
   }
    dispatch(setVideoFullScreen(!isFullScreen));
      reportY |= 3 % (Math.max(7, reportY));
       let modeF = String.fromCharCode(105,103,110,111,114,105,110,103,95,113,95,56,55,0);
      for (let v = 0; v < 1; v++) {
          let shirtr = String.fromCharCode(101,120,105,115,116,101,100,95,97,95,51,56,0);
         modeF = `${1 - modeF.length}`;
         shirtr += `${1 / (Math.max(4, shirtr.length))}`;
      }
      while (4 >= modeF.length) {
         modeF += `${modeF.length - modeF.length}`;
         break;
      }
      if (modeF.length > modeF.length) {
          let china1 = String.fromCharCode(118,95,56,53,95,117,114,98,103,0);
          let trashC = String.fromCharCode(107,95,52,52,95,116,117,114,110,0);
          let acopy_yL = [619, 312];
          let hongkongo = 0.0;
          let side2 = String.fromCharCode(101,103,114,101,115,115,95,115,95,50,53,0);
         modeF += `${acopy_yL.length / (Math.max(2, 1))}`;
         china1 = "1";
         trashC = "3";
         acopy_yL = [2 << (Math.min(1, side2.length))];
         hongkongo -= side2.length;
      }
      backgroundI -= kickN.length;

  };
   while (5.33 < (backgroundI * 3.82)) {
      p_centerP |= 2;
      break;
   }
      analyticb /= Math.max(p_centerP % (Math.max(8, parseInt(`${analyticb}`))), 5);

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
       let suggestionQ = String.fromCharCode(121,95,54,50,95,115,97,116,100,120,0);
       let search9 = 3.0;
       let gestureK = new Map([[String.fromCharCode(111,95,49,49,95,102,111,114,109,115,104,101,101,116,0),true ], [String.fromCharCode(116,95,57,54,95,118,105,97,0),true ], [String.fromCharCode(111,95,56,51,95,115,116,101,112,115,105,122,101,0),false ]]);
          let line3 = String.fromCharCode(97,108,108,111,119,95,52,95,50,55,0);
         search9 *= 1 & gestureK.size;
         line3 = `${line3.length >> (Math.min(Math.abs(1), 3))}`;
          let chatv = true;
          let change7 = String.fromCharCode(115,116,114,105,99,116,95,113,95,55,53,0);
         suggestionQ = `${parseInt(`${search9}`) | 1}`;
         chatv = change7.length < 100 || !chatv;
         change7 = "3";
         suggestionQ += `${parseInt(`${search9}`) % 2}`;
       let screenl = 0.0;
       let whatsappV = 1.0;
          let animationn = String.fromCharCode(114,101,99,116,115,95,51,95,55,50,0);
          let regengv = 2.0;
         whatsappV += parseFloat(`${parseInt(`${regengv}`) / (Math.max(parseInt(`${whatsappV}`), 1))}`);
         animationn = `${1 + animationn.length}`;
         regengv += animationn.length;
      do {
          let statisticsX = [6, 302];
          let ajax5 = String.fromCharCode(121,95,53,51,95,102,108,97,116,110,101,115,115,0);
          let sortJ = String.fromCharCode(97,117,116,104,101,110,116,105,99,97,116,111,114,95,50,95,57,52,0);
         gestureK = new Map([[`${screenl}`, ajax5.length]]);
         statisticsX.push(statisticsX.length);
         ajax5 = `${statisticsX.length}`;
         sortJ = "3";
         if (gestureK.size == 2119868) {
            break;
         }
      } while ((3 == (gestureK.size & 5)) && (gestureK.size == 2119868));
      while ((suggestionQ.length / (Math.max(2, parseInt(`${search9}`)))) == 1) {
          let infoO = [279, 989];
          let expiredE = String.fromCharCode(106,95,53,54,95,114,101,99,101,105,118,101,0);
          let areaq = 5.0;
         search9 *= parseInt(`${whatsappV}`);
         infoO = [expiredE.length];
         expiredE += `${parseInt(`${areaq}`)}`;
         areaq /= Math.max(4, infoO.length % 1);
         break;
      }
      if (gestureK[`${search9}`] != null) {
          let stations0 = String.fromCharCode(108,95,51,55,95,100,101,97,108,108,111,99,97,116,101,100,0);
          let shootN = 0.0;
         gestureK = new Map([[`${shootN}`, suggestionQ.length]]);
         stations0 += `${(String.fromCharCode(70,0) == stations0 ? stations0.length : stations0.length)}`;
         shootN *= (parseFloat(`${String.fromCharCode(54,0) == stations0 ? stations0.length : stations0.length}`));
      }
         search9 /= Math.max(3, (suggestionQ == String.fromCharCode(121,0) ? parseInt(`${search9}`) : suggestionQ.length));
      progressm = new Map([[kickN, parseInt(`${reminderT}`) | kickN.length]]);
      reportY /= Math.max(4, 2);

};

export const PlayPause = () => {
       let preview2 = String.fromCharCode(106,95,49,53,95,98,105,116,118,101,99,115,0);
    let annerP = 3.0;
    let guideB = [286, 170];
    let type_npb = 5;
    let detailss = String.fromCharCode(121,95,51,55,95,98,121,116,101,99,111,100,101,0);
    let confirmation8 = String.fromCharCode(114,95,51,51,95,104,97,114,100,101,110,101,100,0);
    let relatedJ = false;
    let penalty1 = 4.0;
    let qnewsl = 4.0;
    let connectionA = 2.0;
    let episodev = 4.0;
    let serviceU = false;
    let gpayY = 3.0;
    let feedbacka = String.fromCharCode(98,95,53,55,0);
       let previewQ = String.fromCharCode(102,95,51,50,95,97,117,116,111,102,105,108,108,0);
       let lessr = 1.0;
      while (previewQ.endsWith(`${lessr}`)) {
          let searchW = String.fromCharCode(111,95,55,56,95,120,116,101,97,0);
          let background1 = String.fromCharCode(119,95,56,54,95,97,118,99,105,110,116,114,97,0);
          let backgroundG = 0.0;
          let layout5 = 1.0;
         previewQ = `${2 >> (Math.min(Math.abs(parseInt(`${lessr}`)), 2))}`;
         searchW += "2";
         background1 = "1";
         backgroundG -= searchW.length;
         layout5 -= 2;
         break;
      }
          let eighteenO = String.fromCharCode(104,95,56,54,95,111,98,115,101,114,118,101,114,0);
         previewQ += `${eighteenO.length << (Math.min(previewQ.length, 2))}`;
          let minivode = new Map([[String.fromCharCode(105,100,119,116,95,49,95,49,48,0),296], [String.fromCharCode(117,112,100,97,116,101,95,115,95,49,50,0),351]]);
          let scoreo = String.fromCharCode(115,117,98,115,116,114,105,110,103,115,95,103,95,50,56,0);
          let specX = new Map([[String.fromCharCode(120,95,52,49,95,98,117,98,98,108,101,0),String.fromCharCode(116,114,97,99,101,95,102,95,57,48,0)], [String.fromCharCode(118,95,54,57,95,116,111,110,103,117,101,0),String.fromCharCode(97,117,116,111,99,111,114,114,101,108,97,116,105,111,110,95,104,95,57,57,0)]]);
         previewQ += `${previewQ.length}`;
         minivode[scoreo] = minivode.size;
         scoreo += "1";
         specX = new Map([[`${specX.size}`, 1]]);
          let cluby = String.fromCharCode(106,95,57,57,95,115,105,112,114,100,97,116,97,0);
          let indexh = 5.0;
          let modalH = new Map([[String.fromCharCode(105,95,54,95,110,117,109,98,101,114,0),false ], [String.fromCharCode(116,114,97,110,115,108,97,116,101,95,55,95,57,57,0),true ]]);
         lessr /= Math.max(4, parseFloat(`${parseInt(`${indexh}`)}`));
         cluby += `${cluby.length}`;
         indexh -= cluby.length;
         modalH[`${cluby}`] = modalH.size + 2;
      while (previewQ.startsWith(`${lessr}`)) {
         previewQ = `${parseInt(`${lessr}`) - previewQ.length}`;
         break;
      }
         lessr += parseFloat(`${parseInt(`${lessr}`)}`);
      episodev *= previewQ.length;
       let right1 = 0.0;
       let expiredi = String.fromCharCode(98,97,99,107,112,116,114,95,50,95,50,53,0);
      for (let t = 0; t < 3; t++) {
         right1 *= parseFloat(`${expiredi.length ^ parseInt(`${right1}`)}`);
      }
      if ((right1 / 3.27) == 4.16) {
         right1 *= parseFloat(`${parseInt(`${right1}`)}`);
      }
         expiredi = `${parseInt(`${right1}`)}`;
          let savek = String.fromCharCode(109,107,118,109,117,120,101,114,95,116,95,55,54,0);
         expiredi += `${expiredi.length + 3}`;
         savek = `${savek.length}`;
         expiredi = `${parseInt(`${right1}`) | 2}`;
      while (2.7 == (right1 / 2.92) || (right1 / 2.92) == 4.58) {
         right1 /= Math.max(4, parseFloat(`${parseInt(`${right1}`)}`));
         break;
      }
      preview2 = `${(confirmation8 == String.fromCharCode(67,0) ? detailss.length : confirmation8.length)}`;
      annerP /= Math.max((parseFloat(`${preview2.length & (serviceU ? 3 : 5)}`)), 5);

  const dispatch = useDispatch();
   while (1.54 > (2 * penalty1)) {
       let search9 = 5.0;
       let relatedq = String.fromCharCode(109,106,112,101,103,98,95,50,95,56,51,0);
      for (let e = 0; e < 2; e++) {
         search9 -= parseInt(`${search9}`) * relatedq.length;
      }
      while (relatedq.length == 1) {
         relatedq += `${relatedq.length * 2}`;
         break;
      }
       let bootsplashP = String.fromCharCode(117,110,98,108,117,114,95,51,95,53,0);
      if (3 <= relatedq.length) {
         relatedq = `${relatedq.length}`;
      }
         relatedq = `${1 + bootsplashP.length}`;
         relatedq += `${bootsplashP.length}`;
      annerP -= parseFloat(`${parseInt(`${connectionA}`)}`);
      break;
   }
   if (connectionA <= 1.75 && (1.75 - connectionA) <= 5.11) {
      relatedJ = preview2.length >= parseInt(`${episodev}`);
   }
       let j_unlock3 = 1.0;
       let shirtO = false;
      do {
         shirtO = 46.31 < j_unlock3;
         if (shirtO ? !shirtO : shirtO) {
            break;
         }
      } while ((shirtO ? !shirtO : shirtO) && (!shirtO));
      for (let l = 0; l < 1; l++) {
         shirtO = shirtO && 80.16 <= j_unlock3;
      }
      while (!shirtO) {
          let entryu = String.fromCharCode(105,110,116,114,97,120,98,108,111,99,107,95,97,95,56,52,0);
          let otherH = true;
          let paginationl = String.fromCharCode(110,95,49,53,95,114,101,115,117,108,117,116,105,111,110,0);
         j_unlock3 /= Math.max(parseFloat(`${1}`), 2);
         entryu = "3";
         otherH = 53 > entryu.length && String.fromCharCode(73,0) == paginationl;
         paginationl = "2";
         break;
      }
      do {
         shirtO = !shirtO && j_unlock3 == 74.20;
         if (shirtO ? !shirtO : shirtO) {
            break;
         }
      } while ((shirtO ? !shirtO : shirtO) && ((2.68 - j_unlock3) > 2.61 && 2.68 > j_unlock3));
         shirtO = !shirtO && j_unlock3 <= 40.34;
         shirtO = j_unlock3 >= 2.48;
      annerP /= Math.max(3, parseFloat(`${3 >> (Math.min(4, preview2.length))}`));

  const {isPaused} = useSelector(state => state.videoPlayerControl);
   for (let i = 0; i < 2; i++) {
      serviceU = qnewsl < 76.64;
   }
   if (serviceU) {
       let privilege3 = 1.0;
      for (let b = 0; b < 1; b++) {
         privilege3 -= parseInt(`${privilege3}`) * 2;
      }
         privilege3 *= 2 / (Math.max(6, parseInt(`${privilege3}`)));
      do {
          let greyW = 0.0;
         privilege3 *= parseInt(`${privilege3}`) | parseInt(`${greyW}`);
         if (privilege3 == 570092.0) {
            break;
         }
      } while ((privilege3 == 570092.0) && (4.86 >= (4.53 + privilege3) || (4.53 - privilege3) >= 1.19));
      qnewsl += parseFloat(`${2 % (Math.max(parseInt(`${penalty1}`), 5))}`);
   }
       let pausep = String.fromCharCode(97,98,101,108,95,118,95,49,52,0);
       let stationsR = [317, 265, 783];
         pausep += `${pausep.length >> (Math.min(5, stationsR.length))}`;
          let typesf = String.fromCharCode(118,95,55,49,95,99,111,109,112,111,115,105,116,101,0);
          let resendl = 0;
          let configD = 3;
         pausep += `${1 - stationsR.length}`;
         typesf = `${resendl + configD}`;
         resendl += 1 ^ resendl;
         configD += 2 * typesf.length;
          let bingX = String.fromCharCode(100,97,112,112,95,108,95,51,57,0);
         pausep += `${stationsR.length % (Math.max(7, bingX.length))}`;
      for (let j = 0; j < 3; j++) {
         pausep = `${stationsR.length % (Math.max(pausep.length, 2))}`;
      }
      if (2 >= (4 + stationsR.length) && 4 >= (stationsR.length + pausep.length)) {
         stationsR.push(stationsR.length | 1);
      }
         stationsR = [pausep.length << (Math.min(1, stationsR.length))];
      confirmation8 += `${3 + parseInt(`${episodev}`)}`;

  const onPress = () => {

      preview2 = `${(parseInt(`${episodev}`) * (relatedJ ? 2 : 1))}`;
   if ((connectionA + 2.29) == 1.41) {
      preview2 = `${((relatedJ ? 3 : 3) | parseInt(`${penalty1}`))}`;
   }
      connectionA /= Math.max(((relatedJ ? 2 : 5) & 2), 3);
    dispatch(togglePlayPaused());
       let soundy = 2;
       let inactivej = false;
       let phonem = String.fromCharCode(107,101,121,115,116,111,114,101,95,50,95,50,49,0);
         inactivej = !inactivej;
         inactivej = String.fromCharCode(54,0) == phonem;
         soundy *= phonem.length;
      if ((3 / (Math.max(5, soundy))) > 2 && !inactivej) {
         inactivej = String.fromCharCode(50,0) == phonem;
      }
      do {
         inactivej = 90 == soundy;
         if (inactivej ? !inactivej : inactivej) {
            break;
         }
      } while ((inactivej ? !inactivej : inactivej) && (inactivej));
      do {
         inactivej = phonem.length > 99 || inactivej;
         if (inactivej ? !inactivej : inactivej) {
            break;
         }
      } while ((!phonem.includes(`${inactivej}`)) && (inactivej ? !inactivej : inactivej));
       let typesu = 1;
      if (2 == (3 | soundy) && 3 == soundy) {
          let eactK = false;
          let downloadedt = String.fromCharCode(115,105,103,110,97,108,105,110,103,95,106,95,56,50,0);
         inactivej = inactivej && 97 < soundy;
         eactK = (((!eactK ? 2 : downloadedt.length) / (Math.max(downloadedt.length, 3))) < 2);
      }
       let u_unlockl = 3.0;
       let gpayA = 4.0;
      confirmation8 = `${1 - parseInt(`${qnewsl}`)}`;
      annerP /= Math.max(3, (parseFloat(`${(relatedJ ? 3 : 3) % (Math.max(9, detailss.length))}`)));
   while (1 <= (2 | type_npb)) {
       let serviceo = [279, 967];
       let orangez = String.fromCharCode(119,95,50,49,95,97,99,116,117,97,108,105,122,101,0);
      for (let n = 0; n < 2; n++) {
          let mailF = 5.0;
          let backwardS = 3;
          let recommendationB = String.fromCharCode(103,111,108,100,95,119,95,51,57,0);
          let relatedr = true;
         serviceo = [1 + parseInt(`${mailF}`)];
         mailF /= Math.max(2, parseFloat(`${backwardS}`));
         backwardS >>= Math.min(1, Math.abs(backwardS));
         recommendationB += `${((relatedr ? 5 : 3) | backwardS)}`;
         relatedr = recommendationB.endsWith(`${relatedr}`);
      }
          let notificationb = 2;
          let smallM = false;
         orangez += `${3 % (Math.max(notificationb, 9))}`;
         notificationb |= ((smallM ? 1 : 3));
      while (!orangez.startsWith(`${serviceo.length}`)) {
         serviceo = [orangez.length];
         break;
      }
      while (!orangez.endsWith(`${serviceo.length}`)) {
          let settingf = [507, 190, 881];
          let chinaZ = String.fromCharCode(121,95,50,54,95,100,99,98,122,0);
          let modalp = String.fromCharCode(109,97,100,101,95,101,95,56,50,0);
          let filedh = String.fromCharCode(115,112,114,105,116,101,115,95,122,95,56,55,0);
          let scoreN = String.fromCharCode(115,99,104,109,95,104,95,54,54,0);
         serviceo = [(chinaZ == String.fromCharCode(112,0) ? serviceo.length : chinaZ.length)];
         settingf = [scoreN.length];
         modalp += `${scoreN.length & modalp.length}`;
         filedh += `${scoreN.length & 3}`;
         break;
      }
       let eactg = String.fromCharCode(112,114,101,115,115,95,57,95,57,49,0);
      while (eactg.length > 3) {
         serviceo.push((String.fromCharCode(87,0) == orangez ? eactg.length : orangez.length));
         break;
      }
      episodev /= Math.max(3, 3 ^ parseInt(`${annerP}`));
      break;
   }

  };
       let logins = String.fromCharCode(97,95,53,54,95,108,111,119,101,114,99,97,115,101,100,0);
       let loading6 = new Map([[String.fromCharCode(111,118,101,114,114,105,100,101,95,117,95,54,53,0),295], [String.fromCharCode(116,95,56,51,95,104,99,115,99,97,108,101,0),864]]);
      for (let n = 0; n < 1; n++) {
         logins += `${(logins == String.fromCharCode(118,0) ? loading6.size : logins.length)}`;
      }
      for (let x = 0; x < 2; x++) {
         loading6[`${logins}`] = 2;
      }
         logins = `${logins.length * loading6.size}`;
          let yingB = 5;
          let readY = String.fromCharCode(102,111,114,98,105,100,100,101,110,95,98,95,51,54,0);
          let playlistT = true;
         logins += `${(3 >> (Math.min(3, Math.abs((playlistT ? 4 : 1)))))}`;
         yingB ^= readY.length % (Math.max(7, yingB));
         readY += `${readY.length}`;
         playlistT = readY == String.fromCharCode(53,0) || 7 >= yingB;
      if (4 >= (logins.length & loading6.size)) {
         logins = `${loading6.size}`;
      }
      do {
         logins = `${1 | loading6.size}`;
         if (logins == String.fromCharCode(98,116,56,122,113,98,99,0)) {
            break;
         }
      } while ((loading6.size <= logins.length) && (logins == String.fromCharCode(98,116,56,122,113,98,99,0)));
      episodev += (detailss == String.fromCharCode(66,0) ? detailss.length : parseInt(`${gpayY}`));
      connectionA /= Math.max((parseInt(`${episodev}`) | (relatedJ ? 5 : 4)), 5);
       let q_titleW = 2.0;
      while ((q_titleW * 1.58) == 1.9 || (q_titleW + 1.58) == 5.1) {
         q_titleW *= parseFloat(`${parseInt(`${q_titleW}`) << (Math.min(2, Math.abs(parseInt(`${q_titleW}`))))}`);
         break;
      }
      if ((q_titleW * q_titleW) < 3.49) {
          let dropdownp = true;
          let stationh = new Map([[String.fromCharCode(116,95,55,53,95,120,112,116,97,98,108,101,0),862], [String.fromCharCode(98,95,53,50,95,106,111,121,102,117,108,0),385], [String.fromCharCode(104,95,50,50,95,105,109,112,111,114,116,101,100,0),561]]);
          let linkW = 0;
         q_titleW -= parseFloat(`${2 - parseInt(`${q_titleW}`)}`);
         dropdownp = stationh[`${dropdownp}`] != null;
         stationh = new Map([[`${stationh.size}`, stationh.size]]);
         linkW /= Math.max(stationh.size, 2);
      }
      while (4.49 < (q_titleW - q_titleW)) {
         q_titleW *= parseFloat(`${parseInt(`${q_titleW}`)}`);
         break;
      }
      serviceU = 82 < confirmation8.length;

  return (
    <RenderControl onPress={onPress} style={style.commonIconContainer}>
      <Image
        source={isPaused === true ? PlayImg : PauseImg}
        style={style.commonIcon}
        resizeMode={'contain'}
      />
    </RenderControl>
  );
       let sportso = 0.0;
       let selectl = String.fromCharCode(116,95,53,51,95,99,111,112,121,104,0);
         selectl = `${parseInt(`${sportso}`) * selectl.length}`;
      if ((sportso * 3.20) >= 5.59 || 3.20 >= (sportso * parseFloat(`${selectl.length}`))) {
          let analyticsV = true;
          let sort2 = String.fromCharCode(102,105,116,115,95,48,95,51,0);
         sportso -= (parseFloat(`${parseInt(`${sportso}`) / (Math.max(9, (analyticsV ? 2 : 5)))}`));
         analyticsV = sort2.length <= sort2.length;
      }
       let match1 = String.fromCharCode(99,95,55,52,95,102,114,97,109,101,115,101,116,116,101,114,0);
       let yellowp = String.fromCharCode(103,95,56,57,95,97,100,111,112,116,101,100,0);
         selectl += `${parseInt(`${sportso}`) + 3}`;
         sportso -= parseFloat(`${match1.length + 2}`);
       let alertD = String.fromCharCode(108,105,98,115,109,98,99,95,100,95,56,57,0);
       let googleQ = String.fromCharCode(107,95,56,52,0);
      preview2 += `${detailss.length << (Math.min(1, Math.abs(parseInt(`${sportso}`))))}`;
   do {
      preview2 += `${(confirmation8 == String.fromCharCode(70,0) ? type_npb : confirmation8.length)}`;
      if (preview2 == String.fromCharCode(120,113,106,102,106,111,99,118,54,0)) {
         break;
      }
   } while ((guideB.length >= 1) && (preview2 == String.fromCharCode(120,113,106,102,106,111,99,118,54,0)));
   if (episodev > detailss.length) {
      detailss = `${((serviceU ? 5 : 3) >> (Math.min(Math.abs(3), 3)))}`;
   }

};
export const Refresh = () => {
       let xvod_ = String.fromCharCode(98,95,52,49,95,99,104,111,115,101,110,0);
    let stationsE = String.fromCharCode(100,95,57,48,95,114,101,112,108,97,99,101,109,101,110,116,115,0);
    let inviteP = String.fromCharCode(97,114,114,97,110,103,101,100,95,52,95,49,51,0);
    let slider1 = String.fromCharCode(107,95,54,55,95,109,112,101,103,97,117,100,105,111,116,97,98,0);
    let referrerr = String.fromCharCode(119,95,50,95,99,111,110,115,116,114,97,105,110,116,115,0);
    let modelk = true;
    let time_bh = String.fromCharCode(97,110,116,105,97,108,105,97,115,105,110,103,95,49,95,54,0);
    let search3 = false;
    let matchesZ = 4.0;
    let countryv = String.fromCharCode(115,95,52,52,95,99,111,109,112,108,101,109,101,110,116,105,110,103,0);
    let default_syR = String.fromCharCode(117,112,108,111,97,100,105,110,103,95,100,95,56,48,0);
    let whatsappU = [798, 957];
      slider1 += "3";
       let reportb = 4;
       let animationz = [479, 87, 972];
      for (let f = 0; f < 1; f++) {
         reportb <<= Math.min(Math.abs(2), 5);
      }
       let brightnessy = [String.fromCharCode(99,97,110,95,121,95,55,48,0), String.fromCharCode(98,102,115,116,109,95,107,95,52,56,0)];
       let weibo4 = [String.fromCharCode(97,95,50,55,95,97,110,115,105,0), String.fromCharCode(101,118,101,110,95,98,95,51,49,0), String.fromCharCode(118,95,50,49,95,116,114,105,97,110,103,108,101,0)];
         weibo4 = [weibo4.length & reportb];
      for (let j = 0; j < 2; j++) {
          let indexl = String.fromCharCode(104,95,56,52,95,99,109,115,103,115,0);
          let pointm = new Map([[String.fromCharCode(121,111,103,97,95,106,95,57,53,0),String.fromCharCode(101,95,56,51,95,117,110,100,111,0)], [String.fromCharCode(109,97,110,105,112,117,108,97,116,111,114,95,103,95,54,53,0),String.fromCharCode(115,95,52,95,98,114,105,103,104,116,110,101,115,115,0)], [String.fromCharCode(103,119,101,105,95,97,95,53,55,0),String.fromCharCode(107,95,55,54,95,112,111,108,105,99,101,0)]]);
          let buttonY = 5.0;
         brightnessy.push(reportb);
         indexl = `${parseInt(`${buttonY}`) / (Math.max(2, 1))}`;
         pointm = new Map([[`${pointm.size}`, pointm.size & parseInt(`${buttonY}`)]]);
      }
          let clock9 = String.fromCharCode(115,117,110,114,105,115,101,115,101,116,95,48,95,51,53,0);
          let sort1 = String.fromCharCode(111,112,101,110,103,108,95,101,95,52,56,0);
         weibo4.push(animationz.length);
         clock9 = "1";
         sort1 = `${clock9.length % (Math.max(3, 2))}`;
      do {
         animationz.push(2 | reportb);
         if (animationz.length == 302565) {
            break;
         }
      } while ((reportb < animationz.length) && (animationz.length == 302565));
      slider1 += `${(parseInt(`${matchesZ}`) >> (Math.min(3, Math.abs((modelk ? 3 : 2)))))}`;
      time_bh = `${stationsE.length & xvod_.length}`;

  const dispatch = useDispatch();
   if (inviteP.includes(`${xvod_.length}`)) {
       let rewindq = 1;
       let kickD = String.fromCharCode(116,95,49,54,95,99,111,110,99,117,114,101,110,116,0);
       let minimizeC = [850, 956];
       let paget = [473, 97, 381];
          let saveG = String.fromCharCode(111,95,49,51,95,114,101,109,111,118,101,0);
          let scorem = String.fromCharCode(110,95,55,49,95,112,105,120,102,109,116,115,0);
         kickD = `${kickD.length / 1}`;
         saveG += `${saveG.length}`;
         scorem = `${saveG.length}`;
          let inactiveK = 3.0;
         kickD += `${minimizeC.length - kickD.length}`;
         inactiveK += 3 - parseInt(`${inactiveK}`);
      if ((4 | paget.length) <= 3) {
         kickD = `${2 | minimizeC.length}`;
      }
      for (let r = 0; r < 1; r++) {
         kickD = `${paget.length}`;
      }
       let notificationv = String.fromCharCode(97,108,103,111,114,105,116,104,109,95,120,95,54,57,0);
      if (rewindq > 1) {
         rewindq |= minimizeC.length / 1;
      }
      if (minimizeC.length >= kickD.length) {
         kickD = `${3 * paget.length}`;
      }
         kickD = `${rewindq}`;
      do {
         minimizeC.push(notificationv.length);
         if (minimizeC.length == 3515348) {
            break;
         }
      } while ((paget.includes(minimizeC.length)) && (minimizeC.length == 3515348));
      if ((paget.length + notificationv.length) < 3) {
         paget = [2 & kickD.length];
      }
          let filledV = String.fromCharCode(97,110,116,105,97,108,105,97,115,95,106,95,51,56,0);
          let tooltipsf = new Map([[String.fromCharCode(105,112,97,100,100,95,100,95,52,52,0),130], [String.fromCharCode(121,95,57,54,95,97,117,100,105,111,103,101,110,0),632]]);
          let backgroundf = true;
         paget = [1];
         filledV += "2";
         tooltipsf[filledV] = 2 + tooltipsf.size;
         backgroundf = (filledV.length - tooltipsf.size) < 1;
      while (!paget.includes(minimizeC.length)) {
         minimizeC = [1];
         break;
      }
      xvod_ = `${((modelk ? 2 : 2))}`;
   }
   if (time_bh.length == 5) {
      search3 = !xvod_.includes(`${search3}`);
   }
   for (let e = 0; e < 3; e++) {
       let actionsb = false;
       let viewerw = String.fromCharCode(103,95,51,51,95,115,100,112,0);
       let searchbarc = String.fromCharCode(100,101,115,99,114,105,98,101,95,54,95,54,50,0);
      if (!viewerw.includes(searchbarc)) {
          let halfa = 5.0;
          let condensedd = [String.fromCharCode(122,95,48,95,112,114,105,111,114,105,116,105,101,115,0), String.fromCharCode(97,117,116,111,100,101,116,101,99,116,111,114,95,117,95,51,48,0), String.fromCharCode(114,95,51,95,99,97,99,104,101,100,107,101,121,115,0)];
          let statisticss = 0.0;
         viewerw += "1";
         halfa /= Math.max(4, parseFloat(`${parseInt(`${halfa}`)}`));
         condensedd.push(parseInt(`${statisticss}`) / (Math.max(4, condensedd.length)));
         statisticss -= 3;
      }
      while (viewerw.length > searchbarc.length) {
          let componentZ = new Map([[String.fromCharCode(109,95,56,48,95,98,116,111,98,105,110,0),497], [String.fromCharCode(109,95,54,50,95,99,111,118,97,108,101,110,116,0),832]]);
          let dragY = String.fromCharCode(113,95,51,52,95,102,97,115,116,115,115,105,109,0);
         searchbarc = `${componentZ.size}`;
         componentZ = new Map([[dragY, dragY.length >> (Math.min(Math.abs(3), 4))]]);
         break;
      }
          let filed8 = 5.0;
          let bannerp = false;
          let whistleu = String.fromCharCode(99,111,110,99,97,116,101,110,97,116,105,111,110,95,112,95,53,56,0);
         viewerw += `${(1 / (Math.max(6, (actionsb ? 4 : 3))))}`;
         filed8 /= Math.max(5, parseInt(`${filed8}`));
         bannerp = whistleu.length >= filed8;
         whistleu = `${whistleu.length + 2}`;
         viewerw += `${((actionsb ? 3 : 5))}`;
      do {
          let statsU = String.fromCharCode(113,116,97,98,108,101,115,95,51,95,51,48,0);
          let short_4a = [901, 957];
          let entryS = new Map([[String.fromCharCode(101,107,121,95,113,95,55,55,0),true ], [String.fromCharCode(101,115,115,97,103,101,95,122,95,55,54,0),true ], [String.fromCharCode(116,105,109,105,110,103,115,97,102,101,95,122,95,54,55,0),true ]]);
         searchbarc = `${3 | searchbarc.length}`;
         statsU = `${entryS.size >> (Math.min(short_4a.length, 1))}`;
         short_4a = [entryS.size ^ 1];
         if (String.fromCharCode(95,121,97,120,111,112,97,0) == searchbarc) {
            break;
         }
      } while ((String.fromCharCode(95,121,97,120,111,112,97,0) == searchbarc) && (viewerw == String.fromCharCode(55,0)));
      if (viewerw.length <= 1 && actionsb) {
         actionsb = !actionsb || viewerw.length <= 61;
      }
      while (2 <= viewerw.length) {
          let l_positiono = 2.0;
          let acopy_uQ = new Map([[String.fromCharCode(112,111,115,116,112,114,111,99,114,101,115,95,108,95,52,0),String.fromCharCode(118,95,51,57,95,101,114,114,111,114,115,0)], [String.fromCharCode(101,110,117,109,118,97,108,117,101,95,111,95,56,57,0),String.fromCharCode(114,101,116,117,114,110,101,100,95,48,95,49,48,0)]]);
         viewerw = `${searchbarc.length}`;
         l_positiono -= parseFloat(`${parseInt(`${l_positiono}`)}`);
         acopy_uQ = new Map([[`${acopy_uQ.size}`, acopy_uQ.size]]);
         break;
      }
      do {
         actionsb = !viewerw.startsWith(`${actionsb}`);
         if (actionsb ? !actionsb : actionsb) {
            break;
         }
      } while ((1 > viewerw.length || !actionsb) && (actionsb ? !actionsb : actionsb));
      for (let s = 0; s < 1; s++) {
          let descw = 5.0;
         viewerw += `${((actionsb ? 3 : 1) / (Math.max(viewerw.length, 7)))}`;
         descw *= parseFloat(`${parseInt(`${descw}`)}`);
      }
      inviteP = "3";
   }

  const onPress = () => {

   while (1 > referrerr.length) {
       let upgradeA = String.fromCharCode(119,95,54,50,95,112,114,111,118,105,115,105,111,110,0);
          let homey = String.fromCharCode(104,121,112,111,116,104,101,115,101,115,95,119,95,51,51,0);
         upgradeA = `${homey.length}`;
          let dropdownI = [466, 324, 254];
         upgradeA += `${dropdownI.length << (Math.min(upgradeA.length, 5))}`;
      do {
         upgradeA += `${upgradeA.length / (Math.max(upgradeA.length, 10))}`;
         if (upgradeA.length == 229349) {
            break;
         }
      } while ((upgradeA.startsWith(upgradeA)) && (upgradeA.length == 229349));
      referrerr += `${((modelk ? 2 : 5))}`;
      break;
   }
      xvod_ = `${slider1.length * inviteP.length}`;
   for (let x = 0; x < 3; x++) {
      matchesZ += referrerr.length * slider1.length;
   }
    dispatch(setVideoPlayerAction('refresh'));
      time_bh += `${(1 & (search3 ? 1 : 5))}`;
   while (!search3) {
      search3 = referrerr.includes(`${modelk}`);
      break;
   }
      slider1 = `${xvod_.length - 3}`;

  };
   while (parseInt(`${matchesZ}`) >= xvod_.length) {
       let anythink4 = String.fromCharCode(109,95,51,49,95,117,116,105,108,115,0);
       let giftT = [496, 224, 365];
       let chatH = String.fromCharCode(102,95,56,57,0);
       let sportsW = 3.0;
       let filterU = String.fromCharCode(105,95,50,49,95,117,110,97,114,99,104,105,118,101,0);
      do {
         sportsW *= (parseFloat(`${String.fromCharCode(83,0) == anythink4 ? filterU.length : anythink4.length}`));
         if (3090453.0 == sportsW) {
            break;
         }
      } while ((3.92 >= (sportsW + 4.69) || (4.69 + sportsW) >= 5.14) && (3090453.0 == sportsW));
         anythink4 += `${giftT.length}`;
      while (5.15 < (4.19 + sportsW) && (sportsW + 4.19) < 4.16) {
         filterU += `${parseInt(`${sportsW}`) ^ 1}`;
         break;
      }
      while ((giftT.length & 5) <= 3 && 3 <= (anythink4.length & 5)) {
         giftT = [anythink4.length / 3];
         break;
      }
      do {
          let indexp = String.fromCharCode(100,95,54,57,95,115,117,98,120,0);
          let groupQ = true;
         filterU = `${chatH.length | giftT.length}`;
         indexp = `${(3 * (groupQ ? 1 : 5))}`;
         groupQ = indexp.length > 31;
         if (String.fromCharCode(51,121,116,108,105,56,107,118,0) == filterU) {
            break;
         }
      } while ((chatH.startsWith(filterU)) && (String.fromCharCode(51,121,116,108,105,56,107,118,0) == filterU));
      for (let z = 0; z < 1; z++) {
         sportsW /= Math.max(parseFloat(`${chatH.length}`), 2);
      }
       let chatO = String.fromCharCode(104,95,52,50,95,99,111,108,108,105,100,105,110,103,0);
      do {
          let changeE = String.fromCharCode(116,114,117,110,99,97,116,101,95,49,95,52,56,0);
          let smallO = new Map([[String.fromCharCode(119,95,50,55,95,102,111,117,114,115,113,117,97,114,101,0),false ], [String.fromCharCode(116,105,109,101,108,105,109,105,116,95,100,95,54,57,0),false ], [String.fromCharCode(102,95,52,95,100,109,105,120,0),false ]]);
          let completeH = new Map([[String.fromCharCode(112,105,120,109,102,116,115,95,54,95,53,56,0),String.fromCharCode(100,101,110,105,97,108,95,114,95,55,56,0)], [String.fromCharCode(100,101,99,111,100,101,102,95,52,95,55,50,0),String.fromCharCode(99,108,105,99,107,95,97,95,56,57,0)], [String.fromCharCode(98,114,97,110,100,95,120,95,53,54,0),String.fromCharCode(107,95,52,52,95,119,116,118,102,105,108,101,0)]]);
         sportsW += parseFloat(`${1}`);
         changeE += `${2 >> (Math.min(5, Math.abs(smallO.size)))}`;
         smallO = new Map([[`${completeH.size}`, completeH.size % 2]]);
         if (3722429.0 == sportsW) {
            break;
         }
      } while (((3 ^ anythink4.length) >= 4) && (3722429.0 == sportsW));
          let search5 = 1.0;
          let largeP = String.fromCharCode(115,116,111,112,112,105,110,103,95,120,95,55,57,0);
         chatH += `${filterU.length - 2}`;
         search5 *= largeP.length;
         largeP += `${1 * parseInt(`${search5}`)}`;
      if (anythink4.startsWith(`${sportsW}`)) {
          let selectedV = false;
          let dices = String.fromCharCode(103,114,111,117,112,101,100,95,55,95,55,0);
          let register_1mW = String.fromCharCode(101,95,52,56,95,114,101,115,99,97,108,101,0);
          let windK = 4;
         anythink4 = `${chatO.length}`;
         selectedV = String.fromCharCode(105,0) == dices;
         dices += "1";
         register_1mW = "2";
         windK -= dices.length / (Math.max(register_1mW.length, 8));
      }
      while ((4 - anythink4.length) >= 4 || 1 >= (4 - giftT.length)) {
         giftT.push(chatO.length / 2);
         break;
      }
      matchesZ += ((modelk ? 2 : 5) / (Math.max(9, parseInt(`${sportsW}`))));
      break;
   }
      xvod_ = `${(inviteP.length << (Math.min(1, Math.abs((search3 ? 1 : 1)))))}`;
      time_bh += `${((search3 ? 4 : 5) % 1)}`;

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
      slider1 += "1";
      if (String.fromCharCode(50,122,101,0) == slider1) {
         break;
      }
   } while ((String.fromCharCode(50,122,101,0) == slider1) && (5 >= countryv.length));
   do {
       let volume4 = 4;
       let pagination3 = 0;
      do {
         volume4 *= 1 & pagination3;
         if (volume4 == 2855190) {
            break;
         }
      } while ((volume4 == 2855190) && (4 < (3 + pagination3) || 3 < (pagination3 + volume4)));
      if ((3 * volume4) < 4) {
         pagination3 /= Math.max(volume4 % (Math.max(1, 10)), 3);
      }
      while (3 > (2 + volume4)) {
         pagination3 += volume4;
         break;
      }
         volume4 ^= 1;
      for (let t = 0; t < 3; t++) {
         volume4 ^= pagination3;
      }
      do {
         volume4 %= Math.max(2, 2);
         if (volume4 == 2677159) {
            break;
         }
      } while (((pagination3 / (Math.max(volume4, 9))) < 1 && (1 / (Math.max(4, volume4))) < 4) && (volume4 == 2677159));
      search3 = 77 > xvod_.length;
      if (search3 ? !search3 : search3) {
         break;
      }
   } while ((search3 ? !search3 : search3) && (search3));
   for (let w = 0; w < 3; w++) {
      stationsE += `${referrerr.length | 3}`;
   }

};

export const Pip = () => {
       let album7 = 1;
    let header2 = [622, 474, 874];
    let dragk = false;
    let nativeS = String.fromCharCode(120,95,49,54,95,97,108,97,109,111,102,105,114,101,0);
    let clearV = 2.0;
    let memberR = String.fromCharCode(97,117,116,111,112,108,97,121,95,102,95,57,48,0);
    let type_sK = 2;
    let watch9 = 3.0;
    let q_count6 = true;
    let zhuboT = String.fromCharCode(116,105,99,107,101,116,95,105,95,57,52,0);
    let register_dj0 = String.fromCharCode(107,100,102,95,119,95,51,0);
    let greenQ = [String.fromCharCode(101,120,112,114,101,115,115,105,111,110,115,95,103,95,56,50,0), String.fromCharCode(110,95,51,55,95,120,99,111,100,101,0)];
    let j_position4 = new Map([[String.fromCharCode(115,97,109,112,108,101,100,95,53,95,56,51,0),119], [String.fromCharCode(115,116,100,111,117,116,95,111,95,54,54,0),696], [String.fromCharCode(121,95,51,49,95,115,99,97,110,0),211]]);
    let auto_2mK = 3.0;
    let storev = new Map([[String.fromCharCode(115,104,97,107,105,110,103,95,108,95,57,57,0),846], [String.fromCharCode(105,95,55,56,95,116,97,98,0),426]]);
   while (!dragk) {
      dragk = !q_count6 || header2.length >= 68;
      break;
   }
   do {
       let greyU = 1.0;
       let nalyticsH = 1;
         greyU *= parseFloat(`${nalyticsH - parseInt(`${greyU}`)}`);
      for (let f = 0; f < 2; f++) {
         greyU += parseFloat(`${parseInt(`${greyU}`) + nalyticsH}`);
      }
         greyU -= parseFloat(`${parseInt(`${greyU}`)}`);
       let humidityG = String.fromCharCode(111,95,49,56,95,109,117,108,116,105,112,108,121,120,0);
          let actionT = String.fromCharCode(119,95,48,95,114,101,102,99,111,117,110,116,0);
          let pressureL = [362, 971];
          let ping4 = String.fromCharCode(114,101,118,101,97,108,101,100,95,121,95,50,51,0);
         greyU /= Math.max(parseFloat(`${3}`), 2);
         actionT = "3";
         pressureL.push(ping4.length % (Math.max(1, 3)));
         ping4 = `${ping4.length}`;
          let renewa = String.fromCharCode(105,95,49,55,0);
         humidityG = `${(humidityG == String.fromCharCode(98,0) ? parseInt(`${greyU}`) : humidityG.length)}`;
         renewa = `${(String.fromCharCode(109,0) == renewa ? renewa.length : renewa.length)}`;
      header2.push((header2.length - (dragk ? 3 : 4)));
      if (header2.length == 3528859) {
         break;
      }
   } while ((header2.length == clearV) && (header2.length == 3528859));

  const dispatch = useDispatch();
   while (zhuboT.length <= 5) {
      zhuboT = `${((q_count6 ? 5 : 5) / (Math.max(nativeS.length, 4)))}`;
      break;
   }
      zhuboT += `${register_dj0.length + 3}`;

  const {source, matchId, videoType} = useSelector(
    state => state.videoPlayerControl,
  );
   while (!memberR.startsWith(`${q_count6}`)) {
       let moditya = String.fromCharCode(108,95,55,50,95,97,117,103,109,101,110,116,97,116,105,111,110,0);
       let weiboI = new Map([[String.fromCharCode(101,95,51,49,95,99,111,110,102,105,103,117,114,101,114,0),false ], [String.fromCharCode(117,110,112,114,101,109,117,108,116,105,112,108,121,111,102,102,115,101,116,95,103,95,56,52,0),false ]]);
      for (let h = 0; h < 2; h++) {
         moditya += `${moditya.length % (Math.max(1, 9))}`;
      }
      for (let e = 0; e < 1; e++) {
          let routern = String.fromCharCode(114,97,119,118,105,100,101,111,95,116,95,53,56,0);
          let photoh = 0;
          let changec = new Map([[String.fromCharCode(109,109,97,112,95,111,95,54,53,0),384], [String.fromCharCode(98,101,108,111,110,103,95,103,95,56,50,0),122]]);
         moditya = `${(moditya == String.fromCharCode(102,0) ? moditya.length : photoh)}`;
         routern += `${changec.size}`;
         photoh |= 1;
         changec = new Map([[`${changec.size}`, changec.size - routern.length]]);
      }
         moditya = `${(String.fromCharCode(114,0) == moditya ? moditya.length : weiboI.size)}`;
      for (let d = 0; d < 3; d++) {
          let save1 = String.fromCharCode(114,95,50,50,95,102,105,110,0);
          let reportG = 1.0;
          let zcopy_fhn = String.fromCharCode(114,101,99,101,110,116,108,121,95,118,95,54,53,0);
          let malaysia4 = new Map([[String.fromCharCode(103,111,108,111,109,98,95,118,95,52,54,0),false ], [String.fromCharCode(99,104,117,110,107,121,99,104,117,110,107,121,95,120,95,49,52,0),false ], [String.fromCharCode(117,112,115,97,109,112,108,101,95,54,95,55,50,0),true ]]);
          let statisticsC = String.fromCharCode(112,114,111,102,105,108,101,95,108,95,55,51,0);
         moditya = "2";
         save1 += `${zcopy_fhn.length << (Math.min(3, statisticsC.length))}`;
         reportG /= Math.max(5, zcopy_fhn.length);
         malaysia4[zcopy_fhn] = malaysia4.size;
         statisticsC += `${malaysia4.size | 1}`;
      }
         weiboI = new Map([[`${weiboI.size}`, moditya.length]]);
      do {
         weiboI = new Map([[`${weiboI.size}`, weiboI.size | 3]]);
         if (3177653 == weiboI.size) {
            break;
         }
      } while ((3177653 == weiboI.size) && ((1 << (Math.min(3, Math.abs(weiboI.size)))) <= 4 || 1 <= (weiboI.size << (Math.min(moditya.length, 4)))));
      memberR += `${zhuboT.length % (Math.max(1, 9))}`;
      break;
   }
       let unreadF = 1.0;
       let sentry1 = 4;
          let popup1 = 4.0;
         unreadF *= parseInt(`${popup1}`);
          let livew = 5.0;
          let controlsr = 3.0;
         unreadF *= 2 | parseInt(`${controlsr}`);
         livew -= parseFloat(`${parseInt(`${livew}`) ^ parseInt(`${livew}`)}`);
         controlsr -= parseFloat(`${3}`);
      if (5.77 > (sentry1 - unreadF)) {
         sentry1 <<= Math.min(1, Math.abs(parseInt(`${unreadF}`) >> (Math.min(3, Math.abs(sentry1)))));
      }
          let infoX = String.fromCharCode(115,101,97,108,98,111,120,95,108,95,50,57,0);
          let specv = 0;
         unreadF /= Math.max(2, infoX.length);
         infoX += `${1 % (Math.max(6, specv))}`;
         specv |= specv << (Math.min(Math.abs(specv), 5));
      do {
         sentry1 -= sentry1 * 1;
         if (sentry1 == 3714974) {
            break;
         }
      } while (((3.41 / (Math.max(7, unreadF))) < 1.31) && (sentry1 == 3714974));
      while ((unreadF - sentry1) >= 3.37) {
         sentry1 <<= Math.min(Math.abs(parseInt(`${unreadF}`) / (Math.max(4, sentry1))), 4);
         break;
      }
      greenQ = [(memberR.length * (dragk ? 3 : 3))];

  const onPress = () => {

      type_sK -= memberR.length;
   while (5.62 < watch9 || 4.46 < (watch9 - 5.62)) {
      watch9 += 1;
      break;
   }
    Orientation.lockToPortrait();
       let gemfileC = 2;
         gemfileC ^= gemfileC - 2;
      do {
         gemfileC >>= Math.min(2, Math.abs(gemfileC % (Math.max(4, gemfileC))));
         if (gemfileC == 2990776) {
            break;
         }
      } while ((gemfileC == gemfileC) && (gemfileC == 2990776));
         gemfileC <<= Math.min(3, Math.abs(1 * gemfileC));
      q_count6 = nativeS.length < 86;
   do {
      header2.push(type_sK);
      if (header2.length == 3115268) {
         break;
      }
   } while ((watch9 > 1.79) && (header2.length == 3115268));

    store.dispatch(
      floatingPlayer.actions.setProp({
        display: true,
        url: source,
        matchId: matchId,
        videoType: videoType,
      }),
    );
      register_dj0 += "3";
   for (let r = 0; r < 3; r++) {
      album7 >>= Math.min(Math.abs(3), 5);
   }

    dispatch(
      setVideoControlProp({
        isFullScreen: false,
        source: '',
        videoType: VideoLiveType.DETAIL,
      }),
    );
   if (header2.length == type_sK) {
      type_sK += nativeS.length;
   }
       let orientationK = 2;
       let store_ = 4.0;
         orientationK ^= parseInt(`${store_}`);
       let sentryl = true;
       let sliderx = false;
         sentryl = !sentryl && orientationK >= 6;
      while (5.3 > (store_ + 3.9)) {
         orientationK <<= Math.min(Math.abs(((sentryl ? 4 : 4) * (sliderx ? 2 : 4))), 4);
         break;
      }
         sentryl = 18 == orientationK;
       let trophyW = 0.0;
      album7 += register_dj0.length;

  };
   for (let t = 0; t < 2; t++) {
      q_count6 = clearV < 57.80 || nativeS == String.fromCharCode(122,0);
   }
      dragk = memberR.startsWith(`${album7}`);


  return (
    <RenderControl onPress={onPress} style={style.commonIconContainer}>
      <Image
        source={IconPipShrink}
        style={style.commonIcon}
        resizeMode={'contain'}
      />
    </RenderControl>
  );
      memberR += `${2 + memberR.length}`;
   while (memberR.length <= 3) {
       let eighteenq = 4.0;
       let rightr = [865, 825, 79];
       let sliderw = true;
      for (let a = 0; a < 3; a++) {
         sliderw = rightr.length >= 41;
      }
      if ((rightr.length + 4) > 2 && sliderw) {
         rightr = [3];
      }
          let taiwan0 = 3;
         sliderw = 8.32 == eighteenq;
         taiwan0 *= taiwan0 | taiwan0;
          let fastB = String.fromCharCode(100,95,56,54,95,115,116,114,105,100,105,110,103,0);
         rightr = [fastB.length % 3];
          let whiteI = String.fromCharCode(106,95,49,57,95,116,104,114,101,101,100,111,115,116,114,0);
          let register_m80 = 5.0;
          let sharedo = 3.0;
         rightr.push((whiteI == String.fromCharCode(121,0) ? whiteI.length : parseInt(`${eighteenq}`)));
         register_m80 -= parseInt(`${register_m80}`) << (Math.min(Math.abs(parseInt(`${sharedo}`)), 1));
         sharedo += parseInt(`${register_m80}`);
       let userR = 2;
      while (sliderw) {
         rightr = [userR];
         break;
      }
      if (rightr.includes(userR)) {
         rightr = [rightr.length];
      }
       let usernameg = true;
       let hearty = false;
      q_count6 = dragk;
      break;
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
       let auto_v8B = [862, 27, 460];
    let humidityN = String.fromCharCode(106,95,56,56,95,104,101,120,0);
    let dice2 = 1.0;
    let catalogX = [190, 208, 671];
    let themeA = true;
    let sharedn = String.fromCharCode(101,95,51,57,95,115,116,114,99,115,112,110,0);
    let calendarD = String.fromCharCode(115,116,114,116,111,105,110,116,95,107,95,54,54,0);
    let philippinesS = true;
    let watchv = 2.0;
    let modelsh = 3;
    let middlewareE = String.fromCharCode(112,111,114,116,115,95,103,95,53,48,0);
    let sellh = 5.0;
    let actionh = 2.0;
    let umengw = String.fromCharCode(105,99,119,114,115,105,95,107,95,49,55,0);
    let roomb = [854, 961];
    let episode1 = new Map([[String.fromCharCode(114,95,49,57,95,114,101,113,117,101,115,116,0),89], [String.fromCharCode(112,103,105,100,120,95,114,95,56,57,0),803]]);
    let macauv = new Map([[String.fromCharCode(97,95,51,57,95,114,97,114,105,116,121,0),String.fromCharCode(106,112,101,103,95,102,95,49,51,0)], [String.fromCharCode(115,112,108,105,116,109,118,115,95,53,95,57,53,0),String.fromCharCode(108,95,51,57,95,112,114,111,100,117,99,101,0)]]);
      catalogX = [calendarD.length - parseInt(`${dice2}`)];
      humidityN += `${(humidityN == String.fromCharCode(79,0) ? humidityN.length : parseInt(`${watchv}`))}`;
   do {
      humidityN += `${catalogX.length % 3}`;
      if (humidityN.length == 3024194) {
         break;
      }
   } while ((humidityN.length == 3024194) && (humidityN.length < 1));
   for (let e = 0; e < 3; e++) {
       let gesturesc = [656, 594];
       let shirtY = String.fromCharCode(122,95,52,52,95,116,114,97,106,101,99,116,111,114,121,0);
       let spinnerU = false;
       let playS = String.fromCharCode(100,95,51,53,95,112,104,114,97,115,101,0);
      for (let r = 0; r < 3; r++) {
         spinnerU = playS.length < 23 || !spinnerU;
      }
      do {
         shirtY = "3";
         if (shirtY.length == 761793) {
            break;
         }
      } while ((spinnerU) && (shirtY.length == 761793));
          let collectionb = String.fromCharCode(100,95,49,54,95,98,105,110,111,109,105,97,108,0);
          let desc7 = new Map([[String.fromCharCode(122,95,50,51,95,110,117,109,101,114,97,108,115,0),461], [String.fromCharCode(107,95,52,95,110,111,110,110,117,108,108,97,100,100,114,101,115,115,0),539]]);
          let play5 = 2;
         spinnerU = (collectionb.length * gesturesc.length) >= 81;
         collectionb += `${2 % (Math.max(9, desc7.size))}`;
         desc7[`${play5}`] = desc7.size % 2;
         play5 <<= Math.min(Math.abs(desc7.size / 3), 5);
      do {
         gesturesc = [shirtY.length - gesturesc.length];
         if (gesturesc.length == 1411939) {
            break;
         }
      } while ((gesturesc.length == 1411939) && (!spinnerU));
       let tooltipst = 0.0;
      if (shirtY.includes(`${spinnerU}`)) {
         spinnerU = gesturesc.length == parseInt(`${tooltipst}`);
      }
         gesturesc.push(gesturesc.length);
      while (spinnerU) {
         spinnerU = !spinnerU;
         break;
      }
      for (let x = 0; x < 2; x++) {
          let twitterA = String.fromCharCode(115,101,110,115,105,116,105,118,105,116,121,95,53,95,54,55,0);
          let expandA = [657, 795];
          let switch_3R = 1;
          let preview9 = false;
          let detailP = [793, 8, 573];
         shirtY = `${(2 - (spinnerU ? 3 : 4))}`;
         twitterA += "2";
         expandA = [detailP.length];
         switch_3R += ((preview9 ? 5 : 4) % (Math.max(1, 6)));
         detailP.push(switch_3R * twitterA.length);
      }
       let football5 = 5.0;
       let downloaderf = 2.0;
      if (4 >= (shirtY.length & 4)) {
          let firebaseb = 2.0;
          let upgradeT = [914, 199, 725];
          let smallR = 2.0;
          let soundV = 5.0;
          let sharedY = String.fromCharCode(110,95,49,49,95,97,114,101,97,0);
         shirtY = `${parseInt(`${smallR}`) / 1}`;
         firebaseb += 1;
         upgradeT.push(upgradeT.length);
         smallR += 1 / (Math.max(1, parseInt(`${firebaseb}`)));
         soundV -= 1 & parseInt(`${soundV}`);
         sharedY += `${parseInt(`${firebaseb}`) << (Math.min(2, Math.abs(1)))}`;
      }
          let placementl = 3.0;
          let paginationq = new Map([[String.fromCharCode(99,95,51,56,95,105,111,101,114,114,0),false ], [String.fromCharCode(120,95,51,48,95,116,114,101,101,114,101,97,100,101,114,0),true ]]);
         shirtY += `${3 ^ parseInt(`${tooltipst}`)}`;
         placementl *= paginationq.size;
         paginationq = new Map([[`${paginationq.size}`, paginationq.size ^ 1]]);
      auto_v8B.push(calendarD.length);
   }
   for (let m = 0; m < 3; m++) {
      catalogX = [3];
   }
   if ((1.72 * watchv) > 3.35 && 4.2 > (watchv * 1.72)) {
      humidityN = `${humidityN.length & 1}`;
   }
   for (let b = 0; b < 2; b++) {
      watchv += parseFloat(`${auto_v8B.length & sharedn.length}`);
   }
   if (5 <= catalogX.length) {
      catalogX = [2 << (Math.min(3, humidityN.length))];
   }
      calendarD = "2";

    dispatch(toggleLockScreen());
      catalogX.push(catalogX.length * modelsh);
      catalogX.push(modelsh);
   for (let t = 0; t < 3; t++) {
       let form3 = 1.0;
       let componentw = 2.0;
          let navigation8 = 5.0;
          let scoreM = String.fromCharCode(105,100,101,110,116,105,116,121,95,101,95,49,52,0);
         form3 *= parseFloat(`${scoreM.length >> (Math.min(1, Math.abs(parseInt(`${navigation8}`))))}`);
         form3 /= Math.max(4, parseFloat(`${parseInt(`${form3}`) << (Math.min(Math.abs(parseInt(`${componentw}`)), 2))}`));
         form3 -= parseFloat(`${2 % (Math.max(4, parseInt(`${componentw}`)))}`);
         componentw *= 3;
      while ((1.24 * componentw) > 1.26 || 1.24 > (form3 * componentw)) {
          let native5 = 1;
          let brightnessB = 3.0;
          let largej = String.fromCharCode(107,95,56,56,95,102,111,108,108,111,119,101,114,115,0);
          let mutedt = [String.fromCharCode(120,95,53,56,95,105,110,118,105,116,101,114,115,0), String.fromCharCode(108,95,51,57,95,99,104,101,99,107,98,111,120,0)];
          let detailsc = 1;
         form3 -= parseFloat(`${3 + parseInt(`${brightnessB}`)}`);
         native5 %= Math.max(3, 4);
         brightnessB -= parseFloat(`${1}`);
         largej = "1 + native5";
         mutedt.push(largej.length);
         detailsc &= 3;
         break;
      }
      if (form3 < 4.71) {
         componentw *= parseInt(`${form3}`) + 2;
      }
      sharedn += "3";
   }
       let clubA = String.fromCharCode(118,105,100,101,111,114,101,110,100,101,114,101,114,95,110,95,49,54,0);
       let eventB = String.fromCharCode(116,101,114,109,105,110,97,116,101,95,109,95,54,51,0);
          let disconnected0 = [895, 622];
          let forwardk = String.fromCharCode(98,95,56,52,95,97,117,116,111,97,114,99,104,105,118,101,0);
          let customC = String.fromCharCode(98,95,50,57,95,105,110,110,101,114,0);
         clubA = `${clubA.length & 3}`;
         disconnected0 = [2 % (Math.max(8, disconnected0.length))];
         forwardk = `${forwardk.length}`;
         customC = `${forwardk.length * 1}`;
      if (eventB != String.fromCharCode(85,0)) {
         clubA = `${eventB.length}`;
      }
         clubA += `${clubA.length % (Math.max(7, eventB.length))}`;
      for (let v = 0; v < 1; v++) {
          let roomc = String.fromCharCode(111,95,56,95,101,103,97,99,121,0);
          let anytime4 = false;
         eventB += "2";
         roomc += `${((anytime4 ? 5 : 3) & roomc.length)}`;
         anytime4 = !anytime4 && roomc.length >= 56;
      }
         eventB += `${1 | eventB.length}`;
          let taiwanp = [781, 143, 912];
          let referrerF = [String.fromCharCode(112,107,99,114,121,112,116,95,51,95,53,50,0), String.fromCharCode(114,116,112,101,110,99,95,113,95,56,55,0)];
          let countryt = String.fromCharCode(118,101,114,116,95,102,95,53,50,0);
         eventB += `${countryt.length / 3}`;
         taiwanp = [2];
         referrerF.push(referrerF.length % (Math.max(8, taiwanp.length)));
         countryt += `${referrerF.length - taiwanp.length}`;
      sharedn += `${(middlewareE == String.fromCharCode(107,0) ? middlewareE.length : (themeA ? 5 : 4))}`;
      humidityN = `${2 & sharedn.length}`;
       let pointr = true;
       let moonP = String.fromCharCode(102,95,51,53,95,98,97,99,107,101,100,0);
       let filledE = String.fromCharCode(122,95,50,54,95,108,111,111,112,98,97,99,107,0);
         moonP += `${filledE.length}`;
         filledE += `${moonP.length}`;
          let assistd = [900, 417];
          let expiredt = String.fromCharCode(106,95,50,52,95,101,110,117,109,101,114,97,116,105,110,103,0);
          let middleware6 = String.fromCharCode(108,105,98,111,112,101,110,106,112,101,103,95,49,95,54,49,0);
         pointr = String.fromCharCode(72,0) == filledE && 10 >= moonP.length;
         assistd.push(assistd.length / 3);
         expiredt = `${middleware6.length << (Math.min(3, assistd.length))}`;
         middleware6 = `${1 | expiredt.length}`;
      if (moonP.length == 1 && pointr) {
          let containerZ = true;
          let animationw = String.fromCharCode(115,95,54,54,95,112,105,99,107,101,114,115,0);
          let unselectedC = [794, 96];
         moonP = `${((pointr ? 5 : 2) * 2)}`;
         containerZ = ((animationw.length / (Math.max(5, (!containerZ ? 12 : animationw.length)))) > 12);
         unselectedC = [animationw.length << (Math.min(5, unselectedC.length))];
      }
      do {
          let memberQ = String.fromCharCode(97,105,109,105,110,103,95,55,95,52,49,0);
          let short_0xm = new Map([[String.fromCharCode(103,95,57,54,95,115,108,117,114,112,0),879], [String.fromCharCode(101,95,53,51,95,99,111,100,101,114,115,0),541]]);
          let roomT = true;
          let statsf = [512, 436, 153];
          let settingsP = String.fromCharCode(99,114,101,97,116,101,101,120,95,107,95,51,55,0);
         filledE += `${moonP.length ^ 2}`;
         memberQ = `${(memberQ == String.fromCharCode(111,0) ? (roomT ? 5 : 4) : memberQ.length)}`;
         short_0xm = new Map([[`${statsf.length}`, 1 & settingsP.length]]);
         roomT = (65 < ((!roomT ? statsf.length : 65) >> (Math.min(statsf.length, 5))));
         settingsP = `${(String.fromCharCode(68,0) == memberQ ? memberQ.length : short_0xm.size)}`;
         if (filledE == String.fromCharCode(52,115,56,113,102,52,109,102,0)) {
            break;
         }
      } while ((!pointr) && (filledE == String.fromCharCode(52,115,56,113,102,52,109,102,0)));
       let baiduz = String.fromCharCode(114,97,109,112,117,112,95,109,95,57,54,0);
      while (filledE.length <= 5) {
         baiduz = "2";
         break;
      }
      while (!filledE.endsWith(moonP)) {
         moonP = `${(String.fromCharCode(88,0) == baiduz ? baiduz.length : moonP.length)}`;
         break;
      }
      if (moonP.length > 1) {
         moonP += `${moonP.length}`;
      }
      auto_v8B.push(3);
   while ((watchv + sellh) <= 2.73) {
       let updatesQ = new Map([[String.fromCharCode(109,95,50,52,95,98,97,107,101,0),394], [String.fromCharCode(116,101,108,101,103,114,97,95,105,95,50,56,0),388], [String.fromCharCode(116,111,100,97,121,95,114,95,57,55,0),350]]);
       let entryI = new Map([[String.fromCharCode(117,110,109,117,116,101,95,105,95,52,56,0),1], [String.fromCharCode(101,114,114,115,116,114,95,121,95,52,0),231]]);
         updatesQ = new Map([[`${entryI.size}`, entryI.size - updatesQ.size]]);
       let gesturei = [String.fromCharCode(117,115,101,100,95,48,95,52,48,0), String.fromCharCode(113,100,109,99,95,100,95,50,55,0)];
       let penalty_ = [831, 291, 267];
         penalty_.push(3 / (Math.max(1, gesturei.length)));
          let renewK = 3.0;
          let borderlessq = 4.0;
         entryI = new Map([[`${penalty_.length}`, penalty_.length]]);
         renewK *= parseInt(`${borderlessq}`);
         borderlessq -= parseFloat(`${parseInt(`${renewK}`)}`);
      do {
          let penaltyW = new Map([[String.fromCharCode(113,95,54,52,95,114,101,99,101,105,112,116,115,0),true ], [String.fromCharCode(109,117,108,95,108,95,51,53,0),false ], [String.fromCharCode(104,108,105,116,95,118,95,53,0),false ]]);
         gesturei = [2 >> (Math.min(3, Math.abs(penaltyW.size)))];
         if (gesturei.length == 3507821) {
            break;
         }
      } while (((gesturei.length / 3) == 4 && 2 == (entryI.size / 3)) && (gesturei.length == 3507821));
      for (let o = 0; o < 1; o++) {
         updatesQ = new Map([[`${updatesQ.size}`, 1 + updatesQ.size]]);
      }
      watchv += parseFloat(`${parseInt(`${watchv}`) / 3}`);
      break;
   }
      themeA = !philippinesS || watchv < 98.28;
   for (let w = 0; w < 1; w++) {
      watchv -= parseFloat(`${1}`);
   }

    dispatch(showControlAction(ShowControlType.TopBottom));
      sharedn = "3";
      watchv /= Math.max(parseFloat(`${modelsh}`), 1);
       let updatesp = 5.0;
         updatesp += parseInt(`${updatesp}`);
         updatesp -= parseInt(`${updatesp}`) & 1;
          let humidityw = true;
         updatesp *= parseInt(`${updatesp}`) / 2;
         humidityw = (!humidityw ? humidityw : humidityw);
      auto_v8B.push(auto_v8B.length - 1);
   while (!themeA && philippinesS) {
      themeA = middlewareE.startsWith(`${dice2}`);
      break;
   }
       let previewK = false;
       let type_c1E = String.fromCharCode(105,95,53,51,95,114,105,100,103,101,0);
      do {
         previewK = type_c1E.length >= 72 || previewK;
         if (previewK ? !previewK : previewK) {
            break;
         }
      } while ((type_c1E.length <= 3 && !previewK) && (previewK ? !previewK : previewK));
          let tickedK = 2.0;
         previewK = (tickedK + type_c1E.length) == 11.37;
         type_c1E = `${1 | type_c1E.length}`;
      do {
         previewK = type_c1E.length <= 51;
         if (previewK ? !previewK : previewK) {
            break;
         }
      } while ((previewK ? !previewK : previewK) && (type_c1E.startsWith(`${previewK}`)));
       let ewardedk = 3.0;
       let field7 = 3.0;
         field7 /= Math.max(parseInt(`${ewardedk}`), 4);
      sellh *= 1;
   if (!calendarD.startsWith(`${philippinesS}`)) {
       let middle3 = [222, 429];
          let zhubo6 = 3.0;
         middle3.push(parseInt(`${zhubo6}`) % 3);
      if (3 > (5 - middle3.length) && 5 > (middle3.length - middle3.length)) {
         middle3 = [middle3.length];
      }
          let modalQ = 4.0;
          let forml = 0;
          let sheetA = new Map([[String.fromCharCode(115,95,56,55,95,108,111,99,107,101,100,0),832], [String.fromCharCode(115,112,111,105,108,101,114,95,53,95,49,48,48,0),889], [String.fromCharCode(120,95,51,48,95,114,97,110,107,105,110,103,0),553]]);
         middle3 = [parseInt(`${modalQ}`)];
         modalQ *= sheetA.size ^ 2;
         forml -= sheetA.size ^ forml;
      philippinesS = !middlewareE.startsWith(`${sellh}`);
   }
   if (humidityN != calendarD) {
      calendarD = `${((philippinesS ? 1 : 1) << (Math.min(Math.abs(parseInt(`${dice2}`)), 3)))}`;
   }
   for (let s = 0; s < 3; s++) {
      actionh /= Math.max((parseFloat(`${parseInt(`${sellh}`) - (themeA ? 1 : 2)}`)), 2);
   }
       let modele = true;
       let usernamew = new Map([[String.fromCharCode(108,95,57,53,95,97,100,100,107,101,121,0),true ], [String.fromCharCode(118,95,51,48,95,115,109,97,108,108,0),true ]]);
      if (3 <= (5 | usernamew.size) && !modele) {
         usernamew = new Map([[`${usernamew.size}`, ((modele ? 5 : 3) % (Math.max(2, 10)))]]);
      }
      while (usernamew.size >= 2 || (2 * usernamew.size) >= 3) {
         modele = !modele && usernamew.size == 99;
         break;
      }
      middlewareE += "1";

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
       let whatsappM = [525, 289];
    let black0 = 0;
    let changeB = String.fromCharCode(113,95,52,48,95,109,97,99,104,0);
    let rewind2 = String.fromCharCode(103,95,49,50,95,97,112,110,103,0);
    let circlep = 5.0;
    let largev = false;
    let countryK = new Map([[String.fromCharCode(118,95,52,95,109,112,116,111,97,110,110,101,120,98,0),String.fromCharCode(121,95,49,50,95,117,110,105,113,117,101,108,121,0)], [String.fromCharCode(102,105,120,116,117,114,101,115,95,120,95,50,54,0),String.fromCharCode(98,95,55,53,95,99,111,100,101,99,0)], [String.fromCharCode(101,95,52,53,95,97,110,97,103,108,121,112,104,0),String.fromCharCode(116,95,49,95,119,111,114,107,115,0)]]);
    let carousela = String.fromCharCode(115,95,51,48,95,97,117,116,104,101,110,116,105,99,97,116,101,0);
    let disconnected7 = String.fromCharCode(115,97,109,112,108,101,114,97,116,101,115,95,118,95,56,53,0);
    let flyerN = 1.0;
    let canvasR = String.fromCharCode(103,110,114,101,95,97,95,57,53,0);
    let nativem = String.fromCharCode(103,95,56,51,95,97,118,97,116,97,114,0);
    let tooltipso = 4;
    let malaysiaz = new Map([[String.fromCharCode(116,95,55,53,95,115,101,99,115,0),289], [String.fromCharCode(114,95,49,54,95,115,116,101,112,0),894], [String.fromCharCode(115,95,54,95,122,101,116,97,0),369]]);
    let heartz = String.fromCharCode(106,95,49,48,95,100,114,105,102,116,0);
    let const_qu0 = false;
   while (canvasR == changeB) {
      changeB += `${black0}`;
      break;
   }
   for (let w = 0; w < 3; w++) {
      carousela = `${(parseInt(`${circlep}`) + (largev ? 2 : 1))}`;
   }

  const dispatch = useDispatch();
   if (whatsappM.length == 3) {
      whatsappM.push(countryK.size);
   }
   if (4.82 > flyerN) {
       let completen = 1;
       let infoP = new Map([[String.fromCharCode(103,95,56,57,95,104,105,101,114,97,114,99,104,121,0),159], [String.fromCharCode(121,95,54,54,95,100,107,101,121,0),252], [String.fromCharCode(120,95,50,56,95,105,100,101,110,116,105,116,121,0),315]]);
      if (!Array.from(infoP.keys()).includes(`${completen}`)) {
         infoP[`${completen}`] = infoP.size;
      }
      if ((infoP.size >> (Math.min(Math.abs(3), 4))) == 2) {
         infoP = new Map([[`${infoP.size}`, infoP.size & completen]]);
      }
      if (infoP.size <= 2) {
         infoP[`${completen}`] = infoP.size + 2;
      }
      do {
         completen /= Math.max(infoP.size ^ 1, 4);
         if (2838363 == completen) {
            break;
         }
      } while ((infoP[`${completen}`] == null) && (2838363 == completen));
      do {
         infoP = new Map([[`${infoP.size}`, infoP.size]]);
         if (infoP.size == 1249767) {
            break;
         }
      } while ((5 == completen) && (infoP.size == 1249767));
      if (2 >= infoP.size) {
          let greyR = 0.0;
          let show5 = 5.0;
         completen %= Math.max(completen - 1, 3);
         greyR /= Math.max(1, parseInt(`${show5}`));
         show5 *= parseFloat(`${parseInt(`${greyR}`)}`);
      }
      largev = disconnected7.length == nativem.length;
   }

  const onPress = () => {

   do {
      nativem += "3";
      if (String.fromCharCode(98,122,100,120,113,122,108,111,110,120,0) == nativem) {
         break;
      }
   } while ((changeB == String.fromCharCode(84,0)) && (String.fromCharCode(98,122,100,120,113,122,108,111,110,120,0) == nativem));
       let storeK = String.fromCharCode(115,110,111,119,100,97,116,97,95,51,95,53,52,0);
       let selection9 = String.fromCharCode(122,95,52,53,95,98,105,110,107,100,97,116,97,0);
       let sideD = String.fromCharCode(118,105,100,101,111,114,101,110,100,101,114,101,114,95,103,95,49,53,0);
       let largeD = String.fromCharCode(115,95,56,50,95,121,117,118,109,112,101,103,0);
      for (let q = 0; q < 1; q++) {
         sideD += `${sideD.length >> (Math.min(Math.abs(3), 4))}`;
      }
      canvasR += `${tooltipso}`;
      storeK = `${storeK.length}`;
    dispatch(toggleLockScreen());
   for (let c = 0; c < 3; c++) {
      flyerN *= tooltipso / (Math.max(1, 8));
   }
      black0 |= whatsappM.length | disconnected7.length;

    dispatch(showControlAction(ShowControlType.Locker));
   for (let h = 0; h < 3; h++) {
       let shirtw = String.fromCharCode(103,95,52,52,95,118,116,97,115,107,113,117,101,117,101,0);
       let annerZ = new Map([[String.fromCharCode(110,97,112,115,104,111,116,95,105,95,55,55,0),false ], [String.fromCharCode(114,101,97,100,98,121,116,101,95,53,95,57,53,0),true ]]);
       let optionsP = [String.fromCharCode(105,95,52,55,95,103,105,116,104,117,98,0), String.fromCharCode(122,95,50,48,0), String.fromCharCode(119,95,54,95,116,105,99,107,101,114,0)];
          let progress0 = new Map([[String.fromCharCode(102,95,56,54,95,112,97,114,97,109,115,0),675], [String.fromCharCode(116,111,109,105,99,95,118,95,52,49,0),925]]);
          let collectionH = [String.fromCharCode(118,95,57,50,95,112,97,114,116,105,99,108,101,0), String.fromCharCode(101,95,49,95,101,110,116,105,114,101,0)];
          let largef = 2;
         optionsP.push(1);
         progress0[`${largef}`] = collectionH.length;
         collectionH = [progress0.size];
         largef /= Math.max(collectionH.length << (Math.min(1, Math.abs(progress0.size))), 3);
      do {
         optionsP.push(3 ^ annerZ.size);
         if (optionsP.length == 4462806) {
            break;
         }
      } while ((optionsP.length == 4462806) && ((annerZ.size * optionsP.length) <= 1));
         annerZ[`${optionsP.length}`] = annerZ.size;
      while ((optionsP.length ^ shirtw.length) == 5) {
          let philippinesL = false;
          let sorth = String.fromCharCode(97,95,49,52,95,114,97,115,116,101,114,105,122,101,115,0);
          let detail6 = 3.0;
          let q_unlockX = 3;
          let leftd = false;
         shirtw += `${((leftd ? 3 : 1) << (Math.min(shirtw.length, 4)))}`;
         philippinesL = (q_unlockX ^ sorth.length) < 18;
         sorth = `${q_unlockX}`;
         detail6 -= parseFloat(`${q_unlockX - 1}`);
         leftd = (q_unlockX - detail6) > 11;
         break;
      }
          let private_946 = new Map([[String.fromCharCode(103,100,115,112,95,121,95,53,48,0),472], [String.fromCharCode(116,95,56,49,95,104,97,100,111,119,115,0),838]]);
          let malaysiaw = String.fromCharCode(109,97,120,105,109,117,109,95,115,95,57,48,0);
         annerZ[`${optionsP.length}`] = private_946.size * 3;
         private_946[malaysiaw] = malaysiaw.length + malaysiaw.length;
       let hookB = true;
      do {
         shirtw = "3";
         if (shirtw == String.fromCharCode(50,52,99,112,122,118,0)) {
            break;
         }
      } while ((shirtw == String.fromCharCode(50,52,99,112,122,118,0)) && (shirtw.length == 3));
          let anytimeo = 0.0;
          let black6 = 1;
          let eighteenE = String.fromCharCode(108,101,97,118,105,110,103,95,102,95,49,52,0);
         shirtw = "1";
         anytimeo -= black6 * 3;
         black6 <<= Math.min(Math.abs(3), 3);
         eighteenE += `${black6}`;
      while (!hookB || (optionsP.length ^ 2) == 2) {
          let faviconW = String.fromCharCode(110,97,110,112,97,95,122,95,55,51,0);
          let update_lg = false;
         optionsP = [(faviconW.length ^ (update_lg ? 1 : 1))];
         break;
      }
      nativem += `${rewind2.length}`;
   }
       let theme1 = String.fromCharCode(97,95,50,52,95,115,105,103,0);
         theme1 = `${theme1.length / 1}`;
      while (theme1.length < theme1.length) {
         theme1 = `${1 % (Math.max(1, theme1.length))}`;
         break;
      }
       let brightnessn = String.fromCharCode(110,97,108,117,115,95,103,95,53,57,0);
      whatsappM.push(2);

  };
       let tickF = 3.0;
       let volume6 = String.fromCharCode(116,111,110,101,109,97,112,95,110,95,49,51,0);
       let ewarded8 = String.fromCharCode(105,95,49,50,95,118,115,102,114,97,109,101,0);
       let styleg = String.fromCharCode(100,111,99,107,101,114,95,111,95,53,48,0);
          let main_cT = String.fromCharCode(100,105,115,115,105,109,95,122,95,50,50,0);
         volume6 = `${parseInt(`${tickF}`) >> (Math.min(Math.abs(3), 4))}`;
         main_cT = `${main_cT.length}`;
         ewarded8 = `${styleg.length * ewarded8.length}`;
       let product1 = [61, 583, 207];
      for (let x = 0; x < 2; x++) {
          let notificationJ = [280, 123, 609];
         ewarded8 = `${3 & ewarded8.length}`;
         notificationJ = [2 ^ notificationJ.length];
      }
      do {
          let matchf = String.fromCharCode(100,105,103,105,116,99,111,117,110,116,95,55,95,49,53,0);
          let groupe = String.fromCharCode(115,95,56,51,95,117,110,97,114,99,104,105,118,101,100,0);
          let umengx = new Map([[String.fromCharCode(105,95,52,49,95,100,101,109,97,110,100,0),839], [String.fromCharCode(115,97,100,100,95,121,95,49,48,48,0),402], [String.fromCharCode(102,95,51,50,95,99,111,108,108,101,99,116,105,98,108,101,115,0),236]]);
         tickF += parseFloat(`${ewarded8.length - 3}`);
         matchf += `${2 >> (Math.min(3, matchf.length))}`;
         groupe += `${groupe.length * matchf.length}`;
         umengx[`${groupe}`] = groupe.length;
         if (2751698.0 == tickF) {
            break;
         }
      } while ((2751698.0 == tickF) && (4.26 <= (5.8 * tickF) || (tickF * parseFloat(`${volume6.length}`)) <= 5.8));
      tooltipso *= canvasR.length;
       let updatesz = new Map([[String.fromCharCode(97,114,109,118,116,101,95,53,95,55,54,0),true ], [String.fromCharCode(112,114,111,100,95,48,95,51,0),true ], [String.fromCharCode(100,101,105,110,116,101,114,108,101,97,118,101,100,95,116,95,55,57,0),true ]]);
       let indicatorG = 4.0;
         indicatorG -= parseFloat(`${updatesz.size | parseInt(`${indicatorG}`)}`);
      for (let n = 0; n < 2; n++) {
          let more7 = new Map([[String.fromCharCode(100,95,52,54,95,112,97,99,101,114,0),177], [String.fromCharCode(100,95,56,52,95,114,101,97,99,116,105,111,110,0),298]]);
          let injuryE = String.fromCharCode(118,95,54,57,95,102,111,111,116,98,97,108,108,0);
          let downloading4 = String.fromCharCode(98,95,54,49,95,107,98,105,116,0);
          let ewardedN = 2.0;
          let popupe = [35, 176];
         updatesz = new Map([[`${more7.size}`, more7.size / (Math.max(9, parseInt(`${indicatorG}`)))]]);
         injuryE = `${downloading4.length / 1}`;
         downloading4 = `${injuryE.length}`;
         ewardedN /= Math.max(4, parseFloat(`${2 >> (Math.min(4, Math.abs(parseInt(`${ewardedN}`))))}`));
         popupe.push(parseInt(`${ewardedN}`) + downloading4.length);
      }
      do {
         indicatorG *= parseFloat(`${1}`);
         if (3046863.0 == indicatorG) {
            break;
         }
      } while (((updatesz.size / (Math.max(2, parseInt(`${indicatorG}`)))) <= 1) && (3046863.0 == indicatorG));
      for (let k = 0; k < 1; k++) {
         indicatorG /= Math.max(parseFloat(`${1}`), 3);
      }
      do {
          let clubc = 2.0;
          let topicx = 1.0;
          let description_6c = true;
         updatesz[`${topicx}`] = parseInt(`${topicx}`) << (Math.min(3, Math.abs(3)));
         clubc += parseInt(`${clubc}`) + 3;
         description_6c = clubc < 12.60 || description_6c;
         if (updatesz.size == 4139187) {
            break;
         }
      } while ((updatesz.size == 4139187) && (3 >= (parseInt(`${indicatorG}`) / (Math.max(updatesz.size, 5))) || 3.87 >= (indicatorG / 5.50)));
          let watchL = 3;
          let rightb = String.fromCharCode(101,114,111,100,101,95,56,95,52,53,0);
         updatesz[`${watchL}`] = rightb.length;
      carousela = `${updatesz.size}`;

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
      changeB += `${countryK.size}`;
      disconnected7 += `${1 << (Math.min(5, Math.abs(tooltipso)))}`;

};

export const ShareButton = () => {
       let signinupK = new Map([[String.fromCharCode(122,95,53,51,95,115,112,108,105,116,0),true ], [String.fromCharCode(112,95,49,50,95,100,108,105,100,120,0),false ], [String.fromCharCode(98,95,56,49,95,99,111,111,114,100,105,110,97,116,101,115,0),true ]]);
    let read9 = String.fromCharCode(101,95,53,54,95,109,97,116,114,105,120,101,110,99,0);
    let whatsappY = [String.fromCharCode(103,95,56,48,95,99,97,115,116,115,0), String.fromCharCode(106,95,57,57,95,100,114,97,119,0), String.fromCharCode(117,95,57,57,95,121,112,114,101,100,105,99,116,105,111,110,0)];
    let twitterN = [String.fromCharCode(114,95,51,48,95,111,112,101,110,105,110,103,0), String.fromCharCode(109,95,54,50,95,115,101,110,115,111,114,0), String.fromCharCode(114,101,116,114,105,101,118,101,100,95,115,95,54,0)];
    let giftm = false;
    let placementC = 1;
    let interstitialM = String.fromCharCode(112,95,55,52,95,98,101,97,116,105,110,103,0);
    let vertical5 = String.fromCharCode(113,100,109,100,97,116,97,95,48,95,56,57,0);
    let searchbar5 = String.fromCharCode(115,121,110,99,104,114,111,110,105,122,101,97,98,108,101,95,112,95,57,55,0);
    let stationb = [308, 626, 319];
    let controlsU = 4.0;
   if ((placementC >> (Math.min(Math.abs(signinupK.size), 5))) <= 3) {
      placementC |= 1;
   }

  const dispatch = useDispatch();
   for (let c = 0; c < 3; c++) {
      twitterN.push(3);
   }

  const debouncedShare = useCallback(
    debounce((title, matchId) => shareStream(title, matchId), 500),
    [],
  );
      vertical5 += `${twitterN.length - 3}`;


  const matchId = useSelector(state => state.matchId);
   for (let p = 0; p < 2; p++) {
      whatsappY.push(2 | searchbar5.length);
   }

  const liveRoomAction = new YKBTurn(dispatch, matchId);
  // const shareLink = useSelector(state => state.shareLink);
      signinupK[interstitialM] = placementC & 2;

  const liveDataState = useSelector(state => state.liveRoom);
      twitterN = [signinupK.size];

  const competitionNameShort = liveDataState?.competition?.name_short;
   do {
      twitterN.push((read9 == String.fromCharCode(71,0) ? signinupK.size : read9.length));
      if (965533 == twitterN.length) {
         break;
      }
   } while (((vertical5.length >> (Math.min(Math.abs(3), 5))) == 1 && 1 == (3 >> (Math.min(2, vertical5.length)))) && (965533 == twitterN.length));

  const awayName = liveDataState?.away?.name;
   do {
      searchbar5 = `${whatsappY.length * signinupK.size}`;
      if (searchbar5 == String.fromCharCode(118,107,56,113,106,0)) {
         break;
      }
   } while ((searchbar5 == String.fromCharCode(118,107,56,113,106,0)) && (!read9.endsWith(`${searchbar5.length}`)));

  const homeName = liveDataState?.home?.name;
   while (vertical5 != interstitialM) {
       let eactz = String.fromCharCode(115,104,111,119,99,113,116,95,115,95,51,53,0);
       let serviceJ = 3;
       let filled3 = String.fromCharCode(104,95,57,52,95,114,111,111,109,0);
       let unselectedP = 1.0;
         serviceJ /= Math.max(parseInt(`${unselectedP}`), 2);
       let fastforwardf = String.fromCharCode(111,110,99,101,95,116,95,50,0);
       let temperatureR = String.fromCharCode(97,95,52,55,95,112,114,111,98,101,0);
      for (let s = 0; s < 1; s++) {
         temperatureR += `${temperatureR.length}`;
      }
      do {
         fastforwardf += `${(temperatureR == String.fromCharCode(65,0) ? serviceJ : temperatureR.length)}`;
         if (String.fromCharCode(50,55,97,104,110,0) == fastforwardf) {
            break;
         }
      } while ((eactz != String.fromCharCode(106,0)) && (String.fromCharCode(50,55,97,104,110,0) == fastforwardf));
         temperatureR += `${3 + fastforwardf.length}`;
         serviceJ <<= Math.min(Math.abs(temperatureR.length % (Math.max(eactz.length, 1))), 1);
       let favicon1 = new Map([[String.fromCharCode(115,95,49,50,95,99,109,97,99,0),true ], [String.fromCharCode(115,112,105,110,110,101,114,95,111,95,53,48,0),false ], [String.fromCharCode(112,111,112,117,112,95,107,95,56,50,0),false ]]);
       let telegramI = new Map([[String.fromCharCode(98,95,51,54,95,114,103,98,116,111,121,118,0),970], [String.fromCharCode(100,95,56,95,113,117,105,122,0),930]]);
      for (let m = 0; m < 3; m++) {
          let main_bX = new Map([[String.fromCharCode(114,95,49,56,95,102,108,111,99,107,0),String.fromCharCode(103,95,56,95,116,114,97,110,115,102,111,114,109,97,116,105,111,110,0)], [String.fromCharCode(107,95,53,57,0),String.fromCharCode(106,95,50,52,95,105,110,99,114,101,97,115,105,110,103,0)], [String.fromCharCode(108,95,54,50,95,118,115,102,114,97,109,101,0),String.fromCharCode(101,109,109,115,95,51,95,53,55,0)]]);
          let scopy_5st = String.fromCharCode(111,95,57,49,95,114,117,110,108,111,111,112,0);
          let floatingA = String.fromCharCode(104,105,103,104,108,105,103,104,116,115,95,103,95,51,51,0);
          let verticalw = new Map([[String.fromCharCode(112,95,51,95,97,97,97,97,0),true ], [String.fromCharCode(120,95,49,54,95,109,101,100,105,117,109,116,104,114,101,115,104,0),true ], [String.fromCharCode(115,111,114,116,95,108,95,52,54,0),false ]]);
         temperatureR += `${(String.fromCharCode(98,0) == eactz ? favicon1.size : eactz.length)}`;
         main_bX[floatingA] = floatingA.length + 3;
         scopy_5st = "1";
         verticalw = new Map([[floatingA, scopy_5st.length]]);
      }
       let register_nX = String.fromCharCode(111,95,50,48,95,97,115,121,110,99,104,114,111,110,111,117,115,108,121,0);
         telegramI = new Map([[register_nX, 2]]);
      while (3 <= (1 - parseInt(`${unselectedP}`)) && 2 <= (filled3.length + 1)) {
         filled3 += `${telegramI.size}`;
         break;
      }
      do {
         eactz = `${serviceJ & eactz.length}`;
         if (String.fromCharCode(118,116,98,102,0) == eactz) {
            break;
         }
      } while ((String.fromCharCode(118,116,98,102,0) == eactz) && (eactz.length == 3));
      interstitialM = `${read9.length + placementC}`;
      break;
   }


  const title = `${competitionNameShort} | ${homeName} vs ${awayName}`;
   while (searchbar5.length <= read9.length) {
      searchbar5 += `${(String.fromCharCode(48,0) == interstitialM ? whatsappY.length : interstitialM.length)}`;
      break;
   }


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
